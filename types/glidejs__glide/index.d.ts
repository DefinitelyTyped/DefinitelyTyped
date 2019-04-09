// Type definitions for @glidejs/glide 3.2
// Project: https://glidejs.com/
// Definitions by: Ota Mares <https://github.com/omares>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

declare module '@glidejs/glide' {
    import Glide from '@glidejs/glide/dist/glide.modular.esm';
    export default Glide;
}

declare module '@glidejs/glide/dist/glide.modular.esm' {
    type GlideType = 'slider' | 'carousel';
    type GlideEvent =
        | 'mount.before'
        | 'mount.after'
        | 'update'
        | 'play'
        | 'pause'
        | 'build.before'
        | 'build.after'
        | 'run.before'
        | 'run'
        | 'run.after'
        | 'run.offset'
        | 'run.start'
        | 'run.end'
        | 'move'
        | 'move.after'
        | 'resize'
        | 'swipe.start'
        | 'swipe.move'
        | 'swipe.end'
        | 'translate.jump';

    interface GlideOptions {
        type ?: GlideType;
        startAt ?: number;
        perView ?: number;
        focusAt ?: number | string;
        gap ?: number;
        autoplay ?: boolean | number;
        hoverpause ?: boolean;
        keyboard ?: boolean;
        bound ?: boolean;
        swipeThreshold ?: number;
        dragThreshold ?: number;
        perTouch ?: boolean;
        touchRatio ?: number;
        touchAngle ?: number;
        animationDuration ?: number;
        rewind ?: boolean;
        rewindDuration ?: number;
        animationTimingFunc ?: string;
        throttle ?: number;
        direction ?: string;
        peek ?: number;
        breakpoints ?: object;
        classes ?: CssClass;
    }

    interface CssClass {
        [name: string]: string | CssClass;
    }

    interface EventsBus {
        on(event: GlideEvent | GlideEvent[], handler: EventHandler): { remove(): void; };
        emit(event: GlideEvent | GlideEvent[], context: any): void;
    }

    type EventHandler = (context: any) => void;

    export default class Glide {
        settings: GlideOptions;
        index: number;
        disabled: boolean;
        readonly type: GlideType;

        constructor(selector: string, options?: GlideOptions);
        mount(extensions: { [name: string]: Component<ComponentInterface> }): Glide;
        mutate(transformers: Array<Mutator<MutatorInterface>>): Glide;
        update(settings: GlideOptions): Glide;
        destroy(): Glide;
        move(distance: string): Glide;
        on(event: GlideEvent | GlideEvent[], handler: EventHandler): Glide;
        go(pattern: string | boolean): Glide;
        pause(): Glide;
        play(interval: number | boolean): Glide;
        disable(): Glide;
        enable(): Glide;
        isType(name: GlideType): boolean;
    }

    /**
     * Verbose implementation of a component for complex implementations:
     *
     * export class MyComponent implements ComponentInterface {
     *     public constructor (private glide: Glide, private components: ComponentCollectionInterface, private events: EventsBus) {}
     *
     *     public mount() {
     *         this.glide.go('=1');
     *     }
     * };
     *
     * const comp: Component<MyComponent> = (glide, components, events) => {
     *     return new MyComponent(glide, components, events);
     * };
     *
     * Condense version:
     *
     * const comp: Component<ComponentInterface> = (glide, components, events) => {
     *
     *     return {
     *         mount() {
     *             glide.go('=1');
     *         }
     *     }
     * };
     */
    type Component<T extends ComponentInterface> = (glide: Glide, components: ComponentCollectionInterface, events: EventsBus) => T;

    /**
     * Example implementation of a mutator type:
     *
     * const iLikeBigGaps: Mutator<MutatorInterface> = (glide, components, events) => {
     *     const iCannotLie = components.Gaps.grow * 4;
     *     return {
     *         modify(translate: number) { return translate + iCannotLie }
     *     }
     * };
     */
    type Mutator<T extends MutatorInterface> = (glide: Glide, components: ComponentCollectionInterface, events: EventsBus) => T;

    interface ComponentInterface {
        // The mount method is optional, meh
        mount?(): void;
    }

    interface MutatorInterface {
        modify(translate: number): number;
    }

    interface ComponentCollectionInterface {
        Build: BuildInterface;
        Clones: ClonesInterface;
        Gaps: GapsInterface;
        Html: HtmlInterface;
        Move: MoveInterface;
        Peek: PeekInterface;
        Resize: ResizeInterface;
        Run: RunInterface;
        Sizes: SizesInterface;
        Transition: TransitionInterface;
        Translate: TranslateInterface;

        Anchors ?: AnchorsInterface;
        Autoplay ?: AutoplayInterface;
        Breakpoints ?: BreakpointsInterface;
        Controls ?: ControlsInterface;
        Images ?: ImagesInterface;
        Keyboard ?: KeyboardInterface;
        Swipe ?: SwipeInterface;

        [key: string]: ComponentInterface | undefined;
    }

    interface AnchorsInterface extends ComponentInterface {
        readonly items: HTMLElement[];

        bind(): void;
        unbind(): void;
        detach(): AnchorsInterface;
        attach(): AnchorsInterface;
    }

    interface AutoplayInterface extends ComponentInterface {
        readonly time: number;

        bind(): void;
        unbind(): void;
        start(): void;
        stop(): void;
    }

    interface BreakpointsInterface extends ComponentInterface {
        match(breakpoints: object): object;
    }

    interface BuildInterface extends ComponentInterface {
        typeClass(): void;
        activeClass(): void;
        removeClasses(): void;
    }

    interface ClonesInterface extends ComponentInterface {
        readonly grow: number;

        collect(items: Node[]): Node[];
        append(): void;
        remove(): void;
    }

    interface ControlsInterface extends ComponentInterface {
        readonly items: HTMLElement[];

        setActive(): void;
        removeActive(): void;
        addClass(controls: HTMLElement): void;
        removeClass(controls: HTMLElement): void;
        addBindings(): void;
        removeBindings(): void;
        bind(elements: HTMLCollection): void;
        unbind(elements: HTMLCollection): void;
    }

    interface DirectionInterface extends ComponentInterface {
        value: number;

        resolve(pattern: string): string;
        is(direction: string): boolean;
        addClass(): void;
        removeClass(): void;
    }

    interface GapsInterface extends ComponentInterface {
        readonly value: number;
        readonly grow: number;
        readonly reductor: number;

        apply(slides: HTMLCollection): void;
        remove(slides: HTMLCollection): void;
        is(direction: string): boolean;
        addClass(): void;
        removeClass(): void;
    }

    interface HtmlInterface extends ComponentInterface {
        root: Element;
        track: Element;
        readonly wrapper: Element;
    }

    interface ImagesInterface extends ComponentInterface {
        bind(): void;
        unbind(): void;
        dragstart(event: Event): void;
    }

    interface KeyboardInterface extends ComponentInterface {
        bind(): void;
        unbind(): void;
        press(event: Event): void;
    }

    interface MoveInterface extends ComponentInterface {
        offset: number;
        readonly translate: number;
        readonly value: number;

        make(offset: number): void;
    }

    interface PeekInterface extends ComponentInterface {
        value: number | { before: number, after: number };

        readonly reductor: number;
    }

    interface ResizeInterface extends ComponentInterface {
        bind(): void;
        unbind(): void;
    }

    interface RunInterface extends ComponentInterface {
        move: string;
        readonly length: number;
        readonly offset: boolean;

        make(move: string): void;
        calculate(): void;
        isStart(): boolean;
        isEnd(): boolean;
        isOffset(direction: string): boolean;
    }

    interface SizesInterface extends ComponentInterface {
        readonly length: number;
        readonly width: boolean;
        readonly wrapperSize: boolean;
        readonly slideWidth: boolean;

        setupSlides(): void;
        setupWrapper(): void;
        remove(): void;
    }

    interface SwipeInterface extends ComponentInterface {
        start(event: TouchEvent): void;
        move(event: TouchEvent): void;
        end(event: TouchEvent): void;
        touches(event: TouchEvent): TouchEvent;
        threshold(event: TouchEvent): number;
        bindSwipeStart(): void;
        unbindSwipeStart(): void;
        unbindSwipeStart(): void;
        bindSwipeMove(): void;
        unbindSwipeMove(): void;
        bindSwipeEnd(): void;
        unbindSwipeEnd(): void;
        enable(): SwipeInterface;
        disable(): SwipeInterface;
    }

    interface TransitionInterface extends ComponentInterface {
        readonly duration: number;

        compose(property: string): string;
        set(property: string): void;
        remove(): void;
        enable(): void;
        disable(): void;
    }

    interface TranslateInterface extends ComponentInterface {
        set(value: number): void;
        remove(): void;
        getStartIndex(): number;
        getTravelDistance(): number;
    }

    /**
     * Public components
     */
    const Anchors: Component<AnchorsInterface>;
    const Autoplay: Component<AutoplayInterface>;
    const Breakpoints: Component<BreakpointsInterface>;
    const Controls: Component<ControlsInterface>;
    const Images: Component<ImagesInterface>;
    const Keyboard: Component<KeyboardInterface>;
    const Swipe: Component<SwipeInterface>;
}
