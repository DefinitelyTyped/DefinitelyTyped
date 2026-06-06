declare const turnstile: Turnstile.Turnstile;

declare namespace Turnstile {
    interface Turnstile {
        /**
         * Registers a callback to be invoked when the turnstile is ready.
         * @param callback A callback function to be executed when the turnstile is ready. Use this callback to perform actions upon turnstile readiness.
         */
        ready(callback: () => void): void;

        /**
         * Invokes a Turnstile widget and returns the ID of the newly created widget.
         * @param container The HTML element to render the Turnstile widget into. Specify either the ID of HTML element (string), or the DOM element itself.
         * @param params An object containing render parameters as key=value pairs, for example, {"sitekey": "your_site_key", "theme": "auto"}.
         * @return the ID of the newly created widget, or undefined if invocation is unsuccessful.
         */
        render(container: string | HTMLElement, params?: RenderParameters): string | null | undefined;

        /**
         * Invokes a Turnstile widget and returns the ID of the newly created widget.
         * @param container The HTML element to render the Turnstile widget into. Specify either the ID of HTML element (string), or the DOM element itself.
         * @param params An object containing render parameters as key=value pairs, for example, {"sitekey": "your_site_key", "theme": "auto"}.
         * @return the ID of the newly created widget, or undefined if invocation is unsuccessful.
         */
        execute(container: string | HTMLElement, params?: RenderParameters): void;

        /**
         * Resets a Turnstile widget.
         * @param container The HTML element to render the Turnstile widget into. Specify either the ID of HTML element (string), or the DOM element itself.
         */
        reset(container?: string | HTMLElement): void;

        /**
         * Fully removes the Turnstile widget from the DOM.
         * @param container The HTML element to render the Turnstile widget into. Specify either the ID of HTML element (string), or the DOM element itself.
         */
        remove(container?: string | HTMLElement): void;

        /**
         * Gets the response of a Turnstile widget.
         * @param container The HTML element to render the Turnstile widget into. Specify either the ID of HTML element (string), or the DOM element itself.
         * @return the response of the Turnstile widget.
         */
        getResponse(container?: string | HTMLElement): string | undefined;

        /**
         * Checks whether or not the token returned by the given widget is expired.
         * @param container The HTML element to render the Turnstile widget into. Specify either the ID of HTML element (string), or the DOM element itself.
         * @return whether it is expired or not
         */
        isExpired(container?: string | HTMLElement): boolean;
    }

    /**
     * The theme of the Turnstile widget.
     * The default is "auto", which respects the user preference. This can be forced to "light" or "dark" by setting the theme accordingly.
     */
    type Theme = "auto" | "light" | "dark";

    /**
     * The widget size.
     * Can take the following values: normal, compact.
     */
    type WidgetSize = "normal" | "compact" | "flexible";

    /**
     * How to retry on widget failure.
     * The default is "auto", which allows the user to retry. This can be forced to "never" by the user.
     */
    type FailureRetryMode = "never" | "auto";

    /**
     * The appearance mode of the Turnstile widget.
     * The default is "always". If set to "execute", the widget will only appear when executing. If set to "interaction-only", the widget will only be shown when / if interactivity is required.
     */
    type AppearanceMode = "always" | "execute" | "interaction-only";

    /**
     * The refresh mode to use when the given Turnstile token expires.
     * The default is "auto". "never" will never refresh the widget, "manual" will prompt the user with a refresh button.
     */
    type RefreshExpiredMode = "never" | "manual" | "auto";

    /**
     * The refresh mode to use when the widget times out.
     * The default is "auto". "never" will never refresh the widget, "manual" will prompt the user with a refresh button.
     */
    type RefreshTimeoutMode = "never" | "manual" | "auto";

    /**
     * The execution mode to controls when to obtain the widget token
     * The default is "render". "render" will make the challenge runs automatically after calling the render() function, while
     * "execute" will make the challenge runs after the render() function has been called, by invoking the turnstile.execute function separately.
     * This detaches the appearance and rendering of a widget from its execution.
     */
    type ExecutionMode = "render" | "execute";

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
        "expired-callback"?: (token: string) => void;

        /**
         * Optional. A JavaScript callback invoked when there is an error (e.g. network error or the challenge failed).
         * Refer to [Client-side errors](https://developers.cloudflare.com/turnstile/troubleshooting/client-side-errors/).
         */
        "error-callback"?: ((error: string) => void) | undefined;

        /**
         * Optional. A JavaScript callback that is invoked when the Turnstile widget times out.
         */
        "timeout-callback"?: VoidFunction | undefined;

        /**
         * Optional. A JavaScript callback that is invoked before the user is prompted for interactivity.
         */
        "before-interactive-callback"?: VoidFunction | undefined;

        /**
         * Optional. A JavaScript callback that is invoked when the intneractive challenge has been solved.
         */
        "after-interactive-callback"?: VoidFunction | undefined;

        /**
         * Optional. A JavaScript callback that is invoked when the browser is not supported by Turnstile.
         */
        "unsupported-callback"?: VoidFunction | undefined;

        /**
         * Optional. The widget theme.
         * Accepted values: "auto", "light", "dark"
         * @see Theme
         * @default "auto"
         */
        theme?: Theme | undefined;

        /**
         * Optional. The tabindex of Turnstile’s iframe for accessibility purposes.
         * @default 0
         */
        tabindex?: number | undefined;

        /**
         * Optional. The size of the Turnstile widget.
         * Accepted values: "normal", "compact", "invisible"
         * Note: "invisible" is only to be used with invisible widgets
         * @see WidgetSize
         * @default "normal"
         */
        size?: WidgetSize | undefined;

        /**
         * Optional. How to retry on widget failure.
         * Accepted values: "auto", "never"
         * @see FailureRetryMode
         * @default "auto"
         */
        retry?: FailureRetryMode | undefined;

        /**
         * Optional. Duration in milliseconds before the widget automatically retries.
         * @default 2000
         */
        "retry-interval"?: number | undefined;

        /**
         * Optional. The language picked by the customer (may not be supported).
         * This must be a valid ISO 639-1 country code, or "auto".
         * @default "auto"
         */
        language?: string | undefined;

        /**
         * Optional. The appearance mode of the widget.
         * @see AppearanceMode
         * @default "always"
         */
        appearance?: AppearanceMode | undefined;

        /**
         * Optional. Whether to add or not a hidden response input element with the turnstile token.
         * @default true
         */
        "response-field"?: boolean | undefined;

        /**
         * Optional. The name of the hidden input element added to the container where Turnstile is injected.
         * @default "cf-turnstile-response"
         */
        "response-field-name"?: string | undefined;

        /**
         * Optional.
         * @see RefreshExpiredMode
         * @default "auto"
         */
        "refresh-expired"?: RefreshExpiredMode | undefined;

        /**
         * Optional.
         * @see RefreshTimeoutMode
         * @default "auto"
         */
        "refresh-timeout"?: RefreshTimeoutMode | undefined;

        /**
         * Optional
         * @see ExecutionMode
         * @default "render"
         */
        execution?: ExecutionMode | undefined;
    }
}
