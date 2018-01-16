

function test_Finch() {


    Finch.route("Hello/Route", function() {
        return console.log("Well hello there! How you doin'?!");
    });

    Finch.route("Hello/Route/:someId", function(bindings) {
        return console.log("Hey! Here's Some Id: " + bindings.someId);
    });

    Finch.route("Hello/Route/:someId", function(bindings, childCallback) {
        console.log("Hey! Here's Some Id: " + bindings.someId);
        return childCallback();
    });

    Finch.route("some/route", {
        setup: function(bindings) {
            return console.log("Some Route has been setup! :)");
        },
        load: function(bindings) {
            return console.log("Some Route has been loaed! :D");
        },
        unload: function(bindings) {
            return console.log("Some Route has been loaed! :(");
        },
        teardown: function(bindings) {
            return console.log("Some Route has been torndown! :'(");
        }
    });

    Finch.route("some/route", {
        setup: function(bindings, childCallback) {
            console.log("Some Route has been setup! :)");
            return childCallback();
        },
        load: function(bindings, childCallback) {
            console.log("Some Route has been loaed! :D");
            return childCallback();
        },
        unload: function(bindings, childCallback) {
            console.log("Some Route has been loaed! :(");
            return childCallback();
        },
        teardown: function(bindings, childCallback) {
            console.log("Some Route has been torndown! :'(");
            return childCallback();
        }
    });

    Finch.call("Some/Route");

    Finch.route("Some/Route", function() {
        return Finch.observe("hello", "foo", function(hello: any, foo: string) {
            return console.log("" + hello + " and " + foo);
        });
    });

    Finch.route("Some/Route", function() {
        return Finch.observe(["hello", "foo"], function(hello: any, foo: any) {
            return console.log("" + hello + " and " + foo);
        });
    });

    Finch.route("Some/Route", function(bindings) {
        return Finch.observe(function(params) {
        });
    });

    Finch.navigate("Some/Route");

    Finch.navigate("Some/Route", {
        hello: 'world',
        foo: 'bar'
    });

    Finch.navigate("Some/Route", {
        foo: 'bar'
    }, true);

    Finch.navigate("Some/Route", true);

    Finch.navigate({
        hello: 'world2',
        wow: 'wee'
    });

    Finch.navigate({
        foo: 'bar',
        wow: 'wee!!!'
    });

    Finch.navigate({
        hello: 'world2'
    }, true);

    Finch.listen();
    Finch.ignore();
    Finch.abort();


    //test from Finch
    Finch.call("/foo/bar");
    Finch.call("/foo/bar/123");
    Finch.call("/foo/bar/123");
    Finch.call("/foo/bar/123?x=Hello&y=World");
    Finch.call("/foo/baz/456");
    Finch.call("/quux/789?band=Sunn O)))&genre=Post-Progressive Fridgecore");
    Finch.call("/foo/bar/baz");
    Finch.call("/foo/bar/quux");
    Finch.call("/foo");
    Finch.call("/foo/bar");
    Finch.call("/foo");
    Finch.call("/foo");
    Finch.call("/");
    Finch.call("/");
    Finch.call("/foo");
    Finch.call("/foo/bar");
    Finch.call("/foo/bar?baz=quux");
    Finch.call("/foo/bar?baz=xyzzy");

    var cb: any;
    Finch.route("foo", {
        setup: cb.setup_foo = this.stub(),
        load: cb.load_foo = this.stub(),
        unload: cb.unload_foo = this.stub(),
        teardown: cb.teardown_foo = this.stub()
    });
    Finch.route("[foo]/bar", {
        setup: cb.setup_foo_bar = this.stub(),
        load: cb.load_foo_bar = this.stub(),
        unload: cb.unload_foo_bar = this.stub(),
        teardown: cb.teardown_foo_bar = this.stub()
    });
    Finch.route("[foo/bar]/:id", {
        setup: cb.setup_foo_bar_id = this.stub(),
        load: cb.load_foo_bar_id = this.stub(),
        unload: cb.unload_foo_bar_id = this.stub(),
        teardown: cb.teardown_foo_bar_id = this.stub()
    });
    Finch.route("[foo]/baz", {
        setup: cb.setup_foo_baz = this.stub(),
        load: cb.load_foo_baz = this.stub(),
        unload: cb.unload_foo_baz = this.stub(),
        teardown: cb.teardown_foo_baz = this.stub()
    });
    Finch.route("[foo/baz]/:id", {
        setup: cb.setup_foo_baz_id = this.stub(),
        load: cb.load_foo_baz_id = this.stub(),
        unload: cb.unload_foo_baz_id = this.stub(),
        teardown: cb.teardown_foo_baz_id = this.stub()
    });
    Finch.call("/foo");
    Finch.call("/foo/bar");
    Finch.call("/foo");
    Finch.call("/foo/bar/123?x=abc");
    Finch.call("/foo/bar/456?x=aaa&y=zzz");
    Finch.call("/foo/bar/456?x=bbb&y=zzz");
    Finch.call("/foo/bar/456?y=zzz&x=bbb");
    Finch.call("/foo/baz/789");
    Finch.call("/foo/baz/abc?term=Hello");
    Finch.call("/foo/baz/abc?term=World");
    Finch.route("bar", this.stub());
    Finch.call("/foo");
    Finch.call("/bar");
    Finch.route("/", function() {
    });
    Finch.route("[/]home", function() {
    });
    Finch.route("[/home]/news", {
        setup: function() {
        },
        load: function() {
        },
        unload: function() {
            return true;
        },
        teardown: function() {
            return false;
        }
    });
    Finch.route("/foo", {
        setup: function() {
            return true;
        },
        load: function() {
            return true;
        },
        unload: function() {
        },
        teardown: function() {
        }
    });
    Finch.route("[/]bar", {
        setup: function() {
        },
        load: function() {
        },
        unload: function() {
        },
        teardown: function() {
        }
    });
    Finch.call("/bar");
    Finch.call("/home/news");
    Finch.call("/foo");
    Finch.call("/home/news");
    Finch.call("/bar");
    Finch.route("baz", this.stub());
    Finch.call("/foo");
    Finch.call("/foo/bar");
    Finch.call("/baz");
    Finch.route("/home", {
        setup: function(bindings, next) {
            return next();
        },
        load: function(bindings, next) {
            return next();
        },
        unload: function(bindings, next) {
            return next();
        },
        teardown: function(bindings, next) {
            return next();
        }
    });
    Finch.route("[/home]/news", {
        setup: function(bindings, next) {
            return next();
        },
        load: function(bindings, next) {
            return next();
        },
        unload: function(bindings, next) {
            return next();
        },
        teardown: function(bindings, next) {
            return next();
        }
    });
    Finch.call("/home");
    Finch.call("/home/news");
    Finch.call("/foo");

    Finch.route("/", function(bindings) {
        return Finch.observe(["x"], function(x) {
        });
    });
    Finch.call("/?x=123");
    Finch.call("/?x=123.456");
    Finch.call("/?x=true");
    Finch.call("/?x=false");
    Finch.call("/?x=stuff");
    Finch.options({
        CoerceParameterTypes: true
    });
    Finch.call("/?x=123");
    Finch.call("/?x=123.456");
    Finch.call("/?x=true");
    Finch.call("/?x=false");
    Finch.call("/?x=stuff");
    Finch.route("/:x", function(_arg) {
    });
    Finch.call("/123");
    Finch.call("/123.456");
    Finch.call("/true");
    Finch.call("/false");
    Finch.call("/stuff");
    Finch.options({
        CoerceParameterTypes: true
    });
    Finch.call("/123");
    Finch.call("/123.456");
    Finch.call("/true");
    Finch.call("/false");
    Finch.call("/stuff");

    Finch.navigate("/home");
    Finch.navigate("/home/news");
    Finch.navigate("/home");
    Finch.navigate("/home", {
        foo: "bar"
    });
    Finch.navigate("/home", {
        hello: "world"
    });
    Finch.navigate({
        foos: "bars"
    });
    Finch.navigate({
        foos: "baz"
    });
    Finch.navigate({
        hello: "world"
    }, true);
    Finch.navigate({
        foos: null
    }, true);
    Finch.navigate("/home/news", true);
    Finch.navigate("/hello world", {});
    Finch.navigate("/hello world", {
        foo: "bar bar"
    });
    Finch.navigate({
        foo: "baz baz"
    });
    Finch.navigate({
        hello: 'world world'
    }, true);
    Finch.navigate("/home?foo=bar", {
        hello: "world"
    });
    Finch.navigate("/home?foo=bar", {
        hello: "world",
        foo: "baz"
    });
    Finch.navigate("/home?foo=bar", {
        hello: "world",
        free: "bird"
    });
    Finch.navigate("#/home", true);
    Finch.navigate("#/home");
    Finch.navigate("#/home/news", {
        free: "birds",
        hello: "worlds"
    });
    Finch.navigate("#/home/news", {
        foo: "bar"
    }, true);
    Finch.navigate("/home/news");
    Finch.navigate("../");
    Finch.navigate("./");
    Finch.navigate("./news");
    Finch.navigate("/home/news/article");
    Finch.navigate("../../account");

    Finch.listen();
    Finch.ignore();
    Finch.route("/home", function(bindings, continuation) {
    });
    Finch.route("/foo", function(bindings, continuation) {
    });
    Finch.call("home");
    Finch.call("foo");
    Finch.abort();
    Finch.call("foo");
    Finch.route("/", {
        'setup': cb.slash_setup = this.stub(),
        'load': cb.slash_load = this.stub(),
        'unload': cb.slash_unload = this.stub(),
        'teardown': cb.slash_teardown = this.stub()
    });
    Finch.route("[/]users/profile", {
        'setup': cb.profile_setup = this.stub(),
        'load': cb.profile_load = this.stub(),
        'unload': cb.profile_unload = this.stub(),
        'teardown': cb.profile_teardown = this.stub()
    });
    Finch.route("[/]:page", {
        'setup': cb.page_setup = this.stub(),
        'load': cb.page_load = this.stub(),
        'unload': cb.page_unload = this.stub(),
        'teardown': cb.page_teardown = this.stub()
    });
    Finch.call("/users");
}
