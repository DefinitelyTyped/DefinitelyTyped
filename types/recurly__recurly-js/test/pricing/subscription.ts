export default function subscriptionPricing() {
  window.recurly.Pricing.Subscription()
    .plan('basic', { quantity: 1 })
    .then(x => x)
    .addon('addon1', { quantity: 2 })
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
    .coupon('coupon')
    .currency('USD')
    .giftcard('giftcard')
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
    .catch(e => {
      e.code;
      e.classification;
      e.message;
      e.name;
    })
    .done(pricing => {
      if (pricing) {
        // $ExpectType string
        pricing.price.now.subtotal;
        // $ExpectType string
        pricing.price.now.plan;
        // $ExpectType string
        pricing.price.now.addons;
        // $ExpectType string
        pricing.price.now.setup_fee;
        // $ExpectType string
        pricing.price.now.discount;
        // $ExpectType string
        pricing.price.now.tax;
        // $ExpectType string
        pricing.price.now.total;
        // $ExpectType string
        pricing.price.next.subtotal;
        // $ExpectType string
        pricing.price.next.plan;
        // $ExpectType string
        pricing.price.next.addons;
        // $ExpectType string
        pricing.price.next.setup_fee;
        // $ExpectType string
        pricing.price.next.discount;
        // $ExpectType string
        pricing.price.next.tax;
        // $ExpectType string
        pricing.price.next.total;
        // $ExpectType string
        pricing.price.base.plan.unit;
        // $ExpectType string
        pricing.price.base.plan.setup_fee;
        // $ExpectType string
        pricing.price.base.addons.myAddon;
        // $ExpectType string
        pricing.price.addons.myAddon;
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
      }
    });
}
