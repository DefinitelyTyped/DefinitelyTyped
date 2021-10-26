declare namespace CAdESCOM {
    interface CPSigner {
        Certificate: CAPICOM.Certificate;
        CheckCertificate: boolean;
        AuthenticatedAttributes2: CPAuthenticatedAttributes2;
        KeyPin: string;
        Options: CADES_Common.ValuesOf<CAPICOM.CAPICOM_CERTIFICATE_INCLUDE_OPTION>;
        readonly SignatureTimeStampTime: CADES_Common.VarDate;
        readonly SigningTime: CADES_Common.VarDate;
        TSAAddress: string;

        Display(hwndParent?: number, title?: string): void;

        Load(fileName: string, password?: string): void;
    }

    interface CPAuthenticatedAttributes2 {
        Add(attribute: CPAttribute): void;
        Clear(): void;
        Remove(index: number): void;
        readonly Count: number;
        Item(index: number): CPAttribute;
    }

    interface CadesSignedData {
        readonly Certificates: CAPICOM.Certificates;
        Content: string;
        ContentEncoding: CADES_Common.ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>;

        DisplayData: CADES_Common.ValuesOf<CADESCOM_DISPLAY_DATA>;

        Display(hwndParent?: number, title?: string): void;

        EnhanceCades(cadesType?: CADES_Common.ValuesOf<CADESCOM_CADES_TYPE>, TSAAddress?: string, encodingType?: CADES_Common.ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): string;
        SignHash(hashedData: CPHashedData, signer: CPSigner, CadesType: CADES_Common.ValuesOf<CADESCOM_CADES_TYPE>, EncodingType?: CADES_Common.ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): string;
        SignCades(signer?: CPSigner, CadesType?: CADES_Common.ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean, EncodingType?: CADES_Common.ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): string;
        VerifyHash(hashedData: CPHashedData, SignedMessage: string, CadesType?: CADES_Common.ValuesOf<CADESCOM_CADES_TYPE>): void;
        VerifyCades(SignedMessage: string, CadesType?: CADES_Common.ValuesOf<CADESCOM_CADES_TYPE>, bDetached?: boolean): void;
    }

    interface Version {
        readonly BuildVersion: number;
        readonly MajorVersion: number;
        readonly MinorVersion: number;
        readonly toStringDefault: string;

        toString(): string;
    }

    interface About {
        readonly BuildVersion: number;
        readonly MajorVersion: number;
        readonly MinorVersion: number;
        readonly PluginVersion: Version;
        readonly Version: string;

        CSPName(ProviderType?: number): string;

        CSPVersion(ProviderName?: string, ProviderType?: number): Version;

        ProviderVersion(ProviderName?: string, ProviderType?: number): string;

        toString(): string;
    }

    interface CPSigners {
        readonly Count: number;

        Item(index: number): CPSigner;
    }

    interface SignedXML {
        Content: string;
        DigestMethod: string;
        SignatureMethod: string;
        SignatureType: CADES_Common.ValuesOf<CADESCOM_XML_SIGNATURE_TYPE>;
        readonly Signers: CAPICOM.Signers;

        Sign(signer?: CPSigner, XPath?: string): string;

        Verify(SignedMessage: string, XPath?: string): void;
    }

    interface CPHashedData {
        Algorithm: CADES_Common.ValuesOf<CADESCOM_HASH_ALGORITHM & CAPICOM.CAPICOM_HASH_ALGORITHM>;
        DataEncoding: CADES_Common.ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>;
        Value: string;

        Hash(newVal: string): void;

        SetHashValue(newVal: string): void;
    }

    interface CPAttribute {
        Name: CADES_Common.ValuesOf<CADESCOM_ATTRIBUTE>;
        Value: any;
        ValueEncoding: CADES_Common.ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>;
    }

    interface RawSignature {
        SignHash(hash: CPHashedData, certificate?: string): string;

        VerifyHash(hash: CPHashedData, certificate: CAPICOM.Certificate, signature: string): void;
    }
}
