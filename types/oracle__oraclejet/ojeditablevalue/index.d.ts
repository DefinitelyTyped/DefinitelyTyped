import Message = require('../ojmessaging');
import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface editableValue<V, SP extends editableValueSettableProperties<V, SV, RV>, SV = V, RV = V> extends baseComponent<SP> {
    describedBy: string | null;
    disabled: boolean;
    displayOptions: {
        converterHint: Array<'placeholder' | 'notewindow' | 'none'> | 'placeholder' | 'notewindow' | 'none';
        helpInstruction: Array<'notewindow' | 'none'> | 'notewindow' | 'none';
        messages: Array<'inline' | 'notewindow' | 'none'> | 'inline' | 'notewindow' | 'none';
        validatorHint: Array<'notewindow' | 'none'> | 'notewindow' | 'none';
    };
    help: {
        instruction?: string;
    };
    helpHints: {
        definition?: string;
        source?: string;
    };
    labelHint: string;
    messagesCustom: Message[];
    readonly valid: 'valid' | 'pending' | 'invalidHidden' | 'invalidShown';
    value: V;
    onDescribedByChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["describedBy"]>) => any) | null;
    onDisabledChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["disabled"]>) => any) | null;
    onDisplayOptionsChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["displayOptions"]>) => any) | null;
    onHelpChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["help"]>) => any) | null;
    onHelpHintsChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["helpHints"]>) => any) | null;
    onLabelHintChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["labelHint"]>) => any) | null;
    onMessagesCustomChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["messagesCustom"]>) => any) | null;
    onValidChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["valid"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<editableValue<V, SP, SV, RV>["value"]>) => any) | null;
    onOjAnimateEnd: ((event: editableValue.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: editableValue.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof editableValueEventMap<V, SP, SV, RV>>(type: T, listener: (this: HTMLElement, ev: editableValueEventMap<V, SP, SV, RV>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof editableValueSettableProperties<V, SV, RV>>(property: T): editableValue<V, SP, SV, RV>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof editableValueSettableProperties<V, SV, RV>>(property: T, value: editableValueSettableProperties<V, SV, RV>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, editableValueSettableProperties<V, SV, RV>>): void;
    setProperties(properties: editableValueSettablePropertiesLenient<V, SV, RV>): void;
    refresh(): void;
    reset(): void;
    showMessages(): void;
}
export namespace editableValue {
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
export interface editableValueEventMap<V, SP extends editableValueSettableProperties<V, SV, RV>, SV = V, RV = V> extends baseComponentEventMap<SP> {
    'ojAnimateEnd': editableValue.ojAnimateEnd;
    'ojAnimateStart': editableValue.ojAnimateStart;
    'describedByChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["describedBy"]>;
    'disabledChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["disabled"]>;
    'displayOptionsChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["displayOptions"]>;
    'helpChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["help"]>;
    'helpHintsChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["helpHints"]>;
    'labelHintChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["labelHint"]>;
    'messagesCustomChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["messagesCustom"]>;
    'validChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["valid"]>;
    'valueChanged': JetElementCustomEvent<editableValue<V, SP, SV, RV>["value"]>;
}
export interface editableValueSettableProperties<V, SV = V, RV = V> extends baseComponentSettableProperties {
    describedBy: string | null;
    disabled: boolean;
    displayOptions: {
        converterHint: Array<'placeholder' | 'notewindow' | 'none'> | 'placeholder' | 'notewindow' | 'none';
        helpInstruction: Array<'notewindow' | 'none'> | 'notewindow' | 'none';
        messages: Array<'inline' | 'notewindow' | 'none'> | 'inline' | 'notewindow' | 'none';
        validatorHint: Array<'notewindow' | 'none'> | 'notewindow' | 'none';
    };
    help: {
        instruction?: string;
    };
    helpHints: {
        definition?: string;
        source?: string;
    };
    labelHint: string;
    messagesCustom: Message[];
    readonly valid: 'valid' | 'pending' | 'invalidHidden' | 'invalidShown';
    value: SV;
}
export interface editableValueSettablePropertiesLenient<V, SV, RV> extends Partial<editableValueSettableProperties<V, SV, RV>> {
    [key: string]: any;
}
