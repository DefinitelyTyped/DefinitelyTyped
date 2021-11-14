import { Element } from '@ckeditor/ckeditor5-engine';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import ImageUtils from '../imageutils';

export function getCaptionFromImageModelElement(imageModelElement: Element): Element | null;
export function getCaptionFromModelSelection(imageUtils: ImageUtils, selection: Selection): Element | null;
export function matchImageCaptionViewElement(imageUtils: ImageUtils, element: ViewElement): { name: true } | null;
