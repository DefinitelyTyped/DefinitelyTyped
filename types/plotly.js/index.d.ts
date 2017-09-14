// Type definitions for plotly.js 1.28
// Project: https://plot.ly/javascript/
// Definitions by: Chris Gervang <https://github.com/chrisgervang>
// 				Martin Duparc <https://github.com/martinduparc>
// 				Frederik Aalund <https://github.com/frederikaalund>
// 				taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="d3" />
export as namespace Plotly;

export interface StaticPlots {
	resize(root: Root): void;
}

export const Plots: StaticPlots;

export interface Point {
	x: number;
	y: number;
	z: number;
}

export interface PlotlyHTMLElement extends HTMLElement {
	on(event: 'plotly_click' | 'plotly_hover' | 'plotly_unhover', callback: (data: {
		points: Array<{
			pointNumber: number;
			curveNumber: number;
			data: ScatterData;
		}>;
	}) => void): void;
	on(event: 'plotly_selecting' | 'plotly_selected', callback: (data: {
		points: Array<{
			x: number;
			y: number;
			pointNumber: number;
		}>;
	}) => void): void;
	on(event: 'plotly_restyle', callback: (data: [
		any,  // update object -- attribute updated: new value
		number[]       // array of traces updated
	]) => void): void;
	on(event: 'plotly_relayout', callback: (data: {
		xaxis: {
			range: [number, number];
			autorange: boolean;
		};
		yaxis: {
			range: [number, number];
			autorange: boolean;
		};
		scene: {
			center: Point;
			eye: Point;
			up: Point;
		};
	}) => void): void;
	// on(event: 'plotly_event', callback: (data: any) => void): void;
	on(event: 'plotly_afterplot' | 'plotly_autosize' | 'plotly_deselect' | 'plotly_doubleclick' | 'plotly_redraw' | 'plotly_animated', callback: () => void): void;
}

export interface ToImgopts {
	format: 'jpeg' | 'png' | 'webp' | 'svg';
	width: number;
	height: number;
}

export interface DownloadImgopts {
	format: 'jpeg' | 'png' | 'webp' | 'svg';
	width: number;
	height: number;
	filename: string;
}

export type Root = string | HTMLElement;

export function newPlot(root: Root, data: Data[], layout?: Partial<Layout>, config?: Partial<Config>): Promise<PlotlyHTMLElement>;
export function plot(root: Root, data: Data[], layout?: Partial<Layout>, config?: Partial<Config>): Promise<PlotlyHTMLElement>;
export function relayout(root: Root, layout: Partial<Layout>): Promise<PlotlyHTMLElement>;
export function redraw(root: Root): Promise<PlotlyHTMLElement>;
export function purge(root: Root): void;
export const d3: any;
export function restyle(root: Root, aobj: Data, traces?: number[] | number): Promise<PlotlyHTMLElement>;
export function update(root: Root, traceUpdate: Data, layoutUpdate: Partial<Layout>, traces?: number[] | number): Promise<PlotlyHTMLElement>;
export function addTraces(root: Root, traces: Data | Data[], newIndices?: number[] | number): Promise<PlotlyHTMLElement>;
export function deleteTraces(root: Root, indices: number[] | number): Promise<PlotlyHTMLElement>;
export function moveTraces(root: Root, currentIndices: number[] | number, newIndices?: number[] | number): Promise<PlotlyHTMLElement>;
export function extendTraces(root: Root, update: Data | Data[], indices: number | number[]): Promise<PlotlyHTMLElement>;
export function prependTraces(root: Root, update: Data | Data[], indices: number | number[]): Promise<PlotlyHTMLElement>;
export function toImage(root: Root, opts: ToImgopts): Promise<string>;
export function downloadImage(root: Root, opts: DownloadImgopts): Promise<string>;

// Layout
export interface Layout {
	title: string;
	autosize: boolean;
	showlegend: boolean;
	xaxis: Partial<Axis>;
	yaxis: Partial<Axis>;
	yaxis2: Partial<Axis>;
	yaxis3: Partial<Axis>;
	yaxis4: Partial<Axis>;
	yaxis5: Partial<Axis>;
	yaxis6: Partial<Axis>;
	yaxis7: Partial<Axis>;
	yaxis8: Partial<Axis>;
	yaxis9: Partial<Axis>;
	margin: Partial<Margin>;
	height: number;
	width: number;
	hovermode: "closest" | "x" | "y" | false;
	'xaxis.range': [Datum, Datum];
	'xaxis.range[0]': Datum;
	'xaxis.range[1]': Datum;
	'yaxis.range': [Datum, Datum];
	'yaxis.range[0]': Datum;
	'yaxis.range[1]': Datum;
	'yaxis.type': AxisType;
	'xaxis.type': AxisType;
	'xaxis.autorange': boolean;
	'yaxis.autorange': boolean;
	dragmode: "lasso" | "pan" | "select" | "zoom";
	shapes: Array<Partial<Shape>>;
	legend: Partial<Legend>;
}

export interface Legend {
	traceorder: "grouped" | "normal" | "reversed";
	x: number;
	y: number;
	font: Partial<Font>;
	bgcolor: string;
	bordercolor: string;
	borderwidth: number;
	orientation: "v" | "h";
	tracegroupgap: number;
	xanchor: 'auto' | 'left' | 'center' | 'right';
	yanchor: 'auto' | 'top' | 'middle' | 'bottom';
}

export type AxisType = "date" | "log" | "linear";

export interface Axis {
	title: string;
	showgrid: boolean;
	fixedrange: boolean;
	rangemode: "tozero" | 'normal' | 'nonnegative';
	domain: number[];
	type: AxisType;
	tickformat: string;
	hoverformat: string;
	rangeslider: Partial<RangeSlider>;
	rangeselector: Partial<RangeSelector>;
	range: [Datum, Datum];
	showticklabels: boolean;
	autotick: boolean;
	zeroline: boolean;
	autorange: boolean | 'reversed';
}

export interface ShapeLine {
	color: string;
	width: number;
	dash: Dash;
}

export interface Shape {
	visible: boolean;
	layer: 'below' | 'above';
	type: 'rect' | 'circle' | 'line' | 'path';
	path: string;
	// x-reference is assigned to the x-values
	xref: 'x' | 'paper';
	// y-reference is assigned to the plot paper [0,1]
	yref: 'paper' | 'y';
	x0: Datum;
	y0: Datum;
	x1: Datum;
	y1: Datum;
	fillcolor: string;
	opacity: number;
	line: Partial<ShapeLine>;
}

export interface Margin {
	t: number;
	b: number;
	l: number;
	r: number;
}

export type ModeBarButtons = 'lasso2d' | 'select2d' | 'sendDataToCloud' | 'autoScale2d' |
	'zoom2d' | 'pan2d' | 'zoomIn2d' | 'zoomOut2d' | 'autoScale2d' | 'resetScale2d' |
	'hoverClosestCartesian' | 'hoverCompareCartesian' | 'zoom3d' | 'pan3d' | 'orbitRotation' |
	'tableRotation' | 'resetCameraDefault3d' | 'resetCameraLastSave3d' | 'hoverClosest3d' |
	'zoomInGeo' | 'zoomOutGeo' | 'resetGeo' | 'hoverClosestGeo' | 'hoverClosestGl2d' |
	'hoverClosestPie' | 'toggleHover' | 'toImage' | 'resetViews' | 'toggleSpikelines';

// Data

export type Datum = string | number | Date;

export type Dash = 'solid' | 'dot' | 'dash' | 'longdash' | 'dashdot' | 'longdashdot';

export type Data = Partial<ScatterData>;
export type Color = string | Array<string | undefined | null> | Array<Array<string | undefined | null>>;

// Bar Scatter
export interface ScatterData {
	type: 'bar' | 'scatter' | 'scattergl';
	x: Datum[] | Datum[][];
	y: Datum[] | Datum[][];
	z: Datum[] | Datum[][] | Datum[][][];
	xaxis: string;
	yaxis: string;
	text: string | string[];
	line: Partial<ScatterLine>;
	'line.color': Color;
	'line.width': number;
	'line.dash': Dash;
	'line.shape': 'linear' | 'spline' | 'hv' | 'vh' | 'hvh' | 'vhv';
	'line.smoothing': number;
	'line.simplify': boolean;
	marker: Partial<ScatterMarker>;
	'marker.symbol': string | string[]; // Drawing.symbolList
	'marker.color': Color;
	'marker.opacity': number | number[];
	'marker.size': number | number[];
	'marker.maxdisplayed': number;
	'marker.sizeref': number;
	'marker.sizemin': number;
	'marker.sizemode': "diameter" | "area";
	'marker.showscale': boolean;
	'marker.line': {}; // TODO
	'marker.colorbar': {}; // TODO
	mode: "lines" | "markers" | "text" | "lines+markers" | "text+markers" | "text+lines" | "text+lines+markers" | "none";
	hoveron: "points" | "fills";
	hoverinfo: "text";
	fill: 'none' | 'tozeroy' | 'tozerox' | 'tonexty' | 'tonextx' | 'toself' | 'tonext';
	fillcolor: string;
	legendgroup: string;
	name: string;
	connectgaps: boolean;
}

export interface ScatterMarker {
	symbol: string | string[]; // Drawing.symbolList
	color: Color;
	opacity: number | number[];
	size: number | number[];
	maxdisplayed: number;
	sizeref: number;
	sizemin: number;
	sizemode: "diameter" | "area";
	showscale: boolean;
	line: {}; // TODO
	colorbar: {}; // TODO
}

export interface ScatterLine {
	color: Color;
	width: number;
	dash: Dash;
	shape: 'linear' | 'spline' | 'hv' | 'vh' | 'hvh' | 'vhv';
	smoothing: number;
	simplify: boolean;
}

export interface Font {
	family: string;
	size: number;
	color: string;
}

export interface Config {
	// no interactivity, for export or image generation
	staticPlot: boolean;

	// we can edit titles, move annotations, etc
	editable: boolean;

	// DO autosize once regardless of layout.autosize
	// (use default width or height values otherwise)
	autosizable: boolean;

	// set the length of the undo/redo queue
	queueLength: number;

	// if we DO autosize, do we fill the container or the screen?
	fillFrame: boolean;

	// if we DO autosize, set the frame margins in percents of plot size
	frameMargins: number;

	// mousewheel or two-finger scroll zooms the plot
	scrollZoom: boolean;

	// double click interaction (false, 'reset', 'autosize' or 'reset+autosize')
	doubleClick: 'reset+autosize' | 'reset' | 'autosize' | false;

	// new users see some hints about interactivity
	showTips: boolean;

	// link to open this plot in plotly
	showLink: boolean;

	// if we show a link, does it contain data or just link to a plotly file?
	sendData: boolean;

	// text appearing in the sendData link
	linkText: string;

	// false or function adding source(s) to linkText <text>
	showSources: boolean;

	// display the mode bar (true, false, or 'hover')
	displayModeBar: 'hover' | boolean;

	// remove mode bar button by name
	// (see ./components/modebar/buttons.js for the list of names)
	modeBarButtonsToRemove: ModeBarButtons[];

	// add mode bar button using config objects
	// (see ./components/modebar/buttons.js for list of arguments)
	modeBarButtonsToAdd: ModeBarButtons[];

	// fully custom mode bar buttons as nested array,
	// where the outer arrays represents button groups, and
	// the inner arrays have buttons config objects or names of default buttons
	// (see ./components/modebar/buttons.js for more info)
	modeBarButtons: ModeBarButtons[][];

	// add the plotly logo on the end of the mode bar
	displaylogo: boolean;

	// increase the pixel ratio for Gl plot images
	plotGlPixelRatio: number;

	// function to add the background color to a different container
	// or 'opaque' to ensure there's white behind it
	setBackground: string | 'opaque';

	// URL to topojson files used in geo charts
	topojsonURL: string;

	// Mapbox access token (required to plot mapbox trace types)
	// If using an Mapbox Atlas server, set this option to '',
	// so that plotly.js won't attempt to authenticate to the public Mapbox server.
	mapboxAccessToken: string;

	// Turn all console logging on or off (errors will be thrown)
	// This should ONLY be set via Plotly.setPlotConfig
	logging: boolean;

	// Set global transform to be applied to all traces with no
	// specification needed
	globalTransforms: any[];
}

// Components

export interface RangeSlider {
	visible: boolean;
	thickness: number;
	range: [Datum, Datum];
	borderwidth: number;
	bordercolor: string;
	bgcolor: string;
}

export interface RangeSelectorButton {
	step: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'all';
	stepmode: 'backward' | 'todate';
	count: number;
	label: string;
}

export interface RangeSelector {
	buttons: Array<Partial<RangeSelectorButton>>;
	visible: boolean;
	x: number;
	xanchor: 'auto' | 'left' | 'center' | 'right';
	y: number;
	yanchor: 'auto' | 'top' | 'middle' | 'bottom';
	bgcolor: string;
	activecolor: string;
	bordercolor: string;
	borderwidth: number;
	font: Partial<Font>;
}
