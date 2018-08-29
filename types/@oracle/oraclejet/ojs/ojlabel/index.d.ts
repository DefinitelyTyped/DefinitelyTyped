/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojLabel extends baseComponent<ojLabelSettableProperties> {
    for: string|null;
    help: {definition?: string|null, source?: string|null};
    labelId: string|null;
    showRequired: boolean|null;
    translations: {tooltipHelp?: string, tooltipRequired?: string};
    onForChanged: (event: CustomEvent)=> any;
    onHelpChanged: (event: CustomEvent)=> any;
    onLabelIdChanged: (event: CustomEvent)=> any;
    onShowRequiredChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojLabelEventMap>(type: T, listener: (this: HTMLElement, ev: ojLabelEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
  }
  interface ojLabelEventMap extends oj.baseComponentEventMap {
    'forChanged': CustomEvent;
    'helpChanged': CustomEvent;
    'labelIdChanged': CustomEvent;
    'showRequiredChanged': CustomEvent;
  }
  interface ojLabelSettableProperties extends baseComponentSettableProperties {
    for: string|null;
    help: {definition?: string|null, source?: string|null};
    labelId: string|null;
    showRequired: boolean|null;
    translations: {tooltipHelp?: string, tooltipRequired?: string}; 
  }

}
