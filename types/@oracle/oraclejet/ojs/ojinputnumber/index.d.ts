/// <reference types='ojs/ojeditablevalue'/>
/// <reference types='ojs/ojvalidation-base'/>
/// <reference types='ojs/ojvalidation-number'/>
declare namespace oj {  
  class ojInputNumber extends editableValue<number, ojInputNumberSettableProperties, number, string> {
    asyncValidators: Array<oj.AsyncValidator<number>>;
    autocomplete: 'on'|'off'|string;
    autofocus: boolean;
    converter: oj.Converter<number>|oj.Validation.RegisteredConverter;
    max: number|null;
    min: number|null;
    name: string;
    placeholder: string|null;
    readonly rawValue: string;
    readonly: boolean|null;
    required: boolean;
    step: number|null;
    validators: Array<oj.Validator<number>|oj.Validation.RegisteredValidator>;
    value: number|null;
    virtualKeyboard: 'auto'|'number'|'text';
    translations: {numberRange?: {hint?: {exact?: string, inRange?: string, max?: string, min?: string}, messageDetail?: {exact?: string, rangeOverflow?: string, rangeUnderflow?: string}, messageSummary?: {rangeOverflow?: string, rangeUnderflow?: string}}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, tooltipDecrement?: string, tooltipIncrement?: string};
    onAsyncValidatorsChanged: (event: CustomEvent)=> any;
    onAutocompleteChanged: (event: CustomEvent)=> any;
    onAutofocusChanged: (event: CustomEvent)=> any;
    onConverterChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onNameChanged: (event: CustomEvent)=> any;
    onPlaceholderChanged: (event: CustomEvent)=> any;
    onRawValueChanged: (event: CustomEvent)=> any;
    onReadonlyChanged: (event: CustomEvent)=> any;
    onRequiredChanged: (event: CustomEvent)=> any;
    onStepChanged: (event: CustomEvent)=> any;
    onValidatorsChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onVirtualKeyboardChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojInputNumber.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojInputNumber.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojInputNumberEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputNumberEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
    stepDown(steps?: number): void;
    stepUp(steps?: number): void;
    validate(): Promise<string>;
  }
  namespace ojInputNumber {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojInputNumberEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojInputNumber.ojAnimateEnd;
    'ojAnimateStart': oj.ojInputNumber.ojAnimateStart;
    'asyncValidatorsChanged': CustomEvent;
    'autocompleteChanged': CustomEvent;
    'autofocusChanged': CustomEvent;
    'converterChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'minChanged': CustomEvent;
    'nameChanged': CustomEvent;
    'placeholderChanged': CustomEvent;
    'rawValueChanged': CustomEvent;
    'readonlyChanged': CustomEvent;
    'requiredChanged': CustomEvent;
    'stepChanged': CustomEvent;
    'validatorsChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'virtualKeyboardChanged': CustomEvent;
  }
  interface ojInputNumberSettableProperties extends editableValueSettableProperties<number, number, string> {
    asyncValidators: Array<oj.AsyncValidator<number>>;
    autocomplete: 'on'|'off'|string;
    autofocus: boolean;
    converter: oj.Converter<number>|oj.Validation.RegisteredConverter;
    max: number|null;
    min: number|null;
    name: string;
    placeholder: string|null;
    readonly rawValue: string;
    readonly: boolean|null;
    required: boolean;
    step: number|null;
    validators: Array<oj.Validator<number>|oj.Validation.RegisteredValidator>;
    value: number|null;
    virtualKeyboard: 'auto'|'number'|'text';
    translations: {numberRange?: {hint?: {exact?: string, inRange?: string, max?: string, min?: string}, messageDetail?: {exact?: string, rangeOverflow?: string, rangeUnderflow?: string}, messageSummary?: {rangeOverflow?: string, rangeUnderflow?: string}}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, tooltipDecrement?: string, tooltipIncrement?: string}; 
  }

}
