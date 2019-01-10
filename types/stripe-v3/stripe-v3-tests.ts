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
            console.log(resp.elementType);
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
        // test 3D secure
        const threeDSecureFrame = <HTMLIFrameElement> document.getElementById('3d-secure-frame');
        const ownerInfo = {
            name: 'Jimmy',
            address: {
                line1: '1 High Street',
                postal_code: 'XYZ'
            }
        };
        stripe.createSource(card, { owner: ownerInfo }).then(result => {
            if (result.error) {
                // handle error
                return Promise.resolve(null);
            }
            if (!result.source) {
                // handle error
                return Promise.resolve(null);
            }
            if (!result.source.card || result.source.card.three_d_secure === 'not_supported') {
                // make regular payment...
                return Promise.resolve(null);
            }
            return stripe.createSource({
                type: 'three_d_secure',
                amount: 100,
                currency: 'usd',
                three_d_secure: {
                    card: result.source.id
                },
                redirect: {
                    return_url: location.origin + '/3d-secure-processing-page'
                }
            });
        }).then(threeDSource => {
            if (!threeDSource) {
                return Promise.resolve(null);
            }
            if (threeDSource.error) {
                if (threeDSource.error.code === 'payment_method_not_available') {
                    // make regular payment...
                    return Promise.resolve(null);
                }
                // handle error
                return Promise.resolve(null);
            }
            if (!threeDSource.source || threeDSource.source.status === 'failed' || !threeDSource.source.redirect) {
                // make regular payment...
                return Promise.resolve(null);
            }
            if (threeDSource.source.status === 'chargeable') {
                // make charge...
                return Promise.resolve(null);
            }
            threeDSecureFrame.setAttribute('src', threeDSource.source.redirect.url);
            // now wait until chargeable then make the charge
            return Promise.resolve(null);
        });
        card.destroy();
        // test payment request
        const paymentRequest = stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Demo total',
                amount: 1000,
            }
        });
        const prButton = elements.create('paymentRequestButton', { paymentRequest });
        paymentRequest.canMakePayment().then(result => {
            if (result) {
                prButton.mount('#payment-request-button');
            } else {
                document.getElementById('payment-request-button')!.style.display = 'none';
            }
        });
        paymentRequest.on('token', ev => {
            const body = JSON.stringify({token: ev.token.id});
            // post to server...
            Promise.resolve({ok: true})
            .then(response => {
                if (response.ok) {
                    ev.complete('success');
                } else {
                    ev.complete('fail');
                }
            });
        });
        paymentRequest.on('source', ev => {
            const body = JSON.stringify({token: ev.source.id});
            // post to server...
            Promise.resolve({ok: true})
            .then(response => {
                if (response.ok) {
                    ev.complete('success');
                } else {
                    ev.complete('fail');
                }
            });
        });
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

        elements.create('iban', {
            supportedCountries: ['SEPA'],
            placeholderCountry: 'AT'
        });
    });
});
