declare namespace Oidc {
    class DefaultHttpRequest {
        getJSON(url: string, config: any): DefaultPromise;
    }

    class DefaultPromise {
        constructor(promise: any);
        then(successCallback: (value?: any) => void, errorCallback: (reason?: any) => void): DefaultPromise;
        catch(errorCallback: () => void): DefaultPromise;
    }

    class DefaultPromiseFactory {
        resolve(value: any): DefaultPromise;
        reject(reason: any): DefaultPromise;
        create(callback: any): DefaultPromise;
    }

    interface OidcClientSettings {
        request_state_key?: string | undefined;
        request_state_store?: any;
        load_user_profile?: boolean | undefined;
        filter_protocol_claims?: boolean | undefined;
        authority?: string | undefined;
        response_type?: string | undefined;
    }

    interface OidcClient_Static {
        new(settings: OidcClientSettings): OidcTokenManager;
    }

    interface OidcClient {
        isOidc: boolean;
        isOAuth: boolean;

        loadMetadataAsync(): DefaultPromise;
        loadX509SigningKeyAsync(): DefaultPromise;
        loadUserProfile(access_token: string): DefaultPromise;
        loadAuthorizationEndpoint(): void;
        createTokenRequestAsync(): DefaultPromise;
        createLogoutRequestAsync(id_token_hint: string): DefaultPromise;
        validateIdTokenAsync(id_token: string, nonce: string, access_token: string): DefaultPromise;
        validateAccessTokenAsync(id_token_contents: string, access_token: string): DefaultPromise;
        validateIdTokenAndAccessTokenAsync(id_token: string, nonce: string, access_token: string): DefaultPromise;
        processResponseAsync(queryString: string): DefaultPromise;
    }

    interface OidcTokenManagerSettings {
        load_user_profile?: boolean | undefined;
        persist?: boolean | undefined;
        store?: Storage | undefined;
        persistKey?: string | undefined;
        client_id?: string | undefined;
        redirect_uri?: string | undefined;
        post_logout_redirect_uri?: string | undefined;
        response_type?: string | undefined;
        scope?: string | undefined;
        authority?: string | undefined;
        popup_redirect_uri?: string | undefined;
        silent_redirect_uri?: string | undefined;
        silent_renew?: boolean | undefined;
        request_state_store?: Storage | undefined;
        request_state_key?: string | undefined;
        metadata?: any;
        authorization_endpoint?: string | undefined;
        jwks_uri?: string | undefined;
        jwks?: any;
        userinfo_endpoint?: string | undefined;
        end_session_endpoint?: string | undefined;
    }

    interface PopupSettings {
        features?: string | undefined;
        target?: string | undefined;
    }

    interface OidcTokenManager_Static {
        new(settings?: OidcTokenManagerSettings): OidcTokenManager;
        setPromiseFactory(promiseFactory: DefaultPromiseFactory): void;
        setHttpRequest(httpRequest: DefaultHttpRequest): void;
    }

    interface OidcToken {
        profile: string;
        id_token: string;
        access_token: string;
        expires_at: number;
        scope: string;
        scopes: string[];
        session_state: any;
        expired: boolean;
        expires_in: number;
        toJSON(): string;
    }

    interface OidcTokenManager {
        profile: any;
        id_token: string;
        access_token: string;
        expired: boolean;
        expires_in: number;
        expires_at: number;
        scope: string;
        scopes: string[];
        session_state: any;

        saveToken(token: OidcToken): void;
        addOnTokenRemoved(cb: () => void): void;
        addOnTokenObtained(cb: () => void): void;
        addOnTokenExpiring(cb: () => void): void;
        addOnTokenExpired(cb: () => void): void;
        addOnSilentTokenRenewFailed(cb: () => void): void;
        removeToken(): void;
        redirectForToken(): DefaultPromise;
        redirectForLogout(): DefaultPromise;
        processTokenCallbackAsync(queryString?: string): DefaultPromise;
        renewTokenSilentAsync(): DefaultPromise;
        processTokenCallbackSilent(hash?: string): void;
        openPopupForTokenAsync(popupSettings?: PopupSettings): DefaultPromise;
        processTokenPopup(hash?: string): void;
    }
}

declare var OidcTokenManager: Oidc.OidcTokenManager_Static;
declare var OidcClient: Oidc.OidcClient_Static;
