import { DavContextBase } from "../../DavContextBase";
import { IHierarchyItem } from "../../IHierarchyItem";
import { BaseDavHandler } from "./BaseDAVHandler";
export declare class UnlockDAVHandler extends BaseDavHandler {
    appliesTo(item: IHierarchyItem): boolean;
    processRequest(context: DavContextBase, item: IHierarchyItem): void;
    private instanceOfILock;
}
