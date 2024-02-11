declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly dialog?: {
            new(editor: editor, dialogName: string): dialog;

            add(name: string, dialogDefinition: string | dialog.definitionFn): void;

            addIframe(
                name: string,
                title: string,
                minWidth: number,
                minHeight: number,
                onContentLoad?: () => void,
                userDefinition?: { [key: string]: unknown },
            ): void;

            addUIElement(typeName: string, builder: () => void): void;

            cancelButton(): void;

            exists(name: string | number): void; // NOTE: documentation says object, but it's an array accessor, so really a string or number will work
            getCurrent(): dialog;

            isTabEnabled(editor: editor, dialogName: string, tabName: string): boolean;

            okButton(): void;
        };
        readonly dialogCommand?: { new(dialogName: string, ext?: { tabId?: string | undefined }): dialogCommand };
    }

    interface CKEditorUIStatic {
        dialog?: {
            button: ui.dialog.uiElementConstructor<ui.dialog.button, dialog.definition.button>;
            checkbox: ui.dialog.uiElementConstructor<ui.dialog.checkbox, dialog.definition.checkbox>;
            fieldset: ui.dialog.uiParentConstructor<ui.dialog.fieldset, dialog.definition.fieldSet>;
            file: ui.dialog.uiElementConstructor<ui.dialog.file, dialog.definition.file>;
            fileButton: ui.dialog.uiElementConstructor<ui.dialog.fileButton, dialog.definition.fileButton>;
            hbox: ui.dialog.uiParentConstructor<ui.dialog.hbox, dialog.definition.hbox>;
            html: ui.dialog.uiElementConstructor<ui.dialog.html, dialog.definition.html>;
            iframeElement: ui.dialog.uiElementConstructor<ui.dialog.iframeElement, dialog.definition.uiElement>;
            labeledElement: ui.dialog.uiElementConstructor<ui.dialog.labeledElement, dialog.definition.file>;
            radio: ui.dialog.uiElementConstructor<ui.dialog.radio, dialog.definition.radio>;
            select: ui.dialog.uiElementConstructor<ui.dialog.select, dialog.definition.select>;
            textarea: ui.dialog.uiElementConstructor<ui.dialog.textarea, dialog.definition.textarea>;
            textInput: ui.dialog.uiElementConstructor<ui.dialog.textInput, dialog.definition.textInput>;
            uiElement: ui.dialog.uiElementConstructor<ui.dialog.uiElement, dialog.definition.uiElement>;
            vbox: ui.dialog.uiParentConstructor<ui.dialog.vbox, dialog.definition.vbox>;
        };
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dialog.html */
    interface dialog {
        readonly state: number;

        addFocusable(element: dom.element, index?: number): void;

        addPage(contents: { [key: string]: unknown }): void;

        click(id: string): unknown;

        commitContent(): void;

        disableButton(id: string): void;

        enableButton(id: string): void;

        foreach(fn: () => void): dialog;

        getButton(id: string): ui.dialog.button;

        getContentElement(pageId: string, elementId: string): ui.dialog.uiElement;

        getElement(): dom.element;

        getName(): string;

        getPageCount(): number;

        getParentEditor(): editor;

        getPosition(): dom.position;

        getSelectedElement(): dom.element;

        getSize(): dom.widthAndHeight;

        getValueOf(pageId: string, elementId: string): unknown;

        hide(): void;

        hidePage(id: string): void;

        layout(): void;

        move(x: number, y: number, save: boolean): void;

        reset(): dialog;

        resize(width: number, height: number): void;

        selectPage(id: string): void;

        setState(state: number): void;

        setValueOf(pageId: string, elementId: string, value: unknown): void;

        setupContent(): void;

        show(): void;

        showPage(id: string): void;

        updateStyle(): void;

        add(name: string, dialogDefinition: string | ((editor: editor) => dialog.DialogDefinition)): void;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dialogCommand.html */
    interface dialogCommand {
        value: unknown;
    }

    namespace dialog {
        namespace definition {
            interface button extends uiElement {
                disabled?: boolean | undefined;
            }

            interface checkbox extends uiElement {
                default?: string | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface content {
                accessKey?: string | undefined;
                elements?: uiElement[] | undefined;
                id?: string | undefined;
                label?: string | undefined;
                title?: string | undefined;
            }

            interface fieldSet extends uiElement {
                label?: string | undefined;
                children: unknown[];
            }

            interface file extends labeledElement {
                action?: string | undefined;
                size?: string | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface fileButton extends uiElement {
                filebrowser?: string | undefined;
                for?: string | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface hbox extends uiElement {
                children?: ui.dialog.uiElement[] | undefined;
                height?: number | undefined;
                padding?: number | undefined;
                validate?: (() => boolean) | undefined;
                widths?: number[] | undefined;
            }

            interface html extends uiElement {
                html?: string | undefined;
            }

            interface labeledElement extends uiElement {
                controlStyle?: string | undefined;
                inputStyle?: string | undefined;
                labelLayout?: string | undefined;
                labelStyle?: string | undefined;
                widths?: number[] | undefined;
            }

            interface radio extends labeledElement {
                default?: string | undefined;
                items?: string[] | string[][] | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface select extends labeledElement {
                default?: string | undefined;
                items?: string[] | string[][] | undefined;
                multiple?: boolean | undefined;
                size?: number | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface textarea extends labeledElement {
                bidi?: boolean | undefined;
                cols?: number | undefined;
                default?: string | undefined;
                rows?: number | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface textInput extends labeledElement {
                bidi?: boolean | undefined;
                default?: string | undefined;
                maxLength?: number | undefined;
                size?: number | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface uiElement {
                align?: string | undefined;
                className?: string | undefined;
                commit?: ((widget: plugins.widget) => void) | undefined;
                id?: string | undefined;
                label?: string | undefined;
                onHide?: ((elem: ui.dialog.uiElement) => void) | undefined;
                onLoad?: ((elem: ui.dialog.uiElement) => void) | undefined;
                onShow?: ((elem: ui.dialog.uiElement) => void) | undefined;
                requiredContent?: string | { [key: string]: unknown } | style | undefined;
                setup?: ((widget: plugins.widget) => void) | undefined;
                style?: string | undefined;
                title?: string | undefined;
                type?: string | undefined;
            }

            interface vbox extends uiElement {
                children?: ui.dialog.uiElement[] | undefined;
                expand?: boolean | undefined;
                heights?: number[] | undefined;
                padding?: number | undefined;
                styles?: string | undefined;
                width?: number[] | undefined;
            }
        }

        type definitionFn = (editor: editor) => DialogDefinition;
        interface DialogDefinition {
            buttons?: definition.button[] | undefined;
            contents?: definition.content[] | undefined;
            height?: number | undefined;
            minHeight?: number | undefined;
            minWidth?: number | undefined;
            onCancel?: (() => void) | undefined;
            onLoad?: (() => void) | undefined;
            onOk?: (() => void) | undefined;
            onShow?: (() => void) | undefined;
            onHide?: (() => void) | undefined;
            resizable?: number | undefined;
            title?: string | undefined;
            width?: number | undefined;

            getMode?(editor: editor): number;
            getModel?(editor: editor): dom.element | plugins.widget | unknown | null;
        }
    }

    namespace ui {
        namespace dialog {
            interface uiElementConstructor<T extends uiElement, U extends CKEDITOR.dialog.definition.uiElement> {
                new(
                    dialog: dialog,
                    htmlList: unknown,
                    elementDefinition: U,
                    nodeNameArg?: (() => string) | string,
                    stylesArg?: (() => { [key: string]: unknown }) | { [key: string]: unknown },
                    attributesArg?: (() => { [key: string]: unknown }) | { [key: string]: unknown },
                    contentsArg?: () => { [key: string]: unknown } | string,
                ): T;
            }
            interface uiParentConstructor<T extends uiElement, U extends CKEDITOR.dialog.definition.uiElement> {
                new(
                    dialog: dialog,
                    childObjList: uiElement[],
                    childHtmlList: unknown[],
                    elementDefinition: U,
                    htmlList: unknown[],
                ): T;
            }
            interface button extends uiElement {
                accessKeyDown(): void;

                accessKeyUp(): void;

                click(): unknown;
            }

            interface checkbox extends uiElement {
                accessKeyUp(): void;

                getValue(): boolean;

                setValue(checked: boolean, noChangeEvent: boolean): undefined;
            }

            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface fieldset extends uiElement {}

            interface file extends labeledElement {
                getAction(): string;

                registerEvents(definition: { [key: string]: unknown }): file;

                reset(): void;

                setInitValue(): void;

                submit(): file;
            }

            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface fileButton extends button {}

            interface hbox extends uiElement {
                getChild(indices: number): uiElement;
                getChild(indices: number[]): uiElement[];
            }

            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface html extends uiElement {}

            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface iframeElement extends uiElement {}

            interface labeledElement extends uiElement {
                getLabel(): string;

                setLabel(label: string): labeledElement;
            }

            interface radio extends labeledElement {
                accessKeyUp(): void;

                getValue(): string;

                setValue(value: string, noChangeEvent: boolean): undefined;
            }

            interface select extends uiElement {
                add(label: string, value?: string, indexedDB?: number): select;

                clear(): select;

                remove(index: number): select;
            }

            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface textarea extends labeledElement {}

            interface textInput extends labeledElement {
                accessKeyUp(): void;

                focus(): undefined;

                getDirectionMarker(): string;

                getValue(): string;

                select(): void;

                setDirectionMarker(dir: string): void;

                setValue(value: string, noChangeEvent: boolean): textInput;
            }

            interface uiElement {
                eventProcessors: unknown;

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

            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface vbox extends hbox {}
        }
    }
}
