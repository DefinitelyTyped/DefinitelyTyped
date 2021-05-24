import { Rect } from '@ckeditor/ckeditor5-utils';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { ResizerOptions } from '../widgetresize';
import ResizerState from './resizerstate';

export default class Resizer implements Observable {
    constructor(options: ResizerOptions);
    readonly state: ResizerState;
    attach(): void;
    begin(domResizeHandle: HTMLElement): void;
    cancel(): void;
    commit(): void;
    destroy(): void;
    redraw(handleHostRect?: Rect): void;
    updateSize(domEventData: Event): void;

    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}
