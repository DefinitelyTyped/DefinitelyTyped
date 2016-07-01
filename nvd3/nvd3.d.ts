// Type definitions for nvd3 1.8.1
// Project: https://github.com/novus/nvd3
// Definitions by: Peter Mitchell <https://github.com/PjMitchell/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../d3/d3.d.ts" />
declare namespace nv {

//#region Core Interfaces
	interface Margin {
		left?: number,
		right?: number,
		top?: number,
		bottom?: number
	}

    interface Size {
        height: number;
        width: number;
    }

    interface ArcsRadius {
        inner: number;
        outer: number;
    }

    interface Offset {
        left?: number;
        top?: number;
    }

    interface State {
        dispatch: d3.Dispatch;
    }

    interface InteractiveLayer {
        tooltip: Tooltip
    }

    interface SymbolMap {
        set(name:string,func: (size: any)=>void): void
    }

    interface Utils {
        /* Default color chooser uses a color scale of 20 colors from D3  https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors */
        defaultColor(): string[];

        getColor(arg: any): string[];

        /* Binds callback function to run when window is resized */
        windowResize(listener: (ev: Event) => any): void;
        /* Gets the browser window size */
        windowSize(): Size;
        state(): State;
        symbolMap: SymbolMap;
    }

    interface ChartFactory<TChart extends Nvd3Element> {
        generate: () => TChart;
        callback?: (chart: TChart) => void;
    }

    interface Nvd3TooltipStatic {
        show([left, top]: [number, number], content: string, gravity?: string): void; //todo sort out use on nv.tooltip.
        cleanup(): void; //todo sort out use on nv.tooltip.
    }

    interface Nvd3Element {
        dispatch: d3.Dispatch;
        options(options: any): Nvd3Element;
        update(): void;
        (transition: d3.Transition<any[]>, ...args: any[]): any;
        (selection: d3.Selection<any[]>, ...args: any[]): any;
        (transition: d3.Transition<any>, ...args: any[]): any;
        (selection: d3.Selection<any>, ...args: any[]): any;
    }

    interface Chart extends Nvd3Element {
        state: State;
        interactiveLayer: InteractiveLayer;
    }

//#endregion

//#region Chart Component

    interface Legend extends Nvd3Element {
        align(): boolean;
        align(value: boolean): Legend;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): Legend;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): Legend;
        expanded(): boolean;
        expanded(value: boolean): Legend;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): Legend;
        key(): any;
        key(value: any): Legend;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): Legend;
        /*Specifies how much spacing there is between legend items.*/
        padding(): number;
        /*Specifies how much spacing there is between legend items.*/
        padding(value: number): Legend;
        radioButtonMode(): boolean;
        //If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at
        radioButtonMode(value: boolean): Legend;
        rightAlign(): boolean;
        rightAlign(value: boolean): Legend;
        //If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
        updateState(): boolean;
        //If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
        updateState(value: boolean): Legend;
        //Options are "classic" and "furious"
        vers(): string;
        //Options are "classic" and "furious"
        vers(value: string): Legend;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): Legend;
    }

	interface Nvd3Axis extends d3.svg.Axis {
        axisLabel(): string;
        axisLabel(value: string): Nvd3Axis;
        axisLabelDistance(): number;
        axisLabelDistance(value: number): Nvd3Axis;
        domain(): number[];
        domain(domain: number[]): Nvd3Axis;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be Nvd3Axis value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be Nvd3Axis value.*/
        duration(value: number): Nvd3Axis;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): Nvd3Axis;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): Nvd3Axis;
        orient(): string;
        orient(orientation: string): Nvd3Axis;
        range(): number[];
        range(range: number[]): Nvd3Axis;
        rangeBand(): number;
        rangeBands(interval: [number, number], padding?: number, outerPadding?: number): Nvd3Axis;
        /*Rotates the X axis labels by the specified degree.*/
        rotateLabels(): number;
        /*Rotates the X axis labels by the specified degree.*/
        rotateLabels(range: number): Nvd3Axis;
        rotateYLabels(): number;
        rotateYLabels(range: number): Nvd3Axis;
        scale(): any;
        scale(scale: any): Nvd3Axis;
        showMaxMin(value: boolean): Nvd3Axis;
        staggerLabels(): boolean;
        staggerLabels(value: boolean): Nvd3Axis;
        tickFormat(): (d: any) => string;
        tickFormat(format: (t: any) => string): Nvd3Axis;
        tickFormat(format: string): Nvd3Axis;
        tickFormat(format: (d: any, i: any) => string): Nvd3Axis;
        tickPadding(): number;
        tickPadding(padding: number): Nvd3Axis;
        tickSize(): number;
        tickSize(size: number): Nvd3Axis;
        tickSize(inner: number, outer: number): Nvd3Axis;
        tickValues(): any[];
        tickValues(values: any[]): Nvd3Axis;
        ticks(): any[];
        ticks(...args: any[]): Nvd3Axis;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): Nvd3Axis;
	}

    interface BoxPlot extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): BoxPlot;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): BoxPlot;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be BoxPlot value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be BoxPlot value.*/
        duration(value: number): BoxPlot;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): BoxPlot;
        id(): any;
        id(value: number|string): BoxPlot;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): BoxPlot;
        maxBoxWidth(): number;
        maxBoxWidth(value: number): BoxPlot;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): BoxPlot;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart BoxPlot returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart BoxPlot returns the key for the slice.*/
        x(func: (d: any) => any): BoxPlot;
        /* Defines the whole X scale's domain. Using BoxPlot will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using BoxPlot will disable calculating the domain based on the data.*/
        xDomain(value: number[]): BoxPlot;
        /* Override the X scale's range. Using BoxPlot will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using BoxPlot will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): BoxPlot;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): BoxPlot;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart BoxPlot returns the key for the slice.*/
        y(func: (d: any) => number): BoxPlot;
        /* Defines the whole y scale's domain. Using BoxPlot will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using BoxPlot will disable calculating the domain based on the data.*/
        yDomain(value: number[]): BoxPlot;
        /* Override the y scale's range. Using BoxPlot will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using BoxPlot will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): BoxPlot;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): BoxPlot;
    }

    interface Bullet extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): Bullet;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): Bullet;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). Bullet ensures the numbers are in the X domain but doesn't override the whole domain. Bullet option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). Bullet ensures the numbers are in the X domain but doesn't override the whole domain. Bullet option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): Bullet;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): Bullet;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): Bullet;
        markers(): (d: any) => any //todo;
        markers(func: (d: any) => any): Bullet //todo;
        measures(): (d: any) => any //todo;
        measures(func: (d: any) => any): Bullet //todo;
        orient(): string;
        orient(orientation: string): Bullet;
        ranges(): (d: any) => any //todo;
        ranges(func: (d: any) => any): Bullet //todo;
        tickFormat(): (d: any) => string;
        tickFormat(format: (d: any) => string): Bullet;
        tickFormat(format: string): Bullet;
        tickFormat(format: (d: any, i: any) => string): Bullet;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): Bullet;
    }

    interface CandlestickBar extends Nvd3Element {
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): CandlestickBar;
        close(): (d: any) => number;
        close(func: (d:any) => number): CandlestickBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): CandlestickBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): CandlestickBar;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). CandlestickBar ensures the numbers are in the X domain but doesn't override the whole domain. CandlestickBar option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). CandlestickBar ensures the numbers are in the X domain but doesn't override the whole domain. CandlestickBar option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): CandlestickBar;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). CandlestickBar ensures the numbers are in the X domain but doesn't override the whole domain. CandlestickBar option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). CandlestickBar ensures the numbers are in the X domain but doesn't override the whole domain. CandlestickBar option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(value: number[]): CandlestickBar;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): CandlestickBar;
        high(): (d: any) => number;
        high(func: (d: any) => number): CandlestickBar;
        id(): any;
id(value: number|string): CandlestickBar;
        /*A master flag for turning chart interaction on and off. CandlestickBar overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. CandlestickBar overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): CandlestickBar;
        low(): (d: any) => number;
        low(func: (d: any) => number): CandlestickBar;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): CandlestickBar;
        open(): (d: any) => number;
        open(func: (d: any) => number): CandlestickBar;
        padData(): boolean;
        padData(value: boolean): CandlestickBar;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): CandlestickBar;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart CandlestickBar returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart CandlestickBar returns the key for the slice.*/
        x(func: (d: any) => any): CandlestickBar;
        /* Defines the whole X scale's domain. Using CandlestickBar will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using CandlestickBar will disable calculating the domain based on the data.*/
        xDomain(value: number[]): CandlestickBar;
        /* Override the X scale's range. Using CandlestickBar will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using CandlestickBar will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): CandlestickBar;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): CandlestickBar;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart CandlestickBar returns the key for the slice.*/
        y(func: (d: any) => number): CandlestickBar;
        /* Defines the whole y scale's domain. Using CandlestickBar will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using CandlestickBar will disable calculating the domain based on the data.*/
        yDomain(value: number[]): CandlestickBar;
        /* Override the y scale's range. Using CandlestickBar will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using CandlestickBar will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): CandlestickBar;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): CandlestickBar;
    }

    interface DiscreteBar extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): DiscreteBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): DiscreteBar;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be DiscreteBar value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be DiscreteBar value.*/
        duration(value: number): DiscreteBar;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). DiscreteBar ensures the numbers are in the Y domain but doesn't override the whole domain. DiscreteBar option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). DiscreteBar ensures the numbers are in the Y domain but doesn't override the whole domain. DiscreteBar option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): DiscreteBar;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): DiscreteBar;
        id(): any;
id(value: number|string): DiscreteBar;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): DiscreteBar;
        rectClass(): string;
        rectClass(value: string): DiscreteBar;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(): boolean;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(value: boolean): DiscreteBar;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): DiscreteBar;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): DiscreteBar;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart DiscreteBar returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart DiscreteBar returns the key for the slice.*/
        x(func: (d: any) => any): DiscreteBar;
        /* Defines the whole X scale's domain. Using DiscreteBar will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using DiscreteBar will disable calculating the domain based on the data.*/
        xDomain(value: number[]): DiscreteBar;
        /* Override the X scale's range. Using DiscreteBar will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using DiscreteBar will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): DiscreteBar;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): DiscreteBar;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart DiscreteBar returns the key for the slice.*/
        y(func: (d: any) => number): DiscreteBar;
        /* Defines the whole y scale's domain. Using DiscreteBar will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using DiscreteBar will disable calculating the domain based on the data.*/
        yDomain(value: number[]): DiscreteBar;
        /* Override the y scale's range. Using DiscreteBar will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using DiscreteBar will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): DiscreteBar;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): DiscreteBar;
    }

    interface Distribution extends Nvd3Element {
        axis(): string;
        axis(value: 'x'): Distribution;
        axis(value: 'y'): Distribution;
        axis(value: string): Distribution;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): Distribution;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): Distribution;
        domain(): number[];
        domain(value: number[]): Distribution;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be Distribution value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be Distribution value.*/
        duration(value: number): Distribution;
        getData(func: (d: any) => number): Distribution;
        scale(): any;
        scale(value: any): Distribution;
        size(): number;
        size(value: number): Distribution;
        width(): number;
        width(value: number): Distribution;


    }

    interface HistoricalBar extends Nvd3Element {
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): HistoricalBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): HistoricalBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): HistoricalBar;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be HistoricalBar value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be HistoricalBar value.*/
        duration(value: number): HistoricalBar;
        /* List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). HistoricalBar ensures the numbers are in the Y domain but doesn't override the whole domain. HistoricalBar option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceX(): number[];
        /* List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). HistoricalBar ensures the numbers are in the Y domain but doesn't override the whole domain. HistoricalBar option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceX(value: number[]): HistoricalBar;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). HistoricalBar ensures the numbers are in the Y domain but doesn't override the whole domain. HistoricalBar option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). HistoricalBar ensures the numbers are in the Y domain but doesn't override the whole domain. HistoricalBar option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): HistoricalBar;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): HistoricalBar;
        id(): any;
id(value: number|string): HistoricalBar;
        /*A master flag for turning chart interaction on and off. HistoricalBar overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. HistoricalBar overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): HistoricalBar;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): HistoricalBar;
        /*.*/
        padData(): boolean;
        /**/
        padData(value: boolean): HistoricalBar;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): HistoricalBar;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart HistoricalBar returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart HistoricalBar returns the key for the slice.*/
        x(func: (d: any) => any): HistoricalBar;
        /* Defines the whole X scale's domain. Using HistoricalBar will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using HistoricalBar will disable calculating the domain based on the data.*/
        xDomain(value: number[]): HistoricalBar;
        /* Override the X scale's range. Using HistoricalBar will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using HistoricalBar will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): HistoricalBar;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): HistoricalBar;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart HistoricalBar returns the key for the slice.*/
        y(func: (d: any) => number): HistoricalBar;
        /* Defines the whole y scale's domain. Using HistoricalBar will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using HistoricalBar will disable calculating the domain based on the data.*/
        yDomain(value: number[]): HistoricalBar;
        /* Override the y scale's range. Using HistoricalBar will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using HistoricalBar will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): HistoricalBar;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): HistoricalBar;
    }

    interface Line extends Scatter {
        scatter: Scatter;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): Line;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): Line;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): Line;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): Line;
    }

    interface MultiBar extends Nvd3Element {
        /*MultiBar option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(value: string[]): MultiBar;
        /*MultiBar option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(func: (d: any, i: number) => string): MultiBar;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): MultiBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): MultiBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): MultiBar;
        /**/
        disabled(): boolean[];
        /**/
        disabled(value: boolean[]): MultiBar;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be MultiBar value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be MultiBar value.*/
        duration(value: number): MultiBar;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). MultiBar ensures the numbers are in the Y domain but doesn't override the whole domain. MultiBar option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). MultiBar ensures the numbers are in the Y domain but doesn't override the whole domain. MultiBar option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): MultiBar;
        /*The padding between bar groups, MultiBar is passed as the padding attribute of rangeBands*/
        groupSpacing(): number;
        /*The padding between bar groups, MultiBar is passed as the padding attribute of rangeBands*/
        groupSpacing(value: number): MultiBar;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): MultiBar;
        /*.*/
        hideable(): boolean;
        /**/
        hideable(value: boolean): MultiBar;
        id(): any;
id(value: number|string): MultiBar;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): MultiBar;
        /*.*/
        stacked(): boolean;
        /**/
        stacked(value: boolean): MultiBar;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'silhouette'): MultiBar;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'wiggle'): MultiBar;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'expand'): MultiBar;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'zero'): MultiBar;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: string): MultiBar;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: (data: Array<[number, number]>) => number[]): MultiBar;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): MultiBar;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiBar returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiBar returns the key for the slice.*/
        x(func: (d: any) => any): MultiBar;
        /* Defines the whole X scale's domain. Using MultiBar will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using MultiBar will disable calculating the domain based on the data.*/
        xDomain(value: number[]): MultiBar;
        /* Override the X scale's range. Using MultiBar will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using MultiBar will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): MultiBar;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): MultiBar;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart MultiBar returns the key for the slice.*/
        y(func: (d: any) => number): MultiBar;
        /* Defines the whole y scale's domain. Using MultiBar will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using MultiBar will disable calculating the domain based on the data.*/
        yDomain(value: number[]): MultiBar;
        /* Override the y scale's range. Using MultiBar will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using MultiBar will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): MultiBar;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): MultiBar;
    }

    interface MultiBarHorizontal extends Nvd3Element {
        /*MultiBarHorizontal option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(value: string[]): MultiBarHorizontal;
        /*MultiBarHorizontal option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(func: (d: any, i: number) => string): MultiBarHorizontal;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): MultiBarHorizontal;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): MultiBarHorizontal;
        /**/
        disabled(): boolean[];
        /**/
        disabled(value: boolean[]): MultiBarHorizontal;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be MultiBarHorizontal value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be MultiBarHorizontal value.*/
        duration(value: number): MultiBarHorizontal;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). MultiBarHorizontal ensures the numbers are in the Y domain but doesn't override the whole domain. MultiBarHorizontal option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). MultiBarHorizontal ensures the numbers are in the Y domain but doesn't override the whole domain. MultiBarHorizontal option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): MultiBarHorizontal;
        /*The padding between bar groups, MultiBarHorizontal is passed as the padding attribute of rangeBands*/
        groupSpacing(): number;
        /*The padding between bar groups, MultiBarHorizontal is passed as the padding attribute of rangeBands*/
        groupSpacing(value: number): MultiBarHorizontal;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): MultiBarHorizontal;
        id(): any;
id(value: number|string): MultiBarHorizontal;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): MultiBarHorizontal;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(): boolean;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(value: boolean): MultiBarHorizontal;
        /*.*/
        stacked(): boolean;
        /**/
        stacked(value: boolean): MultiBarHorizontal;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'silhouette'): MultiBarHorizontal;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'wiggle'): MultiBarHorizontal;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'expand'): MultiBarHorizontal;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'zero'): MultiBarHorizontal;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: string): MultiBarHorizontal;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: (data: Array<[number, number]>) => number[]): MultiBarHorizontal;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): MultiBarHorizontal;
        /*.*/
        valuePadding(): number;
        /**/
        valuePadding(value: number): MultiBarHorizontal;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): MultiBarHorizontal;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiBarHorizontal returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiBarHorizontal returns the key for the slice.*/
        x(func: (d: any) => any): MultiBarHorizontal;
        /* Defines the whole X scale's domain. Using MultiBarHorizontal will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using MultiBarHorizontal will disable calculating the domain based on the data.*/
        xDomain(value: number[]): MultiBarHorizontal;
        /* Override the X scale's range. Using MultiBarHorizontal will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using MultiBarHorizontal will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): MultiBarHorizontal;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): MultiBarHorizontal;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart MultiBarHorizontal returns the key for the slice.*/
        y(func: (d: any) => number): MultiBarHorizontal;
        /* Defines the whole y scale's domain. Using MultiBarHorizontal will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using MultiBarHorizontal will disable calculating the domain based on the data.*/
        yDomain(value: number[]): MultiBarHorizontal;
        /**/
        yErr(): (d: any, i: number) => number|number[];
        /**/
        yErr(func: (d: any, i: number) => number | number[]): MultiBarHorizontal;
        /* Override the y scale's range. Using MultiBarHorizontal will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using MultiBarHorizontal will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): MultiBarHorizontal;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): MultiBarHorizontal;
    }

    interface OhlcBar extends Nvd3Element {
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): OhlcBar;
        close(): (d: any) => number;
        close(func: (d: any) => number): OhlcBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): OhlcBar;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): OhlcBar;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). OhlcBar ensures the numbers are in the X domain but doesn't override the whole domain. OhlcBar option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). OhlcBar ensures the numbers are in the X domain but doesn't override the whole domain. OhlcBar option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): OhlcBar;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). OhlcBar ensures the numbers are in the X domain but doesn't override the whole domain. OhlcBar option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). OhlcBar ensures the numbers are in the X domain but doesn't override the whole domain. OhlcBar option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(value: number[]): OhlcBar;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): OhlcBar;
        high(): (d: any) => number;
        high(func: (d: any) => number): OhlcBar;
        id(): any;
id(value: number|string): OhlcBar;
        /*A master flag for turning chart interaction on and off. OhlcBar overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. OhlcBar overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): OhlcBar;
        low(): (d: any) => number;
        low(func: (d: any) => number): OhlcBar;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): OhlcBar;
        open(): (d: any) => number;
        open(func: (d: any) => number): OhlcBar;
        padData(): boolean;
        padData(value: boolean): OhlcBar;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): OhlcBar;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart OhlcBar returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart OhlcBar returns the key for the slice.*/
        x(func: (d: any) => any): OhlcBar;
        /* Defines the whole X scale's domain. Using OhlcBar will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using OhlcBar will disable calculating the domain based on the data.*/
        xDomain(value: number[]): OhlcBar;
        /* Override the X scale's range. Using OhlcBar will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using OhlcBar will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): OhlcBar;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): OhlcBar;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart OhlcBar returns the key for the slice.*/
        y(func: (d: any) => number): OhlcBar;
        /* Defines the whole y scale's domain. Using OhlcBar will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using OhlcBar will disable calculating the domain based on the data.*/
        yDomain(value: number[]): OhlcBar;
        /* Override the y scale's range. Using OhlcBar will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using OhlcBar will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): OhlcBar;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): OhlcBar;
    }

    interface ParallelCoordinates extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): ParallelCoordinates;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): ParallelCoordinates;
        dimensionData(): any
        dimensionData(d: any): ParallelCoordinates
        /*D3 format for each x axis*/
        dimensionFormats(): string[];
        /*D3 format for each x axis*/
        dimensionFormats(value: string[]): ParallelCoordinates;
        /*Name of each dimension, used for each axis.*/
        dimensionNames(): string[];
        /*Name of each dimension, used for each axis.*/
        dimensionNames(value: string[]): ParallelCoordinates;
        /*Deprecated. Use dimensionsNames instead. */
        dimensions(): any;
        /*Deprecated. Use dimensionsNames instead. .*/
        dimensions(value: any): ParallelCoordinates;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): ParallelCoordinates;
        /*Specifies each line tension. Values between 0 and 1.*/
        lineTension(): number;
        /*Specifies each line tension. Values between 0 and 1.*/
        lineTension(value: number): ParallelCoordinates;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): ParallelCoordinates;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): ParallelCoordinates;
    }

    interface Pie extends Nvd3Element {
        /*Specifies each slice size, by an inner and a outer radius. Values between 0 and 1*/
        arcsRadius(): ArcsRadius[];
        /*Specifies each slice size, by an inner and a outer radius. Values between 0 and 1*/
        arcsRadius(value: ArcsRadius[]): Pie;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): Pie;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): Pie;
        /*D3 3.4+, For donut charts only, the corner radius of the slices. Typically used with padAngle.*/
        cornerRadius(): number;
        /*D3 3.4+, For donut charts only, the corner radius of the slices. Typically used with padAngle.*/
        cornerRadius(value: number): Pie;
        /*Whether to make a pie graph a donut graph or not.*/
        donut(): boolean;
        /*Whether to make a pie graph a donut graph or not.*/
        donut(value: boolean): Pie;
        /**/
        donutLabelsOutside(): boolean;
        /**/
        donutLabelsOutside(value: boolean): Pie;
        /*Percent of pie radius to cut out of the middle to make the donut. It is multiplied by the outer radius to calculate the inner radius, thus it should be between 0 and 1.*/
        donutRatio(): number;
        /*Percent of pie radius to cut out of the middle to make the donut. It is multiplied by the outer radius to calculate the inner radius, thus it should be between 0 and 1.*/
        donutRatio(value: number): Pie;
        /*Function used to manage the ending angle of the pie/donut chart*/
        endAngle(): (d: any) => number;
        /*Function used to manage the ending angle of the pie/donut chart*/
        endAngle(func: (d: any) => number): Pie;
        /*For pie/donut charts, whether to increase slice radius on hover or not*/
        growOnHover(): boolean;
        /*For pie/donut charts, whether to increase slice radius on hover or not*/
        growOnHover(value: boolean): Pie;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): Pie;
        id(): any;
id(value: number|string): Pie;
        /**/
        labelFormat(): string;
        /**/
        labelFormat(value: string): Pie;
        /**/
        labelFormat(format: (d: any) => string): Pie;
        /**/
        labelSunbeamLayout(): boolean;
        /**/
        labelSunbeamLayout(value: boolean): Pie;
        /*Pie/donut charts: The slice threshold size to not display the label because it woudl be too small of a space*/
        labelThreshold(): number;
        /*Pie/donut charts: The slice threshold size to not display the label because it woudl be too small of a space*/
        labelThreshold(value: number): Pie;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(): string;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'key'): Pie;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'value'): Pie;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'percent'): Pie;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: string): Pie;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(func: (d: any, i: number, values:any)=> string): Pie;
        /*Whether pie/donut chart labels should be outside the slices instead of inside them*/
        labelsOutside(): boolean;
        /*Whether pie/donut chart labels should be outside the slices instead of inside them*/
        labelsOutside(value: boolean): Pie;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): Pie;
        /*D3 3.4+, For donut charts only, the percent of the chart that should be spacing between slices.*/
        padAngle(): number;
        /*D3 3.4+, For donut charts only, the percent of the chart that should be spacing between slices.*/
        padAngle(value: number): Pie;
        /**/
        pieLabelsOutside(): boolean;
        /**/
        pieLabelsOutside(value: boolean): Pie;
        /*Show pie/donut chart labels for each slice*/
        showLabels(): boolean;
        /*Show pie/donut chart labels for each slice*/
        showLabels(value: boolean): Pie;
        /*Function used to manage the starting  angle of the pie/donut chart*/
        startAngle(): (d: any) => number;
        /*Function used to manage the starting  angle of the pie/donut chart*/
        startAngle(func: (d: any) => number): Pie;
        /*Text to include within the middle of a donut chart*/
        title(): string;
        /*Text to include within the middle of a donut chart*/
        title(value: string): Pie;
        /*Vertical offset for the donut chart title*/
        titleOffset(): number;
        /*Vertical offset for the donut chart title*/
        titleOffset(value: number): Pie;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): Pie;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(format: (d: any) => string): Pie;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): Pie;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart Pie returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart Pie returns the key for the slice.*/
        x(func: (d: any) => any): Pie;
        /*Proxy function to return the Y value so adjustments can be made if needed.For pie/ donut chart Pie returns the value for the slice.*/
        y(): (d: any) => number;
        /*Proxy function to return the Y value so adjustments can be made if needed. For pie/donut chart Pie returns the value for the slice.*/
        y(func: (d: any) => number): Pie;
        /**/
    }

    interface Scatter extends Nvd3Element {
        clearHighlights(): Scatter;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): Scatter;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with Scatter option. Essentially Scatter lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): Scatter;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with Scatter option. Essentially Scatter lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): Scatter;
        /*When useVoronoi is on, Scatter masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, Scatter masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): Scatter;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): Scatter;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): Scatter;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be Scatter value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be Scatter value.*/
        duration(value: number): Scatter;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). Scatter ensures the numbers are in the X domain but doesn't override the whole domain. Scatter option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). Scatter ensures the numbers are in the X domain but doesn't override the whole domain. Scatter option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): Scatter;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). Scatter ensures the numbers are in the X domain but doesn't override the whole domain. Scatter option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). Scatter ensures the numbers are in the X domain but doesn't override the whole domain. Scatter option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): Scatter;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). Scatter ensures the numbers are in the X domain but doesn't override the whole domain. Scatter option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). Scatter ensures the numbers are in the X domain but doesn't override the whole domain. Scatter option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): Scatter;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): Scatter;
        id(): any;
        id(value: number | string): Scatter;
        /*A master flag for turning chart interaction on and off. Scatter overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. Scatter overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): Scatter;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): Scatter;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): Scatter;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): Scatter;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): Scatter;
        /* Defines the whole point scale's domain. Using Scatter will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using Scatter will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): Scatter;
        /* Override the point scale's range. Using Scatter will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using Scatter will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): Scatter;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): Scatter;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): Scatter;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): Scatter;
        /*Displays the voronoi areas on the chart. Scatter is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. Scatter is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): Scatter;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting Scatter to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting Scatter to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): Scatter;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): Scatter;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart Scatter returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart Scatter returns the key for the slice.*/
        x(func: (d: any) => any): Scatter;
        /* Defines the whole X scale's domain. Using Scatter will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using Scatter will disable calculating the domain based on the data.*/
        xDomain(value: number[]): Scatter;
        /* Override the X scale's range. Using Scatter will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using Scatter will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): Scatter;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): Scatter;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart Scatter returns the key for the slice.*/
        y(func: (d: any) => number): Scatter;
        /* Defines the whole y scale's domain. Using Scatter will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using Scatter will disable calculating the domain based on the data.*/
        yDomain(value: number[]): Scatter;
        /* Override the y scale's range. Using Scatter will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using Scatter will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): Scatter;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): Scatter;

    }

    interface SparkLine extends Nvd3Element {
        animate(): boolean;
        animate(value: boolean): SparkLine;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): SparkLine;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): SparkLine;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): SparkLine;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): SparkLine;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): SparkLine;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart SparkLine returns the key for the slice.*/
        x(): (d: any, i?: number) => number;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart SparkLine returns the key for the slice.*/
        x(func: (d: any, i?: number) => number): SparkLine;
        /* Defines the whole X scale's domain. Using SparkLine will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using SparkLine will disable calculating the domain based on the data.*/
        xDomain(value: number[]): SparkLine;
        /* Override the X scale's range. Using SparkLine will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using SparkLine will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): SparkLine;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): SparkLine;
        y(): (d: any, i?: number) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart SparkLine returns the key for the slice.*/
        y(func: (d: any, i?: number) => number): SparkLine;
        /* Defines the whole y scale's domain. Using SparkLine will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using SparkLine will disable calculating the domain based on the data.*/
        yDomain(value: number[]): SparkLine;
        /* Override the y scale's range. Using SparkLine will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using SparkLine will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): SparkLine;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): SparkLine;
    }

    interface SparkLinePlus extends SparkLine {
        sparkline: SparkLine;

        alignValue(): boolean;
        alignValue(value: boolean): SparkLinePlus;
        /*Message to display if no data is provided*/
        noData(): string;
        /*Message to display if no data is provided*/
        noData(value: string): SparkLinePlus;
        rightAlignValue(): boolean;
        rightAlignValue(value: boolean): SparkLinePlus;
        /*Shows the last value in the sparkline to the right of the line.*/
        showLastValue(): boolean;
        /*Shows the last value in the sparkline to the right of the line.*/
        showLastValue(value: boolean): SparkLinePlus;
        xTickFormat(format: (d: any) => string): SparkLinePlus;
        xTickFormat(format: string): SparkLinePlus;
        xTickFormat(format: (d: any, i: any) => string) : SparkLinePlus;
        yTickFormat(format: (d: any) => string): SparkLinePlus;
        yTickFormat(format: string): SparkLinePlus;
        yTickFormat(format: (d: any, i: any) => string) :SparkLinePlus;
    }

    interface StackedArea extends Scatter {
        scatter: Scatter;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): StackedArea;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): StackedArea;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: 'silhouette'): StackedArea;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: 'wiggle'): StackedArea;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: 'expand'): StackedArea;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: 'zero'): StackedArea;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: string): StackedArea;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: (data: Array<[number, number]>) => number[]): StackedArea;
        order(): string;
        order(value: string): StackedArea;
        style(offset: 'stack'): StackedArea;
        style(offset: 'stream'): StackedArea;
        style(offset: 'stream-center'): StackedArea;
        style(offset: 'expand'): StackedArea;
        style(offset: 'stack_percent'): StackedArea;
        style(offset: string): StackedArea;
    }

    interface Sunburst extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): Sunburst;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): Sunburst;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): Sunburst;
        id(): any;
        id(value: number|string): Sunburst;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): Sunburst;
        /*For sunburst only: specifies the mode of drawing the sunburst segments. Can be 'size' or 'count'. 'size' draws the segments according to the 'size' attribute of the leaf nodes, 'count' draws according to the amount of siblings a node has.*/
        mode(): string;
        /*For sunburst only: specifies the mode of drawing the sunburst segments. Can be 'size' or 'count'. 'size' draws the segments according to the 'size' attribute of the leaf nodes, 'count' draws according to the amount of siblings a node has.*/
        mode(value: 'size'): Sunburst;
        /*For sunburst only: specifies the mode of drawing the sunburst segments. Can be 'size' or 'count'. 'size' draws the segments according to the 'size' attribute of the leaf nodes, 'count' draws according to the amount of siblings a node has.*/
        mode(value: 'count'): Sunburst;
        /*For sunburst only: specifies the mode of drawing the sunburst segments. Can be 'size' or 'count'. 'size' draws the segments according to the 'size' attribute of the leaf nodes, 'count' draws according to the amount of siblings a node has.*/
        mode(value: string): Sunburst;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): Sunburst;
    }

    interface Tooltip {

        /*For tooltip: Parent dom element of the SVG that holds the chart. Tooltip will make the tooltip dom be created inside Tooltip container instead of on the document body.*/
        chartContainer(el: HTMLElement): Tooltip
        /*For tooltip: Parent dom element of the SVG that holds the chart. Tooltip will make the tooltip dom be created inside Tooltip container instead of on the document body.*/
        chartContainer(): HTMLElement
        /*Attaches additional CSS classes to the tooltip DIV that is created.*/
        classes(el: string): Tooltip
        /*Attaches additional CSS classes to the tooltip DIV that is created.*/
        classes(): string
        /*Function that generates the tooltip content html.*/
        contentGenerator(): (d: any) => string;
        /*Function that generates the tooltip content html.*/
        contentGenerator(func: (d: any) => string): Tooltip;
        data(): any;
        data(value: any): Tooltip;
        distance(): number;
        distance(value: number): Tooltip;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be Tooltip value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be Tooltip value.*/
        duration(value: number): Tooltip;
        /*For tooltip: completely enables or disabled the tooltip*/
        enabled(): boolean;
        /*For tooltip: completely enables or disabled the tooltip*/
        enabled(value: boolean): Tooltip;
        /*For tooltip: If not null, Tooltip fixes the top position of the tooltip.*/
        fixedTop(): number;
        /*For tooltip: If not null, Tooltip fixes the top position of the tooltip.*/
        fixedTop(value: number): Tooltip;
        /*Can be 'n','s','e','w'. Determines how tooltip is positioned*/
        gravity(): string;
        /*Can be 'n','s','e','w'. Determines how tooltip is positioned*/
        gravity(value: string): Tooltip;
        /*For tooltip: show the x axis value in the tooltip or not (not valid for pie charts for instance)*/
        headerEnabled(): boolean;
        /*For tooltip: show the x axis value in the tooltip or not (not valid for pie charts for instance)*/
        headerEnabled(value: boolean): Tooltip;
        /*For tooltip: formats the x axis value in the tooltip*/
        headerFormatter(func: (d: any) => string): Tooltip;
        /*For tooltip: formats the x axis value in the tooltip*/
        headerFormatter(): (d: any) => string;
        /*For tooltip: show or hide the tooltip by setting Tooltip to true or false. Tooltips used to be created and destroyed, but now we re-used the element and set opacity to 1 or 0.*/
        hidden(): boolean;
        /*For tooltip: show or hide the tooltip by setting Tooltip to true or false. Tooltips used to be created and destroyed, but now we re-used the element and set opacity to 1 or 0.*/
        hidden(value: boolean): Tooltip;
        /*Delay in ms before the tooltip hides itself after a mouseout event. A new mouseover event cancels the hide if within Tooltip timeout period.*/
        hideDelay(): number;
        /*Delay in ms before the tooltip hides itself after a mouseout event. A new mouseover event cancels the hide if within Tooltip timeout period.*/
        hideDelay(value: number): Tooltip;
        /**/
        id(): any;
        keyFormatter(): (d: any, i: number) => string;
        keyFormatter(func: (d: any, i: number) => string): Tooltip;
        offset(): Offset;
        offset(value: Offset): Tooltip;
        /*sets the top/left positioning for the tooltip. Should be given an object with 'left' and/or 'top' attributes. You can override just one, just like the 'margin' option on charts*/
        position(): Offset;
        /*sets the top/left positioning for the tooltip. Should be given an object with 'left' and/or 'top' attributes. You can override just one, just like the 'margin' option on charts*/
        position(value: Offset): Tooltip;
        /*Tolerance allowed before tooltip is moved from its current position (creates 'snapping' effect)*/
        snapDistance(): number;
        /*Tolerance allowed before tooltip is moved from its current position (creates 'snapping' effect)*/
        snapDistance(value: number): Tooltip;
        /*returns the dom element of the tooltip.*/
        tooltipElem(): HTMLElement;
        /*formats the y axis value(s) in the tooltip*/
        valueFormatter(): (d: any) => string;
        /*formats the y axis value(s) in the tooltip*/
        valueFormatter(func: (d: any) => string): Tooltip;
    }

//#endregion

//#region Charts
    interface BoxPlotChart extends Chart {
        boxplot: BoxPlot;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): BoxPlotChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): BoxPlotChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be BoxPlotChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be BoxPlotChart value.*/
        duration(value: number): BoxPlotChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): BoxPlotChart;
        id(): any;
        id(value: number|string): BoxPlotChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): BoxPlotChart;
        maxBoxWidth(): number;
        maxBoxWidth(value: number): BoxPlotChart;
        noData(): string;
        noData(value: string): BoxPlotChart;
        /*When only one Y axis is used, BoxPlotChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, BoxPlotChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): BoxPlotChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): BoxPlotChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): BoxPlotChart;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(): boolean;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(value: boolean): BoxPlotChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): BoxPlotChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): BoxPlotChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): BoxPlotChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart BoxPlotChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart BoxPlotChart returns the key for the slice.*/
        x(func: (d: any) => any): BoxPlotChart;
        /* Defines the whole X scale's domain. Using BoxPlotChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using BoxPlotChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): BoxPlotChart;
        /* Override the X scale's range. Using BoxPlotChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using BoxPlotChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): BoxPlotChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): BoxPlotChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart BoxPlotChart returns the key for the slice.*/
        y(func: (d: any) => number): BoxPlotChart;
        /* Defines the whole y scale's domain. Using BoxPlotChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using BoxPlotChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): BoxPlotChart;
        /* Override the y scale's range. Using BoxPlotChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using BoxPlotChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): BoxPlotChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): BoxPlotChart;

	}

    interface BulletChart extends Chart{
        bullet: Bullet;
        tooltip: Tooltip;

        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): BulletChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): BulletChart;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). BulletChart ensures the numbers are in the X domain but doesn't override the whole domain. BulletChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). BulletChart ensures the numbers are in the X domain but doesn't override the whole domain. BulletChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): BulletChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): BulletChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): BulletChart;
        markers(): (d: any) => any //todo;
        markers(func: (d: any) => any): BulletChart //todo;
        measures(): (d: any) => any //todo;
        measures(func: (d: any) => any): BulletChart //todo;
        noData(): string;
        noData(value: string): BulletChart;
        orient(): string;
        orient(orientation: string): BulletChart;
        ranges(): (d: any) => any //todo;
        ranges(func: (d: any) => any): BulletChart //todo;
        tickFormat(): (d: any) => string;
        tickFormat(format: (d: any) => string): BulletChart;
        tickFormat(format: string): BulletChart;
        tickFormat(format: (d: any, i: any) => string): BulletChart;
        ticks(): any[];
        ticks(...args: any[]): BulletChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): BulletChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): BulletChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): BulletChart;
	}

    interface CandlestickBarChart extends Chart {
        bars: CandlestickBar;
        legend: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): CandlestickBarChart;
        close(): (d: any) => number;
        close(func: (d: any) => number): CandlestickBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): CandlestickBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): CandlestickBarChart;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). CandlestickBarChart ensures the numbers are in the X domain but doesn't override the whole domain. CandlestickBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be CandlestickBarChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be CandlestickBarChart value.*/
        duration(value: number): CandlestickBarChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): CandlestickBarChart;
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). CandlestickBarChart ensures the numbers are in the X domain but doesn't override the whole domain. CandlestickBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): CandlestickBarChart;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). CandlestickBarChart ensures the numbers are in the X domain but doesn't override the whole domain. CandlestickBarChart option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). CandlestickBarChart ensures the numbers are in the X domain but doesn't override the whole domain. CandlestickBarChart option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(value: number[]): CandlestickBarChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): CandlestickBarChart;
        high(): (d: any) => number;
        high(func: (d: any) => number): CandlestickBarChart;
        id(): any;
        id(value: number|string): CandlestickBarChart;
        /*A master flag for turning chart interaction on and off. CandlestickBarChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. CandlestickBarChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): CandlestickBarChart;
        low(): (d: any) => number;
        low(func: (d: any) => number): CandlestickBarChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): CandlestickBarChart;
        noData(): string;
        noData(value: string): CandlestickBarChart;
        open(): (d: any) => number;
        open(func: (d: any) => number): CandlestickBarChart;
        padData(): boolean;
        padData(value: boolean): CandlestickBarChart;
        /*When only one Y axis is used, CandlestickBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, CandlestickBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): CandlestickBarChart;
        /*Whether to display the legend or not*/
        showLegend(): boolean;
        /*Whether to display the legend or not*/
        showLegend(value: boolean): CandlestickBarChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): CandlestickBarChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): CandlestickBarChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): CandlestickBarChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): CandlestickBarChart;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning CandlestickBarChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning CandlestickBarChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): CandlestickBarChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): CandlestickBarChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart CandlestickBarChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart CandlestickBarChart returns the key for the slice.*/
        x(func: (d: any) => any): CandlestickBarChart;
        /* Defines the whole X scale's domain. Using CandlestickBarChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using CandlestickBarChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): CandlestickBarChart;
        /* Override the X scale's range. Using CandlestickBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using CandlestickBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): CandlestickBarChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): CandlestickBarChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart CandlestickBarChart returns the key for the slice.*/
        y(func: (d: any) => number): CandlestickBarChart;
        /* Defines the whole y scale's domain. Using CandlestickBarChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using CandlestickBarChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): CandlestickBarChart;
        /* Override the y scale's range. Using CandlestickBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using CandlestickBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): CandlestickBarChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): CandlestickBarChart;
    }

    interface CumulativeLineChart extends LineChart {
        controls: Legend;
        average(func: (d: any) => number): CumulativeLineChart;
        average(): (d: any) => number;
        noErrorCheck(value: boolean): CumulativeLineChart;
        noErrorCheck(): boolean;
    }

    interface DiscreteBarChart extends Chart {
        discretebar: DiscreteBar;
        legend: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): DiscreteBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): DiscreteBarChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be DiscreteBarChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be DiscreteBarChart value.*/
        duration(value: number): DiscreteBarChart;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). DiscreteBarChart ensures the numbers are in the Y domain but doesn't override the whole domain. DiscreteBarChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). DiscreteBarChart ensures the numbers are in the Y domain but doesn't override the whole domain. DiscreteBarChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): DiscreteBarChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): DiscreteBarChart;
        id(): any;
        id(value: number|string): DiscreteBarChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): DiscreteBarChart;
        noData(): string;
        noData(value: string): DiscreteBarChart;
        rectClass(): string;
        rectClass(value: string): DiscreteBarChart;
        /*When only one Y axis is used, DiscreteBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, DiscreteBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): DiscreteBarChart;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(): boolean;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(value: boolean): DiscreteBarChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): DiscreteBarChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): DiscreteBarChart;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(): boolean;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(value: boolean): DiscreteBarChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): DiscreteBarChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): DiscreteBarChart;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): DiscreteBarChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): DiscreteBarChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart DiscreteBarChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart DiscreteBarChart returns the key for the slice.*/
        x(func: (d: any) => any): DiscreteBarChart;
        /* Defines the whole X scale's domain. Using DiscreteBarChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using DiscreteBarChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): DiscreteBarChart;
        /* Override the X scale's range. Using DiscreteBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using DiscreteBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): DiscreteBarChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): DiscreteBarChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart DiscreteBarChart returns the key for the slice.*/
        y(func: (d: any) => number): DiscreteBarChart;
        /* Defines the whole y scale's domain. Using DiscreteBarChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using DiscreteBarChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): DiscreteBarChart;
        /* Override the y scale's range. Using DiscreteBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using DiscreteBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): DiscreteBarChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): DiscreteBarChart;
    }

    interface HistoricalBarChart extends Chart {
        bars: HistoricalBar;
        legend: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): HistoricalBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): HistoricalBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): HistoricalBarChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): HistoricalBarChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be HistoricalBarChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be HistoricalBarChart value.*/
        duration(value: number): HistoricalBarChart;
        /* List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). HistoricalBarChart ensures the numbers are in the Y domain but doesn't override the whole domain. HistoricalBarChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceX(): number[];
        /* List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). HistoricalBarChart ensures the numbers are in the Y domain but doesn't override the whole domain. HistoricalBarChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceX(value: number[]): HistoricalBarChart;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). HistoricalBarChart ensures the numbers are in the Y domain but doesn't override the whole domain. HistoricalBarChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). HistoricalBarChart ensures the numbers are in the Y domain but doesn't override the whole domain. HistoricalBarChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): HistoricalBarChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): HistoricalBarChart;
        id(): any;
id(value: number|string): HistoricalBarChart;
        /*A master flag for turning chart interaction on and off. HistoricalBarChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. HistoricalBarChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): HistoricalBarChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): HistoricalBarChart;
        noData(): string;
        noData(value: string): HistoricalBarChart;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): HistoricalBarChart;
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, HistoricalBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): HistoricalBarChart;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): HistoricalBarChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): HistoricalBarChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): HistoricalBarChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): HistoricalBarChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): HistoricalBarChart;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning HistoricalBarChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning HistoricalBarChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): HistoricalBarChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): HistoricalBarChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart HistoricalBarChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart HistoricalBarChart returns the key for the slice.*/
        x(func: (d: any) => any): HistoricalBarChart;
        /* Defines the whole X scale's domain. Using HistoricalBarChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using HistoricalBarChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): HistoricalBarChart;
        /* Override the X scale's range. Using HistoricalBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using HistoricalBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): HistoricalBarChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): HistoricalBarChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart HistoricalBarChart returns the key for the slice.*/
        y(func: (d: any) => number): HistoricalBarChart;
        /* Defines the whole y scale's domain. Using HistoricalBarChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using HistoricalBarChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): HistoricalBarChart;
        /* Override the y scale's range. Using HistoricalBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using HistoricalBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): HistoricalBarChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): HistoricalBarChart;
    }

    interface LineChart extends Chart {
        lines: Line;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        legend: Legend;
        tooltip: Tooltip;

        clearHighlights(): LineChart;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): LineChart;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with LineChart option. Essentially LineChart lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): LineChart;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with LineChart option. Essentially LineChart lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): LineChart;
        /*When useVoronoi is on, LineChart masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, LineChart masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): LineChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): LineChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): LineChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): LineChart;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): LineChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be LineChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be LineChart value.*/
        duration(value: number): LineChart;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). LineChart ensures the numbers are in the X domain but doesn't override the whole domain. LineChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). LineChart ensures the numbers are in the X domain but doesn't override the whole domain. LineChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): LineChart;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). LineChart ensures the numbers are in the X domain but doesn't override the whole domain. LineChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). LineChart ensures the numbers are in the X domain but doesn't override the whole domain. LineChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): LineChart;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). LineChart ensures the numbers are in the X domain but doesn't override the whole domain. LineChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). LineChart ensures the numbers are in the X domain but doesn't override the whole domain. LineChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): LineChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): LineChart;
        /**/
        highlightPoint(): (d: any) => boolean;
        /**/
        highlightPoint(func: (d: any) => boolean): LineChart;
        id(): any;
id(value: number|string): LineChart;
        /*A master flag for turning chart interaction on and off. LineChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. LineChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): LineChart;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): LineChart;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): LineChart;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): LineChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): LineChart;
        noData(): string;
        noData(value: string): LineChart;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): LineChart;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): LineChart;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): LineChart;
        /* Defines the whole point scale's domain. Using LineChart will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using LineChart will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): LineChart;
        /* Override the point scale's range. Using LineChart will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using LineChart will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): LineChart;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): LineChart;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): LineChart;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): LineChart;
        /*When only one Y axis is used, LineChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, LineChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): LineChart;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): LineChart;
        /*Displays the voronoi areas on the chart. LineChart is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. LineChart is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): LineChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): LineChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): LineChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): LineChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): LineChart;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning LineChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning LineChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): LineChart;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting LineChart to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting LineChart to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): LineChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): LineChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart LineChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart LineChart returns the key for the slice.*/
        x(func: (d: any) => any): LineChart;
        /* Defines the whole X scale's domain. Using LineChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using LineChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): LineChart;
        /* Override the X scale's range. Using LineChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using LineChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): LineChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): LineChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart LineChart returns the key for the slice.*/
        y(func: (d: any) => number): LineChart;
        /* Defines the whole y scale's domain. Using LineChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using LineChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): LineChart;
        /* Override the y scale's range. Using LineChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using LineChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): LineChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): LineChart;
    }

    interface LinePlusBarChart extends Chart {
        legend: Legend;
        lines: Line;
        lines2: Line;
        bars: HistoricalBar;
        bars2: HistoricalBar;
        xAxis: Nvd3Axis;
        x2Axis: Nvd3Axis;
        y1Axis: Nvd3Axis;
        y2Axis: Nvd3Axis;
        y3Axis: Nvd3Axis;
        y4Axis: Nvd3Axis;
        tooltip: Tooltip;

        brushExtent(): [number, number] | [[number, number], [number, number]];
        brushExtent(value: [number, number] | [[number, number], [number, number]]) : LinePlusBarChart;
        clearHighlights(): LinePlusBarChart;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): LinePlusBarChart;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with LinePlusBarChart option. Essentially LinePlusBarChart lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): LinePlusBarChart;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with LinePlusBarChart option. Essentially LinePlusBarChart lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): LinePlusBarChart;
        /*When useVoronoi is on, LinePlusBarChart masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, LinePlusBarChart masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): LinePlusBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): LinePlusBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): LinePlusBarChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): LinePlusBarChart;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): LinePlusBarChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be LinePlusBarChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be LinePlusBarChart value.*/
        duration(value: number): LinePlusBarChart;
        focusEnable(): boolean;
        focusEnable(value: boolean): LinePlusBarChart;
        focusHeight(): number;
        focusHeight(value: number): LinePlusBarChart;
        focusShowAxisX(): boolean;
        focusShowAxisX(value: boolean): LinePlusBarChart;
        focusShowAxisY(): boolean;
        focusShowAxisY(value: boolean): LinePlusBarChart;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). LinePlusBarChart ensures the numbers are in the X domain but doesn't override the whole domain. LinePlusBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). LinePlusBarChart ensures the numbers are in the X domain but doesn't override the whole domain. LinePlusBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): LinePlusBarChart;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). LinePlusBarChart ensures the numbers are in the X domain but doesn't override the whole domain. LinePlusBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). LinePlusBarChart ensures the numbers are in the X domain but doesn't override the whole domain. LinePlusBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): LinePlusBarChart;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). LinePlusBarChart ensures the numbers are in the X domain but doesn't override the whole domain. LinePlusBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). LinePlusBarChart ensures the numbers are in the X domain but doesn't override the whole domain. LinePlusBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): LinePlusBarChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): LinePlusBarChart;
        /**/
        highlightPoint(): (d: any) => boolean;
        /**/
        highlightPoint(func: (d: any) => boolean): LinePlusBarChart;
        id(): any;
id(value: number|string): LinePlusBarChart;
        /*A master flag for turning chart interaction on and off. LinePlusBarChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. LinePlusBarChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): LinePlusBarChart;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): LinePlusBarChart;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): LinePlusBarChart;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): LinePlusBarChart;
        /*The extra text after the label in the legend that tells what axis the series belongs to, for any series on the left axis.*/
        legendLeftAxisHint(): string;
        /*The extra text after the label in the legend that tells what axis the series belongs to, for any series on the left axis.*/
        legendLeftAxisHint(value: string): LinePlusBarChart
        /*The extra text after the label in the legend that tells what axis the series belongs to, for any seris on the right axis.*/
        legendRightAxisHint(): string;
                /*The extra text after the label in the legend that tells what axis the series belongs to, for any seris on the right axis.*/
        legendRightAxisHint(value: string): LinePlusBarChart
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): LinePlusBarChart;
        noData(): string;
        noData(value: string): LinePlusBarChart;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): LinePlusBarChart;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): LinePlusBarChart;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): LinePlusBarChart;
        /* Defines the whole point scale's domain. Using LinePlusBarChart will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using LinePlusBarChart will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): LinePlusBarChart;
        /* Override the point scale's range. Using LinePlusBarChart will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using LinePlusBarChart will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): LinePlusBarChart;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): LinePlusBarChart;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): LinePlusBarChart;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): LinePlusBarChart;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): LinePlusBarChart;
        /*Displays the voronoi areas on the chart. LinePlusBarChart is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. LinePlusBarChart is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): LinePlusBarChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): LinePlusBarChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): LinePlusBarChart;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning LinePlusBarChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning LinePlusBarChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): LinePlusBarChart;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting LinePlusBarChart to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting LinePlusBarChart to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): LinePlusBarChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): LinePlusBarChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart LinePlusBarChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart LinePlusBarChart returns the key for the slice.*/
        x(func: (d: any) => any): LinePlusBarChart;
        /* Defines the whole X scale's domain. Using LinePlusBarChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using LinePlusBarChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): LinePlusBarChart;
        /* Override the X scale's range. Using LinePlusBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using LinePlusBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): LinePlusBarChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): LinePlusBarChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart LinePlusBarChart returns the key for the slice.*/
        y(func: (d: any) => number): LinePlusBarChart;
        /* Defines the whole y scale's domain. Using LinePlusBarChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using LinePlusBarChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): LinePlusBarChart;
        /* Override the y scale's range. Using LinePlusBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using LinePlusBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): LinePlusBarChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): LinePlusBarChart;
    }

    interface LineWithFocusChart extends Chart {
        legend: Legend;
        lines: Line;
        lines2: Line;
        xAxis: Nvd3Axis;
        x2Axis: Nvd3Axis;
        yAxis: Nvd3Axis;
        y2Axis: Nvd3Axis;
        tooltip: Tooltip;

        brushExtent(): [number, number] | [[number, number], [number, number]];
        brushExtent(value: [number, number] | [[number, number], [number, number]]): LineWithFocusChart;
        clearHighlights(): LineWithFocusChart;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): LineWithFocusChart;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with LineWithFocusChart option. Essentially LineWithFocusChart lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): LineWithFocusChart;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with LineWithFocusChart option. Essentially LineWithFocusChart lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): LineWithFocusChart;
        /*When useVoronoi is on, LineWithFocusChart masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, LineWithFocusChart masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): LineWithFocusChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): LineWithFocusChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): LineWithFocusChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): LineWithFocusChart;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): LineWithFocusChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be LineWithFocusChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be LineWithFocusChart value.*/
        duration(value: number): LineWithFocusChart;
        focusHeight(): number;
        focusHeight(value: number): LineWithFocusChart;
        focusMargin(): Margin;
        focusMargin(value: Margin): LineWithFocusChart;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). LineWithFocusChart ensures the numbers are in the X domain but doesn't override the whole domain. LineWithFocusChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). LineWithFocusChart ensures the numbers are in the X domain but doesn't override the whole domain. LineWithFocusChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): LineWithFocusChart;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). LineWithFocusChart ensures the numbers are in the X domain but doesn't override the whole domain. LineWithFocusChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). LineWithFocusChart ensures the numbers are in the X domain but doesn't override the whole domain. LineWithFocusChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): LineWithFocusChart;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). LineWithFocusChart ensures the numbers are in the X domain but doesn't override the whole domain. LineWithFocusChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). LineWithFocusChart ensures the numbers are in the X domain but doesn't override the whole domain. LineWithFocusChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): LineWithFocusChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): LineWithFocusChart;
        /**/
        highlightPoint(): (d: any) => boolean;
        /**/
        highlightPoint(func: (d: any) => boolean): LineWithFocusChart;
        id(): any;
id(value: number|string): LineWithFocusChart;
        /*A master flag for turning chart interaction on and off. LineWithFocusChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. LineWithFocusChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): LineWithFocusChart;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): LineWithFocusChart;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): LineWithFocusChart;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): LineWithFocusChart;
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): LineWithFocusChart;
        noData(): string;
        noData(value: string): LineWithFocusChart;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): LineWithFocusChart;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): LineWithFocusChart;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): LineWithFocusChart;
        /* Defines the whole point scale's domain. Using LineWithFocusChart will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using LineWithFocusChart will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): LineWithFocusChart;
        /* Override the point scale's range. Using LineWithFocusChart will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using LineWithFocusChart will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): LineWithFocusChart;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): LineWithFocusChart;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): LineWithFocusChart;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): LineWithFocusChart;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): LineWithFocusChart;
        /*Displays the voronoi areas on the chart. LineWithFocusChart is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. LineWithFocusChart is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): LineWithFocusChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): LineWithFocusChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): LineWithFocusChart;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning LineWithFocusChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning LineWithFocusChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): LineWithFocusChart;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting LineWithFocusChart to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting LineWithFocusChart to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): LineWithFocusChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): LineWithFocusChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart LineWithFocusChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart LineWithFocusChart returns the key for the slice.*/
        x(func: (d: any) => any): LineWithFocusChart;
        /* Defines the whole X scale's domain. Using LineWithFocusChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using LineWithFocusChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): LineWithFocusChart;
        /* Override the X scale's range. Using LineWithFocusChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using LineWithFocusChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): LineWithFocusChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): LineWithFocusChart;
        xTickFormat(): (d: any) => string;
        xTickFormat(format: (t: any) => string): LineWithFocusChart;
        xTickFormat(format: string): LineWithFocusChart;
        xTickFormat(format: (d: any, i: any) => string): LineWithFocusChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart LineWithFocusChart returns the key for the slice.*/
        y(func: (d: any) => number): LineWithFocusChart;
        /* Defines the whole y scale's domain. Using LineWithFocusChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using LineWithFocusChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): LineWithFocusChart;
        /* Override the y scale's range. Using LineWithFocusChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using LineWithFocusChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): LineWithFocusChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): LineWithFocusChart;
        yTickFormat(): (d: any) => string;
        yTickFormat(format: (t: any) => string): LineWithFocusChart;
        yTickFormat(format: string): LineWithFocusChart;
        yTickFormat(format: (d: any, i: any) => string): LineWithFocusChart;
    }

    interface MultiBarChart extends Chart {
        multibar: MultiBar;
        legend: Legend;
        controls: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        /*MultiBarChart option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(value: string[]): MultiBarChart;
        /*MultiBarChart option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(func: (d: any, i: number) => string): MultiBarChart;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): MultiBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): MultiBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): MultiBarChart;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(): any;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(value: any): MultiBarChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): MultiBarChart;
        /**/
        disabled(): boolean[];
        /**/
        disabled(value: boolean[]): MultiBarChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be MultiBarChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be MultiBarChart value.*/
        duration(value: number): MultiBarChart;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). MultiBarChart ensures the numbers are in the Y domain but doesn't override the whole domain. MultiBarChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). MultiBarChart ensures the numbers are in the Y domain but doesn't override the whole domain. MultiBarChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): MultiBarChart;
        /*The padding between bar groups, MultiBarChart is passed as the padding attribute of rangeBands*/
        groupSpacing(): number;
        /*The padding between bar groups, MultiBarChart is passed as the padding attribute of rangeBands*/
        groupSpacing(value: number): MultiBarChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): MultiBarChart;
        /*.*/
        hideable(): boolean;
        /**/
        hideable(value: boolean): MultiBarChart;
        id(): any;
id(value: number|string): MultiBarChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): MultiBarChart;
        noData(): string;
        noData(value: string): MultiBarChart;
        reduceXTicks(): boolean;
        reduceXTicks(value: boolean): MultiBarChart;
        /*When only one Y axis is used, MultiBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, MultiBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): MultiBarChart;
        /*Rotates the X axis labels by the specified degree.*/
        rotateLabels(): number;
        /*Rotates the X axis labels by the specified degree.*/
        rotateLabels(value: number): MultiBarChart;
        /*Whether to show extra controls or not. Extra controls include things like making mulitBar charts stacked or side by side.*/
        showControls(): boolean;
        /*Whether to show extra controls or not. Extra controls include things like making mulitBar charts stacked or side by side.*/
        showControls(value: boolean): MultiBarChart;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): MultiBarChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): MultiBarChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): MultiBarChart;
        /*.*/
        stacked(): boolean;
        /**/
        stacked(value: boolean): MultiBarChart;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'silhouette'): MultiBarChart;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'wiggle'): MultiBarChart;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'expand'): MultiBarChart;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'zero'): MultiBarChart;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: string): MultiBarChart;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: (data: Array<[number, number]>) => number[]): MultiBarChart;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(): boolean;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(value: boolean): MultiBarChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): MultiBarChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): MultiBarChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): MultiBarChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiBarChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiBarChart returns the key for the slice.*/
        x(func: (d: any) => any): MultiBarChart;
        /* Defines the whole X scale's domain. Using MultiBarChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using MultiBarChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): MultiBarChart;
        /* Override the X scale's range. Using MultiBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using MultiBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): MultiBarChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): MultiBarChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart MultiBarChart returns the key for the slice.*/
        y(func: (d: any) => number): MultiBarChart;
        /* Defines the whole y scale's domain. Using MultiBarChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using MultiBarChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): MultiBarChart;
        /* Override the y scale's range. Using MultiBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using MultiBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): MultiBarChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): MultiBarChart;

    }

    interface MultiBarHorizontalChart extends Chart {
        multibar: MultiBar;
        legend: Legend;
        controls: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        /*MultiBarHorizontalChart option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(value: string[]): MultiBarHorizontalChart;
        /*MultiBarHorizontalChart option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(func: (d: any, i: number) => string): MultiBarHorizontalChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): MultiBarHorizontalChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): MultiBarHorizontalChart;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(): any;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(value: any): MultiBarHorizontalChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): MultiBarHorizontalChart;
        /**/
        disabled(): boolean[];
        /**/
        disabled(value: boolean[]): MultiBarHorizontalChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be MultiBarHorizontalChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be MultiBarHorizontalChart value.*/
        duration(value: number): MultiBarHorizontalChart;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). MultiBarHorizontalChart ensures the numbers are in the Y domain but doesn't override the whole domain. MultiBarHorizontalChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). MultiBarHorizontalChart ensures the numbers are in the Y domain but doesn't override the whole domain. MultiBarHorizontalChart option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): MultiBarHorizontalChart;
        /*The padding between bar groups, MultiBarHorizontalChart is passed as the padding attribute of rangeBands*/
        groupSpacing(): number;
        /*The padding between bar groups, MultiBarHorizontalChart is passed as the padding attribute of rangeBands*/
        groupSpacing(value: number): MultiBarHorizontalChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): MultiBarHorizontalChart;
        id(): any;
id(value: number|string): MultiBarHorizontalChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): MultiBarHorizontalChart;
        noData(): string;
        noData(value: string): MultiBarHorizontalChart;
        showControls(): boolean;
        /*Whether to show extra controls or not. Extra controls include things like making mulitBar charts stacked or side by side.*/
        showControls(value: boolean): MultiBarHorizontalChart;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): MultiBarHorizontalChart;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(): boolean;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(value: boolean): MultiBarHorizontalChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): MultiBarHorizontalChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): MultiBarHorizontalChart;
        /*.*/
        stacked(): boolean;
        /**/
        stacked(value: boolean): MultiBarHorizontalChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): MultiBarHorizontalChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): MultiBarHorizontalChart;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): MultiBarHorizontalChart;
        /*.*/
        valuePadding(): number;
        /**/
        valuePadding(value: number): MultiBarHorizontalChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): MultiBarHorizontalChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiBarHorizontalChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiBarHorizontalChart returns the key for the slice.*/
        x(func: (d: any) => any): MultiBarHorizontalChart;
        /* Defines the whole X scale's domain. Using MultiBarHorizontalChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using MultiBarHorizontalChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): MultiBarHorizontalChart;
        /* Override the X scale's range. Using MultiBarHorizontalChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using MultiBarHorizontalChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): MultiBarHorizontalChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): MultiBarHorizontalChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart MultiBarHorizontalChart returns the key for the slice.*/
        y(func: (d: any) => number): MultiBarHorizontalChart;
        /* Defines the whole y scale's domain. Using MultiBarHorizontalChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using MultiBarHorizontalChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): MultiBarHorizontalChart;
        /**/
        yErr(): (d: any, i: number) => number | number[];
        /**/
        yErr(func: (d: any, i: number) => number | number[]): MultiBarHorizontalChart;
        /* Override the y scale's range. Using MultiBarHorizontalChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using MultiBarHorizontalChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): MultiBarHorizontalChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): MultiBarHorizontalChart;

    }

    interface MultiChart extends Chart {
        lines1: Line;
        lines2: Line;
        bars1: MultiBar;
        bars2: MultiBar;
        scatters1: Scatter;
        scatters2: Scatter;
        stack1: StackedArea;
        stack2: StackedArea;
        xAxis: Nvd3Axis;
        yAxis1: Nvd3Axis;
        yAxis2: Nvd3Axis;
        tooltip: Tooltip;

        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): MultiChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): MultiChart;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): MultiChart;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): MultiChart;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): MultiChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): MultiChart;
        noData(): string;
        noData(value: string): MultiChart;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): MultiChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): MultiChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): MultiChart;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting MultiChart to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting MultiChart to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): MultiChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): MultiChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart MultiChart returns the key for the slice.*/
        x(func: (d: any) => any): MultiChart;
        /* Defines the whole X scale's domain. Using MultiChart will disable calculating the domain based on the data.*/
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart MultiChart returns the key for the slice.*/
        y(func: (d: any) => number): MultiChart;
        /* */
        yDomain1(): number[];
        /* */
        yDomain1(value: number[]): MultiChart;
        /* */
        yDomain2(): number[];
        /* */
        yDomain2(value: number[]): MultiChart;
    }

    interface OhlcBarChart extends Chart {
        bars: OhlcBar;
        legend: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): OhlcBarChart;
        close(): (d: any) => number;
        close(func: (d: any) => number): OhlcBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): OhlcBarChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): OhlcBarChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): OhlcBarChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be OhlcBarChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be OhlcBarChart value.*/
        duration(value: number): OhlcBarChart;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). OhlcBarChart ensures the numbers are in the X domain but doesn't override the whole domain. OhlcBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). OhlcBarChart ensures the numbers are in the X domain but doesn't override the whole domain. OhlcBarChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): OhlcBarChart;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). OhlcBarChart ensures the numbers are in the X domain but doesn't override the whole domain. OhlcBarChart option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). OhlcBarChart ensures the numbers are in the X domain but doesn't override the whole domain. OhlcBarChart option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(value: number[]): OhlcBarChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): OhlcBarChart;
        high(): (d: any) => number;
        high(func: (d: any) => number): OhlcBarChart;
        id(): any;
        id(value: number|string): OhlcBarChart;
        /*A master flag for turning chart interaction on and off. OhlcBarChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. OhlcBarChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): OhlcBarChart;
        low(): (d: any) => number;
        low(func: (d: any) => number): OhlcBarChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): OhlcBarChart;
        noData(): string;
        noData(value: string): OhlcBarChart;
        open(): (d: any) => number;
        open(func: (d: any) => number): OhlcBarChart;
        padData(): boolean;
        padData(value: boolean): OhlcBarChart;
        /*When only one Y axis is used, OhlcBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, OhlcBarChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): OhlcBarChart;
        /*Whether to display the legend or not*/
        showLegend(): boolean;
        /*Whether to display the legend or not*/
        showLegend(value: boolean): OhlcBarChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): OhlcBarChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): OhlcBarChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): OhlcBarChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): OhlcBarChart;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning OhlcBarChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning OhlcBarChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): OhlcBarChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): OhlcBarChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart OhlcBarChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart OhlcBarChart returns the key for the slice.*/
        x(func: (d: any) => any): OhlcBarChart;
        /* Defines the whole X scale's domain. Using OhlcBarChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using OhlcBarChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): OhlcBarChart;
        /* Override the X scale's range. Using OhlcBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using OhlcBarChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): OhlcBarChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): OhlcBarChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart OhlcBarChart returns the key for the slice.*/
        y(func: (d: any) => number): OhlcBarChart;
        /* Defines the whole y scale's domain. Using OhlcBarChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using OhlcBarChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): OhlcBarChart;
        /* Override the y scale's range. Using OhlcBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using OhlcBarChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): OhlcBarChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): OhlcBarChart;
    }

    interface ParallelCoordinatesChart extends Chart {
        parallelCoordinates: ParallelCoordinates;
        legend: Legend;
        tooltip: Tooltip;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): ParallelCoordinatesChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): ParallelCoordinatesChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): ParallelCoordinatesChart;
        dimensionData(): any
        dimensionData(d:any) : ParallelCoordinatesChart
        /*D3 format for each x axis*/
        dimensionFormats(): string[];
        /*D3 format for each x axis*/
        dimensionFormats(value: string[]): ParallelCoordinatesChart;
        /*Name of each dimension, used for each axis.*/
        dimensionNames(): string[];
        /*Name of each dimension, used for each axis.*/
        dimensionNames(value: string[]): ParallelCoordinatesChart;
        /*Deprecated. Use dimensionsNames instead. */
        dimensions(): any;
        /*Deprecated. Use dimensionsNames instead. .*/
        dimensions(value: any): ParallelCoordinatesChart;
        /**/
        displayBrush(): boolean;
        /**/
        displayBrush(value: boolean): ParallelCoordinatesChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): ParallelCoordinatesChart;
        /*Specifies each line tension. Values between 0 and 1.*/
        lineTension(): number;
        /*Specifies each line tension. Values between 0 and 1.*/
        lineTension(value: number): ParallelCoordinatesChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): ParallelCoordinatesChart;
        /**/
        noData(): string;
        /**/
        noData(value: string): ParallelCoordinatesChart;
        /**/
        showLegend(): boolean;
        /**/
        showLegend(value: boolean): ParallelCoordinatesChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): ParallelCoordinatesChart;
    }

    interface PieChart extends Chart {
        legend: Legend;
        pie: Pie;
        tooltip: Tooltip;

        /*Specifies each slice size, by an inner and a outer radius. Values between 0 and 1*/
        arcsRadius(): ArcsRadius[];
        /*Specifies each slice size, by an inner and a outer radius. Values between 0 and 1*/
        arcsRadius(value: ArcsRadius[]): PieChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): PieChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): PieChart;
        /*D3 3.4+, For donut charts only, the corner radius of the slices. Typically used with padAngle.*/
        cornerRadius(): number;
        /*D3 3.4+, For donut charts only, the corner radius of the slices. Typically used with padAngle.*/
        cornerRadius(value: number): PieChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): PieChart;
        /*Whether to make a pie graph a donut graph or not.*/
        donut(): boolean;
        /*Whether to make a pie graph a donut graph or not.*/
        donut(value: boolean): PieChart;
        /**/
        donutLabelsOutside(): boolean;
        /**/
        donutLabelsOutside(value: boolean): PieChart;
        /*Percent of pie radius to cut out of the middle to make the donut. It is multiplied by the outer radius to calculate the inner radius, thus it should be between 0 and 1.*/
        donutRatio(): number;
        /*Percent of pie radius to cut out of the middle to make the donut. It is multiplied by the outer radius to calculate the inner radius, thus it should be between 0 and 1.*/
        donutRatio(value: number): PieChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be PieChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be PieChart value.*/
        duration(value: number): PieChart;
        /*Function used to manage the ending angle of the pie/donut chart*/
        endAngle(): (d: any) => number;
        /*Function used to manage the ending angle of the pie/donut chart*/
        endAngle(func: (d: any) => number): PieChart;
        /*For pie/donut charts, whether to increase slice radius on hover or not*/
        growOnHover(): boolean;
        /*For pie/donut charts, whether to increase slice radius on hover or not*/
        growOnHover(value: boolean): PieChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): PieChart;
        id(): any;
id(value: number|string): PieChart;
        /**/
        labelFormat(): string;
        /**/
        labelFormat(value: string): PieChart;
        /**/
        labelFormat(format: (d: any) => string): PieChart;
        /**/
        labelSunbeamLayout(): boolean;
        /**/
        labelSunbeamLayout(value: boolean): PieChart;
        /*Pie/donut charts: The slice threshold size to not display the label because it woudl be too small of a space*/
        labelThreshold(): number;
        /*Pie/donut charts: The slice threshold size to not display the label because it woudl be too small of a space*/
        labelThreshold(value: number): PieChart;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(): string;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'key'): PieChart;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'value'): PieChart;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'percent'): PieChart;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: string): PieChart;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(func: (d: any, i: number, values: any) => string): PieChart;
        /*Whether pie/donut chart labels should be outside the slices instead of inside them*/
        labelsOutside(): boolean;
        /*Whether pie/donut chart labels should be outside the slices instead of inside them*/
        labelsOutside(value: boolean): PieChart;
        /*Position of the legend (top or right). */
        legendPosition(): string;
        /*Position of the legend (top or right). */
        legendPosition(value: 'top'): PieChart;
        /*Position of the legend (top or right). */
        legendPosition(value: 'right'): PieChart;
        /*Position of the legend (top or right). */
        legendPosition(value: string): PieChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): PieChart;
        /*Message to display if no data is provided*/
        noData(): string;
        /*Message to display if no data is provided*/
        noData(value : string): PieChart;
        /*D3 3.4+, For donut charts only, the percent of the chart that should be spacing between slices.*/
        padAngle(): number;
        /*D3 3.4+, For donut charts only, the percent of the chart that should be spacing between slices.*/
        padAngle(value: number): PieChart;
        /**/
        pieLabelsOutside(): boolean;
        /**/
        pieLabelsOutside(value: boolean): PieChart;
        /*Show pie/donut chart labels for each slice*/
        showLabels(): boolean;
        /*Show pie/donut chart labels for each slice*/
        showLabels(value: boolean): PieChart;
        /*Whether to display the legend or not*/
        showLegend(): boolean;
        /*Whether to display the legend or not*/
        showLegend(value: boolean): PieChart;
        /*Function used to manage the starting  angle of the pie/donut chart*/
        startAngle(): (d: any) => number;
        /*Function used to manage the starting  angle of the pie/donut chart*/
        startAngle(func: (d: any) => number): PieChart;
        /*Text to include within the middle of a donut chart*/
        title(): string;
        /*Text to include within the middle of a donut chart*/
        title(value: string): PieChart;
        /*Vertical offset for the donut chart title*/
        titleOffset(): number;
        /*Vertical offset for the donut chart title*/
        titleOffset(value: number): PieChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): PieChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): PieChart;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): PieChart;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(format: (d: any) => string): PieChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): PieChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart PieChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart PieChart returns the key for the slice.*/
        x(func: (d: any) => any): PieChart;
        /*Proxy function to return the Y value so adjustments can be made if needed.For pie/ donut chart PieChart returns the value for the slice.*/
        y(): (d: any) => number;
        /*Proxy function to return the Y value so adjustments can be made if needed. For pie/donut chart PieChart returns the value for the slice.*/
        y(func: (d: any) => number): PieChart;
    }

    interface ScatterChart extends Chart {
        scatter: Scatter;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        legend: Legend;
        tooltip: Tooltip;
        distX: Distribution;
        distY: Distribution;

        clearHighlights(): ScatterChart;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): ScatterChart;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with ScatterChart option. Essentially ScatterChart lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): ScatterChart;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with ScatterChart option. Essentially ScatterChart lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): ScatterChart;
        /*When useVoronoi is on, ScatterChart masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, ScatterChart masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): ScatterChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): ScatterChart;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): ScatterChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): ScatterChart;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be ScatterChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be ScatterChart value.*/
        duration(value: number): ScatterChart;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). ScatterChart ensures the numbers are in the X domain but doesn't override the whole domain. ScatterChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). ScatterChart ensures the numbers are in the X domain but doesn't override the whole domain. ScatterChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): ScatterChart;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). ScatterChart ensures the numbers are in the X domain but doesn't override the whole domain. ScatterChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). ScatterChart ensures the numbers are in the X domain but doesn't override the whole domain. ScatterChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): ScatterChart;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). ScatterChart ensures the numbers are in the X domain but doesn't override the whole domain. ScatterChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). ScatterChart ensures the numbers are in the X domain but doesn't override the whole domain. ScatterChart option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): ScatterChart;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): ScatterChart;
        /**/
        highlightPoint(): (d: any) => boolean;
        /**/
        highlightPoint(func: (d: any) => boolean): ScatterChart;
        id(): any;
id(value: number|string): ScatterChart;
        /*A master flag for turning chart interaction on and off. ScatterChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. ScatterChart overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): ScatterChart;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): ScatterChart;
        noData(): string;
        noData(value: string): ScatterChart;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): ScatterChart;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): ScatterChart;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): ScatterChart;
        /* Defines the whole point scale's domain. Using ScatterChart will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using ScatterChart will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): ScatterChart;
        /* Override the point scale's range. Using ScatterChart will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using ScatterChart will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): ScatterChart;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): ScatterChart;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): ScatterChart;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): ScatterChart;
        /*When only one Y axis is used, ScatterChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, ScatterChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): ScatterChart;
        /**/
        showDistX(): boolean;
        /**/
        showDistX(value: boolean): ScatterChart;
        /**/
        showDistY(): boolean;
        /**/
        showDistY(value: boolean): ScatterChart;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): ScatterChart;
        /*Displays the voronoi areas on the chart. ScatterChart is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. ScatterChart is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): ScatterChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): ScatterChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): ScatterChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): ScatterChart;
        /**/
        tooltipXContent(): (d: any) => string;
        /**/
        tooltipXContent(func: (d: any) => string): ScatterChart;
        /**/
        tooltipYContent(): (d: any) => string;
        /**/
        tooltipYContent(func: (d: any) => string): ScatterChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): ScatterChart;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting ScatterChart to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting ScatterChart to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): ScatterChart;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): ScatterChart;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart ScatterChart returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart ScatterChart returns the key for the slice.*/
        x(func: (d: any) => any): ScatterChart;
        /* Defines the whole X scale's domain. Using ScatterChart will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using ScatterChart will disable calculating the domain based on the data.*/
        xDomain(value: number[]): ScatterChart;
        /* Override the X scale's range. Using ScatterChart will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using ScatterChart will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): ScatterChart;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): ScatterChart;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart ScatterChart returns the key for the slice.*/
        y(func: (d: any) => number): ScatterChart;
        /* Defines the whole y scale's domain. Using ScatterChart will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using ScatterChart will disable calculating the domain based on the data.*/
        yDomain(value: number[]): ScatterChart;
        /* Override the y scale's range. Using ScatterChart will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using ScatterChart will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): ScatterChart;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): ScatterChart;

    }

    interface StackedAreaChart extends StackedArea, Chart {
        stacked: StackedArea;
        legend: Legend;
        controls: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        controlLabels(): any;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(value: any): StackedAreaChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): StackedAreaChart;
        /*Message to display if no data is provided*/
        noData(): string;
        /*Message to display if no data is provided*/
        noData(value: string): StackedAreaChart;
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, StackedAreaChart puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): StackedAreaChart;
        showLegend(): boolean;
        /*Whether to display the legend or not*/
        showLegend(value: boolean): StackedAreaChart;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): StackedAreaChart;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): StackedAreaChart;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): StackedAreaChart;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): StackedAreaChart;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning StackedAreaChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning StackedAreaChart on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): StackedAreaChart;
    }

    interface SunburstChart extends Sunburst, Chart {
        sunburst: Sunburst;
        tooltip: Tooltip;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be SunburstChart value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be SunburstChart value.*/
        duration(value: number): SunburstChart;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): SunburstChart;
        /*Message to display if no data is provided*/
        noData(): string;
        /*Message to display if no data is provided*/
        noData(value: string): SunburstChart;
    }

//#endregion

    interface Models{
        boxPlotChart(): BoxPlotChart;
        bullet(): Bullet;
        bulletChart(): BulletChart;
        candlestickBar(): CandlestickBar;
        candlestickBarChart(): CandlestickBarChart;
        cumulativeLineChart(): CumulativeLineChart;
        discreteBar(): DiscreteBar;
        discreteBarChart(): DiscreteBarChart;
        distribution(): Distribution;
		historicalBar(): HistoricalBar;
        historicalBarChart(bar_model?: HistoricalBar): HistoricalBarChart;
        ohlcBar(): OhlcBar;
        ohlcBarChart(): OhlcBarChart;
        legend(): Legend;
        line(): Line;
        lineChart(): LineChart;
        linePlusBarChart(): LinePlusBarChart;
        lineWithFocusChart(): LineWithFocusChart;
        multiBarChart(): MultiBarChart;
        multiBarHorizontalChart(): MultiBarHorizontalChart;
        multiChart(): MultiChart;
        parallelCoordinates(): ParallelCoordinates;
        parallelCoordinatesChart(): ParallelCoordinatesChart;
        pie(): Pie;
        pieChart(): PieChart;
        scatter(): Scatter;
        scatterChart(): ScatterChart;
        sparkline(): SparkLine;
        sparklinePlus(): SparkLinePlus;
        stackedArea(): StackedArea;
        stackedAreaChart(): StackedAreaChart;
        sunburst(): Sunburst;
        sunburstChart(): SunburstChart;
		tooltip(): Tooltip;
	}

    interface Nvd3Static{
        /*set to false in production*/
        dev: boolean
        /*stores all the ready to use charts*/
        charts: any
        models: Models;
        tooltip: Nvd3TooltipStatic;
        utils: Utils;

        /*stores some statistics and potential error messages*/
        logs: any;

        addGraph<TChart extends Nvd3Element>(factory: ChartFactory<TChart>): void;
        addGraph<TChart extends Nvd3Element>(generate: () => TChart, callBack?: (chart: TChart) => void): void;


        log(topic: string, value?: string): string //returns last argument
        log(arg: any[]): any //returns last argument
	}
}
declare var nv : nv.Nvd3Static;
