// Type definitions for react-photoswipe 1.3.0
// Project: https://github.com/minhtranite/react-photoswipe
// Definitions by: kwzm <https://github.com/kwzm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import { Item, Options } from 'photoswipe';

export function onClose(): void;

export function beforeChange(instance: PhotoSwipe): void;

export function afterChange(instance: PhotoSwipe): void;

export function imageLoadComplete(instance: PhotoSwipe, index: number, item: Item): void;

export function resize(instance: PhotoSwipe): void;

export function gettingData(instance: PhotoSwipe, index: number, item: Item): void;

export function mouseUsed(instance: PhotoSwipe): void;

export function initialZoomIn(instance: PhotoSwipe): void;

export function initialZoomInEnd(instance: PhotoSwipe): void;

export function initialZoomOut(instance: PhotoSwipe): void;

export function initialZoomOutEnd(instance: PhotoSwipe): void;

export function parseVerticalMargin(instance: PhotoSwipe, item: Item): void;

export function close(instance: PhotoSwipe): void;

export function unbindEvents(instance: PhotoSwipe): void;

export function destroy(instance: PhotoSwipe): void;

export function updateScrollOffset(instance: PhotoSwipe, _offset: { x: number; y: number }): void;

export function preventDragEvent(instance: PhotoSwipe, e: MouseEvent, isDown: boolean, preventObj: { prevent: boolean }): void;

export function shareLinkClick(instance: PhotoSwipe, e: MouseEvent, item: Item): void;

export interface PhotoSwipeProps {
    /**
     * is open
     */
    isOpen: boolean;
    /**
     * photoswipe item
     * {@link http://photoswipe.com/documentation/getting-started.html}
     */
    items: Array<Item>;
    /**
     * photoswipe options
     * {@link http://photoswipe.com/documentation/options.html}
     * @default {}
     */
    options?: Options;
    /**
     * Callback after PhotoSwipe close
     */
    onClose?: typeof onClose;
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
    beforeChange?: typeof beforeChange;
    /**
     * Photoswipe event listener
     * After slides change
     * (after content changed)
     * {@link https://photoswipe.com/documentation/api.html}
     */
    afterChange?: typeof afterChange;
    /**
     * Photoswipe event listener
     * Image loaded
     * {@link https://photoswipe.com/documentation/api.html}
     */
    imageLoadComplete?: typeof imageLoadComplete;
    /**
     * Photoswipe event listener
     * Viewport size changed
     * {@link https://photoswipe.com/documentation/api.html}
     */
    resize?: typeof resize;
    /**
     * Photoswipe event listener
     * Triggers when PhotoSwipe "reads" slide object data,
     * which happens before content is set, or before lazy-loading is initiated.
     * Use it to dynamically change properties
     * {@link https://photoswipe.com/documentation/api.html}
     */
    gettingData?: typeof gettingData;
    /**
     * Photoswipe event listener
     * Mouse was used (triggers only once)
     * {@link https://photoswipe.com/documentation/api.html}
     */
    mouseUsed?: typeof mouseUsed;
    /**
     * Photoswipe event listener
     * Opening zoom in animation starting
     * {@link https://photoswipe.com/documentation/api.html}
     */
    initialZoomIn?: typeof initialZoomIn;
    /**
     * Photoswipe event listener
     * Opening zoom in animation finished
     * {@link https://photoswipe.com/documentation/api.html}
     */
    initialZoomInEnd?: typeof initialZoomInEnd;
    /**
     * Photoswipe event listener
     * Closing zoom out animation started
     * {@link https://photoswipe.com/documentation/api.html}
     */
    initialZoomOut?: typeof initialZoomOut;
    /**
     * Photoswipe event listener
     * Closing zoom out animation finished
     * {@link https://photoswipe.com/documentation/api.html}
     */
    initialZoomOutEnd?: typeof initialZoomOutEnd;
    /**
     * Photoswipe event listener
     * Allows overriding vertical margin for individual items
     * {@link https://photoswipe.com/documentation/api.html}
     */
    parseVerticalMargin?: typeof parseVerticalMargin;
    /**
     * Photoswipe event listener
     * Gallery starts closing
     * {@link https://photoswipe.com/documentation/api.html}
     */
    close?: typeof close;
    /**
     * Photoswipe event listener
     * Gallery unbinds events
     * (triggers before closing animation)
     * {@link https://photoswipe.com/documentation/api.html}
     */
    unbindEvents?: typeof unbindEvents;
    /**
     * Photoswipe event listener
     * After gallery is closed and closing animation finished.
     * Clean up your stuff here.
     * {@link https://photoswipe.com/documentation/api.html}
     */
    destroy?: typeof destroy;
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
    updateScrollOffset?: typeof updateScrollOffset;
    /**
     * Photoswipe event listener
     * Allow to call preventDefault on down and up events
     * {@link https://photoswipe.com/documentation/api.html}
     */
    preventDragEvent?: typeof preventDragEvent;
    /**
     * Photoswipe event listener
     * Share link clicked
     * {@link https://photoswipe.com/documentation/api.html}
     */
    shareLinkClick?: typeof shareLinkClick;
}

export interface PhotoSwipeGalleryItem extends Item {
    thumbnail: string;
}

export interface PhotoSwipeGalleryProps extends Omit<PhotoSwipeProps, 'isOpen'> {
    /**
     * photoswipe item
     * {@link http://photoswipe.com/documentation/getting-started.html}
     */
    items: Array<PhotoSwipeGalleryItem>;
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

