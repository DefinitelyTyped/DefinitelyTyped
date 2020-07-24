// Type definitions for paypal-checkout-components 4.0
// Project: https://github.com/paypal/paypal-checkout-components/
// Definitions by: Jason Buckner <https://github.com/jbuckner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import {
  ButtonRenderer
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
  CancellationData,
  CreditFinancingOptions,
  FlowType,
  Intent,
  LineItem,
  LineItemKind,
  ShippingOption,
  ShippingOptionType,
  TokenizePayload,
  TokenizePayloadDetails,
} from './modules/callback-data';

export const Button: ButtonRenderer;

export {
  Address,
  AuthorizationData,
  ButtonRenderer,
  ButtonColorOption,
  ButtonLabelOption,
  ButtonShapeOption,
  ButtonSizeOption,
  ButtonStyle,
  CancellationData,
  CreditFinancingOptions,
  Environment,
  FlowType,
  Intent,
  LineItem,
  LineItemKind,
  ShippingOption,
  ShippingOptionType,
  TokenizePayload,
  TokenizePayloadDetails,
};

export as namespace paypal;
