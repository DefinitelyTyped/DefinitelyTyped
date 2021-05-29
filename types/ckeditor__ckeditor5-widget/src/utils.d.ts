import { DocumentSelection, DowncastWriter, Model } from '@ckeditor/ckeditor5-engine';
import { HighlightDescriptor } from '@ckeditor/ckeditor5-engine/src/conversion/downcasthelpers';
import Mapper from '@ckeditor/ckeditor5-engine/src/conversion/mapper';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import EditableElement from '@ckeditor/ckeditor5-engine/src/view/editableelement';
import Element from '@ckeditor/ckeditor5-engine/src/view/element';
import Node from '@ckeditor/ckeditor5-engine/src/view/node';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import { Rect } from '@ckeditor/ckeditor5-utils';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';

export const WIDGET_CLASS_NAME: 'ck-widget';
export const WIDGET_SELECTED_CLASS_NAME: 'ck-widget_selected';

export function centeredBalloonPositionForLongWidgets(widgetRect: Rect, balloonRect: Rect): Position | null;
export function checkSelectionOnObject(selection: Selection | DocumentSelection, schema: Schema): boolean;
export function findOptimalInsertionPosition(selection: Selection | DocumentSelection, model: Model): Position;
export function getLabel(element: Element): string;
export function isWidget(node: Node): boolean;
export function setHighlightHandling(
    element: Element,
    writer: DowncastWriter,
    add: (descriptor: HighlightDescriptor, writer: DowncastWriter) => void,
    remove: (id: string, writer: DowncastWriter) => void,
): void;
export function setLabel(element: Element, labelOrCreator: string | (() => string), writer: DowncastWriter): void;
export function toWidget(
    element: Element,
    writer: DowncastWriter,
    options?: { label?: string | (() => string); hasSelectionHandle?: boolean },
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
