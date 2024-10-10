import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Exit this page component
 */
export class ExitThisPage extends GOVUKFrontendComponent<HTMLElement> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * Exit this page default config
     *
     * @see {@link ExitThisPageConfig}
     */
    static defaults: ExitThisPageConfig;

    /**
     * Exit this page config schema
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
     * @param {Element | null} $root - HTML element that wraps the Exit This Page button
     * @param {ExitThisPageConfig} [config] - Exit This Page config
     */
    constructor($root: Element | null, config?: ExitThisPageConfig);
}

/**
 * Exit this Page config
 */
export interface ExitThisPageConfig {
    /**
     * - Exit this page translations
     */
    i18n?: ExitThisPageTranslations | undefined;
}

/**
 * Messages used by the component programatically inserted text, including
 * overlay text and screen reader announcements.
 */
export interface ExitThisPageTranslations {
    /**
     * - Screen reader announcement for when EtP
     * keypress functionality has been successfully activated.
     */
    activated?: string | undefined;

    /**
     * - Screen reader announcement for when the EtP
     * keypress functionality has timed out.
     */
    timedOut?: string | undefined;

    /**
     * - Screen reader announcement informing
     * the user they must press the activation key two more times.
     */
    pressTwoMoreTimes?: string | undefined;

    /**
     * - Screen reader announcement informing
     * the user they must press the activation key one more time.
     */
    pressOneMoreTime?: string | undefined;
}
