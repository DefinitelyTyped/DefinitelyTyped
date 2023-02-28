// Type definitions for Google Recaptcha 3.0
// Project: https://www.google.com/recaptcha
// Definitions by: Kristof Mattei <http://kristofmattei.be>
//                 Martin Costello <https://martincostello.com/>
//                 Ruslan Arkhipau <https://github.com/DethAriel>
//                 Rafael Tavares <https://github.com/rafaeltavares>
//                 Florian Rohrer <https://github.com/RohrerF>
//                 Veniamin Krol <https://github.com/vkrol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var grecaptcha: ReCaptchaV2.ReCaptcha & {
  enterprise: ReCaptchaV2.ReCaptcha;
};

declare namespace ReCaptchaV2 {
  interface ReCaptcha {
    /**
     * Renders the container as a reCAPTCHA widget and returns the ID of the newly created widget.
     * @param container The HTML element to render the reCAPTCHA widget. Specify either the ID of the container (string) or the DOM element itself.
     * @param parameters An object containing parameters as key=value pairs, for example, {"sitekey": "your_site_key", "theme": "light"}. See @see render parameters.
     * @param inherit Invisible reCAPTCHA only. Use existing data-* attributes on the element if the corresponding parameter is not specified.
     * The values in parameters will take precedence over the attributes.
     * @return the ID of the newly created widget.
     */
    render(container: (string | HTMLElement), parameters?: Parameters, inherit?: boolean): number;
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
    execute(opt_widget_id?: number): PromiseLike<void>;
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @param siteKey the key of your site
     * @param action the action
     *
     * @return a promise-like object containing the token
     */
    execute(siteKey: string, action: Action): PromiseLike<string>;
    /**
     * will run the given function as soon as the reCAPTCHA library has loaded
     * @param callback the function to coll
     */
    ready(callback: () => void): void;
  }

  type Theme = "light" | "dark";
  type Type = "image" | "audio";
  type Size = "normal" | "compact" | "invisible";
  type Badge = "bottomright" | "bottomleft" | "inline";

  interface Action {
    /**
     * the name of the action. Actions may only contain alphanumeric characters and slashes, and must not be user-specific.
     */
    action: string;
  }

  interface Parameters {
    /**
     * Your sitekey.
     */
    sitekey?: string | undefined;
    /**
     * Optional. The color theme of the widget.
     * Accepted values: "light", "dark"
     * @default "light"
     */
    theme?: Theme | undefined;
    /**
     * Optional. The type of CAPTCHA to serve.
     * Accepted values: "audio", "image"
     * @default "image"
     */
    type?: Type | undefined;
    /**
     * Optional. The size of the widget.
     * Accepted values: "compact", "normal", "invisible".
     * @default "compact"
     */
    size?: Size | undefined;
    /**
     * Optional. The tabindex of the widget and challenge.
     * If other elements in your page use tabindex, it should be set to make user navigation easier.
     */
    tabindex?: number | undefined;
    /**
     * Optional. The badge location for g-recaptcha with size of "invisible".
     *
     * @default "bottomright"
     */
    badge?: Badge | undefined;
    /**
     * Optional. Invisible reCAPTCHA only. For plugin owners to not interfere with existing reCAPTCHA installations on a page.
     * If true, this reCAPTCHA instance will be part of a separate ID space.
     *
     * @default false
     */
    isolated?: boolean | undefined;
    /**
     * Optional. Your callback function that's executed when the user submits a successful CAPTCHA response.
     * The user's response, g-recaptcha-response, will be the input for your callback function.
     */
    callback?(response: string): void;
    /**
     * Optional. Your callback function that's executed when the reCAPTCHA response expires and the user needs to solve a new CAPTCHA.
     */
    // Notice to the reader
    // I need to surround this object with quotes, this will however break intellisense in VS 2013.
    "expired-callback"?(): void;
    /**
     * Optional. Your callback function that's executed when reCAPTCHA encounters an error (usually network connectivity) and cannot continue until connectivity is restored.
     * If you specify this function, you are responsible for informing the user that they should retry.
     */
    // Notice to the reader
    // I need to surround this object with quotes, this will however break intellisense in VS 2013.
    "error-callback"?(): void;
  }
}
