/// <reference types="jquery"/>

interface JScrollPaneSettings {
    /**
     * Whether arrows should be shown on the generated scroll pane. When set to false only the scrollbar
     * track and drag will be shown, if set to true then arrows buttons will also be shown.
     */
    showArrows?: boolean | undefined;
    /**
     * Whether the scrollpane should attempt to maintain it's position whenever it is reinitialised.
     * If true then the viewport of the scrollpane will remain the same when it is reinitialised, if false
        then the viewport will jump back up to the top when the scrollpane is reinitialised. See also stickToBottom and stickToRight.
     */
    maintainPosition?: boolean | undefined;
    /**
     * If maintainPosition is true and the scrollpane is scrolled to the bottom then the scrollpane then the scrollpane will
     * remain scrolled to the bottom even if new content is added to the pane which makes it taller.
     */
    stickToBottom?: boolean | undefined;
    /**
     * If maintainPosition is true and the scrollpane is scrolled to its right edge then the scrollpane then the scrollpane
     * will remain scrolled to the right edge even if new content is added to the pane which makes it wider.
     */
    stickToRight?: boolean | undefined;
    /**
     * Whether jScrollPane should automatically reinitialise itself periodically after you have initially initialised it.
     * This can help with instances when the size of the content of the scrollpane (or the surrounding element) changes.
     * However, it does involve an overhead of running a javascript function on a timer so it is recommended only to activate
     * where necessary.
     */
    autoReinitialise?: boolean | undefined;
    /**
     * The number of milliseconds between each reinitialisation (if autoReinitialise is true).
     */
    autoReinitialiseDelay?: number | undefined;
    /**
     * The smallest height that the vertical drag can have. The size of the drag elements is based on the proportion of the
     * size of the content to the size of the viewport but is contrained within the minimum and maximum dimensions given.
     */
    verticalDragMinHeight?: number | undefined;
    /**
     * The largest height that the vertical drag can have. The size of the drag elements is based on the proportion of the
     * size of the content to the size of the viewport but is contrained within the minimum and maximum dimensions given.
     */
    verticalDragMaxHeight?: number | undefined;
    /**
     * The smallest width that the horizontal drag can have. The size of the drag elements is based on the proportion of the
     * size of the content to the size of the viewport but is contrained within the minimum and maximum dimensions given.
     */
    horizontalDragMinWidth?: number | undefined;
    /**
     * The largest width that the horizontal drag can have. The size of the drag elements is based on the proportion of the
     * size of the content to the size of the viewport but is contrained within the minimum and maximum dimensions given.
     */
    horizontalDragMaxWidth?: number | undefined;
    /**
     * The width of the content of the scroll pane. The default value of undefined will allow jScrollPane to calculate the
     * width of it's content. However, in some cases you will want to disable this (e.g. to prevent horizontal scrolling or
     * where the calculation of the size of the content doesn't return reliable results)
     */
    contentWidth?: number | undefined;
    /**
     * Whether to use animation when calling scrollTo or scrollBy. You can control the animation speed and easing by using
     * the animateDuration and animateEase settings or if you want to exercise more complete control then you can override
     * the animate API method. Demo.
     */
    animateScroll?: boolean | undefined;
    /**
     * The number of milliseconds taken to animate to a new position
     */
    animateDuration?: number | undefined;
    /**
     * The type of easing to use when animating to a new position
     */
    animateEase?: string | undefined;
    /**
     * Whether internal links on the page should be hijacked so that if they point so content within a jScrollPane then
     * they automatically scroll the jScrollPane to the correct place.
     */
    hijackInternalLinks?: boolean | undefined;
    /**
     * The amount of space between the side of the content and the vertical scrollbar.
     */
    verticalGutter?: number | undefined;
    /**
     * The amount of space between the bottom of the content and the horizontal scrollbar.
     */
    horizontalGutter?: number | undefined;
    /**
     * A multiplier which is used to control the amount that the scrollpane scrolls each time the mouse wheel is turned.
     */
    mouseWheelSpeed?: number | undefined;
    /**
     * A multiplier which is used to control the amount that the scrollpane scrolls each time on of the arrow buttons is pressed.
     */
    arrowButtonSpeed?: number | undefined;
    /**
     * The number of milliseconds between each repeated scroll event when the mouse is held down over one of the arrow keys.
     */
    arrowRepeatFreq?: number | undefined;
    /**
     * Whether the arrow buttons should cause the jScrollPane to scroll while you are hovering over them.
     */
    arrowScrollOnHover?: boolean | undefined;
    /**
     * Where the vertical arrows should appear relative to the vertical track.
     */
    verticalArrowPositions?: string | undefined;
    /**
     * Where the horizontal arrows should appear relative to the horizontal track.
     */
    horizontalArrowPositions?: string | undefined;
    /**
     * Whether keyboard navigation should be enabled (e.g. whether the user can focus the scrollpane and then use
     * the arrow (and other) keys to navigate around.
     */
    enableKeyboardNavigation?: boolean | undefined;
    /**
     * Whether the focus outline should be hidden in all browsers. For best accessibility you should not change
     * this option. You can style the outline with the CSS property outline and outline-offset.
     */
    hideFocus?: boolean | undefined;
    /**
     * Whether clicking on the track (e.g. the area behind the drag) should scroll towards the point clicked on.
     * Defaults to true as this is the native behaviour in these situations.
     */
    clickOnTrack?: boolean | undefined;
    /**
     * A multiplier which is used to control the amount that the scrollpane scrolls each trackClickRepeatFreq
     * while the mouse button is held down over the track.
     */
    trackClickSpeed?: number | undefined;
    /**
     * The number of milliseconds between each repeated scroll event when the mouse is held down over the track.
     */
    trackClickRepeatFreq?: number | undefined;
}

interface JScrollPaneApi {
    /**
     * Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it was initialised).
     * The settings object which is passed in will override any settings from the previous time it was initialised -
     * if you don't pass any settings then the ones from the previous initialisation will be used.
     */
    reinitialise(options?: JScrollPaneSettings): void;
    /**
     * Scrolls the specified element (a jQuery object) into view so that it can be seen within the viewport.
     * @param ele A jQuery object to scroll to
     * @param stickToTop If it is true then the element will appear at the top of the viewport, if it is false
            then the viewport will scroll as little as possible to show the element.
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollToElement(ele: JQuery, stickToTop?: boolean, animate?: boolean): void;
    /**
     * Scrolls the specified element (a jQuery selector string) into view so that it can be seen within the viewport.
     * @param ele A jQuery selector of the object to scroll to
     * @param stickToTop If it is true then the element will appear at the top of the viewport, if it is false
            then the viewport will scroll as little as possible to show the element.
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollToElement(ele: string, stickToTop?: boolean, animate?: boolean): void;
    /**
     * Scrolls the specified element (a DOM node) into view so that it can be seen within the viewport.
     * @param ele A DOM node to scroll to
     * @param stickToTop If it is true then the element will appear at the top of the viewport, if it is false
            then the viewport will scroll as little as possible to show the element.
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollToElement(ele: HTMLElement, stickToTop?: boolean, animate?: boolean): void;
    /**
     * Scrolls the pane so that the specified co-ordinates within the content are at the top left of the viewport.
     * @param destX Left position of the viewport to scroll to
     * @param destY Top position of the viewport to scroll to
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollTo(destX: number, destY: number, animate?: boolean): void;
    /**
     * Scrolls the pane so that the specified co-ordinate within the content is at the left of the viewport.
     * @param destX Left position of the viewport to scroll to
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollToX(destX: number, animate?: boolean): void;
    /**
     * Scrolls the pane so that the specified co-ordinate within the content is at the top of the viewport.
     * @param destY Top position of the viewport to scroll to
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollToY(destY: number, animate?: boolean): void;
    /**
     * Scrolls the pane to the specified percentage of its maximum horizontal scroll position.
     * @param destPercentX Percentage from left of the full width of the viewport to scroll to
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollToPercentX(destPercentX: number, animate?: boolean): void;
    /**
     * Scrolls the pane to the specified percentage of its maximum vertical scroll position.
     * @param destPercentY Percentage from top of the full width of the viewport to scroll to
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollToPercentY(destPercentY: number, animate?: boolean): void;
    /**
     * Scrolls the pane by the specified amount of pixels.
     * @param deltaX Number of pixels to scroll horizontally
     * @param deltaY Number of pixels to scroll vertically
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollBy(deltaX: number, deltaY: number, animate?: boolean): void;
    /**
     * Scrolls the pane by the specified amount of pixels.
     * @param deltaX Number of pixels to scroll horizontally
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollByX(deltaX: number, animate?: boolean): void;
    /**
     * Scrolls the pane by the specified amount of pixels
     * @param deltaY Number of pixels to scroll vertically
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollByY(deltaY: number, animate?: boolean): void;
    /**
     * Positions the horizontal drag at the specified x position (and updates the viewport to reflect this)
     * @param x New position of the horizontal drag
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    positionDragX(x: number, animate?: boolean): void;
    /**
     * Positions the vertical drag at the specified y position (and updates the viewport to reflect this)
     * @param x New position of the vertical drag
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    positionDragY(y: number, animate?: boolean): void;
    /**
     * This method is called when jScrollPane is trying to animate to a new position. You can override it if you want
     * to provide advanced animation functionality.
     */
    animate(ele: JQuery, prop: string, value: any, stepCallback: (...args: any[]) => any): void;
    /**
     * Returns the current x position of the viewport with regards to the content pane.
     */
    getContentPositionX(): number;
    /**
     * Returns the current y position of the viewport with regards to the content pane.
     */
    getContentPositionY(): number;
    /**
     * Returns the width of the content within the scroll pane.
     */
    getContentWidth(): number;
    /**
     * Returns the height of the content within the scroll pane.
     */
    getContentHeight(): number;
    /**
     * Returns whether or not this scrollpane has a horizontal scrollbar.
     */
    getIsScrollableH(): boolean;
    /**
     * Returns the horizontal position of the viewport within the pane content.
     */
    getPercentScrolledX(): number;
    /**
     * Returns the vertical position of the viewport within the pane content.
     */
    getPercentScrolledY(): number;
    /**
     * Returns whether or not this scrollpane has a vertical scrollbar.
     */
    getIsScrollableV(): boolean;
    /**
     * Gets a reference to the content pane. It is important that you use this method if you want to edit the content
     * of your jScrollPane as if you access the element directly then you may have some problems (as your original
     * element has had additional elements for the scrollbars etc added into it).
     */
    getContentPane(): JQuery;
    /**
     * Scrolls this jScrollPane down as far as it can currently scroll.
     * @param animate Should an animation occur. If you don't provide this argument then the animateScroll
            value from the settings object is used instead.
    */
    scrollToBottom(animate?: boolean): void;
    /**
     * Hijacks the links on the page which link to content inside the scrollpane. If you have changed the content of
     * your page (e.g. via AJAX) and want to make sure any new anchor links to the contents of your scroll pane will
     * work then call this function.
     */
    hijackInternalLinks(): void;
    /**
     * Destroys the jScrollPane on the instance matching this API object and restores the browser's default behaviour.
     */
    destroy(): void;
}

interface JQuery {
    /**
     * Initialises the jScrollPane on the JQuery object.
     */
    jScrollPane(options?: JScrollPaneSettings): JQuery;
}
