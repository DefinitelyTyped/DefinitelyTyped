import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import UpcastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import ImageUtils from '../imageutils';

/**
 * Returns a function that converts the image view representation:
 *
 *    <figure class="image"><img src="..." alt="..."></img></figure>
 *
 * to the model representation:
 *
 *    <imageBlock src="..." alt="..."></imageBlock>
 *
 * The entire content of the `<figure>` element except the first `<img>` is being converted as children
 * of the `<imageBlock>` model element.
 */
export function upcastImageFigure(imageUtils: ImageUtils): (dispatcher: UpcastDispatcher) => void;

/**
 * Returns a function that converts the image view representation:
 *
 *    <picture><source ... /><source ... />...<img ... /></picture>
 *
 * to the model representation as the `sources` attribute:
 *
 *    <image[Block|Inline] ... sources="..."></image[Block|Inline]>
 */
export function upcastPicture(imageUtils: ImageUtils): (dispatcher: UpcastDispatcher) => void;

/**
 * Converter used to convert the `srcset` model image attribute to the `srcset`, `sizes` and `width` attributes in the view.
 */
export function downcastSrcsetAttribute(
    imageUtils: ImageUtils,
    imageType: 'imageBlock' | 'imageInline',
): (dispatcher: DowncastDispatcher) => void;

/**
 * Converts the `source` model attribute to the `<picture><source /><source />...<img /></picture>`
 * view structure.
 */
export function downcastSourcesAttribute(imageUtils: ImageUtils): (dispatcher: DowncastDispatcher) => void;

/**
 * Converter used to convert a given image attribute from the model to the view.
 */
export function downcastImageAttribute(
    imageUtils: ImageUtils,
    imageType: 'imageBlock' | 'imageInline',
    attributeKey: string,
): (dispatcher: DowncastDispatcher) => void;
