/// <reference types='ojs/ojoption'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojMenuSelectMany extends JetElement<ojMenuSelectManySettableProperties> {
    disabled: boolean;
    options: Array<oj.ojMenuSelectMany.Option>|oj.DataProvider<any, any>|null;
    value: Array<any>;
    onDisabledChanged: (event: CustomEvent)=> any;
    onOptionsChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojMenuSelectManyEventMap>(type: T, listener: (this: HTMLElement, ev: ojMenuSelectManyEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojMenuSelectManyEventMap extends oj.JetElementEventMap {
    'disabledChanged': CustomEvent;
    'optionsChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojMenuSelectManySettableProperties extends JetSettableProperties {
    disabled: boolean;
    options: Array<oj.ojMenuSelectMany.Option>|oj.DataProvider<any, any>|null;
    value: Array<any>; 
  }
  namespace ojMenuSelectMany {
    type Option =
    {
      id?: string, disabled?: boolean, label: string, value: any
    }
  }

}
