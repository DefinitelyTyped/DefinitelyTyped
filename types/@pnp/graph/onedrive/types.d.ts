import { _GraphQueryableInstance, IGraphQueryableInstance, IGraphQueryableCollection, _GraphQueryableCollection } from "../graphqueryable";
import { Drive as IDriveType } from "@microsoft/microsoft-graph-types";
import { IGetById, IDeleteable, IUpdateable } from "../decorators";
/**
 * Describes a Drive instance
 *
 */
export declare class _Drive extends _GraphQueryableInstance<IDriveType> {
    readonly root: IRoot;
    readonly list: IGraphQueryableInstance;
    readonly recent: IDriveItems;
    readonly sharedWithMe: IDriveItems;
    getItemById(id: string): IDriveItem;
}
export interface IDrive extends _Drive {
}
export declare const Drive: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDrive;
/**
 * Describes a collection of Drive objects
 *
 */
export declare class _Drives extends _GraphQueryableCollection<IDriveType[]> {
}
export interface IDrives extends _Drives, IGetById<IDrive> {
}
export declare const Drives: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDrives;
/**
 * Describes a Root instance
 *
 */
export declare class _Root extends _GraphQueryableInstance<IDrive> {
    readonly children: IDriveItems;
    search(query: string): Promise<any>;
    readonly thumbnails: IGraphQueryableCollection;
}
export interface IRoot extends _Root {
}
export declare const Root: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IRoot;
/**
 * Describes a Drive Item instance
 *
 */
export declare class _DriveItem extends _GraphQueryableInstance<any> {
    readonly children: IDriveItems;
    readonly thumbnails: IGraphQueryableCollection;
    readonly versions: IGraphQueryableCollection<IDriveItemVersionInfo>;
    move(parentReference: {
        id: "string";
    }, name: string): Promise<void>;
    getContent(): Promise<Blob>;
    setContent(content: any): Promise<{
        id: string;
        name: string;
        size: number;
    }>;
}
export interface IDriveItem extends _DriveItem, IDeleteable, IUpdateable {
}
export declare const DriveItem: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDriveItem;
/**
 * Describes a collection of Drive Item objects
 *
 */
export declare class _DriveItems extends _GraphQueryableCollection {
}
export interface IDriveItems extends _DriveItems, IGetById<IDriveItem> {
}
export declare const DriveItems: (baseUrl: string | import("../graphqueryable").IGraphQueryable<any>, path?: string) => IDriveItems;
/**
 * IDriveItemAddResult
 */
export interface IDriveItemAddResult {
    data: any;
    driveItem: IDriveItem;
}
export interface IDriveItemVersionInfo {
    id: string;
    lastModifiedBy: {
        user: {
            id: string;
            displayName: string;
        };
    };
    lastModifiedDateTime: string;
    size: number;
}
//# sourceMappingURL=types.d.ts.map