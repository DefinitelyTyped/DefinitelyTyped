export namespace Cert {
    enum TYPE {
        NONE = 0,
        X509 = 1,
        HOSTKEY_LIBSSH2 = 2,
        STRARRAY = 3
    }

    enum SSH {
        MD5 = 1,
        SHA1 = 2
    }
}

export class Cert {
    certType: number;
}
