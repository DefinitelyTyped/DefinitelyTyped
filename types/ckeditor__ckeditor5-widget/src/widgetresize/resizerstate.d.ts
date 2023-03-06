import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { ResizerOptions } from '../widgetresize';

// tslint:disable-next-line:no-empty-interface
export default interface ResizeState extends Observable {}

export default class ResizeState implements Observable {
    constructor(options: ResizerOptions);
    activeHandlePosition: string | null;
    readonly aspectRatio: number;
    readonly originalHeight: number;
    readonly originalWidth: number;
    readonly originalWidthPercents: number;
    proposedHeightPixels: number | null;
    proposedWidthPercents: number | null;
    proposedWidthPixels: number | null;
    begin(domResizeHandle: HTMLElement, domHandleHost: HTMLElement, domResizeHost: HTMLElement): void;
}
