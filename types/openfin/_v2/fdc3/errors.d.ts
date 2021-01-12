/**
 * @module Errors
 */
/**
 * Errors related to launching or interacting with a particular application.
 */
export declare enum ApplicationError {
    /**
     * Indicates that an application of the provided name could not be found, either running or in the application directory.
     */
    NotFound = "ApplicationError:NotFound",
    /**
     * Indicates that an application could not be started from an OpenFin manifest.
     */
    LaunchError = "ApplicationError:LaunchError",
    /**
     * Indicates that a timeout was reached before the application was started.
     */
    LaunchTimeout = "ApplicationError:LaunchTimeout"
}
/**
 * Error codes relating to the context channel system.
 */
export declare enum ChannelError {
    /**
     * Indicates that a channel of a provided ID does not exist.
     */
    ChannelWithIdDoesNotExist = "ChannelError:ChannelWithIdDoesNotExist"
}
/**
 * Error codes relating to connections to the FDC3 service, from OpenFin windows or otherwise.
 */
export declare enum ConnectionError {
    /**
     * Indicates that no window with a provided OpenFin Identity is registered with the FDC3 service.
     */
    WindowWithIdentityNotFound = "ConnectionError:WindowWithIdentityNotFound"
}
/**
 * Errors related to resolving an application to handle an intent and context.
 */
export declare enum ResolveError {
    /**
     * Indicates that no application could be found to handle the provided intent and context.
     */
    NoAppsFound = "ResolveError:NoAppsFound",
    /**
     * Indicates that a provided application does not handle the provided intent and context.
     */
    AppDoesNotHandleIntent = "ResolveError:AppDoesNotHandleIntent",
    /**
     * Indicates that intent resolution has been cancelled because the user dismissed the intent resolver UI.
     */
    ResolverClosedOrCancelled = "ResolveError:ResolverClosedOrCancelled"
}
/**
 * Errors related to sending a context, possibly as part of an intent, to another application registered with the FDC3 service
 */
export declare enum SendContextError {
    /**
     * Indicates that the target application has no windows that have a relevant handler for the given context.
     */
    NoHandler = "SendContextError:NoHandler",
    /**
     * Indicates that all handlers for the given context threw an error when invoked.
     */
    HandlerError = "SendContextError:HandlerError",
    /**
     * Indicates that all handers for the given context failed to completed before a timeout was reached
     */
    HandlerTimeout = "SendContextError:SendIntentTimeout"
}
/**
 * Class used to hold errors returned by the FDC3 provider. Inherits from the built-in
 * [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) type.
 *
 * Note that not all errors raised by the service will be of type `FDC3Error`. Standard JavaScript error types such as
 * `TypeError` and `Error` can also be thrown by the API.
 */
export declare class FDC3Error extends Error {
    /**
     * A string from one of [[ApplicationError]], [[ChannelError]], [[ConnectionError]], [[ResolveError]] or [[SendContextError]].
     *
     * Future versions of the service may add additional error codes. Applications should allow for the possibility of
     * error codes that do not exist in the above enumerations.
     */
    code: string;
    /**
     * Always `'FDC3Error'`.
     */
    name: string;
    /**
     * Description of the error that occurred.
     *
     * These messages are not intended to be user-friendly, we do not advise displaying them to end users. If
     * error-specific user messaging is required, use [[code]] to determine what message should be displayed.
     */
    message: string;
    constructor(code: string, message: string);
}
