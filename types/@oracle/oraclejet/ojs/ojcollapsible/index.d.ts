/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojCollapsible extends baseComponent<ojCollapsibleSettableProperties> {
    disabled: boolean;
    expandArea: 'header'|'disclosureIcon';
    expanded: boolean;
    onDisabledChanged: (event: CustomEvent)=> any;
    onExpandAreaChanged: (event: CustomEvent)=> any;
    onExpandedChanged: (event: CustomEvent)=> any;
    onOjBeforeCollapse: (event: oj.ojCollapsible.ojBeforeCollapse)=> any;
    onOjBeforeExpand: (event: oj.ojCollapsible.ojBeforeExpand)=> any;
    onOjCollapse: (event: oj.ojCollapsible.ojCollapse)=> any;
    onOjExpand: (event: oj.ojCollapsible.ojExpand)=> any;

    addEventListener<T extends keyof ojCollapsibleEventMap>(type: T, listener: (this: HTMLElement, ev: ojCollapsibleEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
  }
  namespace ojCollapsible {
    class ojBeforeCollapse extends CustomEvent<{header: Element, content: Element, [propName: string]: any}> {
      
    }
  
    class ojBeforeExpand extends CustomEvent<{header: Element, content: Element, [propName: string]: any}> {
      
    }
  
    class ojCollapse extends CustomEvent<{header: Element, content: Element, [propName: string]: any}> {
      
    }
  
    class ojExpand extends CustomEvent<{header: Element, content: Element, [propName: string]: any}> {
      
    }
  }
  interface ojCollapsibleEventMap extends oj.baseComponentEventMap {
    'ojBeforeCollapse': oj.ojCollapsible.ojBeforeCollapse;
    'ojBeforeExpand': oj.ojCollapsible.ojBeforeExpand;
    'ojCollapse': oj.ojCollapsible.ojCollapse;
    'ojExpand': oj.ojCollapsible.ojExpand;
    'disabledChanged': CustomEvent;
    'expandAreaChanged': CustomEvent;
    'expandedChanged': CustomEvent;
  }
  interface ojCollapsibleSettableProperties extends baseComponentSettableProperties {
    disabled: boolean;
    expandArea: 'header'|'disclosureIcon';
    expanded: boolean; 
  }

}
