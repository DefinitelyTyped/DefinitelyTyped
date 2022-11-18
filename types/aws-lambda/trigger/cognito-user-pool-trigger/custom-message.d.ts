import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap } from './_common';

export interface BaseCustomMessageTriggerEvent<T extends string> extends BaseTriggerEvent<T> {
  request: {
      userAttributes: StringMap;
      codeParameter: string;
      linkParameter: string;
        /**
         * This is null for all events other than the AdminCreateUser action.
         */
      usernameParameter: string | null;
      clientMetadata?: StringMap | undefined;
  };
  response: {
      smsMessage: string | null;
      emailMessage: string | null;
      emailSubject: string | null;
  };
}

export type CustomMessageAdminCreateUserTriggerEvent = BaseCustomMessageTriggerEvent<'CustomMessage_AdminCreateUser'>;

export type CustomMessageAuthenticationTriggerEvent = BaseCustomMessageTriggerEvent<'CustomMessage_Authentication'>;

export type CustomMessageForgotPasswordTriggerEvent = BaseCustomMessageTriggerEvent<'CustomMessage_ForgotPassword'>;

export type CustomMessageResendCodeTriggerEvent = BaseCustomMessageTriggerEvent<'CustomMessage_ResendCode'>;

export type CustomMessageSignUpTriggerEvent = BaseCustomMessageTriggerEvent<'CustomMessage_SignUp'>;

export type CustomMessageUpdateUserAttributeTriggerEvent = BaseCustomMessageTriggerEvent<'CustomMessage_UpdateUserAttribute'>;

export type CustomMessageVerifyUserAttributeTriggerEvent = BaseCustomMessageTriggerEvent<'CustomMessage_VerifyUserAttribute'>;

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-custom-message.html
 */
export type CustomMessageTriggerEvent =
    | CustomMessageSignUpTriggerEvent
    | CustomMessageAdminCreateUserTriggerEvent
    | CustomMessageResendCodeTriggerEvent
    | CustomMessageForgotPasswordTriggerEvent
    | CustomMessageUpdateUserAttributeTriggerEvent
    | CustomMessageVerifyUserAttributeTriggerEvent
    | CustomMessageAuthenticationTriggerEvent;

export type CustomMessageTriggerHandler = Handler<CustomMessageTriggerEvent>;
