// Type definitions for sc-auth 5.0
// Project: https://github.com/SocketCluster/sc-auth
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { VerifyOptions, VerifyCallback, Secret, SignCallback, SignOptions } from "jsonwebtoken";

export interface SCAuthEngine {
    verifyToken(signedToken: string, key: string | Buffer, options?: VerifyOptions, callback?: VerifyCallback): void;
    signToken(token: string | object | Buffer, key: Secret, options?: SignOptions, callback?: SignCallback): void;
}

export class AuthEngine implements SCAuthEngine {
    constructor();

    verifyToken(signedToken: string, key: string | Buffer, options?: VerifyOptions, callback?: VerifyCallback): void;
    signToken(token: string | object | Buffer, key: Secret, options?: SignOptions, callback?: SignCallback): void;
}
