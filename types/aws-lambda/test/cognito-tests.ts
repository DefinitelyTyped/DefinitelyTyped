// TODO: Update test to read all event properties, and write all result
//       properties, like the user will.

import { CognitoUserPoolTriggerHandler } from "aws-lambda";

const handler: CognitoUserPoolTriggerHandler = async (event, context, callback) => {
    num = event.version;
    event.triggerSource === 'PreSignUp_SignUp';
    event.triggerSource === 'PreSignUp_ExternalProvider';
    event.triggerSource === 'PostConfirmation_ConfirmSignUp';
    event.triggerSource === 'PreAuthentication_Authentication';
    event.triggerSource === 'PostAuthentication_Authentication';
    event.triggerSource === 'CustomMessage_SignUp';
    event.triggerSource === 'CustomMessage_AdminCreateUser';
    event.triggerSource === 'CustomMessage_ResendCode';
    event.triggerSource === 'CustomMessage_ForgotPassword';
    event.triggerSource === 'CustomMessage_UpdateUserAttribute';
    event.triggerSource === 'CustomMessage_VerifyUserAttribute';
    event.triggerSource === 'CustomMessage_Authentication';
    event.triggerSource === 'DefineAuthChallenge_Authentication';
    event.triggerSource === 'CreateAuthChallenge_Authentication';
    event.triggerSource === 'VerifyAuthChallengeResponse_Authentication';
    event.triggerSource === 'PreSignUp_AdminCreateUser';
    event.triggerSource === 'PostConfirmation_ConfirmForgotPassword';
    event.triggerSource === 'TokenGeneration_HostedAuth';
    event.triggerSource === 'TokenGeneration_Authentication';
    event.triggerSource === 'TokenGeneration_NewPasswordChallenge';
    event.triggerSource === 'TokenGeneration_AuthenticateDevice';
    event.triggerSource === 'TokenGeneration_RefreshTokens';
    event.triggerSource === 'UserMigration_Authentication';
    event.triggerSource === 'UserMigration_ForgotPassword';
    // $ExpectError
    event.triggerSource === 'NoSuch_Trigger';

    str = event.region;
    str = event.userPoolId;
    strOrUndefined = event.userName;
    str = event.callerContext.awsSdkVersion;
    str = event.callerContext.clientId;
    str = event.request.userAttributes['email'];
    str = event.request.validationData!['k1'];
    strOrUndefined = event.request.codeParameter;
    strOrUndefined = event.request.linkParameter;
    strOrUndefined = event.request.usernameParameter;
    boolOrUndefined = event.request.newDeviceUsed;
    event.request.session![0].challengeName === 'CUSTOM_CHALLENGE';
    event.request.session![0].challengeName === 'PASSWORD_VERIFIER';
    event.request.session![0].challengeName === 'SMS_MFA';
    event.request.session![0].challengeName === 'DEVICE_SRP_AUTH';
    event.request.session![0].challengeName === 'DEVICE_PASSWORD_VERIFIER';
    event.request.session![0].challengeName === 'ADMIN_NO_SRP_AUTH';
    bool = event.request.session![0].challengeResult;
    strOrUndefined = event.request.session![0].challengeMetadata;
    strOrUndefined = event.request.challengeName;
    str = event.request.privateChallengeParameters!['answer'];
    str = event.request.challengeAnswer!;
    strOrUndefined = event.request.password;
    str = event.request.clientMetadata!['action'];
    boolOrUndefined = event.response.answerCorrect;
    strOrUndefined = event.response.smsMessage;
    strOrUndefined = event.response.emailMessage;
    strOrUndefined = event.response.emailSubject;
    strOrUndefined = event.response.challengeName;
    boolOrUndefined = event.response.issueTokens;
    boolOrUndefined = event.response.failAuthentication;
    str = event.response.publicChallengeParameters!['captchaUrl'];
    str = event.response.privateChallengeParameters!['answer'];
    strOrUndefined = event.response.challengeMetadata;
    boolOrUndefined = event.response.answerCorrect;
    str = event.response.userAttributes!['username'];
    event.response.finalUserStatus === 'CONFIRMED';
    event.response.finalUserStatus === 'RESET_REQUIRED';
    event.response.messageAction === 'SUPPRESS';
    event.response.desiredDeliveryMediums === ['EMAIL'];
    event.response.desiredDeliveryMediums === ['SMS'];
    event.response.desiredDeliveryMediums === ['SMS', 'EMAIL'];
    boolOrUndefined = event.response.forceAliasCreation;

    // From AWS examples
    event.response = {
        claimsOverrideDetails: {
            claimsToAddOrOverride: {
                attribute_key2: 'attribute_value2',
                attribute_key: 'attribute_value',
            },
            claimsToSuppress: ['email'],
        },
    };
    event.response = {
        claimsOverrideDetails: {
            claimsToAddOrOverride: {
                attribute_key2: 'attribute_value2',
                attribute_key: 'attribute_value',
            },
            claimsToSuppress: ['email'],
            groupOverrideDetails: {
                groupsToOverride: ['group-A', 'group-B', 'group-C'],
                iamRolesToOverride: [
                    'arn:aws:iam::XXXXXXXXXXXX:role/sns_callerA',
                    'arn:aws:iam::XXXXXXXXX:role/sns_callerB',
                    'arn:aws:iam::XXXXXXXXXX:role/sns_callerC',
                ],
                preferredRole: 'arn:aws:iam::XXXXXXXXXXX:role/sns_caller',
            },
        },
    };
    event.response.claimsOverrideDetails!.groupOverrideDetails = null;

    callback(new Error());
    callback(null, event);
    callback(null, {
        response: event.response,
    });
    return event;
};
