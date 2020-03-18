export default function paypal() {
  const paypal = window.recurly.PayPal();
  // $ExpectError
  window.recurly.PayPal('string');

  paypal.on('token', () => {});
  paypal.on('error', () => {});
  // $ExpectError
  paypal.on('fake-event', () => {});

  paypal.start();
  paypal.start({
    options: {
      description: 'string',
    },
  });

  paypal.start({
    // $ExpectError
    description: 'string',
  });
}
