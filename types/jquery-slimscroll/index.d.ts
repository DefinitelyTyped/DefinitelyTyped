/// <reference types="jquery"/>

interface IJQuerySlimScrollOptions {
    /**
     * width in pixels of the visible scroll area
     */
    width?: string | undefined;
    /**
     * height in pixels of the visible scroll area
     */
    height?: string | undefined;
    /**
     * width in pixels of the scrollbar and rail
     */
    size?: string | undefined;
    /**
     * scrollbar color, accepts any hex/color value
     */
    color?: string | undefined;
    /**
     * scrollbar position - left/right
     */
    position?: string | undefined;
    /**
     * distance in pixels between the side edge and the scrollbar
     */
    distance?: string | undefined;
    /**
     * default scroll position on load - top / bottom / $('selector')
     */
    start?: any;
    /**
     * sets scrollbar opacity
     */
    opacity?: number | undefined;
    /**
     * enables always-on mode for the scrollbar
     */
    alwaysVisible?: boolean | undefined;
    /**
     * check if we should hide the scrollbar when user is hovering over
     */
    disableFadeOut?: boolean | undefined;
    /**
     * sets visibility of the rail
     */
    railVisible?: boolean | undefined;
    /**
     * sets rail color
     */
    railColor?: string | undefined;
    /**
     * sets rail opacity
     */
    railOpacity?: number | undefined;
    /**
     * whether  we should use jQuery UI Draggable to enable bar dragging
     */
    railDraggable?: boolean | undefined;
    /**
     * default CSS class of the slimscroll rail
     */
    railClass?: string | undefined;
    /**
     * default CSS class of the slimscroll bar
     */
    barClass?: string | undefined;
    /**
     * default CSS class of the slimscroll wrapper
     */
    wrapperClass?: string | undefined;
    /**
     * check if mousewheel should scroll the window if we reach top/bottom
     */
    allowPageScroll?: boolean | undefined;
    /**
     * scroll amount applied to each mouse wheel step
     */
    wheelStep?: number | undefined;
    /**
     * scroll amount applied when user is using gestures
     */
    touchScrollStep?: number | undefined;
    /**
     * sets border radius
     */
    borderRadius?: string | undefined;
    /**
     * sets border radius of the rail
     */
    railBorderRadius?: string | undefined;
    /**
     * jumps to the specified scroll value
     */
    scrollTo?: string | undefined;
    /**
     * increases/decreases current scroll value by specified amount
     */
    scrollBy?: string | undefined;
    /**
     * release resources held by the plugin
     */
    destroy?: boolean | undefined;
}

interface JQuery {
    slimScroll: {
        (): JQuery;
        (options: IJQuerySlimScrollOptions): JQuery;
    };
}
