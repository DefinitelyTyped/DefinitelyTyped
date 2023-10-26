declare module "node-forge" {
    namespace md {
        namespace sha1 {
            type Algorithm = "sha1";

            interface MessageDigest extends md.MessageDigest {
                readonly algorithm: Algorithm;
                readonly blockLength: 64;
                readonly digestLength: 20;
                readonly messageLengthSize: 8;
            }
        }
    }
}
