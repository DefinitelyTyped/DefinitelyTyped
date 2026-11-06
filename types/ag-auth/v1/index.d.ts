import { Jwt, Secret, SignOptions, VerifyOptions } from "jsonwebtoken";

declare class AuthEngine {
    verifyToken(signedToken: string | null, key: Secret, options?: VerifyOptions): Promise<Jwt>;
    signToken(token: string | object | Buffer, key: Secret, options?: SignOptions): Promise<string | undefined>;
}

export = AuthEngine;
