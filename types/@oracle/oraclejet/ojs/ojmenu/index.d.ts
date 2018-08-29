/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojMenu extends baseComponent<ojMenuSettableProperties> {
    disabled: boolean;
    openOptions: oj.ojMenu.OpenOptions;
    translations: {ariaFocusSkipLink?: string, labelCancel?: string};
    onDisabledChanged: (event: CustomEvent)=> any;
    onOpenOptionsChanged: (event: CustomEvent)=> any;
    onOjAction: (event: oj.ojMenu.ojAction)=> any;
    onOjAnimateEnd: (event: oj.ojMenu.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojMenu.ojAnimateStart)=> any;
    onOjBeforeOpen: (event: oj.ojMenu.ojBeforeOpen)=> any;
    onOjClose: (event: oj.ojMenu.ojClose)=> any;
    onOjOpen: (event: oj.ojMenu.ojOpen)=> any;

    addEventListener<T extends keyof ojMenuEventMap>(type: T, listener: (this: HTMLElement, ev: ojMenuEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    open(event?: object, openOptions?: oj.ojMenu.OpenOptions): void;
    refresh(): void;
  }
  namespace ojMenu {
    class ojAction extends CustomEvent<{ [propName: string]: any}> {
      
    }
  
    class ojAnimateEnd extends CustomEvent<{element: Element, action: 'open'|'close', [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: 'open'|'close', element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojBeforeOpen extends CustomEvent<{ [propName: string]: any}> {
      
    }
  
    class ojClose extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  
    class ojOpen extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  }
  interface ojMenuEventMap extends oj.baseComponentEventMap {
    'ojAction': oj.ojMenu.ojAction;
    'ojAnimateEnd': oj.ojMenu.ojAnimateEnd;
    'ojAnimateStart': oj.ojMenu.ojAnimateStart;
    'ojBeforeOpen': oj.ojMenu.ojBeforeOpen;
    'ojClose': oj.ojMenu.ojClose;
    'ojOpen': oj.ojMenu.ojOpen;
    'disabledChanged': CustomEvent;
    'openOptionsChanged': CustomEvent;
  }
  interface ojMenuSettableProperties extends baseComponentSettableProperties {
    disabled: boolean;
    openOptions: oj.ojMenu.OpenOptions;
    translations: {ariaFocusSkipLink?: string, labelCancel?: string}; 
  }
  namespace ojMenu {
    type OpenOptions =
    {
      display?: string, initialFocus?: string, launcher?: string|Element, position?: oj.ojMenu.Position
    }
  }
  namespace ojMenu {
    type Position =
    {
      my?: oj.ojMenu.PositionAlign, at?: oj.ojMenu.PositionAlign, offset?: oj.ojMenu.PositionPoint, of?: string|oj.ojMenu.PositionPoint, collision?: 'flip'|'fit'|'flipfit'|'flipcenter'|'none'
    }
  }
  namespace ojMenu {
    type PositionAlign =
    {
      vertical?: 'top'|'bottom'|'center', horizontal?: 'start'|'end'|'left'|'center'|'bottom'
    }
  }
  namespace ojMenu {
    type PositionPoint =
    {
      x?: number, y?: number
    }
  }

}
