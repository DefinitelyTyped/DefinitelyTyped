import { ShareableQueryable, ISharingResult, SharingRole, IShareObjectOptions, SharingLinkKind, IShareLinkResponse, ISharingInformationRequest, ISharingRecipient, ISharingEntityPermission, ISharingInformation, IObjectSharingSettings, ISharingEmailData } from "./types";
/**
 * Shares an object based on the supplied options
 *
 * @param options The set of options to send to the ShareObject method
 * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
 */
export declare function shareObject(o: ShareableQueryable, options: IShareObjectOptions, bypass?: boolean): Promise<ISharingResult>;
/**
 * Gets a sharing link for the supplied
 *
 * @param kind The kind of link to share
 * @param expiration The optional expiration for this link
 */
export declare function getShareLink(this: ShareableQueryable, kind: SharingLinkKind, expiration?: Date): Promise<IShareLinkResponse>;
/**
 * Checks Permissions on the list of Users and returns back role the users have on the Item.
 *
 * @param recipients The array of Entities for which Permissions need to be checked.
 */
export declare function checkPermissions(this: ShareableQueryable, recipients: ISharingRecipient[]): Promise<ISharingEntityPermission[]>;
/**
 * Get Sharing Information.
 *
 * @param request The SharingInformationRequest Object.
 * @param expands Expand more fields.
 *
 */
export declare function getSharingInformation(this: ShareableQueryable, request?: ISharingInformationRequest, expands?: string[]): Promise<ISharingInformation>;
/**
 * Gets the sharing settings of an item.
 *
 * @param useSimplifiedRoles Determines whether to use simplified roles.
 */
export declare function getObjectSharingSettings(this: ShareableQueryable, useSimplifiedRoles?: boolean): Promise<IObjectSharingSettings>;
/**
 * Unshares this object
 */
export declare function unshareObject(this: ShareableQueryable): Promise<ISharingResult>;
/**
 * Deletes a link by type
 *
 * @param kind Deletes a sharing link by the kind of link
 */
export declare function deleteLinkByKind(this: ShareableQueryable, linkKind: SharingLinkKind): Promise<void>;
/**
 * Removes the specified link to the item.
 *
 * @param kind The kind of link to be deleted.
 * @param shareId
 */
export declare function unshareLink(this: ShareableQueryable, linkKind: SharingLinkKind, shareId?: string): Promise<void>;
/**
 * Shares this instance with the supplied users
 *
 * @param loginNames Resolved login names to share
 * @param role The role
 * @param requireSignin True to require the user is authenticated, otherwise false
 * @param propagateAcl True to apply this share to all children
 * @param emailData If supplied an email will be sent with the indicated properties
 */
export declare function shareWith(o: ShareableQueryable, loginNames: string | string[], role: SharingRole, requireSignin?: boolean, propagateAcl?: boolean, emailData?: ISharingEmailData): Promise<ISharingResult>;
//# sourceMappingURL=funcs.d.ts.map