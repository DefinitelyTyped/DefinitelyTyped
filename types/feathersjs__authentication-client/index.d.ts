// Type definitions for @feathersjs/authentication-client
// Project: http://feathersjs.com/
// Definitions by: Abraao Alves <https://github.com/AbraaoAlves/>, Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

declare module '@feathersjs/authentication-client' {
  function feathersAuthClient(config?: FeathersAuthClientConfig): () => void;

  export default feathersAuthClient;

  export interface FeathersAuthClientConfig {
    storage?: Storage;
    header?: string;
    cookie?: string;
    storageKey?: string;
    jwtStrategy?: string;
    path?: string;
    entity?: string;
    service?: string;
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

    verifyJWT(token: string): Promise<string>;

    payloadIsValid(payload: string): boolean;

    getCookie(name: string): string;

    clearCookie(name: string): null;

    getStorage(storage: any): any;
  }
}

declare module '@feathersjs/feathers' {
  import {
    FeathersAuthCredentials,
    Passport
  } from '@feathersjs/authentication-client';

  export interface Application<ServiceTypes> {
    authenticate(options?: FeathersAuthCredentials): Promise<any>;

    logout(): Promise<void>;

    passport: Passport;
  }
}
