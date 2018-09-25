/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { DavContextBase } from "../DavContextBase";
import { IHierarchyItem } from "../IHierarchyItem";
/**
 * Represents HTTP method handler.
 * @desc
 * The IT Hit WebDAV Server Engine allows creating custom HTTP handlers and replacing original engine handlers.
 * To add or replace handler call {@link DavEngine.RegisterMethodHandler} method passing HTTP method
 * name and object instance implementing. The original handler, if any,
 * is returned from {@link DavEngine.RegisterMethodHandler} method.
 * @desc
 * The {@link IMethodHandler.ProcessRequest} method of this interface is called by the engine during {@link DavEngine.Run} call.
 * The hierarchy item returned from {@link DavContextBase.GetHierarchyItem}  is passed to ProcessRequest
 * method as a parameter.
 * @remarks
 * The handler must call {@link DavContextBase.BeforeResponse}  when all update methods have been called and
 * the handler is about
 * to start writing response.
 */
export interface IMethodHandler {
    /**
     * Determines whether engine can buffer content to calculate content length.
     * @returns Boolean indicating whether content shall be buffered to calculated content length.
     * Engine will look at this property only if {@link DavEngine.CalculateContentLength}  is true.
     */
    EnableOutputBuffering: boolean;
    /**
     * Determines whether output produces by this handler shall be logged if debug logging is enabled.
     * @returns Boolean indicating whether output shall be logged in debug mode.
     */
    EnableOutputDebugLogging: boolean;
    /**
     * Determines whether input read by this handler shall be logged if debug logging is enabled.
     * @returns Boolean indicating whether input shall be logged in debug mode.
     */
    EnableInputDebugLogging: boolean;
    /**
     * Enables processing of HTTP Web requests by a custom handler.
     * @param context Instance of your context class derived from {@link DavContextBase} class.
     * @param item Hierarchy item returned from {@link DavContextBase.GetHierarchyItem} or null.
     * @remarks  The {@link IMethodHandler.ProcessRequest}  method is called by the engine during {@link DavEngine.Run}
     * call. The hierarchy item returned from {@link DavContextBase.GetHierarchyItem}  is
     * passed to this method.  If {@link DavContextBase.GetHierarchyItem}  returns null the null is passed.
     */
    processRequest(context: DavContextBase, item: IHierarchyItem): void;
    /**
     * Determines whether this method shall be enlisted in 'supported-method-set' for item .
     * @param item Hierarchy item returned from {@link DavContextBase.GetHierarchyItem} or null.
     * @returns {boolean} indicating whether this handler implementation can handle request for the item.
     */
    appliesTo(item: IHierarchyItem): boolean;
}
