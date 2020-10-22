/**
 * Common settings of legends.
 * If you change a property after the chart is initialized, you should call stockChart.validateNow() method
 * in order for it to work. If there is no default value specified, default value of StockLegend class will be used.
 */
export default class LegendSettings {
   /**
    * Alignment of legend entries. Possible values are: "left", "right" and "center".
    */
   align: string;
   /**
    * Specifies if each legend entry should take the same space as the longest legend entry.
    */
   equalWidths: boolean;
   /**
    * Horizontal space between legend item and left/right border.
    */
   horizontalGap: number;
   /**
    * The text which will be displayed in the legend. Tag [[title]] will be replaced with the title of the graph.
    */
   labelText: string;
   /**
    * Space below the last row of the legend, in pixels.
    */
   marginBottom: number;
   /**
    * Space above the first row of the legend, in pixels.
    */
   marginTop: number;
   /**
    * Opacity of marker border.
    */
   markerBorderAlpha: number;
   /**
    * Marker border color.
    */
   markerBorderColor: string;
   /**
    * Thickness of the legend border.
    */
   markerBorderThickness: number;
   /**
    * The color of the disabled marker (when the graph is hidden).
    */
   markerDisabledColor: string;
   /**
    * Space between legend marker and legend text, in pixels.
    */
   markerLabelGap: number;
   /**
    * Size of the legend marker (key).
    */
   markerSize: number;
   /**
    * Shape of the legend marker (key).
    * Possible values are:
    * "square", "circle", "line", "dashedLine", "triangleUp", "triangleDown", "bubble", "none".
    */
   markerType: string;
   /**
    * Specifies whether legend entries should be placed in reversed order.
    */
   reversedOrder: boolean;
   /**
    * Legend item text color on roll-over.
    */
   rollOverColor: string;
   /**
    * When you roll-over the legend entry, all other graphs can reduce their opacity,
    * so that the graph you rolled-over would be distinguished. This property specifies the opacity of the graphs.
    */
   rollOverGraphAlpha: number;
   /**
    * Whether showing/hiding of graphs by clicking on the legend marker is enabled or not.
    */
   switchable: boolean;
   /**
    * Legend switch color.
    */
   switchColor: string;
   /**
    * Legend switch type (in case the legend is switchable). Possible values are: "x" and "v".
    */
   switchType: string;
   /**
    * Specifies whether the legend text is clickable or not.
    * Clicking on legend text can show/hide value balloons if they are enabled.
    */
   textClickEnabled: boolean;
   /**
    * Specifies if legend labels should be use same color as corresponding markers.
    */
   useMarkerColorForLabels: boolean;
   /**
    * The text which will be displayed in the value portion of the legend when graph is comparable and
    * at least one dataSet is selected for comparing.
    * You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]].
    */
   valueTextComparing: string;
   /**
    * The text which will be displayed in the value portion of the legend.
    * You can use tags like [[value]], [[open]], [[high]], [[low]], [[close]], [[percents]], [[description]].
    */
   valueTextRegular: string;
   /**
    * Width of the value text. Increase this value if your values do not fit in the allocated space.
    */
   valueWidth: number;
   /**
    * Vertical space between legend items, in pixels.
    */
   verticalGap: number;
}
