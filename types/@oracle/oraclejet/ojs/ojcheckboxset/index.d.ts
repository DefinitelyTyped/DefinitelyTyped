/// <reference types='ojs/ojeditablevalue'/>
declare namespace oj {  
  class ojCheckboxset extends editableValue<Array<any>, ojCheckboxsetSettableProperties> {
    disabled: boolean;
    labelledBy: string|null;
    required: boolean;
    value: Array<any>;
    translations: {required?: {hint?: string, messageDetail?: string, messageSummary?: string}};
    onDisabledChanged: (event: CustomEvent)=> any;
    onLabelledByChanged: (event: CustomEvent)=> any;
    onRequiredChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojCheckboxset.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojCheckboxset.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojCheckboxsetEventMap>(type: T, listener: (this: HTMLElement, ev: ojCheckboxsetEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
    validate(): Promise<string>;
  }
  namespace ojCheckboxset {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojCheckboxsetEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojCheckboxset.ojAnimateEnd;
    'ojAnimateStart': oj.ojCheckboxset.ojAnimateStart;
    'disabledChanged': CustomEvent;
    'labelledByChanged': CustomEvent;
    'requiredChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojCheckboxsetSettableProperties extends editableValueSettableProperties<Array<any>> {
    disabled: boolean;
    labelledBy: string|null;
    required: boolean;
    value: Array<any>;
    translations: {required?: {hint?: string, messageDetail?: string, messageSummary?: string}}; 
  }

}
