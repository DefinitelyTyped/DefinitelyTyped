// Type definitions for jQuery-slimScroll v1.3.8
// Project: https://github.com/rochal/jQuery-slimScroll
// Definitions by: Chintan Shah <https://github.com/Promact>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="jquery"/>

interface IJQuerySlimScrollOptions {
    /**
     * width in pixels of the visible scroll area
     */
    width? :string;
    /**
     * height in pixels of the visible scroll area
     */
    height? :string;
    /**
     * width in pixels of the scrollbar and rail
     */
    size? :string;
    /**
     * scrollbar color, accepts any hex/color value
     */
    color?:string;
    /**
     * scrollbar position - left/right
     */
    position?:string;
    /**
     * distance in pixels between the side edge and the scrollbar
     */
    distance?:string;
    /**
     * default scroll position on load - top / bottom / $('selector')
     */
    start?:any;
    /**
     * sets scrollbar opacity
     */
    opacity? :number;
    /**
     * enables always-on mode for the scrollbar
     */
    alwaysVisible?: boolean;
    /**
     * check if we should hide the scrollbar when user is hovering over
     */
    disableFadeOut?: boolean;
    /**
     * sets visibility of the rail
     */
    railVisible?: boolean;
    /**
     * sets rail color
     */
    railColor?: string;
    /**
     * sets rail opacity
     */
    railOpacity?:number;
    /**
     * whether  we should use jQuery UI Draggable to enable bar dragging
     */
    railDraggable?: boolean;
    /**
     * default CSS class of the slimscroll rail
     */
    railClass?: string;
    /**
     * default CSS class of the slimscroll bar
     */
    barClass?: string;
    /**
     * default CSS class of the slimscroll wrapper
     */
    wrapperClass?: string;
    /**
     * check if mousewheel should scroll the window if we reach top/bottom
     */
    allowPageScroll?: boolean;
    /**
     * scroll amount applied to each mouse wheel step
     */
    wheelStep?: number;
    /**
     * scroll amount applied when user is using gestures
     */
    touchScrollStep?: number;
    /**
     * sets border radius
     */
    borderRadius?: string;
    /**
     * sets border radius of the rail
     */
    railBorderRadius?: string;
    /**
     * jumps to the specified scroll value
     */
    scrollTo?: string;
    /**
     * increases/decreases current scroll value by specified amount
     */
    scrollBy?: string;
    /**
     * release resources held by the plugin
     */
    destroy?:boolean;
}

interface JQuery {
    slimScroll:{
        (): JQuery;
        (options:IJQuerySlimScrollOptions): JQuery;
    }
}

