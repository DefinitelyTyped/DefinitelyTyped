import { DavContextBase } from "../../DavContextBase";
import { DavEngine } from "../../DavEngine";
import { IPropertyHandler } from "../../Extensibility/IPropertyHandler";
import { IHierarchyItem } from "../../IHierarchyItem";
export declare abstract class PropertyHandlerBase implements IPropertyHandler {
    protected static nsDav: string;
    protected static nsCalDav: string;
    protected static nsCardDav: string;
    abstract Write(writer: any, item: IHierarchyItem, context: DavContextBase): void;
    Update(context: DavContextBase, item: IHierarchyItem, value: Element): void;
    abstract AppliesTo(item: IHierarchyItem): boolean;
    readonly IsReadonly: boolean;
    protected WriteItemHref(writer: any, context: DavContextBase, engine: DavEngine, item: IHierarchyItem): void;
    readonly IncludeInAllProp: boolean;
}
