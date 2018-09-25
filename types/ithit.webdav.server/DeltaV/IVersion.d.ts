import { IDeltaVItem } from "./IDeltaVItem";
import { IVersionableItem } from "./IVersionableItem";
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
