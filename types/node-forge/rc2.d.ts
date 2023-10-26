declare module "node-forge" {
    namespace rc2 {
        type pad_function = (blockSize: number, buffer: util.ByteBuffer, decrypt: boolean) => boolean;
        interface cipher {
            start(iv: util.ByteBuffer | string | null, output?: util.ByteBuffer): void;
            update(input: util.ByteBuffer): void;
            finish(pad?: pad_function): boolean;
            output: util.ByteBuffer;
        }

        function expandKey(key: string | util.ByteBuffer, effKeyBits?: number): util.ByteBuffer;
        function startEncrypting(
            key: string | util.ByteBuffer,
            iv: util.ByteBuffer | Byte[] | Bytes,
            output: util.ByteBuffer | null,
        ): rc2.cipher;
        function createEncryptionCipher(key: string | util.ByteBuffer, bits?: number): rc2.cipher;
        function startDecrypting(
            key: string | util.ByteBuffer,
            iv: util.ByteBuffer | Byte[] | Bytes,
            output: util.ByteBuffer | null,
        ): rc2.cipher;
        function createDecryptionCipher(key: string | util.ByteBuffer, bits?: number): rc2.cipher;
    }
}
