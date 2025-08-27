declare namespace CKEDITOR {
    interface CKEditorPluginsCore {
        balloontoolbar?: {
            context: {
                new(editor: editor, options: plugins.balloontoolbar.contextDefinition): plugins.balloontoolbar.context;
            };
            contextManager: { new(editor: editor): plugins.balloontoolbar.contextManager };
        } & plugins.balloontoolbar;
    }

    interface CKEditorUIStatic {
        balloonToolbar: { new(editor: editor, definition: ui.balloonPanel.definition): ui.balloonToolbar };
    }

    interface CKEditorPluginsEditorInstance {
        balloonToolbars?: plugins.balloontoolbar.contextManager;
    }

    namespace ui {
        interface balloonToolbar extends _uiElement {
            addElement(name: string, element: button | richCombo): void;

            addElements(elements: { [itemName: string]: button | richCombo }): void;

            deleteItem(name: string): void;

            destroy(): void;

            getItem(name: string): button | richCombo;

            hide(): void;

            refresh(): void;

            show(): void;
        }
    }

    namespace plugins {
        interface balloontoolbar {
            PRIORITY: { [pri: string]: number };
        }

        namespace balloontoolbar {
            interface context {
                editor: editor;
                options: contextDefinition;
                toolbar: ui.balloonToolbar;

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

            interface contextManager {
                editor: editor;

                add(context: context): void;

                check(selection?: dom.selection): void;

                create(options: contextDefinition): context;

                destroy(): void;

                hide(): void;
            }
        }
    }
}
