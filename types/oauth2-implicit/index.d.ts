export interface AuthState {
    [key: string]: any;
    originalUrl: string;
}

export interface AuthParams {
    auth_uri: string;
    client_id: string;
    state: AuthState;
    redirect_uri: string;
    scope?: string[] | undefined;
}

export interface AuthResult {
    accessToken: string;
    state: AuthState;
}

export function finish(): AuthResult | undefined | null;
export function parseCredentials(hashString: string): AuthParams;
export function run(options: any): any;
export function start(options: AuthParams): void;

export namespace run {
    function finish(): AuthResult | undefined | null;
    function parseCredentials(hashString: string): AuthParams;
    function start(options: AuthParams): void;
}
