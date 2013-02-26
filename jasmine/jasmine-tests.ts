/// <reference path="jasmine.d.ts" />

describe("A suite", () => {
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });
});

describe("A suite is just a function", () => {
    var a;
    it("and so is a spec", () => {
        a = true;
        expect(a).toBe(true);
    });
});

describe("The 'toBe' matcher compares with ===", () => {
    it("and has a positive case ", () => {
        expect(true).toBe(true);
    });
    it("and can have a negative case", () => {
        expect(false).not.toBe(true);
    });
});

describe("Included matchers:", () => {
    it("The 'toBe' matcher compares with ===", () => {
        var a = 12;
        var b = a;
        expect(a).toBe(b);
        expect(a).not.toBe(null);
    });
    describe("The 'toEqual' matcher", () => {
        it("works for simple literals and variables", () => {
            var a = 12;
            expect(a).toEqual(12);
        });
        it("should work for objects", () => {
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

    it("The 'toMatch' matcher is for regular expressions", () => {
        var message = 'foo bar baz';
        expect(message).toMatch(/bar/);
        expect(message).toMatch('bar');
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", () => {
        var a = {
            foo: 'foo'
        };
        expect(a.foo).toBeDefined();
        expect((<any>a).bar).not.toBeDefined();
    });

    it("The `toBeUndefined` matcher compares against `undefined`", () => {
        var a = {
            foo: 'foo'
        };
        expect(a.foo).not.toBeUndefined();
        expect((<any>a).bar).toBeUndefined();
    });

    it("The 'toBeNull' matcher compares against null", () => {
        var a = null;
        var foo = 'foo';
        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", () => {
      var a, foo = 'foo';
        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", () => {
      var a, foo = 'foo';
        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });

    it("The 'toContain' matcher is for finding an item in an Array", () => {
        var a = ['foo', 'bar', 'baz'];
        expect(a).toContain('bar');
        expect(a).not.toContain('quux');
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", () => {
      var pi = 3.1415926, e = 2.78;
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' is for mathematical comparisons", () => {
      var pi = 3.1415926, e = 2.78;
        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", () => {
      var pi = 3.1415926, e = 2.78;
        expect(pi).not.toBeCloseTo(e, 0.1);
        expect(pi).toBeCloseTo(e, 0);
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", () => {
        var foo = () => {
            return 1 + 2;
        };
        var bar = () => {
            //return a + 1;
        };
        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });
});

describe("A spec", () => {
    it("is just a function, so it can contain any code", () => {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
    });

    it("can have more than one expectation", () => {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});

describe("A spec (with setup and tear-down)", () => {
    var foo;
    beforeEach(() => {
        foo = 0;
        foo += 1;
    });
    afterEach(() => {
        foo = 0;
    });
    it("is just a function, so it can contain any code", () => {
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", () => {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});

describe("A spec", () => {
    var foo;
    beforeEach(() => {
        foo = 0;
        foo += 1;
    });
    afterEach(() => {
        foo = 0;
    });
    it("is just a function, so it can contain any code", () => {
        expect(foo).toEqual(1);
    });
    it("can have more than one expectation", () => {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
    describe("nested inside a second describe", () => {
        var bar;
        beforeEach(() => {
            bar = 1;
        });
        it("can reference both scopes as needed ", () => {
            expect(foo).toEqual(bar);
        });
    });
});

xdescribe("A spec", () => {
    var foo;
    beforeEach(() => {
        foo = 0;
        foo += 1;
    });
    xit("is just a function, so it can contain any code", () => {
        expect(foo).toEqual(1);
    });
});

describe("A spy", () => {
  var foo, bar = null;
    beforeEach(() => {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };
        spyOn(foo, 'setBar');
        foo.setBar(123);
        foo.setBar(456, 'another param');
    });
    it("tracks that the spy was called", () => {
        expect(foo.setBar).toHaveBeenCalled();
    });
    it("tracks its number of calls", () => {
        expect(foo.setBar.calls.length).toEqual(2);
    });
    it("tracks all the arguments of its calls", () => {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });
    it("allows access to the most recent call", () => {
        expect(foo.setBar.mostRecentCall.args[0]).toEqual(456);
    });
    it("allows access to other calls", () => {
        expect(foo.setBar.calls[0].args[0]).toEqual(123);
    });
    it("stops all execution on a function", () => {
        expect(bar).toBeNull();
    });
});

describe("A spy, when configured to call through", () => {
  var foo, bar, fetchedBar;
    beforeEach(() => {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: () => {
                return bar;
            }
        };
        spyOn(foo, 'getBar').andCallThrough();
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", () => {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", () => {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", () => {
        expect(fetchedBar).toEqual(123);
    });
});

describe("A spy, when faking a return value", () => {
  var foo, bar, fetchedBar;
    beforeEach(() => {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: () => {
                return bar;
            }
        };
        spyOn(foo, 'getBar').andReturn(745);
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", () => {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", () => {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", () => {
        expect(fetchedBar).toEqual(745);
    });
});

describe("A spy, when faking a return value", () => {
  var foo, bar, fetchedBar;
    beforeEach(() => {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: () => {
                return bar;
            }
        };
        spyOn(foo, 'getBar').andCallFake(() => {
            return 1001;
        });
        foo.setBar(123);
        fetchedBar = foo.getBar();
    });
    it("tracks that the spy was called", () => {
        expect(foo.getBar).toHaveBeenCalled();
    });
    it("should not effect other functions", () => {
        expect(bar).toEqual(123);
    });
    it("when called returns the requested value", () => {
        expect(fetchedBar).toEqual(1001);
    });
});

describe("A spy, when created manually", () => {
    var whatAmI;

    beforeEach(() => {
        whatAmI = jasmine.createSpy('whatAmI');
        whatAmI("I", "am", "a", "spy");
    });
    it("is named, which helps in error reporting", () => {
        expect(whatAmI.identity).toEqual('whatAmI')
    });
    it("tracks that the spy was called", () => {
        expect(whatAmI).toHaveBeenCalled();
    });
    it("tracks its number of calls", () => {
        expect(whatAmI.calls.length).toEqual(1);
    });
    it("tracks all the arguments of its calls", () => {
        expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
    });
    it("allows access to the most recent call", () => {
        expect(whatAmI.mostRecentCall.args[0]).toEqual("I");
    });
});

describe("Multiple spies, when created manually", () => {
    var tape;
    beforeEach(() => {
        tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);
        tape.play();
        tape.pause();
        tape.rewind(0);
    });
    it("creates spies for each requested function", () => {
        expect(tape.play).toBeDefined();
        expect(tape.pause).toBeDefined();
        expect(tape.stop).toBeDefined();
        expect(tape.rewind).toBeDefined();
    });
    it("tracks that the spies were called", () => {
        expect(tape.play).toHaveBeenCalled();
        expect(tape.pause).toHaveBeenCalled();
        expect(tape.rewind).toHaveBeenCalled();
        expect(tape.stop).not.toHaveBeenCalled();
    });
    it("tracks all the arguments of its calls", () => {
        expect(tape.rewind).toHaveBeenCalledWith(0);
    });
});

describe("jasmine.any", () => {
    it("matches any value", () => {
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
    });
    describe("when used with a spy", () => {
        it("is useful for comparing arguments", () => {
            var foo = jasmine.createSpy('foo');
            foo(12, () => {
                return true
            });
            expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
        });
    });
});

describe("Manually ticking the Jasmine Mock Clock", () => {
    var timerCallback;
    beforeEach(() => {
        timerCallback = jasmine.createSpy('timerCallback');
        jasmine.Clock.useMock();
    });
    it("causes a timeout to be called synchronously", () => {
        setTimeout(() => {
            timerCallback();
        }, 100);
        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.Clock.tick(101);
        expect(timerCallback).toHaveBeenCalled();
    });

    it("causes an interval to be called synchronously", () => {
        setInterval(() => {
            timerCallback();
        }, 100);
        expect(timerCallback).not.toHaveBeenCalled();
        jasmine.Clock.tick(101);
        expect(timerCallback.callCount).toEqual(1);
        jasmine.Clock.tick(50);
        expect(timerCallback.callCount).toEqual(1);
        jasmine.Clock.tick(50);
        expect(timerCallback.callCount).toEqual(2);
    });
});

describe("Asynchronous specs", () => {
  var value, flag;
    it("should support async execution of test preparation and exepectations", () => {
        runs(() => {
            flag = false;
            value = 0;
            setTimeout(() => {
                flag = true;
            }, 500);
        });
        waitsFor(() => {
            value++;
            return flag;
        }, "The Value should be incremented", 750);
        runs(() => {
            expect(value).toBeGreaterThan(0);
        });
    });
});

(() => {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 250;
    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };
    var currentWindowOnload = window.onload;
    window.onload = () => {
        if (currentWindowOnload) {
            currentWindowOnload(null);
        }

        (<HTMLElement>document.querySelector('.version')).innerHTML = jasmineEnv.versionString();
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }
})();