import { Secret, SignCallback, SignOptions, VerifyCallback, VerifyOptions } from "jsonwebtoken";

export interface SCAuthEngine {
    verifyToken(signedToken: string, key: string | Buffer, options?: VerifyOptions, callback?: VerifyCallback): void;
    signToken(token: string | object | Buffer, key: Secret, options?: SignOptions, callback?: SignCallback): void;
}

export class AuthEngine implements SCAuthEngine {
    constructor();

    verifyToken(signedToken: string, key: string | Buffer, options?: VerifyOptions, callback?: VerifyCallback): void;
    signToken(token: string | object | Buffer, key: Secret, options?: SignOptions, callback?: SignCallback): void;
}
