import { Accordion } from "./components/accordion/accordion.js";
import { Button } from "./components/button/button.js";
import { CharacterCount } from "./components/character-count/character-count.js";
import { ErrorSummary } from "./components/error-summary/error-summary.js";
import { ExitThisPage } from "./components/exit-this-page/exit-this-page.js";
import { FileUpload } from "./components/file-upload/file-upload.js";
import { NotificationBanner } from "./components/notification-banner/notification-banner.js";
import { PasswordInput } from "./components/password-input/password-input.js";

export interface CompatibleClass {
    new(...args: any[]): any;
    moduleName: string;
}

/**
 * Config for all components via `initAll()`
 */
export interface Config {
    /**
     * - Scope of the document to search within
     */
    scope?: Document | Element | null | undefined;

    /**
     * - Initialisation error callback
     */
    onError?:
        | OnErrorCallback<
            | typeof Accordion
            | typeof Button
            | typeof CharacterCount
            | typeof ErrorSummary
            | typeof ExitThisPage
            | typeof FileUpload
            | typeof NotificationBanner
            | typeof PasswordInput
            | undefined
        >
        | undefined;

    /**
     * - Accordion config
     */
    accordion?: ComponentConfig<typeof Accordion>;

    /**
     * - Button config
     */
    button?: ComponentConfig<typeof Button>;

    /**
     * - Character Count config
     */
    characterCount?: ComponentConfig<typeof CharacterCount>;

    /**
     * - Error Summary config
     */
    errorSummary?: ComponentConfig<typeof ErrorSummary>;

    /**
     * - Exit This Page config
     */
    exitThisPage?: ComponentConfig<typeof ExitThisPage>;

    /**
     * - File Upload config
     */
    fileUpload?: ComponentConfig<typeof FileUpload>;

    /**
     * - Notification Banner config
     */
    notificationBanner?: ComponentConfig<typeof NotificationBanner>;

    /**
     * - Password input config
     */
    passwordInput?: ComponentConfig<typeof PasswordInput>;
}

/**
 * Component config keys, e.g. `accordion` and `characterCount`
 */
export type ConfigKey = keyof Omit<Config, "scope" | "onError">;

export type ComponentConfig<ComponentClass extends CompatibleClass> = ConstructorParameters<ComponentClass>[1];

export interface ErrorContext<ComponentClass extends CompatibleClass | undefined = undefined> {
    /**
     * - Element used for component module initialisation
     */
    element?: ComponentClass extends CompatibleClass ? Element : undefined;

    /**
     * - Class of component
     */
    component?: ComponentClass | undefined;

    /**
     * - Config supplied to components
     */
    config?: ComponentClass extends CompatibleClass ? ComponentConfig<ComponentClass> : Config;
}

export type OnErrorCallback<ComponentClass extends CompatibleClass | undefined = undefined> = (
    error: unknown,
    context: ErrorContext<ComponentClass>,
) => any;

export interface CreateAllOptions<ComponentClass extends CompatibleClass> {
    /**
     * - scope of the document to search within
     */
    scope?: Document | Element | null | undefined;

    /**
     * - callback function if error throw by component on init
     */
    onError?: OnErrorCallback<ComponentClass> | undefined;
}

/**
 * Initialise all components
 *
 * Use the `data-module` attributes to find, instantiate and init all of the
 * components provided as part of GOV.UK Frontend.
 *
 * @param {Config | Element | Document | null} [scopeOrConfig] - Scope of the document to search within or config for all components (with optional scope)
 */
export function initAll(scopeOrConfig?: Config | Element | Document | null): void;

/**
 * Create all instances of a specific component on the page
 *
 * Uses the `data-module` attribute to find all elements matching the specified
 * component on the page, creating instances of the component object for each
 * of them.
 *
 * Any component errors will be caught and logged to the console.
 *
 * @template {CompatibleClass} ComponentClass
 * @param {ComponentClass} Component - class of the component to create
 * @param {ComponentConfig<ComponentClass>} [config] - Config supplied to component
 * @param {OnErrorCallback<ComponentClass> | Element | Document | null | CreateAllOptions<ComponentClass>} [scopeOrOptions] - options for createAll including scope of the document to search within and callback function if error throw by component on init
 * @returns {Array<InstanceType<ComponentClass>>} - array of instantiated components
 */
export function createAll<ComponentClass extends CompatibleClass>(
    Component: ComponentClass,
    config?: ComponentConfig<ComponentClass>,
    scopeOrOptions?: OnErrorCallback<ComponentClass> | Element | Document | null | CreateAllOptions<ComponentClass>,
): Array<InstanceType<ComponentClass>>;
