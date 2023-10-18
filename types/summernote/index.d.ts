/// <reference types="jquery"/>

declare global {
    namespace Summernote {
        type fontSizeUnitOptions = "px" | "pt";

        interface Options {
            airMode?: boolean | undefined;
            tabDisable?: boolean | undefined;
            codeviewFilter?: boolean | undefined;
            codeviewFilterRegex?: string | undefined;
            codeviewIframeWhitelistSrc?: string[] | undefined;
            codeviewIframeFilter?: boolean | undefined;
            callbacks?: SummernoteCallbacks | SummernoteUndocumentedCallbacks | undefined; // todo
            codemirror?: CodemirrorOptions | undefined;
            colors?: colorsDef | undefined;
            dialogsInBody?: boolean | undefined;
            dialogsFade?: boolean | undefined;
            direction?: string | undefined;
            disableDragAndDrop?: boolean | undefined;
            focus?: boolean | undefined;
            fontNames?: string[] | undefined;
            fontNamesIgnoreCheck?: string[] | undefined;
            fontSizes?: string[] | undefined;
            fontSizeUnits?: fontSizeUnitOptions[] | undefined;
            height?: number | undefined;
            hint?: HintOptions | undefined;
            icons?: IconsOptions | undefined;
            insertTableMaxSize?: InsertTableMaxSizeOptions | undefined;
            keyMap?: KeyMapOptions | undefined;
            lang?: string | undefined;
            lineHeights?: string[] | undefined;
            minHeight?: number | undefined;
            maxHeight?: number | undefined;
            maximumImageFileSize?: any;
            modules?: ModuleOptions | undefined;
            popover?: PopoverOptions | undefined;
            placeholder?: string | undefined;
            shortcuts?: boolean | undefined;
            styleTags?: styleTagsOptions[] | undefined;
            styleWithSpan?: boolean | undefined;
            tabsize?: number | undefined;
            tableClassName?: string | undefined;
            textareaAutoSync?: boolean | undefined;
            toolbar?: toolbarDef | undefined;
            width?: number | undefined;
        }

        type toolbarStyleGroupOptions = "style" | "bold" | "italic" | "underline" | "clear";
        type toolbarFontGroupOptions =
            | "fontname"
            | "fontsize"
            | "fontsizeunit"
            | "color"
            | "forecolor"
            | "backcolor"
            | "bold"
            | "italic"
            | "underline"
            | "strikethrough"
            | "superscript"
            | "subscript"
            | "clear";
        type toolbarFontsizeGroupOptions = "fontsize" | "fontname" | "color";
        type toolbarColorGroupOptions = "color";
        type toolbarParaGroupOptions = "ul" | "ol" | "paragraph" | "style" | "height";
        type toolbarHeightGroupOptions = "height";
        type toolbarTableGroupOptions = "table";
        type toolbarInsertGroupOptions = "link" | "picture" | "hr" | "table" | "video";
        type toolbarViewGroupOptions = "fullscreen" | "codeview" | "help";
        type toolbarHelpGroupOptions = "help";
        type miscGroupOptions = "fullscreen" | "codeview" | "undo" | "redo" | "help";
        // type toolbarDef = [string, string[]][]
        type toolbarDef = Array<
            | ["style", toolbarStyleGroupOptions[]]
            | ["font", toolbarFontGroupOptions[]]
            | ["fontname", toolbarFontNameOptions[]]
            | ["fontsize", toolbarFontsizeGroupOptions[]]
            | ["color", toolbarColorGroupOptions[]]
            | ["para", toolbarParaGroupOptions[]]
            | ["height", toolbarHeightGroupOptions[]]
            | ["table", toolbarTableGroupOptions[]]
            | ["insert", toolbarInsertGroupOptions[]]
            | ["view", toolbarViewGroupOptions[]]
            | ["help", toolbarHelpGroupOptions[]]
            | ["misc", miscGroupOptions[]]
        >;

        type colorsDef = Array<[string[]]>;
        type styleTagsOptions = "p" | "blockquote" | "pre" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

        interface InsertTableMaxSizeOptions {
            col: number;
            row: number;
        }

        interface IconsOptions {
            options?: any; // todo
        }

        interface KeyMapOptions {
            pc?: KeyMapPcOptions | undefined;
            mac?: KeyMapMacOptions | undefined;
        }

        interface KeyMapPcOptions {
            options?: any; // todo
        }

        interface KeyMapMacOptions {
            options?: any; // todo
        }

        type htmlElement = string;

        interface HintOptions {
            words?: string[] | undefined;
            mentions?: string[] | undefined;
            match: RegExp;
            search: (keyword: string, callback: (plausibleItems: string[]) => void) => void;
            template?: ((item: string) => htmlElement) | undefined;
            content?: ((item: string) => htmlElement | JQuery.Node) | undefined;
        }

        interface CodemirrorOptions {
            mode?: string | undefined;
            htmlNode?: boolean | undefined;
            lineNumbers?: boolean | undefined;
            theme?: string | undefined;
        }

        type popoverImageOptionsImagesize = "imageSize100" | "imageSize50" | "imageSize25";
        type popoverImageOptionsFloat = "floatLeft" | "floatRight" | "floatNone";
        type popoverImageOptionsRemove = "removeMedia";
        type popoverImageDef = [
            ["imagesize", popoverImageOptionsImagesize[]],
            ["float", popoverImageOptionsFloat[]],
            ["remove", popoverImageOptionsRemove[]],
        ];

        type popoverLinkLinkOptions = "linkDialogShow" | "unlink";
        type popoverLinkDef = [
            ["link", popoverLinkLinkOptions[]],
        ];

        type popoverAirOptionsColor = "color";
        type popoverAirOptionsFont = "bold" | "underline" | "clear";
        type popoverAirOptionsPara = "ul" | "paragraph";
        type popoverAirOptionsTable = "table";
        type popoverAirOptionsInsert = "link" | "picture";
        type popoverAirDef = [
            ["color", popoverAirOptionsColor],
            ["font", popoverAirOptionsFont],
            ["para", popoverAirOptionsPara],
            ["table", popoverAirOptionsTable],
            ["insert", popoverAirOptionsInsert],
        ];

        interface PopoverOptions {
            image?: popoverImageDef | undefined;
            link?: popoverLinkDef | undefined;
            air?: popoverAirDef | undefined;
        }

        interface ModuleOptions {
            options?: any; // todo
        }

        interface CreateLinkOptions {
            text: string;
            url: string;
            newWindow: boolean;
        }

        type EditImageCallback = ($image: JQuery.Node) => void;

        type toolbarFontNameOptions = string;

        interface SummernoteCallbacks {
            onBeforeCommand?: (contents: string) => void;
            onChange?: (contents: string, $editable: JQuery) => void;
            onChangeCodeview?: (code: string, $editor: JQuery) => void;
            onDialogShown?: () => void;
            onEnter?: (ev: Event) => void;
            onFocus?: (ev: Event) => void;
            onBlur?: (ev: Event) => void;
            onBlurCodeview?: (code: string, ev: Event) => void;
            onImageLinkInsert?: (url: string) => void;
            onImageUpload?: (files: Blob[]) => void;
            onImageUploadError?: (err: any) => void;
            onInit?: () => void;
            onKeyup?: (ev: KeyboardEvent) => void;
            onKeydown?: (ev: KeyboardEvent) => void;
            onMouseDown?: (ev: MouseEvent) => void;
            onMouseUp?: (ev: MouseEvent) => void;
            onPaste?: (e: Event) => void;
            onScroll?: (e: Event) => void;
        }

        type SummernoteUndocumentedCallbacks = {
            [key in Exclude<keyof SummernoteCallbacks, string>]: (...args: any[]) => void;
        };
    }

    interface JQuery {
        summernote(): JQuery;
        summernote(command: string): JQuery;
        summernote(options?: Summernote.Options): JQuery;
        summernote(command: string, markupString: string): JQuery;
        summernote(command: string, value: number): JQuery;
        summernote(command: string, node: JQuery.Node): JQuery;
        summernote(command: string, url: string, filename?: string | Summernote.EditImageCallback): JQuery;

        summernote(command: "destroy"): JQuery;
        summernote(command: "code"): string;
        summernote(command: "code", markupStr: string): undefined;
        summernote(command: "editor.pasteHTML" | "pasteHTML", markup: string): JQuery;

        // Basic API
        summernote(command: "editor.createRange" | "createRange"): JQuery;
        summernote(command: "editor.saveRange" | "saveRange"): JQuery;
        summernote(command: "editor.restoreRange" | "restoreRange"): JQuery;
        summernote(command: "editor.undo" | "undo"): JQuery;
        summernote(command: "editor.redo" | "redo"): JQuery;
        summernote(command: "editor.focus" | "focus"): JQuery;
        summernote(command: "editor.isEmpty" | "isEmpty"): boolean;
        summernote(command: "reset"): JQuery;
        summernote(command: "disable"): JQuery;
        summernote(command: "enable"): JQuery;
        // Font style API
        summernote(fontStyle: "editor.bold" | "bold"): JQuery;
        summernote(fontStyle: "editor.italic" | "italic"): JQuery;
        summernote(fontStyle: "editor.underline" | "underline"): JQuery;
        summernote(fontStyle: "editor.strikethrough" | "strikethrough"): JQuery;
        summernote(command: "editor.superscript" | "superscript"): JQuery;
        summernote(command: "editor.subscript" | "subscript"): JQuery;
        summernote(command: "editor.removeFormat" | "removeFormat"): JQuery;
        summernote(command: "backColor", color: string): JQuery;
        summernote(command: "foreColor", color: string): JQuery;
        summernote(command: "fontName", fontName: string): JQuery;
        summernote(command: "editor.fontSize" | "fontSize", fontSize: number): JQuery;
        // Paragraph API
        summernote(command: "editor.justifyLeft" | "justifyLeft"): JQuery;
        summernote(command: "editor.justifyRight" | "justifyRight"): JQuery;
        summernote(command: "editor.justifyCenter" | "justifyCenter"): JQuery;
        summernote(command: "editor.justifyFull" | "justifyFull"): JQuery;
        summernote(command: "insertParagraph"): JQuery;
        summernote(command: "editor.insertOrderedList" | "insertOrderedList"): JQuery;
        summernote(command: "editor.insertUnorderedList" | "insertUnorderedList"): JQuery;
        summernote(command: "editor.indent" | "indent"): JQuery;
        summernote(command: "editor.outdent" | "outdent"): JQuery;
        summernote(command: "formatPara"): JQuery;
        summernote(command: "formatH1"): JQuery;
        summernote(command: "formatH2"): JQuery;
        summernote(command: "formatH3"): JQuery;
        summernote(command: "formatH4"): JQuery;
        summernote(command: "formatH5"): JQuery;
        summernote(command: "formatH6"): JQuery;
        // Insertion API
        summernote(
            command: "editor.insertImage" | "insertImage",
            url: string,
            filename?: string | Summernote.EditImageCallback,
        ): JQuery;
        summernote(command: "editor.insertNode" | "insertNode", node: JQuery.Node): JQuery;
        summernote(command: "editor.insertText" | "insertText", text: string): JQuery;
        summernote(command: "createLink", options: Summernote.CreateLinkOptions): JQuery;
        // TODO: Callbacks

        // TODO: Editor
        // editor.insertImagesOrCallback ??
        // editor.afterCommand ??
        // editor.resizeTo ??
        // editor.resize ??
        // editor.saveTarget ??
        // editor.isActivated ??
        // editor.formatBlock ??
        // editor.color ??
        // editor.lineHeight ??
        // editor.insertTable ??
        // editor.insertHorizontalRule ??
        // editor.floatMe ??
        // editor.removeMedia ??
        // editor.currentStyle ??
        // editor.getLinkInfo ??
        // editor.getSelectedText ??
    }
}

export {};
