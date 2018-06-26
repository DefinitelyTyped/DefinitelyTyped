// Type definitions for plotly.js 1.38
// Project: https://plot.ly/javascript/
// Definitions by: Chris Gervang <https://github.com/chrisgervang>
// 				Martin Duparc <https://github.com/martinduparc>
// 				Frederik Aalund <https://github.com/frederikaalund>
// 				taoqf <https://github.com/taoqf>
// 				Dadstart <https://github.com/Dadstart>
// 				Jared Szechy <https://github.com/szechyjs>
// 				Drew Diamantoukos <https://github.com/MercifulCode>
// 				Sooraj Pudiyadath <https://github.com/soorajpudiyadath>
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
  curveNumber: number;
  data: ScatterData;
  pointIndex: number;
  pointNumber: number;
  x: number;
  xaxis: LayoutAxis;
  y: number;
  yaxis: LayoutAxis;
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

export interface ClickAnnotationEvent {
	index: number;
	annotation: Annotations;
	fullAnnotation: Annotations;
	event: MouseEvent;
}

export interface PlotlyHTMLElement extends HTMLElement {
	on(event: 'plotly_click' | 'plotly_hover' | 'plotly_unhover', callback: (event: PlotMouseEvent) => void): void;
	on(event: 'plotly_selecting' | 'plotly_selected', callback: (event: PlotSelectionEvent) => void): void;
	on(event: 'plotly_restyle', callback: (data: PlotRestyleEvent) => void): void;
	on(event: 'plotly_relayout', callback: (event: PlotRelayoutEvent) => void): void;
	on(event: 'plotly_clickannotation', callback: (event: ClickAnnotationEvent) => void): void;
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
export function react(root: Root, data: Data[], layout?: Partial<Layout>, config?: Partial<Config>): Promise<PlotlyHTMLElement>;

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
    annotations: Array<Partial<Annotations>>;
    shapes: Array<Partial<Shape>>;
    images: Array<Partial<Image>>;
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

export type ModeBarDefaultButtons = 'lasso2d' | 'select2d' | 'sendDataToCloud' | 'autoScale2d' |
	'zoom2d' | 'pan2d' | 'zoomIn2d' | 'zoomOut2d' | 'autoScale2d' | 'resetScale2d' |
	'hoverClosestCartesian' | 'hoverCompareCartesian' | 'zoom3d' | 'pan3d' | 'orbitRotation' |
	'tableRotation' | 'resetCameraDefault3d' | 'resetCameraLastSave3d' | 'hoverClosest3d' |
	'zoomInGeo' | 'zoomOutGeo' | 'resetGeo' | 'hoverClosestGeo' | 'hoverClosestGl2d' |
	'hoverClosestPie' | 'toggleHover' | 'toImage' | 'resetViews' | 'toggleSpikelines';

export type ButtonClickEvent = (gd: PlotlyHTMLElement, ev: MouseEvent) => void;

export interface Icon {
	width: number;
	path: string;
	ascent: number;
	descent: number;
}

export interface ModeBarButton {
	/** name / id of the buttons (for tracking) */
    name: string;

	/**
	 * text that appears while hovering over the button,
	 * enter null, false or '' for no hover text
	 */
    title: string;

	/**
	 * svg icon object associated with the button
	 * can be linked to Plotly.Icons to use the default plotly icons
	 */
    icon: string | Icon;

	/** icon positioning */
    gravity?: string;

	/**
	 * click handler associated with the button, a function of
	 * 'gd' (the main graph object) and
	 * 'ev' (the event object)
	 */
    click: ButtonClickEvent;

	/**
	 * attribute associated with button,
	 * use this with 'val' to keep track of the state
	 */
    attr?: string;

	/** initial 'attr' value, can be a function of gd */
    val?: any;

	/** is the button a toggle button? */
	toggle?: boolean;
}

// Data

export type Datum = string | number | Date;
export type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;

export type Dash = 'solid' | 'dot' | 'dash' | 'longdash' | 'dashdot' | 'longdashdot';

export type Data = Partial<ScatterData>;
export type Color = string | Array<string | undefined | null> | Array<Array<string | undefined | null>>;

// Bar Scatter
export interface ScatterData {
	type: 'bar' | 'pointcloud' | 'scatter' | 'scattergl' | 'scatter3d' |'surface';
	x: Datum[] | Datum[][] | TypedArray;
	y: Datum[] | Datum[][] | TypedArray;
	z: Datum[] | Datum[][] | Datum[][][] | TypedArray;
	xy: Float32Array;
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
	'marker.sizemax': number;
	'marker.sizemin': number;
	'marker.sizemode': 'diameter' | 'area';
	'marker.showscale': boolean;
	'marker.line': Partial<ScatterMarkerLine>;
	'marker.colorbar': {}; // TODO
	mode: 'lines' | 'markers' | 'text' | 'lines+markers' | 'text+markers' | 'text+lines' | 'text+lines+markers' | 'none';
	hoveron: 'points' | 'fills';
	hoverinfo: 'all' | 'name' | 'none' | 'skip' | 'text' |
               'x' | 'x+text' | 'x+name' |
               'x+y' | 'x+y+text' | 'x+y+name' |
               'x+y+z' | 'x+y+z+text' | 'x+y+z+name' |
               'y+x' | 'y+x+text' | 'y+x+name' |
               'y+z' | 'y+z+text' | 'y+z+name' |
               'y+x+z' | 'y+x+z+text' | 'y+x+z+name' |
               'z+x' | 'z+x+text' | 'z+x+name' |
               'z+y+x' | 'z+y+x+text' | 'z+y+x+name' |
               'z+x+y' | 'z+x+y+text' | 'z+x+y+name';
	hoverlabel: Partial<Label>;
	fill: 'none' | 'tozeroy' | 'tozerox' | 'tonexty' | 'tonextx' | 'toself' | 'tonext';
	fillcolor: string;
	legendgroup: string;
	name: string;
	connectgaps: boolean;
}

/**
 * Any combination of "x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip".
 * examples: "x", "y", "x+y", "x+y+z", "all"
 * default: "all"
 */
export interface ScatterMarker {
	symbol: string | string[]; // Drawing.symbolList
	color: Color | number[];
	colorscale: string | string[] | Array<Array<(string | number)>>;
	cauto: boolean;
	cmax: number;
	cmin: number;
	autocolorscale: boolean;
	reversescale: boolean;
	opacity: number | number[];
	size: number | number[];
	maxdisplayed: number;
	sizeref: number;
	sizemax: number;
	sizemin: number;
	sizemode: 'diameter' | 'area';
	showscale: boolean;
	line: Partial<ScatterMarkerLine>;
	colorbar: {
        thicknessmode: 'fraction' | 'pixels',
        thickness: number,
        lenmode: 'fraction' | 'pixels',
        len: number,
        x: number,
        xanchor: 'left' | 'center' | 'right',
        xpad: number,
        y: number,
        yanchor: 'top' | 'middle' | 'bottom',
        ypad: number,
        outlinecolor: Color,
        outlinewidth: number,
        bordercolor: Color,
        borderwidth: Color,
        bgcolor: Color,
        tickmode: 'auto' | 'linear' | 'array',
        nticks: number,
        tick0: number | string,
        dtick: number | string,
        tickvals: Datum[] | Datum[][] | Datum[][][] | TypedArray,
        ticktext: Datum[] | Datum[][] | Datum[][][] | TypedArray,
        ticks: 'outside' | 'inside' | '',
        ticklen: number,
        tickwidth: number,
        tickcolor: Color,
        showticklabels: boolean,
        tickfont: {
            family: string,
            size: number,
            color: Color,
        },
        tickangle: number,
        tickformat: string,
        tickformatstops: {
            dtickrange: any[],
            value: string,
        },
        tickprefix: string,
        showtickprefix: 'all' | 'first' | 'last' | 'none',
        ticksuffix: string,
        showticksuffix: 'all' | 'first' | 'last' | 'none',
        separatethousands: boolean,
        exponentformat: 'none' | 'e' | 'E' | 'power' | 'SI' | 'B',
        showexponent: 'all' | 'first' | 'last' | 'none',
        title: string,
        titlefont: {
            family: string,
            size: number,
            color: Color,
        },
        titleside: 'right' | 'top' | 'bottom',
        tickvalssrc: any,
        ticktextsrc: any,
    };
	gradient: {
        type: 'radial' | 'horizontal' | 'vertical' | 'none',
        color: Color,
        typesrc: any,
        colorsrc: any,
    };
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

export interface Edits {
	annotationPosition: boolean;
	annotationTail: boolean;
	annotationText: boolean;
	axisTitleText: boolean;
	colorbarPosition: boolean;
	colorbarTitleText: boolean;
	legendPosition: boolean;
	legendText: boolean;
	shapePosition: boolean;
	titleText: boolean;
}

export interface Config {
	/** no interactivity, for export or image generation */
	staticPlot: boolean;

	/** we can edit titles, move annotations, etc */
	editable: boolean;
	edits: Partial<Edits>;

	/** DO autosize once regardless of layout.autosize (use default width or height values otherwise) */
	autosizable: boolean;

	/** set the length of the undo/redo queue */
	queueLength: number;

	/** if we DO autosize, do we fill the container or the screen? */
	fillFrame: boolean;

	/** if we DO autosize, set the frame margins in percents of plot size */
	frameMargins: number;

	/** mousewheel or two-finger scroll zooms the plot */
	scrollZoom: boolean;

	/** double click interaction (false, 'reset', 'autosize' or 'reset+autosize') */
	doubleClick: 'reset+autosize' | 'reset' | 'autosize' | false;

	/** new users see some hints about interactivity */
	showTips: boolean;

	/** enable axis pan/zoom drag handles */
	showAxisDragHandles: boolean;

	/** enable direct range entry at the pan/zoom drag points (drag handles must be enabled above) */
	showAxisRangeEntryBoxes: boolean;

	/** link to open this plot in plotly */
	showLink: boolean;

	/** if we show a link, does it contain data or just link to a plotly file? */
	sendData: boolean;

	/** text appearing in the sendData link */
	linkText: string;

	/** false or function adding source(s) to linkText <text> */
	showSources: boolean;

	/** display the mode bar (true, false, or 'hover') */
	displayModeBar: 'hover' | boolean;

	/** remove mode bar button by name (see ./components/modebar/buttons.js for the list of names) */
	modeBarButtonsToRemove: ModeBarDefaultButtons[];

	/** add mode bar button using config objects (see ./components/modebar/buttons.js for list of arguments) */
	modeBarButtonsToAdd: ModeBarDefaultButtons[] | ModeBarButton[];

	/**
	 * fully custom mode bar buttons as nested array, where the outer
	 * arrays represents button groups, and the inner arrays have
	 * buttons config objects or names of default buttons
	 * (see ./components/modebar/buttons.js for more info)
	 */
	modeBarButtons: ModeBarDefaultButtons[][] | ModeBarButton[][] | false;

	/** add the plotly logo on the end of the mode bar */
	displaylogo: boolean;

	/** increase the pixel ratio for Gl plot images */
	plotGlPixelRatio: number;

	/**
	 * function to add the background color to a different container
	 * or 'opaque' to ensure there's white behind it
	 */
	setBackground: string | 'opaque' | 'transparent';

	/** URL to topojson files used in geo charts */
	topojsonURL: string;

	/**
	 * Mapbox access token (required to plot mapbox trace types)
	 * If using an Mapbox Atlas server, set this option to '',
	 * so that plotly.js won't attempt to authenticate to the public Mapbox server.
	 */
	mapboxAccessToken: string;

	/**
	 * Turn all console logging on or off (errors will be thrown)
	 * This should ONLY be set via Plotly.setPlotConfig
	 */
	logging: boolean | 0 | 1 | 2;

	/** Set global transform to be applied to all traces with no specification needed */
	globalTransforms: any[];

	/** Which localization should we use? Should be a string like 'en' or 'en-US' */
	locale: string;
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

export interface Annotations extends Label {
  /** Determines whether or not this annotation is visible. */
  visible: boolean;

  /**
   * Sets the text associated with this annotation.
   * Plotly uses a subset of HTML tags to do things like
   * newline (<br>), bold (<b></b>), italics (<i></i>),
   * hyperlinks (<a href='...'></a>). Tags <em>, <sup>, <sub>
   * <span> are also supported.
   */
  text: string;

  /** Sets the angle at which the `text` is drawn with respect to the horizontal. */
  textangle: string;

  /**
   * Sets an explicit width for the text box. null (default) lets the
   * text set the box width. Wider text will be clipped.
   * There is no automatic wrapping; use <br> to start a new line.
   */
  width: number;

  /**
   * Sets an explicit height for the text box. null (default) lets the
   * text set the box height. Taller text will be clipped.
   */
  height: number;

  /** Sets the opacity of the annotation (text + arrow). */
  opacity: number;

  /**
   * Sets the horizontal alignment of the `text` within the box.
   * Has an effect only if `text` spans more two or more lines
   * (i.e. `text` contains one or more <br> HTML tags) or if an
   * explicit width is set to override the text width.
   */
  align: 'left' | 'center' | 'right';

  /**
   * Sets the vertical alignment of the `text` within the box.
   * Has an effect only if an explicit height is set to override the text height.
   */
  valign: 'top' | 'middle' | 'bottom';

  /** Sets the padding (in px) between the `text` and the enclosing border. */
  borderpad: number;

  /** Sets the width (in px) of the border enclosing the annotation `text`. */
  borderwidth: number;

  /**
   * Determines whether or not the annotation is drawn with an arrow.
   * If *true*, `text` is placed near the arrow's tail.
   * If *false*, `text` lines up with the `x` and `y` provided.
   */
  showarrow: boolean;

  /** Sets the color of the annotation arrow. */
  arrowcolor: string;

  /** Sets the end annotation arrow head style. */
  arrowhead: number;

  /** Sets the start annotation arrow head style. */
  startarrowhead: number;

  /** Sets the annotation arrow head position. */
  arrowside: 'end' | 'start';

  /**
   * Sets the size of the end annotation arrow head, relative to `arrowwidth`.
   * A value of 1 (default) gives a head about 3x as wide as the line.
   */
  arrowsize: number;

  /**
   * Sets the size of the start annotation arrow head, relative to `arrowwidth`.
   * A value of 1 (default) gives a head about 3x as wide as the line.
   */
  startarrowsize: number;

  /** Sets the width (in px) of annotation arrow line. */
  arrowwidth: number;

  /**
   * Sets a distance, in pixels, to move the end arrowhead away from the
   * position it is pointing at, for example to point at the edge of
   * a marker independent of zoom. Note that this shortens the arrow
   * from the `ax` / `ay` vector, in contrast to `xshift` / `yshift`
   * which moves everything by this amount.
   */
  standoff: number;

  /**
   * Sets a distance, in pixels, to move the start arrowhead away from the
   * position it is pointing at, for example to point at the edge of
   * a marker independent of zoom. Note that this shortens the arrow
   * from the `ax` / `ay` vector, in contrast to `xshift` / `yshift`
   * which moves everything by this amount.
   */
  startstandoff: number;

  /**
   * Sets the x component of the arrow tail about the arrow head.
   * If `axref` is `pixel`, a positive (negative)
   * component corresponds to an arrow pointing
   * from right to left (left to right).
   * If `axref` is an axis, this is an absolute value on that axis,
   * like `x`, NOT a relative value.
   */
  ax: number;

  /**
   * Sets the y component of the arrow tail about the arrow head.
   * If `ayref` is `pixel`, a positive (negative)
   * component corresponds to an arrow pointing
   * from bottom to top (top to bottom).
   * If `ayref` is an axis, this is an absolute value on that axis,
   * like `y`, NOT a relative value.
   */
  ay: number;

  /**
   * Indicates in what terms the tail of the annotation (ax,ay)
   * is specified. If `pixel`, `ax` is a relative offset in pixels
   * from `x`. If set to an x axis id (e.g. *x* or *x2*), `ax` is
   * specified in the same terms as that axis. This is useful
   * for trendline annotations which should continue to indicate
   * the correct trend when zoomed.
   */
  axref: 'pixel';

  /**
   * Indicates in what terms the tail of the annotation (ax,ay)
   * is specified. If `pixel`, `ay` is a relative offset in pixels
   * from `y`. If set to a y axis id (e.g. *y* or *y2*), `ay` is
   * specified in the same terms as that axis. This is useful
   * for trendline annotations which should continue to indicate
   * the correct trend when zoomed.
   */
  ayref: 'pixel';

  /**
   * Sets the annotation's x coordinate axis.
   * If set to an x axis id (e.g. *x* or *x2*), the `x` position refers to an x coordinate
   * If set to *paper*, the `x` position refers to the distance from
   * the left side of the plotting area in normalized coordinates
   * where 0 (1) corresponds to the left (right) side.
   */
  xref: 'paper' | 'x';

  /**
   * Sets the annotation's x position.
   * If the axis `type` is *log*, then you must take the log of your desired range.
   * If the axis `type` is *date*, it should be date strings, like date data,
   * though Date objects and unix milliseconds will be accepted and converted to strings.
   * If the axis `type` is *category*, it should be numbers, using the scale where each
   * category is assigned a serial number from zero in the order it appears.
   */
  x: number | string;

  /**
   * Sets the text box's horizontal position anchor
   * This anchor binds the `x` position to the *left*, *center* or *right* of the annotation.
   * For example, if `x` is set to 1, `xref` to *paper* and `xanchor` to *right* then the
   * right-most portion of the annotation lines up with the right-most edge of the plotting area.
   * If *auto*, the anchor is equivalent to *center* for data-referenced annotations or if there
   * is an arrow, whereas for paper-referenced with no arrow, the anchor picked corresponds to the closest side.
   */
  xanchor: 'auto' | 'left' | 'center' | 'right';

  /**
   * Shifts the position of the whole annotation and arrow to the
   * right (positive) or left (negative) by this many pixels.
   */
  xshift: number;

  /**
   * Sets the annotation's y coordinate axis.
   * If set to an y axis id (e.g. *y* or *y2*), the `y` position refers to an y coordinate
   * If set to *paper*, the `y` position refers to the distance from
   * the bottom of the plotting area in normalized coordinates
   * where 0 (1) corresponds to the bottom (top).
   */
  yref: 'paper' | 'y';

  /**
   * Sets the annotation's y position.
   * If the axis `type` is *log*, then you must take the log of your desired range.
   * If the axis `type` is *date*, it should be date strings, like date data,
   * though Date objects and unix milliseconds will be accepted and converted to strings.
   * If the axis `type` is *category*, it should be numbers, using the scale where each
   * category is assigned a serial number from zero in the order it appears.
   */
  y: number | string;

  /**
   * Sets the text box's vertical position anchor
   * This anchor binds the `y` position to the *top*, *middle* or *bottom* of the annotation.
   * For example, if `y` is set to 1, `yref` to *paper* and `yanchor` to *top* then the
   * top-most portion of the annotation lines up with the top-most edge of the plotting area.
   * If *auto*, the anchor is equivalent to *middle* for data-referenced annotations or if
   * there is an arrow, whereas for paper-referenced with no arrow, the anchor picked
   * corresponds to the closest side.
   */
  yanchor: 'auto' | 'top' | 'middle' | 'bottom';

  /**
   * Shifts the position of the whole annotation and arrow up
   * (positive) or down (negative) by this many pixels.
   */
  yshift: number;

  /**
   * Makes this annotation respond to clicks on the plot.
   * If you click a data point that exactly matches the `x` and `y` values of this annotation,
   * and it is hidden (visible: false), it will appear. In *onoff* mode, you must click the same
   * point again to make it disappear, so if you click multiple points, you can show multiple
   * annotations. In *onout* mode, a click anywhere else in the plot (on another data point or not)
   * will hide this annotation. If you need to show/hide this annotation in response to different
   * `x` or `y` values, you can set `xclick` and/or `yclick`. This is useful for example to label
   * the side of a bar. To label markers though, `standoff` is preferred over `xclick` and `yclick`.
   */
  clicktoshow: false | 'onoff' | 'onout';

  /**
   * Toggle this annotation when clicking a data point whose `x` value
   * is `xclick` rather than the annotation's `x` value.
   */
  xclick: any;

  /**
   * Toggle this annotation when clicking a data point whose `y` value
   * is `yclick` rather than the annotation's `y` value.
   */
  yclick: any;

  /**
   * Sets text to appear when hovering over this annotation.
   * If omitted or blank, no hover label will appear.
   */
  hovertext: string;

  hoverlabel: Partial<Label>;

  /**
   * Determines whether the annotation text box captures mouse move and click events,
   * or allows those events to pass through to data points in the plot that may be
   * behind the annotation. By default `captureevents` is *false* unless `hovertext`
   * is provided. If you use the event `plotly_clickannotation` without `hovertext`
   * you must explicitly enable `captureevents`.
   */
	captureevents: boolean;
}

export interface Image {
  visible: boolean;
  source: string;
  layer: 'above' | 'below';
  sizex: number;
  sizey: number;
  sizing: 'fill' | 'contain' | 'stretch';
  opacity: number;
  x: number | string;
  y: number | string;
  xanchor: 'left' | 'center' | 'right';
  yanchor: 'top' | 'middle' | 'bottom';
  xref: 'paper' | 'x';
  yref: 'paper' | 'y';
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
