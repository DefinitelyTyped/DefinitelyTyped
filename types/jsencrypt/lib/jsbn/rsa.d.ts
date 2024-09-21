import { BigInteger } from "./jsbn";
export class RSAKey {
    constructor();
    doPublic(x: BigInteger): BigInteger;
    doPrivate(x: BigInteger): BigInteger;
    setPublic(N: string, E: string): void;
    encrypt(text: string): string;
    setPrivate(N: string, E: string, D: string): void;
    setPrivateEx(N: string, E: string, D: string, P: string, Q: string, DP: string, DQ: string, C: string): void;
    generate(B: number, E: string): void;
    decrypt(ctext: string): string;
    generateAsync(B: number, E: string, callback: () => void): void;
    sign(text: string, digestMethod: (str: string) => string, digestName: string): string;
    verify(text: string, signature: string, digestMethod: (str: string) => string): boolean;
    protected n: BigInteger;
    protected e: number;
    protected d: BigInteger;
    protected p: BigInteger;
    protected q: BigInteger;
    protected dmp1: BigInteger;
    protected dmq1: BigInteger;
    protected coeff: BigInteger;
}
