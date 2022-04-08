// Type definitions for react-lazy-load-image-component 1.5
// Project: https://github.com/Aljullu/react-lazy-load-image-component#readme
// Definitions by: Dan Vanderkam <https://github.com/danvk>
//                 Diego Chavez <https://github.com/diegochavez>
//                 Truong Hoang Dung <https://github.com/revskill10>
//                 Kodai Suzuki <https://github.com/kodai3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import {
    CSSProperties,
    ComponentType,
    FunctionComponent,
    ImgHTMLAttributes,
    ReactElement,
    ReactNode,
} from 'react';

export type DelayMethod = 'debounce' | 'throttle';
export type Effect = 'blur' | 'black-and-white' | 'opacity';

export interface ScrollPosition {
    x: number;
    y: number;
}

export interface CommonProps {
    /** Function called after the image has been completely loaded. */
    afterLoad?: () => any;
    /** Function called right before the placeholder is replaced with the image element. */
    beforeLoad?: () => any;
    /* Method from lodash to use to delay the scroll/resize events. */
    delayMethod?: DelayMethod;
    /** Time in ms sent to the delayMethod. */
    delayTime?: number;
    /** Threshold in pixels. So the image starts loading before it appears in the viewport. */
    threshold?: number;
    /** Whether to use browser's IntersectionObserver when available. */
    useIntersectionObserver?: boolean;
    /** Whether the image must be visible from the beginning. */
    visibleByDefault?: boolean;
    /** React element to use as a placeholder. Default is <span>. */
    placeholder?: ReactElement | null;
    /** See trackWindowScroll(). */
    scrollPosition?: ScrollPosition;
}

export interface LazyLoadImageProps extends CommonProps, Omit<ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'onload'>  {
    /** Name of the effect to use. Requires importing CSS, see README.md. */
    effect?: Effect;
    /** Image src to display while the image is not visible or loaded. */
    placeholderSrc?: string;
    /** In some occasions (for example, when using a placeholderSrc) a wrapper span tag is rendered. This prop allows setting a class to that element. */
    wrapperClassName?: string;
    /** Props that should be passed to the wrapper span when it is rendered (for example, when using placeholderSrc or effect) */
    wrapperProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export const LazyLoadImage: FunctionComponent<LazyLoadImageProps>;

export interface LazyComponentProps {
    scrollPosition: ScrollPosition;
}

export function trackWindowScroll<P extends LazyComponentProps>(
    BaseComponent: ComponentType<P>,
): ComponentType<Omit<P, 'scrollPosition'>>;

export interface LazyLoadComponentProps extends CommonProps {
    children: ReactNode;
    style?: CSSProperties;
}

export const LazyLoadComponent: FunctionComponent<LazyLoadComponentProps>;
