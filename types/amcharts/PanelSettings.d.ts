/**
 * PanelsSettings settings set's settings for all StockPanels.
 * If you change a property after the chart is initialized,
 * you should call stockChart.validateNow() method in order for it to work.
 * If there is no default value specified, default value of StockPanel class will be used.
 */
export default class PanelsSettings {
    /**
     * The angle of the 3D part of plot area. This creates a 3D effect (if the "depth3D" is > 0).
     */
    angle: number;
    /**
     * Opacity of panel background. Possible values are 1 and 0. Values like 0.5 will not make it half-transparent.
     */
    backgroundAlpha: number;
    /**
     * Background color of panels. Set backgroundAlpha to > 0 value in order to make background visible.
     * @default "#FFFFFF"
     */
    backgroundColor: string;
    /**
     * The gap in pixels between two columns of the same category.
     */
    columnSpacing: number;
    /**
     * Relative width of columns. Valid values 0 - 1.
     */
    columnWidth: number;
    /**
     * The depth of the 3D part of plot area. This creates a 3D effect (if the "angle" is > 0).
     */
    depth3D: number;
    /**
     * Font family.
     */
    fontFamily: string;
    /**
     * Font size.
     */
    fontSize: string;
    /**
     * Number of pixels between the container's bottom border and plot area.
     * @default 1
     */
    marginBottom: number;
    /**
     * Number of pixels between the container's left border and plot area.
     * If your left valueAxis values ar not placed inside the plot area,
     * you should set marginLeft to 80 or some close value.
     */
    marginLeft: number;
    /**
     * Number of pixels between the container's left border and plot area.
     * If your right valueAxis values ar not placed inside the plot area,
     * you should set marginRight to 80 or some close value.
     */
    marginRight: number;
    /**
     * Number of pixels between the container's top border and plot area.
     */
    marginTop: number;
    /**
     * Gap between panels.
     * @default 8
     */
    panelSpacing: number;
    /**
     * This setting affects touch-screen devices only.
     * If a chart is on a page, and panEventsEnabled are set to true,
     * the page won't move if the user touches the chart first.
     * If a chart is big enough and occupies all the screen of your touch device,
     * the user won’t be able to move the page at all. That's why the default value is "false".
     * If you think that selecting or or panning the chart is a primary purpose of your chart users,
     * you should set panEventsEnabled to true.
     */
    panEventsEnabled: boolean;
    /**
     * The opacity of plot area's border.
     */
    plotAreaBorderAlpha: number;
    /**
     * The color of the plot area's border.
     */
    plotAreaBorderColor: string;
    /**
     * Opacity of plot area fill.
     */
    plotAreaFillAlphas: number;
    /**
     * Specifies the colors used to tint the background gradient fill of the plot area. String or Array of Strings
     */
    plotAreaFillColors: any;
    /**
     * Prefixes which are used to make big numbers shorter: 2M instead of 2000000, etc.
     * Prefixes are used on value axes and in the legend.
     * To enable prefixes, set usePrefixes property to true.
     * [
     *     {number:1e+3,prefix:"k"},
     *     {number:1e+6,prefix:"M"},
     *     {number:1e+9,prefix:"G"},
     *     {number:1e+12,prefix:"T"},
     *     {number:1e+15,prefix:"P"},
     *     {number:1e+18,prefix:"E"},
     *     {number:1e+21,prefix:"Z"},
     *     {number:1e+24,prefix:"Y"}
     * ]
     */
    prefixesOfBigNumbers: any[];
    /**
     * Prefixes which are used to make small numbers shorter: 2μ instead of 0.000002, etc.
     * Prefixes are used on value axes and in the legend. To enable prefixes, set usePrefixes property to true.
     * [
     *     {number:1e-24, prefix:"y"},
     *     {number:1e-21, prefix:"z"},
     *     {number:1e-18, prefix:"a"},
     *     {number:1e-15, prefix:"f"},
     *     {number:1e-12, prefix:"p"},
     *     {number:1e-9, prefix:"n"},
     *     {number:1e-6, prefix:"μ"},
     *     {number:1e-3, prefix:"m"}
     * ]
     */
    prefixesOfSmallNumbers: any[];
    /**
     * Specifies whether the animation should be sequenced or all objects should appear at once.
     */
    sequencedAnimation: boolean;
    /**
     * The initial opacity of the column/line.
     * If you set startDuration to a value higher than 0, the columns/lines will fade in from startAlpha.
     */
    startAlpha: number;
    /**
     * Duration of the animation, in seconds.
     */
    startDuration: number;
    /**
     * Possible values are: "linear", "<", ">" "<>", "elastic", "bounce".
     */
    startEffect: string;
    /**
     * If true, prefixes will be used for big and small numbers.
     */
    usePrefixes: boolean;
}
