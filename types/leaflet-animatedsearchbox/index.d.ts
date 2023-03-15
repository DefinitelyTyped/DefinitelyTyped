// Type definitions for leaflet.AnimatedSearchBox 1.1.3
// Project: https://github.com/luka1199/Leaflet.AnimatedSearchBox
// Definitions by: Vicente Deluca <https://github.com/vdeluca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.6.3

import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {
        class Search extends Control {
          constructor(SearchOptions?: SearchOptions);
          onAdd(map: Map): HTMLElement;
          start(): void;
          stop(): void;
          setView(): void;
          getValue(): any;
          setValue(value:any): any;
          addItem(item:any): any;
          addItems(items:Array<any>): any;
          setItems(items:Array<any>): any;
          clearItems():any;
          hide():any;
          show():any;
          toggle():any;
          idCollapsed():boolean;
          clearInput():any;
          clear(): any;

          onButton: Function;
          onInput: Function;
          onAutocomplete: Function;
          }
        
        interface SearchOptions {
            
        }
    }

    namespace control {
        /**
         * Creates a control
         */
        function searchbox(options?: Control.SearchOptions): Control.Search;
    }

}
