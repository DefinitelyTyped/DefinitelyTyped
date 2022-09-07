/// <reference types="jquery" />

declare namespace Dialogify {
    type DialogifyEvent = 'show' | 'close' | 'cancel';
    type locale = 'zh_TW' | 'zh_CN' | 'en_US';

    interface LocalizableButtonActions {
        ok: string;
        cancel: string;
        close: string;
    }

    interface DialogOptions {
        /** CSS class name to be used by dialog, or `Dialogify.SIZE_LARGE` to use style provided by Dialogify. */
        size?: SIZE_LARGE | string;
        /** `true` by default. If `false`, will not show a close icon in right-top of dialog, and cannot close modal by click background or press esc button. */
        closable?: boolean;
        /** `true` by default. If `false`, will be able to scroll with page. */
        fixed?: boolean;
        /** Custom dialog styles. */
        dialog?: DialogStyle;
        /** Top=right close button style. */
        closeButton?: ButtonStyle;
        /** `true` by default. If `false`, will not include a `<form method="dialog"></form>` form in dialog, and need to close dialog in `BUTTON_PRIMARY`. */
        useDialogForm?: boolean;
        /** A string to test source string is ajax or not. `/ajax/` by default, will match if source string includes `/ajax/`. */
        ajaxPrefix?: string;
        /** Query string or object to pass to ajax target. */
        ajaxData?: string | object;
        /**
         * Callback function when ajax done
         * @param this Dialogify instance.
         */
        ajaxComplete?: (this: Dialogify) => void;
    }

    interface SimpleDialogOptions {
        /** Dialog options to be used to create a new Dialogify object. */
        dialogOptions?: DialogOptions;
    }

    interface AlertDialogOptions extends SimpleDialogOptions {
        /**
         * Callback function when dialog closed
         * @param this Dialogify instance.
         */
        close?: (this: Dialogify) => void;
    }

    interface ConfirmDialogOptions extends SimpleDialogOptions {
        /**
         * Callback function when dialog confirmed
         * @param this Dialogify instance.
         */
        ok?: (this: Dialogify) => void;
        /**
         * Callback function when dialog dismissed
         * @param this Dialogify instance.
         */
        cancel?: (this: Dialogify) => void;
    }

    interface PromptDialogOptions extends SimpleDialogOptions {
        /** Placeholder in text input. */
        placeholder?: string;
        /**
         * Callback function when dialog confirmed.
         * @param this Dialogify instance.
         * @param value User inputed value.
         */
        ok?: (this: Dialogify, value: string) => void;
        /**
         * Callback function when dialog dismissed
         * @param this Dialogify instance.
         */
        cancel?: (this: Dialogify) => void;
    }

    interface DialogStyle {
        /** CSS styles in key-value pair object to be used by dialog. */
        style?: { [key: string]: string };
        /** CSS class name to be used by dialog. */
        className?: string;
        /** CSS styles in key-value pair object to be used by dialog content. */
        contentStyle?: { [key: string]: string };
        /** CSS class name to be used by dialog content. */
        contentClassName?: string;
    }

    interface ButtonStyle {
        /** Image src to display as an icon. */
        image?: string;
        /** CSS styles in key-value pair object to be used by button. */
        style?: { [key: string]: string };
        /** CSS class name to be used by button. */
        className?: string;
    }

    interface Button {
        /**
         * Button style, will auto close dialog if set to `BUTTON_PRIMARY`.
         * Can be `Dialogify.BUTTON_PRIMARY`, `Dialogify.BUTTON_DANGER` or a class name.
         */
        type?: BUTTON_PRIMARY | BUTTON_DANGER | string;
        /** Button text content, "關閉" by default. */
        text?: string;
        /**
         * Callback function when button clicked
         * @param this Dialogify instance.
         * @param event Mouse click event
         */
        click?: JQuery.TypeEventHandler<Dialogify, null, Dialogify, Dialogify, 'click'>;
        /** Set `autofocus` property or not, `false` by default. */
        focused?: boolean;
        /** Set button as disabled or not, `false` by default. */
        disabled?: boolean;
        /** Set button id, if set, will also be key in `$buttonList`. */
        id?: string;
    }

    interface ButtonImpl extends Button {
        /** Enable the button. */
        enable(): void;

        /** Disable the button. */
        disable(): void;
    }

    interface ButtonOption {
        /**
         * Button position style, right aligned by default.
         * Can be `Dialogify.BUTTON_CENTER`, `Dialogify.BUTTON_LEFT` or a class name.
         */
        position: BUTTON_CENTER | BUTTON_LEFT | string;
    }

    type SIZE_LARGE = 'dialogify__autowidth';

    type BUTTON_CENTER = 'text-center';
    type BUTTON_LEFT = 'text-left';

    type BUTTON_PRIMARY = 'btn-primary';
    type BUTTON_DANGER = 'btn-danger';

    const LOCALE: { [key in locale]: LocalizableButtonActions };

    interface DialogifyConfig {
        /** Locale for default button text, `zh_TW` by default. */
        locale: locale;
        /** Custom dialog styles. */
        dialog?: DialogStyle;
        /** Top=right close button style. */
        closeButton?: ButtonStyle;
    }
}

declare class Dialogify {
    /**
     * @param source id selector | ajax target url | HTML string that to be used for dialog content.
     * @param dialogOptions Dialog options to be used to create a new Dialogify object.
     */
    constructor(source: string, dialogOptions?: Dialogify.DialogOptions);

    /** JQuery object referance to the dialog element. */
    $content: JQuery;

    /** An object contain buttons, will use button order index as key or if `id` of button is set, will use `id` as key. */
    $buttonList: Record<string | number, Dialogify.ButtonImpl>;

    /**
     * Set dialog title.
     * @param title Dialog title.
     * @returns Dialogify instance for chaining.
     */
    title(title: string): Dialogify;

    /**
     * Set dialog buttons.
     * @param buttons Array of button object or html string, will auto set `id` as key in `$buttonList` if there is `id` property in html string.
     * @param options Button options.
     * @returns Dialogify instance for chaining.
     */
    buttons(buttons: Array<Dialogify.Button | string>, options?: Dialogify.ButtonOption): Dialogify;

    /**
     * Set event listener.
     * @param event Event name.
     * @param callback Callback function.
     * @returns Dialogify instance for chaining.
     */
    on<TType extends Dialogify.DialogifyEvent>(
        event: TType,
        callback: JQuery.TypeEventHandler<Dialogify, undefined, Dialogify, Dialogify, TType>,
    ): Dialogify;

    /**
     * Shows a dialog directly.
     */
    show(): void;

    /**
     * Shows a dialog modal, which has a background and disable interaction outside dialog.
     */
    showModal(): void;

    /**
     * Close opened dialog.
     */
    close(): void;

    /**
     * Get dialog is opened or not.
     * @returns Is dialog opened or not.
     */
    isOpen(): boolean;

    static SIZE_LARGE: Dialogify.SIZE_LARGE;

    static BUTTON_CENTER: Dialogify.BUTTON_CENTER;
    static BUTTON_LEFT: Dialogify.BUTTON_LEFT;

    static BUTTON_PRIMARY: Dialogify.BUTTON_PRIMARY;
    static BUTTON_DANGER: Dialogify.BUTTON_DANGER;

    /**
     * Display a dialog with a message, and to wait until the user dismisses the dialog.
     * @param message content to diaplay in dialog, can be html or text.
     * @param options options of a dialog.
     */
    static alert(message: string, options?: Dialogify.AlertDialogOptions): void;

    /**
     * Display a dialog with a message, and to wait until the user either confirms or cancels the dialog.
     * @param message content to diaplay in dialog, can be html or text.
     * @param options options of a dialog.
     */
    static confirm(message: string, options?: Dialogify.ConfirmDialogOptions): void;

    /**
     * Display a dialog with a message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
     * @param message content to diaplay in dialog, can be html or text.
     * @param options options of a dialog.
     */
    static prompt(message: string, options?: Dialogify.PromptDialogOptions): void;

    /**
     * Close all active dialogs.
     */
    static closeAll(): void;
}
