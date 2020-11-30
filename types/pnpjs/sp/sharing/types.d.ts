import { IPrincipalInfo } from "../types";
import { _Web } from "../webs/types";
import { _File } from "../files/types";
import { _Item } from "../items/types";
import { _Folder } from "../folders/types";
export declare type ShareableQueryable = _Web | _File | _Folder | _Item;
/**
 * Indicates the role of the sharing link
 */
export declare enum SharingRole {
    None = 0,
    View = 1,
    Edit = 2,
    Owner = 3
}
export declare enum SPSharedObjectType {
    Unknown = 0,
    File = 1,
    Folder = 2,
    Item = 3,
    List = 4,
    Web = 5,
    Max = 6
}
export declare enum SharingDomainRestrictionMode {
    None = 0,
    AllowList = 1,
    BlockList = 2
}
export declare enum SharingOperationStatusCode {
    /**
     * The share operation completed without errors.
     */
    CompletedSuccessfully = 0,
    /**
     * The share operation completed and generated requests for access.
     */
    AccessRequestsQueued = 1,
    /**
     * The share operation failed as there were no resolved users.
     */
    NoResolvedUsers = -1,
    /**
     * The share operation failed due to insufficient permissions.
     */
    AccessDenied = -2,
    /**
     * The share operation failed when attempting a cross site share, which is not supported.
     */
    CrossSiteRequestNotSupported = -3,
    /**
     * The sharing operation failed due to an unknown error.
     */
    UnknowError = -4,
    /**
     * The text you typed is too long. Please shorten it.
     */
    EmailBodyTooLong = -5,
    /**
     * The maximum number of unique scopes in the list has been exceeded.
     */
    ListUniqueScopesExceeded = -6,
    /**
     * The share operation failed because a sharing capability is disabled in the site.
     */
    CapabilityDisabled = -7,
    /**
     * The specified object for the share operation is not supported.
     */
    ObjectNotSupported = -8,
    /**
     * A SharePoint group cannot contain another SharePoint group.
     */
    NestedGroupsNotSupported = -9
}
export declare enum SharingLinkKind {
    /**
     * Uninitialized link
     */
    Uninitialized = 0,
    /**
     * Direct link to the object being shared
     */
    Direct = 1,
    /**
     * Organization-shareable link to the object being shared with view permissions
     */
    OrganizationView = 2,
    /**
     * Organization-shareable link to the object being shared with edit permissions
     */
    OrganizationEdit = 3,
    /**
     * View only anonymous link
     */
    AnonymousView = 4,
    /**
     * Read/Write anonymous link
     */
    AnonymousEdit = 5,
    /**
     * Flexible sharing Link where properties can change without affecting link URL
     */
    Flexible = 6
}
export interface ISharedFuncs {
    /**
     * Gets a link suitable for sharing for this item
     *
     * @param kind The type of link to share
     * @param expiration The optional expiration date
     */
    getShareLink(kind: SharingLinkKind, expiration?: Date): Promise<IShareLinkResponse>;
    /**
     * Checks Permissions on the list of Users and returns back role the users have on the Item.
     *
     * @param recipients The array of Entities for which Permissions need to be checked.
     */
    checkSharingPermissions(recipients: ISharingRecipient[]): Promise<ISharingEntityPermission[]>;
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     * @param expands Expand more fields.
     *
     */
    getSharingInformation(request?: ISharingInformationRequest, expands?: string[]): Promise<ISharingInformation>;
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    getObjectSharingSettings(useSimplifiedRoles?: boolean): Promise<IObjectSharingSettings>;
    /**
     * Unshare this item
     */
    unshare(): Promise<ISharingResult>;
    /**
     * Deletes a sharing link by kind
     *
     * @param kind Deletes a sharing link by the kind of link
     */
    deleteSharingLinkByKind(kind: SharingLinkKind): Promise<void>;
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId
     */
    unshareLink(kind: SharingLinkKind, shareId?: string): Promise<void>;
}
export interface IShareObjectOptions {
    url?: string;
    loginNames?: string | string[];
    role: SharingRole;
    emailData?: ISharingEmailData;
    group?: RoleType;
    propagateAcl?: boolean;
    includeAnonymousLinkInEmail?: boolean;
    useSimplifiedRoles?: boolean;
}
/**
 * Represents email data.
 */
export interface ISharingEmailData {
    /**
     * The e-mail subject.
     */
    subject?: string;
    /**
     * The e-mail body.
     */
    body: string;
}
export interface IShareLinkSettings {
    /**
     * The optional unique identifier of an existing sharing link to be retrieved and updated if necessary.
     */
    shareId?: string;
    /**
     * The kind of the sharing link to be created.
     */
    linkKind: SharingLinkKind;
    /**
     * A date/time string for which the format conforms to the ISO 8601:2004(E) complete representation for calendar date and time of day and
     * which represents the time and date of expiry for the anonymous link. Both the minutes and hour value must be specified for the
     * difference between the local and UTC time. Midnight is represented as 00:00:00.
     */
    expiration?: string;
    /**
     * The role to be used for the sharing link. This is required for Flexible links, and ignored for legacy link kinds.
     */
    role?: SharingRole;
    /**
     * Indicates if the sharing link, should support anonymous access. This is required for Flexible links, and ignored for legacy link kinds.
     */
    allowAnonymousAccess?: boolean;
}
export interface IShareLinkRequest {
    /**
     * A string of JSON representing users in people picker format. Only needed if an e-mail notification should be sent.
     */
    peoplePickerInput?: string;
    /**
     * Whether to create the link or not if it doesn't exist yet.
     */
    createLink: boolean;
    /**
     * The e-mail data. Only needed if an e-mail notification should be sent.
     */
    emailData?: ISharingEmailData;
    /**
     * The settings for the sharing link to be created/updated
     */
    settings: IShareLinkSettings;
}
/**
 * Represents a response for sharing a link
 */
export interface IShareLinkResponse {
    /**
     * A SharingLinkInfo that represents the sharing link. Will be populated if sharing operation is returning a sharing link.
     */
    sharingLinkInfo: ISharingLinkInfo;
}
export interface ISharingLinkInfo {
    AllowsAnonymousAccess: boolean;
    Created: string;
    CreatedBy: IPrincipalInfo;
    Expiration: string;
    IsActive: boolean;
    IsEditLink: boolean;
    IsFormsLink: boolean;
    IsUnhealthy: boolean;
    LastModified: string;
    LastModifiedBy: IPrincipalInfo;
    LinkKind: SharingLinkKind;
    ShareId: string;
    Url: string;
}
export interface ISharingResult {
    /**
     * The relative URL of a page which can be navigated to, to show permissions.
     */
    PermissionsPageRelativeUrl?: string;
    /**
     * A collection of users which have new pending access requests as a result of sharing.
     */
    UsersWithAccessRequests?: any[];
    /**
     * An enumeration which summarizes the result of the sharing operation.
     */
    StatusCode?: SharingOperationStatusCode;
    /**
     * An error message about the failure if sharing was unsuccessful.
     */
    ErrorMessage?: string;
    /**
     * A list of UserSharingResults from attempting to share a securable with unique permissions.
     */
    UniquelyPermissionedUsers?: IUserSharingResult[];
    /**
     * Groups which were granted permissions.
     */
    GroupsSharedWith?: any[];
    /**
     * The SharePoint group users were added to, if any were added to a group.
     */
    GroupUsersAddedTo?: any;
    /**
     * A list of users being added to a SharePoint permissions goup
     */
    UsersAddedToGroup?: IUserSharingResult[];
    /**
     * A list of SPInvitationCreationResult for external users being invited to have access.
     */
    InvitedUsers?: IInvitationCreationResult[];
    /**
     * The name of the securable being shared.
     */
    Name?: string;
    /**
     * The url of the securable being shared.
     */
    Url?: string;
    /**
     * IconUrl
     */
    IconUrl?: string;
}
export interface IInvitationCreationResult {
    Succeeded?: boolean;
    Email?: string;
    InvitationLink?: string;
}
export interface IUserSharingResult {
    IsUserKnown?: boolean;
    Status?: boolean;
    Message?: string;
    User?: string;
    DisplayName?: string;
    Email?: string;
    CurrentRole?: SharingRole;
    AllowedRoles?: SharingRole[];
    InvitationLink?: string;
}
export interface ISharingRecipient {
    email?: string;
    alias?: string;
}
export interface ISharingEntityPermission {
    /**
     * The Input Entity provided to the Call.
     */
    inputEntity: string;
    /**
     * The Resolved Entity after resolving using PeoplePicker API.
     */
    resolvedEntity: string;
    /**
     * Does the Entity have Access to the Securable Object
     */
    hasAccess: boolean;
    /**
     * Role of the Entity on ListItem
     */
    role: SharingRole;
}
export interface ISharingInformationRequest {
    /**
     * Max Principal's to return.
     */
    maxPrincipalsToReturn: number;
    /**
     * Supported Features (For future use by Office Client).
     */
    clientSupportedFeatures: string;
}
export interface IObjectSharingSettings {
    /**
     * The URL pointing to the containing SPWeb object
     */
    WebUrl: string;
    /**
     * The unique ID of the parent list (if applicable)
     */
    ListId?: string;
    /**
     * The list item ID (if applicable)
     */
    ItemId?: string;
    /**
     * The object title
     */
    ItemName: string;
    /**
     * The server relative object URL
     */
    ItemUrl: string;
    /**
     * Contains information about the sharing state of a shareable object
     */
    ObjectSharingInformation: any;
    /**
     * Boolean indicating whether the sharing context operates under the access request mode
     */
    AccessRequestMode: boolean;
    /**
     * Boolean indicating whether the sharing context operates under the permissions only mode
     * (i.e. adding to a group or hiding the groups dropdown in the SharePoint UI)
     */
    PermissionsOnlyMode: boolean;
    /**
     * URL of the site from which the shared object inherits permissions
     */
    InheritingWebLink: string;
    /**
     * Boolean flag denoting if guest users are enabled for the site collection
     */
    ShareByEmailEnabled: boolean;
    /**
     * Boolean indicating whether the current user is a guest user
     */
    IsGuestUser: boolean;
    /**
     * Boolean indicating whether the site has the standard "Editor" role
     */
    HasEditRole: boolean;
    /**
     * Boolean indicating whether the site has the standard "Reader" role
     */
    HasReadRole: boolean;
    /**
     * Boolean indicating whether the object to share is a picture library
     */
    IsPictureLibrary: boolean;
    /**
     * Boolean indicating whether the folder object can be shared
     */
    CanShareFolder: boolean;
    /**
     * Boolean indicating whether email invitations can be sent
     */
    CanSendEmail: boolean;
    /**
     * Default share link type
     */
    DefaultShareLinkType: SharingLinkKind;
    /**
     * Boolean indicating whether the object to share supports ACL propagation
     */
    SupportsAclPropagation: boolean;
    /**
     * Boolean indicating whether the current user can only share within the tenancy
     */
    CanCurrentUserShareInternally: boolean;
    /**
     * Boolean indicating whether the current user can share outside the tenancy, by inviting external users
     */
    CanCurrentUserShareExternally: boolean;
    /**
     * Boolean indicating whether the current user can retrieve an anonymous View link, if one has already been created
     * If one has not been created, the user cannot create one
     */
    CanCurrentUserRetrieveReadonlyLink: boolean;
    /**
     * Boolean indicating whether the current user can create or disable an anonymous Edit link
     */
    CanCurrentUserManageReadonlyLink: boolean;
    /**
     * Boolean indicating whether the current user can retrieve an anonymous Edit link, if one has already been created
     * If one has not been created, the user cannot create one
     */
    CanCurrentUserRetrieveReadWriteLink: boolean;
    /**
     * Boolean indicating whether the current user can create or disable an anonymous Edit link
     */
    CanCurrentUserManageReadWriteLink: boolean;
    /**
     * Boolean indicating whether the current user can retrieve an organization View link, if one has already been created
     * If one has not been created, the user cannot create one
     */
    CanCurrentUserRetrieveOrganizationReadonlyLink: boolean;
    /**
     * Boolean indicating whether the current user can create or disable an organization Edit link
     */
    CanCurrentUserManageOrganizationReadonlyLink: boolean;
    /**
     * Boolean indicating whether the current user can retrieve an organization Edit link, if one has already been created
     * If one has not been created, the user cannot create one
     */
    CanCurrentUserRetrieveOrganizationReadWriteLink: boolean;
    /**
     * Boolean indicating whether the current user can create or disable an organization Edit link
     */
    CanCurrentUserManageOrganizationReadWriteLink: boolean;
    /**
     * Boolean indicating whether the current user can make use of Share-By-Link
     */
    CanSendLink: boolean;
    /**
     * Boolean indicating whether the client logic should warn the user
     * that they are about to share with external email addresses.
     */
    ShowExternalSharingWarning: boolean;
    /**
     * A list of SharingPermissionInformation objects that can be used to share
     */
    SharingPermissions: any[];
    /**
     * A dictionary object that lists the display name and the id of
     * the SharePoint simplified roles (edit, view)
     */
    SimplifiedRoles: {
        [key: string]: string;
    };
    /**
     * A dictionary object that lists the display name and the id of the SharePoint groups
     */
    GroupsList: {
        [key: string]: string;
    };
    /**
     * A dictionary object that lists the display name and the id of the SharePoint regular roles
     */
    Roles: {
        [key: string]: string;
    };
    /**
     * An object containing the SharePoint UI specific sharing settings.
     */
    SharePointSettings: any;
    /**
     * Boolean indicating whether the current user is a site collection administrator
     */
    IsUserSiteAdmin: boolean;
    /**
     * A value that indicates number of days an anonymous link can be valid before it expires
     */
    RequiredAnonymousLinkExpirationInDays: number;
}
export interface ISharingInformation {
    /**
     * External Sharing.
     */
    canAddExternalPrincipal?: boolean;
    /**
     * Internal Sharing.
     */
    canAddInternalPrincipal?: boolean;
    /**
     * Can Send Email.
     */
    canSendEmail?: boolean;
    /**
     * Can Use Simplified Roles present in Roles Enum.
     */
    canUseSimplifiedRoles?: boolean;
    /**
     * Has Unique Permissions.
     */
    hasUniquePermissions?: boolean;
    /**
     * Current Users Role on the Item.
     */
    currentRole?: SharingRole;
    /**
     * Does the User+Item require Approval from Admin for Sharing.
     */
    requiresAccessApproval?: boolean;
    /**
     * (Owners only)Whether there are pending access requests for the securable object.
     */
    hasPendingAccessRequests?: boolean;
    /**
     * (Owners only)The link to the access requests page for the securable object, or an empty string if the link is not available.
     */
    pendingAccessRequestsLink?: string;
    /**
     * sharedObjectType
     */
    sharedObjectType?: SPSharedObjectType;
    /**
     * Url for the Securable Object (Encoded).
     */
    directUrl?: string;
    /**
     * Parent Web Url for the Securable Object (Encoded).
     */
    webUrl?: string;
    /**
     * Default SharingLinkKind.
     */
    defaultLinkKind?: SharingLinkKind;
    /**
     * Tenant's SharingDomainRestrictionMode.
     */
    domainRestrictionMode?: SharingDomainRestrictionMode;
    /**
     * Tenant's RestrictedDomains.
     */
    RestrictedDomains?: string;
    /**
     * Tenant's Anonymous Link Expiration Restriction in Days.
     */
    anonymousLinkExpirationRestrictionDays?: number;
    /**
     * The PermissionCollection that are on the Securable Object (Princpals & Links)
     */
    permissionsInformation?: any;
    /**
     * PickerSettings used by the PeoplePicker Control.
     */
    pickerSettings?: any;
}
export declare enum RoleType {
    None = 0,
    Guest = 1,
    Reader = 2,
    Contributor = 3,
    WebDesigner = 4,
    Administrator = 5
}
//# sourceMappingURL=types.d.ts.map