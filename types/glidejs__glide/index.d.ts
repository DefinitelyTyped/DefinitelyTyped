// Type definitions for @glidejs/glide 3.4
// Project: https://glidejs.com/
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

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

    type direction = '=' | '>' | '<' | '|';

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

    interface Component {
        /**
         * Mounts and initializes a component.
         */
        mount?: () => void;
    }

    interface Removable {
        remove(): void;
    }

    interface RunCurrentMovementContext {
        direction: string;
        steps: number | string;
    }

    interface MoveContext {
        movement: number;
    }

    type RunEvents = 'run.before' | 'run' | 'run.after' | 'run.offset' | 'run.start' | 'run.end';

    interface EventsBus {
        /**
         * Register callback which will be called at the specified events.
         */
        on(event: RunEvents, handler: (context: RunCurrentMovementContext) => void): Removable;
        on(event: 'move' | 'move.after' | 'translate.jump', handler: (context: MoveContext) => void): Removable;
        on(event: Events | Events[], handler: () => void): Removable;
        on(event: string | string[], handler: (context: Record<string, unknown>) => void): Removable;

        /**
         * Runs registered handlers for specified event.
         */
        emit(event: RunEvents, context: RunCurrentMovementContext): void;
        emit(event: 'move' | 'move.after' | 'translate.jump', context: MoveContext): void;
        emit(event: Events | Events[]): void;
        emit(event: string | string[], context?: Record<string, unknown>): void;
    }

    interface BuiltinComponentMap {
        Anchors: AnchorsComponent;
        Autoplay: AutoplayComponent;
        Breakpoints: BreakpointsComponent;
        Build: BuildComponent;
        Clones: ClonesComponent;
        Controls: ControlsComponent;
        Gaps: GapsComponent;
        Html: HtmlComponent;
        Images: ImagesComponent;
        Keyboard: KeyboardComponent;
        Move: MoveComponent;
        Peek: PeekComponent;
        Resize: ResizeComponent;
        Run: RunComponent;
        Sizes: SizesComponent;
        Swipe: SwipeComponent;
        Transition: TransitionComponent;
        Translate: TranslateComponent;
    }

    type TransformerFunction = (
        glide: Properties,
        components: BuiltinComponentMap & Record<string, Component | undefined>,
        events: EventsBus,
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
    type ComponentFunction<T extends Component = Component> = (
        glide: Properties,
        components: BuiltinComponentMap & Record<string, Component | undefined>,
        events: EventsBus,
    ) => T;

    interface BuildComponent extends Component {
        mount(): void;

        /**
         * Applies type class based on the instance settings.
         */
        typeClass(): void;

        /**
         * Applies an active class to slides based on the current index.
         */
        activeClass(): void;

        /**
         * Removes all classes applied by component.
         */
        removeClasses(): void;
    }

    interface ClonesComponent extends Component {
        mount(): void;

        /**
         * Holds collection HTML elements of the cloned slides.
         */
        items: Element[];

        /**
         * Holds additional dimentions value caused by clone HTML elements.
         */
        readonly grow: number;

        /**
         * Creates a collection of cloned slides using indexes pattern.
         */
        collect(items: Element[]): Element[];

        /**
         * Appends collection of clones into DOM using indexes pattern.
         */
        append(): void;

        /**
         * Removes HTML elements of clones from the DOM.
         */
        remove(): void;
    }

    interface GapsComponent extends Component {
        mount(): void;

        /**
         * Holds value of gaps.
         */
        readonly value: number;

        /**
         * Holds additional dimensions value caused by gaps. Used to increase the width of the slides wrapper.
         */
        readonly grow: number;

        /**
         * Holds reduction value caused by gaps. Used to subtract the width of the slides.
         */
        readonly reductor: number;

        /**
         * Applies gaps between slides. First and last slides do not receive it's edge margins.
         */
        apply(slides: HTMLCollection): void;

        /**
         * Removes gaps from the slides.
         */
        remove(slides: HTMLCollection): void;
    }

    interface HtmlComponent extends Component {
        /**
         * Mounts and initializes a component. Collects all the necessary HTML elements.
         */
        mount(): void;

        /**
         * Holds a reference to the element passed at initialization.
         */
        get root(): HTMLElement;
        set root(element: string | HTMLElement);

        /**
         * Holds reference to the `[data-glide-el="track"]` element.
         */
        track: HTMLElement;

        /**
         * Holds reference to the `[data-glide-el="track"]` element.
         */
        readonly wrapper: HTMLElement;
    }

    interface MoveComponent extends Component {
        mount(): void;

        /**
         * Holds an actual movement value corrected by an offset.
         */
        readonly value: number;

        /**
         * Holds a raw movement value calculated based on the current index.
         */
        readonly translate: number;

        /**
         * Holds an offset value used to modify current translate value.
         */
        offset: number;

        /**
         * Calculates a movement value based on the passed offset and currently active index.
         */
        make(offset?: number): void;
    }

    interface PeekComponent extends Component {
        /**
         * Holds value of a peeking.
         */
        mount(): void;

        /**
         * Holds value of a peeking.
         */
        value: number | { before: number; after: number };

        /**
         * Mounts and initializes a component. Setups an initial peeking value.
         */
        readonly reductor: number;
    }

    interface ResizeComponent extends Component {
        /**
         * Mounts and initializes a component. Creates event listeners at window object.
         */
        mount(): void;

        /**
         * Adds throttled `resize` event.
         */
        bind(): void;

        /**
         * Removes previously added `resize` event.
         */
        unbind(): void;
    }

    interface RunComponent extends Component {
        mount(): void;

        /**
         * Holds value of the current movement.
         *
         * For example, =1 schema will be represented as:
         * ```
         * {
         *   direction: '=',
         *   steps: '1'
         * }
         * ```
         * @todo setter type is `string`. ts(2380)
         */
        readonly move: RunCurrentMovementContext;

        /**
         * Holds a zero-based value of the running distance.
         */
        readonly length: number;

        /**
         * Holds an indication flag about making rewinding movement.
         */
        readonly offset: number;

        /**
         * Makes instance run based on the passed moving schema.
         */
        make(move: string): void;

        /**
         * Calculates current index based on the defined move.
         */
        calculate(): void;

        /**
         * Checks if we currently are on the first slide.
         */
        isStart(): boolean;

        /**
         * Checks if we currently are on the last slide.
         */
        isEnd(): boolean;

        /**
         * Checks if we are making an offset run, from last to first or first to last slide.
         */
        isOffset(direction?: '|>' | '|<' | direction): boolean;
    }

    interface SizesComponent extends Component {
        /**
         * Holds a number of slides.
         */
        readonly length: number;

        /**
         * Holds a dimension of the instance viewport.
         */
        readonly width: number;

        /**
         * Holds a dimension of the slides wrapper.
         */
        readonly wrapperWidth: number;

        /**
         * Holds a dimension of the single slide reduced by settings.
         */
        readonly slideWidth: number;

        /**
         * Applies dimensions to the slide elements.
         */
        setupSlides(): void;

        /**
         * Applies dimensions to the slides wrapper element.
         */
        setupWrapper(): void;

        /**
         * Clears all applied dimensions from instance elements.
         */
        remove(): void;
    }

    interface TransitionComponent extends Component {
        /**
         * Holds duration of the transition based on currently running animation type.
         */
        readonly duration: number;

        /**
         * Returns a value of CSS transition property based on duration.
         */
        compose(property: string): string;

        /**
         * Applies transition declaration to wrapper HTML element.
         */
        set(property?: string): void;

        /**
         * Clears transition declarations from wrapper HTML element.
         */
        remove(): void;

        /**
         * Call specified callback after a transition.
         */
        after(callback: () => void): void;

        /**
         * Disables transitions.
         *
         * The instance will make immediate jumps to indexes instead of smooth movements
         */
        disable(): void;

        /**
         * Enables previously disabled transitions.
         */
        enable(): void;
    }

    interface TranslateComponent extends Component {
        set(value: number): void;

        remove(): void;
    }

    interface AnchorsComponent extends Component {
        mount(): void;

        /**
         * Holds collection of `<a>` elements located inside slides.
         */
        readonly items: HTMLCollectionOf<HTMLAnchorElement>;

        /**
         * Detaches href attribute from anchors and prevents redirections after click or swipe.
         */
        detach(): this;

        /**
         * Restores href attribute on anchors and allows for redirections on click.
         */
        attach(): this;
    }

    interface AutoplayComponent extends Component {
        mount(): void;

        /**
         * Holds collection of `<a>` elements located inside slides.
         */
        readonly time: number;

        /**
         * Starts auto-changing of slides on the instance.
         */
        start(): void;

        /**
         * Stops auto-changing of slides on the instance.
         */
        stop(): void;

        /**
         * Registers listener for stopping auto-changing on mouseover.
         */
        bind(): void;

        /**
         * Removes previously registered mouseover listener.
         */
        unbind(): void;
    }

    interface BreakpointsComponent extends Component {
        /**
         * Matches currently active `@media` breakpoint from the passed collection and returns configured settings object for that size.
         */
        match(breakpoints: Record<number, Options>): Options;
    }

    interface ControlsComponent extends Component {
        mount(): void;

        /**
         * Holds collection of `<a>` elements located inside slides.
         */
        readonly items: HTMLCollectionOf<HTMLAnchorElement>;

        /**
         * Sets an active class to navigation controls.
         */
        setActive(): void;

        /**
         * Removes active class from navigation controls.
         */
        removeActive(): void;

        /**
         * Toggles an active class on a passed collection of HTML elements based on the current index.
         */
        addClass(controls: HTMLElement): void;

        /**
         * Removes an active class from passed collection of HTML elements.
         */
        removeClass(controls: HTMLElement): void;

        /**
         * Adds click listeners to controls.
         */
        addBindings(): void;

        /**
         * Removes click listeners from controls.
         */
        removeBindings(): void;

        /**
         * Toggles an active class on a passed collection of HTML elements based on the current index.
         */
        bind(elements: HTMLCollection): void;

        /**
         * Removes an active class from passed collection of HTML elements.
         */
        unbind(elements: HTMLCollection): void;

        /**
         * Control's click event handler which makes movement based on its direction pattern.
         */
        click(event: MouseEvent): void;
    }

    interface ImagesComponent extends Component {
        /**
         * Mounts and initializes a component. Creates event listeners for `<img>` elements.
         */
        mount(): void;

        /**
         * Binds `dragstart` event to prevent dragging on images.
         */
        bind(): void;

        /**
         * Removes previously added `dragstart` event.
         */
        unbind(): void;

        /**
         * Event handler. Prevents dragging on images.
         */
        dragstart(event: MouseEvent): void;
    }

    interface KeyboardComponent extends Component {
        /**
         * Mounts and initializes a component. Creates event listeners for keyboard key presses.
         */
        mount(): void;

        /**
         * Binds `keyup` event listener for key presses.
         */
        bind(): void;

        /**
         * Removes previously added `keyup` event.
         */
        unbind(): void;

        /**
         * `keyup` event handler. Makes Makes movement base on arrow key direction.
         */
        press(event: KeyboardEvent): void;
    }

    interface SwipeComponent extends Component {
        mount(): void;

        /**
         * Handler for `swipestart` event. Calculates entry points of the user's tap.
         */
        start(event: MouseEvent | TouchEvent): void;

        /**
         * Handler of swipemove event. Calculates user's tap angle and distance.
         */
        move(event: MouseEvent | TouchEvent): void;

        /**
         *  Handler of swipeend event. Finishes user's tap and decides about instance movement.
         */
        end(event: MouseEvent | TouchEvent): void;

        /**
         * Normalizes event's touches points according to different types.
         */
        touches(event: TouchEvent): Touch | undefined;
        touches(event: MouseEvent): MouseEvent;

        /**
         * Gets value of minimum swipe distance setting based on event type.
         */
        threshold(event: MouseEvent | TouchEvent): number | false;

        /**
         * Adds listener for swipe starting event.
         */
        bindSwipeStart(): void;

        /**
         * Removes previously added listener for swipe starting event.
         */
        unbindSwipeStart(): void;

        /**
         * Adds a listener for swipe moving event.
         */
        bindSwipeMove(): void;

        /**
         * Removes previously added listener for swipe moving event.
         */
        unbindSwipeMove(): void;

        /**
         * Adds listener for swipe end event.
         */
        bindSwipeEnd(): void;

        /**
         * Removes previously added listener for swipe end event.
         */
        unbindSwipeEnd(): void;

        /**
         * Enables instance swiping events.
         */
        enable(): this;

        /**
         * Disables instance swiping events.
         */
        disable(): this;
    }

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
        classes?:
            | {
                  direction?:
                      | {
                            /**
                             * @default 'glide--ltr'
                             */
                            ltr?: string | undefined;
                            /**
                             * @default 'glide--rtl'
                             */
                            rtl?: string | undefined;
                        }
                      | undefined;
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
              }
            | undefined;

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
        get settings(): Required<Options>;
        set setting(value: Options);

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
        on(event: RunEvents, definition: (context: RunCurrentMovementContext) => void): Static;
        on(event: 'move' | 'move.after' | 'translate.jump', definition: (context: MoveContext) => void): Static;
        on(event: Events | Events[], definition: () => void): Static;
        on(event: string | string[], definition: (context: Record<string, unknown>) => void): Static;
    }
}

declare const Glide: new (selector: string, options?: Glide.Options) => Glide.Static;

export = Glide;
export as namespace Glide;
