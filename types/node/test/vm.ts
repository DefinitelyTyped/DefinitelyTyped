import { inspect } from "node:util";
import {
    compileFunction,
    constants,
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
    const contextObject = {
        animal: "cat",
        count: 2,
    };

    runInNewContext("count += 1; name = \"kitty\"", contextObject);
    console.log(contextObject);
    // Prints: { animal: 'cat', count: 3, name: 'kitty' }

    // This would throw if the context is created from a contextified object.
    // vm.constants.DONT_CONTEXTIFY allows creating contexts with ordinary global objects that
    // can be frozen.
    const frozenContext = runInNewContext("Object.freeze(globalThis); globalThis;", constants.DONT_CONTEXTIFY);
}

{
    const script = new Script("globalVar = \"set\"");

    const contexts = [{}, {}, {}];
    contexts.forEach((context) => {
        script.runInNewContext(context);
    });

    console.log(contexts);
    // Prints: [{ globalVar: 'set' }, { globalVar: 'set' }, { globalVar: 'set' }]

    // This would throw if the context is created from a contextified object.
    // vm.constants.DONT_CONTEXTIFY allows creating contexts with ordinary
    // global objects that can be frozen.
    const freezeScript = new Script("Object.freeze(globalThis); globalThis;");
    const frozenContext = freezeScript.runInNewContext(constants.DONT_CONTEXTIFY);
}

{
    runInThisContext("console.log(\"hello world\"", "./my-file.js");
}

{
    const fn: Function = compileFunction("console.log(\"test\")", [] as readonly string[], {
        parsingContext: createContext(),
        contextExtensions: [{
            a: 1,
        }],
        produceCachedData: false,
        cachedData: Buffer.from("nope"),
    });
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

    runInNewContext("globalThis", constants.DONT_CONTEXTIFY);
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
