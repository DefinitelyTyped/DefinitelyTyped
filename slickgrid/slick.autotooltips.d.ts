// Type definitions for SlickGrid AutoToolTips Plugin 2.1.0
// Project: https://github.com/mleibman/SlickGrid
// Definitions by: Ryo Iwamoto <https://github.com/ryiwamoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace Slick {
    export interface SlickGridAutoTooltipsOption extends PluginOptions {
        /**
         * Enable tooltip for grid cells
         * @default true
         */
        enableForCells?: boolean;

        /**
         * Enable tooltip for header cells
         * @default false
         */
        enableForHeaderCells?: boolean;

        /**
         * The maximum length for a tooltip
         * @default null
         */
        maxToolTipLength?: number;
    }

    /**
     * AutoTooltips plugin to show/hide tooltips when columns are too narrow to fit content.
     */
    export class AutoTooltips extends Plugin<Slick.SlickData> {
        constructor(option?: SlickGridAutoTooltipsOption);
    }
}
