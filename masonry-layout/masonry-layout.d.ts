// Type definitions for Masonry 4.0.0 
// Project: https://github.com/desandro/masonry 
// Definitions by: Mark Wilson <https://github.com/m-a-wilson>
// Definitions: https://github.com/borisyankov/DefinitelyTyped 

/// <reference path="../jquery/jquery.d.ts" /> 

// Modified from original definitions by: 
// Travis Brown < https://github.com/warriorrocker>

declare module Masonry {

     class Masonry implements MasonryGrid { 
        constructor(options?: MasonryOptions); 
        constructor(selector: string, options?: MasonryOptions); 
    } 

     interface MasonryGrid {
        masonry?(): void;
        masonry?(eventName: string, listener: any): void;

        // layout 
        layout?(): void;
        layoutItems?(items: Array<any>, isStill?: boolean): void;
        stamp?(elements: Array<any>): void;
        unstamp?(elements: Array<any>): void;

        // add and remove items 
        appended?(elements: Array<any>): void;
        prepended?(elements: Array<any>): void;
        addItems?(elements: Array<any>): void;
        remove?(elements: Array<any>): void;

        // events 
        on?(eventName: string, listener: any): void;
        off?(eventName: string, listener: any): void;
        once?(eventName: string, listener: any): void;

        // utilities 
        reloadItems?(): void;
        destroy?(): void;
        getItemElements?(): Array<any>;
        data?(element: Element): Masonry;
    }

     interface MasonryOptions {

        // layout 
        itemSelector?: string;
        columnWidth?: any;
        percentPosition?: boolean;
        gutter?: any;
        stamp?: string;
        fitWidth?: boolean;
        originLeft?: boolean;
        originTop?: boolean;

        // setup 
        containerStyle?: Object;
        transitionDuration?: any;
        resize?: boolean;
        initLayout?: boolean;
    }
}

interface JQuery {
	masonry(options?: Masonry.MasonryOptions): JQuery;
}


