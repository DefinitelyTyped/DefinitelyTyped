import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap } from './_common';

export interface BasePostConfirmationTriggerEvent<T extends string> extends BaseTriggerEvent<T> {
  request: {
      userAttributes: StringMap;
      clientMetadata?: StringMap;
  };
}

export type PostConfirmationConfirmSignUpTriggerEvent = BasePostConfirmationTriggerEvent<'PostConfirmation_ConfirmSignUp'>;

export type PostConfirmationConfirmForgotPassword = BasePostConfirmationTriggerEvent<'PostConfirmation_ConfirmForgotPassword'>;

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html
 */
export type PostConfirmationTriggerEvent =
  | PostConfirmationConfirmSignUpTriggerEvent
  | PostConfirmationConfirmForgotPassword;

export type PostConfirmationTriggerHandler = Handler<PostConfirmationTriggerEvent>;
