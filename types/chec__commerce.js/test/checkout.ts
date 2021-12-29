import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const productId = 'prod_R4OANwRqklvYL8';
const productPermalink = 'YfFoyi';
const checkoutTokenId = 'chkt_L5z3kmQpdpkGlA';
const customerSetPrice = '100.00';
const lineItemId = 'item_7RyWOwmK5nEa2V';
const variantId = 'vrnt_Kvg9l6Apq51bB7';
const optionId = 'optn_3BkyN5YDRo0b69';
const discountCode = 'ABC123ZYX';
const shippingOptionId = 'ship_31q0o3e21lDdjR';
const country = 'US';
const region = 'CA';
const postCode = '94107';
const ipAddress = '';
const giftcardCode = 'ABC-123-ZYX';

// $ExpectType Promise<CheckoutToken>
commerce.checkout.generateToken('white-shirt', { type: 'permalink' });

// Generate a token from a product permalink
// $ExpectType Promise<CheckoutToken>
commerce.checkout.generateTokenFrom('permalink', productPermalink);

// Generate a token from a product ID
// $ExpectType Promise<CheckoutToken>
commerce.checkout.generateTokenFrom('product_id', productId);

// Generate a token from the cart that was previously created or retrieved
// $ExpectType Promise<CheckoutToken>
commerce.checkout.generateTokenFrom('cart', commerce.cart.id()!);

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    line_items: {
        // Key is the line item ID for our test product
        item_7RyWOwmK5nEa2V: {
            quantity: 1,
            variants: {
                // Key is the variant ID for "Color", value is the option ID for "Blue"
                vrnt_bO6J5apWnVoEjp: 'optn_Op1YoVppylXLv9',
                // Key is the variant ID for "Size", value is the option ID for "Small"
                vrnt_4WJvlKpg7pwbYV: 'optn_zkK6oL99G5Xn0Q',
            },
        },
    },
    customer: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
    },
    shipping: {
        name: 'John Doe',
        street: '123 Fake St',
        street_2: 'Unit 2',
        town_city: 'San Francisco',
        county_state: 'CA',
        postal_zip_code: '94103',
        country: 'US',
    },
    fulfillment: {
        // The shipping method ID for "USPS Ground" (for example)
        // You can use commerce.checkout.getShippingOptions() to get a list
        shipping_method: 'ship_1ypbroE658n4ea',
    },
    payment: {
        // Test Gateway is enabled by default, and is used when you submit orders with
        // your sandbox API key
        gateway: 'test_gateway',
        card: {
            number: '4242 4242 4242 4242',
            expiry_month: '01',
            expiry_year: '2023',
            cvc: '123',
            postal_zip_code: '94103',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    payment: {
        // Stripe using Token API
        gateway: 'stripe',
        card: {
            token: 'tok_ABC123',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // Stripe using Payment Intents API, first phase
    payment: {
        gateway: 'stripe',
        stripe: {
            payment_method_id: 'pm_ABC123',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // Stripe using Payment Intents API, second phase, with additional options
    payment: {
        gateway: 'stripe',
        stripe: {
            payment_intent_id: 'pm_ABC123',
            setup_future_usage: 'off_session',
            customer_id: 'cust_ABC123',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // Braintree
    payment: {
        gateway: 'braintree',
        braintree: {
            nonce: 'abc123',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // Omise
    payment: {
        gateway: 'omise',
        omise: {
            token: 'tok_ABC123',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // Razorpay
    payment: {
        gateway: 'razorpay',
        razorpay: {
            payment_id: 'hello',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // PayPal, authorization step
    payment: {
        gateway: 'paypal',
        paypal: {
            action: 'authorize',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // PayPal, capture step
    payment: {
        gateway: 'paypal',
        paypal: {
            action: 'capture',
            payment_id: 'PAY-51028384J84281644LGFZXJQ',
            payer_id: 'VE57TQRTVER5Y',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // Manual payments
    payment: {
        gateway: 'manual',
        manual: {
            id: 'gway_ABC123',
        },
    },
});

// $ExpectType Promise<CheckoutCaptureResponse>
commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
    customer: {
        email: 'foo@example.com',
    },
    // Specifying a gateway ID directly
    payment: {
        gateway: 'gway_ABC123',
    },
});

// $ExpectType Promise<CheckoutToken>
commerce.checkout.getToken(checkoutTokenId);

// $ExpectType Promise<Live>
commerce.checkout.getLive(checkoutTokenId);

// $ExpectType Promise<CheckPayWhatYouWantResponse>
commerce.checkout.checkPayWhatYouWant(checkoutTokenId, {
    customer_set_price: customerSetPrice,
});

// $ExpectType Promise<CheckVariantResponse>
commerce.checkout.checkVariant(checkoutTokenId, lineItemId, {
    variant_id: variantId,
    option_id: optionId,
});

// $ExpectType Promise<CheckDiscountResponse>
commerce.checkout.checkDiscount(checkoutTokenId, {
    code: discountCode,
});

// $ExpectType Promise<CheckShippingOptionResponse>
commerce.checkout.checkShippingOption(checkoutTokenId, {
    shipping_option_id: shippingOptionId,
    country,
    region,
});

// $ExpectType Promise<IsFreeResponse>
commerce.checkout.isFree(checkoutTokenId);

// $ExpectType Promise<GetLocationFromIPResponse>
commerce.checkout.getLocationFromIP(checkoutTokenId, ipAddress);

// $ExpectType Promise<CheckGiftcardResponse>
commerce.checkout.checkGiftcard(checkoutTokenId, {
    code: giftcardCode,
});

// $ExpectType Promise<HelperValidationResponse>
commerce.checkout.helperValidation(checkoutTokenId);

// $ExpectType Promise<GetShippingOptionsResponse[]>
commerce.checkout.getShippingOptions(checkoutTokenId, {
    country,
    region,
});

// $ExpectType Promise<SetTaxZoneResponse>
commerce.checkout.setTaxZone(checkoutTokenId, {
    country,
    region,
    postal_zip_code: postCode,
});
