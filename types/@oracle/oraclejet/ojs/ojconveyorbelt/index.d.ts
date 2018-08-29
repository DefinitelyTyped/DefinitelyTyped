/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojConveyorBelt extends baseComponent<ojConveyorBeltSettableProperties> {
    contentParent: string|null;
    orientation: 'horizontal'|'vertical';
    onContentParentChanged: (event: CustomEvent)=> any;
    onOrientationChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojConveyorBeltEventMap>(type: T, listener: (this: HTMLElement, ev: ojConveyorBeltEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
  }
  interface ojConveyorBeltEventMap extends oj.baseComponentEventMap {
    'contentParentChanged': CustomEvent;
    'orientationChanged': CustomEvent;
  }
  interface ojConveyorBeltSettableProperties extends baseComponentSettableProperties {
    contentParent: string|null;
    orientation: 'horizontal'|'vertical'; 
  }

}
