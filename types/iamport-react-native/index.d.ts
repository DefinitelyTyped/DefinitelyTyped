import * as React from "react";

export type IMP_CARRIERS = "SKT" | "KTF" | "LGT" | "MVNO";
export type IMP_PG =
    | "html5_inicis"
    | "inicis"
    | "uplus"
    | "kcp"
    | "kcp_billing"
    | "nice"
    | "jtnet"
    | "kakao"
    | "kakaopay"
    | "danal"
    | "danal_tpay"
    | "kicc"
    | "settle"
    | "mobilians"
    | "payco"
    | "eximbay"
    | "paypal"
    | "naverco"
    | "naverpay"
    | "smilepay"
    | "chai"
    | "payple"
    | "alipay";

export type IMP_PAY_METHOD =
    | "card"
    | "trans"
    | "vbank"
    | "phone"
    | "samsung"
    | "kpay"
    | "cultureland"
    | "smartculture"
    | "happymoney"
    | "booknlife"
    | "kakaopay"
    | "lpay"
    | "payco"
    | "ssgpay"
    | "tosspay";

export type IMP_CURRENCY = "KRW" | "USD" | "EUR" | "JPY";

// Property Note : https://docs.iamport.kr/tech/imp?lang=en#callback
export interface CallbackRsp {
    success?: boolean | undefined;
    error_code?: string | undefined;
    error_msg?: string | undefined;
    imp_uid?: string | undefined;
    merchant_uid?: string | undefined;
    pay_method?: string | undefined;
    paid_amount?: string | undefined;
    status?: string | undefined;
    name?: string | undefined;
    pg_provider?: string | undefined;
    pg_tid?: string | undefined;
    buyer_name?: string | undefined;
    buyer_email?: string | undefined;
    buyer_tel?: string | undefined;
    buyer_addr?: string | undefined;
    buyer_postcode?: string | undefined;
    custom_data?: object | undefined;
    paid_at?: number | undefined;
    receipt_url?: string | undefined;
    apply_num?: string | undefined;
    vbank_num?: string | undefined;
    vbank_name?: string | undefined;
    vbank_holder?: string | undefined;
    vbank_date?: number | undefined;
    imp_success?: string | undefined;
}

export interface CertificationData {
    merchant_uid?: string | undefined;
    company?: string | undefined;
    carrier?: IMP_CARRIERS | undefined;
    name?: string | undefined;
    phone?: string | undefined;
    min_age?: string | undefined;
    app_scheme?: string | undefined;
}

export interface PaymentData {
    pg?: IMP_PG | undefined;
    pay_method?: IMP_PAY_METHOD | undefined;
    currency?: IMP_CURRENCY | undefined;
    notice_url?: string | string[] | undefined;
    display?: { card_quota?: number | undefined } | undefined;
    merchant_uid: string;
    amount: number;
    buyer_tel: string;
    app_scheme: string;
    escrow?: boolean | undefined;
    name?: string | undefined;
    tax_free?: number | undefined;
    buyer_name?: string | undefined;
    buyer_email?: string | undefined;
    buyer_addr?: string | undefined;
    buyer_postcode?: string | undefined;
    custom_data?: object | undefined;
    vbank_due?: string | undefined;
    popup?: boolean | undefined;
    digital?: boolean | undefined;
    m_redirect_url?: string | undefined;
    biz_num?: string | undefined;
}

export interface CertificationProps {
    userCode: string;
    tierCode?: string | undefined;
    data: CertificationData;
    callback: (rsp: CallbackRsp) => void;
    loading?: object | undefined;
}

// Property Note : https://docs.iamport.kr/tech/imp?lang=en#param
export interface PaymentProps {
    userCode: string;
    tierCode?: string | undefined;
    data: PaymentData;
    callback: (rsp: CallbackRsp) => void;
    loading?: object | undefined;
    handleInicisTrans?: ((event: any) => void) | undefined;
    open3rdPartyApp?: ((iamportUrl: any) => void) | undefined;
}

declare const IMP: {
    Certification: React.FC<CertificationProps>;
    Payment: React.FC<PaymentProps>;
};

export default IMP;
