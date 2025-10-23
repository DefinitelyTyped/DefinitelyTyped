import * as React from "react";

export interface InnerImageZoomProps {
    moveType?: "pan" | "drag" | undefined;
    zoomType?: "click" | "hover" | undefined;
    src: string;
    srcSet?: string | undefined;
    sizes?: string | undefined;
    sources?: Array<{ srcSet?: string | undefined; media?: string | undefined }> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    hasSpacer?: boolean | undefined;
    zoomSrc?: string | undefined;
    zoomScale?: number | undefined;
    zoomPreload?: boolean | undefined;
    alt?: string | undefined;
    fadeDuration?: number | undefined;
    fullscreenOnMobile?: boolean | undefined;
    mobileBreakpoint?: number | undefined;
    hideCloseButton?: boolean | undefined;
    hideHint?: boolean | undefined;
    className?: string | undefined;
    afterZoomIn?: (() => void) | undefined;
    afterZoomOut?: (() => void) | undefined;
}

export class InnerImageZoom extends React.Component<InnerImageZoomProps> {}
export default InnerImageZoom;
