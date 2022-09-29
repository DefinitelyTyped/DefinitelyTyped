// Microsoft Graph tests
// Project: https://github.com/microsoftgraph/msgraph-typescript-typings

import * as MicrosoftGraph from "microsoft-graph";

const user: MicrosoftGraph.User = {
    officeLocation: "Bengaluru",
    companyName: "Microsoft",
    country: "India",
    displayName: "Muthu"
};

const startTime: MicrosoftGraph.DateTimeTimeZone = {
    dateTime: "2019-05-29T04:00:00.0000000"
};

const endTime: MicrosoftGraph.DateTimeTimeZone = {
    dateTime: "2019-05-29T05:00:00.0000000",
};

const bodyText: MicrosoftGraph.ItemBody = {
    contentType: "text",
    content: "Hi, Shall we meet for a cup of coffee"
};

const event: MicrosoftGraph.Event = {
    subject: "Meet for a coffee",
    body: bodyText,
    start: startTime,
    end: endTime
};

const servicePrincipal: MicrosoftGraph.ServicePrincipal = {
    accountEnabled: true,
    appDisplayName: "MyNewAppName",
    appDescription: null,
    description: "Test-Description"
};

const servicePrincipalWithAppDescription: MicrosoftGraph.ServicePrincipal = {
    appDescription: "Test-App-Description",
    accountEnabled: null,
    description: null
};

const invitation: MicrosoftGraph.Invitation = {
    invitedUserDisplayName: null,
    invitedUserType: undefined,
    inviteRedeemUrl: "url"
};

const application: MicrosoftGraph.Application = {
    description: null,
    displayName: "Test-Application-Name",
    appRoles: undefined,
    notes: ""
};

const callTranscriptInfo: MicrosoftGraph.CallTranscriptionInfo = {
    state: "active",
    lastModifiedDateTime: null
};

const resultInfo: MicrosoftGraph.ResultInfo = {
    code: 3,
    subcode: 4
};

const cancelMediaProcessingOperation: MicrosoftGraph.CancelMediaProcessingOperation = {
    id: "testId",
    resultInfo
};

const callType: MicrosoftGraph.CallRecords.CallType = "unknown";

const callRecord: MicrosoftGraph.CallRecords.CallRecord = {
    type: callType,
};

// Testing cross namespace inheritance
// id comes from Entity which is defined in parent namespace
const session: MicrosoftGraph.CallRecords.Session = {
    id: "TestId"
};

const deviceIdentity: MicrosoftGraph.Identity = {
    displayName: "TestDisplayName"
};

const identitySet: MicrosoftGraph.IdentitySet = {
    device: deviceIdentity
};

// Testing cross namespace property reference
const info: MicrosoftGraph.CallRecords.ParticipantEndpoint = {
    identity: identitySet
};

const riskLevel: MicrosoftGraph.RiskLevel = "hidden";

const eventMessageResponse: MicrosoftGraph.EventMessageResponse = {
    type: null
};

const permissionClassificationType: MicrosoftGraph.PermissionClassificationType = "medium";

const delegatedPermissionClassification: MicrosoftGraph.DelegatedPermissionClassification = {
    classification: permissionClassificationType
};

const permission: MicrosoftGraph.Permission = {
    link: null,
    id: "string"
};

const userFeedback: MicrosoftGraph.CallRecords.UserFeedback = {
    rating: "notRated",
    text: null
};

const group: MicrosoftGraph.Group = {
    mailEnabled: true,
    classification: null,
    onPremisesDomainName: "test"
};

const todoTask: MicrosoftGraph.TodoTask = {
    status: "notStarted",
    importance: "low"
};

const lobbyBypassScope: MicrosoftGraph.LobbyBypassScope = "organizer";

const oneNoteUserRole: MicrosoftGraph.OnenoteUserRole = "Owner";

const conditionalAccessGrantControl: MicrosoftGraph.ConditionalAccessGrantControl = "passwordChange";

const authenticationMethodState: MicrosoftGraph.AuthenticationMethodState = "disabled";

const applicationTemplate: MicrosoftGraph.ApplicationTemplate = {
    categories: [],
    logoUrl: "test"
};

const chatType: MicrosoftGraph.ChatType = "group";

const featureRolloutPolicy: MicrosoftGraph.FeatureRolloutPolicy = {
    description: "TEST_DESC",
    displayName: "TEST_NAME"
};

const consentRequestFilterByCurrentUserOptions: MicrosoftGraph.ConsentRequestFilterByCurrentUserOptions = "reviewer";

const initiatorType: MicrosoftGraph.InitiatorType = "user";

const identityUserFlowAttributeDataType: MicrosoftGraph.IdentityUserFlowAttributeDataType = "string";

const enrollmentState: MicrosoftGraph.EnrollmentState = "enrolled";

const authorizationPolicy: MicrosoftGraph.AuthorizationPolicy = {
    guestUserRoleId: "TEST_ID",
    displayName: "TEST_NAME"
};

const deviceEnrollmentType: MicrosoftGraph.DeviceEnrollmentType = "windowsCoManagement";

const applicationStatus: MicrosoftGraph.Application = {
    disabledByMicrosoftStatus: "TEST_VAL"
};

const bodyType: MicrosoftGraph.BodyType = "text";

const channel: MicrosoftGraph.Channel = {
    description: "Test",
};

const countryLookupMethodType: MicrosoftGraph.CountryLookupMethodType = "clientIpAddress";

const volumeType: MicrosoftGraph.VolumeType = "unknownFutureValue";

const win32LobAppDeliveryOptimizationPriority: MicrosoftGraph.Win32LobAppDeliveryOptimizationPriority = "foreground";

const compliance: MicrosoftGraph.Compliance = {};

const columnTypes: MicrosoftGraph.ColumnTypes = "approvalStatus";

const broadcastMeetingAudience: MicrosoftGraph.BroadcastMeetingAudience = "unknownFutureValue";

const filterMode: MicrosoftGraph.FilterMode = "include";

const policyPlatformType: MicrosoftGraph.PolicyPlatformType = "androidForWork";

const dataSubjectType: MicrosoftGraph.DataSubjectType = "teacher";

const advancedConfigState: MicrosoftGraph.AdvancedConfigState = "disabled";

const messageActionFlag: MicrosoftGraph.MessageActionFlag = "read";

const stagedFeatureName: MicrosoftGraph.StagedFeatureName = "seamlessSso";

const accessReviewExpirationBehavior: MicrosoftGraph.AccessReviewExpirationBehavior = "acceptAccessRecommendation";

const roleEligibilityScheduleFilterByCurrentUserOptions: MicrosoftGraph.RoleEligibilityScheduleFilterByCurrentUserOptions = "principal";

const bookingPriceType: MicrosoftGraph.BookingPriceType = "undefined";

const longRunningOperationStatus: MicrosoftGraph.LongRunningOperationStatus = "succeeded";

const album: MicrosoftGraph.Album = {
    coverImageItemId: "test",
};

const bookingsAvailabilityStatus: MicrosoftGraph.BookingsAvailabilityStatus = "available";

const appliedConditionalAccessPolicyResult: MicrosoftGraph.BookingsAvailabilityStatus = "available";
