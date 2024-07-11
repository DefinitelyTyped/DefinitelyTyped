export const HASH_ALGOS: Record<"sha1" | "sha256" | "sha512", boolean>;
export const PK_ALGOS: Record<"rsa" | "dsa" | "ecdsa", boolean>;
export const HEADER: Record<string, string>;

export class HttpSignatureError extends Error {
    constructor(message: any, caller: (...args: any) => any);
}

export class InvalidAlgorithmError extends Error {}

/**
 * Converts an OpenSSH public key (rsa only) to a PKCS#8 PEM file.
 * The reverse of {@link fingerprint}.
 *
 * The intent of this module is to interoperate with OpenSSL only,
 * specifically the node crypto module's `verify` method
 *
 * @param key An OpenSSH public key
 * @return PEM-encoded form of the RSA public key
 * @throws {TypeError} On bad input
 * @throws {Error} On invalid ssh key formatted data
 */

export function sshKeyToPEM(key: string): string;

/**
 * Generates an OpenSSH fingerprint from an ssh public key
 *
 * @param key An OpenSSH public key
 * @return Key fingerprint
 * @throws {TypeError} On bad input
 * @throws {Error} If what was passed doesn't look like an ssh public key
 */
export function fingerprint(key: string): string;

/**
 * Converts a PKGCS#8 PEM file to an OpenSSH public key (rsa).
 * The reverse of {@link sshKeyToPEM}
 */
export function pemToRsaSSHKey(pem: string, comment: string): string;
