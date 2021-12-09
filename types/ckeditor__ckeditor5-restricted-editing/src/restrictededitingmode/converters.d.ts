import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, Element } from '@ckeditor/ckeditor5-engine';
import UpcastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import { MatcherPattern } from '@ckeditor/ckeditor5-engine/src/view/matcher';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

export function setupExceptionHighlighting(editor: Editor): void;

export function resurrectCollapsedMarkerPostFixer(editor: Editor): (writer: DowncastWriter) => void;

export function extendMarkerOnTypingPostFixer(editor: Editor): (writer: DowncastWriter) => void;

export function upcastHighlightToMarker(config: {
    view?: MatcherPattern | undefined;
    model: ((el: ViewElement) => Element) | Element;
    converterPriority: PriorityString;
}): (dispatcher: UpcastDispatcher) => void;
