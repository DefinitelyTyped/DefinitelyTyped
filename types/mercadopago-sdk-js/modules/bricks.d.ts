declare namespace bricks {
    interface BrickError {
        type: "non_critical" | "critical";
        cause: string;
        message: string;
    }

    interface Submit<BrickType> {
        onSubmit: (
            formData: FormData<BrickType>,
            additionalData?: AdditionalData<BrickType>,
        ) => BrickType extends "wallet" ? Promise<string> : Promise<void>;
    }

    interface BinChange {
        onBinChange?: (bin: string) => void;
    }
    interface BrickCallbacks {
        onReady?: () => void;
        onError?: (error: BrickError) => void;
    }

    interface ReviewStepsCallbacks {
        onClickEditShippingData?: () => void;
        onClickEditBillingData?: () => void;
        onRenderNextStep?: (currentStep: string) => void;
        onRenderPreviousStep?: (currentStep: string) => void;
    }

    interface WalletBrickCallbacks<BrickType> extends BrickCallbacks, Submit<BrickType> {}
    interface CardPaymentBrickCallbacks<BrickType> extends BrickCallbacks, Submit<BrickType>, BinChange {}
    interface PaymentBrickCallbacks<BrickType>
        extends BrickCallbacks, Submit<BrickType>, BinChange, ReviewStepsCallbacks
    {}

    interface DefaultAddress {
        streetName: string;
        streetNumber: string;
        zipCode: string;
        complement?: string;
        neighborhood?: string;
        federalUnit?: string;
        city?: string;
    }

    type EntityType = "individual" | "association";

    interface Payer {
        email?: string;
        identification?: PayerIdentification;
        customerId?: string;
        cardsIds?: string[];
        address?: Partial<DefaultAddress>;
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
        enableReviewStep?: boolean;
        reviewCardsOrder?: string[];
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
        items?: Items;
        shipping?: Shipping;
        billing?: Billing;
        discounts?: Discounts;
    }

    interface Items {
        totalItemsAmount: number;
        itemsList: Item[];
    }

    interface Item {
        units: number;
        value: number;
        name: string;
        description?: string;
        imageURL?: string;
    }

    interface Shipping {
        costs?: number;
        shippingMode: string;
        description?: string;
        receiverAddress: DefaultAddress;
    }

    interface Billing {
        firstName?: string;
        lastName?: string;
        taxRegime?: string;
        taxIdentificationNumber: string;
        billingAddress?: DefaultAddress;
        identification?: PayerIdentification;
    }

    interface Discounts {
        totalDiscountsAmount: number;
        discountsList: Discount[];
    }

    interface Discount {
        name: string;
        value: number;
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
        secondaryColorListItem?: string;
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

    type FormData<BrickType> = BrickType extends "cardPayment" ? CardFormData
        : BrickType extends "payment" ? PaymentFormData
        : null;

    type AdditionalData<BrickType> = BrickType extends "cardPayment" ? AdditionalCardFormData
        : BrickType extends "payment" ? AdditionalPaymentFormData
        : null;

    interface CardFormData {
        token: string;
        issuer_id: string | null;
        payment_method_id: string;
        transaction_amount: number;
        payment_method_option_id?: string;
        processing_mode?: string;
        installments: number;
        payer: PayerAPI;
        additional_info?: AdditionalInfo;
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
        additional_info?: AdditionalInfo;
    }

    interface AdditionalInfo {
        items: AdditionalInfoItems[];
        shipments: AdditionalInfoShipments;
    }

    interface AdditionalInfoItems {
        unit_price: number;
        quantity: number;
        title: string;
        description?: string;
        picture_url?: string;
    }

    interface AdditionalInfoShipments {
        receiver_address: {
            zip_code: string;
            state_name?: string;
            city_name?: string;
            street_name: string;
            street_number: string;
            apartment?: string;
        };
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
        additional_info?: AdditionalInfo;
    }

    interface AdditionalSavedCardFormData {
        bin: string;
        lastFourDigits: string;
    }

    interface AdditionalCardFormData extends AdditionalSavedCardFormData {
        cardholderName?: string;
    }

    type AdditionalPaymentFormData = AdditionalCardFormData | AdditionalSavedCardFormData;

    interface CardPaymentUpdatableValues {
        amount: number;
    }

    interface PaymentUpdatableValues {
        amount?: number;
        items?: Items;
        shipping?: Shipping;
        billing?: Billing;
        discounts?: Discounts;
    }

    interface PaymentFormData {
        paymentType: PaymentType;
        selectedPaymentMethod: PaymentType;
        formData?: CardFormData | SavedCardFormData | TicketFormData | null;
        additionalData?: AdditionalSavedCardFormData | AdditionalCardFormData | null;
    }

    interface CardPaymentController {
        unmount: () => void;
        getFormData: () => Promise<CardFormData>;
        getAdditionalData: () => Promise<AdditionalCardFormData>;
        update: (updateValues: CardPaymentUpdatableValues) => boolean;
    }

    interface PaymentController {
        unmount: () => void;
        getFormData: () => Promise<PaymentFormData>;
        getAdditionalData: () => Promise<AdditionalPaymentFormData>;
        update: (updateValues: PaymentUpdatableValues) => boolean;
        nextStep: () => Promise<string>;
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
