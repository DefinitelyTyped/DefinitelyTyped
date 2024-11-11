import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Password input component
 */
export class PasswordInput extends GOVUKFrontendComponent<HTMLElement> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * Password input default config
     *
     * @see {@link PasswordInputConfig}
     */
    static defaults: PasswordInputConfig;

    /**
     * Password input config schema
     *
     * @satisfies {Schema}
     */
    static schema: Readonly<{
        properties: {
            i18n: {
                type: "object";
            };
        };
    }>;

    /**
     * @param {Element | null} $root - HTML element to use for password input
     * @param {PasswordInputConfig} [config] - Password input config
     */
    constructor($root: Element | null, config?: PasswordInputConfig);
}

/**
 * Password input config
 */
export interface PasswordInputConfig {
    /**
     * - Password input translations
     */
    i18n?: PasswordInputTranslations | undefined;
}

/**
 * Messages displayed to the user indicating the state of the show/hide toggle.
 */
export interface PasswordInputTranslations {
    /**
     * - Visible text of the button when the
     * password is currently hidden. Plain text only.
     */
    showPassword?: string | undefined;

    /**
     * - Visible text of the button when the
     * password is currently visible. Plain text only.
     */
    hidePassword?: string | undefined;

    /**
     * - aria-label of the button when
     * the password is currently hidden. Plain text only.
     */
    showPasswordAriaLabel?: string | undefined;

    /**
     * - aria-label of the button when
     * the password is currently visible. Plain text only.
     */
    hidePasswordAriaLabel?: string | undefined;

    /**
     * - Screen reader
     * announcement to make when the password has just become visible.
     * Plain text only.
     */
    passwordShownAnnouncement?: string | undefined;

    /**
     * - Screen reader
     * announcement to make when the password has just been hidden.
     * Plain text only.
     */
    passwordHiddenAnnouncement?: string | undefined;
}
