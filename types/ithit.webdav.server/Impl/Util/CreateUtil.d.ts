import { IHierarchyItem } from "../../IHierarchyItem";
import { IItemCollection } from "../../IItemCollection";
export declare class CreateUtil {
    static сreateItem(parent: IItemCollection, name: string): Promise<IHierarchyItem>;
    static сreateCollection(parent: IItemCollection, name: string): Promise<void>;
    private static instanceOfIFolder;
}
