/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IEquatable } from "typescript-dotnet-commonjs/System/IEquatable";
/**Describes property name. */
export declare class PropertyName implements IEquatable<PropertyName> {
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
