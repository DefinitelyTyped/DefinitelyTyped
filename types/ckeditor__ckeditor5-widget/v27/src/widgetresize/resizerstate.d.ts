import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { ResizerOptions } from '../widgetresize';

export default class ResizeState implements Observable {
    activeHandlePosition: string | null;
    readonly aspectRatio: number;
    readonly originalHeight: number;
    readonly originalWidth: number;
    readonly originalWidthPercents: number;
    proposedHeightPixels: number | null;
    proposedWidthPercents: number | null;
    proposedWidthPixels: number | null;

    constructor(options: ResizerOptions);
    begin(domResizeHandle: HTMLElement, domHandleHost: HTMLElement, domResizeHost: HTMLElement): void;

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}
