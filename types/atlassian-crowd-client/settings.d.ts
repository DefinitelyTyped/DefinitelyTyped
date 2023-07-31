export interface Settings {
    readonly baseUrl: string;
    readonly application: {
        readonly name: string;
        readonly password: string;
    };
    readonly nesting?: boolean | undefined;
    readonly sessionTimeout?: number | undefined;
    readonly debug?: boolean | undefined;
    readonly attributesParser?: ((json: string) => any) | undefined;
    readonly attributesEncoder?: ((obj: any) => string) | undefined;
}
