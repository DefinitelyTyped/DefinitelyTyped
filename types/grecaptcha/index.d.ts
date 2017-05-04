// Type definitions for Google Recaptcha 2.0
// Project: https://www.google.com/recaptcha
// Definitions by: Kristof Mattei <http://kristofmattei.be>, Martin Costello <https://martincostello.com/>, Ruslan Arkhipau <https://github.com/DethAriel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var grecaptcha: ReCaptchaV2.ReCaptcha;

declare namespace ReCaptchaV2 {
  class ReCaptcha {
    /**
     * Renders the container as a reCAPTCHA widget and returns the ID of the newly created widget.
     * @param container The HTML element to render the reCAPTCHA widget. Specify either the ID of the container (string) or the DOM element itself.
     * @param parameters An object containing parameters as key=value pairs, for example, {"sitekey": "your_site_key", "theme": "light"}. See @see render parameters.
     * @return the ID of the newly created widget.
     */
    render(container: (string | HTMLElement), parameters?: Parameters): number;
    /**
     * Resets the reCAPTCHA widget.
     * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
     */
    reset(opt_widget_id?: number): void;
    /**
     * Gets the response for the reCAPTCHA widget.
     * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
     * @return the response of the reCAPTCHA widget.
     */
    getResponse(opt_widget_id?: number): string;
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @param opt_widget_id Optional widget ID, defaults to the first widget created if unspecified.
     */
    execute(opt_widget_id?: number): void;
  }

  type Theme = "light" | "dark";
  type Type = "image" | "audio";
  type Size = "normal" | "compact" | "invisible";
  type Badge = "bottomright" | "bottomleft" | "inline";

  interface Parameters {
    /**
     * Your sitekey.
     */
    sitekey: string;
    /**
     * Optional. The color theme of the widget.
     * Accepted values: "light", "dark"
     * @default "light"
     * @type {Theme}
     */
    theme?: Theme;
    /**
     * Optional. The type of CAPTCHA to serve.
     * Accepted values: "audio", "image"
     * @default "image"
     * @type {Type}
     */
    type?: Type;
    /**
     * Optional. The size of the widget.
     * Accepted values: "compact", "normal", "invisible".
     * @default "compact"
     * @type {Size}
     */
    size?: Size;
    /**
     * Optional. The tabindex of the widget and challenge.
     * If other elements in your page use tabindex, it should be set to make user navigation easier.
     */
    tabindex?: number;
    /**
     * Optional. Your callback function that's executed when the user submits a successful CAPTCHA response.
     * The user's response, g-recaptcha-response, will be the input for your callback function.
     */
    callback?(response: string): void;
    /**
     * Optional. The badge location for g-recaptcha with size of "invisible".
     *
     * @default "bottomright"
     * @type {Badge}
     */
    badge?: Badge;
    /**
     * Optional. Your callback function that's executed when the recaptcha response expires and the user needs to solve a new CAPTCHA.
     */
    // Notice to the reader
    // I need to surround this object with quotes, this will however break intellisense in VS 2013.
    "expired-callback"?(): void;
  }
}
