import { ColumnOptions } from "./ColumnWidgetOptions";
import { FilterOptions } from "./FilterOptions";
import { PagerOptions } from "./PagerOptions";
import { ResizingOptions } from "./ResizingOptions";
import { SaveSortOptions } from "./SaveSortOptions";
import { StickyHeaderOptions } from "./StickyHeaderOptions";
import { ZebraOptions } from "./ZebraOptions";

/**
 * Represents options for the widgets.
 */
export interface WidgetOptions<TElement = HTMLElement>
    extends
        ColumnOptions,
        FilterOptions<TElement>,
        ResizingOptions,
        SaveSortOptions,
        StickyHeaderOptions,
        PagerOptions<TElement>,
        ZebraOptions
{
    [option: string]: any;
}
