import director = require("director");

// These tests are based on test cases and code examples from director

// --------------------------------
// director.Router tests
// --------------------------------

let router: director.Router = new director.Router();
// $ExpectType Router
router;
// $ExpectType Router
router = new director.Router({
    "/hello": {
        get: function helloWorld() {},
    },
});

// $ExpectType Router
router = router.configure();
// $ExpectType Router
router = router.configure({
    recurse: "forward",
    strict: true,
    async: true,
    delimiter: "/",
    notfound: () => {},
    on() {
        // $ExpectType Router
        const self = this;
    },
    before() {
        // $ExpectType Router
        this;
        return true;
    },
    after() {
        // $ExpectType Router
        this;
    },
    resource: {
        foo: () => {},
        bar() {
            // $ExpectType Router
            this;
            return true;
        },
    },
    html5history: true,
    run_handler_in_init: true,
    convert_hash_in_init: true,
});
// Note: TypeScript fails to obtain the correct type of `this` when the
// callbacks are wrapped in an array literal.
// To avoid this, we must explicitly specify the `this` type.
// $ExpectType Router
router = router.configure({
    on: [
        function(foo: string) {
            // $ExpectType Router
            this;
        },
    ],
    before: [
        function() {
            // $ExpectType Router
            this;
        },
        function() {
            // $ExpectType Router
            this;
        },
    ],
    after: [
        function() {
            // $ExpectType Router
            this;
        },
        function() {
            // $ExpectType Router
            this;
        },
        function() {
            // $ExpectType Router
            this;
        },
    ],
});
// $ExpectType Router
router = router.configure({ recurse: "backward" });
// $ExpectType Router
router = router.configure({ recurse: false });

// $ExpectType Router
router = router.param("userId", /([\\w\\-]+)/);
// $ExpectType Router
router = router.param("userId", arg => "id_value_" + arg);

// $ExpectType void
router.on("/some/resource", function() {
    // $ExpectType Router
    this;
});
// $ExpectType void
router.on(/([\w-_]+)/, userId => {});
// $ExpectType void
router.on(["foo", "bar"], () => {});
// $ExpectType void
router.on("foo", "bar", () => {});

// $ExpectType void
router.path(/\/users\/(\w+)/, function(self) {
    // $ExpectType Router
    this;
    // $ExpectType Router
    self;
});
// $ExpectType void
router.path("/regions", function(self) {
    // $ExpectType Router
    this;
    // $ExpectType Router
    self;
});

// $ExpectType void
router.mount({
    "/foo": {
        "/bar": function foobar() {
            // $ExpectType Router
            this;
        },
    },
    "/": {
        before: () => {},
        on: () => {},
        after: () => {},
        "/nesting": {
            "/deep": () => {},
        },
    },
});

// $ExpectType void
router.mount(
    {
        "/dogs": {
            on: () => {},
        },
    },
    "/api",
);

// $ExpectType boolean
router.dispatch("on", "/");

// --------------------------------
// director.http.Router tests
// --------------------------------

import http = require("http");

let httpRouter: director.http.Router = new director.http.Router();
// $ExpectType Router
httpRouter;
// $ExpectType Router
httpRouter = new director.http.Router({
    "/hello": {
        get: function helloWorld() {
            this.res.writeHead(200, { "Content-Type": "text/plain" });
            this.res.end("hello world");
        },
    },
});

http.createServer((req, res) => {
    // $ExpectType boolean
    httpRouter.dispatch(req, res, err => {
        if (err) {
            res.writeHead(404);
            res.end();
        }
    });
});

// $ExpectType void
httpRouter.get("/bonjour", function() {
    this.res.writeHead(200, { "Content-Type": "text/plain" });
    this.res.end("hello world");
});
// $ExpectType void
httpRouter.post(/hola/, function() {
    this.res.writeHead(200, { "Content-Type": "text/plain" });
    this.res.end("hello world");
});

// $ExpectType void
httpRouter.get("/json", { accept: "application/json" }, () => {});
// $ExpectType void
httpRouter.get("/txt", { accept: "text/plain" }, () => {});
// $ExpectType void
httpRouter.get("/both", { accept: ["text/plain", "application/json"] }, () => {});
// $ExpectType void
httpRouter.get("/regex", { accept: /.+\/x-.+/ }, () => {});
httpRouter.before("/hello", () => {});
httpRouter.after("/hello", () => {});

// $ExpectType void
httpRouter.attach(function() {
    // @ts-expect-error
    this.data = [1, 2, 3];
});

// --------------------------------
// director.cli.Router tests
// --------------------------------

class MyTtyClass {
    some_unique_field_name: boolean;
}

let cliRouter: director.cli.Router<MyTtyClass> = new director.cli.Router<MyTtyClass>();
// $ExpectType Router<MyTtyClass>
cliRouter;
// $ExpectType Router<MyTtyClass>
cliRouter = new director.cli.Router<MyTtyClass>({
    apps() {},
    " users"() {},
});

// $ExpectType void
cliRouter.on("create", function() {
    // $ExpectType string
    this.cmd;
    // $ExpectType MyTtyClass
    this.tty;
});

// $ExpectType void
cliRouter.on(/destroy/, () => {});

// $ExpectType boolean
cliRouter.dispatch("on", "create --option1 --option2");

// $ExpectType void
router.path(/apps/, () => {
    router.path(/foo/, () => {
        router.on(/bar/, () => {});
    });

    router.on(/list/, () => {});
});
