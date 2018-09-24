/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/// <reference types="node" />
import { IDictionary } from "typescript-dotnet-commonjs/System/Collections/Dictionaries/IDictionary";
import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
import { DavContextBase } from "./DavContextBase";
import { IMethodHandler } from "./Extensibility/IMethodHandler";
import { IOptionsHandler } from "./Extensibility/IOptionsHandler";
import { IPropertyHandler } from "./Extensibility/IPropertyHandler";
import { IReportHandler } from "./Extensibility/IReportHandler";
import { IHierarchyItem } from "./IHierarchyItem";
import { ILogger } from "./ILogger";
import { PropertyName } from "./PropertyName";
/**
 * The DavEngine class provides the core implementation for WebDAV engine.
 * @desc
 * Engine parses XML send by WebDAV client, processes requests making calls to your implementations of
 * WebDAV interfaces ({@link IHierarchyItem} , {@link IFolder}, {@link IFile}  and other)
 * and finally generates XML response.
 * @desc
 * In each HTTP request you will create separate instance of your class derived
 * from {@link DavContextBase}  class and pass it to the {@link DavEngine.RunAsync}  method. Via the context, engine
 * receives all necessary information about hosting environment.
 * @desc
 * You must set {@link License}  property before you can use the engine.
 * @desc
 * All updates invoked within one request execution shall be inside one transactions.
 * Transaction can be committed or rollbacked in {@link DavContextBase.BeforeResponseAsync}  method, which
 * is called right before starting sending response to client.
 * After this method is called, no methods of interfaces which update state will be called. However methods
 * which read state can be called.
 * @threadsafety  Method {@link DavEngine.RunAsync}  is threadsafe. All other members are not threadsafe.
 * You can create a single instance of DavEngine, initialize it onces and use to serve all requests
 * from different threads.
 */
export declare class DavEngine {
    methodHandlers: IDictionary<string, IMethodHandler>;
    propertyHandlers: IPropertyHandler[];
    /**
     * Gets or sets the license text.
     * @value License string.
     */
    License: string;
    /**
     * Indicates if response content length is calculated. Default is true.
     * @value Boolean value indicating if content length will be calculated in {@link DavEngine.RunAsync} method. Default is true.
     * @remarks If this property is set to true engine will calculate output content length and set {@link DavResponse.ContentLength}  property before returning from {@link RunAsync} method.
     * If you would like to send chunked responses you must set this property to false.
     * @remarks ASP.NET will send chunked responses only to GET verb if HttpContext.Current.Response.BufferOutput = false and request is HTTP 1.1. Responses to all
     * other verbs will not be chunked.
     * @remarks To send chunked responses from HttpListener you must set this property to false and set HttpListenerContext.Response.SendChunked = true. If SendChunked=false and
     * CalculateContentLength=false than HttpListener will not send any response because the content length will be unknown.
     * @remarks Responses must not include both Content-Length header and Transfer-Encoding: chunked
     * header. If server is sending chunked response client application will not be able to detect content length.
     * Downloading a large file using download manager client will not be able to see the entire content length
     * and evaluate time required for download.
     */
    CalculateContentLength: boolean;
    /**
     * Enables or disables CORS.
     * @remarks If this property is set to * CORS will be enabled for in all domains. In this case, if the Origin request header is available
     * the Engine will extract the value of the Origin header and set the Access-Control-Allow-Origin header to the value of the Origin header.
     * If Origin header is not available the Access-Control-Allow-Origin header will be set to '*'.
     * @remarks To enable CORS for a specific domain set this property to the name of the of the domain. To disable CORS set this property to null or empty string.
     * @remarks If CORS is enabled Access-Control headers are included in all responses.
     * @value Domain for which CORS is enabled. Null or empty string if CORS is disabled. Default is * - CORS is enabled for all domains.
     */
    CorsAllowedFor: string;
    /**
     * Determines if placing file under version control is automatic.
     * @value Boolean value indicating if items must be put under version control before content or properties
     * update. Default is true.
     * @remarks Determines whether items will be placed under version control automatically
     * or explicit request from client shall be made to put an item under version control.
     * @remarks If this property is true the {@link IVersionableItemAsync.PutUnderVersionControlAsync} will be called
     * after item is created and prior item content or properties update.
     */
    AutoPutUnderVersionControl: boolean;
    /**
     * Gets or sets the HTTP character set of the output stream. Default is UTF-8.
     * @value A Encoding object that contains information about the character set of the response.
     * Default is UTF-8.
     */
    ContentEncoding: BufferEncoding;
    /**
     * Specifies whether engine shall use full or relative urls. Default is true.
     * @remarks By default full urls are used.
     */
    UseFullUris: boolean;
    /**
     * ILogger instance which engine will use for logging.
     * @remarks By default this is {@link DefaultLoggerImpl} .
     */
    Logger: ILogger;
    /**
     * Specifies whether XML written to the output will be formatted. Default is @b  false.
     */
    OutputXmlFormatting: boolean;
    AllowOffice12Versioning: boolean;
    /**
     * If item is not null and item implements {@link IDisposable} calls
     * {@link IDisposable.Dispose} wrapped in try-catch block.
     * @param item Item that can optionally implement {@link IDisposable}.
     */
    static DisposeSafe(item: IHierarchyItem): void;
    /**
     * Initializes a new instance of the DavEngine class.
     */
    constructor();
    GetMethodsThatApplyTo(item: IHierarchyItem): string[];
    GetOptionsForItem(item: IHierarchyItem): string[];
    /**
     * Registers custom method handler.
     * @param method HTTP verb.
     * @param handler Custom handled implementing {@link IMethodHandler}  interface.
     * @returns Original handler if any.
     * @remarks Using this method you can register custom method handler to be called by the engine.
     * If the handler for the specified method was already defined it is returned from this method.
     */
    RegisterMethodHandler(method: string, handler: IMethodHandler): IMethodHandler;
    /**
     * Registers custom property handler.
     * @param propName Property name.
     * @param handler Custom handled implementing {@link IPropertyHandler}  interface.
     * @returns Original handler if any.
     * @remarks Property handler allows formatting of property values to XML and reading property values from XML.
     * Using this method you can register custom property handler to be called by the engine.
     * If the handler for the specified property was already defined it is returned from this method.
     * The original handler can be saved and called later from your custom handler.
     */
    RegisterPropertyHandler(propName: string, handler: IPropertyHandler): IPropertyHandler;
    /**
     * Registers custom options handler.
     * @param name Token that will be added to 'DAV' header for OPTIONS response.
     * @param handler Custom handled implementing {@link IOptionsHandler}  interface.
     * @returns Original handler if any.
     * @remarks Using this method you can register custom options handler to be called by the engine.
     * If the handler for the specified token was already defined it is returned from this method.
     * The original handler can be saved and called later from your custom handler.
     */
    RegisterOptionsHandler(name: string, handler: IOptionsHandler): IOptionsHandler;
    /**
     * Registers custom report handler.
     * @param name Report element name.
     * @param namespace Report namespace.
     * @param handler Custom handled implementing {@link IReportHandler}  interface.
     * @returns Original handler if any.
     * @remarks Using this method you can register custom report handler to be called by the engine.
     * If the handler for the specified token was already defined it is returned from this method.
     * The original handler can be saved and called later from your custom handler.
     */
    RegisterReportHandler(name: string, namespace: string, handler: IReportHandler): IReportHandler;
    /**
     * Processes WebDAV request and generates WebDAV response.
     * @param context Instance of your context class derived from {@link DavContextBase}  class.
     * @desc
     * You must call Run method in each request to your WebDAV server passing your context class derived from {@link DavContextBase} as input parameter.
     */
    Run(context: DavContextBase): Promise<void>;
    GetAllProp(): PropertyName[];
    checkLicense(context: DavContextBase): Promise<void>;
    GetPropertiesForItem(item: IHierarchyItem): IEnumerable<PropertyName>;
    private initPropertyHandlers;
    /**
     * Sets 301 Moved Permanently in case of requests to '/.well-known/caldav'
     * or '/.well-known/carddav' url.
     * @remarks
     * Gives a chance for the user to return hierarchy item that coresponds to
     * well-known requests to CalDAV and CardDAV servers.
     * @returns  Boolean value indicating if this is a well known request.
     * @remarks
     * http://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml
     * http://tools.ietf.org/html/rfc5785
     * http://tools.ietf.org/html/rfc6764
     */
    private ProcessWellKnownRequest;
}
