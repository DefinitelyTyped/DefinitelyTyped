import { ClientRequest } from "node:http";
import { Transform } from "node:stream";

export interface Signature {
    keyId: string;
    algorithm: string;
    headers: string[];
    signature: string;
}

export type RequestSignerOptions =
    | {
        keyId: string;
        key: string | Buffer;
        /** Required for HMAC */
        algorithm?: string | undefined;
        /** Not required for HMAC */
        keyPassphrase?: string | undefined;
    }
    | {
        sign(data: string, callback: (error: any, sig?: Signature) => void): void;
    };

/** @see {@link createSigner} */
declare class _RequestSigner {
    rs_alg: [string, string, string];
    rs_signFunc?: ((error: any, sig?: Signature) => void) | undefined;
    rs_keyId?: string | undefined;
    rs_signer?: Transform | undefined;
    rs_headers: string[];
    rs_lines: string[];

    constructor(options: RequestSignerOptions);

    /** Adds a header to be signed alongside its value */
    writeHeader(header: string, value: string): string;
    writeDateHeader(): string;
    /**
     * Add the request target to be signed
     * @param method HTTP mehod (i.e. `"get"`, `"post"`, `"put"`)
     */
    writeTarget(method: string, path: string): void;
    /** Calculate the value for the Authorization header on this request asynchronously */
    sign(callback: (error: any, authorization: string) => void): void;
}

/** @see {@link createSigner} */
export type RequestSigner = _RequestSigner;

/** Identifies whether a given object is a request signer or not */
export function isSigner(obj: any): obj is RequestSigner;

/**
 * Creates a request signer, used to asynchronously build a signature
 * for a request (does not have to be a {@link ClientRequest})
 * @param options Options for the constructor
 * @see {@link RequestSigner}
 */
export function createSigner(options: RequestSignerOptions): RequestSigner;

export interface SignOptions {
    keyId: string;
    /** Either a PEM or HMAC key */
    key: string;
    /**
     * @default ["date"]
     */
    headers?: readonly string[] | undefined;
    /**
     * **Required** if the {@link key} is HMAC.
     * Default is the same as the sshpk signing algorithm
     * for the type of key given
     */
    algorithm?: string | undefined;
    /**
     * @default "1.1"
     */
    httpVersion?: string | undefined;
    /**
     * @default false
     */
    strict?: boolean | undefined;
    /**
     * How many seconds until the signature expires
     * @default 60
     */
    expiresIn?: number | undefined;
    /**
     * The passphrase to pass to sshpk to parse the private key.
     * Does nothing if the key is HMAC
     */
    keyPassphrase?: string | undefined;
}

/**
 * Adds an 'Authorization' header to a {@link ClientRequest} object.
 *
 * Note that this API will add a Date header if it's not already set. Any
 * other headers in the `options.headers` array MUST be present, or this
 * will throw
 *
 * @throws {TypeError} On bad parameter types (input)
 * @throws {InvalidAlgorithmError} If algorithm was bad or incompatible with the given key
 * @throws {sshpk.KeyParseError} If key was bad
 * @throws {MissingHeaderError} If a header to be signed was specified but was not present
 */
export function signRequest(request: ClientRequest, options: SignOptions): boolean;

// To avoid exporting _RequestSigner (not actually exposed by the library)
export {};
