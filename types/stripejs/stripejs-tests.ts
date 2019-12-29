import { StripeJS } from "stripejs";
import { StripeElement } from "stripejs/element";
import { CanMakePaymentResult, StripePaymentResponse } from "stripejs/payment";
import { BankTokenData, IBANTokenData, TokenData, TokenResult } from "stripejs/token";
import { SourceData, SourceResult } from "stripejs/source";

declare function describe(desc: string, fn: () => void): void;

declare function it(desc: string, fn: () => void): void;

describe('StripeJS', () => {
    const stripe: StripeJS = {} as any;

    it('Should be able to initialize', () => {
        stripe('test');
        stripe('test', {stripeAccount: 'test123'});
    });

    it('Should be possible to get information from stripe', () => {
        stripe._apiKey;
        stripe._keyMode;
    });

    it('Should be possible to create and modify elements', () => {
        const creator = stripe.elements();
        stripe.elements({fonts: [], locale: 'nl'});
        stripe.elements({fonts: [], locale: 'nl'});

        const element = creator.create("cardCvc", {value: {postalCode: '94110'}});
        element.blur();
        element.focus();
        element.clear();
        element.on('focus', () => null);
        element.on('click', (event: { preventDefault: () => void }) => event.preventDefault());
        element.mount('#card-element');
        element.mount(new HTMLElement());
        element.unmount();
        element.update({value: {postalCode: '123'}});
        element.destroy();
    });

    it('Should be possible to create a payment request', () => {
        const data = {country: 'NL', currency: 'eur', total: {amount: 100, label: 'hello world'}};
        const request = stripe.paymentRequest(data);
        request.canMakePayment().then((result: CanMakePaymentResult | null) => null);
        request.on('token', ((event: StripePaymentResponse) => {
            const token: any = event.token ? event.token : null;
            event.complete("fail");
            const name: string = event.payerName ? event.payerName : '';
        }));
        request.show();
        request.update(data);
    });

    it('Should be possible to create a token', () => {
        const element: StripeElement = {} as any;
        const data: TokenData = {
            name: '',
            currency: 'eur',
            address_city: '',
            address_country: 'NL',
            address_line1: '',
            address_line2: '',
            address_state: '',
            address_zip: '',
        };
        stripe.createToken(element, data).then((result: TokenResult) => result.token);

        const iban: IBANTokenData = {
            currency: 'eur',
            account_holder_name: '',
            account_holder_type: 'company',
        };
        stripe.createToken(element, iban).then((result: TokenResult) => result.token);

        const bankData = {
            country: 'NL',
            account_number: '12345'
        };
        const bank: BankTokenData = {...iban, ...bankData};
        stripe.createToken('bank_account', bank).then((result: TokenResult) => result.token);

        stripe.createToken('pii', {personal_id_number: ''}).then((result: TokenResult) => result.error);
    });

    it('Should be possible to create a source object', () => {
        const element: StripeElement = {} as any;
        const data: SourceData = {
            type: 'alipay',
            flow: 'none',
            amount: 1000,
            currency: 'eur',
            usage: 'single_use'
        };
        stripe.createSource(element, data).then((result: SourceResult) => result.source);
        stripe.createSource(data).then((result: SourceResult) => result.error);
    });

    it('Should be possible to fetch a source object', () => {
        stripe.retrieveSource({id: '', client_secret: ''}).then((result: SourceResult) => result.source);
    });
});
