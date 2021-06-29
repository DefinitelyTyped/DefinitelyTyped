import { Handler } from '../../handler';

/**
 * Cognito User Pool event
 * @deprecated Please use specific event types instead
 * http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html
 */
export interface CognitoUserPoolTriggerEvent {
    version: number;
    triggerSource:
        | 'PreSignUp_SignUp'
        | 'PreSignUp_ExternalProvider'
        | 'PostConfirmation_ConfirmSignUp'
        | 'PreAuthentication_Authentication'
        | 'PostAuthentication_Authentication'
        | 'CustomMessage_SignUp'
        | 'CustomMessage_AdminCreateUser'
        | 'CustomMessage_ResendCode'
        | 'CustomMessage_ForgotPassword'
        | 'CustomMessage_UpdateUserAttribute'
        | 'CustomMessage_VerifyUserAttribute'
        | 'CustomMessage_Authentication'
        | 'DefineAuthChallenge_Authentication'
        | 'CreateAuthChallenge_Authentication'
        | 'VerifyAuthChallengeResponse_Authentication'
        | 'PreSignUp_AdminCreateUser'
        | 'PostConfirmation_ConfirmForgotPassword'
        | 'TokenGeneration_HostedAuth'
        | 'TokenGeneration_Authentication'
        | 'TokenGeneration_NewPasswordChallenge'
        | 'TokenGeneration_AuthenticateDevice'
        | 'TokenGeneration_RefreshTokens'
        | 'UserMigration_Authentication'
        | 'UserMigration_ForgotPassword';
    region: string;
    userPoolId: string;
    userName?: string;
    callerContext: {
        awsSdkVersion: string;
        clientId: string;
    };
    request: {
        userAttributes: { [key: string]: string };
        validationData?: { [key: string]: string };
        codeParameter?: string;
        linkParameter?: string;
        usernameParameter?: string;
        newDeviceUsed?: boolean;
        session?: Array<{
            challengeName:
                | 'CUSTOM_CHALLENGE'
                | 'PASSWORD_VERIFIER'
                | 'SMS_MFA'
                | 'DEVICE_SRP_AUTH'
                | 'DEVICE_PASSWORD_VERIFIER'
                | 'ADMIN_NO_SRP_AUTH'
                | 'SRP_A';
            challengeResult: boolean;
            challengeMetadata?: string;
        }>;
        challengeName?: string;
        privateChallengeParameters?: { [key: string]: string };
        challengeAnswer?: string;
        password?: string;
        clientMetadata?: { [key: string]: string };
        userNotFound?: boolean;
    };
    response: {
        autoConfirmUser?: boolean;
        autoVerifyPhone?: boolean;
        autoVerifyEmail?: boolean;
        smsMessage?: string;
        emailMessage?: string;
        emailSubject?: string;
        challengeName?: string;
        issueTokens?: boolean;
        failAuthentication?: boolean;
        publicChallengeParameters?: { [key: string]: string };
        privateChallengeParameters?: { [key: string]: string };
        challengeMetadata?: string;
        answerCorrect?: boolean;
        userAttributes?: { [key: string]: string };
        finalUserStatus?: 'CONFIRMED' | 'RESET_REQUIRED';
        messageAction?: 'SUPPRESS';
        desiredDeliveryMediums?: Array<'EMAIL' | 'SMS'>;
        forceAliasCreation?: boolean;
        claimsOverrideDetails?: {
            claimsToAddOrOverride?: { [key: string]: string };
            claimsToSuppress?: string[];
            groupOverrideDetails?: null | {
                groupsToOverride?: string[];
                iamRolesToOverride?: string[];
                preferredRole?: string;
            };
        };
    };
}

/**
 * @deprecated Please use specific event types instead
 */
export type CognitoUserPoolEvent = CognitoUserPoolTriggerEvent;

/**
 * @deprecated Please use specific event handler types instead
 */
export type CognitoUserPoolTriggerHandler = Handler<CognitoUserPoolTriggerEvent>;

export * from './create-auth-challenge';
export * from './custom-message';
export * from './custom-email-sender';
export * from './define-auth-challenge';
export * from './post-authentication';
export * from './post-confirmation';
export * from './pre-authentication';
export * from './pre-signup';
export * from './pre-token-generation';
export * from './user-migration';
export * from './verify-auth-challenge-response';
