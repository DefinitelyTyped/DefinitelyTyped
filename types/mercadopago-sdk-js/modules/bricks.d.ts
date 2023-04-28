export interface BrickError {
  type: "non_critical" | "critical";
  cause: string;
  message: string;
}

export interface BrickCallbacks {
  onSubmit: (
    formData: CardFormData | PaymentFormData,
    param2?: AdditionalCardFormData | AdditionalPaymentFormData
  ) => Promise<void>;
  onReady?: () => void;
  onError?: (error: BrickError) => void;
  onBinChange?: (bin: string) => void;
}

export interface PayerAddress {
  zipCode?: string;
  federalUnit?: string;
  city?: string;
  streetName?: string;
  streetNumber?: string;
  neighborhood?: string;
  complement?: string;
}

export interface Payer {
  email?: string;
  identification?: PayerIdentification;
  customerId?: string;
  cardsIds?: string[];
  address?: PayerAddress;
  firstName?: string;
  lastName?: string;
}

export interface CustomizableTexts {
  [key: string]: string | { [key: string]: string };
}

export enum PaymentOption {
  CREDIT_CARD_FORM = "creditCardForm",
  DEBIT_CARD_FORM = "debitCardForm",
  SAVED_CARD_FORM = "savedCardForm",
  TICKET_FORM = "ticketForm",
  BANK_TRANSFER_FORM = "bankTransferForm",
  MERCADO_PAGO_FORM = "walletForm",
  ONBOARDING_CREDITS_FORM = "creditForm",
}

export interface PaymentOptions {
  [PaymentOption.CREDIT_CARD_FORM]?: boolean;
  [PaymentOption.DEBIT_CARD_FORM]?: boolean;
  [PaymentOption.SAVED_CARD_FORM]?: string | boolean;
  [PaymentOption.TICKET_FORM]?: boolean;
  [PaymentOption.BANK_TRANSFER_FORM]?: boolean;
  [PaymentOption.MERCADO_PAGO_FORM]?: boolean;
  [PaymentOption.ONBOARDING_CREDITS_FORM]?: boolean;
}

export interface PaymentOptionsBooleanOnly extends PaymentOptions {
  [PaymentOption.SAVED_CARD_FORM]?: boolean;
}

export enum WalletButtonBackground {
  MERCADO_PAGO_COLOR = "default",
  BLACK = "black",
  BLUE = "blue",
  WHITE = "white",
}

export enum WalletButtonValuePropColor {
  WHITE = "white",
  GREY = "grey",
}

export enum WalletButtonAction {
  PAY = "pay",
  BUY = "buy",
}

export enum WalletButtonValueProp {
  PRACTICALITY = "practicality",
  CONVENIENCE = "convenience",
  SECURITY_DETAILS = "security_details",
  SECURITY_SAFETY = "security_safety",
}

export enum WalletButtonRedirectMode {
  MODAL = "modal",
  SELF = "self",
  BLANK = "blank",
}

export interface BrickVisualCustomization {
  texts?: CustomizableTexts;
  font?: string;
  style?: BricksStyle;
  hideNewCardForm?: boolean;
  hidePaymentButton?: boolean;
  hideFormTitle?: boolean;
  hideValuePropsFrom?: PaymentOptionsBooleanOnly;
  defaultPaymentOption?: PaymentOptions;
  preserveSavedCardsOrder?: boolean;
  hideRedirectionPanel?: boolean;
  showExternalReference?: boolean;
  hideStatusDetails?: boolean;
  hideTransactionDate?: boolean;
  buttonBackground?: WalletButtonBackground;
  borderRadius?: string;
  valuePropColor?: WalletButtonValuePropColor;
  buttonHeight?: string;
  verticalPadding?: string;
  horizontalPadding?: string;
  hideValueProp?: boolean;
}

export type GenericPaymentMethod = string | string[];

export interface PaymentMethods {
  maxInstallments?: number;
  minInstallments?: number;
  creditCard?: GenericPaymentMethod;
  debitCard?: GenericPaymentMethod;
  ticket?: GenericPaymentMethod;
  bankTransfer?: GenericPaymentMethod;
  atm?: GenericPaymentMethod;
  mercadoPago?: GenericPaymentMethod;
}

export interface CheckoutThemes {
  headerColor?: string;
  elementsColor?: string;
}

export interface Checkout {
  theme: CheckoutThemes;
}

export interface WalletButtonTextCustomization {
  action: WalletButtonAction;
  valueProp: WalletButtonValueProp;
}

export interface StatusBrickBackUrls {
  error: string;
  return: string;
}

export interface BrickCustomization {
  visual?: BrickVisualCustomization;
  paymentMethods?: PaymentMethods;
  checkout?: Checkout;
  texts?: WalletButtonTextCustomization;
  backUrls?: StatusBrickBackUrls;
}

export interface BrickInitialization {
  amount?: number;
  payer?: Payer;
  preferenceId?: string;
  paymentId?: number;
  externalReference?: string;
  redirectMode?: WalletButtonRedirectMode;
}

export interface BrickSettings {
  // For a more detailed view of each Brick`s supported settings, please check the documentation at: https://github.com/mercadopago/sdk-js/blob/main/API/bricks/index.md
  callbacks?: BrickCallbacks;
  initialization?: BrickInitialization;
  customization?: BrickCustomization;
}

export interface BricksStyle {
  theme?: "default" | "dark" | "flat" | "bootstrap";
  customVariables?: CustomVariables;
}

export interface CustomVariables {
  textPrimaryColor?: string;
  textSecondaryColor?: string;
  inputBackgroundColor?: string;
  formBackgroundColor?: string;
  baseColor?: string;
  baseColorFirstVariant?: string;
  baseColorSecondVariant?: string;
  errorColor?: string;
  successColor?: string;
  outlinePrimaryColor?: string;
  outlineSecondaryColor?: string;
  buttonTextColor?: string;
  fontSizeExtraSmall?: string;
  fontSizeSmall?: string;
  fontSizeMedium?: string;
  fontSizeLarge?: string;
  fontSizeExtraLarge?: string;
  fontWeightNormal?: string;
  fontWeightSemiBold?: string;
  formInputsTextTransform?: string;
  inputVerticalPadding?: string;
  inputHorizontalPadding?: string;
  inputFocusedBoxShadow?: string;
  inputErrorFocusedBoxShadow?: string;
  inputBorderWidth?: string;
  inputFocusedBorderWidth?: string;
  borderRadiusSmall?: string;
  borderRadiusMedium?: string;
  borderRadiusLarge?: string;
  borderRadiusFull?: string;
  formPadding?: string;
  secondaryColor?: string;
  warningColor?: string;
  fontSizeExtraExtraLarge?: string;
}

export interface PayerIdentification {
  type: string;
  number: string;
}

export interface PayerAddressAPI {
  zip_code: string;
  federal_unit: string;
  city: string;
  street_name: string;
  street_number: string;
  neighborhood: string;
}

export interface PayerAPI {
  email?: string;
  identification?: PayerIdentification;
  address?: PayerAddressAPI;
  first_name?: string;
  last_name?: string;
}

export enum PaymentType {
  CREDIT_CARD = "credit_card",
  DEBIT_CARD = "debit_card",
  ICKET = "ticket",
  BANK_TRANSFER = "bank_transfer",
  WALLET_PURCHASE = "wallet_purchase",
  ONBOARDING_CREDITS = "onboarding_credits",
  ATM = "atm",
  ATM_ONLINE = "atm_online",
  NONE = "",
}

export interface SavedCardPayer {
  type: "customer";
  id: string;
}

export interface CardFormData {
  token: string;
  issuer_id: string | null;
  payment_method_id: string;
  transaction_amount: number;
  payment_method_option_id?: string;
  processing_mode?: string;
  installments: number;
  payer: PayerAPI;
}

export interface SavedCardFormData {
  token: string;
  issuer_id: string | null;
  payment_method_id: string;
  transaction_amount: number;
  payment_method_option_id?: string;
  processing_mode?: string;
  installments: number;
  payer: SavedCardPayer;
}

export interface TicketFormData {
  transaction_amount: number;
  payment_method_id: string;
  payer: PayerAPI;
}

export interface AdditionalSavedCardFormData {
  bin: string;
}

export interface AdditionalCardFormData {
  bin: string;
}

export type AdditionalTicketFormData = Record<string, unknown>;

export type AdditionalPaymentFormData =
  | AdditionalCardFormData
  | AdditionalSavedCardFormData
  | AdditionalTicketFormData;

export interface PaymentFormData {
  paymentType: PaymentType;
  selectedPaymentMethod: PaymentType;
  formData?: CardFormData | SavedCardFormData | TicketFormData | null;
  additionalData?:
    | AdditionalSavedCardFormData
    | AdditionalCardFormData
    | AdditionalTicketFormData
    | null;
}

export interface BrickController {
  unmount: () => void;
  getFormData: () => Promise<CardFormData | PaymentFormData>;
  getAdditionalData: () => Promise<
    AdditionalCardFormData | AdditionalPaymentFormData
  >;
}

export type BrickTypes = 'cardPayment' | 'payment' | 'statusScreen' | 'wallet';

export interface Bricks {
  isInitialized(): boolean;
  create(
    brick: BrickTypes,
    containerId: string,
    settings: BrickSettings
  ): Promise<BrickController>;
}
