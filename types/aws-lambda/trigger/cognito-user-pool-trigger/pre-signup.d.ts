import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap } from './_common';

export interface BasePreSignUpTriggerEvent<T extends string> extends BaseTriggerEvent<T> {
  request: {
      userAttributes: StringMap;
      validationData?: StringMap;
      clientMetadata?: StringMap;
  };
  response: {
      autoConfirmUser: boolean;
      autoVerifyEmail: boolean;
      autoVerifyPhone: boolean;
  };
}

export type PreSignUpEmailTriggerEvent = BasePreSignUpTriggerEvent<'PreSignUp_SignUp'>;

export type PreSignUpExternalProviderTriggerEvent = BasePreSignUpTriggerEvent<'PreSignUp_ExternalProvider'>;

export type PreSignUpAdminCreateUserTriggerEvent = BasePreSignUpTriggerEvent<'PreSignUp_AdminCreateUser'>;

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html
 */
export type PreSignUpTriggerEvent =
  | PreSignUpEmailTriggerEvent
  | PreSignUpExternalProviderTriggerEvent
  | PreSignUpAdminCreateUserTriggerEvent;

export type PreSignUpTriggerHandler = Handler<PreSignUpTriggerEvent>;
