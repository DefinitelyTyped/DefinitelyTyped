import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap } from './_common';

export interface BaseCustomEmailSenderTriggerEvent<T extends string> extends BaseTriggerEvent<T> {
    request: {
        type: string;
        code: string | null;
        userAttributes: StringMap;
        clientMetadata?: StringMap | undefined;
    };
}

export type AccountTakeOverActionType = 'BLOCK' | 'NO_ACTION' | 'MFA' | 'MFA_IF_CONFIGURED' | 'MFA_REQUIRED';

export interface CustomEmailSender_AccountTakeOverNotification_UserAttributes {
    EVENT_ID: string;
    USER_NAME: string;
    IP_ADDRESS: string;
    ACCOUNT_TAKE_OVER_ACTION: AccountTakeOverActionType;
    ONE_CLICK_LINK_VALID: string;
    ONE_CLICK_LINK_INVALID: string;
    LOGIN_TIME: string;
    FEEDBACK_TOKEN: string;
    CITY?: string | undefined;
    COUNTRY?: string | undefined;
    DEVICE_NAME?: string | undefined;
}

export interface CustomEmailSenderSignUpTriggerEvent
    extends BaseCustomEmailSenderTriggerEvent<'CustomEmailSender_SignUp'> {}

export interface CustomEmailSenderResendCodeTriggerEvent
    extends BaseCustomEmailSenderTriggerEvent<'CustomEmailSender_ResendCode'> {}

export interface CustomEmailSenderForgotPasswordTriggerEvent
    extends BaseCustomEmailSenderTriggerEvent<'CustomEmailSender_ForgotPassword'> {}

export interface CustomEmailSenderUpdateUserAttributeTriggerEvent
    extends BaseCustomEmailSenderTriggerEvent<'CustomEmailSender_UpdateUserAttribute'> {}

export interface CustomEmailSenderVerifyUserAttributeTriggerEvent
    extends BaseCustomEmailSenderTriggerEvent<'CustomEmailSender_VerifyUserAttribute'> {}

export interface CustomEmailSenderAdminCreateUserTriggerEvent
    extends BaseCustomEmailSenderTriggerEvent<'CustomEmailSender_AdminCreateUser'> {}

export interface CustomEmailSenderAccountTakeOverNotificationTriggerEvent
    extends BaseTriggerEvent<'CustomEmailSender_AccountTakeOverNotification'> {
    request: {
        type: string;
        code: string | null;
        userAttributes: CustomEmailSender_AccountTakeOverNotification_UserAttributes;
        clientMetadata?: StringMap | undefined;
    };
}

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-custom-email-sender.html
 */
export type CustomEmailSenderTriggerEvent =
    | CustomEmailSenderSignUpTriggerEvent
    | CustomEmailSenderResendCodeTriggerEvent
    | CustomEmailSenderForgotPasswordTriggerEvent
    | CustomEmailSenderUpdateUserAttributeTriggerEvent
    | CustomEmailSenderVerifyUserAttributeTriggerEvent
    | CustomEmailSenderAdminCreateUserTriggerEvent
    | CustomEmailSenderAccountTakeOverNotificationTriggerEvent;

export type CustomEmailSenderTriggerHandler = Handler<CustomEmailSenderTriggerEvent>;
