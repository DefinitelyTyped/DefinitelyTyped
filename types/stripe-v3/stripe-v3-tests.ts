declare function describe(desc: string, fn: () => void): void;
declare function it(desc: string, fn: () => void): void;

const style = {
    base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        fontWeight: 'bold',
        '::placeholder': {
            color: '#aab7c4'
        },
        '::selection': {
            backgroundColor: '#aaccdd'
        }
    },
    invalid: {
        color: '#B71C1C',
        iconColor: '#B71C1C'
    }
};

describe("Stripe object", () => {
    it("should exercise alternative ways to create Stripe object", () => {
        const stripeWithBetaOption: stripe.Stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx', { betas: ['beta-feature'] }); // This looks deprecated
        const stripeWithLocale: stripe.Stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx', { locale: 'zh' });
        const stripeWithAccount: stripe.Stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx', { stripeAccount: 'acct_24BFMpJ1svR5A89k' });
    });
});

describe("Stripe elements", () => {
    const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    const elements = stripe.elements();

    it("should create a cards element", () => {
        const card = elements.create('card', {
            hidePostalCode: false,
            style,
            value: {
                postalCode: '94110',
            },
        });
        card.mount(document.createElement('div'));
        card.on('ready', () => {
            console.log('ready');
        });
        card.on('change', (response) => {
            if (response) {
                console.log(response.elementType, response.brand);
            }
        });
        card.addEventListener('ready', () => {
            console.log('ready (ael)');
        });
        card.addEventListener('change', (response) => {
            if (response) {
                console.log(response.elementType, response.brand);
            }
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
    });

    it("should create an iban source with a mandate", () => {
        const options: stripe.SourceOptions = {
            type: 'sepa_debit',
            sepa_debit: {
                iban: 'some iban',
            },
            owner: {
                name: 'some holder',
            },
            mandate: {
                notification_method: 'email',
            },
            currency: 'eur',
        };

        stripe.createSource(options);
    });

    it("should create an iban element", () => {
        const ibanElement = elements.create('iban', {
            supportedCountries: ['SEPA'],
            placeholderCountry: 'AT'
        });
        stripe.createToken(ibanElement, {
            country: 'US',
            currency: 'USD',
            routing_number: '110000000',
            account_number: '110000000',
            account_holder_name: 'Jane Austen',
            account_holder_type: 'individual',
        }).then(
            (result: stripe.TokenResponse) => console.log(result.token),
            (error: stripe.Error) => console.error(error)
        );

        stripe.createToken('bank_account', {
            country: 'US',
            currency: 'USD',
            routing_number: '110000000',
            account_number: '110000000',
            account_holder_name: 'Jane Austen',
            account_holder_type: 'individual',
        }).then(
            (result: stripe.TokenResponse) => console.log(result.token),
            (error: stripe.Error) => console.error(error)
        );
    });

    it("should create a token from IBAN with routing_number not set", () => {
        stripe.createToken('bank_account', {
            country: 'FR',
            currency: 'eur',
            account_number: 'FR1420041010050500013M02606',
            account_holder_name: 'Jean Martin',
            account_holder_type: 'individual',
        }).then(
            (result: stripe.TokenResponse) => console.log(result.token),
            (error: stripe.Error) => console.error(error)
        );
    });

    it("should create an idealBank element", () => {
        const idealBank = elements.create('idealBank');
        idealBank.on('change', (resp: stripe.elements.ElementChangeResponse) => {
            if (resp.value && typeof resp.value !== 'object') {
                console.log(resp.value.length);
                const string: string = resp.value;
            }
        });
    });

    it("should use payment request API", () => {
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
            const body = JSON.stringify({ token: ev.token.id });
            // post to server...
            Promise.resolve({ ok: true })
                .then(response => {
                    if (response.ok) {
                        ev.complete('success');
                    } else {
                        ev.complete('fail');
                    }
                });
        });
        paymentRequest.on('source', ev => {
            const body = JSON.stringify({ token: ev.source.id });
            // post to server...
            Promise.resolve({ ok: true })
                .then(response => {
                    if (response.ok) {
                        ev.complete('success');
                    } else {
                        ev.complete('fail');
                    }
                });
        });
    });

    it("should use payment method API", () => {
        const card = elements.create('card');
        stripe.createPaymentMethod('card', card, {
            billing_details: {
                name: 'Jenny Rosen',
            },
        }).then(result => {
            if (result.error) {
                console.error(result.error.param);
            } else if (result.paymentMethod) {
                console.log(result.paymentMethod.card && result.paymentMethod.card.brand);
            }
        });
    });

    it("should use payment method API with new format", () => {
        const card = elements.create('card');
        stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
              name: 'Jenny Rosen',
            },
        }).then(result => {
            if (result.error) {
                console.error(result.error.param);
            } else if (result.paymentMethod) {
                console.log(result.paymentMethod.card && result.paymentMethod.card.brand);
            }
        });
    });

    it("should use checkout API for client implementations", () => {
        stripe.redirectToCheckout({
            items: [
                { sku: 'sku_123', quantity: 1 }
            ],
            successUrl: 'https://example.com/success',
            cancelUrl: 'https://example.com/canceled',
        }).then(errorResult => {
            console.log(errorResult.error.param);
        });
    });

    it("should use the checkout API for server implementations", () => {
        stripe.redirectToCheckout({
            sessionId: 'sess_test_123',
        }).then(errorResult => {
            console.log(errorResult.error.param);
        });
    });

    it("should use payment intents", () => {
        stripe.retrievePaymentIntent('pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2')
            .then(result => {
                if (result.error) {
                    console.error(result.error.message);
                } else if (result.paymentIntent) {
                    console.log(result.paymentIntent.description);
                }
            });

        const card = elements.create('card');
        stripe.handleCardPayment(
            'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2',
            card,
            {
                payment_method_data: {
                    billing_details: {
                        name: 'Jenny Rosen'
                    }
                }
            }
        ).then(result => {
            if (result.error) {
                console.error(result.error.message);
            } else if (result.paymentIntent) {
                console.log(result.paymentIntent.receipt_email);
            }
        });

        stripe.handleCardPayment(
            '{PAYMENT_INTENT_CLIENT_SECRET}',
            {
                payment_method: '{PAYMENT_METHOD_ID}',
            }
        ).then(result => {
            if (result.error) {
                console.error(result.error.message);
            } else if (result.paymentIntent) {
                console.log(result.paymentIntent.shipping && result.paymentIntent.shipping.address);
            }
        });

        stripe
          .handleCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
            source: '{SOURCE_ID}',
          })
          .then(result => {
            if (result.error) {
              console.error(result.error.message);
            } else if (result.paymentIntent) {
              console.log(result.paymentIntent.source);
            }
          });

        // confirmCardPayment

        // stripe.confirmCardPayment(clientSecret)
        stripe
            .confirmCardPayment(
                'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2'
            )
            .then(_result => {
                // Handle result.error or result.paymentIntent
            });
        // stripe.confirmCardPayment(clientSecret,data?)
        stripe
            .confirmCardPayment(
                'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2',
                {
                    payment_method: {
                        card,
                        billing_details: {
                            name: 'Jenny Rosen',
                        },
                    },
                    shipping: {
                        address: {
                            line1: 'Line 1',
                        },
                        name: 'Recipient name',
                    },
                }
            )
            .then(_result => {
                // Handle result.error or result.paymentIntent
            });
        // stripe.confirmCardPayment(clientSecret,data?,options?)
        stripe
            .confirmCardPayment(
                'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2',
                {
                    payment_method: {
                        card,
                        billing_details: {
                            name: 'Jenny Rosen',
                        },
                    },
                },
                {
                    handleActions: false,
                }
            )
            .then(_result => {
                // Handle result.error or result.paymentIntent
            });

        // confirmPaymentIntent

        // stripe.confirmPaymentIntent(clientSecret)
        stripe
            .confirmPaymentIntent('{PAYMENT_INTENT_CLIENT_SECRET}')
            .then(_result => {
                // Handle result.error or result.paymentIntent
            });

        // stripe.confirmPaymentIntent(clientSecret,element)
        stripe
            .confirmPaymentIntent('{PAYMENT_INTENT_CLIENT_SECRET}', card)
            .then(_result => {
                // Handle result.error or result.paymentIntent
            });

        // stripe.confirmPaymentIntent(clientSecret,element,data?)
        stripe
            .confirmPaymentIntent('{PAYMENT_INTENT_CLIENT_SECRET}', card, {
                payment_method_data: {
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
                return_url: 'https://example.com/return_url',
            })
            .then(_result => {
                // Handle result.error or result.paymentIntent
            });

        // stripe.confirmPaymentIntent(clientSecret,data?)
        stripe
            .confirmPaymentIntent('{PAYMENT_INTENT_CLIENT_SECRET}', {
                payment_method: '{PAYMENT_METHOD_ID}',
                return_url: 'https://example.com/return_url',
            })
            .then(_result => {
                // Handle result.error or result.paymentIntent
            });

        const ibanElement = elements.create('iban');
        stripe.confirmSepaDebitPayment(
            'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2',
            {
                payment_method: {
                    sepa_debit: ibanElement,
                    billing_details: {
                        name: 'Jenny Rosen',
                        email: 'jenny@example.com',
                    },
                }
            }
        ).then(result => {
            if (result.error) {
                console.error(result.error.message);
            } else if (result.paymentIntent) {
              console.log(result.paymentIntent.source);
            }
        });
    });

    it("should handle card setup", () => {
        const card = elements.create('card');

        stripe.handleCardSetup(
            'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2',
            card,
            {
                payment_method_data: {
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                }
            }
        ).then(result => {
            if (result.error) {
                console.error(result.error.message);
            } else if (result.setupIntent) {
                console.log(result.setupIntent.id);
            }
        });
    });

    it("should confirm card setup", () => {
        const card = elements.create('card');

        stripe.confirmCardSetup(
            'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2',
            {
                payment_method: {
                    card,
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                }
            }
        ).then(result => {
            if (result.error) {
                console.error(result.error.message);
            } else if (result.setupIntent) {
                console.log(result.setupIntent.id);
            }
        });
    });

    it("should retrieve setup intent", () => {
        stripe.retrieveSetupIntent(
            'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2',
        ).then(result => {
            if (result.error) {
                console.error(result.error.message);
            } else if (result.setupIntent) {
                console.log(result.setupIntent.id);
            }
        });
    });

    it("should confirm SEPA debit setup", () => {
        const ibanElement = elements.create('iban');

        stripe.confirmSepaDebitSetup(
            'pi_18eYalAHEMiOZZp1l9ZTjSU0_secret_NibvRz4PMmJqjfb0sqmT7aq2',
            {
                payment_method: {
                    sepa_debit: ibanElement,
                    billing_details: {
                        name: 'Jenny Rosen',
                        email: 'jenny@example.com',
                    },
                }
            }
        ).then(result => {
            if (result.error) {
                console.error(result.error.message);
            } else if (result.setupIntent) {
                console.log(result.setupIntent.id);
            }
        });
    });

    it("should get card element", () => {
        elements.create('card');
        const card = elements.getElement('card');
        console.log(card);
    });
});
