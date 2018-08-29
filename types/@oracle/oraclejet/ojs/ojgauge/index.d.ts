/// <reference types='ojs/ojdvt-base'/>
declare namespace oj {  
  abstract class dvtBaseGauge<SP extends dvtBaseGaugeSettableProperties = dvtBaseGaugeSettableProperties> extends dvtBaseComponent<SP> {
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};

    addEventListener<T extends keyof dvtBaseGaugeEventMap>(type: T, listener: (this: HTMLElement, ev: dvtBaseGaugeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface dvtBaseGaugeEventMap extends oj.dvtBaseComponentEventMap {
  }
  interface dvtBaseGaugeSettableProperties extends dvtBaseComponentSettableProperties {
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }

}
declare namespace oj {  
  class ojLedGauge extends dvtBaseGauge<ojLedGaugeSettableProperties> {
    borderColor: string;
    color: string;
    label: {style?: object, text?: string};
    max: number;
    metricLabel: {converter?: Converter<string>, rendered?: 'on'|'off', scaling?: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style?: object, text?: string, textType?: 'percent'|'number'};
    min: number;
    rotation: 90|180|270|0;
    size: number;
    svgClassName: string;
    svgStyle: object;
    thresholds: Array<oj.ojLedGauge.Threshold>;
    tooltip: {renderer: ((context: oj.ojLedGauge.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    type: 'arrow'|'diamond'|'square'|'rectangle'|'triangle'|'star'|'human'|'circle';
    value: number|null;
    visualEffects: 'none'|'auto';
    onBorderColorChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMetricLabelChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onRotationChanged: (event: CustomEvent)=> any;
    onSizeChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onThresholdsChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTypeChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onVisualEffectsChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojLedGaugeEventMap>(type: T, listener: (this: HTMLElement, ev: ojLedGaugeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getMetricLabel(): string;
  }
  interface ojLedGaugeEventMap extends oj.dvtBaseGaugeEventMap {
    'borderColorChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'metricLabelChanged': CustomEvent;
    'minChanged': CustomEvent;
    'rotationChanged': CustomEvent;
    'sizeChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'thresholdsChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'typeChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'visualEffectsChanged': CustomEvent;
  }
  interface ojLedGaugeSettableProperties extends dvtBaseGaugeSettableProperties {
    borderColor: string;
    color: string;
    label: {style?: object, text?: string};
    max: number;
    metricLabel: {converter?: Converter<string>, rendered?: 'on'|'off', scaling?: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style?: object, text?: string, textType?: 'percent'|'number'};
    min: number;
    rotation: 90|180|270|0;
    size: number;
    svgClassName: string;
    svgStyle: object;
    thresholds: Array<oj.ojLedGauge.Threshold>;
    tooltip: {renderer: ((context: oj.ojLedGauge.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    type: 'arrow'|'diamond'|'square'|'rectangle'|'triangle'|'star'|'human'|'circle';
    value: number|null;
    visualEffects: 'none'|'auto'; 
  }
  namespace ojLedGauge {
    type Threshold =
    {
      borderColor?: string, color?: string, max?: number, shortDesc?: string
    }
  }
  namespace ojLedGauge {
    type TooltipContext =
    {
      color: string, componentElement: Element, label: string, parentElement: Element
    }
  }

}
declare namespace oj {  
  class ojRatingGauge extends dvtBaseGauge<ojRatingGaugeSettableProperties> {
    changed: boolean;
    changedState: {borderColor?: string, color?: string, shape?: 'circle'|'diamond'|'human'|'square'|'star'|'triangle'|string, source?: string, svgClassName?: string, svgStyle?: object};
    hoverState: {borderColor?: string, color?: string, shape?: 'circle'|'diamond'|'human'|'square'|'star'|'triangle'|string, source?: string, svgClassName?: string, svgStyle?: object};
    max: number;
    min: number;
    orientation: 'vertical'|'horizontal';
    preserveAspectRatio: 'none'|'meet';
    readonly: boolean;
    selectedState: {borderColor?: string, color?: string, shape?: 'circle'|'diamond'|'human'|'square'|'star'|'triangle'|string, source?: string, svgClassName?: string, svgStyle?: object};
    step: 0.5|1;
    thresholds: Array<oj.ojRatingGauge.Threshold>;
    tooltip: {renderer: ((context: oj.ojRatingGauge.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    readonly transientValue: number|null;
    unselectedState: {borderColor?: string, color?: string, shape?: 'circle'|'diamond'|'human'|'square'|'star'|'triangle'|string, source?: string, svgClassName?: string, svgStyle?: object};
    value: number|null;
    visualEffects: 'none'|'auto';
    onChangedChanged: (event: CustomEvent)=> any;
    onChangedStateChanged: (event: CustomEvent)=> any;
    onHoverStateChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onOrientationChanged: (event: CustomEvent)=> any;
    onPreserveAspectRatioChanged: (event: CustomEvent)=> any;
    onReadonlyChanged: (event: CustomEvent)=> any;
    onSelectedStateChanged: (event: CustomEvent)=> any;
    onStepChanged: (event: CustomEvent)=> any;
    onThresholdsChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTransientValueChanged: (event: CustomEvent)=> any;
    onUnselectedStateChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onVisualEffectsChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojRatingGaugeEventMap>(type: T, listener: (this: HTMLElement, ev: ojRatingGaugeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojRatingGaugeEventMap extends oj.dvtBaseGaugeEventMap {
    'changedChanged': CustomEvent;
    'changedStateChanged': CustomEvent;
    'hoverStateChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'minChanged': CustomEvent;
    'orientationChanged': CustomEvent;
    'preserveAspectRatioChanged': CustomEvent;
    'readonlyChanged': CustomEvent;
    'selectedStateChanged': CustomEvent;
    'stepChanged': CustomEvent;
    'thresholdsChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'transientValueChanged': CustomEvent;
    'unselectedStateChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'visualEffectsChanged': CustomEvent;
  }
  interface ojRatingGaugeSettableProperties extends dvtBaseGaugeSettableProperties {
    changed: boolean;
    changedState: {borderColor?: string, color?: string, shape?: 'circle'|'diamond'|'human'|'square'|'star'|'triangle'|string, source?: string, svgClassName?: string, svgStyle?: object};
    hoverState: {borderColor?: string, color?: string, shape?: 'circle'|'diamond'|'human'|'square'|'star'|'triangle'|string, source?: string, svgClassName?: string, svgStyle?: object};
    max: number;
    min: number;
    orientation: 'vertical'|'horizontal';
    preserveAspectRatio: 'none'|'meet';
    readonly: boolean;
    selectedState: {borderColor?: string, color?: string, shape?: 'circle'|'diamond'|'human'|'square'|'star'|'triangle'|string, source?: string, svgClassName?: string, svgStyle?: object};
    step: 0.5|1;
    thresholds: Array<oj.ojRatingGauge.Threshold>;
    tooltip: {renderer: ((context: oj.ojRatingGauge.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    readonly transientValue: number|null;
    unselectedState: {borderColor?: string, color?: string, shape?: 'circle'|'diamond'|'human'|'square'|'star'|'triangle'|string, source?: string, svgClassName?: string, svgStyle?: object};
    value: number|null;
    visualEffects: 'none'|'auto'; 
  }
  namespace ojRatingGauge {
    type Threshold =
    {
      borderColor?: string, color?: string, max?: number, shortDesc?: string
    }
  }
  namespace ojRatingGauge {
    type TooltipContext =
    {
      color: string, componentElement: Element, label: string, parentElement: Element
    }
  }

}
declare namespace oj {  
  class ojStatusMeterGauge extends dvtBaseGauge<ojStatusMeterGaugeSettableProperties> {
    angleExtent: number;
    animationDuration?: number;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    borderColor: string;
    borderRadius: string;
    center: {renderer: ((context: oj.ojStatusMeterGauge.CenterContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    color: string;
    indicatorSize: number;
    innerRadius: number;
    label: {position?: 'center'|'start'|'auto', style?: object, text?: string};
    max: number;
    metricLabel: {converter?: Converter<string>, position?: 'center'|'insideIndicatorEdge'|'outsideIndicatorEdge'|'outsidePlotArea'|'withLabel'|'auto', rendered?: 'on'|'off'|'auto', scaling?: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style?: object, text?: string, textType?: 'percent'|'number'};
    min: number;
    orientation: 'circular'|'vertical'|'horizontal';
    plotArea: {borderColor?: string, borderRadius?: string, color?: string, rendered?: 'on'|'off'|'auto', svgClassName?: string, svgStyle?: object};
    readonly: boolean;
    referenceLines: Array<oj.ojStatusMeterGauge.ReferenceLine>;
    startAngle: number;
    step: number|null;
    svgClassName: string;
    svgStyle: object;
    thresholdDisplay: 'currentOnly'|'all'|'onIndicator';
    thresholds: Array<oj.ojStatusMeterGauge.Threshold>;
    tooltip: {renderer: ((context: oj.ojStatusMeterGauge.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    readonly transientValue: number|null;
    value: number|null;
    visualEffects: 'none'|'auto';
    onAngleExtentChanged: (event: CustomEvent)=> any;
    onAnimationDurationChanged: (event: CustomEvent)=> any;
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onBorderRadiusChanged: (event: CustomEvent)=> any;
    onCenterChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onIndicatorSizeChanged: (event: CustomEvent)=> any;
    onInnerRadiusChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMetricLabelChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onOrientationChanged: (event: CustomEvent)=> any;
    onPlotAreaChanged: (event: CustomEvent)=> any;
    onReadonlyChanged: (event: CustomEvent)=> any;
    onReferenceLinesChanged: (event: CustomEvent)=> any;
    onStartAngleChanged: (event: CustomEvent)=> any;
    onStepChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onThresholdDisplayChanged: (event: CustomEvent)=> any;
    onThresholdsChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTransientValueChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onVisualEffectsChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojStatusMeterGaugeEventMap>(type: T, listener: (this: HTMLElement, ev: ojStatusMeterGaugeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getMetricLabel(): string;
  }
  interface ojStatusMeterGaugeEventMap extends oj.dvtBaseGaugeEventMap {
    'angleExtentChanged': CustomEvent;
    'animationDurationChanged': CustomEvent;
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'borderColorChanged': CustomEvent;
    'borderRadiusChanged': CustomEvent;
    'centerChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'indicatorSizeChanged': CustomEvent;
    'innerRadiusChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'metricLabelChanged': CustomEvent;
    'minChanged': CustomEvent;
    'orientationChanged': CustomEvent;
    'plotAreaChanged': CustomEvent;
    'readonlyChanged': CustomEvent;
    'referenceLinesChanged': CustomEvent;
    'startAngleChanged': CustomEvent;
    'stepChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'thresholdDisplayChanged': CustomEvent;
    'thresholdsChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'transientValueChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'visualEffectsChanged': CustomEvent;
  }
  interface ojStatusMeterGaugeSettableProperties extends dvtBaseGaugeSettableProperties {
    angleExtent: number;
    animationDuration?: number;
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    borderColor: string;
    borderRadius: string;
    center: {renderer: ((context: oj.ojStatusMeterGauge.CenterContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    color: string;
    indicatorSize: number;
    innerRadius: number;
    label: {position?: 'center'|'start'|'auto', style?: object, text?: string};
    max: number;
    metricLabel: {converter?: Converter<string>, position?: 'center'|'insideIndicatorEdge'|'outsideIndicatorEdge'|'outsidePlotArea'|'withLabel'|'auto', rendered?: 'on'|'off'|'auto', scaling?: 'none'|'thousand'|'million'|'billion'|'trillion'|'quadrillion'|'auto', style?: object, text?: string, textType?: 'percent'|'number'};
    min: number;
    orientation: 'circular'|'vertical'|'horizontal';
    plotArea: {borderColor?: string, borderRadius?: string, color?: string, rendered?: 'on'|'off'|'auto', svgClassName?: string, svgStyle?: object};
    readonly: boolean;
    referenceLines: Array<oj.ojStatusMeterGauge.ReferenceLine>;
    startAngle: number;
    step: number|null;
    svgClassName: string;
    svgStyle: object;
    thresholdDisplay: 'currentOnly'|'all'|'onIndicator';
    thresholds: Array<oj.ojStatusMeterGauge.Threshold>;
    tooltip: {renderer: ((context: oj.ojStatusMeterGauge.TooltipContext) => ({insert: Element|string}|{preventDefault: boolean}))};
    readonly transientValue: number|null;
    value: number|null;
    visualEffects: 'none'|'auto'; 
  }
  namespace ojStatusMeterGauge {
    type Bounds =
    {
      x: number, y: number, width: number, height: number
    }
  }
  namespace ojStatusMeterGauge {
    type CenterContext =
    {
      componentElement: Element, innerBounds: oj.ojStatusMeterGauge.Bounds, metricLabel: string, outerBounds: oj.ojStatusMeterGauge.Bounds
    }
  }
  namespace ojStatusMeterGauge {
    type ReferenceLine =
    {
      color?: string, value?: number
    }
  }
  namespace ojStatusMeterGauge {
    type Threshold =
    {
      borderColor?: string, color?: string, max?: number, shortDesc?: string
    }
  }
  namespace ojStatusMeterGauge {
    type TooltipContext =
    {
      color: string, componentElement: Element, label: string, parentElement: Element
    }
  }

}
