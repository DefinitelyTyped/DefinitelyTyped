export interface CertCheckOptions {
    /**
     * Whether to require that the destination APK
     * is signed with the default Appium certificate or any valid certificate. This option
     * only has effect if `useKeystore` property is unset.
     * @default true
     */
    requireDefaultCert?: boolean;
}

export interface KeystoreHash {
    /**
     * the md5 hash value of the keystore
     */
    md5?: string;
    /**
     * the sha1 hash value of the keystore
     */
    sha1?: string;
    /**
     * the sha256 hash value of the keystore
     */
    sha256?: string;
    /**
     * the sha512 hash value of the keystore
     */
    sha512?: string;
}

declare const apkSigningMethods: ApkSigning;
export default apkSigningMethods;

interface ApkSigning {
    /**
     * Execute apksigner utility with given arguments.
     *
     * @param args - The list of tool arguments.
     * @return - Command stdout
     * @throws If apksigner binary is not present on the local file system
     *                 or the return code is not equal to zero.
     */
    executeApksigner(args?: ReadonlyArray<string>): Promise<string>;

    /**
     * (Re)sign the given apk file on the local file system with the default certificate.
     *
     * @param apk - The full path to the local apk file.
     * @throws If signing fails.
     */
    signWithDefaultCert(apk: string): Promise<void>;

    /**
     * (Re)sign the given apk file on the local file system with a custom certificate.
     *
     * @param apk - The full path to the local apk file.
     * @throws If signing fails.
     */
    signWithCustomCert(apk: string): Promise<void>;

    /**
     * (Re)sign the given apk file on the local file system with either
     * custom or default certificate based on _this.useKeystore_ property value
     * and Zip-aligns it after signing.
     *
     * @param appPath - The full path to the local .apk(s) file.
     * @throws If signing fails.
     */
    sign(appPath: string): Promise<void>;

    /**
     * Perform zip-aligning to the given local apk file.
     *
     * @param apk - The full path to the local apk file.
     * @returns True if the apk has been successfully aligned
     * or false if the apk has been already aligned.
     * @throws If zip-align fails.
     */
    zipAlignApk(apk: string): Promise<boolean>;

    /**
     * Check if the app is already signed with the default Appium certificate.
     *
     * @param appPath - The full path to the local .apk(s) file.
     * @param pgk - The name of application package.
     * @return True if given application is already signed.
     */
    checkApkCert(appPath: string, pkg: string, opts?: CertCheckOptions): Promise<boolean>;

    /**
     * Retrieve the the hash of the given keystore.
     *
     * @throws If getting keystore hash fails.
     */
    getKeystoreHash(keytool: string, md5re: RegExp): Promise<KeystoreHash>;
}
