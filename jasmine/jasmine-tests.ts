/// <reference path="jasmine.d.ts" />

// tests based on http://jasmine.github.io/2.0/introduction.html

describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});

describe("A suite is just a function", function () {
    var a: boolean;

    it("and so is a spec", function () {
        a = true;
        expect(a).toBe(true);
    });
});

describe("The 'toBe' matcher compares with ===", function () {

    it("and has a positive case", function () {
        expect(true).toBe(true);
    });

    it("and can have a negative case", function () {
        expect(false).not.toBe(true);
    });
});

describe("Included matchers:", function () {

    it("The 'toBe' matcher compares with ===", function () {
        var a = 12;
        var b = a;

        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });

    describe("The 'toEqual' matcher", function () {

        it("works for simple literals and variables", function () {
            var a = 12;
            expect(a).toEqual(12);
        });

        it("should work for objects", function () {
            var foo = {
                a: 12,
                b: 34
            };
            var bar = {
                a: 12,
                b: 34
            };
            expect(foo).toEqual(bar);
        });
    });

    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };

        expect(a.foo).toBeDefined();
        expect((<any>a).bar).not.toBeDefined();
    });

    it("The `toBeUndefined` matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };

        expect(a.foo).not.toBeUndefined();
        expect((<any>a).bar).toBeUndefined();
    });

    it("The 'toBeNull' matcher compares against null", function () {
        var a: string = null;
        var foo = "foo";

        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", function () {
        var a: string, foo = "foo";

        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function () {
        var a: string, foo = "foo";

        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });

    it("The 'toContain' matcher is for finding an item in an Array", function () {
        var a = ["foo", "bar", "baz"];

        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926,
            e = 2.78;

        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' is for mathematical comparisons", function () {
        var pi = 3.1415926,
            e = 2.78;

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", function () {
        var pi = 3.1415926,
            e = 2.78;

        expect(pi).not.toBeCloseTo(e, 2);
        expect(pi).toBeCloseTo(e, 0);
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", function () {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function () {
            var a: any = undefined;
            return a + 1;
        };

        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });
});

describe("A spec", function () {
    it("is just a function, so it can contain any code", function () {
        var foo = 0;
        foo += 1;

        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        var foo = 0;
        foo += 1;

        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});

describe("A spec (with setup and tear-down)", function () {
    var foo: number;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    afterEach(function () {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});

describe("A spec", function () {
    var foo: number;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    afterEach(function () {
        foo = 0;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });

    describe("nested inside a second describe", function () {
        var bar: number;

        beforeEach(function () {
            bar = 1;
        });

        it("can reference both scopes as needed", function () {
            expect(foo).toEqual(bar);
        });
    });
});

xdescribe("A spec", function () {
    var foo: number;

    beforeEach(function () {
        foo = 0;
        foo += 1;
    });

    it("is just a function, so it can contain any code", function () {
        expect(foo).toEqual(1);
    });
});

describe("Pending specs", function () {

    xit("can be declared 'xit'", function () {
        expect(true).toBe(false);
    });

    it("can be declared with 'it' but without a function");

    it("can be declared by calling 'pending' in the spec body", function () {
        expect(true).toBe(false);
        pending();
    });
});

describe("A spy", function () {
    var foo: any, bar: any = null;

    beforeEach(function () {
        foo = {
            setBar: function (value: any) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it("tracks that the spy was called", function () {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function () {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function () {
        expect(bar).toBeNull();
    });
});

describe("A spy, when configured to call through", function () {
    var foo: any, bar: any, fetchedBar: any;

    beforeEach(function () {
        foo = {
            setBar: function (value: any) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.callThrough();

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(123);
    });
});

describe("A spy, when configured to fake a return value", function () {
    var foo: any, bar: any, fetchedBar: any;

    beforeEach(function () {
        foo = {
            setBar: function (value: any) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.returnValue(745);

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(745);
    });
});

describe("A spy, when configured with an alternate implementation", function () {
    var foo: any, bar: any, fetchedBar: any;

    beforeEach(function () {
        foo = {
            setBar: function (value: any) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.callFake(function () {
            return 1001;
        });

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", function () {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(1001);
    });
});

describe("A spy, when configured to throw a value", function () {
    var foo: any, bar: any;

    beforeEach(function () {
        foo = {
            setBar: function (value: any) {
                bar = value;
            }
        };

        spyOn(foo, "setBar").and.throwError("quux");
    });

    it("throws the value", function () {
        expect(function () {
            foo.setBar(123)
    }).toThrowError("quux");
    });
});

describe("A spy", function () {
    var foo: any, bar: any = null;

    beforeEach(function () {
        foo = {
            setBar: function (value: any) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar').and.callThrough();
    });

    it("can call through and then stub in the same spec", function () {
        foo.setBar(123);
        expect(bar).toEqual(123);

        foo.setBar.and.stub();
        bar = null;

        foo.setBar(123);
        expect(bar).toBe(null);
    });
});

describe("A spy", function () {
    var foo: any, bar: any = null;

    beforeEach(function () {
        foo = {
            setBar: function (value: any) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar');
    });

    it("tracks if it was called at all", function () {
        expect(foo.setBar.calls.any()).toEqual(false);

        foo.setBar();

        expect(foo.setBar.calls.any()).toEqual(true);
    });

    it("tracks the number of times it was called", function () {
        expect(foo.setBar.calls.count()).toEqual(0);

        foo.setBar();
        foo.setBar();

        expect(foo.setBar.calls.count()).toEqual(2);
    });

    it("tracks the arguments of each call", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
        expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
    });

    it("tracks the arguments of all calls", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.allArgs()).toEqual([[123], [456, "baz"]]);
    });

    it("can provide the context and arguments to all calls", function () {
        foo.setBar(123);

        expect(foo.setBar.calls.all()).toEqual([{ object: foo, args: [123] }]);
    });

    it("has a shortcut to the most recent call", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.mostRecent()).toEqual({ object: foo, args: [456, "baz"] });
    });

    it("has a shortcut to the first call", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.first()).toEqual({ object: foo, args: [123] });
    });

    it("can be reset", function () {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.any()).toBe(true);

        foo.setBar.calls.reset();

        expect(foo.setBar.calls.any()).toBe(false);
    });
});

describe("A spy, when created manually", function () {
    var whatAmI: any;

    beforeEach(function () {
        whatAmI = jasmine.createSpy('whatAmI');

        whatAmI("I", "am", "a", "spy");
    });

    it("is named, which helps in error reporting", function () {
        expect(whatAmI.and.identity()).toEqual('whatAmI');
    });

    it("tracks that the spy was called", function () {
        expect(whatAmI).toHaveBeenCalled();
    });

    it("tracks its number of calls", function () {
        expect(whatAmI.calls.count()).toEqual(1);
    });

    it("tracks all the arguments of its calls", function () {
        expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
    });

    it("allows access to the most recent call", function () {
        expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
    });
});

describe("Multiple spies, when created manually", function () {
    var tape: any;

    beforeEach(function () {
        tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

        tape.play();
        tape.pause();
        tape.rewind(0);
    });

    it("creates spies for each requested function", function () {
        expect(tape.play).toBeDefined();
        expect(tape.pause).toBeDefined();
        expect(tape.stop).toBeDefined();
        expect(tape.rewind).toBeDefined();
    });

    it("tracks that the spies were called", function () {
        expect(tape.play).toHaveBeenCalled();
        expect(tape.pause).toHaveBeenCalled();
        expect(tape.rewind).toHaveBeenCalled();
        expect(tape.stop).not.toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function () {
        expect(tape.rewind).toHaveBeenCalledWith(0);
    });
});

describe("jasmine.any", function () {
    it("matches any value", function () {
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
    });

    describe("when used with a spy", function () {
        it("is useful for comparing arguments", function () {
            var foo = jasmine.createSpy('foo');
            foo(12, function () {
                return true;
            });

            expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
        });
    });
});

describe("jasmine.objectContaining", function () {
    var foo: any;

    beforeEach(function () {
        foo = {
            a: 1,
            b: 2,
            bar: "baz"
        };
    });

    it("matches objects with the expect key/value pairs", function () {
        expect(foo).toEqual(jasmine.objectContaining({
            bar: "baz"
        }));
        expect(foo).not.toEqual(jasmine.objectContaining({
            c: 37
        }));
    });

    describe("when used with a spy", function () {
        it("is useful for comparing arguments", function () {
            var callback = jasmine.createSpy('callback');

            callback({
                bar: "baz"
            });

            expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
                bar: "baz"
            }));
            expect(callback).not.toHaveBeenCalledWith(jasmine.objectContaining({
                c: 37
            }));
        });
    });
});

describe("Manually ticking the Jasmine Clock", function () {
    var timerCallback: any;

    beforeEach(function () {
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    });

    afterEach(function () {
        jasmine.clock().uninstall();
    });

    it("causes a timeout to be called synchronously", function () {
        setTimeout(function () {
            timerCallback();
        }, 100);

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.clock().tick(101);

        expect(timerCallback).toHaveBeenCalled();
    });

    it("causes an interval to be called synchronously", function () {
        setInterval(function () {
            timerCallback();
        }, 100);

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.clock().tick(101);
        expect(timerCallback.calls.count()).toEqual(1);

        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(1);

        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(2);
    });
});

describe("Asynchronous specs", function () {
    var value: number;
    beforeEach(function (done) {
        setTimeout(function () {
            value = 0;
            done();
        }, 1);
    });

    it("should support async execution of test preparation and expectations", function (done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });
});

(() => {
    // from boot.js
    var env = jasmine.getEnv();

    var htmlReporter = new jasmine.HtmlReporter();
    env.addReporter(htmlReporter);

    var specFilter = new jasmine.HtmlSpecFilter();
    env.specFilter = function (spec) {
        return specFilter.matches(spec.getFullName());
    };

    var currentWindowOnload = window.onload;
    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload(null);
        }
        htmlReporter.initialize();
        env.execute();
    };

})();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
