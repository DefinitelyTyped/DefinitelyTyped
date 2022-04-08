import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap } from './_common';

export interface GroupOverrideDetails {
  groupsToOverride?: string[];
  iamRolesToOverride?: string[];
  preferredRole?: string;
}

export interface BasePreTokenGenerationTriggerEvent<T extends string> extends BaseTriggerEvent<T> {
  request: {
      userAttributes: StringMap;
      groupConfiguration: GroupOverrideDetails;
      clientMetadata?: StringMap;
  };
  response: {
      claimsOverrideDetails: {
          claimsToAddOrOverride?: StringMap;
          claimsToSuppress?: string[];
          groupOverrideDetails?: GroupOverrideDetails;
      };
  };
}

export type PreTokenGenerationHostedAuthTriggerEvent = BasePreTokenGenerationTriggerEvent<'TokenGeneration_HostedAuth'>;

export type PreTokenGenerationAuthenticationTriggerEvent = BasePreTokenGenerationTriggerEvent<'TokenGeneration_Authentication'>;

export type PreTokenGenerationNewPasswordChallengeTriggerEvent = BasePreTokenGenerationTriggerEvent<'TokenGeneration_NewPasswordChallenge'>;

export type PreTokenGenerationAuthenticateDeviceTriggerEvent = BasePreTokenGenerationTriggerEvent<'TokenGeneration_AuthenticateDevice'>;

export type PreTokenGenerationRefreshTokensTriggerEvent = BasePreTokenGenerationTriggerEvent<'TokenGeneration_RefreshTokens'>;

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html
 */
export type PreTokenGenerationTriggerEvent =
  | PreTokenGenerationHostedAuthTriggerEvent
  | PreTokenGenerationAuthenticationTriggerEvent
  | PreTokenGenerationNewPasswordChallengeTriggerEvent
  | PreTokenGenerationAuthenticateDeviceTriggerEvent
  | PreTokenGenerationRefreshTokensTriggerEvent;

export type PreTokenGenerationTriggerHandler = Handler<PreTokenGenerationTriggerEvent>;
