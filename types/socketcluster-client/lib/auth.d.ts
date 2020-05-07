export interface AGAuthEngine {
    saveToken(name: string, token: object, options?: object): Promise<object>;
    removeToken(name: string): Promise<object>;
    loadToken(name: string): Promise<object>;
}

export class AuthEngine implements AGAuthEngine {
    constructor();

    saveToken(name: string, token: object, options?: object): Promise<object>;
    removeToken(name: string): Promise<object>;
    loadToken(name: string): Promise<object>;
}
