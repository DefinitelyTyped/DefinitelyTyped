import { PluginCreator } from "postcss";

/**
 * A Node.js module and PostCSS plugin to sort CSS, SCSS or Less declarations based on their property names.
 */
declare namespace cssDeclarationSorter {
    /**
     * Default, order in a simple alphabetical manner from a - z.
     */
    type Alphabetical = "alphabetical";

    /**
     * Order from most important, flow affecting properties, to least important properties.
     * ```
     * 1. Box
     * 2. Border
     * 3. Background
     * 4. Text
     * 5. Other
     * ```
     */
    type SMACSS = "smacss";

    /**
     * Order properties applying outside the box model, moving inward to intrinsic changes.
     * ```
     * 1. Positioning
     * 2. Visibility
     * 3. Box model
     * 4. Dimensions
     * 5. Text
     * ```
     */
    type ConcentricCSS = "concentric-css";

    type SortOrder = Alphabetical | SMACSS | ConcentricCSS;

    /**
     * This function receives two declaration names and is expected
     * to return -1, 0 or 1 depending on the wanted order.
     */
    type SortFunction = (aProp: string, bProp: string) => -1 | 0 | 1;

    interface Options {
        /**
         * Provide the name of one of the built-in sort orders or a comparison function that is passed to `Array.sort`.
         * @default 'alphabetical'
         */
        order?: SortOrder | SortFunction | undefined;
        /**
         * To prevent breaking legacy CSS where shorthand declarations override longhand declarations
         * (also taking into account vendor prefixes) this option can enabled.
         * For example `animation-name: some; animation: greeting;` will be kept in this order when `keepOverrides` is `true`.
         */
        keepOverrides?: boolean | undefined;
    }

    type CssDeclarationSorter = PluginCreator<Options>;
}

declare const cssDeclarationSorter: cssDeclarationSorter.CssDeclarationSorter;
export = cssDeclarationSorter;
