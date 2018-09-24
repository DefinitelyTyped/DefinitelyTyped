import { IEquatable } from "typescript-dotnet-commonjs/System/IEquatable";
/**
 * Describes detail that can be passed to {@link DavException} .
 */
export declare class ErrorDetails implements IEquatable<ErrorDetails> {
    /**If a version-controlled resource is being checked out, it MUST have a DAV:checked-in property */
    static MUST_BE_CHECKED_IN: ErrorDetails;
    /**
     * If a version-controlled resource is being checked out, it MUST have a DAV:checked-out property
     */
    static MUST_BE_CHECKED_OUT: ErrorDetails;
    /**If the request-URL identifies a version history, the request MUST fail. */
    static CANNOT_RENAME_HISTORY: ErrorDetails;
    /**
     * If the request-URL identifies a version
     * history, the request MUST fail. In order to create another
     * version history whose versions have the same content and dead
     * properties, the appropriate sequence of VERSION-CONTROL, CHECKOUT,
     * PUT, PROPPATCH, and CHECKIN requests must be made
     */
    static CANNOT_COPY_HISTORY: ErrorDetails;
    /**The request-URL MUST identify a version-controlled resource with a DAV:checked-out property. */
    static MUST_BE_CHECKED_OUT_VERSION_CONTROLLED_RESOURCE: ErrorDetails;
    /**
     * If the request-URL identifies a
     * checked-out version-controlled resource that will be automatically
     * checked in when the lock is removed, then the versions identified
     * by the DAV:predecessor-set of the checked-out resource MUST be
     * descendants of the root version of the version history for the
     * DAV:checked-out version.
     */
    static VERSION_HISTORY_IS_TREE: ErrorDetails;
    /**
     * If the request-URL
     * identifies a resource with a DAV:checked-in property, the request
     * MUST fail unless DAV:auto-version semantics will automatically
     * check out the resource.
     */
    static CANNOT_MODIFY_VERSION_CONTROLLED_CONTENT: ErrorDetails;
    /**If the request attempts to modify a dead property, same semantics as PUT */
    static CANNOT_MODIFY_VERSION_CONTROLLED_PROPERTY: ErrorDetails;
    /**
     * If the request attempts to access a
     * property defined by this document, the semantics of that property
     * MUST be supported by the server.
     */
    static SUPPORTED_LIVE_PROPERTY: ErrorDetails;
    /**If the request-URL identifies a version, the request MUST fail. */
    static CANNOT_MODIFY_VERSION: ErrorDetails;
    /**If the request-URL identifies a version, the request MUST fail. */
    static CANNOT_RENAME_VERSION: ErrorDetails;
    /**A server MAY fail an attempt to DELETE a version. */
    static NO_VERSION_DELETE: ErrorDetails;
    /**
     * The specified report MUST be supported by
     * the resource identified by the request-URL.
     */
    static SUPPORTED_REPORT: ErrorDetails;
    /**The client attempted to set a protected property in a PROPPATCH (such as DAV:getetag). */
    static CANNOT_MODIFY_PROTECTED_PROPERTY: ErrorDetails;
    /**This server does not allow infinite-depth PROPFIND requests on collections. */
    static PROPFIND_FINITE_DEPTH: ErrorDetails;
    /**
     * The server received an otherwise-valid MOVE or COPY request, but
     * cannot maintain the live properties with the same behavior at the destination. It may be that
     * the server only supports some live properties in some parts of the repository, or simply has an
     * internal error.
     */
    static PRESERVED_LIVE_PROPERTIES: ErrorDetails;
    /**
     * A LOCK request failed due the presence of an already existing conflicting lock. Note that a
     * lock can be in conflict although the resource to which the request was directed is only
     * indirectly locked. In this case, the precondition code can be used to inform the client about
     * the resource that is the root of the conflicting lock, avoiding a separate lookup of the
     * "lockdiscovery" property.
     */
    static NO_CONFLICTING_LOCK: ErrorDetails;
    /**
     * The request could not succeed because a lock token should have been submitted. This
     * element, if present, MUST contain at least one URL of a locked resource that prevented the
     * request. In cases of MOVE, COPY, and DELETE where collection locks are involved, it can
     * be difficult for the client to find out which locked resource made the request fail -- but the
     * server is only responsible for returning one such locked resource. The server MAY return
     * every locked resource that prevented the request from succeeding if it knows them all.
     */
    static LOCK_TOKEN_SUBMITTED: ErrorDetails;
    /**
     * A request may include a Lock-Token header to identify a lock for the
     * UNLOCK method. However, if the Request-URI does not fall within the scope of the lock
     * identified by the token, the server SHOULD use this error. The lock may have a scope that
     * does not include the Request-URI, or the lock could have disappeared, or the token may be
     * invalid.
     */
    static LOCK_TOKEN_MATCHES_REQUEST_URI: ErrorDetails;
    /**
     * If the server rejects a client request because the request body contains an
     * external entity, the server SHOULD use this error.
     */
    static NO_EXTERNAL_ENTITIES: ErrorDetails;
    /**
     * The number of matching principals must fall within
     * server-specific, predefined limits. For example, this condition might be triggered if a search specification
     * would cause the return of an extremely large number of responses.
     */
    static NUMBER_OF_MATCHES_WITHIN_LIMITS: ErrorDetails;
    /**Gets element namespace. */
    Namespace: string;
    /**Gets element name. */
    Name: string;
    /**
     * Initializes a new instance of the ErrorDetails struct.
     * @param namespace Element namespace.
     * @param name Element name.
     */
    constructor(namespace: string, name: string);
    /**
     * Indicates whether the current object is equal to another object of the same type.
     * @returns true if the current object is equal to the @paramref other  parameter; otherwise, false.
     * @param other An object to compare with this object.
     */
    equals(other: ErrorDetails): boolean;
    /**
     * Returns the hash code for this instance.
     * @returns
     * A 32-bit signed integer that is the hash code for this instance.
     * @filterpriority  2
     */
    GetHashCode(): number;
}
