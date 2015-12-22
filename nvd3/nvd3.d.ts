// Type definitions for nvd3 1.8.1
// Project: https://github.com/novus/nvd3
// Definitions by: Peter Mitchell <https://github.com/PjMitchell/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../d3/d3.d.ts" />
declare module nv {
	
//	interface Datum{
//		values: any[],
//		key: string,
//		color: string
//	}
	
	interface Margin {
		left?: number,
		right?: number,
		top?: number, 
		bottom?: number
	}
	
	interface Legend extends Chart {
		key(): any;
		key(value: any): this;
		align(): boolean;
        align(value: boolean): this;		
		maxKeyLength(): number;
        maxKeyLength(value: number): this;
		rightAlign(): boolean;
        rightAlign(value: boolean): this;
		//define how much space between legend items. - recommend 32 for furious version
		padding(): number;
		//define how much space between legend items. - recommend 32 for furious version
        padding(value: number): this;
		//If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
		updateState(): boolean;
		//If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
        updateState(value: boolean): this;
		//If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at 	
		radioButtonMode(): boolean;
		//If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at 
        radioButtonMode(value: boolean): this;
		expanded(): boolean;
        expanded(value: boolean): this;
		//Options are "classic" and "furious"
		vers(): string;
		//Options are "classic" and "furious"
		vers(value: string): Legend;
	}
	
	/**
	*NVD3 extension of D3 Axis
	*/
	interface NvAxis extends d3.svg.Axis {
			(selection: d3.Selection<any>): void;
            (selection: d3.Transition<any>): void;

            scale(): any;
            scale(scale: any): NvAxis;

            orient(): string;
            orient(orientation: string): NvAxis;

            ticks(): any[];
            ticks(...args: any[]): NvAxis;

            tickValues(): any[];
            tickValues(values: any[]): NvAxis;

            tickSize(): number;
            tickSize(size: number): NvAxis;
            tickSize(inner: number, outer: number): NvAxis;

            innerTickSize(): number;
            innerTickSize(size: number): NvAxis;

            outerTickSize(): number;
            outerTickSize(size: number): NvAxis;

            tickPadding(): number;
            tickPadding(padding: number): NvAxis;

            tickFormat(): (t: any) => string;
            tickFormat(format: (t: any) => string): NvAxis;
            tickFormat(format:string): NvAxis;	
			tickFormat(format: (t: any, i: any) => string): NvAxis;
			
			showMaxMin(value: boolean) : NvAxis;
			axisLabel(value: string) : NvAxis;
			
	}
	
	interface InteractiveLayer {
		tooltip : Tooltip
	}
	
	interface ContentGenerator {
		(arg: any) :string
	}
	
	interface Tooltip {

		show([left , top]: [number,number], content: string, gravity: string) //todo sort out use on nv.tooltip.
		cleanup():void; //todo sort out use on nv.tooltip.
		contentGenerator(): ContentGenerator;
		contentGenerator(func: (any) =>  string): void;
		headerFormatter(func: (any)=> string): void;
	}
	
	interface Utils {
		windowResize(listener: (ev: Event) => any): void;
	}
	
	interface ChartBase {
		
	}
	
	interface Chart {
		margin() : Margin;
		margin(value: Margin) : this;
		width(): number;
		width(value: number) : this;
		height(): number;
		height(value: number) : this;		
		color(value:string[]) : this;	
		color(value:string) : this;	
        dispatch: d3.Dispatch;

        update(): void;
        interactiveLayer: InteractiveLayer;

        (transition: d3.Transition<any[]>, ...args: any[]): any;
        (selection: d3.Selection<any[]>, ...args: any[]): any;
        (transition: d3.Transition<any>, ...args: any[]): any;
        (selection: d3.Selection<any>, ...args: any[]): any;

	}
	
	interface TwoDimensionalChart extends Chart
	{
		xAxis : NvAxis;
		yAxis : NvAxis;
		x(func: (any)=> any) : this;
        y(func: (any) => any): this;
        xScale(scale: d3.time.Scale<number, number>): this;
		xScale() : d3.time.Scale<number, number>;
        yScale(scale: d3.time.Scale<number, number>): this;
		yScale() : d3.time.Scale<number, number>
        forceX([xMin, xMax]: [number, number]): this;
        forceY([xMin, xMax]: [number, number]): this;
		
	}
	
	interface HistoricalBarBase extends TwoDimensionalChart{
		
		
	}
	
	interface HistoricalBar extends HistoricalBarBase{
		
	}
	
	interface HistoricalBarChart extends HistoricalBarBase{
		bars: HistoricalBar;
		legend: Legend;
		noData(): any //todo;
		noData(value: any): this //todo;
		defaultState(): any //todo;
        defaultState(value: any): this //todo;
		showXAxis(): boolean //todo;
        showXAxis(value: boolean): this //todo;
		showLegend(): boolean //todo;
        showLegend(value: boolean): this //todo;
		showYAxis(): boolean //todo;
        showYAxis(value: boolean): this //todo;
		rightAlignYAxis(): boolean //todo;
        rightAlignYAxis(value: boolean): this //todo;
        useInteractiveGuideline(value: boolean): this;
        duration(value: number): this;
	}
	
	
	

	
	interface BoxPlotChart extends TwoDimensionalChart{
		useInteractiveGuideline(value : boolean) : this;
        duration(value: number): this;
		
        staggerLabels(value: boolean): this; 
        maxBoxWidth(value: number): this; 
        yDomain([xMin, xMax]: [number, number]): this; 
        xDomain([xMin, xMax]: [number, number]): this;
		showXAxis(): boolean //todo;
        showXAxis(value: boolean): this //todo;
		showYAxis(): boolean //todo;
        showYAxis(value: boolean): this //todo;
		rightAlignYAxis(): boolean //todo;
        rightAlignYAxis(value: boolean): this //todo;
	}
	
	interface BulletBase extends Chart {
		orient(): string;
        orient(orientation: string): this;
		tickFormat(): (t: any) => string;
        tickFormat(format: (t: any) => string): this;
		tickFormat(format:string): NvAxis;	
        tickFormat(format: (t: any, i: any) => string): this;
        forceX([xMin, xMax]: [number, number]): this;
		ranges(): any //todo;
        ranges(value: any): this //todo;
		markers(): any //todo;
        markers(value: any): this //todo;
		measures(): any //todo;
        measures(value: any): this //todo;
	}
	
	interface Bullet extends BulletBase{
		
	}
	interface BulletChart extends BulletBase{
		bullet: Bullet
		ticks(): any //todo;
		ticks(value: any): this //todo;
		noData(): any //todo;
		noData(value: any): this //todo;
	}
	interface Models{
		historicalBar(): HistoricalBar;
		historicalBarChart(bar_model?:  HistoricalBar): HistoricalBarChart;
	    ohlcBarChart(): HistoricalBarChart;
		bullet(): Bullet;
		bulletChart(): BulletChart;
		boxPlotChart(): BoxPlotChart;
		legend(): Legend;
		tooltip(): Tooltip;
	}
	
    interface ChartFactory<TChart extends Chart> {
        generate: () => TChart;
        callback?: (chart: TChart)=> void;
	}
	

	interface nvStatic{
		models: Models;
		tooltip: Tooltip;
		utils: Utils;
        addGraph<TChart extends Chart>(factory: ChartFactory<TChart>);
        addGraph<TChart extends Chart>(generate: () => TChart, callBack?: (chart: TChart)=> void) ;
	}
}
declare var nv : nv.nvStatic;