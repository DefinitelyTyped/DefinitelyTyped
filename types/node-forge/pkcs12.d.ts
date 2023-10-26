declare module "node-forge" {
    namespace pkcs12 {
        interface BagsFilter {
            localKeyId?: string | undefined;
            localKeyIdHex?: string | undefined;
            friendlyName?: string | undefined;
            bagType?: string | undefined;
        }

        interface Bag {
            type: string;
            attributes: any;
            key?: pki.PrivateKey | undefined;
            cert?: pki.Certificate | undefined;
            asn1: asn1.Asn1;
        }

        interface Pkcs12Pfx {
            version: string;
            safeContents: {
                encrypted: boolean;
                safeBags: Bag[];
            }[];
            getBags: (filter: BagsFilter) => {
                [key: string]: Bag[] | undefined;
                localKeyId?: Bag[] | undefined;
                friendlyName?: Bag[] | undefined;
            };
            getBagsByFriendlyName: (fiendlyName: string, bagType: string) => Bag[];
            getBagsByLocalKeyId: (localKeyId: string, bagType: string) => Bag[];
        }

        function pkcs12FromAsn1(obj: any, strict?: boolean, password?: string): Pkcs12Pfx;
        function pkcs12FromAsn1(obj: any, password?: string): Pkcs12Pfx;

        function toPkcs12Asn1(
            key: pki.PrivateKey | null,
            cert: pki.Certificate | pki.Certificate[],
            password: string | null,
            options?: {
                algorithm?: "aes128" | "aes192" | "aes256" | "3des" | undefined;
                count?: number | undefined;
                saltSize?: number | undefined;
                useMac?: boolean | undefined;
                localKeyId?: Hex | undefined;
                friendlyName?: string | undefined;
                generateLocalKeyId?: boolean | undefined;
            },
        ): asn1.Asn1;

        function generateKey(
            password: string | null | undefined,
            salt: util.ByteBuffer,
            id: Byte,
            iter: number,
            n: number,
            md?: md.MessageDigest,
        ): util.ByteBuffer;
    }
}
