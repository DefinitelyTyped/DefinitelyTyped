// Type definitions for chartjs-plugin-annotation 0.5
// Project: https://github.com/chartjs/chartjs-plugin-annotation#readme
// Definitions by: Dan Manastireanu <https://github.com/danmana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Chart from 'chart.js';
import { Moment } from 'moment';

// Extend the types from chart.js
declare module 'chart.js' {
  interface ChartOptions {
    // This is deprecated on master (not released yet)
    annotation?: ChartJsAnnotation.AnnotationConfig;
  }

  // This is the correct version on master (not released yet)
  // interface ChartPluginsOptions {
  //   annotation?: ChartJsAnnotation.AnnotationConfig;
  // }

  const Annotation: ChartJsAnnotation.AnnotationStatic;
}

// This is the actual export of the library,
// but because we use the same name for it as the namespace below we can export the interfaces as well.
// This is called declaration merging: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
// It allows us import the plugin as: import * as ChartJsAnnotation from 'chartjs-plugin-annotation';
// and use the interfaces and types as: ChartJsAnnotation.LineAnnotationOptions
declare const ChartJsAnnotation: Chart.PluginServiceGlobalRegistration & Chart.PluginServiceRegistrationOptions;

// Note: the namespace should contain only interfaces
// We do not want to expose in typings a class that is not actually accessible in the lib.
// The lib exposes the enum and classes under different names/props in Chart.Annotation
declare namespace ChartJsAnnotation {
  interface AnnotationConfig {
    drawTime?: keyof typeof DrawTimeOptions;
    events?: string[];
    dblClickSpeed?: number;
    annotations: AnnotationOptions[];
  }

  interface AnnotationStatic {
    drawTimeOptions: typeof DrawTimeOptions;
    defaults: AnnotationConfig;
    labelDefaults: LineAnnotationLabel;
    Element: typeof AnnotationElement;
    types: {
      line: typeof LineAnnotation;
      box: typeof BoxAnnotation;
    };
  }

  interface CommonAnnotationOptions {
    type: 'line' | 'box';
    drawTime?: keyof typeof DrawTimeOptions;
    id?: string;

    onMouseenter?: (event: MouseEvent) => void;
    onMouseover?: (event: MouseEvent) => void;
    onMouseleave?: (event: MouseEvent) => void;
    onMouseout?: (event: MouseEvent) => void;
    onMousemove?: (event: MouseEvent) => void;
    onMousedown?: (event: MouseEvent) => void;
    onMouseup?: (event: MouseEvent) => void;
    onClick?: (event: MouseEvent) => void;
    onDblclick?: (event: MouseEvent) => void;
    onContextmenu?: (event: MouseEvent) => void;
    onWheel?: (event: MouseEvent) => void;
  }

  type ChartPointValue = number | string | Date | Moment;

  interface LineAnnotationOptions extends CommonAnnotationOptions {
    type: 'line';
    mode: 'horizontal' | 'vertical';
    scaleID: string;
    value: ChartPointValue;
    endValue?: ChartPointValue;

    borderColor?: Chart.ChartColor;
    borderWidth?: number;
    borderDash?: number[];
    borderDashOffset?: number;

    label?: LineAnnotationLabel;
  }

  interface BoxAnnotationOptions extends CommonAnnotationOptions {
    type: 'box';
    xScaleID?: string;
    yScaleID?: string;
    xMin: ChartPointValue;
    xMax: ChartPointValue;
    yMin: ChartPointValue;
    yMax: ChartPointValue;

    borderColor?: Chart.ChartColor;
    borderWidth?: number;
    backgroundColor?: Chart.ChartColor;
  }

  type AnnotationOptions = LineAnnotationOptions | BoxAnnotationOptions;

  interface LineAnnotationLabel {
    backgroundColor?: Chart.ChartColor;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontColor?: Chart.ChartColor;
    xPadding?: number;
    yPadding?: number;
    cornerRadius?: number;
    position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
    xAdjust?: number;
    yAdjust?: number;
    enabled?: boolean;
    content?: string; // | string[]; // only on master (not released yet)
    // rotation?: number; // only on master (not released yet)
  }

  interface AnnotationElementOptions<T extends AnnotationOptions> {
    id: string;
    options: T;
    chartInstance: Chart;
  }
}

// Note: classes and enums need to be outside the namespace,
// otherwise the merge with the constant ChartJsAnnotation fails
declare class AnnotationElement { // TODO: this should extend Chart.Element, but that typing is not defined in chart.js
  hidden: boolean;
  hovering: boolean;
  _model: any;

  initialize: () => void;
  destroy: () => void;
  setDataLimits: () => void;
  configure: () => void;
  inRange: () => void;
  getCenterPoint: () => void;
  getWidth: () => void;
  getHeight: () => void;
  getArea: () => void;
  draw: () => void;
}

declare class LineAnnotation extends AnnotationElement {
  constructor(options: ChartJsAnnotation.AnnotationElementOptions<ChartJsAnnotation.LineAnnotationOptions>);
}

declare class BoxAnnotation extends AnnotationElement {
  constructor(options: ChartJsAnnotation.AnnotationElementOptions<ChartJsAnnotation.BoxAnnotationOptions>);
}

declare enum DrawTimeOptions {
  afterDraw = 'afterDraw',
  afterDatasetsDraw = 'afterDatasetsDraw',
  beforeDatasetsDraw = 'beforeDatasetsDraw'
}

export = ChartJsAnnotation;
