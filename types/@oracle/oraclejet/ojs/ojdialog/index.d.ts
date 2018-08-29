/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojDialog extends baseComponent<ojDialogSettableProperties> {
    cancelBehavior: 'icon'|'escape'|'none';
    dragAffordance: 'title-bar'|'none';
    initialVisibility: 'hide'|'show';
    modality: 'modal'|'modeless';
    position: oj.ojDialog.Position;
    resizeBehavior: 'resizable'|'none';
    role: string;
    translations: {labelCloseIcon?: string};
    onCancelBehaviorChanged: (event: CustomEvent)=> any;
    onDragAffordanceChanged: (event: CustomEvent)=> any;
    onInitialVisibilityChanged: (event: CustomEvent)=> any;
    onModalityChanged: (event: CustomEvent)=> any;
    onPositionChanged: (event: CustomEvent)=> any;
    onResizeBehaviorChanged: (event: CustomEvent)=> any;
    onRoleChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojDialog.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojDialog.ojAnimateStart)=> any;
    onOjBeforeClose: (event: oj.ojDialog.ojBeforeClose)=> any;
    onOjBeforeOpen: (event: oj.ojDialog.ojBeforeOpen)=> any;
    onOjClose: (event: oj.ojDialog.ojClose)=> any;
    onOjFocus: (event: oj.ojDialog.ojFocus)=> any;
    onOjOpen: (event: oj.ojDialog.ojOpen)=> any;
    onOjResize: (event: oj.ojDialog.ojResize)=> any;
    onOjResizeStart: (event: oj.ojDialog.ojResizeStart)=> any;
    onOjResizeStop: (event: oj.ojDialog.ojResizeStop)=> any;

    addEventListener<T extends keyof ojDialogEventMap>(type: T, listener: (this: HTMLElement, ev: ojDialogEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    close(): void;
    isOpen(): boolean;
    open(): void;
    refresh(): void;
  }
  namespace ojDialog {
    class ojAnimateEnd extends CustomEvent<{element: Element, action: 'open'|'close', [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: 'open'|'close', element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojBeforeClose extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  
    class ojBeforeOpen extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  
    class ojClose extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  
    class ojFocus extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  
    class ojOpen extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  
    class ojResize extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  
    class ojResizeStart extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  
    class ojResizeStop extends CustomEvent<{event: Event, [propName: string]: any}> {
      
    }
  }
  interface ojDialogEventMap extends oj.baseComponentEventMap {
    'ojAnimateEnd': oj.ojDialog.ojAnimateEnd;
    'ojAnimateStart': oj.ojDialog.ojAnimateStart;
    'ojBeforeClose': oj.ojDialog.ojBeforeClose;
    'ojBeforeOpen': oj.ojDialog.ojBeforeOpen;
    'ojClose': oj.ojDialog.ojClose;
    'ojFocus': oj.ojDialog.ojFocus;
    'ojOpen': oj.ojDialog.ojOpen;
    'ojResize': oj.ojDialog.ojResize;
    'ojResizeStart': oj.ojDialog.ojResizeStart;
    'ojResizeStop': oj.ojDialog.ojResizeStop;
    'cancelBehaviorChanged': CustomEvent;
    'dragAffordanceChanged': CustomEvent;
    'initialVisibilityChanged': CustomEvent;
    'modalityChanged': CustomEvent;
    'positionChanged': CustomEvent;
    'resizeBehaviorChanged': CustomEvent;
    'roleChanged': CustomEvent;
  }
  interface ojDialogSettableProperties extends baseComponentSettableProperties {
    cancelBehavior: 'icon'|'escape'|'none';
    dragAffordance: 'title-bar'|'none';
    initialVisibility: 'hide'|'show';
    modality: 'modal'|'modeless';
    position: oj.ojDialog.Position;
    resizeBehavior: 'resizable'|'none';
    role: string;
    translations: {labelCloseIcon?: string}; 
  }
  namespace ojDialog {
    type Position =
    {
      my?: oj.ojDialog.PositionAlign, at?: oj.ojDialog.PositionAlign, offset?: oj.ojDialog.PositionPoint, of?: string|oj.ojDialog.PositionPoint, collision?: 'flip'|'fit'|'flipfit'|'none'
    }
  }
  namespace ojDialog {
    type PositionAlign =
    {
      vertical?: 'top'|'bottom'|'center', horizontal?: 'start'|'end'|'left'|'center'|'bottom'
    }
  }
  namespace ojDialog {
    type PositionPoint =
    {
      x?: number, y?: number
    }
  }

}
