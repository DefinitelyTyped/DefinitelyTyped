import { Converter, Validator, Validation } from '../ojvalidation-base';
import { inputBase, inputBaseEventMap, inputBaseSettableProperties } from '../ojinputtext';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojDatePicker extends ojInputDate<ojDatePickerSettableProperties> {
    keyboardEdit: 'disabled';
    max: string | null;
    min: string | null;
    renderMode: 'jet';
    value: string;
    onMaxChanged: ((event: JetElementCustomEvent<ojDatePicker["max"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojDatePicker["min"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojDatePicker["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojDatePicker.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojDatePicker.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojDatePickerEventMap>(type: T, listener: (this: HTMLElement, ev: ojDatePickerEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojDatePickerSettableProperties>(property: T): ojDatePicker[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojDatePickerSettableProperties>(property: T, value: ojDatePickerSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojDatePickerSettableProperties>): void;
    setProperties(properties: ojDatePickerSettablePropertiesLenient): void;
}
export namespace ojDatePicker {
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
export interface ojDatePickerEventMap extends ojInputDateEventMap<ojDatePickerSettableProperties> {
    'ojAnimateEnd': ojDatePicker.ojAnimateEnd;
    'ojAnimateStart': ojDatePicker.ojAnimateStart;
    'maxChanged': JetElementCustomEvent<ojDatePicker["max"]>;
    'minChanged': JetElementCustomEvent<ojDatePicker["min"]>;
    'valueChanged': JetElementCustomEvent<ojDatePicker["value"]>;
}
export interface ojDatePickerSettableProperties extends ojInputDateSettableProperties {
    keyboardEdit: 'disabled';
    max: string | null;
    min: string | null;
    renderMode: 'jet';
    value: string;
}
export interface ojDatePickerSettablePropertiesLenient extends Partial<ojDatePickerSettableProperties> {
    [key: string]: any;
}
export interface ojDateTimePicker extends ojInputDateTime<ojDateTimePickerSettableProperties> {
    keyboardEdit: 'disabled';
    max: string | null;
    min: string | null;
    renderMode: 'jet';
    value: string;
    onMaxChanged: ((event: JetElementCustomEvent<ojDateTimePicker["max"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojDateTimePicker["min"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojDateTimePicker["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojDateTimePicker.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojDateTimePicker.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojDateTimePickerEventMap>(type: T, listener: (this: HTMLElement, ev: ojDateTimePickerEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojDateTimePickerSettableProperties>(property: T): ojDateTimePicker[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojDateTimePickerSettableProperties>(property: T, value: ojDateTimePickerSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojDateTimePickerSettableProperties>): void;
    setProperties(properties: ojDateTimePickerSettablePropertiesLenient): void;
}
export namespace ojDateTimePicker {
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
export interface ojDateTimePickerEventMap extends ojInputDateTimeEventMap<ojDateTimePickerSettableProperties> {
    'ojAnimateEnd': ojDateTimePicker.ojAnimateEnd;
    'ojAnimateStart': ojDateTimePicker.ojAnimateStart;
    'maxChanged': JetElementCustomEvent<ojDateTimePicker["max"]>;
    'minChanged': JetElementCustomEvent<ojDateTimePicker["min"]>;
    'valueChanged': JetElementCustomEvent<ojDateTimePicker["value"]>;
}
export interface ojDateTimePickerSettableProperties extends ojInputDateTimeSettableProperties {
    keyboardEdit: 'disabled';
    max: string | null;
    min: string | null;
    renderMode: 'jet';
    value: string;
}
export interface ojDateTimePickerSettablePropertiesLenient extends Partial<ojDateTimePickerSettableProperties> {
    [key: string]: any;
}
export interface ojInputDate<SP extends ojInputDateSettableProperties = ojInputDateSettableProperties> extends inputBase<string, SP> {
    converter: Converter<string> | Validation.RegisteredConverter;
    datePicker: {
        changeMonth: 'select' | 'none';
        changeYear: 'select' | 'none';
        currentMonthPos: number;
        daysOutsideMonth: 'hidden' | 'visible' | 'selectable';
        footerLayout: '' | 'today';
        numberOfMonths: number;
        showOn: 'focus' | 'image';
        stepBigMonths: number;
        stepMonths: 'numberOfMonths' | number;
        weekDisplay: 'number' | 'none';
        yearRange: string;
    };
    dayFormatter: (param: ojInputDate.DayFormatterInput) => (null | 'all' | ojInputDate.DayFormatterOutput);
    dayMetaData: {
        [key: string]: {
            [key: string]: {
                [key: string]: {
                    disabled?: boolean;
                    className?: string;
                    tooltip?: string;
                };
            };
        };
    };
    keyboardEdit: 'enabled' | 'disabled';
    max: string | null;
    min: string | null;
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    renderMode: 'jet' | 'native';
    validators: Array<Validator<string> | Validation.RegisteredValidator> | null;
    value: string;
    translations: {
        currentText?: string;
        dateRestriction?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        dateTimeRange?: {
            hint?: {
                inRange?: string;
                max?: string;
                min?: string;
            };
            messageDetail?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
            messageSummary?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
        };
        nextText?: string;
        prevText?: string;
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        tooltipCalendar?: string;
        tooltipCalendarDisabled?: string;
        tooltipCalendarTime?: string;
        tooltipCalendarTimeDisabled?: string;
        weekHeader?: string;
    };
    onConverterChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["converter"]>) => any) | null;
    onDatePickerChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["datePicker"]>) => any) | null;
    onDayFormatterChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["dayFormatter"]>) => any) | null;
    onDayMetaDataChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["dayMetaData"]>) => any) | null;
    onKeyboardEditChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["keyboardEdit"]>) => any) | null;
    onMaxChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["max"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["min"]>) => any) | null;
    onPickerAttributesChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["pickerAttributes"]>) => any) | null;
    onRenderModeChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["renderMode"]>) => any) | null;
    onValidatorsChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["validators"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojInputDate<SP>["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojInputDate.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojInputDate.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojInputDateEventMap<SP>>(type: T, listener: (this: HTMLElement, ev: ojInputDateEventMap<SP>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojInputDateSettableProperties>(property: T): ojInputDate<SP>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojInputDateSettableProperties>(property: T, value: ojInputDateSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojInputDateSettableProperties>): void;
    setProperties(properties: ojInputDateSettablePropertiesLenient): void;
    hide(): void;
    refresh(): void;
    show(): void;
}
export namespace ojInputDate {
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
    // tslint:disable-next-line interface-over-type-literal
    type DayFormatterInput = {
        fullYear: number;
        month: number;
        date: number;
    };
    // tslint:disable-next-line interface-over-type-literal
    type DayFormatterOutput = {
        disabled?: boolean;
        className?: string;
        tooltip?: string;
    };
}
export interface ojInputDateEventMap<SP extends ojInputDateSettableProperties = ojInputDateSettableProperties> extends inputBaseEventMap<string, SP> {
    'ojAnimateEnd': ojInputDate.ojAnimateEnd;
    'ojAnimateStart': ojInputDate.ojAnimateStart;
    'converterChanged': JetElementCustomEvent<ojInputDate<SP>["converter"]>;
    'datePickerChanged': JetElementCustomEvent<ojInputDate<SP>["datePicker"]>;
    'dayFormatterChanged': JetElementCustomEvent<ojInputDate<SP>["dayFormatter"]>;
    'dayMetaDataChanged': JetElementCustomEvent<ojInputDate<SP>["dayMetaData"]>;
    'keyboardEditChanged': JetElementCustomEvent<ojInputDate<SP>["keyboardEdit"]>;
    'maxChanged': JetElementCustomEvent<ojInputDate<SP>["max"]>;
    'minChanged': JetElementCustomEvent<ojInputDate<SP>["min"]>;
    'pickerAttributesChanged': JetElementCustomEvent<ojInputDate<SP>["pickerAttributes"]>;
    'renderModeChanged': JetElementCustomEvent<ojInputDate<SP>["renderMode"]>;
    'validatorsChanged': JetElementCustomEvent<ojInputDate<SP>["validators"]>;
    'valueChanged': JetElementCustomEvent<ojInputDate<SP>["value"]>;
}
export interface ojInputDateSettableProperties extends inputBaseSettableProperties<string> {
    converter: Converter<string> | Validation.RegisteredConverter;
    datePicker: {
        changeMonth: 'select' | 'none';
        changeYear: 'select' | 'none';
        currentMonthPos: number;
        daysOutsideMonth: 'hidden' | 'visible' | 'selectable';
        footerLayout: '' | 'today';
        numberOfMonths: number;
        showOn: 'focus' | 'image';
        stepBigMonths: number;
        stepMonths: 'numberOfMonths' | number;
        weekDisplay: 'number' | 'none';
        yearRange: string;
    };
    dayFormatter: (param: ojInputDate.DayFormatterInput) => (null | 'all' | ojInputDate.DayFormatterOutput);
    dayMetaData: {
        [key: string]: {
            [key: string]: {
                [key: string]: {
                    disabled?: boolean;
                    className?: string;
                    tooltip?: string;
                };
            };
        };
    };
    keyboardEdit: 'enabled' | 'disabled';
    max: string | null;
    min: string | null;
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    renderMode: 'jet' | 'native';
    validators: Array<Validator<string> | Validation.RegisteredValidator> | null;
    value: string;
    translations: {
        currentText?: string;
        dateRestriction?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        dateTimeRange?: {
            hint?: {
                inRange?: string;
                max?: string;
                min?: string;
            };
            messageDetail?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
            messageSummary?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
        };
        nextText?: string;
        prevText?: string;
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        tooltipCalendar?: string;
        tooltipCalendarDisabled?: string;
        tooltipCalendarTime?: string;
        tooltipCalendarTimeDisabled?: string;
        weekHeader?: string;
    };
}
export interface ojInputDateSettablePropertiesLenient extends Partial<ojInputDateSettableProperties> {
    [key: string]: any;
}
export interface ojInputDateTime<SP extends ojInputDateTimeSettableProperties = ojInputDateTimeSettableProperties> extends ojInputDate<SP> {
    converter: Converter<string> | Validation.RegisteredConverter;
    max: string | null;
    min: string | null;
    renderMode: 'jet' | 'native';
    timePicker: {
        footerLayout: '' | 'now';
        showOn: 'focus' | 'image';
        timeIncrement: string;
    };
    validators: Array<Validator<string> | Validation.RegisteredValidator> | null;
    value: string;
    translations: {
        cancel?: string;
        currentText?: string;
        dateRestriction?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        dateTimeRange?: {
            hint?: {
                inRange?: string;
                max?: string;
                min?: string;
            };
            messageDetail?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
            messageSummary?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
        };
        done?: string;
        nextText?: string;
        prevText?: string;
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        tooltipCalendar?: string;
        tooltipCalendarDisabled?: string;
        tooltipCalendarTime?: string;
        tooltipCalendarTimeDisabled?: string;
        weekHeader?: string;
    };
    onConverterChanged: ((event: JetElementCustomEvent<ojInputDateTime<SP>["converter"]>) => any) | null;
    onMaxChanged: ((event: JetElementCustomEvent<ojInputDateTime<SP>["max"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojInputDateTime<SP>["min"]>) => any) | null;
    onRenderModeChanged: ((event: JetElementCustomEvent<ojInputDateTime<SP>["renderMode"]>) => any) | null;
    onTimePickerChanged: ((event: JetElementCustomEvent<ojInputDateTime<SP>["timePicker"]>) => any) | null;
    onValidatorsChanged: ((event: JetElementCustomEvent<ojInputDateTime<SP>["validators"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojInputDateTime<SP>["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojInputDateTime.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojInputDateTime.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojInputDateTimeEventMap<SP>>(type: T, listener: (this: HTMLElement, ev: ojInputDateTimeEventMap<SP>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojInputDateTimeSettableProperties>(property: T): ojInputDateTime<SP>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojInputDateTimeSettableProperties>(property: T, value: ojInputDateTimeSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojInputDateTimeSettableProperties>): void;
    setProperties(properties: ojInputDateTimeSettablePropertiesLenient): void;
    hideTimePicker(): void;
    show(): void;
    showTimePicker(): void;
}
export namespace ojInputDateTime {
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
export interface ojInputDateTimeEventMap<SP extends ojInputDateTimeSettableProperties = ojInputDateTimeSettableProperties> extends ojInputDateEventMap<SP> {
    'ojAnimateEnd': ojInputDateTime.ojAnimateEnd;
    'ojAnimateStart': ojInputDateTime.ojAnimateStart;
    'converterChanged': JetElementCustomEvent<ojInputDateTime<SP>["converter"]>;
    'maxChanged': JetElementCustomEvent<ojInputDateTime<SP>["max"]>;
    'minChanged': JetElementCustomEvent<ojInputDateTime<SP>["min"]>;
    'renderModeChanged': JetElementCustomEvent<ojInputDateTime<SP>["renderMode"]>;
    'timePickerChanged': JetElementCustomEvent<ojInputDateTime<SP>["timePicker"]>;
    'validatorsChanged': JetElementCustomEvent<ojInputDateTime<SP>["validators"]>;
    'valueChanged': JetElementCustomEvent<ojInputDateTime<SP>["value"]>;
}
export interface ojInputDateTimeSettableProperties extends ojInputDateSettableProperties {
    converter: Converter<string> | Validation.RegisteredConverter;
    max: string | null;
    min: string | null;
    renderMode: 'jet' | 'native';
    timePicker: {
        footerLayout: '' | 'now';
        showOn: 'focus' | 'image';
        timeIncrement: string;
    };
    validators: Array<Validator<string> | Validation.RegisteredValidator> | null;
    value: string;
    translations: {
        cancel?: string;
        currentText?: string;
        dateRestriction?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        dateTimeRange?: {
            hint?: {
                inRange?: string;
                max?: string;
                min?: string;
            };
            messageDetail?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
            messageSummary?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
        };
        done?: string;
        nextText?: string;
        prevText?: string;
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        tooltipCalendar?: string;
        tooltipCalendarDisabled?: string;
        tooltipCalendarTime?: string;
        tooltipCalendarTimeDisabled?: string;
        weekHeader?: string;
    };
}
export interface ojInputDateTimeSettablePropertiesLenient extends Partial<ojInputDateTimeSettableProperties> {
    [key: string]: any;
}
export interface ojInputTime extends inputBase<string, ojInputTimeSettableProperties> {
    converter: Converter<string> | Validation.RegisteredConverter;
    keyboardEdit: 'enabled' | 'disabled';
    max: string | null;
    min: string | null;
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    renderMode: 'jet' | 'native';
    timePicker: {
        footerLayout: '' | 'now';
        showOn: 'focus' | 'image';
        timeIncrement: string;
    };
    validators: Array<Validator<string> | Validation.RegisteredValidator> | null;
    value: string;
    translations: {
        ampmWheelLabel?: string;
        cancelText?: string;
        currentTimeText?: string;
        dateTimeRange?: {
            hint?: {
                inRange?: string;
                max?: string;
                min?: string;
            };
            messageDetail?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
            messageSummary?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
        };
        hourWheelLabel?: string;
        minuteWheelLabel?: string;
        okText?: string;
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        tooltipTime?: string;
        tooltipTimeDisabled?: string;
    };
    onConverterChanged: ((event: JetElementCustomEvent<ojInputTime["converter"]>) => any) | null;
    onKeyboardEditChanged: ((event: JetElementCustomEvent<ojInputTime["keyboardEdit"]>) => any) | null;
    onMaxChanged: ((event: JetElementCustomEvent<ojInputTime["max"]>) => any) | null;
    onMinChanged: ((event: JetElementCustomEvent<ojInputTime["min"]>) => any) | null;
    onPickerAttributesChanged: ((event: JetElementCustomEvent<ojInputTime["pickerAttributes"]>) => any) | null;
    onRenderModeChanged: ((event: JetElementCustomEvent<ojInputTime["renderMode"]>) => any) | null;
    onTimePickerChanged: ((event: JetElementCustomEvent<ojInputTime["timePicker"]>) => any) | null;
    onValidatorsChanged: ((event: JetElementCustomEvent<ojInputTime["validators"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojInputTime["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojInputTime.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojInputTime.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojInputTimeEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputTimeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojInputTimeSettableProperties>(property: T): ojInputTime[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojInputTimeSettableProperties>(property: T, value: ojInputTimeSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojInputTimeSettableProperties>): void;
    setProperties(properties: ojInputTimeSettablePropertiesLenient): void;
    hide(): void;
    refresh(): void;
    show(): void;
}
export namespace ojInputTime {
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
export interface ojInputTimeEventMap extends inputBaseEventMap<string, ojInputTimeSettableProperties> {
    'ojAnimateEnd': ojInputTime.ojAnimateEnd;
    'ojAnimateStart': ojInputTime.ojAnimateStart;
    'converterChanged': JetElementCustomEvent<ojInputTime["converter"]>;
    'keyboardEditChanged': JetElementCustomEvent<ojInputTime["keyboardEdit"]>;
    'maxChanged': JetElementCustomEvent<ojInputTime["max"]>;
    'minChanged': JetElementCustomEvent<ojInputTime["min"]>;
    'pickerAttributesChanged': JetElementCustomEvent<ojInputTime["pickerAttributes"]>;
    'renderModeChanged': JetElementCustomEvent<ojInputTime["renderMode"]>;
    'timePickerChanged': JetElementCustomEvent<ojInputTime["timePicker"]>;
    'validatorsChanged': JetElementCustomEvent<ojInputTime["validators"]>;
    'valueChanged': JetElementCustomEvent<ojInputTime["value"]>;
}
export interface ojInputTimeSettableProperties extends inputBaseSettableProperties<string> {
    converter: Converter<string> | Validation.RegisteredConverter;
    keyboardEdit: 'enabled' | 'disabled';
    max: string | null;
    min: string | null;
    pickerAttributes: {
        style?: string;
        class?: string;
    };
    renderMode: 'jet' | 'native';
    timePicker: {
        footerLayout: '' | 'now';
        showOn: 'focus' | 'image';
        timeIncrement: string;
    };
    validators: Array<Validator<string> | Validation.RegisteredValidator> | null;
    value: string;
    translations: {
        ampmWheelLabel?: string;
        cancelText?: string;
        currentTimeText?: string;
        dateTimeRange?: {
            hint?: {
                inRange?: string;
                max?: string;
                min?: string;
            };
            messageDetail?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
            messageSummary?: {
                rangeOverflow?: string;
                rangeUnderflow?: string;
            };
        };
        hourWheelLabel?: string;
        minuteWheelLabel?: string;
        okText?: string;
        regexp?: {
            messageDetail?: string;
            messageSummary?: string;
        };
        required?: {
            hint?: string;
            messageDetail?: string;
            messageSummary?: string;
        };
        tooltipTime?: string;
        tooltipTimeDisabled?: string;
    };
}
export interface ojInputTimeSettablePropertiesLenient extends Partial<ojInputTimeSettableProperties> {
    [key: string]: any;
}
