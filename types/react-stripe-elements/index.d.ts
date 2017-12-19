// Type definitions for react-stripe-elements 1.0
// Project: https://github.com/stripe/react-stripe-elements#readme
// Definitions by: dan-j <https://github.com/dan-j>
//                 Santiago Doldan <https://github.com/santiagodoldan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="stripe-v3" />
import * as React from 'react';

export namespace ReactStripeElements {
	import ElementChangeResponse = stripe.elements.ElementChangeResponse;
	import ElementsOptions = stripe.elements.ElementsOptions;
	import TokenOptions = stripe.TokenOptions;
	import TokenResponse = stripe.TokenResponse;

	/**
	 * There's a bug in @types/stripe which defines the property as
	 * `declined_code` (with a 'd') but it's in fact `decline_code`
	 */
	type PatchedTokenResponse = TokenResponse & {
		error?: { decline_code?: string };
	};

	interface StripeProviderProps {
		apiKey: string;
	}

	interface StripeProps {
		// I'm not sure what the definition for this is
		createSource(): void;

		createToken(options?: TokenOptions): Promise<PatchedTokenResponse>;
	}

	interface InjectOptions {
		withRef?: boolean;
	}

	interface InjectedStripeProps {
		stripe?: StripeProps;
	}

	interface ElementProps extends ElementsOptions {
		className?: string;

		elementRef?(): void;

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
