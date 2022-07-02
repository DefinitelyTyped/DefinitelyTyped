// Type definitions for paypal-checkout-components 4.0
// Project: https://github.com/paypal/paypal-checkout-components/
// Definitions by: Jason Buckner <https://github.com/jbuckner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import {
  ButtonRenderer, ButtonsRenderer, FundingOption
} from './modules/button';

import {
  ButtonColorOption,
  ButtonLabelOption,
  ButtonShapeOption,
  ButtonSizeOption,
  ButtonStyle,
  Environment,
} from './modules/configuration';

import {
  Address,
  AuthorizationData,
  AuthorizationResponse,
  CancellationData,
  CreditFinancingOptions,
  FlowType,
  Intent,
  LineItem,
  LineItemKind,
  ShippingOption,
  ShippingOptionType,
  AuthorizationResponseDetails,
} from './modules/callback-data';

export const Button: ButtonRenderer;

export const Buttons: ButtonsRenderer;

export {
  Address,
  AuthorizationData,
  AuthorizationResponse,
  AuthorizationResponse as AuthorizationTokenizePayload, // maintain backwards compatibility
  AuthorizationResponse as TokenizePayload, // maintain backwards compatibility
  AuthorizationResponseDetails,
  AuthorizationResponseDetails as TokenizePayloadDetails, // maintain backwards compatibility
  ButtonRenderer,
  ButtonsRenderer,
  ButtonColorOption,
  ButtonLabelOption,
  ButtonShapeOption,
  ButtonSizeOption,
  ButtonStyle,
  CancellationData,
  CreditFinancingOptions,
  Environment,
  FlowType,
  FundingOption as FUNDING,
  Intent,
  LineItem,
  LineItemKind,
  ShippingOption,
  ShippingOptionType,
};

export as namespace paypal;
