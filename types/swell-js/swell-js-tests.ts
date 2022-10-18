swell.init('', ''); // $ExpectType void
// $ExpectType void
swell.init('', '', {
    useCamelCase: true,
});

// $ExpectType Promise<unknown>
swell.account.create({
    email: 'hello@world.com',
});
swell.account.createAddress({}); // $ExpectType Promise<unknown>
swell.account.createCard({}); // $ExpectType Promise<unknown>
swell.account.deleteAddress(''); // $ExpectType Promise<unknown>
swell.account.deleteCard(''); // $ExpectType Promise<unknown>
swell.account.get(); // $ExpectType Promise<unknown>
swell.account.getOrder(''); // $ExpectType Promise<unknown>
swell.account.listAddresses(); // $ExpectType Promise<unknown>
swell.account.listOrders({}); // $ExpectType Promise<unknown>
swell.account.login('', ''); // $ExpectType Promise<unknown>
swell.account.logout(); // $ExpectType Promise<unknown>
swell.account.recover({}); // $ExpectType Promise<unknown>
swell.account.update({}); // $ExpectType Promise<unknown>
swell.account.updateAddress({}); // $ExpectType Promise<unknown>

swell.attributes.get(''); // $ExpectType Promise<unknown>
swell.attributes.list({}); // $ExpectType Promise<unknown>

swell.card.createToken({}); // $ExpectType Promise<unknown>
swell.card.validateCVC(''); // $ExpectType boolean
swell.card.validateExpiry(''); // $ExpectType boolean
swell.card.validateNumber(''); // $ExpectType boolean

// $ExpectType Promise<Cart>
swell.cart.addItem({
    product_id: '',
});
swell.cart.applyCoupon(''); // $ExpectType Promise<Cart>
swell.cart.applyGiftcard(''); // $ExpectType Promise<Cart>
swell.cart.get(); // $ExpectType Promise<Cart>
swell.cart.getSettings(); // $ExpectType Promise<unknown>
swell.cart.removeCoupon(); // $ExpectType Promise<Cart>
swell.cart.removeGiftcard(''); // $ExpectType Promise<Cart>
swell.cart.removeItem(''); // $ExpectType Promise<Cart>
// $ExpectType Promise<Cart>
swell.cart.setItems([
    {
        product_id: '',
    },
]);
swell.cart.submitOrder(); // $ExpectType Promise<unknown>
// $ExpectType Promise<Cart>
swell.cart.update({
    product_id: '',
});
swell.cart.updateItem('', {}); // $ExpectType Promise<Cart>

swell.categories.get(''); // $ExpectType Promise<unknown>
swell.categories.list({}); // $ExpectType Promise<unknown>

swell.currency.format(1, {}); // $ExpectType string
swell.currency.list(); // $ExpectType Promise<unknown>
swell.currency.select(''); // $ExpectType Promise<unknown>
swell.currency.selected(); // $ExpectType Promise<string>

swell.locale.selected(); // $ExpectType Promise<string>
swell.locale.select(''); // $ExpectType Promise<unknown>

swell.payment.createElements({}); // $ExpectType Promise<unknown>
swell.payment.tokenize({}); // $ExpectType Promise<unknown>

swell.products.get(''); // $ExpectType Promise<Product>
swell.products.list({}); // $ExpectType Promise<Product>
// $ExpectType Promise<Product>
swell.products.variation('', {
    name: '',
    value: '',
});

swell.settings.getfunction(); // $ExpectType Promise<unknown>
swell.settings.loadfunction(); // $ExpectType Promise<unknown>
swell.settings.menus(); // $ExpectType Promise<unknown>
swell.settings.menus(''); // $ExpectType Promise<unknown>
swell.settings.payments(); // $ExpectType Promise<unknown>

swell.subscriptions.addItem('', {}); // $ExpectType Promise<unknown>
swell.subscriptions.create({}); // $ExpectType Promise<unknown>
swell.subscriptions.get(''); // $ExpectType Promise<unknown>
swell.subscriptions.list(); // $ExpectType Promise<unknown>
swell.subscriptions.removeItem('', ''); // $ExpectType Promise<unknown>
swell.subscriptions.update('', {}); // $ExpectType Promise<unknown>
swell.subscriptions.updateItem('', '', {}); // $ExpectType Promise<unknown>
