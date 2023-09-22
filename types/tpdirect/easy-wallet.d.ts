/// <reference path="common.d.ts" />

interface EasyWallet {
    getPrime(
        callback: (
            result: BaseResult,
        ) => void,
    ): void;
}
