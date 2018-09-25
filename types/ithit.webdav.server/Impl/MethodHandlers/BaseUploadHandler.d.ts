/// <reference types="node" />
import { Stream } from "stream";
import { DavContextBase } from "../../DavContextBase";
import { IVersionableItem } from "../../DeltaV/IVersionableItem";
import { DavRequest } from "../../Extensibility/DavRequest";
import { IContent } from "../../IContent";
import { IHierarchyItem } from "../../IHierarchyItem";
import { BaseDavHandler } from "./BaseDAVHandler";
import { IUploadItemInfo } from "./IUploadItemInfo";
export declare abstract class BaseUploadHandler extends BaseDavHandler {
    protected processFileUpload(item: IHierarchyItem, itemInfo: IUploadItemInfo, context: DavContextBase): Promise<void>;
    protected autoPutUnderVersionControl(verItem: IVersionableItem, context: DavContextBase): Promise<boolean>;
    protected autoVersionLogic(request: DavRequest, verItem: IVersionableItem, inputStream: Stream, contentLength: number, contentType: string): Promise<void>;
    protected abstract updateFileData(request: DavRequest, file: IContent, inputStream: Stream, length: number, contentType: string): Promise<boolean>;
    instanceOfIContent(object: any): object is IContent;
    private processVersionableItem;
    private createNewFile;
    private updateContentAndPutUnderVersionControl;
}
