import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const cartId = 'cart_2Jwr9yJAeN4VlP';
const productId = 'prod_R4OANwRqklvYL8';
const quantity = 5;
const lineItemId = 'item_7RyWOwmK5nEa2V';
const newQuantity = 3;

// Retrieve the customers current cart (tracked by their browser)
commerce.cart.retrieve().then(cart => {});

// Create a new cart rather than using any existing cart
commerce.cart.refresh().then(cart => {});

// Retrieve a cart by cartId
commerce.cart.retrieve(cartId).then(cart => {});

// Uses the cart that was previously created or retrieved
commerce.cart.add(productId, quantity).then(json => {});

// Uses the cart that was previously created or retrieved
commerce.cart.update(lineItemId, { quantity: newQuantity }).then(json => {});

// Uses the cart that was previously created or retrieved
commerce.cart.delete().then(json => {});

// Uses the cart that was previously created or retrieved
commerce.cart.empty().then(json => {});

// Uses the cart that was previously created or retrieved
commerce.cart.remove(lineItemId).then(json => {});
