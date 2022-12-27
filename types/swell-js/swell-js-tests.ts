Swell.init('', ''); // $ExpectType void
// $ExpectType void
Swell.init('', '', {
    useCamelCase: true,
});

Swell.get('', {}); // $ExpectType Promise<unknown>
Swell.put('', {}); // $ExpectType Promise<unknown>
Swell.post('', {}); // $ExpectType Promise<unknown>

// $ExpectType Promise<unknown>
Swell.account.create({
    email: 'hello@world.com',
});
// $ExpectType Promise<AddressWithContact>
Swell.account.createAddress({
    address1: '',
    city: '',
    country: '',
    name: '',
    phone: '',
    state: '',
    zip: '',
});
Swell.account.createCard({}); // $ExpectType Promise<unknown>
Swell.account.deleteAddress(''); // $ExpectType Promise<unknown>
Swell.account.deleteCard(''); // $ExpectType Promise<unknown>
Swell.account.get(); // $ExpectType Promise<unknown>
Swell.account.getOrder(''); // $ExpectType Promise<Order>
Swell.account.listAddresses(); // $ExpectType Promise<unknown>
Swell.account.listOrders({}); // $ExpectType Promise<unknown>
Swell.account.login('', ''); // $ExpectType Promise<unknown>
Swell.account.logout(); // $ExpectType Promise<unknown>
Swell.account.recover({}); // $ExpectType Promise<unknown>
Swell.account.update({}); // $ExpectType Promise<unknown>
// $ExpectType Promise<AddressWithContact>
Swell.account.updateAddress('', {
    address1: '',
    city: '',
    country: '',
    state: '',
    zip: '',
});

Swell.attributes.get(''); // $ExpectType Promise<Attribute>
Swell.attributes.get(); // $ExpectType Promise<ListResult<Attribute>>
Swell.attributes.list({}); // $ExpectType Promise<ListResult<Attribute>>

Swell.card.createToken({}); // $ExpectType Promise<unknown>
Swell.card.validateCVC(''); // $ExpectType boolean
Swell.card.validateExpiry(''); // $ExpectType boolean
Swell.card.validateNumber(''); // $ExpectType boolean

// $ExpectType Promise<Cart>
Swell.cart.addItem({
    product_id: '',
});
Swell.cart.applyCoupon(''); // $ExpectType Promise<Cart>
Swell.cart.applyGiftcard(''); // $ExpectType Promise<Cart>
Swell.cart.get(); // $ExpectType Promise<Cart>
Swell.cart.getSettings(); // $ExpectType Promise<unknown>
Swell.cart.getShippingRates(); // $ExpectType Promise<ShippingRates>
Swell.cart.removeCoupon(); // $ExpectType Promise<Cart>
Swell.cart.removeGiftcard(''); // $ExpectType Promise<Cart>
Swell.cart.removeItem(''); // $ExpectType Promise<Cart>
// $ExpectType Promise<Cart>
Swell.cart.setItems([
    {
        product_id: '',
    },
]);
Swell.cart.submitOrder(); // $ExpectType Promise<Order>
// $ExpectType Promise<Cart>
Swell.cart.update({
    product_id: '',
});
Swell.cart.updateItem('', {}); // $ExpectType Promise<Cart>

Swell.categories.get(''); // $ExpectType Promise<Category>
Swell.categories.get(); // $ExpectType Promise<ListResult<Category>>
Swell.categories.list({}); // $ExpectType Promise<ListResult<Category>>

Swell.currency.format(1, {}); // $ExpectType string
Swell.currency.list(); // $ExpectType Promise<Currency[]>
Swell.currency.select(''); // $ExpectType Promise<CurrencySelect>
Swell.currency.selected(); // $ExpectType string

Swell.locale.selected(); // $ExpectType string
Swell.locale.select(''); // $ExpectType Promise<Locale>

Swell.payment.createElements({}); // $ExpectType Promise<unknown>
Swell.payment.tokenize({}); // $ExpectType void
Swell.products.get(''); // $ExpectType Promise<Product>
Swell.products.list({}); // $ExpectType Promise<ListResult<Product>>
// $ExpectType Promise<Product>
Swell.products.variation('', {
    name: '',
    value: '',
});

Swell.settings.get(); // $ExpectType Promise<Settings>
Swell.settings.load(); // $ExpectType Promise<unknown>
Swell.settings.menus(); // $ExpectType Promise<unknown>
Swell.settings.menus(''); // $ExpectType Promise<unknown>
Swell.settings.payments(); // $ExpectType Promise<unknown>

Swell.subscriptions.addItem('', {}); // $ExpectType Promise<unknown>
Swell.subscriptions.create({}); // $ExpectType Promise<unknown>
Swell.subscriptions.get(''); // $ExpectType Promise<unknown>
Swell.subscriptions.list(); // $ExpectType Promise<ListResult<unknown>>
Swell.subscriptions.removeItem('', ''); // $ExpectType Promise<unknown>
Swell.subscriptions.update('', {}); // $ExpectType Promise<unknown>
Swell.subscriptions.updateItem('', '', {}); // $ExpectType Promise<unknown>
