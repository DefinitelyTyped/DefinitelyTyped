/// <reference path="common.d.ts" />

interface LinePayGetPrimeResult extends BaseResult {
    cs_key: string;
}

interface LinePay {
    getPrime(
        callback: (
            result: LinePayGetPrimeResult,
        ) => void,
    ): void;
}
