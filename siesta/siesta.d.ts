declare module Siesta {

    //#region Harness

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

        testClass: Function;

        title: string;

        transparentEx: boolean;

        waitForTimeout: number;

        configure(config: any): void;

        start(...descriptors: any[]): void;
    }

    interface IHarnessBrowser extends IHarness {
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

    interface IHarnessBrowserExtJS extends IHarnessBrowser, IHarnessBrowserExtJSCore {
    }

    interface IHarnessBrowserExtJSCore {
    }

    interface IHarnessBrowserSenchaTouch extends IHarnessBrowser, IHarnessBrowserExtJSCore {
    }

    interface IHarnessBrowserSingleton extends IHarnessBrowser {
        ExtJS: IHarnessBrowserExtJS;
        SenchaTouch: IHarnessBrowserSenchaTouch;
    }

    interface IHarnessNodeJS extends IHarness {
    }

    interface IHarnessSingleton {
        Browser: IHarnessBrowserSingleton;
        NojeJS: IHarnessNodeJS;
    }

    /**
     * `Siesta.Harness` is an abstract base harness interface in Siesta hierarchy. This interface provides no UI, you should use one of it subinterfacees, for example Siesta.Harness.Browser.
     */
    var Harness: IHarnessSingleton;

    //#endregion

    //#region Test

    interface ITest extends ITestBDD, ITestDate, ITestFunction, ITestMore {
    }

    interface ITestBDD {
        any(clsConstructor: Function): any;
    }

    interface ITestBDDExpectation {
    }

    interface ITestDate {
    }

    interface ITestFunction {
    }

    interface ITestMore {
    }

    interface ITestAction {
    }

    interface ITestActionClick extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionDone extends ITestAction {
    }

    interface ITestActionDoubleClick extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionDoubleTap extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionDrag extends ITestAction {
    }

    interface ITestActionEval extends ITestAction {
    }

    interface ITestActionLongPress extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionMouseDown extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionMouseUp extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionMoveCursor extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionMoveCursorTo extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionRightClick extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionSwipe extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionTap extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionType extends ITestAction, ITestActionRoleHasTarget {
    }

    interface ITestActionWait extends ITestAction {
    }

    interface ITestActionRoleHasTarget {
    }

    interface ITestBrowser extends ITestElement, ITestSimulateEvent, ITestSimulateKeyboard, ITestSimulateMouse, ITestTextSelection {
    }

    interface ITestElement {
    }

    interface ITestExtJS extends ITestBrowser, ITestExtJSAjax, ITestExtJSComponent, ITestExtJSDataView, ITestExtJSElement, ITestExtJSFormField, ITestExtJSGrid, ITestExtJSObservable, ITestExtJSStore, ITestExtJSCore {
    }

    interface ITestExtJSCore {
    }

    interface ITestExtJSAjax {
    }

    interface ITestExtJSComponent {
    }

    interface ITestExtJSDataView {
    }

    interface ITestExtJSElement {
    }

    interface ITestExtJSFormField {
    }

    interface ITestExtJSGrid {
    }

    interface ITestExtJSObservable {
    }

    interface ITestExtJSStore {
    }

    interface ITestSimulateEvent {
    }

    interface ITestSimulateKeyboard {
    }

    interface ITestSimulateKeyCodes {
    }

    interface ITestSimulateMouse {
    }

    interface ITestTextSelection {
    }

    interface ITestjQuery extends ITestBrowser {
    }

    interface ITestSenchaTouch extends ITestBrowser, ITestExtJSComponent, ITestExtJSElement, ITestExtJSFormField, ITestExtJSObservable, ITestExtJSStore, ITestExtJSCore {
    }

    interface ITestSingleton {
        new (): Test;

        BDD: {
            Expectation: {
                new (): ITestBDDExpectation
            }
        };

        ExtJS: {
            new (): ITestExtJS;
        };

        Browser: {
            new (): ITestBrowser;
        }

        jQuery: {
            new (): ITestjQuery;
        };

        SenchaTouch: {
            new (): ITestSenchaTouch;
        };
    }

    interface Test extends ITest {
    }

    var Test: ITestSingleton;

    //#endregion
}

declare function StartTest(testScript: (t: Siesta.Test) => void): void;

declare var startTest: typeof StartTest;

declare var describe: typeof StartTest;