/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
import { IList } from "typescript-dotnet-commonjs/System/Collections/IList";
import { IHierarchyItem } from "./IHierarchyItem";
import { PropertyName } from "./PropertyName";
/**
 * Base interface for folders.
 * @remarks Base interface for all kinds of folders ({@link IFolder} , {@link IPrincipalFolderAsync}  etc.).
 * In addition to methods and properties provided by {@link IHierarchyItem}  interface this interface also provides {@link IItemCollection.GetChildrenAsync}  method to list all children of this folder.
 */
export interface IItemCollection extends IHierarchyItem {
    /**
     * Gets direct children of this folder.
     * @param propNames List of properties requested by the client.
     * @returns {@link IEnumerable{T}}  with {@link IHierarchyItem}  items. Each item is a file or folder item.
     */
    GetChildren(propNames: IList<PropertyName>): Promise<IEnumerable<IHierarchyItem>>;
}
