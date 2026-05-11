export as namespace notie;

export type AlertType = 1 | 2 | 3 | 4 | 5 | "success" | "warning" | "error" | "info" | "neutral";

export type Position = "top" | "bottom";

export function alert(options: AlertOptions): void;

export interface AlertOptions {
    text: string;
    /** @default 4 */
    type?: AlertType | undefined;
    /** @default false */
    stay?: boolean | undefined;
    /**
     * Time to linger in seconds.
     * Minimum: 1
     * @default 3
     */
    time?: number | undefined;
    /** @default 'top' */
    position?: Position | undefined;
}

export function force(options: ForceOptions, callback?: () => void): void;

export interface ForceOptions {
    text: string;
    /** @default 5 */
    type?: AlertType | undefined;
    /** @default 'OK' */
    buttonText?: string | undefined;
    /** @default 'top' */
    position?: Position | undefined;

    callback?: (() => void) | undefined;
}

export function confirm(options: ConfirmOptions, submitCallback?: () => void, cancelCallback?: () => void): void;

export interface ConfirmOptions {
    text: string;
    /** @default 'Yes' */
    submitText?: string | undefined;
    /** @default 'Cancel' */
    cancelText?: string | undefined;
    /** @default 'top' */
    position?: Position | undefined;

    submitCallback?: (() => void) | undefined;
    cancelCallback?: (() => void) | undefined;
}

export function input(
    options: InputOptions,
    submitCallback?: (value: string) => void,
    cancelCallback?: (value: string) => void,
): void;

export interface InputOptions {
    text: string;
    /** @default 'Submit' */
    submitText?: string | undefined;
    /** @default 'Cancel' */
    cancelText?: string | undefined;
    /** @default 'top' */
    position?: Position | undefined;
    /** @default 'none' */
    autocapitalize?: string | undefined;
    /** @default 'off' */
    autocomplete?: string | undefined;
    /** @default 'off' */
    autocorrect?: string | undefined;
    /** @default 'true' */
    autofocus?: string | undefined;
    /** @default 'verbatim' */
    inputmode?: string | undefined;
    /** @default '' */
    max?: string | undefined;
    /** @default '' */
    maxlength?: string | undefined;
    /** @default '' */
    min?: string | undefined;
    /** @default '' */
    minlength?: string | undefined;
    /** @default '' */
    placeholder?: string | undefined;
    /** @default 'default' */
    spellcheck?: string | undefined;
    /** @default 'any' */
    step?: string | undefined;
    /** @default 'text' */
    type?: string | undefined;
    /** @default 'null' */
    allowed?: Array<"an" | "a" | "n" | "s"> | RegExp | null | undefined;

    submitCallback?: ((value: string) => void) | undefined;
    cancelCallback?: ((value: string) => void) | undefined;
}

export function select(options: SelectOptions, cancelCallback?: () => void): void;

export interface SelectOptions {
    text: string;
    choices: SelectChoice[];
    /** @default 'Cancel' */
    cancelText?: string | undefined;
    /** @default 'bottom' */
    position?: Position | undefined;
    cancelCallback?: (() => void) | undefined;
}

export interface SelectChoice {
    text: string;
    /** @default 1 */
    type?: string | number | undefined;

    handler(): void;
}

export function date(
    options: DateOptions,
    submitCallback?: (date: Date) => void,
    cancelCallback?: (date: Date) => void,
): void;

export interface DateOptions {
    value: Date;
    /** @default 'OK' */
    submitText?: string | undefined;
    /** @default 'Cancel' */
    cancel?: string | undefined;
    /** @default 'top' */
    position?: Position | undefined;

    submitCallback?: ((date: Date) => void) | undefined;
    cancelCallback?: ((date: Date) => void) | undefined;
}

export function setOptions(options: AllOptions): void;

export interface AllOptions {
    alertTime?: number | undefined;
    dateMonths?: string[] | undefined;
    overlayClickDismiss?: boolean | undefined;
    overlayOpacity?: number | undefined;
    transitionCurve?: string | undefined;
    transitionDuration?: number | undefined;
    transitionSelector?: string | undefined;
    classes?:
        | Partial<
            Record<
                | "container"
                | "textbox"
                | "textboxInner"
                | "button"
                | "element"
                | "elementHalf"
                | "elementThird"
                | "overlay"
                | "backgroundSuccess"
                | "backgroundWarning"
                | "backgroundError"
                | "backgroundInfo"
                | "backgroundNeutral"
                | "backgroundOverlay"
                | "alert"
                | "inputField"
                | "selectChoiceRepeated"
                | "dateSelectorInner"
                | "dateSelectorUp",
                string
            >
        >
        | undefined;
    ids?: { overlay?: string | undefined } | undefined;
    positions?: Partial<Record<"alert" | "force" | "confirm" | "input" | "select" | "date", Position>> | undefined;
}

export function hideAlerts(callback?: () => void): void;

declare namespace _default {
    export { alert, confirm, date, force, hideAlerts, input, select, setOptions };
}

export default _default;
