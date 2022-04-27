declare class AuthEngine implements AuthEngine.AGAuthEngine {
    constructor();

    saveToken(
        name: string,
        token: AuthEngine.AuthToken | AuthEngine.SignedAuthToken,
        options?: { [key: string]: any },
    ): Promise<AuthEngine.AuthToken | AuthEngine.SignedAuthToken>;
    removeToken(name: string): Promise<AuthEngine.AuthToken | AuthEngine.SignedAuthToken | null>;
    loadToken(name: string): Promise<AuthEngine.AuthToken | AuthEngine.SignedAuthToken | null>;
}

export = AuthEngine;

declare namespace AuthEngine {
    interface AGAuthEngine {
        saveToken(
            name: string,
            token: AuthToken | SignedAuthToken,
            options?: { [key: string]: any },
        ): Promise<AuthToken | SignedAuthToken>;
        removeToken(name: string): Promise<AuthToken | SignedAuthToken | null>;
        loadToken(name: string): Promise<AuthToken | SignedAuthToken | null>;
    }

    interface AuthToken {
        [key: string]: any;
    }

    type SignedAuthToken = string;
}
