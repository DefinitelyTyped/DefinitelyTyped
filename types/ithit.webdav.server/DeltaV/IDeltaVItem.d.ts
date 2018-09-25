/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IHierarchyItem } from "../IHierarchyItem";
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
