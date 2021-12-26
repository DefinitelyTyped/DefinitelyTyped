import { Element } from '@ckeditor/ckeditor5-engine';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import ImageUtils from '../imageutils';

/**
 * Returns the caption model element from a given image element. Returns `null` if no caption is found.
 */
export function getCaptionFromImageModelElement(imageModelElement: Element): Element | null;

/**
 * Returns the caption model element for a model selection. Returns `null` if the selection has no caption element ancestor.
 */
export function getCaptionFromModelSelection(imageUtils: ImageUtils, selection: Selection): Element | null;

/**
 * Checks if a given element is a `<figcaption>` element that is placed
 * inside the image `<figure>` element.
 */
export function matchImageCaptionViewElement(imageUtils: ImageUtils, element: ViewElement): { name: true } | null;
