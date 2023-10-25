import { ContentBlock, EditorState } from "draft-js";
import { Component, ReactNode } from "react";
import draftjs = require("draft-js");

type CustomBlockFn = (
    element: Element,
) => undefined | null | CustomBlockObject;
type CustomInlineFn = (
    element: Element,
    inlineCreators: InlineCreators,
) => undefined | null | Style | draftjs.EntityInstance;

interface CustomBlockObject {
    type?: string | undefined;
    data?: object | undefined;
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
    parser?: ((html: string) => HTMLBodyElement) | undefined;
    elementStyles?: { [styleName: string]: string } | undefined;
    customBlockFn?: CustomBlockFn | undefined;
    customInlineFn?: CustomInlineFn | undefined;
}

declare function stateFromHTML(
    html: string,
    options?: ImportOptions,
): draftjs.ContentState;

type BlockStyleFn = (block: draftjs.ContentBlock) => RenderConfig;
type EntityStyleFn = (entity: draftjs.EntityInstance) => RenderConfig;
type BlockRenderer = (block: draftjs.ContentBlock) => string;
interface RenderConfig {
    element?: string | undefined;
    attributes?: any;
    style?: any;
}

interface ExportOptions {
    inlineStyles?: { [styleName: string]: RenderConfig } | undefined;
    blockRenderers?: { [blockType: string]: BlockRenderer } | undefined;
    blockStyleFn?: BlockStyleFn | undefined;
    entityStyleFn?: EntityStyleFn | undefined;
}

declare function stateToHTML(
    content: draftjs.ContentState,
    options?: ExportOptions,
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
        options?: ImportOptions,
    ): EditorValue;
    static createEmpty(decorator?: any): EditorValue;
    static createFromState(editorState: EditorState): EditorValue;
    static createFromString(
        markup: string,
        format: string,
        decorator?: any,
        options?: ImportOptions,
    ): EditorValue;
}

export interface StyleConfig {
    label: string;
    style: string;
    className?: string | undefined;
}

export type StyleConfigList = StyleConfig[];

type ChangeHandler = (value: EditorValue) => any;

type GetControlState = (key: string) => string | undefined;

type SetControlState = (key: string, value: string) => void;

type CustControlFunc = (
    set: SetControlState,
    get: GetControlState,
    state: EditorState,
) => ReactNode;

type CustomControl = ReactNode | CustControlFunc;

type GroupName =
    | "INLINE_STYLE_BUTTONS"
    | "BLOCK_TYPE_BUTTONS"
    | "BLOCK_ALIGNMENT_BUTTONS"
    | "LINK_BUTTONS"
    | "BLOCK_TYPE_DROPDOWN"
    | "HISTORY_BUTTONS"
    | "IMAGE_BUTTON";

export interface ToolbarConfig {
    display: GroupName[];
    extraProps?: object | undefined;
    INLINE_STYLE_BUTTONS: StyleConfigList;
    BLOCK_ALIGNMENT_BUTTONS: StyleConfigList;
    BLOCK_TYPE_DROPDOWN: StyleConfigList;
    BLOCK_TYPE_BUTTONS: StyleConfigList;
}

interface Props {
    className?: string | undefined;
    toolbarClassName?: string | undefined;
    editorClassName?: string | undefined;
    value: EditorValue;
    onChange?: ChangeHandler | undefined;
    placeholder?: string | undefined;
    customStyleMap?: { [style: string]: { [key: string]: any } } | undefined;
    handleReturn?: ((event: object) => boolean) | undefined;
    customControls?: CustomControl[] | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined; // Alias of readOnly
    toolbarConfig?: ToolbarConfig | undefined;
    blockStyleFn?: ((block: ContentBlock) => string | undefined) | undefined;
    autoFocus?: boolean | undefined;
    keyBindingFn?: ((event: object) => string | undefined) | undefined;
    rootStyle?: object | undefined;
    editorStyle?: object | undefined;
    toolbarStyle?: object | undefined;
    onBlur?: (event: object) => void;
}

declare class RichTextEditor extends Component<Props, any> {
    static createEmptyValue(): EditorValue;
    static createValueFromString(
        markup: string,
        format: string,
        options?: ImportOptions,
    ): EditorValue;
}

export default RichTextEditor;
