// Type definitions for bizcharts 3.1
// Project: https://github.com/alibaba/BizCharts
// Definitions by: yixin https://github.com/Leannechn;
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 3.1.3

/// <reference types="react" />
/// <reference types="g2" />

declare module "bizcharts" {
    export import G2 = _BizCharts.G2;
    export import Util = _BizCharts.Util;
    export import Shape = _BizCharts.Shape;
    export import Animate = _BizCharts.Animate;
    export import PathUtil = _BizCharts.PathUtil;
    export import track = _BizCharts.track;
    export import setTheme = _BizCharts.setTheme;
    export import Axis = _BizCharts.Axis;
    export import AxisProps = _BizCharts.AxisProps;
    export import Base = _BizCharts.Base;
    export import BaseProps = _BizCharts.BaseProps;
    export import Chart = _BizCharts.Chart;
    export import ChartProps = _BizCharts.ChartProps;
    export import Coord = _BizCharts.Coord;
    export import CoordProps = _BizCharts.ChartProps;
    export import Facet = _BizCharts.Facet;
    export import FacetProps = _BizCharts.FacetProps;
    export import Geom = _BizCharts.Geom;
    export import GeomProps = _BizCharts.GeomProps;
    export import Guide = _BizCharts.Guide;
    export import GuideProps = _BizCharts.GuideProps;
    export import Label = _BizCharts.Label;
    export import LabelProps = _BizCharts.LabelProps;
    export import Legend = _BizCharts.Legend;
    export import LegendProps = _BizCharts.LabelProps;
    export import Tooltip = _BizCharts.Tooltip;
    export import TooltipProps = _BizCharts.TooltipProps;
    export import View = _BizCharts.View;
    export import ViewProps = _BizCharts.ViewProps;
  }
  
  declare namespace _BizCharts{
    /**
     * origin G2 
     **/
    type G2 = {
      version: string;
      Animate: G2.Animate;
      Chart: G2.Chart;
      Shape: G2.BashView;
      Global: G2.Global;
      Util:  G2.Util;
      DomUtil: G2.DomUtil;
      MatrixUtil: G2.MatrixUtil;
      PathUtil: G2.PathUtil;
      G: any;
      track: (enable: boolean) => void;
    }
    export let G2: G2;
  
    /**
     * Util
     */
    export interface Util extends G2.Util{}
  
    /**
     * shape
     */
    export interface Shape extends G2.Shape{}
  
    /**
     * Animate
     */
    export interface Animate extends G2.Animate{}
  
    /**
     * PathUtil
     */
    export interface PathUtil extends G2.PathUtil{}
  
    /**
     * track
     */
    export function track(enable: boolean): void;
  
    /**
     * setTheme
     */
    export function setTheme(theme: object | string): void;
  
    // some config type
    export let AxisTile: G2.AxisTile;
    export type GeomType = 'point' | 'path' | 'line' | 'area' | 'interval' | 'polygon' | 'edge' | 'schema' | 'heatmap' | 'pointStack' | 'pointJitter' | 'pointDodge' | 'intervalStack' | 'intervalDodge' | 'intervalSymmetric' | 'areaStack' | 'schemaDodge';
    export type MarkerType = 'circle' | 'square' | 'bowtie' | 'diamond' | 'hexagon' | 'triangle' | 'triangle-down' | 'hollowCircle' | 'hollowSquare' | 'hollowBowtie' | 'hollowDiamond' | 'hollowHexagon' | 'hollowTriangle' | 'hollowTriangle-down' | 'cross' | 'tick' | 'plus' | 'hyphen' | 'line';
    /**
     * components
     */
    export interface AxisProps extends React.Props<any> {
      name?: string;
      visible?: boolean;
      position?: 'top' | 'bottom' | 'left' | 'right';
      title?: object;
      line?: G2.Styles.line;
      tickLine?: G2.Styles.tickLine;
      label?: G2.AxisLabel;
      grid?: G2.AxisGrid;
      subTickCount?: number;
      subTickLine?: G2.Styles.tickLine;
    }
  
    export interface BaseProps extends React.Props<any> {}
  
    export interface ChartProps extends React.DOMAttributes<{}>, React.Props<any> {
      width?: number;
      height: number;
      padding?:
        | {
            top: number;
            right: number;
            bottom: number;
            left: number;
          }
        | number
        | [number, number, number, number]
        | [string, string];
      background?:G2.Styles.background;
      plotBackground?: G2.Styles.background;
      forceFit?: boolean;
      animate?: boolean;
      pixelRatio?: number;
      data?: any;
      scale?: {
        fieldName: string;
        scaleConnfig: any;
      };
      placeholder?: JSX.Element | string;
      filter?: Array<any>;
      className?: string;
      style?: React.CSSProperties;
      // 事件属性
      onGetG2Instance?(chart: G2.Chart): void;
      onPlotMove?(ev: G2.EventParams): void;
      onPlotEnter?(ev: G2.EventParams): void;
      onPlotLeave?(ev: G2.EventParams): void;
      onPlotClick?(ev: G2.EventParams): void;
      onPlotDblClick?(ev: G2.EventParams): void;
      onItemSelected?(ev: G2.EventParams): void;
      onItemUnselected?(ev: G2.EventParams): void;
      onItemSelectedChange?(ev: {
        shape: G2.Shape;
        data: any;
        preShape: G2.Shape;
        preData: any;
        geom: any;
      }): void;
      onTooltipChange?(ev: {
        tooltip: any;
        x: number;
        y: number;
        items: any;
      }): void;
      onTooltipShow?(ev: {
        tooltip: any;
        x: number;
        y: number;
      }): void;
      onTooltipHide?(ev: {
        tooltip: any;
      }): void;
      [event: string]: any;
    }
  
    export interface CoordProps extends React.Props<any> {
      type?: 'rect' | 'polar' | 'theta' | 'helix',
      rotate?: 'number',
      scale?: [number, number],
      reflect?: 'x' | 'y',
      radius?: number,
      innerRadius?: number,
      startAngle?: number,
      endAngle?: number,
    }
  
    export interface FacetProps extends React.Props<any> {
      type?:  'rect' | 'list' | 'circle' | 'tree' | 'mirror' | 'matrix';
      fields?: string | any[];
      margin?: number | number[];
      padding?: number | number[];
      showTitle?: boolean;
      autoSetAxis?: boolean;
      colTitle?: {
        offsetY?: number;
        style?: G2.Styles.text;
      };
      rowTitle?: {
        offsetX?: number;
        style?: G2.Styles.text;
      };
      eachView?: (view?: any, facet?: any) => void;
    }
  
    export interface GeomProps extends React.Props<any> {
      type?: GeomType;
      adjust?: string | string[] | {
        type?: GeomType;
        marginRatio?: number;
        dodgeBy?: string;
      }[];
      position?: string;
      color?: string | [string, string] | [string, string[]] | [string, (d?: any) => string];
      shape?: string | [string, string[]] | [string, (d?: any) => string];
      size?: number | string | [string, [number, number]] | [string, (d?: any) => number];
      opacity?: string | number | [string, (d?: any) => number];
      style?: object | [string, object];
      tooltip?: boolean | string | [string, (x?: any, y?: any) => {name?: string; value: string}];
      select?: boolean | [boolean, any];
      Active?: boolean; // 图形激活交互开关
      animate?: any;
    }
  
    export interface GuideProps extends React.Props<any> {}
  
    export interface LabelProps extends React.Props<any> {
      content?: string | [string, (x?: any, y?: any) => string];
      labelLine?: ((x?: any, y?: any) => G2.Styles.line) | G2.Styles.line | boolean;
      offset?: number;
      textStyle?: G2.Styles.text | ((t?: any) => G2.Styles.text);
      autoRotate?: boolean;
      formatter?: ((text?: any, item?: any, index?: number) => string) | number;
      htmlTemplate?: ((text?: any, item?: any, index?: number) => string) | string;
    }
  
    export interface LegendProps extends React.Props<any> {
      name?: string;
      visible?: string;
      position?: 'top' | 'left' | 'right' | 'bottom';
      title?: boolean;
      offsetX?: number;
      offsetY?: number;
      itemGap?: number;
      itemMarginBottom?: number;
      itemWidth?: number;
      unChecked?: string;
      background?: G2.Styles.background;
      allowAllCanceled?: boolean;
      itemFormatter?: (val?: any) => string | number;
      marker?: string | MarkerType | ((x?: number, y?: number, r?: number, ctx?: CanvasRenderingContext2D) => void);
      textStyle?: G2.Styles.text;
      clickable?: boolean;
      hoverable?: boolean;
      selectedMode?: 'single' | 'multiple';
      onHover?: (ev: MouseEvent) => void;
      onClick?: (ev: MouseEvent) => void;
      useHtml?: boolean;
      container?: string; // useHtml 为true时生效 
      containerTpl?: string;
      itemTpl?: string | ((param1?: string, param2?: string, param3?: boolean, index?: number) => string);
      'g2-legend'?: React.CSSProperties;
      'g2-legend-item'?: React.CSSProperties;
      'g2-legend-list-item'?: React.CSSProperties;
      'g2-legend-marker'?: React.CSSProperties;
      'g2-legend-text'?: React.CSSProperties;
      scroll?: boolean;
      // 连续图例
      slidable?: boolean;
      width?: number;
      height?: number;
      // 自定义混合图例
      custom?: boolean;
      items?: any[];
    }
  
    export interface TooltipProps extends React.Props<any> {
      showTitle?: boolean;
      crosshairs?: {
        type?: 'rect' | 'x' | 'y' | 'cross';
        style?: G2.Styles.background | G2.Styles.line;
      };
      offset?: number;
      containerTpl?: string;
      itemTpl?: string;
      'g2-tooltip'?: React.CSSProperties;
      'g2-tooltip-title'?: React.CSSProperties;
      'g2-tooltip-list'?: React.CSSProperties;
      'g2-tooltip-list-item'?: React.CSSProperties;
      'g2-tooltip-marker'?: React.CSSProperties;
      inPlot?: boolean;
      follow?: boolean;
      shared?: boolean;
      position?: 'top' | 'bottom' | 'left' | 'right';
  
    }
  
  
    export interface ViewProps extends React.Props<any> {
      id?: string;
      start?: {x: number; y: number};
      end?: {x: number; y: number};
      data?: any;
      animate?: boolean;
      scale?: {
        fieldName: string;
        scaleConnfig: any;
      };
      filter?: Array<any>;
    }
  
    export class Base<T> extends React.Component<T> {
      getParentInfo?(): {id: number | string; name: string};
      generateBaseTypedComponent?(name: string): Base<BaseProps>;
      id?: number | string;
      name?: string;
    }
    export class Chart extends React.Component<ChartProps>{
      getG2Instance?(): G2.Chart;
      _refCallback?(c: G2.Chart);
      hasViewSource?(): boolean;
    }
    export class Axis extends Base<AxisProps> {}
    export class Coord extends Base<CoordProps> {}
    export class Facet extends Base<FacetProps> {}
    export class Geom extends Base<GeomProps> {}
    export class Guide extends Base<GuideProps> {
      Line?: Base<GuideProps>;
      Image?: Base<GuideProps>;
      Text?: Base<GuideProps>;
      Region?: Base<GuideProps>;
      Html?: Base<GuideProps>;
      Arc?: Base<GuideProps>;
    }
    namespace Guide {
      interface LineProps {
        top?: boolean;
        start?: object | Array<any> | ((xScale?: any, yScale?: any) => any);
        end?: object | Array<any> | ((xScale?: any, yScale?: any) => any);
        lineStyle?: G2.Styles.line;
        text?: {
          position?: string | number;
          autoRotate?: boolean;
          style?: G2.Styles.text;
          content?: string;
          offsetX?: number;
          offsetY?: number;
        }
      }
      export class Line extends Base<LineProps> {}
  
      interface ImageProps {
        top?: boolean;
        start?: object | Array<any> | ((xScale?: any, yScale?: any) => any);
        end?: object | Array<any> | ((xScale?: any, yScale?: any) => any);
        src?: string;
        width?: number;
        height?: number;
        offsetX?: number;
        offsetY?: number;
      }
      export class Image extends Base<ImageProps> {}
  
      interface RegionProps {
        top?: boolean;
        start?: object | Array<any> | ((xScale?: any, yScale?: any) => any);
        end?: object | Array<any> | ((xScale?: any, yScale?: any) => any);
        style?: G2.Styles.background;
      }
      export class Region extends Base<RegionProps> {}
  
      interface HtmlProps {
        position?: object | any[] | ((xScale?: any, yScale?: any) => any);
        alignX?: 'left' | 'middle' | 'right';
        alignY?: 'top' | 'middle' | 'bottom';
        html?: string;
        zIndex?: number;
        offsetX?: number;
        offsetY?: number;
      }
      export class Html extends Base<HtmlProps> {}
      
      interface ArcProps {
        top?: boolean;
        start?: object | Array<any> | ((xScale?: any, yScale?: any) => any);
        end?: object | Array<any> | ((xScale?: any, yScale?: any) => any);
        style?: any;
      }
      export class Arc extends Base<ArcProps> {}
      
      interface TextProps {
        top?: boolean;
        position?: object | any[] | ((xScale?: any, yScale?: any) => any);
        content?: string;
        style?: G2.Styles.text;
        offsetX?: number;
        offsetY?: number;
      }
      export class Text extends Base<TextProps> {}
      
  
    }
    export class Label extends Base<LabelProps> {}
    export class Legend extends Base<LegendProps> {}
    export class Tooltip extends Base<TooltipProps> {}
    export class View extends Base<ViewProps> {
      getViewId?(): string | number
    }
  }
  
  
  