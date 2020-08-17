// Type definitions for react-image-gallery 1.0
// Project: https://github.com/xiaolin/react-image-gallery
// Definitions by: Adam Webb <https://github.com/adamwpc>
//                 William Tio <https://github.com/WToa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ReactImageGalleryItem {
    bulletClass?: string;
    bulletOnClick?({
        item,
        itemIndex,
        currentIndex,
    }: {
        item: ReactImageGalleryItem;
        itemIndex: number;
        currentIndex: number;
    }): void;
    description?: string;
    original?: string;
    originalAlt?: string;
    originalTitle?: string;
    thumbnail?: string;
    thumbnailAlt?: string;
    thumbnailLabel?: string;
    thumbnailTitle?: string;
    fullscreen?: string;
    originalClass?: string;
    thumbnailClass?: string;
    renderItem?(item?: ReactImageGalleryItem): React.ReactNode;
    renderThumbInner?(item?: ReactImageGalleryItem): React.ReactNode;
    srcSet?: string;
    sizes?: string;
}

export interface ReactImageGalleryProps {
    flickThreshold?: number;
    items: ReactImageGalleryItem[];
    showNav?: boolean;
    autoPlay?: boolean;

    lazyLoad?: boolean;
    infinite?: boolean;
    showIndex?: boolean;
    showBullets?: boolean;
    showThumbnails?: boolean;
    showPlayButton?: boolean;
    showFullscreenButton?: boolean;
    disableThumbnailScroll?: boolean;
    disableKeyDown?: boolean;
    disableSwipe?: boolean;
    useBrowserFullscreen?: boolean;
    preventDefaultTouchmoveEvent?: boolean;
    onErrorImageURL?: string;
    indexSeparator?: string;
    thumbnailPosition?: 'top' | 'right' | 'bottom' | 'left';
    startIndex?: number;
    slideDuration?: number;
    slideInterval?: number;
    slideOnThumbnailOver?: boolean;
    swipeThreshold?: number;
    swipingTransitionDuration?: number;
    onSlide?: (currentIndex: number) => void;
    onScreenChange?: (fullScreenElement: Element) => void;
    onPause?: (currentIndex: number) => void;
    onPlay?: (currentIndex: number) => void;
    onClick?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
    onImageLoad?: (event: React.ReactEventHandler<HTMLImageElement>) => void;
    onImageError?: (event: React.ReactEventHandler<HTMLImageElement>) => void;
    onTouchMove?: (event: React.TouchEventHandler<HTMLDivElement>) => void;
    onTouchEnd?: (event: React.TouchEventHandler<HTMLDivElement>) => void;
    onTouchStart?: (event: React.TouchEventHandler<HTMLDivElement>) => void;
    onMouseOver?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
    onMouseLeave?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
    onThumbnailError?: (event: React.ReactEventHandler<HTMLImageElement>) => void;
    onThumbnailClick?: (event: React.MouseEventHandler<HTMLAnchorElement>, index: number) => void;
    renderCustomControls?: () => React.ReactNode;
    renderLeftNav?: (onClick: React.MouseEventHandler<HTMLElement>, isDisabled: boolean) => React.ReactNode;
    renderRightNav?: (onClick: React.MouseEventHandler<HTMLElement>, isDisabled: boolean) => React.ReactNode;
    renderPlayPauseButton?: (onClick: React.MouseEventHandler<HTMLElement>, isPlaying: boolean) => React.ReactNode;
    renderFullscreenButton?: (onClick: React.MouseEventHandler<HTMLElement>, isFullscreen: boolean) => React.ReactNode;
    renderItem?: (item: ReactImageGalleryItem) => React.ReactNode;
    renderThumbInner?: (item: ReactImageGalleryItem) => React.ReactNode;
    stopPropagation?: boolean;
    additionalClass?: string;
    useTranslate3D?: boolean;
    isRTL?: boolean;
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
