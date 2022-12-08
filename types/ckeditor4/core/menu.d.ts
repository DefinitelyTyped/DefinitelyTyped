declare namespace CKEDITOR {
    interface CKEditorStatic {
        menu: typeof menu;
    }
    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_menu.html */
    class menu {
        constructor();

        add(item: unknown): void;

        addListener(
            listenerFn: (startElement: dom.element, selection: dom.selection, path: dom.elementPath) => unknown,
        ): void;

        findItemByCommandName(commandName: string): {
            item: unknown;
            element: dom.element;
        };

        hide(returnFocus?: boolean): void;

        removeAll(): void;

        show(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
    }

    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_menuItem.html */
    interface menuItemDefinition {
        label: string;
        command: string;
        icon: string;
        group: string;
        order?: number;
    }
}
