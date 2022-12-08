declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly dialog: typeof dialog
    }
    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_dialog.html */
    class dialog {
        readonly state: number

        constructor(editor: editor, dialogName: string)

        addFocusable(element: dom.element, index?: number): void

        addPage(contents: { [key: string]: unknown }): void

        click(id: string): unknown

        commitContent(): void

        disableButton(id: string): void

        enableButton(id: string): void

        foreach(fn: () => void): dialog

        getButton(id: string): ui.dialog.button

        getContentElement(
            pageId: string,
            elementId: string
        ): ui.dialog.uiElement

        getElement(): dom.element

        getName(): string

        getPageCount(): number

        getParentEditor(): editor

        getPosition(): dom.position

        getSelectedElement(): dom.element

        getSize(): dom.widthAndHeight

        getValueOf(pageId: string, elementId: string): unknown

        hide(): void

        hidePage(id: string): void

        layout(): void

        move(x: number, y: number, save: boolean): void

        reset(): dialog

        resize(width: number, height: number): void

        selectPage(id: string): void

        setState(state: number): void

        setValueOf(pageId: string, elementId: string, value: unknown): void

        setupContent(): void

        show(): void

        showPage(id: string): void

        updateStyle(): void

        static add(
            name: string,
            dialogDefinition:
                | string
                | ((editor: editor) => dialog.DialogDefinition)
        ): void

        static addIframe(
            name: string,
            title: string,
            minWidth: number,
            minHeight: number,
            onContentLoad?: () => void,
            userDefinition?: { [key: string]: unknown }
        ): void

        static addUIElement(typeName: string, builder: () => void): void

        static cancelButton(): void

        static exists(name: string | number): void // NOTE: documentation says object, but it's an array accessor, so really a string or number will work
        static getCurrent(): dialog

        static isTabEnabled(
            editor: editor,
            dialogName: string,
            tabName: string
        ): boolean

        static okButton(): void
    }

    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_dialogCommand.html */
    class dialogCommand {
        value: unknown

        constructor(dialogName: string, ext?: { tabId?: string | undefined })
    }

    namespace dialog {
        namespace definition {
            interface button extends uiElement {
                disabled?: boolean | undefined
            }

            interface checkbox extends uiElement {
                default?: string | undefined
                validate?: (() => boolean) | undefined
            }

            interface content {
                accessKey?: string | undefined
                elements?: uiElement[] | undefined
                id?: string | undefined
                label?: string | undefined
                title?: string | undefined
            }

            interface file extends labeledElement {
                action?: string | undefined
                size?: string | undefined
                validate?: (() => boolean) | undefined
            }

            interface fileButton extends uiElement {
                filebrowser?: string | undefined
                for?: string | undefined
                validate?: (() => boolean) | undefined
            }

            interface hbox extends uiElement {
                children?: ui.dialog.uiElement[] | undefined
                height?: number | undefined
                padding?: number | undefined
                validate?: (() => boolean) | undefined
                widths?: number[] | undefined
            }

            interface html extends uiElement {
                html?: string | undefined
            }

            interface labeledElement extends uiElement {
                controlStyle?: string | undefined
                inputStyle?: string | undefined
                labelLayout?: string | undefined
                labelStyle?: string | undefined
                widths?: number[] | undefined
            }

            interface radio extends labeledElement {
                default?: string | undefined
                items?: string[] | string[][] | undefined
                validate?: (() => boolean) | undefined
            }

            interface select extends labeledElement {
                default?: string | undefined
                items?: string[] | string[][] | undefined
                multiple?: boolean | undefined
                size?: number | undefined
                validate?: (() => boolean) | undefined
            }

            interface textarea extends labeledElement {
                bidi?: boolean | undefined
                cols?: number | undefined
                default?: string | undefined
                rows?: number | undefined
                validate?: (() => boolean) | undefined
            }

            interface textInput extends labeledElement {
                bidi?: boolean | undefined
                default?: string | undefined
                maxLength?: number | undefined
                size?: number | undefined
                validate?: (() => boolean) | undefined
            }

            interface uiElement {
                align?: string | undefined
                className?: string | undefined
                commit?: ((widget: plugins.widget) => void) | undefined
                id?: string | undefined
                label?: string | undefined
                onHide?: ((elem: ui.dialog.uiElement) => void) | undefined
                onLoad?: ((elem: ui.dialog.uiElement) => void) | undefined
                onShow?: ((elem: ui.dialog.uiElement) => void) | undefined
                requiredContent?:
                    | string
                    | { [key: string]: unknown }
                    | style
                    | undefined
                setup?: ((widget: plugins.widget) => void) | undefined
                style?: string | undefined
                title?: string | undefined
                type?: string | undefined
            }

            interface vbox extends uiElement {
                children?: ui.dialog.uiElement[] | undefined
                expand?: boolean | undefined
                heights?: number[] | undefined
                padding?: number | undefined
                styles?: string | undefined
                width?: number[] | undefined
            }
        }

        interface DialogDefinition {
            buttons?: definition.button[] | undefined
            contents?: definition.content[] | undefined
            height?: number | undefined
            minHeight?: number | undefined
            minWidth?: number | undefined
            onCancel?: (() => void) | undefined
            onLoad?: (() => void) | undefined
            onOk?: (() => void) | undefined
            onShow?: (() => void) | undefined
            onHide?: (() => void) | undefined
            resizable?: number | undefined
            title?: string | undefined
            width?: number | undefined
        }
    }
}
