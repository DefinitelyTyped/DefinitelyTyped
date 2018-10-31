// Type definitions for detox 9.0
// Project: https://github.com/wix/detox
// Definitions by: Tareq El-Masri <https://github.com/TareqElMasri>, Steve Chun <https://github.com/stevechun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const detox: Detox.Detox;
declare const device: Detox.Device;
declare const element: Detox.Element;
declare const waitFor: Detox.WaitFor;
declare const expect: Detox.Expect<Detox.Expect<any>>;
declare const by: Detox.Matchers;

declare namespace Detox {
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
    }
    interface Device {
        /**
         * Launch the app
         * @param config
         * @example // Terminate the app and launch it again. If set to false, the simulator will try to bring app from background,
         * // if the app isn't running, it will launch a new instance. default is false
         * await device.launchApp({newInstance: true});
         * // Grant or deny runtime permissions for your application.
         * await device.launchApp({permissions: {calendar: 'YES'}});
         * // Mock opening the app from URL to test your app's deep link handling mechanism.
         * await device.launchApp({url: url});
         */
        launchApp(config: DeviceLanchAppConfig): Promise<void>;
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
        openURL(url: {url: string, sourceApp?: string}): Promise<void>;
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
         * @example await device.enableSynchronization();
         */
        enableSynchronization(): Promise<void>;
        /**
         * Disable EarlGrey's synchronization mechanism (enabled by default) This is being reset on every new instance of the app.
         * @example await device.disableSynchronization();
         */
        disableSynchronization(): Promise<void>;
        /**
         * Resets the Simulator to clean state (like the Simulator > Reset Content and Settings... menu item), especially removing previously set permissions.
         * @example await device.resetContentAndSettings();
         */
        resetContentAndSettings(): Promise<void>;
        /**
         * Returns the current device, ios or android.
         * @example if (device.getPlatform() === 'ios') {
         *     await expect(loopSwitch).toHaveValue('1');
         * }
         */
        getPlatform(): "ios" | "android";
        /**
         * Simulate press back button (Android Only)
         */
        pressBack(): Promise<void>;
        /**
         * Simulate shake (iOS Only)
         */
        shake(): Promise<void>;
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
        (element: Element): Expect<any>;
        /**
         * Expect the view to be at least 75% visible.
         * @example await expect(element(by.id('UniqueId204'))).toBeVisible();
         */
        toBeVisible(): R;
        /**
         * Expect the view to not be visible.
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
        toHaveValue(value: any): R;
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
         * @example await element(by.id('tappable')).tap();
         */
        tap(): Promise<Actions<R>>;
        /**
         * Simulate long press on an element
         * @example await element(by.id('tappable')).longPress();
         */
        longPress(): Promise<Actions<R>>;
        /**
         * Simulate multiple taps on an element.
         * @param times number
         * @example await element(by.id('tappable')).multiTap(3);
         */
        multiTap(times: number): Promise<Actions<R>>;
        /**
         * Simulate tap at a specific point on an element.
         * Note: The point coordinates are relative to the matched element and the element size could changes on different devices or even when changing the device font size.
         * @param point
         * @example await element(by.id('tappable')).tapAtPoint({ x:5, y:10 });
         */
        tapAtPoint(point: { x: number, y: number }): Promise<Actions<R>>;
        /**
         * Use the builtin keyboard to type text into a text field.
         * @param text
         * @example await element(by.id('textField')).typeText('passcode');
         */
        typeText(text: string): Promise<Actions<R>>;
        /**
         * Paste text into a text field.
         * @param text
         * @example await element(by.id('textField')).replaceText('passcode again');
         */
        replaceText(text: string): Promise<Actions<R>>;
        /**
         * Clear text from a text field.
         * @example await element(by.id('textField')).clearText();
         */
        clearText(): Promise<Actions<R>>;
        /**
         *
         * @param pixels
         * @param direction
         * @example
         * await element(by.id('scrollView')).scroll(100, 'down');
         * await element(by.id('scrollView')).scroll(100, 'up');
         */
        scroll(pixels: number, direction: Direction): Promise<Actions<R>>;
        /**
         * Scroll to edge.
         * @param edge
         * @example await element(by.id('scrollView')).scrollTo('bottom');
         * await element(by.id('scrollView')).scrollTo('top');
         */
        scrollTo(edge: Direction): Promise<Actions<R>>;
        /**
         *
         * @param direction
         * @param speed
         * @param percentage
         * @example await element(by.id('scrollView')).swipe('down');
         * await element(by.id('scrollView')).swipe('down', 'fast');
         * await element(by.id('scrollView')).swipe('down', 'fast', 0.5);
         */
        swipe(direction: Direction, speed?: Speed, percentage?: number): Promise<Actions<R>>;
        /**
         * (iOS Only) column - number of datepicker column (starts from 0) value - string value in setted column (must be correct)
         * @param column
         * @param value
         * @example await expect(element(by.type('UIPickerView'))).toBeVisible();
         * await element(by.type('UIPickerView')).setColumnToValue(1,"6");
         * await element(by.type('UIPickerView')).setColumnToValue(2,"34");
         */
        setColumnToValue(column: number, value: string): Promise<Actions<R>>;
    }

    type Direction = "left" | "right" | "top" | "bottom" | "up" | "down";
    type Orientation = "portrait" | "landscape";
    type Speed = "fast" | "slow";

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
    }

    interface DeviceLanchAppConfig {
        /**
         * Restart the app
         * Terminate the app and launch it again. If set to false, the simulator will try to bring app from background, if the app isn't running, it will launch a new instance. default is false
         */
        newInstance?: boolean;
        /**
         * Set runtime permissions
         * Grant or deny runtime permissions for your application.
         */
        permissions?: any;
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
    }
}
