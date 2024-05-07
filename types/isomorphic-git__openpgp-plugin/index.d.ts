export const pgp: {
    sign(options: { payload: string; secretKey: string }): Promise<{ signature: string }>;

    verify(options: { payload: string; publicKey: string; signature: string }): Promise<{
        valid: string[];
        invalid: string[];
    }>;
};
