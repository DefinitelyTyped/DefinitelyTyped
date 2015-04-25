// Type definitions for jQuery.slimScroll v1.3.3
// Project: https://github.com/rochal/jQuery-slimScroll
// Definitions by: Chintan Shah <https://github.com/Promact>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../jquery/jquery.d.ts"/>

interface IJQuerySlimScrollOptions {
    // width in pixels of the visible scroll area
    width? :string;
    // height in pixels of the visible scroll area
    height? :string;
    // width in pixels of the scrollbar and rail
    size? :string;
    // scrollbar color, accepts any hex/color value
    color?:string;
    // scrollbar position - left/right
    position?:string;
    // distance in pixels between the side edge and the scrollbar
    distance?:string;
    // default scroll position on load - top / bottom / $('selector')
    start?:any;
    // sets scrollbar opacity
    opacity? :number;
    // enables always-on mode for the scrollbar
    alwaysVisible?: boolean;
    // check if we should hide the scrollbar when user is hovering over
    disableFadeOut?: boolean;
    // sets visibility of the rail
    railVisible?: boolean;
    // sets rail color
    railColor?: string;
    // sets rail opacity
    railOpacity?:number;
    // whether  we should use jQuery UI Draggable to enable bar dragging
    railDraggable?: boolean;
    // defautlt CSS class of the slimscroll rail
    railClass?: string;
    // defautlt CSS class of the slimscroll bar
    barClass?: string;
    // defautlt CSS class of the slimscroll wrapper
    wrapperClass?: string;
    // check if mousewheel should scroll the window if we reach top/bottom
    allowPageScroll?: boolean;
    // scroll amount applied to each mouse wheel step
    wheelStep?: number;
    // scroll amount applied when user is using gestures
    touchScrollStep?: number;
    // sets border radius
    borderRadius?: string;
    // sets border radius of the rail
    railBorderRadius?: string;
}

interface JQuery {
    slimScroll:{
        (): JQuery;
        (options:IJQuerySlimScrollOptions): JQuery;
    }
}

