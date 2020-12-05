/// <reference path="common.d.ts" />

interface UpdateResult {
    canGetPrime: boolean;
    cardType: "mastercard" | "visa" | "jcb" | "amex" | "unionpay" | "unknown";
    status: {
        /**
         * ```markdown
         * 0 is successful
         * 1 is typing
         * 2 is error
         * ```
         */
        number: 0 | 1 | 2;
        /**
         * ```markdown
         * 0 is successful
         * 1 is typing
         * 2 is error
         * ```
         */
        expiry: 0 | 1 | 2;
        /**
         * ```markdown
         * 0 is successful
         * 1 is typing
         * 2 is error
         * ```
         */
        ccv: 0 | 1 | 2;
    };
}

interface elementObject {
    element: string;
    placeholder: string;
}

type cssKeyName =  "color" | "font" | "font-family" | "font-size" | "font-size-adjust" | "font-stretch" | "font-style"
| "font-variant" | "font-variant-alternates" | "font-variant-caps" | "font-variant-east-asian" | "font-variant-ligatures" | "font-variant-numeric"
| "font-weight" | "line-height" | "outline" | "opacity" | "text-shadow" | "transition" | "-moz-osx-font-smoothing" | "-moz-transition" | "-webkit-font-smoothing" | "-webkit-transitio";

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

    onUpdate(callback: (
        update: UpdateResult
    ) => void): void;

    getTappayFieldsStatus(): UpdateResult;

    getPrime(callback: (
        result: {
            status: Pick<BaseResult, "status">;
            clientip: Pick<BaseResult, "client_ip">;
            card_identifier: string;
            merchant_reference_info: {
                affiliate_codes: string[];
            };
            card: CardInfoV1 & Pick<BaseResult, "prime">;
        }
    ) => void): void;
}
