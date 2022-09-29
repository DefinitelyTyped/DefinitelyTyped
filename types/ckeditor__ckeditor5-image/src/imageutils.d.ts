import { Plugin } from '@ckeditor/ckeditor5-core';
import { DocumentSelection, DowncastWriter, Element } from '@ckeditor/ckeditor5-engine';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/model/documentfragment';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import Selection, { Selectable } from '@ckeditor/ckeditor5-engine/src/model/selection';
import ViewDocumentSelection from '@ckeditor/ckeditor5-engine/src/view/documentselection';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import ViewSelection from '@ckeditor/ckeditor5-engine/src/view/selection';

export default class ImageUtils extends Plugin {
    static readonly pluginName: 'ImageUtils';
    /**
     * Checks if the provided model element is an `image` or `imageInline`.
     */
    isImage(modelElement: ModelElement): boolean;

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
     * Returns an image widget editing view element if one is selected or is among the selection's ancestors.
     */
    getClosestSelectedImageWidget(selection: ViewSelection | ViewDocumentSelection): ViewElement | null;

    /**
     * Returns a image model element if one is selected or is among the selection's ancestors.
     */
    getClosestSelectedImageElement(selection: Selection | DocumentSelection): Element | null;

    /**
     * Checks if image can be inserted at current model selection.
     */
    isImageAllowed(): boolean;

    /**
     * Converts a given {@link module:engine/view/element~Element} to an image widget:
     * * Adds a {@link module:engine/view/element~Element#_setCustomProperty custom property} allowing to recognize the image widget
     * element.
     * * Calls the {@link module:widget/utils~toWidget} function with the proper element's label creator.
     */
    toImageWidget(viewElement: ViewElement, writer: DowncastWriter, label: string): ViewElement;

    /**
     * Checks if a given view element is an image widget.
     */
    isImageWidget(viewElement: ViewElement): boolean;

    /**
     * Checks if the provided model element is an `image`.
     */
    isBlockImage(modelElement?: ModelElement | DocumentFragment | null): boolean;

    /**
     * Checks if the provided model element is an `imageInline`.
     */
    isInlineImage(modelElement?: ModelElement | null): boolean;

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
