/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojtimeaxis'/>
declare namespace oj {  
  abstract class dvtTimeComponent<SP extends dvtTimeComponentSettableProperties = dvtTimeComponentSettableProperties> extends dvtBaseComponent<SP> {

    addEventListener<T extends keyof dvtTimeComponentEventMap>(type: T, listener: (this: HTMLElement, ev: dvtTimeComponentEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface dvtTimeComponentEventMap extends oj.dvtBaseComponentEventMap {
  }
  interface dvtTimeComponentSettableProperties extends dvtBaseComponentSettableProperties { 
  }

}
