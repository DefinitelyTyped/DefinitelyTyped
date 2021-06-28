// Type definitions for simple-react-lightbox 3.6
// Project: https://github.com/michelecocuccio/simple-react-lightbox#readme
// Definitions by: Guilherme Samuel <https://github.com/guilhermefront>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactNode } from 'react';

/**
 * The object that lightbox uses for the elements array
 */

export interface Element {
    src: string;
    thumbnail?: string;
    caption?: string;
    autoplay?: boolean;
    width?: number;
    height?: string | number;
    showControls?: boolean;
}

/**
 * An array of objects that you want to pass to the lightbox
 * @see{@link https://github.com/michelecocuccio/simple-react-lightbox#using-the-lightbox-with-props}
 * @example
 * ```js
 * const elements = [
 *   {
 *     src: 'https://my/image.jpg',
 *     caption: 'Lorem ipsum dolor sit amet',
 *     width: 1920,
 *     height: 'auto'
 *   },
 *   {
 *     src: 'https://my/second-image.jpg',
 *     thumbnail: 'https://my/second-image-thumbnails.jpg',
 *     caption: 'Commodo commodo dolore',
 *     width: 1024,
 *     height: 'auto'
 *   },
 *   {
 *     src: 'https://vimeo.com/458698330',
 *     thumbnail:
 *       'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash05.jpg',
 *     caption: 'Vimeo video',
 *     autoplay: false,
 *     showControls: true
 *   }
 * ```
 */

export type Elements = Element[];

/**
 * An object with the current slide properties and values.
 */

export interface Slide {
    source: string;
    caption: string;
    id: string;
    height: number;
    thumbnail: string;
    type: string;
    width: number;
}

/**
 * The options available on the `SRLWrapper` component
 * @see {@link https://github.com/michelecocuccio/simple-react-lightbox#options}
 * @example
 * const options = {
 *     settings: {
 *         autoplaySpeed: 3000,
 *         boxShadow: 'none',
 *         disableKeyboardControls: false,
 *         disablePanzoom: false,
 *         disableWheelControls: false,
 *         downloadedFileName: 'SRL-image',
 *         hideControlsAfter: false,
 *         lightboxTransitionSpeed: 0.3,
 *         lightboxTransitionTimingFunction: 'linear',
 *         overlayColor: 'rgba(30, 30, 30, 0.9)',
 *         slideAnimationType: 'fade',
 *         slideSpringValues: [300, 50],
 *         slideTransitionSpeed: 0.6,
 *         slideTransitionTimingFunction: 'linear',
 *         usingPreact: false,
 *     },
 *     buttons: {
 *         backgroundColor: 'rgba(30,30,36,0.8)',
 *         iconColor: 'rgba(255, 255, 255, 0.8)',
 *         iconPadding: '10px',
 *         showAutoplayButton: true,
 *         showCloseButton: true,
 *         showDownloadButton: true,
 *         showFullscreenButton: true,
 *         showNextButton: true,
 *         showPrevButton: true,
 *         showThumbnailsButton: true,
 *         size: '40px',
 *     },
 *     caption: {
 *         captionAlignment: 'start',
 *         captionColor: '#FFFFFF',
 *         captionContainerPadding: '20px 0 30px 0',
 *         captionFontFamily: 'inherit',
 *         captionFontSize: 'inherit',
 *         captionFontStyle: 'inherit',
 *         captionFontWeight: 'inherit',
 *         captionTextTransform: 'inherit',
 *         showCaption: true,
 *     },
 *     thumbnails: {
 *         showThumbnails: true,
 *         thumbnailsAlignment: 'center',
 *         thumbnailsContainerBackgroundColor: 'transparent',
 *         thumbnailsContainerPadding: '0',
 *         thumbnailsGap: '0 1px',
 *         thumbnailsIconColor: '#ffffff',
 *         thumbnailsOpacity: 0.4,
 *         thumbnailsPosition: 'bottom',
 *         thumbnailsSize: ['100px', '80px'],
 *     },
 *     progressBar: {
 *         backgroundColor: '#f2f2f2',
 *         fillColor: '#000000',
 *         height: '3px',
 *         showProgressBar: true,
 *     },
 * };
 */

export interface SRLWrapperOptions {
    settings?: {
        autoplaySpeed?: number;
        boxShadow?: string;
        disableKeyboardControls?: boolean;
        disablePanzoom?: boolean;
        disableWheelControls?: boolean;
        downloadedFileName?: string;
        hideControlsAfter?: number | boolean;
        lightboxTransitionSpeed?: number;
        lightboxTransitionTimingFunction?: string;
        overlayColor?: string;
        slideAnimationType?: string;
        slideSpringValues?: number[];
        slideTransitionSpeed?: number;
        slideTransitionTimingFunction?: string;
        usingPreact?: boolean;
    };
    buttons?: {
        backgroundColor?: string;
        iconColor?: string;
        iconPadding?: string;
        showAutoplayButton?: boolean;
        showCloseButton?: boolean;
        showDownloadButton?: boolean;
        showFullscreenButton?: boolean;
        showNextButton?: boolean;
        showPrevButton?: boolean;
        showThumbnailsButton?: boolean;
        size?: string;
    };
    caption?: {
        captionColor?: string;
        captionAlignment?: string;
        captionFontFamily?: string;
        captionFontSize?: string;
        captionFontStyle?: string;
        captionFontWeight?: number | string;
        captionContainerPadding?: string;
        captionTextTransform?: string;
        showCaption?: boolean;
    };
    thumbnails?: {
        showThumbnails?: boolean;
        thumbnailsAlignment?: string;
        thumbnailsContainerPadding?: string;
        thumbnailsContainerBackgroundColor?: string;
        thumbnailsGap?: string;
        thumbnailsIconColor?: string;
        thumbnailsOpacity?: number;
        thumbnailsPosition?: string;
        thumbnailsSize?: string[];
    };
    progressBar?: {
        backgroundColor?: string;
        fillColor?: string;
        height?: string;
        showProgressBar?: boolean;
    };
}

/**
 * The required main component that creates the context
 * @see {@link https://github.com/michelecocuccio/simple-react-lightbox#first-step-step-1}
 * @example
 * ReactDOM.render(
 *  <React.StrictMode>
 *      <SimpleReactLightbox>
 *          <App />
 *      </SimpleReactLightbox>
 *  </React.StrictMode>,
 *  document.getElementById("root")
 */

export default function SimpleReactLightbox({ children }: { children: ReactNode }): JSX.Element;

/**
 * The hook function containing two methods, openLightbox and closeLightbox.
 * `openLightbox` opens the lightbox and you can pass an argument which is the index of the slide you want to open (starting from 0).
 * If you don't provide any argument to the function, the lightbox will just open it from the first image. The second one is closeLightbox and you can use it to close the lightbox.
 * @use {@link https://github.com/michelecocuccio/simple-react-lightbox#hooks}
 *
 */

export function useLightbox(): { openLightbox(index?: number): void; closeLightbox(): void };

// If the user provide the elements prop, don't let him to also use children, and vice-versa.

export interface WrapperWithElements {
    children?: never;
    elements: Elements;
}

export interface WrapperWithChildren {
    children: ReactNode;
    elements?: never;
}

/**
 * All the props available for the `SRLWrapper` component
 */

export interface CallbackOpen {
    currentSlide: Slide;
    opened: boolean;
}

export interface CallbackSlideChange {
    index: number;
    action: string;
    slides: { previous: Slide; next: Slide; current: Slide };
}

export interface CallbackCountSlides {
    totalSlide: number;
}

/**
 * The callbacks available
 * @see {@link https://github.com/michelecocuccio/simple-react-lightbox#callbacks}
 */

export interface Callbacks {
    onCountSlides?({ totalSlide }: Readonly<CallbackCountSlides>): void;
    onLightboxClosed?({ currentSlide, opened }: Readonly<CallbackOpen>): void;
    onLightboxOpened?({ currentSlide, opened }: Readonly<CallbackOpen>): void;
    onSlideChange?({ index, action, slides: { previous, next, current } }: Readonly<CallbackSlideChange>): void;
}

export type SRLWrapperProps = (WrapperWithElements | WrapperWithChildren) & {
    options?: SRLWrapperOptions;
    callbacks?: Callbacks;
};

/**
 * The lightbox wrapper
 * @param options The options available for customizing the lightbox
 * @see {@link https://github.com/michelecocuccio/simple-react-lightbox#options}
 * @param callbacks Callbacks provided by the lightbox
 * @see {@link https://github.com/michelecocuccio/simple-react-lightbox#callbacks}]
 * @param elements An array of objects that you want to pass to the lightbox for rendering the elements
 * @see{@link https://github.com/michelecocuccio/simple-react-lightbox#using-the-lightbox-with-props}
 * @param children React children to render elements
 * @see{@link https://github.com/michelecocuccio/simple-react-lightbox#using-the-lightbox-with-props}
 */

export function SRLWrapper({ options, callbacks, elements, children }: SRLWrapperProps): JSX.Element;
