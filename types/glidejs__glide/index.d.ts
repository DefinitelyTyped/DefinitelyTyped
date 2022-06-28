// Type definitions for @glidejs/glide 3.4
// Project: https://glidejs.com/
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

declare namespace Glide {
    type Type = 'slider' | 'carousel';

    type Pattern =
        /**
         * Move one forward
         */
        | '>'
        /**
         * Move one backward
         */
        | '<'
        /**
         * Rewinds to end (last slide)
         */
        | '>>'
        /**
         * Rewinds to start (first slide)
         */
        | '<<'
        /**
         * Go to {i} zero-based slide (eq. '=1', will go to second slide)
         */
        | string;

    type Events =
        /**
         * Called before first mounting begins. However, the mounting phase has
         * not been started, and components are not bootstrapped yet.
         */
        | 'mount.before'

        /**
         * Called right after first mounting. All components have been mounted.
         */
        | 'mount.after'

        /**
         * Called right after updating settings with update() API method.
         */
        | 'update'

        /**
         * Called right after starting an instance with play() API method.
         */
        | 'play'

        /**
         * Called right after stopping instance with pause() API method.
         */
        | 'pause'

        /**
         * Called right before setting up a slider to its initial state. At this
         * point, classes, translations, and sizes are applied.
         */
        | 'build.before'

        /**
         * Called right after setting up a slider to its initial state. At this
         * point, classes, translations, and sizes are applied.
         */
        | 'build.after'

        /**
         * Called right before calculating new index and making a transition.
         * The movement schema (eg. =1) string has been parsed.
         */
        | 'run.before'

        /**
         * Called right after calculating new index and before making a
         * transition. The movement schema (eg. =1) string has been parsed.
         */
        | 'run'

        /**
         * Called after calculating new index and making a transition. The
         * movement schema (eg. =1) string has been parsed.
         */
        | 'run.after'

        /**
         * Called after calculating new index and making a transition, while we
         * did an offset animation. Offset animation take place at two moments:
         */
        | 'run.offset'

        /**
         * Called right after calculating the new index, but before making a
         * transition, while we did a rewinding to the start index.
         */
        | 'run.start'

        /**
         * Called right after calculating the new index, but before making a
         * transition, while we did a rewinding to the last index.
         */
        | 'run.end'

        /**
         * Called right before movement transition begins.
         */
        | 'move'

        /**
         * Called right after movement transition ends.
         */
        | 'move.after'

        /**
         * Called when the window is being resized. This event throttled
         */
        | 'resize'

        /**
         * Called right after swiping begins.
         */
        | 'swipe.start'

        /**
         * Called during swiping movement.
         */
        | 'swipe.move'

        /**
         * Called right after swiping ends.
         */
        | 'swipe.end'

        /**
         * Called right before a translate applies, while we doing a jump to the
         * first or last slide from offset movement. This event is only used
         * when a type is set up to carousel.
         */
        | 'translate.jump';

    type TransformerFunction = (
        glide: Static,
        components: object,
        events: any,
    ) => {
        /**
         * Modifies passed translate value by 100 pixels.
         */
        modify(translate: number): number;
    };

    /**
     * The component is a simple function that returns an object. Each component
     * has a single responsibility and communicates with other components using
     * events.
     */
    type ComponentFunction = (
        glide: Static,
        components: object,
        events: any,
    ) => {
        mount(): void;
    };

    interface Options {
        /**
         * Type of the movement
         *
         * @default 'slider'
         */
        type?: Type | undefined;

        /**
         * Start at specific slide number
         *
         * @default 0
         */
        startAt?: number | undefined;

        /**
         * A number of visible slides
         *
         * @default 1
         */
        perView?: number | undefined;

        /**
         * Focus currently active slide at a specified position
         *
         * @default 0
         */
        focusAt?: number | string | undefined;

        /**
         * A size of the space between slides
         *
         * @default 10
         */
        gap?: number | undefined;

        /**
         * Change slides after a specified interval
         *
         * @default false
         */
        autoplay?: false | number | undefined;

        /**
         * Stop autoplay on mouseover
         *
         * @default true
         */
        hoverpause?: boolean | undefined;

        /**
         * Change slides with keyboard arrows
         *
         * @default true
         */
        keyboard?: boolean | undefined;

        /**
         * Stop running perView number of slides from the end
         *
         * @default false
         */
        bound?: boolean | undefined;

        /**
         * Minimal swipe distance needed to change the slide
         *
         * @default 80
         */
        swipeThreshold?: number | false | undefined;

        /**
         * Minimal mousedrag distance needed to change the slide
         *
         * @default 120
         */
        dragThreshold?: number | false | undefined;

        /**
         * A maximum number of slides moved per single swipe or drag
         *
         * @default false
         */
        perTouch?: number | false | undefined;

        /**
         * Alternate moving distance ratio of swiping and dragging
         *
         * @default 0.5
         */
        touchRatio?: number | undefined;

        /**
         * Angle required to activate slides moving
         *
         * @default 45
         */
        touchAngle?: number | undefined;

        /**
         * Duration of the animation
         *
         * @default 400
         */
        animationDuration?: number | undefined;

        /**
         * Allow looping the slider type
         *
         * @default true
         */
        rewind?: boolean | undefined;

        /**
         * Duration of the rewinding animation
         *
         * @default 800
         */
        rewindDuration?: number | undefined;

        /**
         * Easing function for the animation
         *
         * @default 'cubic-bezier(0.165, 0.840, 0.440, 1.000)
         */
        animationTimingFunc?: string | undefined;

        /**
         * Moving direction mode
         *
         * @default 'ltr'
         */
        direction?: 'ltr' | 'rtl' | undefined;

        /**
         * The value of the future viewports which have to be visible in the
         * current view
         *
         * @default 0
         */
        peek?: number | { before?: number | undefined; after?: number | undefined } | undefined;

        /**
         * Collection of options applied at specified media breakpoints
         *
         * @default {}
         */
        breakpoints?: Record<number, Options> | undefined;

        /**
         * Collection of used HTML classes
         */
        classes?: {
            direction?: {
                /**
                 * @default 'glide--ltr'
                 */
                ltr?: string | undefined;
                /**
                 * @default 'glide--rtl'
                 */
                rtl?: string | undefined;
            } | undefined;
            /**
             * @default 'glide--slider'
             */
            slider?: string | undefined;
            /**
             * @default 'glide--carousel'
             */
            carousel?: string | undefined;
            /**
             * @default 'glide--swipeable'
             */
            swipeable?: string | undefined;
            /**
             * @default 'glide--dragging'
             */
            dragging?: string | undefined;
            /**
             * @default 'glide__slide--clone'
             */
            cloneSlide?: string | undefined;
            /**
             * @default 'glide__bullet--active'
             */
            activeNav?: string | undefined;
            /**
             * @default 'glide__slide--active'
             */
            activeSlide?: string | undefined;
            /**
             * @default 'glide__arrow--disabled'
             */
            disabledArrow?: string | undefined;
        } | undefined;

        /**
         * Throttle costly events
         *
         * @default 25
         */
        throttle?: number | undefined;
    }

    interface Properties {
        /**
         * Holds currently active zero-based slide index.
         */
        index: number;

        /**
         * Holds instance initialization settings.
         */
        settings: Options;

        /**
         * Holds type of the Glide instance.
         */
        type: Type;

        /**
         * Holds state of the ability to interact.
         */
        disabled: boolean;

        /**
         * Update settings for the Glide instance.
         */
        update(settings: Options): void;

        /**
         * Destroy instance and undo all modifications which have been made to
         * the DOM. It also unbinds added event listeners.
         */
        destroy(): void;

        /**
         * Make movement based on the defined pattern. A pattern must be in the
         * special format
         */
        go(pattern: Pattern): void;

        /**
         * Stop auto-playing. Hold changing slides after a defined interval.
         */
        pause(): void;

        /**
         * Force to run auto-playing with passed interval
         */
        play(force?: number): void;

        /**
         * Disable instance interaction. Blocks ability to manually change
         * slides via controls or API.
         */
        disable(): void;

        /**
         * Enable previously disabled instance. Start responding to interaction.
         */
        enable(): void;

        /**
         * Verify the type of a Glide instance.
         */
        isType(type: Type): boolean;
    }

    interface Static {
        // tslint:disable-next-line:no-misused-new
        new (selector: string, options?: Options): Static;

        /**
         * A Glide instance is in "uninitialized" mode until a mount() method
         * call. It starts an entire building process.
         */
        mount(components?: Record<string, ComponentFunction>): Properties;

        /**
         * Registering Transformers
         */
        mutate(transformers: TransformerFunction[]): Static;

        /**
         * Register callback which will be called at the specified events.
         */
        on(event: Events | Events[], definition: () => void): void;
    }
}

declare const Glide: Glide.Static;

export = Glide;
export as namespace Glide;
