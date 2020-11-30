import { ITypedHash } from "../../common";
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
    get contentTypeOrder(): ISharePointQueryableCollection;
    /**
     * Gets this folder's sub folders
     *
     */
    get folders(): IFolders;
    /**
     * Gets this folder's list item field values
     *
     */
    get listItemAllFields(): ISharePointQueryableInstance;
    /**
     * Gets the parent folder, if available
     *
     */
    get parentFolder(): IFolder;
    /**
     * Gets this folder's properties
     *
     */
    get properties(): ISharePointQueryableInstance;
    /**
     * Gets this folder's server relative url
     *
     */
    get serverRelativeUrl(): ISharePointQueryable;
    /**
     * Gets a value that specifies the content type order.
     *
     */
    get uniqueContentTypeOrder(): ISharePointQueryableCollection;
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
     * Deletes the folder object with options.
     *
     * @param parameters Specifies the options to use when deleting a folder.
     */
    deleteWithParams(parameters: Partial<IFolderDeleteParams>): Promise<void>;
    /**
     * Create the subfolder inside the current folder, as specified by the leafPath
     *
     * @param leafPath leafName of the new folder
     */
    addSubFolderUsingPath(leafPath: string): Promise<IFolder>;
    /**
     * Gets the parent information for this folder's list and web
     */
    getParentInfos(): Promise<IFolderParentInfos>;
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
export interface IFolderDeleteParams {
    /**
     * If true, delete or recycle a folder iff all files have
     * LockType values SPLockType.Shared or SPLockType.None.
     * When false, delete or recycle the folder if all files
     * have  the LockType value SPLockType.None. See the <see cref="SPFile.SPLockType"/> enum.
     */
    BypassSharedLock: boolean;
    /**
     * Gets or sets a string value that allows SPFolder delete
     * and recycle methods to target a folder with a matching value
     */
    ETagMatch: string;
    /**
     * Gets or sets a Boolean that controls the way in which folders
     * are deleted. If set to true, only empty folders will be deleted.
     * If set to false, folders that are not empty may be deleted.
     */
    DeleteIfEmpty: boolean;
}
export interface IFolderParentInfos {
    Folder: {
        ServerRelativeUrl: string;
    };
    ParentList: {
        Id: string;
        RootFolderServerRelativePath: IResourcePath;
        RootFolderServerRelativeUrl: string;
        RootFolderUniqueId: string;
    };
    ParentWeb: {
        Id: string;
        ServerRelativePath: IResourcePath;
        ServerRelativeUrl: string;
        Url: string;
    };
}
//# sourceMappingURL=types.d.ts.map