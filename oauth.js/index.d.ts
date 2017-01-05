// Type definitions for JavaScript software for implementing an OAuth consumer
// Project: https://code.google.com/p/oauth/
// Definitions by: NOBUOKA Yu <https://github.com/nobuoka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace OAuth {

    /** An Array of name-value pairs [[name, value], [name2, value2]]. */
    type ParameterList = [string, string][];

    /** A map {name: value, name2: value2}. */
    type ParameterMap = { [name: string]: string; };

    type ParameterListOrMap = ParameterList|ParameterMap;

    /**
     * An OAuth message is represented as an object like this:
     *   { method: "GET", action: "http://server.com/path", parameters: ... }
     */
    interface Message {
        action: string;
        method: string;
        parameters: ParameterListOrMap;
    }

    /**
     * SignatureMethod expects an accessor object to be like this:
     *   {tokenSecret: "lakjsdflkj...", consumerSecret: "QOUEWRI..", accessorSecret: "xcmvzc..."}
     * The accessorSecret property is optional.
     */
    interface Accessor {
        consumerKey: string;
        consumerSecret: string;
        accessorSecret?: string;
        token: string;
        tokenSecret: string;
    }

    /**
     * Encode text value according to OAuth Percent Encoding.
     * @see {@link https://tools.ietf.org/html/rfc5849#section-3.6}
     * @param s Target text value.
     */
    function percentEncode(s: string): string;

    /**
     * Encode text values according to OAuth Percent Encoding.
     * Encoded values are joined with an ampersand character (&) in between them.
     * @see {@link https://tools.ietf.org/html/rfc5849#section-3.6}
     * @param s Target text values.
     */
    function percentEncode(s: string[]): string;

    /**
     * Decode percent-encoded value.
     * @see {@link https://tools.ietf.org/html/rfc5849#section-3.6}
     * @param s Target percent-encoded value.
     */
    function decodePercent(s: string): string;

    /**
     * Convert the given parameters to an Array of name-value pairs.
     */
    function getParameterList(parameters: ParameterListOrMap): ParameterList;

    /**
     * Convert the given parameters to an Array of name-value pairs.
     */
    function getParameterList(parameters: string): ParameterList;

    /**
     * Convert the given parameters to a map from name to value.
     */
    function getParameterMap(parameters: ParameterListOrMap): ParameterMap;

    /**
     * Convert the given parameters to a map from name to value.
     */
    function getParameterMap(parameters: string): ParameterMap;

    function getParameter(parameters: ParameterListOrMap, name: string): string;
    function getParameter(parameters: string, name: string): string;

    function formEncode(parameters: ParameterListOrMap): string;

    function decodeForm(form: string): ParameterList;

    function setParameter(message: Message, name: string, value: string): void;

    function setParameters(message: Message, parameters: ParameterListOrMap): void;
    function setParameters(message: Message, parameters: string): void;

    /**
     * Fill in parameters to help construct a request message.
     * This function doesn't fill in every parameter.
     * @param message Target request message.
     * @param accessor Accessor object. The accessorSecret property is optional.
     */
    function completeRequest(message: Message, accessor: Accessor): void;

    function setTimestampAndNonce(message: Message): void;

    /**
     * Add specified parameters into URL as query parameters.
     * @param url URL that parameters added into.
     * @param parameters Parameters added into URL.
     * @return New URL string.
     */
    function addToURL(url: string, parameters: ParameterListOrMap): string;

    /** Construct the value of the Authorization header for an HTTP request. */
    function getAuthorizationHeader(realm: string, parameters: ParameterListOrMap): string;
    function getAuthorizationHeader(realm: string, parameters: string): string;

    /** Correct the time using a parameter from the URL from which the last script was loaded. */
    function correctTimestampFromSrc(parameterName?: string): void;

    /** Generate timestamps starting with the given value. */
    function correctTimestamp(timestamp: number): void;

    /** The difference between the correct time and my clock. */
    var timeCorrectionMsec: number;

    function timestamp(): number;

    function nonce(length: number): string;

    interface Uri {
        source: string;
        protocol: string;
        authority: string;
        userInfo: string;
        user: string;
        password: string;
        host: string;
        port: string;
        relative: string;
        path: string;
        directory: string;
        file: string;
        query: string;
        anchor: string;
    }

    interface SignatureMethodStatic {
        sign(message: Message, accessor: Accessor): void;

        /** Instantiate a SignatureMethod for the given method name. */
        newMethod(name: string, accessor: Accessor): SignatureMethod;

        /** A map from signature method name to constructor. */
        REGISTERED: { [name: string]: { new (): SignatureMethod }; };

        /**
         * Subsequently, the given constructor will be used for the named methods.
         * The constructor will be called with no parameters.
         * The resulting object should usually implement getSignature(baseString).
         * You can easily define such a constructor by calling makeSubclass method.
         */
        registerMethodClass(names: string[], classConstructor: { new(): SignatureMethod }): void;

        /**
         * Create a subclass of OAuth.SignatureMethod, with the given getSignature function.
         * @param getSignatureFunction
         */
        makeSubclass(getSignatureFunction: (baseString: string) => string): { new(): SignatureMethod };

        /**
         * Generate a signature base string from a Message object.
         * @see {@link https://tools.ietf.org/html/rfc5849#section-3.4.1}
         * @param message Source of the signature base string.
         */
        getBaseString(message: Message): string;

        normalizeUrl(url: string): string;

        parseUri(str: string): Uri;

        normalizeParameters(parameters: ParameterListOrMap): string;
    }

    interface SignatureMethod {
        getSignature(baseString: string): string;

        key: string;

        /** Add a signature to the message. */
        sign(message: Message): string;

        /** Set the key string for signing. */
        initialize(name: string, accessor: Accessor): void;
    }

    var SignatureMethod: SignatureMethodStatic;

}

