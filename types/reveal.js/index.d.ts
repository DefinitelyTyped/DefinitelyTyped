// Type definitions for Reveal 4.3
// Project: https://github.com/hakimel/reveal.js/
// Definitions by: robertop87 <https://github.com/robertop87>,
//                 Nava2 <https://github.com/Nava2>,
//                 JPtenBerge <https://github.com/JPtenBerge>
//                 Keita Watanabe <https://github.com/kwatanwa17>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Reveal;

export = Reveal;

/**
 * reveal.js - MIT licensed
 *
 * Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
 *
 * @see {@link https://revealjs.com}
 * @see {@link https://github.com/hakimel/reveal.js/blob/master/js/reveal.js}
 */
declare const Reveal: {
    new (options?: Reveal.Options): Reveal.Api;
    new (revealElement: Element, options: Reveal.Options): Reveal.Api;
    initialize(options?: Reveal.Options): Promise<Reveal.Api>;
};

declare namespace Reveal {
    /**
     * The public reveal.js API
     *
     * @see {@link https://github.com/hakimel/reveal.js/blob/master/js/reveal.js}
     */
    interface Api {
        /**
         * The reveal.js version
         *
         * @returns reveal.js version
         */
        VERSION: string;

        /**
         * Starts up the presentation.
         *
         * @param options - RevealOption see {@link Options}
         * @returns a promise
         */
        initialize: (options?: Options) => Promise<Api>;

        /**
         * Applies the configuration settings from the config
         * object. May be called multiple times.
         *
         * @param options - RevealOption see {@link Options}
         */
        configure: (options?: Options) => void;

        /**
         * Uninitializes reveal.js by undoing changes made to the
         * DOM and removing all event listeners.
         */
        destroy: () => void;

        /**
         * Syncs the presentation with the current DOM. Useful
         * when new slides or control elements are added or when
         * the configuration has changed.
         */
        sync: () => void;

        /**
         * Updates reveal.js to keep in sync with new slide attributes. For
         * example, if you add a new `data-background-image` you can call
         * this to have reveal.js render the new background image.
         *
         * Similar to #sync() but more efficient when you only need to
         * refresh a specific slide.
         *
         * @param  slide
         * @see {@link sync}
         */
        syncSlide: (slide: HTMLElement) => void;

        /**
         * Formats the fragments on the given slide so that they have
         * valid indices. Call this if fragments are changed in the DOM
         * after reveal.js has already initialized.
         *
         * @param slide
         * @returns a list of the HTML fragments that were synced
         */
        syncFragments: (slide: HTMLElement) => Element[];

        // Navigation methods

        //     TODO: this type definition may not be correct as the
        // optional parameters are placed before the required parametes
        // see https://github.com/hakimel/reveal.js/blob/master/js/reveal.js#L1234
        /**
         * Steps from the current point in the presentation to the
         * slide which matches the specified horizontal and vertical
         * indices.
         *
         * @param h - Horizontal index of the target slide
         * @param v - Vertical index of the target slide
         * @param f - Index of a fragment within the
         * target slide to activate
         * @param origin - Origin for use in multimaster environments
         */
        slide(h?: number, v?: number, f?: number, origin?: number): void;

        /**
         * Nvigate to the left slide
         *
         * @param skipFragments
         */
        left(skipFragments?: boolean): void;

        /**
         * Nvigate to the right slide
         *
         * @param skipFragments
         */
        right(skipFragments?: boolean): void;

        /**
         * Nvigate to the above slide
         *
         * @param skipFragments
         */
        up(skipFragments?: boolean): void;

        /**
         * Nvigate to the below slide
         *
         * @param skipFragments
         */
        down(skipFragments?: boolean): void;

        /**
         * Navigates backwards, prioritized in the following order:
         * 1) Previous fragment
         * 2) Previous vertical slide
         * 3) Previous horizontal slide
         *
         * @param skipFragments
         */
        prev(skipFragments?: boolean): void;

        /**
         * Navigates forwards, prioritized in the following order:
         * 1) Next fragment
         * 2) Next vertical slide
         * 3) Next horizontal slide
         *
         * @param skipFragments
         */
        next(skipFragments?: boolean): void;

        // Navigation alias

        /**
         * Nvigate to the left slide
         *
         * @param skipFragments
         */
        navigateLeft(skipFragments?: boolean): void;

        /**
         * Nvigate to the right slide
         *
         * @param skipFragments
         */
        navigateRight(skipFragments?: boolean): void;

        /**
         * Nvigate to the above slide
         *
         * @param skipFragments
         */
        navigateUp(skipFragments?: boolean): void;

        /**
         * Nvigate to the below slide
         *
         * @param skipFragments
         */
        navigateDown(skipFragments?: boolean): void;

        /**
         * Navigates backwards, prioritized in the following order:
         * 1) Previous fragment
         * 2) Previous vertical slide
         * 3) Previous horizontal slide
         *
         * @param skipFragments
         */
        navigatePrev(skipFragments?: boolean): void;

        /**
         * Navigates forwards, prioritized in the following order:
         * 1) Next fragment
         * 2) Next vertical slide
         * 3) Next horizontal slide
         *
         * @param skipFragments
         */
        navigateNext(skipFragments?: boolean): void;

        // Fragment methods

        /**
         * Navigate to the specified slide fragment.
         *
         * @param index - The index of the fragment that
         * should be shown, -1 means all are invisible
         * @param offset - Integer offset to apply to the
         * fragment index
         *
         * @returns true if a change was made in any
         * fragments visibility as part of this call
         */
        navigateFragment(index?: number, offset?: number): boolean;

        /**
         * Navigate to the previous slide fragment.
         *
         * @returns true if there was a previous fragment,
         * false otherwise
         */
        prevFragment(): boolean;

        /**
         * Navigate to the next slide fragment.
         *
         * @returns true if there was a next fragment,
         * false otherwise
         */
        nextFragment(): boolean;

        /**
         * Adds a listener to one of our custom reveal.js events,
         * like slidechanged.
         *
         * @param type
         * @param listener
         * @param useCapture
         */
        on: Document['addEventListener'];

        /**
         * Unsubscribes from a reveal.js event.
         *
         * @param type
         * @param listener
         * @param useCapture
         */
        off: Document['removeEventListener'];

        /**
         * Legacy event binding methods left in for backwards compatibility
         * Adds a listener to one of our custom reveal.js events,
         * like slidechanged.
         *
         * @param type
         * @param listener
         * @param useCapture
         */
        addEventListener: Document['addEventListener'];

        /**
         * Legacy event binding methods left in for backwards compatibility
         * Unsubscribes from a reveal.js event.
         *
         * @param type
         * @param listener
         * @param useCapture
         */
        removeEventListener: Document['removeEventListener'];

        /**
         * Applies JavaScript-controlled layout rules to the
         * presentation.
         */
        layout(): void;

        /**
         * Randomly shuffles all slides in the deck.
         */
        shuffle(): void;

        /**
         * Determine what available routes there are for navigation.
         *
         * @returns Available route {left, right, up, down}
         */
        availableRoutes(): {
            down: boolean;
            left: boolean;
            right: boolean;
            up: boolean;
        };

        /**
         * Returns an object with the available fragments as booleans (prev/next)
         *
         * @returns Available fragments {prev, next}
         */
        availableFragments(): { prev: boolean; next: boolean };

        /**
         * Open or close help overlay window.
         *
         * @param override - Flag which overrides the
         * toggle logic and forcibly sets the desired state. True means
         * help is open, false means it's closed.
         */
        toggleHelp(override?: boolean): void;

        /**
         * Toggles the slide overview mode on and off.
         *
         * @param override - Flag which overrides the
         * toggle logic and forcibly sets the desired state. True means
         * overview is open, false means it's closed.
         */
        toggleOverview(override?: boolean): void;

        /**
         * Toggles the paused mode on and off.
         *
         * @param override - Flag which overrides the
         * toggle logic and forcibly sets the desired state.
         */
        togglePause(override?: boolean): void;

        /**
         * Toggles the auto slide mode on and off.
         *
         * @param override - Flag which sets the desired state.
         * True means autoplay starts, false means it stops.
         */
        toggleAutoSlide(override?: boolean): void;

        // State navigation checks

        /**
         * Returns true if we're currently on the first slide in
         * the presentation.
         *
         * @returns true if we're currently on the first slide in
         * the presentation.
         */
        isFirstSlide(): boolean;

        /**
         * Returns true if we're currently on the last slide in
         * the presenation. If the last slide is a stack, we only
         * consider this the last slide if it's at the end of the
         * stack.
         *
         * @returns true if we're currently on the last slide in
         * the presenation.
         */
        isLastSlide(): boolean;

        /**
         * Returns true if we're on the last slide in the current
         * vertical stack.
         *
         * @returns true if we're on the last slide in the current
         * vertical stack.
         */
        isLastVerticalSlide(): boolean;

        /**
         * Checks if the current or specified slide is vertical
         * (nested within another slide).
         *
         * @param slide - the slide to check orientation of
         * @return true if the current or specified slide is vertical
         */
        isVerticalSlide(slide?: HTMLElement): boolean;

        // Stete checks

        /**
         * Checks if we are currently in the paused mode.
         *
         * @returns true if we are currently in the paused mode.
         */
        isPaused(): boolean;

        /**
         * Checks if the auto slide mode is currently on.
         *
         * @returns true if the auto slide mode is currently on.
         */
        isAutoSliding(): boolean;

        /**
         * Checks if this presentation is running inside of the
         * speaker notes window.
         *
         * @returns true if this presentation is running inside of
         * the speaker notes wind
         */
        isSpeakerNotes(): boolean;

        /**
         * Checks if the overview is currently active.
         *
         * @returns true if the overview is active, false otherwise
         */
        isOverview(): boolean;

        /**
         * Checks if it is focused
         *
         * @returns true if the it is focused, false otherwise
         */
        isFocused(): boolean;

        /**
         * Checks if this instance is being used to print a PDF.
         *
         * @returns true if being used to print a PDF,
         * false otherwise
         */
        isPrintingPDF(): boolean;

        /**
         * Checks if reveal.js has been loaded and is ready for use
         *
         * @returns true if reveal.js is ready for use, false otherwise
         */
        isReady(): boolean;

        // Slide preloading

        /**
         * Called when the given slide is within the configured view
         * distance. Shows the slide element and loads any content
         * that is set to load lazily (data-src).
         *
         * @param slide - Slide to show
         */
        loadSlide(slide: HTMLElement, options?: { excludeIframes?: boolean }): void;

        /**
         * Unloads and hides the given slide. This is called when the
         * slide is moved outside of the configured view distance.
         *
         * @param slide
         */
        unloadSlide(slide: HTMLElement): void;

        // Preview management

        /**
         * Opens a preview window for the target URL.
         *
         * @param url - url for preview iframe src
         */
        showPreview(url: string): void;

        /**
         * Closes any currently open overlay.
         */
        hidePreview(): void;

        // Adds or removes all internal event listeners

        /**
         * Binds all event listeners.
         */
        addEventListeners(): void;

        /**
         * Unbinds all event listeners.
         */
        removeEventListeners(): void;

        /**
         * Dispatches an event of the specified type from the
         * reveal DOM element.
         */
        dispatchEvent({
            target,
            type,
            data,
            bubbles,
        }: {
            target?: any;
            type: string;
            data: any;
            bubbles?: boolean;
        }): Event;

        // Facility for persisting and restoring the presentation state

        /**
         * Retrieves the current state of the presentation as
         * an object. This state can then be restored at any
         * time.
         *
         * @returns The current state - {indexh, indexv, indexf, paused, overview}
         */
        getState(): {
            indexh: number;
            indexv: number;
            indexf: number;
            paused: boolean;
            overview: boolean;
        };

        /**
         * Restores the presentation to the given state.
         *
         * @param object - state as generated by getState()
         * @see {@link getState} generates the parameter `state`
         */
        setState(object: { indexh: number; indexv: number; indexf: number; paused: boolean; overview: boolean }): void;
        // Presentation progress on range of 0-1

        /**
         * Returns a value ranging from 0-1 that represents
         * how far into the presentation we have navigated.
         *
         * @returns a value ranging from 0-1 that represents
         * how far into the presentation we have navigated.
         */
        getProgress(): number;

        // Returns the indices of the current, or specified, slide

        /**
         * Retrieves the h/v location and fragment of the current,
         * or specified, slide.
         *
         * @param slide - if specified, the returned index will
         * be for this slide rather than the currently active one
         *
         * @return h/v location and fragment of the current,
         * or specified, slide. {h, v, f}
         */
        getIndices(slide?: HTMLElement): { h: number; v: number; f: number };

        // Returns an Array of key:value maps of the attributes of each
        // slide in the deck

        /**
         * Returns an array of objects where each object represents the
         * attributes on its respective slide.
         *
         * @returns an array of objects where each object represents the
         * attributes on its respective slide.
         */
        getSlidesAttributes(): any[];

        // Returns the number of slides that we have passed

        /**
         * Returns the number of past slides. This can be used as a global
         * flattened index for slides.
         *
         * @param slide - The slide we're counting before
         *
         * @returns Past slide count
         */
        getSlidePastCount(slide: HTMLElement): number;
        // Returns the total number of slides

        /**
         * Retrieves the total number of slides in this presentation.
         *
         * @returns the total number of slides in this presentation.
         */
        getTotalSlides(): number;

        // Returns the slide element at the specified index

        /**
         * Returns the slide element matching the specified index.
         *
         * @param x - slide index
         * @param y - slide index
         *
         * @returns the slide element matching the specified index
         */
        getSlide(x: number, y: number): HTMLElement;

        // Returns the previous slide element, may be null

        /**
         * Returns the previous slide element, may be null
         *
         * @returns the previous slide element, may be null
         */
        getPreviousSlide(): HTMLElement | null;

        // Returns the current slide element

        /**
         * Returns the current slide element
         *
         * @returns the current slide element
         */
        getCurrentSlide(): HTMLElement;

        // Returns the slide background element at the specified index

        /**
         * Returns the background element for the given slide.
         * All slides, even the ones with no background properties
         * defined, have a background element so as long as the
         * index is valid an element will be returned.
         *
         * @param x - Horizontal background index OR a slide
         * HTML element
         * @param y - Vertical background index
         * @returns the background element for the given slide
         */
        getSlideBackground(x: number | HTMLElement, y: number): HTMLElement | undefined;

        // Returns the speaker notes string for a slide, or null

        /**
         * Retrieves the speaker notes from a slide. Notes can be
         * defined in two ways:
         * 1. As a data-notes attribute on the slide <section>
         * 2. As an <aside class="notes"> inside of the slide
         *
         * @param slide
         * @returns the speaker notes from a slide
         */
        getSlideNotes(slide: HTMLElement): string | null;

        // Returns an Array of all slides

        /**
         * Retrieves all slides in this presentation.
         *
         * @returns all slides in this presentation
         */
        getSlides(): Element[];

        // Returns an array with all horizontal/vertical slides in the deck

        /**
         * Returns a list of all horizontal slides in the deck. Each
         * vertical stack is included as one horizontal slide in the
         * resulting array.
         *
         * @returns a list of all horizontal slides in the deck
         */
        getHorizontalSlides(): Element[];

        /**
         * Returns all vertical slides that exist within this deck.
         *
         * @returns all vertical slides that exist within this deck
         */
        getVerticalSlides(): Element[];

        // Checks if the presentation contains two or more horizontal
        // and vertical slides

        /**
         * Returns true if there are at least two horizontal slides.
         *
         * @returns true if there are at least two horizontal slides
         */
        hasHorizontalSlides(): boolean;

        /**
         * Returns true if there are at least two vertical slides.
         *
         * @returns true if there are at least two vertical slides
         */
        hasVerticalSlides(): boolean;

        // Checks if the deck has navigated on either axis at least once

        /**
         * Checks if the deck has navigated on either axis at least once
         *
         * @returns true if the deck has navigated on either horizontal axis
         * at least once
         */
        hasNavigatedHorizontally(): boolean;

        /**
         * Checks if the deck has navigated on either axis at least once
         *
         * @returns true if the deck has navigated on either vertically axis
         * at least once
         */
        hasNavigatedVertically(): boolean;

        // Adds/removes a custom key binding

        /**
         * Add a custom key binding with optional description to
         * be added to the help screen.
         *
         * @param binding
         * @param callback
         */
        addKeyBinding(binding: string | { keyCode: number; key: string; description: string }, callback: any): void;

        /**
         * Removes the specified custom key binding.
         *
         * @param keyCode
         */
        removeKeyBinding(keyCode: number): void;

        // Programmatically triggers a keyboard event

        /**
         * Programmatically triggers a keyboard event
         *
         * @param keyCode
         */
        triggerKey(keyCode: number): void;

        // Registers a new shortcut to include in the help overlay

        /**
         * Registers a new shortcut to include in the help overlay
         *
         * @param key
         * @param value
         */
        registerKeyboardShortcut(key: string, value: string): void;

        /**
         * Calculates the computed pixel size of our slides. These
         * values are based on the width and height configuration
         * options.
         *
         * @param presentationWidth
         * @param presentationHeight
         * @returns the computed pixel size of the slides
         */
        getComputedSlideSize(presentationWidth: number, presentationHeight: number): ComputedSlideSize;

        // Returns the current scale of the presentation content

        /**
         * Returns the current scale of the presentation content
         *
         * @returns the current scale of the presentation content
         */
        getScale(): number;

        // Returns the current configuration object

        /**
         * Returns the current configuration object
         *
         * @returns the current configuration object
         */
        getConfig(): Options;

        // Helper method, retrieves query string as a key:value map

        /**
         * Returns a key:value hash of all query params.
         *
         * @returns a key:value hash of all query params
         */
        getQueryHash(): any;

        // Returns the path to the current slide as represented in the URL

        /**
         * Return a hash URL that will resolve to the given slide location.
         *
         * @param slide - the slide to link to
         * @returns a hash URL that will resolve to the given slide location
         */
        getSlidePath(slide: HTMLElement): string;

        // Returns reveal.js DOM elements

        /**
         * @returns reveal.js DOM element
         */
        getRevealElement(): Element;

        /**
         * @returns reveal.js DOM element
         */
        getSlidesElement(): Element;

        /**
         * @returns reveal.js DOM element
         */
        getViewportElement(): HTMLElement | null;

        /**
         * @returns reveal.js DOM element
         */
        getBackgroundsElement(): HTMLDivElement;

        // API for registering and retrieving plugins

        /**
         * Registers a new plugin with this reveal.js instance.
         *
         * reveal.js waits for all regisered plugins to initialize
         * before considering itself ready, as long as the plugin
         * is registered before calling `Reveal.initialize()`.
         *
         * @param plugin
         */
        registerPlugin(plugin: Plugin): void;

        /**
         * Checks if a specific plugin has been registered.
         *
         * @param id - unique plugin identifier
         * @returns true if a specific plugin has been registered.
         */
        hasPlugin(id: string): boolean;

        /**
         * Returns the specific plugin instance, if a plugin
         * with the given ID has been registered.
         *
         * @param id - unique plugin identifier
         * @returns plugin instance
         */
        getPlugin(id: string): Plugin;

        /**
         * @returns array of plugin instances
         */
        getPlugins(): { [id: string]: Plugin };
    }

    /**
     * Reveal options
     *
     * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/config.md}
     * @see {@link https://github.com/hakimel/reveal.js/blob/master/js/config.js}
     */
    interface Options {
        // Presentaion size
        // https://github.com/reveal/revealjs.com/blob/master/src/presentation-size.md

        /**
         * The "normal" size of the presentation, aspect ratio will be preserved
         * when the presentation is scaled to fit different resolutions
         *
         * @defaultValue `960`
         */
        width?: number;

        /**
         * The "normal" size of the presentation, aspect ratio will be preserved
         * when the presentation is scaled to fit different resolutions
         *
         * @defaultValue `700`
         */
        height?: number;

        /**
         * Factor of the display size that should remain empty around the content
         *
         * @defaultValue `0.04`
         */
        margin?: number;

        /**
         * Bounds for smallest/largest possible scale to apply to content
         *
         * @defaultValue `0.2`
         */
        minScale?: number;

        /**
         * Bounds for smallest/largest possible scale to apply to content
         *
         * @defaultValue `2.0`
         */
        maxScale?: number;

        /**
         * Display presentation control arrows
         *
         * @defaultValue `true`
         */
        controls?: boolean;

        /**
         * Help the user learn the controls by providing hints, for example by
         * bouncing the down arrow when they first encounter a vertical slide
         *
         * @defaultValue `true`
         */
        controlsTutorial?: boolean;

        /**
         * Determines where controls appear, "edges" or "bottom-right"
         *
         * @defaultValue `bottom-right`
         */
        controlsLayout?: 'edges' | 'bottom-right';

        /**
         * Visibility rule for backwards navigation arrows; "faded", "hidden"
         * or "visible"
         *
         * @defaultValue `faded`
         */
        controlsBackArrows?: 'faded' | 'hidden' | 'visible';

        /**
         * Display a presentation progress bar
         *
         * @defaultValue `true`
         */
        progress?: boolean;

        /**
         * Display the page number of the current slide
         * - true: Show slide number
         * - false: Hide slide number
         * Can optionally be set as a string that specifies the number formatting:
         * - "h.v": Horizontal . vertical slide number (default)
         * - "h/v": Horizontal / vertical slide number
         * - "c": Flattened slide number
         * - "c/t":	Flattened slide number / total slides
         * Alternatively, you can provide a function that returns the slide
         * number for the current slide. The function should take in a slide
         * object and return an array with one string [slideNumber] or
         * three strings [n1,delimiter,n2]. See #formatSlideNumber().
         *
         * @defaultValue `false`
         */
        slideNumber?: boolean | 'h.v' | 'h/v' | 'c' | 'c/t' | ((...args: any) => [string] | [string, string, string]);

        /**
         * Can be used to limit the contexts in which the slide number appears
         * - "all": Always show the slide number
         * - "print": Only when printing to PDF
         * - "speaker": Only in the speaker view
         *
         * @defaultValue `all`
         */
        showSlideNumber?: 'all' | 'print' | 'speaker';

        /**
         * Use 1 based indexing for # links to match slide number (default is zero
         * based)
         *
         * @defaultValue `false`
         */
        hashOneBasedIndex?: boolean;

        /**
         * Add the current slide number to the URL hash so that reloading the
         * page/copying the URL will return you to the same slide
         *
         * @defaultValue `false`
         */
        hash?: boolean;

        /**
         * Push each slide change to the browser history.  Implies `hash: true`
         *
         * @defaultValue `true`
         */
        respondToHashChanges?: boolean;

        /**
         * Flags if we should monitor the hash and change slides accordingly
         *
         * @defaultValue `false`
         */
        history?: boolean;

        /**
         * Enable keyboard shortcuts for navigation
         *
         * @defaultValue `true`
         */
        keyboard?: boolean;

        /**
         * Optional function that blocks keyboard events when retuning false
         *
         * If you set this to 'focused', we will only capture keyboard events
         * for embedded decks when they are in focus
         *
         * @defaultValue `null`
         */
        keyboardCondition?: 'focused' | null;

        /**
         * Disables the default reveal.js slide layout (scaling and centering)
         * so that you can use custom CSS layout
         *
         * @defaultValue `false`
         */
        disableLayout?: boolean;

        /**
         * Enable the slide overview mode*
         *
         * @defaultValue `true`
         */
        overview?: boolean;

        /**
         * Vertical centering of slides
         *
         * @defaultValue `true`
         */
        center?: boolean;

        /**
         * Enables touch navigation on devices with touch input
         *
         * @defaultValue `true`
         */
        touch?: boolean;

        /**
         * Loop the presentation
         *
         * @defaultValue `false`
         */
        loop?: boolean;

        /**
         * Change the presentation direction to be RTL
         *
         * @defaultValue `false`
         */
        rtl?: boolean;

        /**
         * Changes the behavior of our navigation directions.
         *
         * "default"
         * Left/right arrow keys step between horizontal slides, up/down
         * arrow keys step between vertical slides. Space key steps through
         * all slides (both horizontal and vertical).
         *
         * "linear"
         * Removes the up/down arrows. Left/right arrows step through all
         * slides (both horizontal and vertical).
         *
         * "grid"
         * When this is enabled, stepping left/right from a vertical stack
         * to an adjacent vertical stack will land you at the same vertical
         * index.
         *
         * Consider a deck with six slides ordered in two vertical stacks:
         * 1.1 2.1
         * 1.2 2.2
         * 1.3 .3
         *
         * If you're on slide 1.3 and navigate right, you will normally move
         * from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
         * from 1.3 -> 2.3.
         *
         * @defaultValue `default`
         */
        navigationMode?: 'default' | 'linear' | 'grid';

        /**
         * Randomizes the order of slides each time the presentation loads
         *
         * @defaultValue `false`
         */
        shuffle?: boolean;

        /**
         * Turns fragments on and off globally
         *
         * @defaultValue `true`
         */
        fragments?: boolean;

        /**
         * Flags whether to include the current fragment in the URL,
         * so that reloading brings you to the same fragment position
         *
         * @defaultValue `true`
         */
        fragmentInURL?: boolean;

        /**
         * Flags if the presentation is running in an embedded mode,
         * i.e. contained within a limited portion of the screen
         *
         * @defaultValue `false`
         */
        embedded?: boolean;

        /**
         * Flags if we should show a help overlay when the question-mark
         * key is pressed
         *
         * @defaultValue `true`
         */
        help?: boolean;

        /**
         * Flags if it should be possible to pause the presentation (blackout)
         *
         * @defaultValue `true`
         */
        pause?: boolean;

        /**
         * Flags if speaker notes should be visible to all viewers
         *
         * @defaultValue `false`
         */
        showNotes?: boolean;

        /**
         * Flags if slides with data-visibility="hidden" should be kep visible
         *
         * @defaultValue `false`
         */
        showHiddenSlides?: boolean;

        /**
         * Global override for autoplaying embedded media (video/audio/iframe)
         * - null: Media will only autoplay if data-autoplay is present
         * - true: All media will autoplay, regardless of individual setting
         * - false: No media will autoplay, regardless of individual setting
         *
         * @defaultValue `null`
         */
        autoPlayMedia?: boolean | null;

        /**
         * Global override for preloading lazy-loaded iframes
         * - null: Iframes with data-src AND data-preload will be loaded
         *         when within the viewDistance, iframes with only data-src
         *         will be loaded when visible
         * - true: All iframes with data-src will be loaded when within
         *         the viewDistance
         * - false: All iframes with data-src will be loaded only when visible
         *
         * @defaultValue `null`
         */
        preloadIframes?: boolean | null;

        /**
         * Can be used to globally disable auto-animation
         *
         * @defaultValue `true`
         */
        autoAnimate?: boolean;

        /**
         * Optionally provide a custom element matcher that will be
         * used to dictate which elements we can animate between.
         *
         * @defaultValue `null`
         */
        autoAnimateMatcher?: any;

        /**
         * Default settings for our auto-animate transitions, can be
         * overridden per-slide or per-element via data arguments
         *
         * @defaultValue `ease`
         */
        autoAnimateEasing?: string;

        /**
         * Default settings for our auto-animate transitions, can be
         * overridden per-slide or per-element via data arguments
         *
         * @defaultValue `1.0`
         */
        autoAnimateDuration?: number;

        /**
         * Default settings for our auto-animate transitions, can be
         * overridden per-slide or per-element via data arguments
         *
         * @defaultValue `true`
         */
        autoAnimateUnmatched?: boolean;

        /**
         * CSS properties that can be auto-animated. Position & scale
         * is matched separately so there's no need to include styles
         * like top/right/bottom/left, width/height or margin.
         *
         * @defaultValue `[ 'opacity', 'color', 'background-color', 'padding',
         * 'font-size', 'line-height', 'letter-spacing', 'border-width',
         * 'border-color', 'border-radius', 'outline', 'outline-offset']`
         */
        autoAnimateStyles?: Array<
            | 'opacity'
            | 'color'
            | 'background-color'
            | 'padding'
            | 'font-size'
            | 'line-height'
            | 'letter-spacing'
            | 'border-width'
            | 'border-color'
            | 'border-radius'
            | 'outline'
            | 'outline-offset'
        >;

        /**
         * Controls automatic progression to the next slide
         * - 0: Auto-sliding only happens if the data-autoslide HTML attribute
         *      is present on the current slide or fragment
         * - 1+: All slides will progress automatically at the given interval
         * - false: No auto-sliding, even if data-autoslide is present
         *
         * @defaultValue `0`
         */
        autoSlide?: number | false;

        /**
         * Stop auto-sliding after user input
         *
         * @defaultValue `true`
         */
        autoSlideStoppable?: boolean;

        /**
         * Use this method for navigation when auto-sliding (defaults to navigateNext)
         *
         * @defaultValue `null`
         */
        autoSlideMethod?: any;

        /**
         * Specify the average time in seconds that you think you will spend
         * presenting each slide. This is used to show a pacing timer in the
         * speaker view
         *
         * @defaultValue `null`
         */
        defaultTiming?: number | null;

        /**
         * Enable slide navigation via mouse wheel
         *
         * @defaultValue `false`
         */
        mouseWheel?: boolean;

        /**
         * Opens links in an iframe preview overlay
         * Add `data-preview-link` and `data-preview-link="false"`
         * to customise each link
         * individually
         *
         * @defaultValue `false`
         */
        previewLinks?: boolean;

        /**
         * Exposes the reveal.js API through window.postMessage
         *
         * @defaultValue `true`
         */
        postMessage?: boolean;

        /**
         * Dispatches all reveal.js events to the parent window through postMessage
         *
         * @defaultValue `false`
         */
        postMessageEvents?: boolean;

        /**
         * Focuses body when page changes visibility to ensure keyboard shortcuts work
         *
         * @defaultValue `true`
         */
        focusBodyOnPageVisibilityChange?: boolean;

        /**
         * Transition style
         *
         * @defaultValue `slide`
         */
        transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';

        /**
         * Transition speed
         *
         * @defaultValue `default`
         */
        transitionSpeed?: 'default' | 'fast' | 'slow';

        /**
         * Transition style for full page slide backgrounds
         *
         * @defaultValue `fade`
         */
        backgroundTransition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';

        // background
        // https://revealjs.com/backgrounds/#parallax-background

        /**
         * Parallax background image
         *
         * @remarks
         * CSS syntax, e.g. "a.jpg"
         *
         * @defaultValue ``
         */
        parallaxBackgroundImage?: string;

        /**
         * Parallax background size
         *
         * @remarks
         * CSS syntax, e.g. "3000px 2000px"
         *
         * @defaultValue ``
         */
        parallaxBackgroundSize?: string;

        /**
         * Parallax background repeat
         *
         * @defaultValue ``
         */
        parallaxBackgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit' | '';

        /**
         * Parallax background position
         *
         * @remarks
         * CSS syntax, e.g. "top left"
         *
         * @defaultValue ``
         */
        parallaxBackgroundPosition?: string;

        /**
         * Amount of pixels to move the parallax background per slide step
         *
         * @defaultValue `null`
         */
        parallaxBackgroundHorizontal?: number | null;

        /**
         * Amount of pixels to move the parallax background per slide step
         *
         * @defaultValue `null`
         */
        parallaxBackgroundVertical?: number | null;

        /**
         * The maximum number of pages a single slide can expand onto when printing
         * to PDF, unlimited by default
         *
         * @defaultValue `Number.POSITIVE_INFINITY`
         */
        pdfMaxPagesPerSlide?: number;

        /**
         * Prints each fragment on a separate slide
         *
         * @defaultValue `true`
         */
        pdfSeparateFragments?: boolean;

        /**
         * Offset used to reduce the height of content within exported PDF pages.
         * This exists to account for environment differences based on how you
         * print to PDF. CLI printing options, like phantomjs and wkpdf, can end
         * on precisely the total height of the document whereas in-browser
         * printing has to end one pixel before.
         *
         * @defaultValue `-1`
         */
        pdfPageHeightOffset?: number;

        /**
         * Number of slides away from the current that are visible
         *
         * @defaultValue `3`
         */
        viewDistance?: number;

        /**
         * Number of slides away from the current that are visible on mobile
         * devices. It is advisable to set this to a lower number than
         * viewDistance in order to save resources.
         *
         * @defaultValue `2`
         */
        mobileViewDistance?: number;

        /**
         * The display mode that will be used to show slides
         *
         * @defaultValue `block`
         */
        display?: string;

        /**
         * Hide cursor if inactive
         *
         * @defaultValue `true`
         */
        hideInactiveCursor?: boolean;

        /**
         * Time before the cursor is hidden (in ms)
         *
         * @defaultValue `5000`
         */
        hideCursorTime?: number;

        /**
         * Script dependencies to load
         *
         * @defaultValue `[]`
         */
        dependencies?: RevealDependency[];

        /**
         * Plugin objects to register and use for this presentation
         *
         * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/plugins.md}
         * @defaultValue `[]`
         */
        plugins?: PluginFunction[];

        /**
         * Highlight Plugin configuration
         *
         * @see {@link https://github.com/hakimel/reveal.js/blob/master/plugin/highlight/plugin.js}
         */
        highlight?: HighlightConfig;

        /**
         * Markdown Plugin configuration
         *
         * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/markdown.md}
         * @see {@link https://marked.js.org/using_advanced}
         */
        markdown?: MarkdownConfig;

        /**
         * katex - Math Plugin configuration
         *
         * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/math.md}
         * @see {@link https://github.com/hakimel/reveal.js/blob/master/plugin/math/katex.js}
         */
        katex?: KatexConfig;

        /**
         * mathjax2 - Math Plugin configuration
         *
         * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/math.md}
         * @see {@link https://github.com/hakimel/reveal.js/blob/master/plugin/math/mathjax2.js}
         */
        mathjax2?: Mathjax2Config;

        /**
         * mathjax3 - Math Plugin configuration
         *
         * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/math.md}
         * @see {@link https://github.com/hakimel/reveal.js/blob/master/plugin/math/mathjax3.js}
         */
        mathjax3?: Mathjax3Config;

        /**
         * Multiplex configuration
         *
         * @see {@link https://github.com/reveal/multiplex}
         */
        multiplex?: MultiplexConfig;
    }

    /**
     * Multiplex configuration
     *
     * @see {@link https://github.com/reveal/multiplex}
     */
    interface MultiplexConfig {
        // Obtained from the socket.io server. Gives this (the master) control of the presentation
        secret: string | null;
        // Obtained from the socket.io server
        id: string;
        // Location of socket.io server
        url: string;
    }

    /**
     * katex - Math Plugin configuration
     *
     * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/math.md}
     * @see {@link https://github.com/hakimel/reveal.js/blob/master/plugin/math/katex.js}
     */
    interface KatexConfig {
        local?: string;
        version?: string;
        delimiters?: Array<{ left: string; right: string; display: boolean }>;
        ignoredTags?: string[];
    }

    /**
     * mathjax2 - Math Plugin configuration
     *
     * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/math.md}
     * @see {@link https://github.com/hakimel/reveal.js/blob/master/plugin/math/mathjax2.js}
     */
    interface Mathjax2Config {
        mathjax?: string;
        config?: string;
        tex2jax?: {
            inlineMath?: any;
            skipTags?: string[];
        };
    }

    /**
     * mathjax3 - Math Plugin configuration
     *
     * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/math.md}
     * @see {@link https://github.com/hakimel/reveal.js/blob/master/plugin/math/mathjax3.js}
     */
    interface Mathjax3Config {
        mathjax?: string;
        tex?: { inlineMath?: any };
        options?: { skipHtmlTags: string[] };
    }

    /**
     * Highlight Plugin configuration
     *
     * @see {@link https://github.com/hakimel/reveal.js/blob/master/plugin/highlight/plugin.js}
     */
    interface HighlightConfig {
        highlightOnLoad?: boolean;
        excapeHTML?: boolean;
        beforeHighlight?: (...args: any) => any;
    }

    /**
     * Markdown Plugin configuration
     *
     * @see {@link https://github.com/reveal/revealjs.com/blob/master/src/markdown.md}
     * @see {@link https://marked.js.org/using_advanced}
     */
    interface MarkdownConfig {
        async?: boolean;
        baseUrl?: string;
        breaks?: boolean;
        gfm?: boolean;
        headerIds?: boolean;
        headerPrefix?: string;
        highlight?: (...args: any) => any;
        langPrefix?: string;
        mangle?: boolean;
        pedantic?: boolean;
        renderer?: object;
        sanitize?: boolean;
        sanitizer?: (...args: any) => any;
        silent?: boolean;
        smartLists?: boolean;
        smartpants?: boolean;
        tokenizer?: object;
        walkTokens?: (...args: any) => any;
        xhtml?: boolean;
    }

    /**
     * Reveal Depencency
     *
     * @see {@link https://revealjs.com/plugins/#dependencies}
     */
    interface RevealDependency {
        src: string;
        async?: boolean;
        callback?: () => void;
        condition?: () => boolean;
    }

    interface ComputedSlideSize {
        width: number;
        height: number;
        presentaionWidth: number;
        presentaionHeight: number;
    }

    // NOTE: it is possible to extend type definitions depend on the plugin
    /**
     * Reveal Plugin
     */
    interface Plugin {
        id: string;
        init(reveal: Api): Promise<any>;
    }

    interface PluginFunction {
        (): Plugin;
    }
}
