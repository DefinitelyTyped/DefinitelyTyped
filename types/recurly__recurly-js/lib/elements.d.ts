import { Emitter } from './emitter';

export type CommonElementStyle = {
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color|color}
   */
  fontColor?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family|font-family}
   */
  fontFamily?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings|feature-settings}
   */
  fontFeatureSettings?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning|font-kerning}
   */
  fontKerning?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-size|font-size}
   */
  fontSize?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-smoothing|font-smoothing}
   */
  fontSmooth?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch|font-stretch}
   */
  fontStretch?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-style|font-style}
   */
  fontStyle?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant|font-variant}
   */
  fontVariant?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight|font-weight}
   */
  fontWeight?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing|letter-spacing}
   */
  letterSpacing?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-height|line-height}
   */
  lineHeight?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-align|text-align}
   */
  textAlign?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration|text-decoration}
   */
  textDecoration?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering|text-rendering}
   */
  textRendering?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow|text-shadow}
   */
  textShadow?: string;

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform|text-transform}
   */
  textTransform?: string;
};

export type CardElementOptions = {
  /**
   * If false, the card brand icon will be hidden
   */
  displayIcon?: boolean;

  /**
   * Modifies the input type of the card field:
   *
   * 'text' - text input for all fields.
   *
   * 'mobileSelect' - if the user is using amobile device, a native expiry select interface will appear when entering the
   * expiration date.
   *
   * 'select' - Expiration date will be input using a select field on all devices. Mobile devices will display an
   * optimized interface.
   */
  inputType?: string;

  /**
   * `tabindex` property to be applied to the outer iframe.
   */
  tabIndex?: string;

  /**
   * Style to apply to input elements
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#styling-the-individual-card-elements|Styling the invididual card elements}
   */
  style?: CommonElementStyle & {
    /**
     * Style to apply to input elements when they contain an invalid value.
     *
     * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#styling-the-individual-card-elements|Styling the invididual card elements}
     */
    invalid?: CommonElementStyle;

    placeholder?: {
      /**
       * Font color applied to all placeholder text.
       */
      color?: string;

      /**
       * Font weight applied to all placeholder text.
       */
      fontWeight?: string;
      content?: {
        /**
         * Placeholder content (e.g. 'Card number', 'CVV')
         */
        number?: string;

        /**
         * Placeholder content for the expiry input.
         */
        expiry?: string;

        /**
         * Placeholder content for the card verification value input.
         */
        cvv?: string;
      };
    };
  };
};

export type IndividualElementOptions = {
  /**
   * Enables contextual input formatting, injecting spaces to match the card brand, and forcing numeric input on expiry
   * and cvv.
   */
  format?: boolean;

  /**
   * Modifies the input type of the expiry fields. 'text' - normal text input. 'mobileSelect' - if the user is using a
   * mobile device, a native select interface will appear. 'select' - A select field will display on all devices
   */
  inputType?: string;

  /**
   * tabIndex property to be applied to the outer iframe.
   */
  tabIndex?: string;

  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#common-field-style-properties|Common field style properties}
   */
  style?: CommonElementStyle & {
    /**
     * Style to apply to input elements when they contain an invalid value.
     *
     * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#styling-the-individual-card-elements|Styling the invididual card elements}
     */
    invalid?: CommonElementStyle;

    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding}
     */
    padding?: string;

    placeholder?: {
      /**
       * Font {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color|color} applied to the placeholder text.
       */
      color?: string;

      /**
       * Placeholder content (e.g. 'Card number', 'CVV')
       */
      content?: string;
    };
  };
};

export type Attach<ElementType> = (el: string | HTMLElement) => ElementType;

export type ElementEvent = 'change' | 'focus' | 'blur' | 'submit' | 'attach' | 'remove';

export interface CardElement extends Emitter<ElementEvent> {
  /**
   * Attaches an Element to the DOM, as a child of the specified parent target.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-elementattach|Element.attach}
   */
  attach: Attach<CardElement>;

  /**
   * If an Element has been attached, removes the Element from the DOM. If it is not attached, does nothing.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-elementremove|Element.remove}
   */
  remove: () => CardElement;

  /**
   * Updates the configuration of the Element.
   *
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-elementconfigure|Element.configure}
   */
  configure: (options: CardElementOptions) => CardElement;

  focus: () => CardElement;
}

export interface IndividualElement extends Emitter<ElementEvent> {
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-elementattach|Element.attach}
   */
  attach: Attach<IndividualElement>;
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-elementremove|Element.remove}
   */
  remove: () => IndividualElement;

  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#fn-elementconfigure|Element.configure}
   */
  configure: (options: IndividualElementOptions) => IndividualElement;

  focus: () => IndividualElement;
}

export type ElementsInstanceEvents = 'submit';

export interface ElementsInstance extends Emitter<ElementsInstanceEvents> {
  /**
   * @see {@link https://developers.recurly.com/reference/recurly-js/index.html#the-card-element|The Card Element}
   */
  CardElement: (cardElementOptions?: CardElementOptions) => CardElement;

  CardNumberElement: (cardNumberElementOptions?: IndividualElementOptions) => IndividualElement;
  CardMonthElement: (cardMonthElementOptions?: IndividualElementOptions) => IndividualElement;
  CardYearElement: (cardYearElementOptions?: IndividualElementOptions) => IndividualElement;
  CardCvvElement: (cardCvvElementOptions?: IndividualElementOptions) => IndividualElement;
}

export type Elements = () => ElementsInstance;
