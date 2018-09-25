/// <reference types="node" />
import { Stream, Writable } from "stream";
import { DavContextBase } from "../../DavContextBase";
import { DavRequest } from "../../Extensibility/DavRequest";
import { IContent } from "../../IContent";
import { IHierarchyItem } from "../../IHierarchyItem";
import { IItemCollection } from "../../IItemCollection";
import { BaseUploadHandler } from "./BaseUploadHandler";
import { IUploadItemInfo } from "./IUploadItemInfo";
export declare class ItemInfo implements IUploadItemInfo {
    private context;
    private stream;
    constructor(context: DavContextBase);
    GetParent(): Promise<IItemCollection>;
    readonly Name: string;
    readonly Stream: Stream;
    readonly ContentType: string;
    readonly ContentLength: number;
}
export declare class PutDavHandler extends BaseUploadHandler {
    readonly enableInputDebugLogging: boolean;
    appliesTo(item: IHierarchyItem): boolean;
    processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
    protected updateFileData(request: DavRequest, file: IContent, inputStream: Writable, contentLength: number, contentType: string): Promise<boolean>;
    private instanceOfIFolder;
}
