/// <reference path="stripe.d.ts" />

function testCardCreateToken(): void {

    Stripe.card.createToken({
      number: '42424242424242424242',
      exp_month: 10,
      exp_year: 2016
    }, (status: number, response: Stripe.StripeCardTokenResponse) => {
            response = {
                id: "tok_u5dg20Gra",
                card: {
                    name: null,
                    address_line1: "12 Main Street",
                    address_line2: "Apt 42",
                    address_city: "Palo Alto",
                    address_state: "CA",
                    address_zip: "94301",
                    address_country: "US",
                    country: "US",
                    exp_month: 2,
                    exp_year: 2016,
                    last4: "4242",
                    object: "card",
                    brand: "Visa",
                    funding: "credit"
                },
                created: 1422742234,
                livemode: true,
                type: "card",
                object: "token",
                used: false,
                // Note: error won't be set with the other data simultaneously.
                // Done here as example only
                error: {
                    type: "card_error",
                    code: "invalid_expiry_year",
                    message: "Your card's expiration year is invalid.",
                    param: "exp_year"
                }
            };
        });    

    Stripe.card.createToken({
      number: '42424242424242424242',
      exp_month: '10',
      exp_year: '2016',
      cvc: '123',
      name: 'John Doe',
      address_line1: '1313 Mockingbird Ln',
      address_line2: 'Attn: Fester',
      address_city: 'Mockingbird Heights',
      address_state: 'CA',
      address_zip: '01234',
      address_country: 'US'
    }, (status: number, response: Stripe.StripeCardTokenResponse) => {
    });    
}

function testCardValidateCardNumber(): void {

    var result: boolean;
    result = Stripe.card.validateCardNumber('123456');
}

function testCardValidateExpiry(): void {

    var result: boolean;
    result = Stripe.card.validateExpiry('01', '2015');
    result = Stripe.card.validateExpiry(1, 2015);
}

function testCardValidateCVC(): void {

    var result: boolean;
    result = Stripe.card.validateCVC('123');
}

function testCardCardType(): void {

    var result: string;
    result = Stripe.card.cardType('123456');
}

function testBankAccountCreateToken(): void {
    Stripe.bankAccount.createToken({
        country: 'US',
        routing_number: '123456789',
        account_number: '987654321000'
    },(status: number, response: Stripe.StripeBankAccountTokenResponse) => {
        response = {
            id: "tok_u5dg20Gra", // String of token identifier
            bank_account: {
                country: "US",
                bank_name: "BANK OF AMERICA, N.A",
                last4: "6789",
                validated: false,
                object: "bank_account",
            },
            created: 1422742234,
            livemode: true,
            type: "bank_account",
            object: "token",
            used: false,
            // Note: error won't be set with the other data simultaneously.
            // Done here as example only
            error: {
                type: "invalid_request_error",
                message: "Invalid routing number",
                param: "bank_account",
                code: null
            }
        };
    });
}

function testBankAccountValidateRoutingNumber(): void {

    var result: boolean;
    result = Stripe.bankAccount.validateRoutingNumber('123456789', 'US');
}

function testBankAccountValidateAccountNumber(): void {

    var result: boolean;
    result = Stripe.bankAccount.validateAccountNumber('98765432100000', 'US');
}