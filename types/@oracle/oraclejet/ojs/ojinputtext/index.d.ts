/// <reference types='ojs/ojeditablevalue'/>
/// <reference types='ojs/ojvalidation-base'/>
/// <reference types='ojs/ojvalidation-datetime'/>
/// <reference types='ojs/ojvalidation-number'/>
declare namespace oj {  
  abstract class inputBase<V, SP extends inputBaseSettableProperties<V, SV>, SV= V, RV= V> extends editableValue<V, SP, SV, RV> {
    asyncValidators: Array<oj.AsyncValidator<V>>;
    autocomplete: 'on'|'off'|string;
    autofocus: boolean;
    name: string;
    placeholder: string;
    readonly rawValue: RV;
    readonly: boolean;
    required: boolean;
    validators: Array<oj.Validator<V>|oj.Validation.RegisteredValidator>|null;
    translations: {regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}};
    onAsyncValidatorsChanged: (event: CustomEvent)=> any;
    onAutocompleteChanged: (event: CustomEvent)=> any;
    onAutofocusChanged: (event: CustomEvent)=> any;
    onNameChanged: (event: CustomEvent)=> any;
    onPlaceholderChanged: (event: CustomEvent)=> any;
    onRawValueChanged: (event: CustomEvent)=> any;
    onReadonlyChanged: (event: CustomEvent)=> any;
    onRequiredChanged: (event: CustomEvent)=> any;
    onValidatorsChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.inputBase.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.inputBase.ojAnimateStart)=> any;

    addEventListener<T extends keyof inputBaseEventMap>(type: T, listener: (this: HTMLElement, ev: inputBaseEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
    validate(): Promise<'valid'|'invalid'>;
  }
  namespace inputBase {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface inputBaseEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.inputBase.ojAnimateEnd;
    'ojAnimateStart': oj.inputBase.ojAnimateStart;
    'asyncValidatorsChanged': CustomEvent;
    'autocompleteChanged': CustomEvent;
    'autofocusChanged': CustomEvent;
    'nameChanged': CustomEvent;
    'placeholderChanged': CustomEvent;
    'rawValueChanged': CustomEvent;
    'readonlyChanged': CustomEvent;
    'requiredChanged': CustomEvent;
    'validatorsChanged': CustomEvent;
  }
  interface inputBaseSettableProperties<V, SV=V, RV= V> extends editableValueSettableProperties<V, SV, RV> {
    asyncValidators: Array<oj.AsyncValidator<V>>;
    autocomplete: 'on'|'off'|string;
    autofocus: boolean;
    name: string;
    placeholder: string;
    readonly rawValue: RV;
    readonly: boolean;
    required: boolean;
    validators: Array<oj.Validator<V>|oj.Validation.RegisteredValidator>|null;
    translations: {regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}}; 
  }

}
declare namespace oj {  
  class ojInputPassword extends inputBase<string, ojInputPasswordSettableProperties> {
    value: string|null;
    translations: {regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}};
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojInputPassword.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojInputPassword.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojInputPasswordEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputPasswordEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojInputPassword {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojInputPasswordEventMap extends oj.inputBaseEventMap {
    'ojAnimateEnd': oj.ojInputPassword.ojAnimateEnd;
    'ojAnimateStart': oj.ojInputPassword.ojAnimateStart;
    'valueChanged': CustomEvent;
  }
  interface ojInputPasswordSettableProperties extends inputBaseSettableProperties<string> {
    value: string|null;
    translations: {regexp?: {messageDetail?: string, messageSummary?: string}, required?: {hint?: string, messageDetail?: string, messageSummary?: string}}; 
  }

}
declare namespace oj {  
  class ojInputText extends inputBase<any, ojInputTextSettableProperties> {
    clearIcon: 'never'|'always'|'conditional';
    converter: oj.Converter<any>|oj.Validation.RegisteredConverter|null;
    list: string;
    virtualKeyboard: 'auto'|'email'|'number'|'search'|'tel'|'text'|'url';
    onClearIconChanged: (event: CustomEvent)=> any;
    onConverterChanged: (event: CustomEvent)=> any;
    onListChanged: (event: CustomEvent)=> any;
    onVirtualKeyboardChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojInputText.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojInputText.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojInputTextEventMap>(type: T, listener: (this: HTMLElement, ev: ojInputTextEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojInputText {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojInputTextEventMap extends oj.inputBaseEventMap {
    'ojAnimateEnd': oj.ojInputText.ojAnimateEnd;
    'ojAnimateStart': oj.ojInputText.ojAnimateStart;
    'clearIconChanged': CustomEvent;
    'converterChanged': CustomEvent;
    'listChanged': CustomEvent;
    'virtualKeyboardChanged': CustomEvent;
  }
  interface ojInputTextSettableProperties extends inputBaseSettableProperties<any> {
    clearIcon: 'never'|'always'|'conditional';
    converter: oj.Converter<any>|oj.Validation.RegisteredConverter|null;
    list: string;
    virtualKeyboard: 'auto'|'email'|'number'|'search'|'tel'|'text'|'url'; 
  }

}
declare namespace oj {  
  class ojTextArea extends inputBase<any, ojTextAreaSettableProperties> {
    converter: oj.Converter<any>|oj.Validation.RegisteredConverter|null;
    rows: number;
    onConverterChanged: (event: CustomEvent)=> any;
    onRowsChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojTextArea.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojTextArea.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojTextAreaEventMap>(type: T, listener: (this: HTMLElement, ev: ojTextAreaEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojTextArea {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojTextAreaEventMap extends oj.inputBaseEventMap {
    'ojAnimateEnd': oj.ojTextArea.ojAnimateEnd;
    'ojAnimateStart': oj.ojTextArea.ojAnimateStart;
    'converterChanged': CustomEvent;
    'rowsChanged': CustomEvent;
  }
  interface ojTextAreaSettableProperties extends inputBaseSettableProperties<any> {
    converter: oj.Converter<any>|oj.Validation.RegisteredConverter|null;
    rows: number; 
  }

}
