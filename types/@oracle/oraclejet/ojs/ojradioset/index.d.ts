/// <reference types='ojs/ojeditablevalue'/>
declare namespace oj {  
  class ojRadioset extends editableValue<any, ojRadiosetSettableProperties> {
    disabled: boolean|null;
    labelledBy: string|null;
    required: boolean;
    value: any;
    translations: {required?: {hint?: string, messageDetail?: string, messageSummary?: string}};
    onDisabledChanged: (event: CustomEvent)=> any;
    onLabelledByChanged: (event: CustomEvent)=> any;
    onRequiredChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojRadioset.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojRadioset.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojRadiosetEventMap>(type: T, listener: (this: HTMLElement, ev: ojRadiosetEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
    validate(): Promise<string>;
  }
  namespace ojRadioset {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojRadiosetEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojRadioset.ojAnimateEnd;
    'ojAnimateStart': oj.ojRadioset.ojAnimateStart;
    'disabledChanged': CustomEvent;
    'labelledByChanged': CustomEvent;
    'requiredChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojRadiosetSettableProperties extends editableValueSettableProperties<any> {
    disabled: boolean|null;
    labelledBy: string|null;
    required: boolean;
    value: any;
    translations: {required?: {hint?: string, messageDetail?: string, messageSummary?: string}}; 
  }

}
