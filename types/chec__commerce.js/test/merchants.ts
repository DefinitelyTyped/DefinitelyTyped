import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

// List all categories
commerce.merchants.about().then(response => {});
