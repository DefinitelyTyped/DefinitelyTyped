import Commerce = require("@chec/commerce.js");

const commerce = new Commerce("{your_public_key}");

const cartId = "cart_2Jwr9yJAeN4VlP";
const productId = "prod_R4OANwRqklvYL8";
const quantity = 5;
const lineItemId = "item_7RyWOwmK5nEa2V";
const newQuantity = 3;

// $ExpectType string | null
commerce.cart.id();

// Retrieve the customers current cart (tracked by their browser)
// $ExpectType Promise<Cart>
commerce.cart.retrieve();

// Create a new cart rather than using any existing cart
// $ExpectType Promise<Cart>
commerce.cart.refresh();

// Retrieve a cart by cartId
// $ExpectType Promise<Cart>
commerce.cart.retrieve(cartId);

// Uses the cart that was previously created or retrieved
// $ExpectType Promise<AddUpdateResponse>
commerce.cart.add(productId, quantity);

// Uses the cart that was previously created or retrieved
// $ExpectType Promise<AddUpdateResponse>
commerce.cart.update(lineItemId, { quantity: newQuantity });

// Uses the cart that was previously created or retrieved
// $ExpectType Promise<DeleteResponse>
commerce.cart.delete();

// Uses the cart that was previously created or retrieved
// $ExpectType Promise<EmptyResponse>
commerce.cart.empty();

// Uses the cart that was previously created or retrieved
// $ExpectType Promise<RemoveResponse>
commerce.cart.remove(lineItemId);
