import * as paypal from "paypal-checkout-components";

paypal.Button.render({
  env: paypal.Environment.Production,

  payment: async () => {
    return 'foo';
  },

  onAuthorize: async (data: paypal.AuthorizationData, actions: object): Promise<paypal.AuthorizationTokenizePayload> => {
    return {
      nonce: 'foo',
      type: paypal.FlowType.Checkout,
      details: {
        email: 'foo@bar.com',
        payerId: '123',
        firstName: 'Buyer',
        lastName: 'McGee'
      }
    }
  },

  onCancel: (data) => {
    console.log('checkout.js payment cancelled', JSON.stringify(data, 0, 2));
  },

  onError: (error: string) {
    console.error('checkout.js error', error);
  }
}, '#paypal-button');

// .then(function () {
//   // The PayPal button will be rendered in an html element with the id
//   // `paypal-button`. This function will be called when the PayPal button
//   // is set up and ready to be used.
// });
