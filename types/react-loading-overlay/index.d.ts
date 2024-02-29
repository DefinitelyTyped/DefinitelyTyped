import * as React from "react";
export interface LoadingOverlayProps {
    /** default: ``true`` - whether the loader is visible. */
    active?: boolean;

    /** default: ``500`` - the transition speed for fading out the overlay. */
    fadeSpeed?: number;

    /** default: ``undefined`` - click handler for the overlay when active. */
    onClick?: React.MouseEventHandler<HTMLDivElement>;

    /**
     * default: ``undefined`` - the className for the wrapping ``<div />`` that
     *  is present whether active or not.
     */
    className?: string;

    /**
     * default: ``_loading_overlay_`` - the prefix for all classNames on the
     * generated elements. see Styling for more info.
     */
    classNamePrefix?: string;

    /**
     * default: ``false`` - renders the default spinner when true (and when the
     * loader is active). Otherwise you can provide any valid react node to use
     * your own spinner.
     */
    spinner?: boolean | React.ReactNode;

    /**
     * default: ``undefined`` - the text or react node to render in the loader overlay when active.
     */
    text?: React.ReactNode;

    /**
     * default: ``undefined`` - see Styling for more info.
     */
    styles?: {
        content?: (base: React.CSSProperties) => React.CSSProperties;
        overlay?: (base: React.CSSProperties) => React.CSSProperties;
        spinner?: (base: React.CSSProperties) => React.CSSProperties;
        wrapper?: (base: React.CSSProperties) => React.CSSProperties;
    };
}

declare class LoadingOverlay extends React.Component<LoadingOverlayProps> {}
export default LoadingOverlay;
