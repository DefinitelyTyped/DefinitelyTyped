import AmChart from "./AmChart";
import Slice from "./Slice";

/**
 * AmPieChart class creates pie/donut chart.
 * In order to display pie chart you need to set at least these three properties
 * dataProvider, titleField and valueField.
 * @example
 * let chartData = [{title:"Pie I have eaten",value:70},{title:"Pie I haven\'t eaten",value:30}];
 * let chart = new AmCharts.AmPieChart();
 * chart.valueField = "value";
 * chart.titleField = "title";
 * chart.dataProvider = chartData;
 * chart.write("chartdiv");
 */
export default class AmPieChart extends AmChart {
    /**
     * Name of the field in chart's dataProvider which holds slice's alpha.
     */
    alphaField: string;
    /**
     * Pie lean angle (for 3D effect). Valid range is 0 - 90.
     */
    angle: number;
    /**
     * Balloon text. The following tags can be used:
     * [[value]], [[title]], [[percents]], [[description]]. [[title]]: [[percents]]% ([[value]])\n[[description]]
     */
    balloonText: string;
    /**
     * Read-only. Array of Slice objects.
     */
    chartData: any[];
    /**
     * Name of the field in chart's dataProvider which holds slice's color.
     */
    colorField: string;
    /**
     * Specifies the colors of the slices, if the slice color is not set.
     * If there are more slices than colors in this array, the chart picks random color.
     * [
     * "#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215", "#0D8ECF",
     * "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74", "#754DEB", "#DDDDDD", "#999999", "#333333",
     * "#000000", "#57032A", "#CA9726", "#990000", "#4B0C25"
     * ]
     */
    colors: any[];
    /**
     * Depth of the pie (for 3D effect).
     */
    depth3D: number;
    /**
     * Name of the field in chart's dataProvider which holds a string with description.
     */
    descriptionField: string;
    /**
     * Example: [-0.2,0.2]. Will make slices to be filled with color gradients.
     */
    gradientRatio: number[];
    /**
     * Opacity of the group slice. Value range is 0 - 1.
     * @default 1
     */
    groupedAlpha: number;
    /**
     * Color of the group slice. The default value is not set -
     * this means the next available color from "colors" array will be used.
     */
    groupedColor: string;
    /**
     * Description of the group slice.
     */
    groupedDescription: string;
    /**
     * If this is set to true, the group slice will be pulled out when the chart loads.
     */
    groupedPulled: boolean;
    /**
     * Title of the group slice. Other
     */
    groupedTitle: string;
    /**
     * If there is more than one slice whose percentage of the pie is less than this number,
     * those slices will be grouped together into one slice.
     * This is the "other" slice. It will always be the last slice in a pie.
     */
    groupPercent: number;
    /**
     * Slices with percent less then hideLabelsPercent won't display labels.
     * This is useful to avoid cluttering up the chart, if you have a lot of small slices.
     * 0 means all labels will be shown.
     */
    hideLabelsPercent: number;
    /**
     * Opacity of a hovered slice. Value range is 0 - 1.
     * @default 1
     */
    hoverAlpha: number;
    /**
     * Inner radius of the pie, in pixels or percents.
     */
    innerRadius: any;
    /**
     * The distance between the label and the slice, in pixels.
     * You can use negative values to put the label on the slice.
     * @default 30
     */
    labelRadius: number;
    /**
     * Name of the field in dataProvider which specifies the length of a tick.
     * Note, the chart will not try to arrange labels automatically if this property is set.
     */
    labelRadiusField: string;
    /**
     * Specifies whether data labels are visible.
     * @default true
     */
    labelsEnabled: boolean;
    /**
     * Label text. The following tags can be used:
     * [[value]], [[title]], [[percents]], [[description]]. [[title]]: [[percents]]%
     */
    labelText: string;
    /**
     * Label tick opacity. Value range is 0 - 1. 0.2
     */
    labelTickAlpha: number;
    /**
     * Label tick color. #000000
     */
    labelTickColor: string;
    /**
     * Bottom margin of the chart.
     * @default 5
     */
    marginBottom: number;
    /**
     * Left margin of the chart.
     */
    marginLeft: number;
    /**
     * Right margin of the chart.
     */
    marginRight: number;
    /**
     * Top margin of the chart.
     * @default 5
     */
    marginTop: number;
    /**
     * Minimum radius of the pie, in pixels.
     * @default 10
     */
    minRadius: number;
    /**
     * Pie outline opacity. Value range is 0 - 1.
     */
    outlineAlpha: number;
    /**
     * Pie outline color. #FFFFFF
     */
    outlineColor: string;
    /**
     * Pie outline thickness.
     * @default 1
     */
    outlineThickness: number;
    /**
     * Opacity of the slices. You can set the opacity of individual slice too.
     * @default 1
     */
    pieAlpha: number;
    /**
     * Color of the first slice. All the other will be colored with darker or brighter colors.
     */
    pieBaseColor: string;
    /**
     * Lightness increase of each subsequent slice. This is only useful if pieBaseColor is set.
     * Use negative values for darker colors. Value range is from -255 to 255.
     * @default 30
     */
    pieBrightnessStep: number;
    /**
     * You can set fixed position of a pie center, in pixels or in percents.
     */
    pieX: any;
    /**
     * You can set fixed position of a pie center, in pixels or in percents.
     */
    pieY: any;
    /**
     * Name of the field in chart's dataProvider which holds a boolean value
     * telling the chart whether this slice must be pulled or not.
     */
    pulledField: string;
    /**
     * Pull out duration, in seconds.
     * @default 1
     */
    pullOutDuration: number;
    /**
     * Pull out effect. Possible values are ">", "<", elastic" and "bounce". bounce
     */
    pullOutEffect: string;
    /**
     * If this is set to true, only one slice can be pulled out at a time.
     * If the viewer clicks on a slice, any other pulled-out slice will be pulled in.
     */
    pullOutOnlyOne: boolean;
    /**
     * Pull out radius, in pixels or percents 0.2
     */
    pullOutRadius: any;
    /**
     * Radius of a pie, in pixels or percents. By default, radius is calculated automatically.
     */
    radius: any;
    /**
     * Specifies whether the animation should be sequenced or all slices should appear at once.
     */
    sequencedAnimation: boolean;
    /**
     * Initial opacity of all slices. If you set startDuration higher than 0, slices will fade in from startAlpha.
     * @default 1
     */
    startAlpha: number;
    /**
     * Angle of the first slice, in degrees. This will work properly only if "depth3D" is set to 0.
     * If "depth3D" is greater than 0, then there can be two angles only: 90 and 270. Value range is 0-360.
     * @default 90
     */
    startAngle: number;
    /**
     * Duration of the animation, in seconds.
     * @default 1
     */
    startDuration: number;
    /**
     * Animation effect. Possible values are ">", "<", "elastic" and "bounce". bounce
     */
    startEffect: string;
    /**
     * Radius of the positions from which the slices will fly in.
     * @default 5
     */
    startRadius: any;
    /**
     * Name of the field in chart's dataProvider which holds slice's title.
     */
    titleField: string;
    /**
     * Name of the field in chart's dataProvider
     * which holds url which would be accessed if the user clicks on a slice.
     */
    urlField: string;
    /**
     * If url is specified for a slice, it will be opened when user clicks on it.
     * urlTarget specifies target of this url. Use _blank if you want url to be opened in a new window. _self
     */
    urlTarget: string;
    /**
     * Name of the field in chart's dataProvider which holds slice's value.
     */
    valueField: string;
    /**
     * Name of the field in chart's dataProvider which holds boolean variable
     * defining whether this data item should have an entry in the legend.
     */
    visibleInLegendField: string;
    /**
     * You can trigger the animation of the pie chart.
     */
    animateAgain(): void;
    /**
     * You can trigger the click on a slice from outside. index - the number of a slice or Slice object.
     */
    clickSlice(index: number): void;
    /**
     * Hides slice. index - the number of a slice or Slice object.
     */
    hideSlice(index: number): void;
    /**
     * You can simulate roll-out of a slice from outside. index - the number of a slice or Slice object.
     */
    rollOutSlice(index: number): void;
    /**
     * You can simulate roll-over a slice from outside. index - the number of a slice or Slice object.
     */
    rollOverSlice(index: number): void;
    /**
     * Shows slice. index - the number of a slice or Slice object.
     */
    showSlice(index: number): void;
    /**
     * Adds event listener of the type "clickSlice" or "pullInSlice" or "pullOutSlice" to the object.
     * @param type Always "clickSlice" or "pullInSlice" or "pullOutSlice".
     * @param handler
     * If the type is "clickSlice", dispatched when user clicks on a slice.
     * If the type is "pullInSlice", dispatched when user clicks on a slice and the slice is pulled-in.
     * If the type is "pullOutSlice", dispatched when user clicks on a slice and the slice is pulled-out.
     * If the type is "rollOutSlice", dispatched when user rolls-out of the slice.
     * If the type is "rollOverSlice", dispatched when user rolls-over the slice.
     */
    addListener(
        type: string,
        handler: (
            e: {
                type: string; // Always "rollOverSlice".
                dataItem: Slice;
                chart: AmChart;
            },
        ) => void,
    ): void;
}
