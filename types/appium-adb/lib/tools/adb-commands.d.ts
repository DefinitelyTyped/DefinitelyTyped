import { SubProcess, ExecOptions } from 'teen_process';
import { LogcatOpts, Log } from '../logcat';

export { LogcatOpts };

export interface SetPropOptions {
    /**
     * Do we run setProp as a privileged command?
     * @default true
     */
    privileged?: boolean | undefined;
}

export interface ScreenrecordOptions {
    /**
     * The format is widthxheight.
     * The default value is the device's native display resolution (if supported),
     * 1280x720 if not. For best results,
     * use a size supported by your device's Advanced Video Coding (AVC) encoder.
     * For example, "1280x720"
     */
    videoSize?: string;
    /**
     * Set it to `true` in order to display additional information on the video overlay,
     * such as a timestamp, that is helpful in videos captured to illustrate bugs.
     * This option is only supported since API level 27 (Android P).
     * @default false
     */
    bugReport?: boolean | undefined;
    /**
     * The maximum recording time, in seconds.
     * The default (and maximum) value is 180 (3 minutes).
     * @default 180
     */
    timeLimit?: string | number | undefined;
    /**
     * The video bit rate for the video, in megabits per second.
     * You can increase the bit rate to improve video quality,
     * but doing so results in larger movie files.
     * @default 4
     */
    bitRate?: string | number | undefined;
}

declare const methods: AdbCommands;
export default methods;

interface AdbCommands {
    /**
     * Creates chunks for the given arguments and executes them in `adb shell`.
     * This is faster than calling `adb shell` separately for each arg, however
     * there is a limit for a maximum length of a single adb command. that is why
     * we need all this complicated logic.
     *
     * @param argTransformer A function, that receives single argument
     * from the `args` array and transforms it into a shell command. The result
     * of the function must be an array, where each item is a part of a single command.
     * The last item of the array could be ';'. If this is not a semicolon then it is going to
     * be added automatically.
     * @param args Array of argument values to create chunks for
     * @throws If any of the chunks returns non-zero exit code after being executed
     */
    shellChunks<A extends number | string>(
        argTransformer: (arg: A) => ReadonlyArray<string>,
        args: ReadonlyArray<A>,
    ): Promise<void>;

    /**
     * Get the path to adb executable and assign it
     * to this.executable.path and this.binaries.adb properties.
     *
     * @return ADB instance.
     */
    getAdbWithCorrectAdbPath(): Promise<void>;

    /**
     * Get the full path to aapt tool and assign it to
     * this.binaries.aapt property
     */
    initAapt(): Promise<void>;

    /**
     * Get the full path to aapt2 tool and assign it to
     * this.binaries.aapt2 property
     */
    initAapt2(): Promise<void>;

    /**
     * Get the full path to zipalign tool and assign it to
     * this.binaries.zipalign property
     */
    initZipAlign(): Promise<void>;

    /**
     * Get the full path to bundletool binary and assign it to
     * this.binaries.bundletool property
     */
    initBundletool(): Promise<void>;

    /**
     * Retrieve the API level of the device under test.
     *
     * @return The API level as integer number, for example 21 for
     *                  Android Lollipop. The result of this method is cached, so all the further
     * calls return the same value as the first one.
     */
    getApiLevel(): Promise<number>;

    /**
     * Retrieve the platform version of the device under test.
     *
     * @return The platform version as a string, for example '5.0' for
     * Android Lollipop.
     */
    getPlatformVersion(): Promise<string>;

    /**
     * Verify whether a device is connected.
     *
     * @return True if at least one device is visible to adb.
     */
    isDeviceConnected(): Promise<boolean>;

    /**
     * Recursively create a new folder on the device under test.
     *
     * @param remotePath - The new path to be created.
     * @return mkdir command output.
     */
    mkdir(remotePath: string): Promise<string>;

    /**
     * Verify whether the given argument is a
     * valid class name.
     *
     * @param classString - The actual class name to be verified.
     * @return The result of Regexp.exec operation
     *                          or _null_ if no matches are found.
     */
    isValidClass(classString: string): RegExpExecArray | null;

    /**
     * Force application to stop on the device under test.
     *
     * @param pkg - The package name to be stopped.
     * @return The output of the corresponding adb command.
     */
    forceStop(pkg: string): Promise<string>;

    /**
     * Kill application
     *
     * @param pkg - The package name to be stopped.
     * @return The output of the corresponding adb command.
     */
    killPackage(pkg: string): Promise<string>;

    /**
     * Clear the user data of the particular application on the device
     * under test.
     *
     * @param pkg - The package name to be cleared.
     * @return The output of the corresponding adb command.
     */
    clear(pkg: string): Promise<string>;

    /**
     * Grant all permissions requested by the particular package.
     * This method is only useful on Android 6.0+ and for applications
     * that support components-based permissions setting.
     *
     * @param pkg - The package name to be processed.
     * @param apk - The path to the actual apk file.
     * @throws If there was an error while granting permissions
     */
    grantAllPermissions(pkg: string, apk: string): Promise<void>;

    /**
     * Grant multiple permissions for the particular package.
     * This call is more performant than `grantPermission` one, since it combines
     * multiple `adb shell` calls into a single command.
     *
     * @param pkg - The package name to be processed.
     * @param permissions - The list of permissions to be granted.
     * @throws If there was an error while changing permissions.
     */
    grantPermissions(pkg: string, permissions: ReadonlyArray<string>): Promise<void>;

    /**
     * Grant single permission for the particular package.
     *
     * @param pkg - The package name to be processed.
     * @param permission - The full name of the permission to be granted.
     * @throws If there was an error while changing permissions.
     */
    grantPermission(pkg: string, permission: string): Promise<void>;

    /**
     * Revoke single permission from the particular package.
     *
     * @param pkg - The package name to be processed.
     * @param permission - The full name of the permission to be revoked.
     * @throws If there was an error while changing permissions.
     */
    revokePermission(pkg: string, permission: string): Promise<void>;

    /**
     * Retrieve the list of granted permissions for the particular package.
     *
     * @param pkg - The package name to be processed.
     * @param cmdOutput [null] - Optional parameter containing command output of
     *                                    _dumpsys package_ command. It may speed up the method execution.
     * @return The list of granted permissions or an empty list.
     * @throws If there was an error while changing permissions.
     */
    getGrantedPermissions(pkg: string, cmdOutput?: string | null): Promise<string[]>;

    /**
     * Retrieve the list of denied permissions for the particular package.
     *
     * @param pkg - The package name to be processed.
     * @param cmdOutput [null] - Optional parameter containing command output of
     *                                    _dumpsys package_ command. It may speed up the method execution.
     * @return The list of denied permissions or an empty list.
     */
    getDeniedPermissions(pkg: string, cmdOutput?: string | null): Promise<string[]>;

    /**
     * Retrieve the list of requested permissions for the particular package.
     *
     * @param pkg - The package name to be processed.
     * @param cmdOutput [null] - Optional parameter containing command output of
     *                                    _dumpsys package_ command. It may speed up the method execution.
     * @return The list of requested permissions or an empty list.
     */
    getReqPermissions(pkg: string, cmdOutput?: string | null): Promise<string[]>;

    /**
     * Retrieve the list of location providers for the device under test.
     *
     * @return The list of available location providers or an empty list.
     */
    getLocationProviders(): Promise<string[]>;

    /**
     * Toggle the state of GPS location provider.
     *
     * @param enabled - Whether to enable (true) or disable (false) the GPS provider.
     */
    toggleGPSLocationProvider(enabled: boolean): Promise<void>;

    /**
     * Set hidden api policy to manage access to non-SDK APIs.
     * https://developer.android.com/preview/restrictions-non-sdk-interfaces
     *
     * @param value - The API enforcement policy.
     * ### For Android P
     * - 0: Disable non-SDK API usage detection. This will also disable logging, and also break the strict mode API,
     *      detectNonSdkApiUsage(). Not recommended.
     * - 1: "Just warn" - permit access to all non-SDK APIs, but keep warnings in the log.
     *      The strict mode API will keep working.
     * - 2: Disallow usage of dark grey and black listed APIs.
     * - 3: Disallow usage of blacklisted APIs, but allow usage of dark grey listed APIs.
     *
     * ### For Android Q
     * https://developer.android.com/preview/non-sdk-q#enable-non-sdk-access
     * - 0: Disable all detection of non-SDK interfaces. Using this setting disables all log messages for non-SDK interface usage
     *      and prevents you from testing your app using the StrictMode API. This setting is not recommended.
     * - 1: Enable access to all non-SDK interfaces, but print log messages with warnings for any non-SDK interface usage.
     *      Using this setting also allows you to test your app using the StrictMode API.
     * - 2: Disallow usage of non-SDK interfaces that belong to either the black list
     *      or to a restricted greylist for your target API level.
     *
     * @param ignoreError [false] Whether to ignore an exception in 'adb shell settings put global' command
     * @throws If there was an error and ignoreError was true while executing 'adb shell settings put global'
     *                 command on the device under test.
     */
    setHiddenApiPolicy(value: number | string, ignoreError?: boolean): Promise<void>;

    /**
     * Reset access to non-SDK APIs to its default setting.
     * https://developer.android.com/preview/restrictions-non-sdk-interfaces
     *
     * @param ignoreError [false] Whether to ignore an exception in 'adb shell settings delete global' command
     * @throws If there was an error and ignoreError was true while executing 'adb shell settings delete global'
     *                 command on the device under test.
     */
    setDefaultHiddenApiPolicy(ignoreError?: boolean): Promise<void>;

    /**
     * Stop the particular package if it is running and clears its application data.
     *
     * @param pkg - The package name to be processed.
     */
    stopAndClear(pkg: string): Promise<void>;

    /**
     * Retrieve the list of available input methods (IMEs) for the device under test.
     *
     * @return The list of IME names or an empty list.
     */
    availableIMEs(): Promise<string[]>;

    /**
     * Retrieve the list of enabled input methods (IMEs) for the device under test.
     *
     * @return The list of enabled IME names or an empty list.
     */
    enabledIMEs(): Promise<string[]>;

    /**
     * Enable the particular input method on the device under test.
     *
     * @param imeId - One of existing IME ids.
     */
    enableIME(imeId: string): Promise<void>;

    /**
     * Disable the particular input method on the device under test.
     *
     * @param imeId - One of existing IME ids.
     */
    disableIME(imeId: string): Promise<void>;

    /**
     * Set the particular input method on the device under test.
     *
     * @param imeId - One of existing IME ids.
     */
    setIME(imeId: string): Promise<void>;

    /**
     * Get the default input method on the device under test.
     *
     * @return The name of the default input method.
     */
    defaultIME(): Promise<string | null>;

    /**
     * Send the particular keycode to the device under test.
     *
     * @param keycode - The actual key code to be sent.
     */
    keyevent(keycode: string | number): Promise<void>;

    /**
     * Send the particular text to the device under test.
     *
     * @param text - The actual text to be sent.
     */
    inputText(text: string): Promise<void>;

    /**
     * Clear the active text field on the device under test by sending
     * special keyevents to it.
     *
     * @param length [100] - The maximum length of the text in the field to be cleared.
     */
    clearTextField(length?: number): Promise<void>;

    /**
     * Send the special keycode to the device under test in order to lock it.
     */
    lock(): Promise<void>;

    /**
     * Send the special keycode to the device under test in order to emulate
     * Back button tap.
     */
    back(): Promise<void>;

    /**
     * Send the special keycode to the device under test in order to emulate
     * Home button tap.
     */
    goToHome(): Promise<void>;

    /**
     * @return the actual path to adb executable.
     */
    getAdbPath(): string;

    /**
     * Retrieve current screen orientation of the device under test.
     *
     * @return The current orientation encoded as an integer number.
     */
    getScreenOrientation(): Promise<number>;

    /**
     * Retrieve the screen lock state of the device under test.
     *
     * @return True if the device is locked.
     */
    isScreenLocked(): Promise<boolean>;

    /**
     * Send an arbitrary Telnet command to the device under test.
     *
     * @param command - The command to be sent.
     *
     * @return The actual output of the given command.
     */
    sendTelnetCommand(command: string): Promise<string>;

    /**
     * Check the state of Airplane mode on the device under test.
     *
     * @return True if Airplane mode is enabled.
     */
    isAirplaneModeOn(): Promise<boolean>;

    /**
     * Change the state of Airplane mode in Settings on the device under test.
     *
     * @param on - True to enable the Airplane mode in Settings and false to disable it.
     */
    setAirplaneMode(on: boolean): Promise<void>;

    /**
     * Broadcast the state of Airplane mode on the device under test.
     * This method should be called after {@link #setAirplaneMode}, otherwise
     * the mode change is not going to be applied for the device.
     *
     * @param on - True to broadcast enable and false to broadcast disable.
     */
    broadcastAirplaneMode(on: boolean): Promise<void>;

    /**
     * Check the state of WiFi on the device under test.
     *
     * @return True if WiFi is enabled.
     */
    isWifiOn(): Promise<boolean>;

    /**
     * Check the state of Data transfer on the device under test.
     *
     * @return True if Data transfer is enabled.
     */
    isDataOn(): Promise<boolean>;

    /**
     * Change the state of Data transfer on the device under test.
     *
     * @param on - True to enable and false to disable it.
     * @param isEmulator [false] - Set it to true if the device under test
     *                                       is an emulator rather than a real device.
     */
    setDataState(on: boolean, isEmulator?: boolean): Promise<void>;

    /**
     * Change the state of WiFi and/or Data transfer on the device under test.
     *
     * @param wifi - True to enable and false to disable WiFi.
     * @param data - True to enable and false to disable Data transfer.
     * @param isEmulator [false] - Set it to true if the device under test
     *                                       is an emulator rather than a real device.
     */
    setWifiAndData(
        options: { wifi?: boolean | undefined; data?: boolean | undefined },
        isEmulator?: boolean,
    ): Promise<void>;

    /**
     * Check the state of animation on the device under test.
     *
     * @return True if at least one of animation scale settings
     *                   is not equal to '0.0'.
     */
    isAnimationOn(): Promise<boolean>;

    /**
     * Forcefully recursively remove a path on the device under test.
     * Be careful while calling this method.
     *
     * @param path - The path to be removed recursively.
     */
    rimraf(path: string): Promise<void>;

    /**
     * Send a file to the device under test.
     *
     * @param localPath - The path to the file on the local file system.
     * @param remotePath - The destination path on the remote device.
     * @param opts - Additional options mapping. See
     *                        https://github.com/appium/node-teen_process,
     *                        _exec_ method options, for more information about available
     *                        options.
     */
    push(localPath: string, remotePath: string, opts?: ExecOptions): Promise<void>;

    /**
     * Receive a file from the device under test.
     *
     * @param remotePath - The source path on the remote device.
     * @param localPath - The destination path to the file on the local file system.
     * @param opts - Additional options mapping. See
     *                        https://github.com/appium/node-teen_process,
     *                        _exec_ method options, for more information about available
     *                        options.
     */
    pull(remotePath: string, localPath: string, opts?: ExecOptions): Promise<void>;

    /**
     * Check whether the process with the particular name is running on the device
     * under test.
     *
     * @param processName - The name of the process to be checked.
     * @return True if the given process is running.
     * @throws If the given process name is not a valid class name.
     */
    processExists(processName: string): Promise<boolean>;

    /**
     * Get TCP port forwarding with adb on the device under test.
     * @return The output of the corresponding adb command. An array contains each forwarding line of output
     */
    getForwardList(): Promise<string[]>;

    /**
     * Setup TCP port forwarding with adb on the device under test.
     *
     * @param systemPort - The number of the local system port.
     * @param devicePort - The number of the remote device port.
     */
    forwardPort(systemPort: string | number, devicePort: string | number): Promise<void>;

    /**
     * Remove TCP port forwarding with adb on the device under test. The forwarding
     * for the given port should be setup with {@link #forwardPort} first.
     *
     * @param systemPort - The number of the local system port
     *                                     to remove forwarding on.
     */
    removePortForward(systemPort: string | number): Promise<void>;

    /**
     * Get TCP port forwarding with adb on the device under test.
     * @return The output of the corresponding adb command. An array contains each forwarding line of output
     */
    getReverseList(): Promise<string[]>;

    /**
     * Setup TCP port forwarding with adb on the device under test.
     * Only available for API 21+.
     *
     * @param devicePort - The number of the remote device port.
     * @param systemPort - The number of the local system port.
     */
    reversePort(devicePort: string | number, systemPort: string | number): Promise<void>;

    /**
     * Remove TCP port forwarding with adb on the device under test. The forwarding
     * for the given port should be setup with {@link #forwardPort} first.
     *
     * @param devicePort - The number of the remote device port
     *                                     to remove forwarding on.
     */
    removePortReverse(devicePort: string | number): Promise<void>;

    /**
     * Setup TCP port forwarding with adb on the device under test. The difference
     * between {@link #forwardPort} is that this method does setup for an abstract
     * local port.
     *
     * @param systemPort - The number of the local system port.
     * @param devicePort - The number of the remote device port.
     */
    forwardAbstractPort(systemPort: string | number, devicePort: string | number): Promise<void>;

    /**
     * Execute ping shell command on the device under test.
     *
     * @return True if the command output contains 'ping' substring.
     * @throws If there was an error while executing 'ping' command on the
     *                 device under test.
     */
    ping(): Promise<boolean>;

    /**
     * Restart the device under test using adb commands.
     *
     * @throws If start fails.
     */
    restart(): Promise<void>;

    /**
     * Start the logcat process to gather logs.
     *
     * @throws If restart fails.
     */
    startLogcat(opts?: LogcatOpts): Promise<void>;

    /**
     * Stop the active logcat process which gathers logs.
     * The call will be ignored if no logcat process is running.
     */
    stopLogcat(): Promise<void>;

    /**
     * Retrieve the output from the currently running logcat process.
     * The logcat process should be executed by {2link #startLogcat} method.
     *
     * @return The collected logcat output.
     * @throws If logcat process is not running.
     */
    getLogcatLogs(): Log[];

    /**
     * Set the callback for the logcat output event.
     *
     * @param listener - The listener function, which accepts one argument. The argument is
     *                              a log record object with `timestamp`, `level` and `message` properties.
     * @throws If logcat process is not running.
     */
    setLogcatListener(listener: (outputObj: Log) => void): void;

    /**
     * Removes the previously set callback for the logcat output event.
     *
     * @param listener - The listener function, which has been previously
     *                              passed to `setLogcatListener`
     * @throws If logcat process is not running.
     */
    removeLogcatListener(listener: (outputObj: Log) => void): void;

    /**
     * At some point of time Google has changed the default `ps` behaviour, so it only
     * lists processes that belong to the current shell user rather to all
     * users. It is necessary to execute ps with -A command line argument
     * to mimic the previous behaviour.
     *
     * @returns the output of `ps` command where all processes are included
     */
    listProcessStatus(): Promise<string>;

    /**
     * Returns process name for the given process identifier
     *
     * @param pid - The valid process identifier
     * @throws If the given PID is either invalid or is not present
     * in the active processes list
     * @returns The process name
     */
    getNameByPid(pid: string | number): Promise<string>;

    /**
     * Get the list of process ids for the particular process on the device under test.
     *
     * @param name - The part of process name.
     * @return The list of matched process IDs or an empty list.
     * @throws If the passed process name is not a valid one
     */
    getPIDsByName(name: string): Promise<number[]>;

    /**
     * Get the list of process ids for the particular process on the device under test.
     *
     * @param name - The part of process name.
     * @return The list of matched process IDs or an empty list.
     */
    killProcessesByName(name: string): Promise<void>;

    /**
     * Kill the particular process on the device under test.
     * The current user is automatically switched to root if necessary in order
     * to properly kill the process.
     *
     * @param pid - The ID of the process to be killed.
     * @throws If the process cannot be killed.
     */
    killProcessByPID(pid: string | number): Promise<void>;

    /**
     * Broadcast process killing on the device under test.
     *
     * @param intent - The name of the intent to broadcast to.
     * @param processName - The name of the killed process.
     * @throws If the process was not killed.
     */
    broadcastProcessEnd(intent: string, processName: string): Promise<void>;

    /**
     * Broadcast a message to the given intent.
     *
     * @param intent - The name of the intent to broadcast to.
     * @throws If intent name is not a valid class name.
     */
    broadcast(intent: string): Promise<void>;

    /**
     * Kill Android instruments if they are currently running.
     */
    endAndroidCoverage(): Promise<void>;

    /**
     * Instrument the particular activity.
     *
     * @param pkg - The name of the package to be instrumented.
     * @param activity - The name of the main activity in this package.
     * @param instrumentWith - The name of the package to instrument
     *                                  the activity with.
     * @throws If any exception is reported by adb shell.
     */
    instrument(pkg: string, activity: string, instrumentWith: string): Promise<void>;

    /**
     * Collect Android coverage by instrumenting the particular activity.
     *
     * @param instrumentClass - The name of the instrumentation class.
     * @param waitPkg - The name of the package to be instrumented.
     * @param waitActivity - The name of the main activity in this package.
     *
     * @return The promise is successfully resolved if the instrumentation starts
     *                   without errors.
     */
    androidCoverage(instrumentClass: string, waitPkg: string, waitActivity: string): Promise<void>;

    /**
     * Get the particular property of the device under test.
     *
     * @param property - The name of the property. This name should
     *                            be known to _adb shell getprop_ tool.
     *
     * @return The value of the given property.
     */
    getDeviceProperty(property: string): Promise<string>;

    /**
     * Set the particular property of the device under test.
     *
     * @param property - The name of the property. This name should
     *                            be known to _adb shell setprop_ tool.
     * @param val - The new property value.
     *
     * @throws If _setprop_ utility fails to change property value.
     */
    setDeviceProperty(prop: string, val: string, opts?: SetPropOptions): Promise<void>;

    /**
     * @return Current system language on the device under test.
     */
    getDeviceSysLanguage(): Promise<string>;

    /**
     * @return Current country name on the device under test.
     */
    getDeviceSysCountry(): Promise<string>;

    /**
     * @return Current system locale name on the device under test.
     */
    getDeviceSysLocale(): Promise<string>;

    /**
     * @return Current product language name on the device under test.
     */
    getDeviceProductLanguage(): Promise<string>;

    /**
     * @return Current product country name on the device under test.
     */
    getDeviceProductCountry(): Promise<string>;

    /**
     * @return Current product locale name on the device under test.
     */
    getDeviceProductLocale(): Promise<string>;

    /**
     * @return The model name of the device under test.
     */
    getModel(): Promise<string>;

    /**
     * @return The manufacturer name of the device under test.
     */
    getManufacturer(): Promise<string>;

    /**
     * Get the current screen size.
     *
     * @return Device screen size as string in format 'WxH' or
     *                  _null_ if it cannot be determined.
     */
    getScreenSize(): Promise<string | null>;

    /**
     * Get the current screen density in dpi
     *
     * @return Device screen density as a number or _null_ if it
     *                  cannot be determined
     */
    getScreenDensity(): Promise<number | null>;

    /**
     * Setup HTTP proxy in device global settings.
     * Read https://android.googlesource.com/platform/frameworks/base/+/android-9.0.0_r21/core/java/android/provider/Settings.java for each property
     *
     * @param proxyHost - The host name of the proxy.
     * @param proxyPort - The port number to be set.
     */
    setHttpProxy(proxyHost: string, proxyPort: string | number): Promise<void>;

    /**
     * Delete HTTP proxy in device global settings.
     * Rebooting the test device is necessary to apply the change.
     */
    deleteHttpProxy(): Promise<void>;

    /**
     * Set device property.
     * [android.provider.Settings]{@link https://developer.android.com/reference/android/provider/Settings.html}
     *
     * @param namespace - one of {system, secure, global}, case-insensitive.
     * @param setting - property name.
     * @param value - property value.
     * @return command output.
     */
    setSetting(namespace: string, setting: string, value: string | number): Promise<string>;

    /**
     * Get device property.
     * [android.provider.Settings]{@link https://developer.android.com/reference/android/provider/Settings.html}
     *
     * @param namespace - one of {system, secure, global}, case-insensitive.
     * @param setting - property name.
     * @return property value.
     */
    getSetting(namespace: string, setting: string): Promise<string>;

    /**
     * Retrieve the `adb bugreport` command output. This
     * operation may take up to several minutes.
     *
     * @param timeout [120000] - Command timeout in milliseconds
     * @returns Command stdout
     */
    bugreport(timeout?: number): Promise<string>;

    /**
     * Initiate screenrecord utility on the device
     *
     * @param destination - Full path to the writable media file destination
     *                               on the device file system.
     * @param options [{}]
     * @returns screenrecord process, which can be then controlled by the client code
     */
    screenrecord(destination: string, options?: ScreenrecordOptions): SubProcess;

    /**
     * Executes the given function with the given input method context
     * and then restores the IME to the original value
     *
     * @param ime - Valid IME identifier
     * @param fn - Function to execute
     */
    runInImeContext<T>(ime: string, fn: () => Promise<T>): Promise<T>;

    /**
     * Get tz database time zone formatted timezone
     *
     * @returns TZ database Time Zones format
     *
     * @throws If any exception is reported by adb shell.
     */
    getTimeZone(): Promise<string>;

    /**
     * Retrieves the list of features supported by the device under test
     *
     * @returns the list of supported feature names or an empty list.
     * @example
     * ['cmd',
     * 'ls_v2',
     * 'fixed_push_mkdir',
     * 'shell_v2',
     * 'abb',
     * 'stat_v2',
     * 'apex',
     * 'abb_exec',
     * 'remount_shell',
     * 'fixed_push_symlink_timestamp']
     * ```
     * @throws if there was an error while retrieving the list
     */
    listFeatures(): Promise<string[]>;

    /**
     * Checks the state of streamed install feature.
     * This feature allows to speed up apk installation
     * since it does not require the original apk to be pushed to
     * the device under test first, which also saves space.
     * Although, it is required that both the device under test
     * and the adb server have the mentioned functionality.
     * See https://github.com/aosp-mirror/platform_system_core/blob/master/adb/client/adb_install.cpp
     * for more details
     *
     * @returns `true` if the feature is supported by both adb and the
     * device under test
     */
    isStreamedInstallSupported(): Promise<boolean>;

    /**
     * Checks whether incremental install feature is supported by ADB.
     * Read https://developer.android.com/preview/features#incremental
     * for more details on it.
     *
     * @returns `true` if the feature is supported by both adb and the
     * device under test
     */
    isIncrementalInstallSupported(): Promise<boolean>;

    /**
     * Retrieves the list of packages from Doze whitelist on Android 8+
     *
     * @returns The list of whitelisted packages. An example output:
     * system,com.android.shell,2000
     * system,com.google.android.cellbroadcastreceiver,10143
     * user,io.appium.settings,10157
     */
    getDeviceIdleWhitelist(): Promise<string[]>;

    /**
     * Adds an existing package(s) into the Doze whitelist on Android 8+
     *
     * @param  packages One or more packages to add. If the package
     * already exists in the whitelist then it is only going to be added once.
     * If the package with the given name is not installed/not known then an error
     * will be thrown.
     * @returns `true` if the command to add package(s) has been executed
     */
    addToDeviceIdleWhitelist(...packages: string[]): Promise<boolean>;
}
