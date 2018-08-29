/// <reference types='ojs/ojmodel'/>
declare namespace oj {  
  
    var revision: string;
    var version: string;
    function ajax(settings?: object): object;
    function sync(method: string, model: oj.Model|oj.Collection, options?: object): object;

}
declare namespace oj {  
    interface JetSettableProperties { 
    }
    interface GenericSetter<SP>  {
        set<K extends keyof SP>(propertyName: K, propertyValue: SP[K]): void;
        unset<K extends keyof SP>(propertyName: K): void;
    }
    abstract class JetElement<SP> extends HTMLElement implements GenericSetter<SP> {
        set<K extends keyof SP>(propertyName: K, propertyValue: SP[K]): void;
        unset<K extends keyof SP>(propertyName: K): void;
    }
    interface JetElementEventMap extends HTMLElementEventMap {
    }
}