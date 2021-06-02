import { DowncastWriter, Element, Model } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import DocumentSelection from '@ckeditor/ckeditor5-engine/src/view/documentselection';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import Selection from '@ckeditor/ckeditor5-engine/src/view/selection';

export function toImageWidget(viewElement: ViewElement, writer: DowncastWriter, label?: string): ViewElement;
export function isImageWidget(viewElement: ViewElement): boolean;
export function getSelectedImageWidget(selection: Selection | DocumentSelection): ViewElement | null;
export function isImage(modelElement: Element): boolean;
export function insertImage(model: Model, attributes?: Record<string, string>, insertPosition?: Position): void;
export function isImageAllowed(model: Model): boolean;
export function getViewImgFromWidget(figureView: ViewElement): ViewElement;
