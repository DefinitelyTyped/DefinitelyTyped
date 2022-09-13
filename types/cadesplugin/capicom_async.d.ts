declare namespace CAPICOM {
    interface CertificateAsync extends CADES_Common.Async<Certificate> {
    }

    interface CertificatesAsync extends CADES_Common.Async<Certificates> {
    }

    interface StoreAsync extends CADES_Common.Async<Store> {
    }

    interface EncodedDataAsync extends CADES_Common.Async<EncodedData> {
    }

    interface OIDAsync extends CADES_Common.Async<OID> {
    }

    interface PublicKeyAsync extends CADES_Common.Async<PublicKey> {
    }

    interface PrivateKeyAsync extends CADES_Common.Async<PrivateKey> {
        propset_CachePin(cachePin: boolean): Promise<boolean>;
    }

    interface ExtendedKeyUsageAsync extends CADES_Common.Async<ExtendedKeyUsage> {
    }

    interface EKUsAsync extends CADES_Common.Async<EKUs> {
    }

    interface EKUAsync extends CADES_Common.Async<EKU> {
    }
}
