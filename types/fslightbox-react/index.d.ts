import * as React from "react";

declare namespace FsLightbox {
    type SourceType = "image" | "video" | "youtube" | null;

    interface VideoDimensions {
        width: number;
        height: number;
    }

    interface ToolbarButtonProps {
	class?: string;
        viewBox?: string;
        d?: string;
        title?: string;
    }

    interface CustomToolbarButtonProps extends Required<ToolbarButtonProps> {
        onClick: (instance: any) => void;
    }

    interface FsLightboxProps {
        toggler: boolean;
        sources?: Array<string | React.JSX.Element> | undefined;

        // captions
        captions?: Array<string | React.JSX.Element> | undefined; // pro feature

        // custom attributes
        customAttributes?: Array<{ [key: string]: string } | null> | undefined;

        // slide number controlling
        slide?: number | undefined;
        sourceIndex?: number | undefined;

        // events
        onOpen?: ((instance: any) => void) | undefined;
        onClose?: ((instance: any) => void) | undefined;
        onInit?: ((instance: any) => void) | undefined;
        onShow?: ((instance: any) => void) | undefined;
        onSourceLoad?: ((instance: any, source: any, index: number) => void) | undefined;
        onSlideChange?: ((instance: any) => void) | undefined; // pro feature

        // types
        disableLocalStorage?: boolean | undefined;
        types?: SourceType[] | undefined;
        type?: SourceType | undefined;

        // sources
        maxYoutubeVideoDimensions?: VideoDimensions | undefined;
        autoplay?: boolean | undefined;

        // thumbs
        thumbs?: Array<string | null> | undefined; // pro feature
        thumbsIcon?: React.JSX.Element | undefined; // pro feature
        thumbsIcons?: Array<React.JSX.Element | null> | undefined; // pro feature

        // animations
        initialAnimation?: string | undefined; // pro feature
        slideChangeAnimation?: string | undefined; // pro feature

        // toolbar
        customToolbarButtons?: CustomToolbarButtonProps[] | undefined; // pro feature
        // preferences
        disableBackgroundClose?: boolean | undefined;
        disableSlideSwiping?: boolean | undefined;
        loadOnlyCurrentSource?: boolean | undefined;
        showThumbsOnMount?: boolean | undefined; // pro feature
	showThumbsWithCaptions?: boolean | undefined; // pro feature
        disableThumbs?: boolean | undefined; // pro feature
        slideDistance?: number | undefined;
        slideshowTime?: number | undefined; // pro feature
	sourceMargin?: number | undefined;
        UIFadeOutTime?: number | false | undefined; // pro feature
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
}

declare const FsLightbox : React.FC<FsLightbox.FsLightboxProps>
export = FsLightbox
	
