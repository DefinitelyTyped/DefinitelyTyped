// Test the minimum amount of configuration required.
var handler = StripeCheckout.configure({
	key: "my-secret-key",
	token: function(token: StripeTokenResponse) {
		console.log(token.id);
	}
});

handler.open();

handler.close();

// Test all configuration options.
var options: StripeCheckoutOptions = {
	key: "my-secret-key",
	token: function(token: StripeTokenResponse) {
		console.log(token.id);
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
    opened: function() {},
    closed: function() {}
}

handler = StripeCheckout.configure(options);

handler.open(options);
