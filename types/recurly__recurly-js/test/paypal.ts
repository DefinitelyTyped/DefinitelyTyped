export default function paypal() {
  window.recurly.PayPal({
    display: {
      displayName: 'string'
    }
  });
  window.recurly.PayPal({
    braintree: {
      clientAuthorization: 'client-authorization'
    }
  });

  const paypal = window.recurly.PayPal();

  // $ExpectError
  window.recurly.PayPal('string');

  paypal.on('token', () => {});
  paypal.on('error', () => {});
  // $ExpectError
  paypal.on('fake-event', () => {});

  paypal.start();
}
