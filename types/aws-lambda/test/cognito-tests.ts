import {
    Handler,
    PreSignUpTriggerEvent, PreSignUpTriggerHandler,
    PostConfirmationTriggerEvent, PostConfirmationTriggerHandler,
    PreAuthenticationTriggerEvent, PreAuthenticationTriggerHandler,
    PostAuthenticationTriggerEvent, PostAuthenticationTriggerHandler,
    CreateAuthChallengeTriggerEvent, CreateAuthChallengeTriggerHandler,
    DefineAuthChallengeTriggerEvent, DefineAuthChallengeTriggerHandler,
    VerifyAuthChallengeResponseTriggerEvent, VerifyAuthChallengeResponseTriggerHandler,
    PreTokenGenerationTriggerEvent, PreTokenGenerationTriggerHandler,
    UserMigrationTriggerEvent, UserMigrationTriggerHandler,
    CustomMessageTriggerEvent, CustomMessageTriggerHandler,
    CustomEmailSenderTriggerEvent, CustomEmailSenderTriggerHandler,
} from 'aws-lambda';

type CognitoTriggerEvent =
    | PreSignUpTriggerEvent
    | PostConfirmationTriggerEvent
    | PreAuthenticationTriggerEvent
    | PostAuthenticationTriggerEvent
    | DefineAuthChallengeTriggerEvent
    | CreateAuthChallengeTriggerEvent
    | VerifyAuthChallengeResponseTriggerEvent
    | PreTokenGenerationTriggerEvent
    | UserMigrationTriggerEvent
    | CustomMessageTriggerEvent
    | CustomEmailSenderTriggerEvent;

const baseTest: Handler<CognitoTriggerEvent> = async (event: CognitoTriggerEvent, _, callback) => {
    str = event.version;
    str = event.region;
    str = event.userPoolId;
    str = event.triggerSource;
    str = event.userName;
    str = event.callerContext.awsSdkVersion;
    str = event.callerContext.clientId;

    obj = event.request;
    obj = event.response;

    callback(new Error());
    callback(null, event);
    callback(null, { response: event.response });
    return event;
};

const preSignUp: PreSignUpTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    str = request.validationData!['k1'];
    str = request.clientMetadata!['action'];

    bool = response.autoConfirmUser;
    bool = response.autoVerifyEmail;
    bool = response.autoVerifyPhone;

    triggerSource === 'PreSignUp_SignUp';
    triggerSource === 'PreSignUp_ExternalProvider';
    triggerSource === 'PreSignUp_AdminCreateUser';

    // $ExpectError
    triggerSource === 'PostConfirmation_ConfirmSignUp';

    // $ExpectError
    request.session![0].challengeName === 'CUSTOM_CHALLENGE';
};

const postConfirmation: PostConfirmationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    str = request.clientMetadata!['action'];

    objectOrUndefined = response;

    triggerSource === 'PostConfirmation_ConfirmSignUp';
    triggerSource === 'PostConfirmation_ConfirmForgotPassword';

    // $ExpectError
    triggerSource === 'PreSignUp_ExternalProvider';
    // $ExpectError
    request.session![0].challengeName === 'CUSTOM_CHALLENGE';
    // $ExpectError
    str = request.validationData!['k1'];
    // $ExpectError
    bool = response.autoVerifyEmail;
    // $ExpectError
    bool = response.autoVerifyPhone;
};

const defineAuthChallenge: DefineAuthChallengeTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    array = request.session;

    const session = request.session[0];
    session.challengeName === 'CUSTOM_CHALLENGE';
    session.challengeName === 'PASSWORD_VERIFIER';
    session.challengeName === 'SMS_MFA';
    session.challengeName === 'DEVICE_SRP_AUTH';
    session.challengeName === 'DEVICE_PASSWORD_VERIFIER';
    session.challengeName === 'ADMIN_NO_SRP_AUTH';
    session.challengeName === 'SRP_A';
    bool = session.challengeResult;
    boolOrUndefined = request.userNotFound;

    str = response.challengeName;
    bool = response.failAuthentication;
    bool = response.issueTokens;

    triggerSource === 'DefineAuthChallenge_Authentication';

    // $ExpectError
    nullOrUndefined = request.userAttributes;
};

const createAuthChallenge: CreateAuthChallengeTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    str = request.challengeName;
    array = request.session;
    str = request.session[0].challengeName;
    bool = request.session[0].challengeResult;
    strOrUndefined = request.session[0].challengeMetadata;
    boolOrUndefined = request.userNotFound;

    obj = response.publicChallengeParameters;
    str = response.publicChallengeParameters['foo'];
    obj = response.privateChallengeParameters;
    str = response.privateChallengeParameters['bar'];
    str = response.challengeMetadata;

    triggerSource === 'CreateAuthChallenge_Authentication';

    // $ExpectError
    nullOrUndefined = request.userAttributes;
};

const validateAuthChallengeResponse: VerifyAuthChallengeResponseTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    obj = request.privateChallengeParameters;
    str = request.privateChallengeParameters['foo'];
    str = request.challengeAnswer;
    boolOrUndefined = request.userNotFound;

    bool = response.answerCorrect;

    triggerSource === 'VerifyAuthChallengeResponse_Authentication';
};

const preAuthentication: PreAuthenticationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    boolOrUndefined = request.userNotFound;

    objectOrUndefined = response;

    triggerSource === 'PreAuthentication_Authentication';
};

const postAuthentication: PostAuthenticationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    bool = request.newDeviceUsed;

    objectOrUndefined = response;

    triggerSource === 'PostAuthentication_Authentication';
};

const preTokenGeneration: PreTokenGenerationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    obj = request.groupConfiguration;
    strArrayOrUndefined = request.groupConfiguration.groupsToOverride;
    strArrayOrUndefined = request.groupConfiguration.iamRolesToOverride;
    strOrUndefined = request.groupConfiguration.preferredRole;

    obj = response.claimsOverrideDetails;
    objectOrUndefined = response.claimsOverrideDetails.claimsToAddOrOverride;
    strArrayOrUndefined = response.claimsOverrideDetails.claimsToSuppress;

    const groupOverrideDetails = response.claimsOverrideDetails.groupOverrideDetails!;
    strArrayOrUndefined = groupOverrideDetails.groupsToOverride;
    strArrayOrUndefined = groupOverrideDetails.iamRolesToOverride;
    strOrUndefined = groupOverrideDetails.preferredRole;

    triggerSource === 'TokenGeneration_AuthenticateDevice';
    triggerSource === 'TokenGeneration_Authentication';
    triggerSource === 'TokenGeneration_HostedAuth';
    triggerSource === 'TokenGeneration_NewPasswordChallenge';
    triggerSource === 'TokenGeneration_RefreshTokens';
};

const userMigration: UserMigrationTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    str = request.password;
    objectOrUndefined = request.validationData;
    str = request.validationData!.foobar;

    obj = response.userAttributes;
    str = response.userAttributes.email;
    strOrUndefined = response.finalUserStatus;
    response.finalUserStatus === 'UNCONFIRMED';
    response.finalUserStatus === 'CONFIRMED';
    response.finalUserStatus === 'ARCHIVED';
    response.finalUserStatus === 'COMPROMISED';
    response.finalUserStatus === 'UNKNOWN';
    response.finalUserStatus === 'RESET_REQUIRED';
    response.finalUserStatus === 'FORCE_CHANGE_PASSWORD';
    boolOrUndefined = response.forceAliasCreation;
    response.messageAction === 'RESEND';
    response.messageAction === 'SUPPRESS';
    response.desiredDeliveryMediums === ['EMAIL'];
    response.desiredDeliveryMediums === ['SMS'];
    response.desiredDeliveryMediums === ['SMS', 'EMAIL'];

    triggerSource === 'UserMigration_Authentication';
    triggerSource === 'UserMigration_ForgotPassword';
};

const customMessage: CustomMessageTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    obj = request.userAttributes;
    str = request.userAttributes.email;
    str = request.codeParameter;
    str = request.usernameParameter;

    str = response.smsMessage;
    str = response.emailMessage;
    str = response.emailSubject;

    triggerSource === 'CustomMessage_AdminCreateUser';
    triggerSource === 'CustomMessage_Authentication';
    triggerSource === 'CustomMessage_ForgotPassword';
    triggerSource === 'CustomMessage_ResendCode';
    triggerSource === 'CustomMessage_SignUp';
    triggerSource === 'CustomMessage_UpdateUserAttribute';
    triggerSource === 'CustomMessage_VerifyUserAttribute';
};

const customEmailSender: CustomEmailSenderTriggerHandler = async (event, _, callback) => {
    const { request, response, triggerSource } = event;

    str = request.type;
    strOrNull = request.code;
    obj = request.userAttributes;
    objectOrUndefined = request.clientMetadata;

    triggerSource === 'CustomEmailSender_AdminCreateUser';
    triggerSource === 'CustomEmailSender_VerifyUserAttribute';
    triggerSource === 'CustomEmailSender_UpdateUserAttribute';
    triggerSource === 'CustomEmailSender_ResendCode';
    triggerSource === 'CustomEmailSender_SignUp';
    triggerSource === 'CustomEmailSender_AccountTakeOverNotification';
};
