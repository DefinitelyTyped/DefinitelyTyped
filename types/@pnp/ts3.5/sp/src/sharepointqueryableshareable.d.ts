import { SharePointQueryable, SharePointQueryableInstance } from "./sharepointqueryable";
import { SharePointQueryableSecurable } from "./sharepointqueryablesecurable";
import { RoleType, SharingLinkKind, ShareLinkResponse, SharingRole, SharingEmailData, SharingResult, SharingRecipient, SharingEntityPermission, SharingInformationRequest, ObjectSharingSettings, SharingInformation, ShareObjectOptions } from "./types";
/**
 * Internal helper class used to augment classes to include sharing functionality
 */
export declare class SharePointQueryableShareable extends SharePointQueryable {
    /**
     * Gets a sharing link for the supplied
     *
     * @param kind The kind of link to share
     * @param expiration The optional expiration for this link
     */
    getShareLink(kind: SharingLinkKind, expiration?: Date): Promise<ShareLinkResponse>;
    /**
     * Shares this instance with the supplied users
     *
     * @param loginNames Resolved login names to share
     * @param role The role
     * @param requireSignin True to require the user is authenticated, otherwise false
     * @param propagateAcl True to apply this share to all children
     * @param emailData If supplied an email will be sent with the indicated properties
     */
    shareWith(loginNames: string | string[], role: SharingRole, requireSignin?: boolean, propagateAcl?: boolean, emailData?: SharingEmailData): Promise<SharingResult>;
    /**
     * Shares an object based on the supplied options
     *
     * @param options The set of options to send to the ShareObject method
     * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
     */
    shareObject(options: ShareObjectOptions, bypass?: boolean): Promise<SharingResult>;
    /**
     * Calls the web's UnshareObject method
     *
     * @param url The url of the object to unshare
     */
    unshareObjectWeb(url: string): Promise<SharingResult>;
    /**
     * Checks Permissions on the list of Users and returns back role the users have on the Item.
     *
     * @param recipients The array of Entities for which Permissions need to be checked.
     */
    checkPermissions(recipients: SharingRecipient[]): Promise<SharingEntityPermission[]>;
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     * @param expands Expand more fields.
     *
     */
    getSharingInformation(request?: SharingInformationRequest, expands?: string[]): Promise<SharingInformation>;
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    getObjectSharingSettings(useSimplifiedRoles?: boolean): Promise<ObjectSharingSettings>;
    /**
     * Unshares this object
     */
    unshareObject(): Promise<SharingResult>;
    /**
     * Deletes a link by type
     *
     * @param kind Deletes a sharing link by the kind of link
     */
    deleteLinkByKind(kind: SharingLinkKind): Promise<void>;
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId
     */
    unshareLink(kind: SharingLinkKind, shareId?: string): Promise<void>;
    /**
     * Calculates the roleValue string used in the sharing query
     *
     * @param role The Sharing Role
     * @param group The Group type
     */
    protected getRoleValue(role: SharingRole, group: RoleType): Promise<string>;
    private getShareObjectWeb;
    private sendShareObjectRequest;
}
export declare class SharePointQueryableShareableWeb extends SharePointQueryableSecurable {
    /**
     * Shares this web with the supplied users
     * @param loginNames The resolved login names to share
     * @param role The role to share this web
     * @param emailData Optional email data
     */
    shareWith(loginNames: string | string[], role?: SharingRole, emailData?: SharingEmailData): Promise<SharingResult>;
    /**
     * Provides direct access to the static web.ShareObject method
     *
     * @param url The url to share
     * @param loginNames Resolved loginnames string[] of a single login name string
     * @param roleValue Role value
     * @param emailData Optional email data
     * @param groupId Optional group id
     * @param propagateAcl
     * @param includeAnonymousLinkInEmail
     * @param useSimplifiedRoles
     */
    shareObject(url: string, loginNames: string | string[], role: SharingRole, emailData?: SharingEmailData, group?: RoleType, propagateAcl?: boolean, includeAnonymousLinkInEmail?: boolean, useSimplifiedRoles?: boolean): Promise<SharingResult>;
    /**
     * Supplies a method to pass any set of arguments to ShareObject
     *
     * @param options The set of options to send to ShareObject
     */
    shareObjectRaw(options: any): Promise<SharingResult>;
    /**
     * Unshares the object
     *
     * @param url The url of the object to stop sharing
     */
    unshareObject(url: string): Promise<SharingResult>;
}
export declare class SharePointQueryableShareableItem extends SharePointQueryableSecurable {
    /**
     * Gets a link suitable for sharing for this item
     *
     * @param kind The type of link to share
     * @param expiration The optional expiration date
     */
    getShareLink(kind?: SharingLinkKind, expiration?: Date): Promise<ShareLinkResponse>;
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, emailData?: SharingEmailData): Promise<SharingResult>;
    /**
     * Checks Permissions on the list of Users and returns back role the users have on the Item.
     *
     * @param recipients The array of Entities for which Permissions need to be checked.
     */
    checkSharingPermissions(recipients: SharingRecipient[]): Promise<SharingEntityPermission[]>;
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     * @param expands Expand more fields.
     *
     */
    getSharingInformation(request?: SharingInformationRequest, expands?: string[]): Promise<SharingInformation>;
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    getObjectSharingSettings(useSimplifiedRoles?: boolean): Promise<ObjectSharingSettings>;
    /**
     * Unshare this item
     */
    unshare(): Promise<SharingResult>;
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
export declare class FileFolderShared extends SharePointQueryableInstance {
    /**
     * Gets a link suitable for sharing
     *
     * @param kind The kind of link to get
     * @param expiration Optional, an expiration for this link
     */
    getShareLink(kind?: SharingLinkKind, expiration?: Date): Promise<ShareLinkResponse>;
    /**
         * Checks Permissions on the list of Users and returns back role the users have on the Item.
         *
         * @param recipients The array of Entities for which Permissions need to be checked.
         */
    checkSharingPermissions(recipients: SharingRecipient[]): Promise<SharingEntityPermission[]>;
    /**
     * Get Sharing Information.
     *
     * @param request The SharingInformationRequest Object.
     * @param expands Expand more fields.
     *
     */
    getSharingInformation(request?: SharingInformationRequest, expands?: string[]): Promise<SharingInformation>;
    /**
     * Gets the sharing settings of an item.
     *
     * @param useSimplifiedRoles Determines whether to use simplified roles.
     */
    getObjectSharingSettings(useSimplifiedRoles?: boolean): Promise<ObjectSharingSettings>;
    /**
     * Unshare this item
     */
    unshare(): Promise<SharingResult>;
    /**
     * Deletes a sharing link by the kind of link
     *
     * @param kind The kind of link to be deleted.
     */
    deleteSharingLinkByKind(kind: SharingLinkKind): Promise<void>;
    /**
     * Removes the specified link to the item.
     *
     * @param kind The kind of link to be deleted.
     * @param shareId The share id to delete
     */
    unshareLink(kind: SharingLinkKind, shareId?: string): Promise<void>;
    /**
     * For files and folders we need to use the associated item end point
     */
    protected getShareable(): Promise<SharePointQueryableShareable>;
}
export declare class SharePointQueryableShareableFile extends FileFolderShared {
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param shareEverything Share everything in this folder, even items with unique permissions.
     * @param requireSignin If true the user must signin to view link, otherwise anyone with the link can access the resource
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, emailData?: SharingEmailData): Promise<SharingResult>;
}
export declare class SharePointQueryableShareableFolder extends FileFolderShared {
    /**
     * Shares this item with one or more users
     *
     * @param loginNames string or string[] of resolved login names to which this item will be shared
     * @param role The role (View | Edit) applied to the share
     * @param shareEverything Share everything in this folder, even items with unique permissions.
     * @param requireSignin If true the user must signin to view link, otherwise anyone with the link can access the resource
     * @param emailData Optional, if inlucded an email will be sent. Note subject currently has no effect.
     */
    shareWith(loginNames: string | string[], role?: SharingRole, requireSignin?: boolean, shareEverything?: boolean, emailData?: SharingEmailData): Promise<SharingResult>;
}
