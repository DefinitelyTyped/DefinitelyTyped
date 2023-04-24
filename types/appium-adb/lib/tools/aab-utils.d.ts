export interface ApkCreationOptions {
    /**
     * Specifies the path to the deployment keystore used
     * to sign the APKs. This flag is optional. If you don't include it,
     * bundletool attempts to sign your APKs with a debug signing key.
     * If the .apk has been already signed and cached then it is not going to be resigned
     * unless a different keystore or key alias is used.
     */
    keystore?: boolean;
    /**
     * Specifies your keystore’s password.
     * It is mandatory to provide this value if `keystore` one is assigned
     * otherwise it is going to be ignored.
     */
    keystorePassword?: boolean;
    /**
     * Specifies the alias of the signing key you want to use.
     * It is mandatory to provide this value if `keystore` one is assigned
     * otherwise it is going to be ignored.
     */
    keyAlias?: boolean;
    /**
     * Specifies the password for the signing key.
     * It is mandatory to provide this value if `keystore` one is assigned
     * otherwise it is going to be ignored.
     */
    keyPassword?: boolean;
}

declare const aabUtilsMethods: AabUtils;
export default aabUtilsMethods;

interface AabUtils {
    /**
     * Builds a universal .apk from the given .aab package. See
     * https://developer.android.com/studio/command-line/bundletool#generate_apks
     * for more details.
     *
     * @param aabPath Full path to the source .aab package
     * @returns The path to the resulting universal .apk. The .apk is stored in the internal cache
     * by default.
     * @throws If there was an error while creating the universal .apk
     */
    extractUniversalApk(aabPath: string, opts?: ApkCreationOptions): Promise<string>;
}
