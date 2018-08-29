/// <reference types='ojs/ojcomponentcore'/>
/// <reference types='ojs/ojcollapsible'/>
declare namespace oj {  
  class ojAccordion extends baseComponent<ojAccordionSettableProperties> {
    expanded: Array<{id?: string, index?: number}>|null;
    multiple: boolean;
    onExpandedChanged: (event: CustomEvent)=> any;
    onMultipleChanged: (event: CustomEvent)=> any;
    onOjBeforeCollapse: (event: oj.ojAccordion.ojBeforeCollapse)=> any;
    onOjBeforeExpand: (event: oj.ojAccordion.ojBeforeExpand)=> any;
    onOjCollapse: (event: oj.ojAccordion.ojCollapse)=> any;
    onOjExpand: (event: oj.ojAccordion.ojExpand)=> any;

    addEventListener<T extends keyof ojAccordionEventMap>(type: T, listener: (this: HTMLElement, ev: ojAccordionEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
  }
  namespace ojAccordion {
    class ojBeforeCollapse extends CustomEvent<{toCollapsible: Element, fromCollapsible: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeExpand extends CustomEvent<{toCollapsible: Element, fromCollapsible: Element, [propName: string]: any}> {
      
    }
  
    class ojCollapse extends CustomEvent<{toCollapsible: Element, fromCollapsible: Element, [propName: string]: any}> {
      
    }
  
    class ojExpand extends CustomEvent<{toCollapsible: Element, fromCollapsible: Element, [propName: string]: any}> {
      
    }
  }
  interface ojAccordionEventMap extends oj.baseComponentEventMap {
    'ojBeforeCollapse': oj.ojAccordion.ojBeforeCollapse;
    'ojBeforeExpand': oj.ojAccordion.ojBeforeExpand;
    'ojCollapse': oj.ojAccordion.ojCollapse;
    'ojExpand': oj.ojAccordion.ojExpand;
    'expandedChanged': CustomEvent;
    'multipleChanged': CustomEvent;
  }
  interface ojAccordionSettableProperties extends baseComponentSettableProperties {
    expanded: Array<string>|Array<number>|Array<{id?: string, index?: number}>|null;
    multiple: boolean; 
  }

}
