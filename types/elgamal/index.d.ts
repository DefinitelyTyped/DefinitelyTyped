import { BigInteger as BigInt } from "jsbn";

export default class ElGamal {
    p: BigInt;
    g: BigInt;
    y: BigInt;
    x: BigInt;
    static generateAsync(primeBits?: number): Promise<ElGamal>;
    constructor(
        p: BigInt | string | number,
        g: BigInt | string | number,
        y: BigInt | string | number,
        x: BigInt | string | number,
    );
    encryptAsync(m: BigInt | string | number, k?: BigInt | string | number): Promise<EncryptedValue>;
    decryptAsync(m: EncryptedValue): Promise<DecryptedValue>;
}

export { BigInt };

export class DecryptedValue {
    bi: BigInt;
    constructor(m: BigInt | string | number);
    toString(): string;
}

export class EncryptedValue {
    a: BigInt;
    b: BigInt;
    constructor(a: BigInt, b: BigInt);
    multiply(encryptedValue: EncryptedValue): EncryptedValue;
}

export namespace Utils {
    const BIG_TWO: BigInt;
    function getRandomNbitBigIntAsync(bits: number): Promise<BigInt>;
    function getRandomBigIntAsync(min: BigInt, max: BigInt): Promise<BigInt>;
    function getBigPrimeAsync(bits: number): Promise<BigInt>;
    function parseBigInt(obj: BigInt | string | number): BigInt | null;
}

export class MissingPrivateKeyError extends Error {}
