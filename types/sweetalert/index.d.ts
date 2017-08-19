// Type definitions for SweetAlert 1.1.3
// Project: https://github.com/t4t5/sweetalert/
// Definitions by: Markus Peloso <https://github.com/ToastHawaii/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var sweetAlert: SweetAlert.SweetAlertStatic;
declare var swal: SweetAlert.SweetAlertStatic;

declare module "sweetalert" {
    export = swal;
}

declare namespace SweetAlert {
    type AlertType = "warning" | "error" | "success" | "info";

    type PromtType = "input" | "prompt";

    interface SettingsBase {
        /**
         * A description for the modal.
         * Default: null
         */
        text?: string;

        /**
         * If set to true, the user can dismiss the modal by pressing the Escape key.
         * Default: true
         */
        allowEscapeKey?: boolean;

        /**
         * A custom CSS class for the modal.
         * Default: null
         */
        customClass?: string;

        /**
         * If set to true, the user can dismiss the modal by clicking outside it.
         * Default: false
         */
        allowOutsideClick?: boolean;

        /**
         * If set to true, a "Cancel"-button will be shown, which the user can click on to dismiss the modal.
         * Default: false
         */
        showCancelButton?: boolean;

        /**
         * If set to false, the "OK/Confirm"-button will be hidden. Make sure you set a timer or set allowOutsideClick to true when using this, in order not to annoy the user.
         * Default: true
         */
        showConfirmButton?: boolean;

        /**
         * Use this to change the text on the "Confirm"-button. If showCancelButton is set as true, the confirm button will automatically show "Confirm" instead of "OK".
         * Default: "OK"
         */
        confirmButtonText?: string;

        /**
         * Use this to change the background color of the "Confirm"-button (must be a HEX value).
         * Default: "#8CD4F5"
         */
        confirmButtonColor?: string;

        /**
         * Use this to change the text on the "Cancel"-button.
         * Default: "Cancel"
         */
        cancelButtonText?: string;

        /**
         * Set to false if you want the modal to stay open even if the user presses the "Confirm"-button. This is especially useful if the function attached to the "Confirm"-button is another SweetAlert.
         * Default: true
         */
        closeOnConfirm?: boolean;

        /**
         * Set to false if you want the modal to stay open even if the user presses the "Cancel"-button. This is especially useful if the function attached to the "Cancel"-button is another SweetAlert.
         * Default: true
         */
        closeOnCancel?: boolean;

        /**
         * Add a customized icon for the modal.Should contain a string with the path to the image.
         * Default: null
         */
        imageUrl?: string;

        /**
         * If imageUrl is set, you can specify imageSize to describes how big you want the icon to be in px. Pass in a string with two values separated by an "x". The first value is the width, the second is the height.
         * Default: "80x80"
         */
        imageSize?: string;

        /**
         * Auto close timer of the modal. Set in ms (milliseconds).
         * Default: null
         */
        timer?: number;

        /**
         * If set to true, will not escape title and text parameters. (Set to false if you're worried about XSS attacks.)
         * Default: false
         */
        html?: boolean;

        /**
         * If set to false, the modal's animation will be disabled. Possible animations: "slide-from-top", "slide-from-bottom", "pop" (use true instead) and "none" (use false instead).
         * Default: true
         */
        animation?: boolean | "slide-from-top" | "slide-from-bottom" | "pop" | "none" | string;

        /**
         * Set to true to disable the buttons and show that something is loading.
         * Default: false
         */
        showLoaderOnConfirm?: boolean;
    }

    interface AlertModalSettings extends SettingsBase {
        /**
         * The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info". You can also set it as "input" to get a prompt modal.
         * Default: null
         */
        type?: AlertType;
    }

    interface PromtModalSettings extends SettingsBase {
        /**
         * The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info". You can also set it as "input" to get a prompt modal.
         * Default: null
         */
        type?: PromtType;

        /**
         * Change the type of the input field when using type: "input" (this can be useful if you want users to type in their password for example).
         * Default: "text"
         */
        inputType?: string;

        /**
         * When using the input-type, you can specify a placeholder to help the user.
         * Default: null
         */
        inputPlaceholder?: string;

        /**
         * Specify a default text value that you want your input to show when using type: "input"
         * Default: null
         */
        inputValue?: string;
    }

    interface Settings {
        /**
         * The title of the modal.
         */
        title: string;
    }

    interface SetDefaultsSettings {
        /**
         * The title of the modal.
         * Default: null
         */
        title?: string;
    }

    interface SweetAlertStatic {
        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param title The title of the modal.
         */
        (title: string): void;

        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param title The title of the modal.
         * @param text A description for the modal.
         */
        (title: string, text: string): void;

        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param title The title of the modal.
         * @param text A description for the modal.
         * @param type The type of the modal. SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info". You can also set it as "input" to get a prompt modal.
         */
        (title: string, text: string, type: AlertType | PromtType): void;

        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param callback The callback from the users action. The value is true or false if the user confirms or cancels the alert.
         */
        (settings: Settings & AlertModalSettings, callback?: (isConfirm: boolean) => any): void;

        /**
         * SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. An awesome replacement for JavaScript's alert.
         * @param callback The callback from the users action. When the user confirms the prompt, the argument contains the value of the input element. When the user cancels the prompt, the argument is false.
         */
        (settings: Settings & PromtModalSettings, callback?: (isConfirmOrInputValue: boolean | string) => any): void;

        /**
         * If you end up using a lot of the same settings when calling SweetAlert, you can use setDefaults at the start of your program to set them once and for all!
         */
        setDefaults(settings: SetDefaultsSettings & AlertModalSettings & PromtModalSettings): void;

        /**
         * Close the currently open SweetAlert programmatically.
         */
        close(): void;

        /**
         * Show an error message after validating the input field, if the user's data is bad.
         */
        showInputError(errorMessage: string): void;

        /**
         * Enable the user to click on the cancel and confirm buttons.
         */
        enableButtons(): void;

        /**
         * Disable the user to click on the cancel and confirm buttons.
         */
        disableButtons(): void;
    }
}
