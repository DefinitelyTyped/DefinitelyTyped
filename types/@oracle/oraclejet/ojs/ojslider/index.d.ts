/// <reference types='ojs/ojeditablevalue'/>
declare namespace oj {  
  class ojSlider extends editableValue<number, ojSliderSettableProperties> {
    disabled: boolean|null;
    max: number|null;
    min: number|null;
    orientation: 'horizontal'|'vertical';
    step: number|null;
    readonly transientValue: number;
    type: 'fromMin'|'fromMax'|'single';
    value: number|null;
    translations: {invalidStep?: string, maxMin?: string, noValue?: string, optionNum?: string, valueRange?: string};
    onDisabledChanged: (event: CustomEvent)=> any;
    onMaxChanged: (event: CustomEvent)=> any;
    onMinChanged: (event: CustomEvent)=> any;
    onOrientationChanged: (event: CustomEvent)=> any;
    onStepChanged: (event: CustomEvent)=> any;
    onTransientValueChanged: (event: CustomEvent)=> any;
    onTypeChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojSlider.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojSlider.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojSliderEventMap>(type: T, listener: (this: HTMLElement, ev: ojSliderEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojSlider {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojSliderEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojSlider.ojAnimateEnd;
    'ojAnimateStart': oj.ojSlider.ojAnimateStart;
    'disabledChanged': CustomEvent;
    'maxChanged': CustomEvent;
    'minChanged': CustomEvent;
    'orientationChanged': CustomEvent;
    'stepChanged': CustomEvent;
    'transientValueChanged': CustomEvent;
    'typeChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojSliderSettableProperties extends editableValueSettableProperties<number> {
    disabled: boolean|null;
    max: number|null;
    min: number|null;
    orientation: 'horizontal'|'vertical';
    step: number|null;
    readonly transientValue: number;
    type: 'fromMin'|'fromMax'|'single';
    value: number|null;
    translations: {invalidStep?: string, maxMin?: string, noValue?: string, optionNum?: string, valueRange?: string}; 
  }

}
