import { UIkitElement } from "../utils";

type UIkitSliderOptions = {
    autoplay?: boolean;
    'autoplay-interval'?: number;
    center?: boolean;
    draggable?: boolean;
    easing?: string;
    finite?: boolean;
    index?: number;
    'pause-on-hover'?: boolean;
    sets?: boolean;
    velocity?: number;
}

interface UIkitSliderElement {
    show(index: number): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}

export type Slider = (element: UIkitElement, options?: UIkitSliderOptions) => UIkitSliderElement;