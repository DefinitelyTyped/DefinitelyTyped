declare module "node-forge" {
    namespace md {
        namespace sha256 {
            type Algorithm = "sha256";

            interface MessageDigest extends md.MessageDigest {
                readonly algorithm: Algorithm;
                readonly blockLength: 64;
                readonly digestLength: 32;
                readonly messageLengthSize: 8;
            }
        }
    }
}
