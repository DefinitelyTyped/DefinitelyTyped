import {
    baseComponent,
    baseComponentEventMap,
    baseComponentSettableProperties,
    JetElementCustomEvent,
    JetSetPropertyType,
} from "..";
export interface dvtBaseComponent<SP extends dvtBaseComponentSettableProperties = dvtBaseComponentSettableProperties>
    extends baseComponent<SP>
{
    trackResize: "on" | "off";
    translations: {
        labelAndValue?: string | undefined;
        labelClearSelection?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelInvalidData?: string | undefined;
        labelNoData?: string | undefined;
        stateCollapsed?: string | undefined;
        stateDrillable?: string | undefined;
        stateExpanded?: string | undefined;
        stateHidden?: string | undefined;
        stateIsolated?: string | undefined;
        stateMaximized?: string | undefined;
        stateMinimized?: string | undefined;
        stateSelected?: string | undefined;
        stateUnselected?: string | undefined;
        stateVisible?: string | undefined;
    };
    onTrackResizeChanged: ((event: JetElementCustomEvent<dvtBaseComponent<SP>["trackResize"]>) => any) | null;
    addEventListener<T extends keyof dvtBaseComponentEventMap<SP>>(
        type: T,
        listener: (this: HTMLElement, ev: dvtBaseComponentEventMap<SP>[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof dvtBaseComponentSettableProperties>(property: T): dvtBaseComponent<SP>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof dvtBaseComponentSettableProperties>(
        property: T,
        value: dvtBaseComponentSettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, dvtBaseComponentSettableProperties>): void;
    setProperties(properties: dvtBaseComponentSettablePropertiesLenient): void;
}
export interface dvtBaseComponentEventMap<
    SP extends dvtBaseComponentSettableProperties = dvtBaseComponentSettableProperties,
> extends baseComponentEventMap<SP> {
    "trackResizeChanged": JetElementCustomEvent<dvtBaseComponent<SP>["trackResize"]>;
}
export interface dvtBaseComponentSettableProperties extends baseComponentSettableProperties {
    trackResize: "on" | "off";
    translations: {
        labelAndValue?: string | undefined;
        labelClearSelection?: string | undefined;
        labelCountWithTotal?: string | undefined;
        labelDataVisualization?: string | undefined;
        labelInvalidData?: string | undefined;
        labelNoData?: string | undefined;
        stateCollapsed?: string | undefined;
        stateDrillable?: string | undefined;
        stateExpanded?: string | undefined;
        stateHidden?: string | undefined;
        stateIsolated?: string | undefined;
        stateMaximized?: string | undefined;
        stateMinimized?: string | undefined;
        stateSelected?: string | undefined;
        stateUnselected?: string | undefined;
        stateVisible?: string | undefined;
    };
}
export interface dvtBaseComponentSettablePropertiesLenient extends Partial<dvtBaseComponentSettableProperties> {
    [key: string]: any;
}
