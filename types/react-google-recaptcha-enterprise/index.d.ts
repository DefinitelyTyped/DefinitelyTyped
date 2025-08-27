import * as React from "react";

export default ReCAPTCHA;
export { ReCAPTCHA };

declare class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    /**
     * Resets the reCAPTCHA widget.
     */
    reset(): void;

    /**
     * Programatically invoke the reCAPTCHA check.
     * Used if the invisible reCAPTCHA is on a div instead of a button.
     */
    execute(): void;

    /**
     * Programmatically invoke the challenge and return a promise that resolves
     * to the token or errors (if encountered). Alternative approach to
     * execute() in combination with the onChange() prop.
     * @return token | null
     */
    executeAsync(): Promise<string | null>;

    /**
     * Gets the response for the reCAPTCHA widget.
     * @return the response of the reCAPTCHA widget.
     */
    getValue(): string | null;

    /**
     * Gets the widgetId of reCAPTCHA widget.
     * @return widgetId | null
     */
    getWidgetId(): number | null;
}

type Theme = "light" | "dark";
type Type = "image" | "audio";
type Size = "compact" | "normal" | "invisible";
type Badge = "bottomright" | "bottomleft" | "inline";

export interface ReCAPTCHAProps
    extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onChange" | "ref">
{
    /**
     * The API client key
     */
    sitekey: string;

    /**
     * The function to be called when the user successfully completes the normal
     * or the compact captcha. It will also be called with null, when captcha expires.
     * @param token string or null
     */
    onChange?: ((token: string | null) => void) | undefined;

    /**
     *  If you are using the barebone component you need to provide access to the
     *  google grecaptcha object.
     */
    grecaptcha?: object | undefined;

    /**
     * The theme of the widget.
     * @default "light"
     */
    theme?: Theme | undefined;

    /**
     * The type of initial captcha.
     * @default "image"
     */
    type?: Type | undefined;

    /**
     * The tabindex of the element.
     * @default 0
     */
    tabindex?: number | undefined;

    /**
     * Callback called when a challenge expires and has to be redone by the user.
     */
    onExpired?: (() => void) | undefined;

    /**
     * Callback called when google script is loaded
     */
    asyncScriptOnLoad?: (() => void) | undefined;

    /**
     *  Optional callback, called when reCAPTCHA encounters an error (usually network connectivity)
     *  and cannot continue until connectivity is restored. If you specify a function here, you are
     *  responsible for informing the user that they should retry.
     */
    onErrored?: (() => void) | undefined;

    /**
     * Set the stoken parameter, which allows the captcha to be used from different domains.
     * @see reCAPTCHA secure-token
     */
    stoken?: string | undefined;

    /**
     *  Forces the widget to render in a specific language.
     *  Auto-detects the user's language if unspecified.
     */
    hl?: string | undefined;

    /**
     * This allows you to change the size or do an invisible captcha.
     * @default "normal"
     */
    size?: Size | undefined;

    /**
     * The badge location for g-recaptcha with size of "invisible".
     * @default "bottomright"
     */
    badge?: Badge | undefined;
}
