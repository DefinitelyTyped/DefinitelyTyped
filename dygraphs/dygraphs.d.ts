// Type definitions for dygraphs v1.1.1
// Project: http://dygraphs.com/
// Definitions by: Denis Kolodin <https://github.com/DenisKolodin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare type Color = string;
declare type DygraphPoint = Array<Date|number>;
declare type DygraphCoords = [number, number];
declare type DygraphRange  = [number, number];
declare type DygraphData = Function|string|Array<DygraphPoint>;
// Annotations
interface DygraphOptions {
	annotationClickHandler?: Function;
	annotationDblClickHandler?: Function;
	annotationMouseOutHandler?: Function;
	annotationMouseOverHandler?: Function;
	displayAnnotations?: boolean;
}

// Axis display
interface DygraphAxisOptions {
	axis?: string;
	axisLabelColor?: Color;
	axisLabelFontSize?: number;
	axisLabelFormatter?: Function;
	axisLabelWidth?: number;
	axisLineColor?: Color;
	axisLineWidth?: number;
	axisTickSize?: number;
	dateWindow?: DygraphRange;
	drawAxesAtZero?: boolean;
	drawAxis?: boolean;
	drawXAxis?: boolean;
	drawYAxis?: boolean;
	includeZero?: boolean;
	independentTicks?: boolean;
	labelsUTC?: boolean;
	logscale?: boolean;
	panEdgeFraction?: number;
	pixelsPerLabel?: number;
	ticker?: Function;
	valueRange?: DygraphRange;
	xAxisHeight?: number;
	xRangePad?: number;
	yRangePad?: number;
}

// CSV parsing
interface DygraphOptions {
	customBars?: boolean;
	delimiter?: string;
	errorBars?: boolean;
	fractions?: boolean;
	xValueParser?: (string) => number;
}

// Callbacks
interface DygraphOptions {
	clickCallback?: Function;
	drawCallback?: Function;
	highlightCallback?: Function;
	pointClickCallback?: Function;
	underlayCallback?: Function;
	unhighlightCallback?: Function;
	zoomCallback?: (minDate: number, maxDate: number, yRanges: Array<DygraphRange>) => void;
}

// Chart labels
interface DygraphOptions {
	// axisLabelWidth?: number; // duplicate in documentation
	title?: string;
	titleHeight?: number;
	xLabelHeight?: number;
	xlabel?: string;
	y2label?: string;
	yLabelWidth?: number;
	ylabel?: string;
}

// Configuration
interface DygraphOptions {
	axes?: any;
	plugins?: Array<any>;
}

// Data
interface DygraphOptions {
	dataHandler?: Function;
	file?: DygraphData;
}

// Data Line display
interface DygraphOptions {
	connectSeparatedPoints?: boolean;
	drawGapEdgePoints?: boolean;
	drawHighlightPointCallback?: Function;
	drawPointCallback?: Function;
	drawPoints?: boolean;
	fillGraph?: boolean;
	plotter?: Function|Array<Function>;
	pointSize?: number;
	stackedGraph?: boolean;
	stackedGraphNaNFill?: string;
	stepPlot?: boolean;
	strokeBorderColor?: Color;
	strokeBorderWidth?: number;
	strokePattern?: Array<number>;
	strokeWidth?: number;
	visibility?: Array<boolean>;
}

// Data Series Colors
interface DygraphOptions {
	color?: Color;
	colorSaturation?: number;
	colorValue?: number;
	colors?: Array<Color>;
	fillAlpha?: number;
}

// Debugging
interface DygraphOptions {
	timingName?: string;
}

// Deprecated!
interface DygraphOptions {
	avoidMinZero?: boolean;
	drawXGrid?: boolean;
	drawYGrid?: boolean;
	pixelsPerXLabel?: number;
	pixelsPerYLabel?: number;
	xAxisLabelFormatter?: Function;
	xAxisLabelWidth?: number;
	xValueFormatter?: Function;
	yAxisLabelFormatter?: Function;
	yAxisLabelWidth?: number;
	yValueFormatter?: Function;
}

// Error Bars
interface DygraphOptions {
	// customBars?: boolean;
	// errorBars?: boolean;
	// fillAlpha?: number;
	// fractions?: boolean;
	rollPeriod?: number;
	sigma?: number;
	wilsonInterval?: boolean;
}

// Grid
interface DygraphOptions {
	drawGrid?: boolean;
	// drawXGrid?: boolean;
	// drawYGrid ?: boolean;
	gridLineColor?: Color;
	gridLinePattern?: Array<number>;
	gridLineWidth?: number;
	// independentTicks?: boolean;
	// pixelsPerLabel?: number;
}

// Interactive Elements
interface DygraphOptions {
	animatedZooms?: boolean;
	hideOverlayOnMouseOut?: boolean;
	highlightCircleSize?: number;
	highlightSeriesBackgroundAlpha?: number;
	highlightSeriesOpts?: any;
	interactionModel?: any;
	// panEdgeFraction?: number;
	// pointClickCallback?: Function;
	rangeSelectorHeight ?: number;
	rangeSelectorPlotFillColor?: Color;
	rangeSelectorPlotStrokeColor?: Color;
	showInRangeSelector?: boolean;
	showLabelsOnHighlight?: boolean;
	showRangeSelector?: boolean;
	showRoller?: boolean;
}

// Legend
interface DygraphOptions {
	// hideOverlayOnMouseOut?: boolean;
	labels?: Array<string>;
	labelsDiv?: HTMLElement|string;
	labelsDivStyles?: any;
	labelsDivWidth?: number;
	labelsSeparateLines?: boolean;
	labelsShowZeroValues?: boolean;
	legend?: string;
	// showLabelsOnHighlight?: boolean;
	valueFormatter?: Function;
}

// Overall display
interface DygraphOptions {
	height?: number;
	rightGap?: number;
	width?: number;
}

// Rolling Averages
interface DygraphOptions {
	// rollPeriod?: number;
	// showRoller?: boolean;
}

// Series
interface DygraphSeriesOptions {
	series?: any;
}

// Value display/formatting
interface DygraphOptions {
	digitsAfterDecimal?: number;
	labelsKMB?: boolean;
	labelsKMG2?: boolean;
	// labelsUTC?: boolean;
	maxNumberWidth?: number;
	sigFigs?: number;
	// valueFormatter?: Function;
}

// Zooming
interface DygraphOptions {
	isZoomedIgnoreProgrammaticZoom?: boolean;
}

interface Area {
	x: number;
	y: number;
	w: number;
	h: number;
}

interface Dygraph {
	new(div: HTMLElement|string, file: DygraphData, attrs: DygraphOptions, opt_fourth_param?: any);
	adjustRoll(length: number);
	annotations(): any;
	clearSelection();
	destroy();
	eventToDomCoords(event: any);
	getArea(): Area;
	getColors(): Array<Color>;
	getHighlightSeries(): string;
	getLabels(): Array<string>;
	getOption(name: string, opt_seriesName?: string): any;
	getPropertiesForSeries(series_name: string): any;
	getSelection(): number;
	getValue(row: number, col: number): number;
	indexFromSetName(name: string): number;
	isSeriesLocked(): boolean;
	isZoomed(axis?: string);
	numAxes(): number;
	numColumns(): number;
	numRows(): number;
	ready(callback: Function);
	resetZoom();
	resize(width: number, height: number);
	rollPeriod(): number;
	setAnnotations(ann: Array<any>, suppressDraw?: boolean);
	setSelection(row: number, series?: string, locked?: boolean);
	setVisibility(num: number, value: boolean);
	toDataCoords(x: number, y: number, axis: string): DygraphCoords;
	toDataXCoord(x: number): number;
	toDataYCoord(y: number, axis: string): number;
	toDomCoords(x: number, y: number, axis: string): DygraphCoords;
	toDomXCoord(x: number): number;
	toDomYCoord(y: number, axis: string): number;
	toPercentXCoord(x: number): number;
	toPercentYCoord(y: number, axis?: string): number;
	toString(): string;
	updateOptions(attrs: DygraphOptions, block_redraw?: boolean);
	visibility(): boolean;
	xAxisExtremes(): DygraphRange;
	xAxisRange(): DygraphRange;
	yAxisRange(idx: number): DygraphRange;
	yAxisRanges(): DygraphRange;
}

declare var Dygraph: Dygraph;

