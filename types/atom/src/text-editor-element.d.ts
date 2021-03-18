import { Disposable, PixelPosition, PointLike, TextEditor, TextEditorComponent } from '../index';

/**
 *  Undocumented: Custom HTML elemnent for TextEditor, atom-text-editor
 */
export interface TextEditorElement extends HTMLElement {
    getModel(): TextEditor;
    getComponent(): TextEditorComponent;
    /**
     * Extended: Get a promise that resolves the next time the element's
     * DOM is updated in any way.
     */
    getNextUpdatePromise(): Promise<void>;

    /** Extended: get the width of an `x` character displayed in this element. */
    getBaseCharacterWidth(): number;

    /** Essential: Scrolls the editor to the top. */
    scrollToTop(): void;

    /** Essential: Scrolls the editor to the bottom. */
    scrollToBottom(): void;

    hasFocus(): boolean;

    setScrollTop(scrollTop: number): void;
    getScrollTop(): number;

    setScrollLeft(scrollLeft: number): void;
    getScrollLeft(): number;

    getScrollHeight(): number;

    /** Extended: Converts a buffer position to a pixel position. */
    pixelPositionForBufferPosition(bufferPosition: PointLike): PixelPosition;

    /** Extended: Converts a screen position to a pixel position. */
    pixelPositionForScreenPosition(screenPosition: PointLike): PixelPosition;

    // Event subscription
    onDidChangeScrollTop(callback: (scrollTop: number) => void): Disposable;
    onDidChangeScrollLeft(callback: (scrollLeft: number) => void): Disposable;
    /** Called when the editor is attached to the DOM. */
    onDidAttach(callback: () => void): Disposable;
    /** Called when the editor is detached from the DOM. */
    onDidDetach(callback: () => void): Disposable;
}
