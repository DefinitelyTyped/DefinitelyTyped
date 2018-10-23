import AmGraph from "./AmGraph";

export default class StockGraph extends AmGraph {
    /**
     * Specifies whether this graph will be compared if some data set is selected for comparing.
     */
    comparable: boolean;
    /**
     * Specifies a field to be used to generate comparing graph.
     * Note, this field is not the one used in your dataProvider, but toField from FieldMapping object.
     */
    compareField: string;
    /**
     * Balloon color of comparing graph.
     */
    compareGraphBalloonColor: string;
    /**
     * Balloon text of comparing graph.
     */
    compareGraphBalloonText: string;
    /**
     * Bullet of comparing graph.
     * Possible values are: "square", "round", "line", "triangleUp", "triangleDown", "dashedLine", "bubble".
     */
    compareGraphBullet: string;
    /**
     * Bullet size of comparing graph.
     */
    compareGraphBulletSize: number;
    /**
     * Corner radius of comparing graph (if type is "column").
     */
    compareGraphCornerRadiusTop: number;
    /**
     * Dash length of compare graph.
     */
    compareGraphDashLength: number;
    /**
     * Fill alpha of comparing graph.
     */
    compareGraphFillAlphas: number;
    /**
     * Fill color of comparing graph.
     */
    compareGraphFillColors: string;
    /**
     * Opacity of comparing graph line.
     */
    compareGraphLineAlpha: number;
    /**
     * Thickness of compare graph.
     */
    compareGraphLineThickness: number;
    /**
     * Type of comparing graph. Possible values are: "line", "column", "step", "smoothedLine." line
     */
    compareGraphType: string;
    /**
     * Specifies if compare graph is visible in legend.
     * @default true
     */
    compareGraphVisibleInLegend: boolean;
    /**
     * When data is grouped to periods, the graph must know which period value should be used.
     * Possible values are: "Open", "Low", "High", "Close", "Average" and "Sum".
     * @default "Close"
     */
    periodValue: string;
    /**
     * Specifies whether data set color should be used as this graph's lineColor.
     * @default true
     */
    useDataSetColors: boolean;
}
