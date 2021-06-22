// Type definitions for react-rte 0.16
// Project: https://github.com/sstur/react-rte
// Definitions by: jclyons52 <https://github.com/jclyons52>
//                 Munif Tanjim <https://github.com/MunifTanjim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { Component, ReactNode } from "react";
import { ContentBlock, EditorState } from "draft-js";
import draftjs = require("draft-js");

type CustomBlockFn = (
    element: Element
) => undefined | null | CustomBlockObject;
type CustomInlineFn = (
    element: Element,
    inlineCreators: InlineCreators
) => undefined | null | Style | draftjs.EntityInstance;

interface CustomBlockObject {
    type?: string;
    data?: object;
}

interface InlineCreators {
    Style: (style: string) => Style;
    Entity: (type: string, data?: object) => draftjs.EntityInstance;
}

interface Style {
    type: "STYLE";
    style: string;
}

interface ImportOptions {
    parser?: (html: string) => HTMLBodyElement;
    elementStyles?: { [styleName: string]: string };
    customBlockFn?: CustomBlockFn;
    customInlineFn?: CustomInlineFn;
}

declare function stateFromHTML(
    html: string,
    options?: ImportOptions
): draftjs.ContentState;

type BlockStyleFn = (block: draftjs.ContentBlock) => RenderConfig;
type EntityStyleFn = (entity: draftjs.EntityInstance) => RenderConfig;
type BlockRenderer = (block: draftjs.ContentBlock) => string;
interface RenderConfig {
    element?: string;
    attributes?: any;
    style?: any;
}

interface ExportOptions {
    inlineStyles?: { [styleName: string]: RenderConfig };
    blockRenderers?: { [blockType: string]: BlockRenderer };
    blockStyleFn?: BlockStyleFn;
    entityStyleFn?: EntityStyleFn;
}

declare function stateToHTML(
    content: draftjs.ContentState,
    options?: ExportOptions
): string;

interface StringMap {
    [key: string]: string;
}

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

type StyleConfigList = StyleConfig[];

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
    display: GroupName[];
    extraProps?: object;
    INLINE_STYLE_BUTTONS: StyleConfigList;
    BLOCK_TYPE_DROPDOWN: StyleConfigList;
    BLOCK_TYPE_BUTTONS: StyleConfigList;
}

interface Props {
    className?: string;
    toolbarClassName?: string;
    editorClassName?: string;
    value: EditorValue;
    onChange?: ChangeHandler;
    placeholder?: string;
    customStyleMap?: { [style: string]: { [key: string]: any } };
    handleReturn?: (event: object) => boolean;
    customControls?: CustomControl[];
    readOnly?: boolean;
    disabled?: boolean; // Alias of readOnly
    toolbarConfig?: ToolbarConfig;
    blockStyleFn?: (block: ContentBlock) => string | undefined;
    autoFocus?: boolean;
    keyBindingFn?: (event: object) => string | undefined;
    rootStyle?: object;
    editorStyle?: object;
    toolbarStyle?: object;
}

declare class RichTextEditor extends Component<Props, any> {
    static createEmptyValue(): EditorValue;
    static createValueFromString(
        markup: string,
        format: string,
        options?: ImportOptions
    ): EditorValue;
}

export default RichTextEditor;
