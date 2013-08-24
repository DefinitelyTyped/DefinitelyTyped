declare function StartTest(testScript: (t: Siesta.Test) => void): void;

declare var startTest: typeof StartTest;

declare var describe: typeof StartTest;

declare module Siesta {

    //#region Harness

    class Harness {
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

        testClass: Siesta.Test;

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

        interface IBrowser extends Harness {
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

        interface IBrowserExtJSCore {
            coverageUnit: string;

            excludeCoverageUnits: RegExp;

            installLoaderInstrumentationHook: boolean;
        }

        interface IBrowserExtJS extends IBrowser, IBrowserExtJSCore {
            allowExtVersionChange: boolean;

            loaderPath: any;

            waitForAppReady;

            waitForExtReady;
        }

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

        interface IHarnessNodeJS extends Harness {
        }

        var Browser: IBrowserSingleton;

        var NodeJS: IHarnessNodeJS;
    }

    //#endregion

    export class Test implements Test.BDD, Test.Date, Test.Function, Test.More {
    }

    export module Test {
        export class Action {
        }

        export module Action {
            export module Role {
                export class HasTarget {
                }
            }

            export class Click extends Action implements Role.HasTarget {
            }

            export class Done extends Action {
            }

            export class DoubleClick extends Action implements Role.HasTarget {
            }

            export class DoubleTap extends Action implements Role.HasTarget {
            }

            export class Drag extends Action {
            }

            export class Eval extends Action {
            }

            export class LongPress extends Action implements Role.HasTarget {
            }

            export class MouseDown extends Action implements Role.HasTarget {
            }

            export class MouseUp extends Action implements Role.HasTarget {
            }

            export class MoveCursor extends Action implements Role.HasTarget {
            }

            export class MoveCursorTo extends Action implements Role.HasTarget {
            }

            export class RightClick extends Action implements Role.HasTarget {
            }

            export class Swipe extends Action implements Role.HasTarget {
            }

            export class Tap extends Action implements Role.HasTarget {
            }

            export class Type extends Action implements Role.HasTarget {
            }

            export class Wait extends Action {
            }
        }

        export class BDD {
        }

        export module BDD {
            export class Expectation {
            }
        }

        export class ExtJS extends Browser implements ExtJS.Ajax, ExtJS.Component, ExtJS.DataView, ExtJS.Element, ExtJS.FormField, ExtJS.Grid, ExtJS.Observable, ExtJS.Store, ExtJSCore {
        }

        export module ExtJS {
            export class Ajax {
            }

            export class Component {
            }

            export class DataView {
            }

            export class Element {
            }

            export class FormField {
            }

            export class Grid {
            }

            export class Observable {
            }

            export class Store {
            }
        }

        export module Simulate {
            export class Event {
            }

            export class Keyboard {
            }

            export module KeyCodes {
            }

            export class Mouse {
            }
        }

        export class ActionTarget {
        }

        export class Browser implements Simulate.Event, Simulate.Keyboard, Simulate.Mouse, TextSelection {
        }

        export class Date {
        }

        export class Element {
        }

        export class ExtJSCore {
        }

        export class Function {
        }

        export class jQuery extends Browser {
        }

        export class More {
        }

        export class SenchaTouch extends Browser implements ExtJS.Component, ExtJS.Element, ExtJS.FormField, ExtJS.Observable, ExtJS.Store, ExtJSCore {
        }

        export class TextSelection {
        }
    }
}