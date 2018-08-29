/// <reference types='ojs/ojcomposite'/>
/// <reference types='ojs/ojlistview'/>
/// <reference types='ojs/ojprogress'/>
declare namespace oj {  
  class ojProgressList extends JetElement<ojProgressListSettableProperties> {
    data: oj.DataProvider<any, any>|null;
    onDataChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojProgressListEventMap>(type: T, listener: (this: HTMLElement, ev: ojProgressListEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojProgressListEventMap extends oj.JetElementEventMap {
    'dataChanged': CustomEvent;
  }
  interface ojProgressListSettableProperties extends JetSettableProperties {
    data: oj.DataProvider<any, any>|null; 
  }

}
declare namespace oj {  
  interface ProgressItem {
    addEventListener(eventType: oj.ProgressItem.EventType, listener: EventListener): void;
    removeEventListener(eventType: oj.ProgressItem.EventType, listener: EventListener): void;
  }
  namespace ProgressItem {
    enum EventType {
      LOADSTART = "loadstart",
      PROGRESS = "progress",
      ABORT = "abort",
      ERROR = "error",
      LOAD = "load",
      TIMEOUT = "timeout",
      LOADEND = "loadend",
    }
    enum Status {
      QUEUED = "queued",
      LOADSTARTED = "loadstarted",
      ABORTED = "aborted",
      ERRORED = "errored",
      TIMEDOUT = "timedout",
      LOADED = "loaded",
    }
  }


}
