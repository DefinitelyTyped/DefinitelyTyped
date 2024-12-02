import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Notification Banner component
 */
export class NotificationBanner extends GOVUKFrontendComponent<HTMLElement> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * Notification banner default config
     *
     * @see {@link NotificationBannerConfig}
     */
    static defaults: NotificationBannerConfig;

    /**
     * Notification banner config schema
     *
     * @satisfies {Schema}
     */
    static schema: Readonly<{
        properties: {
            disableAutoFocus: {
                type: "boolean";
            };
        };
    }>;

    /**
     * @param {Element | null} $root - HTML element to use for notification banner
     * @param {NotificationBannerConfig} [config] - Notification banner config
     */
    constructor($root: Element | null, config?: NotificationBannerConfig);
}

/**
 * Notification banner config
 */
export interface NotificationBannerConfig {
    /**
     * - If set to `true` the
     * notification banner will not be focussed when the page loads. This only
     * applies if the component has a `role` of `alert` – in other cases the
     * component will not be focused on page load, regardless of this option.
     */
    disableAutoFocus?: boolean | undefined;
}
