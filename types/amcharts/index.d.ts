import _AmAngularGauge from "./AmAngularGauge";
import _AmBalloon from "./AmBalloon";
import _AmChart from "./AmChart";
import _AmCoordinateChart from "./AmCoordinateChart";
// import _AmFunnelChart from "./AmFunnelChart";
// import _AmGanttChart from "./AmGanttChart";
import _AmGraph from "./AmGraph";
import _AmLegend from "./AmLegend";
import _AmPieChart from "./AmPieChart";
import _AmRadarChart from "./AmRadarChart";
import _AmRectangularChart from "./AmRectangularChart";
import _AmSerialChart from "./AmSerialChart";
// import _AmSlicedChart from "./AmSlicedChart";
import _AmXYChart from "./AmXYChart";
import _AxisBase from "./AxisBase";
import _CategoryAxis from "./CategoryAxis";
import _ChartCursor from "./ChartCursor";
import _ChartScrollbar from "./ChartScrollbar";
import _GaugeArrow from "./GaugeArrow";
import _GaugeAxis from "./GaugeAxis";
import _GaugeBand from "./GaugeBand";
import _GraphDataItem from "./GraphDataItem";
import _Guide from "./Guide";
// import _Image from "./Image";
import _Label from "./Label";
import _SerialDataItem from "./SerialDataItem";
import _Slice from "./Slice";
import _Title from "./Title";
import _TrendLine from "./TrendLine";
import _ValueAxis from "./ValueAxis";

/**
 * AmCharts namespace is create automatically when amcharts.js or amstock.js file is included.
 */
export namespace AmCharts {
    /**
     * Set it to true if you have base href set for your page.
     * This will fix rendering problems in Firefox caused by base href.
     */
    let baseHref: boolean;

    /**
     * Array of day names, used when formatting dates (if categoryAxis.parseDates is set to true)
     * ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
     */
    let dayNames: string[];

    /**
     * Array of month names, used when formatting dates (if categoryAxis.parseDates is set to true)
     * [
     * 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
     * 'September', 'October', 'November','December'
     * ]
     */
    let monthNames: string[];

    /**
     * Array of short versions of day names, used when formatting dates (if categoryAxis.parseDates is set to true)
     * ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
     */
    let shortDayNames: string[];

    /**
     * Array of short versions of month names, used when formatting dates (if categoryAxis.parseDates is set to true)
     * ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
     */
    let shortMonthNames: string[];

    /**
     * Set it to true if you want UTC time to be used instead of local time.
     */
    let useUTC: boolean;

    /**
     * Set global used AmCharts theme.
     */
    let theme: any;

    /**
     * Object with existing themes.
     */
    let themes: any;

    /**
     * Clears all the charts on page, removes listeners and intervals.
     */
    function clear(): void;

    /**
     * Create chart by params.
     */
    function makeChart(selector: string, params: any, delay?: number): AmChart;

    /**
     * Set a method to be called before initializing the chart.
     * When the method is called, the chart instance is passed as an attribute.
     * You can use this feature to preprocess chart data or do some other things you need
     * before initializing the chart.
     * @param handler - The method to be called.
     * @param types - Which chart types should call this method. Defaults to all
     * if none is passed.
     */
    function addInitHandler(handler: () => {}, types?: string[]): any;

    class AmAngularGauge extends _AmAngularGauge {}
    class AmBalloon extends _AmBalloon {}
    class AmChart extends _AmChart {}
    class AmCoordinateChart extends _AmCoordinateChart {}
    // class AmFunnelChart extends _AmFunnelChart { }
    // class AmGanttChart extends _AmGanttChart { }
    class AmGraph extends _AmGraph {}
    class AmLegend extends _AmLegend {}
    class AmPieChart extends _AmPieChart {}
    class AmRadarChart extends _AmRadarChart {}
    class AmRectangularChart extends _AmRectangularChart {}
    class AmSerialChart extends _AmSerialChart {}
    // class AmSlicedChart extends _AmSlicedChart { }
    class AmXYChart extends _AmXYChart {}
    class AxisBase extends _AxisBase {}
    class CategoryAxis extends _CategoryAxis {}
    class ChartCursor extends _ChartCursor {}
    class ChartScrollbar extends _ChartScrollbar {}
    class GaugeArrow extends _GaugeArrow {}
    class GaugeAxis extends _GaugeAxis {}
    class GaugeBand extends _GaugeBand {}
    class GraphDataItem extends _GraphDataItem {}
    class Guide extends _Guide {}
    // class Image extends _Image { }
    class Label extends _Label {}
    class SerialDataItem extends _SerialDataItem {}
    class Slice extends _Slice {}
    class Title extends _Title {}
    class TrendLine extends _TrendLine {}
    class ValueAxis extends _ValueAxis {}
}
