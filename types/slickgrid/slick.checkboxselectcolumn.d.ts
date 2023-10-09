declare namespace Slick {
    export interface SlickGridCheckBoxSelectColumnOptions extends PluginOptions {
        /**
         * Column to add the checkbox to
         * @default "_checkbox_selector"
         */
        columnId?: string | undefined;

        /**
         * CSS class to be added to cells in this column
         * @default null
         */
        cssClass?: string | undefined;

        /**
         * Tooltip text to display for this column
         * @default "Select/Deselect All"
         */
        toolTip?: string | undefined;

        /**
         * Width of the column
         * @default 30
         */
        width?: number | undefined;
    }

    export class CheckboxSelectColumn<T extends Slick.SlickData> extends Plugin<T> {
        constructor(options?: SlickGridCheckBoxSelectColumnOptions);
        init(grid: Slick.Grid<T>): void;
        destroy(): void;
        getColumnDefinition(): Slick.ColumnMetadata<T>;
    }
}
