declare namespace bricks {
    interface BrickError {
        type: "non_critical" | "critical";
        cause: string;
        message: string;
    }

    interface Submit<BrickType> {
        onSubmit: (
            formData: CardFormData | PaymentFormData,
            additionalData?: AdditionalCardFormData | AdditionalPaymentFormData,
        ) => BrickType extends "wallet" ? Promise<string> : Promise<void>;
    }

    interface BinChange {
        onBinChange?: (bin: string) => void;
    }
    interface BrickCallbacks {
        onReady?: () => void;
        onError?: (error: BrickError) => void;
    }

    interface WalletBrickCallbacks<BrickType> extends BrickCallbacks, Submit<BrickType> {}
    interface CardPaymentBrickCallbacks<BrickType> extends BrickCallbacks, Submit<BrickType>, BinChange {}
    interface PaymentBrickCallbacks<BrickType> extends BrickCallbacks, Submit<BrickType>, BinChange {}

    interface PayerAddress {
        zipCode?: string;
        federalUnit?: string;
        city?: string;
        streetName?: string;
        streetNumber?: string;
        neighborhood?: string;
        complement?: string;
    }

    type EntityType = "individual" | "association";

    interface Payer {
        email?: string;
        identification?: PayerIdentification;
        customerId?: string;
        cardsIds?: string[];
        address?: PayerAddress;
        firstName?: string;
        lastName?: string;
        entityType?: EntityType;
    }

    interface CustomizableTexts {
        [key: string]: string | { [key: string]: string };
    }

    enum PaymentOption {
        CREDIT_CARD_FORM = "creditCardForm",
        DEBIT_CARD_FORM = "debitCardForm",
        SAVED_CARD_FORM = "savedCardForm",
        TICKET_FORM = "ticketForm",
        BANK_TRANSFER_FORM = "bankTransferForm",
        MERCADO_PAGO_FORM = "walletForm",
        ONBOARDING_CREDITS_FORM = "creditForm",
    }

    interface PaymentOptions {
        [PaymentOption.CREDIT_CARD_FORM]?: boolean;
        [PaymentOption.DEBIT_CARD_FORM]?: boolean;
        [PaymentOption.SAVED_CARD_FORM]?: string | boolean;
        [PaymentOption.TICKET_FORM]?: boolean;
        [PaymentOption.BANK_TRANSFER_FORM]?: boolean;
        [PaymentOption.MERCADO_PAGO_FORM]?: boolean;
        [PaymentOption.ONBOARDING_CREDITS_FORM]?: boolean;
    }

    interface PaymentOptionsBooleanOnly extends PaymentOptions {
        [PaymentOption.SAVED_CARD_FORM]?: boolean;
    }

    enum WalletButtonBackground {
        MERCADO_PAGO_COLOR = "default",
        BLACK = "black",
        BLUE = "blue",
        WHITE = "white",
    }

    enum WalletButtonValuePropColor {
        WHITE = "white",
        GREY = "grey",
    }

    enum WalletButtonRedirectMode {
        MODAL = "modal",
        SELF = "self",
        BLANK = "blank",
    }

    interface BrickVisualCustomization {
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

    type GenericPaymentMethod = string | string[];

    interface PaymentMethods {
        maxInstallments?: number;
        minInstallments?: number;
        creditCard?: GenericPaymentMethod;
        debitCard?: GenericPaymentMethod;
        ticket?: GenericPaymentMethod;
        bankTransfer?: GenericPaymentMethod;
        atm?: GenericPaymentMethod;
        mercadoPago?: GenericPaymentMethod;
    }

    interface CheckoutThemes {
        headerColor?: string;
        elementsColor?: string;
    }

    interface Checkout {
        theme: CheckoutThemes;
    }

    interface WalletButtonTextCustomization {
        action: "pay" | "buy";
        valueProp:
            | "practicality"
            | "convenience"
            | "convenience_all"
            | "security_details"
            | "security_safety"
            | "convenience_credits"
            | "smart_option";
    }

    interface StatusBrickBackUrls {
        error: string;
        return: string;
    }

    interface BrickCustomization {
        visual?: BrickVisualCustomization;
        paymentMethods?: PaymentMethods;
        checkout?: Checkout;
        texts?: WalletButtonTextCustomization;
        backUrls?: StatusBrickBackUrls;
    }

    interface StatusBrickAdditionalData {
        externalResourceUrl: string;
        creq: string;
    }

    interface BrickInitialization {
        amount?: number;
        payer?: Payer;
        preferenceId?: string;
        paymentId?: number;
        externalReference?: string;
        redirectMode?: WalletButtonRedirectMode;
        additionalData?: StatusBrickAdditionalData;
    }

    interface BrickSettings<BrickType> {
        // For a more detailed view of each Brick`s supported settings, please check the documentation at: https://github.com/mercadopago/sdk-js/blob/main/API/bricks/index.md
        callbacks: BrickType extends "wallet" ? WalletBrickCallbacks<BrickType>
            : BrickType extends "cardPayment" ? CardPaymentBrickCallbacks<BrickType>
            : BrickType extends "payment" ? PaymentBrickCallbacks<BrickType>
            : BrickCallbacks;
        initialization?: BrickInitialization;
        customization?: BrickCustomization;
    }

    interface BricksStyle {
        theme?: "default" | "dark" | "flat" | "bootstrap";
        customVariables?: CustomVariables;
    }

    interface CustomVariables {
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

    interface PayerIdentification {
        type: string;
        number: string;
    }

    interface PayerAddressAPI {
        zip_code: string;
        federal_unit: string;
        city: string;
        street_name: string;
        street_number: string;
        neighborhood: string;
    }

    interface PayerAPI {
        email?: string;
        identification?: PayerIdentification;
        address?: PayerAddressAPI;
        first_name?: string;
        last_name?: string;
        entity_type?: EntityType;
    }

    enum PaymentType {
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

    interface SavedCardPayer {
        type: "customer";
        id: string;
    }

    interface CardFormData {
        token: string;
        issuer_id: string | null;
        payment_method_id: string;
        transaction_amount: number;
        payment_method_option_id?: string;
        processing_mode?: string;
        installments: number;
        payer: PayerAPI;
    }

    interface SavedCardFormData {
        token: string;
        issuer_id: string | null;
        payment_method_id: string;
        transaction_amount: number;
        payment_method_option_id?: string;
        processing_mode?: string;
        installments: number;
        payer: SavedCardPayer;
    }

    interface Metadata {
        payment_point: string;
        payment_mode: string;
    }

    interface TransactionDetails {
        financial_institution: string;
    }

    interface TicketFormData {
        transaction_amount: number;
        payment_method_id: string;
        payer: PayerAPI;
        metadata?: Metadata;
        transaction_details?: TransactionDetails;
    }

    interface AdditionalSavedCardFormData {
        bin: string;
    }

    interface AdditionalCardFormData {
        bin: string;
    }

    type AdditionalTicketFormData = Record<string, unknown>;

    type AdditionalPaymentFormData = AdditionalCardFormData | AdditionalSavedCardFormData | AdditionalTicketFormData;

    interface UpdateValues {
        amount: number;
    }

    interface PaymentFormData {
        paymentType: PaymentType;
        selectedPaymentMethod: PaymentType;
        formData?: CardFormData | SavedCardFormData | TicketFormData | null;
        additionalData?: AdditionalSavedCardFormData | AdditionalCardFormData | AdditionalTicketFormData | null;
    }

    interface CardPaymentController {
        unmount: () => void;
        getFormData: () => Promise<CardFormData>;
        getAdditionalData: () => Promise<AdditionalCardFormData>;
        update: (updateValues: UpdateValues) => boolean;
    }

    interface PaymentController {
        unmount: () => void;
        getFormData: () => Promise<PaymentFormData>;
        getAdditionalData: () => Promise<AdditionalPaymentFormData>;
        update: (updateValues: UpdateValues) => boolean;
    }

    interface StatusScreenController {
        unmount: () => void;
    }

    interface WalletController {
        unmount: () => void;
    }

    type BrickTypes = "cardPayment" | "payment" | "statusScreen" | "wallet";

    interface Bricks {
        isInitialized(): boolean;
        create<BrickType extends BrickTypes>(
            brick: BrickType,
            containerId: string,
            settings: BrickSettings<BrickType>,
        ): Promise<
            BrickType extends "cardPayment" ? CardPaymentController
                : BrickType extends "payment" ? PaymentController
                : BrickType extends "statusScreen" ? StatusScreenController
                : WalletController
        >;
    }
}
