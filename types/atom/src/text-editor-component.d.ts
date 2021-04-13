import { PixelPosition, Point, PointLike } from '../index';

/**
 *  Undocumented: Rendering component for TextEditor
 */
export interface TextEditorComponent {
    /** Does not clip screenPosition, unlike similar method on TextEditorElement */
    pixelPositionForScreenPosition(screenPosition: PointLike): PixelPosition;
    screenPositionForPixelPosition(pos: PixelPosition): Point;
    pixelPositionForMouseEvent(event: { clientX: number; clientY: number }): PixelPosition;
    screenPositionForMouseEvent(event: { clientX: number; clientY: number }): Point;
}
