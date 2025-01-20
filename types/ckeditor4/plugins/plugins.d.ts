declare namespace CKEDITOR {
    interface CKEditorStatic {
        plugins: CKEditorPluginsCore & plugins;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_pluginDefinition.html */
    interface pluginDefinition {
        hidpi?: boolean | undefined;
        icons?: string;
        lang?: string | string[] | undefined;
        requires?: string | string[] | undefined;

        afterInit?(editor: editor): unknown;

        beforeInit?(editor: editor): unknown;

        init?(editor: editor): void;

        onLoad?(): unknown;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_plugins.html */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface plugins extends resourceManager {}

    interface CKEditorPluginsCore {
        autoEmbed?: plugins.autoEmbed;
        clipboard?: {
            dataTransfer: { new(nativeDataTransfer?: DataTransfer, editor?: editor): plugins.clipboard.dataTransfer };
            fallbackDataTransfer: {
                new(dataTransfer: plugins.clipboard.dataTransfer): plugins.clipboard.fallbackDataTransfer;
            };
        } & plugins.clipboard;
        contextMenu?: { new(editor: editor): plugins.contextMenu };
        copyformatting?: {
            state: plugins.copyformatting.stateConstructor;
        } & plugins.copyformatting;
        embedBase?: {
            createWidgetBaseDefinition(editor: editor): plugins.embedBase.baseDefinition;
        };
        image2: plugins.image2;
        imagebase?: {
            progressBar: { new(): plugins.imagebase.progressBar };
            progressReporter: { new(wrapperHtml?: string): plugins.imagebase.progressReporter };
        } & plugins.imagebase;
        indent?: {
            registerCommands(editor: editor, commands: { [key: string]: command }): void;
            readonly genericDefinition: plugins.indent.genericDefinition;
            readonly specificDefinition: plugins.indent.specificDefinition;
        };
        indentList?: plugins.indentList;
        link?: plugins.link;
        list?: { new(): plugins.list };
        notification?: {
            new(editor: editor, options: plugins.notification.options): plugins.notification;
        };
        notificationAggregator?: {
            task: plugins.notificationAggregator.taskConstructor;
        } & plugins.notificationAggregatorConstructor;
        pastetools?: plugins.pastetools;
        tableselection?: plugins.tableselection;
        widget?: {
            nestedEditable: {
                new(
                    editor: editor,
                    element: dom.element,
                    config: { filter?: filter | undefined },
                ): plugins.widget.nestedEditable;
            };
            repository: plugins.widget.repositoryConstructor;
        } & plugins.widgetConstructor;
        widgetselection?: plugins.widgetselection;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface CKEditorPluginsEditor {}

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface CKEditorPluginsEditorInternal {}

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface CKEditorPluginsEditorInstance {}

    namespace plugins {
        interface autoEmbed {
            getWidgetDefinition(editor: editor, url: string): widget.definition;
        }

        interface clipboard {
            isCustomCopyCutSupported: boolean;
            isCustomDataTypesSupported: boolean;
            isFileApiSupported: boolean;
            mainPasteEvent: string;

            addPasteButton(editor: editor, name: string, definition: { [key: string]: unknown }): void;

            canClipboardApiBeTrusted(dataTransfer: clipboard.dataTransfer, editor: editor): boolean;

            getDropTarget(editor: editor): dom.domObject;

            getRangeAtDropPosition(domEvent: Event, editor: editor): dom.range;

            initDragDataTransfer(evt?: dom.event, editor?: editor): void;

            initPasteDataTransfer(evt?: dom.event, sourceEditor?: editor): void;

            preventDefaultDropOnElement(element: dom.element): void;

            resetDragDataTransfer(): void;
        }

        namespace clipboard {
            interface dataTransfer {
                readonly $: DataTransfer;
                readonly id: string;
                readonly sourceEditor: editor;

                cacheData(): void;

                getData(type: string, getNative?: boolean): string;

                getFile(i: number): File;

                getFilesCount(): number;

                getTransferType(targetEditor: editor): number;

                isEmpty(): boolean;

                setData(type: string, value: string): void;

                storeId(): void;
            }

            interface fallbackDataTransfer {
                getData(type: string, getNative?: boolean): string;

                isRequired(): boolean;

                setData(type: string, value: string): string;
            }
        }

        interface contextMenu extends menu {
            addTarget(element: dom.element, nativeContextMenuOnCtrl?: boolean): void;

            open(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
        }

        interface copyformatting {
            breakOnElements: string[];
            elementsForInlineTransform: string[];
            excludedAttributes: string[];
            excludedAttributesFromInlineTransform: string[];
            inlineBoundary: string[];
            preservedElements: string[];
        }

        namespace copyformatting {
            interface stateConstructor extends eventConstructor<state> {
                new(editor: editor): state;
            }
            interface state extends event {
                editor: editor;
                filter: filter;
                sticky: boolean;
                styles: style[];
            }
        }

        namespace easyimage {}

        namespace embedBase {
            interface baseDefinition extends widget.definition {
                providerUrl: template;
                urlRegExp: RegExp;

                getErrorMessage(messageTypeOrMessage: string, url?: string, suffix?: string): string;

                isUrlValid(url: string): boolean;

                loadContent(
                    url: string,
                    callback?: () => void,
                    errorCallback?: (error: string) => void,
                    noNotifications?: boolean,
                ): request;
            }

            interface request {
                callback: () => void;
                errorCallback: (error: string) => void;
                response: { [key: string]: string };
                task: notificationAggregator.task;
                url: string;

                cancel(): void;
            }
        }

        interface image2 {
            checkHasNaturalRatio(image: dom.element): boolean;

            getLinkAttributesGetter(): (
                editor: editor,
                data: { [key: string]: string },
            ) => { set: { [tag: string]: string }; removed: string[] };

            getLinkAttributesParser(): (editor: editor, element: dom.element) => { [key: string]: string };

            getNatural(image: dom.element): {
                [key: string]: string;
            };
        }

        interface imagebase {
            featuresDefinitions: { [key: string]: string };

            addFeature(
                editor: editor,
                name: string,
                definition: imagebase.imageWidgetDefinition,
            ): imagebase.imageWidgetDefinition;

            addImageWidget(editor: editor, name: string, definition: imagebase.imageWidgetDefinition): void;
        }

        namespace imagebase {
            interface imageWidgetDefinition extends widget.definition {
                features: string[];
                upcast: string;
            }

            interface progressBar extends progressReporter {
                bar: dom.element;
            }

            interface progressReporter {
                wrapper: dom.element;

                aborted(): void;

                bindLoader(loader: fileTools.fileLoader): void;

                done(): void;

                failed(): void;

                remove(): void;

                updated(progress: number): void;
            }
        }

        namespace indent {
            interface genericDefinition extends commandDefinition {
                async: boolean;
                canUndo: boolean;
                context: boolean;
                contextSensitive: boolean;
                editorFocus: boolean;
                fakeKeystroke: number;
                readonly isIndent: boolean;
                modes: { [key: string]: unknown };
                readOnly: boolean;
                startDisabled: boolean;

                exec(editor: editor, data?: unknown): boolean;

                refresh?(editor: editor, path: dom.elementPath): void;
            }

            interface specificDefinition {
                database: { [key: string]: unknown };
                readonly enterBr: boolean;
                readonly indentKey: { [key: string]: unknown };
                readonly isIndent: boolean;
                readonly jobs: {
                    [priority: string]: {
                        refresh: (editor: editor, path: dom.elementPath) => number;
                        exec: (editor: editor) => boolean;
                    };
                };
                readonly relatedGlobal: { [key: string]: unknown };

                execJob(editor: editor, priority: number): boolean;

                getContext(node: dom.elementPath): dom.element;

                refreshJob(editor: editor, priority: number): number;
            }
        }

        interface indentList {
            firstItemInPath(
                query:
                    | string
                    | string[]
                    | { [tagName: string]: unknown }
                    | dom.element
                    | ((element: dom.element) => boolean),
            ): boolean;
        }
        interface link {
            getEditorAnchors(editor: editor): dom.element[];

            getLinkAttributes(
                editor: editor,
                data: { [key: string]: unknown },
            ): { set: { [key: string]: string }; removed: string[] };

            getSelectedLink(editor: editor, returnMultiple?: boolean): dom.element | dom.element[];

            parseLinkAttributes(editor: editor, element: dom.element): { [key: string]: unknown };

            showDisplayTextForElement(element: dom.element, editor: editor): boolean;

            tryRestoreFakeAnchor(editor: editor, element: dom.element): dom.element;
        }

        interface list {
            arrayToList(listArray: unknown, database: unknown, paragraphMode: unknown, dir: unknown): void;

            listToArray(
                listNode: unknown,
                database: unknown,
                baseArray: unknown,
                baseIndentLevel: unknown,
                grandparentNode: unknown,
            ): void;
        }

        interface notification {
            readonly area: notification.area;
            readonly duration: number;
            readonly editor: editor;
            readonly element: dom.element;
            readonly id: number;
            readonly message: string;
            readonly progress: number;
            readonly type: notification.type;

            hide(): void;

            isVisible(): boolean;

            show(): void;

            update(options: notification.updateOptions): void;
        }

        namespace notification {
            interface area {
                readonly editor: editor;
                readonly element: dom.element;
                readonly notifications: notification[];

                add(notification: notification): void;

                remove(notification: notification): void;
            }

            interface optionsBase {
                duration?: number | undefined;
                progress?: number | undefined;
                type?: type | undefined;
            }

            interface options extends optionsBase {
                message: string;
            }

            interface updateOptions extends optionsBase {
                message?: string | undefined;
                important?: boolean | undefined;
            }

            type type = "info" | "warning" | "success" | "progress";
        }

        interface notificationAggregatorConstructor extends eventConstructor<notificationAggregator> {
            new(editor: editor, message: string, singularMessage?: string): notificationAggregator;
        }

        interface notificationAggregator extends event {
            readonly editor: editor;
            readonly notification: notification;

            createTask(options?: { weight?: number | undefined }): notificationAggregator.task;

            getDoneTaskCount(): number;

            getPercentage(): number;

            getTaskCount(): number;

            isFinished(): boolean;

            update(): void;
        }

        namespace notificationAggregator {
            interface taskConstructor extends eventConstructor<task> {
                new(weight?: number): task;
            }

            interface task extends event {
                cancel(): void;

                done(): void;

                isCanceled(): boolean;

                isDone(): boolean;

                update(weight: number): void;
            }
        }

        namespace pastefromword {
            interface lists {
                numbering: lists.numbering;
            }

            namespace lists {
                interface numbering {
                    getStyle(marker: string): string;

                    toNumber(marker: string, markerType: string): number;
                }
            }

            interface styles {
                pushStylesLower(
                    element: htmlParser.element,
                    exceptions: { [style: string]: boolean },
                    wrapText?: boolean,
                ): boolean;
            }
        }

        interface pastetools {
            filters: { [filter: string]: unknown };
            createFilter(options: { rules: () => unknown }): () => unknown;
            getClipboardData(data: eventData, type: string): string;
            getConfigValue(editor: editor, configVariable: string): string | boolean | number | unknown | unknown[];
            getContentGeneratorName(content: string): string | undefined;
            loadFilters(filters: string[], callback: () => void): boolean;
        }

        interface tableselection {
            getCellsBetween(first: dom.element, last: dom.element): dom.element[];
        }

        interface widgetConstructor extends eventConstructor<widget> {
            WRAPPER_CLASS_PREFIX: string;

            getNestedEditable(guard: dom.element, node: dom.node): dom.element;

            isDomDragHandler(node: dom.node): boolean;

            isDomDragHandlerContainer(node: dom.node): boolean;

            isDomNestedEditable(node: dom.node): boolean;

            isDomWidget(node: dom.node): boolean;

            isDomWidgetElement(node: dom.node): boolean;

            isDomWidgetWrapper(node: dom.node): boolean;

            isParserWidgetElement(node: dom.node): boolean;

            isParserWidgetWrapper(node: dom.node): boolean;

            new(
                widgetsRepo: widget.repository,
                id: number,
                element: dom.element,
                widgetDef: widget.definition,
                startupData?: unknown,
            ): widget;
        }
        interface widget extends event, widget.definition {
            readonly dataReady: boolean;
            readonly definition: widget.definition;
            readonly editor: editor;
            readonly element: dom.element;
            readonly focusedEditable: widget.nestedEditable;
            readonly id: number;
            readonly inited: boolean;
            readonly ready: boolean;
            readonly repository: widget.repository;
            readonly wrapper: dom.element;

            addClass(className: string): void;

            applyStyle(style: style): void;

            checkStyleActive(style: style): boolean;

            destroy(offline?: boolean): void;

            destroyEditable(editableName: string, offline?: boolean): void;

            edit(): boolean;

            focus(): void;

            getClasses(): unknown;

            hasClass(className: string, Whether: boolean): void;

            initEditable(editableName: string, definition: widget.nestedEditable.definition): boolean;

            isInited(): boolean;

            isReady(): boolean;

            removeClass(className: string): void;

            removeStyle(style: style): void;

            setData(keyOrData: unknown, value: unknown): widget;

            setFocused(selected: boolean): widget;

            setSelected(selected: boolean): widget;

            updateDragHandlerPosition(): void;
        }

        namespace widget {
            namespace nestedEditable {
                interface definition {
                    allowedContent?: filter.allowedContentRules | undefined;
                    disallowedContent?: filter.disallowedContentRules | undefined;
                    pathName?: string | undefined;
                    selector?: string | undefined;
                }
            }

            interface nestedEditable extends dom.element {
                readonly editor: editor;
                readonly enterMode: number;
                readonly filter: filter;
                readonly shiftEnterMode: number;

                getData(): string;

                setData(data: string): void;
            }

            interface definition extends feature {
                button?: string | undefined;
                data?: ((evt: eventInfo) => void) | undefined;
                defaults?: { [key: string]: unknown } | undefined;
                dialog?: string | undefined;
                downcast?: string | ((element: htmlParser.element) => void) | undefined;
                downcasts?: { [key: string]: unknown } | undefined;
                draggable?: boolean | undefined;
                edit?: (() => void) | undefined;
                editables?: { [key: string]: unknown } | undefined;
                getLabel?: (() => unknown) | undefined;
                init?: (() => void) | undefined;
                inline?: boolean | undefined;
                insert?: (() => void) | undefined;
                mask?: boolean | undefined;
                parts?: { [key: string]: unknown } | undefined;
                pathName?: string | undefined;
                styleToAllowedContentRules?: ((style: style) => filter.allowedContentRules) | undefined;
                styleableElements?: string | undefined;
                template?: string | template | undefined;
                upcast?: string | ((element: htmlParser.element, data: unknown) => boolean) | undefined;
                upcastPriority?: number | undefined;
                upcasts?: { [key: string]: unknown } | undefined;
            }

            interface repositoryConstructor extends eventConstructor<repository> {}

            interface repository extends event {
                readonly editor: editor;
                readonly focused: widget;
                readonly instances: { [id: string]: widget };
                readonly registered: { [name: string]: definition };
                readonly selected: widget[];
                readonly widgetHoldingFocusedEditable: widget;

                add(name: string, widgetDef: definition): void;

                addUpcastCallback(callback: (element: htmlParser.element, data: unknown) => boolean): void;

                checkSelection(): void;

                checkWidgets(options?: { initOnlyNew?: boolean | undefined; focusInited?: boolean | undefined }): void;

                del(widget: widget): void;

                destroy(widget: widget, offline?: boolean): void;

                destroyAll(offline?: boolean): void;

                finalizeCreation(container: unknown): void;

                getByElement(element: unknown, checkWrapperOnly: boolean): widget;

                initOn(
                    element: dom.element,
                    widgetDef?: string | definition,
                    startupData?: { [key: string]: unknown },
                ): widget;

                initOnAll(container?: dom.element): widget[];

                parseElementClasses(classes: string): unknown;

                wrapElement(element: unknown, widgetName?: string): unknown;
            }
        }
        interface widgetselection {
            addFillers(editable: editable): boolean;

            removeFillers(editable: editable): void;
        }
    }
}
