// Type definitions for Siesta
// Project: http://www.bryntum.com/products/siesta/
// Definitions by: bquarmby <https://github.com/bquarmby>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Siesta {
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

    /**
     * @abstract
     */
    interface ITest extends Test.IBDD, Test.IDate, Test.IFunction, Test.IMore {
        isReadyTimeout: number;

        beginAsync(time: number, errback: Function): any;

        compareObjects(obj1: any, obj2: any, strict?: boolean, onlyPrimitives?: boolean, asObjects?: boolean): boolean;

        diag(desc: string): void;

        done(delay: number): void;

        endAsync(frame: any): void;

        endWait(title: string): void;

        fail(desc: string, annotation: any): void;

        getSubTest(name: string, code: (t: ITest) => void, timeout?: number): ITest;

        is(got: any, expected: any, desc: string): void;

        isNot(got: any, expected: any, desc: string): void;

        isNotStrict(got: any, expected: any, desc: string): void;

        isReady(): any;

        isStrict(got: any, expected: any, desc: string): void;

        launchSubTest(subTest: ITest, callback: Function): void;

        notOk(value: any, desc: string): void;

        ok(value: any, desc: string): void;

        pass(desc: string, annotation: any): void;

        subTest(desc: string, code: (t: ITest) => void, callback: Function, timeout?: number): void;

        todo(why: string, code: Function): void;

        typeOf(object: any): string;

        wait(title: string, howLong: number): void;
    }

    module Test {
        interface IActionCall {
            (next: (...args: any[]) => void, ...previous: any[]): void;
        }

        interface IActionConfig extends IActionCall, IAction {
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

                    el?: any;
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
            ajaxRequestAndThen(url: string, callback: Function, scope: any): void;

            isAjaxLoading(object?: any, description?: string): void;

            waitForAjaxRequest(callback: Function, scope?: any, timeout?: number): void;
            waitForAjaxRequest(object: any, callback: Function, scope?: any, timeout?: number): void;
        }

        /**
         * @mixin
         */
        interface IExtJSComponent {
            destroysOk(components: any, description?: string): void;

            hasPosition(component: any, x: number, y: number, description?: string): void;

            hasSize(component: any, width: number, height: number, description?: string): void;

            waitForCQ(query: string, callback: Function, scope?: any, timeout?: number): void;
            waitForCQ(query: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForCQNotFound(query: string, callback: Function, scope?: any, timeout?: number): void;

            waitForCQNotVisible(query: string, callback: Function, scope?: any, timeout?: number): void;

            waitForCQVisible(query: string, callback: Function, scope?: any, timeout?: number): void;

            waitForComponent(component: string, rendered: boolean, callback: Function, scope?: any, timeout?: number): void;

            waitForComponentNotVisible(component: any, callback: Function, scope?: any, timeout?: number): void;

            waitForComponentQuery(query: string, callback: Function, scope?: any, timeout?: number): void;
            waitForComponentQuery(query: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForComponentQueryNotFound(query: string, callback: Function, scope?: any, timeout?: number): void;
            waitForComponentQueryNotFound(query: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForComponentQueryNotVisible(query: string, callback: Function, scope?: any, timeout?: number): void;
            waitForComponentQueryNotVisible(query: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForComponentQueryVisible(query: string, callback: Function, scope?: any, timeout?: number): void;
            waitForComponentQueryVisible(query: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForComponentVisible(component: any, callback: Function, scope?: any, timeout?: number): void;

            waitForCompositeQuery(query: string, callback: Function, scope?: any, timeout?: number): void;
            waitForCompositeQuery(query: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForCompositeQueryNotFound(query: string, callback: Function, scope?: any, timeout?: number): void;
            waitForCompositeQueryNotFound(query: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForXType(xtype: string, callback: Function, scope?: any, timeout?: number): void;
            waitForXType(xtype: string, root: any, callback: Function, scope?: any, timeout?: number): void;
        }

        /**
         * @mixin
         */
        interface IExtJSDataView {
            getFirstItem(view: any): any;

            waitForViewRendered(view: any, callback: Function, scope?: any, timeout?: number): void;
        }

        /**
         * @mixin
         */
        interface IExtJSElement {
            hasRegion(el: any, region: any, description?: string): void;
        }

        /**
         * @mixin
         */
        interface IExtJSFormField {
            fieldHasValue(field: any, value: any, description?: string): void;

            isFieldEmpty(field: any, description?: string): void;
        }

        /**
         * @mixin
         */
        interface IExtJSGrid {
            getCell(panel: any, row: number, column: number): HTMLElement;

            getFirstCell(panel: any): HTMLElement;

            getFirstRow(panel: any): any;

            getLastCellInRow(panel: any, row: number): HTMLElement;

            getRow(panel: any, index: number): any;

            matchGridCellContent(panel: any, row: number, column: number, string: RegExp, description?: string): void;
            matchGridCellContent(panel: any, row: number, column: number, string: string, description?: string): void;

            waitForRowsVisible(panel: any, callback: Function, scope?: any, timeout?: number): void;
        }

        /**
         * @mixin
         */
        interface IExtJSObservable {
            firesAtLeastNTimes(observable: any, event: string, n: number, desc: string): void;

            firesOnce(observable: any, event: string, desc: string): void;

            hasListener(observable: any, eventName: string, description?: string): void;

            isFiredWithSignature(observable: any, event: string, checkerFn: Function, desc: string): void;

            waitForEvent(observable: any, event: string, callback: Function, scope?: any, timeout?: number): void;

            wontFire(observable: any, event: string, desc: string): void;
        }

        /**
         * @mixin
         */
        interface IExtJSStore {
            isStoreEmpty(store: any, description?: string): void;

            loadStoresAndThen(...args: any[]): void;

            waitForStoresToLoad(...args: any[]): void;
        }

        /**
         * @class
         */
        interface ExtJS extends Browser, IExtJSAjax, IExtJSComponent, IExtJSDataView, IExtJSElement, IExtJSFormField, IExtJSGrid, IExtJSObservable, IExtJSStore, IExtJSCore {
            assertMaxNumberOfGlobalExtOverrides(maxNumber: number, description?): void;

            assertNoGlobalExtOverrides(description?: string): void;

            assertNoLayoutTriggered(fn: Function, scope: any, description?: string): void;

            getTotalLayoutCounter(): number;

            waitForPageLoad(callback: Function, scope?: any): void;
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

            enum KeyCodes {
                '\b' = 8,
                'BACKSPACE' = 8,

                '\t' = 9,
                'TAB' = 9,

                '\r' = 13,
                'RETURN' = 13,
                'ENTER' = 13,

                'SHIFT' = 16,
                'CTRL' = 17,
                'ALT' = 18,

                'PAUSE-BREAK' = 19,
                'CAPS' = 20,
                'ESCAPE' = 27,
                'NUM-LOCK' = 144,
                'SCROLL-LOCK' = 145,
                'PRINT' = 44,

                'PAGE-UP' = 33,
                'PAGE-DOWN' = 34,
                'END' = 35,
                'HOME' = 36,
                'LEFT' = 37,
                'UP' = 38,
                'RIGHT' = 39,
                'DOWN' = 40,
                'INSERT' = 45,
                'DELETE' = 46,

                ' ' = 32,
                '0' = 48,
                '1' = 49,
                '2' = 50,
                '3' = 51,
                '4' = 52,
                '5' = 53,
                '6' = 54,
                '7' = 55,
                '8' = 56,
                '9' = 57,
                'A' = 65,
                'B' = 66,
                'C' = 67,
                'D' = 68,
                'E' = 69,
                'F' = 70,
                'G' = 71,
                'H' = 72,
                'I' = 73,
                'J' = 74,
                'K' = 75,
                'L' = 76,
                'M' = 77,
                'N' = 78,
                'O' = 79,
                'P' = 80,
                'Q' = 81,
                'R' = 82,
                'S' = 83,
                'T' = 84,
                'U' = 85,
                'V' = 86,
                'W' = 87,
                'X' = 88,
                'Y' = 89,
                'Z' = 90,

                'NUM0' = 96,
                'NUM1' = 97,
                'NUM2' = 98,
                'NUM3' = 99,
                'NUM4' = 100,
                'NUM5' = 101,
                'NUM6' = 102,
                'NUM7' = 103,
                'NUM8' = 104,
                'NUM9' = 105,
                'NUM*' = 106,
                'NUM+' = 107,
                //'NUM-' = 109,
                //'NUM.' = 110,
                //'NUM/' = 111,

                ';' = 186,
                '=' = 187,
                ',' = 188,
                '-' = 189,
                '.' = 190,
                '/' = 191,
                '`' = 192,
                '[' = 219,
                '\\' = 220,
                ']' = 221,
                '\'' = 222,

                'F1' = 112,
                'F2' = 113,
                'F3' = 114,
                'F4' = 115,
                'F5' = 116,
                'F6' = 117,
                'F7' = 118,
                'F8' = 119,
                'F9' = 120,
                'F10' = 121,
                'F11' = 122,
                'F12' = 123
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
        interface Browser extends ITest, Simulate.IEvent, Simulate.IKeyboard, Simulate.IMouse, IElement, ITextSelection {
            clearTimeout(timeoutId: number): void;

            elementFromPoint(x: number, y: number, shallow?: boolean): HTMLElement;

            firesAtLeastNTimes(observable: any, event: string, n: number, desc: string): void;

            firesOk(options: any): void;

            firesOnce(observable: any, event: string, desc: string): void;

            isntFired(observable: any, event: string, desc: string): void;

            setTimeout(func: Function, delay: number): number;

            waitForEvent(observable: any, event: string, callback: Function, scope?: any, timeout?: number): void;

            waitForPageLoad(callback: Function, scope?: any): void;

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
            chainClick(elements: any[], callback: Function): void;

            clickSelector(selector: string, callback: Function, scope?: any): void;
            clickSelector(selector: string, root: any, callback: Function, scope?: any): void;

            contentLike(el: any, text: string, description?: string): void;

            contentNotLike(el: any, text: string, description?: string): void;

            elementIsAt(el: any, xy: number[], allowChildren: boolean, description?: string): void;

            elementIsInView(el: any): void;

            elementIsNotTopElement(el: any, allowChildren: boolean, description?: string): void;

            elementIsNotVisible(el: any, description?: string): void;

            elementIsTop(el: any, allowChildren: boolean): boolean;

            elementIsTopElement(el: any, allowChildren: boolean, description?: string, strict?): void;

            elementIsVisible(el: any, description?: string): void;

            findCenter(el: any, local?: boolean): number[];

            hasCls(el: any, cls: string, description?: string): void;

            hasNotCls(el: any, cls: string, description?: string): void;

            hasNotStyle(el: any, property: string, value: string, description?: string): void;

            hasStyle(el: any, property: string, value: string, description?: string): void;

            isElementVisible(el: any): boolean;

            isInView(el: any, description?: string): void;

            monkeyTest(el: any, nbrInteractions: number, description?: string, callback?: Function, scope?: any): void;

            scrollHorizontallyTo(el: any, newLeft: number, delay?: number, callback?: Function): number;

            scrollVerticallyTo(el: any, newTop: number, delay?: number, callback?: Function): number;

            selectorCountIs(selector: string, count: number, description: string): void;
            selectorCountIs(selector: string, root: any, count: number, description: string): void;

            selectorExists(selector: string, description?: string): void;

            selectorIsAt(selector: string, xy: number[], allowChildren: boolean, description?: string): void;

            selectorNotExists(selector: string, description?: string): void;

            waitForContentLike(el: any, text: string, callback: Function, scope?: any, timeout?: number): void;

            waitForContentNotLike(el: any, text: string, callback: Function, scope?: any, timeout?: number): void;

            waitForElementNotTop(el: any, callback: Function, scope?: any, timeout?: number): void;

            waitForElementNotVisible(el: any, callback: Function, scope?: any, timeout?: number): void;

            waitForElementTop(el: any, callback: Function, scope?: any, timeout?: number): void;

            waitForElementVisible(el: any, callback: Function, scope?: any, timeout?: number): void;

            waitForScrollChange(el: any, side: string, callback: Function, scope?: any, timeout?: number): void;

            waitForScrollLeftChange(el: any, callback: Function, scope?: any, timeout?: number): void;

            waitForScrollTopChange(el: any, callback: Function, scope?: any, timeout?: number): void;

            waitForSelector(selector: string, callback: Function, scope?: any, timeout?: number): void;
            waitForSelector(selector: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForSelectorAt(xy: number[], selector: string, callback: Function, scope?: any, timeout?: number): void;

            waitForSelectorAtCursor(xy: number[], selector: string, callback: Function, scope?: any, timeout?: number): void;

            waitForSelectorNotFound(selector: string, callback: Function, scope?: any, timeout?: number): void;
            waitForSelectorNotFound(selector: string, root: any, callback: Function, scope?: any, timeout?: number): void;

            waitForSelectors(selectors: string[], callback: Function, scope?: any, timeout?: number): void;
            waitForSelectors(selectors: string[], root: any, callback: Function, scope?: any, timeout?: number): void;

            waitUntilInView(el: any, callback: Function, scope?: any, timeout?: number): void;
        }

        /**
         * @mixin
         */
        interface IExtJSCore {
            Ext(): any;

            clickCQ(selector: string, root: any, callback: Function);

            clickComponentQuery(selector: string, root: any, callback: Function);

            compositeQuery(selector: string, root: any, allowEmpty: boolean): HTMLElement[];

            cq(selector: string);

            cq1(selector: string);

            getExt(): any;

            knownBugIn(frameworkVersion: string, fn: Function, reason: string);

            requireOk(...args: any[]): void;
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
            get$(): any;
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

            waitFor(wait: number, callback: Function, scope?: any, timeout?: number, interval?: number): IWaitForReturn;
            waitFor(method: Function, callback: Function, scope?: any, timeout?: number, interval?: number): IWaitForReturn;
            waitFor(config: IWaitForConfig): IWaitForReturn;
        }

        interface IPositionConfig {
            x?: number;

            y?: number;
        }

        /**
         * @class
         */
        interface SenchaTouch extends Browser, IExtJSComponent, IExtJSElement, IExtJSFormField, IExtJSObservable, IExtJSStore, IExtJSCore {
            doubleTap(target: any, callback?: Function, scope?: any, offset?: number[]): void;

            longpress(target: any, callback?: Function, scope?: any, offset?: number[]): void;

            moveFingerBy(delta: number[], callback?: Function, scope?: any): void;

            moveFingerTo(target: any, callback?: Function, scope?: any, offset?: number[]): void;

            scrollUntilElementVisible(scrollable: any, direction: string, actionTarget: any, callback: Function, scope: any): void;

            swipe(target: any, direction: string, callback?: Function, scope?: any): void;

            tap(target: any, callback?: Function, scope?: any): void;

            waitForScrollerPosition(scroller: any, position: IPositionConfig, callback: Function, scope?: any, timeout?: number): void;
        }

        /**
         * @mixin
         */
        interface ITextSelection {
            getSelectedText(el: any): string;

            selectText(el: any, start?: number, end?: number): void;
        }
    }
}

declare function StartTest(testScript: (t: Siesta.ITest) => void): void;

declare var startTest: typeof StartTest;

declare var describe: typeof StartTest;
