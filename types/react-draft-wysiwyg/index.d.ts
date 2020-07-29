// Type definitions for react-draft-wysiwyg 1.13
// Project: https://github.com/jpuri/react-draft-wysiwyg#readme
// Definitions by: imechZhangLY <https://github.com/imechZhangLY>
//                 brunoMaurice <https://github.com/brunoMaurice>
//                 ldanet <https://github.com/ldanet>
//                 Munif Tanjim <https://github.com/MunifTanjim>
//                 Nathan Zeplowitz <https://github.com/n-zeplo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as Draft from 'draft-js';
import * as React from 'react';

export type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
export type SyntheticEvent = React.SyntheticEvent<{}>;
export type RawDraftContentState = Draft.RawDraftContentState;
export type DraftStyleMap = Draft.DraftStyleMap;

export class EditorState extends Draft.EditorState {}
export class ContentState extends Draft.ContentState {}
export class ContentBlock extends Draft.ContentBlock {}
export class SelectionState extends Draft.SelectionState {}

export interface ToolbarCommonProps {
    icon?: string;
    className?: string;
    title?: string;
}

export interface MentionsSuggestions {
    text?: string;
    value?: string;
    url?: string;
}

export interface EditorMentions {
    separator?: string;
    trigger?: string;
    suggestions?: MentionsSuggestions[];
}

export interface EditorHashtag {
    separator?: string;
    trigger?: string;
}

export type ToolbarOptions =
    | 'inline'
    | 'blockType'
    | 'fontSize'
    | 'fontFamily'
    | 'list'
    | 'textAlign'
    | 'colorPicker'
    | 'link'
    | 'link'
    | 'embedded'
    | 'emoji'
    | 'image'
    | 'remove'
    | 'history';

export type ToolbarInlineOptions =
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'monospace'
    | 'superscript'
    | 'subscript';

export type ToolbarBlockTypeOptions = 'Normal' | 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Blockquote' | 'Code';
export type ToolbarListOptions = 'unordered' | 'ordered' | 'indent' | 'outdent';
export type ToolbarTextAlignOptions = 'left' | 'center' | 'right' | 'justify';
export type ToolbarLinkOptions = 'link' | 'unlink';
export type ToolbarHistoryOptions = 'undo' | 'redo';
export type ToolbarComponent = React.ComponentType<any>;

export interface EditorToolbar {
    options?: ToolbarOptions[];
    inline?: {
        inDropdown?: boolean;
        className?: string;
        component?: ToolbarComponent;
        dropdownClassName?: string;
        options?: ToolbarInlineOptions[];
        bold?: ToolbarCommonProps;
        italic?: ToolbarCommonProps;
        underline?: ToolbarCommonProps;
        strikethrough?: ToolbarCommonProps;
        monospace?: ToolbarCommonProps;
        superscript?: ToolbarCommonProps;
        subscript?: ToolbarCommonProps;
    };
    blockType?: {
        inDropdown?: boolean;
        options?: ToolbarBlockTypeOptions[];
        className?: string;
        component?: ToolbarComponent;
        dropdownClassName?: string;
        title?: string;
    };
    fontSize?: {
        icon?: string;
        options?: number[];
        className?: string;
        component?: ToolbarComponent;
        dropdownClassName?: string;
        title?: string;
    };
    fontFamily?: {
        options?: string[];
        className?: string;
        component?: ToolbarComponent;
        dropdownClassName?: string;
        title?: string;
    };
    list?: {
        inDropdown?: boolean;
        className?: string;
        component?: ToolbarComponent;
        dropdownClassName?: string;
        options?: ToolbarListOptions[];
        unordered?: ToolbarCommonProps;
        ordered?: ToolbarCommonProps;
        indent?: ToolbarCommonProps;
        outdent?: ToolbarCommonProps;
        title?: string;
    };
    textAlign?: {
        inDropdown?: boolean;
        className?: string;
        component?: ToolbarComponent;
        dropdownClassName?: string;
        options?: ToolbarTextAlignOptions[];
        left?: ToolbarCommonProps;
        center?: ToolbarCommonProps;
        right?: ToolbarCommonProps;
        justify?: ToolbarCommonProps;
        title?: string;
    };
    colorPicker?: {
        icon?: string;
        className?: string;
        component?: ToolbarComponent;
        popupClassName?: string;
        colors?: string[];
        title?: string;
    };
    link?: {
        inDropdown?: boolean;
        className?: string;
        component?: ToolbarComponent;
        popupClassName?: string;
        dropdownClassName?: string;
        showOpenOptionOnHover?: boolean;
        defaultTargetOption?: string;
        options?: ToolbarLinkOptions[];
        link?: ToolbarCommonProps;
        unlink?: ToolbarCommonProps;
        linkCallback?: any;
    };
    emoji?: {
        icon?: string;
        className?: string;
        component?: ToolbarComponent;
        popupClassName?: string;
        emojis?: string[];
        title?: string;
    };
    embedded?: {
        icon?: string;
        className?: string;
        component?: ToolbarComponent;
        popupClassName?: string;
        embedCallback?: (embeddedLink: string) => string;
        defaultSize?: {
            height?: string;
            width?: string;
        };
        title?: string;
    };
    image?: {
        icon?: string;
        className?: string;
        component?: ToolbarComponent;
        popupClassName?: string;
        urlEnabled?: boolean;
        uploadEnabled?: boolean;
        previewImage?: boolean;
        alignmentEnabled?: boolean;
        uploadCallback?(file: File): Promise<{ data: { link: string } }>;
        inputAccept?: string;
        alt?: {
            present?: boolean;
            mandatory?: boolean;
        };
        defaultSize?: {
            height?: string;
            width?: string;
        };
        title?: string;
    };
    remove?: {
        icon?: string;
        className?: string;
        component?: ToolbarComponent;
        title?: string;
    };
    history?: {
        inDropdown?: boolean;
        className?: string;
        component?: ToolbarComponent;
        dropdownClassName?: string;
        options?: ToolbarHistoryOptions[];
        undo?: ToolbarCommonProps;
        redo?: ToolbarCommonProps;
        title?: string;
    };
}

export interface EditorProps {
    onChange?(contentState: RawDraftContentState): void;
    onEditorStateChange?(editorState: EditorState): void;
    onContentStateChange?(contentState: RawDraftContentState): void;
    initialContentState?: RawDraftContentState;
    defaultContentState?: RawDraftContentState;
    contentState?: RawDraftContentState;
    editorState?: EditorState;
    defaultEditorState?: EditorState;
    toolbarOnFocus?: boolean;
    spellCheck?: boolean;
    stripPastedStyles?: boolean;
    toolbar?: EditorToolbar;
    toolbarCustomButtons?: Array<React.ReactElement<HTMLElement>>;
    toolbarClassName?: string;
    toolbarHidden?: boolean;
    locale?: string;
    localization?: object;
    editorClassName?: string;
    wrapperClassName?: string;
    toolbarStyle?: React.CSSProperties;
    editorStyle?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    uploadCallback?(file: object): Promise<object>;
    onFocus?(event: SyntheticEvent): void;
    onBlur?(event: SyntheticEvent): void;
    onTab?(event: SyntheticKeyboardEvent): void;
    mention?: EditorMentions;
    hashtag?: EditorHashtag;
    textAlignment?: string;
    readOnly?: boolean;
    tabIndex?: number;
    placeholder?: string;
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
    handlePastedText?(
        text: string,
        html: string,
        editorState: EditorState,
        onChange: (editorState: EditorState) => void,
    ): boolean;
    customStyleMap?: DraftStyleMap;
}

export class Editor extends React.Component<EditorProps> {
    constructor(props: Readonly<EditorProps>);
    focusEditor(): void;
}
