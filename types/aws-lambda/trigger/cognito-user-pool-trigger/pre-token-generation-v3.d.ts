import { Handler } from "../../handler";
import { BaseTriggerEvent, StringMap } from "./_common";

export interface GroupOverrideDetailsV3 {
    groupsToOverride?: string[];
    iamRolesToOverride?: string[];
    preferredRole?: string;
}

export interface IdTokenGenerationV3 {
    claimsToAddOrOverride?: StringMap;
    claimsToSuppress?: string[];
}

export interface AccessTokenGenerationV3 {
    claimsToAddOrOverride?: StringMap;
    claimsToSuppress?: string[];
    scopesToAdd?: string[];
    scopesToSuppress?: string[];
}

export interface ClaimsAndScopeOverrideDetailsV3 {
    idTokenGeneration?: IdTokenGenerationV3;
    accessTokenGeneration?: AccessTokenGenerationV3;
    groupOverrideDetails?: GroupOverrideDetailsV3;
}

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html
 */
export interface BasePreTokenGenerationV3TriggerEvent<T extends string> extends BaseTriggerEvent<T> {
    version: "3";
    request: {
        userAttributes: StringMap;
        groupConfiguration: GroupOverrideDetailsV3;
        scopes?: string[];
        clientMetadata?: StringMap;
    };
    response: {
        claimsAndScopeOverrideDetails: ClaimsAndScopeOverrideDetailsV3;
    };
}

export type PreTokenGenerationClientCredentialsV3TriggerEvent = BasePreTokenGenerationV3TriggerEvent<
    "TokenGeneration_ClientCredentials"
>;

export type PreTokenGenerationV3TriggerEvent = PreTokenGenerationClientCredentialsV3TriggerEvent;

export type PreTokenGenerationV3TriggerHandler = Handler<PreTokenGenerationV3TriggerEvent>;
