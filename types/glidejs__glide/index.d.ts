// Type definitions for @glidejs/glide 3.6
// Project: https://glidejs.com/
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import TransformerFunction from './mutator/transformers';
import ComponentFunction from './components';
import EventsBus from './core/event/events-bus';

declare namespace Glide {
    export { TransformerFunction, ComponentFunction, EventsBus, Options };
}

interface Options {
    /**
     * Type of the movement.
     */
    type: 'slider' | 'carousel';

    /**
     * Start at specific slide number defined with zero-based index.
     */
    startAt: number;

    /**
     * A number of slides visible on the single viewport.
     */
    perView: number;

    /**
     * Focus currently active slide at a specified position in the track.
     */
    focusAt: string | number;

    /**
     * A size of the gap added between slides.
     */
    gap: number;

    /**
     * Change slides after a specified interval. Use `false` for turning off autoplay.
     */
    autoplay: number | false;

    /**
     * Stop autoplay on mouseover event.
     */
    hoverpause: boolean;

    /**
     * Allow for changing slides with left and right keyboard arrows.
     */
    keyboard: boolean;

    /**
     * Stop running `perView` number of slides from the end. Use this
     * option if you don't want to have an empty space after
     * a slider. Works only with `slider` type and a
     * non-centered `focusAt` setting.
     */
    bound: boolean;

    /**
     * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
     */
    swipeThreshold: number | boolean;

    /**
     * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
     */
    dragThreshold: number | boolean;

    /**
     * A number of slides moved on single swipe.
     */
    perSwipe: '' | '|';

    /**
     * Moving distance ratio of the slides on a swiping and dragging.
     */
    touchRatio: number;

    /**
     * Angle required to activate slides moving on swiping or dragging.
     */
    touchAngle: number;

    /**
     * Duration of the animation in milliseconds.
     */
    animationDuration: number;

    /**
     * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
     */
    rewind: boolean;

    /**
     * Duration of the rewinding animation of the `slider` type in milliseconds.
     */
    rewindDuration: number;

    /**
     * Easing function for the animation.
     */
    animationTimingFunc: string;

    /**
     * Wait for the animation to finish until the next user input can be processed
     */
    waitForTransition: boolean;

    /**
     * Throttle costly events at most once per every wait milliseconds.
     */
    throttle: number;

    /**
     * Moving direction mode.
     */
    direction: 'ltr' | 'rtl';

    /**
     * The distance value of the next and previous viewports which
     * have to peek in the current view. Accepts number and
     * pixels as a string. Left and right peeking can be
     * set up separately with a directions object.
     */
    peek: number | string | Record<'before' | 'after', number>;

    /**
     * Defines how many clones of current viewport will be generated.
     */
    cloningRatio: number;

    /**
     * Collection of options applied at specified media breakpoints.
     */
    breakpoints: Record<string, Partial<Options>>;

    /**
     * Collection of internally used HTML classes.
     */
    classes: {
        swipeable: string;
        dragging: string;
        direction: Record<Options['direction'], string>;
        type: Record<Options['type'], string>;
        slide: Record<'clone' | 'active', string>;
        arrow: Record<'disabled', string>;
        nav: Record<'active', string>;
    };
}

type Handler = () => void;

declare class Glide {
    readonly selector: string;

    /**
     * Construct glide.
     */
    constructor(selector: string, options?: Partial<Options>);

    /**
     * Initializes glide.
     */
    mount(extensions?: Record<string, ComponentFunction>): Glide;

    /**
     * Collects an instance `translate` transformers.
     */
    mutate(transformers?: TransformerFunction[]): Glide;

    /**
     * Updates glide with specified settings.
     */
    update(settings?: Partial<Options>): Glide;

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     */
    go(pattern: '>' | '<' | '>>' | '<<' | '|>' | '|<' | string): Glide;

    /**
     * Move track by specified distance.
     */
    move(distance: string): Glide;

    /**
     * Destroy instance and revert all changes done by this._c.
     */
    destroy(): Glide;

    /**
     * Start instance autoplaying.
     */
    play(interval?: boolean | number): Glide;

    /**
     * Stop instance autoplaying.
     */
    pause(): Glide;

    /**
     * Sets glide into a idle status.
     */
    disable(): Glide;

    /**
     * Sets glide into a active status.
     */
    enable(): Glide;

    /**
     * Adds cuutom event listener with handler.
     */
    on(event: string | string[], handler: Handler): Glide;

    /**
     * Checks if glide is a precised type.
     */
    isType(name: string): boolean;

    /**
     * Gets value of the core options.
     */
    readonly settings: Options;

    /**
     * Gets current index of the slider.
     */
    readonly index: number;

    /**
     * Gets type name of the slider.
     */
    readonly type: string;

    /**
     * Gets value of the idle status.
     */
    readonly disabled: boolean;
}

export = Glide;
export as namespace Glide;
