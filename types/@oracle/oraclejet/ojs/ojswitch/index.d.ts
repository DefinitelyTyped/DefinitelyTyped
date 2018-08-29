/// <reference types='ojs/ojeditablevalue'/>
declare namespace oj {  
  class ojSwitch extends editableValue<boolean, ojSwitchSettableProperties> {
    disabled: boolean;
    readonly: boolean;
    value: boolean;
    onDisabledChanged: (event: CustomEvent)=> any;
    onReadonlyChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojSwitch.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojSwitch.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojSwitchEventMap>(type: T, listener: (this: HTMLElement, ev: ojSwitchEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojSwitch {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojSwitchEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojSwitch.ojAnimateEnd;
    'ojAnimateStart': oj.ojSwitch.ojAnimateStart;
    'disabledChanged': CustomEvent;
    'readonlyChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojSwitchSettableProperties extends editableValueSettableProperties<boolean> {
    disabled: boolean;
    readonly: boolean;
    value: boolean; 
  }

}
