import { DavContextBase } from "../../../DavContextBase";
import { IHierarchyItem } from "../../../IHierarchyItem";
import { PropertyHandlerBase } from "../PropertyHandlerBase";
export declare class LockDiscoveryHandler extends PropertyHandlerBase {
    AppliesTo(item: IHierarchyItem): boolean;
    Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
    private instanceOfILock;
}
