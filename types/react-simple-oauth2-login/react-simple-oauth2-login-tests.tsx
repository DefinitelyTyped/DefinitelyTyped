import * as React from "react";
import OAuth2Login from "react-simple-oauth2-login";

export function Test() {
    return (
        <OAuth2Login
            clientId="1234567890"
            authorizationUrl="https://example.com/oauth/authorize"
            redirectUri="https://example.com/oauth/callback"
            responseType="code"
            buttonText="Login"
            state={"state"}
            onSuccess={() => {}}
            onFailure={() => {}}
            render={({ onClick, buttonText }) => (
                <button onClick={onClick}>{buttonText}</button>
              )}
        />
    );
}
