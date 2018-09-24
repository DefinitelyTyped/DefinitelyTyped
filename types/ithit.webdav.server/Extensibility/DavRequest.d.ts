/// <reference types="node" />
/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IncomingMessage } from "http";
import { IDictionary } from "typescript-dotnet-commonjs/System/Collections/Dictionaries/IDictionary";
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { DavEngine } from "../DavEngine";
import { Depth } from "../Impl/Util/Depth";
import { Range } from "../Impl/Util/Range";
/**
 * Represents an incoming HTTP request.
 * @remarks
 * @param
 * {@link ClientLockTokens}  property provides access to the lock tokens send by WebDAV client.
 * Before modifying locked WebDAV Class 2 server items you must check if client provided necessary lock token.
 * @param
 * Usually you do not have to implement this class if you host your server in ASP.NET/IIS or in
 * HttpListener as there are overloaded constructors of {@link DavContextBase}  optimized for OWIN,
 * for ASP.NET/IIS and for HttpListener.
 * You can derive your class from this class if you host your server in any other environment
 * and pass it to {@link DavContextBase} constructor.
 */
export declare class DavRequest extends IncomingMessage {
    /**
     * Gets information about the URL of the current request.
     * @value  Url, like /somefolder/?query
     */
    readonly RawUrl: string;
    /**
     * Gets concatenated request scheme, host and port, like: http://www.ithit.com:8080
     * @value Concatenated scheme, host and port.
     */
    readonly UrlPrefix: string;
    /**
     * Gets virtual application root path on the server.
     * @value The virtual path of the current application.
     */
    readonly ApplicationPath: string;
    /**
     * Gets the HTTP method specified by the client.
     * @value A String that contains the method used in the request.
     */
    readonly HttpMethod: string;
    /**
     * Gets a collection of HTTP headers.
     * @value A NameValueCollection of headers.
     */
    readonly Headers: IDictionary<string, string>;
    /**
     * Gets the MIME content type of the incoming request.
     * @value A string representing the MIME content type of the incoming request, for example, "text/html".
     */
    /**
     * Gets the character set of the entity-body.
     * @value An Encoding object representing the client's character set.
     */
    /**
     * Specifies the length, in bytes, of content sent by the client.
     * @value The length, in bytes, of content sent by the client.
     */
    /**
     * Gets the User-Agent header.
     * @value A string representing User-Agent header.
     */
    readonly UserAgent: string;
    /**
     * Gets a list of lock tokens submitted by client.
     * @value StringCollection object containing collection of lock tokens submitted by client.
     * @remarks ClientLockTokens property provides access to the list of lock tokens
     * submitted by client. These lock tokens were generated during the call to your {@link ILock.LockAsync}
     * method implementation, associated with the item and returned to client.
     * When WebDAV client is modifying any server item it
     * sends back to server the list of lock tokens. In your WebDAV server Class 2
     * implementation before modifying any locked items you must check if WebDAV
     * client provided necessary lock token.
     */
    readonly ClientLockTokens: IList<string>;
    url: string;
    body: Buffer;
    protocol?: string;
    private lockTokens?;
    GetOverwrite(): boolean;
    GetXmlContent(engine: DavEngine): Document | null;
    GetDepth(defaultDepth?: Depth): Depth;
    GetRange(): Range | null;
    getContentRange(): {
        unit: string;
        first: number | null;
        last: number | null;
        length: number | null;
    } | null;
    private TrimToken;
    /**
     * Parse the content-range header.
     *
     * @param {String} str
     * @returns {Object} { unit: 'items', first: 10, last: 29, length: 100 }
     */
    private parseRange;
}
