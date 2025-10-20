/**
 * SsiModal:
 * @see https://github.com/ssbeefeater/ssi-modal
 * @author ssbeefeater
 *
 * This d.ts file:
 * @author dragon-fish
 *
 * @license MIT
 */

declare namespace SsiModal {
    class SsiModal {
        constructor(options: Partial<SsiModalOptions>);

        readonly backdropId: string;
        readonly modalId: string;
        readonly numberId: string;
        options: SsiModalOptions;
        readonly pluginName: string;
        /**
         * Initialize the modal and backdrop and expose them to the DOM
         */
        init(): this;
        /**
         * Changes the previe state (fullScreen) of the modal.
         */
        changePreviewState(): this;
        /**
         * Generates a button according to the options.
         * @returns The button element.
         */
        generateButton(buttonOptions: Partial<SsiModalButtonOptions>): JQuery<HTMLElement>;
        /**
         * Returns the backdrop element of the modal.
         * Or outer element if the modal is stack.
         */
        get$backdrop(): JQuery<HTMLElement>;
        /**
         * Returns the buttons element of the modal.
         * @param type - 'left' or 'right'. If not specified, returns all buttons' container.
         */
        get$buttons(type?: "buttons" | "leftButtons" | "rightButtons"): JQuery<HTMLElement>;
        /**
         * Returns the content element of the modal.
         */
        get$content(): JQuery<HTMLElement>;
        /**
         * Returns the title icons of the modal.
         */
        get$icons(): JQuery<HTMLElement>;
        /**
         * Returns the modal element of the modal.
         * @description returns the outer element of the modal (ie if we use stack modals will return the window object else will return the modalOuter)
         */
        get$modal(): SsiModalModalElement;
        /**
         * Returns the title element of the modal.
         */
        get$title(): JQuery<HTMLElement>;
        /**
         * Returns the window element of the modal.
         */
        get$window(): JQuery<HTMLElement>;
        /**
         * Returns the wrapper element of the modal.
         */
        get$wrapper(): JQuery<HTMLElement>;
        /**
         * Initialize the buttons element if it is necessary, and add the buttons to the element.
         * @returns Buttons container element.
         */
        setButtons(
            buttons: Partial<SsiModalButtonOptions>[],
            area?: AnyJQueryElement,
            $modalWindow?: JQuery<any>,
        ): JQuery<HTMLElement>;
        /**
         * Initialize the content element if it is necessary and registers the content.
         * @param content The content of the element.
         * @param method The jquery method that will use to register the content to the modal.
         * @returns The content element of the modal.
         */
        setContent(
            content: string | HTMLElement | JQuery<any>,
            method?: "html" | "append" | "prepend",
        ): JQuery<any>;
        setIcons(icons: { className: string; method: () => void }[]): JQuery<HTMLElement>;
        setModalHeight(offset: number, option?: "height" | "min-height" | "max-height"): number;
        setOptions<T extends keyof SsiModalOptions>(option: T, value: SsiModalOptions[T]): this;
        setOptions(options: Partial<SsiModalOptions>): this;
        setPluginName(name: string): this;
        setTitle(title: string | HTMLElement | JQuery<any>): JQuery<HTMLElement>;
        show(): this;
        close(): this;

        protected backdropInit(): JQuery<HTMLElement>;
        protected modalInit(): SsiModalModalElement;
        protected showBackdrop(): void;
        protected destroyBackdrop(): this;
        protected destroyModal(): this;
        protected destroyTitle(): this;
        protected destroyContent(): this;
        protected destroyButtons(): this;
        protected destroyIcons(): this;
    }

    // default module export
    interface ssi_modal {
        /**
         * Checks if the element is a ssi modal object.
         */
        checkElement(element: AnyJQueryElement): SsiModal | false;
        /**
         * Creates a ssi modal object and shows it immediately.
         * @param options The options of the modal
         * @param element The id or class name of the element that trigger the modal.
         * @example ```js
         * ssi_modal.show({ content:'Hello World' })
         * ```
         */
        show(options: Partial<SsiModalOptions>, element?: AnyJQueryElement): ReturnType<SsiModal["show"]>;
        /**
         * Creates a ssi modal object but does not init or show it.
         * @param options The options of the modal
         * @param element The id or class name of the element that trigger the modal.
         * @example ```js
         * ssi_modal.createObject({ content:'Hello World' }).init().show()
         * ```
         */
        createObject(options: Partial<SsiModalOptions>, element?: AnyJQueryElement): SsiModal;
        /**
         * Closes the very top modal. If you pass a target parameter will close the modal you specified.
         */
        close(modalId?: string | JQuery): ReturnType<SsiModal["close"]>;
        /**
         * Close all opened modal with the right order and all callbacks will execute normally
         * @param group `"normalModal"` or plugin names
         * @param except Except modals with this selector
         */
        closeAll(group?: string | string[], except?: string | string[]): SsiModal;
        /**
         * Remove all the modals from the dom immediately. No callbacks will execute.
         */
        removeAll(): void;
        /**
         * You can extend the prototype of the SsiModal by adding new methods on ssi.proto
         * @example ```ts
         * ssi_modal.proto.clearContent = function () { this.get$content().text('') }
         * ssi_modal.show({ content: 'hello, world' }).clearContent()
         * //                                          ↑ here
         * ```
         */
        proto: SsiModal;
    }

    // == Plugins ==
    interface ssi_modal {
        // dialog
        dialog(
            options: Partial<SsiModalOptions>,
            method: (event: MouseEvent, modal: SsiModal) => void,
        ): SsiModal;
        // confirm
        confirm(
            options:
                & Partial<SsiModalOptions>
                & Partial<{
                    okBtn: Pick<SsiModalButtonOptions, "label" | "className">;
                    cancelBtn: Pick<SsiModalButtonOptions, "label" | "className">;
                }>,
            method: (event: MouseEvent, modal: SsiModal) => void,
        ): SsiModal;
        // notify
        /**
         * Display a popup notification similar to a toast box
         * @param type One of predefined types, or any custom className
         */
        notify(
            type: "success" | "error" | "warning" | "info" | "dialog" | "confirm" | string,
            options:
                & Partial<SsiModalOptions>
                & Partial<{
                    icon: string;
                    okBtn: Pick<SsiModalButtonOptions, "label" | "className">;
                    cancelBtn: Pick<SsiModalButtonOptions, "label" | "className">;
                    overrideOther: boolean;
                }>,
            callback?: (result: boolean) => void,
        ): SsiModal;
    }

    interface SsiModalOptions {
        animation: SsiModalAnimation;
        animationSpeed: number;
        backdrop: boolean | ("shared" | "byKindShared");
        backdropAnimation: SsiModalAnimation;
        backdropClassName: string;
        /**
         * Trigger before the modal is closed.
         * If `false` is returned, the modal will not be closed.
         */
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        beforeClose: (modal: SsiModal) => boolean | void;
        /**
         * Trigger before the modal is shown.
         * If `false` is returned, the modal will not be shown.
         */
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        beforeShow: (modal: SsiModal) => boolean | void;
        bodyElement: boolean;
        bodyScroll: boolean;
        buttons: Partial<SsiModalButtonOptions>[];
        center: boolean;
        className: string;
        closeAfter: {
            time: number;
            displayTime: number;
            resetOnHover: boolean;
        };
        closeIcon: boolean;
        content: AnyJQueryElement;
        fitScreen: boolean;
        fixedHeight: boolean | number;
        iconButtons: boolean;
        iframe: unknown;
        keepContent: boolean;
        modalAnimation: SsiModalAnimation;
        navigation: boolean;
        /**
         * Trigger after closed via close icon
         */
        onClickClose: boolean;
        /**
         * Trigger after the modal is closed.
         */
        onClose: (modal: SsiModal) => void;
        /**
         * Trigger after the modal is shown.
         */
        onShow: (modal: SsiModal) => void;
        /**
         * Should the modal be closed when clicking backdrop of it?
         */
        outSideClose: boolean;
        position:
            | "right top"
            | "right bottom"
            | "left top"
            | "left bottom"
            | "center top"
            | "center bottom";
        preview: unknown;
        sizeClass: SsiModalSizeClass;
        stack: boolean;
        title: AnyJQueryElement;
    }

    interface SsiModalButtonOptions {
        label: AnyJQueryElement;
        type: "button" | "link";
        className: string;
        enableAfter: number | false;
        id: string;
        method: (this: HTMLButtonElement, event: MouseEvent, modal: SsiModal) => void;
        side: "left" | "right";
        keyPress: string;
        closeAfter: number | false;
    }

    type SsiModalSizeClass =
        | "dialog"
        | "small"
        | "smallToMedium"
        | "medium"
        | "mediumToLarge"
        | "large"
        | "full"
        | "auto";

    type SsiModalModalElement = JQuery<HTMLElement> & {
        on:
            & JQuery["on"]
            & (<T extends keyof SsiModalEventMap>(
                event: T,
                callback: (event: SsiModalEventMap[T]) => void,
            ) => SsiModalModalElement);
        data: JQuery["data"] & {
            (key: "ssi-modal"): SsiModal;
        };
    };
    interface SsiModalEventMap {
        "beforeShow.ssi-modal": JQuery.Event;
        "onShow.ssi-modal": JQuery.Event;
        "backdropClose.ssi-modal": JQuery.Event;
        "beforeClose.ssi-modal": JQuery.Event;
        "onClose.ssi-modal": JQuery.Event;
    }

    type SsiModalAnimation =
        | string
        | {
            show: string | false;
            hide: string | false;
        }
        | false;

    // eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
    type AnyJQueryElement = string | HTMLElement | JQuery<any>;
}

declare const ssi_modal: SsiModal.ssi_modal;
type SsiModal = SsiModal.SsiModal;
type SsiModalOptions = SsiModal.SsiModalOptions;
type SsiModalButtonOptions = SsiModal.SsiModalButtonOptions;
type SsiModalSizeClass = SsiModal.SsiModalSizeClass;
type SsiModalModalElement = SsiModal.SsiModalModalElement;
type SsiModalEventMap = SsiModal.SsiModalEventMap;
type SsiModalAnimation = SsiModal.SsiModalAnimation;
