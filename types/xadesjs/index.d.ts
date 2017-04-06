// Type definitions for xadesjs v1.0.0
// Project: https://github.com/PeculiarVentures/xadesjs
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * A pure Javascript implementation of XMLDSIG and XAdES based on Web Crypto https://xadesjs.com
 * v1.0.0
 */

declare namespace xadesjs {
    
    type PromiseType = any;
    
    const APPLICATION_XML: string;

    class XmlError extends Error {
        stack: any;
        constructor(code: XE, ...args: any[]);
    }

    enum XE {
        NONE = 0,
        NULL_REFERENCE = 1,
        METHOD_NOT_IMPLEMENTED = 2,
        METHOD_NOT_SUPPORTED = 3,
        PARAM_REQUIRED = 4,
        CONVERTER_UNSUPPORTED = 5,
        ELEMENT_MALFORMED = 6,
        CRYPTOGRAPHIC = 7,
        CRYPTOGRAPHIC_NO_MODULE = 8,
        CRYPTOGRAPHIC_UNKNOWN_TRANSFORM = 9,
        ALGORITHM_NOT_SUPPORTED = 10,
        ALGORITHM_WRONG_NAME = 11,
        XML_EXCEPTION = 12,
    }

    interface CryptoEx extends Crypto {
        name: string;
    }

    class Application {
        /**
         * Sets crypto engine for the current Application
         * @param  {string} name
         * @param  {Crypto} crypto
         * @returns void
         */
        static setEngine(name: string, crypto: Crypto): void;
        /**
         * Gets the crypto module from the Application
         */
        static crypto: CryptoEx;
        static isNodePlugin(): boolean;
    }

    enum XmlNodeType {
        None = 0,
        Element = 1,
        Attribute = 2,
        Text = 3,
        CDATA = 4,
        EntityReference = 5,
        Entity = 6,
        ProcessingInstruction = 7,
        Comment = 8,
        Document = 9,
        DocumentType = 10,
        DocumentFragment = 11,
        Notation = 12,
        Whitespace = 13,
        SignificantWhitespace = 14,
        EndElement = 15,
        EndEntity = 16,
        XmlDeclaration = 17,
    }

    interface IXmlSerializable {
        Prefix: string;
        /**
         * Writes object to XML node
         * @returns Node
         */
        GetXml(): Node;
        /**
         * Reads XML from string
         * @param  {Node} node
         * @returns void
         */
        LoadXml(node: Node): void;
    }

    abstract class XmlObject implements IXmlSerializable {
        protected m_prefix: string;
        Prefix: string;
        protected GetPrefix(): string;
        GetXml(): Node;
        GetXml(document: Document): Node;
        LoadXml(node: Node): void;
        toString(): string;
        protected getAttribute(xel: Element, attribute: string): string;
    }

    const DEFAULT_ROOT_NAME: string;
    function IsEqualsEmptyStrings(s1: string, s2: string): boolean;
    /**
     * Creates new instance of XmlDocument with given name of root element
     * @param  {string} root Name of root element
     * @param  {string} namespaceUri
     * @param  {string} prefix
     * @returns Document
     */
    function CreateDocument(root?: string, namespaceUri?: string, prefix?: string): Document;
    /**
     * Returns signle Node from given Node
     * @param  {Node} node
     * @param  {string} path
     * @returns Node
     */
    function SelectSingleNode(node: Node, path: string): Node;

    function findAttr(node: Node, localName: string, nameSpace?: string): Attr;
    function findFirst(doc: Node, xpath: string): Node;
    function findChilds(node: Node, localName: string, nameSpace?: string): Node[];
    interface IAssocArray {
        [index: string]: string;
    }
    function encodeSpecialCharactersInAttribute(attributeValue: string): string;
    function encodeSpecialCharactersInText(text: string): string;
    function SelectNamespaces(node: Element): Node[];

    class Convert {
        static ToBase64UrlString(text: string): string;
        static FromBase64UrlString(base64UrlText: string): string;
        static ToBase64String(text: string): string;
        static FromBase64String(base64Text: string): string;
        static Base64UrlToBase64(base64url: string): string;
        static Base64ToBase64Url(base64: string): string;
        static ToBufferUtf8String(text: string): Uint8Array;
        static FromBufferUtf8String(buffer: Uint8Array): string;
        static ToBufferString(text: string): Uint8Array;
        static FromBufferString(buffer: ArrayBuffer): string;
        static FromBufferString(buffer: Uint8Array): string;
    }

    interface IAlgorithm {
        algorithm: Algorithm;
        xmlNamespace: string;
        getAlgorithmName(): string;
    }
    interface IHashAlgorithm extends IAlgorithm {
        getHash(xml: string): PromiseType;
    }
    interface IHashAlgorithmConstructable {
        new (): IHashAlgorithm;
    }
    abstract class XmlAlgorithm implements IAlgorithm {
        algorithm: Algorithm;
        xmlNamespace: string;
        getAlgorithmName(): string;
    }
    abstract class HashAlgorithm extends XmlAlgorithm implements IHashAlgorithm {
        getHash(xml: string): PromiseType;
    }
    interface ISignatureAlgorithm extends IAlgorithm {
        getSignature(signedInfo: string, signingKey: CryptoKey, algorithm: Algorithm): PromiseType;
        verifySignature(signedInfo: string, key: CryptoKey, signatureValue: string, algorithm?: Algorithm): PromiseType;
    }
    interface ISignatureAlgorithmConstructable {
        new (): ISignatureAlgorithm;
    }
    abstract class SignatureAlgorithm extends XmlAlgorithm implements ISignatureAlgorithm {
        /**
         * Sign the given string using the given key
         */
        getSignature(signedInfo: string, signingKey: CryptoKey, algorithm: Algorithm): PromiseType;
        /**
        * Verify the given signature of the given string using key
        */
        verifySignature(signedInfo: string, key: CryptoKey, signatureValue: string, algorithm?: Algorithm): PromiseType;
    }

    const SHA1: string;
    const SHA224: string;
    const SHA256: string;
    const SHA384: string;
    const SHA512: string;
    const SHA1_NAMESPACE: string;
    const SHA224_NAMESPACE: string;
    const SHA256_NAMESPACE: string;
    const SHA384_NAMESPACE: string;
    const SHA512_NAMESPACE: string;
    class Sha1 extends HashAlgorithm {
        algorithm: {
            name: string;
        };
        xmlNamespace: string;
    }
    class Sha224 extends HashAlgorithm {
        algorithm: {
            name: string;
        };
        xmlNamespace: string;
    }
    class Sha256 extends HashAlgorithm {
        algorithm: {
            name: string;
        };
        xmlNamespace: string;
    }
    class Sha384 extends HashAlgorithm {
        algorithm: {
            name: string;
        };
        xmlNamespace: string;
    }
    class Sha512 extends HashAlgorithm {
        algorithm: {
            name: string;
        };
        xmlNamespace: string;
    }

    // RSA PKCS1

    const RSA_PKCS1: string;
    const RSA_PKCS1_SHA1_NAMESPACE: string;
    const RSA_PKCS1_SHA224_NAMESPACE: string;
    const RSA_PKCS1_SHA256_NAMESPACE: string;
    const RSA_PKCS1_SHA384_NAMESPACE: string;
    const RSA_PKCS1_SHA512_NAMESPACE: string;

    class RsaPkcs1Sha1 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class RsaPkcs1Sha224 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class RsaPkcs1Sha256 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class RsaPkcs1Sha384 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class RsaPkcs1Sha512 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }

    // RSA PSS

    const RSA_PSS: string;
    const RSA_PSS_WITH_PARAMS_NAMESPACE: string;
    const RSA_PSS_WITH_PARAMS_MGF1_NAMESPACE: string;

    class RsaPssSha1 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class RsaPssSha224 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class RsaPssSha256 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class RsaPssSha384 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class RsaPssSha512 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class PssAlgorithmParams extends XmlObject {
        private m_digest_method;
        private m_salt_length;
        private m_mgf;
        private element;
        dsPrefix: string;
        DigestMethod: string;
        SaltLength: number;
        MGF: string;
        GetXml(): Element;
        LoadXml(value: Element): void;
    }

    // HMAC

    const HMAC_ALGORITHM: string;
    const HMAC_SHA1_NAMESPACE: string;
    const HMAC_SHA256_NAMESPACE: string;
    const HMAC_SHA384_NAMESPACE: string;
    const HMAC_SHA512_NAMESPACE: string;

    class HmacSha1 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class HmacSha256 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class HmacSha384 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class HmacSha512 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }

    // ECDSA

    const ECDSA_SIGN_ALGORITHM: string;
    const ECDSA_SHA1_NAMESPACE: string;
    const ECDSA_SHA224_NAMESPACE: string;
    const ECDSA_SHA256_NAMESPACE: string;
    const ECDSA_SHA384_NAMESPACE: string;
    const ECDSA_SHA512_NAMESPACE: string;
    class EcdsaSha1 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class EcdsaSha224 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class EcdsaSha256 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class EcdsaSha384 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }
    class EcdsaSha512 extends SignatureAlgorithm {
        algorithm: any;
        xmlNamespace: string;
    }

    /**
     * Represents an <X509Certificate> element.
     */
    class X509Certificate {
        protected raw: Uint8Array;
        protected cert_simpl: any;
        protected publicKey: CryptoKey;
        constructor(rawData?: Uint8Array);
        /**
         * Loads X509Certificate from DER data
         * @param  {Uint8Array} rawData
         */
        protected LoadFromRawData(rawData: Uint8Array): void;
        /**
         * Gets the public key from the X509Certificate
         */
        PublicKey: CryptoKey;
        /**
         * Returns DER raw of X509Certificate
         */
        GetRawCertData(): Uint8Array;
        /**
         * Returns public key from X509Certificate
         * @param  {Algorithm} algorithm
         * @returns PromiseType
         */
        exportKey(algorithm: Algorithm): PromiseType;
    }

    enum X509IncludeOption {
        None = 0,
        EndCertOnly = 1,
        ExcludeRoot = 2,
        WholeChain = 3,
    }
    interface X509IssuerSerial {
        issuerName: string;
        serialNumber: string;
    }
    /**
     * Represents an <X509Data> subelement of an XMLDSIG or XML Encryption <KeyInfo> element.
     */
    class KeyInfoX509Data extends XmlObject implements KeyInfoClause {

        constructor();
        constructor(rgbCert: Uint8Array);
        constructor(cert: X509Certificate);
        /**
         * Gets public key of the X509Data
         */
        Key: CryptoKey;
        importKey(key: CryptoKey): PromiseType;
        /**
         * Exports key from X509Data object
         * @param  {Algorithm} alg
         * @returns PromiseType
         */
        exportKey(alg: Algorithm): PromiseType;
        /**
         * Gets a list of the X.509v3 certificates contained in the KeyInfoX509Data object.
         */
        Certificates: X509Certificate[];
        /**
         * Gets or sets the Certificate Revocation List (CRL) contained within the KeyInfoX509Data object.
         */
        CRL: Uint8Array;
        /**
         * Gets a list of X509IssuerSerial structures that represent an issuer name and serial number pair.
         */
        IssuerSerials: X509IssuerSerial[];
        /**
         * Gets a list of the subject key identifiers (SKIs) contained in the KeyInfoX509Data object.
         */
        SubjectKeyIds: Uint8Array[];
        /**
         * Gets a list of the subject names of the entities contained in the KeyInfoX509Data object.
         */
        SubjectNames: string[];
        /**
         * Adds the specified X.509v3 certificate to the KeyInfoX509Data.
         * @param  {X509Certificate} certificate
         * @returns void
         */
        AddCertificate(certificate: X509Certificate): void;
        /**
         * Adds the specified issuer name and serial number pair to the KeyInfoX509Data object.
         * @param  {string} issuerName
         * @param  {string} serialNumber
         * @returns void
         */
        AddIssuerSerial(issuerName: string, serialNumber: string): void;
        /**
         * Adds the specified subject key identifier (SKI) to the KeyInfoX509Data object.
         * @param  {string | Uint8Array} subjectKeyId
         * @returns void
         */
        AddSubjectKeyId(subjectKeyId: string): void;
        AddSubjectKeyId(subjectKeyId: Uint8Array): void;
        /**
         * Adds the subject name of the entity that was issued an X.509v3 certificate to the KeyInfoX509Data object.
         * @param  {string} subjectName
         * @returns void
         */
        AddSubjectName(subjectName: string): void;
        /**
         * Returns an XML representation of the KeyInfoX509Data object.
         * @returns Element
         */
        GetXml(): Element;
        /**
         * Parses the input XmlElement object and configures the internal state of the KeyInfoX509Data object to match.
         * @param  {Element} element
         * @returns void
         */
        LoadXml(element: Element): void;
    }

    interface IJwkRsa {
        alg: string;
        kty: string;
        e: string;
        n: string;
        ext: boolean;
    }
    /**
     * Represents the <RSAKeyValue> element of an XML signature.
     */
    class RsaKeyValue extends XmlObject implements KeyInfoClause {
        /**
         * Gets or sets the instance of RSA that holds the public key.
         */
        Key: CryptoKey;
        /**
         * Gets the algorithm of the public key
         */
        Algorithm: ISignatureAlgorithm;
        /**
         * Gets the Modulus of the public key
         */
        Modulus: Uint8Array;
        /**
         * Gets the Exponent of the public key
         */
        Exponent: Uint8Array;
        constructor();
        /**
         * Imports key to the RSAKeyValue object
         * @param  {CryptoKey} key
         * @returns PromiseType
         */
        importKey(key: CryptoKey): PromiseType;
        /**
         * Exports key from the RSAKeyValue object
         * @param  {Algorithm} alg
         * @returns PromiseType
         */
        exportKey(alg: Algorithm): PromiseType;
        /**
         * Returns the XML representation of the RSA key clause.
         * @returns Element
         */
        GetXml(): Element;
        /**
         * Loads an RSA key clause from an XML element.
         * @param  {Element} element
         * @returns void
         */
        LoadXml(element: Element): void;
    }

    type NamedCurve = "P-256" | "P-384" | "P-521";

    interface IJwkEcdsa {
        crv: NamedCurve;
        kty: "EC";
        x: string;
        y: string;
        ext: boolean;
    }

    /**
     * Represents the <ECKeyValue> element of an XML signature.
     */
    class EcdsaKeyValue extends XmlObject implements KeyInfoClause {
        /**
         * Gets or sets the instance of ECDSA that holds the public key.
         */
        Key: CryptoKey;
        /**
         * Gets the algorithm of the public key
         */
        Algorithm: ISignatureAlgorithm;
        /**
         * Gets the X point value of then public key
         */
        X: Uint8Array;
        /**
         * Gets the Y point value of then public key
         */
        Y: Uint8Array;
        /**
         * Gets the NamedCurve value of then public key
         */
        NamedCurve: NamedCurve;
        constructor();
        /**
         * Imports key to the ECKeyValue object
         * @param  {CryptoKey} key
         * @returns PromiseType
         */
        importKey(key: CryptoKey): PromiseType;
        /**
         * Exports key from the ECKeyValue object
         * @param  {Algorithm} alg
         * @returns PromiseType
         */
        exportKey(alg: Algorithm): PromiseType;
        /**
         * Returns the XML representation of the ECDSA key clause.
         * @returns Element
         */
        GetXml(): Element;
        /**
         * Loads an ECDSA key clause from an XML element.
         * @param  {Element} element
         * @returns void
         */
        LoadXml(element: Element): void;
    }

    type XmlNamespace = {
        prefix: string;
        namespace: string;
    };

    enum XmlCanonicalizerState {
        BeforeDocElement = 0,
        InsideDocElement = 1,
        AfterDocElement = 2,
    }

    class XmlCanonicalizer {
        constructor(withComments: boolean, excC14N: boolean, propagatedNamespaces?: XmlNamespace[]);
        InclusiveNamespacesPrefixList: string;
        Canonicalize(node: Node): string;
    }

    interface Transform extends IXmlSerializable {
        Algorithm: string;
        LoadInnerXml(node: Node): void;
        GetInnerXml(): Node;
        GetOutput(): string;
    }

    interface ICanonicalizationAlgorithmConstructable {
        new (): Transform;
    }
    /**
     * Represents the abstract base class from which all <Transform> elements
     * that can be used in an XML digital signature derive.
     */
    abstract class Transform extends XmlObject implements Transform {
        protected innerXml: Node;
        LoadXml(value: Node): void;
        /**
         * Returns the XML representation of the current Transform object.
         * @returns Element
         */
        GetXml(): Element;
    }

    /**
     * Represents the enveloped signature transform for an XML digital signature as defined by the W3C.
     */
    class XmlDsigEnvelopedSignatureTransform extends Transform {
        Algorithm: string;
        /**
         * Returns the output of the current XmlDsigEnvelopedSignatureTransform object.
         * @returns string
         */
        GetOutput(): string;
    }

    /**
     * Represents the C14N XML canonicalization transform for a digital signature
     * as defined by the World Wide Web Consortium (W3C), without comments.
     */
    class XmlDsigC14NTransform extends Transform {
        protected xmlCanonicalizer: XmlCanonicalizer;
        Algorithm: string;
        /**
         * Returns the output of the current XmlDsigC14NTransform object.
         * @returns string
         */
        GetOutput(): string;
    }
    /**
     * Represents the C14N XML canonicalization transform for a digital signature
     * as defined by the World Wide Web Consortium (W3C), with comments.
     */
    class XmlDsigC14NWithCommentsTransform extends XmlDsigC14NTransform {
        Algorithm: string;
        protected xmlCanonicalizer: XmlCanonicalizer;
    }

    /**
     * Represents the exclusive C14N XML canonicalization transform for a digital signature
     * as defined by the World Wide Web Consortium (W3C), without comments.
     */
    class XmlDsigExcC14NTransform extends Transform {
        protected xmlCanonicalizer: XmlCanonicalizer;
        Algorithm: string;
        /**
         * Gets or sets a string that contains namespace prefixes to canonicalize
         * using the standard canonicalization algorithm.
         */
        InclusiveNamespacesPrefixList: string;
        /**
         * Returns the output of the current XmlDsigExcC14NTransform object
         */
        GetOutput(): string;
    }
    /**
     * Represents the exclusive C14N XML canonicalization transform for a digital signature
     * as defined by the World Wide Web Consortium (W3C), with comments.
     */
    class XmlDsigExcC14NWithCommentsTransform extends XmlDsigExcC14NTransform {
        Algorithm: string;
        protected xmlCanonicalizer: XmlCanonicalizer;
    }

    class CryptoConfig {
        static CreateFromName(name: string): Transform;
        static CreateSignatureAlgorithm(namespace: string): SignatureAlgorithm;
        static CreateHashAlgorithm(namespace: string): HashAlgorithm;
    }

    /**
     * Represents the object element of an XML signature that holds data to be signed.
     */
    class DataObject extends XmlObject {
        constructor();
        constructor(id?: string, mimeType?: string, encoding?: string, data?: Element);
        /**
         * Gets or sets the data value of the current DataObject object.
         */
        Data: NodeList;
        /**
         * Gets or sets the encoding of the current DataObject object.
         */
        Encoding: string;
        /**
         * Gets or sets the identification of the current DataObject object.
         */
        Id: string;
        /**
         * Gets or sets the MIME type of the current DataObject object.
         */
        MimeType: string;
        /**
         * Returns the XML representation of the DataObject object.
         * @returns Element
         */
        GetXml(): Element;
        /**
         * Loads a DataObject state from an XML element.
         * @param  {Element} value
         * @returns void
         */
        LoadXml(value: Element): void;
    }

    /**
     * Represents the <reference> element of an XML signature.
     */
    class Reference extends XmlObject {

        constructor(p?: string);
        /**
         * Gets or sets the digest method Uniform Resource Identifier (URI) of the current
         */
        DigestMethod: string;
        /**
         * Gets or sets the digest value of the current Reference.
         */
        DigestValue: ArrayBuffer;
        /**
         * Gets or sets the ID of the current Reference.
         */
        Id: string;
        /**
         * Gets the transform chain of the current Reference.
         */
        TransformChain: Transform[];
        /**
         * Gets or sets the type of the object being signed.
         */
        Type: string;
        /**
         * Gets or sets the Uri of the current Reference.
         */
        Uri: string;
        /**
         * Adds a Transform object to the list of transforms to be performed
         * on the data before passing it to the digest algorithm.
         * @param  {Transform} transform The transform to be added to the list of transforms.
         * @returns void
         */
        AddTransform(transform: Transform): void;
        /**
         * Returns the XML representation of the Reference.
         * @returns Element
         */
        GetXml(): Element;
        /**
         * Loads a Reference state from an XML element.
         * @param  {Element} value
         */
        LoadXml(value: Element): void;
    }

    /**
     * Represents an XML digital signature or XML encryption <KeyInfo> element.
     */
    class KeyInfo extends XmlObject {
        constructor();
        /**
         * Gets the number of KeyInfoClause objects contained in the KeyInfo object.
         */
        length: number;
        /**
         * Gets or sets the key information identity.
         */
        Id: string;
        /**
         * Returns an enumerator of the KeyInfoClause objects in the KeyInfo object.
         * @param  {any} requestedObjectType?
         */
        GetEnumerator(): Array<KeyInfoClause>;
        GetEnumerator(requestedObjectType: any): Array<KeyInfoClause>;
        /**
         * Returns an enumerator of the KeyInfoClause objects in the KeyInfo object.
         * @param  {KeyInfoClause} clause The KeyInfoClause to add to the KeyInfo object.
         * @returns void
         */
        AddClause(clause: KeyInfoClause): void;
        /**
         * Returns the XML representation of the KeyInfo object.
         * @returns Node
         */
        GetXml(): Node;
        /**
         * Loads a KeyInfo state from an XML element.
         * @param  {Element} value
         * @returns void
         */
        LoadXml(value: Element): void;
    }
    interface KeyInfoClause extends IXmlSerializable {
        Key: CryptoKey;
        importKey(key: CryptoKey): PromiseType;
        exportKey(alg: Algorithm): PromiseType;
    }

    /**
     * Represents the <Signature> element of an XML signature.
     */
    class Signature extends XmlObject {

        constructor();
        /**
         * Gets or sets the ID of the current Signature.
         */
        Id: string;
        /**
         * Gets or sets the KeyInfo of the current Signature.
         */
        KeyInfo: KeyInfo;
        /**
         * Gets or sets a list of objects to be signed.
         */
        ObjectList: Array<DataObject>;
        /**
         * Gets or sets the value of the digital signature.
         */
        SignatureValue: Uint8Array;
        /**
         * Gets or sets the SignedInfo of the current Signature.
         */
        SignedInfo: SignedInfo;
        /**
         * Adds a DataObject to the list of objects to be signed.
         * @param  {DataObject} dataObject The DataObject to be added to the list of objects to be signed.
         * @returns void
         */
        AddObject(dataObject: DataObject): void;
        /**
         * Returns the XML representation of the Signature.
         * @returns Element
         */
        GetXml(): Element;
        /**
         * Loads a Signature state from an XML element.
         * @param  {Element} value
         * @returns void
         */
        LoadXml(value: Element): void;
    }
    const XmlSignature: {
        ElementNames: {
            CanonicalizationMethod: string;
            DigestMethod: string;
            DigestValue: string;
            DSAKeyValue: string;
            EncryptedKey: string;
            HMACOutputLength: string;
            RSAPSSParams: string;
            MaskGenerationFunction: string;
            SaltLength: string;
            KeyInfo: string;
            KeyName: string;
            KeyValue: string;
            Modulus: string;
            Exponent: string;
            Manifest: string;
            Object: string;
            Reference: string;
            RetrievalMethod: string;
            RSAKeyValue: string;
            ECKeyValue: string;
            NamedCurve: string;
            PublicKey: string;
            Signature: string;
            SignatureMethod: string;
            SignatureValue: string;
            SignedInfo: string;
            Transform: string;
            Transforms: string;
            X509Data: string;
            X509IssuerSerial: string;
            X509IssuerName: string;
            X509SerialNumber: string;
            X509SKI: string;
            X509SubjectName: string;
            X509Certificate: string;
            X509CRL: string;
        };
        AttributeNames: {
            Algorithm: string;
            Encoding: string;
            Id: string;
            MimeType: string;
            Type: string;
            URI: string;
        };
        AlgorithmNamespaces: {
            XmlDsigBase64Transform: string;
            XmlDsigC14NTransform: string;
            XmlDsigC14NWithCommentsTransform: string;
            XmlDsigEnvelopedSignatureTransform: string;
            XmlDsigXPathTransform: string;
            XmlDsigXsltTransform: string;
            XmlDsigExcC14NTransform: string;
            XmlDsigExcC14NWithCommentsTransform: string;
            XmlDecryptionTransform: string;
            XmlLicenseTransform: string;
        };
        Uri: {
            Manifest: string;
        };
        NamespaceURI: string;
        NamespaceURIMore: string;
        NamespaceURIPss: string;
        Prefix: string;
        GetChildElement: (xel: Node, element: string, ns: string) => Element;
        GetAttributeFromElement: (xel: Element, attribute: string, element: string) => string;
        GetChildElements: (xel: Element, element: string) => Element[];
    };

    /**
     * The SignedInfo class represents the <SignedInfo> element
     * of an XML signature defined by the XML digital signature specification
     */
    class SignedInfo extends XmlObject {

        constructor(signedXml?: SignedXml);
        /**
         * Gets or sets the canonicalization algorithm that is used before signing
         * for the current SignedInfo object.
         */
        CanonicalizationMethod: string;
        /**
         * Gets a Transform object used for canonicalization.
         * @returns Transform
         */
        CanonicalizationMethodObject: Transform;
        /**
         * Gets the number of references in the current SignedInfo object.
         */
        Count: number;
        /**
         * Gets or sets the ID of the current SignedInfo object.
         */
        Id: string;
        /**
         * Gets a value that indicates whether the collection is read-only.
         * @returns boolean
         */
        IsReadOnly: boolean;
        /**
         * Gets a value that indicates whether the collection is synchronized.
         * @returns boolean
         */
        IsSynchronized: boolean;
        /**
         * Gets a list of the Reference objects of the current SignedInfo object.
         */
        References: Reference[];
        /**
         * Gets or sets the length of the signature for the current SignedInfo object.
         */
        SignatureLength: string;
        /**
         * Gets or sets the name of the algorithm used for signature generation
         * and validation for the current SignedInfo object.
         */
        SignatureMethod: string;
        SignatureParams: XmlObject;
        /**
         * Gets an object to use for synchronization.
         */
        SyncRoot: any;
        /**
         * Adds a Reference object to the list of references to digest and sign.
         * @param  {Reference} reference The reference to add to the list of references.
         * @returns void
         */
        AddReference(reference: Reference): void;
        /**
         * Copies the elements of this instance into an Array object, starting at a specified index in the array.
         * @param  {any[]} array
         * @param  {number} index
         * @returns void
         */
        CopyTo(array: any[], index: number): void;
        /**
         * Returns the XML representation of the SignedInfo object.
         * @returns Node
         */
        GetXml(): Node;
        /**
         * Loads a SignedInfo state from an XML element.
         * @param  {Element} value
         * @returns void
         */
        LoadXml(value: Element): void;
    }

    /**
    * Provides a wrapper on a core XML signature object to facilitate creating XML signatures.
    */
    class SignedXml extends XmlObject {
        /**
         * Gets or sets the KeyInfo object of the current SignedXml object.
         */
        KeyInfo: KeyInfo;
        /**
         * Gets the Signature object of the current SignedXml object.
         */
        Signature: Signature;
        /**
         * Gets or sets the prefix for the current SignedXml object.
         */
        Prefix: string;
        /**
         * Gets the length of the signature for the current SignedXml object.
         */
        SignatureLength: number;
        SignatureMethod: string;
        /**
         * Gets the signature value of the current SignedXml object.
         */
        SignatureValue: ArrayBuffer;
        /**
         * Gets the CanonicalizationMethod of the current SignedXml object.
         */
        CanonicalizationMethod: string;
        /**
         * Gets the SignedInfo object of the current SignedXml object.
         */
        SignedInfo: SignedInfo;
        /**
         * Gets or sets the asymmetric algorithm key used for signing a SignedXml object.
         */
        SigningKey: CryptoKey;
        /**
         * Gets or sets the name of the installed key to be used for signing the SignedXml object.
         */
        SigningKeyName: string;
        /**
         * @param {string} idMode. Value of "wssecurity" will create/validate id's with the ws-security namespace
         */
        constructor();
        constructor(node: Document);
        constructor(node: Element);
        /**
         * Adds a Reference object to the SignedXml object that describes a digest method,
         * digest value, and transform to use for creating an XML digital signature.
         * @param  {Reference} reference The Reference object that describes a digest method, digest value,
         * and transform to use for creating an XML digital signature.
         * @returns void
         */
        AddReference(reference: Reference): void;
        /**
         * Computes an XML digital signature using the specified algorithm.
         * @param  {Algorithm} algorithm Specified WebCrypto Algoriithm
         * @returns PromiseType
         */
        ComputeSignature(algorithm: Algorithm): PromiseType;
        /**
         * Determines whether the SignedXml.Signature property verifies using the public key in the signature.
         * @returns PromiseType
         */
        CheckSignature(): PromiseType;
        CheckSignature(key: CryptoKey): PromiseType;
        CheckSignature(cert: X509Certificate): PromiseType;
        /**
         * Loads a SignedXml state from an XML element.
         * @param  {Element} value The XML element to load the SignedXml state from.
         * @returns void
         */
        LoadXml(value: Element): void;
        /**
         * Returns the XML representation of a SignedXml object.
         * @returns Element
         */
        GetXml(): Element;
    }
}
