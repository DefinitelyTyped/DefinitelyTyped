declare namespace CKEDITOR {
    interface CKEditorStatic {
        ui: uiConstructor & CKEditorUIStatic;
    }

    interface CKEditorUIStatic {
        balloonPanel: { new(editor: editor, definition: ui.balloonPanel.definition): ui.balloonPanel };
        button: ui.buttonConstructor<ui.button>;
        floatPanel: {
            new(
                editor: editor,
                parentElement: dom.element,
                definition: { [key: string]: unknown },
                level: number,
            ): ui.floatPanel;
        };
        handlerDefinition: ui.handlerDefinition;
        menuButton: ui.buttonConstructor<ui.menuButton>;
        panel: { new(document: dom.document, definition: ui.uiDefinition): ui.panel };
        panelButton: ui.buttonConstructor<ui.panelButton>;
        richCombo: { new(): ui.richCombo };
    }

    interface uiConstructor extends eventConstructor<ui> {
        new(editor: editor): ui;
    }

    interface ui extends event {
        add(name: string, type: { [key: string]: unknown }, definition: { [key: string]: unknown }): void;

        addButton(name: string, definition: ui.button.definition): void;

        addHandler(type: { [key: string]: unknown }, handler: { [key: string]: unknown }): void;

        addRichCombo(name: string, definition: { [key: string]: unknown }): void;

        addToolbarGroup(name: string, previous: number | string, subgroupOf?: string): void;

        create(name: string): { [key: string]: unknown };

        get(name: string): { [key: string]: unknown };

        space(name: string): dom.element;

        spaceId(name: string): string;
    }

    namespace ui {
        interface uiDefinition {
            [key: string]: unknown;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface _uiElement {}

        interface balloonPanel extends _uiElement {
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
                        focusElement?: dom.element | boolean;
                        show?: boolean;
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

            setTriangle(side: "left" | "right" | "top" | "bottom"): void;

            show(): void;
        }

        namespace balloonPanel {
            interface definition extends uiDefinition {
                content?: string;
                title?: string;
            }

            interface templates {
                close?: template;
                content?: template;
                panel?: template;
                title?: template;
                triangle?: template;
                triangleInner?: template;
                triangleOuter?: template;
            }

            interface templateDefinitions {
                close?: string;
                content?: string;
                panel?: string;
                title?: string;
                triangle?: string;
                triangleInner?: string;
                triangleOuter?: string;
            }

            interface rect {
                height?: number;
                left?: number;
                top?: number;
                visible?: boolean;
                width?: number;
            }

            interface parts {
                close?: dom.element;
                content?: dom.element;
                panel?: dom.element;
                title?: dom.element;
                triangle?: dom.element;
                triangleInner?: dom.element;
                triangleOuter?: dom.element;
            }
        }

        interface buttonConstructor<T extends button> {
            new(definition: button.definition): T;
        }

        interface button extends _uiElement {
            getState(): number;

            render(editor: editor, output: string[]): void;

            setState(state: number): void;

            toFeature(editor: editor): feature;
        }

        namespace button {
            interface definition extends uiDefinition {
                icon?: string;
                iconOffset?: number;
                label: string;
                command: string;
                toolbar: string;
            }

            const handler: handlerDefinition<button>;
        }

        interface floatPanel extends _uiElement {
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

        interface handlerDefinition<T extends _uiElement = _uiElement, U extends uiDefinition = uiDefinition> {
            contentsElement: dom.element;

            create(definition: U): T;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface menuButton extends button {}

        namespace menuButton {
            const handler: handlerDefinition<menuButton>;
        }

        interface panel extends _uiElement {
            addBlock(name: string, block: { [key: string]: unknown }): void;

            getBlock(name: string): panel.block;

            render(editor: editor, output?: string[]): void;

            showBlock(name: string): void;
        }

        namespace panel {
            interface block {
                getItems(): dom.nodeList;

                markItem(index: number): void;
            }

            const handler: handlerDefinition<panel>;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface panelButton extends button {}

        namespace panelButton {
            const handler: handlerDefinition<panelButton>;
        }

        interface richCombo extends _uiElement {
            render(editor: editor, output: string[]): void;
        }

        namespace richCombo {
            const handler: handlerDefinition<richCombo>;
        }
    }
}
