// Type definitions for Expect v1.13.4
// Project: https://github.com/mjackson/expect
// Definitions by: Justin Reidy <https://github.com/jmreidy/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace expect {
    class Expectation {
        constructor(actual:any);
        toExist(message?:string):Expectation;
        toBeTruthy(message?:string):Expectation;
        toNotExist(message?:string):Expectation;
        toBeFalsy(message?:string):Expectation;
        toBe(value:any, message?:string):Expectation;
        toNotBe(value:any, message?:string):Expectation;
        toEqual(value:any, message?:string):Expectation;
        toNotEqual(value:any, message?:string):Expectation;
        toThrow(value?:any, message?:string):Expectation;
        toNotThrow(value?:any, message?:string):Expectation;
        toBeA(value:any, message?:string):Expectation;
        toBeAn(value:any, message?:string):Expectation;
        toNotBeA(value:any, message?:string):Expectation;
        toNotBeAn(value:any, message?:string):Expectation;
        toMatch(value:any, message?:string):Expectation;
        toNotMatch(value:any, message?:string):Expectation;
        toBeLessThan(value:any, message?:string):Expectation;
        toBeFewerThan(value:any, message?:string):Expectation;
        toBeGreaterThan(value:any, message?:string):Expectation;
        toBeMoreThan(value:any, message?:string):Expectation;
        toInclude(value:any, compareValues?:any, message?:string):Expectation;
        toContain(value:any, compareValues?:any, message?:string):Expectation;
        toExclude(value:any, compareValues?:any, message?:string):Expectation;
        toNotContain(value:any, compareValues?:any, message?:string):Expectation;
        toHaveBeenCalled(message?:string):Expectation;
        toHaveBeenCalledWith(...args:Array<any>):Expectation;
        toNotHaveBeenCalled(message?:string):Expectation;
        withContext(context:any):Expectation;
        withArgs(...args:Array<any>):Expectation;
    }

    interface Extension {
        [name:string]:(args?:Array<any>) => void;
    }

    interface Call {
        context: Spy;
        arguments: Array<any>;
    }

    interface Spy {
        __isSpy:Boolean;
        calls:Array<Call>;
        andCall(fn:Function):Spy;
        andCallThrough():Spy;
        andThrow(object:Object):Spy;
        andReturn(value:any):Spy;
        getLastCall():Call;
        restore():void;
        destroy():void;
    }

}

declare module "expect" {
    function e(actual:any):expect.Expectation;

    namespace e {
        export function createSpy(fn?:Function, restore?:Function):expect.Spy;
        export function spyOn(object:Object, methodName:string):expect.Spy;
        export function isSpy(object:any):Boolean;
        export function restoreSpies():void;
        export function assert(condition:any, messageFormat:string, ...extraArgs:Array<any>):void;
        export function extend(extension:expect.Extension):void;
    }

    export = e;
}

declare module "expect/lib/Expectation" {
    export default expect.Expectation;
}

declare module "expect/lib/Extension" {
    export default expect.Extension;
}

declare module "expect/lib/Spy" {
    export default expect.Spy;
}
