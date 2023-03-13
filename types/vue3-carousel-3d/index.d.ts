// Type definitions for vue3-carousel-3d 1.0
// Project: https://github.com/Ray93/vue3-carousel-3d
// Definitions by: tevem1207 <https://github.com/tevem1207>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

import { Component } from 'vue';

export interface Carousel3dProps {
    autoplay: boolean;
    autoplayTimeout: number;
    autoplayHoverPause: boolean;
    count: number;
    perspective: number;
    display: number;
    loop: boolean;
    animationSpeed: number;
    dir: 'rtl' | 'ltr';
    width: number;
    height: number;
    border: number;
    space: number;
    startIndex: number;
    clickable: boolean;
    disable3d: boolean;
    minSwipeDistance: number;
    inverseScaling: number;
    controlsVisible: boolean;
    controlsPrevHtml: string;
    controlsNextHtml: string;
    controlsWidth: number;
    controlsHeight: number;
    onLastSlide: () => void;
    onSlideChange: () => void;
    bias: string;
    onMainSlideClick: (param: { index: number }) => void;
}

export interface SlideProps {
    index: number;
}

export const Slide: Component<SlideProps>;
export const Carousel3d: Component<Carousel3dProps>;
