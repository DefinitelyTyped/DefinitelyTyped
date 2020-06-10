// Type definitions for DCJS
// Project: https://github.com/dc-js/dc.js
// Definitions by: hans windhoff <https://github.com/hansrwindhoff>
//                 matt traynham <https://github.com/mtraynham>
//                 matthias jobst <https://github.com/MatthiasJobst>
//                 kiran mathew mohan <https://github.com/privateOmega>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as d3 from "d3";

export = dc;
declare var dc: dc.Base;
export as namespace dc;

declare namespace dc {
    // helper for get/set situation
    export interface IGetSet<T, V> {
        (): T;
        (t: T): V;
    }

    export interface IBiGetSet<T, R, V> {
        (): T;
        (t: T, r?: R): V;
    }

    export interface IGetSetComputed<T, R, V> {
        (): R;
        (t: T): V;
    }

    export interface Scale<T> {
        (x: any): T;

        domain(values: any[]): Scale<T>;
        domain(): any[];

        range(values: T[]): Scale<T>;
        range(): T[];
    }

    export interface Accessor<T, V> {
        (datum: T, index?: number): V;
    }

    export interface Columns {
        label: string;
        format: Accessor<any, string>;
    }

    // http://dc-js.github.io/dc.js/docs/html/dc.units.html
    export interface UnitFunction {
        (start: number|Date, end: number|Date, domain?: number|Array<string>): number | Array<number|Date|string>;
    }

    export interface FloatPointUnits {
        precision(precision: number): UnitFunction;
    }

    export interface Units {
        integers: UnitFunction;
        ordinal: UnitFunction;
        fp: FloatPointUnits;
    }

    export interface Events {
        trigger(closure: () => void, delay?: number): void;
    }

    export interface Errors {
        Exception(msg: string): void;
        InvalidStateException(): void;
        BadArgumentException(): void;
    }

    export interface Filter {
        isFiltered(value: any): boolean;
    }

    export interface Filters {
        RangedFilter(low: number, high: number): Filter;
        TwoDimensionalFilter(filter: Array<number>): Filter;
        RangedTwoDimensionalFilter(arr: Array<Array<number>>): Filter;
        HierarchyFilter(path: string):  Filter;
    }

    export interface Logger {
        enableDebugLog: boolean;
        warn(msg: string): Logger;
        warnOnce(msg: string): Logger;
        debug(msg: string): Logger;
        deprecate(fn: Function, msg: string): void;
        annotate(fn: Function, msg: string): Logger;
    }

    export interface Config {
        defaultColors(colors?: Array<string>): Array<string> | Config;
    }

    export interface Printers {
        filters(filters: Array<any>): string;
        filter(filter: Printers['filters'] | any | Array<any>): string;
    }

    export interface Round {
        floor(n: number): number;
        ceil(n: number): number;
        round(n: number): number;
    }

    export interface Utils {
        printSingleValue(filter: any): string;
        add(l: Date | number, r: string | number, t?: Function | string): Date | number;
        subtract(l: Date | number, r: string | number, t?: Function | string): Date | number;
        isNumber(n: any): boolean;
        isFloat(n: any): boolean;
        isInteger(n: any): boolean;
        isNegligible(n: any): boolean;
        clamp(val: number, min: number, max: number): number;
        constant(x: any): () => any;
        uniqueId(): number;
        nameToId(name: string): string;
        appendOrSelect(parent: d3.Selection<any>, selector: string, tag: string): d3.Selection<any>;
        safeNumber(n: any): number;
        arraysEqual(a1: Array<any> | null, a2: Array<any> | null): boolean;
    }

    export interface Legend {
        x: IGetSet<number, Legend>;
        y: IGetSet<number, Legend>;
        gap: IGetSet<number, Legend>;
        itemHeight: IGetSet<number, Legend>;
        horizontal: IGetSet<boolean, Legend>;
        legendWidth: IGetSet<number, Legend>;
        itemWidth: IGetSet<number, Legend>;
        autoItemWidth: IGetSet<boolean, Legend>;
        legendText: IGetSet<Function, Legend>;
        maxItems: IGetSet<number, Legend>;
    }

    export interface HtmlLegend {
        container: IGetSet<string, HtmlLegend>;
        legendItemClass: IGetSet<string, HtmlLegend>;
        highlightSelected: IGetSet<string, HtmlLegend>;
        horizontal: IGetSet<string, HtmlLegend>;
        legendText: IGetSet<Function, HtmlLegend>;
        maxItems: IGetSet<number, HtmlLegend>;
    }

    export interface BaseMixin<T> {
        width: IGetSet<number, T>;
        height: IGetSet<number, T>;
        minWidth: IGetSet<number, T>;
        minHeight: IGetSet<number, T>;
        dimension: IGetSet<any, T>;
        data: IGetSetComputed<(group: any) => Array<any>, Array<any>, T>;
        // http://dc-js.github.io/dc.js/docs/html/dc.baseMixin.html#group__anchor
        group: IBiGetSet<any, string, T>;
        ordering: IGetSet<Accessor<any, any>, T>;
        filterAll(): void;
        select(selector: d3.Selection<any> | string): d3.Selection<any>;
        selectAll(selector: d3.Selection<any> | string): d3.Selection<any>;
        anchor(anchor: BaseMixin<any> | d3.Selection<any> | string, chartGroup?: string): d3.Selection<any>;
        anchorName(): string;
        svg: IGetSet<d3.Selection<any>, d3.Selection<any>>;
        resetSvg(): void;
        filterPrinter: IGetSet<(filters: Array<any>) => string, T>;
        controlsUseVisibility: IGetSet<boolean, T>;
        turnOnControls(): void;
        turnOffControls(): void;
        transitionDuration: IGetSet<number, T>;
        render(): void;
        redraw(): void;
        redrawGroup(): void;
        hasFilterHandler: IGetSet<(filters: Array<any>, filter: any) => boolean, T>;
        hasFilter(filter?: any): boolean;
        removeFilterHandler: IGetSet<(filters: Array<any>) => Array<any>, T>;
        addFilterHandler: IGetSet<(filters: Array<any>) => Array<any>, T>;
        resetFilterHandler: IGetSet<(filters: Array<any>) => Array<any>, T>;
        filter: IGetSet<any, T>;
        filters(): Array<any>;
        onClick(datum: any): void;
        filterHandler: IGetSet<(dimension: any, filter: any) => any, T>;
        keyAccessor: IGetSet<Accessor<any, any>, T>;
        valueAccessor: IGetSet<Accessor<any, any>, T>;
        label: IGetSet<Accessor<any, string>, T>;
        renderLabel: IGetSet<boolean, T>;
        title: IGetSet<Accessor<any, string>, T>;
        renderTitle: IGetSet<boolean, T>;
        chartGroup: IGetSet<string, T>;
        expireCache(): T;
        legend: IGetSet<Legend, T>;
        options(optionsObject: any): T;
        renderlet(fn: (chart: T) => any): T;
        useViewBoxResizing: IGetSet<boolean, T>;

        on(event: "renderlet", fn: (chart: T, filter: any) => any): T;
        on(event: "pretransition", fn: (chart: T, filter: any) => any): T;
        on(event: "preRender", fn: (chart: T) => any): T;
        on(event: "postRender", fn: (chart: T) => any): T;
        on(event: "preRedraw", fn: (chart: T) => any): T;
        on(event: "postRedraw", fn: (chart: T) => any): T;
        on(event: "filtered", fn: (chart: T, filter: any) => any): T;
        on(event: "zoomed", fn: (chart: T, filter: any) => any): T;
        on(event: string, fn: (chart: T, ...args: any[]) => any): T;
    }

    export interface Margins {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }

    export interface MarginMixin<T> {
        margins: IGetSet<Margins, T>
    }

    export interface ColorMixin<T> {
        // http://dc-js.github.io/dc.js/docs/html/dc.colorMixin.html
        colors: IGetSet<Array<string> | Scale<string | d3.Color> | string, T>;
        ordinalColors(r: Array<string>): T;
        linearColors(r: Array<string>): T;
        colorAccessor: IGetSet<Accessor<any, number>, T>;
        colorDomain: IGetSet<Array<any>, T>;
        calculateColorDomain(): void;
        getColor(datum: any, index?: number): string;
        colorCalculator: IGetSet<Accessor<any, string>, T>;
    }

    export interface CoordinateGridMixin<T> extends BaseMixin<T>, MarginMixin<T>, ColorMixin<T> {
        rangeChart: IGetSet<BaseMixin<any>, T>;
        zoomScale: IGetSet<Array<any>, T>;
        zoomOutRestrict: IGetSet<boolean, T>;
        g: IGetSet<d3.Selection<any>, T>;
        mouseZoomable: IGetSet<boolean, T>;
        chartBodyG(): d3.Selection<any>;
        x: IGetSet<(n: any) => any, T>;
        xUnits: IGetSet<UnitFunction, T>;
        xAxis: IGetSet<d3.svg.Axis, T>;
        elasticX: IGetSet<boolean, T>;
        xAxisPadding: IGetSet<number, T>;
        xUnitCount(): number;
        useRightYAxis: IGetSet<boolean, T>;
        isOrdinal(): boolean;
        xAxisLabel: IBiGetSet<string, number, T>;
        yAxisLabel: IBiGetSet<string, number, T>;
        y: IGetSet<Scale<number>, T>;
        yAxis: IGetSet<d3.svg.Axis, T>;
        elasticY: IGetSet<boolean, T>;
        renderHorizontalGridLines: IGetSet<boolean, T>;
        renderVerticalGridLines: IGetSet<boolean, T>;
        xAxisMin(): any;
        xAxisMax(): any;
        yAxisMin(): any;
        yAxisMax(): any;
        yAxisPadding: IGetSet<number, T>;
        round: IGetSet<(value: any) => any, T>;
        clipPadding: IGetSet<number, T>;
        focus(range?: Array<any>): void;
        brushOn: IGetSet<boolean, T>;
    }

    export interface StackMixin<T> {
        stack(group: any, name?: string, accessor?: Accessor<any, any>): void;
        hidableStacks: IGetSet<boolean, T>;
        hideStack(name: string): void;
        showStack(name: string): void;
        // title(stackName: string, titleFn: Accessor<any, T>);
        stackLayout: IGetSet<d3.layout.Stack<any[], any>, T>;
    }

    export interface CapMixin<T> {
        cap: IGetSet<number, T>;
        othersLabel: IGetSet<string, T>;
        othersGrouper: IGetSet<(data: Array<any>) => Array<any>, T>;
    }

    export interface BubbleMixin<T> extends ColorMixin<T> {
        r: IGetSet<Scale<number>, T>;
        radiusValueAccessor: IGetSet<Accessor<any, number>, T>;
        minRadiusWithLabel: IGetSet<number, T>;
        maxBubbleRelativeSize: IGetSet<number, T>;
    }

    export interface PieChart extends CapMixin<PieChart>, ColorMixin<PieChart>, BaseMixin<PieChart> {
        slicesCap: IGetSet<number, PieChart>;
        externalRadiusPadding: IGetSet<number, PieChart>;
        innerRadius: IGetSet<number, PieChart>;
        radius: IGetSet<number, PieChart>;
        cx: IGetSet<number, PieChart>;
        cy: IGetSet<number, PieChart>;
        minAngleForLabel: IGetSet<number, PieChart>;
        emptyTitle: IGetSet<string, PieChart>;
        externalLabels: IGetSet<number, PieChart>;
        drawPaths: IGetSet<boolean, PieChart>;
    }

    export interface SunburstChart extends CapMixin<SunburstChart>, ColorMixin<SunburstChart>, BaseMixin<SunburstChart> {
        innerRadius: IGetSet<number, SunburstChart>;
        radius: IGetSet<number, SunburstChart>;
        cx: IGetSet<number, SunburstChart>;
        cy: IGetSet<number, SunburstChart>;
        minAngleForLabel: IGetSet<number, SunburstChart>;
        emptyTitle: IGetSet<string, SunburstChart>;
        externalLabels: IGetSet<number, SunburstChart>;
    }

    export interface BarChart extends StackMixin<BarChart>, CoordinateGridMixin<BarChart> {
        centerBar: IGetSet<boolean, BarChart>;
        barPadding: IGetSet<number, BarChart>;
        outerPadding: IGetSet<number, BarChart>;
        gap: IGetSet<number, BarChart>;
        alwaysUseRounding: IGetSet<boolean, BarChart>;
    }

    export interface RenderDataPointOptions {
        fillOpacity: number;
        strokeOpacity: number;
        radius: number;
    }

    export interface LineChart extends StackMixin<LineChart>, CoordinateGridMixin<LineChart> {
        interpolate: IGetSet<string, LineChart>;
        tension: IGetSet<number, LineChart>;
        defined: IGetSet<Accessor<any, boolean>, LineChart>;
        dashStyle: IGetSet<Array<number>, LineChart>;
        renderArea: IGetSet<boolean, LineChart>;
        xyTipsOn: IGetSet<boolean, LineChart>;
        dotRadius: IGetSet<number, LineChart>;
        renderDataPoints: IGetSet<RenderDataPointOptions, LineChart>;
    }

    export interface DataCountWidgetHTML {
        all: string;
        some: string;
    }

    export interface DataCountWidget extends BaseMixin<DataCountWidget> {
        html: IGetSet<DataCountWidgetHTML, DataCountWidget>;
        formatNumber: IGetSet<Accessor<number, string>, DataCountWidget>;
    }

    export interface DataTableWidget extends BaseMixin<DataTableWidget> {
        section: IGetSet<Function, DataTableWidget>;
        size: IGetSet<number, DataTableWidget>;
        beginSlice: IGetSet<number, DataTableWidget>;
        endSlice: IGetSet<number, DataTableWidget>;
        columns: IGetSet<Array<string | Accessor<any, any> | Columns>, DataTableWidget>;
        sortBy: IGetSet<Accessor<any, any>, DataTableWidget>;
        order: IGetSet<Function, DataTableWidget>;
        showSections: IGetSet<boolean, DataTableWidget>;
    }

    export interface DataGridWidget extends BaseMixin<DataGridWidget> {
        section: IGetSet<Function, DataGridWidget>;
        beginSlice: IGetSet<number, DataGridWidget>;
        endSlice: IGetSet<number, DataGridWidget>;
        size: IGetSet<number, DataGridWidget>;
        html: IGetSet<Accessor<any, string>, DataGridWidget>;
        htmlSection: IGetSet<Accessor<any, string>, DataGridWidget>;
        sortBy: IGetSet<Accessor<any, any>, DataGridWidget>;
        order: IGetSet<(a: any, b: any) => number, DataGridWidget>;
    }

    export interface BubbleChart extends BubbleMixin<BubbleChart>, CoordinateGridMixin<BubbleChart> {
        elasticRadius: IGetSet<boolean, BubbleChart>;
    }

    export interface ICompositeChart<T> extends CoordinateGridMixin<T> {
        useRightAxisGridLines: IGetSet<boolean, ICompositeChart<T>>;
        childOptions: IGetSet<Object, ICompositeChart<T>>;
        rightYAxisLabel(rightYAxisLabel?: string, padding?: number): IGetSet<string, ICompositeChart<T>>;
        compose: IGetSet<Array<BaseMixin<any>>, ICompositeChart<T>>;
        children(): Array<BaseMixin<any>>;
        shareColors: IGetSet<boolean, ICompositeChart<T>>;
        shareTitle: IGetSet<boolean, ICompositeChart<T>>;
        rightY: IGetSet<(n: any) => any, ICompositeChart<T>>;
        alignYAxes: IGetSet<boolean, ICompositeChart<T>>;
        rightYAxis: IGetSet<d3.svg.Axis, ICompositeChart<T>>;
    }

    export interface CompositeChart extends ICompositeChart<CompositeChart> { }

    export interface SeriesChart extends ICompositeChart<SeriesChart> {
        chart: IGetSet<(c: any) => BaseMixin<any>, SeriesChart>;
        seriesAccessor: IGetSet<Accessor<any, any>, SeriesChart>;
        seriesSort: IGetSet<(a: any, b: any) => number, SeriesChart>;
        valueSort: IGetSet<(a: any, b: any) => number, SeriesChart>;
    }

    export interface GeoChoroplethLayer {
        name: string;
        keyAccessor: Accessor<any, any>;
        data: any;
    }

    export interface GeoChoroplethChart extends ColorMixin<GeoChoroplethChart>, BaseMixin<GeoChoroplethChart> {
        overlayGeoJson(json: any, name: string, keyAccessor: Accessor<any, any>): GeoChoroplethChart;
        projection: IGetSet<d3.geo.Projection, GeoChoroplethChart>;
        geoJsons(): Array<GeoChoroplethLayer>;
        geoPath(): d3.geo.Path;
        removeGeoJson(name: string): GeoChoroplethChart;
    }

    export interface BubbleOverlayChart extends BubbleMixin<BubbleOverlayChart>, BaseMixin<BubbleOverlayChart> {
        point(name: string, x: number, y: number): BubbleOverlayChart;
    }

    export interface RowChart extends CapMixin<RowChart>, MarginMixin<RowChart>, ColorMixin<RowChart>, BaseMixin<RowChart> {
        x: IGetSet<Scale<number>, RowChart>;
        renderTitleLabel: IGetSet<boolean, RowChart>;
        xAxis: IGetSet<d3.svg.Axis, RowChart>;
        fixedBarHeight: IGetSet<boolean | number, RowChart>;
        gap: IGetSet<number, RowChart>;
        elasticX: IGetSet<boolean, RowChart>;
        labelOffsetX: IGetSet<number, RowChart>;
        labelOffsetY: IGetSet<number, RowChart>;
        titleLabelOffsetX: IGetSet<number, RowChart>;
    }

    export interface ScatterPlot extends CoordinateGridMixin<ScatterPlot> {
        resetSvg(): d3.svg.Symbol<any>;
        resizeCanvas(): void;
        useCanvas: IGetSet<boolean, ScatterPlot>;
        canvas: IGetSet<d3.Selection<any>, ScatterPlot>;
        existenceAccessor: IGetSet<Accessor<any, boolean>, ScatterPlot>;
        symbol: IGetSet<d3.svg.Symbol<any>, ScatterPlot>;
        customSymbol: IGetSet<string | Function, ScatterPlot>;
        symbolSize: IGetSet<number, ScatterPlot>;
        highlightedSize: IGetSet<number, ScatterPlot>;
        excludedSize: IGetSet<number, ScatterPlot>;
        excludedColor: IGetSet<number, ScatterPlot>;
        excludedOpacity: IGetSet<number, ScatterPlot>;
        hiddenSize: IGetSet<number, ScatterPlot>;
        emptyColor: IGetSet<string, ScatterPlot>;
        emptyOpacity: IGetSet<number, ScatterPlot>;
        nonemptyOpacity: IGetSet<number, ScatterPlot>;
    }

    export interface NumberDisplayWidgetHTML {
        one: string;
        some: string;
        none: string;
    }

    export interface NumberDisplayWidget extends BaseMixin<NumberDisplayWidget> {
        html: IGetSet<NumberDisplayWidgetHTML, NumberDisplayWidget>;
        value(): string;
        formatNumber: IGetSet<Accessor<number, string>, NumberDisplayWidget>;
    }

    export interface HeatMap extends ColorMixin<HeatMap>, MarginMixin<HeatMap>, BaseMixin<HeatMap> {
        colsLabel: IGetSet<Accessor<any, string>, HeatMap>;
        rowsLabel: IGetSet<Accessor<any, string>, HeatMap>;
        rows: IGetSet<Array<string | number>, HeatMap>;
        rowOrdering: IGetSet<Accessor<any, string>, HeatMap>;
        cols: IGetSet<Array<string | number>, HeatMap>;
        colOrdering: IGetSet<Accessor<any, string>, HeatMap>;
        boxOnClick: IGetSet<(d: any) => void, HeatMap>;
        xAxisOnClick: IGetSet<(d: any) => void, HeatMap>;
        yAxisOnClick: IGetSet<(d: any) => void, HeatMap>;
        xBorderRadius: IGetSet<number, HeatMap>;
        yBorderRadius: IGetSet<number, HeatMap>;
    }

    export interface BoxPlot extends CoordinateGridMixin<BoxPlot> {
        boxPadding: IGetSet<number, BoxPlot>;
        outerPadding: IGetSet<number, BoxPlot>;
        boxWidth: IGetSet<number | Function, BoxPlot>;
        tickFormat: IGetSet<Accessor<number, string>, BoxPlot>;
        yRangePadding: IGetSet<number | Function, BoxPlot>;
        renderDataPoints: IGetSet<boolean, BoxPlot>;
        dataOpacity: IGetSet<number, BoxPlot>;
        dataWidthPortion: IGetSet<number, BoxPlot>;
        showOutliers: IGetSet<number, BoxPlot>;
        boldOutliers: IGetSet<number, BoxPlot>;
    }

    // https://github.com/dc-js/dc.js/blob/master/src/select-menu.js
    export interface SelectMenu extends BaseMixin<SelectMenu> {
        order: IGetSet<(a: any, b: any) => number, SelectMenu>;
        promptText: IGetSet<string, SelectMenu>;
        filterDisplayed: IGetSet<(a: {value: any, key: any}, index: number) => boolean, SelectMenu>;
        multiple: IGetSet<boolean, SelectMenu>;
        promptValue: IGetSet<any, SelectMenu>;
        numberVisible: IGetSet<number, SelectMenu>;
    }

    export interface TextFilterWidget extends BaseMixin<TextFilterWidget> {
        normalize: IGetSet<Function, TextFilterWidget>;
        placeHolder: IGetSet<Function, TextFilterWidget>;
        filterFunctionFactory: IGetSet<Function, TextFilterWidget>;
    }

    export interface CBoxMenu extends BaseMixin<CBoxMenu> {
        order: IGetSet<Function, CBoxMenu>;
        promptText: IGetSet<string, CBoxMenu>;
        filterDisplayed: IGetSet<Function, CBoxMenu>;
        multiple: IGetSet<boolean, CBoxMenu>;
        promptValue: IGetSet<any, CBoxMenu>;
    }

    export interface ChartRegistry {
        has(chart: BaseMixin<any>): boolean;
        register(chart: BaseMixin<any>, group?: string): void;
        deregister(chart: BaseMixin<any>, group?: string): void;
        clear(group?: string): void;
        list(group?: string): Array<BaseMixin<any>>;
    }

    export interface Base {
        chartRegistry: ChartRegistry;
        registerChart(chart: BaseMixin<any>, group?: string): void;
        deregisterChart(chart: BaseMixin<any>, group?: string): void;
        hasChart(chart: BaseMixin<any>): boolean;
        deregisterAllCharts(group?: string): void;
        filterAll(group?: string): void;
        refocusAll(group?: string): void;
        renderAll(group?: string): void;
        redrawAll(group?: string): void;
        disableTransitions: boolean;
        transition(selections: d3.Selection<any>, duration?: number | Function, delay?: number | Function, name?: string): d3.Transition<any> | d3.Selection<any>;
        optionalTransition(enable: boolean, duration?: number | Function, delay?: number | Function, name?: string): (selection: d3.Selection<any>) => Base['transition'] | d3.Selection<any>;
        afterTransition(transition: d3.Transition<any>,  callback: (transition: d3.Transition<any>) => void): void;

        units: Units;
        round: Round;
        override(obj: any, functionName: string, newFunction: Function): void;
        instanceOfChart(object: any): boolean;
        errors: Errors;
        dateFormat: d3.time.Format;
        printers: Printers;
        pluck(n: string, f?: Accessor<any, any>): Accessor<any, any>;
        utils: Utils;
        logger: Logger;
        config: Config;
        events: Events;
        filters: Filters;
        // http://dc-js.github.io/dc.js/docs/html/core.js.html, Line 20
        version: string;

        pieChart(parent: string | Node | d3.Selection<any>, chartGroup?: string): PieChart;
        sunburstChart(parent: string | Node | d3.Selection<any>, chartGroup?: string): SunburstChart;
        // http://dc-js.github.io/dc.js/docs/html/dc.barChart.html
        barChart(parent: string | CompositeChart, chartGroup?: string): BarChart;
        // http://dc-js.github.io/dc.js/docs/html/dc.lineChart.html
        lineChart(parent: string | CompositeChart, chartGroup?: string): LineChart;
        dataCount(parent: string, chartGroup?: string): DataCountWidget;
        dataTable(parent: string, chartGroup?: string): DataTableWidget;
        dataGrid(parent: string, chartGroup?: string): DataGridWidget;
        bubbleChart(parent: string, chartGroup?: string): BubbleChart;
        compositeChart(parent: string, chartGroup?: string): CompositeChart;
        seriesChart(parent: string, chartGroup?: string): SeriesChart;
        geoChoroplethChart(parent: string, chartGroup?: string): GeoChoroplethChart;
        bubbleOverlayChart(parent: string, chartGroup?: string): BubbleOverlayChart;
        rowChart(parent: string, chartGroup?: string): RowChart;
        legend(): Legend;
        htmlLegend(): HtmlLegend;
        scatterPlot(parent: string, chartGroup?: string): ScatterPlot;
        numberDisplay(parent: string, chartGroup?: string): NumberDisplayWidget;
        heatMap(parent: string, chartGroup?: string): HeatMap;
        boxPlot(parent: string, chartGroup?: string): BoxPlot;
        selectMenu(parent: string, chartGroup?: string): SelectMenu;
        textFilterWidget(parent: string, chartGroup?: string): TextFilterWidget;
        cboxMenu(parent: string, chartGroup?: string): CBoxMenu;
    }
}
