declare function StartTest(testScript: (t: Siesta.Test) => void): void;

declare var startTest: typeof StartTest;

declare var describe: typeof StartTest;

declare module Siesta {
    export module Harness {
        export module Browser {
            export interface ExtJS extends Browser, ExtJSCore {
            }

            export interface ExtJSCore {
            }

            export interface SenchaTouch extends Browser, ExtJSCore {
            }
        }

        export interface Browser extends Harness {
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

            testClass: Function;

            useStrictMode: boolean;

            viewDOM: boolean;

            viewportHeight: number;

            viewportWidth: number;
        }

        export interface NodeJS extends Harness {
        }
    }

    /**
     * `Siesta.Harness` is an abstract base harness interface in Siesta hierarchy. This interface provides no UI, you should use one of it subinterfacees, for example Siesta.Harness.Browser.
     */
    export interface Harness {
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

        testClass: Function;

        title: string;

        transparentEx: boolean;

        waitForTimeout: number;

        configure(config: any): void;

        start(...descriptors: any[]): void;
    }

    export module Test {
        export module Action {
            export module Role {
                export interface HasTarget {
                }
            }

            export interface Click extends Action, Role.HasTarget {
            }

            export interface Done extends Action {
            }

            export interface DoubleClick extends Action, Role.HasTarget {
            }

            export interface DoubleTap extends Action, Role.HasTarget {
            }

            export interface Drag extends Action {
            }

            export interface Eval extends Action {
            }

            export interface LongPress extends Action, Role.HasTarget {
            }

            export interface MouseDown extends Action, Role.HasTarget {
            }

            export interface MouseUp extends Action, Role.HasTarget {
            }

            export interface MoveCursor extends Action, Role.HasTarget {
            }

            export interface MoveCursorTo extends Action, Role.HasTarget {
            }

            export interface RightClick extends Action, Role.HasTarget {
            }

            export interface Swipe extends Action, Role.HasTarget {
            }

            export interface Tap extends Action, Role.HasTarget {
            }

            export interface Type extends Action, Role.HasTarget {
            }

            export interface Wait extends Action {
            }
        }

        export interface Action {
        }

        export module BDD {
            export interface Expectation {
            }
        }

        export interface BDD {
            //any(clsConstructor: Function): any;
        }

        export module ExtJS {
            export interface Ajax {
            }

            export interface Component {
            }

            export interface DataView {
            }

            export interface Element {
            }

            export interface FormField {
            }

            export interface Grid {
            }

            export interface Observable {
            }

            export interface Store {
            }
        }

        export interface ExtJS extends Browser, ExtJS.Ajax, ExtJS.Component, ExtJS.DataView, ExtJS.Element, ExtJS.FormField, ExtJS.Grid, ExtJS.Observable, ExtJS.Store, ExtJSCore {
        }

        export module Simulate {
            export interface Event {
            }

            export interface Keyboard {
            }

            export interface KeyCodes {
            }

            export interface Mouse {
            }
        }

        export interface ActionTarget {
        }

        export interface Browser extends Simulate.Event, Simulate.Keyboard, Simulate.Mouse, TextSelection {
        }

        export interface Date {
        }

        export interface Element {
        }

        export interface ExtJSCore {
        }

        export interface Function {
        }

        export interface jQuery extends Browser {
        }

        export interface More {
        }

        export interface SenchaTouch extends Browser, ExtJS.Component, ExtJS.Element, ExtJS.FormField, ExtJS.Observable, ExtJS.Store, ExtJSCore {
        }

        export interface TextSelection {
        }
    }

    export interface Test extends Test.BDD, Test.Date, Test.Function, Test.More {
    }
}