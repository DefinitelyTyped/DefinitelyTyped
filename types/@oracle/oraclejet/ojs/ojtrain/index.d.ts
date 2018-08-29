/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojTrain extends baseComponent<ojTrainSettableProperties> {
    selectedStep: string;
    steps: Array<oj.ojTrain.Step>;
    onSelectedStepChanged: (event: CustomEvent)=> any;
    onStepsChanged: (event: CustomEvent)=> any;
    onOjBeforeDeselect: (event: oj.ojTrain.ojBeforeDeselect)=> any;
    onOjBeforeSelect: (event: oj.ojTrain.ojBeforeSelect)=> any;
    onOjDeselect: (event: oj.ojTrain.ojDeselect)=> any;
    onOjSelect: (event: oj.ojTrain.ojSelect)=> any;

    addEventListener<T extends keyof ojTrainEventMap>(type: T, listener: (this: HTMLElement, ev: ojTrainEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getNextSelectableStep(): string|null;
    getPreviousSelectableStep(): string|null;
    getStep(id: string): oj.ojTrain.Step|null;
    refresh(): void;
    updateStep(id: string, stepProperties: {id?: string, label?: string, disabled?: boolean, visited?: boolean, messageType?: 'info'|'error'|'fatal'|'warning'}): void;
  }
  namespace ojTrain {
    class ojBeforeDeselect extends CustomEvent<{toStep: string, fromStep: string, [propName: string]: any}> {
      
    }
  
    class ojBeforeSelect extends CustomEvent<{toStep: string, fromStep: string, [propName: string]: any}> {
      
    }
  
    class ojDeselect extends CustomEvent<{toStep: string, fromStep: string, [propName: string]: any}> {
      
    }
  
    class ojSelect extends CustomEvent<{toStep: string, fromStep: string, [propName: string]: any}> {
      
    }
  }
  interface ojTrainEventMap extends oj.baseComponentEventMap {
    'ojBeforeDeselect': oj.ojTrain.ojBeforeDeselect;
    'ojBeforeSelect': oj.ojTrain.ojBeforeSelect;
    'ojDeselect': oj.ojTrain.ojDeselect;
    'ojSelect': oj.ojTrain.ojSelect;
    'selectedStepChanged': CustomEvent;
    'stepsChanged': CustomEvent;
  }
  interface ojTrainSettableProperties extends baseComponentSettableProperties {
    selectedStep: string;
    steps: Array<oj.ojTrain.Step>; 
  }
  namespace ojTrain {
    type Step =
    {
      id: string, label: string, disabled?: boolean, visited?: boolean, messageType?: 'info'|'error'|'fatal'|'warning'
    }
  }

}
