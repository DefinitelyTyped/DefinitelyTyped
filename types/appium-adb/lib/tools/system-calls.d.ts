import { SemVer } from 'semver';
import { SubProcess, ExecOptions } from 'teen_process';

export { DEFAULT_ADB_EXEC_TIMEOUT } from '../helpers';

export interface ConnectedDevicesOptions {
    /**
     * Whether to get long output, which includes extra properties in each device.
     * Akin to running `adb devices -l`.
     */
    verbose?: boolean;
}

export interface Device {
    /** The device udid. */
    udid: string;
    /** Current device state, as it is visible in _adb devices -l_ output. */
    state: string;
}

export interface VerboseDevice extends Device {
    /** The product codename of the device, such as "razor". */
    product: string;
    /** The model name of the device, such as "Nexus_7". */
    model: string;
    /** The device codename, such as "flow". */
    device: string;
    /** Represents the USB port the device is connected to, such as "1-1". */
    usb?: string;
    /** The Transport ID for the device, such as "1". */
    transport_id?: string;
}

export interface AdbExecOptions extends ExecOptions {
    exclusive?: boolean;
    outputFormat?: 'stdout' | 'full' | 'undefined';
}

export interface ExecResult {
    stdout: string;
    stderr: string;
}

export interface ShellExecOptions extends ExecOptions {
    /** @default [falsy] Whether to run the given command as root. */
    privileged?: boolean;
    /** @default [falsy] Whether to keep root mode after command execution is completed. */
    keepPrivileged?: boolean;
}

export interface AvdLaunchOptions {
    /**
     * Additional emulator command line arguments
     */
    args?: string | ReadonlyArray<string>;
    /**
     * Additional emulator environment variables
     */
    env?: Record<string, string>;
    /**
     * Emulator system language
     */
    language?: string;
    /**
     * Emulator system country
     */
    country?: string;
    /**
     * Emulator startup timeout in milliseconds
     * @default 60000
     */
    launchTimeout?: number;
    /**
     * The maximum period of time to wait until Emulator
     * is ready for usage in milliseconds
     * @default 60000
     */
    readyTimeout?: number;
    /**
     * The maximum number of startup retries
     * @default 1
     */
    retryTimes?: number;
}

export interface BinaryVersion {
    /**
     * The ADB binary version number
     */
    version: SemVer;
    /**
     * The ADB binary build number
     */
    build: number;
}

export interface BridgeVersion {
    /**
     * The Android Debug Bridge version number
     */
    version: SemVer;
}

export interface Version {
    /**
     * This version number might not be
     * be present for older ADB releases.
     */
    binary?: BinaryVersion;
    bridge: BridgeVersion;
}

export interface RootResult {
    /**
     * True if the call to root/unroot was successful
     */
    isSuccessful: boolean;
    /**
     * True if the device was already rooted
     */
    wasAlreadyRooted: boolean;
}

export type BinaryName = 'aapt' | 'aapt2' | 'adb' | 'apkanalyzer' | 'apksigner.jar' | 'bundletool' | 'zipalign';

/**
 * Retrieve full path to the given binary.
 * This method does not have cache.
 *
 * @param binaryName - Simple name of a binary file.
 *                              e.g. 'adb', 'android'
 * @return Full path to the given binary. The method tries
 *                  to enumerate all the known locations where the binary
 *                  might be located and stops the search as soon as the first
 *                  match is found on the local file system.
 *                  e.g. '/Path/To/Android/sdk/platform-tools/adb'
 * @throws If the binary with given name is not present at any
 *                 of known locations or Android SDK is not installed on the
 *                 local file system.
 */
export function getAndroidBinaryPath(binaryName: string): Promise<string>;

declare const systemCallMethods: SystemCalls;
export default systemCallMethods;

interface SystemCalls {
    EXEC_OUTPUT_FORMAT: {
        readonly STDOUT: 'stdout';
        readonly FULL: 'full';
    };

    /**
     * Retrieve full path to the given binary.
     *
     * @param binaryName - The name of the binary.
     * @return Full path to the given binary including current SDK root.
     */
    getSdkBinaryPath(binaryName: string): Promise<string>;

    /**
     * Retrieve full binary name for the current operating system.
     *
     * @param binaryName - simple binary name, for example 'android'.
     * @return Formatted binary name depending on the current platform,
     *                  for example, 'android.bat' on Windows.
     */
    getBinaryNameForOS(binaryName: string): string;

    /**
     * Retrieve full path to the given binary.
     *
     * @param binaryName - Simple name of a binary file.
     * @return Full path to the given binary. The method tries
     *                  to enumerate all the known locations where the binary
     *                  might be located and stops the search as soon as the first
     *                  match is found on the local file system.
     * @throws If the binary with given name is not present at any
     *                 of known locations or Android SDK is not installed on the
     *                 local file system.
     */
    getBinaryFromSdkRoot(binaryName: BinaryName): Promise<string>;

    /**
     * Retrieve full path to a binary file using the standard system lookup tool.
     *
     * @param binaryName - The name of the binary.
     * @return Full path to the binary received from 'which'/'where'
     *                  output.
     * @throws If lookup tool returns non-zero return code.
     */
    getBinaryFromPath(binaryName: string): Promise<string>;

    /**
     * Retrieve the list of devices visible to adb.
     *
     * @return The list of devices or an empty list if
     *                          no devices are connected.
     * @throws If there was an error while listing devices.
     */
    getConnectedDevices(opts: ConnectedDevicesOptions & { verbose: true }): Promise<VerboseDevice[]>;
    getConnectedDevices(opts?: ConnectedDevicesOptions): Promise<Device[]>;

    /**
     * Retrieve the list of devices visible to adb within the given timeout.
     *
     * @param timeoutMs - The maximum number of milliseconds to get at least
     *                             one list item.
     * @return The list of connected devices.
     * @throws If no connected devices can be detected within the given timeout.
     */
    getDevicesWithRetry(timeoutMs?: number): Promise<Device[]>;

    /**
     * Kick current connection from host/device side and make it reconnect
     *
     * @param target [offline] One of possible targets to reconnect:
     * offline, device or null
     * Providing `null` will cause reconnection to happen from the host side.
     *
     * @throws If either ADB version is too old and does not support this
     * command or there was a failure during reconnect.
     */
    reconnect(target?: 'offline' | 'device' | 'null'): Promise<void>;

    /**
     * Restart adb server, unless _this.suppressKillServer_ property is true.
     */
    restartAdb(): Promise<void>;

    /**
     * Kill adb server.
     */
    killServer(): Promise<void>;

    /**
     * Reset Telnet authentication token.
     * @see {@link http://tools.android.com/recent/emulator2516releasenotes} for more details.
     *
     * @returns If token reset was successful.
     */
    resetTelnetAuthToken(): Promise<boolean>;

    /**
     * Execute the given emulator command using _adb emu_ tool.
     *
     * @param cmd - The array of rest command line parameters.
     */
    adbExecEmu(cmd: ReadonlyArray<string>): Promise<void>;

    /**
     * Execute the given adb command.
     *
     * @param cmd - The array of rest command line parameters
     *                      or a single string parameter.
     * @param opts - Additional options mapping. See
     *                        {@link https://github.com/appium/node-teen_process}
     *                        for more details.
     * @return - Command's stdout.
     * @throws If the command returned non-zero exit code.
     */
    adbExec(cmd: ReadonlyArray<string>, opts?: AdbExecOptions & { outputFormat: 'full' }): Promise<ExecResult>;
    adbExec(cmd: ReadonlyArray<string>, opts?: AdbExecOptions): Promise<string>;

    /**
     * Execute the given command using _adb shell_ prefix.
     *
     * @param cmd - The array of rest command line parameters or a single
     *                                      string parameter.
     * @param opts [{}] - Additional options mapping.
     * @return - Command's stdout.
     * @throws If the command returned non-zero exit code.
     */
    shell(cmd: string | ReadonlyArray<string>, opts?: ShellExecOptions): Promise<string>;

    createSubProcess(args?: ReadonlyArray<string>): SubProcess;

    /**
     * Retrieve the current adb port.
     * @todo can probably deprecate this now that the logic is just to read this.adbPort
     * @return The current adb port number.
     */
    getAdbServerPort(): number;

    /**
     * Retrieve the current emulator port from _adb devives_ output.
     *
     * @return The current emulator port.
     * @throws If there are no connected devices.
     */
    getEmulatorPort(): Promise<number>;

    /**
     * Retrieve the current emulator port by parsing emulator name string.
     *
     * @param emStr - Emulator name string.
     * @return Either the current emulator port or
     *                          _false_ if port number cannot be parsed.
     */
    getPortFromEmulatorString(emStr: string): number | false;

    /**
     * Retrieve the list of currently connected emulators.
     *
     * @return The list of connected devices.
     */
    getConnectedEmulators(): Promise<Device[]>;

    /**
     * Set _emulatorPort_ property of the current class.
     *
     * @param emPort - The emulator port to be set.
     */
    setEmulatorPort(emPort: number): void;

    /**
     * Set the identifier of the current device (_this.curDeviceId_).
     *
     * @param - The device identifier.
     */
    setDeviceId(deviceId: string): void;

    /**
     * Set the the current device object.
     *
     * @param deviceObj - The device object to be set.
     */
    setDevice(deviceObj: Device): void;

    /**
     * Get the object for the currently running emulator.
     *
     * @param avdName - Emulator name.
     * @return Currently running emulator or _null_.
     */
    getRunningAVD(avdName: string): Promise<Device | null>;

    /**
     * Get the object for the currently running emulator.
     *
     * @param avdName - Emulator name.
     * @param timeoutMs [20000] - The maximum number of milliseconds
     *                                     to wait until at least one running AVD object
     *                                     is detected.
     * @return Currently running emulator or _null_.
     * @throws If no device has been detected within the timeout.
     */
    getRunningAVDWithRetry(avdName: string, timeoutMs?: number): Promise<Device | null>;

    /**
     * Shutdown all running emulators by killing their processes.
     *
     * @throws If killing tool returned non-zero return code.
     */
    killAllEmulators(): Promise<void>;

    /**
     * Kill emulator with the given name. No error
     * is thrown is given avd does not exist/is not running.
     *
     * @param avdName - The name of the emulator to be killed. If empty,
     *                            the current emulator will be killed.
     * @param timeout [60000] - The amount of time to wait before throwing
     *                                    an exception about unsuccessful killing
     * @return - True if the emulator was killed, false otherwise.
     * @throws if there was a failure by killing the emulator
     */
    killEmulator(avdName?: string | null, timeout?: number): Promise<boolean>;

    /**
     * Start an emulator with given parameters and wait until it is full started.
     *
     * @param avdName - The name of an existing emulator.
     * @param opts
     * @returns Emulator subprocess instance
     * @throws If the emulator fails to start within the given timeout.
     */
    launchAVD(avdName: string, opts?: AvdLaunchOptions): Promise<SubProcess>;

    /**
     * Get the adb version. The result of this method is cached.
     *
     * @return The current adb version.
     * @throws If it is not possible to parse adb version.
     */
    getVersion(): Promise<Version>;

    /**
     * Check if the current emulator is ready to accept further commands (booting completed).
     *
     * @param timeoutMs [20000] - The maximum number of milliseconds to wait.
     * @throws If the emulator is not ready within the given timeout.
     */
    waitForEmulatorReady(timeoutMs?: number): Promise<void>;

    /**
     * Check if the current device is ready to accept further commands (booting completed).
     *
     * @param appDeviceReadyTimeout [30] - The maximum number of seconds to wait.
     * @throws If the device is not ready within the given timeout.
     */
    waitForDevice(appDeviceReadyTimeout?: number): Promise<void>;

    /**
     * Reboot the current device and wait until it is completed.
     *
     * @param retries [DEFAULT_ADB_REBOOT_RETRIES] - The maximum number of reboot retries.
     * @throws If the device failed to reboot and number of retries is exceeded.
     */
    reboot(retries?: number): Promise<void>;

    /**
     * Switch adb server root privileges.
     * @param isElevated - Should we elevate to to root or unroot? (default true)
     */
    changeUserPrivileges(isElevated: boolean): Promise<RootResult>;

    /**
     * Switch adb server to root mode.
     */
    root(): Promise<RootResult>;

    /**
     * Switch adb server to non-root mode.
     */
    unroot(): Promise<RootResult>;

    /**
     * Checks whether the current user is root
     *
     * @return True if the user is root
     * @throws if there was an error while identifying
     * the user.
     */
    isRoot(): Promise<boolean>;

    /**
     * Verify whether a remote path exists on the device under test.
     *
     * @param remotePath - The remote path to verify.
     * @return True if the given path exists on the device.
     */
    fileExists(remotePath: string): Promise<boolean>;

    /**
     * Get the output of _ls_ command on the device under test.
     *
     * @param remotePath - The remote path (the first argument to the _ls_ command).
     * @param opts [[]] - Additional _ls_ options.
     * @return The _ls_ output as an array of split lines.
     *                          An empty array is returned of the given _remotePath_
     *                          does not exist.
     */
    ls(remotePath: string, opts?: ReadonlyArray<string>): Promise<string[]>;

    /**
     * Get the size of the particular file located on the device under test.
     *
     * @param remotePath - The remote path to the file.
     * @return File size in bytes.
     * @throws If there was an error while getting the size of the given file.
     */
    fileSize(remotePath: string): Promise<number>;

    /**
     * Installs the given certificate on a rooted real device or
     * an emulator. The emulator must be executed with `-writable-system`
     * command line option and adb daemon should be running in root
     * mode for this method to work properly. The method also requires
     * openssl tool to be available on the destination system.
     * Read https://github.com/appium/appium/issues/10964
     * for more details on this topic
     *
     * @param cert - base64-decoded content of the actual certificate
     * represented as a string or a buffer
     * @throws If openssl tool is not available on the destination system
     * or if there was an error while installing the certificate
     */
    installMitmCertificate(cert: Buffer | string): Promise<void>;

    /**
     * Verifies if the given root certificate is already installed on the device.
     *
     * @param cert - base64-decoded content of the actual certificate
     * represented as a string or a buffer
     * @throws If openssl tool is not available on the destination system
     * or if there was an error while checking the certificate
     * @returns true if the given certificate is already installed
     */
    isMitmCertificateInstalled(cert: Buffer | string): Promise<boolean>;
}
