declare namespace SimpleMDE {
    interface AutoSaveOptions {
        enabled?: boolean | undefined;
        delay?: number | undefined;
        uniqueId: string;
    }

    interface BlockStyleOptions {
        bold?: string | undefined;
        code?: string | undefined;
        italic?: string | undefined;
    }

    interface InsertTextOptions {
        horizontalRule?: string[] | undefined;
        image?: string[] | undefined;
        link?: string[] | undefined;
        table?: string[] | undefined;
    }

    interface ParsingOptions {
        allowAtxHeaderWithoutSpace?: boolean | undefined;
        strikethrough?: boolean | undefined;
        underscoresBreakWords?: boolean | undefined;
    }

    interface RenderingOptions {
        singleLineBreaks?: boolean | undefined;
        codeSyntaxHighlighting: boolean;
    }

    interface ShortcutsArray {
        [action: string]: string | undefined;
        toggleBlockquote?: string | undefined;
        toggleBold?: string | undefined;
        cleanBlock?: string | undefined;
        toggleHeadingSmaller?: string | undefined;
        toggleItalic?: string | undefined;
        drawLink?: string | undefined;
        toggleUnorderedList?: string | undefined;
        togglePreview?: string | undefined;
        toggleCodeBlock?: string | undefined;
        drawImage?: string | undefined;
        toggleOrderedList?: string | undefined;
        toggleHeadingBigger?: string | undefined;
        toggleSideBySide?: string | undefined;
        toggleFullScreen?: string | undefined;
    }

    interface StatusBarItem {
        className: string;
        defaultValue: (element: HTMLElement) => void;
        onUpdate: (element: HTMLElement) => void;
    }

    interface ToolbarIcon {
        name: string;
        action: string | ((editor: SimpleMDE) => void);
        className: string;
        title: string;
    }

    interface Options {
        autoDownloadFontAwesome?: boolean | undefined;
        autofocus?: boolean | undefined;
        autosave?: AutoSaveOptions | undefined;
        blockStyles?: BlockStyleOptions | undefined;
        element?: HTMLElement | undefined;
        forceSync?: boolean | undefined;
        hideIcons?: string[] | undefined;
        indentWithTabs?: boolean | undefined;
        initialValue?: string | undefined;
        insertTexts?: InsertTextOptions | undefined;
        lineWrapping?: boolean | undefined;
        parsingConfig?: ParsingOptions | undefined;
        placeholder?: string | undefined;
        previewRender?: ((markdownPlaintext: string, previewElement?: HTMLElement) => string) | undefined;
        promptURLs?: boolean | undefined;
        renderingConfig?: RenderingOptions | undefined;
        shortcuts?: ShortcutsArray | undefined;
        showIcons?: string[] | undefined;
        spellChecker?: boolean | undefined;
        status?: boolean | Array<string | StatusBarItem> | undefined;
        styleSelectedText?: boolean | undefined;
        tabSize?: number | undefined;
        toolbar?: boolean | Array<string | ToolbarIcon> | undefined;
        toolbarTips?: boolean | undefined;
    }
}

declare class SimpleMDE {
    constructor();
    constructor(options: SimpleMDE.Options);
    value(): string;
    value(val: string): void;
    codemirror: any;
    toTextArea(): void;
    isPreviewActive(): boolean;
    isSideBySideActive(): boolean;
    isFullscreenActive(): boolean;
    clearAutosavedValue(): void;

    static toggleBold: (editor: SimpleMDE) => void;
    static toggleItalic: (editor: SimpleMDE) => void;
    static toggleStrikethrough: (editor: SimpleMDE) => void;
    static toggleHeadingSmaller: (editor: SimpleMDE) => void;
    static toggleHeadingBigger: (editor: SimpleMDE) => void;
    static toggleHeading1: (editor: SimpleMDE) => void;
    static toggleHeading2: (editor: SimpleMDE) => void;
    static toggleHeading3: (editor: SimpleMDE) => void;
    static toggleCodeBlock: (editor: SimpleMDE) => void;
    static toggleBlockquote: (editor: SimpleMDE) => void;
    static toggleUnorderedList: (editor: SimpleMDE) => void;
    static toggleOrderedList: (editor: SimpleMDE) => void;
    static cleanBlock: (editor: SimpleMDE) => void;
    static drawLink: (editor: SimpleMDE) => void;
    static drawImage: (editor: SimpleMDE) => void;
    static drawTable: (editor: SimpleMDE) => void;
    static drawHorizontalRule: (editor: SimpleMDE) => void;
    static togglePreview: (editor: SimpleMDE) => void;
    static toggleSideBySide: (editor: SimpleMDE) => void;
    static toggleFullScreen: (editor: SimpleMDE) => void;
    static undo: (editor: SimpleMDE) => void;
    static redo: (editor: SimpleMDE) => void;
}

export = SimpleMDE;
export as namespace SimpleMDE;
