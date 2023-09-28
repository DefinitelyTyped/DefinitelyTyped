declare namespace CKEDITOR {
    /**
     * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR.html
     * This is the interface which describes the global window.CKEDITOR variable, from this interface you should be able
     * to document any usages of CKEditor4 in your code.
     * Generally you shouldn't extend interface to add or remove any properties unless
     * heavy modification of CKEditor has occurred. Rather use the official extensible interfaces such as:
     * @link CKEDITOR.CKEditorStyleHandlersStatic
     * @link CKEDITOR.CKEditorPluginsCore
     * @link CKEDITOR.CKEditorPluginsEditor
     * @link CKEDITOR.CKEditorPluginsEditorInternal
     */
    interface CKEditorStatic {
        // Config options
        disableAutoInline: boolean;
        replaceClass: string;
        skinName: string;

        // Properties
        ALT: number;
        CTRL: number;
        DATA_TRANSFER_CROSS_EDITORS: number;
        DATA_TRANSFER_EXTERNAL: number;
        DATA_TRANSFER_INTERNAL: number;
        DIALOG_RESIZE_BOTH: number;
        DIALOG_RESIZE_HEIGHT: number;
        DIALOG_RESIZE_NONE: number;
        DIALOG_RESIZE_WIDTH: number;
        DIALOG_STATE_BUSY: number;
        DIALOG_STATE_IDLE: number;
        ELEMENT_MODE_APPENDTO: number;
        ELEMENT_MODE_INLINE: number;
        ELEMENT_MODE_NONE: number;
        ELEMENT_MODE_REPLACE: number;
        END: number;
        ENLARGE_BLOCK_CONTENTS: number;
        ENLARGE_ELEMENT: number;
        ENLARGE_INLINE: number;
        ENLARGE_LIST_ITEM_CONTENTS: number;
        ENTER_BR: number;
        ENTER_DIV: number;
        ENTER_P: number;
        EVENT_PHASE_AT_TARGET: number;
        EVENT_PHASE_BUBBLING: number;
        EVENT_PHASE_CAPTURING: number;
        FILTER_SKIP_TREE: number;
        LINEUTILS_AFTER: number;
        LINEUTILS_BEFORE: number;
        LINEUTIS_INSIDE: number;
        MOUSE_BUTTON_LEFT: number;
        MOUSE_BUTTON_MIDDLE: number;
        MOUSE_BUTTON_RIGHT: number;
        NODE_COMMENT: number;
        NODE_DOCUMENT: number;
        NODE_DOCUMENT_FRAGMENT: number;
        NODE_ELEMENT: number;
        NODE_TEXT: number;
        POSITION_AFTER_END: number;
        POSITION_AFTER_START: number;
        POSITION_BEFORE_END: number;
        POSITION_BEFORE_START: number;
        POSITION_CONTAINS: number;
        POSITION_DISCONNECTED: number;
        POSITION_FOLLOWING: number;
        POSITION_IDENTICAL: number;
        POSITION_IS_CONTAINED: number;
        POSITION_PRECEDING: number;
        SELECTION_ELEMENT: number;
        SELECTION_NONE: number;
        SELECTION_TEXT: number;
        SHIFT: number;
        SHRINK_ELEMENT: number;
        SHRINK_TEXT: number;
        START: number;
        STYLE_BLOCK: string;
        STYLE_INLINE: string;
        STYLE_OBJECT: string;
        TRISTATE_DISABLED: number;
        TRISTATE_OFF: number;
        TRISTATE_ON: number;
        UI_BUTTON: string;
        UI_MENUBUTTON: string;
        UI_PANEL: string;
        UI_PANELBUTTON: string;
        UI_RICHCOMBO: string;
        UI_SEPARATOR: string;
        VERBOSITY_ERROR: number;
        VERBOSITY_WARN: number;

        basePath: string;
        currentInstance: editor;
        document: dom.document;
        instances: { [id: string]: editor };
        loadFullCoreTimeout: number;
        revision: string;
        rnd: number;
        status: "unloaded" | "basic_loaded" | "basic_ready" | "loaded";
        timestamp: string;
        verbosity: number;
        version: string;
        config: config;

        stylesSet: resourceManager;

        // Methods
        add(editor: editor): void;

        addCss(css: string): void;

        addTemplate(name: string, source: string): template;

        appendTo(element: string | HTMLElement, config?: config, data?: string): editor;

        domReady(): void;

        editorConfig(config: config): void;

        error(errorCode: string, additionalData?: any): void;

        getCss(): string;

        getTemplate(name: string): template;

        getUrl(resource: string): string;

        inline(element: string | HTMLElement, instanceConfig?: config): editor;

        inlineAll(): void;

        loadFullCore(): void;

        replace(element: string | HTMLTextAreaElement, config?: config): editor;

        replaceAll(className?: string): void;

        replaceAll(assertionFunction: (textarea: HTMLTextAreaElement, config: config) => boolean): void;

        warn(errorCode: string, additionalData?: any): void;

        // Event interface
        capture(): void;

        define(name: string, meta: { [key: string]: any }): void;

        fire(eventName: string, data?: { [key: string]: any }, editor?: editor): any;

        fireOnce(eventName: string, data?: { [key: string]: any }, editor?: editor): any;

        hasListeners(eventName: string): boolean;

        on(
            eventName: string,
            listenerFunction: (
                eventInfo: eventInfo<
                    | dom.domObject<Event | EventTarget>
                    | dom.event<Event | EventTarget>
                    | eventData
                >,
            ) => void,
            scopeObj?: { [key: string]: any },
            listenerData?: { [key: string]: any },
            priority?: number,
        ): void;

        once(
            eventName: string,
            listenerFunction: (
                eventInfo: eventInfo<
                    | dom.domObject<Event | EventTarget>
                    | dom.event<Event | EventTarget>
                    | eventData
                >,
            ) => void,
            scopeObj?: { [key: string]: any },
            listenerData?: { [key: string]: any },
            priority?: number,
        ): void;

        removeAllListeners(): void;

        removeListener(
            eventName: string,
            listenerFunction: (
                eventInfo: eventInfo<
                    | dom.domObject<Event | EventTarget>
                    | dom.event<Event | EventTarget>
                    | eventData
                >,
            ) => void,
        ): void;
    }

    interface listenerRegistration {
        removeListener: () => void;
    }
}
