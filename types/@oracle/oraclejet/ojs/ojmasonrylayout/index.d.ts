/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojMasonryLayout extends baseComponent<ojMasonryLayoutSettableProperties> {
    reorderHandle: string|null;
    translations: {labelCut?: string, labelPasteAfter?: string, labelPasteBefore?: string};
    onReorderHandleChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojMasonryLayout.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojMasonryLayout.ojAnimateStart)=> any;
    onOjBeforeInsert: (event: oj.ojMasonryLayout.ojBeforeInsert)=> any;
    onOjBeforeRemove: (event: oj.ojMasonryLayout.ojBeforeRemove)=> any;
    onOjBeforeReorder: (event: oj.ojMasonryLayout.ojBeforeReorder)=> any;
    onOjBeforeResize: (event: oj.ojMasonryLayout.ojBeforeResize)=> any;
    onOjInsert: (event: oj.ojMasonryLayout.ojInsert)=> any;
    onOjRemove: (event: oj.ojMasonryLayout.ojRemove)=> any;
    onOjReorder: (event: oj.ojMasonryLayout.ojReorder)=> any;
    onOjResize: (event: oj.ojMasonryLayout.ojResize)=> any;

    addEventListener<T extends keyof ojMasonryLayoutEventMap>(type: T, listener: (this: HTMLElement, ev: ojMasonryLayoutEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    insertTile(selector: string, index: number): void;
    refresh(): void;
    removeTile(selector: string): void;
    resizeTile(selector: string, sizeStyleClass: string): void;
  }
  namespace ojMasonryLayout {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojBeforeInsert extends CustomEvent<{tile: Element, index: number, [propName: string]: any}> {
      
    }
  
    class ojBeforeRemove extends CustomEvent<{tile: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeReorder extends CustomEvent<{tile: Element, fromIndex: number, [propName: string]: any}> {
      
    }
  
    class ojBeforeResize extends CustomEvent<{tile: Element, previousSizeStyleClass: string, sizeStyleClass: string, [propName: string]: any}> {
      
    }
  
    class ojInsert extends CustomEvent<{tile: Element, index: number, [propName: string]: any}> {
      
    }
  
    class ojRemove extends CustomEvent<{tile: Element, [propName: string]: any}> {
      
    }
  
    class ojReorder extends CustomEvent<{tile: Element, fromIndex: number, toIndex: number, [propName: string]: any}> {
      
    }
  
    class ojResize extends CustomEvent<{tile: Element, previousSizeStyleClass: string, sizeStyleClass: string, [propName: string]: any}> {
      
    }
  }
  interface ojMasonryLayoutEventMap extends oj.baseComponentEventMap {
    'ojAnimateEnd': oj.ojMasonryLayout.ojAnimateEnd;
    'ojAnimateStart': oj.ojMasonryLayout.ojAnimateStart;
    'ojBeforeInsert': oj.ojMasonryLayout.ojBeforeInsert;
    'ojBeforeRemove': oj.ojMasonryLayout.ojBeforeRemove;
    'ojBeforeReorder': oj.ojMasonryLayout.ojBeforeReorder;
    'ojBeforeResize': oj.ojMasonryLayout.ojBeforeResize;
    'ojInsert': oj.ojMasonryLayout.ojInsert;
    'ojRemove': oj.ojMasonryLayout.ojRemove;
    'ojReorder': oj.ojMasonryLayout.ojReorder;
    'ojResize': oj.ojMasonryLayout.ojResize;
    'reorderHandleChanged': CustomEvent;
  }
  interface ojMasonryLayoutSettableProperties extends baseComponentSettableProperties {
    reorderHandle: string|null;
    translations: {labelCut?: string, labelPasteAfter?: string, labelPasteBefore?: string}; 
  }

}
