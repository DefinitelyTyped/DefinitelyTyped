declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly editor: typeof editor;
    }
    namespace editor {
        namespace events {
            interface contentDom extends eventData {
                editor: editor;
            }

            interface fileUploadRequest extends eventData {
                url: string;
                fileLoader: fileTools.fileLoader;
                requestData: unknown;
            }

            interface key extends eventData {
                keyCode: number;
                domEvent: dom.domObject<KeyboardEvent>;
            }

            interface toHtml extends eventData, htmlDataProcessorOptions {
                dataValue: string | htmlParser.fragment | dom.element;
            }
        }
    }

    /** https://com/docs/CKEDITOR4/latest/api/CKEDITOR_editor.html */
    class editor extends event {
        readonly activeEnterMode: number;
        readonly activeFilter: filter;
        readonly activeShiftEnterMode: number;
        readonly blockless: boolean;
        readonly config: config;
        readonly container: dom.element;
        readonly contextMenu: plugins.contextMenu;
        copyFormatting: plugins.copyformatting.state;
        dataProcessor: htmlDataProcessor;
        readonly document: dom.document;
        readonly element: dom.element;
        readonly elementMode: number;
        readonly enterMode: number;
        readonly filter: filter;
        readonly focusManager: focusManager;
        readonly id: string;
        readonly keystrokeHandler: keystrokeHandler;
        readonly lang: unknown;
        readonly langCode: string;
        readonly mode: string;
        readonly name: string;
        readonly pasteFilter: filter;
        readonly plugins: CKEditorPluginsEditor;
        readonly readOnly: boolean;
        readonly shiftEnterMode: number;
        readonly status: string;
        readonly tabIndex: number;
        readonly templates: unknown;
        readonly title: string | boolean;
        readonly toolbar: unknown;
        readonly ui: ui;
        readonly widgets: plugins.widget.repository;
        readonly window: dom.window;
        readonly _: CKEditorPluginsEditorInternal;

        constructor(instanceConfig?: config, element?: dom.element, mode?: number);

        addCommand(commandName: string, commandDefinition: commandDefinition): void;

        addContentsCss(cssPath: string): void;

        addFeature(feature: feature): boolean;

        addMenuGroup(name: string, order?: number): void;

        addMenuItem(name: string, definition?: menuItemDefinition): void;

        addMenuItems(definitions: { [id: string]: menuItemDefinition }): void;

        addMode(mode: string, exec: () => void): void;

        addRemoveFormatFilter(func: (element: dom.element) => boolean): void;

        applyStyle(style: style): void;

        attachStyleStateChange(style: style, callback: (state: number) => void): void;

        checkDirty(): boolean;

        createFakeElement(
            realElement: dom.element,
            className: string,
            realElementType: string,
            isResizable: boolean,
        ): void;

        createFakeParserElement(
            realElement: dom.element,
            className: string,
            realElementType: string,
            isResizable: boolean,
        ): void;

        createRange(): dom.range;

        destroy(noUpdate?: boolean): void;

        editable(elementOrEditable?: dom.element | editable): editable;

        elementPath(startNode?: dom.node): dom.elementPath;

        execCommand(commandName: string, data?: unknown): boolean;

        extractSelectedHtml(toString?: boolean, removeEmptyBlock?: boolean): dom.documentFragment | string | void;

        focus(): void;

        forceNextSelectionCheck(): void;

        getClipboardData(
            callbackOrOptions: { title: string } | ((data: unknown) => void),
            callback: (data: unknown) => void,
        ): void;

        getColorFromDialog(callback: (color: string) => void, scope?: { [key: string]: unknown }): void;

        getCommand(commandName: string): command;

        getCommandKeystroke(command: command | string): number | null;

        getData(internal?: boolean): string;

        getMenuItem(name: string): menuItemDefinition;

        getResizable(forContents: boolean): dom.element;

        getSelectedHtml(toString?: false): dom.documentFragment;
        getSelectedHtml(toString: true): string;
        getSelectedHtml(toString?: boolean): dom.documentFragment | string;

        getSelection(forceRealSelection?: boolean): dom.selection;

        getSnapshot(): string;

        getStylesSet(callback: (stylesDefinitions: style.definition[]) => void): void;

        getUiColor(): string;

        insertElement(element: dom.element): void;

        insertHtml(html: string, mode?: string, range?: dom.range): void;

        insertText(text: string): void;

        loadSnapshot(snapshot: unknown): void;

        lockSelection(sel?: dom.selection): boolean;

        openDialog(dialogName: string, callback: () => void): dialog;

        popup(url: string, width?: number | string, height?: number | string, options?: string): void;

        removeMenuItem(name: string): void;

        removeStyle(style: style): void;

        resetDirty(): void;

        resetUndo(): void;

        resize(width: number | string, height: number | string, isContentHeight?: boolean, resizeInner?: boolean): void;

        restoreRealElement(fakeElement: dom.element): dom.element;

        selectionChange(checkNow?: boolean): void;

        setActiveEnterMode(enterMode: number, shiftEnterMode: number): void;

        setActiveFilter(filter: filter): void;

        setData(
            data: string,
            options?: {
                internal?: boolean | undefined;
                callback?: (() => void) | undefined;
                noSnapshot?: boolean | undefined;
            },
        ): void;

        setKeystroke(keystroke: number, behavior: string | boolean): void;
        setKeystroke(keystroke: Array<[number, string | boolean]>): void;

        setMode(newMode: string, callback: () => void): void;

        setReadOnly(isReadOnly?: boolean): void;

        setUiColor(color: string): void;

        showNotification(
            message: string,
            type: plugins.notification.type,
            progressOrDuration: number,
        ): plugins.notification;

        unlockSelection(restore?: boolean): void;

        updateElement(): void;
    }

    interface eventObject {
        activeEnterModeChange?: ((evt: eventInfo) => void) | undefined;
        activeFilterChange?: ((event: eventInfo) => void) | undefined;
        afterCommandExec?: ((event: eventInfo) => void) | undefined;
        afterInsertHtml?: ((event: eventInfo) => void) | undefined;
        afterPaste?: ((event: eventInfo) => void) | undefined;
        afterPasteFromWord?: ((event: eventInfo) => void) | undefined;
        afterSetData?: ((event: eventInfo) => void) | undefined;
        afterUndoImage?: ((event: eventInfo) => void) | undefined;
        ariaEditorHelpLabel?: ((event: eventInfo) => void) | undefined;
        ariaWidget?: ((event: eventInfo) => void) | undefined;
        autogrow?: ((event: eventInfo) => void) | undefined;

        beforeCommandExec?: ((event: eventInfo) => void) | undefined;
        beforeDestroy?: ((event: eventInfo) => void) | undefined;
        beforeGetData?: ((event: eventInfo) => void) | undefined;
        beforeModeUnload?: ((event: eventInfo) => void) | undefined;
        beforeSetMode?: ((event: eventInfo) => void) | undefined;
        beforeUndoImage?: ((event: eventInfo) => void) | undefined;
        blur?: ((event: eventInfo) => void) | undefined;

        change?: ((event: eventInfo) => void) | undefined;
        configLoaded?: ((event: eventInfo) => void) | undefined;
        contentDirChanged?: ((event: eventInfo) => void) | undefined;
        contentDom?: ((event: eventInfo) => void) | undefined;
        contentDomInvalidated?: ((event: eventInfo) => void) | undefined;
        contentDomUnload?: ((event: eventInfo) => void) | undefined;
        customConfigLoaded?: ((event: eventInfo) => void) | undefined;

        dataFiltered?: ((event: eventInfo) => void) | undefined;
        dataReady?: ((event: eventInfo) => void) | undefined;
        destroy?: ((event: eventInfo) => void) | undefined;
        dialogHide?: ((event: eventInfo) => void) | undefined;
        dialogShow?: ((event: eventInfo) => void) | undefined;
        dirChanged?: ((event: eventInfo) => void) | undefined;
        doubleclick?: ((event: eventInfo) => void) | undefined;
        dragend?: ((event: eventInfo) => void) | undefined;
        dragstart?: ((event: eventInfo) => void) | undefined;
        drop?: ((event: eventInfo) => void) | undefined;

        elementsPathUpdate?: ((event: eventInfo) => void) | undefined;

        fileUploadRequest?: ((event: eventInfo) => void) | undefined;
        fileUploadResponse?: ((event: eventInfo) => void) | undefined;
        floatingSpaceLayout?: ((event: eventInfo) => void) | undefined;
        focus?: ((event: eventInfo) => void) | undefined;

        getData?: ((event: eventInfo) => void) | undefined;
        getSnapshot?: ((event: eventInfo) => void) | undefined;

        insertElement?: ((event: eventInfo) => void) | undefined;
        insertHtml?: ((event: eventInfo) => void) | undefined;
        insertText?: ((event: eventInfo) => void) | undefined;
        instanceReady?: ((event: eventInfo) => void) | undefined;

        key?: ((event: eventInfo) => void) | undefined;

        langLoaded?: ((event: eventInfo) => void) | undefined;
        loadSnapshot?: ((event: eventInfo) => void) | undefined;
        loaded?: ((event: eventInfo) => void) | undefined;
        lockSnapshot?: ((event: eventInfo) => void) | undefined;
        maximize?: ((event: eventInfo) => void) | undefined;
        menuShow?: ((event: eventInfo) => void) | undefined;
        mode?: ((event: eventInfo) => void) | undefined;

        notificationHide?: ((event: eventInfo) => void) | undefined;
        notificationShow?: ((event: eventInfo) => void) | undefined;
        notificationUpdate?: ((event: eventInfo) => void) | undefined;

        paste?: ((event: eventInfo) => void) | undefined;
        pasteFromWord?: ((event: eventInfo) => void) | undefined;
        pluginsLoaded?: ((event: eventInfo) => void) | undefined;

        readOnly?: ((event: eventInfo) => void) | undefined;
        removeFormatCleanup?: ((event: eventInfo) => void) | undefined;
        required?: ((event: eventInfo) => void) | undefined;
        resize?: ((event: eventInfo) => void) | undefined;

        save?: ((event: eventInfo) => void) | undefined;
        saveSnapshot?: ((event: eventInfo) => void) | undefined;
        selectionChange?: ((event: eventInfo) => void) | undefined;
        setData?: ((event: eventInfo) => void) | undefined;
        stylesSet?: ((event: eventInfo) => void) | undefined;

        template?: ((event: eventInfo) => void) | undefined;
        toDataFormat?: ((event: eventInfo) => void) | undefined;
        toHtml?: ((event: eventInfo) => void) | undefined;

        unlockSnapshot?: ((event: eventInfo) => void) | undefined;
        updateSnapshot?: ((event: eventInfo) => void) | undefined;

        widgetDefinition?: ((event: eventInfo) => void) | undefined;
    }
}
