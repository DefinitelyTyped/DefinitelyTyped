import * as React from "react";

export default ReCAPTCHA;

declare class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    /**
     * Resets the reCAPTCHA widget
     */
    reset(): void;
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button
     */
    execute(): void;

    /**
     * Gets the response for the reCAPTCHA widget.
     * @return the response of the reCAPTCHA widget.
     */
    getValue(): string | null;

    /**
     * Gets the widgetId of reCAPTCHA widget
     * @return widgetId | null
     */
    getWidgetId(): number | null;
}

type Theme = "light" | "dark";
type Type = "image" | "audio";
type Size = "compact" | "normal" | "invisible";
type Badge = "bottomright" | "bottomleft" | "inline";

export interface ReCAPTCHAProps {
    /**
     *  The API client key
     */
    sitekey: string;
    /**
     *  The function to be called when the user successfully completes the normal or compat captcha.
     *     It will also be called with null, when captcha expires
     *  @param token string or null
     */
    onChange?: ((token: string | null) => void) | undefined;
    /**
     *  Optional light or dark theme of the widget
     *  @default "light"
     */
    theme?: Theme | undefined;
    /**
     * Optional image or audio The type of initial captcha
     * @default "image"
     */
    type?: Type | undefined;
    /**
     *  Optional the tabindex of the element
     *  @default 0
     */
    tabindex?: number | undefined;
    /**
     *  Optional callback, called when a challenge expires and has to be redone by the user.
     */
    onExpired?: (() => void) | undefined;
    /**
     *  Optional set the stoken parameter, which allows the captcha to be used from different domains,
     *  @see reCAPTCHA secure-token
     */
    stoken?: string | undefined;
    /**
     *  Optional compact, normal or invisible. This allows you to change the size or do an invisible captcha
     */
    size?: Size | undefined;
    /**
     * Optional. The badge location for g-recaptcha with size of "invisible".
     *
     * @default "bottomright"
     */
    badge?: Badge | undefined;
}
