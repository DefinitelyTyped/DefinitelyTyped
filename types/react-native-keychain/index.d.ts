// Type definitions for react-native-keychain 3.0
// Project: https://github.com/oblador/react-native-keychain
// Definitions by: David Evans Farinha <https://github.com/DavidFarinha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface UserCredentials {
    username: string;
    password: string;
}

export interface SharedWebCredentials {
    server: string;
    username: string;
    password: string;
}

export interface Options {
    accessControl?: SecAccessControl;
    accessGroup?: string;
    accessible?: SecAccessible;
    authenticationPrompt?: string;
    authenticationType?: LAPolicy;
    service?: string;
}

export type SecAccessible =
    'AccessibleWhenUnlocked'
    | 'AccessibleAfterFirstUnlock'
    | 'AccessibleAlways'
    | 'AccessibleWhenPasscodeSetThisDeviceOnly'
    | 'AccessibleWhenUnlockedThisDeviceOnly'
    | 'AccessibleAfterFirstUnlockThisDeviceOnly'
    | 'AccessibleAlwaysThisDeviceOnly';

export type SecAccessControl =
    'UserPresence'
    | 'BiometryAny'
    | 'BiometryCurrentSet'
    | 'DevicePasscode'
    | 'ApplicationPassword'
    | 'BiometryAnyOrDevicePasscode'
    | 'BiometryCurrentSetOrDevicePasscode';

export type LAPolicy = 'Authentication' | 'AuthenticationWithBiometrics';

export function canImplyAuthentication(options?: Options): Promise<boolean>;

export function getSupportedBiometryType(): Promise<string | null>;

export function setInternetCredentials(
    server: string,
    username: string,
    password: string,
    options?: Options
): Promise<boolean>;

export function getInternetCredentials(
    server: string
): Promise<UserCredentials>;

export function resetInternetCredentials(
    server: string
): Promise<boolean>;

export function setGenericPassword(
    username: string,
    password: string,
    serviceOrOptions?: string | Options
): Promise<boolean>;

export function getGenericPassword(
    serviceOrOptions?: string | Options
): Promise<boolean | {service: string, username: string, password: string}>;

export function resetGenericPassword(
    serviceOrOptions?: string | Options
): Promise<boolean>;

export function requestSharedWebCredentials(
): Promise<SharedWebCredentials>;

export function setSharedWebCredentials(
    server: string,
    username: string,
    password: string
): Promise<boolean>;
