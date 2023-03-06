import { DocumentSelection, DowncastWriter, Model, Range } from '@ckeditor/ckeditor5-engine';
import { HighlightDescriptor } from '@ckeditor/ckeditor5-engine/src/conversion/downcasthelpers';
import Mapper from '@ckeditor/ckeditor5-engine/src/conversion/mapper';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import EditableElement from '@ckeditor/ckeditor5-engine/src/view/editableelement';
import Element from '@ckeditor/ckeditor5-engine/src/view/element';
import Node from '@ckeditor/ckeditor5-engine/src/view/node';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';

export const WIDGET_CLASS_NAME: 'ck-widget';
export const WIDGET_SELECTED_CLASS_NAME: 'ck-widget_selected';

export function checkSelectionOnObject(selection: Selection | DocumentSelection, schema: Schema): boolean;
/**
 * Returns a model range which is optimal (in terms of UX) for inserting a widget block.
 *
 * For instance, if a selection is in the middle of a paragraph, the collapsed range before this paragraph
 * will be returned so that it is not split. If the selection is at the end of a paragraph,
 * the collapsed range after this paragraph will be returned.
 *
 * Note: If the selection is placed in an empty block, the range in that block will be returned. If that range
 * is then passed to {@link module:engine/model/model~Model#insertContent}, the block will be fully replaced
 * by the inserted widget block.
 */
export function findOptimalInsertionRange(selection: Selection | DocumentSelection, model: Model): Range;
export function getLabel(element: Element): string;
export function isWidget(node: Node): boolean;
export function setHighlightHandling(
    element: Element,
    writer: DowncastWriter,
    add?: (descriptor: HighlightDescriptor, writer: DowncastWriter) => void,
    remove?: (id: string, writer: DowncastWriter) => void,
): void;
export function setLabel(element: Element, labelOrCreator: string | (() => string), writer: DowncastWriter): void;
export function toWidget(
    element: Element,
    writer: DowncastWriter,
    options?: { label?: string | (() => string) | undefined; hasSelectionHandle?: boolean | undefined },
): Element;
export function toWidgetEditable(editable: EditableElement, writer: DowncastWriter): EditableElement;
export function viewToModelPositionOutsideModelElement(
    model: Model,
    viewElementMatcher: (viewElement: Element) => boolean,
): (
    evt: EventInfo,
    data: {
        mapper: Mapper;
        viewPosition: Position;
    },
) => void;
