/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  abstract class dvtBaseComponent<SP extends dvtBaseComponentSettableProperties = dvtBaseComponentSettableProperties> extends baseComponent<SP> {
    trackResize: 'on'|'off';
    translations: {labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};
    onTrackResizeChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof dvtBaseComponentEventMap>(type: T, listener: (this: HTMLElement, ev: dvtBaseComponentEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface dvtBaseComponentEventMap extends oj.baseComponentEventMap {
    'trackResizeChanged': CustomEvent;
  }
  interface dvtBaseComponentSettableProperties extends baseComponentSettableProperties {
    trackResize: 'on'|'off';
    translations: {labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelInvalidData?: string, labelNoData?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }

}
