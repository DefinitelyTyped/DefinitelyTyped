// global / globalThis
{
    const isGlobalThis: typeof globalThis = global;
    const accessibleAsGlobalProperty: true = global.RANDOM_GLOBAL_VARIABLE;
}

declare var RANDOM_GLOBAL_VARIABLE: true;

// ErrorConstructor
{
    {
        Error.stackTraceLimit = Infinity;
    }
    {
        const myObject = {};
        Error.captureStackTrace(myObject);
    }
    {
        const original = Error.prepareStackTrace;
        Error.prepareStackTrace = (error, frames) => {
            error; // $ExpectType Error

            const [frame] = frames;
            frame.getColumnNumber(); // $ExpectType number | null
            frame.getEnclosingColumnNumber(); // $ExpectType number | null
            frame.getEnclosingLineNumber(); // $ExpectType number | null
            frame.getEvalOrigin(); // $ExpectType string | undefined
            frame.getFileName(); // $ExpectType string | null
            frame.getFunction(); // $ExpectType Function | undefined
            frame.getFunctionName(); // $ExpectType string | null
            frame.getLineNumber(); // $ExpectType number | null
            frame.getMethodName(); // $ExpectType string | null
            frame.getPosition(); // $ExpectType number
            frame.getPromiseIndex(); // $ExpectType number | null
            frame.getScriptHash(); // $ExpectType string
            frame.getScriptNameOrSourceURL(); // $ExpectType string | null
            frame.getThis(); // $ExpectType unknown
            frame.getTypeName(); // $ExpectType string | null
            frame.isAsync(); // $ExpectType boolean
            frame.isConstructor(); // $ExpectType boolean
            frame.isEval(); // $ExpectType boolean
            frame.isNative(); // $ExpectType boolean
            frame.isPromiseAll(); // $ExpectType boolean
            frame.isToplevel(); // $ExpectType boolean

            return original(error, frames);
        };
    }
}

// gc()
{
    if (typeof gc === "function") {
        gc(); // $ExpectType void
        gc(true); // $ExpectType void
        gc({ flavor: "regular", type: "major-snapshot", filename: "/tmp/snapshot" }); // $ExpectType void
        gc({ execution: "sync" }); // $ExpectType void
        gc({ execution: "async" }); // $ExpectType Promise<void>
        gc({ execution: Math.random() > 0.5 ? "sync" : "async" }); // $ExpectType void
    }
}

// Array.prototype.at()
{
    const mutableArray = ["a"];
    mutableArray.at(-1);
    const readonlyArray: readonly string[] = ["b"];
    readonlyArray.at(-1);
}

{
    const x = new AbortController().signal;
    x.reason; // $ExpectType any
    x.throwIfAborted(); // $ExpectType void
}

{
    const s = new Storage();
    s.setItem("foo", "bar");
    s.getItem("foo"); // $ExpectType string | null
    s["foo"] = "baz";
    s["foo"]; // $ExpectType any
    delete s["foo"];
    s.clear();
}

{
    const e = new DOMException(); // $ExpectType DOMException
    e.message; // $ExpectType string
    e.name; // $ExpectType string
}

{
    // @ts-expect-error The pseudoglobal `NodeJS` namespace should not be addressable outside ambient contexts
    NodeJS;
}
