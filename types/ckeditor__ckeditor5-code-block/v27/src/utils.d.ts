import { Editor } from '@ckeditor/ckeditor5-core';
import { Model, UpcastWriter } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Text from '@ckeditor/ckeditor5-engine/src/model/text';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import { CodeBlockLanguageDefinition } from './codeblock';

export function getNormalizedAndLocalizedLanguageDefinitions(editor: Editor): CodeBlockLanguageDefinition[];

export function getPropertyAssociation(
    languageDefs: CodeBlockLanguageDefinition[],
    key: string,
    value: string,
): Record<string, string>;

export function getLeadingWhiteSpaces(textNode: Text): string;

export function rawSnippetTextToViewDocumentFragment(writer: UpcastWriter, text: string): DocumentFragment;

export function getIndentOutdentPositions(model: Model): Position[];

export function isModelSelectionInCodeBlock(selection: Selection): boolean;
