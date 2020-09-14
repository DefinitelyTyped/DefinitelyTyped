// Type definitions for @glidejs/glide 3.2.6
// Project: https://glidejs.com/
// Definitions by: Ota Mares <https://github.com/omares>

declare module '@glidejs/glide' {
    import Glide from '@glidejs/glide/dist/glide.modular.esm';
    export default Glide;
}

declare module '@glidejs/glide/dist/glide.modular.esm' {
    export type GlideType = 'slider' | 'carousel';
    export type GlideEvent = 'mount.before' | 'mount.after' | 'update' | 'play' | 'pause' | 'build.before' | 'build.after'
        | 'run.before' | 'run' | 'run.after' | 'run.offset' | 'run.start' | 'run.end'
        | 'move' | 'move.after' | 'resize' | 'swipe.start' | 'swipe.move' | 'swipe.end' | 'translate.jump';

    declare interface GlideOptions {
        type?: GlideType;
        startAt?: number;
        perView?: number;
        focusAt?: number;
        gap?: number;
        autoplay?: boolean;
        hoverpause?: boolean;
        keyboard?: boolean;
        bound?: boolean;
        swipeThreshold?: number;
        dragThreshold?: number;
        perTouch?: boolean;
        touchRatio?: number;
        touchAngle?: number;
        animationDuration?: number;
        rewind?: boolean;
        rewindDuration?: number;
        animationTimingFunc?: string;
        throttle?: number;
        direction?: string;
        peek?: number;
        breakpoints?: object;
        classes?: object;
    }

    export declare class DefaultOptions implements GlideOptions {
        public type?: GlideType = 'slider';
        public startAt?: number = 0;
        public perView?: number = 1;
        public focusAt?: number = 0;
        public gap?: number = 10;
        public autoplay?: boolean = false;
        public hoverpause?: boolean = true;
        public keyboard?: boolean = true;
        public bound?: boolean = false;
        public swipeThreshold?: number = 80;
        public dragThreshold?: number = 120;
        public perTouch?: boolean = false;
        public touchRatio?: number = 0.5;
        public touchAngle?: number = 45;
        public animationDuration?: number = 400;
        public rewind?: boolean = true;
        public rewindDuration?: number = 800;
        public animationTimingFunc?: string = 'cubic-bezier(.165, .840, .440, 1)';
        public throttle?: number = 10;
        public direction?: string = 'ltr';
        public peek?: number = 0;
        public breakpoints?: object = {};
        public classes?: {
            direction?: {
                ltr?: string,
                rtl?: string,
            },
            slider?: string,
            carousel?: string,
            swipeable?: string,
            dragging?: string,
            cloneSlide?: string,
            activeNav?: string,
            activeSlide?: string,
            disabledArrow?: string,
        };
    }

    export declare interface EventsBus {
        on(event: GlideEvent | GlideEvent[], handler: (context?: any) => void): void;
        emit(event: GlideEvent | GlideEvent[], context: object): void;
    }

    export default class Glide {
        public index: number;
        public settings: GlideOptions;
        public type: GlideType;
        public disabled: boolean;

        constructor(selector: string | Element, options?: GlideOptions);
        public mount(extensions?: object): Glide;
        public mutate(transformers: ((glide: Glide, components: object, events: EventsBus) => void)[]): Glide;
        public update(settings: GlideOptions): Glide;
        public destroy(): Glide;
        public on(event: GlideEvent | GlideEvent[], callback: (context?: any) => void): Glide;
        public go(pattern: string | boolean): Glide;
        public pause(): Glide;
        public play(force: number): Glide;
        public disable(): Glide;
        public enable(): Glide;
        public isType(name: GlideType): boolean;
    }

    declare interface ControlsInterface {
        items: HTMLElement[];
        mount(): void;
        setActive(): void;
        removeActive(): void;
        addClass(controls: HTMLElement): void;
        removeClass(controls: HTMLElement): void;
        addBindings(): void;
        removeBindings(): void;
        bind(elements: HTMLCollection): void;
        unbind(elements: HTMLCollection): void;
        click(event: Event): void;
    }

    export const Controls: ControlsInterface;

    declare interface AnchorsInterface {
        items: HTMLElement[];
        mount(): void;
        bind(): void;
        unbind(): void;
        detach(): AnchorsInterface;
        attach(): AnchorsInterface;
    }

    export const Anchors: AnchorsInterface;

    declare interface AutoplayInterface {
        time: number;
        mount(): void;
        bind(): void;
        unbind(): void;
        start(): void;
        stop(): void;
    }

    export const Autoplay: AutoplayInterface;

    declare interface BreakpointsInterface {
        match(breakpoints: object): object;
    }

    export const Breakpoints: BreakpointsInterface;

    declare interface ImagesInterface {
        mount(): void;
        bind(): void;
        unbind(): void;
        dragstart(event: Event): void;
    }

    export const Images: ImagesInterface;

    declare interface KeyboardInterface {
        mount(): void;
        bind(): void;
        unbind(): void;
        press(event: Event): void;
    }

    export const Keyboard: KeyboardInterface;

}