import { Handler } from "../../handler";
import { BaseTriggerEvent, StringMap } from "./_common";

export type InboundFederationProviderType =
    | "OIDC"
    | "SAML"
    | "Facebook"
    | "Google"
    | "SignInWithApple"
    | "LoginWithAmazon";

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-inbound-federation.html
 */
export interface InboundFederationTriggerEvent extends BaseTriggerEvent<"InboundFederation_ExternalProvider"> {
    request: {
        providerName: string;
        providerType: InboundFederationProviderType;
        attributes: {
            /** OAuth token response. Present for OIDC and social providers. */
            tokenResponse?: StringMap | undefined;
            /** Decoded JWT claims. Present for OIDC and social providers. */
            idToken?: StringMap | undefined;
            /** Extended profile info. Present for OIDC and social providers. */
            userInfo?: StringMap | undefined;
            /** SAML assertion attributes. Present for SAML providers. */
            samlResponse?: StringMap | undefined;
        };
    };
    response: {
        /**
         * User attributes to apply to the user profile.
         * All attributes to be retained must be included; omitted attributes are dropped.
         * Return an empty object `{}` to retain all original attributes unchanged.
         */
        userAttributesToMap: StringMap;
    };
}

export type InboundFederationTriggerHandler = Handler<InboundFederationTriggerEvent>;
