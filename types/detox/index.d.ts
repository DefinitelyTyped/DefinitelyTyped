// Type definitions for detox 19.0
// Project: https://github.com/wix/detox
// Definitions by: Tareq El-Masri <https://github.com/TareqElMasri>
//                 Steve Chun <https://github.com/stevechun>
//                 Hammad Jutt <https://github.com/hammadj>
//                 pera <https://github.com/santiagofm>
//                 Max Komarychev <https://github.com/maxkomarychev>
//                 Dor Ben Baruch <https://github.com/Dor256>
//                 dkrk <https://github.com/grgr-dkrk>
//                 Chris Frewin <https://github.com/princefishthrower>
//                 Asaf Korem <https://github.com/asafkorem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    const device: Detox.DetoxExportWrapper['device'];
    const element: Detox.DetoxExportWrapper['element'];
    const waitFor: Detox.DetoxExportWrapper['waitFor'];
    const expect: Detox.DetoxExportWrapper['expect'];
    const by: Detox.DetoxExportWrapper['by'];
    const web: Detox.DetoxExportWrapper['web'];
    const detoxCircus: Detox.DetoxCircus;

    namespace NodeJS {
        interface Global {
            device: Detox.DetoxExportWrapper['device'];
            element: Detox.DetoxExportWrapper['element'];
            waitFor: Detox.DetoxExportWrapper['waitFor'];
            expect: Detox.DetoxExportWrapper['expect'];
            by: Detox.DetoxExportWrapper['by'];
            web: Detox.DetoxExportWrapper['web'];
            detoxCircus: Detox.DetoxCircus;
        }
    }

    namespace Detox {
        // region DetoxConfig

        interface DetoxConfig {
            /**
             * @example extends: './relative/detox.config'
             * @example extends: '@my-org/detox-preset'
             */
            extends?: string;
            /**
             * @example testRunner: 'jest'
             * @example testRunner: 'mocha'
             */
            testRunner?: string;
            /**
             * Stops passing default `--maxWorkers 1` to the test runner,
             * presuming that from now on you have that already configured
             * in your test runner config as a default.
             */
            skipLegacyWorkersInjection?: boolean;
            /**
             * @example runnerConfig: 'e2e/config.js'
             */
            runnerConfig?: string;
            /**
             * @example specs: 'detoxE2E'
             */
            specs?: string;
            artifacts?: DetoxArtifactsConfig;
            behavior?: DetoxBehaviorConfig;
            session?: DetoxSessionConfig;
            apps?: Record<string, DetoxAppConfig>;
            devices?: Record<string, DetoxDeviceConfig>;
            selectedConfiguration?: string;
            configurations: Record<string, DetoxConfiguration>;
        }

        interface DetoxArtifactsConfig {
            rootDir?: string;
            pathBuilder?: string;
            plugins?: {
                log?: 'none' | 'failing' | 'all' | DetoxLogArtifactsPluginConfig;
                screenshot?: 'none' | 'manual' | 'failing' | 'all' | DetoxScreenshotArtifactsPluginConfig;
                video?: 'none' | 'failing' | 'all' | DetoxVideoArtifactsPluginConfig;
                instruments?: 'none' | 'all' | DetoxInstrumentsArtifactsPluginConfig;
                timeline?: 'none' | 'all' | DetoxTimelineArtifactsPluginConfig;
                uiHierarchy?: 'disabled' | 'enabled' | DetoxUIHierarchyArtifactsPluginConfig;

                [pluginId: string]: unknown;
            };
        }

        interface DetoxBehaviorConfig {
            init?: {
                /**
                 * By default, Detox exports `device`, `expect`, `element`, `by` and `waitFor`
                 * as global variables. If you want to control their initialization manually,
                 * set this property to `false`.
                 *
                 * This is useful when during E2E tests you also need to run regular expectations
                 * in Node.js. Jest's `expect` for instance, will not be overridden by Detox when
                 * this option is used.
                 */
                exposeGlobals?: boolean;
                /**
                 * By default, `await detox.init()` will uninstall and install the app.
                 * If you wish to reuse the existing app for a faster run, set the property to
                 * `false`.
                 */
                reinstallApp?: boolean;
            };
            launchApp?: 'auto' | 'manual';
            cleanup?: {
                shutdownDevice?: boolean;
            };
        }

        interface DetoxSessionConfig {
            autoStart?: boolean;
            debugSynchronization?: number;
            server?: string;
            sessionId?: string;
        }

        type DetoxAppConfig = (DetoxIosAppConfig | DetoxAndroidAppConfig) & {
            /**
             * App name to use with device.selectApp(appName) calls.
             * Can be omitted if you have a single app under the test.
             *
             * @see Device#selectApp
             */
            name?: string;
        };

        type DetoxDeviceConfig = DetoxBuiltInDeviceConfig | DetoxCustomDriverConfig;

        type DetoxConfiguration = DetoxPlainConfiguration | DetoxAliasedConfiguration;

        interface DetoxLogArtifactsPluginConfig {
            enabled?: boolean;
            keepOnlyFailedTestsArtifacts?: boolean;
        }

        interface DetoxScreenshotArtifactsPluginConfig {
            enabled?: boolean;
            keepOnlyFailedTestsArtifacts?: boolean;
            shouldTakeAutomaticSnapshots?: boolean;
            takeWhen?: {
                testStart?: boolean;
                testFailure?: boolean;
                testDone?: boolean;
                appNotReady?: boolean;
            };
        }

        interface DetoxVideoArtifactsPluginConfig {
            enabled?: boolean;
            keepOnlyFailedTestsArtifacts?: boolean;
            android?: Partial<{
                size: [number, number];
                bitRate: number;
                timeLimit: number;
                verbose: boolean;
            }>;
            simulator?: Partial<{
                codec: string;
            }>;
        }

        interface DetoxInstrumentsArtifactsPluginConfig {
            enabled?: boolean;
        }

        interface DetoxUIHierarchyArtifactsPluginConfig {
            enabled?: boolean;
        }

        interface DetoxTimelineArtifactsPluginConfig {
            enabled?: boolean;
        }

        interface DetoxIosAppConfig {
            type: 'ios.app';
            binaryPath: string;
            bundleId?: string;
            build?: string;
            launchArgs?: Record<string, any>;
        }

        interface DetoxAndroidAppConfig {
            type: 'android.apk';
            binaryPath: string;
            bundleId?: string;
            build?: string;
            testBinaryPath?: string;
            launchArgs?: Record<string, any>;
        }

        interface _DetoxAppConfigFragment {
            binaryPath: string;
            bundleId?: string;
            build?: string;
            testBinaryPath?: string;
            launchArgs?: Record<string, any>;
        }

        type DetoxBuiltInDeviceConfig =
          | DetoxIosSimulatorDriverConfig
          | DetoxIosNoneDriverConfig
          | DetoxAttachedAndroidDriverConfig
          | DetoxAndroidEmulatorDriverConfig
          | DetoxGenymotionCloudDriverConfig;

        type DetoxPlainConfiguration = DetoxConfigurationOverrides & (
          | (DetoxIosSimulatorDriverConfig & _DetoxAppConfigFragment)
          | (DetoxIosNoneDriverConfig & _DetoxAppConfigFragment)
          | (DetoxAttachedAndroidDriverConfig & _DetoxAppConfigFragment)
          | (DetoxAndroidEmulatorDriverConfig & _DetoxAppConfigFragment)
          | (DetoxGenymotionCloudDriverConfig & _DetoxAppConfigFragment)
          | (DetoxCustomDriverConfig)
          );

        interface DetoxIosSimulatorDriverConfig {
            type: 'ios.simulator';
            device: string | Partial<IosSimulatorQuery>;
            bootArgs?: string;
        }

        interface DetoxIosNoneDriverConfig {
            type: 'ios.none';
            // TODO: check if we need it at all?
            device?: string | Partial<IosSimulatorQuery>;
        }

        interface DetoxSharedAndroidDriverConfig {
            forceAdbInstall?: boolean;
            utilBinaryPaths?: string[];
        }

        interface DetoxAttachedAndroidDriverConfig extends DetoxSharedAndroidDriverConfig {
            type: 'android.attached';
            device: string | { adbName: string };
        }

        interface DetoxAndroidEmulatorDriverConfig extends DetoxSharedAndroidDriverConfig {
            type: 'android.emulator';
            device: string | { avdName: string };
            bootArgs?: string;
            gpuMode?: 'auto' | 'host' | 'swiftshader_indirect' | 'angle_indirect' | 'guest';
            headless?: boolean;
            readonly?: boolean;
        }

        interface DetoxGenymotionCloudDriverConfig extends DetoxSharedAndroidDriverConfig {
            type: 'android.genycloud';
            device: string | { recipeUUID: string; } | { recipeName: string; };
        }

        interface DetoxCustomDriverConfig {
            type: string;

            [prop: string]: unknown;
        }

        interface IosSimulatorQuery {
            id: string;
            type: string;
            name: string;
            os: string;
        }

        type DetoxKnownDeviceType = DetoxBuiltInDeviceConfig['type'];

        type DetoxConfigurationOverrides = {
            artifacts?: false | DetoxArtifactsConfig;
            behavior?: DetoxBehaviorConfig;
            session?: DetoxSessionConfig;
        };

        type DetoxAliasedConfiguration =
          | DetoxAliasedConfigurationSingleApp
          | DetoxAliasedConfigurationMultiApps;

        interface DetoxAliasedConfigurationSingleApp {
            type?: never;
            device: DetoxAliasedDevice;
            app: string | DetoxAppConfig;
        }

        interface DetoxAliasedConfigurationMultiApps {
            type?: never;
            device: DetoxAliasedDevice;
            apps: string[];
        }

        type DetoxAliasedDevice = string | DetoxDeviceConfig;

        // endregion DetoxConfig

        // Detox exports all methods from detox global and all of the global constants.
        interface DetoxInstance {
            device: Device;
            element: ElementFacade;
            waitFor: WaitForFacade;
            expect: ExpectFacade;
            by: ByFacade;
            web: WebFacade;
        }

        interface DetoxExportWrapper extends DetoxInstance {
            /**
             * The setup phase happens inside detox.init(). This is the phase where detox reads its configuration, starts a server, loads its expection library and starts a simulator
             *
             * @param configOverride - this object is deep-merged with the selected Detox configuration from .detoxrc
             * @example
             * beforeAll(async () => {
             *   await detox.init();
             * });
             */
            init(configOverride?: Partial<DetoxConfig>, options?: DetoxInitOptions): Promise<void>;

            beforeEach(...args: any[]): Promise<void>;

            afterEach(...args: any[]): Promise<void>;

            /**
             * The cleanup phase should happen after all the tests have finished.
             * This is the phase where the Detox server shuts down.
             *
             * @example
             * after(async () => {
             *  await detox.cleanup();
             * });
             */
            cleanup(): Promise<void>;

            /**
             * Unstable. API to access an assembled detox config before it gets passed to testRunner
             * or detox.init(). Use it only if you don't have another option.
             * @internal
             */
            hook(event: 'UNSAFE_configReady', listener: (config: unknown) => void): void;
        }

        interface DetoxInitOptions {
            /**
             * By default, Detox exports `device`, `expect`, `element`, `by` and `waitFor`
             * as global variables. If you want to control their initialization manually,
             * set this property to `false`.
             *
             * This is useful when during E2E tests you also need to run regular expectations
             * in Node.js. Jest's `expect` for instance, will not be overridden by Detox when
             * this option is used.
             */
            initGlobals?: boolean;
            /**
             * By default, `await detox.init()` will uninstall and install the app.
             * If you wish to reuse the existing app for a faster run, set the property to
             * `false`.
             */
            reuse?: boolean;
        }

        type AppLaunchArgsOperationOptions = Partial<{
            /** Changes the scope of the operation: transient or permanent app launch args */
            permanent: boolean;
        }>;

        type Point2D = {
            x: number,
            y: number,
        }

        /**
         * A construct allowing for the querying and modification of user arguments passed to an app upon launch by Detox.
         *
         * @see AppLaunchArgs#modify
         * @see AppLaunchArgs#reset
         * @see AppLaunchArgs#get
         */
        interface AppLaunchArgs {
            /**
             * Modify the launch-arguments via a modifier object, according to the following logic:
             * - Non-nullish modifier properties would set a new value or override the previous value of
             *   existing properties with the same name.
             * - Modifier properties set to either `undefined` or `null` would delete the corresponding property
             *   if it existed.
             * These custom app launch arguments are transient by default, and will get erased as soon as
             * you select another app. If you wish to keep them between the apps, use { permanent: true }
             * option.
             * Note: transient (default) values override the permanent ones if the corresponding properties
             * have the same name.
             *
             * @param modifier The modifier object.
             * @param options.permanent - when set to true, the function will set permanent app launch args.
             * @example
             * // With current launch arguments set to:
             * // {
             * //   mockServerPort: 1234,
             * //   mockServerCredentials: 'user@test.com:12345678',
             * // }
             * device.appLaunchArgs.modify({
             *   mockServerPort: 4321,
             *   mockServerCredentials: null,
             *   mockServerToken: 'abcdef',
             * });
             * await device.launchApp();
             * // ==> launch-arguments become:
             * // {
             * //   mockServerPort: 4321,
             * //   mockServerToken: 'abcdef',
             * // }
             */
            modify(modifier: object, options?: AppLaunchArgsOperationOptions): this;

            /**
             * Complete reset all currently set launch-arguments (i.e. back to an empty JS object).
             * Note: by default, permanent app launch args are not reset.
             * @param options.permanent - when set to true, the function will also reset permanent app launch args.
             */
            reset(options?: AppLaunchArgsOperationOptions): this;

            /**
             * Get all currently set launch-arguments.
             * @param options.permanent - when set to true, the function will return only permanent app launch args.
             * when set to false, the function will return only transient app launch args.
             * @returns An object containing all launch-arguments.
             * Note: Changes on the returned object will not be reflected on the launch-arguments associated with the device.
             */
            get(options?: AppLaunchArgsOperationOptions): object;
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
             * Holds a descriptive name of the device. Example: emulator-5554 (Pixel_API_29)
             * The value will be undefined until the device is properly prepared (i.e. in detox.init()).
             */
            name: string;

            /**
             * Select the current app (relevant only to multi-app configs) by its name.
             * After execution, all app-specific device methods will target the selected app.
             *
             * @see DetoxAppConfig#name
             * @example
             * await device.selectApp('passenger');
             * await device.launchApp(); // passenger
             * // ... run tests for the passenger app
             * await device.uninstallApp(); // passenger
             * await device.selectApp('driver');
             * await device.installApp(); // driver
             * await device.launchApp(); // driver
             * // ... run tests for the driver app
             * await device.terminateApp(); // driver
             */
            selectApp(app: string): Promise<void>;

            /**
             * Launch the app.
             *
             * <p>For info regarding launch arguments, refer to the [dedicated guide](https://github.com/wix/Detox/blob/master/docs/APIRef.LaunchArgs.md).
             *
             * @example
             * // Terminate the app and launch it again. If set to false, the simulator will try to bring app from background,
             * // if the app isn't running, it will launch a new instance. default is false
             * await device.launchApp({newInstance: true});
             * @example
             * // Grant or deny runtime permissions for your application.
             * await device.launchApp({permissions: {calendar: 'YES'}});
             * @example
             * // Mock opening the app from URL to test your app's deep link handling mechanism.
             * await device.launchApp({url: url});
             * @example
             * // Start the app with some custom arguments.
             * await device.launchApp({
             *   launchArgs: {arg1: 1, arg2: "2"},
             * });
             */
            launchApp(config?: DeviceLaunchAppConfig): Promise<void>;

            /**
             * Access the user-defined launch-arguments predefined through static scopes such as the Detox configuration file and
             * command-line arguments. This access allows - through dedicated methods, for both value-querying and
             * modification (see {@link AppLaunchArgs}).
             * Refer to the [dedicated guide](https://github.com/wix/Detox/blob/master/docs/APIRef.LaunchArgs.md) for complete details.
             *
             * @example
             * // With Detox being preconfigured statically to use these arguments in app launch:
             * // {
             * //   mockServerPort: 1234,
             * // }
             * // The following code would result in these arguments eventually passed into the launched app:
             * // {
             * //   mockServerPort: 4321,
             * //   mockServerToken: 'uvwxyz',
             * // }
             * device.appLaunchArgs.modify({
             *   mockServerPort: 4321,
             *   mockServerToken: 'abcdef',
             * });
             * await device.launchApp({ launchArgs: { mockServerToken: 'uvwxyz' } }};
             *
             * @see AppLaunchArgs
             */
            appLaunchArgs: AppLaunchArgs;
            /**
             * Terminate the app.
             *
             * @example
             * // By default, terminateApp() with no params will terminate the app
             * await device.terminateApp();
             * @example
             * // To terminate another app, specify its bundle id
             * await device.terminateApp('other.bundle.id');
             */
            terminateApp(bundle?: string): Promise<void>;

            /**
             * Send application to background by bringing com.apple.springboard to the foreground.
             * Combining sendToHome() with launchApp({newInstance: false}) will simulate app coming back from background.
             * @example
             * await device.sendToHome();
             * await device.launchApp({newInstance: false});
             */
            sendToHome(): Promise<void>;

            /**
             * If this is a React Native app, reload the React Native JS bundle. This action is much faster than device.launchApp(), and can be used if you just need to reset your React Native logic.
             *
             * @example await device.reloadReactNative()
             */
            reloadReactNative(): Promise<void>;

            /**
             * By default, installApp() with no params will install the app file defined in the current configuration.
             * To install another app, specify its path
             * @example await device.installApp();
             * @example await device.installApp('path/to/other/app');
             */
            installApp(path?: any): Promise<void>;

            /**
             * By default, uninstallApp() with no params will uninstall the app defined in the current configuration.
             * To uninstall another app, specify its bundle id
             * @example await device.installApp('other.bundle.id');
             */
            uninstallApp(bundle?: string): Promise<void>;

            /**
             * Mock opening the app from URL. sourceApp is an optional parameter to specify source application bundle id.
             */
            openURL(url: { url: string; sourceApp?: string }): Promise<void>;

            /**
             * Mock handling of received user notification when app is in foreground.
             */
            sendUserNotification(...params: any[]): Promise<void>;

            /**
             * Mock handling of received user activity when app is in foreground.
             */
            sendUserActivity(...params: any[]): Promise<void>;

            /**
             * Takes "portrait" or "landscape" and rotates the device to the given orientation. Currently only available in the iOS Simulator.
             */
            setOrientation(orientation: Orientation): Promise<void>;

            /**
             * Sets the simulator/emulator location to the given latitude and longitude.
             *
             * <p/>On iOS `setLocation` is dependent on [fbsimctl](https://github.com/facebook/idb/tree/4b7929480c3c0f158f33f78a5b802c1d0e7030d2/fbsimctl)
             * which [is now deprecated](https://github.com/wix/Detox/issues/1371).
             * If `fbsimctl` is not installed, the command will fail, asking for it to be installed.
             *
             * <p/>On Android `setLocation` will work with both Android Emulator (bundled with Android development tools) and Genymotion.
             * The correct permissions must be set in your app manifest.
             *
             * @example await device.setLocation(32.0853, 34.7818);
             */
            setLocation(lat: number, lon: number): Promise<void>;

            /**
             * Disable EarlGrey's network synchronization mechanism on preferred endpoints. Useful if you want to on skip over synchronizing on certain URLs.
             *
             * @example await device.setURLBlacklist(['.*127.0.0.1.*']);
             */
            setURLBlacklist(urls: string[]): Promise<void>;

            /**
             * Temporarily disable synchronization (idle/busy monitoring) with the app - namely, stop waiting for the app to go idle before moving forward in the test execution.
             *
             * <p/>This API is useful for cases where test assertions must be made in an area of your application where it is okay for it to ever remain partly *busy* (e.g. due to an
             * endlessly repeating on-screen animation). However, using it inherently suggests that you are likely to resort to applying `sleep()`'s in your test code - testing
             * that area, **which is not recommended and can never be 100% stable.
             * **Therefore, as a rule of thumb, test code running "inside" a sync-disabled mode must be reduced to the bare minimum.
             *
             * <p/>Note: Synchronization is enabled by default, and it gets **reenabled on every launch of a new instance of the app.**
             *
             * @example await device.disableSynchronization();
             */
            disableSynchronization(): Promise<void>;

            /**
             * Reenable synchronization (idle/busy monitoring) with the app - namely, resume waiting for the app to go idle before moving forward in the test execution, after a
             * previous disabling of it through a call to `device.disableSynchronization()`.
             *
             * <p/>Warning: Making this call would resume synchronization **instantly**, having its returned promise only resolve when the app becomes idle again.
             * In other words, this **must only be called after you navigate back to "the safe zone", where the app should be able to eventually become idle again**, or it would
             * remain suspended "forever" (i.e. until a safeguard time-out expires).
             *
             * @example await device.enableSynchronization();
             */
            enableSynchronization(): Promise<void>;

            /**
             * Resets the Simulator to clean state (like the Simulator > Reset Content and Settings... menu item), especially removing previously set permissions.
             *
             * @example await device.resetContentAndSettings();
             */
            resetContentAndSettings(): Promise<void>;

            /**
             * Returns the current device, ios or android.
             *
             * @example
             * if (device.getPlatform() === 'ios') {
             *     await expect(loopSwitch).toHaveValue('1');
             * }
             */
            getPlatform(): 'ios' | 'android';

            /**
             * Takes a screenshot on the device and schedules putting it in the artifacts folder upon completion of the current test.
             * @param {string} name for the screenshot artifact
             * @returns {Promise<string>} a temporary path to the screenshot.
             * @example
             * test('Menu items should have logout', async () => {
             *   const tempPath = await device.takeScreenshot('tap on menu');
             *   // The temporary path will remain valid until the test completion.
             *   // Afterwards, the screenshot will be moved, e.g.:
             *   // * on success, to: <artifacts-location>/✓ Menu items should have Logout/tap on menu.png
             *   // * on failure, to: <artifacts-location>/✗ Menu items should have Logout/tap on menu.png
             * });
             */
            takeScreenshot(name: string): Promise<string>;

            /**
             * Simulate shake (iOS Only)
             */
            shake(): Promise<void>;

            /**
             * Toggles device enrollment in biometric auth (TouchID or FaceID) (iOS Only)
             * @example await device.setBiometricEnrollment(true);
             * @example await device.setBiometricEnrollment(false);
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
             * Simulate press back button (Android Only)
             * @example await device.pressBack();
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

            /**
             * (Android Only)
             * Runs `adb reverse tcp:PORT tcp:PORT` for the current device
             * to enable network requests forwarding on localhost:PORT (computer<->device).
             * For more information, see {@link https://www.reddit.com/r/reactnative/comments/5etpqw/what_do_you_call_what_adb_reverse_is_doing|here}.
             * This is a no-op when running on iOS.
             */
            reverseTcpPort(port: number): Promise<void>;

            /**
             * (Android Only)
             * Runs `adb reverse --remove tcp:PORT tcp:PORT` for the current device
             * to disable network requests forwarding on localhost:PORT (computer<->device).
             * For more information, see {@link https://www.reddit.com/r/reactnative/comments/5etpqw/what_do_you_call_what_adb_reverse_is_doing|here}.
             * This is a no-op when running on iOS.
             */
            unreverseTcpPort(port: number): Promise<void>;
        }

        /**
         * @deprecated
         */
        type DetoxAny = NativeElement & WaitFor;

        interface ElementFacade {
            (by: NativeMatcher): IndexableNativeElement;
        }

        interface IndexableNativeElement extends NativeElement {
            /**
             * Choose from multiple elements matching the same matcher using index
             * @example await element(by.text('Product')).atIndex(2).tap();
             */
            atIndex(index: number): NativeElement;
        }

        interface NativeElement extends NativeElementActions {
        }

        interface ByFacade {
            /**
             * by.id will match an id that is given to the view via testID prop.
             * @example
             * // In a React Native component add testID like so:
             * <TouchableOpacity testID={'tap_me'}>
             * // Then match with by.id:
             * await element(by.id('tap_me'));
             */
            id(id: string): NativeMatcher;

            /**
             * Find an element by text, useful for text fields, buttons.
             * @example await element(by.text('Tap Me'));
             */
            text(text: string): NativeMatcher;

            /**
             * Find an element by accessibilityLabel on iOS, or by contentDescription on Android.
             * @example await element(by.label('Welcome'));
             */
            label(label: string): NativeMatcher;

            /**
             * Find an element by native view type.
             * @example await element(by.type('RCTImageView'));
             */
            type(nativeViewType: string): NativeMatcher;

            /**
             * Find an element with an accessibility trait. (iOS only)
             * @example await element(by.traits(['button']));
             */
            traits(traits: string[]): NativeMatcher;

            /**
             * Collection of web matchers
             */
            readonly web: ByWebFacade;
        }

        interface ByWebFacade {
            /**
             * Find an element on the DOM tree by its id
             * @param id
             * @example
             * web.element(by.web.id('testingh1'))
             */
            id(id: string): WebMatcher;

            /**
             * Find an element on the DOM tree by its CSS class
             * @param className
             * @example
             * web.element(by.web.className('a'))
             */
            className(className: string): WebMatcher;

            /**
             * Find an element on the DOM tree matching the given CSS selector
             * @param cssSelector
             * @example
             * web.element(by.web.cssSelector('#cssSelector'))
             */
            cssSelector(cssSelector: string): WebMatcher;

            /**
             * Find an element on the DOM tree by its "name" attribute
             * @param name
             * @example
             * web.element(by.web.name('sec_input'))
             */
            name(name: string): WebMatcher;

            /**
             * Find an element on the DOM tree by its XPath
             * @param xpath
             * @example
             * web.element(by.web.xpath('//*[@id="testingh1-1"]'))
             */
            xpath(xpath: string): WebMatcher;

            /**
             * Find an <a> element on the DOM tree by its link text (href content)
             * @param linkText
             * @example
             * web.element(by.web.href('disney.com'))
             */
            href(linkText: string): WebMatcher;

            /**
             * Find an <a> element on the DOM tree by its partial link text (href content)
             * @param linkTextFragment
             * @example
             * web.element(by.web.hrefContains('disney'))
             */
            hrefContains(linkTextFragment: string): WebMatcher;

            /**
             * Find an element on the DOM tree by its tag name
             * @param tag
             * @example
             * web.element(by.web.tag('mark'))
             */
            tag(tagName: string): WebMatcher;
        }

        interface NativeMatcher {
            /**
             * Find an element satisfying all the matchers
             * @example await element(by.text('Product').and(by.id('product_name'));
             */
            and(by: NativeMatcher): NativeMatcher;
            /**
             * Find an element by a matcher with a parent matcher
             * @example await element(by.id('Grandson883').withAncestor(by.id('Son883')));
             */
            withAncestor(parentBy: NativeMatcher): NativeMatcher;
            /**
             * Find an element by a matcher with a child matcher
             * @example await element(by.id('Son883').withDescendant(by.id('Grandson883')));
             */
            withDescendant(childBy: NativeMatcher): NativeMatcher;
        }

        interface WebMatcher {
            __web__: any; // prevent type coersion
        }

        interface ExpectFacade {
            (element: NativeElement): Expect;
            (webElement: WebElement): WebExpect;
        }

        interface WebViewElement {
            element(webMatcher: WebMatcher): IndexableWebElement;
        }

        interface WebFacade extends WebViewElement {
            /**
             * Gets the webview element as a testing element.
             * @param matcher a simple view matcher for the webview element in th UI hierarchy.
             * If there is only ONE webview element in the UI hierarchy, its NOT a must to supply it.
             * If there are MORE then one webview element in the UI hierarchy you MUST supply are view matcher.
             */
            (matcher?: NativeMatcher): WebViewElement;
        }

        interface Expect<R = Promise<void>> {

            /**
             * Expect the view to be at least N% visible. If no number is provided then defaults to 75%. Negating this
             * expectation with a `not` expects the view's visible area to be smaller than N%.
             * @param pct optional integer ranging from 1 to 100, indicating how much percent of the view should be
             *  visible to the user to be accepted.
             * @example await expect(element(by.id('UniqueId204'))).toBeVisible(35);
             */
            toBeVisible(pct?: number): R;

            /**
             * Negate the expectation.
             * @example await expect(element(by.id('UniqueId205'))).not.toBeVisible();
             */
            not: this;

            /**
             * Expect the view to not be visible.
             * @example await expect(element(by.id('UniqueId205'))).toBeNotVisible();
             * @deprecated Use `.not.toBeVisible()` instead.
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
             * @deprecated Use `.not.toExist()` instead.
             */
            toNotExist(): R;

            /**
             * Expect the view to be focused.
             * @example await expect(element(by.id('loginInput'))).toBeFocused();
             */
            toBeFocused(): R;

            /**
             * Expect the view not to be focused.
             * @example await expect(element(by.id('passwordInput'))).toBeNotFocused();
             * @deprecated Use `.not.toBeFocused()` instead.
             */
            toBeNotFocused(): R;

            /**
             * In React Native apps, expect UI component of type <Text> to have text.
             * In native iOS apps, expect UI elements of type UIButton, UILabel, UITextField or UITextViewIn to have inputText with text.
             * @example await expect(element(by.id('UniqueId204'))).toHaveText('I contain some text');
             */
            toHaveText(text: string): R;

            /**
             * It searches by accessibilityLabel on iOS, or by contentDescription on Android.
             * In React Native it can be set for both platforms by defining an accessibilityLabel on the view.
             * @example await expect(element(by.id('UniqueId204'))).toHaveLabel('Done');
             */
            toHaveLabel(label: string): R;

            /**
             * In React Native apps, expect UI component to have testID with that id.
             * In native iOS apps, expect UI element to have accessibilityIdentifier with that id.
             * @example await expect(element(by.text('I contain some text'))).toHaveId('UniqueId204');
             */
            toHaveId(id: string): R;

            /**
             * Expects a toggle-able element (e.g. a Switch or a Check-Box) to be on/checked or off/unchecked.
             * As a reference, in react-native, this is the equivalent switch component.
             * @example await expect(element(by.id('switch'))).toHaveToggleValue(true);
             */
            toHaveToggleValue(value: boolean): R;
            /**
             * Expect components like a Switch to have a value ('0' for off, '1' for on).
             * @example await expect(element(by.id('UniqueId533'))).toHaveValue('0');
             */
            toHaveValue(value: any): R;

            /**
             * Expect Slider to have a position (0 - 1).
             * Can have an optional tolerance to take into account rounding issues on ios
             * @example await expect(element(by.id('SliderId'))).toHavePosition(0.75);
             * @example await expect(element(by.id('SliderId'))).toHavePosition(0.74, 0.1);
             */
            toHaveSliderPosition(position: number, tolerance?: number): Promise<void>;
        }

        interface WaitForFacade {
            /**
             * This API polls using the given expectation continuously until the expectation is met. Use manual synchronization with waitFor only as a last resort.
             * NOTE: Every waitFor call must set a timeout using withTimeout(). Calling waitFor without setting a timeout will do nothing.
             * @example await waitFor(element(by.id('UniqueId336'))).toExist().withTimeout(2000);
             */
            (element: NativeElement): Expect<WaitFor>;
        }

        interface WaitFor {
            /**
             * Waits for the condition to be met until the specified time (millis) have elapsed.
             * @example await waitFor(element(by.id('UniqueId336'))).toExist().withTimeout(2000);
             */
            withTimeout(millis: number): Promise<void>;

            /**
             * Performs the action repeatedly on the element until an expectation is met
             * @example await waitFor(element(by.text('Text5'))).toBeVisible().whileElement(by.id('ScrollView630')).scroll(50, 'down');
             */
            whileElement(by: NativeMatcher): NativeElement & WaitFor;
            // TODO: not sure about & WaitFor - check if we can chain whileElement multiple times
        }

        interface NativeElementActions {
            /**
             * Simulate tap on an element
             * @param point relative coordinates to the matched element (the element size could changes on different devices or even when changing the device font size)
             * @example await element(by.id('tappable')).tap();
             * @example await element(by.id('tappable')).tap({ x:5, y:10 });
             */
            tap(point?: Point2D): Promise<void>;

            /**
             * Simulate long press on an element
             * @param duration (iOS only) custom press duration time, in milliseconds. Optional (default is 1000ms).
             * @example await element(by.id('tappable')).longPress();
             */
            longPress(duration?: number): Promise<void>;

            /**
             * Simulate long press on an element and then drag it to the position of the target element. (iOS Only)
             * @example await element(by.id('draggable')).longPressAndDrag(2000, NaN, NaN, element(by.id('target')), NaN, NaN, 'fast', 0);
             */
            longPressAndDrag(duration: number, normalizedPositionX: number, normalizedPositionY: number, targetElement: NativeElement,
                             normalizedTargetPositionX: number, normalizedTargetPositionY: number, speed: Speed, holdDuration: number): Promise<void>;
            /**
             * Simulate multiple taps on an element.
             * @param times number of times to tap
             * @example await element(by.id('tappable')).multiTap(3);
             */
            multiTap(times: number): Promise<void>;

            /**
             * Simulate tap at a specific point on an element.
             * Note: The point coordinates are relative to the matched element and the element size could changes on different devices or even when changing the device font size.
             * @example await element(by.id('tappable')).tapAtPoint({ x:5, y:10 });
             * @deprecated Use `.tap()` instead.
             */
            tapAtPoint(point: Point2D): Promise<void>;

            /**
             * Use the builtin keyboard to type text into a text field.
             * @example await element(by.id('textField')).typeText('passcode');
             */
            typeText(text: string): Promise<void>;

            /**
             * Paste text into a text field.
             * @example await element(by.id('textField')).replaceText('passcode again');
             */
            replaceText(text: string): Promise<void>;

            /**
             * Clear text from a text field.
             * @example await element(by.id('textField')).clearText();
             */
            clearText(): Promise<void>;

            /**
             * Taps the backspace key on the built-in keyboard.
             * @example await element(by.id('textField')).tapBackspaceKey();
             */
            tapBackspaceKey(): Promise<void>;

            /**
             * Taps the return key on the built-in keyboard.
             * @example await element(by.id('textField')).tapReturnKey();
             */
            tapReturnKey(): Promise<void>;

            /**
             * Scrolls a given amount of pixels in the provided direction, starting from the provided start positions.
             * @param pixels - independent device pixels
             * @param direction - left/right/up/down
             * @param startPositionX - the X starting scroll position, in percentage; valid input: `[0.0, 1.0]`, `NaN`; default: `NaN`—choose the best value automatically
             * @param startPositionY - the Y starting scroll position, in percentage; valid input: `[0.0, 1.0]`, `NaN`; default: `NaN`—choose the best value automatically
             * @example await element(by.id('scrollView')).scroll(100, 'down', NaN, 0.85);
             * @example await element(by.id('scrollView')).scroll(100, 'up');
             */
            scroll(
              pixels: number,
              direction: Direction,
              startPositionX?: number,
              startPositionY?: number,
            ): Promise<void>;

            /**
             * Scroll to index.
             * @example await element(by.id('scrollView')).scrollToIndex(10);
             */
            scrollToIndex(
              index: Number
            ): Promise<void>;

            /**
             * Scroll to edge.
             * @example await element(by.id('scrollView')).scrollTo('bottom');
             * @example await element(by.id('scrollView')).scrollTo('top');
             */
            scrollTo(edge: Direction): Promise<void>;

            /**
             * Adjust slider to position.
             * @example await element(by.id('slider')).adjustSliderToPosition(0.75);
             */
            adjustSliderToPosition(newPosition: number): Promise<void>;

            /**
             * Swipes in the provided direction at the provided speed, started from percentage.
             * @param speed default: `fast`
             * @param percentage screen percentage to swipe; valid input: `[0.0, 1.0]`
             * @param optional normalizedStartingPointX X coordinate of swipe starting point, relative to the view width; valid input: `[0.0, 1.0]`
             * @param normalizedStartingPointY Y coordinate of swipe starting point, relative to the view height; valid input: `[0.0, 1.0]`
             * @example await element(by.id('scrollView')).swipe('down');
             * @example await element(by.id('scrollView')).swipe('down', 'fast');
             * @example await element(by.id('scrollView')).swipe('down', 'fast', 0.5);
             * @example await element(by.id('scrollView')).swipe('down', 'fast', 0.5, 0.2);
             * @example await element(by.id('scrollView')).swipe('down', 'fast', 0.5, 0.2, 0.5);
             */
            swipe(direction: Direction, speed?: Speed, percentage?: number, normalizedStartingPointX?: number, normalizedStartingPointY?: number): Promise<void>;

            /**
             * Sets a picker view’s column to the given value. This function supports both date pickers and general picker views. (iOS Only)
             * Note: When working with date pickers, you should always set an explicit locale when launching your app in order to prevent flakiness from different date and time styles.
             * See [here](https://github.com/wix/Detox/blob/master/docs/APIRef.DeviceObjectAPI.md#9-launch-with-a-specific-language-ios-only) for more information.
             *
             * @param column number of datepicker column (starts from 0)
             * @param value string value in set column (must be correct)
             * @example
             * await expect(element(by.type('UIPickerView'))).toBeVisible();
             * await element(by.type('UIPickerView')).setColumnToValue(1,"6");
             * await element(by.type('UIPickerView')).setColumnToValue(2,"34");
             */
            setColumnToValue(column: number, value: string): Promise<void>;

            /**
             * Sets the date of a date picker to a date generated from the provided string and date format. (iOS only)
             * @param dateString string representing a date in the supplied `dateFormat`
             * @param dateFormat format for the `dateString` supplied
             * @example
             * await expect(element(by.id('datePicker'))).toBeVisible();
             * await element(by.id('datePicker')).setDatePickerDate('2019-02-06T05:10:00-08:00', "yyyy-MM-dd'T'HH:mm:ssZZZZZ");
             */
            setDatePickerDate(dateString: string, dateFormat: string): Promise<void>;

            /**
             * Pinches in the given direction with speed and angle. (iOS only)
             * @param angle value in radiant, default is `0`
             * @example
             * await expect(element(by.id('PinchableScrollView'))).toBeVisible();
             * await element(by.id('PinchableScrollView')).pinchWithAngle('outward', 'slow', 0);
             * @deprecated Use `.pinch()` instead.
             */
            pinchWithAngle(direction: PinchDirection, speed: Speed, angle: number): Promise<void>;

            /**
             * Pinches with the given scale, speed, and angle. (iOS only)
             * @param speed default is `fast`
             * @param angle value in radiant, default is `0`
             * @example
             * await element(by.id('PinchableScrollView')).pinch(1.1);
             * await element(by.id('PinchableScrollView')).pinch(2.0);
             * await element(by.id('PinchableScrollView')).pinch(0.001);
             */
            pinch(scale: number, speed?: Speed, angle?: number): Promise<void>;

            /**
             * Takes a screenshot of the element and schedules putting it in the artifacts folder upon completion of the current test.
             * For more information, see {@link https://github.com/wix/Detox/blob/master/docs/APIRef.Screenshots.md#element-level-screenshots}
             * @param {string} name for the screenshot artifact
             * @returns {Promise<string>} a temporary path to the screenshot.
             * @example
             * test('Menu items should have logout', async () => {
             *   const imagePath = await element(by.id('menuRoot')).takeScreenshot('tap on menu');
             *   // The temporary path will remain valid until the test completion.
             *   // Afterwards, the screenshot will be moved, e.g.:
             *   // * on success, to: <artifacts-location>/✓ Menu items should have Logout/tap on menu.png
             *   // * on failure, to: <artifacts-location>/✗ Menu items should have Logout/tap on menu.png
             * });
             */
             takeScreenshot(name: string): Promise<string>;
        }

        interface WebExpect<R = Promise<void>> {
            /**
             * Negate the expectation.
             * @example await expect(web.element(by.web.id('UniqueId205'))).not.toExist();
             */
            not: this;

            /**
             * Expect the element content to have the `text` supplied
             * @param text expected to be on the element content
             * @example
             * await expect(web.element(by.web.id('UniqueId205'))).toHaveText('ExactText');
             */
            toHaveText(text: string): R

            /**
             * Expect the view to exist in the webview DOM tree.
             * @example await expect(web.element(by.web.id('UniqueId205'))).toExist();
             */
            toExist(): R;
        }

        interface IndexableWebElement extends WebElement {
            /**
             * Choose from multiple elements matching the same matcher using index
             * @example await web.element(by.web.hrefContains('Details')).atIndex(2).tap();
             */
            atIndex(index: number): WebElement;
        }

        interface WebElement extends WebElementActions {
        }

        interface WebElementActions {
            tap(): Promise<void>

            /**
             * @param text to type
             * @param isContentEditable whether its a ContentEditable element, default is false.
             */
            typeText(text: string, isContentEditable: boolean): Promise<void>

            /**
             * At the moment not working on content-editable
             * @param text to replace with the old content.
             */
            replaceText(text: string): Promise<void>

            /**
             * At the moment not working on content-editable
             */
            clearText(): Promise<void>

            /**
             * scrolling to the view, the element top position will be at the top of the screen.
             */
            scrollToView(): Promise<void>

            /**
             * Gets the input content
             */
            getText(): Promise<string>

            /**
             * Calls the focus function on the element
             */
            focus(): Promise<void>

            /**
             * Selects all the input content, works on ContentEditable at the moment.
             */
            selectAllText(): Promise<void>

            /**
             * Moves the input cursor / caret to the end of the content, works on ContentEditable at the moment.
             */
            moveCursorToEnd(): Promise<void>

            /**
             * Running a script on the element
             * @param script a method that accept the element as its first arg
             * @example function foo(element) { console.log(element); }
             */
            runScript(script: string): Promise<any>

            /**
             * Running a script on the element that accept args
             * @param script a method that accept few args, and the element as the last arg.
             * @param args a list of args to pass to the script
             * @example function foo(a, b, c, element) { console.log(`${a}, ${b}, ${c}, ${element}`)}
             */
            runScriptWithArgs(script: string, args: any[]): Promise<any>;

            /**
             * Gets the current page url
             */
            getCurrentUrl(): Promise<string>;

            /**
             * Gets the current page title
             */
            getTitle(): Promise<string>;
        }

        type Direction = 'left' | 'right' | 'top' | 'bottom' | 'up' | 'down';

        type PinchDirection = 'outward' | 'inward'

        type Orientation = 'portrait' | 'landscape';

        type Speed = 'fast' | 'slow';

        interface LanguageAndLocale {
            language?: string;
            locale?: string;
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
            userTracking?: UserTrackingPermission;
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
        type UserTrackingPermission = PermissionState;

        interface DeviceLaunchAppConfig {
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
             * Arguments to pass-through into the app.
             * Refer to the [dedicated guide](https://github.com/wix/Detox/blob/master/docs/APIRef.LaunchArgs.md) for complete details.
             */
            launchArgs?: Record<string, any>;
            /**
             * Launch config for specifying the native language and locale
             */
            languageAndLocale?: LanguageAndLocale;
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
                 * @example
                 * detoxCircus.getEnv().addEventsListener(adapter)
                 * detoxCircus.getEnv().addEventsListener(assignReporter)
                 */
                addEventsListener(listener: CircusTestEventListenerBase): void
            };
        }
    }
}

declare const detox: Detox.DetoxExportWrapper;
export = detox;