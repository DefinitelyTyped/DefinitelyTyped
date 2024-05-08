export interface SignOptions {
    payload: string;
    secretKey: string;
}

export interface VerifyOptions {
    payload: string;
    publicKey: string;
    signature: string;
}

export const pgp: {
    sign(options: SignOptions): Promise<{
        signature: string;
    }>;

    verify(options: VerifyOptions): Promise<{
        valid: string[];
        invalid: string[];
    }>;
};
