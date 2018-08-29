/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojToolbar extends baseComponent<ojToolbarSettableProperties> {
    chroming: 'full'|'half'|'outlined';
    onChromingChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojToolbarEventMap>(type: T, listener: (this: HTMLElement, ev: ojToolbarEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
  }
  interface ojToolbarEventMap extends oj.baseComponentEventMap {
    'chromingChanged': CustomEvent;
  }
  interface ojToolbarSettableProperties extends baseComponentSettableProperties {
    chroming: 'full'|'half'|'outlined'; 
  }

}
