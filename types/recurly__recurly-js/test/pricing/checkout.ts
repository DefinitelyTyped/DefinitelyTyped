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
    .adjustment({
      id: '0',
      amount: 1,
      quantity: 1,
      taxExempt: true,
      taxCode: 'my-tax-code',
    })
    .adjustment({
      itemCode: 'item',
      quantity: 1,
    })
    .coupon('my-coupon-code')
    .currency('USD')
    .giftCard('my-gift-card-code')
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
    .then(x => x)
    .catch(e => {
      e.code;
      e.classification;
      e.message;
      e.name;
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
    .tax({
      tax_code: 'digital',
    })
    .subscription(
      window.recurly.Pricing.Subscription()
        .plan('basic', { quantity: 1 })
        .done(),
    )
    .then(x => x)
    .done(pricing => {
      pricing.price.now.total;
    });
}
