import { GetServerSidePropsContext, NextApiRequest } from 'next';
import jose from 'jose';

type Request = GetServerSidePropsContext['req'] | NextApiRequest;

interface DecodeArgs {
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

declare function encode(args?: {
    token?: object;
    maxAge?: number;
    secret: string | Buffer;
    signingKey?: string;
    signingOptions?: jose.JWT.SignOptions;
    encryptionKey?: string;
    encryptionOptions?: object;
    encryption?: boolean;
}): Promise<string>;
declare function decode(
    args?: DecodeArgs & {
        token: string;
    },
): Promise<object>;

declare function getToken(
    args?: {
        req: Request;
        secureCookie?: boolean;
        cookieName?: string;
        raw?: string;
    } & DecodeArgs,
): Promise<object>;
declare function getToken(args?: {
    req: Request;
    secureCookie?: boolean;
    cookieName?: string;
    raw: true;
}): Promise<string>;

export { encode, decode, getToken };
