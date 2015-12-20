// Type definitions for nvd3 1.8.1
// Project: https://github.com/novus/nvd3
// Definitions by: Maxime LUCE <https://github.com/PjMitchell/>
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
	
	interface Legend extends Chart<Legend> {
		key(): any;
		key(value: any): Legend;
		align(): boolean;
		align(value: boolean): Legend;		
		maxKeyLength(): number;
		maxKeyLength(value: number): Legend;
		rightAlign(): boolean;
		rightAlign(value: boolean): Legend;
		//define how much space between legend items. - recommend 32 for furious version
		padding(): number;
		//define how much space between legend items. - recommend 32 for furious version
		padding(value: number): Legend;
		//If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
		updateState(): boolean;
		//If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
		updateState(value: boolean): Legend;
		//If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at 	
		radioButtonMode(): boolean;
		//If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at 
		radioButtonMode(value: boolean): Legend;
		expanded(): boolean;
		expanded(value: boolean): Legend;
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
		update(): void;
		interactiveLayer :InteractiveLayer;
		
		(transition: d3.Transition<any[]>, ...args: any[]) :any;
		(selection: d3.Selection<any[]>, ...args: any[]) :any;
		(transition: d3.Transition<any>, ...args: any[]) :any;
		(selection: d3.Selection<any>, ...args: any[]) :any;
	}
	
	interface Chart<TChart extends ChartBase> extends ChartBase {
		margin() : Margin;
		margin(value: Margin) : TChart;
		width(): number;
		width(value: number) : TChart;
		height(): number;
		height(value: number) : TChart;		
		color(value:string[]) : TChart;	
		color(value:string) : TChart;	
		dispatch : d3.Dispatch;

	}
	
	interface TwoDimensionalChart<TChart  extends ChartBase> extends Chart<TChart>
	{
		xAxis : NvAxis;
		yAxis : NvAxis;
		x(func: (any)=> any) : TChart;
		y(func: (any)=> any) : TChart;
		xScale(scale: d3.time.Scale<number, number>) : TChart;
		xScale() : d3.time.Scale<number, number>;
		yScale(scale: d3.time.Scale<number, number>) : TChart;
		yScale() : d3.time.Scale<number, number>
		forceX([xMin, xMax] : [number,number]) : TChart;
		forceY([xMin, xMax] : [number,number]) : TChart;
		
	}
	
	interface HistoricalBarBase<TChart  extends ChartBase> extends TwoDimensionalChart<TChart>{
		
		
	}
	
	interface HistoricalBar extends HistoricalBarBase<HistoricalBar>{
		
	}
	
	interface HistoricalBarChart extends HistoricalBarBase<HistoricalBarChart>{
		bars: HistoricalBar;
		legend: Legend;
		noData(): any //todo;
		noData(value: any): HistoricalBarChart //todo;
		defaultState(): any //todo;
		defaultState(value: any): HistoricalBarChart //todo;
		showXAxis(): boolean //todo;
		showXAxis(value: boolean): HistoricalBarChart //todo;
		showLegend(): boolean //todo;
		showLegend(value: boolean): HistoricalBarChart //todo;
		showYAxis(): boolean //todo;
		showYAxis(value: boolean): HistoricalBarChart //todo;
		rightAlignYAxis(): boolean //todo;
		rightAlignYAxis(value: boolean): HistoricalBarChart //todo;
		useInteractiveGuideline(value : boolean) : HistoricalBarChart;
		duration(value: number) : HistoricalBarChart;
		interactiveLayer :InteractiveLayer;
	}
	
	
	

	
	interface BoxPlotChart extends TwoDimensionalChart<BoxPlotChart>{
		useInteractiveGuideline(value : boolean) : BoxPlotChart;
		duration(value: number) : BoxPlotChart;
		
		staggerLabels(value : boolean) : BoxPlotChart; 
		maxBoxWidth(value: number) : BoxPlotChart; 
		yDomain([xMin, xMax] : [number,number]): BoxPlotChart; 
		xDomain([xMin, xMax] : [number,number]): BoxPlotChart;
		showXAxis(): boolean //todo;
		showXAxis(value: boolean): BoxPlotChart //todo;
		showYAxis(): boolean //todo;
		showYAxis(value: boolean): BoxPlotChart //todo;
		rightAlignYAxis(): boolean //todo;
		rightAlignYAxis(value: boolean): BoxPlotChart //todo;
	}
	
	interface BulletBase<TBullet extends ChartBase> extends Chart<TBullet> {
		orient(): string;
		orient(orientation: string): TBullet;
		tickFormat(): (t: any) => string;
		tickFormat(format: (t: any) => string): TBullet;
		tickFormat(format:string): NvAxis;	
		tickFormat(format: (t: any, i: any) => string): TBullet;
		forceX([xMin, xMax] : [number,number]) : TBullet;
		ranges(): any //todo;
		ranges(value: any): TBullet //todo;
		markers(): any //todo;
		markers(value: any): TBullet //todo;
		measures(): any //todo;
		measures(value: any): TBullet //todo;
	}
	
	interface Bullet extends BulletBase<Bullet>{
		
	}
	interface BulletChart extends BulletBase<Bullet>{
		bullet: Bullet
		ticks(): any //todo;
		ticks(value: any): BulletChart //todo;
		noData(): any //todo;
		noData(value: any): BulletChart //todo;
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
	
	interface ChartFactory<T extends ChartBase> {
		generate: ()=> Chart<T>;
		callback?: (chart:Chart<T>)=> void;
	}
	

	interface nvStatic{
		models: Models;
		tooltip: Tooltip;
		utils: Utils;
		addGraph<T extends ChartBase>(factory: ChartFactory<T>);
		addGraph<T extends ChartBase>(generate : ()=> Chart<T>, callBack?: (chart:Chart<T>)=> void) ;
	}
}
declare var nv : nv.nvStatic;