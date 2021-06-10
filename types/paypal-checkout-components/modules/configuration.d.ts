export enum Environment {
    Production = 'production',
    Sandbox = 'sandbox',
}

export enum ButtonColorOption {
    /**
     * Recommended
     * People around the world know us for the color gold and research confirms it.
     * Extensive testing determined just the right shade and shape that help increase conversion.
     * Use it on your website to leverage PayPal’s recognition and preference.
     */
    Gold = 'gold',

    /**
     * First alternate
     * If gold is not an option for your site, try the PayPal blue button.
     * Research shows that people know it is our brand color,
     * which provides a halo of trust and security to your experience.
     */
    Blue = 'blue',

    /**
     * Second alternate
     * If gold or blue do not work for your site design or aesthetic, try the silver button.
     * Because this color is a bit recessive and less capable of drawing people’s attention,
     * we recommend this button color as a second alternative.
     */
    Silver = 'silver',

    /**
     * Third alternate
     * If your website demands a monochromatic button experience, try the black button.
     * Because black is a common website color and less capable of drawing people's attention,
     * we recommend this button as a third alternative.
     */
    Black = 'black',
}

export enum ButtonShapeOption {
    /**
     * Recommended
     * Whenever possible, use the pill-shaped button.
     * Its unique and powerful shape signifies PayPal in people’s minds.
     */
    Pill = 'pill',

    /**
     * Use the rectangular button as an alternative for media such as mobile
     * where pill-shaped buttons might pose design challenges.
     */
    Rect = 'rect',
}

export enum ButtonSizeOption {
    /**
     * Recommended. Default.
     * 150 pixels by 25 pixels
     */
    Small = 'small',

    /**
     * 250 pixels by 35 pixels
     */
    Medium = 'medium',

    /**
     * 350 pixels by 40 pixels
     */
    Large = 'large',

    /**
     * Dynamic
     * Matches the width of the container element, height is decided dynamically based on width.
     * Minimum width is 150px, maximum width is 500px.
     */
    Responsive = 'responsive',
}

export enum ButtonLabelOption {
    /**
     * The PayPal Checkout button. The default button.
     */
    Checkout = 'checkout',

    /**
     * The PayPal Credit button. Initializes the credit flow. Cannot be used with any custom color option.
     */
    Credit = 'credit',

    /**
     * The Pay With PayPal button. Initializes the checkout flow.
     */
    Pay = 'pay',

    /**
     * The Buy Now button. Initializes the checkout flow.
     * The default Buy Now button is unbranded. To include PayPal branding, set branding: true.
     */
    BuyNow = 'buynow',

    /**
     * The generic PayPal button. Initializes the checkout flow. This button contains only the PayPal brand logo.
     */
    PayPal = 'paypal',
}

export interface ButtonStyle {
    color: ButtonColorOption;
    label: ButtonLabelOption;
    shape: ButtonShapeOption;
    size: ButtonSizeOption;
    tagline: boolean;
}
