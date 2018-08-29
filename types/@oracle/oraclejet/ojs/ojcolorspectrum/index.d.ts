/// <reference types='ojs/ojeditablevalue'/>
declare namespace oj {  
  class ojColorSpectrum extends editableValue<oj.Color, ojColorSpectrumSettableProperties> {
    labelledBy: string|null;
    readonly transientValue: oj.Color;
    value: oj.Color;
    translations: {labelHue?: string, labelOpacity?: string, labelSatLum?: string, labelThumbDesc?: string};
    onLabelledByChanged: (event: CustomEvent)=> any;
    onTransientValueChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojColorSpectrum.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojColorSpectrum.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojColorSpectrumEventMap>(type: T, listener: (this: HTMLElement, ev: ojColorSpectrumEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    setProperties(properties: object): any;
    setProperty(property: string, value: any): any;
  }
  namespace ojColorSpectrum {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojColorSpectrumEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojColorSpectrum.ojAnimateEnd;
    'ojAnimateStart': oj.ojColorSpectrum.ojAnimateStart;
    'labelledByChanged': CustomEvent;
    'transientValueChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojColorSpectrumSettableProperties extends editableValueSettableProperties<oj.Color> {
    labelledBy: string|null;
    readonly transientValue: oj.Color;
    value: oj.Color;
    translations: {labelHue?: string, labelOpacity?: string, labelSatLum?: string, labelThumbDesc?: string}; 
  }

}
