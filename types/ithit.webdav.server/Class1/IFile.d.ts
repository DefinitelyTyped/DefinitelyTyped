/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
import { IContent } from "../IContent";
import { IHierarchyItem } from "../IHierarchyItem";
/**
 * Represents a file in the WebDAV repository.
 * @remarks
 * This interface represents a file in a repository. This is a marker interface derived from {@link IContent}
 * and {@link IHierarchyItem} , it does not add any additional properties or methods.
 * {@link IContent.ContentType}  property must return the MIME type of the file.
 */
export interface IFile extends IHierarchyItem, IContent {
}
