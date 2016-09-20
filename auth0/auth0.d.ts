// Type definitions for auth0 v2.3.1
// Project: https://github.com/auth0/node-auth0
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />

declare module "auth0" {

  import * as Promise from 'bluebird';

  export interface ManagementClientOptions {
    token: string;
    domain?: string;
  }

  export interface UserData {
    connection: string;
    email?: string;
    username?: string;
    password?: string;
    phone_number?: string;
    user_metadata?: {};
    email_verified?: boolean;
    app_metadata?: {};
  }

  export interface GetUsersData {
    per_page?: number;
    page?: number;
    include_totals?: boolean;
    sort?: string;
    connection?: string;
    fields?: string;
    include_fields?: boolean;
    q?: string;
    search_engine?: string;
  }

  export interface User {
    email?: string;
    email_verified?: boolean;
    username?: string;
    phone_number?: string;
    phone_verified?: boolean;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    identities?: Identity[];
    app_metadata?: {};
    user_metadata?: {};
    picture?: string;
    name?: string;
    nickname?: string;
    multifactor?: string[];
    last_ip?: string;
    last_login?: string;
    logins_count?: number;
    blocked?: boolean;
  }

  export interface Identity {
    connection: string;
    user_id: string;
    provider: string;
    isSocial: boolean;
  }

  export class ManagementClient {
    constructor(options: ManagementClientOptions);

    getUsers(params?: GetUsersData): Promise<User[]>;
    getUsers(params?: GetUsersData, cb?: (err: Error, users: User[]) => void): void;
    createUser(data: UserData): Promise<User>;
    createUser(data: UserData, cb: (err: Error, data: User) => void): void;
  }

  export interface AuthenticationClientOptions {
    clientId?: string;
    domain: string;
  }

  export interface RequestChangePasswordEmailData {
    connection: string;
    email: string;
  }

  export class AuthenticationClient {
    constructor(options: AuthenticationClientOptions);

    requestChangePasswordEmail(data: RequestChangePasswordEmailData): Promise<string>;
    requestChangePasswordEmail(data: RequestChangePasswordEmailData, cb: (err: Error, message: string) => void): void;
  }

}
