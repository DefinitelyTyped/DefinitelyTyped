/// <reference path="common.d.ts" />

interface UpdateResult {
    /**
     * ```markdown
     * `true` means all fields are correct.
     * You may now call getPrime.
     * ```
     */
    canGetPrime: boolean;
    cardType: "mastercard" | "visa" | "jcb" | "amex" | "unionpay" | "unknown";
    /**
     * true means there is a error in one or more of fileds.
     */
    hasError: boolean;
    status: {
        /**
         * ```markdown
         * 0 is successful
         * 1 is empty
         * 2 is error
         * 3 is typing
         * ```
         */
        number: 0 | 1 | 2 | 3;
        /**
         * ```markdown
         * 0 is successful
         * 1 is empty
         * 2 is error
         * 3 is typing
         * ```
         */
        expiry: 0 | 1 | 2 | 3;
        /**
         * ```markdown
         * 0 is successful
         * 1 is empty
         * 2 is error
         * 3 is typing
         * ```
         */
        ccv: 0 | 1 | 2 | 3;
    };
}

interface elementObject {
    element: string;
    placeholder: string;
}

type cssKeyName =
    | "color"
    | "font"
    | "font-family"
    | "font-size"
    | "font-size-adjust"
    | "font-stretch"
    | "font-style"
    | "font-variant"
    | "font-variant-alternates"
    | "font-variant-caps"
    | "font-variant-east-asian"
    | "font-variant-ligatures"
    | "font-variant-numeric"
    | "font-weight"
    | "line-height"
    | "outline"
    | "opacity"
    | "text-shadow"
    | "transition"
    | "-moz-osx-font-smoothing"
    | "-moz-transition"
    | "-webkit-font-smoothing"
    | "-webkit-transitio";

interface DirectPay {
    setup(fields: {
        number: elementObject;
        expirationDate: elementObject;
        ccv: elementObject;
    }, styles?: {
        [key: string]: {
            [key in cssKeyName]?: string;
        };
    }): void;

    onUpdate(
        callback: (
            update: UpdateResult,
        ) => void,
    ): void;

    getTappayFieldsStatus(): UpdateResult;

    getPrime(
        callback: (
            result: Pick<BaseResult, "status" | "msg"> & {
                clientip: Pick<BaseResult, "client_ip">;
                card_identifier: string;
                card: CardInfoV1 & Pick<BaseResult, "prime">;
            } & MerchantReferenceInfo,
        ) => void,
    ): void;
}
