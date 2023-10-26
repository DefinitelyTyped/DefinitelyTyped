declare module "node-forge" {
    namespace md {
        namespace sha512 {
            type Algorithm = Algorithm.Sha384 | Algorithm.Sha512 | Algorithm.Sha512224 | Algorithm.Sha512256;
            namespace Algorithm {
                type Sha384 = "sha384";
                type Sha512 = "sha512";
                type Sha512224 = "sha512/224";
                type Sha512256 = "sha512/256";
            }

            type AlgorithmSelection =
                | AlgorithmSelection.Sha384
                | AlgorithmSelection.Sha512
                | AlgorithmSelection.Sha512224
                | AlgorithmSelection.Sha512256;
            namespace AlgorithmSelection {
                type Sha384 = "SHA-384";
                type Sha512 = "SHA-512";
                type Sha512224 = "SHA-512/224";
                type Sha512256 = "SHA-512/256";
            }

            interface MessageDigest extends md.MessageDigest {
                readonly algorithm: Algorithm;
                readonly blockLength: 128;
                readonly messageLengthSize: 16;
            }

            interface Sha512224MessageDigest extends MessageDigest {
                readonly algorithm: Algorithm.Sha512224;
                readonly digestLength: 28;
            }

            interface Sha512256MessageDigest extends MessageDigest {
                readonly algorithm: Algorithm.Sha512256;
                readonly digestLength: 32;
            }

            interface Sha384MessageDigest extends MessageDigest {
                readonly algorithm: Algorithm.Sha384;
                readonly digestLength: 48;
            }

            interface Sha512MessageDigest extends MessageDigest {
                readonly algorithm: Algorithm.Sha512;
                readonly digestLength: 64;
            }
        }
    }
}
