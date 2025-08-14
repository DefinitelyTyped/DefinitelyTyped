/** Gets and sets the salt length.
 * @param saltLength default: 32
 * @returns the salt length
 */
export function saltLength(saltLength?: number): number;
/** Gets and sets the number of hash iterations to make.
 * @param iterations default: 1000000
 * @returns the number of hash iterations
 */
export function iterations(iterations?: number): number;
/** Gets and sets the key length.
 * @param keyLength default: 128
 * @returns the key length
 */
export function keyLength(keyLength?: number): number;
/** Gets and sets the digest algorithm.
 * @param digest default: "sha512"
 * @returns the digest algorithm
 */
export function digest(digest?: string): string;
/** Gets and sets the pepper value, which will be concatenated to any salts used from now.
 * @param pepper default: ""
 * @returns the pepper value
 */
export function pepper(pepper?: string): string;

/** Hashes a password.
 * @param password the password to hash
 * @returns a promise that resolves to an object containing the base 64 salt and hash
 */
export function hash(password: string): Promise<{ salt: string; hash: string }>;

/** Compares a password with a salt and hash.
 * @param password the unhashed password
 * @param salt the salt with which to hash the password
 * @param hash the hash to compare the password against
 * @returns true if hashing the password with the salt produces the hash, false otherwise
 */
export function compare(password: string, { salt, hash }: { salt: string; hash: string }): Promise<boolean>;

/** s-salt-pepper provides password hashing with salt and variable iterations of pbkdf2. */
export as namespace password;
