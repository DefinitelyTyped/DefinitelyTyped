import { DavContextBase } from "../../DavContextBase";
import { IHierarchyItem } from "../../IHierarchyItem";
import { BaseDavHandler } from "./BaseDAVHandler";
export declare class GetDavHandler extends BaseDavHandler {
    appliesTo(item: IHierarchyItem): boolean;
    readonly EnableOutputBuffering: boolean;
    readonly EnableOutputDebugLogging: boolean;
    processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
}
