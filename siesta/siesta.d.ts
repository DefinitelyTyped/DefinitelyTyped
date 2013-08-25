declare module Siesta {

    //#region Harness

    /**
     * @abstract
     */
    interface IHarness {
        alsoPreload: any[];

        autoCheckGlobals: boolean;

        cachePreload: boolean;

        defaultTimeout: boolean;

        disableColoring: boolean;

        expectedGlobals: string[];

        isReadyTimeout: number;

        keepNLastResults: number;

        keepResults: boolean;

        listenters: {
            [key: string]: (event: Event, ...args: any[]) => void;
        }

        maxThreads: number;

        needDone: boolean;

        overrideSetTimeout: boolean;

        pauseBetweenTests: number;

        preload: any[];

        runCore: string;

        subTestTimeout: number;

        testClass: Siesta.ITest;

        title: string;

        transparentEx: boolean;

        waitForTimeout: number;

        configure(config: any): void;

        start(...descriptors: any[]): void;
    }

    module Harness {
        interface ITestGroupDescriptor {
            group: string;

            items: any[];
        }

        interface ITestUrlDescriptor {
            url: string;
        }

        interface IPreloadUrlDescriptor {
            type: string;

            url: string;
        }

        interface IPreloadContentDescriptor {
            type: string;

            content: string;
        }

        interface IPreloadTextDescriptor {
            text: string;
        }

        /**
         * @singleton
         */
        interface IBrowser extends IHarness {
            autoRun: boolean;

            autoScrollElementsIntoView: boolean;

            breakOnFail: boolean;

            coverageUnit: string;

            disableCaching: boolean;

            enableCodeCoverage: boolean;

            excludeCoverageUnits: RegExp;

            hostPageUrl: string;

            includeCoverageUnits: RegExp;

            maintainViewportSize: boolean;

            runCore: string;

            separateContext: boolean;

            simulateEventsWith: string;

            speedRun: boolean;

            useStrictMode: boolean;

            viewDOM: boolean;

            viewportHeight: number;

            viewportWidth: number;
        }

        /**
         * @mixin
         */
        interface IBrowserExtJSCore {
            coverageUnit: string;

            excludeCoverageUnits: RegExp;

            installLoaderInstrumentationHook: boolean;
        }

        /**
         * @singleton
         */
        interface IBrowserExtJS extends IBrowser, IBrowserExtJSCore {
            allowExtVersionChange: boolean;

            loaderPath: any;

            waitForAppReady;

            waitForExtReady;
        }

        /**
         * @singleton
         */
        interface IBrowserSenchaTouch extends IBrowser, IBrowserExtJSCore {
            loaderPath: any;

            performSetup: boolean;

            runCore: string;

            transparentEx: boolean
        }

        interface IBrowserSingleton extends IBrowser {
            ExtJS: IBrowserExtJS;

            SenchaTouch: IBrowserSenchaTouch;
        }

        /**
         * @singleton
         */
        interface IHarnessNodeJS extends IHarness {
        }

        var Browser: IBrowserSingleton;

        var NodeJS: IHarnessNodeJS;
    }

    //#endregion

    //#region Test

    /**
     * @abstract
     */
    interface ITest extends Test.IBDD, Test.IDate, Test.IFunction, Test.IMore {
    }

    module Test {
        interface IActionCall extends IAction {
            (next: (...args: any[]) => void, ...previous: any[]): void;

            action?: IActionCall;

            timeout?: number;
        }

        /**
         * @abstract
         */
        interface IAction {
            desc?: string;
        }

        module Action {
            module Role {
                /**
                 * @mixin
                 */
                interface IHasTarget {
                    passTargetToNext?: boolean;

                    target?: any;

                    el?: typeof target;
                }
            }

            /**
             * @class
             */
            interface Click extends IAction, Role.IHasTarget {
                options?: any;
            }

            /**
             * @class
             */
            interface Done extends IAction {
                delay?: number;
            }

            /**
             * @class
             */
            interface DoubleClick extends IAction, Role.IHasTarget {
                options?: any;
            }

            /**
             * @class
             */
            interface DoubleTap extends IAction, Role.IHasTarget {
            }

            /**
             * @class
             */
            interface Drag extends IAction {
                by?: any;

                dragOnly?: boolean;

                source?: any;

                target?: any;

                to?: any;
            }

            /**
             * @class
             */
            interface Eval extends IAction {
                options?: any;
            }

            /**
             * @class
             */
            interface LongPress extends IAction, Role.IHasTarget {
            }

            /**
             * @class
             */
            interface MouseDown extends IAction, Role.IHasTarget {
                options?: any;
            }

            /**
             * @class
             */
            interface MouseUp extends IAction, Role.IHasTarget {
                options?: any;
            }

            /**
             * @class
             */
            interface MoveCursor extends IAction, Role.IHasTarget {
                by?: any;

                to?: any;
            }

            /**
             * @class
             */
            interface MoveCursorTo extends IAction, Role.IHasTarget {
            }

            /**
             * @class
             */
            interface RightClick extends IAction, Role.IHasTarget {
                options?: any;
            }

            /**
             * @class
             */
            interface Swipe extends IAction, Role.IHasTarget {
                direction?: string;
            }

            /**
             * @class
             */
            interface Tap extends IAction, Role.IHasTarget {
                options?: any;

                text?: string;
            }

            /**
             * @class
             */
            interface Type extends IAction, Role.IHasTarget {
            }

            /**
             * @class
             */
            interface Wait extends IAction {
                args?: any[];

                delay?: number;

                timeout?: number;

                waitFor?: string;
            }
        }

        /**
         * @mixin
         */
        interface IBDD {
            any(clsConstructor: Function): any;

            ddescribe(name: string, code: Function, timeout?: number): void;

            describe(name: string, code: Function, timeout?: number): void;

            expect(value: any): BDD.Expectation;

            iit(name: string, code: Function, timeout?: number): void;

            it(name: string, code: Function, timeout?: number): void;

            xdescribe(name: string, code: Function, timeout?: number): void;

            xit(name: string, code: Function, timeout?: number): void;
        }

        module BDD {
            /**
             @class
             */
            interface Expectation {
                not: Expectation;

                toBe(expectedValue: any): void;

                toBeCloseTo(expectedValue: number, precision?: number): void;

                toBeDefined(expectedValue: any): void;

                toBeFalsy(expectedValue: any): void;

                toBeGreaterThan(expectedValue: any): void;

                toBeLessThan(expectedValue: any): void;

                toBeNaN(expectedValue: any): void;

                toBeNull(expectedValue: any): void;

                toBeTruthy(expectedValue: any): void;

                toBeUndefined(value: any): void;

                toContain(element: any): void;

                toEqual(expectedValue: any): void;

                toMatch(regexp: RegExp): void;

                toThrow(): void;
            }
        }

        /**
         * @mixin
         */
        interface IExtJSAjax {
        }

        /**
         * @mixin
         */
        interface IExtJSComponent {
        }

        /**
         * @mixin
         */
        interface IExtJSDataView {
        }

        /**
         * @mixin
         */
        interface IExtJSElement {
        }

        /**
         * @mixin
         */
        interface IExtJSFormField {
        }

        /**
         * @mixin
         */
        interface IExtJSGrid {
        }

        /**
         * @mixin
         */
        interface IExtJSObservable {
        }

        /**
         * @mixin
         */
        interface IExtJSStore {
        }

        /**
         * @class
         */
        interface ExtJS extends Browser, IExtJSAjax, IExtJSComponent, IExtJSDataView, IExtJSElement, IExtJSFormField, IExtJSGrid, IExtJSObservable, IExtJSStore, IExtJSCore {
        }

        module Simulate {
            /**
             * @mixin
             */
            interface IEvent {
                simulateEventsWith: string;

                simulateEvent(el: any, type: string, the?: any, suppressLog?: boolean): void;
            }

            /**
             * @mixin
             */
            interface IKeyboard {
                keyPress(el: any, key: string, options: any): void;

                type(el: any, text: string, callback?: Function, scope?: any, options?: any): void;
            }

            module KeyCodes {
            }

            /**
             * @mixin
             */
            interface IMouse {
                dragDelay: number;

                dragPrecision: number;

                moveCursorBetweenPoints: boolean;

                click(el?: any, callback?: Function, scope?: any, options?: any): void;
                click(callback?: Function, scope?: any, options?: any): void;

                doubleClick(el?: any, callback?: Function, scope?: any, options?: any): void;
                doubleClick(callback?: Function, scope?: any, options?: any): void;

                drag(source: any, target?: any, delta?: number[], callback?: Function, scope?: any, options?: any): void;

                dragBy(source: any, delta: number[], callback?: Function, scope?: any, options?: any, dragOnly?: boolean): void;

                dragTo(source: any, target: any, callback?: Function, scope?: any, options?: any, dragOnly?: boolean): void;

                mouseDown(el: any, options: any): void;

                mouseOut(el: any, options: any): void;

                mouseOver(el: any, options: any): void;

                mouseUp(el: any, options: any): void;

                moveCursorBy(delta: number[], callback?: Function, scope?: any): void;

                moveCursorTo(target?: any, callback?: Function, scope?: any): void;

                moveMouseBy(delta: number[], callback?: Function, scope?: any): void;

                moveMouseTo(target?: any, callback?: Function, scope?: any): void;

                rightClick(el?: any, callback?: Function, scope?: any, options?: any): void;
                rightClick(callback?: Function, scope?: any, options?: any): void;
            }
        }

        /**
         * @class
         */
        interface Browser extends Simulate.IEvent, Simulate.IKeyboard, Simulate.IMouse, IElement, ITextSelection {
            clearTimeout(timeoutId: number): void;

            elementFromPoint(x: number, y: number, shallow?: boolean): HTMLElement;

            firesAtLeastNTimes(observable: any, event: string, n: number, desc: string);

            firesOk(options: any): void;

            firesOnce(observable: any, event: string, desc: string): void;

            isntFired(observable: any, event: string, desc: string): void;

            setTimeout(func: Function, delay: number): number;

            waitForEvent(observable: any, event: string, callback: Function, scope: any, timeout: number): void;

            waitForPageLoad(callback: Function, scope: any): void;

            willFireNTimes(observable: any, event: string, n: number, desc: string): void;

            wontFire(observable: any, event: string, desc: string): void;
        }

        /**
         * @mixin
         */
        interface IDate {
            isDateEqual(got: Date, expectedDate: Date, description?: string): void;
        }

        /**
         * @mixin
         */
        interface IElement {
        }

        /**
         * @mixin
         */
        interface IExtJSCore {
        }

        /**
         * @mixin
         */
        interface IFunction {
            isCalled(fn: string, host: any, desc: string): void;
            isCalled(fn: Function, host: any, desc: string): void;

            isCalledNTimes(fn: string, host: any, n: number, desc: string): void;
            isCalledNTimes(fn: Function, host: any, n: number, desc: string): void;

            isCalledOnce(fn: string, host: any, desc: string): void;
            isCalledOnce(fn: Function, host: any, desc: string): void;

            isntCalled(fn: string, host: any, n: number, desc: string): void;
            isntCalled(fn: Function, host: any, n: number, desc: string): void;

            methodIsCalled(fn: string, className: string, desc: string): void;
            methodIsCalled(fn: Function, className: string, desc: string): void;
            methodIsCalled(fn: string, className: Function, desc: string): void;
            methodIsCalled(fn: Function, className: Function, desc: string): void;

            methodIsCalledNTimes(fn: string, className: string, n: number, desc: string): void;
            methodIsCalledNTimes(fn: Function, className: string, n: number, desc: string): void;
            methodIsCalledNTimes(fn: string, className: Function, n: number, desc: string): void;
            methodIsCalledNTimes(fn: Function, className: Function, n: number, desc: string): void;

            methodIsntCalled(fn: string, className: string, desc: string): void;
            methodIsntCalled(fn: Function, className: string, desc: string): void;
            methodIsntCalled(fn: string, className: Function, desc: string): void;
            methodIsntCalled(fn: Function, className: Function, desc: string): void;
        }

        /**
         * @class
         */
        interface jQuery extends Browser {
        }

        interface IWaitForConfig {
            method: Function;

            callback: Function;

            scope?: any;

            timeout?: number;

            interval?: number;
        }

        interface IWaitForReturn {
            force: Function
        }

        /**
         * @mixin
         */
        interface IMore {
            waitForTimeout: number;

            chain(steps: IAction[]): void;
            chain(...step: IAction[]): void;

            expectGlobals(...names: any[]): void;

            isApprox(value1: number, value2: number, threshHold: number, desc: string): void;

            isArray(value: any, desc: string): void;

            isBoolean(value: any, desc: string): void;

            isDate(value: any, desc: string): void;

            isDeeply(obj1: any, obj2: any, desc: string): void;

            isDeeplyStrict(obj1: any, obj2: any, desc: string): void;

            isFunction(value: any, desc: string): void;

            isGreater(value1: any, value2: any, desc: string): void;

            isGreaterOrEqual(value1: any, value2: any, desc: string): void;

            isLess(value1: any, value2: any, desc: string): void;

            isLessOrEqual(value1: any, value2: any, desc: string): void;

            isNumber(value: any, desc: string): void;

            isObject(value: any, desc: string): void;

            isRegExp(value: any, desc: string): void;

            isString(value: any, desc: string): void;

            isaOk(value: any, className: string, desc: string): void;
            isaOk(value: any, className: Function, desc: string): void;

            like(string: string, regex: string, desc: string): void;
            like(string: string, regex: RegExp, desc: string): void;

            livesOk(func: Function, desc: string): void;

            throwsOk(func: Function, expected: string, desc: string): void;
            throwsOk(func: Function, expected: RegExp, desc: string): void;

            unlike(string: string, regex: string, desc: string): void;
            unlike(string: string, regex: RegExp, desc: string): void;

            verifyGlobals(...names: string[]): void;

            waitFor(wait: number, callback: Function, scope: any, timeout: number, interval?: number): IWaitForReturn;
            waitFor(method: Function, callback: Function, scope: any, timeout: number, interval?: number): IWaitForReturn;
            waitFor(config: IWaitForConfig): IWaitForReturn;
        }

        /**
         * @class
         */
        interface SenchaTouch extends Browser, IExtJSComponent, IExtJSElement, IExtJSFormField, IExtJSObservable, IExtJSStore, IExtJSCore {
        }

        /**
         * @mixin
         */
        interface ITextSelection {
        }
    }

    //#endregion

}

declare function StartTest(testScript: (t: Siesta.ITest) => void): void;

declare var startTest: typeof StartTest;

declare var describe: typeof StartTest;
