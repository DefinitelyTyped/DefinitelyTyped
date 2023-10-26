declare module "node-forge" {
    namespace kem {
        namespace rsa {
            interface kem {
                /**
                 * Generates a secret key and its encapsulation.
                 *
                 * @param publicKey the RSA public key to encrypt with.
                 * @param keyLength the length, in bytes, of the secret key to generate.
                 */
                encrypt(publicKey: pki.rsa.PublicKey, keyLength: number): EncryptResult;
                /**
                 * Decrypts an encapsulated secret key.
                 *
                 * @param privateKey the RSA private key to decrypt with.
                 * @param encapsulation the ciphertext for generating the secret key, as a binary-encoded
                 * string of bytes.
                 * @param keyLength the length, in bytes, of the secret key to generate.
                 *
                 * @return the secret key as a binary-encoded string of bytes.
                 */
                decrypt(privateKey: pki.rsa.PrivateKey, encapsulation: string, keyLength: number): string;
            }

            interface random {
                getBytesSync(count: number): Bytes;
            }

            interface Options {
                /**
                 * A custom crypto-secure pseudo-random number generator to use.
                 */
                prng?: random | undefined;
            }

            /**
             * Creates an RSA KEM API object for generating a secret asymmetric key.
             *
             * The symmetric key may be generated via a call to 'encrypt', which will
             * produce a ciphertext to be transmitted to the recipient and a key to be
             * kept secret. The ciphertext is a parameter to be passed to 'decrypt' which
             * will produce the same secret key for the recipient to use to decrypt a
             * message that was encrypted with the secret key.
             *
             * @param kdf the KDF API to use (eg: `new forge.kem.kdf1()`).
             * @param options the options to use.
             */
            function create(kdf: KDF, options?: Options): kem;
        }

        interface EncryptResult {
            /**
             * The ciphertext for generating the secret key, as a binary-encoded string of bytes.
             */
            encapsulation: string;
            /**
             * The secret key to use for encrypting a message.
             */
            key: string;
        }

        interface KDF {
            /**
             * Generate a key of the specified length.
             *
             * @param x the binary-encoded byte string to generate a key from.
             * @param length the number of bytes to generate (the size of the key).
             *
             * @return the key as a binary-encoded string.
             */
            generate(x: string, length: number): string;
        }

        /**
         * Creates a key derivation API object that implements KDF1 per ISO 18033-2.
         *
         * @param md the hash API to use.
         * @param digestLength a digest length that must be positive and less than or equal to `md.digestLength`.
         *
         * @return a KDF1 API object.
         */
        class kdf1 implements KDF {
            constructor(md: md.MessageDigest, digestLength?: number);
            /**
             * Generate a key of the specified length.
             *
             * @param x the binary-encoded byte string to generate a key from.
             * @param length the number of bytes to generate (the size of the key).
             *
             * @return the key as a binary-encoded string.
             */
            generate(x: string, length: number): string;
        }

        /**
         * Creates a key derivation API object that implements KDF2 per ISO 18033-2.
         *
         * @param md the hash API to use.
         * @param digestLength a digest length that must be positive and less than or equal to `md.digestLength`.
         *
         * @return a KDF2 API object.
         */
        class kdf2 implements KDF {
            constructor(md: md.MessageDigest, digestLength?: number);
            /**
             * Generate a key of the specified length.
             *
             * @param x the binary-encoded byte string to generate a key from.
             * @param length the number of bytes to generate (the size of the key).
             *
             * @return the key as a binary-encoded string.
             */
            generate(x: string, length: number): string;
        }
    }
}
