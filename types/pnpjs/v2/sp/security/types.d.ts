import { _SharePointQueryableInstance, ISharePointQueryableCollection, _SharePointQueryableCollection, IDeleteable } from "../sharepointqueryable";
import { ISiteGroups } from "../site-groups/types";
export declare type SecurableQueryable = _SharePointQueryableInstance & ISecurableMethods;
/**
 * Describes a set of role assignments for the current scope
 *
 */
export declare class _RoleAssignments extends _SharePointQueryableCollection<IRoleAssignmentInfo[]> {
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    getById(id: number): IRoleAssignment;
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    add(principalId: number, roleDefId: number): Promise<void>;
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    remove(principalId: number, roleDefId: number): Promise<void>;
}
export interface IRoleAssignments extends _RoleAssignments {
}
export declare const RoleAssignments: import("../sharepointqueryable").ISPInvokableFactory<IRoleAssignments>;
/**
 * Describes a role assignment
 *
 */
export declare class _RoleAssignment extends _SharePointQueryableInstance<IRoleAssignmentInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    /**
     * Gets the groups that directly belong to the access control list (ACL) for this securable object
     *
     */
    readonly groups: ISiteGroups;
    /**
     * Gets the role definition bindings for this role assignment
     *
     */
    readonly bindings: ISharePointQueryableCollection;
}
export interface IRoleAssignment extends _RoleAssignment, IDeleteable {
}
export declare const RoleAssignment: import("../sharepointqueryable").ISPInvokableFactory<IRoleAssignment>;
/**
 * Describes a collection of role definitions
 *
 */
export declare class _RoleDefinitions extends _SharePointQueryableCollection<IRoleDefinitionInfo[]> {
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    getById(id: number): IRoleDefinition;
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    getByName(name: string): IRoleDefinition;
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    getByType(roleTypeKind: RoleTypeKind): IRoleDefinition;
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition, high and low values need to be converted to string
     *
     */
    add(name: string, description: string, order: number, basePermissions: IBasePermissions): Promise<IRoleDefinitionAddResult>;
}
export interface IRoleDefinitions extends _RoleDefinitions {
}
export declare const RoleDefinitions: import("../sharepointqueryable").ISPInvokableFactory<IRoleDefinitions>;
/**
 * Describes a role definition
 *
 */
export declare class _RoleDefinition extends _SharePointQueryableInstance<IRoleDefinitionInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    update(properties: Partial<IRoleDefinitionInfo>): Promise<IRoleDefinitionUpdateResult>;
}
export interface IRoleDefinition extends _RoleDefinition, IDeleteable {
}
export declare const RoleDefinition: import("../sharepointqueryable").ISPInvokableFactory<IRoleDefinition>;
export interface ISecurableMethods {
    readonly roleAssignments: IRoleAssignments;
    readonly firstUniqueAncestorSecurableObject: _SharePointQueryableInstance;
    getUserEffectivePermissions(loginName: string): Promise<IBasePermissions>;
    getCurrentUserEffectivePermissions(): Promise<IBasePermissions>;
    breakRoleInheritance(copyRoleAssignments?: boolean, clearSubscopes?: boolean): Promise<any>;
    resetRoleInheritance(): Promise<any>;
    userHasPermissions(loginName: string, permission: PermissionKind): Promise<boolean>;
    currentUserHasPermissions(permission: PermissionKind): Promise<boolean>;
    hasPermissions(value: IBasePermissions, perm: PermissionKind): boolean;
}
/**
 * Result from updating a role definition
 *
 */
export interface IRoleDefinitionUpdateResult {
    definition: IRoleDefinition;
    data: any;
}
/**
 * Result from adding a role definition
 *
 */
export interface IRoleDefinitionAddResult {
    definition: IRoleDefinition;
    data: any;
}
export interface IBasePermissions {
    Low: number;
    High: number;
}
export interface IRoleAssignmentInfo {
    PrincipalId: number;
}
export interface IRoleDefinitionInfo {
    BasePermissions: IBasePermissions;
    Description: string;
    Hidden: boolean;
    Id: number;
    Name: string;
    Order: number;
    RoleTypeKind: RoleTypeKind;
}
export declare type RoleTypeKind = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export declare enum PermissionKind {
    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    EmptyMask = 0,
    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    ViewListItems = 1,
    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    AddListItems = 2,
    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    EditListItems = 3,
    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    DeleteListItems = 4,
    /**
     * Approve a minor version of a list item or document.
     */
    ApproveItems = 5,
    /**
     * View the source of documents with server-side file handlers.
     */
    OpenItems = 6,
    /**
     * View past versions of a list item or document.
     */
    ViewVersions = 7,
    /**
     * Delete past versions of a list item or document.
     */
    DeleteVersions = 8,
    /**
     * Discard or check in a document which is checked out to another user.
     */
    CancelCheckout = 9,
    /**
     * Create, change, and delete personal views of lists.
     */
    ManagePersonalViews = 10,
    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    ManageLists = 12,
    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    ViewFormPages = 13,
    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    AnonymousSearchAccessList = 14,
    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    Open = 17,
    /**
     * View pages in a Site.
     */
    ViewPages = 18,
    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    AddAndCustomizePages = 19,
    /**
     * Apply a theme or borders to the entire Site.
     */
    ApplyThemeAndBorder = 20,
    /**
     * Apply a style sheet (.css file) to the Site.
     */
    ApplyStyleSheets = 21,
    /**
     * View reports on Site usage.
     */
    ViewUsageData = 22,
    /**
     * Create a Site using Self-Service Site Creation.
     */
    CreateSSCSite = 23,
    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    ManageSubwebs = 24,
    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    CreateGroups = 25,
    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    ManagePermissions = 26,
    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    BrowseDirectories = 27,
    /**
     * View information about users of the Site.
     */
    BrowseUserInfo = 28,
    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    AddDelPrivateWebParts = 29,
    /**
     * Update Web Parts to display personalized information.
     */
    UpdatePersonalWebParts = 30,
    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    ManageWeb = 31,
    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    AnonymousSearchAccessWebLists = 32,
    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    UseClientIntegration = 37,
    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    UseRemoteAPIs = 38,
    /**
     * Manage alerts for all users of the Site.
     */
    ManageAlerts = 39,
    /**
     * Create e-mail alerts.
     */
    CreateAlerts = 40,
    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    EditMyUserInfo = 41,
    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    EnumeratePermissions = 63,
    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    FullMask = 65
}
//# sourceMappingURL=types.d.ts.map