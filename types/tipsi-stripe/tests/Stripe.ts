import { Stripe } from '..';

async function testStripeCreateToken(): Promise<string> {
    Stripe.setOptions({
        publishableKey: 'bogus',
        merchantId: 'bogus',
    });

    const tok = await Stripe.createTokenWithCard({
        number: '4444 4444 4444 4444',
        expMonth: 9,
        expYear: 23,
        cvc: '123',
    });

    return tok.tokenId;
}
