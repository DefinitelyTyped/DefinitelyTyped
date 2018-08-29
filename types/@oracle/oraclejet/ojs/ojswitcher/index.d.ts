declare namespace oj {  
  class ojSwitcher extends JetElement<ojSwitcherSettableProperties> {
    value: string;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojSwitcherEventMap>(type: T, listener: (this: HTMLElement, ev: ojSwitcherEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    refresh(): void;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojSwitcherEventMap extends oj.JetElementEventMap {
    'valueChanged': CustomEvent;
  }
  interface ojSwitcherSettableProperties extends JetSettableProperties {
    value: string; 
  }

}
