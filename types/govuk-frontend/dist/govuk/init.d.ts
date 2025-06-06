import { type AccordionConfig } from "./components/accordion/accordion.js";
import { type ButtonConfig } from "./components/button/button.js";
import { type CharacterCountConfig } from "./components/character-count/character-count.js";
import { type ErrorSummaryConfig } from "./components/error-summary/error-summary.js";
import { type ExitThisPageConfig } from "./components/exit-this-page/exit-this-page.js";
import { type FileUploadConfig } from "./components/file-upload/file-upload.js";
import { type NotificationBannerConfig } from "./components/notification-banner/notification-banner.js";
import { type PasswordInputConfig } from "./components/password-input/password-input.js";

export interface CompatibleClass {
    new(...args: any[]): any;
    moduleName: string;
}

/**
 * Config for all components via `initAll()`
 */
export interface Config {
    /**
     * - Accordion config
     */
    accordion?: AccordionConfig | undefined;

    /**
     * - Button config
     */
    button?: ButtonConfig | undefined;

    /**
     * - Character Count config
     */
    characterCount?: CharacterCountConfig | undefined;

    /**
     * - Error Summary config
     */
    errorSummary?: ErrorSummaryConfig | undefined;

    /**
     * - Exit This Page config
     */
    exitThisPage?: ExitThisPageConfig | undefined;

    /**
     * - File Upload config
     */
    fileUpload?: FileUploadConfig | undefined;

    /**
     * - Notification Banner config
     */
    notificationBanner?: NotificationBannerConfig | undefined;

    /**
     * - Password input config
     */
    passwordInput?: PasswordInputConfig | undefined;
}

/**
 * Component config keys, e.g. `accordion` and `characterCount`
 */
export type ConfigKey = keyof Config;

export type ComponentConfig<ComponentClass extends CompatibleClass> = ConstructorParameters<ComponentClass>[1];

export interface ErrorContext<ComponentClass extends CompatibleClass> {
    /**
     * - Element used for component module initialisation
     */
    element?: Element | undefined;

    /**
     * - Class of component
     */
    component?: ComponentClass | undefined;

    /**
     * - Config supplied to component
     */
    config: ComponentConfig<ComponentClass>;
}

export type OnErrorCallback<ComponentClass extends CompatibleClass> = (
    error: unknown,
    context: ErrorContext<ComponentClass>,
) => any;

export interface CreateAllOptions<ComponentClass extends CompatibleClass> {
    /**
     * - scope of the document to search within
     */
    scope?: Document | Element | undefined;

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
 * @param {Config & { scope?: Element, onError?: OnErrorCallback<CompatibleClass> }} [config] - Config for all components (with optional scope)
 */
export function initAll(
    config?: Config & {
        scope?: Element;
        onError?: OnErrorCallback<CompatibleClass>;
    },
): void;

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
 * @param {OnErrorCallback<ComponentClass> | Element | Document | CreateAllOptions<ComponentClass> } [createAllOptions] - options for createAll including scope of the document to search within and callback function if error throw by component on init
 * @returns {Array<InstanceType<ComponentClass>>} - array of instantiated components
 */
export function createAll<ComponentClass extends CompatibleClass>(
    Component: ComponentClass,
    config?: ComponentConfig<ComponentClass>,
    createAllOptions?:
        | OnErrorCallback<ComponentClass>
        | Element
        | Document
        | CreateAllOptions<ComponentClass>,
): Array<InstanceType<ComponentClass>>;
