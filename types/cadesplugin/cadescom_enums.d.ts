declare namespace CAdESCOM {
    interface StoreLocationPlugin {
       readonly CADESCOM_LOCAL_MACHINE_STORE: 1;
       readonly CADESCOM_CURRENT_USER_STORE: 2;
       readonly CADESCOM_CONTAINER_STORE: 100;
    }

    interface CADESCOM_STORE_LOCATION extends StoreLocationPlugin {
       readonly CADESCOM_MEMORY_STORE: 0;
       readonly CADESCOM_ACTIVE_DIRECTORY_USER_STORE: 3;
       readonly CADESCOM_SMART_CARD_USER_STORE: 4;
    }

    interface CADESCOM_CADES_TYPE {
       readonly CADESCOM_CADES_BES: 1;
       readonly CADESCOM_CADES_DEFAULT: 0;
       readonly CADESCOM_CADES_T: 5;
       readonly CADESCOM_CADES_X_LONG_TYPE_1: 93;
    }

    interface CADESCOM_CONTENT_ENCODING_TYPE {
       readonly CADESCOM_BASE64_TO_BINARY: 1;
       readonly CADESCOM_STRING_TO_UCS2LE: 0;
    }

    interface CADESCOM_XML_SIGNATURE_TYPE {
       readonly CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED: 0;
       readonly CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING: 1;
       readonly CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE: 2;
    }

    interface CADESCOM_ENCRYPTION_ALGORITHM {
       readonly CADESCOM_ENCRYPTION_ALGORITHM_RC2: 0;
       readonly CADESCOM_ENCRYPTION_ALGORITHM_RC4: 1;
       readonly CADESCOM_ENCRYPTION_ALGORITHM_DES: 2;
       readonly CADESCOM_ENCRYPTION_ALGORITHM_3DES: 3;
       readonly CADESCOM_ENCRYPTION_ALGORITHM_AES: 4;
       readonly CADESCOM_ENCRYPTION_ALGORITHM_GOST_28147_89: 25;
    }

    interface CADESCOM_HASH_ALGORITHM {
       readonly CADESCOM_HASH_ALGORITHM_SHA1: 0;
       readonly CADESCOM_HASH_ALGORITHM_MD2: 1;
       readonly CADESCOM_HASH_ALGORITHM_MD4: 2;
       readonly CADESCOM_HASH_ALGORITHM_MD5: 3;
       readonly CADESCOM_HASH_ALGORITHM_SHA_256: 4;
       readonly CADESCOM_HASH_ALGORITHM_SHA_384: 5;
       readonly CADESCOM_HASH_ALGORITHM_SHA_512: 6;
       readonly CADESCOM_HASH_ALGORITHM_CP_GOST_3411: 100;
       readonly CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256: 101;
       readonly CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512: 102;
    }

    interface CADESCOM_ATTRIBUTE {
       readonly CADESCOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME: 0;
       readonly CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME: 1;
       readonly CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION: 2;
       readonly CADESCOM_ATTRIBUTE_OTHER: -1;
    }

    interface CADESCOM_DISPLAY_DATA {
       readonly CADESCOM_DISPLAY_DATA_NONE: 0;
       readonly CADESCOM_DISPLAY_DATA_CONTENT: 1;
       readonly CADESCOM_DISPLAY_DATA_ATTRIBUTE: 2;
    }

    interface CADESCOM_InstallResponseRestrictionFlags {
       readonly CADESCOM_AllowNone: 0;
       readonly CADESCOM_AllowNoOutstandingRequest: 1;
       readonly CADESCOM_AllowUntrustedCertificate: 2;
       readonly CADESCOM_AllowUntrustedRoot: 4;
       readonly CADESCOM_SkipInstallToStore: 0x10000000;
    }
}
