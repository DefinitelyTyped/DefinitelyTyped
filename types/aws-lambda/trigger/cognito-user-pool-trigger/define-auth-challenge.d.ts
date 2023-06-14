import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap, ChallengeResult, CustomChallengeResult } from './_common';

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-define-auth-challenge.html
 */
export interface DefineAuthChallengeTriggerEvent extends BaseTriggerEvent<'DefineAuthChallenge_Authentication'> {
  request: {
      userAttributes: StringMap;
      session: Array<ChallengeResult | CustomChallengeResult>;
      userNotFound?: boolean | undefined;
      clientMetadata?: StringMap | undefined;
  };
  response: {
      challengeName: string;
      failAuthentication: boolean;
      issueTokens: boolean;
  };
}

export type DefineAuthChallengeTriggerHandler = Handler<DefineAuthChallengeTriggerEvent>;
