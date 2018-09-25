/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { IItemCollection } from "./IItemCollection";
import { PropertyName } from "./PropertyName";
import { PropertyValue } from "./PropertyValue";
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
