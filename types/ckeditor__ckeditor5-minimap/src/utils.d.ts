import { Editor } from '@ckeditor/ckeditor5-core';
import { Rect } from '@ckeditor/ckeditor5-utils';

/**
 * Clones the editing view DOM root by using a dedicated pair of {@link module:engine/view/renderer~Renderer} and
 * {@link module:engine/view/domconverter~DomConverter}. The DOM root clone updates incrementally to stay in sync with the
 * source root.
 */
export function cloneEditingViewDomRoot(editor: Editor, rootName: string): HTMLElement;

/**
 * Harvests all web page styles, for instance, to allow re-using them in an `<iframe>` preserving the look of the content.
 *
 * The returned data format is as follows:
 *
 *    [
 *      'p { color: red; ... } h2 { font-size: 2em; ... } ...',
 *      '.spacing { padding: 1em; ... }; ...',
 *      '...',
 *      { href: 'http://link.to.external.stylesheet' },
 *      { href: '...' }
 *    ]
 *
 * **Note**: For stylesheets with `href` different than window origin, an object is returned because
 * accessing rules of these styles may cause CORS errors (depending on the configuration of the web page).
 */
export function getPageStyles(): Array<{ href: string } | string>;

export function getDomElementRect(domElement: HTMLElement): Rect;

export function getClientHeight(domElement: HTMLElement): number;

export function getScrollable(domElement: HTMLElement): Window | HTMLElement;

/**
 * Returns the closest scrollable ancestor of a DOM element.
 */
export function findClosestScrollableAncestor(domElement: HTMLElement): HTMLElement | null;
