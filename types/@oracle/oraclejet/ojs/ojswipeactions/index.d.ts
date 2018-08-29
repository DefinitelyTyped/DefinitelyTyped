/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojSwipeActions extends baseComponent<ojSwipeActionsSettableProperties> {
    translations: {ariaHideActionsDescription?: string, ariaShowEndActionsDescription?: string, ariaShowStartActionsDescription?: string};
    onOjAction: (event: oj.ojSwipeActions.ojAction)=> any;

    addEventListener<T extends keyof ojSwipeActionsEventMap>(type: T, listener: (this: HTMLElement, ev: ojSwipeActionsEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
  }
  namespace ojSwipeActions {
    class ojAction extends CustomEvent<{ [propName: string]: any}> {
      
    }
  }
  interface ojSwipeActionsEventMap extends oj.baseComponentEventMap {
    'ojAction': oj.ojSwipeActions.ojAction;
  }
  interface ojSwipeActionsSettableProperties extends baseComponentSettableProperties {
    translations: {ariaHideActionsDescription?: string, ariaShowEndActionsDescription?: string, ariaShowStartActionsDescription?: string}; 
  }

}
