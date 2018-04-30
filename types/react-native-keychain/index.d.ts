declare module 'react-native-keychain' {

    type SecAccessible =
    'AccessibleWhenUnlocked'
    | 'AccessibleAfterFirstUnlock'
    | 'AccessibleAlways'
    | 'AccessibleWhenPasscodeSetThisDeviceOnly'
    | 'AccessibleWhenUnlockedThisDeviceOnly'
    | 'AccessibleAfterFirstUnlockThisDeviceOnly'
    | 'AccessibleAlwaysThisDeviceOnly';
    
    type SecAccessControl =
    'UserPresence'
    | 'BiometryAny'
    | 'BiometryCurrentSet'
    | 'DevicePasscode'
    | 'ApplicationPassword'
    | 'BiometryAnyOrDevicePasscode'
    | 'BiometryCurrentSetOrDevicePasscode';
  
    type LAPolicy = 'Authentication' | 'AuthenticationWithBiometrics';

    export interface Options {
        accessControl?: SecAccessControl,
        accessGroup?: string,
        accessible?: SecAccessible,
        authenticationPrompt?: string,
        authenticationType?: LAPolicy,
        service?: string,
    }

    export interface UserCredentials {
        username: string;
        password: string;
    }

    export interface SharedWebCredentials {
        server: string;
        username: string;
        password: string;
    }

    function setInternetCredentials(
        server: string,
        username: string,
        password: string
    ): Promise<boolean>;

    function getInternetCredentials(
        server: string
    ): Promise<UserCredentials>;

    function resetInternetCredentials(
        server: string
    ): Promise<boolean>;

    function setGenericPassword(
        username: string,
        password: string,
        service?: string
    ): Promise<boolean>;

    function getGenericPassword(
        service?: string
    ): Promise<string>;

    function resetGenericPassword(
        serviceOrOptions?: string | Options
    ): Promise<string>;

    function requestSharedWebCredentials(
    ): Promise<SharedWebCredentials>;

    function setSharedWebCredentials(
        server: string,
        username: string,
        password: string
    ): Promise<boolean>;
}

// Definitions by: David Evans Farinha <https://github.com/DavidFarinha>
