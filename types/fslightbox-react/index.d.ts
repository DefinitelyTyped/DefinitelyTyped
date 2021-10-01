// Type definitions for fslightbox-react 1.4
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

export interface FsLightboxProps {
    toggler: boolean;
    sources?: string[] | undefined;

    // custom sources
    customSources?: JSX.Element[] | undefined;

    // slide number controlling
    slide?: number | undefined;
    source?: string | undefined;
    sourceIndex?: number | undefined;

    // events
    onOpen?: (() => void) | undefined;
    onClose?: (() => void) | undefined;
    onInit?: (() => void) | undefined;
    onShow?: (() => void) | undefined;

    // types
    disableLocalStorage?: boolean | undefined;
    types?: SourceType[] | undefined;
    type?: SourceType | undefined;

    // sources
    videosPosters?: VideoPoster[] | undefined;
    maxYoutubeVideoDimensions?: VideoDimensions | undefined;

    // preferences
    loadOnlyCurrentSource?: boolean | undefined;
    showThumbsOnMount?: boolean | undefined;
    slideDistance?: number | undefined;
    openOnMount?: boolean | undefined;
}

declare class FsLightbox extends React.Component<FsLightboxProps> {}

export default FsLightbox;
