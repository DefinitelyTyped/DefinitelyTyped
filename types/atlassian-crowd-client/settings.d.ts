export interface Settings {
    readonly baseUrl: string;
    readonly application: {
        readonly name: string;
        readonly password: string;
    };
    readonly nesting?: boolean;
    readonly sessionTimeout?: number;
    readonly debug?: boolean;
    readonly attributesParser?: (json: string) => any;
    readonly attributesEncoder?: (obj: any) => string;
}
