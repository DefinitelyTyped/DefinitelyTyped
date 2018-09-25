/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { AutoVersion } from "./AutoVersion";
import { IDeltaVItem } from "./IDeltaVItem";
import { IHistory } from "./IHistory";
import { IVersion } from "./IVersion";
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
