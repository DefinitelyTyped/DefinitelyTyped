// $ExpectType Checkout
const newCheckout = new vtexjs.Checkout({});

// $ExpectType Promise<OrderForm>
newCheckout.getOrderForm();

// $ExpectType Catalog
new vtexjs.Catalog({});

// $ExpectType Promise<OrderForm>
vtexjs.checkout.getOrderForm();

// @ts-expect-error
vtexjs.Checkout.getOrderForm();

// $ExpectType Promise<OrderForm>
globalThis.vtexjs.checkout.getOrderForm();
