declare namespace oj {  
  class ojOptgroup extends JetElement<ojOptgroupSettableProperties> {
    disabled: boolean;
    label: string;
    onDisabledChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojOptgroupEventMap>(type: T, listener: (this: HTMLElement, ev: ojOptgroupEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    refresh(): void;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojOptgroupEventMap extends oj.JetElementEventMap {
    'disabledChanged': CustomEvent;
    'labelChanged': CustomEvent;
  }
  interface ojOptgroupSettableProperties extends JetSettableProperties {
    disabled: boolean;
    label: string; 
  }

}
