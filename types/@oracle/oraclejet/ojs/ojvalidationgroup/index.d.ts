declare namespace oj {  
  class ojValidationGroup extends JetElement<ojValidationGroupSettableProperties> {
    readonly valid: 'valid'|'pending'|'invalidHidden'|'invalidShown';
    onValidChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojValidationGroupEventMap>(type: T, listener: (this: HTMLElement, ev: ojValidationGroupEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    focusOn(key?: '@firstInvalidShown'): void;
    getProperty(property: string): any;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
    showMessages(): void;
  }
  interface ojValidationGroupEventMap extends oj.JetElementEventMap {
    'validChanged': CustomEvent;
  }
  interface ojValidationGroupSettableProperties extends JetSettableProperties {
    readonly valid: 'valid'|'pending'|'invalidHidden'|'invalidShown'; 
  }

}
