/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojPopup extends baseComponent<ojPopupSettableProperties> {
    autoDismiss: 'none'|'focusLoss';
    chrome: 'default'|'none';
    initialFocus: 'auto'|'none'|'firstFocusable'|'popup';
    modality: 'modeless'|'modal';
    position: oj.ojPopup.Position;
    tail: 'none'|'simple';
    translations: {ariaCloseSkipLink?: string, ariaFocusSkipLink?: string, ariaLiveRegionInitialFocusFirstFocusable?: string, ariaLiveRegionInitialFocusFirstFocusableTouch?: string, ariaLiveRegionInitialFocusNone?: string, ariaLiveRegionInitialFocusNoneTouch?: string};
    onAutoDismissChanged: (event: CustomEvent)=> any;
    onChromeChanged: (event: CustomEvent)=> any;
    onInitialFocusChanged: (event: CustomEvent)=> any;
    onModalityChanged: (event: CustomEvent)=> any;
    onPositionChanged: (event: CustomEvent)=> any;
    onTailChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojPopup.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojPopup.ojAnimateStart)=> any;
    onOjBeforeClose: (event: oj.ojPopup.ojBeforeClose)=> any;
    onOjBeforeOpen: (event: oj.ojPopup.ojBeforeOpen)=> any;
    onOjClose: (event: oj.ojPopup.ojClose)=> any;
    onOjFocus: (event: oj.ojPopup.ojFocus)=> any;
    onOjOpen: (event: oj.ojPopup.ojOpen)=> any;

    addEventListener<T extends keyof ojPopupEventMap>(type: T, listener: (this: HTMLElement, ev: ojPopupEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    close(): void;
    isOpen(): boolean;
    open(launcher: string|Element, position?: oj.ojPopup.Position): void;
    refresh(): void;
  }
  namespace ojPopup {
    class ojAnimateEnd extends CustomEvent<{element: Element, action: 'open'|'close', [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: 'open'|'close', element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojBeforeClose extends CustomEvent<{ [propName: string]: any}> {
      
    }
  
    class ojBeforeOpen extends CustomEvent<{ [propName: string]: any}> {
      
    }
  
    class ojClose extends CustomEvent<{ [propName: string]: any}> {
      
    }
  
    class ojFocus extends CustomEvent<{ [propName: string]: any}> {
      
    }
  
    class ojOpen extends CustomEvent<{ [propName: string]: any}> {
      
    }
  }
  interface ojPopupEventMap extends oj.baseComponentEventMap {
    'ojAnimateEnd': oj.ojPopup.ojAnimateEnd;
    'ojAnimateStart': oj.ojPopup.ojAnimateStart;
    'ojBeforeClose': oj.ojPopup.ojBeforeClose;
    'ojBeforeOpen': oj.ojPopup.ojBeforeOpen;
    'ojClose': oj.ojPopup.ojClose;
    'ojFocus': oj.ojPopup.ojFocus;
    'ojOpen': oj.ojPopup.ojOpen;
    'autoDismissChanged': CustomEvent;
    'chromeChanged': CustomEvent;
    'initialFocusChanged': CustomEvent;
    'modalityChanged': CustomEvent;
    'positionChanged': CustomEvent;
    'tailChanged': CustomEvent;
  }
  interface ojPopupSettableProperties extends baseComponentSettableProperties {
    autoDismiss: 'none'|'focusLoss';
    chrome: 'default'|'none';
    initialFocus: 'auto'|'none'|'firstFocusable'|'popup';
    modality: 'modeless'|'modal';
    position: oj.ojPopup.Position;
    tail: 'none'|'simple';
    translations: {ariaCloseSkipLink?: string, ariaFocusSkipLink?: string, ariaLiveRegionInitialFocusFirstFocusable?: string, ariaLiveRegionInitialFocusFirstFocusableTouch?: string, ariaLiveRegionInitialFocusNone?: string, ariaLiveRegionInitialFocusNoneTouch?: string}; 
  }
  namespace ojPopup {
    type Position =
    {
      my?: oj.ojPopup.PositionAlign, at?: oj.ojPopup.PositionAlign, offset?: oj.ojPopup.PositionPoint, of?: string|oj.ojPopup.PositionPoint, collision?: 'flip'|'fit'|'flipfit'|'flipcenter'|'none'
    }
  }
  namespace ojPopup {
    type PositionAlign =
    {
      vertical?: 'top'|'bottom'|'center', horizontal?: 'start'|'end'|'left'|'center'|'bottom'
    }
  }
  namespace ojPopup {
    type PositionPoint =
    {
      x?: number, y?: number
    }
  }

}
