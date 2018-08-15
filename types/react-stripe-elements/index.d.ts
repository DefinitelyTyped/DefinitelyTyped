// Type definitions for react-stripe-elements 1.1
// Project: https://github.com/stripe/react-stripe-elements#readme
// Definitions by: dan-j <https://github.com/dan-j>
//                 Santiago Doldan <https://github.com/santiagodoldan>
//                 sonnysangha <https://github.com/sonnysangha>
//                 Andrew Goh Yisheng <https://github.com/9y5>
//                 Thomas Chia <https://github.com/thchia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="stripe-v3" />
import * as React from 'react';

export namespace ReactStripeElements {
	import ElementChangeResponse = stripe.elements.ElementChangeResponse;
	import ElementsOptions = stripe.elements.ElementsOptions;
	import TokenOptions = stripe.TokenOptions;
	import TokenResponse = stripe.TokenResponse;
	import SourceResponse = stripe.SourceResponse;
	import SourceOptions = stripe.SourceOptions;

	/**
	 * There's a bug in @types/stripe which defines the property as
	 * `declined_code` (with a 'd') but it's in fact `decline_code`
	 */
	type PatchedTokenResponse = TokenResponse & {
		error?: { decline_code?: string };
	};

	interface StripeProviderOptions {
		stripeAccount?: string;
	}
	type StripeProviderProps = { apiKey: string; stripe?: never; } & StripeProviderOptions | { apiKey?: never; stripe: stripe.Stripe | null; } & StripeProviderOptions;

	interface StripeProps {
		createSource(sourceData?: SourceOptions): Promise<SourceResponse>;
		createToken(options?: TokenOptions): Promise<PatchedTokenResponse>;
		paymentRequest: stripe.Stripe['paymentRequest'];
	}

	interface InjectOptions {
		withRef?: boolean;
	}

	interface InjectedStripeProps {
		stripe?: StripeProps;
	}

	interface ElementProps extends ElementsOptions {
		id?: string;

		className?: string;

		elementRef?(ref: any): void;

		onChange?(event: ElementChangeResponse): void;

		onBlur?(event: ElementChangeResponse): void;

		onFocus?(event: ElementChangeResponse): void;

		onReady?(): void;
	}
}

export class StripeProvider extends React.Component<ReactStripeElements.StripeProviderProps> {
}

export class Elements extends React.Component<stripe.elements.ElementsCreateOptions> {
}

export function injectStripe<P extends object>(
    WrappedComponent: React.ComponentType<P & ReactStripeElements.InjectedStripeProps>,
    componentOptions?: ReactStripeElements.InjectOptions): React.ComponentType<P>;

export class CardElement extends React.Component<ReactStripeElements.ElementProps> {
}

export class CardNumberElement extends React.Component<ReactStripeElements.ElementProps> {
}

export class CardExpiryElement extends React.Component<ReactStripeElements.ElementProps> {
}

export class CardCVCElement extends React.Component<ReactStripeElements.ElementProps> {
}

export class PostalCodeElement extends React.Component<ReactStripeElements.ElementProps> {
}

export class PaymentRequestButtonElement extends React.Component<ReactStripeElements.ElementProps> {
}
