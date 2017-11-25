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
    it("the contact fields are defined", () => {
        const contacts = [
            ApplePayJS.ApplePayContactField.email,
            ApplePayJS.ApplePayContactField.name,
            ApplePayJS.ApplePayContactField.phone,
            ApplePayJS.ApplePayContactField.phoneticName,
            ApplePayJS.ApplePayContactField.postalAddress
        ];
    });
    it("the error codes are defined", () => {
        const errorCodes = [
            ApplePayJS.ApplePayErrorCode.addressUnserviceable,
            ApplePayJS.ApplePayErrorCode.billingContactInvalid,
            ApplePayJS.ApplePayErrorCode.shippingContactInvalid,
            ApplePayJS.ApplePayErrorCode.unknown
        ];
    });
    it("the error contact fields are defined", () => {
        const contacts = [
            ApplePayJS.ApplePayErrorContactField.addressLines,
            ApplePayJS.ApplePayErrorContactField.administrativeArea,
            ApplePayJS.ApplePayErrorContactField.country,
            ApplePayJS.ApplePayErrorContactField.countryCode,
            ApplePayJS.ApplePayErrorContactField.emailAddress,
            ApplePayJS.ApplePayErrorContactField.locality,
            ApplePayJS.ApplePayErrorContactField.name,
            ApplePayJS.ApplePayErrorContactField.phoneNumber,
            ApplePayJS.ApplePayErrorContactField.phoneticName,
            ApplePayJS.ApplePayErrorContactField.postalAddress,
            ApplePayJS.ApplePayErrorContactField.postalCode,
            ApplePayJS.ApplePayErrorContactField.subAdministrativeArea,
            ApplePayJS.ApplePayErrorContactField.subLocality
        ];
    });
    it("the line item types are defined", () => {
        const errorCodes = [
            ApplePayJS.ApplePayLineItemType.final,
            ApplePayJS.ApplePayLineItemType.pending
        ];
    });
    it("the merchant capabilities are defined", () => {
        const errorCodes = [
            ApplePayJS.ApplePayMerchantCapability.supports3DS,
            ApplePayJS.ApplePayMerchantCapability.supportsCredit,
            ApplePayJS.ApplePayMerchantCapability.supportsDebit,
            ApplePayJS.ApplePayMerchantCapability.supportsEMV
        ];
    });
    it("the payment method types are defined", () => {
        const errorCodes = [
            ApplePayJS.ApplePayPaymentMethodType.credit,
            ApplePayJS.ApplePayPaymentMethodType.debit,
            ApplePayJS.ApplePayPaymentMethodType.prepaid,
            ApplePayJS.ApplePayPaymentMethodType.store
        ];
    });
    it("the shipping types are defined", () => {
        const errorCodes = [
            ApplePayJS.ApplePayShippingType.delivery,
            ApplePayJS.ApplePayShippingType.servicePickup,
            ApplePayJS.ApplePayShippingType.shipping,
            ApplePayJS.ApplePayShippingType.storePickup
        ];
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

        const canMakePayments: boolean = ApplePaySession.canMakePayments();
        const supported: boolean = ApplePaySession.supportsVersion(2);

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
        const version = 3;
        const paymentRequest = {
            countryCode: "US",
            currencyCode: "USD",
            supportedNetworks: [
                "masterCard",
                "visa"
            ],
            merchantCapabilities: [
                "supports3DS",
                ApplePayJS.ApplePayMerchantCapability.supportsCredit,
                ApplePayJS.ApplePayMerchantCapability.supportsDebit
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

        const authorizationResult = {
            status: ApplePaySession.STATUS_FAILURE,
            errors: [
                {
                    code: ApplePayJS.ApplePayErrorCode.addressUnserviceable,
                    contactField: ApplePayJS.ApplePayErrorContactField.postalCode,
                    message: "The specified postal code cannot be delivered to."
                }
            ]
        };

        session.completePayment(authorizationResult);

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
                type: ApplePayJS.ApplePayLineItemType.final
            },
            {
                label: "Estimated Tax",
                amount: "3.06",
                type: ApplePayJS.ApplePayLineItemType.pending
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

        const paymentUpdate = {
            newTotal: total
        };

        session.completePaymentMethodSelection(paymentUpdate);

        session.completeShippingContactSelection(
            ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS,
            shippingMethods,
            total,
            lineItems);

        const contactUpdate = {
            newTotal: total
        };

        session.completeShippingContactSelection(contactUpdate);

        session.completeShippingMethodSelection(
            ApplePaySession.STATUS_SUCCESS,
            total,
            lineItems);

        const shippingUpdate = {
            newTotal: total
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
            merchantCapabilities: [
                "supports3DS",
                "supportsCredit",
                ApplePayJS.ApplePayMerchantCapability.supportsDebit
            ],
            supportedNetworks: [
                "amex",
                "discover",
                "jcb",
                "masterCard",
                "privateLabel",
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
            phoneticFamilyName: "Patel",
            phoneticGivenName: "Ravi",
            addressLines: [
                "1 Infinite Loop"
            ],
            locality: "Cupertino",
            subLocality: "",
            administrativeArea: "CA",
            subAdministrativeArea: "",
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
            ApplePayJS.ApplePayContactField.name
        ];

        paymentRequest.requiredShippingContactFields = [
            "postalAddress",
            "name",
            "phone",
            ApplePayJS.ApplePayContactField.name
        ];

        paymentRequest.shippingContact = {
            emailAddress: "ravipatel@example.com",
            familyName: "Patel",
            givenName: "Ravi",
            phoneNumber: "(408) 555-5555",
            phoneticFamilyName: "Patel",
            phoneticGivenName: "Ravi",
            addressLines: [
                "1 Infinite Loop"
            ],
            locality: "Cupertino",
            subLocality: "",
            administrativeArea: "CA",
            subAdministrativeArea: "",
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
        paymentRequest.shippingType = ApplePayJS.ApplePayShippingType.delivery;
    });
});
