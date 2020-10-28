// tests based on http://jasmine.github.io/2.2/introduction.html

describe("A suite", () => {
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });
});

describe("A suite is just a function", () => {
    var a: boolean;

    it("and so is a spec", () => {
        a = true;
        expect(a).toBe(true);
    });
});

describe("Included matchers:", () => {
    describe('toBe', () => {
        it("and has a positive case", () => {
            expect(true).toBe(true);
        });

        it("and can have a negative case", () => {
            expect(false).not.toBe(true);
        });

        it("the 'toBe' matcher compares with ===", () => {
            const a = 12;
            const b = a;

            expect(a).toBe(b);
            expect(a).not.toBe(24);
        });

        it('should allow to accept any union type', () => {
            const value: number | string = null as any;

            expect(value).toBe(12);
        });
    });

    describe("The 'toEqual' matcher", () => {
        it("works for simple literals and variables", () => {
            const a = 12;
            expect(a).toEqual(12);
        });

        it("should work for objects", () => {
            const foo = {
                a: 12,
                b: 34
            };
            const bar = {
                a: 12,
                b: 34
            };
            expect(foo).toEqual(bar);
        });

        it("should work for optional values", () => {
            const opt: string | undefined = Math.random() > .5 ? "s" : undefined;
            expect(opt).toEqual(undefined);
        });
    });

    it("The 'toMatch' matcher is for regular expressions", () => {
        const message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", () => {
        const a = {
            foo: "foo"
        };

        expect(a.foo).toBeDefined();
        expect((a as any).bar).not.toBeDefined();
    });

    it("The `toBeUndefined` matcher compares against `undefined`", () => {
        const a = {
            foo: "foo"
        };

        expect(a.foo).not.toBeUndefined();
        expect((a as any).bar).toBeUndefined();
    });

    it("The 'toBeNull' matcher compares against null", () => {
        const a: string | null = Math.random() > 0.5 ? "s" : null;
        const foo = "foo";

        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", () => {
        const a: string | undefined = Math.random() > 0.5 ? "s" : undefined;
        const foo = "foo";

        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", () => {
        const a: string | undefined = Math.random() > 0.5 ? "s" : undefined;
        const foo = "foo";

        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });

    it("The 'toBeTrue' matcher is for matching with true", () => {
        expect(true).toBeTrue();
        expect(false).not.toBeTrue();
        expect({}).not.toBeTrue();
    });

    it("The 'toBeFalse' matcher is for matching with false", () => {
        expect(false).toBeFalse();
        expect(true).not.toBeFalse();
        expect(undefined).not.toBeFalse();
    });

    it("The 'toContain' matcher is for finding an item in an Array", () => {
        const a = ["foo", "bar", "baz"];

        expect(a).toContain('foo');
        expect(a).not.toContain("quux");
    });

    it("The 'toContain' matcher is also for finding an object containing distinct properties in an Array", () => {
        const a = [{ a: "foo" }, { a: "bar" }, { b: "baz" }];

        expect(a).toContain(jasmine.objectContaining({ a: "foo" }));
        expect(a).not.toContain({ a: "quux" });
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", () => {
        const pi = 3.1415926;
        const e = 2.78;

        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' is for mathematical comparisons", () => {
        const pi = 3.1415926;
        const e = 2.78;

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", () => {
        const pi = 3.1415926;
        const e = 2.78;

        expect(pi).not.toBeCloseTo(e, 2);
        expect(pi).toBeCloseTo(e, 0);
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", () => {
        const foo = () => {
            return 1 + 2;
        };
        const bar = () => {
            throw new Error("message");
        };

        expect(foo).not.toThrow();
        expect(foo).toThrow();

        expect(bar).not.toThrow();
        expect(bar).toThrow();
    });

    it("The 'toThrowError' matcher is for testing a specific thrown exception", () => {
        const foo = () => {
            throw new TypeError("foo bar baz");
        };

        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrowError(TypeError, "foo bar baz");
    });

    it("The 'toBeInstanceOf' matcher is for testing if the actual is of the expected class", () => {
        class MyClass { }

        expect(new MyClass()).toBeInstanceOf(MyClass);
        expect('foo').toBeInstanceOf(String);
        expect(3).toBeInstanceOf(Number);
        expect(new Error()).toBeInstanceOf(Error);
    });

    it("The 'toHaveSize' matcher is for testing the size of objects", () => {
      expect([1, 2, 3]).toHaveSize(3);
      expect(new Set([1, 2])).toHaveSize(2);
      expect(new Map([[1, 'one']])).toHaveSize(1);
      expect({length: 5}).toHaveSize(5);
      expect({a: 5, b: 6}).toHaveSize(2);
      // Expected size should be number
      // $ExpectError
      expect([1, 2, 3]).toHaveSize("size should be number");
    });

    it("async matchers", async () => {
        const badness = new Error("badness");
        await expectAsync(Promise.resolve()).toBeResolved();
        await expectAsync(Promise.resolve()).toBeResolved("good job");
        await expectAsync(Promise.resolve(true)).toBeResolvedTo(true);
        await expectAsync(Promise.reject(badness)).toBeRejected();
        await expectAsync(Promise.reject(badness)).toBeRejected("bad mojo");
        await expectAsync(Promise.reject(badness)).toBeRejectedWith(badness);
        await expectAsync(Promise.reject(badness)).toBeRejectedWithError(Error, "badness");
        await expectAsync(Promise.reject(badness)).toBeRejectedWithError(Error, /badness/);
        await expectAsync(Promise.reject(badness)).toBeRejectedWithError(Error);
        await expectAsync(Promise.reject(badness)).toBeRejectedWithError("badness");
        await expectAsync(Promise.reject(badness)).toBeRejectedWithError(/badness/);
        await expectAsync(Promise.resolve()).withContext("additional info").toBeResolved();
        await expectAsync(new Promise(() => {})).toBePending();
        await expectAsync(new Promise(() => {})).toBePending("good job");
    });

    it("async matchers - not", async () => {
        const badness = new Error("badness");
        const malady = new Error("malady");
        await expectAsync(Promise.reject(badness)).not.toBeResolved();
        await expectAsync(Promise.resolve(true)).not.toBeResolvedTo(false);
        await expectAsync(Promise.resolve()).not.toBeRejected();
        await expectAsync(Promise.reject(badness)).not.toBeRejectedWith(malady);
        await expectAsync(Promise.reject(badness)).not.toBeRejectedWithError(Error, "malady");
        await expectAsync(Promise.reject(badness)).not.toBeRejectedWithError(Error, /malady/);
        await expectAsync(Promise.reject(badness)).not.toBeRejectedWithError("malady");
        await expectAsync(Promise.reject(badness)).not.toBeRejectedWithError(/malady/);
        await expectAsync(Promise.reject(badness)).not.withContext("additional info").toBeResolved();
        await expectAsync(Promise.reject(badness)).withContext("additional info").not.toBeResolved();
        await expectAsync(Promise.resolve()).not.toBePending();
    });
});

describe("toThrowMatching", () => {
    expect(() => {
        ({} as any).doSomething();
    }).toThrowMatching(error => error !== undefined);
});

describe("toBeNegativeInfinity", () => {
    expect("").toBeNegativeInfinity();
});

describe("toBePositiveInfinity", () => {
    expect("").toBePositiveInfinity();
});

describe("toHaveClass", () => {
    const element: HTMLElement = null!;
    expect(element).toHaveClass("some-class");
    expect(element).toHaveClass(Element); // $ExpectError
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
    var foo: number;

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
    var foo: number;

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
        var bar: number;

        beforeEach(() => {
            bar = 1;
        });

        it("can reference both scopes as needed", () => {
            expect(foo).toEqual(bar);
        });
    });
});

describe("withContext", () => {
    it("can be used after an expectation", () => {
        expect(1).withContext('context message').toBe(1);
    });
});

xdescribe("A spec", () => {
    var foo: number;

    beforeEach(() => {
        foo = 0;
        foo += 1;
    });

    it("is just a function, so it can contain any code", () => {
        expect(foo).toEqual(1);
    });
});

describe("Pending specs", () => {
    xit("can be declared 'xit'", () => {
        expect(true).toBe(false);
    });

    it("can be declared with 'it' but without a function");

    it("can be declared by calling 'pending' in the spec body", () => {
        expect(true).toBe(false);
        pending(); // without reason
        pending('this is why it is pending');
    });
});

describe('setSpecProperty', () => {
  it("should be able to set spec property", () => {
    setSpecProperty('name', 'value');
    // Key must be string
    // $ExpectError
    setSpecProperty(42, 'value');
  });
});

describe('setSuiteProperty', () => {
  it("should be able to set suite property", () => {
    setSuiteProperty('name', true);
    // Key must be string
    // $ExpectError
    setSuiteProperty(42, true);
  });
});

describe("A spy", () => {
    var foo: any, bar: any, baz: any = null;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            },
            setBaz: (value: any) => {
                baz = value;
            }
        };

        spyOn(foo, 'setBar');
        spyOn(foo, 'setBaz');

        foo.setBar(123);
        foo.setBar(456, 'another param');
        foo.setBaz(789);
        foo.setBaz(789);
    });

    it("tracks that the spy was called", () => {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", () => {
      expect(foo.setBar).toHaveBeenCalledWith(123);
      expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("tracks called once", () => {
        expect(foo.setBar).toHaveBeenCalledOnceWith(123);
        expect(foo.setBar).toHaveBeenCalledOnceWith(456, 'another param');
        expect(foo.setBar).not.toHaveBeenCalledOnceWith(0);
        expect(foo.setBar).not.toHaveBeenCalledOnceWith(789);
    });

    it("tracks the order in which spies were called", () => {
        expect(foo.setBar).toHaveBeenCalledBefore(foo.setBaz);
    });

    it("stops all execution on a function", () => {
        expect(bar).toBeNull();
    });

    it("tracks if it was called at all", function() {
        foo.setBar();

        expect(foo.setBar.calls.any()).toEqual(true);
    });
});

describe("A spy, when configured to call through", () => {
    var foo: any, bar: any, fetchedBar: any;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            },
            getBar: () => {
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.callThrough();

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

describe("A spy, when configured to fake a return value", () => {
    var bar: number;
    const foo = {
        setBar: (value: number) => {
            bar = value;
        },
        getBar: () => {
            return bar;
        }
    };

    it("verifies return value type", () => {
        spyOn(foo, "getBar").and.returnValue(745);
        spyOn(foo, "getBar").and.returnValue("42"); // $ExpectError
    });

    it("tracks that the spy was called", () => {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", () => {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", () => {
        const fetchedBar = foo.getBar();

        expect(fetchedBar).toEqual(745);
    });
});

describe("A spy, when configured to fake a series of return values", () => {
    var foo: any, bar: any;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            },
            getBar: () => {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.returnValues("fetched first", "fetched second");

        foo.setBar(123);
    });

    it("tracks that the spy was called", () => {
        foo.getBar(123);
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", () => {
        expect(bar).toEqual(123);
    });

    it("when called multiple times returns the requested values in order", () => {
        expect(foo.getBar()).toEqual("fetched first");
        expect(foo.getBar()).toEqual("fetched second");
        expect(foo.getBar()).toBeUndefined();
    });
});

describe("A spy, when configured to fake a promised return value", () => {
    const bar = 10;
    const foo = {
        getAsyncBar: () => {
            return Promise.resolve(bar);
        }
    };

    it("verifies return value type", () => {
        spyOn(foo, "getAsyncBar").and.resolveTo(745);
        spyOn(foo, "getAsyncBar").and.resolveTo("42"); // $ExpectError
    });

    it("tracks that the spy was called", async () => {
        await foo.getAsyncBar();
        expect(foo.getAsyncBar).toHaveBeenCalled();
    });

    it("when called returns the requested value", async () => {
        spyOn(foo, "getAsyncBar").and.resolveTo(745);
        await expectAsync(foo.getAsyncBar()).toBeResolvedTo(745);
    });
});

describe("A spy, when configured to fake a promised rejection", () => {
    const bar = 10;
    const foo = {
        getAsyncBar: () => {
            return Promise.resolve(bar);
        },
        getBar: () => {
            return bar;
        }
    };

    it("verifies rejection value type", () => {
        spyOn(foo, "getAsyncBar").and.rejectWith("Error message");
        spyOn(foo, "getBar").and.rejectWith("42"); // $ExpectError
    });

    it("when called, it is rejected with the requested value", async () => {
        spyOn(foo, "getAsyncBar").and.rejectWith("Error message");

        await expectAsync(foo.getAsyncBar()).toBeRejectedWith("Error message");
    });
});

describe("resolveTo / rejectWith", () => {
    it("resolves to empty parameter", (done) => {
        const spy = jasmine.createSpy('resolve').and.resolveTo();
        spy().then(() => {
            done();
        }).catch(() => {
            done.fail();
        });
    });

    it("rejects with empty parameter", (done) => {
        const spy = jasmine.createSpy('reject').and.rejectWith();
        spy().then(() => {
            done.fail();
        }).catch(() => {
            done();
        });
    });
});

describe("A spy, when configured with an alternate implementation", () => {
    var foo: any, bar: any, fetchedBar: any;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            },
            getBar: () => {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.callFake(() => {
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

describe("A spy, when configured with alternate implementations for specified arguments", () => {
    var foo: any, bar: any, fetchedBar: any;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            },
            getBar: () => {
                return bar;
            }
        };

        spyOn(foo, "getBar")
            .withArgs(1, "2")
            .and.callFake(() => 1002);

        foo.setBar(123);
        fetchedBar = foo.getBar(1, "2");
    });

    it("tracks that the spy was called", () => {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not effect other functions", () => {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", () => {
        expect(fetchedBar).toEqual(1002);
    });
});

describe("A spy, when configured to throw a value", () => {
    var foo: any, bar: any;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            }
        };

        spyOn(foo, "setBar").and.throwError("quux");
    });

    it("throws the value", () => {
        expect(() => {
            foo.setBar(123);
        }).toThrowError("quux");
    });
});

describe("A spy, when configured with multiple actions", () => {
    var foo: any, bar: any, fetchedBar: any;
    var fakeCalled = false;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            },
            getBar: () => {
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.callThrough().and.callFake(() => {
            fakeCalled = true;
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
        expect(fetchedBar).toEqual(123);
    });

    it("should have called the fake implementation", () => {
        expect(fakeCalled).toEqual(true);
    });
});

describe("A spy", () => {
    var foo: any, bar: any = null;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            }
        };

        spyOn(foo, 'setBar').and.callThrough();
    });

    it("can call through and then stub in the same spec", () => {
        foo.setBar(123);
        expect(bar).toEqual(123);

        foo.setBar.and.stub();
        bar = null;

        foo.setBar(123);
        expect(bar).toBe(null);
    });
});

describe("A spy", () => {
    var foo: any, bar: any = null;

    beforeEach(() => {
        foo = {
            setBar: (value: any) => {
                bar = value;
            }
        };

        spyOn(foo, 'setBar');
    });

    it("tracks if it was called at all", () => {
        expect(foo.setBar.calls.any()).toEqual(false);

        foo.setBar();

        expect(foo.setBar.calls.any()).toEqual(true);
    });

    it("tracks the number of times it was called", () => {
        expect(foo.setBar.calls.count()).toEqual(0);

        foo.setBar();
        foo.setBar();

        expect(foo.setBar.calls.count()).toEqual(2);
    });

    it("tracks the arguments of each call", () => {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
        expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
    });

    it("tracks the arguments of all calls", () => {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.allArgs()).toEqual([[123], [456, "baz"]]);
    });

    it("can provide the context and arguments to all calls", () => {
        foo.setBar(123);

        expect(foo.setBar.calls.all()).toEqual([{ object: foo, args: [123], returnValue: undefined }]);
    });

    it("has a shortcut to the most recent call", () => {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.mostRecent()).toEqual({ object: foo, args: [456, "baz"], returnValue: undefined });
    });

    it("has a shortcut to the first call", () => {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.first()).toEqual({ object: foo, args: [123], returnValue: undefined });
    });

    it("can be reset", () => {
        foo.setBar(123);
        foo.setBar(456, "baz");

        expect(foo.setBar.calls.any()).toBe(true);

        foo.setBar.calls.reset();

        expect(foo.setBar.calls.any()).toBe(false);
    });

    it("can save arguments by value.", () => {
        const arr = [1];
        foo.setBar.calls.saveArgumentsByValue();

        foo.setBar(arr);
        arr.push(2);
        foo.setBar(arr);

        expect(foo.setBar.calls.argsFor(0)[0]).toEqual([1]);
        expect(foo.setBar.calls.argsFor(1)[0]).toEqual([1, 2]);
    });
});

describe("A spy, when created manually", () => {
    var whatAmI: any;

    beforeEach(() => {
        whatAmI = jasmine.createSpy('whatAmI');

        whatAmI("I", "am", "a", "spy");
    });

    it("is named, which helps in error reporting", () => {
        expect(whatAmI.and.identity()).toEqual('whatAmI');
    });

    it("tracks that the spy was called", () => {
        expect(whatAmI).toHaveBeenCalled();
    });

    it("tracks its number of calls", () => {
        expect(whatAmI.calls.count()).toEqual(1);
    });

    it("tracks all the arguments of its calls", () => {
        expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
    });

    it("allows access to the most recent call", () => {
        expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
    });
});

describe("Spy for generic method", () => {
    interface Test {
        method<T>(): Array<Box<T>>;
    }

    interface Box<T> {
        value: T;
    }

    it("should allow to configure generic method", () => {
        const spy = jasmine.createSpyObj<Test>('test', ['method']);

        spy.method.and.returnValue([{ value: 1 }, { value: 2 }]);
    });

    it("should allow to configure generic method with non-named spy", () => {
        const spy = jasmine.createSpyObj<Test>(['method']);
        jasmine.createSpyObj<Test>(['methodUnknown']); // $ExpectError

        spy.method.and.returnValue([{ value: 1 }, { value: 2 }]);
    });
});

describe("Multiple spies, when created manually", () => {
    class Tape {
        private rewindTo: number;
        play(): void { }
        pause(): void { }
        rewind(pos: number): void {
            this.rewindTo = pos;
        }
        stop(): void { }
        readonly isPlaying: boolean; // spy obj makes this writable
    }

    var tape: Tape;
    var tapeSpy: jasmine.SpyObj<Tape>;
    var el: jasmine.SpyObj<Element>;

    beforeEach(() => {
        tapeSpy = jasmine.createSpyObj<Tape>('tape', ['play', 'pause', 'stop', 'rewind']);
        tape = tapeSpy;
        (tape as { isPlaying: boolean }).isPlaying = false;
        el = jasmine.createSpyObj<Element>('Element', ['hasAttribute']);

        el.hasAttribute.and.returnValue(false);
        el.hasAttribute("href");

        tape.play();
        tape.pause();
        tape.rewind(0);

        tapeSpy.play.and.callThrough();
        tapeSpy.pause.and.callThrough();
        tapeSpy.rewind.and.callThrough();
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
        expect(tape.rewind).toHaveBeenCalledWith('42'); // $ExpectError
        expect(tape.rewind).toHaveBeenCalledWith(jasmine.anything());
        expect(tape.rewind).toHaveBeenCalledWith(jasmine.falsy());
        expect(tape.rewind).not.toHaveBeenCalledWith(1);
        expect(tape.rewind).not.toHaveBeenCalledWith('42'); // $ExpectError
        expect(tape.rewind).not.toHaveBeenCalledWith(jasmine.truthy());
    });

    it("read isPlaying property", () => {
        expect(tape.isPlaying).toBe(false);
    });
});

describe("multiple spies, when created with spyOnAllFunctions", () => {
    it("spies on all functions", () => {
        const obj = {
            x: (a: number) => a,
            y: (a: number) => a,
        };

        const spy = spyOnAllFunctions(obj);

        spy.x.and.returnValue(42);
        spy.y.and.returnValue(24);
        spy.z; // $ExpectError

        obj.x(0);
        obj.y(1);

        expect(obj.x).toHaveBeenCalled();
        expect(obj.y).toHaveBeenCalledWith(1);
        expect(spy.y).toHaveBeenCalledWith(1);
        expect(spy.y).toHaveBeenCalledWith("one"); // $ExpectError
    });
});

describe("jasmine.nothing", () => {
    it("matches any value", () => {
        expect().nothing();
    });
});

describe("jasmine.any", () => {
    it("matches any value", () => {
        expect({}).toEqual(jasmine.any(Object));
        expect(12).toEqual(jasmine.any(Number));
        expect(42).toEqual(jasmine.any(42)); // $ExpectError
        expect({}).toEqual(jasmine.any({})); // $ExpectError
        expect(() => null).toEqual(jasmine.any(Function));
    });

    it("matches any function", () => {
        interface Test {
            fn1(): void;
            fn2(param1: number): number;
        }

        const a: Test = {
            fn1: () => { },
            fn2: (param1: number) => param1,
        };

        const expected = {
            fn1: jasmine.any(Function),
            fn2: jasmine.any(Function),
        };

        expect(a).toEqual(expected);
    });

    it("matches custom types", () => {
        class Test { }

        const obj = new Test();

        expect(obj).toEqual(jasmine.any(Test));
    });

    it("matches base abstract class", () => {
        abstract class TestClassBase { }
        class TestClass extends TestClassBase { }
        const obj = new TestClass();

        expect(obj).toEqual(jasmine.any(TestClass));
        expect(obj).toEqual(jasmine.any(TestClassBase));
    });

    it("matches symbols", () => {
        const sym = Symbol('test symbol');

        expect(sym).toEqual(jasmine.any(sym));
    });

    describe("when used with a spy", () => {
        it("is useful for comparing arguments", () => {
            const foo = jasmine.createSpy('foo');
            foo(12, () => {
                return true;
            });

            expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
        });

        it("is useful for comparing arguments for typed spy", () => {
            const foo = jasmine.createSpy<(num: number, fn: () => boolean) => void>('foo');
            foo(12, () => {
                return true;
            });

            expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
        });
    });
});

describe('custom asymmetry', function() {
    const tester: jasmine.AsymmetricMatcher<string> = {
        asymmetricMatch: (actual: string, customTesters) => {
            const secondValue = actual.split(',')[1];
            return jasmine.matchersUtil.equals(secondValue, 'bar', customTesters);
        },
    };

    it('dives in deep', function() {
        expect('foo,bar,baz,quux').toEqual(tester);
        expect(123).not.toEqual(tester);
    });

    describe('when used with a spy', function() {
        it('is useful for comparing arguments', function() {
            const callback = jasmine.createSpy('callback');

            callback('foo,bar,baz');

            expect(callback).toHaveBeenCalledWith(tester);
        });
    });
});

describe("jasmine.objectContaining", () => {
    interface fooType {
        a: number;
        b: number;
        bar: string;
        nested: {
            child: string;
        };
    }
    var foo: fooType;

    beforeEach(() => {
        foo = {
            a: 1,
            b: 2,
            bar: "baz",
            nested: {
                child: 'child-baz'
            },
        };
    });

    it("matches objects with the correct type for known properties", () => {
        // not explicitly providing the type on objectContaining only guards against
        // mismatching types on known properties

        // this does not cause an error as the compiler cannot infer the type completely
        expect(foo).not.toEqual(jasmine.objectContaining({
            a: 37,
            foo: 2,
        }));

        // Contrary to the test in ../v2/jasmine-tests.ts, this does not cause an error
        // even though `b` is defined as number in fooType.
        //
        // This is because the type definition of jasmine.Expected<T> matches the return type of jasmine.objectContaining(),
        // which is jasmine.ObjectContaining<{ a: number; b: string; }>
        //
        // Not sure how to fix this without breaking backwards compatibility in type definitions, so I'll let it be for the moment
        expect(foo).not.toEqual(jasmine.objectContaining({
            a: 37,
            b: '123',
        }));
    });

    it("matches objects with the exact property names when providing a generic type", () => {
        // explicitly providing the type on objectContaining makes the guard more precise
        // as misspelled properties are detected as well
        expect(foo).not.toEqual(jasmine.objectContaining<fooType>({
            bar: '',
            foo: 1, // $ExpectError
        }));
    });

    it("matches objects with jasmine matchers as property values when providing a generic type", () => {
        expect(foo).not.toEqual(jasmine.objectContaining<fooType>({
            b: jasmine.any(Number),
            bar: jasmine.stringMatching('ba'),
        }));
    });

    it("matches objects with jasmine matchers as nested property values when providing a generic type", () => {
        expect(foo).not.toEqual(jasmine.objectContaining<fooType>({
            nested: jasmine.objectContaining({
                child: jasmine.stringMatching('child')
            })
        }));
    });

    it("can be used in a nested object", () => {
        interface nestedFooType {
            nested: {
                a: number;
                b: number;
                bar: string;
            };
        }

        const nestedFoo: nestedFooType = {
            nested: {
                a: 1,
                b: 2,
                bar: 's',
            },
        };

        expect(nestedFoo).toEqual({
            nested: jasmine.objectContaining({ b: 2 })
        });
    });

    describe("when used with a spy", () => {
        it("is useful for comparing arguments", () => {
            const callback = jasmine.createSpy<(arg: { bar: string }) => number>('callback');
            callback.withArgs(jasmine.objectContaining({ bar: "foo" })).and.returnValue(42);

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

describe("jasmine.arrayContaining", () => {
    var foo: number[];

    beforeEach(() => {
        foo = [1, 2, 3, 4];
    });

    it("matches arrays with some of the values", () => {
        expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
        expect(foo).not.toEqual(jasmine.arrayContaining([6]));

        expect(foo).toBe(jasmine.arrayContaining([3, 1]));
        expect(foo).not.toBe(jasmine.arrayContaining([6]));
    });

    it("matches read-only array", () => {
        const bar: ReadonlyArray<number> = [1, 2, 3, 4];

        expect(bar).toEqual(jasmine.arrayContaining([3, 1]));
        expect(bar).not.toEqual(jasmine.arrayContaining([6]));

        expect(bar).toBe(jasmine.arrayContaining([3, 1]));
    });

    describe("when used with a spy", () => {
        it("is useful when comparing arguments", () => {
            const callback = jasmine.createSpy<(numbers: number[]) => number>('callback');
            callback.withArgs(jasmine.arrayContaining([1, 2])).and.returnValue(42);

            callback([1, 2, 3, 4]);

            expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([4, 2, 3]));
            expect(callback).not.toHaveBeenCalledWith(jasmine.arrayContaining([5, 2]));
        });
    });
});

describe("jasmine.arrayWithExactContents", () => {
    var foo: number[];

    beforeEach(() => {
        foo = [1, 2, 3, 4];
    });

    it("matches arrays with exactly the same values", () => {
        expect(foo).toEqual(jasmine.arrayWithExactContents([1, 2, 3, 4]));
        expect(foo).not.toEqual(jasmine.arrayWithExactContents([6]));

        expect(foo).toBe(jasmine.arrayWithExactContents([1, 2, 3, 4]));
        expect(foo).not.toBe(jasmine.arrayWithExactContents([6]));
    });

    describe("when used with a spy", () => {
        it("is useful when comparing arguments", () => {
            const callback = jasmine.createSpy<(arg: number[]) => number>('callback');
            callback.withArgs(jasmine.arrayWithExactContents([1, 2])).and.returnValue(42);

            callback([1, 2, 3, 4]);

            expect(callback).toHaveBeenCalledWith(jasmine.arrayWithExactContents([1, 2, 3, 4]));
            expect(callback).not.toHaveBeenCalledWith(jasmine.arrayWithExactContents([5, 2]));
        });
    });
});

describe("Manually ticking the Jasmine Clock", () => {
    var timerCallback: any;

    beforeEach(() => {
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it("causes a timeout to be called synchronously", () => {
        setTimeout(() => {
            timerCallback();
        }, 100);

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.clock().tick(101);

        expect(timerCallback).toHaveBeenCalled();
    });

    it("causes an interval to be called synchronously", () => {
        setInterval(() => {
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

    describe("Mocking the Date object", () => {
        it("mocks the Date object and sets it to a given time", () => {
            const baseTime = new Date(2013, 9, 23);

            jasmine.clock().mockDate(baseTime);

            jasmine.clock().tick(50);
            expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
        });
    });
});

describe("Asynchronous specs", () => {
    var value: number;
    beforeEach((done: DoneFn) => {
        setTimeout(() => {
            value = 0;
            done();
        }, 1);
    });

    it("should support async execution of test preparation and expectations", (done: DoneFn) => {
        value += 1;
        expect(value).toBeGreaterThan(0);
        done();
    });

    describe("long asynchronous specs", () => {
        beforeEach((done: DoneFn) => {
            done();
        }, 1000);

        it("takes a long time", (done: DoneFn) => {
            setTimeout(() => {
                done();
            }, 9000);
        }, 10000);

        afterEach((done: DoneFn) => {
            done();
        }, 1000);
    });
});

describe("Fail", () => {
    it("should fail test when called without arguments", () => {
        fail();
    });

    it("should fail test when called with a fail message", () => {
        fail("The test failed");
    });

    it("should fail test when called an error", () => {
        fail(new Error("The test failed with this error"));
    });
});

// test based on http://jasmine.github.io/2.2/custom_equality.html
describe("custom equality", () => {
    const myCustomEquality: jasmine.CustomEqualityTester = function(first: any, second: any): boolean | void {
        if (typeof first === "string" && typeof second === "string") {
            return first[0] === second[1];
        }
    };

    beforeEach(() => {
        jasmine.addCustomEqualityTester(myCustomEquality);
    });

    it("should be custom equal", () => {
        expect("abc").toEqual("aaa");
    });

    it("should be custom not equal", () => {
        expect("abc").not.toEqual("abc");
    });
});

// test based on https://jasmine.github.io/tutorials/custom_object_formatters
describe("custom object formatter", () => {
  const myCustomFormatter: jasmine.CustomObjectFormatter = function(value: unknown): string | undefined {
      if (typeof value === "number") {
          return '0x' + value.toString(16);
      }
  };

  beforeEach(() => {
      jasmine.addCustomObjectFormatter(myCustomFormatter);
      // Invalid return value
      // $ExpectError
      jasmine.addCustomObjectFormatter(() => 3);
  });

  it("should be okay to compare", () => {
      expect(1).not.toEqual(2);
  });
});

// test based on http://jasmine.github.io/2.2/custom_matcher.html
var customMatchers: jasmine.CustomMatcherFactories = {
    toBeGoofy: (util: jasmine.MatchersUtil, customEqualityTesters: jasmine.CustomEqualityTester[]) => {
        return {
            compare: (actual: any, expected: any): jasmine.CustomMatcherResult => {
                if (expected === undefined) {
                    expected = '';
                }
                const result: jasmine.CustomMatcherResult = { pass: false };

                result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);

                result.message = result.pass ?
                    `Expected ${util.pp(actual)} not to be quite so goofy` :
                    `Expected ${util.pp(actual)} to be goofy, but it was not very goofy`;

                return result;
            }
        };
    },
    toBeWithinRange: (util: jasmine.MatchersUtil, customEqualityTesters: jasmine.CustomEqualityTester[]) => {
        return {
            compare: (actual: any, floor: number, ceiling: number): jasmine.CustomMatcherResult => {
                const pass = actual >= floor && actual <= ceiling;
                const message = `expected ${util.pp(actual)} to be within range ${floor}-${ceiling}`;
                return { message, pass };
            },

            negativeCompare: (actual: any, floor: number, ceiling: number): jasmine.CustomMatcherResult => {
                const pass = actual < floor && actual > ceiling;
                const message = `expected ${util.pp(actual)} not to be within range ${floor}-${ceiling}`;
                return { message, pass };
            }
        };
    }
};
// add the custom matchers to interface jasmine.Matchers via TypeScript declaration merging
// if your test files import or export anything, you'll want to use:
// declare global {
//     namespace jasmine {
//         interface Matchers {
//             ...
//         }
//     }
// }
declare namespace jasmine {
    interface Matchers<T> {
        toBeGoofy(expected?: Expected<T>): boolean;
        toBeWithinRange(expected?: Expected<T>, floor?: number, ceiling?: number): boolean;
    }

    interface AsyncMatchers<T, U> {
        toBeEight(): Promise<void>;
    }
}

describe("Custom matcher: 'toBeGoofy'", () => {
    beforeEach(() => {
        jasmine.addMatchers(customMatchers);
    });

    it("is available on an expectation", () => {
        expect({
            hyuk: 'gawrsh'
        }).toBeGoofy();
    });

    it("can take an 'expected' parameter", () => {
        expect({
            hyuk: 'gawrsh is fun'
        }).toBeGoofy({ hyuk: ' is fun' });
    });

    it("can take many 'expected' parameters", () => {
        expect(2).toBeWithinRange(1, 3);
    });

    it("can use the custom negativeCompare method", () => {
        const matcher = customMatchers["toBeWithinRange"](jasmine.matchersUtil, []);
        const result = matcher.negativeCompare!(1, 2, 3);

        expect(result.pass).toBe(false);
        expect(result.message).toBe("expected 1 not to be within range 2-3");
    });

    it("can be negated", () => {
        expect({
            hyuk: 'this is fun'
        }).not.toBeGoofy();
    });

    it("has a proper message on failure", () => {
        const actual = { hyuk: 'this is fun' };

        const matcher = customMatchers["toBeGoofy"](jasmine.matchersUtil, []);
        const result = matcher.compare(actual, null);

        expect(result.pass).toBe(false);
        expect(result.message).toBe(`Expected ${actual} to be goofy, but it was not very goofy`);
    });
});

describe("Custom async matcher: 'toBeEight'", () => {
    beforeEach(() => {
        jasmine.addAsyncMatchers({
            toBeEight: () => {
                return {
                    compare: async (input: any) => {
                        return {
                            pass: input === 8,
                            message: `${JSON.stringify(input)} is not 8`,
                        };
                    },
                };
            },
        });

        jasmine.addAsyncMatchers({
            // $ExpectError
            toBeBadlyTyped: () => {
                return {
                    compare: () => {
                        return {
                            pass: true,
                            message: 'I am not an async function / not returning promise!',
                        };
                    },
                };
            },
        });
    });

    it("works in positive case", async () => {
        await expectAsync(8).toBeEight();
    });

    it("works in negative case", async () => {
        await expectAsync("seven").not.toBeEight();
    });

    it("fails correctly", async () => {
        // This compiles, but the test fails at runtime (as {} isn't 8).
        await expectAsync({}).toBeEight();
    });
});

describe('better typed spys', () => {
    describe('a typed spy', () => {
        const spy = jasmine.createSpy('spy', (num: number, str: string) => {
            return `${num} and ${str}`;
        });
        it('has a typed returnValue', () => {
            // $ExpectType (val: string) => Spy<(num: number, str: string) => string>
            spy.and.returnValue;
        });
        it('has a typed calls property', () => {
            spy.calls.first().args; // $ExpectType [number, string] || [num: number, str: string]
            spy.calls.first().returnValue; // $ExpectType string
        });
        it('has a typed callFake', () => {
            // $ExpectType (fn: (num: number, str: string) => string) => Spy<(num: number, str: string) => string>
            spy.and.callFake;
        });
    });
    describe('spyOn', () => {
        it('only works on methods', () => {
            const foo = {
                method() {
                    return 'baz';
                },
                value: 'value',
            };
            const spy = spyOn(foo, 'method');
            const spy2 = spyOn(foo, 'value'); // $ExpectError

            // $ExpectType string
            spy.calls.first().returnValue;
        });
        it('works on constructors', () => {
            class MyClass {
                constructor(readonly foo: string) { }
            }
            const namespace = { MyClass };
            const spy = spyOn(namespace, 'MyClass');
            spy.and.returnValue({ foo: 'test' });
            spy.and.returnValue({}); // $ExpectError
            spy.and.returnValue({ foo: 123 }); // $ExpectError
        });
        it('can allows overriding the generic', () => {
            class Base {
                service() { }
            }
            class Super extends Base {
                service2() { }
            }
            spyOn<Base>(new Super(), 'service');
            spyOn<Base>(new Super(), 'service2'); // $ExpectError
        });
    });
    describe('createSpyObj', () => {
        it('returns the correct spy types', () => {
            const foo = {
                method() {
                    return 'baz';
                },
                value: 'value',
            };
            const spyObj = jasmine.createSpyObj<typeof foo>('foo', ['method']);

            // $ExpectType (val: string) => Spy<() => string>
            spyObj.method.and.returnValue;
        });
    });
});

// test based on http://jasmine.github.io/2.5/custom_reporter.html
var myReporter: jasmine.CustomReporter = {
    jasmineStarted: (suiteInfo: jasmine.SuiteInfo) => {
        console.log("Running suite with " + suiteInfo.totalSpecsDefined);
    },

    suiteStarted: (result: jasmine.CustomReporterResult) => {
        console.log(`Suite started: ${result.description} whose full description is: ${result.fullName}`);
    },

    specStarted: (result: jasmine.CustomReporterResult) => {
        console.log(`Spec started: ${result.description} whose full description is: ${result.fullName}`);
    },

    specDone: (result: jasmine.CustomReporterResult) => {
        console.log(`Spec: ${result.description} was ${result.status}`);
        for (var i = 0; result.failedExpectations && i < result.failedExpectations.length; i += 1) {
            console.log("Failure: " + result.failedExpectations[i].message);
            console.log("Actual: " + result.failedExpectations[i].actual);
            console.log("Expected: " + result.failedExpectations[i].expected);
            console.log(result.failedExpectations[i].stack);
        }
        console.log(result.passedExpectations && result.passedExpectations.length);
    },

    suiteDone: (result: jasmine.CustomReporterResult) => {
        console.log(`Suite: ${result.description} was ${result.status}`);
        for (var i = 0; result.failedExpectations && i < result.failedExpectations.length; i += 1) {
            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    },

    jasmineDone: (runDetails: jasmine.RunDetails) => {
        console.log('Finished suite');
        console.log('Random:', runDetails.order.random);
    }
};

jasmine.getEnv().addReporter(myReporter);

describe("Randomize Tests", () => {
    it("should allow randomization of the order of tests", () => {
        expect(() => {
            const env = jasmine.getEnv();
            env.configure({
                random: true
            });
        }).not.toThrow();
    });

    it("should allow a seed to be passed in for randomization", () => {
        expect(() => {
            const env = jasmine.getEnv();
            env.configure({
                random: true,
                seed: 1234
            });
        }).not.toThrow();
    });
});

// Dest spces copied from jasmine project (https://github.com/jasmine/jasmine/blob/master/spec/core/SpecSpec.js)
describe("createSpyObj", function() {
    it("should create an object with spy methods and corresponding return values when you call jasmine.createSpyObj() with an object", function() {
        const spyObj = jasmine.createSpyObj('BaseName', { method1: 42, method2: 'special sauce' });

        expect(spyObj.method1()).toEqual(42);
        expect(spyObj.method1.and.identity()).toEqual('BaseName.method1');

        expect(spyObj.method2()).toEqual('special sauce');
        expect(spyObj.method2.and.identity()).toEqual('BaseName.method2');
    });

    it("should create an object with a bunch of spy methods when you call jasmine.createSpyObj()", function() {
        const spyObj = jasmine.createSpyObj('BaseName', ['method1', 'method2']);

        expect(spyObj).toEqual({ method1: jasmine.any(Function), method2: jasmine.any(Function) });
        expect(spyObj.method1.and.identity()).toEqual('BaseName.method1');
        expect(spyObj.method2.and.identity()).toEqual('BaseName.method2');
    });

    it("should allow you to omit the baseName and takes only an object", function() {
        const spyObj = jasmine.createSpyObj({ method1: 42, method2: 'special sauce' });

        expect(spyObj.method1()).toEqual(42);
        expect(spyObj.method1.and.identity()).toEqual('unknown.method1');

        expect(spyObj.method2()).toEqual('special sauce');
        expect(spyObj.method2.and.identity()).toEqual('unknown.method2');
    });

    it("should allow you to omit the baseName and takes only a list of methods", function() {
        const spyObj = jasmine.createSpyObj(['method1', 'method2']);

        expect(spyObj).toEqual({ method1: jasmine.any(Function), method2: jasmine.any(Function) });
        expect(spyObj.method1.and.identity()).toEqual('unknown.method1');
        expect(spyObj.method2.and.identity()).toEqual('unknown.method2');
    });

    it("should throw if you pass an empty array argument", function() {
        expect(function() {
            jasmine.createSpyObj('BaseName', []);
        }).toThrow("createSpyObj requires a non-empty array or object of method names to create spies for");
    });

    it("should throw if you pass an empty object argument", function() {
        expect(function() {
            jasmine.createSpyObj('BaseName', {});
        }).toThrow("createSpyObj requires a non-empty array or object of method names to create spies for");
    });

    it("creates an object with property names and return values if second object is passed", function() {
        const spyObj = jasmine.createSpyObj('base', ['method1'], {
            prop1: 'foo',
            prop2: 37
        });

        expect(spyObj).toEqual({
            method1: jasmine.any(Function)
        });

        expect(spyObj.prop1).toEqual('foo');
        expect(spyObj.prop2).toEqual(37);
        spyObj.prop2 = 4;
        expect(spyObj.prop2).toEqual(37);
    });

    it("allows base name to be ommitted when assigning methods and properties", function() {
        const spyObj = jasmine.createSpyObj({ m: 3 }, { p: 4 });

        expect(spyObj.m()).toEqual(3);
        expect(spyObj.p).toEqual(4);
    });

    it("allows methods and properties lists to omit entries from typed object", function() {
        interface Template {
            method1(): number;
            method2(): void;
            readonly property1: string;
            property2: number;
        }
        const spyObj = jasmine.createSpyObj<Template>(["method1"], ["property1"]);

        expect(spyObj).toEqual({
            method1: jasmine.any(Function),
            method2: undefined as any,
            property1: undefined as any,
            property2: undefined as any
        });
    });

    it("allows methods and properties objects to omit entries from typed object", function() {
        interface Template {
            method1(): number;
            method2(): void;
            readonly property1: string;
            property2: number;
        }
        const spyObj = jasmine.createSpyObj<Template>({method1: 3}, {property1: "4"});

        expect(spyObj.method1()).toEqual(3);
        expect(spyObj.property1).toEqual("4");
    });
});

describe('Static Matcher Test', function() {
    it('Falsy', () => {
        expect({ value: null }).toEqual(
            jasmine.objectContaining({
                value: jasmine.falsy(),
            })
        );
    });
    it('Truthy', () => {
        expect({ value: null }).toEqual(
            jasmine.objectContaining({
                value: jasmine.truthy(),
            })
        );
    });
    it('Empty', () => {
        expect({ value: null }).toEqual(
            jasmine.objectContaining({
                value: jasmine.empty(),
            })
        );
    });
    it('NotEmpty', () => {
        expect({ value: null }).toEqual(
            jasmine.objectContaining({
                value: jasmine.notEmpty(),
            })
        );
    });
    it('Partial should OK', () => {
        expect({ value: null, label: 'abcd' }).toEqual(
            jasmine.objectContaining({
                value: jasmine.anything(),
            })
        );
        expect({ value: null }).toEqual(
            jasmine.objectContaining({
                value: 'any value should ok',
            })
        );
    });
});

describe("User scenarios", () => {
    describe("https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34080", () => {
        interface Test {
            f(): string;
            f(x: any): number;
        }

        it("has a way to opt out of inferred function types", () => {
            const spyObject: jasmine.NonTypedSpyObj<Test> = jasmine.createSpyObj<Test>("spyObject", ["f"]);
            spyObject.f.and.returnValue("a string - working");

            const spy2 = jasmine.createSpyObj<Test>(['f']);
            spy2.f.and.returnValue("can return string" as any);
        });

        it("should be possible to opt out for spyOn", () => {
            const obj: Test = null!;

            const spy1: jasmine.Spy = spyOn(obj, "f");
            spy1.and.returnValue("can return string");

            const spy2 = spyOn(obj, "f");
            spy2.and.returnValue("can return string" as any);
        });
    });
});

(() => {
    // from boot.js
    const env = jasmine.getEnv();

    const htmlReporter = new jasmine.HtmlReporter();
    env.addReporter(htmlReporter);

    const specFilter = new jasmine.HtmlSpecFilter();
    env.specFilter = (spec) => {
        return specFilter.matches(spec.getFullName());
    };

    env.setSpecProperty('name', 'value');
    env.setSuiteProperty('other-name', null);

    const currentWindowOnload = window.onload;
    window.onload = () => {
        if (currentWindowOnload) {
            (currentWindowOnload as any)(null);
        }
        htmlReporter.initialize();
        env.execute();
    };
})();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
jasmine.MAX_PRETTY_PRINT_DEPTH = 40;
