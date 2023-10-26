declare module "node-forge" {
    namespace hmac {
        type Algorithm = md.Algorithm;

        interface HMAC {
            digest(): util.ByteBuffer;
            getMac(): util.ByteBuffer;
            start(md: Algorithm | md.MessageDigest, key: string | util.ByteBuffer | null): void;
            update(bytes: string): void;
        }

        function create(): HMAC;
    }
}
