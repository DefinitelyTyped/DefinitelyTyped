import { Editor } from '@ckeditor/ckeditor5-core';
import { KeyEventData } from '@ckeditor/ckeditor5-engine/src/view/observer/keyobserver';

export default function injectUnsafeKeystrokesHandling(editor: Editor): void;

export function isNonTypingKeystroke(keyData: KeyEventData): boolean;
