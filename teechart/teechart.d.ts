/**
 * TeeChart(tm) for TypeScript
 *
 * v1.3 October 2012
 * Copyright(c) 2012 by Steema Software SL. All Rights Reserved.
 * http://www.steema.com
 *
 * Licensed with commercial and non-commercial attributes,
 * specifically: http://www.steema.com/licensing/html5
 *
 * TypeScript is a Microsoft product: www.typescriptlang.org
 *
 */

/**
 * @author <a href="mailto:david@steema.com">Steema Software</a>
 * @version 1.3
 */


module Tee {

  interface IPoint {
    x: number;
    y: number;
  }

  interface IRectangle {
    x: number;
    y: number;
    width: number;
    height: number;

    contains(point: IPoint): bool;
  }

  interface ITool {
    active: bool;
    chart: IChart;

    mousedown(event): bool;
    mousemove(event): bool;
    clicked(p:IPoint): bool;
    draw(): void;
  }

  interface IGradient {
    chart: IChart;
    visible: bool;

    colors: string[];
    direction: string;
    stops: number[];
    offset: IPoint;
  }

  interface IShadow {
    chart: IChart;
    visible: bool;
    blur:number;
    color: string;
    width:number;
    height:number;
  }

  interface IStroke {
    chart: IChart;
    fill: string;
    size: number;
    join: string;
    cap: string;
    dash: number[];
    gradient: IGradient;
  }

  interface IFont {
    chart: IChart;
    style: string;
    gradient: IGradient;
    fill: string;
    stroke: IStroke;
    shadow: IShadow;
    textAlign: string;
    baseLine: string;

    getSize():number;
    setSize(size:number):void;
  }

  interface IImage {
    url: string;
    chart: IChart;
    visible: bool;
  }

  interface IFormat {
    font: IFont;
    gradient: IGradient;
    shadow: IShadow;
    stroke: IStroke;
    round: IPoint;
    transparency: number;
    image: IImage;
    fill: string;

    textHeight(text:string): number;
    textWidth(text:string): number;
    drawText(bounds:IRectangle, text:string);
    rectangle(x:number, y:number, width:number, height:number);
    poligon(points:IPoint[]);
    ellipse(x:number, y:number, width:number, height:number);
  }

  interface IMargins {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }

  interface IAnnotation extends ITool {
    position: IPoint;
    margins: IMargins;
    items: IAnnotation[];
    bounds: IRectangle;
    visible: bool;
    transparent: bool;
    text: string;
    format: IFormat;

    add(text: string): IAnnotation;
    resize(): void;
    clicked(point: IPoint): bool;
    draw(): void;
  }

  interface IPanel {
    format: IFormat;
    transparent: bool;
    margins: IMargins;
  }

  interface ITitle extends IAnnotation {
    expand: bool;
    padding: number;
    transparent: bool;
  }

  interface IPalette {
    colors: string[];

    get(index: number): string;
  }

  interface IArrow extends IFormat {
    length: number;
    underline: bool;
  }

  interface IMarks extends IAnnotation {
    arrow: IArrow;
    series: ISeries;

    style: string;

    drawEvery: number;
    visible: bool;
  }

  interface ISeriesData {
    values: number[];
    labels: string[];
    source: any;
  }

  interface ICursor {
    cursor: string;
  }

  interface ISeries {
    data: ISeriesData;
    marks: IMarks;

    yMandatory: bool;
    horizAxis: string;
    vertAxis: string;

    format: IFormat;
    hover: IFormat;

    visible: bool;

    cursor: ICursor;
    over: number;

    palette: IPalette;
    colorEach: string;

    useAxes: bool;
    decimals: number;

    title: string;

    //refresh(failure: function): void;

    toPercent(index: number): string;
    markText(index: number): string;

    valueText(index: number): string;

    associatedToAxis(axis: IAxis): bool;

    bounds(rectangle: IRectangle): void;

    calc(index: number, position: IPoint): void;

    clicked(position: IPoint): number;

    minXValue(): number;
    maxXValue(): number;

    minYValue(): number;
    maxYValue(): number;

    count(): number;

    addRandom(count: number, range?: number, x?: bool): ISeries;


  }

  interface IAxisLabels {
    chart: IChart;
    format: IFormat;
    decimals: number;
    padding: number;
    separation: number; // %
    visible: bool;
    rotation: number;
    alternate: bool;
    maxWidth: number;

    labelStyle: string;
    dateFormat: string;

    getLabel(value: number): string;
    width(value: number): number;

  }

  interface IGrid {
    chart: IChart;
    format: IFormat;
    visible: bool;
    lineDash: bool;
  }

  interface ITicks {
    chart: IChart;
    stroke: IStroke;
    visible: bool;
    length: number;
  }

  interface IMinorTicks extends ITicks {
    count: number;
  }

  interface IAxisTitle extends IAnnotation {
    padding: number;
    transparent: bool;
  }

  interface IAxis {
    chart: IChart;
    visible: bool;
    inverted: bool;

    horizontal: bool;  // readonly
    otherSize: bool; // readonly
    bounds: IRectangle;  // readonly?

    position: number;
    format: IFormat;
    custom: bool; // readonly

    grid: IGrid;
    labels: IAxisLabels;
    ticks: ITicks;
    minorTicks: IMinorTicks;
    innerTicks: ITicks;

    title: IAxisTitle;

    automatic: bool;
    minimum: number;
    maximum: number;
    increment: number;
    log: bool;

    startPos: number;
    endPos: number;

    start: number; // %
    end: number; // %

    axisSize: number;

    scale: number;
    increm: number;

    calc(value: number): number;
    fromPos(position: number): number;
    fromSize(size: number): number;
    
    hasAnySeries(): bool;
    scroll(delta: number): void;
    setMinMax(minimum: number, maximum: number): void;
  }

  interface IAxes {
    chart: IChart;
    visible: bool;

    left: IAxis;
    top: IAxis;
    right: IAxis;
    bottom: IAxis;

    items: IAxis[];

    add(horizontal: bool, otherSide: bool): IAxis;
    //each(f: function): void;
  }

  interface ISymbol {
    chart: IChart;
    format: IFormat;
    width: number;
    height: number;
    padding: number;
    visible: bool;
  }

  interface ILegend {
    chart: IChart;

    transparent: bool;

    format: IFormat;
    title: IAnnotation;

    bounds: IRectangle;
    position: string;
    visible: bool;
    inverted: bool;
    padding: number;
    align: number;

    fontColor: bool;

    dividing: IStroke;
    over: number;
    symbol: ISymbol;

    itemHeight: number;
    innerOff: number;

    legendStyle: string;
    textStyle: string;

    availRows(): number;
    itemsCount(): number;
    totalWidth(): number;
    showValues(): bool;
    itemText(series: ISeries, index: number): string;
    isVertical(): bool;
  }

  interface IScroll {
    chart: IChart;
    active: bool;
    enabled: bool;
    direction: string;
    mouseButton: number;

    position: IPoint;
  }

  interface ISeriesList {
    chart: IChart;
    items: ISeries[];

    anyUsesAxes(): bool;
    clicked(position: IPoint): bool;
    //each(f: function): void;
    firstVisible(): ISeries;

  }

  interface ITools {
    chart: IChart;
    items: ITool[];

    add(tool: ITool): ITool;
  }

  interface IWall {
    format: IFormat;
    visible: bool;
    bounds: IRectangle;
  }

  interface IWalls {
    visible: bool;
    left: IWall;
    right: IWall;
    bottom: IWall;
    back: IWall;
  }

  interface IZoom {
    chart: IChart;
    active: bool;
    direction: string;
    enabled: bool;
    mouseButton: number;
    format: IFormat;

    reset(): void;
  }

  interface IChart {
    addSeries(series:ISeries): ISeries;
    draw(context?:CanvasRenderingContext2D);
  }

  // SERIES

  interface ICustomBar extends ISeries {
    sideMargins: number;
    useOrigin: bool;
    origin: number;

    offset: number;
    barSize: number;
    barStyle: string;

    stacked: string;
  }

  interface ISeriesPointer {
    chart: IChart;
    format: IFormat;
    visible: bool;
    colorEach: bool;
    style: string;
    width: number;
    height: number;
  }

  interface ICustomSeries extends ISeries {
    pointer: ISeriesPointer;

    stacked: string;
    stairs: bool;
  }

  interface ILine extends ICustomSeries {
    smooth: number;
  }

  interface ISmoothLine extends ILine {
    smooth: number;
  }

  interface IArea extends ISeries {
    useOrigin: bool;
    origin: number;
  }

  interface IPie extends ISeries {
    donut: number;
    rotation: number;
    sort: string;
    orderAscending: bool;
    explode: number[];
    concentric: bool;

    calcPos(angle: number, position: IPoint): void;
  }

  interface IBubbleData extends ISeriesData {
    radius: number[];
  }

  interface IBubble extends ICustomSeries {
    data: IBubbleData;
  }

  interface IGanttData extends ISeriesData {
    start: number[];
    x: number[];
    end: number[];
  }

  interface IGantt extends ISeries {
    data: IGanttData;
    dateFormat: string;
    colorEach: string;
    height: number;
    margin: IPoint;

    add(index: number, label: string, start: number, end: number): void;
    bounds(index: number, rectangle: IRectangle): void;
  }

  interface ICandleData extends ISeriesData {
    open: number[];
    close: number[];
    high: number[];
    low: number[];
  }

  interface ICandle extends ICustomSeries {
    data: ICandleData;
    higher: IFormat;
    lower: IFormat;
    style: string;
  }

  // TOOLS

  interface IDragTool extends ITool {
    series: ISeries;
  }

  interface ICursorTool extends ITool {
    direction: string;
    size: IPoint;

    followMouse: bool;
    dragging: number;

    format: IFormat;

    horizAxis: IAxis;
    vertAxis: IAxis;

    render: string;

    over(point: IPoint): bool;
    setRender(render: string): void;
  }

  interface IToolTip extends IAnnotation {
    animated: number;
    autoHide: bool;
    autoRedraw: bool;
    currentSeries: ISeries;
    currentIndex: number;
    delay: number;

    hide(): void;
    refresh(series: ISeries, index: number): void;
  }

  declare class Point implements IPoint {
    public x:number;
    public y:number;
  }

  declare class Chart implements IChart {
    //public aspect: IAspect;

    public axes: IAxes;
    public footer: ITitle;
    public legend: ILegend;
    public panel: IPanel;
    public scroll: IScroll;
    public series: ISeriesList;
    public title: ITitle;
    public tools: ITools;
    public walls: IWalls;
    public zoom: IZoom;

    public bounds: IRectangle;
    public canvas: HTMLCanvasElement;
    public chartRect: IRectangle;
    public palette: IPalette;

    constructor(canvas: string);
    addSeries(series: ISeries): ISeries;
    getSeries(index: number): ISeries;
    removeSeries(series:ISeries): void;

    draw(context?:CanvasRenderingContext2D);
    toImage(image: HTMLImageElement, format:string, quality:number): void;
  }

  // SERIES

  declare var Line: {
    prototype: ILine;
    new(values?:number[]): ILine;
  }

  declare var PointXY: {
    prototype: ICustomSeries;
    new(values?:number[]): ICustomSeries;
  }

  declare var Area: {
    prototype: IArea;
    new(values?:number[]): IArea;
  }

  declare var HorizArea: {
    prototype: IArea;
    new(values?:number[]): IArea;
  }

  declare var Bar: {
    prototype: ICustomBar;
    new(values?:number[]): ICustomBar;
  }

  declare var HorizBar: {
    prototype: ICustomBar;
    new(values?:number[]): ICustomBar;
  }

  declare var Pie: {
    prototype: IPie;
    new(values?:number[]): IPie;
  }

  declare var Donut: {
    prototype: IPie;
    new(values?:number[]): IPie;
  }

  declare var Bubble: {
    prototype: IBubble;
    new(values?:number[]): IBubble;
  }

  declare var Gantt: {
    prototype: IGantt;
    new(values?:number[]): IGantt;
  }

  declare var Volume: {
    prototype: ICustomBar;
    new(values?:number[]): ICustomBar;
  }

  declare var Candle: {
    prototype: ICandle;
    new(values?:number[]): ICandle;
  }

  // TOOLS

  declare var CursorTool: {
    prototype: ICursorTool;
    new(chart?: Chart): ICursorTool;
  }

  declare var DragTool: {
    prototype: IDragTool;
    new(chart?: Chart): IDragTool;
  }

  declare var ToolTip: {
    prototype: IToolTip;
    new(chart?: Chart): IToolTip;
  }
}
