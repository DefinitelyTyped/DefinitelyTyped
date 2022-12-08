declare namespace CKEDITOR {
    interface CKEditorStatic {
        plugins: CKEditorPluginsCore;
    }

    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_pluginDefinition.html */
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

    interface CKEditorPluginsCore extends resourceManager {}

    interface CKEditorPluginsEditor {}

    interface CKEditorPluginsEditorInternal {}

    namespace plugins {
        interface underscoreApiStatic {}
        interface pluginsApiStatic {}

        namespace cloudservices {
            class cloudServicesLoader extends fileTools.fileLoader {
                customToken: string;

                constructor(editor: editor, fileOrData: Blob | string, fileName?: string, token?: string);

                loadAndUpload(url?: string, additionalRequestParameters?: unknown): void;

                upload(url?: string, additionalRequestParameters?: unknown): void;
            }
        }

        class autoEmbed {
            getWidgetDefinition(editor: editor, url: string): widget.definition;
        }

        namespace balloontoolbar {
            const PRIORITY: { [pri: string]: number };

            class context {
                editor: editor;
                options: contextDefinition;
                toolbar: ui.balloonToolbar;

                constructor(editor: editor, options: contextDefinition);

                destroy(): void;

                hide(): void;

                refresh(): void;

                show(pointedElement?: dom.element): void;
            }

            interface contextDefinition {
                cssSelector?: string | undefined;
                priority?: number | undefined;
                widgets?: string[] | string | undefined;

                refresh?:
                    | ((editor: editor, path: dom.elementPath, selection: dom.selection) => dom.element)
                    | undefined;
            }

            class contextManager {
                editor: editor;

                constructor(editor: editor);

                add(context: context): void;

                check(selection?: dom.selection): void;

                create(options: contextDefinition): context;

                destroy(): void;

                hide(): void;
            }
        }

        namespace clipboard {
            const isCustomCopyCutSupported: boolean;
            const isCustomDataTypesSupported: boolean;
            const isFileApiSupported: boolean;
            const mainPasteEvent: string;

            function addPasteButton(editor: editor, name: string, definition: { [key: string]: unknown }): void;

            function canClipboardApiBeTrusted(dataTransfer: dataTransfer, editor: editor): boolean;

            function getDropTarget(editor: editor): dom.domObject;

            function getRangeAtDropPosition(domEvent: Event, editor: editor): dom.range;

            function initDragDataTransfer(evt?: dom.event, editor?: editor): void;

            function initPasteDataTransfer(evt?: dom.event, sourceEditor?: editor): void;

            function preventDefaultDropOnElement(element: dom.element): void;

            function resetDragDataTransfer(): void;

            class dataTransfer {
                readonly $: DataTransfer;
                readonly id: string;
                readonly sourceEditor: editor;

                constructor(nativeDataTransfer?: DataTransfer, editor?: editor);

                cacheData(): void;

                getData(type: string, getNative?: boolean): string;

                getFile(i: number): File;

                getFilesCount(): number;

                getTransferType(targetEditor: editor): number;

                isEmpty(): boolean;

                setData(type: string, value: string): void;

                storeId(): void;
            }

            class fallbackDataTransfer {
                constructor(dataTransfer: dataTransfer);

                getData(type: string, getNative?: boolean): string;

                isRequired(): boolean;

                setData(type: string, value: string): string;
            }
        }

        class contextMenu extends menu {
            constructor(editor: editor);

            addTarget(element: dom.element, nativeContextMenuOnCtrl?: boolean): void;

            open(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
        }

        namespace copyformatting {
            let breakOnElements: string[];
            let elementsForInlineTransform: string[];
            let excludedAttributes: string[];
            let excludedAttributesFromInlineTransform: string[];
            let inlineBoundary: string[];
            let preservedElements: string[];

            class state extends event {
                editor: editor;
                filter: filter;
                sticky: boolean;
                styles: style[];

                constructor(editor: editor);
            }
        }

        namespace easyimage {}

        namespace embedBase {
            function createWidgetBaseDefinition(editor: editor): baseDefinition;

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

        namespace image2 {
            function checkHasNaturalRatio(image: dom.element): boolean;

            function getLinkAttributesGetter(): (
                editor: editor,
                data: { [key: string]: string },
            ) => { set: { [tag: string]: string }; removed: string[] };

            function getLinkAttributesParser(): (editor: editor, element: dom.element) => { [key: string]: string };

            function getNatural(image: dom.element): {
                [key: string]: string;
            };
        }

        namespace imagebase {
            const featuresDefinitions: { [key: string]: string };

            function addFeature(editor: editor, name: string, definition: imageWidgetDefinition): imageWidgetDefinition;

            function addImageWidget(editor: editor, name: string, definition: imageWidgetDefinition): void;

            interface imageWidgetDefinition extends widget.definition {
                features: string[];
                upcast: string;
            }

            class progressBar extends progressReporter {
                bar: dom.element;

                constructor();
            }

            class progressReporter {
                wrapper: dom.element;

                constructor(wrapperHtml?: string);

                aborted(): void;

                bindLoader(loader: fileTools.fileLoader): void;

                done(): void;

                failed(): void;

                remove(): void;

                updated(progress: number): void;
            }
        }

        namespace indent {
            function registerCommands(editor: editor, commands: { [key: string]: command }): void;

            class genericDefinition implements commandDefinition {
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

            class specificDefinition {
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

        namespace indentList {
            function firstItemInPath(
                query:
                    | string
                    | string[]
                    | { [tagName: string]: unknown }
                    | dom.element
                    | ((element: dom.element) => boolean),
            ): boolean;
        }

        namespace link {
            // DEPRECATED 4.3.3
            const emptyAnchorFix: boolean;

            // DEPRECATED 4.3.3
            const fakeAnchor: boolean;

            // DEPRECATED 4.3.3
            const synAnchorSelector: boolean;

            function getEditorAnchors(editor: editor): dom.element[];

            function getLinkAttributes(
                editor: editor,
                data: { [key: string]: unknown },
            ): { set: { [key: string]: string }; removed: string[] };

            function getSelectedLink(editor: editor, returnMultiple?: boolean): dom.element | dom.element[];

            function parseLinkAttributes(editor: editor, element: dom.element): { [key: string]: unknown };

            function showDisplayTextForElement(element: dom.element, editor: editor): boolean;

            function tryRestoreFakeAnchor(editor: editor, element: dom.element): dom.element;
        }

        class list {
            arrayToList(listArray: unknown, database: unknown, paragraphMode: unknown, dir: unknown): void;

            listToArray(
                listNode: unknown,
                database: unknown,
                baseArray: unknown,
                baseIndentLevel: unknown,
                grandparentNode: unknown,
            ): void;
        }

        class notification {
            readonly area: notification.area;
            readonly duration: number;
            readonly editor: editor;
            readonly element: dom.element;
            readonly id: number;
            readonly message: string;
            readonly progress: number;
            readonly type: notification.type;

            constructor(editor: editor, options: notification.options);

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

            type type = 'info' | 'warning' | 'success' | 'progress';
        }

        class notificationAggregator extends event {
            readonly editor: editor;
            readonly notification: notification;

            constructor(editor: editor, message: string, singularMessage?: string);

            createTask(options?: { weight?: number | undefined }): notificationAggregator.task;

            getDoneTaskCount(): number;

            getPercentage(): number;

            getTaskCount(): number;

            isFinished(): boolean;

            update(): void;
        }

        namespace notificationAggregator {
            class task extends event {
                constructor(weight?: number);

                cancel(): void;

                done(): void;

                isCanceled(): boolean;

                isDone(): boolean;

                update(weight: number): void;
            }
        }

        namespace pastefromword {
            class lists {
                numbering: lists.numbering;
            }

            namespace lists {
                class numbering {
                    getStyle(marker: string): string;

                    toNumber(marker: string, markerType: string): number;
                }
            }

            class styles {
                pushStylesLower(
                    element: htmlParser.element,
                    exceptions: { [style: string]: boolean },
                    wrapText?: boolean,
                ): boolean;
            }
        }

        namespace tableselection {
            function getCellsBetween(first: dom.element, last: dom.element): dom.element[];
        }

        namespace widget {
            const WRAPPER_CLASS_PREFIX: string;

            function getNestedEditable(guard: dom.element, node: dom.node): dom.element;

            function isDomDragHandler(node: dom.node): boolean;

            function isDomDragHandlerContainer(node: dom.node): boolean;

            function isDomNestedEditable(node: dom.node): boolean;

            function isDomWidget(node: dom.node): boolean;

            function isDomWidgetElement(node: dom.node): boolean;

            function isDomWidgetWrapper(node: dom.node): boolean;

            function isParserWidgetElement(node: dom.node): boolean;

            function isParserWidgetWrapper(node: dom.node): boolean;

            namespace nestedEditable {
                interface definition {
                    allowedContent?: filter.allowedContentRules | undefined;
                    disallowedContent?: filter.disallowedContentRules | undefined;
                    pathName?: string | undefined;
                    selector?: string | undefined;
                }
            }

            class nestedEditable extends dom.element {
                readonly editor: editor;
                readonly enterMode: number;
                readonly filter: filter;
                readonly shiftEnterMode: number;

                constructor(editor: editor, element: dom.element, config: { filter?: filter | undefined });

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

            class repository extends event {
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

            class widgetselection {
                addFillers(editable: editable): boolean;

                removeFillers(editable: editable): void;
            }
        }

        class widget extends event implements widget.definition {
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

            constructor(
                widgetsRepo: widget.repository,
                id: number,
                element: dom.element,
                widgetDef: widget.definition,
                starupData?: unknown,
            );

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

        function add(name: string, definition?: pluginDefinition): void;

        function addExternal(name: string, path: string, fileName?: string): void;

        function get(name: string): unknown;

        function getFilePath(name: string): string;

        function getPath(name: string): string;

        function load(name: string, callback: (plugins: string[]) => void, scope?: { [key: string]: unknown }): void;

        function setLang(pluginName: string, languageCode: string, languageEntries: unknown): void;

        const registered: { [key: string]: pluginDefinition };
    }
}
