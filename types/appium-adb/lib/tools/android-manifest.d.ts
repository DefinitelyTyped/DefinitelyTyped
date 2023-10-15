export interface APKInfo {
    /** The name of application package, for example 'com.acme.app'. */
    apkPackage: string;
    /** The name of main application activity. */
    apkActivity: string;
}

declare const manifestMethods: AndroidManifest;
export default manifestMethods;

interface AndroidManifest {
    /**
     * Extract package and main activity name from application manifest.
     *
     * @param appPath - The full path to application .apk(s) package
     * @return The parsed application info.
     * @throws If there was an error while getting the data from the given
     *                 application package.
     */
    packageAndLaunchActivityFromManifest(appPath: string): Promise<APKInfo>;

    /**
     * Extract target SDK version from application manifest.
     *
     * @param appPath - The full path to .apk(s) package.
     * @return The version of the target SDK.
     * @throws If there was an error while getting the data from the given
     *                 application package.
     */
    targetSdkVersionFromManifest(appPath: string): Promise<number>;

    /**
     * Extract target SDK version from package information.
     *
     * @param pkg - The class name of the package installed on the device under test.
     * @param cmdOutput - Optional parameter containing the output of
     *                              _dumpsys package_ command. It may speed up the method execution.
     * @return The version of the target SDK.
     */
    targetSdkVersionUsingPKG(pkg: string, cmdOutput?: string | null): Promise<number>;

    /**
     * Create binary representation of package manifest (usually AndroidManifest.xml).
     * `${manifest}.apk` file will be created as the result of this method
     * containing the compiled manifest.
     *
     * @param manifest - Full path to the initial manifest template
     * @param manifestPackage - The name of the manifest package
     * @param targetPackage - The name of the destination package
     */
    compileManifest(manifest: string, manifestPackage: string, targetPackage: string): Promise<void>;

    /**
     * Replace/insert the specially precompiled manifest file into the
     * particular package.
     *
     * @param manifest - Full path to the precompiled manifest
     *                            created by `compileManifest` method call
     *                            without .apk extension
     * @param srcApk - Full path to the existing valid application package, where
     *                          this manifest has to be inserted to. This package
     *                          will NOT be modified.
     * @param dstApk - Full path to the resulting package.
     *                          The file will be overridden if it already exists.
     */
    insertManifest(manifest: string, srcApk: string, dstApk: string): Promise<void>;

    /**
     * Check whether package manifest contains Internet permissions.
     *
     * @param appPath - The full path to .apk(s) package.
     * @return True if the manifest requires Internet access permission.
     */
    hasInternetPermissionFromManifest(appPath: string): Promise<boolean>;
}
