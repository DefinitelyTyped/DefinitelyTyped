// Type definitions for Bootbox 5.2.0
// Project: https://github.com/makeusabrew/bootbox
// Definitions by: Vincent Bortone <https://github.com/vbortone>, Kon Pik <https://github.com/konpikwastaken>, Anup Kattel <https://github.com/kanup>, Dominik Schroeter <https://github.com/icereed>, Troy McKinnon <https://github.com/trodi>, Stanny Nuytkens <https://github.com/stannynuytkens>, Soner Köksal <https://github.com/renjfk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/** Bootbox options shared by all modal types */
interface BootboxBaseOptions<T = any> {
    title?: string | Element | undefined;
    callback?: ((result: T) => any) | undefined;
    onEscape?: (() => any) | boolean | undefined;
    show?: boolean | undefined;
    backdrop?: boolean | undefined;
    closeButton?: boolean | undefined;
    animate?: boolean | undefined;
    className?: string | undefined;
    /** All other values result in medium */
    size?: "small" | "sm" |  "large" | "lg" | "extra-large" | "xl" | undefined;
    locale?: string | undefined;
    buttons?: BootboxButtonMap | undefined; // complex object where each key is of type BootboxButton
    scrollable?: boolean | undefined;
}

/** Bootbox options available for custom modals */
interface BootboxDialogOptions<T = any> extends BootboxBaseOptions<T> {
    message: JQuery|any[]|Element|DocumentFragment|Text|string|((index: number, html: string) => string|Element|JQuery);
    swapButtonOrder?: boolean | undefined;
    centerVertical?: boolean | undefined;
}

/** Bootbox options available for alert modals */
interface BootboxAlertOptions extends BootboxDialogOptions<void> {
    callback?: (() => any) | undefined;
    buttons?: BootboxAlertButtonMap | undefined;
}

/** Bootbox options available for confirm modals */
interface BootboxConfirmOptions extends BootboxDialogOptions<boolean> {
    callback: (result: boolean) => any;
    buttons?: BootboxConfirmPromptButtonMap | undefined;
}

type BootboxInputType = "text" | "textarea" | "email" | "select" | "checkbox" | "date" | "time" | "number" | "password" | "radio" | "range";

/** Bootbox options available for prompt modals */
interface BootboxPromptOptions extends BootboxBaseOptions<string> {
    title: string;
    message?: JQuery|any[]|Element|DocumentFragment|Text|string|((index: number, html: string) => string|Element|JQuery);
    value?: string | undefined;
    inputType?: BootboxInputType | undefined;
    callback: (result: string) => any;
    buttons?: BootboxConfirmPromptButtonMap | undefined;
    inputOptions?: { text: string, value: string, group?: string | undefined }[] | undefined;
}

/** Bootbox options available when setting defaults for modals */
interface BootboxDefaultOptions {
    locale?: string | undefined;
    show?: boolean | undefined;
    backdrop?: boolean | undefined;
    closeButton?: boolean | undefined;
    animate?: boolean | undefined;
    className?: string | undefined;
	container?: string | Element | JQuery | undefined;
	value?: string | number | Array<string> | undefined;
	inputType?: BootboxInputType | undefined;
	swapButtonOrder?: boolean | undefined;
	centerVertical?: boolean | undefined;
	multiple?: boolean | undefined;
	scrollable?: boolean | undefined;
	reusable?: boolean | undefined;
}

interface BootboxButton {
    label?: string | undefined;
    className?: string | undefined;
    callback?: (() => any) | undefined;
}

interface BootboxButtonMap {
  [key: string]: BootboxButton | Function;
}

/** ButtonMap options for alerts modals */
interface BootboxAlertButtonMap extends BootboxButtonMap {
    ok: BootboxButton | Function;
}

/** ButtonMap options for confirm and prompt modals */
interface BootboxConfirmPromptButtonMap extends BootboxButtonMap {
    confirm: BootboxButton | Function;
    cancel: BootboxButton | Function;
}

interface BootboxLocaleValues {
    OK: string;
    CANCEL: string;
    CONFIRM: string;
}

interface BootboxStatic {
    alert(message: string, callback?: () => void): JQuery;
    alert(options: BootboxAlertOptions): JQuery;
    confirm(message: string, callback: (result: boolean) => void): JQuery;
    confirm(options: BootboxConfirmOptions): JQuery;
    prompt(message: string, callback: (result: string) => void): JQuery;
    prompt(options: BootboxPromptOptions): JQuery;
    dialog(message: string, callback?: (result: string) => void): JQuery;
    dialog(options: BootboxDialogOptions<string>): JQuery;
    setDefaults(options: BootboxDefaultOptions): void;
    hideAll(): void;

    addLocale(name: string, values: BootboxLocaleValues): void;
    removeLocale(name: string): void;
    setLocale(name: string): void;
}

declare var bootbox: BootboxStatic;

declare module "bootbox" {
    export = bootbox;
}
