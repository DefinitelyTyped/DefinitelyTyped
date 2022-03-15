// Type definitions for react-gallery-carousel 0.2
// Project: https://github.com/yifaneye/react-gallery-carousel#readme
// Definitions by: Guilherme Samuel <https://github.com/guilhermefront>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import * as React from 'react';

declare namespace Carousel {
    /**
     * The image object used in the images array
     * @example
     * {
     *   src: `https://placedog.net/700/420?id=1`,
     *   srcset: `https://placedog.net/400/240?id=1 400w, https://placedog.net/700/420?id=1 700w`,
     *   sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
     *   alt: `Dogs are domesticated mammals, not natural wild animals.`,
     *   thumbnail: `https://placedog.net/100/60?id=1`
     * }
     *
     * @see {@link https://github.com/yifaneye/react-gallery-carousel/blob/3adffccaf131e69eb084736aa24a0a2b47268fa8/README.md#image-object-example}
     */

    interface Image {
        src: string;
        srcset?: string;
        sizes?: string;
        alt?: string;
        thumbnail?: string;
    }

    /**
     * Array of image(s) to be placed in the carousel. Each image object in the array has a required attribute 'src'.
     * @example
     * [
     *    {
     *      src: `https://placedog.net/700/420?id=1`,
     *      srcset: `https://placedog.net/400/240?id=1 400w, https://placedog.net/700/420?id=1 700w`,
     *      sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
     *      alt: `Dogs are domesticated mammals, not natural wild animals.`,
     *      thumbnail: `https://placedog.net/100/60?id=1`
     *    },
     *    {
     *      src: `https://placedog.net/700/420?id=2`,
     *      srcset: `https://placedog.net/400/240?id=2 400w, https://placedog.net/700/420?id=2 700w`,
     *      sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
     *      alt: `Dogs are domesticated mammals, not natural wild animals.`,
     *      thumbnail: `https://placedog.net/100/60?id=2`
     *    }
     * ]
     */

    type Images = Image[];

    // Carousel with children has optional images.
    interface CarouselWithChildren {
        images?: Images;
        children: React.ReactNode;
    }

    // Carousel has the props images mandatory if children do not exists.
    interface CarouselWithImages {
        images: Images;
        children?: React.ReactNode;
    }

    type ObjectFit = React.CSSProperties['objectFit'];

    /**
     * The Ref carousel element with the imperative handlers.
     * @see {@link https://github.com/yifaneye/react-gallery-carousel#handlers}
     */

    type CarouselRef<T = unknown> = T & {
        play(): void;
        pause(): void;
        toggleIsPlaying(): void;
        maximize(): void;
        minimize(): void;
        toggleIsMaximized(): void;
        goLeft(): void;
        goRight(): void;
        goToIndex(index: number): void;
    };

    /**
     * The available position for small widgets
     * @see https://github.com/yifaneye/react-gallery-carousel#small-widget-positions
     */

    type SmallWidgetPositions =
        | 'topLeft'
        | 'topCenter'
        | 'topRight'
        | 'centerLeft'
        | 'centerCenter'
        | 'centerRight'
        | 'bottomLeft'
        | 'bottomCenter'
        | 'bottomRight';

    /**
     * The available position for large widgets
     * @see
     */

    type LargeWidgetPositions = 'top' | 'bottom';

    /**
     * The props of the carousel
     * @see {@link https://github.com/yifaneye/react-gallery-carousel#props}
     */

    type CarouselProps = (CarouselWithChildren | CarouselWithImages) &
        Partial<{
            thumbnails: React.ReactNode;
            index: number;
            isRTL: boolean;
            isLoop: boolean;
            isMaximized: boolean;
            shouldLazyLoad: boolean;
            canAutoPlay: boolean;
            isAutoPlaying: boolean;
            autoPlayInterval: number;
            hasTransition: boolean;
            swipeThreshold: number;
            swipeRollBackSpeed: number;
            transitionSpeed: number;
            transitionDurationLimit: number;
            transitionDurationMin: number;
            transitionDurationMax: number;
            widgetsHasShadow: boolean;
            hasLeftButton: SmallWidgetPositions | boolean;
            hasRightButton: SmallWidgetPositions | boolean;
            hasMediaButton: SmallWidgetPositions | boolean;
            hasSizeButton: SmallWidgetPositions | boolean;
            hasIndexBoard: SmallWidgetPositions | boolean;
            hasDotButtons: LargeWidgetPositions | boolean;
            hasCaptions: LargeWidgetPositions | boolean;
            hasThumbnails: boolean;
            hasLeftButtonAtMax: SmallWidgetPositions | boolean;
            hasRightButtonAtMax: SmallWidgetPositions | boolean;
            hasMediaButtonAtMax: SmallWidgetPositions | boolean;
            hasSizeButtonAtMax: SmallWidgetPositions | boolean;
            hasIndexBoardButtonAtMax: SmallWidgetPositions | boolean;
            hasDotButtonsAtMax: LargeWidgetPositions | boolean;
            hasCaptionsAtMax: LargeWidgetPositions | boolean;
            hasThumbnailsAtMax: boolean;
            leftIcon: React.ReactNode;
            rightIcon: React.ReactNode;
            playIcon: React.ReactNode;
            pauseIcon: React.ReactNode;
            minIcon: React.ReactNode;
            maxIcon: React.ReactNode;
            activeIcon: React.ReactNode;
            passiveIcon: React.ReactNode;
            shouldSwipeOnMouse: boolean;
            shouldMaximizeOnClick: boolean;
            shouldMinimizeOnClick: boolean;
            shouldMinimizeOnSwipeDown: boolean;
            onIndexChange({ curIndex, curIndexForDisplay }: { curIndex: number; curIndexForDisplay: number }): void;
            onSwipeMoveX(displacementX: number): void;
            onSwipeMoveY(displacementY: number): void;
            onSwipeEndDown(): void;
            onTap(): void;
            objectFit: ObjectFit;
            objectFitAtMax: ObjectFit;
            zIndexAtMax: number;
            thumbnailWidth: string;
            thumbnailHeight: string;
            className: string;
            style: React.CSSProperties;
            ref: React.Ref<unknown>;
        }>;
}

/**
 * The carousel component.
 * @see {@link https://github.com/yifaneye/react-gallery-carousel#props}
 */
declare function Carousel(props: Carousel.CarouselProps): JSX.Element;
export = Carousel;
