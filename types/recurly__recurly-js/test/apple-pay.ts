export default function applePay() {
  const applePay = recurly.ApplePay({
    country: 'US',
    currency: 'USD',
    label: 'My Subscription',
    total: '29.00',
    pricing: window.recurly.Pricing.Checkout()
  });

  applePay.ready(() => {});
  // @ts-expect-error
  applePay.ready(arg => {});

  applePay.begin(() => {});
  // @ts-expect-error
  applePay.begin(arg => {});

  applePay.on('error', () => {});
  applePay.on('token', () => {});
  // @ts-expect-error
  applePay.on('fake-event', () => {});
}
