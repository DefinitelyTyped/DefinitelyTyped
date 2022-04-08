import { Converter } from '../ojvalidation-base';
import { dvtBaseComponent, dvtBaseComponentEventMap, dvtBaseComponentSettableProperties } from '../ojdvt-base';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojTimeAxis extends dvtBaseComponent<ojTimeAxisSettableProperties> {
    converter: ojTimeAxis.Converters | Converter<string>;
    end: string;
    scale: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
    start: string;
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
    onConverterChanged: ((event: JetElementCustomEvent<ojTimeAxis["converter"]>) => any) | null;
    onEndChanged: ((event: JetElementCustomEvent<ojTimeAxis["end"]>) => any) | null;
    onScaleChanged: ((event: JetElementCustomEvent<ojTimeAxis["scale"]>) => any) | null;
    onStartChanged: ((event: JetElementCustomEvent<ojTimeAxis["start"]>) => any) | null;
    addEventListener<T extends keyof ojTimeAxisEventMap>(type: T, listener: (this: HTMLElement, ev: ojTimeAxisEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTimeAxisSettableProperties>(property: T): ojTimeAxis[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTimeAxisSettableProperties>(property: T, value: ojTimeAxisSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTimeAxisSettableProperties>): void;
    setProperties(properties: ojTimeAxisSettablePropertiesLenient): void;
}
export interface ojTimeAxisEventMap extends dvtBaseComponentEventMap<ojTimeAxisSettableProperties> {
    'converterChanged': JetElementCustomEvent<ojTimeAxis["converter"]>;
    'endChanged': JetElementCustomEvent<ojTimeAxis["end"]>;
    'scaleChanged': JetElementCustomEvent<ojTimeAxis["scale"]>;
    'startChanged': JetElementCustomEvent<ojTimeAxis["start"]>;
}
export interface ojTimeAxisSettableProperties extends dvtBaseComponentSettableProperties {
    converter: ojTimeAxis.Converters | Converter<string>;
    end: string;
    scale: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'quarters' | 'years';
    start: string;
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
export interface ojTimeAxisSettablePropertiesLenient extends Partial<ojTimeAxisSettableProperties> {
    [key: string]: any;
}
export namespace ojTimeAxis {
    // tslint:disable-next-line interface-over-type-literal
    type Converters = {
        default?: Converter<string>;
        seconds?: Converter<string>;
        minutes?: Converter<string>;
        hours?: Converter<string>;
        days?: Converter<string>;
        weeks?: Converter<string>;
        months?: Converter<string>;
        quarters?: Converter<string>;
        years?: Converter<string>;
    };
}
