/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { IHierarchyItem } from "../IHierarchyItem";
import { PropertyName } from "../PropertyName";
import { IVersion } from "./IVersion";
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
