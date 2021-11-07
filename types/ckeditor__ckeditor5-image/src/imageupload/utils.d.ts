import Element from '@ckeditor/ckeditor5-engine/src/view/element';
import Node from '@ckeditor/ckeditor5-engine/src/view/node';
import ImageUtils from '../imageutils';

export function createImageTypeRegExp(types: string[]): RegExp;
export function fetchLocalImage(image: Element): Promise<File>;
export function isLocalImage(imageUtils: ImageUtils, node: Node): boolean;
