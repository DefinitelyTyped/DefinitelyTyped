// Type definitions for react-draft-wysiwyg 1.12
// Project: https://github.com/jpuri/react-draft-wysiwyg#readme
// Definitions by: imechZhangLY <https://github.com/imechZhangLY>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as Draft from 'draft-js';

export as namespace Wysiwyg;

declare namespace Wysiwyg {
    type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
    type SyntheticEvent = React.SyntheticEvent<{}>;
    type RawDraftContentState = Draft.RawDraftContentState;

    class EditorState extends Draft.EditorState {}
    class ContentState extends Draft.ContentState {}
    class ContentBlock extends Draft.ContentBlock {}
    class SelectionState extends Draft.SelectionState {}

    interface EditorProps {
        onChange?(contentState: ContentState): RawDraftContentState;
        onEditorStateChange?(editorState: EditorState): void;
        onContentStateChange?(contentState: ContentState): RawDraftContentState;
        initialContentState?: RawDraftContentState;
        defaultContentState?: RawDraftContentState;
        contentState?: RawDraftContentState;
        editorState?: EditorState;
        defaultEditorState?: EditorState;
        toolbarOnFocus?: boolean;
        spellCheck?: boolean;
        stripPastedStyles?: boolean;
        toolbar?: object;
        toolbarCustomButtons?: Array<React.ReactElement<HTMLElement>>;
        toolbarClassName?: string;
        toolbarHidden?: boolean;
        locale?: string;
        localization?: object;
        editorClassName?: string;
        wrapperClassName?: string;
        toolbarStyle?: object;
        editorStyle?: React.CSSProperties;
        wrapperStyle?: React.CSSProperties;
        uploadCallback?(file: object): Promise<object>;
        onFocus?(event: SyntheticEvent): void;
        onBlur?(event: SyntheticEvent): void;
        onTab?(event: SyntheticKeyboardEvent): void;
        mention?: object;
        hashtag?: object;
        textAlignment?: string;
        tabIndex?: number;
        ariaLabel?: string;
        ariaOwneeID?: string;
        ariaActiveDescendantID?: string;
        ariaAutoComplete?: string;
        ariaDescribedBy?: string;
        ariaExpanded?: string;
        ariaHasPopup?: string;
        customBlockRenderFunc?(block: ContentBlock): any;
        wrapperId?: number;
        customDecorators?: object[];
        editorRef?(ref: object): void;
        handlePastedText?(text: string, html: string, editorState: EditorState, onChange: (editorState: EditorState) => void): boolean;
    }

    class Editor extends React.Component<EditorProps, {}> {
        focusEditor(): void;
    }
}

import Editor = Wysiwyg.Editor;
import EditorProps = Wysiwyg.EditorProps;
import EditorState = Wysiwyg.EditorState;
import ContentState = Wysiwyg.EditorState;
import ContentBlock = Wysiwyg.ContentBlock;
import RawDraftContentState = Wysiwyg.RawDraftContentState;
import SelectionState = Wysiwyg.SelectionState;

export {
    Editor,
    EditorProps,
    EditorState,
    ContentState,
    ContentBlock,
    RawDraftContentState,
    SelectionState
};
