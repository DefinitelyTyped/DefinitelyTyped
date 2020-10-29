// Microsoft Graph tests
// Project: https://github.com/microsoftgraph/msgraph-typescript-typings

import {
    User, Event, DateTimeTimeZone, ItemBody, ServicePrincipal,
    Invitation, Application, CallTranscriptionInfo, CancelMediaProcessingOperation, ResultInfo, CallRecords,
    IdentitySet, Identity, RiskLevel, EventMessageResponse, PermissionClassificationType, DelegatedPermissionClassification, Permission, Group, TaskStatus, TodoTask
} from "microsoft-graph";

const user: User = {
    officeLocation: "Bengaluru",
    companyName: "Microsoft",
    country: "India",
    displayName: "Muthu"
};

const startTime: DateTimeTimeZone = {
    dateTime: "2019-05-29T04:00:00.0000000"
};

const endTime: DateTimeTimeZone = {
    dateTime: "2019-05-29T05:00:00.0000000",
};

const bodyText: ItemBody = {
    contentType: "text",
    content: "Hi, Shall we meet for a cup of coffee"
};

const event: Event = {
    subject: "Meet for a coffee",
    body: bodyText,
    start: startTime,
    end: endTime
};

const servicePrincipal: ServicePrincipal = {
    accountEnabled: true,
    appDisplayName: "MyNewAppName",
    appDescription: null,
    description: "Test-Description"
};

const servicePrincipalWithAppDescription: ServicePrincipal = {
    appDescription: "Test-App-Description",
    accountEnabled: null,
    description: null
};

const invitation: Invitation = {
    invitedUserDisplayName: null,
    invitedUserType: undefined,
    inviteRedeemUrl: "url"
};

const application: Application = {
    description: null,
    displayName: "Test-Application-Name",
    appRoles: undefined,
    notes: ""
};

const callTranscriptInfo: CallTranscriptionInfo = {
    state: "active",
    lastModifiedDateTime: null
};

const resultInfo: ResultInfo = {
    code: 3,
    subcode: 4
};

const cancelMediaProcessingOperation: CancelMediaProcessingOperation = {
    id: "testId",
    resultInfo
};

const callType: CallRecords.CallType = "unknown";

const callRecord: CallRecords.CallRecord = {
    type: callType,
};

// Testing cross namespace inheritance
// id comes from Entity which is defined in parent namespace
const session: CallRecords.Session = {
    id: "TestId"
};

const deviceIdentity: Identity = {
    displayName: "TestDisplayName"
};

const identitySet: IdentitySet = {
    device: deviceIdentity
};

// Testing cross namespace property reference
const info: CallRecords.ParticipantEndpoint = {
    identity: identitySet
};

const riskLevel: RiskLevel = "hidden";

const eventMessageResponse: EventMessageResponse = {
    type: null
};

const permissionClassificationType: PermissionClassificationType = "medium";

const delegatedPermissionClassification: DelegatedPermissionClassification = {
    classification: permissionClassificationType
};

const permission: Permission = {
    link: null,
    id: "string"
};

const userFeedback: CallRecords.UserFeedback = {
    rating: "notRated",
    text: null
};

const group: Group = {
    mailEnabled: true,
    classification: null,
    onPremisesDomainName: "test"
};

const todoTask: TodoTask = {
    status: "notStarted",
    importance: "low"
};
