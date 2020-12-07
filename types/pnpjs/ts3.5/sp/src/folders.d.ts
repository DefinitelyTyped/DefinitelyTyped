import { TypedHash } from "@pnp/common";
import { SharePointQueryable, SharePointQueryableCollection, SharePointQueryableInstance } from "./sharepointqueryable";
import { SharePointQueryableShareableFolder } from "./sharepointqueryableshareable";
import { Files } from "./files";
import { Item } from "./items";
/**
 * Describes a collection of Folder objects
 *
 */
export declare class Folders extends SharePointQueryableCollection {
    /**
     * Gets a folder by folder name
     *
     */
    getByName(name: string): Folder;
    /**
     * Adds a new folder to the current folder (relative) or any folder (absolute)
     *
     * @param url The relative or absolute url where the new folder will be created. Urls starting with a forward slash are absolute.
     * @returns The new Folder and the raw response.
     */
    add(url: string): Promise<FolderAddResult>;
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    addUsingPath(serverRelativeUrl: string, overwrite?: boolean): Promise<FolderAddResult>;
}
/**
 * Describes a single Folder instance
 *
 */
export declare class Folder extends SharePointQueryableShareableFolder {
    /**
     * Specifies the sequence in which content types are displayed.
     *
     */
    readonly contentTypeOrder: SharePointQueryableCollection;
    /**
     * Gets this folder's files
     *
     */
    readonly files: Files;
    /**
     * Gets this folder's sub folders
     *
     */
    readonly folders: Folders;
    /**
     * Gets this folder's list item field values
     *
     */
    readonly listItemAllFields: SharePointQueryableInstance;
    /**
     * Gets the parent folder, if available
     *
     */
    readonly parentFolder: Folder;
    /**
     * Gets this folder's properties
     *
     */
    readonly properties: SharePointQueryableInstance;
    /**
     * Gets this folder's server relative url
     *
     */
    readonly serverRelativeUrl: SharePointQueryable;
    /**
     * Gets a value that specifies the content type order.
     *
     */
    readonly uniqueContentTypeOrder: SharePointQueryableCollection;
    update: (props: TypedHash<any>) => Promise<FolderUpdateResult>;
    /**
    * Delete this folder
    *
    * @param eTag Value used in the IF-Match header, by default "*"
    */
    delete(eTag?: string): Promise<void>;
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): Promise<string>;
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    getItem<T>(...selects: string[]): Promise<Item & T>;
    /**
     * Moves a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    moveTo(destUrl: string): Promise<void>;
    /**
     * Copies a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    copyTo(destUrl: string): Promise<void>;
}
export interface FolderAddResult {
    folder: Folder;
    data: any;
}
export interface FolderUpdateResult {
    folder: Folder;
    data: any;
}
