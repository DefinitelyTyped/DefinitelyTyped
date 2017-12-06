// Type definitions for braft-editor 1.1
// Project: https://github.com/margox/braft#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import { RawDraftContentState } from 'draft-js';
export as namespace BraftEditor;
export = BraftEditor;
declare namespace BraftEditor {
	interface fontFamiliesRange {
		name: string;
		family: string;
	}
	interface editorProps {
		editorState?: any;
		contentFormat?: RawDraftContentState;
		initialContent?: RawDraftContentState | null;
		onChange?: (content: RawDraftContentState) => void;
		onRawChange?: (content: RawDraftContentState) => void;
		onHTMLChange?: (content: string) => void;
		controls?: string[];
		extendControls?: any[];
		height?: number;
		language?: string;
		placeholder?: string;
		viewWrapper?: string;
		colors?: string[];
		fontSizes?: number[];
		fontFamilies?: fontFamiliesRange[];
		media?: { [key: string]: any };
		getContent?: (format?: string) => RawDraftContentState;
		setContent?: (content: RawDraftContentState, format?: string) => void;
		toggleSelectionBlockType?: (blockquote: string) => any;
		toggleSelectionInlineStyle?: (style: string, stylesToBeRemoved?: string[]) => any;
		insertMedias?: (medias: Array<{ type: string, name: string, url: string }>) => void;
		insertText?: (text: string, replace?: boolean) => void;
		toggleSelectionLink?: (href: string, target: string) => void;
		toggleSelectionAlignment?: (alignment: string) => any;
		toggleSelectionColor?: (hexColor: string) => void;
		toggleSelectionBackgroundColor?: (hexColor: string) => void;
		toggleSelectionFontSize?: (fontSize: number) => void;
		toggleSelectionFontFamily?: (fontFamily: string) => void;
		selectionCollapsed?: () => boolean;
		selectionHasInlineStyle?: () => boolean;
		getSelectionBlockType?: () => string;
		getEditorState?: () => void;
		forceRender?: () => void;
		getDraftInstance?: () => any;
		getMediaLibraryInstance?: () => any;
		getSelectionInlineStyle?: () => any;
		undo?: () => any;
		redo?: () => any;
		focus?: () => void;
		blur?: () => void;
	}
}
declare class BraftEditor extends React.Component<BraftEditor.editorProps> { }
