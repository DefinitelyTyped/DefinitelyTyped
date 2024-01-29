import { ButtonRenderer, ButtonsRenderer, FundingOption } from "./modules/button";

import {
    ButtonColorOption,
    ButtonLabelOption,
    ButtonShapeOption,
    ButtonSizeOption,
    ButtonStyle,
    Environment,
} from "./modules/configuration";

import {
    Address,
    AuthorizationData,
    AuthorizationResponse,
    AuthorizationResponseDetails,
    CancellationData,
    CreditFinancingOptions,
    FlowType,
    Intent,
    LineItem,
    LineItemKind,
    ShippingOption,
    ShippingOptionType,
} from "./modules/callback-data";

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
    ButtonColorOption,
    ButtonLabelOption,
    ButtonRenderer,
    ButtonShapeOption,
    ButtonSizeOption,
    ButtonsRenderer,
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
