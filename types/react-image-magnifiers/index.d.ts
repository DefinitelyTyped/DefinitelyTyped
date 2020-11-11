// Type definitions for react-image-magnifiers 1.3
// Project: https://github.com/adamrisberg/react-image-magnifiers
// Definitions by: Rafal Witczak <https://github.com/rafw87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export type MouseActivation = 'click' | 'doubleClick';
export type TouchActivation = 'tap' | 'doubleTap' | 'longTouch';

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
    cursorStyle?: string;
    largeImageSrc?: string;
    imageAlt?: string;
    style?: React.CSSProperties;
    className?: string;
    renderOverlay?: (state: boolean) => React.ReactNode;
    onImageLoad?: (ev: React.SyntheticEvent) => void;
    onLargeImageLoad?: (ev: React.SyntheticEvent) => void;
    onZoomStart?: () => void;
    onZoomEnd?: () => void;
}

export interface MagnifierProps extends CommonProps {
    mouseActivation?: MouseActivation;
    touchActivation?: TouchActivation;
    cursorStyleActive?: string;
    dragToMove?: boolean;
    interactionSettings?: {
        tapDurationInMs?: number;
        doubleTapDurationInMs?: number;
        longTouchDurationInMs?: number;
        longTouchMoveLimit?: number;
        clickMoveLimit?: number;
    };
}

export const Magnifier: React.ComponentType<MagnifierProps>;

export interface GlassMagnifierProps extends CommonProps {
    allowOverflow?: boolean;
    magnifierBorderColor?: string;
    magnifierBorderSize?: number;
    magnifierBackgroundColor?: string;
    magnifierOffsetX?: number;
    magnifierOffsetY?: number;
    magnifierSize?: string | number;
    square?: boolean;
}

export const GlassMagnifier: React.ComponentType<GlassMagnifierProps>;

export interface PictureInPictureMagnifierProps extends CommonProps {
    cursorStyleActive?: string;
    previewHorizontalPos?: 'left' | 'right';
    previewVerticalPos?: 'top' | 'bottom';
    previewOpacity?: number;
    previewOverlayBoxOpacity?: number;
    previewOverlayBackgroundColor?: string;
    previewOverlayBoxColor?: string;
    previewOverlayBoxImage?: string;
    previewOverlayBoxImageSize?: string;
    previewOverlayOpacity?: number;
    previewSizePercentage?: number;
    shadow?: boolean;
    shadowColor?: string;
}

export const PictureInPictureMagnifier: React.ComponentType<PictureInPictureMagnifierProps>;

export interface SideBySideMagnifierProps extends CommonProps {
    alwaysInPlace?: boolean;
    switchSides?: boolean;
    fillAvailableSpace?: boolean;
    fillAlignTop?: boolean;
    fillGapLeft?: number;
    fillGapRight?: number;
    fillGapTop?: number;
    fillGapBottom?: number;
    overlayBoxOpacity?: number;
    overlayOpacity?: number;
    overlayBackgroundColor?: string;
    overlayBoxColor?: string;
    overlayBoxImage?: string;
    overlayBoxImageSize?: string;
    zoomContainerBorder?: string;
    zoomContainerBoxShadow?: string;
    transitionSpeed?: number;
    transitionSpeedInPlace?: number;
    inPlaceMinBreakpoint?: number;
}

export const SideBySideMagnifier: React.ComponentType<SideBySideMagnifierProps>;

export interface MagnifierContainerProps {
    style?: string;
    className?: string;
    autoInPlace?: boolean;
    inPlaceMinBreakpoint?: number;
}

export const MagnifierContainer: React.ComponentType<MagnifierContainerProps>;

export interface MagnifierPreviewProps {
    imageSrc: string;
    largeImageSrc?: string;
    imageAlt?: string;
    style?: React.CSSProperties;
    className?: string;
    onImageLoad?: (ev: React.SyntheticEvent) => void;
    onLargeImageLoad?: (ev: React.SyntheticEvent) => void;
    cursorStyle?: string;
    transitionSpeed?: number;
    overlayBoxOpacity?: number;
    overlayOpacity?: number;
    overlayBackgroundColor?: number;
    overlayBoxColor?: number;
    overlayBoxImage?: number;
    overlayBoxImageSize?: number;
    renderOverlay?: (state: boolean) => React.ReactNode;
    onZoomStart?: () => void;
    onZoomEnd?: () => void;
}

export const MagnifierPreview: React.ComponentType<MagnifierPreviewProps>;

export interface MagnifierZoomProps {
    imageSrc: string;
    imageAlt?: string;
    style?: React.CSSProperties;
    className?: string;
    onImageLoad?: (ev: React.SyntheticEvent) => void;
    transitionSpeed?: number;
}

export const MagnifierZoom: React.ComponentType<MagnifierZoomProps>;
