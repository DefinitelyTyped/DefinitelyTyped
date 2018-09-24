import { DavContextBase } from "../../DavContextBase";
import { IHierarchyItem } from "../../IHierarchyItem";
import { BaseDavHandler } from "./BaseDAVHandler";
export declare class LockDavHandler extends BaseDavHandler {
    appliesTo(item: IHierarchyItem): boolean;
    processRequest(context: DavContextBase, item: IHierarchyItem): Promise<void>;
    private instanceOfILock;
    private writeLockDiscoveryResponse;
    private lockExistingItem;
    private createNewLockedItem;
    private refreshLock;
    private getLockInfo;
}
