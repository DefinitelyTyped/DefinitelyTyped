import { StartAppOptions } from './tools/apk-utils';
import systemCallMethods from './tools/system-calls';

export const rootDir: string;
export const APKS_EXTENSION: '.apks';
export const APK_EXTENSION: '.apk';
export const APK_INSTALL_TIMEOUT: 60000;
export const APKS_INSTALL_TIMEOUT: 120000;
/** in milliseconds */
export const DEFAULT_ADB_EXEC_TIMEOUT: 20000;

/**
 * Retrieves the actual path to SDK root folder from the system environment
 *
 * @return The full path to the SDK root folder
 */
export function getSdkRootFromEnv(): string | undefined;

/**
 * Retrieves the actual path to SDK root folder
 *
 * @return The full path to the SDK root folder
 * @throws If either the corresponding env variable is unset or is
 * pointing to an invalid file system entry
 */
export function requireSdkRoot(customRoot?: string | null): Promise<string>;

export interface PlatformInfo {
    /**
     * The platform name, for example `android-24`
     * or `null` if it cannot be found
     */
    platform?: string;
    /**
     * Full path to the platform SDK folder
     * or `null` if it cannot be found
     */
    platformPath?: string;
}

/**
 * Retrieve the path to the recent installed Android platform.
 *
 * @return The resulting path to the newest installed platform.
 */
export function getAndroidPlatformAndPath(sdkRoot: string): Promise<PlatformInfo>;

export function unzipFile(zipPath: string, dstRoot?: string): Promise<void>;

/**
 * Unsigns the given apk by removing the
 * META-INF folder recursively from the archive.
 * !!! The function overwrites the given apk after successful unsigning !!!
 *
 * @param apkPath The path to the apk
 * @returns `true` if the apk has been successfully
 * unsigned and overwritten
 * @throws if there was an error during the unsign operation
 */
export function unsignApk(apkPath: string): Promise<boolean>;

export function getIMEListFromOutput(stdout: string): string[];

export function getJavaHome(): Promise<string>;

export function getJavaForOs(): Promise<string>;

export function getOpenSslForOs(): Promise<string>;

/**
 * Get the absolute path to apksigner tool
 *
 * @param sysHelpers - An instance containing systemCallMethods helper methods
 * @returns An absolute path to apksigner tool.
 * @throws If the tool is not present on the local file system.
 */
export function getApksignerForOs(sysHelpers: Pick<typeof systemCallMethods, 'getBinaryFromSdkRoot'>): Promise<string>;

/**
 * Get the absolute path to apkanalyzer tool.
 * https://developer.android.com/studio/command-line/apkanalyzer.html
 *
 * @param sysHelpers - An instance containing systemCallMethods helper methods
 * @returns An absolute path to apkanalyzer tool.
 * @throws If the tool is not present on the local file system.
 */
export function getApkanalyzerForOs(
    sysHelpers: Pick<typeof systemCallMethods, 'getBinaryFromSdkRoot'>,
): Promise<string>;

/**
 * Checks mShowingLockscreen or mDreamingLockscreen in dumpsys output to determine
 * if lock screen is showing
 *
 * A note: `adb shell dumpsys trust` performs better while detecting the locked screen state
 * in comparison to `adb dumpsys window` output parsing.
 * But the trust command does not work for `Swipe` unlock pattern.
 *
 * In some Android devices (Probably around Android 10+), `mShowingLockscreen` and `mDreamingLockscreen`
 * do not work to detect lock status. Instead, keyguard preferences helps to detect the lock condition.
 * Some devices such as Android TV do not have keyguard, so we should keep
 * screen condition as this primary method.
 *
 * @param dumpsys - The output of dumpsys window command.
 * @return True if lock screen is showing.
 */
export function isShowingLockscreen(dumpsys: string): boolean;

/*
 * Checks mCurrentFocus in dumpsys output to determine if Keyguard is activated
 */
export function isCurrentFocusOnKeyguard(dumpsys: string): boolean;

/*
 * Reads SurfaceOrientation in dumpsys output
 */
export function getSurfaceOrientation(dumpsys: string): number | null;

/*
 * Checks mScreenOnFully in dumpsys output to determine if screen is showing
 * Default is true
 */
export function isScreenOnFully(dumpsys: string): boolean;

/**
 * Builds command line representation for the given
 * application startup options
 *
 * @param startAppOptions - Application options mapping
 * @param apiLevel - The actual OS API level
 * @returns The actual command line array
 */
export function buildStartCmd(startAppOptions: StartAppOptions, apiLevel: number): string[];

export function getSdkToolsVersion(): Promise<{ major: number; minor: number; build: number }>;

/**
 * Retrieves full paths to all 'build-tools' subfolders under the particular
 * SDK root folder
 *
 * @param sdkRoot - The full path to the Android SDK root folder
 * @returns The full paths to the resulting folders sorted by
 * modification date (the newest comes first) or an empty list if no macthes were found
 */
export function getBuildToolsDirs(sdkRoot: string): Promise<string[]>;

/**
 * Retrieves the list of permission names encoded in `dumpsys package` command output.
 *
 * @param dumpsysOutput - The actual command output.
 * @param groupNames - The list of group names to list permissions for.
 * @param grantedState - The expected state of `granted` attribute to filter with.
 *                                  No filtering is done if the parameter is not set.
 * @returns The list of matched permission names or an empty list if no matches were found.
 */
export function extractMatchingPermissions(
    dumpsysOutput: string,
    groupNames: ReadonlyArray<string>,
    grantedState?: boolean | null,
): string[];

export interface InstallOptions {
    /**
     * Set to true in order to allow test packages installation.
     * @default false
     */
    allowTestPackages?: boolean | undefined;
    /**
     * Set to true to install the app on sdcard
     * instead of the device memory.
     * @default false
     */
    useSdcard?: boolean | undefined;
    /**
     * Set to true in order to grant all the
     * permissions requested in the application's manifest
     * automatically after the installation is completed under Android 6+.
     * @default false
     */
    grantPermissions?: boolean | undefined;
    /**
     * Set it to false if you don't want
     * the application to be upgraded/reinstalled
     * if it is already present on the device.
     * @default true
     */
    replace?: boolean | undefined;
    /**
     * Install apks partially. It is used for 'install-multiple'.
     * @see https://android.stackexchange.com/questions/111064/what-is-a-partial-application-install-via-adb
     * @default false
     */
    partialInstall?: boolean | undefined;
}

/**
 * Transforms given options into the list of `adb install.install-multiple` command arguments
 *
 * @param apiLevel - The current API level
 * @param options - The options mapping to transform
 * @returns The array of arguments
 */
export function buildInstallArgs(apiLevel: number, options?: InstallOptions): string[];

export interface ManifestInfo {
    /**
     * The application identifier
     */
    pkg: string;
    /**
     * The name of the main package activity
     */
    activity?: string;
    /**
     * The version code number (might be `NaN`)
     */
    versionCode: number;
    /**
     * The version name  (might be `NaN`)
     */
    versionName: string | null;
}

/**
 * Perform parsing of the manifest object in order
 * to extract some vital values from it
 *
 * @param manifest The manifest content formatted as JSON
 * See https://www.npmjs.com/package/adbkit-apkreader for detailed format description
 */
export function parseManifest(manifest: object): ManifestInfo;

/**
 * Parses apk strings from aapt tool output
 *
 * @param rawOutput The actual tool output
 * @param configMarker The config marker. Usually
 * a language abbreviation or `(default)`
 * @returns Strings ids to values mapping. Plural
 * values are represented as arrays. If no config found for the
 * given marker then an empty mapping is returned.
 */
export function parseAaptStrings(rawOutput: string, configMarker: string): Record<string, string | string[]>;

/**
 * Parses apk strings from aapt2 tool output
 *
 * @param rawOutput The actual tool output
 * @param configMarker The config marker. Usually
 * a language abbreviation or an empty string for the default one
 * @returns Strings ids to values mapping. Plural
 * values are represented as arrays. If no config found for the
 * given marker then an empty mapping is returned.
 */
export function parseAapt2Strings(rawOutput: string, configMarker: string): Record<string, string | string[]>;

/**
 * Formats the config marker, which is then passed to parse.. methods
 * to make it compatible with resource formats generated by aapt(2) tool
 *
 * @param configsGetter The function whose result is a list
 * of apk configs
 * @param desiredMarker The desired config marker value
 * @param defaultMarker The default config marker value
 * @return The formatted config marker
 */
export function formatConfigMarker(
    configsGetter: () => ReadonlyArray<string> | Promise<ReadonlyArray<string>>,
    desiredMarker: string,
    defaultMarker: string,
): Promise<string>;

/**
 * Parses the output in JSON format retrieved from
 * the corresponding Appium Settings broadcast calls
 *
 * @param output The actual command output
 * @param entityName The name of the entity which is
 * going to be parsed
 * @returns The parsed JSON object
 * @throws If the output cannot be parsed
 * as a valid JSON
 */
export function parseJsonData(output: string, entityName: string): unknown;

/**
 * Transforms the given language and country abbreviations
 * to AVD arguments array
 *
 * @param language Language name, for example 'fr'
 * @param country Country name, for example 'CA'
 * @returns The generated arguments. The
 * resulting array might be empty if both arguments are empty
 */
export function toAvdLocaleArgs(language?: string, country?: string): string[];

/**
 * Retrieves the full path to the Android preferences root
 *
 * @returns The full path to the folder or `null` if the folder cannot be found
 */
export function getAndroidPrefsRoot(): Promise<string>;

/**
 * Check if a path exists on the filesystem and is a directory
 *
 * @param location The full path to the directory
 */
export function dirExists(location?: string): Promise<boolean>;

/**
 * Escapes special characters in command line arguments.
 * This is needed to avoid possible issues with how system `spawn`
 * call handles them.
 * @see https://discuss.appium.io/t/how-to-modify-wd-proxy-and-uiautomator2-source-code-to-support-unicode/33466
 * for more details.
 *
 * @param arg Non-escaped argument string
 * @returns The escaped argument
 */
export function escapeShellArg(arg: string): string;
