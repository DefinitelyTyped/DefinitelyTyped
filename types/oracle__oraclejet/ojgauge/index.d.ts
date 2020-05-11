import { Converter } from '../ojvalidation-base';
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface dvtBaseGauge<SP extends dvtBaseGaugeSettableProperties = dvtBaseGaugeSettableProperties> extends dvtBaseComponent<SP> {
    translations: {
        componentName?: string;
        labelAndValue?: string;
        labelClearSelection?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelInvalidData?: string;
        labelNoData?: string;
        stateCollapsed?: string;
        stateDrillable?: string;
        stateExpanded?: string;
        stateHidden?: string;
        stateIsolated?: string;
        stateMaximized?: string;
        stateMinimized?: string;
        stateSelected?: string;
        stateUnselected?: string;
        stateVisible?: string;
    };
    addEventListener<T extends keyof dvtBaseGaugeEventMap<SP>>(type: T, listener: (this: HTMLElement, ev: dvtBaseGaugeEventMap<SP>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof dvtBaseGaugeSettableProperties>(property: T): dvtBaseGauge<SP>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof dvtBaseGaugeSettableProperties>(property: T, value: dvtBaseGaugeSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, dvtBaseGaugeSettableProperties>): void;
    setProperties(properties: dvtBaseGaugeSettablePropertiesLenient): void;
}
// These interfaces are empty but required to keep the event chain intact. Avoid lint-rule
// tslint:disable-next-line no-empty-interface
export interface dvtBaseGaugeEventMap<SP extends dvtBaseGaugeSettableProperties = dvtBaseGaugeSettableProperties> extends dvtBaseComponentEventMap<SP> {
}
export interface dvtBaseGaugeSettableProperties extends dvtBaseComponentSettableProperties {
    translations: {
        componentName?: string;
        labelAndValue?: string;
        labelClearSelection?: string;
        labelCountWithTotal?: string;
        labelDataVisualization?: string;
        labelInvalidData?: string;
        labelNoData?: string;
        stateCollapsed?: string;
        stateDrillable?: string;
        stateExpanded?: string;
        stateHidden?: string;
        stateIsolated?: string;
        stateMaximized?: string;
        stateMinimized?: string;
        stateSelected?: string;
        stateUnselected?: string;
        stateVisible?: string;
    };
}
export interface dvtBaseGaugeSettablePropertiesLenient extends Partial<dvtBaseGaugeSettableProperties> {
    [key: string]: any;
}
export interface ojLedGauge extends dvtBaseGauge<ojLedGaugeSettableProperties> {
    borderColor: string;
    color: string;
    label: {
        style?: object;
        text?: string;
    };
    max: number;
    metricLabel: {
        converter?: Converter<string>;
        rendered?: 'on' | 'off';
        scaling?: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
        style?: object;
        text?: string;
        textType?: 'percent' | 'number';
    };
    min: number;
    rotation: 90 | 180 | 270 | 0;
    size: number;
    svgClassName: string;
    svgStyle: object;
    thresholds: ojLedGauge.Threshold[];
    tooltip: {
        renderer: ((context: ojLedGauge.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    type: 'arrow' | 'diamond' | 'square' | 'rectangle' | 'triangle' | 'star' | 'human' | 'circle';
    value: number | null;
    visualEffects: 'none' | 'auto';
    onBorderColorChanged: ((event: JetElementCustomEvent<ojLedGauge["borderColor"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojLedGauge["color"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojLedGauge["label"]>) => any) | null;
    onMaxChanged: ((event: JetElementCustomEvent<ojLedGauge["max"]>) => any) | null;
    onMetricLabelChanged: ((event: JetElementCustomEvent<ojLedGauge["metricLabel"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojLedGauge["min"]>) => any) | null;
    onRotationChanged: ((event: JetElementCustomEvent<ojLedGauge["rotation"]>) => any) | null;
    onSizeChanged: ((event: JetElementCustomEvent<ojLedGauge["size"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojLedGauge["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojLedGauge["svgStyle"]>) => any) | null;
    onThresholdsChanged: ((event: JetElementCustomEvent<ojLedGauge["thresholds"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojLedGauge["tooltip"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojLedGauge["type"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojLedGauge["value"]>) => any) | null;
    onVisualEffectsChanged: ((event: JetElementCustomEvent<ojLedGauge["visualEffects"]>) => any) | null;
    addEventListener<T extends keyof ojLedGaugeEventMap>(type: T, listener: (this: HTMLElement, ev: ojLedGaugeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojLedGaugeSettableProperties>(property: T): ojLedGauge[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojLedGaugeSettableProperties>(property: T, value: ojLedGaugeSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojLedGaugeSettableProperties>): void;
    setProperties(properties: ojLedGaugeSettablePropertiesLenient): void;
    getMetricLabel(): string;
}
export interface ojLedGaugeEventMap extends dvtBaseGaugeEventMap<ojLedGaugeSettableProperties> {
    'borderColorChanged': JetElementCustomEvent<ojLedGauge["borderColor"]>;
    'colorChanged': JetElementCustomEvent<ojLedGauge["color"]>;
    'labelChanged': JetElementCustomEvent<ojLedGauge["label"]>;
    'maxChanged': JetElementCustomEvent<ojLedGauge["max"]>;
    'metricLabelChanged': JetElementCustomEvent<ojLedGauge["metricLabel"]>;
    'minChanged': JetElementCustomEvent<ojLedGauge["min"]>;
    'rotationChanged': JetElementCustomEvent<ojLedGauge["rotation"]>;
    'sizeChanged': JetElementCustomEvent<ojLedGauge["size"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojLedGauge["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojLedGauge["svgStyle"]>;
    'thresholdsChanged': JetElementCustomEvent<ojLedGauge["thresholds"]>;
    'tooltipChanged': JetElementCustomEvent<ojLedGauge["tooltip"]>;
    'typeChanged': JetElementCustomEvent<ojLedGauge["type"]>;
    'valueChanged': JetElementCustomEvent<ojLedGauge["value"]>;
    'visualEffectsChanged': JetElementCustomEvent<ojLedGauge["visualEffects"]>;
}
export interface ojLedGaugeSettableProperties extends dvtBaseGaugeSettableProperties {
    borderColor: string;
    color: string;
    label: {
        style?: object;
        text?: string;
    };
    max: number;
    metricLabel: {
        converter?: Converter<string>;
        rendered?: 'on' | 'off';
        scaling?: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
        style?: object;
        text?: string;
        textType?: 'percent' | 'number';
    };
    min: number;
    rotation: 90 | 180 | 270 | 0;
    size: number;
    svgClassName: string;
    svgStyle: object;
    thresholds: ojLedGauge.Threshold[];
    tooltip: {
        renderer: ((context: ojLedGauge.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    type: 'arrow' | 'diamond' | 'square' | 'rectangle' | 'triangle' | 'star' | 'human' | 'circle';
    value: number | null;
    visualEffects: 'none' | 'auto';
}
export interface ojLedGaugeSettablePropertiesLenient extends Partial<ojLedGaugeSettableProperties> {
    [key: string]: any;
}
export namespace ojLedGauge {
    // tslint:disable-next-line interface-over-type-literal
    type Threshold = {
        borderColor?: string;
        color?: string;
        max?: number;
        shortDesc?: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext = {
        color: string;
        componentElement: Element;
        label: string;
        parentElement: Element;
    };
}
export interface ojRatingGauge extends dvtBaseGauge<ojRatingGaugeSettableProperties> {
    changed: boolean;
    changedState: {
        borderColor?: string;
        color?: string;
        shape?: 'circle' | 'diamond' | 'human' | 'square' | 'star' | 'triangle' | string;
        source?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    hoverState: {
        borderColor?: string;
        color?: string;
        shape?: 'circle' | 'diamond' | 'human' | 'square' | 'star' | 'triangle' | string;
        source?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    max: number;
    min: number;
    orientation: 'vertical' | 'horizontal';
    preserveAspectRatio: 'none' | 'meet';
    readonly: boolean;
    selectedState: {
        borderColor?: string;
        color?: string;
        shape?: 'circle' | 'diamond' | 'human' | 'square' | 'star' | 'triangle' | string;
        source?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    step: 0.5 | 1;
    thresholds: ojRatingGauge.Threshold[];
    tooltip: {
        renderer: ((context: ojRatingGauge.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    readonly transientValue: number | null;
    unselectedState: {
        borderColor?: string;
        color?: string;
        shape?: 'circle' | 'diamond' | 'human' | 'square' | 'star' | 'triangle' | string;
        source?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    value: number | null;
    visualEffects: 'none' | 'auto';
    onChangedChanged: ((event: JetElementCustomEvent<ojRatingGauge["changed"]>) => any) | null;
    onChangedStateChanged: ((event: JetElementCustomEvent<ojRatingGauge["changedState"]>) => any) | null;
    onHoverStateChanged: ((event: JetElementCustomEvent<ojRatingGauge["hoverState"]>) => any) | null;
    onMaxChanged: ((event: JetElementCustomEvent<ojRatingGauge["max"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojRatingGauge["min"]>) => any) | null;
    onOrientationChanged: ((event: JetElementCustomEvent<ojRatingGauge["orientation"]>) => any) | null;
    onPreserveAspectRatioChanged: ((event: JetElementCustomEvent<ojRatingGauge["preserveAspectRatio"]>) => any) | null;
    onReadonlyChanged: ((event: JetElementCustomEvent<ojRatingGauge["readonly"]>) => any) | null;
    onSelectedStateChanged: ((event: JetElementCustomEvent<ojRatingGauge["selectedState"]>) => any) | null;
    onStepChanged: ((event: JetElementCustomEvent<ojRatingGauge["step"]>) => any) | null;
    onThresholdsChanged: ((event: JetElementCustomEvent<ojRatingGauge["thresholds"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojRatingGauge["tooltip"]>) => any) | null;
    onTransientValueChanged: ((event: JetElementCustomEvent<ojRatingGauge["transientValue"]>) => any) | null;
    onUnselectedStateChanged: ((event: JetElementCustomEvent<ojRatingGauge["unselectedState"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojRatingGauge["value"]>) => any) | null;
    onVisualEffectsChanged: ((event: JetElementCustomEvent<ojRatingGauge["visualEffects"]>) => any) | null;
    addEventListener<T extends keyof ojRatingGaugeEventMap>(type: T, listener: (this: HTMLElement, ev: ojRatingGaugeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojRatingGaugeSettableProperties>(property: T): ojRatingGauge[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojRatingGaugeSettableProperties>(property: T, value: ojRatingGaugeSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojRatingGaugeSettableProperties>): void;
    setProperties(properties: ojRatingGaugeSettablePropertiesLenient): void;
}
export interface ojRatingGaugeEventMap extends dvtBaseGaugeEventMap<ojRatingGaugeSettableProperties> {
    'changedChanged': JetElementCustomEvent<ojRatingGauge["changed"]>;
    'changedStateChanged': JetElementCustomEvent<ojRatingGauge["changedState"]>;
    'hoverStateChanged': JetElementCustomEvent<ojRatingGauge["hoverState"]>;
    'maxChanged': JetElementCustomEvent<ojRatingGauge["max"]>;
    'minChanged': JetElementCustomEvent<ojRatingGauge["min"]>;
    'orientationChanged': JetElementCustomEvent<ojRatingGauge["orientation"]>;
    'preserveAspectRatioChanged': JetElementCustomEvent<ojRatingGauge["preserveAspectRatio"]>;
    'readonlyChanged': JetElementCustomEvent<ojRatingGauge["readonly"]>;
    'selectedStateChanged': JetElementCustomEvent<ojRatingGauge["selectedState"]>;
    'stepChanged': JetElementCustomEvent<ojRatingGauge["step"]>;
    'thresholdsChanged': JetElementCustomEvent<ojRatingGauge["thresholds"]>;
    'tooltipChanged': JetElementCustomEvent<ojRatingGauge["tooltip"]>;
    'transientValueChanged': JetElementCustomEvent<ojRatingGauge["transientValue"]>;
    'unselectedStateChanged': JetElementCustomEvent<ojRatingGauge["unselectedState"]>;
    'valueChanged': JetElementCustomEvent<ojRatingGauge["value"]>;
    'visualEffectsChanged': JetElementCustomEvent<ojRatingGauge["visualEffects"]>;
}
export interface ojRatingGaugeSettableProperties extends dvtBaseGaugeSettableProperties {
    changed: boolean;
    changedState: {
        borderColor?: string;
        color?: string;
        shape?: 'circle' | 'diamond' | 'human' | 'square' | 'star' | 'triangle' | string;
        source?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    hoverState: {
        borderColor?: string;
        color?: string;
        shape?: 'circle' | 'diamond' | 'human' | 'square' | 'star' | 'triangle' | string;
        source?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    max: number;
    min: number;
    orientation: 'vertical' | 'horizontal';
    preserveAspectRatio: 'none' | 'meet';
    readonly: boolean;
    selectedState: {
        borderColor?: string;
        color?: string;
        shape?: 'circle' | 'diamond' | 'human' | 'square' | 'star' | 'triangle' | string;
        source?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    step: 0.5 | 1;
    thresholds: ojRatingGauge.Threshold[];
    tooltip: {
        renderer: ((context: ojRatingGauge.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    readonly transientValue: number | null;
    unselectedState: {
        borderColor?: string;
        color?: string;
        shape?: 'circle' | 'diamond' | 'human' | 'square' | 'star' | 'triangle' | string;
        source?: string;
        svgClassName?: string;
        svgStyle?: object;
    };
    value: number | null;
    visualEffects: 'none' | 'auto';
}
export interface ojRatingGaugeSettablePropertiesLenient extends Partial<ojRatingGaugeSettableProperties> {
    [key: string]: any;
}
export namespace ojRatingGauge {
    // tslint:disable-next-line interface-over-type-literal
    type Threshold = {
        borderColor?: string;
        color?: string;
        max?: number;
        shortDesc?: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext = {
        color: string;
        componentElement: Element;
        label: string;
        parentElement: Element;
    };
}
export interface ojStatusMeterGauge extends dvtBaseGauge<ojStatusMeterGaugeSettableProperties> {
    angleExtent: number;
    animationDuration?: number;
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    borderColor: string;
    borderRadius: string;
    center: {
        renderer: ((context: ojStatusMeterGauge.CenterContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    color: string;
    indicatorSize: number;
    innerRadius: number;
    label: {
        position?: 'center' | 'start' | 'auto';
        style?: object;
        text?: string;
    };
    max: number;
    metricLabel: {
        converter?: Converter<string>;
        position?: 'center' | 'insideIndicatorEdge' | 'outsideIndicatorEdge' | 'outsidePlotArea' | 'withLabel' | 'auto';
        rendered?: 'on' | 'off' | 'auto';
        scaling?: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
        style?: object;
        text?: string;
        textType?: 'percent' | 'number';
    };
    min: number;
    orientation: 'circular' | 'vertical' | 'horizontal';
    plotArea: {
        borderColor?: string;
        borderRadius?: string;
        color?: string;
        rendered?: 'on' | 'off' | 'auto';
        svgClassName?: string;
        svgStyle?: object;
    };
    readonly: boolean;
    referenceLines: ojStatusMeterGauge.ReferenceLine[];
    startAngle: number;
    step: number | null;
    svgClassName: string;
    svgStyle: object;
    thresholdDisplay: 'currentOnly' | 'all' | 'onIndicator';
    thresholds: ojStatusMeterGauge.Threshold[];
    tooltip: {
        renderer: ((context: ojStatusMeterGauge.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    readonly transientValue: number | null;
    value: number | null;
    visualEffects: 'none' | 'auto';
    onAngleExtentChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["angleExtent"]>) => any) | null;
    onAnimationDurationChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["animationDuration"]>) => any) | null;
    onAnimationOnDataChangeChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["animationOnDataChange"]>) => any) | null;
    onAnimationOnDisplayChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["animationOnDisplay"]>) => any) | null;
    onBorderColorChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["borderColor"]>) => any) | null;
    onBorderRadiusChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["borderRadius"]>) => any) | null;
    onCenterChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["center"]>) => any) | null;
    onColorChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["color"]>) => any) | null;
    onIndicatorSizeChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["indicatorSize"]>) => any) | null;
    onInnerRadiusChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["innerRadius"]>) => any) | null;
    onLabelChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["label"]>) => any) | null;
    onMaxChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["max"]>) => any) | null;
    onMetricLabelChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["metricLabel"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["min"]>) => any) | null;
    onOrientationChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["orientation"]>) => any) | null;
    onPlotAreaChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["plotArea"]>) => any) | null;
    onReadonlyChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["readonly"]>) => any) | null;
    onReferenceLinesChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["referenceLines"]>) => any) | null;
    onStartAngleChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["startAngle"]>) => any) | null;
    onStepChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["step"]>) => any) | null;
    onSvgClassNameChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["svgClassName"]>) => any) | null;
    onSvgStyleChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["svgStyle"]>) => any) | null;
    onThresholdDisplayChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["thresholdDisplay"]>) => any) | null;
    onThresholdsChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["thresholds"]>) => any) | null;
    onTooltipChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["tooltip"]>) => any) | null;
    onTransientValueChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["transientValue"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["value"]>) => any) | null;
    onVisualEffectsChanged: ((event: JetElementCustomEvent<ojStatusMeterGauge["visualEffects"]>) => any) | null;
    addEventListener<T extends keyof ojStatusMeterGaugeEventMap>(type: T, listener: (this: HTMLElement, ev: ojStatusMeterGaugeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojStatusMeterGaugeSettableProperties>(property: T): ojStatusMeterGauge[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojStatusMeterGaugeSettableProperties>(property: T, value: ojStatusMeterGaugeSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojStatusMeterGaugeSettableProperties>): void;
    setProperties(properties: ojStatusMeterGaugeSettablePropertiesLenient): void;
    getMetricLabel(): string;
}
export interface ojStatusMeterGaugeEventMap extends dvtBaseGaugeEventMap<ojStatusMeterGaugeSettableProperties> {
    'angleExtentChanged': JetElementCustomEvent<ojStatusMeterGauge["angleExtent"]>;
    'animationDurationChanged': JetElementCustomEvent<ojStatusMeterGauge["animationDuration"]>;
    'animationOnDataChangeChanged': JetElementCustomEvent<ojStatusMeterGauge["animationOnDataChange"]>;
    'animationOnDisplayChanged': JetElementCustomEvent<ojStatusMeterGauge["animationOnDisplay"]>;
    'borderColorChanged': JetElementCustomEvent<ojStatusMeterGauge["borderColor"]>;
    'borderRadiusChanged': JetElementCustomEvent<ojStatusMeterGauge["borderRadius"]>;
    'centerChanged': JetElementCustomEvent<ojStatusMeterGauge["center"]>;
    'colorChanged': JetElementCustomEvent<ojStatusMeterGauge["color"]>;
    'indicatorSizeChanged': JetElementCustomEvent<ojStatusMeterGauge["indicatorSize"]>;
    'innerRadiusChanged': JetElementCustomEvent<ojStatusMeterGauge["innerRadius"]>;
    'labelChanged': JetElementCustomEvent<ojStatusMeterGauge["label"]>;
    'maxChanged': JetElementCustomEvent<ojStatusMeterGauge["max"]>;
    'metricLabelChanged': JetElementCustomEvent<ojStatusMeterGauge["metricLabel"]>;
    'minChanged': JetElementCustomEvent<ojStatusMeterGauge["min"]>;
    'orientationChanged': JetElementCustomEvent<ojStatusMeterGauge["orientation"]>;
    'plotAreaChanged': JetElementCustomEvent<ojStatusMeterGauge["plotArea"]>;
    'readonlyChanged': JetElementCustomEvent<ojStatusMeterGauge["readonly"]>;
    'referenceLinesChanged': JetElementCustomEvent<ojStatusMeterGauge["referenceLines"]>;
    'startAngleChanged': JetElementCustomEvent<ojStatusMeterGauge["startAngle"]>;
    'stepChanged': JetElementCustomEvent<ojStatusMeterGauge["step"]>;
    'svgClassNameChanged': JetElementCustomEvent<ojStatusMeterGauge["svgClassName"]>;
    'svgStyleChanged': JetElementCustomEvent<ojStatusMeterGauge["svgStyle"]>;
    'thresholdDisplayChanged': JetElementCustomEvent<ojStatusMeterGauge["thresholdDisplay"]>;
    'thresholdsChanged': JetElementCustomEvent<ojStatusMeterGauge["thresholds"]>;
    'tooltipChanged': JetElementCustomEvent<ojStatusMeterGauge["tooltip"]>;
    'transientValueChanged': JetElementCustomEvent<ojStatusMeterGauge["transientValue"]>;
    'valueChanged': JetElementCustomEvent<ojStatusMeterGauge["value"]>;
    'visualEffectsChanged': JetElementCustomEvent<ojStatusMeterGauge["visualEffects"]>;
}
export interface ojStatusMeterGaugeSettableProperties extends dvtBaseGaugeSettableProperties {
    angleExtent: number;
    animationDuration?: number;
    animationOnDataChange: 'auto' | 'none';
    animationOnDisplay: 'auto' | 'none';
    borderColor: string;
    borderRadius: string;
    center: {
        renderer: ((context: ojStatusMeterGauge.CenterContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    color: string;
    indicatorSize: number;
    innerRadius: number;
    label: {
        position?: 'center' | 'start' | 'auto';
        style?: object;
        text?: string;
    };
    max: number;
    metricLabel: {
        converter?: Converter<string>;
        position?: 'center' | 'insideIndicatorEdge' | 'outsideIndicatorEdge' | 'outsidePlotArea' | 'withLabel' | 'auto';
        rendered?: 'on' | 'off' | 'auto';
        scaling?: 'none' | 'thousand' | 'million' | 'billion' | 'trillion' | 'quadrillion' | 'auto';
        style?: object;
        text?: string;
        textType?: 'percent' | 'number';
    };
    min: number;
    orientation: 'circular' | 'vertical' | 'horizontal';
    plotArea: {
        borderColor?: string;
        borderRadius?: string;
        color?: string;
        rendered?: 'on' | 'off' | 'auto';
        svgClassName?: string;
        svgStyle?: object;
    };
    readonly: boolean;
    referenceLines: ojStatusMeterGauge.ReferenceLine[];
    startAngle: number;
    step: number | null;
    svgClassName: string;
    svgStyle: object;
    thresholdDisplay: 'currentOnly' | 'all' | 'onIndicator';
    thresholds: ojStatusMeterGauge.Threshold[];
    tooltip: {
        renderer: ((context: ojStatusMeterGauge.TooltipContext) => ({
            insert: Element | string;
        } | {
            preventDefault: boolean;
        }));
    };
    readonly transientValue: number | null;
    value: number | null;
    visualEffects: 'none' | 'auto';
}
export interface ojStatusMeterGaugeSettablePropertiesLenient extends Partial<ojStatusMeterGaugeSettableProperties> {
    [key: string]: any;
}
export namespace ojStatusMeterGauge {
    // tslint:disable-next-line interface-over-type-literal
    type Bounds = {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type CenterContext = {
        componentElement: Element;
        innerBounds: Bounds;
        metricLabel: string;
        outerBounds: Bounds;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ReferenceLine = {
        color?: string;
        value?: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type Threshold = {
        borderColor?: string;
        color?: string;
        max?: number;
        shortDesc?: string;
    };
    // tslint:disable-next-line interface-over-type-literal
    type TooltipContext = {
        color: string;
        componentElement: Element;
        label: string;
        parentElement: Element;
    };
}
