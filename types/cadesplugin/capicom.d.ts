declare namespace CAPICOM {
    interface EncodedData {
        readonly Format: string;

        Value(EncodingType?: CAPICOM_ENCODING_TYPE): string;
    }

    interface OID {
        FriendlyName: string;
        Name: CAPICOM_OID;
        Value: string;
    }

    interface PublicKey {
        readonly Algorithm: OID;
        readonly EncodedKey: EncodedData;
        readonly EncodedParameters: EncodedData;
        readonly Length: number;
    }

    interface PrivateKey {
        readonly ContainerName: string;
        readonly KeySpec: CAPICOM_KEY_SPEC;
        readonly ProviderName: string;
        readonly ProviderType: CAPICOM_PROV_TYPE;
        readonly UniqueContainerName: string;
        ChangePin(): void;
        CachePin: boolean;
        KeyPin: string;
    }

    interface EKU {
        Name: string;
        OID: string;
    }
    interface EKUs {
        readonly Count: number;
        Item(index: number): EKU;
    }
    interface ExtendedKeyUsage {
        readonly EKUs: EKUs;
        IsCritical(): boolean;
        IsPresent(): boolean;
    }

    interface Certificate {
        readonly Version: number;
        readonly Thumbprint: string;
        readonly SubjectName: string;
        readonly SerialNumber: string;
        readonly IssuerName: string;
        readonly ValidFromDate: CADES_Common.VarDate;
        readonly ValidToDate: CADES_Common.VarDate;

        HasPrivateKey(): boolean;

        GetInfo(infoType: CAPICOM_CERT_INFO_TYPE): string;

        IsValid(): CertificateStatus;

        Display(): void;

        PublicKey(): PublicKey;

        PrivateKey: PrivateKey;

        Export(EncodingType: CADES_Common.ValuesOf<CAPICOM_ENCODING_TYPE>): string;

        ExtendedKeyUsage(): ExtendedKeyUsage;
    }

    interface CertificateStatus {
        Result: boolean;
    }

    interface Certificates {
        readonly Count: number;

        Item(index: number): Certificate;

        Find(findType: CADES_Common.ValuesOf<CAPICOM_CERTIFICATE_FIND_TYPE>, varCriteria?: any, bFindValidOnly?: boolean): Certificates;

        Select(title?: string, displayString?: string, bMultiSelect?: boolean): Certificates;
    }

    interface Store {
        readonly Certificates: Certificates;
        readonly Location: CADES_Common.ValuesOf<CAPICOM_STORE_LOCATION>;
        readonly Name: string;

        Open(location?: CADES_Common.ValuesOf<CAPICOM_STORE_LOCATION>, name?: CADES_Common.ValuesOf<CAPICOM_STORE_NAME>, openMode?: CADES_Common.ValuesOf<CAPICOM_STORE_OPEN_MODE>): void;

        Close(): void;

        Delete(): boolean;

        Import(encodedStore: string): void;
    }

    interface Signers {
        readonly Count: number;

        Item(index: number): Signer;
    }

    interface Signer {
        Certificate: Certificate;
        Options: CAPICOM_CERTIFICATE_INCLUDE_OPTION;

        Load(fileName: string, password?: string): void;
    }
}
