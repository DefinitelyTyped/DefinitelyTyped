/// <reference types='ojs/ojinputtext'/>
/// <reference types='ojs/ojvalidation-base'/>
/// <reference types='ojs/ojvalidation-datetime'/>
declare namespace oj {  
  class ojDatePicker extends ojInputDate<ojDatePickerSettableProperties> {
    keyboardEdit: 'disabled';
    max: string|null;
    min: string|null;
    renderMode: 'jet';
    value: string;
    onKeyboardEditChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onRenderModeChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojDatePicker.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojDatePicker.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojDatePickerEventMap>(type: T, listener: (this: HTMLElement, ev: ojDatePickerEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojDatePicker {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojDatePickerEventMap extends oj.ojInputDateEventMap {
    'ojAnimateEnd': oj.ojDatePicker.ojAnimateEnd;
    'ojAnimateStart': oj.ojDatePicker.ojAnimateStart;
    'keyboardEditChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'minChanged': CustomEvent;
    'renderModeChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojDatePickerSettableProperties extends ojInputDateSettableProperties {
    keyboardEdit: 'disabled';
    max: string|null;
    min: string|null;
    renderMode: 'jet';
    value: string; 
  }

}
declare namespace oj {  
  class ojDateTimePicker extends ojInputDateTime<ojDateTimePickerSettableProperties> {
    keyboardEdit: 'disabled';
    max: string|null;
    min: string|null;
    renderMode: 'jet';
    value: string;
    onKeyboardEditChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onRenderModeChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojDateTimePicker.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojDateTimePicker.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojDateTimePickerEventMap>(type: T, listener: (this: HTMLElement, ev: ojDateTimePickerEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojDateTimePicker {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojDateTimePickerEventMap extends oj.ojInputDateTimeEventMap {
    'ojAnimateEnd': oj.ojDateTimePicker.ojAnimateEnd;
    'ojAnimateStart': oj.ojDateTimePicker.ojAnimateStart;
    'keyboardEditChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'minChanged': CustomEvent;
    'renderModeChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojDateTimePickerSettableProperties extends ojInputDateTimeSettableProperties {
    keyboardEdit: 'disabled';
    max: string|null;
    min: string|null;
    renderMode: 'jet';
    value: string; 
  }

}
declare namespace oj {  
  class ojInputDate<SP extends ojInputDateSettableProperties = ojInputDateSettableProperties> extends inputBase<string, SP> {
    converter: oj.Converter<string>|oj.Validation.RegisteredConverter;
    datePicker: {changeMonth: 'select'|'none', changeYear: 'select'|'none', currentMonthPos: number, daysOutsideMonth: 'hidden'|'visible'|'selectable', footerLayout: ''|'today', numberOfMonths: number, showOn: 'focus'|'image', stepBigMonths: number, stepMonths: 'numberOfMonths'|number, weekDisplay: 'number'|'none', yearRange: string};
    dayFormatter: (param: oj.ojInputDate.DayFormatterInput)=> (null|'all'|oj.ojInputDate.DayFormatterOutput);
    dayMetaData: {[key:string]: {[key:string]: {[key:string]: {disabled?: boolean, className?: string, tooltip?: string}}}};
    keyboardEdit: 'enabled'|'disabled';
    max: string|null;
    min: string|null;
    pickerAttributes: {style?: string, class?: string};
    renderMode: 'jet'|'native';
    validators: Array<oj.Validator<string>|oj.Validation.RegisteredValidator>;
    value: string;
    translations: {currentText?: string, dateRestriction?: {hint?: string, messageDetail?: string, messageSummary?: string}, dateTimeRange?: {hint?: {inRange?: string, max?: string, min?: string}, messageDetail?: {rangeOverflow?: string, rangeUnderflow?: string}, messageSummary?: {rangeOverflow?: string, rangeUnderflow?: string}}, nextText?: string, prevText?: string, regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, tooltipCalendar?: string, tooltipCalendarDisabled?: string, tooltipCalendarTime?: string, tooltipCalendarTimeDisabled?: string, weekHeader?: string};
    onConverterChanged: (event: CustomEvent)=> any;
    onDatePickerChanged: (event: CustomEvent)=> any;
    onDayFormatterChanged: (event: CustomEvent)=> any;
    onDayMetaDataChanged: (event: CustomEvent)=> any;
    onKeyboardEditChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onPickerAttributesChanged: (event: CustomEvent)=> any;
    onRenderModeChanged: (event: CustomEvent)=> any;
    onValidatorsChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojInputDate.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojInputDate.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojInputDateEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputDateEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    hide(): void;
    refresh(): void;
    show(): void;
  }
  namespace ojInputDate {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojInputDateEventMap extends oj.inputBaseEventMap {
    'ojAnimateEnd': oj.ojInputDate.ojAnimateEnd;
    'ojAnimateStart': oj.ojInputDate.ojAnimateStart;
    'converterChanged': CustomEvent;
    'datePickerChanged': CustomEvent;
    'dayFormatterChanged': CustomEvent;
    'dayMetaDataChanged': CustomEvent;
    'keyboardEditChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'minChanged': CustomEvent;
    'pickerAttributesChanged': CustomEvent;
    'renderModeChanged': CustomEvent;
    'validatorsChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojInputDateSettableProperties extends inputBaseSettableProperties<string> {
    converter: oj.Converter<string>|oj.Validation.RegisteredConverter;
    datePicker: {changeMonth: 'select'|'none', changeYear: 'select'|'none', currentMonthPos: number, daysOutsideMonth: 'hidden'|'visible'|'selectable', footerLayout: ''|'today', numberOfMonths: number, showOn: 'focus'|'image', stepBigMonths: number, stepMonths: 'numberOfMonths'|number, weekDisplay: 'number'|'none', yearRange: string};
    dayFormatter: (param: oj.ojInputDate.DayFormatterInput)=> (null|'all'|oj.ojInputDate.DayFormatterOutput);
    dayMetaData: {[key:string]: {[key:string]: {[key:string]: {disabled?: boolean, className?: string, tooltip?: string}}}};
    keyboardEdit: 'enabled'|'disabled';
    max: string|null;
    min: string|null;
    pickerAttributes: {style?: string, class?: string};
    renderMode: 'jet'|'native';
    validators: Array<oj.Validator<string>|oj.Validation.RegisteredValidator>;
    value: string;
    translations: {currentText?: string, dateRestriction?: {hint?: string, messageDetail?: string, messageSummary?: string}, dateTimeRange?: {hint?: {inRange?: string, max?: string, min?: string}, messageDetail?: {rangeOverflow?: string, rangeUnderflow?: string}, messageSummary?: {rangeOverflow?: string, rangeUnderflow?: string}}, nextText?: string, prevText?: string, regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, tooltipCalendar?: string, tooltipCalendarDisabled?: string, tooltipCalendarTime?: string, tooltipCalendarTimeDisabled?: string, weekHeader?: string}; 
  }
  namespace ojInputDate {
    type DayFormatterInput =
    {
      fullYear: number, month: number, date: number
    }
  }
  namespace ojInputDate {
    type DayFormatterOutput =
    {
      disabled?: boolean, className?: string, tooltip?: string
    }
  }

}
declare namespace oj {  
  class ojInputDateTime<SP extends ojInputDateTimeSettableProperties = ojInputDateTimeSettableProperties> extends ojInputDate<SP> {
    converter: oj.Converter<string>|oj.Validation.RegisteredConverter;
    max: string|null;
    min: string|null;
    renderMode: 'jet'|'native';
    timePicker: {footerLayout: ''|'now', showOn: 'focus'|'image', timeIncrement: string};
    validators: Array<oj.Validator<string>|oj.Validation.RegisteredValidator>;
    value: string;
    translations: {cancel?: string, currentText?: string, dateRestriction?: {hint?: string, messageDetail?: string, messageSummary?: string}, dateTimeRange?: {hint?: {inRange?: string, max?: string, min?: string}, messageDetail?: {rangeOverflow?: string, rangeUnderflow?: string}, messageSummary?: {rangeOverflow?: string, rangeUnderflow?: string}}, done?: string, nextText?: string, prevText?: string, regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, tooltipCalendar?: string, tooltipCalendarDisabled?: string, tooltipCalendarTime?: string, tooltipCalendarTimeDisabled?: string, weekHeader?: string};
    onConverterChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onRenderModeChanged: (event: CustomEvent)=> any;
    onTimePickerChanged: (event: CustomEvent)=> any;
    onValidatorsChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojInputDateTime.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojInputDateTime.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojInputDateTimeEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputDateTimeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    hideTimePicker(): void;
    show(): void;
    showTimePicker(): void;
  }
  namespace ojInputDateTime {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojInputDateTimeEventMap extends oj.ojInputDateEventMap {
    'ojAnimateEnd': oj.ojInputDateTime.ojAnimateEnd;
    'ojAnimateStart': oj.ojInputDateTime.ojAnimateStart;
    'converterChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'minChanged': CustomEvent;
    'renderModeChanged': CustomEvent;
    'timePickerChanged': CustomEvent;
    'validatorsChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojInputDateTimeSettableProperties extends ojInputDateSettableProperties {
    converter: oj.Converter<string>|oj.Validation.RegisteredConverter;
    max: string|null;
    min: string|null;
    renderMode: 'jet'|'native';
    timePicker: {footerLayout: ''|'now', showOn: 'focus'|'image', timeIncrement: string};
    validators: Array<oj.Validator<string>|oj.Validation.RegisteredValidator>;
    value: string;
    translations: {cancel?: string, currentText?: string, dateRestriction?: {hint?: string, messageDetail?: string, messageSummary?: string}, dateTimeRange?: {hint?: {inRange?: string, max?: string, min?: string}, messageDetail?: {rangeOverflow?: string, rangeUnderflow?: string}, messageSummary?: {rangeOverflow?: string, rangeUnderflow?: string}}, done?: string, nextText?: string, prevText?: string, regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, tooltipCalendar?: string, tooltipCalendarDisabled?: string, tooltipCalendarTime?: string, tooltipCalendarTimeDisabled?: string, weekHeader?: string}; 
  }

}
declare namespace oj {  
  class ojInputTime extends inputBase<string, ojInputTimeSettableProperties> {
    converter: oj.Converter<string>|oj.Validation.RegisteredConverter;
    keyboardEdit: 'enabled'|'disabled';
    max: string|null;
    min: string|null;
    pickerAttributes: {style?: string, class?: string};
    renderMode: 'jet'|'native';
    timePicker: {footerLayout: ''|'now', showOn: 'focus'|'image', timeIncrement: string};
    validators: Array<oj.Validator<string>|oj.Validation.RegisteredValidator>;
    value: string;
    translations: {ampmWheelLabel?: string, cancelText?: string, currentTimeText?: string, dateTimeRange?: {hint?: {inRange?: string, max?: string, min?: string}, messageDetail?: {rangeOverflow?: string, rangeUnderflow?: string}, messageSummary?: {rangeOverflow?: string, rangeUnderflow?: string}}, hourWheelLabel?: string, minuteWheelLabel?: string, okText?: string, regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, tooltipTime?: string, tooltipTimeDisabled?: string};
    onConverterChanged: (event: CustomEvent)=> any;
    onKeyboardEditChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onPickerAttributesChanged: (event: CustomEvent)=> any;
    onRenderModeChanged: (event: CustomEvent)=> any;
    onTimePickerChanged: (event: CustomEvent)=> any;
    onValidatorsChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojInputTime.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojInputTime.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojInputTimeEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputTimeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    hide(): void;
    refresh(): void;
    show(): void;
  }
  namespace ojInputTime {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojInputTimeEventMap extends oj.inputBaseEventMap {
    'ojAnimateEnd': oj.ojInputTime.ojAnimateEnd;
    'ojAnimateStart': oj.ojInputTime.ojAnimateStart;
    'converterChanged': CustomEvent;
    'keyboardEditChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'minChanged': CustomEvent;
    'pickerAttributesChanged': CustomEvent;
    'renderModeChanged': CustomEvent;
    'timePickerChanged': CustomEvent;
    'validatorsChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojInputTimeSettableProperties extends inputBaseSettableProperties<string> {
    converter: oj.Converter<string>|oj.Validation.RegisteredConverter;
    keyboardEdit: 'enabled'|'disabled';
    max: string|null;
    min: string|null;
    pickerAttributes: {style?: string, class?: string};
    renderMode: 'jet'|'native';
    timePicker: {footerLayout: ''|'now', showOn: 'focus'|'image', timeIncrement: string};
    validators: Array<oj.Validator<string>|oj.Validation.RegisteredValidator>;
    value: string;
    translations: {ampmWheelLabel?: string, cancelText?: string, currentTimeText?: string, dateTimeRange?: {hint?: {inRange?: string, max?: string, min?: string}, messageDetail?: {rangeOverflow?: string, rangeUnderflow?: string}, messageSummary?: {rangeOverflow?: string, rangeUnderflow?: string}}, hourWheelLabel?: string, minuteWheelLabel?: string, okText?: string, regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, tooltipTime?: string, tooltipTimeDisabled?: string}; 
  }

}
