// Type definitions for react-photoswipe 1.3
// Project: https://github.com/minhtranite/react-photoswipe
// Definitions by: kwzm <https://github.com/kwzm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as React from 'react';
import { Item, Options } from 'photoswipe';

export interface PhotoSwipeProps {
    /**
     * is open
     */
    isOpen: boolean;
    /**
     * photoswipe item
     * {@link http://photoswipe.com/documentation/getting-started.html}
     */
    items: Item[];
    /**
     * photoswipe options
     * {@link http://photoswipe.com/documentation/options.html}
     * @default {}
     */
    options?: Options;
    /**
     * Callback after PhotoSwipe close
     */
    onClose?: () => void;
    /**
     * id
     */
    id?: string;
    /**
     * class name
     * @default pswp
     */
    className?: string;
    /**
     * Photoswipe event listener
     * Before slides change
     * (before the content is changed, but after navigation)
     * Update UI here (like "1 of X" indicator)
     * {@link https://photoswipe.com/documentation/api.html}
     */
    beforeChange?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * After slides change
     * (after content changed)
     * {@link https://photoswipe.com/documentation/api.html}
     */
    afterChange?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Image loaded
     * {@link https://photoswipe.com/documentation/api.html}
     */
    imageLoadComplete?: (instance: PhotoSwipe, index: number, item: Item) => void;
    /**
     * Photoswipe event listener
     * Viewport size changed
     * {@link https://photoswipe.com/documentation/api.html}
     */
    resize?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Triggers when PhotoSwipe "reads" slide object data,
     * which happens before content is set, or before lazy-loading is initiated.
     * Use it to dynamically change properties
     * {@link https://photoswipe.com/documentation/api.html}
     */
    gettingData?: (instance: PhotoSwipe, index: number, item: Item) => void;
    /**
     * Photoswipe event listener
     * Mouse was used (triggers only once)
     * {@link https://photoswipe.com/documentation/api.html}
     */
    mouseUsed?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Opening zoom in animation starting
     * {@link https://photoswipe.com/documentation/api.html}
     */
    initialZoomIn?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Opening zoom in animation finished
     * {@link https://photoswipe.com/documentation/api.html}
     */
    initialZoomInEnd?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Closing zoom out animation started
     * {@link https://photoswipe.com/documentation/api.html}
     */
    initialZoomOut?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Closing zoom out animation finished
     * {@link https://photoswipe.com/documentation/api.html}
     */
    initialZoomOutEnd?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Allows overriding vertical margin for individual items
     * {@link https://photoswipe.com/documentation/api.html}
     */
    parseVerticalMargin?: (instance: PhotoSwipe, item: Item) => void;
    /**
     * Photoswipe event listener
     * Gallery starts closing
     * {@link https://photoswipe.com/documentation/api.html}
     */
    close?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Gallery unbinds events
     * (triggers before closing animation)
     * {@link https://photoswipe.com/documentation/api.html}
     */
    unbindEvents?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * After gallery is closed and closing animation finished.
     * Clean up your stuff here.
     * {@link https://photoswipe.com/documentation/api.html}
     */
    destroy?: (instance: PhotoSwipe) => void;
    /**
     * Photoswipe event listener
     * Called when the page scrolls.
     * The callback is passed an offset with properties {x: number, y: number}.
     *
     * PhotoSwipe uses the offset to determine the top-left of the template,
     * which by default is the top-left of the viewport. When using modal: false,
     * you should listen to this event (before calling .init()) and modify the offset
     * with the template's getBoundingClientRect().
     *
     * Look at the "Implementing inline gallery display" FAQ section for more info.
     * {@link https://photoswipe.com/documentation/api.html}
     */
    updateScrollOffset?: (instance: PhotoSwipe, _offset: { x: number; y: number }) => void;
    /**
     * Photoswipe event listener
     * Allow to call preventDefault on down and up events
     * {@link https://photoswipe.com/documentation/api.html}
     */
    preventDragEvent?: (instance: PhotoSwipe, e: MouseEvent, isDown: boolean, preventObj: { prevent: boolean }) => void;
    /**
     * Photoswipe event listener
     * Share link clicked
     * {@link https://photoswipe.com/documentation/api.html}
     */
    shareLinkClick?: (instance: PhotoSwipe, e: MouseEvent, item: Item) => void;
}

export interface PhotoSwipeGalleryItem extends Item {
    thumbnail: string;
}

export interface PhotoSwipeGalleryProps extends Omit<PhotoSwipeProps, 'isOpen'> {
    /**
     * photoswipe item
     * {@link http://photoswipe.com/documentation/getting-started.html}
     */
    items: PhotoSwipeGalleryItem[];
    /**
     * is open
     * @default false
     */
    isOpen?: boolean;
    /**
     * class name
     * @default pswp-gallery
     */
    className?: string;
    /**
     * Thumbnail content
     * @default <img src={item.src} width='100' height='100'/>
     */
    thumbnailContent: (item: PhotoSwipeGalleryItem) => React.ReactNode;
}

export class PhotoSwipe extends React.Component<PhotoSwipeProps> { }

export class PhotoSwipeGallery extends React.Component<PhotoSwipeGalleryProps> { }
