import Color = require("../ojcolor");
import { JetElement, JetElementCustomEvent, JetSetPropertyType, JetSettableProperties } from "..";
import { editableValue, editableValueEventMap, editableValueSettableProperties } from "../ojeditablevalue";
export interface ojColorSpectrum extends editableValue<Color, ojColorSpectrumSettableProperties> {
    labelledBy: string | null;
    readonly transientValue: Color;
    value: Color;
    translations: {
        labelHue?: string | undefined;
        labelOpacity?: string | undefined;
        labelSatLum?: string | undefined;
        labelThumbDesc?: string | undefined;
    };
    onLabelledByChanged: ((event: JetElementCustomEvent<ojColorSpectrum["labelledBy"]>) => any) | null;
    onTransientValueChanged: ((event: JetElementCustomEvent<ojColorSpectrum["transientValue"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojColorSpectrum["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojColorSpectrum.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojColorSpectrum.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojColorSpectrumEventMap>(
        type: T,
        listener: (this: HTMLElement, ev: ojColorSpectrumEventMap[T]) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojColorSpectrumSettableProperties>(property: T): ojColorSpectrum[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojColorSpectrumSettableProperties>(
        property: T,
        value: ojColorSpectrumSettableProperties[T],
    ): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojColorSpectrumSettableProperties>): void;
    setProperties(properties: ojColorSpectrumSettablePropertiesLenient): void;
}
export namespace ojColorSpectrum {
    interface ojAnimateEnd extends
        CustomEvent<{
            action: string;
            element: Element;
            [propName: string]: any;
        }>
    {
    }
    interface ojAnimateStart extends
        CustomEvent<{
            action: string;
            element: Element;
            endCallback: () => void;
            [propName: string]: any;
        }>
    {
    }
}
export interface ojColorSpectrumEventMap extends editableValueEventMap<Color, ojColorSpectrumSettableProperties> {
    "ojAnimateEnd": ojColorSpectrum.ojAnimateEnd;
    "ojAnimateStart": ojColorSpectrum.ojAnimateStart;
    "labelledByChanged": JetElementCustomEvent<ojColorSpectrum["labelledBy"]>;
    "transientValueChanged": JetElementCustomEvent<ojColorSpectrum["transientValue"]>;
    "valueChanged": JetElementCustomEvent<ojColorSpectrum["value"]>;
}
export interface ojColorSpectrumSettableProperties extends editableValueSettableProperties<Color> {
    labelledBy: string | null;
    readonly transientValue: Color;
    value: Color;
    translations: {
        labelHue?: string | undefined;
        labelOpacity?: string | undefined;
        labelSatLum?: string | undefined;
        labelThumbDesc?: string | undefined;
    };
}
export interface ojColorSpectrumSettablePropertiesLenient extends Partial<ojColorSpectrumSettableProperties> {
    [key: string]: any;
}
