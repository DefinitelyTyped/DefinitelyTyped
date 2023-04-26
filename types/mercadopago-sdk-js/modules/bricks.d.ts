type BrickError = {
  type: "non_critical" | "critical";
  cause: string;
  message: string;
};

type BrickCallbacks = {
  onSubmit: (
    formData: CardFormData | PaymentFormData,
    param2?: AdditionalCardFormData | AdditionalPaymentFormData
  ) => Promise<void>;
  onReady?: () => void;
  onError?: (error: BrickError) => void;
  onBinChange?: (bin: string) => void;
};

type PayerAddress = {
  zipCode?: string;
  federalUnit?: string;
  city?: string;
  streetName?: string;
  streetNumber?: string;
  neighborhood?: string;
  complement?: string;
};

type Payer = {
  email?: string;
  identification?: PayerIdentification;
  customerId?: string;
  cardsIds?: string[];
  address?: PayerAddress;
  firstName?: string;
  lastName?: string;
};

type CustomizableTexts = {
  [key: string]: string | { [key: string]: string };
};

declare enum PaymentOption {
  CREDIT_CARD_FORM = "creditCardForm",
  DEBIT_CARD_FORM = "debitCardForm",
  SAVED_CARD_FORM = "savedCardForm",
  TICKET_FORM = "ticketForm",
  BANK_TRANSFER_FORM = "bankTransferForm",
  MERCADO_PAGO_FORM = "walletForm",
  ONBOARDING_CREDITS_FORM = "creditForm",
}

type PaymentOptions = {
  [PaymentOption.CREDIT_CARD_FORM]?: boolean;
  [PaymentOption.DEBIT_CARD_FORM]?: boolean;
  [PaymentOption.SAVED_CARD_FORM]?: string;
  [PaymentOption.TICKET_FORM]?: boolean;
  [PaymentOption.BANK_TRANSFER_FORM]?: boolean;
  [PaymentOption.MERCADO_PAGO_FORM]?: boolean;
  [PaymentOption.ONBOARDING_CREDITS_FORM]?: boolean;
};

type PaymentOptionsBooleanOnly = PaymentOptions & {
  [PaymentOption.SAVED_CARD_FORM]?: boolean;
};

declare enum WalletButtonBackground {
  MERCADO_PAGO_COLOR = "default",
  BLACK = "black",
  BLUE = "blue",
  WHITE = "white",
}

declare enum WalletButtonValuePropColor {
  WHITE = "white",
  GREY = "grey",
}

declare enum WalletButtonAction {
  PAY = "pay",
  BUY = "buy",
}

declare enum WalletButtonValueProp {
  PRACTICALITY = "practicality",
  CONVENIENCE = "convenience",
  SECURITY_DETAILS = "security_details",
  SECURITY_SAFETY = "security_safety",
}

declare enum WalletButtonRedirectMode {
  MODAL = "modal",
  SELF = "self",
  BLANK = "blank",
}

type BrickVisualCustomization = {
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
};

type GenericPaymentMethod = string | string[];

type PaymentMethods = {
  maxInstallments?: number;
  minInstallments?: number;
  creditCard?: GenericPaymentMethod;
  debitCard?: GenericPaymentMethod;
  ticket?: GenericPaymentMethod;
  bankTransfer?: GenericPaymentMethod;
  atm?: GenericPaymentMethod;
  mercadoPago?: GenericPaymentMethod;
};

type CheckoutThemes = {
  headerColor?: string;
  elementsColor?: string;
};

type Checkout = {
  theme: CheckoutThemes;
};

type WalletButtonTextCustomization = {
  action: WalletButtonAction;
  valueProp: WalletButtonValueProp;
};

type StatusBrickBackUrls = {
  error: string;
  return: string;
};

type BrickCustomization = {
  visual?: BrickVisualCustomization;
  paymentMethods?: PaymentMethods;
  checkout?: Checkout;
  texts?: WalletButtonTextCustomization;
  backUrls?: StatusBrickBackUrls;
};

type BrickInitialization = {
  amount?: number;
  payer?: Payer;
  preferenceId?: string;
  paymentId?: number;
  externalReference?: string;
  redirectMode?: WalletButtonRedirectMode;
};

type BrickSettings = {
  //For a more detailed view of each Brick`s supported settings, please check the documentation at: https://github.com/mercadopago/sdk-js/blob/main/API/bricks/index.md
  callbacks?: BrickCallbacks;
  initialization?: BrickInitialization;
  customization?: BrickCustomization;
};

export type BricksStyle = {
  theme?: "default" | "dark" | "flat" | "bootstrap";
  customVariables?: CustomVariables;
};

type CustomVariables = {
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
};

type PayerIdentification = {
  type: string;
  number: string;
};

type PayerAddressAPI = {
  zip_code: string;
  federal_unit: string;
  city: string;
  street_name: string;
  street_number: string;
  neighborhood: string;
};

type PayerAPI = {
  email?: string;
  identification?: PayerIdentification;
  address?: PayerAddressAPI;
  first_name?: string;
  last_name?: string;
};

declare enum PaymentType {
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

type SavedCardPayer = {
  type: "customer";
  id: string;
};

type CardFormData = {
  token: string;
  issuer_id: string | null;
  payment_method_id: string;
  transaction_amount: number;
  payment_method_option_id?: string;
  processing_mode?: string;
  installments: number;
  payer: PayerAPI;
};

type SavedCardFormData = {
  token: string;
  issuer_id: string | null;
  payment_method_id: string;
  transaction_amount: number;
  payment_method_option_id?: string;
  processing_mode?: string;
  installments: number;
  payer: SavedCardPayer;
};

type TicketFormData = {
  transaction_amount: number;
  payment_method_id: string;
  payer: PayerAPI;
};

type AdditionalSavedCardFormData = {
  bin: string;
};

type AdditionalCardFormData = {
  bin: string;
};

type AdditionalTicketFormData = Record<string, unknown>;

type AdditionalPaymentFormData =
  | AdditionalCardFormData
  | AdditionalSavedCardFormData
  | AdditionalTicketFormData;

type PaymentFormData = {
  paymentType: PaymentType;
  selectedPaymentMethod: PaymentType;
  formData?: CardFormData | SavedCardFormData | TicketFormData | null;
  additionalData?:
    | AdditionalSavedCardFormData
    | AdditionalCardFormData
    | AdditionalTicketFormData
    | null;
};

type BrickController = {
  unmount: () => void;
  getFormData: () => Promise<CardFormData | PaymentFormData>;
  getAdditionalData: () => Promise<
    AdditionalCardFormData | AdditionalPaymentFormData
  >;
};

type BrickTypes = 'cardPayment' | 'payment' | 'statusScreen' | 'wallet'

export type Bricks = {
  isInitialized(): boolean;
  create(
    brick: BrickTypes,
    containerId: string,
    settings: BrickSettings
  ): Promise<BrickController>;
}
