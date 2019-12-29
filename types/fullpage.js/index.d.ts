// Type definitions for fullpage.js v2.9.5
// Project: http://alvarotrigo.com/fullPage/
// Definitions by: Andrew Roberts <http://www.atroberts.org>, Jodi Warren <https://github.com/jodiwarren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

import htmlString = JQuery.htmlString;

interface FullPageJsOptions {
    /**
     * (default false) A selector can be used to specify the menu to link with the sections. This way the scrolling of the sections will activate the corresponding element in the menu using the class active. This won't generate a menu but will just add the active class to the element in the given menu with the corresponding anchor links. In order to link the elements of the menu with the sections, an HTML 5 data-tag (data-menuanchor) will be needed to use with the same anchor links as used within the sections.
     */
    menu?: string;

    /**
     * (default false). Determines whether anchors in the URL will have any effect at all in the plugin. You can still using anchors internally for your own functions and callbacks, but they won't have any effect in the scrolling of the site. Useful if you want to combine fullPage.js with other plugins using anchor in the URL.
     */
    lockAnchors?: boolean;

    /**
     * (default []) Defines the anchor links (#example) to be shown on the URL for each section. Anchors value should be unique. The position of the anchors in the array will define to which sections the anchor is applied. (second position for second section and so on). Using anchors forward and backward navigation will also be possible through the browser. This option also allows users to bookmark a specific section or slide. Be careful! anchors can not have the same value as any ID element on the site (or NAME element for IE). Now anchors can be defined directly in the HTML structure by using the attribute data-anchor as explained here.
     */
    anchors?: string[];

    /**
     * (default false) If set to true, it will show a navigation bar made up of small circles.
     */
    navigation?: boolean;

    /**
     * (default none) It can be set to left or right and defines which position the navigation bar will be shown (if using one).
     */
    navigationPosition?: string;

    /**
     * (default []) Defines the tooltips to show for the navigation circles in case they are being used. Example: navigationTooltips: ['firstSlide', 'secondSlide'].
     */
    navigationTooltips?: string[];

    /**
     * (default false) Shows a persistent tooltip for the actively viewed section in the vertical navigation.
     */
    showActiveTooltip?: boolean;

    /**
     * (default false) If set to true it will show a navigation bar made up of small circles for each landscape slider on the site.
     */
    slidesNavigation?: boolean;

    /**
     * (default bottom) Defines the position for the landscape navigation bar for sliders. Admits top and bottom as values. You may want to modify the CSS styles to determine the distance from the top or bottom as well as any other style such as color.
     */
    slidesNavPosition?: string;

    // Scrolling

    /**
     * (default true). Defines whether to use JavaScript or CSS3 transforms to scroll within sections and slides. Useful to speed up the movement in tablet and mobile devices with browsers supporting CSS3. If this option is set to true and the browser doesn't support CSS3, a jQuery fallback will be used instead.
     */
    css3?: boolean;

    /**
     * (default 700) Speed in milliseconds for the scrolling transitions.
     */
    scrollingSpeed?: number;

    /**
     * (default true) Defines whether to use the "automatic" scrolling or the "normal" one. It also has affects the way the sections fit in the browser/device window in tablets and mobile phones.
     */
    autoScrolling?: boolean;

    /**
     * (default true). Determines whether or not to fit sections to the viewport or not. When set to true the current active section will always fill the whole viewport. Otherwise the user will be free to stop in the middle of a section (when )
     */
    fitToSection?: boolean;

    /**
     * (default 1000). If fitToSection is set to true, this delays the fitting by the configured milliseconds.
     */
    fitToSectionDelay?: number;

    /**
     *  (default false). Determines whether to use scrollbar for the site or not. In case of using scroll bar, the autoScrolling functionality will still working as expected. The user will also be free to scroll the site with the scroll bar and fullPage.js will fit the section in the screen when scrolling finishes.
     */
    scrollBar?: boolean;

    /**
     * (default easeInOutCubic) Defines the transition effect to use for the vertical and horizontal scrolling. It requires the file vendors/jquery.easings.min.js or jQuery UI for using some of its transitions. Other libraries could be used instead.
     */
    easing?: string;

    /**
     * (default ease) Defines the transition effect to use in case of using css3:true. You can use the pre-defined ones (such as linear, ease-out...) or create your own ones using the cubic-bezier function. You might want to use Matthew Lein CSS Easing Animation Tool for it.
     */
    easingcss3?: string;

    /**
     * (default false) Defines whether scrolling down in the last section should scroll to the first one or not.
     */
    loopBottom?: boolean;

    /**
     *  (default false) Defines whether scrolling up in the first section should scroll to the last one or not.
     */
    loopTop?: boolean;

    /**
     * (default true) Defines whether horizontal sliders will loop after reaching the last or previous slide or not.
     */
    loopHorizontal?: boolean;

    /**
     * (default false) Defines whether scrolling down in the last section should scroll down to the first one or not, and if scrolling up in the first section should scroll up to the last one or not. Not compatible with loopTop or loopBottom.
     */
    continuousVertical?: boolean;

    /**
     * (default false) Extension of fullpage.js. Defines whether sliding right in the last slide should slide right to the first one or not, and if scrolling left in the first slide should slide left to the last one or not. Not compatible with loopHorizontal. Requires fullpage.js >= 2.8.3.
     */
    continuousHorizontal?: boolean;

    /**
     * (default false) Extension of fullpage.js. Defines whether to slide horizontally within sliders by using the mouse wheel or trackpad. Ideal for story telling. Requires fullpage.js >= 2.8.3.
     */
    scrollHorizontally?: boolean;

    /** 
     * (default false) Extension of fullpage.js. Determines whether moving one horizontal slider will force the sliding of sliders in other section in the same direction. Possible values are true, false or an array with the interlocked sections. For example [1,3,5] starting by 1. Requires fullpage.js >= 2.8.3. 
     */
    interlockedSlides?: boolean | number[];

    /**
     * Enables or disables the dragging and flicking of sections and slides by using mouse or fingers. Requires fullpage.js >= 2.8.9. Possible values are: 
     * true: enables the feature.
     * false: disables the feature.
     * vertical: enables the feature only vertically.
     * horizontal: enables the feature only horizontally.
     * fingersonly: enables the feature for touch devices only.
     * mouseonly: enables the feature for desktop devices only (mouse and trackpad).
     */
    dragAndMove?: boolean | 'vertical' | 'horizontal' | 'fingersonly' | 'mouseonly';

    /**
     * (default false)Extension of fullpage.js. Provides a way to use non full screen sections based on percentage. Ideal to show visitors there's more content in the site by showing part of the next or previous section. Requires fullPage.js >= 2.8.8 To define the percentage of each section the attribute data-percentage must be used. The centering of the section in the viewport can be determined by using a boolean value in the attribute data-centered (default to true if not specified). For example:
     */
    offsetSections?: boolean;

    /** 
     * (default false). Extension of fullpage.js. Defines whether or not to reset every slider after leaving its section. Requires fullpage.js >= 2.8.3.
     */
    resetSliders?: boolean;

    /**
     * Defines whether to use a fading effect or not instead of the default scrolling one. Possible values are true, false, sections, slides. It can therefore be applied just vertically or horizontally, or to both at the time. Requires fullpage.js >= 2.8.6.
     */
    fadingEffect?: boolean | 'sections' | 'slides';

    /**
     *  (default null) If you want to avoid the auto scroll when scrolling over some elements, this is the option you need to use. (useful for maps, scrolling divs etc.) It requires a string with the jQuery selectors for those elements. (For example: normalScrollElements: '#element1, .element2')
     */
    normalScrollElements?: string;

    /**
     * (default false) defines whether or not to create a scroll for the section/slide in case its content is bigger than the height of it. When set to true, your content will be wrapped by the plugin. Consider using delegation or load your other scripts in the afterRender callback. In case of setting it to true, it requires the vendor library scrolloverflow.min.js and it should be loaded before the fullPage.js plugin.
     */
    scrollOverflow?: boolean;

    /**
     * when using scrollOverflow:true fullpage.js will make use of a forked and modified version of iScroll.js libary. You can customize the scrolling behaviour by providing fullpage.js with the iScroll.js options you want to use. Check its documentation for more info.
     */
    scrollOverflowOptions?: any;

    /**
     * When set to true it scrolls up the content of the section/slide with scroll bar when leaving to another vertical section. This way the section/slide will always show the start of its content even when scrolling from a section under it
     */
    scrollOverflowReset?: boolean;

    /**
     * (default 5) Defines a percentage of the browsers window width/height, and how far a swipe must measure for navigating to the next section / slide
     */
    touchSensitivity?: number;

    /**
     * (default 5) Defines the threshold for the number of hops up the html node tree Fullpage will test to see if normalScrollElements is a match to allow scrolling functionality on divs on a touch device. (For example: normalScrollElementTouchThreshold: 3)
     */
    normalScrollElementTouchThreshold?: number;

    /**
     * Defines how to scroll to a section which size is bigger than the viewport. By default fullPage.js scrolls to the top if you come from a section above the destination one and to the bottom if you come from a section below the destination one.
     */
    bigSectionsDestination?: 'top' | 'bottom' | null;

    // Accessibility

    /**
     * (default true) Defines if the content can be navigated using the keyboard
     */
    keyboardScrolling?: boolean;

    /**
     * (default true) Defines whether the load of the site when given an anchor (#) will scroll with animation to its destination or will directly load on the given section.
     */
    animateAnchor?: boolean;

    /**
     * (default true) Defines whether to push the state of the site to the browser's history. When set to true each section/slide of the site will act as a new page and the back and forward buttons of the browser will scroll the sections/slides to reach the previous or next state of the site. When set to false, the URL will keep changing but will have no effect on the browser's history. This option is automatically turned off when using autoScrolling:false.
     */
    recordHistory?: boolean;

    // Design
    /**
     * (default: true) Determines whether to use control arrows for the slides to move right or left.
     */
    controlArrows?: boolean;

    /**
     * (default true) Vertically centering of the content within sections. When set to true, your content will be wrapped by the plugin. Consider using delegation or load your other scripts in the afterRender callback.
     */
    verticalCentered?: boolean;


    resize ?: boolean;

    /**
     * (default none) Define the CSS background-color property for each section
     */
    sectionsColor ?: string[];

    /**
     * (default 0) Defines the top padding for each section with a numerical value and its measure (paddingTop: '10px', paddingTop: '10em'...) Useful in case of using a fixed header.
     */
    paddingTop?: string;

    /**
     * (default 0) Defines the bottom padding for each section with a numerical value and its measure (paddingBottom: '10px', paddingBottom: '10em'...). Useful in case of using a fixed footer.
     */
    paddingBottom?: string;

    /**
     * (default null) Defines which elements will be taken off the scrolling structure of the plugin which is necessary when using the css3 option to keep them fixed. It requires a string with the jQuery selectors for those elements. (For example: fixedElements: '#element1, .element2')
     */
    fixedElements?: string;

    /**
     *  (default 0) A normal scroll (autoScrolling:false) will be used under the defined width in pixels. A class fp-responsive is added to the body tag in case the user wants to use it for their own responsive CSS. For example, if set to 900, whenever the browser's width is less than 900 the plugin will scroll like a normal site.
     */
    responsiveWidth?: number;

    /**
     * (default 0) A normal scroll (autoScrolling:false) will be used under the defined height in pixels. A class fp-responsive is added to the body tag in case the user wants to use it for their own responsive CSS. For example, if set to 900, whenever the browser's height is less than 900 the plugin will scroll like a normal site.
     */
    responsiveHeight?: number;

    /** 
     * When set to true slides will be turned into vertical sections when responsive mode is fired. (by using the responsiveWidth or responsiveHeight options detailed above). Requires fullpage.js >= 2.8.5.
     */ 
    responsiveSlides?: boolean;

    /**
     * When set to true slides will be turned into vertical sections when responsive mode is fired. (by using the responsiveWidth or responsiveHeight options detailed above). Requires fullpage.js >= 2.8.5.
     */
    parallax?: boolean;

    /**
     * Allows to configure the parameters for the parallax backgrounds effect when using the option parallax:true.
     */ 
    parallaxOptions?: {
        type?: 'cover' | 'reveal',
        percentage?: number,
        property?: string,
    };

    /**
     * Lazy loading is active by default which means it will lazy load any media element containing the attribute data-src as detailed in the Lazy Loading docs . If you want to use any other lazy loading library you can disable this fullpage.js feature.
     */ 
    lazyLoading?: boolean;

    // Custom selectors

    /**
     * (default .section) Defines the jQuery selector used for the plugin sections. It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.
     */
    sectionSelector?: string;

    /**
     * (default .slide) Defines the jQuery selector used for the plugin slides. It might need to be changed sometimes to avoid problem with other plugins using the same selectors as fullpage.js.
     */
    slideSelector?: string;

    // Events
    /**
     * This callback is fired once the user leaves a section, in the transition to the new section. Returning false will cancel the move before it takes place.
     * @param index index of the leaving section. Starting from 1.
     * @param nextIndex index of the destination section. Starting from 1.
     * @param direction it will take the values up or down depending on the scrolling direction.
     */
    onLeave?: (index: number, nextIndex: number, direction: string) => void;

    /**
     * Callback fired once the sections have been loaded, after the scrolling has ended.
     * @param anchorLink anchorLink corresponding to the section.
     * @param index index of the section. Starting from 1.
     */
    afterLoad?: (anchorLink: string, index: number) => void;

    /**
     * This callback is fired just after the structure of the page is generated. This is the callback you want to use to initialize other plugins or fire any code which requires the document to be ready (as this plugin modifies the DOM to create the resulting structure).
     */
    afterRender?: () => void;

    /**
     * This callback is fired after resizing the browser's window. Just after the sections are resized.
     */
    afterResize?: () => void;

    /**
     * This callback is fired after fullpage.js changes from normal to responsive mode or from responsive mode to normal mode.
     * @param {boolean} isResponsive boolean that determines if it enters into responsive mode (true) or goes back to normal mode (false)
     */
    afterResponsive?: (isResponsive: boolean) => void;

    /**
     * Callback fired once the slide of a section have been loaded, after the scrolling has ended.
     *
     * In case of not having anchorLinks defined for the slide or slides the slideIndex parameter would be the only one to use.
     *
     * Parameters:
     *
     * @param anchorLink anchorLink corresponding to the section.
     * @param index index of the section. Starting from 1.
     * @param slideAnchor anchor corresponding to the slide (in case there is)
     * @param slideIndex index of the slide. Starting from 1. (the default slide doesn't count as slide, but as a section)
     */
    afterSlideLoad?: (anchorLink: string, index: number, slideAnchor: string, slideIndex: number) => void;

    /**
     * This callback is fired once the user leaves an slide to go to another, in the transition to the new slide. Returning false will cancel the move before it takes place.
     * @param anchorLink: anchorLink corresponding to the section.
     * @param index index of the section. Starting from 1.
     * @param slideIndex index of the slide. Starting from 0.
     * @param direction takes the values right or left depending on the scrolling direction.
     * @param nextSlideIndex index of the destination slide. Starting from 0.
     */
    onSlideLeave?: (anchorLink: string, index: number, slideIndex: number, direction: string, nextSlideIndex: number) => void;
}

interface FullPageJSGlobalOptions {
    options: FullPageJsOptions;
}

interface FullPageJsMethods {
    (options?: FullPageJsOptions): any;

    /**
     * Sets the scrolling configuration in real time.
     * Defines the way the page scrolling behaves.
     * If it is set to true, it will use the "automatic" scrolling,
     * otherwise, it will use the "manual" or "normal" scrolling of the site.
     */
    setAutoScrolling(active: boolean): void;

    /**
     * Defines whether to record the history for each hash change in the URL.
     */
    setRecordHistory(active: boolean): void;

    /**
     * Defines the scrolling speed in milliseconds.
     */
    setScrollingSpeed(speed: number): void;

    /**
     *  Sets the value for the option fitToSection
     *  determining whether to fit the section in the screen or not.
     */
    setFitToSection(active: boolean): void;

    /**
     * Adds or remove the possibility of scrolling through sections
     * by using the mouse wheel or the trackpad.
     */
    setLockAnchors(active: boolean): void;

    /**
     * Adds or remove the possibility of scrolling through sections
     * by using the mouse wheel or the trackpad.
     */
    setMouseWheelScrolling(active: boolean): void;

    /**
     * Adds or remove the possibility of scrolling through sections
     * by using the mouse wheel/trackpad or touch gestures.
     * Optionally a second parameter can be used to specify the direction
     * for which the action will be applied.
     */
    setAllowScrolling(active: boolean, directions?: string): void;

    /**
     * Adds or remove the possibility of scrolling through sections
     * by using the keyboard arrow keys
     */
    setKeyboardScrolling(active: boolean, directions?: string): void;

    /**
     * Scrolls one section up
     */
    moveSectionUp(): void;

    /**
     * Scrolls one section down
     */
    moveSectionDown(): void;

    /**
     * Moves the page to the given section and slide with no animation.
     * Anchors or index positions can be used as params.
     */
    silentMoveTo(sectionAnchor: number | string, slideAnchor?: number | string): void;

    /**
     * Scrolls the page to the given section and slide.
     * The first slide, the visible one by default, will have index 0.
     */
    moveTo(sectionAnchor: number | string, slideAnchor?: number | string): void;

    /**
     * Slides right the slider of the active section.
     * Optional `section` param.
     */
    moveSlideRight(section?: number | string): void;

    /**
     * Slides left the slider of the active section.
     * Optional `section` param.
     */
    moveSlideLeft(section?: number | string): void;

    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */
    reBuild(): void;

    /**
     * Sets the responsive mode of the page.
     * When set to true the autoScrolling will be turned off
     * and the result will be exactly the same one as when
     * the responsiveWidth or responsiveHeight options
     * get fired.
     */
    setResponsive(active: boolean): void;

    /**
     * Sets the value for the option fitToSection
     * determining whether to fit the section
     * in the screen or not.
     */
    setFitToSection(active?: boolean): void;

    /**
     * Scrolls to the nearest active section fitting it in the viewport.
     */
    fitToSection(): void;

    /**
     * Adds or remove the possibility of scrolling through sections/slides
     * by using the mouse wheel/trackpad or touch gestures
     * (which is active by default).
     *
     * Note this won't disable the keyboard scrolling. You would need to
     * use setKeyboardScrolling for it.
     */
    setAllowScrolling(allow: boolean, direction?: string): void;

    /**
     * Destroys the plugin events and optionally its HTML markup and styles.
     * Ideal to use when using AJAX to load content.
     *
     * If 'all' is passed, the HTML markup
     * and styles used by fullpage.js will be removed. This way the
     * original HTML markup, the one used before any plugin
     * modification is made, will be maintained.
     *
     * @param {"all" | undefined} type
     */
    destroy(type?: 'all'): void;

    responsiveSlides: {
        /**
         * Extension of fullpage.js. Requires fullpage.js >= 2.8.5.
         * Turns horizontal slides into vertical sections.
         */
        toSections(): void;

        /**
         * Extension of fullpage.js. Requires fullpage.js >= 2.8.5.
         * Turns back the original slides (now converted into
         * vertical sections) into horizontal slides again.
         */
        toSlides(): void;
    }
}

interface FullPageJs extends FullPageJSGlobalOptions, FullPageJsMethods {}

interface JQueryStatic {
    fullpage: FullPageJsMethods;
}

interface JQuery {
    fullpage: FullPageJs;
}
