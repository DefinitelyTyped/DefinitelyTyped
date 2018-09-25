/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { Exception } from "typescript-dotnet-commonjs/System/Exception";
import { DavEngine } from "./DavEngine";
import { DavStatus } from "./DavStatus";
import { DavRequest } from "./Extensibility/DavRequest";
import { DavResponse } from "./Extensibility/DavResponse";
/**
 * Serves as the abstract base class for WebDAV context.
 * @remarks Context holds request, response and provides item factory method {@link DavContextBase.GetHierarchyItemAsync} .
 * @remarks When you inherit from WebDAV Context class, you must override {@link DavContextBase.GetHierarchyItemAsync}  method.
 * In this method you will search for file, folder, version or history item in your storage by path provided
 * and return it to WebDAV engine.
 * @remarks In each HTTP request you will create separate instance of your class derived
 * from WebDAV Context with one of its overloaded constructors and pass it to {@link DavEngine.RunAsync}
 * @remarks You can implement your own request and response classes to run the Engine in virtually any hosting environment.
 * @threadsafety Instance members of this class are not thread safe.
 * You must create a separate instance of {@link DavContextBase}  class for each request.
 */
export declare abstract class DavContextBase {
    /**
     * Exception which occurred during request execution.
     * @remarks This can be either exception raised by your implementation or exception
     * raised be engine internally. In your {@link DavContextBase.BeforeResponseAsync}  implementation you will use it to see
     * if processing was successful or not and to commit or rollback a transaction.
     * @remarks This exception will be sent to client.
     */
    Exception: Exception;
    /**
     * Object representing current request.
     * @remarks
     * This may not be necesserily the request that was passed to the constructor because
     * engine may wraps the request and response.
     */
    Request: DavRequest;
    /**
     * Object representing current response.
     * @remarks
     * This may not be necesserily the response that was passed to the constructor because
     * engine may wrap the request and response.
     */
    Response: DavResponse;
    /**
     * Instance of DavEngine which is currently executing the request.
     */
    Engine: DavEngine;
    private beforeResponseWasCalled;
    /**
     * Initializes a new instance of the WebDAV context. Initializes {@link DavRequest} and {@link DavResponse} properties.
     * @param request {@link DavRequest}  implementation.
     * @param response {@link DavResponse}  implementation.
     */
    constructor(request: DavRequest, response: DavResponse);
    /**
     * This method is called right before engine starts writing response.
     * @remarks Specifically this method is called when the request is parsed, engine has
     * called all methods which shall change state of an item and is ready to
     * start writing response.
     * @remarks However methods of interfaces which read data may also be called after this method.
     * @remarks This method can be overriden to either commit or rollback transaction.
     * @remarks In your implementation of {@link IMethodHandler} you need to call {@link DavContextBase.EnsureBeforeResponseWasCalledAsync}
     * instead of this method to avoid double execution.
     */
    BeforeResponse(): void;
    /**
     * Calls {@link DavContextBase.BeforeResponseAsync} only first time this method is invoked.
     */
    EnsureBeforeResponseWasCalled(): void;
    /**
     * May be overriden to localize HTTP status message.
     * @param status Status to be localized.
     * @returns Localized status which will be written to the response.
     */
    LocalizeSatus(status: DavStatus): DavStatus;
    /**
     * Implementation of this abstract method is used by WebDAV engine to find hierarchy item objects by path.
     * @param path Path of the hierarchy item object.
     * It is always the full path from the root of the WebDAV repository.
     * @returns Hierarchy item object referenced by the specified path or null if hierarchy item not found.
     * @remarks When you inherit from the WebDAV Context class, you must override this abstract method.
     * For WebDAV Class 1 and Class 2 server in this method implementation you will search for file or folder in
     * your storage by path provided and return it to WebDAV engine.
     * For DeltaV server in addition to folder or file item you will return version and history items.
     */
    abstract GetHierarchyItem(path: string): Promise<any>;
    SetStatus(status: DavStatus): void;
}
