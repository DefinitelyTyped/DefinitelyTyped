type AllowedNetworks = "AMEX" | "JCB" | "MASTERCARD" | "VISA";

interface BaseResult {
    /**
     * 0 is successful.
     */
    status: number;
    msg: string;
    prime: string;
    client_ip: string;
}

interface MerchantReferenceInfo {
    /**
     * ```markdown
     * If the merchant uses the co-branded card management in the TapPay portal,
     * and the transaction card number meets the setting.
     * ```
     */
    merchant_reference_info: {
        /**
         * Affiliated codes set by the merchant in the Co-brand card management
         * area of the TapPay portal.
         */
        affiliate_codes: string[];
    };
}

interface BaseCardInfo {
    issuer: string;
    issuer_zh_tw: string;
    bank_id: string;
    /**
     * ```markdown
     * -1 = Unkonwn
     * 0 = Credit Card
     * 1 = Debit Card
     * 2 = Prepaid Card
     * ```
     */
    funding: -1 | 0 | 1 | 2;
    /**
     * ```markdown
     * -1 = Unkown
     * 1 = VISA
     * 2 = MasterCard
     * 3 = JCB
     * 4 = Union Pay
     * 5 = AMEX
     * ```
     */
    type: 1 | 2 | 3 | 4 | 5;
    level: string;
    country: string;
}

interface Card extends Pick<BaseCardInfo, "funding" | "type"> {
    /**
     * Real Card
     */
    lastfour: string;
}

interface CardInfoV1 extends BaseCardInfo {
    bincode: string;
    /**
     * Real Card for Direct Pay
     */
    lastfour: string;
    countrycode: string;
}

interface CardInfoV2 extends BaseCardInfo {
    bin_code: string;
    /**
     * ```markdown
     * Real Card for Google Pay (card isn't installed in phohe)
     * Token Card for Google Pay, Apple Pay, Samsung Pay
     * ```
     */
    last_four: string;
    country_code: string;
}

interface Address {
    country: string;
    addressLine: string[];
    region: string;
    city: string;
    dependentLocality: string;
    postalCode: string;
    sortingCode: string;
    languageCode: string;
    organization: string;
    recipient: string;
    phone: string;
}

interface PaymentRequestAmount {
    label: string;
    amount: {
        currency: string;
        value: string;
    };
}
