/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojRefresher extends baseComponent<ojRefresherSettableProperties> {
    refreshContent: (()=> Promise<any>);
    target: Element;
    text: string;
    threshold: number;
    onRefreshContentChanged: (event: CustomEvent)=> any;
    onTargetChanged: (event: CustomEvent)=> any;
    onTextChanged: (event: CustomEvent)=> any;
    onThresholdChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojRefresherEventMap>(type: T, listener: (this: HTMLElement, ev: ojRefresherEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojRefresherEventMap extends oj.baseComponentEventMap {
    'refreshContentChanged': CustomEvent;
    'targetChanged': CustomEvent;
    'textChanged': CustomEvent;
    'thresholdChanged': CustomEvent;
  }
  interface ojRefresherSettableProperties extends baseComponentSettableProperties {
    refreshContent: (()=> Promise<any>);
    target: Element;
    text: string;
    threshold: number; 
  }

}
