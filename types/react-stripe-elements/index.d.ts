// Type definitions for react-stripe-elements 6.0
// Project: https://github.com/stripe/react-stripe-elements#readme
// Definitions by: dan-j <https://github.com/dan-j>
//                 Santiago Doldan <https://github.com/santiagodoldan>
//                 sonnysangha <https://github.com/sonnysangha>
//                 Andrew Goh Yisheng <https://github.com/9y5>
//                 Thomas Chia <https://github.com/thchia>
//                 Piotr Dabrowski <https://github.com/yhnavein>
//                 Victor Irzak <https://github.com/virzak>
//                 Alex Price <https://github.com/remotealex>
//                 Maciej Dabek <https://github.com/bombek92>
//                 Hiroshi Ioka <https://github.com/hirochachacha>
//                 Austin Turner <https://github.com/paustint>
//                 Benedikt Bauer <https://github.com/mastacheata>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

/// <reference types="stripe-v3" />
import * as React from 'react';

export namespace ReactStripeElements {
    import BankAccountTokenOptions = stripe.BankAccountTokenOptions;
    type ElementChangeResponse = stripe.elements.ElementChangeResponse;
    type ElementsOptions = stripe.elements.ElementsOptions;
    // From https://stripe.com/docs/stripe-js/reference#element-types
    type TokenType = 'card' | 'cardNumber' | 'cardExpiry' | 'cardCvc' | 'paymentRequestButton' | 'iban' | 'idealBank';
    type TokenOptions = stripe.TokenOptions & { type?: TokenType | undefined };
    type TokenResponse = stripe.TokenResponse;
    type SourceResponse = stripe.SourceResponse;
    type SourceOptions = stripe.SourceOptions;
    type HTMLStripeElement = stripe.elements.Element;

    interface StripeProviderOptions {
        stripeAccount?: string | undefined;
    }
    type StripeProviderProps =
        | { children?: React.ReactNode, apiKey: string; stripe?: never | undefined } & StripeProviderOptions
        | { children?: React.ReactNode, apiKey?: never | undefined; stripe: stripe.Stripe | null } & StripeProviderOptions;

    interface StripeOverrideProps {
        /*
         * react-stripe-elements let's you use the same createToken function
         * with either credit card or bank account options
         * which one to choose depends solely on the inferred elements and can't be expressed in TypeScript
         */
        createToken(options?: TokenOptions | BankAccountTokenOptions): Promise<TokenResponse>;
        createSource(sourceData?: SourceOptions): Promise<SourceResponse>;
        createPaymentMethod(
            paymentMethodType: stripe.paymentMethod.paymentMethodType,
            data?: stripe.CreatePaymentMethodOptions,
        ): Promise<stripe.PaymentMethodResponse>;
        createPaymentMethod(
            paymentMethodType: stripe.paymentMethod.paymentMethodType,
            element: HTMLStripeElement,
            data?: stripe.CreatePaymentMethodOptions,
        ): Promise<stripe.PaymentMethodResponse>;
        createPaymentMethod(data: stripe.PaymentMethodData): Promise<stripe.PaymentMethodResponse>;
        handleCardPayment(
            clientSecret: string,
            options?: stripe.HandleCardPaymentWithoutElementsOptions,
        ): Promise<stripe.PaymentIntentResponse>;
        handleCardSetup(
            clientSecret: string,
            data?: stripe.HandleCardSetupOptions,
        ): Promise<stripe.SetupIntentResponse>;
    }

    interface StripeProps extends Omit<stripe.Stripe, keyof StripeOverrideProps>, StripeOverrideProps {
    }

    interface InjectOptions {
        withRef?: boolean | undefined;
    }

    interface InjectedStripeProps {
        stripe: StripeProps | null;
        elements: stripe.elements.Elements | null;
    }

    interface ElementProps extends ElementsOptions {
        id?: string | undefined;

        className?: string | undefined;

        elementRef?(ref: any): void;

        onChange?(event: ElementChangeResponse): void;

        onBlur?(event: ElementChangeResponse): void;

        onFocus?(event: ElementChangeResponse): void;

        onReady?(el: HTMLStripeElement): void;
    }

    interface PaymentRequestButtonElementProps extends ElementProps {
        onClick?(event: any): void;
    }
}

export class StripeProvider extends React.Component<ReactStripeElements.StripeProviderProps> {}

export class Elements extends React.Component<stripe.elements.ElementsCreateOptions & { children?: React.ReactNode }> {}

export function injectStripe<P extends object>(
    WrappedComponent: React.ComponentType<P & ReactStripeElements.InjectedStripeProps>,
    componentOptions?: ReactStripeElements.InjectOptions,
): React.ComponentType<P>;

export class CardElement extends React.Component<ReactStripeElements.ElementProps> {}

export class CardNumberElement extends React.Component<ReactStripeElements.ElementProps> {}

export class CardExpiryElement extends React.Component<ReactStripeElements.ElementProps> {}

export class CardCvcElement extends React.Component<ReactStripeElements.ElementProps> {}

// Deprecated but aliased until react-stripe-elements v5
export class CardCVCElement extends CardCvcElement {}

export class PostalCodeElement extends React.Component<ReactStripeElements.ElementProps> {}

export class PaymentRequestButtonElement extends React.Component<ReactStripeElements.PaymentRequestButtonElementProps> {}

export class IbanElement extends React.Component<ReactStripeElements.ElementProps> {}

export class IdealBankElement extends React.Component<ReactStripeElements.ElementProps> {}
