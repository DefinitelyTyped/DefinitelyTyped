export interface StringMap {
    [name: string]: string;
}

export type ChallengeName =
    | 'PASSWORD_VERIFIER'
    | 'SMS_MFA'
    | 'DEVICE_SRP_AUTH'
    | 'DEVICE_PASSWORD_VERIFIER'
    | 'ADMIN_NO_SRP_AUTH'
    | 'SRP_A';

export interface ChallengeResult {
    challengeName: ChallengeName;
    challengeResult: boolean;
    challengeMetadata?: undefined;
}

export interface CustomChallengeResult {
    challengeName: 'CUSTOM_CHALLENGE';
    challengeResult: boolean;
    challengeMetadata?: string | undefined;
}

/**
 * Common attributes shared by all User Pool Lambda Trigger Events
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html#cognito-user-pools-lambda-trigger-event-parameter-shared
 */
export interface BaseTriggerEvent<T extends string> {
    version: string;
    region: string;
    userPoolId: string;
    triggerSource: T;
    userName: string;
    callerContext: {
        awsSdkVersion: string;
        clientId: string;
    };
    request: {};
    response: {};
}
