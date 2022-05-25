import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter } from '@ckeditor/ckeditor5-engine';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import ContainerElement from '@ckeditor/ckeditor5-engine/src/view/containerelement';
import DocumentSelection from '@ckeditor/ckeditor5-engine/src/model/documentselection';
import ModelSelection from '@ckeditor/ckeditor5-engine/src/model/selection';
import { MatcherPattern } from '@ckeditor/ckeditor5-engine/src/view/matcher';

/**
 * Creates a view element representing the inline image.
 *
 *    <span class="image-inline"><img></img></span>
 *
 * Note that `alt` and `src` attributes are converted separately, so they are not included.
 */
export function createInlineImageViewElement(writer: DowncastWriter): ContainerElement;

/**
 * Creates a view element representing the block image.
 *
 *    <figure class="image"><img></img></figure>
 *
 * Note that `alt` and `src` attributes are converted separately, so they are not included.
 */
export function createBlockImageViewElement(writer: DowncastWriter): ContainerElement;

/**
 * A function returning a `MatcherPattern` for a particular type of View images.
 */
export function getImgViewElementMatcher(editor: Editor, matchImageType: 'imageBlock' | 'imageInline'): MatcherPattern;

/**
 * Considering the current model selection, it returns the name of the model image element
 * (`'imageBlock'` or `'imageInline'`) that will make most sense from the UX perspective if a new
 * image was inserted (also: uploaded, dropped, pasted) at that selection.
 *
 * The assumption is that inserting images into empty blocks or on other block widgets should
 * produce block images. Inline images should be inserted in other cases, e.g. in paragraphs
 * that already contain some text.
 */
export function determineImageTypeForInsertionAtSelection(
    schema: Schema,
    selection: ModelSelection | DocumentSelection,
): 'imageBlock' | 'imageInline';
