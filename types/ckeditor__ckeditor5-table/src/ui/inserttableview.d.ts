import { View, ViewCollection } from '@ckeditor/ckeditor5-ui';

/**
 * The table size view.
 *
 * It renders a 10x10 grid to choose the inserted table size.
 */
export default class InsertTableView extends View {
    /**
     * A collection of table size box items.
     */
    readonly items: ViewCollection;
    /**
     * The currently selected number of rows of the new table.
     */
    get rows(): number;
    protected set rows(value: number);
    /**
     * The currently selected number of columns of the new table.
     */
    get columns(): number;
    protected set columns(value: number);
    focus(): void;
    focusLast(): void;
}
