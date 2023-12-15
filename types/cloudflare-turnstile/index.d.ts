declare const turnstile: Turnstile.Turnstile;

declare namespace Turnstile {
    interface Turnstile {
        /**
         * Invokes a Turnstile widget and returns the ID of the newly created widget.
         * @param container The HTML element to render the Turnstile widget into. Specify either the ID of HTML element (string), or the DOM element itself.
         * @param params An object containing render parameters as key=value pairs, for example, {"sitekey": "your_site_key", "theme": "auto"}.
         * @return the ID of the newly created widget, or undefined if invocation is unsuccessful.
         */
        render(container: string | HTMLElement, params: RenderParameters): string | undefined;

        /**
         * Resets a Turnstile widget.
         * @param widgetId The ID of the Turnstile widget to be reset.
         */
        reset(widgetId: string): void;

        /**
         * Gets the response of a Turnstile widget.
         * @param widgetId The ID of the Turnstile widget to get the response for.
         * @return the response of the Turnstile widget.
         */
        getResponse(widgetId: string): string;
    }

    /**
     * The theme of the Turnstile widget.
     * The default is "auto", which respects the user preference. This can be forced to "light" or "dark" by setting the theme accordingly.
     */
    type Theme = "auto" | "light" | "dark";

    /**
     * Parameters for the turnstile.render() method.
     */
    interface RenderParameters {
        /**
         * Your Cloudflare Turnstile sitekey. This sitekey is associated with the corresponding widget configuration and is created upon the widget creation.
         */
        sitekey: string;

        /**
         * Optional. A customer value that can be used to differentiate widgets under the same sitekey in analytics and which is returned upon validation.
         */
        action?: string | undefined;

        /**
         * Optional. A customer payload that can be used to attach customer data to the challenge throughout its issuance and which is returned upon validation.
         */
        cData?: string | undefined;

        /**
         * Optional. A JavaScript callback that is invoked upon success of the challenge.
         * The callback is passed a token that can be validated.
         */
        callback?: (token: string) => void;

        /**
         * Optional. A JavaScript callback that is invoked when a challenge expires.
         */
        "expired-callback"?: VoidFunction;

        /**
         * Optional. A JavaScript callback that is invoked when there is a network error.
         */
        "error-callback"?: VoidFunction;

        /**
         * Optional. The widget theme.
         * Accepted values: "auto", "light", "dark"
         * @default "auto"
         */
        theme?: Theme | undefined;

        /**
         * Optional. The tabindex of Turnstile’s iframe for accessibility purposes.
         * @default 0
         */
        tabindex?: number | undefined;
    }
}
