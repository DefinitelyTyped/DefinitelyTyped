declare namespace Slick {
    export interface SlickGridAutoTooltipsOption extends PluginOptions {
        /**
         * Enable tooltip for grid cells
         * @default true
         */
        enableForCells?: boolean | undefined;

        /**
         * Enable tooltip for header cells
         * @default false
         */
        enableForHeaderCells?: boolean | undefined;

        /**
         * The maximum length for a tooltip
         * @default null
         */
        maxToolTipLength?: number | undefined;
    }

    /**
     * AutoTooltips plugin to show/hide tooltips when columns are too narrow to fit content.
     */
    export class AutoTooltips extends Plugin<Slick.SlickData> {
        constructor(option?: SlickGridAutoTooltipsOption);
    }
}
