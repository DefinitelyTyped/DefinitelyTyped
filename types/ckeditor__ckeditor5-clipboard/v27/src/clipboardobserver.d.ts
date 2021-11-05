import { DomEventObserver } from '@ckeditor/ckeditor5-engine';
import DataTransfer from './datatransfer';

export default class ClipboardObserver extends DomEventObserver {
    observe(domElement: HTMLElement, name?: string): void;
    onDomEvent(event: ClipboardEvent): void;
}

export interface ClipboardEventData {
    readonly dataTransfer: DataTransfer;
}
