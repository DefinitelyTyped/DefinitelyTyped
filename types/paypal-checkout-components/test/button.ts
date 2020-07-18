import * as paypal from 'paypal-checkout-components';

paypal.Button.render(
    {
        env: paypal.Environment.Production,

        payment: async () => {
            return 'foo';
        },

        onAuthorize: async (
            data: paypal.AuthorizationData,
            actions: object,
        ): Promise<paypal.AuthorizationTokenizePayload> => {
            console.log('onAuthorize', data, actions);

            return {
                nonce: 'foo',
                type: paypal.FlowType.Checkout,
                details: {
                    email: 'foo@bar.com',
                    payerId: '123',
                    firstName: 'Buyer',
                    lastName: 'McGee',
                },
            };
        },

        onCancel: (data: paypal.CancellationData) => {
            console.log('checkout.js payment cancelled', data);
        },

        onError: (error: string) => {
            console.error('checkout.js error', error);
        },
    },
    '#paypal-button',
);
