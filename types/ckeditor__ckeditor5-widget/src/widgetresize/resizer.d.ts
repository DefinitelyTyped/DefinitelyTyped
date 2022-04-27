import { Rect } from '@ckeditor/ckeditor5-utils';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { ResizerOptions } from '../widgetresize';
import ResizerState from './resizerstate';

// tslint:disable-next-line:no-empty-interface
export default interface Resizer extends Observable {}

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
}
