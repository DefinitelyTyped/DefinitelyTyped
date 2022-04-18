// Type definitions for react-draft-wysiwyg 1.13
// Project: https://github.com/jpuri/react-draft-wysiwyg#readme
// Definitions by: imechZhangLY <https://github.com/imechZhangLY>
//                 brunoMaurice <https://github.com/brunoMaurice>
//                 ldanet <https://github.com/ldanet>
//                 Munif Tanjim <https://github.com/MunifTanjim>
//                 Nathan Zeplowitz <https://github.com/n-zeplo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from "react";
import * as Draft from "draft-js";

export type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
export type SyntheticEvent = React.SyntheticEvent<{}>;
export type RawDraftContentState = Draft.RawDraftContentState;

export class EditorState extends Draft.EditorState {}
export class ContentState extends Draft.ContentState {}
export class ContentBlock extends Draft.ContentBlock {}
export class SelectionState extends Draft.SelectionState {}

export interface EditorProps {
    webDriverTestID?: string | undefined;
    onChange?(contentState: RawDraftContentState): void;
    onEditorStateChange?(editorState: EditorState): void;
    onContentStateChange?(contentState: RawDraftContentState): void;
    initialContentState?: RawDraftContentState | undefined;
    defaultContentState?: RawDraftContentState | undefined;
    contentState?: RawDraftContentState | undefined;
    editorState?: EditorState | undefined;
    defaultEditorState?: EditorState | undefined;
    toolbarOnFocus?: boolean | undefined;
    spellCheck?: boolean | undefined;
    stripPastedStyles?: boolean | undefined;
    toolbar?: object | undefined;
    toolbarCustomButtons?: Array<React.ReactElement<HTMLElement>> | undefined;
    toolbarClassName?: string | undefined;
    toolbarHidden?: boolean | undefined;
    locale?: string | undefined;
    localization?: object | undefined;
    editorClassName?: string | undefined;
    wrapperClassName?: string | undefined;
    toolbarStyle?: object | undefined;
    editorStyle?: React.CSSProperties | undefined;
    wrapperStyle?: React.CSSProperties | undefined;
    uploadCallback?(file: object): Promise<object>;
    onFocus?(event: SyntheticEvent): void;
    onBlur?(event: SyntheticEvent): void;
    onTab?(event: SyntheticKeyboardEvent): void;
    mention?: object | undefined;
    hashtag?: object | undefined;
    textAlignment?: string | undefined;
    readOnly?: boolean | undefined;
    tabIndex?: number | undefined;
    placeholder?: string | undefined;
    ariaLabel?: string | undefined;
    ariaOwneeID?: string | undefined;
    ariaActiveDescendantID?: string | undefined;
    ariaAutoComplete?: string | undefined;
    ariaDescribedBy?: string | undefined;
    ariaExpanded?: string | undefined;
    ariaHasPopup?: string | undefined;
    customBlockRenderFunc?(block: ContentBlock): any;
    wrapperId?: number | undefined;
    customDecorators?: object[] | undefined;
    editorRef?(ref: object): void;
    handleKeyCommand?(
        command: Draft.DraftEditorCommand,
        editorState: EditorState,
        eventTimeStamp: number,
    ): Draft.DraftHandleValue;
    handlePastedText?(
        text: string,
        html: string,
        editorState: EditorState,
        onChange: (editorState: EditorState) => void,
    ): boolean;
    handleReturn?(
        e: SyntheticKeyboardEvent,
        editorState: EditorState
    ): boolean;
    customStyleMap?: object | undefined;
}

export class Editor extends React.Component<EditorProps> {
    constructor(props: Readonly<EditorProps>);
    focusEditor(): void;
}
