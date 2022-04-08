// Test the minimum amount of configuration required.
let handler = StripeCheckout.configure({
    key: "my-secret-key",
    token: (token: stripe.Token) => {
        console.log(token.id);
    }
});

handler.open();

handler.close();

// Test all configuration options.
const options: StripeCheckoutOptions = {
    key: "my-secret-key",
    token: (token: stripe.Token) => {
        console.log(token.id);
    },
    source: (src: stripe.Source) => {
        console.log(src.id);
    },
    image: "http://placehold.it/128x128",
    name: "Definitely Typed",
    description: "A DefinitelyTyped test for Stripe Checkout",
    amount: Number.MAX_VALUE,
    currency: "USD",
    panelLabel: "Pay Definitely Typed {{amount}}",
    label: "Pay Definitely Typed",
    zipCode: false,
    billingAddress: false,
    email: "test@example.com",
    allowRememberMe: false,
    bitcoin: false,
    alipay: "auto",
    alipayReusable: false,
    shippingAddress: false,
    opened: () => {},
    closed: () => {}
};

handler = StripeCheckout.configure(options);

handler.open(options);
