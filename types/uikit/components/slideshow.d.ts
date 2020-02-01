import { UIkitElement } from "../utils";

type UIkitSlideshowOptions = {
    animation?: string;
    autoplay?: boolean;
    'autoplay-interval'?: number;
    draggable?: boolean;
    easing?: string;
    finite?: boolean;
    'pause-on-hover'?: boolean;
    index?: number;
    velocity?: number;
    ratio?: string | number;
    'min-height'?: boolean | number;
    'max-height'?: boolean | number;
}

interface UIkitSlidershowElement {
    show(index: number): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}

export type Slidershow = (element: UIkitElement, options?: UIkitSlideshowOptions) => UIkitSlidershowElement;