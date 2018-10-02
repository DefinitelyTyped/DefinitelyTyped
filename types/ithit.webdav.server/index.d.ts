// Type definitions for ithit.webdav.server 1.0
// Project: https://www.webdavsystem.com/nodejsserver/
// Definitions by: ITHit, LTD <https://github.com/ITHit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
declare module "Impl/ArgumentUtil" {
    /**Utility to check arguments. */
    export class ArgumentUtil {
        /**
         * Checks that argument is not null.
         * @param obj Argument to check.
         * @param paramName Argument name.
         */
        static CheckArgumentNotNull(obj: Object, paramName: string): void;
        /**
         * Checks argument for certain condition.
         * @param b Condition result.
         * @param s Argument name.
         */
        static CheckArgument(b: boolean, s: string): void;
    }
}
declare module "DavStatus" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IEquatable } from "typescript-dotnet-commonjs/System/IEquatable";
    /**Represents HTTP status code with description. */
    export class DavStatus implements IEquatable<DavStatus> {
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
}
declare module "ErrorDetails" {
    import { IEquatable } from "typescript-dotnet-commonjs/System/IEquatable";
    /**
     * Describes detail that can be passed to {@link DavException} .
     */
    export class ErrorDetails implements IEquatable<ErrorDetails> {
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
}
declare module "Impl/SharingConstants" {
    /**
     * WebDAV constants
     */
    export namespace Sharing {
        class Constants {
            static CalendarServer: string;
        }
        class XmlElements {
            static SET: string;
            static REMOVE: string;
            static COMMONNAME: string;
            static SUMMARY: string;
            static READ: string;
            static READWRITE: string;
            static CAN_BE_SHARED: string;
            static CAN_BE_PUBLISHED: string;
            static USER: string;
            static ACCESS: string;
            static SHARED_OWNER: string;
            static SHARED: string;
        }
    }
}
declare module "Impl/WebdavConstants" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    /**
    * WebDAV constants
    */
    export class Constants {
        static readonly DAV: string;
        static readonly Z: string;
        static readonly CalDAV: string;
        static readonly CardDAV: string;
        static readonly OPAQUE_SCHEME: string;
    }
    export class XmlElements {
        static readonly LOCKROOT: string;
        static readonly ACTIVELOCK: string;
        static readonly ALLPROP: string;
        static readonly COLLECTION: string;
        static readonly DEPTH: string;
        static readonly EXCLUSIVE: string;
        static readonly ERROR: string;
        static readonly HREF: string;
        static readonly LOCKENTRY: string;
        static readonly LOCKSCOPE: string;
        static readonly LOCKTOKEN: string;
        static readonly LOCKTYPE: string;
        static readonly MULTISTATUS: string;
        static readonly OWNER: string;
        static readonly PROP: string;
        static readonly PROPFIND: string;
        static readonly PROPNAME: string;
        static readonly PROPSTAT: string;
        static readonly REPORT: string;
        static readonly RESPONSE: string;
        static readonly RESPONSEDESCRIPTION: string;
        static readonly SHARED: string;
        static readonly STATUS: string;
        static readonly TIMEOUT: string;
        static readonly VERSIONHISTORY: string;
        static readonly PRINCIPAL: string;
        static readonly WRITE: string;
        static readonly LIMIT: string;
        static readonly ORDERBY: string;
        static readonly ORDER: string;
        static readonly PAGING_NAMESPACE: string;
        static readonly PAGING_NAMESPACE_URL: string;
        static readonly PAGING_TOTAL: string;
    }
    /**
     * WebDAV Live Properties
     */
    export class PropertyNames {
        static readonly CREATIONDATE: string;
        static readonly DISPLAYNAME: string;
        static readonly GETCONTENTLENGTH: string;
        static readonly GETCONTENTTYPE: string;
        static readonly GETLASTMODIFIED: string;
        static readonly LOCKDISCOVERY: string;
        static readonly RESOURCETYPE: string;
        static readonly SUPPORTEDLOCK: string;
        static readonly GETETAG: string;
        static readonly QUOTA_USED_BYTES: string;
        static readonly QUOTA_AVAILABLE_BYTES: string;
        static readonly ISCOLLECTION: string;
        static readonly ISFOLDER: string;
        static readonly ISHIDDEN: string;
        static readonly WIN32FILEATTRIBUTES: string;
        static readonly CALENDAR: string;
        static readonly SCHEDULE_OUTBOX: string;
        static readonly SCHEDULE_INBOX: string;
        static readonly ADDRESSBOOK: string;
    }
    /**
     * WebDAV Limit Properties
     */
    export class PropertyLimit {
        static readonly OFFSET: string;
        static readonly NRESULTS: string;
    }
    export class Headers {
        static readonly ACCEPT_RANGES: string;
        static readonly CACHE_CONTROL: string;
        static readonly IF_MODIFIED_SINCE: string;
        static readonly IF_UNMODIFIED_SINCE: string;
        static readonly IF_NONE_MATCH: string;
        static readonly IF_MATCH: string;
        static readonly IF_RANGE: string;
        static readonly IF: string;
        static readonly LOCK_TOKEN: string;
        static readonly RANGE: string;
        static readonly TIMEOUT: string;
        static readonly LOCATION: string;
    }
    export class Depth {
        static readonly INFINITY: string;
    }
}
declare module "PropertyName" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IEquatable } from "typescript-dotnet-commonjs/System/IEquatable";
    /**Describes property name. */
    export class PropertyName implements IEquatable<PropertyName> {
        static nsDav: string;
        static nsCalDav: string;
        static nsCalendarServer: string;
        static nsCardDav: string;
        static RESOURCE_TYPE: PropertyName;
        static SUPPORTED_LOCK: PropertyName;
        /**
         * Refers to {@link IVersion.VersionName} .
         */
        static readonly VERSION_NAME: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetAclAsync} {@link IAclHierarchyItemAsync.SetAclAsync} .
         */
        static readonly ACL: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetAclRestrictionsAsync} .
         */
        static readonly ACL_RESTRICTIONS: PropertyName;
        /**Is not supported. */
        static readonly ALTERNATE_URI_SET: PropertyName;
        /**
         * Refers to {@link IContent.Etag} .
         */
        static readonly GETETAG: PropertyName;
        /**
         * Refers to {@link IDeltaVItemAsync.GetCommentAsync} .
         */
        static readonly COMMENT: PropertyName;
        /**
         * Refers to {@link IHierarchyItem.Created} .
         */
        static readonly CREATIONDATE: PropertyName;
        /**
         * Refers to {@link IDeltaVItemAsync.GetCreatorDisplayNameAsync} .
         */
        static readonly CREATOR_DISPLAYNAME: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetCurrentUserPrivilegeSetAsync} .
         */
        static readonly CURRENT_USER_PRIVILEGE_SET: PropertyName;
        /**Not currently implemented. */
        static readonly DISPLAYNAME: PropertyName;
        /**Not currently implemented. */
        static readonly GETCONTENTLANGUAGE: PropertyName;
        /**
         * Refers to {@link IContent.ContentLength} .
         */
        static readonly GETCONTENTLENGTH: PropertyName;
        /**
         * Refers to {@link IContent.ContentType} .
         */
        static readonly GETCONTENTTYPE: PropertyName;
        /**
         * Refers to {@link IHierarchyItem.Modified} .
         */
        static readonly GETLASTMODIFIED: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetGroupAsync} .
         */
        static readonly GROUP: PropertyName;
        /**
         * Refers to {@link IPrincipalAsync.GetGroupMembersAsync} .
         */
        static readonly GROUP_MEMBER_SET: PropertyName;
        /**
         * Refers to {@link IPrincipalAsync.GetGroupMembershipAsync} .
         */
        static readonly GROUP_MEMBERSHIP: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetInheritedAclSetAsync} .
         */
        static readonly INHERITED_ACL_SET: PropertyName;
        /**
         * Refers to {@link ILockAsync.GetActiveLocksAsync} .
         */
        static readonly LOCKDISCOVERY: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetOwnerAsync} .
         */
        static readonly OWNER: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetPrincipalCollectionSetAsync} .
         */
        static readonly PRINCIPAL_COLLECTION_SET: PropertyName;
        /**
         * Is not directly supported. Is the same as {@link IHierarchyItem.Path} .
         */
        static readonly PRINCIPAL_URL: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetSupportedPrivilegeSetAsync} .
         */
        static readonly SUPPORTED_PRIVILEDGE_SET: PropertyName;
        protected static readonly SUPPORTED_CALENDAR_COMPONENT_SET: PropertyName;
        protected static readonly CALENDAR_DESCRIPTION: PropertyName;
        protected static readonly CALENDAR_MAX_RESOURCE_SIZE: PropertyName;
        protected static readonly CALENDAR_MAX_INSTANCES: PropertyName;
        protected static readonly CALENDAR_MAX_ATTENDESS_PER_INSTANCE: PropertyName;
        protected static readonly CALENDAR_MAX_DATE_TIME: PropertyName;
        protected static readonly CALENDAR_MIN_DATE_TIME: PropertyName;
        protected static readonly CALENDAR_HOME_SET: PropertyName;
        protected static readonly CALENDAR_DATA: PropertyName;
        static readonly GETCTAG: PropertyName;
        protected static readonly CALENDAR_USER_ADDRESS_SET: PropertyName;
        protected static readonly SCHEDULE_OUTBOX_URL: PropertyName;
        protected static readonly SCHEDULE_INBOX_URL: PropertyName;
        protected static readonly ALLOWED_SHARING_MODES: PropertyName;
        protected static readonly INVITE: PropertyName;
        protected static readonly ADDRESSBOOK_HOME_SET: PropertyName;
        protected static readonly ADDRESS_DATA: PropertyName;
        /**
         * Refers to {@link IVersionableItemAsync.GetAutoVersionAsync}
         */
        static readonly AUTO_VERSION: PropertyName;
        protected static readonly CHECKED_IN: PropertyName;
        protected static readonly CHECKED_OUT: PropertyName;
        protected static readonly SUCCESSOR_SET: PropertyName;
        protected static readonly PREDECESSOR_SET: PropertyName;
        protected static readonly CHECKOUT_SET: PropertyName;
        protected static readonly SUPPORTED_REPORT_SET: PropertyName;
        protected static readonly SUPPORTED_METHOD_SET: PropertyName;
        protected static readonly SUPPORTED_LIVE_PROPERTY_SET: PropertyName;
        protected static readonly VERSION_SET: PropertyName;
        protected static readonly ROOT_VERSION: PropertyName;
        /**
         * Refers to {@link IVersionableItemAsync.VersionHistory}
         */
        static readonly VERSION_HISTORY: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetSupportedPrivilegeSetAsync}
         */
        static readonly SUPPORTED_PRIVILEGE_SET: PropertyName;
        /**
         * Refers to {@link IAclHierarchyItemAsync.GetCurrentUserPrincipalAsync} .
         */
        static readonly CURRENT_USER_PRINCIPAL: PropertyName;
        /**
         * Refers to {@link IQuotaAsync.GetUsedBytesAsync()} .
         */
        static readonly QUOTA_USED_BYTES: PropertyName;
        /**
         * Refers to {@link IQuotaAsync.GetAvailableBytesAsync()} .
         */
        static readonly QUOTA_AVAILABLE_BYTES: PropertyName;
        /**Property namespace. */
        Namespace: string;
        /**Property local name. */
        Name: string;
        /**
         * Unequality operator.
         * @param name1 First name.
         * @param name2 Second name.
         * @returns true if property names are not equal.
         */
        static Operator(name1: PropertyName, name2: PropertyName): boolean;
        /**
         * Initializes new instance.
         * @param name Property local name.
         * @param propNamespace Property namespace.
         */
        constructor(name?: string, propNamespace?: string | null);
        /**
         * Returns property name as string.
         * @returns String representation.
         */
        ToString(): string;
        /**
         * Determines if two property names are equal.
         * @param obj {@link PropertyName}  to compare to.
         * @returns  @c  true if property names are equal.
         */
        equals(obj: Object): boolean;
        /**
         * Returns the hash code for this instance.
         * @returns A 32-bit signed integer that is the hash code for this instance.
         */
        GetHashCode(): number;
    }
}
declare module "IItemCollection" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyName } from "PropertyName";
    /**
     * Base interface for folders.
     * @remarks Base interface for all kinds of folders ({@link IFolder} , {@link IPrincipalFolderAsync}  etc.).
     * In addition to methods and properties provided by {@link IHierarchyItem}  interface this interface also provides {@link IItemCollection.GetChildrenAsync}  method to list all children of this folder.
     */
    export interface IItemCollection extends IHierarchyItem {
        /**
         * Gets direct children of this folder.
         * @param propNames List of properties requested by the client.
         * @returns {@link IEnumerable{T}}  with {@link IHierarchyItem}  items. Each item is a file or folder item.
         */
        GetChildren(propNames: IList<PropertyName>): Promise<IEnumerable<IHierarchyItem>>;
    }
}
declare module "PropertyValue" {
    import { PropertyName } from "PropertyName";
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    /**
     * Describes one property associated with hierarchy item object.
     */
    export class PropertyValue {
        /**
         * Name of the property
         */
        private _QualifiedName;
        /**
         * The value of the property
         */
        private _Value;
        /**
         * Initializes new instance.
         * @param name Property name.
         * @param value Property value.
         */
        constructor(name?: PropertyName, value?: string);
        Value: String;
        QualifiedName: PropertyName;
    }
}
declare module "IHierarchyItem" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { IItemCollection } from "IItemCollection";
    import { PropertyName } from "PropertyName";
    import { PropertyValue } from "PropertyValue";
    /**
     * Represents one item (file, folder) in the WebDAV repository.
     * @remarks Defines the properties and methods common to all WebDAV folders and files. {@link IHierarchyItem.Created}  and {@link IHierarchyItem.Modified}  properties must return Universal Coordinated Time (UTC).
     * {@link IHierarchyItem.GetProperties(IList<PropertyName>, bool)}  and {@link IHierarchyItem.UpdateProperties(IList<PropertyValue>,IList<PropertyName>, MultistatusException)}  are called when WebDAV client is reading, adding,
     * updating or deleting properties.  This interface also provides methods for managing hierarchy: moving, copying
     * and deleting WebDAV items.  See {@link IHierarchyItem.CopyTo(IItemCollection, string, bool, MultistatusException)} , {@link IHierarchyItem.MoveTo(IItemCollection, string, MultistatusException)}  and {@link IHierarchyItem.Delete(MultistatusException)}  methods.
     * Your file items must implement {@link IFile}  interface, folder items - {@link IFolder}  interface.
     */
    export interface IHierarchyItem {
        /**
         * Gets the name of the item in repository.
         */
        Name: string;
        /**
         * Gets the creation date of the item in repository expressed as the coordinated universal time (UTC).
         */
        Created: Date;
        /**
         * Gets the last modification date of the item in repository expressed as the coordinated universal time (UTC).
         * @remarks Value of this property must change only when content of the item changes. It must not change when item is locked or
         * unlocked or properties modified. In particular Mac OS relies on such behavior.
         */
        Modified: Date;
        /**
         * Unique item path in the repository relative to storage root.
         * @remarks The URL returned by this property is relative to storage root.
         * If your server root is located at http://example.webdavsystem.com:8080/myserver/ and the item URL is
         * http://example.webdavsystem.com:8080/myserver/myfolder/myitem.doc this property implementation must
         * return myfolder/myitem.doc. To calculate the entire item URL the engine will
         * call {@link DavRequest.ApplicationPath}  property and attach it to url returned by {@link Path}  property.
         * @remarks
         * Every part of the path (between '/' characters) shall be encoded,
         * @property String representing relative item path in the repository.
         */
        Path: string;
        /**
         * Creates a copy of this item with a new name in the destination folder.
         * @param destFolder Destination folder.
         * @param destName Name of the destination item.
         * @param deep Indicates whether to copy entire subtree.
         * @param multistatus If some items fail to copy but operation in whole shall be continued,
         * add information about the error into @paramref multistatus  using
         * {@link MultistatusException.AddInnerException(string, DavException)} .
         * @exception LockedException Destination item was locked and client did not provide
         * lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occured during processing of item in the subtree and
         * whole operation shall be aborted.
         * @exception DavException In other cases.
         * Possible status value is {@link DavStatus.CONFLICT}  if destination folder doesn't exist.
         * @remarks If error occurred while copying file located in a subtree, the server
         * should try to continue copy operation and copy all other items. In this case
         * you must add that error @paramref multistatus  container.
         * @remarks A CopyTo method invocation must not copy any locks active on the source item.
         * However, if this method copies the item into a folder that has a deep lock,
         * then the destination item must be added to the lock.
         */
        CopyTo(destFolder: IItemCollection, destName: string, deep: boolean, multistatus: Error): void;
        /**
         * Moves this item to the destination folder under a new name.
         * @param destFolder Destination folder.
         * @param destName Name of the destination item.
         * @param multistatus If some items fail to copy but operation in whole shall be continued, add
         * information about the error into @paramref multistatus using
         * {@link MultistatusException.AddInnerException(string,DavException)} .
         * @exception LockedException The source or the destination item was locked and client did not provide
         * lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occured during processing of item in the subtree and
         * whole operation shall be aborted.
         * @exception DavException In other cases.
         * Possible status value is {@link DavStatus.CONFLICT}  if destination folder doesn't exist.
         * @remarks If the item is locked the server must not move any locks with the item. However, items must be added to an
         * existing lock at the destination.
         */
        MoveTo(destFolder: IItemCollection, destName: string, multistatus: Error): void;
        /**
         * Deletes this item.
         * @param multistatus If some items fail to delete but operation in whole shall be continued, add
         * information about the error into @paramref multistatus  using
         * {@link MultistatusException.AddInnerException(string,DavException)} .
         * @exception LockedException This item or its parent was locked and client did not provide lock
         * token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occured during processing of item in the subtree
         * and whole operation shall be aborted.
         * @exception DavException In other cases.
         * Possible status value is {@link DavStatus.CONFLICT}  if destination folder doesn't exist.
         */
        Delete(multistatus: Error): void;
        /**
         * Gets values of all properties or selected properties for this item.
         * @param props {@link IEnumerable<T>}  with property names which values are requested by WebDAV client.
         * If a property does not exist for this hierarchy item then the property value shall not be returned.
         * @param allprop If it is true it means that besides properties listed in @paramref props  you need to
         * return all properties you think may be useful to client.
         * @returns Enumerable with property values.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetProperties(props: IList<PropertyName>, allprop: boolean): IEnumerable<PropertyValue>;
        /**
         * Gets names of all properties for this item.
         * @returns Enumerable with available property names.
         * @remarks  Most WebDAV clients never request list of property names, so your implementation can just return
         * empty enumerable.
         */
        GetPropertyNames(): IEnumerable<PropertyName>;
        /**
         * Adds, modifies and removes properties for this item.
         * @param setProps List of properties to be set.
         * @param delProps List of property names to be removed. Properties that don't exist shall be skipped.
         * @param multistatus The standard requires this operation to be transactional.
         * If some properties fail to update but there is no possibility to rollback the transaction
         * in {@link DavContextBase.BeforeResponse} , add
         * information about the error into @paramref multistatus
         * using {@link MultistatusException.AddInnerException(string,PropertyName,DavException)} .
         * In this case engine will report correct statuses for all properties at least
         * (although this is against standard).
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception LockedException This item was locked and client did not provide lock token.
         * @exception MultistatusException The exception shall contain statuses for all properties that failed to update.
         * Typical property error statuses:
         * + {@link DavStatus.CONFLICT}  - the client has provided a value whose semantics are not appropriate for the property, this includes trying to set read-only properties.
         * + {@link DavStatus.FAILED_DEPENDENCY}  - indicates this action would have succeeded if it were not for the conflict with updating/removing some other property.
         * @exception DavException In other cases.
         * @remarks In your {@link IHierarchyItem.UpdateProperties}  implementation you will create,
         * modify and delete item properties.
         * Single property update request may invoke following methods of single item which update properties:
         * +  {@link IAclHierarchyItem.SetOwner(IPrincipal)}
         * +  {@link IAclHierarchyItem.SetGroup(IPrincipal)}
         * +  {@link IVersionableItem.SetAutoVersion(AutoVersion)}
         * +  {@link IDeltaVItem.SetComment(string)}
         * +  {@link IDeltaVItem.SetCreatorDisplayName(string)}
         * +  {@link IPrincipal.SetGroupMembers(IList{IPrincipal})}
         * +  {@link IHierarchyItem.UpdateProperties(IList<PropertyValue>, IList<PropertyName>, MultistatusException)}
         * Engine will update properties (call these methods) one by one unless exception is thrown.
         * If an exception is thrown during a property update engine will report all remaining properties
         * as failed with status {@link DavStatus.FAILED_DEPENDENCY}
         * @remarks The standard requires that request which updates properties is atomic (PROPPATCH).
         * If your storage supports transactions then atomicity requirement can be implemented
         * by committing or rollbacking the transaction in {@link DavContextBase.BeforeResponse} .
         */
        UpdateProperties(setProps: IList<PropertyValue>, delProps: IList<PropertyName>, multistatus: Error): void;
    }
}
declare module "DavException" {
    import { Exception } from "typescript-dotnet-commonjs/System/Exception";
    import { DavContextBase } from "DavContextBase";
    import { DavStatus } from "DavStatus";
    import { ErrorDetails } from "ErrorDetails";
    import { IHierarchyItem } from "IHierarchyItem";
    /**
     * Exception which can be thrown by WebDAV interface implementations.
     * @remarks
     * There are some other exceptions derived from this one which contain specific
     * fields, like {@link NeedPrivilegesException}.
     */
    export class DavException extends Exception {
        code: DavStatus;
        /**
         * Contains XML element name and namespace which will be written to the response body.
         * It provides more information about error which can be interpreted by clients.
         */
        ErrorDetails?: ErrorDetails;
        /**HTTP status code and description that will be sent to client. */
        Code: DavStatus;
        /**
         * Initializes a new instance of the {@link DavException} class with a specified error message,
         * description, status code and a reference to the inner exception that is the cause of this exception.
         * @param message The message that describes the error.
         * @param status {@link DavStatus} instance that descrives the error.
         * @param innerException The exception that is the cause of the current exception,
         * or a null reference (Nothing in Visual Basic) if no inner exception is specified.
         * @param errorDetails XML element name and namespace which provides more specific information about
         * error.
         */
        constructor(message: string, innerException?: Exception, status?: DavStatus, errorDetails?: ErrorDetails);
        /**
         * Writes exception to the output writer.
         * @param context Instance of {@link DavContextBase}.
         * @param item Instance of {@link IHierarchyItem}.
         * @param renderContent Some methods, like "HEAD" forbid any content in response, this parameter will
         * be false in this
         * case and nothing shall be written in the response.
         * @remarks Full response shall be formed, including HTTP status and headers.
         */
        Render(context: DavContextBase, item: IHierarchyItem, renderContent: boolean): void;
        /**
         * Writes exception as part of MultistatusException.
         * @param writer {@link XmlWriter} to which to write exception.
         * @param context Instance of {@link DavContextBase} .
         * @remarks Only body shall be written. Text in {@link Exception.message}
         * shall be omitted because it will be written as part of {@link MultistatusException} exception.
         */
        RenderInline(writer: any, context: DavContextBase): void;
        /**
         * Determines whether two errors for different properties for the same item
         * can be grouped into one as part of Multistatus response.
         * @remarks This method shall return true if both exceptions would produce the same output in @see Render
         * method not taking into account property name.
         * @param other Exception to test.
         * @returns true if exceptions can be reported as one.
         */
        CanGroupWith(other: DavException): boolean;
    }
}
declare module "Extensibility/IMethodHandler" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
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
}
declare module "Extensibility/IOptionsHandler" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IHierarchyItem } from "IHierarchyItem";
    /**
     * Provides point of extension to OPTIONS request.
     * @remarks If you need to implement your own extension to WebDAV and add token to DAV header in OPTIONS response,
     * implement this interface and register it with {@link DavEngine.RegisterOptionsHandler}  method
     * passing token as first argument to it.
     * When building DAV header engine will call all registered options handlers to determine if this particular
     * options is available for the item.
     */
    export interface IOptionsHandler {
        /**
         * The method is called to determine if the option is available for the item and shall be
         * enlisted in DAV header for OPTIONS response.
         * @param item Item for which request is made.
         * @returns true if option token shall be enlisted.
         */
        AppliesTo(item: IHierarchyItem): boolean;
    }
}
declare module "Extensibility/IPropertyHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    /**
     * Provides point of extension to PROPFIND, PROPPATCH requests.
     * @remarks If you need to implement your own live property,
     * implement this interface and register it with {@link DavEngine.RegisterPropertyHandler}  method.
     * Engine will call this handler when it needs to read/write the property.
     */
    export interface IPropertyHandler {
        /**
         * Gets a value indicating whether the property is readonly and cannot be updated.
         */
        IsReadonly: boolean;
        /**
         * Gets a value indicating whether the property shall be included in 'allprop' response.
         */
        IncludeInAllProp: boolean;
        /**
         * Writes property value to xml writer.
         * @param writer {@link XmlWriter} to which to write property value.
         * @param item Item for which to retrieve property.
         * @param context Context.
         * @remarks Property writer shall retrieve and validate all values first and only then write anything to writer.
         * Otherwise exception may be thrown while retrieving properties and output XML will be broken.
         */
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        /**
         * Updates value of property.
         * @param context Context.
         * @param item Item in which to update property.
         * @param value Xml with property value.
         */
        Update(context: DavContextBase, item: IHierarchyItem, value: Element): void;
        /**
         * Determines whether this property can be set/retrieved form an item.
         * @param item Item to determine whether property applies to it.
         * @returns true if the property applies to the item.
         */
        AppliesTo(item: IHierarchyItem): boolean;
    }
}
declare module "Extensibility/IReportHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    /**
     * Provides point of extension to REPORT requests.
     * @remarks If you need to implement your own report,
     * implement this interface and register it with {@link DavEngine.RegisterReportHandler}  method.
     * Engine will call this handler when it needs to execute a report.
     */
    export interface IReportHandler {
        /**
         * Determines whether this report can be executed for an item.
         * @param item Item to determine whether the report applies to it.
         * @returns true if the report applies to the item.
         */
        AppliesTo(item: IHierarchyItem): boolean;
        /**
         * Generates report response.
         * @param context Context.
         * @param item Item for which request is sent.
         * @param reportElement Root request XML element.
         */
        HandleReportAsync(context: DavContextBase, item: IHierarchyItem, reportElement: string): Promise<any>;
    }
}
declare module "LogFlagsEnum" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    /**
     * Logging options.
     */
    export enum LogFlagsEnum {
        /**
         * If this flag is set the GET response body will be logged.
         * @remarks The body of the GET response may be very large and often not human readable.
         * @remarks It make sense to enable GET body logging for CalDAV and CardDAV servers and disable in other cases.
         */
        LogGetResponseBody = 1,
        /**
         * If this flag is set the PUT request body will be logged.
         * @remarks The body of the PUT request may be very large and often not human readable.
         * @remarks It make sense to enable PUT body logging for CalDAV and CardDAV servers and disable in other cases.
         */
        LogPutRequestBody = 2
    }
}
declare module "ILogger" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { Exception } from "typescript-dotnet-commonjs/System/Exception";
    import { LogFlagsEnum } from "LogFlagsEnum";
    /**
     * Engine uses this interface to perform logging.
     */
    export interface ILogger {
        /**
         * Determines whether debug mode is enabled.
         */
        IsDebugEnabled: boolean;
        /**
         * Logging flags.
         * @remarks By default Engine does not log GET response body and PUT request body.
         */
        LogFlags: LogFlagsEnum;
        /**
         * Logs message in debug mode.
         * @param message Message to be logged.
         */
        LogDebug(message: string): void;
        /**
         * Logs message in error mode.
         * @param message Message to be logged.
         * @param exception Exception to be logged.
         */
        LogError(message: string, exception?: Exception): void;
    }
}
declare module "IContent" {
    import { IncomingMessage, ServerResponse } from "http";
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    /**
     * Base interface for items that have content, like {@link IFile}.
     */
    export interface IContent {
        /**
         * Gets the media type of the file.
         * The mime-type provided by this property is returned in a Content-Type header with GET request.
         * When deciding which action to perform when downloading a file some WebDAV clients and browsers
         * (such as Internet Explorer) rely on file extension, while others (such as Firefox) rely on Content-Type
         * header returned by server. For identical behavior in all browsers and WebDAV clients your server must
         * return a correct mime-type with a requested file.
         * @returns {string} The MIME type of the file.
         */
        readonly ContentType: string;
        /**
         * Gets the size of the file content in bytes.
         * @returns {number}  Length of the file content in bytes.
         */
        readonly ContentLength: number;
        /**
         * Gets entity tag - string that identifies current state of resource's content.
         * More information about etags is available here: http://en.wikipedia.org/wiki/HTTP_ETag
         * You can return here either cheksum or hash or counter which increases with every modification.
         * This property shall return different value if content changes.
         * @returns {string} null to indicate that server doesn't support etags.
         */
        readonly Etag: string;
        /**
         * Reads the file content from the repository and writes it to the specified stream.
         * By default ASP.NET buffers content on server side before sending output. You must turn off buffering to
         * eliminate keeping entire file content in memory before sending:
         * Client application can request only a part of a file specifying @b  Range header. Download managers
         * may use this header to download single file using several threads at a time.
         * @param output Output stream.
         * @param startIndex The zero-bazed byte offset in file content at which to begin copying bytes to
         * the output stream.
         * @param count The number of bytes to be written to the output stream.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        Read(output: ServerResponse, startIndex: number, count: number): Promise<void>;
        /**
         * Saves the content of the file from the specified stream to the WebDAV repository.
         * @param content Stream to read the content of the file from.
         * @param contentType Indicates the media type of the file.
         * @param startIndex Start offset to which content shall be saved.
         * @param totalFileSize Entire length of the file. Is is not less then length of @paramref content  stream.
         * @returns Boolean value indicating whether entire stream was written. This value is used by engine to take decision whether autocheckin shall be performed.
         * @exception LockedException The file was locked and client did not provide lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception DavException In other cases.
         * @desc  IIS and ASP.NET does not support files upload larger than 2Gb. If you need to upload files larger
         * than 2Gb you must develop HttpListener-based WebDAV server or implement resumable upload interfaces.
         * If you are creating HttpHandler-based WebDAV server you must specify the file
         * maximum upload size in web.config of your web application. By default maximum
         * upload size is set to 4096 KB (4 MB) by ASP.NET. This limit is used to
         * prevent denial of service attacks caused by users posting large files to the
         * server. To increase the upload limit add &lt;httpRuntime&gt; section to your web application web.config
         * file and specify the limit in kilobytes
         * @desc When client uploads file to IIS, ASP.NET first creates the file in a the temporary upload directory.
         * Only when the entire file is uploaded to server you can read its content from stream. By default ASP.NET
         * uploads files to @b  %FrameworkInstallLocation%\Temporary ASP.NET Files folder.
         * You must make sure you have enough disk space to keep temporary files uploaded to your server.
         * To change this folder location add the following section to your web.config file
         * @desc To avoid temporary file creation and pass content directly to engine set the {@link ResumableUpload.PutUploadProgressAndResumeModule}
         * module in your web.config file. Unlike IIS/ASP.NET, HttpListener-based server does not create any
         * temporary files when handling uploads.
         */
        write(content: IncomingMessage, contentType: string, startIndex: number, totalFileSize: number): Promise<boolean>;
    }
}
declare module "Impl/Util/HeaderUtil" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { DavContextBase } from "DavContextBase";
    import { DavStatus } from "DavStatus";
    import { IHierarchyItem } from "IHierarchyItem";
    export class HeaderUtil {
        static WriteEtag(context: DavContextBase, item: IHierarchyItem): void;
        static WriteLastModified(context: DavContextBase, item: IHierarchyItem): void;
        static trimChar(str: string, charToRemove: string): string;
        static IfNoneMatches(item: IHierarchyItem, ifNotMatch: string): boolean;
        static IfMatches(item: IHierarchyItem, ifMatch: string): boolean;
        static IfHeader(item: IHierarchyItem, ifMatch: string): boolean;
        static ProcessIfHeaders(context: DavContextBase, item: IHierarchyItem, ifNoneMatchStatus: DavStatus): boolean;
    }
}
declare module "Impl/Util/Range" {
    export class Range {
        private _start;
        private _end;
        Start: number;
        End: number;
    }
}
declare module "DeltaV/AutoVersion" {
    /**
     * Auto versioning modes supported by item to be used with versioning unaware clients.
     * @remarks This enumeration determines how engine responds to WebDAV client requests that attempt to modify
     * checked-in items content or properties. Each item that support versioning can function in one of the following
     * auto-versioning modes:
     * @remarks NoAutoVersioning Mode.
     * In this mode item must be checked-out before modifications. Clients that does not support DeltaV will not be
     * able to modify checked-in items.
     * @remarks CheckOutCheckIn Mode.
     * In this mode any WebDAV client applications will be able to modify checked-in items on server. Potentially many
     * versions may be created. Workflow for versioning-unaware WebDAV client:
     * @list number
     * 1. Lock request (optional).
     * 2. Modification request:
     * + Auto check-out performed.
     * + Modifications performed.
     * + Auto check-in performed.
     * + Unlock request (optional).
     * @remarks CheckOutUnlockedCheckIn Mode.
     * In this mode any WebDAV client applications will be able to modify checked-in items on server. If WebDAV client
     * locks the item prior to update, the item will be checked in during unlock. This mode reduces the number of
     * versions created by versioning unaware clients. The item is never left checked-out. This mode is recommended if
     * you need to support both Class 1 and Class 2 WebDAV clients. Workflow for versioning-unaware WebDAV client:
     * 1. Lock request (optional).
     * 2. Modification request:
     * + Auto check-out performed.
     * + Modifications performed.
     * + Auto check-in performed if item not locked.
     * + Unlock request (optional).
     * + Check-in performed.
     * + Unlock performed.
     * @remarks CheckOut Mode.
     * In this mode any WebDAV client applications will be able to modify checked-in items on server. If the item
     * was not locked before the update it will be left in checked-out state after modifications. Workflow for
     * versioning-unaware WebDAV client:
     * 1. Lock request (optional).
     * 2. Modification request:
     * + Auto check-out performed.
     * + Modifications performed.
     * + Unlock request (optional).
     * + Check-in performed.
     * + Unlock performed.
     * @remarks LockedCheckOut Mode.
     * Only WebDAV client applications that lock item before the update will be able to modify checked-in item.
     * This mode minimizes amount of versions created by versioning unaware clients. Class 1 WebDAV applications will
     * not be able to modify checked-in items. Workflow for versioning-unaware WebDAV client:
     * 1. Lock request (required).
     * 2. Modification request:
     * + Auto check-out performed.
     * + Modifications performed.
     * + Unlock request (required).
     * + Check-in performed.
     * + Unlock performed.
     */
    export enum AutoVersion {
        /**
         * Auto versioning is not supported for checked-in items. Modification requests of versioning unaware clients
         * will fail if item was not checked-out.
         */
        NoAutoVersioning = 0,
        /**
         * Before any item modification (such as changing content or properties)
         * by versioning unaware client engine will call {@link IVersionableItem.CheckOut}. After the item is
         * modified {@link IVersionableItem.CheckIn} will be called.
         * @remarks This potentially can create a lot of versions.
         */
        CheckOutCheckIn = 1,
        /**
         * If client tries to modify checked-in item, engine will automatically call
         * {@link IVersionableItem.CheckOut}. If item is not locked engine
         * will call {@link IVersionableItem.CheckIn} when modification completes.
         * @remarks If item is locked, {@link IVersionableItem.CheckIn} will be called before the
         * {@link ILock.Unlock}. If lock expires you must check-in item manually.
         */
        CheckOutUnlockedCheckIn = 2,
        /**
         * If client tries to modify checked-in item, engine will automatically call
         * {@link IVersionableItem.CheckOut}. The {@link IVersionableItem.CheckIn} will not be called.
         * @remarks If item is locked, {@link IVersionableItem.CheckIn} will be called before the
         * {@link ILock.Unlock}. If lock expires you must check-in item manually.
         */
        CheckOut = 3,
        /**
         * If client tries to modify locked checked-in item, engine will automatically call
         * {@link IVersionableItem.CheckOut}.
         * @remarks {@link IVersionableItem.CheckIn} will be called before the {@link ILock.Unlock}.
         * If lock expires you must check-in item manually.
         * @remarks If item is not locked - update request will fail.
         */
        LockedCheckOut = 4
    }
}
declare module "DeltaV/IDeltaVItem" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IHierarchyItem } from "IHierarchyItem";
    /**
     * Base interface for items that support versioning and item versions (DeltaV items).
     * @remarks This interface defines properties common to all items that support versioning and item versions.
     * It provides the means of getting and setting comments and author name when creating new version.
     * The author of the version is set and get via {@link SetCreatorDisplayNameAsync},
     * {@link GetCreatorDisplayNameAsync} methods and comment via {@link GetCommentAsync},
     * {@link SetCommentAsync} methods.
     */
    export interface IDeltaVItem extends IHierarchyItem {
        /**
         * Sets a brief comment about a file that is suitable for presentation to a user.
         * @param comment Comment string.
         * @remarks Comment can be used to indicate why that version was created.
         * @exception LockedException This folder was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception DavException In other cases.
         */
        SetComment(comment: string): Promise<void>;
        /**
         * Retrieves a brief comment about a file that is suitable for presentation to a user.
         * @remarks Comment can be used to indicate why that version was created.
         * @return Comment string.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetComment(): Promise<string>;
        /**
         * Sets display name of the user that created this item.
         * @remarks Sets description of the creator of the file that is
         * suitable for presentation to a user. Can be used to indicate who created that version.
         * @param creatorDisplayName String representing author name.
         * @exception LockedException This folder was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception DavException In other cases.
         */
        SetCreatorDisplayName(creatorDisplayName: string): Promise<void>;
        /**
         * Retrieves display name of the user that created this item.
         * @remarks Retrieves description of the creator of the file that is
         * suitable for presentation to a user. Can be used to indicate who created that version.
         * @returns String representing author name.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetCreatorDisplayName(): Promise<string>;
    }
}
declare module "DeltaV/IVersion" {
    import { IDeltaVItem } from "DeltaV/IDeltaVItem";
    import { IVersionableItem } from "DeltaV/IVersionableItem";
    /**
     * Represents single item version.
     * @remarks Defines the properties and methods that item version must implement. In addition to methods and properties
     * provided by {@link IDeltaVItem} this interface also provides methods for getting version name, next
     * version and previous version.
     * @remarks Usually you will implement IVersion interface for your file version objects together with
     * {@link IFile} interface. While @b  IFile interface is optional for file versions it may be useful if
     * your DeltaV client application will request content of the file version. In this case
     * {@link IContentAsync.ReadAsync}, {@link IContentAsync.ContentLength} and {@link IContentAsync.ContentType}
     * members of the {@link IFileAsync} interface will be requested by the engine. Copying, moving, updating
     * properties and content is not allowed for a version, your {@link IHierarchyItem.CopyTo},
     * {@link IHierarchyItemAsync.MoveToAsync}, {@link IHierarchyItemAsync.UpdatePropertiesAsync} and
     * {@link IContentAsync.WriteAsync} implementations must throw {@link DavException} with status
     * {@link DavStatus.NOT_ALLOWED}.
     * @remarks Generally from your {@link VersionName} implementation you can return any string suitable for
     * displaying to user as a version or the hierarchy item. This string must be unique among versions for this
     * hierarchy item. Usually you will return “1”, “2”, etc or “3.1”, “3.4”, etc.
     * @remarks {@link GetSuccessor} and {@link GetPredecessor} methods of this interface return next and previous
     * version for the item. The {@link GetVersionableItem} method returns the hierarchy item (usually file) to
     * which this version belongs.
     */
    export interface IVersion extends IDeltaVItem {
        /**
         * Name of the version.
         * @value Name of the version.
         * @remarks Must be unique among version items for a given hierarchy item. This string is intended for display
         * for a user.
         */
        VersionName: string;
        /**
         * Next version or null if no next version exists.
         * @return Version item representing next version
         * in the list of versions or null if no next version exists.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetSuccessor(): Promise<IVersion>;
        /**
         * Previous version or null if no previous version exists.
         * @return Version item representing previous version in the list of versions or null if no previous version
         * exists.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetPredecessor(): Promise<IVersion>;
        /**
         * Hierarchy item for this version.
         * @value Hierarchy item for this version.
         */
        GetVersionableItem(): Promise<IVersionableItem>;
    }
}
declare module "DeltaV/IHistory" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyName } from "PropertyName";
    import { IVersion } from "DeltaV/IVersion";
    /**
     * Contains all versions of a particular version-controlled item.
     * @remarks The important property of this interface is {@link Path} property inherited from IHierarchyItem.
     * The url returned by this property is used by client applications to remove item from version control.
     * The client application submits DELETE WebDAV request to this url and the engine calls
     * {@link IVersionableItemAsync.PutUnderVersionControlAsync}
     * passing false as a parameter. In your {@link IVersionableItemAsync.PutUnderVersionControlAsync} you will
     * usually delete all versions.
     */
    export interface IHistory extends IHierarchyItem {
        /**
         * Retrieves current item version.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetCurrentVersion(): Promise<IVersion>;
        /**
         * Retrieves all versions of current item.
         * @param propNames Names of properties which engine will request from the returned items.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetVersionSetAsync(propNames: IList<PropertyName>): Promise<IEnumerable<IVersion>>;
        /**
         * Retrieves item's root version.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetRootVersion(): Promise<IVersion>;
    }
}
declare module "DeltaV/IVersionableItem" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { AutoVersion } from "DeltaV/AutoVersion";
    import { IDeltaVItem } from "DeltaV/IDeltaVItem";
    import { IHistory } from "DeltaV/IHistory";
    import { IVersion } from "DeltaV/IVersion";
    /**
     * This interface must be implemented on items that support versioning.
     * @remarks By default items in the repository are not under version control. When item is being put under version control
     * engine calls {@link PutUnderVersionControl}  method passing true as a parameter.
     * In your {@link PutUnderVersionControl} implementation you must create a new version. The content and
     * properties of the new version must be copied from this item. After the call to
     * {@link PutUnderVersionControl} {@link VersionHistory} property must point to the object
     * implementing {@link IHistory} interface that will contain single version. The {@link IsCheckedOut}
     * property must return false.
     * @remarks If item is under version control it mast always have at last one version in its versions list.
     * @remarks After the item had been put under version control client can issue checkout command.
     * In your {@link CheckOut}  implementation you will mark item as checked-out and allow item modifications.
     * When item is in check-out state WebDAV client can issue commands updating item contents and properties.
     * @remarks Finally client issues check-in command or discards changes issuing uncheck-out command.
     * In your {@link CheckIn} implementation you will create a new version. The content and properties of the
     * new version must be copied from this item. The item must be marked as checked-in.
     * In your {@link UnCheckOut} implementation you will discard changes and restore pre-checkout state.
     * Content and properties must be copied from current version to this item. The item must be marked as checked-in.
     * @remarks The typical versioning workflow:
     * 1. Engine calls {@link IVersionableItem.PutUnderVersionControl}. Create new version,
     * copy content and properties from this item to new version.
     * 2. Engine calls {@link IVersionableItem.CheckOut}.
     * Mark item as checked-out.
     * 3. Engine calls {@link IContent.Write} or {@link IHierarchyItem.UpdateProperties}.
     * Modify item content and properties.
     * 4. Engine calls {@link IVersionableItem.CheckIn} or
     * {@link IVersionableItem.UnCheckOut}. For {@link CheckIn} - create new version, copy content and
     * properties from this item to new version. For {@link UnCheckOut} - copy content and properties from
     * current version to this item. Mark item as checked-in.
     * @remarks In your {@link UpdateToVersion} implementation you will create a new version and copy content and
     * properties from {@link IVersion} passed as a parameter to new version. You will also replace content and
     * properties of this item. The new created version becomes current version. The {@link UpdateToVersion}
     * method can only be called when item is in check-in state.
     * @remarks When item is being removed from version control engine calls {@link PutUnderVersionControl} method
     * passing false as a parameter. In your implementation you will usually delete all versions.
     * {@link VersionHistory} property must return @b  null after this call.
     */
    export interface IVersionableItem extends IDeltaVItem {
        /**
         * Current item version history. Null, if item is not under version control.
         * @value Item implementing {@link IHistory}  interface or null if item is not under version control.
         * @remarks If item is under version control it always has at last
         * one version in its versions list. This property is used for precondition checking and shall not throw
         * exceptions.
         */
        VersionHistory: IHistory;
        /**
         * Gets a value indicating whether the item is in checked-in or checked-out state.
         * @value Boolean value indicating if item is in checked-out state.
         * @remarks This property is used for precondition checking and shall not throw exceptions.
         */
        IsCheckedOut: boolean;
        /**
         * Gets a value indicating whether the item was check-out automatically by engine without
         * explicit request from client.
         * @remarks Before checking-out the engine sets this property.
         * When item is being unlocked engine reads this property and calls
         * {@link IVersionableItem.CheckIn} if necessary. This property is required for auto-versioning.
         * This property shall not throw exceptions.
         */
        IsAutoCheckedOut: boolean;
        /**
         * Creates new version. Copies all properties and content from this item.
         * @return Url of the newly created version.
         * @remarks
         * @exception LockedException This item was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occurred during processing of the subtree.
         * @exception DavException In other cases.
         * @remarks In your implementation you must create a new version. The content and properties of the new version must be
         * copied from this item.
         * @remarks After the call to this method method {@link IHistory.GetCurrentVersion} must return the
         * created version.
         */
        CheckIn(): Promise<string>;
        /**
         * Allow modifications to the content and properties of this version-controlled item.
         * @exception LockedException This item was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occurred during processing of the subtree.
         * @exception DavException In other cases.
         * @remarks In your {@link IVersionableItem.CheckOut} implementation you will mark item as checked-out and allow item
         * modifications.
         * When item is in check-out state WebDAV client can issue commands updating item contents and properties.
         */
        CheckOut(isAutoCheckOut: boolean): Promise<void>;
        /**
         * Cancels the checkout and restores the pre-checkout state of the version-controlled item.
         * @remarks In your {@link UnCheckOut} implementation you will discard changes and restore pre-checkout state.
         * Content and properties must be copied from current version to this item. The item must be marked as
         * checked-in.
         * @exception LockedException This item was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occurred during processing of the subtree.
         * @exception DavException In other cases.
         */
        UnCheckOut(): Promise<void>;
        /**
         * Updates content and properties of the item to those identified by @paramref version  parameter.
         * @remarks In your {@link UpdateToVersion} implementation you will create a new version and copy content and
         * properties from {@link IVersion} passed as a parameter to new version. You will also replace content
         * and properties of this item. The new created version becomes current version.
         * @remarks The {@link UpdateToVersion} method can only be called when item is in check-in state.
         * @exception LockedException This item was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occurred during processing of the subtree.
         * @exception DavException In other cases.
         */
        UpdateToVersion(version: IVersion): Promise<void>;
        /**
         * Sets property which determines how checked-in item responds to
         * WebDAV client attempts to modify its content or properties.
         * @exception LockedException This item was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception DavException In other cases.
         * @param value One of {@link AutoVersion} enum values.
         */
        SetAutoVersion(value: AutoVersion): Promise<void>;
        /**
         * Retrieves property which determines how checked-in item responds to WebDAV
         * client attempts to modify its content or properties.
         * @return One of {@link AutoVersion} enum values.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         */
        GetAutoVersion(): Promise<AutoVersion>;
        /**
         * Puts or removes current item from version control.
         * @remarks By default items in the repository are not under version control. When item is being put under version
         * control engine calls {@link PutUnderVersionControl} method passing true as a parameter.
         * In your {@link PutUnderVersionControl} implementation you must create a new version.
         * The content and properties of the new version must be copied from this item. After the call to
         * {@link PutUnderVersionControl} {@link VersionHistory} property must point to the object
         * implementing {@link IHistory} interface that will contain single version.
         * The {@link IsCheckedOut} property must return @b  false;
         * @remarks If item is under version control it mast always have at last one version in its
         * versions list.
         * @remarks If {@link DavEngine.AutoPutUnderVersionControl} is true and item is not under version control
         * prior to any item content or properties update {@link IVersionableItem.PutUnderVersionControl}
         * will be called.
         * @remarks When item is being removed from version control engine calls {@link PutUnderVersionControl} method
         * passing @b  false as a parameter. In your implementation you will usually delete all versions.
         * {@link VersionHistory} property must return null after this call.
         * @exception LockedException This item was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occurred during processing of the subtree.
         * @exception DavException In other cases.
         */
        PutUnderVersionControl(enable: boolean): Promise<void>;
    }
}
declare module "Impl/MethodHandlers/BaseDAVHandler" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { DavContextBase } from "DavContextBase";
    import { IVersionableItem } from "DeltaV/IVersionableItem";
    import { IMethodHandler } from "Extensibility/IMethodHandler";
    import { IHierarchyItem } from "IHierarchyItem";
    import { IItemCollection } from "IItemCollection";
    /**
     * Summary description for BaseDAVHandler.
     */
    export abstract class BaseDavHandler implements IMethodHandler {
        readonly EnableOutputBuffering: boolean;
        readonly EnableOutputDebugLogging: boolean;
        readonly EnableInputDebugLogging: boolean;
        protected static nsDav: string;
        protected static RequireExists(item: IHierarchyItem): void;
        protected static RequireParentExists(parent: IItemCollection): void;
        abstract processRequest(context: DavContextBase, item: IHierarchyItem): any;
        abstract appliesTo(item: IHierarchyItem): boolean;
        protected RequireCheckedIn(item: IVersionableItem): void;
        protected RequireCheckedOut(item: IVersionableItem): void;
        protected RequireOverwrite(overwrite: boolean): void;
        protected RequireItemOfType<Object>(item: IHierarchyItem): object;
        protected RequireUnderVersionControl(verItem: IVersionableItem): void;
    }
}
declare module "Impl/MethodHandlers/GetDavHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { BaseDavHandler } from "Impl/MethodHandlers/BaseDAVHandler";
    export class GetDavHandler extends BaseDavHandler {
        appliesTo(item: IHierarchyItem): boolean;
        readonly EnableOutputBuffering: boolean;
        readonly EnableOutputDebugLogging: boolean;
        processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
    }
}
declare module "EncodeUtil" {
    /**
     * Encodes/Decodes url parts.
     * @remarks This class shall be used to encode/decode parts of urls. Unlike {@link HttpUtility} class provided with .Net, this class encodes ' '(space) as %2b.
     */
    export class EncodeUtil {
        /**
         * Encodes url part.
         * @param part Url part to encode.
         * @returns Encoded url part.
         */
        static EncodeUrlPart(part: string): string;
        /**
         * Decodes url part.
         * @param part Url part to decode.
         * @returns Decoded url part.
         */
        static DecodeUrlPart(part: string): string;
    }
}
declare module "Impl/Util/Depth" {
    export enum Depth {
        Infinity = 0,
        One = 1,
        Zero = 2
    }
}
declare module "Extensibility/DavRequest" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IncomingMessage } from "http";
    import { IDictionary } from "typescript-dotnet-commonjs/System/Collections/Dictionaries/IDictionary";
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { DavEngine } from "DavEngine";
    import { Depth } from "Impl/Util/Depth";
    import { Range } from "Impl/Util/Range";
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
    export class DavRequest extends IncomingMessage {
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
}
declare module "Impl/Util/UrlUtil" {
    import { DavContextBase } from "DavContextBase";
    import { DavRequest } from "Extensibility/DavRequest";
    import { IHierarchyItem } from "IHierarchyItem";
    import { IItemCollection } from "IItemCollection";
    export class UrlUtil {
        static GetParentItemByUrl(context: DavContextBase, url: string): Promise<IItemCollection>;
        static GetItemNameByUrl(context: DavContextBase, url: string): string;
        static GetPathByUrl(context: DavContextBase, url: string): string;
        static GetItemByUrl(context: DavContextBase, url: string): Promise<IHierarchyItem>;
        static CreateUrl(request: DavRequest, href: string, fullUri: boolean): string;
        static WriteHref(w: any, request: DavRequest, itemPath: string, fullUri: boolean): void;
        static removeQueryAndLastSlash(url: string): string;
        static GetRequestHost(request: DavRequest): string;
    }
}
declare module "Impl/MethodHandlers/OptionsDAVHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { BaseDavHandler } from "Impl/MethodHandlers/BaseDAVHandler";
    export class OptionsDavHandler extends BaseDavHandler {
        appliesTo(item: IHierarchyItem): boolean;
        processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
    }
}
declare module "Paging/OrderProperty" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { PropertyName } from "PropertyName";
    /**Represents property used for sorting in ascending or descending order. */
    export class OrderProperty {
        /**Property name. */
        Property: PropertyName;
        /**Order direction. */
        Ascending: boolean;
        /**
         * Initializes new instance.
         * @param name Property name.
         * @param ascending Order direction.
         */
        constructor(name: PropertyName, ascending: boolean);
    }
}
declare module "Paging/PageResult" {
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { IHierarchyItem } from "IHierarchyItem";
    /**Represents result of paging. */
    export class PageResult {
        /**
         * List of {@link IHierarchyItemAsync} items. Each item represents a file or a folder item.
         */
        Items: IEnumerable<IHierarchyItem>;
        /**Total number of items. */
        TotalNumber: number;
        /**
         * Initializes a new instance of the @see PageResult  class with items and totalNumber.
         */
        constructor(items: IEnumerable<IHierarchyItem>, totalNumber: number);
    }
}
declare module "Paging/IPaging" {
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { IItemCollection } from "IItemCollection";
    import { PropertyName } from "PropertyName";
    import { OrderProperty } from "Paging/OrderProperty";
    import { PageResult } from "Paging/PageResult";
    /**
     * Represents folder item that supports paging and sorting.
     * @remarks  When this interface is added on a folder item the server reports paging support in responses to OPTIONS request, adding a 'paging' token to a DAV header.@remarks
     */
    export interface IPaging extends IItemCollection {
        /**
         * Gets specified number of children of this folder starting from a specified item in a specified order.
         * @param propNames List of properties requested by the client. Can be used as a hint about properties requested by the client to optimize requests to the back-end storage.
         * @param offset The number of items to skip before returning the remaining items. Start listing from from next item.
         * @param nResults The number of items to return.
         * @param orderProps List of order properties requested by the client.
         * @returns  @see PageResult .
         * <include file='Comments\Generated.xml' path='doc/example[@name="IPagingAsync.GetPageAsync"]/*' />
         */
        GetPage(propNames: IList<PropertyName>, offset: number, nResults: number, orderProps: IList<OrderProperty>): PageResult;
    }
}
declare module "Impl/Multistatus/ResponseBase" {
    /**
     * Base class for responses to be included into multistatus response.
     * Basically it can be either {@link PropStatResponse} or {@link ItemResponse}.
     */
    export class ResponseBase {
        private readonly itemPath;
        private readonly responseDescription;
        /**
         * Initializes new instance.
         * @param itemPath Path to the item.
         * @param responseDescription Description of the response.
         */
        constructor(itemPath: string, responseDescription: string);
        /**Path of an item this response relates to. */
        readonly ItemPath: string;
        /**Description of the response. */
        readonly ResponseDescription: string;
    }
}
declare module "Impl/Multistatus/ItemExceptionResponse" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { DavException } from "DavException";
    import { ResponseBase } from "Impl/Multistatus/ResponseBase";
    export class ItemExceptionResponse extends ResponseBase {
        Exception: DavException;
        constructor(itemPath: string, exception: DavException);
    }
}
declare module "Impl/Multistatus/ItemResponse" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { DavStatus } from "DavStatus";
    import { ResponseBase } from "Impl/Multistatus/ResponseBase";
    /**
     * Status for an items to be included into multistatus response.
     */
    export class ItemResponse extends ResponseBase {
        private readonly code;
        private readonly hrefs;
        /**
         * Initializes a new instance.
         * @param itemPath Path of the item in the hierarchy tree.
         * @param status WebDAV response for the item.
         * @param href href to be included in the response.
         * @param responseDescription description of the response.
         */
        constructor(itemPath: string, code: DavStatus, href: string, responseDescription: string);
        /**
         * Hrefs included in the response.
         * @return path of the item.
         */
        readonly Hrefs: IList<string>;
        /**
         * Gets the response for the item.
         * @return response for the item
         */
        readonly Code: DavStatus;
    }
}
declare module "Impl/Multistatus/PropStat" {
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { DavException } from "DavException";
    import { PropertyValue } from "PropertyValue";
    /**
     * Status for a number of properties to be included into multistatus response.
     */
    export class PropStat {
        private readonly property;
        private exception?;
        /**
         * Initializes new instance.
         * @param property list of properties with the same status.
         * @param status status for these properties.
         * @param description description.
         */
        constructor(property: IEnumerable<PropertyValue>, exception?: DavException);
        /**
         * Retrieves list of properties with the same status.
         * @return list of properties.
         */
        readonly Properties: IList<PropertyValue>;
        readonly Exception: DavException | undefined;
    }
}
declare module "Impl/Multistatus/PropStatResponse" {
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { PropStat } from "Impl/Multistatus/PropStat";
    import { ResponseBase } from "Impl/Multistatus/ResponseBase";
    /**
     * Response that may be present in multistatus response.
     * Describes status of properties relating to the same item.
     */
    export class PropStatResponse extends ResponseBase {
        private readonly propStats;
        /**
         * Initializes new instance.
         * @param itemPath    path to item which contains these properties.
         * @param propStats   statuses for different properties related to this item.
         * @param description description for the response.
         */
        constructor(itemPath: string, propStats: IEnumerable<PropStat>, description: string);
        /**
         * Retrieves statuses for properties grouped by item they relate to.
         * @return statuses for properties.
         */
        readonly PropStats: IList<PropStat>;
    }
}
declare module "Impl/Util/MultistatusResponseWriter" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { DavContextBase } from "DavContextBase";
    import { DavEngine } from "DavEngine";
    import { IHierarchyItem } from "IHierarchyItem";
    import { ItemExceptionResponse } from "Impl/Multistatus/ItemExceptionResponse";
    import { ItemResponse } from "Impl/Multistatus/ItemResponse";
    import { PropStat } from "Impl/Multistatus/PropStat";
    import { PropStatResponse } from "Impl/Multistatus/PropStatResponse";
    export class MultistatusResponseWriter {
        readonly Writer: any;
        protected static nsDav: string;
        protected msWriter: any;
        private engine;
        private context;
        constructor(engine: DavEngine, context: DavContextBase, writer?: any);
        StartMultiStatusResponse(includePagingNamespace?: boolean): void;
        StartResponse(path: string): void;
        EndResponse(): void;
        AddStatusResponse(item: ItemExceptionResponse | ItemResponse | PropStatResponse): void;
        AddPropStats(propStats: IList<PropStat>): void;
        EndMultiStatusResponse(): void;
        WriteItemHref(uploadItem: IHierarchyItem): void;
        WriteHref(path: string): void;
        private AddStatusResponsePropStatResponse;
        private AddStatusResponseItemResponse;
        private AddStatusResponseItemExceptionResponse;
    }
}
declare module "Impl/Util/OrderPropertyReader" {
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { OrderProperty } from "Paging/OrderProperty";
    export class OrderPropertyReader {
        static ReadProps(parentNode: Element): IList<OrderProperty>;
    }
}
declare module "Impl/Util/PropertyReader" {
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { PropertyName } from "PropertyName";
    export class PropertyReader {
        private static nsDav;
        static ReadIncludeProps(parentNode: Element): IList<PropertyName>;
        static ReadProps(parentNode: Element, propTag?: string): IList<PropertyName>;
    }
}
declare module "Impl/Multistatus/MultistatusResponse" {
    import { DavException } from "DavException";
    import { DavStatus } from "DavStatus";
    import { PropertyValue } from "PropertyValue";
    import { ResponseBase } from "Impl/Multistatus/ResponseBase";
    export class MultistatusResponse {
        private readonly responses;
        private responseDescription;
        AddResponses(responses: ResponseBase[]): void;
        /**
         * Adds new responses to the private collection in this class.
         */
        AddResponse(path: string, code: DavStatus | null, href: string | undefined, responseDescription: string | undefined, property: PropertyValue | null, exception: DavException | null): void;
        readonly Responses: ResponseBase[];
        ResponseDescription: string;
        private stringEquals;
    }
}
declare module "MultistatusException" {
    import { DavContextBase } from "DavContextBase";
    import { DavException } from "DavException";
    import { IHierarchyItem } from "IHierarchyItem";
    import { MultistatusResponse } from "Impl/Multistatus/MultistatusResponse";
    import { PropertyName } from "PropertyName";
    /**Exception which contains errors for multiple items or properties. */
    export class MultistatusException extends DavException {
        readonly Response: MultistatusResponse;
        private readonly response;
        /**
         * Initializes new message.
         * @param message Error text.
         */
        constructor(message?: string);
        /**
         * Addes property error.
         * @param mex Exception to merge with.
         * @param itemPath Item path for which property operation failed.
         * @param propertyName Property name for which operation failed.
         * @param exception Exception for failed operation.
         */
        AddInnerException(itemPath?: string, propertyName?: PropertyName, exception?: DavException, mex?: MultistatusException): void;
        /**
         * Writes exception to the output writer.
         * @param context Instance of {@link DavContextBase}.
         * @param item Instance of {@link IHierarchyItem}.
         * @param renderContent Whether content shall be written to output.
         * @remarks Full response shall be formed, including HTTP status and headers.
         */
        Render(context: DavContextBase, item: IHierarchyItem, renderContent: boolean): void;
        /**
         * Writes exception as part of MultistatusException.
         * @param writer {@link XmlWriter}  to which to write exception.
         * @param context Instance of {@link DavContextBase}.
         * @remarks
         * Only body shall be written. Text in {@link Exception.Message}
         * shall be omitted because it will be written as part of {@link MultistatusException} exception.
         */
        RenderInline(writer: any, context: DavContextBase): void;
        private GetResponses;
    }
}
declare module "Impl/PropertyHandlers/PropertyManager" {
    import { DavContextBase } from "DavContextBase";
    import { DavEngine } from "DavEngine";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyName } from "PropertyName";
    export class PropertyManager {
        static WriteProperty(w: any, propName: PropertyName, item: IHierarchyItem, context: DavContextBase): boolean;
        static UpdateProperty(propName: PropertyName, item: IHierarchyItem, value: Element, context: DavContextBase): boolean;
        static IsReadonly(name: PropertyName, engine: DavEngine): boolean;
    }
}
declare module "Class2/LockLevel" {
    /**
     * Level of lock.
     * @remarks
     * If a user sets an exclusive lock, other users will not be able to set any locks. If a user sets shared lock
     * other users will be able to set only shared lock on the item. There could be only 1 exclusive lock set on an
     * item or it can have 1 or more shared locks.
     */
    export enum LockLevel {
        /**Shared lock. */
        Shared = 0,
        /**Exclusive lock. */
        Exclusive = 1
    }
}
declare module "Class2/LockInfo" {
    import { LockLevel } from "Class2/LockLevel";
    /**Serves for exchanging locking information with WebDAV engine. */
    export class LockInfo {
        /**The lock token associated with a lock. */
        Token: string | null;
        /**Indicates whether a lock is shared or exclusive. */
        Level: LockLevel | null;
        /**Indicates whether a lock is enforceable on the subtree. */
        IsDeep: boolean | null;
        /**
         * Lock expiration time.
         * @remarks Lock timeout which was requested by client. {@link TimeSpan.MaxValue}  means infinity
         * lock that never expires. The null value means that timeout was not provided by a client.
         */
        TimeOut: Date | null;
        /**Provides information about the principal taking out a lock. */
        Owner: string | null;
        /**Parent item on which this lock is specified explicitely. */
        LockRoot: string | null;
        /**
         * Initializes a new instance of the LockInfo class.
         * @param level Shared or exclusive.
         * @param isDeep Whether the lock is deep.
         * @param token Lock token.
         * @param timeOut Lock timeout.
         * @param owner Lock owner.
         * @param lockRoot Parent item on which this lock is specified explicitely.
         */
        constructor(level?: LockLevel | null, isDeep?: boolean | null, token?: string | null, timeOut?: Date | null, owner?: string | null, lockRoot?: string | null);
    }
}
declare module "Impl/Util/PropertyWriter" {
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
    import { DavContextBase } from "DavContextBase";
    import { DavEngine } from "DavEngine";
    import { IHierarchyItem } from "IHierarchyItem";
    import { MultistatusException } from "MultistatusException";
    import { PropertyName } from "PropertyName";
    import { MultistatusResponseWriter } from "Impl/Util/MultistatusResponseWriter";
    import { LockInfo } from "Class2/LockInfo";
    import { DavRequest } from "Extensibility/DavRequest";
    export class PropertyWriter {
        private static nsDav;
        static WriteProperites(msWriter: MultistatusResponseWriter, item: IHierarchyItem, optionalProps: PropertyName[], obligatoryProps: IEnumerable<PropertyName>, engine: DavEngine, context: DavContextBase, allprop: boolean): void;
        static instanceOfMultistatusException(object: any): object is MultistatusException;
        static WritePropMultistatusResponse(result: IEnumerable<IHierarchyItem>, props: IList<PropertyName>, engine: DavEngine, context: DavContextBase): void;
        static WritePropLockDiscovery(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        static writeLockInfo(w: any, lockInfo: LockInfo, request: DavRequest, engine: DavEngine, item: IHierarchyItem): void;
    }
}
declare module "Impl/MethodHandlers/PropfindDAVHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { MultistatusResponseWriter } from "Impl/Util/MultistatusResponseWriter";
    import { BaseDavHandler } from "Impl/MethodHandlers/BaseDAVHandler";
    export class PropfindDavHandler extends BaseDavHandler {
        private static emptyPropList;
        private static WriteElement;
        private static WritePropertyNames;
        appliesTo(item: IHierarchyItem): boolean;
        processRequest(context: DavContextBase, item: IHierarchyItem): void;
        GeneratePropfindResponse(msWriter: MultistatusResponseWriter, item: IHierarchyItem, context: DavContextBase): Promise<void>;
        private isIPaging;
        private WriteElementRecursive;
    }
}
declare module "Impl/PropertyHandlers/PropertyHandlerBase" {
    import { DavContextBase } from "DavContextBase";
    import { DavEngine } from "DavEngine";
    import { IPropertyHandler } from "Extensibility/IPropertyHandler";
    import { IHierarchyItem } from "IHierarchyItem";
    export abstract class PropertyHandlerBase implements IPropertyHandler {
        protected static nsDav: string;
        protected static nsCalDav: string;
        protected static nsCardDav: string;
        abstract Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        Update(context: DavContextBase, item: IHierarchyItem, value: Element): void;
        abstract AppliesTo(item: IHierarchyItem): boolean;
        readonly IsReadonly: boolean;
        protected WriteItemHref(writer: any, context: DavContextBase, engine: DavEngine, item: IHierarchyItem): void;
        readonly IncludeInAllProp: boolean;
    }
}
declare module "Impl/PropertyHandlers/Class1/DisplayNameHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class DisplayNameHandler extends PropertyHandlerBase {
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        readonly IncludeInAllProp: boolean;
    }
}
declare module "Impl/PropertyHandlers/Class1/GetContentLengthHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class GetContentLengthHandler extends PropertyHandlerBase {
        readonly IncludeInAllProp: boolean;
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        private instanceOfIContent;
    }
}
declare module "Impl/PropertyHandlers/Class1/GetContentTypeHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class GetContentTypeHandler extends PropertyHandlerBase {
        readonly IncludeInAllProp: boolean;
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        private instanceOfIContent;
    }
}
declare module "Impl/PropertyHandlers/Class1/GetLastModifiedHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class GetLastModifiedHandler extends PropertyHandlerBase {
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        readonly IncludeInAllProp: boolean;
    }
}
declare module "Impl/PropertyHandlers/Class1/ResourceTypeHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class ResourceTypeHandler extends PropertyHandlerBase {
        readonly IncludeInAllProp: boolean;
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        private instanceOfIItemCollection;
    }
}
declare module "Class2/ILock" {
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { LockInfo } from "Class2/LockInfo";
    import { LockLevel } from "Class2/LockLevel";
    /**
     * Defines the properties and methods that WebDAV Class 2 compliant server hierarchy items must implement.
     * @remarks This interface provides the means for locking the hierarchy item, updating lock timeout and accessing the
     * list of applied locks. To create WebDAV Class 2 compliant server you must implement this interface on
     * your file and folder items.
     * @remarks When this interface is implemented on an item the server reports Class 2 compliance, returning DAV: 1, 2, 3
     * header in response to the OPTIONS request. Note that while most WebDAV clients never lock folder items,
     * you must still add this interface on folders, as soon as WebDAV clients submit OPTIONS request against folder
     * items when discovering server compliance.
     * @remarks When a WebDAV client requires to protect an item from concurrent updates, it locks the item (usually file),
     * submitting lock request to server. The server generates the new lock-token, marks the item as locked and returns
     * the new lock-token to the client. The WebDAV client application keeps the lock-token and when it requires to
     * perform any updates, it supplies the lock-token with the request. When the server receives the update request,
     * it verifies that the lock token belongs to the item that is being updated and performs modifications.
     */
    export interface ILock {
        /**
         * Gets the {@link IEnumerable}  with all locks for this item.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception DavException In other cases.
         * @remarks This property must return all locks for the item including deep locks on any of the parent folders.
         */
        GetActiveLocks(): IEnumerable<LockInfo>;
        /**
         * Locks this item.
         * @param level Whether lock is shared or exclusive. If an exclusive lock is set other users are not
         * be able to set any locks. If a shared lock is set other users are able to set shared lock on the item.
         * @param isDeep Specifies if the lock applied only to this item or to the entire subtree.
         * @param requestedTimeOut Lock timeout which was requested by client. {@link TimeSpan.MaxValue}
         * means infinity lock that never expires. Note that your server can ignore this parameter and set
         * timeout that is different from the one requested by client. Some clients may not provide any timeout. The @b  null is passed in this case.
         * @param owner Owner of the lock as specified by client.
         * @exception LockedException This folder was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occured during processing of the subtree.
         * @exception DavException In other cases.
         * @returns Instance of {@link LockResult}  that contains lock-token and timeout that was actually set.
         * @remarks This method is called when item is being locked by WebDAV client. In your implementation you must do the following:
         * 1. Generate the new lock-token, usually GUID.
         * 2. Save information about the lock in a storage.
         * 3. Associate the lock with the item in the repository.
         * 4. Return the lock-token to the Engine.
         * Optionally in in this method you can modify the lock timeout requested by client. For example instead of infinity
         * lock you can set lock for some limited time. You must return both lock-token and lock timeout via {@link LockResult}
         * return value, the engine than sends the lock-token and timeout values back to WebDAV client.
         */
        Lock(level: LockLevel, isDeep: boolean, requestedTimeOut: Date, owner: string): void;
        /**
         * Updates lock timeout information on this item.
         * @param token Lock token.
         * @param requestedTimeOut Lock timeout which was requested by client. {@link TimeSpan.MaxValue}
         * means infinity lock that never expires. Note that your server can ignore this parameter and set
         * timeout that is different from the one requested by client.
         * @exception LockedException This folder was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occurred during processing of the subtree.
         * @exception DavException In other cases.
         * @returns Instance of {@link RefreshLockResult} that contains information about the lock including timeout that was actually set.
         * @remarks  This method is called when WebDAV client wants to modify (usually prolong) timeout for the previously
         * set lock. In this method implementation you can update the lock timeout. Note that you can ignore the requested
         * timout and set timeout that is different from the one requested by client.
         */
        RefreshLock(token: string, requestedTimeOut: Date): void;
        /**
         * Removes lock with the specified token from this item.
         * @param lockToken Lock with this token should be removed from the item.
         * @exception LockedException This folder was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception MultistatusException Errors has occured during processing of the subtree.
         * @exception DavException In other cases.
         * @remarks
         * If this lock included more than one hierarchy item, the lock is removed from all items included in the lock.
         */
        Unlock(lockToken: string): void;
    }
}
declare module "Impl/PropertyHandlers/Class2/LockDiscoveryHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class LockDiscoveryHandler extends PropertyHandlerBase {
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        private instanceOfILock;
    }
}
declare module "Impl/PropertyHandlers/Class2/SupportedLockHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class SupportedLockHandler extends PropertyHandlerBase {
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        readonly IncludeInAllProp: boolean;
    }
}
declare module "Impl/PropertyHandlers/DeltaV/CreationDateHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class CreationDateHandler extends PropertyHandlerBase {
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        readonly IncludeInAllProp: boolean;
    }
}
declare module "Impl/PropertyHandlers/Quota/QuotaAvailableBytesHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class QuotaAvailableBytesHandler extends PropertyHandlerBase {
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        readonly IsReadonly: boolean;
    }
}
declare module "Impl/PropertyHandlers/Quota/QuotaUsedBytesHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { PropertyHandlerBase } from "Impl/PropertyHandlers/PropertyHandlerBase";
    export class QuotaUsedBytesHandler extends PropertyHandlerBase {
        AppliesTo(item: IHierarchyItem): boolean;
        Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
        readonly IsReadonly: boolean;
    }
}
declare module "Logger/LogLevel" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    /**
     * Type of information being logged.
     */
    export enum LogLevel {
        /**
         * All messages will be written to log.
         */
        All = 0,
        /**
         * Messages with LogLevel.Debug level will be written to log.
         */
        Debug = 1,
        /**
         * Messages with LogLevel.Info level will be written to log.
         */
        Info = 2,
        /**
         * Messages with LogLevel.Warn level will be written to log.
         */
        Warn = 3,
        /**
         * Messages with LogLevel.Error level will be written to log.
         */
        Error = 4,
        /**
         * Messages with LogLevel.Fatal level will be written to log.
         */
        Fatal = 5,
        /**
         * No messages will be written to log.
         */
        Off = 6
    }
}
declare module "Logger/FileLogger" {
    import { LogLevel } from "Logger/LogLevel";
    /**
     * Provides static methods for writing to a log file.
     * @remarks By default the log file is not created if you did not specify log file name.
     * You can specify the folder and file name setting {@link LogFile}  property.
     * Amount of output and maximum file size are controlled via {@link Level}  and {@link FileSize}  properties.
     * @remarks Important! If you host your server in IIS/ASP.NET make sure your log file is created outside of the \bin folder. If your logfile will be created in a \bin folder, your server will restart each time the logfile is updated, recycling application and session state.
     */
    export class FileLogger {
        private static logFileName;
        private static logLevel;
        private static logFileSize;
        private static logBackups;
        private static logWriter;
        /**
         * Gets and sets log file name and path.
         * @value Log file name and path.
         * @remarks By default the log file is created in the folder where the calling assembly
         * resides. The folder in which you plan store your log files must exist and
         * your web application must have enough permission for writing and creating
         * files in this folder. Note that if you are creating HttpHandler-based server usually on Windows XP your web application
         * runs under ASPNET account while on Windows 2003 it runs under Network Service account.
         * @remarks If you are requesting your server with a WebDAV client and log file is not
         * created, most likely there is no permissions for creating file or the web
         * requests simply does not reach your application.
         */
        static LogFile: string;
        /**
         * Gets and sets how much information is written to log file.
         * @value  Logging level. Default is Info
         * @remarks Provides the method of limiting amount of logging output. During the
         * development you will usually set @c  LogLevel to {@link LogLevel.All}  or {@link LogLevel.Debug}  level, while
         * deploying you can set it to {@link LogLevel.Error}  or {@link LogLevel.Fatal} .
         */
        static Level: LogLevel;
        /**
         * Gets and sets maximum log file size in bytes.
         * @value Maximum log file size in bytes. Default is 1048576 bytes.
         * @remarks When the file exceeds the size specified by FileSize the new log file is created. The old file is renamed to &lt;filename&gt;.&lt;number&gt;.
         */
        static FileSize: number;
        /**
         * Gets and sets Maximum number of log file backups.
         * @value Amount of log file backups. Default is 1.
         * @remarks If the amount of the backup files created is higher than MaxBackups the oldest file is automatically deleted.
         */
        static MaxBackups: number;
        /**
         * Wrights a message to a log file with a specified log level.
         * @param message Message to be logged.
         * @param level Logging level.
         */
        static WriteMessage(message: string, level?: LogLevel): void;
    }
}
declare module "Logger/DefaultLoggerImpl" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { Exception } from "typescript-dotnet-commonjs/System/Exception";
    import { ILogger } from "ILogger";
    import { LogFlagsEnum } from "LogFlagsEnum";
    /**
     * Default logger implementation.
     */
    export class DefaultLoggerImpl implements ILogger {
        /**
         * Determines whether debug mode is enabled.
         */
        IsDebugEnabled: boolean;
        /**
         * Logging flags.
         * @remarks By default Engine does not log GET response body and PUT request body.
         */
        LogFlags: LogFlagsEnum;
        /**
         * Initializes new instance.
         */
        constructor();
        /**
         * Logs in debug mode.
         * @param message Message.
         */
        LogDebug(message: string): void;
        /**
         * Logs message in error mode.
         * @param message Message to be logged.
         * @param exception Exception to be logged.
         */
        LogError(message: string, exception: Exception): void;
        /**
         * Log file path.
         */
        LogFile: string;
        /**
         * Gets and sets maximum log file size in bytes.
         * @value Maximum log file size in bytes. Default is 1048576 bytes.
         * @remarks When the file exceeds the size specified by FileSize the new log file is created. The old file is renamed to &lt;filename&gt;.&lt;number&gt;.
         */
        FileSize: number;
        /**
         * Gets and sets Maximum number of log file backups.
         * @value Amount of log file backups. Default is 1.
         * @remarks If the amount of the backup files created is higher than MaxBackups the oldest file is automatically deleted.
         */
        MaxBackups: number;
    }
}
declare module "Class1/IFile" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IContent } from "IContent";
    import { IHierarchyItem } from "IHierarchyItem";
    /**
     * Represents a file in the WebDAV repository.
     * @remarks
     * This interface represents a file in a repository. This is a marker interface derived from {@link IContent}
     * and {@link IHierarchyItem} , it does not add any additional properties or methods.
     * {@link IContent.ContentType}  property must return the MIME type of the file.
     */
    export interface IFile extends IHierarchyItem, IContent {
    }
}
declare module "Class1/IFolder" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { IItemCollection } from "IItemCollection";
    import { IFile } from "Class1/IFile";
    /**
     * Represents a folder in the WebDAV repository.
     * @remarks
     * Defines the properties and methods that WebDAV server folder objects must implement.
     * In addition to methods and properties provided by {@link IHierarchyItem}  and {@link IItemCollection}  this interface also provides
     * methods for creating WebDAV items (folders and files).
     */
    export interface IFolder extends IItemCollection {
        /**
         * Creates new WebDAV file with the specified name in this folder.
         * @param name Name of the file to create.
         * @exception LockedException This folder was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception DavException In other cases.
         * @remarks You must create a file in your repository during this call. After calling this method Engine calls {@link IContent.WriteAsync}.
         */
        CreateFile(name: string): IFile;
        /**
         * Creates new WebDAV folder with the specified name in this folder.
         * @param name Name of the folder to create.
         * @exception LockedException This folder was locked. Client did not provide the lock token.
         * @exception NeedPrivilegesException The user doesn't have enough privileges.
         * @exception InsufficientStorageException Quota limit is reached.
         * @exception DavException In other cases.
         */
        CreateFolder(name: string): void;
    }
}
declare module "Impl/Util/AutoVersionProcessor" {
    import { Func } from "typescript-dotnet-commonjs/System/FunctionTypes";
    import { IVersionableItem } from "DeltaV/IVersionableItem";
    export class AutoVersionProcessor {
        static process(verItem: IVersionableItem, doTask: Func<Promise<boolean>>, canCheckin: Func<boolean>): Promise<void>;
    }
}
declare module "Impl/Util/CreateUtil" {
    import { IHierarchyItem } from "IHierarchyItem";
    import { IItemCollection } from "IItemCollection";
    export class CreateUtil {
        static сreateItem(parent: IItemCollection, name: string): Promise<IHierarchyItem>;
        static сreateCollection(parent: IItemCollection, name: string): Promise<void>;
        private static instanceOfIFolder;
    }
}
declare module "Impl/MethodHandlers/IUploadItemInfo" {
    import { Stream } from "stream";
    import { IItemCollection } from "IItemCollection";
    export interface IUploadItemInfo {
        Name: string;
        Stream: Stream;
        ContentType: string;
        ContentLength: number;
        GetParent(): Promise<IItemCollection>;
    }
}
declare module "Impl/MethodHandlers/BaseUploadHandler" {
    import { Stream } from "stream";
    import { DavContextBase } from "DavContextBase";
    import { IVersionableItem } from "DeltaV/IVersionableItem";
    import { DavRequest } from "Extensibility/DavRequest";
    import { IContent } from "IContent";
    import { IHierarchyItem } from "IHierarchyItem";
    import { BaseDavHandler } from "Impl/MethodHandlers/BaseDAVHandler";
    import { IUploadItemInfo } from "Impl/MethodHandlers/IUploadItemInfo";
    export abstract class BaseUploadHandler extends BaseDavHandler {
        protected processFileUpload(item: IHierarchyItem, itemInfo: IUploadItemInfo, context: DavContextBase): Promise<void>;
        protected autoPutUnderVersionControl(verItem: IVersionableItem, context: DavContextBase): Promise<boolean>;
        protected autoVersionLogic(request: DavRequest, verItem: IVersionableItem, inputStream: Stream, contentLength: number, contentType: string): Promise<void>;
        protected abstract updateFileData(request: DavRequest, file: IContent, inputStream: Stream, length: number, contentType: string): Promise<boolean>;
        instanceOfIContent(object: any): object is IContent;
        private processVersionableItem;
        private createNewFile;
        private updateContentAndPutUnderVersionControl;
    }
}
declare module "Impl/MethodHandlers/PutDavHandler" {
    import { Stream, Writable } from "stream";
    import { DavContextBase } from "DavContextBase";
    import { DavRequest } from "Extensibility/DavRequest";
    import { IContent } from "IContent";
    import { IHierarchyItem } from "IHierarchyItem";
    import { IItemCollection } from "IItemCollection";
    import { BaseUploadHandler } from "Impl/MethodHandlers/BaseUploadHandler";
    import { IUploadItemInfo } from "Impl/MethodHandlers/IUploadItemInfo";
    export class ItemInfo implements IUploadItemInfo {
        private context;
        private stream;
        constructor(context: DavContextBase);
        GetParent(): Promise<IItemCollection>;
        readonly Name: string;
        readonly Stream: Stream;
        readonly ContentType: string;
        readonly ContentLength: number;
    }
    export class PutDavHandler extends BaseUploadHandler {
        readonly enableInputDebugLogging: boolean;
        appliesTo(item: IHierarchyItem): boolean;
        processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
        protected updateFileData(request: DavRequest, file: IContent, inputStream: Writable, contentLength: number, contentType: string): Promise<boolean>;
        private instanceOfIFolder;
    }
}
declare module "Impl/MethodHandlers/HeadDAVHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IContent } from "IContent";
    import { IHierarchyItem } from "IHierarchyItem";
    import { BaseDavHandler } from "Impl/MethodHandlers/BaseDAVHandler";
    export class HeadDavHandler extends BaseDavHandler {
        readonly enableOutputBuffering: boolean;
        appliesTo(item: IHierarchyItem): boolean;
        instanceOfIContent(object: any): object is IContent;
        processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
    }
}
declare module "Impl/MethodHandlers/LockDAVHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { BaseDavHandler } from "Impl/MethodHandlers/BaseDAVHandler";
    export class LockDavHandler extends BaseDavHandler {
        appliesTo(item: IHierarchyItem): boolean;
        processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
        private instanceOfILock;
        private writeLockDiscoveryResponse;
        private lockExistingItem;
        private createNewLockedItem;
        private refreshLock;
        private getLockInfo;
    }
}
declare module "Impl/MethodHandlers/UnlockDAVHandler" {
    import { DavContextBase } from "DavContextBase";
    import { IHierarchyItem } from "IHierarchyItem";
    import { BaseDavHandler } from "Impl/MethodHandlers/BaseDAVHandler";
    export class UnlockDAVHandler extends BaseDavHandler {
        appliesTo(item: IHierarchyItem): boolean;
        processRequest(context: DavContextBase, item: IHierarchyItem): void;
        private instanceOfILock;
    }
}
declare module "License/InvalidLicenseExeption" {
    import { DavStatus } from "DavStatus";
    import { ErrorDetails } from "ErrorDetails";
    import { Exception } from "typescript-dotnet-commonjs/System/Exception";
    export class InvalidLicenseException extends Exception {
        constructor(message: string, innerException?: Exception, status?: DavStatus, errorDetails?: ErrorDetails);
    }
}
declare module "License/LicenseModule" {
    export enum LicenseModule {
        CalDAV = 1,
        CardDAV = 2,
        iCalendar = 3,
        vCard = 4,
        Class1 = 5,
        Class2 = 6
    }
}
declare module "License/LicenseValidator" {
    import { LicenseModule } from "License/LicenseModule";
    export class LicenseValidator {
        private static lastCheckTime;
        private static lic;
        private static isValid;
        private static isLicenseExpired;
        private static isSupportExpired;
        private static issuedBefore;
        private static supportExpirationDate;
        private static product;
        private static type;
        private static strIssueDate;
        private static strSupportExpirationDate;
        private static Modules;
        private static CheckValid;
        private static CheckLicenseExpired;
        private static CheckSupportExpired;
        static addDaysYears(startDate: Date, numberOfDays: number, numberOfYears?: number): Date;
        static CheckLicenseModule(module: LicenseModule): void;
        static CheckLicenseIsValid(license: string | null, productNames?: string[]): Promise<any>;
    }
}
declare module "DavEngine" {
    import { IDictionary } from "typescript-dotnet-commonjs/System/Collections/Dictionaries/IDictionary";
    import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
    import { DavContextBase } from "DavContextBase";
    import { IMethodHandler } from "Extensibility/IMethodHandler";
    import { IOptionsHandler } from "Extensibility/IOptionsHandler";
    import { IPropertyHandler } from "Extensibility/IPropertyHandler";
    import { IReportHandler } from "Extensibility/IReportHandler";
    import { IHierarchyItem } from "IHierarchyItem";
    import { ILogger } from "ILogger";
    import { PropertyName } from "PropertyName";
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
    export class DavEngine {
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
}
declare module "Extensibility/DavResponse" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { OutgoingHttpHeaders, ServerResponse } from "http";
    /**
     * Represents HTTP response.
     * @remarks Usually you do not have to implement this interfaces if you host your server in ASP.NET/IIS or
     * in HttpListener as {@link DavContextBase} provides overloaded constructors optimized
     * for OWIN, for ASP.NET/IIS and for HttpListener.
     * You can implement this interface if you host your server  in any other environment
     * and pass it to {@link DavContextBase} constructor.
     */
    export class DavResponse {
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
}
declare module "DavContextBase" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    import { Exception } from "typescript-dotnet-commonjs/System/Exception";
    import { DavEngine } from "DavEngine";
    import { DavStatus } from "DavStatus";
    import { DavRequest } from "Extensibility/DavRequest";
    import { DavResponse } from "Extensibility/DavResponse";
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
    export abstract class DavContextBase {
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
}
declare module "Class2/LockResult" {
    /**
     * Result of @see ILock.Lock  operation.
     */
    export class LockResult {
        /**Gets/sets lock token associated with the lock. */
        Token: string;
        /**Gets/Sets timeout value; */
        TimeOut: Date;
        /**
         * Initializes a new instance of the LockResult class.
         * @param token Lock token associated with a lock.
         * @param timeOut Timeout value. TimeSpan.MaxValue means 'never'.
         */
        constructor(token: string, timeOut: Date);
    }
}
declare module "Class2/RefreshLockResult" {
    import { LockLevel } from "Class2/LockLevel";
    /**
     * Result of @see ILockAsync.RefreshLockAsync  operation.
     */
    export class RefreshLockResult {
        /**Determines whether lock is isShared. */
        Level: LockLevel;
        /**Indicates whether a lock is enforceable on the subtree. */
        IsDeep: boolean;
        /**Gets/sets timeout. */
        TimeOut: Date;
        /**Gets/sets information about the principal taking out a lock. */
        Owner: string;
        /**
         * Initializes a new instance of the RefreshLockResult class.
         * @param isDeep Indicates whether a lock is enforceable on the subtree.
         * @param level Determines whether lock is shared.
         * @param owner Principal taking out a lock.
         * @param timeOut Timeout value. TimeSpan.MaxValue means 'never'.
         */
        constructor(level: LockLevel, isDeep: boolean, timeOut: Date, owner: string);
    }
}
declare module "Impl/MethodHandlers/MethodHandlerAttribute" {
    /**
     * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
     */
    export class MethodHandlerAttribute {
        MethodName: string;
        constructor(methodName: string);
    }
}
declare module "License/LicenseChecker" {
    export class LicenseChecker {
        static CheckLicense(license: string | null, productName?: string): Promise<void>;
    }
}
