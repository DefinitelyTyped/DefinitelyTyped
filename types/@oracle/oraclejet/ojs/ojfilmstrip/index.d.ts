/// <reference types='ojs/ojcomponentcore'/>
declare namespace oj {  
  class ojFilmStrip extends baseComponent<ojFilmStripSettableProperties> {
    arrowPlacement: 'adjacent'|'overlay';
    arrowVisibility: 'visible'|'hidden'|'hover'|'auto';
    currentItem: {id?: string, index?: number};
    looping: 'off'|'page';
    maxItemsPerPage: number;
    orientation: 'horizontal'|'vertical';
    translations: {labelAccArrowNextPage?: string, labelAccArrowPreviousPage?: string, labelAccFilmStrip?: string, tipArrowNextPage?: string, tipArrowPreviousPage?: string};
    onArrowPlacementChanged: (event: CustomEvent)=> any;
    onArrowVisibilityChanged: (event: CustomEvent)=> any;
    onCurrentItemChanged: (event: CustomEvent)=> any;
    onLoopingChanged: (event: CustomEvent)=> any;
    onMaxItemsPerPageChanged: (event: CustomEvent)=> any;
    onOrientationChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojFilmStripEventMap>(type: T, listener: (this: HTMLElement, ev: ojFilmStripEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getItemsPerPage(): number;
    refresh(): void;
  }
  interface ojFilmStripEventMap extends oj.baseComponentEventMap {
    'arrowPlacementChanged': CustomEvent;
    'arrowVisibilityChanged': CustomEvent;
    'currentItemChanged': CustomEvent;
    'loopingChanged': CustomEvent;
    'maxItemsPerPageChanged': CustomEvent;
    'orientationChanged': CustomEvent;
  }
  interface ojFilmStripSettableProperties extends baseComponentSettableProperties {
    arrowPlacement: 'adjacent'|'overlay';
    arrowVisibility: 'visible'|'hidden'|'hover'|'auto';
    currentItem: {id?: string, index?: number};
    looping: 'off'|'page';
    maxItemsPerPage: number;
    orientation: 'horizontal'|'vertical';
    translations: {labelAccArrowNextPage?: string, labelAccArrowPreviousPage?: string, labelAccFilmStrip?: string, tipArrowNextPage?: string, tipArrowPreviousPage?: string}; 
  }

}
