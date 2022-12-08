declare namespace CKEDITOR {
    interface CKEditorStatic {
        ui: typeof ui;
    }

    class ui extends event {
        readonly dialog: {
            textInput: typeof ui.dialog.textInput;
        };

        constructor(editor: editor);

        add(name: string, type: { [key: string]: unknown }, definition: { [key: string]: unknown }): void;

        addButton(name: string, definition: ui.buttonDefinition): void;

        addHandler(type: { [key: string]: unknown }, handler: { [key: string]: unknown }): void;

        addRichCombo(name: string, definition: { [key: string]: unknown }): void;

        addToolbarGroup(name: string, previous: number | string, subgroupOf?: string): void;

        create(name: string): { [key: string]: unknown };

        get(name: string): { [key: string]: unknown };

        space(name: string): dom.element;

        spaceId(name: string): string;
    }

    namespace ui {
        namespace dialog {
            class button extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.button, htmlList: unknown[]);

                accessKeyDown(): void;

                accessKeyUp(): void;

                click(): unknown;
            }

            class checkbox extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.checkbox, htmlList: unknown[]);

                accessKeyUp(): void;

                getValue(): boolean;

                setValue(checked: boolean, noChangeEvent: boolean): undefined;
            }

            namespace definitions {
                interface button {
                    label: string;
                    disabled?: boolean | undefined;
                }

                interface checkbox {
                    checked?: boolean | undefined;
                    validate?: (() => boolean) | undefined;
                    label?: string | undefined;
                }

                interface fieldSet {
                    label?: string | undefined;
                    children: unknown[];
                }

                interface file {
                    validate?: (() => boolean) | undefined;
                }

                interface fileButton {
                    for: string;
                    validate?: (() => boolean) | undefined;
                }

                interface hbox {
                    widths?: string[] | undefined;
                    height?: string | undefined;
                    padding?: string | undefined;
                    align?: string | undefined;
                }

                interface html {
                    html: string;
                }

                interface iframeElement {
                    src: string;
                    width: string;
                    height: string;
                    onContentLoad?: (() => void) | undefined;
                }

                interface labeledElement {
                    label: string;
                    labelLayout?: 'horizontal' | 'vertical' | undefined;
                    widths?: [string, string] | undefined;
                    role?: string | undefined;
                    includeLabel?: boolean | undefined;
                }

                interface radio {
                    default: unknown;
                    validate?: (() => boolean) | undefined;
                    items: Array<[string, string] | [string]>;
                }

                interface select {
                    default: unknown;
                    validate?: (() => boolean) | undefined;
                    items: Array<[string, string] | [string]>;
                    multiple?: boolean | undefined;
                    size?: number | undefined;
                }

                interface textarea {
                    rows?: number | undefined;
                    cols?: number | undefined;
                    default?: string | undefined;
                    validate?: (() => boolean) | undefined;
                }

                interface textInput {
                    default?: string | undefined;
                    validate?: (() => boolean) | undefined;
                    maxLength?: number | undefined;
                    size?: string | undefined;
                }

                interface uiElement {
                    id: string;
                    type: number;
                    title?: string | undefined;
                    hidden?: boolean | undefined;
                    className?: string | undefined;
                    style?: string | undefined;
                    accessKey?: string | undefined;
                }

                interface vbox {
                    width?: string | undefined;
                    heights?: string[] | undefined;
                    align?: string | undefined;
                    padding?: string | undefined;
                    expand?: boolean | undefined;
                }
            }

            class fieldset extends uiElement {
                constructor(
                    dialog: dialog,
                    childObjList: unknown[],
                    childHtmlList: unknown[],
                    htmlList: unknown[],
                    elementDefinition: definitions.fieldSet,
                );
            }

            class file extends labeledElement {
                constructor(dialog: dialog, elementDefinition: definitions.file, htmlList: unknown[]);

                getAction(): string;

                registerEvents(definition: { [key: string]: unknown }): file;

                reset(): void;

                setInitValue(): void;

                submit(): file;
            }

            class fileButton extends button {
                constructor(dialog: dialog, elementDefinition: definitions.fileButton, htmlList: unknown[]);
            }

            class hbox extends uiElement {
                constructor(
                    dialog: dialog,
                    childObjList: unknown[],
                    childHtmlList: unknown[],
                    htmlList: unknown[],
                    elementDefinition: definitions.hbox,
                );

                getChild(indices: number): uiElement;
                getChild(indices: number[]): uiElement[];
            }

            class html extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.html, htmlList: unknown[]);
            }

            class iframeElement extends uiElement {}

            class labeledElement extends uiElement {
                constructor(
                    dialog: dialog,
                    elementDefinition: definitions.labeledElement,
                    htmlList: unknown[],
                    contentHtml: () => string,
                );

                getLabel(): string;

                setLabel(label: string): labeledElement;
            }

            class radio extends labeledElement {
                constructor(dialog: dialog, elementDefinition: definitions.radio, htmlList: unknown[]);

                accessKeyUp(): void;

                getValue(): string;

                setValue(value: string, noChangeEvent: boolean): undefined;
            }

            class select extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.select, htmlList: unknown[]);

                add(label: string, value?: string, indexedDB?: number): select;

                clear(): select;

                remove(index: number): select;
            }

            class textarea extends labeledElement {
                constructor(dialog: dialog, elementDefinition: definitions.textarea, htmlList: unknown[]);
            }

            class textInput extends labeledElement {
                constructor(dialog: dialog, elementDefinition: definitions.textInput, htmlList: unknown[]);

                accessKeyUp(): void;

                focus(): undefined;

                getDirectionMarker(): string;

                getValue(): string;

                select(): void;

                setDirectionMarker(dir: string): void;

                setValue(value: string, noChangeEvent: boolean): textInput;
            }

            class uiElement {
                eventProcessors: unknown;

                // Not sure that the htmlList array type is right.
                constructor(
                    dialog: dialog,
                    elementDefinition: definitions.uiElement,
                    htmlList: unknown[],
                    nodeNameArg?: () => string | string,
                    stylesArg?: () => { [key: string]: unknown } | { [key: string]: unknown },
                    attributesArg?: () => { [key: string]: unknown } | { [key: string]: unknown },
                    contentsArg?: () => { [key: string]: unknown } | string,
                );

                accessKeyDown(dialog: dialog, key: string): void;

                accessKeyUp(dialog: dialog, key: string): void;

                disable(): void;

                enable(): void;

                focus(): uiElement | undefined;

                getDialog(): dialog;

                getElement(): dom.element;

                getInputElement(): dom.element;

                getValue(): unknown;

                isChanged(): boolean;

                isEnabled(): boolean;

                isFocusable(): boolean;

                isVisible(): boolean;

                // tslint:disable-next-line:no-unnecessary-qualifier
                registerEvents(definition: CKEDITOR.dialog.definition.uiElement): uiElement;

                selectParentTab(): uiElement;

                setValue(value: unknown, noChangeEvent: boolean): uiElement | undefined;
            }

            class vbox extends hbox {
                constructor(
                    dialog: dialog,
                    childObjList: unknown[],
                    childHtmlList: unknown[],
                    htmlList: unknown[],
                    elementDefinition: definitions.vbox,
                );
            }
        }

        class balloonPanel {
            activeShowListeners: {
                [id: number]: { removeListener: listenerRegistration };
            };
            editor: editor;
            focusables: { [id: number]: dom.element };
            height: string;
            parts: balloonPanel.parts;
            rect: balloonPanel.rect;
            showListeners: { [id: number]: () => listenerRegistration };
            templateDefinitions: balloonPanel.templateDefinitions;
            templates: balloonPanel.templates;
            triangleHeight: number;
            triangleMinDistance: number;
            triangleWidth: number;
            width: number;

            activeShowListener(id: number): void;

            activateShowListeners(): void;

            addShowListener(listener: () => listenerRegistration): listenerRegistration;

            attach(
                element: dom.element,
                options?:
                    | dom.element
                    | boolean
                    | {
                          focusElement?: dom.element | boolean | undefined;
                          show?: boolean | undefined;
                      },
            ): void;

            blur(): void;

            build(): void;

            deactivateShowListener(id: number): void;

            deregisterFocusable(element: dom.element): void;

            destroy(): void;

            getHeight(): number;

            getWidth(): number;

            hide(): void;

            move(top: number, left: number): void;

            registerFocusable(element: dom.element): void;

            removeShowListener(id: number): void;

            resize(width: number, height: number): void;

            setTitle(title: string): void;

            setTriangle(side: 'left' | 'right' | 'top' | 'bottom'): void;

            show(): void;
        }

        namespace balloonPanel {
            interface definition {
                content?: string | undefined;
                title?: string | undefined;
            }

            interface templates {
                close?: template | undefined;
                content?: template | undefined;
                panel?: template | undefined;
                title?: template | undefined;
                triangle?: template | undefined;
                triangleInner?: template | undefined;
                triangleOuter?: template | undefined;
            }

            interface templateDefinitions {
                close?: string | undefined;
                content?: string | undefined;
                panel?: string | undefined;
                title?: string | undefined;
                triangle?: string | undefined;
                triangleInner?: string | undefined;
                triangleOuter?: string | undefined;
            }

            interface rect {
                height?: number | undefined;
                left?: number | undefined;
                top?: number | undefined;
                visible?: boolean | undefined;
                width?: number | undefined;
            }

            interface parts {
                close?: dom.element | undefined;
                content?: dom.element | undefined;
                panel?: dom.element | undefined;
                title?: dom.element | undefined;
                triangle?: dom.element | undefined;
                triangleInner?: dom.element | undefined;
                triangleOuter?: dom.element | undefined;
            }
        }

        class balloonToolbar {
            constructor(editor: editor, definition: { [key: string]: unknown });

            addElement(name: string, element: button | richCombo): void;

            addElements(elements: { [itemName: string]: button | richCombo }): void;

            deleteItem(name: string): void;

            destroy(): void;

            getItem(name: string): button | richCombo;

            hide(): void;

            refresh(): void;

            show(): void;
        }

        class button {
            static readonly handler: handlerDefinition<button>;

            constructor(definition: { [key: string]: unknown });

            getState(): number;

            render(editor: editor, output: string[]): void;

            setState(state: number): void;

            toFeature(editor: editor): feature;
        }

        interface buttonDefinition {
            icon?: string | undefined;
            iconOffset?: number | undefined;
            label: string;
            command: string;
            toolbar: string;
        }

        class floatPanel {
            constructor(
                editor: editor,
                parentElement: dom.element,
                definition: { [key: string]: unknown },
                level: number,
            );

            addBlock(name: string, block: { [key: string]: unknown }): void;

            addListBlock(name: string, multiSelect: boolean): void;

            allowBlur(allow: boolean): void;

            blur(): void;

            focus(): void;

            getBlock(name: string): panel.block;

            hide(returnFocus: boolean): void;

            hideChild(restoreFocus: boolean): void;

            reposition(): void;

            showAsChild(
                panel: floatPanel,
                blckName: string,
                offsetParent: dom.element,
                corner: number,
                offsetX?: number,
                offsetY?: number,
            ): void;

            showBlock(
                name: string,
                offsetParent: dom.element,
                corner: number,
                offsetX?: number,
                offsetY?: number,
                callback?: () => void,
            ): void;
        }

        class handlerDefinition<T> {
            contentsElement: dom.element;

            create(definition: { [key: string]: unknown }): T;
        }

        class menuButton extends button {}

        class panel {
            constructor(document: dom.document, definition: { [key: string]: unknown });

            addBlock(name: string, block: { [key: string]: unknown }): void;

            getBlock(name: string): panel.block;

            render(editor: editor, output?: string[]): void;

            showBlock(name: string): void;
        }

        namespace panel {
            class block {
                getItems(): dom.nodeList;

                markItem(index: number): void;
            }

            const handler: handlerDefinition<panel>;
        }

        class panelButton extends button {}

        class richCombo {
            static readonly handler: handlerDefinition<richCombo>;

            render(editor: editor, output: string[]): void;
        }
    }
}
