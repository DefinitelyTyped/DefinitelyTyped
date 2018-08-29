declare namespace oj {  
  class ojDefer extends JetElement<ojDeferSettableProperties> {

    addEventListener<T extends keyof ojDeferEventMap>(type: T, listener: (this: HTMLElement, ev: ojDeferEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojDeferEventMap extends oj.JetElementEventMap {
  }
  interface ojDeferSettableProperties extends JetSettableProperties { 
  }

}
