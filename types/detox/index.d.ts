// Type definitions for detox 17.14
// Project: https://github.com/wix/detox
// Definitions by: Tareq El-Masri <https://github.com/TareqElMasri>
//                 Steve Chun <https://github.com/stevechun>
//                 Hammad Jutt <https://github.com/hammadj>
//                 pera <https://github.com/santiagofm>
//                 Max Komarychev <https://github.com/maxkomarychev>
//                 Dor Ben Baruch <https://github.com/Dor256>
//                 dkrk <https://github.com/grgr-dkrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare global {
    const device: Detox.Device;
    const detox: Detox.Detox;
    const element: Detox.Element;
    const waitFor: Detox.WaitFor;
    const expect: Detox.Expect<Detox.Expect<Promise<void>>>;
    const by: Detox.Matchers;
    const detoxCircus: Detox.DetoxCircus;

    namespace Detox {
        interface Detox {
            /**
             * The setup phase happens inside detox.init(). This is the phase where detox reads its configuration, starts a server, loads its expection library and starts a simulator
             * @param config
             * @param options
             * @example const config = require('../package.json').detox;
             *
             * before(async () => {
             *      await detox.init(config);
             * });
             */
            init(config: any, options?: DetoxInitOptions): Promise<void>;
            /**
             * Artifacts currently include only logs from the app process before each task
             * @param args
             */
            beforeEach(...args: any[]): Promise<void>;
            /**
             * Artifacts currently include only logs from the app process after each task
             * @param args
             */
            afterEach(...args: any[]): Promise<void>;
            /**
             * The cleanup phase should happen after all the tests have finished. This is the phase where detox-server shuts down.
             * @example after(async () => {
             *  await detox.cleanup();
             * });
             */
            cleanup(): Promise<void>;
            /**
             * Trace a subprocess of your test's runtime such that it would leave traces inside the Timeline artifact, for a later inspection.
             * @param label
             * @param callback
             * @example
             * it('Verify sanity things', async () => {
             *   // Instead of this typical direct call:
             *   // await element(by.id('sanityButton')).tap()
             *   // Use traceCall() as a wrapper:
             *   await detox.traceCall('Navigate to sanity', () =>
             *     element(by.id('sanityButton')).tap());
             * });
             */
            traceCall(label: string, callback: () => void): Promise<void>;
            trace: {
                /**
                 * This is similar to the `traceCall()` API, except that it gives more freedom with respect to when a section's start and ending times are defined, so as to monitor a nontrivial flow.
                 * @param label
                 * @param @optional args
                 * @example
                 * it('Verify sanity things', async () => {
                 *   try {
                 *     detox.trace.startSection('Turn off notifications');
                 *     await element(by.id('gotoNotifications')).tap();
                 *     await element(by.id('notificationsToggle')).tap();
                 *     await device.pressBack();
                 *   } finally {
                 *     detox.trace.endSection('Turn off notifications');
                 *   }
                 * });
                 */
                startSection(label: string, args?: Record<string, any>): void;
                /**
                 * This is similar to the `traceCall()` API, except that it gives more freedom with respect to when a section's start and ending times are defined, so as to monitor a nontrivial flow.
                 * @param label
                 * @param @optional args
                 * @example
                 * it('Verify sanity things', async () => {
                 *   try {
                 *     detox.trace.startSection('Turn off notifications');
                 *     await element(by.id('gotoNotifications')).tap();
                 *     await element(by.id('notificationsToggle')).tap();
                 *     await device.pressBack();
                 *   } finally {
                 *     detox.trace.endSection('Turn off notifications');
                 *   }
                 * });
                 */
                endSection(label: string, args?: Record<string, any>): void;
            };
        }

        // Detox exports all methods from detox global and all of the global constants.
        interface DetoxExport extends Detox {
            device: Device;
            element: Element;
            waitFor: WaitFor;
            expect: Expect<Expect<Promise<void>>>;
            by: Matchers;
        }

        interface Device {
            /**
             * Holds the environment-unique ID of the device - namely, the adb ID on Android (e.g. emulator-5554) and the Mac-global simulator UDID on iOS,
             * as used by simctl (e.g. AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE).
             *
             * The value will be undefined until the device is properly prepared (i.e. in detox.init())
             */
            id: string;
            /**
             * Holds a descriptive name of the device. Example: emulator-5554 (Pixel_API_26)
             * The value will be undefined until the device is properly prepared (i.e. in detox.init()).
             */
            name: string;
            /**
             * Launch the app
             * @param params
             * @example // Terminate the app and launch it again. If set to false, the simulator will try to bring app from background,
             * // if the app isn't running, it will launch a new instance. default is false
             * await device.launchApp({newInstance: true});
             * // Grant or deny runtime permissions for your application.
             * await device.launchApp({permissions: {calendar: 'YES'}});
             * // Mock opening the app from URL to test your app's deep link handling mechanism.
             * await device.launchApp({url: url});
             */
            launchApp(params: DeviceLanchAppParams): Promise<void>;
            /**
             * By default, terminateApp() with no params will terminate the app
             * To terminate another app, specify its bundle id
             * @param bundle
             * @example await device.terminateApp('other.bundle.id');
             */
            terminateApp(bundle?: string): Promise<void>;
            /**
             * Send application to background by bringing com.apple.springboard to the foreground.
             * Combining sendToHome() with launchApp({newInstance: false}) will simulate app coming back from background.
             * @example await device.sendToHome();
             * await device.launchApp({newInstance: false});
             */
            sendToHome(): Promise<void>;
            /**
             * If this is a React Native app, reload the React Native JS bundle. This action is much faster than device.launchApp(), and can be used if you just need to reset your React Native logic.
             * @example await device.reloadReactNative()
             */
            reloadReactNative(): Promise<void>;
            /**
             * By default, installApp() with no params will install the app file defined in the current configuration.
             * To install another app, specify its path
             * @param path
             * @example await device.installApp('path/to/other/app');
             */
            installApp(path?: any): Promise<void>;
            /**
             * By default, uninstallApp() with no params will uninstall the app defined in the current configuration.
             * To uninstall another app, specify its bundle id
             * @param bundle
             * @example await device.installApp('other.bundle.id');
             */
            uninstallApp(bundle?: string): Promise<void>;
            /**
             * Mock opening the app from URL. sourceApp is an optional parameter to specify source application bundle id.
             * @param url
             */
            openURL(url: { url: string; sourceApp?: string }): Promise<void>;
            /**
             * Mock handling of received user notification when app is in foreground.
             * @param params
             */
            sendUserNotification(...params: any[]): Promise<void>;
            /**
             * Mock handling of received user activity when app is in foreground.
             * @param params
             */
            sendUserActivity(...params: any[]): Promise<void>;
            /**
             * Takes "portrait" or "landscape" and rotates the device to the given orientation. Currently only available in the iOS Simulator.
             * @param orientation
             */
            setOrientation(orientation: Orientation): Promise<void>;
            /**
             * Note: setLocation is dependent on fbsimctl. if fbsimctl is not installed, the command will fail, it must be installed. Sets the simulator location to the given latitude and longitude.
             * @param lat
             * @param lon
             * @example await device.setLocation(32.0853, 34.7818);
             */
            setLocation(lat: number, lon: number): Promise<void>;
            /**
             * Disable EarlGrey's network synchronization mechanism on preffered endpoints. Usful if you want to on skip over synchronizing on certain URLs.
             * @param urls
             * @example await device.setURLBlacklist(['.*127.0.0.1.*']);
             */
            setURLBlacklist(urls: string[]): Promise<void>;
            /**
             * Enable EarlGrey's synchronization mechanism (enabled by default). This is being reset on every new instance of the app.
             * @example
             * await device.enableSynchronization();
             */
            enableSynchronization(): Promise<void>;
            /**
             * Disable EarlGrey's synchronization mechanism (enabled by default) This is being reset on every new instance of the app.
             * @example
             * await device.disableSynchronization();
             */
            disableSynchronization(): Promise<void>;
            /**
             * Resets the Simulator to clean state (like the Simulator > Reset Content and Settings... menu item), especially removing previously set permissions.
             * @example
             * await device.resetContentAndSettings();
             */
            resetContentAndSettings(): Promise<void>;
            /**
             * Returns the current device, ios or android.
             * @example
             * if (device.getPlatform() === 'ios') {
             *     await expect(loopSwitch).toHaveValue('1');
             * }
             */
            getPlatform(): 'ios' | 'android';
            /**
             * Takes a screenshot on the device and schedules putting it to the artifacts folder upon completion of the current test.
             * @param text
             * @example
             * await device.takeScreenshot('tap on menu');
             *
             * • If the test passes, the screenshot will be put to <artifacts-location>/✓ Menu items should have Logout/tap on menu.png.
             * • If the test fails, the screenshot will be put to <artifacts-location>/✗ Menu items should have Logout/tap on menu.png.
             *
             * > NOTE: At the moment, taking screenshots on-demand in --take-screenshots failing mode is not yet implemented.
             */
            takeScreenshot(name: string): Promise<void>;
            /**
             * Simulate shake (iOS Only)
             */
            shake(): Promise<void>;
            /**
             * Toggles device enrollment in biometric auth (TouchID or FaceID) (iOS Only)
             * @example
             * await device.setBiometricEnrollment(true);
             * // or
             * await device.setBiometricEnrollment(false);
             */
            setBiometricEnrollment(enabled: boolean): Promise<void>;
            /**
             * Simulates the success of a face match via FaceID (iOS Only)
             */
            matchFace(): Promise<void>;
            /**
             * Simulates the failure of a face match via FaceID (iOS Only)
             */
            unmatchFace(): Promise<void>;
            /**
             * Simulates the success of a finger match via TouchID (iOS Only)
             */
            matchFinger(): Promise<void>;
            /**
             * Simulates the failure of a finger match via TouchID (iOS Only)
             */
            unmatchFinger(): Promise<void>;
            /**
             * Clears the simulator keychain (iOS Only)
             */
            clearKeychain(): Promise<void>;
            /**
             * Override simulator's status bar.
             */
            setStatusBar(options: StatusBarOptionsOfIOS): Promise<void>;
            /**
             * Resets any override in simulator's status bar.
             */
            resetStatusBar(): Promise<void>;
            /**
             * Reverse a TCP port from the device (guest) back to the host-computer, as typically done with the adb reverse command.
             * The end result would be that all network requests going from the device to the specified port will be forwarded to the computer.
             */
            reverseTcpPort(): Promise<void>;
            /**
             * Clear a reversed TCP-port (e.g. previously set using device.reverseTcpPort()).
             */
            unreverseTcpPort(): Promise<void>;
            /**
             * Simulate press back button (Android Only)
             * @example
             * await device.pressBack();
             */
            pressBack(): Promise<void>;
            /**
             * (Android Only)
             * Exposes UiAutomator's UiDevice API (https://developer.android.com/reference/android/support/test/uiautomator/UiDevice).
             * This is not a part of the official Detox API,
             * it may break and change whenever an update to UiDevice or UiAutomator gradle dependencies ('androidx.test.uiautomator:uiautomator') is introduced.
             * UIDevice's autogenerated code reference: https://github.com/wix/Detox/blob/master/detox/src/android/espressoapi/UIDevice.js
             */
            getUiDevice(): Promise<void>;
        }

        type DetoxAny = Element & Actions<any> & WaitFor;

        interface Element {
            (by: Matchers): DetoxAny;

            /**
             * Choose from multiple elements matching the same matcher using index
             * @param index
             * @example await element(by.text('Product')).atIndex(2);
             */
            atIndex(index: number): DetoxAny;
        }

        interface Matchers {
            (by: Matchers): Matchers;

            /**
             * by.id will match an id that is given to the view via testID prop.
             * @param id
             * @example // In a React Native component add testID like so:
             * <TouchableOpacity testID={'tap_me'}>
             * // Then match with by.id:
             * await element(by.id('tap_me'));
             */
            id(id: string): Matchers;
            /**
             * Find an element by text, useful for text fields, buttons.
             * @param text
             * @example await element(by.text('Tap Me'));
             */
            text(text: string): Matchers;
            /**
             * Find an element by accessibilityLabel on iOS, or by contentDescription on Android.
             * @param label
             * @example await element(by.label('Welcome'));
             */
            label(label: string): Matchers;
            /**
             * Find an element by native view type.
             * @param nativeViewType
             * @example await element(by.type('RCTImageView'));
             */
            type(nativeViewType: string): Matchers;
            /**
             * Find an element with an accessibility trait. (iOS only)
             * @example await element(by.traits(['button']));
             */
            traits(traits: string[]): Matchers;
            /**
             * Find an element by a matcher with a parent matcher
             * @param parentBy
             * @example await element(by.id('Grandson883').withAncestor(by.id('Son883')));
             */
            withAncestor(parentBy: Matchers): Matchers;
            /**
             * Find an element by a matcher with a child matcher
             * @param childBy
             * @example await element(by.id('Son883').withDescendant(by.id('Grandson883')));
             */
            withDescendant(childBy: Matchers): Matchers;
            /**
             * Find an element by multiple matchers
             * @param by
             * @example await element(by.text('Product').and(by.id('product_name'));
             */
            and(by: Matchers): Matchers;
        }
        interface Expect<R> {
            (element: Element): Expect<Promise<void>>;
            /**
             * Expect the view to be at least 75% visible.
             * @example await expect(element(by.id('UniqueId204'))).toBeVisible();
             */
            toBeVisible(): R;
            /**
             * Negate the expectation.
             * @example await expect(element(by.id('UniqueId205'))).not.toBeVisible();
             */
            not: Expect<Promise<void>>;
            /**
             * Expect the view to not be visible.
             * @deprecated Use `.not.toBeVisible()` instead.
             * @example await expect(element(by.id('UniqueId205'))).toBeNotVisible();
             */
            toBeNotVisible(): R;
            /**
             * Expect the view to exist in the UI hierarchy.
             * @example await expect(element(by.id('UniqueId205'))).toExist();
             */
            toExist(): R;
            /**
             * Expect the view to not exist in the UI hierarchy.
             * @deprecated Use `.not.toExist()` instead.
             * @example await expect(element(by.id('RandomJunk959'))).toNotExist();
             */
            toNotExist(): R;
            /**
             * In React Native apps, expect UI component of type <Text> to have text.
             * In native iOS apps, expect UI elements of type UIButton, UILabel, UITextField or UITextViewIn to have inputText with text.
             * @param text
             * @example await expect(element(by.id('UniqueId204'))).toHaveText('I contain some text');
             */
            toHaveText(text: string): R;
            /**
             * It searches by accessibilityLabel on iOS, or by contentDescription on Android.
             * In React Native it can be set for both platforms by defining an accessibilityLabel on the view.
             * @param label
             * @example await expect(element(by.id('UniqueId204'))).toHaveLabel('Done');
             */
            toHaveLabel(label: string): R;
            /**
             * In React Native apps, expect UI component to have testID with that id.
             * In native iOS apps, expect UI element to have accesibilityIdentifier with that id.
             * @param id
             * @example await expect(element(by.text('I contain some text'))).toHaveId('UniqueId204');
             */
            toHaveId(id: string): R;
            /**
             * Expect components like a Switch to have a value ('0' for off, '1' for on).
             * @param value
             * @example await expect(element(by.id('UniqueId533'))).toHaveValue('0');
             */
            toHaveValue(value: '0' | '1'): R;
            /**
             * Expects the slider element (iOS Only)
             * @param normalizedPosition specified normalized position ([0, 1])
             * @param @optional within the provided tolerance ([0, 1])
             * @example
             * await expect(element(by.id('slider'))).toHaveSliderPosition(0.75);
             * await expect(element(by.id('slider'))).toHaveSliderPosition(0.3113, 0.00001);
             */
            toHaveSliderPosition(normalizedPosition: number, tolerance?: number): R;
            /**
             * Expects a toggle-able element (e.g. a Switch or a Check-Box) to be on/checked or off/unchecked. As a reference, in react-native, this is the equivalent switch component.
             * @param value
             */
            toHaveToggleValue(value: boolean): R;
        }
        interface WaitFor {
            /**
             * This API polls using the given expectation continuously until the expectation is met. Use manual synchronization with waitFor only as a last resort.
             * NOTE: Every waitFor call must set a timeout using withTimeout(). Calling waitFor without setting a timeout will do nothing.
             * @example await waitFor(element(by.id('UniqueId336'))).toExist().withTimeout(2000);
             */
            (element: Element): Expect<WaitFor>;
            /**
             * Waits for the condition to be met until the specified time (millis) have elapsed.
             * @param millis number
             * @example await waitFor(element(by.id('UniqueId336'))).toExist().withTimeout(2000);
             */
            withTimeout(millis: number): Promise<void>;
            /**
             * Performs the action repeatedly on the element until an expectation is met
             * @param by
             * @example await waitFor(element(by.text('Text5'))).toBeVisible().whileElement(by.id('ScrollView630')).scroll(50, 'down');
             */
            whileElement(by: Matchers): DetoxAny;
        }
        interface Actions<R> {
            /**
             * Simulate tap on an element
             * @param @optional point a point in the element's coordinate space (valid input: object with x and y numerical values, default is null)
             * @example
             * await element(by.id('tappable')).tap();
             * await element(by.id('tappable')).tap({x:5, y:10});
             */
            tap(point?: Point): Promise<Actions<R>>;
            /**
             * Simulate long press on an element
             * @param @optional duration to press for, in ms (default is 1000)
             * @example
             * await element(by.id('tappable')).longPress();
             * await element(by.id('tappable')).longPress(1500);
             */
            longPress(duration?: number): Promise<Actions<R>>;
            /**
             * Simulate multiple taps on an element.
             * @param times number of times to tap
             * @example
             * await element(by.id('tappable')).multiTap(3);
             */
            multiTap(times: number): Promise<Actions<R>>;
            /**
             * Simulate tap at a specific point on an element.
             * Note: The point coordinates are relative to the matched element and the element size could changes on different devices or even when changing the device font size.
             * @deprecated Use .tap({x, y}) instead.
             * @param point
             * @example
             * await element(by.id('tappable')).tapAtPoint({ x:5, y:10 });
             */
            tapAtPoint(point: Point): Promise<Actions<R>>;
            /**
             * Use the builtin keyboard to type text into a text field.
             * @param text
             * @example
             * await element(by.id('textField')).typeText('passcode');
             */
            typeText(text: string): Promise<Actions<R>>;
            /**
             * Paste text into a text field.
             * @param text
             * @example
             * await element(by.id('textField')).replaceText('passcode again');
             */
            replaceText(text: string): Promise<Actions<R>>;
            /**
             * Clear text from a text field.
             * @example
             * await element(by.id('textField')).clearText();
             */
            clearText(): Promise<Actions<R>>;
            /**
             * Taps the backspace key on the built-in keyboard.
             * @example
             * await element(by.id('textField')).tapBackspaceKey();
             */
            tapBackspaceKey(): Promise<Actions<R>>;
            /**
             * Taps the return key on the built-in keyboard.
             * @example
             * await element(by.id('textField')).tapReturnKey();
             */
            tapReturnKey(): Promise<Actions<R>>;
            /**
             * Scrolls a given amount of pixels in the provided direction, starting from the provided start positions.
             * @param offset - the offset to scroll, in points
             * @param direction - left/right/up/down
             * @param @optional startPositionX - the X starting scroll position, in percentage; valid input: `[0.0, 1.0]`, `NaN`; default: `NaN`—choose the best value automatically
             * @param @optional startPositionY - the Y starting scroll position, in percentage; valid input: `[0.0, 1.0]`, `NaN`; default: `NaN`—choose the best value automatically
             * @example
             * await element(by.id('scrollView')).scroll(100, 'down', NaN, 0.85);
             * await element(by.id('scrollView')).scroll(100, 'up');
             */
            scroll(
                offset: number,
                direction: Direction,
                startPositionX?: number,
                startPositionY?: number,
            ): Promise<Actions<R>>;
            /**
             * Scroll to edge.
             * @param edge
             * @example
             * await element(by.id('scrollView')).scrollTo('bottom');
             * await element(by.id('scrollView')).scrollTo('top');
             */
            scrollTo(edge: ScrollDirection): Promise<Actions<R>>;
            /**
             * Swipes in the provided direction at the provided speed, started from percentage.
             * @param direction
             * @param speed default: `fast`
             * @param @optional normalizedOffset swipe amount relative to the screen width/height (a number between 0.0 and 1.0, default is NaN — choose an optimal value automatically)
             * @param @optional normalizedStartingPointX X coordinate of swipe starting point, relative to the view width; valid input: `[0.0, 1.0]`
             * @param @optional normalizedStartingPointY Y coordinate of swipe starting point, relative to the view height; valid input: `[0.0, 1.0]`
             * @example
             * await element(by.id('scrollView')).swipe('down');
             * await element(by.id('scrollView')).swipe('down', 'fast');
             * await element(by.id('scrollView')).swipe('down', 'fast', 0.5);
             * await element(by.id('scrollView')).swipe('down', 'fast', 0.5, 0.2);
             * await element(by.id('scrollView')).swipe('down', 'fast', 0.5, 0.2, 0.5);
             */
            swipe(
                direction: Direction,
                speed?: Speed,
                normalizedOffset?: number,
                normalizedStartingPointX?: number,
                normalizedStartingPointY?: number,
            ): Promise<Actions<R>>;
            /**
             * Simulates a swipe on the element with the provided options. (iOS only)
             * @param scale valid input: `[0.0, inf]`
             * @param @optional speed default: `slow`
             * @param @optional angle default: NaN; valid input: `[0.0, 1.0]`
             * @example
             * await element(by.id('PinchableScrollView')).pinch(1.1); //Zooms in a little bit
             * await element(by.id('PinchableScrollView')).pinch(2.0); //Zooms in a lot
             * await element(by.id('PinchableScrollView')).pinch(0.001); //Zooms out a lot
             */
            pinch(scale: number, speed?: Speed, angle?: number): Promise<Actions<R>>;
            /**
             * Sets a picker view’s column to the given value. This function supports both date pickers and general picker views. (iOS Only)
             * @param column number of datepicker column (starts from 0)
             * @param value string value in setted column (must be correct)
             * @example a
             * wait expect(element(by.type('UIPickerView'))).toBeVisible();
             * await element(by.type('UIPickerView')).setColumnToValue(1,"6");
             * await element(by.type('UIPickerView')).setColumnToValue(2,"34");
             *
             * > Note: When working with date pickers, you should always set an explicit locale when launching your app in order to prevent flakiness from different date and time styles.
             * See [here](https://github.com/wix/Detox/blob/master/docs/APIRef.DeviceObjectAPI.md#9-launch-with-a-specific-language-ios-only) for more information.
             */
            setColumnToValue(column: number, value: string): Promise<Actions<R>>;
            /**
             * Sets the date of a date picker to a date generated from the provided string and date format. (iOS only)
             * @param dateString string representing a date in the supplied `dateFormat`
             * @param dateFormat format for the `dateString` supplied
             * @example
             * await expect(element(by.id('datePicker'))).toBeVisible();
             * await element(by.id('datePicker')).setDatePickerDate('2019-02-06T05:10:00-08:00', "yyyy-MM-dd'T'HH:mm:ssZZZZZ");
             */
            setDatePickerDate(dateString: string, dateFormat: string): Promise<Actions<R>>;
            /**
             * Pinches in the given direction with speed and angle. (iOS only)
             * @deprecated Use .pinch() instead.
             * @param direction
             * @param speed
             * @param angle value in radiant, default is `0`
             * @example
             * await expect(element(by.id('PinchableScrollView'))).toBeVisible();
             * await element(by.id('PinchableScrollView')).pinchWithAngle('outward', 'slow', 0);
             */
            pinchWithAngle(direction: 'inward' | 'outward', speed: Speed, angle: number): Promise<Actions<R>>;
            /**
             * Manipulates the UI to change the displayed value of the slider element to a new value, based on a normalized position. (iOS only)
             * @param normalizedPosition valid input: [0, 1], 0 corresponds to the minimum value of the slider, and 1 corresponds to the maximum value.
             * @example
             * await element(by.id('slider')).adjustSliderToPosition(0.75);
             */
            adjustSliderToPosition(normalizedPosition: number): Promise<Actions<R>>;
            /**
             * Returns an object, representing the attributes of the element.
             * @example
             * const attributes = await element(by.text('Tap Me')).getAttributes();
             * jestExpect(attributes.text).toBe('Tap Me');
             * const multipleMatchedElements = await element(by.text('Multiple')).getAttributes();
             * jestExpect(multipleMatchedElements.elements.length).toBe(5);
             * jestExpect(multipleMatchedElements.elements[0].identifier).toBe('FirstElement');
             */
            getAttributes(): Promise<AttributesOfIOS>;
        }

        type Direction = 'left' | 'right' | 'up' | 'down';
        type ScrollDirection = 'left' | 'right' | 'top' | 'bottom';
        type Orientation = 'portrait' | 'landscape';
        type Speed = 'fast' | 'slow';
        interface LanguageAndLocale {
            language?: string;
            locale?: string;
        }
        interface DetoxInitOptions {
            /**
             * Detox exports device, expect, element, by and waitFor as globals by default, if you want to control their initialization manually, set init detox with initGlobals set to false.
             * This is useful when during E2E tests you also need to run regular expectations in node. jest Expect for instance, will not be overriden by Detox when this option is used.
             */
            initGlobals?: boolean;
            /**
             * By default await detox.init(config); will launch the installed app. If you wish to control when your app is launched, add {launchApp: false} param to your init.
             */
            launchApp?: boolean;
            /**
             * By default await detox.init(config); will uninstall and install the app. If you wish to reuse the existing app for a faster run, add {reuse: true} param to your init.
             */
            reuse?: boolean;
        }

        /**
         *  Source for string definitions is https://github.com/wix/AppleSimulatorUtils
         */
        interface DevicePermissions {
            location?: LocationPermission;
            notifications?: NotificationsPermission;
            calendar?: CalendarPermission;
            camera?: CameraPermission;
            contacts?: ContactsPermission;
            health?: HealthPermission;
            homekit?: HomekitPermission;
            medialibrary?: MediaLibraryPermission;
            microphone?: MicrophonePermission;
            motion?: MotionPermission;
            photos?: PhotosPermission;
            reminders?: RemindersPermission;
            siri?: SiriPermission;
            speech?: SpeechPermission;
            faceid?: FaceIDPermission;
        }

        type LocationPermission = 'always' | 'inuse' | 'never' | 'unset';
        type PermissionState = 'YES' | 'NO' | 'unset';
        type CameraPermission = PermissionState;
        type ContactsPermission = PermissionState;
        type CalendarPermission = PermissionState;
        type HealthPermission = PermissionState;
        type HomekitPermission = PermissionState;
        type MediaLibraryPermission = PermissionState;
        type MicrophonePermission = PermissionState;
        type MotionPermission = PermissionState;
        type PhotosPermission = PermissionState;
        type RemindersPermission = PermissionState;
        type SiriPermission = PermissionState;
        type SpeechPermission = PermissionState;
        type NotificationsPermission = PermissionState;
        type FaceIDPermission = PermissionState;

        interface DeviceLanchAppParams {
            /**
             * Restart the app
             * Terminate the app and launch it again. If set to false, the simulator will try to bring app from background, if the app isn't running, it will launch a new instance. default is false
             */
            newInstance?: boolean;
            /**
             * Set runtime permissions
             * Grant or deny runtime permissions for your application.
             */
            permissions?: DevicePermissions;
            /**
             * Launch from URL
             * Mock opening the app from URL to test your app's deep link handling mechanism.
             */
            url?: any;
            /**
             * Launch with user notifications
             */
            userNotification?: any;
            /**
             * Launch with user activity
             */
            userActivity?: any;
            /**
             * Launch into a fresh installation
             * A flag that enables relaunching into a fresh installation of the app (it will uninstall and install the binary again), default is false.
             */
            delete?: boolean;
            /**
             * Detox can start the app with additional launch arguments
             * The added launchArgs will be passed through the launch command to the device and be accessible via [[NSProcessInfo processInfo] arguments]
             */
            launchArgs?: any;
            /**
             * Disables touch indicators on iOS. Default is false.
             */
            disableTouchIndicators?: boolean;
            /**
             * Launch the app with a specific system language.
             * @see https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html
             */
            languageAndLocale?: LanguageAndLocale;
            /**
             * Launches the app with the synchronization mechanism enabled or disabled. Synchronization can later be enabled using `device.enableSynchronization()`.
             */
            detoxEnableSynchronization?: number;
            /**
             * Launches the app with a URL blacklist to disable network synchronization on certain endpoints. Useful if the app makes frequent network calls to blacklisted endpoints upon startup.
             */
            detoxURLBlacklistRegex?: number;
            /**
             * Mock opening the app from URL. sourceApp is an optional iOS-only parameter to specify source application bundle id. (iOS only)
             */
            sourceApp?: string;
        }

        interface StatusBarOptionsOfIOS {
            /**
             * Set the date or time to a fixed value.
             * If the string is a valid ISO date string it will also set the date on relevant devices.
             */
            time?: string;
            /**
             * If specified must be one of `wifi`, `3g`, `4g`, `lte`, `lte-a`, or `lte+`.
             */
            dataNetwork?: DataNetwork;
            /**
             * If specified must be one of `searching`, `failed`, or `active`.
             */
            wifiMode?: WifiMode;
            /**
             * If specified must be 0-3.
             */
            wifiBars?: 0 | 1 | 2 | 3;
            /**
             * If specified must be one of `notSupported`, `searching`, `failed`, or `active`.
             */
            cellularMode?: CellularMode;
            /**
             * If specified must be 0-3.
             */
            cellularBars?: 0 | 1 | 2 | 3;
            /**
             * If specified must be one of `charging`, `charged`, or `discharging`.
             */
            batteryState?: BatteryState;
            /**
             * If specified must be 0-100.
             */
            batteryLevel?: number;
        }

        interface AttributeIOSFrame {
            y: number;
            x: number;
            width: number;
            height: number;
        }

        interface AttributeIOSInsets {
            right: number;
            top: number;
            left: number;
            bottom: number;
        }
        interface AttributesOfIOS {
            /**
             * the text value of the element
             */
            text: string;
            /**
             * the label of the element (matches `accessibilityLabel`)
             */
            label: string;
            /**
             * the value of the element (matches `accessibilityValue`)
             */
            value: string;
            /**
             * the placeholder text value of the element
             */
            placeholder: string;
            /**
             * the identifier of the element (matches `accessibilityIdentifier`)
             */
            identifier: string;
            /**
             * whether or not the element is enabled for user interaction
             */
            enabled: boolean;
            /**
             * the activation point of the element, in element coordinate space
             */
            activationPoint: Point;
            /**
             * the activation point of the element, in normalized percentage ([0.0, 1.0])
             */
            normalizedActivationPoint: Point;
            /**
             * whether the element is hittable at the activation point
             */
            hittable: boolean;
            /**
             * whether the element is visible at the activation point
             */
            visible: boolean;
            /**
             * the frame of the element, in screen coordinate space
             */
            frame: AttributeIOSFrame;
            /**
             * the frame of the element, in container coordinate space
             */
            elementFrame: AttributeIOSFrame;
            /**
             * the bounds of the element, in element coordinate space
             */
            elementBounds: AttributeIOSFrame;
            /**
             * the safe area insets of the element, in element coordinate space
             */
            safeAreaInsets: AttributeIOSInsets;
            /**
             * the safe area bounds of the element, in element coordinate space
             */
            elementSafeBounds: AttributeIOSFrame;
            /**
             * the date of the element (in case the element is a date picker)
             */
            date: string;
            /**
             * the normalized slider position (in case the element is a slider)
             */
            normalizedSliderPosition: number;
            /**
             * the content offset (in case the element is a scroll view)
             */
            contentOffset: number;
            /**
             * the content inset (in case the element is a scroll view)
             */
            contentInset: number;
            /**
             * the adjusted content inset (in case the element is a scroll view)
             */
            adjustedContentInset: number;
            layer: string;
        }

        type DataNetwork = 'wifi' | '3g' | '4g' | 'lte' | 'lte-a' | 'lte+';
        type WifiMode = 'searching' | 'failed' | 'active';
        type CellularMode = 'notSupported' | 'searching' | 'failed' | 'active';
        type BatteryState = 'charging' | 'charged' | 'discharging';

        interface Point {
            x: number;
            y: number;
        }

        interface CircusTestEventListenerBase {
            handleTestEvent(event: any, state: any): Promise<void>;
        }

        interface DetoxCircus {
            /**
             * A get function that Enables access to this instance (single in each worker's scope)
             */
            getEnv(): {
                /**
                 * Registers a listener such as an adapter or reporter
                 * @param listener
                 * @example
                 * detoxCircus.getEnv().addEventsListener(adapter)
                 * detoxCircus.getEnv().addEventsListener(assignReporter)
                 */
                addEventsListener(listener: CircusTestEventListenerBase): void;
            };
        }
    }
}

declare const detoxExport: Detox.DetoxExport;

export = detoxExport;
