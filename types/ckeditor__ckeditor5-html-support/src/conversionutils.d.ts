import { DowncastWriter } from '@ckeditor/ckeditor5-engine';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';

/**
 * Helper function for downcast converter. Sets attributes on the given view element.
 */
export function setViewAttributes(
    writer: DowncastWriter,
    viewAttributes: Record<string, unknown>,
    viewElement: ViewElement,
): void;

/**
 * Merges view element attribute objects.
 */
export function mergeViewElementAttributes<X extends Record<string, unknown>, Y extends Record<string, unknown>>(
    target: X,
    source: Y
): X & Y;
