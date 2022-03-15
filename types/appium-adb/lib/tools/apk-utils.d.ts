import { ExecOptions } from 'teen_process';

export type APP_INSTALL_STATE = typeof APP_INSTALL_STATE[keyof typeof APP_INSTALL_STATE];
export const APP_INSTALL_STATE: {
    UNKNOWN: 'unknown';
    NOT_INSTALLED: 'notInstalled';
    NEWER_VERSION_INSTALLED: 'newerVersionInstalled';
    SAME_VERSION_INSTALLED: 'sameVersionInstalled';
    OLDER_VERSION_INSTALLED: 'olderVersionInstalled';
};

export interface StartAppOptions {
    /**
     * The name of the application package
     */
    pkg: string;
    /**
     * The name of the main application activity.
     * This or action is required in order to be able to launch an app.
     */
    activity?: string | undefined;
    /**
     * The name of the intent action that will launch the required app.
     * This or activity is required in order to be able to launch an app.
     */
    action?: string | undefined;
    /**
     * If this property is set to `true`
     * and the activity name does not start with '.' then the method
     * will try to add the missing dot and start the activity once more
     * if the first startup try fails.
     * @default true
     */
    retry?: boolean | undefined;
    /**
     * Set it to `true` in order to forcefully
     * stop the activity if it is already running.
     * @default true
     */
    stopApp?: boolean | undefined;
    /**
     * The name of the package to wait to on startup
     * (this only makes sense if this name is different from the one,
     * which is set as `pkg`)
     */
    waitPkg?: string | undefined;
    /**
     * The name of the activity to wait to on startup
     * (this only makes sense if this name is different from the one,
     * which is set as `activity`)
     */
    waitActivity?: string | undefined;
    /**
     * The number of milliseconds to wait until the
     * `waitActivity` is focused
     */
    waitDuration?: string | undefined;
    /**
     * The number of the user profile to start
     * the given activity with. The default OS user profile (usually zero) is used
     * when this property is unset
     */
    user?: string | number | undefined;
    /**
     * if `false` then adb won't wait
     * for the started activity to return the control
     * @default true
     */
    waitForLaunch?: boolean | undefined;
}

export interface StartUriOptions {
    /**
     * if `false` then adb won't wait for the started activity to return the control
     * @default true
     */
    waitForLaunch?: boolean;
}

export interface PackageActivityInfo {
    /** The name of application package, for example 'com.acme.app'. */
    appPackage: string | null;
    /** The name of main application activity. */
    appActivity: string | null;
}

export interface UninstallOptions {
    /**
     * @default [20000] The count of milliseconds to wait until the
     * app is uninstalled.
     */
    timeout?: number;
    /**
     * @default [false] Set to true in order to keep the
     * application data and cache folders after uninstall.
     */
    keepData?: boolean;
}

export interface CachingOptions {
    /**
     * The count of milliseconds to wait until the
     * app is uploaded to the remote location.
     */
    timeout?: number;
}

export interface InstallOptions {
    /**
     * @default [60000] The count of milliseconds to wait until the
     * app is installed.
     */
    timeout?: number;
    /**
     * @default [false] Set to true in order to allow test
     * packages installation.
     */
    allowTestPackages?: boolean;
    /**
     * @default [false] Set to true to install the app on sdcard
     * instead of the device memory.
     */
    useSdcard?: false;
    /**
     * @default [false] Set to true in order to grant all the
     * permissions requested in the application's manifest
     * automatically after the installation is completed
     * under Android 6+.
     */
    grantPermissions?: boolean;
    /**
     * @default [true] Set it to false if you don't want
     * the application to be upgraded/reinstalled
     * if it is already present on the device.
     */
    replace?: boolean;
}

export interface InstallOrUpgradeOptions {
    /**
     * @default [60000] The count of milliseconds to wait until the
     * app is installed.
     */
    timeout?: number;
    /**
     * @default [false] Set to true in order to allow test
     * packages installation.
     */
    allowTestPackages?: boolean;
    /**
     * @default [false] Set to true to install the app on sdcard
     * instead of the device memory.
     */
    useSdcard?: false;
    /**
     * @default [false] Set to true in order to grant all the
     * permissions requested in the application's manifest
     * automatically after the installation is completed
     * under Android 6+.
     */
    grantPermissions?: boolean;
    /**
     * @default [false] Set to `true` in order to always prefer
     * the current build over any installed packages having
     * the same identifier
     */
    enforceCurrentBuild?: boolean;
}

export interface InstallOrUpgradeResult {
    /**
     * Equals to `true` if the target app has been uninstalled
     * before being installed
     */
    wasUninstalled: boolean;
    /**
     * One of `adb.APP_INSTALL_STATE` states, which reflects
     * the state of the application before being installed.
     */
    appState: APP_INSTALL_STATE;
}

export interface AppInfo {
    /**
     * Package name, for example 'com.acme.app'.
     */
    name: string;
    /**
     * Version code.
     */
    versionCode: number;
    /**
     * Version name, for example '1.0'.
     */
    versionName: string | null;
}

export const REMOTE_CACHE_ROOT = '/data/local/tmp/appium_cache';

declare const apkUtilsMethods: ApkUtils;
export default apkUtilsMethods;

interface ApkUtils {
    APP_INSTALL_STATE: typeof APP_INSTALL_STATE;

    /**
     * Check whether the particular package is present on the device under test.
     *
     * @param pkg - The name of the package to check.
     * @return True if the package is installed.
     * @throws If there was an error while detecting application state
     */
    isAppInstalled(pkg: string): Promise<boolean>;

    /**
     * Start the particular URI on the device under test.
     *
     * @param uri - The name of URI to start.
     * @param pkg - The name of the package to start the URI with.
     */
    startUri(uri: string, pkg: string, opts?: StartUriOptions): Promise<void>;

    /**
     * Start the particular package/activity on the device under test.
     *
     * @param startAppOptions [{}] - Startup options mapping.
     * @return The output of the corresponding adb command.
     * @throws If there is an error while executing the activity
     */
    startApp(startAppOptions?: StartAppOptions): Promise<string>;

    /**
     * Helper method to call `adb dumpsys window windows/displays`
     */
    dumpWindows(): Promise<string>;

    /**
     * Get the name of currently focused package and activity.
     *
     * @return The mapping, where property names are 'appPackage' and 'appActivity'.
     * @throws If there is an error while parsing the data.
     */
    getFocusedPackageAndActivity(): Promise<PackageActivityInfo>;

    /**
     * Wait for the given activity to be focused/non-focused.
     *
     * @param pkg - The name of the package to wait for.
     * @param activity - The name of the activity, belonging to that package,
     *                            to wait for.
     * @param waitForStop - Whether to wait until the activity is focused (true)
     *                                or is not focused (false).
     * @param waitMs [20000] - Number of milliseconds to wait before timeout occurs.
     * @throws If timeout happens.
     */
    waitForActivityOrNot(pkg: string, activity: string, waitForStop: boolean, waitMs?: number): Promise<void>;

    /**
     * Wait for the given activity to be focused
     *
     * @param pkg - The name of the package to wait for.
     * @param activity - The name of the activity, belonging to that package,
     *                            to wait for.
     * @param waitMs [20000] - Number of milliseconds to wait before timeout occurs.
     * @throws If timeout happens.
     */
    waitForActivity(pkg: string, act: string, waitMs?: number): Promise<void>;

    /**
     * Wait for the given activity to be non-focused.
     *
     * @param pkg - The name of the package to wait for.
     * @param activity - The name of the activity, belonging to that package,
     *                            to wait for.
     * @param waitMs [20000] - Number of milliseconds to wait before timeout occurs.
     * @throws If timeout happens.
     */
    waitForNotActivity(pkg: string, act: string, waitMs?: number): Promise<void>;

    /**
     * Uninstall the given package from the device under test.
     *
     * @param pkg - The name of the package to be uninstalled.
     * @param options - The set of uninstallation options.
     * @return True if the package was found on the device and
     *                   successfully uninstalled.
     */
    uninstallApk(pkg: string, options?: UninstallOptions): Promise<boolean>;

    /**
     * Install the package after it was pushed to the device under test.
     *
     * @param apkPathOnDevice - The full path to the package on the device file system.
     * @param opts [{}] - Additional exec options. See {@link https://github.com/appium/node-teen_process}
     *                             for more details on this parameter.
     * @throws If there was a failure during application install.
     */
    installFromDevicePath(apkPathOnDevice: string, opts?: ExecOptions): Promise<void>;

    /**
     * Caches the given APK at a remote location to speed up further APK deployments.
     *
     * @param apkPath - Full path to the apk on the local FS
     * @param options - Caching options
     * @returns - Full path to the cached apk on the remote file system
     * @throws if there was a failure while caching the app
     */
    cacheApk(apkPath: string, options?: CachingOptions): Promise<string>;

    /**
     * Install the package from the local file system.
     *
     * @param appPath - The full path to the local package.
     * @param options - The set of installation options.
     * @throws If an unexpected error happens during install.
     */
    install(appPath: string, options?: InstallOptions): Promise<void>;

    /**
     * Retrieves the current installation state of the particular application
     *
     * @param appPath - Full path to the application
     * @param pkg - Package identifier. If omitted then the script will
     *                        try to extract it on its own
     * @returns One of `APP_INSTALL_STATE` constants
     */
    getApplicationInstallState(appPath: string, pkg?: string | null): Promise<APP_INSTALL_STATE>;

    /**
     * Install the package from the local file system or upgrade it if an older
     * version of the same package is already installed.
     *
     * @param appPath - The full path to the local package.
     * @param pkg - The name of the installed package. The method will
     *                        perform faster if it is set.
     * @param options - Set of install options.
     * @throws If an unexpected error happens during install.
     */
    installOrUpgrade(
        appPath: string,
        pkg?: string | null,
        options?: InstallOrUpgradeOptions,
    ): Promise<InstallOrUpgradeResult>;

    /**
     * Extract string resources from the given package on local file system.
     *
     * @param appPath - The full path to the .apk(s) package.
     * @param language - The name of the language to extract the resources for.
     *                             The default language is used if this equals to `null`/`undefined`
     * @param out - The name of the destination folder on the local file system to
     *                       store the extracted file to.
     * @return A mapping object, where properties are: 'apkStrings', containing
     *                  parsed resource file represented as JSON object, and 'localPath',
     *                  containing the path to the extracted file on the local file system.
     */
    extractStringsFromApk(
        appPath: string,
        language: string | null | undefined,
        out: string,
    ): Promise<{
        apkStrings: { [resourceId: string]: string };
        localPath: string;
    }>;

    /**
     * Get the language name of the device under test.
     *
     * @return The name of device language.
     */
    getDeviceLanguage(): Promise<string>;

    /**
     * Get the country name of the device under test.
     *
     * @return The name of device country.
     */
    getDeviceCountry(): Promise<string>;

    /**
     * Get the locale name of the device under test.
     *
     * @return The name of device locale.
     */
    getDeviceLocale(): Promise<string>;

    /**
     * Set the locale name of the device under test and the format of the locale is en-US, for example.
     * This method call setDeviceLanguageCountry, so, please use setDeviceLanguageCountry as possible.
     *
     * @param locale - Names of the device language and the country connected with `-`. e.g. en-US.
     */
    setDeviceLocale(locale: string): Promise<void>;

    /**
     * Make sure current device locale is expected or not.
     *
     * @param language - Language. The language field is case insensitive, but Locale always canonicalizes to lower case.
     * @param country - Country. The language field is case insensitive, but Locale always canonicalizes to lower case.
     * @param script - Script. The script field is case insensitive but Locale always canonicalizes to title case.
     *
     * @return If current locale is language and country as arguments, return true.
     */
    ensureCurrentLocale(language: string, country: string, script?: string | null): Promise<boolean>;

    /**
     * Set the locale name of the device under test.
     *
     * @param language - Language. The language field is case insensitive, but Locale always canonicalizes to lower case.
     *                            format: [a-zA-Z]{2,8}. e.g. en, ja : https://developer.android.com/reference/java/util/Locale.html
     * @param country - Country. The country (region) field is case insensitive, but Locale always canonicalizes to upper case.
     *                            format: [a-zA-Z]| [0-9]{3}. e.g. US, JP : https://developer.android.com/reference/java/util/Locale.html
     * @param script - Script. The script field is case insensitive but Locale always canonicalizes to title case.
     *                            format: [a-zA-Z]{4}. e.g. Hans in zh-Hans-CN : https://developer.android.com/reference/java/util/Locale.html
     */
    setDeviceLanguageCountry(language: string, country: string, script?: string | null): Promise<void>;

    /**
     * Get the package info from local apk file.
     *
     * @param appPath - The full path to existing .apk(s) package on the local
     *                           file system.
     * @return The parsed application information.
     */
    getApkInfo(appPath: string): Promise<AppInfo | {}>;

    /**
     * Get the package info from the installed application.
     *
     * @param pkg - The name of the installed package.
     * @return The parsed application information.
     */
    getPackageInfo(pkg: string): Promise<AppInfo>;

    pullApk(pkg: string, tmpDir: string): Promise<string>;
}
