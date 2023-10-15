export = JWS;
declare function JWS(): void;
declare class JWS {
    private registeredHeaders_;
    headers: Record<string, string | number | boolean>;
    claims: Record<string, string | number | boolean>;
    private registeredClaims_;
    algorithm: Algorithm;
    issuer: string;
    subject: string;
    audience: string;
    issuedAt: Date;
    notBefore: Date;
    expiresAt: Date;
    jwtId: string;
    keyId: string;
    criticalHeaders: any[];
    sign(
        key: string | CryptoPKey,
        options?: {
            disableDefaultTimestamp?: boolean;
        }
    ): string;
}
declare namespace JWS {
    export { sign, parse, parseHeader, verify, VerifyOptions };
}
import Algorithm = require('./Algorithm.js');
import CryptoPKey = require('../crypto/CryptoPKey.js');
declare function sign(
    payload: any,
    key: string | ArrayBuffer | Uint8Array | CryptoPKey,
    options?: {
        algorithm?: string;
        issuer?: string;
        subject?: string;
        audience?: string;
        issuedAt?: Date;
        notBefore?: Date;
        expiresAt?: Date;
        jwtId?: string;
        keyId?: string;
        customHeaders?: any;
        criticalHeaders?: any[];
        disableDefaultTimestamp?: boolean;
    }
): string;
declare function parse(
    token: string,
    key: string | ArrayBuffer | Uint8Array | CryptoPKey,
    options?: VerifyOptions
): JWS;
declare function parseHeader(token: string): any;
declare function verify(token: string, key: string | CryptoPKey, options?: VerifyOptions): any;
interface VerifyOptions {
    subject?: string | any[];
    audience?: string | any[];
    issuer?: string | any[];
    ignoreNotBefore?: boolean;
    ignoreExpiresAt?: boolean;
    ignoreIssuedAt?: boolean;
    currentDate?: Date;
    clockTolerance?: number;
    criticalHeaders?: any[];
    algorithm?: string;
}
