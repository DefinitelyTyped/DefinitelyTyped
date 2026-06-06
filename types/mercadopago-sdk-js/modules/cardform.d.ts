/// <reference types="../shared.d.ts" />

declare namespace cardform {
    interface CardFormData {
        amount: string;
        token: string;
        installments: string;
        paymentMethodId: string;
        issuerId: string;
        identificationType: string;
        identificationNumber: string;
        processingMode: string;
        merchantAccountId?: string;
        cardholderEmail?: string;
    }

    interface UpdatableProperties {
        style?: shared.FieldStyle;
        placeholder?: string;
        settings?: shared.SecurityCode;
    }

    interface EventListener {
        (evt: Event): void;
    }

    interface CardFormListener {
        event: string[];
        fn: EventListener;
    }

    type CardFormListeners = CardFormListener[];

    interface CardFormProperties {
        id: string;
        placeholder?: string;
        element?: HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLFormElement;
        listeners?: CardFormListeners;
        hidden?: boolean;
        style?: { [key: string]: string };
        customFonts?: shared.CustomFonts[];
        mode?: string;
    }

    type AVAILABLE_PROCESSING_MODE = "aggregator" | "gateway";

    interface Error {
        message: string;
        code: string;
    }

    interface IdentificationTypesResponseCardForm {
        id: string;
        name: string;
    }

    interface InstallmentsResponseCardForm {
        merchant_account_id?: string;
        payer_costs: shared.PayerCost[];
    }

    interface PaymentMethodsResponseCardForm {
        issuer: shared.Issuer;
        id: string;
        payment_type_id: string;
        thumbnail: string;
        marketplace: string;
        deferred_capture: string;
        agreements: unknown[];
        labels: string[];
        name: string;
        site_id: string;
        processing_mode: string;
        additional_info_needed: string[];
        status: string;
        settings: shared.Setting[];
        merchant_account_id: string;
    }

    interface CardTokenResponseCardForm {
        token: string;
    }

    interface IssuersResponseCardForm {
        id: string;
        name: string;
        thumbnail: string;
        processing_mode: string;
        merchant_account_id: string;
    }

    type FechingCallback = () => unknown;
    type OnFormMounted = (error?: Error) => void;
    type OnFormUnmounted = (error?: Error) => void;
    type OnIdentificationTypesReceived = (error?: Error, response?: IdentificationTypesResponseCardForm[]) => void;
    type OnInstallmentsReceived = (error?: Error, response?: InstallmentsResponseCardForm) => void;
    type OnPaymentMethodsReceived = (error?: Error, response?: PaymentMethodsResponseCardForm[]) => void;
    type OnCardTokenReceived = (error?: Error, response?: CardTokenResponseCardForm) => void;
    type OnIssuersReceived = (error?: Error, response?: IssuersResponseCardForm[]) => void;
    type OnSubmit = (event: Event) => void;
    type OnFetching = (name: string) => FechingCallback;
    type OnReady = () => void;
    type OnValidityChange = (error?: Error[], field?: string) => void;
    type OnError = (error?: Error[], event?: string) => void;
    type OnBinChange = (bin: string) => void;

    interface Callbacks {
        onFormMounted?: OnFormMounted;
        onFormUnmounted?: OnFormUnmounted;
        onIdentificationTypesReceived?: OnIdentificationTypesReceived;
        onPaymentMethodsReceived?: OnPaymentMethodsReceived;
        onIssuersReceived?: OnIssuersReceived;
        onInstallmentsReceived?: OnInstallmentsReceived;
        onCardTokenReceived?: OnCardTokenReceived;
        onSubmit?: OnSubmit;
        onFetching?: OnFetching;
        onReady?: OnReady;
        onValidityChange?: OnValidityChange;
        onError?: OnError;
        onBinChange?: OnBinChange;
    }

    interface CardFormMap {
        id: string;
        cardholderName: CardFormProperties;
        cardholderEmail: CardFormProperties;
        cardNumber: CardFormProperties;
        securityCode: CardFormProperties;
        installments: CardFormProperties;
        cardExpirationMonth?: CardFormProperties;
        cardExpirationYear?: CardFormProperties;
        cardExpirationDate?: CardFormProperties;
        identificationType: CardFormProperties;
        identificationNumber: CardFormProperties;
        issuer: CardFormProperties;
        expirationDate?: CardFormProperties;
        expirationMonth?: CardFormProperties;
    }

    interface CardFormOptions {
        form: CardFormMap;
        callbacks: Callbacks;
        amount: number | string;
        processingMode: AVAILABLE_PROCESSING_MODE;
        autoMount?: boolean;
        iframe?: boolean;
    }

    interface CardForm {
        mount(): void;
        unmount(): void;
        submit(): void;
        update(field: string, properties: UpdatableProperties): void;
        createCardToken(): Promise<CardTokenResponseCardForm | undefined>;
        getCardFormData(): CardFormData;
    }
}
