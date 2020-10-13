export default function paypal() {
  const paypal = window.recurly.PayPal();

  window.recurly.PayPal({
    display: {
      displayName: 'display-name'
    }
  });

  window.recurly.PayPal({
    braintree: {
      clientAuthorization: 'client-authorization'
    }
  });

  // $ExpectError
  window.recurly.PayPal('string');

  paypal.on('token', () => {});
  paypal.on('error', () => {});
  paypal.on('cancel', () => {});
  paypal.on('ready', () => {});
  // $ExpectError
  paypal.on('fake-event', () => {});

  paypal.start();
  paypal.start({
    options: {
      description: "description"
    }
  });
  paypal.destroy();
}
