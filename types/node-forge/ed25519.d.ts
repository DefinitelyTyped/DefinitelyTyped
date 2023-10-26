declare module "node-forge" {
    const ed25519: typeof pki.ed25519;

    namespace pki {
        namespace ed25519 {
            type NativeBuffer = Buffer | Uint8Array;
            type Key = NativeBuffer;

            type ToNativeBufferParameters =
                | {
                    md: md.MessageDigest;
                }
                | {
                    message: NativeBuffer | util.ByteBuffer;
                }
                | {
                    message: string;
                    encoding: "binary" | "utf8";
                };

            // `string`s will be converted by toNativeBuffer with `encoding: 'binary'`
            type BinaryBuffer = NativeBuffer | util.ByteBuffer | string;

            namespace constants {
                const PUBLIC_KEY_BYTE_LENGTH = 32;
                const PRIVATE_KEY_BYTE_LENGTH = 64;
                const SEED_BYTE_LENGTH = 32;
                const SIGN_BYTE_LENGTH = 64;
                const HASH_BYTE_LENGTH = 64;
            }

            // generateKeyPair does not currently accept `util.ByteBuffer` as the seed.
            function generateKeyPair(options?: { seed?: NativeBuffer | string | undefined }): {
                publicKey: NativeBuffer;
                privateKey: NativeBuffer;
            };

            function privateKeyFromAsn1(obj: asn1.Asn1): { privateKeyBytes: NativeBuffer };

            function publicKeyFromAsn1(obj: asn1.Asn1): NativeBuffer;

            function publicKeyFromPrivateKey(options: { privateKey: BinaryBuffer }): NativeBuffer;

            function sign(
                options: ToNativeBufferParameters & {
                    privateKey: BinaryBuffer;
                },
            ): NativeBuffer;

            function verify(
                options: ToNativeBufferParameters & {
                    signature: BinaryBuffer;
                    publicKey: BinaryBuffer;
                },
            ): boolean;
        }
    }
}
