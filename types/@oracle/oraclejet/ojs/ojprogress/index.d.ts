/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojProgress extends baseComponent<ojProgressSettableProperties> {
    max: number;
    type: 'bar'|'circle';
    value: number;
    translations: {ariaIndeterminateProgressText?: string};
    onMaxChanged: (event: CustomEvent)=> any;
    onTypeChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojProgressEventMap>(type: T, listener: (this: HTMLElement, ev: ojProgressEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojProgressEventMap extends oj.baseComponentEventMap {
    'maxChanged': CustomEvent;
    'typeChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojProgressSettableProperties extends baseComponentSettableProperties {
    max: number;
    type: 'bar'|'circle';
    value: number;
    translations: {ariaIndeterminateProgressText?: string}; 
  }

}
