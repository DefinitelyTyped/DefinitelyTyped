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
        //interface ITestGroupDescriptor {
        //    group: string;

        //    items: any[];
        //}

        //interface ITestUrlDescriptor {
        //    url: string;
        //}

        //interface IPreloadUrlDescriptor {
        //    type: string;

        //    url: string;
        //}

        //interface IPreloadContentDescriptor {
        //    type: string;

        //    content: string;
        //}

        //interface IPreloadTextDescriptor {
        //    text: string;
        //}

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

            ddescribe(name: string, code: Function, timeout?: number);

            describe(name: string, code: Function, timeout?: number);

            expect(value: any): BDD.Expectation;

            iit(name: string, code: Function, timeout?: number);

            it(name: string, code: Function, timeout?: number);

            xdescribe(name: string, code: Function, timeout?: number);

            xit(name: string, code: Function, timeout?: number);
        }

        module BDD {
            /**
             @class
             */
            interface Expectation {
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
            }

            module KeyCodes {
            }

            /**
             * @mixin
             */
            interface IMouse {
            }
        }

        /**
         * @class
         */
        interface Browser extends Simulate.IEvent, Simulate.IKeyboard, Simulate.IMouse, IElement, ITextSelection {
        }

        /**
         * @mixin
         */
        interface IDate {
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
        }

        /**
         * @class
         */
        interface jQuery extends Browser {
        }

        /**
         * @mixin
         */
        interface IMore {
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
