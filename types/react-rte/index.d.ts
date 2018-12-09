// Type definitions for react-rte 0.16.1
// Project: https://github.com/sstur/react-rte
// Definitions by: jclyons52 <https://github.com/jclyons52>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from "react";
import { ContentBlock, EditorState } from "draft-js";
import { Options as ImportOptions } from "draft-js-import-html";
import { Options as ExportOptions } from "draft-js-export-html";

type StringMap = { [key: string]: string };

export class EditorValue {
    constructor(editorState: EditorState, cache: StringMap);
    getEditorState(): EditorState;
    setEditorState(editorState: EditorState): EditorValue;
    toString(format: string, options?: ExportOptions): string;
    setContentFromString(
        markup: string,
        format: string,
        options?: ImportOptions
    ): EditorValue;
    static createEmpty(decorator?: any): EditorValue;
    static createFromState(editorState: EditorState): EditorValue;
    static createFromString(
        markup: string,
        format: string,
        decorator?: any,
        options?: ImportOptions
    ): EditorValue;
}

interface StyleConfig {
    label: string;
    style: string;
    className?: string;
}

type StyleConfigList = Array<StyleConfig>;

type ChangeHandler = (value: EditorValue) => any;

type GetControlState = (key: string) => string | undefined;

type SetControlState = (key: string, value: string) => void;

type CustControlFunc = (
    set: SetControlState,
    get: GetControlState,
    state: EditorState
) => ReactNode;

type CustomControl = ReactNode | CustControlFunc;

type GroupName =
    | "INLINE_STYLE_BUTTONS"
    | "BLOCK_TYPE_BUTTONS"
    | "LINK_BUTTONS"
    | "BLOCK_TYPE_DROPDOWN"
    | "HISTORY_BUTTONS"
    | "IMAGE_BUTTON";

interface ToolbarConfig {
    display: Array<GroupName>;
    extraProps?: Object;
    INLINE_STYLE_BUTTONS: StyleConfigList;
    BLOCK_TYPE_DROPDOWN: StyleConfigList;
    BLOCK_TYPE_BUTTONS: StyleConfigList;
}

interface IProps {
    className?: string;
    toolbarClassName?: string;
    editorClassName?: string;
    value: EditorValue;
    onChange?: ChangeHandler;
    placeholder?: string;
    customStyleMap?: { [style: string]: { [key: string]: any } };
    handleReturn?: (event: Object) => boolean;
    customControls?: Array<CustomControl>;
    readOnly?: boolean;
    disabled?: boolean; // Alias of readOnly
    toolbarConfig?: ToolbarConfig;
    blockStyleFn?: (block: ContentBlock) => string | undefined;
    autoFocus?: boolean;
    keyBindingFn?: (event: Object) => string | undefined;
    rootStyle?: Object;
    editorStyle?: Object;
    toolbarStyle?: Object;
}

export default class RichTextEditor extends Component<IProps, any> {
    public static createEmptyValue(): EditorValue;
    public static createValueFromString(
        markup: string,
        format: string,
        options?: ImportOptions
    ): EditorValue;
}
