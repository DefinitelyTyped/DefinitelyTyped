import { Handler } from "../../handler";
import { BaseTriggerEvent, StringMap } from "./_common";

export interface GroupOverrideDetailsV2 {
    groupsToOverride?: string[] | undefined;
    iamRolesToOverride?: string[] | undefined;
    preferredRole?: string | undefined;
}

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html#cognito-user-pools-lambda-trigger-syntax-pre-token-generation
 */
export interface IdTokenGeneration {
    claimsToAddOrOverride?: StringMap | undefined;
    claimsToSuppress?: string[] | undefined;
}

export interface AccessTokenGeneration {
    claimsToAddOrOverride?: StringMap | undefined;
    claimsToSuppress?: string[] | undefined;
    scopesToAdd?: string[] | undefined;
    scopesToSuppress?: string[] | undefined;
}

export interface ClaimsAndScopeOverrideDetails {
    idTokenGeneration?: IdTokenGeneration | undefined;
    accessTokenGeneration?: AccessTokenGeneration | undefined;
    groupOverrideDetails?: GroupOverrideDetailsV2 | undefined;
}

export interface BasePreTokenGenerationV2TriggerEvent<T extends string> extends BaseTriggerEvent<T> {
    request: {
        userAttributes: StringMap;
        groupConfiguration: GroupOverrideDetailsV2;
        scopes?: string[] | undefined;
        clientMetadata?: StringMap | undefined;
    };
    response: {
        claimsAndScopeOverrideDetails: ClaimsAndScopeOverrideDetails;
    };
}

export type PreTokenGenerationHostedAuthV2TriggerEvent = BasePreTokenGenerationV2TriggerEvent<
    "TokenGeneration_HostedAuth"
>;

export type PreTokenGenerationAuthenticationV2TriggerEvent = BasePreTokenGenerationV2TriggerEvent<
    "TokenGeneration_Authentication"
>;

export type PreTokenGenerationNewPasswordChallengeV2TriggerEvent = BasePreTokenGenerationV2TriggerEvent<
    "TokenGeneration_NewPasswordChallenge"
>;

export type PreTokenGenerationAuthenticateDeviceV2TriggerEvent = BasePreTokenGenerationV2TriggerEvent<
    "TokenGeneration_AuthenticateDevice"
>;

export type PreTokenGenerationRefreshTokensV2TriggerEvent = BasePreTokenGenerationV2TriggerEvent<
    "TokenGeneration_RefreshTokens"
>;

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html
 */
export type PreTokenGenerationV2TriggerEvent =
    | PreTokenGenerationHostedAuthV2TriggerEvent
    | PreTokenGenerationAuthenticationV2TriggerEvent
    | PreTokenGenerationNewPasswordChallengeV2TriggerEvent
    | PreTokenGenerationAuthenticateDeviceV2TriggerEvent
    | PreTokenGenerationRefreshTokensV2TriggerEvent;

export type PreTokenGenerationV2TriggerHandler = Handler<PreTokenGenerationV2TriggerEvent>;
