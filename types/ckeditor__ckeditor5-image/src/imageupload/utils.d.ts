import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import ViewNode from '@ckeditor/ckeditor5-engine/src/view/node';
import ImageUtils from '../imageutils';

/**
 * Creates a regular expression used to test for image files.
 *
 *    const imageType = createImageTypeRegExp( [ 'png', 'jpeg', 'svg+xml', 'vnd.microsoft.icon' ] );
 *
 *    console.log( 'is supported image', imageType.test( file.type ) );
 */
export function createImageTypeRegExp(types: string[]): RegExp;
/**
 * Creates a promise that fetches the image local source (Base64 or blob) and resolves with a `File` object.
 */
export function fetchLocalImage(image: ViewElement): Promise<File>;
/**
 * Checks whether a given node is an image element with a local source (Base64 or blob).
 */
export function isLocalImage(imageUtils: ImageUtils, node: ViewNode): boolean;
