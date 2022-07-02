export interface InstallApksOptions {
    /**
     * @default [20000] The count of milliseconds to wait until the
     * installation is completed
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
}

declare const apksUtilsMethods: ApksUtils;
export default apksUtilsMethods;

interface ApksUtils {
    /**
     * Executes bundletool utility with given arguments and returns the actual stdout
     *
     * @param args - the list of bundletool arguments
     * @param errorMsg - The customized error message string
     * @returns the actual command stdout
     * @throws If bundletool jar does not exist in PATH or there was an error while
     * executing it
     */
    execBundletool(args: ReadonlyArray<string>, errorMsg: string): Promise<string>;

    /**
     * @param specLocation - The full path to the generated device spec location
     * @returns The same `specLocation` value
     * @throws If it is not possible to retrieve the spec for the current device
     */
    getDeviceSpec(specLocation: string): Promise<string>;

    /**
     * Installs the given .apks package into the device under test
     *
     * @param apks - The full path to the .apks file
     * @param options - Installation options
     * @throws If the .apks bundle cannot be installed
     */
    installApks(apks: string, options?: InstallApksOptions): Promise<void>;

    /**
     * Extracts and returns the full path to the master .apk file inside the bundle.
     *
     * @param apks - The full path to the .apks file
     * @returns The full path to the master bundle .apk
     * @throws If there was an error while extracting/finding the file
     */
    extractBaseApk(apks: string): Promise<string>;

    /**
     * Extracts and returns the full path to the .apk, which contains the corresponding
     * resources for the given language in the .apks bundle.
     *
     * @param apks - The full path to the .apks file
     * @param language - The language abbreviation. The default language is
     * going to be selected if it is not set.
     * @returns The full path to the corresponding language .apk or the master .apk
     * if language split is not enabled for the bundle.
     * @throws If there was an error while extracting/finding the file
     */
    extractLanguageApk(apks: string, language?: string | null): Promise<string>;
}
