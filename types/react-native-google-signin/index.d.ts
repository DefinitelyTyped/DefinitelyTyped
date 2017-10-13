// Type definitions for react-native-google-signin 0.12
// Project: https://github.com/devfd/react-native-google-signin
// Definitions by: Jacob Froman <https://github.com/j-fro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ViewProperties } from 'react-native';

export interface GoogleSigninButtonProps extends ViewProperties {
    size?: GoogleSigninButton.Size;
    color?: GoogleSigninButton.Color;
    onPress?(): void;
}

export class GoogleSigninButton extends React.Component<GoogleSigninButtonProps> {
    constructor(props: GoogleSigninButtonProps);
}

export namespace GoogleSigninButton {
    enum Size {
        Standard,
        Wide,
        Icon
    }

    enum Color {
        Light,
        Dark
    }
}

export interface HasPlayServicesParams {
    /**
     * When autoresolve is true, the user will be prompted to install Play
     * Services if on Android and they are not installed.
     */
    autoResolve?: boolean;
}

export interface ConfigureParams {
    /**
     * The Google API scopes to request access to. Default is email and profile.
     */
    scopes?: string[];

    /**
     * iOS client ID from Developer Console. Required for iOS.
     */
    iosClientId?: string;

    /**
     * Web client ID from Developer Console. Required for offline access
     */
    webClientId?: string;

    /**
     * Must be true if you wish to access user APIs on behalf of the user from
     * your own server
     */
    offlineAccess?: boolean;

    /**
     * Specifies a hosted domain restriction
     */
    hostedDomain?: string;

    /**
     * ANDROID ONLY. Specifies if the consent prompt should be shown at each login.
     */
    forceConsentPrompt?: boolean;

    /**
     * ANDROID ONLY. An account name that should be prioritized.
     */
    accountName?: string;
}

export interface User {
    id: string | null;
    name: string | null;
    email: string | null;
    scopes?: string[];
    photo: string | null;
    familyName: string | null;
    givenName: string | null;
    idToken: string | null;
    /**
     * IOS ONLY. Use getAccessToken() on Android
     */
    accessToken: string;
    /**
     * IOS ONLY. Use getAccessToken() on Android
     */
    accessTokenExpirationDate: number;
    /**
     * Not null only if a valid webClientId and offlineAccess: true was
     * specified in configure().
     */
    serverAuthCode: string | null;
}

export namespace GoogleSignin {
    /**
     * Check if the device has Google Play Services installed. Always resolves
     * true on iOS
     */
    function hasPlayServices(params?: HasPlayServicesParams): Promise<boolean>;

    /**
     * Configures the library for login. MUST be called before attempting login
     */
    function configure(params?: ConfigureParams): Promise<void>;

    /**
     * Returns the current signed in user, or null if not signed in.
     */
    function currentUser(): User | null;

    /**
     * Returns a Promise that resolves with the current signed in user, or null
     * if not signed in.
     */
    function currentUserAsync(): Promise<User | null>;

    /**
     * Prompts the user to sign in with their Google account. Resolves with the
     * user if successful.
     */
    function signIn(): Promise<User>;

    /**
     * Signs the user out.
     */
    function signOut(): Promise<void>;

    /**
     * ANDROID ONLY. Resolves with the current signed in user's access token.
     */
    function getAccessToken(): Promise<string | null>;

    /**
     * Removes your application from the user's authorized applications
     */
    function revokeAccess(): Promise<void>;
}
