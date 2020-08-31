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
    sources?: string[];

    // custom sources
    customSources?: JSX.Element[];

    // slide number controlling
    slide?: number;
    source?: string;
    sourceIndex?: number;

    // events
    onOpen?: () => void;
    onClose?: () => void;
    onInit?: () => void;
    onShow?: () => void;

    // types
    disableLocalStorage?: boolean;
    types?: SourceType[];
    type?: SourceType;

    // sources
    videosPosters?: VideoPoster[];
    maxYoutubeVideoDimensions?: VideoDimensions;

    // preferences
    loadOnlyCurrentSource?: boolean;
    slideDistance?: number;
    openOnMount?: boolean;
}

declare class FsLightbox extends React.Component<FsLightboxProps> {}

export default FsLightbox;
