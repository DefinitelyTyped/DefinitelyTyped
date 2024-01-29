declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly editor: editorConstructor;
    }

    interface editorConstructor extends eventConstructor<editor> {
        new(instanceConfig?: config, element?: dom.element, mode?: number): editor;
    }

    /** https://com/docs/ckeditor4/latest/api/CKEDITOR_editor.html */
    interface editor extends event, CKEditorPluginsEditorInstance {
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

        addCommand(commandName: string, commandDefinition: command | commandDefinition | styleCommand): void;

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

        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
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

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface CKEditorPluginsEditorInstance {}

    interface eventObject {
        activeEnterModeChange?: ((evt: eventInfo<eventData>) => void) | undefined;
        activeFilterChange?: ((event: eventInfo<eventData>) => void) | undefined;
        afterCommandExec?: ((event: eventInfo<eventData>) => void) | undefined;
        afterInsertHtml?: ((event: eventInfo<eventData>) => void) | undefined;
        afterPaste?: ((event: eventInfo<eventData>) => void) | undefined;
        afterPasteFromWord?: ((event: eventInfo<eventData>) => void) | undefined;
        afterSetData?: ((event: eventInfo<eventData>) => void) | undefined;
        afterUndoImage?: ((event: eventInfo<eventData>) => void) | undefined;
        ariaEditorHelpLabel?: ((event: eventInfo<eventData>) => void) | undefined;
        ariaWidget?: ((event: eventInfo<eventData>) => void) | undefined;
        autogrow?: ((event: eventInfo<eventData>) => void) | undefined;

        beforeCommandExec?: ((event: eventInfo<eventData>) => void) | undefined;
        beforeDestroy?: ((event: eventInfo<eventData>) => void) | undefined;
        beforeGetData?: ((event: eventInfo<eventData>) => void) | undefined;
        beforeModeUnload?: ((event: eventInfo<eventData>) => void) | undefined;
        beforeSetMode?: ((event: eventInfo<eventData>) => void) | undefined;
        beforeUndoImage?: ((event: eventInfo<eventData>) => void) | undefined;
        blur?: ((event: eventInfo<eventData>) => void) | undefined;

        change?: ((event: eventInfo<eventData>) => void) | undefined;
        configLoaded?: ((event: eventInfo<eventData>) => void) | undefined;
        contentDirChanged?: ((event: eventInfo<eventData>) => void) | undefined;
        contentDom?: ((event: eventInfo<editor.events.contentDom>) => void) | undefined;
        contentDomInvalidated?: ((event: eventInfo<eventData>) => void) | undefined;
        contentDomUnload?: ((event: eventInfo<eventData>) => void) | undefined;
        customConfigLoaded?: ((event: eventInfo<eventData>) => void) | undefined;

        dataFiltered?: ((event: eventInfo<eventData>) => void) | undefined;
        dataReady?: ((event: eventInfo<eventData>) => void) | undefined;
        destroy?: ((event: eventInfo<eventData>) => void) | undefined;
        dialogHide?: ((event: eventInfo<eventData>) => void) | undefined;
        dialogShow?: ((event: eventInfo<eventData>) => void) | undefined;
        dirChanged?: ((event: eventInfo<eventData>) => void) | undefined;
        doubleclick?: ((event: eventInfo<eventData>) => void) | undefined;
        dragend?: ((event: eventInfo<eventData>) => void) | undefined;
        dragstart?: ((event: eventInfo<eventData>) => void) | undefined;
        drop?: ((event: eventInfo<eventData>) => void) | undefined;

        elementsPathUpdate?: ((event: eventInfo<eventData>) => void) | undefined;

        fileUploadRequest?: ((event: eventInfo<editor.events.fileUploadRequest>) => void) | undefined;
        fileUploadResponse?: ((event: eventInfo<eventData>) => void) | undefined;
        floatingSpaceLayout?: ((event: eventInfo<eventData>) => void) | undefined;
        focus?: ((event: eventInfo<eventData>) => void) | undefined;

        getData?: ((event: eventInfo<eventData>) => void) | undefined;
        getSnapshot?: ((event: eventInfo<eventData>) => void) | undefined;

        insertElement?: ((event: eventInfo<eventData>) => void) | undefined;
        insertHtml?: ((event: eventInfo<eventData>) => void) | undefined;
        insertText?: ((event: eventInfo<eventData>) => void) | undefined;
        instanceReady?: ((event: eventInfo<eventData>) => void) | undefined;

        key?: ((event: eventInfo<editor.events.key>) => void) | undefined;

        langLoaded?: ((event: eventInfo<eventData>) => void) | undefined;
        loadSnapshot?: ((event: eventInfo<eventData>) => void) | undefined;
        loaded?: ((event: eventInfo<eventData>) => void) | undefined;
        lockSnapshot?: ((event: eventInfo<eventData>) => void) | undefined;
        maximize?: ((event: eventInfo<eventData>) => void) | undefined;
        menuShow?: ((event: eventInfo<eventData>) => void) | undefined;
        mode?: ((event: eventInfo<eventData>) => void) | undefined;

        notificationHide?: ((event: eventInfo<eventData>) => void) | undefined;
        notificationShow?: ((event: eventInfo<eventData>) => void) | undefined;
        notificationUpdate?: ((event: eventInfo<eventData>) => void) | undefined;

        paste?: ((event: eventInfo<eventData>) => void) | undefined;
        pasteFromWord?: ((event: eventInfo<eventData>) => void) | undefined;
        pluginsLoaded?: ((event: eventInfo<eventData>) => void) | undefined;

        readOnly?: ((event: eventInfo<eventData>) => void) | undefined;
        removeFormatCleanup?: ((event: eventInfo<eventData>) => void) | undefined;
        required?: ((event: eventInfo<eventData>) => void) | undefined;
        resize?: ((event: eventInfo<eventData>) => void) | undefined;

        save?: ((event: eventInfo<eventData>) => void) | undefined;
        saveSnapshot?: ((event: eventInfo<eventData>) => void) | undefined;
        selectionChange?: ((event: eventInfo<eventData>) => void) | undefined;
        setData?: ((event: eventInfo<eventData>) => void) | undefined;
        stylesSet?: ((event: eventInfo<eventData>) => void) | undefined;

        template?: ((event: eventInfo<eventData>) => void) | undefined;
        toDataFormat?: ((event: eventInfo<eventData>) => void) | undefined;
        toHtml?: ((event: eventInfo<editor.events.toHtml>) => void) | undefined;

        unlockSnapshot?: ((event: eventInfo<eventData>) => void) | undefined;
        updateSnapshot?: ((event: eventInfo<eventData>) => void) | undefined;

        widgetDefinition?: ((event: eventInfo<eventData>) => void) | undefined;
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
}
