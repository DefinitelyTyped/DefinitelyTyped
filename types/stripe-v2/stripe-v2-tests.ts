declare function describe(desc: string, fn: () => void): void;
declare function it(desc: string, fn: () => void): void;

describe("Stripe", () => {
    it("should excercise Stripe API", () => {
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
    });
});
