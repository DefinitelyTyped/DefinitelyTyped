// Type definitions for alks-node 0.9
// Project: https://github.com/Cox-Automotive/alks-node#readme
// Definitions by: Matt Hoang <https://github.com/matthoang08>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Moment } from 'moment';

export interface Auth {
    token?: string;
    password?: string;
}
export interface Account {
    userid: string;
    server: string;
    alksAccount: string;
    alksRole: string;
}
export interface AlksAccount {
    account: string;
    role: string;
    iam?: boolean;
}
export interface LongTermKeyData {
    accessKey: string;
    secretKey: string;
    iamUserName: string;
    iamUserArn: string;
    alksAccount: string;
    alksRole: string;
}
export interface KeyData {
    accessKey: string;
    secretKey: string;
    sessionToken: string;
    alksAccount: string;
    alksRole: string;
    sessionTime: string;
    expires: Moment;
}
export interface AwsKey {
    accessKey: string;
    secretKey: string;
    sessionToken: string;
}
export function getDurations(
    account: Account,
    auth: Auth,
    opts: object,
    callback: (err: Error, duration: number[]) => void
): void;
export function createKey(
    account: Account,
    auth: Auth,
    duration: number,
    opts: object,
    callback: (err: Error, key: KeyData) => void
): void;
export function createIamKey(
    account: Account,
    auth: Auth,
    duration: number,
    opts: object,
    callback: (err: Error, key: KeyData) => void
): void;
export function createLongTermKey(
    account: Account,
    auth: Auth,
    iamUserName: string,
    opts: object,
    callback: (err: Error, data: LongTermKeyData) => void
): void;
export function createIamRole(
    account: Account,
    auth: Auth,
    roleName: string,
    roleType: string,
    includeDefaultPolicies: boolean,
    opts: object,
    callback: (err: Error, body: any) => void
): void;
export function createIamTrustRole(
    account: Account,
    auth: Auth,
    roleName: string,
    roleType: string,
    trustArn: string,
    opts: object,
    callback: (err: Error, body: any) => void
): void;
export function getAccounts(
    server: string,
    userid: string,
    auth: Auth,
    opts: object,
    callback: (err: Error, accounts: AlksAccount[]) => void
): void;
export function getIamRoleTypes(
    server: string,
    userid: string,
    auth: Auth,
    opts: object,
    callback: (err: Error, body: any) => void
): void;
export function generateConsoleUrl(key: AwsKey, opts: object, callback: (err: Error, url: string) => void): void;
export function deleteIamRole(
    account: Account,
    auth: Auth,
    roleName: string,
    opts: object,
    callback: (err: Error, body: any) => void
): void;
export function deleteLongTermKey(
    account: Account,
    auth: Auth,
    iamUserName: string,
    opts: object,
    callback: (err: Error, body: any) => void
): void;
export function refreshTokenToAccessToken(
    account: Account,
    token: string,
    opts: object,
    callback: (err: Error, body: any) => void
): void;
