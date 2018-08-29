/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojvalidation-base'/>
/// <reference types='ojs/ojvalidation-datetime'/>
declare namespace oj {  
  class ojTimeAxis extends dvtBaseComponent<ojTimeAxisSettableProperties> {
    converter: oj.ojTimeAxis.Converter|oj.Converter<string>;
    end: string;
    scale: 'seconds'|'minutes'|'hours'|'days'|'weeks'|'months'|'quarters'|'years';
    start: string;
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};
    onConverterChanged: (event: CustomEvent)=> any;
    onEndChanged: (event: CustomEvent)=> any;
    onScaleChanged: (event: CustomEvent)=> any;
    onStartChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojTimeAxisEventMap>(type: T, listener: (this: HTMLElement, ev: ojTimeAxisEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojTimeAxisEventMap extends oj.dvtBaseComponentEventMap {
    'converterChanged': CustomEvent;
    'endChanged': CustomEvent;
    'scaleChanged': CustomEvent;
    'startChanged': CustomEvent;
  }
  interface ojTimeAxisSettableProperties extends dvtBaseComponentSettableProperties {
    converter: oj.ojTimeAxis.Converter|oj.Converter<string>;
    end: string;
    scale: 'seconds'|'minutes'|'hours'|'days'|'weeks'|'months'|'quarters'|'years';
    start: string;
    translations: {componentName?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }
  namespace ojTimeAxis {
    type Converter =
    {
      default?: oj.Converter<string>, seconds?: oj.Converter<string>, minutes?: oj.Converter<string>, hours?: oj.Converter<string>, days?: oj.Converter<string>, weeks?: oj.Converter<string>, months?: oj.Converter<string>, quarters?: oj.Converter<string>, years?: oj.Converter<string>
    }
  }

}
