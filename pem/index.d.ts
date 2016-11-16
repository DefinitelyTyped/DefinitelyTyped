// Type definitions for PEM v1.8.3
// Project: https://github.com/andris9/pem
// Definitions by: Anthony Trinh <https://github.com/tony19>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "pem" {
    /**
     * Creates a private key
     *
     * @param {Number} [keyBitsize=2048] Size of the key, defaults to 2048bit (can also be a function)
     * @param {Object} [options] object of cipher and password {cipher:'aes128',password:'xxx'}, defaults empty object
     * @param {Function} callback Callback function with an error object and {key}
     */
    function createPrivateKey(keyBitsize: Number, options: Object, callback: Function): void;
    function createPrivateKey(keyBitsize: Number, callback: Function): void;
    function createPrivateKey(options: Object, callback: Function): void;
    function createPrivateKey(callback: Function): void;

    /**
     * Creates a dhparam key
     *
     * @param {Number} [keyBitsize=512] Size of the key, defaults to 512bit
     * @param {Function} callback Callback function with an error object and {dhparam}
     */
    function createDhparam(keyBitsize: Number, callback: Function): void;
    function createDhparam(callback: Function): void;

    /**
     * Creates a Certificate Signing Request
     *
     * If client key is undefined, a new key is created automatically. The used key is included
     * in the callback return as clientKey
     *
     * @param {Object} [options] Optional options object
     * @param {String} [options.clientKey] Optional client key to use
     * @param {Number} [options.keyBitsize] If clientKey is undefined, bit size to use for generating a new key (defaults to 2048)
     * @param {String} [options.hash] Hash function to use (either md5 sha1 or sha256, defaults to sha256)
     * @param {String} [options.country] CSR country field
     * @param {String} [options.state] CSR state field
     * @param {String} [options.locality] CSR locality field
     * @param {String} [options.organization] CSR organization field
     * @param {String} [options.organizationUnit] CSR organizational unit field
     * @param {String} [options.commonName='localhost'] CSR common name field
     * @param {String} [options.emailAddress] CSR email address field
     * @param {String} [options.csrConfigFile] CSR config file
     * @param {Array}  [options.altNames] is a list of subjectAltNames in the subjectAltName field
     * @param {Function} callback Callback function with an error object and {csr, clientKey}
     */
    function createCSR(options: Object, callback: Function): void;
    function createCSR(callback: Function): void;

    /**
     * Creates a certificate based on a CSR. If CSR is not defined, a new one
     * will be generated automatically. For CSR generation all the options values
     * can be used as with createCSR.
     *
     * @param {Object} [options] Optional options object
     * @param {String} [options.serviceKey] Private key for signing the certificate, if not defined a new one is generated
     * @param {String} [options.serviceKeyPassword] Password of the service key
     * @param {Boolean} [options.selfSigned] If set to true and serviceKey is not defined, use clientKey for signing
     * @param {String} [options.hash] Hash function to use (either md5 sha1 or sha256, defaults to sha256)
     * @param {String} [options.csr] CSR for the certificate, if not defined a new one is generated
     * @param {Number} [options.days] Certificate expire time in days
     * @param {String} [options.clientKeyPassword] Password of the client key
     * @param {String} [options.extFile] extension config file - without '-extensions v3_req'
     * @param {String} [options.config] extension config file - with '-extensions v3_req'
     * @param {Function} callback Callback function with an error object and {certificate, csr, clientKey, serviceKey}
     */
    function createCertificate(options: Object, callback: Function): void;
    function createCertificate(callback: Function): void;

    /**
     * Reads subject data from a certificate or a CSR
     *
     * @param {String} certificate PEM encoded CSR or certificate
     * @param {Function} callback Callback function with an error object and {country, state, locality, organization, organizationUnit, commonName, emailAddress}
     */
    function readCertificateInfo(certificate: string, callback: Function): void;
    function readCertificateInfo(callback: Function): void;

    /**
     * Exports a public key from a private key, CSR or certificate
     *
     * @param {String} certificate PEM encoded private key, CSR or certificate
     * @param {Function} callback Callback function with an error object and {publicKey}
     */
    function getPublicKey(certificate: string, callback: Function): void;
    function getPublicKey(callback: Function): void;

    /**
     * Gets the fingerprint for a certificate
     *
     * @param {String} certificate PEM encoded certificate
     * @param {String} hash Hash function to use (either md5 sha1 or sha256, defaults to sha256)
     * @param {Function} callback Callback function with an error object and {fingerprint}
     */
    function getFingerprint(certificate: string, hash: string, callback: Function): void;
    function getFingerprint(certificate: string, callback: Function): void;
    function getFingerprint(callback: Function): void;

    /**
     * Gets the modulus from a certificate, a CSR or a private key
     *
     * @param {String} certificate PEM encoded, CSR PEM encoded, or private key
     * @param {String} password password for the certificate
     * @param {Function} callback Callback function with an error object and {modulus}
     */
    function getModulus(certificate: string, password: string, callback: Function): void;
    function getModulus(certificate: string, callback: Function): void;

    /**
     * Gets the size and prime of DH parameters
     *
     * @param {String} dh DH parameters PEM encoded
     * @param {Function} callback Callback function with an error object and {size, prime}
     */
    function getDhparamInfo(dh: string, callback: Function): void;

    /**
     * Exports private key and certificate to a PKCS12 keystore
     *
     * @param {String} key PEM encoded private key
     * @param {String} certificate PEM encoded certificate
     * @param {String} password Password of the result PKCS12 file
     * @param {Object} [options] object of cipher and optional client key password {cipher:'aes128', clientKeyPassword: 'xxx'}
     * @param {Function} callback Callback function with an error object and {pkcs12}
     */
    function createPkcs12(key: string, certificate: string, password: string, options: Object, callback: Function): void;
    function createPkcs12(key: string, certificate: string, password: string, callback: Function): void;

    /**
     * Reads private key and certificate from a PKCS12 keystore
     * @param {String} bufferOrPath
     * @param {Object} [options] object of cipher and optional client key password {cipher:'aes128', clientKeyPassword: 'xxx'}
     * @param {Function} callback Callback function with an error object and {pkcs12}
     * @returns the result of the callback
     */
    function readPkcs12(bufferOrPath: string, options: Object, callback: Function): any;
    function readPkcs12(options: Object, callback: Function): any;

    /**
     * Verifies the signing chain of the passed certificate
     *
     * @param {String} certificate PEM encoded certificate
     * @param {Array} ca List of CA certificates
     * @param {Function} callback Callback function with an error object and a boolean valid
     */
    function verifySigningChain(certificate: string, ca: Array<string>, callback: Function): void;

    /**
     * config the pem module
     * @param {Object} options
     */
    function config(options: Object): void;
}
