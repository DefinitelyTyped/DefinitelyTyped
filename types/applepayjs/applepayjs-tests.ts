// Copyright (c) Martin Costello, 2017. All rights reserved.
// Licensed under the Apache 2.0 license. See the LICENSE file in the project root for full license information.

declare function describe(desc: string, fn: () => void): void;
declare function it(desc: string, fn: () => void): void;

describe("ApplePaySession", () => {
    it("the constants are defined", () => {
        const status = 0;
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
        const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            supportedNetworks: ["masterCard", "visa"],
            merchantCapabilities: ["supports3DS"],
            total: {
                label: "My Store",
                amount: "9.99",
            },
        };

        const session = new ApplePaySession(version, paymentRequest);
    });
    it("can create a new instance with a recurring payment", () => {
        const version = 14;
        const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            merchantCapabilities: ["supports3DS", "supportsDebit", "supportsCredit"],
            supportedNetworks: ["visa", "masterCard", "amex", "discover"],
            lineItems: [
                {
                    label: "7 Day Trial",
                    amount: "0.00",
                    paymentTiming: "recurring",
                    recurringPaymentEndDate: "2023-04-11T18:02:42.722Z",
                },
                {
                    label: "Recurring",
                    amount: "4.99",
                    paymentTiming: "recurring",
                    recurringPaymentStartDate: "2023-04-11T18:02:42.722Z",
                },
            ],
            recurringPaymentRequest: {
                paymentDescription:
                    "A description of the recurring payment to display to the user in the payment sheet.",
                regularBilling: {
                    label: "Recurring",
                    amount: "4.99",
                    paymentTiming: "recurring",
                    recurringPaymentStartDate: "2023-04-11T18:02:42.722Z",
                },
                trialBilling: {
                    label: "7 Day Trial",
                    amount: "0.00",
                    paymentTiming: "recurring",
                    recurringPaymentEndDate: "2023-04-11T18:02:42.722Z",
                },
                billingAgreement:
                    "A localized billing agreement displayed to the user in the payment sheet prior to the payment authorization.",
                managementURL: "https://applepaydemo.apple.com",
                tokenNotificationURL: "https://applepaydemo.apple.com",
            },
            total: {
                label: "Recurring Demo (Card is not charged)",
                amount: "4.99",
            },
        };

        const session = new ApplePaySession(version, paymentRequest);
    });

    it("can create a new instance with a multi merchant payment request", () => {
        const version = 14;
        const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            merchantCapabilities: ["supports3DS", "supportsDebit", "supportsCredit"],
            supportedNetworks: ["visa", "masterCard", "amex", "discover"],
            lineItems: [
                {
                    label: "Hotel: Ocean View Suite",
                    amount: "2.00",
                },
                {
                    label: "Flight: LAX-SFO",
                    amount: "3.00",
                },
                {
                    label: "Tax",
                    amount: "1.00",
                },
            ],
            multiTokenContexts: [
                {
                    merchantIdentifier: "merchant.com.apdemo",
                    externalIdentifier: "hotel-apple-blossom",
                    merchantName: "Apple Pay Demo - Hotel",
                    amount: "2.50",
                },
                {
                    merchantIdentifier: "merchant.com.apdemo",
                    externalIdentifier: "airline-apple-air",
                    merchantName: "Apple Pay Demo - Airline",
                    merchantDomain: "https://applepay.airline.example.com",
                    amount: "3.50",
                },
            ],
            total: {
                label: "Multi-Merchant Demo (Card is not charged)",
                amount: "6.00",
            },
        };
        const session = new ApplePaySession(version, paymentRequest);
    });
    it("can create a new instance with an automatic reload payment request", () => {
        const version = 14;
        const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            merchantCapabilities: ["supports3DS", "supportsDebit", "supportsCredit"],
            supportedNetworks: ["visa", "masterCard", "amex", "discover"],
            lineItems: [
                {
                    label: "Automatic Reload",
                    amount: "15.00",
                    paymentTiming: "automaticReload",
                    automaticReloadPaymentThresholdAmount: "5.00",
                },
            ],
            automaticReloadPaymentRequest: {
                paymentDescription:
                    "A description of the automatic reload that you provide and that appears in the payment sheet.",
                automaticReloadBilling: {
                    label: "Automatic Reload",
                    amount: "15.00",
                    paymentTiming: "automaticReload",
                    automaticReloadPaymentThresholdAmount: "5.00",
                },
                billingAgreement:
                    "A localized billing agreement that the app displays to the user in the payment sheet.",
                managementURL: "https://applepaydemo.apple.com",
                tokenNotificationURL: "https://applepaydemo.apple.com",
            },
            total: {
                label: "Automatic Reload Demo (Card is not charged)",
                amount: "15.00",
            },
        };
        const session = new ApplePaySession(version, paymentRequest);
    });
    it("can create a new instance with a deferred payment request", () => {
        const version = 14;
        const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            merchantCapabilities: ["supports3DS", "supportsDebit", "supportsCredit"],
            supportedNetworks: ["visa", "masterCard", "amex", "discover"],
            lineItems: [
                {
                    label: "Pay for Later",
                    amount: "1.99",
                    paymentTiming: "deferred",
                    deferredPaymentDate: "2023-04-11T18:02:42.722Z",
                },
            ],
            total: {
                label: "Deferred Demo (Card is not charged)",
                amount: "1.99",
            },
        };
        const session = new ApplePaySession(version, paymentRequest);
    });
    it("can create a new instance with a deferred payment request with a deferred billing agreement", () => {
        const version = 14;
        const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            merchantCapabilities: ["supports3DS", "supportsDebit", "supportsCredit"],
            shippingMethods: [
                {
                    label: "Free Standard Shipping",
                    amount: "0.00",
                    detail: "Arrives in 5-7 days",
                    identifier: "standardShipping",
                    dateComponentsRange: {
                        startDateComponents: {
                            years: 2023,
                            months: 4,
                            days: 9,
                            hours: 0,
                        },
                        endDateComponents: {
                            years: 2023,
                            months: 4,
                            days: 11,
                            hours: 0,
                        },
                    },
                },
                {
                    label: "Express Shipping",
                    amount: "1.00",
                    detail: "Arrives in 2-3 days",
                    identifier: "expressShipping",
                    dateComponentsRange: {
                        startDateComponents: {
                            years: 2023,
                            months: 4,
                            days: 6,
                            hours: 0,
                        },
                        endDateComponents: {
                            years: 2023,
                            months: 4,
                            days: 7,
                            hours: 0,
                        },
                    },
                },
            ],
            shippingType: "shipping",
            supportedNetworks: ["visa", "masterCard", "amex", "discover"],
            requiredBillingContactFields: ["postalAddress", "name", "phoneticName"],
            requiredShippingContactFields: ["postalAddress", "name", "phone", "email"],
            lineItems: [
                {
                    label: "Sales Tax",
                    amount: "0.00",
                },
                {
                    label: "Shipping",
                    amount: "0.00",
                },
            ],
            total: {
                label: "Demo (Card is not charged)",
                amount: "1.99",
                type: "final",
            },
        };
        const session = new ApplePaySession(version, paymentRequest);
    });
    it("can call static methods", () => {
        const merchantIdentifier = "MyMerchantId";

        const canMakePayments: boolean = ApplePaySession.canMakePayments();
        const supported: boolean = ApplePaySession.supportsVersion(2);

        ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier).then((status: boolean) => {
            console.log(`Can make payments with active card: ${status}.`);
        });

        ApplePaySession.openPaymentSetup(merchantIdentifier).then(success => {
            console.log(`Apple Pay setup: ${success}.`);
        });
    });
    it("can call instance methods", () => {
        const version = 3;
        const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            supportedNetworks: ["masterCard", "visa"],
            merchantCapabilities: ["supports3DS", "supportsCredit", "supportsDebit"],
            total: {
                label: "My Store",
                amount: "9.99",
            },
        };

        const session = new ApplePaySession(version, paymentRequest);

        session.abort();
        session.completeMerchantValidation({
            foo: "bar",
        });

        session.completePayment(ApplePaySession.STATUS_SUCCESS);

        const authorizationResult: ApplePayJS.ApplePayPaymentAuthorizationResult = {
            status: ApplePaySession.STATUS_FAILURE,
            errors: [
                {
                    code: "addressUnserviceable",
                    contactField: "postalCode",
                    message: "The specified postal code cannot be delivered to.",
                },
            ],
        };

        session.completePayment(authorizationResult);

        const total: ApplePayJS.ApplePayLineItem = {
            label: "Subtotal",
            type: "final",
            amount: "35.00",
        };

        const lineItems: ApplePayJS.ApplePayLineItem[] = [
            {
                label: "Subtotal",
                type: "final",
                amount: "35.00",
            },
            {
                label: "Free Shipping",
                amount: "0.00",
                type: "final",
            },
            {
                label: "Estimated Tax",
                amount: "3.06",
                type: "pending",
            },
        ];

        const shippingMethods = [
            {
                label: "Free Shipping",
                detail: "Arrives in 5 to 7 days",
                amount: "0.00",
                identifier: "FreeShipping",
            },
            {
                label: "2-hour Shipping",
                amount: "5.00",
                detail: "2-hour Shipping",
                identifier: "BusinessShipping",
            },
        ];

        session.completePaymentMethodSelection(total, lineItems);

        const paymentUpdate = {
            newTotal: total,
        };

        session.completePaymentMethodSelection(paymentUpdate);

        session.completeShippingContactSelection(
            ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS,
            shippingMethods,
            total,
            lineItems,
        );

        const contactUpdate = {
            newTotal: total,
        };

        session.completeShippingContactSelection(contactUpdate);

        session.completeShippingMethodSelection(ApplePaySession.STATUS_SUCCESS, total, lineItems);

        const shippingUpdate = {
            newTotal: total,
        };

        session.completeShippingMethodSelection(shippingUpdate);

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
            if (event.paymentMethod.billingContact) {
                console.log("Billing contact:", JSON.stringify(event.paymentMethod.billingContact));
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
        const paymentRequest: ApplePayJS.ApplePayPaymentRequest = {
            applicationData: "ApplicationData",
            countryCode: "GB",
            currencyCode: "GBP",
            merchantCapabilities: ["supports3DS", "supportsCredit", "supportsDebit"],
            supportedNetworks: ["amex", "discover", "jcb", "masterCard", "privateLabel", "visa"],
            total: {
                label: "Apple",
                type: "final",
                amount: "9.99",
            },
        };

        paymentRequest.billingContact = {
            emailAddress: "ravipatel@example.com",
            familyName: "Patel",
            givenName: "Ravi",
            phoneNumber: "(408) 555-5555",
            addressLines: ["1 Infinite Loop"],
            locality: "Cupertino",
            subLocality: "",
            administrativeArea: "CA",
            subAdministrativeArea: "",
            postalCode: "95014",
            country: "United States",
            countryCode: "US",
        };

        paymentRequest.lineItems = [
            {
                label: "Subtotal",
                type: "final",
                amount: "35.00",
            },
            {
                label: "Free Shipping",
                amount: "0.00",
                type: "pending",
            },
            {
                label: "Estimated Tax",
                amount: "3.06",
            },
        ];

        paymentRequest.requiredBillingContactFields = ["postalAddress", "name"];

        paymentRequest.requiredShippingContactFields = ["postalAddress", "name", "phone", "name"];

        paymentRequest.shippingContact = {
            emailAddress: "ravipatel@example.com",
            familyName: "Patel",
            givenName: "Ravi",
            phoneNumber: "(408) 555-5555",
            phoneticFamilyName: "Patel",
            phoneticGivenName: "Ravi",
            addressLines: ["1 Infinite Loop"],
            locality: "Cupertino",
            subLocality: "",
            administrativeArea: "CA",
            subAdministrativeArea: "",
            postalCode: "95014",
            country: "United States",
            countryCode: "US",
        };

        paymentRequest.shippingMethods = [
            {
                label: "Free Shipping",
                detail: "Arrives in 5 to 7 days",
                amount: "0.00",
                identifier: "FreeShipping",
            },
            {
                label: "2-hour Shipping",
                amount: "5.00",
                detail: "2-hour Shipping",
                identifier: "BusinessShipping",
            },
        ];

        paymentRequest.shippingType = "storePickup";
        paymentRequest.shippingType = "delivery";
    });
});

describe("ApplePayError", () => {
    it("can create a new instance", () => {
        new ApplePayError("shippingContactInvalid");
        new ApplePayError("shippingContactInvalid", "emailAddress");
        new ApplePayError("shippingContactInvalid", "emailAddress", "some message");
    });
});

describe("ApplePayJS.ApplePayError", () => {
    it("can be used as a type", () => {
        const a: ApplePayJS.ApplePayError = new ApplePayError("shippingContactInvalid");
        const b: ApplePayJS.ApplePayError = new ApplePayError("shippingContactInvalid", "emailAddress");
        const c: ApplePayJS.ApplePayError = new ApplePayError("shippingContactInvalid", "emailAddress", "some message");
    });
});
