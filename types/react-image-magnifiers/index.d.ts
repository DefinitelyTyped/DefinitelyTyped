import * as React from "react";

export type MouseActivation = "click" | "doubleClick";
export type TouchActivation = "tap" | "doubleTap" | "longTouch";

export const MOUSE_ACTIVATION: {
    CLICK: MouseActivation;
    DOUBLE_CLICK: MouseActivation;
};

export const TOUCH_ACTIVATION: {
    TAP: TouchActivation;
    DOUBLE_TAP: TouchActivation;
    LONG_TOUCH: TouchActivation;
};

export interface CommonProps {
    imageSrc: string;
    cursorStyle?: string | undefined;
    largeImageSrc?: string | undefined;
    imageAlt?: string | undefined;
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
    renderOverlay?: ((state: boolean) => React.ReactNode) | undefined;
    onImageLoad?: ((ev: React.SyntheticEvent) => void) | undefined;
    onLargeImageLoad?: ((ev: React.SyntheticEvent) => void) | undefined;
    onZoomStart?: (() => void) | undefined;
    onZoomEnd?: (() => void) | undefined;
}

export interface MagnifierProps extends CommonProps {
    mouseActivation?: MouseActivation | undefined;
    touchActivation?: TouchActivation | undefined;
    cursorStyleActive?: string | undefined;
    dragToMove?: boolean | undefined;
    interactionSettings?: {
        tapDurationInMs?: number | undefined;
        doubleTapDurationInMs?: number | undefined;
        longTouchDurationInMs?: number | undefined;
        longTouchMoveLimit?: number | undefined;
        clickMoveLimit?: number | undefined;
    } | undefined;
}

export const Magnifier: React.ComponentType<MagnifierProps>;

export interface GlassMagnifierProps extends CommonProps {
    allowOverflow?: boolean | undefined;
    magnifierBorderColor?: string | undefined;
    magnifierBorderSize?: number | undefined;
    magnifierBackgroundColor?: string | undefined;
    magnifierOffsetX?: number | undefined;
    magnifierOffsetY?: number | undefined;
    magnifierSize?: string | number | undefined;
    square?: boolean | undefined;
}

export const GlassMagnifier: React.ComponentType<GlassMagnifierProps>;

export interface PictureInPictureMagnifierProps extends CommonProps {
    cursorStyleActive?: string | undefined;
    previewHorizontalPos?: "left" | "right" | undefined;
    previewVerticalPos?: "top" | "bottom" | undefined;
    previewOpacity?: number | undefined;
    previewOverlayBoxOpacity?: number | undefined;
    previewOverlayBackgroundColor?: string | undefined;
    previewOverlayBoxColor?: string | undefined;
    previewOverlayBoxImage?: string | undefined;
    previewOverlayBoxImageSize?: string | undefined;
    previewOverlayOpacity?: number | undefined;
    previewSizePercentage?: number | undefined;
    shadow?: boolean | undefined;
    shadowColor?: string | undefined;
}

export const PictureInPictureMagnifier: React.ComponentType<PictureInPictureMagnifierProps>;

export interface SideBySideMagnifierProps extends CommonProps {
    alwaysInPlace?: boolean | undefined;
    switchSides?: boolean | undefined;
    fillAvailableSpace?: boolean | undefined;
    fillAlignTop?: boolean | undefined;
    fillGapLeft?: number | undefined;
    fillGapRight?: number | undefined;
    fillGapTop?: number | undefined;
    fillGapBottom?: number | undefined;
    overlayBoxOpacity?: number | undefined;
    overlayOpacity?: number | undefined;
    overlayBackgroundColor?: string | undefined;
    overlayBoxColor?: string | undefined;
    overlayBoxImage?: string | undefined;
    overlayBoxImageSize?: string | undefined;
    zoomContainerBorder?: string | undefined;
    zoomContainerBoxShadow?: string | undefined;
    transitionSpeed?: number | undefined;
    transitionSpeedInPlace?: number | undefined;
    inPlaceMinBreakpoint?: number | undefined;
}

export const SideBySideMagnifier: React.ComponentType<SideBySideMagnifierProps>;

export interface MagnifierContainerProps {
    children?: React.ReactNode;
    style?: string | undefined;
    className?: string | undefined;
    autoInPlace?: boolean | undefined;
    inPlaceMinBreakpoint?: number | undefined;
}

export const MagnifierContainer: React.ComponentType<MagnifierContainerProps>;

export interface MagnifierPreviewProps {
    imageSrc: string;
    largeImageSrc?: string | undefined;
    imageAlt?: string | undefined;
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
    onImageLoad?: ((ev: React.SyntheticEvent) => void) | undefined;
    onLargeImageLoad?: ((ev: React.SyntheticEvent) => void) | undefined;
    cursorStyle?: string | undefined;
    transitionSpeed?: number | undefined;
    overlayBoxOpacity?: number | undefined;
    overlayOpacity?: number | undefined;
    overlayBackgroundColor?: number | undefined;
    overlayBoxColor?: number | undefined;
    overlayBoxImage?: number | undefined;
    overlayBoxImageSize?: number | undefined;
    renderOverlay?: ((state: boolean) => React.ReactNode) | undefined;
    onZoomStart?: (() => void) | undefined;
    onZoomEnd?: (() => void) | undefined;
}

export const MagnifierPreview: React.ComponentType<MagnifierPreviewProps>;

export interface MagnifierZoomProps {
    imageSrc: string;
    imageAlt?: string | undefined;
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
    onImageLoad?: ((ev: React.SyntheticEvent) => void) | undefined;
    transitionSpeed?: number | undefined;
}

export const MagnifierZoom: React.ComponentType<MagnifierZoomProps>;
