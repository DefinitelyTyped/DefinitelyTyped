import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojSlider extends editableValue<number | null, ojSliderSettableProperties> {
    disabled: boolean;
    max: number | null;
    min: number | null;
    orientation: 'horizontal' | 'vertical';
    step: number | null;
    readonly transientValue: number;
    type: 'fromMin' | 'fromMax' | 'single';
    value: number | null;
    translations: {
        invalidStep?: string;
        maxMin?: string;
        noValue?: string;
        optionNum?: string;
        valueRange?: string;
    };
    onDisabledChanged: ((event: JetElementCustomEvent<ojSlider["disabled"]>) => any) | null;
    onMaxChanged: ((event: JetElementCustomEvent<ojSlider["max"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojSlider["min"]>) => any) | null;
    onOrientationChanged: ((event: JetElementCustomEvent<ojSlider["orientation"]>) => any) | null;
    onStepChanged: ((event: JetElementCustomEvent<ojSlider["step"]>) => any) | null;
    onTransientValueChanged: ((event: JetElementCustomEvent<ojSlider["transientValue"]>) => any) | null;
    onTypeChanged: ((event: JetElementCustomEvent<ojSlider["type"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojSlider["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojSlider.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojSlider.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojSliderEventMap>(type: T, listener: (this: HTMLElement, ev: ojSliderEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojSliderSettableProperties>(property: T): ojSlider[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojSliderSettableProperties>(property: T, value: ojSliderSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojSliderSettableProperties>): void;
    setProperties(properties: ojSliderSettablePropertiesLenient): void;
}
export namespace ojSlider {
    interface ojAnimateEnd extends CustomEvent<{
        action: string;
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: string;
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
}
export interface ojSliderEventMap extends editableValueEventMap<number | null, ojSliderSettableProperties> {
    'ojAnimateEnd': ojSlider.ojAnimateEnd;
    'ojAnimateStart': ojSlider.ojAnimateStart;
    'disabledChanged': JetElementCustomEvent<ojSlider["disabled"]>;
    'maxChanged': JetElementCustomEvent<ojSlider["max"]>;
    'minChanged': JetElementCustomEvent<ojSlider["min"]>;
    'orientationChanged': JetElementCustomEvent<ojSlider["orientation"]>;
    'stepChanged': JetElementCustomEvent<ojSlider["step"]>;
    'transientValueChanged': JetElementCustomEvent<ojSlider["transientValue"]>;
    'typeChanged': JetElementCustomEvent<ojSlider["type"]>;
    'valueChanged': JetElementCustomEvent<ojSlider["value"]>;
}
export interface ojSliderSettableProperties extends editableValueSettableProperties<number | null> {
    disabled: boolean;
    max: number | null;
    min: number | null;
    orientation: 'horizontal' | 'vertical';
    step: number | null;
    readonly transientValue: number;
    type: 'fromMin' | 'fromMax' | 'single';
    value: number | null;
    translations: {
        invalidStep?: string;
        maxMin?: string;
        noValue?: string;
        optionNum?: string;
        valueRange?: string;
    };
}
export interface ojSliderSettablePropertiesLenient extends Partial<ojSliderSettableProperties> {
    [key: string]: any;
}
