import * as React from "react";

/**
 * React Image Magnify
 */
export default function ReactImageMagnify(
    props: ReactImageMagnifyProps & Readonly<{ children?: React.ReactNode | undefined }>,
): React.ReactElement;

export interface CommonImageType {
    src: string;
    srcSet?: string | undefined;
    sizes?: string | undefined;
    onLoad?: (() => void) | undefined;
    onError?: (() => void) | undefined;
}

export interface SmallImageType extends CommonImageType {
    /**
     * Required if isFluidWidth is not set
     */
    width?: number | undefined;

    /**
     * Required if isFluidWidth is not set
     */
    height?: number | undefined;
    alt?: string | undefined;

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
    alt?: string | undefined;
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
    className?: string | undefined;

    /**
     * Style applied to root container element.
     */
    style?: React.CSSProperties | undefined;

    /**
     * CSS class applied to small image element.
     */
    imageClassName?: string | undefined;

    /**
     * Style applied to small image element.
     */
    imageStyle?: React.CSSProperties | undefined;

    /**
     * Style applied to tinted lens.
     */
    lensStyle?: React.CSSProperties | undefined;

    /**
     * CSS class applied to enlarged image container element.
     */
    enlargedImageContainerClassName?: string | undefined;

    /**
     * Style applied to enlarged image container element.
     */
    enlargedImageContainerStyle?: React.CSSProperties | undefined;

    /**
     * CSS class applied to enlarged image element.
     */
    enlargedImageClassName?: string | undefined;

    /**
     * Style applied to enlarged image element.
     */
    enlargedImageStyle?: React.CSSProperties | undefined;

    // Interation properties

    /**
     * Milliseconds duration of magnified image fade in/fade out.
     *
     * Default: 300
     */
    fadeDurationInMs?: number | undefined;

    /**
     * Milliseconds to delay hover trigger.
     *
     * Default: 250
     */
    hoverDelayInMs?: number | undefined;

    /**
     * Milliseconds to delay hover-off trigger.
     *
     * Default: 150
     */
    hoverOffDelayInMs?: number | undefined;

    /**
     * Activate magnification immediately on touch. May impact scrolling.
     *
     * Default: false
     */
    isActivatedOnTouch?: boolean | undefined;

    /**
     * Milliseconds to delay long-press activation (long touch).
     *
     * Default: 500
     */
    pressDuration?: number | undefined;

    /**
     * Pixels of movement allowed during long-press activation.
     *
     * Default: 5
     */
    pressMoveThreshold?: number | undefined;

    // Behavioral props

    /**
     * Enlarged image placement. Can be 'beside' or 'over'.
     *
     * Default: beside(over for touch)
     */
    enlargedImagePosition?: string | undefined;

    /**
     * Specify enlarged image container dimensions as an object with width and height properties.
     * Values may be expressed as a percentage (e.g. '150%') or a number (e.g. 200).
     * Percentage is based on small image dimension. Number is pixels.
     * Not applied when enlargedImagePosition is set to 'over', the default for touch input.
     */
    enlargedImageContainerDimensions?: { width: number | string; height: number | string } | undefined;

    /**
     * Render enlarged image into an HTML element of your choosing by specifying the target element id.
     * Requires React v16. Ignored for touch input by default - see isEnlargedImagePortalEnabledForTouch.
     */
    enlargedImagePortalId?: string | undefined;

    /**
     * Specify portal rendering should be honored for touch input.
     *
     * Default: false
     */
    isEnlargedImagePortalEnabledForTouch?: boolean | undefined;

    /**
     * Reference to a component class or functional component. A Default is provided.
     */
    hintComponent?: (() => void) | undefined;

    /**
     * Only show hint until the first interaction begins.
     *
     * Default: true
     */
    shouldHideHintAfterFirstActivation?: boolean | undefined;

    /**
     * Enable hint feature.
     *
     * Default: false
     */
    isHintEnabled?: boolean | undefined;

    /**
     * Hint text for mouse.
     *
     * Default: Hover to Zoom
     */
    hintTextMouse?: string | undefined;

    /**
     * Hint text for touch.
     *
     * Default: Long-Touch to Zoom
     */
    hintTextTouch?: string | undefined;

    /**
     * Specify a positive space lens in place of the default negative space lens.
     *
     * Default: false
     */
    shouldUsePositiveSpaceLens?: boolean | undefined;

    /**
     * Specify a custom lens component.
     */
    lensComponent?: (() => void) | undefined;
}
