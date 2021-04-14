import jose from 'jose';
import { NextApiRequest } from './_next';
import { WithAdditionalParams } from './_utils';

export interface JWT extends Record<string, unknown> {
    name?: string | null;
    email?: string | null;
    picture?: string | null;
}

export interface JWTEncodeParams {
    token?: WithAdditionalParams<JWT>;
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

export interface JWTOptions {
    secret?: string;
    maxAge?: number;
    encryption?: boolean;
    signingKey?: string;
    encryptionKey?: string;
    encode?(options: JWTEncodeParams): Promise<string>;
    decode?(options: JWTDecodeParams): Promise<WithAdditionalParams<JWT>>;
}

declare function encode(args?: JWTEncodeParams): Promise<string>;
declare function decode(args?: JWTDecodeParams & { token: string }): Promise<WithAdditionalParams<JWT>>;

declare function getToken(
    args?: {
        req: NextApiRequest;
        secureCookie?: boolean;
        cookieName?: string;
        raw?: string;
    } & JWTDecodeParams,
): Promise<WithAdditionalParams<JWT>>;
declare function getToken(args?: {
    req: NextApiRequest;
    secureCookie?: boolean;
    cookieName?: string;
    raw: true;
}): Promise<string>;

export { encode, decode, getToken };
