import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap, ChallengeResult, CustomChallengeResult } from './_common';

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-create-auth-challenge.html
 */
export interface CreateAuthChallengeTriggerEvent extends BaseTriggerEvent<'CreateAuthChallenge_Authentication'> {
  request: {
      userAttributes: StringMap;
      challengeName: string;
      session: Array<ChallengeResult | CustomChallengeResult>;
      userNotFound?: boolean | undefined;
      clientMetadata?: StringMap | undefined;
  };
  response: {
      publicChallengeParameters: StringMap;
      privateChallengeParameters: StringMap;
      challengeMetadata: string;
  };
}

export type CreateAuthChallengeTriggerHandler = Handler<CreateAuthChallengeTriggerEvent>;
