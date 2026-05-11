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

const bookingStaffRole: MicrosoftGraph.BookingStaffRole = "unknownFutureValue";

const bookingAppointmentStatus: MicrosoftGraph.BookingAppointment = {
    id: "test",
};

const authenticationMethodsPolicyMigrationState: MicrosoftGraph.AuthenticationMethodsPolicyMigrationState = "unknownFutureValue";

const conditionalAccessGuestOrExternalUserTypes: MicrosoftGraph.ConditionalAccessGuestOrExternalUserTypes = "unknownFutureValue";

const appManagementConfiguration: MicrosoftGraph.AppManagementConfiguration = {};

const authenticationMethodModes: MicrosoftGraph.AuthenticationMethodModes = "unknownFutureValue";

const authenticationStrengthRequirements: MicrosoftGraph.AuthenticationStrengthRequirements = "unknownFutureValue";

const baseAuthenticationMethod: MicrosoftGraph.BaseAuthenticationMethod = "x509Certificate";

const authenticationCombinationConfiguration: MicrosoftGraph.AuthenticationCombinationConfiguration = {};

const authenticationMethodModeDetail: MicrosoftGraph.AuthenticationMethodModeDetail = {};

const authenticationStrengthPolicy: MicrosoftGraph.AuthenticationStrengthPolicy = {};

const authenticationStrengthRoot: MicrosoftGraph.AuthenticationStrengthRoot = {};

const conditionalAccessRoot: MicrosoftGraph.ConditionalAccessRoot = {};

const authenticationContextClassReference: MicrosoftGraph.AuthenticationContextClassReference = {};

const namedLocation: MicrosoftGraph.NamedLocation = {};

const conditionalAccessPolicy: MicrosoftGraph.ConditionalAccessPolicy = {};

const conditionalAccessTemplate: MicrosoftGraph.ConditionalAccessTemplate = {};

const customSecurityAttributeDefinition: MicrosoftGraph.CustomSecurityAttributeDefinition = {};

const updateAllowedCombinationsResult: MicrosoftGraph.UpdateAllowedCombinationsResult = {};

const chatMessageHistoryItem: MicrosoftGraph.ChatMessageHistoryItem = {};

const chatMessageReaction: MicrosoftGraph.ChatMessageReaction = {};

const crossTenantIdentitySyncPolicyPartner: MicrosoftGraph.CrossTenantIdentitySyncPolicyPartner = {};

const sharepointSettings: MicrosoftGraph.SharepointSettings = {};

const crossTenantUserSyncInbound: MicrosoftGraph.CrossTenantUserSyncInbound = {};

const conditionalAccessExternalTenants: MicrosoftGraph.ConditionalAccessExternalTenants = {};

const ruleOperation: MicrosoftGraph.ExternalConnectors.RuleOperation = "unknownFutureValue";

const displayTemplate: MicrosoftGraph.ExternalConnectors.DisplayTemplate = {};

const propertyRule: MicrosoftGraph.ExternalConnectors.PropertyRule = {};

const itemIdResolver: MicrosoftGraph.ExternalConnectors.ItemIdResolver = {};

const urlMatchInfo: MicrosoftGraph.ExternalConnectors.UrlMatchInfo = {};

const searchSettings: MicrosoftGraph.ExternalConnectors.SearchSettings = {};

const meetingAttendanceReport: MicrosoftGraph.MeetingAttendanceReport = {};

const audioConferencing: MicrosoftGraph.AudioConferencing = {};

const broadcastMeetingSettings: MicrosoftGraph.BroadcastMeetingSettings = {};

const chatInfo: MicrosoftGraph.ChatInfo = {};

const joinMeetingIdSettings: MicrosoftGraph.JoinMeetingIdSettings = {};

const meetingParticipants: MicrosoftGraph.MeetingParticipants = {};

const externalActivity: MicrosoftGraph.ExternalConnectors.ExternalActivity = {};

const identity: MicrosoftGraph.ExternalConnectors.Identity = {};

const externalActivityResult: MicrosoftGraph.ExternalConnectors.ExternalActivityResult = {};

const attributeDefinitionMetadata: MicrosoftGraph.AttributeDefinitionMetadata = "ReferencedProperty";

const attributeFlowBehavior: MicrosoftGraph.AttributeFlowBehavior = "FlowWhenChanged";

const attributeFlowType: MicrosoftGraph.AttributeFlowType = "AttributeAddOnly";

const attributeMappingSourceType: MicrosoftGraph.AttributeMappingSourceType = "Function";

const attributeType: MicrosoftGraph.AttributeType = "DateTime";

const directoryDefinitionDiscoverabilities: MicrosoftGraph.DirectoryDefinitionDiscoverabilities = "UnknownFutureValue";

const entryExportStatus: MicrosoftGraph.EntryExportStatus = "Error";

const entrySyncOperation: MicrosoftGraph.EntrySyncOperation = "Update";

const escrowBehavior: MicrosoftGraph.EscrowBehavior = "IgnoreLookupReferenceResolutionFailure";

const mutability: MicrosoftGraph.Mutability = "WriteOnly";

const objectDefinitionMetadata: MicrosoftGraph.ObjectDefinitionMetadata = "BaseObjectName";

const objectFlowTypes: MicrosoftGraph.ObjectFlowTypes = "Delete";

const objectMappingMetadata: MicrosoftGraph.ObjectMappingMetadata = "Unsynchronized";

const quarantineReason: MicrosoftGraph.QuarantineReason = "IngestionInterrupted";

const scopeOperatorMultiValuedComparisonType: MicrosoftGraph.ScopeOperatorMultiValuedComparisonType = "Any";

const scopeOperatorType: MicrosoftGraph.ScopeOperatorType = "Unary";

const synchronizationDisposition: MicrosoftGraph.SynchronizationDisposition = "Escrow";

const synchronizationJobRestartScope: MicrosoftGraph.SynchronizationJobRestartScope = "ForceDeletes";

const synchronizationMetadata: MicrosoftGraph.SynchronizationMetadata = "ConfigurationFields";

const synchronizationScheduleState: MicrosoftGraph.SynchronizationScheduleState = "Paused";

const synchronizationSecret: MicrosoftGraph.SynchronizationSecret = "ConnectionString";

const synchronizationStatusCode: MicrosoftGraph.SynchronizationStatusCode = "Quarantine";

const synchronizationTaskExecutionResult: MicrosoftGraph.SynchronizationTaskExecutionResult = "EntryLevelErrors";

const accessReviewHistoryDecisionFilter: MicrosoftGraph.AccessReviewHistoryDecisionFilter = "approve";

const attributeMappingFunctionSchema: MicrosoftGraph.AttributeMappingFunctionSchema = {};

const directoryDefinition: MicrosoftGraph.DirectoryDefinition = {};

const filterOperatorSchema: MicrosoftGraph.FilterOperatorSchema = {};

const synchronizationJob: MicrosoftGraph.SynchronizationJob = {};

const synchronizationTemplate: MicrosoftGraph.SynchronizationTemplate = {};

const synchronizationSchema: MicrosoftGraph.SynchronizationSchema = {};

const attributeDefinition: MicrosoftGraph.AttributeDefinition = {};

const stringKeyStringValuePair: MicrosoftGraph.StringKeyStringValuePair = {};

const attributeDefinitionMetadataEntry: MicrosoftGraph.AttributeDefinitionMetadataEntry = {};

const referencedObject: MicrosoftGraph.ReferencedObject = {};

const attributeMapping: MicrosoftGraph.AttributeMapping = {};

const attributeMappingSource: MicrosoftGraph.AttributeMappingSource = {};

const attributeMappingParameterSchema: MicrosoftGraph.AttributeMappingParameterSchema = {};

const stringKeyAttributeMappingSourceValuePair: MicrosoftGraph.StringKeyAttributeMappingSourceValuePair = {};

const containerFilter: MicrosoftGraph.ContainerFilter = {};

const expressionInputObject: MicrosoftGraph.ExpressionInputObject = {};

const objectDefinition: MicrosoftGraph.ObjectDefinition = {};

const stringKeyObjectValuePair: MicrosoftGraph.StringKeyObjectValuePair = {};

const filter: MicrosoftGraph.Filter = {};

const filterGroup: MicrosoftGraph.FilterGroup = {};

const filterClause: MicrosoftGraph.FilterClause = {};

const filterOperand: MicrosoftGraph.FilterOperand = {};

const groupFilter: MicrosoftGraph.GroupFilter = {};

const objectDefinitionMetadataEntry: MicrosoftGraph.ObjectDefinitionMetadataEntry = {};

const objectMapping: MicrosoftGraph.ObjectMapping = {};

const objectMappingMetadataEntry: MicrosoftGraph.ObjectMappingMetadataEntry = {};

const parseExpressionResponse: MicrosoftGraph.ParseExpressionResponse = {};

const publicErrorResponse: MicrosoftGraph.PublicErrorResponse = {};

const stringKeyLongValuePair: MicrosoftGraph.StringKeyLongValuePair = {};

const synchronizationError: MicrosoftGraph.SynchronizationError = {};

const synchronizationJobApplicationParameters: MicrosoftGraph.SynchronizationJobApplicationParameters = {};

const synchronizationJobSubject: MicrosoftGraph.SynchronizationJobSubject = {};

const synchronizationJobRestartCriteria: MicrosoftGraph.SynchronizationJobRestartCriteria = {};

const synchronizationLinkedObjects: MicrosoftGraph.SynchronizationLinkedObjects = {};

const synchronizationMetadataEntry: MicrosoftGraph.SynchronizationMetadataEntry = {};

const synchronizationProgress: MicrosoftGraph.SynchronizationProgress = {};

const synchronizationQuarantine: MicrosoftGraph.SynchronizationQuarantine = {};

const synchronizationRule: MicrosoftGraph.SynchronizationRule = {};

const synchronizationSchedule: MicrosoftGraph.SynchronizationSchedule = {};

const synchronizationSecretKeyStringValuePair: MicrosoftGraph.SynchronizationSecretKeyStringValuePair = {};

const synchronizationStatus: MicrosoftGraph.SynchronizationStatus = {};

const synchronizationTaskExecution: MicrosoftGraph.SynchronizationTaskExecution = {};

const onlineMeetingRestricted: MicrosoftGraph.OnlineMeetingRestricted = {};

const loginPageLayoutConfiguration: MicrosoftGraph.LoginPageLayoutConfiguration = {};

const loginPageTextVisibilitySettings: MicrosoftGraph.LoginPageTextVisibilitySettings = {};

const azureResourceEvidence: MicrosoftGraph.SecurityNamespace.AzureResourceEvidence = {};

const layoutTemplateType: MicrosoftGraph.LayoutTemplateType = "verticalSplit";

const googleCloudResourceEvidence: MicrosoftGraph.SecurityNamespace.GoogleCloudResourceEvidence = {};

const organizationalBrandingProperties: MicrosoftGraph.OrganizationalBrandingProperties = {
    customAccountResetCredentialsUrl: "",
    customCannotAccessYourAccountText: "",
    customCannotAccessYourAccountUrl: "",
    customCSS: "",
    customCSSRelativeUrl: "",
    customForgotMyPasswordText: "",
    customPrivacyAndCookiesText: "",
    customPrivacyAndCookiesUrl: "",
    customResetItNowText: "",
    customTermsOfUseText: "",
    customTermsOfUseUrl: "",
    favicon: "",
    faviconRelativeUrl: "",
    headerBackgroundColor: "",
    headerLogo: "",
    headerLogoRelativeUrl: "",
    loginPageLayoutConfiguration: {},
    loginPageTextVisibilitySettings: {}
};

const blobContainerEvidence: MicrosoftGraph.SecurityNamespace.BlobContainerEvidence = {};
const blobEvidence: MicrosoftGraph.SecurityNamespace.BlobEvidence = {};
const fileHash: MicrosoftGraph.SecurityNamespace.FileHash = {};
const containerEvidence: MicrosoftGraph.SecurityNamespace.ContainerEvidence = {};
const containerImageEvidence: MicrosoftGraph.SecurityNamespace.ContainerImageEvidence = {};
const kubernetesPodEvidence: MicrosoftGraph.SecurityNamespace.KubernetesPodEvidence = {};
const kubernetesClusterEvidence: MicrosoftGraph.SecurityNamespace.KubernetesClusterEvidence = {};
const kubernetesControllerEvidence: MicrosoftGraph.SecurityNamespace.KubernetesControllerEvidence = {};
const kubernetesNamespaceEvidence: MicrosoftGraph.SecurityNamespace.KubernetesNamespaceEvidence = {};
const kubernetesServiceAccountEvidence: MicrosoftGraph.SecurityNamespace.KubernetesServiceAccountEvidence = {};
const kubernetesSecretEvidence: MicrosoftGraph.SecurityNamespace.KubernetesSecretEvidence = {};
const kubernetesServiceEvidence: MicrosoftGraph.SecurityNamespace.KubernetesServiceEvidence = {};
const kubernetesServicePort: MicrosoftGraph.SecurityNamespace.KubernetesServicePort = {};

const assignmentScheduleFilterByCurrentUserOptions: MicrosoftGraph.AssignmentScheduleFilterByCurrentUserOptions = "principal";

const assignmentScheduleInstanceFilterByCurrentUserOptions: MicrosoftGraph.AssignmentScheduleInstanceFilterByCurrentUserOptions = "principal";

const assignmentScheduleRequestFilterByCurrentUserOptions: MicrosoftGraph.AssignmentScheduleRequestFilterByCurrentUserOptions = "unknownFutureValue";

const eligibilityScheduleFilterByCurrentUserOptions: MicrosoftGraph.EligibilityScheduleFilterByCurrentUserOptions = "principal";

const eligibilityScheduleInstanceFilterByCurrentUserOptions: MicrosoftGraph.EligibilityScheduleInstanceFilterByCurrentUserOptions = "principal";

const eligibilityScheduleRequestFilterByCurrentUserOptions: MicrosoftGraph.EligibilityScheduleRequestFilterByCurrentUserOptions = "unknownFutureValue";

const privilegedAccessGroupAssignmentType: MicrosoftGraph.PrivilegedAccessGroupAssignmentType = "assigned";

const privilegedAccessGroupMemberType: MicrosoftGraph.PrivilegedAccessGroupMemberType = "direct";

const privilegedAccessGroupRelationships: MicrosoftGraph.PrivilegedAccessGroupRelationships = "owner";

const scheduleRequestActions: MicrosoftGraph.ScheduleRequestActions = "selfRenew";

const accountTargetContentType: MicrosoftGraph.AccountTargetContentType = "includeAll" ;

const attackSimulationOperationType: MicrosoftGraph.AttackSimulationOperationType = "createSimualation";

const coachmarkLocationType: MicrosoftGraph.CoachmarkLocationType = "unknownFutureValue";

const endUserNotificationPreference: MicrosoftGraph.EndUserNotificationPreference = "unknown";

const endUserNotificationSettingType: MicrosoftGraph.EndUserNotificationSettingType = "unknown";

const endUserNotificationType: MicrosoftGraph.EndUserNotificationType = "unknown";

const notificationDeliveryFrequency: MicrosoftGraph.NotificationDeliveryFrequency = "weekly";

const notificationDeliveryPreference: MicrosoftGraph.NotificationDeliveryPreference = "unknown";

const oAuthAppScope: MicrosoftGraph.OAuthAppScope = "sendMail";

const payloadBrand: MicrosoftGraph.PayloadBrand = "unknownFutureValue";

const payloadComplexity: MicrosoftGraph.PayloadComplexity = "unknown";

const payloadIndustry: MicrosoftGraph.PayloadIndustry = "banking";

const payloadTheme: MicrosoftGraph.PayloadTheme = "unknownFutureValue";

const simulationContentSource: MicrosoftGraph.SimulationContentSource = "unknown";

const simulationContentStatus: MicrosoftGraph.SimulationContentStatus = "unknown";

const targettedUserType: MicrosoftGraph.TargettedUserType = "unknown";

const trainingAssignedTo: MicrosoftGraph.TrainingAssignedTo = "none";

const trainingAvailabilityStatus: MicrosoftGraph.TrainingAvailabilityStatus = "unknown";

const trainingCompletionDuration: MicrosoftGraph.TrainingCompletionDuration = "week";

const trainingSettingType: MicrosoftGraph.TrainingSettingType = "custom";

const trainingType: MicrosoftGraph.TrainingType = "unknown";

const MeetingAudience: MicrosoftGraph.MeetingAudience = "everyone";

const VirtualEventAttendeeRegistrationStatus: MicrosoftGraph.VirtualEventAttendeeRegistrationStatus = "unknownFutureValue";

const meetingChatHistoryDefaultMode: MicrosoftGraph.MeetingChatHistoryDefaultMode = "none";

const virtualEventStatus: MicrosoftGraph.VirtualEventStatus = "draft";

const privilegedAccessRoot: MicrosoftGraph.PrivilegedAccessRoot = {};

const onlineMeeting: MicrosoftGraph.OnlineMeeting = {};

const onlineMeetingBase: MicrosoftGraph.OnlineMeetingBase = {};

const security: MicrosoftGraph.Security = {};

const attackSimulationRoot: MicrosoftGraph.AttackSimulationRoot = {};

const secureScoreControlProfile: MicrosoftGraph.SecureScoreControlProfile = {};

const secureScore: MicrosoftGraph.SecureScore = {};

const resourceSpecificPermissionGrant: MicrosoftGraph.ResourceSpecificPermissionGrant = {};

const itemAnalytics: MicrosoftGraph.ItemAnalytics = {};

const columnDefinition: MicrosoftGraph.ColumnDefinition = {};

const attributeSet: MicrosoftGraph.AttributeSet = {};

const onPremisesDirectorySynchronization: MicrosoftGraph.OnPremisesDirectorySynchronization = {};

const appScope: MicrosoftGraph.AppScope = {};

const targetDeviceGroup: MicrosoftGraph.TargetDeviceGroup = {};

const itemRetentionLabel: MicrosoftGraph.ItemRetentionLabel = {};

const callRecording: MicrosoftGraph.CallRecording = {};

const callTranscript: MicrosoftGraph.CallTranscript = {};

const connectedOrganization: MicrosoftGraph.ConnectedOrganization = {};

const accessPackageResourceEnvironment: MicrosoftGraph.AccessPackageResourceEnvironment = {};

const accessPackageResourceRequest: MicrosoftGraph.AccessPackageResourceRequest = {};

const entitlementManagementSettings: MicrosoftGraph.EntitlementManagementSettings = {};

const privilegedAccessScheduleInstance: MicrosoftGraph.PrivilegedAccessScheduleInstance = {};

const privilegedAccessGroupAssignmentScheduleInstance: MicrosoftGraph.PrivilegedAccessGroupAssignmentScheduleInstance = {};

const privilegedAccessScheduleRequest: MicrosoftGraph.PrivilegedAccessScheduleRequest = {};

const privilegedAccessGroupAssignmentScheduleRequest: MicrosoftGraph.PrivilegedAccessGroupAssignmentScheduleRequest = {};

const privilegedAccessSchedule: MicrosoftGraph.PrivilegedAccessSchedule = {};

const privilegedAccessGroupAssignmentSchedule: MicrosoftGraph.PrivilegedAccessGroupAssignmentSchedule = {};

const privilegedAccessGroupEligibilityScheduleInstance: MicrosoftGraph.PrivilegedAccessGroupEligibilityScheduleInstance = {};

const privilegedAccessGroupEligibilityScheduleRequest: MicrosoftGraph.PrivilegedAccessGroupEligibilityScheduleRequest = {};

const privilegedAccessGroupEligibilitySchedule: MicrosoftGraph.PrivilegedAccessGroupEligibilitySchedule = {};

const macOSDmgApp: MicrosoftGraph.MacOSDmgApp = {};

const userExperienceAnalyticsDeviceStartupProcessPerformance: MicrosoftGraph.UserExperienceAnalyticsDeviceStartupProcessPerformance = {};

const dataPolicyOperation: MicrosoftGraph.DataPolicyOperation = {};

const endUserNotification: MicrosoftGraph.EndUserNotification = {};

const training: MicrosoftGraph.Training = {};

const attackSimulationOperation: MicrosoftGraph.AttackSimulationOperation = {};

const landingPage: MicrosoftGraph.LandingPage = {};

const loginPage: MicrosoftGraph.LoginPage = {};

const payload: MicrosoftGraph.Payload = {};

const endUserNotificationDetail: MicrosoftGraph.EndUserNotificationDetail = {};

const landingPageDetail: MicrosoftGraph.LandingPageDetail = {};

const virtualEvent: MicrosoftGraph.VirtualEvent = {};

const virtualEventSession: MicrosoftGraph.VirtualEventSession = {};

const virtualEventWebinar: MicrosoftGraph.VirtualEventWebinar = {};

const virtualEventRegistration: MicrosoftGraph.VirtualEventRegistration = {};

const servicePrincipalLockConfiguration: MicrosoftGraph.ServicePrincipalLockConfiguration = {};

const subjectRightsRequestEnumeratedMailboxLocation: MicrosoftGraph.SubjectRightsRequestEnumeratedMailboxLocation = {};

const subjectRightsRequestAllSiteLocation: MicrosoftGraph.SubjectRightsRequestAllSiteLocation = {};

const subjectRightsRequestAllMailboxLocation: MicrosoftGraph.SubjectRightsRequestAllMailboxLocation = {};

const deviceLocalCredential: MicrosoftGraph.DeviceLocalCredential = {};

const deleteAction: MicrosoftGraph.DeleteAction = {};

const mentionAction: MicrosoftGraph.MentionAction = {};

const moveAction: MicrosoftGraph.MoveAction = {};

const renameAction: MicrosoftGraph.RenameAction = {};

const retentionLabelSettings: MicrosoftGraph.RetentionLabelSettings = {};

const baseEndUserNotification: MicrosoftGraph.BaseEndUserNotification = {};

const coachmarkLocation: MicrosoftGraph.CoachmarkLocation = {};

const trainingSetting: MicrosoftGraph.TrainingSetting = {};

const customTrainingSetting: MicrosoftGraph.CustomTrainingSetting = {};

const payloadDetail: MicrosoftGraph.PayloadDetail = {};

const emailPayloadDetail: MicrosoftGraph.EmailPayloadDetail = {};

const endUserNotificationSetting: MicrosoftGraph.EndUserNotificationSetting = {};

const restoreAction: MicrosoftGraph.RestoreAction = {};

const positiveReinforcementNotification: MicrosoftGraph.PositiveReinforcementNotification = {};

const includeAllAccountTargetContent: MicrosoftGraph.IncludeAllAccountTargetContent = {};

const microsoftCustomTrainingSetting: MicrosoftGraph.MicrosoftCustomTrainingSetting = {};

const microsoftTrainingAssignmentMapping: MicrosoftGraph.MicrosoftTrainingAssignmentMapping = {};

const microsoftManagedTrainingSetting: MicrosoftGraph.MicrosoftManagedTrainingSetting = {};

const noTrainingNotificationSetting: MicrosoftGraph.NoTrainingNotificationSetting = {};

const simulationNotification: MicrosoftGraph.SimulationNotification = {};

const noTrainingSetting: MicrosoftGraph.NoTrainingSetting = {};

const oAuthConsentAppDetail: MicrosoftGraph.OAuthConsentAppDetail = {};

const payloadCoachmark: MicrosoftGraph.PayloadCoachmark = {};

const trainingNotificationSetting: MicrosoftGraph.TrainingNotificationSetting = {};

const trainingReminderNotification: MicrosoftGraph.TrainingReminderNotification = {};

const communicationsApplicationInstanceIdentity: MicrosoftGraph.CommunicationsApplicationInstanceIdentity = {};

const azureCommunicationServicesUserIdentity: MicrosoftGraph.AzureCommunicationServicesUserIdentity = {};

const communicationsApplicationIdentity: MicrosoftGraph.CommunicationsApplicationIdentity = {};

const communicationsEncryptedIdentity: MicrosoftGraph.CommunicationsEncryptedIdentity = {};

const communicationsGuestIdentity: MicrosoftGraph.CommunicationsGuestIdentity = {};

const communicationsIdentitySet: MicrosoftGraph.CommunicationsIdentitySet = {};

const virtualEventRegistrationQuestionAnswer: MicrosoftGraph.VirtualEventRegistrationQuestionAnswer = {};
