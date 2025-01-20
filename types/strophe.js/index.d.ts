export {};

declare global {
    /** Function: $build
     *  Create a Strophe.Builder.
     *  This is an alias for 'new Strophe.Builder(name, attrs)'.
     *
     *  Parameters:
     *    @param name - The root element name.
     *    @param attrs - The attributes for the root element in object notation.
     *
     *  Returns:
     *    @returns A new Strophe.Builder object.
     */
    function $build(name: string, attrs?: Record<string, string>): globalThis.Strophe.Builder;

    /** Function: $msg
     *  Create a Strophe.Builder with a <message/> element as the root.
     *
     *  Parameters:
     *    @param attrs - The <message/> element attributes in object notation.
     *
     *  Returns:
     *    @returns A new Strophe.Builder object.
     */
    function $msg(attrs?: Record<string, string>): globalThis.Strophe.Builder;

    /** Function: $iq
     *  Create a Strophe.Builder with an <iq/> element as the root.
     *
     *  Parameters:
     *    @param attrs - The <iq/> element attributes in object notation.
     *
     *  Returns:
     *    @returns A new Strophe.Builder object.
     */
    function $iq(attrs?: Record<string, string>): globalThis.Strophe.Builder;

    /** Function: $pres
     *  Create a Strophe.Builder with a <presence/> element as the root.
     *
     *  Parameters:
     *    @param attrs - The <presence/> element attributes in object notation.
     *
     *  Returns:
     *    @returns A new Strophe.Builder object.
     */
    function $pres(attrs?: Record<string, string>): globalThis.Strophe.Builder;

    namespace Strophe {
        /** Constant: VERSION
         *  The version of the Strophe library. Unreleased builds will have
         *  a version of head-HASH where HASH is a partial revision.
         */
        const VERSION: string;

        /** Constants: XMPP Namespace Constants
         *  Common namespace constants from the XMPP RFCs and XEPs.
         *
         *  NS.HTTPBIND - HTTP BIND namespace from XEP 124.
         *  NS.BOSH - BOSH namespace from XEP 206.
         *  NS.CLIENT - Main XMPP client namespace.
         *  NS.AUTH - Legacy authentication namespace.
         *  NS.ROSTER - Roster operations namespace.
         *  NS.PROFILE - Profile namespace.
         *  NS.DISCO_INFO - Service discovery info namespace from XEP 30.
         *  NS.DISCO_ITEMS - Service discovery items namespace from XEP 30.
         *  NS.MUC - Multi-User Chat namespace from XEP 45.
         *  NS.SASL - XMPP SASL namespace from RFC 3920.
         *  NS.STREAM - XMPP Streams namespace from RFC 3920.
         *  NS.BIND - XMPP Binding namespace from RFC 3920 and RFC 6120.
         *  NS.SESSION - XMPP Session namespace from RFC 3920.
         *  NS.XHTML_IM - XHTML-IM namespace from XEP 71.
         *  NS.XHTML - XHTML body namespace from XEP 71.
         */
        enum NS {
            HTTPBIND = "http://jabber.org/protocol/httpbind",
            BOSH = "urn:xmpp:xbosh",
            CLIENT = "jabber:client",
            AUTH = "jabber:iq:auth",
            ROSTER = "jabber:iq:roster",
            PROFILE = "jabber:iq:profile",
            DISCO_INFO = "http://jabber.org/protocol/disco#info",
            DISCO_ITEMS = "http://jabber.org/protocol/disco#items",
            MUC = "http://jabber.org/protocol/muc",
            SASL = "urn:ietf:params:xml:ns:xmpp-sasl",
            STREAM = "http://etherx.jabber.org/streams",
            FRAMING = "urn:ietf:params:xml:ns:xmpp-framing",
            BIND = "urn:ietf:params:xml:ns:xmpp-bind",
            SESSION = "urn:ietf:params:xml:ns:xmpp-session",
            VERSION = "jabber:iq:version",
            STANZAS = "urn:ietf:params:xml:ns:xmpp-stanzas",
            XHTML_IM = "http://jabber.org/protocol/xhtml-im",
            XHTML = "http://www.w3.org/1999/xhtml",
        }

        /** Constants: XHTML_IM Namespace
         *  contains allowed tags, tag attributes, and css properties.
         *  Used in the createHtml function to filter incoming html into the allowed XHTML-IM subset.
         *  See http://xmpp.org/extensions/xep-0071.html#profile-summary for the list of recommended
         *  allowed tags and their attributes.
         */
        const XHTML: {
            tags: ["a", "blockquote", "br", "cite", "em", "img", "li", "ol", "p", "span", "strong", "ul", "body"];
            attributes: {
                // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
                "a": ["href"];
                // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
                "blockquote": ["style"];
                "br": [];
                // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
                "cite": ["style"];
                "em": [];
                "img": ["src", "alt", "style", "height", "width"];
                // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
                "li": ["style"];
                // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
                "ol": ["style"];
                // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
                "p": ["style"];
                // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
                "span": ["style"];
                "strong": [];
                // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
                "ul": ["style"];
                "body": [];
            };
            css: [
                "background-color",
                "color",
                "font-family",
                "font-size",
                "font-style",
                "font-weight",
                "margin-left",
                "margin-right",
                "text-align",
                "text-decoration",
            ];

            /**
             * Function: XHTML.validTag
             * Utility method to determine whether a tag is allowed in the XHTML_IM namespace.
             *
             * @param tag XHTML tag names are case sensitive and must be lower case.
             */
            validTag(tag: string): boolean;

            /**
             * Function: XHTML.validAttribute
             * Utility method to determine whether an attribute is allowed as recommended per XEP-0071 for the passed tag
             *
             * @param tag XHTML tag names are case sensitive and must be lower case
             * @param attribute XHTML attribute names are case sensitive and must be lower case.
             */
            validAttribute(tag: string, attribute: string): boolean;

            /**
             * Function: XHTML.validCSS
             * Utility method to determine whether an css style attribute is allowed as recommended per XEP-0071
             *
             * @param style XHTML css style attribute names are case sensitive and must be lower case in snake-case.
             */
            validCSS(style: string): boolean;
        };

        /** Constants: Connection Status Constants
         *  Connection status constants for use by the connection handler
         *  callback.
         *
         *  Status.ERROR - An error has occurred
         *  Status.CONNECTING - The connection is currently being made
         *  Status.CONNFAIL - The connection attempt failed
         *  Status.AUTHENTICATING - The connection is authenticating
         *  Status.AUTHFAIL - The authentication attempt failed
         *  Status.CONNECTED - The connection has succeeded
         *  Status.DISCONNECTED - The connection has been terminated
         *  Status.DISCONNECTING - The connection is currently being terminated
         *  Status.ATTACHED - The connection has been attached
         *  Status.REDIRECT - The connection has been redirected
         *  Status.CONNTIMEOUT - The connection has timed out
         */
        enum Status {
            ERROR = 0,
            CONNECTING = 1,
            CONNFAIL = 2,
            AUTHENTICATING = 3,
            AUTHFAIL = 4,
            CONNECTED = 5,
            DISCONNECTED = 6,
            DISCONNECTING = 7,
            ATTACHED = 8,
            REDIRECT = 9,
            CONNTIMEOUT = 10,
            BINDREQUIRED = 11,
            ATTACHFAIL = 12,
        }

        /** Constants: Error Condition Constants
         * Error conditions that occur commonly.
         *
         * ErrorCondition.BAD_FORMAT - Stanza has unspecified format
         * ErrorCondition.CONFLICT - Protocol conflict
         * ErrorCondition.MISSING_JID_NODE - No jid and anonymous users are now allowed on server
         * ErrorCondition.NO_AUTH_MECH - No authentication mechanism configured
         * ErrorCondition.UNKNOWN_REASON - Unknown error cause
         */
        enum ErrorCondition {
            BAD_FORMAT = "bad-format",
            CONFLICT = "conflict",
            MISSING_JID_NODE = "x-strophe-bad-non-anon-jid",
            NO_AUTH_MECH = "no-auth-mech",
            UNKNOWN_REASON = "unknown",
        }

        /** Constants: Log Level Constants
         *  Logging level indicators.
         *
         *  LogLevel.DEBUG - Debug output
         *  LogLevel.INFO - Informational output
         *  LogLevel.WARN - Warnings
         *  LogLevel.ERROR - Errors
         *  LogLevel.FATAL - Fatal errors
         */
        enum LogLevel {
            DEBUG = 0,
            INFO = 1,
            WARN = 2,
            ERROR = 3,
            FATAL = 4,
        }

        /** PrivateConstants: DOM Element Type Constants
         *  DOM element types.
         *
         *  ElementType.NORMAL - Normal element.
         *  ElementType.TEXT - Text data element.
         *  ElementType.FRAGMENT - XHTML fragment element.
         */
        enum ElementType {
            NORMAL = 1,
            TEXT = 3,
            CDATA = 4,
            FRAGMENT = 11,
        }

        /** PrivateConstants: Timeout Values
         *  Timeout values for error states.  These values are in seconds.
         *  These should not be changed unless you know exactly what you are
         *  doing.
         *
         *  TIMEOUT - Timeout multiplier. A waiting request will be considered
         *      failed after Math.floor(TIMEOUT * wait) seconds have elapsed.
         *      This defaults to 1.1, and with default wait, 66 seconds.
         *  SECONDARY_TIMEOUT - Secondary timeout multiplier. In cases where
         *      Strophe can detect early failure, it will consider the request
         *      failed if it doesn't return after
         *      Math.floor(SECONDARY_TIMEOUT * wait) seconds have elapsed.
         *      This defaults to 0.1, and with default wait, 6 seconds.
         */
        const TIMEOUT = 1.1;
        const SECONDARY_TIMEOUT = 0.1;

        /** Function: addNamespace
         *  This function is used to extend the current namespaces in
         *  Strophe.NS.  It takes a key and a value with the key being the
         *  name of the new namespace, with its actual value.
         *  For example:
         *  Strophe.addNamespace('PUBSUB', "http://jabber.org/protocol/pubsub");
         *
         *  Parameters:
         *    @param name - The name under which the namespace will be
         *      referenced under Strophe.NS
         *    @param value - The actual namespace.
         */
        function addNamespace(name: string, value: string): void;

        /** Function: forEachChild
         *  Map a function over some or all child elements of a given element.
         *
         *  This is a small convenience function for mapping a function over
         *  some or all of the children of an element.  If elemName is null, all
         *  children will be passed to the function, otherwise only children
         *  whose tag names match elemName will be passed.
         *
         *  Parameters:
         *    @param elem - The xml element to operate on in an Element object.
         *    @param elemName - The child element tag name filter.
         *    @param func - The function to apply to each child.  This
         *      function should take a single argument, a DOM element. A return value will be ignored.
         */
        function forEachChild(elem: Element, elemName: string, func: (child: Element) => unknown): void;

        /** Function: isTagEqual
         *  Compare an element's tag name with a string.
         *
         *  This function is case sensitive.
         *
         *  Parameters:
         *   @param el - A XMLElement in a DOM element.
         *   @param name - The element name.
         *
         *  Returns:
         *    @returns true if the element's tag name matches _el_, and false
         *    otherwise.
         */
        function isTagEqual(el: Element, name: string): boolean;

        /** Function: xmlGenerator
         *  Get the DOM document to generate elements.
         *
         *  Returns:
         *    @returns The currently used DOM document.
         */
        function xmlGenerator(): Document;

        /** Function: xmlElement
         *  Create an XML DOM element.
         *
         *  This function creates an XML DOM element correctly across all
         *  implementations. Note that these are not HTML DOM elements, which
         *  aren't appropriate for XMPP stanzas.
         *
         *  Parameters:
         *    @param name - The name for the element.
         *    @param attrs - An optional array or object containing
         *      key/value pairs to use as element attributes. The object should
         *      be in the format {'key': 'value'} or {key: 'value'}. The array
         *      should have the format [['key1', 'value1'], ['key2', 'value2']].
         *    @param text - The text child data for the element.
         *
         *  Returns:
         *    @returns A new XML DOM element.
         */
        function xmlElement(
            name: string,
            attrs?: Record<string, string> | Array<[string, string]>,
            text?: string,
        ): Element;
        function xmlElement(
            name: string,
            text?: string,
            attrs?: Record<string, string> | Array<[string, string]>,
        ): Element;

        /**  Function: xmlescape
         *  Escapes invalid xml characters.
         *
         *  Parameters:
         *     @param text - text to escape.
         *
         *  Returns:
         *     @returns Escaped text.
         */
        function xmlescape(text: string): string;

        /**  Function: xmlunescape
         *  Unescapes invalid xml characters.
         *
         *  Parameters:
         *     @param text - text to unescape.
         *
         *  Returns:
         *     @returns Unescaped text.
         */
        function xmlunescape(text: string): string;

        /** Function: xmlTextNode
         *  Creates an XML DOM text node.
         *
         *  Provides a cross implementation version of document.createTextNode.
         *
         *  Parameters:
         *    @param text - The content of the text node.
         *
         *  Returns:
         *   @returns A new XML DOM text node.
         */
        function xmlTextNode(text: string): Text;

        /** Function: xmlHtmlNode
         *  Creates an XML DOM html node.
         *
         *  Parameters:
         *    @param html - The content of the html node.
         *
         *  Returns:
         *   @returns A new XML DOM text node.
         */
        function xmlHtmlNode(html: string): Document;

        /** Function: getText
         *  Get the concatenation of all text children of an element.
         *
         *  Parameters:
         *    @param elem - A XMLElement as DOM element.
         *
         *  Returns:
         *    @returns A String with the concatenated text of all text element children.
         */
        function getText(elem: Element): string;

        /** Function: copyElement
         *  Copy an XML DOM element.
         *
         *  This function copies a DOM element and all its descendants and returns
         *  the new copy.
         *
         *  Parameters:
         *    @param elem - A XMLElement as a DOM element.
         *
         *  Returns:
         *    @returns A new, copied DOM element tree.
         */
        function copyElement(elem: Element): Element;

        /** Function: createHtml
         *  Copy an HTML DOM element into an XML DOM.
         *
         *  This function copies a DOM element and all its descendants and returns
         *  the new copy. If all elements and attributes satisfy the XHTML specification
         *
         *  Parameters:
         *    @param elem - A HTMLElement.
         *
         *  Returns:
         *    @returns A new, copied DOM element tree.
         */
        function createHtml(elem: HTMLElement): Element;

        /** Function: escapeNode
         *  Escape the node part (also called local part) of a JID.
         *
         *  Parameters:
         *    @param node - A node (or local part).
         *
         *  Returns:
         *    @returns An escaped node (or local part).
         */
        function escapeNode(node: string): string;

        /** Function: unescapeNode
         *  Unescape a node part (also called local part) of a JID.
         *
         *  Parameters:
         *    @param node - A node (or local part).
         *
         *  Returns:
         *   @returns An unescaped node (or local part).
         */
        function unescapeNode(node: string): string;

        /** Function: getNodeFromJid
         *  Get the node portion of a JID String.
         *
         *  Parameters:
         *    @param jid - A JID.
         *
         *  Returns:
         *   @returns A String containing the node.
         */
        function getNodeFromJid(jid: string): string;

        /** Function: getDomainFromJid
         *  Get the domain portion of a JID String.
         *
         *  Parameters:
         *    @param jid - A JID.
         *
         *  Returns:
         *    @returns A String containing the domain.
         */
        function getDomainFromJid(jid: string): string;

        /** Function: getResourceFromJid
         *  Get the resource portion of a JID String.
         *
         *  Parameters:
         *    @param jid - A JID.
         *
         *  Returns:
         *    @returns A String containing the resource.
         */
        function getResourceFromJid(jid: string): string;

        /** Function: getBareJidFromJid
         *  Get the bare JID from a JID String.
         *
         *  Parameters:
         *    @param jid - A JID.
         *
         *  Returns:
         *    @returns A String containing the bare JID.
         */
        function getBareJidFromJid(jid: string): string;

        /** Function: log
         *  User overrideable logging function.
         *
         *  This function is called whenever the Strophe library calls any
         *  of the logging functions.  The default implementation of this
         *  function does nothing.  If client code wishes to handle the logging
         *  messages, it should override this with
         *  > Strophe.log = function (level, msg) {
         *  >   (user code here)
         *  > };
         *
         *  Please note that data sent and received over the wire is logged
         *  via Strophe.Connection.rawInput() and Strophe.Connection.rawOutput().
         *
         *  The different levels and their meanings are
         *
         *    DEBUG - Messages useful for debugging purposes.
         *    INFO - Informational messages.  This is mostly information like
         *      'disconnect was called' or 'SASL auth succeeded'.
         *    WARN - Warnings about potential problems.  This is mostly used
         *      to report transient connection errors like request timeouts.
         *    ERROR - Some error occurred.
         *    FATAL - A non-recoverable fatal error occurred.
         *
         *  Parameters:
         *    @param level - The log level of the log message.  This will
         *      be one of the values in Strophe.LogLevel.
         *    @param msg - The log message.
         */
        function log(level: LogLevel, msg: string): void;

        /** Functions: debug
         *  Log a message at the Strophe.LogLevel.DEBUG level.
         *
         *  Parameters:
         *    @param msg - The log message.
         */
        function debug(msg: string): void;

        /** Functions: info
         *  Log a message at the Strophe.LogLevel.INFO level.
         *
         *  Parameters:
         *    @param msg - The log message.
         */
        function info(msg: string): void;

        /** Functions: warn
         *  Log a message at the Strophe.LogLevel.WARN level.
         *
         *  Parameters:
         *    @param msg - The log message.
         */
        function warn(msg: string): void;

        /** Functions: error
         *  Log a message at the Strophe.LogLevel.ERROR level.
         *
         *  Parameters:
         *    @param msg - The log message.
         */
        function error(msg: string): void;

        /** Functions: fatal
         *  Log a message at the Strophe.LogLevel.FATAL level.
         *
         *  Parameters:
         *    @param msg - The log message.
         */
        function fatal(msg: string): void;

        /** Function: serialize
         *  Render a DOM element and all descendants to a String.
         *
         *  Parameters:
         *    @param elem - A XMLElement as DOM element or a Strophe.Builder or an object
         *    with a tree function returning a DOMElement.
         *
         *  Returns:
         *    @returns The serialized element tree as a String.
         */
        function serialize(elem: Element | Builder | { tree: () => Element }): string;

        /** Function: addConnectionPlugin
         *  Extends the Strophe.Connection object with the given plugin.
         *
         *  Parameters:
         *    @param name - The name of the extension.
         *    @param prototypeObject - The plugin's prototype.
         */
        function addConnectionPlugin(name: string, prototypeObject: object): void;

        /** Class: Strophe.Builder
         *  XML DOM builder.
         *
         *  This object provides an interface similar to JQuery but for building
         *  DOM element easily and rapidly.  All the functions except for toString()
         *  and tree() return the object, so calls can be chained.  Here's an
         *  example using the $iq() builder helper.
         *  > $iq({to: 'you', from: 'me', type: 'get', id: '1'})
         *  >     .c('query', {xmlns: 'strophe:example'})
         *  >     .c('example')
         *  >     .toString()
         *  The above generates this XML fragment
         *  > <iq to='you' from='me' type='get' id='1'>
         *  >   <query xmlns='strophe:example'>
         *  >     <example/>
         *  >   </query>
         *  > </iq>
         *  The corresponding DOM manipulations to get a similar fragment would be
         *  a lot more tedious and probably involve several helper variables.
         *
         *  Since adding children makes new operations operate on the child, up()
         *  is provided to traverse up the tree.  To add two children, do
         *  > builder.c('child1', ...).up().c('child2', ...)
         *  The next operation on the Builder will be relative to the second child.
         */
        class Builder {
            /** Constructor: Strophe.Builder
             *  Create a Strophe.Builder object.
             *
             *  The attributes should be passed in object notation.  For example
             *  > const b = new Builder('message', {to: 'you', from: 'me'});
             *  or
             *  > const b = new Builder('messsage', {'xml:lang': 'en'});
             *
             *  Parameters:
             *    @param name - The name of the root element.
             *    @param attrs - The attributes for the root element in object notation.
             *
             *  Returns:
             *    @returns A new Strophe.Builder.
             */
            constructor(name: string, attrs?: any);

            /** Function: tree
             *  Return the DOM tree.
             *
             *  This function returns the current DOM tree as an element object.  This
             *  is suitable for passing to functions like Strophe.Connection.send().
             *
             *  Returns:
             *    @returns The DOM tree as an element object.
             */
            tree(): Element;

            /** Function: toString
             *  Serialize the DOM tree to a String.
             *
             *  This function returns a string serialization of the current DOM
             *  tree.  It is often used internally to pass data to a
             *  Strophe.Request object.
             *
             *  Returns:
             *    @returns The serialized DOM tree in a String.
             */
            toString(): string;

            /** Function: up
             *  Make the current parent element the new current element.
             *
             *  This function is often used after c() to traverse back up the tree.
             *  For example, to add two children to the same element
             *  > builder.c('child1', {}).up().c('child2', {});
             *
             *  Returns:
             *    @returns The Strophe.Builder object.
             */
            up(): Builder;

            /** Function: attrs
             *  Add or modify attributes of the current element.
             *
             *  The attributes should be passed in object notation. This function
             *  does not move the current element pointer.
             *
             *  Parameters:
             *    @param moreAttrs - The attributes to add/modify in object notation.
             *
             *  Returns:
             *    @returns The Strophe.Builder object.
             */
            attrs(moreAttrs: Record<string, string>): Builder;

            /** Function: c
             *  Add a child to the current element and make it the new current
             *  element.
             *
             *  This function moves the current element pointer to the child,
             *  unless text is provided.  If you need to add another child, it
             *  is necessary to use up() to go back to the parent in the tree.
             *
             *  Parameters:
             *    @param name - The name of the child.
             *    @param attrs - The attributes of the child in object notation.
             *    @param text - The text to add to the child.
             *
             *  Returns:
             *    @returns The Strophe.Builder object.
             */
            c(name: string, attrs?: Record<string, string>, text?: string): Builder;

            /** Function: cnode
             *  Add a child to the current element and make it the new current
             *  element.
             *
             *  This function is the same as c() except that instead of using a
             *  name and an attributes object to create the child it uses an
             *  existing DOM element object.
             *
             *  Parameters:
             *    @param elem - A XMLElement as DOM element.
             *
             *  Returns:
             *    @returns The Strophe.Builder object.
             */
            cnode(elem: Element): Builder;

            /** Function: t
             *  Add a child text element.
             *
             *  This *does not* make the child the new current element since there
             *  are no children of text elements.
             *
             *  Parameters:
             *    @param text - The text data to append to the current element.
             *
             *  Returns:
             *    @returns The Strophe.Builder object.
             */
            t(text: string): Builder;

            /** Function: h
             *  Replace current element contents with the HTML passed in.
             *
             *  This *does not* make the child the new current element
             *
             *  Parameters:
             *    @param html - The html to insert as contents of current element.
             *
             *  Returns:
             *    @returns The Strophe.Builder object.
             */
            h(html: string): Builder;
        }

        /** PrivateClass: Strophe.Handler
         *  _Private_ helper class for managing stanza handlers.
         *
         *  A Strophe.Handler encapsulates a user provided callback function to be
         *  executed when matching stanzas are received by the connection.
         *  Handlers can be either one-off or persistent depending on their
         *  return value. Returning true will cause a Handler to remain active, and
         *  returning false will remove the Handler.
         *
         *  Users will not use Strophe.Handler objects directly, but instead they
         *  will use Strophe.Connection.addHandler() and
         *  Strophe.Connection.deleteHandler().
         */
        class Handler {
            /**
             * PrivateConstructor: Strophe.Handler
             *  Create and initialize a new Strophe.Handler
             *
             * Parameters:
             * @param handler handler function to run if the configured attributes for it match against the stanza
             * @param ns namespace to match the incoming stanza against to find the right handler
             * @param name tagName to match the incoming stanza against to find the right handler
             * @param type type to match the incoming stanza against to find the right handler
             * @param id id to match the incoming stanza against to find the right handler
             * @param from from jid to match the incoming stanza against to find the right handler
             * @param options matchBareFromJid match only the local and domain of the jid, ignoreNamespaceFragment ignores '#' in namespace
             */
            private constructor(
                handler: (stanza: Element) => boolean,
                ns: string,
                name: string,
                type: string,
                id: string,
                from: string,
                options?: { matchBareFromJid?: boolean; ignoreNamespaceFragment: boolean },
            );

            /** PrivateFunction: getNamespace
             *  Returns the XML namespace attribute on an element.
             *  If `ignoreNamespaceFragment` was passed in for this handler, then the
             *  URL fragment will be stripped.
             *
             *  Parameters:
             *    (XMLElement) elem - The XML element with the namespace.
             *
             *  Returns:
             *    The namespace, with optionally the fragment stripped.
             */
            private getNamespace(elem);

            /** PrivateFunction: namespaceMatch
             *  Tests if a stanza matches the namespace set for this Strophe.Handler.
             *
             *  Parameters:
             *    (XMLElement) elem - The XML element to test.
             *
             *  Returns:
             *    true if the stanza matches and false otherwise.
             */
            private namespaceMatch(elem);

            /** PrivateFunction: isMatch
             *  Tests if a stanza matches the Strophe.Handler.
             *
             *  Parameters:
             *    @param elem - The XML element to test.
             *
             *  Returns:
             *    @returns true if the stanza matches and false otherwise.
             */
            isMatch(elem: Element): boolean;

            /** PrivateFunction: run
             *  Run the callback on a matching stanza.
             *
             *  Parameters:
             *    @param elem - The DOM element that triggered the
             *      Strophe.Handler.
             *
             *  Returns:
             *    @returns A boolean indicating if the handler should remain active.
             */
            run(elem: Element): boolean;

            /** PrivateFunction: toString
             *  Get a String representation of the Strophe.Handler object.
             *
             *  Returns:
             *   @returns A String.
             */
            toString(): string;
        }

        /** PrivateClass: Strophe.TimedHandler
         *  _Private_ helper class for managing timed handlers.
         *
         *  A Strophe.TimedHandler encapsulates a user provided callback that
         *  should be called after a certain period of time or at regular
         *  intervals.  The return value of the callback determines whether the
         *  Strophe.TimedHandler will continue to fire.
         *
         *  Users will not use Strophe.TimedHandler objects directly, but instead
         *  they will use Strophe.Connection.addTimedHandler() and
         *  Strophe.Connection.deleteTimedHandler().
         */
        class TimedHandler {
            /** PrivateConstructor: Strophe.TimedHandler
             *  Create and initialize a new Strophe.TimedHandler object.
             *
             *  Parameters:
             *    @param period - The number of milliseconds to wait before the
             *      handler is called.
             *    @param handler - The callback to run when the handler fires.  This
             *      function should take no arguments.
             *
             *  Returns:
             *    @returns A new Strophe.TimedHandler object.
             */
            private constructor(period: number, handler: () => boolean);

            /** PrivateFunction: run
             *  Run the callback for the Strophe.TimedHandler.
             *
             *  Returns:
             *   @returns true if the Strophe.TimedHandler should be called again, and false
             *      otherwise.
             */
            private run();

            /** PrivateFunction: reset
             *  Reset the last called time for the Strophe.TimedHandler.
             */
            private reset();

            /** PrivateFunction: toString
             *  Get a string representation of the Strophe.TimedHandler object.
             *
             *  Returns:
             *    The string representation.
             */
            private toString();
        }

        /**
         * Options for the Strophe Connection
         *  shared options between WebSocket and BOSH are:
         *   - cookies
         *   - mechanisms (for SASL)
         *   - explicitResourceBinding (to have additional step for connections setups)
         *  WebSocket only:
         *   - protocol (upgrade current protocol to ws or wss)
         *   - worker (url to load the worker script from, for example for shared sessions)
         *  BOSH only:
         *   - sync (make requests synchronous)
         *   - customHeaders (add custom headers to requests)
         *   - keepalive (store session data for reconnections)
         *   - withCredentials (if you need to add auth cookies to ajax requests)
         *   - contentType (default is "text/xml; charset=utf-8")
         */
        interface ConnectionOptions {
            /**
             * cookies - Common option for Websocket and Bosh:
             *  The *cookies* option allows you to pass in cookies to be added to the
             *  document. These cookies will then be included in the BOSH XMLHttpRequest
             *  or in the websocket connection.
             *
             *  The passed in value must be a map of cookie names and string values.
             *
             *  > { "myCookie": {
             *  >     "value": "1234",
             *  >     "domain": ".example.org",
             *  >     "path": "/",
             *  >     "expires": expirationDate
             *  >     }
             *  > }
             *
             *  Note that cookies can't be set in this way for other domains (i.e. cross-domain).
             *  Those cookies need to be set under those domains, for example they can be
             *  set server-side by making a XHR call to that domain to ask it to set any
             *  necessary cookies.
             */
            cookies?: Record<string, Record<string, string>>;
            /**
             * mechanisms - Common option for Websocket and Bosh:
             *  The *mechanisms* option allows you to specify the SASL mechanisms that this
             *  instance of Strophe.Connection (and therefore your XMPP client) will
             *  support.
             *
             *  The value must be an array of objects with Strophe.SASLMechanism
             *  prototypes.
             *
             *  If nothing is specified, then the following mechanisms (and their
             *  priorities) are registered:
             *
             *      SCRAM-SHA-1 - 60
             *      PLAIN       - 50
             *      OAUTHBEARER - 40
             *      X-OAUTH2    - 30
             *      ANONYMOUS   - 20
             *      EXTERNAL    - 10
             */
            mechanisms?: SASLMechanism[];
            /**
             * explicitResourceBinding - Common option for Websocket and Bosh:
             *  If `explicitResourceBinding` is set to a truthy value, then the XMPP client
             *  needs to explicitly call `Strophe.Connection.prototype.bind` once the XMPP
             *  server has advertised the "urn:ietf:params:xml:ns:xmpp-bind" feature.
             *
             *  Making this step explicit allows client authors to first finish other
             *  stream related tasks, such as setting up an XEP-0198 Stream Management
             *  session, before binding the JID resource for this session.
             */
            explicitResourceBinding?: boolean;
            /**
             * protocol - WebSocket option:
             *  If you want to connect to the current host with a WebSocket connection you
             *  can tell Strophe to use WebSockets through a "protocol" attribute in the
             *  optional options parameter. Valid values are "ws" for WebSocket and "wss"
             *  for Secure WebSocket.
             *  So to connect to "wss://CURRENT_HOSTNAME/xmpp-websocket" you would call
             *
             *  > const conn = new Strophe.Connection("/xmpp-websocket/", {protocol: "wss"});
             *
             *  Note that relative URLs _NOT_ starting with a "/" will also include the path
             *  of the current site.
             *
             *  Also, because downgrading security is not permitted by browsers, when using
             *  relative URLs both BOSH and WebSocket connections will use their secure
             *  variants if the current connection to the site is also secure (https).
             */
            protocol?: string;
            /**
             * worker - WebSocket option:
             *  Set this option to URL from where the shared worker script should be loaded.
             *
             *  To run the websocket connection inside a shared worker.
             *  This allows you to share a single websocket-based connection between
             *  multiple Strophe.Connection instances, for example one per browser tab.
             *
             *  The script to use is the one in `src/shared-connection-worker.js`.
             */
            worker?: string;
            /**
             * sync - BOSH option:
             *  By adding "sync" to the options, you can control if requests will
             *  be made synchronously or not. The default behaviour is asynchronous.
             *  If you want to make requests synchronous, make "sync" evaluate to true.
             *  > let conn = new Strophe.Connection("/http-bind/", {sync: true});
             *
             *  You can also toggle this on an already established connection.
             *  > conn.options.sync = true;
             */
            sync?: boolean;
            /**
             * customHeaders - BOSH option:
             *  The *customHeaders* option can be used to provide custom HTTP headers to be
             *  included in the XMLHttpRequests made.
             */
            customHeaders?: Record<string, string>;
            /**
             * keepalive - BOSH option:
             *  The *keepalive* option can be used to instruct Strophe to maintain the
             *  current BOSH session across interruptions such as webpage reloads.
             *
             *  It will do this by caching the sessions tokens in sessionStorage, and when
             *  "restore" is called it will check whether there are cached tokens with
             *  which it can resume an existing session.
             */
            keepalive?: boolean;
            /**
             * withCredentials - BOSH option:
             *  The *withCredentials* option should receive a Boolean value and is used to
             *  indicate wether cookies should be included in ajax requests (by default
             *  they're not).
             *  Set this value to true if you are connecting to a BOSH service
             *  and for some reason need to send cookies to it.
             *  In order for this to work cross-domain, the server must also enable
             *  credentials by setting the Access-Control-Allow-Credentials response header
             *  to "true". For most usecases however this setting should be false (which
             *  is the default).
             *  Additionally, when using Access-Control-Allow-Credentials, the
             *  Access-Control-Allow-Origin header can't be set to the wildcard "*", but
             *  instead must be restricted to actual domains.
             */
            withCredentials?: boolean;
            /**
             * contentType - BOSH option:
             *  The *contentType* option can be set to change the default Content-Type
             *  of "text/xml; charset=utf-8", which can be useful to reduce the amount of
             *  CORS preflight requests that are sent to the server.
             */
            contentType?: string;
        }

        /** Class: Strophe.Connection
         *  XMPP Connection manager.
         *
         *  This class is the main part of Strophe.  It manages a BOSH connection
         *  to an XMPP server and dispatches events to the user callbacks as
         *  data arrives.  It supports SASL PLAIN, SASL DIGEST-MD5, SASL SCRAM-SHA1
         *  and legacy authentication.
         *
         *  After creating a Strophe.Connection object, the user will typically
         *  call connect() with a user supplied callback to handle connection level
         *  events like authentication failure, disconnection, or connection
         *  complete.
         *
         *  The user will also have several event handlers defined by using
         *  addHandler() and addTimedHandler().  These will allow the user code to
         *  respond to interesting stanzas or do something periodically with the
         *  connection.  These handlers will be active once authentication is
         *  finished.
         *
         *  To send data to the connection, use send().
         */
        class Connection {
            /**
             * the service url to connect with
             */
            service: string;
            /**
             * @see ConnectionOptions
             */
            options: ConnectionOptions;
            /**
             * The connected JID.
             */
            jid: string;
            /**
             * The domain of the connected JID.
             */
            domain: string;
            features: Element;

            // SASL
            do_bind: boolean;
            do_session: boolean;
            mechanism: Record<string, SASLMechanism>;

            // handler lists
            timedHandlers: TimedHandler[];
            handlers: Handler[];
            removeTimeds: TimedHandler[];
            removeHandlers: Handler[];
            addTimeds: TimedHandler[];
            addHandlers: Handler[];
            protocolErrorHandlers: {
                HTTP: Record<number, (status: number) => unknown>;
                websocket: Record<number, (status: number) => unknown>;
            };

            authenticated: boolean;
            connected: boolean;
            disconnecting: boolean;
            do_authentication: boolean;
            paused: boolean;
            restored: boolean;

            maxRetries: number;

            /** Variable: authzid
             *  Set on connection.
             *  Authorization identity.
             */
            authzid: string;
            /** Variable: authcid
             *  Set on connection.
             *  Authentication identity (Username).
             */
            authcid: string;
            /** Variable: pass
             *  Set on connection.
             *  Authentication identity (User password).
             */
            pass: string;
            /** parameter: callback
             *  Set on connection.
             *  Callback after connecting.
             */
            connect_callback: (status: number, condition: string, elem: Element) => unknown;

            disconnection_timeout: number;

            servtype: string;

            /** Constructor: Strophe.Connection
             *  Create and initialize a Strophe.Connection object.
             *
             *  The transport-protocol for this connection will be chosen automatically
             *  based on the given service parameter. URLs starting with "ws://" or
             *  "wss://" will use WebSockets, URLs starting with "http://", "https://"
             *  or without a protocol will use BOSH.
             *
             *  To make Strophe connect to the current host you can leave out the protocol
             *  and host part and just pass the path, e.g.
             *
             *  > let conn = new Strophe.Connection("/http-bind/");
             *
             *  Options common to both Websocket and BOSH:
             *  ------------------------------------------
             *
             *  cookies:
             *
             *  The *cookies* option allows you to pass in cookies to be added to the
             *  document. These cookies will then be included in the BOSH XMLHttpRequest
             *  or in the websocket connection.
             *
             *  The passed in value must be a map of cookie names and string values.
             *
             *  > { "myCookie": {
             *  >     "value": "1234",
             *  >     "domain": ".example.org",
             *  >     "path": "/",
             *  >     "expires": expirationDate
             *  >     }
             *  > }
             *
             *  Note that cookies can't be set in this way for other domains (i.e. cross-domain).
             *  Those cookies need to be set under those domains, for example they can be
             *  set server-side by making a XHR call to that domain to ask it to set any
             *  necessary cookies.
             *
             *  mechanisms:
             *
             *  The *mechanisms* option allows you to specify the SASL mechanisms that this
             *  instance of Strophe.Connection (and therefore your XMPP client) will
             *  support.
             *
             *  The value must be an array of objects with Strophe.SASLMechanism
             *  prototypes.
             *
             *  If nothing is specified, then the following mechanisms (and their
             *  priorities) are registered:
             *
             *      SCRAM-SHA-1 - 60
             *      PLAIN       - 50
             *      OAUTHBEARER - 40
             *      X-OAUTH2    - 30
             *      ANONYMOUS   - 20
             *      EXTERNAL    - 10
             *
             *  explicitResourceBinding:
             *
             *  If `explicitResourceBinding` is set to a truthy value, then the XMPP client
             *  needs to explicitly call `Strophe.Connection.prototype.bind` once the XMPP
             *  server has advertised the "urn:ietf:params:xml:ns:xmpp-bind" feature.
             *
             *  Making this step explicit allows client authors to first finish other
             *  stream related tasks, such as setting up an XEP-0198 Stream Management
             *  session, before binding the JID resource for this session.
             *
             *  WebSocket options:
             *  ------------------
             *
             *  protocol:
             *
             *  If you want to connect to the current host with a WebSocket connection you
             *  can tell Strophe to use WebSockets through a "protocol" attribute in the
             *  optional options parameter. Valid values are "ws" for WebSocket and "wss"
             *  for Secure WebSocket.
             *  So to connect to "wss://CURRENT_HOSTNAME/xmpp-websocket" you would call
             *
             *  > let conn = new Strophe.Connection("/xmpp-websocket/", {protocol: "wss"});
             *
             *  Note that relative URLs _NOT_ starting with a "/" will also include the path
             *  of the current site.
             *
             *  Also because downgrading security is not permitted by browsers, when using
             *  relative URLs both BOSH and WebSocket connections will use their secure
             *  variants if the current connection to the site is also secure (https).
             *
             *  worker:
             *
             *  Set this option to URL from where the shared worker script should be loaded.
             *
             *  To run the websocket connection inside a shared worker.
             *  This allows you to share a single websocket-based connection between
             *  multiple Strophe.Connection instances, for example one per browser tab.
             *
             *  The script to use is the one in `src/shared-connection-worker.js`.
             *
             *  BOSH options:
             *  -------------
             *
             *  By adding "sync" to the options, you can control if requests will
             *  be made synchronously or not. The default behaviour is asynchronous.
             *  If you want to make requests synchronous, make "sync" evaluate to true.
             *  > let conn = new Strophe.Connection("/http-bind/", {sync: true});
             *
             *  You can also toggle this on an already established connection.
             *  > conn.options.sync = true;
             *
             *  The *customHeaders* option can be used to provide custom HTTP headers to be
             *  included in the XMLHttpRequests made.
             *
             *  The *keepalive* option can be used to instruct Strophe to maintain the
             *  current BOSH session across interruptions such as webpage reloads.
             *
             *  It will do this by caching the sessions tokens in sessionStorage, and when
             *  "restore" is called it will check whether there are cached tokens with
             *  which it can resume an existing session.
             *
             *  The *withCredentials* option should receive a Boolean value and is used to
             *  indicate wether cookies should be included in ajax requests (by default
             *  they're not).
             *  Set this value to true if you are connecting to a BOSH service
             *  and for some reason need to send cookies to it.
             *  In order for this to work cross-domain, the server must also enable
             *  credentials by setting the Access-Control-Allow-Credentials response header
             *  to "true". For most usecases however this setting should be false (which
             *  is the default).
             *  Additionally, when using Access-Control-Allow-Credentials, the
             *  Access-Control-Allow-Origin header can't be set to the wildcard "*", but
             *  instead must be restricted to actual domains.
             *
             *  The *contentType* option can be set to change the default Content-Type
             *  of "text/xml; charset=utf-8", which can be useful to reduce the amount of
             *  CORS preflight requests that are sent to the server.
             *
             *  Parameters:
             *    @param service - The BOSH or WebSocket service URL.
             *    @param options - A hash of configuration options
             *
             *  Returns:
             *    @returns A new Strophe.Connection object.
             */
            constructor(service: string, options?: ConnectionOptions);

            /** Function: reset
             *  Reset the connection.
             *
             *  This function should be called after a connection is disconnected
             *  before that connection is reused.
             */
            reset(): void;

            /** Function: pause
             *  Pause the request manager.
             *
             *  This will prevent Strophe from sending any more requests to the
             *  server.  This is very useful for temporarily pausing
             *  BOSH-Connections while a lot of send() calls are happening quickly.
             *  This causes Strophe to send the data in a single request, saving
             *  many request trips.
             */
            pause(): void;

            /** Function: resume
             *  Resume the request manager.
             *
             *  This resumes after pause() has been called.
             */
            resume(): void;

            /** Function: getUniqueId
             *  Generate a unique ID for use in <iq/> elements.
             *
             *  All <iq/> stanzas are required to have unique id attributes.  This
             *  function makes creating these easy.  Each connection instance has
             *  a counter which starts from zero, and the value of this counter
             *  plus a colon followed by the suffix becomes the unique id. If no
             *  suffix is supplied, the counter is used as the unique id.
             *
             *  Suffixes are used to make debugging easier when reading the stream
             *  data, and their use is recommended.  The counter resets to 0 for
             *  every new connection for the same reason.  For connections to the
             *  same server that authenticate the same way, all the ids should be
             *  the same, which makes it easy to see changes.  This is useful for
             *  automated testing as well.
             *
             *  Parameters:
             *    @param suffix - A optional suffix to append to the id.
             *
             *  Returns:
             *    @returns A unique string to be used for the id attribute.
             */
            getUniqueId(suffix?: string | number): string;

            /** Function: addProtocolErrorHandler
             *  Register a handler function for when a protocol (websocker or HTTP)
             *  error occurs.
             *
             *  NOTE: Currently only HTTP errors for BOSH requests are handled.
             *  Patches that handle websocket errors would be very welcome.
             *
             *  Parameters:
             *    @param protocol - 'HTTP' or 'websocket'
             *    @param status_code - Error status code (e.g 500, 400 or 404)
             *    @param callback - Function that will fire on Http error
             *
             *  Example:
             *  function onError(err_code){
             *    //do stuff
             *  }
             *
             *  let conn = Strophe.connect('http://example.com/http-bind');
             *  conn.addProtocolErrorHandler('HTTP', 500, onError);
             *  // Triggers HTTP 500 error and onError handler will be called
             *  conn.connect('user_jid@incorrect_jabber_host', 'secret', onConnect);
             */
            addProtocolErrorHandler(protocol: string, status_code: number, callback: (status: number) => unknown): void;

            /** Function: connect
             *  Starts the connection process.
             *
             *  As the connection process proceeds, the user supplied callback will
             *  be triggered multiple times with status updates.  The callback
             *  should take two arguments - the status code and the error condition.
             *
             *  The status code will be one of the values in the Strophe.Status
             *  constants.  The error condition will be one of the conditions
             *  defined in RFC 3920 or the condition 'strophe-parsererror'.
             *
             *  The Parameters _wait_, _hold_ and _route_ are optional and only relevant
             *  for BOSH connections. Please see XEP 124 for a more detailed explanation
             *  of the optional parameters.
             *
             *  Parameters:
             *    @param jid - The user's JID.  This may be a bare JID,
             *      or a full JID.  If a node is not supplied, SASL ANONYMOUS
             *      authentication will be attempted.
             *    @param pass - The user's password.
             *    @param callback - The connect callback function.
             *    @param wait - The optional HTTPBIND wait value.  This is the
             *      time the server will wait before returning an empty result for
             *      a request.  The default setting of 60 seconds is recommended.
             *    @param hold - The optional HTTPBIND hold value.  This is the
             *      number of connections the server will hold at one time.  This
             *      should almost always be set to 1 (the default).
             *    @param route - The optional route value.
             *    @param authcid - The optional alternative authentication identity
             *      (username) if intending to impersonate another user.
             *      When using the SASL-EXTERNAL authentication mechanism, for example
             *      with client certificates, then the authcid value is used to
             *      determine whether an authorization JID (authzid) should be sent to
             *      the server. The authzid should NOT be sent to the server if the
             *      authzid and authcid are the same. So to prevent it from being sent
             *      (for example when the JID is already contained in the client
             *      certificate), set authcid to that same JID. See XEP-178 for more
             *      details.
             *    @param [disconnection_timeout=3000] - The optional disconnection timeout
             *      in milliseconds before _doDisconnect will be called.
             */
            connect(
                jid?: string,
                pass?: string,
                callback?: (status: Status, condition: string, elem: Element) => unknown,
                wait?: number,
                hold?: number,
                route?: string,
                authcid?: string,
                disconnection_timeout?: number,
            ): void;

            /** Function: attach
             *  Attach to an already created and authenticated BOSH session.
             *
             *  This function is provided to allow Strophe to attach to BOSH
             *  sessions which have been created externally, perhaps by a Web
             *  application.  This is often used to support auto-login type features
             *  without putting user credentials into the page.
             *
             *  Parameters:
             *    @param jid - The full JID that is bound by the session.
             *    @param sid - The SID of the BOSH session.
             *    @param rid - The current RID of the BOSH session.  This RID
             *      will be used by the next request.
             *    @param callback The connect callback function.
             *    @param wait - The optional HTTPBIND wait value.  This is the
             *      time the server will wait before returning an empty result for
             *      a request.  The default setting of 60 seconds is recommended.
             *      Other settings will require tweaks to the Strophe.TIMEOUT value.
             *    @param hold - The optional HTTPBIND hold value.  This is the
             *      number of connections the server will hold at one time.  This
             *      should almost always be set to 1 (the default).
             *    @param wind - The optional HTTBIND window value.  This is the
             *      allowed range of request ids that are valid.  The default is 5.
             */
            attach(
                jid: string,
                sid: string,
                rid: string,
                callback?: (status: Status, condition: string, elem: Element) => unknown,
                wait?: number,
                hold?: number,
                wind?: number,
            ): void;

            /**
             * Function: restore
             * Attempt to restore a cached BOSH session.
             *
             * This function is only useful in conjunction with providing the
             * “keepalive”:true option when instantiating a new Strophe.Connection.
             * When “keepalive” is set to true, Strophe will cache the BOSH tokens
             * RID (Request ID) and SID (Session ID) and then when this function is called,
             * it will attempt to restore the session from those cached tokens.
             * This function must therefore be called instead of connect or attach.
             * For an example on how to use it, please see examples/restore.js
             *
             * Parameters:
             *    @param jid - The user’s JID.  This may be a bare JID or a full JID.
             *    @param callback - The connect callback function.
             *    @param wait - The optional HTTPBIND wait value.
             *      This is the time the server will wait before returning an empty result for a request.
             *      The default setting of 60 seconds is recommended.
             *    @param hold - The optional HTTPBIND hold value.
             *      This is the number of connections the server will hold at one time.
             *      This should almost always be set to 1 (the default).
             *    @param [wind=5] wind - The optional HTTBIND window value.
             *      This is the allowed range of request ids that are valid.
             */
            restore(
                jid?: string,
                callback?: (status: Status, condition: string, elem: Element) => unknown,
                wait?: number,
                hold?: number,
                wind?: number,
            ): void;

            /** Function: xmlInput
             *  User overrideable function that receives XML data coming into the
             *  connection.
             *
             *  The default function does nothing.  User code can override this with
             *  > Strophe.Connection.xmlInput = function (elem) {
             *  >   (user code)
             *  > };
             *
             *  Due to limitations of current Browsers' XML-Parsers the opening and closing
             *  <stream> tag for WebSocket-Connoctions will be passed as selfclosing here.
             *
             *  BOSH-Connections will have all stanzas wrapped in a <body> tag. See
             *  <Strophe.Bosh.strip> if you want to strip this tag.
             *
             *  Parameters:
             *    @param elem - T XMLElement ashe XML data received by the connection.
             */
            xmlInput(elem: Element): void;

            /** Function: xmlOutput
             *  User overrideable function that receives XML data sent to the
             *  connection.
             *
             *  The default function does nothing.  User code can override this with
             *  > Strophe.Connection.xmlOutput = function (elem) {
             *  >   (user code)
             *  > };
             *
             *  Due to limitations of current Browsers' XML-Parsers the opening and closing
             *  <stream> tag for WebSocket-Connoctions will be passed as selfclosing here.
             *
             *  BOSH-Connections will have all stanzas wrapped in a <body> tag. See
             *  <Strophe.Bosh.strip> if you want to strip this tag.
             *
             *  Parameters:
             *    @param elem - T XMLElement ashe XMLdata sent by the connection.
             */
            xmlOutput(elem: Element): void;

            /** Function: rawInput
             *  User overrideable function that receives raw data coming into the
             *  connection.
             *
             *  The default function does nothing.  User code can override this with
             *  > Strophe.Connection.rawInput = function (data) {
             *  >   (user code)
             *  > };
             *
             *  Parameters:
             *    @param data - The data received by the connection.
             */
            rawInput(data: string): void;

            /** Function: rawOutput
             *  User overrideable function that receives raw data sent to the
             *  connection.
             *
             *  The default function does nothing.  User code can override this with
             *  > Strophe.Connection.rawOutput = function (data) {
             *  >   (user code)
             *  > };
             *
             *  Parameters:
             *    @param data - The data sent by the connection.
             */
            rawOutput(data: string): void;

            /** Function: nextValidRid
             *  User overrideable function that receives the new valid rid.
             *
             *  The default function does nothing. User code can override this with
             *  > Strophe.Connection.nextValidRid = function (rid) {
             *  >    (user code)
             *  > };
             *
             *  Parameters:
             *    @param  rid - The next valid rid
             */
            protected nextValidRid(rid: number): void;

            /** Function: send
             *  Send a stanza.
             *
             *  This function is called to push data onto the send queue to
             *  go out over the wire.  Whenever a request is sent to the BOSH
             *  server, all pending data is sent and the queue is flushed.
             *
             *  Parameters:
             *  @param elem - The stanza to send.
             */
            send(elem: Element | Element[] | Builder): void;

            /** Function: flush
             *  Immediately send any pending outgoing data.
             *
             *  Normally send() queues outgoing data until the next idle period
             *  (100ms), which optimizes network use in the common cases when
             *  several send()s are called in succession. flush() can be used to
             *  immediately send all pending data.
             */
            flush(): void;

            /** Function: sendPresence
             *  Helper function to send presence stanzas. The main benefit is for
             *  sending presence stanzas for which you expect a responding presence
             *  stanza with the same id (for example when leaving a chat room).
             *
             *  Parameters:
             *    @param elem - The stanza to send.
             *    @param callback - The callback function for a successful request.
             *    @param errback - The callback function for a failed or timed
             *      out request.  On timeout, the stanza will be null.
             *    @param timeout - The time specified in milliseconds for a
             *      timeout to occur.
             *
             *  Returns:
             *    @returns The id used to send the presence.
             */
            sendPresence(
                elem: Element | Builder,
                callback?: (elem: Element) => unknown,
                errback?: (elem: Element) => unknown,
                timeout?: number,
            ): string;

            /** Function: sendIQ
             *  Helper function to send IQ stanzas.
             *
             *  Parameters:
             *    @param elem - T XMLElement ashe stanza to send.
             *    @param callback - The callback function for a successful request.
             *    @param errback - The callback function for a failed or timed
             *      out request.  On timeout, the stanza will be null.
             *    @param timeout - The time specified in milliseconds for a
             *      timeout to occur.
             *
             *  Returns:
             *    @returns The id used to send the IQ.
             */
            sendIQ(
                elem: Element | Builder,
                callback?: (stanza: Element) => unknown,
                errback?: (stanza: Element) => unknown,
                timeout?: number,
            ): string;

            /** Function: addTimedHandler
             *  Add a timed handler to the connection.
             *
             *  This function adds a timed handler.  The provided handler will
             *  be called every period milliseconds until it returns false,
             *  the connection is terminated, or the handler is removed.  Handlers
             *  that wish to continue being invoked should return true.
             *
             *  Because of method binding it is necessary to save the result of
             *  this function if you wish to remove a handler with
             *  deleteTimedHandler().
             *
             *  Note that user handlers are not active until authentication is
             *  successful.
             *
             *  Parameters:
             *    @param period - The period of the handler.
             *    @param handler - The callback function.
             *
             *  Returns:
             *    @returns A reference to the handler that can be used to remove it.
             */
            addTimedHandler(period: number, handler: () => boolean): TimedHandler;

            /** Function: deleteTimedHandler
             *  Delete a timed handler for a connection.
             *
             *  This function removes a timed handler from the connection.  The
             *  handRef parameter is *not* the function passed to addTimedHandler(),
             *  but is the reference returned from addTimedHandler().
             *
             *  Parameters:
             *    @param handRef - The handler reference.
             */
            deleteTimedHandler(handRef: TimedHandler): void;

            /** Function: addHandler
             *  Add a stanza handler for the connection.
             *
             *  This function adds a stanza handler to the connection.  The
             *  handler callback will be called for any stanza that matches
             *  the parameters.  Note that if multiple parameters are supplied,
             *  they must all match for the handler to be invoked.
             *
             *  The handler will receive the stanza that triggered it as its argument.
             *  *The handler should return true if it is to be invoked again;
             *  returning false will remove the handler after it returns.*
             *
             *  As a convenience, the ns parameters applies to the top level element
             *  and also any of its immediate children.  This is primarily to make
             *  matching /iq/query elements easy.
             *
             *  Options
             *  ~~~~~~~
             *  With the options argument, you can specify boolean flags that affect how
             *  matches are being done.
             *
             *  Currently two flags exist:
             *
             *  - matchBareFromJid:
             *      When set to true, the from parameter and the
             *      from attribute on the stanza will be matched as bare JIDs instead
             *      of full JIDs. To use this, pass {matchBareFromJid: true} as the
             *      value of options. The default value for matchBareFromJid is false.
             *
             *  - ignoreNamespaceFragment:
             *      When set to true, a fragment specified on the stanza's namespace
             *      URL will be ignored when it's matched with the one configured for
             *      the handler.
             *
             *      This means that if you register like this:
             *      >   connection.addHandler(
             *      >       handler,
             *      >       'http://jabber.org/protocol/muc',
             *      >       null, null, null, null,
             *      >       {'ignoreNamespaceFragment': true}
             *      >   );
             *
             *      Then a stanza with XML namespace of
             *      'http://jabber.org/protocol/muc#user' will also be matched. If
             *      'ignoreNamespaceFragment' is false, then only stanzas with
             *      'http://jabber.org/protocol/muc' will be matched.
             *
             *  Deleting the handler
             *  ~~~~~~~~~~~~~~~~~~~~
             *  The return value should be saved if you wish to remove the handler
             *  with deleteHandler().
             *
             *  Parameters:
             *    @param handler - The user callback.
             *    @param ns - The namespace to match.
             *    @param name - The stanza name to match.
             *    @param type - The stanza type (or types if an array) to match.
             *    @param id - The stanza id attribute to match.
             *    @param from - The stanza from attribute to match.
             *    @param options - The handler options
             *
             *  Returns:
             *    @returns A reference to the handler that can be used to remove it.
             */
            addHandler(
                handler: (stanza: Element) => boolean,
                ns: string,
                name: string,
                type?: string | string[],
                id?: string,
                from?: string,
                options?: { matchBareFromJid: boolean; ignoreNamespaceFragment: boolean },
            ): Handler;

            /** Function: deleteHandler
             *  Delete a stanza handler for a connection.
             *
             *  This function removes a stanza handler from the connection.  The
             *  handRef parameter is *not* the function passed to addHandler(),
             *  but is the reference returned from addHandler().
             *
             *  Parameters:
             *    @param handRef - The handler reference.
             */
            deleteHandler(handRef: Handler): void;

            /** Function: registerSASLMechanisms
             *
             * Register the SASL mechanisms which will be supported by this instance of
             * Strophe.Connection (i.e. which this XMPP client will support).
             *
             *  Parameters:
             *    @param mechanisms - Array of objects with Strophe.SASLMechanism prototypes
             */
            registerSASLMechanisms(mechanisms: SASLMechanism[]): void;

            /** Function: registerSASLMechanism
             *
             * Register a single SASL mechanism, to be supported by this client.
             *
             *  Parameters:
             *    @param Mechanism - Constructor for an object with a Strophe.SASLMechanism prototype
             */
            registerSASLMechanism(Mechanism: new() => SASLMechanism): void;

            /** Function: disconnect
             *  Start the graceful disconnection process.
             *
             *  This function starts the disconnection process.  This process starts
             *  by sending unavailable presence and sending BOSH body of type
             *  terminate.  A timeout handler makes sure that disconnection happens
             *  even if the BOSH server does not respond.
             *  If the Connection object isn't connected, at least tries to abort all pending requests
             *  so the connection object won't generate successful requests (which were already opened).
             *
             *  The user supplied connection callback will be notified of the
             *  progress as this process happens.
             *
             *  Parameters:
             *    @param reason - The reason the disconnect is occuring.
             */
            disconnect(reason: string): void;

            /** Function: sortMechanismsByPriority
             *
             *  Sorts an array of objects with prototype SASLMechanism according to
             *  their priorities.
             *
             *  Parameters:
             *    @param mechanisms - Array of SASL mechanisms.
             */
            sortMechanismsByPriority(mechanisms: SASLMechanism[]): SASLMechanism[];

            /** Function: authenticate
             * Set up authentication
             *
             *  Continues the initial connection request by setting up authentication
             *  handlers and starting the authentication process.
             *
             *  SASL authentication will be attempted if available, otherwise
             *  the code will fall back to legacy authentication.
             *
             *  Parameters:
             *    @param matched - Array of SASL mechanisms supported.
             */
            authenticate(matched: SASLMechanism[]): void;

            /** Function: bind
             *
             *  Sends an IQ to the XMPP server to bind a JID resource for this session.
             *
             *  https://tools.ietf.org/html/rfc6120#section-7.5
             *
             *  If `explicitResourceBinding` was set to a truthy value in the options
             *  passed to the Strophe.Connection constructor, then this function needs
             *  to be called explicitly by the client author.
             *
             *  Otherwise, it'll be called automatically as soon as the XMPP server
             *  advertises the "urn:ietf:params:xml:ns:xmpp-bind" stream feature.
             */
            bind(): void;

            /** Function: setProtocol
             *  Select protocol based on this.options or this.service
             */
            setProtocol(): void;
        }

        /** Class: Strophe.WebSocket
         *  _Private_ helper class that handles WebSocket Connections
         *
         *  The Strophe.WebSocket class is used internally by Strophe.Connection
         *  to encapsulate WebSocket sessions. It is not meant to be used from user's code.
         */
        class Websocket {
            /** PrivateConstructor: Strophe.Websocket
             *  Create and initialize a Strophe.WebSocket object.
             *  Currently only sets the connection Object.
             *
             *  Parameters:
             *    @param connection - The Strophe.Connection that will use WebSockets.
             *
             *  Returns:
             *    @returns A new Strophe.WebSocket object.
             */
            constructor(connection: Connection);

            /** PrivateFunction: _connect
             *  _Private_ function called by Strophe.Connection.connect
             *
             *  Creates a WebSocket for a connection and assigns Callbacks to it.
             *  Does nothing if there already is a WebSocket.
             */
            _connect(): void;
        }

        /** Class: Strophe.Bosh
         *  _Private_ helper class that handles BOSH Connections
         *
         *  The Strophe.Bosh class is used internally by Strophe.Connection
         *  to encapsulate BOSH sessions. It is not meant to be used from user's code.
         */
        class Bosh {
            /** PrivateConstructor: Strophe.Bosh
             *  Create and initialize a Strophe.Bosh object.
             *
             *  Parameters:
             *    @param connection connection - The Strophe.Connection that will use BOSH.
             *
             *  Returns:
             *    @returns A new Strophe.Bosh object.
             */
            constructor(connection: Connection);

            /** PrivateFunction: _connect
             *  _Private_ function that initializes the BOSH connection.
             *
             *  Creates and sends the Request that initializes the BOSH connection.
             *
             * @param wait - The optional HTTPBIND wait value.  This is the
             *      time the server will wait before returning an empty result for
             *      a request.  The default setting of 60 seconds is recommended.
             * @param hold - The optional HTTPBIND hold value.  This is the
             *      number of connections the server will hold at one time.  This
             *      should almost always be set to 1 (the default).
             * @param route - The optional route value.
             */
            private _connect(wait?: number, hold?: number, route?: string);
        }

        /** Interface: Strophe.SASLMechanism
         *
         *  encapsulates SASL authentication mechanisms.
         *
         *  User code may override the priority for each mechanism or disable it completely.
         *  See <priority> for information about changing priority and <test> for informatian on
         *  how to disable a mechanism.
         *
         *  By default, all mechanisms are enabled and the priorities are
         *
         *  SCRAM-SHA1 - 40
         *  DIGEST-MD5 - 30
         *  Plain - 20
         */
        interface SASLMechanism {
            /**
             *  Function: test
             *  Checks if mechanism able to run.
             *  To disable a mechanism, make this return false;
             *
             *  To disable plain authentication run
             *  > Strophe.SASLPlain.test = function() {
             *  >   return false;
             *  > }
             *
             *  See <SASL mechanisms> for a list of available mechanisms.
             *
             *  Parameters:
             *    (Strophe.Connection) connection - Target Connection.
             *
             *  Returns:
             *  @returns (Boolean) If mechanism was able to run.
             */
            test(connection: Connection): boolean;

            /** Variable: priority
             *  Determines which <SASLMechanism> is chosen for authentication (Higher is better).
             *  Users may override this to prioritize mechanisms differently.
             *
             *  In the default configuration the priorities are
             *
             *  SCRAM-SHA1 - 40
             *  DIGEST-MD5 - 30
             *  Plain - 20
             *
             *  Example: (This will cause Strophe to choose the mechanism that the server sent first)
             *
             *  > Strophe.SASLMD5.priority = Strophe.SASLSHA1.priority;
             *
             *  See <SASL mechanisms> for a list of available mechanisms.
             */
            priority: number;
        }

        /** Constants: SASL mechanisms
         *  Available authentication mechanisms
         *
         *  Strophe.SASLAnonymous - SASL Anonymous authentication.
         *  Strophe.SASLPlain - SASL Plain authentication.
         *  Strophe.SASLMD5 - SASL Digest-MD5 authentication
         *  Strophe.SASLSHA1 - SASL SCRAM-SHA1 authentication
         */
        const SASLAnonymous: SASLMechanism;
        const SASLPlain: SASLMechanism;
        const SASLSHA1: SASLMechanism;
        const SASLMD5: SASLMechanism;
    }

    const BOSH_WAIT = 59;
}

declare module "Strophe" {
    export = Strophe;
}

declare module "$build" {
    export = $build;
}

declare module "$msg" {
    export = $msg;
}

declare module "$iq" {
    export = $iq;
}

declare module "$pres" {
    export = $pres;
}
