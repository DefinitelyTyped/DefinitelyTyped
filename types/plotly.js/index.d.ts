// Type definitions for plotly.js 1.28
// Project: https://plot.ly/javascript/
// Definitions by: Chris Gervang <https://github.com/chrisgervang>
// 				Martin Duparc <https://github.com/martinduparc>
// 				Frederik Aalund <https://github.com/frederikaalund>
// 				taoqf <https://github.com/taoqf>
// 				Dadstart <https://github.com/Dadstart>
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

export interface PlotScatterDataPoint {
	pointNumber: number;
	curveNumber: number;
	data: ScatterData;
}

export interface PlotMouseEvent {
	points: PlotScatterDataPoint[];
	event: MouseEvent;
}

export interface PlotCoordinate {
	x: number;
	y: number;
	pointNumber: number;
}

export interface PlotSelectionEvent {
	points: PlotCoordinate[];
}

export type PlotRestyleEvent = [
	any,  // update object -- attribute updated: new value
	number[]       // array of traces updated
];

export interface PlotAxis {
	range: [number, number];
	autorange: boolean;
}

export interface PlotScene {
	center: Point;
	eye: Point;
	up: Point;
}

export interface PlotRelayoutEvent {
	xaxis: PlotAxis;
	yaxis: PlotAxis;
	scene: PlotScene;
}

export interface PlotlyHTMLElement extends HTMLElement {
	on(event: 'plotly_click' | 'plotly_hover' | 'plotly_unhover', callback: (event: PlotMouseEvent) => void): void;
	on(event: 'plotly_selecting' | 'plotly_selected', callback: (event: PlotSelectionEvent) => void): void;
	on(event: 'plotly_restyle', callback: (data: PlotRestyleEvent) => void): void;
	on(event: 'plotly_relayout', callback: (event: PlotRelayoutEvent) => void): void;
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
	titlefont: Partial<Font>;
	autosize: boolean;
	showlegend: boolean;
	paper_bgcolor: Color;
    plot_bgcolor: Color;
    separators: string;
    hidesources: boolean;
    xaxis: Partial<LayoutAxis>;
	yaxis: Partial<LayoutAxis>;
	yaxis2: Partial<LayoutAxis>;
	yaxis3: Partial<LayoutAxis>;
	yaxis4: Partial<LayoutAxis>;
	yaxis5: Partial<LayoutAxis>;
	yaxis6: Partial<LayoutAxis>;
	yaxis7: Partial<LayoutAxis>;
	yaxis8: Partial<LayoutAxis>;
	yaxis9: Partial<LayoutAxis>;
	margin: Partial<Margin>;
	height: number;
	width: number;
	hovermode: 'closest' | 'x' | 'y' | false;
	hoverlabel: Partial<Label>;
	calendar: Calendar;
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
	ternary: {}; // TODO
    geo: {}; // TODO
    mapbox: {}; // TODO
	radialaxis: {}; // TODO
    angularaxis: {}; // TODO
    direction: 'clockwise' | 'counterclockwise';
    dragmode: 'zoom' | 'pan' | 'select' | 'lasso' | 'orbit' | 'turntable';
    orientation: number;
    annotations: {}; // TODO
	shapes: Array<Partial<Shape>>;
    images: {}; // TODO
    updatemenus: {}; // TODO
    sliders: {}; // TODO
    legend: Partial<Legend>;
	font: Partial<Font>;
	scene: Partial<Scene>;
}

export interface Legend extends Label {
	traceorder: 'grouped' | 'normal' | 'reversed';
	x: number;
	y: number;
	borderwidth: number;
	orientation: 'v' | 'h';
	tracegroupgap: number;
	xanchor: 'auto' | 'left' | 'center' | 'right';
	yanchor: 'auto' | 'top' | 'middle' | 'bottom';
}

export type AxisType = '-' | 'linear' | 'log' | 'date' | 'category';

export interface Axis {
    visible: boolean;
    color: Color;
    title: string;
    titlefont: Partial<Font>;
    type: AxisType;
    autorange: true | false | 'reversed';
    rangemode: 'normal' | 'tozero' | 'nonnegative';
    range: any[];
    tickmode: 'auto' | 'linear' | 'array';
    nticks: number;
    tick0: number | string;
    dtick: number | string;
    tickvals: any[];
    ticktext: string[];
    ticks: 'outside' | 'inside' | '';
    mirror: true | 'ticks' | false | 'all' | 'allticks';
    ticklen: number;
    tickwidth: number;
    tickcolor: Color;
    showticklabels: boolean;
    showspikes: boolean;
    spikecolor: Color;
    spikethickness: number;
    categoryorder: 'trace' | 'category ascending' | 'category descending' | 'array';
    categoryarray: any[];
    tickfont: Partial<Font>;
    tickangle: number;
    tickprefix: string;
    showtickprefix: 'all' | 'first' | 'last' | 'none';
    ticksuffix: string;
    showticksuffix: 'all' | 'first' | 'last' | 'none';
    showexponent: 'all' | 'first' | 'last' | 'none';
    exponentformat: 'none' | 'e' | 'E' | 'power' | 'SI' | 'B';
    separatethousands: boolean;
    tickformat: string;
    hoverformat: string;
    showline: boolean;
    linecolor: Color;
    linewidth: number;
    showgrid: boolean;
    gridcolor: Color;
    gridwidth: number;
    zeroline: boolean;
    zerolinecolor: Color;
    zerolinewidth: number;
    calendar: Calendar;
}

export type Calendar = 'gregorian' | 'chinese' | 'coptic' | 'discworld' | 'ethiopian' | 'hebrew' | 'islamic' | 'julian' | 'mayan' |
    'nanakshahi' | 'nepali' | 'persian' | 'jalali' | 'taiwan' | 'thai' | 'ummalqura';

export interface LayoutAxis extends Axis {
    fixedrange: boolean;
    scaleanchor: '/^x([2-9]|[1-9][0-9]+)?$/' | '/^y([2-9]|[1-9][0-9]+)?$/';
    scaleratio: number;
    constrain: 'range' | 'domain';
    constraintoward: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom';
    spikedash: string;
    spikemode: string;
    anchor: 'free' | '/^x([2-9]|[1-9][0-9]+)?$/' | '/^y([2-9]|[1-9][0-9]+)?$/';
    side: 'top' | 'bottom' | 'left' | 'right';
    overlaying: 'free' | '/^x([2-9]|[1-9][0-9]+)?$/' | '/^y([2-9]|[1-9][0-9]+)?$/';
    layer: 'above traces' | 'below traces';
    domain: number[];
    position: number;
    rangeslider: Partial<RangeSlider>;
    rangeselector: Partial<RangeSelector>;
}

export interface SceneAxis extends Axis {
    spikesides: boolean;
    showbackground: boolean;
    backgroundcolor: Color;
    showaxeslabels: boolean;
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
	type: 'bar' | 'scatter' | 'scattergl' | 'scatter3d';
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
	'marker.sizemode': 'diameter' | 'area';
	'marker.showscale': boolean;
	'marker.line': Partial<ScatterMarkerLine>;
	'marker.colorbar': {}; // TODO
	mode: 'lines' | 'markers' | 'text' | 'lines+markers' | 'text+markers' | 'text+lines' | 'text+lines+markers' | 'none';
	hoveron: 'points' | 'fills';
	hoverinfo: 'text';
	fill: 'none' | 'tozeroy' | 'tozerox' | 'tonexty' | 'tonextx' | 'toself' | 'tonext';
	fillcolor: string;
	legendgroup: string;
	name: string;
	connectgaps: boolean;
}

export interface ScatterMarker {
	symbol: string | string[]; // Drawing.symbolList
	color: Color | number[];
	colorscale: string | string[];
	cauto: boolean;
	cmax: boolean;
	cmin: boolean;
	autocolorscale: boolean;
    reversescale: boolean;
	opacity: number | number[];
	size: number | number[];
	maxdisplayed: number;
	sizeref: number;
	sizemin: number;
	sizemode: 'diameter' | 'area';
	showscale: boolean;
	line: Partial<ScatterMarkerLine>;
	colorbar: {}; // TODO
    gradient: {}; // TODO
}

export interface ScatterMarkerLine {
    width: number | number[];
    color: Color;
    colorscale: string | string[];
    cauto: boolean;
    cmax: number;
    cmin: number;
    autocolorscale: boolean;
    reversescale: boolean;
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

export interface RangeSelector extends Label {
	buttons: Array<Partial<RangeSelectorButton>>;
	visible: boolean;
	x: number;
	xanchor: 'auto' | 'left' | 'center' | 'right';
	y: number;
	yanchor: 'auto' | 'top' | 'middle' | 'bottom';
	activecolor: string;
	borderwidth: number;
}

export interface Camera {
	up: Partial<Point>;
	center: Partial<Point>;
	eye: Partial<Point>;
}

export interface Label {
	bgcolor: string;
	bordercolor: string;
	font: Partial<Font>;
}

export interface Annotations extends Point, Label {
	visible: boolean;
	ax: number;
	ay: number;
	xanchor: 'auto' | 'left' | 'center' | 'right';
	xshift: number;
	yanchor: 'auto' | 'top' | 'middle' | 'bottom';
	yshift: number;
	text: string;
	textangle: string;
	width: number;
	height: number;
	opacity: number;
	align: 'left' | 'center' | 'right';
	valign: 'top' | 'middle' | 'bottom';
	borderpad: number;
	borderwidth: number;
	showarrow: boolean;
	arrowcolor: string;
	arrowhead: number;
	arrowsize: number;
	arrowwidth: number;
	standoff: number;
	hovertext: string;
	hoverlabel: Partial<Label>;
	captureevents: boolean;
}

export interface Scene {
	bgcolor: string;
	camera: Partial<Camera>;
	domain: Partial<Domain>;
	aspectmode: 'auto' | 'cube' | 'data' | 'manual';
	aspectratio: Partial<Point>;
	xaxis: Partial<SceneAxis>;
	yaxis: Partial<SceneAxis>;
	zaxis: Partial<SceneAxis>;
	dragmode: 'orbit' | 'turntable' | 'zoom' | 'pan' | false;
	hovermode: 'closest' | false;
	annotations: Partial<Annotations> | Array<Partial<Annotations>>;
	captureevents: boolean;
}

export interface Domain {
    x: number[];
    y: number[];
}
