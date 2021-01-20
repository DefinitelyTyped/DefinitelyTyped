export default function subscriptionPricing() {
  const checkoutPricing = window.recurly.Pricing.Checkout();

  const el = document.querySelector('div');

  if (el) {
    checkoutPricing.attach(el);
  }

  checkoutPricing.attach('#my-pricing-form');

  checkoutPricing
    .address({
      first_name: 'dave',
      last_name: 'b'
    })
    .address({
      first_name: 'dave',
      last_name: 'b',
      address1: 'address1',
      address2: 'address2',
      city: 'city',
      state: 'state',
      postal_code: 'postal_code',
      country: 'country',
      phone: 'phone',
      vat_number: 'vat_number'
    })
    .adjustment({
      id: '0',
      amount: 1,
      quantity: 1,
      taxExempt: true,
      taxCode: 'my-tax-code'
    })
    .adjustment({
      itemCode: 'item',
      quantity: 1
    })
    .coupon('my-coupon-code')
    .currency('USD')
    .giftCard('my-gift-card-code')
    .shippingAddress({
      first_name: 'dave',
      last_name: 'b'
    })
    .shippingAddress({
      first_name: 'dave',
      last_name: 'b',
      address1: 'address1',
      address2: 'address2',
      city: 'city',
      state: 'state',
      postal_code: 'postal_code',
      country: 'country',
      phone: 'phone',
      vat_number: 'vat_number'
    })
    .tax({
      tax_code: 'tax_code'
    })
    .tax({
      tax_code: 'tax_code',
      vat_number: 'vat_number',
      amounts: {
        now: 'now',
        next: 'next'
      }
    })
    .then(x => x)
    .catch(e => {
      e.code;
      e.classification;
      e.message;
      e.name;
    })
    .shippingAddress({
      first_name: 'dave',
      last_name: 'b'
    })
    .shippingAddress({
      first_name: 'dave',
      last_name: 'b',
      address1: 'address1',
      address2: 'address2',
      city: 'city',
      state: 'state',
      postal_code: 'postal_code',
      country: 'country',
      phone: 'phone',
      vat_number: 'vat_number'
    })
    .tax({
      tax_code: 'digital'
    })
    .subscription(
      window.recurly.Pricing.Subscription()
        .plan('basic', { quantity: 1 })
        .done()
    )
    .then(x => x)
    .done(pricing => {
      // $ExpectType string
      pricing.price.now.items[0].addons;
      // $ExpectType string
      pricing.price.now.items[0].amount;
      // $ExpectType string
      pricing.price.now.items[0].id;
      // $ExpectType string
      pricing.price.now.items[0].plan;
      // $ExpectType string
      pricing.price.now.items[0].setupFee;
      // $ExpectType string
      pricing.price.now.items[0].type;
      // $ExpectType string
      pricing.price.now.subscriptions;
      // $ExpectType string
      pricing.price.now.adjustments;
      // $ExpectType string
      pricing.price.now.discount;
      // $ExpectType string
      pricing.price.now.subtotal;
      // $ExpectType string
      pricing.price.now.taxes;
      // $ExpectType string
      pricing.price.now.giftCard;
      // $ExpectType string
      pricing.price.now.total;
      // $ExpectType string
      pricing.price.next.items[0].addons;
      // $ExpectType string
      pricing.price.next.items[0].amount;
      // $ExpectType string
      pricing.price.next.items[0].id;
      // $ExpectType string
      pricing.price.next.items[0].plan;
      // $ExpectType string
      pricing.price.next.items[0].setupFee;
      // $ExpectType string
      pricing.price.next.items[0].type;
      // $ExpectType string
      pricing.price.next.subscriptions;
      // $ExpectType string
      pricing.price.next.adjustments;
      // $ExpectType string
      pricing.price.next.discount;
      // $ExpectType string
      pricing.price.next.subtotal;
      // $ExpectType string
      pricing.price.next.taxes;
      // $ExpectType string
      pricing.price.next.giftCard;
      // $ExpectType string
      pricing.price.next.total;
      // $ExpectType string
      pricing.price.currency.code;
      // $ExpectType string
      pricing.price.currency.symbol;
      // $ExpectType string
      pricing.price.taxes[0].rate;
      // $ExpectType string
      pricing.price.taxes[0].region;
      // $ExpectType string
      pricing.price.taxes[0].tax_type;
    });
}
