import {
    ActionFn,
    AfterResponseFn,
    AfterScenarioFn,
    BeforeRequestFn,
    BeforeScenarioFn,
    ContextFuncs,
    ContextVars,
    EventEmitter,
    Match,
    Next,
    RequestParams,
    ScenarioContext,
} from "artillery";

// test type exports
type AFn = ActionFn;
type BeforeSFn = BeforeScenarioFn;
type AfterSFn = AfterScenarioFn;
type BeforeReqFn = BeforeRequestFn;
type AfterResFn = AfterResponseFn;
type Context = ScenarioContext;
type CVars = ContextVars;
type CFuncs = ContextFuncs;
type Nxt = Next;
type EE = EventEmitter;
type M = Match;
type ReqParams = RequestParams;

const actionFn: ActionFn<{ foo: string }, { bar(baz: string): number }> = (context, ee, next) => {
    context; // $ExpectType ScenarioContext<{ foo: string; }, { bar(baz: string): number; }>
    context.vars.$environment; // $ExpectType string | undefined
    context.vars.$processEnvironment; // $ExpectType Record<string, string>
    context.vars.$uuid; // $ExpectType string
    context.vars.target; // $ExpectType string | undefined
    context.vars.foo; // $ExpectType string

    context.funcs.$randomNumber(); // $ExpectType number
    context.funcs.$randomNumber(1); // $ExpectType number
    context.funcs.$randomNumber(1, 2); // $ExpectType number
    context.funcs.$randomString(1); // $ExpectType string
    context.funcs.$template(1); // $ExpectType 1
    context.funcs.bar("foo"); // $ExpectType number

    ee; // $ExpectType EventEmitter

    next(); // $ExpectType void
    next(new Error()); // $ExpectType void

    // $ExpectType EventEmitter
    ee.addListener("counter", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.addListener("histogram", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.addListener("customStat", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    ee.addListener("started", () => {}); // $ExpectType EventEmitter
    ee.addListener("request", () => {}); // $ExpectType EventEmitter
    // $ExpectType EventEmitter
    ee.addListener("error", error => {
        error; // $ExpectType unknown
    });
    // $ExpectType EventEmitter
    ee.addListener("match", (success, match) => {
        success; // $ExpectType boolean
        match; // $ExpectType Match
        match.expected; // $ExpectType string
        match.got; // $ExpectType string | undefined
        match.expression; // $ExpectType string
        match.strict; // $ExpectType boolean | undefined
    });
    // $ExpectType EventEmitter
    ee.addListener("response", (delta, code, uid) => {
        delta; // $ExpectType number
        code; // $ExpectType number
        uid; // $ExpectType string
    });
    // $ExpectType EventEmitter
    ee.addListener("foo", bar => {
        bar; // $ExpectType unknown
    });

    // $ExpectType EventEmitter
    ee.on("counter", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.on("histogram", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.on("customStat", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    ee.on("started", () => {}); // $ExpectType EventEmitter
    ee.on("request", () => {}); // $ExpectType EventEmitter
    // $ExpectType EventEmitter
    ee.on("error", error => {
        error; // $ExpectType unknown
    });
    // $ExpectType EventEmitter
    ee.on("match", (success, match) => {
        success; // $ExpectType boolean
        match; // $ExpectType Match
        match.expected; // $ExpectType string
        match.got; // $ExpectType string | undefined
        match.expression; // $ExpectType string
        match.strict; // $ExpectType boolean | undefined
    });
    // $ExpectType EventEmitter
    ee.on("response", (delta, code, uid) => {
        delta; // $ExpectType number
        code; // $ExpectType number
        uid; // $ExpectType string
    });
    // $ExpectType EventEmitter
    ee.on("foo", bar => {
        bar; // $ExpectType unknown
    });

    // $ExpectType EventEmitter
    ee.once("counter", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.once("histogram", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.once("customStat", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    ee.once("started", () => {}); // $ExpectType EventEmitter
    ee.once("request", () => {}); // $ExpectType EventEmitter
    // $ExpectType EventEmitter
    ee.once("error", error => {
        error; // $ExpectType unknown
    });
    // $ExpectType EventEmitter
    ee.once("match", (success, match) => {
        success; // $ExpectType boolean
        match; // $ExpectType Match
        match.expected; // $ExpectType string
        match.got; // $ExpectType string | undefined
        match.expression; // $ExpectType string
        match.strict; // $ExpectType boolean | undefined
    });
    // $ExpectType EventEmitter
    ee.once("response", (delta, code, uid) => {
        delta; // $ExpectType number
        code; // $ExpectType number
        uid; // $ExpectType string
    });
    // $ExpectType EventEmitter
    ee.once("foo", bar => {
        bar; // $ExpectType unknown
    });

    // $ExpectType EventEmitter
    ee.removeListener("counter", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.removeListener("histogram", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.removeListener("customStat", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    ee.removeListener("started", () => {}); // $ExpectType EventEmitter
    ee.removeListener("request", () => {}); // $ExpectType EventEmitter
    // $ExpectType EventEmitter
    ee.removeListener("error", error => {
        error; // $ExpectType unknown
    });
    // $ExpectType EventEmitter
    ee.removeListener("match", (success, match) => {
        success; // $ExpectType boolean
        match; // $ExpectType Match
        match.expected; // $ExpectType string
        match.got; // $ExpectType string | undefined
        match.expression; // $ExpectType string
        match.strict; // $ExpectType boolean | undefined
    });
    // $ExpectType EventEmitter
    ee.removeListener("response", (delta, code, uid) => {
        delta; // $ExpectType number
        code; // $ExpectType number
        uid; // $ExpectType string
    });
    // $ExpectType EventEmitter
    ee.removeListener("foo", bar => {
        bar; // $ExpectType unknown
    });

    // $ExpectType EventEmitter
    ee.off("counter", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.off("histogram", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.off("customStat", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    ee.off("started", () => {}); // $ExpectType EventEmitter
    ee.off("request", () => {}); // $ExpectType EventEmitter
    // $ExpectType EventEmitter
    ee.off("error", error => {
        error; // $ExpectType unknown
    });
    // $ExpectType EventEmitter
    ee.off("match", (success, match) => {
        success; // $ExpectType boolean
        match; // $ExpectType Match
        match.expected; // $ExpectType string
        match.got; // $ExpectType string | undefined
        match.expression; // $ExpectType string
        match.strict; // $ExpectType boolean | undefined
    });
    // $ExpectType EventEmitter
    ee.off("response", (delta, code, uid) => {
        delta; // $ExpectType number
        code; // $ExpectType number
        uid; // $ExpectType string
    });
    // $ExpectType EventEmitter
    ee.off("foo", bar => {
        bar; // $ExpectType unknown
    });

    // $ExpectType EventEmitter
    ee.prependListener("counter", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.prependListener("histogram", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.prependListener("customStat", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    ee.prependListener("started", () => {}); // $ExpectType EventEmitter
    ee.prependListener("request", () => {}); // $ExpectType EventEmitter
    // $ExpectType EventEmitter
    ee.prependListener("error", error => {
        error; // $ExpectType unknown
    });
    // $ExpectType EventEmitter
    ee.prependListener("match", (success, match) => {
        success; // $ExpectType boolean
        match; // $ExpectType Match
        match.expected; // $ExpectType string
        match.got; // $ExpectType string | undefined
        match.expression; // $ExpectType string
        match.strict; // $ExpectType boolean | undefined
    });
    // $ExpectType EventEmitter
    ee.prependListener("response", (delta, code, uid) => {
        delta; // $ExpectType number
        code; // $ExpectType number
        uid; // $ExpectType string
    });
    // $ExpectType EventEmitter
    ee.prependListener("foo", bar => {
        bar; // $ExpectType unknown
    });

    // $ExpectType EventEmitter
    ee.prependOnceListener("counter", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.prependOnceListener("histogram", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    // $ExpectType EventEmitter
    ee.prependOnceListener("customStat", (name, value) => {
        name; // $ExpectType string
        value; // $ExpectType number
    });
    ee.prependOnceListener("started", () => {}); // $ExpectType EventEmitter
    ee.prependOnceListener("request", () => {}); // $ExpectType EventEmitter
    // $ExpectType EventEmitter
    ee.prependOnceListener("error", error => {
        error; // $ExpectType unknown
    });
    // $ExpectType EventEmitter
    ee.prependOnceListener("match", (success, match) => {
        success; // $ExpectType boolean
        match; // $ExpectType Match
        match.expected; // $ExpectType string
        match.got; // $ExpectType string | undefined
        match.expression; // $ExpectType string
        match.strict; // $ExpectType boolean | undefined
    });
    // $ExpectType EventEmitter
    ee.prependOnceListener("response", (delta, code, uid) => {
        delta; // $ExpectType number
        code; // $ExpectType number
        uid; // $ExpectType string
    });
    // $ExpectType EventEmitter
    ee.prependOnceListener("foo", bar => {
        bar; // $ExpectType unknown
    });

    ee.emit("counter", "foo", 1); // $ExpectType boolean
    ee.emit("histogram", "foo", 1); // $ExpectType boolean
    ee.emit("customStat", "foo", 1); // $ExpectType boolean
    ee.emit("started"); // $ExpectType boolean
    ee.emit("request"); // $ExpectType boolean
    ee.emit("error", new Error()); // $ExpectType boolean
    ee.emit("match", true, null as any as Match); // $ExpectType boolean
    ee.emit("response", 1, 1, "foo"); // $ExpectType boolean
    ee.emit("foo", Symbol()); // $ExpectType boolean
};

const beforeScenarioFn: BeforeScenarioFn = (context, ee, next) => {
    context; // $ExpectType ScenarioContext<Record<string, unknown>, Record<string, (...args: any[]) => any>>

    ee; // $ExpectType EventEmitter

    next(); // $ExpectType void
    next(new Error()); // $ExpectType void
};

const afterScenarioFn: AfterScenarioFn = (context, ee, next) => {
    context; // $ExpectType ScenarioContext<Record<string, unknown>, Record<string, (...args: any[]) => any>>

    ee; // $ExpectType EventEmitter

    next(); // $ExpectType void
    next(new Error()); // $ExpectType void
};

const beforeRequestFn: BeforeRequestFn = (requestParams, context, ee, next) => {
    requestParams; // $ExpectType RequestParams
    requestParams.url; // $ExpectType string | undefined
    requestParams.uri; // $ExpectType string | undefined
    requestParams.method; // $ExpectType string
    requestParams.headers; // $ExpectType Record<string, string>
    requestParams.timeout; // $ExpectType number
    requestParams.json; // $ExpectType Record<string | number, unknown> | undefined
    requestParams.form; // $ExpectType Record<string | number, unknown> | undefined
    requestParams.formData; // $ExpectType Record<string | number, unknown> | undefined
    requestParams.cookieJar; // $ExpectType CookieJar | undefined
    requestParams.https; // $ExpectType Record<string, unknown> | undefined
    requestParams.body; // $ExpectType unknown
    requestParams.name; // $ExpectType string | undefined
    requestParams.followRedirect; // $ExpectType boolean | undefined
    requestParams.followAllRedirects; // $ExpectType boolean | undefined
    requestParams.auth; // $ExpectType { user: string; pass: string; } | undefined
    requestParams.foo; // $ExpectType unknown

    context; // $ExpectType ScenarioContext<Record<string, unknown>, Record<string, (...args: any[]) => any>>

    ee; // $ExpectType EventEmitter

    next(); // $ExpectType void
    next(new Error()); // $ExpectType void
};

const afterResponseFn: AfterResponseFn = (requestConfig, response, context, ee, next) => {
    requestConfig.url; // $ExpectType string | URL | undefined
    requestConfig.method; // $ExpectType Method | undefined
    requestConfig.headers; // $ExpectType Headers | undefined
    requestConfig.timeout; // $ExpectType number | Delays | undefined
    requestConfig.json; // $ExpectType Record<string, any> | undefined
    requestConfig.form; // $ExpectType Record<string, any> | undefined
    requestConfig.https; // $ExpectType HTTPSOptions | undefined
    requestConfig.body; // $ExpectType string | Buffer | Readable | undefined || string | Readable | Buffer | undefined
    requestConfig.followRedirect; // $ExpectType boolean | undefined
    requestConfig.foo; // $ExpectType unknown

    response; // $ExpectType Response<unknown>

    context; // $ExpectType ScenarioContext<Record<string, unknown>, Record<string, (...args: any[]) => any>>

    ee; // $ExpectType EventEmitter

    next(); // $ExpectType void
    next(new Error()); // $ExpectType void
};
