export type SecurityCode = {
    mode: string;
    length: number;
  };
  
export type CardNumber = {
    length: number;
    validation: string;
  };

export type Bin = {
    pattern: string;
    installments_pattern: string;
    exclusion_pattern: string;
};

export type Setting = {
    security_code: SecurityCode;
    card_number: CardNumber;
    bin: Bin;
};

export type CustomFonts = {
    src: string;
};

export type CardTokenResponse = {
    id: string;
    public_key: string;
    card_id?: unknown;
    luhn_validation: boolean;
    status: string;
    date_used?: unknown;
    card_number_length: number;
    date_created: Date;
    first_six_digits: string;
    last_four_digits: string;
    security_code_length: number;
    expiration_month: number;
    expiration_year: number;
    date_last_updated: Date;
    date_due: Date;
    live_mode: boolean;
    cardholder: Cardholder;
};

export type PayerCost = {
    installment_rate: number;
    discount_rate: number;
    min_allowed_amount: number;
    labels?: string[];
    installments: number;
    reimbursement_rate?: unknown;
    max_allowed_amount: number;
    payment_method_option_id: string;
    recommended_message?: string;
    installment_amount?: number;
    total_amount?: number;
  }

export type Issuer = {
    default: boolean;
    name: string;
    id: number;
};

export type FieldStyle = {
    [key: string]: string;
};

type Identification = {
    number: string;
    type: string;
};

type Cardholder = {
    identification: Identification;
    name: string;
};