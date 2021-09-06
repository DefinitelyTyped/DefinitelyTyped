import { Plugin } from '@ckeditor/ckeditor5-core';
import { DocumentSelection, Element } from '@ckeditor/ckeditor5-engine';
import Selection, { Selectable } from '@ckeditor/ckeditor5-engine/src/model/selection';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';

export default class ImageUtils extends Plugin {
    static readonly pluginName: 'ImageUtils';
    /**
     * Checks if the provided model element is an `image` or `imageInline`.
     */
    isImage(modelElement?: Element | null): boolean;

    /**
     * Checks if the provided view element represents an inline image.
     *
     * Also, see {@link module:image/imageutils~ImageUtils#isImageWidget}.
     */
    isInlineImageView(element: ViewElement): boolean;

    /**
     * Checks if the provided view element represents a block image.
     *
     * Also, see {@link module:image/imageutils~ImageUtils#isImageWidget}.
     */
    isBlockImageView(element: ViewElement): boolean;

    /**
     * Handles inserting single file. This method unifies image insertion using {@link module:widget/utils~findOptimalInsertionRange}
     * method.
     *
     *    editor.plugins.get( 'ImageUtils' );
     *
     *    imageUtils.insertImage( { src: 'path/to/image.jpg' } );
     */
    insertImage(
        attributes?: Record<string, unknown>,
        selectable?: Selectable,
        imageType?: 'imageBlock' | 'imageInline',
    ): ViewElement | null;

    /**
     * Returns a image model element if one is selected or is among the selection's ancestors.
     */
    getClosestSelectedImageElement(selection: Selection | DocumentSelection): Element | null;

    /**
     * Checks if the provided model element is an `image`.
     */
    isBlockImage(modelElement?: Element | null): boolean;

    /**
     * Checks if the provided model element is an `imageInline`.
     */
    isInlineImage(modelElement?: Element | null): boolean;

    /**
     * Get the view `<img>` from another view element, e.g. a widget (`<figure class="image">`), a link (`<a>`).
     *
     * The `<img>` can be located deep in other elements, so this helper performs a deep tree search.
     */
    findViewImgElement(figureView: ViewElement): ViewElement;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageUtils: ImageUtils;
    }
}
