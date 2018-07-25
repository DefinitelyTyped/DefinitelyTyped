// Type definitions for SlickGrid CheckboxSelectColumn Plugin 2.1.0
// Project: https://github.com/mleibman/SlickGrid
// Definitions by: berwyn <https://github.com/berwyn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Slick {
    export interface SlickGridCheckBoxSelectColumnOptions extends PluginOptions {
        /**
         * Column to add the checkbox to
         * @default "_checkbox_selector"
         */
        columnId?: string;

        /**
         * CSS class to be added to cells in this column
         * @default null
         */
        cssClass?: string;

        /**
         * Tooltip text to display for this column
         * @default "Select/Deselect All"
         */
        toolTip?: string;

        /**
         * Width of the column
         * @default 30
         */
        width?: number;
    }

    export class CheckboxSelectColumn<T extends Slick.SlickData> extends Plugin<T> {
        constructor(options?: SlickGridCheckBoxSelectColumnOptions);
        init(grid: Slick.Grid<T>): void;
        destroy(): void;
        getColumnDefinition(): Slick.ColumnMetadata<T>;
    }
}
