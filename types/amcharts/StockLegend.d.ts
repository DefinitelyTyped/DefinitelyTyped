import AmLegend from "./AmLegend";

/**
 * StockLegend is a legend of StockPanel.
 */
export default class StockLegend extends AmLegend {
    /**
     * The text which will be displayed in the value portion of the legend when graph is comparable and
     * at least one dataSet is selected for comparing.
     * You can use tags like
     * [[value]], [[open]], [[high]], [[low]], [[close]], [[percents.value/open/close/low/high]],
     * [[description]]
     * @default [[percents.value]]%
     */
    valueTextComparing: string;
    /**
     * The text which will be displayed in the value portion of the legend.
     * You can use tags like
     * [[value]], [[open]], [[high]], [[low]], [[close]],[[percents]], [[description]]
     * @default [[value]]
     */
    valueTextRegular: string;
}
