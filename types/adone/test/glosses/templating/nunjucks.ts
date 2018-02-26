namespace adoneTests.templating.nunjucks {
    const {
        templating: {
            nunjucks
        }
    } = adone;

    let str: string;
    let bool: boolean;
    let pstr: Promise<string>;

    namespace Environment {
        const {
            Environment
        } = nunjucks;

        new Environment();
        new Environment(new nunjucks.FileSystemLoader());
        new Environment(new nunjucks.FileSystemLoader(), { autoescape: true });
        new Environment(new nunjucks.FileSystemLoader(), { dev: true });
        new Environment(new nunjucks.FileSystemLoader(), { lstripBlocks: true });
        new Environment(new nunjucks.FileSystemLoader(), { throOnUndefined: true });
        new Environment(new nunjucks.FileSystemLoader(), { trimBlocks: true });

        const e = new Environment();
        str = e.render("a");
        e.render("a", {}, (e, r: string) => {});
        str = e.renderString("a");
        str = e.renderString("a", {});
        e.renderString("a", {}, (e, r: string) => {});

        e.addFilter("name", () => 2);
        e.addFilter("name", () => 2, true);
        e.getFilter("name")();

        e.addExtension("name", { parse() { return "a"; }, tags: ["a"] });
        e.removeExtension("name");
        e.getExtension("name").parse({}, {}, {});
        str = e.getExtension("name").tags[0];
        bool = e.hasExtension("name");
        e.addGlobal("a", "b");
        str = e.getTemplate("name", true).render();
        str = e.getTemplate("name").render();
    }

    namespace Template {
        const {
            Template
        } = nunjucks;

        new Template("asd");
        new Template("asd", new nunjucks.Environment());
        new Template("asd", new nunjucks.Environment(), true);
        str = new Template("asd").render();
        new Template("asd").render({}, (e: any, res: string) => {});
    }

    namespace Loader {
        const {
            Loader
        } = nunjucks;

        new Loader();
        new Loader().on("asd", () => {});
        new Loader().emit("asd", 1, 2, 3);
        str = new Loader().resolve("asd", "asd");
        bool = new Loader().isRelative("asd");
        new Loader().extend({
            async: true,
            getSource(name: string) {
                return { src: "a", path: "b", noCache: true };
            },
            extend(extender) {
                extender.async;
                extender.extend;
                extender.getSource("a");
                return extender;
            }
        });
    }

    namespace FileSystemLoader {
        const {
            FileSystemLoader
        } = nunjucks;

        new FileSystemLoader();
        new FileSystemLoader(["a"]);
        new FileSystemLoader(["a"], { noCache: true });
        new FileSystemLoader(["a"], { watch: true });
        bool = new FileSystemLoader(["a"], { watch: true }).getSource("name").noCache;
        str = new FileSystemLoader(["a"], { watch: true }).getSource("name").path;
        str = new FileSystemLoader(["a"], { watch: true }).getSource("name").src;
    }

    namespace PrecompiledLoader {
        const {
            PrecompiledLoader
        } = nunjucks;

        new PrecompiledLoader();
        bool = new PrecompiledLoader().getSource("name").noCache;
        str = new PrecompiledLoader().getSource("name").path;
        str = new PrecompiledLoader().getSource("name").src;
    }

    pstr = nunjucks.render("he");
    pstr = nunjucks.render("he", {});

    str = nunjucks.renderSync("he");
    str = nunjucks.renderSync("he", {});

    pstr = nunjucks.renderString("he");
    pstr = nunjucks.renderString("he", {});

    str = nunjucks.renderStringSync("he");
    str = nunjucks.renderStringSync("he", {});

    let t = nunjucks.compile("he");
    t = nunjucks.compile("he", new nunjucks.Environment());
    t = nunjucks.compile("he", new nunjucks.Environment(), "asd");
    t = nunjucks.compile("he", new nunjucks.Environment(), "asd", true);
    str = t.render();

    let e = nunjucks.configure();
    e = nunjucks.configure({});
    e = nunjucks.configure({ autoescape: true });
    e = nunjucks.configure({ dev: true });
    e = nunjucks.configure({ lstripBlocks: true });
    e = nunjucks.configure({ noCache: true });
    e = nunjucks.configure({ tags: { blockEnd: "{" } });
    e = nunjucks.configure({ throOnUndefined: true });
    e = nunjucks.configure({ trimBlocks: true });
    e = nunjucks.configure({ watch: true });
    e = nunjucks.configure("a", { watch: true });
    e.addFilter("name", () => true);

    nunjucks.installJinjaCompat();
}
