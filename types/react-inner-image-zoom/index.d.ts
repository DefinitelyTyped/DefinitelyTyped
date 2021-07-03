// Type definitions for react-inner-image-zoom 2.0
// Project: https://github.com/laurenashpole/react-inner-image-zoom#readme
// Definitions by: Lauren Ashpole <https://github.com/laurenashpole>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface InnerImageZoomProps {
    moveType?: 'pan' | 'drag';
    zoomType?: 'click' | 'hover';
    src: string;
    srcSet?: string;
    sizes?: string;
    sources?: Array<{ srcSet?: string, media?: string }>;
    width?: number;
    height?: number;
    hasSpacer?: boolean;
    zoomSrc?: string;
    zoomScale?: number;
    zoomPreload?: boolean;
    alt?: string;
    fadeDuration?: number;
    fullscreenOnMobile?: boolean;
    mobileBreakpoint?: number;
    hideCloseButton?: boolean;
    hideHint?: boolean;
    className?: string;
    afterZoomIn?: () => void;
    afterZoomOut?: () => void;
}

export class InnerImageZoom extends React.Component<InnerImageZoomProps> {}
export default InnerImageZoom;
