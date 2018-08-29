/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojButton<SP extends ojButtonSettableProperties = ojButtonSettableProperties> extends baseComponent<SP> {
    chroming: 'full'|'half'|'outlined';
    disabled: boolean;
    display: 'all'|'icons';
    onChromingChanged: (event: CustomEvent)=> any;
    onDisabledChanged: (event: CustomEvent)=> any;
    onDisplayChanged: (event: CustomEvent)=> any;
    onOjAction: (event: oj.ojButton.ojAction)=> any;

    addEventListener<T extends keyof ojButtonEventMap>(type: T, listener: (this: HTMLElement, ev: ojButtonEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojButton {
    class ojAction extends CustomEvent<{ [propName: string]: any}> {
      
    }
  }
  interface ojButtonEventMap extends oj.baseComponentEventMap {
    'ojAction': oj.ojButton.ojAction;
    'chromingChanged': CustomEvent;
    'disabledChanged': CustomEvent;
    'displayChanged': CustomEvent;
  }
  interface ojButtonSettableProperties extends baseComponentSettableProperties {
    chroming: 'full'|'half'|'outlined';
    disabled: boolean;
    display: 'all'|'icons'; 
  }

}
declare namespace oj {  
  abstract class ojButtonset<SP extends ojButtonsetSettableProperties = ojButtonsetSettableProperties> extends baseComponent<SP> {

    addEventListener<T extends keyof ojButtonsetEventMap>(type: T, listener: (this: HTMLElement, ev: ojButtonsetEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojButtonsetEventMap extends oj.baseComponentEventMap {
  }
  interface ojButtonsetSettableProperties extends baseComponentSettableProperties { 
  }

}
declare namespace oj {  
  class ojButtonsetMany extends ojButtonset<ojButtonsetManySettableProperties> {
    chroming: 'full'|'half'|'outlined';
    disabled: boolean;
    display: 'all'|'icons';
    focusManagement: 'oneTabstop'|'none';
    value: Array<any>|null;
    onChromingChanged: (event: CustomEvent)=> any;
    onDisabledChanged: (event: CustomEvent)=> any;
    onDisplayChanged: (event: CustomEvent)=> any;
    onFocusManagementChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojButtonsetManyEventMap>(type: T, listener: (this: HTMLElement, ev: ojButtonsetManyEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojButtonsetManyEventMap extends oj.ojButtonsetEventMap {
    'chromingChanged': CustomEvent;
    'disabledChanged': CustomEvent;
    'displayChanged': CustomEvent;
    'focusManagementChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojButtonsetManySettableProperties extends ojButtonsetSettableProperties {
    chroming: 'full'|'half'|'outlined';
    disabled: boolean;
    display: 'all'|'icons';
    focusManagement: 'oneTabstop'|'none';
    value: Array<any>|null; 
  }

}
declare namespace oj {  
  class ojButtonsetOne extends ojButtonset<ojButtonsetOneSettableProperties> {
    chroming: 'full'|'half'|'outlined';
    disabled: boolean;
    display: 'all'|'icons';
    focusManagement: 'oneTabstop'|'none';
    value: any;
    onChromingChanged: (event: CustomEvent)=> any;
    onDisabledChanged: (event: CustomEvent)=> any;
    onDisplayChanged: (event: CustomEvent)=> any;
    onFocusManagementChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojButtonsetOneEventMap>(type: T, listener: (this: HTMLElement, ev: ojButtonsetOneEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojButtonsetOneEventMap extends oj.ojButtonsetEventMap {
    'chromingChanged': CustomEvent;
    'disabledChanged': CustomEvent;
    'displayChanged': CustomEvent;
    'focusManagementChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojButtonsetOneSettableProperties extends ojButtonsetSettableProperties {
    chroming: 'full'|'half'|'outlined';
    disabled: boolean;
    display: 'all'|'icons';
    focusManagement: 'oneTabstop'|'none';
    value: any; 
  }

}
declare namespace oj {  
  class ojMenuButton extends ojButton<ojMenuButtonSettableProperties> {
    chroming: 'full'|'half'|'outlined';
    disabled: boolean;
    display: 'all'|'icons';
    onChromingChanged: (event: CustomEvent)=> any;
    onDisabledChanged: (event: CustomEvent)=> any;
    onDisplayChanged: (event: CustomEvent)=> any;
    onOjAction: (event: oj.ojMenuButton.ojAction)=> any;

    addEventListener<T extends keyof ojMenuButtonEventMap>(type: T, listener: (this: HTMLElement, ev: ojMenuButtonEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojMenuButton {
    class ojAction extends CustomEvent<{ [propName: string]: any}> {
      
    }
  }
  interface ojMenuButtonEventMap extends oj.ojButtonEventMap {
    'ojAction': oj.ojMenuButton.ojAction;
    'chromingChanged': CustomEvent;
    'disabledChanged': CustomEvent;
    'displayChanged': CustomEvent;
  }
  interface ojMenuButtonSettableProperties extends ojButtonSettableProperties {
    chroming: 'full'|'half'|'outlined';
    disabled: boolean;
    display: 'all'|'icons'; 
  }

}
