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

// taking the first item from `GET /users` with param `$expand: "memberOf"`
const userExpandsMemberOf: MicrosoftGraph.User = {
    businessPhones: [
        "+1 425 555 0109"
    ],
    displayName: "Adele Vance",
    givenName: "Adele",
    jobTitle: "Retail Manager",
    mail: "AdeleV@mydevspace.onmicrosoft.com",
    mobilePhone: null,
    officeLocation: "18/2111",
    preferredLanguage: "en-US",
    surname: "Vance",
    userPrincipalName: "AdeleV@mydevspace.onmicrosoft.com",
    id: "3a8bd69b-a925-4d5d-82d6-be687cf82879",
    memberOf: [
        {
            // "@odata.type": "#microsoft.graph.group",
            id: "4cdfebc0-7cef-4794-a329-dd171b7ff392",
            deletedDateTime: null,
            classification: null,
            createdDateTime: "2021-06-07T09:43:45Z",
            creationOptions: [],
            description: "this is nice",
            displayName: "nice group",
            expirationDateTime: null,
            groupTypes: [
                "Unified"
            ],
            // "isAssignableToRole": null,
            mail: "nicegroup@mydevspace.onmicrosoft.com",
            mailEnabled: true,
            mailNickname: "nicegroup",
            membershipRule: null,
            membershipRuleProcessingState: null,
            onPremisesDomainName: null,
            onPremisesLastSyncDateTime: null,
            onPremisesNetBiosName: null,
            onPremisesSamAccountName: null,
            onPremisesSecurityIdentifier: null,
            onPremisesSyncEnabled: null,
            preferredDataLocation: null,
            preferredLanguage: null,
            proxyAddresses: [
                "SPO:SPO_d62559f0-0c35-4e20-b215-e6eca66c51ce@SPO_6dba5044-8186-49dd-9f5d-0709a00d8b52",
                "SMTP:nicegroup@mydevspace.onmicrosoft.com"
            ],
            renewedDateTime: "2021-06-07T09:43:45Z",
            resourceBehaviorOptions: [],
            resourceProvisioningOptions: [],
            securityEnabled: false,
            securityIdentifier: "S-1-12-1-1289743296-1200912647-400370082-2465431323",
            theme: null,
            visibility: "Public",
            onPremisesProvisioningErrors: []
        }
    ]
};

const group: MicrosoftGraph.Group = {
    id: "34cd1266-bb4a-4844-a739-96a46afb660d",
    deletedDateTime: null,
    classification: null,
    createdDateTime: "2021-06-07T09:42:00Z",
    creationOptions: [
        "Team",
        "ExchangeProvisioningFlags:3552"
    ],
    description: "mydevspace",
    displayName: "mydevspace",
    expirationDateTime: null,
    groupTypes: [
        "Unified"
    ],
    // "isAssignableToRole": null,
    mail: "mydevspace@mydevspace.onmicrosoft.com",
    mailEnabled: true,
    mailNickname: "mydevspace",
    membershipRule: null,
    membershipRuleProcessingState: null,
    onPremisesDomainName: null,
    onPremisesLastSyncDateTime: null,
    onPremisesNetBiosName: null,
    onPremisesSamAccountName: null,
    onPremisesSecurityIdentifier: null,
    onPremisesSyncEnabled: null,
    preferredDataLocation: null,
    preferredLanguage: null,
    proxyAddresses: [
        "SPO:SPO_0811b6a3-76f4-4b62-8178-d42d78d7f99f@SPO_6fba5044-8186-49dd-9f5d-0709b00d8b52",
        "SMTP:mydevspace@mydevspace.onmicrosoft.com"
    ],
    renewedDateTime: "2021-06-07T09:42:00Z",
    resourceBehaviorOptions: [
        "HideGroupInOutlook",
        "SubscribeMembersToCalendarEventsDisabled",
        "WelcomeEmailDisabled"
    ],
    resourceProvisioningOptions: [
        "Team"
    ],
    securityEnabled: false,
    securityIdentifier: "S-1-12-1-881854822-1212463946-2727754121-225901418",
    theme: null,
    visibility: "Public",
    onPremisesProvisioningErrors: [],
    memberOf: []
};
