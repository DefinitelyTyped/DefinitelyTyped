import { AxiosResponse } from "axios";

declare class Rave {
    constructor(publicKey: string, privateKey: string, productionFlag: boolean);
    Card: Card;
    Status: Status;
    Account: Account;
    TokenCharge: TokenCharge;
    MobileOptions: MobileOptions;
    Misc: Misc;
    Preauth: Preauth;
    security: security;
    CustomRequest: CustomRequest;
    Transfer: Transfer;
    Subaccount: Subaccount;
    Subscription: Subscription;
    Paymentplan: Paymentplan;
    MobileMoney: MobileMoney;
    VirtualCards: VirtualCards;
    Bvn: Bvn;
    VirtualAccount: VirtualAccount;
    Refund: Refund;
    VerifyTransaction: VerifyTransaction;
    BillsPayment: BillsPayment;
    Settlement: Settlement;
    USSD: USSD;
    Ebills: Ebills;
}

interface BaseResponse {
    status: string;
    message: string;
}

interface Card {
    charge(data: CardChargeRequest): Promise<Promise<AxiosResponse<CardChargeResponse>>>;
    validate(data: CardValidateRequest): Promise<AxiosResponse<CardValidateResponse>>;
}

interface CardChargeRequest {
    token: string;
    currency: string;
    country?: string | undefined;
    amount: string;
    email: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    IP?: string | undefined;
    narration?: string | undefined;
    txRef: string;
    string?: string | undefined;
    device_fingerprint?: string | undefined;
    payment_plan?: string | undefined;
    subaccounts?: [] | undefined;
}

interface CardChargeResponse extends BaseResponse {
    data: {
        txid: number;
        txref: string;
        flwref: string;
        devicefingerprint: string;
        cycle: string;
        amount: number;
        currency: string;
        chargedamount: number;
        appfee: number;
        merchantfee: number;
        merchantbearsfee: number;
        chargecode: string;
        chargemessage: string;
        authmodel: string;
        ip: string;
        narration: string;
        status: string;
        vbvcode: string;
        vbvmessage: string;
        authurl: string;
        acctcode: string;
        acctmessage: string;
        paymenttype: string;
        paymentid: string;
        fraudstatus: string;
        chargetype: string;
        createdday: number;
        createddayname: string;
        createdweek: number;
        createdmonth: number;
        createdmonthname: string;
        createdquarter: number;
        createdyear: string;
        createdyearisleap: boolean;
        createddayispublicholiday: number;
        createdhour: number;
        createdminute: number;
        createdpmam: string;
        created: string;
        customerid: number;
        custphone: string;
        custnetworkprovider: string;
        custname: string;
        custemail: string;
        custemailprovider: string;
        custcreated: string;
        accountid: number;
        acctbusinessname: string;
        acctcontactperson: string;
        acctcountry: string;
        acctbearsfeeattransactiontime: number;
        acctparent: number;
        acctvpcmerchant: string;
        acctalias: string;
        acctisliveapproved: number;
        orderref: string;
        paymentplan: any;
        paymentpage: any;
        raveref: string;
        amountsettledforthistransaction: number;
        card: {
            expirymonth: string;
            expiryyear: string;
            cardBIN: string;
            last4digits: string;
            brand: string;
            card_tokens: Array<{ embedtoken: string; shortcode: string; expiry: string }>;
            life_time_token: string;
        };
    };
}

interface CardValidateRequest {
    transaction_reference: string;
    otp?: string | undefined;
}

interface CardValidateResponse extends BaseResponse {
    data: {
        data: {
            responsecode: string;
            responsemessage: string;
        };
        tx: {
            id: number;
            txRef: string;
            orderRef: string;
            flwRef: string;
            redirectUrl: string;
            device_fingerprint: string;
            settlement_token: any;
            cycle: string;
            amount: number;
            charged_amount: number;
            appfee: number;
            merchantfee: number;
            merchantbearsfee: number;
            chargeResponseCode: string;
            chargeResponseMessage: string;
            authModelUsed: string;
            currency: string;
            IP: string;
            narration: string;
            status: string;
            vbvrespmessage: string;
            authurl: string;
            vbvrespcode: string;
            acctvalrespmsg: any;
            acctvalrespcode: any;
            paymentType: string;
            paymentId: string;
            fraud_status: string;
            charge_type: string;
            is_live: number;
            createdAt: string;
            updatedAt: string;
            deletedAt: any;
            customerId: number;
            AccountId: number;
            customer: {
                id: number;
                phone: any;
                fullName: string;
                customertoken: any;
                email: string;
                createdAt: string;
                updatedAt: string;
                deletedAt: any;
                AccountId: number;
            };
            chargeToken: {
                user_token: string;
                embed_token: string;
            };
        };
    };
}

interface Status {
    requery(data: StatusRequeryRequest): Promise<AxiosResponse<StatusRequeryResponse>>;
    xrequery(data: StatusXqequeryRequest): Promise<AxiosResponse>;
}

interface StatusRequeryRequest {
    flwref?: string | undefined;
    txref?: string | undefined;
}

interface StatusRequeryResponse extends BaseResponse {
    data: {
        txid: number;
        txref: string;
        flwref: string;
        devicefingerprint: string;
        cycle: string;
        amount: number;
        currency: string;
        chargedamount: number;
        appfee: number;
        merchantfee: number;
        merchantbearsfee: number;
        chargecode: string;
        chargemessage: string;
        authmodel: string;
        ip: string;
        narration: string;
        status: string;
        vbvcode: string;
        vbvmessage: string;
        authurl: string;
        acctcode: any;
        acctmessage: any;
        paymenttype: string;
        paymentid: string;
        fraudstatus: string;
        chargetype: string;
        createdday: number;
        createddayname: string;
        createdweek: number;
        createdmonth: number;
        createdmonthname: string;
        createdquarter: number;
        createdyear: number;
        createdyearisleap: boolean;
        createddayispublicholiday: number;
        createdhour: number;
        createdminute: number;
        createdpmam: string;
        created: string;
        customerid: number;
        custphone: any;
        custnetworkprovider: string;
        custname: string;
        custemail: string;
        custemailprovider: string;
        custcreated: string;
        accountid: number;
        acctbusinessname: string;
        acctcontactperson: string;
        acctcountry: string;
        acctbearsfeeattransactiontime: number;
        acctparent: number;
        acctvpcmerchant: number;
        acctalias: string;
        acctisliveapproved: number;
        orderref: string;
        paymentplan: any;
        paymentpage: any;
        raveref: string;
        meta: Array<{
            id: number;
            metaname: string;
            metavalue: string;
            createdAt: string;
            updatedAt: string;
            deletedAt: any;
            getpaidTransactionId: number;
        }>;
    };
}

interface StatusXqequeryRequest {
    flwref?: string | undefined;
    txref?: string | undefined;
    last_attempt?: string | undefined;
    only_successful?: string | undefined;
}

interface Account {
    charge(data: AccountChargeRequest): Promise<AxiosResponse>;
    validate(data: AccountValidateRequest): Promise<AxiosResponse>;
}

interface AccountChargeRequest {
    currency?: string | undefined;
    country?: string | undefined;
    amount: string;
    phonenumber?: string | undefined;
    billingzip?: string | undefined;
    email: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    IP?: string | undefined;
    narration?: string | undefined;
    txRef: string;
    meta?: any;
    pin?: string | undefined;
    bvn?: string | undefined;
    charge_type?: string | undefined;
    device_fingerprint: string;
    accountbank: string;
    accountnumber: string;
    payment_type?: string | undefined;
    is_internet_banking?: any;
    include_integrity_hash?: any;
}

interface AccountValidateRequest {
    otp: string | number;
    transactionreference: string;
}

interface TokenCharge {
    card(data: TokenChargeCardRequest): Promise<AxiosResponse<TokenChargeCardResponse>>;
    account(data: TokenChargeCardRequest): Promise<AxiosResponse<TokenChargeCardResponse>>;
}

interface TokenChargeCardRequest {
    token: string;
    currency: string;
    country?: string | undefined;
    amount: string;
    email: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    IP?: string | undefined;
    narration?: string | undefined;
    txRef: string;
    meta?: string | undefined;
    device_fingerprint?: string | undefined;
    payment_plan?: string | undefined;
    subaccounts?: [] | undefined;
}

interface TokenChargeCardResponse extends BaseResponse {
    data: {
        txid: number;
        txref: string;
        flwref: string;
        devicefingerprint: string;
        cycle: string;
        amount: number;
        currency: string;
        chargedamount: number;
        appfee: number;
        merchantfee: number;
        merchantbearsfee: number;
        chargecode: string;
        chargemessage: string;
        authmodel: string;
        ip: string;
        narration: string;
        status: string;
        vbvcode: string;
        vbvmessage: string;
        authurl: string;
        acctcode: any;
        acctmessage: any;
        paymenttype: string;
        paymentid: string;
        fraudstatus: string;
        chargetype: string;
        createdday: number;
        createddayname: string;
        createdweek: number;
        createdmonth: number;
        createdmonthname: string;
        createdquarter: number;
        createdyear: number;
        createdyearisleap: boolean;
        createddayispublicholiday: number;
        createdhour: number;
        createdminute: number;
        createdpmam: string;
        created: string;
        customerid: number;
        custphone: string;
        custnetworkprovider: string;
        custname: string;
        custemail: string;
        custemailprovider: string;
        custcreated: string;
        accountid: number;
        acctbusinessname: string;
        acctcontactperson: string;
        acctcountry: string;
        acctbearsfeeattransactiontime: number;
        acctparent: number;
        acctvpcmerchant: string;
        acctalias: string;
        acctisliveapproved: number;
        orderref: string;
        paymentplan: any;
        paymentpage: any;
        raveref: string;
        amountsettledforthistransaction: number;
        card: {
            expirymonth: string;
            expiryyear: string;
            cardBIN: string;
            last4digits: string;
            brand: string;
            card_tokens: Array<{
                embedtoken: string;
                shortcode: string;
                expiry: string;
            }>;
            life_time_token: string;
        };
    };
}

interface MobileOptions {
    chargeUssd(data: MobileOptionsChargeUssdRequest): Promise<AxiosResponse<MobileOptionsChargeUssdResponse>>;
}

interface MobileOptionsChargeUssdRequest {
    currency: string;
    country: string;
    payment_type?: string | undefined;
    amount: string;
    email: string;
    phonenumber?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    IP?: string | undefined;
    txRef: string;
    orderRef: string;
    is_ussd: string;
    device_fingerprint?: string | undefined;
}

interface MobileOptionsChargeUssdResponse extends BaseResponse {
    data: {
        data: {
            amount: string;
            type: string;
            redirect: boolean;
            note: string;
            transaction_date: string;
            transaction_reference: string;
            flw_reference: string;
            redirect_url: any;
            payment_code: string;
            type_data: string;
            meta_data: any;
        };
        response_code: string;
        response_message: string;
    };
}

interface Misc {
    getFee(data: MiscGetFeeRequest): Promise<AxiosResponse>;
    getBalHist(data: MiscGetBalHistRequest): Promise<AxiosResponse>;
    getBanks(data: MiscGetBanksRequest): Promise<AxiosResponse>;
    disburse(data: MiscDisburseRequest): Promise<AxiosResponse>;
    getBalance(data: MistGetBalanceRequest): Promise<AxiosResponse>;
    exchange_rates(data: MiscExchangeRatesRequest): Promise<AxiosResponse>;
    list_transactions(data: MiscListTransactionsRequest): Promise<AxiosResponse>;
}

interface MiscGetFeeRequest {
    amount: string | number;
    card6?: any;
    ptype?: any;
    currency?: string | undefined;
}

interface MiscGetBalHistRequest {
    currency: string;
    from: string;
    to: string;
    page: string;
}

interface MiscGetBanksRequest {
    __n?: string | undefined;
}

interface MiscDisburseRequest {
    bank_code: string;
    account_number: string;
    currency: string;
    amount: string;
}

interface MistGetBalanceRequest {
    service: string;
    service_method: string;
    service_version: string;
    service_channel: string;
}

interface MiscExchangeRatesRequest {
    service: string;
    service_method: string;
    service_version: string;
    service_channel: string;
    service_channel_group: string;
    service_payload: string;
}

interface MiscListTransactionsRequest {
    seckey?: string | undefined;
    from?: string | undefined;
    to?: string | undefined;
    page?: string | undefined;
}

interface Preauth {
    preauth(data: PreauthPreauthRequest): Promise<AxiosResponse>;
    void(data: PreauthVoidRequest): Promise<AxiosResponse<PreauthVoidRespone>>;
    refund(data: PreauthVoidRequest): Promise<AxiosResponse<PreauthVoidRespone>>;
    captureCard(data: PreauthCaptureCardRequest): Promise<AxiosResponse>;
}

interface PreauthPreauthRequest {
    cardno: string | number;
    currency?: string | undefined;
    suggested_auth?: string | undefined;
    country?: string | undefined;
    settlement_token?: string | undefined;
    cvv: string | number;
    amount: string | number;
    phonenumber?: string | number | undefined;
    billingzip?: string | number | undefined;
    expiryyear: string | number;
    expirymonth: string | number;
    email: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    IP: string;
    narration?: string | undefined;
    txRef: string;
    meta?: any;
    pin?: string | number | undefined;
    bvn?: string | number | undefined;
    charge_type: string;
    device_fingerprint?: string | undefined;
    recurring_stop?: string | undefined;
    include_integrity_hash?: string | undefined;
}

interface PreauthVoidRequest {
    id?: string | undefined;
    ref?: string | undefined;
    amount?: string | undefined;
    action?: string | undefined;
}

interface PreauthVoidRespone extends BaseResponse {
    data: {
        data: {
            responsecode: string;
            redirecturl: any;
            avsresponsemessage: any;
            avsresponsecode: any;
            authorizeId: string;
            responsemessage: string;
            otptransactionidentifier: any;
            transactionreference: string;
            responsehtml: any;
            responsetoken: any;
        };
        status: string;
    };
}

interface PreauthCaptureCardRequest {
    flwRef: string;
    amount?: string | undefined;
}

interface security {
    getEncryptionKey(seckey: string): string;
    encrypt(key: string, text: string): string;
    getIntegrityHash(data: any, pubKey: string, seckey: string): string;
}

interface CustomRequest {
    custom(path: string, data: any): Promise<AxiosResponse>;
}

interface Transfer {
    initiate(data: TransferInitiateRequest): Promise<AxiosResponse<TransferInitiateResponse>>;
    bulk(data: TransferBulkRequest): Promise<AxiosResponse<TransferBulkResponse>>;
    fetch(data: TransferFetchRequest): Promise<AxiosResponse<TransferFetchResponse>>;
    list(data: TransferListRequest): Promise<AxiosResponse<TransferListResponse>>;
    getApplicableFee(data: TransferGetApplicableFeeRequest): Promise<AxiosResponse<TransferGetApplicableFeeResponse>>;
    getBalance(data: TransferGetBalanceRequest): Promise<AxiosResponse<TransferGetBalanceResponse>>;
    retrieveStatusOfBulk(
        data: TransferRetrieveStatusOfBulkRequest,
    ): Promise<AxiosResponse<TransferRetrieveStatusOfBulkResponse>>;
    accountVerification(
        data: TranferAccountVerificationRequest,
    ): Promise<AxiosResponse<TranferAccountVerificationResponse>>;
}

interface TransferInitiateRequest {
    account_bank?: string | undefined;
    account_number?: string | undefined;
    recipient?: string | undefined;
    amount: string;
    narration?: string | undefined;
    currency: string;
    reference?: string | undefined;
    callback_url?: string | undefined;
    beneficiary_name: string;
    destination_branch_code: string;
    debit_currency?: string | undefined;
}

interface TransferInitiateResponse extends BaseResponse {
    data: {
        id: number;
        account_number: string;
        bank_code: string;
        fullname: string;
        date_created: string;
        currency: string;
        amount: number;
        fee: number;
        status: string;
        reference: string;
        narration: string;
        complete_message: string;
        requires_approval: number;
        is_approved: number;
        bank_name: string;
    };
}

interface TransferBulkRequest {
    title: string;
    bulk_data?: [] | undefined;
}

interface TransferBulkResponse extends BaseResponse {
    data: {
        id: number;
        uuid: number;
        date_created: string;
        approver: string;
    };
}

interface TransferFetchRequest {
    id: string;
    reference: string;
}

interface TransferFetchResponse extends BaseResponse {
    data: {
        page_info: {
            total: number;
            current_page: number;
            total_pages: number;
        };
        transfers: [
            {
                id: number;
                account_number: string;
                bank_code: string;
                fullname: string;
                date_created: string;
                currency: string;
                amount: number;
                fee: number;
                status: string;
                narration: string;
                approver: any;
                complete_message: string;
                requires_approval: number;
                is_approved: number;
                bank_name: string;
            },
        ];
    };
}

interface TransferListRequest {
    page?: string | undefined;
    status?: string | undefined;
}

interface TransferListResponse extends BaseResponse {
    data: {
        page_info: {
            total: number;
            current_page: string;
            total_pages: number;
        };
        transfers: [
            {
                id: number;
                account_number: string;
                bank_code: string;
                fullname: string;
                date_created: string;
                currency: string;
                amount: number;
                fee: number;
                status: string;
                narration: string;
                approver: any;
                complete_message: string;
                requires_approval: number;
                is_approved: number;
                bank_name: string;
            },
        ];
    };
}

interface TransferGetApplicableFeeRequest {
    currency: string;
    amount: string;
}

interface TransferGetApplicableFeeResponse extends BaseResponse {
    data: [
        {
            id: number;
            fee_type: string;
            currency: string;
            fee: number;
            createdAt: string;
            updatedAt: string;
            deletedAt: string;
            AccountId: number;
        },
    ];
}

interface TransferGetBalanceRequest {
    currency?: string | undefined;
}

interface TransferGetBalanceResponse extends BaseResponse {
    data: {
        Id: number;
        ShortName: string;
        WalletNumber: string;
        AvailableBalance: number;
        LedgerBalance: number;
    };
}

interface TransferRetrieveStatusOfBulkRequest {
    batch_id: string;
}

interface TransferRetrieveStatusOfBulkResponse extends BaseResponse {
    data: {
        page_info: {
            total: number;
            current_page: number;
            total_pages: number;
        };
        transfers: Array<{
            id: number;
            account_number: string;
            bank_code: string;
            fullname: string;
            date_created: string;
            currency: string;
            amount: number;
            fee: number;
            status: string;
            narration: string;
            approver: any;
            complete_message: string;
            requires_approval: number;
            is_approved: number;
            bank_name: string;
        }>;
    };
}

interface TranferAccountVerificationRequest {
    recipientaccount: string;
    destbankcode: string;
    currency?: string | undefined;
    country?: string | undefined;
}

interface TranferAccountVerificationResponse {
    data: {
        data: {
            responsecode: string;
            accountnumber: string;
            accountname: string;
            responsemessage: string;
            phonenumber: any;
            uniquereference: string;
            internalreference: any;
        };
        status: string;
    };
}

interface Subaccount {
    create(data: SubaccountCreateRequest): Promise<AxiosResponse<SubaccountCreateResponse>>;
    list(data: SubaccountListRequest): Promise<AxiosResponse<SubaccountListResponse>>;
    fetch(data: SubaccountFetchRequest): Promise<AxiosResponse<SubaccountFetchResponse>>;
}

interface SubaccountCreateRequest {
    account_bank: string;
    account_number: string;
    business_name: string;
    business_email?: string | undefined;
    business_contact?: string | undefined;
    business_contact_mobile?: string | undefined;
    business_mobile: string;
    meta?: string | undefined;
    split_type: string;
    split_value: string;
    country: string;
}

interface SubaccountCreateResponse extends BaseResponse {
    data: {
        id: number;
        account_number: string;
        account_bank: string;
        fullname: string;
        date_created: string;
        meta: Array<{
            metaname: string;
            metavalue: string;
        }>;
        subaccount_id: string;
        bank_name: string;
    };
}

interface SubaccountListRequest {
    account_number?: string | undefined;
    account_bank?: string | undefined;
    bank_name?: string | undefined;
}

interface SubaccountListResponse {
    data: {
        page_info: {
            total: number;
            current_page: number;
            total_pages: number;
        };
        subaccounts: Array<{
            id: number;
            account_number: string;
            account_bank: string;
            fullname: string;
            date_created: string;
            meta: Array<{
                metaname: string;
                metavalue: string;
            }>;
            subaccount_id: string;
            bank_name: string;
        }>;
    };
}

interface SubaccountFetchRequest {
    id: string;
}

interface SubaccountFetchResponse {
    data: {
        id: number;
        account_number: string;
        account_bank: string;
        business_name: string;
        fullname: string;
        date_created: string;
        meta: any;
        split_ratio: number;
        split_type: string;
        split_value: number;
        subaccount_id: string;
        bank_name: string;
    };
}

interface Subscription {
    list(data: SubscriptionListRequest): Promise<AxiosResponse>;
    fetch(data: SubscriptionFetchRequest): Promise<AxiosResponse>;
    activate(data: SubscriptionActivateRequest): Promise<AxiosResponse>;
    cancel(data: SubscriptionCancelRequest): Promise<AxiosResponse>;
}

interface SubscriptionListRequest {
    transaction_id: string;
}

interface SubscriptionFetchRequest {
    transaction_id: string;
}

interface SubscriptionActivateRequest {
    id: string;
    fetch_by_tx: string;
}

interface SubscriptionCancelRequest {
    id: string;
    fetch_by_tx: string;
}

interface Paymentplan {
    create(data: PaymentplanCreateRequest): Promise<AxiosResponse<PaymentplanCreateResponse>>;
    list(data: PaymentplanListRequest): Promise<AxiosResponse>;
    fetch(data: PaymentplanFetchRequest): Promise<AxiosResponse<PaymentplanFetchResponse>>;
    cancel(data: PaymentplanCancelRequest): Promise<AxiosResponse<PaymentplanCancelResponse>>;
    edit(data: PaymentplanEditRequest): Promise<AxiosResponse<PaymentplanEditRequest>>;
}

interface PaymentplanCreateRequest {
    amount: string;
    name: string;
    interval: string;
    duration?: string | undefined;
}

interface PaymentplanCreateResponse extends BaseResponse {
    data: {
        id: number;
        name: string;
        amount: number;
        interval: string;
        duration: number;
        status: string;
        plan_token: string;
        date_created: string;
    };
}

interface PaymentplanListRequest {
    [others: string]: any;
}

interface PaymentplanListResponse extends BaseResponse {
    data: {
        page_info: {
            total: number;
            current_page: number;
            total_pages: number;
        };
        paymentplans: [
            {
                id: number;
                name: string;
                amount: number;
                interval: string;
                duration: number;
                status: string;
                plan_token: string;
                date_created: string;
            },
        ];
    };
}

interface PaymentplanFetchRequest {
    id?: string | undefined;
    q?: string | undefined;
}

interface PaymentplanFetchResponse {
    [others: string]: any;
}

interface PaymentplanCancelRequest {
    id: string;
}

interface PaymentplanCancelResponse {
    [others: string]: any;
}

interface PaymentplanEditRequest {
    id: string;
    name?: string | undefined;
    status?: string | undefined;
}

interface PaymentplanEditResponse {
    [others: string]: any;
}

interface MobileMoney {
    mpesa(data: MobileMoneyMpesaRequest): Promise<AxiosResponse<MobileMoneyMpesaResponse>>;
    ghana(data: MobileMoneyGhanaRequest): Promise<AxiosResponse<MobileMoneyGhanaResponse>>;
    zambia(data: MobileMoneyZambiaRequest): Promise<AxiosResponse<MobileMoneyZambiaResponse>>;
    rwanda(data: MobileMoneyRwandaRequest): Promise<AxiosResponse<MobileMoneyRwandaResponse>>;
    francophone(data: MobileMoneyFrancophoneRequest): Promise<AxiosResponse<MobileMoneyFrancophoneResponse>>;
    uganda(data: MobileMoneyUgandaRequest): Promise<AxiosResponse<MobileMoneyUgandaResponse>>;
}

interface MobileMoneyMpesaRequest {
    currency: string;
    country: string;
    amount: string;
    phonenumber: string;
    email: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    IP?: string | undefined;
    narration?: string | undefined;
    txRef: string;
    meta?: string | undefined;
    payment_type: string;
    is_mpesa: string;
    is_mpesa_lipa: string;
}

interface MobileMoneyMpesaResponse extends BaseResponse {
    data: {
        cycle: string;
        merchantbearsfee: number;
        status: string;
        vbvrespmessage: string;
        authurl: string;
        vbvrespcode: string;
        paymentId: string;
        charge_type: string;
        is_live: number;
        id: number;
        txRef: string;
        redirectUrl: string;
        amount: string;
        charged_amount: string;
        authModelUsed: string;
        flwRef: string;
        orderRef: string;
        currency: string;
        device_fingerprint: string;
        customerId: number;
        paymentType: string;
        narration: string;
        IP: string;
        fraud_status: string;
        AccountId: number;
        merchantfee: number;
        updatedAt: string;
        createdAt: string;
        business_number: string;
    };
}

interface MobileMoneyGhanaRequest {
    currency: string;
    country: string;
    payment_type: string;
    amount: string;
    network: string;
    email: string;
    phonenumber: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    subaccounts?: string | undefined;
    IP?: string | undefined;
    txRef: string;
    orderRef: string;
    voucher: string;
    is_mobile_money_gh: string;
    device_fingerprint: string;
}

interface MobileMoneyGhanaResponse extends BaseResponse {
    data: {
        id: number;
        txRef: number;
        orderRef: any;
        flwRef: number;
        redirectUrl: number;
        device_fingerprint: number;
        settlement_token: any;
        cycle: number;
        amount: number;
        charged_amount: number;
        appfee: number;
        merchantfee: number;
        merchantbearsfee: number;
        chargeResponseCode: number;
        raveRef: any;
        chargeResponseMessage: number;
        authModelUsed: number;
        currency: number;
        IP: number;
        narration: number;
        status: number;
        vbvrespmessage: number;
        authurl: number;
        vbvrespcode: number;
        acctvalrespmsg: any;
        acctvalrespcode: any;
        paymentType: number;
        paymentPlan: any;
        paymentPage: any;
        paymentId: number;
        fraud_status: number;
        charge_type: number;
        is_live: number;
        createdAt: number;
        updatedAt: number;
        deletedAt: any;
        customerId: number;
        AccountId: number;
        customer: {
            id: number;
            phone: number;
            fullName: number;
            customertoken: any;
            email: number;
            createdAt: number;
            updatedAt: number;
            deletedAt: any;
            AccountId: number;
        };
        validateInstructions: number;
    };
}

interface MobileMoneyZambiaRequest {
    currency: string;
    country: string;
    payment_type: string;
    amount: string;
    network: string;
    email: string;
    phonenumber: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    subaccounts?: string | undefined;
    IP?: string | undefined;
    txRef: string;
    orderRef: string;
    voucher: string;
    is_mobile_money_ug: string;
    device_fingerprint: string;
}

interface MobileMoneyZambiaResponse extends BaseResponse {
    data: {
        id: number;
        txRef: string;
        orderRef: any;
        flwRef: string;
        redirectUrl: string;
        device_fingerprint: string;
        settlement_token: any;
        cycle: string;
        amount: number;
        charged_amount: number;
        appfee: number;
        merchantfee: number;
        merchantbearsfee: number;
        chargeResponseCode: string;
        raveRef: any;
        chargeResponseMessage: string;
        authModelUsed: string;
        currency: string;
        IP: string;
        narration: string;
        status: string;
        vbvrespmessage: string;
        authurl: string;
        vbvrespcode: string;
        acctvalrespmsg: any;
        acctvalrespcode: any;
        paymentType: string;
        paymentPlan: any;
        paymentPage: any;
        paymentId: string;
        fraud_status: string;
        charge_type: string;
        is_live: number;
        createdAt: string;
        updatedAt: string;
        deletedAt: any;
        customerId: number;
        AccountId: number;
        customer: {
            id: number;
            phone: string;
            fullName: string;
            customertoken: any;
            email: string;
            createdAt: string;
            updatedAt: string;
            deletedAt: any;
            AccountId: number;
        };
        validateInstructions: string;
    };
}

interface MobileMoneyRwandaRequest {
    currency: string;
    country: string;
    payment_type: string;
    amount: string;
    network: string;
    email: string;
    phonenumber: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    subaccounts?: string | undefined;
    IP?: string | undefined;
    txRef: string;
    orderRef: string;
    voucher: string;
    is_mobile_money_gh: string;
    device_fingerprint: string;
}

interface MobileMoneyRwandaResponse extends BaseResponse {
    data: {
        id: number;
        txRef: string;
        orderRef: any;
        flwRef: string;
        redirectUrl: string;
        device_fingerprint: string;
        settlement_token: any;
        cycle: string;
        amount: number;
        charged_amount: number;
        appfee: number;
        merchantfee: number;
        merchantbearsfee: number;
        chargeResponseCode: string;
        raveRef: any;
        chargeResponseMessage: string;
        authModelUsed: string;
        currency: string;
        IP: string;
        narration: string;
        status: string;
        vbvrespmessage: string;
        authurl: string;
        vbvrespcode: string;
        acctvalrespmsg: any;
        acctvalrespcode: any;
        paymentType: string;
        paymentPlan: any;
        paymentPage: any;
        paymentId: string;
        fraud_status: string;
        charge_type: string;
        is_live: number;
        createdAt: string;
        updatedAt: string;
        deletedAt: any;
        customerId: number;
        AccountId: number;
        customer: {
            id: number;
            phone: string;
            fullName: string;
            customertoken: any;
            email: string;
            createdAt: string;
            updatedAt: string;
            deletedAt: any;
            AccountId: number;
        };
        validateInstructions: string;
    };
}

interface MobileMoneyFrancophoneRequest {
    currency: string;
    country: string;
    payment_type: string;
    amount: string;
    network: string;
    email: string;
    phonenumber: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    subaccounts?: string | undefined;
    IP?: string | undefined;
    txRef: string;
    orderRef: string;
    voucher: string;
    is_mobile_money_franco: string;
    device_fingerprint: string;
}

interface MobileMoneyFrancophoneResponse extends BaseResponse {
    data: {
        data: {
            amount: string;
            type: string;
            redirect: true;
            note: any;
            transaction_date: string;
            transaction_reference: string;
            flw_reference: string;
            redirect_url: string;
            payment_code: any;
            type_data: string;
        };
        response_code: string;
        response_message: string;
    };
}

interface MobileMoneyUgandaRequest {
    currency: string;
    country: string;
    payment_type: string;
    amount: string;
    network: string;
    email: string;
    phonenumber: string;
    firstname?: string | undefined;
    lastname?: string | undefined;
    subaccounts?: string | undefined;
    IP?: string | undefined;
    txRef: string;
    orderRef: string;
    voucher: string;
    is_mobile_money_ug: string;
    device_fingerprint: string;
}

interface MobileMoneyUgandaResponse {
    data: {
        id: number;
        txRef: string;
        orderRef: any;
        flwRef: string;
        redirectUrl: string;
        device_fingerprint: string;
        settlement_token: any;
        cycle: string;
        amount: number;
        charged_amount: number;
        appfee: number;
        merchantfee: number;
        merchantbearsfee: number;
        chargeResponseCode: string;
        raveRef: any;
        chargeResponseMessage: string;
        authModelUsed: string;
        currency: string;
        IP: string;
        narration: string;
        status: string;
        vbvrespmessage: string;
        authurl: string;
        vbvrespcode: string;
        acctvalrespmsg: any;
        acctvalrespcode: any;
        paymentType: string;
        paymentPlan: any;
        paymentPage: any;
        paymentId: string;
        fraud_status: string;
        charge_type: string;
        is_live: number;
        createdAt: string;
        updatedAt: string;
        deletedAt: any;
        customerId: number;
        AccountId: number;
        customer: {
            id: number;
            phone: string;
            fullName: string;
            customertoken: any;
            email: string;
            createdAt: string;
            updatedAt: string;
            deletedAt: any;
            AccountId: number;
        };
        validateInstructions: string;
    };
}

interface VirtualCards {
    create(data: VirtualCardsCreateRequest): Promise<AxiosResponse<VirtualCardsCreateResponse>>;
    list(data: VirtualCardsListRequest): Promise<AxiosResponse<VirtualCardsListResponse>>;
    get(data: VirtualCardsGetRequest): Promise<AxiosResponse<VirtualCardsGetResponse>>;
    terminate(data: VirtualCardsTerminateRequest): Promise<AxiosResponse<VirtualCardsTerminateResponse>>;
    fund(data: VirtualCardsFundRequest): Promise<AxiosResponse<VirtualCardsFundResponse>>;
    fetchTransactions(
        data: VirtualCardsFetchTransactionsRequest,
    ): Promise<AxiosResponse<VirtualCardsFetchTransactionsResponse>>;
    withdraw(data: VirtualCardsWithrawRequest): Promise<AxiosResponse<VirtualCardsWithrawResponse>>;
    freeze(data: VirtualCardsFreezeUnfreezeRequest): Promise<AxiosResponse<VirtualCardsFreezeUnfreezeResponse>>;
    unfreeze(data: VirtualCardsFreezeUnfreezeRequest): Promise<AxiosResponse<VirtualCardsFreezeUnfreezeResponse>>;
}

interface VirtualCardsCreateRequest {
    currency: string;
    amount: string;
    billing_name: string;
    billing_address?: string | undefined;
    billing_city?: string | undefined;
    billing_state?: string | undefined;
    billing_postal_code?: string | undefined;
    billing_country?: string | undefined;
    callback_url?: string | undefined;
}

interface VirtualCardsCreateResponse extends BaseResponse {
    data: {
        id: string;
        AccountId: number;
        amount: string;
        currency: string;
        card_hash: string;
        cardpan: string;
        maskedpan: string;
        city: string;
        state: any;
        address_1: string;
        address_2: any;
        zip_code: string;
        cvv: string;
        expiration: string;
        send_to: any;
        bin_check_name: any;
        card_type: string;
        name_on_card: string;
        date_created: string;
        is_active: true;
    };
}

interface VirtualCardsListRequest {
    page?: string | undefined;
}

interface VirtualCardsListResponse extends BaseResponse {
    data: Array<{
        id: string;
        AccountId: number;
        amount: string;
        currency: string;
        card_hash: string;
        cardpan: string;
        maskedpan: string;
        city: string;
        state: string;
        address_1: string;
        address_2: any;
        zip_code: string;
        cvv: string;
        expiration: string;
        send_to: any;
        bin_check_name: any;
        card_type: string;
        name_on_card: string;
        date_created: string;
        is_active: true;
    }>;
}

interface VirtualCardsGetRequest {
    id: string;
}

interface VirtualCardsGetResponse extends BaseResponse {
    data: {
        id: string;
        AccountId: number;
        amount: string;
        currency: string;
        card_hash: string;
        cardpan: string;
        maskedpan: string;
        city: string;
        state: any;
        address_1: string;
        address_2: any;
        zip_code: string;
        cvv: string;
        expiration: string;
        send_to: any;
        bin_check_name: any;
        card_type: string;
        name_on_card: any;
        date_created: string;
        is_active: true;
    };
}

interface VirtualCardsTerminateRequest {
    id: string;
}

interface VirtualCardsTerminateResponse extends BaseResponse {
    data: {
        id: number;
        card_hash: string;
        cardpan: string;
        maskedpan: string;
        city: string;
        address_1: string;
        address_2: string;
        state: string;
        zip_code: string;
        name_on_card: string;
        expiration: string;
        amount: number;
        currency: string;
        cvv: string;
        card_type: string;
        bin_check_name: string;
        send_to: string;
        AccountId: number;
        date_created: string;
        is_active: boolean;
    };
}

interface VirtualCardsFundRequest {
    id: string;
    amount: string;
    debit_currency?: string | undefined;
}

interface VirtualCardsFundResponse extends BaseResponse {
    Reference: string;
}

interface VirtualCardsFetchTransactionsRequest {
    FromDate: string;
    ToDate: string;
    PageIndex: string;
    PageSize: string;
    CardId: string;
}

interface VirtualCardsFetchTransactionsResponse extends BaseResponse {
    Transactions: Array<{
        Id: number;
        TransactionAmount: number;
        Fee: number;
        ProductName: string;
        ProviderResponseCode: any;
        ProviderResponseMessage: any;
        ProviderReference: any;
        UniqueReferenceDetails: string;
        TransactionReference: string;
        Status: number;
        ProductId: number;
        UniqueReference: string;
        PaymentReference: any;
        PaymentType: any;
        PaymentResponseCode: any;
        PaymentResponseMessage: any;
        AmountConfirmed: number;
        CurrencyId: number;
        Narration: string;
        Indicator: string;
        DateCreated: string;
        StatusName: string;
        Description: string;
        Currency: string;
    }>;
    Token: {
        access_token: any;
        refresh_token: any;
        token_type: any;
        expires_in: number;
    };

    Data: any;
}

interface VirtualCardsWithrawRequest {
    card_id: string;
    amount: string;
}

interface VirtualCardsWithrawResponse extends BaseResponse {
    Reference: string;
}

interface VirtualCardsFreezeUnfreezeRequest {
    card_id: string;
    status_action: string;
}

interface VirtualCardsFreezeUnfreezeResponse {
    [others: string]: any;
}

interface Bvn {
    verification(data: BvnVerificationRequest): Promise<AxiosResponse<BvnVerificationResponse>>;
}

interface BvnVerificationRequest {
    bvn: string;
}

interface BvnVerificationResponse extends BaseResponse {
    data: {
        bvn: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        date_of_birth: string;
        phone_number: string;
        registration_date: string;
        enrollment_bank: string;
        enrollment_branch: string;
    };
}

interface VirtualAccount {
    accountNumber(
        data: VirtualAccountAccountNumberRequest,
    ): Promise<AxiosResponse<VirtualAccountAccountNumberResponse>>;
}

interface VirtualAccountAccountNumberRequest {
    email: string;
    is_permanent?: string | undefined;
    frequency?: string | undefined;
    duration?: string | undefined;
    narration?: string | undefined;
    txref?: string | undefined;
}

interface VirtualAccountAccountNumberResponse extends BaseResponse {
    data: {
        response_code: string;
        response_message: string;
        flw_reference: string;
        accountnumber: string;
        accountstatus: string;
        frequency: string;
        bankname: string;
        created_on: string;
        expiry_date: string;
        note: string;
        amount: any;
    };
}

interface Refund {
    refund(data: RefundRefundRequest): Promise<AxiosResponse<RefundRefundResponse>>;
}

interface RefundRefundRequest {
    ref: string;
    amount?: string | undefined;
}

interface RefundRefundResponse extends BaseResponse {
    data: {
        AmountRefunded: number;
        walletId: number;
        createdAt: string;
        AccountId: number;
        id: number;
        FlwRef: string;
        TransactionId: number;
        status: string;
        updatedAt: string;
    };
}

interface VerifyTransaction {
    verify(data: VerifyTransactionVerifyRequest): Promise<AxiosResponse<VerifyTransactionVerifyResponse>>;
}

interface VerifyTransactionVerifyRequest {
    txref: string;
}

interface VerifyTransactionVerifyResponse extends BaseResponse {
    [others: string]: any;
}

interface BillsPayment {
    bills(data: BillsPaymentBillsRequest): Promise<AxiosResponse<BillsPaymentBillsResponse>>;
}

interface BillsPaymentBillsRequest {
    service: string;
    service_method: string;
    service_version: string;
    service_channel: string;
    service_payload?: string | undefined;
}

interface BillsPaymentBillsResponse extends BaseResponse {
    [others: string]: any;
}

interface Settlement {
    list(data: SettlementListRequest): Promise<AxiosResponse<SettlementListResponse>>;
    fetch(data: SettlementFetchRequest): Promise<AxiosResponse<SettlementFetchResponse>>;
}

interface SettlementListRequest {
    from?: string | undefined;
    to?: string | undefined;
    page?: string | undefined;
    subaccountid?: string | undefined;
}

interface SettlementListResponse extends BaseResponse {
    data: {
        page_info: {
            total: number;
            current_page: number;
            total_pages: number;
            page_size: number;
        };
        info: Array<{
            id: number;
            merchant_id: number;
            merchant_name: string;
            merchant_email: string;
            settlement_account: string;
            bankcode: string;
            transaction_date: string;
            due_date: string;
            processed_date: any;
            status: string;
            is_local: boolean;
            currency: string;
            gross_amount: number;
            appfees: number;
            merchantfees: number;
            chargeback: number;
            refund: number;
            net_amount: number;
            transaction_count: number;
            parent_id: number;
            processor_ref: any;
            disburse_ref: any;
            disburse_message: any;
            destination: string;
            fxdata: any;
            flagmessage: any;
            meta: any;
            refund_meta: string;
            chargeback_meta: any;
            is_batch: boolean;
            cron_status: string;
            source_bankcode: any;
            created_at: string;
            updated_at: string;
            Account: {
                compliance_status: string;
                country: string;
                createdAt: string;
            };
        }>;
    };
}

interface SettlementFetchRequest {
    id: string;
    from?: string | undefined;
    to?: string | undefined;
}

interface SettlementFetchResponse extends BaseResponse {
    data: {
        id: number;
        merchant_id: number;
        merchant_name: string;
        merchant_email: any;
        settlement_account: any;
        bankcode: any;
        transaction_date: string;
        due_date: string;
        processed_date: any;
        status: string;
        is_local: number;
        currency: string;
        gross_amount: number;
        appfees: number;
        merchantfees: number;
        chargeback: number;
        refund: number;
        net_amount: number;
        transaction_count: number;
        parent_id: number;
        processor_ref: any;
        disburse_ref: any;
        disburse_message: any;
        destination: string;
        fxdata: any;
        flagmessage: string;
        meta: string;
        refund_meta: any;
        chargeback_meta: any;
        is_batch: number;
        cron_status: string;
        source_bankcode: any;
        created_at: string;
        updated_at: string;
        "Account.parent_account_id": number;
        "Account.country": string;
        "Account.createdAt": string;
        transactions: {
            page_info: {
                total: number;
                current_page: number;
                total_pages: number;
                page_size: number;
            };
            info: Array<{
                customer_email: string;
                flw_ref: string;
                tx_ref: string;
                transaction_id: number;
                txId: number;
                charged_amount: number;
                appfee: number;
                merchantfee: any;
                settlement_amount: number;
                status: string;
                payment_entity: string;
                transaction_date: string;
                currency: string;
                card_locale: string;
                RRN: string;
            }>;
        };
        settlement_cycle: any;
    };
}

interface USSD {
    charge(data: USSDChargeRequest): Promise<AxiosResponse<USSDChargeResponse>>;
}

interface USSDChargeRequest {
    currency: string;
    country: string;
    payment_type?: string | undefined;
    amount: string;
    email: string;
    phonenumber?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    IP?: string | undefined;
    txRef: string;
    orderRef: string;
    is_ussd: string;
    device_fingerprint?: string | undefined;
}

interface USSDChargeResponse {
    data: {
        data: {
            amount: string;
            type: string;
            redirect: boolean;
            note: string;
            transaction_date: string;
            transaction_reference: string;
            flw_reference: string;
            redirect_url: any;
            payment_code: string;
            type_data: string;
            meta_data: any;
        };
        response_code: string;
        response_message: string;
    };
}

interface Ebills {
    create(data: EbillsCreateRequest): Promise<AxiosResponse<EbillsCreateResponse>>;
    update(data: EbillsUpdateRequest): Promise<AxiosResponse<EbillsUpdateResponse>>;
}

interface EbillsCreateRequest {
    narration?: string | undefined;
    numberofunits: string;
    currency: string;
    amount: string;
    phonenumber: string;
    email: string;
    txRef: string;
    IP: string;
    country: string;
    custom_business_name?: string | undefined;
}

interface EbillsCreateResponse extends BaseResponse {
    data: {
        order: string;
        flwRef: string;
        txRef: string;
        chargeResponseMessage: string;
    };
}

interface EbillsUpdateRequest {
    reference: string;
    currency?: string | undefined;
    amount: string;
}

interface EbillsUpdateResponse extends BaseResponse {
    data: {
        updated: boolean;
    };
}

export = Rave;
