// Type definitions for DCJS
// Project: https://github.com/dc-js
// Definitions by: hans windhoff
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// this makes only sense together with d3 and crossfilter so you need the d3.d.ts and crossfilter.d.ts files

///<reference path="../d3/d3.d.ts" />
///<reference path="../crossfilter/crossfilter.d.ts" />



declare module dc {

  // helper for get/set situation
  interface IGetSet<T, V> {
    (): T;
    (T): V;
  }

  export interface IBaseChart<T> {
    width: IGetSet<number, T>;
    height: IGetSet<number, T>;
    minWidth: IGetSet<number, T>;
    minHeight: IGetSet<number, T>;
    dimension: IGetSet<number, T>;
    group: IGetSet<string, T>; // not sure here
    transitionDuration: IGetSet<number, T>;
    colors: IGetSet<string[], T>;
    keyAccessor: IGetSet<(d) => number, T>;
    valueAccessor: IGetSet<(d) => number, T>;
    label: IGetSet<(any) => string, T>;
    renderLabel: IGetSet<boolean, T>;
    renderlet: (fnctn: (T) => void) => T;
    title: IGetSet<(any) => string, T>;
    filter: IGetSet<any, T>;
    filterAll: () => void;
    expireCache: () => void;
    legend: (ILegendwidget) => T;
    chartID: () => number;
    options: (Object)=>void ;
    select: (selector: D3.Selection) => D3.Selection;
    selectAll: (selector: D3.Selection) => D3.Selection;
  }

  export interface IEvents {
    trigger(fnctn: () => void, delay?: number);
  }

  export var events: IEvents;

  export interface IListener<T> {
    on: (eventName: string, fnctn: (IChart) => void) => T;
  }

  export interface ImarginObj {
    top: number;
    right: number;
    bottom: number;
    left: number;
    
  }

  export interface IMarginable<T> {
    margins: IGetSet<ImarginObj, T>;
  }

  // abstract interfaces  
  export interface IAbstractColorChart<T> {
    colorDomain: IGetSet<number[], T>;
  }
  export interface IAbstractStackableChart<T> {
    stack: (group, name?, retriever?) => T;
  }

  export interface IAbstractCoordinateGridChart<T> {
    x: IGetSet<any, T>;
    y: IGetSet<any, T>;
    elasticY: IGetSet<boolean, T>;
    xAxis: IGetSet<D3.Svg.Axis, T>;
    yAxis: IGetSet<D3.Svg.Axis, T>;
    yAxisPadding: IGetSet<number, T>;
    xAxisPadding: IGetSet<number, T>;
    renderHorizontalGridLines: IGetSet<boolean, T>;
    
  }

  export interface IAbstractBubblechart<T> {
    r: IGetSet<number, T>;
    radiusValueAccessor: IGetSet<(d) => number, T>;
  }



  // function interfaces
  export interface columnFunction {
    (any): any;
  }
  export interface sortbyFunction {
    (any): any;
  }
  export interface orderFunction {
    <T>(a: T, b: T): number;
  }


  // chart interfaces  
  export interface ILegendwidget {
    x: IGetSet<number, number>;
    y: IGetSet<number, number>;
    gap: IGetSet<number, number>;
    itemHeight: IGetSet<number, number>;
    horizontal: IGetSet<boolean, boolean>;
    legendWidth: IGetSet<number, number>;
    itemWidth: IGetSet<number, number>;
  }

  export interface IBubblechart extends
  IBaseChart<IBubblechart>,
  IAbstractColorChart<IBubblechart>,
  IAbstractBubblechart<IBubblechart>,
  IAbstractCoordinateGridChart<IBubblechart>,
  IMarginable<IBubblechart>,
  IListener<IBubblechart> {
  }

  export interface IPiechart extends
  IBaseChart<IPiechart>,
  IAbstractColorChart<IPiechart>,
  IAbstractBubblechart<IPiechart>,
  IAbstractCoordinateGridChart<IPiechart>,
  IMarginable<IPiechart>,
  IListener<IPiechart> {
    radius: IGetSet<number, IPiechart>;
    minAngleForLabel: IGetSet<number, IPiechart>;

  }

  export interface IBarchart extends
  IBaseChart<IBarchart>,
  IAbstractStackableChart<IBarchart>,
  IAbstractCoordinateGridChart<IBarchart>,
  IMarginable<IBarchart>,
  IListener<IBarchart> {
    centerBar: (boolean) => IBarchart;
    gap: (gapBetweenBars: number) => IBarchart;
  }

  export interface ILinechart extends
  IBaseChart<ILinechart>,
  IAbstractStackableChart<ILinechart>,
  IAbstractCoordinateGridChart<ILinechart>,
  IMarginable<ILinechart>,
  IListener<ILinechart> {
  }


  export interface IDatachart extends
  IBaseChart<IDatachart>,
  IAbstractStackableChart<IDatachart>,
  IAbstractCoordinateGridChart<IDatachart>,
  IMarginable<IDatachart>,
  IListener<IDatachart> {
    size: IGetSet<number, IDatachart>;
    columns: IGetSet<columnFunction[], IDatachart>;
    sortBy: IGetSet<sortbyFunction[], IDatachart>;
    order: IGetSet<orderFunction[], IDatachart>;
  }


  export interface IRowchart extends
  IBaseChart<IRowchart>,
  IAbstractColorChart<IRowchart>,
  IAbstractStackableChart<IRowchart>,
  IAbstractCoordinateGridChart<IRowchart>,
  IMarginable<IRowchart>,
  IListener<IRowchart> {
  }




  // utilities
  export interface IChartGroup { }

  export function filterAll(chartGroup?: IChartGroup): void;
  export function renderAll(chartGroup?: IChartGroup);
  export function redrawAll(chartGroup?: IChartGroup);


  export function bubbleChart(cssSel: string): IBubblechart;
  export function pieChart(cssSel: string): IPiechart;
  export function barChart(cssSel: string): IBarchart;
  export function lineChart(cssSel: string): ILinechart;
  export function dataTable(cssSel: string): IDatachart;
  export function rowChart(cssSel: string): IRowchart;


}