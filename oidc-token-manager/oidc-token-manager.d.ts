// Type definitions for oidc-token-manager
// Project: https://github.com/IdentityModel/oidc-token-manager
// Definitions by: Sławomir Rosiek <https://github.com/rosieks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module Oidc {
    class DefaultHttpRequest {
        getJSON(url: string, config: any): DefaultPromise;
    }

    class DefaultPromise {
        constructor(promise);
        then(successCallback: () => void, errorCallback: () => void): DefaultPromise;
        catch(errorCallback: () => void): DefaultPromise;
    }

    class DefaultPromiseFactory {
        resolve(value: any): DefaultPromise;
        reject(reason: any): DefaultPromise;
        create(callback: any): DefaultPromise;
    }

    interface OidcClientSettings {
        request_state_key?: string;
        request_state_store?: any;
        load_user_profile?: boolean;
        filter_protocol_claims?: boolean;
        authority?: string;
        response_type?: string;
    }

    interface OidcClient_Static {
        new (settings: OidcClientSettings): OidcTokenManager;
    }

    interface OidcClient {
        isOidc: boolean;
        isOAuth: boolean;

        loadMetadataAsync(): DefaultPromise;
        loadX509SigningKeyAsync(): DefaultPromise;
        loadUserProfile(access_token: string);
        loadAuthorizationEndpoint(): void;
        createTokenRequestAsync(): DefaultPromise;
        createLogoutRequestAsync(id_token_hint: string): DefaultPromise;
        validateIdTokenAsync(id_token: string, nonce: string, access_token: string): DefaultPromise;
        validateAccessTokenAsync(id_token_contents: string, access_token: string): DefaultPromise;
        validateIdTokenAndAccessTokenAsync(id_token: string, nonce: string, access_token: string): DefaultPromise;
        processResponseAsync(queryString: string): DefaultPromise;
    }

    interface OidcTokenManagerSettings {
        persist?: boolean;
        store?: any;
        persistKey?: string;
        client_id?: string;
        redirect_uri?: string;
        post_logout_redirect_uri?: string;
        response_type?: string;
        scope?: string;
        authority?: string;
        popup_redirect_uri?: string;
        silent_redirect_uri?: string;
        silent_renew?: boolean;
    }
    
    interface PopupSettings {
        features?: string;
        target?: string;
    }

    interface OidcTokenManager_Static {
        new (settings?: OidcTokenManagerSettings): OidcTokenManager;
        setPromiseFactory(promiseFactory: DefaultPromiseFactory): void;
        setHttpRequest(httpRequest: DefaultHttpRequest): void;
    }

    interface OidcTokenManager {
        profile: any;
        id_token: string;
        access_token: string;
        expired: boolean;
        expires_in: number;
        expires_at: number;
        scope: any;
        scopes: any[];
        session_state: any;

        saveToken(token): void;
        addOnTokenRemoved(cb: () => void): void;
        addOnTokenObtained(cb: () => void): void;
        addOnTokenExpiring(cb: () => void): void;
        addOnTokenExpired(cb: () => void): void;
        addOnSilentTokenRenewFailed(cb: () => void): void;
        removeToken(): void;
        redirectForToken(): void;
        redirectForLogout(): void;
        processTokenCallbackAsync(queryString?: string): DefaultPromise;
        renewTokenSilentAsync(): DefaultPromise;
        processTokenCallbackSilent(hash?: string): void;
        openPopupForTokenAsync(popupSettings?: PopupSettings): DefaultPromise;
        processTokenPopup(hash?: string): void;
    }
}

declare var OidcTokenManager: Oidc.OidcTokenManager_Static;
declare var OidcClient: Oidc.OidcClient_Static;