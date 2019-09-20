import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface dvtBaseComponent<SP extends dvtBaseComponentSettableProperties = dvtBaseComponentSettableProperties> extends baseComponent<SP> {
    trackResize: 'on' | 'off';
    translations: {
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
    onTrackResizeChanged: ((event: JetElementCustomEvent<dvtBaseComponent<SP>["trackResize"]>) => any) | null;
    addEventListener<T extends keyof dvtBaseComponentEventMap<SP>>(type: T, listener: (this: HTMLElement, ev: dvtBaseComponentEventMap<SP>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof dvtBaseComponentSettableProperties>(property: T): dvtBaseComponent<SP>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof dvtBaseComponentSettableProperties>(property: T, value: dvtBaseComponentSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, dvtBaseComponentSettableProperties>): void;
    setProperties(properties: dvtBaseComponentSettablePropertiesLenient): void;
}
export interface dvtBaseComponentEventMap<SP extends dvtBaseComponentSettableProperties = dvtBaseComponentSettableProperties> extends baseComponentEventMap<SP> {
    'trackResizeChanged': JetElementCustomEvent<dvtBaseComponent<SP>["trackResize"]>;
}
export interface dvtBaseComponentSettableProperties extends baseComponentSettableProperties {
    trackResize: 'on' | 'off';
    translations: {
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
export interface dvtBaseComponentSettablePropertiesLenient extends Partial<dvtBaseComponentSettableProperties> {
    [key: string]: any;
}
