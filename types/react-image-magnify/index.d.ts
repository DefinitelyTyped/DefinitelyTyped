// Type definitions for react-image-magnify 2.7
// Project: https://github.com/ethanselzer/react-image-magnify
// Definitions by: Sumit Parakh <https://github.com/sumitparakh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

/**
 * React Image Magnify
 */
export default function ReactImageMagnify(props: ReactImageMagnifyProps & Readonly<{ children?: React.ReactNode }>): React.ReactElement;

export interface CommonImageType {
    src: string;
    srcSet?: string;
    sizes?: string;
    onLoad?: () => void;
    onError?: () => void;
}

export interface SmallImageType extends CommonImageType {
    /**
     * Required if isFluidWidth is not set
     */
    width?: number;

    /**
     * Required if isFluidWidth is not set
     */
    height?: number;
    alt?: string;

    /**
     * Default: false
     */
    isFluidWidth: boolean;
}

export interface LargeImageType extends CommonImageType {
    width: number;
    height: number;

    /**
     * Defaults to empty string
     */
    alt?: string;
}

export interface ReactImageMagnifyProps {
    /**
     * Small image information.
     */
    smallImage: SmallImageType;

    /**
     * Large image information
     */
    largeImage: LargeImageType;

    /**
     * CSS class applied to root container element.
     */
    className?: string;

    /**
     * Style applied to root container element.
     */
    style?: React.CSSProperties;

    /**
     * CSS class applied to small image element.
     */
    imageClassName?: string;

    /**
     * Style applied to small image element.
     */
    imageStyle?: React.CSSProperties;

    /**
     * Style applied to tinted lens.
     */
    lensStyle?: React.CSSProperties;

    /**
     * CSS class applied to enlarged image container element.
     */
    enlargedImageContainerClassName?: string;

    /**
     * Style applied to enlarged image container element.
     */
    enlargedImageContainerStyle?: React.CSSProperties;

    /**
     * CSS class applied to enlarged image element.
     */
    enlargedImageClassName?: string;

    /**
     * Style applied to enlarged image element.
     */
    enlargedImageStyle?: React.CSSProperties;

    // Interation properties

    /**
     * Milliseconds duration of magnified image fade in/fade out.
     *
     * Default: 300
     */
    fadeDurationInMs?: number;

    /**
     * Milliseconds to delay hover trigger.
     *
     * Default: 250
     */
    hoverDelayInMs?: number;

    /**
     * Milliseconds to delay hover-off trigger.
     *
     * Default: 150
     */
    hoverOffDelayInMs?: number;

    /**
     * Activate magnification immediately on touch. May impact scrolling.
     *
     * Default: false
     */
    isActivatedOnTouch?: boolean;

    /**
     * Milliseconds to delay long-press activation (long touch).
     *
     * Default: 500
     */
    pressDuration?: number;

    /**
     * Pixels of movement allowed during long-press activation.
     *
     * Default: 5
     */
    pressMoveThreshold?: number;

    // Behavioral props

    /**
     * Enlarged image placement. Can be 'beside' or 'over'.
     *
     * Default: beside(over for touch)
     */
    enlargedImagePosition?: string;

    /**
     * Specify enlarged image container dimensions as an object with width and height properties.
     * Values may be expressed as a percentage (e.g. '150%') or a number (e.g. 200).
     * Percentage is based on small image dimension. Number is pixels.
     * Not applied when enlargedImagePosition is set to 'over', the default for touch input.
     */
    enlargedImageContainerDimensions?: { width: number | string; height: number | string };

    /**
     * Render enlarged image into an HTML element of your choosing by specifying the target element id.
     * Requires React v16. Ignored for touch input by default - see isEnlargedImagePortalEnabledForTouch.
     */
    enlargedImagePortalId?: string;

    /**
     * Specify portal rendering should be honored for touch input.
     *
     * Default: false
     */
    isEnlargedImagePortalEnabledForTouch?: boolean;

    /**
     * Reference to a component class or functional component. A Default is provided.
     */
    hintComponent?: () => void;

    /**
     * Only show hint until the first interaction begins.
     *
     * Default: true
     */
    shouldHideHintAfterFirstActivation?: boolean;

    /**
     * Enable hint feature.
     *
     * Default: false
     */
    isHintEnabled?: boolean;

    /**
     * Hint text for mouse.
     *
     * Default: Hover to Zoom
     */
    hintTextMouse?: string;

    /**
     * Hint text for touch.
     *
     * Default: Long-Touch to Zoom
     */
    hintTextTouch?: string;

    /**
     * Specify a positive space lens in place of the default negative space lens.
     *
     * Default: false
     */
    shouldUsePositiveSpaceLens?: boolean;

    /**
     * Specify a custom lens component.
     */
    lensComponent?: () => void;
}
