declare namespace CAdESCOM {
    interface CPSignerAsync extends CADES_Common.Async<CPSigner> {
        propset_Certificate(certificate: CAPICOM.CertificateAsync): Promise<void>;

        propset_CheckCertificate(checkCertificate: boolean): Promise<void>;

        propset_KeyPin(keyPin: string): Promise<void>;

        propset_Options(options: CADES_Common.ValuesOf<CAPICOM.CAPICOM_CERTIFICATE_INCLUDE_OPTION>): Promise<void>;

        propset_TSAAddress(TSAAddress: string): Promise<void>;
    }
    interface CPAuthenticatedAttributes2Async extends CADES_Common.Async<CPAuthenticatedAttributes2>  {
    }
    interface CadesSignedDataAsync extends CADES_Common.Async<CadesSignedData> {
        propset_DisplayData(displayData: CADES_Common.ValuesOf<CADESCOM_DISPLAY_DATA>): Promise<void>;

        propset_Content(content: string): Promise<void>;

        propset_ContentEncoding(contentEncoding: CADES_Common.ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>): Promise<void>;
    }

    interface VersionAsync extends CADES_Common.Async<Version> {
    }

    interface AboutAsync extends CADES_Common.Async<About> {
    }

    interface CPSignersAsync extends CADES_Common.Async<CPSigners> {
    }

    interface SignedXMLAsync extends CADES_Common.Async<SignedXML> {
        propset_Content(content: string): Promise<void>;

        propset_DigestMethod(digestMethod: string): Promise<void>;

        propset_SignatureMethod(signatureMethod: string): Promise<void>;

        propset_SignatureType(signatureType: CADES_Common.ValuesOf<CADESCOM_XML_SIGNATURE_TYPE>): Promise<void>;
    }

    interface CPHashedDataAsync extends CADES_Common.Async<CPHashedData> {
        propset_Algorithm(algorithm: CADES_Common.ValuesOf<CADESCOM_HASH_ALGORITHM & CAPICOM.CAPICOM_HASH_ALGORITHM>): Promise<void>;

        propset_DataEncoding(dataEncoding: CADES_Common.ValuesOf<CADESCOM_CONTENT_ENCODING_TYPE>): Promise<void>;
    }

    interface CPAuthenticatedAttributes2Async extends CADES_Common.Async<CPAuthenticatedAttributes2> {
    }

    interface CPAttributeAsync extends CADES_Common.Async<CPAttribute> {
        propset_Name(name: CADES_Common.ValuesOf<CADESCOM_ATTRIBUTE>): Promise<void>;

        propset_Value(value: any): Promise<void>;

        propset_ValueEncoding(valueEncoding: CADES_Common.ValuesOf<CAPICOM.CAPICOM_ENCODING_TYPE>): Promise<void>;
    }

    interface RawSignatureAsync extends CADES_Common.Async<RawSignature> {
    }
}
