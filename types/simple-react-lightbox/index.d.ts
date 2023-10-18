import { ReactNode } from "react";

/**
 * The object that lightbox uses for the elements array
 */

export interface Element {
    src: string;
    thumbnail?: string | undefined;
    caption?: string | undefined;
    autoplay?: boolean | undefined;
    width?: number | undefined;
    height?: string | number | undefined;
    showControls?: boolean | undefined;
}

/**
 * An array of objects that you want to pass to the lightbox
 * @see https://github.com/michelecocuccio/simple-react-lightbox#using-the-lightbox-with-props
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
        autoplaySpeed?: number | undefined;
        boxShadow?: string | undefined;
        disableKeyboardControls?: boolean | undefined;
        disablePanzoom?: boolean | undefined;
        disableWheelControls?: boolean | undefined;
        downloadedFileName?: string | undefined;
        hideControlsAfter?: number | boolean | undefined;
        lightboxTransitionSpeed?: number | undefined;
        lightboxTransitionTimingFunction?: string | undefined;
        overlayColor?: string | undefined;
        slideAnimationType?: string | undefined;
        slideSpringValues?: number[] | undefined;
        slideTransitionSpeed?: number | undefined;
        slideTransitionTimingFunction?: string | undefined;
        usingPreact?: boolean | undefined;
    } | undefined;
    buttons?: {
        backgroundColor?: string | undefined;
        iconColor?: string | undefined;
        iconPadding?: string | undefined;
        showAutoplayButton?: boolean | undefined;
        showCloseButton?: boolean | undefined;
        showDownloadButton?: boolean | undefined;
        showFullscreenButton?: boolean | undefined;
        showNextButton?: boolean | undefined;
        showPrevButton?: boolean | undefined;
        showThumbnailsButton?: boolean | undefined;
        size?: string | undefined;
    } | undefined;
    caption?: {
        captionColor?: string | undefined;
        captionAlignment?: string | undefined;
        captionFontFamily?: string | undefined;
        captionFontSize?: string | undefined;
        captionFontStyle?: string | undefined;
        captionFontWeight?: number | string | undefined;
        captionContainerPadding?: string | undefined;
        captionTextTransform?: string | undefined;
        showCaption?: boolean | undefined;
    } | undefined;
    thumbnails?: {
        showThumbnails?: boolean | undefined;
        thumbnailsAlignment?: string | undefined;
        thumbnailsContainerPadding?: string | undefined;
        thumbnailsContainerBackgroundColor?: string | undefined;
        thumbnailsGap?: string | undefined;
        thumbnailsIconColor?: string | undefined;
        thumbnailsOpacity?: number | undefined;
        thumbnailsPosition?: string | undefined;
        thumbnailsSize?: string[] | undefined;
    } | undefined;
    progressBar?: {
        backgroundColor?: string | undefined;
        fillColor?: string | undefined;
        height?: string | undefined;
        showProgressBar?: boolean | undefined;
    } | undefined;
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
 * @see https://github.com/michelecocuccio/simple-react-lightbox#hooks
 */

export function useLightbox(): { openLightbox(index?: number): void; closeLightbox(): void };

// If the user provide the elements prop, don't let him to also use children, and vice-versa.

export interface WrapperWithElements {
    children?: never | undefined;
    elements: Elements;
}

export interface WrapperWithChildren {
    children: ReactNode;
    elements?: never | undefined;
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
    options?: SRLWrapperOptions | undefined;
    callbacks?: Callbacks | undefined;
};

/**
 * The lightbox wrapper
 * @param options The options available for customizing the lightbox
 * @see {@link https://github.com/michelecocuccio/simple-react-lightbox#options}
 * @param callbacks Callbacks provided by the lightbox
 * @see {@link https://github.com/michelecocuccio/simple-react-lightbox#callbacks}]
 * @param elements An array of objects that you want to pass to the lightbox for rendering the elements
 * @see https://github.com/michelecocuccio/simple-react-lightbox#using-the-lightbox-with-props
 * @param children React children to render elements
 * @see https://github.com/michelecocuccio/simple-react-lightbox#using-the-lightbox-with-props
 */

export function SRLWrapper({ options, callbacks, elements, children }: SRLWrapperProps): JSX.Element;
