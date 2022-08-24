/* this module is ESModule only. */

import type {
    Options,
    Events,
    Component,
    RunCurrentMovementContext,
    MoveContext,
    RunEvents,
    EventsBus,
    Properties,
    BuiltinComponentMap,
    AnchorsComponent,
    AutoplayComponent,
    BreakpointsComponent,
    ControlsComponent,
    ImagesComponent,
    KeyboardComponent,
    SwipeComponent,
} from '../index';

export type {
    Type,
    Pattern,
    Properties,
    direction,
    Options,
    Events,
    Component,
    Removable,
    RunCurrentMovementContext,
    MoveContext,
    RunEvents,
    EventsBus,
    BuiltinComponentMap,
    AnchorsComponent,
    AutoplayComponent,
    BreakpointsComponent,
    BuildComponent,
    ClonesComponent,
    ControlsComponent,
    GapsComponent,
    HtmlComponent,
    ImagesComponent,
    KeyboardComponent,
    MoveComponent,
    PeekComponent,
    ResizeComponent,
    RunComponent,
    SizesComponent,
    SwipeComponent,
    TransitionComponent,
    TranslateComponent,
} from '../index';

type OptionalComponentNames = 'Anchors' | 'Autoplay' | 'Breakpoints' | 'Controls' | 'Images' | 'Keyboard' | 'Swipe';
type OptionalComponentMap = Pick<BuiltinComponentMap, OptionalComponentNames>;
type ModularComponentMap = Omit<BuiltinComponentMap, OptionalComponentNames> & Partial<OptionalComponentMap>;

export type TransformerFunction = (
    glide: Properties,
    components: ModularComponentMap & Record<string, Component | undefined>,
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
export type ComponentFunction<T extends Component = Component> = (
    glide: Properties,
    components: ModularComponentMap & Record<string, Component | undefined>,
    events: EventsBus,
) => T;

/**
 * Handles clicking and dragging events of the internal `<a>` HTML elements,
 * so they won't interfere while interacting with an instance.
 *
 * This module can be imported using `Anchors` keyword.
 * ```
 * import Glide, { Anchors } from '@glidejs/glide/dist/glide.modular.esm.js';
 *
 * new Glide('.glide').mount({ Anchors });
 * ```
 */
export const Anchors: ComponentFunction<AnchorsComponent>;

/**
 * Manages auto-changing of slides after a defined time interval.
 *
 * This module can be imported using `Autoplay` keyword.
 * ```
 * import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm.js';
 *
 * new Glide('.glide').mount({ Autoplay });
 * ```
 */
export const Autoplay: ComponentFunction<AutoplayComponent>;

/**
 * Reconfigures instance and its options based on currently matched `@media` breakpoint.
 *
 * This module can be imported using `Breakpoints` keyword.
 * ```
 * import Glide, { Breakpoints } from '@glidejs/glide/dist/glide.modular.esm.js';
 *
 * new Glide('.glide').mount({ Breakpoints });
 * ```
 */
export const Breakpoints: ComponentFunction<BreakpointsComponent>;

/**
 * Manages creating a buttons that allows user to control movement of the instance.
 *
 * This module can be imported using `Controls` keyword.
 * ```
 * import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm.js';
 *
 * new Glide('.glide').mount({ Controls });
 * ```
 */
export const Controls: ComponentFunction<ControlsComponent>;

/**
 * Handles dragging events of the internal `<img>` HTML elements,
 * so they won't interfere while interacting with an instance.
 *
 * This module can be imported using `Images` keyword.
 * ```
 * import Glide, { Images } from '@glidejs/glide/dist/glide.modular.esm.js';
 *
 * new Glide('.glide').mount({ Images });
 * ```
 */
export const Images: ComponentFunction<ImagesComponent>;

/**
 * Allows for controlling movement of the instance with keyboard's arrow keys.
 *
 * This module can be imported using `Keyboard` keyword.
 * ```
 * import Glide, { Keyboard } from '@glidejs/glide/dist/glide.modular.esm.js';
 *
 * new Glide('.glide').mount({ Keyboard });
 * ```
 */
export const Keyboard: ComponentFunction<KeyboardComponent>;

/**
 * Allows for controlling movement of the instance using finger swipe gestures.
 *
 * This module can be imported using `Swipe` keyword.
 * ```
 * import Glide, { Swipe } from '@glidejs/glide/dist/glide.modular.esm.js';
 *
 * new Glide('.glide').mount({ Swipe });
 * ```
 */
export const Swipe: ComponentFunction<SwipeComponent>;

interface OptionalComponentOption {
    Anchors?: ComponentFunction<AnchorsComponent>;
    Autoplay?: ComponentFunction<AutoplayComponent>;
    Breakpoints?: ComponentFunction<BreakpointsComponent>;
    Controls?: ComponentFunction<ControlsComponent>;
    Images?: ComponentFunction<ImagesComponent>;
    Keyboard?: ComponentFunction<KeyboardComponent>;
    Swipe?: ComponentFunction<SwipeComponent>;
}

export default class Glide {
    constructor(selector: string, options?: Options);

    /**
     * A Glide instance is in "uninitialized" mode until a mount() method
     * call. It starts an entire building process.
     */
    mount(components?: OptionalComponentOption & Record<string, ComponentFunction>): Properties;

    /**
     * Registering Transformers
     */
    mutate(transformers: TransformerFunction[]): this;

    /**
     * Register callback which will be called at the specified events.
     */
    on(event: RunEvents, definition: (context: RunCurrentMovementContext) => void): this;
    on(event: 'move' | 'move.after' | 'translate.jump', definition: (context: MoveContext) => void): this;
    on(event: Events | Events[], definition: () => void): this;
    on(event: string | string[], definition: (context: Record<string, unknown>) => void): this;
}
