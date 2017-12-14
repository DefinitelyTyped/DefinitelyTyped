// Type definitions for DCJS
// Project: https://github.com/dc-js/dc.js
// Definitions by: hans windhoff <https://github.com/hansrwindhoff>
//                 matt traynham <https://github.com/mtraynham>
//                 matthias jobst <https://github.com/MatthiasJobst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// this makes only sense together with d3 and crossfilter so you need the d3.d.ts and crossfilter.d.ts files

///<reference types="crossfilter" />

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
        trigger(fn: () => void, delay?: number): void;
    }

    export interface Errors {
        Exception(msg: string): void;
        InvalidStateException(msg: string): void;
    }

    export interface Filter {
        isFiltered(value: any): boolean;
    }

    export interface Filters {
        RangedFilter(low: any, high: any): Filter;
        TwoDimensionalFilter(arr: Array<any>): Filter;
        RangedTwoDimensionalFilter(arr: Array<any>): Filter;
    }

    export interface Logger {
        enableDebugLog: boolean;
        warn(msg: string): void;
        debug(msg: string): void;
        deprecate(fn: Function, msg: string): void;
    }

    export interface Printers {
        filters(filters: Array<any>): string;
        filter(filter: any): string;
    }

    export interface Round {
        floor(n: number): number;
        ceil(n: number): number;
        round(n: number): number;
    }

    export interface Utils {
        printSingleValue(filter: any): string;
        add(l: any, r: any): any;
        subtract(l: any, r: any): any;
        isNumber(n: any): boolean;
        isFloat(n: any): boolean;
        isInteger(n: any): boolean;
        isNegligible(n: any): boolean;
        clamp(n: number, min: number, max: number): number;
        uniqueId(): number;
        nameToId(name: string): string;
        appendOrSelect(parent: d3.Selection<any>, selector: string, tag: any): d3.Selection<any>;
        safeNumber(n: any): number;
    }

    export interface Legend {
        x: IGetSet<number, Legend>;
        y: IGetSet<number, Legend>;
        gap: IGetSet<number, Legend>;
        itemHeight: IGetSet<number, Legend>;
        horizontal: IGetSet<boolean, Legend>;
        legendWidth: IGetSet<number, Legend>;
        legendText: IGetSet<any, Legend>;
        itemWidth: IGetSet<number, Legend>;
        autoItemWidth: IGetSet<boolean, Legend>;
        render: () => void;
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
        innerRadius: IGetSet<number, PieChart>;
        radius: IGetSet<number, PieChart>;
        cx: IGetSet<number, PieChart>;
        cy: IGetSet<number, PieChart>;
        minAngleForLabel: IGetSet<number, PieChart>;
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
        dotRadius: IGetSet<number, LineChart>;
        renderDataPoints: IGetSet<RenderDataPointOptions | any, LineChart>;
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
        size: IGetSet<number, DataTableWidget>;
        showGroups: IGetSet<boolean, DataTableWidget>;
        columns: IGetSet<Array<string | Accessor<any, any> | Columns>, DataTableWidget>;
        sortBy: IGetSet<Accessor<any, any>, DataTableWidget>;
        order: IGetSet<(a: any, b: any) => number, DataTableWidget>;
    }

    export interface DataGridWidget extends BaseMixin<DataGridWidget> {
        size: IGetSet<number, DataTableWidget>;
        html: IGetSet<Accessor<any, string>, DataTableWidget>;
        htmlGroup: IGetSet<Accessor<any, string>, DataTableWidget>;
        sortBy: IGetSet<Accessor<any, any>, DataTableWidget>;
        order: IGetSet<(a: any, b: any) => number, DataTableWidget>;
    }

    export interface BubbleChart extends BubbleMixin<BubbleChart>, CoordinateGridMixin<BubbleChart> {
        elasticRadius: IGetSet<boolean, BubbleChart>;
    }

    export interface ICompositeChart<T> extends CoordinateGridMixin<T> {
        useRightAxisGridLines: IGetSet<boolean, ICompositeChart<T>>;
        childOptions: IGetSet<any, ICompositeChart<T>>;
        rightYAxisLabel: IGetSet<string, ICompositeChart<T>>;
        compose: IGetSet<Array<BaseMixin<any>>, ICompositeChart<T>>;
        children(): Array<BaseMixin<any>>;
        shareColors: IGetSet<boolean, ICompositeChart<T>>;
        shareTitle: IGetSet<boolean, ICompositeChart<T>>;
        rightY: IGetSet<(n: any) => any, ICompositeChart<T>>;
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
        overlayGeoJson(json: any, name: string, keyAccessor: Accessor<any, any>): void;
        projection: IGetSet<d3.geo.Projection, GeoChoroplethChart>;
        geoJsons(): Array<GeoChoroplethLayer>;
        geoPath(): d3.geo.Path;
        removeGeoJson(name: string): void;
    }

    export interface BubbleOverlayChart extends BubbleMixin<BubbleOverlayChart>, BaseMixin<BubbleOverlayChart> {
        point(name: string, x: number, y: number): void;
    }

    export interface RowChart extends CapMixin<RowChart>, MarginMixin<RowChart>, ColorMixin<RowChart>, BaseMixin<RowChart> {
        x: IGetSet<Scale<number>, RowChart>;
        renderTitleLabel: IGetSet<boolean, RowChart>;
        xAxis: IGetSet<d3.svg.Axis, RowChart>;
        fixedBarHeight: IGetSet<number, RowChart>;
        gap: IGetSet<number, RowChart>;
        elasticX: IGetSet<boolean, RowChart>;
        labelOffsetX: IGetSet<number, RowChart>;
        labelOffsetY: IGetSet<number, RowChart>;
        titleLabelOffsetX: IGetSet<number, RowChart>;
    }

    export interface ScatterPlot extends CoordinateGridMixin<ScatterPlot> {
        existenceAccessor: IGetSet<Accessor<any, boolean>, ScatterPlot>;
        symbol: IGetSet<d3.svg.Symbol<any>, ScatterPlot>;
        symbolSize: IGetSet<number, ScatterPlot>;
        highlightedSize: IGetSet<number, ScatterPlot>;
        hiddenSize: IGetSet<number, ScatterPlot>;
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
        rows: IGetSet<Array<any>, HeatMap>;
        cols: IGetSet<Array<any>, HeatMap>;
        boxOnClick: IGetSet<(d: any) => void, HeatMap>;
        xAxisOnClick: IGetSet<(d: any) => void, HeatMap>;
        yAxisOnClick: IGetSet<(d: any) => void, HeatMap>;
    }

    export interface BoxPlot extends CoordinateGridMixin<BoxPlot> {
        boxPadding: IGetSet<number, BoxPlot>;
        outerPadding: IGetSet<number, BoxPlot>;
        boxWidth: IGetSet<number, BoxPlot>;
        tickFormat: IGetSet<Accessor<number, string>, BoxPlot>;
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
        transition(selections: d3.Selection<any>, duration: number, callback: (s: d3.Selection<any>) => void): void;

        units: Units;
        events: Events;
        errors: Errors;
        instanceOfChart(object: any): boolean;
        logger: Logger;
        override(object: any, fnName: string, newFn: Function): void;
        printers: Printers;
        pluck(n: string, f?: Accessor<any, any>): Accessor<any, any>;
        round: Round;
        utils: Utils;

        // http://dc-js.github.io/dc.js/docs/html/core.js.html, Line 20
        version: string;

        legend(): Legend;

        pieChart(parent: string, chartGroup?: string): PieChart;
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
        scatterPlot(parent: string, chartGroup?: string): ScatterPlot;
        numberDisplay(parent: string, chartGroup?: string): NumberDisplayWidget;
        heatMap(parent: string, chartGroup?: string): HeatMap;
        boxPlot(parent: string, chartGroup?: string): BoxPlot;
    }
}