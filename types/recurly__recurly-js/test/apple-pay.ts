export default function applePay() {
  const applePay = recurly.ApplePay({
    country: 'US',
    currency: 'USD',
    label: 'My Subscription',
    total: '29.00',
    pricing: window.recurly.Pricing.Checkout()
  });

  applePay.ready(() => {});
  // $ExpectError
  applePay.ready(arg => {});

  applePay.begin(() => {});
  // $ExpectError
  applePay.begin(arg => {});

  applePay.on('error', () => {});
  applePay.on('token', () => {});
  // $ExpectError
  applePay.on('fake-event', () => {});
}
