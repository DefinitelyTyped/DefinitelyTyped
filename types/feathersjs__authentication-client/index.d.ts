import * as self from "@feathersjs/authentication-client";

declare const feathersAuthClient: ((config?: FeathersAuthClientConfig) => () => void) & typeof self;
export default feathersAuthClient;

export interface FeathersAuthClientConfig {
    storage?: Storage | undefined;
    header?: string | undefined;
    cookie?: string | undefined;
    storageKey?: string | undefined;
    jwtStrategy?: string | undefined;
    path?: string | undefined;
    entity?: string | undefined;
    service?: string | undefined;
    timeout?: number | undefined;
}

export interface FeathersAuthCredentials {
    strategy: string;

    [index: string]: any;
}

export const defaults: {
    header: string;
    cookie: string;
    storageKey: string;
    jwtStrategy: string;
    path: string;
    entity: string;
    service: string;
    timeout: number;
};

export interface Passport {
    setupSocketListeners(): void;

    connected(): Promise<any>;

    authenticate(credentials?: FeathersAuthCredentials): any;

    authenticateSocket(credentials: FeathersAuthCredentials, socket: any, emit: any): any;

    logoutSocket(socket: any, emit: any): Promise<any>;

    logout(): Promise<any>;

    setJWT(data: any): Promise<any>;

    getJWT(): Promise<any>;

    verifyJWT(token: string): Promise<any>;

    payloadIsValid(payload: string): boolean;

    getCookie(name: string): string;

    clearCookie(name: string): null;

    getStorage(storage: any): any;
}

declare module "@feathersjs/feathers" {
    interface Application<ServiceTypes> {
        authenticate(options?: FeathersAuthCredentials): Promise<any>;

        logout(): Promise<void>;

        passport: Passport;
    }
}
