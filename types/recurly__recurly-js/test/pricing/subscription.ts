export default function checkoutPricing() {
  window.recurly.Pricing.Subscription()
    .plan('basic', { quantity: 1 })
    .then(x => x)
    .addon('addon1', { quantity: 2 })
    .address({
      first_name: 'dave',
      last_name: 'b',
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
      vat_number: 'vat_number',
    })
    .shippingAddress({
      first_name: 'dave',
      last_name: 'b',
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
      vat_number: 'vat_number',
    })
    .coupon('coupon')
    .currency('USD')
    .giftcard('giftcard')
    .tax({
      tax_code: 'tax_code',
    })
    .tax({
      tax_code: 'tax_code',
      vat_number: 'vat_number',
      amounts: {
        now: 'now',
        next: 'next',
      },
    })
    .catch(e => {
      e.code;
      e.classification;
      e.message;
      e.name;

      // $ExpectError
      e.fake;
    })
    .done(pricing => {
      if (pricing) {
        pricing.price.now.total;
      }
    });
}
