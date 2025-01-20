export = Barion;

interface BankAccount {
    AccountNumber: string;
    Address?: string;
    BankAddress?: string;
    BankName?: string;
    Country: string;
    Format: "Unknown" | "Giro" | "IBAN" | "Czech" | "Other";
    SwiftCode?: string;
}

interface BankTransferRequest {
    Amount: number;
    BankAccount: BankAccount;
    Comment?: string;
    Currency: "CZK" | "EUR" | "HUF" | "USD";
    Password: string;
    RecipientName: string;
    UserName: string;
}

interface BillingAddress {
    City?: string;
    Country?: string;
    Region?: string;
    Street?: string;
    Street2?: string;
    Street3?: string;
    Zip?: string;
}

interface CancelAuthorizationRequest {
    POSKey: string;
    PaymentId: string;
}

interface CapturePaymentRequest {
    POSKey: string;
    PaymentId: string;
    Transactions: TransactionToFinish[];
}

interface CompletePaymentRequest {
    POSKey: string;
    PaymentId: string;
}

interface EmailTransferRequest {
    Amount: Money;
    Comment?: string;
    Password: string;
    SourceAccountId: string;
    TargetEmail: string;
    UserName: string;
}

interface FinishReservationRequest {
    POSKey: string;
    PaymentId: string;
    Transactions: TransactionToFinish[];
}

interface GetAccountsRequest {
    Password: string;
    UserName: string;
}

interface GetPaymentStateRequest {
    POSKey: string;
    PaymentId: string;
}

interface GiftCardPurchase {
    Amount?: number;
    Count?: number;
}

interface InitialOptions {
    Currency?: "CZK" | "EUR" | "HUF" | "USD";
    Environment?: "test" | "prod";
    FundingSources?: Array<"All" | "Balance" | "BankCard" | "GooglePay" | "ApplePay" | "BankTransfer">;
    GuestCheckOut?: boolean;
    Locale?: "cs-CZ" | "de-DE" | "en-US" | "es-ES" | "fr-FR" | "hu-HU" | "sk-SK" | "sl-SI";
    POSKey: string;
    Secure?: boolean;
}

interface Item {
    Description: string;
    ImageUrl?: string;
    ItemTotal: number;
    Name: string;
    Quantity: number;
    SKU?: string;
    Unit: string;
    UnitPrice: number;
}

interface Money {
    Currency: "CZK" | "EUR" | "HUF" | "USD";
    Value: number;
}

interface PayeeTransaction {
    Comment?: string;
    POSTransactionId: string;
    Payee: string;
    Total: number;
}

interface PayerAccountInformation {
    AccountChangeIndicator?:
        | "ChangedDuringThisTransaction"
        | "LessThan30Days"
        | "Between30And60Days"
        | "MoreThan60Days";
    AccountCreated?: Date;
    AccountCreationIndicator?:
        | "NoAccount"
        | "CreatedDuringThisTransaction"
        | "LessThan30Days"
        | "Between30And60Days"
        | "MoreThan60Days";
    AccountId?: string;
    AccountLastChanged?: Date;
    PasswordChangeIndicator?:
        | "NoChange"
        | "ChangedDuringThisTransaction"
        | "LessThan30Days"
        | "Between30And60Days"
        | "MoreThan60Days";
    PasswordLastChanged?: Date;
    PaymentMethodAdded?: Date;
    ProvisionAttempts?: number;
    PurchasesInTheLast6Months?: number;
    ShippingAddressAdded?: Date;
    ShippingAddressUsageIndicator?: "ThisTransaction" | "LessThan30Days" | "Between30And60Days" | "MoreThan60Days";
    SuspiciousActivityIndicator?: "NoSuspiciousActivityObserved" | "SuspiciousActivityObserved";
    TransactionalActivityPerDay?: number;
    TransactionalActivityPerYear?: number;
}

interface PaymentRefundRequest {
    POSKey: string;
    PaymentId: string;
    TransactionsToRefund: TransactionToRefund[];
}

interface PaymentTransaction {
    Comment?: string;
    Items?: Item[];
    POSTransactionId: string;
    Payee: string;
    PayeeTransactions?: PayeeTransaction[];
    Total: number;
}

interface PurchaseInformation {
    AvailabilityIndicator?: "MerchandiseAvailable" | "FutureAvailability";
    DeliveryEmailAddress?: string;
    DeliveryTimeframe?: "ElectronicDelivery" | "SameDayShipping" | "OvernightShipping" | "TwoDayOrMoreShipping";
    GiftCardPurchase?: GiftCardPurchase;
    PreOrderDate?: Date;
    PurchaseDate?: Date;
    PurchaseType?:
        | "GoodsAndServicePurchase"
        | "CheckAcceptance"
        | "AccountFunding"
        | "QuasiCashTransaction"
        | "PrePaidVacationAndLoan";
    ReOrderIndicator?: "FirstTimeOrdered" | "Reordered";
    RecurringExpiry?: Date;
    RecurringFrequency?: number;
    ShippingAddressIndicator?:
        | "ShipToCardholdersBillingAddress"
        | "ShipToAnotherVerifiedAddress"
        | "ShipToDifferentAddress"
        | "ShipToStore"
        | "DigitalGoods"
        | "TravelAndEventTickets"
        | "Other";
}

interface ShippingAddress {
    City?: string;
    Country?: string;
    FullName?: string;
    Region?: string;
    Street?: string;
    Street2?: string;
    Street3?: string;
    Zip?: string;
}

interface StartPaymentRequest {
    BillingAddress?: BillingAddress;
    CallbackUrl: string;
    CardHolderNameHint?: string;
    ChallengePreference?: "NoPreference" | "ChallengeRequired" | "NoChallengeNeeded";
    Currency: "CZK" | "EUR" | "HUF" | "USD";
    DelayedCapturePeriod?: string;
    FundingSources: Array<"All" | "Balance" | "BankCard" | "GooglePay" | "ApplePay" | "BankTransfer">;
    GuestCheckOut: boolean;
    InitiateRecurrence?: boolean;
    Locale: "cs-CZ" | "de-DE" | "en-US" | "es-ES" | "fr-FR" | "hu-HU" | "sk-SK" | "sl-SI";
    OrderNumber?: string;
    POSKey: string;
    PayerAccount?: PayerAccountInformation;
    PayerHint?: string;
    PayerHomeNumber?: string;
    PayerPhoneNumber?: string;
    PayerWorkPhoneNumber?: string;
    PaymentRequestId: string;
    PaymentType: "Immediate" | "Reservation" | "DelayedCapture";
    PaymentWindow?: string;
    PurchaseInformation?: PurchaseInformation;
    RecurrenceId?: string;
    RecurrenceType?: "OneClickPayment" | "MerchantInitiatedPayment" | "RecurringPayment";
    RedirectUrl: string;
    ReservationPeriod?: string;
    ShippingAddress?: ShippingAddress;
    TraceId?: string;
    Transactions: PaymentTransaction[];
}

interface StatementDownloadRequest {
    Currency: "CZK" | "EUR" | "HUF" | "USD";
    Day?: number;
    Month: number;
    Password: string;
    UserName: string;
    Year: number;
}

interface TransactionToFinish {
    Comment?: string;
    Items?: Item[];
    PayeeTransactions?: PayeeTransaction[];
    Total: number;
    TransactionId: string;
}

interface TransactionToRefund {
    AmountToRefund: number;
    Comment?: string;
    POSTransactionId: string;
    TransactionId: string;
}

declare class Barion {
    constructor(options: InitialOptions);

    bankTransfer(options: Partial<BankTransferRequest>, callback: (err: Error, data: any) => void): void;
    bankTransfer(options: Partial<BankTransferRequest>): Promise<any>;

    cancelAuthorizedPayment(
        options: Partial<CancelAuthorizationRequest>,
        callback: (err: Error, data: any) => void,
    ): void;
    cancelAuthorizedPayment(options: Partial<CancelAuthorizationRequest>): Promise<any>;

    captureAuthorizedPayment(options: Partial<CapturePaymentRequest>, callback: (err: Error, data: any) => void): void;
    captureAuthorizedPayment(options: Partial<CapturePaymentRequest>): Promise<any>;

    completePayment(options: Partial<CompletePaymentRequest>, callback: (err: Error, data: any) => void): void;
    completePayment(options: Partial<CompletePaymentRequest>): Promise<any>;

    downloadStatement(options: Partial<StatementDownloadRequest>, callback: (err: Error, data: any) => void): void;
    downloadStatement(options: Partial<StatementDownloadRequest>): Promise<any>;

    emailTransfer(options: Partial<EmailTransferRequest>, callback: (err: Error, data: any) => void): void;
    emailTransfer(options: Partial<EmailTransferRequest>): Promise<any>;

    finishReservation(options: Partial<FinishReservationRequest>, callback: (err: Error, data: any) => void): void;
    finishReservation(options: Partial<FinishReservationRequest>): Promise<any>;

    getAccounts(options: Partial<GetAccountsRequest>, callback: (err: Error, data: any) => void): void;
    getAccounts(options: Partial<GetAccountsRequest>): Promise<any>;

    getPaymentState(options: Partial<GetPaymentStateRequest>, callback: (err: Error, data: any) => void): void;
    getPaymentState(options: Partial<GetPaymentStateRequest>): Promise<any>;

    refundPayment(options: Partial<PaymentRefundRequest>, callback: (err: Error, data: any) => void): void;
    refundPayment(options: Partial<PaymentRefundRequest>): Promise<any>;

    startPayment(options: Partial<StartPaymentRequest>, callback: (err: Error, data: any) => void): void;
    startPayment(options: Partial<StartPaymentRequest>): Promise<any>;
}
