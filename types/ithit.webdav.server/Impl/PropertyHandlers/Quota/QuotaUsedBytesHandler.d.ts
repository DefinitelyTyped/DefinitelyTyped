import { DavContextBase } from "../../../DavContextBase";
import { IHierarchyItem } from "../../../IHierarchyItem";
import { PropertyHandlerBase } from "../PropertyHandlerBase";
export declare class QuotaUsedBytesHandler extends PropertyHandlerBase {
    AppliesTo(item: IHierarchyItem): boolean;
    Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
    readonly IsReadonly: boolean;
}
