declare namespace CADES_Plugin {
    interface ObjectNames {
        "CAPICOM.Store": CAPICOM.Store;
        "CAdESCOM.CPSigner": CAdESCOM.CPSigner;
        "CAdESCOM.About": CAdESCOM.About;
        "CAdESCOM.SignedXML": CAdESCOM.SignedXML;
        "CAdESCOM.HashedData": CAdESCOM.CPHashedData;
        "CAdESCOM.CadesSignedData": CAdESCOM.CadesSignedData;
        "CAdESCOM.CPAttribute": CAdESCOM.CPAttribute;
        "CAdESCOM.RawSignature": CAdESCOM.RawSignature;
    }

    interface ObjectNamesAsync {
        "CAdESCOM.Store": CAPICOM.StoreAsync;
        "CAdESCOM.CPSigner": CAdESCOM.CPSignerAsync;
        "CAdESCOM.About": CAdESCOM.AboutAsync;
        "CAdESCOM.SignedXML": CAdESCOM.SignedXMLAsync;
        "CAdESCOM.HashedData": CAdESCOM.CPHashedDataAsync;
        "CAdESCOM.CadesSignedData": CAdESCOM.CadesSignedDataAsync;
        "CAdESCOM.CPAttribute": CAdESCOM.CPAttributeAsync;
        "CAdESCOM.RawSignature": CAdESCOM.RawSignatureAsync;
    }

    interface LogLevel {
        readonly LOG_LEVEL_DEBUG: 4;
        readonly LOG_LEVEL_INFO: 2;
        readonly LOG_LEVEL_ERROR: 1;
    }

    interface SignedXmlUrls {
        readonly XmlDsigGost3410Url: "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102001-gostr3411";
        readonly XmlDsigGost3410UrlObsolete: "http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411";
        readonly XmlDsigGost3411Url: "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr3411";
        readonly XmlDsigGost3411UrlObsolete: "http://www.w3.org/2001/04/xmldsig-more#gostr3411";
    }

    interface EncodingType {
        readonly CADESCOM_ENCODE_ANY: -1;
        readonly CADESCOM_ENCODE_BASE64: 0;
        readonly CADESCOM_ENCODE_BINARY: 1;
    }
}

interface CADESPluginBase extends Promise<never>,
    CAPICOM.StoreLocationPlugin, CAdESCOM.StoreLocationPlugin, CAPICOM.StoreNamePlugin,
    CAPICOM.StoreOpenModePlugin, CAPICOM.CAPICOM_CERTIFICATE_FIND_TYPE,
    CADES_Plugin.LogLevel, CAdESCOM.CADESCOM_XML_SIGNATURE_TYPE,
    CADES_Plugin.SignedXmlUrls, CAdESCOM.CADESCOM_CADES_TYPE,
    CADES_Plugin.EncodingType, CAPICOM.CAPICOM_CERTIFICATE_INCLUDE_OPTION,
    CAPICOM.CertIntoTypePlugin, CAPICOM.KeyUsagePlugin,
    CAPICOM.PropIDPlugin, CAPICOM.OIDPlugin, CAPICOM.EKUPlugin,
    CAPICOM.CAPICOM_ATTRIBUTE, CAdESCOM.CADESCOM_ATTRIBUTE,
    CAdESCOM.CADESCOM_CONTENT_ENCODING_TYPE, CAdESCOM.CADESCOM_DISPLAY_DATA,
    CAdESCOM.CADESCOM_ENCRYPTION_ALGORITHM, CAdESCOM.CADESCOM_HASH_ALGORITHM,
    CAdESCOM.CADESCOM_InstallResponseRestrictionFlags {
    readonly JSModuleVersion: string;
    readonly current_log_level: number;

    async_spawn<T>(generatorFun: (...args: any[]) => Iterator<T>): T;

    set(obj: CADESPluginBase): void;

    set_log_level(level: CADES_Common.ValuesOf<CADES_Plugin.LogLevel>): void;

    getLastError(exception: Error): string;

    is_capilite_enabled(): boolean;
}

interface CADESPluginAsync extends CADESPluginBase {
    CreateObjectAsync<T extends keyof CADES_Plugin.ObjectNamesAsync>(objName: T): Promise<CADES_Plugin.ObjectNamesAsync[T]>;

    ReleasePluginObjects(): Promise<boolean>;
}

interface CADESPluginSync extends CADESPluginBase {
    CreateObject<T extends keyof CADES_Plugin.ObjectNames>(objName: T): CADES_Plugin.ObjectNames[T];
}

type CADESPlugin = CADESPluginAsync | CADESPluginSync;
