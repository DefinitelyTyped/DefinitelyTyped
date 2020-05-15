// Type definitions for react-images 0.5
// Project: http://jossmac.github.io/react-images
// Definitions by: Konstantin Lukaschenko <https://github.com/KonstantinLukaschenko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

declare class Lightbox extends React.Component<LightboxProps> {
    constructor(props: LightboxProps);
}

export interface LightboxProps {
    /**
     * Array of image objects. Required.
     */
    images: Image[];

    /**
     * Allow users to exit the lightbox by clicking the backdrop. Default value: false.
     */
    backdropClosesModal?: boolean;

    /**
     * Supports keyboard input - esc, arrow left, and arrow right. Default value: true
     */
    enableKeyboardInput?: boolean;

    /**
     * The index of the image to display initially. Default value: 0
     */
    currentImage?: number;

    /**
     * An array of elements to display as custom controls on the top of lightbox. Default value: undefined
     */
    customControls?: Array<React.ReactHTMLElement<any>>;

    /**
     * Whether or not the lightbox is displayed. Default value: false;
     */
    isOpen?: boolean;

    /**
     * Based on the direction the user is navigating, preload the next available image. Default value: true
     */
    preloadNextImage?: boolean;

    /**
     * Optionally display a close "X" button in top right corner. Default value: true
     */
    showCloseButton?: boolean;

    /**
     * Optionally display image index, e.g., "3 of 20". Default value: true
     */
    showImageCount?: boolean;

    /**
     * Maximum width of the carousel; defaults to 1024px
     */
    width?: number;

    /**
     * Spinner component.
     */
    spinner?: () => React.ReactElement;

    /**
     *  Color of spinner. Default value: 'white'
     */
    spinnerColor?: string;

    /**
     * Size of spinner. Default value: 100
     */
    spinnerSize?: number;

    /**
     * Determines whether scrolling is prevented via react-scrolllock. Default value: true
     */
    preventScroll?: boolean;

    /**
     * Optionally display thumbnails beneath the Lightbox
     */
    showThumbnails?: boolean;

    /**
     * The image count separator. Default value: ' of '
     */
    imageCountSeparator?: string;

    /**
     * Customize right arrow title. Default value: ' Next (Right arrow key) '
     */
    rightArrowTitle?: string;

    /**
     * Custom of left arrow title. Default value: ' Previous (Left arrow key) '
     */
    leftArrowTitle?: string;

    /**
     * Custom close esc title. Default value: ' Close (Esc) '
     */
    closeButtonTitle?: string;

    /**
     * Handle closing of the lightbox. Required.
     */
    onClose: () => void;

    /**
     * Fired on request of the previous image.
     */
    onClickPrev?: () => void;

    /**
     * Fired on request of the next image.
     */
    onClickNext?: () => void;

    /**
     * Handle click on image.
     */
    onClickImage?: (e: React.MouseEvent<HTMLImageElement>) => void;

    /**
     * Handle click on thumbnail.
     */
    onClickThumbnail?: (index: number) => void;
}

export interface Image {
    /**
     * The source of the image. Required.
     */
    src: string;

    /**
     * array of strings or string
     */
    srcSet?: string | string[];

    /**
     * The image caption.
     */
    caption?: string;

    /**
     * The alt text for the image.
     */
    alt?: string;
}

export default Lightbox;
