import jose from 'jose';
import { NextApiRequest } from './_utils';

export interface JWTEncodeParams {
    token?: object;
    maxAge?: number;
    secret: string | Buffer;
    signingKey?: string;
    signingOptions?: jose.JWT.SignOptions;
    encryptionKey?: string;
    encryptionOptions?: object;
    encryption?: boolean;
}

export interface JWTDecodeParams {
    token?: string;
    maxAge?: number;
    secret: string | Buffer;
    signingKey?: string;
    verificationKey?: string;
    verificationOptions?: jose.JWT.VerifyOptions<false>;
    encryptionKey?: string;
    decryptionKey?: string;
    decryptionOptions?: jose.JWE.DecryptOptions<false>;
    encryption?: boolean;
}

declare function encode(args?: JWTEncodeParams): Promise<string>;
declare function decode(args?: JWTDecodeParams & { token: string }): Promise<object>;

declare function getToken(
    args?: {
        req: NextApiRequest;
        secureCookie?: boolean;
        cookieName?: string;
        raw?: string;
    } & JWTDecodeParams,
): Promise<object>;
declare function getToken(args?: {
    req: NextApiRequest;
    secureCookie?: boolean;
    cookieName?: string;
    raw: true;
}): Promise<string>;

export { encode, decode, getToken };
