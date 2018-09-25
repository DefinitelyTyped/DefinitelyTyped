import { IEnumerable } from "typescript-dotnet-commonjs/System/Collections/Enumeration/IEnumerable";
import { IHierarchyItem } from "../IHierarchyItem";
/**Represents result of paging. */
export declare class PageResult {
    /**
     * List of {@link IHierarchyItemAsync} items. Each item represents a file or a folder item.
     */
    Items: IEnumerable<IHierarchyItem>;
    /**Total number of items. */
    TotalNumber: number;
    /**
     * Initializes a new instance of the @see PageResult  class with items and totalNumber.
     */
    constructor(items: IEnumerable<IHierarchyItem>, totalNumber: number);
}
