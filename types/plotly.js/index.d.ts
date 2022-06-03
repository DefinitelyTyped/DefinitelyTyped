// Type definitions for plotly.js 1.54
// Project: https://plot.ly/javascript/, https://github.com/plotly/plotly.js
// Definitions by: Chris Gervang <https://github.com/chrisgervang>
//                 Martin Duparc <https://github.com/martinduparc>
//                 Frederik Aalund <https://github.com/frederikaalund>
//                 taoqf <https://github.com/taoqf>
//                 Dadstart <https://github.com/Dadstart>
//                 Jared Szechy <https://github.com/szechyjs>
//                 Sooraj Pudiyadath <https://github.com/soorajpudiyadath>
//                 Jon Freedman <https://github.com/jonfreedman>
//                 Megan Riel-Mehan <https://github.com/meganrm>
//                 Josh Miles <https://github.com/milesjos>
//                 Pramod Mathai  <https://github.com/skippercool>
//                 Michael Adams <https://github.com/mtadams007>
//                 Michael Arnett <https://github.com/marnett-git>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Brandon Mitchell <https://github.com/brammitch>
//                 Jessica Blizzard <https://github.com/blizzardjessica>
//                 Oleg Shilov <https://github.com/olegshilov>
//                 Pablo Gracia <https://github.com/PabloGracia>
//                 Jeffrey van Gogh <https://github.com/jvgogh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as _d3 from 'd3';
import { BoxPlotData, BoxPlotMarker } from './lib/traces/box';
import { ViolinData } from './lib/traces/violin';
import { OhclData } from './lib/traces/ohcl';
import { CandlestickData } from './lib/traces/candlestick';
import { PieData } from './lib/traces/pie';

export as namespace Plotly;
export { BoxPlotData, ViolinData, OhclData, CandlestickData, PieData };

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
    data: PlotData;
    pointIndex: number;
    pointNumber: number;
    x: number;
    xaxis: LayoutAxis;
    y: number;
    yaxis: LayoutAxis;
}

export interface PlotDatum {
    curveNumber: number;
    data: PlotData;
    customdata: Datum;
    pointIndex: number;
    pointNumber: number;
    x: Datum;
    xaxis: LayoutAxis;
    y: Datum;
    yaxis: LayoutAxis;
}

export interface PlotMouseEvent {
    points: PlotDatum[];
    event: MouseEvent;
}

export interface PlotHoverEvent extends PlotMouseEvent {
    xvals: Datum[];
    yvals: Datum[];
}

export interface PlotCoordinate {
    x: number;
    y: number;
    pointNumber: number;
}

export interface SelectionRange {
    x: number[];
    y: number[];
}

export type PlotSelectedData = Partial<PlotDatum>;

export interface PlotSelectionEvent {
    points: PlotDatum[];
    range?: SelectionRange | undefined;
    lassoPoints?: SelectionRange | undefined;
}

export interface PlotRestyleEventUpdate {
    [key: string]: any;
}

export type PlotRestyleEvent = [PlotRestyleEventUpdate, number[]];

export interface PlotScene {
    center: Point;
    eye: Point;
    up: Point;
}

export interface PlotRelayoutEvent extends Partial<Layout> {
    'xaxis.range[0]'?: number | undefined;
    'xaxis.range[1]'?: number | undefined;
    'yaxis.range[0]'?: number | undefined;
    'yaxis.range[1]'?: number | undefined;
    'xaxis.autorange'?: boolean | undefined;
    'yaxis.autorange'?: boolean | undefined;
}

export interface ClickAnnotationEvent {
    index: number;
    annotation: Annotations;
    fullAnnotation: Annotations;
    event: MouseEvent;
}

export interface FrameAnimationEvent {
    name: string;
    frame: Frame;
    animation: {
        frame: {
            duration: number;
            redraw: boolean;
        };
        transition: Transition;
    };
}

export interface LegendClickEvent {
    event: MouseEvent;
    node: PlotlyHTMLElement;
    curveNumber: number;
    expandedIndex: number;
    data: Data[];
    layout: Partial<Layout>;
    frames: Frame[];
    config: Partial<Config>;
    fullData: Data[];
    fullLayout: Partial<Layout>;
}

export interface MapboxCenter {
    lon: number;
    lat: number;
}

export interface MapboxSymbol {
    icon: string;
    iconsize: number;
    text: string;
    placement: 'point' | 'line' | 'line-center';
    textfont: Partial<Font>;
    textposition:
        | 'top left'
        | 'top center'
        | 'top right'
        | 'middle center'
        | 'bottom left'
        | 'bottom center'
        | 'bottom right';
}
export interface MapboxLayers {
    visible: true;
    sourcetype: 'geojson' | 'vecotr' | 'raster' | 'image';
    source: number | string;
    sourcelayer: string;
    sourceattribution: string;
    type: 'circle' | 'line' | 'fill' | 'symbol' | 'raster';
    coordinates: number | string;
    below: string;
    color: Color;
    opacity: number;
    minzoom: number;
    maxzoom: number;
    circle: { radius: number };
    line: Partial<ShapeLine>;
    fill: { outlinecolor: Color };
    symbol: Partial<MapboxSymbol>;
    name: string;
    templateitemname: string;
}
export interface Mapbox {
    domain: Partial<Domain>;
    accesstoken: string;
    style: number | string;
    center: Partial<MapboxCenter>;
    zoom: number;
    bearing: number;
    pitch: number;
    layers: Array<Partial<MapboxLayers>>;
    uirevision: number | string;
}

export interface SliderChangeEvent {
    slider: Slider;
    step: SliderStep;
    interaction: boolean;
    previousActive: number;
}

export interface SliderStartEvent {
    slider: Slider;
}

export interface SliderEndEvent {
    slider: Slider;
    step: SliderStep;
}

export interface SunburstClickEvent {
    event: MouseEvent;
    nextLevel: string;
    points: SunburstPlotDatum[];
}

export interface SunburstPlotDatum {
    color: number;
    curveNumber: number;
    data: Data;
    entry: string;
    fullData: Data;
    hovertext: string;
    id: string;
    label: string;
    parent: string;
    percentEntry: number;
    percentParent: number;
    percentRoot: number;
    pointNumber: number;
    root: string;
    value: number;
}

export interface BeforePlotEvent {
    data: Data[];
    layout: Partial<Layout>;
    config: Partial<Config>;
}

export interface PlotlyHTMLElement extends HTMLElement {
    on(event: 'plotly_click' | 'plotly_unhover', callback: (event: PlotMouseEvent) => void): void;
    on(event: 'plotly_hover', callback: (event: PlotHoverEvent) => void): void;
    on(event: 'plotly_selecting' | 'plotly_selected', callback: (event: PlotSelectionEvent) => void): void;
    on(event: 'plotly_restyle', callback: (data: PlotRestyleEvent) => void): void;
    on(event: 'plotly_relayout' | 'plotly_relayouting', callback: (event: PlotRelayoutEvent) => void): void;
    on(event: 'plotly_clickannotation', callback: (event: ClickAnnotationEvent) => void): void;
    on(event: 'plotly_animatingframe', callback: (event: FrameAnimationEvent) => void): void;
    on(event: 'plotly_legendclick' | 'plotly_legenddoubleclick', callback: (event: LegendClickEvent) => boolean): void;
    on(event: 'plotly_sliderchange', callback: (event: SliderChangeEvent) => void): void;
    on(event: 'plotly_sliderend', callback: (event: SliderEndEvent) => void): void;
    on(event: 'plotly_sliderstart', callback: (event: SliderStartEvent) => void): void;
    on(event: 'plotly_sunburstclick', callback: (event: SunburstClickEvent) => void): void;
    on(event: 'plotly_event', callback: (data: any) => void): void;
    on(event: 'plotly_beforeplot', callback: (event: BeforePlotEvent) => boolean): void;
    on(
        event:
            | 'plotly_afterexport'
            | 'plotly_afterplot'
            | 'plotly_animated'
            | 'plotly_animationinterrupted'
            | 'plotly_autosize'
            | 'plotly_beforeexport'
            | 'plotly_deselect'
            | 'plotly_doubleclick'
            | 'plotly_framework'
            | 'plotly_redraw'
            | 'plotly_transitioning'
            | 'plotly_transitioninterrupted',
        callback: () => void,
    ): void;
    removeAllListeners: (handler: string) => void;
}

export interface ToImgopts {
    format: 'jpeg' | 'png' | 'webp' | 'svg';
    width: number;
    height: number;
    scale?: number | undefined;
}

export interface DownloadImgopts {
    format: 'jpeg' | 'png' | 'webp' | 'svg';
    width: number;
    height: number;
    filename: string;
}

export interface PolarLayout {
    domain: Partial<Domain>;
    sector: number[];
    hole: number;
    bgcolor: Color;
    radialaxis: Partial<LayoutAxis>;
    angularaxis: Partial<LayoutAxis>;
    gridshape: 'circular' | 'linear';
    uirevision: string | number;
}

export interface PlotlyDataLayoutConfig {
    data: Data[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
}

export type Root = string | HTMLElement;

export type RootOrData = Root | PlotlyDataLayoutConfig;

export function newPlot(
    root: Root,
    data: Data[],
    layout?: Partial<Layout>,
    config?: Partial<Config>,
): Promise<PlotlyHTMLElement>;
export function plot(
    root: Root,
    data: Data[],
    layout?: Partial<Layout>,
    config?: Partial<Config>,
): Promise<PlotlyHTMLElement>;
export function relayout(root: Root, layout: Partial<Layout>): Promise<PlotlyHTMLElement>;
export function redraw(root: Root): Promise<PlotlyHTMLElement>;
export function purge(root: Root): void;
export const d3: typeof _d3;
export function restyle(root: Root, aobj: Data, traces?: number[] | number): Promise<PlotlyHTMLElement>;
export function update(
    root: Root,
    traceUpdate: Data,
    layoutUpdate: Partial<Layout>,
    traces?: number[] | number,
): Promise<PlotlyHTMLElement>;
export function addTraces(
    root: Root,
    traces: Data | Data[],
    newIndices?: number[] | number,
): Promise<PlotlyHTMLElement>;
export function deleteTraces(root: Root, indices: number[] | number): Promise<PlotlyHTMLElement>;
export function moveTraces(
    root: Root,
    currentIndices: number[] | number,
    newIndices?: number[] | number,
): Promise<PlotlyHTMLElement>;
export function extendTraces(
    root: Root,
    update: Data | Data[],
    indices: number | number[],
    maxPoints?: number,
): Promise<PlotlyHTMLElement>;
export function prependTraces(
    root: Root,
    update: Data | Data[],
    indices: number | number[],
): Promise<PlotlyHTMLElement>;
export function toImage(root: RootOrData, opts?: ToImgopts): Promise<string>;
export function downloadImage(root: RootOrData, opts: DownloadImgopts): Promise<string>;
export function react(
    root: Root,
    data: Data[],
    layout?: Partial<Layout>,
    config?: Partial<Config>,
): Promise<PlotlyHTMLElement>;
export function addFrames(root: Root, frames: Array<Partial<Frame>>): Promise<PlotlyHTMLElement>;
export function deleteFrames(root: Root, frames: number[]): Promise<PlotlyHTMLElement>;

// Layout
export interface Layout {
    colorway: string[];
    title:
        | string
        | Partial<{
              text: string;
              font: Partial<Font>;
              xref: 'container' | 'paper';
              yref: 'container' | 'paper';
              x: number;
              y: number;
              xanchor: 'auto' | 'left' | 'center' | 'right';
              yanchor: 'auto' | 'top' | 'middle' | 'bottom';
              pad: Partial<Padding>;
          }>;
    titlefont: Partial<Font>;
    autosize: boolean;
    showlegend: boolean;
    paper_bgcolor: Color;
    plot_bgcolor: Color;
    separators: string;
    hidesources: boolean;
    xaxis: Partial<LayoutAxis>;
    xaxis2: Partial<LayoutAxis>;
    xaxis3: Partial<LayoutAxis>;
    xaxis4: Partial<LayoutAxis>;
    xaxis5: Partial<LayoutAxis>;
    xaxis6: Partial<LayoutAxis>;
    xaxis7: Partial<LayoutAxis>;
    xaxis8: Partial<LayoutAxis>;
    xaxis9: Partial<LayoutAxis>;
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
    hovermode: 'closest' | 'x' | 'y' | 'x unified' | 'y unified' | false;
    hoverdistance: number;
    hoverlabel: Partial<HoverLabel>;
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
    'xaxis.title': string;
    'yaxis.title': string;
    ternary: {}; // TODO
    geo: {}; // TODO
    mapbox: Partial<Mapbox>;
    subplot: string;
    radialaxis: Partial<Axis>;
    angularaxis: {}; // TODO
    dragmode: 'zoom' | 'pan' | 'select' | 'lasso' | 'orbit' | 'turntable' | false;
    orientation: number;
    annotations: Array<Partial<Annotations>>;
    shapes: Array<Partial<Shape>>;
    images: Array<Partial<Image>>;
    updatemenus: {}; // TODO
    sliders: Array<Partial<Slider>>;
    legend: Partial<Legend>;
    font: Partial<Font>;
    scene: Partial<Scene>;
    barmode: 'stack' | 'group' | 'overlay' | 'relative';
    barnorm: '' | 'fraction' | 'percent';
    bargap: number;
    bargroupgap: number;
    boxmode: 'group' | 'overlay';
    selectdirection: 'h' | 'v' | 'd' | 'any';
    hiddenlabels: string[];
    grid: Partial<{
        rows: number;
        roworder: 'top to bottom' | 'bottom to top';
        columns: number;
        subplots: string[];
        xaxes: string[];
        yaxes: string[];
        pattern: 'independent' | 'coupled';
        xgap: number;
        ygap: number;
        domain: Partial<{
            x: number[];
            y: number[];
        }>;
        xside: 'bottom' | 'bottom plot' | 'top plot' | 'top';
        yside: 'left' | 'left plot' | 'right plot' | 'right';
    }>;
    polar: Partial<PolarLayout>;
    polar2: Partial<PolarLayout>;
    polar3: Partial<PolarLayout>;
    polar4: Partial<PolarLayout>;
    polar5: Partial<PolarLayout>;
    polar6: Partial<PolarLayout>;
    polar7: Partial<PolarLayout>;
    polar8: Partial<PolarLayout>;
    polar9: Partial<PolarLayout>;
    transition: Transition;
    template: Template;
    clickmode: 'event' | 'select' | 'event+select' | 'none';
    uirevision: number | string;
    datarevision: number | string;
    editrevision: number | string;
    selectionrevision: number | string;
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

export type AxisType = '-' | 'linear' | 'log' | 'date' | 'category' | 'multicategory';

export type DTickValue = number | string;

export interface TickFormatStop {
    /**
     * Determines whether or not this stop is used. If `false`,
     * this stop is ignored even within its `dtickrange`.
     */
    enabled: boolean;
    /**
     * Range [`min`, `max`], where `min`, `max` - dtick values
     * which describe some zoom level, it is possible to omit `min` or `max`
     * value by passing `null`
     */
    dtickrange: [DTickValue | null, DTickValue | null];
    /**
     * dtickformat for described zoom level, the same as `tickformat`
     */
    value: string;
    /**
     * When used in a template, named items are created in the output figure
     * in addition to any items the figure already has in this array.
     * You can modify these items in the output figure by making
     * your own item with `templateitemname` matching this `name`
     * alongside your modifications (including `visible: false` or `enabled: false` to hide it).
     * Has no effect outside of a template.
     */
    name: string;
    /**
     * Used to refer to a named item in this array in the template.
     * Named items from the template will be created even without
     * a matching item in the input figure, but you can modify one by
     * making an item with `templateitemname` matching its `name`,
     * alongside your modifications (including `visible: false` or `enabled: false` to hide it).
     * If there is no template or no matching item, this item will be hidden
     * unless you explicitly show it with `visible: true`.
     */
    templateitemname: string;
}

export interface Axis {
    /**
     * A single toggle to hide the axis while preserving interaction like dragging.
     * Default is true when a cheater plot is present on the axis, otherwise
     * false
     */
    visible: boolean;
    /**
     * Sets default for all colors associated with this axis
     * all at once: line, font, tick, and grid colors.
     * Grid color is lightened by blending this with the plot background
     * Individual pieces can override this.
     */
    color: Color;
    title: string | Partial<DataTitle>;
    /**
     * Former `titlefont` is now the sub-attribute `font` of `title`.
     * To customize title font properties, please use `title.font` now.
     */
    titlefont: Partial<Font>;
    type: AxisType;
    autorange: true | false | 'reversed';
    /**
     * 'If *normal*, the range is computed in relation to the extrema
     * of the input data.
     * If *tozero*`, the range extends to 0,
     * regardless of the input data
     * If *nonnegative*, the range is non-negative,
     * regardless of the input data.
     * Applies only to linear axes.
     */
    rangemode: 'normal' | 'tozero' | 'nonnegative';
    range: any[];
    /**
     * Determines whether or not this axis is zoom-able.
     * If true, then zoom is disabled.
     */
    fixedrange: boolean;

    /**
     * Ticks
     */
    tickmode: 'auto' | 'linear' | 'array';
    nticks: number;
    tick0: number | string;
    dtick: DTickValue;
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
    /**
     * Specifies the ordering logic for the case of categorical variables.
     * By default, plotly uses *trace*, which specifies the order that is present in the data supplied.
     * Set `categoryorder` to *category ascending* or *category descending* if order should be determined by
     * the alphanumerical order of the category names.
     * Set `categoryorder` to *array* to derive the ordering from the attribute `categoryarray`. If a category
     * is not found in the `categoryarray` array, the sorting behavior for that attribute will be identical to
     * the *trace* mode. The unspecified categories will follow the categories in `categoryarray`.
     * Set `categoryorder` to *total ascending* or *total descending* if order should be determined by the
     * numerical order of the values.
     * Similarly, the order can be determined by the min, max, sum, mean or median of all the values.
     */
    categoryorder:
        | 'trace'
        | 'category ascending'
        | 'category descending'
        | 'array'
        | 'total ascending'
        | 'total descending'
        | 'min ascending'
        | 'min descending'
        | 'max ascending'
        | 'max descending'
        | 'sum ascending'
        | 'sum descending'
        | 'mean ascending'
        | 'mean descending'
        | 'median ascending'
        | 'median descending';
    categoryarray: any[];
    tickfont: Partial<Font>;
    tickangle: 'auto' | number;
    tickprefix: string;
    /**
     * If `all`, all tick labels are displayed with a prefix.
     * If `first`, only the first tick is displayed with a prefix.
     * If `last`, only the last tick is displayed with a suffix.
     * If `none`, tick prefixes are hidden.
     */
    showtickprefix: 'all' | 'first' | 'last' | 'none';
    /**
     * Sets a tick label suffix.
     */
    ticksuffix: string;
    /**
     * Same as `showtickprefix` but for tick suffixes.
     */
    showticksuffix: 'all' | 'first' | 'last' | 'none';
    /**
     * If `all`, all exponents are shown besides their significands.
     * If `first`, only the exponent of the first tick is shown.
     * If `last`, only the exponent of the last tick is shown.
     * If `none`, no exponents appear.
     */
    showexponent: 'all' | 'first' | 'last' | 'none';
    /**
     * Determines a formatting rule for the tick exponents.
     * For example, consider the number 1,000,000,000.
     * If `none`, it appears as *1,000,000,000*.
     * If `e`, *1e+9*.
     * If `E`, *1E+9*.
     * If `power`, *1x10^9* (with 9 in a super script).
     * If `SI`, *1G*.
     * If `B`, *1B*.
     */
    exponentformat: 'none' | 'e' | 'E' | 'power' | 'SI' | 'B';
    /**
     * 'If `true`, even 4-digit integers are separated
     */
    separatethousands: boolean;
    /**
     * Sets the tick label formatting rule using d3 formatting mini-languages
     * which are very similar to those in Python.
     * For numbers, see: https://github.com/d3/d3-3.x-api-reference/blob/master/Formatting.md#d3_format
     * And for dates see: https://github.com/d3/d3-3.x-api-reference/blob/master/Time-Formatting.md#format
     * We add one item to d3's date formatter: `%{n}f` for fractional seconds with n digits.
     * For example, `"2016-10-13 09:15:23.456"` with tickformat `"%H~%M~%S.%2f"` would display `"09~15~23.46"`
     */
    tickformat: string;
    /**
     * Sets the hover text formatting rule using d3 formatting mini-languages
     * which are very similar to those in Python.
     * For numbers, see: https://github.com/d3/d3-3.x-api-reference/blob/master/Formatting.md#d3_format
     * And for dates see: https://github.com/d3/d3-3.x-api-reference/blob/master/Time-Formatting.md#format
     * We add one item to d3's date formatter: `%{n}f` for fractional seconds with n digits.
     * For example, `"2016-10-13 09:15:23.456"` with tickformat `"%H~%M~%S.%2f"` would display "09~15~23.46"
     */
    hoverformat: string;
    calendar: Calendar;
    /**
     * Array of `Partial<TickFormatStop>` objects.
     */
    tickformatstops: Array<Partial<TickFormatStop>>;
    spikedash: string;
    /**
     * Determines the drawing mode for the spike line.
     * If `toaxis`, the line is drawn from the data point to the axis the
     * series is plotted on.
     * If `across`, the line is drawn across the entire plot area, and
     * supercedes *toaxis*.
     * If `marker`, then a marker dot is drawn on the axis the series is
     * plotted on
     */
    spikemode:
        | 'toaxis'
        | 'across'
        | 'marker'
        | 'toaxis+across'
        | 'toaxis+across+marker'
        | 'across+marker'
        | 'toaxis+marker';
    /**
     * Determines whether spikelines are stuck to the cursor or to the closest datapoints.
     */
    spikesnap: 'data' | 'cursor' | 'hovered data';

    /**
     * Lines and Grids
     */

    /**
     * Determines whether or not a line bounding this axis is drawn.
     */
    showline: boolean;
    /**
     * Sets the axis line color
     */
    linecolor: Color;
    /**
     * Sets the width (in px) of the axis line.
     */
    linewidth: number;
    /**
     * Determines whether or not grid lines are drawn.
     * If `true`, the grid lines are drawn at every tick mark.
     */
    showgrid: boolean;
    /**
     * Sets the color of the grid lines.
     */
    gridcolor: Color;
    /**
     * Sets the width (in px) of the grid lines.
     */
    gridwidth: number;
    /**
     * Determines whether or not a line is drawn at along the 0 value
     * of this axis.
     * If `true`, the zero line is drawn on top of the grid lines.
     */
    zeroline: boolean;
    /**
     * Sets the line color of the zero line.
     */
    zerolinecolor: Color;
    /**
     * Sets the width (in px) of the zero line.
     */
    zerolinewidth: number;
    /**
     * Determines whether or not a dividers are drawn
     * between the category levels of this axis.
     * Only has an effect on *multicategory* axes.
     */
    showdividers: boolean;
    /**
     * Sets the color of the dividers
     * Only has an effect on *multicategory* axes.
     */
    dividercolor: Color;
    /**
     * Sets the width (in px) of the dividers
     * Only has an effect on *multicategory* axes.
     */
    dividerwidth: number;
}

export type Calendar =
    | 'gregorian'
    | 'chinese'
    | 'coptic'
    | 'discworld'
    | 'ethiopian'
    | 'hebrew'
    | 'islamic'
    | 'julian'
    | 'mayan'
    | 'nanakshahi'
    | 'nepali'
    | 'persian'
    | 'jalali'
    | 'taiwan'
    | 'thai'
    | 'ummalqura';

export type XAxisName = 'x' | 'x2' | 'x3' | 'x4' | 'x5' | 'x6' | 'x7' | 'x8' | 'x9' | 'x10' | 'x11';
export type YAxisName = 'y' | 'y2' | 'y3' | 'y4' | 'y5' | 'y6' | 'y7' | 'y8' | 'y9' | 'y10' | 'y11';
export type AxisName = XAxisName | YAxisName;

export interface LayoutAxis extends Axis {
    fixedrange: boolean;
    scaleanchor: AxisName;
    scaleratio: number;
    constrain: 'range' | 'domain';
    constraintoward: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom';
    anchor: 'free' | AxisName;
    side: 'top' | 'bottom' | 'left' | 'right' | 'clockwise' | 'counterclockwise';
    overlaying: 'free' | AxisName;
    layer: 'above traces' | 'below traces';
    domain: number[];
    position: number;
    rotation: number;
    direction: 'counterclockwise' | 'clockwise';
    rangeslider: Partial<RangeSlider>;
    rangeselector: Partial<RangeSelector>;
    automargin: boolean;
    autotick: boolean;
    angle: any;
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
    xref: 'paper' | XAxisName;
    xsizemode: 'scaled' | 'pixel';
    xanchor: number | string;
    yref: 'paper' | YAxisName;
    ysizemode: 'scaled' | 'pixel';
    yanchor: number | string;
    x0: Datum;
    y0: Datum;
    x1: Datum;
    y1: Datum;
    fillcolor: string;
    name: string;
    templateitemname: string;
    opacity: number;
    line: Partial<ShapeLine>;
}

export interface Margin {
    t: number;
    b: number;
    l: number;
    r: number;
    pad: number;
}

export type ModeBarDefaultButtons =
    | 'lasso2d'
    | 'select2d'
    | 'sendDataToCloud'
    | 'zoom2d'
    | 'pan2d'
    | 'zoomIn2d'
    | 'zoomOut2d'
    | 'autoScale2d'
    | 'resetScale2d'
    | 'hoverClosestCartesian'
    | 'hoverCompareCartesian'
    | 'zoom3d'
    | 'pan3d'
    | 'orbitRotation'
    | 'tableRotation'
    | 'resetCameraDefault3d'
    | 'resetCameraLastSave3d'
    | 'hoverClosest3d'
    | 'zoomInGeo'
    | 'zoomOutGeo'
    | 'resetGeo'
    | 'hoverClosestGeo'
    | 'hoverClosestGl2d'
    | 'hoverClosestPie'
    | 'toggleHover'
    | 'toImage'
    | 'resetViews'
    | 'toggleSpikelines';

export type ButtonClickEvent = (gd: PlotlyHTMLElement, ev: MouseEvent) => void;

export interface Icon {
    height?: number | undefined;
    width?: number | undefined;
    ascent?: number | undefined;
    descent?: number | undefined;
    name?: string | undefined;
    path?: string | undefined;
    svg?: string | undefined;
    transform?: string | undefined;
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
    gravity?: string | undefined;

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
    attr?: string | undefined;

    /** initial 'attr' value, can be a function of gd */
    val?: any;

    /** is the button a toggle button? */
    toggle?: boolean | undefined;
}

export interface GaugeLine {
    color: Color;
    width: number;
}
export interface Threshold {
    line: Partial<GaugeLine>;
    value: number;
    thickness: number;
}

export interface GaugeBar {
    color: Color;
    line: Partial<GaugeLine>;
    thickness: number;
}
export interface Gauge {
    shape: 'angular' | 'bullet';
    bar: Partial<GaugeBar>;
    bgcolor: Color;
    bordercolor: Color;
    borderwidth: number;
    axis: Partial<Axis>;
    steps: Array<{ range: number[]; color: Color }>;
    threshold: Partial<Threshold>;
}

export interface Delta {
    reference: number;
    position: 'top' | 'bottom' | 'left' | 'right';
    relative: boolean;
    valueformat: string;
    increasing: {
        symbol: string;
        color: Color;
    };
    decreasing: {
        symbol: string;
        color: Color;
    };
}

export interface DataTitle {
    text: string;
    font: Partial<Font>;
    standoff: number;
    position:
        | 'top left'
        | 'top center'
        | 'top right'
        | 'middle center'
        | 'bottom left'
        | 'bottom center'
        | 'bottom right';
}

export interface PlotNumber {
    valueformat: string;
    font: Partial<Font>;
    prefix: string;
    suffix: string;
}

export interface Template {
    data?: { [type in PlotType]?: Partial<PlotData> } | undefined;
    layout?: Partial<Layout> | undefined;
}

// Data

export type Datum = string | number | Date | null;
export type TypedArray =
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Uint8ClampedArray
    | Float32Array
    | Float64Array;

export interface ErrorOptions {
    visible: boolean;
    symmetric: boolean;
    color: Color;
    thickness: number;
    width: number;
    opacity: number;
}

export type ErrorBar = Partial<ErrorOptions> &
    (
        | {
              type: 'constant' | 'percent';
              value: number;
              valueminus?: number | undefined;
          }
        | {
              type: 'data';
              array: Datum[];
              arrayminus?: Datum[] | undefined;
          }
    );

export type Dash = 'solid' | 'dot' | 'dash' | 'longdash' | 'dashdot' | 'longdashdot';
export type PlotType =
    | 'bar'
    | 'barpolar'
    | 'box'
    | 'candlestick'
    | 'carpet'
    | 'choropleth'
    | 'choroplethmapbox'
    | 'cone'
    | 'contour'
    | 'contourcarpet'
    | 'contourgl'
    | 'densitymapbox'
    | 'funnel'
    | 'funnelarea'
    | 'heatmap'
    | 'heatmapgl'
    | 'histogram'
    | 'histogram2d'
    | 'histogram2dcontour'
    | 'image'
    | 'indicator'
    | 'isosurface'
    | 'mesh3d'
    | 'ohlc'
    | 'parcats'
    | 'parcoords'
    | 'pie'
    | 'pointcloud'
    | 'sankey'
    | 'scatter'
    | 'scatter3d'
    | 'scattercarpet'
    | 'scattergeo'
    | 'scattergl'
    | 'scattermapbox'
    | 'scatterpolar'
    | 'scatterpolargl'
    | 'scatterternary'
    | 'splom'
    | 'streamtube'
    | 'sunburst'
    | 'surface'
    | 'table'
    | 'treemap'
    | 'violin'
    | 'volume'
    | 'waterfall';

export type Data =
    | Partial<PlotData>
    | Partial<BoxPlotData>
    | Partial<ViolinData>
    | Partial<OhclData>
    | Partial<CandlestickData>
    | Partial<PieData>;

export type Color =
    | string
    | number
    | Array<string | number | undefined | null>
    | Array<Array<string | number | undefined | null>>;
export type ColorScale = string | string[] | Array<[number, string]>;
export type DataTransform = Partial<Transform>;
export type ScatterData = PlotData;

// Bar Scatter
export interface PlotData {
    type: PlotType;
    x: Datum[] | Datum[][] | TypedArray;
    y: Datum[] | Datum[][] | TypedArray;
    z: Datum[] | Datum[][] | Datum[][][] | TypedArray;
    i: TypedArray;
    j: TypedArray;
    k: TypedArray;
    xy: Float32Array;
    error_x: ErrorBar;
    error_y: ErrorBar;
    xaxis: string;
    yaxis: string;
    text: string | string[];
    lat: Datum[];
    lon: Datum[];
    line: Partial<ScatterLine>;
    'line.color': Color;
    'line.width': number;
    'line.dash': Dash;
    'line.shape': 'linear' | 'spline' | 'hv' | 'vh' | 'hvh' | 'vhv';
    'line.smoothing': number;
    'line.simplify': boolean;
    marker: Partial<PlotMarker> | Partial<BoxPlotMarker>;
    'marker.symbol': MarkerSymbol | MarkerSymbol[];
    'marker.color': Color;
    'marker.colorscale': ColorScale | ColorScale[];
    'marker.opacity': number | number[];
    'marker.size': number | number[] | number[][];
    'marker.maxdisplayed': number;
    'marker.sizeref': number;
    'marker.sizemax': number;
    'marker.sizemin': number;
    'marker.sizemode': 'diameter' | 'area';
    'marker.showscale': boolean;
    'marker.line': Partial<ScatterMarkerLine>;
    'marker.line.color': Color;
    'marker.line.colorscale': ColorScale | ColorScale[];
    'marker.colorbar': {}; // TODO
    'marker.pad.t': number;
    'marker.pad.b': number;
    'marker.pad.l': number;
    'marker.pad.r': number;
    mode:
        | 'lines'
        | 'markers'
        | 'text'
        | 'lines+markers'
        | 'text+markers'
        | 'text+lines'
        | 'text+lines+markers'
        | 'none'
        | 'gauge'
        | 'number'
        | 'delta'
        | 'number+delta'
        | 'gauge+number'
        | 'gauge+number+delta'
        | 'gauge+delta';
    histfunc: 'count' | 'sum' | 'avg' | 'min' | 'max';
    hoveron: 'points' | 'fills';
    hoverinfo:
        | 'all'
        | 'name'
        | 'none'
        | 'skip'
        | 'text'
        | 'x'
        | 'x+text'
        | 'x+name'
        | 'x+y'
        | 'x+y+text'
        | 'x+y+name'
        | 'x+y+z'
        | 'x+y+z+text'
        | 'x+y+z+name'
        | 'y'
        | 'y+name'
        | 'y+x'
        | 'y+text'
        | 'y+x+text'
        | 'y+x+name'
        | 'y+z'
        | 'y+z+text'
        | 'y+z+name'
        | 'y+x+z'
        | 'y+x+z+text'
        | 'y+x+z+name'
        | 'z'
        | 'z+x'
        | 'z+x+text'
        | 'z+x+name'
        | 'z+y+x'
        | 'z+y+x+text'
        | 'z+y+x+name'
        | 'z+x+y'
        | 'z+x+y+text'
        | 'z+x+y+name';
    hoverlabel: Partial<HoverLabel>;
    hovertemplate: string | string[];
    hovertext: string | string[];
    textinfo:
        | 'label'
        | 'label+text'
        | 'label+value'
        | 'label+percent'
        | 'label+text+value'
        | 'label+text+percent'
        | 'label+value+percent'
        | 'text'
        | 'text+value'
        | 'text+percent'
        | 'text+value+percent'
        | 'value'
        | 'value+percent'
        | 'percent'
        | 'none';
    textposition:
        | 'top left'
        | 'top center'
        | 'top right'
        | 'middle left'
        | 'middle center'
        | 'middle right'
        | 'bottom left'
        | 'bottom center'
        | 'bottom right'
        | 'inside'
        | 'outside'
        | 'auto'
        | 'none';
    textfont: Partial<Font>;
    fill: 'none' | 'tozeroy' | 'tozerox' | 'tonexty' | 'tonextx' | 'toself' | 'tonext';
    fillcolor: string;
    showlegend: boolean;
    legendgroup: string;
    parents: string[];
    name: string;
    stackgroup: string;
    groupnorm: '' | 'fraction' | 'percent';
    stackgaps: 'infer zero' | 'interpolate';
    connectgaps: boolean;
    visible: boolean | 'legendonly';
    delta: Partial<Delta>;
    gauge: Partial<Gauge>;
    number: Partial<PlotNumber>;
    transforms: DataTransform[];
    orientation: 'v' | 'h';
    width: number | number[];
    boxmean: boolean | 'sd';
    boxpoints: 'all' | 'outliers' | 'suspectedoutliers' | false;
    jitter: number;
    pointpos: number;
    opacity: number;
    showscale: boolean;
    colorscale: ColorScale;
    zsmooth: 'fast' | 'best' | false;
    zmin: number;
    zmax: number;
    ygap: number;
    xgap: number;
    transpose: boolean;
    autobinx: boolean;
    xbins: {
        start: number | string;
        end: number | string;
        size: number | string;
    };
    value: number;
    values: Datum[];
    labels: Datum[];
    direction: 'clockwise' | 'counterclockwise';
    hole: number;
    rotation: number;
    theta: Datum[];
    r: Datum[];
    customdata: Datum[] | Datum[][];
    selectedpoints: Datum[];
    domain: Partial<{
        row: number;
        column: number;
        x: number[];
        y: number[];
    }>;
    title: Partial<DataTitle>;
    branchvalues: 'total' | 'remainder';
    ids: string[];
    level: string;
    cliponaxis: boolean;
    automargin: boolean;
    locationmode: 'ISO-3' | 'USA-states' | 'country names' | 'geojson-id';
    locations: Datum[];
    reversescale: boolean;
    colorbar: Partial<ColorBar>;
}

/**
 * These interfaces are based on attribute descriptions in
 * https://github.com/plotly/plotly.js/tree/9d6144304308fc3007f0facf2535d38ea3e9b26c/src/transforms
 */
export interface TransformStyle {
    target: number | string | number[] | string[];
    value: Partial<PlotData>;
}

export interface TransformAggregation {
    target: string;
    func?:
        | 'count'
        | 'sum'
        | 'avg'
        | 'median'
        | 'mode'
        | 'rms'
        | 'stddev'
        | 'min'
        | 'max'
        | 'first'
        | 'last'
        | undefined;
    funcmode?: 'sample' | 'population' | undefined;
    enabled?: boolean | undefined;
}

export interface Transform {
    type: 'aggregate' | 'filter' | 'groupby' | 'sort';
    enabled: boolean;
    target: number | string | number[] | string[];
    operation: string;
    aggregations: TransformAggregation[];
    preservegaps: boolean;
    groups: string | number[] | string[];
    nameformat: string;
    styles: TransformStyle[];
    value: any;
    order: 'ascending' | 'descending';
}

export interface ColorBar {
    thicknessmode: 'fraction' | 'pixels';
    thickness: number;
    lenmode: 'fraction' | 'pixels';
    len: number;
    x: number;
    xanchor: 'left' | 'center' | 'right';
    xpad: number;
    y: number;
    yanchor: 'top' | 'middle' | 'bottom';
    ypad: number;
    outlinecolor: Color;
    outlinewidth: number;
    bordercolor: Color;
    borderwidth: Color;
    bgcolor: Color;
    tickmode: 'auto' | 'linear' | 'array';
    nticks: number;
    tick0: number | string;
    dtick: DTickValue;
    tickvals: Datum[] | Datum[][] | Datum[][][] | TypedArray;
    ticktext: Datum[] | Datum[][] | Datum[][][] | TypedArray;
    ticks: 'outside' | 'inside' | '';
    ticklen: number;
    tickwidth: number;
    tickcolor: Color;
    showticklabels: boolean;
    tickfont: Font;
    tickangle: 'auto' | number;
    tickformat: string;
    tickformatstops: Array<Partial<TickFormatStop>>;
    tickprefix: string;
    showtickprefix: 'all' | 'first' | 'last' | 'none';
    ticksuffix: string;
    showticksuffix: 'all' | 'first' | 'last' | 'none';
    separatethousands: boolean;
    exponentformat: 'none' | 'e' | 'E' | 'power' | 'SI' | 'B';
    showexponent: 'all' | 'first' | 'last' | 'none';
    title: string;
    titlefont: Font;
    titleside: 'right' | 'top' | 'bottom';
    tickvalssrc: any;
    ticktextsrc: any;
}

export type MarkerSymbol = string | number | Array<string | number>;

/**
 * Any combination of "x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip".
 * examples: "x", "y", "x+y", "x+y+z", "all"
 * default: "all"
 */
export interface PlotMarker {
    symbol: MarkerSymbol;
    color?: Color | Color[] | undefined;
    colors?: Color[] | undefined;
    colorscale?: ColorScale | undefined;
    cauto?: boolean | undefined;
    cmax?: number | undefined;
    cmin?: number | undefined;
    autocolorscale?: boolean | undefined;
    reversescale?: boolean | undefined;
    opacity: number | number[];
    size: number | number[];
    maxdisplayed?: number | undefined;
    sizeref?: number | undefined;
    sizemax?: number | undefined;
    sizemin?: number | undefined;
    sizemode?: 'diameter' | 'area' | undefined;
    showscale?: boolean | undefined;
    line: Partial<ScatterMarkerLine>;
    pad?: Partial<Padding> | undefined;
    width?: number | undefined;
    colorbar?: Partial<ColorBar> | undefined;
    gradient?:
        | {
              type: 'radial' | 'horizontal' | 'vertical' | 'none';
              color: Color;
              typesrc: any;
              colorsrc: any;
          }
        | undefined;
}

export type ScatterMarker = PlotMarker;

export interface ScatterMarkerLine {
    width: number | number[];
    color: Color;
    cauto?: boolean | undefined;
    cmax?: number | undefined;
    cmin?: number | undefined;
    cmid?: number | undefined;
    colorscale?: ColorScale | undefined;
    autocolorscale?: boolean | undefined;
    reversescale?: boolean | undefined;
    coloraxis?: string | undefined;
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
    /**
     * HTML font family - the typeface that will be applied by the web browser.
     * The web browser will only be able to apply a font if it is available on the system
     * which it operates. Provide multiple font families, separated by commas, to indicate
     * the preference in which to apply fonts if they aren't available on the system.
     * The plotly service (at https://plot.ly or on-premise) generates images on a server,
     * where only a select number of fonts are installed and supported.
     * These include *Arial*, *Balto*, *Courier New*, *Droid Sans*, *Droid Serif*,
     * *Droid Sans Mono*, *Gravitas One*, *Old Standard TT*, *Open Sans*, *Overpass*,
     * *PT Sans Narrow*, *Raleway*, *Times New Roman*.
     * @default "Arial, sans-serif"
     */
    family: string;
    /**
     * number greater than or equal to 1
     * @default 13
     */
    size: number;
    color: Color;
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
    /** override the defaults for the toImageButton */
    toImageButtonOptions: Partial<{
        filename: string;
        scale: number;
        format: 'png' | 'svg' | 'jpeg' | 'webp';
        height: number;
        width: number;
    }>;

    /** no interactivity, for export or image generation */
    staticPlot: boolean;

    /**
     * When set it determines base URL for the 'Edit in Chart Studio' `showEditInChartStudio`/`showSendToCloud` mode bar button and the showLink/sendData on-graph link.
     * To enable sending your data to Chart Studio Cloud, you need to set both `plotlyServerURL` to 'https://chart-studio.plotly.com' and also set `showSendToCloud` to true.
     * @default ''
     */
    plotlyServerURL: string;

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

    /**
     * Should we include a ModeBar button, labeled "Edit in Chart Studio",
     * that sends this chart to chart-studio.plotly.com (formerly plot.ly)
     * or another plotly server as specified by `plotlyServerURL` for editing, export, etc?
     * Prior to version 1.43.0 this button was included by default, now it is opt-in using this flag.
     * Note that this button can (depending on `plotlyServerURL` being set) send your data to an external server.
     * However that server does not persist your data until you arrive at the Chart Studio and explicitly click "Save".
     * @default false
     */
    showSendToCloud: boolean;

    /**
     * Same as `showSendToCloud`, but use a pencil icon instead of a floppy-disk.
     * Note that if both `showSendToCloud` and `showEditInChartStudio` are turned, only `showEditInChartStudio` will be honored.
     * @default false
     */
    showEditInChartStudio: boolean;

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
    modeBarButtons: Array<ModeBarDefaultButtons[] | ModeBarButton[]> | false;

    /** add the plotly logo on the end of the mode bar */
    displaylogo: boolean;

    /** increase the pixel ratio for Gl plot images */
    plotGlPixelRatio: number;

    /**
     * function to add the background color to a different container
     * or 'opaque' to ensure there's white behind it
     */
    setBackground: ((gd: PlotlyHTMLElement, bgColor: string) => void) | 'opaque' | 'transparent';

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

    /** Make the chart responsive to window size */
    responsive: boolean;
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
    /** Sets the background color of all hover labels on graph. */
    bgcolor: string;

    /** Sets the border color of all hover labels on graph. */
    bordercolor: string;

    /** Sets the default hover label font used by all traces on the graph. */
    font: Partial<Font>;
}

export interface HoverLabel extends Label {
    /**
     * Sets the horizontal alignment of the text content within hover label box.
     * @default "auto"
     */
    align: 'left' | 'right' | 'auto';

    /**
     * Sets the default length (in number of characters) of the trace name
     * in the hover labels for all traces.
     * -1 shows the whole name regardless of length.
     * @default 15
     */
    namelength: number;
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
    axref: 'pixel' | XAxisName;

    /**
     * Indicates in what terms the tail of the annotation (ax,ay)
     * is specified. If `pixel`, `ay` is a relative offset in pixels
     * from `y`. If set to a y axis id (e.g. *y* or *y2*), `ay` is
     * specified in the same terms as that axis. This is useful
     * for trendline annotations which should continue to indicate
     * the correct trend when zoomed.
     */
    ayref: 'pixel' | YAxisName;

    /**
     * Sets the annotation's x coordinate axis.
     * If set to an x axis id (e.g. *x* or *x2*), the `x` position refers to an x coordinate
     * If set to *paper*, the `x` position refers to the distance from
     * the left side of the plotting area in normalized coordinates
     * where 0 (1) corresponds to the left (right) side.
     */
    xref: 'paper' | XAxisName;

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
    yref: 'paper' | YAxisName;

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

    hoverlabel: Partial<HoverLabel>;

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
    xref: 'paper' | XAxisName;
    yref: 'paper' | YAxisName;
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
    row: number;
    column: number;
}

export interface Frame {
    /**
     * An identifier that specifies the group to which the frame belongs,
     * used by animate to select a subset of frames.
     */
    group: string;
    /**
     * A label by which to identify the frame
     */
    name: string;
    /**
     * A list of trace indices that identify the respective traces in the
     * data attribute
     */
    traces: number[];
    /**
     * The name of the frame into which this frame's properties are merged
     * before applying. This is used to unify properties and avoid needing
     * to specify the same values for the same properties in multiple frames.
     */
    baseframe: string;
    /**
     * A list of traces this frame modifies. The format is identical to the
     * normal trace definition.
     */
    data: Data[];
    /**
     * Layout properties which this frame modifies. The format is identical
     * to the normal layout definition.
     */
    layout: Partial<Layout>;
}

export interface Transition {
    /**
     * Sets the duration of the slider transition
     */
    duration: number;
    /**
     * Sets the easing function of the slider transition
     */
    easing:
        | 'linear'
        | 'quad'
        | 'cubic'
        | 'sin'
        | 'exp'
        | 'circle'
        | 'elastic'
        | 'back'
        | 'bounce'
        | 'linear-in'
        | 'quad-in'
        | 'cubic-in'
        | 'sin-in'
        | 'exp-in'
        | 'circle-in'
        | 'elastic-in'
        | 'back-in'
        | 'bounce-in'
        | 'linear-out'
        | 'quad-out'
        | 'cubic-out'
        | 'sin-out'
        | 'exp-out'
        | 'circle-out'
        | 'elastic-out'
        | 'back-out'
        | 'bounce-out'
        | 'linear-in-out'
        | 'quad-in-out'
        | 'cubic-in-out'
        | 'sin-in-out'
        | 'exp-in-out'
        | 'circle-in-out'
        | 'elastic-in-out'
        | 'back-in-out'
        | 'bounce-in-out';
    /**
     * Determines whether the figure's layout or traces smoothly transitions during updates that make both traces
     * and layout change. Default is "layout first".
     */
    ordering?: 'layout first' | 'traces first' | undefined;
}

export interface SliderStep {
    /**
     * Determines whether or not this step is included in the slider.
     */
    visible: boolean;
    /**
     * Sets the Plotly method to be called when the slider value is changed.
     * If the `skip` method is used, the API slider will function as normal
     * but will perform no API calls and will not bind automatically to state
     * updates. This may be used to create a component interface and attach to
     * slider events manually via JavaScript.
     */
    method: 'animate' | 'relayout' | 'restyle' | 'skip' | 'update';
    /**
     * Sets the arguments values to be passed to the Plotly
     * method set in `method` on slide.
     */
    args: any[];
    /**
     * Sets the text label to appear on the slider
     */
    label: string;
    /**
     * Sets the value of the slider step, used to refer to the step programatically.
     * Defaults to the slider label if not provided.
     */
    value: string;
    /**
     * When true, the API method is executed. When false, all other behaviors are the same
     * and command execution is skipped. This may be useful when hooking into, for example,
     * the `plotly_sliderchange` method and executing the API command manually without losing
     * the benefit of the slider automatically binding to the state of the plot through the
     * specification of `method` and `args`.
     */
    execute: boolean;
}

export interface Padding {
    /**
     * The amount of padding (in px) along the top of the component.
     */
    t: number;
    /**
     * The amount of padding (in px) on the right side of the component.
     */
    r: number;
    /**
     * The amount of padding (in px) along the bottom of the component.
     */
    b: number;
    /**
     * The amount of padding (in px) on the left side of the component.
     */
    l: number;
    editType: 'arraydraw';
}

export interface Slider {
    /**
     * Determines whether or not the slider is visible.
     */
    visible: boolean;
    /**
     * Determines which button (by index starting from 0) is
     * considered active.
     */
    active: number;
    steps: Array<Partial<SliderStep>>;
    /**
     * Determines whether this slider length
     * is set in units of plot *fraction* or in *pixels.
     * Use `len` to set the value.
     */
    lenmode: 'fraction' | 'pixels';
    /**
     * Sets the length of the slider
     * This measure excludes the padding of both ends.
     * That is, the slider's length is this length minus the
     * padding on both ends.
     */
    len: number;
    /**
     * Sets the x position (in normalized coordinates) of the slider.
     */
    x: number;
    /**
     * Sets the y position (in normalized coordinates) of the slider.
     */
    y: number;
    /**
     * Set the padding of the slider component along each side.
     */
    pad: Partial<Padding>;
    /**
     * Sets the slider's horizontal position anchor.
     * This anchor binds the `x` position to the *left*, *center*
     * or *right* of the range selector.
     */
    xanchor: 'auto' | 'left' | 'center' | 'right';
    /**
     * Sets the slider's vertical position anchor
     * This anchor binds the `y` position to the *top*, *middle*
     * or *bottom* of the range selector.
     */
    yanchor: 'auto' | 'top' | 'middle' | 'bottom';
    transition: Transition;
    currentvalue: Partial<CurrentValue>;
    /**
     * Sets the font of the slider step labels.
     */
    font: Font;
    /**
     * Sets the background color of the slider grip
     * while dragging.
     */
    activebgcolor: Color;
    /**
     * Sets the background color of the slider.
     */
    bgcolor: Color;
    /**
     * Sets the color of the border enclosing the slider.
     */
    bordercolor: Color;
    /**
     * Sets the width (in px) of the border enclosing the slider.
     */
    borderwidth: number;
    /**
     * Sets the length in pixels of step tick marks
     */
    ticklen: number;
    /**
     * Sets the color of the border enclosing the slider.
     */
    tickcolor: Color;
    /**
     * Sets the tick width (in px).
     */
    tickwidth: number;
    /**
     * Sets the length in pixels of minor step tick marks
     */
    minorticklen: number;
}

export interface CurrentValue {
    /**
     * Shows the currently-selected value above the slider.
     */
    visible: boolean;
    /**
     * The alignment of the value readout relative to the length of the slider.
     */
    xanchor: 'left' | 'center' | 'right';
    /**
     * The amount of space, in pixels, between the current value label
     * and the slider.
     */
    offset: number;
    /**
     * When currentvalue.visible is true, this sets the prefix of the label.
     */
    prefix: string;
    /**
     * When currentvalue.visible is true, this sets the suffix of the label.
     */
    suffix: string;
    /**
     * Sets the font of the current value label text.
     */
    font: Partial<Font>;
}
