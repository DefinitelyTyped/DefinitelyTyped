import { DavContextBase } from "../../DavContextBase";
import { IContent } from "../../IContent";
import { IHierarchyItem } from "../../IHierarchyItem";
import { BaseDavHandler } from "./BaseDAVHandler";
export declare class HeadDavHandler extends BaseDavHandler {
    readonly enableOutputBuffering: boolean;
    appliesTo(item: IHierarchyItem): boolean;
    instanceOfIContent(object: any): object is IContent;
    processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
}
