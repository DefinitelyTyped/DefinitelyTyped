declare namespace shared {
    interface SecurityCode {
        mode: string;
        length: number;
    }

    interface CardNumber {
        length: number;
        validation: string;
    }

    interface Bin {
        pattern: string;
        installments_pattern: string;
        exclusion_pattern: string;
    }

    interface Setting {
        security_code: SecurityCode;
        card_number: CardNumber;
        bin: Bin;
    }

    interface CustomFonts {
        src: string;
    }

    interface CardTokenResponse {
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
    }

    interface PayerCost {
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

    interface Issuer {
        default: boolean;
        name: string;
        id: number;
    }

    interface FieldStyle {
        color?: string;
        "font-family"?: string;
        fontFamily?: string;
        "font-size"?: string;
        fontSize?: string;
        "font-style"?: string;
        fontStyle?: string;
        "font-variant"?: string;
        fontVariant?: string;
        "font-weight"?: string;
        fontWeight?: string;
        height?: string;
        margin?: string;
        "margin-bottom"?: string;
        marginBottom?: string;
        "margin-left"?: string;
        marginLeft?: string;
        "margin-right"?: string;
        marginRight?: string;
        "margin-top"?: string;
        marginTop?: string;
        padding?: string;
        "padding-bottom"?: string;
        paddingBottom?: string;
        "padding-left"?: string;
        paddingLeft?: string;
        "padding-right"?: string;
        paddingRight?: string;
        "padding-top"?: string;
        paddingTop?: string;
        "placeholder-color"?: string;
        placeholderColor?: string;
        "text-align"?: string;
        textAlign?: string;
        width?: string;
    }

    interface Identification {
        number: string;
        type: string;
    }

    interface Cardholder {
        identification: Identification;
        name: string;
    }
}
