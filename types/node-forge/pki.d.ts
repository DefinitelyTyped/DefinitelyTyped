declare module "node-forge" {
    namespace pki {
        type PEM = string;
        type PublicKey = rsa.PublicKey | ed25519.Key;
        type PrivateKey = rsa.PrivateKey | ed25519.Key;
        type EncryptionOptions = {
            algorithm?: "aes128" | "aes192" | "aes256" | "3des" | undefined;
            count?: number | undefined;
            saltSize?: number | undefined;
            prfAlgorithm?: "sha1" | "sha224" | "sha256" | "sha384" | "sha512" | undefined;
            legacy?: boolean | undefined;
        };

        interface ByteBufferFingerprintOptions {
            /**
             * @description The type of fingerprint. If not specified, defaults to 'RSAPublicKey'
             */
            type?: "SubjectPublicKeyInfo" | "RSAPublicKey" | undefined;
            /**
             * @description the delimiter to use between bytes for `hex` encoded output
             */
            delimiter?: string | undefined;
            /**
             * @description if not specified defaults to `md.md5`
             */
            md?: md.MessageDigest | undefined;
        }

        interface HexFingerprintOptions extends ByteBufferFingerprintOptions {
            /**
             * @description if not specified, the function will return `ByteStringBuffer`
             */
            encoding: "hex";
        }

        interface BinaryFingerprintOptions extends ByteBufferFingerprintOptions {
            /**
             * @description if not specified, the function will return `ByteStringBuffer`
             */
            encoding: "binary";
        }

        interface KeyPair {
            publicKey: PublicKey;
            privateKey: PrivateKey;
        }

        interface CertificateFieldOptions {
            name?: string | undefined;
            type?: string | undefined;
            shortName?: string | undefined;
        }

        interface CertificateField extends CertificateFieldOptions {
            valueConstructed?: boolean | undefined;
            valueTagClass?: asn1.Class | undefined;
            value?: any[] | string | undefined;
            extensions?: any[] | undefined;
        }

        interface Certificate {
            version: number;
            serialNumber: string;
            signatureOid: string;
            signature: any;
            siginfo: {
                algorithmOid: string;
                parameters: any;
            };
            validity: {
                notBefore: Date;
                notAfter: Date;
            };
            issuer: {
                getField(sn: string | CertificateFieldOptions): any;
                addField(attr: CertificateField): void;
                attributes: CertificateField[];
                hash: any;
            };
            subject: {
                getField(sn: string | CertificateFieldOptions): any;
                addField(attr: CertificateField): void;
                attributes: CertificateField[];
                hash: any;
            };
            extensions: any[];
            privateKey: PrivateKey;
            publicKey: PublicKey;
            md: md.MessageDigest;
            signatureParameters: any;
            tbsCertificate: asn1.Asn1;
            /**
             * Sets the subject of this certificate.
             *
             * @param attrs the array of subject attributes to use.
             * @param uniqueId an optional a unique ID to use.
             */
            setSubject(attrs: CertificateField[], uniqueId?: string): void;
            /**
             * Sets the issuer of this certificate.
             *
             * @param attrs the array of subject attributes to use.
             * @param uniqueId an optional a unique ID to use.
             */
            setIssuer(attrs: CertificateField[], uniqueId?: string): void;
            /**
             * Sets the extensions of this certificate.
             *
             * @param exts the array of extensions to use.
             */
            setExtensions(exts: any[]): void;
            /**
             * Gets an extension by its name or id.
             *
             * @param options the name to use or an object with:
             *          name the name to use.
             *          id the id to use.
             *
             * @return the extension or null if not found.
             */
            getExtension(options: string | { name: string } | { id: number }): {} | undefined;

            /**
             * Signs this certificate using the given private key.
             *
             * @param key the private key to sign with.
             * @param md the message digest object to use (defaults to forge.md.sha1).
             */
            sign(key: pki.PrivateKey, md?: md.MessageDigest): void;
            /**
             * Attempts verify the signature on the passed certificate using this
             * certificate's public key.
             *
             * @param child the certificate to verify.
             *
             * @return true if verified, false if not.
             */
            verify(child: Certificate): boolean;

            /**
             * Returns true if this certificate's issuer matches the passed
             * certificate's subject. Note that no signature check is performed.
             *
             * @param parent the certificate to check.
             *
             * @return true if this certificate's issuer matches the passed certificate's
             *         subject.
             */
            isIssuer(parent: Certificate): boolean;

            /**
             * Returns true if this certificate's subject matches the issuer of the
             * given certificate). Note that not signature check is performed.
             *
             * @param child the certificate to check.
             *
             * @return true if this certificate's subject matches the passed
             *         certificate's issuer.
             */
            issued(child: Certificate): boolean;

            /**
             * Generates the subjectKeyIdentifier for this certificate as byte buffer.
             *
             * @return the subjectKeyIdentifier for this certificate as byte buffer.
             */
            generateSubjectKeyIdentifier(): util.ByteStringBuffer;

            /**
             * Verifies the subjectKeyIdentifier extension value for this certificate
             * against its public key. If no extension is found, false will be
             * returned.
             *
             * @return true if verified, false if not.
             */
            verifySubjectKeyIdentifier(): boolean;
        }

        interface CertificateRequest extends Certificate {
            /**
             * Gets an issuer or subject attribute from its name, type, or short name.
             *
             * @param opts a short name string or an object with:
             *          shortName the short name for the attribute.
             *          name the name for the attribute.
             *          type the type for the attribute.
             *
             * @return the attribute.
             */
            getAttribute(opts: string | GetAttributeOpts): Attribute | null;
        }

        /**
         * Attribute members to search on; any one hit will return the attribute
         */
        interface GetAttributeOpts {
            /**
             * OID
             */
            type?: string | undefined;
            /**
             * Long name
             */
            name?: string | undefined;
            /**
             * Short name
             */
            shortName?: string | undefined;
        }

        interface Attribute {
            /**
             * e.g. challengePassword
             */
            name: string;
            /**
             * Short name, if available (e.g. 'CN' for 'commonName')
             */
            shortName?: string | undefined;
            /**
             * OID, e.g. '1.2.840.113549.1.9.7'
             */
            type: string;
            /**
             * Attribute value
             */
            value: any;
            /**
             * Attribute value data type
             */
            valueTagClass: number;
            /**
             * Extensions
             */
            extensions?: any[] | undefined;
        }

        interface CAStore {
            addCertificate(cert: Certificate | string): void;
            hasCertificate(cert: Certificate | string): boolean;
            removeCertificate(cert: Certificate | string): Certificate | null;
            listAllCertificates(): pki.Certificate[];
            getIssuer(subject: Certificate): Certificate | null;
            getBySubject(subject: string): Certificate | null;
        }

        function certificateFromAsn1(obj: asn1.Asn1, computeHash?: boolean): Certificate;

        function certificationRequestFromAsn1(obj: asn1.Asn1, computeHash?: boolean): Certificate;

        function certificateToAsn1(cert: Certificate): asn1.Asn1;

        function certificationRequestToAsn1(cert: Certificate): asn1.Asn1;

        function decryptRsaPrivateKey(pem: PEM, passphrase?: string): rsa.PrivateKey;

        function createCertificate(): Certificate;

        function certificationRequestToPem(cert: Certificate, maxline?: number): PEM;

        function certificationRequestFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;

        function createCertificationRequest(): CertificateRequest;

        function certificateToPem(cert: Certificate, maxline?: number): PEM;

        function certificateFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;

        function createCaStore(certs?: ReadonlyArray<Certificate | pki.PEM>): CAStore;

        function verifyCertificateChain(
            caStore: CAStore,
            chain: Certificate[],
            options?:
                | ((verified: boolean | string, depth: number, certs: Certificate[]) => boolean)
                | {
                    verify?:
                        | ((verified: boolean | string, depth: number, certs: Certificate[]) => boolean)
                        | undefined;
                    validityCheckDate?: Date | null | undefined;
                },
        ): boolean;

        function pemToDer(pem: PEM): util.ByteStringBuffer;

        function privateKeyToPem(key: PrivateKey, maxline?: number): PEM;

        function privateKeyInfoToPem(key: asn1.Asn1, maxline?: number): PEM;

        function publicKeyToPem(key: PublicKey, maxline?: number): PEM;

        function publicKeyToRSAPublicKeyPem(key: PublicKey, maxline?: number): PEM;

        function publicKeyFromPem(pem: PEM): rsa.PublicKey;

        function privateKeyFromPem(pem: PEM): rsa.PrivateKey;

        function decryptPrivateKeyInfo(obj: asn1.Asn1, password: string): asn1.Asn1;

        function encryptPrivateKeyInfo(obj: asn1.Asn1, password: string, options?: EncryptionOptions): asn1.Asn1;

        function encryptedPrivateKeyFromPem(pem: PEM): asn1.Asn1;

        function encryptedPrivateKeyToPem(obj: asn1.Asn1): PEM;

        function decryptRsaPrivateKey(pem: PEM, password: string): rsa.PrivateKey;

        function encryptRsaPrivateKey(privateKey: PrivateKey, password: string, options?: EncryptionOptions): PEM;

        function privateKeyFromAsn1(privateKey: asn1.Asn1): rsa.PrivateKey;

        function privateKeyToAsn1(privateKey: PrivateKey): asn1.Asn1;

        function publicKeyFromAsn1(publicKey: asn1.Asn1): rsa.PublicKey;

        function publicKeyToAsn1(publicKey: PublicKey): asn1.Asn1;

        function publicKeyToRSAPublicKey(publicKey: PublicKey): any;

        const setRsaPublicKey: typeof pki.rsa.setPublicKey;

        const setRsaPrivateKey: typeof pki.rsa.setPrivateKey;

        function wrapRsaPrivateKey(privateKey: asn1.Asn1): asn1.Asn1;

        function getPublicKeyFingerprint(
            publicKey: PublicKey,
            options?: ByteBufferFingerprintOptions,
        ): util.ByteStringBuffer;
        function getPublicKeyFingerprint(publicKey: PublicKey, options: HexFingerprintOptions): Hex;
        function getPublicKeyFingerprint(publicKey: PublicKey, options: BinaryFingerprintOptions): Bytes;
    }
}
