import { inspect } from "node:util";
import {
    compileFunction,
    createContext,
    isContext,
    measureMemory,
    MemoryMeasurement,
    runInNewContext,
    runInThisContext,
    Script,
    SourceTextModule,
    SyntheticModule,
} from "node:vm";

{
    const sandbox = {
        animal: "cat",
        count: 2,
    };

    const context = createContext(sandbox, {
        name: "test",
        origin: "file://test.js",
        codeGeneration: {
            strings: true,
            wasm: true,
        },
    });
    console.log(isContext(context));
    const script = new Script("count += 1; name = \"kitty\"");

    for (let i = 0; i < 10; ++i) {
        script.runInContext(context);
    }

    console.log(inspect(sandbox));

    runInNewContext("count += 1; name = \"kitty\"", sandbox);
    console.log(inspect(sandbox));
}

{
    const sandboxes = [{}, {}, {}];

    const script = new Script("globalVar = \"set\"");

    sandboxes.forEach((sandbox) => {
        script.runInNewContext(sandbox);
        script.runInThisContext();
    });

    console.log(inspect(sandboxes));

    const localVar = "initial value";
    runInThisContext("localVar = \"vm\";");

    console.log(localVar);
}

{
    runInThisContext("console.log(\"hello world\"", "./my-file.js");
}

{
    const code = "console.log(\"test\")";
    const params = [] as const;

    let fn = compileFunction(code);
    fn = compileFunction(code, params);
    fn = compileFunction(code, params, {});
    fn = compileFunction(code, params, {
        filename: "",
        lineOffset: 0,
        columnOffset: 0,
        parsingContext: createContext(),
        contextExtensions: [{
            a: 1,
        }],
        produceCachedData: false,
        cachedData: Buffer.from("nope"),
    });
    fn = compileFunction(code, params, {
        cachedData: new Uint8Array(),
    });
    fn = compileFunction(code, params, {
        cachedData: new DataView(new ArrayBuffer(10)),
    });

    fn satisfies Function;
    // $ExpectType Buffer<ArrayBufferLike> | undefined
    fn.cachedData;
    // $ExpectType boolean | undefined
    fn.cachedDataProduced;
    // $ExpectType boolean | undefined
    fn.cachedDataRejected;
}

{
    const usage = measureMemory({
        mode: "detailed",
        execution: "eager",
    }).then((data: MemoryMeasurement) => {});
}

{
    runInNewContext(
        "blah",
        {},
        { timeout: 5, microtaskMode: "afterEvaluate" },
    );
}

{
    const script = new Script("foo()", { cachedData: Buffer.from([]) });
    console.log(script.cachedDataProduced);
    console.log(script.cachedDataRejected);
    console.log(script.cachedData);
}

{
    // createContext accepts microtaskMode param
    const sandbox = {
        animal: "cat",
        count: 2,
    };

    const context = createContext(sandbox, {
        name: "test",
        origin: "file://test.js",
        codeGeneration: {
            strings: true,
            wasm: true,
        },
        microtaskMode: "afterEvaluate",
    });
    console.log(isContext(context));
}

(async () => {
    const contextifiedObject = createContext({
        secret: 42,
        print: console.log,
    });

    const bar = new SourceTextModule(
        `
        import s from 'foo';
        s;
        print(s);
    `,
        { context: contextifiedObject },
    );

    await bar.link(async function linker(specifier, referencingModule) {
        if (specifier === "foo") {
            return new SourceTextModule(
                `
                // The "secret" variable refers to the global variable we added to
                // "contextifiedObject" when creating the context.
                export default secret;
            `,
                { context: referencingModule.context },
            );
        }
        throw new Error(`Unable to resolve dependency: ${specifier}`);
    });

    await bar.evaluate();
});

(async () => {
    const source = "{ \"a\": 1 }";
    const module = new SyntheticModule(["default"], function() {
        const obj = JSON.parse(source);
        this.setExport("default", obj);
    });
});

{
    const script = new Script("import(\"foo.json\", { with: { type: \"json\" } })", {
        async importModuleDynamically(specifier, referrer, importAttributes) {
            specifier; // $ExpectType string
            referrer; // $ExpectType Script
            importAttributes; // $ExpectType ImportAttributes
            const m = new SyntheticModule(["bar"], () => {});
            await m.link(() => {
                throw new Error("unreachable");
            });
            m.setExport("bar", { hello: "world" });
            return m;
        },
    });

    const module = new SourceTextModule("import(\"foo.json\", { with: { type: \"json\" } })", {
        async importModuleDynamically(specifier, referrer, importAttributes) {
            specifier; // $ExpectType string
            referrer; // $ExpectType SourceTextModule
            importAttributes; // $ExpectType ImportAttributes
            const m = new SyntheticModule(["bar"], () => {});
            await m.link(() => {
                throw new Error("unreachable");
            });
            m.setExport("bar", { hello: "world" });
            return m;
        },
    });
}
