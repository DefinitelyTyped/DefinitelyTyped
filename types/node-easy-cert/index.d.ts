// Type definitions for node-easy-cert 1.3
// Project: https://github.com/ottomao/node-easy-cert
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

export = CertManager;

declare function CertManager(options: CertManager.CertManagerOptions): CertManager;
declare class CertManager {
    constructor(options: CertManager.CertManagerOptions);

    /**
     * Get the Root CA file path.
     * If the Root CA file does not exist, returns `""`;
     */
    getRootCAFilePath(): string;

    /**
     * Generates a new Root CA certificate.
     *
     * @param config Configuration for the new Root CA.
     * @param callback Callback called when certificate is ready with key and cert paths.
     */
    generateRootCA(config: CertManager.GenerateConfig, callback?: CertManager.GenerateCallback): void;

    /**
     * Get or create a new Certificate for given hostname.
     *
     * @param hostname Hostname for the new certificate.
     * @param callback Callback called with key and cert content.
     */
    getCertificate(hostname: string, callback?: CertManager.GetCertificateCallback): void;

    /**
     * Clear all certificates in Root directory.
     *
     * @param callback Optional callback called when all certificates are cleared.
     */
    clearCerts(callback?: () => any): void;

    /** Get whether Root CA file exists. */
    isRootCAFileExists(): boolean;

    /** Get whether Root CA certificate is trusted on this OS. */
    ifRootCATrusted(): boolean;

    /**
     * Get the Root directory path.
     * Root directory is the path where certificates are stored.
     */
    getRootDirPath(): string;
}

declare namespace CertManager {
    interface CertManagerOptions {
        /**
         * Path where certificates should be stored.
         * @default "/{USER_HOME}/{.node_easy_certs}/"
         */
        rootDirPath?: string;

        /** The default attributes of a generated cert, you can change it here */
        defaultCertAttrs?: CertificateAttribute[];
    }

    interface GenerateConfig {
        /** The Common Name for the new certificate. */
        commonName: string;

        /**
         * Should overwrite any existing file.
         * @default false
         */
        overwrite?: boolean;
    }

    type GenerateCallback = (err: Error | CertErrors | null, keyPath: string, certPath: string) => any;

    type GetCertificateCallback = (err: Error | CertErrors | null, keyContent: string, certContent: string) => any;

    type CertErrors =
        /** Error thrown when Root CA has not been generated yet. */
        "ROOT_CA_NOT_EXISTS" |

        /** Error thrown when Root CA was existed, beware that it will be overwrited. */
        "ROOT_CA_EXISTED" |

        /** Error thrown when no commonName options is specified when generating Root CA. */
        "ROOT_CA_COMMON_NAME_UNSPECIFIED";

    type CertificateAttribute = CertificateAttributeName | CertificateAttributeShortName;

    interface CertificateAttributeName {
        name: string;
        value: string;
    }

    interface CertificateAttributeShortName {
        shortName: string;
        value: string;
    }
}
