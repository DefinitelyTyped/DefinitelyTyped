import { Handler } from "../../handler";

/**
 * Cognito User Pool event
 * @deprecated Please use specific event types instead
 * http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html
 */
export interface CognitoUserPoolTriggerEvent {
    version: number;
    triggerSource:
        | "PreSignUp_SignUp"
        | "PreSignUp_ExternalProvider"
        | "PostConfirmation_ConfirmSignUp"
        | "PreAuthentication_Authentication"
        | "PostAuthentication_Authentication"
        | "CustomMessage_SignUp"
        | "CustomMessage_AdminCreateUser"
        | "CustomMessage_ResendCode"
        | "CustomMessage_ForgotPassword"
        | "CustomMessage_UpdateUserAttribute"
        | "CustomMessage_VerifyUserAttribute"
        | "CustomMessage_Authentication"
        | "DefineAuthChallenge_Authentication"
        | "CreateAuthChallenge_Authentication"
        | "VerifyAuthChallengeResponse_Authentication"
        | "PreSignUp_AdminCreateUser"
        | "PostConfirmation_ConfirmForgotPassword"
        | "TokenGeneration_HostedAuth"
        | "TokenGeneration_Authentication"
        | "TokenGeneration_NewPasswordChallenge"
        | "TokenGeneration_AuthenticateDevice"
        | "TokenGeneration_RefreshTokens"
        | "UserMigration_Authentication"
        | "UserMigration_ForgotPassword";
    region: string;
    userPoolId: string;
    userName?: string | undefined;
    callerContext: {
        awsSdkVersion: string;
        clientId: string;
    };
    request: {
        userAttributes: { [key: string]: string };
        validationData?: { [key: string]: string } | undefined;
        codeParameter?: string | undefined;
        linkParameter?: string | undefined;
        usernameParameter?: string | undefined;
        newDeviceUsed?: boolean | undefined;
        session?:
            | Array<{
                challengeName:
                    | "CUSTOM_CHALLENGE"
                    | "PASSWORD_VERIFIER"
                    | "SMS_MFA"
                    | "DEVICE_SRP_AUTH"
                    | "DEVICE_PASSWORD_VERIFIER"
                    | "ADMIN_NO_SRP_AUTH"
                    | "SRP_A";
                challengeResult: boolean;
                challengeMetadata?: string | undefined;
            }>
            | undefined;
        challengeName?: string | undefined;
        privateChallengeParameters?: { [key: string]: string } | undefined;
        challengeAnswer?: string | undefined;
        password?: string | undefined;
        clientMetadata?: { [key: string]: string } | undefined;
        userNotFound?: boolean | undefined;
    };
    response: {
        autoConfirmUser?: boolean | undefined;
        autoVerifyPhone?: boolean | undefined;
        autoVerifyEmail?: boolean | undefined;
        smsMessage?: string | undefined;
        emailMessage?: string | undefined;
        emailSubject?: string | undefined;
        challengeName?: string | undefined;
        issueTokens?: boolean | undefined;
        failAuthentication?: boolean | undefined;
        publicChallengeParameters?: { [key: string]: string } | undefined;
        privateChallengeParameters?: { [key: string]: string } | undefined;
        challengeMetadata?: string | undefined;
        answerCorrect?: boolean | undefined;
        userAttributes?: { [key: string]: string } | undefined;
        finalUserStatus?: "CONFIRMED" | "RESET_REQUIRED" | undefined;
        messageAction?: "SUPPRESS" | undefined;
        desiredDeliveryMediums?: Array<"EMAIL" | "SMS"> | undefined;
        forceAliasCreation?: boolean | undefined;
        claimsOverrideDetails?:
            | {
                claimsToAddOrOverride?: { [key: string]: string } | undefined;
                claimsToSuppress?: string[] | undefined;
                groupOverrideDetails?:
                    | null
                    | {
                        groupsToOverride?: string[] | undefined;
                        iamRolesToOverride?: string[] | undefined;
                        preferredRole?: string | undefined;
                    }
                    | undefined;
            }
            | undefined;
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

export * from "./create-auth-challenge";
export * from "./custom-email-sender";
export * from "./custom-message";
export * from "./custom-sms-sender";
export * from "./define-auth-challenge";
export * from "./post-authentication";
export * from "./post-confirmation";
export * from "./pre-authentication";
export * from "./pre-signup";
export * from "./pre-token-generation";
export * from "./pre-token-generation-v2";
export * from "./user-migration";
export * from "./verify-auth-challenge-response";
