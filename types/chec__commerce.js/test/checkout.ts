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

// Generate a token from a product permalink
commerce.checkout.generateTokenFrom('permalink', productPermalink)
  .then(response => {});

// Generate a token from a product ID
commerce.checkout.generateTokenFrom('product_id', productId)
  .then(response => {});

// Generate a token from the cart that was previously created or retrieved
commerce.checkout.generateTokenFrom('cart', commerce.cart.id()!)
  .then(response => {});

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
      }
  },
  customer: {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
  },
  shipping: {
    name: 'John Doe',
    street: '123 Fake St',
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
})
.then(response => {})
.catch(error => {});

commerce.checkout.getToken(checkoutTokenId).then(token => {});

commerce.checkout.getLive(checkoutTokenId).then(live => {});

commerce.checkout.checkPayWhatYouWant(checkoutTokenId, {
  customer_set_price: customerSetPrice,
}).then(response => {});

commerce.checkout.checkVariant(checkoutTokenId, lineItemId, {
  variant_id: variantId,
  option_id: optionId,
}).then(response => {});

commerce.checkout.checkDiscount(checkoutTokenId, {
  code: discountCode,
}).then(response => {});

commerce.checkout.checkShippingOption(checkoutTokenId, {
  shipping_option_id: shippingOptionId,
  country,
  region,
}).then(response => {});

commerce.checkout.isFree(checkoutTokenId).then(response => {});

commerce.checkout.getLocationFromIP(checkoutTokenId, ipAddress).then(response => {});

commerce.checkout.checkGiftcard(checkoutTokenId, {
  code: giftcardCode,
}).then(response => {});

commerce.checkout.helperValidation(checkoutTokenId).then(response => {});

commerce.checkout.getShippingOptions(checkoutTokenId, {
  country,
  region,
}).then(options => {});

commerce.checkout.setTaxZone(checkoutTokenId, {
  country,
  region,
  postal_zip_code: postCode,
}).then(response => {});
