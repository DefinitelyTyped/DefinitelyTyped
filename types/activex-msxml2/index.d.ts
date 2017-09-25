// Type definitions for Microsoft XML, v6.0 - MSXML2 6.0
// Project: https://msdn.microsoft.com/en-us/library/ms763742.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace MSXML2 {
    /** Schema Object Model Content Types */
    const enum _SCHEMACONTENTTYPE {
        SCHEMACONTENTTYPE_ELEMENTONLY = 2,
        SCHEMACONTENTTYPE_EMPTY = 0,
        SCHEMACONTENTTYPE_MIXED = 3,
        SCHEMACONTENTTYPE_TEXTONLY = 1,
    }

    /** Schema Object Model Filters */
    const enum _SCHEMADERIVATIONMETHOD {
        SCHEMADERIVATIONMETHOD_ALL = 255,
        SCHEMADERIVATIONMETHOD_EMPTY = 0,
        SCHEMADERIVATIONMETHOD_EXTENSION = 2,
        SCHEMADERIVATIONMETHOD_LIST = 8,
        SCHEMADERIVATIONMETHOD_NONE = 256,
        SCHEMADERIVATIONMETHOD_RESTRICTION = 4,
        SCHEMADERIVATIONMETHOD_SUBSTITUTION = 1,
        SCHEMADERIVATIONMETHOD_UNION = 16,
    }

    /** Schema Object Model Process Contents */
    const enum _SCHEMAPROCESSCONTENTS {
        SCHEMAPROCESSCONTENTS_LAX = 2,
        SCHEMAPROCESSCONTENTS_NONE = 0,
        SCHEMAPROCESSCONTENTS_SKIP = 1,
        SCHEMAPROCESSCONTENTS_STRICT = 3,
    }

    /** Schema Object Model Type variety values */
    const enum _SCHEMATYPEVARIETY {
        SCHEMATYPEVARIETY_ATOMIC = 0,
        SCHEMATYPEVARIETY_LIST = 1,
        SCHEMATYPEVARIETY_NONE = -1,
        SCHEMATYPEVARIETY_UNION = 2,
    }

    /** Schema Object Model Attribute Uses */
    const enum _SCHEMAUSE {
        SCHEMAUSE_OPTIONAL = 0,
        SCHEMAUSE_PROHIBITED = 1,
        SCHEMAUSE_REQUIRED = 2,
    }

    /** Schema Object Model Whitespace facet values */
    const enum _SCHEMAWHITESPACE {
        SCHEMAWHITESPACE_COLLAPSE = 2,
        SCHEMAWHITESPACE_NONE = -1,
        SCHEMAWHITESPACE_PRESERVE = 0,
        SCHEMAWHITESPACE_REPLACE = 1,
    }

    const enum _SERVERXMLHTTP_OPTION {
        SXH_OPTION_ESCAPE_PERCENT_IN_URL = 1,
        SXH_OPTION_IGNORE_SERVER_SSL_CERT_ERROR_FLAGS = 2,
        SXH_OPTION_SELECT_CLIENT_SSL_CERT = 3,
        SXH_OPTION_URL = -1,
        SXH_OPTION_URL_CODEPAGE = 0,
    }

    /** Schema Object Model Item Types */
    const enum _SOMITEMTYPE {
        SOMITEM_ALL = 16641,
        SOMITEM_ANNOTATION = 4100,
        SOMITEM_ANY = 16385,
        SOMITEM_ANYATTRIBUTE = 16386,
        SOMITEM_ANYTYPE = 8192,
        SOMITEM_ATTRIBUTE = 4097,
        SOMITEM_ATTRIBUTEGROUP = 4098,
        SOMITEM_CHOICE = 16642,
        SOMITEM_COMPLEXTYPE = 9216,
        SOMITEM_DATATYPE = 8448,
        SOMITEM_DATATYPE_ANYSIMPLETYPE = 8703,
        SOMITEM_DATATYPE_ANYTYPE = 8449,
        SOMITEM_DATATYPE_ANYURI = 8450,
        SOMITEM_DATATYPE_BASE64BINARY = 8451,
        SOMITEM_DATATYPE_BOOLEAN = 8452,
        SOMITEM_DATATYPE_BYTE = 8453,
        SOMITEM_DATATYPE_DATE = 8454,
        SOMITEM_DATATYPE_DATETIME = 8455,
        SOMITEM_DATATYPE_DAY = 8456,
        SOMITEM_DATATYPE_DECIMAL = 8457,
        SOMITEM_DATATYPE_DOUBLE = 8458,
        SOMITEM_DATATYPE_DURATION = 8459,
        SOMITEM_DATATYPE_ENTITIES = 8460,
        SOMITEM_DATATYPE_ENTITY = 8461,
        SOMITEM_DATATYPE_FLOAT = 8462,
        SOMITEM_DATATYPE_HEXBINARY = 8463,
        SOMITEM_DATATYPE_ID = 8464,
        SOMITEM_DATATYPE_IDREF = 8465,
        SOMITEM_DATATYPE_IDREFS = 8466,
        SOMITEM_DATATYPE_INT = 8467,
        SOMITEM_DATATYPE_INTEGER = 8468,
        SOMITEM_DATATYPE_LANGUAGE = 8469,
        SOMITEM_DATATYPE_LONG = 8470,
        SOMITEM_DATATYPE_MONTH = 8471,
        SOMITEM_DATATYPE_MONTHDAY = 8472,
        SOMITEM_DATATYPE_NAME = 8473,
        SOMITEM_DATATYPE_NCNAME = 8474,
        SOMITEM_DATATYPE_NEGATIVEINTEGER = 8475,
        SOMITEM_DATATYPE_NMTOKEN = 8476,
        SOMITEM_DATATYPE_NMTOKENS = 8477,
        SOMITEM_DATATYPE_NONNEGATIVEINTEGER = 8478,
        SOMITEM_DATATYPE_NONPOSITIVEINTEGER = 8479,
        SOMITEM_DATATYPE_NORMALIZEDSTRING = 8480,
        SOMITEM_DATATYPE_NOTATION = 8481,
        SOMITEM_DATATYPE_POSITIVEINTEGER = 8482,
        SOMITEM_DATATYPE_QNAME = 8483,
        SOMITEM_DATATYPE_SHORT = 8484,
        SOMITEM_DATATYPE_STRING = 8485,
        SOMITEM_DATATYPE_TIME = 8486,
        SOMITEM_DATATYPE_TOKEN = 8487,
        SOMITEM_DATATYPE_UNSIGNEDBYTE = 8488,
        SOMITEM_DATATYPE_UNSIGNEDINT = 8489,
        SOMITEM_DATATYPE_UNSIGNEDLONG = 8490,
        SOMITEM_DATATYPE_UNSIGNEDSHORT = 8491,
        SOMITEM_DATATYPE_YEAR = 8492,
        SOMITEM_DATATYPE_YEARMONTH = 8493,
        SOMITEM_ELEMENT = 16387,
        SOMITEM_EMPTYPARTICLE = 16644,
        SOMITEM_GROUP = 16640,
        SOMITEM_IDENTITYCONSTRAINT = 4352,
        SOMITEM_KEY = 4353,
        SOMITEM_KEYREF = 4354,
        SOMITEM_NOTATION = 4099,
        SOMITEM_NULL = 2048,
        SOMITEM_NULL_ANY = 18433,
        SOMITEM_NULL_ANYATTRIBUTE = 18434,
        SOMITEM_NULL_ELEMENT = 18435,
        SOMITEM_NULL_TYPE = 10240,
        SOMITEM_PARTICLE = 16384,
        SOMITEM_SCHEMA = 4096,
        SOMITEM_SEQUENCE = 16643,
        SOMITEM_SIMPLETYPE = 8704,
        SOMITEM_UNIQUE = 4355,
    }

    const enum _SXH_PROXY_SETTING {
        SXH_PROXY_SET_DEFAULT = 0,
        SXH_PROXY_SET_DIRECT = 1,
        SXH_PROXY_SET_PRECONFIG = 0,
        SXH_PROXY_SET_PROXY = 2,
    }

    const enum _SXH_SERVER_CERT_OPTION {
        SXH_SERVER_CERT_IGNORE_ALL_SERVER_ERRORS = 13056,
        SXH_SERVER_CERT_IGNORE_CERT_CN_INVALID = 4096,
        SXH_SERVER_CERT_IGNORE_CERT_DATE_INVALID = 8192,
        SXH_SERVER_CERT_IGNORE_UNKNOWN_CA = 256,
        SXH_SERVER_CERT_IGNORE_WRONG_USAGE = 512,
    }

    /** Options for XHR properties */
    const enum _XHR_PROPERTY {
        XHR_PROP_EXTENDED_ERROR = 6,
        XHR_PROP_IGNORE_CERT_ERRORS = 8,
        XHR_PROP_MAX_CONNECTIONS = 11,
        XHR_PROP_NO_AUTH = 1,
        XHR_PROP_NO_CACHE = 5,
        XHR_PROP_NO_CRED_PROMPT = 0,
        XHR_PROP_NO_DEFAULT_HEADERS = 3,
        XHR_PROP_ONDATA_THRESHOLD = 9,
        XHR_PROP_QUERY_STRING_UTF8 = 7,
        XHR_PROP_REPORT_REDIRECT_STATUS = 4,
        XHR_PROP_SET_ENTERPRISEID = 10,
        XHR_PROP_TIMEOUT = 2,
    }

    /** Constants that define a node's type */
    const enum DOMNodeType {
        NODE_ATTRIBUTE = 2,
        NODE_CDATA_SECTION = 4,
        NODE_COMMENT = 8,
        NODE_DOCUMENT = 9,
        NODE_DOCUMENT_FRAGMENT = 11,
        NODE_DOCUMENT_TYPE = 10,
        NODE_ELEMENT = 1,
        NODE_ENTITY = 6,
        NODE_ENTITY_REFERENCE = 5,
        NODE_INVALID = 0,
        NODE_NOTATION = 12,
        NODE_PROCESSING_INSTRUCTION = 7,
        NODE_TEXT = 3,
    }

    /** Schema Object Model Content Types */
    const enum SCHEMACONTENTTYPE {
        SCHEMACONTENTTYPE_ELEMENTONLY = 2,
        SCHEMACONTENTTYPE_EMPTY = 0,
        SCHEMACONTENTTYPE_MIXED = 3,
        SCHEMACONTENTTYPE_TEXTONLY = 1,
    }

    /** Schema Object Model Filters */
    const enum SCHEMADERIVATIONMETHOD {
        SCHEMADERIVATIONMETHOD_ALL = 255,
        SCHEMADERIVATIONMETHOD_EMPTY = 0,
        SCHEMADERIVATIONMETHOD_EXTENSION = 2,
        SCHEMADERIVATIONMETHOD_LIST = 8,
        SCHEMADERIVATIONMETHOD_NONE = 256,
        SCHEMADERIVATIONMETHOD_RESTRICTION = 4,
        SCHEMADERIVATIONMETHOD_SUBSTITUTION = 1,
        SCHEMADERIVATIONMETHOD_UNION = 16,
    }

    /** Schema Object Model Process Contents */
    const enum SCHEMAPROCESSCONTENTS {
        SCHEMAPROCESSCONTENTS_LAX = 2,
        SCHEMAPROCESSCONTENTS_NONE = 0,
        SCHEMAPROCESSCONTENTS_SKIP = 1,
        SCHEMAPROCESSCONTENTS_STRICT = 3,
    }

    /** Schema Object Model Type variety values */
    const enum SCHEMATYPEVARIETY {
        SCHEMATYPEVARIETY_ATOMIC = 0,
        SCHEMATYPEVARIETY_LIST = 1,
        SCHEMATYPEVARIETY_NONE = -1,
        SCHEMATYPEVARIETY_UNION = 2,
    }

    /** Schema Object Model Attribute Uses */
    const enum SCHEMAUSE {
        SCHEMAUSE_OPTIONAL = 0,
        SCHEMAUSE_PROHIBITED = 1,
        SCHEMAUSE_REQUIRED = 2,
    }

    /** Schema Object Model Whitespace facet values */
    const enum SCHEMAWHITESPACE {
        SCHEMAWHITESPACE_COLLAPSE = 2,
        SCHEMAWHITESPACE_NONE = -1,
        SCHEMAWHITESPACE_PRESERVE = 0,
        SCHEMAWHITESPACE_REPLACE = 1,
    }

    /** Options for ServerXMLHTTPRequest Option property */
    const enum SERVERXMLHTTP_OPTION {
        SXH_OPTION_ESCAPE_PERCENT_IN_URL = 1,
        SXH_OPTION_IGNORE_SERVER_SSL_CERT_ERROR_FLAGS = 2,
        SXH_OPTION_SELECT_CLIENT_SSL_CERT = 3,
        SXH_OPTION_URL = -1,
        SXH_OPTION_URL_CODEPAGE = 0,
    }

    /** Schema Object Model Item Types */
    const enum SOMITEMTYPE {
        SOMITEM_ALL = 16641,
        SOMITEM_ANNOTATION = 4100,
        SOMITEM_ANY = 16385,
        SOMITEM_ANYATTRIBUTE = 16386,
        SOMITEM_ANYTYPE = 8192,
        SOMITEM_ATTRIBUTE = 4097,
        SOMITEM_ATTRIBUTEGROUP = 4098,
        SOMITEM_CHOICE = 16642,
        SOMITEM_COMPLEXTYPE = 9216,
        SOMITEM_DATATYPE = 8448,
        SOMITEM_DATATYPE_ANYSIMPLETYPE = 8703,
        SOMITEM_DATATYPE_ANYTYPE = 8449,
        SOMITEM_DATATYPE_ANYURI = 8450,
        SOMITEM_DATATYPE_BASE64BINARY = 8451,
        SOMITEM_DATATYPE_BOOLEAN = 8452,
        SOMITEM_DATATYPE_BYTE = 8453,
        SOMITEM_DATATYPE_DATE = 8454,
        SOMITEM_DATATYPE_DATETIME = 8455,
        SOMITEM_DATATYPE_DAY = 8456,
        SOMITEM_DATATYPE_DECIMAL = 8457,
        SOMITEM_DATATYPE_DOUBLE = 8458,
        SOMITEM_DATATYPE_DURATION = 8459,
        SOMITEM_DATATYPE_ENTITIES = 8460,
        SOMITEM_DATATYPE_ENTITY = 8461,
        SOMITEM_DATATYPE_FLOAT = 8462,
        SOMITEM_DATATYPE_HEXBINARY = 8463,
        SOMITEM_DATATYPE_ID = 8464,
        SOMITEM_DATATYPE_IDREF = 8465,
        SOMITEM_DATATYPE_IDREFS = 8466,
        SOMITEM_DATATYPE_INT = 8467,
        SOMITEM_DATATYPE_INTEGER = 8468,
        SOMITEM_DATATYPE_LANGUAGE = 8469,
        SOMITEM_DATATYPE_LONG = 8470,
        SOMITEM_DATATYPE_MONTH = 8471,
        SOMITEM_DATATYPE_MONTHDAY = 8472,
        SOMITEM_DATATYPE_NAME = 8473,
        SOMITEM_DATATYPE_NCNAME = 8474,
        SOMITEM_DATATYPE_NEGATIVEINTEGER = 8475,
        SOMITEM_DATATYPE_NMTOKEN = 8476,
        SOMITEM_DATATYPE_NMTOKENS = 8477,
        SOMITEM_DATATYPE_NONNEGATIVEINTEGER = 8478,
        SOMITEM_DATATYPE_NONPOSITIVEINTEGER = 8479,
        SOMITEM_DATATYPE_NORMALIZEDSTRING = 8480,
        SOMITEM_DATATYPE_NOTATION = 8481,
        SOMITEM_DATATYPE_POSITIVEINTEGER = 8482,
        SOMITEM_DATATYPE_QNAME = 8483,
        SOMITEM_DATATYPE_SHORT = 8484,
        SOMITEM_DATATYPE_STRING = 8485,
        SOMITEM_DATATYPE_TIME = 8486,
        SOMITEM_DATATYPE_TOKEN = 8487,
        SOMITEM_DATATYPE_UNSIGNEDBYTE = 8488,
        SOMITEM_DATATYPE_UNSIGNEDINT = 8489,
        SOMITEM_DATATYPE_UNSIGNEDLONG = 8490,
        SOMITEM_DATATYPE_UNSIGNEDSHORT = 8491,
        SOMITEM_DATATYPE_YEAR = 8492,
        SOMITEM_DATATYPE_YEARMONTH = 8493,
        SOMITEM_ELEMENT = 16387,
        SOMITEM_EMPTYPARTICLE = 16644,
        SOMITEM_GROUP = 16640,
        SOMITEM_IDENTITYCONSTRAINT = 4352,
        SOMITEM_KEY = 4353,
        SOMITEM_KEYREF = 4354,
        SOMITEM_NOTATION = 4099,
        SOMITEM_NULL = 2048,
        SOMITEM_NULL_ANY = 18433,
        SOMITEM_NULL_ANYATTRIBUTE = 18434,
        SOMITEM_NULL_ELEMENT = 18435,
        SOMITEM_NULL_TYPE = 10240,
        SOMITEM_PARTICLE = 16384,
        SOMITEM_SCHEMA = 4096,
        SOMITEM_SEQUENCE = 16643,
        SOMITEM_SIMPLETYPE = 8704,
        SOMITEM_UNIQUE = 4355,
    }

    /** Settings for setProxy */
    const enum SXH_PROXY_SETTING {
        SXH_PROXY_SET_DEFAULT = 0,
        SXH_PROXY_SET_DIRECT = 1,
        SXH_PROXY_SET_PRECONFIG = 0,
        SXH_PROXY_SET_PROXY = 2,
    }

    /** Flags for SXH_OPTION_IGNORE_SERVER_SSL_CERT_ERROR_FLAGS option */
    const enum SXH_SERVER_CERT_OPTION {
        SXH_SERVER_CERT_IGNORE_ALL_SERVER_ERRORS = 13056,
        SXH_SERVER_CERT_IGNORE_CERT_CN_INVALID = 4096,
        SXH_SERVER_CERT_IGNORE_CERT_DATE_INVALID = 8192,
        SXH_SERVER_CERT_IGNORE_UNKNOWN_CA = 256,
        SXH_SERVER_CERT_IGNORE_WRONG_USAGE = 512,
    }

    /** Constants that define a node's type */
    const enum tagDOMNodeType {
        NODE_ATTRIBUTE = 2,
        NODE_CDATA_SECTION = 4,
        NODE_COMMENT = 8,
        NODE_DOCUMENT = 9,
        NODE_DOCUMENT_FRAGMENT = 11,
        NODE_DOCUMENT_TYPE = 10,
        NODE_ELEMENT = 1,
        NODE_ENTITY = 6,
        NODE_ENTITY_REFERENCE = 5,
        NODE_INVALID = 0,
        NODE_NOTATION = 12,
        NODE_PROCESSING_INSTRUCTION = 7,
        NODE_TEXT = 3,
    }

    /** Options for XHR properties */
    const enum XHR_PROPERTY {
        XHR_PROP_EXTENDED_ERROR = 6,
        XHR_PROP_IGNORE_CERT_ERRORS = 8,
        XHR_PROP_MAX_CONNECTIONS = 11,
        XHR_PROP_NO_AUTH = 1,
        XHR_PROP_NO_CACHE = 5,
        XHR_PROP_NO_CRED_PROMPT = 0,
        XHR_PROP_NO_DEFAULT_HEADERS = 3,
        XHR_PROP_ONDATA_THRESHOLD = 9,
        XHR_PROP_QUERY_STRING_UTF8 = 7,
        XHR_PROP_REPORT_REDIRECT_STATUS = 4,
        XHR_PROP_SET_ENTERPRISEID = 10,
        XHR_PROP_TIMEOUT = 2,
    }

    interface _FILETIME {
        readonly dwHighDateTime: number;
        readonly dwLowDateTime: number;
    }

    /** W3C-DOM XML Document 6.0 (Apartment) */
    class DOMDocument60 {
        private 'MSXML2.DOMDocument60_typekey': DOMDocument60;
        private constructor();

        /** abort an asynchronous download */
        abort(): void;

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** flag for asynchronous download */
        async: boolean;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** create an attribute node */
        createAttribute(name: string): IXMLDOMAttribute;

        /** create a CDATA section node */
        createCDATASection(data: string): IXMLDOMCDATASection;

        /** create a comment node */
        createComment(data: string): IXMLDOMComment;

        /** create a DocumentFragment node */
        createDocumentFragment(): IXMLDOMDocumentFragment;

        /** create an Element node */
        createElement(tagName: string): IXMLDOMElement;

        /** create an entity reference node */
        createEntityReference(name: string): IXMLDOMEntityReference;

        /** create a node of the specified node type and name */
        createNode(type: any, name: string, namespaceURI: string): IXMLDOMNode;

        /** create a processing instruction node */
        createProcessingInstruction(target: string, data: string): IXMLDOMProcessingInstruction;

        /** create a text node */
        createTextNode(data: string): IXMLDOMText;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** node corresponding to the DOCTYPE */
        readonly doctype: IXMLDOMDocumentType;

        /** the root of the tree */
        documentElement: IXMLDOMElement;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;

        /** build a list of elements by name */
        getElementsByTagName(tagName: string): IXMLDOMNodeList;

        /** get the value of the named property */
        getProperty(name: string): any;
        hasChildNodes(): boolean;

        /** info on this DOM implementation */
        readonly implementation: IXMLDOMImplementation;

        /** clone node such that clones ownerDocument is this document */
        importNode(node: IXMLDOMNode, deep: boolean): IXMLDOMNode;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** load document from the specified XML source */
        load(xmlSource: any): boolean;

        /** load the document from a string */
        loadXML(bstrXML: string): boolean;

        /** A collection of all namespaces for this document */
        readonly namespaces: IXMLDOMSchemaCollection;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** retrieve node from it's ID */
        nodeFromID(idString: string): IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** register an ondataavailable event handler */
        readonly ondataavailable: any;

        /** register a readystatechange event handler */
        readonly onreadystatechange: any;

        /** register an ontransformnode event handler */
        readonly ontransformnode: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** get the last parser error */
        readonly parseError: IXMLDOMParseError;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** indicates whether the parser preserves whitespace */
        preserveWhiteSpace: boolean;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** get the state of the XML document */
        readonly readyState: number;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** indicates whether the parser resolves references to external DTD/Entities/Schema */
        resolveExternals: boolean;

        /** save the document to a specified destination */
        save(destination: any): void;

        /** The associated schema cache */
        schemas: any;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** set the value of the named property */
        setProperty(name: string, value: any): void;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** get the URL for the loaded XML document */
        readonly url: string;

        /** perform runtime validation on the currently loaded XML document */
        validate(): IXMLDOMParseError;

        /** perform runtime validation on the currently loaded XML document node */
        validateNode(node: IXMLDOMNode): IXMLDOMParseError;

        /** indicates whether the parser performs validation */
        validateOnParse: boolean;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    /** W3C-DOM XML Document 6.0 (Free threaded) */
    class FreeThreadedDOMDocument60 {
        private 'MSXML2.FreeThreadedDOMDocument60_typekey': FreeThreadedDOMDocument60;
        private constructor();

        /** abort an asynchronous download */
        abort(): void;

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** flag for asynchronous download */
        async: boolean;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** create an attribute node */
        createAttribute(name: string): IXMLDOMAttribute;

        /** create a CDATA section node */
        createCDATASection(data: string): IXMLDOMCDATASection;

        /** create a comment node */
        createComment(data: string): IXMLDOMComment;

        /** create a DocumentFragment node */
        createDocumentFragment(): IXMLDOMDocumentFragment;

        /** create an Element node */
        createElement(tagName: string): IXMLDOMElement;

        /** create an entity reference node */
        createEntityReference(name: string): IXMLDOMEntityReference;

        /** create a node of the specified node type and name */
        createNode(type: any, name: string, namespaceURI: string): IXMLDOMNode;

        /** create a processing instruction node */
        createProcessingInstruction(target: string, data: string): IXMLDOMProcessingInstruction;

        /** create a text node */
        createTextNode(data: string): IXMLDOMText;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** node corresponding to the DOCTYPE */
        readonly doctype: IXMLDOMDocumentType;

        /** the root of the tree */
        documentElement: IXMLDOMElement;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;

        /** build a list of elements by name */
        getElementsByTagName(tagName: string): IXMLDOMNodeList;

        /** get the value of the named property */
        getProperty(name: string): any;
        hasChildNodes(): boolean;

        /** info on this DOM implementation */
        readonly implementation: IXMLDOMImplementation;

        /** clone node such that clones ownerDocument is this document */
        importNode(node: IXMLDOMNode, deep: boolean): IXMLDOMNode;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** load document from the specified XML source */
        load(xmlSource: any): boolean;

        /** load the document from a string */
        loadXML(bstrXML: string): boolean;

        /** A collection of all namespaces for this document */
        readonly namespaces: IXMLDOMSchemaCollection;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** retrieve node from it's ID */
        nodeFromID(idString: string): IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** register an ondataavailable event handler */
        readonly ondataavailable: any;

        /** register a readystatechange event handler */
        readonly onreadystatechange: any;

        /** register an ontransformnode event handler */
        readonly ontransformnode: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** get the last parser error */
        readonly parseError: IXMLDOMParseError;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** indicates whether the parser preserves whitespace */
        preserveWhiteSpace: boolean;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** get the state of the XML document */
        readonly readyState: number;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** indicates whether the parser resolves references to external DTD/Entities/Schema */
        resolveExternals: boolean;

        /** save the document to a specified destination */
        save(destination: any): void;

        /** The associated schema cache */
        schemas: any;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** set the value of the named property */
        setProperty(name: string, value: any): void;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** get the URL for the loaded XML document */
        readonly url: string;

        /** perform runtime validation on the currently loaded XML document */
        validate(): IXMLDOMParseError;

        /** perform runtime validation on the currently loaded XML document node */
        validateNode(node: IXMLDOMNode): IXMLDOMParseError;

        /** indicates whether the parser performs validation */
        validateOnParse: boolean;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    /** Free Threaded XML HTTP Request class 6.0 */
    class FreeThreadedXMLHTTP60 {
        private 'MSXML2.FreeThreadedXMLHTTP60_typekey': FreeThreadedXMLHTTP60;
        private constructor();
        abort(): void;
        getAllResponseHeaders(ppwszHeaders: string): void;
        GetCookie(pwszUrl: string, pwszName: string, dwFlags: number, pcCookies: number, ppCookies: tagXHR_COOKIE): void;
        getResponseHeader(pwszHeader: string, ppwszValue: string): void;
        open(
            pwszMethod: string, pwszUrl: string, pStatusCallback: IXMLHTTPRequest2Callback, pwszUserName: string, pwszPassword: string, pwszProxyUserName: string, pwszProxyPassword: string): void;
        send(pBody: ISequentialStream, cbBody: number): void;
        SetCookie(pCookie: tagXHR_COOKIE, pdwCookieState: number): void;
        SetCustomResponseStream(pSequentialStream: ISequentialStream): void;
        setProperty(eProperty: XHR_PROPERTY, ullValue: number): void;
        setRequestHeader(pwszHeader: string, pwszValue: string): void;
    }

    /** IMXNamespacePrefixes interface */
    class IMXNamespacePrefixes {
        private 'MSXML2.IMXNamespacePrefixes_typekey': IMXNamespacePrefixes;
        private constructor();
        item(index: number): string;
        readonly length: number;
    }

    /** XML Schema */
    class ISchema {
        private 'MSXML2.ISchema_typekey': ISchema;
        private constructor();
        readonly attributeGroups: ISchemaItemCollection;
        readonly attributes: ISchemaItemCollection;
        readonly elements: ISchemaItemCollection;
        readonly id: string;
        readonly itemType: SOMITEMTYPE;
        readonly modelGroups: ISchemaItemCollection;
        readonly name: string;
        readonly namespaceURI: string;
        readonly notations: ISchemaItemCollection;
        readonly schema: ISchema;
        readonly schemaLocations: ISchemaStringCollection;
        readonly targetNamespace: string;
        readonly types: ISchemaItemCollection;
        readonly unhandledAttributes: IVBSAXAttributes;
        readonly version: string;
        writeAnnotation(annotationSink: any): boolean;
    }

    /** XML Schema Item */
    class ISchemaItem {
        private 'MSXML2.ISchemaItem_typekey': ISchemaItem;
        private constructor();
        readonly id: string;
        readonly itemType: SOMITEMTYPE;
        readonly name: string;
        readonly namespaceURI: string;
        readonly schema: ISchema;
        readonly unhandledAttributes: IVBSAXAttributes;
        writeAnnotation(annotationSink: any): boolean;
    }

    /** XML Schema Item Collection */
    class ISchemaItemCollection {
        private 'MSXML2.ISchemaItemCollection_typekey': ISchemaItemCollection;
        private constructor();
        item(index: number): ISchemaItem;
        itemByName(name: string): ISchemaItem;
        itemByQName(name: string, namespaceURI: string): ISchemaItem;
        readonly length: number;
    }

    /** XML Schema String Collection */
    class ISchemaStringCollection {
        private 'MSXML2.ISchemaStringCollection_typekey': ISchemaStringCollection;
        private constructor();
        item(index: number): string;
        readonly length: number;
    }

    class ISequentialStream {
        private 'MSXML2.ISequentialStream_typekey': ISequentialStream;
        private constructor();
        RemoteRead(pv: number, cb: number, pcbRead: number): void;
        RemoteWrite(pv: number, cb: number, pcbWritten: number): void;
    }

    /** IVBSAXAttributes interface */
    class IVBSAXAttributes {
        private 'MSXML2.IVBSAXAttributes_typekey': IVBSAXAttributes;
        private constructor();

        /** Look up the index of an attribute by Namespace name. */
        getIndexFromName(strURI: string, strLocalName: string): number;

        /** Look up the index of an attribute by XML 1.0 qualified name. */
        getIndexFromQName(strQName: string): number;

        /** Look up an attribute's local name by index. */
        getLocalName(nIndex: number): string;

        /** Look up an attribute's XML 1.0 qualified name by index. */
        getQName(nIndex: number): string;

        /** Look up an attribute's type by index. */
        getType(nIndex: number): string;

        /** Look up an attribute's type by Namespace name. */
        getTypeFromName(strURI: string, strLocalName: string): string;

        /** Look up an attribute's type by XML 1.0 qualified name. */
        getTypeFromQName(strQName: string): string;

        /** Look up an attribute's Namespace URI by index. */
        getURI(nIndex: number): string;

        /** Look up an attribute's value by index. */
        getValue(nIndex: number): string;

        /** Look up an attribute's value by Namespace name. */
        getValueFromName(strURI: string, strLocalName: string): string;

        /** Look up an attribute's value by XML 1.0 qualified name. */
        getValueFromQName(strQName: string): string;

        /** Get the number of attributes in the list. */
        readonly length: number;
    }

    /** IVBSAXContentHandler interface */
    class IVBSAXContentHandler {
        private 'MSXML2.IVBSAXContentHandler_typekey': IVBSAXContentHandler;
        private constructor();

        /** Receive notification of character data. */
        characters(strChars: string): void;

        /** Receive an object for locating the origin of SAX document events. */
        readonly documentLocator: IVBSAXLocator;

        /** Receive notification of the end of a document. */
        endDocument(): void;

        /** Receive notification of the end of an element. */
        endElement(strNamespaceURI: string, strLocalName: string, strQName: string): void;

        /** End the scope of a prefix-URI mapping. */
        endPrefixMapping(strPrefix: string): void;

        /** Receive notification of ignorable whitespace in element content. */
        ignorableWhitespace(strChars: string): void;

        /** Receive notification of a processing instruction. */
        processingInstruction(strTarget: string, strData: string): void;

        /** Receive notification of a skipped entity. */
        skippedEntity(strName: string): void;

        /** Receive notification of the beginning of a document. */
        startDocument(): void;

        /** Receive notification of the beginning of an element. */
        startElement(strNamespaceURI: string, strLocalName: string, strQName: string, oAttributes: IVBSAXAttributes): void;

        /** Begin the scope of a prefix-URI Namespace mapping. */
        startPrefixMapping(strPrefix: string, strURI: string): void;
    }

    /** IVBSAXDTDHandler interface */
    class IVBSAXDTDHandler {
        private 'MSXML2.IVBSAXDTDHandler_typekey': IVBSAXDTDHandler;
        private constructor();

        /** Receive notification of a notation declaration event. */
        notationDecl(strName: string, strPublicId: string, strSystemId: string): void;

        /** Receive notification of an unparsed entity declaration event. */
        unparsedEntityDecl(strName: string, strPublicId: string, strSystemId: string, strNotationName: string): void;
    }

    /** IVBSAXEntityResolver interface */
    class IVBSAXEntityResolver {
        private 'MSXML2.IVBSAXEntityResolver_typekey': IVBSAXEntityResolver;
        private constructor();

        /** Allow the application to resolve external entities. */
        resolveEntity(strPublicId: string, strSystemId: string): any;
    }

    /** IVBSAXErrorHandler interface */
    class IVBSAXErrorHandler {
        private 'MSXML2.IVBSAXErrorHandler_typekey': IVBSAXErrorHandler;
        private constructor();

        /** Receive notification of a recoverable error. */
        error(oLocator: IVBSAXLocator, strErrorMessage: string, nErrorCode: number): void;

        /** Receive notification of a non-recoverable error. */
        fatalError(oLocator: IVBSAXLocator, strErrorMessage: string, nErrorCode: number): void;

        /** Receive notification of an ignorable warning. */
        ignorableWarning(oLocator: IVBSAXLocator, strErrorMessage: string, nErrorCode: number): void;
    }

    /** IVBSAXLocator interface */
    class IVBSAXLocator {
        private 'MSXML2.IVBSAXLocator_typekey': IVBSAXLocator;
        private constructor();

        /** Get the column number where the current document event ends. */
        readonly columnNumber: number;

        /** Get the line number where the current document event ends. */
        readonly lineNumber: number;

        /** Get the public identifier for the current document event. */
        readonly publicId: string;

        /** Get the system identifier for the current document event. */
        readonly systemId: string;
    }

    class IXMLDOMAttribute {
        private 'MSXML2.IXMLDOMAttribute_typekey': IXMLDOMAttribute;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** get name of the attribute */
        readonly name: string;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** string value of the attribute */
        value: any;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMCDATASection {
        private 'MSXML2.IXMLDOMCDATASection_typekey': IXMLDOMCDATASection;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** append string to value */
        appendData(data: string): void;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** value of the node */
        data: string;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** delete string within the value */
        deleteData(offset: number, count: number): void;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** insert string into value */
        insertData(offset: number, data: string): void;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** number of characters in value */
        readonly length: number;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** replace string within the value */
        replaceData(offset: number, count: number, data: string): void;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** split the text node into two text nodes at the position specified */
        splitText(offset: number): IXMLDOMText;

        /** retrieve substring of value */
        substringData(offset: number, count: number): string;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMComment {
        private 'MSXML2.IXMLDOMComment_typekey': IXMLDOMComment;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** append string to value */
        appendData(data: string): void;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** value of the node */
        data: string;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** delete string within the value */
        deleteData(offset: number, count: number): void;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** insert string into value */
        insertData(offset: number, data: string): void;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** number of characters in value */
        readonly length: number;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** replace string within the value */
        replaceData(offset: number, count: number, data: string): void;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** retrieve substring of value */
        substringData(offset: number, count: number): string;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMDocument {
        private 'MSXML2.IXMLDOMDocument_typekey': IXMLDOMDocument;
        private constructor();

        /** abort an asynchronous download */
        abort(): void;

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** flag for asynchronous download */
        async: boolean;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** create an attribute node */
        createAttribute(name: string): IXMLDOMAttribute;

        /** create a CDATA section node */
        createCDATASection(data: string): IXMLDOMCDATASection;

        /** create a comment node */
        createComment(data: string): IXMLDOMComment;

        /** create a DocumentFragment node */
        createDocumentFragment(): IXMLDOMDocumentFragment;

        /** create an Element node */
        createElement(tagName: string): IXMLDOMElement;

        /** create an entity reference node */
        createEntityReference(name: string): IXMLDOMEntityReference;

        /** create a node of the specified node type and name */
        createNode(type: any, name: string, namespaceURI: string): IXMLDOMNode;

        /** create a processing instruction node */
        createProcessingInstruction(target: string, data: string): IXMLDOMProcessingInstruction;

        /** create a text node */
        createTextNode(data: string): IXMLDOMText;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** node corresponding to the DOCTYPE */
        readonly doctype: IXMLDOMDocumentType;

        /** the root of the tree */
        documentElement: IXMLDOMElement;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;

        /** build a list of elements by name */
        getElementsByTagName(tagName: string): IXMLDOMNodeList;
        hasChildNodes(): boolean;

        /** info on this DOM implementation */
        readonly implementation: IXMLDOMImplementation;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** load document from the specified XML source */
        load(xmlSource: any): boolean;

        /** load the document from a string */
        loadXML(bstrXML: string): boolean;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** retrieve node from it's ID */
        nodeFromID(idString: string): IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** register an ondataavailable event handler */
        readonly ondataavailable: any;

        /** register a readystatechange event handler */
        readonly onreadystatechange: any;

        /** register an ontransformnode event handler */
        readonly ontransformnode: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** get the last parser error */
        readonly parseError: IXMLDOMParseError;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** indicates whether the parser preserves whitespace */
        preserveWhiteSpace: boolean;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** get the state of the XML document */
        readonly readyState: number;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** indicates whether the parser resolves references to external DTD/Entities/Schema */
        resolveExternals: boolean;

        /** save the document to a specified destination */
        save(destination: any): void;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** get the URL for the loaded XML document */
        readonly url: string;

        /** indicates whether the parser performs validation */
        validateOnParse: boolean;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMDocumentFragment {
        private 'MSXML2.IXMLDOMDocumentFragment_typekey': IXMLDOMDocumentFragment;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMDocumentType {
        private 'MSXML2.IXMLDOMDocumentType_typekey': IXMLDOMDocumentType;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** a list of entities in the document */
        readonly entities: IXMLDOMNamedNodeMap;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** name of the document type (root of the tree) */
        readonly name: string;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** a list of notations in the document */
        readonly notations: IXMLDOMNamedNodeMap;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMElement {
        private 'MSXML2.IXMLDOMElement_typekey': IXMLDOMElement;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;

        /** look up the string value of an attribute by name */
        getAttribute(name: string): any;

        /** look up the attribute node by name */
        getAttributeNode(name: string): IXMLDOMAttribute;

        /** build a list of elements by name */
        getElementsByTagName(tagName: string): IXMLDOMNodeList;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** collapse all adjacent text nodes in sub-tree */
        normalize(): void;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove an attribute by name */
        removeAttribute(name: string): void;

        /** remove the specified attribute */
        removeAttributeNode(DOMAttribute: IXMLDOMAttribute): IXMLDOMAttribute;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** set the string value of an attribute by name */
        setAttribute(name: string, value: any): void;

        /** set the specified attribute on the element */
        setAttributeNode(DOMAttribute: IXMLDOMAttribute): IXMLDOMAttribute;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** get the tagName of the element */
        readonly tagName: string;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMEntityReference {
        private 'MSXML2.IXMLDOMEntityReference_typekey': IXMLDOMEntityReference;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMImplementation {
        private 'MSXML2.IXMLDOMImplementation_typekey': IXMLDOMImplementation;
        private constructor();
        hasFeature(feature: string, version: string): boolean;
    }

    class IXMLDOMNamedNodeMap {
        private 'MSXML2.IXMLDOMNamedNodeMap_typekey': IXMLDOMNamedNodeMap;
        private constructor();

        /** lookup item by name */
        getNamedItem(name: string): IXMLDOMNode;

        /** lookup the item by name and namespace */
        getQualifiedItem(baseName: string, namespaceURI: string): IXMLDOMNode;

        /** collection of nodes */
        item(index: number): IXMLDOMNode;

        /** number of nodes in the collection */
        readonly length: number;

        /** get next node from iterator */
        nextNode(): IXMLDOMNode;

        /** remove item by name */
        removeNamedItem(name: string): IXMLDOMNode;

        /** remove the item by name and namespace */
        removeQualifiedItem(baseName: string, namespaceURI: string): IXMLDOMNode;

        /** reset the position of iterator */
        reset(): void;

        /** set item by name */
        setNamedItem(newItem: IXMLDOMNode): IXMLDOMNode;
    }

    /** Core DOM node interface */
    class IXMLDOMNode {
        private 'MSXML2.IXMLDOMNode_typekey': IXMLDOMNode;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    class IXMLDOMNodeList {
        private 'MSXML2.IXMLDOMNodeList_typekey': IXMLDOMNodeList;
        private constructor();

        /** collection of nodes */
        item(index: number): IXMLDOMNode;

        /** number of nodes in the collection */
        readonly length: number;

        /** get next node from iterator */
        nextNode(): IXMLDOMNode;

        /** reset the position of iterator */
        reset(): void;
    }

    /** structure for reporting parser errors */
    class IXMLDOMParseError {
        private 'MSXML2.IXMLDOMParseError_typekey': IXMLDOMParseError;
        private constructor();

        /** the error code */
        readonly errorCode: number;

        /** the absolute file position in the XML document containing the error */
        readonly filepos: number;

        /** the line number in the XML document where the error occurred */
        readonly line: number;

        /** the character position in the line containing the error */
        readonly linepos: number;

        /** the cause of the error */
        readonly reason: string;

        /** the data where the error occurred */
        readonly srcText: string;

        /** the URL of the XML document containing the error */
        readonly url: string;
    }

    class IXMLDOMProcessingInstruction {
        private 'MSXML2.IXMLDOMProcessingInstruction_typekey': IXMLDOMProcessingInstruction;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** the data */
        data: string;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** the target */
        readonly target: string;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    /** XML Schemas Collection */
    class IXMLDOMSchemaCollection {
        private 'MSXML2.IXMLDOMSchemaCollection_typekey': IXMLDOMSchemaCollection;
        private constructor();

        /** add a new schema */
        add(namespaceURI: string, var_1: any): void;

        /** copy & merge other collection into this one */
        addCollection(otherCollection: IXMLDOMSchemaCollection): void;

        /** lookup schema by namespaceURI */
        get(namespaceURI: string): IXMLDOMNode;

        /** number of schemas in collection */
        readonly length: number;

        /** Get namespaceURI for schema by index */
        namespaceURI(index: number): string;

        /** remove schema by namespaceURI */
        remove(namespaceURI: string): void;
    }

    class IXMLDOMText {
        private 'MSXML2.IXMLDOMText_typekey': IXMLDOMText;
        private constructor();

        /** append a child node */
        appendChild(newChild: IXMLDOMNode): IXMLDOMNode;

        /** append string to value */
        appendData(data: string): void;

        /** the collection of the node's attributes */
        readonly attributes: IXMLDOMNamedNodeMap;

        /** the base name of the node (nodename with the prefix stripped off) */
        readonly baseName: string;

        /** the collection of the node's children */
        readonly childNodes: IXMLDOMNodeList;
        cloneNode(deep: boolean): IXMLDOMNode;

        /** value of the node */
        data: string;

        /** the data type of the node */
        dataType: any;

        /** pointer to the definition of the node in the DTD or schema */
        readonly definition: IXMLDOMNode;

        /** delete string within the value */
        deleteData(offset: number, count: number): void;

        /** first child of the node */
        readonly firstChild: IXMLDOMNode;
        hasChildNodes(): boolean;

        /** insert a child node */
        insertBefore(newChild: IXMLDOMNode, refChild: any): IXMLDOMNode;

        /** insert string into value */
        insertData(offset: number, data: string): void;

        /** last child of the node */
        readonly lastChild: IXMLDOMNode;

        /** number of characters in value */
        readonly length: number;

        /** the URI for the namespace applying to the node */
        readonly namespaceURI: string;

        /** right sibling of the node */
        readonly nextSibling: IXMLDOMNode;

        /** name of the node */
        readonly nodeName: string;

        /** the node's type */
        readonly nodeType: DOMNodeType;

        /** get the strongly typed value of the node */
        nodeTypedValue: any;

        /** the type of node in string form */
        readonly nodeTypeString: string;

        /** value stored in the node */
        nodeValue: any;

        /** document that contains the node */
        readonly ownerDocument: IXMLDOMDocument;

        /** parent of the node */
        readonly parentNode: IXMLDOMNode;

        /** has sub-tree been completely parsed */
        readonly parsed: boolean;

        /** the prefix for the namespace applying to the node */
        readonly prefix: string;

        /** left sibling of the node */
        readonly previousSibling: IXMLDOMNode;

        /** remove a child node */
        removeChild(childNode: IXMLDOMNode): IXMLDOMNode;

        /** replace a child node */
        replaceChild(newChild: IXMLDOMNode, oldChild: IXMLDOMNode): IXMLDOMNode;

        /** replace string within the value */
        replaceData(offset: number, count: number, data: string): void;

        /** execute query on the subtree */
        selectNodes(queryString: string): IXMLDOMNodeList;

        /** execute query on the subtree */
        selectSingleNode(queryString: string): IXMLDOMNode;

        /** indicates whether node is a default value */
        readonly specified: boolean;

        /** split the text node into two text nodes at the position specified */
        splitText(offset: number): IXMLDOMText;

        /** retrieve substring of value */
        substringData(offset: number, count: number): string;

        /** text content of the node and subtree */
        text: string;

        /** apply the stylesheet to the subtree */
        transformNode(stylesheet: IXMLDOMNode): string;

        /** apply the stylesheet to the subtree, returning the result through a document or a stream */
        transformNodeToObject(stylesheet: IXMLDOMNode, outputObject: any): void;

        /** return the XML source for the node and each of its descendants */
        readonly xml: string;
    }

    /** IXMLHTTPRequest2Callback Interface */
    class IXMLHTTPRequest2Callback {
        private 'MSXML2.IXMLHTTPRequest2Callback_typekey': IXMLHTTPRequest2Callback;
        private constructor();
        ondataavailable(pXHR: FreeThreadedXMLHTTP60, pResponseStream: ISequentialStream): void;
        OnError(pXHR: FreeThreadedXMLHTTP60, hrError: undefined): void;
        OnHeadersAvailable(pXHR: FreeThreadedXMLHTTP60, dwStatus: number, pwszStatus: string): void;
        OnRedirect(pXHR: FreeThreadedXMLHTTP60, pwszRedirectUrl: string): void;
        OnResponseReceived(pXHR: FreeThreadedXMLHTTP60, pResponseStream: ISequentialStream): void;
    }

    /** IXSLProcessor Interface */
    class IXSLProcessor {
        private 'MSXML2.IXSLProcessor_typekey': IXSLProcessor;
        private constructor();

        /** pass object to stylesheet */
        addObject(obj: any, namespaceURI: string): void;

        /**
         * set <xsl:param> values
         * @param string [namespaceURI='']
         */
        addParameter(baseName: string, parameter: any, namespaceURI?: string): void;

        /** XML input tree to transform */
        input: any;

        /** custom stream object for transform output */
        output: any;

        /** template object used to create this processor object */
        readonly ownerTemplate: XSLTemplate60;

        /** current state of the processor */
        readonly readyState: number;

        /** reset state of processor and abort current transform */
        reset(): void;

        /**
         * set XSL mode and it's namespace
         * @param string [namespaceURI='']
         */
        setStartMode(mode: string, namespaceURI?: string): void;

        /** starting XSL mode */
        readonly startMode: string;

        /** namespace of starting XSL mode */
        readonly startModeURI: string;

        /** current stylesheet being used */
        readonly stylesheet: IXMLDOMNode;

        /** start/resume the XSL transformation process */
        transform(): boolean;
    }

    /** Microsoft HTML Writer 6.0 */
    class MXHTMLWriter60 {
        private 'MSXML2.MXHTMLWriter60_typekey': MXHTMLWriter60;
        private constructor();

        /** Determine whether or not to write the byte order mark */
        byteOrderMark: boolean;

        /** When enabled, the writer no longer escapes out its input when writing it out. */
        disableOutputEscaping: boolean;

        /** Set or get the output encoding. */
        encoding: string;

        /** Flushes all writer buffers forcing the writer to write to the underlying output object */
        flush(): void;

        /** Enable or disable auto indent mode. */
        indent: boolean;

        /** Determine whether or not to omit the XML declaration. */
        omitXMLDeclaration: boolean;

        /** Set or get the output. */
        output: any;

        /** Set or get the standalone document declaration. */
        standalone: boolean;

        /** Set or get the xml version info. */
        version: string;
    }

    /** MX Namespace Manager 6.0 */
    class MXNamespaceManager60 {
        private 'MSXML2.MXNamespaceManager60_typekey': MXNamespaceManager60;
        private constructor();
        allowOverride: boolean;
        declarePrefix(prefix: string, namespaceURI: string): void;
        getDeclaredPrefixes(): IMXNamespacePrefixes;
        getPrefixes(namespaceURI: string): IMXNamespacePrefixes;
        getURI(prefix: string): any;
        getURIFromNode(strPrefix: string, contextNode: IXMLDOMNode): any;
        popContext(): void;
        pushContext(): void;

        /** @param boolean [fDeep=true] */
        pushNodeContext(contextNode: IXMLDOMNode, fDeep?: boolean): void;
        reset(): void;
    }

    /** Microsoft XML Writer 6.0 */
    class MXXMLWriter60 {
        private 'MSXML2.MXXMLWriter60_typekey': MXXMLWriter60;
        private constructor();

        /** Determine whether or not to write the byte order mark */
        byteOrderMark: boolean;

        /** When enabled, the writer no longer escapes out its input when writing it out. */
        disableOutputEscaping: boolean;

        /** Set or get the output encoding. */
        encoding: string;

        /** Flushes all writer buffers forcing the writer to write to the underlying output object */
        flush(): void;

        /** Enable or disable auto indent mode. */
        indent: boolean;

        /** Determine whether or not to omit the XML declaration. */
        omitXMLDeclaration: boolean;

        /** Set or get the output. */
        output: any;

        /** Set or get the standalone document declaration. */
        standalone: boolean;

        /** Set or get the xml version info. */
        version: string;
    }

    /** SAX Attributes 6.0 */
    class SAXAttributes60 {
        private 'MSXML2.SAXAttributes60_typekey': SAXAttributes60;
        private constructor();

        /** Add an attribute to the end of the list. */
        addAttribute(strURI: string, strLocalName: string, strQName: string, strType: string, strValue: string): void;

        /** Add an attribute, whose value is equal to the indexed attribute in the input attributes object, to the end of the list. */
        addAttributeFromIndex(varAtts: any, nIndex: number): void;

        /** Clear the attribute list for reuse. */
        clear(): void;

        /** Remove an attribute from the list. */
        removeAttribute(nIndex: number): void;

        /** Set an attribute in the list. */
        setAttribute(nIndex: number, strURI: string, strLocalName: string, strQName: string, strType: string, strValue: string): void;

        /** Copy an entire Attributes object. */
        setAttributes(varAtts: any): void;

        /** Set the local name of a specific attribute. */
        setLocalName(nIndex: number, strLocalName: string): void;

        /** Set the qualified name of a specific attribute. */
        setQName(nIndex: number, strQName: string): void;

        /** Set the type of a specific attribute. */
        setType(nIndex: number, strType: string): void;

        /** Set the Namespace URI of a specific attribute. */
        setURI(nIndex: number, strURI: string): void;

        /** Set the value of a specific attribute. */
        setValue(nIndex: number, strValue: string): void;
    }

    /** SAX XML Reader 6.0 */
    class SAXXMLReader60 {
        private 'MSXML2.SAXXMLReader60_typekey': SAXXMLReader60;
        private constructor();

        /** Set or get the base URL for the document. */
        baseURL: string;

        /** Allow an application to register a content event handler or look up the current content event handler. */
        contentHandler: IVBSAXContentHandler;

        /** Allow an application to register a DTD event handler or look up the current DTD event handler. */
        dtdHandler: IVBSAXDTDHandler;

        /** Allow an application to register an entity resolver or look up the current entity resolver. */
        entityResolver: IVBSAXEntityResolver;

        /** Allow an application to register an error event handler or look up the current error event handler. */
        errorHandler: IVBSAXErrorHandler;

        /** Look up the value of a feature. */
        getFeature(strName: string): boolean;

        /** Look up the value of a property. */
        getProperty(strName: string): any;

        /** Parse an XML document. */
        parse(varInput?: any): void;

        /** Parse an XML document from a system identifier (URI). */
        parseURL(strURL: string): void;

        /** Set the state of a feature. */
        putFeature(strName: string, fValue: boolean): void;

        /** Set the value of a property. */
        putProperty(strName: string, varValue: any): void;

        /** Set or get the secure base URL for the document. */
        secureBaseURL: string;
    }

    /** Server XML HTTP Request 6.0  */
    class ServerXMLHTTP60 {
        private 'MSXML2.ServerXMLHTTP60_typekey': ServerXMLHTTP60;
        private constructor();

        /** Abort HTTP request */
        abort(): void;

        /** Get all HTTP response headers */
        getAllResponseHeaders(): string;

        /** Get an option value */
        getOption(option: SERVERXMLHTTP_OPTION): any;

        /** Get HTTP response header */
        getResponseHeader(bstrHeader: string): string;

        /** Register a complete event handler */
        readonly onreadystatechange: any;

        /** Open HTTP connection */
        open(bstrMethod: string, bstrUrl: string, varAsync?: any, bstrUser?: any, bstrPassword?: any): void;

        /** Get ready state */
        readonly readyState: number;

        /** Get response body */
        readonly responseBody: any;

        /** Get response body */
        readonly responseStream: any;

        /** Get response body */
        readonly responseText: string;

        /** Get response body */
        readonly responseXML: any;

        /** Send HTTP request */
        send(varBody?: any): void;

        /** Set an option value */
        setOption(option: SERVERXMLHTTP_OPTION, value: any): void;

        /** Specify proxy configuration */
        setProxy(proxySetting: SXH_PROXY_SETTING, varProxyServer?: any, varBypassList?: any): void;

        /** Specify proxy authentication credentials */
        setProxyCredentials(bstrUserName: string, bstrPassword: string): void;

        /** Add HTTP request header */
        setRequestHeader(bstrHeader: string, bstrValue: string): void;

        /** Specify timeout settings (in milliseconds) */
        setTimeouts(resolveTimeout: number, connectTimeout: number, sendTimeout: number, receiveTimeout: number): void;

        /** Get HTTP status code */
        readonly status: number;

        /** Get HTTP status text */
        readonly statusText: string;

        /** Wait for asynchronous send to complete, with optional timeout (in seconds) */
        waitForResponse(timeoutInSeconds?: any): boolean;
    }

    interface tagXHR_COOKIE {
        readonly dwFlags: number;
        readonly ftExpires: _FILETIME;
        readonly pwszName: string;
        readonly pwszP3PPolicy: string;
        readonly pwszUrl: string;
        readonly pwszValue: string;
    }

    /** XML HTTP Request class 6.0 */
    class XMLHTTP60 {
        private 'MSXML2.XMLHTTP60_typekey': XMLHTTP60;
        private constructor();

        /** Abort HTTP request */
        abort(): void;

        /** Get all HTTP response headers */
        getAllResponseHeaders(): string;

        /** Get HTTP response header */
        getResponseHeader(bstrHeader: string): string;

        /** Register a complete event handler */
        readonly onreadystatechange: any;

        /** Open HTTP connection */
        open(bstrMethod: string, bstrUrl: string, varAsync?: any, bstrUser?: any, bstrPassword?: any): void;

        /** Get ready state */
        readonly readyState: number;

        /** Get response body */
        readonly responseBody: any;

        /** Get response body */
        readonly responseStream: any;

        /** Get response body */
        readonly responseText: string;

        /** Get response body */
        readonly responseXML: any;

        /** Send HTTP request */
        send(varBody?: any): void;

        /** Add HTTP request header */
        setRequestHeader(bstrHeader: string, bstrValue: string): void;

        /** Get HTTP status code */
        readonly status: number;

        /** Get HTTP status text */
        readonly statusText: string;
    }

    /** XML Schema Cache 6.0 */
    class XMLSchemaCache60 {
        private 'MSXML2.XMLSchemaCache60_typekey': XMLSchemaCache60;
        private constructor();

        /** add a new schema */
        add(namespaceURI: string, var_1: any): void;

        /** copy & merge other collection into this one */
        addCollection(otherCollection: IXMLDOMSchemaCollection): void;

        /** lookup schema by namespaceURI */
        get(namespaceURI: string): IXMLDOMNode;
        getDeclaration(node: IXMLDOMNode): ISchemaItem;
        getSchema(namespaceURI: string): ISchema;

        /** number of schemas in collection */
        readonly length: number;

        /** Get namespaceURI for schema by index */
        namespaceURI(index: number): string;

        /** remove schema by namespaceURI */
        remove(namespaceURI: string): void;
        validate(): void;
        validateOnLoad: boolean;
    }

    /** XSL Stylesheet Cache 6.0 */
    class XSLTemplate60 {
        private 'MSXML2.XSLTemplate60_typekey': XSLTemplate60;
        private constructor();

        /** create a new processor object */
        createProcessor(): IXSLProcessor;

        /** stylesheet to use with processors */
        stylesheet: IXMLDOMNode;
    }
}

interface ActiveXObject {
    on(obj: MSXML2.DOMDocument60, event: 'ondataavailable' | 'onreadystatechange', handler: (this: MSXML2.DOMDocument60, parameter: {}) => void): void;
    on(obj: MSXML2.FreeThreadedDOMDocument60, event: 'ondataavailable' | 'onreadystatechange', handler: (this: MSXML2.FreeThreadedDOMDocument60, parameter: {}) => void): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'Msxml2.DOMDocument': MSXML2.DOMDocument60;
    'Msxml2.DOMDocument.6.0': MSXML2.DOMDocument60;
    'Msxml2.FreeThreadedDOMDocument': MSXML2.FreeThreadedDOMDocument60;
    'Msxml2.MXHTMLWriter': MSXML2.MXHTMLWriter60;
    'Msxml2.MXNamespaceManager': MSXML2.MXNamespaceManager60;
    'Msxml2.MXXMLWriter': MSXML2.MXXMLWriter60;
    'Msxml2.SAXAttributes': MSXML2.SAXAttributes60;
    'Msxml2.SAXXMLReader': MSXML2.SAXXMLReader60;
    'Msxml2.ServerXMLHTTP': MSXML2.ServerXMLHTTP60;
    'Msxml2.XMLHTTP': MSXML2.XMLHTTP60;
    'Msxml2.XMLHTTP.6.0': MSXML2.XMLHTTP60;
    'Msxml2.XMLSchemaCache': MSXML2.XMLSchemaCache60;
    'Msxml2.XMLSchemaCache.6.0': MSXML2.XMLSchemaCache60;
    'Msxml2.XSLTemplate': MSXML2.XSLTemplate60;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
