import { Plugin } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import ImageUtils from '../imageutils';

/**
 * The image caption utilities plugin.
 */
export default class ImageCaptionUtils extends Plugin {
    static readonly pluginName: 'ImageCaptionUtils';
    static readonly requires: [typeof ImageUtils];

    /**
     * Returns the caption model element from a given image element. Returns `null` if no caption is found.
     */
    getCaptionFromImageModelElement(imageModelElement: Element): Element | null;

    /**
     * Returns the caption model element for a model selection. Returns `null` if the selection has no caption element ancestor.
     */
    getCaptionFromModelSelection(selection: Selection): Element | null;

    /**
     * {@link module:engine/view/matcher~Matcher} pattern. Checks if a given element is a `<figcaption>` element that is placed
     * inside the image `<figure>` element.
     */
    matchImageCaptionViewElement(element: ViewElement): { name: true } | null;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageCaptionUtils: ImageCaptionUtils;
    }
}
