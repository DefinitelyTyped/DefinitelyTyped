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
Swell.account.getOrder(''); // $ExpectType Promise<SwellOrder>
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

// $ExpectType Promise<SwellCart>
Swell.cart.addItem({
    product_id: '',
});
Swell.cart.applyCoupon(''); // $ExpectType Promise<SwellCart>
Swell.cart.applyGiftcard(''); // $ExpectType Promise<SwellCart>
Swell.cart.get(); // $ExpectType Promise<SwellCart>
Swell.cart.getSettings(); // $ExpectType Promise<unknown>
Swell.cart.getShippingRates(); // $ExpectType Promise<ShippingRates>
Swell.cart.removeCoupon(); // $ExpectType Promise<SwellCart>
Swell.cart.removeGiftcard(''); // $ExpectType Promise<SwellCart>
Swell.cart.removeItem(''); // $ExpectType Promise<SwellCart>
// $ExpectType Promise<SwellCart>
Swell.cart.setItems([
    {
        product_id: '',
    },
]);
Swell.cart.submitOrder(); // $ExpectType Promise<SwellOrder>
// $ExpectType Promise<SwellCart>
Swell.cart.update({
    product_id: '',
});
Swell.cart.updateItem('', {}); // $ExpectType Promise<SwellCart>

Swell.categories.get(''); // $ExpectType Promise<SwellCategory>
Swell.categories.get(); // $ExpectType Promise<ListResult<SwellCategory>>
Swell.categories.list({}); // $ExpectType Promise<ListResult<SwellCategory>>

Swell.currency.format(1, {}); // $ExpectType string
Swell.currency.list(); // $ExpectType Promise<ListResult<unknown>>
Swell.currency.select(''); // $ExpectType Promise<unknown>
Swell.currency.selected(); // $ExpectType Promise<string>

Swell.locale.selected(); // $ExpectType Promise<string>
Swell.locale.select(''); // $ExpectType Promise<unknown>

Swell.payment.createElements({}); // $ExpectType Promise<unknown>
Swell.payment.tokenize({}); // $ExpectType void
Swell.products.get(''); // $ExpectType Promise<SwellProduct>
Swell.products.list({}); // $ExpectType Promise<ListResult<SwellProduct>>
// $ExpectType Promise<SwellProduct>
Swell.products.variation('', {
    name: '',
    value: '',
});

Swell.settings.get(); // $ExpectType Promise<unknown>
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
