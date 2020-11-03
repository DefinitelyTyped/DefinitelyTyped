import Swiper, { DOM7Element } from '../index';

// Reexport everything from `swiper` except the default export of the
// `Swiper` class, which is instead provided as a named export by
// `swiper.esm`.
export * from '../index';
export { Swiper };

/*
 * Swiper exports the following as ES5 module (in swiper.esm.js).
 */

/**
 * Virtual Slides module.
 */
export class Virtual {
    /**
     * Object with cached slides HTML elements
     */
    cache: object;

    /**
     * Index of first rendered slide
     */
    from: number;

    /**
     * Index of last rendered slide
     */
    to: number;

    /**
     * Array with slide items passed by virtual.slides parameter
     */
    slides: any[];

    /*
     * Methods
     */

    /**
     * Add new slides to the end. slides could be HTMLElement or HTML string with new slide or array
     * with such slides, for example:
     *
     * @example
     * mySwiper.appendSlide('<div class="swiper-slide">Slide 10"</div>')
     * mySwiper.appendSlide([
     *   '<div class="swiper-slide">Slide 10"</div>',
     *   '<div class="swiper-slide">Slide 11"</div>'
     * ]);
     */
    appendSlide(slide: HTMLElement | string): void;

    /**
     * Add new slides to the beginning. slides could be HTMLElement or HTML string with new slide or
     * array with such slides, for example:
     *
     * @example
     * mySwiper.prependSlide('<div class="swiper-slide">Slide 0"</div>')
     * mySwiper.prependSlide([
     * '<div class="swiper-slide">Slide 1"</div>',
     * '<div class="swiper-slide">Slide 2"</div>'
     * ]);
     */
    prependSlide(slide: HTMLElement | string): void;

    /**
     * Update virutal slides state
     */
    update(): void;
}

/**
 * Keyboard Control module.
 */
export class Keyboard {
    /**
     * Whether the keyboard control is enabled
     */
    enabled: boolean;

    // Methods
    /**
     * Enable keyboard control
     */
    enable(): void;

    /**
     * Disable keyboard control
     */
    disable(): void;
}

/**
 * Mousewheel Control module.
 */
export class Mousewheel {
    /**
     * Whether the mousewheel control is enabled
     */
    enabled: boolean;

    // Methods
    /**
     * Enable mousewheel control
     */
    enable(): void;

    /**
     * Disable mousewheel control
     */
    disable(): void;
}

/**
 * Navigation module.
 */
export class Navigation {
    /**
     * HTMLElement of "next" navigation button
     */
    nextEl: HTMLElement;

    /**
     * HTMLElement of "previous" navigation button
     */
    prevEl: HTMLElement;

    /**
     * Update navigation buttons state (enabled/disabled)
     */
    update(): void;
}

/**
 * Pagination module.
 */
export class Pagination {
    /**
     * HTMLElement of pagination container element
     */
    el: HTMLElement;

    /**
     * Dom7 array-like collection of pagination bullets
     * HTML elements. To get specific slide HTMLElement
     * use `mySwiper.pagination.bullets[1]`.
     */
    bullets: DOM7Element[];

    /**
     * Render pagination layout
     */
    render(): void;

    /**
     * Update pagination state (enabled/disabled/active)
     */
    update(): void;
}

/**
 * Scrollbar module.
 */
export class Scrollbar {
    // Properties
    /**
     * HTMLElement of Scrollbar container element
     */
    el: HTMLElement;

    /**
     * HTMLElement of Scrollbar draggable handler element
     */
    dragEl: HTMLElement;

    // Methods
    /**
     * Updates scrollbar track and handler sizes
     */
    updateSize(): void;
}

/**
 * Parallax module.
 */
export class Parallax { }

/**
 * Zoom module.
 */
export class Zoom {
    /**
     * Whether the zoom module is enabled
     */
    enabled: boolean;

    /**
     * Current image scale ratio
     */
    scale: number;

    /**
     * Enable zoom module
     */
    enable(): void;

    /**
     * Disable zoom module
     */
    disable(): void;

    /**
     * Zoom in image of the currently active slide
     */
    in(): void;

    /**
     * Zoom out image of the currently active slide
     */
    out(): void;

    /**
     * Toggle image zoom of the currently active slide
     */
    toggle(): void;
}

/**
 * Lazy module.
 */
export class Lazy {
    /**
     * Load/update lazy images based on current slider state (position)
     */
    load(): void;

    /**
     * Force to load lazy images in slide by specified index
     * @param number index number of slide to load lazy images in
     */
    loadInSlide(index: number): void;
}

/**
 * Controller module.
 */
export class Controller {
    /**
     * Pass here another Swiper instance or array with Swiper instances that should be controlled
     * by this Swiper
     */
    control?: Swiper | Swiper[];
}

/**
 * Accessibility module (a11y$)
 */
export class A11y { }

/**
 * History Navigation module.
 */
export class History { }

/**
 * Hash Navigation module.
 */
export class HashNavigation {
}

/**
 * Autoplay module.
 */
export class Autoplay {
    // Properties
    /**
     * Whether autoplay enabled and running
     */
    running: boolean;

    // Methods
    /**
     * Start autoplay
     */
    start(): boolean;

    /**
     * Stop autoplay
     */
    stop(): boolean;
}

/**
 * Fade Effect module.
 */
export class EffectFade { }

/**
 * Cube Effect module.
 */
export class EffectCube { }

/**
 * Flip Effect module.
 */
export class EffectFlip { }

/**
 * Coverflow Effect module.
 */
export class EffectCoverflow { }
