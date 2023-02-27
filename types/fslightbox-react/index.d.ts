// Type definitions for fslightbox-react 1.7
// Project: https://fslightbox.com/
// Definitions by: Kirill Nikitin <https://github.com/locke23rus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export type SourceType = 'image' | 'video' | 'youtube' | null;

export type VideoPoster = string | null;

export interface VideoDimensions {
    width: number;
    height: number;
}

export interface ToolbarButtonProps {
    viewBox?: string;
    d?: string;
    width?: string;
    height?: string;
    title?: string;
}

export interface CustomToolbarButtonProps extends Required<ToolbarButtonProps> {
    onClick: (instance: any) => void;
}

export interface FsLightboxProps {
    toggler: boolean;
    sources?: string[] | undefined;

    // captions
    captions?: Array<JSX.Element | string> | undefined; // pro feature

    // custom sources
    customSources?: JSX.Element[] | undefined;

    // custom attributes
    customAttributes?: Array<{ [key: string]: string }> | undefined;

    // slide number controlling
    slide?: number | undefined;
    source?: string | undefined;
    sourceIndex?: number | undefined;

    // events
    onOpen?: ((instance: any) => void) | undefined;
    onClose?: ((instance: any) => void) | undefined;
    onInit?: ((instance: any) => void) | undefined;
    onShow?: ((instance: any) => void) | undefined;
    onSlideChange?: ((instance: any) => void) | undefined; // pro feature

    // types
    disableLocalStorage?: boolean | undefined;
    types?: SourceType[] | undefined;
    type?: SourceType | undefined;

    // sources
    videosPosters?: VideoPoster[] | undefined;
    maxYoutubeVideoDimensions?: VideoDimensions | undefined;

    // thumbs
    thumbs?: Array<string | null> | undefined; // pro feature
    thumbsIcons?: JSX.Element[] | undefined; // pro feature

    // animations
    initialAnimation?: string | undefined; // pro feature
    slideChangeAnimation?: string | undefined; // pro feature

    // toolbar
    customToolbarButtons?: CustomToolbarButtonProps[] | undefined; // pro feature

    // preferences
    loadOnlyCurrentSource?: boolean | undefined;
    showThumbsOnMount?: boolean | undefined; // pro feature
    disableThumbs?: boolean | undefined; // pro feature
    slideDistance?: number | undefined;
    slideshowTime?: number | undefined; // pro feature
    UIFadeOutTime?: number | undefined; // pro feature
    zoomIncrement?: number | undefined; // pro feature
    openOnMount?: boolean | undefined;
    exitFullscreenOnClose?: boolean | undefined;

    // svg icons (pro feature)
    svg?: {
        toolbarButtons?: {
            thumbs?: ToolbarButtonProps;
            zoomIn?: ToolbarButtonProps;
            zoomOut?: ToolbarButtonProps;
            slideshow: {
                start?: ToolbarButtonProps;
                pause?: ToolbarButtonProps;
            };
            fullscreen: {
                enter?: ToolbarButtonProps;
                exit?: ToolbarButtonProps;
            };
            close?: ToolbarButtonProps;
        };
        slideButtons?: {
            previous?: ToolbarButtonProps;
            next?: ToolbarButtonProps;
        };
    };
}

declare class FsLightbox extends React.Component<FsLightboxProps> {}

export default FsLightbox;
