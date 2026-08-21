import * as cls from "cls-hooked";
import * as http from "http";

const session = cls.createNamespace("my session");
const user = { id: "foo" };
session.set("user", user);
session.run((value: number) => {
    session.set("value", value);
});
http.createServer((req, res) => {
    session.bindEmitter(req);
    session.bindEmitter(res);
});
function bindLater(callback: (x: number) => number) {
    return session.bind(callback, session.createContext());
}

bindLater((x: number) => {
    return x;
})(123); // passing argument 'abc' should get compile error

const session2 = cls.getNamespace("my session")!;
session2.get("user");

const appNamespace = cls.createNamespace("applicationNameSpace");
const context = appNamespace.createContext();

function bindWithMiddleware(middlewareFn: () => void) {
    return session.bind(middlewareFn, context);
}

bindWithMiddleware(() => {
    // Some middleware that doing something in the application
});

// In some place in the application, we want to set a value to a given key to be used elsewhere
appNamespace.enter(context);
appNamespace.set("requestId", "someId");
appNamespace.exit(context);

// Retrieve that value set before without losing the context when chaining several middleware
appNamespace.enter(context);
appNamespace.get("requestId");
appNamespace.exit(context);

interface MyContext {
    foo: string;
    bar: number;
}

const typedNameSpace = cls.createNamespace<MyContext>("typed");
typedNameSpace.set("foo", "foo");
typedNameSpace.set("bar", 123);

// @ts-expect-error
typedNameSpace.set("bar", "foo");

// @ts-expect-error
typedNameSpace.set("foo", 123);

const retrievedNameSpace = cls.getNamespace<MyContext>("typed");
if (retrievedNameSpace) {
    retrievedNameSpace.get("foo");
}
