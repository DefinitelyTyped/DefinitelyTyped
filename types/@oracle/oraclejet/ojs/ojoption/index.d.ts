declare namespace oj {  
  class ojOption extends JetElement<ojOptionSettableProperties> {
    disabled: boolean;
    value: any;
    onDisabledChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojOptionEventMap>(type: T, listener: (this: HTMLElement, ev: ojOptionEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    refresh(): void;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojOptionEventMap extends oj.JetElementEventMap {
    'disabledChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojOptionSettableProperties extends JetSettableProperties {
    disabled: boolean;
    value: any; 
  }

}
