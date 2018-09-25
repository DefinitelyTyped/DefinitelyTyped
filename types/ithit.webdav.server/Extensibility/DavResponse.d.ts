/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/// <reference types="node" />
import { OutgoingHttpHeaders, ServerResponse } from "http";
/**
 * Represents HTTP response.
 * @remarks Usually you do not have to implement this interfaces if you host your server in ASP.NET/IIS or
 * in HttpListener as {@link DavContextBase} provides overloaded constructors optimized
 * for OWIN, for ASP.NET/IIS and for HttpListener.
 * You can implement this interface if you host your server  in any other environment
 * and pass it to {@link DavContextBase} constructor.
 */
export declare class DavResponse {
    /**
     * Sets the HTTP MIME type of the output stream.
     * @value The HTTP MIME type of the output stream.
     */
    ContentType: string;
    statusCode: number;
    writable: boolean;
    statusMessage: string;
    /**
     * Sets the HTTP character set of the output stream.
     * @value A Encoding object containing information about the character set of the current response.
     */
    ContentEncoding: BufferEncoding;
    /**
     * Sets the content length of the output stream.
     * @value The value of the response's Content-Length header.
     */
    ContentLength: number;
    /**
     * Gets a valus indicating whether client is still connected.
     * @remarks Most probably this property will be refreshed only when some data fails to send to client.
     */
    readonly IsClientConnected: boolean;
    nativeResponce: ServerResponse;
    writeHead(statusCode: number, reasonPhrase?: string, headers?: OutgoingHttpHeaders): void;
    end(cb?: () => void): void;
    write(chunk: any, encoding?: string, cb?: (error: Error | null | undefined) => void): boolean;
    constructor(res: ServerResponse);
    setHeader(name: string, value: number | string | string[]): void;
    /**
     * Adds the specified header and value to the HTTP headers for this response.
     * @param name The name of the HTTP header to set.
     * @param value The value for the name header.
     */
    AddHeader(name: string, value: string): void;
    /**
     * Clears all content output from the buffer stream.
     */
    Clear(): void;
}
