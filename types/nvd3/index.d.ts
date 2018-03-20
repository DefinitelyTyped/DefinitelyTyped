// Type definitions for nvd3 1.8.1
// Project: https://github.com/novus/nvd3
// Definitions by: Peter Mitchell <https://github.com/PjMitchell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as d3 from "d3";

export = nv;
export as namespace nv;

declare var nv: nv.Nvd3Static;

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
        show(leftTop: [number, number], content: string, gravity?: string): void; //todo sort out use on nv.tooltip.
        cleanup(): void; //todo sort out use on nv.tooltip.
    }

    interface Nvd3Element {
        dispatch: d3.Dispatch;
        options(options: any): this;
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
        align(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        expanded(): boolean;
        expanded(value: boolean): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        key(): any;
        key(value: any): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /*Specifies how much spacing there is between legend items.*/
        padding(): number;
        /*Specifies how much spacing there is between legend items.*/
        padding(value: number): this;
        radioButtonMode(): boolean;
        //If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at
        radioButtonMode(value: boolean): this;
        rightAlign(): boolean;
        rightAlign(value: boolean): this;
        //If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
        updateState(): boolean;
        //If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
        updateState(value: boolean): this;
        //Options are "classic" and "furious"
        vers(): string;
        //Options are "classic" and "furious"
        vers(value: string): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
    }

    interface Focus extends Nvd3Element {
        color(value: string[]): this;
        color(func: (d: any, i: number) => string): this;
        width(): number;
        width(value: number): this;
        height(): number;
        height(value: number): this;
        margin(): Margin;
        margin(value: Margin): this;
        x(): (d: any) => any;
        x(func: (d: any) => any): this;
        y(): (d: any) => number;
        y(func: (d: any) => number): this;
        showXAxis(): boolean;
        showXAxis(value: boolean): this;
        showYAxis(): boolean;
        showYAxis(value: boolean): this;
        brushExtent(): [number, number] | [[number, number], [number, number]];
        brushExtent(value: [number, number] | [[number, number], [number, number]]) : this;
        duration(): number;
        duration(value: number): this;
        xTickFormat(): (d: any) => string;
        xTickFormat(format: (t: any) => string): this;
        xTickFormat(format: string): this;
        xTickFormat(format: (d: any, i: any) => string): this;
        yTickFormat(): (d: any) => string;
        yTickFormat(format: (t: any) => string): this;
        yTickFormat(format: string): this;
        yTickFormat(format: (d: any, i: any) => string): this;
        interpolate(): string;
        interpolate(value: string): this;
        rightAlignYAxis(): boolean;
        rightAlignYAxis(value: boolean): this;
        syncBrushing(): boolean;
        syncBrushing(value: boolean): this;
    }


	interface Nvd3Axis extends d3.svg.Axis {
        axisLabel(): string;
        axisLabel(value: string): this;
        axisLabelDistance(): number;
        axisLabelDistance(value: number): this;
        domain(): number[];
        domain(domain: number[]): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        orient(): string;
        orient(orientation: string): this;
        range(): number[];
        range(range: number[]): this;
        rangeBand(): number;
        rangeBands(interval: [number, number], padding?: number, outerPadding?: number): this;
        /*Rotates the X axis labels by the specified degree.*/
        rotateLabels(): number;
        /*Rotates the X axis labels by the specified degree.*/
        rotateLabels(range: number): this;
        rotateYLabels(): number;
        rotateYLabels(range: number): this;
        scale(): any;
        scale(scale: any): this;
        showMaxMin(value: boolean): this;
        staggerLabels(): boolean;
        staggerLabels(value: boolean): this;
        tickFormat(): (d: any) => string;
        tickFormat(format: (t: any) => string): this;
        tickFormat(format: string): this;
        tickFormat(format: (d: any, i: any) => string): this;
        tickPadding(): number;
        tickPadding(padding: number): this;
        tickSize(): number;
        tickSize(size: number): this;
        tickSize(inner: number, outer: number): this;
        tickValues(): any[];
        tickValues(values: any[]): this;
        ticks(): any[];
        ticks(...args: any[]): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
	}

    interface BoxPlot extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
        id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        maxBoxWidth(): number;
        maxBoxWidth(value: number): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface Bullet extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        markers(): (d: any) => any //todo;
        markers(func: (d: any) => any): this //todo;
        measures(): (d: any) => any //todo;
        measures(func: (d: any) => any): this //todo;
        orient(): string;
        orient(orientation: string): this;
        ranges(): (d: any) => any //todo;
        ranges(func: (d: any) => any): this //todo;
        tickFormat(): (d: any) => string;
        tickFormat(format: (d: any) => string): this;
        tickFormat(format: string): this;
        tickFormat(format: (d: any, i: any) => string): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
    }

    interface CandlestickBar extends Nvd3Element {
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        close(): (d: any) => number;
        close(func: (d:any) => number): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        high(): (d: any) => number;
        high(func: (d: any) => number): this;
        id(): any;
id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        low(): (d: any) => number;
        low(func: (d: any) => number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        open(): (d: any) => number;
        open(func: (d: any) => number): this;
        padData(): boolean;
        padData(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface DiscreteBar extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        rectClass(): string;
        rectClass(value: string): this;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(): boolean;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(value: boolean): this;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface Distribution extends Nvd3Element {
        axis(): string;
        axis(value: 'x'): this;
        axis(value: 'y'): this;
        axis(value: string): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        domain(): number[];
        domain(value: number[]): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        getData(func: (d: any) => number): this;
        scale(): any;
        scale(value: any): this;
        size(): number;
        size(value: number): this;
        width(): number;
        width(value: number): this;


    }

    interface HistoricalBar extends Nvd3Element {
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /* List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceX(): number[];
        /* List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceX(value: number[]): this;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /*.*/
        padData(): boolean;
        /**/
        padData(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface Line extends Scatter {
        scatter: Scatter;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): this;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): this;
    }

    interface MultiBar extends Nvd3Element {
        /*this option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(value: string[]): this;
        /*this option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(func: (d: any, i: number) => string): this;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /**/
        disabled(): boolean[];
        /**/
        disabled(value: boolean[]): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): this;
        /*The padding between bar groups, this is passed as the padding attribute of rangeBands*/
        groupSpacing(): number;
        /*The padding between bar groups, this is passed as the padding attribute of rangeBands*/
        groupSpacing(value: number): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /*.*/
        hideable(): boolean;
        /**/
        hideable(value: boolean): this;
        id(): any;
id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /*.*/
        stacked(): boolean;
        /**/
        stacked(value: boolean): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'silhouette'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'wiggle'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'expand'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'zero'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: string): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: (data: Array<[number, number]>) => number[]): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface MultiBarHorizontal extends Nvd3Element {
        /*this option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(value: string[]): this;
        /*this option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(func: (d: any, i: number) => string): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /**/
        disabled(): boolean[];
        /**/
        disabled(value: boolean[]): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): this;
        /*The padding between bar groups, this is passed as the padding attribute of rangeBands*/
        groupSpacing(): number;
        /*The padding between bar groups, this is passed as the padding attribute of rangeBands*/
        groupSpacing(value: number): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(): boolean;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(value: boolean): this;
        /*.*/
        stacked(): boolean;
        /**/
        stacked(value: boolean): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'silhouette'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'wiggle'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'expand'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'zero'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: string): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: (data: Array<[number, number]>) => number[]): this;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): this;
        /*.*/
        valuePadding(): number;
        /**/
        valuePadding(value: number): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /**/
        yErr(): (d: any, i: number) => number|number[];
        /**/
        yErr(func: (d: any, i: number) => number | number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface OhlcBar extends Nvd3Element {
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        close(): (d: any) => number;
        close(func: (d: any) => number): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        high(): (d: any) => number;
        high(func: (d: any) => number): this;
        id(): any;
id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        low(): (d: any) => number;
        low(func: (d: any) => number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        open(): (d: any) => number;
        open(func: (d: any) => number): this;
        padData(): boolean;
        padData(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface ParallelCoordinates extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        dimensionData(): any
        dimensionData(d: any): this
        /*D3 format for each x axis*/
        dimensionFormats(): string[];
        /*D3 format for each x axis*/
        dimensionFormats(value: string[]): this;
        /*Name of each dimension, used for each axis.*/
        dimensionNames(): string[];
        /*Name of each dimension, used for each axis.*/
        dimensionNames(value: string[]): this;
        /*Deprecated. Use dimensionsNames instead. */
        dimensions(): any;
        /*Deprecated. Use dimensionsNames instead. .*/
        dimensions(value: any): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /*Specifies each line tension. Values between 0 and 1.*/
        lineTension(): number;
        /*Specifies each line tension. Values between 0 and 1.*/
        lineTension(value: number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
    }

    interface Pie extends Nvd3Element {
        /*Specifies each slice size, by an inner and a outer radius. Values between 0 and 1*/
        arcsRadius(): ArcsRadius[];
        /*Specifies each slice size, by an inner and a outer radius. Values between 0 and 1*/
        arcsRadius(value: ArcsRadius[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*D3 3.4+, For donut charts only, the corner radius of the slices. Typically used with padAngle.*/
        cornerRadius(): number;
        /*D3 3.4+, For donut charts only, the corner radius of the slices. Typically used with padAngle.*/
        cornerRadius(value: number): this;
        /*Whether to make a pie graph a donut graph or not.*/
        donut(): boolean;
        /*Whether to make a pie graph a donut graph or not.*/
        donut(value: boolean): this;
        /**/
        donutLabelsOutside(): boolean;
        /**/
        donutLabelsOutside(value: boolean): this;
        /*Percent of pie radius to cut out of the middle to make the donut. It is multiplied by the outer radius to calculate the inner radius, thus it should be between 0 and 1.*/
        donutRatio(): number;
        /*Percent of pie radius to cut out of the middle to make the donut. It is multiplied by the outer radius to calculate the inner radius, thus it should be between 0 and 1.*/
        donutRatio(value: number): this;
        /*Function used to manage the ending angle of the pie/donut chart*/
        endAngle(): (d: any) => number;
        /*Function used to manage the ending angle of the pie/donut chart*/
        endAngle(func: (d: any) => number): this;
        /*For pie/donut charts, whether to increase slice radius on hover or not*/
        growOnHover(): boolean;
        /*For pie/donut charts, whether to increase slice radius on hover or not*/
        growOnHover(value: boolean): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
id(value: number|string): this;
        /**/
        labelFormat(): string;
        /**/
        labelFormat(value: string): this;
        /**/
        labelFormat(format: (d: any) => string): this;
        /**/
        labelSunbeamLayout(): boolean;
        /**/
        labelSunbeamLayout(value: boolean): this;
        /*Pie/donut charts: The slice threshold size to not display the label because it woudl be too small of a space*/
        labelThreshold(): number;
        /*Pie/donut charts: The slice threshold size to not display the label because it woudl be too small of a space*/
        labelThreshold(value: number): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(): string;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'key'): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'value'): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'percent'): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: string): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(func: (d: any, i: number, values:any)=> string): this;
        /*Whether pie/donut chart labels should be outside the slices instead of inside them*/
        labelsOutside(): boolean;
        /*Whether pie/donut chart labels should be outside the slices instead of inside them*/
        labelsOutside(value: boolean): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /*D3 3.4+, For donut charts only, the percent of the chart that should be spacing between slices.*/
        padAngle(): number;
        /*D3 3.4+, For donut charts only, the percent of the chart that should be spacing between slices.*/
        padAngle(value: number): this;
        /**/
        pieLabelsOutside(): boolean;
        /**/
        pieLabelsOutside(value: boolean): this;
        /*Show pie/donut chart labels for each slice*/
        showLabels(): boolean;
        /*Show pie/donut chart labels for each slice*/
        showLabels(value: boolean): this;
        /*Function used to manage the starting  angle of the pie/donut chart*/
        startAngle(): (d: any) => number;
        /*Function used to manage the starting  angle of the pie/donut chart*/
        startAngle(func: (d: any) => number): this;
        /*Text to include within the middle of a donut chart*/
        title(): string;
        /*Text to include within the middle of a donut chart*/
        title(value: string): this;
        /*Vertical offset for the donut chart title*/
        titleOffset(): number;
        /*Vertical offset for the donut chart title*/
        titleOffset(value: number): this;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): this;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(format: (d: any) => string): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /*Proxy function to return the Y value so adjustments can be made if needed.For pie/ donut chart this returns the value for the slice.*/
        y(): (d: any) => number;
        /*Proxy function to return the Y value so adjustments can be made if needed. For pie/donut chart this returns the value for the slice.*/
        y(func: (d: any) => number): this;
        /**/
    }

    interface Scatter extends Nvd3Element {
        clearHighlights(): this;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): this;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
        id(value: number | string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): this;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): this;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): this;
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): this;
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): this;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): this;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): this;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;

    }

    interface SparkLine extends Nvd3Element {
        animate(): boolean;
        animate(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any, i?: number) => number;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any, i?: number) => number): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any, i?: number) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any, i?: number) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface SparkLinePlus extends SparkLine {
        sparkline: SparkLine;

        alignValue(): boolean;
        alignValue(value: boolean): this;
        /*Message to display if no data is provided*/
        noData(): string;
        /*Message to display if no data is provided*/
        noData(value: string): this;
        rightAlignValue(): boolean;
        rightAlignValue(value: boolean): this;
        /*Shows the last value in the sparkline to the right of the line.*/
        showLastValue(): boolean;
        /*Shows the last value in the sparkline to the right of the line.*/
        showLastValue(value: boolean): this;
        xTickFormat(format: (d: any) => string): this;
        xTickFormat(format: string): this;
        xTickFormat(format: (d: any, i: any) => string) : this;
        yTickFormat(format: (d: any) => string): this;
        yTickFormat(format: string): this;
        yTickFormat(format: (d: any, i: any) => string) :this;
    }

    interface StackedArea extends Scatter {
        scatter: Scatter;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): this;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: 'silhouette'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: 'wiggle'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: 'expand'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: 'zero'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: string): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        offset(offset: (data: Array<[number, number]>) => number[]): this;
        order(): string;
        order(value: string): this;
        style(offset: 'stack'): this;
        style(offset: 'stream'): this;
        style(offset: 'stream-center'): this;
        style(offset: 'expand'): this;
        style(offset: 'stack_percent'): this;
        style(offset: string): this;
        width(): number;
        width(value: number): this;
        height(): number;
        height(value: number): this;
    }

    interface Sunburst extends Nvd3Element {
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
        id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /*For sunburst only: specifies the mode of drawing the sunburst segments. Can be 'size' or 'count'. 'size' draws the segments according to the 'size' attribute of the leaf nodes, 'count' draws according to the amount of siblings a node has.*/
        mode(): string;
        /*For sunburst only: specifies the mode of drawing the sunburst segments. Can be 'size' or 'count'. 'size' draws the segments according to the 'size' attribute of the leaf nodes, 'count' draws according to the amount of siblings a node has.*/
        mode(value: 'size'): this;
        /*For sunburst only: specifies the mode of drawing the sunburst segments. Can be 'size' or 'count'. 'size' draws the segments according to the 'size' attribute of the leaf nodes, 'count' draws according to the amount of siblings a node has.*/
        mode(value: 'count'): this;
        /*For sunburst only: specifies the mode of drawing the sunburst segments. Can be 'size' or 'count'. 'size' draws the segments according to the 'size' attribute of the leaf nodes, 'count' draws according to the amount of siblings a node has.*/
        mode(value: string): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
    }

    interface Tooltip {

        /*For tooltip: Parent dom element of the SVG that holds the chart. This will make the tooltip dom be created inside this container instead of on the document body.*/
        chartContainer(el: HTMLElement): this
        /*For tooltip: Parent dom element of the SVG that holds the chart. This will make the tooltip dom be created inside this container instead of on the document body.*/
        chartContainer(): HTMLElement
        /*Attaches additional CSS classes to the tooltip DIV that is created.*/
        classes(el: string): this
        /*Attaches additional CSS classes to the tooltip DIV that is created.*/
        classes(): string
        /*Function that generates the tooltip content html.*/
        contentGenerator(): (d: any) => string;
        /*Function that generates the tooltip content html.*/
        contentGenerator(func: (d: any) => string): this;
        data(): any;
        data(value: any): this;
        distance(): number;
        distance(value: number): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*For tooltip: completely enables or disabled the tooltip*/
        enabled(): boolean;
        /*For tooltip: completely enables or disabled the tooltip*/
        enabled(value: boolean): this;
        /*For tooltip: If not null, this fixes the top position of the tooltip.*/
        fixedTop(): number;
        /*For tooltip: If not null, this fixes the top position of the tooltip.*/
        fixedTop(value: number): this;
        /*Can be 'n','s','e','w'. Determines how tooltip is positioned*/
        gravity(): string;
        /*Can be 'n','s','e','w'. Determines how tooltip is positioned*/
        gravity(value: string): this;
        /*For tooltip: show the x axis value in the tooltip or not (not valid for pie charts for instance)*/
        headerEnabled(): boolean;
        /*For tooltip: show the x axis value in the tooltip or not (not valid for pie charts for instance)*/
        headerEnabled(value: boolean): this;
        /*For tooltip: formats the x axis value in the tooltip*/
        headerFormatter(func: (d: any) => string): this;
        /*For tooltip: formats the x axis value in the tooltip*/
        headerFormatter(): (d: any) => string;
        /*For tooltip: show or hide the tooltip by setting this to true or false. Tooltips used to be created and destroyed, but now we re-used the element and set opacity to 1 or 0.*/
        hidden(): boolean;
        /*For tooltip: show or hide the tooltip by setting this to true or false. Tooltips used to be created and destroyed, but now we re-used the element and set opacity to 1 or 0.*/
        hidden(value: boolean): this;
        /*Delay in ms before the tooltip hides itself after a mouseout event. A new mouseover event cancels the hide if within this timeout period.*/
        hideDelay(): number;
        /*Delay in ms before the tooltip hides itself after a mouseout event. A new mouseover event cancels the hide if within this timeout period.*/
        hideDelay(value: number): this;
        /**/
        id(): any;
        keyFormatter(): (d: any, i: number) => string;
        keyFormatter(func: (d: any, i: number) => string): this;
        offset(): Offset;
        offset(value: Offset): this;
        /*sets the top/left positioning for the tooltip. Should be given an object with 'left' and/or 'top' attributes. You can override just one, just like the 'margin' option on charts*/
        position(): Offset;
        /*sets the top/left positioning for the tooltip. Should be given an object with 'left' and/or 'top' attributes. You can override just one, just like the 'margin' option on charts*/
        position(value: Offset): this;
        /*Tolerance allowed before tooltip is moved from its current position (creates 'snapping' effect)*/
        snapDistance(): number;
        /*Tolerance allowed before tooltip is moved from its current position (creates 'snapping' effect)*/
        snapDistance(value: number): this;
        /*returns the dom element of the tooltip.*/
        tooltipElem(): HTMLElement;
        /*formats the y axis value(s) in the tooltip*/
        valueFormatter(): (d: any) => string;
        /*formats the y axis value(s) in the tooltip*/
        valueFormatter(func: (d: any) => string): this;
    }

    interface SankeyNodeStyleOptions {
        title?: any;
        fillColor?: any;
        strokeColor?: any;
    }

//#endregion

//#region Charts
    interface BoxPlotChart extends Chart {
        boxplot: BoxPlot;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
        id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        maxBoxWidth(): number;
        maxBoxWidth(value: number): this;
        noData(): string;
        noData(value: string): this;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(): boolean;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;

	}

    interface BulletChart extends Chart{
        bullet: Bullet;
        tooltip: Tooltip;

        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        markers(): (d: any) => any //todo;
        markers(func: (d: any) => any): this //todo;
        measures(): (d: any) => any //todo;
        measures(func: (d: any) => any): this //todo;
        noData(): string;
        noData(value: string): this;
        orient(): string;
        orient(orientation: string): this;
        ranges(): (d: any) => any //todo;
        ranges(func: (d: any) => any): this //todo;
        tickFormat(): (d: any) => string;
        tickFormat(format: (d: any) => string): this;
        tickFormat(format: string): this;
        tickFormat(format: (d: any, i: any) => string): this;
        ticks(): any[];
        ticks(...args: any[]): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
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
        clipEdge(value: boolean): this;
        close(): (d: any) => number;
        close(func: (d: any) => number): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        high(): (d: any) => number;
        high(func: (d: any) => number): this;
        id(): any;
        id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        low(): (d: any) => number;
        low(func: (d: any) => number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        open(): (d: any) => number;
        open(func: (d: any) => number): this;
        padData(): boolean;
        padData(value: boolean): this;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        /*Whether to display the legend or not*/
        showLegend(): boolean;
        /*Whether to display the legend or not*/
        showLegend(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface CumulativeLineChart extends LineChart {
        controls: Legend;
        average(func: (d: any) => number): this;
        average(): (d: any) => number;
        noErrorCheck(value: boolean): this;
        noErrorCheck(): boolean;
    }

    interface DiscreteBarChart extends Chart {
        discretebar: DiscreteBar;
        legend: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
        id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        rectClass(): string;
        rectClass(value: string): this;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(): boolean;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(): boolean;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
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
        clipEdge(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /* List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceX(): number[];
        /* List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceX(value: number[]): this;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): this;
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface LineChart extends Chart {
        lines: Line;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        legend: Legend;
        tooltip: Tooltip;
        focus: Focus;

        clearHighlights(): this;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): this;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /**/
        highlightPoint(): (d: any) => boolean;
        /**/
        highlightPoint(func: (d: any) => boolean): this;
        id(): any;
id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): this;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): this;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): this;
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): this;
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): this;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): this;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): this;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): this;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
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
        brushExtent(value: [number, number] | [[number, number], [number, number]]) : this;
        clearHighlights(): this;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): this;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        focusEnable(): boolean;
        focusEnable(value: boolean): this;
        focusHeight(): number;
        focusHeight(value: number): this;
        focusShowAxisX(): boolean;
        focusShowAxisX(value: boolean): this;
        focusShowAxisY(): boolean;
        focusShowAxisY(value: boolean): this;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /**/
        highlightPoint(): (d: any) => boolean;
        /**/
        highlightPoint(func: (d: any) => boolean): this;
        id(): any;
id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): this;
        /*The extra text after the label in the legend that tells what axis the series belongs to, for any series on the left axis.*/
        legendLeftAxisHint(): string;
        /*The extra text after the label in the legend that tells what axis the series belongs to, for any series on the left axis.*/
        legendLeftAxisHint(value: string): this
        /*The extra text after the label in the legend that tells what axis the series belongs to, for any seris on the right axis.*/
        legendRightAxisHint(): string;
                /*The extra text after the label in the legend that tells what axis the series belongs to, for any seris on the right axis.*/
        legendRightAxisHint(value: string): this
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): this;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): this;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): this;
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): this;
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): this;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): this;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): this;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): this;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
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
        brushExtent(value: [number, number] | [[number, number], [number, number]]): this;
        clearHighlights(): this;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): this;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(): (d: any, i: number) => boolean;
        /*A provided function that allows a line to be non-continuous when not defined.*/
        defined(func: (d: any, i: number) => boolean): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        focusHeight(): number;
        focusHeight(value: number): this;
        focusMargin(): Margin;
        focusMargin(value: Margin): this;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /**/
        highlightPoint(): (d: any) => boolean;
        /**/
        highlightPoint(func: (d: any) => boolean): this;
        id(): any;
id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): this;
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): this;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): this;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): this;
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): this;
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): this;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): this;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): this;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): this;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        xTickFormat(): (d: any) => string;
        xTickFormat(format: (t: any) => string): this;
        xTickFormat(format: string): this;
        xTickFormat(format: (d: any, i: any) => string): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
        yTickFormat(): (d: any) => string;
        yTickFormat(format: (t: any) => string): this;
        yTickFormat(format: string): this;
        yTickFormat(format: (d: any, i: any) => string): this;
    }

    interface MultiBarChart extends Chart {
        multibar: MultiBar;
        legend: Legend;
        controls: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        /*this option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(value: string[]): this;
        /*this option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(func: (d: any, i: number) => string): this;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(): any;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(value: any): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /**/
        disabled(): boolean[];
        /**/
        disabled(value: boolean[]): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): this;
        /*The padding between bar groups, this is passed as the padding attribute of rangeBands*/
        groupSpacing(): number;
        /*The padding between bar groups, this is passed as the padding attribute of rangeBands*/
        groupSpacing(value: number): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /*.*/
        hideable(): boolean;
        /**/
        hideable(value: boolean): this;
        id(): any;
id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        reduceXTicks(): boolean;
        reduceXTicks(value: boolean): this;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        /*Rotates the X axis labels by the specified degree.*/
        rotateLabels(): number;
        /*Rotates the X axis labels by the specified degree.*/
        rotateLabels(value: number): this;
        /*Whether to show extra controls or not. Extra controls include things like making mulitBar charts stacked or side by side.*/
        showControls(): boolean;
        /*Whether to show extra controls or not. Extra controls include things like making mulitBar charts stacked or side by side.*/
        showControls(value: boolean): this;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*.*/
        stacked(): boolean;
        /**/
        stacked(value: boolean): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'silhouette'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'wiggle'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'expand'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: 'zero'): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: string): this;
        /* options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function*/
        stackOffset(offset: (data: Array<[number, number]>) => number[]): this;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(): boolean;
        /*Makes the X labels stagger at different distances from the axis so they're less likely to overlap.*/
        staggerLabels(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;

    }

    interface MultiBarHorizontalChart extends Chart {
        multibar: MultiBar;
        legend: Legend;
        controls: Legend;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        tooltip: Tooltip;

        /*this option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(value: string[]): this;
        /*this option lets you specific a color for each bar group to have the same color but differentiated by shading.*/
        barColor(func: (d: any, i: number) => string): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(): any;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(value: any): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /**/
        disabled(): boolean[];
        /**/
        disabled(value: boolean[]): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(): number[];
        /* List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the Y domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option.*/
        forceY(value: number[]): this;
        /*The padding between bar groups, this is passed as the padding attribute of rangeBands*/
        groupSpacing(): number;
        /*The padding between bar groups, this is passed as the padding attribute of rangeBands*/
        groupSpacing(value: number): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
id(value: number|string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        showControls(): boolean;
        /*Whether to show extra controls or not. Extra controls include things like making mulitBar charts stacked or side by side.*/
        showControls(value: boolean): this;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): this;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(): boolean;
        /*Prints the Y values on the top of the bars. Only recommended to use if there aren't many bars.*/
        showValues(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*.*/
        stacked(): boolean;
        /**/
        stacked(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): this;
        /*.*/
        valuePadding(): number;
        /**/
        valuePadding(value: number): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /**/
        yErr(): (d: any, i: number) => number | number[];
        /**/
        yErr(func: (d: any, i: number) => number | number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;

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
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(): string;
        /*controls the line interpolation between points, many options exist, see the D3 reference:*/
        interpolate(value: string): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(): (d: any) => boolean;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(value: boolean): this;
        /*Function to define if a line is a normal line or if it fills in the area. Notice the default gets the value from the line's definition in data. If a non-function is given, it the value is used for all lines.*/
        isArea(func: (d: any) => boolean): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* */
        yDomain1(): number[];
        /* */
        yDomain1(value: number[]): this;
        /* */
        yDomain2(): number[];
        /* */
        yDomain2(value: number[]): this;
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
        clipEdge(value: boolean): this;
        close(): (d: any) => number;
        close(func: (d: any) => number): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the yDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        high(): (d: any) => number;
        high(func: (d: any) => number): this;
        id(): any;
        id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        low(): (d: any) => number;
        low(func: (d: any) => number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        open(): (d: any) => number;
        open(func: (d: any) => number): this;
        padData(): boolean;
        padData(value: boolean): this;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        /*Whether to display the legend or not*/
        showLegend(): boolean;
        /*Whether to display the legend or not*/
        showLegend(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;
    }

    interface ParallelCoordinatesChart extends Chart {
        parallelCoordinates: ParallelCoordinates;
        legend: Legend;
        tooltip: Tooltip;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        dimensionData(): any
        dimensionData(d:any) : this
        /*D3 format for each x axis*/
        dimensionFormats(): string[];
        /*D3 format for each x axis*/
        dimensionFormats(value: string[]): this;
        /*Name of each dimension, used for each axis.*/
        dimensionNames(): string[];
        /*Name of each dimension, used for each axis.*/
        dimensionNames(value: string[]): this;
        /*Deprecated. Use dimensionsNames instead. */
        dimensions(): any;
        /*Deprecated. Use dimensionsNames instead. .*/
        dimensions(value: any): this;
        /**/
        displayBrush(): boolean;
        /**/
        displayBrush(value: boolean): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /*Specifies each line tension. Values between 0 and 1.*/
        lineTension(): number;
        /*Specifies each line tension. Values between 0 and 1.*/
        lineTension(value: number): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /**/
        noData(): string;
        /**/
        noData(value: string): this;
        /**/
        showLegend(): boolean;
        /**/
        showLegend(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
    }

    interface PieChart extends Chart {
        legend: Legend;
        pie: Pie;
        tooltip: Tooltip;

        /*Specifies each slice size, by an inner and a outer radius. Values between 0 and 1*/
        arcsRadius(): ArcsRadius[];
        /*Specifies each slice size, by an inner and a outer radius. Values between 0 and 1*/
        arcsRadius(value: ArcsRadius[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*D3 3.4+, For donut charts only, the corner radius of the slices. Typically used with padAngle.*/
        cornerRadius(): number;
        /*D3 3.4+, For donut charts only, the corner radius of the slices. Typically used with padAngle.*/
        cornerRadius(value: number): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*Whether to make a pie graph a donut graph or not.*/
        donut(): boolean;
        /*Whether to make a pie graph a donut graph or not.*/
        donut(value: boolean): this;
        /**/
        donutLabelsOutside(): boolean;
        /**/
        donutLabelsOutside(value: boolean): this;
        /*Percent of pie radius to cut out of the middle to make the donut. It is multiplied by the outer radius to calculate the inner radius, thus it should be between 0 and 1.*/
        donutRatio(): number;
        /*Percent of pie radius to cut out of the middle to make the donut. It is multiplied by the outer radius to calculate the inner radius, thus it should be between 0 and 1.*/
        donutRatio(value: number): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*Function used to manage the ending angle of the pie/donut chart*/
        endAngle(): (d: any) => number;
        /*Function used to manage the ending angle of the pie/donut chart*/
        endAngle(func: (d: any) => number): this;
        /*For pie/donut charts, whether to increase slice radius on hover or not*/
        growOnHover(): boolean;
        /*For pie/donut charts, whether to increase slice radius on hover or not*/
        growOnHover(value: boolean): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        id(): any;
id(value: number|string): this;
        /**/
        labelFormat(): string;
        /**/
        labelFormat(value: string): this;
        /**/
        labelFormat(format: (d: any) => string): this;
        /**/
        labelSunbeamLayout(): boolean;
        /**/
        labelSunbeamLayout(value: boolean): this;
        /*Pie/donut charts: The slice threshold size to not display the label because it woudl be too small of a space*/
        labelThreshold(): number;
        /*Pie/donut charts: The slice threshold size to not display the label because it woudl be too small of a space*/
        labelThreshold(value: number): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(): string;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'key'): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'value'): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: 'percent'): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(value: string): this;
        /*pie/donut charts only: what kind of data to display for the slice labels. Options are key, value, or percent. */
        labelType(func: (d: any, i: number, values: any) => string): this;
        /*Whether pie/donut chart labels should be outside the slices instead of inside them*/
        labelsOutside(): boolean;
        /*Whether pie/donut chart labels should be outside the slices instead of inside them*/
        labelsOutside(value: boolean): this;
        /*Position of the legend (top or right). */
        legendPosition(): string;
        /*Position of the legend (top or right). */
        legendPosition(value: 'top'): this;
        /*Position of the legend (top or right). */
        legendPosition(value: 'right'): this;
        /*Position of the legend (top or right). */
        legendPosition(value: string): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        /*Message to display if no data is provided*/
        noData(): string;
        /*Message to display if no data is provided*/
        noData(value : string): this;
        /*D3 3.4+, For donut charts only, the percent of the chart that should be spacing between slices.*/
        padAngle(): number;
        /*D3 3.4+, For donut charts only, the percent of the chart that should be spacing between slices.*/
        padAngle(value: number): this;
        /**/
        pieLabelsOutside(): boolean;
        /**/
        pieLabelsOutside(value: boolean): this;
        /*Show pie/donut chart labels for each slice*/
        showLabels(): boolean;
        /*Show pie/donut chart labels for each slice*/
        showLabels(value: boolean): this;
        /*Whether to display the legend or not*/
        showLegend(): boolean;
        /*Whether to display the legend or not*/
        showLegend(value: boolean): this;
        /*Function used to manage the starting  angle of the pie/donut chart*/
        startAngle(): (d: any) => number;
        /*Function used to manage the starting  angle of the pie/donut chart*/
        startAngle(func: (d: any) => number): this;
        /*Text to include within the middle of a donut chart*/
        title(): string;
        /*Text to include within the middle of a donut chart*/
        title(value: string): this;
        /*Vertical offset for the donut chart title*/
        titleOffset(): number;
        /*Vertical offset for the donut chart title*/
        titleOffset(value: number): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(): string;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(value: string): this;
        /*D3 Format object for the label of pie/donut, discrete bar and multibar charts.*/
        valueFormat(format: (d: any) => string): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /*Proxy function to return the Y value so adjustments can be made if needed.For pie/ donut chart this returns the value for the slice.*/
        y(): (d: any) => number;
        /*Proxy function to return the Y value so adjustments can be made if needed. For pie/donut chart this returns the value for the slice.*/
        y(func: (d: any) => number): this;
    }

    interface ScatterChart extends Chart {
        scatter: Scatter;
        xAxis: Nvd3Axis;
        yAxis: Nvd3Axis;
        legend: Legend;
        tooltip: Tooltip;
        distX: Distribution;
        distY: Distribution;

        clearHighlights(): this;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(): boolean;
        /*If true, masks lines within the X and Y scales using a clip-path*/
        clipEdge(value: boolean): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(func: (d: any) => number): this;
        /*When useVoronoi and clipVoronoi are true, you can control the clip radius with this option. Essentially this lets you set how far away from the actual point you can put the mouse for it to select the point.*/
        clipRadius(value: number): this;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(): boolean;
        /*When useVoronoi is on, this masks each voronoi section with a circle to limit selection to smaller area.*/
        clipVoronoi(value: boolean): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(value: string[]): this;
        /*Colors to use for the different data. If an array is given, it is converted to a function automatically.*/
        color(func: (d: any, i: number) => string): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(): number[];
        /*List of numbers to Force into the point scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forcePoint(value: number[]): this;
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(): number[];
        /*List of numbers to Force into the X scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceX(value: number[]): this;
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(): number[];
        /*List of numbers to Force into the Y scale (ie. 0, or a max / min, etc.). This ensures the numbers are in the X domain but doesn't override the whole domain. This option only applies if you have not overridden the whole domain with the xDomain option*/
        forceY(value: number[]): this;
        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;
        /**/
        highlightPoint(): (d: any) => boolean;
        /**/
        highlightPoint(func: (d: any) => boolean): this;
        id(): any;
id(value: number|string): this;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(): boolean;
        /*A master flag for turning chart interaction on and off. This overrides all tooltip, voronoi, and guideline options.*/
        interactive(value: boolean): this;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(): Margin;
        /*Object containing the margins for the chart or component. You can specify only certain margins in the object to change just those parts.*/
        margin(value: Margin): this;
        noData(): string;
        noData(value: string): this;
        /**/
        padData(): boolean;
        /**/
        padData(value: boolean): this;
        /**/
        padDataOuter(): number;
        /**/
        padDataOuter(value: number): this;
        /* Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(): (d: any) => boolean;
        /*Function used to determine if scatter points are active or not, returns false to denote them as inactive and true for active.*/
        pointActive(func: (d: any) => boolean): this;
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointxDomain(): number[];
        /* Defines the whole point scale's domain. Using this will disable calculating the domain based on the data.*/
        pointDomain(value: number[]): this;
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(): number[];
        /* Override the point scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        pointRange(value: number[]): this;
        /* Override the default scale type for the point axis*/
        pointScale(): any;
        /* Override the default scale type for the point axis*/
        pointScale(value: any): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(): (d: any) => number;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(func: (d: any) => number): this;
        /* Specifies the size of the points in a scatter. Scatter is also used to make the hover points on lines.*/
        pointSize(value: number): this;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        /**/
        showDistX(): boolean;
        /**/
        showDistX(value: boolean): this;
        /**/
        showDistY(): boolean;
        /**/
        showDistY(value: boolean): this;
        /*Whether to display the legend or not.*/
        showLegend(): boolean;
        /*Whether to display the legend or not.*/
        showLegend(value: boolean): this;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(): boolean;
        /*Displays the voronoi areas on the chart. This is mostly helpful when debugging issues.*/
        showVoronoi(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /**/
        tooltipXContent(): (d: any) => string;
        /**/
        tooltipXContent(func: (d: any) => string): this;
        /**/
        tooltipYContent(): (d: any) => string;
        /**/
        tooltipYContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(): boolean;
        /*Use voronoi diagram to select nearest point to display tooltip instead of requiring a hover over the specific point itself. Setting this to false will also set clipVoronoi to false.*/
        useVoronoi(value: boolean): this;
        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(): (d: any) => any;
        /* Proxy function to return the X value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        x(func: (d: any) => any): this;
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(): number[];
        /* Defines the whole X scale's domain. Using this will disable calculating the domain based on the data.*/
        xDomain(value: number[]): this;
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(): number[];
        /* Override the X scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        xRange(value: number[]): this;
        /* Override the default scale type for the X axis*/
        xScale(): any;
        /* Override the default scale type for the X axis*/
        xScale(value: any): this;
        y(): (d: any) => number;
        /* Proxy function to return the y value so adjustments can be made if needed. For pie/donut chart this returns the key for the slice.*/
        y(func: (d: any) => number): this;
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(): number[];
        /* Defines the whole y scale's domain. Using this will disable calculating the domain based on the data.*/
        yDomain(value: number[]): this;
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(): number[];
        /* Override the y scale's range. Using this will disable calculating the range based on the data and chart width/height.*/
        yRange(value: number[]): this;
        /* Override the default scale type for the y axis*/
        yScale(): any;
        /* Override the default scale type for the y axis*/
        yScale(value: any): this;

    }

    interface SankeyChart extends Chart {
        /*Y-position of the middle of a node.*/
        center(): number;
        /*Y-position of the middle of a node.*/
        center(value: (d: any) => any): this;

        /*Formatting settings for nodes. */
        format(): string;
        /*Formatting settings for nodes. */
        format(formatter: (d: any) => string): this;

        /*The height the graph or component created inside the SVG should be made*/
        height(): number;
        /*The height the graph or component created inside the SVG should be made.*/
        height(value: number): this;

        /*Format annotation on links. */
        linkTitle(): string;
        /*Format annotation on links. */
        linkTitle(formatter: (d: any) => string): this;

        /* The padding of nodes.*/
        nodePadding(): number;
        /*The padding of nodes.*/
        nodePadding(value: number): this;

        /*Styling options for nodes. */
        margin(): Margin;
        /*Styling options for nodes. */
        margin(value: Margin): this;

        /* The width of nodes.*/
        nodeWidth(): number;
        /*The width of nodes.*/
        nodeWidth(value: number): this;

        /*Styling options for nodes. */
        nodeStyle(): SankeyNodeStyleOptions;
        /*Styling options for nodes. */
        nodeStyle(value: SankeyNodeStyleOptions): this;

        /* The width the graph or component created inside the SVG should be made*/
        width(): number;
        /*The width the graph or component created inside the SVG should be made.*/
        width(value: number): this;

        /*Units to be used. */
        units(): string
        /*Units to be used. */
        units(value: string): this;
    }

    interface StackedAreaChart extends StackedArea, Chart {
        stacked: StackedArea;
        legend: Legend;
        controls: Legend;
        xAxis: Nvd3Axis;
        x2Axis: Nvd3Axis;
        yAxis: Nvd3Axis;
        y2Axis: Nvd3Axis;
        tooltip: Tooltip;
        focus: Focus;

        controlLabels(): any;
        /*Object that defines the labels for control items in the graph. For instance, in the stackedAreaChart, there are controls for making it stacked, expanded, or stream. For stacked bar charts, there is stacked and grouped.*/
        controlLabels(value: any): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*Message to display if no data is provided*/
        noData(): string;
        /*Message to display if no data is provided*/
        noData(value: string): this;
        rightAlignYAxis(): boolean;
        /*When only one Y axis is used, this puts the Y axis on the right side instead of the left.*/
        rightAlignYAxis(value: boolean): this;
        showLegend(): boolean;
        /*Whether to display the legend or not*/
        showLegend(value: boolean): this;
        /*Display or hide the X axis*/
        showXAxis(): boolean;
        /*Display or hide the X axis*/
        showXAxis(value: boolean): this;
        /*Display or hide the Y axis*/
        showYAxis(): boolean;
        /*Display or hide the Y axis*/
        showYAxis(value: boolean): this;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(): (d: any) => string;
        /*Deprecated. Use chart.tooltip.contentGenerator or chart.interactiveGuideline.tooltip.contentGenerator to control tooltip content.*/
        tooltipContent(func: (d: any) => string): this;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(): boolean;
        /*Deprecated. Use chart.tooltip.enabled or chart.interactive to control if tooltips are enabled or not.*/
        tooltips(value: boolean): this;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(): boolean;
        /*Sets the chart to use a guideline and floating tooltip instead of requiring the user to hover over specific hotspots. Turning this on will set the 'interactive' and 'useVoronoi' options to false to avoid conflicting.*/
        useInteractiveGuideline(value: boolean): this;

        focusEnable(): boolean;
        focusEnable(value: boolean): this;
        focusHeight(): number;
        focusHeight(value: number): this;
        showControls(): boolean;
        showControls(value: boolean): this;
        brushExtent(): [number, number] | [[number, number], [number, number]];
        brushExtent(value: [number, number] | [[number, number], [number, number]]) : this;
    }

    interface SunburstChart extends Sunburst, Chart {
        sunburst: Sunburst;
        tooltip: Tooltip;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(): number;
        /*Duration in ms to take when updating chart. For things like bar charts, each bar can animate by itself but the total time taken should be this value.*/
        duration(value: number): this;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(): any;
        /*No longer used.Use chart.dispatch.changeState(...) instead*/
        defaultState(value: any): this;
        /*Message to display if no data is provided*/
        noData(): string;
        /*Message to display if no data is provided*/
        noData(value: string): this;
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
        sankeyChart(): SankeyChart;
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
