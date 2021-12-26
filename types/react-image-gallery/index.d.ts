// Type definitions for react-image-gallery 1.0
// Project: https://github.com/xiaolin/react-image-gallery
// Definitions by: Adam Webb <https://github.com/adamwpc>
//                 William Tio <https://github.com/WToa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import * as React from 'react';

export type ReactImageGalleryImageSet = ReadonlyArray<{
    srcSet: string;
    media: string;
}>;

export interface ReactImageGalleryItem {
    bulletClass?: string | undefined;
    bulletOnClick?({
        item,
        itemIndex,
        currentIndex,
    }: {
        item: ReactImageGalleryItem;
        itemIndex: number;
        currentIndex: number;
    }): void;
    description?: string | undefined;
    original: string;
    originalHeight?: number | undefined;
    originalWidth?: number | undefined;
    thumbnailHeight?: number | undefined;
    thumbnailWidth?: number | undefined;
    fullscreen?: string | undefined;
    originalAlt?: string | undefined;
    originalTitle?: string | undefined;
    thumbnail?: string | undefined;
    thumbnailAlt?: string | undefined;
    thumbnailLabel?: string | undefined;
    thumbnailTitle?: string | undefined;
    originalClass?: string | undefined;
    thumbnailClass?: string | undefined;
    renderItem?(item: ReactImageGalleryItem): React.ReactNode;
    renderThumbInner?(item: ReactImageGalleryItem): React.ReactNode;
    imageSet?: ReactImageGalleryImageSet | undefined;
    srcSet?: string | undefined;
    sizes?: string | undefined;
}

export interface ReactImageGalleryProps {
    flickThreshold?: number | undefined;
    items: ReadonlyArray<ReactImageGalleryItem>;
    showNav?: boolean | undefined;
    autoPlay?: boolean | undefined;
    lazyLoad?: boolean | undefined;
    infinite?: boolean | undefined;
    showIndex?: boolean | undefined;
    showBullets?: boolean | undefined;
    showThumbnails?: boolean | undefined;
    showPlayButton?: boolean | undefined;
    showFullscreenButton?: boolean | undefined;
    disableThumbnailScroll?: boolean | undefined;
    disableKeyDown?: boolean | undefined;
    disableSwipe?: boolean | undefined;
    useBrowserFullscreen?: boolean | undefined;
    preventDefaultTouchmoveEvent?: boolean | undefined;
    onErrorImageURL?: string | undefined;
    indexSeparator?: string | undefined;
    thumbnailPosition?: 'top' | 'right' | 'bottom' | 'left' | undefined;
    startIndex?: number | undefined;
    slideDuration?: number | undefined;
    slideInterval?: number | undefined;
    slideOnThumbnailOver?: boolean | undefined;
    swipeThreshold?: number | undefined;
    swipingTransitionDuration?: number | undefined;
    onSlide?: ((currentIndex: number) => void) | undefined;
    onBeforeSlide?: ((currentIndex: number) => void) | undefined;
    onScreenChange?: ((fullScreen: boolean) => void) | undefined;
    onPause?: ((currentIndex: number) => void) | undefined;
    onPlay?: ((currentIndex: number) => void) | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onImageLoad?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onImageError?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onThumbnailError?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onThumbnailClick?: ((event: React.MouseEvent<HTMLAnchorElement>, index: number) => void) | undefined;
    renderCustomControls?: (() => React.ReactNode) | undefined;
    renderLeftNav?: ((onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean) => React.ReactNode) | undefined;
    renderRightNav?: ((onClick: React.MouseEventHandler<HTMLElement>, disabled: boolean) => React.ReactNode) | undefined;
    renderPlayPauseButton?: ((onClick: React.MouseEventHandler<HTMLElement>, isPlaying: boolean) => React.ReactNode) | undefined;
    renderFullscreenButton?: ((onClick: React.MouseEventHandler<HTMLElement>, isFullscreen: boolean) => React.ReactNode) | undefined;
    renderItem?: ((item: ReactImageGalleryItem) => React.ReactNode) | undefined;
    renderThumbInner?: ((item: ReactImageGalleryItem) => React.ReactNode) | undefined;
    stopPropagation?: boolean | undefined;
    additionalClass?: string | undefined;
    useTranslate3D?: boolean | undefined;
    isRTL?: boolean | undefined;
}

declare class ReactImageGallery extends React.Component<ReactImageGalleryProps> {
    play: (callback?: boolean) => void;
    pause: (callback?: boolean) => void;
    fullScreen: () => void;
    exitFullScreen: () => void;
    slideToIndex: (index: number) => void;
    getCurrentIndex: () => number;
}

export default ReactImageGallery;
