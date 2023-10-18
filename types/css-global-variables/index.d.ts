export interface CGVInterface {
    [index: string]: string;
}

export const CSSGlobalVariables: {
    new(
        config?: {
            filter?: string | undefined;
            autoprefix?: boolean | undefined;
            normalize?: ((name: string) => string) | undefined;
        },
    ): CGVInterface;
};
