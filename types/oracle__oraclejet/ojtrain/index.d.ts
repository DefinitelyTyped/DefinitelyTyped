import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojTrain extends baseComponent<ojTrainSettableProperties> {
    selectedStep: string;
    steps: ojTrain.Step[];
    onSelectedStepChanged: ((event: JetElementCustomEvent<ojTrain["selectedStep"]>) => any) | null;
    onStepsChanged: ((event: JetElementCustomEvent<ojTrain["steps"]>) => any) | null;
    onOjBeforeDeselect: ((event: ojTrain.ojBeforeDeselect) => any) | null;
    onOjBeforeSelect: ((event: ojTrain.ojBeforeSelect) => any) | null;
    onOjDeselect: ((event: ojTrain.ojDeselect) => any) | null;
    onOjSelect: ((event: ojTrain.ojSelect) => any) | null;
    addEventListener<T extends keyof ojTrainEventMap>(type: T, listener: (this: HTMLElement, ev: ojTrainEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTrainSettableProperties>(property: T): ojTrain[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTrainSettableProperties>(property: T, value: ojTrainSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTrainSettableProperties>): void;
    setProperties(properties: ojTrainSettablePropertiesLenient): void;
    getNextSelectableStep(): string | null;
    getPreviousSelectableStep(): string | null;
    getStep(id: string): ojTrain.Step | null;
    refresh(): void;
    updateStep(id: string, stepProperties: {
        id?: string;
        label?: string;
        disabled?: boolean;
        visited?: boolean;
        messageType?: 'info' | 'error' | 'fatal' | 'warning';
    }): void;
}
export namespace ojTrain {
    interface ojBeforeDeselect extends CustomEvent<{
        toStep: string;
        fromStep: string;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeSelect extends CustomEvent<{
        toStep: string;
        fromStep: string;
        [propName: string]: any;
    }> {
    }
    interface ojDeselect extends CustomEvent<{
        toStep: string;
        fromStep: string;
        [propName: string]: any;
    }> {
    }
    interface ojSelect extends CustomEvent<{
        toStep: string;
        fromStep: string;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type Step = {
        id: string;
        label: string;
        disabled?: boolean;
        visited?: boolean;
        messageType?: 'info' | 'error' | 'fatal' | 'warning';
    };
}
export interface ojTrainEventMap extends baseComponentEventMap<ojTrainSettableProperties> {
    'ojBeforeDeselect': ojTrain.ojBeforeDeselect;
    'ojBeforeSelect': ojTrain.ojBeforeSelect;
    'ojDeselect': ojTrain.ojDeselect;
    'ojSelect': ojTrain.ojSelect;
    'selectedStepChanged': JetElementCustomEvent<ojTrain["selectedStep"]>;
    'stepsChanged': JetElementCustomEvent<ojTrain["steps"]>;
}
export interface ojTrainSettableProperties extends baseComponentSettableProperties {
    selectedStep: string;
    steps: ojTrain.Step[];
}
export interface ojTrainSettablePropertiesLenient extends Partial<ojTrainSettableProperties> {
    [key: string]: any;
}
