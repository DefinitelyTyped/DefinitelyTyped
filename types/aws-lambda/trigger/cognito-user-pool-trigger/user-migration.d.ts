import { Handler } from '../../handler';
import { BaseTriggerEvent, StringMap } from './_common';

export type UserStatus =
  | 'UNCONFIRMED'
  | 'CONFIRMED'
  | 'ARCHIVED'
  | 'COMPROMISED'
  | 'UNKNOWN'
  | 'RESET_REQUIRED'
  | 'FORCE_CHANGE_PASSWORD';

export interface BaseUserMigrationTriggerEvent<T extends string> extends BaseTriggerEvent<T> {
  request: {
      password: string;
      validationData?: StringMap;
      clientMetadata?: StringMap;
  };
  response: {
      userAttributes: StringMap;
      finalUserStatus?: UserStatus;
      messageAction?: 'RESEND' | 'SUPPRESS';
      desiredDeliveryMediums: Array<'SMS' | 'EMAIL'>;
      forceAliasCreation?: boolean;
  };
}

export type UserMigrationAuthenticationTriggerEvent = BaseUserMigrationTriggerEvent<'UserMigration_Authentication'>;

export type UserMigrationForgotPasswordTriggerEvent = BaseUserMigrationTriggerEvent<'UserMigration_ForgotPassword'>;

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-migrate-user.html
 */
export type UserMigrationTriggerEvent =
  | UserMigrationAuthenticationTriggerEvent
  | UserMigrationForgotPasswordTriggerEvent;

export type UserMigrationTriggerHandler = Handler<UserMigrationTriggerEvent>;
