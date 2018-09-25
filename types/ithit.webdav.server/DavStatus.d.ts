/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IEquatable } from "typescript-dotnet-commonjs/System/IEquatable";
/**Represents HTTP status code with description. */
export declare class DavStatus implements IEquatable<DavStatus> {
    /**Formats status as HTTP string. */
    readonly HttpString: string;
    /**
     * Successful result.
     */
    static readonly OK: DavStatus;
    /**The request requires user authentication. */
    static readonly UNAUTHORIZED: DavStatus;
    /**The request could not be completed due to a conflict with the current state of the resource. */
    static readonly CONFLICT: DavStatus;
    /**The request has been fulfilled and resulted in a new resource being created. */
    static readonly CREATED: DavStatus;
    /**
     * This status code means that the method could
     * not be performed on the resource because the requested action
     * depended on another action and that action failed.  For example, if a
     * command in a PROPPATCH method fails, then, at minimum, the rest of
     * the commands will also fail with 424 (Failed Dependency).
     */
    static readonly FAILED_DEPENDENCY: DavStatus;
    /**
     * This status code means the source or destination resource
     * of a method is locked.
     */
    static readonly LOCKED: DavStatus;
    /**
     * The server has fulfilled the request but does not need to return an entity-body, and might want to return
     * updated metainformation.
     */
    static readonly NO_CONTENT: DavStatus;
    /**The method specified in the Request-Line is not allowed for the resource identified by the Request-URI. */
    static NOT_ALLOWED: DavStatus;
    /**
     * The precondition given in one or more of the request-header fields evaluated to false when it was tested on
     * the server.
     */
    static PRECONDITION_FAILED: DavStatus;
    /**The server encountered an unexpected condition which prevented it from fulfilling the request.  */
    static INTERNAL_ERROR: DavStatus;
    /**The request could not be understood by the server due to malformed syntax. */
    static BAD_REQUEST: DavStatus;
    /**
     * The 207 (Multi-Status) status code provides status for multiple
     * independent operations.
     */
    static MULTISTATUS: DavStatus;
    /**The server has not found anything matching the Request-URI. */
    static NOT_FOUND: DavStatus;
    /**
     * If the client has performed a conditional GET request and access is allowed, but the document has not been
     * modified, the server SHOULD respond with this status code.
     */
    static NOT_MODIFIED: DavStatus;
    /**The server has fulfilled the partial GET request for the resource. */
    static PARTIAL_CONTENT: DavStatus;
    /**The server understood the request, but is refusing to fulfill it. */
    static FORBIDDEN: DavStatus;
    /**
     * The server does not support the functionality required to fulfill the request. This is the appropriate
     * response when the server does not recognize the request method and is not capable of supporting it for any
     * resource.
     */
    static NOT_IMPLEMENTED: DavStatus;
    /**
     * The server is refusing to service the request because the entity of the request is in a format not
     * supported by the requested resource for the requested method.
     */
    static UNSUPPORTED_MEDIA_TYPE: DavStatus;
    /**
     * The requested resource resides permanently under a different URI.
     * @remarks  The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. Clients with link editing capabilities ought to automatically re-link references to the Request-URI to one or more of the new references returned by the server, where possible. This response is cacheable unless indicated otherwise.
     */
    static MOVED_PERMANENTLY: DavStatus;
    /**The requested resource resides temporarily under a different URI. */
    static FOUND: DavStatus;
    /**
     * The 507 (Insufficient Storage) status code means the method could not
     * be performed on the resource because the server is unable to store
     * the representation needed to successfully complete the request.
     */
    static INSUFFICIENT_STORAGE: DavStatus;
    /**HTTP status code. */
    Code: number;
    /**Status description. */
    Description: string;
    /**
     * Equality operator.
     * @param left Left operand.
     * @param right Right operand.
     * @returns true if two objects are equal.
     */
    static Equality(left: DavStatus, right: DavStatus): boolean;
    /**
     * Unequality operator.
     * @param left Left operand.
     * @param right Right operand.
     * @returns  @c  true if two objects are not equal.
     */
    static Unequality(left: DavStatus, right: DavStatus): boolean;
    /**
     * Initializes a new instance of the DavStatus struct.
     * @param code HTTP status code.
     * @param description Status description.
     */
    constructor(code: number, description: string);
    /**
     * Indicates whether this instance and a specified object are equal.
     * @returns true if obj and this instance are the same type and represent the same value; otherwise, false.
     * @param obj Another object to compare to.
     */
    equals(obj: Object): boolean;
    /**
     * Returns the hash code for this instance.
     * @returns A 32-bit signed integer that is the hash code for this instance.
     */
    GetHashCode(): number;
}
