// Type definitions for braft-editor 1.9
// Project: https://github.com/margox/braft#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
		contentFormat?: 'raw' | 'html';
		initialContent?: string | null;
		contentId?: string | number;
		onChange?: (content: RawDraftContentState) => void;
		onRawChange?: (content: RawDraftContentState) => void;
		onHTMLChange?: (content: string) => void;
		onTab?: (event: Event) => void;
		onSave?: () => void;
		onFocus?: () => void;
		onBlur?: () => void;
		controls?: string[];
		excludeControls?: string[];
		extendControls?: any[];
		extendAtomics?: any[];
		disabled?: boolean;
		height?: number;
		language?: string;
		placeholder?: string;
		viewWrapper?: string;
		tabIndents?: number;
		forceNewLine?: boolean;
		textAlignOptions?: string[];
		colors?: string[];
		allowSetTextBackgroundColor?: boolean;
		fontSizes?: number[];
		lineHeights?: number[];
		letterSpacings?: number[];
		indents?: number[];
		fontFamilies?: fontFamiliesRange[];
		emojis?: string[];
		pasteMode?: 'text' | '';
		media?: { [key: string]: any };
		imageControls?: any;
		getContent?: (format?: string) => RawDraftContentState;
		setContent?: (content: RawDraftContentState, format?: string) => void;
		toggleSelectionBlockType?: (blockquote: string) => any;
		toggleSelectionInlineStyle?: (style: string, stylesToBeRemoved?: string[]) => any;
		insertMedias?: (medias: Array<{ type: string, name: string, url: string }>) => any;
		insertText?: (text: string, replace?: boolean) => any;
		insertHTML?: (htmlString: string) => any;
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
		isEmpty?: () => boolean;
		clear?: () => any;
		undo?: () => any;
		redo?: () => any;
		focus?: () => any;
		blur?: () => any;
	}
}
declare class BraftEditor extends React.Component<BraftEditor.editorProps> { }
