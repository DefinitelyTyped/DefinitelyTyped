// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace doh {
    namespace plugins {
        namespace alwaysAudio {
        }

        namespace hello {
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/plugins/remoteRobot.html
         *
         * Plugin that bridges the doh.robot and WebDriver APIs.
         *
         */
        interface remoteRobot {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/plugins/android-webdriver-robot.html
         *
         *
         */
        interface android_webdriver_robot {
            /**
             *
             * @param sec
             * @param charCode
             * @param keyCode
             * @param delay
             */
            downKey(sec: any, charCode: any, keyCode: any, delay: any): void;
            /**
             *
             * @param sec
             * @param x
             * @param y
             * @param delay
             * @param duration
             */
            moveMouse(sec: any, x: any, y: any, delay: any, duration: any): void;
            /**
             *
             * @param sec
             * @param left
             * @param middle
             * @param right
             * @param delay
             */
            pressMouse(sec: any, left: any, middle: any, right: any, delay: any): void;
            /**
             *
             * @param sec
             * @param left
             * @param middle
             * @param right
             * @param delay
             */
            releaseMouse(sec: any, left: any, middle: any, right: any, delay: any): void;
            /**
             *
             * @param sec
             * @param docScreenX
             * @param docScreenY
             * @param width
             * @param height
             */
            setDocumentBounds(sec: any, docScreenX: any, docScreenY: any, width: any, height: any): void;
            /**
             *
             * @param sec
             * @param charCode
             * @param keyCode
             * @param alt
             * @param ctrl
             * @param shift
             * @param meta
             * @param delay
             * @param async
             */
            typeKey(sec: any, charCode: any, keyCode: any, alt: any, ctrl: any, shift: any, meta: any, delay: any, async: any): void;
            /**
             *
             * @param chars
             * @param delay
             * @param duration
             */
            typeKeys(chars: String, delay: number, duration: number): void;
            /**
             *
             * @param chars
             * @param delay
             * @param duration
             */
            typeKeys(chars: number, delay: number, duration: number): void;
            /**
             *
             * @param sec
             * @param charCode
             * @param keyCode
             * @param delay
             */
            upKey(sec: any, charCode: any, keyCode: any, delay: any): void;
        }
    }

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/doh/_nodeRunner.html
     *
     * Module for running DOH tests in node (as opposed to a browser).
     * Augments return value from doh/runner.
     *
     */
    interface _nodeRunner {
    }
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/doh/_rhinoRunner.html
     *
     * Module for running DOH tests in rhino (as opposed to a browser).
     * Augments return value from doh/runner.
     *
     */
    interface _rhinoRunner {
    }
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/doh/_parseURLargs.html
     *
     *
     */
    interface _parseURLargs {
        /**
         *
         */
        isDebug: boolean;
        /**
         *
         */
        noGlobals: boolean;
        /**
         *
         */
        scopeMap: any[];
    }
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/doh/_browserRunner.html
     *
     * Functions for registering and running automated tests.
     *
     */
    interface _browserRunner {
        /**
         *
         */
        debug: Object;
        /**
         *
         */
        error: Object;
        /**
         *
         */
        isBrowser: boolean;
        /**
         *
         */
        registerUrl: Object;
        /**
         *
         */
        robot: Object;
        /**
         * are the passed expected and actual objects/values deeply
         * equivalent?
         *
         * @param expected
         * @param actual
         * @param hint               Optional
         * @param doNotThrow
         */
        assertEqual(expected: Object, actual: Object, hint: String, doNotThrow: any): void;
        /**
         * Test for a certain error to be thrown by the given function.
         *
         * @param expectedError
         * @param scope
         * @param functionName
         * @param args
         * @param hint               Optional
         */
        assertError(expectedError: Object, scope: Object, functionName: String, args: any[], hint: String): void;
        /**
         * is the passed item "falsey"?
         *
         * @param condition
         * @param hint               Optional
         */
        assertFalse(condition: Object, hint: String): void;
        /**
         * are the passed notexpected and actual objects/values deeply
         * not equivalent?
         *
         * @param notExpected
         * @param actual
         * @param hint               Optional
         */
        assertNotEqual(notExpected: Object, actual: Object, hint: String): void;
        /**
         * is the passed item "truthy"?
         *
         * @param condition
         * @param hint               Optional
         */
        assertTrue(condition: Object, hint: String): void;
        /**
         *
         * @param canceller
         */
        Deferred(canceller: any): void;
        /**
         * Test for a certain error to be thrown by the given function.
         *
         * @param expectedError
         * @param scope
         * @param functionName
         * @param args
         * @param hint               Optional
         */
        e(expectedError: Object, scope: Object, functionName: String, args: any[], hint: String): void;
        /**
         * is the passed item "falsey"?
         *
         * @param condition
         * @param hint               Optional
         */
        f(condition: Object, hint: String): void;
        /**
         * are the passed expected and actual objects/values deeply
         * equivalent?
         *
         * @param expected
         * @param actual
         * @param hint               Optional
         * @param doNotThrow
         */
        is(expected: Object, actual: Object, hint: String, doNotThrow: any): void;
        /**
         * are the passed notexpected and actual objects/values deeply
         * not equivalent?
         *
         * @param notExpected
         * @param actual
         * @param hint               Optional
         */
        isNot(notExpected: Object, actual: Object, hint: String): void;
        /**
         * halt test run. Can be resumed.
         *
         */
        pause(): void;
        /**
         *
         * @param a1
         * @param a2
         * @param a3
         * @param a4
         * @param a5
         */
        register(a1: any, a2: any, a3: any, a4: any, a5: any): void;
        /**
         * Deprecated.    Won't work unless you manually load dojox.testing.DocTest, and likely not even then.
         * Gets all the doctests from the given module and register each of them as a single test case here.
         *
         * @param module dojox/dgauges/components/utils
         */
        registerDocTests(module: any): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: any[], setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: Function, setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: Object, setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: any[], type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: Object, type: String): void;
        /**
         * Deprecated.  Use doh.register(group, ns) instead
         *
         * @param group
         * @param ns
         */
        registerTestNs(group: String, ns: Object): void;
        /**
         * Deprecated.  Use doh.register(group/type, testArr) instead
         *
         * @param group
         * @param testArr
         * @param type
         */
        registerTests(group: String, testArr: any[], type: String): void;
        /**
         * Adds a test type and associates a function used to initialize each test of the given type
         *
         * @param name The name of the type.
         * @param initProc Type specific test initializer; called after the test object is created.
         */
        registerTestType(name: String, initProc: Function): void;
        /**
         *
         */
        run(): void;
        /**
         * runs the specified test group
         *
         * @param groupName
         * @param idx
         */
        runGroup(groupName: String, idx: number): void;
        /**
         *
         */
        runOnLoad(): void;
        /**
         *
         */
        showLogPage(): void;
        /**
         *
         */
        showPerfTestsPage(): void;
        /**
         *
         */
        showTestPage(): void;
        /**
         * is the passed item "truthy"?
         *
         * @param condition
         * @param hint               Optional
         */
        t(condition: Object, hint: String): void;
        /**
         *
         */
        togglePaused(): void;
        /**
         *
         */
        toggleRunAll(): void;
    }
    module _browserRunner {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/_browserRunner._groups.html
         *
         *
         */
        interface _groups {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/_browserRunner._testTypes.html
         *
         *
         */
        interface _testTypes {
            /**
             *
             * @param group
             * @param tObj
             * @param type
             */
            perf(group: any, tObj: any, type: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/_browserRunner.robot.html
         *
         *
         */
        interface robot {
            /**
             *
             */
            doc: Object;
            /**
             *
             */
            mouseWheelSize: number;
            /**
             *
             */
            window: Object;
            /**
             * Opens the application at the specified URL for testing, redirecting dojo to point to the application
             * environment instead of the test environment.
             *
             * @param url URL to open. Any of the test's dojo.doc calls (e.g. dojo.byId()), and any dijit.registry calls(e.g. dijit.byId()) will point to elements and widgets inside this application.
             */
            initRobot(url: String): void;
            /**
             * Holds down a single key, like SHIFT or 'a'.
             * Holds down a single key, like SHIFT or 'a'.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to hold downWarning: holding down a shifted key, like 'A', can have unpredictable results.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            keyDown(charOrCode: number, delay: number): void;
            /**
             * Types a key combination, like SHIFT-TAB.
             * Types a key combination, like SHIFT-TAB.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to press
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param modifiers JSON object that represents all of the modifier keys being pressed.It takes the following Boolean attributes:shiftaltctrlmeta
             * @param asynchronous If true, the delay happens asynchronously and immediately, outside of the browser's JavaScript thread and any previous calls.This is useful for interacting with the browser's modal dialogs.
             */
            keyPress(charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean): void;
            /**
             * Releases a single key, like SHIFT or 'a'.
             * Releases a single key, like SHIFT or 'a'.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to releaseWarning: releasing a shifted key, like 'A', can have unpredictable results.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            keyUp(charOrCode: number, delay: number): void;
            /**
             *
             */
            killRobot(): void;
            /**
             * Convenience function to do a press/release.
             * See robot.mousePress for more info.
             * Convenience function to do a press/release.
             * See robot.mousePress for more info.
             *
             * @param buttons
             * @param delay               Optional
             */
            mouseClick(buttons: Object, delay: number): void;
            /**
             * Moves the mouse to the specified x,y offset relative to the viewport.
             *
             * @param x x offset relative to the viewport, in pixels, to move the mouse.
             * @param y y offset relative to the viewport, in pixels, to move the mouse.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalApproximate time Robot will spend moving the mouseThe default is 100ms. This also affects how many mousemove events willbe generated, which is the log of the duration.
             * @param absolute Boolean indicating whether the x and y values are absolute coordinates.If false, then mouseMove expects that the x,y will be relative to the window. (clientX/Y)If true, then mouseMove expects that the x,y will be absolute. (pageX/Y)
             */
            mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: String, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: Function, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Move the mouse from the current position to the specified point.
             * Delays reading contents point until queued command starts running.
             * See mouseMove() for details.
             *
             * @param point x, y position relative to viewport, or if absolute == true, to document
             * @param delay               Optional
             * @param duration               Optional
             * @param absolute
             */
            mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void;
            /**
             * Presses mouse buttons.
             * Presses the mouse buttons you pass as true.
             * Example: to press the left mouse button, pass {left: true}.
             * Mouse buttons you don't specify keep their previous pressed state.
             *
             * @param buttons JSON object that represents all of the mouse buttons being pressed.It takes the following Boolean attributes:leftmiddleright
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            mousePress(buttons: Object, delay: number): void;
            /**
             * Releases mouse buttons.
             * Releases the mouse buttons you pass as true.
             * Example: to release the left mouse button, pass {left: true}.
             * Mouse buttons you don't specify keep their previous pressed state.
             * See robot.mousePress for more info.
             *
             * @param buttons
             * @param delay               Optional
             */
            mouseRelease(buttons: Object, delay: number): void;
            /**
             * Spins the mouse wheel.
             * Spins the wheel wheelAmt "notches."
             * Negative wheelAmt scrolls up/away from the user.
             * Positive wheelAmt scrolls down/toward the user.
             * Note: this will all happen in one event.
             * Warning: the size of one mouse wheel notch is an OS setting.
             * You can access this size from robot.mouseWheelSize
             *
             * @param wheelAmt Number of notches to spin the wheel.Negative wheelAmt scrolls up/away from the user.Positive wheelAmt scrolls down/toward the user.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:    robot.mouseClick({left: true}, 100) // first call; wait 100ms    robot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalApproximate time Robot will spend moving the mouseBy default, the Robot will wheel the mouse as fast as possible.
             */
            mouseWheel(wheelAmt: number, delay: number, duration: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: String, delay: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: HTMLElement, delay: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: Function, delay: number): void;
            /**
             * Defer an action by adding it to the robot's incrementally delayed queue of actions to execute.
             *
             * @param f A function containing actions you want to defer.  It can return a Promiseto delay further actions.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalDelay to wait after firing.
             */
            sequence(f: Function, delay: number, duration: number): void;
            /**
             * Set clipboard content.
             * Set data as clipboard content, overriding anything already there. The
             * data will be put to the clipboard using the given format.
             *
             * @param data New clipboard content to set
             * @param format               OptionalSet this to "text/html" to put richtext to the clipboard.Otherwise, data is treated as plaintext. By default, plaintextis used.
             */
            setClipboard(data: String, format: String): void;
            /**
             *
             */
            startRobot(): any;
            /**
             * Types a string of characters in order, or types a dojo.keys.* constant.
             * Types a string of characters in order, or types a dojo.keys.* constant.
             *
             * @param chars String of characters to type, or a dojo.keys.* constant
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalTime, in milliseconds, to spend pressing all of the keys.The default is (string length)*50 ms.
             */
            typeKeys(chars: String, delay: number, duration: number): void;
            /**
             * Types a string of characters in order, or types a dojo.keys.* constant.
             * Types a string of characters in order, or types a dojo.keys.* constant.
             *
             * @param chars String of characters to type, or a dojo.keys.* constant
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalTime, in milliseconds, to spend pressing all of the keys.The default is (string length)*50 ms.
             */
            typeKeys(chars: number, delay: number, duration: number): void;
            /**
             * Notifies DOH that the doh.robot is about to make a page change in the application it is driving,
             * returning a doh.Deferred object the user should return in their runTest function as part of a DOH test.
             *
             * @param submitActions The doh.robot will execute the actions the test passes into the submitActions argument (like clicking the submit button),expecting these actions to create a page change (like a form submit).After these actions execute and the resulting page loads, the next test will start.
             */
            waitForPageToLoad(submitActions: Function): any;
        }
    }

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/doh/main.html
     *
     * Functions for registering and running automated tests.
     *
     */
    interface main {
        /**
         *
         */
        debug: Object;
        /**
         *
         */
        error: Object;
        /**
         *
         */
        isBrowser: boolean;
        /**
         *
         */
        registerUrl: Object;
        /**
         *
         */
        robot: Object;
        /**
         * are the passed expected and actual objects/values deeply
         * equivalent?
         *
         * @param expected
         * @param actual
         * @param hint               Optional
         * @param doNotThrow
         */
        assertEqual(expected: Object, actual: Object, hint: String, doNotThrow: any): void;
        /**
         * Test for a certain error to be thrown by the given function.
         *
         * @param expectedError
         * @param scope
         * @param functionName
         * @param args
         * @param hint               Optional
         */
        assertError(expectedError: Object, scope: Object, functionName: String, args: any[], hint: String): void;
        /**
         * is the passed item "falsey"?
         *
         * @param condition
         * @param hint               Optional
         */
        assertFalse(condition: Object, hint: String): void;
        /**
         * are the passed notexpected and actual objects/values deeply
         * not equivalent?
         *
         * @param notExpected
         * @param actual
         * @param hint               Optional
         */
        assertNotEqual(notExpected: Object, actual: Object, hint: String): void;
        /**
         * is the passed item "truthy"?
         *
         * @param condition
         * @param hint               Optional
         */
        assertTrue(condition: Object, hint: String): void;
        /**
         *
         * @param canceller
         */
        Deferred(canceller: any): void;
        /**
         * Test for a certain error to be thrown by the given function.
         *
         * @param expectedError
         * @param scope
         * @param functionName
         * @param args
         * @param hint               Optional
         */
        e(expectedError: Object, scope: Object, functionName: String, args: any[], hint: String): void;
        /**
         * is the passed item "falsey"?
         *
         * @param condition
         * @param hint               Optional
         */
        f(condition: Object, hint: String): void;
        /**
         * are the passed expected and actual objects/values deeply
         * equivalent?
         *
         * @param expected
         * @param actual
         * @param hint               Optional
         * @param doNotThrow
         */
        is(expected: Object, actual: Object, hint: String, doNotThrow: any): void;
        /**
         * are the passed notexpected and actual objects/values deeply
         * not equivalent?
         *
         * @param notExpected
         * @param actual
         * @param hint               Optional
         */
        isNot(notExpected: Object, actual: Object, hint: String): void;
        /**
         * halt test run. Can be resumed.
         *
         */
        pause(): void;
        /**
         *
         * @param a1
         * @param a2
         * @param a3
         * @param a4
         * @param a5
         */
        register(a1: any, a2: any, a3: any, a4: any, a5: any): void;
        /**
         * Deprecated.    Won't work unless you manually load dojox.testing.DocTest, and likely not even then.
         * Gets all the doctests from the given module and register each of them as a single test case here.
         *
         * @param module dojox/dgauges/components/utils
         */
        registerDocTests(module: any): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: any[], setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: Function, setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: Object, setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: any[], type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: Object, type: String): void;
        /**
         * Deprecated.  Use doh.register(group, ns) instead
         *
         * @param group
         * @param ns
         */
        registerTestNs(group: String, ns: Object): void;
        /**
         * Deprecated.  Use doh.register(group/type, testArr) instead
         *
         * @param group
         * @param testArr
         * @param type
         */
        registerTests(group: String, testArr: any[], type: String): void;
        /**
         * Adds a test type and associates a function used to initialize each test of the given type
         *
         * @param name The name of the type.
         * @param initProc Type specific test initializer; called after the test object is created.
         */
        registerTestType(name: String, initProc: Function): void;
        /**
         *
         */
        run(): void;
        /**
         * runs the specified test group
         *
         * @param groupName
         * @param idx
         */
        runGroup(groupName: String, idx: number): void;
        /**
         *
         */
        runOnLoad(): void;
        /**
         *
         */
        showLogPage(): void;
        /**
         *
         */
        showPerfTestsPage(): void;
        /**
         *
         */
        showTestPage(): void;
        /**
         * is the passed item "truthy"?
         *
         * @param condition
         * @param hint               Optional
         */
        t(condition: Object, hint: String): void;
        /**
         *
         */
        togglePaused(): void;
        /**
         *
         */
        toggleRunAll(): void;
    }
    namespace main {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/main._groups.html
         *
         *
         */
        interface _groups {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/main._testTypes.html
         *
         *
         */
        interface _testTypes {
            /**
             *
             * @param group
             * @param tObj
             * @param type
             */
            perf(group: any, tObj: any, type: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/main.robot.html
         *
         *
         */
        interface robot {
            /**
             *
             */
            doc: Object;
            /**
             *
             */
            mouseWheelSize: number;
            /**
             *
             */
            window: Object;
            /**
             * Opens the application at the specified URL for testing, redirecting dojo to point to the application
             * environment instead of the test environment.
             *
             * @param url URL to open. Any of the test's dojo.doc calls (e.g. dojo.byId()), and any dijit.registry calls(e.g. dijit.byId()) will point to elements and widgets inside this application.
             */
            initRobot(url: String): void;
            /**
             * Holds down a single key, like SHIFT or 'a'.
             * Holds down a single key, like SHIFT or 'a'.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to hold downWarning: holding down a shifted key, like 'A', can have unpredictable results.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            keyDown(charOrCode: number, delay: number): void;
            /**
             * Types a key combination, like SHIFT-TAB.
             * Types a key combination, like SHIFT-TAB.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to press
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param modifiers JSON object that represents all of the modifier keys being pressed.It takes the following Boolean attributes:shiftaltctrlmeta
             * @param asynchronous If true, the delay happens asynchronously and immediately, outside of the browser's JavaScript thread and any previous calls.This is useful for interacting with the browser's modal dialogs.
             */
            keyPress(charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean): void;
            /**
             * Releases a single key, like SHIFT or 'a'.
             * Releases a single key, like SHIFT or 'a'.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to releaseWarning: releasing a shifted key, like 'A', can have unpredictable results.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            keyUp(charOrCode: number, delay: number): void;
            /**
             *
             */
            killRobot(): void;
            /**
             * Convenience function to do a press/release.
             * See robot.mousePress for more info.
             * Convenience function to do a press/release.
             * See robot.mousePress for more info.
             *
             * @param buttons
             * @param delay               Optional
             */
            mouseClick(buttons: Object, delay: number): void;
            /**
             * Moves the mouse to the specified x,y offset relative to the viewport.
             *
             * @param x x offset relative to the viewport, in pixels, to move the mouse.
             * @param y y offset relative to the viewport, in pixels, to move the mouse.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalApproximate time Robot will spend moving the mouseThe default is 100ms. This also affects how many mousemove events willbe generated, which is the log of the duration.
             * @param absolute Boolean indicating whether the x and y values are absolute coordinates.If false, then mouseMove expects that the x,y will be relative to the window. (clientX/Y)If true, then mouseMove expects that the x,y will be absolute. (pageX/Y)
             */
            mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: String, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: Function, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Move the mouse from the current position to the specified point.
             * Delays reading contents point until queued command starts running.
             * See mouseMove() for details.
             *
             * @param point x, y position relative to viewport, or if absolute == true, to document
             * @param delay               Optional
             * @param duration               Optional
             * @param absolute
             */
            mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void;
            /**
             * Presses mouse buttons.
             * Presses the mouse buttons you pass as true.
             * Example: to press the left mouse button, pass {left: true}.
             * Mouse buttons you don't specify keep their previous pressed state.
             *
             * @param buttons JSON object that represents all of the mouse buttons being pressed.It takes the following Boolean attributes:leftmiddleright
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            mousePress(buttons: Object, delay: number): void;
            /**
             * Releases mouse buttons.
             * Releases the mouse buttons you pass as true.
             * Example: to release the left mouse button, pass {left: true}.
             * Mouse buttons you don't specify keep their previous pressed state.
             * See robot.mousePress for more info.
             *
             * @param buttons
             * @param delay               Optional
             */
            mouseRelease(buttons: Object, delay: number): void;
            /**
             * Spins the mouse wheel.
             * Spins the wheel wheelAmt "notches."
             * Negative wheelAmt scrolls up/away from the user.
             * Positive wheelAmt scrolls down/toward the user.
             * Note: this will all happen in one event.
             * Warning: the size of one mouse wheel notch is an OS setting.
             * You can access this size from robot.mouseWheelSize
             *
             * @param wheelAmt Number of notches to spin the wheel.Negative wheelAmt scrolls up/away from the user.Positive wheelAmt scrolls down/toward the user.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:    robot.mouseClick({left: true}, 100) // first call; wait 100ms    robot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalApproximate time Robot will spend moving the mouseBy default, the Robot will wheel the mouse as fast as possible.
             */
            mouseWheel(wheelAmt: number, delay: number, duration: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: String, delay: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: HTMLElement, delay: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: Function, delay: number): void;
            /**
             * Defer an action by adding it to the robot's incrementally delayed queue of actions to execute.
             *
             * @param f A function containing actions you want to defer.  It can return a Promiseto delay further actions.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalDelay to wait after firing.
             */
            sequence(f: Function, delay: number, duration: number): void;
            /**
             * Set clipboard content.
             * Set data as clipboard content, overriding anything already there. The
             * data will be put to the clipboard using the given format.
             *
             * @param data New clipboard content to set
             * @param format               OptionalSet this to "text/html" to put richtext to the clipboard.Otherwise, data is treated as plaintext. By default, plaintextis used.
             */
            setClipboard(data: String, format: String): void;
            /**
             *
             */
            startRobot(): any;
            /**
             * Types a string of characters in order, or types a dojo.keys.* constant.
             * Types a string of characters in order, or types a dojo.keys.* constant.
             *
             * @param chars String of characters to type, or a dojo.keys.* constant
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalTime, in milliseconds, to spend pressing all of the keys.The default is (string length)*50 ms.
             */
            typeKeys(chars: String, delay: number, duration: number): void;
            /**
             * Types a string of characters in order, or types a dojo.keys.* constant.
             * Types a string of characters in order, or types a dojo.keys.* constant.
             *
             * @param chars String of characters to type, or a dojo.keys.* constant
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalTime, in milliseconds, to spend pressing all of the keys.The default is (string length)*50 ms.
             */
            typeKeys(chars: number, delay: number, duration: number): void;
            /**
             * Notifies DOH that the doh.robot is about to make a page change in the application it is driving,
             * returning a doh.Deferred object the user should return in their runTest function as part of a DOH test.
             *
             * @param submitActions The doh.robot will execute the actions the test passes into the submitActions argument (like clicking the submit button),expecting these actions to create a page change (like a form submit).After these actions execute and the resulting page loads, the next test will start.
             */
            waitForPageToLoad(submitActions: Function): any;
        }
    }

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/doh/robot.html
     *
     *
     */
    interface robot {
        /**
         *
         */
        doc: Object;
        /**
         *
         */
        mouseWheelSize: number;
        /**
         *
         */
        window: Object;
        /**
         * Opens the application at the specified URL for testing, redirecting dojo to point to the application
         * environment instead of the test environment.
         *
         * @param url URL to open. Any of the test's dojo.doc calls (e.g. dojo.byId()), and any dijit.registry calls(e.g. dijit.byId()) will point to elements and widgets inside this application.
         */
        initRobot(url: String): void;
        /**
         * Holds down a single key, like SHIFT or 'a'.
         * Holds down a single key, like SHIFT or 'a'.
         *
         * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to hold downWarning: holding down a shifted key, like 'A', can have unpredictable results.
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         */
        keyDown(charOrCode: number, delay: number): void;
        /**
         * Types a key combination, like SHIFT-TAB.
         * Types a key combination, like SHIFT-TAB.
         *
         * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to press
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param modifiers JSON object that represents all of the modifier keys being pressed.It takes the following Boolean attributes:shiftaltctrlmeta
         * @param asynchronous If true, the delay happens asynchronously and immediately, outside of the browser's JavaScript thread and any previous calls.This is useful for interacting with the browser's modal dialogs.
         */
        keyPress(charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean): void;
        /**
         * Releases a single key, like SHIFT or 'a'.
         * Releases a single key, like SHIFT or 'a'.
         *
         * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to releaseWarning: releasing a shifted key, like 'A', can have unpredictable results.
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         */
        keyUp(charOrCode: number, delay: number): void;
        /**
         *
         */
        killRobot(): void;
        /**
         * Convenience function to do a press/release.
         * See robot.mousePress for more info.
         * Convenience function to do a press/release.
         * See robot.mousePress for more info.
         *
         * @param buttons
         * @param delay               Optional
         */
        mouseClick(buttons: Object, delay: number): void;
        /**
         * Moves the mouse to the specified x,y offset relative to the viewport.
         *
         * @param x x offset relative to the viewport, in pixels, to move the mouse.
         * @param y y offset relative to the viewport, in pixels, to move the mouse.
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param duration               OptionalApproximate time Robot will spend moving the mouseThe default is 100ms. This also affects how many mousemove events willbe generated, which is the log of the duration.
         * @param absolute Boolean indicating whether the x and y values are absolute coordinates.If false, then mouseMove expects that the x,y will be relative to the window. (clientX/Y)If true, then mouseMove expects that the x,y will be absolute. (pageX/Y)
         */
        mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void;
        /**
         * Moves the mouse over the specified node at the specified relative x,y offset.
         * Moves the mouse over the specified node at the specified relative x,y offset.
         * If you do not specify an offset, mouseMove will default to move to the middle of the node.
         * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
         *
         * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
         * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
         * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
         * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
         */
        mouseMoveAt(node: String, delay: number, duration: number, offsetX: number, offsetY: number): void;
        /**
         * Moves the mouse over the specified node at the specified relative x,y offset.
         * Moves the mouse over the specified node at the specified relative x,y offset.
         * If you do not specify an offset, mouseMove will default to move to the middle of the node.
         * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
         *
         * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
         * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
         * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
         * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
         */
        mouseMoveAt(node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number): void;
        /**
         * Moves the mouse over the specified node at the specified relative x,y offset.
         * Moves the mouse over the specified node at the specified relative x,y offset.
         * If you do not specify an offset, mouseMove will default to move to the middle of the node.
         * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
         *
         * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
         * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
         * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
         * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
         */
        mouseMoveAt(node: Function, delay: number, duration: number, offsetX: number, offsetY: number): void;
        /**
         * Move the mouse from the current position to the specified point.
         * Delays reading contents point until queued command starts running.
         * See mouseMove() for details.
         *
         * @param point x, y position relative to viewport, or if absolute == true, to document
         * @param delay               Optional
         * @param duration               Optional
         * @param absolute
         */
        mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void;
        /**
         * Presses mouse buttons.
         * Presses the mouse buttons you pass as true.
         * Example: to press the left mouse button, pass {left: true}.
         * Mouse buttons you don't specify keep their previous pressed state.
         *
         * @param buttons JSON object that represents all of the mouse buttons being pressed.It takes the following Boolean attributes:leftmiddleright
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         */
        mousePress(buttons: Object, delay: number): void;
        /**
         * Releases mouse buttons.
         * Releases the mouse buttons you pass as true.
         * Example: to release the left mouse button, pass {left: true}.
         * Mouse buttons you don't specify keep their previous pressed state.
         * See robot.mousePress for more info.
         *
         * @param buttons
         * @param delay               Optional
         */
        mouseRelease(buttons: Object, delay: number): void;
        /**
         * Spins the mouse wheel.
         * Spins the wheel wheelAmt "notches."
         * Negative wheelAmt scrolls up/away from the user.
         * Positive wheelAmt scrolls down/toward the user.
         * Note: this will all happen in one event.
         * Warning: the size of one mouse wheel notch is an OS setting.
         * You can access this size from robot.mouseWheelSize
         *
         * @param wheelAmt Number of notches to spin the wheel.Negative wheelAmt scrolls up/away from the user.Positive wheelAmt scrolls down/toward the user.
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:    robot.mouseClick({left: true}, 100) // first call; wait 100ms    robot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param duration               OptionalApproximate time Robot will spend moving the mouseBy default, the Robot will wheel the mouse as fast as possible.
         */
        mouseWheel(wheelAmt: number, delay: number, duration: number): void;
        /**
         * Scroll the passed node into view, if it is not.
         *
         * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
         * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
         */
        scrollIntoView(node: String, delay: number): void;
        /**
         * Scroll the passed node into view, if it is not.
         *
         * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
         * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
         */
        scrollIntoView(node: HTMLElement, delay: number): void;
        /**
         * Scroll the passed node into view, if it is not.
         *
         * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
         * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
         */
        scrollIntoView(node: Function, delay: number): void;
        /**
         * Defer an action by adding it to the robot's incrementally delayed queue of actions to execute.
         *
         * @param f A function containing actions you want to defer.  It can return a Promiseto delay further actions.
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param duration               OptionalDelay to wait after firing.
         */
        sequence(f: Function, delay: number, duration: number): void;
        /**
         * Set clipboard content.
         * Set data as clipboard content, overriding anything already there. The
         * data will be put to the clipboard using the given format.
         *
         * @param data New clipboard content to set
         * @param format               OptionalSet this to "text/html" to put richtext to the clipboard.Otherwise, data is treated as plaintext. By default, plaintextis used.
         */
        setClipboard(data: String, format: String): void;
        /**
         *
         */
        startRobot(): any;
        /**
         * Types a string of characters in order, or types a dojo.keys.* constant.
         * Types a string of characters in order, or types a dojo.keys.* constant.
         *
         * @param chars String of characters to type, or a dojo.keys.* constant
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param duration               OptionalTime, in milliseconds, to spend pressing all of the keys.The default is (string length)*50 ms.
         */
        typeKeys(chars: String, delay: number, duration: number): void;
        /**
         * Types a string of characters in order, or types a dojo.keys.* constant.
         * Types a string of characters in order, or types a dojo.keys.* constant.
         *
         * @param chars String of characters to type, or a dojo.keys.* constant
         * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
         * @param duration               OptionalTime, in milliseconds, to spend pressing all of the keys.The default is (string length)*50 ms.
         */
        typeKeys(chars: number, delay: number, duration: number): void;
        /**
         * Notifies DOH that the doh.robot is about to make a page change in the application it is driving,
         * returning a doh.Deferred object the user should return in their runTest function as part of a DOH test.
         *
         * @param submitActions The doh.robot will execute the actions the test passes into the submitActions argument (like clicking the submit button),expecting these actions to create a page change (like a form submit).After these actions execute and the resulting page loads, the next test will start.
         */
        waitForPageToLoad(submitActions: Function): any;
    }
    namespace robot {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/robot._runsemaphore.html
         *
         *
         */
        interface _runsemaphore {
            /**
             *
             */
            lock: any[];
            /**
             *
             */
            unlock(): any;
        }
    }

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/doh/runner.html
     *
     * Functions for registering and running automated tests.
     *
     */
    interface runner {
        /**
         *
         */
        debug: Object;
        /**
         *
         */
        error: Object;
        /**
         *
         */
        isBrowser: boolean;
        /**
         *
         */
        registerUrl: Object;
        /**
         *
         */
        robot: Object;
        /**
         * are the passed expected and actual objects/values deeply
         * equivalent?
         *
         * @param expected
         * @param actual
         * @param hint               Optional
         * @param doNotThrow
         */
        assertEqual(expected: Object, actual: Object, hint: String, doNotThrow: any): void;
        /**
         * Test for a certain error to be thrown by the given function.
         *
         * @param expectedError
         * @param scope
         * @param functionName
         * @param args
         * @param hint               Optional
         */
        assertError(expectedError: Object, scope: Object, functionName: String, args: any[], hint: String): void;
        /**
         * is the passed item "falsey"?
         *
         * @param condition
         * @param hint               Optional
         */
        assertFalse(condition: Object, hint: String): void;
        /**
         * are the passed notexpected and actual objects/values deeply
         * not equivalent?
         *
         * @param notExpected
         * @param actual
         * @param hint               Optional
         */
        assertNotEqual(notExpected: Object, actual: Object, hint: String): void;
        /**
         * is the passed item "truthy"?
         *
         * @param condition
         * @param hint               Optional
         */
        assertTrue(condition: Object, hint: String): void;
        /**
         *
         * @param canceller
         */
        Deferred(canceller: any): void;
        /**
         * Test for a certain error to be thrown by the given function.
         *
         * @param expectedError
         * @param scope
         * @param functionName
         * @param args
         * @param hint               Optional
         */
        e(expectedError: Object, scope: Object, functionName: String, args: any[], hint: String): void;
        /**
         * is the passed item "falsey"?
         *
         * @param condition
         * @param hint               Optional
         */
        f(condition: Object, hint: String): void;
        /**
         * are the passed expected and actual objects/values deeply
         * equivalent?
         *
         * @param expected
         * @param actual
         * @param hint               Optional
         * @param doNotThrow
         */
        is(expected: Object, actual: Object, hint: String, doNotThrow: any): void;
        /**
         * are the passed notexpected and actual objects/values deeply
         * not equivalent?
         *
         * @param notExpected
         * @param actual
         * @param hint               Optional
         */
        isNot(notExpected: Object, actual: Object, hint: String): void;
        /**
         * halt test run. Can be resumed.
         *
         */
        pause(): void;
        /**
         *
         * @param a1
         * @param a2
         * @param a3
         * @param a4
         * @param a5
         */
        register(a1: any, a2: any, a3: any, a4: any, a5: any): void;
        /**
         * Deprecated.    Won't work unless you manually load dojox.testing.DocTest, and likely not even then.
         * Gets all the doctests from the given module and register each of them as a single test case here.
         *
         * @param module dojox/dgauges/components/utils
         */
        registerDocTests(module: any): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: any[], setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: Function, setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, tests, setUp, tearDown) instead
         *
         * @param group
         * @param tests
         * @param setUp
         * @param tearDown
         * @param type
         */
        registerGroup(group: String, tests: Object, setUp: Function, tearDown: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: any[], type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: Function, type: String): void;
        /**
         * Deprecated.  Use doh.register(group/type, test) instead
         *
         * @param group
         * @param test
         * @param type
         */
        registerTest(group: String, test: Object, type: String): void;
        /**
         * Deprecated.  Use doh.register(group, ns) instead
         *
         * @param group
         * @param ns
         */
        registerTestNs(group: String, ns: Object): void;
        /**
         * Deprecated.  Use doh.register(group/type, testArr) instead
         *
         * @param group
         * @param testArr
         * @param type
         */
        registerTests(group: String, testArr: any[], type: String): void;
        /**
         * Adds a test type and associates a function used to initialize each test of the given type
         *
         * @param name The name of the type.
         * @param initProc Type specific test initializer; called after the test object is created.
         */
        registerTestType(name: String, initProc: Function): void;
        /**
         *
         */
        run(): void;
        /**
         * runs the specified test group
         *
         * @param groupName
         * @param idx
         */
        runGroup(groupName: String, idx: number): void;
        /**
         *
         */
        runOnLoad(): void;
        /**
         *
         */
        showLogPage(): void;
        /**
         *
         */
        showPerfTestsPage(): void;
        /**
         *
         */
        showTestPage(): void;
        /**
         * is the passed item "truthy"?
         *
         * @param condition
         * @param hint               Optional
         */
        t(condition: Object, hint: String): void;
        /**
         *
         */
        togglePaused(): void;
        /**
         *
         */
        toggleRunAll(): void;
    }
    namespace runner {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/runner._groups.html
         *
         *
         */
        interface _groups {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/runner._testTypes.html
         *
         *
         */
        interface _testTypes {
            /**
             *
             * @param group
             * @param tObj
             * @param type
             */
            perf(group: any, tObj: any, type: any): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/doh/runner.robot.html
         *
         *
         */
        interface robot {
            /**
             *
             */
            doc: Object;
            /**
             *
             */
            mouseWheelSize: number;
            /**
             *
             */
            window: Object;
            /**
             * Opens the application at the specified URL for testing, redirecting dojo to point to the application
             * environment instead of the test environment.
             *
             * @param url URL to open. Any of the test's dojo.doc calls (e.g. dojo.byId()), and any dijit.registry calls(e.g. dijit.byId()) will point to elements and widgets inside this application.
             */
            initRobot(url: String): void;
            /**
             * Holds down a single key, like SHIFT or 'a'.
             * Holds down a single key, like SHIFT or 'a'.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to hold downWarning: holding down a shifted key, like 'A', can have unpredictable results.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            keyDown(charOrCode: number, delay: number): void;
            /**
             * Types a key combination, like SHIFT-TAB.
             * Types a key combination, like SHIFT-TAB.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to press
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param modifiers JSON object that represents all of the modifier keys being pressed.It takes the following Boolean attributes:shiftaltctrlmeta
             * @param asynchronous If true, the delay happens asynchronously and immediately, outside of the browser's JavaScript thread and any previous calls.This is useful for interacting with the browser's modal dialogs.
             */
            keyPress(charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean): void;
            /**
             * Releases a single key, like SHIFT or 'a'.
             * Releases a single key, like SHIFT or 'a'.
             *
             * @param charOrCode char/JS keyCode/dojo.keys.* constant for the key you want to releaseWarning: releasing a shifted key, like 'A', can have unpredictable results.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            keyUp(charOrCode: number, delay: number): void;
            /**
             *
             */
            killRobot(): void;
            /**
             * Convenience function to do a press/release.
             * See robot.mousePress for more info.
             * Convenience function to do a press/release.
             * See robot.mousePress for more info.
             *
             * @param buttons
             * @param delay               Optional
             */
            mouseClick(buttons: Object, delay: number): void;
            /**
             * Moves the mouse to the specified x,y offset relative to the viewport.
             *
             * @param x x offset relative to the viewport, in pixels, to move the mouse.
             * @param y y offset relative to the viewport, in pixels, to move the mouse.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalApproximate time Robot will spend moving the mouseThe default is 100ms. This also affects how many mousemove events willbe generated, which is the log of the duration.
             * @param absolute Boolean indicating whether the x and y values are absolute coordinates.If false, then mouseMove expects that the x,y will be relative to the window. (clientX/Y)If true, then mouseMove expects that the x,y will be absolute. (pageX/Y)
             */
            mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: String, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * Moves the mouse over the specified node at the specified relative x,y offset.
             * If you do not specify an offset, mouseMove will default to move to the middle of the node.
             * Example: to move the mouse over a ComboBox's down arrow node, call doh.mouseMoveAt(dijit.byId('setvaluetest').downArrowNode);
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left:true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration Approximate time Robot will spend moving the mouseThe default is 100ms.
             * @param offsetX x offset relative to the node, in pixels, to move the mouse. The default is half the node's width.
             * @param offsetY y offset relative to the node, in pixels, to move the mouse. The default is half the node's height.
             */
            mouseMoveAt(node: Function, delay: number, duration: number, offsetX: number, offsetY: number): void;
            /**
             * Move the mouse from the current position to the specified point.
             * Delays reading contents point until queued command starts running.
             * See mouseMove() for details.
             *
             * @param point x, y position relative to viewport, or if absolute == true, to document
             * @param delay               Optional
             * @param duration               Optional
             * @param absolute
             */
            mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void;
            /**
             * Presses mouse buttons.
             * Presses the mouse buttons you pass as true.
             * Example: to press the left mouse button, pass {left: true}.
             * Mouse buttons you don't specify keep their previous pressed state.
             *
             * @param buttons JSON object that represents all of the mouse buttons being pressed.It takes the following Boolean attributes:leftmiddleright
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             */
            mousePress(buttons: Object, delay: number): void;
            /**
             * Releases mouse buttons.
             * Releases the mouse buttons you pass as true.
             * Example: to release the left mouse button, pass {left: true}.
             * Mouse buttons you don't specify keep their previous pressed state.
             * See robot.mousePress for more info.
             *
             * @param buttons
             * @param delay               Optional
             */
            mouseRelease(buttons: Object, delay: number): void;
            /**
             * Spins the mouse wheel.
             * Spins the wheel wheelAmt "notches."
             * Negative wheelAmt scrolls up/away from the user.
             * Positive wheelAmt scrolls down/toward the user.
             * Note: this will all happen in one event.
             * Warning: the size of one mouse wheel notch is an OS setting.
             * You can access this size from robot.mouseWheelSize
             *
             * @param wheelAmt Number of notches to spin the wheel.Negative wheelAmt scrolls up/away from the user.Positive wheelAmt scrolls down/toward the user.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:    robot.mouseClick({left: true}, 100) // first call; wait 100ms    robot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalApproximate time Robot will spend moving the mouseBy default, the Robot will wheel the mouse as fast as possible.
             */
            mouseWheel(wheelAmt: number, delay: number, duration: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: String, delay: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: HTMLElement, delay: number): void;
            /**
             * Scroll the passed node into view, if it is not.
             *
             * @param node The id of the node, or the node itself, to move the mouse to.If you pass an id or a function that returns a node, the node will not be evaluated until the movement executes.This is useful if you need to move the mouse to an node that is not yet present.
             * @param delay Delay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.
             */
            scrollIntoView(node: Function, delay: number): void;
            /**
             * Defer an action by adding it to the robot's incrementally delayed queue of actions to execute.
             *
             * @param f A function containing actions you want to defer.  It can return a Promiseto delay further actions.
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalDelay to wait after firing.
             */
            sequence(f: Function, delay: number, duration: number): void;
            /**
             * Set clipboard content.
             * Set data as clipboard content, overriding anything already there. The
             * data will be put to the clipboard using the given format.
             *
             * @param data New clipboard content to set
             * @param format               OptionalSet this to "text/html" to put richtext to the clipboard.Otherwise, data is treated as plaintext. By default, plaintextis used.
             */
            setClipboard(data: String, format: String): void;
            /**
             *
             */
            startRobot(): any;
            /**
             * Types a string of characters in order, or types a dojo.keys.* constant.
             * Types a string of characters in order, or types a dojo.keys.* constant.
             *
             * @param chars String of characters to type, or a dojo.keys.* constant
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalTime, in milliseconds, to spend pressing all of the keys.The default is (string length)*50 ms.
             */
            typeKeys(chars: String, delay: number, duration: number): void;
            /**
             * Types a string of characters in order, or types a dojo.keys.* constant.
             * Types a string of characters in order, or types a dojo.keys.* constant.
             *
             * @param chars String of characters to type, or a dojo.keys.* constant
             * @param delay               OptionalDelay, in milliseconds, to wait before firing.The delay is a delta with respect to the previous automation call.For example, the following code ends after 600ms:robot.mouseClick({left: true}, 100) // first call; wait 100msrobot.typeKeys("dij", 500) // 500ms AFTER previous call; 600ms in all
             * @param duration               OptionalTime, in milliseconds, to spend pressing all of the keys.The default is (string length)*50 ms.
             */
            typeKeys(chars: number, delay: number, duration: number): void;
            /**
             * Notifies DOH that the doh.robot is about to make a page change in the application it is driving,
             * returning a doh.Deferred object the user should return in their runTest function as part of a DOH test.
             *
             * @param submitActions The doh.robot will execute the actions the test passes into the submitActions argument (like clicking the submit button),expecting these actions to create a page change (like a form submit).After these actions execute and the resulting page loads, the next test will start.
             */
            waitForPageToLoad(submitActions: Function): any;
        }
    }

}

declare module "doh/_nodeRunner" {
    var exp: doh._nodeRunner
    export=exp;
}
declare module "doh/_parseURLargs" {
    var exp: doh._parseURLargs
    export=exp;
}
declare module "doh/_rhinoRunner" {
    var exp: doh._rhinoRunner
    export=exp;
}
declare module "doh/_browserRunner" {
    var exp: doh._browserRunner
    export=exp;
}
declare module "doh/_browserRunner._testTypes" {
    var exp: doh._browserRunner._testTypes
    export=exp;
}
declare module "doh/_browserRunner._groups" {
    var exp: doh._browserRunner._groups
    export=exp;
}
declare module "doh/_browserRunner.robot" {
    var exp: doh._browserRunner.robot
    export=exp;
}
declare module "doh/robot" {
    var exp: doh.robot
    export=exp;
}
declare module "doh/robot._runsemaphore" {
    var exp: doh.robot._runsemaphore
    export=exp;
}
declare module "doh/main" {
    var exp: doh.main
    export=exp;
}
declare module "doh/main._groups" {
    var exp: doh.main._groups
    export=exp;
}
declare module "doh/main._testTypes" {
    var exp: doh.main._testTypes
    export=exp;
}
declare module "doh/main.robot" {
    var exp: doh.main.robot
    export=exp;
}
declare module "doh/runner" {
    var exp: doh.runner
    export=exp;
}
declare module "doh/runner._groups" {
    var exp: doh.runner._groups
    export=exp;
}
declare module "doh/runner._testTypes" {
    var exp: doh.runner._testTypes
    export=exp;
}
declare module "doh/runner.robot" {
    var exp: doh.runner.robot
    export=exp;
}
declare module "doh/plugins/android-webdriver-robot" {
    var exp: doh.plugins.android_webdriver_robot
    export=exp;
}
declare module "doh/plugins/remoteRobot" {
    var exp: doh.plugins.remoteRobot
    export=exp;
}
