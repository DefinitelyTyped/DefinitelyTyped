import { ITypedHash } from "@pnp/common";
import { _SharePointQueryableInstance, ISharePointQueryableCollection, _SharePointQueryableCollection, ISharePointQueryableInstance, ISharePointQueryable, IDeleteableWithETag } from "../sharepointqueryable";
import { IItem } from "../items/types";
import { IResourcePath } from "../utils/toResourcePath";
export declare class _Folders extends _SharePointQueryableCollection<IFolderInfo[]> {
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    getByName(name: string): IFolder;
    /**
     * Adds a new folder at the specified URL
     *
     * @param url
     */
    add(url: string): Promise<IFolderAddResult>;
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    addUsingPath(serverRelativeUrl: string, overwrite?: boolean): Promise<IFolderAddResult>;
}
export interface IFolders extends _Folders {
}
export declare const Folders: import("../sharepointqueryable").ISPInvokableFactory<IFolders>;
export declare class _Folder extends _SharePointQueryableInstance<IFolderInfo> {
    delete: (this: ISharePointQueryable<any>, eTag?: string) => Promise<void>;
    /**
     * Specifies the sequence in which content types are displayed.
     *
     */
    readonly contentTypeOrder: ISharePointQueryableCollection;
    /**
     * Gets this folder's sub folders
     *
     */
    readonly folders: IFolders;
    /**
     * Gets this folder's list item field values
     *
     */
    readonly listItemAllFields: ISharePointQueryableInstance;
    /**
     * Gets the parent folder, if available
     *
     */
    readonly parentFolder: IFolder;
    /**
     * Gets this folder's properties
     *
     */
    readonly properties: ISharePointQueryableInstance;
    /**
     * Gets this folder's server relative url
     *
     */
    readonly serverRelativeUrl: ISharePointQueryable;
    /**
     * Gets a value that specifies the content type order.
     *
     */
    readonly uniqueContentTypeOrder: ISharePointQueryableCollection;
    /**
     * Updates folder's properties
     * @param props Folder's properties to update
     */
    update: (props: ITypedHash<any>) => Promise<IFolderUpdateResult>;
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): Promise<string>;
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    getItem<T>(...selects: string[]): Promise<IItem & T>;
    /**
     * Moves a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    moveTo(destUrl: string): Promise<void>;
    /**
     * Moves a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    moveByPath(destUrl: string, KeepBoth?: boolean): Promise<void>;
    /**
     * Copies a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    copyTo(destUrl: string): Promise<void>;
    /**
     * Copies a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    copyByPath(destUrl: string, KeepBoth?: boolean): Promise<void>;
    /**
     * Gets the shareable item associated with this folder
     */
    protected getShareable(): Promise<IItem>;
}
export interface IFolder extends _Folder, IDeleteableWithETag {
}
export declare const Folder: import("../sharepointqueryable").ISPInvokableFactory<IFolder>;
/**
 * Describes result of adding a folder
 */
export interface IFolderAddResult {
    /**
     * A folder's instance
     */
    folder: IFolder;
    /**
     * Additional data from the server
     */
    data: any;
}
/**
 * Describes result of updating a folder
 */
export interface IFolderUpdateResult {
    /**
     * A folder's instance
     */
    folder: IFolder;
    /**
     * Additional data from the server
     */
    data: any;
}
export interface IFolderInfo {
    readonly "odata.id": string;
    Exists: boolean;
    IsWOPIEnabled: boolean;
    ItemCount: number;
    Name: string;
    ProgID: string | null;
    ServerRelativeUrl: string;
    ServerRelativePath: IResourcePath;
    TimeCreated: string;
    TimeLastModified: string;
    UniqueId: string;
    WelcomePage: string;
}
//# sourceMappingURL=types.d.ts.map