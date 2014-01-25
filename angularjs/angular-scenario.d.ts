// Type definitions for Angular Scenario Testing
// Project: http://angularjs.org
// Definitions by: RomanoLindano
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ng {
    export interface IAngularStatic {
        scenario: any;
    }
}

declare module angularScenario {

    export interface RunFunction {
        (functionToRun: any): any;
    }
    export interface RunFunctionWithDescription {
        (description: string, functionToRun: any): any;
    }

    export interface PauseFunction {
        (): any;
    }

    export interface SleepFunction {
        (seconds: number): any;
    }

    export interface Future {
    }

    export interface testWindow {
        href(): Future;
        path(): Future;
        search(): Future;
        hash(): Future;
    }

    export interface testLocation {
        url(): Future;
        path(): Future;
        search(): Future;
        hash(): Future;
    }

    export interface Browser {
        navigateTo(url: string): void;
        navigateTo(urlDescription: string, urlFunction: () => string): void;
        reload(): void;
        window(): testWindow;
        location(): testLocation;
    }

    export interface Matchers {
        toEqual(value: any): void;
        toBe(value: any): void;
        toBeDefined(): void;
        toBeTruthy(): void;
        toBeFalsy(): void;
        toMatch(regularExpression: any): void;
        toBeNull(): void;
        toContain(value: any): void;
        toBeLessThan(value: any): void;
        toBeGreaterThan(value: any): void;
    }

    export interface CustomMatchers extends Matchers {
    }

    export interface Expect extends CustomMatchers {
        not(): angularScenario.CustomMatchers;
    }

    export interface UsingFunction {
        (selector: string, selectorDescription?: string): void;
    }

    export interface BindingFunction {
        (bracketBindingExpression: string): Future;
    }

    export interface Input {
        enter(value: any): any;
        check(): any;
        select(radioButtonValue: any): any;
        val(): Future;
    }

    export interface Repeater {
        count(): Future;
        row(index: number): Future;
        column(ngBindingExpression: string): Future;
    }

    export interface Select {
        option(value: any): any;
        option(...listOfValues: any[]): any;
    }

    export interface Element {
        count(): Future;
        click(): any;
        query(callback: (selectedDOMElements: any[], callbackWhenDone: (objNull: any, futureValue: any) => any) => any): any;
        val(): Future;
        text(): Future;
        html(): Future;
        height(): Future;
        innerHeight(): Future;
        outerHeight(): Future;
        width(): Future;
        innerWidth(): Future;
        outerWidth(): Future;
        position(): Future;
        scrollLeft(): Future;
        scrollTop(): Future;
        offset(): Future;

        val(value: any): void;
        text(value: any): void;
        html(value: any): void;
        height(value: any): void;
        innerHeight(value: any): void;
        outerHeight(value: any): void;
        width(value: any): void;
        innerWidth(value: any): void;
        outerWidth(value: any): void;
        position(value: any): void;
        scrollLeft(value: any): void;
        scrollTop(value: any): void;
        offset(value: any): void;

        attr(key: any): Future;
        prop(key: any): Future;
        css(key: any): Future;

        attr(key: any, value: any): void;
        prop(key: any, value: any): void;
        css(key: any, value: any): void;
    }
}

declare var describe: angularScenario.RunFunctionWithDescription;
declare var ddescribe: angularScenario.RunFunctionWithDescription;
declare var xdescribe: angularScenario.RunFunctionWithDescription;
declare var beforeEach: angularScenario.RunFunction;
declare var afterEach: angularScenario.RunFunction;
declare var it: angularScenario.RunFunctionWithDescription;
declare var iit: angularScenario.RunFunctionWithDescription;
declare var xit: angularScenario.RunFunctionWithDescription;
declare var pause: angularScenario.PauseFunction;
declare var sleep: angularScenario.SleepFunction;
declare function browser(): angularScenario.Browser;
declare function expect(expectation: angularScenario.Future): angularScenario.Expect;
declare var using: angularScenario.UsingFunction;
declare var binding: angularScenario.BindingFunction;
declare function input(ngModelBinding: string): angularScenario.Input;
declare function repeater(selector: string, repeaterDescription?: string): angularScenario.Repeater;
declare function select(ngModelBinding: string): angularScenario.Select;
declare function element(selector: string, elementDescription?: string): angularScenario.Element;
declare var angular: ng.IAngularStatic;
