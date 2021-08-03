// Type definitions for medium-editor 5.0
// Project: https://yabwe.github.io/medium-editor/
// Definitions by: pascaliske <https://github.com/pascaliske>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace MediumEditor {
    export interface MediumEditor {
        // Initialization Functions
        new(elements: elementType, options?: CoreOptions): MediumEditor;
        destroy(): void;
        setup(): void;
        addElements(elements: elementType): void;
        removeElements(elements: elementType): void;

        // Event Functions
        on(targets: HTMLElement | NodeList, event: string, listener: EventListenerOrEventListenerObject, useCapture: boolean): MediumEditor;
        off(targets: HTMLElement | NodeList, event: string, listener: EventListenerOrEventListenerObject, useCapture: boolean): MediumEditor;
        subscribe(name: string, listener: (data: any, editable: HTMLElement) => void): MediumEditor;
        unsubscribe(name: string, listener: (data: any, editable: HTMLElement) => void): MediumEditor;
        trigger(name: string, data: any, editable: HTMLElement): MediumEditor;

        // Selection Functions
        checkSelection(): MediumEditor;
        exportSelection(): selectionObject;
        importSelection(selectionState: selectionObject, favorLaterSelectionAnchor: boolean): void;
        getFocusedElement(): HTMLElement;
        getSelectedParentElement(range?: Range): HTMLElement;
        restoreSelection(): void;
        saveSelection(): void;
        selectAllContents(): void;
        selectElement(element: HTMLElement): void;
        stopSelectionUpdates(): void;
        startSelectionUpdates(): void;

        // Editor Action Functions
        cleanPaste(text: string): void;
        createLink(opts: CreateLinkOptions): void;
        execAction(action: string, opts?: string | CreateLinkOptions): boolean;
        pasteHTML(html: string, options?: PasteHTMLOptions): void;
        queryCommandState(action: string): boolean;

        // Helper Functions
        checkContentChanged(editable?: HTMLElement): void;
        delay(fn: () => any): void;
        getContent(index?: number): string;
        getExtensionByName(name: string): any;
        resetContent(element: HTMLElement): void;
        serialize(): any;
        setContent(html: string, index?: number): void;

        // Static Function
        getEditorFromElement(element: HTMLElement): MediumEditor;

        // Properties
        version: {
            major: number;
            minor: number;
            revision: number;
            preRelease: string;
            toString(): string;
        };
    }

    export interface CoreOptions {
        activeButtonClass?: string | undefined;
        allowMultiParagraphSelection?: boolean | undefined;
        buttonLabels?: string | boolean | undefined;
        contentWindow?: Window | undefined;
        delay?: number | undefined;
        disableReturn?: boolean | undefined;
        disableDoubleReturn?: boolean | undefined;
        disableExtraSpaces?: boolean | undefined;
        disableEditing?: boolean | undefined;
        elementsContainer?: HTMLElement | undefined;
        extensions?: any;
        ownerDocument?: Document | undefined;
        spellcheck?: boolean | undefined;
        targetBlank?: boolean | undefined;
        toolbar?: ToolbarOptions | boolean | undefined;
        anchorPreview?: AnchorPreviewOptions | boolean | undefined;
        placeholder?: PlaceholderOptions | boolean | undefined;
        anchor?: AnchorFormOptions | undefined;
        paste?: PasteOptions | undefined;
        keyboardCommands?: KeyboardCommandsOptions | boolean | undefined;
        autoLink?: boolean | undefined;
        imageDragging?: boolean | undefined;
    }

    export interface ToolbarOptions {
        align?: string | undefined;
        allowMultiParagraphSelection?: boolean | undefined;
        buttons?: Button[] | undefined;
        diffLeft?: number | undefined;
        diffTop?: number | undefined;
        firstButtonClass?: string | undefined;
        lastButtonClass?: string | undefined;
        standardizeSelectionStart?: boolean | undefined;
        static?: boolean | undefined;
        sticky?: boolean | undefined;
        stickyTopOffset?: number | undefined;
        updateOnEmptySelection?: boolean | undefined;
        relativeContainer?: Node | undefined;
    }

    export interface AnchorPreviewOptions {
        hideDelay?: number | undefined;
        previewValueSelector?: string | undefined;
        showWhenToolbarIsVisible?: boolean | undefined;
        showOnEmptyLinks?: boolean | undefined;
    }

    export interface PlaceholderOptions {
        text?: string | undefined;
        hideOnClick?: boolean | undefined;
    }

    export interface AnchorFormOptions {
        customClassOption?: string | undefined;
        customClassOptionText?: string | undefined;
        linkValidation?: boolean | undefined;
        placeholderText?: string | undefined;
        targetCheckbox?: boolean | undefined;
        targetCheckboxText?: string | undefined;
    }

    export interface PasteOptions {
        forcePlainText?: boolean | undefined;
        cleanPastedHTML?: boolean | undefined;
        preCleanReplacements?: any[] | undefined;
        cleanReplacements?: any[] | undefined;
        cleanAttrs?: string[] | undefined;
        cleanTags?: string[] | undefined;
        unwrapTags?: string[] | undefined;
    }

    export interface KeyboardCommandsOptions {
        commands?: KeyboardCommandOptions[] | undefined;
    }

    export interface KeyboardCommandOptions {
        command: string;
        key: string;
        meta: boolean;
        shift: boolean;
        alt: boolean;
    }

    export interface CreateLinkOptions {
        value: string;
        target?: string | undefined;
        buttonClass?: string | undefined;
    }

    export interface PasteHTMLOptions {
        cleanAttrs?: string[] | undefined;
        cleanTags?: string[] | undefined;
        unwrapTags?: string[] | undefined;
    }

    export interface ButtonOptions {
        name?: string | undefined;
        action?: string | undefined;
        aria?: string | undefined;
        tagNames?: string[] | undefined;
        style?: { prop: string, value: string } | undefined;
        useQueryState?: boolean | undefined;
        contentDefault?: string | undefined;
        contentFA?: string | undefined;
        classList?: string[] | undefined;
        attrs?: { [key: string]: string } | undefined;
    }

    export type Button = string | ButtonOptions;
    export type elementType = string | HTMLElement | HTMLElement[] | NodeList | NodeListOf<Element> | HTMLCollection;
    export interface selectionObject {
        start: number;
        end: number;
    }
}

declare var MediumEditor: MediumEditor.MediumEditor;

declare module "medium-editor" {
    export = MediumEditor;
}
