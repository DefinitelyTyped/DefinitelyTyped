/// <reference types="node" />

import { pki } from "node-forge";

export = api;

declare function api(params: api.Options & { generator: true; async: true }): AsyncGenerator<api.Certificate>;
declare function api(params: api.Options & { generator: true }): Generator<api.Certificate>;
declare function api(params: api.Options): AsyncGenerator<api.Certificate> | Generator<api.Certificate> | void;

declare namespace api {
    const disabled: boolean;
    const nApi: boolean;
    const electron: boolean | undefined;

    const der2: {
        /**
         * Converts certificate from DER to format specified in first parameter.
         *
         * @example <caption>This function is curried</caption>
         * import ca = require('win-ca')
         *
         * const toPEM = ca.der2(ca.der2.pem)
         * const pem = toPEM(der)
         */
        (format: CertificateFormat): (certificate: string | Buffer) => Certificate;
        (format: CertificateFormat, certificate: string | Buffer): Certificate;

        /** DER-format (binary, Node's [Buffer](https://nodejs.org/api/buffer.html)) */
        readonly der: 0;
        /** PEM-format (text, Base64-encoded) */
        readonly pem: 1;
        /** PEM-format plus some laconic header */
        readonly txt: 2;
        /** ASN.1-parsed certificate */
        readonly asn1: 3;
        /** Certificate in `node-forge` format (RSA only!) */
        readonly x509: 4;
    };

    /**
     * Gives certificate hash (aka X509_NAME_hash), ie 8-character hexadecimal string, derived
     * from certificate subject.
     *
     * @param version If version is `0`, an old algorithm is used (aka X509_NAME_hash_old, used
     * in OpenSSL v0.\*), else - the new one (X509_NAME_hash of OpenSSL v1.\*).
     *
     * @example <caption>This function is curried</caption>
     * import ca = require('win-ca')
     *
     * const hasher = ca.hash()
     * console.log(hasher(der))
     */
    function hash(version: 0 | 1 | undefined, certificate: string | Buffer): string;
    function hash(version?: 0 | 1): (certificate: string | Buffer) => string;

    /**
     * Manages the way certificates are passed to other modules.
     *
     * This function is internally called by API when `inject` parameter used.
     *
     * Note, that this function should be called before first secure connection is established, since
     * every secure connection populates different caches, that are extremely hard to invalidate. Changing
     * injection mode in the middle of secure communication can lead to unpredictable results.
     *
     * @param mode The injection mode:
     * - `false`: no injection, built-in certificates are used
     * - `true`: put certificates to `https.globalAgent.options.ca` and use them *instead* of built-in ones
     * for `https` module
     * - `'+'`: new *experimental* mode: `tls.createSecureContext()` is patched and certificates are used
     * *along with* built-in ones. This mode should affect all secure connections, not just `https` module.
     *
     * @param certificates List of certificates to inject. If it is omitted, previous list is used
     * (only inject mode is changed).
     *
     * @example <caption>Simplest way to test new injection mode is:</caption>
     * import ca = require('win-ca') // Fetch certificates and start injecting (old way)
     *
     * ca.inject('+') // Switch to new injection mode
     */
    function inject(mode: boolean | "+", certificates?: Certificate[]): void;

    /**
     * Applications that use `win-ca` are sometimes packed / bundled. In this case one should find appropriate
     * place for binary utility `roots.exe` (used in fallback mode, which is always the case with Electron apps)
     * and then make `win-ca` to find the binary.
     *
     * Function `.exe()` is intended to provide this functionality.
     *
     * You must call it **before** first invocation of library itself:
     * ```
     * import ca = require('win-ca/api')
     *
     * ca.exe('/full/path/to/roots.exe')
     * ca({fallback: true, inject: true})
     * ```
     *
     * `.exe()` with no parameters switches to default location (inside `lib` folder).
     * In any case it returns previous path to `roots.exe`:
     * ```
     * import ca = require('win-ca');
     *
     * console.log(ca.exe()) // Where is my root.exe?
     * ```
     */
    function exe(path?: string): string;

    type CertificateFormat = (typeof der2)[keyof typeof der2];
    type Store = "root" | "ca" | "my" | "trustedpublisher";
    type Certificate = Buffer | string | pki.Certificate;
    interface Options {
        /**
         * Defines representation of certificates to fetch.
         *
         * @default der2.der
         */
        format?: CertificateFormat;
        /**
         * Which Windows' store to use.
         *
         * Windows has a whole lot of Certificate stores (eg `Root`, `CA`, `My`, `TrustedPublisher` etc.).
         * One can list certificates from any of them (knowing its name) or several stores at once
         * (using array for `store` parameter).
         *
         * @default 'root' // ie Trusted Root Certification Authorities
         *
         * @example
         * import api = require('win-ca/api')
         *
         * const list: Certificate[] = []
         * api({store: ['root', 'ca'], ondata: list})
         */
        store?: Store[];
        /**
         * Whether certificates list should be deduplicated. Use `{unique: false}` to see all certificates
         * in store.
         *
         * @default true // no duplicates returned
         */
        unique?: boolean;
        /**
         * Callback fired for each certificate found.
         *
         * Every certificate will be converted to `format` and passed as the first parameter.
         * As a syntactic sugar, an empty array can be passed instead of a function, it will be populated
         * with certificates.
         */
        ondata?: Certificate[] | ((certificate: Certificate) => void);
        /**
         * Callback fired at the end of retrieval.
         *
         * Useful for asynchronous invocations, but works in any case.
         */
        onend?: () => void;
        /**
         * Indicates that N-API shouldn't be used even if it is available.
         *
         * Default value depends on Node.js version (4, 5 and 7 `{fallback: true}`; modern versions
         * `{fallback: false}`). It is also `true` if Electron is detected.
         *
         * Finally, if `win-ca` has been required as `win-ca/fallback`, default value for this flag
         * is also set to `true`.
         *
         * Note, that one can force N-API by setting `{fallback: false}`, but if Node.js cannot proceed,
         * exception will be thrown. It can be caught, but Node.js will nevertheless remain in unstable
         * state, so beware.
         */
        fallback?: boolean;
        /**
         * Makes the retrieval process asynchronous.
         *
         * If `true`, API call returns immediately, certificates will be fetched later and fed to `ondata`
         * callback. Finally `onend` callback will be called.
         *
         * @default false
         */
        async?: boolean;
        /**
         * Emulate an ES6 generator.
         *
         * If called with this flag, ES6 iterator object is immediately returned (regular or asynchronous -
         * according to `async` flag).
         *
         * Note, that if callbacks are set along with `generator` flag, they will be *also* fired.
         *
         * @default false
         *
         * @example
         * import ca = require('win-ca/api')
         *
         * // Iterate
         * for (const der of ca({generator: true})) {
         *   // Process(der)
         * }
         *
         * // Or thus (Node.js v>=6)
         * const list = [...ca({generator: true})]
         *
         * // Or even (Node.js v>=10)
         * for await(let der of ca({generator: true, async: true})) {
         *   // await Process(der)
         * }
         */
        generator?: boolean;
        /**
         * How to install certificates.
         *
         * If set to `true`, certificated fetched will be also added to `https.globalAgent.options.ca`
         * (in PEM format, regardless of `format` parameter), so all subsequent calls to `https` client
         * methods (https.request, https.get etc.) will silently use them *instead* of built-in ones.
         *
         * If set to `'+'`, new *experimental* method is used instead: `tls.createSecureContext()` is
         * patched and fetched certificates are used *in addition* to built-in ones (and not only for
         * `https`, but for all secure connections).
         *
         * Injection mode can be later changed (or disabled) with the `inject()` helper function.
         *
         * @default false // just fetch from store, do not install
         */
        inject?: boolean | "+";
        /**
         * How to save certificates to disk.
         *
         * If set to string, or array of strings, they will be treated as list of candidate folders
         * to save certificates to. First one that exists or can be (recursively) created will be used.
         *
         * If no valid folder path found, saving will be silently discarded.
         *
         * If `true` is used, a predefined list of folders will be tried:
         * - `pem` folder inside `win-ca` module itself
         * - `.local/win-ca/pem` folder inside user's profile
         *
         * Certificates will be stored into the folder in two formats:
         * - Each certificate as separate text file with special file name (mimics behavior of
         * [OpenSSL](https://www.openssl.org/)'s `c_rehash` utility) - suitable for `SSL_CERT_DIR`.
         * - All certificates in single `roots.pem` file - suitable for `SSL_CERT_FILE`.
         *
         * If `win-ca` is required not via `win-ca/api`, it calls itself with `{inject: true, save: true}`
         * and additionally sets `ca.path` field and `SSL_CERT_DIR` environment variable to the folder
         * with certificates saved.
         *
         * @default false // ie use *no* I/O at all
         */
        save?: boolean | string | string[];
        /**
         * Callback called at the end of saving (if `save` is truthy).
         *
         * Path to a folder is passed to callback, or no parameters if it has been impossible to save
         * certificates to disk.
         */
        onsave?: (path?: string) => void;
    }
}
