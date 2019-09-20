// Type definitions for medium-editor 5.0
// Project: https://yabwe.github.io/medium-editor/
// Definitions by: keika299 <https://github.com/keika299>
//                 pascaliske <https://github.com/pascaliske>
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
        activeButtonClass?: string;
        allowMultiParagraphSelection?: boolean;
        buttonLabels?: string | boolean;
        contentWindow?: Window;
        delay?: number;
        disableReturn?: boolean;
        disableDoubleReturn?: boolean;
        disableExtraSpaces?: boolean;
        disableEditing?: boolean;
        elementsContainer?: HTMLElement;
        extensions?: any;
        ownerDocument?: Document;
        spellcheck?: boolean;
        targetBlank?: boolean;
        toolbar?: ToolbarOptions | boolean;
        anchorPreview?: AnchorPreviewOptions | boolean;
        placeholder?: PlaceholderOptions | boolean;
        anchor?: AnchorFormOptions;
        paste?: PasteOptions;
        keyboardCommands?: KeyboardCommandsOptions | boolean;
        autoLink?: boolean;
        imageDragging?: boolean;
    }

    export interface ToolbarOptions {
        align?: string;
        allowMultiParagraphSelection?: boolean;
        buttons?: Button[];
        diffLeft?: number;
        diffTop?: number;
        firstButtonClass?: string;
        lastButtonClass?: string;
        standardizeSelectionStart?: boolean;
        static?: boolean;
        sticky?: boolean;
        stickyTopOffset?: number;
        updateOnEmptySelection?: boolean;
        relativeContainer?: Node;
    }

    export interface AnchorPreviewOptions {
        hideDelay?: number;
        previewValueSelector?: string;
        showWhenToolbarIsVisible?: boolean;
        showOnEmptyLinks?: boolean;
    }

    export interface PlaceholderOptions {
        text?: string;
        hideOnClick?: boolean;
    }

    export interface AnchorFormOptions {
        customClassOption?: string;
        customClassOptionText?: string;
        linkValidation?: boolean;
        placeholderText?: string;
        targetCheckbox?: boolean;
        targetCheckboxText?: string;
    }

    export interface PasteOptions {
        forcePlainText?: boolean;
        cleanPastedHTML?: boolean;
        preCleanReplacements?: any[];
        cleanReplacements?: any[];
        cleanAttrs?: string[];
        cleanTags?: string[];
        unwrapTags?: string[];
    }

    export interface KeyboardCommandsOptions {
        commands?: KeyboardCommandOptions[];
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
        target?: string;
        buttonClass?: string;
    }

    export interface PasteHTMLOptions {
        cleanAttrs?: string[];
        cleanTags?: string[];
        unwrapTags?: string[];
    }

    export interface ButtonOptions {
        name?: string;
        action?: string;
        aria?: string;
        tagNames?: string[];
        style?: { prop: string, value: string };
        useQueryState?: boolean;
        contentDefault?: string;
        contentFA?: string;
        classList?: string[];
        attrs?: { [key: string]: string };
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
