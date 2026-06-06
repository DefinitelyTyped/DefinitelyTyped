declare namespace jsrsasign.KJUR.asn1.x509 {
    /**
     * static object for OID
     * @description
     * This class defines OID name and values.
     * AttributeType names registered in OID.atype2oidList are following:
     *
     * |short|long|OID|
     * |:------|:----|:----------|
     * |CN|commonName|2.5.4.3|
     * |L|localityName|2.5.4.7|
     * |ST|stateOrProvinceName|2.5.4.8|
     * |O|organizationName|2.5.4.10|
     * |OU|organizationalUnitName|2.5.4.11|
     * |C|countryName|2.5.4.6|
     * |STREET|streetAddress|2.5.4.6|
     * |DC|domainComponent|0.9.2342.19200300.100.1.25|
     * |UID|userId|0.9.2342.19200300.100.1.1|
     * |SN|surname|2.5.4.4|
     * |DN|distinguishedName|2.5.4.49|
     * |E|emailAddress|1.2.840.113549.1.9.1|
     * ||businessCategory|2.5.4.15|
     * ||postalCode|2.5.4.17|
     * ||jurisdictionOfIncorporationL|1.3.6.1.4.1.311.60.2.1.1|
     * ||jurisdictionOfIncorporationSP|1.3.6.1.4.1.311.60.2.1.2|
     * ||jurisdictionOfIncorporationC|1.3.6.1.4.1.311.60.2.1.3|
     */
    const OID: {
        /** for short attribute type name and oid (ex. 'C' and '2.5.4.6') */
        readonly atype2oidList: {
            businessCategory: string;
            C: string;
            CN: string;
            DC: string;
            DN: string;
            E: string;
            jurisdictionOfIncorporationC: string;
            jurisdictionOfIncorporationL: string;
            jurisdictionOfIncorporationSP: string;
            L: string;
            O: string;
            OU: string;
            postalCode: string;
            serialNumber: string;
            SN: string;
            ST: string;
            STREET: string;
            UID: string;
        };

        /** for oid name and oid (ex. 'keyUsage' and '2.5.29.15') */
        readonly name2oidList: {
            sha1: string;
            sha256: string;
            sha384: string;
            sha512: string;
            sha224: string;
            md5: string;
            md2: string;
            ripemd160: string;
            MD2withRSA: string;
            MD4withRSA: string;
            MD5withRSA: string;
            SHA1withRSA: string;
            SHA224withRSA: string;
            SHA256withRSA: string;
            SHA384withRSA: string;
            SHA512withRSA: string;
            SHA1withECDSA: string;
            SHA224withECDSA: string;
            SHA256withECDSA: string;
            SHA384withECDSA: string;
            SHA512withECDSA: string;
            dsa: string;
            SHA1withDSA: string;
            SHA224withDSA: string;
            SHA256withDSA: string;
            rsaEncryption: string;
            commonName: string;
            localityName: string;
            stateOrProvinceName: string;
            organizationName: string;
            organizationalUnitName: string;
            countryName: string;
            streetAddress: string;
            domainComponent: string;
            userId: string;
            surname: string;
            distinguishedName: string;
            emailAddress: string;
            businessCategory: string;
            postalCode: string;
            jurisdictionOfIncorporationL: string;
            jurisdictionOfIncorporationSP: string;
            jurisdictionOfIncorporationC: string;
            subjectKeyIdentifier: string;
            keyUsage: string;
            subjectAltName: string;
            issuerAltName: string;
            basicConstraints: string;
            nameConstraints: string;
            cRLDistributionPoints: string;
            certificatePolicies: string;
            authorityKeyIdentifier: string;
            policyConstraints: string;
            extKeyUsage: string;
            authorityInfoAccess: string;
            ocsp: string;
            caIssuers: string;
            anyExtendedKeyUsage: string;
            serverAuth: string;
            clientAuth: string;
            codeSigning: string;
            emailProtection: string;
            timeStamping: string;
            ocspSigning: string;
            ecPublicKey: string;
            secp256r1: string;
            secp256k1: string;
            secp384r1: string;
            pkcs5PBES2: string;
            pkcs5PBKDF2: string;
            des: string;
            data: string;
            signed: string;
            enveloped: string;
            digested: string;
            encrypted: string;
            authenticated: string;
            tstinfo: string;
            extensionRequest: string;
        };

        /** for caching name and DERObjectIdentifier object */
        readonly objCache: {
            [name: string]: DERObjectIdentifier;
        };

        /**
         * get DERObjectIdentifier by registered OID name
         * @param name OID
         * @example
         * var asn1ObjOID = OID.name2obj('SHA1withRSA');
         */
        name2obj(name: string): DERObjectIdentifier;

        /**
         * get DERObjectIdentifier by registered attribute type name such like 'C' or 'CN'
         * @param atype short attribute type name such like 'C' or 'CN'
         * @example
         * KJUR.asn1.x509.OID.atype2obj('CN') → 2.5.4.3
         * KJUR.asn1.x509.OID.atype2obj('OU') → 2.5.4.11
         */
        atype2obj(atype: string): string;

        /**
         * convert OID to name
         * @param oid dot noted Object Identifer string (ex. 1.2.3.4)
         * @return OID name if registered otherwise empty string
         * @description
         * This static method converts OID string to its name.
         * If OID is undefined then it returns empty string (i.e. '').
         * @example
         * KJUR.asn1.x509.OID.oid2name("1.3.6.1.5.5.7.1.1") → 'authorityInfoAccess'
         */
        oid2name(oid?: string): string;

        /**
         * convert OID to AttributeType name
         * @param oid dot noted Object Identifer string (ex. 1.2.3.4)
         * @return OID AttributeType name if registered otherwise oid
         * @description
         * This static method converts OID string to its AttributeType name.
         * If OID is not defined in OID.atype2oidList associative array then it returns OID
         * specified as argument.
         * @example
         * KJUR.asn1.x509.OID.oid2atype("2.5.4.3") → CN
         * KJUR.asn1.x509.OID.oid2atype("1.3.6.1.4.1.311.60.2.1.3") → jurisdictionOfIncorporationC
         * KJUR.asn1.x509.OID.oid2atype("0.1.2.3.4") → 0.1.2.3.4 // unregistered OID
         */
        oid2atype(oid: string): string;

        /**
         * convert OID name to OID value
         * @param OID name
         * @return dot noted Object Identifer string (ex. 1.2.3.4)
         * @description
         * This static method converts from OID name to OID string.
         * If OID is undefined then it returns empty string (i.e. '').
         * @example
         * KJUR.asn1.x509.OID.name2oid("authorityInfoAccess") → 1.3.6.1.5.5.7.1.1
         */
        name2oid(name: string): string;
    };
}
