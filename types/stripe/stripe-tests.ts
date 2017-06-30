import {stripe, Stripe} from 'stripe';

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
const card = elements.create('card', {hidePostalCode: true, style});
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
