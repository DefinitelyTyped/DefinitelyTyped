import {
    JSDOM,
    VirtualConsole,
    CookieJar,
    BaseOptions,
    FileOptions,
    DOMWindow,
    ResourceLoader,
    FetchOptions,
    ConstructorOptions,
} from "jsdom";
import { CookieJar as ToughCookieJar, MemoryCookieStore } from "tough-cookie";
import { Script } from "vm";

function test_basic_usage() {
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    console.log(dom.window.document.querySelector("p")!.textContent); // "Hello world"

    const { window } = new JSDOM(`...`);
    // or even
    const { document } = new JSDOM(`...`).window;
}

function test_executing_scripts1() {
    const dom = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`);

    // The script will not be executed, by default:
    dom.window.document.body.children.length === 1;
}

function test_executing_scripts2() {
    const dom = new JSDOM(
        `<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`,
        { runScripts: "dangerously" },
    );

    // The script will be executed and modify the DOM:
    dom.window.document.body.children.length === 2;
}

function test_executing_scripts3() {
    const window = new JSDOM(``, { runScripts: "outside-only" }).window;

    window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
    window.document.body.children.length === 1;
}

function test_virtualConsole() {
    const virtualConsole = new VirtualConsole();
    const dom = new JSDOM(``, { virtualConsole });

    virtualConsole.on("error", () => {});
    virtualConsole.on("warn", () => {});
    virtualConsole.on("info", () => {});
    virtualConsole.on("dir", () => {});
    // ... etc. See https://console.spec.whatwg.org/#logging

    virtualConsole.sendTo(console);

    const c = console;
    virtualConsole.sendTo(c, { omitJSDOMErrors: true });
}

function test_cookieJar(store: MemoryCookieStore, options: ToughCookieJar.Options) {
    const cookieJar: CookieJar = new CookieJar(store, options);
    const constructorOptions: ConstructorOptions = { cookieJar };
    const dom = new JSDOM(``, constructorOptions);
}

function test_beforeParse() {
    const dom = new JSDOM(`<p>Hello</p>`, {
        beforeParse(window) {
            window.document.childNodes.length === 0;
        },
    });
}

function test_storageQuota() {
    new JSDOM("", { storageQuota: 1337 });
}

function test_pretendToBeVisual() {
    new JSDOM("", { pretendToBeVisual: true });
}

function test_serialize() {
    const dom = new JSDOM(`<!DOCTYPE html>hello`);

    dom.serialize() === "<!DOCTYPE html><html><head></head><body>hello</body></html>";

    // Contrast with:
    // tslint:disable-next-line no-unnecessary-type-assertion
    dom.window.document.documentElement!.outerHTML === "<html><head></head><body>hello</body></html>";
}

function test_nodeLocation() {
    const dom = new JSDOM(
        `<p>Hello
    <img src="foo.jpg">
  </p>`,
        { includeNodeLocations: true },
    );

    const document = dom.window.document;
    const bodyEl = document.body; // implicitly created
    const pEl = document.querySelector("p")!;
    const textNode = pEl.firstChild!;
    const imgEl = document.querySelector("img")!;

    console.log(dom.nodeLocation(bodyEl)); // null; it's not in the source
    console.log(dom.nodeLocation(pEl)); // { startOffset: 0, endOffset: 39, startTag: ..., endTag: ... }
    console.log(dom.nodeLocation(textNode)); // { startOffset: 3, endOffset: 13 }
    console.log(dom.nodeLocation(imgEl)); // { startOffset: 13, endOffset: 32 }
}

function test_runVMScript() {
    const dom = new JSDOM(``, { runScripts: "outside-only" });
    const script = new Script(`
    if (!this.ran) {
        this.ran = 0;
    }
    ++this.ran;
`);

    const vmContext = dom.getInternalVMContext();

    script.runInContext(vmContext);
    script.runInContext(vmContext);
    script.runInContext(vmContext);

    dom.window.ran === 3;
}

function test_reconfigure(myFakeTopForTesting: DOMWindow) {
    const dom = new JSDOM();

    dom.window.top === dom.window;
    dom.window.location.href === "about:blank";

    dom.reconfigure({ windowTop: myFakeTopForTesting, url: "https://example.com/" });

    dom.window.top === myFakeTopForTesting;
    dom.window.location.href === "https://example.com/";
}

function test_fromURL() {
    const options: BaseOptions = {};

    JSDOM.fromURL("https://example.com/", options).then(dom => {
        console.log(dom.serialize());
    });

    function pretendToBeVisual() {
        JSDOM.fromURL("https://github.com", {
            pretendToBeVisual: true,
        });
    }
}

function test_fromFile(options: FileOptions) {
    JSDOM.fromFile("stuff.html", options).then(dom => {
        console.log(dom.serialize());
    });
}

function test_fragment() {
    const frag = JSDOM.fragment(`<p>Hello</p><p><strong>Hi!</strong>`);

    frag.childNodes.length === 2;
    frag.querySelector("strong")!.textContent = "Why hello there!";
    // etc.
}

function test_fragment_serialization() {
    const frag = JSDOM.fragment(`<p>Hello</p>`);
    if (frag instanceof Element) {
        if (frag.firstChild instanceof Element) {
            console.log(frag.firstChild.outerHTML); // logs "<p>Hello</p>"
        }
    }
}

function test_custom_resource_loader() {
    class CustomResourceLoader extends ResourceLoader {
        fetch(url: string, options: FetchOptions) {
            if (options.element) {
                console.log(`Element ${options.element.localName} is requesting the url ${url}`);

                if (options.element.localName === "iframe") {
                    console.log("Ignoring resource requested by iframe element");
                    return null;
                }
            }

            return super.fetch(url, options);
        }
    }
    new JSDOM("", { resources: new CustomResourceLoader() });
}

function test_resource_loader_return_type(resourceLoader: ResourceLoader) {
    resourceLoader.fetch("https://example.com", {}); // $ExpectType AbortablePromise<Buffer> | null
}
