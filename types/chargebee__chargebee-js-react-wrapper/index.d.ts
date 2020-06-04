// Type definitions for chargebee-js-wrappers 0.2.1
// Project: https://www.npmjs.com/package/@chargebee/chargebee-js-react-wrapper
// Definitions by: Sagar Jain <https://github.com/sagar7993>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, CSSProperties } from 'react';

export interface TokenizeAdditionalData {
	readonly firstName?: string;
	readonly lastName?: string;
	readonly billingAddr1?: string;
	readonly billingAddr2?: string;
	readonly billingCity?: string;
	readonly billingState?: string;
	readonly billingStateCode?: string;
	readonly billingZip?: string;
	readonly billingCountry?: string;
}
export interface AuthorizeWith3dsAdditionalDataAddress {
	readonly firstName?: string;
	readonly lastName?: string;
	readonly phone?: string;
	readonly addressLine1?: string;
	readonly addressLine2?: string;
	readonly addressLine3?: string;
	readonly city?: string;
	readonly state?: string;
	readonly stateCode?: string;
	readonly countryCode?: string;
	readonly zip?: string;
}
export interface AuthorizeWith3dsAdditionalData {
	readonly plan?: string;
	readonly email?: string;
	readonly phone?: string;
	readonly billingAddress?: AuthorizeWith3dsAdditionalDataAddress;
	readonly customerBillingAddress?: AuthorizeWith3dsAdditionalDataAddress;
	readonly shippingAddress?: AuthorizeWith3dsAdditionalDataAddress;
}
export interface PaymentIntent {
	readonly id: string;
	readonly status: 'inited' | 'in_progress' | 'authorized' | 'consumed' | 'expired';
	/**
	 * @type {string}
	 * @memberof PaymentIntent
	 * The currency code (ISO 4217 format) of the amount used in transaction.
	 */
	readonly currency_code?: string;
	/**
	 * @type {string}
	 * @memberof PaymentIntent
	 * Amount in cents, min=0
	 */
	readonly amount: number;
	readonly gateway_account_id: string;
	readonly expires_at?: number;
	readonly reference_id?: string;
	readonly payment_method_type: 'card' | 'ideal' | 'sofort';
	readonly created_at?: number;
	readonly modified_at?: number;
	readonly customer_id: string;
	readonly gateway: string;
	readonly active_payment_attempt?: {
		readonly id: string;
		readonly status: 'inited' | 'requires_identification' | 'requires_challenge' | 'requires_redirection' | 'authorized' | 'refused';
		readonly payment_method_type: 'card' | 'ideal' | 'sofort';
		readonly id_at_gateway: string;
		readonly created_at?: number;
		readonly modified_at?: number;
		readonly error_code?: string;
		readonly error_text?: string;
	};
}
export interface TokenizedResponse {
	readonly token: string;
}
export interface AuthorizeWith3dsResponse {
	readonly id: string;
}
export interface CardComponentProps {
	readonly className?: string;
	readonly fonts?: string[] | {
		readonly fontFamily?: string;
		readonly src?: string;
		readonly fontStyle?: string | number;
		readonly fontWeight?: string | number;
	}[];
	readonly classes?: {
		readonly focus?: string;
		readonly invalid?: string;
		readonly empty?: string;
		readonly complete?: string;
	};
	readonly icon: boolean;
	/**
	 * @type {string}
	 * @memberof CardComponentProps
	 * Currency code in ISO 4217 format (USD, EUR). By default, base currency code will be used
	 */
	readonly currency?: string;
	/**
	 * @type {string}
	 * @memberof CardComponentProps
	 * Locale code in ISO 639 - 1 format(en, fr).By default, `en` will be used
	 */
	readonly locale?: string;
	readonly style?: {
		readonly base: CSSProperties;
		readonly focus?: CSSProperties;
		readonly invalid?: CSSProperties;
		readonly empty?: CSSProperties;
		readonly complete?: CSSProperties;
	};
	readonly placeholder?: {
		readonly number?: string;
		readonly expiry?: string;
		readonly cvv?: string;
	};
	readonly onReady?: () => void;
	readonly onChange?: () => void;
	readonly onFocus?: () => void;
	readonly onBlur?: () => void;
}
export interface CardComponentFieldProps {
	readonly className?: string;
	readonly style?: {
		readonly base: CSSProperties;
		readonly focus?: CSSProperties;
		readonly invalid?: CSSProperties;
		readonly empty?: CSSProperties;
		readonly complete?: CSSProperties;
	};
	readonly placeholder?: string;
	readonly onReady?: () => void;
	readonly onChange?: () => void;
	readonly onFocus?: () => void;
	readonly onBlur?: () => void;
}
export class CardComponent extends Component<CardComponentProps> {
	readonly tokenize: (additionalData?: TokenizeAdditionalData) => Promise<TokenizedResponse>;
	readonly authorizeWith3ds: (intent: PaymentIntent, additionalData?: AuthorizeWith3dsAdditionalData) => Promise<AuthorizeWith3dsResponse>;
}
export class CardNumber extends Component<CardComponentFieldProps> { }
export class CardExpiry extends Component<CardComponentFieldProps> { }
export class CardCVV extends Component<CardComponentFieldProps> { }
