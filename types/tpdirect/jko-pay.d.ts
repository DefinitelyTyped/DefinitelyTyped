/// <reference path="common.d.ts" />

interface JkoPay {
    getPrime(
        callback: (
            result: BaseResult,
        ) => void,
    ): void;
}
