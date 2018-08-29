declare namespace oj {  
  class ojFormLayout extends JetElement<ojFormLayoutSettableProperties> {
    direction: 'column'|'row';
    labelEdge: 'start'|'top';
    labelWidth: string;
    labelWrapping: 'truncate'|'wrap';
    maxColumns: number;
    onDirectionChanged: (event: CustomEvent)=> any;
    onLabelEdgeChanged: (event: CustomEvent)=> any;
    onLabelWidthChanged: (event: CustomEvent)=> any;
    onLabelWrappingChanged: (event: CustomEvent)=> any;
    onMaxColumnsChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojFormLayoutEventMap>(type: T, listener: (this: HTMLElement, ev: ojFormLayoutEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    refresh(): void;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojFormLayoutEventMap extends oj.JetElementEventMap {
    'directionChanged': CustomEvent;
    'labelEdgeChanged': CustomEvent;
    'labelWidthChanged': CustomEvent;
    'labelWrappingChanged': CustomEvent;
    'maxColumnsChanged': CustomEvent;
  }
  interface ojFormLayoutSettableProperties extends JetSettableProperties {
    direction: 'column'|'row';
    labelEdge: 'start'|'top';
    labelWidth: string;
    labelWrapping: 'truncate'|'wrap';
    maxColumns: number; 
  }

}
