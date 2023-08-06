import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap } from './_common';

export interface BaseCustomSMSSenderTriggerEvent<T extends string> extends BaseTriggerEvent<T> {
    request: {
        type: string;
        code: string | null;
        userAttributes: StringMap;
        clientMetadata?: StringMap | undefined;
    };
}

export interface CustomSMSSenderSignUpTriggerEvent extends BaseCustomSMSSenderTriggerEvent<'CustomSMSSender_SignUp'> {}

export interface CustomSMSSenderResendCodeTriggerEvent
    extends BaseCustomSMSSenderTriggerEvent<'CustomSMSSender_ResendCode'> {}

export interface CustomSMSSenderForgotPasswordTriggerEvent
    extends BaseCustomSMSSenderTriggerEvent<'CustomSMSSender_ForgotPassword'> {}

export interface CustomSMSSenderUpdateUserAttributeTriggerEvent
    extends BaseCustomSMSSenderTriggerEvent<'CustomSMSSender_UpdateUserAttribute'> {}

export interface CustomSMSSenderVerifyUserAttributeTriggerEvent
    extends BaseCustomSMSSenderTriggerEvent<'CustomSMSSender_VerifyUserAttribute'> {}

export interface CustomSMSSenderAdminCreateUserTriggerEvent
    extends BaseCustomSMSSenderTriggerEvent<'CustomSMSSender_AdminCreateUser'> {}

export interface CustomSMSSenderAuthenticationUserTriggerEvent
    extends BaseCustomSMSSenderTriggerEvent<'CustomSMSSender_Authentication'> {}

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-custom-sms-sender.html
 */
export type CustomSMSSenderTriggerEvent =
    | CustomSMSSenderSignUpTriggerEvent
    | CustomSMSSenderResendCodeTriggerEvent
    | CustomSMSSenderForgotPasswordTriggerEvent
    | CustomSMSSenderUpdateUserAttributeTriggerEvent
    | CustomSMSSenderVerifyUserAttributeTriggerEvent
    | CustomSMSSenderAdminCreateUserTriggerEvent
    | CustomSMSSenderAuthenticationUserTriggerEvent;

export type CustomSMSSenderTriggerHandler = Handler<CustomSMSSenderTriggerEvent>;
