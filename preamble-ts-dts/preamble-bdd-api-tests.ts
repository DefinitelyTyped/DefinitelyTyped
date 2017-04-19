/// <reference path="preamble-bdd-api.d.ts" />

"use strict";
describe(`"describe" is used to describe a suite which can contain one or more specs`, function() {
    it(`and "it" is used to describe a spec and is used to group one or more expectations"`, function() {
        expect(true).toBeTrue();
        expect(false).not.toBeTrue();
        expect("abc").toEqual("abc");
        expect(123).not.toEqual("abc");
    });
});

describe(`suites can  be nested`, function() {
    describe(`nested suite 1`, function() {
        it(`spec 1.1`, function() {
            expect(1).toBeTruthy();
        });
    });
    describe(`nested suite 2`, function() {
        it(`spec 2.1`, function() {
            expect(0).not.toBeTruthy();
        });
    });
});

describe(`specs can be run asynchronously`, function() {
    let count = 0;
    it(`calling done signals to Preamble that the asynchronous process has completed `, function(done) {
        // simulate some long running task
        setTimeout(function() {
            count = 100;
        }, 1);
        // ... and wait for it to complete and then run the specs
        setTimeout(function() {
            expect(count).toBe(100);
            done();
        }, 10);
    });
});

describe(`Using beforeEach to synchronously execute common code before each test`, function() {
    let count = 0;
    beforeEach(function() {
        count = 1;
    });
    it(`count equals 1`, function() {
        expect(count).toEqual(1);
        count = 2;
    });
    it(`count still equals 1`, function() {
        expect(count).toEqual(1);
    });
});

describe(`Using afterEach to synchronously execute common code after each test`, function() {
    let count = 0;
    afterEach(function() {
        count = 1;
    });
    it(`count equals 0`, function() {
        expect(count).toEqual(0);
        count = 2;
    });
    it(`count still equals 1`, function() {
        expect(count).toEqual(1);
    });
});

describe(`Using beforeEach to asynchronously execute common code before each spec is called`, function() {
    let count = 0;
    beforeEach(function(done) {
        setTimeout(function() {
            count = 10;
            done();
        }, 1);
    });
    it(`count equals 10`, function() {
        expect(count).toEqual(10);
    });
});

describe(`Using afterEach to asynchronously execute common code after each spec is called`, function() {
    let count = 0;
    afterEach(function(done) {
        setTimeout(function() {
            count = 1;
            done();
        }, 1);
    });
    it(`this spec expects count to equal 0 and sets count to 10`, function() {
        expect(count).toEqual(0);
        count = 10;
    });
    it(`this spec expects count to equal 1`, function() {
        expect(count).toEqual(1);
    });
});

describe(`Preventing a spec from timing out`, function() {
    let count = 0;
    beforeEach(function(done) {
        setTimeout(function() {
            count = 10;
            done();
        }, 100);
    });
    it(`by passing a timeout value when calling "it"`, function() {
        expect(count).toEqual(10);
    }, 120);
});

describe(`Sharing values between setups, specs and teardowns using "this"`, function() {
    beforeEach(function() {
        this.value = 10;
    });
    it(`this.value should equal 10`, function() {
        expect(this.value).toEqual(10);
    });
    describe(`works in nested suites also`, function() {
        beforeEach(function() {
            this.otherValue = 100;
        });
        it(`this.value should equal 10 and this.otherValue should equal 100`, function() {
            expect(this.value).toBe(10);
            expect(this.otherValue).toBe(100);
        });
    });
    it(`this.otherValue should not exist and this.value should equal 10`, function() {
        expect(this.otherValue).toBeUndefined();
        expect(this.value).toBe(10);
    });
});

describe("Prevent a suite from running by excluding it with xdescribe", function() {
    xdescribe("this suite will be excluded and will not be run", function() {
        it("this spec will not be run", function() {
            expect(1).toBe(1);
        });
    });
});

describe("Prevent a spec from running by excluding it with xit", function() {
    xit("this spec will not be run", function() {
        expect(1).toBe(0);
    });
    it("but this one will", function() {
        expect(1).not.toBe(0);
    });
});

describe(`Calling expect`, function() {
    it(`sets the actual value for the expectation`, function() {
        expect(1).toBeTruthy();
    });
});

describe(`Using not`, function() {
    it(`negates the intention of a matcher`, function() {
        expect(0).not.toBeTruthy();
    });
});

describe(`Calling toEqual`, function() {
    it(`sets the expectation that the actual and expected values are equal`, function() {
        let obj1 = { iAm: "I am!" },
            obj2 = { iAm: "I am!" },
            obj3 = { iAm: "Obj3" };
        expect(obj1).toEqual(obj2);
        expect(obj2).not.toEqual(obj3);
    });
});

describe(`Calling toBeTrue`, function() {
    it(`sets the expectation that the actual value is true`, function() {
        expect(true).toBeTrue();
        expect(false).not.toBeTrue();
    });
});

describe(`Calling toBeTruthy`, function() {
    it(`sets the expectation that the actual value is truthy`, function() {
        expect(1).toBeTruthy();
        expect(0).not.toBeTruthy();
        expect("abc").toBeTruthy();
        expect("").not.toBeTruthy();
    });
});

describe(`Calling toHaveBeenCalled`, function() {
    it(`sets the expectation that the actual value, a spy, was called`, function() {
        let spy1 = spyOn(),
            spy2 = spyOn();
        spy1();
        expect(spy1).toHaveBeenCalled();
        expect(spy2).not.toHaveBeenCalled();
    });
});

describe(`Calling toHaveBeenCalledWith`, function() {
    it(`sets the expectation that the actual value, a spy, was called with specific arguments`, function() {
        let spy = spyOn();
        spy("abc", "def");
        expect(spy).toHaveBeenCalledWith("abc", "def");
        expect(spy).not.toHaveBeenCalledWith("def", "abc");
    });
});

describe(`Calling toHaveBeenCalledWithContext`, function() {
    it(`sets the expectation that the actual value, a spy, was called with a specific context`, function() {
        let someObject = {
            someFn: function() { }
        },
            someOtherObject = {};
        spyOn(someObject, "someFn");
        someObject.someFn();
        expect(someObject.someFn).toHaveBeenCalledWithContext(someObject);
        expect(someObject.someFn).not.toHaveBeenCalledWithContext(someOtherObject);
    });
});

describe(`Calling toHaveReturnedValue`, function() {
    it(`sets the expectation that the actual value, a spy, returned a specific value`, function() {
        let spy = spyOn().and.return({ fName: "George", lName: "Washington" });
        spy();
        expect(spy).toHaveReturnedValue({ fName: "George", lName: "Washington" });
        expect(spy).not.toHaveReturnedValue({ fName: "Washington", lName: "George" });
    });
});

describe(`Calling toHaveThrown`, function() {
    it(`sets the expectation that the actual value, a spy, threw an exception`, function() {
        let someFn = spyOn(function(arg: any) {
            if (arguments.length !== 1) {
                throw new Error("Whoops!");
            }
        }).and.callActual();
        let someOtherFn = spyOn(function(arg: any) { return arg; }).and.callActual();
        someFn();
        someOtherFn("abc");
        expect(someFn).toHaveThrown();
        expect(someOtherFn).not.toHaveThrown();
    });
});

describe(`Calling toHaveThrown when the actual is an ordinary function`, function() {
    it(`sets the expectation that the actual value, an ordinary function, threw an exception`, function() {
        let a: any;
        let someFn = spyOn(function() { }).and.throw();
        someFn();
        expect(someFn).toHaveThrown();
    });
});

describe(`Calling toHaveThrownWithMessage`, function() {
    it(`sets the expectation that the actual value, a spy, threw an exception with a specific message`, function() {
        let someFn = spyOn().and.throwWithMessage("Whoops!");
        someFn();
        expect(someFn).toHaveThrownWithMessage("Whoops!");
        expect(someFn).not.toHaveThrownWithMessage("Whoops! That was bad.");
    });
});

describe(`Calling toHaveThrownWithName`, function() {
    it(`sets the expectation that the actual value, a spy, threw an exception with a specific name`, function() {
        let someFn = spyOn().and.throwWithName("Error");
        someFn();
        expect(someFn).toHaveThrownWithName("Error");
        expect(someFn).not.toHaveThrownWithName("MinorError");
    });
});

describe(`Calling spyOn() without arguments`, function() {
    it(`creates a spy from an anonymous function`, function() {
        let anonFn = spyOn();
        anonFn();
        expect(anonFn).toHaveBeenCalled();
    });
});

describe(`Calling spyOn(fn)`, function() {
    it(`creates a spy from the function fn`, function() {
        let someSpy: Spy;
        function someFn() { }
        someSpy = spyOn(someFn);
        someSpy();
        expect(someSpy).toHaveBeenCalled();
    });
});

describe(`Calling spyOn(object, methodName)`, function() {
    it(`creates a spy from object[methodName]`, function() {
        let someObject = {
            someFn: function() { }
        };
        spyOn(someObject, "someFn");
        someObject.someFn();
        expect(someObject.someFn).toHaveBeenCalled();
    });
});

describe(`Calling spyOn.x(object, methodNames)`, function() {
    it(`creates a spy from object[methodName] for each methodName found in the array methodNames`, function() {
        let someObject = {
            someFn: function() { },
            someOtherFn: function() { }
        };
        // TODO(): expose spyOn.x functionality an a global function
        spyOnN(someObject, ["someFn", "someOtherFn"]);
        someObject.someFn();
        expect(someObject.someFn).toHaveBeenCalled();
        someObject.someOtherFn();
        expect(someObject.someOtherFn).toHaveBeenCalled();
    });
});

describe(`Calling calls.count()`, function() {
    it(`returns the number of times the spy was called`, function() {
        let someFn = spyOn();
        someFn();
        expect(someFn.calls.count()).toEqual(1);
    });
});

describe(`Calling calls.forCall(nth)`, function() {
    it(`returns an ACall object`, function() {
        let someFn = spyOn(),
            aCall: ACall;
        someFn();
        aCall = someFn.calls.forCall(0);
        expect(aCall.hasOwnProperty("context")).toBeTrue();
        expect(aCall.hasOwnProperty("args")).toBeTrue();
        expect(aCall.hasOwnProperty("error")).toBeTrue();
        expect(aCall.hasOwnProperty("returned")).toBeTrue();
    });
});

describe(`Calling calls.all()`, function() {
    it(`returns an array of all the ACall objects associated with the spy`, function() {
        let someFn = spyOn();
        someFn();
        expect(someFn.calls.all().length).toEqual(1);
    });
});

describe(`Calling calls.wasCalledWith(...args: any[])`, function() {
    it(`returns true if the spy was called with args and false if it was not called with args`, function() {
        let someFn = spyOn();
        someFn(123, "abc", { zip: 55555 });
        expect(someFn.calls.wasCalledWith(123, "abc", { zip: 55555 })).toBeTrue();
    });
});

describe(`Calling calls.wasCalledWithContext(object)`, function() {
    it(`returns true if the spy was called with the context object and false if it was not called with the context object`, function() {
        let someObj = {
            someFn: function() { }
        };
        let spy = spyOn(someObj, "someFn");
        someObj.someFn();
        expect(spy.calls.wasCalledWithContext(someObj)).toBeTrue();
    });
});

describe(`Calling calls.returned(value)`, function() {
    it(`returns true if the spy returned value and false if it did not return value`, function() {
        let someObj = {
            someFn: function(num: number) { return num; }
        };
        let spy = spyOn(someObj, "someFn").and.callActual();
        someObj.someFn(123);
        expect(spy.calls.returned(123)).toBeTrue();
    });
});

describe(`Calling calls.threw()`, function() {
    it(`Returns true if the spy threw an exception and false if it did not throw an exception`, function() {
        let someFn = spyOn().and.throw();
        someFn();
        expect(someFn.calls.threw()).toBeTrue();
    });
});

describe(`Calling calls.threwWithMessage()`, function() {
    it(`Returns true if the spy threw an exception with message and false if it did not throw an exception with message`, function() {
        let someFn = spyOn().and.throwWithMessage("Whoops!");
        someFn();
        expect(someFn.calls.threwWithMessage("Whoops!")).toBeTrue();
    });
});

describe(`Calling calls.threwWithName()`, function() {
    it(`Returns true if the _spy_ threw an exception with **_name_** and false if it did not throw an exception with **_name_**`, function() {
        let someFn = spyOn().and.throwWithName("Error");
        someFn();
        expect(someFn.calls.threwWithName("Error")).toBeTrue();
    });
});

describe(`Calling and.reset()`, function() {
    it(`resets the spy back to its default state`, function() {
        let someFn = spyOn();
        someFn();
        expect(someFn).toHaveBeenCalled();
        someFn.and.reset();
        expect(someFn).not.toHaveBeenCalled();
    });
});

describe(`Calling calls.forCall(i).getContext()`, function() {
    it(`returns the context that was used for a specific call to the _spy_`, function() {
        let someObject = {
            someFn: function() { }
        };
        let spy = spyOn(someObject, "someFn");
        someObject.someFn();
        expect(spy.calls.forCall(0).getContext()).toEqual(someObject);
    });
});

describe(`Calling calls.forCall(i).getArgs()`, function() {
    it(`Returns an Args object for a specific call to the spy`, function() {
        let someObject = {
            someFn: function(...args: any[]) { }
        };
        let spy = spyOn(someObject, "someFn");
        someObject.someFn(123);
        expect(spy.calls.forCall(0).getArgs().args).toEqual([123]);
    });
});

describe(`Calling calls.forCall(i).getArg(nth)`, function() {
    it(`works like arguments[nth] for a specific call to the spy`, function() {
        let someObject = {
            someFn: function(a: number, b: number) { }
        };
        let spy = spyOn(someObject, "someFn");
        someObject.someFn(123, 456);
        expect(spy.calls.forCall(0).getArg(0)).toEqual(123);
        expect(spy.calls.forCall(0).getArg(1)).toEqual(456);
    });
});

describe(`Calling calls.forCall(i).getArgsLength()`, function() {
    it(`works like arguments.length for a specific call to the spy`, function() {
        let someObject = {
            someFn: function(...args: any[]) { }
        };
        let spy = spyOn(someObject, "someFn");
        someObject.someFn(123, 456);
        expect(spy.calls.forCall(0).getArgsLength()).toEqual(2);
    });
});

describe(`Calling calls.forCall(i).getProperty(nth, propertyName)`, function() {
    it(`works like arguments[nth][propertyName] for a specific call to the spy`, function() {
        let someObject = {
            someFn: function(...args: any[]) { }
        };
        let spy = spyOn(someObject, "someFn");
        someObject.someFn({ fName: "Abraham", lName: "Lincoln" });
        expect(spy.calls.forCall(0).getArgProperty(0, "fName")).toEqual("Abraham");
        expect(spy.calls.forCall(0).getArgProperty(0, "lName")).toEqual("Lincoln");
    });
});

describe(`Calling calls.forCall(i).hasArgProperty(nth, propertyName)`, function() {
    it(`works like propertyName in arguments[nth] for a specific call to the _spy_`, function() {
        let someObject = {
            someFn: function(...args: any[]) { }
        };
        let spy = spyOn(someObject, "someFn");
        someObject.someFn({ fName: "Abraham", lName: "Lincoln" });
        expect(spy.calls.forCall(0).hasArgProperty(0, "fName")).toBeTrue();
        expect(spy.calls.forCall(0).hasArgProperty(0, "lName")).toBeTrue();
        expect(spy.calls.forCall(0).hasArgProperty(0, "address")).not.toBeTrue();
    });
});

describe(`Calling calls.forCall(i).hasArg(n)`, function() {
    it(`works like !!arguments[nth] for a specific call to the spy`, function() {
        let someObject = {
            someFn: function(...args: any[]) { }
        };
        let spy = spyOn(someObject, "someFn");
        someObject.someFn("123", 123);
        expect(spy.calls.forCall(0).hasArg(0)).toBeTrue();
        expect(spy.calls.forCall(0).hasArg(1)).toBeTrue();
    });
});

describe(`Calling calls.forCall(i).getError()`, function() {
    it(`returns the error associated with a specific call to the spy`, function() {
        let someObject = {
            someFn: function() { }
        };
        let spy = spyOn(someObject, "someFn").and.throw();
        someObject.someFn();
        expect(spy.calls.forCall(0).getError()).toBeTruthy();
    });
});

describe(`Calling calls.forCall(i).getReturned()`, function() {
    it(`returns the value returned from a specific call to the spy`, function() {
        let someObject = {
            someFn: function(n: number) { return n + 1; }
        };
        let spy = spyOn(someObject, "someFn").and.callActual();
        someObject.someFn(123);
        expect(spy.calls.forCall(0).getReturned()).toEqual(124);
    });
});

describe(`Calling calls.forCall(i).getArgs().getLength()`, function() {
    it(`works like arguments.length`, function() {
        let someFn = spyOn();
        someFn(123, "abc", { zip: 55555 });
        expect(someFn.calls.forCall(0).getArgs().getLength()).toEqual(3);
    });
});

describe(`Calling calls.forCall(i).getArgs().hasArg(n)`, function() {
    it(`works like !!arguments[nth]`, function() {
        let someFn = spyOn();
        someFn(123, "abc", { zip: 55555 });
        expect(someFn.calls.forCall(0).getArgs().hasArg(2)).toBeTrue();
        expect(someFn.calls.forCall(0).getArgs().hasArg(3)).not.toBeTrue();
    });
});

describe(`Calling calls.forCall(i).getArgs().getArg(n)`, function() {
    it(`works like arguments[nth]`, function() {
        let someFn = spyOn();
        someFn(123, "abc", { zip: 55555 });
        expect(someFn.calls.forCall(0).getArgs().getArg(2)).toEqual({ zip: 55555 });
        expect(someFn.calls.forCall(0).getArgs().getArg(2)).not.toEqual({ zip: 11111 });
    });
});

describe(`Calling calls.forCall(i).getArgs().hasArgProperty(nth, propertyName)`, function() {
    it(`works like propertyName in arguments[nth]`, function() {
        let someFn = spyOn();
        someFn(123, "abc", { zip: 55555 });
        expect(someFn.calls.forCall(0).getArgs().hasArgProperty(2, "zip")).toBeTrue();
        expect(someFn.calls.forCall(0).getArgs().hasArgProperty(2, "address")).not.toBeTrue();
    });
});

describe(`Calling calls.forCall(i).getArgs().getArgProperty(nth, propertyName)`, function() {
    it(`works like arguments[nth][propertyName]`, function() {
        let someFn = spyOn();
        someFn(123, "abc", { zip: 55555 });
        expect(someFn.calls.forCall(0).getArgs().getArgProperty(2, "zip")).toEqual(55555);
    });
});

describe(`Calling and.callWithContext(object)`, function() {
    it(`the spy is called using object as its context (this)`, function() {
        let context = {},
            someFn = spyOn().and.callWithContext(context);
        someFn();
        expect(someFn).toHaveBeenCalledWithContext(context);
    });
});

describe(`Calling and.throw()`, function() {
    it(`throws an exception when the _spy_ is called`, function() {
        let someFn = spyOn().and.throw();
        someFn();
        expect(someFn).toHaveThrown();
    });
});

describe(`Calling and.throwWithMessage(message)`, function() {
    it(`the spy throws an exception with message when it is called`, function() {
        let someFn = spyOn().and.throwWithMessage("Whoops!");
        someFn();
        expect(someFn).toHaveThrownWithMessage("Whoops!");
    });
});

describe(`Calling and.throwWithName(name)`, function() {
    it(`the spy throws an exception with name when it is called`, function() {
        let someFn = spyOn().and.throwWithName("Error");
        someFn();
        expect(someFn).toHaveThrownWithName("Error");
    });
});

describe(`Calling and.return(value)`, function() {
    it(`the spy returns value when it is called`, function() {
        let someFn = spyOn().and.return({ zip: 55555 });
        someFn();
        expect(someFn).toHaveReturnedValue({ zip: 55555 });
    });
});

describe(`Calling and.callActual()`, function() {
    it(`the actual implementation is called when the spy is called`, function() {
        let someFn = function(n: number) {
            return n + 1;
        },
            stub: Spy;
        stub = spyOn(someFn).and.return(1);
        stub(100);
        expect(stub).toHaveReturnedValue(1);
        stub.and.callActual();
        stub(100);
        expect(stub).toHaveReturnedValue(101);
    });
});

describe(`Calling and.callFake(fn)`, function() {
    it(`creates a fake with fn as its implementation`, function() {
        let someObject = {
            someFn: function() { return false; }
        };
        spyOn(someObject, "someFn").and.callFake(function() { return true; });
        someObject.someFn();
        expect(someObject.someFn).toHaveReturnedValue(true);
    });
});

// Q is exposed on the preamble object
describe(`Q is exposed in the global preamble object for use in suites`, function() {
    beforeEach(function(done) {
        preamble.Q.delay(150).then(() => {
            this.abc = "abc";
            done();
        });
    });
    it(`this.x should be "abc & shouldn't be "cba"`, function() {
        expect(this.abc).toBe("abc");
        expect(this.abc).not.toBe("cba");
    });
});

// custom matchers
preamble.registerMatcher({
    apiName: "toBeAString",
    api: (matcherValue: any): void => { },
    evaluator: (expectedValue): boolean => typeof expectedValue === "string",
    negator: true,
    minArgs: 0,
    maxArgs: 0
});
preamble.registerMatcher({
    apiName: "toBeANumber",
    api: (matcherValue: any): void => { },
    evaluator: (expectedValue): boolean => typeof expectedValue === "number",
    negator: true,
    minArgs: 0,
    maxArgs: 0
});
preamble.registerMatcher({
    apiName: "toBeInstanceOf",
    api: (matcherValue: any): any => matcherValue,
    evaluator: (expectedValue, matcherValue): boolean => expectedValue instanceof matcherValue,
    negator: true,
    minArgs: 1,
    maxArgs: 1
});

describe("Custom matchers", function() {
    it("toBeAString can be loaded dynamically and used just like a built in matcher", function() {
        expect("I am a string").toBeAString();
        expect(999).not.toBeAString();
    });
    it("toBeANumber can be loaded dynamically and used just like a built in matcher", function() {
        expect(999).toBeANumber();
        expect("I am a string").not.toBeANumber();
    });
    it("toBeInstanceOf can be loaded dynamically and used just like a built in matcher", function() {
        class SomeThing {
            constructor() { }
        }
        class SomeOtherThing {
            constructor() { }
        }
        let someThing = new SomeThing();
        expect(someThing).toBeInstanceOf(SomeThing);
        expect(someThing).not.toBeInstanceOf(SomeOtherThing);
    });
});
describe(`Calling and.expect.it.toBeCalled()`, function() {
    it(`sets the expectation that the mock must be called`, function() {
        let m = mock().and.expect.it.toBeCalled();
        m();
        m.validate();
    });
});

describe(`Calling and.expect.it.toBeCalledWith("abc", 123, {zip: "55555"})`, function() {
    it(`sets the expectation that the mock must be called with "abc", 123, {zip: "55555"}`, function() {
        let m = mock().and.expect.it.toBeCalledWith("abc", 123, { zip: "55555" });
        m("abc", 123, { zip: "55555" });
        m.validate();
    });
});

describe(`Calling and.expect.it.toBeCalledWithContext(object)`, function() {
    it(`sets the expectation that the mock must be called with its context set to object`, function() {
        let someObject = {
            someFn: function() { return this.sayHi(); },
            sayHi: function() { return "Hello"; }
        },
            someOtherObject = {
                sayHi: function() { return "Hello World!"; }
            };
        let m = mock(someObject, "someFn").
            and.callActual().
            and.expect.it.toBeCalledWithContext(someOtherObject).
            and.expect.it.toReturnValue("Hello World!");
        someObject.someFn.call(someOtherObject);
        m.validate();
    });
});

describe(`Calling and.expect.it.toReturn(value)`, function() {
    it(`sets the expectation that the mock must return value`, function() {
        let someObject = {
            someFn: function() { return { fName: "Tom", lName: "Sawyer" }; }
        };
        let m = mock(someObject, "someFn").and.callActual().
            and.expect.it.toReturnValue({ fName: "Tom", lName: "Sawyer" });
        someObject.someFn();
        m.validate();
    });
});

describe(`Calling and.expect.it.toThrow()`, function() {
    it(`sets the expectation that the mock must throw an exception when called`, function() {
        let someObject = {
            someFn: function() { throw new Error("Whoops!"); }
        };
        let m = mock(someObject, "someFn").and.callActual().
            and.expect.it.toThrow();
        someObject.someFn();
        m.validate();
    });
});

describe(`Calling and.expect.it.toThrowWithName(name)`, function() {
    it(`sets the expectation that the mock must throw an exception with name when called`, function() {
        let someObject = {
            someFn: function() { }
        };
        let m = mock(someObject, "someFn").and.throwWithName("Error").
            and.expect.it.toThrowWithName("Error");
        someObject.someFn();
        m.validate();
    });
});

describe(`Calling and.expect.it.toThrowWithMessage("Whoops!")`, function() {
    it(`sets the expectation that the mock must throw an exception with message when called`, function() {
        let someObject = {
            someFn: function() { }
        };
        let m = mock(someObject, "someFn").and.throwWithMessage("Whoops!").
            and.expect.it.toThrowWithMessage("Whoops!");
        someObject.someFn();
        m.validate();
    });
});
