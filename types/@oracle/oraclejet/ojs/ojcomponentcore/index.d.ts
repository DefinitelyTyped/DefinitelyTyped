declare namespace oj {  
  abstract class baseComponent<SP extends baseComponentSettableProperties = baseComponentSettableProperties> extends JetElement<SP> {
    translations: object|null;
            
    onTranslationsChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof baseComponentEventMap>(type: T, listener: (this: HTMLElement, ev: baseComponentEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    refresh(): void;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface baseComponentEventMap extends oj.JetElementEventMap {
    'translationsChanged': CustomEvent;
  }
  interface baseComponentSettableProperties extends JetSettableProperties {
    translations: object|null; 
  }

}
declare namespace oj {  
  class Components {
    static subtreeAttached(node: Element): void;
    static subtreeDetached(node: Element): void;
    static subtreeHidden(node: Element): void;
    static subtreeShown(node: Element, options?: {initialRender: boolean}): void;
  }

}
