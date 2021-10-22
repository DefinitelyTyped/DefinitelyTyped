import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import ContainerElement from '@ckeditor/ckeditor5-engine/src/view/containerelement';
import Resizer from './widgetresize/resizer';

export interface ResizerOptions {
    unit?: string | undefined;
    editor: Editor;
    getResizeHost(el: HTMLElement): HTMLElement;
    getHandleHost(el: HTMLElement): HTMLElement;
    isCentered(): boolean;
    modelElement: Element;
    onCommit(newValue: string): void;
    viewElement: ContainerElement;
}

export default class WidgetResize extends Plugin {
    static readonly pluginName: 'WidgetResize';
    init(): void;
    destroy(): void;

    visibleResizer: Resizer | null;
    attachTo(options?: ResizerOptions): Resizer;
    getResizerByViewElement(viewElement: ContainerElement): Resizer | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        WidgetResize: WidgetResize;
    }
}
