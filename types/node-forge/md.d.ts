declare module "node-forge" {
    const md: {
        sha1: {
            create(): md.sha1.MessageDigest;
        };
        sha256: {
            create(): md.sha256.MessageDigest;
        };
        sha512: {
            create<TAlg extends md.sha512.AlgorithmSelection = md.sha512.AlgorithmSelection.Sha512>(
                /** @default 'SHA-512' */
                algorithm?: TAlg,
            ): TAlg extends md.sha512.AlgorithmSelection.Sha384 ? md.sha512.Sha384MessageDigest
                : TAlg extends md.sha512.AlgorithmSelection.Sha512224 ? md.sha512.Sha512224MessageDigest
                : TAlg extends md.sha512.AlgorithmSelection.Sha512256 ? md.sha512.Sha512256MessageDigest
                : TAlg extends md.sha512.AlgorithmSelection.Sha512 ? md.sha512.Sha512MessageDigest
                : never;
            sha224: {
                create(): md.sha512.Sha512224MessageDigest;
            };
            sha256: {
                create(): md.sha512.Sha512256MessageDigest;
            };
            sha384: {
                create(): md.sha512.Sha384MessageDigest;
            };
        };
        sha384: typeof md.sha512.sha384;
        "sha512/224": typeof md.sha512.sha224;
        "sha512/256": typeof md.sha512.sha256;
        md5: {
            create(): md.md5.MessageDigest;
        };
        algorithms: {
            md5: typeof md.md5;
            sha1: typeof md.sha1;
            sha256: typeof md.sha256;
            sha384: typeof md.sha384;
            sha512: typeof md.sha512;
            "sha512/224": (typeof md)["sha512/224"];
            "sha512/256": (typeof md)["sha512/256"];
        };
    };

    const md5: typeof md.md5;
    const sha1: typeof md.sha1;
    const sha256: typeof md.sha256;
    const sha512: typeof md.sha512 & {
        sha384: typeof md.sha512.sha384;
    };
    const sha384: typeof md.sha512.sha384;

    namespace md {
        type Algorithm = md5.Algorithm | sha1.Algorithm | sha256.Algorithm | sha512.Algorithm;

        interface MessageDigest {
            readonly algorithm: Algorithm;
            readonly blockLength: number;
            readonly digestLength: number;
            messageLength: number;
            fullMessageLength: number[] | null;
            readonly messageLengthSize: number;
            update(msg: string, encoding?: Encoding): this;
            digest(): util.ByteStringBuffer;
        }
    }
}
