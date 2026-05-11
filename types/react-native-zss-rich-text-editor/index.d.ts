import { Component, ReactNode } from "react";
import { ImageProps, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export type FunctionWithZeroArgs = () => void;

export type LinkHandler = (url: string, title: string) => void;

export type ImageHandler = (attributes: ImageProps) => void;

export type ColorHandler = (color: string) => void;

export type LinkDialogHandler = (optionalTitle: string, optionalUrl: string) => void;

export type PlaceHolderHandler = (placeholder: string) => void;

export type ContentStylesHandler = (styles: RichTextStyles) => void;

export type ContentSetHandler = (html: string) => void;

export type ContentGetHandler = () => Promise<string>;

export type FocusHandler = (callback: FunctionWithZeroArgs) => void;

export type ElementStyles = StyleProp<ViewStyle | TextStyle | ImageStyle>;

export interface ContentInset {
    top: number;
    left: number;
}

export interface RichTextStyles {
    [key: string]: ElementStyles;
}

export interface IconsMap {
    [key: string]: ImageSourcePropType;
}

export enum ACTIONS {
    enableOnChange = "ENABLE_ON_CHANGE",
    setTitleHtml = "SET_TITLE_HTML",
    setContentHtml = "SET_CONTENT_HTML",
    getTitleHtml = "GET_TITLE_HTML",
    getTitleText = "GET_TITLE_TEXT",
    toggleTitle = "TOGGLE_TITLE",
    hideTitle = "HIDE_TITLE",
    showTitle = "SHOW_TITLE",
    getContentHtml = "GET_CONTENT_HTML",
    getSelectedText = "GET_SELECTED_TEXT",
    blurTitleEditor = "BLUR_TITLE_EDITOR",
    blurContentEditor = "BLUR_CONTENT_EDITOR",
    focusTitle = "FOCUS_TITLE",
    focusContent = "FOCUS_CONTENT",

    setBold = "bold",
    setItalic = "italic",
    setUnderline = "underline",
    heading1 = "h1",
    heading2 = "h2",
    heading3 = "h3",
    heading4 = "h4",
    heading5 = "h5",
    heading6 = "h6",
    setParagraph = "SET_PARAGRAPH",
    removeFormat = "REMOVE_FORMAT",
    alignLeft = "justifyLeft",
    alignCenter = "justifyCenter",
    alignRight = "justifyRight",
    alignFull = "justifyFull",
    insertBulletsList = "unorderedList",
    insertOrderedList = "orderedList",
    insertLink = "INST_LINK",
    updateLink = "UPDATE_LINK",
    insertImage = "INST_IMAGE",
    setSubscript = "subscript",
    setSuperscript = "superscript",
    setStrikethrough = "strikeThrough",
    setHR = "horizontalRule",
    setIndent = "indent",
    setOutdent = "outdent",
    setTitlePlaceholder = "SET_TITLE_PLACEHOLDER",
    setContentPlaceholder = "SET_CONTENT_PLACEHOLDER",
    setTitleFocusHandler = "SET_TITLE_FOCUS_HANDLER",
    setContentFocusHandler = "SET_CONTENT_FOCUS_HANDLER",
    prepareInsert = "PREPARE_INSERT",
    restoreSelection = "RESTORE_SELECTION",
    setCustomCSS = "SET_CUSTOM_CSS",
    setTextColor = "SET_TEXT_COLOR",
    setBackgroundColor = "SET_BACKGROUND_COLOR",
    init = "ZSSS_INIT",
    setEditorHeight = "SET_EDITOR_HEIGHT",
    setFooterHeight = "SET_FOOTER_HEIGHT",
    setPlatform = "SET_PLATFORM",
}

// RichTextEditor takes the following optional props
export interface RichTextEditorProps {
    // HTML that will be rendered in the title section as soon as the component loads.
    initialTitleHTML: string;

    // HTML that will be rendered in the content section on load.
    initialContentHTML: string;

    // Text that will be used as a placeholder when no text is present in the title section.
    titlePlaceholder: string;

    // Text that will be used as a placeholder when no text is present in the content section.
    contentPlaceholder: string;

    // Any custom CSS styles that you want to inject to the editor.
    customCSS: RichTextStyles;

    // A function that will be called when the editor has been initialized.
    editorInitializedCallback: FunctionWithZeroArgs;

    // Hide title
    hiddenTitle: boolean;

    enableOnChange: boolean;

    footerHeight: number;

    contentInset: ContentInset;
}

export interface RichTextToolbarOptionalProps {
    // An array of actions to be provided by this toolbar.
    actions: ACTIONS[];

    // Functions called when the addLink or addImage actions are tapped.
    onPressAddLink: FunctionWithZeroArgs;
    onPressAddImage: FunctionWithZeroArgs;

    selectedButtonStyle: ElementStyles;
    unselectedButtonStyle: ElementStyles;
    iconTint: string;
    selectedIconTint: string;
    renderAction: () => ReactNode;
    iconMap: IconsMap;
}

export interface RichTextToolbarProps extends Partial<RichTextToolbarOptionalProps> {
    // Must provide a function that returns a ref to a RichTextEditor component.
    getEditor: () => RichTextEditor;
}

export class RichTextEditor extends Component<Partial<RichTextEditorProps>> {
    // RichTextEditor also has methods that can be used on its ref to set styling at the current selection
    // or cursor position:
    setBold: FunctionWithZeroArgs;
    setItalic: FunctionWithZeroArgs;
    setUnderline: FunctionWithZeroArgs;
    heading1: FunctionWithZeroArgs;
    heading2: FunctionWithZeroArgs;
    heading3: FunctionWithZeroArgs;
    heading4: FunctionWithZeroArgs;
    heading5: FunctionWithZeroArgs;
    heading6: FunctionWithZeroArgs;
    setParagraph: FunctionWithZeroArgs;
    removeFormat: FunctionWithZeroArgs;
    alignLeft: FunctionWithZeroArgs;
    alignCenter: FunctionWithZeroArgs;
    alignRight: FunctionWithZeroArgs;
    alignFull: FunctionWithZeroArgs;
    insertBulletsList: FunctionWithZeroArgs;
    insertOrderedList: FunctionWithZeroArgs;
    insertLink: LinkHandler;
    updateLink: LinkHandler;
    insertImage: ImageHandler;
    setSubscript: FunctionWithZeroArgs;
    setSuperscript: FunctionWithZeroArgs;
    setStrikethrough: FunctionWithZeroArgs;
    setHR: FunctionWithZeroArgs;
    setIndent: FunctionWithZeroArgs;
    setOutdent: FunctionWithZeroArgs;
    setBackgroundColor: ColorHandler;
    setTextColor: ColorHandler;

    // This method shows a dialog for setting a link title and url, that will be inserted at the current cursor location.
    showLinkDialog: LinkDialogHandler;

    // To adjust content, placeholders or css, use these methods
    setTitlePlaceholder: PlaceHolderHandler;
    setContentPlaceholder: PlaceHolderHandler;
    setCustomCSS: ContentStylesHandler;
    setTitleHTML: ContentSetHandler;
    setContentHTML: ContentSetHandler;

    // To manage selection
    prepareInsert: FunctionWithZeroArgs;
    restoreSelection: FunctionWithZeroArgs;

    // To get the content or title HTML, use these asynchronous methods
    getTitleHtml: ContentGetHandler;
    getTitleText: ContentGetHandler;
    getContentHtml: ContentGetHandler;
    getSelectedText: ContentGetHandler;

    // To focus or blur sections, use these methods
    focusTitle: FunctionWithZeroArgs;
    focusContent: FunctionWithZeroArgs;
    blurTitleEditor: FunctionWithZeroArgs;
    blurContentEditor: FunctionWithZeroArgs;

    // To know when the title or content are in focus, use the following methods
    setTitleFocusHandler: FocusHandler;
    setContentFocusHandler: FocusHandler;

    // The callback will be called with an array of actions that are active at the cusor position,
    // allowing a toolbar to respond to changes.
    registerToolbar: (actions: ACTIONS[]) => void;
}

// This is a Component that provides a toolbar for easily controlling an editor.
// It is designed to be used together with a RichTextEditor component.
export class RichTextToolbar extends Component<Partial<RichTextToolbarProps>> {}
