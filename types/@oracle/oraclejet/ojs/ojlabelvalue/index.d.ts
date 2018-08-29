declare namespace oj {  
  class ojLabelValue extends JetElement<ojLabelValueSettableProperties> {
    labelEdge: 'start'|'top'|'inherit';
    labelWidth: string;
    onLabelEdgeChanged: (event: CustomEvent)=> any;
    onLabelWidthChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojLabelValueEventMap>(type: T, listener: (this: HTMLElement, ev: ojLabelValueEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    refresh(): void;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojLabelValueEventMap extends oj.JetElementEventMap {
    'labelEdgeChanged': CustomEvent;
    'labelWidthChanged': CustomEvent;
  }
  interface ojLabelValueSettableProperties extends JetSettableProperties {
    labelEdge: 'start'|'top'|'inherit';
    labelWidth: string; 
  }

}
