const buttonRenderer: paypal.ButtonRenderer = paypal.Button;
const buttonsRenderer: paypal.ButtonsRenderer = paypal.Buttons;

buttonRenderer.render(
    {
        env: paypal.Environment.Production,

        payment: async () => {
            return 'foo';
        },

        onAuthorize: async (
            data: paypal.AuthorizationData,
            actions: object,
        ): Promise<paypal.AuthorizationResponse> => {
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

        funding: {
            allowed: [paypal.FUNDING.CARD],
            disallowed: [paypal.FUNDING.VENMO]
        }
    },
    '#paypal-button',
);

buttonsRenderer({
    fundingSource: 'paypal',

    createOrder: async (): Promise<string> => {
        return 'payment__id_123';
    },

    onApprove: async (
        data: paypal.AuthorizationData,
        actions: object,
    ): Promise<paypal.AuthorizationResponse> => {
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
        console.log('PayPal JS SDK payment cancelled', data);
    },

    onError: (error: string) => {
        console.error('PayPal JS SDK error', error);
    },
}).render('#paypal-button');
