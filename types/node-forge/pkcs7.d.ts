declare module "node-forge" {
    namespace pkcs7 {
        interface PkcsSignedData {
            content?: string | util.ByteBuffer | undefined;
            contentInfo?: { value: any[] } | undefined;

            certificates: pki.Certificate[];

            addCertificate(certificate: pki.Certificate | string): void;
            addSigner(options: {
                key: pki.rsa.PrivateKey | string;
                certificate: pki.Certificate | string;
                digestAlgorithm: string;
                authenticatedAttributes?: { type: string; value?: string | undefined }[] | undefined;
            }): void;
            sign(options?: { detached?: boolean | undefined }): void;
            toAsn1(): asn1.Asn1;
        }

        function createSignedData(): PkcsSignedData;

        interface Recipient {
            version: number;
            issuer: pki.CertificateField[];
            serialNumber: Hex;
            encryptedContent: {
                algorithm: OID;
                parameter: Bytes;
                content: Bytes;
            };
        }

        interface PkcsEnvelopedData {
            content?: string | util.ByteBuffer | undefined;
            recipients: Recipient[];

            /**
             * Add (another) entity to list of recipients.
             *
             * @param certificate The certificate of the entity to add.
             */
            addRecipient(certificate: pki.Certificate): void;
            /**
             * Encrypt enveloped content.
             *
             * This function supports two optional arguments, cipher and key, which
             * can be used to influence symmetric encryption.  Unless cipher is
             * provided, the cipher specified in encryptedContent.algorithm is used
             * (defaults to AES-256-CBC).  If no key is provided, encryptedContent.key
             * is (re-)used.  If that one's not set, a random key will be generated
             * automatically.
             *
             * @param [key] The key to be used for symmetric encryption.
             * @param [cipher] The OID of the symmetric cipher to use.
             */
            encrypt(key?: util.ByteBuffer, cipher?: OID): void;

            /**
             * Find recipient by X.509 certificate's issuer and serialNumber.
             *
             * @param cert the certificate with the issuer to look for.
             *
             * @return the recipient object, or `null` if no match.
             */
            findRecipient(cert: pki.Certificate): Recipient | null;
            /**
             * Decrypt enveloped content
             *
             * @param recipient The recipient object related to the private key
             * @param privKey The (RSA) private key object
             */
            decrypt(recipient: Recipient, privKey: pki.rsa.PrivateKey): void;

            toAsn1(): asn1.Asn1;
        }

        function createEnvelopedData(): PkcsEnvelopedData;

        /** When a PKCS#7 object has been created by reading from a message, the raw captured object is joined */
        type Captured<T> = T & {
            rawCapture: any;
        };

        /**
         * Converts a PKCS#7 message to PEM format.
         *
         * @param msg The PKCS#7 message object
         * @param maxline The maximum characters per line, defaults to 64.
         *
         * @return The PEM-formatted PKCS#7 message.
         */
        function messageToPem(msg: PkcsSignedData, maxline?: number): string;

        /**
         * Converts a PKCS#7 message from PEM format.
         *
         * @param pem the PEM-formatted PKCS#7 message.
         *
         * @return the PKCS#7 message.
         */
        function messageFromPem(pem: pki.PEM): Captured<PkcsEnvelopedData | PkcsSignedData>;

        /**
         * Converts a PKCS#7 message from an ASN.1 object.
         *
         * @param asn the ASN.1 representation of a ContentInfo.
         *
         * @return the PKCS#7 message.
         */
        function messageFromAsn1(asn: asn1.Asn1): Captured<PkcsEnvelopedData | PkcsSignedData>;
    }
}
