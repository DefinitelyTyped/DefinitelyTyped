/// <reference path="balanced.d.ts" />

import balancedReq = require('balanced');

function testRequire() {
    balancedReq.bankAccount.create({
        name: 'John Doe',
        routing_number: '000000000',
        account_number: '0000000000',
        account_type: 'savings'
    }, r => { });
}

function testInit() {
    balanced.init('href');
    balanced.init({
        marketplace_href: 'href',
        server: 'server',
    });
}

function testEmailAddress() {
    var result: boolean = balanced.emailAddress.validate('email@domain.com');
}

function testBankAccount() {
    balanced.bankAccount.create({
        name: 'John Doe',
        routing_number: '000000000',
        account_number: '0000000000',
        account_type: 'savings'
    }, r => { });

    balanced.bankAccount.create({
        name: 'John Doe',
        routing_number: '000000000',
        account_number: '0000000000',
        account_type: 'checking'
    }, r => { });

    var result: boolean;
    var errors: Balanced.ErrorObject[];

    result = balanced.bankAccount.isRoutingNumberValid('abc');

    balanced.bankAccount.lookupRoutingNumber('abc', (r) => { });

    errors = balanced.bankAccount.validate({
        name: 'John Doe',
        routing_number: '000000000',
        account_number: '0000000000',
        account_type: 'checking'
    });
}

function testCreditCard() {
    balanced.card.create({
        number: '0123456789',
        expiration_month: '10',
        expiration_year: '2012'
    }, r => {});
    balanced.card.create({
        number: '0123456789',
        expiration_month: '10',
        expiration_year: '2012',
        cvv: 'abcd'
    }, r => {});
    balanced.card.create({
        number: '0123456789',
        expiration_month: '10',
        expiration_year: '2012',
        name: 'John Doe'
    }, r => {});
    balanced.card.create({
        number: '0123456789',
        expiration_month: '10',
        expiration_year: '2012',
        address: {
            line1: '1313 Mockingbird Ln',
            line2: 'Attn: Fester',
            city: 'Mockingbird Heights',
            state: 'CA',
            postal_code: '01234',
            country_code: 'US'
        }
    }, r => { });

    var ccType: string;
    ccType = balanced.card.cardType('0123456789');

    var result: boolean;
    result = balanced.card.isCVVValid('0123456789', '012356');

    result = balanced.card.isCardNumberValid('0123456789');

    result = balanced.card.isExpiryValid('01', '2012');

    result = balanced.card.isSecurityCodeValid('0123456789', '0123');

    var errors: Balanced.ErrorObject[];
    errors = balanced.card.validate({
        number: '0123456789',
        expiration_month: '10',
        expiration_year: '2012',
        address: {
            line1: '1313 Mockingbird Ln',
            line2: 'Attn: Fester',
            city: 'Mockingbird Heights',
            state: 'CA',
            postal_code: '01234',
            country_code: 'US'
        }
    });
}