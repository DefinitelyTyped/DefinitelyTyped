declare module "node-forge" {
    const rsa: typeof pki.rsa;

    namespace pki {
        namespace rsa {
            type EncryptionScheme = "RSAES-PKCS1-V1_5" | "RSA-OAEP" | "RAW" | "NONE" | null;
            type SignatureScheme = "RSASSA-PKCS1-V1_5" | pss.PSS | "NONE" | null;

            interface PublicKey {
                n: jsbn.BigInteger;
                e: jsbn.BigInteger;
                encrypt(data: Bytes, scheme?: EncryptionScheme, schemeOptions?: any): Bytes;
                verify(digest: Bytes, signature: Bytes, scheme?: SignatureScheme): boolean;
            }

            interface PrivateKey {
                n: jsbn.BigInteger;
                e: jsbn.BigInteger;
                d: jsbn.BigInteger;
                p: jsbn.BigInteger;
                q: jsbn.BigInteger;
                dP: jsbn.BigInteger;
                dQ: jsbn.BigInteger;
                qInv: jsbn.BigInteger;
                decrypt(data: Bytes, scheme?: EncryptionScheme, schemeOptions?: any): Bytes;
                sign(md: md.MessageDigest | Bytes, scheme?: SignatureScheme): Bytes;
            }

            interface KeyPair {
                publicKey: PublicKey;
                privateKey: PrivateKey;
            }

            interface GenerateKeyPairOptions {
                bits?: number | undefined;
                e?: number | undefined;
                workerScript?: string | undefined;
                workers?: number | undefined;
                workLoad?: number | undefined;
                prng?: any;
                algorithm?: string | undefined;
            }

            function setPublicKey(n: jsbn.BigInteger, e: jsbn.BigInteger): PublicKey;

            function setPrivateKey(
                n: jsbn.BigInteger,
                e: jsbn.BigInteger,
                d: jsbn.BigInteger,
                p: jsbn.BigInteger,
                q: jsbn.BigInteger,
                dP: jsbn.BigInteger,
                dQ: jsbn.BigInteger,
                qInv: jsbn.BigInteger,
            ): PrivateKey;

            function generateKeyPair(
                bits?: number,
                e?: number,
                callback?: (err: Error, keypair: KeyPair) => void,
            ): KeyPair;
            function generateKeyPair(
                options?: GenerateKeyPairOptions,
                callback?: (err: Error, keypair: KeyPair) => void,
            ): KeyPair;
        }
    }
}
