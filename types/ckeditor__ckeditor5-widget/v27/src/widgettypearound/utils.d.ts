import { DocumentSelection, DomConverter } from '@ckeditor/ckeditor5-engine';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Element from '@ckeditor/ckeditor5-engine/src/view/element';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';

export const TYPE_AROUND_SELECTION_ATTRIBUTE: 'widget-type-around';

export function getClosestTypeAroundDomButton(domElement: HTMLElement): HTMLElement | null;
export function getClosestWidgetViewElement(domElement: HTMLElement, domConverter: DomConverter): Element;
export function getTypeAroundButtonPosition(domElement: HTMLElement): 'before' | 'after';
export function getTypeAroundFakeCaretPosition(selection: Selection | DocumentSelection): 'before' | 'after' | null;
export function isTypeAroundWidget(viewElement: Element, modelElement: ModelElement, schema: Schema): boolean;
