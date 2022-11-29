// Type definitions for win-ca 3.5
// Project: https://github.com/ukoloff/win-ca
// Definitions by: Marcos Junior <https://github.com/junalmeida>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="node-forge" />

import { pki } from "node-forge";

export enum der2 {
    /** DER-format (binary, Node's Buffer) */
    der = 0,
    /** PEM-format (text, Base64-encoded) */
    pem = 1,
    /** PEM-format plus some laconic header */
    txt = 2,
    /** ASN.1-parsed certificate */
    asn1 = 3,
    /** Certificate in node-forge format (RSA only!) */
    x509 = 4,
}

export type Store = "root" | "ca" | "my" | "trustedpublisher";
export type Certificate = Buffer | string | pki.Certificate;

export interface CaOptions {
    /** which Windows' store to use. Default is Root (ie Trusted Root Certification Authorities). */
    store: Store[],
    /** how to save certificates to disk (default: false, ie use no I/O at all) */
    save?: boolean;
    /** whether certificates list should be deduplicated. Default is true (no duplicates returned). */
    unique?: boolean;
    /** defines representation of certificates to fetch. */
    format: der2,
    /** callback fired for each certificate found. */
    ondata?: Certificate[] | ((...items: Certificate[]) => void);
    /** callback fired (with no parameters) at the end of retrieval */
    onend?: () => void;
    /** callback called at the end of saving (if save is truthy).*/
    onsave?: () => void;
    /** boolean flag, indicating N-API shouldn't be used even if it is available.
     * Default value depends on Node.js version (4, 5 and 7 {fallback: true}; modern versions {fallback: false}). It is also true if Electron is detected.*/
    fallback?: boolean;
    /** boolean flag to make retrieval process asynchronous (false by default) */
    async?: boolean;
    /** boolean flag to emulate ES6 generator (default: false) */
    generator?: boolean;
    /** how to install certificates (default: false, ie just fetch from store, do not install). If set to true, certificated fetched will be also added to https.globalAgent.options.ca (in PEM format, regardless of format parameter), so all subsequent calls to https client methods (https.request, https.get etc.) will silently use them instead of built-in ones. */
    inject?: boolean;
}
declare function Api(params: CaOptions): void;


declare module "win-ca";
export default Api;
