// Copyright (c) Martin Costello, 2017. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

declare function describe(desc: string, fn: () => void): void;
declare function it(desc: string, fn: () => void): void;

describe("ApplePaySession", () => {
    it("the constants are defined", () => {
        let status = 0;
        switch (status) {
            case ApplePaySession.STATUS_FAILURE:
            case ApplePaySession.STATUS_INVALID_BILLING_POSTAL_ADDRESS:
            case ApplePaySession.STATUS_INVALID_SHIPPING_CONTACT:
            case ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS:
            case ApplePaySession.STATUS_PIN_INCORRECT:
            case ApplePaySession.STATUS_PIN_LOCKOUT:
            case ApplePaySession.STATUS_PIN_REQUIRED:
            case ApplePaySession.STATUS_SUCCESS:
            default:
                break;
        }
    });
    it("can create a new instance", () => {
        const version = 1;
        const paymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            supportedNetworks: [
                "masterCard",
                "visa"
            ],
            merchantCapabilities: [
                "supports3DS"
            ],
            total: {
                label: "My Store",
                amount: "9.99"
            }
        };

        const session = new ApplePaySession(version, paymentRequest);
    });
    it("can call static methods", () => {
        const merchantIdentifier = "MyMerchantId";

        let canMakePayments: boolean = ApplePaySession.canMakePayments();
        let supported: boolean = ApplePaySession.supportsVersion(2);

        ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier)
            .then((status: boolean) => {
                console.log(`Can make payments with active card: ${status}.`);
            });

        ApplePaySession.openPaymentSetup(merchantIdentifier)
            .then((success) => {
                console.log(`Apple Pay setup: ${success}.`);
            });
    });
    it("can call instance methods", () => {
        const version = 1;
        const paymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            supportedNetworks: [
                "masterCard",
                "visa"
            ],
            merchantCapabilities: [
                "supports3DS"
            ],
            total: {
                label: "My Store",
                amount: "9.99"
            }
        };

        const session = new ApplePaySession(version, paymentRequest);

        session.abort();
        session.completeMerchantValidation({
            foo: "bar"
        });
        session.completePayment(ApplePaySession.STATUS_SUCCESS);

        const total = {
            label: "Subtotal",
            type: "final",
            amount: "35.00"
        };

        const lineItems = [
            {
                label: "Subtotal",
                type: "final",
                amount: "35.00"
            },
            {
                label: "Free Shipping",
                amount: "0.00",
                type: "pending"
            },
            {
                label: "Estimated Tax",
                amount: "3.06"
            }
        ];

        const shippingMethods = [
            {
                label: "Free Shipping",
                detail: "Arrives in 5 to 7 days",
                amount: "0.00",
                identifier: "FreeShipping"
            },
            {
                label: "2-hour Shipping",
                amount: "5.00"
            }
        ];

        session.completePaymentMethodSelection(total, lineItems);

        session.completeShippingContactSelection(
            ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS,
            shippingMethods,
            total,
            lineItems);

        session.completeShippingMethodSelection(
            ApplePaySession.STATUS_SUCCESS,
            total,
            lineItems);

        session.oncancel = (event: ApplePayJS.Event): void => {
            event.cancelBubble = true;
        };

        session.onpaymentauthorized = (event: ApplePayJS.ApplePayPaymentAuthorizedEvent) => {
            if (event.payment) {
                console.log("Payment data:", JSON.stringify(event.payment));
            }
        };

        session.onpaymentmethodselected = (event: ApplePayJS.ApplePayPaymentMethodSelectedEvent) => {
            if (event.paymentMethod) {
                console.log("Payment method:", JSON.stringify(event.paymentMethod));
            }
        };

        session.onshippingcontactselected = (event: ApplePayJS.ApplePayShippingContactSelectedEvent) => {
            if (event.shippingContact) {
                console.log("Shipping contact:", JSON.stringify(event.shippingContact));
            }
        };

        session.onshippingmethodselected = (event: ApplePayJS.ApplePayShippingMethodSelectedEvent) => {
            if (event.shippingMethod) {
                console.log("Shipping method:", JSON.stringify(event.shippingMethod));
            }
        };

        session.onvalidatemerchant = (event: ApplePayJS.ApplePayValidateMerchantEvent) => {
            if (event.validationURL) {
                console.log(`The validation URL is '${event.validationURL}'.`);
            }
        };
    });
});
describe("ApplePayPaymentRequest", () => {
    it("can create a new instance", () => {
        let paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            applicationData: "ApplicationData",
            countryCode: "GB",
            currencyCode: "GBP",
            merchantCapabilities: [
                "supports3DS",
                "supportsCredit",
                "supportsDebit"
            ],
            supportedNetworks: [
                "amex",
                "discover",
                "jcb",
                "master​Card",
                "private​Label",
                "visa"
            ],
            total: {
                label: "Apple",
                type: "final",
                amount: "9.99"
            }
        };

        paymentRequest.billingContact = {
            emailAddress: "ravipatel@example.com",
            familyName: "Patel",
            givenName: "Ravi",
            phoneNumber: "(408) 555-5555",
            addressLines: [
                "1 Infinite Loop"
            ],
            locality: "Cupertino",
            administrativeArea: "CA",
            postalCode: "95014",
            country: "United States",
            countryCode: "US"
        };

        paymentRequest.lineItems = [
            {
                label: "Subtotal",
                type: "final",
                amount: "35.00"
            },
            {
                label: "Free Shipping",
                amount: "0.00",
                type: "pending"
            },
            {
                label: "Estimated Tax",
                amount: "3.06"
            }
        ];

        paymentRequest.requiredBillingContactFields = [
            "postalAddress",
            "name"
        ];

        paymentRequest.requiredShippingContactFields = [
            "postalAddress",
            "name",
            "phone",
            "email"
        ];

        paymentRequest.shippingContact = {
            emailAddress: "ravipatel@example.com",
            familyName: "Patel",
            givenName: "Ravi",
            phoneNumber: "(408) 555-5555",
            addressLines: [
                "1 Infinite Loop"
            ],
            locality: "Cupertino",
            administrativeArea: "CA",
            postalCode: "95014",
            country: "United States",
            countryCode: "US"
        };

        paymentRequest.shippingMethods = [
            {
                label: "Free Shipping",
                detail: "Arrives in 5 to 7 days",
                amount: "0.00",
                identifier: "FreeShipping"
            },
            {
                label: "2-hour Shipping",
                amount: "5.00"
            }
        ];

        paymentRequest.shippingType = "storePickup";
    });
});
