/// <reference types="stripe-v2" />

declare function describe(desc: string, fn: () => void): void;
declare function it(desc: string, fn: () => void): void;

describe("Stripe", () => {
    it("should excercise all Stripe API", () => {
        const stripe = Stripe('public-key');
        const elements = stripe.elements();
        const style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#B71C1C',
                iconColor: '#B71C1C'
            }
        };
        const card = elements.create('card', { hidePostalCode: true, style });
        card.mount(document.createElement('div'));
        card.on('ready', () => {
            console.log('ready');
        });
        card.on('change', (resp: stripe.elements.ElementChangeResponse) => {
            console.log(resp.brand);
        });
        stripe.createToken(card, {
            name: 'Jimmy',
            address_city: 'Toronto',
            address_country: 'Canada'
        })
            .then((result: stripe.TokenResponse) => {
                console.log(result.token);
            },
            (error: stripe.Error) => {
                console.error(error);
            });
        card.destroy();
    });
});

describe("Stripe v2 & v3", () => {
    it("should excercise all Stripe API", () => {
        function success(card: stripe.StripeCard) {
            console.log(card.brand && card.brand.toString());
        }

        const cardNumber = '4242424242424242';

        const isValid = Stripe.validateCardNumber(cardNumber);
        if (isValid) {
            const tokenData: stripe.StripeCardTokenData = {
                number: cardNumber,
                exp_month: 1,
                exp_year: 2100,
                cvc: '111'
            };
            Stripe.card.createToken(tokenData, (status, response) => {
                if (response.error) {
                    console.error(response.error.message);
                    if (response.error.param) {
                        console.error(response.error.param);
                    }
                } else {
                    success(response.card);
                }
            });
        }
        const stripe = Stripe('public-key');
        const elements = stripe.elements();
        const style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#B71C1C',
                iconColor: '#B71C1C'
            }
        };
        const card = elements.create('card', { hidePostalCode: true, style });
        card.mount(document.createElement('div'));
        card.on('ready', () => {
            console.log('ready');
        });
        card.on('change', (resp: stripe.elements.ElementChangeResponse) => {
            console.log(resp.brand);
        });
        stripe.createToken(card, {
            name: 'Jimmy',
            address_city: 'Toronto',
            address_country: 'Canada'
        })
            .then((result: stripe.TokenResponse) => {
                console.log(result.token);
            },
            (error: stripe.Error) => {
                console.error(error);
            });
    });
});
