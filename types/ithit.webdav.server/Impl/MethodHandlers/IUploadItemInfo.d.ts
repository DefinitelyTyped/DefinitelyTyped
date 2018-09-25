/// <reference types="node" />
import { Stream } from "stream";
import { IItemCollection } from "../../IItemCollection";
export interface IUploadItemInfo {
    Name: string;
    Stream: Stream;
    ContentType: string;
    ContentLength: number;
    GetParent(): Promise<IItemCollection>;
}
