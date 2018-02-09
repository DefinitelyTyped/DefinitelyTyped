import * as Podium from "podium";
import {ApplicationState, Json, Lifecycle, PluginsStates, ResponseEvents, ResponseSettings, ServerStateCookieOptions, Util} from "hapi";

/**
 * Object where:
 *  * append - if true, the value is appended to any existing header value using separator. Defaults to false.
 *  * separator - string used as separator when appending to an existing value. Defaults to ','.
 *  * override - if false, the header value is not set if an existing value present. Defaults to true.
 *  * duplicate - if false, the header value is not modified if the provided value is already included. Does not apply when append is false or if the name is 'set-cookie'. Defaults to true.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseheadername-value-options)
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#response-object)
 */
export interface ResponseObjectHeaderOptions {
    append?: boolean;
    separator?: string;
    override?: boolean;
    duplicate?: boolean;
}

/**
 * The response object contains the request response value along with various HTTP headers and flags. When a lifecycle
 * method returns a value, the value is wrapped in a response object along with some default flags (e.g. 200 status
 * code). In order to customize a response before it is returned, the h.response() method is provided.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#response-object)
 * TODO, check extending from Podium is correct.  Extending because of "The response object supports the following events" [See docs](https://hapijs.com/api/17.0.1#-responseevents)
 */
export interface ResponseObject extends Podium {

    /**
     * Default value: {}.
     * Application-specific state. Provides a safe place to store application data without potential conflicts with the framework. Should not be used by plugins which should use plugins[name].
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseapp)
     */
    app: ApplicationState;

    /**
     * Access: read only and the public podium interface.
     * The response.events object supports the following events:
     * * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
     * * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
     * [See docs](https://hapijs.com/api/17.0.1#-responseevents)
     */
    readonly events: ResponseEvents;

    /**
     * Default value: {}.
     * An object containing the response headers where each key is a header field name and the value is the string header value or array of string.
     * Note that this is an incomplete list of headers to be included with the response. Additional headers will be added once the response is prepared for transmission.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseheaders)
     */
    readonly headers: Util.Dictionary<string | string[]>;

    /**
     * Default value: {}.
     * Plugin-specific state. Provides a place to store and pass request-level plugin data. plugins is an object where each key is a plugin name and the value is the state.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseplugins)
     */
    plugins: PluginsStates;

    /**
     * Object containing the response handling flags.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsesettings)
     */
    readonly settings: ResponseSettings;

    /**
     * The raw value returned by the lifecycle method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsesource)
     */
    readonly source: Lifecycle.ReturnValue;

    /**
     * Default value: 200.
     * The HTTP response status code.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsestatuscode)
     */
    readonly statusCode: number;

    /**
     * A string indicating the type of source with available values:
     * * 'plain' - a plain response such as string, number, null, or simple object.
     * * 'buffer' - a Buffer.
     * * 'stream' - a Stream.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsevariety)
     */
    readonly variety: 'plain' | 'buffer' | 'stream';

    /**
     * Sets the HTTP 'Content-Length' header (to avoid chunked transfer encoding) where:
     * @param length - the header value. Must match the actual payload size.
     * @return Return value: the current response object.
     * [See docs](https://hapijs.com/api/17.0.1#-responsebyteslength)
     */
    bytes(length: number): ResponseObject;

    /**
     * Sets the 'Content-Type' HTTP header 'charset' property where:
     * @param charset - the charset property value.
     * @return Return value: the current response object.
     * [See docs](https://hapijs.com/api/17.0.1#-responsecharsetcharset)
     */
    charset(charset: string): ResponseObject;

    /**
     * Sets the 'Content-Type' HTTP header 'charset' property where:
     * $param charset - the charset property value.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsecodestatuscode)
     */
    code(statusCode: number): ResponseObject;

    /**
     * Sets the HTTP status message where:
     * @param httpMessage - the HTTP status message (e.g. 'Ok' for status code 200).
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsemessagehttpmessage)
     */
    message(httpMessage: string): ResponseObject;

    /**
     * Sets the HTTP status code to Created (201) and the HTTP 'Location' header where:
     * @param uri - an absolute or relative URI used as the 'Location' header value.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsecreateduri)
     */
    created(uri: string): ResponseObject;

    /**
     * Sets the string encoding scheme used to serial data into the HTTP payload where:
     * @param encoding  the encoding property value (see node Buffer encoding [See docs](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings)).
     *  * 'ascii' - for 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.
     *  * 'utf8' - Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
     *  * 'utf16le' - 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.
     *  * 'ucs2' - Alias of 'utf16le'.
     *  * 'base64' - Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC4648, Section 5.
     *  * 'latin1' - A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes).
     *  * 'binary' - Alias for 'latin1'.
     *  * 'hex' - Encode each byte as two hexadecimal characters.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseencodingencoding)
     */
    encoding(encoding: 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'latin1' | 'binary' | 'hex'): ResponseObject;

    /**
     * Sets the representation entity tag where:
     * @param tag - the entity tag string without the double-quote.
     * @param options - (optional) settings where:
     *  * weak - if true, the tag will be prefixed with the 'W/' weak signifier. Weak tags will fail to match identical tags for the purpose of determining 304 response status. Defaults to false.
     *  * vary - if true and content encoding is set or applied to the response (e.g 'gzip' or 'deflate'), the encoding name will be automatically added to the tag at transmission time (separated by a '-' character). Ignored when weak is true. Defaults to true.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseetagtag-options)
     */
    etag(tag: string, options?: {weak: boolean, vary: boolean}): ResponseObject;

    /**
     * Sets an HTTP header where:
     * @param name - the header name.
     * @param value - the header value.
     * @param options - (optional) object where:
     *  * append - if true, the value is appended to any existing header value using separator. Defaults to false.
     *  * separator - string used as separator when appending to an existing value. Defaults to ','.
     *  * override - if false, the header value is not set if an existing value present. Defaults to true.
     *  * duplicate - if false, the header value is not modified if the provided value is already included. Does not apply when append is false or if the name is 'set-cookie'. Defaults to true.
     *  @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseheadername-value-options)
     */
    header(name: string, value: string, options?: ResponseObjectHeaderOptions): ResponseObject;

    /**
     * Sets the HTTP 'Location' header where:
     * @param uri - an absolute or relative URI used as the 'Location' header value.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responselocationuri)
     */
    location(uri: string): ResponseObject;

    /**
     * Sets an HTTP redirection response (302) and decorates the response with additional methods, where:
     * @param uri - an absolute or relative URI used to redirect the client to another resource.
     * @return Return value: the current response object.
     * Decorates the response object with the response.temporary(), response.permanent(), and response.rewritable() methods to easily change the default redirection code (302).
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseredirecturi)
     */
    redirect(uri: string): ResponseObject;

    /**
     * Sets the JSON.stringify() replacer argument where:
     * @param method - the replacer function or array. Defaults to none.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsereplacermethod)
     */
    replacer(method: Json.StringifyReplacer): ResponseObject;

    /**
     * Sets the JSON.stringify() space argument where:
     * @param count - the number of spaces to indent nested object keys. Defaults to no indentation.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsespacescount)
     */
    spaces(count: number): ResponseObject;

    /**
     * Sets an HTTP cookie where:
     * @param name - the cookie name.
     * @param value - the cookie value. If no options.encoding is defined, must be a string. See server.state() for supported encoding values.
     * @param options - (optional) configuration. If the state was previously registered with the server using server.state(), the specified keys in options are merged with the default server definition.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsestatename-value-options)
     */
    state(name: string, value: object, options?: ServerStateCookieOptions): ResponseObject;

    /**
     * Sets a string suffix when the response is process via JSON.stringify() where:
     * @param suffix - the string suffix.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsesuffixsuffix)
     */
    suffix(suffix: string): ResponseObject;

    /**
     * Overrides the default route cache expiration rule for this response instance where:
     * @param msec - the time-to-live value in milliseconds.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsettlmsec)
     */
    ttl(msec: number): ResponseObject;

    /**
     * Sets the HTTP 'Content-Type' header where:
     * @param mimeType - is the mime type.
     * @return Return value: the current response object.
     * Should only be used to override the built-in default for each response type.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsetypemimetype)
     */
    type(mimeType: string): ResponseObject;

    /**
     * Clears the HTTP cookie by setting an expired value where:
     * @param name - the cookie name.
     * @param options - (optional) configuration for expiring cookie. If the state was previously registered with the server using server.state(), the specified options are merged with the server definition.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responseunstatename-options)
     */
    unstate(name: string, options?: ServerStateCookieOptions): ResponseObject;

    /**
     * Adds the provided header to the list of inputs affected the response generation via the HTTP 'Vary' header where:
     * @param header - the HTTP request header name.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsevaryheader)
     */
    vary(header: string): ResponseObject;

    /**
     * Marks the response object as a takeover response.
     * @return Return value: the current response object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsetakeover)
     */
    takeover(): ResponseObject;

    /**
     * Sets the status code to 302 or 307 (based on the response.rewritable() setting) where:
     * @param isTemporary - if false, sets status to permanent. Defaults to true.
     * @return Return value: the current response object.
     * Only available after calling the response.redirect() method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsetemporaryistemporary)
     */
    temporary(isTemporary: boolean): ResponseObject;

    /**
     * Sets the status code to 301 or 308 (based on the response.rewritable() setting) where:
     * @param isPermanent - if false, sets status to temporary. Defaults to true.
     * @return Return value: the current response object.
     * Only available after calling the response.redirect() method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responsepermanentispermanent)
     */
    permanent(isPermanent: boolean): ResponseObject;

    /**
     * Sets the status code to 301/302 for rewritable (allows changing the request method from 'POST' to 'GET') or 307/308 for non-rewritable (does not allow changing the request method from 'POST' to 'GET'). Exact code based on the response.temporary() or response.permanent() setting. Arguments:
     * @param isRewritable - if false, sets to non-rewritable. Defaults to true.
     * @return Return value: the current response object.
     * Only available after calling the response.redirect() method.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-responserewritableisrewritable)
     */
    rewritable(isRewritable: boolean): ResponseObject;

}
