declare module gapi.auth {
    /**
     * The OAuth 2.0 token object represents the OAuth 2.0 token and any associated data.
     */
    interface OAuth2Token {
        /**
         * The OAuth 2.0 token. Only present in successful responses
         */
        access_token: string;
        /**
         * Details about the error. Only present in error responses
         */
        error: string;
        /**
         * The duration, in seconds, the token is valid for. Only present in successful responses
         */
        expires_in: string;
        /**
         * The Google API scopes related to this token
         */
        state: string;
    }
    
    /**
     * Initiates the OAuth 2.0 authorization process. The browser displays a
     * popup window prompting the user authenticate and authorize. After the
     * user authorizes, the popup closes and the callback function fires.
     */
    export function authorize(
        params: {
            /**
             * The application's client ID.
             */
            client_id: string,
            
            /**
             * The auth scope or scopes to authorize as a space-delimited string
             * or array (deprecated). Auth scopes for individual APIs can be found
             * in their documentation.
             */
            scope: string | string[],
            
            /**
             * If true, then login uses "immediate mode", which means that the
             * token is refreshed behind the scenes, and no UI is shown to the user.
             */
            immediate: boolean,
            
            /**
             * The OAuth 2.0 response type property.
             */
            response_type?: string
        },
        callback: (token: OAuth2Token) => any
        ): void;
}