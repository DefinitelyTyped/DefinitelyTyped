// Type definitions for iamport-react-native 1.5
// Project: https://github.com/iamport/iamport-react-native#readme
// Definitions by: seongjoojin <https://github.com/seongjoojin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export type IMP_CARRIERS = 'SKT' | 'KTF' | 'LGT' | 'MVNO';
export type IMP_PG =
    | 'html5_inicis'
    | 'inicis'
    | 'uplus'
    | 'kcp'
    | 'kcp_billing'
    | 'nice'
    | 'jtnet'
    | 'kakao'
    | 'kakaopay'
    | 'danal'
    | 'danal_tpay'
    | 'kicc'
    | 'settle'
    | 'mobilians'
    | 'payco'
    | 'eximbay'
    | 'paypal'
    | 'naverco'
    | 'naverpay'
    | 'smilepay'
    | 'chai'
    | 'payple'
    | 'alipay';

export type IMP_PAY_METHOD =
    | 'card'
    | 'trans'
    | 'vbank'
    | 'phone'
    | 'samsung'
    | 'kpay'
    | 'cultureland'
    | 'smartculture'
    | 'happymoney'
    | 'booknlife'
    | 'kakaopay'
    | 'lpay'
    | 'payco'
    | 'ssgpay'
    | 'tosspay';

export type IMP_CURRENCY = 'KRW' | 'USD' | 'EUR' | 'JPY';

// Property Note : https://docs.iamport.kr/tech/imp?lang=en#callback
export interface CallbackRsp {
    success?: boolean;
    error_code?: string;
    error_msg?: string;
    imp_uid?: string;
    merchant_uid?: string;
    pay_method?: string;
    paid_amount?: string;
    status?: string;
    name?: string;
    pg_provider?: string;
    pg_tid?: string;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    custom_data?: object;
    paid_at?: number;
    receipt_url?: string;
    apply_num?: string;
    vbank_num?: string;
    vbank_name?: string;
    vbank_holder?: string;
    vbank_date?: number;
    imp_success?: string;
}

export interface CertificationData {
    merchant_uid?: string;
    company?: string;
    carrier?: IMP_CARRIERS;
    name?: string;
    phone?: string;
    min_age?: string;
    app_scheme?: string;
}

export interface PaymentData {
    pg?: IMP_PG;
    pay_method?: IMP_PAY_METHOD;
    currency?: IMP_CURRENCY;
    notice_url?: string | string[];
    display?: { card_quota?: number };
    merchant_uid: string;
    amount: number;
    buyer_tel: string;
    app_scheme: string;
    escrow?: boolean;
    name?: string;
    tax_free?: number;
    buyer_name?: string;
    buyer_email?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    custom_data?: object;
    vbank_due?: string;
    popup?: boolean;
    digital?: boolean;
    m_redirect_url?: string;
    biz_num?: string;
}

export interface CertificationProps {
    userCode: string;
    tierCode?: string;
    data: CertificationData;
    callback: (rsp: CallbackRsp) => void;
    loading?: object;
}

// Property Note : https://docs.iamport.kr/tech/imp?lang=en#param
export interface PaymentProps {
    userCode: string;
    tierCode?: string;
    data: PaymentData;
    callback: (rsp: CallbackRsp) => void;
    loading?: object;
    handleInicisTrans?: (event: any) => void;
    open3rdPartyApp?: (iamportUrl: any) => void;
}

declare const IMP: {
    Certification: React.FC<CertificationProps>;
    Payment: React.FC<PaymentProps>;
};

export default IMP;
