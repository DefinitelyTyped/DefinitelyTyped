// Type definitions for jQuery Tooltipster 3.3.0
// Project: https://github.com/iamceege/tooltipster
// Definitions by: Patrick Magee <https://github.com/pjmagee/>, Dmitry Pesterev <https://github.com/VorobeY1326/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryTooltipsterOptions {
    /**
    * Determines how the tooltip will animate in and out. Feel free to modify or create custom transitions in the tooltipster.css file. In IE9 and 8, all animations default to a JavaScript generated, fade animation. Default: 'fade'
    * fade, grow, swing, slide, fall
    */
    animation?: string;
    /**
    * Adds the "speech bubble arrow" to the tooltip. Default: true
    */
    arrow?: boolean;
    /**
    * Select a specific color for the "speech bubble arrow". Default: will inherit the tooltip's background color
    * hex code / rgb
    */
    arrowColor?: any;
    /**
    * If autoClose is set to false, the tooltip will never close unless you call the 'hide' method yourself. Default: true
    */
    autoClose?: boolean;
    /**
    * If set, this will override the content of the tooltip. Default: null
    */
    content?: string | JQuery;
    /**
    * If the content of the tooltip is provided as a string, it is displayed as plain text by default. If this content should actually be interpreted as HTML, set this option to true. Default: false
    */
    contentAsHTML?: boolean;
    /**
    * If you provide a jQuery object to the 'content' option, this sets if it is a clone of this object that should actually be used. Default: true
    */
    contentCloning?: boolean;
    /**
    * Tooltipster logs notices into the console when you're doing something you ideally shouldn't be doing. Set to false to disable logging. Default: true
    */
    debug?: boolean;
    /**
    * Delay how long it takes (in milliseconds) for the tooltip to start animating in. Default: 200
    */
    delay?: number;
    /**
    * Set a minimum width for the tooltip. Default: 0 (auto width)
    */
    minWidth?: number;
    /**
    * Set a maximum width for the tooltip. Default: null (no max width)
    */
    maxWidth?: number;
    /**
    * Create a custom function to be fired only once at instantiation. If the function returns a value, this value will become the content of the tooltip. See the advanced section to learn more. Default: function(origin, content) {}
    */
    functionInit?: (origin, content) => any;
    /**
    * Create a custom function to be fired before the tooltip opens. This function may prevent or hold off the opening. See the advanced section to learn more. Default: function(origin, continueTooltip) { continueTooltip(); }
    */
    functionBefore?: (origin, continueTooltip) => void;
    /**
    * Create a custom function to be fired when the tooltip and its contents have been added to the DOM. Default: function(origin, tooltip) {}
    */
    functionReady?: (origin, tooltip) => void;
    /**
    * Create a custom function to be fired once the tooltip has been closed and removed from the DOM. Default: function(origin) {}
    */
    functionAfter?: (origin) => void;
    /**
    * If true, the tooltip will close if its origin is clicked. This option only applies when 'trigger' is 'hover' and 'autoClose' is false. Default: false
    */
    hideOnClick?: boolean;
    /**
    * If using the iconDesktop or iconTouch options, this sets the content for your icon. Default: '(?)'
    */
    icon?: string | JQuery;
    /**
    * If you provide a jQuery object to the 'icon' option, this sets if it is a clone of this object that should actually be used. Default: true
    */
    iconCloning?: boolean;
    /**
    * Generate an icon next to your content that is responsible for activating the tooltip on non-touch devices. Default: false
    */
    iconDesktop?: boolean;
    /**
    * If using the iconDesktop or iconTouch options, this sets the class on the icon (used to style the icon). Default: 'tooltipster-icon'
    */
    iconTheme?: string;
    /**
    * Generate an icon next to your content that is responsible for activating the tooltip on touch devices (tablets, phones, etc). Default: false
    */
    iconTouch?: boolean;
    /**
    * Give users the possibility to interact with the tooltip. Unless autoClose is set to false, the tooltip will still close if the user moves away from or clicks out of the tooltip. Default: false
    */
    interactive?: boolean;
    /**
    * If the tooltip is interactive and activated by a hover event, set the amount of time (milliseconds) allowed for a user to hover off of the tooltip activator (origin) on to the tooltip itself - keeping the tooltip from closing. Default: 350
    */
    interactiveTolerance?: number;
    /**
    * Allows you to put multiple tooltips on a single element. Read further instructions down this page. Default: false
    */
    multiple?: boolean;
    /**
    * Offsets the tooltip (in pixels) farther left/right from the origin. Default: 0
    */
    offsetX?: number;
    /**
    * Offsets the tooltip (in pixels) farther up/down from the origin. Default: 0
    */
    offsetY?: number;
    /**
    * If true, only one tooltip will be allowed to be active at a time. Non-autoclosing tooltips will not be closed though. Default: false
    */
    onlyOne?: boolean;
    /**
    * Set the position of the tooltip. Default: 'top'
    * right, left, top, top-right, top-left, bottom, bottom-right, bottom-left
    */
    position?: string;
    /**
    * Will reposition the tooltip if the origin moves. As this option may have an impact on performance, we suggest you enable it only if you need to. Default: false
    */
    positionTracker?: boolean;
    /**
    * Called after the tooltip has been repositioned by the position tracker (if enabled). Default: A function that will close the tooltip if the trigger is 'hover' and autoClose is false.
    */
    positionTrackerCallback?: (origin) => void;
    /**
    * Specify if a TITLE attribute should be restored on the HTML element after a call to the 'destroy' method. This attribute may be omitted, or be restored with the value that existed before Tooltipster was initialized, or be restored with the stringified value of the current content. Note: in case of multiple tooltips on a single element, only the last destroyed tooltip may trigger a restoration. Default: 'current'
    * 'none', 'previous' or 'current'
    */
    restoration?: string;
    /**
    * Set the speed of the animation. Default: 350
    */
    speed?: number;
    /**
    * How long the tooltip should be allowed to live before closing. Default: 0 (disabled)
    */
    timer?: number;
    /**
    * Set the theme used for your tooltip. Default: 'tooltipster-default'
    */
    theme?: string;
    /**
    * If set to false, tooltips will not show on pure-touch devices, unless you open them yourself with the 'show' method. Touch gestures on devices which also have a mouse will still open the tooltips though. Default: true
    */
    touchDevices?: boolean;
    /**
    * Set how tooltips should be activated and closed. See the advanced section to learn how to build custom triggers. Default: 'hover'
    * hover, click, custom
    */
    trigger?: string;
    /**
    * If a tooltip is open while its content is updated, play a subtle animation when the content changes. Default: true
    */
    updateAnimation?: boolean;
}

interface JQuery {
    /**
    * Initiate the Tooltipster plugin
    */ 
    tooltipster(): void;
    /**
    * Creates a new tooltip with the specified, or default, options.
    * @param options The options
    * @example
    * $('.tooltip').tooltipster({
    *   animation: 'fade',
    *   delay: 200,
    *   theme: 'tooltipster-default',
    *   touchDevices: false,
    *   trigger: 'hover'
    * });
    */
    tooltipster(options?: JQueryTooltipsterOptions): JQuery;
    /**
    * Updates an existing tinyscrollbar with the specified, or default, options.
    * @param options The options
    * @param callback optional argument callback
    * @example
    * $(window).keypress(function() {
    *     $('#example').tooltipster('hide', function() {
    *         alert('The tooltip is now fully closed');
    *      });
    * });
    */
    tooltipster(method: string, callback?: Function): JQuery;
    /**
    * Call a method trigger with optional paramter
    * @example $('#my-special-tooltip').tooltipster('content', 'My new content');
    * @example
    * $('#example').tooltipster('show', function() {
    *   alert('The tooltip is now fully open. The content is: ' + this.tooltipster('content'));
    * });
    */
    tooltipster(method: string, param?: string): any;

}

