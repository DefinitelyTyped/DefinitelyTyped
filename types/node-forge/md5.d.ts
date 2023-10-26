declare module "node-forge" {
    namespace md {
        namespace md5 {
            type Algorithm = "md5";

            interface MessageDigest extends md.MessageDigest {
                readonly algorithm: Algorithm;
                readonly blockLength: 64;
                readonly digestLength: 16;
                readonly messageLengthSize: 8;
            }
        }
    }
}
