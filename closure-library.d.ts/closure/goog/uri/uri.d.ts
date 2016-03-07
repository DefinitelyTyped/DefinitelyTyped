declare module goog {
    function require(name: 'goog.Uri'): typeof goog.Uri;
    function require(name: 'goog.Uri.QueryData'): typeof goog.Uri.QueryData;
}

declare module goog {

    /**
     * This class contains setters and getters for the parts of the URI.
     * The <code>getXyz</code>/<code>setXyz</code> methods return the decoded part
     * -- so<code>goog.Uri.parse('/foo%20bar').getPath()</code> will return the
     * decoded path, <code>/foo bar</code>.
     *
     * Reserved characters (see RFC 3986 section 2.2) can be present in
     * their percent-encoded form in scheme, domain, and path URI components and
     * will not be auto-decoded. For example:
     * <code>goog.Uri.parse('rel%61tive/path%2fto/resource').getPath()</code> will
     * return <code>relative/path%2fto/resource</code>.
     *
     * The constructor accepts an optional unparsed, raw URI string.  The parser
     * is relaxed, so special characters that aren't escaped but don't cause
     * ambiguities will not cause parse failures.
     *
     * All setters return <code>this</code> and so may be chained, a la
     * <code>goog.Uri.parse('/foo').setFragment('part').toString()</code>.
     *
     * @param {*=} opt_uri Optional string URI to parse
     *        (use goog.Uri.create() to create a URI from parts), or if
     *        a goog.Uri is passed, a clone is created.
     * @param {boolean=} opt_ignoreCase If true, #getParameterValue will ignore
     * the case of the parameter name.
     *
     * @constructor
     * @struct
     */
    class Uri {
        constructor(opt_uri?: any, opt_ignoreCase?: boolean);
        
        /**
         * If true, we preserve the type of query parameters set programmatically.
         *
         * This means that if you set a parameter to a boolean, and then call
         * getParameterValue, you will get a boolean back.
         *
         * If false, we will coerce parameters to strings, just as they would
         * appear in real URIs.
         *
         * TODO(nicksantos): Remove this once people have time to fix all tests.
         *
         * @type {boolean}
         */
        static preserveParameterTypesCompatibilityFlag: boolean;
        
        /**
         * Parameter name added to stop caching.
         * @type {string}
         */
        static RANDOM_PARAM: string;
        
        /**
         * @return {string} The string form of the url.
         * @override
         */
        toString(): string;
        
        /**
         * Resolves the given relative URI (a goog.Uri object), using the URI
         * represented by this instance as the base URI.
         *
         * There are several kinds of relative URIs:<br>
         * 1. foo - replaces the last part of the path, the whole query and fragment<br>
         * 2. /foo - replaces the the path, the query and fragment<br>
         * 3. //foo - replaces everything from the domain on.  foo is a domain name<br>
         * 4. ?foo - replace the query and fragment<br>
         * 5. #foo - replace the fragment only
         *
         * Additionally, if relative URI has a non-empty path, all ".." and "."
         * segments will be resolved, as described in RFC 3986.
         *
         * @param {!goog.Uri} relativeUri The relative URI to resolve.
         * @return {!goog.Uri} The resolved URI.
         */
        resolve(relativeUri: goog.Uri): goog.Uri;
        
        /**
         * Clones the URI instance.
         * @return {!goog.Uri} New instance of the URI object.
         */
        clone(): goog.Uri;
        
        /**
         * @return {string} The encoded scheme/protocol for the URI.
         */
        getScheme(): string;
        
        /**
         * Sets the scheme/protocol.
         * @param {string} newScheme New scheme value.
         * @param {boolean=} opt_decode Optional param for whether to decode new value.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setScheme(newScheme: string, opt_decode?: boolean): goog.Uri;
        
        /**
         * @return {boolean} Whether the scheme has been set.
         */
        hasScheme(): boolean;
        
        /**
         * @return {string} The decoded user info.
         */
        getUserInfo(): string;
        
        /**
         * Sets the userInfo.
         * @param {string} newUserInfo New userInfo value.
         * @param {boolean=} opt_decode Optional param for whether to decode new value.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setUserInfo(newUserInfo: string, opt_decode?: boolean): goog.Uri;
        
        /**
         * @return {boolean} Whether the user info has been set.
         */
        hasUserInfo(): boolean;
        
        /**
         * @return {string} The decoded domain.
         */
        getDomain(): string;
        
        /**
         * Sets the domain.
         * @param {string} newDomain New domain value.
         * @param {boolean=} opt_decode Optional param for whether to decode new value.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setDomain(newDomain: string, opt_decode?: boolean): goog.Uri;
        
        /**
         * @return {boolean} Whether the domain has been set.
         */
        hasDomain(): boolean;
        
        /**
         * @return {?number} The port number.
         */
        getPort(): number;
        
        /**
         * Sets the port number.
         * @param {*} newPort Port number. Will be explicitly casted to a number.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setPort(newPort: any): goog.Uri;
        
        /**
         * @return {boolean} Whether the port has been set.
         */
        hasPort(): boolean;
        
        /**
          * @return {string} The decoded path.
         */
        getPath(): string;
        
        /**
         * Sets the path.
         * @param {string} newPath New path value.
         * @param {boolean=} opt_decode Optional param for whether to decode new value.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setPath(newPath: string, opt_decode?: boolean): goog.Uri;
        
        /**
         * @return {boolean} Whether the path has been set.
         */
        hasPath(): boolean;
        
        /**
         * @return {boolean} Whether the query string has been set.
         */
        hasQuery(): boolean;
        
        /**
         * Sets the query data.
         * @param {goog.Uri.QueryData|string|undefined} queryData QueryData object.
         * @param {boolean=} opt_decode Optional param for whether to decode new value.
         *     Applies only if queryData is a string.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setQueryData(queryData: goog.Uri.QueryData|string|void, opt_decode?: boolean): goog.Uri;
        
        /**
         * Sets the URI query.
         * @param {string} newQuery New query value.
         * @param {boolean=} opt_decode Optional param for whether to decode new value.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setQuery(newQuery: string, opt_decode?: boolean): goog.Uri;
        
        /**
         * @return {string} The encoded URI query, not including the ?.
         */
        getEncodedQuery(): string;
        
        /**
         * @return {string} The decoded URI query, not including the ?.
         */
        getDecodedQuery(): string;
        
        /**
         * Returns the query data.
         * @return {!goog.Uri.QueryData} QueryData object.
         */
        getQueryData(): goog.Uri.QueryData;
        
        /**
         * @return {string} The encoded URI query, not including the ?.
         *
         * Warning: This method, unlike other getter methods, returns encoded
         * value, instead of decoded one.
         */
        getQuery(): string;
        
        /**
         * Sets the value of the named query parameters, clearing previous values for
         * that key.
         *
         * @param {string} key The parameter to set.
         * @param {*} value The new value.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setParameterValue(key: string, value: any): goog.Uri;
        
        /**
         * Sets the values of the named query parameters, clearing previous values for
         * that key.  Not new values will currently be moved to the end of the query
         * string.
         *
         * So, <code>goog.Uri.parse('foo?a=b&c=d&e=f').setParameterValues('c', ['new'])
         * </code> yields <tt>foo?a=b&e=f&c=new</tt>.</p>
         *
         * @param {string} key The parameter to set.
         * @param {*} values The new values. If values is a single
         *     string then it will be treated as the sole value.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setParameterValues(key: string, values: any): goog.Uri;
        
        /**
         * Returns the value<b>s</b> for a given cgi parameter as a list of decoded
         * query parameter values.
         * @param {string} name The parameter to get values for.
         * @return {!Array<?>} The values for a given cgi parameter as a list of
         *     decoded query parameter values.
         */
        getParameterValues(name: string): Array<any>;
        
        /**
         * Returns the first value for a given cgi parameter or undefined if the given
         * parameter name does not appear in the query string.
         * @param {string} paramName Unescaped parameter name.
         * @return {string|undefined} The first value for a given cgi parameter or
         *     undefined if the given parameter name does not appear in the query
         *     string.
         */
        getParameterValue(paramName: string): string|void;
        
        /**
         * @return {string} The URI fragment, not including the #.
         */
        getFragment(): string;
        
        /**
         * Sets the URI fragment.
         * @param {string} newFragment New fragment value.
         * @param {boolean=} opt_decode Optional param for whether to decode new value.
         * @return {!goog.Uri} Reference to this URI object.
         */
        setFragment(newFragment: string, opt_decode?: boolean): goog.Uri;
        
        /**
         * @return {boolean} Whether the URI has a fragment set.
         */
        hasFragment(): boolean;
        
        /**
         * Returns true if this has the same domain as that of uri2.
         * @param {!goog.Uri} uri2 The URI object to compare to.
         * @return {boolean} true if same domain; false otherwise.
         */
        hasSameDomainAs(uri2: goog.Uri): boolean;
        
        /**
         * Adds a random parameter to the Uri.
         * @return {!goog.Uri} Reference to this Uri object.
         */
        makeUnique(): goog.Uri;
        
        /**
         * Removes the named query parameter.
         *
         * @param {string} key The parameter to remove.
         * @return {!goog.Uri} Reference to this URI object.
         */
        removeParameter(key: string): goog.Uri;
        
        /**
         * Sets whether Uri is read only. If this goog.Uri is read-only,
         * enforceReadOnly_ will be called at the start of any function that may modify
         * this Uri.
         * @param {boolean} isReadOnly whether this goog.Uri should be read only.
         * @return {!goog.Uri} Reference to this Uri object.
         */
        setReadOnly(isReadOnly: boolean): goog.Uri;
        
        /**
         * @return {boolean} Whether the URI is read only.
         */
        isReadOnly(): boolean;
        
        /**
         * Checks if this Uri has been marked as read only, and if so, throws an error.
         * This should be called whenever any modifying function is called.
         */
        enforceReadOnly(): void;
        
        /**
         * Sets whether to ignore case.
         * NOTE: If there are already key/value pairs in the QueryData, and
         * ignoreCase_ is set to false, the keys will all be lower-cased.
         * @param {boolean} ignoreCase whether this goog.Uri should ignore case.
         * @return {!goog.Uri} Reference to this Uri object.
         */
        setIgnoreCase(ignoreCase: boolean): goog.Uri;
        
        /**
         * @return {boolean} Whether to ignore case.
         */
        getIgnoreCase(): boolean;
        
        /**
         * Creates a uri from the string form.  Basically an alias of new goog.Uri().
         * If a Uri object is passed to parse then it will return a clone of the object.
         *
         * @param {*} uri Raw URI string or instance of Uri
         *     object.
         * @param {boolean=} opt_ignoreCase Whether to ignore the case of parameter
         * names in #getParameterValue.
         * @return {!goog.Uri} The new URI object.
         */
        static parse(uri: any, opt_ignoreCase?: boolean): goog.Uri;
        
        /**
         * Creates a new goog.Uri object from unencoded parts.
         *
         * @param {?string=} opt_scheme Scheme/protocol or full URI to parse.
         * @param {?string=} opt_userInfo username:password.
         * @param {?string=} opt_domain www.google.com.
         * @param {?number=} opt_port 9830.
         * @param {?string=} opt_path /some/path/to/a/file.html.
         * @param {string|goog.Uri.QueryData=} opt_query a=1&b=2.
         * @param {?string=} opt_fragment The fragment without the #.
         * @param {boolean=} opt_ignoreCase Whether to ignore parameter name case in
         *     #getParameterValue.
         *
         * @return {!goog.Uri} The new URI object.
         */
        static create(opt_scheme?: string, opt_userInfo?: string, opt_domain?: string, opt_port?: number, opt_path?: string, opt_query?: string|goog.Uri.QueryData, opt_fragment?: string, opt_ignoreCase?: boolean): goog.Uri;
        
        /**
         * Resolves a relative Uri against a base Uri, accepting both strings and
         * Uri objects.
         *
         * @param {*} base Base Uri.
         * @param {*} rel Relative Uri.
         * @return {!goog.Uri} Resolved uri.
         */
        static resolve(base: any, rel: any): goog.Uri;
        
        /**
         * Removes dot segments in given path component, as described in
         * RFC 3986, section 5.2.4.
         *
         * @param {string} path A non-empty path component.
         * @return {string} Path component with removed dot segments.
         */
        static removeDotSegments(path: string): string;
        
        /**
         * Checks whether two URIs have the same domain.
         * @param {string} uri1String First URI string.
         * @param {string} uri2String Second URI string.
         * @return {boolean} true if the two URIs have the same domain; false otherwise.
         */
        static haveSameDomain(uri1String: string, uri2String: string): boolean;
    }
}

declare module goog.Uri {

    /**
     * Class used to represent URI query parameters.  It is essentially a hash of
     * name-value pairs, though a name can be present more than once.
     *
     * Has the same interface as the collections in goog.structs.
     *
     * @param {?string=} opt_query Optional encoded query string to parse into
     *     the object.
     * @param {goog.Uri=} opt_uri Optional uri object that should have its
     *     cache invalidated when this object updates. Deprecated -- this
     *     is no longer required.
     * @param {boolean=} opt_ignoreCase If true, ignore the case of the parameter
     *     name in #get.
     * @constructor
     * @struct
     * @final
     */
    class QueryData {
        constructor(opt_query?: string, opt_uri?: goog.Uri, opt_ignoreCase?: boolean);
        
        /**
         * Creates a new query data instance from a map of names and values.
         *
         * @param {!goog.structs.Map<string, ?>|!Object} map Map of string parameter
         *     names to parameter value. If parameter value is an array, it is
         *     treated as if the key maps to each individual value in the
         *     array.
         * @param {goog.Uri=} opt_uri URI object that should have its cache
         *     invalidated when this object updates.
         * @param {boolean=} opt_ignoreCase If true, ignore the case of the parameter
         *     name in #get.
         * @return {!goog.Uri.QueryData} The populated query data instance.
         */
        static createFromMap(map: goog.structs.Map<string, any>|Object, opt_uri?: goog.Uri, opt_ignoreCase?: boolean): goog.Uri.QueryData;
        
        /**
         * Creates a new query data instance from parallel arrays of parameter names
         * and values. Allows for duplicate parameter names. Throws an error if the
         * lengths of the arrays differ.
         *
         * @param {!Array<string>} keys Parameter names.
         * @param {!Array<?>} values Parameter values.
         * @param {goog.Uri=} opt_uri URI object that should have its cache
         *     invalidated when this object updates.
         * @param {boolean=} opt_ignoreCase If true, ignore the case of the parameter
         *     name in #get.
         * @return {!goog.Uri.QueryData} The populated query data instance.
         */
        static createFromKeysValues(keys: Array<string>, values: Array<any>, opt_uri?: goog.Uri, opt_ignoreCase?: boolean): goog.Uri.QueryData;
        
        /**
         * @return {?number} The number of parameters.
         */
        getCount(): number;
        
        /**
         * Adds a key value pair.
         * @param {string} key Name.
         * @param {*} value Value.
         * @return {!goog.Uri.QueryData} Instance of this object.
         */
        add(key: string, value: any): goog.Uri.QueryData;
        
        /**
         * Removes all the params with the given key.
         * @param {string} key Name.
         * @return {boolean} Whether any parameter was removed.
         */
        remove(key: string): boolean;
        
        /**
         * Clears the parameters.
         */
        clear(): void;
        
        /**
         * @return {boolean} Whether we have any parameters.
         */
        isEmpty(): boolean;
        
        /**
         * Whether there is a parameter with the given name
         * @param {string} key The parameter name to check for.
         * @return {boolean} Whether there is a parameter with the given name.
         */
        containsKey(key: string): boolean;
        
        /**
         * Whether there is a parameter with the given value.
         * @param {*} value The value to check for.
         * @return {boolean} Whether there is a parameter with the given value.
         */
        containsValue(value: any): boolean;
        
        /**
         * Returns all the keys of the parameters. If a key is used multiple times
         * it will be included multiple times in the returned array
         * @return {!Array<string>} All the keys of the parameters.
         */
        getKeys(): Array<string>;
        
        /**
         * Returns all the values of the parameters with the given name. If the query
         * data has no such key this will return an empty array. If no key is given
         * all values wil be returned.
         * @param {string=} opt_key The name of the parameter to get the values for.
         * @return {!Array<?>} All the values of the parameters with the given name.
         */
        getValues(opt_key?: string): Array<any>;
        
        /**
         * Sets a key value pair and removes all other keys with the same value.
         *
         * @param {string} key Name.
         * @param {*} value Value.
         * @return {!goog.Uri.QueryData} Instance of this object.
         */
        set(key: string, value: any): goog.Uri.QueryData;
        
        /**
         * Returns the first value associated with the key. If the query data has no
         * such key this will return undefined or the optional default.
         * @param {string} key The name of the parameter to get the value for.
         * @param {*=} opt_default The default value to return if the query data
         *     has no such key.
         * @return {*} The first string value associated with the key, or opt_default
         *     if there's no value.
         */
        get(key: string, opt_default?: any): any;
        
        /**
         * Sets the values for a key. If the key already exists, this will
         * override all of the existing values that correspond to the key.
         * @param {string} key The key to set values for.
         * @param {!Array<?>} values The values to set.
         */
        setValues(key: string, values: Array<any>): void;
        
        /**
         * @return {string} Encoded query string.
         * @override
         */
        toString(): string;
        
        /**
         * @return {string} Decoded query string.
         */
        toDecodedString(): string;
        
        /**
         * Removes all keys that are not in the provided list. (Modifies this object.)
         * @param {Array<string>} keys The desired keys.
         * @return {!goog.Uri.QueryData} a reference to this object.
         */
        filterKeys(keys: Array<string>): goog.Uri.QueryData;
        
        /**
         * Clone the query data instance.
         * @return {!goog.Uri.QueryData} New instance of the QueryData object.
         */
        clone(): goog.Uri.QueryData;
        
        /**
         * Ignore case in parameter names.
         * NOTE: If there are already key/value pairs in the QueryData, and
         * ignoreCase_ is set to false, the keys will all be lower-cased.
         * @param {boolean} ignoreCase whether this goog.Uri should ignore case.
         */
        setIgnoreCase(ignoreCase: boolean): void;
        
        /**
         * Extends a query data object with another query data or map like object. This
         * operates 'in-place', it does not create a new QueryData object.
         *
         * @param {...(goog.Uri.QueryData|goog.structs.Map<?, ?>|Object)} var_args
         *     The object from which key value pairs will be copied.
         */
        extend(...var_args: (goog.Uri.QueryData|goog.structs.Map<any, any>|Object)[]): void;
    }
}
