import { DavContextBase } from "../../DavContextBase";
import { IHierarchyItem } from "../../IHierarchyItem";
import { BaseDavHandler } from "./BaseDAVHandler";
export declare class OptionsDavHandler extends BaseDavHandler {
    appliesTo(item: IHierarchyItem): boolean;
    processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
}
