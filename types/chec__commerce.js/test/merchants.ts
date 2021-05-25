import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

// List all categories
// $ExpectType Promise<Merchant>
commerce.merchants.about();
