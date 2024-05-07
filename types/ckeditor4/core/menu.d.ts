declare namespace CKEDITOR {
    interface CKEditorStatic {
        menu: { new(): menu };
    }
    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_menu.html */
    interface menu {
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

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_menuItem.html */
    interface menuItemDefinition {
        label: string;
        command: string;
        icon: string;
        group: string;
        order?: number;
    }
}
