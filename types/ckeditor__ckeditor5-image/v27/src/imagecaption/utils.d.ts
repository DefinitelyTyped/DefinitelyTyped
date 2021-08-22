import { DowncastWriter, Element } from '@ckeditor/ckeditor5-engine';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import View from '@ckeditor/ckeditor5-engine/src/view/view';

export function captionElementCreator(view: View, placeholderText: string): (writer: DowncastWriter) => void;
export function isCaption(viewElement: ViewElement): boolean;
export function getCaptionFromImage(imageModelElement: Element): Element | null;
export function matchImageCaption(element: ViewElement): { name: true } | null;
