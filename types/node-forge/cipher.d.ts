declare module "node-forge" {
    namespace cipher {
        type Algorithm =
            | "AES-ECB"
            | "AES-CBC"
            | "AES-CFB"
            | "AES-OFB"
            | "AES-CTR"
            | "AES-GCM"
            | "3DES-ECB"
            | "3DES-CBC"
            | "DES-ECB"
            | "DES-CBC";

        function createCipher(algorithm: Algorithm, payload: util.ByteBuffer | Bytes): BlockCipher;
        function createDecipher(algorithm: Algorithm, payload: util.ByteBuffer | Bytes): BlockCipher;

        interface StartOptions {
            iv?: util.ByteBuffer | Byte[] | Bytes | undefined;
            tag?: util.ByteStringBuffer | undefined;
            tagLength?: number | undefined;
            additionalData?: string | undefined;
        }

        interface BlockCipher {
            start: (options?: StartOptions) => void;
            update: (input: util.ByteBuffer) => void;
            finish: () => boolean;
            output: util.ByteStringBuffer;
            mode: Mode;
        }

        interface Mode {
            tag: util.ByteStringBuffer;
        }
    }
}
