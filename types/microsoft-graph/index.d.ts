// Type definitions for non-npm package microsoft-graph 1.41
// Project: https://github.com/microsoftgraph/msgraph-typescript-typings
// Definitions by: Microsoft Graph Team <https://github.com/microsoftgraph>
//                 Michael Mainer <https://github.com/MIchaelMainer>
//                 Peter Ombwa <https://github.com/peombwa>
//                 Mustafa Zengin <https://github.com/zengin>
//                 DeVere Dyett <https://github.com/ddyett>
//                 Nikitha Udaykumar Chettiar <https://github.com/nikithauc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace microsoftgraph;

export type NullableOption<T> = T | null;

export type AppliedConditionalAccessPolicyResult =
    | "success"
    | "failure"
    | "notApplied"
    | "notEnabled"
    | "unknown"
    | "unknownFutureValue";
export type ConditionalAccessStatus = "success" | "failure" | "notApplied" | "unknownFutureValue";
export type GroupType = "unifiedGroups" | "azureAD" | "unknownFutureValue";
export type InitiatorType = "user" | "application" | "system" | "unknownFutureValue";
export type OperationResult = "success" | "failure" | "timeout" | "unknownFutureValue";
export type ProvisioningAction =
    | "other"
    | "create"
    | "delete"
    | "disable"
    | "update"
    | "stagedDelete"
    | "unknownFutureValue";
export type ProvisioningResult = "success" | "failure" | "skipped" | "warning" | "unknownFutureValue";
export type ProvisioningStatusErrorCategory = "failure" | "nonServiceFailure" | "success" | "unknownFutureValue";
export type ProvisioningStepType =
    | "import"
    | "scoping"
    | "matching"
    | "processing"
    | "referenceResolution"
    | "export"
    | "unknownFutureValue";
export type RiskDetail =
    | "none"
    | "adminGeneratedTemporaryPassword"
    | "userPerformedSecuredPasswordChange"
    | "userPerformedSecuredPasswordReset"
    | "adminConfirmedSigninSafe"
    | "aiConfirmedSigninSafe"
    | "userPassedMFADrivenByRiskBasedPolicy"
    | "adminDismissedAllRiskForUser"
    | "adminConfirmedSigninCompromised"
    | "hidden"
    | "adminConfirmedUserCompromised"
    | "unknownFutureValue";
export type RiskEventType =
    | "unlikelyTravel"
    | "anonymizedIPAddress"
    | "maliciousIPAddress"
    | "unfamiliarFeatures"
    | "malwareInfectedIPAddress"
    | "suspiciousIPAddress"
    | "leakedCredentials"
    | "investigationsThreatIntelligence"
    | "generic"
    | "adminConfirmedUserCompromised"
    | "mcasImpossibleTravel"
    | "mcasSuspiciousInboxManipulationRules"
    | "investigationsThreatIntelligenceSigninLinked"
    | "maliciousIPAddressValidCredentialsBlockedIP"
    | "unknownFutureValue";
export type RiskLevel = "low" | "medium" | "high" | "hidden" | "none" | "unknownFutureValue";
export type RiskState =
    | "none"
    | "confirmedSafe"
    | "remediated"
    | "dismissed"
    | "atRisk"
    | "confirmedCompromised"
    | "unknownFutureValue";
export type AuthenticationMethodState = "enabled" | "disabled";
export type AuthenticationMethodTargetType = "user" | "group" | "unknownFutureValue";
export type AuthenticatorAppFeatureSettings = "requireNumberMatching";
export type ExternalEmailOtpState = "default" | "enabled" | "disabled" | "unknownFutureValue";
export type Fido2RestrictionEnforcementType = "allow" | "block" | "unknownFutureValue";
export type MicrosoftAuthenticatorAuthenticationMode = "deviceBasedPush" | "push" | "any";
export type IdentityUserFlowAttributeDataType =
    | "string"
    | "boolean"
    | "int64"
    | "stringCollection"
    | "dateTime"
    | "unknownFutureValue";
export type IdentityUserFlowAttributeInputType =
    | "textBox"
    | "dateTimeDropdown"
    | "radioSingleSelect"
    | "dropdownSingleSelect"
    | "emailBox"
    | "checkboxMultiSelect";
export type IdentityUserFlowAttributeType = "builtIn" | "custom" | "required" | "unknownFutureValue";
export type UserFlowType =
    | "signUp"
    | "signIn"
    | "signUpOrSignIn"
    | "passwordReset"
    | "profileUpdate"
    | "resourceOwner"
    | "unknownFutureValue";
export type AllowInvitesFrom =
    | "none"
    | "adminsAndGuestInviters"
    | "adminsGuestInvitersAndAllMembers"
    | "everyone"
    | "unknownFutureValue";
export type PermissionClassificationType = "low" | "medium" | "high" | "unknownFutureValue";
export type PermissionType = "application" | "delegated" | "delegatedUserConsentable";
export type PhoneType =
    | "home"
    | "business"
    | "mobile"
    | "other"
    | "assistant"
    | "homeFax"
    | "businessFax"
    | "otherFax"
    | "pager"
    | "radio";
export type BodyType = "text" | "html";
export type EducationAddedStudentAction = "none" | "assignIfOpen" | "unknownFutureValue";
export type EducationAssignmentStatus = "draft" | "published" | "assigned" | "unknownFutureValue";
export type EducationSubmissionStatus = "working" | "submitted" | "released" | "returned" | "unknownFutureValue";
export type EducationExternalSource = "sis" | "manual" | "unknownFutureValue";
export type EducationGender = "female" | "male" | "other" | "unknownFutureValue";
export type EducationUserRole = "student" | "teacher" | "none" | "unknownFutureValue";
export type WorkbookOperationStatus = "notStarted" | "running" | "succeeded" | "failed";
export type ActivityDomain = "unknown" | "work" | "personal" | "unrestricted";
export type AttendeeType = "required" | "optional" | "resource";
export type FreeBusyStatus = "unknown" | "free" | "tentative" | "busy" | "oof" | "workingElsewhere";
export type LocationType =
    | "default"
    | "conferenceRoom"
    | "homeAddress"
    | "businessAddress"
    | "geoCoordinates"
    | "streetAddress"
    | "hotel"
    | "restaurant"
    | "localBusiness"
    | "postalAddress";
export type LocationUniqueIdType = "unknown" | "locationStore" | "directory" | "private" | "bing";
export type PhysicalAddressType = "unknown" | "home" | "business" | "other";
export type BookingType = "unknown" | "standard" | "reserved";
export type AttachmentType = "file" | "item" | "reference";
export type AutomaticRepliesStatus = "disabled" | "alwaysEnabled" | "scheduled";
export type CalendarColor =
    | "auto"
    | "lightBlue"
    | "lightGreen"
    | "lightOrange"
    | "lightGray"
    | "lightYellow"
    | "lightTeal"
    | "lightPink"
    | "lightBrown"
    | "lightRed"
    | "maxColor";
export type CalendarRoleType =
    | "none"
    | "freeBusyRead"
    | "limitedRead"
    | "read"
    | "write"
    | "delegateWithoutPrivateEventAccess"
    | "delegateWithPrivateEventAccess"
    | "custom";
export type CalendarSharingAction = "accept" | "acceptAndViewCalendar" | "viewCalendar" | "addThisCalendar";
export type CalendarSharingActionImportance = "primary" | "secondary";
export type CalendarSharingActionType = "accept";
export type CategoryColor =
    | "none"
    | "preset0"
    | "preset1"
    | "preset2"
    | "preset3"
    | "preset4"
    | "preset5"
    | "preset6"
    | "preset7"
    | "preset8"
    | "preset9"
    | "preset10"
    | "preset11"
    | "preset12"
    | "preset13"
    | "preset14"
    | "preset15"
    | "preset16"
    | "preset17"
    | "preset18"
    | "preset19"
    | "preset20"
    | "preset21"
    | "preset22"
    | "preset23"
    | "preset24";
export type DayOfWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
export type DelegateMeetingMessageDeliveryOptions =
    | "sendToDelegateAndInformationToPrincipal"
    | "sendToDelegateAndPrincipal"
    | "sendToDelegateOnly";
export type EventType = "singleInstance" | "occurrence" | "exception" | "seriesMaster";
export type ExchangeIdFormat = "entryId" | "ewsId" | "immutableEntryId" | "restId" | "restImmutableEntryId";
export type ExternalAudienceScope = "none" | "contactsOnly" | "all";
export type FollowupFlagStatus = "notFlagged" | "complete" | "flagged";
export type Importance = "low" | "normal" | "high";
export type InferenceClassificationType = "focused" | "other";
export type MailTipsType =
    | "automaticReplies"
    | "mailboxFullStatus"
    | "customMailTip"
    | "externalMemberCount"
    | "totalMemberCount"
    | "maxMessageSize"
    | "deliveryRestriction"
    | "moderationStatus"
    | "recipientScope"
    | "recipientSuggestions";
export type MeetingMessageType =
    | "none"
    | "meetingRequest"
    | "meetingCancelled"
    | "meetingAccepted"
    | "meetingTenativelyAccepted"
    | "meetingDeclined";
export type MeetingRequestType =
    | "none"
    | "newMeetingRequest"
    | "fullUpdate"
    | "informationalUpdate"
    | "silentUpdate"
    | "outdated"
    | "principalWantsCopy";
export type MessageActionFlag =
    | "any"
    | "call"
    | "doNotForward"
    | "followUp"
    | "fyi"
    | "forward"
    | "noResponseNecessary"
    | "read"
    | "reply"
    | "replyToAll"
    | "review";
export type OnlineMeetingProviderType = "unknown" | "skypeForBusiness" | "skypeForConsumer" | "teamsForBusiness";
export type RecipientScopeType = "none" | "internal" | "external" | "externalPartner" | "externalNonPartner";
export type RecurrencePatternType =
    | "daily"
    | "weekly"
    | "absoluteMonthly"
    | "relativeMonthly"
    | "absoluteYearly"
    | "relativeYearly";
export type RecurrenceRangeType = "endDate" | "noEnd" | "numbered";
export type ResponseType = "none" | "organizer" | "tentativelyAccepted" | "accepted" | "declined" | "notResponded";
export type SelectionLikelihoodInfo = "notSpecified" | "high";
export type Sensitivity = "normal" | "personal" | "private" | "confidential";
export type TimeZoneStandard = "windows" | "iana";
export type WebsiteType = "other" | "home" | "work" | "blog" | "profile";
export type WeekIndex = "first" | "second" | "third" | "fourth" | "last";
export type StagedFeatureName =
    | "passthroughAuthentication"
    | "seamlessSso"
    | "passwordHashSync"
    | "emailAsAlternateId"
    | "unknownFutureValue";
export type AccessReviewInstanceDecisionItemFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue";
export type AccessReviewInstanceFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue";
export type AccessReviewScheduleDefinitionFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue";
export type ConsentRequestFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue";
export type AgreementAcceptanceState = "accepted" | "declined" | "unknownFutureValue";
export type CloudAppSecuritySessionControlType =
    | "mcasConfigured"
    | "monitorOnly"
    | "blockDownloads"
    | "unknownFutureValue";
export type ConditionalAccessClientApp =
    | "all"
    | "browser"
    | "mobileAppsAndDesktopClients"
    | "exchangeActiveSync"
    | "easSupported"
    | "other"
    | "unknownFutureValue";
export type ConditionalAccessDevicePlatform =
    | "android"
    | "iOS"
    | "windows"
    | "windowsPhone"
    | "macOS"
    | "all"
    | "unknownFutureValue";
export type ConditionalAccessGrantControl =
    | "block"
    | "mfa"
    | "compliantDevice"
    | "domainJoinedDevice"
    | "approvedApplication"
    | "compliantApplication"
    | "passwordChange"
    | "unknownFutureValue";
export type ConditionalAccessPolicyState = "enabled" | "disabled" | "enabledForReportingButNotEnforced";
export type PersistentBrowserSessionMode = "always" | "never";
export type SigninFrequencyType = "days" | "hours";
export type ComplianceStatus =
    | "unknown"
    | "notApplicable"
    | "compliant"
    | "remediated"
    | "nonCompliant"
    | "error"
    | "conflict"
    | "notAssigned";
export type InstallIntent = "available" | "required" | "uninstall" | "availableWithoutEnrollment";
export type ManagedAppAvailability = "global" | "lineOfBusiness";
export type MdmAppConfigKeyType = "stringType" | "integerType" | "realType" | "booleanType" | "tokenType";
export type MicrosoftStoreForBusinessLicenseType = "offline" | "online";
export type MobileAppContentFileUploadState =
    | "success"
    | "transientError"
    | "error"
    | "unknown"
    | "azureStorageUriRequestSuccess"
    | "azureStorageUriRequestPending"
    | "azureStorageUriRequestFailed"
    | "azureStorageUriRequestTimedOut"
    | "azureStorageUriRenewalSuccess"
    | "azureStorageUriRenewalPending"
    | "azureStorageUriRenewalFailed"
    | "azureStorageUriRenewalTimedOut"
    | "commitFileSuccess"
    | "commitFilePending"
    | "commitFileFailed"
    | "commitFileTimedOut";
export type MobileAppPublishingState = "notPublished" | "processing" | "published";
export type RunAsAccountType = "system" | "user";
export type VppTokenAccountType = "business" | "education";
export type Win32LobAppFileSystemOperationType =
    | "notConfigured"
    | "exists"
    | "modifiedDate"
    | "createdDate"
    | "version"
    | "sizeInMB";
export type Win32LobAppMsiPackageType = "perMachine" | "perUser" | "dualPurpose";
export type Win32LobAppNotification = "showAll" | "showReboot" | "hideAll";
export type Win32LobAppPowerShellScriptRuleOperationType =
    | "notConfigured"
    | "string"
    | "dateTime"
    | "integer"
    | "float"
    | "version"
    | "boolean";
export type Win32LobAppRegistryRuleOperationType =
    | "notConfigured"
    | "exists"
    | "doesNotExist"
    | "string"
    | "integer"
    | "version";
export type Win32LobAppRestartBehavior = "basedOnReturnCode" | "allow" | "suppress" | "force";
export type Win32LobAppReturnCodeType = "failed" | "success" | "softReboot" | "hardReboot" | "retry";
export type Win32LobAppRuleOperator =
    | "notConfigured"
    | "equal"
    | "notEqual"
    | "greaterThan"
    | "greaterThanOrEqual"
    | "lessThan"
    | "lessThanOrEqual";
export type Win32LobAppRuleType = "detection" | "requirement";
export type WindowsArchitecture = "none" | "x86" | "x64" | "arm" | "neutral";
export type WindowsDeviceType = "none" | "desktop" | "mobile" | "holographic" | "team";
export type InstallState = "notApplicable" | "installed" | "failed" | "notInstalled" | "uninstallFailed" | "unknown";
export type AndroidRequiredPasswordType =
    | "deviceDefault"
    | "alphabetic"
    | "alphanumeric"
    | "alphanumericWithSymbols"
    | "lowSecurityBiometric"
    | "numeric"
    | "numericComplex"
    | "any";
export type AndroidWorkProfileCrossProfileDataSharingType =
    | "deviceDefault"
    | "preventAny"
    | "allowPersonalToWork"
    | "noRestrictions";
export type AndroidWorkProfileDefaultAppPermissionPolicyType = "deviceDefault" | "prompt" | "autoGrant" | "autoDeny";
export type AndroidWorkProfileRequiredPasswordType =
    | "deviceDefault"
    | "lowSecurityBiometric"
    | "required"
    | "atLeastNumeric"
    | "numericComplex"
    | "atLeastAlphabetic"
    | "atLeastAlphanumeric"
    | "alphanumericWithSymbols";
export type ApplicationGuardBlockClipboardSharingType =
    | "notConfigured"
    | "blockBoth"
    | "blockHostToContainer"
    | "blockContainerToHost"
    | "blockNone";
export type ApplicationGuardBlockFileTransferType =
    | "notConfigured"
    | "blockImageAndTextFile"
    | "blockImageFile"
    | "blockNone"
    | "blockTextFile";
export type AppListType = "none" | "appsInListCompliant" | "appsNotInListCompliant";
export type AppLockerApplicationControlType =
    | "notConfigured"
    | "enforceComponentsAndStoreApps"
    | "auditComponentsAndStoreApps"
    | "enforceComponentsStoreAppsAndSmartlocker"
    | "auditComponentsStoreAppsAndSmartlocker";
export type AutomaticUpdateMode =
    | "userDefined"
    | "notifyDownload"
    | "autoInstallAtMaintenanceTime"
    | "autoInstallAndRebootAtMaintenanceTime"
    | "autoInstallAndRebootAtScheduledTime"
    | "autoInstallAndRebootWithoutEndUserControl";
export type BitLockerEncryptionMethod = "aesCbc128" | "aesCbc256" | "xtsAes128" | "xtsAes256";
export type DefenderCloudBlockLevelType = "notConfigured" | "high" | "highPlus" | "zeroTolerance";
export type DefenderMonitorFileActivity =
    | "userDefined"
    | "disable"
    | "monitorAllFiles"
    | "monitorIncomingFilesOnly"
    | "monitorOutgoingFilesOnly";
export type DefenderPromptForSampleSubmission =
    | "userDefined"
    | "alwaysPrompt"
    | "promptBeforeSendingPersonalData"
    | "neverSendData"
    | "sendAllDataWithoutPrompting";
export type DefenderScanType = "userDefined" | "disabled" | "quick" | "full";
export type DefenderThreatAction =
    | "deviceDefault"
    | "clean"
    | "quarantine"
    | "remove"
    | "allow"
    | "userDefined"
    | "block";
export type DeviceComplianceActionType =
    | "noAction"
    | "notification"
    | "block"
    | "retire"
    | "wipe"
    | "removeResourceAccessProfiles"
    | "pushNotification";
export type DeviceThreatProtectionLevel = "unavailable" | "secured" | "low" | "medium" | "high" | "notSet";
export type DiagnosticDataSubmissionMode = "userDefined" | "none" | "basic" | "enhanced" | "full";
export type EdgeCookiePolicy = "userDefined" | "allow" | "blockThirdParty" | "blockAll";
export type EdgeSearchEngineType = "default" | "bing";
export type EditionUpgradeLicenseType = "productKey" | "licenseFile";
export type FirewallCertificateRevocationListCheckMethodType = "deviceDefault" | "none" | "attempt" | "require";
export type FirewallPacketQueueingMethodType =
    | "deviceDefault"
    | "disabled"
    | "queueInbound"
    | "queueOutbound"
    | "queueBoth";
export type FirewallPreSharedKeyEncodingMethodType = "deviceDefault" | "none" | "utF8";
export type InternetSiteSecurityLevel = "userDefined" | "medium" | "mediumHigh" | "high";
export type IosNotificationAlertType = "deviceDefault" | "banner" | "modal" | "none";
export type IosUpdatesInstallStatus =
    | "deviceOsHigherThanDesiredOsVersion"
    | "sharedDeviceUserLoggedInError"
    | "notSupportedOperation"
    | "installFailed"
    | "installPhoneCallInProgress"
    | "installInsufficientPower"
    | "installInsufficientSpace"
    | "installing"
    | "downloadInsufficientNetwork"
    | "downloadInsufficientPower"
    | "downloadInsufficientSpace"
    | "downloadRequiresComputer"
    | "downloadFailed"
    | "downloading"
    | "success"
    | "available"
    | "idle"
    | "unknown";
export type MiracastChannel =
    | "userDefined"
    | "one"
    | "two"
    | "three"
    | "four"
    | "five"
    | "six"
    | "seven"
    | "eight"
    | "nine"
    | "ten"
    | "eleven"
    | "thirtySix"
    | "forty"
    | "fortyFour"
    | "fortyEight"
    | "oneHundredFortyNine"
    | "oneHundredFiftyThree"
    | "oneHundredFiftySeven"
    | "oneHundredSixtyOne"
    | "oneHundredSixtyFive";
export type PolicyPlatformType =
    | "android"
    | "iOS"
    | "macOS"
    | "windowsPhone81"
    | "windows81AndLater"
    | "windows10AndLater"
    | "androidWorkProfile"
    | "all";
export type PrereleaseFeatures = "userDefined" | "settingsOnly" | "settingsAndExperimentations" | "notAllowed";
export type RatingAppsType = "allAllowed" | "allBlocked" | "agesAbove4" | "agesAbove9" | "agesAbove12" | "agesAbove17";
export type RatingAustraliaMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "parentalGuidance"
    | "mature"
    | "agesAbove15"
    | "agesAbove18";
export type RatingAustraliaTelevisionType =
    | "allAllowed"
    | "allBlocked"
    | "preschoolers"
    | "children"
    | "general"
    | "parentalGuidance"
    | "mature"
    | "agesAbove15"
    | "agesAbove15AdultViolence";
export type RatingCanadaMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "parentalGuidance"
    | "agesAbove14"
    | "agesAbove18"
    | "restricted";
export type RatingCanadaTelevisionType =
    | "allAllowed"
    | "allBlocked"
    | "children"
    | "childrenAbove8"
    | "general"
    | "parentalGuidance"
    | "agesAbove14"
    | "agesAbove18";
export type RatingFranceMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "agesAbove10"
    | "agesAbove12"
    | "agesAbove16"
    | "agesAbove18";
export type RatingFranceTelevisionType =
    | "allAllowed"
    | "allBlocked"
    | "agesAbove10"
    | "agesAbove12"
    | "agesAbove16"
    | "agesAbove18";
export type RatingGermanyMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "agesAbove6"
    | "agesAbove12"
    | "agesAbove16"
    | "adults";
export type RatingGermanyTelevisionType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "agesAbove6"
    | "agesAbove12"
    | "agesAbove16"
    | "adults";
export type RatingIrelandMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "parentalGuidance"
    | "agesAbove12"
    | "agesAbove15"
    | "agesAbove16"
    | "adults";
export type RatingIrelandTelevisionType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "children"
    | "youngAdults"
    | "parentalSupervision"
    | "mature";
export type RatingJapanMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "parentalGuidance"
    | "agesAbove15"
    | "agesAbove18";
export type RatingJapanTelevisionType = "allAllowed" | "allBlocked" | "explicitAllowed";
export type RatingNewZealandMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "parentalGuidance"
    | "mature"
    | "agesAbove13"
    | "agesAbove15"
    | "agesAbove16"
    | "agesAbove18"
    | "restricted"
    | "agesAbove16Restricted";
export type RatingNewZealandTelevisionType = "allAllowed" | "allBlocked" | "general" | "parentalGuidance" | "adults";
export type RatingUnitedKingdomMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "universalChildren"
    | "parentalGuidance"
    | "agesAbove12Video"
    | "agesAbove12Cinema"
    | "agesAbove15"
    | "adults";
export type RatingUnitedKingdomTelevisionType = "allAllowed" | "allBlocked" | "caution";
export type RatingUnitedStatesMoviesType =
    | "allAllowed"
    | "allBlocked"
    | "general"
    | "parentalGuidance"
    | "parentalGuidance13"
    | "restricted"
    | "adults";
export type RatingUnitedStatesTelevisionType =
    | "allAllowed"
    | "allBlocked"
    | "childrenAll"
    | "childrenAbove7"
    | "general"
    | "parentalGuidance"
    | "childrenAbove14"
    | "adults";
export type RequiredPasswordType = "deviceDefault" | "alphanumeric" | "numeric";
export type SafeSearchFilterType = "userDefined" | "strict" | "moderate";
export type SharedPCAccountDeletionPolicyType =
    | "immediate"
    | "diskSpaceThreshold"
    | "diskSpaceThresholdOrInactiveThreshold";
export type SharedPCAllowedAccountType = "guest" | "domain";
export type SiteSecurityLevel = "userDefined" | "low" | "mediumLow" | "medium" | "mediumHigh" | "high";
export type StateManagementSetting = "notConfigured" | "blocked" | "allowed";
export type VisibilitySetting = "notConfigured" | "hide" | "show";
export type WebBrowserCookieSettings =
    | "browserDefault"
    | "blockAlways"
    | "allowCurrentWebSite"
    | "allowFromWebsitesVisited"
    | "allowAlways";
export type WeeklySchedule =
    | "userDefined"
    | "everyday"
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";
export type WelcomeScreenMeetingInformation =
    | "userDefined"
    | "showOrganizerAndTimeOnly"
    | "showOrganizerAndTimeAndSubject";
export type Windows10EditionType =
    | "windows10Enterprise"
    | "windows10EnterpriseN"
    | "windows10Education"
    | "windows10EducationN"
    | "windows10MobileEnterprise"
    | "windows10HolographicEnterprise"
    | "windows10Professional"
    | "windows10ProfessionalN"
    | "windows10ProfessionalEducation"
    | "windows10ProfessionalEducationN"
    | "windows10ProfessionalWorkstation"
    | "windows10ProfessionalWorkstationN";
export type WindowsDeliveryOptimizationMode =
    | "userDefined"
    | "httpOnly"
    | "httpWithPeeringNat"
    | "httpWithPeeringPrivateGroup"
    | "httpWithInternetPeering"
    | "simpleDownload"
    | "bypassMode";
export type WindowsSpotlightEnablementSettings = "notConfigured" | "disabled" | "enabled";
export type WindowsStartMenuAppListVisibilityType = "userDefined" | "collapse" | "remove" | "disableSettingsApp";
export type WindowsStartMenuModeType = "userDefined" | "fullScreen" | "nonFullScreen";
export type WindowsUpdateType =
    | "userDefined"
    | "all"
    | "businessReadyOnly"
    | "windowsInsiderBuildFast"
    | "windowsInsiderBuildSlow"
    | "windowsInsiderBuildRelease";
export type WindowsUserAccountControlSettings =
    | "userDefined"
    | "alwaysNotify"
    | "notifyOnAppChanges"
    | "notifyOnAppChangesWithoutDimming"
    | "neverNotify";
export type DeviceManagementExchangeConnectorStatus = "none" | "connectionPending" | "connected" | "disconnected";
export type DeviceManagementExchangeConnectorSyncType = "fullSync" | "deltaSync";
export type DeviceManagementExchangeConnectorType = "onPremises" | "hosted" | "serviceToService" | "dedicated";
export type DeviceManagementPartnerAppType = "unknown" | "singleTenantApp" | "multiTenantApp";
export type DeviceManagementPartnerTenantState =
    | "unknown"
    | "unavailable"
    | "enabled"
    | "terminated"
    | "rejected"
    | "unresponsive";
export type Enablement = "notConfigured" | "enabled" | "disabled";
export type MdmAuthority = "unknown" | "intune" | "sccm" | "office365";
export type MobileThreatPartnerTenantState = "unavailable" | "available" | "enabled" | "unresponsive";
export type VppTokenState = "unknown" | "valid" | "expired" | "invalid" | "assignedToExternalMDM";
export type VppTokenSyncStatus = "none" | "inProgress" | "completed" | "failed";
export type WindowsHelloForBusinessPinUsage = "allowed" | "required" | "disallowed";
export type ActionState = "none" | "pending" | "canceled" | "active" | "done" | "failed" | "notSupported";
export type ComplianceState =
    | "unknown"
    | "compliant"
    | "noncompliant"
    | "conflict"
    | "error"
    | "inGracePeriod"
    | "configManager";
export type DeviceEnrollmentType =
    | "unknown"
    | "userEnrollment"
    | "deviceEnrollmentManager"
    | "appleBulkWithUser"
    | "appleBulkWithoutUser"
    | "windowsAzureADJoin"
    | "windowsBulkUserless"
    | "windowsAutoEnrollment"
    | "windowsBulkAzureDomainJoin"
    | "windowsCoManagement"
    | "windowsAzureADJoinUsingDeviceAuth"
    | "appleUserEnrollment"
    | "appleUserEnrollmentWithServiceAccount";
export type DeviceManagementExchangeAccessState = "none" | "unknown" | "allowed" | "blocked" | "quarantined";
export type DeviceManagementExchangeAccessStateReason =
    | "none"
    | "unknown"
    | "exchangeGlobalRule"
    | "exchangeIndividualRule"
    | "exchangeDeviceRule"
    | "exchangeUpgrade"
    | "exchangeMailboxPolicy"
    | "other"
    | "compliant"
    | "notCompliant"
    | "notEnrolled"
    | "unknownLocation"
    | "mfaRequired"
    | "azureADBlockDueToAccessPolicy"
    | "compromisedPassword"
    | "deviceNotKnownWithManagedApp";
export type DeviceManagementSubscriptionState =
    | "pending"
    | "active"
    | "warning"
    | "disabled"
    | "deleted"
    | "blocked"
    | "lockedOut";
export type DeviceRegistrationState =
    | "notRegistered"
    | "registered"
    | "revoked"
    | "keyConflict"
    | "approvalPending"
    | "certificateReset"
    | "notRegisteredPendingEnrollment"
    | "unknown";
export type ManagedDeviceOwnerType = "unknown" | "company" | "personal";
export type ManagedDevicePartnerReportedHealthState =
    | "unknown"
    | "activated"
    | "deactivated"
    | "secured"
    | "lowSeverity"
    | "mediumSeverity"
    | "highSeverity"
    | "unresponsive"
    | "compromised"
    | "misconfigured";
export type ManagementAgentType =
    | "eas"
    | "mdm"
    | "easMdm"
    | "intuneClient"
    | "easIntuneClient"
    | "configurationManagerClient"
    | "configurationManagerClientMdm"
    | "configurationManagerClientMdmEas"
    | "unknown"
    | "jamf"
    | "googleCloudDevicePolicyController";
export type EnrollmentState = "unknown" | "enrolled" | "pendingReset" | "failed" | "notContacted";
export type ImportedWindowsAutopilotDeviceIdentityImportStatus =
    | "unknown"
    | "pending"
    | "partial"
    | "complete"
    | "error";
export type ImportedWindowsAutopilotDeviceIdentityUploadStatus = "noUpload" | "pending" | "complete" | "error";
export type ManagedAppClipboardSharingLevel = "allApps" | "managedAppsWithPasteIn" | "managedApps" | "blocked";
export type ManagedAppDataEncryptionType =
    | "useDeviceSettings"
    | "afterDeviceRestart"
    | "whenDeviceLockedExceptOpenFiles"
    | "whenDeviceLocked";
export type ManagedAppDataStorageLocation = "oneDriveForBusiness" | "sharePoint" | "localStorage";
export type ManagedAppDataTransferLevel = "allApps" | "managedApps" | "none";
export type ManagedAppFlaggedReason = "none" | "rootedDevice";
export type ManagedAppPinCharacterSet = "numeric" | "alphanumericAndSymbol";
export type ManagedBrowserType = "notConfigured" | "microsoftEdge";
export type WindowsInformationProtectionEnforcementLevel =
    | "noProtection"
    | "encryptAndAuditOnly"
    | "encryptAuditAndPrompt"
    | "encryptAuditAndBlock";
export type WindowsInformationProtectionPinCharacterRequirements = "notAllow" | "requireAtLeastOne" | "allow";
export type NotificationTemplateBrandingOptions =
    | "none"
    | "includeCompanyLogo"
    | "includeCompanyName"
    | "includeContactInformation";
export type RemoteAssistanceOnboardingStatus = "notOnboarded" | "onboarding" | "onboarded";
export type DeviceEnrollmentFailureReason =
    | "unknown"
    | "authentication"
    | "authorization"
    | "accountValidation"
    | "userValidation"
    | "deviceNotSupported"
    | "inMaintenance"
    | "badRequest"
    | "featureNotSupported"
    | "enrollmentRestrictionsEnforced"
    | "clientDisconnected"
    | "userAbandonment";
export type ApplicationType = "universal" | "desktop";
export type EntityType =
    | "event"
    | "message"
    | "driveItem"
    | "externalItem"
    | "site"
    | "list"
    | "listItem"
    | "drive"
    | "unknownfuturevalue";
export type PlannerPreviewType = "automatic" | "noPreview" | "checklist" | "description" | "reference";
export type OnenotePatchActionType = "Replace" | "Append" | "Delete" | "Insert" | "Prepend";
export type OnenotePatchInsertPosition = "After" | "Before";
export type OnenoteSourceService = "Unknown" | "OneDrive" | "OneDriveForBusiness" | "OnPremOneDriveForBusiness";
export type OnenoteUserRole = "None" | "Owner" | "Contributor" | "Reader";
export type OperationStatus = "NotStarted" | "Running" | "Completed" | "Failed";
export type PrintColorMode = "blackAndWhite" | "grayscale" | "color" | "auto" | "unknownFutureValue";
export type PrintDuplexMode = "flipOnLongEdge" | "flipOnShortEdge" | "oneSided" | "unknownFutureValue";
export type PrinterFeedOrientation = "longEdgeFirst" | "shortEdgeFirst" | "unknownFutureValue";
export type PrinterProcessingState = "unknown" | "idle" | "processing" | "stopped" | "unknownFutureValue";
export type PrinterProcessingStateDetail =
    | "paused"
    | "mediaJam"
    | "mediaNeeded"
    | "mediaLow"
    | "mediaEmpty"
    | "coverOpen"
    | "interlockOpen"
    | "outputTrayMissing"
    | "outputAreaFull"
    | "markerSupplyLow"
    | "markerSupplyEmpty"
    | "inputTrayMissing"
    | "outputAreaAlmostFull"
    | "markerWasteAlmostFull"
    | "markerWasteFull"
    | "fuserOverTemp"
    | "fuserUnderTemp"
    | "other"
    | "none"
    | "movingToPaused"
    | "shutdown"
    | "connectingToDevice"
    | "timedOut"
    | "stopping"
    | "stoppedPartially"
    | "tonerLow"
    | "tonerEmpty"
    | "spoolAreaFull"
    | "doorOpen"
    | "opticalPhotoConductorNearEndOfLife"
    | "opticalPhotoConductorLifeOver"
    | "developerLow"
    | "developerEmpty"
    | "interpreterResourceUnavailable"
    | "unknownFutureValue";
export type PrintEvent = "jobStarted" | "unknownFutureValue";
export type PrintFinishing =
    | "none"
    | "staple"
    | "punch"
    | "cover"
    | "bind"
    | "saddleStitch"
    | "stitchEdge"
    | "stapleTopLeft"
    | "stapleBottomLeft"
    | "stapleTopRight"
    | "stapleBottomRight"
    | "stitchLeftEdge"
    | "stitchTopEdge"
    | "stitchRightEdge"
    | "stitchBottomEdge"
    | "stapleDualLeft"
    | "stapleDualTop"
    | "stapleDualRight"
    | "stapleDualBottom"
    | "unknownFutureValue";
export type PrintJobProcessingState =
    | "unknown"
    | "pending"
    | "processing"
    | "paused"
    | "stopped"
    | "completed"
    | "canceled"
    | "aborted"
    | "unknownFutureValue";
export type PrintJobStateDetail =
    | "uploadPending"
    | "transforming"
    | "completedSuccessfully"
    | "completedWithWarnings"
    | "completedWithErrors"
    | "releaseWait"
    | "interpreting"
    | "unknownFutureValue";
export type PrintMultipageLayout =
    | "clockwiseFromTopLeft"
    | "counterclockwiseFromTopLeft"
    | "counterclockwiseFromTopRight"
    | "clockwiseFromTopRight"
    | "counterclockwiseFromBottomLeft"
    | "clockwiseFromBottomLeft"
    | "counterclockwiseFromBottomRight"
    | "clockwiseFromBottomRight"
    | "unknownFutureValue";
export type PrintOperationProcessingState = "notStarted" | "running" | "succeeded" | "failed" | "unknownFutureValue";
export type PrintOrientation = "portrait" | "landscape" | "reverseLandscape" | "reversePortrait" | "unknownFutureValue";
export type PrintQuality = "low" | "medium" | "high" | "unknownFutureValue";
export type PrintScaling = "auto" | "shrinkToFit" | "fill" | "fit" | "none" | "unknownFutureValue";
export type PrintTaskProcessingState = "pending" | "processing" | "completed" | "aborted" | "unknownFutureValue";
export type Status = "active" | "updated" | "deleted" | "ignored" | "unknownFutureValue";
export type DataPolicyOperationStatus = "notStarted" | "running" | "complete" | "failed" | "unknownFutureValue";
export type AlertFeedback = "unknown" | "truePositive" | "falsePositive" | "benignPositive" | "unknownFutureValue";
export type AlertSeverity = "unknown" | "informational" | "low" | "medium" | "high" | "unknownFutureValue";
export type AlertStatus = "unknown" | "newAlert" | "inProgress" | "resolved" | "dismissed" | "unknownFutureValue";
export type ConnectionDirection = "unknown" | "inbound" | "outbound" | "unknownFutureValue";
export type ConnectionStatus = "unknown" | "attempted" | "succeeded" | "blocked" | "failed" | "unknownFutureValue";
export type EmailRole = "unknown" | "sender" | "recipient" | "unknownFutureValue";
export type FileHashType =
    | "unknown"
    | "sha1"
    | "sha256"
    | "md5"
    | "authenticodeHash256"
    | "lsHash"
    | "ctph"
    | "unknownFutureValue";
export type LogonType =
    | "unknown"
    | "interactive"
    | "remoteInteractive"
    | "network"
    | "batch"
    | "service"
    | "unknownFutureValue";
export type ProcessIntegrityLevel =
    | "unknown"
    | "untrusted"
    | "low"
    | "medium"
    | "high"
    | "system"
    | "unknownFutureValue";
export type RegistryHive =
    | "unknown"
    | "currentConfig"
    | "currentUser"
    | "localMachineSam"
    | "localMachineSecurity"
    | "localMachineSoftware"
    | "localMachineSystem"
    | "usersDefault"
    | "unknownFutureValue";
export type RegistryOperation = "unknown" | "create" | "modify" | "delete" | "unknownFutureValue";
export type RegistryValueType =
    | "unknown"
    | "binary"
    | "dword"
    | "dwordLittleEndian"
    | "dwordBigEndian"
    | "expandSz"
    | "link"
    | "multiSz"
    | "none"
    | "qword"
    | "qwordlittleEndian"
    | "sz"
    | "unknownFutureValue";
export type SecurityNetworkProtocol =
    | "unknown"
    | "ip"
    | "icmp"
    | "igmp"
    | "ggp"
    | "ipv4"
    | "tcp"
    | "pup"
    | "udp"
    | "idp"
    | "ipv6"
    | "ipv6RoutingHeader"
    | "ipv6FragmentHeader"
    | "ipSecEncapsulatingSecurityPayload"
    | "ipSecAuthenticationHeader"
    | "icmpV6"
    | "ipv6NoNextHeader"
    | "ipv6DestinationOptions"
    | "nd"
    | "raw"
    | "ipx"
    | "spx"
    | "spxII"
    | "unknownFutureValue";
export type SecurityResourceType = "unknown" | "attacked" | "related" | "unknownFutureValue";
export type UserAccountSecurityType = "unknown" | "standard" | "power" | "administrator" | "unknownFutureValue";
export type CallDirection = "incoming" | "outgoing";
export type CallState =
    | "incoming"
    | "establishing"
    | "established"
    | "hold"
    | "transferring"
    | "transferAccepted"
    | "redirecting"
    | "terminating"
    | "terminated"
    | "unknownFutureValue";
export type CallTranscriptionState = "notStarted" | "active" | "inactive" | "unknownFutureValue";
export type ChangeType = "created" | "updated" | "deleted";
export type EndpointType =
    | "default"
    | "voicemail"
    | "skypeForBusiness"
    | "skypeForBusinessVoipPhone"
    | "unknownFutureValue";
export type LobbyBypassScope =
    | "organizer"
    | "organization"
    | "organizationAndFederated"
    | "everyone"
    | "unknownFutureValue";
export type MediaDirection = "inactive" | "sendOnly" | "receiveOnly" | "sendReceive";
export type MediaState = "active" | "inactive" | "unknownFutureValue";
export type Modality = "audio" | "video" | "videoBasedScreenSharing" | "data" | "unknownFutureValue";
export type OnlineMeetingPresenters =
    | "everyone"
    | "organization"
    | "roleIsPresenter"
    | "organizer"
    | "unknownFutureValue";
export type OnlineMeetingRole = "attendee" | "presenter" | "unknownFutureValue";
export type RecordingStatus = "unknown" | "notRecording" | "recording" | "failed" | "unknownFutureValue";
export type RejectReason = "none" | "busy" | "forbidden" | "unknownFutureValue";
export type RoutingType = "forwarded" | "lookup" | "selfFork" | "unknownFutureValue";
export type ScreenSharingRole = "viewer" | "sharer";
export type Tone =
    | "tone0"
    | "tone1"
    | "tone2"
    | "tone3"
    | "tone4"
    | "tone5"
    | "tone6"
    | "tone7"
    | "tone8"
    | "tone9"
    | "star"
    | "pound"
    | "a"
    | "b"
    | "c"
    | "d"
    | "flash";
export type AttestationLevel = "attested" | "notAttested" | "unknownFutureValue";
export type AuthenticationMethodKeyStrength = "normal" | "weak" | "unknown";
export type LifecycleEventType = "missed" | "subscriptionRemoved" | "reauthorizationRequired";
export type ChannelMembershipType = "standard" | "private" | "unknownFutureValue";
export type ChatMessageImportance = "normal" | "high" | "urgent" | "unknownFutureValue";
export type ChatMessagePolicyViolationDlpActionTypes = "none" | "notifySender" | "blockAccess" | "blockAccessExternal";
export type ChatMessagePolicyViolationUserActionTypes = "none" | "override" | "reportFalsePositive";
export type ChatMessagePolicyViolationVerdictDetailsTypes =
    | "none"
    | "allowFalsePositiveOverride"
    | "allowOverrideWithoutJustification"
    | "allowOverrideWithJustification";
export type ChatMessageType = "message" | "chatEvent" | "typing" | "unknownFutureValue";
export type ChatType = "oneOnOne" | "group" | "meeting" | "unknownFutureValue";
export type ClonableTeamParts = "apps" | "tabs" | "settings" | "channels" | "members";
export type GiphyRatingType = "strict" | "moderate" | "unknownFutureValue";
export type TeamsAppDistributionMethod = "store" | "organization" | "sideloaded" | "unknownFutureValue";
export type TeamsAppPublishingState = "submitted" | "rejected" | "published" | "unknownFutureValue";
export type TeamsAsyncOperationStatus =
    | "invalid"
    | "notStarted"
    | "inProgress"
    | "succeeded"
    | "failed"
    | "unknownFutureValue";
export type TeamsAsyncOperationType =
    | "invalid"
    | "cloneTeam"
    | "archiveTeam"
    | "unarchiveTeam"
    | "createTeam"
    | "unknownFutureValue";
export type TeamSpecialization =
    | "none"
    | "educationStandard"
    | "educationClass"
    | "educationProfessionalLearningCommunity"
    | "educationStaff"
    | "healthcareStandard"
    | "healthcareCareCoordination"
    | "unknownFutureValue";
export type TeamVisibilityType = "private" | "public" | "hiddenMembership" | "unknownFutureValue";
export type TeamworkActivityTopicSource = "entityUrl" | "text";
export type ScheduleChangeRequestActor = "sender" | "recipient" | "manager" | "system" | "unknownFutureValue";
export type ScheduleChangeState = "pending" | "approved" | "declined" | "unknownFutureValue";
export type ScheduleEntityTheme =
    | "white"
    | "blue"
    | "green"
    | "purple"
    | "pink"
    | "yellow"
    | "gray"
    | "darkBlue"
    | "darkGreen"
    | "darkPurple"
    | "darkPink"
    | "darkYellow"
    | "unknownFutureValue";
export type TimeOffReasonIconType =
    | "none"
    | "car"
    | "calendar"
    | "running"
    | "plane"
    | "firstAid"
    | "doctor"
    | "notWorking"
    | "clock"
    | "juryDuty"
    | "globe"
    | "cup"
    | "phone"
    | "weather"
    | "umbrella"
    | "piggyBank"
    | "dog"
    | "cake"
    | "trafficCone"
    | "pin"
    | "sunny"
    | "unknownFutureValue";
export type WorkforceIntegrationEncryptionProtocol = "sharedSecret" | "unknownFutureValue";
export type WorkforceIntegrationSupportedEntities =
    | "none"
    | "shift"
    | "swapRequest"
    | "userShiftPreferences"
    | "openShift"
    | "openShiftRequest"
    | "offerShiftRequest"
    | "unknownFutureValue";
export type MailDestinationRoutingReason =
    | "none"
    | "mailFlowRule"
    | "safeSender"
    | "blockedSender"
    | "advancedSpamFiltering"
    | "domainAllowList"
    | "domainBlockList"
    | "notInAddressBook"
    | "firstTimeSender"
    | "autoPurgeToInbox"
    | "autoPurgeToJunk"
    | "autoPurgeToDeleted"
    | "outbound"
    | "notJunk"
    | "junk"
    | "unknownFutureValue";
export type ThreatAssessmentContentType = "mail" | "url" | "file";
export type ThreatAssessmentRequestSource = "undefined" | "user" | "administrator";
export type ThreatAssessmentResultType = "checkPolicy" | "rescan" | "unknownFutureValue";
export type ThreatAssessmentStatus = "pending" | "completed";
export type ThreatCategory = "undefined" | "spam" | "phishing" | "malware" | "unknownFutureValue";
export type ThreatExpectedAssessment = "block" | "unblock";
export type TaskStatus = "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred";
export type WellknownListName = "none" | "defaultList" | "flaggedEmails" | "unknownFutureValue";
export interface Entity {
    // Read-only.
    id?: string | undefined;
}
export interface AuditLogRoot extends Entity {
    // Read-only. Nullable.
    directoryAudits?: NullableOption<DirectoryAudit[]> | undefined;
    provisioning?: NullableOption<ProvisioningObjectSummary[]> | undefined;
    restrictedSignIns?: NullableOption<RestrictedSignIn[]> | undefined;
    // Read-only. Nullable.
    signIns?: NullableOption<SignIn[]> | undefined;
}
export interface DirectoryAudit extends Entity {
    /**
     * Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight
     * UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    activityDateTime?: string | undefined;
    /**
     * Indicates the activity name or the operation name (E.g. 'Create User', 'Add member to group'). For a list of activities
     * logged, refer to Azure Ad activity list.
     */
    activityDisplayName?: string | undefined;
    // Indicates additional details on the activity.
    additionalDetails?: NullableOption<KeyValue[]> | undefined;
    /**
     * Indicates which resource category that's targeted by the activity. (For example: User Management, Group Management
     * etc..)
     */
    category?: string | undefined;
    /**
     * Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs
     * across services.
     */
    correlationId?: NullableOption<string> | undefined;
    // Indicates information about the user or app initiated the activity.
    initiatedBy?: AuditActivityInitiator | undefined;
    /**
     * Indicates information on which service initiated the activity (For example: Self-service Password Management, Core
     * Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management.
     */
    loggedByService?: NullableOption<string> | undefined;
    operationType?: NullableOption<string> | undefined;
    // Indicates the result of the activity. Possible values are: success, failure, timeout, unknownFutureValue.
    result?: NullableOption<OperationResult> | undefined;
    // Indicates the reason for failure if the result is failure or timeout.
    resultReason?: NullableOption<string> | undefined;
    /**
     * Indicates information on which resource was changed due to the activity. Target Resource Type can be User, Device,
     * Directory, App, Role, Group, Policy or Other.
     */
    targetResources?: NullableOption<TargetResource[]> | undefined;
}
export interface ProvisioningObjectSummary extends Entity {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    activityDateTime?: string | undefined;
    // Unique ID of this change in this cycle.
    changeId?: NullableOption<string> | undefined;
    // Unique ID per job iteration.
    cycleId?: NullableOption<string> | undefined;
    // Indicates how long this provisioning action took to finish. Measured in milliseconds.
    durationInMilliseconds?: NullableOption<number> | undefined;
    // Details of who initiated this provisioning.
    initiatedBy?: NullableOption<Initiator> | undefined;
    // The unique ID for the whole provisioning job.
    jobId?: NullableOption<string> | undefined;
    // Details of each property that was modified in this provisioning action on this object.
    modifiedProperties?: NullableOption<ModifiedProperty[]> | undefined;
    /**
     * Indicates the activity name or the operation name. Possible values are: create, update, delete, stageddelete, disable,
     * other and unknownFutureValue. For a list of activities logged, refer to Azure AD activity list.
     */
    provisioningAction?: NullableOption<ProvisioningAction> | undefined;
    // Details of provisioning status.
    provisioningStatusInfo?: NullableOption<ProvisioningStatusInfo> | undefined;
    // Details of each step in provisioning.
    provisioningSteps?: NullableOption<ProvisioningStep[]> | undefined;
    // Represents the service principal used for provisioning.
    servicePrincipal?: NullableOption<ProvisioningServicePrincipal> | undefined;
    // Details of source object being provisioned.
    sourceIdentity?: NullableOption<ProvisionedIdentity> | undefined;
    // Details of source system of the object being provisioned.
    sourceSystem?: NullableOption<ProvisioningSystem> | undefined;
    // Details of target object being provisioned.
    targetIdentity?: NullableOption<ProvisionedIdentity> | undefined;
    // Details of target system of the object being provisioned.
    targetSystem?: NullableOption<ProvisioningSystem> | undefined;
    // Unique Azure AD tenant ID.
    tenantId?: NullableOption<string> | undefined;
}
export interface SignIn extends Entity {
    // The application name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
    appDisplayName?: NullableOption<string> | undefined;
    // The application identifier in Azure Active Directory. Supports $filter (eq operator only).
    appId?: NullableOption<string> | undefined;
    // A list of conditional access policies that are triggered by the corresponding sign-in activity.
    appliedConditionalAccessPolicies?: NullableOption<AppliedConditionalAccessPolicy[]> | undefined;
    /**
     * The legacy client used for sign-in activity. For example: Browser, Exchange Active Sync, Modern clients, IMAP, MAPI,
     * SMTP, or POP. Supports $filter (eq operator only).
     */
    clientAppUsed?: NullableOption<string> | undefined;
    /**
     * The status of the conditional access policy triggered. Possible values: success, failure, notApplied, or
     * unknownFutureValue. Supports $filter (eq operator only).
     */
    conditionalAccessStatus?: NullableOption<ConditionalAccessStatus> | undefined;
    /**
     * The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the
     * corresponding sign-in activity when calling for support. Supports $filter (eq operator only).
     */
    correlationId?: NullableOption<string> | undefined;
    /**
     * The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan
     * 1, 2014 is 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
     */
    createdDateTime?: string | undefined;
    /**
     * The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser.
     * Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties.
     */
    deviceDetail?: NullableOption<DeviceDetail> | undefined;
    // The IP address of the client from where the sign-in occurred. Supports $filter (eq and startsWith operators only).
    ipAddress?: NullableOption<string> | undefined;
    // Indicates whether a sign-in is interactive or not.
    isInteractive?: NullableOption<boolean> | undefined;
    /**
     * The city, state, and 2 letter country code from where the sign-in occurred. Supports $filter (eq and startsWith
     * operators only) on city, state, and countryOrRegion properties.
     */
    location?: NullableOption<SignInLocation> | undefined;
    // The name of the resource that the user signed in to. Supports $filter (eq operator only).
    resourceDisplayName?: NullableOption<string> | undefined;
    // The identifier of the resource that the user signed in to. Supports $filter (eq operator only).
    resourceId?: NullableOption<string> | undefined;
    /**
     * The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none,
     * adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset,
     * adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser,
     * adminConfirmedSigninCompromised, or unknownFutureValue. The value none means that no action has been performed on the
     * user or sign-in so far. Supports $filter (eq operator only). Note: Details for this property are only available for
     * Azure AD Premium P2 customers. All other customers are returned hidden.
     */
    riskDetail?: NullableOption<RiskDetail> | undefined;
    /**
     * The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress,
     * maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials,
     * investigationsThreatIntelligence, generic, or unknownFutureValue. Supports $filter (eq operator only).
     */
    riskEventTypes?: NullableOption<RiskEventType[]> | undefined;
    /**
     * The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress,
     * maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials,
     * investigationsThreatIntelligence, generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only).
     */
    riskEventTypes_v2?: NullableOption<string[]> | undefined;
    /**
     * The aggregated risk level. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden
     * means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note:
     * Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned
     * hidden.
     */
    riskLevelAggregated?: NullableOption<RiskLevel> | undefined;
    /**
     * The risk level during sign-in. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value
     * hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only).
     * Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned
     * hidden.
     */
    riskLevelDuringSignIn?: NullableOption<RiskLevel> | undefined;
    /**
     * The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed,
     * atRisk, confirmedCompromised, or unknownFutureValue. Supports $filter (eq operator only).
     */
    riskState?: NullableOption<RiskState> | undefined;
    /**
     * The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports
     * $filter (eq operator only) on errorCode property.
     */
    status?: NullableOption<SignInStatus> | undefined;
    // The display name of the user. Supports $filter (eq and startsWith operators only).
    userDisplayName?: NullableOption<string> | undefined;
    // The identifier of the user. Supports $filter (eq operator only).
    userId?: string | undefined;
    // The UPN of the user. Supports $filter (eq and startsWith operators only).
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface RestrictedSignIn extends SignIn {
    targetTenantId?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface Invitation extends Entity {
    // The display name of the user being invited.
    invitedUserDisplayName?: NullableOption<string> | undefined;
    /**
     * The email address of the user being invited. Required. The following special characters are not permitted in the email
     * address:Tilde (~)Exclamation point (!)At sign (@)Number sign (#)Dollar sign ($)Percent (%)Circumflex (^)Ampersand
     * (&amp;)Asterisk (*)Parentheses (( ))Hyphen (-)Plus sign (+)Equal sign (=)Brackets ([ ])Braces ({ })Backslash (/)Slash
     * mark (/)Pipe (`
     */
    invitedUserEmailAddress?: string | undefined;
    /**
     * Additional configuration for the message being sent to the invited user, including customizing message text, language
     * and cc recipient list.
     */
    invitedUserMessageInfo?: NullableOption<InvitedUserMessageInfo> | undefined;
    /**
     * The userType of the user being invited. By default, this is Guest. You can invite as Member if you're are company
     * administrator.
     */
    invitedUserType?: NullableOption<string> | undefined;
    // The URL the user can use to redeem their invitation. Read-only.
    inviteRedeemUrl?: NullableOption<string> | undefined;
    // The URL user should be redirected to once the invitation is redeemed. Required.
    inviteRedirectUrl?: string | undefined;
    // Indicates whether an email should be sent to the user being invited or not. The default is false.
    sendInvitationMessage?: NullableOption<boolean> | undefined;
    // The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error
    status?: NullableOption<string> | undefined;
    // The user created as part of the invitation creation. Read-Only
    invitedUser?: NullableOption<User> | undefined;
}
export interface DirectoryObject extends Entity {
    deletedDateTime?: NullableOption<string> | undefined;
}
export interface User extends DirectoryObject {
    /**
     * true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter
     * (eq, ne, NOT, and in).
     */
    accountEnabled?: NullableOption<boolean> | undefined;
    /**
     * Sets the age group of the user. Allowed values: null, minor, notAdult and adult. Refer to the legal age group property
     * definitions for further information. Supports $filter (eq, ne, NOT, and in).
     */
    ageGroup?: NullableOption<string> | undefined;
    /**
     * The licenses that are assigned to the user, including inherited (group-based) licenses. Not nullable. Supports $filter
     * (eq and NOT).
     */
    assignedLicenses?: AssignedLicense[] | undefined;
    // The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and NOT).
    assignedPlans?: AssignedPlan[] | undefined;
    /**
     * The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from
     * on-premises directory. Supports $filter (eq and NOT).
     */
    businessPhones?: string[] | undefined;
    /**
     * The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in,
     * startsWith).
     */
    city?: NullableOption<string> | undefined;
    /**
     * The company name which the user is associated. This property can be useful for describing the company that an external
     * user comes from. The maximum length of the company name is 64 characters.Supports $filter (eq, ne, NOT, ge, le, in,
     * startsWith).
     */
    companyName?: NullableOption<string> | undefined;
    /**
     * Sets whether consent has been obtained for minors. Allowed values: null, granted, denied and notRequired. Refer to the
     * legal age group property definitions for further information. Supports $filter (eq, ne, NOT, and in).
     */
    consentProvidedForMinor?: NullableOption<string> | undefined;
    /**
     * The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports
     * $filter (eq, ne, NOT, ge, le, in, startsWith).
     */
    country?: NullableOption<string> | undefined;
    /**
     * The date and time the user was created. The value cannot be modified and is automatically populated when the entity is
     * created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time.
     * Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user.
     * Read-only. Supports $filter (eq, ne, NOT , ge, le, and in operators) and $orderBy.
     */
    createdDateTime?: NullableOption<string> | undefined;
    /**
     * Indicates whether the user account was created as a regular school or work account (null), an external account
     * (Invitation), a local account for an Azure Active Directory B2C tenant (LocalAccount) or self-service sign-up using
     * email verification (EmailVerified). Read-only. Supports $filter (eq, ne, NOT, and in).
     */
    creationType?: NullableOption<string> | undefined;
    /**
     * The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, NOT ,
     * ge, le, and in operators).
     */
    department?: NullableOption<string> | undefined;
    /**
     * The name displayed in the address book for the user. This value is usually the combination of the user's first name,
     * middle initial, and last name. This property is required when a user is created and it cannot be cleared during
     * updates. Maximum length is 256 characters. Supports $filter (eq, ne, NOT , ge, le, in, startsWith), $orderBy, and
     * $search.
     */
    displayName?: NullableOption<string> | undefined;
    /**
     * The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, NOT ,
     * ge, le, in).
     */
    employeeHireDate?: NullableOption<string> | undefined;
    /**
     * The employee identifier assigned to the user by the organization. Supports $filter (eq, ne, NOT , ge, le, in,
     * startsWith).
     */
    employeeId?: NullableOption<string> | undefined;
    /**
     * Represents organization data (e.g. division and costCenter) associated with a user. Supports $filter (eq, ne, NOT , ge,
     * le, in).
     */
    employeeOrgData?: NullableOption<EmployeeOrgData> | undefined;
    /**
     * Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne,
     * NOT , ge, le, in, startsWith).
     */
    employeeType?: NullableOption<string> | undefined;
    /**
     * For an external user invited to the tenant using the invitation API, this property represents the invited user's
     * invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users.
     * Supports $filter (eq, ne, NOT , in).
     */
    externalUserState?: NullableOption<string> | undefined;
    // Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, NOT , in).
    externalUserStateChangeDateTime?: NullableOption<string> | undefined;
    // The fax number of the user. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
    faxNumber?: NullableOption<string> | undefined;
    /**
     * The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, NOT , ge, le, in,
     * startsWith).
     */
    givenName?: NullableOption<string> | undefined;
    /**
     * Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft
     * (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and
     * Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq)
     * only where the signInType is not userPrincipalName.
     */
    identities?: NullableOption<ObjectIdentity[]> | undefined;
    /**
     * The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports
     * $filter (eq, NOT, ge, le, startsWith).
     */
    imAddresses?: NullableOption<string[]> | undefined;
    // Do not use – reserved for future use.
    isResourceAccount?: NullableOption<boolean> | undefined;
    // The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
    jobTitle?: NullableOption<string> | undefined;
    /**
     * The time when this Azure AD user last changed their password. The Timestamp type represents date and time information
     * using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * Read-only. Returned only on $select.
     */
    lastPasswordChangeDateTime?: NullableOption<string> | undefined;
    /**
     * Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated
     * based on ageGroup and consentProvidedForMinor properties. Allowed values: null, minorWithOutParentalConsent,
     * minorWithParentalConsent, minorNoParentalConsentRequired, notAdult and adult. Refer to the legal age group property
     * definitions for further information. Returned only on $select.
     */
    legalAgeGroupClassification?: NullableOption<string> | undefined;
    // State of license assignments for this user. Read-only. Returned only on $select.
    licenseAssignmentStates?: NullableOption<LicenseAssignmentState[]> | undefined;
    /**
     * The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's
     * proxyAddresses collection to include the value as an SMTP address. While this property can contain accent characters,
     * using them can cause access issues with other Microsoft applications for the user. Supports $filter (eq, ne, NOT, ge,
     * le, in, startsWith, endsWith).
     */
    mail?: NullableOption<string> | undefined;
    /**
     * The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters.
     * Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
     */
    mailNickname?: NullableOption<string> | undefined;
    /**
     * The primary cellular telephone number for the user. Read-only for users synced from on-premises directory. Supports
     * $filter (eq, ne, NOT, ge, le, in, startsWith).
     */
    mobilePhone?: NullableOption<string> | undefined;
    /**
     * The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, NOT,
     * ge, le, in, startsWith).
     */
    officeLocation?: NullableOption<string> | undefined;
    /**
     * Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who
     * are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
     */
    onPremisesDistinguishedName?: NullableOption<string> | undefined;
    /**
     * Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The
     * property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory
     * via Azure AD Connect. Read-only.
     */
    onPremisesDomainName?: NullableOption<string> | undefined;
    /**
     * Contains extensionAttributes 1-15 for the user. Note that the individual extension attributes are neither selectable
     * nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the
     * on-premises and is read-only and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these
     * properties may be set during creation or update. These extension attributes are also known as Exchange custom
     * attributes 1-15. Supports $filter (eq, NOT, ge, le, in).
     */
    onPremisesExtensionAttributes?: NullableOption<OnPremisesExtensionAttributes> | undefined;
    /**
     * This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This
     * property must be specified when creating a new user account in the Graph if you are using a federated domain for the
     * user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property.
     * Supports $filter (eq, ne, NOT, ge, le, in).
     */
    onPremisesImmutableId?: NullableOption<string> | undefined;
    /**
     * Indicates the last time at which the object was synced with the on-premises directory; for example:
     * '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in
     * UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, NOT,
     * ge, le, in).
     */
    onPremisesLastSyncDateTime?: NullableOption<string> | undefined;
    // Errors when using Microsoft synchronization product during provisioning.
    onPremisesProvisioningErrors?: NullableOption<OnPremisesProvisioningError[]> | undefined;
    /**
     * Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for
     * customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
     * Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
     */
    onPremisesSamAccountName?: NullableOption<string> | undefined;
    /**
     * Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud.
     * Read-only. Supports $filter (eq, ne, NOT, in).
     */
    onPremisesSecurityIdentifier?: NullableOption<string> | undefined;
    /**
     * true if this object is synced from an on-premises directory; false if this object was originally synced from an
     * on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory
     * (default). Read-only. Supports $filter (eq, ne, NOT, in).
     */
    onPremisesSyncEnabled?: NullableOption<boolean> | undefined;
    /**
     * Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated
     * for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.
     * Read-only. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
     */
    onPremisesUserPrincipalName?: NullableOption<string> | undefined;
    /**
     * A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: While
     * this property can contain accent characters, they can cause access issues to first-party applications for the
     * user.Supports $filter (eq, NOT, ge, le, in, startsWith).
     */
    otherMails?: string[] | undefined;
    /**
     * Specifies password policies for the user. This value is an enumeration with one possible value being
     * DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration
     * can also be specified. The two may be specified together; for example: DisablePasswordExpiration,
     * DisableStrongPassword.Supports $filter (eq, ne, NOT).
     */
    passwordPolicies?: NullableOption<string> | undefined;
    /**
     * Specifies the password profile for the user. The profile contains the user's password. This property is required when a
     * user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies
     * property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn
     * property should be set to false and instead use custom policies and user flows to force password reset at first logon.
     * See Force password reset at first logon.
     */
    passwordProfile?: NullableOption<PasswordProfile> | undefined;
    /**
     * The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United
     * States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne,
     * NOT, ge, le, in, startsWith).
     */
    postalCode?: NullableOption<string> | undefined;
    /**
     * The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, NOT,
     * ge, le, in, startsWith).
     */
    preferredLanguage?: NullableOption<string> | undefined;
    // The plans that are provisioned for the user. Read-only. Not nullable.
    provisionedPlans?: ProvisionedPlan[] | undefined;
    /**
     * For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Read-only, Not nullable. Supports $filter (eq,
     * NOT, ge, le, startsWith).
     */
    proxyAddresses?: string[] | undefined;
    /**
     * true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as
     * true. For users invited through the invitation manager, this property will be set to false. Supports $filter (eq, ne,
     * NOT, in).
     */
    showInAddressList?: NullableOption<boolean> | undefined;
    /**
     * Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get
     * an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as
     * Microsoft Graph). If this happens, the application will need to acquire a new refresh token by making a request to the
     * authorize endpoint. Read-only. Use revokeSignInSessions to reset.
     */
    signInSessionsValidFromDateTime?: NullableOption<string> | undefined;
    /**
     * The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le,
     * in, startsWith).
     */
    state?: NullableOption<string> | undefined;
    /**
     * The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, NOT,
     * ge, le, in, startsWith).
     */
    streetAddress?: NullableOption<string> | undefined;
    /**
     * The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, NOT, ge, le,
     * in, startsWith).
     */
    surname?: NullableOption<string> | undefined;
    /**
     * A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal
     * requirement to check for availability of services in countries. Examples include: US, JP, and GB. Not nullable.
     * Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
     */
    usageLocation?: NullableOption<string> | undefined;
    /**
     * The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet
     * standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where
     * domain must be present in the tenant's collection of verified domains. This property is required when a user is
     * created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE:
     * While this property can contain accent characters, they can cause access issues to first-party applications for the
     * user. Supports $filter (eq, ne, NOT, ge, le, in, startsWith, endsWith) and $orderBy.
     */
    userPrincipalName?: NullableOption<string> | undefined;
    /**
     * A string value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter
     * (eq, ne, NOT, in, startsWith, endsWith).
     */
    userType?: NullableOption<string> | undefined;
    /**
     * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to
     * incoming messages, locale, and time zone. Returned only on $select.
     */
    mailboxSettings?: NullableOption<MailboxSettings> | undefined;
    // The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
    deviceEnrollmentLimit?: number | undefined;
    // A freeform text entry field for the user to describe themselves. Returned only on $select.
    aboutMe?: NullableOption<string> | undefined;
    /**
     * The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always
     * in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select.
     */
    birthday?: string | undefined;
    /**
     * The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always
     * in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned only on $select. Note: This
     * property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update
     * hire date values using Microsoft Graph APIs.
     */
    hireDate?: string | undefined;
    // A list for the user to describe their interests. Returned only on $select.
    interests?: NullableOption<string[]> | undefined;
    // The URL for the user's personal site. Returned only on $select.
    mySite?: NullableOption<string> | undefined;
    // A list for the user to enumerate their past projects. Returned only on $select.
    pastProjects?: NullableOption<string[]> | undefined;
    // The preferred name for the user. Returned only on $select.
    preferredName?: NullableOption<string> | undefined;
    // A list for the user to enumerate their responsibilities. Returned only on $select.
    responsibilities?: NullableOption<string[]> | undefined;
    // A list for the user to enumerate the schools they have attended. Returned only on $select.
    schools?: NullableOption<string[]> | undefined;
    // A list for the user to enumerate their skills. Returned only on $select.
    skills?: NullableOption<string[]> | undefined;
    // Represents the app roles a user has been granted for an application.
    appRoleAssignments?: NullableOption<AppRoleAssignment[]> | undefined;
    // Directory objects that were created by the user. Read-only. Nullable.
    createdObjects?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * The users and contacts that report to the user. (The users and contacts that have their manager property set to this
     * user.) Read-only. Nullable.
     */
    directReports?: NullableOption<DirectoryObject[]> | undefined;
    // A collection of this user's license details. Read-only.
    licenseDetails?: NullableOption<LicenseDetails[]> | undefined;
    // The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.)
    manager?: NullableOption<DirectoryObject> | undefined;
    // The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable.
    memberOf?: NullableOption<DirectoryObject[]> | undefined;
    oauth2PermissionGrants?: NullableOption<OAuth2PermissionGrant[]> | undefined;
    // Devices that are owned by the user. Read-only. Nullable.
    ownedDevices?: NullableOption<DirectoryObject[]> | undefined;
    // Directory objects that are owned by the user. Read-only. Nullable.
    ownedObjects?: NullableOption<DirectoryObject[]> | undefined;
    // Devices that are registered for the user. Read-only. Nullable.
    registeredDevices?: NullableOption<DirectoryObject[]> | undefined;
    // The scoped-role administrative unit memberships for this user. Read-only. Nullable.
    scopedRoleMemberOf?: NullableOption<ScopedRoleMembership[]> | undefined;
    transitiveMemberOf?: NullableOption<DirectoryObject[]> | undefined;
    // The user's primary calendar. Read-only.
    calendar?: NullableOption<Calendar> | undefined;
    // The user's calendar groups. Read-only. Nullable.
    calendarGroups?: NullableOption<CalendarGroup[]> | undefined;
    // The user's calendars. Read-only. Nullable.
    calendars?: NullableOption<Calendar[]> | undefined;
    // The calendar view for the calendar. Read-only. Nullable.
    calendarView?: NullableOption<Event[]> | undefined;
    // The user's contacts folders. Read-only. Nullable.
    contactFolders?: NullableOption<ContactFolder[]> | undefined;
    // The user's contacts. Read-only. Nullable.
    contacts?: NullableOption<Contact[]> | undefined;
    // The user's events. Default is to show events under the Default Calendar. Read-only. Nullable.
    events?: NullableOption<Event[]> | undefined;
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or
     * importance.
     */
    inferenceClassification?: NullableOption<InferenceClassification> | undefined;
    // The user's mail folders. Read-only. Nullable.
    mailFolders?: NullableOption<MailFolder[]> | undefined;
    // The messages in a mailbox or folder. Read-only. Nullable.
    messages?: NullableOption<Message[]> | undefined;
    // Selective Outlook services available to the user. Read-only. Nullable.
    outlook?: NullableOption<OutlookUser> | undefined;
    /**
     * Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is
     * determined by the user's communication, collaboration and business relationships. A person is an aggregation of
     * information from across mail, contacts and social networks.
     */
    people?: NullableOption<Person[]> | undefined;
    // The user's profile photo. Read-only.
    photo?: NullableOption<ProfilePhoto> | undefined;
    // Read-only. Nullable.
    photos?: NullableOption<ProfilePhoto[]> | undefined;
    // The user's OneDrive. Read-only.
    drive?: NullableOption<Drive> | undefined;
    // A collection of drives available for this user. Read-only.
    drives?: NullableOption<Drive[]> | undefined;
    followedSites?: NullableOption<Site[]> | undefined;
    // The collection of open extensions defined for the user. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
    // The user's terms of use acceptance statuses. Read-only. Nullable.
    agreementAcceptances?: NullableOption<AgreementAcceptance[]> | undefined;
    // The managed devices associated with the user.
    managedDevices?: NullableOption<ManagedDevice[]> | undefined;
    // Zero or more managed app registrations that belong to the user.
    managedAppRegistrations?: NullableOption<ManagedAppRegistration[]> | undefined;
    // The list of troubleshooting events for this user.
    deviceManagementTroubleshootingEvents?: NullableOption<DeviceManagementTroubleshootingEvent[]> | undefined;
    // Selective Planner services available to the user. Read-only. Nullable.
    planner?: NullableOption<PlannerUser> | undefined;
    // Read-only. Nullable.
    insights?: NullableOption<OfficeGraphInsights> | undefined;
    // Read-only. Nullable.
    settings?: NullableOption<UserSettings> | undefined;
    // Read-only.
    onenote?: NullableOption<Onenote> | undefined;
    // The user's activities across devices. Read-only. Nullable.
    activities?: NullableOption<UserActivity[]> | undefined;
    onlineMeetings?: NullableOption<OnlineMeeting[]> | undefined;
    presence?: NullableOption<Presence> | undefined;
    authentication?: NullableOption<Authentication> | undefined;
    chats?: NullableOption<Chat[]> | undefined;
    // The Microsoft Teams teams that the user is a member of. Read-only. Nullable.
    joinedTeams?: NullableOption<Team[]> | undefined;
    // A container for Microsoft Teams features available for the user. Read-only. Nullable.
    teamwork?: NullableOption<UserTeamwork> | undefined;
    // Represents the To Do services available to a user.
    todo?: NullableOption<Todo> | undefined;
}
export interface AppRoleAssignment extends DirectoryObject {
    /**
     * The identifier (id) for the app role which is assigned to the principal. This app role must be exposed in the appRoles
     * property on the resource application's service principal (resourceId). If the resource application has not declared any
     * app roles, a default app role ID of 00000000-0000-0000-0000-000000000000 can be specified to signal that the principal
     * is assigned to the resource app without any specific app roles. Required on create.
     */
    appRoleId?: string | undefined;
    /**
     * The time when the app role assignment was created.The Timestamp type represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: NullableOption<string> | undefined;
    /**
     * The display name of the user, group, or service principal that was granted the app role assignment. Read-only. Supports
     * $filter (eq and startswith).
     */
    principalDisplayName?: NullableOption<string> | undefined;
    // The unique identifier (id) for the user, group or service principal being granted the app role. Required on create.
    principalId?: NullableOption<string> | undefined;
    // The type of the assigned principal. This can either be User, Group or ServicePrincipal. Read-only.
    principalType?: NullableOption<string> | undefined;
    // The display name of the resource app's service principal to which the assignment is made.
    resourceDisplayName?: NullableOption<string> | undefined;
    /**
     * The unique identifier (id) for the resource service principal for which the assignment is made. Required on create.
     * Supports $filter (eq only).
     */
    resourceId?: NullableOption<string> | undefined;
}
export interface LicenseDetails extends Entity {
    // Information about the service plans assigned with the license. Read-only, Not nullable
    servicePlans?: ServicePlanInfo[] | undefined;
    /**
     * Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object.
     * Read-only
     */
    skuId?: NullableOption<string> | undefined;
    /**
     * Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'.
     * Read-only
     */
    skuPartNumber?: NullableOption<string> | undefined;
}
export interface OAuth2PermissionGrant extends Entity {
    /**
     * The id of the client service principal for the application which is authorized to act on behalf of a signed-in user
     * when accessing an API. Required. Supports $filter (eq only).
     */
    clientId?: string | undefined;
    /**
     * Indicates whether authorization is granted for the client application to impersonate all users or only a specific user.
     * AllPrincipals indicates authorization to impersonate all users. Principal indicates authorization to impersonate a
     * specific user. Consent on behalf of all users can be granted by an administrator. Non-admin users may be authorized to
     * consent on behalf of themselves in some cases, for some delegated permissions. Required. Supports $filter (eq only).
     */
    consentType?: NullableOption<string> | undefined;
    /**
     * The id of the user on behalf of whom the client is authorized to access the resource, when consentType is Principal. If
     * consentType is AllPrincipals this value is null. Required when consentType is Principal.
     */
    principalId?: NullableOption<string> | undefined;
    /**
     * The id of the resource service principal to which access is authorized. This identifies the API which the client is
     * authorized to attempt to call on behalf of a signed-in user.
     */
    resourceId?: string | undefined;
    /**
     * A space-separated list of the claim values for delegated permissions which should be included in access tokens for the
     * resource application (the API). For example, openid User.Read GroupMember.Read.All. Each claim value should match the
     * value field of one of the delegated permissions defined by the API, listed in the publishedPermissionScopes property of
     * the resource service principal.
     */
    scope?: NullableOption<string> | undefined;
}
export interface ScopedRoleMembership extends Entity {
    // Unique identifier for the administrative unit that the directory role is scoped to
    administrativeUnitId?: string | undefined;
    // Unique identifier for the directory role that the member is in.
    roleId?: string | undefined;
    // Role member identity information. Represents the user that is a member of this scoped-role.
    roleMemberInfo?: Identity | undefined;
}
export interface Calendar extends Entity {
    /**
     * Represent the online meeting service providers that can be used to create online meetings in this calendar. Possible
     * values are: unknown, skypeForBusiness, skypeForConsumer, teamsForBusiness.
     */
    allowedOnlineMeetingProviders?: NullableOption<OnlineMeetingProviderType[]> | undefined;
    /**
     * true if the user can write to the calendar, false otherwise. This property is true for the user who created the
     * calendar. This property is also true for a user who has been shared a calendar and granted write access, through an
     * Outlook client or the corresponding calendarPermission resource. Read-only.
     */
    canEdit?: NullableOption<boolean> | undefined;
    /**
     * true if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can
     * share it. Read-only.
     */
    canShare?: NullableOption<boolean> | undefined;
    /**
     * true if the user can read calendar items that have been marked private, false otherwise. This property is set through
     * an Outlook client or the corresponding calendarPermission resource. Read-only.
     */
    canViewPrivateItems?: NullableOption<boolean> | undefined;
    /**
     * Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This
     * allows Exchange to apply changes to the correct version of the object. Read-only.
     */
    changeKey?: NullableOption<string> | undefined;
    /**
     * Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are: auto,
     * lightBlue, lightGreen, lightOrange, lightGray, lightYellow, lightTeal, lightPink, lightBrown, lightRed, maxColor.
     */
    color?: NullableOption<CalendarColor> | undefined;
    /**
     * The default online meeting provider for meetings sent from this calendar. Possible values are: unknown,
     * skypeForBusiness, skypeForConsumer, teamsForBusiness.
     */
    defaultOnlineMeetingProvider?: NullableOption<OnlineMeetingProviderType> | undefined;
    /**
     * The calendar color, expressed in a hex color code of three hexadecimal values, each ranging from 00 to FF and
     * representing the red, green, or blue components of the color in the RGB color space. If the user has never explicitly
     * set a color for the calendar, this property is empty.
     */
    hexColor?: NullableOption<string> | undefined;
    // true if this is the default calendar where new events are created by default, false otherwise.
    isDefaultCalendar?: NullableOption<boolean> | undefined;
    // Indicates whether this user calendar can be deleted from the user mailbox.
    isRemovable?: NullableOption<boolean> | undefined;
    /**
     * Indicates whether this user calendar supports tracking of meeting responses. Only meeting invites sent from users'
     * primary calendars support tracking of meeting responses.
     */
    isTallyingResponses?: NullableOption<boolean> | undefined;
    // The calendar name.
    name?: NullableOption<string> | undefined;
    /**
     * If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the
     * owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who
     * shared that calendar with the user. Read-only.
     */
    owner?: NullableOption<EmailAddress> | undefined;
    // The permissions of the users with whom the calendar is shared.
    calendarPermissions?: NullableOption<CalendarPermission[]> | undefined;
    // The calendar view for the calendar. Navigation property. Read-only.
    calendarView?: NullableOption<Event[]> | undefined;
    // The events in the calendar. Navigation property. Read-only.
    events?: NullableOption<Event[]> | undefined;
    // The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
    multiValueExtendedProperties?: NullableOption<MultiValueLegacyExtendedProperty[]> | undefined;
    // The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
    singleValueExtendedProperties?: NullableOption<SingleValueLegacyExtendedProperty[]> | undefined;
}
export interface CalendarGroup extends Entity {
    /**
     * Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This
     * allows Exchange to apply changes to the correct version of the object. Read-only.
     */
    changeKey?: NullableOption<string> | undefined;
    // The class identifier. Read-only.
    classId?: NullableOption<string> | undefined;
    // The group name.
    name?: NullableOption<string> | undefined;
    // The calendars in the calendar group. Navigation property. Read-only. Nullable.
    calendars?: NullableOption<Calendar[]> | undefined;
}
export interface OutlookItem extends Entity {
    // The categories associated with the item
    categories?: NullableOption<string[]> | undefined;
    /**
     * Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to
     * apply changes to the correct version of the object. Read-only.
     */
    changeKey?: NullableOption<string> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: NullableOption<string> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
}
export interface Event extends OutlookItem {
    /**
     * True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default
     * is true.
     */
    allowNewTimeProposals?: NullableOption<boolean> | undefined;
    // The collection of attendees for the event.
    attendees?: NullableOption<Attendee[]> | undefined;
    // The body of the message associated with the event. It can be in HTML or text format.
    body?: NullableOption<ItemBody> | undefined;
    // The preview of the message associated with the event. It is in text format.
    bodyPreview?: NullableOption<string> | undefined;
    // The date, time, and time zone that the event ends. By default, the end time is in UTC.
    end?: NullableOption<DateTimeTimeZone> | undefined;
    // Set to true if the event has attachments.
    hasAttachments?: NullableOption<boolean> | undefined;
    /**
     * When set to true, each attendee only sees themselves in the meeting request and meeting Tracking list. Default is
     * false.
     */
    hideAttendees?: NullableOption<boolean> | undefined;
    /**
     * A unique identifier for an event across calendars. This ID is different for each occurrence in a recurring series.
     * Read-only.
     */
    iCalUId?: NullableOption<string> | undefined;
    // The importance of the event. The possible values are: low, normal, high.
    importance?: NullableOption<Importance> | undefined;
    // Set to true if the event lasts all day.
    isAllDay?: NullableOption<boolean> | undefined;
    // Set to true if the event has been canceled.
    isCancelled?: NullableOption<boolean> | undefined;
    /**
     * Set to true if the user has updated the meeting in Outlook but has not sent the updates to attendees. Set to false if
     * all changes have been sent, or if the event is an appointment without any attendees.
     */
    isDraft?: NullableOption<boolean> | undefined;
    // True if this event has online meeting information, false otherwise. Default is false. Optional.
    isOnlineMeeting?: NullableOption<boolean> | undefined;
    /**
     * Set to true if the calendar owner (specified by the owner property of the calendar) is the organizer of the event
     * (specified by the organizer property of the event). This also applies if a delegate organized the event on behalf of
     * the owner.
     */
    isOrganizer?: NullableOption<boolean> | undefined;
    // Set to true if an alert is set to remind the user of the event.
    isReminderOn?: NullableOption<boolean> | undefined;
    // The location of the event.
    location?: NullableOption<Location> | undefined;
    /**
     * The locations where the event is held or attended from. The location and locations properties always correspond with
     * each other. If you update the location property, any prior locations in the locations collection would be removed and
     * replaced by the new location value.
     */
    locations?: NullableOption<Location[]> | undefined;
    // Details for an attendee to join the meeting online. Read-only.
    onlineMeeting?: NullableOption<OnlineMeetingInfo> | undefined;
    /**
     * Represents the online meeting service provider. The possible values are teamsForBusiness, skypeForBusiness, and
     * skypeForConsumer. Optional.
     */
    onlineMeetingProvider?: NullableOption<OnlineMeetingProviderType> | undefined;
    /**
     * A URL for an online meeting. The property is set only when an organizer specifies an event as an online meeting such as
     * a Skype meeting. Read-only.
     */
    onlineMeetingUrl?: NullableOption<string> | undefined;
    // The organizer of the event.
    organizer?: NullableOption<Recipient> | undefined;
    /**
     * The end time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a legacy
     * custom time zone was set in desktop Outlook.
     */
    originalEndTimeZone?: NullableOption<string> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    originalStart?: NullableOption<string> | undefined;
    /**
     * The start time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a
     * legacy custom time zone was set in desktop Outlook.
     */
    originalStartTimeZone?: NullableOption<string> | undefined;
    // The recurrence pattern for the event.
    recurrence?: NullableOption<PatternedRecurrence> | undefined;
    // The number of minutes before the event start time that the reminder alert occurs.
    reminderMinutesBeforeStart?: NullableOption<number> | undefined;
    // Default is true, which represents the organizer would like an invitee to send a response to the event.
    responseRequested?: NullableOption<boolean> | undefined;
    // Indicates the type of response sent in response to an event message.
    responseStatus?: NullableOption<ResponseStatus> | undefined;
    // The possible values are: normal, personal, private, confidential.
    sensitivity?: NullableOption<Sensitivity> | undefined;
    // The ID for the recurring series master item, if this event is part of a recurring series.
    seriesMasterId?: NullableOption<string> | undefined;
    // The status to show. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
    showAs?: NullableOption<FreeBusyStatus> | undefined;
    // The date, time, and time zone that the event starts. By default, the start time is in UTC.
    start?: NullableOption<DateTimeTimeZone> | undefined;
    // The text of the event's subject line.
    subject?: NullableOption<string> | undefined;
    /**
     * A custom identifier specified by a client app for the server to avoid redundant POST operations in case of client
     * retries to create the same event. This is useful when low network connectivity causes the client to time out before
     * receiving a response from the server for the client's prior create-event request. After you set transactionId when
     * creating an event, you cannot change transactionId in a subsequent update. This property is only returned in a response
     * payload if an app has set it. Optional.
     */
    transactionId?: NullableOption<string> | undefined;
    // The event type. The possible values are: singleInstance, occurrence, exception, seriesMaster. Read-only.
    type?: NullableOption<EventType> | undefined;
    /**
     * The URL to open the event in Outlook on the web.Outlook on the web opens the event in the browser if you are signed in
     * to your mailbox. Otherwise, Outlook on the web prompts you to sign in.This URL cannot be accessed from within an
     * iFrame.
     */
    webLink?: NullableOption<string> | undefined;
    /**
     * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation
     * property. Read-only. Nullable.
     */
    attachments?: NullableOption<Attachment[]> | undefined;
    // The calendar that contains the event. Navigation property. Read-only.
    calendar?: NullableOption<Calendar> | undefined;
    // The collection of open extensions defined for the event. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
    /**
     * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are
     * part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been
     * cancelled from the series. Navigation property. Read-only. Nullable.
     */
    instances?: NullableOption<Event[]> | undefined;
    // The collection of multi-value extended properties defined for the event. Read-only. Nullable.
    multiValueExtendedProperties?: NullableOption<MultiValueLegacyExtendedProperty[]> | undefined;
    // The collection of single-value extended properties defined for the event. Read-only. Nullable.
    singleValueExtendedProperties?: NullableOption<SingleValueLegacyExtendedProperty[]> | undefined;
}
export interface ContactFolder extends Entity {
    // The folder's display name.
    displayName?: NullableOption<string> | undefined;
    // The ID of the folder's parent folder.
    parentFolderId?: NullableOption<string> | undefined;
    // The collection of child folders in the folder. Navigation property. Read-only. Nullable.
    childFolders?: NullableOption<ContactFolder[]> | undefined;
    // The contacts in the folder. Navigation property. Read-only. Nullable.
    contacts?: NullableOption<Contact[]> | undefined;
    // The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
    multiValueExtendedProperties?: NullableOption<MultiValueLegacyExtendedProperty[]> | undefined;
    // The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
    singleValueExtendedProperties?: NullableOption<SingleValueLegacyExtendedProperty[]> | undefined;
}
export interface Contact extends OutlookItem {
    // The name of the contact's assistant.
    assistantName?: NullableOption<string> | undefined;
    /**
     * The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in
     * UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    birthday?: NullableOption<string> | undefined;
    // The contact's business address.
    businessAddress?: NullableOption<PhysicalAddress> | undefined;
    // The business home page of the contact.
    businessHomePage?: NullableOption<string> | undefined;
    // The contact's business phone numbers.
    businessPhones?: NullableOption<string[]> | undefined;
    // The names of the contact's children.
    children?: NullableOption<string[]> | undefined;
    // The name of the contact's company.
    companyName?: NullableOption<string> | undefined;
    // The contact's department.
    department?: NullableOption<string> | undefined;
    /**
     * The contact's display name. You can specify the display name in a create or update operation. Note that later updates
     * to other properties may cause an automatically generated value to overwrite the displayName value you have specified.
     * To preserve a pre-existing value, always include it as displayName in an update operation.
     */
    displayName?: NullableOption<string> | undefined;
    // The contact's email addresses.
    emailAddresses?: NullableOption<EmailAddress[]> | undefined;
    // The name the contact is filed under.
    fileAs?: NullableOption<string> | undefined;
    // The contact's generation.
    generation?: NullableOption<string> | undefined;
    // The contact's given name.
    givenName?: NullableOption<string> | undefined;
    // The contact's home address.
    homeAddress?: NullableOption<PhysicalAddress> | undefined;
    // The contact's home phone numbers.
    homePhones?: NullableOption<string[]> | undefined;
    // The contact's instant messaging (IM) addresses.
    imAddresses?: NullableOption<string[]> | undefined;
    // The contact's initials.
    initials?: NullableOption<string> | undefined;
    // The contact’s job title.
    jobTitle?: NullableOption<string> | undefined;
    // The name of the contact's manager.
    manager?: NullableOption<string> | undefined;
    // The contact's middle name.
    middleName?: NullableOption<string> | undefined;
    // The contact's mobile phone number.
    mobilePhone?: NullableOption<string> | undefined;
    // The contact's nickname.
    nickName?: NullableOption<string> | undefined;
    // The location of the contact's office.
    officeLocation?: NullableOption<string> | undefined;
    // Other addresses for the contact.
    otherAddress?: NullableOption<PhysicalAddress> | undefined;
    // The ID of the contact's parent folder.
    parentFolderId?: NullableOption<string> | undefined;
    // The user's notes about the contact.
    personalNotes?: NullableOption<string> | undefined;
    // The contact's profession.
    profession?: NullableOption<string> | undefined;
    // The name of the contact's spouse/partner.
    spouseName?: NullableOption<string> | undefined;
    // The contact's surname.
    surname?: NullableOption<string> | undefined;
    // The contact's title.
    title?: NullableOption<string> | undefined;
    // The phonetic Japanese company name of the contact.
    yomiCompanyName?: NullableOption<string> | undefined;
    // The phonetic Japanese given name (first name) of the contact.
    yomiGivenName?: NullableOption<string> | undefined;
    // The phonetic Japanese surname (last name) of the contact.
    yomiSurname?: NullableOption<string> | undefined;
    // The collection of open extensions defined for the contact. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
    // The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
    multiValueExtendedProperties?: NullableOption<MultiValueLegacyExtendedProperty[]> | undefined;
    // Optional contact picture. You can get or set a photo for a contact.
    photo?: NullableOption<ProfilePhoto> | undefined;
    // The collection of single-value extended properties defined for the contact. Read-only. Nullable.
    singleValueExtendedProperties?: NullableOption<SingleValueLegacyExtendedProperty[]> | undefined;
}
// tslint:disable-next-line: interface-name
export interface InferenceClassification extends Entity {
    /**
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other.
     * Read-only. Nullable.
     */
    overrides?: NullableOption<InferenceClassificationOverride[]> | undefined;
}
export interface MailFolder extends Entity {
    // The number of immediate child mailFolders in the current mailFolder.
    childFolderCount?: NullableOption<number> | undefined;
    // The mailFolder's display name.
    displayName?: NullableOption<string> | undefined;
    /**
     * Indicates whether the mailFolder is hidden. This property can be set only when creating the folder. Find more
     * information in Hidden mail folders.
     */
    isHidden?: NullableOption<boolean> | undefined;
    // The unique identifier for the mailFolder's parent mailFolder.
    parentFolderId?: NullableOption<string> | undefined;
    // The number of items in the mailFolder.
    totalItemCount?: NullableOption<number> | undefined;
    // The number of items in the mailFolder marked as unread.
    unreadItemCount?: NullableOption<number> | undefined;
    // The collection of child folders in the mailFolder.
    childFolders?: NullableOption<MailFolder[]> | undefined;
    // The collection of rules that apply to the user's Inbox folder.
    messageRules?: NullableOption<MessageRule[]> | undefined;
    // The collection of messages in the mailFolder.
    messages?: NullableOption<Message[]> | undefined;
    // The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
    multiValueExtendedProperties?: NullableOption<MultiValueLegacyExtendedProperty[]> | undefined;
    // The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
    singleValueExtendedProperties?: NullableOption<SingleValueLegacyExtendedProperty[]> | undefined;
}
export interface Message extends OutlookItem {
    // The Bcc: recipients for the message.
    bccRecipients?: NullableOption<Recipient[]> | undefined;
    // The body of the message. It can be in HTML or text format. Find out about safe HTML in a message body.
    body?: NullableOption<ItemBody> | undefined;
    /**
     * The first 255 characters of the message body. It is in text format. If the message contains instances of mention, this
     * property would contain a concatenation of these mentions as well.
     */
    bodyPreview?: NullableOption<string> | undefined;
    // The Cc: recipients for the message.
    ccRecipients?: NullableOption<Recipient[]> | undefined;
    // The ID of the conversation the email belongs to.
    conversationId?: NullableOption<string> | undefined;
    // Indicates the position of the message within the conversation.
    conversationIndex?: NullableOption<number> | undefined;
    // The flag value that indicates the status, start date, due date, or completion date for the message.
    flag?: NullableOption<FollowupFlag> | undefined;
    /**
     * The owner of the mailbox from which the message is sent. In most cases, this value is the same as the sender property,
     * except for sharing or delegation scenarios. The value must correspond to the actual mailbox used. Find out more about
     * setting the from and sender properties of a message.
     */
    from?: NullableOption<Recipient> | undefined;
    /**
     * Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message
     * contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body
     * property to look for a src attribute, such as &amp;lt;IMG src='cid:image001.jpg@01D26CD8.6C05F070'&amp;gt;.
     */
    hasAttachments?: NullableOption<boolean> | undefined;
    // The importance of the message. The possible values are: low, normal, and high.
    importance?: NullableOption<Importance> | undefined;
    /**
     * The classification of the message for the user, based on inferred relevance or importance, or on an explicit override.
     * The possible values are: focused or other.
     */
    inferenceClassification?: NullableOption<InferenceClassificationType> | undefined;
    /**
     * A collection of message headers defined by RFC5322. The set includes message headers indicating the network path taken
     * by a message from the sender to the recipient. It can also contain custom message headers that hold app data for the
     * message. Returned only on applying a $select query option. Read-only.
     */
    internetMessageHeaders?: NullableOption<InternetMessageHeader[]> | undefined;
    // The message ID in the format specified by RFC2822.
    internetMessageId?: NullableOption<string> | undefined;
    // Indicates whether a read receipt is requested for the message.
    isDeliveryReceiptRequested?: NullableOption<boolean> | undefined;
    // Indicates whether the message is a draft. A message is a draft if it hasn't been sent yet.
    isDraft?: NullableOption<boolean> | undefined;
    // Indicates whether the message has been read.
    isRead?: NullableOption<boolean> | undefined;
    // Indicates whether a read receipt is requested for the message.
    isReadReceiptRequested?: NullableOption<boolean> | undefined;
    // The unique identifier for the message's parent mailFolder.
    parentFolderId?: NullableOption<string> | undefined;
    /**
     * The date and time the message was received. The date and time information uses ISO 8601 format and is always in UTC
     * time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    receivedDateTime?: NullableOption<string> | undefined;
    // The email addresses to use when replying.
    replyTo?: NullableOption<Recipient[]> | undefined;
    /**
     * The account that is actually used to generate the message. In most cases, this value is the same as the from property.
     * You can set this property to a different value when sending a message from a shared mailbox, for a shared calendar, or
     * as a delegate. In any case, the value must correspond to the actual mailbox used. Find out more about setting the from
     * and sender properties of a message.
     */
    sender?: NullableOption<Recipient> | undefined;
    /**
     * The date and time the message was sent. The date and time information uses ISO 8601 format and is always in UTC time.
     * For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    sentDateTime?: NullableOption<string> | undefined;
    // The subject of the message.
    subject?: NullableOption<string> | undefined;
    // The To: recipients for the message.
    toRecipients?: NullableOption<Recipient[]> | undefined;
    /**
     * The part of the body of the message that is unique to the current message. uniqueBody is not returned by default but
     * can be retrieved for a given message by use of the ?$select=uniqueBody query. It can be in HTML or text format.
     */
    uniqueBody?: NullableOption<ItemBody> | undefined;
    /**
     * The URL to open the message in Outlook on the web.You can append an ispopout argument to the end of the URL to change
     * how the message is displayed. If ispopout is not present or if it is set to 1, then the message is shown in a popout
     * window. If ispopout is set to 0, then the browser will show the message in the Outlook on the web review pane.The
     * message will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to
     * login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame.
     */
    webLink?: NullableOption<string> | undefined;
    // The fileAttachment and itemAttachment attachments for the message.
    attachments?: NullableOption<Attachment[]> | undefined;
    // The collection of open extensions defined for the message. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
    // The collection of multi-value extended properties defined for the message. Nullable.
    multiValueExtendedProperties?: NullableOption<MultiValueLegacyExtendedProperty[]> | undefined;
    // The collection of single-value extended properties defined for the message. Nullable.
    singleValueExtendedProperties?: NullableOption<SingleValueLegacyExtendedProperty[]> | undefined;
}
export interface OutlookUser extends Entity {
    // A list of categories defined for the user.
    masterCategories?: NullableOption<OutlookCategory[]> | undefined;
}
export interface Person extends Entity {
    // The person's birthday.
    birthday?: NullableOption<string> | undefined;
    // The name of the person's company.
    companyName?: NullableOption<string> | undefined;
    // The person's department.
    department?: NullableOption<string> | undefined;
    // The person's display name.
    displayName?: NullableOption<string> | undefined;
    // The person's given name.
    givenName?: NullableOption<string> | undefined;
    // The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
    imAddress?: NullableOption<string> | undefined;
    // true if the user has flagged this person as a favorite.
    isFavorite?: NullableOption<boolean> | undefined;
    // The person's job title.
    jobTitle?: NullableOption<string> | undefined;
    // The location of the person's office.
    officeLocation?: NullableOption<string> | undefined;
    // Free-form notes that the user has taken about this person.
    personNotes?: NullableOption<string> | undefined;
    // The type of person, for example distribution list.
    personType?: NullableOption<PersonType> | undefined;
    // The person's phone numbers.
    phones?: NullableOption<Phone[]> | undefined;
    // The person's addresses.
    postalAddresses?: NullableOption<Location[]> | undefined;
    // The person's profession.
    profession?: NullableOption<string> | undefined;
    // The person's email addresses.
    scoredEmailAddresses?: NullableOption<ScoredEmailAddress[]> | undefined;
    // The person's surname.
    surname?: NullableOption<string> | undefined;
    /**
     * The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the
     * Internet standard RFC 822. By convention, this should map to the person's email name. The general format is
     * alias@domain.
     */
    userPrincipalName?: NullableOption<string> | undefined;
    // The person's websites.
    websites?: NullableOption<Website[]> | undefined;
    // The phonetic Japanese name of the person's company.
    yomiCompany?: NullableOption<string> | undefined;
}
export interface ProfilePhoto extends Entity {
    // The height of the photo. Read-only.
    height?: NullableOption<number> | undefined;
    // The width of the photo. Read-only.
    width?: NullableOption<number> | undefined;
}
export interface BaseItem extends Entity {
    // Identity of the user, device, or application which created the item. Read-only.
    createdBy?: NullableOption<IdentitySet> | undefined;
    // Date and time of item creation. Read-only.
    createdDateTime?: string | undefined;
    // Provides a user-visible description of the item. Optional.
    description?: NullableOption<string> | undefined;
    // ETag for the item. Read-only.
    eTag?: NullableOption<string> | undefined;
    // Identity of the user, device, and application which last modified the item. Read-only.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    // Date and time the item was last modified. Read-only.
    lastModifiedDateTime?: string | undefined;
    // The name of the item. Read-write.
    name?: NullableOption<string> | undefined;
    // Parent information, if the item has a parent. Read-write.
    parentReference?: NullableOption<ItemReference> | undefined;
    // URL that displays the resource in the browser. Read-only.
    webUrl?: NullableOption<string> | undefined;
    // Identity of the user who created the item. Read-only.
    createdByUser?: NullableOption<User> | undefined;
    // Identity of the user who last modified the item. Read-only.
    lastModifiedByUser?: NullableOption<User> | undefined;
}
export interface Drive extends BaseItem {
    /**
     * Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for
     * Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     */
    driveType?: NullableOption<string> | undefined;
    // Optional. The user account that owns the drive. Read-only.
    owner?: NullableOption<IdentitySet> | undefined;
    // Optional. Information about the drive's storage space quota. Read-only.
    quota?: NullableOption<Quota> | undefined;
    sharePointIds?: NullableOption<SharepointIds> | undefined;
    // If present, indicates that this is a system-managed drive. Read-only.
    system?: NullableOption<SystemFacet> | undefined;
    // The list of items the user is following. Only in OneDrive for Business.
    following?: NullableOption<DriveItem[]> | undefined;
    // All items contained in the drive. Read-only. Nullable.
    items?: NullableOption<DriveItem[]> | undefined;
    // For drives in SharePoint, the underlying document library list. Read-only. Nullable.
    list?: NullableOption<List> | undefined;
    // The root folder of the drive. Read-only.
    root?: NullableOption<DriveItem> | undefined;
    // Collection of common folders available in OneDrive. Read-only. Nullable.
    special?: NullableOption<DriveItem[]> | undefined;
}
export interface Site extends BaseItem {
    // The full title for the site. Read-only.
    displayName?: NullableOption<string> | undefined;
    error?: NullableOption<PublicError> | undefined;
    // If present, indicates that this is the root site in the site collection. Read-only.
    root?: NullableOption<Root> | undefined;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: NullableOption<SharepointIds> | undefined;
    // Provides details about the site's site collection. Available only on the root site. Read-only.
    siteCollection?: NullableOption<SiteCollection> | undefined;
    // Analytics about the view activities that took place in this site.
    analytics?: NullableOption<ItemAnalytics> | undefined;
    // The collection of column definitions reusable across lists under this site.
    columns?: NullableOption<ColumnDefinition[]> | undefined;
    // The collection of content types defined for this site.
    contentTypes?: NullableOption<ContentType[]> | undefined;
    // The default drive (document library) for this site.
    drive?: NullableOption<Drive> | undefined;
    // The collection of drives (document libraries) under this site.
    drives?: NullableOption<Drive[]> | undefined;
    // Used to address any item contained in this site. This collection cannot be enumerated.
    items?: NullableOption<BaseItem[]> | undefined;
    // The collection of lists under this site.
    lists?: NullableOption<List[]> | undefined;
    // The permissions associated with the site. Nullable.
    permissions?: NullableOption<Permission[]> | undefined;
    // The collection of the sub-sites under this site.
    sites?: NullableOption<Site[]> | undefined;
    // Calls the OneNote service for notebook related operations.
    onenote?: NullableOption<Onenote> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface Extension extends Entity {}
export interface AgreementAcceptance extends Entity {
    // ID of the agreement file accepted by the user.
    agreementFileId?: NullableOption<string> | undefined;
    // ID of the agreement.
    agreementId?: NullableOption<string> | undefined;
    // The display name of the device used for accepting the agreement.
    deviceDisplayName?: NullableOption<string> | undefined;
    // The unique identifier of the device used for accepting the agreement.
    deviceId?: NullableOption<string> | undefined;
    // The operating system used for accepting the agreement.
    deviceOSType?: NullableOption<string> | undefined;
    // The operating system version of the device used for accepting the agreement.
    deviceOSVersion?: NullableOption<string> | undefined;
    /**
     * The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    expirationDateTime?: NullableOption<string> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    recordedDateTime?: NullableOption<string> | undefined;
    // Possible values are: accepted, declined.
    state?: NullableOption<AgreementAcceptanceState> | undefined;
    // Display name of the user when the acceptance was recorded.
    userDisplayName?: NullableOption<string> | undefined;
    // Email of the user when the acceptance was recorded.
    userEmail?: NullableOption<string> | undefined;
    // ID of the user who accepted the agreement.
    userId?: NullableOption<string> | undefined;
    // UPN of the user when the acceptance was recorded.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface ManagedDevice extends Entity {
    // Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
    activationLockBypassCode?: NullableOption<string> | undefined;
    // Android security patch level. This property is read-only.
    androidSecurityPatchLevel?: NullableOption<string> | undefined;
    // The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
    azureADDeviceId?: NullableOption<string> | undefined;
    // Whether the device is Azure Active Directory registered. This property is read-only.
    azureADRegistered?: NullableOption<boolean> | undefined;
    // The DateTime when device compliance grace period expires. This property is read-only.
    complianceGracePeriodExpirationDateTime?: string | undefined;
    /**
     * Compliance state of the device. This property is read-only. Possible values are: unknown, compliant, noncompliant,
     * conflict, error, inGracePeriod, configManager.
     */
    complianceState?: ComplianceState | undefined;
    // ConfigrMgr client enabled features. This property is read-only.
    configurationManagerClientEnabledFeatures?: NullableOption<ConfigurationManagerClientEnabledFeatures> | undefined;
    // List of ComplexType deviceActionResult objects. This property is read-only.
    deviceActionResults?: NullableOption<DeviceActionResult[]> | undefined;
    // Device category display name. This property is read-only.
    deviceCategoryDisplayName?: NullableOption<string> | undefined;
    /**
     * Enrollment type of the device. This property is read-only. Possible values are: unknown, userEnrollment,
     * deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless,
     * windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth,
     * appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension,
     * androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile.
     */
    deviceEnrollmentType?: DeviceEnrollmentType | undefined;
    // The device health attestation state. This property is read-only.
    deviceHealthAttestationState?: NullableOption<DeviceHealthAttestationState> | undefined;
    // Name of the device. This property is read-only.
    deviceName?: NullableOption<string> | undefined;
    /**
     * Device registration state. This property is read-only. Possible values are: notRegistered, registered, revoked,
     * keyConflict, approvalPending, certificateReset, notRegisteredPendingEnrollment, unknown.
     */
    deviceRegistrationState?: DeviceRegistrationState | undefined;
    // Whether the device is Exchange ActiveSync activated. This property is read-only.
    easActivated?: boolean | undefined;
    // Exchange ActivationSync activation time of the device. This property is read-only.
    easActivationDateTime?: string | undefined;
    // Exchange ActiveSync Id of the device. This property is read-only.
    easDeviceId?: NullableOption<string> | undefined;
    // Email(s) for the user associated with the device. This property is read-only.
    emailAddress?: NullableOption<string> | undefined;
    // Enrollment time of the device. This property is read-only.
    enrolledDateTime?: string | undefined;
    // Ethernet MAC. This property is read-only.
    ethernetMacAddress?: NullableOption<string> | undefined;
    /**
     * The Access State of the device in Exchange. This property is read-only. Possible values are: none, unknown, allowed,
     * blocked, quarantined.
     */
    exchangeAccessState?: DeviceManagementExchangeAccessState | undefined;
    /**
     * The reason for the device's access state in Exchange. This property is read-only. Possible values are: none, unknown,
     * exchangeGlobalRule, exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other,
     * compliant, notCompliant, notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword,
     * deviceNotKnownWithManagedApp.
     */
    exchangeAccessStateReason?: DeviceManagementExchangeAccessStateReason | undefined;
    // Last time the device contacted Exchange. This property is read-only.
    exchangeLastSuccessfulSyncDateTime?: string | undefined;
    // Free Storage in Bytes. This property is read-only.
    freeStorageSpaceInBytes?: number | undefined;
    // Integrated Circuit Card Identifier, it is A SIM card's unique identification number. This property is read-only.
    iccid?: NullableOption<string> | undefined;
    // IMEI. This property is read-only.
    imei?: NullableOption<string> | undefined;
    // Device encryption status. This property is read-only.
    isEncrypted?: boolean | undefined;
    // Device supervised status. This property is read-only.
    isSupervised?: boolean | undefined;
    // whether the device is jail broken or rooted. This property is read-only.
    jailBroken?: NullableOption<string> | undefined;
    // The date and time that the device last completed a successful sync with Intune. This property is read-only.
    lastSyncDateTime?: string | undefined;
    // Automatically generated name to identify a device. Can be overwritten to a user friendly name.
    managedDeviceName?: NullableOption<string> | undefined;
    // Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal.
    managedDeviceOwnerType?: ManagedDeviceOwnerType | undefined;
    /**
     * Management channel of the device. Intune, EAS, etc. This property is read-only. Possible values are: eas, mdm, easMdm,
     * intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm,
     * configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController, microsoft365ManagedMdm, msSense,
     * intuneAosp.
     */
    managementAgent?: ManagementAgentType | undefined;
    // Manufacturer of the device. This property is read-only.
    manufacturer?: NullableOption<string> | undefined;
    // MEID. This property is read-only.
    meid?: NullableOption<string> | undefined;
    // Model of the device. This property is read-only.
    model?: NullableOption<string> | undefined;
    // Notes on the device created by IT Admin
    notes?: NullableOption<string> | undefined;
    // Operating system of the device. Windows, iOS, etc. This property is read-only.
    operatingSystem?: NullableOption<string> | undefined;
    // Operating system version of the device. This property is read-only.
    osVersion?: NullableOption<string> | undefined;
    /**
     * Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read
     * Only. This property is read-only. Possible values are: unknown, activated, deactivated, secured, lowSeverity,
     * mediumSeverity, highSeverity, unresponsive, compromised, misconfigured.
     */
    partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState | undefined;
    // Phone number of the device. This property is read-only.
    phoneNumber?: NullableOption<string> | undefined;
    // Total Memory in Bytes. This property is read-only.
    physicalMemoryInBytes?: number | undefined;
    // An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
    remoteAssistanceSessionErrorDetails?: NullableOption<string> | undefined;
    // Url that allows a Remote Assistance session to be established with the device. This property is read-only.
    remoteAssistanceSessionUrl?: NullableOption<string> | undefined;
    // SerialNumber. This property is read-only.
    serialNumber?: NullableOption<string> | undefined;
    // Subscriber Carrier. This property is read-only.
    subscriberCarrier?: NullableOption<string> | undefined;
    // Total Storage in Bytes. This property is read-only.
    totalStorageSpaceInBytes?: number | undefined;
    // Unique Device Identifier for iOS and macOS devices. This property is read-only.
    udid?: NullableOption<string> | undefined;
    // User display name. This property is read-only.
    userDisplayName?: NullableOption<string> | undefined;
    // Unique Identifier for the user associated with the device. This property is read-only.
    userId?: NullableOption<string> | undefined;
    // Device user principal name. This property is read-only.
    userPrincipalName?: NullableOption<string> | undefined;
    // Wi-Fi MAC. This property is read-only.
    wiFiMacAddress?: NullableOption<string> | undefined;
    // Device compliance policy states for this device.
    deviceCompliancePolicyStates?: NullableOption<DeviceCompliancePolicyState[]> | undefined;
    // Device configuration states for this device.
    deviceConfigurationStates?: NullableOption<DeviceConfigurationState[]> | undefined;
    // Device category
    deviceCategory?: NullableOption<DeviceCategory> | undefined;
}
export interface ManagedAppRegistration extends Entity {
    // The app package Identifier
    appIdentifier?: NullableOption<MobileAppIdentifier> | undefined;
    // App version
    applicationVersion?: NullableOption<string> | undefined;
    // Date and time of creation
    createdDateTime?: string | undefined;
    // Host device name
    deviceName?: NullableOption<string> | undefined;
    /**
     * App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in
     * all conditions.
     */
    deviceTag?: NullableOption<string> | undefined;
    // Host device type
    deviceType?: NullableOption<string> | undefined;
    // Zero or more reasons an app registration is flagged. E.g. app running on rooted device
    flaggedReasons?: ManagedAppFlaggedReason[] | undefined;
    // Date and time of last the app synced with management service.
    lastSyncDateTime?: string | undefined;
    // App management SDK version
    managementSdkVersion?: NullableOption<string> | undefined;
    // Operating System version
    platformVersion?: NullableOption<string> | undefined;
    // The user Id to who this app registration belongs.
    userId?: NullableOption<string> | undefined;
    // Version of the entity.
    version?: NullableOption<string> | undefined;
    // Zero or more policys already applied on the registered app when it last synchronized with managment service.
    appliedPolicies?: NullableOption<ManagedAppPolicy[]> | undefined;
    // Zero or more policies admin intended for the app as of now.
    intendedPolicies?: NullableOption<ManagedAppPolicy[]> | undefined;
    // Zero or more long running operations triggered on the app registration.
    operations?: NullableOption<ManagedAppOperation[]> | undefined;
}
export interface DeviceManagementTroubleshootingEvent extends Entity {
    // Id used for tracing the failure in the service.
    correlationId?: NullableOption<string> | undefined;
    // Time when the event occurred .
    eventDateTime?: string | undefined;
}
export interface PlannerUser extends Entity {
    // Read-only. Nullable. Returns the plannerTasks assigned to the user.
    plans?: NullableOption<PlannerPlan[]> | undefined;
    // Read-only. Nullable. Returns the plannerTasks assigned to the user.
    tasks?: NullableOption<PlannerTask[]> | undefined;
}
export interface OfficeGraphInsights extends Entity {
    // Access this property from the derived type itemInsights.
    shared?: NullableOption<SharedInsight[]> | undefined;
    // Access this property from the derived type itemInsights.
    trending?: NullableOption<Trending[]> | undefined;
    // Access this property from the derived type itemInsights.
    used?: NullableOption<UsedInsight[]> | undefined;
}
export interface UserSettings extends Entity {
    /**
     * Reflects the organization level setting controlling delegate access to the trending API. When set to true, the
     * organization doesn't have access to Office Delve. The relevancy of the content displayed in Microsoft 365, for example
     * in Suggested sites in SharePoint Home and the Discover view in OneDrive for Business is affected for the whole
     * organization. This setting is read-only and can only be changed by administrators in the SharePoint admin center.
     */
    contributionToContentDiscoveryAsOrganizationDisabled?: boolean | undefined;
    /**
     * When set to true, the delegate access to the user's trending API is disabled. When set to true, documents in the user's
     * Office Delve are disabled. When set to true, the relevancy of the content displayed in Microsoft 365, for example in
     * Suggested sites in SharePoint Home and the Discover view in OneDrive for Business is affected. Users can control this
     * setting in Office Delve.
     */
    contributionToContentDiscoveryDisabled?: boolean | undefined;
    // The shift preferences for the user.
    shiftPreferences?: NullableOption<ShiftPreferences> | undefined;
}
export interface Onenote extends Entity {
    // The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
    notebooks?: NullableOption<Notebook[]> | undefined;
    /**
     * The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of
     * long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     */
    operations?: NullableOption<OnenoteOperation[]> | undefined;
    // The pages in all OneNote notebooks that are owned by the user or group. Read-only. Nullable.
    pages?: NullableOption<OnenotePage[]> | undefined;
    /**
     * The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get
     * the binary content of a specific resource. Read-only. Nullable.
     */
    resources?: NullableOption<OnenoteResource[]> | undefined;
    // The section groups in all OneNote notebooks that are owned by the user or group. Read-only. Nullable.
    sectionGroups?: NullableOption<SectionGroup[]> | undefined;
    // The sections in all OneNote notebooks that are owned by the user or group. Read-only. Nullable.
    sections?: NullableOption<OnenoteSection[]> | undefined;
}
export interface UserActivity extends Entity {
    /**
     * Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a
     * web-based app if no native app exists.
     */
    activationUrl?: string | undefined;
    /**
     * Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as
     * a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named
     * cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a
     * sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath.
     * You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file
     * and domain is needed for Word vs. PowerPoint.
     */
    activitySourceHost?: string | undefined;
    // Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.
    appActivityId?: string | undefined;
    /**
     * Optional. Short text description of the app used to generate the activity for use in cases when the app is not
     * installed on the user’s local device.
     */
    appDisplayName?: NullableOption<string> | undefined;
    // Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.
    contentInfo?: NullableOption<any> | undefined;
    /**
     * Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a
     * pointer to an item in an RSS feed).
     */
    contentUrl?: NullableOption<string> | undefined;
    // Set by the server. DateTime in UTC when the object was created on the server.
    createdDateTime?: NullableOption<string> | undefined;
    // Set by the server. DateTime in UTC when the object expired on the server.
    expirationDateTime?: NullableOption<string> | undefined;
    // Optional. URL used to launch the activity in a web-based app, if available.
    fallbackUrl?: NullableOption<string> | undefined;
    // Set by the server. DateTime in UTC when the object was modified on the server.
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
    status?: NullableOption<Status> | undefined;
    /**
     * Optional. The timezone in which the user's device used to generate the activity was located at activity creation time;
     * values supplied as Olson IDs in order to support cross-platform representation.
     */
    userTimezone?: NullableOption<string> | undefined;
    // Required. The object containing information to render the activity in the UX.
    visualElements?: VisualInfo | undefined;
    // Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
    historyItems?: NullableOption<ActivityHistoryItem[]> | undefined;
}
export interface OnlineMeeting extends Entity {
    /**
     * Specifies who can be a presenter in a meeting. Possible values are everyone, organization, roleIsPresenter, organizer,
     * and unknownFutureValue.
     */
    allowedPresenters?: NullableOption<OnlineMeetingPresenters> | undefined;
    // The phone access (dial-in) information for an online meeting. Read-only.
    audioConferencing?: NullableOption<AudioConferencing> | undefined;
    // The chat information associated with this online meeting.
    chatInfo?: NullableOption<ChatInfo> | undefined;
    // The meeting creation time in UTC. Read-only.
    creationDateTime?: NullableOption<string> | undefined;
    // The meeting end time in UTC.
    endDateTime?: NullableOption<string> | undefined;
    // The external ID. A custom ID. Optional.
    externalId?: NullableOption<string> | undefined;
    // Indicates whether to announce when callers join or leave.
    isEntryExitAnnounced?: NullableOption<boolean> | undefined;
    // The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only
    joinInformation?: NullableOption<ItemBody> | undefined;
    // The join URL of the online meeting. Read-only.
    joinWebUrl?: NullableOption<string> | undefined;
    // Specifies which participants can bypass the meeting lobby.
    lobbyBypassSettings?: NullableOption<LobbyBypassSettings> | undefined;
    // The participants associated with the online meeting. This includes the organizer and the attendees.
    participants?: NullableOption<MeetingParticipants> | undefined;
    // The meeting start time in UTC.
    startDateTime?: NullableOption<string> | undefined;
    // The subject of the online meeting.
    subject?: NullableOption<string> | undefined;
    // The video teleconferencing ID. Read-only.
    videoTeleconferenceId?: NullableOption<string> | undefined;
}
export interface Presence extends Entity {
    /**
     * The supplemental information to a user's availability. Possible values are Available, Away, BeRightBack, Busy,
     * DoNotDisturb, InACall, InAConferenceCall, Inactive,InAMeeting, Offline, OffWork,OutOfOffice,
     * PresenceUnknown,Presenting, UrgentInterruptionsOnly.
     */
    activity?: NullableOption<string> | undefined;
    /**
     * The base presence information for a user. Possible values are Available, AvailableIdle, Away, BeRightBack, Busy,
     * BusyIdle, DoNotDisturb, Offline, PresenceUnknown
     */
    availability?: NullableOption<string> | undefined;
}
export interface Authentication extends Entity {
    fido2Methods?: NullableOption<Fido2AuthenticationMethod[]> | undefined;
    methods?: NullableOption<AuthenticationMethod[]> | undefined;
    microsoftAuthenticatorMethods?: NullableOption<MicrosoftAuthenticatorAuthenticationMethod[]> | undefined;
    windowsHelloForBusinessMethods?: NullableOption<WindowsHelloForBusinessAuthenticationMethod[]> | undefined;
}
export interface Chat extends Entity {
    // Specifies the type of chat. Possible values are:group, oneOnOne and meeting.
    chatType?: ChatType | undefined;
    // Date and time at which the chat was created. Read-only.
    createdDateTime?: NullableOption<string> | undefined;
    // Date and time at which the chat was renamed or list of members were last changed. Read-only.
    lastUpdatedDateTime?: NullableOption<string> | undefined;
    // (Optional) Subject or topic for the chat. Only available for group chats.
    topic?: NullableOption<string> | undefined;
    // A collection of all the apps in the chat. Nullable.
    installedApps?: NullableOption<TeamsAppInstallation[]> | undefined;
    // A collection of all the members in the chat. Nullable.
    members?: NullableOption<ConversationMember[]> | undefined;
    // A collection of all the messages in the chat. Nullable.
    messages?: NullableOption<ChatMessage[]> | undefined;
    tabs?: NullableOption<TeamsTab[]> | undefined;
}
export interface Team extends Entity {
    /**
     * An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured
     * set in the tenant's directory.
     */
    classification?: NullableOption<string> | undefined;
    // Timestamp at which the team was created.
    createdDateTime?: NullableOption<string> | undefined;
    // An optional description for the team. Maximum length: 1024 characters.
    description?: NullableOption<string> | undefined;
    // The name of the team.
    displayName?: NullableOption<string> | undefined;
    // Settings to configure use of Giphy, memes, and stickers in the team.
    funSettings?: NullableOption<TeamFunSettings> | undefined;
    // Settings to configure whether guests can create, update, or delete channels in the team.
    guestSettings?: NullableOption<TeamGuestSettings> | undefined;
    // A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API.
    internalId?: NullableOption<string> | undefined;
    // Whether this team is in read-only mode.
    isArchived?: NullableOption<boolean> | undefined;
    /**
     * Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the
     * team.
     */
    memberSettings?: NullableOption<TeamMemberSettings> | undefined;
    // Settings to configure messaging and mentions in the team.
    messagingSettings?: NullableOption<TeamMessagingSettings> | undefined;
    /**
     * Optional. Indicates whether the team is intended for a particular use case. Each team specialization has access to
     * unique behaviors and experiences targeted to its use case.
     */
    specialization?: NullableOption<TeamSpecialization> | undefined;
    // The visibility of the group and team. Defaults to Public.
    visibility?: NullableOption<TeamVisibilityType> | undefined;
    /**
     * A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a
     * team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not
     * parsed.
     */
    webUrl?: NullableOption<string> | undefined;
    // The schedule of shifts for this team.
    schedule?: NullableOption<Schedule> | undefined;
    // The collection of channels &amp; messages associated with the team.
    channels?: NullableOption<Channel[]> | undefined;
    group?: NullableOption<Group> | undefined;
    // The apps installed in this team.
    installedApps?: NullableOption<TeamsAppInstallation[]> | undefined;
    // Members and owners of the team.
    members?: NullableOption<ConversationMember[]> | undefined;
    // The async operations that ran or are running on this team.
    operations?: NullableOption<TeamsAsyncOperation[]> | undefined;
    // The general channel for the team.
    primaryChannel?: NullableOption<Channel> | undefined;
    // The template this team was created from. See available templates.
    template?: NullableOption<TeamsTemplate> | undefined;
}
export interface UserTeamwork extends Entity {
    // The apps installed in the personal scope of this user.
    installedApps?: NullableOption<UserScopeTeamsAppInstallation[]> | undefined;
}
export interface Todo extends Entity {
    // The task lists in the users mailbox.
    lists?: NullableOption<TodoTaskList[]> | undefined;
}
export interface Application extends DirectoryObject {
    /**
     * Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications
     * that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services
     * like Office 365 call the application in the context of a document the user is working on.
     */
    addIns?: AddIn[] | undefined;
    // Specifies settings for an application that implements a web API.
    api?: NullableOption<ApiApplication> | undefined;
    // The unique identifier for the application that is assigned by Azure AD. Not nullable. Read-only.
    appId?: NullableOption<string> | undefined;
    // Unique identifier of the applicationTemplate.
    applicationTemplateId?: NullableOption<string> | undefined;
    /**
     * The collection of roles assigned to the application. With app role assignments, these roles can be assigned to users,
     * groups, or service principals associated with other applications. Not nullable.
     */
    appRoles?: AppRole[] | undefined;
    /**
     * The date and time the application was registered. The DateTimeOffset type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: NullableOption<string> | undefined;
    description?: NullableOption<string> | undefined;
    /**
     * Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value),
     * NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious
     * activity, or a violation of the Microsoft Services Agreement).
     */
    disabledByMicrosoftStatus?: NullableOption<string> | undefined;
    // The display name for the application.
    displayName?: NullableOption<string> | undefined;
    /**
     * Configures the groups claim issued in a user or OAuth 2.0 access token that the application expects. To set this
     * attribute, use one of the following string values: None, SecurityGroup (for security groups and Azure AD roles), All
     * (this gets all security groups, distribution groups, and Azure AD directory roles that the signed-in user is a member
     * of).
     */
    groupMembershipClaims?: NullableOption<string> | undefined;
    /**
     * The URIs that identify the application within its Azure AD tenant, or within a verified custom domain if the
     * application is multi-tenant. For more information, see Application Objects and Service Principal Objects. The any
     * operator is required for filter expressions on multi-valued properties. Not nullable.
     */
    identifierUris?: string[] | undefined;
    /**
     * Basic profile information of the application, such as it's marketing, support, terms of service, and privacy statement
     * URLs. The terms of service and privacy statement are surfaced to users through the user consent experience. For more
     * information, see How to: Add Terms of service and privacy statement for registered Azure AD apps.
     */
    info?: NullableOption<InformationalUrl> | undefined;
    // Specifies whether this application supports device authentication without a user. The default is false.
    isDeviceOnlyAuthSupported?: NullableOption<boolean> | undefined;
    /**
     * Specifies the fallback application type as public client, such as an installed application running on a mobile device.
     * The default value is false which means the fallback application type is confidential client such as a web app. There
     * are certain scenarios where Azure AD cannot determine the client application type. For example, the ROPC flow where the
     * application is configured without specifying a redirect URI. In those cases Azure AD interprets the application type
     * based on the value of this property.
     */
    isFallbackPublicClient?: NullableOption<boolean> | undefined;
    // The collection of key credentials associated with the application. Not nullable.
    keyCredentials?: KeyCredential[] | undefined;
    // The main logo for the application. Not nullable.
    logo?: any;
    // Notes relevant for the management of the application.
    notes?: NullableOption<string> | undefined;
    oauth2RequirePostResponse?: boolean | undefined;
    /**
     * Application developers can configure optional claims in their Azure AD applications to specify the claims that are sent
     * to their application by the Microsoft security token service. For more information, see How to: Provide optional claims
     * to your app.
     */
    optionalClaims?: NullableOption<OptionalClaims> | undefined;
    // Specifies parental control settings for an application.
    parentalControlSettings?: NullableOption<ParentalControlSettings> | undefined;
    // The collection of password credentials associated with the application. Not nullable.
    passwordCredentials?: PasswordCredential[] | undefined;
    // Specifies settings for installed clients such as desktop or mobile devices.
    publicClient?: NullableOption<PublicClientApplication> | undefined;
    // The verified publisher domain for the application. Read-only.
    publisherDomain?: NullableOption<string> | undefined;
    /**
     * Specifies the resources that the application needs to access. This property also specifies the set of OAuth permission
     * scopes and application roles that it needs for each of those resources. This configuration of access to the required
     * resources drives the consent experience. Not nullable.
     */
    requiredResourceAccess?: RequiredResourceAccess[] | undefined;
    /**
     * Specifies the Microsoft accounts that are supported for the current application. Supported values are: AzureADMyOrg,
     * AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount, PersonalMicrosoftAccount. See more in the table below.
     */
    signInAudience?: NullableOption<string> | undefined;
    /**
     * Specifies settings for a single-page application, including sign out URLs and redirect URIs for authorization codes and
     * access tokens.
     */
    spa?: NullableOption<SpaApplication> | undefined;
    // Custom strings that can be used to categorize and identify the application. Not nullable.
    tags?: string[] | undefined;
    /**
     * Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD encrypts all the
     * tokens it emits by using the key this property points to. The application code that receives the encrypted token must
     * use the matching private key to decrypt the token before it can be used for the signed-in user.
     */
    tokenEncryptionKeyId?: NullableOption<string> | undefined;
    // Specifies settings for a web application.
    web?: NullableOption<WebApplication> | undefined;
    // Read-only.
    createdOnBehalfOf?: NullableOption<DirectoryObject> | undefined;
    // Read-only. Nullable.
    extensionProperties?: NullableOption<ExtensionProperty[]> | undefined;
    homeRealmDiscoveryPolicies?: NullableOption<HomeRealmDiscoveryPolicy[]> | undefined;
    // Directory objects that are owners of the application. Read-only. Nullable.
    owners?: NullableOption<DirectoryObject[]> | undefined;
    tokenIssuancePolicies?: NullableOption<TokenIssuancePolicy[]> | undefined;
    // The tokenLifetimePolicies assigned to this application.
    tokenLifetimePolicies?: NullableOption<TokenLifetimePolicy[]> | undefined;
}
export interface ServicePrincipal extends DirectoryObject {
    // true if the service principal account is enabled; otherwise, false.
    accountEnabled?: NullableOption<boolean> | undefined;
    /**
     * Defines custom behavior that a consuming service can use to call an app in specific contexts. For example, applications
     * that can render file streams may set the addIns property for its 'FileHandler' functionality. This will let services
     * like Microsoft 365 call the application in the context of a document the user is working on.
     */
    addIns?: AddIn[] | undefined;
    /**
     * Used to retrieve service principals by subscription, identify resource group and full resource ids for managed
     * identities.
     */
    alternativeNames?: string[] | undefined;
    // The description exposed by the associated application.
    appDescription?: NullableOption<string> | undefined;
    // The display name exposed by the associated application.
    appDisplayName?: NullableOption<string> | undefined;
    // The unique identifier for the associated application (its appId property).
    appId?: NullableOption<string> | undefined;
    // Unique identifier of the applicationTemplate that the servicePrincipal was created from. Read-only.
    applicationTemplateId?: NullableOption<string> | undefined;
    /**
     * Contains the tenant id where the application is registered. This is applicable only to service principals backed by
     * applications.
     */
    appOwnerOrganizationId?: NullableOption<string> | undefined;
    /**
     * Specifies whether users or other service principals need to be granted an app role assignment for this service
     * principal before users can sign in or apps can get tokens. The default value is false. Not nullable.
     */
    appRoleAssignmentRequired?: boolean | undefined;
    /**
     * The roles exposed by the application which this service principal represents. For more information see the appRoles
     * property definition on the application entity. Not nullable.
     */
    appRoles?: AppRole[] | undefined;
    /**
     * Free text field to provide an internal end-user facing description of the service principal. End-user portals such
     * MyApps will display the application description in this field. The maximum allowed size is 1024 characters.
     */
    description?: NullableOption<string> | undefined;
    /**
     * Specifies whether Microsoft has disabled the registered application. Possible values are: null (default value),
     * NotDisabled, and DisabledDueToViolationOfServicesAgreement (reasons may include suspicious, abusive, or malicious
     * activity, or a violation of the Microsoft Services Agreement).
     */
    disabledByMicrosoftStatus?: NullableOption<string> | undefined;
    // The display name for the service principal.
    displayName?: NullableOption<string> | undefined;
    // Home page or landing page of the application.
    homepage?: NullableOption<string> | undefined;
    /**
     * Basic profile information of the acquired application such as app's marketing, support, terms of service and privacy
     * statement URLs. The terms of service and privacy statement are surfaced to users through the user consent experience.
     * For more info, see How to: Add Terms of service and privacy statement for registered Azure AD apps.
     */
    info?: NullableOption<InformationalUrl> | undefined;
    // The collection of key credentials associated with the service principal. Not nullable.
    keyCredentials?: KeyCredential[] | undefined;
    /**
     * Specifies the URL where the service provider redirects the user to Azure AD to authenticate. Azure AD uses the URL to
     * launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on
     * for applications configured with SAML-based single sign-on. The user launches the application from Microsoft 365, the
     * Azure AD My Apps, or the Azure AD SSO URL.
     */
    loginUrl?: NullableOption<string> | undefined;
    /**
     * Specifies the URL that will be used by Microsoft's authorization service to logout an user using OpenId Connect
     * front-channel, back-channel or SAML logout protocols.
     */
    logoutUrl?: NullableOption<string> | undefined;
    /**
     * Free text field to capture information about the service principal, typically used for operational purposes. Maximum
     * allowed size is 1024 characters.
     */
    notes?: NullableOption<string> | undefined;
    /**
     * Specifies the list of email addresses where Azure AD sends a notification when the active certificate is near the
     * expiration date. This is only for the certificates used to sign the SAML token issued for Azure AD Gallery
     * applications.
     */
    notificationEmailAddresses?: string[] | undefined;
    /**
     * The delegated permissions exposed by the application. For more information see the oauth2PermissionScopes property on
     * the application entity's api property. Not nullable.
     */
    oauth2PermissionScopes?: PermissionScope[] | undefined;
    // The collection of password credentials associated with the service principal. Not nullable.
    passwordCredentials?: PasswordCredential[] | undefined;
    /**
     * Specifies the single sign-on mode configured for this application. Azure AD uses the preferred single sign-on mode to
     * launch the application from Microsoft 365 or the Azure AD My Apps. The supported values are password, saml,
     * notSupported, and oidc.
     */
    preferredSingleSignOnMode?: NullableOption<string> | undefined;
    // Reserved for internal use only. Do not write or otherwise rely on this property. May be removed in future versions.
    preferredTokenSigningKeyThumbprint?: NullableOption<string> | undefined;
    /**
     * The URLs that user tokens are sent to for sign in with the associated application, or the redirect URIs that OAuth 2.0
     * authorization codes and access tokens are sent to for the associated application. Not nullable.
     */
    replyUrls?: string[] | undefined;
    // The collection for settings related to saml single sign-on.
    samlSingleSignOnSettings?: NullableOption<SamlSingleSignOnSettings> | undefined;
    /**
     * Contains the list of identifiersUris, copied over from the associated application. Additional values can be added to
     * hybrid applications. These values can be used to identify the permissions exposed by this app within Azure AD. For
     * example,Client apps can specify a resource URI which is based on the values of this property to acquire an access
     * token, which is the URI returned in the 'aud' claim.The any operator is required for filter expressions on multi-valued
     * properties. Not nullable.
     */
    servicePrincipalNames?: string[] | undefined;
    /**
     * Identifies if the service principal represents an application or a managed identity. This is set by Azure AD
     * internally. For a service principal that represents an application this is set as Application. For a service principal
     * that represent a managed identity this is set as ManagedIdentity.
     */
    servicePrincipalType?: NullableOption<string> | undefined;
    /**
     * Specifies the Microsoft accounts that are supported for the current application. Read-only. Supported values
     * are:AzureADMyOrg: Users with a Microsoft work or school account in my organization’s Azure AD tenant
     * (single-tenant).AzureADMultipleOrgs: Users with a Microsoft work or school account in any organization’s Azure AD
     * tenant (multi-tenant).AzureADandPersonalMicrosoftAccount: Users with a personal Microsoft account, or a work or school
     * account in any organization’s Azure AD tenant.PersonalMicrosoftAccount: Users with a personal Microsoft account only.
     */
    signInAudience?: NullableOption<string> | undefined;
    // Custom strings that can be used to categorize and identify the service principal. Not nullable.
    tags?: string[] | undefined;
    /**
     * Specifies the keyId of a public key from the keyCredentials collection. When configured, Azure AD issues tokens for
     * this application encrypted using the key specified by this property. The application code that receives the encrypted
     * token must use the matching private key to decrypt the token before it can be used for the signed-in user.
     */
    tokenEncryptionKeyId?: NullableOption<string> | undefined;
    // App role assignments for this app or service, granted to users, groups, and other service principals.
    appRoleAssignedTo?: NullableOption<AppRoleAssignment[]> | undefined;
    // App role assignment for another app or service, granted to this service principal.
    appRoleAssignments?: NullableOption<AppRoleAssignment[]> | undefined;
    // The claimsMappingPolicies assigned to this service principal.
    claimsMappingPolicies?: NullableOption<ClaimsMappingPolicy[]> | undefined;
    // Directory objects created by this service principal. Read-only. Nullable.
    createdObjects?: NullableOption<DirectoryObject[]> | undefined;
    // The permission classifications for delegated permissions exposed by the app that this service principal represents.
    delegatedPermissionClassifications?: NullableOption<DelegatedPermissionClassification[]> | undefined;
    /**
     * Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint
     * endpoints that other applications can discover and use in their experiences.
     */
    endpoints?: NullableOption<Endpoint[]> | undefined;
    // The homeRealmDiscoveryPolicies assigned to this service principal.
    homeRealmDiscoveryPolicies?: NullableOption<HomeRealmDiscoveryPolicy[]> | undefined;
    // Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable.
    memberOf?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * Delegated permission grants authorizing this service principal to access an API on behalf of a signed-in user.
     * Read-only. Nullable.
     */
    oauth2PermissionGrants?: NullableOption<OAuth2PermissionGrant[]> | undefined;
    // Directory objects that are owned by this service principal. Read-only. Nullable.
    ownedObjects?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * Directory objects that are owners of this servicePrincipal. The owners are a set of non-admin users or
     * servicePrincipals who are allowed to modify this object. Read-only. Nullable.
     */
    owners?: NullableOption<DirectoryObject[]> | undefined;
    // The tokenIssuancePolicies assigned to this service principal.
    tokenIssuancePolicies?: NullableOption<TokenIssuancePolicy[]> | undefined;
    // The tokenLifetimePolicies assigned to this service principal.
    tokenLifetimePolicies?: NullableOption<TokenLifetimePolicy[]> | undefined;
    transitiveMemberOf?: NullableOption<DirectoryObject[]> | undefined;
}
export interface ExtensionProperty extends DirectoryObject {
    // Display name of the application object on which this extension property is defined. Read-only.
    appDisplayName?: NullableOption<string> | undefined;
    /**
     * Specifies the data type of the value the extension property can hold. Following values are supported. Not nullable.
     * Binary - 256 bytes maximumBooleanDateTime - Must be specified in ISO 8601 format. Will be stored in UTC.Integer -
     * 32-bit value.LargeInteger - 64-bit value.String - 256 characters maximum
     */
    dataType?: string | undefined;
    // Indicates if this extension property was sycned from onpremises directory using Azure AD Connect. Read-only.
    isSyncedFromOnPremises?: NullableOption<boolean> | undefined;
    // Name of the extension property. Not nullable.
    name?: string | undefined;
    // Following values are supported. Not nullable. UserGroupOrganizationDeviceApplication
    targetObjects?: string[] | undefined;
}
export interface PolicyBase extends DirectoryObject {
    // Description for this policy.
    description?: NullableOption<string> | undefined;
    // Display name for this policy.
    displayName?: NullableOption<string> | undefined;
}
export interface StsPolicy extends PolicyBase {
    /**
     * A string collection containing a JSON string that defines the rules and settings for a policy. The syntax for the
     * definition differs for each derived policy type. Required.
     */
    definition?: string[] | undefined;
    /**
     * If set to true, activates this policy. There can be many policies for the same policy type, but only one can be
     * activated as the organization default. Optional, default value is false.
     */
    isOrganizationDefault?: NullableOption<boolean> | undefined;
    appliesTo?: NullableOption<DirectoryObject[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface HomeRealmDiscoveryPolicy extends StsPolicy {}
// tslint:disable-next-line: no-empty-interface
export interface TokenIssuancePolicy extends StsPolicy {}
// tslint:disable-next-line: no-empty-interface
export interface TokenLifetimePolicy extends StsPolicy {}
export interface ApplicationTemplate extends Entity {
    /**
     * The list of categories for the application. Supported values can be: Collaboration, Business Management, Consumer,
     * Content management, CRM, Data services, Developer services, E-commerce, Education, ERP, Finance, Health, Human
     * resources, IT infrastructure, Mail, Management, Marketing, Media, Productivity, Project management, Telecommunications,
     * Tools, Travel, and Web design &amp; hosting.
     */
    categories?: NullableOption<string[]> | undefined;
    // A description of the application.
    description?: NullableOption<string> | undefined;
    // The name of the application.
    displayName?: NullableOption<string> | undefined;
    // The home page URL of the application.
    homePageUrl?: NullableOption<string> | undefined;
    // The URL to get the logo for this application.
    logoUrl?: NullableOption<string> | undefined;
    // The name of the publisher for this application.
    publisher?: NullableOption<string> | undefined;
    // The list of provisioning modes supported by this application. The only valid value is sync.
    supportedProvisioningTypes?: NullableOption<string[]> | undefined;
    /**
     * The list of single sign-on modes supported by this application. The supported values are oidc, password, saml, and
     * notSupported.
     */
    supportedSingleSignOnModes?: NullableOption<string[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ClaimsMappingPolicy extends StsPolicy {}
export interface DelegatedPermissionClassification extends Entity {
    // The classification value being given. Possible value: low. Does not support $filter.
    classification?: NullableOption<PermissionClassificationType> | undefined;
    /**
     * The unique identifier (id) for the delegated permission listed in the publishedPermissionScopes collection of the
     * servicePrincipal. Required on create. Does not support $filter.
     */
    permissionId?: NullableOption<string> | undefined;
    /**
     * The claim value (value) for the delegated permission listed in the publishedPermissionScopes collection of the
     * servicePrincipal. Does not support $filter.
     */
    permissionName?: NullableOption<string> | undefined;
}
export interface Endpoint extends DirectoryObject {
    /**
     * Describes the capability that is associated with this resource. (e.g. Messages, Conversations, etc.) Not nullable.
     * Read-only.
     */
    capability?: string | undefined;
    // Application id of the publishing underlying service. Not nullable. Read-only.
    providerId?: NullableOption<string> | undefined;
    // Name of the publishing underlying service. Read-only.
    providerName?: NullableOption<string> | undefined;
    /**
     * For Microsoft 365 groups, this is set to a well-known name for the resource (e.g. Yammer.FeedURL etc.). Not nullable.
     * Read-only.
     */
    providerResourceId?: NullableOption<string> | undefined;
    // URL of the published resource. Not nullable. Read-only.
    uri?: string | undefined;
}
export interface AuthenticationMethodConfiguration extends Entity {
    // The state of the policy. Possible values are: enabled, disabled.
    state?: NullableOption<AuthenticationMethodState> | undefined;
}
export interface AuthenticationMethodsPolicy extends Entity {
    // A description of the policy.
    description?: NullableOption<string> | undefined;
    // The name of the policy.
    displayName?: NullableOption<string> | undefined;
    // The date and time of the last update to the policy.
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // The version of the policy in use.
    policyVersion?: NullableOption<string> | undefined;
    reconfirmationInDays?: NullableOption<number> | undefined;
    // Represents the settings for each authentication method.
    authenticationMethodConfigurations?: NullableOption<AuthenticationMethodConfiguration[]> | undefined;
}
export interface AuthenticationMethodTarget extends Entity {
    // Determines if the user is enforced to register the authentication method.
    isRegistrationRequired?: boolean | undefined;
    // Possible values are: user, group.
    targetType?: AuthenticationMethodTargetType | undefined;
}
export interface EmailAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration {
    /**
     * Determines whether email OTP is usable by external users for authentication. Possible values are: default, enabled,
     * disabled, unknownFutureValue. Tenants in the default state who did not use public preview will automatically have email
     * OTP enabled beginning in October 2021.
     */
    allowExternalIdToUseEmailOtp?: NullableOption<ExternalEmailOtpState> | undefined;
    // A collection of users or groups who are enabled to use the authentication method.
    includeTargets?: NullableOption<AuthenticationMethodTarget[]> | undefined;
}
export interface Fido2AuthenticationMethodConfiguration extends AuthenticationMethodConfiguration {
    // Determines whether attestation must be enforced for FIDO2 security key registration.
    isAttestationEnforced?: NullableOption<boolean> | undefined;
    // Determines if users can register new FIDO2 security keys.
    isSelfServiceRegistrationAllowed?: NullableOption<boolean> | undefined;
    /**
     * Controls whether key restrictions are enforced on FIDO2 security keys, either allowing or disallowing certain key types
     * as defined by Authenticator Attestation GUID (AAGUID), an identifier that indicates the type (e.g. make and model) of
     * the authenticator.
     */
    keyRestrictions?: NullableOption<Fido2KeyRestrictions> | undefined;
    // A collection of users or groups who are enabled to use the authentication method.
    includeTargets?: NullableOption<AuthenticationMethodTarget[]> | undefined;
}
export interface MicrosoftAuthenticatorAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration {
    // A collection of users or groups who are enabled to use the authentication method.
    includeTargets?: NullableOption<MicrosoftAuthenticatorAuthenticationMethodTarget[]> | undefined;
}
export interface MicrosoftAuthenticatorAuthenticationMethodTarget extends AuthenticationMethodTarget {
    /**
     * Determines which types of notifications can be used for sign-in. Possible values are: any, deviceBasedPush
     * (passwordless only), push.
     */
    authenticationMode?: MicrosoftAuthenticatorAuthenticationMode | undefined;
    /**
     * Determines what additional settings should be applied to Microsoft Authenticator. Possible values are: null,
     * requireNumberMatching (Requires number matching for MFA notifications. Value is ignored for phone sign-in
     * notifications).
     */
    featureSettings?: NullableOption<AuthenticatorAppFeatureSettings> | undefined;
}
export interface PolicyRoot extends Entity {
    authenticationMethodsPolicy?: NullableOption<AuthenticationMethodsPolicy> | undefined;
    authenticationFlowsPolicy?: NullableOption<AuthenticationFlowsPolicy> | undefined;
    activityBasedTimeoutPolicies?: NullableOption<ActivityBasedTimeoutPolicy[]> | undefined;
    authorizationPolicy?: NullableOption<AuthorizationPolicy> | undefined;
    claimsMappingPolicies?: NullableOption<ClaimsMappingPolicy[]> | undefined;
    homeRealmDiscoveryPolicies?: NullableOption<HomeRealmDiscoveryPolicy[]> | undefined;
    permissionGrantPolicies?: NullableOption<PermissionGrantPolicy[]> | undefined;
    tokenIssuancePolicies?: NullableOption<TokenIssuancePolicy[]> | undefined;
    tokenLifetimePolicies?: NullableOption<TokenLifetimePolicy[]> | undefined;
    featureRolloutPolicies?: NullableOption<FeatureRolloutPolicy[]> | undefined;
    adminConsentRequestPolicy?: NullableOption<AdminConsentRequestPolicy> | undefined;
    conditionalAccessPolicies?: NullableOption<ConditionalAccessPolicy[]> | undefined;
    identitySecurityDefaultsEnforcementPolicy?: NullableOption<IdentitySecurityDefaultsEnforcementPolicy> | undefined;
}
export interface AuthenticationFlowsPolicy extends Entity {
    // Inherited property. A description of the policy. This property is not a key. Optional. Read-only.
    description?: NullableOption<string> | undefined;
    // Inherited property. The human-readable name of the policy. This property is not a key. Optional. Read-only.
    displayName?: NullableOption<string> | undefined;
    /**
     * Contains selfServiceSignUpAuthenticationFlowConfiguration settings that convey whether self-service sign-up is enabled
     * or disabled. This property is not a key. Optional. Read-only.
     */
    selfServiceSignUp?: NullableOption<SelfServiceSignUpAuthenticationFlowConfiguration> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ActivityBasedTimeoutPolicy extends StsPolicy {}
export interface AuthorizationPolicy extends PolicyBase {
    // Indicates whether users can sign up for email based subscriptions.
    allowedToSignUpEmailBasedSubscriptions?: boolean | undefined;
    // Indicates whether the Self-Serve Password Reset feature can be used by users on the tenant.
    allowedToUseSSPR?: boolean | undefined;
    // Indicates whether a user can join the tenant by email validation.
    allowEmailVerifiedUsersToJoinOrganization?: boolean | undefined;
    /**
     * Indicates who can invite external users to the organization. Possible values are: none, adminsAndGuestInviters,
     * adminsGuestInvitersAndAllMembers, everyone. everyone is the default setting for all cloud environments except US
     * Government. See more in the table below.
     */
    allowInvitesFrom?: NullableOption<AllowInvitesFrom> | undefined;
    /**
     * To disable the use of MSOL PowerShell set this property to true. This will also disable user-based access to the legacy
     * service endpoint used by MSOL PowerShell. This does not affect Azure AD Connect or Microsoft Graph.
     */
    blockMsolPowerShell?: NullableOption<boolean> | undefined;
    // Specifies certain customizable permissions for default user role.
    defaultUserRolePermissions?: DefaultUserRolePermissions | undefined;
    /**
     * Represents role templateId for the role that should be granted to guest user. Refer to List unifiedRoleDefinitions to
     * find the list of available role templates. Currently following roles are supported: User
     * (a0b1b346-4d3e-4e8b-98f8-753987be4970), Guest User (10dae51f-b6af-4016-8d66-8c2a99b929b3), and Restricted Guest User
     * (2af84b1e-32c8-42b7-82bc-daa82404023b).
     */
    guestUserRoleId?: NullableOption<string> | undefined;
}
export interface PermissionGrantPolicy extends PolicyBase {
    // Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
    excludes?: NullableOption<PermissionGrantConditionSet[]> | undefined;
    // Condition sets which are included in this permission grant policy. Automatically expanded on GET.
    includes?: NullableOption<PermissionGrantConditionSet[]> | undefined;
}
export interface FeatureRolloutPolicy extends Entity {
    // A description for this feature rollout policy.
    description?: NullableOption<string> | undefined;
    // The display name for this feature rollout policy.
    displayName?: string | undefined;
    // Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue.
    feature?: StagedFeatureName | undefined;
    // Indicates whether this feature rollout policy should be applied to the entire organization.
    isAppliedToOrganization?: boolean | undefined;
    // Indicates whether the feature rollout is enabled.
    isEnabled?: boolean | undefined;
    // Nullable. Specifies a list of directoryObjects that feature is enabled for.
    appliesTo?: NullableOption<DirectoryObject[]> | undefined;
}
export interface AdminConsentRequestPolicy extends Entity {
    // Specifies whether the admin consent request feature is enabled or disabled. Required.
    isEnabled?: boolean | undefined;
    // Specifies whether reviewers will receive notifications. Required.
    notifyReviewers?: boolean | undefined;
    // Specifies whether reviewers will receive reminder emails. Required.
    remindersEnabled?: boolean | undefined;
    // Specifies the duration the request is active before it automatically expires if no decision is applied.
    requestDurationInDays?: number | undefined;
    // Required.
    reviewers?: NullableOption<AccessReviewReviewerScope[]> | undefined;
    // Specifies the version of this policy. When the policy is updated, this version is updated. Read-only.
    version?: number | undefined;
}
export interface ConditionalAccessPolicy extends Entity {
    // Specifies the rules that must be met for the policy to apply. Required.
    conditions?: ConditionalAccessConditionSet | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // Not used.
    description?: NullableOption<string> | undefined;
    // Specifies a display name for the conditionalAccessPolicy object.
    displayName?: string | undefined;
    // Specifies the grant controls that must be fulfilled to pass the policy.
    grantControls?: NullableOption<ConditionalAccessGrantControls> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly.
     */
    modifiedDateTime?: NullableOption<string> | undefined;
    // Specifies the session controls that are enforced after sign-in.
    sessionControls?: NullableOption<ConditionalAccessSessionControls> | undefined;
    /**
     * Specifies the state of the conditionalAccessPolicy object. Possible values are: enabled, disabled,
     * enabledForReportingButNotEnforced. Required.
     */
    state?: ConditionalAccessPolicyState | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentitySecurityDefaultsEnforcementPolicy extends PolicyBase {
    // If set to true, Azure Active Directory security defaults is enabled for the tenant.
    isEnabled?: boolean | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentityApiConnector extends Entity {
    /**
     * The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client
     * certificate are supported.
     */
    authenticationConfiguration?: NullableOption<ApiAuthenticationConfigurationBase> | undefined;
    // The name of the API connector.
    displayName?: NullableOption<string> | undefined;
    // The URL of the API endpoint to call.
    targetUrl?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentityUserFlow extends Entity {
    userFlowType?: UserFlowType | undefined;
    userFlowTypeVersion?: number | undefined;
}
export interface B2xIdentityUserFlow extends IdentityUserFlow {
    /**
     * Configuration for enabling an API connector for use as part of the self-service sign up user flow. You can only obtain
     * the value of this object using Get userFlowApiConnectorConfiguration.
     */
    apiConnectorConfiguration?: NullableOption<UserFlowApiConnectorConfiguration> | undefined;
    // The identity providers included in the user flow.
    identityProviders?: NullableOption<IdentityProvider[]> | undefined;
    /**
     * The languages supported for customization within the user flow. Language customization is enabled by default in
     * self-service sign up user flow. You cannot create custom languages in self-service sign up user flows.
     */
    languages?: NullableOption<UserFlowLanguageConfiguration[]> | undefined;
    // The user attribute assignments included in the user flow.
    userAttributeAssignments?: NullableOption<IdentityUserFlowAttributeAssignment[]> | undefined;
    userFlowIdentityProviders?: NullableOption<IdentityProviderBase[]> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentityProvider extends Entity {
    /**
     * The client ID for the application obtained when registering the application with the identity provider. This is a
     * required field. Required. Not nullable.
     */
    clientId?: NullableOption<string> | undefined;
    /**
     * The client secret for the application obtained when registering the application with the identity provider. This is
     * write-only. A read operation will return ****. This is a required field. Required. Not nullable.
     */
    clientSecret?: NullableOption<string> | undefined;
    // The display name of the identity provider. Not nullable.
    name?: NullableOption<string> | undefined;
    /**
     * The identity provider type is a required field. For B2B scenario: Google, Facebook. For B2C scenario: Microsoft,
     * Google, Amazon, LinkedIn, Facebook, GitHub, Twitter, Weibo,QQ, WeChat, OpenIDConnect. Not nullable.
     */
    type?: NullableOption<string> | undefined;
}
export interface UserFlowLanguageConfiguration extends Entity {
    // The language name to display. This property is read-only.
    displayName?: NullableOption<string> | undefined;
    // Indicates whether the language is enabled within the user flow.
    isEnabled?: boolean | undefined;
    /**
     * Collection of pages with the default content to display in a user flow for a specified language. This collection does
     * not allow any kind of modification.
     */
    defaultPages?: NullableOption<UserFlowLanguagePage[]> | undefined;
    /**
     * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection
     * only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
     */
    overridesPages?: NullableOption<UserFlowLanguagePage[]> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentityUserFlowAttributeAssignment extends Entity {
    // The display name of the identityUserFlowAttribute within a user flow.
    displayName?: NullableOption<string> | undefined;
    /**
     * Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value.
     * false means the user cannot complete sign-up without providing a value.
     */
    isOptional?: boolean | undefined;
    /**
     * Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's
     * phone number or email address.
     */
    requiresVerification?: boolean | undefined;
    /**
     * The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect,
     * dropdownSingleSelect, or checkboxMultiSelect.
     */
    userAttributeValues?: NullableOption<UserAttributeValuesItem[]> | undefined;
    /**
     * The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect,
     * dropdownSingleSelect, emailBox, checkboxMultiSelect.
     */
    userInputType?: IdentityUserFlowAttributeInputType | undefined;
    // The user attribute that you want to add to your user flow.
    userAttribute?: NullableOption<IdentityUserFlowAttribute> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentityProviderBase extends Entity {
    // The display name of the identity provider.
    displayName?: NullableOption<string> | undefined;
}
export interface BuiltInIdentityProvider extends IdentityProviderBase {
    // The identity provider type. For a B2B scenario, possible values: AADSignup, MicrosoftAccount, EmailOTP. Required.
    identityProviderType?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentityUserFlowAttribute extends Entity {
    /**
     * The data type of the user flow attribute. This cannot be modified after the custom user flow attribute is created. The
     * supported values for dataType are: string , boolean , int64 , stringCollection , dateTime.
     */
    dataType?: IdentityUserFlowAttributeDataType | undefined;
    // The description of the user flow attribute that's shown to the user at the time of sign-up.
    description?: NullableOption<string> | undefined;
    // The display name of the user flow attribute.
    displayName?: NullableOption<string> | undefined;
    /**
     * The type of the user flow attribute. This is a read-only attribute that is automatically set. Depending on the type of
     * attribute, the values for this property will be builtIn, custom, or required.
     */
    userFlowAttributeType?: IdentityUserFlowAttributeType | undefined;
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IdentityBuiltInUserFlowAttribute extends IdentityUserFlowAttribute {}
// tslint:disable-next-line: interface-name
export interface IdentityContainer extends Entity {
    conditionalAccess?: NullableOption<ConditionalAccessRoot> | undefined;
    apiConnectors?: NullableOption<IdentityApiConnector[]> | undefined;
    b2xUserFlows?: NullableOption<B2xIdentityUserFlow[]> | undefined;
    identityProviders?: NullableOption<IdentityProviderBase[]> | undefined;
    userFlowAttributes?: NullableOption<IdentityUserFlowAttribute[]> | undefined;
}
export interface ConditionalAccessRoot extends Entity {
    namedLocations?: NullableOption<NamedLocation[]> | undefined;
    policies?: NullableOption<ConditionalAccessPolicy[]> | undefined;
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IdentityCustomUserFlowAttribute extends IdentityUserFlowAttribute {}
export interface SocialIdentityProvider extends IdentityProviderBase {
    /**
     * The client identifier for the application obtained when registering the application with the identity provider.
     * Required.
     */
    clientId?: NullableOption<string> | undefined;
    /**
     * The client secret for the application that is obtained when the application is registered with the identity provider.
     * This is write-only. A read operation returns '****'. Required.
     */
    clientSecret?: NullableOption<string> | undefined;
    /**
     * For a B2B scenario, possible values: Google, Facebook. For a B2C scenario, possible values: Microsoft, Google, Amazon,
     * LinkedIn, Facebook, GitHub, Twitter, Weibo, QQ, WeChat. Required.
     */
    identityProviderType?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface UserFlowLanguagePage extends Entity {}
export interface AdministrativeUnit extends DirectoryObject {
    // An optional description for the administrative unit.
    description?: NullableOption<string> | undefined;
    // Display name for the administrative unit.
    displayName?: NullableOption<string> | undefined;
    /**
     * Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership or
     * Public. If not set, default behavior is Public. When set to HiddenMembership, only members of the administrative unit
     * can list other members of the administrative unit.
     */
    visibility?: NullableOption<string> | undefined;
    /**
     * Users and groups that are members of this Adminsitrative Unit. HTTP Methods: GET (list members), POST (add members),
     * DELETE (remove members).
     */
    members?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * Scoped-role members of this Administrative Unit. HTTP Methods: GET (list scopedRoleMemberships), POST (add
     * scopedRoleMembership), DELETE (remove scopedRoleMembership).
     */
    scopedRoleMembers?: NullableOption<ScopedRoleMembership[]> | undefined;
    // The collection of open extensions defined for this Administrative Unit. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
}
export interface CertificateBasedAuthConfiguration extends Entity {
    // Collection of certificate authorities which creates a trusted certificate chain.
    certificateAuthorities?: CertificateAuthority[] | undefined;
}
export interface Contract extends DirectoryObject {
    /**
     * Type of contract. Possible values are: SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table
     * below.
     */
    contractType?: NullableOption<string> | undefined;
    /**
     * The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the
     * customer tenant's organization resource.
     */
    customerId?: NullableOption<string> | undefined;
    /**
     * A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is
     * established. It is not automatically updated if the customer tenant's default domain name changes.
     */
    defaultDomainName?: NullableOption<string> | undefined;
    /**
     * A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established.
     * It is not automatically updated if the customer tenant's display name changes.
     */
    displayName?: NullableOption<string> | undefined;
}
export interface Device extends DirectoryObject {
    // true if the account is enabled; otherwise, false. default is true.
    accountEnabled?: NullableOption<boolean> | undefined;
    // For internal use only. Not nullable.
    alternativeSecurityIds?: AlternativeSecurityId[] | undefined;
    /**
     * The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    approximateLastSignInDateTime?: NullableOption<string> | undefined;
    /**
     * The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information
     * using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * Read-only.
     */
    complianceExpirationDateTime?: NullableOption<string> | undefined;
    // Identifier set by Azure Device Registration Service at the time of registration.
    deviceId?: NullableOption<string> | undefined;
    // For internal use only. Set to null.
    deviceMetadata?: NullableOption<string> | undefined;
    // For internal use only.
    deviceVersion?: NullableOption<number> | undefined;
    // The display name for the device. Required.
    displayName?: NullableOption<string> | undefined;
    /**
     * true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be
     * updated by Intune for any device OS type or by an approved MDM app for Windows OS devices.
     */
    isCompliant?: NullableOption<boolean> | undefined;
    /**
     * true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by
     * Intune for any device OS type or by an approved MDM app for Windows OS devices.
     */
    isManaged?: NullableOption<boolean> | undefined;
    // Application identifier used to register device into MDM. Read-only. Supports $filter.
    mdmAppId?: NullableOption<string> | undefined;
    /**
     * The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and
     * time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z Read-only.
     */
    onPremisesLastSyncDateTime?: NullableOption<string> | undefined;
    /**
     * true if this object is synced from an on-premises directory; false if this object was originally synced from an
     * on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory
     * (default). Read-only.
     */
    onPremisesSyncEnabled?: NullableOption<boolean> | undefined;
    // The type of operating system on the device. Required.
    operatingSystem?: NullableOption<string> | undefined;
    // Operating system version of the device. Required.
    operatingSystemVersion?: NullableOption<string> | undefined;
    // For internal use only. Not nullable.
    physicalIds?: string[] | undefined;
    // The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
    profileType?: NullableOption<string> | undefined;
    // List of labels applied to the device by the system.
    systemLabels?: string[] | undefined;
    /**
     * Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices),
     * AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details,
     * see Introduction to device management in Azure Active Directory
     */
    trustType?: NullableOption<string> | undefined;
    // Groups that this device is a member of. Read-only. Nullable.
    memberOf?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * The user that cloud joined the device or registered their personal device. The registered owner is set at the time of
     * registration. Currently, there can be only one owner. Read-only. Nullable.
     */
    registeredOwners?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * Collection of registered users of the device. For cloud joined devices and registered personal devices, registered
     * users are set to the same value as registered owners at the time of registration. Read-only. Nullable.
     */
    registeredUsers?: NullableOption<DirectoryObject[]> | undefined;
    // Groups that this device is a member of. This operation is transitive.
    transitiveMemberOf?: NullableOption<DirectoryObject[]> | undefined;
    // The collection of open extensions defined for the device. Read-only. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
}
export interface Directory extends Entity {
    administrativeUnits?: NullableOption<AdministrativeUnit[]> | undefined;
    // Recently deleted items. Read-only. Nullable.
    deletedItems?: NullableOption<DirectoryObject[]> | undefined;
}
export interface DirectoryObjectPartnerReference extends DirectoryObject {
    // Description of the object returned. Read-only.
    description?: NullableOption<string> | undefined;
    // Name of directory object being returned, like group or application. Read-only.
    displayName?: NullableOption<string> | undefined;
    // The tenant identifier for the partner tenant. Read-only.
    externalPartnerTenantId?: NullableOption<string> | undefined;
    // The type of the referenced object in the partner tenant. Read-only.
    objectType?: NullableOption<string> | undefined;
}
export interface DirectoryRole extends DirectoryObject {
    // The description for the directory role. Read-only.
    description?: NullableOption<string> | undefined;
    // The display name for the directory role. Read-only.
    displayName?: NullableOption<string> | undefined;
    /**
     * The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a
     * directory role in a tenant with a POST operation. After the directory role has been activated, the property is read
     * only.
     */
    roleTemplateId?: NullableOption<string> | undefined;
    // Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable.
    members?: NullableOption<DirectoryObject[]> | undefined;
    // Members of this directory role that are scoped to administrative units. Read-only. Nullable.
    scopedMembers?: NullableOption<ScopedRoleMembership[]> | undefined;
}
export interface DirectoryRoleTemplate extends DirectoryObject {
    // The description to set for the directory role. Read-only.
    description?: NullableOption<string> | undefined;
    // The display name to set for the directory role. Read-only.
    displayName?: NullableOption<string> | undefined;
}
export interface Domain extends Entity {
    /**
     * Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed
     * indicates a cloud managed domain where Azure AD performs user authentication. Federated indicates authentication is
     * federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation
     * Services. This property is read-only and is not nullable.
     */
    authenticationType?: string | undefined;
    /**
     * This property is always null except when the verify action is used. When the verify action is used, a domain entity is
     * returned in the response. The availabilityStatus property of the domain entity in the response is either
     * AvailableImmediately or EmailVerifiedDomainTakeoverScheduled.
     */
    availabilityStatus?: NullableOption<string> | undefined;
    /**
     * The value of the property is false if the DNS record management of the domain has been delegated to Microsoft 365.
     * Otherwise, the value is true. Not nullable
     */
    isAdminManaged?: boolean | undefined;
    /**
     * true if this is the default domain that is used for user creation. There is only one default domain per company. Not
     * nullable
     */
    isDefault?: boolean | undefined;
    /**
     * true if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only
     * one initial domain per company. Not nullable
     */
    isInitial?: boolean | undefined;
    // true if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable
    isRoot?: boolean | undefined;
    // true if the domain has completed domain ownership verification. Not nullable
    isVerified?: boolean | undefined;
    manufacturer?: NullableOption<string> | undefined;
    model?: NullableOption<string> | undefined;
    /**
     * Specifies the number of days before a user receives notification that their password will expire. If the property is
     * not set, a default value of 14 days will be used.
     */
    passwordNotificationWindowInDays?: NullableOption<number> | undefined;
    /**
     * Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default
     * value of 90 days will be used.
     */
    passwordValidityPeriodInDays?: NullableOption<number> | undefined;
    // Status of asynchronous operations scheduled for the domain.
    state?: NullableOption<DomainState> | undefined;
    /**
     * The capabilities assigned to the domain. Can include 0, 1 or more of following values: Email, Sharepoint,
     * EmailInternalRelayOnly, OfficeCommunicationsOnline,SharePointDefaultDomain, FullRedelegation, SharePointPublic,
     * OrgIdAuthentication, Yammer, Intune. The values which you can add/remove using Graph API include: Email,
     * OfficeCommunicationsOnline, Yammer. Not nullable
     */
    supportedServices?: string[] | undefined;
    // Read-only, Nullable
    domainNameReferences?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online
     * services. Read-only, Nullable
     */
    serviceConfigurationRecords?: NullableOption<DomainDnsRecord[]> | undefined;
    /**
     * DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership
     * verification with Azure AD. Read-only, Nullable
     */
    verificationDnsRecords?: NullableOption<DomainDnsRecord[]> | undefined;
}
export interface DomainDnsRecord extends Entity {
    /**
     * If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate
     * correctly with the domain.
     */
    isOptional?: boolean | undefined;
    // Value used when configuring the name of the DNS record at the DNS host.
    label?: string | undefined;
    // Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, TxtKey
    recordType?: NullableOption<string> | undefined;
    /**
     * Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null,
     * Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation,
     * SharePointPublic, OrgIdAuthentication, Yammer, Intune
     */
    supportedService?: string | undefined;
    // Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable
    ttl?: number | undefined;
}
export interface DomainDnsCnameRecord extends DomainDnsRecord {
    // The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host.
    canonicalName?: NullableOption<string> | undefined;
}
export interface DomainDnsMxRecord extends DomainDnsRecord {
    // Value used when configuring the answer/destination/value of the MX record at the DNS host.
    mailExchange?: string | undefined;
    // Value used when configuring the Preference/Priority property of the MX record at the DNS host.
    preference?: NullableOption<number> | undefined;
}
export interface DomainDnsSrvRecord extends DomainDnsRecord {
    // Value to use when configuring the Target property of the SRV record at the DNS host.
    nameTarget?: NullableOption<string> | undefined;
    // Value to use when configuring the port property of the SRV record at the DNS host.
    port?: NullableOption<number> | undefined;
    // Value to use when configuring the priority property of the SRV record at the DNS host.
    priority?: NullableOption<number> | undefined;
    // Value to use when configuring the protocol property of the SRV record at the DNS host.
    protocol?: NullableOption<string> | undefined;
    // Value to use when configuring the service property of the SRV record at the DNS host.
    service?: NullableOption<string> | undefined;
    // Value to use when configuring the weight property of the SRV record at the DNS host.
    weight?: NullableOption<number> | undefined;
}
export interface DomainDnsTxtRecord extends DomainDnsRecord {
    // Value used when configuring the text property at the DNS host.
    text?: string | undefined;
}
export interface DomainDnsUnavailableRecord extends DomainDnsRecord {
    // Provides the reason why the DomainDnsUnavailableRecord entity is returned.
    description?: NullableOption<string> | undefined;
}
export interface Group extends DirectoryObject {
    /**
     * The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on
     * $select.
     */
    assignedLabels?: NullableOption<AssignedLabel[]> | undefined;
    // The licenses that are assigned to the group. Returned only on $select. Read-only.
    assignedLicenses?: NullableOption<AssignedLicense[]> | undefined;
    /**
     * Describes a classification for the group (such as low, medium or high business impact). Valid values for this property
     * are defined by creating a ClassificationList setting value, based on the template definition.Returned by default.
     */
    classification?: NullableOption<string> | undefined;
    /**
     * Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is
     * created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For
     * example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // An optional description for the group. Returned by default.
    description?: NullableOption<string> | undefined;
    /**
     * The display name for the group. This property is required when a group is created and cannot be cleared during updates.
     * Returned by default. Supports $filter and $orderby.
     */
    displayName?: NullableOption<string> | undefined;
    /**
     * Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the
     * group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC
     * time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only.
     */
    expirationDateTime?: NullableOption<string> | undefined;
    /**
     * Specifies the group type and its membership. If the collection contains Unified, the group is a Microsoft 365 group;
     * otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection
     * includes DynamicMembership, the group has dynamic membership; otherwise, membership is static. Returned by default.
     * Supports $filter.
     */
    groupTypes?: string[] | undefined;
    /**
     * Indicates whether there are members in this group that have license errors from its group-based license assignment.
     * This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have
     * members with license errors (that is, filter for this property being true).
     */
    hasMembersWithLicenseErrors?: NullableOption<boolean> | undefined;
    /**
     * Indicates status of the group license assignment to all members of the group. Possible values: QueuedForProcessing,
     * ProcessingInProgress, and ProcessingComplete. Returned only on $select. Read-only.
     */
    licenseProcessingState?: NullableOption<LicenseProcessingState> | undefined;
    /**
     * The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only.
     * Supports $filter.
     */
    mail?: NullableOption<string> | undefined;
    // Specifies whether the group is mail-enabled. Returned by default.
    mailEnabled?: NullableOption<boolean> | undefined;
    /**
     * The mail alias for the group, unique in the organization. This property must be specified when a group is created.
     * These characters cannot be used in the mailNickName: @()/[]';:.&amp;lt;&amp;gt;,SPACE. Returned by default. Supports
     * $filter.
     */
    mailNickname?: NullableOption<string> | undefined;
    /**
     * The rule that determines members for this group if the group is a dynamic group (groupTypes contains
     * DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned
     * by default.
     */
    membershipRule?: NullableOption<string> | undefined;
    /**
     * Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by
     * default.
     */
    membershipRuleProcessingState?: NullableOption<string> | undefined;
    /**
     * Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The
     * property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory
     * via Azure AD Connect.Returned by default. Read-only.
     */
    onPremisesDomainName?: NullableOption<string> | undefined;
    /**
     * Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date
     * and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter.
     */
    onPremisesLastSyncDateTime?: NullableOption<string> | undefined;
    /**
     * Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for
     * customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by
     * default. Read-only.
     */
    onPremisesNetBiosName?: NullableOption<string> | undefined;
    // Errors when using Microsoft synchronization product during provisioning. Returned by default.
    onPremisesProvisioningErrors?: NullableOption<OnPremisesProvisioningError[]> | undefined;
    /**
     * Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated
     * for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned
     * by default. Read-only.
     */
    onPremisesSamAccountName?: NullableOption<string> | undefined;
    /**
     * Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud.
     * Returned by default. Read-only.
     */
    onPremisesSecurityIdentifier?: NullableOption<string> | undefined;
    /**
     * true if this group is synced from an on-premises directory; false if this group was originally synced from an
     * on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory
     * (default). Returned by default. Read-only. Supports $filter.
     */
    onPremisesSyncEnabled?: NullableOption<boolean> | undefined;
    // The preferred data location for the group. For more information, see OneDrive Online Multi-Geo. Returned by default.
    preferredDataLocation?: NullableOption<string> | undefined;
    /**
     * The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example 'en-US'. Returned by
     * default.
     */
    preferredLanguage?: NullableOption<string> | undefined;
    /**
     * Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp:
     * bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by
     * default. Read-only. Not nullable. Supports $filter.
     */
    proxyAddresses?: string[] | undefined;
    /**
     * Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew
     * service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC
     * time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only.
     */
    renewedDateTime?: NullableOption<string> | undefined;
    // Specifies whether the group is a security group. Returned by default. Supports $filter.
    securityEnabled?: NullableOption<boolean> | undefined;
    // Security identifier of the group, used in Windows scenarios. Returned by default.
    securityIdentifier?: NullableOption<string> | undefined;
    /**
     * Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red.
     * Returned by default.
     */
    theme?: NullableOption<string> | undefined;
    /**
     * Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or
     * Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be
     * updated later. Other values of visibility can be updated after group creation. If visibility value is not specified
     * during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is
     * Public. See group visibility options to learn more. Returned by default.
     */
    visibility?: NullableOption<string> | undefined;
    /**
     * Indicates if people external to the organization can send messages to the group. Default value is false. Returned only
     * on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    allowExternalSenders?: NullableOption<boolean> | undefined;
    /**
     * Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this
     * property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default
     * value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    autoSubscribeNewMembers?: NullableOption<boolean> | undefined;
    /**
     * true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address
     * lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default
     * value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    hideFromAddressLists?: NullableOption<boolean> | undefined;
    /**
     * true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false
     * otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    hideFromOutlookClients?: NullableOption<boolean> | undefined;
    /**
     * Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only
     * on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    isSubscribedByMail?: NullableOption<boolean> | undefined;
    /**
     * Count of conversations that have received new posts since the signed-in user last visited the group. This property is
     * the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
     */
    unseenCount?: NullableOption<number> | undefined;
    isArchived?: NullableOption<boolean> | undefined;
    // Represents the app roles a group has been granted for an application.
    appRoleAssignments?: NullableOption<AppRoleAssignment[]> | undefined;
    // The user (or application) that created the group. Note: This is not set if the user is an administrator. Read-only.
    createdOnBehalfOf?: NullableOption<DirectoryObject> | undefined;
    /**
     * Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups).
     * Read-only. Nullable.
     */
    memberOf?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * Users, contacts, and groups that are members of this group. HTTP Methods: GET (supported for all groups), POST
     * (supported for security groups and mail-enabled security groups), DELETE (supported only for security groups)
     * Read-only. Nullable.
     */
    members?: NullableOption<DirectoryObject[]> | undefined;
    // A list of group members with license errors from this group-based license assignment. Read-only.
    membersWithLicenseErrors?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * The owners of the group. The owners are a set of non-admin users who are allowed to modify this object. HTTP Methods:
     * GET (supported for all groups), POST (supported for security groups and mail-enabled security groups), DELETE
     * (supported only for security groups) Read-only. Nullable.
     */
    owners?: NullableOption<DirectoryObject[]> | undefined;
    // The permission that has been granted for a group to a specific application.
    permissionGrants?: NullableOption<ResourceSpecificPermissionGrant[]> | undefined;
    // Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.
    settings?: NullableOption<GroupSetting[]> | undefined;
    transitiveMemberOf?: NullableOption<DirectoryObject[]> | undefined;
    transitiveMembers?: NullableOption<DirectoryObject[]> | undefined;
    /**
     * The list of users or groups that are allowed to create post's or calendar events in this group. If this list is
     * non-empty then only users or groups listed here are allowed to post.
     */
    acceptedSenders?: NullableOption<DirectoryObject[]> | undefined;
    // The group's calendar. Read-only.
    calendar?: NullableOption<Calendar> | undefined;
    // The calendar view for the calendar. Read-only.
    calendarView?: NullableOption<Event[]> | undefined;
    // The group's conversations.
    conversations?: NullableOption<Conversation[]> | undefined;
    // The group's events.
    events?: NullableOption<Event[]> | undefined;
    // The group's profile photo.
    photo?: NullableOption<ProfilePhoto> | undefined;
    // The profile photos owned by the group. Read-only. Nullable.
    photos?: NullableOption<ProfilePhoto[]> | undefined;
    // The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
    rejectedSenders?: NullableOption<DirectoryObject[]> | undefined;
    // The group's conversation threads. Nullable.
    threads?: NullableOption<ConversationThread[]> | undefined;
    // The group's default drive. Read-only.
    drive?: NullableOption<Drive> | undefined;
    // The group's drives. Read-only.
    drives?: NullableOption<Drive[]> | undefined;
    // The list of SharePoint sites in this group. Access the default site with /sites/root.
    sites?: NullableOption<Site[]> | undefined;
    // The collection of open extensions defined for the group. Read-only. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
    // The collection of lifecycle policies for this group. Read-only. Nullable.
    groupLifecyclePolicies?: NullableOption<GroupLifecyclePolicy[]> | undefined;
    // Selective Planner services available to the group. Read-only. Nullable.
    planner?: NullableOption<PlannerGroup> | undefined;
    // Read-only.
    onenote?: NullableOption<Onenote> | undefined;
    team?: NullableOption<Team> | undefined;
}
export interface ResourceSpecificPermissionGrant extends DirectoryObject {
    // ID of the service principal of the Azure AD app that has been granted access. Read-only.
    clientAppId?: NullableOption<string> | undefined;
    // ID of the Azure AD app that has been granted access. Read-only.
    clientId?: NullableOption<string> | undefined;
    // The name of the permission. Read-only.
    permission?: NullableOption<string> | undefined;
    // The type of permission. Possible values are: Application, Delegated. Read-only.
    permissionType?: NullableOption<string> | undefined;
    // ID of the Azure AD app that is hosting the resource. Read-only.
    resourceAppId?: NullableOption<string> | undefined;
}
export interface GroupSetting extends Entity {
    // Display name of this group of settings, which comes from the associated template.
    displayName?: NullableOption<string> | undefined;
    // Unique identifier for the template used to create this group of settings. Read-only.
    templateId?: NullableOption<string> | undefined;
    // Collection of name value pairs. Must contain and set all the settings defined in the template.
    values?: SettingValue[] | undefined;
}
export interface Conversation extends Entity {
    // Indicates whether any of the posts within this Conversation has at least one attachment.
    hasAttachments?: boolean | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastDeliveredDateTime?: string | undefined;
    // A short summary from the body of the latest post in this converstaion.
    preview?: string | undefined;
    // The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
    topic?: string | undefined;
    // All the users that sent a message to this Conversation.
    uniqueSenders?: string[] | undefined;
    // A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
    threads?: NullableOption<ConversationThread[]> | undefined;
}
export interface ConversationThread extends Entity {
    // The Cc: recipients for the thread.
    ccRecipients?: Recipient[] | undefined;
    // Indicates whether any of the posts within this thread has at least one attachment.
    hasAttachments?: boolean | undefined;
    // Indicates if the thread is locked.
    isLocked?: boolean | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastDeliveredDateTime?: string | undefined;
    // A short summary from the body of the latest post in this conversation.
    preview?: string | undefined;
    // The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
    topic?: string | undefined;
    // The To: recipients for the thread.
    toRecipients?: Recipient[] | undefined;
    // All the users that sent a message to this thread.
    uniqueSenders?: string[] | undefined;
    // Read-only. Nullable.
    posts?: NullableOption<Post[]> | undefined;
}
export interface GroupLifecyclePolicy extends Entity {
    /**
     * List of email address to send notifications for groups without owners. Multiple email address can be defined by
     * separating email address with a semicolon.
     */
    alternateNotificationEmails?: NullableOption<string> | undefined;
    /**
     * Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the
     * number of days defined.
     */
    groupLifetimeInDays?: NullableOption<number> | undefined;
    // The group type for which the expiration policy applies. Possible values are All, Selected or None.
    managedGroupTypes?: NullableOption<string> | undefined;
}
export interface PlannerGroup extends Entity {
    // Read-only. Nullable. Returns the plannerPlans owned by the group.
    plans?: NullableOption<PlannerPlan[]> | undefined;
}
export interface GroupSettingTemplate extends DirectoryObject {
    // Description of the template.
    description?: NullableOption<string> | undefined;
    // Display name of the template.
    displayName?: NullableOption<string> | undefined;
    /**
     * Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this
     * template.
     */
    values?: SettingTemplateValue[] | undefined;
}
export interface Organization extends DirectoryObject {
    // The collection of service plans associated with the tenant. Not nullable.
    assignedPlans?: AssignedPlan[] | undefined;
    /**
     * Telephone number for the organization. Although this is a string collection, only one number can be set for this
     * property.
     */
    businessPhones?: string[] | undefined;
    // City name of the address for the organization.
    city?: NullableOption<string> | undefined;
    // Country/region name of the address for the organization.
    country?: NullableOption<string> | undefined;
    // Country/region abbreviation for the organization.
    countryLetterCode?: NullableOption<string> | undefined;
    /**
     * Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the
     * organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in
     * UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // The display name for the tenant.
    displayName?: NullableOption<string> | undefined;
    // Not nullable.
    marketingNotificationEmails?: string[] | undefined;
    /**
     * The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents
     * date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z.
     */
    onPremisesLastSyncDateTime?: NullableOption<string> | undefined;
    /**
     * true if this object is synced from an on-premises directory; false if this object was originally synced from an
     * on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises
     * directory (default).
     */
    onPremisesSyncEnabled?: NullableOption<boolean> | undefined;
    // Postal code of the address for the organization.
    postalCode?: NullableOption<string> | undefined;
    // The preferred language for the organization. Should follow ISO 639-1 Code; for example en.
    preferredLanguage?: NullableOption<string> | undefined;
    // The privacy profile of an organization.
    privacyProfile?: NullableOption<PrivacyProfile> | undefined;
    // Not nullable.
    provisionedPlans?: ProvisionedPlan[] | undefined;
    securityComplianceNotificationMails?: string[] | undefined;
    securityComplianceNotificationPhones?: string[] | undefined;
    // State name of the address for the organization.
    state?: NullableOption<string> | undefined;
    // Street name of the address for organization.
    street?: NullableOption<string> | undefined;
    // Not nullable.
    technicalNotificationMails?: string[] | undefined;
    tenantType?: NullableOption<string> | undefined;
    // The collection of domains associated with this tenant. Not nullable.
    verifiedDomains?: VerifiedDomain[] | undefined;
    // Mobile device management authority. Possible values are: unknown, intune, sccm, office365.
    mobileDeviceManagementAuthority?: MdmAuthority | undefined;
    branding?: NullableOption<OrganizationalBranding> | undefined;
    /**
     * Navigation property to manage certificate-based authentication configuration. Only a single instance of
     * certificateBasedAuthConfiguration can be created in the collection.
     */
    certificateBasedAuthConfiguration?: NullableOption<CertificateBasedAuthConfiguration[]> | undefined;
    // The collection of open extensions defined for the organization resource. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
}
export interface OrganizationalBrandingProperties extends Entity {
    /**
     * Color that will appear in place of the background image in low-bandwidth connections. The primary color of your banner
     * logo or your organization color is recommended to be used here. Specify this in hexadecimal (for example, white is
     * #FFFFFF).
     */
    backgroundColor?: NullableOption<string> | undefined;
    /**
     * Image that appears as the background of the sign in page. .png or .jpg not larger than 1920x1080 and smaller than
     * 300kb. A smaller image will reduce bandwidth requirements and make page loads more performant.
     */
    backgroundImage?: NullableOption<any> | undefined;
    /**
     * A banner version of your company logo which appears appears on the sign-in page. .png or .jpg no larger than 36x245px.
     * We recommend using a transparent image with no padding around the logo.
     */
    bannerLogo?: NullableOption<any> | undefined;
    /**
     * Text that appears at the bottom of the sign-in box. You can use this to communicate additional information, such as the
     * phone number to your help desk or a legal statement. This text must be Unicode and not exceed 1024 characters.
     */
    signInPageText?: NullableOption<string> | undefined;
    /**
     * Square version of your company logo. This appears in Windows 10 out-of-box (OOBE) experiences and when Windows
     * Autopilot is enabled for deployment. .png or .jpg no larger than 240x240px and no more than 10kb in size. We recommend
     * using a transparent image with no padding around the logo.
     */
    squareLogo?: NullableOption<any> | undefined;
    /**
     * String that shows as the hint in the username textbox on the sign in screen. This text must be Unicode, without links
     * or code, and can't exceed 64 characters.
     */
    usernameHintText?: NullableOption<string> | undefined;
}
export interface OrganizationalBranding extends OrganizationalBrandingProperties {
    localizations?: NullableOption<OrganizationalBrandingLocalization[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface OrganizationalBrandingLocalization extends OrganizationalBrandingProperties {}
export interface OrgContact extends DirectoryObject {
    // Postal addresses for this organizational contact. For now a contact can only have one physical address.
    addresses?: NullableOption<PhysicalOfficeAddress[]> | undefined;
    // Name of the company that this organizational contact belong to.
    companyName?: NullableOption<string> | undefined;
    // The name for the department in which the contact works.
    department?: NullableOption<string> | undefined;
    // Display name for this organizational contact.
    displayName?: NullableOption<string> | undefined;
    // First name for this organizational contact.
    givenName?: NullableOption<string> | undefined;
    // Job title for this organizational contact.
    jobTitle?: NullableOption<string> | undefined;
    // The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'.
    mail?: NullableOption<string> | undefined;
    // Email alias (portion of email address pre-pending the @ symbol) for this organizational contact.
    mailNickname?: NullableOption<string> | undefined;
    /**
     * Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents
     * date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z.
     */
    onPremisesLastSyncDateTime?: NullableOption<string> | undefined;
    // List of any synchronization provisioning errors for this organizational contact.
    onPremisesProvisioningErrors?: NullableOption<OnPremisesProvisioningError[]> | undefined;
    /**
     * true if this object is synced from an on-premises directory; false if this object was originally synced from an
     * on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced
     * from an on-premises directory (default).
     */
    onPremisesSyncEnabled?: NullableOption<boolean> | undefined;
    /**
     * List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each
     * type can ever be present in the collection.
     */
    phones?: NullableOption<Phone[]> | undefined;
    /**
     * For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter
     * expressions on multi-valued properties. Supports $filter.
     */
    proxyAddresses?: string[] | undefined;
    // Last name for this organizational contact.
    surname?: NullableOption<string> | undefined;
    /**
     * The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only.
     * Nullable.
     */
    directReports?: NullableOption<DirectoryObject[]> | undefined;
    // The user or contact that is this contact's manager. Read-only.
    manager?: NullableOption<DirectoryObject> | undefined;
    // Groups that this contact is a member of. Read-only. Nullable.
    memberOf?: NullableOption<DirectoryObject[]> | undefined;
    transitiveMemberOf?: NullableOption<DirectoryObject[]> | undefined;
}
export interface PermissionGrantConditionSet extends Entity {
    /**
     * A list of appId values for the client applications to match with, or a list with the single value all to match any
     * client application. Default is the single value all.
     */
    clientApplicationIds?: NullableOption<string[]> | undefined;
    /**
     * A list of Microsoft Partner Network (MPN) IDs for verified publishers of the client application, or a list with the
     * single value all to match with client apps from any publisher. Default is the single value all.
     */
    clientApplicationPublisherIds?: NullableOption<string[]> | undefined;
    /**
     * Set to true to only match on client applications with a verified publisher. Set to false to match on any client app,
     * even if it does not have a verified publisher. Default is false.
     */
    clientApplicationsFromVerifiedPublisherOnly?: NullableOption<boolean> | undefined;
    /**
     * A list of Azure Active Directory tenant IDs in which the client application is registered, or a list with the single
     * value all to match with client apps registered in any tenant. Default is the single value all.
     */
    clientApplicationTenantIds?: NullableOption<string[]> | undefined;
    /**
     * The permission classification for the permission being granted, or all to match with any permission classification
     * (including permissions which are not classified). Default is all.
     */
    permissionClassification?: NullableOption<string> | undefined;
    /**
     * The list of id values for the specific permissions to match with, or a list with the single value all to match with any
     * permission. The id of delegated permissions can be found in the publishedPermissionScopes property of the API's
     * **servicePrincipal** object. The id of application permissions can be found in the appRoles property of the API's
     * **servicePrincipal** object. The id of resource-specific application permissions can be found in the
     * resourceSpecificApplicationPermissions property of the API's **servicePrincipal** object. Default is the single value
     * all.
     */
    permissions?: NullableOption<string[]> | undefined;
    /**
     * The permission type of the permission being granted. Possible values: application for application permissions (e.g. app
     * roles), or delegated for delegated permissions. The value delegatedUserConsentable indicates delegated permissions
     * which have not been configured by the API publisher to require admin consent—this value may be used in built-in
     * permission grant policies, but cannot be used in custom permission grant policies. Required.
     */
    permissionType?: NullableOption<PermissionType> | undefined;
    /**
     * The appId of the resource application (e.g. the API) for which a permission is being granted, or any to match with any
     * resource application or API. Default is any.
     */
    resourceApplication?: NullableOption<string> | undefined;
}
export interface SubscribedSku extends Entity {
    // For example, 'User' or 'Company'.
    appliesTo?: NullableOption<string> | undefined;
    // Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut.
    capabilityStatus?: NullableOption<string> | undefined;
    // The number of licenses that have been assigned.
    consumedUnits?: NullableOption<number> | undefined;
    // Information about the number and status of prepaid licenses.
    prepaidUnits?: NullableOption<LicenseUnitsDetail> | undefined;
    // Information about the service plans that are available with the SKU. Not nullable
    servicePlans?: ServicePlanInfo[] | undefined;
    // The unique identifier (GUID) for the service SKU.
    skuId?: NullableOption<string> | undefined;
    /**
     * The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an
     * organization has acquired, see List subscribedSkus.
     */
    skuPartNumber?: NullableOption<string> | undefined;
}
export interface EducationAssignment extends Entity {
    /**
     * Optional field to control the assignment behavior for students who are added after the assignment is published. If not
     * specified, defaults to none value. Currently supports only two values: none or assignIfOpen.
     */
    addedStudentAction?: NullableOption<EducationAddedStudentAction> | undefined;
    /**
     * Identifies whether students can submit after the due date. If this property is not specified during create, it defaults
     * to true.
     */
    allowLateSubmissions?: NullableOption<boolean> | undefined;
    /**
     * Identifies whether students can add their own resources to a submission or if they can only modify resources added by
     * the teacher.
     */
    allowStudentsToAddResourcesToSubmission?: NullableOption<boolean> | undefined;
    /**
     * The date when the assignment should become active. If in the future, the assignment is not shown to the student until
     * this date. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For
     * example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    assignDateTime?: NullableOption<string> | undefined;
    /**
     * The moment that the assignment was published to students and the assignment shows up on the students timeline. The
     * Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    assignedDateTime?: NullableOption<string> | undefined;
    // Which users, or whole class should receive a submission object once the assignment is published.
    assignTo?: NullableOption<EducationAssignmentRecipient> | undefined;
    // Class which this assignment belongs.
    classId?: NullableOption<string> | undefined;
    /**
     * Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment
     * does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the
     * closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information
     * using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    closeDateTime?: NullableOption<string> | undefined;
    // Who created the assignment.
    createdBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment when the assignment was created. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: NullableOption<string> | undefined;
    // Name of the assignment.
    displayName?: NullableOption<string> | undefined;
    /**
     * Date when the students assignment is due. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    dueDateTime?: NullableOption<string> | undefined;
    // How the assignment will be graded.
    grading?: NullableOption<EducationAssignmentGradeType> | undefined;
    // Instructions for the assignment. This along with the display name tell the student what to do.
    instructions?: NullableOption<EducationItemBody> | undefined;
    // Who last modified the assignment.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment when the assignment was last modified. The Timestamp type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
    /**
     * Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null,
     * defaults to the General channel. This field only applies to assignments where the assignTo value is
     * educationAssignmentClassRecipient. Updating the notificationChannelUrl is not allowed after the assignment has been
     * published.
     */
    notificationChannelUrl?: NullableOption<string> | undefined;
    // Folder URL where all the file resources for this assignment are stored.
    resourcesFolderUrl?: NullableOption<string> | undefined;
    // Status of the Assignment. You can not PATCH this value. Possible values are: draft, scheduled, published, assigned.
    status?: NullableOption<EducationAssignmentStatus> | undefined;
    // The deep link URL for the given assignment.
    webUrl?: NullableOption<string> | undefined;
    // When set, enables users to easily find assignments of a given type. Read-only. Nullable.
    categories?: NullableOption<EducationCategory[]> | undefined;
    // Learning objects that are associated with this assignment. Only teachers can modify this list. Nullable.
    resources?: NullableOption<EducationAssignmentResource[]> | undefined;
    // When set, the grading rubric attached to this assignment.
    rubric?: NullableOption<EducationRubric> | undefined;
    // Once published, there is a submission object for each student representing their work and grade. Read-only. Nullable.
    submissions?: NullableOption<EducationSubmission[]> | undefined;
}
export interface EducationCategory extends Entity {
    // Unique identifier for the category.
    displayName?: NullableOption<string> | undefined;
}
export interface EducationAssignmentResource extends Entity {
    // Indicates whether this resource should be copied to each student submission for modification and submission.
    distributeForStudentWork?: NullableOption<boolean> | undefined;
    // Resource object that has been associated with this assignment.
    resource?: NullableOption<EducationResource> | undefined;
}
export interface EducationRubric extends Entity {
    // The user who created this resource.
    createdBy?: NullableOption<IdentitySet> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: NullableOption<string> | undefined;
    // The description of this rubric.
    description?: NullableOption<EducationItemBody> | undefined;
    // The name of this rubric.
    displayName?: NullableOption<string> | undefined;
    /**
     * The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points
     * rubric.
     */
    grading?: NullableOption<EducationAssignmentGradeType> | undefined;
    // The last user to modify the resource.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment in time when the resource was last modified. The Timestamp type represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // The collection of levels making up this rubric.
    levels?: NullableOption<RubricLevel[]> | undefined;
    // The collection of qualities making up this rubric.
    qualities?: NullableOption<RubricQuality[]> | undefined;
}
export interface EducationSubmission extends Entity {
    // Who this submission is assigned to.
    recipient?: NullableOption<EducationSubmissionRecipient> | undefined;
    // Folder where all file resources for this submission need to be stored.
    resourcesFolderUrl?: NullableOption<string> | undefined;
    // User who moved the status of this submission to returned.
    returnedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment in time when the submission was returned. The Timestamp type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    returnedDateTime?: NullableOption<string> | undefined;
    // Read-Only. Possible values are: working, submitted, released, returned.
    status?: NullableOption<EducationSubmissionStatus> | undefined;
    // User who moved the resource into the submitted state.
    submittedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment in time when the submission was moved into the submitted state. The Timestamp type represents date and time
     * information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z
     */
    submittedDateTime?: NullableOption<string> | undefined;
    // User who moved the resource from submitted into the working state.
    unsubmittedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment in time when the submission was moved from submitted into the working state. The Timestamp type represents date
     * and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z
     */
    unsubmittedDateTime?: NullableOption<string> | undefined;
    // Read-Write. Nullable.
    outcomes?: NullableOption<EducationOutcome[]> | undefined;
    // Nullable.
    resources?: NullableOption<EducationSubmissionResource[]> | undefined;
    // Read-only. Nullable.
    submittedResources?: NullableOption<EducationSubmissionResource[]> | undefined;
}
export interface EducationAssignmentDefaults extends Entity {
    /**
     * Class-level default behavior for handling students who are added after the assignment is published. Possible values
     * are: none, assignIfOpen.
     */
    addedStudentAction?: NullableOption<EducationAddedStudentAction> | undefined;
    // Class-level default value for due time field. Default value is 23:59:00.
    dueTime?: NullableOption<string> | undefined;
    // Default Teams channel to which notifications will be sent. Default value is null.
    notificationChannelUrl?: NullableOption<string> | undefined;
}
export interface EducationAssignmentSettings extends Entity {
    /**
     * Indicates whether turn-in celebration animation will be shown. A value of true indicates that the animation will not be
     * shown. Default value is false.
     */
    submissionAnimationDisabled?: NullableOption<boolean> | undefined;
}
export interface EducationClass extends Entity {
    // Class code used by the school to identify the class.
    classCode?: NullableOption<string> | undefined;
    // Course information for the class
    course?: NullableOption<EducationCourse> | undefined;
    // Entity who created the class
    createdBy?: NullableOption<IdentitySet> | undefined;
    // Description of the class.
    description?: NullableOption<string> | undefined;
    // Name of the class.
    displayName?: string | undefined;
    // ID of the class from the syncing system.
    externalId?: NullableOption<string> | undefined;
    // Name of the class in the syncing system.
    externalName?: NullableOption<string> | undefined;
    /**
     * The type of external source this resource was generated from (automatically determined from externalSourceDetail).
     * Possible values are: sis, lms, or manual.
     */
    externalSource?: NullableOption<EducationExternalSource> | undefined;
    // The name of the external source this resources was generated from.
    externalSourceDetail?: NullableOption<string> | undefined;
    // Grade level of the class.
    grade?: NullableOption<string> | undefined;
    // Mail name for sending email to all members, if this is enabled.
    mailNickname?: string | undefined;
    // Term for the class.
    term?: NullableOption<EducationTerm> | undefined;
    assignmentCategories?: NullableOption<EducationCategory[]> | undefined;
    assignmentDefaults?: NullableOption<EducationAssignmentDefaults> | undefined;
    // All assignments associated with this class. Nullable.
    assignments?: NullableOption<EducationAssignment[]> | undefined;
    assignmentSettings?: NullableOption<EducationAssignmentSettings> | undefined;
    // The underlying Microsoft 365 group object.
    group?: NullableOption<Group> | undefined;
    // All users in the class. Nullable.
    members?: NullableOption<EducationUser[]> | undefined;
    // All schools that this class is associated with. Nullable.
    schools?: NullableOption<EducationSchool[]> | undefined;
    // All teachers in the class. Nullable.
    teachers?: NullableOption<EducationUser[]> | undefined;
}
export interface EducationUser extends Entity {
    // True if the account is enabled; otherwise, false. This property is required when a user is created. Supports /$filter.
    accountEnabled?: NullableOption<boolean> | undefined;
    // The licenses that are assigned to the user. Not nullable.
    assignedLicenses?: AssignedLicense[] | undefined;
    // The plans that are assigned to the user. Read-only. Not nullable.
    assignedPlans?: AssignedPlan[] | undefined;
    /**
     * The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this
     * property.
     */
    businessPhones?: string[] | undefined;
    // Entity who created the user.
    createdBy?: NullableOption<IdentitySet> | undefined;
    // The name for the department in which the user works. Supports /$filter.
    department?: NullableOption<string> | undefined;
    // The name displayed in the address book for the user. Supports $filter and $orderby.
    displayName?: NullableOption<string> | undefined;
    /**
     * The type of external source this resource was generated from (automatically determined from externalSourceDetail).
     * Possible values are: sis, lms, or manual.
     */
    externalSource?: NullableOption<EducationExternalSource> | undefined;
    // The name of the external source this resources was generated from.
    externalSourceDetail?: NullableOption<string> | undefined;
    // The given name (first name) of the user. Supports /$filter.
    givenName?: NullableOption<string> | undefined;
    // The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports /$filter.
    mail?: NullableOption<string> | undefined;
    // Mail address of user. Note: type and postOfficeBox are not supported for educationUser resources.
    mailingAddress?: NullableOption<PhysicalAddress> | undefined;
    // The mail alias for the user. This property must be specified when a user is created. Supports /$filter.
    mailNickname?: NullableOption<string> | undefined;
    // The middle name of user.
    middleName?: NullableOption<string> | undefined;
    // The primary cellular telephone number for the user.
    mobilePhone?: NullableOption<string> | undefined;
    officeLocation?: NullableOption<string> | undefined;
    // Additional information used to associate the AAD user with it's Active Directory counterpart.
    onPremisesInfo?: NullableOption<EducationOnPremisesInfo> | undefined;
    // Specifies password policies for the user. See standard [user] resource for additional details.
    passwordPolicies?: NullableOption<string> | undefined;
    /**
     * Specifies the password profile for the user. The profile contains the user's password. This property is required when a
     * user is created. See standard [user] resource for additional details.
     */
    passwordProfile?: NullableOption<PasswordProfile> | undefined;
    // The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'.
    preferredLanguage?: NullableOption<string> | undefined;
    /**
     * Default role for a user. The user's role might be different in an individual class. Possible values are: student,
     * teacher, faculty. Supports /$filter.
     */
    primaryRole?: EducationUserRole | undefined;
    // The plans that are provisioned for the user. Read-only. Not nullable.
    provisionedPlans?: ProvisionedPlan[] | undefined;
    refreshTokensValidFromDateTime?: NullableOption<string> | undefined;
    // Address where user lives. Note: type and postOfficeBox are not supported for educationUser resources.
    residenceAddress?: NullableOption<PhysicalAddress> | undefined;
    /**
     * true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as
     * true. For users invited through the invitation manager, this property will be set to false.
     */
    showInAddressList?: NullableOption<boolean> | undefined;
    // If the primary role is student, this block will contain student specific data.
    student?: NullableOption<EducationStudent> | undefined;
    // The user's surname (family name or last name). Supports /$filter.
    surname?: NullableOption<string> | undefined;
    // If the primary role is teacher, this block will contain teacher specific data.
    teacher?: NullableOption<EducationTeacher> | undefined;
    /**
     * A two-letter country code ([ISO 3166 Alpha-2]). Required for users who will be assigned licenses. Not nullable.
     * Supports /$filter.
     */
    usageLocation?: NullableOption<string> | undefined;
    /**
     * The user principal name (UPN) for the user. Supports $filter and $orderby. See standard [user] resource for additional
     * details.
     */
    userPrincipalName?: NullableOption<string> | undefined;
    /**
     * A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports
     * /$filter.
     */
    userType?: NullableOption<string> | undefined;
    rubrics?: NullableOption<EducationRubric[]> | undefined;
    // Classes to which the user belongs. Nullable.
    classes?: NullableOption<EducationClass[]> | undefined;
    // Schools to which the user belongs. Nullable.
    schools?: NullableOption<EducationSchool[]> | undefined;
    // Classes for which the user is a teacher.
    taughtClasses?: NullableOption<EducationClass[]> | undefined;
    // The directory user corresponding to this user.
    user?: NullableOption<User> | undefined;
}
export interface EducationOrganization extends Entity {
    // Organization description.
    description?: NullableOption<string> | undefined;
    // Organization display name.
    displayName?: string | undefined;
    // Where this user was created from. Possible values are: sis, lms, or manual.
    externalSource?: NullableOption<EducationExternalSource> | undefined;
    // The name of the external source this resources was generated from.
    externalSourceDetail?: NullableOption<string> | undefined;
}
export interface EducationSchool extends EducationOrganization {
    // Address of the school.
    address?: NullableOption<PhysicalAddress> | undefined;
    // Entity who created the school.
    createdBy?: NullableOption<IdentitySet> | undefined;
    // ID of school in syncing system.
    externalId?: NullableOption<string> | undefined;
    // ID of principal in syncing system.
    externalPrincipalId?: NullableOption<string> | undefined;
    fax?: NullableOption<string> | undefined;
    // Highest grade taught.
    highestGrade?: NullableOption<string> | undefined;
    // Lowest grade taught.
    lowestGrade?: NullableOption<string> | undefined;
    // Phone number of school.
    phone?: NullableOption<string> | undefined;
    // Email address of the principal.
    principalEmail?: NullableOption<string> | undefined;
    // Name of the principal.
    principalName?: NullableOption<string> | undefined;
    // School Number.
    schoolNumber?: NullableOption<string> | undefined;
    // The underlying administrativeUnit for this school.
    administrativeUnit?: NullableOption<AdministrativeUnit> | undefined;
    // Classes taught at the school. Nullable.
    classes?: NullableOption<EducationClass[]> | undefined;
    // Users in the school. Nullable.
    users?: NullableOption<EducationUser[]> | undefined;
}
export interface EducationOutcome extends Entity {
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    lastModifiedDateTime?: NullableOption<string> | undefined;
}
export interface EducationFeedbackOutcome extends EducationOutcome {
    // Teacher's written feedback to the student.
    feedback?: NullableOption<EducationFeedback> | undefined;
    // A copy of the feedback property that is made when the grade is released to the student.
    publishedFeedback?: NullableOption<EducationFeedback> | undefined;
}
export interface EducationPointsOutcome extends EducationOutcome {
    // The numeric grade the teacher has given the student for this assignment.
    points?: NullableOption<EducationAssignmentPointsGrade> | undefined;
    // A copy of the points property that is made when the grade is released to the student.
    publishedPoints?: NullableOption<EducationAssignmentPointsGrade> | undefined;
}
export interface EducationRoot {
    classes?: NullableOption<EducationClass[]> | undefined;
    me?: NullableOption<EducationUser> | undefined;
    schools?: NullableOption<EducationSchool[]> | undefined;
    users?: NullableOption<EducationUser[]> | undefined;
}
export interface EducationRubricOutcome extends EducationOutcome {
    // A copy of the rubricQualityFeedback property that is made when the grade is released to the student.
    publishedRubricQualityFeedback?: NullableOption<RubricQualityFeedbackModel[]> | undefined;
    // A copy of the rubricQualitySelectedLevels property that is made when the grade is released to the student.
    publishedRubricQualitySelectedLevels?: NullableOption<RubricQualitySelectedColumnModel[]> | undefined;
    // A collection of specific feedback for each quality of this rubric.
    rubricQualityFeedback?: NullableOption<RubricQualityFeedbackModel[]> | undefined;
    // The level that the teacher has selected for each quality while grading this assignment.
    rubricQualitySelectedLevels?: NullableOption<RubricQualitySelectedColumnModel[]> | undefined;
}
export interface EducationSubmissionResource extends Entity {
    // Pointer to the assignment from which this resource was copied. If this is null, the student uploaded the resource.
    assignmentResourceUrl?: NullableOption<string> | undefined;
    // Resource object.
    resource?: NullableOption<EducationResource> | undefined;
}
export interface AppScope extends Entity {
    /**
     * Provides the display name of the app-specific resource represented by the app scope. Provided for display purposes
     * since appScopeId is often an immutable, non-human-readable id. This property is read only.
     */
    displayName?: NullableOption<string> | undefined;
    /**
     * Describes the type of app-specific resource represented by the app scope. Provided for display purposes, so a user
     * interface can convey to the user the kind of app specific resource represented by the app scope. This property is read
     * only.
     */
    type?: NullableOption<string> | undefined;
}
export interface RbacApplication extends Entity {
    roleAssignments?: NullableOption<UnifiedRoleAssignment[]> | undefined;
    roleDefinitions?: NullableOption<UnifiedRoleDefinition[]> | undefined;
}
export interface UnifiedRoleAssignment extends Entity {
    /**
     * Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines
     * the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the
     * directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are
     * defined and understood by this application only.
     */
    appScopeId?: NullableOption<string> | undefined;
    condition?: NullableOption<string> | undefined;
    /**
     * Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the
     * set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the
     * directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this
     * application only.
     */
    directoryScopeId?: NullableOption<string> | undefined;
    // Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only).
    principalId?: NullableOption<string> | undefined;
    // Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only).
    roleDefinitionId?: NullableOption<string> | undefined;
    // Details of the app specific scope when the assignment scope is app specific. Containment entity.
    appScope?: NullableOption<AppScope> | undefined;
    /**
     * The directory object that is the scope of the assignment. Provided so that callers can get the directory object using
     * $expand at the same time as getting the role assignment. Read-only. Supports $expand.
     */
    directoryScope?: NullableOption<DirectoryObject> | undefined;
    /**
     * The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the
     * role assignment. Read-only. Supports $expand.
     */
    principal?: NullableOption<DirectoryObject> | undefined;
    /**
     * The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the
     * same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand.
     */
    roleDefinition?: NullableOption<UnifiedRoleDefinition> | undefined;
}
export interface UnifiedRoleDefinition extends Entity {
    // The description for the unifiedRoleDefinition. Read-only when isBuiltIn is true.
    description?: NullableOption<string> | undefined;
    /**
     * The display name for the unifiedRoleDefinition. Read-only when isBuiltIn is true. Required. Supports $filter (eq and
     * startsWith operators only).
     */
    displayName?: NullableOption<string> | undefined;
    /**
     * Flag indicating if the unifiedRoleDefinition is part of the default set included with the product or custom. Read-only.
     * Supports $filter (eq operator only).
     */
    isBuiltIn?: NullableOption<boolean> | undefined;
    /**
     * Flag indicating if the role is enabled for assignment. If false the role is not available for assignment. Read-only
     * when isBuiltIn is true.
     */
    isEnabled?: NullableOption<boolean> | undefined;
    /**
     * List of scopes permissions granted by the role definition apply to. Currently only / is supported. Read-only when
     * isBuiltIn is true. DO NOT USE. This is going to be deprecated soon. Attach scope to role assignment
     */
    resourceScopes?: string[] | undefined;
    // List of permissions included in the role. Read-only when isBuiltIn is true. Required.
    rolePermissions?: UnifiedRolePermission[] | undefined;
    /**
     * Custom template identifier that can be set when isBuiltIn is false. This identifier is typically used if one needs an
     * identifier to be the same across different directories. Read-only when isBuiltIn is true.
     */
    templateId?: NullableOption<string> | undefined;
    // Indicates version of the unifiedRoleDefinition. Read-only when isBuiltIn is true.
    version?: NullableOption<string> | undefined;
    /**
     * Read-only collection of role definitions that the given role definition inherits from. Only Azure AD built-in roles
     * support this attribute.
     */
    inheritsPermissionsFrom?: NullableOption<UnifiedRoleDefinition[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface RoleManagement {}
export interface DriveItem extends BaseItem {
    // Audio metadata, if the item is an audio file. Read-only.
    audio?: NullableOption<Audio> | undefined;
    // The content stream, if the item represents a file.
    content?: NullableOption<any> | undefined;
    /**
     * An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is
     * not returned if the item is a folder. Read-only.
     */
    cTag?: NullableOption<string> | undefined;
    // Information about the deleted state of the item. Read-only.
    deleted?: NullableOption<Deleted> | undefined;
    // File metadata, if the item is a file. Read-only.
    file?: NullableOption<File> | undefined;
    // File system information on client. Read-write.
    fileSystemInfo?: NullableOption<FileSystemInfo> | undefined;
    // Folder metadata, if the item is a folder. Read-only.
    folder?: NullableOption<Folder> | undefined;
    // Image metadata, if the item is an image. Read-only.
    image?: NullableOption<Image> | undefined;
    // Location metadata, if the item has location data. Read-only.
    location?: NullableOption<GeoCoordinates> | undefined;
    /**
     * If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some
     * contexts and folders in others. Read-only.
     */
    package?: NullableOption<Package> | undefined;
    /**
     * If present, indicates that indicates that one or more operations that may affect the state of the driveItem are pending
     * completion. Read-only.
     */
    pendingOperations?: NullableOption<PendingOperations> | undefined;
    // Photo metadata, if the item is a photo. Read-only.
    photo?: NullableOption<Photo> | undefined;
    /**
     * Provides information about the published or checked-out state of an item, in locations that support such actions. This
     * property is not returned by default. Read-only.
     */
    publication?: NullableOption<PublicationFacet> | undefined;
    // Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
    remoteItem?: NullableOption<RemoteItem> | undefined;
    // If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
    root?: NullableOption<Root> | undefined;
    // Search metadata, if the item is from a search result. Read-only.
    searchResult?: NullableOption<SearchResult> | undefined;
    /**
     * Indicates that the item has been shared with others and provides information about the shared state of the item.
     * Read-only.
     */
    shared?: NullableOption<Shared> | undefined;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: NullableOption<SharepointIds> | undefined;
    // Size of the item in bytes. Read-only.
    size?: NullableOption<number> | undefined;
    // If the current item is also available as a special folder, this facet is returned. Read-only.
    specialFolder?: NullableOption<SpecialFolder> | undefined;
    // Video metadata, if the item is a video. Read-only.
    video?: NullableOption<Video> | undefined;
    // WebDAV compatible URL for the item.
    webDavUrl?: NullableOption<string> | undefined;
    // For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
    workbook?: NullableOption<Workbook> | undefined;
    // Analytics about the view activities that took place on this item.
    analytics?: NullableOption<ItemAnalytics> | undefined;
    /**
     * Collection containing Item objects for the immediate children of Item. Only items representing folders have children.
     * Read-only. Nullable.
     */
    children?: NullableOption<DriveItem[]> | undefined;
    // For drives in SharePoint, the associated document library list item. Read-only. Nullable.
    listItem?: NullableOption<ListItem> | undefined;
    // The set of permissions for the item. Read-only. Nullable.
    permissions?: NullableOption<Permission[]> | undefined;
    // The set of subscriptions on the item. Only supported on the root of a drive.
    subscriptions?: NullableOption<Subscription[]> | undefined;
    /**
     * Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][].
     * Read-only. Nullable.
     */
    thumbnails?: NullableOption<ThumbnailSet[]> | undefined;
    // The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
    versions?: NullableOption<DriveItemVersion[]> | undefined;
}
export interface List extends BaseItem {
    // The displayable title of the list.
    displayName?: NullableOption<string> | undefined;
    // Provides additional details about the list.
    list?: NullableOption<ListInfo> | undefined;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: NullableOption<SharepointIds> | undefined;
    // If present, indicates that this is a system-managed list. Read-only.
    system?: NullableOption<SystemFacet> | undefined;
    // The collection of field definitions for this list.
    columns?: NullableOption<ColumnDefinition[]> | undefined;
    // The collection of content types present in this list.
    contentTypes?: NullableOption<ContentType[]> | undefined;
    // Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
    drive?: NullableOption<Drive> | undefined;
    // All items contained in the list.
    items?: NullableOption<ListItem[]> | undefined;
    // The set of subscriptions on the list.
    subscriptions?: NullableOption<Subscription[]> | undefined;
}
export interface Workbook extends Entity {
    application?: NullableOption<WorkbookApplication> | undefined;
    comments?: NullableOption<WorkbookComment[]> | undefined;
    functions?: NullableOption<WorkbookFunctions> | undefined;
    // Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.
    names?: NullableOption<WorkbookNamedItem[]> | undefined;
    /**
     * The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a
     * long-running operation if the Location header is returned in the response. Read-only. Nullable.
     */
    operations?: NullableOption<WorkbookOperation[]> | undefined;
    // Represents a collection of tables associated with the workbook. Read-only.
    tables?: NullableOption<WorkbookTable[]> | undefined;
    // Represents a collection of worksheets associated with the workbook. Read-only.
    worksheets?: NullableOption<WorkbookWorksheet[]> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ItemAnalytics extends Entity {
    allTime?: NullableOption<ItemActivityStat> | undefined;
    itemActivityStats?: NullableOption<ItemActivityStat[]> | undefined;
    lastSevenDays?: NullableOption<ItemActivityStat> | undefined;
}
export interface ListItem extends BaseItem {
    // The content type of this list item
    contentType?: NullableOption<ContentTypeInfo> | undefined;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: NullableOption<SharepointIds> | undefined;
    // Analytics about the view activities that took place on this item.
    analytics?: NullableOption<ItemAnalytics> | undefined;
    // For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
    driveItem?: NullableOption<DriveItem> | undefined;
    // The values of the columns set on this list item.
    fields?: NullableOption<FieldValueSet> | undefined;
    // The list of previous versions of the list item.
    versions?: NullableOption<ListItemVersion[]> | undefined;
}
export interface Permission extends Entity {
    /**
     * A format of yyyy-MM-ddTHH:mm:ssZ of DateTimeOffset indicates the expiration time of the permission. DateTime.MinValue
     * indicates there is no expiration set for this permission. Optional.
     */
    expirationDateTime?: NullableOption<string> | undefined;
    // For user type permissions, the details of the users &amp; applications for this permission. Read-only.
    grantedTo?: NullableOption<IdentitySet> | undefined;
    // For link type permissions, the details of the users to whom permission was granted. Read-only.
    grantedToIdentities?: NullableOption<IdentitySet[]> | undefined;
    /**
     * This indicates whether password is set for this permission, it's only showing in response. Optional and Read-only and
     * for OneDrive Personal only.
     */
    hasPassword?: NullableOption<boolean> | undefined;
    // Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.
    inheritedFrom?: NullableOption<ItemReference> | undefined;
    // Details of any associated sharing invitation for this permission. Read-only.
    invitation?: NullableOption<SharingInvitation> | undefined;
    // Provides the link details of the current permission, if it is a link type permissions. Read-only.
    link?: NullableOption<SharingLink> | undefined;
    // The type of permission, e.g. read. See below for the full list of roles. Read-only.
    roles?: NullableOption<string[]> | undefined;
    // A unique token that can be used to access this shared item via the [shares API][]. Read-only.
    shareId?: NullableOption<string> | undefined;
}
export interface Subscription extends Entity {
    // Identifier of the application used to create the subscription. Read-only.
    applicationId?: NullableOption<string> | undefined;
    /**
     * Indicates the type of change in the subscribed resource that will raise a change notification. The supported values
     * are: created, updated, deleted. Multiple values can be combined using a comma-separated list. Required. Note: Drive
     * root item and list change notifications support only the updated changeType. User and group change notifications
     * support updated and deleted changeType.
     */
    changeType?: string | undefined;
    /**
     * Specifies the value of the clientState property sent by the service in each change notification. The maximum length is
     * 255 characters. The client can check that the change notification came from the service by comparing the value of the
     * clientState property sent with the subscription with the value of the clientState property received with each change
     * notification. Optional.
     */
    clientState?: NullableOption<string> | undefined;
    /**
     * Identifier of the user or service principal that created the subscription. If the app used delegated permissions to
     * create the subscription, this field contains the ID of the signed-in user the app called on behalf of. If the app used
     * application permissions, this field contains the ID of the service principal corresponding to the app. Read-only.
     */
    creatorId?: NullableOption<string> | undefined;
    /**
     * A base64-encoded representation of a certificate with a public key used to encrypt resource data in change
     * notifications. Optional. Required when includeResourceData is true.
     */
    encryptionCertificate?: NullableOption<string> | undefined;
    /**
     * A custom app-provided identifier to help identify the certificate needed to decrypt resource data. Optional. Required
     * when includeResourceData is true.
     */
    encryptionCertificateId?: NullableOption<string> | undefined;
    /**
     * Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount of time
     * from subscription creation that varies for the resource subscribed to. See the table below for maximum supported
     * subscription length of time. Required.
     */
    expirationDateTime?: string | undefined;
    // When set to true, change notifications include resource data (such as content of a chat message). Optional.
    includeResourceData?: NullableOption<boolean> | undefined;
    /**
     * Specifies the latest version of Transport Layer Security (TLS) that the notification endpoint, specified by
     * notificationUrl, supports. The possible values are: v1_0, v1_1, v1_2, v1_3. For subscribers whose notification endpoint
     * supports a version lower than the currently recommended version (TLS 1.2), specifying this property by a set timeline
     * allows them to temporarily use their deprecated version of TLS before completing their upgrade to TLS 1.2. For these
     * subscribers, not setting this property per the timeline would result in subscription operations failing. For
     * subscribers whose notification endpoint already supports TLS 1.2, setting this property is optional. In such cases,
     * Microsoft Graph defaults the property to v1_2.
     */
    latestSupportedTlsVersion?: NullableOption<string> | undefined;
    /**
     * The URL of the endpoint that receives lifecycle notifications, including subscriptionRemoved and missed notifications.
     * This URL must make use of the HTTPS protocol. Optional. Read more about how Outlook resources use lifecycle
     * notifications.
     */
    lifecycleNotificationUrl?: NullableOption<string> | undefined;
    /**
     * OData Query Options for specifying value for the targeting resource. Clients receive notifications when resource
     * reaches the state matching the query options provided here. With this new property in the subscription creation payload
     * along with all existing properties, Webhooks will deliver notifications whenever a resource reaches the desired state
     * mentioned in the notificationQueryOptions property eg when the print job is completed, when a print job resource
     * isFetchable property value becomes true etc.
     */
    notificationQueryOptions?: NullableOption<string> | undefined;
    // The URL of the endpoint that receives the change notifications. This URL must make use of the HTTPS protocol. Required.
    notificationUrl?: string | undefined;
    /**
     * Specifies the resource that will be monitored for changes. Do not include the base URL
     * (https://graph.microsoft.com/beta/). See the possible resource path values for each supported resource. Required.
     */
    resource?: string | undefined;
}
export interface ThumbnailSet extends Entity {
    // A 1920x1920 scaled thumbnail.
    large?: NullableOption<Thumbnail> | undefined;
    // A 176x176 scaled thumbnail.
    medium?: NullableOption<Thumbnail> | undefined;
    // A 48x48 cropped thumbnail.
    small?: NullableOption<Thumbnail> | undefined;
    // A custom thumbnail image or the original image used to generate other thumbnails.
    source?: NullableOption<Thumbnail> | undefined;
}
export interface BaseItemVersion extends Entity {
    // Identity of the user which last modified the version. Read-only.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    // Date and time the version was last modified. Read-only.
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Indicates the publication status of this particular version. Read-only.
    publication?: NullableOption<PublicationFacet> | undefined;
}
export interface DriveItemVersion extends BaseItemVersion {
    content?: NullableOption<any> | undefined;
    // Indicates the size of the content stream for this version of the item.
    size?: NullableOption<number> | undefined;
}
export interface ColumnDefinition extends Entity {
    // This column stores boolean values.
    boolean?: NullableOption<BooleanColumn> | undefined;
    // This column's data is calculated based on other columns.
    calculated?: NullableOption<CalculatedColumn> | undefined;
    // This column stores data from a list of choices.
    choice?: NullableOption<ChoiceColumn> | undefined;
    // For site columns, the name of the group this column belongs to. Helps organize related columns.
    columnGroup?: NullableOption<string> | undefined;
    // This column stores currency values.
    currency?: NullableOption<CurrencyColumn> | undefined;
    // This column stores DateTime values.
    dateTime?: NullableOption<DateTimeColumn> | undefined;
    // The default value for this column.
    defaultValue?: NullableOption<DefaultColumnValue> | undefined;
    // The user-facing description of the column.
    description?: NullableOption<string> | undefined;
    // The user-facing name of the column.
    displayName?: NullableOption<string> | undefined;
    // If true, no two list items may have the same value for this column.
    enforceUniqueValues?: NullableOption<boolean> | undefined;
    // This column stores a geolocation.
    geolocation?: NullableOption<GeolocationColumn> | undefined;
    // Specifies whether the column is displayed in the user interface.
    hidden?: NullableOption<boolean> | undefined;
    // Specifies whether the column values can used for sorting and searching.
    indexed?: NullableOption<boolean> | undefined;
    // This column's data is looked up from another source in the site.
    lookup?: NullableOption<LookupColumn> | undefined;
    /**
     * The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see
     * displayName.
     */
    name?: NullableOption<string> | undefined;
    // This column stores number values.
    number?: NullableOption<NumberColumn> | undefined;
    // This column stores Person or Group values.
    personOrGroup?: NullableOption<PersonOrGroupColumn> | undefined;
    // Specifies whether the column values can be modified.
    readOnly?: NullableOption<boolean> | undefined;
    // Specifies whether the column value is not optional.
    required?: NullableOption<boolean> | undefined;
    // This column stores text values.
    text?: NullableOption<TextColumn> | undefined;
}
export interface ContentType extends Entity {
    // The descriptive text for the item.
    description?: NullableOption<string> | undefined;
    // The name of the group this content type belongs to. Helps organize related content types.
    group?: NullableOption<string> | undefined;
    // Indicates whether the content type is hidden in the list's 'New' menu.
    hidden?: NullableOption<boolean> | undefined;
    /**
     * If this content type is inherited from another scope (like a site), provides a reference to the item where the content
     * type is defined.
     */
    inheritedFrom?: NullableOption<ItemReference> | undefined;
    // The name of the content type.
    name?: NullableOption<string> | undefined;
    // Specifies the order in which the content type appears in the selection UI.
    order?: NullableOption<ContentTypeOrder> | undefined;
    // The unique identifier of the content type.
    parentId?: NullableOption<string> | undefined;
    // If true, the content type cannot be modified unless this value is first set to false.
    readOnly?: NullableOption<boolean> | undefined;
    /**
     * If true, the content type cannot be modified by users or through push-down operations. Only site collection
     * administrators can seal or unseal content types.
     */
    sealed?: NullableOption<boolean> | undefined;
    // The collection of columns that are required by this content type
    columnLinks?: NullableOption<ColumnLink[]> | undefined;
}
export interface WorkbookApplication extends Entity {
    // Returns the calculation mode used in the workbook. Possible values are: Automatic, AutomaticExceptTables, Manual.
    calculationMode?: string | undefined;
}
export interface WorkbookComment extends Entity {
    // The content of the comment.
    content?: NullableOption<string> | undefined;
    // Indicates the type for the comment.
    contentType?: string | undefined;
    // Read-only. Nullable.
    replies?: NullableOption<WorkbookCommentReply[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface WorkbookFunctions extends Entity {}
export interface WorkbookNamedItem extends Entity {
    // Represents the comment associated with this name.
    comment?: NullableOption<string> | undefined;
    // The name of the object. Read-only.
    name?: NullableOption<string> | undefined;
    // Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
    scope?: string | undefined;
    /**
     * Indicates what type of reference is associated with the name. Possible values are: String, Integer, Double, Boolean,
     * Range. Read-only.
     */
    type?: NullableOption<string> | undefined;
    // Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.
    value?: NullableOption<any> | undefined;
    // Specifies whether the object is visible or not.
    visible?: boolean | undefined;
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet.
     * Read-only.
     */
    worksheet?: NullableOption<WorkbookWorksheet> | undefined;
}
export interface WorkbookOperation extends Entity {
    // The error returned by the operation.
    error?: NullableOption<WorkbookOperationError> | undefined;
    // The resource URI for the result.
    resourceLocation?: NullableOption<string> | undefined;
    // The current status of the operation. Possible values are: notStarted, running, succeeded, failed.
    status?: WorkbookOperationStatus | undefined;
}
export interface WorkbookTable extends Entity {
    // Indicates whether the first column contains special formatting.
    highlightFirstColumn?: boolean | undefined;
    // Indicates whether the last column contains special formatting.
    highlightLastColumn?: boolean | undefined;
    /**
     * Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed.
     * This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
     */
    legacyId?: NullableOption<string> | undefined;
    // Name of the table.
    name?: NullableOption<string> | undefined;
    /**
     * Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to
     * make reading the table easier.
     */
    showBandedColumns?: boolean | undefined;
    /**
     * Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make
     * reading the table easier.
     */
    showBandedRows?: boolean | undefined;
    /**
     * Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the
     * table contains a header row.
     */
    showFilterButton?: boolean | undefined;
    // Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
    showHeaders?: boolean | undefined;
    // Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
    showTotals?: boolean | undefined;
    /**
     * Constant value that represents the Table style. Possible values are: TableStyleLight1 thru TableStyleLight21,
     * TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style
     * present in the workbook can also be specified.
     */
    style?: NullableOption<string> | undefined;
    // Represents a collection of all the columns in the table. Read-only.
    columns?: NullableOption<WorkbookTableColumn[]> | undefined;
    // Represents a collection of all the rows in the table. Read-only.
    rows?: NullableOption<WorkbookTableRow[]> | undefined;
    // Represents the sorting for the table. Read-only.
    sort?: NullableOption<WorkbookTableSort> | undefined;
    // The worksheet containing the current table. Read-only.
    worksheet?: NullableOption<WorkbookWorksheet> | undefined;
}
export interface WorkbookWorksheet extends Entity {
    // The display name of the worksheet.
    name?: NullableOption<string> | undefined;
    // The zero-based position of the worksheet within the workbook.
    position?: number | undefined;
    // The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
    visibility?: string | undefined;
    // Returns collection of charts that are part of the worksheet. Read-only.
    charts?: NullableOption<WorkbookChart[]> | undefined;
    // Returns collection of names that are associated with the worksheet. Read-only.
    names?: NullableOption<WorkbookNamedItem[]> | undefined;
    // Collection of PivotTables that are part of the worksheet.
    pivotTables?: NullableOption<WorkbookPivotTable[]> | undefined;
    // Returns sheet protection object for a worksheet. Read-only.
    protection?: NullableOption<WorkbookWorksheetProtection> | undefined;
    // Collection of tables that are part of the worksheet. Read-only.
    tables?: NullableOption<WorkbookTable[]> | undefined;
}
export interface WorkbookChart extends Entity {
    // Represents the height, in points, of the chart object.
    height?: number | undefined;
    // The distance, in points, from the left side of the chart to the worksheet origin.
    left?: number | undefined;
    // Represents the name of a chart object.
    name?: NullableOption<string> | undefined;
    /**
     * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of
     * the chart area (on a chart).
     */
    top?: number | undefined;
    // Represents the width, in points, of the chart object.
    width?: number | undefined;
    // Represents chart axes. Read-only.
    axes?: NullableOption<WorkbookChartAxes> | undefined;
    // Represents the datalabels on the chart. Read-only.
    dataLabels?: NullableOption<WorkbookChartDataLabels> | undefined;
    // Encapsulates the format properties for the chart area. Read-only.
    format?: NullableOption<WorkbookChartAreaFormat> | undefined;
    // Represents the legend for the chart. Read-only.
    legend?: NullableOption<WorkbookChartLegend> | undefined;
    // Represents either a single series or collection of series in the chart. Read-only.
    series?: NullableOption<WorkbookChartSeries[]> | undefined;
    /**
     * Represents the title of the specified chart, including the text, visibility, position and formating of the title.
     * Read-only.
     */
    title?: NullableOption<WorkbookChartTitle> | undefined;
    // The worksheet containing the current chart. Read-only.
    worksheet?: NullableOption<WorkbookWorksheet> | undefined;
}
export interface WorkbookChartAxes extends Entity {
    // Represents the category axis in a chart. Read-only.
    categoryAxis?: NullableOption<WorkbookChartAxis> | undefined;
    // Represents the series axis of a 3-dimensional chart. Read-only.
    seriesAxis?: NullableOption<WorkbookChartAxis> | undefined;
    // Represents the value axis in an axis. Read-only.
    valueAxis?: NullableOption<WorkbookChartAxis> | undefined;
}
export interface WorkbookChartDataLabels extends Entity {
    /**
     * DataLabelPosition value that represents the position of the data label. The possible values are: None, Center,
     * InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
     */
    position?: NullableOption<string> | undefined;
    // String representing the separator used for the data labels on a chart.
    separator?: NullableOption<string> | undefined;
    // Boolean value representing if the data label bubble size is visible or not.
    showBubbleSize?: NullableOption<boolean> | undefined;
    // Boolean value representing if the data label category name is visible or not.
    showCategoryName?: NullableOption<boolean> | undefined;
    // Boolean value representing if the data label legend key is visible or not.
    showLegendKey?: NullableOption<boolean> | undefined;
    // Boolean value representing if the data label percentage is visible or not.
    showPercentage?: NullableOption<boolean> | undefined;
    // Boolean value representing if the data label series name is visible or not.
    showSeriesName?: NullableOption<boolean> | undefined;
    // Boolean value representing if the data label value is visible or not.
    showValue?: NullableOption<boolean> | undefined;
    // Represents the format of chart data labels, which includes fill and font formatting. Read-only.
    format?: NullableOption<WorkbookChartDataLabelFormat> | undefined;
}
export interface WorkbookChartAreaFormat extends Entity {
    // Represents the fill format of an object, which includes background formatting information. Read-only.
    fill?: NullableOption<WorkbookChartFill> | undefined;
    // Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
    font?: NullableOption<WorkbookChartFont> | undefined;
}
export interface WorkbookChartLegend extends Entity {
    // Boolean value for whether the chart legend should overlap with the main body of the chart.
    overlay?: NullableOption<boolean> | undefined;
    // Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom.
    position?: NullableOption<string> | undefined;
    // A boolean value the represents the visibility of a ChartLegend object.
    visible?: boolean | undefined;
    // Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
    format?: NullableOption<WorkbookChartLegendFormat> | undefined;
}
export interface WorkbookChartSeries extends Entity {
    // Represents the name of a series in a chart.
    name?: NullableOption<string> | undefined;
    // Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
    format?: NullableOption<WorkbookChartSeriesFormat> | undefined;
    // Represents a collection of all points in the series. Read-only.
    points?: NullableOption<WorkbookChartPoint[]> | undefined;
}
export interface WorkbookChartTitle extends Entity {
    // Boolean value representing if the chart title will overlay the chart or not.
    overlay?: NullableOption<boolean> | undefined;
    // Represents the title text of a chart.
    text?: NullableOption<string> | undefined;
    // A boolean value the represents the visibility of a chart title object.
    visible?: boolean | undefined;
    // Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
    format?: NullableOption<WorkbookChartTitleFormat> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface WorkbookChartFill extends Entity {}
export interface WorkbookChartFont extends Entity {
    // Represents the bold status of font.
    bold?: NullableOption<boolean> | undefined;
    // HTML color code representation of the text color. E.g. #FF0000 represents Red.
    color?: NullableOption<string> | undefined;
    // Represents the italic status of the font.
    italic?: NullableOption<boolean> | undefined;
    // Font name (e.g. 'Calibri')
    name?: NullableOption<string> | undefined;
    // Size of the font (e.g. 11)
    size?: NullableOption<number> | undefined;
    // Type of underline applied to the font. The possible values are: None, Single.
    underline?: NullableOption<string> | undefined;
}
export interface WorkbookChartAxis extends Entity {
    /**
     * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string. The returned
     * value is always a number.
     */
    majorUnit?: NullableOption<any> | undefined;
    /**
     * Represents the maximum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis
     * values). The returned value is always a number.
     */
    maximum?: NullableOption<any> | undefined;
    /**
     * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis
     * values). The returned value is always a number.
     */
    minimum?: NullableOption<any> | undefined;
    /**
     * Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic
     * axis values). The returned value is always a number.
     */
    minorUnit?: NullableOption<any> | undefined;
    // Represents the formatting of a chart object, which includes line and font formatting. Read-only.
    format?: NullableOption<WorkbookChartAxisFormat> | undefined;
    // Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
    majorGridlines?: NullableOption<WorkbookChartGridlines> | undefined;
    // Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
    minorGridlines?: NullableOption<WorkbookChartGridlines> | undefined;
    // Represents the axis title. Read-only.
    title?: NullableOption<WorkbookChartAxisTitle> | undefined;
}
export interface WorkbookChartAxisFormat extends Entity {
    // Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
    font?: NullableOption<WorkbookChartFont> | undefined;
    // Represents chart line formatting. Read-only.
    line?: NullableOption<WorkbookChartLineFormat> | undefined;
}
export interface WorkbookChartGridlines extends Entity {
    // Boolean value representing if the axis gridlines are visible or not.
    visible?: boolean | undefined;
    // Represents the formatting of chart gridlines. Read-only.
    format?: NullableOption<WorkbookChartGridlinesFormat> | undefined;
}
export interface WorkbookChartAxisTitle extends Entity {
    // Represents the axis title.
    text?: NullableOption<string> | undefined;
    // A boolean that specifies the visibility of an axis title.
    visible?: boolean | undefined;
    // Represents the formatting of chart axis title. Read-only.
    format?: NullableOption<WorkbookChartAxisTitleFormat> | undefined;
}
export interface WorkbookChartLineFormat extends Entity {
    // HTML color code representing the color of lines in the chart.
    color?: NullableOption<string> | undefined;
}
export interface WorkbookChartAxisTitleFormat extends Entity {
    // Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
    font?: NullableOption<WorkbookChartFont> | undefined;
}
export interface WorkbookChartDataLabelFormat extends Entity {
    // Represents the fill format of the current chart data label. Read-only.
    fill?: NullableOption<WorkbookChartFill> | undefined;
    // Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.
    font?: NullableOption<WorkbookChartFont> | undefined;
}
export interface WorkbookChartGridlinesFormat extends Entity {
    // Represents chart line formatting. Read-only.
    line?: NullableOption<WorkbookChartLineFormat> | undefined;
}
export interface WorkbookChartLegendFormat extends Entity {
    // Represents the fill format of an object, which includes background formating information. Read-only.
    fill?: NullableOption<WorkbookChartFill> | undefined;
    // Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only.
    font?: NullableOption<WorkbookChartFont> | undefined;
}
export interface WorkbookChartPoint extends Entity {
    // Returns the value of a chart point. Read-only.
    value?: NullableOption<any> | undefined;
    // Encapsulates the format properties chart point. Read-only.
    format?: NullableOption<WorkbookChartPointFormat> | undefined;
}
export interface WorkbookChartPointFormat extends Entity {
    // Represents the fill format of a chart, which includes background formating information. Read-only.
    fill?: NullableOption<WorkbookChartFill> | undefined;
}
export interface WorkbookChartSeriesFormat extends Entity {
    // Represents the fill format of a chart series, which includes background formating information. Read-only.
    fill?: NullableOption<WorkbookChartFill> | undefined;
    // Represents line formatting. Read-only.
    line?: NullableOption<WorkbookChartLineFormat> | undefined;
}
export interface WorkbookChartTitleFormat extends Entity {
    // Represents the fill format of an object, which includes background formatting information. Read-only.
    fill?: NullableOption<WorkbookChartFill> | undefined;
    // Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
    font?: NullableOption<WorkbookChartFont> | undefined;
}
export interface WorkbookCommentReply extends Entity {
    // The content of replied comment.
    content?: NullableOption<string> | undefined;
    // Indicates the type for the replied comment.
    contentType?: string | undefined;
}
export interface WorkbookFilter extends Entity {
    // The currently applied filter on the given column. Read-only.
    criteria?: NullableOption<WorkbookFilterCriteria> | undefined;
}
export interface WorkbookFormatProtection extends Entity {
    /**
     * Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't
     * have uniform formula hidden setting.
     */
    formulaHidden?: NullableOption<boolean> | undefined;
    /**
     * Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform
     * lock setting.
     */
    locked?: NullableOption<boolean> | undefined;
}
export interface WorkbookFunctionResult extends Entity {
    error?: NullableOption<string> | undefined;
    value?: NullableOption<any> | undefined;
}
export interface WorkbookPivotTable extends Entity {
    // Name of the PivotTable.
    name?: NullableOption<string> | undefined;
    // The worksheet containing the current PivotTable. Read-only.
    worksheet?: NullableOption<WorkbookWorksheet> | undefined;
}
export interface WorkbookRange extends Entity {
    /**
     * Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4).
     * Read-only.
     */
    address?: NullableOption<string> | undefined;
    // Represents range reference for the specified range in the language of the user. Read-only.
    addressLocal?: NullableOption<string> | undefined;
    // Number of cells in the range. Read-only.
    cellCount?: number | undefined;
    // Represents the total number of columns in the range. Read-only.
    columnCount?: number | undefined;
    // Represents if all columns of the current range are hidden.
    columnHidden?: NullableOption<boolean> | undefined;
    // Represents the column number of the first cell in the range. Zero-indexed. Read-only.
    columnIndex?: number | undefined;
    // Represents the formula in A1-style notation.
    formulas?: NullableOption<any> | undefined;
    /**
     * Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the
     * English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     */
    formulasLocal?: NullableOption<any> | undefined;
    // Represents the formula in R1C1-style notation.
    formulasR1C1?: NullableOption<any> | undefined;
    // Represents if all cells of the current range are hidden. Read-only.
    hidden?: NullableOption<boolean> | undefined;
    // Represents Excel's number format code for the given cell.
    numberFormat?: NullableOption<any> | undefined;
    // Returns the total number of rows in the range. Read-only.
    rowCount?: number | undefined;
    // Represents if all rows of the current range are hidden.
    rowHidden?: NullableOption<boolean> | undefined;
    // Returns the row number of the first cell in the range. Zero-indexed. Read-only.
    rowIndex?: number | undefined;
    /**
     * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that
     * happens in Excel UI will not affect the text value returned by the API. Read-only.
     */
    text?: NullableOption<any> | undefined;
    /**
     * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell
     * that contain an error will return the error string.
     */
    values?: NullableOption<any> | undefined;
    /**
     * Represents the type of data of each cell. Possible values are: Unknown, Empty, String, Integer, Double, Boolean, Error.
     * Read-only.
     */
    valueTypes?: NullableOption<any> | undefined;
    // Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
    format?: NullableOption<WorkbookRangeFormat> | undefined;
    // The worksheet containing the current range. Read-only.
    sort?: NullableOption<WorkbookRangeSort> | undefined;
    // The worksheet containing the current range. Read-only.
    worksheet?: NullableOption<WorkbookWorksheet> | undefined;
}
export interface WorkbookRangeFormat extends Entity {
    // Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
    columnWidth?: NullableOption<number> | undefined;
    /**
     * Represents the horizontal alignment for the specified object. Possible values are: General, Left, Center, Right, Fill,
     * Justify, CenterAcrossSelection, Distributed.
     */
    horizontalAlignment?: NullableOption<string> | undefined;
    // Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned.
    rowHeight?: NullableOption<number> | undefined;
    /**
     * Represents the vertical alignment for the specified object. Possible values are: Top, Center, Bottom, Justify,
     * Distributed.
     */
    verticalAlignment?: NullableOption<string> | undefined;
    /**
     * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap
     * setting
     */
    wrapText?: NullableOption<boolean> | undefined;
    // Collection of border objects that apply to the overall range selected Read-only.
    borders?: NullableOption<WorkbookRangeBorder[]> | undefined;
    // Returns the fill object defined on the overall range. Read-only.
    fill?: NullableOption<WorkbookRangeFill> | undefined;
    // Returns the font object defined on the overall range selected Read-only.
    font?: NullableOption<WorkbookRangeFont> | undefined;
    // Returns the format protection object for a range. Read-only.
    protection?: NullableOption<WorkbookFormatProtection> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface WorkbookRangeSort extends Entity {}
export interface WorkbookRangeBorder extends Entity {
    /**
     * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color
     * (e.g. 'orange').
     */
    color?: NullableOption<string> | undefined;
    /**
     * Constant value that indicates the specific side of the border. Possible values are: EdgeTop, EdgeBottom, EdgeLeft,
     * EdgeRight, InsideVertical, InsideHorizontal, DiagonalDown, DiagonalUp. Read-only.
     */
    sideIndex?: NullableOption<string> | undefined;
    /**
     * One of the constants of line style specifying the line style for the border. Possible values are: None, Continuous,
     * Dash, DashDot, DashDotDot, Dot, Double, SlantDashDot.
     */
    style?: NullableOption<string> | undefined;
    // Specifies the weight of the border around a range. Possible values are: Hairline, Thin, Medium, Thick.
    weight?: NullableOption<string> | undefined;
}
export interface WorkbookRangeFill extends Entity {
    /**
     * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color
     * (e.g. 'orange')
     */
    color?: NullableOption<string> | undefined;
}
export interface WorkbookRangeFont extends Entity {
    // Represents the bold status of font.
    bold?: NullableOption<boolean> | undefined;
    // HTML color code representation of the text color. E.g. #FF0000 represents Red.
    color?: NullableOption<string> | undefined;
    // Represents the italic status of the font.
    italic?: NullableOption<boolean> | undefined;
    // Font name (e.g. 'Calibri')
    name?: NullableOption<string> | undefined;
    // Font size.
    size?: NullableOption<number> | undefined;
    // Type of underline applied to the font. Possible values are: None, Single, Double, SingleAccountant, DoubleAccountant.
    underline?: NullableOption<string> | undefined;
}
export interface WorkbookRangeView extends Entity {
    // Represents the cell addresses
    cellAddresses?: NullableOption<any> | undefined;
    // Returns the number of visible columns. Read-only.
    columnCount?: number | undefined;
    // Represents the formula in A1-style notation.
    formulas?: NullableOption<any> | undefined;
    /**
     * Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the
     * English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     */
    formulasLocal?: NullableOption<any> | undefined;
    // Represents the formula in R1C1-style notation.
    formulasR1C1?: NullableOption<any> | undefined;
    // Index of the range.
    index?: number | undefined;
    // Represents Excel's number format code for the given cell. Read-only.
    numberFormat?: NullableOption<any> | undefined;
    // Returns the number of visible rows. Read-only.
    rowCount?: number | undefined;
    /**
     * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that
     * happens in Excel UI will not affect the text value returned by the API. Read-only.
     */
    text?: NullableOption<any> | undefined;
    /**
     * Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean.
     * Cell that contain an error will return the error string.
     */
    values?: NullableOption<any> | undefined;
    /**
     * Represents the type of data of each cell. Read-only. Possible values are: Unknown, Empty, String, Integer, Double,
     * Boolean, Error.
     */
    valueTypes?: NullableOption<any> | undefined;
    // Represents a collection of range views associated with the range. Read-only. Read-only.
    rows?: NullableOption<WorkbookRangeView[]> | undefined;
}
export interface WorkbookTableColumn extends Entity {
    // Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
    index?: number | undefined;
    // Returns the name of the table column.
    name?: NullableOption<string> | undefined;
    /**
     * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell
     * that contain an error will return the error string.
     */
    values?: NullableOption<any> | undefined;
    // Retrieve the filter applied to the column. Read-only.
    filter?: NullableOption<WorkbookFilter> | undefined;
}
export interface WorkbookTableRow extends Entity {
    // Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
    index?: number | undefined;
    /**
     * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell
     * that contain an error will return the error string.
     */
    values?: NullableOption<any> | undefined;
}
export interface WorkbookTableSort extends Entity {
    // Represents the current conditions used to last sort the table. Read-only.
    fields?: NullableOption<WorkbookSortField[]> | undefined;
    // Represents whether the casing impacted the last sort of the table. Read-only.
    matchCase?: boolean | undefined;
    /**
     * Represents Chinese character ordering method last used to sort the table. Possible values are: PinYin, StrokeCount.
     * Read-only.
     */
    method?: string | undefined;
}
export interface WorkbookWorksheetProtection extends Entity {
    // Sheet protection options. Read-only.
    options?: NullableOption<WorkbookWorksheetProtectionOptions> | undefined;
    // Indicates if the worksheet is protected. Read-only.
    protected?: boolean | undefined;
}
export interface Place extends Entity {
    // The street address of the place.
    address?: NullableOption<PhysicalAddress> | undefined;
    // The name associated with the place.
    displayName?: string | undefined;
    // Specifies the place location in latitude, longitude and (optionally) altitude coordinates.
    geoCoordinates?: NullableOption<OutlookGeoCoordinates> | undefined;
    // The phone number of the place.
    phone?: NullableOption<string> | undefined;
}
export interface Room extends Place {
    // Specifies the name of the audio device in the room.
    audioDeviceName?: NullableOption<string> | undefined;
    // Type of room. Possible values are standard, and reserved.
    bookingType?: NullableOption<BookingType> | undefined;
    // Specifies the building name or building number that the room is in.
    building?: NullableOption<string> | undefined;
    // Specifies the capacity of the room.
    capacity?: NullableOption<number> | undefined;
    // Specifies the name of the display device in the room.
    displayDeviceName?: NullableOption<string> | undefined;
    // Email address of the room.
    emailAddress?: NullableOption<string> | undefined;
    // Specifies a descriptive label for the floor, for example, P.
    floorLabel?: NullableOption<string> | undefined;
    // Specifies the floor number that the room is on.
    floorNumber?: NullableOption<number> | undefined;
    // Specifies whether the room is wheelchair accessible.
    isWheelChairAccessible?: NullableOption<boolean> | undefined;
    // Specifies a descriptive label for the room, for example, a number or name.
    label?: NullableOption<string> | undefined;
    // Specifies a nickname for the room, for example, 'conf room'.
    nickname?: string | undefined;
    // Specifies additional features of the room, for example, details like the type of view or furniture type.
    tags?: NullableOption<string[]> | undefined;
    // Specifies the name of the video device in the room.
    videoDeviceName?: NullableOption<string> | undefined;
}
export interface RoomList extends Place {
    // The email address of the room list.
    emailAddress?: NullableOption<string> | undefined;
    // Read-only. Nullable.
    rooms?: NullableOption<Room[]> | undefined;
}
export interface Attachment extends Entity {
    // The MIME type.
    contentType?: NullableOption<string> | undefined;
    // true if the attachment is an inline attachment; otherwise, false.
    isInline?: boolean | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // The display name of the attachment. This does not need to be the actual file name.
    name?: NullableOption<string> | undefined;
    // The length of the attachment in bytes.
    size?: number | undefined;
}
export interface CalendarPermission extends Entity {
    /**
     * List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead,
     * limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom.
     */
    allowedRoles?: NullableOption<CalendarRoleType[]> | undefined;
    /**
     * Represents a sharee or delegate who has access to the calendar. For the 'My Organization' sharee, the address property
     * is null. Read-only.
     */
    emailAddress?: NullableOption<EmailAddress> | undefined;
    // True if the user in context (sharee or delegate) is inside the same organization as the calendar owner.
    isInsideOrganization?: NullableOption<boolean> | undefined;
    /**
     * True if the user can be removed from the list of sharees or delegates for the specified calendar, false otherwise. The
     * 'My organization' user determines the permissions other people within your organization have to the given calendar. You
     * cannot remove 'My organization' as a sharee to a calendar.
     */
    isRemovable?: NullableOption<boolean> | undefined;
    // Current permission level of the calendar sharee or delegate.
    role?: NullableOption<CalendarRoleType> | undefined;
}
export interface MultiValueLegacyExtendedProperty extends Entity {
    // A collection of property values.
    value?: NullableOption<string[]> | undefined;
}
export interface SingleValueLegacyExtendedProperty extends Entity {
    // A property value.
    value?: NullableOption<string> | undefined;
}
export interface CalendarSharingMessage extends Message {
    canAccept?: NullableOption<boolean> | undefined;
    sharingMessageAction?: NullableOption<CalendarSharingMessageAction> | undefined;
    sharingMessageActions?: NullableOption<CalendarSharingMessageAction[]> | undefined;
    suggestedCalendarName?: NullableOption<string> | undefined;
}
export interface Post extends OutlookItem {
    // The contents of the post. This is a default property. This property can be null.
    body?: NullableOption<ItemBody> | undefined;
    // Unique ID of the conversation. Read-only.
    conversationId?: NullableOption<string> | undefined;
    // Unique ID of the conversation thread. Read-only.
    conversationThreadId?: NullableOption<string> | undefined;
    /**
     * Used in delegate access scenarios. Indicates who posted the message on behalf of another user. This is a default
     * property.
     */
    from?: Recipient | undefined;
    // Indicates whether the post has at least one attachment. This is a default property.
    hasAttachments?: boolean | undefined;
    // Conversation participants that were added to the thread as part of this post.
    newParticipants?: Recipient[] | undefined;
    /**
     * Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    receivedDateTime?: string | undefined;
    /**
     * Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the
     * case when Sender is not specified. This is a default property.
     */
    sender?: NullableOption<Recipient> | undefined;
    /**
     * The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only.
     * Nullable.
     */
    attachments?: NullableOption<Attachment[]> | undefined;
    // The collection of open extensions defined for the post. Read-only. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
    // The earlier post that this post is replying to in the conversationThread. Read-only.
    inReplyTo?: NullableOption<Post> | undefined;
    // The collection of multi-value extended properties defined for the post. Read-only. Nullable.
    multiValueExtendedProperties?: NullableOption<MultiValueLegacyExtendedProperty[]> | undefined;
    // The collection of single-value extended properties defined for the post. Read-only. Nullable.
    singleValueExtendedProperties?: NullableOption<SingleValueLegacyExtendedProperty[]> | undefined;
}
export interface EventMessage extends Message {
    // The end time of the requested meeting.
    endDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    isAllDay?: NullableOption<boolean> | undefined;
    // True if this meeting request is accessible to a delegate, false otherwise. Default is false.
    isDelegated?: NullableOption<boolean> | undefined;
    isOutOfDate?: NullableOption<boolean> | undefined;
    location?: NullableOption<Location> | undefined;
    /**
     * The type of event message: none, meetingRequest, meetingCancelled, meetingAccepted, meetingTenativelyAccepted,
     * meetingDeclined.
     */
    meetingMessageType?: NullableOption<MeetingMessageType> | undefined;
    recurrence?: NullableOption<PatternedRecurrence> | undefined;
    startDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    type?: NullableOption<EventType> | undefined;
    /**
     * The event associated with the event message. The assumption for attendees or room resources is that the Calendar
     * Attendant is set to automatically update the calendar with an event when meeting request event messages arrive.
     * Navigation property. Read-only.
     */
    event?: NullableOption<Event> | undefined;
}
export interface EventMessageRequest extends EventMessage {
    /**
     * True if the meeting organizer allows invitees to propose a new time when responding, false otherwise. Optional. Default
     * is true.
     */
    allowNewTimeProposals?: NullableOption<boolean> | undefined;
    meetingRequestType?: NullableOption<MeetingRequestType> | undefined;
    // If the meeting update changes the meeting end time, this property specifies the previous meeting end time.
    previousEndDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    // If the meeting update changes the meeting location, this property specifies the previous meeting location.
    previousLocation?: NullableOption<Location> | undefined;
    // If the meeting update changes the meeting start time, this property specifies the previous meeting start time.
    previousStartDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    // Set to true if the sender would like the invitee to send a response to the requested meeting.
    responseRequested?: NullableOption<boolean> | undefined;
}
export interface EventMessageResponse extends EventMessage {
    proposedNewTime?: NullableOption<TimeSlot> | undefined;
    responseType?: NullableOption<ResponseType> | undefined;
}
export interface FileAttachment extends Attachment {
    // The base64-encoded contents of the file.
    contentBytes?: NullableOption<number> | undefined;
    // The ID of the attachment in the Exchange store.
    contentId?: NullableOption<string> | undefined;
    // Do not use this property as it is not supported.
    contentLocation?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface InferenceClassificationOverride extends Entity {
    /**
     * Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused,
     * other.
     */
    classifyAs?: NullableOption<InferenceClassificationType> | undefined;
    // The email address information of the sender for whom the override is created.
    senderEmailAddress?: NullableOption<EmailAddress> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ItemAttachment extends Attachment {
    // The attached contact, message or event. Navigation property.
    item?: NullableOption<OutlookItem> | undefined;
}
export interface MessageRule extends Entity {
    // Actions to be taken on a message when the corresponding conditions are fulfilled.
    actions?: NullableOption<MessageRuleActions> | undefined;
    // Conditions that when fulfilled, will trigger the corresponding actions for that rule.
    conditions?: NullableOption<MessageRulePredicates> | undefined;
    // The display name of the rule.
    displayName?: NullableOption<string> | undefined;
    // Exception conditions for the rule.
    exceptions?: NullableOption<MessageRulePredicates> | undefined;
    // Indicates whether the rule is in an error condition. Read-only.
    hasError?: NullableOption<boolean> | undefined;
    // Indicates whether the rule is enabled to be applied to messages.
    isEnabled?: NullableOption<boolean> | undefined;
    // Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
    isReadOnly?: NullableOption<boolean> | undefined;
    // Indicates the order in which the rule is executed, among other rules.
    sequence?: NullableOption<number> | undefined;
}
export interface MailSearchFolder extends MailFolder {
    // The OData query to filter the messages.
    filterQuery?: NullableOption<string> | undefined;
    /**
     * Indicates how the mailbox folder hierarchy should be traversed in the search. true means that a deep search should be
     * done to include child folders in the hierarchy of each folder explicitly specified in sourceFolderIds. false means a
     * shallow search of only each of the folders explicitly specified in sourceFolderIds.
     */
    includeNestedFolders?: NullableOption<boolean> | undefined;
    // Indicates whether a search folder is editable using REST APIs.
    isSupported?: NullableOption<boolean> | undefined;
    // The mailbox folders that should be mined.
    sourceFolderIds?: NullableOption<string[]> | undefined;
}
export interface OpenTypeExtension extends Extension {
    // A unique text identifier for an open type data extension. Required.
    extensionName?: string | undefined;
}
export interface OutlookCategory extends Entity {
    /**
     * A pre-set color constant that characterizes a category, and that is mapped to one of 25 predefined colors. See the note
     * below.
     */
    color?: NullableOption<CategoryColor> | undefined;
    /**
     * A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be
     * changed. Read-only.
     */
    displayName?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ReferenceAttachment extends Attachment {}
export interface ColumnLink extends Entity {
    // The name of the column in this content type.
    name?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface FieldValueSet extends Entity {}
// tslint:disable-next-line: interface-name
export interface ItemActivity extends Entity {
    // An item was accessed.
    access?: NullableOption<AccessAction> | undefined;
    // Details about when the activity took place. Read-only.
    activityDateTime?: NullableOption<string> | undefined;
    // Identity of who performed the action. Read-only.
    actor?: NullableOption<IdentitySet> | undefined;
    // Exposes the driveItem that was the target of this activity.
    driveItem?: NullableOption<DriveItem> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ItemActivityStat extends Entity {
    // Statistics about the access actions in this interval. Read-only.
    access?: NullableOption<ItemActionStat> | undefined;
    // Statistics about the create actions in this interval. Read-only.
    create?: NullableOption<ItemActionStat> | undefined;
    // Statistics about the delete actions in this interval. Read-only.
    delete?: NullableOption<ItemActionStat> | undefined;
    // Statistics about the edit actions in this interval. Read-only.
    edit?: NullableOption<ItemActionStat> | undefined;
    // When the interval ends. Read-only.
    endDateTime?: NullableOption<string> | undefined;
    // Indicates that the statistics in this interval are based on incomplete data. Read-only.
    incompleteData?: NullableOption<IncompleteData> | undefined;
    // Indicates whether the item is 'trending.' Read-only.
    isTrending?: NullableOption<boolean> | undefined;
    // Statistics about the move actions in this interval. Read-only.
    move?: NullableOption<ItemActionStat> | undefined;
    // When the interval starts. Read-only.
    startDateTime?: NullableOption<string> | undefined;
    // Exposes the itemActivities represented in this itemActivityStat resource.
    activities?: NullableOption<ItemActivity[]> | undefined;
}
export interface ListItemVersion extends BaseItemVersion {
    // A collection of the fields and values for this version of the list item.
    fields?: NullableOption<FieldValueSet> | undefined;
}
export interface SharedDriveItem extends BaseItem {
    // Information about the owner of the shared item being referenced.
    owner?: NullableOption<IdentitySet> | undefined;
    // Used to access the underlying driveItem
    driveItem?: NullableOption<DriveItem> | undefined;
    // All driveItems contained in the sharing root. This collection cannot be enumerated.
    items?: NullableOption<DriveItem[]> | undefined;
    // Used to access the underlying list
    list?: NullableOption<List> | undefined;
    // Used to access the underlying listItem
    listItem?: NullableOption<ListItem> | undefined;
    // Used to access the permission representing the underlying sharing link
    permission?: NullableOption<Permission> | undefined;
    // Used to access the underlying driveItem. Deprecated -- use driveItem instead.
    root?: NullableOption<DriveItem> | undefined;
    // Used to access the underlying site
    site?: NullableOption<Site> | undefined;
}
export interface SchemaExtension extends Entity {
    // Description for the schema extension.
    description?: NullableOption<string> | undefined;
    /**
     * The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to
     * set the owner. If not supplied, then the calling application's appId will be set as the owner. In either case, the
     * signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition
     * using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed.
     */
    owner?: string | undefined;
    // The collection of property names and types that make up the schema extension definition.
    properties?: ExtensionSchemaProperty[] | undefined;
    /**
     * The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated.
     * Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state
     * transitions and behaviors.
     */
    status?: string | undefined;
    /**
     * Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from
     * administrativeUnit, contact, device, event, group, message, organization, post, or user.
     */
    targetTypes?: string[] | undefined;
}
export interface CloudCommunications extends Entity {
    calls?: NullableOption<Call[]> | undefined;
    callRecords?: NullableOption<CallRecords.CallRecord[]> | undefined;
    onlineMeetings?: NullableOption<OnlineMeeting[]> | undefined;
    presences?: NullableOption<Presence[]> | undefined;
}
export interface Call extends Entity {
    // The callback URL on which callbacks will be delivered. Must be https.
    callbackUri?: string | undefined;
    /**
     * A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in a
     * P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     */
    callChainId?: NullableOption<string> | undefined;
    callOptions?: NullableOption<CallOptions> | undefined;
    // The routing information on how the call was retargeted. Read-only.
    callRoutes?: NullableOption<CallRoute[]> | undefined;
    // The chat information. Required information for meeting scenarios.
    chatInfo?: NullableOption<ChatInfo> | undefined;
    // The direction of the call. The possible value are incoming or outgoing. Read-only.
    direction?: NullableOption<CallDirection> | undefined;
    // The context associated with an incoming call. Read-only. Server generated.
    incomingContext?: NullableOption<IncomingContext> | undefined;
    // The media configuration. Required information for creating peer to peer calls or joining meetings.
    mediaConfig?: NullableOption<MediaConfig> | undefined;
    // Read-only. The call media state.
    mediaState?: NullableOption<CallMediaState> | undefined;
    // The meeting information. Required information for meeting scenarios.
    meetingInfo?: NullableOption<MeetingInfo> | undefined;
    myParticipantId?: NullableOption<string> | undefined;
    requestedModalities?: NullableOption<Modality[]> | undefined;
    resultInfo?: NullableOption<ResultInfo> | undefined;
    source?: NullableOption<ParticipantInfo> | undefined;
    state?: NullableOption<CallState> | undefined;
    subject?: NullableOption<string> | undefined;
    targets?: NullableOption<InvitationParticipantInfo[]> | undefined;
    tenantId?: NullableOption<string> | undefined;
    toneInfo?: NullableOption<ToneInfo> | undefined;
    // The transcription information for the call. Read-only.
    transcription?: NullableOption<CallTranscriptionInfo> | undefined;
    // Read-only. Nullable.
    operations?: NullableOption<CommsOperation[]> | undefined;
    // Read-only. Nullable.
    participants?: NullableOption<Participant[]> | undefined;
}
export interface AccessReviewInstance extends Entity {
    /**
     * DateTime when review instance is scheduled to end.The DatetimeOffset type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    endDateTime?: NullableOption<string> | undefined;
    /**
     * Created based on scope and instanceEnumerationScope at the accessReviewScheduleDefinition level. Defines the scope of
     * users reviewed in a group. In the case of a single-group review, the scope defined at the
     * accessReviewScheduleDefinition level applies to all instances. In the case of all groups review, scope may be different
     * for each group. Read-only.
     */
    scope?: NullableOption<AccessReviewScope> | undefined;
    /**
     * DateTime when review instance is scheduled to start. May be in the future. The DateTimeOffset type represents date and
     * time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z.
     */
    startDateTime?: NullableOption<string> | undefined;
    /**
     * Specifies the status of an accessReview. The typical states include Initializing, NotStarted, Starting, InProgress,
     * Completing, Completed, AutoReviewing, and AutoReviewed. Read-only.
     */
    status?: NullableOption<string> | undefined;
    /**
     * Each user reviewed in an accessReviewInstance has a decision item representing if their access was approved, denied, or
     * not yet reviewed.
     */
    decisions?: NullableOption<AccessReviewInstanceDecisionItem[]> | undefined;
}
export interface AccessReviewInstanceDecisionItem extends Entity {
    // The identifier of the accessReviewInstance parent.
    accessReviewId?: string | undefined;
    // The identifier of the user who applied the decision.
    appliedBy?: NullableOption<UserIdentity> | undefined;
    /**
     * The timestamp when the approval decision was applied. The DatetimeOffset type represents date and time information
     * using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    appliedDateTime?: NullableOption<string> | undefined;
    // The result of applying the decision. Possible values: NotApplied, Success, Failed, NotFound, or NotSupported.
    applyResult?: NullableOption<string> | undefined;
    // Result of the review. Possible values: Approve, Deny, NotReviewed, or DontKnow.
    decision?: NullableOption<string> | undefined;
    // The review decision justification.
    justification?: NullableOption<string> | undefined;
    /**
     * Every decision item in an access review represents a principal's access to a resource. This property represents details
     * of the principal. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is
     * 'Bob' and the resource is 'Sales'. Principals can be of two types - userIdentity and servicePrincipalIdentity.
     */
    principal?: NullableOption<Identity> | undefined;
    principalLink?: NullableOption<string> | undefined;
    // A system-generated recommendation for the approval decision. Possible values: Approve, Deny, or NotAvailable.
    recommendation?: NullableOption<string> | undefined;
    /**
     * Every decision item in an access review represents a principal's access to a resource. This property represents details
     * of the resource. For example, if a decision item represents access of User 'Bob' to Group 'Sales' - The principal is
     * Bob and the resource is 'Sales'. Resources can be of multiple types. See accessReviewInstanceDecisionItemResource
     */
    resource?: NullableOption<AccessReviewInstanceDecisionItemResource> | undefined;
    resourceLink?: NullableOption<string> | undefined;
    // The identifier of the reviewer.
    reviewedBy?: NullableOption<UserIdentity> | undefined;
    // The timestamp when the review occurred.
    reviewedDateTime?: NullableOption<string> | undefined;
}
export interface AccessReviewScheduleDefinition extends Entity {
    // User who created this review.
    createdBy?: NullableOption<UserIdentity> | undefined;
    // Timestamp when the access review series was created. Supports $select.
    createdDateTime?: NullableOption<string> | undefined;
    // Description provided by review creators to provide more context of the review to admins. Supports $select.
    descriptionForAdmins?: NullableOption<string> | undefined;
    /**
     * Description provided by review creators to provide more context of the review to reviewers. Reviewers will see this
     * description in the email sent to them requesting their review. Supports $select.
     */
    descriptionForReviewers?: NullableOption<string> | undefined;
    // Name of the access review series. Required on create. Supports $select.
    displayName?: NullableOption<string> | undefined;
    /**
     * This collection of reviewer scopes is used to define the list of fallback reviewers. These fallback reviewers will be
     * notified to take action if no users are found from the list of reviewers specified. This could occur when either the
     * group owner is specified as the reviewer but the group owner does not exist, or manager is specified as reviewer but a
     * user's manager does not exist. Supports $select.
     */
    fallbackReviewers?: NullableOption<AccessReviewReviewerScope[]> | undefined;
    /**
     * This property is required when scoping a review to guest users' access across all Microsoft 365 groups and determines
     * which Microsoft 365 groups are reviewed. Each group will become a unique accessReviewInstance of the access review
     * series. For supported scopes, see accessReviewScope. Supports $select. For examples of options for configuring
     * instanceEnumerationScope, see Configure the scope of your access review definition using the Microsoft Graph API.
     */
    instanceEnumerationScope?: NullableOption<AccessReviewScope> | undefined;
    // Timestamp when the access review series was last modified. Supports $select.
    lastModifiedDateTime?: NullableOption<string> | undefined;
    /**
     * This collection of access review scopes is used to define who are the reviewers. Required on create. Supports $select.
     * For examples of options for assigning reviewers, see Assign reviewers to your access review definition using the
     * Microsoft Graph API.
     */
    reviewers?: NullableOption<AccessReviewReviewerScope[]> | undefined;
    /**
     * Defines scope of resources to review. For supported scopes, see accessReviewScope. Required on create. Supports $select
     * and $filter (contains only). For examples of options for configuring scope, see Configure the scope of your access
     * review definition using the Microsoft Graph API.
     */
    scope?: NullableOption<AccessReviewScope> | undefined;
    // The settings for an access review series, see type definition below. Supports $select.
    settings?: NullableOption<AccessReviewScheduleSettings> | undefined;
    /**
     * This read-only field specifies the status of an access review. The typical states include Initializing, NotStarted,
     * Starting, InProgress, Completing, Completed, AutoReviewing, and AutoReviewed. Supports $select, $orderby, and $filter
     * (eq only).
     */
    status?: NullableOption<string> | undefined;
    /**
     * Set of access reviews instances for this access review series. Access reviews that do not recur will only have one
     * instance; otherwise, there is an instance for each recurrence.
     */
    instances?: NullableOption<AccessReviewInstance[]> | undefined;
}
export interface AccessReviewSet extends Entity {
    definitions?: NullableOption<AccessReviewScheduleDefinition[]> | undefined;
}
export interface AppConsentApprovalRoute extends Entity {
    appConsentRequests?: NullableOption<AppConsentRequest[]> | undefined;
}
export interface AppConsentRequest extends Entity {
    // The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby.
    appDisplayName?: NullableOption<string> | undefined;
    // The identifier of the application. Required. Supports $filter (eq only) and $orderby.
    appId?: string | undefined;
    // A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required.
    pendingScopes?: NullableOption<AppConsentRequestScope[]> | undefined;
    // A list of pending user consent requests.
    userConsentRequests?: NullableOption<UserConsentRequest[]> | undefined;
}
export interface Request extends Entity {
    approvalId?: NullableOption<string> | undefined;
    completedDateTime?: NullableOption<string> | undefined;
    createdBy?: NullableOption<IdentitySet> | undefined;
    createdDateTime?: NullableOption<string> | undefined;
    customData?: NullableOption<string> | undefined;
    status?: string | undefined;
}
export interface UserConsentRequest extends Request {
    // The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby.
    reason?: NullableOption<string> | undefined;
    // Approval decisions associated with a request.
    approval?: NullableOption<Approval> | undefined;
}
export interface Approval extends Entity {
    /**
     * Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package
     * assignment policy. Specifies the primary, fallback, and escalation approvers of each stage.
     */
    stages?: NullableOption<ApprovalStage[]> | undefined;
}
export interface ApprovalStage extends Entity {
    // Indicates whether the stage is assigned to the calling user to review. Read-only.
    assignedToMe?: NullableOption<boolean> | undefined;
    // The label provided by the policy creator to identify an approval stage. Read-only.
    displayName?: NullableOption<string> | undefined;
    // The justification associated with the approval stage decision.
    justification?: NullableOption<string> | undefined;
    // The identifier of the reviewer. Read-only.
    reviewedBy?: NullableOption<Identity> | undefined;
    /**
     * The date and time when a decision was recorded. The date and time information uses ISO 8601 format and is always in UTC
     * time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    reviewedDateTime?: NullableOption<string> | undefined;
    // The result of this approval record. Possible values include: NotReviewed, Approved, Denied.
    reviewResult?: NullableOption<string> | undefined;
    // The stage status. Possible values: InProgress, Initializing, Completed, Expired. Read-only.
    status?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentityGovernance {
    accessReviews?: NullableOption<AccessReviewSet> | undefined;
    appConsent?: NullableOption<AppConsentApprovalRoute> | undefined;
    termsOfUse?: NullableOption<TermsOfUseContainer> | undefined;
}
export interface TermsOfUseContainer extends Entity {
    agreementAcceptances?: NullableOption<AgreementAcceptance[]> | undefined;
    agreements?: NullableOption<Agreement[]> | undefined;
}
export interface Agreement extends Entity {
    /**
     * Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end
     * users who view the agreement.
     */
    displayName?: NullableOption<string> | undefined;
    /**
     * This setting enables you to require end users to accept this agreement on every device that they are accessing it from.
     * The end user will be required to register their device in Azure AD, if they haven't already done so.
     */
    isPerDeviceAcceptanceRequired?: NullableOption<boolean> | undefined;
    // Indicates whether the user has to expand the agreement before accepting.
    isViewingBeforeAcceptanceRequired?: NullableOption<boolean> | undefined;
    // Expiration schedule and frequency of agreement for all users.
    termsExpiration?: NullableOption<TermsExpiration> | undefined;
    /**
     * The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for
     * durations.
     */
    userReacceptRequiredFrequency?: NullableOption<string> | undefined;
    // Read-only. Information about acceptances of this agreement.
    acceptances?: NullableOption<AgreementAcceptance[]> | undefined;
    // Default PDF linked to this agreement.
    file?: NullableOption<AgreementFile> | undefined;
    /**
     * PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the file property
     * instead.
     */
    files?: NullableOption<AgreementFileLocalization[]> | undefined;
}
export interface AgreementFileProperties extends Entity {
    createdDateTime?: NullableOption<string> | undefined;
    displayName?: NullableOption<string> | undefined;
    fileData?: NullableOption<AgreementFileData> | undefined;
    fileName?: NullableOption<string> | undefined;
    isDefault?: NullableOption<boolean> | undefined;
    isMajorVersion?: NullableOption<boolean> | undefined;
    language?: NullableOption<string> | undefined;
}
export interface AgreementFile extends AgreementFileProperties {
    localizations?: NullableOption<AgreementFileLocalization[]> | undefined;
}
export interface AgreementFileLocalization extends AgreementFileProperties {
    versions?: NullableOption<AgreementFileVersion[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface AgreementFileVersion extends AgreementFileProperties {}
export interface NamedLocation extends Entity {
    /**
     * The Timestamp type represents creation date and time of the location using ISO 8601 format and is always in UTC time.
     * For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // Human-readable name of the location.
    displayName?: string | undefined;
    /**
     * The Timestamp type represents last modified date and time of the location using ISO 8601 format and is always in UTC
     * time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    modifiedDateTime?: NullableOption<string> | undefined;
}
export interface CountryNamedLocation extends NamedLocation {
    // List of countries and/or regions in two-letter format specified by ISO 3166-2.
    countriesAndRegions?: string[] | undefined;
    // True if IP addresses that don't map to a country or region should be included in the named location.
    includeUnknownCountriesAndRegions?: boolean | undefined;
}
// tslint:disable-next-line: interface-name
export interface IpNamedLocation extends NamedLocation {
    // List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596.
    ipRanges?: IpRange[] | undefined;
    // True if this location is explicitly trusted.
    isTrusted?: boolean | undefined;
}
export interface MobileApp extends Entity {
    // The date and time the app was created.
    createdDateTime?: string | undefined;
    // The description of the app.
    description?: NullableOption<string> | undefined;
    // The developer of the app.
    developer?: NullableOption<string> | undefined;
    // The admin provided or imported title of the app.
    displayName?: NullableOption<string> | undefined;
    // The more information Url.
    informationUrl?: NullableOption<string> | undefined;
    // The value indicating whether the app is marked as featured by the admin.
    isFeatured?: boolean | undefined;
    // The large icon, to be displayed in the app details and used for upload of the icon.
    largeIcon?: NullableOption<MimeContent> | undefined;
    // The date and time the app was last modified.
    lastModifiedDateTime?: string | undefined;
    // Notes for the app.
    notes?: NullableOption<string> | undefined;
    // The owner of the app.
    owner?: NullableOption<string> | undefined;
    // The privacy statement Url.
    privacyInformationUrl?: NullableOption<string> | undefined;
    // The publisher of the app.
    publisher?: NullableOption<string> | undefined;
    /**
     * The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are:
     * notPublished, processing, published.
     */
    publishingState?: MobileAppPublishingState | undefined;
    // The list of group assignments for this mobile app.
    assignments?: NullableOption<MobileAppAssignment[]> | undefined;
    // The list of categories for this app.
    categories?: NullableOption<MobileAppCategory[]> | undefined;
}
export interface MobileLobApp extends MobileApp {
    // The internal committed content version.
    committedContentVersion?: NullableOption<string> | undefined;
    // The name of the main Lob application file.
    fileName?: NullableOption<string> | undefined;
    // The total size, including all uploaded files.
    size?: number | undefined;
    // The list of content versions for this app.
    contentVersions?: NullableOption<MobileAppContent[]> | undefined;
}
export interface AndroidLobApp extends MobileLobApp {
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: NullableOption<AndroidMinimumOperatingSystem> | undefined;
    // The package identifier.
    packageId?: NullableOption<string> | undefined;
    // The version code of Android Line of Business (LoB) app.
    versionCode?: NullableOption<string> | undefined;
    // The version name of Android Line of Business (LoB) app.
    versionName?: NullableOption<string> | undefined;
}
export interface AndroidStoreApp extends MobileApp {
    // The Android app store URL.
    appStoreUrl?: NullableOption<string> | undefined;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: NullableOption<AndroidMinimumOperatingSystem> | undefined;
    // The package identifier.
    packageId?: NullableOption<string> | undefined;
}
export interface DeviceAppManagement extends Entity {
    // Whether the account is enabled for syncing applications from the Microsoft Store for Business.
    isEnabledForMicrosoftStoreForBusiness?: boolean | undefined;
    /**
     * The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a
     * country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is
     * -&amp;lt;country/regioncode2&amp;gt;, where is a lowercase two-letter code derived from ISO 639-1 and
     * &amp;lt;country/regioncode2&amp;gt; is an uppercase two-letter code derived from ISO 3166. For example, en-US for
     * English (United States) is a specific culture.
     */
    microsoftStoreForBusinessLanguage?: NullableOption<string> | undefined;
    // The last time an application sync from the Microsoft Store for Business was completed.
    microsoftStoreForBusinessLastCompletedApplicationSyncTime?: string | undefined;
    // The last time the apps from the Microsoft Store for Business were synced successfully for the account.
    microsoftStoreForBusinessLastSuccessfulSyncDateTime?: string | undefined;
    // The Managed eBook.
    managedEBooks?: NullableOption<ManagedEBook[]> | undefined;
    // The mobile app categories.
    mobileAppCategories?: NullableOption<MobileAppCategory[]> | undefined;
    // The Managed Device Mobile Application Configurations.
    mobileAppConfigurations?: NullableOption<ManagedDeviceMobileAppConfiguration[]> | undefined;
    // The mobile apps.
    mobileApps?: NullableOption<MobileApp[]> | undefined;
    // List of Vpp tokens for this organization.
    vppTokens?: NullableOption<VppToken[]> | undefined;
    // Android managed app policies.
    androidManagedAppProtections?: NullableOption<AndroidManagedAppProtection[]> | undefined;
    // Default managed app policies.
    defaultManagedAppProtections?: NullableOption<DefaultManagedAppProtection[]> | undefined;
    // iOS managed app policies.
    iosManagedAppProtections?: NullableOption<IosManagedAppProtection[]> | undefined;
    // Managed app policies.
    managedAppPolicies?: NullableOption<ManagedAppPolicy[]> | undefined;
    // The managed app registrations.
    managedAppRegistrations?: NullableOption<ManagedAppRegistration[]> | undefined;
    // The managed app statuses.
    managedAppStatuses?: NullableOption<ManagedAppStatus[]> | undefined;
    // Windows information protection for apps running on devices which are MDM enrolled.
    mdmWindowsInformationProtectionPolicies?: NullableOption<MdmWindowsInformationProtectionPolicy[]> | undefined;
    // Targeted managed app configurations.
    targetedManagedAppConfigurations?: NullableOption<TargetedManagedAppConfiguration[]> | undefined;
    // Windows information protection for apps running on devices which are not MDM enrolled.
    windowsInformationProtectionPolicies?: NullableOption<WindowsInformationProtectionPolicy[]> | undefined;
}
export interface ManagedEBook extends Entity {
    // The date and time when the eBook file was created.
    createdDateTime?: string | undefined;
    // Description.
    description?: NullableOption<string> | undefined;
    // Name of the eBook.
    displayName?: string | undefined;
    // The more information Url.
    informationUrl?: NullableOption<string> | undefined;
    // Book cover.
    largeCover?: NullableOption<MimeContent> | undefined;
    // The date and time when the eBook was last modified.
    lastModifiedDateTime?: string | undefined;
    // The privacy statement Url.
    privacyInformationUrl?: NullableOption<string> | undefined;
    // The date and time when the eBook was published.
    publishedDateTime?: string | undefined;
    // Publisher.
    publisher?: NullableOption<string> | undefined;
    // The list of assignments for this eBook.
    assignments?: NullableOption<ManagedEBookAssignment[]> | undefined;
    // The list of installation states for this eBook.
    deviceStates?: NullableOption<DeviceInstallState[]> | undefined;
    // Mobile App Install Summary.
    installSummary?: NullableOption<EBookInstallSummary> | undefined;
    // The list of installation states for this eBook.
    userStateSummary?: NullableOption<UserInstallStateSummary[]> | undefined;
}
export interface MobileAppCategory extends Entity {
    // The name of the app category.
    displayName?: NullableOption<string> | undefined;
    // The date and time the mobileAppCategory was last modified.
    lastModifiedDateTime?: string | undefined;
}
export interface ManagedDeviceMobileAppConfiguration extends Entity {
    // DateTime the object was created.
    createdDateTime?: string | undefined;
    // Admin provided description of the Device Configuration.
    description?: NullableOption<string> | undefined;
    // Admin provided name of the device configuration.
    displayName?: string | undefined;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string | undefined;
    // the associated app.
    targetedMobileApps?: NullableOption<string[]> | undefined;
    // Version of the device configuration.
    version?: number | undefined;
    // The list of group assignemenets for app configration.
    assignments?: NullableOption<ManagedDeviceMobileAppConfigurationAssignment[]> | undefined;
    // List of ManagedDeviceMobileAppConfigurationDeviceStatus.
    deviceStatuses?: NullableOption<ManagedDeviceMobileAppConfigurationDeviceStatus[]> | undefined;
    // App configuration device status summary.
    deviceStatusSummary?: NullableOption<ManagedDeviceMobileAppConfigurationDeviceSummary> | undefined;
    // List of ManagedDeviceMobileAppConfigurationUserStatus.
    userStatuses?: NullableOption<ManagedDeviceMobileAppConfigurationUserStatus[]> | undefined;
    // App configuration user status summary.
    userStatusSummary?: NullableOption<ManagedDeviceMobileAppConfigurationUserSummary> | undefined;
}
export interface VppToken extends Entity {
    // The apple Id associated with the given Apple Volume Purchase Program Token.
    appleId?: NullableOption<string> | undefined;
    // Whether or not apps for the VPP token will be automatically updated.
    automaticallyUpdateApps?: boolean | undefined;
    // Whether or not apps for the VPP token will be automatically updated.
    countryOrRegion?: NullableOption<string> | undefined;
    // The expiration date time of the Apple Volume Purchase Program Token.
    expirationDateTime?: string | undefined;
    // Last modification date time associated with the Apple Volume Purchase Program Token.
    lastModifiedDateTime?: string | undefined;
    /**
     * The last time when an application sync was done with the Apple volume purchase program service using the the Apple
     * Volume Purchase Program Token.
     */
    lastSyncDateTime?: string | undefined;
    /**
     * Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token.
     * Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed.
     */
    lastSyncStatus?: VppTokenSyncStatus | undefined;
    // The organization associated with the Apple Volume Purchase Program Token
    organizationName?: NullableOption<string> | undefined;
    /**
     * Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid,
     * assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM,
     * duplicateLocationId.
     */
    state?: VppTokenState | undefined;
    // The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program.
    token?: NullableOption<string> | undefined;
    /**
     * The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible
     * values are: business, education. Possible values are: business, education.
     */
    vppTokenAccountType?: VppTokenAccountType | undefined;
}
export interface ManagedAppPolicy extends Entity {
    // The date and time the policy was created.
    createdDateTime?: string | undefined;
    // The policy's description.
    description?: NullableOption<string> | undefined;
    // Policy display name.
    displayName?: string | undefined;
    // Last time the policy was modified.
    lastModifiedDateTime?: string | undefined;
    // Version of the entity.
    version?: NullableOption<string> | undefined;
}
export interface ManagedAppProtection extends ManagedAppPolicy {
    // Data storage locations where a user may store managed data.
    allowedDataStorageLocations?: ManagedAppDataStorageLocation[] | undefined;
    // Sources from which data is allowed to be transferred. Possible values are: allApps, managedApps, none.
    allowedInboundDataTransferSources?: ManagedAppDataTransferLevel | undefined;
    /**
     * The level to which the clipboard may be shared between apps on the managed device. Possible values are: allApps,
     * managedAppsWithPasteIn, managedApps, blocked.
     */
    allowedOutboundClipboardSharingLevel?: ManagedAppClipboardSharingLevel | undefined;
    // Destinations to which data is allowed to be transferred. Possible values are: allApps, managedApps, none.
    allowedOutboundDataTransferDestinations?: ManagedAppDataTransferLevel | undefined;
    // Indicates whether contacts can be synced to the user's device.
    contactSyncBlocked?: boolean | undefined;
    // Indicates whether the backup of a managed app's data is blocked.
    dataBackupBlocked?: boolean | undefined;
    // Indicates whether device compliance is required.
    deviceComplianceRequired?: boolean | undefined;
    // Indicates whether use of the app pin is required if the device pin is set.
    disableAppPinIfDevicePinIsSet?: boolean | undefined;
    // Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True.
    fingerprintBlocked?: boolean | undefined;
    /**
     * Indicates in which managed browser(s) that internet links should be opened. When this property is configured,
     * ManagedBrowserToOpenLinksRequired should be true. Possible values are: notConfigured, microsoftEdge.
     */
    managedBrowser?: ManagedBrowserType | undefined;
    /**
     * Indicates whether internet links should be opened in the managed browser app, or any custom browser specified by
     * CustomBrowserProtocol (for iOS) or CustomBrowserPackageId/CustomBrowserDisplayName (for Android)
     */
    managedBrowserToOpenLinksRequired?: boolean | undefined;
    // Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped.
    maximumPinRetries?: number | undefined;
    // Minimum pin length required for an app-level pin if PinRequired is set to True
    minimumPinLength?: number | undefined;
    // Versions less than the specified version will block the managed app from accessing company data.
    minimumRequiredAppVersion?: NullableOption<string> | undefined;
    // Versions less than the specified version will block the managed app from accessing company data.
    minimumRequiredOsVersion?: NullableOption<string> | undefined;
    // Versions less than the specified version will result in warning message on the managed app.
    minimumWarningAppVersion?: NullableOption<string> | undefined;
    // Versions less than the specified version will result in warning message on the managed app from accessing company data.
    minimumWarningOsVersion?: NullableOption<string> | undefined;
    // Indicates whether organizational credentials are required for app use.
    organizationalCredentialsRequired?: boolean | undefined;
    // TimePeriod before the all-level pin must be reset if PinRequired is set to True.
    periodBeforePinReset?: string | undefined;
    // The period after which access is checked when the device is not connected to the internet.
    periodOfflineBeforeAccessCheck?: string | undefined;
    // The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped.
    periodOfflineBeforeWipeIsEnforced?: string | undefined;
    // The period after which access is checked when the device is connected to the internet.
    periodOnlineBeforeAccessCheck?: string | undefined;
    /**
     * Character set which may be used for an app-level pin if PinRequired is set to True. Possible values are: numeric,
     * alphanumericAndSymbol.
     */
    pinCharacterSet?: ManagedAppPinCharacterSet | undefined;
    // Indicates whether an app-level pin is required.
    pinRequired?: boolean | undefined;
    // Indicates whether printing is allowed from managed apps.
    printBlocked?: boolean | undefined;
    // Indicates whether users may use the 'Save As' menu item to save a copy of protected files.
    saveAsBlocked?: boolean | undefined;
    // Indicates whether simplePin is blocked.
    simplePinBlocked?: boolean | undefined;
}
export interface TargetedManagedAppProtection extends ManagedAppProtection {
    // Indicates if the policy is deployed to any inclusion groups or not.
    isAssigned?: boolean | undefined;
    // Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
    assignments?: NullableOption<TargetedManagedAppPolicyAssignment[]> | undefined;
}
export interface AndroidManagedAppProtection extends TargetedManagedAppProtection {
    // Friendly name of the preferred custom browser to open weblink on Android.
    customBrowserDisplayName?: NullableOption<string> | undefined;
    // Unique identifier of a custom browser to open weblink on Android.
    customBrowserPackageId?: NullableOption<string> | undefined;
    // Count of apps to which the current policy is deployed.
    deployedAppCount?: number | undefined;
    // When this setting is enabled, app level encryption is disabled if device level encryption is enabled
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    // Indicates whether application data for managed apps should be encrypted
    encryptAppData?: boolean | undefined;
    // Define the oldest required Android security patch level a user can have to gain secure access to the app.
    minimumRequiredPatchVersion?: NullableOption<string> | undefined;
    // Define the oldest recommended Android security patch level a user can have for secure access to the app.
    minimumWarningPatchVersion?: NullableOption<string> | undefined;
    // Indicates whether a managed user can take screen captures of managed apps
    screenCaptureBlocked?: boolean | undefined;
    // List of apps to which the policy is deployed.
    apps?: NullableOption<ManagedMobileApp[]> | undefined;
    // Navigation property to deployment summary of the configuration.
    deploymentSummary?: NullableOption<ManagedAppPolicyDeploymentSummary> | undefined;
}
export interface DefaultManagedAppProtection extends ManagedAppProtection {
    /**
     * Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings,
     * afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     */
    appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    // A set of string key and string value pairs to be sent to the affected users, unalterned by this service
    customSettings?: KeyValuePair[] | undefined;
    // Count of apps to which the current policy is deployed.
    deployedAppCount?: number | undefined;
    // When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean | undefined;
    // Indicates whether managed-app data should be encrypted. (Android only)
    encryptAppData?: boolean | undefined;
    // Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
    faceIdBlocked?: boolean | undefined;
    /**
     * Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android
     * only)
     */
    minimumRequiredPatchVersion?: NullableOption<string> | undefined;
    // Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
    minimumRequiredSdkVersion?: NullableOption<string> | undefined;
    // Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
    minimumWarningPatchVersion?: NullableOption<string> | undefined;
    // Indicates whether screen capture is blocked. (Android only)
    screenCaptureBlocked?: boolean | undefined;
    // List of apps to which the policy is deployed.
    apps?: NullableOption<ManagedMobileApp[]> | undefined;
    // Navigation property to deployment summary of the configuration.
    deploymentSummary?: NullableOption<ManagedAppPolicyDeploymentSummary> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosManagedAppProtection extends TargetedManagedAppProtection {
    /**
     * Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings,
     * afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     */
    appDataEncryptionType?: ManagedAppDataEncryptionType | undefined;
    // A custom browser protocol to open weblink on iOS.
    customBrowserProtocol?: NullableOption<string> | undefined;
    // Count of apps to which the current policy is deployed.
    deployedAppCount?: number | undefined;
    // Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
    faceIdBlocked?: boolean | undefined;
    // Versions less than the specified version will block the managed app from accessing company data.
    minimumRequiredSdkVersion?: NullableOption<string> | undefined;
    // List of apps to which the policy is deployed.
    apps?: NullableOption<ManagedMobileApp[]> | undefined;
    // Navigation property to deployment summary of the configuration.
    deploymentSummary?: NullableOption<ManagedAppPolicyDeploymentSummary> | undefined;
}
export interface ManagedAppStatus extends Entity {
    // Friendly name of the status report.
    displayName?: NullableOption<string> | undefined;
    // Version of the entity.
    version?: NullableOption<string> | undefined;
}
export interface WindowsInformationProtection extends ManagedAppPolicy {
    // Specifies whether to allow Azure RMS encryption for WIP
    azureRightsManagementServicesAllowed?: boolean | undefined;
    /**
     * Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data
     * recovery agent(DRA) certificate for encrypting file system(EFS)
     */
    dataRecoveryCertificate?: NullableOption<WindowsInformationProtectionDataRecoveryCertificate> | undefined;
    /**
     * WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection,
     * encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.
     */
    enforcementLevel?: WindowsInformationProtectionEnforcementLevel | undefined;
    // Primary enterprise domain
    enterpriseDomain?: NullableOption<string> | undefined;
    /**
     * This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167,
     * 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the
     * Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the
     * EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
     */
    enterpriseInternalProxyServers?: NullableOption<WindowsInformationProtectionResourceCollection[]> | undefined;
    /**
     * Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers
     * will be considered part of the enterprise and protected. These locations will be considered a safe destination for
     * enterprise data to be shared to
     */
    enterpriseIPRanges?: NullableOption<WindowsInformationProtectionIPRangeCollection[]> | undefined;
    /**
     * Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other
     * subnets. Default is false
     */
    enterpriseIPRangesAreAuthoritative?: boolean | undefined;
    /**
     * This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent
     * to a device will be considered enterprise data and protected These locations will be considered a safe destination for
     * enterprise data to be shared to
     */
    enterpriseNetworkDomainNames?: NullableOption<WindowsInformationProtectionResourceCollection[]> | undefined;
    // List of enterprise domains to be protected
    enterpriseProtectedDomainNames?: NullableOption<WindowsInformationProtectionResourceCollection[]> | undefined;
    /**
     * Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these
     * resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource
     * will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this
     * purpose must also be configured using the EnterpriseInternalProxyServers policy
     */
    enterpriseProxiedDomains?: NullableOption<WindowsInformationProtectionProxiedDomainCollection[]> | undefined;
    // This is a list of proxy servers. Any server not on this list is considered non-enterprise
    enterpriseProxyServers?: NullableOption<WindowsInformationProtectionResourceCollection[]> | undefined;
    /**
     * Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies.
     * Default is false
     */
    enterpriseProxyServersAreAuthoritative?: boolean | undefined;
    /**
     * Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This
     * is because some critical enterprise applications may have compatibility problems with encrypted data.
     */
    exemptApps?: NullableOption<WindowsInformationProtectionApp[]> | undefined;
    /**
     * Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the
     * Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the
     * title bar of a WIP-protected app
     */
    iconsVisible?: boolean | undefined;
    // This switch is for the Windows Search Indexer, to allow or disallow indexing of items
    indexingEncryptedStoresOrItemsBlocked?: boolean | undefined;
    // Indicates if the policy is deployed to any inclusion groups or not.
    isAssigned?: boolean | undefined;
    // List of domain names that can used for work or personal resource
    neutralDomainResources?: NullableOption<WindowsInformationProtectionResourceCollection[]> | undefined;
    /**
     * Protected applications can access enterprise data and the data handled by those applications are protected with
     * encryption
     */
    protectedApps?: NullableOption<WindowsInformationProtectionApp[]> | undefined;
    // Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
    protectionUnderLockConfigRequired?: boolean | undefined;
    /**
     * This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1
     * (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after
     * unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
     */
    revokeOnUnenrollDisabled?: boolean | undefined;
    /**
     * TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has
     * access to RMS-protected file and how long they have access
     */
    rightsManagementServicesTemplateId?: NullableOption<string> | undefined;
    /**
     * Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share
     * within the corporate boundary
     */
    smbAutoEncryptedFileExtensions?: NullableOption<WindowsInformationProtectionResourceCollection[]> | undefined;
    // Navigation property to list of security groups targeted for policy.
    assignments?: NullableOption<TargetedManagedAppPolicyAssignment[]> | undefined;
    // Another way to input exempt apps through xml files
    exemptAppLockerFiles?: NullableOption<WindowsInformationProtectionAppLockerFile[]> | undefined;
    // Another way to input protected apps through xml files
    protectedAppLockerFiles?: NullableOption<WindowsInformationProtectionAppLockerFile[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface MdmWindowsInformationProtectionPolicy extends WindowsInformationProtection {}
export interface ManagedAppConfiguration extends ManagedAppPolicy {
    /**
     * A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned
     * by this service
     */
    customSettings?: KeyValuePair[] | undefined;
}
export interface TargetedManagedAppConfiguration extends ManagedAppConfiguration {
    // Count of apps to which the current policy is deployed.
    deployedAppCount?: number | undefined;
    // Indicates if the policy is deployed to any inclusion groups or not.
    isAssigned?: boolean | undefined;
    // List of apps to which the policy is deployed.
    apps?: NullableOption<ManagedMobileApp[]> | undefined;
    // Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
    assignments?: NullableOption<TargetedManagedAppPolicyAssignment[]> | undefined;
    // Navigation property to deployment summary of the configuration.
    deploymentSummary?: NullableOption<ManagedAppPolicyDeploymentSummary> | undefined;
}
export interface WindowsInformationProtectionPolicy extends WindowsInformationProtection {
    // Offline interval before app data is wiped (days)
    daysWithoutContactBeforeUnenroll?: number | undefined;
    // Enrollment url for the MDM
    mdmEnrollmentUrl?: NullableOption<string> | undefined;
    /**
     * Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become
     * PIN or password locked. Range is an integer X where 0 &amp;lt;= X &amp;lt;= 999.
     */
    minutesOfInactivityBeforeDeviceLock?: number | undefined;
    /**
     * Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The
     * largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy
     * setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows
     * 10, version 1511. Default is 0.
     */
    numberOfPastPinsRemembered?: number | undefined;
    /**
     * The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe
     * functionality. Range is an integer X where 4 &amp;lt;= X &amp;lt;= 16 for desktop and 0 &amp;lt;= X &amp;lt;= 999 for
     * mobile devices.
     */
    passwordMaximumAttemptCount?: number | undefined;
    /**
     * Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to
     * change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for
     * this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in
     * Windows 10, version 1511. Default is 0.
     */
    pinExpirationDays?: number | undefined;
    /**
     * Integer value that configures the use of lowercase letters in the Windows Hello for Business PIN. Default is NotAllow.
     * Possible values are: notAllow, requireAtLeastOne, allow.
     */
    pinLowercaseLetters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /**
     * Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number
     * you can configure for this policy setting is 4. The largest number you can configure must be less than the number
     * configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest.
     */
    pinMinimumLength?: number | undefined;
    /**
     * Integer value that configures the use of special characters in the Windows Hello for Business PIN. Valid special
     * characters for Windows Hello for Business PIN gestures include: ! ' # $ % &amp; ' ( ) + , - . / : ; &amp;lt; = &amp;gt;
     * ? @ [ / ] ^ ` {
     */
    pinSpecialCharacters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    /**
     * Integer value that configures the use of uppercase letters in the Windows Hello for Business PIN. Default is NotAllow.
     * Possible values are: notAllow, requireAtLeastOne, allow.
     */
    pinUppercaseLetters?: WindowsInformationProtectionPinCharacterRequirements | undefined;
    // New property in RS2, pending documentation
    revokeOnMdmHandoffDisabled?: boolean | undefined;
    // Boolean value that sets Windows Hello for Business as a method for signing into Windows.
    windowsHelloForBusinessBlocked?: boolean | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosLobApp extends MobileLobApp {
    // The iOS architecture for which this app can run on.
    applicableDeviceType?: IosDeviceType | undefined;
    // The build number of iOS Line of Business (LoB) app.
    buildNumber?: NullableOption<string> | undefined;
    // The Identity Name.
    bundleId?: NullableOption<string> | undefined;
    // The expiration time.
    expirationDateTime?: NullableOption<string> | undefined;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: NullableOption<IosMinimumOperatingSystem> | undefined;
    // The version number of iOS Line of Business (LoB) app.
    versionNumber?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosMobileAppConfiguration extends ManagedDeviceMobileAppConfiguration {
    // mdm app configuration Base64 binary.
    encodedSettingXml?: NullableOption<number> | undefined;
    // app configuration setting items.
    settings?: NullableOption<AppConfigurationSettingItem[]> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosStoreApp extends MobileApp {
    // The iOS architecture for which this app can run on.
    applicableDeviceType?: IosDeviceType | undefined;
    // The Apple App Store URL
    appStoreUrl?: NullableOption<string> | undefined;
    // The Identity Name.
    bundleId?: NullableOption<string> | undefined;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: NullableOption<IosMinimumOperatingSystem> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosVppApp extends MobileApp {
    // The applicable iOS Device Type.
    applicableDeviceType?: NullableOption<IosDeviceType> | undefined;
    // The store URL.
    appStoreUrl?: NullableOption<string> | undefined;
    // The Identity Name.
    bundleId?: NullableOption<string> | undefined;
    // The supported License Type.
    licensingType?: NullableOption<VppLicensingType> | undefined;
    // The VPP application release date and time.
    releaseDateTime?: NullableOption<string> | undefined;
    // The total number of VPP licenses.
    totalLicenseCount?: number | undefined;
    // The number of VPP licenses in use.
    usedLicenseCount?: number | undefined;
    /**
     * The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible
     * values are: business, education. Possible values are: business, education.
     */
    vppTokenAccountType?: VppTokenAccountType | undefined;
    // The Apple Id associated with the given Apple Volume Purchase Program Token.
    vppTokenAppleId?: NullableOption<string> | undefined;
    // The organization associated with the Apple Volume Purchase Program Token
    vppTokenOrganizationName?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface MacOSOfficeSuiteApp extends MobileApp {}
export interface ManagedApp extends MobileApp {
    // The Application's availability. Possible values are: global, lineOfBusiness.
    appAvailability?: ManagedAppAvailability | undefined;
    // The Application's version.
    version?: NullableOption<string> | undefined;
}
export interface ManagedMobileLobApp extends ManagedApp {
    // The internal committed content version.
    committedContentVersion?: NullableOption<string> | undefined;
    // The name of the main Lob application file.
    fileName?: NullableOption<string> | undefined;
    // The total size, including all uploaded files.
    size?: number | undefined;
    // The list of content versions for this app.
    contentVersions?: NullableOption<MobileAppContent[]> | undefined;
}
export interface ManagedAndroidLobApp extends ManagedMobileLobApp {
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: NullableOption<AndroidMinimumOperatingSystem> | undefined;
    // The package identifier.
    packageId?: NullableOption<string> | undefined;
    // The version code of managed Android Line of Business (LoB) app.
    versionCode?: NullableOption<string> | undefined;
    // The version name of managed Android Line of Business (LoB) app.
    versionName?: NullableOption<string> | undefined;
}
export interface ManagedAndroidStoreApp extends ManagedApp {
    // The Android AppStoreUrl.
    appStoreUrl?: string | undefined;
    // The value for the minimum supported operating system.
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    // The app's package ID.
    packageId?: NullableOption<string> | undefined;
}
export interface ManagedDeviceMobileAppConfigurationAssignment extends Entity {
    // Assignment target that the T&amp;C policy is assigned to.
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
export interface ManagedDeviceMobileAppConfigurationDeviceStatus extends Entity {
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string | undefined;
    // Device name of the DevicePolicyStatus.
    deviceDisplayName?: NullableOption<string> | undefined;
    // The device model that is being reported
    deviceModel?: NullableOption<string> | undefined;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string | undefined;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus | undefined;
    // The User Name that is being reported
    userName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface ManagedDeviceMobileAppConfigurationDeviceSummary extends Entity {
    // Version of the policy for that overview
    configurationVersion?: number | undefined;
    // Number of error devices
    errorCount?: number | undefined;
    // Number of failed devices
    failedCount?: number | undefined;
    // Last update time
    lastUpdateDateTime?: string | undefined;
    // Number of not applicable devices
    notApplicableCount?: number | undefined;
    // Number of pending devices
    pendingCount?: number | undefined;
    // Number of succeeded devices
    successCount?: number | undefined;
}
export interface ManagedDeviceMobileAppConfigurationUserStatus extends Entity {
    // Devices count for that user.
    devicesCount?: number | undefined;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string | undefined;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus | undefined;
    // User name of the DevicePolicyStatus.
    userDisplayName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface ManagedDeviceMobileAppConfigurationUserSummary extends Entity {
    // Version of the policy for that overview
    configurationVersion?: number | undefined;
    // Number of error Users
    errorCount?: number | undefined;
    // Number of failed Users
    failedCount?: number | undefined;
    // Last update time
    lastUpdateDateTime?: string | undefined;
    // Number of not applicable users
    notApplicableCount?: number | undefined;
    // Number of pending Users
    pendingCount?: number | undefined;
    // Number of succeeded Users
    successCount?: number | undefined;
}
export interface ManagedIOSLobApp extends ManagedMobileLobApp {
    // The iOS architecture for which this app can run on.
    applicableDeviceType?: IosDeviceType | undefined;
    // The build number of managed iOS Line of Business (LoB) app.
    buildNumber?: NullableOption<string> | undefined;
    // The Identity Name.
    bundleId?: NullableOption<string> | undefined;
    // The expiration time.
    expirationDateTime?: NullableOption<string> | undefined;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: NullableOption<IosMinimumOperatingSystem> | undefined;
    // The version number of managed iOS Line of Business (LoB) app.
    versionNumber?: NullableOption<string> | undefined;
}
export interface ManagedIOSStoreApp extends ManagedApp {
    // The iOS architecture for which this app can run on.
    applicableDeviceType?: IosDeviceType | undefined;
    // The Apple AppStoreUrl.
    appStoreUrl?: string | undefined;
    // The app's Bundle ID.
    bundleId?: NullableOption<string> | undefined;
    // The value for the minimum supported operating system.
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
}
export interface MobileAppContent extends Entity {
    // The list of files for this app content version.
    files?: NullableOption<MobileAppContentFile[]> | undefined;
}
export interface MicrosoftStoreForBusinessApp extends MobileApp {
    // The app license type. Possible values are: offline, online.
    licenseType?: MicrosoftStoreForBusinessLicenseType | undefined;
    // The app package identifier
    packageIdentityName?: NullableOption<string> | undefined;
    // The app product key
    productKey?: NullableOption<string> | undefined;
    // The total number of Microsoft Store for Business licenses.
    totalLicenseCount?: number | undefined;
    // The number of Microsoft Store for Business licenses in use.
    usedLicenseCount?: number | undefined;
}
export interface MobileAppAssignment extends Entity {
    /**
     * The install intent defined by the admin. Possible values are: available, required, uninstall,
     * availableWithoutEnrollment.
     */
    intent?: InstallIntent | undefined;
    // The settings for target assignment defined by the admin.
    settings?: NullableOption<MobileAppAssignmentSettings> | undefined;
    // The target group assignment defined by the admin.
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
export interface MobileAppContentFile extends Entity {
    // The Azure Storage URI.
    azureStorageUri?: NullableOption<string> | undefined;
    // The time the Azure storage Uri expires.
    azureStorageUriExpirationDateTime?: NullableOption<string> | undefined;
    // The time the file was created.
    createdDateTime?: string | undefined;
    // A value indicating whether the file is committed.
    isCommitted?: boolean | undefined;
    // The manifest information.
    manifest?: NullableOption<number> | undefined;
    // the file name.
    name?: NullableOption<string> | undefined;
    // The size of the file prior to encryption.
    size?: number | undefined;
    // The size of the file after encryption.
    sizeEncrypted?: number | undefined;
    /**
     * The state of the current upload request. Possible values are: success, transientError, error, unknown,
     * azureStorageUriRequestSuccess, azureStorageUriRequestPending, azureStorageUriRequestFailed,
     * azureStorageUriRequestTimedOut, azureStorageUriRenewalSuccess, azureStorageUriRenewalPending,
     * azureStorageUriRenewalFailed, azureStorageUriRenewalTimedOut, commitFileSuccess, commitFilePending, commitFileFailed,
     * commitFileTimedOut.
     */
    uploadState?: MobileAppContentFileUploadState | undefined;
}
export interface WebApp extends MobileApp {
    // The web app URL. This property cannot be PATCHed.
    appUrl?: NullableOption<string> | undefined;
    // Whether or not to use managed browser. This property is only applicable for Android and IOS.
    useManagedBrowser?: boolean | undefined;
}
export interface Win32LobApp extends MobileLobApp {
    // The Windows architecture(s) for which this app can run on. Possible values are: none, x86, x64, arm, neutral, arm64.
    applicableArchitectures?: WindowsArchitecture | undefined;
    // The command line to install this app
    installCommandLine?: NullableOption<string> | undefined;
    // The install experience for this app.
    installExperience?: NullableOption<Win32LobAppInstallExperience> | undefined;
    // The value for the minimum CPU speed which is required to install this app.
    minimumCpuSpeedInMHz?: NullableOption<number> | undefined;
    // The value for the minimum free disk space which is required to install this app.
    minimumFreeDiskSpaceInMB?: NullableOption<number> | undefined;
    // The value for the minimum physical memory which is required to install this app.
    minimumMemoryInMB?: NullableOption<number> | undefined;
    // The value for the minimum number of processors which is required to install this app.
    minimumNumberOfProcessors?: NullableOption<number> | undefined;
    // The value for the minimum supported windows release.
    minimumSupportedWindowsRelease?: NullableOption<string> | undefined;
    // The MSI details if this Win32 app is an MSI app.
    msiInformation?: NullableOption<Win32LobAppMsiInformation> | undefined;
    // The return codes for post installation behavior.
    returnCodes?: NullableOption<Win32LobAppReturnCode[]> | undefined;
    // The detection and requirement rules for this app.
    rules?: NullableOption<Win32LobAppRule[]> | undefined;
    // The relative path of the setup file in the encrypted Win32LobApp package.
    setupFilePath?: NullableOption<string> | undefined;
    // The command line to uninstall this app
    uninstallCommandLine?: NullableOption<string> | undefined;
}
export interface WindowsMobileMSI extends MobileLobApp {
    // The command line.
    commandLine?: NullableOption<string> | undefined;
    /**
     * A boolean to control whether the app's version will be used to detect the app after it is installed on a device. Set
     * this to true for Windows Mobile MSI Line of Business (LoB) apps that use a self update feature.
     */
    ignoreVersionDetection?: boolean | undefined;
    // The product code.
    productCode?: NullableOption<string> | undefined;
    // The product version of Windows Mobile MSI Line of Business (LoB) app.
    productVersion?: NullableOption<string> | undefined;
}
export interface WindowsUniversalAppX extends MobileLobApp {
    // The Windows architecture(s) for which this app can run on. Possible values are: none, x86, x64, arm, neutral, arm64.
    applicableArchitectures?: WindowsArchitecture | undefined;
    /**
     * The Windows device type(s) for which this app can run on. Possible values are: none, desktop, mobile, holographic,
     * team.
     */
    applicableDeviceTypes?: WindowsDeviceType | undefined;
    // The Identity Name.
    identityName?: NullableOption<string> | undefined;
    // The Identity Publisher Hash.
    identityPublisherHash?: string | undefined;
    // The Identity Resource Identifier.
    identityResourceIdentifier?: NullableOption<string> | undefined;
    // The identity version.
    identityVersion?: NullableOption<string> | undefined;
    // Whether or not the app is a bundle.
    isBundle?: boolean | undefined;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: WindowsMinimumOperatingSystem | undefined;
}
export interface DeviceInstallState extends Entity {
    // Device Id.
    deviceId?: NullableOption<string> | undefined;
    // Device name.
    deviceName?: NullableOption<string> | undefined;
    // The error code for install failures.
    errorCode?: NullableOption<string> | undefined;
    /**
     * The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed,
     * unknown.
     */
    installState?: InstallState | undefined;
    // Last sync date and time.
    lastSyncDateTime?: string | undefined;
    // OS Description.
    osDescription?: NullableOption<string> | undefined;
    // OS Version.
    osVersion?: NullableOption<string> | undefined;
    // Device User Name.
    userName?: NullableOption<string> | undefined;
}
export interface EBookInstallSummary extends Entity {
    // Number of Devices that have failed to install this book.
    failedDeviceCount?: number | undefined;
    // Number of Users that have 1 or more device that failed to install this book.
    failedUserCount?: number | undefined;
    // Number of Devices that have successfully installed this book.
    installedDeviceCount?: number | undefined;
    // Number of Users whose devices have all succeeded to install this book.
    installedUserCount?: number | undefined;
    // Number of Devices that does not have this book installed.
    notInstalledDeviceCount?: number | undefined;
    // Number of Users that did not install this book.
    notInstalledUserCount?: number | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosVppEBook extends ManagedEBook {
    // The Apple ID associated with Vpp token.
    appleId?: NullableOption<string> | undefined;
    // Genres.
    genres?: NullableOption<string[]> | undefined;
    // Language.
    language?: NullableOption<string> | undefined;
    // Seller.
    seller?: NullableOption<string> | undefined;
    // Total license count.
    totalLicenseCount?: number | undefined;
    // Used license count.
    usedLicenseCount?: number | undefined;
    // The Vpp token's organization name.
    vppOrganizationName?: NullableOption<string> | undefined;
    // The Vpp token ID.
    vppTokenId?: string | undefined;
}
export interface ManagedEBookAssignment extends Entity {
    // The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment.
    installIntent?: InstallIntent | undefined;
    // The assignment target for eBook.
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IosVppEBookAssignment extends ManagedEBookAssignment {}
export interface UserInstallStateSummary extends Entity {
    // Failed Device Count.
    failedDeviceCount?: number | undefined;
    // Installed Device Count.
    installedDeviceCount?: number | undefined;
    // Not installed device count.
    notInstalledDeviceCount?: number | undefined;
    // User name.
    userName?: NullableOption<string> | undefined;
    // The install state of the eBook.
    deviceStates?: NullableOption<DeviceInstallState[]> | undefined;
}
export interface DeviceManagement extends Entity {
    // Intune Account ID for given tenant
    intuneAccountId?: string | undefined;
    // Account level settings.
    settings?: NullableOption<DeviceManagementSettings> | undefined;
    /**
     * intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the
     * end user web portal.
     */
    intuneBrand?: NullableOption<IntuneBrand> | undefined;
    /**
     * Tenant mobile device management subscription state. Possible values are: pending, active, warning, disabled, deleted,
     * blocked, lockedOut.
     */
    subscriptionState?: DeviceManagementSubscriptionState | undefined;
    // The terms and conditions associated with device management of the company.
    termsAndConditions?: NullableOption<TermsAndConditions[]> | undefined;
    // The device compliance policies.
    deviceCompliancePolicies?: NullableOption<DeviceCompliancePolicy[]> | undefined;
    // The device compliance state summary for this account.
    deviceCompliancePolicyDeviceStateSummary?: NullableOption<DeviceCompliancePolicyDeviceStateSummary> | undefined;
    // The summary states of compliance policy settings for this account.
    deviceCompliancePolicySettingStateSummaries?: NullableOption<DeviceCompliancePolicySettingStateSummary[]> | undefined;
    // The device configuration device state summary for this account.
    deviceConfigurationDeviceStateSummaries?: NullableOption<DeviceConfigurationDeviceStateSummary> | undefined;
    // The device configurations.
    deviceConfigurations?: NullableOption<DeviceConfiguration[]> | undefined;
    // The IOS software update installation statuses for this account.
    iosUpdateStatuses?: NullableOption<IosUpdateDeviceStatus[]> | undefined;
    // The software update status summary.
    softwareUpdateStatusSummary?: NullableOption<SoftwareUpdateStatusSummary> | undefined;
    // The list of Compliance Management Partners configured by the tenant.
    complianceManagementPartners?: NullableOption<ComplianceManagementPartner[]> | undefined;
    /**
     * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both
     * enrolled and compliant for mail access
     */
    conditionalAccessSettings?: NullableOption<OnPremisesConditionalAccessSettings> | undefined;
    // The list of device categories with the tenant.
    deviceCategories?: NullableOption<DeviceCategory[]> | undefined;
    // The list of device enrollment configurations
    deviceEnrollmentConfigurations?: NullableOption<DeviceEnrollmentConfiguration[]> | undefined;
    // The list of Device Management Partners configured by the tenant.
    deviceManagementPartners?: NullableOption<DeviceManagementPartner[]> | undefined;
    // The list of Exchange Connectors configured by the tenant.
    exchangeConnectors?: NullableOption<DeviceManagementExchangeConnector[]> | undefined;
    // The list of Mobile threat Defense connectors configured by the tenant.
    mobileThreatDefenseConnectors?: NullableOption<MobileThreatDefenseConnector[]> | undefined;
    // Apple push notification certificate.
    applePushNotificationCertificate?: NullableOption<ApplePushNotificationCertificate> | undefined;
    // The list of detected apps associated with a device.
    detectedApps?: NullableOption<DetectedApp[]> | undefined;
    // Device overview
    managedDeviceOverview?: NullableOption<ManagedDeviceOverview> | undefined;
    // The list of managed devices.
    managedDevices?: NullableOption<ManagedDevice[]> | undefined;
    // Collection of imported Windows autopilot devices.
    importedWindowsAutopilotDeviceIdentities?: NullableOption<ImportedWindowsAutopilotDeviceIdentity[]> | undefined;
    // The Windows autopilot device identities contained collection.
    windowsAutopilotDeviceIdentities?: NullableOption<WindowsAutopilotDeviceIdentity[]> | undefined;
    // The Notification Message Templates.
    notificationMessageTemplates?: NullableOption<NotificationMessageTemplate[]> | undefined;
    // The Resource Operations.
    resourceOperations?: NullableOption<ResourceOperation[]> | undefined;
    // The Role Assignments.
    roleAssignments?: NullableOption<DeviceAndAppManagementRoleAssignment[]> | undefined;
    // The Role Definitions.
    roleDefinitions?: NullableOption<RoleDefinition[]> | undefined;
    // The remote assist partners.
    remoteAssistancePartners?: NullableOption<RemoteAssistancePartner[]> | undefined;
    // The telecom expense management partners.
    telecomExpenseManagementPartners?: NullableOption<TelecomExpenseManagementPartner[]> | undefined;
    // The list of troubleshooting events for the tenant.
    troubleshootingEvents?: NullableOption<DeviceManagementTroubleshootingEvent[]> | undefined;
    // The windows information protection app learning summaries.
    windowsInformationProtectionAppLearningSummaries?: NullableOption<WindowsInformationProtectionAppLearningSummary[]> | undefined;
    // The windows information protection network learning summaries.
    windowsInformationProtectionNetworkLearningSummaries?: NullableOption<WindowsInformationProtectionNetworkLearningSummary[]> | undefined;
}
export interface TermsAndConditions extends Entity {
    /**
     * Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms
     * and conditions set out in the T&amp;C policy. This is shown to the user on prompts to accept the T&amp;C policy.
     */
    acceptanceStatement?: NullableOption<string> | undefined;
    /**
     * Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user
     * on prompts to accept the T&amp;C policy.
     */
    bodyText?: NullableOption<string> | undefined;
    // DateTime the object was created.
    createdDateTime?: string | undefined;
    // Administrator-supplied description of the T&amp;C policy.
    description?: NullableOption<string> | undefined;
    // Administrator-supplied name for the T&amp;C policy.
    displayName?: string | undefined;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string | undefined;
    /**
     * Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&amp;C
     * policy.
     */
    title?: NullableOption<string> | undefined;
    /**
     * Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and
     * wishes to require users to re-accept the modified T&amp;C policy.
     */
    version?: number | undefined;
    // The list of acceptance statuses for this T&amp;C policy.
    acceptanceStatuses?: NullableOption<TermsAndConditionsAcceptanceStatus[]> | undefined;
    // The list of assignments for this T&amp;C policy.
    assignments?: NullableOption<TermsAndConditionsAssignment[]> | undefined;
}
export interface DeviceCompliancePolicy extends Entity {
    // DateTime the object was created.
    createdDateTime?: string | undefined;
    // Admin provided description of the Device Configuration.
    description?: NullableOption<string> | undefined;
    // Admin provided name of the device configuration.
    displayName?: string | undefined;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string | undefined;
    // Version of the device configuration.
    version?: number | undefined;
    // The collection of assignments for this compliance policy.
    assignments?: NullableOption<DeviceCompliancePolicyAssignment[]> | undefined;
    // Compliance Setting State Device Summary
    deviceSettingStateSummaries?: NullableOption<SettingStateDeviceSummary[]> | undefined;
    // List of DeviceComplianceDeviceStatus.
    deviceStatuses?: NullableOption<DeviceComplianceDeviceStatus[]> | undefined;
    // Device compliance devices status overview
    deviceStatusOverview?: NullableOption<DeviceComplianceDeviceOverview> | undefined;
    // The list of scheduled action for this rule
    scheduledActionsForRule?: NullableOption<DeviceComplianceScheduledActionForRule[]> | undefined;
    // List of DeviceComplianceUserStatus.
    userStatuses?: NullableOption<DeviceComplianceUserStatus[]> | undefined;
    // Device compliance users status overview
    userStatusOverview?: NullableOption<DeviceComplianceUserOverview> | undefined;
}
export interface DeviceCompliancePolicyDeviceStateSummary extends Entity {
    // Number of compliant devices
    compliantDeviceCount?: number | undefined;
    // Number of devices that have compliance managed by System Center Configuration Manager
    configManagerCount?: number | undefined;
    // Number of conflict devices
    conflictDeviceCount?: number | undefined;
    // Number of error devices
    errorDeviceCount?: number | undefined;
    // Number of devices that are in grace period
    inGracePeriodCount?: number | undefined;
    // Number of NonCompliant devices
    nonCompliantDeviceCount?: number | undefined;
    // Number of not applicable devices
    notApplicableDeviceCount?: number | undefined;
    // Number of remediated devices
    remediatedDeviceCount?: number | undefined;
    // Number of unknown devices
    unknownDeviceCount?: number | undefined;
}
export interface DeviceCompliancePolicySettingStateSummary extends Entity {
    // Number of compliant devices
    compliantDeviceCount?: number | undefined;
    // Number of conflict devices
    conflictDeviceCount?: number | undefined;
    // Number of error devices
    errorDeviceCount?: number | undefined;
    // Number of NonCompliant devices
    nonCompliantDeviceCount?: number | undefined;
    // Number of not applicable devices
    notApplicableDeviceCount?: number | undefined;
    /**
     * Setting platform. Possible values are: android, androidForWork, iOS, macOS, windowsPhone81, windows81AndLater,
     * windows10AndLater, androidWorkProfile, windows10XProfile, androidAOSP, all.
     */
    platformType?: PolicyPlatformType | undefined;
    // Number of remediated devices
    remediatedDeviceCount?: number | undefined;
    // The setting class name and property name.
    setting?: NullableOption<string> | undefined;
    // Name of the setting.
    settingName?: NullableOption<string> | undefined;
    // Number of unknown devices
    unknownDeviceCount?: number | undefined;
    // Not yet documented
    deviceComplianceSettingStates?: NullableOption<DeviceComplianceSettingState[]> | undefined;
}
export interface DeviceConfigurationDeviceStateSummary extends Entity {
    // Number of compliant devices
    compliantDeviceCount?: number | undefined;
    // Number of conflict devices
    conflictDeviceCount?: number | undefined;
    // Number of error devices
    errorDeviceCount?: number | undefined;
    // Number of NonCompliant devices
    nonCompliantDeviceCount?: number | undefined;
    // Number of not applicable devices
    notApplicableDeviceCount?: number | undefined;
    // Number of remediated devices
    remediatedDeviceCount?: number | undefined;
    // Number of unknown devices
    unknownDeviceCount?: number | undefined;
}
export interface DeviceConfiguration extends Entity {
    // DateTime the object was created.
    createdDateTime?: string | undefined;
    // Admin provided description of the Device Configuration.
    description?: NullableOption<string> | undefined;
    // Admin provided name of the device configuration.
    displayName?: string | undefined;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string | undefined;
    // Version of the device configuration.
    version?: number | undefined;
    // The list of assignments for the device configuration profile.
    assignments?: NullableOption<DeviceConfigurationAssignment[]> | undefined;
    // Device Configuration Setting State Device Summary
    deviceSettingStateSummaries?: NullableOption<SettingStateDeviceSummary[]> | undefined;
    // Device configuration installation status by device.
    deviceStatuses?: NullableOption<DeviceConfigurationDeviceStatus[]> | undefined;
    // Device Configuration devices status overview
    deviceStatusOverview?: NullableOption<DeviceConfigurationDeviceOverview> | undefined;
    // Device configuration installation status by user.
    userStatuses?: NullableOption<DeviceConfigurationUserStatus[]> | undefined;
    // Device Configuration users status overview
    userStatusOverview?: NullableOption<DeviceConfigurationUserOverview> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosUpdateDeviceStatus extends Entity {
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string | undefined;
    // Device name of the DevicePolicyStatus.
    deviceDisplayName?: NullableOption<string> | undefined;
    // The device id that is being reported.
    deviceId?: NullableOption<string> | undefined;
    // The device model that is being reported
    deviceModel?: NullableOption<string> | undefined;
    /**
     * The installation status of the policy report. Possible values are: success, available, idle, unknown, mdmClientCrashed,
     * timeout, downloading, downloadFailed, downloadRequiresComputer, downloadInsufficientSpace, downloadInsufficientPower,
     * downloadInsufficientNetwork, installing, installInsufficientSpace, installInsufficientPower,
     * installPhoneCallInProgress, installFailed, notSupportedOperation, sharedDeviceUserLoggedInError, updateError,
     * deviceOsHigherThanDesiredOsVersion, updateScanFailed.
     */
    installStatus?: IosUpdatesInstallStatus | undefined;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string | undefined;
    // The device version that is being reported.
    osVersion?: NullableOption<string> | undefined;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus | undefined;
    // The User id that is being reported.
    userId?: NullableOption<string> | undefined;
    // The User Name that is being reported
    userName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface SoftwareUpdateStatusSummary extends Entity {
    // Number of compliant devices.
    compliantDeviceCount?: number | undefined;
    // Number of compliant users.
    compliantUserCount?: number | undefined;
    // Number of conflict devices.
    conflictDeviceCount?: number | undefined;
    // Number of conflict users.
    conflictUserCount?: number | undefined;
    // The name of the policy.
    displayName?: NullableOption<string> | undefined;
    // Number of devices had error.
    errorDeviceCount?: number | undefined;
    // Number of users had error.
    errorUserCount?: number | undefined;
    // Number of non compliant devices.
    nonCompliantDeviceCount?: number | undefined;
    // Number of non compliant users.
    nonCompliantUserCount?: number | undefined;
    // Number of not applicable devices.
    notApplicableDeviceCount?: number | undefined;
    // Number of not applicable users.
    notApplicableUserCount?: number | undefined;
    // Number of remediated devices.
    remediatedDeviceCount?: number | undefined;
    // Number of remediated users.
    remediatedUserCount?: number | undefined;
    // Number of unknown devices.
    unknownDeviceCount?: number | undefined;
    // Number of unknown users.
    unknownUserCount?: number | undefined;
}
export interface ComplianceManagementPartner extends Entity {
    // User groups which enroll Android devices through partner.
    androidEnrollmentAssignments?: NullableOption<ComplianceManagementPartnerAssignment[]> | undefined;
    // Partner onboarded for Android devices.
    androidOnboarded?: boolean | undefined;
    // Partner display name
    displayName?: NullableOption<string> | undefined;
    // User groups which enroll ios devices through partner.
    iosEnrollmentAssignments?: NullableOption<ComplianceManagementPartnerAssignment[]> | undefined;
    // Partner onboarded for ios devices.
    iosOnboarded?: boolean | undefined;
    // Timestamp of last heartbeat after admin onboarded to the compliance management partner
    lastHeartbeatDateTime?: string | undefined;
    // User groups which enroll Mac devices through partner.
    macOsEnrollmentAssignments?: NullableOption<ComplianceManagementPartnerAssignment[]> | undefined;
    // Partner onboarded for Mac devices.
    macOsOnboarded?: boolean | undefined;
    // Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
    partnerState?: DeviceManagementPartnerTenantState | undefined;
}
export interface OnPremisesConditionalAccessSettings extends Entity {
    // Indicates if on premises conditional access is enabled for this organization
    enabled?: boolean | undefined;
    /**
     * User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the
     * conditional access policy.
     */
    excludedGroups?: string[] | undefined;
    /**
     * User groups that will be targeted by on premises conditional access. All users in these groups will be required to have
     * mobile device managed and compliant for mail access.
     */
    includedGroups?: string[] | undefined;
    // Override the default access rule when allowing a device to ensure access is granted.
    overrideDefaultRule?: boolean | undefined;
}
export interface DeviceCategory extends Entity {
    // Optional description for the device category.
    description?: NullableOption<string> | undefined;
    // Display name for the device category.
    displayName?: NullableOption<string> | undefined;
}
export interface DeviceEnrollmentConfiguration extends Entity {
    // Created date time in UTC of the device enrollment configuration
    createdDateTime?: string | undefined;
    // The description of the device enrollment configuration
    description?: NullableOption<string> | undefined;
    // The display name of the device enrollment configuration
    displayName?: NullableOption<string> | undefined;
    // Last modified date time in UTC of the device enrollment configuration
    lastModifiedDateTime?: string | undefined;
    /**
     * Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject
     * only to the configuration with the lowest priority value.
     */
    priority?: number | undefined;
    // The version of the device enrollment configuration
    version?: number | undefined;
    // The list of group assignments for the device configuration profile
    assignments?: NullableOption<EnrollmentConfigurationAssignment[]> | undefined;
}
export interface DeviceManagementPartner extends Entity {
    // Partner display name
    displayName?: NullableOption<string> | undefined;
    // Whether device management partner is configured or not
    isConfigured?: boolean | undefined;
    // Timestamp of last heartbeat after admin enabled option Connect to Device management Partner
    lastHeartbeatDateTime?: string | undefined;
    // Partner App type. Possible values are: unknown, singleTenantApp, multiTenantApp.
    partnerAppType?: DeviceManagementPartnerAppType | undefined;
    // Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
    partnerState?: DeviceManagementPartnerTenantState | undefined;
    // Partner Single tenant App id
    singleTenantAppId?: NullableOption<string> | undefined;
    // DateTime in UTC when PartnerDevices will be marked as NonCompliant
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: NullableOption<string> | undefined;
    // DateTime in UTC when PartnerDevices will be removed
    whenPartnerDevicesWillBeRemovedDateTime?: NullableOption<string> | undefined;
}
export interface DeviceManagementExchangeConnector extends Entity {
    // The name of the server hosting the Exchange Connector.
    connectorServerName?: NullableOption<string> | undefined;
    // An alias assigned to the Exchange server
    exchangeAlias?: NullableOption<string> | undefined;
    // The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated.
    exchangeConnectorType?: DeviceManagementExchangeConnectorType | undefined;
    // Exchange Organization to the Exchange server
    exchangeOrganization?: NullableOption<string> | undefined;
    // Last sync time for the Exchange Connector
    lastSyncDateTime?: string | undefined;
    // Email address used to configure the Service To Service Exchange Connector.
    primarySmtpAddress?: NullableOption<string> | undefined;
    // The name of the Exchange server.
    serverName?: NullableOption<string> | undefined;
    // Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected.
    status?: DeviceManagementExchangeConnectorStatus | undefined;
    // The version of the ExchangeConnectorAgent
    version?: NullableOption<string> | undefined;
}
export interface MobileThreatDefenseConnector extends Entity {
    // For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant
    androidDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    // For Android, set whether data from the data sync partner should be used during compliance evaluations
    androidEnabled?: boolean | undefined;
    // For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant
    iosDeviceBlockedOnMissingPartnerData?: boolean | undefined;
    // For IOS, get or set whether data from the data sync partner should be used during compliance evaluations
    iosEnabled?: boolean | undefined;
    // DateTime of last Heartbeat recieved from the Data Sync Partner
    lastHeartbeatDateTime?: string | undefined;
    // Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive.
    partnerState?: MobileThreatPartnerTenantState | undefined;
    // Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
    partnerUnresponsivenessThresholdInDays?: number | undefined;
    /**
     * Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the
     * Data Sync Partner
     */
    partnerUnsupportedOsVersionBlocked?: boolean | undefined;
}
export interface ApplePushNotificationCertificate extends Entity {
    // Apple Id of the account used to create the MDM push certificate.
    appleIdentifier?: NullableOption<string> | undefined;
    // Not yet documented
    certificate?: NullableOption<string> | undefined;
    // Certificate serial number. This property is read-only.
    certificateSerialNumber?: NullableOption<string> | undefined;
    // The expiration date and time for Apple push notification certificate.
    expirationDateTime?: string | undefined;
    // Last modified date and time for Apple push notification certificate.
    lastModifiedDateTime?: string | undefined;
    // Topic Id.
    topicIdentifier?: NullableOption<string> | undefined;
}
export interface DetectedApp extends Entity {
    // The number of devices that have installed this application
    deviceCount?: number | undefined;
    // Name of the discovered application. Read-only
    displayName?: NullableOption<string> | undefined;
    // Discovered application size in bytes. Read-only
    sizeInByte?: number | undefined;
    // Version of the discovered application. Read-only
    version?: NullableOption<string> | undefined;
    // The devices that have the discovered application installed
    managedDevices?: NullableOption<ManagedDevice[]> | undefined;
}
export interface ManagedDeviceOverview extends Entity {
    // Distribution of Exchange Access State in Intune
    deviceExchangeAccessStateSummary?: NullableOption<DeviceExchangeAccessStateSummary> | undefined;
    // Device operating system summary.
    deviceOperatingSystemSummary?: NullableOption<DeviceOperatingSystemSummary> | undefined;
    // The number of devices enrolled in both MDM and EAS
    dualEnrolledDeviceCount?: number | undefined;
    // Total enrolled device count. Does not include PC devices managed via Intune PC Agent
    enrolledDeviceCount?: number | undefined;
    // The number of devices enrolled in MDM
    mdmEnrolledCount?: number | undefined;
}
// tslint:disable-next-line: interface-name
export interface ImportedWindowsAutopilotDeviceIdentity extends Entity {
    // UPN of the user the device will be assigned
    assignedUserPrincipalName?: NullableOption<string> | undefined;
    // Group Tag of the Windows autopilot device.
    groupTag?: NullableOption<string> | undefined;
    // Hardware Blob of the Windows autopilot device.
    hardwareIdentifier?: NullableOption<number> | undefined;
    // The Import Id of the Windows autopilot device.
    importId?: NullableOption<string> | undefined;
    // Product Key of the Windows autopilot device.
    productKey?: NullableOption<string> | undefined;
    // Serial number of the Windows autopilot device.
    serialNumber?: NullableOption<string> | undefined;
    // Current state of the imported device.
    state?: NullableOption<ImportedWindowsAutopilotDeviceIdentityState> | undefined;
}
export interface WindowsAutopilotDeviceIdentity extends Entity {
    // Addressable user name.
    addressableUserName?: NullableOption<string> | undefined;
    // AAD Device ID - to be deprecated
    azureActiveDirectoryDeviceId?: NullableOption<string> | undefined;
    // Display Name
    displayName?: NullableOption<string> | undefined;
    /**
     * Intune enrollment state of the Windows autopilot device. Possible values are: unknown, enrolled, pendingReset, failed,
     * notContacted, blocked.
     */
    enrollmentState?: EnrollmentState | undefined;
    // Group Tag of the Windows autopilot device.
    groupTag?: NullableOption<string> | undefined;
    // Intune Last Contacted Date Time of the Windows autopilot device.
    lastContactedDateTime?: string | undefined;
    // Managed Device ID
    managedDeviceId?: NullableOption<string> | undefined;
    // Oem manufacturer of the Windows autopilot device.
    manufacturer?: NullableOption<string> | undefined;
    // Model name of the Windows autopilot device.
    model?: NullableOption<string> | undefined;
    // Product Key of the Windows autopilot device.
    productKey?: NullableOption<string> | undefined;
    // Purchase Order Identifier of the Windows autopilot device.
    purchaseOrderIdentifier?: NullableOption<string> | undefined;
    // Resource Name.
    resourceName?: NullableOption<string> | undefined;
    // Serial number of the Windows autopilot device.
    serialNumber?: NullableOption<string> | undefined;
    // SKU Number
    skuNumber?: NullableOption<string> | undefined;
    // System Family
    systemFamily?: NullableOption<string> | undefined;
    // User Principal Name.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface NotificationMessageTemplate extends Entity {
    /**
     * The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none,
     * includeCompanyLogo, includeCompanyName, includeContactInformation, includeCompanyPortalLink.
     */
    brandingOptions?: NotificationTemplateBrandingOptions | undefined;
    // The default locale to fallback onto when the requested locale is not available.
    defaultLocale?: NullableOption<string> | undefined;
    // Display name for the Notification Message Template.
    displayName?: string | undefined;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string | undefined;
    // The list of localized messages for this Notification Message Template.
    localizedNotificationMessages?: NullableOption<LocalizedNotificationMessage[]> | undefined;
}
export interface ResourceOperation extends Entity {
    /**
     * Type of action this operation is going to perform. The actionName should be concise and limited to as few words as
     * possible.
     */
    actionName?: NullableOption<string> | undefined;
    /**
     * Description of the resource operation. The description is used in mouse-over text for the operation when shown in the
     * Azure Portal.
     */
    description?: NullableOption<string> | undefined;
    // Name of the Resource this operation is performed on.
    resourceName?: NullableOption<string> | undefined;
}
export interface RoleAssignment extends Entity {
    // Description of the Role Assignment.
    description?: NullableOption<string> | undefined;
    // The display or friendly name of the role Assignment.
    displayName?: NullableOption<string> | undefined;
    // List of ids of role scope member security groups. These are IDs from Azure Active Directory.
    resourceScopes?: NullableOption<string[]> | undefined;
    // Role definition this assignment is part of.
    roleDefinition?: NullableOption<RoleDefinition> | undefined;
}
export interface DeviceAndAppManagementRoleAssignment extends RoleAssignment {
    // The list of ids of role member security groups. These are IDs from Azure Active Directory.
    members?: NullableOption<string[]> | undefined;
}
export interface RoleDefinition extends Entity {
    // Description of the Role definition.
    description?: NullableOption<string> | undefined;
    // Display Name of the Role definition.
    displayName?: NullableOption<string> | undefined;
    // Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition.
    isBuiltIn?: boolean | undefined;
    /**
     * List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of
     * the rolePermission.
     */
    rolePermissions?: NullableOption<RolePermission[]> | undefined;
    // List of Role assignments for this role definition.
    roleAssignments?: NullableOption<RoleAssignment[]> | undefined;
}
export interface RemoteAssistancePartner extends Entity {
    // Display name of the partner.
    displayName?: NullableOption<string> | undefined;
    // Timestamp of the last request sent to Intune by the TEM partner.
    lastConnectionDateTime?: string | undefined;
    /**
     * A friendly description of the current TeamViewer connector status. Possible values are: notOnboarded, onboarding,
     * onboarded.
     */
    onboardingStatus?: RemoteAssistanceOnboardingStatus | undefined;
    // URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service.
    onboardingUrl?: NullableOption<string> | undefined;
}
export interface TelecomExpenseManagementPartner extends Entity {
    // Whether the partner's AAD app has been authorized to access Intune.
    appAuthorized?: boolean | undefined;
    // Display name of the TEM partner.
    displayName?: NullableOption<string> | undefined;
    // Whether Intune's connection to the TEM service is currently enabled or disabled.
    enabled?: boolean | undefined;
    // Timestamp of the last request sent to Intune by the TEM partner.
    lastConnectionDateTime?: string | undefined;
    // URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
    url?: NullableOption<string> | undefined;
}
export interface WindowsInformationProtectionAppLearningSummary extends Entity {
    // Application Name
    applicationName?: NullableOption<string> | undefined;
    // Application Type. Possible values are: universal, desktop.
    applicationType?: ApplicationType | undefined;
    // Device Count
    deviceCount?: number | undefined;
}
export interface WindowsInformationProtectionNetworkLearningSummary extends Entity {
    // Device Count
    deviceCount?: number | undefined;
    // Website url
    url?: NullableOption<string> | undefined;
}
export interface TermsAndConditionsAcceptanceStatus extends Entity {
    // DateTime when the terms were last accepted by the user.
    acceptedDateTime?: string | undefined;
    // Most recent version number of the T&amp;C accepted by the user.
    acceptedVersion?: number | undefined;
    // Display name of the user whose acceptance the entity represents.
    userDisplayName?: NullableOption<string> | undefined;
    // The userPrincipalName of the User that accepted the term.
    userPrincipalName?: NullableOption<string> | undefined;
    // Navigation link to the terms and conditions that are assigned.
    termsAndConditions?: NullableOption<TermsAndConditions> | undefined;
}
export interface TermsAndConditionsAssignment extends Entity {
    // Assignment target that the T&amp;C policy is assigned to.
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
export interface AndroidCompliancePolicy extends DeviceCompliancePolicy {
    // Require that devices have enabled device threat protection.
    deviceThreatProtectionEnabled?: boolean | undefined;
    /**
     * Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured,
     * low, medium, high, notSet.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    // Minimum Android security patch level.
    minAndroidSecurityPatchLevel?: NullableOption<string> | undefined;
    // Maximum Android version.
    osMaximumVersion?: NullableOption<string> | undefined;
    // Minimum Android version.
    osMinimumVersion?: NullableOption<string> | undefined;
    // Number of days before the password expires. Valid values 1 to 365
    passwordExpirationDays?: NullableOption<number> | undefined;
    // Minimum password length. Valid values 4 to 16
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // Number of previous passwords to block. Valid values 1 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Require a password to unlock device.
    passwordRequired?: boolean | undefined;
    /**
     * Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols,
     * lowSecurityBiometric, numeric, numericComplex, any.
     */
    passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    // Devices must not be jailbroken or rooted.
    securityBlockJailbrokenDevices?: boolean | undefined;
    // Disable USB debugging on Android devices.
    securityDisableUsbDebugging?: boolean | undefined;
    // Require that devices disallow installation of apps from unknown sources.
    securityPreventInstallAppsFromUnknownSources?: boolean | undefined;
    // Require the device to pass the Company Portal client app runtime integrity check.
    securityRequireCompanyPortalAppIntegrity?: boolean | undefined;
    // Require Google Play Services to be installed and enabled on the device.
    securityRequireGooglePlayServices?: boolean | undefined;
    // Require the device to pass the SafetyNet basic integrity check.
    securityRequireSafetyNetAttestationBasicIntegrity?: boolean | undefined;
    // Require the device to pass the SafetyNet certified device check.
    securityRequireSafetyNetAttestationCertifiedDevice?: boolean | undefined;
    /**
     * Require the device to have up to date security providers. The device will require Google Play Services to be enabled
     * and up to date.
     */
    securityRequireUpToDateSecurityProviders?: boolean | undefined;
    // Require the Android Verify apps feature is turned on.
    securityRequireVerifyApps?: boolean | undefined;
    // Require encryption on Android devices.
    storageRequireEncryption?: boolean | undefined;
}
export interface AndroidCustomConfiguration extends DeviceConfiguration {
    // OMA settings. This collection can contain a maximum of 1000 elements.
    omaSettings?: NullableOption<OmaSetting[]> | undefined;
}
export interface AndroidGeneralDeviceConfiguration extends DeviceConfiguration {
    // Indicates whether or not to block clipboard sharing to copy and paste between applications.
    appsBlockClipboardSharing?: boolean | undefined;
    // Indicates whether or not to block copy and paste within applications.
    appsBlockCopyPaste?: boolean | undefined;
    // Indicates whether or not to block the YouTube app.
    appsBlockYouTube?: boolean | undefined;
    // List of apps to be hidden on the KNOX device. This collection can contain a maximum of 500 elements.
    appsHideList?: NullableOption<AppListItem[]> | undefined;
    // List of apps which can be installed on the KNOX device. This collection can contain a maximum of 500 elements.
    appsInstallAllowList?: NullableOption<AppListItem[]> | undefined;
    /**
     * List of apps which are blocked from being launched on the KNOX device. This collection can contain a maximum of 500
     * elements.
     */
    appsLaunchBlockList?: NullableOption<AppListItem[]> | undefined;
    // Indicates whether or not to block Bluetooth.
    bluetoothBlocked?: boolean | undefined;
    // Indicates whether or not to block the use of the camera.
    cameraBlocked?: boolean | undefined;
    // Indicates whether or not to block data roaming.
    cellularBlockDataRoaming?: boolean | undefined;
    // Indicates whether or not to block SMS/MMS messaging.
    cellularBlockMessaging?: boolean | undefined;
    // Indicates whether or not to block voice roaming.
    cellularBlockVoiceRoaming?: boolean | undefined;
    // Indicates whether or not to block syncing Wi-Fi tethering.
    cellularBlockWiFiTethering?: boolean | undefined;
    // Type of list that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    compliantAppListType?: AppListType | undefined;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection
     * can contain a maximum of 10000 elements.
     */
    compliantAppsList?: NullableOption<AppListItem[]> | undefined;
    // Indicates whether or not to allow device sharing mode.
    deviceSharingAllowed?: boolean | undefined;
    // Indicates whether or not to block diagnostic data submission.
    diagnosticDataBlockSubmission?: boolean | undefined;
    // Indicates whether or not to block user performing a factory reset.
    factoryResetBlocked?: boolean | undefined;
    // Indicates whether or not to block Google account auto sync.
    googleAccountBlockAutoSync?: boolean | undefined;
    // Indicates whether or not to block the Google Play store.
    googlePlayStoreBlocked?: boolean | undefined;
    /**
     * A list of apps that will be allowed to run when the device is in Kiosk Mode. This collection can contain a maximum of
     * 500 elements.
     */
    kioskModeApps?: NullableOption<AppListItem[]> | undefined;
    // Indicates whether or not to block the screen sleep button while in Kiosk Mode.
    kioskModeBlockSleepButton?: boolean | undefined;
    // Indicates whether or not to block the volume buttons while in Kiosk Mode.
    kioskModeBlockVolumeButtons?: boolean | undefined;
    // Indicates whether or not to block location services.
    locationServicesBlocked?: boolean | undefined;
    // Indicates whether or not to block Near-Field Communication.
    nfcBlocked?: boolean | undefined;
    // Indicates whether or not to block fingerprint unlock.
    passwordBlockFingerprintUnlock?: boolean | undefined;
    // Indicates whether or not to block Smart Lock and other trust agents.
    passwordBlockTrustAgents?: boolean | undefined;
    // Number of days before the password expires. Valid values 1 to 365
    passwordExpirationDays?: NullableOption<number> | undefined;
    // Minimum length of passwords. Valid values 4 to 16
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: NullableOption<number> | undefined;
    // Number of previous passwords to block. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Indicates whether or not to require a password.
    passwordRequired?: boolean | undefined;
    /**
     * Type of password that is required. Possible values are: deviceDefault, alphabetic, alphanumeric,
     * alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any.
     */
    passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    // Number of sign in failures allowed before factory reset. Valid values 1 to 16
    passwordSignInFailureCountBeforeFactoryReset?: NullableOption<number> | undefined;
    // Indicates whether or not to block powering off the device.
    powerOffBlocked?: boolean | undefined;
    // Indicates whether or not to block screenshots.
    screenCaptureBlocked?: boolean | undefined;
    // Require the Android Verify apps feature is turned on.
    securityRequireVerifyApps?: boolean | undefined;
    // Indicates whether or not to block Google Backup.
    storageBlockGoogleBackup?: boolean | undefined;
    // Indicates whether or not to block removable storage usage.
    storageBlockRemovableStorage?: boolean | undefined;
    // Indicates whether or not to require device encryption.
    storageRequireDeviceEncryption?: boolean | undefined;
    // Indicates whether or not to require removable storage encryption.
    storageRequireRemovableStorageEncryption?: boolean | undefined;
    // Indicates whether or not to block the use of the Voice Assistant.
    voiceAssistantBlocked?: boolean | undefined;
    // Indicates whether or not to block voice dialing.
    voiceDialingBlocked?: boolean | undefined;
    // Indicates whether or not to block the web browser's auto fill feature.
    webBrowserBlockAutofill?: boolean | undefined;
    // Indicates whether or not to block the web browser.
    webBrowserBlocked?: boolean | undefined;
    // Indicates whether or not to block JavaScript within the web browser.
    webBrowserBlockJavaScript?: boolean | undefined;
    // Indicates whether or not to block popups within the web browser.
    webBrowserBlockPopups?: boolean | undefined;
    /**
     * Cookie settings within the web browser. Possible values are: browserDefault, blockAlways, allowCurrentWebSite,
     * allowFromWebsitesVisited, allowAlways.
     */
    webBrowserCookieSettings?: WebBrowserCookieSettings | undefined;
    // Indicates whether or not to block syncing Wi-Fi.
    wiFiBlocked?: boolean | undefined;
}
export interface AndroidWorkProfileCompliancePolicy extends DeviceCompliancePolicy {
    // Require that devices have enabled device threat protection.
    deviceThreatProtectionEnabled?: boolean | undefined;
    /**
     * Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured,
     * low, medium, high, notSet.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    // Minimum Android security patch level.
    minAndroidSecurityPatchLevel?: NullableOption<string> | undefined;
    // Maximum Android version.
    osMaximumVersion?: NullableOption<string> | undefined;
    // Minimum Android version.
    osMinimumVersion?: NullableOption<string> | undefined;
    // Number of days before the password expires. Valid values 1 to 365
    passwordExpirationDays?: NullableOption<number> | undefined;
    // Minimum password length. Valid values 4 to 16
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // Number of previous passwords to block. Valid values 1 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Require a password to unlock device.
    passwordRequired?: boolean | undefined;
    /**
     * Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols,
     * lowSecurityBiometric, numeric, numericComplex, any.
     */
    passwordRequiredType?: AndroidRequiredPasswordType | undefined;
    // Devices must not be jailbroken or rooted.
    securityBlockJailbrokenDevices?: boolean | undefined;
    // Disable USB debugging on Android devices.
    securityDisableUsbDebugging?: boolean | undefined;
    // Require that devices disallow installation of apps from unknown sources.
    securityPreventInstallAppsFromUnknownSources?: boolean | undefined;
    // Require the device to pass the Company Portal client app runtime integrity check.
    securityRequireCompanyPortalAppIntegrity?: boolean | undefined;
    // Require Google Play Services to be installed and enabled on the device.
    securityRequireGooglePlayServices?: boolean | undefined;
    // Require the device to pass the SafetyNet basic integrity check.
    securityRequireSafetyNetAttestationBasicIntegrity?: boolean | undefined;
    // Require the device to pass the SafetyNet certified device check.
    securityRequireSafetyNetAttestationCertifiedDevice?: boolean | undefined;
    /**
     * Require the device to have up to date security providers. The device will require Google Play Services to be enabled
     * and up to date.
     */
    securityRequireUpToDateSecurityProviders?: boolean | undefined;
    // Require the Android Verify apps feature is turned on.
    securityRequireVerifyApps?: boolean | undefined;
    // Require encryption on Android devices.
    storageRequireEncryption?: boolean | undefined;
}
export interface AndroidWorkProfileCustomConfiguration extends DeviceConfiguration {
    // OMA settings. This collection can contain a maximum of 500 elements.
    omaSettings?: NullableOption<OmaSetting[]> | undefined;
}
export interface AndroidWorkProfileGeneralDeviceConfiguration extends DeviceConfiguration {
    // Indicates whether or not to block fingerprint unlock.
    passwordBlockFingerprintUnlock?: boolean | undefined;
    // Indicates whether or not to block Smart Lock and other trust agents.
    passwordBlockTrustAgents?: boolean | undefined;
    // Number of days before the password expires. Valid values 1 to 365
    passwordExpirationDays?: NullableOption<number> | undefined;
    // Minimum length of passwords. Valid values 4 to 16
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: NullableOption<number> | undefined;
    // Number of previous passwords to block. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    /**
     * Type of password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric,
     * numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols.
     */
    passwordRequiredType?: AndroidWorkProfileRequiredPasswordType | undefined;
    // Number of sign in failures allowed before factory reset. Valid values 1 to 16
    passwordSignInFailureCountBeforeFactoryReset?: NullableOption<number> | undefined;
    // Require the Android Verify apps feature is turned on.
    securityRequireVerifyApps?: boolean | undefined;
    // Block users from adding/removing accounts in work profile.
    workProfileBlockAddingAccounts?: boolean | undefined;
    // Block work profile camera.
    workProfileBlockCamera?: boolean | undefined;
    // Block display work profile caller ID in personal profile.
    workProfileBlockCrossProfileCallerId?: boolean | undefined;
    // Block work profile contacts availability in personal profile.
    workProfileBlockCrossProfileContactsSearch?: boolean | undefined;
    // Boolean that indicates if the setting disallow cross profile copy/paste is enabled.
    workProfileBlockCrossProfileCopyPaste?: boolean | undefined;
    // Indicates whether or not to block notifications while device locked.
    workProfileBlockNotificationsWhileDeviceLocked?: boolean | undefined;
    // Block screen capture in work profile.
    workProfileBlockScreenCapture?: boolean | undefined;
    // Allow bluetooth devices to access enterprise contacts.
    workProfileBluetoothEnableContactSharing?: boolean | undefined;
    /**
     * Type of data sharing that is allowed. Possible values are: deviceDefault, preventAny, allowPersonalToWork,
     * noRestrictions.
     */
    workProfileDataSharingType?: AndroidWorkProfileCrossProfileDataSharingType | undefined;
    // Type of password that is required. Possible values are: deviceDefault, prompt, autoGrant, autoDeny.
    workProfileDefaultAppPermissionPolicy?: AndroidWorkProfileDefaultAppPermissionPolicyType | undefined;
    // Indicates whether or not to block fingerprint unlock for work profile.
    workProfilePasswordBlockFingerprintUnlock?: boolean | undefined;
    // Indicates whether or not to block Smart Lock and other trust agents for work profile.
    workProfilePasswordBlockTrustAgents?: boolean | undefined;
    // Number of days before the work profile password expires. Valid values 1 to 365
    workProfilePasswordExpirationDays?: NullableOption<number> | undefined;
    // Minimum length of work profile password. Valid values 4 to 16
    workProfilePasswordMinimumLength?: NullableOption<number> | undefined;
    // Minimum # of letter characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinLetterCharacters?: NullableOption<number> | undefined;
    // Minimum # of lower-case characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinLowerCaseCharacters?: NullableOption<number> | undefined;
    // Minimum # of non-letter characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinNonLetterCharacters?: NullableOption<number> | undefined;
    // Minimum # of numeric characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinNumericCharacters?: NullableOption<number> | undefined;
    // Minimum # of symbols required in work profile password. Valid values 1 to 10
    workProfilePasswordMinSymbolCharacters?: NullableOption<number> | undefined;
    // Minimum # of upper-case characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinUpperCaseCharacters?: NullableOption<number> | undefined;
    // Minutes of inactivity before the screen times out.
    workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: NullableOption<number> | undefined;
    // Number of previous work profile passwords to block. Valid values 0 to 24
    workProfilePasswordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    /**
     * Type of work profile password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required,
     * atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols.
     */
    workProfilePasswordRequiredType?: AndroidWorkProfileRequiredPasswordType | undefined;
    // Number of sign in failures allowed before work profile is removed and all corporate data deleted. Valid values 1 to 16
    workProfilePasswordSignInFailureCountBeforeFactoryReset?: NullableOption<number> | undefined;
    // Password is required or not for work profile
    workProfileRequirePassword?: boolean | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface AppleDeviceFeaturesConfigurationBase extends DeviceConfiguration {}
export interface DeviceComplianceActionItem extends Entity {
    /**
     * What action to take. Possible values are: noAction, notification, block, retire, wipe, removeResourceAccessProfiles,
     * pushNotification, remoteLock.
     */
    actionType?: DeviceComplianceActionType | undefined;
    // Number of hours to wait till the action will be enforced. Valid values 0 to 8760
    gracePeriodHours?: number | undefined;
    // A list of group IDs to speicify who to CC this notification message to.
    notificationMessageCCList?: NullableOption<string[]> | undefined;
    // What notification Message template to use
    notificationTemplateId?: NullableOption<string> | undefined;
}
export interface DeviceComplianceDeviceOverview extends Entity {
    // Version of the policy for that overview
    configurationVersion?: number | undefined;
    // Number of error devices
    errorCount?: number | undefined;
    // Number of failed devices
    failedCount?: number | undefined;
    // Last update time
    lastUpdateDateTime?: string | undefined;
    // Number of not applicable devices
    notApplicableCount?: number | undefined;
    // Number of pending devices
    pendingCount?: number | undefined;
    // Number of succeeded devices
    successCount?: number | undefined;
}
export interface DeviceComplianceDeviceStatus extends Entity {
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string | undefined;
    // Device name of the DevicePolicyStatus.
    deviceDisplayName?: NullableOption<string> | undefined;
    // The device model that is being reported
    deviceModel?: NullableOption<string> | undefined;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string | undefined;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus | undefined;
    // The User Name that is being reported
    userName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface DeviceCompliancePolicyAssignment extends Entity {
    // Target for the compliance policy assignment.
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
export interface SettingStateDeviceSummary extends Entity {
    // Device Compliant count for the setting
    compliantDeviceCount?: number | undefined;
    // Device conflict error count for the setting
    conflictDeviceCount?: number | undefined;
    // Device error count for the setting
    errorDeviceCount?: number | undefined;
    // Name of the InstancePath for the setting
    instancePath?: NullableOption<string> | undefined;
    // Device NonCompliant count for the setting
    nonCompliantDeviceCount?: number | undefined;
    // Device Not Applicable count for the setting
    notApplicableDeviceCount?: number | undefined;
    // Device Compliant count for the setting
    remediatedDeviceCount?: number | undefined;
    // Name of the setting
    settingName?: NullableOption<string> | undefined;
    // Device Unkown count for the setting
    unknownDeviceCount?: number | undefined;
}
export interface DeviceComplianceScheduledActionForRule extends Entity {
    // Name of the rule which this scheduled action applies to.
    ruleName?: NullableOption<string> | undefined;
    // The list of scheduled action configurations for this compliance policy.
    scheduledActionConfigurations?: NullableOption<DeviceComplianceActionItem[]> | undefined;
}
export interface DeviceComplianceUserStatus extends Entity {
    // Devices count for that user.
    devicesCount?: number | undefined;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string | undefined;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus | undefined;
    // User name of the DevicePolicyStatus.
    userDisplayName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface DeviceComplianceUserOverview extends Entity {
    // Version of the policy for that overview
    configurationVersion?: number | undefined;
    // Number of error Users
    errorCount?: number | undefined;
    // Number of failed Users
    failedCount?: number | undefined;
    // Last update time
    lastUpdateDateTime?: string | undefined;
    // Number of not applicable users
    notApplicableCount?: number | undefined;
    // Number of pending Users
    pendingCount?: number | undefined;
    // Number of succeeded Users
    successCount?: number | undefined;
}
export interface DeviceComplianceSettingState extends Entity {
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string | undefined;
    // The Device Id that is being reported
    deviceId?: NullableOption<string> | undefined;
    // The device model that is being reported
    deviceModel?: NullableOption<string> | undefined;
    // The Device Name that is being reported
    deviceName?: NullableOption<string> | undefined;
    // The setting class name and property name.
    setting?: NullableOption<string> | undefined;
    // The Setting Name that is being reported
    settingName?: NullableOption<string> | undefined;
    /**
     * The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant,
     * error, conflict, notAssigned.
     */
    state?: ComplianceStatus | undefined;
    // The User email address that is being reported
    userEmail?: NullableOption<string> | undefined;
    // The user Id that is being reported
    userId?: NullableOption<string> | undefined;
    // The User Name that is being reported
    userName?: NullableOption<string> | undefined;
    // The User PrincipalName that is being reported
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface DeviceCompliancePolicyState extends Entity {
    // The name of the policy for this policyBase
    displayName?: NullableOption<string> | undefined;
    // Platform type that the policy applies to
    platformType?: PolicyPlatformType | undefined;
    // Count of how many setting a policy holds
    settingCount?: number | undefined;
    settingStates?: NullableOption<DeviceCompliancePolicySettingState[]> | undefined;
    // The compliance state of the policy
    state?: ComplianceStatus | undefined;
    // The version of the policy
    version?: number | undefined;
}
export interface DeviceConfigurationAssignment extends Entity {
    // The assignment target for the device configuration.
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
export interface DeviceConfigurationDeviceStatus extends Entity {
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string | undefined;
    // Device name of the DevicePolicyStatus.
    deviceDisplayName?: NullableOption<string> | undefined;
    // The device model that is being reported
    deviceModel?: NullableOption<string> | undefined;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string | undefined;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus | undefined;
    // The User Name that is being reported
    userName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface DeviceConfigurationDeviceOverview extends Entity {
    // Version of the policy for that overview
    configurationVersion?: number | undefined;
    // Number of error devices
    errorCount?: number | undefined;
    // Number of failed devices
    failedCount?: number | undefined;
    // Last update time
    lastUpdateDateTime?: string | undefined;
    // Number of not applicable devices
    notApplicableCount?: number | undefined;
    // Number of pending devices
    pendingCount?: number | undefined;
    // Number of succeeded devices
    successCount?: number | undefined;
}
export interface DeviceConfigurationUserStatus extends Entity {
    // Devices count for that user.
    devicesCount?: number | undefined;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string | undefined;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus | undefined;
    // User name of the DevicePolicyStatus.
    userDisplayName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface DeviceConfigurationUserOverview extends Entity {
    // Version of the policy for that overview
    configurationVersion?: number | undefined;
    // Number of error Users
    errorCount?: number | undefined;
    // Number of failed Users
    failedCount?: number | undefined;
    // Last update time
    lastUpdateDateTime?: string | undefined;
    // Number of not applicable users
    notApplicableCount?: number | undefined;
    // Number of pending Users
    pendingCount?: number | undefined;
    // Number of succeeded Users
    successCount?: number | undefined;
}
export interface DeviceConfigurationState extends Entity {
    // The name of the policy for this policyBase
    displayName?: NullableOption<string> | undefined;
    // Platform type that the policy applies to
    platformType?: PolicyPlatformType | undefined;
    // Count of how many setting a policy holds
    settingCount?: number | undefined;
    settingStates?: NullableOption<DeviceConfigurationSettingState[]> | undefined;
    // The compliance state of the policy
    state?: ComplianceStatus | undefined;
    // The version of the policy
    version?: number | undefined;
}
export interface EditionUpgradeConfiguration extends DeviceConfiguration {
    // Edition Upgrade License File Content.
    license?: NullableOption<string> | undefined;
    // Edition Upgrade License Type. Possible values are: productKey, licenseFile, notConfigured.
    licenseType?: EditionUpgradeLicenseType | undefined;
    // Edition Upgrade Product Key.
    productKey?: NullableOption<string> | undefined;
    /**
     * Edition Upgrade Target Edition. Possible values are: windows10Enterprise, windows10EnterpriseN, windows10Education,
     * windows10EducationN, windows10MobileEnterprise, windows10HolographicEnterprise, windows10Professional,
     * windows10ProfessionalN, windows10ProfessionalEducation, windows10ProfessionalEducationN,
     * windows10ProfessionalWorkstation, windows10ProfessionalWorkstationN, notConfigured, windows10Home, windows10HomeChina,
     * windows10HomeN, windows10HomeSingleLanguage, windows10Mobile, windows10IoTCore, windows10IoTCoreCommercial.
     */
    targetEdition?: Windows10EditionType | undefined;
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IosCertificateProfile extends DeviceConfiguration {}
// tslint:disable-next-line: interface-name
export interface IosCompliancePolicy extends DeviceCompliancePolicy {
    // Require that devices have enabled device threat protection .
    deviceThreatProtectionEnabled?: boolean | undefined;
    /**
     * Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured,
     * low, medium, high, notSet.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    // Indicates whether or not to require a managed email profile.
    managedEmailProfileRequired?: boolean | undefined;
    // Maximum IOS version.
    osMaximumVersion?: NullableOption<string> | undefined;
    // Minimum IOS version.
    osMinimumVersion?: NullableOption<string> | undefined;
    // Indicates whether or not to block simple passcodes.
    passcodeBlockSimple?: boolean | undefined;
    // Number of days before the passcode expires. Valid values 1 to 65535
    passcodeExpirationDays?: NullableOption<number> | undefined;
    // The number of character sets required in the password.
    passcodeMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // Minimum length of passcode. Valid values 4 to 14
    passcodeMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a passcode is required.
    passcodeMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // Number of previous passcodes to block. Valid values 1 to 24
    passcodePreviousPasscodeBlockCount?: NullableOption<number> | undefined;
    // Indicates whether or not to require a passcode.
    passcodeRequired?: boolean | undefined;
    // The required passcode type. Possible values are: deviceDefault, alphanumeric, numeric.
    passcodeRequiredType?: RequiredPasswordType | undefined;
    // Devices must not be jailbroken or rooted.
    securityBlockJailbrokenDevices?: boolean | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosCustomConfiguration extends DeviceConfiguration {
    // Payload. (UTF8 encoded byte array)
    payload?: number | undefined;
    // Payload file name (.mobileconfig
    payloadFileName?: NullableOption<string> | undefined;
    // Name that is displayed to the user.
    payloadName?: string | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase {
    // Asset tag information for the device, displayed on the login window and lock screen.
    assetTagTemplate?: NullableOption<string> | undefined;
    // A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements.
    homeScreenDockIcons?: NullableOption<IosHomeScreenItem[]> | undefined;
    // A list of pages on the Home Screen. This collection can contain a maximum of 500 elements.
    homeScreenPages?: NullableOption<IosHomeScreenPage[]> | undefined;
    // A footnote displayed on the login window and lock screen. Available in iOS 9.3.1 and later.
    lockScreenFootnote?: NullableOption<string> | undefined;
    /**
     * Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This
     * collection can contain a maximum of 500 elements.
     */
    notificationSettings?: NullableOption<IosNotificationSettings[]> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosGeneralDeviceConfiguration extends DeviceConfiguration {
    // Indicates whether or not to allow account modification when the device is in supervised mode.
    accountBlockModification?: boolean | undefined;
    // Indicates whether or not to allow activation lock when the device is in the supervised mode.
    activationLockAllowWhenSupervised?: boolean | undefined;
    // Indicates whether or not to allow AirDrop when the device is in supervised mode.
    airDropBlocked?: boolean | undefined;
    // Indicates whether or not to cause AirDrop to be considered an unmanaged drop target (iOS 9.0 and later).
    airDropForceUnmanagedDropTarget?: boolean | undefined;
    // Indicates whether or not to enforce all devices receiving AirPlay requests from this device to use a pairing password.
    airPlayForcePairingPasswordForOutgoingRequests?: boolean | undefined;
    // Indicates whether or not to block the user from using News when the device is in supervised mode (iOS 9.0 and later).
    appleNewsBlocked?: boolean | undefined;
    // Indicates whether or not to allow Apple Watch pairing when the device is in supervised mode (iOS 9.0 and later).
    appleWatchBlockPairing?: boolean | undefined;
    // Indicates whether or not to force a paired Apple Watch to use Wrist Detection (iOS 8.2 and later).
    appleWatchForceWristDetection?: boolean | undefined;
    /**
     * Gets or sets the list of iOS apps allowed to autonomously enter Single App Mode. Supervised only. iOS 7.0 and later.
     * This collection can contain a maximum of 500 elements.
     */
    appsSingleAppModeList?: NullableOption<AppListItem[]> | undefined;
    /**
     * Indicates whether or not to block the automatic downloading of apps purchased on other devices when the device is in
     * supervised mode (iOS 9.0 and later).
     */
    appStoreBlockAutomaticDownloads?: boolean | undefined;
    // Indicates whether or not to block the user from using the App Store. Requires a supervised device for iOS 13 and later.
    appStoreBlocked?: boolean | undefined;
    // Indicates whether or not to block the user from making in app purchases.
    appStoreBlockInAppPurchases?: boolean | undefined;
    /**
     * Indicates whether or not to block the App Store app, not restricting installation through Host apps. Applies to
     * supervised mode only (iOS 9.0 and later).
     */
    appStoreBlockUIAppInstallation?: boolean | undefined;
    // Indicates whether or not to require a password when using the app store.
    appStoreRequirePassword?: boolean | undefined;
    /**
     * List of apps in the visibility list (either visible/launchable apps list or hidden/unlaunchable apps list, controlled
     * by AppsVisibilityListType) (iOS 9.3 and later). This collection can contain a maximum of 10000 elements.
     */
    appsVisibilityList?: NullableOption<AppListItem[]> | undefined;
    // Type of list that is in the AppsVisibilityList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    appsVisibilityListType?: AppListType | undefined;
    /**
     * Indicates whether or not to allow modification of Bluetooth settings when the device is in supervised mode (iOS 10.0
     * and later).
     */
    bluetoothBlockModification?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from accessing the camera of the device. Requires a supervised device for
     * iOS 13 and later.
     */
    cameraBlocked?: boolean | undefined;
    // Indicates whether or not to block data roaming.
    cellularBlockDataRoaming?: boolean | undefined;
    // Indicates whether or not to block global background fetch while roaming.
    cellularBlockGlobalBackgroundFetchWhileRoaming?: boolean | undefined;
    // Indicates whether or not to allow changes to cellular app data usage settings when the device is in supervised mode.
    cellularBlockPerAppDataModification?: boolean | undefined;
    // Indicates whether or not to block Personal Hotspot.
    cellularBlockPersonalHotspot?: boolean | undefined;
    // Indicates whether or not to block voice roaming.
    cellularBlockVoiceRoaming?: boolean | undefined;
    // Indicates whether or not to block untrusted TLS certificates.
    certificatesBlockUntrustedTlsCertificates?: boolean | undefined;
    /**
     * Indicates whether or not to allow remote screen observation by Classroom app when the device is in supervised mode (iOS
     * 9.3 and later).
     */
    classroomAppBlockRemoteScreenObservation?: boolean | undefined;
    /**
     * Indicates whether or not to automatically give permission to the teacher of a managed course on the Classroom app to
     * view a student's screen without prompting when the device is in supervised mode.
     */
    classroomAppForceUnpromptedScreenObservation?: boolean | undefined;
    // List that is in the AppComplianceList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    compliantAppListType?: AppListType | undefined;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection
     * can contain a maximum of 10000 elements.
     */
    compliantAppsList?: NullableOption<AppListItem[]> | undefined;
    /**
     * Indicates whether or not to block the user from installing configuration profiles and certificates interactively when
     * the device is in supervised mode.
     */
    configurationProfileBlockChanges?: boolean | undefined;
    // Indicates whether or not to block definition lookup when the device is in supervised mode (iOS 8.1.3 and later ).
    definitionLookupBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to allow the user to enables restrictions in the device settings when the device is in
     * supervised mode.
     */
    deviceBlockEnableRestrictions?: boolean | undefined;
    /**
     * Indicates whether or not to allow the use of the 'Erase all content and settings' option on the device when the device
     * is in supervised mode.
     */
    deviceBlockEraseContentAndSettings?: boolean | undefined;
    // Indicates whether or not to allow device name modification when the device is in supervised mode (iOS 9.0 and later).
    deviceBlockNameModification?: boolean | undefined;
    // Indicates whether or not to block diagnostic data submission.
    diagnosticDataBlockSubmission?: boolean | undefined;
    /**
     * Indicates whether or not to allow diagnostics submission settings modification when the device is in supervised mode
     * (iOS 9.3.2 and later).
     */
    diagnosticDataBlockSubmissionModification?: boolean | undefined;
    // Indicates whether or not to block the user from viewing managed documents in unmanaged apps.
    documentsBlockManagedDocumentsInUnmanagedApps?: boolean | undefined;
    // Indicates whether or not to block the user from viewing unmanaged documents in managed apps.
    documentsBlockUnmanagedDocumentsInManagedApps?: boolean | undefined;
    // An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
    emailInDomainSuffixes?: NullableOption<string[]> | undefined;
    // Indicates whether or not to block the user from trusting an enterprise app.
    enterpriseAppBlockTrust?: boolean | undefined;
    // [Deprecated] Configuring this setting and setting the value to 'true' has no effect on the device.
    enterpriseAppBlockTrustModification?: boolean | undefined;
    // Indicates whether or not to block the user from using FaceTime. Requires a supervised device for iOS 13 and later.
    faceTimeBlocked?: boolean | undefined;
    // Indicates whether or not to block changes to Find My Friends when the device is in supervised mode.
    findMyFriendsBlocked?: boolean | undefined;
    // Indicates whether or not to block the user from using Game Center when the device is in supervised mode.
    gameCenterBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from having friends in Game Center. Requires a supervised device for iOS 13
     * and later.
     */
    gamingBlockGameCenterFriends?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from using multiplayer gaming. Requires a supervised device for iOS 13 and
     * later.
     */
    gamingBlockMultiplayer?: boolean | undefined;
    /**
     * indicates whether or not to allow host pairing to control the devices an iOS device can pair with when the iOS device
     * is in supervised mode.
     */
    hostPairingBlocked?: boolean | undefined;
    // Indicates whether or not to block the user from using the iBooks Store when the device is in supervised mode.
    iBooksStoreBlocked?: boolean | undefined;
    // Indicates whether or not to block the user from downloading media from the iBookstore that has been tagged as erotica.
    iBooksStoreBlockErotica?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from continuing work they started on iOS device to another iOS or macOS
     * device.
     */
    iCloudBlockActivityContinuation?: boolean | undefined;
    // Indicates whether or not to block iCloud backup. Requires a supervised device for iOS 13 and later.
    iCloudBlockBackup?: boolean | undefined;
    // Indicates whether or not to block iCloud document sync. Requires a supervised device for iOS 13 and later.
    iCloudBlockDocumentSync?: boolean | undefined;
    // Indicates whether or not to block Managed Apps Cloud Sync.
    iCloudBlockManagedAppsSync?: boolean | undefined;
    // Indicates whether or not to block iCloud Photo Library.
    iCloudBlockPhotoLibrary?: boolean | undefined;
    // Indicates whether or not to block iCloud Photo Stream Sync.
    iCloudBlockPhotoStreamSync?: boolean | undefined;
    // Indicates whether or not to block Shared Photo Stream.
    iCloudBlockSharedPhotoStream?: boolean | undefined;
    // Indicates whether or not to require backups to iCloud be encrypted.
    iCloudRequireEncryptedBackup?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from accessing explicit content in iTunes and the App Store. Requires a
     * supervised device for iOS 13 and later.
     */
    iTunesBlockExplicitContent?: boolean | undefined;
    /**
     * Indicates whether or not to block Music service and revert Music app to classic mode when the device is in supervised
     * mode (iOS 9.3 and later and macOS 10.12 and later).
     */
    iTunesBlockMusicService?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from using iTunes Radio when the device is in supervised mode (iOS 9.3 and
     * later).
     */
    iTunesBlockRadio?: boolean | undefined;
    // Indicates whether or not to block keyboard auto-correction when the device is in supervised mode (iOS 8.1.3 and later).
    keyboardBlockAutoCorrect?: boolean | undefined;
    // Indicates whether or not to block the user from using dictation input when the device is in supervised mode.
    keyboardBlockDictation?: boolean | undefined;
    // Indicates whether or not to block predictive keyboards when device is in supervised mode (iOS 8.1.3 and later).
    keyboardBlockPredictive?: boolean | undefined;
    // Indicates whether or not to block keyboard shortcuts when the device is in supervised mode (iOS 9.0 and later).
    keyboardBlockShortcuts?: boolean | undefined;
    // Indicates whether or not to block keyboard spell-checking when the device is in supervised mode (iOS 8.1.3 and later).
    keyboardBlockSpellCheck?: boolean | undefined;
    // Indicates whether or not to allow assistive speak while in kiosk mode.
    kioskModeAllowAssistiveSpeak?: boolean | undefined;
    // Indicates whether or not to allow access to the Assistive Touch Settings while in kiosk mode.
    kioskModeAllowAssistiveTouchSettings?: boolean | undefined;
    /**
     * Indicates whether or not to allow device auto lock while in kiosk mode. This property's functionality is redundant with
     * the OS default and is deprecated. Use KioskModeBlockAutoLock instead.
     */
    kioskModeAllowAutoLock?: boolean | undefined;
    // Indicates whether or not to allow access to the Color Inversion Settings while in kiosk mode.
    kioskModeAllowColorInversionSettings?: boolean | undefined;
    /**
     * Indicates whether or not to allow use of the ringer switch while in kiosk mode. This property's functionality is
     * redundant with the OS default and is deprecated. Use KioskModeBlockRingerSwitch instead.
     */
    kioskModeAllowRingerSwitch?: boolean | undefined;
    /**
     * Indicates whether or not to allow screen rotation while in kiosk mode. This property's functionality is redundant with
     * the OS default and is deprecated. Use KioskModeBlockScreenRotation instead.
     */
    kioskModeAllowScreenRotation?: boolean | undefined;
    /**
     * Indicates whether or not to allow use of the sleep button while in kiosk mode. This property's functionality is
     * redundant with the OS default and is deprecated. Use KioskModeBlockSleepButton instead.
     */
    kioskModeAllowSleepButton?: boolean | undefined;
    /**
     * Indicates whether or not to allow use of the touchscreen while in kiosk mode. This property's functionality is
     * redundant with the OS default and is deprecated. Use KioskModeBlockTouchscreen instead.
     */
    kioskModeAllowTouchscreen?: boolean | undefined;
    // Indicates whether or not to allow access to the voice over settings while in kiosk mode.
    kioskModeAllowVoiceOverSettings?: boolean | undefined;
    /**
     * Indicates whether or not to allow use of the volume buttons while in kiosk mode. This property's functionality is
     * redundant with the OS default and is deprecated. Use KioskModeBlockVolumeButtons instead.
     */
    kioskModeAllowVolumeButtons?: boolean | undefined;
    // Indicates whether or not to allow access to the zoom settings while in kiosk mode.
    kioskModeAllowZoomSettings?: boolean | undefined;
    // URL in the app store to the app to use for kiosk mode. Use if KioskModeManagedAppId is not known.
    kioskModeAppStoreUrl?: NullableOption<string> | undefined;
    // ID for built-in apps to use for kiosk mode. Used when KioskModeManagedAppId and KioskModeAppStoreUrl are not set.
    kioskModeBuiltInAppId?: NullableOption<string> | undefined;
    /**
     * Managed app id of the app to use for kiosk mode. If KioskModeManagedAppId is specified then KioskModeAppStoreUrl will
     * be ignored.
     */
    kioskModeManagedAppId?: NullableOption<string> | undefined;
    // Indicates whether or not to require assistive touch while in kiosk mode.
    kioskModeRequireAssistiveTouch?: boolean | undefined;
    // Indicates whether or not to require color inversion while in kiosk mode.
    kioskModeRequireColorInversion?: boolean | undefined;
    // Indicates whether or not to require mono audio while in kiosk mode.
    kioskModeRequireMonoAudio?: boolean | undefined;
    // Indicates whether or not to require voice over while in kiosk mode.
    kioskModeRequireVoiceOver?: boolean | undefined;
    // Indicates whether or not to require zoom while in kiosk mode.
    kioskModeRequireZoom?: boolean | undefined;
    // Indicates whether or not to block the user from using control center on the lock screen.
    lockScreenBlockControlCenter?: boolean | undefined;
    // Indicates whether or not to block the user from using the notification view on the lock screen.
    lockScreenBlockNotificationView?: boolean | undefined;
    // Indicates whether or not to block the user from using passbook when the device is locked.
    lockScreenBlockPassbook?: boolean | undefined;
    // Indicates whether or not to block the user from using the Today View on the lock screen.
    lockScreenBlockTodayView?: boolean | undefined;
    /**
     * Media content rating settings for Apps. Possible values are: allAllowed, allBlocked, agesAbove4, agesAbove9,
     * agesAbove12, agesAbove17.
     */
    mediaContentRatingApps?: RatingAppsType | undefined;
    // Media content rating settings for Australia
    mediaContentRatingAustralia?: NullableOption<MediaContentRatingAustralia> | undefined;
    // Media content rating settings for Canada
    mediaContentRatingCanada?: NullableOption<MediaContentRatingCanada> | undefined;
    // Media content rating settings for France
    mediaContentRatingFrance?: NullableOption<MediaContentRatingFrance> | undefined;
    // Media content rating settings for Germany
    mediaContentRatingGermany?: NullableOption<MediaContentRatingGermany> | undefined;
    // Media content rating settings for Ireland
    mediaContentRatingIreland?: NullableOption<MediaContentRatingIreland> | undefined;
    // Media content rating settings for Japan
    mediaContentRatingJapan?: NullableOption<MediaContentRatingJapan> | undefined;
    // Media content rating settings for New Zealand
    mediaContentRatingNewZealand?: NullableOption<MediaContentRatingNewZealand> | undefined;
    // Media content rating settings for United Kingdom
    mediaContentRatingUnitedKingdom?: NullableOption<MediaContentRatingUnitedKingdom> | undefined;
    // Media content rating settings for United States
    mediaContentRatingUnitedStates?: NullableOption<MediaContentRatingUnitedStates> | undefined;
    // Indicates whether or not to block the user from using the Messages app on the supervised device.
    messagesBlocked?: boolean | undefined;
    /**
     * List of managed apps and the network rules that applies to them. This collection can contain a maximum of 1000
     * elements.
     */
    networkUsageRules?: NullableOption<IosNetworkUsageRule[]> | undefined;
    // Indicates whether or not to allow notifications settings modification (iOS 9.3 and later).
    notificationsBlockSettingsModification?: boolean | undefined;
    // Block modification of registered Touch ID fingerprints when in supervised mode.
    passcodeBlockFingerprintModification?: boolean | undefined;
    // Indicates whether or not to block fingerprint unlock.
    passcodeBlockFingerprintUnlock?: boolean | undefined;
    // Indicates whether or not to allow passcode modification on the supervised device (iOS 9.0 and later).
    passcodeBlockModification?: boolean | undefined;
    // Indicates whether or not to block simple passcodes.
    passcodeBlockSimple?: boolean | undefined;
    // Number of days before the passcode expires. Valid values 1 to 65535
    passcodeExpirationDays?: NullableOption<number> | undefined;
    // Number of character sets a passcode must contain. Valid values 0 to 4
    passcodeMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // Minimum length of passcode. Valid values 4 to 14
    passcodeMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a passcode is required.
    passcodeMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // Minutes of inactivity before the screen times out.
    passcodeMinutesOfInactivityBeforeScreenTimeout?: NullableOption<number> | undefined;
    // Number of previous passcodes to block. Valid values 1 to 24
    passcodePreviousPasscodeBlockCount?: NullableOption<number> | undefined;
    // Indicates whether or not to require a passcode.
    passcodeRequired?: boolean | undefined;
    // Type of passcode that is required. Possible values are: deviceDefault, alphanumeric, numeric.
    passcodeRequiredType?: RequiredPasswordType | undefined;
    // Number of sign in failures allowed before wiping the device. Valid values 2 to 11
    passcodeSignInFailureCountBeforeWipe?: NullableOption<number> | undefined;
    // Indicates whether or not to block the user from using podcasts on the supervised device (iOS 8.0 and later).
    podcastsBlocked?: boolean | undefined;
    /**
     * Indicates whether or not to block the user from using Auto fill in Safari. Requires a supervised device for iOS 13 and
     * later.
     */
    safariBlockAutofill?: boolean | undefined;
    // Indicates whether or not to block the user from using Safari. Requires a supervised device for iOS 13 and later.
    safariBlocked?: boolean | undefined;
    // Indicates whether or not to block JavaScript in Safari.
    safariBlockJavaScript?: boolean | undefined;
    // Indicates whether or not to block popups in Safari.
    safariBlockPopups?: boolean | undefined;
    /**
     * Cookie settings for Safari. Possible values are: browserDefault, blockAlways, allowCurrentWebSite,
     * allowFromWebsitesVisited, allowAlways.
     */
    safariCookieSettings?: WebBrowserCookieSettings | undefined;
    // URLs matching the patterns listed here will be considered managed.
    safariManagedDomains?: NullableOption<string[]> | undefined;
    /**
     * Users can save passwords in Safari only from URLs matching the patterns listed here. Applies to devices in supervised
     * mode (iOS 9.3 and later).
     */
    safariPasswordAutoFillDomains?: NullableOption<string[]> | undefined;
    // Indicates whether or not to require fraud warning in Safari.
    safariRequireFraudWarning?: boolean | undefined;
    // Indicates whether or not to block the user from taking Screenshots.
    screenCaptureBlocked?: boolean | undefined;
    // Indicates whether or not to block the user from using Siri.
    siriBlocked?: boolean | undefined;
    // Indicates whether or not to block the user from using Siri when locked.
    siriBlockedWhenLocked?: boolean | undefined;
    // Indicates whether or not to block Siri from querying user-generated content when used on a supervised device.
    siriBlockUserGeneratedContent?: boolean | undefined;
    // Indicates whether or not to prevent Siri from dictating, or speaking profane language on supervised device.
    siriRequireProfanityFilter?: boolean | undefined;
    // Indicates whether or not to block Spotlight search from returning internet results on supervised device.
    spotlightBlockInternetResults?: boolean | undefined;
    // Indicates whether or not to block voice dialing.
    voiceDialingBlocked?: boolean | undefined;
    // Indicates whether or not to allow wallpaper modification on supervised device (iOS 9.0 and later) .
    wallpaperBlockModification?: boolean | undefined;
    /**
     * Indicates whether or not to force the device to use only Wi-Fi networks from configuration profiles when the device is
     * in supervised mode. Available for devices running iOS and iPadOS versions 14.4 and earlier. Devices running 14.5+
     * should use the setting, 'WiFiConnectToAllowedNetworksOnlyForced.
     */
    wiFiConnectOnlyToConfiguredNetworks?: boolean | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosUpdateConfiguration extends DeviceConfiguration {
    // Active Hours End (active hours mean the time window when updates install should not happen)
    activeHoursEnd?: string | undefined;
    // Active Hours Start (active hours mean the time window when updates install should not happen)
    activeHoursStart?: string | undefined;
    // Days in week for which active hours are configured. This collection can contain a maximum of 7 elements.
    scheduledInstallDays?: DayOfWeek[] | undefined;
    // UTC Time Offset indicated in minutes
    utcTimeOffsetInMinutes?: NullableOption<number> | undefined;
}
export interface MacOSCompliancePolicy extends DeviceCompliancePolicy {
    // Require that devices have enabled device threat protection.
    deviceThreatProtectionEnabled?: boolean | undefined;
    /**
     * Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured,
     * low, medium, high, notSet.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel | undefined;
    // Corresponds to the 'Block all incoming connections' option.
    firewallBlockAllIncoming?: boolean | undefined;
    // Whether the firewall should be enabled or not.
    firewallEnabled?: boolean | undefined;
    // Corresponds to 'Enable stealth mode.'
    firewallEnableStealthMode?: boolean | undefined;
    // Maximum MacOS version.
    osMaximumVersion?: NullableOption<string> | undefined;
    // Minimum MacOS version.
    osMinimumVersion?: NullableOption<string> | undefined;
    // Indicates whether or not to block simple passwords.
    passwordBlockSimple?: boolean | undefined;
    // Number of days before the password expires. Valid values 1 to 65535
    passwordExpirationDays?: NullableOption<number> | undefined;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // Minimum length of password. Valid values 4 to 14
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // Number of previous passwords to block. Valid values 1 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Whether or not to require a password.
    passwordRequired?: boolean | undefined;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
    // Require encryption on Mac OS devices.
    storageRequireEncryption?: boolean | undefined;
    // Require that devices have enabled system integrity protection.
    systemIntegrityProtectionEnabled?: boolean | undefined;
}
export interface MacOSCustomConfiguration extends DeviceConfiguration {
    // Payload. (UTF8 encoded byte array)
    payload?: number | undefined;
    // Payload file name (.mobileconfig
    payloadFileName?: NullableOption<string> | undefined;
    // Name that is displayed to the user.
    payloadName?: string | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface MacOSDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase {}
export interface MacOSGeneralDeviceConfiguration extends DeviceConfiguration {
    // List that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    compliantAppListType?: AppListType | undefined;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection
     * can contain a maximum of 10000 elements.
     */
    compliantAppsList?: NullableOption<AppListItem[]> | undefined;
    // An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
    emailInDomainSuffixes?: NullableOption<string[]> | undefined;
    // Block simple passwords.
    passwordBlockSimple?: boolean | undefined;
    // Number of days before the password expires.
    passwordExpirationDays?: NullableOption<number> | undefined;
    // Number of character sets a password must contain. Valid values 0 to 4
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // Minimum length of passwords.
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity required before a password is required.
    passwordMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // Minutes of inactivity required before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: NullableOption<number> | undefined;
    // Number of previous passwords to block.
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Whether or not to require a password.
    passwordRequired?: boolean | undefined;
    // Type of password that is required. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
}
export interface ReportRoot extends Entity {
    dailyPrintUsageByPrinter?: NullableOption<PrintUsageByPrinter[]> | undefined;
    dailyPrintUsageByUser?: NullableOption<PrintUsageByUser[]> | undefined;
    monthlyPrintUsageByPrinter?: NullableOption<PrintUsageByPrinter[]> | undefined;
    monthlyPrintUsageByUser?: NullableOption<PrintUsageByUser[]> | undefined;
}
export interface PrintUsage extends Entity {
    completedBlackAndWhiteJobCount?: number | undefined;
    completedColorJobCount?: number | undefined;
    incompleteJobCount?: number | undefined;
    usageDate?: string | undefined;
}
export interface PrintUsageByPrinter extends PrintUsage {
    printerId?: string | undefined;
}
export interface PrintUsageByUser extends PrintUsage {
    // The UPN of the user represented by these statistics.
    userPrincipalName?: string | undefined;
}
export interface SharedPCConfiguration extends DeviceConfiguration {
    // Specifies how accounts are managed on a shared PC. Only applies when disableAccountManager is false.
    accountManagerPolicy?: NullableOption<SharedPCAccountManagerPolicy> | undefined;
    // Indicates which type of accounts are allowed to use on a shared PC. Possible values are: notConfigured, guest, domain.
    allowedAccounts?: SharedPCAllowedAccountType | undefined;
    // Specifies whether local storage is allowed on a shared PC.
    allowLocalStorage?: boolean | undefined;
    // Disables the account manager for shared PC mode.
    disableAccountManager?: boolean | undefined;
    /**
     * Specifies whether the default shared PC education environment policies should be disabled. For Windows 10 RS2 and
     * later, this policy will be applied without setting Enabled to true.
     */
    disableEduPolicies?: boolean | undefined;
    // Specifies whether the default shared PC power policies should be disabled.
    disablePowerPolicies?: boolean | undefined;
    // Disables the requirement to sign in whenever the device wakes up from sleep mode.
    disableSignInOnResume?: boolean | undefined;
    // Enables shared PC mode and applies the shared pc policies.
    enabled?: boolean | undefined;
    /**
     * Specifies the time in seconds that a device must sit idle before the PC goes to sleep. Setting this value to 0 prevents
     * the sleep timeout from occurring.
     */
    idleTimeBeforeSleepInSeconds?: NullableOption<number> | undefined;
    /**
     * Specifies the display text for the account shown on the sign-in screen which launches the app specified by
     * SetKioskAppUserModelId. Only applies when KioskAppUserModelId is set.
     */
    kioskAppDisplayName?: NullableOption<string> | undefined;
    // Specifies the application user model ID of the app to use with assigned access.
    kioskAppUserModelId?: NullableOption<string> | undefined;
    // Specifies the daily start time of maintenance hour.
    maintenanceStartTime?: NullableOption<string> | undefined;
}
export interface Windows10CompliancePolicy extends DeviceCompliancePolicy {
    // Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled
    bitLockerEnabled?: boolean | undefined;
    // Require devices to be reported as healthy by Windows Device Health Attestation.
    codeIntegrityEnabled?: boolean | undefined;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is
     * enabled.
     */
    earlyLaunchAntiMalwareDriverEnabled?: boolean | undefined;
    // Maximum Windows Phone version.
    mobileOsMaximumVersion?: NullableOption<string> | undefined;
    // Minimum Windows Phone version.
    mobileOsMinimumVersion?: NullableOption<string> | undefined;
    // Maximum Windows 10 version.
    osMaximumVersion?: NullableOption<string> | undefined;
    // Minimum Windows 10 version.
    osMinimumVersion?: NullableOption<string> | undefined;
    // Indicates whether or not to block simple password.
    passwordBlockSimple?: boolean | undefined;
    // The password expiration in days.
    passwordExpirationDays?: NullableOption<number> | undefined;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // The minimum password length.
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // The number of previous passwords to prevent re-use of.
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Require a password to unlock Windows device.
    passwordRequired?: boolean | undefined;
    // Require a password to unlock an idle device.
    passwordRequiredToUnlockFromIdle?: boolean | undefined;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
    // Require devices to be reported as healthy by Windows Device Health Attestation.
    requireHealthyDeviceReport?: boolean | undefined;
    // Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled.
    secureBootEnabled?: boolean | undefined;
    // Require encryption on windows devices.
    storageRequireEncryption?: boolean | undefined;
}
export interface Windows10CustomConfiguration extends DeviceConfiguration {
    // OMA settings. This collection can contain a maximum of 1000 elements.
    omaSettings?: NullableOption<OmaSetting[]> | undefined;
}
export interface Windows10EndpointProtectionConfiguration extends DeviceConfiguration {
    // Allow persisting user generated data inside the App Guard Containter (favorites, cookies, web passwords, etc.)
    applicationGuardAllowPersistence?: boolean | undefined;
    // Allow printing to Local Printers from Container
    applicationGuardAllowPrintToLocalPrinters?: boolean | undefined;
    // Allow printing to Network Printers from Container
    applicationGuardAllowPrintToNetworkPrinters?: boolean | undefined;
    // Allow printing to PDF from Container
    applicationGuardAllowPrintToPDF?: boolean | undefined;
    // Allow printing to XPS from Container
    applicationGuardAllowPrintToXPS?: boolean | undefined;
    /**
     * Block clipboard to share data from Host to Container, or from Container to Host, or both ways, or neither ways.
     * Possible values are: notConfigured, blockBoth, blockHostToContainer, blockContainerToHost, blockNone.
     */
    applicationGuardBlockClipboardSharing?: ApplicationGuardBlockClipboardSharingType | undefined;
    /**
     * Block clipboard to transfer image file, text file or neither of them. Possible values are: notConfigured,
     * blockImageAndTextFile, blockImageFile, blockNone, blockTextFile.
     */
    applicationGuardBlockFileTransfer?: ApplicationGuardBlockFileTransferType | undefined;
    // Block enterprise sites to load non-enterprise content, such as third party plug-ins
    applicationGuardBlockNonEnterpriseContent?: boolean | undefined;
    // Enable Windows Defender Application Guard
    applicationGuardEnabled?: boolean | undefined;
    /**
     * Force auditing will persist Windows logs and events to meet security/compliance criteria (sample events are user
     * login-logoff, use of privilege rights, software installation, system changes, etc.)
     */
    applicationGuardForceAuditing?: boolean | undefined;
    /**
     * Enables the Admin to choose what types of app to allow on devices. Possible values are: notConfigured,
     * enforceComponentsAndStoreApps, auditComponentsAndStoreApps, enforceComponentsStoreAppsAndSmartlocker,
     * auditComponentsStoreAppsAndSmartlocker.
     */
    appLockerApplicationControl?: AppLockerApplicationControlType | undefined;
    // Allows the Admin to disable the warning prompt for other disk encryption on the user machines.
    bitLockerDisableWarningForOtherDiskEncryption?: boolean | undefined;
    // Allows the admin to require encryption to be turned on using BitLocker. This policy is valid only for a mobile SKU.
    bitLockerEnableStorageCardEncryptionOnMobile?: boolean | undefined;
    // Allows the admin to require encryption to be turned on using BitLocker.
    bitLockerEncryptDevice?: boolean | undefined;
    // BitLocker Removable Drive Policy.
    bitLockerRemovableDrivePolicy?: NullableOption<BitLockerRemovableDrivePolicy> | undefined;
    // List of folder paths to be added to the list of protected folders
    defenderAdditionalGuardedFolders?: NullableOption<string[]> | undefined;
    // List of exe files and folders to be excluded from attack surface reduction rules
    defenderAttackSurfaceReductionExcludedPaths?: NullableOption<string[]> | undefined;
    // Xml content containing information regarding exploit protection details.
    defenderExploitProtectionXml?: NullableOption<number> | undefined;
    // Name of the file from which DefenderExploitProtectionXml was obtained.
    defenderExploitProtectionXmlFileName?: NullableOption<string> | undefined;
    // List of paths to exe that are allowed to access protected folders
    defenderGuardedFoldersAllowedAppPaths?: NullableOption<string[]> | undefined;
    // Indicates whether or not to block user from overriding Exploit Protection settings.
    defenderSecurityCenterBlockExploitProtectionOverride?: boolean | undefined;
    // Blocks stateful FTP connections to the device
    firewallBlockStatefulFTP?: NullableOption<boolean> | undefined;
    /**
     * Specify how the certificate revocation list is to be enforced. Possible values are: deviceDefault, none, attempt,
     * require.
     */
    firewallCertificateRevocationListCheckMethod?: FirewallCertificateRevocationListCheckMethodType | undefined;
    /**
     * Configures the idle timeout for security associations, in seconds, from 300 to 3600 inclusive. This is the period after
     * which security associations will expire and be deleted. Valid values 300 to 3600
     */
    firewallIdleTimeoutForSecurityAssociationInSeconds?: NullableOption<number> | undefined;
    // Configures IPSec exemptions to allow both IPv4 and IPv6 DHCP traffic
    firewallIPSecExemptionsAllowDHCP?: boolean | undefined;
    // Configures IPSec exemptions to allow ICMP
    firewallIPSecExemptionsAllowICMP?: boolean | undefined;
    // Configures IPSec exemptions to allow neighbor discovery IPv6 ICMP type-codes
    firewallIPSecExemptionsAllowNeighborDiscovery?: boolean | undefined;
    // Configures IPSec exemptions to allow router discovery IPv6 ICMP type-codes
    firewallIPSecExemptionsAllowRouterDiscovery?: boolean | undefined;
    /**
     * If an authentication set is not fully supported by a keying module, direct the module to ignore only unsupported
     * authentication suites rather than the entire set
     */
    firewallMergeKeyingModuleSettings?: NullableOption<boolean> | undefined;
    /**
     * Configures how packet queueing should be applied in the tunnel gateway scenario. Possible values are: deviceDefault,
     * disabled, queueInbound, queueOutbound, queueBoth.
     */
    firewallPacketQueueingMethod?: FirewallPacketQueueingMethodType | undefined;
    // Select the preshared key encoding to be used. Possible values are: deviceDefault, none, utF8.
    firewallPreSharedKeyEncodingMethod?: FirewallPreSharedKeyEncodingMethodType | undefined;
    // Configures the firewall profile settings for domain networks
    firewallProfileDomain?: NullableOption<WindowsFirewallNetworkProfile> | undefined;
    // Configures the firewall profile settings for private networks
    firewallProfilePrivate?: NullableOption<WindowsFirewallNetworkProfile> | undefined;
    // Configures the firewall profile settings for public networks
    firewallProfilePublic?: NullableOption<WindowsFirewallNetworkProfile> | undefined;
    // Allows IT Admins to control whether users can can ignore SmartScreen warnings and run malicious files.
    smartScreenBlockOverrideForFiles?: boolean | undefined;
    // Allows IT Admins to configure SmartScreen for Windows.
    smartScreenEnableInShell?: boolean | undefined;
}
export interface Windows10EnterpriseModernAppManagementConfiguration extends DeviceConfiguration {
    // Indicates whether or not to uninstall a fixed list of built-in Windows apps.
    uninstallBuiltInApps?: boolean | undefined;
}
export interface Windows10GeneralConfiguration extends DeviceConfiguration {
    /**
     * Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a
     * Microsoft account.
     */
    accountsBlockAddingNonMicrosoftAccountEmail?: boolean | undefined;
    // Indicates whether or not to block the user from selecting an AntiTheft mode preference (Windows 10 Mobile only).
    antiTheftModeBlocked?: boolean | undefined;
    /**
     * Indicates whether apps from AppX packages signed with a trusted certificate can be side loaded. Possible values are:
     * notConfigured, blocked, allowed.
     */
    appsAllowTrustedAppsSideloading?: StateManagementSetting | undefined;
    /**
     * Indicates whether or not to disable the launch of all apps from Windows Store that came pre-installed or were
     * downloaded.
     */
    appsBlockWindowsStoreOriginatedApps?: boolean | undefined;
    // Specify a list of allowed Bluetooth services and profiles in hex formatted strings.
    bluetoothAllowedServices?: NullableOption<string[]> | undefined;
    // Whether or not to Block the user from using bluetooth advertising.
    bluetoothBlockAdvertising?: boolean | undefined;
    // Whether or not to Block the user from using bluetooth discoverable mode.
    bluetoothBlockDiscoverableMode?: boolean | undefined;
    // Whether or not to Block the user from using bluetooth.
    bluetoothBlocked?: boolean | undefined;
    // Whether or not to block specific bundled Bluetooth peripherals to automatically pair with the host device.
    bluetoothBlockPrePairing?: boolean | undefined;
    // Whether or not to Block the user from accessing the camera of the device.
    cameraBlocked?: boolean | undefined;
    // Whether or not to Block the user from using data over cellular while roaming.
    cellularBlockDataWhenRoaming?: boolean | undefined;
    // Whether or not to Block the user from using VPN over cellular.
    cellularBlockVpn?: boolean | undefined;
    // Whether or not to Block the user from using VPN when roaming over cellular.
    cellularBlockVpnWhenRoaming?: boolean | undefined;
    // Whether or not to Block the user from doing manual root certificate installation.
    certificatesBlockManualRootCertificateInstallation?: boolean | undefined;
    /**
     * Whether or not to block Connected Devices Service which enables discovery and connection to other devices, remote
     * messaging, remote app sessions and other cross-device experiences.
     */
    connectedDevicesServiceBlocked?: boolean | undefined;
    // Whether or not to Block the user from using copy paste.
    copyPasteBlocked?: boolean | undefined;
    // Whether or not to Block the user from using Cortana.
    cortanaBlocked?: boolean | undefined;
    // Whether or not to block end user access to Defender.
    defenderBlockEndUserAccess?: boolean | undefined;
    // Specifies the level of cloud-delivered protection. Possible values are: notConfigured, high, highPlus, zeroTolerance.
    defenderCloudBlockLevel?: DefenderCloudBlockLevelType | undefined;
    // Number of days before deleting quarantined malware. Valid values 0 to 90
    defenderDaysBeforeDeletingQuarantinedMalware?: NullableOption<number> | undefined;
    // Gets or sets Defender’s actions to take on detected Malware per threat level.
    defenderDetectedMalwareActions?: NullableOption<DefenderDetectedMalwareActions> | undefined;
    // File extensions to exclude from scans and real time protection.
    defenderFileExtensionsToExclude?: NullableOption<string[]> | undefined;
    // Files and folder to exclude from scans and real time protection.
    defenderFilesAndFoldersToExclude?: NullableOption<string[]> | undefined;
    /**
     * Value for monitoring file activity. Possible values are: userDefined, disable, monitorAllFiles,
     * monitorIncomingFilesOnly, monitorOutgoingFilesOnly.
     */
    defenderMonitorFileActivity?: DefenderMonitorFileActivity | undefined;
    // Processes to exclude from scans and real time protection.
    defenderProcessesToExclude?: NullableOption<string[]> | undefined;
    /**
     * The configuration for how to prompt user for sample submission. Possible values are: userDefined, alwaysPrompt,
     * promptBeforeSendingPersonalData, neverSendData, sendAllDataWithoutPrompting.
     */
    defenderPromptForSampleSubmission?: DefenderPromptForSampleSubmission | undefined;
    // Indicates whether or not to require behavior monitoring.
    defenderRequireBehaviorMonitoring?: boolean | undefined;
    // Indicates whether or not to require cloud protection.
    defenderRequireCloudProtection?: boolean | undefined;
    // Indicates whether or not to require network inspection system.
    defenderRequireNetworkInspectionSystem?: boolean | undefined;
    // Indicates whether or not to require real time monitoring.
    defenderRequireRealTimeMonitoring?: boolean | undefined;
    // Indicates whether or not to scan archive files.
    defenderScanArchiveFiles?: boolean | undefined;
    // Indicates whether or not to scan downloads.
    defenderScanDownloads?: boolean | undefined;
    // Indicates whether or not to scan incoming mail messages.
    defenderScanIncomingMail?: boolean | undefined;
    // Indicates whether or not to scan mapped network drives during full scan.
    defenderScanMappedNetworkDrivesDuringFullScan?: boolean | undefined;
    // Max CPU usage percentage during scan. Valid values 0 to 100
    defenderScanMaxCpu?: NullableOption<number> | undefined;
    // Indicates whether or not to scan files opened from a network folder.
    defenderScanNetworkFiles?: boolean | undefined;
    // Indicates whether or not to scan removable drives during full scan.
    defenderScanRemovableDrivesDuringFullScan?: boolean | undefined;
    // Indicates whether or not to scan scripts loaded in Internet Explorer browser.
    defenderScanScriptsLoadedInInternetExplorer?: boolean | undefined;
    // The defender system scan type. Possible values are: userDefined, disabled, quick, full.
    defenderScanType?: DefenderScanType | undefined;
    // The time to perform a daily quick scan.
    defenderScheduledQuickScanTime?: NullableOption<string> | undefined;
    // The defender time for the system scan.
    defenderScheduledScanTime?: NullableOption<string> | undefined;
    // The signature update interval in hours. Specify 0 not to check. Valid values 0 to 24
    defenderSignatureUpdateIntervalInHours?: NullableOption<number> | undefined;
    /**
     * Defender day of the week for the system scan. Possible values are: userDefined, everyday, sunday, monday, tuesday,
     * wednesday, thursday, friday, saturday, noScheduledScan.
     */
    defenderSystemScanSchedule?: WeeklySchedule | undefined;
    // Indicates whether or not to allow developer unlock. Possible values are: notConfigured, blocked, allowed.
    developerUnlockSetting?: StateManagementSetting | undefined;
    // Indicates whether or not to Block the user from resetting their phone.
    deviceManagementBlockFactoryResetOnMobile?: boolean | undefined;
    // Indicates whether or not to Block the user from doing manual un-enrollment from device management.
    deviceManagementBlockManualUnenroll?: boolean | undefined;
    /**
     * Gets or sets a value allowing the device to send diagnostic and usage telemetry data, such as Watson. Possible values
     * are: userDefined, none, basic, enhanced, full.
     */
    diagnosticsDataSubmissionMode?: DiagnosticDataSubmissionMode | undefined;
    /**
     * Allow users to change Start pages on Edge. Use the EdgeHomepageUrls to specify the Start pages that the user would see
     * by default when they open Edge.
     */
    edgeAllowStartPagesModification?: boolean | undefined;
    // Indicates whether or not to prevent access to about flags on Edge browser.
    edgeBlockAccessToAboutFlags?: boolean | undefined;
    /**
     * Block the address bar dropdown functionality in Microsoft Edge. Disable this settings to minimize network connections
     * from Microsoft Edge to Microsoft services.
     */
    edgeBlockAddressBarDropdown?: boolean | undefined;
    // Indicates whether or not to block auto fill.
    edgeBlockAutofill?: boolean | undefined;
    /**
     * Block Microsoft compatibility list in Microsoft Edge. This list from Microsoft helps Edge properly display sites with
     * known compatibility issues.
     */
    edgeBlockCompatibilityList?: boolean | undefined;
    // Indicates whether or not to block developer tools in the Edge browser.
    edgeBlockDeveloperTools?: boolean | undefined;
    // Indicates whether or not to Block the user from using the Edge browser.
    edgeBlocked?: boolean | undefined;
    // Indicates whether or not to block extensions in the Edge browser.
    edgeBlockExtensions?: boolean | undefined;
    // Indicates whether or not to block InPrivate browsing on corporate networks, in the Edge browser.
    edgeBlockInPrivateBrowsing?: boolean | undefined;
    // Indicates whether or not to Block the user from using JavaScript.
    edgeBlockJavaScript?: boolean | undefined;
    /**
     * Block the collection of information by Microsoft for live tile creation when users pin a site to Start from Microsoft
     * Edge.
     */
    edgeBlockLiveTileDataCollection?: boolean | undefined;
    // Indicates whether or not to Block password manager.
    edgeBlockPasswordManager?: boolean | undefined;
    // Indicates whether or not to block popups.
    edgeBlockPopups?: boolean | undefined;
    // Indicates whether or not to block the user from using the search suggestions in the address bar.
    edgeBlockSearchSuggestions?: boolean | undefined;
    // Indicates whether or not to Block the user from sending the do not track header.
    edgeBlockSendingDoNotTrackHeader?: boolean | undefined;
    /**
     * Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. Note: the name of this property
     * is misleading; the property is obsolete, use EdgeSendIntranetTrafficToInternetExplorer instead.
     */
    edgeBlockSendingIntranetTrafficToInternetExplorer?: boolean | undefined;
    // Clear browsing data on exiting Microsoft Edge.
    edgeClearBrowsingDataOnExit?: boolean | undefined;
    /**
     * Indicates which cookies to block in the Edge browser. Possible values are: userDefined, allow, blockThirdParty,
     * blockAll.
     */
    edgeCookiePolicy?: EdgeCookiePolicy | undefined;
    /**
     * Block the Microsoft web page that opens on the first use of Microsoft Edge. This policy allows enterprises, like those
     * enrolled in zero emissions configurations, to block this page.
     */
    edgeDisableFirstRunPage?: boolean | undefined;
    // Indicates the enterprise mode site list location. Could be a local file, local network or http location.
    edgeEnterpriseModeSiteListLocation?: NullableOption<string> | undefined;
    // The first run URL for when Edge browser is opened for the first time.
    edgeFirstRunUrl?: NullableOption<string> | undefined;
    // The list of URLs for homepages shodwn on MDM-enrolled devices on Edge browser.
    edgeHomepageUrls?: NullableOption<string[]> | undefined;
    // Indicates whether or not to Require the user to use the smart screen filter.
    edgeRequireSmartScreen?: boolean | undefined;
    /**
     * Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their
     * default search engine provided the AllowSearchEngineCustomization policy is not set.
     */
    edgeSearchEngine?: NullableOption<EdgeSearchEngineBase> | undefined;
    // Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer.
    edgeSendIntranetTrafficToInternetExplorer?: boolean | undefined;
    /**
     * Enable favorites sync between Internet Explorer and Microsoft Edge. Additions, deletions, modifications and order
     * changes to favorites are shared between browsers.
     */
    edgeSyncFavoritesWithInternetExplorer?: boolean | undefined;
    // Endpoint for discovering cloud printers.
    enterpriseCloudPrintDiscoveryEndPoint?: NullableOption<string> | undefined;
    /**
     * Maximum number of printers that should be queried from a discovery endpoint. This is a mobile only setting. Valid
     * values 1 to 65535
     */
    enterpriseCloudPrintDiscoveryMaxLimit?: NullableOption<number> | undefined;
    // OAuth resource URI for printer discovery service as configured in Azure portal.
    enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: NullableOption<string> | undefined;
    // Authentication endpoint for acquiring OAuth tokens.
    enterpriseCloudPrintOAuthAuthority?: NullableOption<string> | undefined;
    // GUID of a client application authorized to retrieve OAuth tokens from the OAuth Authority.
    enterpriseCloudPrintOAuthClientIdentifier?: NullableOption<string> | undefined;
    // OAuth resource URI for print service as configured in the Azure portal.
    enterpriseCloudPrintResourceIdentifier?: NullableOption<string> | undefined;
    // Indicates whether or not to enable device discovery UX.
    experienceBlockDeviceDiscovery?: boolean | undefined;
    // Indicates whether or not to allow the error dialog from displaying if no SIM card is detected.
    experienceBlockErrorDialogWhenNoSIM?: boolean | undefined;
    // Indicates whether or not to enable task switching on the device.
    experienceBlockTaskSwitcher?: boolean | undefined;
    // Indicates whether or not to block DVR and broadcasting.
    gameDvrBlocked?: boolean | undefined;
    // Indicates whether or not to Block the user from using internet sharing.
    internetSharingBlocked?: boolean | undefined;
    // Indicates whether or not to Block the user from location services.
    locationServicesBlocked?: boolean | undefined;
    /**
     * Specify whether to show a user-configurable setting to control the screen timeout while on the lock screen of Windows
     * 10 Mobile devices. If this policy is set to Allow, the value set by lockScreenTimeoutInSeconds is ignored.
     */
    lockScreenAllowTimeoutConfiguration?: boolean | undefined;
    // Indicates whether or not to block action center notifications over lock screen.
    lockScreenBlockActionCenterNotifications?: boolean | undefined;
    // Indicates whether or not the user can interact with Cortana using speech while the system is locked.
    lockScreenBlockCortana?: boolean | undefined;
    // Indicates whether to allow toast notifications above the device lock screen.
    lockScreenBlockToastNotifications?: boolean | undefined;
    /**
     * Set the duration (in seconds) from the screen locking to the screen turning off for Windows 10 Mobile devices.
     * Supported values are 11-1800. Valid values 11 to 1800
     */
    lockScreenTimeoutInSeconds?: NullableOption<number> | undefined;
    // Disables the ability to quickly switch between users that are logged on simultaneously without logging off.
    logonBlockFastUserSwitching?: boolean | undefined;
    // Indicates whether or not to Block a Microsoft account.
    microsoftAccountBlocked?: boolean | undefined;
    // Indicates whether or not to Block Microsoft account settings sync.
    microsoftAccountBlockSettingsSync?: boolean | undefined;
    /**
     * If set, proxy settings will be applied to all processes and accounts in the device. Otherwise, it will be applied to
     * the user account that’s enrolled into MDM.
     */
    networkProxyApplySettingsDeviceWide?: boolean | undefined;
    // Address to the proxy auto-config (PAC) script you want to use.
    networkProxyAutomaticConfigurationUrl?: NullableOption<string> | undefined;
    /**
     * Disable automatic detection of settings. If enabled, the system will try to find the path to a proxy auto-config (PAC)
     * script.
     */
    networkProxyDisableAutoDetect?: boolean | undefined;
    // Specifies manual proxy server settings.
    networkProxyServer?: NullableOption<Windows10NetworkProxyServer> | undefined;
    // Indicates whether or not to Block the user from using near field communication.
    nfcBlocked?: boolean | undefined;
    // Gets or sets a value allowing IT admins to prevent apps and features from working with files on OneDrive.
    oneDriveDisableFileSync?: boolean | undefined;
    /**
     * Specify whether PINs or passwords such as '1111' or '1234' are allowed. For Windows 10 desktops, it also controls the
     * use of picture passwords.
     */
    passwordBlockSimple?: boolean | undefined;
    // The password expiration in days. Valid values 0 to 730
    passwordExpirationDays?: NullableOption<number> | undefined;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // The minimum password length. Valid values 4 to 16
    passwordMinimumLength?: NullableOption<number> | undefined;
    // The minutes of inactivity before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: NullableOption<number> | undefined;
    // The number of previous passwords to prevent reuse of. Valid values 0 to 50
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Indicates whether or not to require the user to have a password.
    passwordRequired?: boolean | undefined;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
    // Indicates whether or not to require a password upon resuming from an idle state.
    passwordRequireWhenResumeFromIdleState?: boolean | undefined;
    // The number of sign in failures before factory reset. Valid values 0 to 999
    passwordSignInFailureCountBeforeFactoryReset?: NullableOption<number> | undefined;
    /**
     * A http or https Url to a jpg, jpeg or png image that needs to be downloaded and used as the Desktop Image or a file Url
     * to a local image on the file system that needs to used as the Desktop Image.
     */
    personalizationDesktopImageUrl?: NullableOption<string> | undefined;
    /**
     * A http or https Url to a jpg, jpeg or png image that neeeds to be downloaded and used as the Lock Screen Image or a
     * file Url to a local image on the file system that needs to be used as the Lock Screen Image.
     */
    personalizationLockScreenImageUrl?: NullableOption<string> | undefined;
    /**
     * Enables or disables the use of advertising ID. Added in Windows 10, version 1607. Possible values are: notConfigured,
     * blocked, allowed.
     */
    privacyAdvertisingId?: StateManagementSetting | undefined;
    /**
     * Indicates whether or not to allow the automatic acceptance of the pairing and privacy user consent dialog when
     * launching apps.
     */
    privacyAutoAcceptPairingAndConsentPrompts?: boolean | undefined;
    /**
     * Indicates whether or not to block the usage of cloud based speech services for Cortana, Dictation, or Store
     * applications.
     */
    privacyBlockInputPersonalization?: boolean | undefined;
    // Indicates whether or not to Block the user from reset protection mode.
    resetProtectionModeBlocked?: boolean | undefined;
    // Specifies what filter level of safe search is required. Possible values are: userDefined, strict, moderate.
    safeSearchFilter?: SafeSearchFilterType | undefined;
    // Indicates whether or not to Block the user from taking Screenshots.
    screenCaptureBlocked?: boolean | undefined;
    // Specifies if search can use diacritics.
    searchBlockDiacritics?: boolean | undefined;
    // Specifies whether to use automatic language detection when indexing content and properties.
    searchDisableAutoLanguageDetection?: boolean | undefined;
    // Indicates whether or not to disable the search indexer backoff feature.
    searchDisableIndexerBackoff?: boolean | undefined;
    /**
     * Indicates whether or not to block indexing of WIP-protected items to prevent them from appearing in search results for
     * Cortana or Explorer.
     */
    searchDisableIndexingEncryptedItems?: boolean | undefined;
    // Indicates whether or not to allow users to add locations on removable drives to libraries and to be indexed.
    searchDisableIndexingRemovableDrive?: boolean | undefined;
    // Specifies minimum amount of hard drive space on the same drive as the index location before indexing stops.
    searchEnableAutomaticIndexSizeManangement?: boolean | undefined;
    // Indicates whether or not to block remote queries of this computer’s index.
    searchEnableRemoteQueries?: boolean | undefined;
    // Indicates whether or not to block access to Accounts in Settings app.
    settingsBlockAccountsPage?: boolean | undefined;
    // Indicates whether or not to block the user from installing provisioning packages.
    settingsBlockAddProvisioningPackage?: boolean | undefined;
    // Indicates whether or not to block access to Apps in Settings app.
    settingsBlockAppsPage?: boolean | undefined;
    // Indicates whether or not to block the user from changing the language settings.
    settingsBlockChangeLanguage?: boolean | undefined;
    // Indicates whether or not to block the user from changing power and sleep settings.
    settingsBlockChangePowerSleep?: boolean | undefined;
    // Indicates whether or not to block the user from changing the region settings.
    settingsBlockChangeRegion?: boolean | undefined;
    // Indicates whether or not to block the user from changing date and time settings.
    settingsBlockChangeSystemTime?: boolean | undefined;
    // Indicates whether or not to block access to Devices in Settings app.
    settingsBlockDevicesPage?: boolean | undefined;
    // Indicates whether or not to block access to Ease of Access in Settings app.
    settingsBlockEaseOfAccessPage?: boolean | undefined;
    // Indicates whether or not to block the user from editing the device name.
    settingsBlockEditDeviceName?: boolean | undefined;
    // Indicates whether or not to block access to Gaming in Settings app.
    settingsBlockGamingPage?: boolean | undefined;
    // Indicates whether or not to block access to Network &amp; Internet in Settings app.
    settingsBlockNetworkInternetPage?: boolean | undefined;
    // Indicates whether or not to block access to Personalization in Settings app.
    settingsBlockPersonalizationPage?: boolean | undefined;
    // Indicates whether or not to block access to Privacy in Settings app.
    settingsBlockPrivacyPage?: boolean | undefined;
    // Indicates whether or not to block the runtime configuration agent from removing provisioning packages.
    settingsBlockRemoveProvisioningPackage?: boolean | undefined;
    // Indicates whether or not to block access to Settings app.
    settingsBlockSettingsApp?: boolean | undefined;
    // Indicates whether or not to block access to System in Settings app.
    settingsBlockSystemPage?: boolean | undefined;
    // Indicates whether or not to block access to Time &amp; Language in Settings app.
    settingsBlockTimeLanguagePage?: boolean | undefined;
    // Indicates whether or not to block access to Update &amp; Security in Settings app.
    settingsBlockUpdateSecurityPage?: boolean | undefined;
    // Indicates whether or not to block multiple users of the same app to share data.
    sharedUserAppDataAllowed?: boolean | undefined;
    // Indicates whether or not users can override SmartScreen Filter warnings about potentially malicious websites.
    smartScreenBlockPromptOverride?: boolean | undefined;
    // Indicates whether or not users can override the SmartScreen Filter warnings about downloading unverified files
    smartScreenBlockPromptOverrideForFiles?: boolean | undefined;
    /**
     * This property will be deprecated in July 2019 and will be replaced by property SmartScreenAppInstallControl. Allows IT
     * Admins to control whether users are allowed to install apps from places other than the Store.
     */
    smartScreenEnableAppInstallControl?: boolean | undefined;
    // Indicates whether or not to block the user from unpinning apps from taskbar.
    startBlockUnpinningAppsFromTaskbar?: boolean | undefined;
    /**
     * Setting the value of this collapses the app list, removes the app list entirely, or disables the corresponding toggle
     * in the Settings app. Possible values are: userDefined, collapse, remove, disableSettingsApp.
     */
    startMenuAppListVisibility?: WindowsStartMenuAppListVisibilityType | undefined;
    // Enabling this policy hides the change account setting from appearing in the user tile in the start menu.
    startMenuHideChangeAccountSettings?: boolean | undefined;
    /**
     * Enabling this policy hides the most used apps from appearing on the start menu and disables the corresponding toggle in
     * the Settings app.
     */
    startMenuHideFrequentlyUsedApps?: boolean | undefined;
    // Enabling this policy hides hibernate from appearing in the power button in the start menu.
    startMenuHideHibernate?: boolean | undefined;
    // Enabling this policy hides lock from appearing in the user tile in the start menu.
    startMenuHideLock?: boolean | undefined;
    // Enabling this policy hides the power button from appearing in the start menu.
    startMenuHidePowerButton?: boolean | undefined;
    /**
     * Enabling this policy hides recent jump lists from appearing on the start menu/taskbar and disables the corresponding
     * toggle in the Settings app.
     */
    startMenuHideRecentJumpLists?: boolean | undefined;
    /**
     * Enabling this policy hides recently added apps from appearing on the start menu and disables the corresponding toggle
     * in the Settings app.
     */
    startMenuHideRecentlyAddedApps?: boolean | undefined;
    // Enabling this policy hides 'Restart/Update and Restart' from appearing in the power button in the start menu.
    startMenuHideRestartOptions?: boolean | undefined;
    // Enabling this policy hides shut down/update and shut down from appearing in the power button in the start menu.
    startMenuHideShutDown?: boolean | undefined;
    // Enabling this policy hides sign out from appearing in the user tile in the start menu.
    startMenuHideSignOut?: boolean | undefined;
    // Enabling this policy hides sleep from appearing in the power button in the start menu.
    startMenuHideSleep?: boolean | undefined;
    // Enabling this policy hides switch account from appearing in the user tile in the start menu.
    startMenuHideSwitchAccount?: boolean | undefined;
    // Enabling this policy hides the user tile from appearing in the start menu.
    startMenuHideUserTile?: boolean | undefined;
    /**
     * This policy setting allows you to import Edge assets to be used with startMenuLayoutXml policy. Start layout can
     * contain secondary tile from Edge app which looks for Edge local asset file. Edge local asset would not exist and cause
     * Edge secondary tile to appear empty in this case. This policy only gets applied when startMenuLayoutXml policy is
     * modified. The value should be a UTF-8 Base64 encoded byte array.
     */
    startMenuLayoutEdgeAssetsXml?: NullableOption<number> | undefined;
    /**
     * Allows admins to override the default Start menu layout and prevents the user from changing it. The layout is modified
     * by specifying an XML file based on a layout modification schema. XML needs to be in a UTF8 encoded byte array format.
     */
    startMenuLayoutXml?: NullableOption<number> | undefined;
    // Allows admins to decide how the Start menu is displayed. Possible values are: userDefined, fullScreen, nonFullScreen.
    startMenuMode?: WindowsStartMenuModeType | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the Documents folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderDocuments?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the Downloads folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderDownloads?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the FileExplorer shortcut on the Start menu. Possible values are: notConfigured,
     * hide, show.
     */
    startMenuPinnedFolderFileExplorer?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the HomeGroup folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderHomeGroup?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the Music folder shortcut on the Start menu. Possible values are: notConfigured,
     * hide, show.
     */
    startMenuPinnedFolderMusic?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the Network folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderNetwork?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the PersonalFolder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderPersonalFolder?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the Pictures folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderPictures?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the Settings folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderSettings?: VisibilitySetting | undefined;
    /**
     * Enforces the visibility (Show/Hide) of the Videos folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderVideos?: VisibilitySetting | undefined;
    // Indicates whether or not to Block the user from using removable storage.
    storageBlockRemovableStorage?: boolean | undefined;
    // Indicating whether or not to require encryption on a mobile device.
    storageRequireMobileDeviceEncryption?: boolean | undefined;
    // Indicates whether application data is restricted to the system drive.
    storageRestrictAppDataToSystemVolume?: boolean | undefined;
    // Indicates whether the installation of applications is restricted to the system drive.
    storageRestrictAppInstallToSystemVolume?: boolean | undefined;
    // Whether the device is required to connect to the network.
    tenantLockdownRequireNetworkDuringOutOfBoxExperience?: boolean | undefined;
    // Indicates whether or not to Block the user from USB connection.
    usbBlocked?: boolean | undefined;
    // Indicates whether or not to Block the user from voice recording.
    voiceRecordingBlocked?: boolean | undefined;
    // Indicates whether or not user's localhost IP address is displayed while making phone calls using the WebRTC
    webRtcBlockLocalhostIpAddress?: boolean | undefined;
    // Indicating whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
    wiFiBlockAutomaticConnectHotspots?: boolean | undefined;
    // Indicates whether or not to Block the user from using Wi-Fi.
    wiFiBlocked?: boolean | undefined;
    // Indicates whether or not to Block the user from using Wi-Fi manual configuration.
    wiFiBlockManualConfiguration?: boolean | undefined;
    /**
     * Specify how often devices scan for Wi-Fi networks. Supported values are 1-500, where 100 = default, and 500 = low
     * frequency. Valid values 1 to 500
     */
    wiFiScanInterval?: NullableOption<number> | undefined;
    /**
     * Allows IT admins to block experiences that are typically for consumers only, such as Start suggestions, Membership
     * notifications, Post-OOBE app install and redirect tiles.
     */
    windowsSpotlightBlockConsumerSpecificFeatures?: boolean | undefined;
    // Allows IT admins to turn off all Windows Spotlight features
    windowsSpotlightBlocked?: boolean | undefined;
    /**
     * Block suggestions from Microsoft that show after each OS clean install, upgrade or in an on-going basis to introduce
     * users to what is new or changed
     */
    windowsSpotlightBlockOnActionCenter?: boolean | undefined;
    // Block personalized content in Windows spotlight based on user’s device usage.
    windowsSpotlightBlockTailoredExperiences?: boolean | undefined;
    // Block third party content delivered via Windows Spotlight
    windowsSpotlightBlockThirdPartyNotifications?: boolean | undefined;
    // Block Windows Spotlight Windows welcome experience
    windowsSpotlightBlockWelcomeExperience?: boolean | undefined;
    // Allows IT admins to turn off the popup of Windows Tips.
    windowsSpotlightBlockWindowsTips?: boolean | undefined;
    // Specifies the type of Spotlight. Possible values are: notConfigured, disabled, enabled.
    windowsSpotlightConfigureOnLockScreen?: WindowsSpotlightEnablementSettings | undefined;
    // Indicates whether or not to block automatic update of apps from Windows Store.
    windowsStoreBlockAutoUpdate?: boolean | undefined;
    // Indicates whether or not to Block the user from using the Windows store.
    windowsStoreBlocked?: boolean | undefined;
    // Indicates whether or not to enable Private Store Only.
    windowsStoreEnablePrivateStoreOnly?: boolean | undefined;
    // Indicates whether or not to allow other devices from discovering this PC for projection.
    wirelessDisplayBlockProjectionToThisDevice?: boolean | undefined;
    // Indicates whether or not to allow user input from wireless display receiver.
    wirelessDisplayBlockUserInputFromReceiver?: boolean | undefined;
    // Indicates whether or not to require a PIN for new devices to initiate pairing.
    wirelessDisplayRequirePinForPairing?: boolean | undefined;
}
export interface Windows10MobileCompliancePolicy extends DeviceCompliancePolicy {
    // Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled
    bitLockerEnabled?: boolean | undefined;
    // Require devices to be reported as healthy by Windows Device Health Attestation.
    codeIntegrityEnabled?: boolean | undefined;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is
     * enabled.
     */
    earlyLaunchAntiMalwareDriverEnabled?: boolean | undefined;
    // Maximum Windows Phone version.
    osMaximumVersion?: NullableOption<string> | undefined;
    // Minimum Windows Phone version.
    osMinimumVersion?: NullableOption<string> | undefined;
    // Whether or not to block syncing the calendar.
    passwordBlockSimple?: boolean | undefined;
    // Number of days before password expiration. Valid values 1 to 255
    passwordExpirationDays?: NullableOption<number> | undefined;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // Minimum password length. Valid values 4 to 16
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // The number of previous passwords to prevent re-use of.
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Require a password to unlock Windows Phone device.
    passwordRequired?: boolean | undefined;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
    // Require a password to unlock an idle device.
    passwordRequireToUnlockFromIdle?: boolean | undefined;
    // Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled.
    secureBootEnabled?: boolean | undefined;
    // Require encryption on windows devices.
    storageRequireEncryption?: boolean | undefined;
}
export interface Windows10SecureAssessmentConfiguration extends DeviceConfiguration {
    // Indicates whether or not to allow the app from printing during the test.
    allowPrinting?: boolean | undefined;
    // Indicates whether or not to allow screen capture capability during a test.
    allowScreenCapture?: boolean | undefined;
    // Indicates whether or not to allow text suggestions during the test.
    allowTextSuggestion?: boolean | undefined;
    /**
     * The account used to configure the Windows device for taking the test. The user can be a domain account (domain/user),
     * an AAD account (username@tenant.com) or a local account (username).
     */
    configurationAccount?: NullableOption<string> | undefined;
    /**
     * Url link to an assessment that's automatically loaded when the secure assessment browser is launched. It has to be a
     * valid Url (http[s]://msdn.microsoft.com/).
     */
    launchUri?: NullableOption<string> | undefined;
}
export interface Windows10TeamGeneralConfiguration extends DeviceConfiguration {
    // Indicates whether or not to Block Azure Operational Insights.
    azureOperationalInsightsBlockTelemetry?: boolean | undefined;
    // The Azure Operational Insights workspace id.
    azureOperationalInsightsWorkspaceId?: NullableOption<string> | undefined;
    // The Azure Operational Insights Workspace key.
    azureOperationalInsightsWorkspaceKey?: NullableOption<string> | undefined;
    // Specifies whether to automatically launch the Connect app whenever a projection is initiated.
    connectAppBlockAutoLaunch?: boolean | undefined;
    // Indicates whether or not to Block setting a maintenance window for device updates.
    maintenanceWindowBlocked?: boolean | undefined;
    // Maintenance window duration for device updates. Valid values 0 to 5
    maintenanceWindowDurationInHours?: NullableOption<number> | undefined;
    // Maintenance window start time for device updates.
    maintenanceWindowStartTime?: NullableOption<string> | undefined;
    // Indicates whether or not to Block wireless projection.
    miracastBlocked?: boolean | undefined;
    /**
     * The channel. Possible values are: userDefined, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
     * thirtySix, forty, fortyFour, fortyEight, oneHundredFortyNine, oneHundredFiftyThree, oneHundredFiftySeven,
     * oneHundredSixtyOne, oneHundredSixtyFive.
     */
    miracastChannel?: MiracastChannel | undefined;
    // Indicates whether or not to require a pin for wireless projection.
    miracastRequirePin?: boolean | undefined;
    /**
     * Specifies whether to disable the 'My meetings and files' feature in the Start menu, which shows the signed-in user's
     * meetings and files from Office 365.
     */
    settingsBlockMyMeetingsAndFiles?: boolean | undefined;
    // Specifies whether to allow the ability to resume a session when the session times out.
    settingsBlockSessionResume?: boolean | undefined;
    // Specifies whether to disable auto-populating of the sign-in dialog with invitees from scheduled meetings.
    settingsBlockSigninSuggestions?: boolean | undefined;
    /**
     * Specifies the default volume value for a new session. Permitted values are 0-100. The default is 45. Valid values 0 to
     * 100
     */
    settingsDefaultVolume?: NullableOption<number> | undefined;
    // Specifies the number of minutes until the Hub screen turns off.
    settingsScreenTimeoutInMinutes?: NullableOption<number> | undefined;
    // Specifies the number of minutes until the session times out.
    settingsSessionTimeoutInMinutes?: NullableOption<number> | undefined;
    // Specifies the number of minutes until the Hub enters sleep mode.
    settingsSleepTimeoutInMinutes?: NullableOption<number> | undefined;
    // The welcome screen background image URL. The URL must use the HTTPS protocol and return a PNG image.
    welcomeScreenBackgroundImageUrl?: NullableOption<string> | undefined;
    // Indicates whether or not to Block the welcome screen from waking up automatically when someone enters the room.
    welcomeScreenBlockAutomaticWakeUp?: boolean | undefined;
    /**
     * The welcome screen meeting information shown. Possible values are: userDefined, showOrganizerAndTimeOnly,
     * showOrganizerAndTimeAndSubject.
     */
    welcomeScreenMeetingInformation?: WelcomeScreenMeetingInformation | undefined;
}
export interface Windows81CompliancePolicy extends DeviceCompliancePolicy {
    // Maximum Windows 8.1 version.
    osMaximumVersion?: NullableOption<string> | undefined;
    // Minimum Windows 8.1 version.
    osMinimumVersion?: NullableOption<string> | undefined;
    // Indicates whether or not to block simple password.
    passwordBlockSimple?: boolean | undefined;
    // Password expiration in days.
    passwordExpirationDays?: NullableOption<number> | undefined;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // The minimum password length.
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // The number of previous passwords to prevent re-use of. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Require a password to unlock Windows device.
    passwordRequired?: boolean | undefined;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
    // Indicates whether or not to require encryption on a windows 8.1 device.
    storageRequireEncryption?: boolean | undefined;
}
export interface Windows81GeneralConfiguration extends DeviceConfiguration {
    /**
     * Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a
     * Microsoft account.
     */
    accountsBlockAddingNonMicrosoftAccountEmail?: boolean | undefined;
    // Value indicating whether this policy only applies to Windows 8.1. This property is read-only.
    applyOnlyToWindows81?: boolean | undefined;
    // Indicates whether or not to block auto fill.
    browserBlockAutofill?: boolean | undefined;
    // Indicates whether or not to block automatic detection of Intranet sites.
    browserBlockAutomaticDetectionOfIntranetSites?: boolean | undefined;
    // Indicates whether or not to block enterprise mode access.
    browserBlockEnterpriseModeAccess?: boolean | undefined;
    // Indicates whether or not to Block the user from using JavaScript.
    browserBlockJavaScript?: boolean | undefined;
    // Indicates whether or not to block plug-ins.
    browserBlockPlugins?: boolean | undefined;
    // Indicates whether or not to block popups.
    browserBlockPopups?: boolean | undefined;
    // Indicates whether or not to Block the user from sending the do not track header.
    browserBlockSendingDoNotTrackHeader?: boolean | undefined;
    // Indicates whether or not to block a single word entry on Intranet sites.
    browserBlockSingleWordEntryOnIntranetSites?: boolean | undefined;
    // The enterprise mode site list location. Could be a local file, local network or http location.
    browserEnterpriseModeSiteListLocation?: NullableOption<string> | undefined;
    // The internet security level. Possible values are: userDefined, medium, mediumHigh, high.
    browserInternetSecurityLevel?: InternetSiteSecurityLevel | undefined;
    // The Intranet security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high.
    browserIntranetSecurityLevel?: SiteSecurityLevel | undefined;
    // The logging report location.
    browserLoggingReportLocation?: NullableOption<string> | undefined;
    // Indicates whether or not to require a firewall.
    browserRequireFirewall?: boolean | undefined;
    // Indicates whether or not to require fraud warning.
    browserRequireFraudWarning?: boolean | undefined;
    // Indicates whether or not to require high security for restricted sites.
    browserRequireHighSecurityForRestrictedSites?: boolean | undefined;
    // Indicates whether or not to require the user to use the smart screen filter.
    browserRequireSmartScreen?: boolean | undefined;
    // The trusted sites security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high.
    browserTrustedSitesSecurityLevel?: SiteSecurityLevel | undefined;
    // Indicates whether or not to block data roaming.
    cellularBlockDataRoaming?: boolean | undefined;
    // Indicates whether or not to block diagnostic data submission.
    diagnosticsBlockDataSubmission?: boolean | undefined;
    // Indicates whether or not to Block the user from using a pictures password and pin.
    passwordBlockPicturePasswordAndPin?: boolean | undefined;
    // Password expiration in days.
    passwordExpirationDays?: NullableOption<number> | undefined;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // The minimum password length.
    passwordMinimumLength?: NullableOption<number> | undefined;
    // The minutes of inactivity before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: NullableOption<number> | undefined;
    // The number of previous passwords to prevent re-use of. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
    // The number of sign in failures before factory reset.
    passwordSignInFailureCountBeforeFactoryReset?: NullableOption<number> | undefined;
    // Indicates whether or not to require encryption on a mobile device.
    storageRequireDeviceEncryption?: boolean | undefined;
    // Indicates whether or not to require automatic updates.
    updatesRequireAutomaticUpdates?: boolean | undefined;
    /**
     * The user account control settings. Possible values are: userDefined, alwaysNotify, notifyOnAppChanges,
     * notifyOnAppChangesWithoutDimming, neverNotify.
     */
    userAccountControlSettings?: WindowsUserAccountControlSettings | undefined;
    // The work folders url.
    workFoldersUrl?: NullableOption<string> | undefined;
}
export interface WindowsDefenderAdvancedThreatProtectionConfiguration extends DeviceConfiguration {
    // Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule
    allowSampleSharing?: boolean | undefined;
    // Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency.
    enableExpeditedTelemetryReporting?: boolean | undefined;
}
export interface WindowsPhone81CompliancePolicy extends DeviceCompliancePolicy {
    // Maximum Windows Phone version.
    osMaximumVersion?: NullableOption<string> | undefined;
    // Minimum Windows Phone version.
    osMinimumVersion?: NullableOption<string> | undefined;
    // Whether or not to block syncing the calendar.
    passwordBlockSimple?: boolean | undefined;
    // Number of days before the password expires.
    passwordExpirationDays?: NullableOption<number> | undefined;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // Minimum length of passwords.
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: NullableOption<number> | undefined;
    // Number of previous passwords to block. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Whether or not to require a password.
    passwordRequired?: boolean | undefined;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
    // Require encryption on windows phone devices.
    storageRequireEncryption?: boolean | undefined;
}
export interface WindowsPhone81CustomConfiguration extends DeviceConfiguration {
    // OMA settings. This collection can contain a maximum of 1000 elements.
    omaSettings?: NullableOption<OmaSetting[]> | undefined;
}
export interface WindowsPhone81GeneralConfiguration extends DeviceConfiguration {
    // Value indicating whether this policy only applies to Windows Phone 8.1. This property is read-only.
    applyOnlyToWindowsPhone81?: boolean | undefined;
    // Indicates whether or not to block copy paste.
    appsBlockCopyPaste?: boolean | undefined;
    // Indicates whether or not to block bluetooth.
    bluetoothBlocked?: boolean | undefined;
    // Indicates whether or not to block camera.
    cameraBlocked?: boolean | undefined;
    // Indicates whether or not to block Wi-Fi tethering. Has no impact if Wi-Fi is blocked.
    cellularBlockWifiTethering?: boolean | undefined;
    // List that is in the AppComplianceList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    compliantAppListType?: AppListType | undefined;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection
     * can contain a maximum of 10000 elements.
     */
    compliantAppsList?: NullableOption<AppListItem[]> | undefined;
    // Indicates whether or not to block diagnostic data submission.
    diagnosticDataBlockSubmission?: boolean | undefined;
    // Indicates whether or not to block custom email accounts.
    emailBlockAddingAccounts?: boolean | undefined;
    // Indicates whether or not to block location services.
    locationServicesBlocked?: boolean | undefined;
    // Indicates whether or not to block using a Microsoft Account.
    microsoftAccountBlocked?: boolean | undefined;
    // Indicates whether or not to block Near-Field Communication.
    nfcBlocked?: boolean | undefined;
    // Indicates whether or not to block syncing the calendar.
    passwordBlockSimple?: boolean | undefined;
    // Number of days before the password expires.
    passwordExpirationDays?: NullableOption<number> | undefined;
    // Number of character sets a password must contain.
    passwordMinimumCharacterSetCount?: NullableOption<number> | undefined;
    // Minimum length of passwords.
    passwordMinimumLength?: NullableOption<number> | undefined;
    // Minutes of inactivity before screen timeout.
    passwordMinutesOfInactivityBeforeScreenTimeout?: NullableOption<number> | undefined;
    // Number of previous passwords to block. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: NullableOption<number> | undefined;
    // Indicates whether or not to require a password.
    passwordRequired?: boolean | undefined;
    // Password type that is required. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType | undefined;
    // Number of sign in failures allowed before factory reset.
    passwordSignInFailureCountBeforeFactoryReset?: NullableOption<number> | undefined;
    // Indicates whether or not to block screenshots.
    screenCaptureBlocked?: boolean | undefined;
    // Indicates whether or not to block removable storage.
    storageBlockRemovableStorage?: boolean | undefined;
    // Indicates whether or not to require encryption.
    storageRequireEncryption?: boolean | undefined;
    // Indicates whether or not to block the web browser.
    webBrowserBlocked?: boolean | undefined;
    // Indicates whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
    wifiBlockAutomaticConnectHotspots?: boolean | undefined;
    // Indicates whether or not to block Wi-Fi.
    wifiBlocked?: boolean | undefined;
    // Indicates whether or not to block Wi-Fi hotspot reporting. Has no impact if Wi-Fi is blocked.
    wifiBlockHotspotReporting?: boolean | undefined;
    // Indicates whether or not to block the Windows Store.
    windowsStoreBlocked?: boolean | undefined;
}
export interface WindowsUpdateForBusinessConfiguration extends DeviceConfiguration {
    /**
     * Automatic update mode. Possible values are: userDefined, notifyDownload, autoInstallAtMaintenanceTime,
     * autoInstallAndRebootAtMaintenanceTime, autoInstallAndRebootAtScheduledTime, autoInstallAndRebootWithoutEndUserControl,
     * windowsDefault.
     */
    automaticUpdateMode?: AutomaticUpdateMode | undefined;
    /**
     * Determines which branch devices will receive their updates from. Possible values are: userDefined, all,
     * businessReadyOnly, windowsInsiderBuildFast, windowsInsiderBuildSlow, windowsInsiderBuildRelease.
     */
    businessReadyUpdatesOnly?: WindowsUpdateType | undefined;
    /**
     * Delivery Optimization Mode. Possible values are: userDefined, httpOnly, httpWithPeeringNat,
     * httpWithPeeringPrivateGroup, httpWithInternetPeering, simpleDownload, bypassMode.
     */
    deliveryOptimizationMode?: WindowsDeliveryOptimizationMode | undefined;
    // Exclude Windows update Drivers
    driversExcluded?: boolean | undefined;
    // Defer Feature Updates by these many days
    featureUpdatesDeferralPeriodInDays?: number | undefined;
    // Pause Feature Updates
    featureUpdatesPaused?: boolean | undefined;
    // Feature Updates Pause Expiry datetime
    featureUpdatesPauseExpiryDateTime?: string | undefined;
    // Installation schedule
    installationSchedule?: NullableOption<WindowsUpdateInstallScheduleType> | undefined;
    // Allow Microsoft Update Service
    microsoftUpdateServiceAllowed?: boolean | undefined;
    // The pre-release features. Possible values are: userDefined, settingsOnly, settingsAndExperimentations, notAllowed.
    prereleaseFeatures?: PrereleaseFeatures | undefined;
    // Defer Quality Updates by these many days
    qualityUpdatesDeferralPeriodInDays?: number | undefined;
    // Pause Quality Updates
    qualityUpdatesPaused?: boolean | undefined;
    // Quality Updates Pause Expiry datetime
    qualityUpdatesPauseExpiryDateTime?: string | undefined;
}
export interface EnrollmentConfigurationAssignment extends Entity {
    // Represents an assignment to managed devices in the tenant
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
export interface DeviceEnrollmentLimitConfiguration extends DeviceEnrollmentConfiguration {
    // The maximum number of devices that a user can enroll
    limit?: number | undefined;
}
export interface DeviceEnrollmentPlatformRestrictionsConfiguration extends DeviceEnrollmentConfiguration {
    // Android restrictions based on platform, platform operating system version, and device ownership
    androidRestriction?: NullableOption<DeviceEnrollmentPlatformRestriction> | undefined;
    // Ios restrictions based on platform, platform operating system version, and device ownership
    iosRestriction?: NullableOption<DeviceEnrollmentPlatformRestriction> | undefined;
    // Mac restrictions based on platform, platform operating system version, and device ownership
    macOSRestriction?: NullableOption<DeviceEnrollmentPlatformRestriction> | undefined;
    // Windows mobile restrictions based on platform, platform operating system version, and device ownership
    windowsMobileRestriction?: NullableOption<DeviceEnrollmentPlatformRestriction> | undefined;
    // Windows restrictions based on platform, platform operating system version, and device ownership
    windowsRestriction?: NullableOption<DeviceEnrollmentPlatformRestriction> | undefined;
}
export interface DeviceEnrollmentWindowsHelloForBusinessConfiguration extends DeviceEnrollmentConfiguration {
    /**
     * Controls the ability to use the anti-spoofing features for facial recognition on devices which support it. If set to
     * disabled, anti-spoofing features are not allowed. If set to Not Configured, the user can choose whether they want to
     * use anti-spoofing. Possible values are: notConfigured, enabled, disabled.
     */
    enhancedBiometricsState?: Enablement | undefined;
    /**
     * Controls the period of time (in days) that a PIN can be used before the system requires the user to change it. This
     * must be set between 0 and 730, inclusive. If set to 0, the user's PIN will never expire
     */
    pinExpirationInDays?: number | undefined;
    /**
     * Controls the ability to use lowercase letters in the Windows Hello for Business PIN. Allowed permits the use of
     * lowercase letter(s), whereas Required ensures they are present. If set to Not Allowed, lowercase letters will not be
     * permitted. Possible values are: allowed, required, disallowed.
     */
    pinLowercaseCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /**
     * Controls the maximum number of characters allowed for the Windows Hello for Business PIN. This value must be between 4
     * and 127, inclusive. This value must be greater than or equal to the value set for the minimum PIN.
     */
    pinMaximumLength?: number | undefined;
    /**
     * Controls the minimum number of characters required for the Windows Hello for Business PIN. This value must be between 4
     * and 127, inclusive, and less than or equal to the value set for the maximum PIN.
     */
    pinMinimumLength?: number | undefined;
    /**
     * Controls the ability to prevent users from using past PINs. This must be set between 0 and 50, inclusive, and the
     * current PIN of the user is included in that count. If set to 0, previous PINs are not stored. PIN history is not
     * preserved through a PIN reset.
     */
    pinPreviousBlockCount?: number | undefined;
    /**
     * Controls the ability to use special characters in the Windows Hello for Business PIN. Allowed permits the use of
     * special character(s), whereas Required ensures they are present. If set to Not Allowed, special character(s) will not
     * be permitted. Possible values are: allowed, required, disallowed.
     */
    pinSpecialCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /**
     * Controls the ability to use uppercase letters in the Windows Hello for Business PIN. Allowed permits the use of
     * uppercase letter(s), whereas Required ensures they are present. If set to Not Allowed, uppercase letters will not be
     * permitted. Possible values are: allowed, required, disallowed.
     */
    pinUppercaseCharactersUsage?: WindowsHelloForBusinessPinUsage | undefined;
    /**
     * Controls the use of Remote Windows Hello for Business. Remote Windows Hello for Business provides the ability for a
     * portable, registered device to be usable as a companion for desktop authentication. The desktop must be Azure AD joined
     * and the companion device must have a Windows Hello for Business PIN.
     */
    remotePassportEnabled?: boolean | undefined;
    /**
     * Controls whether to require a Trusted Platform Module (TPM) for provisioning Windows Hello for Business. A TPM provides
     * an additional security benefit in that data stored on it cannot be used on other devices. If set to False, all devices
     * can provision Windows Hello for Business even if there is not a usable TPM.
     */
    securityDeviceRequired?: boolean | undefined;
    /**
     * Controls whether to allow the device to be configured for Windows Hello for Business. If set to disabled, the user
     * cannot provision Windows Hello for Business except on Azure Active Directory joined mobile phones if otherwise
     * required. If set to Not Configured, Intune will not override client defaults. Possible values are: notConfigured,
     * enabled, disabled.
     */
    state?: Enablement | undefined;
    /**
     * Controls the use of biometric gestures, such as face and fingerprint, as an alternative to the Windows Hello for
     * Business PIN. If set to False, biometric gestures are not allowed. Users must still configure a PIN as a backup in case
     * of failures.
     */
    unlockWithBiometricsEnabled?: boolean | undefined;
}
// tslint:disable-next-line: interface-name
export interface ImportedWindowsAutopilotDeviceIdentityUpload extends Entity {
    // DateTime when the entity is created.
    createdDateTimeUtc?: string | undefined;
    // Upload status.
    status?: ImportedWindowsAutopilotDeviceIdentityUploadStatus | undefined;
    // Collection of all Autopilot devices as a part of this upload.
    deviceIdentities?: NullableOption<ImportedWindowsAutopilotDeviceIdentity[]> | undefined;
}
export interface ManagedMobileApp extends Entity {
    // The identifier for an app with it's operating system type.
    mobileAppIdentifier?: NullableOption<MobileAppIdentifier> | undefined;
    // Version of the entity.
    version?: NullableOption<string> | undefined;
}
export interface ManagedAppPolicyDeploymentSummary extends Entity {
    // Not yet documented
    configurationDeployedUserCount?: number | undefined;
    // Not yet documented
    configurationDeploymentSummaryPerApp?: NullableOption<ManagedAppPolicyDeploymentSummaryPerApp[]> | undefined;
    // Not yet documented
    displayName?: NullableOption<string> | undefined;
    // Not yet documented
    lastRefreshTime?: string | undefined;
    // Version of the entity.
    version?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface AndroidManagedAppRegistration extends ManagedAppRegistration {}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IosManagedAppRegistration extends ManagedAppRegistration {}
export interface ManagedAppOperation extends Entity {
    // The operation name.
    displayName?: NullableOption<string> | undefined;
    // The last time the app operation was modified.
    lastModifiedDateTime?: string | undefined;
    // The current state of the operation
    state?: NullableOption<string> | undefined;
    // Version of the entity.
    version?: NullableOption<string> | undefined;
}
export interface ManagedAppStatusRaw extends ManagedAppStatus {
    // Status report content.
    content?: NullableOption<any> | undefined;
}
export interface TargetedManagedAppPolicyAssignment extends Entity {
    // Identifier for deployment to a group or app
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
export interface WindowsInformationProtectionAppLockerFile extends Entity {
    // The friendly name
    displayName?: NullableOption<string> | undefined;
    // File as a byte array
    file?: NullableOption<number> | undefined;
    // SHA256 hash of the file
    fileHash?: NullableOption<string> | undefined;
    // Version of the entity.
    version?: NullableOption<string> | undefined;
}
export interface LocalizedNotificationMessage extends Entity {
    /**
     * Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset,
     * set this property to true on another Localized Notification Message.
     */
    isDefault?: boolean | undefined;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string | undefined;
    // The Locale for which this message is destined.
    locale?: string | undefined;
    // The Message Template content.
    messageTemplate?: string | undefined;
    // The Message Template Subject.
    subject?: string | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface DeviceAndAppManagementRoleDefinition extends RoleDefinition {}
export interface EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent {
    // Azure AD device identifier.
    deviceId?: NullableOption<string> | undefined;
    /**
     * Type of the enrollment. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser,
     * appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin,
     * windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount,
     * azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged,
     * androidEnterpriseCorporateWorkProfile.
     */
    enrollmentType?: DeviceEnrollmentType | undefined;
    /**
     * Highlevel failure category. Possible values are: unknown, authentication, authorization, accountValidation,
     * userValidation, deviceNotSupported, inMaintenance, badRequest, featureNotSupported, enrollmentRestrictionsEnforced,
     * clientDisconnected, userAbandonment.
     */
    failureCategory?: DeviceEnrollmentFailureReason | undefined;
    // Detailed failure reason.
    failureReason?: NullableOption<string> | undefined;
    // Device identifier created or collected by Intune.
    managedDeviceIdentifier?: NullableOption<string> | undefined;
    // Operating System.
    operatingSystem?: NullableOption<string> | undefined;
    // OS Version.
    osVersion?: NullableOption<string> | undefined;
    // Identifier for the user that tried to enroll the device.
    userId?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface SearchEntity extends Entity {}
export interface Planner extends Entity {
    // Read-only. Nullable. Returns a collection of the specified buckets
    buckets?: NullableOption<PlannerBucket[]> | undefined;
    // Read-only. Nullable. Returns a collection of the specified plans
    plans?: NullableOption<PlannerPlan[]> | undefined;
    // Read-only. Nullable. Returns a collection of the specified tasks
    tasks?: NullableOption<PlannerTask[]> | undefined;
}
export interface PlannerBucket extends Entity {
    // Name of the bucket.
    name?: string | undefined;
    // Hint used to order items of this type in a list view. The format is defined as outlined here.
    orderHint?: NullableOption<string> | undefined;
    // Plan ID to which the bucket belongs.
    planId?: NullableOption<string> | undefined;
    // Read-only. Nullable. The collection of tasks in the bucket.
    tasks?: NullableOption<PlannerTask[]> | undefined;
}
export interface PlannerPlan extends Entity {
    // Read-only. The user who created the plan.
    createdBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: NullableOption<string> | undefined;
    /**
     * ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this
     * property can’t be updated.
     */
    owner?: NullableOption<string> | undefined;
    // Required. Title of the plan.
    title?: string | undefined;
    // Collection of buckets in the plan. Read-only. Nullable.
    buckets?: NullableOption<PlannerBucket[]> | undefined;
    // Additional details about the plan. Read-only. Nullable.
    details?: NullableOption<PlannerPlanDetails> | undefined;
    // Collection of tasks in the plan. Read-only. Nullable.
    tasks?: NullableOption<PlannerTask[]> | undefined;
}
export interface PlannerTask extends Entity {
    // Number of checklist items with value set to false, representing incomplete items.
    activeChecklistItemCount?: NullableOption<number> | undefined;
    // The categories to which the task has been applied. See applied Categories for possible values.
    appliedCategories?: NullableOption<PlannerAppliedCategories> | undefined;
    // Hint used to order items of this type in a list view. The format is defined as outlined here.
    assigneePriority?: NullableOption<string> | undefined;
    // The set of assignees the task is assigned to.
    assignments?: NullableOption<PlannerAssignments> | undefined;
    /**
     * Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long
     * and case-sensitive. Format validation is done on the service.
     */
    bucketId?: NullableOption<string> | undefined;
    // Number of checklist items that are present on the task.
    checklistItemCount?: NullableOption<number> | undefined;
    // Identity of the user that completed the task.
    completedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date
     * and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z
     */
    completedDateTime?: NullableOption<string> | undefined;
    // Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group.
    conversationThreadId?: NullableOption<string> | undefined;
    // Identity of the user that created the task.
    createdBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: NullableOption<string> | undefined;
    /**
     * Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    dueDateTime?: NullableOption<string> | undefined;
    // Read-only. Value is true if the details object of the task has a non-empty description and false otherwise.
    hasDescription?: NullableOption<boolean> | undefined;
    // Hint used to order items of this type in a list view. The format is defined as outlined here.
    orderHint?: NullableOption<string> | undefined;
    // Percentage of task completion. When set to 100, the task is considered completed.
    percentComplete?: NullableOption<number> | undefined;
    // Plan ID to which the task belongs.
    planId?: NullableOption<string> | undefined;
    /**
     * This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist,
     * description, reference.
     */
    previewType?: NullableOption<PlannerPreviewType> | undefined;
    // Number of external references that exist on the task.
    referenceCount?: NullableOption<number> | undefined;
    /**
     * Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    startDateTime?: NullableOption<string> | undefined;
    // Title of the task.
    title?: string | undefined;
    // Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
    assignedToTaskBoardFormat?: NullableOption<PlannerAssignedToTaskBoardTaskFormat> | undefined;
    // Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
    bucketTaskBoardFormat?: NullableOption<PlannerBucketTaskBoardTaskFormat> | undefined;
    // Read-only. Nullable. Additional details about the task.
    details?: NullableOption<PlannerTaskDetails> | undefined;
    // Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
    progressTaskBoardFormat?: NullableOption<PlannerProgressTaskBoardTaskFormat> | undefined;
}
export interface PlannerAssignedToTaskBoardTaskFormat extends Entity {
    /**
     * Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the
     * users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here.
     */
    orderHintsByAssignee?: NullableOption<PlannerOrderHintsByAssignee> | undefined;
    /**
     * Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or
     * if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format
     * is defined as outlined here.
     */
    unassignedOrderHint?: NullableOption<string> | undefined;
}
export interface PlannerBucketTaskBoardTaskFormat extends Entity {
    // Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here.
    orderHint?: NullableOption<string> | undefined;
}
export interface PlannerPlanDetails extends Entity {
    // An object that specifies the descriptions of the 25 categories that can be associated with tasks in the plan
    categoryDescriptions?: NullableOption<PlannerCategoryDescriptions> | undefined;
    /**
     * The set of user IDs that this plan is shared with. If you are using Microsoft 365 groups, use the groups API to manage
     * group membership to share the group's plan. You can also add existing members of the group to this collection, although
     * it is not required in order for them to access the plan owned by the group.
     */
    sharedWith?: NullableOption<PlannerUserIds> | undefined;
}
export interface PlannerProgressTaskBoardTaskFormat extends Entity {
    // Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here.
    orderHint?: NullableOption<string> | undefined;
}
export interface PlannerTaskDetails extends Entity {
    // The collection of checklist items on the task.
    checklist?: NullableOption<PlannerChecklistItems> | undefined;
    // Description of the task
    description?: NullableOption<string> | undefined;
    /**
     * This sets the type of preview that shows up on the task. Possible values are: automatic, noPreview, checklist,
     * description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
     */
    previewType?: NullableOption<PlannerPreviewType> | undefined;
    // The collection of references on the task.
    references?: NullableOption<PlannerExternalReferences> | undefined;
}
export interface SharedInsight extends Entity {
    // Details about the shared item. Read only.
    lastShared?: NullableOption<SharingDetail> | undefined;
    // Reference properties of the shared document, such as the url and type of the document. Read-only
    resourceReference?: NullableOption<ResourceReference> | undefined;
    // Properties that you can use to visualize the document in your experience. Read-only
    resourceVisualization?: NullableOption<ResourceVisualization> | undefined;
    sharingHistory?: NullableOption<SharingDetail[]> | undefined;
    lastSharedMethod?: NullableOption<Entity> | undefined;
    /**
     * Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked
     * attachments, the type is driveItem.
     */
    resource?: NullableOption<Entity> | undefined;
}
export interface Trending extends Entity {
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Reference properties of the trending document, such as the url and type of the document.
    resourceReference?: NullableOption<ResourceReference> | undefined;
    // Properties that you can use to visualize the document in your experience.
    resourceVisualization?: NullableOption<ResourceVisualization> | undefined;
    /**
     * Value indicating how much the document is currently trending. The larger the number, the more the document is currently
     * trending around the user (the more relevant it is). Returned documents are sorted by this value.
     */
    weight?: number | undefined;
    // Used for navigating to the trending document.
    resource?: NullableOption<Entity> | undefined;
}
export interface UsedInsight extends Entity {
    // Information about when the item was last viewed or modified by the user. Read only.
    lastUsed?: NullableOption<UsageDetails> | undefined;
    // Reference properties of the used document, such as the url and type of the document. Read-only
    resourceReference?: NullableOption<ResourceReference> | undefined;
    // Properties that you can use to visualize the document in your experience. Read-only
    resourceVisualization?: NullableOption<ResourceVisualization> | undefined;
    /**
     * Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked
     * attachments, the type is driveItem.
     */
    resource?: NullableOption<Entity> | undefined;
}
export interface ChangeTrackedEntity extends Entity {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: NullableOption<string> | undefined;
    // Identity of the person who last modified the entity.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
}
export interface ShiftPreferences extends ChangeTrackedEntity {
    // Availability of the user to be scheduled for work and its recurrence pattern.
    availability?: NullableOption<ShiftAvailability[]> | undefined;
}
export interface OnenoteEntityBaseModel extends Entity {
    // The endpoint where you can get details about the page. Read-only.
    self?: NullableOption<string> | undefined;
}
export interface OnenoteEntitySchemaObjectModel extends OnenoteEntityBaseModel {
    /**
     * The date and time when the page was created. The timestamp represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: NullableOption<string> | undefined;
}
export interface OnenoteEntityHierarchyModel extends OnenoteEntitySchemaObjectModel {
    // Identity of the user, device, and application which created the item. Read-only.
    createdBy?: NullableOption<IdentitySet> | undefined;
    // The name of the notebook.
    displayName?: NullableOption<string> | undefined;
    // Identity of the user, device, and application which created the item. Read-only.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * The date and time when the notebook was last modified. The timestamp represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
}
export interface Notebook extends OnenoteEntityHierarchyModel {
    // Indicates whether this is the user's default notebook. Read-only.
    isDefault?: NullableOption<boolean> | undefined;
    /**
     * Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the
     * owner. Read-only.
     */
    isShared?: NullableOption<boolean> | undefined;
    /**
     * Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's
     * installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     */
    links?: NullableOption<NotebookLinks> | undefined;
    // The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
    sectionGroupsUrl?: NullableOption<string> | undefined;
    // The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
    sectionsUrl?: NullableOption<string> | undefined;
    /**
     * Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor
     * represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
     */
    userRole?: NullableOption<OnenoteUserRole> | undefined;
    // The section groups in the notebook. Read-only. Nullable.
    sectionGroups?: NullableOption<SectionGroup[]> | undefined;
    // The sections in the notebook. Read-only. Nullable.
    sections?: NullableOption<OnenoteSection[]> | undefined;
}
export interface SectionGroup extends OnenoteEntityHierarchyModel {
    /**
     * The URL for the sectionGroups navigation property, which returns all the section groups in the section group.
     * Read-only.
     */
    sectionGroupsUrl?: NullableOption<string> | undefined;
    // The URL for the sections navigation property, which returns all the sections in the section group. Read-only.
    sectionsUrl?: NullableOption<string> | undefined;
    // The notebook that contains the section group. Read-only.
    parentNotebook?: NullableOption<Notebook> | undefined;
    // The section group that contains the section group. Read-only.
    parentSectionGroup?: NullableOption<SectionGroup> | undefined;
    // The section groups in the section. Read-only. Nullable.
    sectionGroups?: NullableOption<SectionGroup[]> | undefined;
    // The sections in the section group. Read-only. Nullable.
    sections?: NullableOption<OnenoteSection[]> | undefined;
}
export interface OnenoteSection extends OnenoteEntityHierarchyModel {
    // Indicates whether this is the user's default section. Read-only.
    isDefault?: NullableOption<boolean> | undefined;
    /**
     * Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's
     * installed. The oneNoteWebURL link opens the section in OneNote on the web.
     */
    links?: NullableOption<SectionLinks> | undefined;
    // The pages endpoint where you can get details for all the pages in the section. Read-only.
    pagesUrl?: NullableOption<string> | undefined;
    // The collection of pages in the section. Read-only. Nullable.
    pages?: NullableOption<OnenotePage[]> | undefined;
    // The notebook that contains the section. Read-only.
    parentNotebook?: NullableOption<Notebook> | undefined;
    // The section group that contains the section. Read-only.
    parentSectionGroup?: NullableOption<SectionGroup> | undefined;
}
export interface Operation extends Entity {
    // The start time of the operation.
    createdDateTime?: NullableOption<string> | undefined;
    // The time of the last action of the operation.
    lastActionDateTime?: NullableOption<string> | undefined;
    // Possible values are: notStarted, running, completed, failed. Read-only.
    status?: NullableOption<OperationStatus> | undefined;
}
export interface OnenoteOperation extends Operation {
    // The error returned by the operation.
    error?: NullableOption<OnenoteOperationError> | undefined;
    // The operation percent complete if the operation is still in running status.
    percentComplete?: NullableOption<string> | undefined;
    // The resource id.
    resourceId?: NullableOption<string> | undefined;
    // The resource URI for the object. For example, the resource URI for a copied page or section.
    resourceLocation?: NullableOption<string> | undefined;
}
export interface OnenotePage extends OnenoteEntitySchemaObjectModel {
    // The page's HTML content.
    content?: NullableOption<any> | undefined;
    // The URL for the page's HTML content. Read-only.
    contentUrl?: NullableOption<string> | undefined;
    // The unique identifier of the application that created the page. Read-only.
    createdByAppId?: NullableOption<string> | undefined;
    /**
     * The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // The indentation level of the page. Read-only.
    level?: NullableOption<number> | undefined;
    /**
     * Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed.
     * The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
     */
    links?: NullableOption<PageLinks> | undefined;
    // The order of the page within its parent section. Read-only.
    order?: NullableOption<number> | undefined;
    // The title of the page.
    title?: NullableOption<string> | undefined;
    userTags?: NullableOption<string[]> | undefined;
    // The notebook that contains the page. Read-only.
    parentNotebook?: NullableOption<Notebook> | undefined;
    // The section that contains the page. Read-only.
    parentSection?: NullableOption<OnenoteSection> | undefined;
}
export interface OnenoteResource extends OnenoteEntityBaseModel {
    // The content stream
    content?: NullableOption<any> | undefined;
    // The URL for downloading the content
    contentUrl?: NullableOption<string> | undefined;
}
export interface Print {
    // Tenant-wide settings for the Universal Print service.
    settings?: NullableOption<PrintSettings> | undefined;
    // The list of available print connectors.
    connectors?: NullableOption<PrintConnector[]> | undefined;
    // The list of print long running operations.
    operations?: NullableOption<PrintOperation[]> | undefined;
    // The list of printers registered in the tenant.
    printers?: NullableOption<Printer[]> | undefined;
    // The list of available Universal Print service endpoints.
    services?: NullableOption<PrintService[]> | undefined;
    // The list of printer shares registered in the tenant.
    shares?: NullableOption<PrinterShare[]> | undefined;
    // List of abstract definition for a task that can be triggered when various events occur within Universal Print.
    taskDefinitions?: NullableOption<PrintTaskDefinition[]> | undefined;
}
export interface PrintConnector extends Entity {
    // The connector's version.
    appVersion?: string | undefined;
    // The name of the connector.
    displayName?: string | undefined;
    // The connector machine's hostname.
    fullyQualifiedDomainName?: string | undefined;
    // The physical and/or organizational location of the connector.
    location?: NullableOption<PrinterLocation> | undefined;
    // The connector machine's operating system version.
    operatingSystem?: string | undefined;
    // The DateTimeOffset when the connector was registered.
    registeredDateTime?: string | undefined;
}
export interface PrintOperation extends Entity {
    // The DateTimeOffset when the operation was created. Read-only.
    createdDateTime?: string | undefined;
    // The status of the operation. Read-only.
    status?: PrintOperationStatus | undefined;
}
export interface PrinterBase extends Entity {
    // The capabilities of the printer/printerShare.
    capabilities?: NullableOption<PrinterCapabilities> | undefined;
    // The default print settings of printer/printerShare.
    defaults?: NullableOption<PrinterDefaults> | undefined;
    // The name of the printer/printerShare.
    displayName?: string | undefined;
    // Whether the printer/printerShare is currently accepting new print jobs.
    isAcceptingJobs?: NullableOption<boolean> | undefined;
    // The physical and/or organizational location of the printer/printerShare.
    location?: NullableOption<PrinterLocation> | undefined;
    // The manufacturer of the printer/printerShare.
    manufacturer?: NullableOption<string> | undefined;
    // The model name of the printer/printerShare.
    model?: NullableOption<string> | undefined;
    // The processing status of the printer/printerShare, including any errors.
    status?: PrinterStatus | undefined;
    // The list of jobs that are queued for printing by the printer/printerShare.
    jobs?: NullableOption<PrintJob[]> | undefined;
}
export interface Printer extends PrinterBase {
    // True if the printer has a physical device for printing. Read-only.
    hasPhysicalDevice?: boolean | undefined;
    // True if the printer is shared; false otherwise. Read-only.
    isShared?: boolean | undefined;
    // The most recent dateTimeOffset when a printer interacted with Universal Print. Read-only.
    lastSeenDateTime?: NullableOption<string> | undefined;
    // The DateTimeOffset when the printer was registered. Read-only.
    registeredDateTime?: string | undefined;
    // The connectors that are associated with the printer.
    connectors?: NullableOption<PrintConnector[]> | undefined;
    /**
     * The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with
     * the printer. Read-only. Nullable.
     */
    shares?: NullableOption<PrinterShare[]> | undefined;
    // A list of task triggers that are associated with the printer.
    taskTriggers?: NullableOption<PrintTaskTrigger[]> | undefined;
}
export interface PrintService extends Entity {
    // Endpoints that can be used to access the service. Read-only. Nullable.
    endpoints?: NullableOption<PrintServiceEndpoint[]> | undefined;
}
export interface PrinterShare extends PrinterBase {
    /**
     * If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by
     * the allowedUsers and allowedGroups navigation properties.
     */
    allowAllUsers?: boolean | undefined;
    // The DateTimeOffset when the printer share was created. Read-only.
    createdDateTime?: string | undefined;
    // The groups whose users have access to print using the printer.
    allowedGroups?: NullableOption<Group[]> | undefined;
    // The users who have access to print using the printer.
    allowedUsers?: NullableOption<User[]> | undefined;
    // The printer that this printer share is related to.
    printer?: NullableOption<Printer> | undefined;
}
export interface PrintTaskDefinition extends Entity {
    // The application that created the printTaskDefinition. Read-only.
    createdBy?: AppIdentity | undefined;
    // The name of the printTaskDefinition.
    displayName?: string | undefined;
    /**
     * A list of tasks that have been created based on this definition. The list includes currently running tasks and recently
     * completed tasks. Read-only.
     */
    tasks?: NullableOption<PrintTask[]> | undefined;
}
export interface PrintDocument extends Entity {
    // The document's content (MIME) type. Read-only.
    contentType?: NullableOption<string> | undefined;
    // The document's name. Read-only.
    displayName?: NullableOption<string> | undefined;
    // The document's size in bytes. Read-only.
    size?: number | undefined;
}
export interface PrintTaskTrigger extends Entity {
    /**
     * The Universal Print event that will cause a new printTask to be triggered. Valid values are described in the following
     * table.
     */
    event?: PrintEvent | undefined;
    // An abstract definition that will be used to create a printTask when triggered by a print event. Read-only.
    definition?: PrintTaskDefinition | undefined;
}
export interface PrintJob extends Entity {
    // A group of settings that a printer should use to print a job.
    configuration?: PrintJobConfiguration | undefined;
    // Read-only. Nullable.
    createdBy?: NullableOption<UserIdentity> | undefined;
    // The DateTimeOffset when the job was created. Read-only.
    createdDateTime?: string | undefined;
    // If true, document can be fetched by printer.
    isFetchable?: boolean | undefined;
    // Contains the source job URL, if the job has been redirected from another printer.
    redirectedFrom?: NullableOption<string> | undefined;
    // Contains the destination job URL, if the job has been redirected to another printer.
    redirectedTo?: NullableOption<string> | undefined;
    // The status of the print job. Read-only.
    status?: PrintJobStatus | undefined;
    // Read-only.
    documents?: NullableOption<PrintDocument[]> | undefined;
    // A list of printTasks that were triggered by this print job.
    tasks?: NullableOption<PrintTask[]> | undefined;
}
export interface PrinterCreateOperation extends PrintOperation {
    // The signed certificate created during the registration process. Read-only.
    certificate?: NullableOption<string> | undefined;
    // The created printer entity. Read-only.
    printer?: NullableOption<Printer> | undefined;
}
export interface PrintTask extends Entity {
    /**
     * The URL for the print entity that triggered this task. For example,
     * https://graph.microsoft.com/beta/print/printers/{printerId}/jobs/{jobId}. Read-only.
     */
    parentUrl?: string | undefined;
    /**
     * The current execution status of this printTask. The calling application is responsible for updating this status when
     * processing is finished, unless the related printJob has been redirected to another printer. Failure to report
     * completion will result in the related print job being blocked from printing and eventually deleted.
     */
    status?: PrintTaskStatus | undefined;
    // The printTaskDefinition that was used to create this task. Read-only.
    definition?: PrintTaskDefinition | undefined;
    // The printTaskTrigger that triggered this task's execution. Read-only.
    trigger?: PrintTaskTrigger | undefined;
}
export interface PrintServiceEndpoint extends Entity {
    // A human-readable display name for the endpoint.
    displayName?: string | undefined;
    // The URI that can be used to access the service.
    uri?: string | undefined;
}
export interface ActivityHistoryItem extends Entity {
    /**
     * Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and
     * lastActiveDateTime.
     */
    activeDurationSeconds?: NullableOption<number> | undefined;
    // Set by the server. DateTime in UTC when the object was created on the server.
    createdDateTime?: NullableOption<string> | undefined;
    // Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
    expirationDateTime?: NullableOption<string> | undefined;
    /**
     * Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null,
     * historyItem status should be Ongoing.
     */
    lastActiveDateTime?: NullableOption<string> | undefined;
    // Set by the server. DateTime in UTC when the object was modified on the server.
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
    startedDateTime?: string | undefined;
    // Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
    status?: NullableOption<Status> | undefined;
    /**
     * Optional. The timezone in which the user's device used to generate the activity was located at activity creation time.
     * Values supplied as Olson IDs in order to support cross-platform representation.
     */
    userTimezone?: NullableOption<string> | undefined;
    // Optional. NavigationProperty/Containment; navigation property to the associated activity.
    activity?: UserActivity | undefined;
}
export interface DataPolicyOperation extends Entity {
    /**
     * Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For
     * example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Null until the operation completes.
     */
    completedDateTime?: NullableOption<string> | undefined;
    // Specifies the progress of an operation.
    progress?: number | undefined;
    // Possible values are: notStarted, running, complete, failed, unknownFutureValue.
    status?: NullableOption<DataPolicyOperationStatus> | undefined;
    // The URL location to where data is being exported for export requests.
    storageLocation?: NullableOption<string> | undefined;
    /**
     * Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    submittedDateTime?: string | undefined;
    // The id for the user on whom the operation is performed.
    userId?: string | undefined;
}
export interface Alert extends Entity {
    // Name or alias of the activity group (attacker) this alert is attributed to.
    activityGroupName?: NullableOption<string> | undefined;
    alertDetections?: NullableOption<AlertDetection[]> | undefined;
    // Name of the analyst the alert is assigned to for triage, investigation, or remediation (supports update).
    assignedTo?: NullableOption<string> | undefined;
    // Azure subscription ID, present if this alert is related to an Azure resource.
    azureSubscriptionId?: NullableOption<string> | undefined;
    // Azure Active Directory tenant ID. Required.
    azureTenantId?: string | undefined;
    // Category of the alert (for example, credentialTheft, ransomware, etc.).
    category?: NullableOption<string> | undefined;
    /**
     * Time at which the alert was closed. The Timestamp type represents date and time information using ISO 8601 format and
     * is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z (supports update).
     */
    closedDateTime?: NullableOption<string> | undefined;
    // Security-related stateful information generated by the provider about the cloud application/s related to this alert.
    cloudAppStates?: NullableOption<CloudAppSecurityState[]> | undefined;
    // Customer-provided comments on alert (for customer alert management) (supports update).
    comments?: NullableOption<string[]> | undefined;
    // Confidence of the detection logic (percentage between 1-100).
    confidence?: NullableOption<number> | undefined;
    /**
     * Time at which the alert was created by the alert provider. The Timestamp type represents date and time information
     * using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * Required.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // Alert description.
    description?: NullableOption<string> | undefined;
    // Set of alerts related to this alert entity (each alert is pushed to the SIEM as a separate record).
    detectionIds?: NullableOption<string[]> | undefined;
    /**
     * Time at which the event(s) that served as the trigger(s) to generate the alert occurred. The Timestamp type represents
     * date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z. Required.
     */
    eventDateTime?: NullableOption<string> | undefined;
    /**
     * Analyst feedback on the alert. Possible values are: unknown, truePositive, falsePositive, benignPositive. (supports
     * update)
     */
    feedback?: NullableOption<AlertFeedback> | undefined;
    // Security-related stateful information generated by the provider about the file(s) related to this alert.
    fileStates?: NullableOption<FileSecurityState[]> | undefined;
    // A collection of alertHistoryStates comprising an audit log of all updates made to an alert.
    historyStates?: NullableOption<AlertHistoryState[]> | undefined;
    // Security-related stateful information generated by the provider about the host(s) related to this alert.
    hostStates?: NullableOption<HostSecurityState[]> | undefined;
    // IDs of incidents related to current alert.
    incidentIds?: NullableOption<string[]> | undefined;
    investigationSecurityStates?: NullableOption<InvestigationSecurityState[]> | undefined;
    lastEventDateTime?: NullableOption<string> | undefined;
    /**
     * Time at which the alert entity was last modified. The Timestamp type represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Threat Intelligence pertaining to malware related to this alert.
    malwareStates?: NullableOption<MalwareState[]> | undefined;
    messageSecurityStates?: NullableOption<MessageSecurityState[]> | undefined;
    // Security-related stateful information generated by the provider about the network connection(s) related to this alert.
    networkConnections?: NullableOption<NetworkConnection[]> | undefined;
    // Security-related stateful information generated by the provider about the process or processes related to this alert.
    processes?: NullableOption<Process[]> | undefined;
    /**
     * Vendor/provider recommended action(s) to take as a result of the alert (for example, isolate machine, enforce2FA,
     * reimage host).
     */
    recommendedActions?: NullableOption<string[]> | undefined;
    // Security-related stateful information generated by the provider about the registry keys related to this alert.
    registryKeyStates?: NullableOption<RegistryKeyState[]> | undefined;
    // Resources related to current alert. For example, for some alerts this can have the Azure Resource value.
    securityResources?: NullableOption<SecurityResource[]> | undefined;
    // Alert severity - set by vendor/provider. Possible values are: unknown, informational, low, medium, high. Required.
    severity?: AlertSeverity | undefined;
    /**
     * Hyperlinks (URIs) to the source material related to the alert, for example, provider's user interface for alerts or log
     * search, etc.
     */
    sourceMaterials?: NullableOption<string[]> | undefined;
    /**
     * Alert lifecycle status (stage). Possible values are: unknown, newAlert, inProgress, resolved. (supports update).
     * Required.
     */
    status?: AlertStatus | undefined;
    /**
     * User-definable labels that can be applied to an alert and can serve as filter conditions (for example 'HVA', 'SAW',
     * etc.) (supports update).
     */
    tags?: NullableOption<string[]> | undefined;
    // Alert title. Required.
    title?: NullableOption<string> | undefined;
    /**
     * Security-related information about the specific properties that triggered the alert (properties appearing in the
     * alert). Alerts might contain information about multiple users, hosts, files, ip addresses. This field indicates which
     * properties triggered the alert generation.
     */
    triggers?: NullableOption<AlertTrigger[]> | undefined;
    uriClickSecurityStates?: NullableOption<UriClickSecurityState[]> | undefined;
    // Security-related stateful information generated by the provider about the user accounts related to this alert.
    userStates?: NullableOption<UserSecurityState[]> | undefined;
    /**
     * Complex type containing details about the security product/service vendor, provider, and subprovider (for example,
     * vendor=Microsoft; provider=Windows Defender ATP; subProvider=AppLocker). Required.
     */
    vendorInformation?: NullableOption<SecurityVendorInformation> | undefined;
    // Threat intelligence pertaining to one or more vulnerabilities related to this alert.
    vulnerabilityStates?: NullableOption<VulnerabilityState[]> | undefined;
}
export interface SecureScore extends Entity {
    // Active user count of the given tenant.
    activeUserCount?: NullableOption<number> | undefined;
    /**
     * Average score by different scopes (for example, average by industry, average by seating) and control category
     * (Identity, Data, Device, Apps, Infrastructure) within the scope.
     */
    averageComparativeScores?: NullableOption<AverageComparativeScore[]> | undefined;
    // GUID string for tenant ID.
    azureTenantId?: string | undefined;
    // Contains tenant scores for a set of controls.
    controlScores?: NullableOption<ControlScore[]> | undefined;
    // The date when the entity is created.
    createdDateTime?: NullableOption<string> | undefined;
    // Tenant current attained score on specified date.
    currentScore?: NullableOption<number> | undefined;
    // Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint).
    enabledServices?: NullableOption<string[]> | undefined;
    // Licensed user count of the given tenant.
    licensedUserCount?: NullableOption<number> | undefined;
    // Tenant maximum possible score on specified date.
    maxScore?: NullableOption<number> | undefined;
    /**
     * Complex type containing details about the security product/service vendor, provider, and subprovider (for example,
     * vendor=Microsoft; provider=SecureScore). Required.
     */
    vendorInformation?: NullableOption<SecurityVendorInformation> | undefined;
}
export interface SecureScoreControlProfile extends Entity {
    // Control action type (Config, Review, Behavior).
    actionType?: NullableOption<string> | undefined;
    // URL to where the control can be actioned.
    actionUrl?: NullableOption<string> | undefined;
    // GUID string for tenant ID.
    azureTenantId?: string | undefined;
    // The collection of compliance information associated with secure score control
    complianceInformation?: NullableOption<ComplianceInformation[]> | undefined;
    // Control action category (Account, Data, Device, Apps, Infrastructure).
    controlCategory?: NullableOption<string> | undefined;
    // Flag to indicate where the tenant has marked a control (ignore, thirdParty, reviewed) (supports update).
    controlStateUpdates?: NullableOption<SecureScoreControlStateUpdate[]> | undefined;
    // Flag to indicate if a control is depreciated.
    deprecated?: NullableOption<boolean> | undefined;
    // Resource cost of implemmentating control (low, moderate, high).
    implementationCost?: NullableOption<string> | undefined;
    // Time at which the control profile entity was last modified. The Timestamp type represents date and time
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Current obtained max score on specified date.
    maxScore?: NullableOption<number> | undefined;
    // Microsoft's stack ranking of control.
    rank?: NullableOption<number> | undefined;
    // Description of what the control will help remediate.
    remediation?: NullableOption<string> | undefined;
    // Description of the impact on users of the remediation.
    remediationImpact?: NullableOption<string> | undefined;
    // Service that owns the control (Exchange, Sharepoint, Azure AD).
    service?: NullableOption<string> | undefined;
    /**
     * List of threats the control mitigates
     * (accountBreach,dataDeletion,dataExfiltration,dataSpillage,elevationOfPrivilege,maliciousInsider,passwordCracking,phishingOrWhaling,spoofing).
     */
    threats?: NullableOption<string[]> | undefined;
    // Control tier (Core, Defense in Depth, Advanced.)
    tier?: NullableOption<string> | undefined;
    // Title of the control.
    title?: NullableOption<string> | undefined;
    // User impact of implementing control (low, moderate, high).
    userImpact?: NullableOption<string> | undefined;
    vendorInformation?: NullableOption<SecurityVendorInformation> | undefined;
}
export interface Security extends Entity {
    // Read-only. Nullable.
    alerts?: NullableOption<Alert[]> | undefined;
    secureScoreControlProfiles?: NullableOption<SecureScoreControlProfile[]> | undefined;
    secureScores?: NullableOption<SecureScore[]> | undefined;
}
export interface CommsOperation extends Entity {
    // Unique Client Context string. Max limit is 256 chars.
    clientContext?: NullableOption<string> | undefined;
    // The result information. Read-only.
    resultInfo?: NullableOption<ResultInfo> | undefined;
    // Possible values are: notStarted, running, completed, failed. Read-only.
    status?: OperationStatus | undefined;
}
export interface Participant extends Entity {
    // Information about the participant.
    info?: ParticipantInfo | undefined;
    // true if the participant is in lobby.
    isInLobby?: boolean | undefined;
    // true if the participant is muted (client or server muted).
    isMuted?: boolean | undefined;
    // The list of media streams.
    mediaStreams?: NullableOption<MediaStream[]> | undefined;
    // Information on whether the participant has recording capability.
    recordingInfo?: NullableOption<RecordingInfo> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface CancelMediaProcessingOperation extends CommsOperation {}
// tslint:disable-next-line: interface-name
export interface InviteParticipantsOperation extends CommsOperation {
    // The participants to invite.
    participants?: InvitationParticipantInfo[] | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface MuteParticipantOperation extends CommsOperation {}
// tslint:disable-next-line: no-empty-interface
export interface PlayPromptOperation extends CommsOperation {}
export interface RecordOperation extends CommsOperation {
    // The access token required to retrieve the recording.
    recordingAccessToken?: NullableOption<string> | undefined;
    // The location where the recording is located.
    recordingLocation?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface SubscribeToToneOperation extends CommsOperation {}
// tslint:disable-next-line: no-empty-interface
export interface UnmuteParticipantOperation extends CommsOperation {}
// tslint:disable-next-line: no-empty-interface
export interface UpdateRecordingStatusOperation extends CommsOperation {}
// tslint:disable-next-line: no-empty-interface
export interface AuthenticationMethod extends Entity {}
export interface Fido2AuthenticationMethod extends AuthenticationMethod {
    // Authenticator Attestation GUID, an identifier that indicates the type (e.g. make and model) of the authenticator.
    aaGuid?: NullableOption<string> | undefined;
    // The attestation certificate(s) attached to this security key.
    attestationCertificates?: NullableOption<string[]> | undefined;
    // The attestation level of this FIDO2 security key. Possible values are: attested, notAttested, unknownFutureValue.
    attestationLevel?: NullableOption<AttestationLevel> | undefined;
    // The timestamp when this key was registered to the user.
    createdDateTime?: NullableOption<string> | undefined;
    // The display name of the key as given by the user.
    displayName?: NullableOption<string> | undefined;
    // The manufacturer-assigned model of the FIDO2 security key.
    model?: NullableOption<string> | undefined;
}
export interface MicrosoftAuthenticatorAuthenticationMethod extends AuthenticationMethod {
    /**
     * The date and time that this app was registered. This property is null if the device is not registered for passwordless
     * Phone Sign-In.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // Tags containing app metadata.
    deviceTag?: NullableOption<string> | undefined;
    // The name of the device on which this app is registered.
    displayName?: NullableOption<string> | undefined;
    // Numerical version of this instance of the Authenticator app.
    phoneAppVersion?: NullableOption<string> | undefined;
    /**
     * The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered
     * for passwordless Phone Sign-In.
     */
    device?: NullableOption<Device> | undefined;
}
export interface WindowsHelloForBusinessAuthenticationMethod extends AuthenticationMethod {
    // The date and time that this Windows Hello for Business key was registered.
    createdDateTime?: NullableOption<string> | undefined;
    // The name of the device on which Windows Hello for Business is registered
    displayName?: NullableOption<string> | undefined;
    // Key strength of this Windows Hello for Business key. Possible values are: normal, weak, unknown.
    keyStrength?: NullableOption<AuthenticationMethodKeyStrength> | undefined;
    // The registered device on which this Windows Hello for Business key resides.
    device?: NullableOption<Device> | undefined;
}
export interface ConversationMember extends Entity {
    // The display name of the user.
    displayName?: NullableOption<string> | undefined;
    // The roles for that user.
    roles?: NullableOption<string[]> | undefined;
    /**
     * The timestamp denoting how far back a conversation's history is shared with the conversation member. This property is
     * settable only for members of a chat.
     */
    visibleHistoryStartDateTime?: NullableOption<string> | undefined;
}
export interface AadUserConversationMember extends ConversationMember {
    // The email address of the user.
    email?: NullableOption<string> | undefined;
    // TenantId which the Azure AD user belongs to.
    tenantId?: NullableOption<string> | undefined;
    // The GUID of the user.
    userId?: NullableOption<string> | undefined;
    user?: NullableOption<User> | undefined;
}
export interface AppCatalogs extends Entity {
    teamsApps?: NullableOption<TeamsApp[]> | undefined;
}
export interface TeamsApp extends Entity {
    // The name of the catalog app provided by the app developer in the Microsoft Teams zip app package.
    displayName?: NullableOption<string> | undefined;
    // The method of distribution for the app. Read-only.
    distributionMethod?: NullableOption<TeamsAppDistributionMethod> | undefined;
    // The ID of the catalog provided by the app developer in the Microsoft Teams zip app package.
    externalId?: NullableOption<string> | undefined;
    // The details for each version of the app.
    appDefinitions?: NullableOption<TeamsAppDefinition[]> | undefined;
}
export interface Channel extends Entity {
    // Read only. Timestamp at which the channel was created.
    createdDateTime?: NullableOption<string> | undefined;
    // Optional textual description for the channel.
    description?: NullableOption<string> | undefined;
    // Channel name as it will appear to the user in Microsoft Teams.
    displayName?: string | undefined;
    // The email address for sending messages to the channel. Read-only.
    email?: NullableOption<string> | undefined;
    /**
     * Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set
     * programmatically with Create team. Default: false.
     */
    isFavoriteByDefault?: NullableOption<boolean> | undefined;
    // The type of the channel. Can be set during creation and cannot be changed. Default: standard.
    membershipType?: NullableOption<ChannelMembershipType> | undefined;
    /**
     * A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel
     * in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed.
     * Read-only.
     */
    webUrl?: NullableOption<string> | undefined;
    // Metadata for the location where the channel's files are stored.
    filesFolder?: NullableOption<DriveItem> | undefined;
    // A collection of membership records associated with the channel.
    members?: NullableOption<ConversationMember[]> | undefined;
    // A collection of all the messages in the channel. A navigation property. Nullable.
    messages?: NullableOption<ChatMessage[]> | undefined;
    // A collection of all the tabs in the channel. A navigation property.
    tabs?: NullableOption<TeamsTab[]> | undefined;
}
export interface ChatMessage extends Entity {
    // Attached files. Attachments are currently read-only – sending attachments is not supported.
    attachments?: NullableOption<ChatMessageAttachment[]> | undefined;
    /**
     * Plaintext/HTML representation of the content of the chat message. Representation is specified by the contentType inside
     * the body. The content is always in HTML if the chat message contains a chatMessageMention.
     */
    body?: ItemBody | undefined;
    // If the message was sent in a channel, represents identity of the channel.
    channelIdentity?: NullableOption<ChannelIdentity> | undefined;
    // If the message was sent in a chat, represents the identity of the chat.
    chatId?: NullableOption<string> | undefined;
    // Timestamp of when the chat message was created.
    createdDateTime?: NullableOption<string> | undefined;
    // Read only. Timestamp at which the chat message was deleted, or null if not deleted.
    deletedDateTime?: NullableOption<string> | undefined;
    // Read-only. Version number of the chat message.
    etag?: NullableOption<string> | undefined;
    // Read only. Details of the sender of the chat message.
    from?: NullableOption<IdentitySet> | undefined;
    // The importance of the chat message. The possible values are: normal, high, urgent.
    importance?: ChatMessageImportance | undefined;
    /**
     * Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits
     * are made the value is null.
     */
    lastEditedDateTime?: NullableOption<string> | undefined;
    /**
     * Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added
     * or removed.
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Locale of the chat message set by the client. Always set to en-us.
    locale?: string | undefined;
    // List of entities mentioned in the chat message. Currently supports user, bot, team, channel.
    mentions?: NullableOption<ChatMessageMention[]> | undefined;
    // The type of chat message. The possible value is: message.
    messageType?: ChatMessageType | undefined;
    // Defines the properties of a policy violation set by a data loss prevention (DLP) application.
    policyViolation?: NullableOption<ChatMessagePolicyViolation> | undefined;
    // Reactions for this chat message (for example, Like).
    reactions?: NullableOption<ChatMessageReaction[]> | undefined;
    /**
     * Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in
     * channels, not chats.)
     */
    replyToId?: NullableOption<string> | undefined;
    // The subject of the chat message, in plaintext.
    subject?: NullableOption<string> | undefined;
    /**
     * Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only
     * applies to channel chat messages, not chat messages in a chat.
     */
    summary?: NullableOption<string> | undefined;
    // Read-only. Link to the message in Microsoft Teams.
    webUrl?: NullableOption<string> | undefined;
    // Content in a message hosted by Microsoft Teams - for example, images or code snippets.
    hostedContents?: NullableOption<ChatMessageHostedContent[]> | undefined;
    // Replies for a specified message.
    replies?: NullableOption<ChatMessage[]> | undefined;
}
export interface TeamsTab extends Entity {
    // Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
    configuration?: NullableOption<TeamsTabConfiguration> | undefined;
    // Name of the tab.
    displayName?: NullableOption<string> | undefined;
    // Deep link URL of the tab instance. Read only.
    webUrl?: NullableOption<string> | undefined;
    // The application that is linked to the tab.
    teamsApp?: NullableOption<TeamsApp> | undefined;
}
export interface TeamsAppInstallation extends Entity {
    // The app that is installed.
    teamsApp?: NullableOption<TeamsApp> | undefined;
    // The details of this version of the app.
    teamsAppDefinition?: NullableOption<TeamsAppDefinition> | undefined;
}
export interface TeamworkHostedContent extends Entity {
    // Write only. Bytes for the hosted content (such as images).
    contentBytes?: NullableOption<number> | undefined;
    // Write only. Content type, such as image/png, image/jpg.
    contentType?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ChatMessageHostedContent extends TeamworkHostedContent {}
export interface Schedule extends Entity {
    // Indicates whether the schedule is enabled for the team. Required.
    enabled?: NullableOption<boolean> | undefined;
    // Indicates whether offer shift requests are enabled for the schedule.
    offerShiftRequestsEnabled?: NullableOption<boolean> | undefined;
    // Indicates whether open shifts are enabled for the schedule.
    openShiftsEnabled?: NullableOption<boolean> | undefined;
    // The status of the schedule provisioning. The possible values are notStarted, running, completed, failed.
    provisionStatus?: NullableOption<OperationStatus> | undefined;
    // Additional information about why schedule provisioning failed.
    provisionStatusCode?: NullableOption<string> | undefined;
    // Indicates whether swap shifts requests are enabled for the schedule.
    swapShiftsRequestsEnabled?: NullableOption<boolean> | undefined;
    // Indicates whether time clock is enabled for the schedule.
    timeClockEnabled?: NullableOption<boolean> | undefined;
    // Indicates whether time off requests are enabled for the schedule.
    timeOffRequestsEnabled?: NullableOption<boolean> | undefined;
    // Indicates the time zone of the schedule team using tz database format. Required.
    timeZone?: NullableOption<string> | undefined;
    workforceIntegrationIds?: NullableOption<string[]> | undefined;
    offerShiftRequests?: NullableOption<OfferShiftRequest[]> | undefined;
    openShiftChangeRequests?: NullableOption<OpenShiftChangeRequest[]> | undefined;
    openShifts?: NullableOption<OpenShift[]> | undefined;
    // The logical grouping of users in the schedule (usually by role).
    schedulingGroups?: NullableOption<SchedulingGroup[]> | undefined;
    // The shifts in the schedule.
    shifts?: NullableOption<Shift[]> | undefined;
    swapShiftsChangeRequests?: NullableOption<SwapShiftsChangeRequest[]> | undefined;
    // The set of reasons for a time off in the schedule.
    timeOffReasons?: NullableOption<TimeOffReason[]> | undefined;
    timeOffRequests?: NullableOption<TimeOffRequest[]> | undefined;
    // The instances of times off in the schedule.
    timesOff?: NullableOption<TimeOff[]> | undefined;
}
export interface TeamsAsyncOperation extends Entity {
    // Number of times the operation was attempted before being marked successful or failed.
    attemptsCount?: number | undefined;
    // Time when the operation was created.
    createdDateTime?: string | undefined;
    // Any error that causes the async operation to fail.
    error?: NullableOption<OperationError> | undefined;
    // Time when the async operation was last updated.
    lastActionDateTime?: string | undefined;
    // Denotes which type of operation is being described.
    operationType?: TeamsAsyncOperationType | undefined;
    // Operation status.
    status?: TeamsAsyncOperationStatus | undefined;
    // The ID of the object that's created or modified as result of this async operation, typically a team.
    targetResourceId?: NullableOption<string> | undefined;
    /**
     * The location of the object that's created or modified as result of this async operation. This URL should be treated as
     * an opaque value and not parsed into its component paths.
     */
    targetResourceLocation?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface TeamsTemplate extends Entity {}
export interface TeamsAppDefinition extends Entity {
    createdBy?: NullableOption<IdentitySet> | undefined;
    // Verbose description of the application.
    description?: NullableOption<string> | undefined;
    // The name of the app provided by the app developer.
    displayName?: NullableOption<string> | undefined;
    lastModifiedDateTime?: NullableOption<string> | undefined;
    /**
     * The published status of a specific version of a Teams app. Possible values are:submitted — The specific version of the
     * Teams app has been submitted and is under review. published — The request to publish the specific version of the Teams
     * app has been approved by the admin and the app is published. rejected — The request to publish the specific version of
     * the Teams app was rejected by the admin.
     */
    publishingState?: NullableOption<TeamsAppPublishingState> | undefined;
    // Short description of the application.
    shortDescription?: NullableOption<string> | undefined;
    // The ID from the Teams app manifest.
    teamsAppId?: NullableOption<string> | undefined;
    // The version number of the application.
    version?: NullableOption<string> | undefined;
    // The details of the bot specified in the Teams app manifest.
    bot?: NullableOption<TeamworkBot> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface TeamworkBot extends Entity {}
export interface Teamwork extends Entity {
    workforceIntegrations?: NullableOption<WorkforceIntegration[]> | undefined;
}
export interface WorkforceIntegration extends ChangeTrackedEntity {
    // API version for the call back URL. Start with 1.
    apiVersion?: NullableOption<number> | undefined;
    // Name of the workforce integration.
    displayName?: NullableOption<string> | undefined;
    // The workforce integration encryption resource.
    encryption?: NullableOption<WorkforceIntegrationEncryption> | undefined;
    // Indicates whether this workforce integration is currently active and available.
    isActive?: NullableOption<boolean> | undefined;
    /**
     * This property will replace supports in v1.0. We recommend that you use this property instead of supports. The supports
     * property will still be supported in beta for the time being. Possible values are none, shift, swapRequest, openshift,
     * openShiftRequest, userShiftPreferences, offerShiftRequest, timeCard, timeOffReason, timeOff, timeOffRequest and
     * unknownFutureValue. If selecting more than one value, all values must start with the first letter in uppercase.
     */
    supportedEntities?: NullableOption<WorkforceIntegrationSupportedEntities> | undefined;
    // Workforce Integration URL for callbacks from the Shifts service.
    url?: NullableOption<string> | undefined;
}
export interface UserScopeTeamsAppInstallation extends TeamsAppInstallation {
    // The chat between the user and Teams app.
    chat?: NullableOption<Chat> | undefined;
}
export interface ScheduleChangeRequest extends ChangeTrackedEntity {
    assignedTo?: NullableOption<ScheduleChangeRequestActor> | undefined;
    managerActionDateTime?: NullableOption<string> | undefined;
    managerActionMessage?: NullableOption<string> | undefined;
    managerUserId?: NullableOption<string> | undefined;
    senderDateTime?: NullableOption<string> | undefined;
    senderMessage?: NullableOption<string> | undefined;
    senderUserId?: NullableOption<string> | undefined;
    state?: NullableOption<ScheduleChangeState> | undefined;
}
export interface OfferShiftRequest extends ScheduleChangeRequest {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    recipientActionDateTime?: NullableOption<string> | undefined;
    // Custom message sent by recipient of the offer shift request.
    recipientActionMessage?: NullableOption<string> | undefined;
    // User id of the recipient of the offer shift request.
    recipientUserId?: NullableOption<string> | undefined;
    // User id of the sender of the offer shift request.
    senderShiftId?: NullableOption<string> | undefined;
}
export interface OpenShift extends ChangeTrackedEntity {
    // An unpublished open shift.
    draftOpenShift?: NullableOption<OpenShiftItem> | undefined;
    // ID for the scheduling group that the open shift belongs to.
    schedulingGroupId?: NullableOption<string> | undefined;
    // A published open shift.
    sharedOpenShift?: NullableOption<OpenShiftItem> | undefined;
}
export interface OpenShiftChangeRequest extends ScheduleChangeRequest {
    // ID for the open shift.
    openShiftId?: NullableOption<string> | undefined;
}
export interface SchedulingGroup extends ChangeTrackedEntity {
    // The display name for the schedulingGroup. Required.
    displayName?: NullableOption<string> | undefined;
    // Indicates whether the schedulingGroup can be used when creating new entities or updating existing ones. Required.
    isActive?: NullableOption<boolean> | undefined;
    // The list of user IDs that are a member of the schedulingGroup. Required.
    userIds?: NullableOption<string[]> | undefined;
}
export interface Shift extends ChangeTrackedEntity {
    // The draft version of this shift that is viewable by managers. Required.
    draftShift?: NullableOption<ShiftItem> | undefined;
    // ID of the scheduling group the shift is part of. Required.
    schedulingGroupId?: NullableOption<string> | undefined;
    // The shared version of this shift that is viewable by both employees and managers. Required.
    sharedShift?: NullableOption<ShiftItem> | undefined;
    // ID of the user assigned to the shift. Required.
    userId?: NullableOption<string> | undefined;
}
export interface SwapShiftsChangeRequest extends OfferShiftRequest {
    // Shift ID for the recipient user with whom the request is to swap.
    recipientShiftId?: NullableOption<string> | undefined;
}
export interface TimeOffReason extends ChangeTrackedEntity {
    // The name of the timeOffReason. Required.
    displayName?: NullableOption<string> | undefined;
    /**
     * Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup;
     * phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required.
     */
    iconType?: NullableOption<TimeOffReasonIconType> | undefined;
    // Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required.
    isActive?: NullableOption<boolean> | undefined;
}
export interface TimeOffRequest extends ScheduleChangeRequest {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    endDateTime?: NullableOption<string> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    startDateTime?: NullableOption<string> | undefined;
    // The reason for the time off.
    timeOffReasonId?: NullableOption<string> | undefined;
}
export interface TimeOff extends ChangeTrackedEntity {
    // The draft version of this timeOff that is viewable by managers. Required.
    draftTimeOff?: NullableOption<TimeOffItem> | undefined;
    // The shared version of this timeOff that is viewable by both employees and managers. Required.
    sharedTimeOff?: NullableOption<TimeOffItem> | undefined;
    // ID of the user assigned to the timeOff. Required.
    userId?: NullableOption<string> | undefined;
}
export interface ThreatAssessmentRequest extends Entity {
    // The threat category. Possible values are: spam, phishing, malware.
    category?: ThreatCategory | undefined;
    // The content type of threat assessment. Possible values are: mail, url, file.
    contentType?: NullableOption<ThreatAssessmentContentType> | undefined;
    // The threat assessment request creator.
    createdBy?: NullableOption<IdentitySet> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // The expected assessment from submitter. Possible values are: block, unblock.
    expectedAssessment?: ThreatExpectedAssessment | undefined;
    // The source of the threat assessment request. Possible values are: user, administrator.
    requestSource?: NullableOption<ThreatAssessmentRequestSource> | undefined;
    // The assessment process status. Possible values are: pending, completed.
    status?: NullableOption<ThreatAssessmentStatus> | undefined;
    /**
     * A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return
     * this property unless you apply $expand on it.
     */
    results?: NullableOption<ThreatAssessmentResult[]> | undefined;
}
export interface EmailFileAssessmentRequest extends ThreatAssessmentRequest {
    // Base64 encoded .eml email file content. The file content cannot fetch back because it isn't stored.
    contentData?: string | undefined;
    /**
     * The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender,
     * advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox,
     * autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk.
     */
    destinationRoutingReason?: NullableOption<MailDestinationRoutingReason> | undefined;
    // The mail recipient whose policies are used to assess the mail.
    recipientEmail?: string | undefined;
}
export interface FileAssessmentRequest extends ThreatAssessmentRequest {
    // Base64 encoded file content. The file content cannot fetch back because it isn't stored.
    contentData?: string | undefined;
    // The file name.
    fileName?: string | undefined;
}
// tslint:disable-next-line: interface-name
export interface InformationProtection extends Entity {
    threatAssessmentRequests?: NullableOption<ThreatAssessmentRequest[]> | undefined;
}
export interface MailAssessmentRequest extends ThreatAssessmentRequest {
    /**
     * The reason for mail routed to its destination. Possible values are: none, mailFlowRule, safeSender, blockedSender,
     * advancedSpamFiltering, domainAllowList, domainBlockList, notInAddressBook, firstTimeSender, autoPurgeToInbox,
     * autoPurgeToJunk, autoPurgeToDeleted, outbound, notJunk, junk.
     */
    destinationRoutingReason?: NullableOption<MailDestinationRoutingReason> | undefined;
    // The resource URI of the mail message for assessment.
    messageUri?: string | undefined;
    // The mail recipient whose policies are used to assess the mail.
    recipientEmail?: string | undefined;
}
export interface ThreatAssessmentResult extends Entity {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // The result message for each threat assessment.
    message?: NullableOption<string> | undefined;
    // The threat assessment result type. Possible values are: checkPolicy (only for mail assessment), rescan.
    resultType?: NullableOption<ThreatAssessmentResultType> | undefined;
}
export interface UrlAssessmentRequest extends ThreatAssessmentRequest {
    // The URL string.
    url?: string | undefined;
}
export interface LinkedResource extends Entity {
    // Field indicating the app name of the source that is sending the linkedResource.
    applicationName?: NullableOption<string> | undefined;
    // Field indicating the title of the linkedResource.
    displayName?: NullableOption<string> | undefined;
    // Id of the object that is associated with this task on the third-party/partner system.
    externalId?: NullableOption<string> | undefined;
    // Deep link to the linkedResource.
    webUrl?: NullableOption<string> | undefined;
}
export interface TodoTaskList extends Entity {
    // The name of the task list.
    displayName?: NullableOption<string> | undefined;
    // True if the user is owner of the given task list.
    isOwner?: boolean | undefined;
    // True if the task list is shared with other users
    isShared?: boolean | undefined;
    /**
     * Property indicating the list name if the given list is a well-known list. Possible values are: none, defaultList,
     * flaggedEmails, unknownFutureValue.
     */
    wellknownListName?: WellknownListName | undefined;
    // The collection of open extensions defined for the task list. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
    // The tasks in this task list. Read-only. Nullable.
    tasks?: NullableOption<TodoTask[]> | undefined;
}
export interface TodoTask extends Entity {
    // The task body that typically contains information about the task.
    body?: NullableOption<ItemBody> | undefined;
    /**
     * The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the
     * request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1,
     * 2020 would look like this: '2020-01-01T00:00:00Z'.
     */
    bodyLastModifiedDateTime?: string | undefined;
    // The date in the specified time zone that the task was finished.
    completedDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    /**
     * The date and time when the task was created. By default, it is in UTC. You can provide a custom time zone in the
     * request header. The property value uses ISO 8601 format. For example, midnight UTC on Jan 1, 2020 would look like this:
     * '2020-01-01T00:00:00Z'.
     */
    createdDateTime?: string | undefined;
    // The date in the specified time zone that the task is to be finished.
    dueDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    // The importance of the task. Possible values are: low, normal, high.
    importance?: Importance | undefined;
    // Set to true if an alert is set to remind the user of the task.
    isReminderOn?: boolean | undefined;
    /**
     * The date and time when the task was last modified. By default, it is in UTC. You can provide a custom time zone in the
     * request header. The property value uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1,
     * 2020 would look like this: '2020-01-01T00:00:00Z'.
     */
    lastModifiedDateTime?: string | undefined;
    // The recurrence pattern for the task.
    recurrence?: NullableOption<PatternedRecurrence> | undefined;
    // The date and time for a reminder alert of the task to occur.
    reminderDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    /**
     * Indicates the state or progress of the task. Possible values are: notStarted, inProgress, completed, waitingOnOthers,
     * deferred.
     */
    status?: TaskStatus | undefined;
    // A brief description of the task.
    title?: NullableOption<string> | undefined;
    // The collection of open extensions defined for the task. Nullable.
    extensions?: NullableOption<Extension[]> | undefined;
    // A collection of resources linked to the task.
    linkedResources?: NullableOption<LinkedResource[]> | undefined;
}
export interface AppIdentity {
    // Refers to the Unique GUID representing Application Id in the Azure Active Directory.
    appId?: NullableOption<string> | undefined;
    // Refers to the Application Name displayed in the Azure Portal.
    displayName?: NullableOption<string> | undefined;
    // Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
    servicePrincipalId?: NullableOption<string> | undefined;
    // Refers to the Service Principal Name is the Application name in the tenant.
    servicePrincipalName?: NullableOption<string> | undefined;
}
export interface AppliedConditionalAccessPolicy {
    // Refers to the Name of the conditional access policy (example: 'Require MFA for Salesforce').
    displayName?: NullableOption<string> | undefined;
    /**
     * Refers to the grant controls enforced by the conditional access policy (example: 'Require multi-factor
     * authentication').
     */
    enforcedGrantControls?: NullableOption<string[]> | undefined;
    // Refers to the session controls enforced by the conditional access policy (example: 'Require app enforced controls').
    enforcedSessionControls?: NullableOption<string[]> | undefined;
    // Identifier of the conditional access policy.
    id?: NullableOption<string> | undefined;
    /**
     * Indicates the result of the CA policy that was triggered. Possible values are: success, failure, notApplied (Policy
     * isn't applied because policy conditions were not met),notEnabled (This is due to the policy in disabled state),
     * unknown, unknownFutureValue, reportOnlySuccess, reportOnlyFailure, reportOnlyNotApplied, reportOnlyInterrupted
     */
    result?: NullableOption<AppliedConditionalAccessPolicyResult> | undefined;
}
export interface AuditActivityInitiator {
    /**
     * If the resource initiating the activity is an app, this property indicates all the app related information like appId,
     * Name, servicePrincipalId, Name.
     */
    app?: NullableOption<AppIdentity> | undefined;
    /**
     * If the resource initiating the activity is a user, this property Indicates all the user related information like
     * userId, Name, UserPrinicpalName.
     */
    user?: NullableOption<UserIdentity> | undefined;
}
// tslint:disable-next-line: interface-name
export interface Identity {
    /**
     * The identity's display name. Note that this may not always be available or up to date. For example, if a user changes
     * their display name, the API may show the new value in a future response, but the items associated with the user won't
     * show up as having changed when using delta.
     */
    displayName?: NullableOption<string> | undefined;
    // Unique identifier for the identity.
    id?: NullableOption<string> | undefined;
}
export interface UserIdentity extends Identity {
    // Indicates the client IP address used by user performing the activity (audit log only).
    ipAddress?: NullableOption<string> | undefined;
    // The userPrincipalName attribute of the user.
    userPrincipalName?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface DetailsInfo {}
export interface DeviceDetail {
    // Indicates the browser information of the used for signing-in.
    browser?: NullableOption<string> | undefined;
    // Refers to the UniqueID of the device used for signing-in.
    deviceId?: NullableOption<string> | undefined;
    // Refers to the name of the device used for signing-in.
    displayName?: NullableOption<string> | undefined;
    // Indicates whether the device is compliant or not.
    isCompliant?: NullableOption<boolean> | undefined;
    // Indicates if the device is managed or not.
    isManaged?: NullableOption<boolean> | undefined;
    // Indicates the OS name and version used for signing-in.
    operatingSystem?: NullableOption<string> | undefined;
    // Indicates information on whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined.
    trustType?: NullableOption<string> | undefined;
}
export interface GeoCoordinates {
    // Optional. The altitude (height), in feet, above sea level for the item. Read-only.
    altitude?: NullableOption<number> | undefined;
    // Optional. The latitude, in decimal, for the item. Writable on OneDrive Personal.
    latitude?: NullableOption<number> | undefined;
    // Optional. The longitude, in decimal, for the item. Writable on OneDrive Personal.
    longitude?: NullableOption<number> | undefined;
}
// tslint:disable-next-line: interface-name
export interface Initiator extends Identity {
    // Type of initiator. Possible values are: user, application, system, unknownFutureValue.
    initiatorType?: NullableOption<InitiatorType> | undefined;
}
export interface KeyValue {
    // Key.
    key?: NullableOption<string> | undefined;
    // Value.
    value?: NullableOption<string> | undefined;
}
export interface ModifiedProperty {
    // Name of property that was modified.
    displayName?: NullableOption<string> | undefined;
    // New property value.
    newValue?: NullableOption<string> | undefined;
    // Old property value.
    oldValue?: NullableOption<string> | undefined;
}
export interface ProvisionedIdentity extends Identity {
    // Details of the identity.
    details?: NullableOption<DetailsInfo> | undefined;
    // Type of identity that has been provisioned, such as 'user' or 'group'.
    identityType?: NullableOption<string> | undefined;
}
export interface ProvisioningErrorInfo {
    // Additional details in case of error.
    additionalDetails?: NullableOption<string> | undefined;
    // Categorizes the error code. Possible values are failure, nonServiceFailure, success, unknownFutureValue
    errorCategory?: NullableOption<ProvisioningStatusErrorCategory> | undefined;
    // Unique error code if any occurred. Learn more
    errorCode?: NullableOption<string> | undefined;
    // Summarizes the status and describes why the status happened.
    reason?: NullableOption<string> | undefined;
    // Provides the resolution for the corresponding error.
    recommendedAction?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ProvisioningServicePrincipal extends Identity {}
export interface ProvisioningStatusInfo {
    errorInformation?: NullableOption<ProvisioningErrorInfo> | undefined;
    // Possible values are: success, warning, failure, skipped, unknownFutureValue.
    status?: NullableOption<ProvisioningResult> | undefined;
}
export interface ProvisioningStep {
    // Summary of what occurred during the step.
    description?: NullableOption<string> | undefined;
    // Details of what occurred during the step.
    details?: NullableOption<DetailsInfo> | undefined;
    // Name of the step.
    name?: NullableOption<string> | undefined;
    /**
     * Type of step. Possible values are: import, scoping, matching, processing, referenceResolution, export,
     * unknownFutureValue.
     */
    provisioningStepType?: NullableOption<ProvisioningStepType> | undefined;
    // Status of the step. Possible values are: success, warning, failure, skipped, unknownFutureValue.
    status?: NullableOption<ProvisioningResult> | undefined;
}
export interface ProvisioningSystem extends Identity {
    // Details of the system.
    details?: NullableOption<DetailsInfo> | undefined;
}
export interface SignInLocation {
    /**
     * Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the
     * sign-in activity.
     */
    city?: NullableOption<string> | undefined;
    /**
     * Provides the country code info (2 letter code) where the sign-in originated. This is calculated using
     * latitude/longitude information from the sign-in activity.
     */
    countryOrRegion?: NullableOption<string> | undefined;
    // Provides the latitude, longitude and altitude where the sign-in originated.
    geoCoordinates?: NullableOption<GeoCoordinates> | undefined;
    /**
     * Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the
     * sign-in activity.
     */
    state?: NullableOption<string> | undefined;
}
export interface SignInStatus {
    // Provides additional details on the sign-in activity
    additionalDetails?: NullableOption<string> | undefined;
    /**
     * Provides the 5-6 digit error code that's generated during a sign-in failure. Check out the list of error codes and
     * messages.
     */
    errorCode?: NullableOption<number> | undefined;
    /**
     * Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of
     * error codes and messages.
     */
    failureReason?: NullableOption<string> | undefined;
}
export interface TargetResource {
    // Indicates the visible name defined for the resource. Typically specified when the resource is created.
    displayName?: NullableOption<string> | undefined;
    /**
     * When type is set to Group, this indicates the group type. Possible values are: unifiedGroups, azureAD, and
     * unknownFutureValue
     */
    groupType?: NullableOption<GroupType> | undefined;
    // Indicates the unique ID of the resource.
    id?: NullableOption<string> | undefined;
    // Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type.
    modifiedProperties?: NullableOption<ModifiedProperty[]> | undefined;
    // Describes the resource type. Example values include Application, Group, ServicePrincipal, and User.
    type?: NullableOption<string> | undefined;
    // When type is set to User, this includes the user name that initiated the action; null for other types.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface EmailAddress {
    // The email address of an entity instance.
    address?: NullableOption<string> | undefined;
    // The display name of an entity instance.
    name?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface InvitedUserMessageInfo {
    // Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported.
    ccRecipients?: NullableOption<Recipient[]> | undefined;
    // Customized message body you want to send if you don't want the default message.
    customizedMessageBody?: NullableOption<string> | undefined;
    /**
     * The language you want to send the default message in. If the customizedMessageBody is specified, this property is
     * ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default
     * is en-US.
     */
    messageLanguage?: NullableOption<string> | undefined;
}
export interface Recipient {
    // The recipient's email address.
    emailAddress?: NullableOption<EmailAddress> | undefined;
}
export interface AssignedLicense {
    // A collection of the unique identifiers for plans that have been disabled.
    disabledPlans?: string[] | undefined;
    // The unique identifier for the SKU.
    skuId?: NullableOption<string> | undefined;
}
export interface AssignedPlan {
    /**
     * The date and time at which the plan was assigned; for example: 2013-01-02T19:32:30Z. The Timestamp type represents date
     * and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z
     */
    assignedDateTime?: NullableOption<string> | undefined;
    // Condition of the capability assignment. The possible values are Enabled, Warning, Suspended, Deleted, LockedOut.
    capabilityStatus?: NullableOption<string> | undefined;
    // The name of the service; for example, 'Exchange'.
    service?: NullableOption<string> | undefined;
    // A GUID that identifies the service plan.
    servicePlanId?: NullableOption<string> | undefined;
}
export interface EmployeeOrgData {
    // The cost center associated with the user. Returned only on $select. Supports $filter.
    costCenter?: NullableOption<string> | undefined;
    // The name of the division in which the user works. Returned only on $select. Supports $filter.
    division?: NullableOption<string> | undefined;
}
export interface ObjectIdentity {
    /**
     * Specifies the issuer of the identity, for example facebook.com.For local accounts (where signInType is not federated),
     * this property is the local B2C tenant default domain name, for example contoso.onmicrosoft.com.For external users from
     * other Azure AD organization, this will be the domain of the federated organization, for example contoso.com.Supports
     * $filter. 512 character limit.
     */
    issuer?: NullableOption<string> | undefined;
    /**
     * Specifies the unique identifier assigned to the user by the issuer. The combination of issuer and issuerAssignedId must
     * be unique within the organization. Represents the sign-in name for the user, when signInType is set to emailAddress or
     * userName (also known as local accounts).When signInType is set to: emailAddress, (or a custom string that starts with
     * emailAddress like emailAddress1) issuerAssignedId must be a valid email addressuserName, issuerAssignedId must be a
     * valid local part of an email addressSupports $filter. 100 character limit.
     */
    issuerAssignedId?: NullableOption<string> | undefined;
    /**
     * Specifies the user sign-in types in your directory, such as emailAddress, userName or federated. Here, federated
     * represents a unique identifier for a user from an issuer, that can be in any format chosen by the issuer. Additional
     * validation is enforced on issuerAssignedId when the sign-in type is set to emailAddress or userName. This property can
     * also be set to any custom string.
     */
    signInType?: NullableOption<string> | undefined;
}
export interface LicenseAssignmentState {
    /**
     * The id of the group that assigns this license. If the assignment is a direct-assigned license, this field will be Null.
     * Read-Only.
     */
    assignedByGroup?: NullableOption<string> | undefined;
    // The service plans that are disabled in this assignment. Read-Only.
    disabledPlans?: NullableOption<string[]> | undefined;
    /**
     * License assignment failure error. If the license is assigned successfully, this field will be Null. Read-Only. Possible
     * values: CountViolation, MutuallyExclusiveViolation, DependencyViolation, ProhibitedInUsageLocationViolation,
     * UniquenessViolation, and Others. For more information on how to identify and resolve license assignment errors see
     * here.
     */
    error?: NullableOption<string> | undefined;
    // The unique identifier for the SKU. Read-Only.
    skuId?: NullableOption<string> | undefined;
    // Indicate the current state of this assignment. Read-Only. Possible values: Active, ActiveWithError, Disabled and Error.
    state?: NullableOption<string> | undefined;
}
export interface OnPremisesExtensionAttributes {
    // First customizable extension attribute.
    extensionAttribute1?: NullableOption<string> | undefined;
    // Tenth customizable extension attribute.
    extensionAttribute10?: NullableOption<string> | undefined;
    // Eleventh customizable extension attribute.
    extensionAttribute11?: NullableOption<string> | undefined;
    // Twelfth customizable extension attribute.
    extensionAttribute12?: NullableOption<string> | undefined;
    // Thirteenth customizable extension attribute.
    extensionAttribute13?: NullableOption<string> | undefined;
    // Fourteenth customizable extension attribute.
    extensionAttribute14?: NullableOption<string> | undefined;
    // Fifteenth customizable extension attribute.
    extensionAttribute15?: NullableOption<string> | undefined;
    // Second customizable extension attribute.
    extensionAttribute2?: NullableOption<string> | undefined;
    // Third customizable extension attribute.
    extensionAttribute3?: NullableOption<string> | undefined;
    // Fourth customizable extension attribute.
    extensionAttribute4?: NullableOption<string> | undefined;
    // Fifth customizable extension attribute.
    extensionAttribute5?: NullableOption<string> | undefined;
    // Sixth customizable extension attribute.
    extensionAttribute6?: NullableOption<string> | undefined;
    // Seventh customizable extension attribute.
    extensionAttribute7?: NullableOption<string> | undefined;
    // Eighth customizable extension attribute.
    extensionAttribute8?: NullableOption<string> | undefined;
    // Ninth customizable extension attribute.
    extensionAttribute9?: NullableOption<string> | undefined;
}
export interface OnPremisesProvisioningError {
    /**
     * Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict
     * - indicates a property value is not unique. Other objects contain the same value for the property.
     */
    category?: NullableOption<string> | undefined;
    // The date and time at which the error occurred.
    occurredDateTime?: NullableOption<string> | undefined;
    // Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress
    propertyCausingError?: NullableOption<string> | undefined;
    // Value of the property causing the error.
    value?: NullableOption<string> | undefined;
}
export interface PasswordProfile {
    /**
     * If true, at next sign-in, the user must change their password. After a password change, this property will be
     * automatically reset to false. If not set, default is false.
     */
    forceChangePasswordNextSignIn?: NullableOption<boolean> | undefined;
    /**
     * If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their
     * password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform
     * a multi-factor authentication before password change. After a password change, this property will be automatically
     * reset to false. If not set, default is false.
     */
    forceChangePasswordNextSignInWithMfa?: NullableOption<boolean> | undefined;
    /**
     * The password for the user. This property is required when a user is created. It can be updated, but the user will be
     * required to change the password on the next login. The password must satisfy minimum requirements as specified by the
     * user’s passwordPolicies property. By default, a strong password is required.
     */
    password?: NullableOption<string> | undefined;
}
export interface ProvisionedPlan {
    // For example, 'Enabled'.
    capabilityStatus?: NullableOption<string> | undefined;
    // For example, 'Success'.
    provisioningStatus?: NullableOption<string> | undefined;
    // The name of the service; for example, 'AccessControlS2S'
    service?: NullableOption<string> | undefined;
}
export interface MailboxSettings {
    // Folder ID of an archive folder for the user. Read only.
    archiveFolder?: NullableOption<string> | undefined;
    // Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
    automaticRepliesSetting?: NullableOption<AutomaticRepliesSetting> | undefined;
    // The date format for the user's mailbox.
    dateFormat?: NullableOption<string> | undefined;
    /**
     * If the user has a calendar delegate, this specifies whether the delegate, mailbox owner, or both receive meeting
     * messages and meeting responses. Possible values are: sendToDelegateAndInformationToPrincipal,
     * sendToDelegateAndPrincipal, sendToDelegateOnly. The default is sendToDelegateOnly.
     */
    delegateMeetingMessageDeliveryOptions?: NullableOption<DelegateMeetingMessageDeliveryOptions> | undefined;
    // The locale information for the user, including the preferred language and country/region.
    language?: NullableOption<LocaleInfo> | undefined;
    // The time format for the user's mailbox.
    timeFormat?: NullableOption<string> | undefined;
    // The default time zone for the user's mailbox.
    timeZone?: NullableOption<string> | undefined;
    // The days of the week and hours in a specific time zone that the user works.
    workingHours?: NullableOption<WorkingHours> | undefined;
}
export interface ApplicationServicePrincipal {
    application?: NullableOption<Application> | undefined;
    servicePrincipal?: NullableOption<ServicePrincipal> | undefined;
}
export interface AddIn {
    id?: NullableOption<string> | undefined;
    properties?: KeyValue[] | undefined;
    type?: string | undefined;
}
export interface ApiApplication {
    // When true, allows an application to use claims mapping without specifying a custom signing key.
    acceptMappedClaims?: NullableOption<boolean> | undefined;
    /**
     * Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. If you
     * set the appID of the client app to this value, the user only consents once to the client app. Azure AD knows that
     * consenting to the client means implicitly consenting to the web API and automatically provisions service principals for
     * both APIs at the same time. Both the client and the web API app must be registered in the same tenant.
     */
    knownClientApplications?: NullableOption<string[]> | undefined;
    /**
     * The definition of the delegated permissions exposed by the web API represented by this application registration. These
     * delegated permissions may be requested by a client application, and may be granted by users or administrators during
     * consent. Delegated permissions are sometimes referred to as OAuth 2.0 scopes.
     */
    oauth2PermissionScopes?: PermissionScope[] | undefined;
    /**
     * Lists the client applications that are pre-authorized with the specified delegated permissions to access this
     * application's APIs. Users are not required to consent to any pre-authorized application (for the permissions
     * specified). However, any additional permissions not listed in preAuthorizedApplications (requested through incremental
     * consent for example) will require user consent.
     */
    preAuthorizedApplications?: NullableOption<PreAuthorizedApplication[]> | undefined;
    /**
     * Specifies the access token version expected by this resource. This changes the version and format of the JWT produced
     * independent of the endpoint or client used to request the access token. The endpoint used, v1.0 or v2.0, is chosen by
     * the client and only impacts the version of id_tokens. Resources need to explicitly configure
     * requestedAccessTokenVersion to indicate the supported access token format. Possible values for
     * requestedAccessTokenVersion are 1, 2, or null. If the value is null, this defaults to 1, which corresponds to the v1.0
     * endpoint. If signInAudience on the application is configured as AzureADandPersonalMicrosoftAccount, the value for this
     * property must be 2
     */
    requestedAccessTokenVersion?: NullableOption<number> | undefined;
}
export interface AppRole {
    /**
     * Specifies whether this app role can be assigned to users and groups (by setting to ['User']), to other application's
     * (by setting to ['Application'], or both (by setting to ['User', 'Application']). App roles supporting assignment to
     * other applications' service principals are also known as application permissions. The 'Application' value is only
     * supported for app roles defined on application entities.
     */
    allowedMemberTypes?: string[] | undefined;
    /**
     * The description for the app role. This is displayed when the app role is being assigned and, if the app role functions
     * as an application permission, during consent experiences.
     */
    description?: NullableOption<string> | undefined;
    // Display name for the permission that appears in the app role assignment and consent experiences.
    displayName?: NullableOption<string> | undefined;
    /**
     * Unique role identifier inside the appRoles collection. When creating a new app role, a new Guid identifier must be
     * provided.
     */
    id?: string | undefined;
    /**
     * When creating or updating an app role, this must be set to true (which is the default). To delete a role, this must
     * first be set to false. At that point, in a subsequent call, this role may be removed.
     */
    isEnabled?: boolean | undefined;
    /**
     * Specifies if the app role is defined on the application object or on the servicePrincipal entity. Must not be included
     * in any POST or PATCH requests. Read-only.
     */
    origin?: NullableOption<string> | undefined;
    /**
     * Specifies the value to include in the roles claim in ID tokens and access tokens authenticating an assigned user or
     * service principal. Must not exceed 120 characters in length. Allowed characters are : ! # $ % &amp; ' ( ) * + , - . / :
     * ; = ? @ [ ] ^ + _ { } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space
     * character, are not allowed. May not begin with ..
     */
    value?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface InformationalUrl {
    // CDN URL to the application's logo, Read-only.
    logoUrl?: NullableOption<string> | undefined;
    // Link to the application's marketing page. For example, https://www.contoso.com/app/marketing
    marketingUrl?: NullableOption<string> | undefined;
    // Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy
    privacyStatementUrl?: NullableOption<string> | undefined;
    // Link to the application's support page. For example, https://www.contoso.com/app/support
    supportUrl?: NullableOption<string> | undefined;
    // Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice
    termsOfServiceUrl?: NullableOption<string> | undefined;
}
export interface KeyCredential {
    // Custom key identifier
    customKeyIdentifier?: NullableOption<number> | undefined;
    // Friendly name for the key. Optional.
    displayName?: NullableOption<string> | undefined;
    /**
     * The date and time at which the credential expires.The Timestamp type represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    endDateTime?: NullableOption<string> | undefined;
    // Value for the key credential. Should be a base 64 encoded value.
    key?: NullableOption<number> | undefined;
    // The unique identifier (GUID) for the key.
    keyId?: NullableOption<string> | undefined;
    /**
     * The date and time at which the credential becomes valid.The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    startDateTime?: NullableOption<string> | undefined;
    // The type of key credential; for example, 'Symmetric'.
    type?: NullableOption<string> | undefined;
    // A string that describes the purpose for which the key can be used; for example, 'Verify'.
    usage?: NullableOption<string> | undefined;
}
export interface OptionalClaims {
    // The optional claims returned in the JWT access token.
    accessToken?: NullableOption<OptionalClaim[]> | undefined;
    // The optional claims returned in the JWT ID token.
    idToken?: NullableOption<OptionalClaim[]> | undefined;
    // The optional claims returned in the SAML token.
    saml2Token?: NullableOption<OptionalClaim[]> | undefined;
}
export interface ParentalControlSettings {
    /**
     * Specifies the two-letter ISO country codes. Access to the application will be blocked for minors from the countries
     * specified in this list.
     */
    countriesBlockedForMinors?: NullableOption<string[]> | undefined;
    /**
     * Specifies the legal age group rule that applies to users of the app. Can be set to one of the following values:
     * ValueDescriptionAllowDefault. Enforces the legal minimum. This means parental consent is required for minors in the
     * European Union and Korea.RequireConsentForPrivacyServicesEnforces the user to specify date of birth to comply with
     * COPPA rules. RequireConsentForMinorsRequires parental consent for ages below 18, regardless of country minor
     * rules.RequireConsentForKidsRequires parental consent for ages below 14, regardless of country minor
     * rules.BlockMinorsBlocks minors from using the app.
     */
    legalAgeGroupRule?: NullableOption<string> | undefined;
}
export interface PasswordCredential {
    // Do not use.
    customKeyIdentifier?: NullableOption<number> | undefined;
    // Friendly name for the password. Optional.
    displayName?: NullableOption<string> | undefined;
    /**
     * The date and time at which the password expires represented using ISO 8601 format and is always in UTC time. For
     * example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     */
    endDateTime?: NullableOption<string> | undefined;
    // Contains the first three characters of the password. Read-only.
    hint?: NullableOption<string> | undefined;
    // The unique identifier for the password.
    keyId?: NullableOption<string> | undefined;
    /**
     * Read-only; Contains the strong passwords generated by Azure AD that are 16-64 characters in length. The generated
     * password value is only returned during the initial POST request to addPassword. There is no way to retrieve this
     * password in the future.
     */
    secretText?: NullableOption<string> | undefined;
    /**
     * The date and time at which the password becomes valid. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Optional.
     */
    startDateTime?: NullableOption<string> | undefined;
}
export interface PublicClientApplication {
    /**
     * Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and
     * access tokens are sent.
     */
    redirectUris?: string[] | undefined;
}
export interface RequiredResourceAccess {
    // The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
    resourceAccess?: ResourceAccess[] | undefined;
    /**
     * The unique identifier for the resource that the application requires access to. This should be equal to the appId
     * declared on the target resource application.
     */
    resourceAppId?: string | undefined;
}
export interface SpaApplication {
    /**
     * Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and
     * access tokens are sent.
     */
    redirectUris?: string[] | undefined;
}
export interface WebApplication {
    // Home page or landing page of the application.
    homePageUrl?: NullableOption<string> | undefined;
    // Specifies whether this web application can request tokens using the OAuth 2.0 implicit flow.
    implicitGrantSettings?: NullableOption<ImplicitGrantSettings> | undefined;
    /**
     * Specifies the URL that will be used by Microsoft's authorization service to logout an user using front-channel,
     * back-channel or SAML logout protocols.
     */
    logoutUrl?: NullableOption<string> | undefined;
    /**
     * Specifies the URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and
     * access tokens are sent.
     */
    redirectUris?: string[] | undefined;
}
export interface PermissionScope {
    /**
     * A description of the delegated permissions, intended to be read by an administrator granting the permission on behalf
     * of all users. This text appears in tenant-wide admin consent experiences.
     */
    adminConsentDescription?: NullableOption<string> | undefined;
    // The permission's title, intended to be read by an administrator granting the permission on behalf of all users.
    adminConsentDisplayName?: NullableOption<string> | undefined;
    /**
     * Unique delegated permission identifier inside the collection of delegated permissions defined for a resource
     * application.
     */
    id?: string | undefined;
    /**
     * When creating or updating a permission, this property must be set to true (which is the default). To delete a
     * permission, this property must first be set to false. At that point, in a subsequent call, the permission may be
     * removed.
     */
    isEnabled?: boolean | undefined;
    origin?: NullableOption<string> | undefined;
    /**
     * Specifies whether this delegated permission should be considered safe for non-admin users to consent to on behalf of
     * themselves, or whether an administrator should be required for consent to the permissions. This will be the default
     * behavior, but each customer can choose to customize the behavior in their organization (by allowing, restricting or
     * limiting user consent to this delegated permission.)
     */
    type?: NullableOption<string> | undefined;
    /**
     * A description of the delegated permissions, intended to be read by a user granting the permission on their own behalf.
     * This text appears in consent experiences where the user is consenting only on behalf of themselves.
     */
    userConsentDescription?: NullableOption<string> | undefined;
    /**
     * A title for the permission, intended to be read by a user granting the permission on their own behalf. This text
     * appears in consent experiences where the user is consenting only on behalf of themselves.
     */
    userConsentDisplayName?: NullableOption<string> | undefined;
    /**
     * Specifies the value to include in the scp (scope) claim in access tokens. Must not exceed 120 characters in length.
     * Allowed characters are : ! # $ % &amp; ' ( ) * + , - . / : ; = ? @ [ ] ^ + _ { } ~, as well as characters in the ranges
     * 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
     */
    value?: NullableOption<string> | undefined;
}
export interface SamlSingleSignOnSettings {
    // The relative URI the service provider would redirect to after completion of the single sign-on flow.
    relayState?: NullableOption<string> | undefined;
}
export interface Fido2KeyRestrictions {
    // A collection of Authenticator Attestation GUIDs. AADGUIDs define key types and manufacturers.
    aaGuids?: NullableOption<string[]> | undefined;
    // Enforcement type. Possible values are: allow, block.
    enforcementType?: NullableOption<Fido2RestrictionEnforcementType> | undefined;
    // Determines if the configured key enforcement is enabled.
    isEnforced?: NullableOption<boolean> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ApiAuthenticationConfigurationBase {}
export interface AssignmentOrder {
    /**
     * A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within
     * a user flow.
     */
    order?: NullableOption<string[]> | undefined;
}
export interface BasicAuthentication extends ApiAuthenticationConfigurationBase {
    // The password. It is not returned in the responses.
    password?: NullableOption<string> | undefined;
    // The username.
    username?: NullableOption<string> | undefined;
}
export interface ClientCertificateAuthentication extends ApiAuthenticationConfigurationBase {
    // The list of certificates uploaded for this API connector.
    certificateList?: NullableOption<Pkcs12CertificateInformation[]> | undefined;
}
export interface Pkcs12CertificateInformation {
    /**
     * Represents whether the certificate is the active certificate to be used for calling the API connector. The active
     * certificate is the most recently uploaded certificate which is not yet expired but whose notBefore time is in the past.
     */
    isActive?: boolean | undefined;
    /**
     * The certificate's expiry. This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the
     * number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.)
     */
    notAfter?: number | undefined;
    /**
     * The certificate's issue time (not before). This value is a NumericDate as defined in RFC 7519 (A JSON numeric value
     * representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap
     * seconds.)
     */
    notBefore?: number | undefined;
    // The certificate thumbprint.
    thumbprint?: NullableOption<string> | undefined;
}
export interface Pkcs12Certificate extends ApiAuthenticationConfigurationBase {
    // This is the password for the pfx file. Required. If no password is used, must still provide a value of ''.
    password?: NullableOption<string> | undefined;
    /**
     * This is the field for sending pfx content. The value should be a base-64 encoded version of the actual certificate
     * content. Required.
     */
    pkcs12Value?: NullableOption<string> | undefined;
}
export interface SelfServiceSignUpAuthenticationFlowConfiguration {
    /**
     * Indicates whether self-service sign-up flow is enabled or disabled. The default value is false. This property is not a
     * key. Required.
     */
    isEnabled?: boolean | undefined;
}
export interface UserAttributeValuesItem {
    // Used to set the value as the default.
    isDefault?: boolean | undefined;
    // The display name of the property displayed to the end user in the user flow.
    name?: NullableOption<string> | undefined;
    // The value that is set when this item is selected.
    value?: NullableOption<string> | undefined;
}
export interface UserFlowApiConnectorConfiguration {
    postAttributeCollection?: NullableOption<IdentityApiConnector> | undefined;
    postFederationSignup?: NullableOption<IdentityApiConnector> | undefined;
}
export interface AlternativeSecurityId {
    // For internal use only
    identityProvider?: NullableOption<string> | undefined;
    // For internal use only
    key?: NullableOption<number> | undefined;
    // For internal use only
    type?: NullableOption<number> | undefined;
}
export interface PreAuthorizedApplication {
    // The unique identifier for the application.
    appId?: NullableOption<string> | undefined;
    // The unique identifier for the oauth2PermissionScopes the application requires.
    delegatedPermissionIds?: string[] | undefined;
}
export interface AssignedLabel {
    // The display name of the label. Read-only.
    displayName?: NullableOption<string> | undefined;
    // The unique identifier of the label.
    labelId?: NullableOption<string> | undefined;
}
export interface CertificateAuthority {
    // Required. The base64 encoded string representing the public certificate.
    certificate?: number | undefined;
    // The URL of the certificate revocation list.
    certificateRevocationListUrl?: NullableOption<string> | undefined;
    /**
     * The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was
     * created.
     */
    deltaCertificateRevocationListUrl?: NullableOption<string> | undefined;
    /**
     * Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate
     * authority.
     */
    isRootAuthority?: boolean | undefined;
    // The issuer of the certificate, calculated from the certificate value. Read-only.
    issuer?: string | undefined;
    // The subject key identifier of the certificate, calculated from the certificate value. Read-only.
    issuerSki?: string | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ComplexExtensionValue {}
export interface DefaultUserRolePermissions {
    // Indicates whether the default user role can create applications.
    allowedToCreateApps?: boolean | undefined;
    // Indicates whether the default user role can create security groups.
    allowedToCreateSecurityGroups?: boolean | undefined;
    // Indicates whether the default user role can read other users.
    allowedToReadOtherUsers?: boolean | undefined;
    /**
     * Indicates if user consent to apps is allowed, and if it is, which permission to grant consent and which app consent
     * policy (permissionGrantPolicy) govern the permission for users to grant consent. Value should be in the format
     * managePermissionGrantsForSelf.{id}, where {id} is the id of a built-in or custom app consent policy. An empty list
     * indicates user consent to apps is disabled.
     */
    permissionGrantPoliciesAssigned?: NullableOption<string[]> | undefined;
}
export interface DomainState {
    /**
     * Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous
     * task starts, and when the operation completes.
     */
    lastActionDateTime?: NullableOption<string> | undefined;
    // Type of asynchronous operation. The values can be ForceDelete or Verification
    operation?: NullableOption<string> | undefined;
    /**
     * Current status of the operation. Scheduled - Operation has been scheduled but has not started. InProgress - Task has
     * started and is in progress. Failed - Operation has failed.
     */
    status?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ImplicitGrantSettings {
    // Specifies whether this web application can request an access token using the OAuth 2.0 implicit flow.
    enableAccessTokenIssuance?: NullableOption<boolean> | undefined;
    // Specifies whether this web application can request an ID token using the OAuth 2.0 implicit flow.
    enableIdTokenIssuance?: NullableOption<boolean> | undefined;
}
// tslint:disable-next-line: interface-name
export interface InstanceResourceAccess {
    permissions?: ResourcePermission[] | undefined;
    resourceAppId?: string | undefined;
}
export interface ResourcePermission {
    type?: string | undefined;
    value?: string | undefined;
}
export interface LicenseProcessingState {
    state?: NullableOption<string> | undefined;
}
export interface LicenseUnitsDetail {
    // The number of units that are enabled.
    enabled?: NullableOption<number> | undefined;
    // The number of units that are suspended.
    suspended?: NullableOption<number> | undefined;
    // The number of units that are in warning status.
    warning?: NullableOption<number> | undefined;
}
export interface OptionalClaim {
    /**
     * Additional properties of the claim. If a property exists in this collection, it modifies the behavior of the optional
     * claim specified in the name property.
     */
    additionalProperties?: NullableOption<string[]> | undefined;
    /**
     * If the value is true, the claim specified by the client is necessary to ensure a smooth authorization experience for
     * the specific task requested by the end user. The default value is false.
     */
    essential?: boolean | undefined;
    // The name of the optional claim.
    name?: string | undefined;
    /**
     * The source (directory object) of the claim. There are predefined claims and user-defined claims from extension
     * properties. If the source value is null, the claim is a predefined optional claim. If the source value is user, the
     * value in the name property is the extension property from the user object.
     */
    source?: NullableOption<string> | undefined;
}
export interface Phone {
    language?: NullableOption<string> | undefined;
    // The phone number.
    number?: NullableOption<string> | undefined;
    region?: NullableOption<string> | undefined;
    /**
     * The type of phone number. Possible values are: home, business, mobile, other, assistant, homeFax, businessFax,
     * otherFax, pager, radio.
     */
    type?: NullableOption<PhoneType> | undefined;
}
export interface PhysicalOfficeAddress {
    // The city.
    city?: NullableOption<string> | undefined;
    // The country or region. It's a free-format string value, for example, 'United States'.
    countryOrRegion?: NullableOption<string> | undefined;
    // Office location such as building and office number for an organizational contact.
    officeLocation?: NullableOption<string> | undefined;
    // The postal code.
    postalCode?: NullableOption<string> | undefined;
    // The state.
    state?: NullableOption<string> | undefined;
    // The street.
    street?: NullableOption<string> | undefined;
}
export interface PrivacyProfile {
    // A valid smtp email address for the privacy statement contact. Not required.
    contactEmail?: NullableOption<string> | undefined;
    /**
     * A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the
     * company's privacy statement. Not required.
     */
    statementUrl?: NullableOption<string> | undefined;
}
export interface ResourceAccess {
    // The unique identifier for one of the oauth2PermissionScopes or appRole instances that the resource application exposes.
    id?: string | undefined;
    /**
     * Specifies whether the id property references an oauth2PermissionScopes or an appRole. Possible values are Scope or
     * Role.
     */
    type?: NullableOption<string> | undefined;
}
export interface ServicePlanInfo {
    /**
     * The object the service plan can be assigned to. Possible values:'User' - service plan can be assigned to individual
     * users.'Company' - service plan can be assigned to the entire tenant.
     */
    appliesTo?: NullableOption<string> | undefined;
    /**
     * The provisioning status of the service plan. Possible values:'Success' - Service is fully provisioned.'Disabled' -
     * Service has been disabled.'PendingInput' - Service is not yet provisioned; awaiting service
     * confirmation.'PendingActivation' - Service is provisioned but requires explicit activation by administrator (for
     * example, Intune_O365 service plan).'PendingProvisioning' - Microsoft has added a new service to the product SKU and it
     * has not been activated in the tenant, yet.
     */
    provisioningStatus?: NullableOption<string> | undefined;
    // The unique identifier of the service plan.
    servicePlanId?: NullableOption<string> | undefined;
    // The name of the service plan.
    servicePlanName?: NullableOption<string> | undefined;
}
export interface SettingTemplateValue {
    // Default value for the setting. Read-only.
    defaultValue?: NullableOption<string> | undefined;
    // Description of the setting. Read-only.
    description?: NullableOption<string> | undefined;
    // Name of the setting. Read-only.
    name?: NullableOption<string> | undefined;
    // Type of the setting. Read-only.
    type?: NullableOption<string> | undefined;
}
export interface SettingValue {
    // Name of the setting (as defined by the directorySettingTemplate).
    name?: NullableOption<string> | undefined;
    // Value of the setting.
    value?: NullableOption<string> | undefined;
}
export interface VerifiedDomain {
    // For example, 'Email', 'OfficeCommunicationsOnline'.
    capabilities?: NullableOption<string> | undefined;
    // true if this is the default domain associated with the tenant; otherwise, false.
    isDefault?: NullableOption<boolean> | undefined;
    // true if this is the initial domain associated with the tenant; otherwise, false
    isInitial?: NullableOption<boolean> | undefined;
    // The domain name; for example, 'contoso.onmicrosoft.com'
    name?: NullableOption<string> | undefined;
    // For example, 'Managed'.
    type?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface EducationAssignmentRecipient {}
// tslint:disable-next-line: no-empty-interface
export interface EducationAssignmentClassRecipient extends EducationAssignmentRecipient {}
export interface EducationAssignmentGrade {
    // User who did the grading.
    gradedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment in time when the grade was applied to this submission object. The Timestamp type represents date and time
     * information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is
     * 2014-01-01T00:00:00Z
     */
    gradedDateTime?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IdentitySet {
    // Optional. The application associated with this action.
    application?: NullableOption<Identity> | undefined;
    // Optional. The device associated with this action.
    device?: NullableOption<Identity> | undefined;
    // Optional. The user associated with this action.
    user?: NullableOption<Identity> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface EducationAssignmentGradeType {}
// tslint:disable-next-line: no-empty-interface
export interface EducationAssignmentGroupRecipient extends EducationAssignmentRecipient {}
export interface EducationAssignmentIndividualRecipient extends EducationAssignmentRecipient {
    // A collection of ids of the recipients.
    recipients?: NullableOption<string[]> | undefined;
}
export interface EducationAssignmentPointsGrade extends EducationAssignmentGrade {
    // Number of points a teacher is giving this submission object.
    points?: NullableOption<number> | undefined;
}
export interface EducationAssignmentPointsGradeType extends EducationAssignmentGradeType {
    // Max points possible for this assignment.
    maxPoints?: NullableOption<number> | undefined;
}
export interface EducationResource {
    // Who created the resource.
    createdBy?: NullableOption<IdentitySet> | undefined;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: NullableOption<string> | undefined;
    // Display name of resource.
    displayName?: NullableOption<string> | undefined;
    // Who was the last user to modify the resource.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment in time when the resource was last modified. The Timestamp type represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
}
export interface EducationExcelResource extends EducationResource {
    // Pointer to the Excel file object.
    fileUrl?: NullableOption<string> | undefined;
}
export interface EducationFeedback {
    // User who created the feedback.
    feedbackBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    feedbackDateTime?: NullableOption<string> | undefined;
    // Feedback.
    text?: NullableOption<EducationItemBody> | undefined;
}
export interface EducationItemBody {
    content?: NullableOption<string> | undefined;
    contentType?: NullableOption<BodyType> | undefined;
}
export interface EducationFileResource extends EducationResource {
    // Location on disk of the file resource.
    fileUrl?: NullableOption<string> | undefined;
}
export interface EducationLinkResource extends EducationResource {
    // URL to the resource.
    link?: NullableOption<string> | undefined;
}
export interface EducationPowerPointResource extends EducationResource {
    // Location of the file on disk.
    fileUrl?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface EducationSubmissionRecipient {}
export interface EducationSubmissionIndividualRecipient extends EducationSubmissionRecipient {
    // User ID of the user to whom the submission is assigned.
    userId?: NullableOption<string> | undefined;
}
export interface EducationWordResource extends EducationResource {
    // Location of the file on disk.
    fileUrl?: NullableOption<string> | undefined;
}
export interface RubricCriterion {
    // The description of this criterion.
    description?: NullableOption<EducationItemBody> | undefined;
}
export interface RubricLevel {
    // The description of this rubric level.
    description?: NullableOption<EducationItemBody> | undefined;
    // The name of this rubric level.
    displayName?: NullableOption<string> | undefined;
    // Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric.
    grading?: NullableOption<EducationAssignmentGradeType> | undefined;
    // The ID of this resource.
    levelId?: NullableOption<string> | undefined;
}
export interface RubricQuality {
    // The collection of criteria for this rubric quality.
    criteria?: NullableOption<RubricCriterion[]> | undefined;
    // The description of this rubric quality.
    description?: NullableOption<EducationItemBody> | undefined;
    // The name of this rubric quality.
    displayName?: NullableOption<string> | undefined;
    // The ID of this resource.
    qualityId?: NullableOption<string> | undefined;
    // If present, a numerical weight for this quality. Weights must add up to 100.
    weight?: NullableOption<number> | undefined;
}
export interface RubricQualityFeedbackModel {
    // Specific feedback for one quality of this rubric.
    feedback?: NullableOption<EducationItemBody> | undefined;
    // The ID of the rubricQuality that this feedback is related to.
    qualityId?: NullableOption<string> | undefined;
}
export interface RubricQualitySelectedColumnModel {
    // ID of the selected level for this quality.
    columnId?: NullableOption<string> | undefined;
    // ID of the associated quality.
    qualityId?: NullableOption<string> | undefined;
}
export interface EducationCourse {
    // Unique identifier for the course.
    courseNumber?: NullableOption<string> | undefined;
    // Description of the course.
    description?: NullableOption<string> | undefined;
    // Name of the course.
    displayName?: NullableOption<string> | undefined;
    // ID of the course from the syncing system.
    externalId?: NullableOption<string> | undefined;
    // Subject of the course.
    subject?: NullableOption<string> | undefined;
}
export interface EducationTerm {
    // Display name of the term.
    displayName?: NullableOption<string> | undefined;
    // End of the term.
    endDate?: NullableOption<string> | undefined;
    // ID of term in the syncing system.
    externalId?: NullableOption<string> | undefined;
    // Start of the term.
    startDate?: NullableOption<string> | undefined;
}
export interface PhysicalAddress {
    // The city.
    city?: NullableOption<string> | undefined;
    // The country or region. It's a free-format string value, for example, 'United States'.
    countryOrRegion?: NullableOption<string> | undefined;
    // The postal code.
    postalCode?: NullableOption<string> | undefined;
    // The state.
    state?: NullableOption<string> | undefined;
    // The street.
    street?: NullableOption<string> | undefined;
}
export interface EducationOnPremisesInfo {
    // Unique identifier for the user object in Active Directory.
    immutableId?: NullableOption<string> | undefined;
}
export interface EducationStudent {
    // Birth date of the student.
    birthDate?: NullableOption<string> | undefined;
    // ID of the student in the source system.
    externalId?: NullableOption<string> | undefined;
    // Possible values are: female, male, other.
    gender?: NullableOption<EducationGender> | undefined;
    // Current grade level of the student.
    grade?: NullableOption<string> | undefined;
    // Year the student is graduating from the school.
    graduationYear?: NullableOption<string> | undefined;
    // Student Number.
    studentNumber?: NullableOption<string> | undefined;
}
export interface EducationTeacher {
    // Id of the Teacher in external source system.
    externalId?: NullableOption<string> | undefined;
    // Teacher number.
    teacherNumber?: NullableOption<string> | undefined;
}
export interface UnifiedRolePermission {
    // Set of tasks that can be performed on a resource.
    allowedResourceActions?: string[] | undefined;
    // Optional constraints that must be met for the permission to be effective.
    condition?: NullableOption<string> | undefined;
    excludedResourceActions?: NullableOption<string[]> | undefined;
}
export interface WorkbookFilterCriteria {
    color?: NullableOption<string> | undefined;
    criterion1?: NullableOption<string> | undefined;
    criterion2?: NullableOption<string> | undefined;
    dynamicCriteria?: string | undefined;
    filterOn?: string | undefined;
    icon?: NullableOption<WorkbookIcon> | undefined;
    operator?: string | undefined;
    values?: NullableOption<any> | undefined;
}
export interface WorkbookIcon {
    // Represents the index of the icon in the given set.
    index?: number | undefined;
    /**
     * Represents the set that the icon is part of. Possible values are: Invalid, ThreeArrows, ThreeArrowsGray, ThreeFlags,
     * ThreeTrafficLights1, ThreeTrafficLights2, ThreeSigns, ThreeSymbols, ThreeSymbols2, FourArrows, FourArrowsGray,
     * FourRedToBlack, FourRating, FourTrafficLights, FiveArrows, FiveArrowsGray, FiveRating, FiveQuarters, ThreeStars,
     * ThreeTriangles, FiveBoxes.
     */
    set?: string | undefined;
}
export interface WorkbookFilterDatetime {
    date?: NullableOption<string> | undefined;
    specificity?: string | undefined;
}
export interface WorkbookOperationError {
    // The error code.
    code?: NullableOption<string> | undefined;
    innerError?: NullableOption<WorkbookOperationError> | undefined;
    // The error message.
    message?: NullableOption<string> | undefined;
}
export interface WorkbookRangeReference {
    address?: NullableOption<string> | undefined;
}
export interface WorkbookSessionInfo {
    // Id of the workbook session.
    id?: NullableOption<string> | undefined;
    // true for persistent session. false for non-persistent session (view mode)
    persistChanges?: NullableOption<boolean> | undefined;
}
export interface WorkbookSortField {
    // Represents whether the sorting is done in an ascending fashion.
    ascending?: boolean | undefined;
    // Represents the color that is the target of the condition if the sorting is on font or cell color.
    color?: NullableOption<string> | undefined;
    // Represents additional sorting options for this field. Possible values are: Normal, TextAsNumber.
    dataOption?: string | undefined;
    // Represents the icon that is the target of the condition if the sorting is on the cell's icon.
    icon?: NullableOption<WorkbookIcon> | undefined;
    /**
     * Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset
     * from the first column (or row).
     */
    key?: number | undefined;
    // Represents the type of sorting of this condition. Possible values are: Value, CellColor, FontColor, Icon.
    sortOn?: string | undefined;
}
export interface WorkbookWorksheetProtectionOptions {
    // Represents the worksheet protection option of allowing using auto filter feature.
    allowAutoFilter?: boolean | undefined;
    // Represents the worksheet protection option of allowing deleting columns.
    allowDeleteColumns?: boolean | undefined;
    // Represents the worksheet protection option of allowing deleting rows.
    allowDeleteRows?: boolean | undefined;
    // Represents the worksheet protection option of allowing formatting cells.
    allowFormatCells?: boolean | undefined;
    // Represents the worksheet protection option of allowing formatting columns.
    allowFormatColumns?: boolean | undefined;
    // Represents the worksheet protection option of allowing formatting rows.
    allowFormatRows?: boolean | undefined;
    // Represents the worksheet protection option of allowing inserting columns.
    allowInsertColumns?: boolean | undefined;
    // Represents the worksheet protection option of allowing inserting hyperlinks.
    allowInsertHyperlinks?: boolean | undefined;
    // Represents the worksheet protection option of allowing inserting rows.
    allowInsertRows?: boolean | undefined;
    // Represents the worksheet protection option of allowing using pivot table feature.
    allowPivotTables?: boolean | undefined;
    // Represents the worksheet protection option of allowing using sort feature.
    allowSort?: boolean | undefined;
}
export interface Quota {
    // Total space consumed by files in the recycle bin, in bytes. Read-only.
    deleted?: NullableOption<number> | undefined;
    // Total space remaining before reaching the quota limit, in bytes. Read-only.
    remaining?: NullableOption<number> | undefined;
    // Enumeration value that indicates the state of the storage space. Read-only.
    state?: NullableOption<string> | undefined;
    // Information about the drive's storage quota plans. Only in Personal OneDrive.
    storagePlanInformation?: NullableOption<StoragePlanInformation> | undefined;
    // Total allowed storage space, in bytes. Read-only.
    total?: NullableOption<number> | undefined;
    // Total space used, in bytes. Read-only.
    used?: NullableOption<number> | undefined;
}
export interface SharepointIds {
    // The unique identifier (guid) for the item's list in SharePoint.
    listId?: NullableOption<string> | undefined;
    // An integer identifier for the item within the containing list.
    listItemId?: NullableOption<string> | undefined;
    // The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site.
    listItemUniqueId?: NullableOption<string> | undefined;
    // The unique identifier (guid) for the item's site collection (SPSite).
    siteId?: NullableOption<string> | undefined;
    // The SharePoint URL for the site that contains the item.
    siteUrl?: NullableOption<string> | undefined;
    // The unique identifier (guid) for the tenancy.
    tenantId?: NullableOption<string> | undefined;
    // The unique identifier (guid) for the item's site (SPWeb).
    webId?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface SystemFacet {}
export interface Audio {
    // The title of the album for this audio file.
    album?: NullableOption<string> | undefined;
    // The artist named on the album for the audio file.
    albumArtist?: NullableOption<string> | undefined;
    // The performing artist for the audio file.
    artist?: NullableOption<string> | undefined;
    // Bitrate expressed in kbps.
    bitrate?: NullableOption<number> | undefined;
    // The name of the composer of the audio file.
    composers?: NullableOption<string> | undefined;
    // Copyright information for the audio file.
    copyright?: NullableOption<string> | undefined;
    // The number of the disc this audio file came from.
    disc?: NullableOption<number> | undefined;
    // The total number of discs in this album.
    discCount?: NullableOption<number> | undefined;
    // Duration of the audio file, expressed in milliseconds
    duration?: NullableOption<number> | undefined;
    // The genre of this audio file.
    genre?: NullableOption<string> | undefined;
    // Indicates if the file is protected with digital rights management.
    hasDrm?: NullableOption<boolean> | undefined;
    // Indicates if the file is encoded with a variable bitrate.
    isVariableBitrate?: NullableOption<boolean> | undefined;
    // The title of the audio file.
    title?: NullableOption<string> | undefined;
    // The number of the track on the original disc for this audio file.
    track?: NullableOption<number> | undefined;
    // The total number of tracks on the original disc for this audio file.
    trackCount?: NullableOption<number> | undefined;
    // The year the audio file was recorded.
    year?: NullableOption<number> | undefined;
}
export interface Deleted {
    // Represents the state of the deleted item.
    state?: NullableOption<string> | undefined;
}
export interface File {
    // Hashes of the file's binary content, if available. Read-only.
    hashes?: NullableOption<Hashes> | undefined;
    /**
     * The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file
     * was uploaded. Read-only.
     */
    mimeType?: NullableOption<string> | undefined;
    processingMetadata?: NullableOption<boolean> | undefined;
}
export interface FileSystemInfo {
    // The UTC date and time the file was created on a client.
    createdDateTime?: NullableOption<string> | undefined;
    // The UTC date and time the file was last accessed. Available for the recent file list only.
    lastAccessedDateTime?: NullableOption<string> | undefined;
    // The UTC date and time the file was last modified on a client.
    lastModifiedDateTime?: NullableOption<string> | undefined;
}
export interface Folder {
    // Number of children contained immediately within this container.
    childCount?: NullableOption<number> | undefined;
    // A collection of properties defining the recommended view for the folder.
    view?: NullableOption<FolderView> | undefined;
}
// tslint:disable-next-line: interface-name
export interface Image {
    // Optional. Height of the image, in pixels. Read-only.
    height?: NullableOption<number> | undefined;
    // Optional. Width of the image, in pixels. Read-only.
    width?: NullableOption<number> | undefined;
}
export interface Package {
    /**
     * A string indicating the type of package. While oneNote is the only currently defined value, you should expect other
     * package types to be returned and handle them accordingly.
     */
    type?: NullableOption<string> | undefined;
}
export interface PendingOperations {
    // A property that indicates that an operation that might update the binary content of a file is pending completion.
    pendingContentUpdate?: NullableOption<PendingContentUpdate> | undefined;
}
export interface Photo {
    // Camera manufacturer. Read-only.
    cameraMake?: NullableOption<string> | undefined;
    // Camera model. Read-only.
    cameraModel?: NullableOption<string> | undefined;
    // The denominator for the exposure time fraction from the camera. Read-only.
    exposureDenominator?: NullableOption<number> | undefined;
    // The numerator for the exposure time fraction from the camera. Read-only.
    exposureNumerator?: NullableOption<number> | undefined;
    // The F-stop value from the camera. Read-only.
    fNumber?: NullableOption<number> | undefined;
    // The focal length from the camera. Read-only.
    focalLength?: NullableOption<number> | undefined;
    // The ISO value from the camera. Read-only.
    iso?: NullableOption<number> | undefined;
    // The orientation value from the camera. Writable on OneDrive Personal.
    orientation?: NullableOption<number> | undefined;
    // The date and time the photo was taken in UTC time. Read-only.
    takenDateTime?: NullableOption<string> | undefined;
}
export interface PublicationFacet {
    // The state of publication for this document. Either published or checkout. Read-only.
    level?: NullableOption<string> | undefined;
    // The unique identifier for the version that is visible to the current caller. Read-only.
    versionId?: NullableOption<string> | undefined;
}
export interface RemoteItem {
    // Identity of the user, device, and application which created the item. Read-only.
    createdBy?: NullableOption<IdentitySet> | undefined;
    // Date and time of item creation. Read-only.
    createdDateTime?: NullableOption<string> | undefined;
    // Indicates that the remote item is a file. Read-only.
    file?: NullableOption<File> | undefined;
    // Information about the remote item from the local file system. Read-only.
    fileSystemInfo?: NullableOption<FileSystemInfo> | undefined;
    // Indicates that the remote item is a folder. Read-only.
    folder?: NullableOption<Folder> | undefined;
    // Unique identifier for the remote item in its drive. Read-only.
    id?: NullableOption<string> | undefined;
    // Image metadata, if the item is an image. Read-only.
    image?: NullableOption<Image> | undefined;
    // Identity of the user, device, and application which last modified the item. Read-only.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    // Date and time the item was last modified. Read-only.
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Optional. Filename of the remote item. Read-only.
    name?: NullableOption<string> | undefined;
    /**
     * If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some
     * contexts and folders in others. Read-only.
     */
    package?: NullableOption<Package> | undefined;
    // Properties of the parent of the remote item. Read-only.
    parentReference?: NullableOption<ItemReference> | undefined;
    /**
     * Indicates that the item has been shared with others and provides information about the shared state of the item.
     * Read-only.
     */
    shared?: NullableOption<Shared> | undefined;
    /**
     * Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers.
     * Read-only.
     */
    sharepointIds?: NullableOption<SharepointIds> | undefined;
    // Size of the remote item. Read-only.
    size?: NullableOption<number> | undefined;
    // If the current item is also available as a special folder, this facet is returned. Read-only.
    specialFolder?: NullableOption<SpecialFolder> | undefined;
    // Video metadata, if the item is a video. Read-only.
    video?: NullableOption<Video> | undefined;
    // DAV compatible URL for the item.
    webDavUrl?: NullableOption<string> | undefined;
    // URL that displays the resource in the browser. Read-only.
    webUrl?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface Root {}
export interface SearchResult {
    /**
     * A callback URL that can be used to record telemetry information. The application should issue a GET on this URL if the
     * user interacts with this item to improve the quality of results.
     */
    onClickTelemetryUrl?: NullableOption<string> | undefined;
}
export interface Shared {
    // The identity of the owner of the shared item. Read-only.
    owner?: NullableOption<IdentitySet> | undefined;
    // Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only.
    scope?: NullableOption<string> | undefined;
    // The identity of the user who shared the item. Read-only.
    sharedBy?: NullableOption<IdentitySet> | undefined;
    // The UTC date and time when the item was shared. Read-only.
    sharedDateTime?: NullableOption<string> | undefined;
}
export interface SpecialFolder {
    // The unique identifier for this item in the /drive/special collection
    name?: NullableOption<string> | undefined;
}
export interface Video {
    // Number of audio bits per sample.
    audioBitsPerSample?: NullableOption<number> | undefined;
    // Number of audio channels.
    audioChannels?: NullableOption<number> | undefined;
    // Name of the audio format (AAC, MP3, etc.).
    audioFormat?: NullableOption<string> | undefined;
    // Number of audio samples per second.
    audioSamplesPerSecond?: NullableOption<number> | undefined;
    // Bit rate of the video in bits per second.
    bitrate?: NullableOption<number> | undefined;
    // Duration of the file in milliseconds.
    duration?: NullableOption<number> | undefined;
    // 'Four character code' name of the video format.
    fourCC?: NullableOption<string> | undefined;
    // Frame rate of the video.
    frameRate?: NullableOption<number> | undefined;
    // Height of the video, in pixels.
    height?: NullableOption<number> | undefined;
    // Width of the video, in pixels.
    width?: NullableOption<number> | undefined;
}
export interface ListInfo {
    // If true, indicates that content types are enabled for this list.
    contentTypesEnabled?: NullableOption<boolean> | undefined;
    // If true, indicates that the list is not normally visible in the SharePoint user experience.
    hidden?: NullableOption<boolean> | undefined;
    /**
     * An enumerated value that represents the base list template used in creating the list. Possible values include
     * documentLibrary, genericList, task, survey, announcements, contacts, and more.
     */
    template?: NullableOption<string> | undefined;
}
export interface PublicError {
    // Represents the error code.
    code?: NullableOption<string> | undefined;
    // Details of the error.
    details?: NullableOption<PublicErrorDetail[]> | undefined;
    // Details of the inner error.
    innerError?: NullableOption<PublicInnerError> | undefined;
    // A non-localized message for the developer.
    message?: NullableOption<string> | undefined;
    // The target of the error.
    target?: NullableOption<string> | undefined;
}
export interface SiteCollection {
    // The geographic region code for where this site collection resides. Read-only.
    dataLocationCode?: NullableOption<string> | undefined;
    // The hostname for the site collection. Read-only.
    hostname?: NullableOption<string> | undefined;
    // If present, indicates that this is a root site collection in SharePoint. Read-only.
    root?: NullableOption<Root> | undefined;
}
export interface AttendeeAvailability {
    /**
     * The email address and type of attendee - whether it's a person or a resource, and whether required or optional if it's
     * a person.
     */
    attendee?: NullableOption<AttendeeBase> | undefined;
    // The availability status of the attendee. Possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
    availability?: NullableOption<FreeBusyStatus> | undefined;
}
export interface AttendeeBase extends Recipient {
    /**
     * The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person,
     * findMeetingTimes always considers the person is of the Required type.
     */
    type?: NullableOption<AttendeeType> | undefined;
}
export interface DateTimeTimeZone {
    // A single point of time in a combined date and time representation ({date}T{time}). For example, '2019-04-16T09:00:00'.
    dateTime?: string | undefined;
    // Represents a time zone, for example, 'Pacific Standard Time'. See below for possible values.
    timeZone?: NullableOption<string> | undefined;
}
export interface Location {
    // The street address of the location.
    address?: NullableOption<PhysicalAddress> | undefined;
    // The geographic coordinates and elevation of the location.
    coordinates?: NullableOption<OutlookGeoCoordinates> | undefined;
    // The name associated with the location.
    displayName?: NullableOption<string> | undefined;
    // Optional email address of the location.
    locationEmailAddress?: NullableOption<string> | undefined;
    /**
     * The type of location. Possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates,
     * streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.
     */
    locationType?: NullableOption<LocationType> | undefined;
    // Optional URI representing the location.
    locationUri?: NullableOption<string> | undefined;
    // For internal use only.
    uniqueId?: NullableOption<string> | undefined;
    // For internal use only.
    uniqueIdType?: NullableOption<LocationUniqueIdType> | undefined;
}
export interface OutlookGeoCoordinates {
    /**
     * The accuracy of the latitude and longitude. As an example, the accuracy can be measured in meters, such as the latitude
     * and longitude are accurate to within 50 meters.
     */
    accuracy?: NullableOption<number> | undefined;
    // The altitude of the location.
    altitude?: NullableOption<number> | undefined;
    // The accuracy of the altitude.
    altitudeAccuracy?: NullableOption<number> | undefined;
    // The latitude of the location.
    latitude?: NullableOption<number> | undefined;
    // The longitude of the location.
    longitude?: NullableOption<number> | undefined;
}
export interface LocationConstraint {
    /**
     * The client requests the service to include in the response a meeting location for the meeting. If this is true and all
     * the resources are busy, findMeetingTimes will not return any meeting time suggestions. If this is false and all the
     * resources are busy, findMeetingTimes would still look for meeting times without locations.
     */
    isRequired?: NullableOption<boolean> | undefined;
    // Constraint information for one or more locations that the client requests for the meeting.
    locations?: NullableOption<LocationConstraintItem[]> | undefined;
    // The client requests the service to suggest one or more meeting locations.
    suggestLocation?: NullableOption<boolean> | undefined;
}
export interface LocationConstraintItem extends Location {
    /**
     * If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to
     * false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without
     * checking if it's free. Default is true.
     */
    resolveAvailability?: NullableOption<boolean> | undefined;
}
export interface MeetingTimeSuggestion {
    // An array that shows the availability status of each attendee for this meeting suggestion.
    attendeeAvailability?: NullableOption<AttendeeAvailability[]> | undefined;
    // A percentage that represents the likelhood of all the attendees attending.
    confidence?: NullableOption<number> | undefined;
    // An array that specifies the name and geographic location of each meeting location for this meeting suggestion.
    locations?: NullableOption<Location[]> | undefined;
    // A time period suggested for the meeting.
    meetingTimeSlot?: NullableOption<TimeSlot> | undefined;
    /**
     * Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if
     * there are suggestions with the same confidence.
     */
    order?: NullableOption<number> | undefined;
    /**
     * Availability of the meeting organizer for this meeting suggestion. Possible values are: free, tentative, busy, oof,
     * workingElsewhere, unknown.
     */
    organizerAvailability?: NullableOption<FreeBusyStatus> | undefined;
    // Reason for suggesting the meeting time.
    suggestionReason?: NullableOption<string> | undefined;
}
export interface TimeSlot {
    // The date, time, and time zone that a period begins.
    end?: DateTimeTimeZone | undefined;
    // The date, time, and time zone that a period ends.
    start?: DateTimeTimeZone | undefined;
}
export interface MeetingTimeSuggestionsResult {
    /**
     * A reason for not returning any meeting suggestions. Possible values are: attendeesUnavailable,
     * attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string
     * if the meetingTimeSuggestions property does include any meeting suggestions.
     */
    emptySuggestionsReason?: NullableOption<string> | undefined;
    // An array of meeting suggestions.
    meetingTimeSuggestions?: NullableOption<MeetingTimeSuggestion[]> | undefined;
}
export interface TimeConstraint {
    // The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown.
    activityDomain?: NullableOption<ActivityDomain> | undefined;
    timeSlots?: NullableOption<TimeSlot[]> | undefined;
}
export interface AttachmentItem {
    // The type of attachment. Possible values are: file, item, reference. Required.
    attachmentType?: NullableOption<AttachmentType> | undefined;
    // The nature of the data in the attachment. Optional.
    contentType?: NullableOption<string> | undefined;
    // true if the attachment is an inline attachment; otherwise, false. Optional.
    isInline?: NullableOption<boolean> | undefined;
    /**
     * The display name of the attachment. This can be a descriptive string and does not have to be the actual file name.
     * Required.
     */
    name?: NullableOption<string> | undefined;
    // The length of the attachment in bytes. Required.
    size?: NullableOption<number> | undefined;
}
export interface Attendee extends AttendeeBase {
    /**
     * An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed
     * another time, then this property is not included in a response of a GET event.
     */
    proposedNewTime?: NullableOption<TimeSlot> | undefined;
    // The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent.
    status?: NullableOption<ResponseStatus> | undefined;
}
export interface ResponseStatus {
    // The response type. Possible values are: None, Organizer, TentativelyAccepted, Accepted, Declined, NotResponded.
    response?: NullableOption<ResponseType> | undefined;
    /**
     * The date and time that the response was returned. It uses ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    time?: NullableOption<string> | undefined;
}
export interface AutomaticRepliesMailTips {
    // The automatic reply message.
    message?: NullableOption<string> | undefined;
    // The language that the automatic reply message is in.
    messageLanguage?: NullableOption<LocaleInfo> | undefined;
    // The date and time that automatic replies are set to end.
    scheduledEndTime?: NullableOption<DateTimeTimeZone> | undefined;
    // The date and time that automatic replies are set to begin.
    scheduledStartTime?: NullableOption<DateTimeTimeZone> | undefined;
}
export interface LocaleInfo {
    // A name representing the user's locale in natural language, for example, 'English (United States)'.
    displayName?: NullableOption<string> | undefined;
    /**
     * A locale representation for the user, which includes the user's preferred language and country/region. For example,
     * 'en-us'. The language component follows 2-letter codes as defined in ISO 639-1, and the country component follows
     * 2-letter codes as defined in ISO 3166-1 alpha-2.
     */
    locale?: NullableOption<string> | undefined;
}
export interface AutomaticRepliesSetting {
    /**
     * The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status
     * is AlwaysEnabled or Scheduled. Possible values are: none, contactsOnly, all.
     */
    externalAudience?: NullableOption<ExternalAudienceScope> | undefined;
    // The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled.
    externalReplyMessage?: NullableOption<string> | undefined;
    /**
     * The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled
     * or Scheduled.
     */
    internalReplyMessage?: NullableOption<string> | undefined;
    // The date and time that automatic replies are set to end, if Status is set to Scheduled.
    scheduledEndDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    // The date and time that automatic replies are set to begin, if Status is set to Scheduled.
    scheduledStartDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    // Configurations status for automatic replies. Possible values are: disabled, alwaysEnabled, scheduled.
    status?: NullableOption<AutomaticRepliesStatus> | undefined;
}
export interface CalendarSharingMessageAction {
    action?: NullableOption<CalendarSharingAction> | undefined;
    actionType?: NullableOption<CalendarSharingActionType> | undefined;
    importance?: NullableOption<CalendarSharingActionImportance> | undefined;
}
export interface ConvertIdResult {
    /**
     * An error object indicating the reason for the conversion failure. This value is not present if the conversion
     * succeeded.
     */
    errorDetails?: NullableOption<GenericError> | undefined;
    // The identifier that was converted. This value is the original, un-converted identifier.
    sourceId?: NullableOption<string> | undefined;
    // The converted identifier. This value is not present if the conversion failed.
    targetId?: NullableOption<string> | undefined;
}
export interface GenericError {
    // The error code.
    code?: NullableOption<string> | undefined;
    // The error message.
    message?: NullableOption<string> | undefined;
}
export interface TimeZoneBase {
    /**
     * The name of a time zone. It can be a standard time zone name such as 'Hawaii-Aleutian Standard Time', or 'Customized
     * Time Zone' for a custom time zone.
     */
    name?: NullableOption<string> | undefined;
}
export interface CustomTimeZone extends TimeZoneBase {
    /**
     * The time offset of the time zone from Coordinated Universal Time (UTC). This value is in minutes. Time zones that are
     * ahead of UTC have a positive offset; time zones that are behind UTC have a negative offset.
     */
    bias?: NullableOption<number> | undefined;
    // Specifies when the time zone switches from standard time to daylight saving time.
    daylightOffset?: NullableOption<DaylightTimeZoneOffset> | undefined;
    // Specifies when the time zone switches from daylight saving time to standard time.
    standardOffset?: NullableOption<StandardTimeZoneOffset> | undefined;
}
export interface StandardTimeZoneOffset {
    // Represents the nth occurrence of the day of week that the transition from daylight saving time to standard time occurs.
    dayOccurrence?: NullableOption<number> | undefined;
    // Represents the day of the week when the transition from daylight saving time to standard time.
    dayOfWeek?: NullableOption<DayOfWeek> | undefined;
    // Represents the month of the year when the transition from daylight saving time to standard time occurs.
    month?: NullableOption<number> | undefined;
    // Represents the time of day when the transition from daylight saving time to standard time occurs.
    time?: NullableOption<string> | undefined;
    /**
     * Represents how frequently in terms of years the change from daylight saving time to standard time occurs. For example,
     * a value of 0 means every year.
     */
    year?: NullableOption<number> | undefined;
}
export interface DaylightTimeZoneOffset extends StandardTimeZoneOffset {
    // The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes.
    daylightBias?: NullableOption<number> | undefined;
}
export interface FollowupFlag {
    // The date and time that the follow-up was finished.
    completedDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    /**
     * The date and time that the follow up is to be finished. Note: To set the due date, you must also specify the
     * startDateTime; otherwise, you will get a 400 Bad Request response.
     */
    dueDateTime?: NullableOption<DateTimeTimeZone> | undefined;
    // The status for follow-up for an item. Possible values are notFlagged, complete, and flagged.
    flagStatus?: NullableOption<FollowupFlagStatus> | undefined;
    // The date and time that the follow-up is to begin.
    startDateTime?: NullableOption<DateTimeTimeZone> | undefined;
}
export interface FreeBusyError {
    // Describes the error.
    message?: NullableOption<string> | undefined;
    // The response code from querying for the availability of the user, distribution list, or resource.
    responseCode?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface InternetMessageHeader {
    // Represents the key in a key-value pair.
    name?: NullableOption<string> | undefined;
    // The value in a key-value pair.
    value?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ItemBody {
    // The content of the item.
    content?: NullableOption<string> | undefined;
    // The type of the content. Possible values are text and html.
    contentType?: NullableOption<BodyType> | undefined;
}
export interface WorkingHours {
    // The days of the week on which the user works.
    daysOfWeek?: NullableOption<DayOfWeek[]> | undefined;
    // The time of the day that the user stops working.
    endTime?: NullableOption<string> | undefined;
    // The time of the day that the user starts working.
    startTime?: NullableOption<string> | undefined;
    // The time zone to which the working hours apply.
    timeZone?: NullableOption<TimeZoneBase> | undefined;
}
export interface MailTips {
    // Mail tips for automatic reply if it has been set up by the recipient.
    automaticReplies?: NullableOption<AutomaticRepliesMailTips> | undefined;
    // A custom mail tip that can be set on the recipient's mailbox.
    customMailTip?: NullableOption<string> | undefined;
    /**
     * Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders,
     * rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders.
     */
    deliveryRestricted?: NullableOption<boolean> | undefined;
    // The email address of the recipient to get mailtips for.
    emailAddress?: NullableOption<EmailAddress> | undefined;
    // Errors that occur during the getMailTips action.
    error?: NullableOption<MailTipsError> | undefined;
    // The number of external members if the recipient is a distribution list.
    externalMemberCount?: NullableOption<number> | undefined;
    /**
     * Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list
     * and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a
     * recipient requires approval of the recipient's manager.
     */
    isModerated?: NullableOption<boolean> | undefined;
    // The mailbox full status of the recipient.
    mailboxFull?: NullableOption<boolean> | undefined;
    // The maximum message size that has been configured for the recipient's organization or mailbox.
    maxMessageSize?: NullableOption<number> | undefined;
    /**
     * The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For
     * example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator
     * wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their
     * message may leave the organization, helping them make the correct decisions about wording, tone and content.
     */
    recipientScope?: NullableOption<RecipientScopeType> | undefined;
    // Recipients suggested based on previous contexts where they appear in the same message.
    recipientSuggestions?: NullableOption<Recipient[]> | undefined;
    // The number of members if the recipient is a distribution list.
    totalMemberCount?: NullableOption<number> | undefined;
}
export interface MailTipsError {
    // The error code.
    code?: NullableOption<string> | undefined;
    // The error message.
    message?: NullableOption<string> | undefined;
}
export interface MessageRuleActions {
    // A list of categories to be assigned to a message.
    assignCategories?: NullableOption<string[]> | undefined;
    // The ID of a folder that a message is to be copied to.
    copyToFolder?: NullableOption<string> | undefined;
    // Indicates whether a message should be moved to the Deleted Items folder.
    delete?: NullableOption<boolean> | undefined;
    // The email addresses of the recipients to which a message should be forwarded as an attachment.
    forwardAsAttachmentTo?: NullableOption<Recipient[]> | undefined;
    // The email addresses of the recipients to which a message should be forwarded.
    forwardTo?: NullableOption<Recipient[]> | undefined;
    // Indicates whether a message should be marked as read.
    markAsRead?: NullableOption<boolean> | undefined;
    // Sets the importance of the message, which can be: low, normal, high.
    markImportance?: NullableOption<Importance> | undefined;
    // The ID of the folder that a message will be moved to.
    moveToFolder?: NullableOption<string> | undefined;
    // Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
    permanentDelete?: NullableOption<boolean> | undefined;
    // The email address to which a message should be redirected.
    redirectTo?: NullableOption<Recipient[]> | undefined;
    // Indicates whether subsequent rules should be evaluated.
    stopProcessingRules?: NullableOption<boolean> | undefined;
}
export interface MessageRulePredicates {
    /**
     * Represents the strings that should appear in the body of an incoming message in order for the condition or exception to
     * apply.
     */
    bodyContains?: NullableOption<string[]> | undefined;
    /**
     * Represents the strings that should appear in the body or subject of an incoming message in order for the condition or
     * exception to apply.
     */
    bodyOrSubjectContains?: NullableOption<string[]> | undefined;
    /**
     * Represents the categories that an incoming message should be labeled with in order for the condition or exception to
     * apply.
     */
    categories?: NullableOption<string[]> | undefined;
    // Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
    fromAddresses?: NullableOption<Recipient[]> | undefined;
    // Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
    hasAttachments?: NullableOption<boolean> | undefined;
    /**
     * Represents the strings that appear in the headers of an incoming message in order for the condition or exception to
     * apply.
     */
    headerContains?: NullableOption<string[]> | undefined;
    /**
     * The importance that is stamped on an incoming message in order for the condition or exception to apply: low, normal,
     * high.
     */
    importance?: NullableOption<Importance> | undefined;
    // Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
    isApprovalRequest?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
    isAutomaticForward?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
    isAutomaticReply?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
    isEncrypted?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
    isMeetingRequest?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
    isMeetingResponse?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
    isNonDeliveryReport?: NullableOption<boolean> | undefined;
    /**
     * Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or
     * exception to apply.
     */
    isPermissionControlled?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
    isReadReceipt?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
    isSigned?: NullableOption<boolean> | undefined;
    // Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
    isVoicemail?: NullableOption<boolean> | undefined;
    /**
     * Represents the flag-for-action value that appears on an incoming message in order for the condition or exception to
     * apply. The possible values are: any, call, doNotForward, followUp, fyi, forward, noResponseNecessary, read, reply,
     * replyToAll, review.
     */
    messageActionFlag?: NullableOption<MessageActionFlag> | undefined;
    /**
     * Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or
     * exception to apply.
     */
    notSentToMe?: NullableOption<boolean> | undefined;
    /**
     * Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in
     * order for the condition or exception to apply.
     */
    recipientContains?: NullableOption<string[]> | undefined;
    /**
     * Represents the strings that appear in the from property of an incoming message in order for the condition or exception
     * to apply.
     */
    senderContains?: NullableOption<string[]> | undefined;
    /**
     * Represents the sensitivity level that must be stamped on an incoming message in order for the condition or exception to
     * apply. The possible values are: normal, personal, private, confidential.
     */
    sensitivity?: NullableOption<Sensitivity> | undefined;
    /**
     * Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the
     * condition or exception to apply.
     */
    sentCcMe?: NullableOption<boolean> | undefined;
    /**
     * Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition
     * or exception to apply.
     */
    sentOnlyToMe?: NullableOption<boolean> | undefined;
    /**
     * Represents the email addresses that an incoming message must have been sent to in order for the condition or exception
     * to apply.
     */
    sentToAddresses?: NullableOption<Recipient[]> | undefined;
    /**
     * Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the
     * condition or exception to apply.
     */
    sentToMe?: NullableOption<boolean> | undefined;
    /**
     * Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming
     * message in order for the condition or exception to apply.
     */
    sentToOrCcMe?: NullableOption<boolean> | undefined;
    /**
     * Represents the strings that appear in the subject of an incoming message in order for the condition or exception to
     * apply.
     */
    subjectContains?: NullableOption<string[]> | undefined;
    /**
     * Represents the minimum and maximum sizes (in kilobytes) that an incoming message must fall in between in order for the
     * condition or exception to apply.
     */
    withinSizeRange?: NullableOption<SizeRange> | undefined;
}
export interface SizeRange {
    // The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    maximumSize?: NullableOption<number> | undefined;
    // The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    minimumSize?: NullableOption<number> | undefined;
}
export interface OnlineMeetingInfo {
    // The ID of the conference.
    conferenceId?: NullableOption<string> | undefined;
    /**
     * The external link that launches the online meeting. This is a URL that clients will launch into a browser and will
     * redirect the user to join the meeting.
     */
    joinUrl?: NullableOption<string> | undefined;
    // All of the phone numbers associated with this conference.
    phones?: NullableOption<Phone[]> | undefined;
    // The pre-formatted quickdial for this call.
    quickDial?: NullableOption<string> | undefined;
    // The toll free numbers that can be used to join the conference.
    tollFreeNumbers?: NullableOption<string[]> | undefined;
    // The toll number that can be used to join the conference.
    tollNumber?: NullableOption<string> | undefined;
}
export interface PatternedRecurrence {
    // The frequency of an event. Do not specify for a one-time access review.
    pattern?: NullableOption<RecurrencePattern> | undefined;
    // The duration of an event.
    range?: NullableOption<RecurrenceRange> | undefined;
}
export interface RecurrencePattern {
    // The day of the month on which the event occurs. Required if type is absoluteMonthly or absoluteYearly.
    dayOfMonth?: number | undefined;
    /**
     * A collection of the days of the week on which the event occurs. Possible values are: sunday, monday, tuesday,
     * wednesday, thursday, friday, saturday. If type is relativeMonthly or relativeYearly, and daysOfWeek specifies more than
     * one day, the event falls on the first day that satisfies the pattern. Required if type is weekly, relativeMonthly, or
     * relativeYearly.
     */
    daysOfWeek?: NullableOption<DayOfWeek[]> | undefined;
    /**
     * The first day of the week. Possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. Default
     * is sunday. Required if type is weekly.
     */
    firstDayOfWeek?: NullableOption<DayOfWeek> | undefined;
    /**
     * Specifies on which instance of the allowed days specified in daysOfsWeek the event occurs, counted from the first
     * instance in the month. Possible values are: first, second, third, fourth, last. Default is first. Optional and used if
     * type is relativeMonthly or relativeYearly.
     */
    index?: NullableOption<WeekIndex> | undefined;
    /**
     * The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type.
     * Required.
     */
    interval?: number | undefined;
    // The month in which the event occurs. This is a number from 1 to 12.
    month?: number | undefined;
    // The recurrence pattern type: daily, weekly, absoluteMonthly, relativeMonthly, absoluteYearly, relativeYearly. Required.
    type?: NullableOption<RecurrencePatternType> | undefined;
}
export interface RecurrenceRange {
    /**
     * The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence
     * of the meeting may not be this date. Required if type is endDate.
     */
    endDate?: NullableOption<string> | undefined;
    // The number of times to repeat the event. Required and must be positive if type is numbered.
    numberOfOccurrences?: number | undefined;
    // Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used.
    recurrenceTimeZone?: NullableOption<string> | undefined;
    /**
     * The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later,
     * depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event.
     * Required.
     */
    startDate?: NullableOption<string> | undefined;
    // The recurrence range. Possible values are: endDate, noEnd, numbered. Required.
    type?: NullableOption<RecurrenceRangeType> | undefined;
}
export interface PersonType {
    // The type of data source, such as Person.
    class?: NullableOption<string> | undefined;
    // The secondary type of data source, such as OrganizationUser.
    subclass?: NullableOption<string> | undefined;
}
export interface Reminder {
    /**
     * Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows
     * Exchange to apply changes to the correct version of the object.
     */
    changeKey?: NullableOption<string> | undefined;
    // The date, time and time zone that the event ends.
    eventEndTime?: NullableOption<DateTimeTimeZone> | undefined;
    // The unique ID of the event. Read only.
    eventId?: NullableOption<string> | undefined;
    // The location of the event.
    eventLocation?: NullableOption<Location> | undefined;
    // The date, time, and time zone that the event starts.
    eventStartTime?: NullableOption<DateTimeTimeZone> | undefined;
    // The text of the event's subject line.
    eventSubject?: NullableOption<string> | undefined;
    /**
     * The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox
     * via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot
     * be accessed from within an iFrame.
     */
    eventWebLink?: NullableOption<string> | undefined;
    // The date, time, and time zone that the reminder is set to occur.
    reminderFireTime?: NullableOption<DateTimeTimeZone> | undefined;
}
export interface ScheduleInformation {
    /**
     * Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots.
     * Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working
     * elsewhere.
     */
    availabilityView?: NullableOption<string> | undefined;
    // Error information from attempting to get the availability of the user, distribution list, or resource.
    error?: NullableOption<FreeBusyError> | undefined;
    // An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation.
    scheduleId?: NullableOption<string> | undefined;
    // Contains the items that describe the availability of the user or resource.
    scheduleItems?: NullableOption<ScheduleItem[]> | undefined;
    /**
     * The days of the week and hours in a specific time zone that the user works. These are set as part of the user's
     * mailboxSettings.
     */
    workingHours?: NullableOption<WorkingHours> | undefined;
}
export interface ScheduleItem {
    // The date, time, and time zone that the corresponding event ends.
    end?: NullableOption<DateTimeTimeZone> | undefined;
    // The sensitivity of the corresponding event. True if the event is marked private, false otherwise. Optional.
    isPrivate?: NullableOption<boolean> | undefined;
    // The location where the corresponding event is held or attended from. Optional.
    location?: NullableOption<string> | undefined;
    // The date, time, and time zone that the corresponding event starts.
    start?: NullableOption<DateTimeTimeZone> | undefined;
    /**
     * The availability status of the user or resource during the corresponding event. The possible values are: free,
     * tentative, busy, oof, workingElsewhere, unknown.
     */
    status?: NullableOption<FreeBusyStatus> | undefined;
    // The corresponding event's subject line. Optional.
    subject?: NullableOption<string> | undefined;
}
export interface ScoredEmailAddress {
    // The email address.
    address?: NullableOption<string> | undefined;
    itemId?: NullableOption<string> | undefined;
    /**
     * The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned
     * results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s
     * communication and collaboration patterns and business relationships.
     */
    relevanceScore?: NullableOption<number> | undefined;
    selectionLikelihood?: NullableOption<SelectionLikelihoodInfo> | undefined;
}
export interface TimeZoneInformation {
    // An identifier for the time zone.
    alias?: NullableOption<string> | undefined;
    // A display string that represents the time zone.
    displayName?: NullableOption<string> | undefined;
}
export interface UploadSession {
    /**
     * The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration
     * time is reached.
     */
    expirationDateTime?: NullableOption<string> | undefined;
    /**
     * When uploading files to document libraries, this is a collection of byte ranges that the server is missing for the
     * file. These ranges are zero-indexed and of the format, '{start}-{end}' (e.g. '0-26' to indicate the first 27 bytes of
     * the file). When uploading files as Outlook attachments, instead of a collection of ranges, this property always
     * indicates a single value '{start}', the location in the file where the next upload should begin.
     */
    nextExpectedRanges?: NullableOption<string[]> | undefined;
    // The URL endpoint that accepts PUT requests for byte ranges of the file.
    uploadUrl?: NullableOption<string> | undefined;
}
export interface Website {
    // The URL of the website.
    address?: NullableOption<string> | undefined;
    // The display name of the web site.
    displayName?: NullableOption<string> | undefined;
    // Possible values are: other, home, work, blog, profile.
    type?: NullableOption<WebsiteType> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface AccessAction {}
// tslint:disable-next-line: no-empty-interface
export interface BooleanColumn {}
export interface CalculatedColumn {
    // For dateTime output types, the format of the value. Must be one of dateOnly or dateTime.
    format?: NullableOption<string> | undefined;
    // The formula used to compute the value for this column.
    formula?: NullableOption<string> | undefined;
    // The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text.
    outputType?: NullableOption<string> | undefined;
}
export interface ChoiceColumn {
    // If true, allows custom values that aren't in the configured choices.
    allowTextEntry?: NullableOption<boolean> | undefined;
    // The list of values available for this column.
    choices?: NullableOption<string[]> | undefined;
    // How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons
    displayAs?: NullableOption<string> | undefined;
}
export interface ContentTypeInfo {
    // The id of the content type.
    id?: NullableOption<string> | undefined;
    // The name of the content type.
    name?: NullableOption<string> | undefined;
}
export interface ContentTypeOrder {
    // Whether this is the default Content Type
    default?: NullableOption<boolean> | undefined;
    // Specifies the position in which the Content Type appears in the selection UI.
    position?: NullableOption<number> | undefined;
}
export interface CurrencyColumn {
    // Specifies the locale from which to infer the currency symbol.
    locale?: NullableOption<string> | undefined;
}
export interface DateTimeColumn {
    /**
     * How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details.
     * If unspecified, treated as default.
     */
    displayAs?: NullableOption<string> | undefined;
    // Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime
    format?: NullableOption<string> | undefined;
}
export interface DefaultColumnValue {
    // The formula used to compute the default value for this column.
    formula?: NullableOption<string> | undefined;
    // The direct value to use as the default value for this column.
    value?: NullableOption<string> | undefined;
}
export interface DriveItemUploadableProperties {
    // Provides a user-visible description of the item. Read-write. Only on OneDrive Personal.
    description?: NullableOption<string> | undefined;
    // Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal.
    fileSize?: NullableOption<number> | undefined;
    // File system information on client. Read-write.
    fileSystemInfo?: NullableOption<FileSystemInfo> | undefined;
    // The name of the item (filename and extension). Read-write.
    name?: NullableOption<string> | undefined;
}
export interface DriveRecipient {
    // The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).
    alias?: NullableOption<string> | undefined;
    // The email address for the recipient, if the recipient has an associated email address.
    email?: NullableOption<string> | undefined;
    // The unique identifier for the recipient in the directory.
    objectId?: NullableOption<string> | undefined;
}
export interface Hashes {
    // The CRC32 value of the file (if available). Read-only.
    crc32Hash?: NullableOption<string> | undefined;
    /**
     * A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available).
     * Read-only.
     */
    quickXorHash?: NullableOption<string> | undefined;
    // SHA1 hash for the contents of the file (if available). Read-only.
    sha1Hash?: NullableOption<string> | undefined;
    // SHA256 hash for the contents of the file (if available). Read-only.
    sha256Hash?: NullableOption<string> | undefined;
}
export interface FolderView {
    // The method by which the folder should be sorted.
    sortBy?: NullableOption<string> | undefined;
    // If true, indicates that items should be sorted in descending order. Otherwise, items should be sorted ascending.
    sortOrder?: NullableOption<string> | undefined;
    // The type of view that should be used to represent the folder.
    viewType?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface GeolocationColumn {}
// tslint:disable-next-line: interface-name
export interface IncompleteData {
    // The service does not have source data before the specified time.
    missingDataBeforeDateTime?: NullableOption<string> | undefined;
    // Some data was not recorded due to excessive activity.
    wasThrottled?: NullableOption<boolean> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ItemActionStat {
    // The number of times the action took place. Read-only.
    actionCount?: NullableOption<number> | undefined;
    // The number of distinct actors that performed the action. Read-only.
    actorCount?: NullableOption<number> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ItemPreviewInfo {
    getUrl?: NullableOption<string> | undefined;
    postParameters?: NullableOption<string> | undefined;
    postUrl?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ItemReference {
    // Unique identifier of the drive instance that contains the item. Read-only.
    driveId?: NullableOption<string> | undefined;
    // Identifies the type of drive. See [drive][] resource for values.
    driveType?: NullableOption<string> | undefined;
    // Unique identifier of the item in the drive. Read-only.
    id?: NullableOption<string> | undefined;
    // The name of the item being referenced. Read-only.
    name?: NullableOption<string> | undefined;
    // Path that can be used to navigate to the item. Read-only.
    path?: NullableOption<string> | undefined;
    // A unique identifier for a shared resource that can be accessed via the [Shares][] API.
    shareId?: NullableOption<string> | undefined;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: NullableOption<SharepointIds> | undefined;
    /**
     * For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document
     * library of the driveItem resource. The value is the same as the id property of that [site][] resource. It is an opaque
     * string that consists of three identifiers of the site. For OneDrive, this property is not populated.
     */
    siteId?: NullableOption<string> | undefined;
}
export interface LookupColumn {
    // Indicates whether multiple values can be selected from the source.
    allowMultipleValues?: NullableOption<boolean> | undefined;
    // Indicates whether values in the column should be able to exceed the standard limit of 255 characters.
    allowUnlimitedLength?: NullableOption<boolean> | undefined;
    // The name of the lookup source column.
    columnName?: NullableOption<string> | undefined;
    // The unique identifier of the lookup source list.
    listId?: NullableOption<string> | undefined;
    /**
     * If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the
     * primary lookup. Use the list item looked up by the primary as the source for the column named here.
     */
    primaryLookupColumnId?: NullableOption<string> | undefined;
}
export interface NumberColumn {
    // How many decimal places to display. See below for information about the possible values.
    decimalPlaces?: NullableOption<string> | undefined;
    // How the value should be presented in the UX. Must be one of number or percentage. If unspecified, treated as number.
    displayAs?: NullableOption<string> | undefined;
    // The maximum permitted value.
    maximum?: NullableOption<number> | undefined;
    // The minimum permitted value.
    minimum?: NullableOption<number> | undefined;
}
export interface PendingContentUpdate {
    // Date and time the pending binary operation was queued in UTC time. Read-only.
    queuedDateTime?: NullableOption<string> | undefined;
}
export interface PersonOrGroupColumn {
    // Indicates whether multiple values can be selected from the source.
    allowMultipleSelection?: NullableOption<boolean> | undefined;
    // Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.
    chooseFromType?: NullableOption<string> | undefined;
    // How to display the information about the person or group chosen. See below.
    displayAs?: NullableOption<string> | undefined;
}
export interface PublicErrorDetail {
    // The error code.
    code?: NullableOption<string> | undefined;
    // The error message.
    message?: NullableOption<string> | undefined;
    // The target of the error.
    target?: NullableOption<string> | undefined;
}
export interface PublicInnerError {
    // The error code.
    code?: NullableOption<string> | undefined;
    // A collection of error details.
    details?: NullableOption<PublicErrorDetail[]> | undefined;
    // The error message.
    message?: NullableOption<string> | undefined;
    // The target of the error.
    target?: NullableOption<string> | undefined;
}
export interface StoragePlanInformation {
    // Indicates if there are higher storage quota plans available. Read-only.
    upgradeAvailable?: NullableOption<boolean> | undefined;
}
export interface SharingInvitation {
    // The email address provided for the recipient of the sharing invitation. Read-only.
    email?: NullableOption<string> | undefined;
    /**
     * Provides information about who sent the invitation that created this permission, if that information is available.
     * Read-only.
     */
    invitedBy?: NullableOption<IdentitySet> | undefined;
    redeemedBy?: NullableOption<string> | undefined;
    // If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only.
    signInRequired?: NullableOption<boolean> | undefined;
}
export interface SharingLink {
    // The app the link is associated with.
    application?: NullableOption<Identity> | undefined;
    /**
     * If true then the user can only use this link to view the item on the web, and cannot use it to download the contents of
     * the item. Only for OneDrive for Business and SharePoint.
     */
    preventsDownload?: NullableOption<boolean> | undefined;
    /**
     * The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone,
     * organization indicates the link is only usable for users signed into the same tenant.
     */
    scope?: NullableOption<string> | undefined;
    // The type of the link created.
    type?: NullableOption<string> | undefined;
    /**
     * For embed links, this property contains the HTML code for an &amp;lt;iframe&amp;gt; element that will embed the item in
     * a webpage.
     */
    webHtml?: NullableOption<string> | undefined;
    // A URL that opens the item in the browser on the OneDrive website.
    webUrl?: NullableOption<string> | undefined;
}
export interface TextColumn {
    // Whether to allow multiple lines of text.
    allowMultipleLines?: NullableOption<boolean> | undefined;
    // Whether updates to this column should replace existing text, or append to it.
    appendChangesToExistingText?: NullableOption<boolean> | undefined;
    // The size of the text box.
    linesForEditing?: NullableOption<number> | undefined;
    // The maximum number of characters for the value.
    maxLength?: NullableOption<number> | undefined;
    // The type of text being stored. Must be one of plain or richText
    textType?: NullableOption<string> | undefined;
}
export interface Thumbnail {
    // The content stream for the thumbnail.
    content?: NullableOption<any> | undefined;
    // The height of the thumbnail, in pixels.
    height?: NullableOption<number> | undefined;
    /**
     * The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is
     * requested.
     */
    sourceItemId?: NullableOption<string> | undefined;
    // The URL used to fetch the thumbnail content.
    url?: NullableOption<string> | undefined;
    // The width of the thumbnail, in pixels.
    width?: NullableOption<number> | undefined;
}
export interface ExtensionSchemaProperty {
    // The name of the strongly typed property defined as part of a schema extension.
    name?: NullableOption<string> | undefined;
    /**
     * The type of the property that is defined as part of a schema extension. Allowed values are Binary, Boolean, DateTime,
     * Integer or String. See the table below for more details.
     */
    type?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface AccessReviewApplyAction {}
// tslint:disable-next-line: no-empty-interface
export interface AccessReviewScope {}
export interface AccessReviewQueryScope extends AccessReviewScope {
    // The query representing what will be reviewed in an access review.
    query?: NullableOption<string> | undefined;
    /**
     * In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source
     * of the query. This property is only required if a relative query is specified. For example, ./manager.
     */
    queryRoot?: NullableOption<string> | undefined;
    // Indicates the type of query. Types include MicrosoftGraph and ARM.
    queryType?: NullableOption<string> | undefined;
}
export interface AccessReviewInactiveUsersQueryScope extends AccessReviewQueryScope {
    /**
     * Defines the duration of inactivity. Inactivity is based on the last sign in date of the user compared to the access
     * review instance's start date. If this property is not specified, it's assigned the default value PT0S.
     */
    inactiveDuration?: NullableOption<string> | undefined;
}
export interface AccessReviewInstanceDecisionItemResource {
    // Display name of the resource
    displayName?: NullableOption<string> | undefined;
    // Resource ID
    id?: NullableOption<string> | undefined;
    // Type of resource. Types include: Group, ServicePrincipal, DirectoryRole, AzureRole, AccessPackageAssignmentPolicy.
    type?: NullableOption<string> | undefined;
}
export interface AccessReviewReviewerScope {
    // The query specifying who will be the reviewer. See table for examples.
    query?: NullableOption<string> | undefined;
    /**
     * In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source
     * of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value:
     * decisions.
     */
    queryRoot?: NullableOption<string> | undefined;
    // The type of query. Examples include MicrosoftGraph and ARM.
    queryType?: NullableOption<string> | undefined;
}
export interface AccessReviewScheduleSettings {
    /**
     * Optional field. Describes the actions to take once a review is complete. There are two types that are currently
     * supported: removeAccessApplyAction (default) and disableAndDeleteUserApplyAction. Field only needs to be specified in
     * the case of disableAndDeleteUserApplyAction. See accessReviewApplyAction.
     */
    applyActions?: NullableOption<AccessReviewApplyAction[]> | undefined;
    /**
     * Indicates whether decisions are automatically applied. When set to false, a user must apply the decisions manually once
     * the reviewer completes the access review. When set to true, decisions are applied automatically after the access review
     * instance duration ends, whether or not the reviewers have responded. Default value is false.
     */
    autoApplyDecisionsEnabled?: boolean | undefined;
    // Decision chosen if defaultDecisionEnabled is enabled. Can be one of Approve, Deny, or Recommendation.
    defaultDecision?: NullableOption<string> | undefined;
    // Indicates whether the default decision is enabled or disabled when reviewers do not respond. Default value is false.
    defaultDecisionEnabled?: boolean | undefined;
    // Duration of each recurrence of review (accessReviewInstance) in number of days.
    instanceDurationInDays?: number | undefined;
    // Indicates whether reviewers are required to provide justification with their decision. Default value is false.
    justificationRequiredOnApproval?: boolean | undefined;
    // Indicates whether emails are enabled or disabled. Default value is false.
    mailNotificationsEnabled?: boolean | undefined;
    // Indicates whether decision recommendations are enabled/disabled.
    recommendationsEnabled?: boolean | undefined;
    /**
     * Detailed settings for recurrence using the standard Outlook recurrence object. Only weekly and absoluteMonthly on
     * recurrencePattern are supported. Use the property startDate on recurrenceRange to determine the day the review starts.
     */
    recurrence?: NullableOption<PatternedRecurrence> | undefined;
    // Indicates whether reminders are enabled or disabled. Default value is false.
    reminderNotificationsEnabled?: boolean | undefined;
}
export interface AppConsentRequestScope {
    // The name of the scope.
    displayName?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface DisableAndDeleteUserApplyAction extends AccessReviewApplyAction {}
export interface PrincipalResourceMembershipsScope extends AccessReviewScope {
    // Defines the scopes of the principals to be included in an access review.
    principalScopes?: NullableOption<AccessReviewScope[]> | undefined;
    // Defines the scopes of the resources for which access will be reviewed.
    resourceScopes?: NullableOption<AccessReviewScope[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface RemoveAccessApplyAction extends AccessReviewApplyAction {}
export interface ServicePrincipalIdentity extends Identity {
    // The application identifier of the service principal.
    appId?: NullableOption<string> | undefined;
}
export interface AgreementFileData {
    data?: NullableOption<number> | undefined;
}
export interface TermsExpiration {
    /**
     * Represents the frequency at which the terms will expire, after its first expiration as set in startDateTime. The value
     * is represented in ISO 8601 format for durations. For example, PT1M represents a time period of 1 month.
     */
    frequency?: NullableOption<string> | undefined;
    /**
     * The DateTime when the agreement is set to expire for all users. The Timestamp type represents date and time information
     * using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    startDateTime?: NullableOption<string> | undefined;
}
export interface ConditionalAccessSessionControl {
    // Specifies whether the session control is enabled.
    isEnabled?: NullableOption<boolean> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ApplicationEnforcedRestrictionsSessionControl extends ConditionalAccessSessionControl {}
export interface CloudAppSecuritySessionControl extends ConditionalAccessSessionControl {
    /**
     * Possible values are: mcasConfigured, monitorOnly, blockDownloads. Learn more about these values here:
     * https://docs.microsoft.com/cloud-app-security/proxy-deployment-aad#step-1-create-an-azure-ad-conditional-access-test-policy-
     */
    cloudAppSecurityType?: NullableOption<CloudAppSecuritySessionControlType> | undefined;
}
export interface ConditionalAccessApplications {
    // The list of application IDs explicitly excluded from the policy.
    excludeApplications?: string[] | undefined;
    /**
     * The list of application IDs the policy applies to, unless explicitly excluded (in excludeApplications). Can also be set
     * to All.
     */
    includeApplications?: string[] | undefined;
    // User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice
    includeUserActions?: string[] | undefined;
}
export interface ConditionalAccessConditionSet {
    // Applications and user actions included in and excluded from the policy. Required.
    applications?: NullableOption<ConditionalAccessApplications> | undefined;
    /**
     * Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients,
     * exchangeActiveSync, easSupported, other. Required.
     */
    clientAppTypes?: ConditionalAccessClientApp[] | undefined;
    // Locations included in and excluded from the policy.
    locations?: NullableOption<ConditionalAccessLocations> | undefined;
    // Platforms included in and excluded from the policy.
    platforms?: NullableOption<ConditionalAccessPlatforms> | undefined;
    /**
     * Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue.
     * Required.
     */
    signInRiskLevels?: RiskLevel[] | undefined;
    /**
     * User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue.
     * Required.
     */
    userRiskLevels?: RiskLevel[] | undefined;
    // Users, groups, and roles included in and excluded from the policy. Required.
    users?: ConditionalAccessUsers | undefined;
}
export interface ConditionalAccessLocations {
    // Location IDs excluded from scope of policy.
    excludeLocations?: string[] | undefined;
    // Location IDs in scope of policy unless explicitly excluded, All, or AllTrusted.
    includeLocations?: string[] | undefined;
}
export interface ConditionalAccessPlatforms {
    // Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue.
    excludePlatforms?: ConditionalAccessDevicePlatform[] | undefined;
    // Possible values are: android, iOS, windows, windowsPhone, macOS, all, unknownFutureValue.
    includePlatforms?: ConditionalAccessDevicePlatform[] | undefined;
}
export interface ConditionalAccessUsers {
    // Group IDs excluded from scope of policy.
    excludeGroups?: string[] | undefined;
    // Role IDs excluded from scope of policy.
    excludeRoles?: string[] | undefined;
    // User IDs excluded from scope of policy and/or GuestsOrExternalUsers.
    excludeUsers?: string[] | undefined;
    // Group IDs in scope of policy unless explicitly excluded, or All.
    includeGroups?: string[] | undefined;
    // Role IDs in scope of policy unless explicitly excluded, or All.
    includeRoles?: string[] | undefined;
    // User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers.
    includeUsers?: string[] | undefined;
}
export interface ConditionalAccessGrantControls {
    /**
     * List of values of built-in controls required by the policy. Possible values: block, mfa, compliantDevice,
     * domainJoinedDevice, approvedApplication, compliantApplication, passwordChange, unknownFutureValue.
     */
    builtInControls?: ConditionalAccessGrantControl[] | undefined;
    /**
     * List of custom controls IDs required by the policy. Learn more about custom controls here:
     * https://docs.microsoft.com/azure/active-directory/conditional-access/controls#custom-controls-preview
     */
    customAuthenticationFactors?: string[] | undefined;
    // Defines the relationship of the grant controls. Possible values: AND, OR.
    operator?: NullableOption<string> | undefined;
    // List of terms of use IDs required by the policy.
    termsOfUse?: string[] | undefined;
}
export interface ConditionalAccessSessionControls {
    /**
     * Session control to enforce application restrictions. Only Exchange Online and Sharepoint Online support this session
     * control.
     */
    applicationEnforcedRestrictions?: NullableOption<ApplicationEnforcedRestrictionsSessionControl> | undefined;
    // Session control to apply cloud app security.
    cloudAppSecurity?: NullableOption<CloudAppSecuritySessionControl> | undefined;
    /**
     * Session control to define whether to persist cookies or not. All apps should be selected for this session control to
     * work correctly.
     */
    persistentBrowser?: NullableOption<PersistentBrowserSessionControl> | undefined;
    // Session control to enforce signin frequency.
    signInFrequency?: NullableOption<SignInFrequencySessionControl> | undefined;
}
export interface PersistentBrowserSessionControl extends ConditionalAccessSessionControl {
    // Possible values are: always, never.
    mode?: NullableOption<PersistentBrowserSessionMode> | undefined;
}
export interface SignInFrequencySessionControl extends ConditionalAccessSessionControl {
    // Possible values are: days, hours.
    type?: NullableOption<SigninFrequencyType> | undefined;
    // The number of days or hours.
    value?: NullableOption<number> | undefined;
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IpRange {}
// tslint:disable-next-line: interface-name
export interface IPv4CidrRange extends IpRange {
    // IPv4 address in CIDR notation
    cidrAddress?: string | undefined;
}
// tslint:disable-next-line: interface-name
export interface IPv6CidrRange extends IpRange {
    // IPv6 address in CIDR notation
    cidrAddress?: string | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface DeviceAndAppManagementAssignmentTarget {}
// tslint:disable-next-line: no-empty-interface
export interface AllDevicesAssignmentTarget extends DeviceAndAppManagementAssignmentTarget {}
// tslint:disable-next-line: no-empty-interface
export interface AllLicensedUsersAssignmentTarget extends DeviceAndAppManagementAssignmentTarget {}
export interface AndroidMinimumOperatingSystem {
    // Version 4.0 or later.
    v4_0?: boolean | undefined;
    // Version 4.0.3 or later.
    v4_0_3?: boolean | undefined;
    // Version 4.1 or later.
    v4_1?: boolean | undefined;
    // Version 4.2 or later.
    v4_2?: boolean | undefined;
    // Version 4.3 or later.
    v4_3?: boolean | undefined;
    // Version 4.4 or later.
    v4_4?: boolean | undefined;
    // Version 5.0 or later.
    v5_0?: boolean | undefined;
    // Version 5.1 or later.
    v5_1?: boolean | undefined;
}
export interface AppConfigurationSettingItem {
    // app configuration key.
    appConfigKey?: string | undefined;
    // app configuration key type. Possible values are: stringType, integerType, realType, booleanType, tokenType.
    appConfigKeyType?: MdmAppConfigKeyType | undefined;
    // app configuration key value.
    appConfigKeyValue?: string | undefined;
}
export interface GroupAssignmentTarget extends DeviceAndAppManagementAssignmentTarget {
    // The group Id that is the target of the assignment.
    groupId?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ExclusionGroupAssignmentTarget extends GroupAssignmentTarget {}
export interface FileEncryptionInfo {
    // The key used to encrypt the file content.
    encryptionKey?: NullableOption<number> | undefined;
    // The file digest prior to encryption.
    fileDigest?: NullableOption<number> | undefined;
    // The file digest algorithm.
    fileDigestAlgorithm?: NullableOption<string> | undefined;
    // The initialization vector used for the encryption algorithm.
    initializationVector?: NullableOption<number> | undefined;
    // The hash of the encrypted file content + IV (content hash).
    mac?: NullableOption<number> | undefined;
    // The key used to get mac.
    macKey?: NullableOption<number> | undefined;
    // The the profile identifier.
    profileIdentifier?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosDeviceType {
    // Whether the app should run on iPads.
    iPad?: boolean | undefined;
    // Whether the app should run on iPhones and iPods.
    iPhoneAndIPod?: boolean | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface MobileAppAssignmentSettings {}
// tslint:disable-next-line: interface-name
export interface IosLobAppAssignmentSettings extends MobileAppAssignmentSettings {
    // The VPN Configuration Id to apply for this app.
    vpnConfigurationId?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosMinimumOperatingSystem {
    // Version 10.0 or later.
    v10_0?: boolean | undefined;
    // Version 11.0 or later.
    v11_0?: boolean | undefined;
    // Version 12.0 or later.
    v12_0?: boolean | undefined;
    // Version 13.0 or later.
    v13_0?: boolean | undefined;
    // Version 8.0 or later.
    v8_0?: boolean | undefined;
    // Version 9.0 or later.
    v9_0?: boolean | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosStoreAppAssignmentSettings extends MobileAppAssignmentSettings {
    // The VPN Configuration Id to apply for this app.
    vpnConfigurationId?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosVppAppAssignmentSettings extends MobileAppAssignmentSettings {
    // Whether or not to use device licensing.
    useDeviceLicensing?: boolean | undefined;
    // The VPN Configuration Id to apply for this app.
    vpnConfigurationId?: NullableOption<string> | undefined;
}
export interface MicrosoftStoreForBusinessAppAssignmentSettings extends MobileAppAssignmentSettings {
    // Whether or not to use device execution context for Microsoft Store for Business mobile app.
    useDeviceContext?: boolean | undefined;
}
export interface MimeContent {
    // Indicates the content mime type.
    type?: NullableOption<string> | undefined;
    // The byte array that contains the actual content.
    value?: NullableOption<number> | undefined;
}
export interface MobileAppInstallTimeSettings {
    // The time at which the app should be installed.
    deadlineDateTime?: NullableOption<string> | undefined;
    // The time at which the app should be available for installation.
    startDateTime?: NullableOption<string> | undefined;
    // Whether the local device time or UTC time should be used when determining the available and deadline times.
    useLocalTime?: boolean | undefined;
}
export interface VppLicensingType {
    // Whether the program supports the device licensing type.
    supportsDeviceLicensing?: boolean | undefined;
    // Whether the program supports the user licensing type.
    supportsUserLicensing?: boolean | undefined;
}
export interface Win32LobAppAssignmentSettings extends MobileAppAssignmentSettings {
    // The install time settings to apply for this app assignment.
    installTimeSettings?: NullableOption<MobileAppInstallTimeSettings> | undefined;
    // The notification status for this app assignment. Possible values are: showAll, showReboot, hideAll.
    notifications?: Win32LobAppNotification | undefined;
    // The reboot settings to apply for this app assignment.
    restartSettings?: NullableOption<Win32LobAppRestartSettings> | undefined;
}
export interface Win32LobAppRestartSettings {
    // The number of minutes before the restart time to display the countdown dialog for pending restarts.
    countdownDisplayBeforeRestartInMinutes?: number | undefined;
    // The number of minutes to wait before restarting the device after an app installation.
    gracePeriodInMinutes?: number | undefined;
    // The number of minutes to snooze the restart notification dialog when the snooze button is selected.
    restartNotificationSnoozeDurationInMinutes?: NullableOption<number> | undefined;
}
export interface Win32LobAppRule {
    // The rule type indicating the purpose of the rule. Possible values are: detection, requirement.
    ruleType?: Win32LobAppRuleType | undefined;
}
export interface Win32LobAppFileSystemRule extends Win32LobAppRule {
    // A value indicating whether to expand environment variables in the 32-bit context on 64-bit systems.
    check32BitOn64System?: boolean | undefined;
    // The file or folder comparison value.
    comparisonValue?: NullableOption<string> | undefined;
    // The file or folder name to look up.
    fileOrFolderName?: NullableOption<string> | undefined;
    /**
     * The file system operation type. Possible values are: notConfigured, exists, modifiedDate, createdDate, version,
     * sizeInMB, doesNotExist.
     */
    operationType?: Win32LobAppFileSystemOperationType | undefined;
    /**
     * The operator for file or folder detection. Possible values are: notConfigured, equal, notEqual, greaterThan,
     * greaterThanOrEqual, lessThan, lessThanOrEqual.
     */
    operator?: Win32LobAppRuleOperator | undefined;
    // The file or folder path to look up.
    path?: NullableOption<string> | undefined;
}
export interface Win32LobAppInstallExperience {
    // Device restart behavior. Possible values are: basedOnReturnCode, allow, suppress, force.
    deviceRestartBehavior?: Win32LobAppRestartBehavior | undefined;
    // Indicates the type of execution context the app runs in. Possible values are: system, user.
    runAsAccount?: RunAsAccountType | undefined;
}
export interface Win32LobAppMsiInformation {
    // The MSI package type. Possible values are: perMachine, perUser, dualPurpose.
    packageType?: Win32LobAppMsiPackageType | undefined;
    // The MSI product code.
    productCode?: NullableOption<string> | undefined;
    // The MSI product name.
    productName?: NullableOption<string> | undefined;
    // The MSI product version.
    productVersion?: NullableOption<string> | undefined;
    // The MSI publisher.
    publisher?: NullableOption<string> | undefined;
    // Whether the MSI app requires the machine to reboot to complete installation.
    requiresReboot?: boolean | undefined;
    // The MSI upgrade code.
    upgradeCode?: NullableOption<string> | undefined;
}
export interface Win32LobAppPowerShellScriptRule extends Win32LobAppRule {
    // The script output comparison value. Do not specify a value if the rule is used for detection.
    comparisonValue?: NullableOption<string> | undefined;
    // The display name for the rule. Do not specify this value if the rule is used for detection.
    displayName?: NullableOption<string> | undefined;
    // A value indicating whether a signature check is enforced.
    enforceSignatureCheck?: boolean | undefined;
    /**
     * The script output comparison operation type. Use NotConfigured (the default value) if the rule is used for detection.
     * Possible values are: notConfigured, string, dateTime, integer, float, version, boolean.
     */
    operationType?: Win32LobAppPowerShellScriptRuleOperationType | undefined;
    /**
     * The script output operator. Use NotConfigured (the default value) if the rule is used for detection. Possible values
     * are: notConfigured, equal, notEqual, greaterThan, greaterThanOrEqual, lessThan, lessThanOrEqual.
     */
    operator?: Win32LobAppRuleOperator | undefined;
    // A value indicating whether the script should run as 32-bit.
    runAs32Bit?: boolean | undefined;
    /**
     * The execution context of the script. Do not specify this value if the rule is used for detection. Script detection
     * rules will run in the same context as the associated app install context. Possible values are: system, user.
     */
    runAsAccount?: NullableOption<RunAsAccountType> | undefined;
    // The base64-encoded script content.
    scriptContent?: NullableOption<string> | undefined;
}
export interface Win32LobAppProductCodeRule extends Win32LobAppRule {
    // The product code of the app.
    productCode?: NullableOption<string> | undefined;
    // The product version comparison value.
    productVersion?: NullableOption<string> | undefined;
    /**
     * The product version comparison operator. Possible values are: notConfigured, equal, notEqual, greaterThan,
     * greaterThanOrEqual, lessThan, lessThanOrEqual.
     */
    productVersionOperator?: Win32LobAppRuleOperator | undefined;
}
export interface Win32LobAppRegistryRule extends Win32LobAppRule {
    // A value indicating whether to search the 32-bit registry on 64-bit systems.
    check32BitOn64System?: boolean | undefined;
    // The registry comparison value.
    comparisonValue?: NullableOption<string> | undefined;
    // The full path of the registry entry containing the value to detect.
    keyPath?: NullableOption<string> | undefined;
    // The registry operation type. Possible values are: notConfigured, exists, doesNotExist, string, integer, version.
    operationType?: Win32LobAppRegistryRuleOperationType | undefined;
    /**
     * The operator for registry detection. Possible values are: notConfigured, equal, notEqual, greaterThan,
     * greaterThanOrEqual, lessThan, lessThanOrEqual.
     */
    operator?: Win32LobAppRuleOperator | undefined;
    // The name of the registry value to detect.
    valueName?: NullableOption<string> | undefined;
}
export interface Win32LobAppReturnCode {
    // Return code.
    returnCode?: number | undefined;
    // The type of return code. Possible values are: failed, success, softReboot, hardReboot, retry.
    type?: Win32LobAppReturnCodeType | undefined;
}
export interface WindowsMinimumOperatingSystem {
    // Windows version 10.0 or later.
    v10_0?: boolean | undefined;
    // Windows version 8.0 or later.
    v8_0?: boolean | undefined;
    // Windows version 8.1 or later.
    v8_1?: boolean | undefined;
}
export interface DeviceManagementSettings {
    // The number of days a device is allowed to go without checking in to remain compliant.
    deviceComplianceCheckinThresholdDays?: number | undefined;
    // Is feature enabled or not for scheduled action for rule.
    isScheduledActionEnabled?: boolean | undefined;
    // Device should be noncompliant when there is no compliance policy targeted when this is true
    secureByDefault?: boolean | undefined;
}
// tslint:disable-next-line: interface-name
export interface IntuneBrand {
    // Email address of the person/organization responsible for IT support.
    contactITEmailAddress?: NullableOption<string> | undefined;
    // Name of the person/organization responsible for IT support.
    contactITName?: NullableOption<string> | undefined;
    // Text comments regarding the person/organization responsible for IT support.
    contactITNotes?: NullableOption<string> | undefined;
    // Phone number of the person/organization responsible for IT support.
    contactITPhoneNumber?: NullableOption<string> | undefined;
    // Logo image displayed in Company Portal apps which have a dark background behind the logo.
    darkBackgroundLogo?: NullableOption<MimeContent> | undefined;
    // Company/organization name that is displayed to end users.
    displayName?: NullableOption<string> | undefined;
    // Logo image displayed in Company Portal apps which have a light background behind the logo.
    lightBackgroundLogo?: NullableOption<MimeContent> | undefined;
    // Display name of the company/organization’s IT helpdesk site.
    onlineSupportSiteName?: NullableOption<string> | undefined;
    // URL to the company/organization’s IT helpdesk site.
    onlineSupportSiteUrl?: NullableOption<string> | undefined;
    // URL to the company/organization’s privacy policy.
    privacyUrl?: NullableOption<string> | undefined;
    // Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
    showDisplayNameNextToLogo?: boolean | undefined;
    // Boolean that represents whether the administrator-supplied logo images are shown or not shown.
    showLogo?: boolean | undefined;
    // Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
    showNameNextToLogo?: boolean | undefined;
    // Primary theme color used in the Company Portal applications and web portal.
    themeColor?: NullableOption<RgbColor> | undefined;
}
export interface AppListItem {
    // The application or bundle identifier of the application
    appId?: NullableOption<string> | undefined;
    // The Store URL of the application
    appStoreUrl?: NullableOption<string> | undefined;
    // The application name
    name?: string | undefined;
    // The publisher of the application
    publisher?: NullableOption<string> | undefined;
}
export interface BitLockerRemovableDrivePolicy {
    /**
     * This policy setting determines whether BitLocker protection is required for removable data drives to be writable on a
     * computer.
     */
    blockCrossOrganizationWriteAccess?: boolean | undefined;
    // Select the encryption method for removable drives. Possible values are: aesCbc128, aesCbc256, xtsAes128, xtsAes256.
    encryptionMethod?: NullableOption<BitLockerEncryptionMethod> | undefined;
    /**
     * Indicates whether to block write access to devices configured in another organization. If
     * requireEncryptionForWriteAccess is false, this value does not affect.
     */
    requireEncryptionForWriteAccess?: boolean | undefined;
}
export interface DefenderDetectedMalwareActions {
    /**
     * Indicates a Defender action to take for high severity Malware threat detected. Possible values are: deviceDefault,
     * clean, quarantine, remove, allow, userDefined, block.
     */
    highSeverity?: DefenderThreatAction | undefined;
    /**
     * Indicates a Defender action to take for low severity Malware threat detected. Possible values are: deviceDefault,
     * clean, quarantine, remove, allow, userDefined, block.
     */
    lowSeverity?: DefenderThreatAction | undefined;
    /**
     * Indicates a Defender action to take for moderate severity Malware threat detected. Possible values are: deviceDefault,
     * clean, quarantine, remove, allow, userDefined, block.
     */
    moderateSeverity?: DefenderThreatAction | undefined;
    /**
     * Indicates a Defender action to take for severe severity Malware threat detected. Possible values are: deviceDefault,
     * clean, quarantine, remove, allow, userDefined, block.
     */
    severeSeverity?: DefenderThreatAction | undefined;
}
export interface DeviceCompliancePolicySettingState {
    // Current value of setting on device
    currentValue?: NullableOption<string> | undefined;
    // Error code for the setting
    errorCode?: number | undefined;
    // Error description
    errorDescription?: NullableOption<string> | undefined;
    // Name of setting instance that is being reported.
    instanceDisplayName?: NullableOption<string> | undefined;
    // The setting that is being reported
    setting?: NullableOption<string> | undefined;
    // Localized/user friendly setting name that is being reported
    settingName?: NullableOption<string> | undefined;
    // Contributing policies
    sources?: NullableOption<SettingSource[]> | undefined;
    /**
     * The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant,
     * error, conflict, notAssigned.
     */
    state?: ComplianceStatus | undefined;
    // UserEmail
    userEmail?: NullableOption<string> | undefined;
    // UserId
    userId?: NullableOption<string> | undefined;
    // UserName
    userName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface SettingSource {
    // Not yet documented
    displayName?: NullableOption<string> | undefined;
    // Not yet documented
    id?: NullableOption<string> | undefined;
}
export interface DeviceConfigurationSettingState {
    // Current value of setting on device
    currentValue?: NullableOption<string> | undefined;
    // Error code for the setting
    errorCode?: number | undefined;
    // Error description
    errorDescription?: NullableOption<string> | undefined;
    // Name of setting instance that is being reported.
    instanceDisplayName?: NullableOption<string> | undefined;
    // The setting that is being reported
    setting?: NullableOption<string> | undefined;
    // Localized/user friendly setting name that is being reported
    settingName?: NullableOption<string> | undefined;
    // Contributing policies
    sources?: NullableOption<SettingSource[]> | undefined;
    /**
     * The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant,
     * error, conflict, notAssigned.
     */
    state?: ComplianceStatus | undefined;
    // UserEmail
    userEmail?: NullableOption<string> | undefined;
    // UserId
    userId?: NullableOption<string> | undefined;
    // UserName
    userName?: NullableOption<string> | undefined;
    // UserPrincipalName.
    userPrincipalName?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface EdgeSearchEngineBase {}
export interface EdgeSearchEngine extends EdgeSearchEngineBase {
    /**
     * Allows IT admins to set a predefined default search engine for MDM-Controlled devices. Possible values are: default,
     * bing.
     */
    edgeSearchEngineType?: EdgeSearchEngineType | undefined;
}
export interface EdgeSearchEngineCustom extends EdgeSearchEngineBase {
    /**
     * Points to a https link containing the OpenSearch xml file that contains, at minimum, the short name and the URL to the
     * search Engine.
     */
    edgeSearchEngineOpenSearchXmlUrl?: string | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenItem {
    // Name of the app
    displayName?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenApp extends IosHomeScreenItem {
    // BundleID of the app if isWebClip is false or the URL of a web clip if isWebClip is true.
    bundleID?: string | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenFolder extends IosHomeScreenItem {
    /**
     * Pages of Home Screen Layout Icons which must be applications or web clips. This collection can contain a maximum of 500
     * elements.
     */
    pages?: IosHomeScreenFolderPage[] | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenFolderPage {
    /**
     * A list of apps and web clips to appear on a page within a folder. This collection can contain a maximum of 500
     * elements.
     */
    apps?: IosHomeScreenApp[] | undefined;
    // Name of the folder page
    displayName?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenPage {
    // Name of the page
    displayName?: NullableOption<string> | undefined;
    // A list of apps, folders, and web clips to appear on a page. This collection can contain a maximum of 500 elements.
    icons?: IosHomeScreenItem[] | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosNetworkUsageRule {
    // If set to true, corresponding managed apps will not be allowed to use cellular data at any time.
    cellularDataBlocked?: boolean | undefined;
    // If set to true, corresponding managed apps will not be allowed to use cellular data when roaming.
    cellularDataBlockWhenRoaming?: boolean | undefined;
    /**
     * Information about the managed apps that this rule is going to apply to. This collection can contain a maximum of 500
     * elements.
     */
    managedApps?: NullableOption<AppListItem[]> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosNotificationSettings {
    // Indicates the type of alert for notifications for this app. Possible values are: deviceDefault, banner, modal, none.
    alertType?: IosNotificationAlertType | undefined;
    // Application name to be associated with the bundleID.
    appName?: NullableOption<string> | undefined;
    // Indicates whether badges are allowed for this app.
    badgesEnabled?: NullableOption<boolean> | undefined;
    // Bundle id of app to which to apply these notification settings.
    bundleID?: string | undefined;
    // Indicates whether notifications are allowed for this app.
    enabled?: NullableOption<boolean> | undefined;
    // Publisher to be associated with the bundleID.
    publisher?: NullableOption<string> | undefined;
    // Indicates whether notifications can be shown in notification center.
    showInNotificationCenter?: NullableOption<boolean> | undefined;
    // Indicates whether notifications can be shown on the lock screen.
    showOnLockScreen?: NullableOption<boolean> | undefined;
    // Indicates whether sounds are allowed for this app.
    soundsEnabled?: NullableOption<boolean> | undefined;
}
export interface MediaContentRatingAustralia {
    /**
     * Movies rating selected for Australia. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature,
     * agesAbove15, agesAbove18.
     */
    movieRating?: RatingAustraliaMoviesType | undefined;
    /**
     * TV rating selected for Australia. Possible values are: allAllowed, allBlocked, preschoolers, children, general,
     * parentalGuidance, mature, agesAbove15, agesAbove15AdultViolence.
     */
    tvRating?: RatingAustraliaTelevisionType | undefined;
}
export interface MediaContentRatingCanada {
    /**
     * Movies rating selected for Canada. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove14,
     * agesAbove18, restricted.
     */
    movieRating?: RatingCanadaMoviesType | undefined;
    /**
     * TV rating selected for Canada. Possible values are: allAllowed, allBlocked, children, childrenAbove8, general,
     * parentalGuidance, agesAbove14, agesAbove18.
     */
    tvRating?: RatingCanadaTelevisionType | undefined;
}
export interface MediaContentRatingFrance {
    /**
     * Movies rating selected for France. Possible values are: allAllowed, allBlocked, agesAbove10, agesAbove12, agesAbove16,
     * agesAbove18.
     */
    movieRating?: RatingFranceMoviesType | undefined;
    /**
     * TV rating selected for France. Possible values are: allAllowed, allBlocked, agesAbove10, agesAbove12, agesAbove16,
     * agesAbove18.
     */
    tvRating?: RatingFranceTelevisionType | undefined;
}
export interface MediaContentRatingGermany {
    /**
     * Movies rating selected for Germany. Possible values are: allAllowed, allBlocked, general, agesAbove6, agesAbove12,
     * agesAbove16, adults.
     */
    movieRating?: RatingGermanyMoviesType | undefined;
    /**
     * TV rating selected for Germany. Possible values are: allAllowed, allBlocked, general, agesAbove6, agesAbove12,
     * agesAbove16, adults.
     */
    tvRating?: RatingGermanyTelevisionType | undefined;
}
export interface MediaContentRatingIreland {
    /**
     * Movies rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, parentalGuidance,
     * agesAbove12, agesAbove15, agesAbove16, adults.
     */
    movieRating?: RatingIrelandMoviesType | undefined;
    /**
     * TV rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, children, youngAdults,
     * parentalSupervision, mature.
     */
    tvRating?: RatingIrelandTelevisionType | undefined;
}
export interface MediaContentRatingJapan {
    /**
     * Movies rating selected for Japan. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove15,
     * agesAbove18.
     */
    movieRating?: RatingJapanMoviesType | undefined;
    // TV rating selected for Japan. Possible values are: allAllowed, allBlocked, explicitAllowed.
    tvRating?: RatingJapanTelevisionType | undefined;
}
export interface MediaContentRatingNewZealand {
    /**
     * Movies rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature,
     * agesAbove13, agesAbove15, agesAbove16, agesAbove18, restricted, agesAbove16Restricted.
     */
    movieRating?: RatingNewZealandMoviesType | undefined;
    // TV rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, adults.
    tvRating?: RatingNewZealandTelevisionType | undefined;
}
export interface MediaContentRatingUnitedKingdom {
    /**
     * Movies rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, general, universalChildren,
     * parentalGuidance, agesAbove12Video, agesAbove12Cinema, agesAbove15, adults.
     */
    movieRating?: RatingUnitedKingdomMoviesType | undefined;
    // TV rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, caution.
    tvRating?: RatingUnitedKingdomTelevisionType | undefined;
}
export interface MediaContentRatingUnitedStates {
    /**
     * Movies rating selected for United States. Possible values are: allAllowed, allBlocked, general, parentalGuidance,
     * parentalGuidance13, restricted, adults.
     */
    movieRating?: RatingUnitedStatesMoviesType | undefined;
    /**
     * TV rating selected for United States. Possible values are: allAllowed, allBlocked, childrenAll, childrenAbove7,
     * general, parentalGuidance, childrenAbove14, adults.
     */
    tvRating?: RatingUnitedStatesTelevisionType | undefined;
}
export interface OmaSetting {
    // Description.
    description?: NullableOption<string> | undefined;
    // Display Name.
    displayName?: string | undefined;
    // OMA.
    omaUri?: string | undefined;
}
export interface OmaSettingBase64 extends OmaSetting {
    // File name associated with the Value property (.cer
    fileName?: NullableOption<string> | undefined;
    // Value. (Base64 encoded string)
    value?: string | undefined;
}
export interface OmaSettingBoolean extends OmaSetting {
    // Value.
    value?: boolean | undefined;
}
export interface OmaSettingDateTime extends OmaSetting {
    // Value.
    value?: string | undefined;
}
export interface OmaSettingFloatingPoint extends OmaSetting {
    // Value.
    value?: number | undefined;
}
export interface OmaSettingInteger extends OmaSetting {
    // Value.
    value?: number | undefined;
}
export interface OmaSettingString extends OmaSetting {
    // Value.
    value?: string | undefined;
}
export interface OmaSettingStringXml extends OmaSetting {
    // File name associated with the Value property (.xml).
    fileName?: NullableOption<string> | undefined;
    // Value. (UTF8 encoded byte array)
    value?: number | undefined;
}
export interface Report {
    // Report content; details vary by report type.
    content?: NullableOption<any> | undefined;
}
export interface SharedPCAccountManagerPolicy {
    /**
     * Configures when accounts are deleted. Possible values are: immediate, diskSpaceThreshold,
     * diskSpaceThresholdOrInactiveThreshold.
     */
    accountDeletionPolicy?: SharedPCAccountDeletionPolicyType | undefined;
    /**
     * Sets the percentage of available disk space a PC should have before it stops deleting cached shared PC accounts. Only
     * applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to
     * 100
     */
    cacheAccountsAboveDiskFreePercentage?: NullableOption<number> | undefined;
    /**
     * Specifies when the accounts will start being deleted when they have not been logged on during the specified period,
     * given as number of days. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or
     * DiskSpaceThresholdOrInactiveThreshold.
     */
    inactiveThresholdDays?: NullableOption<number> | undefined;
    /**
     * Sets the percentage of disk space remaining on a PC before cached accounts will be deleted to free disk space. Accounts
     * that have been inactive the longest will be deleted first. Only applies when AccountDeletionPolicy is
     * DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100
     */
    removeAccountsBelowDiskFreePercentage?: NullableOption<number> | undefined;
}
export interface Windows10NetworkProxyServer {
    // Address to the proxy server. Specify an address in the format [':']
    address?: string | undefined;
    /**
     * Addresses that should not use the proxy server. The system will not use the proxy server for addresses beginning with
     * what is specified in this node.
     */
    exceptions?: NullableOption<string[]> | undefined;
    // Specifies whether the proxy server should be used for local (intranet) addresses.
    useForLocalAddresses?: boolean | undefined;
}
export interface WindowsFirewallNetworkProfile {
    /**
     * Configures the firewall to merge authorized application rules from group policy with those from local store instead of
     * ignoring the local store rules. When AuthorizedApplicationRulesFromGroupPolicyNotMerged and
     * AuthorizedApplicationRulesFromGroupPolicyMerged are both true, AuthorizedApplicationRulesFromGroupPolicyMerged takes
     * priority.
     */
    authorizedApplicationRulesFromGroupPolicyMerged?: boolean | undefined;
    /**
     * Configures the firewall to merge connection security rules from group policy with those from local store instead of
     * ignoring the local store rules. When ConnectionSecurityRulesFromGroupPolicyNotMerged and
     * ConnectionSecurityRulesFromGroupPolicyMerged are both true, ConnectionSecurityRulesFromGroupPolicyMerged takes
     * priority.
     */
    connectionSecurityRulesFromGroupPolicyMerged?: boolean | undefined;
    /**
     * Configures the host device to allow or block the firewall and advanced security enforcement for the network profile.
     * Possible values are: notConfigured, blocked, allowed.
     */
    firewallEnabled?: StateManagementSetting | undefined;
    /**
     * Configures the firewall to merge global port rules from group policy with those from local store instead of ignoring
     * the local store rules. When GlobalPortRulesFromGroupPolicyNotMerged and GlobalPortRulesFromGroupPolicyMerged are both
     * true, GlobalPortRulesFromGroupPolicyMerged takes priority.
     */
    globalPortRulesFromGroupPolicyMerged?: boolean | undefined;
    /**
     * Configures the firewall to block all incoming connections by default. When InboundConnectionsRequired and
     * InboundConnectionsBlocked are both true, InboundConnectionsBlocked takes priority.
     */
    inboundConnectionsBlocked?: boolean | undefined;
    /**
     * Prevents the firewall from displaying notifications when an application is blocked from listening on a port. When
     * InboundNotificationsRequired and InboundNotificationsBlocked are both true, InboundNotificationsBlocked takes priority.
     */
    inboundNotificationsBlocked?: boolean | undefined;
    /**
     * Configures the firewall to block all incoming traffic regardless of other policy settings. When IncomingTrafficRequired
     * and IncomingTrafficBlocked are both true, IncomingTrafficBlocked takes priority.
     */
    incomingTrafficBlocked?: boolean | undefined;
    /**
     * Configures the firewall to block all outgoing connections by default. When OutboundConnectionsRequired and
     * OutboundConnectionsBlocked are both true, OutboundConnectionsBlocked takes priority. This setting will get applied to
     * Windows releases version 1809 and above.
     */
    outboundConnectionsBlocked?: boolean | undefined;
    /**
     * Configures the firewall to merge Firewall Rule policies from group policy with those from local store instead of
     * ignoring the local store rules. When PolicyRulesFromGroupPolicyNotMerged and PolicyRulesFromGroupPolicyMerged are both
     * true, PolicyRulesFromGroupPolicyMerged takes priority.
     */
    policyRulesFromGroupPolicyMerged?: boolean | undefined;
    /**
     * Configures the firewall to allow the host computer to respond to unsolicited network traffic of that traffic is secured
     * by IPSec even when stealthModeBlocked is set to true. When SecuredPacketExemptionBlocked and
     * SecuredPacketExemptionAllowed are both true, SecuredPacketExemptionAllowed takes priority.
     */
    securedPacketExemptionAllowed?: boolean | undefined;
    /**
     * Prevent the server from operating in stealth mode. When StealthModeRequired and StealthModeBlocked are both true,
     * StealthModeBlocked takes priority.
     */
    stealthModeBlocked?: boolean | undefined;
    /**
     * Configures the firewall to block unicast responses to multicast broadcast traffic. When
     * UnicastResponsesToMulticastBroadcastsRequired and UnicastResponsesToMulticastBroadcastsBlocked are both true,
     * UnicastResponsesToMulticastBroadcastsBlocked takes priority.
     */
    unicastResponsesToMulticastBroadcastsBlocked?: boolean | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface WindowsUpdateInstallScheduleType {}
export interface WindowsUpdateActiveHoursInstall extends WindowsUpdateInstallScheduleType {
    // Active Hours End
    activeHoursEnd?: string | undefined;
    // Active Hours Start
    activeHoursStart?: string | undefined;
}
export interface WindowsUpdateScheduledInstall extends WindowsUpdateInstallScheduleType {
    /**
     * Scheduled Install Day in week. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday,
     * thursday, friday, saturday, noScheduledScan.
     */
    scheduledInstallDay?: WeeklySchedule | undefined;
    // Scheduled Install Time during day
    scheduledInstallTime?: string | undefined;
}
export interface ConfigurationManagerClientEnabledFeatures {
    // Whether compliance policy is managed by Intune
    compliancePolicy?: boolean | undefined;
    // Whether device configuration is managed by Intune
    deviceConfiguration?: boolean | undefined;
    // Whether inventory is managed by Intune
    inventory?: boolean | undefined;
    // Whether modern application is managed by Intune
    modernApps?: boolean | undefined;
    // Whether resource access is managed by Intune
    resourceAccess?: boolean | undefined;
    // Whether Windows Update for Business is managed by Intune
    windowsUpdateForBusiness?: boolean | undefined;
}
export interface DeviceActionResult {
    // Action name
    actionName?: NullableOption<string> | undefined;
    // State of the action. Possible values are: none, pending, canceled, active, done, failed, notSupported.
    actionState?: ActionState | undefined;
    // Time the action state was last updated
    lastUpdatedDateTime?: string | undefined;
    // Time the action was initiated
    startDateTime?: string | undefined;
}
export interface DeviceHealthAttestationState {
    /**
     * TWhen an Attestation Identity Key (AIK) is present on a device, it indicates that the device has an endorsement key
     * (EK) certificate.
     */
    attestationIdentityKey?: NullableOption<string> | undefined;
    // On or Off of BitLocker Drive Encryption
    bitLockerStatus?: NullableOption<string> | undefined;
    // The security version number of the Boot Application
    bootAppSecurityVersion?: NullableOption<string> | undefined;
    // When bootDebugging is enabled, the device is used in development and testing
    bootDebugging?: NullableOption<string> | undefined;
    // The security version number of the Boot Application
    bootManagerSecurityVersion?: NullableOption<string> | undefined;
    // The version of the Boot Manager
    bootManagerVersion?: NullableOption<string> | undefined;
    // The Boot Revision List that was loaded during initial boot on the attested device
    bootRevisionListInfo?: NullableOption<string> | undefined;
    // When code integrity is enabled, code execution is restricted to integrity verified code
    codeIntegrity?: NullableOption<string> | undefined;
    // The version of the Boot Manager
    codeIntegrityCheckVersion?: NullableOption<string> | undefined;
    // The Code Integrity policy that is controlling the security of the boot environment
    codeIntegrityPolicy?: NullableOption<string> | undefined;
    // The DHA report version. (Namespace version)
    contentNamespaceUrl?: NullableOption<string> | undefined;
    // The HealthAttestation state schema version
    contentVersion?: NullableOption<string> | undefined;
    // DEP Policy defines a set of hardware and software technologies that perform additional checks on memory
    dataExcutionPolicy?: NullableOption<string> | undefined;
    // The DHA report version. (Namespace version)
    deviceHealthAttestationStatus?: NullableOption<string> | undefined;
    // ELAM provides protection for the computers in your network when they start up
    earlyLaunchAntiMalwareDriverProtection?: NullableOption<string> | undefined;
    // This attribute indicates if DHA is supported for the device
    healthAttestationSupportedStatus?: NullableOption<string> | undefined;
    // This attribute appears if DHA-Service detects an integrity issue
    healthStatusMismatchInfo?: NullableOption<string> | undefined;
    // The DateTime when device was evaluated or issued to MDM
    issuedDateTime?: string | undefined;
    // The Timestamp of the last update.
    lastUpdateDateTime?: NullableOption<string> | undefined;
    // When operatingSystemKernelDebugging is enabled, the device is used in development and testing
    operatingSystemKernelDebugging?: NullableOption<string> | undefined;
    // The Operating System Revision List that was loaded during initial boot on the attested device
    operatingSystemRevListInfo?: NullableOption<string> | undefined;
    // The measurement that is captured in PCR[0]
    pcr0?: NullableOption<string> | undefined;
    // Informational attribute that identifies the HASH algorithm that was used by TPM
    pcrHashAlgorithm?: NullableOption<string> | undefined;
    // The number of times a PC device has hibernated or resumed
    resetCount?: number | undefined;
    // The number of times a PC device has rebooted
    restartCount?: number | undefined;
    // Safe mode is a troubleshooting option for Windows that starts your computer in a limited state
    safeMode?: NullableOption<string> | undefined;
    // When Secure Boot is enabled, the core components must have the correct cryptographic signatures
    secureBoot?: NullableOption<string> | undefined;
    // Fingerprint of the Custom Secure Boot Configuration Policy
    secureBootConfigurationPolicyFingerPrint?: NullableOption<string> | undefined;
    // When test signing is allowed, the device does not enforce signature validation during boot
    testSigning?: NullableOption<string> | undefined;
    // The security version number of the Boot Application
    tpmVersion?: NullableOption<string> | undefined;
    // VSM is a container that protects high value assets from a compromised kernel
    virtualSecureMode?: NullableOption<string> | undefined;
    // Operating system running with limited services that is used to prepare a computer for Windows
    windowsPE?: NullableOption<string> | undefined;
}
export interface ComplianceManagementPartnerAssignment {
    // Group assignment target.
    target?: NullableOption<DeviceAndAppManagementAssignmentTarget> | undefined;
}
export interface DeviceEnrollmentPlatformRestriction {
    // Max OS version supported
    osMaximumVersion?: NullableOption<string> | undefined;
    // Min OS version supported
    osMinimumVersion?: NullableOption<string> | undefined;
    // Block personally owned devices from enrolling
    personalDeviceEnrollmentBlocked?: boolean | undefined;
    // Block the platform from enrolling
    platformBlocked?: boolean | undefined;
}
export interface RgbColor {
    // Blue value
    b?: number | undefined;
    // Green value
    g?: number | undefined;
    // Red value
    r?: number | undefined;
}
export interface DeleteUserFromSharedAppleDeviceActionResult extends DeviceActionResult {
    // User principal name of the user to be deleted
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface DeviceExchangeAccessStateSummary {
    // Total count of devices with Exchange Access State: Allowed.
    allowedDeviceCount?: number | undefined;
    // Total count of devices with Exchange Access State: Blocked.
    blockedDeviceCount?: number | undefined;
    // Total count of devices with Exchange Access State: Quarantined.
    quarantinedDeviceCount?: number | undefined;
    // Total count of devices for which no Exchange Access State could be found.
    unavailableDeviceCount?: number | undefined;
    // Total count of devices with Exchange Access State: Unknown.
    unknownDeviceCount?: number | undefined;
}
export interface DeviceGeoLocation {
    // Altitude, given in meters above sea level
    altitude?: number | undefined;
    // Heading in degrees from true north
    heading?: number | undefined;
    // Accuracy of longitude and latitude in meters
    horizontalAccuracy?: number | undefined;
    // Time at which location was recorded, relative to UTC
    lastCollectedDateTime?: string | undefined;
    // Latitude coordinate of the device's location
    latitude?: number | undefined;
    // Longitude coordinate of the device's location
    longitude?: number | undefined;
    // Speed the device is traveling in meters per second
    speed?: number | undefined;
    // Accuracy of altitude in meters
    verticalAccuracy?: number | undefined;
}
export interface DeviceOperatingSystemSummary {
    // Number of android device count.
    androidCount?: number | undefined;
    // Number of iOS device count.
    iosCount?: number | undefined;
    // Number of Mac OS X device count.
    macOSCount?: number | undefined;
    // Number of unknown device count.
    unknownCount?: number | undefined;
    // Number of Windows device count.
    windowsCount?: number | undefined;
    // Number of Windows mobile device count.
    windowsMobileCount?: number | undefined;
}
export interface LocateDeviceActionResult extends DeviceActionResult {
    // device location
    deviceLocation?: NullableOption<DeviceGeoLocation> | undefined;
}
export interface RemoteLockActionResult extends DeviceActionResult {
    // Pin to unlock the client
    unlockPin?: NullableOption<string> | undefined;
}
export interface ResetPasscodeActionResult extends DeviceActionResult {
    // Newly generated passcode for the device
    passcode?: NullableOption<string> | undefined;
}
export interface UpdateWindowsDeviceAccountActionParameter {
    // Not yet documented
    calendarSyncEnabled?: NullableOption<boolean> | undefined;
    // Not yet documented
    deviceAccount?: NullableOption<WindowsDeviceAccount> | undefined;
    // Not yet documented
    deviceAccountEmail?: NullableOption<string> | undefined;
    // Not yet documented
    exchangeServer?: NullableOption<string> | undefined;
    // Not yet documented
    passwordRotationEnabled?: NullableOption<boolean> | undefined;
    // Not yet documented
    sessionInitiationProtocalAddress?: NullableOption<string> | undefined;
}
export interface WindowsDeviceAccount {
    // Not yet documented
    password?: NullableOption<string> | undefined;
}
export interface WindowsDefenderScanActionResult extends DeviceActionResult {
    // Scan type either full scan or quick scan
    scanType?: NullableOption<string> | undefined;
}
export interface WindowsDeviceADAccount extends WindowsDeviceAccount {
    // Not yet documented
    domainName?: NullableOption<string> | undefined;
    // Not yet documented
    userName?: NullableOption<string> | undefined;
}
export interface WindowsDeviceAzureADAccount extends WindowsDeviceAccount {
    // Not yet documented
    userPrincipalName?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface ImportedWindowsAutopilotDeviceIdentityState {
    // Device error code reported by Device Directory Service(DDS).
    deviceErrorCode?: number | undefined;
    // Device error name reported by Device Directory Service(DDS).
    deviceErrorName?: NullableOption<string> | undefined;
    /**
     * Device status reported by Device Directory Service(DDS). Possible values are: unknown, pending, partial, complete,
     * error.
     */
    deviceImportStatus?: ImportedWindowsAutopilotDeviceIdentityImportStatus | undefined;
    // Device Registration ID for successfully added device reported by Device Directory Service(DDS).
    deviceRegistrationId?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface MobileAppIdentifier {}
export interface AndroidMobileAppIdentifier extends MobileAppIdentifier {
    // The identifier for an app, as specified in the play store.
    packageId?: string | undefined;
}
// tslint:disable-next-line: interface-name
export interface IosMobileAppIdentifier extends MobileAppIdentifier {
    // The identifier for an app, as specified in the app store.
    bundleId?: string | undefined;
}
// tslint:disable-next-line: interface-name
export interface IPv4Range extends IpRange {
    // Lower address.
    lowerAddress?: string | undefined;
    // Upper address.
    upperAddress?: string | undefined;
}
// tslint:disable-next-line: interface-name
export interface IPv6Range extends IpRange {
    // Lower address.
    lowerAddress?: string | undefined;
    // Upper address.
    upperAddress?: string | undefined;
}
export interface KeyValuePair {
    /**
     * Name for this key-value pair. Possible names are: AdditionalWSFedEndpointCheckResult,
     * AllowedAuthenticationClassReferencesCheckResult, AlwaysRequireAuthenticationCheckResult, AutoUpdateEnabledCheckResult,
     * ClaimsProviderNameCheckResult, EncryptClaimsCheckResult, EncryptedNameIdRequiredCheckResult,
     * MonitoringEnabledCheckResult,NotBeforeSkewCheckResult, RequestMFAFromClaimsProvidersCheckResult,
     * SignedSamlRequestsRequiredCheckResult, AdditionalAuthenticationRulesCheckResult, TokenLifetimeCheckResult,
     * DelegationAuthorizationRulesCheckResult, IssuanceAuthorizationRulesCheckResult, IssuanceTransformRulesCheckResult.
     */
    name?: string | undefined;
    /**
     * Value for this key-value pair. Possible result values are 0 (when the validation check passed), 1 (when the validation
     * check failed), or 2 (when the validation check is a warning).
     */
    value?: NullableOption<string> | undefined;
}
export interface ManagedAppDiagnosticStatus {
    // Instruction on how to mitigate a failed validation
    mitigationInstruction?: NullableOption<string> | undefined;
    // The state of the operation
    state?: NullableOption<string> | undefined;
    // The validation friendly name
    validationName?: NullableOption<string> | undefined;
}
export interface ManagedAppPolicyDeploymentSummaryPerApp {
    // Number of users the policy is applied.
    configurationAppliedUserCount?: number | undefined;
    // Deployment of an app.
    mobileAppIdentifier?: NullableOption<MobileAppIdentifier> | undefined;
}
export interface ProxiedDomain {
    // The IP address or FQDN
    ipAddressOrFQDN?: string | undefined;
    // Proxy IP or FQDN
    proxy?: NullableOption<string> | undefined;
}
export interface WindowsInformationProtectionApp {
    // If true, app is denied protection or exemption.
    denied?: boolean | undefined;
    // The app's description.
    description?: NullableOption<string> | undefined;
    // App display name.
    displayName?: string | undefined;
    // The product name.
    productName?: NullableOption<string> | undefined;
    // The publisher name
    publisherName?: NullableOption<string> | undefined;
}
export interface WindowsInformationProtectionDataRecoveryCertificate {
    // Data recovery Certificate
    certificate?: NullableOption<number> | undefined;
    // Data recovery Certificate description
    description?: NullableOption<string> | undefined;
    // Data recovery Certificate expiration datetime
    expirationDateTime?: string | undefined;
    // Data recovery Certificate subject name
    subjectName?: NullableOption<string> | undefined;
}
export interface WindowsInformationProtectionDesktopApp extends WindowsInformationProtectionApp {
    // The binary name.
    binaryName?: string | undefined;
    // The high binary version.
    binaryVersionHigh?: NullableOption<string> | undefined;
    // The lower binary version.
    binaryVersionLow?: NullableOption<string> | undefined;
}
export interface WindowsInformationProtectionIPRangeCollection {
    // Display name
    displayName?: string | undefined;
    // Collection of ip ranges
    ranges?: IpRange[] | undefined;
}
export interface WindowsInformationProtectionProxiedDomainCollection {
    // Display name
    displayName?: string | undefined;
    // Collection of proxied domains
    proxiedDomains?: ProxiedDomain[] | undefined;
}
export interface WindowsInformationProtectionResourceCollection {
    // Display name
    displayName?: string | undefined;
    // Collection of resources
    resources?: NullableOption<string[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface WindowsInformationProtectionStoreApp extends WindowsInformationProtectionApp {}
export interface ResourceAction {
    // Allowed Actions
    allowedResourceActions?: NullableOption<string[]> | undefined;
    // Not Allowed Actions.
    notAllowedResourceActions?: NullableOption<string[]> | undefined;
}
export interface RolePermission {
    // Resource Actions each containing a set of allowed and not allowed permissions.
    resourceActions?: NullableOption<ResourceAction[]> | undefined;
}
export interface SearchHit {
    // The name of the content source which the externalItem is part of .
    contentSource?: NullableOption<string> | undefined;
    // The internal identifier for the item.
    hitId?: NullableOption<string> | undefined;
    // The rank or the order of the result.
    rank?: NullableOption<number> | undefined;
    // A summary of the result, if a summary is available.
    summary?: NullableOption<string> | undefined;
    resource?: NullableOption<Entity> | undefined;
}
export interface SearchHitsContainer {
    // A collection of the search results.
    hits?: NullableOption<SearchHit[]> | undefined;
    /**
     * Provides information if more results are available. Based on this information, you can adjust the from and size
     * properties of the searchRequest accordingly.
     */
    moreResultsAvailable?: NullableOption<boolean> | undefined;
    /**
     * The total number of results. Note this is not the number of results on the page, but the total number of results
     * satisfying the query.
     */
    total?: NullableOption<number> | undefined;
}
export interface SearchQuery {
    // The search query containing the search terms. Required.
    queryString?: string | undefined;
}
export interface SearchRequest {
    /**
     * Contains the connection to be targeted. Respects the following format : /external/connections/connectionid where
     * connectionid is the ConnectionId defined in the Connectors Administration. Note: contentSource is only applicable when
     * entityType=externalItem. Optional.
     */
    contentSources?: NullableOption<string[]> | undefined;
    /**
     * This triggers hybrid sort for messages: the first 3 messages are the most relevant. This property is only applicable to
     * entityType=message. Optional.
     */
    enableTopResults?: NullableOption<boolean> | undefined;
    /**
     * One or more types of resources expected in the response. Possible values are: list, site, listItem, message, event,
     * drive, driveItem, externalItem. See known limitations for those combinations of two or more entity types that are
     * supported in the same search request. Required.
     */
    entityTypes?: NullableOption<EntityType[]> | undefined;
    /**
     * Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the
     * fields returned by default otherwise, including additional fields such as custom managed properties from SharePoint and
     * OneDrive, or custom fields in externalItem from content that Microsoft Graph connectors bring in. The fields property
     * can be using the semantic labels applied to properties. For example, if a property is label as title, you can retrieve
     * it using the following syntax : label_title.Optional.
     */
    fields?: NullableOption<string[]> | undefined;
    // Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
    from?: number | undefined;
    // Contains the query terms. Required.
    query?: SearchQuery | undefined;
    // The size of the page to be retrieved. Optional.
    size?: number | undefined;
}
export interface SearchResponse {
    // A collection of search results.
    hitsContainers?: NullableOption<SearchHitsContainer[]> | undefined;
    // Contains the search terms sent in the initial search query.
    searchTerms?: NullableOption<string[]> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface PlannerAppliedCategories {}
export interface PlannerAssignment {
    // The identity of the user that performed the assignment of the task, i.e. the assignor.
    assignedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * The time at which the task was assigned. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    assignedDateTime?: NullableOption<string> | undefined;
    // Hint used to order assignees in a task. The format is defined as outlined here.
    orderHint?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface PlannerAssignments {}
export interface PlannerCategoryDescriptions {
    // The label associated with Category 1
    category1?: NullableOption<string> | undefined;
    // The label associated with Category 2
    category2?: NullableOption<string> | undefined;
    // The label associated with Category 3
    category3?: NullableOption<string> | undefined;
    // The label associated with Category 4
    category4?: NullableOption<string> | undefined;
    // The label associated with Category 5
    category5?: NullableOption<string> | undefined;
    // The label associated with Category 6
    category6?: NullableOption<string> | undefined;
}
export interface PlannerChecklistItem {
    // Value is true if the item is checked and false otherwise.
    isChecked?: NullableOption<boolean> | undefined;
    // Read-only. User ID by which this is last modified.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Read-only. Date and time at which this is last modified. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Used to set the relative order of items in the checklist. The format is defined as outlined here.
    orderHint?: NullableOption<string> | undefined;
    // Title of the checklist item
    title?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface PlannerChecklistItems {}
export interface PlannerExternalReference {
    // A name alias to describe the reference.
    alias?: NullableOption<string> | undefined;
    // Read-only. User ID by which this is last modified.
    lastModifiedBy?: NullableOption<IdentitySet> | undefined;
    /**
     * Read-only. Date and time at which this is last modified. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Used to set the relative priority order in which the reference will be shown as a preview on the task.
    previewPriority?: NullableOption<string> | undefined;
    // Used to describe the type of the reference. Types include: PowerPoint, Word, Excel, Other.
    type?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface PlannerExternalReferences {}
// tslint:disable-next-line: no-empty-interface
export interface PlannerOrderHintsByAssignee {}
// tslint:disable-next-line: no-empty-interface
export interface PlannerUserIds {}
// tslint:disable-next-line: interface-name
export interface InsightIdentity {
    // The email address of the user who shared the item.
    address?: NullableOption<string> | undefined;
    // The display name of the user who shared the item.
    displayName?: NullableOption<string> | undefined;
    // The id of the user who shared the item.
    id?: NullableOption<string> | undefined;
}
export interface ResourceReference {
    // The item's unique identifier.
    id?: NullableOption<string> | undefined;
    // A string value that can be used to classify the item, such as 'microsoft.graph.driveItem'
    type?: NullableOption<string> | undefined;
    // A URL leading to the referenced item.
    webUrl?: NullableOption<string> | undefined;
}
export interface ResourceVisualization {
    /**
     * A string describing where the item is stored. For example, the name of a SharePoint site or the user name identifying
     * the owner of the OneDrive storing the item.
     */
    containerDisplayName?: NullableOption<string> | undefined;
    // Can be used for filtering by the type of container in which the file is stored. Such as Site or OneDriveBusiness.
    containerType?: NullableOption<string> | undefined;
    // A path leading to the folder in which the item is stored.
    containerWebUrl?: NullableOption<string> | undefined;
    /**
     * The item's media type. Can be used for filtering for a specific type of file based on supported IANA Media Mime Types.
     * Note that not all Media Mime Types are supported.
     */
    mediaType?: NullableOption<string> | undefined;
    // A URL leading to the preview image for the item.
    previewImageUrl?: NullableOption<string> | undefined;
    // A preview text for the item.
    previewText?: NullableOption<string> | undefined;
    // The item's title text.
    title?: NullableOption<string> | undefined;
    /**
     * The item's media type. Can be used for filtering for a specific file based on a specific type. See below for supported
     * types.
     */
    type?: NullableOption<string> | undefined;
}
export interface SharingDetail {
    // The user who shared the document.
    sharedBy?: NullableOption<InsightIdentity> | undefined;
    /**
     * The date and time the file was last shared. The timestamp represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: 2014-01-01T00:00:00Z.
     * Read-only.
     */
    sharedDateTime?: NullableOption<string> | undefined;
    sharingReference?: NullableOption<ResourceReference> | undefined;
    // The subject with which the document was shared.
    sharingSubject?: NullableOption<string> | undefined;
    // Determines the way the document was shared, can be by a 'Link', 'Attachment', 'Group', 'Site'.
    sharingType?: NullableOption<string> | undefined;
}
export interface UsageDetails {
    /**
     * The date and time the resource was last accessed by the user. The timestamp represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * 2014-01-01T00:00:00Z. Read-only.
     */
    lastAccessedDateTime?: NullableOption<string> | undefined;
    /**
     * The date and time the resource was last modified by the user. The timestamp represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * 2014-01-01T00:00:00Z. Read-only.
     */
    lastModifiedDateTime?: NullableOption<string> | undefined;
}
export interface CopyNotebookModel {
    createdBy?: NullableOption<string> | undefined;
    createdByIdentity?: NullableOption<IdentitySet> | undefined;
    createdTime?: NullableOption<string> | undefined;
    id?: NullableOption<string> | undefined;
    isDefault?: NullableOption<boolean> | undefined;
    isShared?: NullableOption<boolean> | undefined;
    lastModifiedBy?: NullableOption<string> | undefined;
    lastModifiedByIdentity?: NullableOption<IdentitySet> | undefined;
    lastModifiedTime?: NullableOption<string> | undefined;
    links?: NullableOption<NotebookLinks> | undefined;
    name?: NullableOption<string> | undefined;
    sectionGroupsUrl?: NullableOption<string> | undefined;
    sectionsUrl?: NullableOption<string> | undefined;
    self?: NullableOption<string> | undefined;
    userRole?: NullableOption<OnenoteUserRole> | undefined;
}
export interface NotebookLinks {
    // Opens the notebook in the OneNote native client if it's installed.
    oneNoteClientUrl?: NullableOption<ExternalLink> | undefined;
    // Opens the notebook in OneNote on the web.
    oneNoteWebUrl?: NullableOption<ExternalLink> | undefined;
}
export interface Diagnostic {
    // The message describing the condition that triggered the error or warning.
    message?: NullableOption<string> | undefined;
    // The link to the documentation for this issue.
    url?: NullableOption<string> | undefined;
}
export interface ExternalLink {
    // The url of the link.
    href?: NullableOption<string> | undefined;
}
export interface OnenoteOperationError {
    // The error code.
    code?: NullableOption<string> | undefined;
    // The error message.
    message?: NullableOption<string> | undefined;
}
export interface OnenotePagePreview {
    links?: NullableOption<OnenotePagePreviewLinks> | undefined;
    previewText?: NullableOption<string> | undefined;
}
export interface OnenotePagePreviewLinks {
    previewImageUrl?: NullableOption<ExternalLink> | undefined;
}
export interface OnenotePatchContentCommand {
    // The action to perform on the target element. Possible values are: replace, append, delete, insert, or prepend.
    action?: OnenotePatchActionType | undefined;
    /**
     * A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary
     * data, the request must be sent using the multipart/form-data content type with a 'Commands' part.
     */
    content?: NullableOption<string> | undefined;
    /**
     * The location to add the supplied content, relative to the target element. Possible values are: after (default) or
     * before.
     */
    position?: NullableOption<OnenotePatchInsertPosition> | undefined;
    /**
     * The element to update. Must be the #&amp;lt;data-id&amp;gt; or the generated {id} of the element, or the body or title
     * keyword.
     */
    target?: string | undefined;
}
export interface PageLinks {
    // Opens the page in the OneNote native client if it's installed.
    oneNoteClientUrl?: NullableOption<ExternalLink> | undefined;
    // Opens the page in OneNote on the web.
    oneNoteWebUrl?: NullableOption<ExternalLink> | undefined;
}
export interface RecentNotebook {
    // The name of the notebook.
    displayName?: NullableOption<string> | undefined;
    /**
     * The date and time when the notebook was last modified. The timestamp represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    lastAccessedTime?: NullableOption<string> | undefined;
    /**
     * Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote client, if it's installed.
     * The oneNoteWebURL link opens the notebook in OneNote on the web.
     */
    links?: NullableOption<RecentNotebookLinks> | undefined;
    // The backend store where the Notebook resides, either OneDriveForBusiness or OneDrive.
    sourceService?: NullableOption<OnenoteSourceService> | undefined;
}
export interface RecentNotebookLinks {
    // Opens the notebook in the OneNote client, if it's installed.
    oneNoteClientUrl?: NullableOption<ExternalLink> | undefined;
    // Opens the notebook in OneNote on the web.
    oneNoteWebUrl?: NullableOption<ExternalLink> | undefined;
}
export interface SectionLinks {
    // Opens the section in the OneNote native client if it's installed.
    oneNoteClientUrl?: NullableOption<ExternalLink> | undefined;
    // Opens the section in OneNote on the web.
    oneNoteWebUrl?: NullableOption<ExternalLink> | undefined;
}
export interface ArchivedPrintJob {
    // True if the job was acquired by a printer; false otherwise. Read-only.
    acquiredByPrinter?: boolean | undefined;
    // The dateTimeOffset when the job was acquired by the printer, if any. Read-only.
    acquiredDateTime?: NullableOption<string> | undefined;
    // The dateTimeOffset when the job was completed, canceled or aborted. Read-only.
    completionDateTime?: NullableOption<string> | undefined;
    // The number of copies that were printed. Read-only.
    copiesPrinted?: number | undefined;
    // The user who created the print job. Read-only.
    createdBy?: NullableOption<UserIdentity> | undefined;
    // The dateTimeOffset when the job was created. Read-only.
    createdDateTime?: string | undefined;
    // The archived print job's GUID. Read-only.
    id?: string | undefined;
    // The printer ID that the job was queued for. Read-only.
    printerId?: NullableOption<string> | undefined;
    // The print job's final processing state. Read-only.
    processingState?: PrintJobProcessingState | undefined;
}
// tslint:disable-next-line: interface-name
export interface IntegerRange {
    // The inclusive upper bound of the integer range.
    end?: NullableOption<number> | undefined;
    // The inclusive lower bound of the integer range.
    start?: NullableOption<number> | undefined;
}
export interface PrintCertificateSigningRequest {
    // A base64-encoded pkcs10 certificate request. Read-only.
    content?: string | undefined;
    // The base64-encoded public portion of an asymmetric key that is generated by the client. Read-only.
    transportKey?: string | undefined;
}
export interface PrintDocumentUploadProperties {
    // The document's content (MIME) type.
    contentType?: string | undefined;
    // The document's name.
    documentName?: string | undefined;
    // The document's size in bytes.
    size?: number | undefined;
}
export interface PrinterCapabilities {
    // A list of supported bottom margins(in microns) for the printer.
    bottomMargins?: NullableOption<number[]> | undefined;
    // True if the printer supports collating when printing muliple copies of a multi-page document; false otherwise.
    collation?: NullableOption<boolean> | undefined;
    // The color modes supported by the printer. Valid values are described in the following table.
    colorModes?: NullableOption<PrintColorMode[]> | undefined;
    /**
     * A list of supported content (MIME) types that the printer supports. It is not guaranteed that the Universal Print
     * service supports printing all of these MIME types.
     */
    contentTypes?: NullableOption<string[]> | undefined;
    // The range of copies per job supported by the printer.
    copiesPerJob?: NullableOption<IntegerRange> | undefined;
    // The list of print resolutions in DPI that are supported by the printer.
    dpis?: NullableOption<number[]> | undefined;
    // The list of duplex modes that are supported by the printer. Valid values are described in the following table.
    duplexModes?: NullableOption<PrintDuplexMode[]> | undefined;
    // The list of feed orientations that are supported by the printer.
    feedOrientations?: NullableOption<PrinterFeedOrientation[]> | undefined;
    // Finishing processes the printer supports for a printed document.
    finishings?: NullableOption<PrintFinishing[]> | undefined;
    // Supported input bins for the printer.
    inputBins?: NullableOption<string[]> | undefined;
    // True if color printing is supported by the printer; false otherwise. Read-only.
    isColorPrintingSupported?: NullableOption<boolean> | undefined;
    // True if the printer supports printing by page ranges; false otherwise.
    isPageRangeSupported?: NullableOption<boolean> | undefined;
    // A list of supported left margins(in microns) for the printer.
    leftMargins?: NullableOption<number[]> | undefined;
    // The media (i.e., paper) colors supported by the printer.
    mediaColors?: NullableOption<string[]> | undefined;
    /**
     * The media sizes supported by the printer. Supports standard size names for ISO and ANSI media sizes. Valid values are
     * in the following table.
     */
    mediaSizes?: NullableOption<string[]> | undefined;
    // The media types supported by the printer.
    mediaTypes?: NullableOption<string[]> | undefined;
    // The presentation directions supported by the printer. Supported values are described in the following table.
    multipageLayouts?: NullableOption<PrintMultipageLayout[]> | undefined;
    // The print orientations supported by the printer. Valid values are described in the following table.
    orientations?: NullableOption<PrintOrientation[]> | undefined;
    // The printer's supported output bins (trays).
    outputBins?: NullableOption<string[]> | undefined;
    // Supported number of Input Pages to impose upon a single Impression.
    pagesPerSheet?: NullableOption<number[]> | undefined;
    // The print qualities supported by the printer.
    qualities?: NullableOption<PrintQuality[]> | undefined;
    // A list of supported right margins(in microns) for the printer.
    rightMargins?: NullableOption<number[]> | undefined;
    // Supported print scalings.
    scalings?: NullableOption<PrintScaling[]> | undefined;
    // True if the printer supports scaling PDF pages to match the print media size; false otherwise.
    supportsFitPdfToPage?: NullableOption<boolean> | undefined;
    // A list of supported top margins(in microns) for the printer.
    topMargins?: NullableOption<number[]> | undefined;
}
export interface PrinterDefaults {
    // The default color mode to use when printing the document. Valid values are described in the following table.
    colorMode?: NullableOption<PrintColorMode> | undefined;
    // The default content (MIME) type to use when processing documents.
    contentType?: NullableOption<string> | undefined;
    // The default number of copies printed per job.
    copiesPerJob?: NullableOption<number> | undefined;
    // The default resolution in DPI to use when printing the job.
    dpi?: NullableOption<number> | undefined;
    /**
     * The default duplex (double-sided) configuration to use when printing a document. Valid values are described in the
     * following table.
     */
    duplexMode?: NullableOption<PrintDuplexMode> | undefined;
    // The default set of finishings to apply to print jobs. Valid values are described in the following table.
    finishings?: NullableOption<PrintFinishing[]> | undefined;
    /**
     * The default fitPdfToPage setting. True to fit each page of a PDF document to a physical sheet of media; false to let
     * the printer decide how to lay out impressions.
     */
    fitPdfToPage?: NullableOption<boolean> | undefined;
    // The default input bin that serves as the paper source.
    inputBin?: NullableOption<string> | undefined;
    // The default media (such as paper) color to print the document on.
    mediaColor?: NullableOption<string> | undefined;
    /**
     * The default media size to use. Supports standard size names for ISO and ANSI media sizes. Valid values are listed in
     * the printerCapabilities topic.
     */
    mediaSize?: NullableOption<string> | undefined;
    // The default media (such as paper) type to print the document on.
    mediaType?: NullableOption<string> | undefined;
    /**
     * The default direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in
     * the following table.
     */
    multipageLayout?: NullableOption<PrintMultipageLayout> | undefined;
    // The default orientation to use when printing the document. Valid values are described in the following table.
    orientation?: NullableOption<PrintOrientation> | undefined;
    /**
     * The default output bin to place completed prints into. See the printer's capabilities for a list of supported output
     * bins.
     */
    outputBin?: NullableOption<string> | undefined;
    // The default number of document pages to print on each sheet.
    pagesPerSheet?: NullableOption<number> | undefined;
    // The default quality to use when printing the document. Valid values are described in the following table.
    quality?: NullableOption<PrintQuality> | undefined;
    /**
     * Specifies how the printer scales the document data to fit the requested media. Valid values are described in the
     * following table.
     */
    scaling?: NullableOption<PrintScaling> | undefined;
}
export interface PrinterLocation {
    // The altitude, in meters, that the printer is located at.
    altitudeInMeters?: NullableOption<number> | undefined;
    // The building that the printer is located in.
    building?: NullableOption<string> | undefined;
    // The city that the printer is located in.
    city?: NullableOption<string> | undefined;
    // The country or region that the printer is located in.
    countryOrRegion?: NullableOption<string> | undefined;
    // The floor that the printer is located on. Only numerical values are supported right now.
    floor?: NullableOption<string> | undefined;
    // The description of the floor that the printer is located on.
    floorDescription?: NullableOption<string> | undefined;
    // The latitude that the printer is located at.
    latitude?: NullableOption<number> | undefined;
    // The longitude that the printer is located at.
    longitude?: NullableOption<number> | undefined;
    // The organizational hierarchy that the printer belongs to. The elements should be in hierarchical order.
    organization?: NullableOption<string[]> | undefined;
    // The postal code that the printer is located in.
    postalCode?: NullableOption<string> | undefined;
    // The description of the room that the printer is located in.
    roomDescription?: NullableOption<string> | undefined;
    // The room that the printer is located in. Only numerical values are supported right now.
    roomName?: NullableOption<string> | undefined;
    // The site that the printer is located in.
    site?: NullableOption<string> | undefined;
    // The state or province that the printer is located in.
    stateOrProvince?: NullableOption<string> | undefined;
    // The street address where the printer is located.
    streetAddress?: NullableOption<string> | undefined;
    // The subdivision that the printer is located in. The elements should be in hierarchical order.
    subdivision?: NullableOption<string[]> | undefined;
    subunit?: NullableOption<string[]> | undefined;
}
export interface PrinterStatus {
    // A human-readable description of the printer's current processing state. Read-only.
    description?: NullableOption<string> | undefined;
    /**
     * The list of details describing why the printer is in the current state. Valid values are described in the following
     * table. Read-only.
     */
    details?: PrinterProcessingStateDetail[] | undefined;
    // The current processing state. Valid values are described in the following table. Read-only.
    state?: PrinterProcessingState | undefined;
}
export interface PrintJobConfiguration {
    // Whether the printer should collate pages wehen printing multiple copies of a multi-page document.
    collate?: NullableOption<boolean> | undefined;
    // The color mode the printer should use to print the job. Valid values are described in the table below. Read-only.
    colorMode?: NullableOption<PrintColorMode> | undefined;
    // The number of copies that should be printed. Read-only.
    copies?: NullableOption<number> | undefined;
    // The resolution to use when printing the job, expressed in dots per inch (DPI). Read-only.
    dpi?: NullableOption<number> | undefined;
    // The duplex mode the printer should use when printing the job. Valid values are described in the table below. Read-only.
    duplexMode?: NullableOption<PrintDuplexMode> | undefined;
    /**
     * The orientation to use when feeding media into the printer. Valid values are described in the following table.
     * Read-only.
     */
    feedOrientation?: NullableOption<PrinterFeedOrientation> | undefined;
    // Finishing processes to use when printing.
    finishings?: NullableOption<PrintFinishing[]> | undefined;
    fitPdfToPage?: NullableOption<boolean> | undefined;
    // The input bin (tray) to use when printing. See the printer's capabilities for a list of supported input bins.
    inputBin?: NullableOption<string> | undefined;
    // The margin settings to use when printing.
    margin?: NullableOption<PrintMargin> | undefined;
    /**
     * The media sizeto use when printing. Supports standard size names for ISO and ANSI media sizes. Valid values are listed
     * in the printerCapabilities topic.
     */
    mediaSize?: NullableOption<string> | undefined;
    // The default media (such as paper) type to print the document on.
    mediaType?: NullableOption<string> | undefined;
    /**
     * The direction to lay out pages when multiple pages are being printed per sheet. Valid values are described in the
     * following table.
     */
    multipageLayout?: NullableOption<PrintMultipageLayout> | undefined;
    /**
     * The orientation setting the printer should use when printing the job. Valid values are described in the following
     * table.
     */
    orientation?: NullableOption<PrintOrientation> | undefined;
    // The output bin to place completed prints into. See the printer's capabilities for a list of supported output bins.
    outputBin?: NullableOption<string> | undefined;
    // The page ranges to print. Read-only.
    pageRanges?: NullableOption<IntegerRange[]> | undefined;
    // The number of document pages to print on each sheet.
    pagesPerSheet?: NullableOption<number> | undefined;
    // The print quality to use when printing the job. Valid values are described in the table below. Read-only.
    quality?: NullableOption<PrintQuality> | undefined;
    /**
     * Specifies how the printer should scale the document data to fit the requested media. Valid values are described in the
     * following table.
     */
    scaling?: NullableOption<PrintScaling> | undefined;
}
export interface PrintMargin {
    // The margin in microns from the bottom edge.
    bottom?: NullableOption<number> | undefined;
    // The margin in microns from the left edge.
    left?: NullableOption<number> | undefined;
    // The margin in microns from the right edge.
    right?: NullableOption<number> | undefined;
    // The margin in microns from the top edge.
    top?: NullableOption<number> | undefined;
}
export interface PrintJobStatus {
    // A human-readable description of the print job's current processing state. Read-only.
    description?: string | undefined;
    // Additional details for print job state. Valid values are described in the following table. Read-only.
    details?: PrintJobStateDetail[] | undefined;
    // True if the job was acknowledged by a printer; false otherwise. Read-only.
    isAcquiredByPrinter?: boolean | undefined;
    // The print job's current processing state. Valid values are described in the following table. Read-only.
    state?: PrintJobProcessingState | undefined;
}
export interface PrintOperationStatus {
    // A human-readable description of the printOperation's current processing state. Read-only.
    description?: string | undefined;
    // The printOperation's current processing state. Valid values are described in the following table. Read-only.
    state?: PrintOperationProcessingState | undefined;
}
export interface PrintSettings {
    /**
     * Specifies whether document conversion is enabled for the tenant. If document conversion is enabled, Universal Print
     * service will automatically convert documents into a format compatible with the printer (xps to pdf) when needed.
     */
    documentConversionEnabled?: boolean | undefined;
}
export interface PrintTaskStatus {
    // A human-readable description of the current processing state of the printTask.
    description?: string | undefined;
    // The current processing state of the printTask. Valid values are described in the following table.
    state?: PrintTaskProcessingState | undefined;
}
// tslint:disable-next-line: interface-name
export interface ImageInfo {
    /**
     * Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization.
     * For example – a high contrast image
     */
    addImageQuery?: NullableOption<boolean> | undefined;
    // Optional; alt-text accessible content for the image
    alternateText?: NullableOption<string> | undefined;
    alternativeText?: NullableOption<string> | undefined;
    // Optional; URI that points to an icon which represents the application used to generate the activity
    iconUrl?: NullableOption<string> | undefined;
}
export interface VisualInfo {
    // Optional. JSON object used to represent an icon which represents the application used to generate the activity
    attribution?: NullableOption<ImageInfo> | undefined;
    /**
     * Optional. Background color used to render the activity in the UI - brand color for the application source of the
     * activity. Must be a valid hex color
     */
    backgroundColor?: NullableOption<string> | undefined;
    /**
     * Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell
     * UI
     */
    content?: NullableOption<any> | undefined;
    /**
     * Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or
     * metadata)
     */
    description?: NullableOption<string> | undefined;
    /**
     * Required. Short text description of the user's unique activity (for example, document name in cases where an activity
     * refers to document creation)
     */
    displayText?: string | undefined;
}
export interface AlertDetection {
    detectionType?: NullableOption<string> | undefined;
    method?: NullableOption<string> | undefined;
    name?: NullableOption<string> | undefined;
}
export interface AlertHistoryState {
    /**
     * The Application ID of the calling application that submitted an update (PATCH) to the alert. The appId should be
     * extracted from the auth token and not entered manually by the calling application.
     */
    appId?: NullableOption<string> | undefined;
    // UPN of user the alert was assigned to (note: alert.assignedTo only stores the last value/UPN).
    assignedTo?: NullableOption<string> | undefined;
    // Comment entered by signed-in user.
    comments?: NullableOption<string[]> | undefined;
    /**
     * Analyst feedback on the alert in this update. Possible values are: unknown, truePositive, falsePositive,
     * benignPositive.
     */
    feedback?: NullableOption<AlertFeedback> | undefined;
    // Alert status value (if updated). Possible values are: unknown, newAlert, inProgress, resolved, dismissed.
    status?: NullableOption<AlertStatus> | undefined;
    /**
     * Date and time of the alert update. The Timestamp type represents date and time information using ISO 8601 format and is
     * always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    updatedDateTime?: NullableOption<string> | undefined;
    // UPN of the signed-in user that updated the alert (taken from the bearer token - if in user/delegated auth mode).
    user?: NullableOption<string> | undefined;
}
export interface AlertTrigger {
    // Name of the property serving as a detection trigger.
    name?: NullableOption<string> | undefined;
    // Type of the property in the key:value pair for interpretation. For example, String, Boolean, etc.
    type?: NullableOption<string> | undefined;
    // Value of the property serving as a detection trigger.
    value?: NullableOption<string> | undefined;
}
export interface AverageComparativeScore {
    // Average score within specified basis.
    averageScore?: NullableOption<number> | undefined;
    // Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
    basis?: NullableOption<string> | undefined;
}
export interface CertificationControl {
    // Certification control name
    name?: NullableOption<string> | undefined;
    // URL for the Microsoft Service Trust Portal
    url?: NullableOption<string> | undefined;
}
export interface CloudAppSecurityState {
    // Destination IP Address of the connection to the cloud application/service.
    destinationServiceIp?: NullableOption<string> | undefined;
    // Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).
    destinationServiceName?: NullableOption<string> | undefined;
    /**
     * Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which
     * equates to a percentage.
     */
    riskScore?: NullableOption<string> | undefined;
}
export interface ComplianceInformation {
    // Collection of the certification controls associated with certification
    certificationControls?: NullableOption<CertificationControl[]> | undefined;
    // Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171)
    certificationName?: NullableOption<string> | undefined;
}
export interface ControlScore {
    // Control action category (Identity, Data, Device, Apps, Infrastructure).
    controlCategory?: NullableOption<string> | undefined;
    // Control unique name.
    controlName?: NullableOption<string> | undefined;
    // Description of the control.
    description?: NullableOption<string> | undefined;
    // Tenant achieved score for the control (it varies day by day depending on tenant operations on the control).
    score?: NullableOption<number> | undefined;
}
export interface FileHash {
    // File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256.
    hashType?: NullableOption<FileHashType> | undefined;
    // Value of the file hash.
    hashValue?: NullableOption<string> | undefined;
}
export interface FileSecurityState {
    // Complex type containing file hashes (cryptographic and location-sensitive).
    fileHash?: NullableOption<FileHash> | undefined;
    // File name (without path).
    name?: NullableOption<string> | undefined;
    // Full file path of the file/imageFile.
    path?: NullableOption<string> | undefined;
    /**
     * Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a
     * percentage.
     */
    riskScore?: NullableOption<string> | undefined;
}
export interface HostSecurityState {
    // Host FQDN (Fully Qualified Domain Name) (for example, machine.company.com).
    fqdn?: NullableOption<string> | undefined;
    isAzureAdJoined?: NullableOption<boolean> | undefined;
    isAzureAdRegistered?: NullableOption<boolean> | undefined;
    // True if the host is domain joined to an on-premises Active Directory domain.
    isHybridAzureDomainJoined?: NullableOption<boolean> | undefined;
    // The local host name, without the DNS domain name.
    netBiosName?: NullableOption<string> | undefined;
    // Host Operating System. (For example, Windows10, MacOS, RHEL, etc.).
    os?: NullableOption<string> | undefined;
    // Private (not routable) IPv4 or IPv6 address (see RFC 1918) at the time of the alert.
    privateIpAddress?: NullableOption<string> | undefined;
    // Publicly routable IPv4 or IPv6 address (see RFC 1918) at time of the alert.
    publicIpAddress?: NullableOption<string> | undefined;
    // Provider-generated/calculated risk score of the host. Recommended value range of 0-1, which equates to a percentage.
    riskScore?: NullableOption<string> | undefined;
}
// tslint:disable-next-line: interface-name
export interface InvestigationSecurityState {
    name?: NullableOption<string> | undefined;
    status?: NullableOption<string> | undefined;
}
export interface MalwareState {
    // Provider-generated malware category (for example, trojan, ransomware, etc.).
    category?: NullableOption<string> | undefined;
    // Provider-generated malware family (for example, 'wannacry', 'notpetya', etc.).
    family?: NullableOption<string> | undefined;
    // Provider-generated malware variant name (for example, Trojan:Win32/Powessere.H).
    name?: NullableOption<string> | undefined;
    // Provider-determined severity of this malware.
    severity?: NullableOption<string> | undefined;
    /**
     * Indicates whether the detected file (malware/vulnerability) was running at the time of detection or was detected at
     * rest on the disk.
     */
    wasRunning?: NullableOption<boolean> | undefined;
}
export interface MessageSecurityState {
    connectingIP?: NullableOption<string> | undefined;
    deliveryAction?: NullableOption<string> | undefined;
    deliveryLocation?: NullableOption<string> | undefined;
    directionality?: NullableOption<string> | undefined;
    internetMessageId?: NullableOption<string> | undefined;
    messageFingerprint?: NullableOption<string> | undefined;
    messageReceivedDateTime?: NullableOption<string> | undefined;
    messageSubject?: NullableOption<string> | undefined;
    networkMessageId?: NullableOption<string> | undefined;
}
export interface NetworkConnection {
    // Name of the application managing the network connection (for example, Facebook, SMTP, etc.).
    applicationName?: NullableOption<string> | undefined;
    // Destination IP address (of the network connection).
    destinationAddress?: NullableOption<string> | undefined;
    // Destination domain portion of the destination URL. (for example 'www.contoso.com').
    destinationDomain?: NullableOption<string> | undefined;
    // Location (by IP address mapping) associated with the destination of a network connection.
    destinationLocation?: NullableOption<string> | undefined;
    // Destination port (of the network connection).
    destinationPort?: NullableOption<string> | undefined;
    // Network connection URL/URI string - excluding parameters. (for example 'www.contoso.com/products/default.html')
    destinationUrl?: NullableOption<string> | undefined;
    // Network connection direction. Possible values are: unknown, inbound, outbound.
    direction?: NullableOption<ConnectionDirection> | undefined;
    /**
     * Date when the destination domain was registered. The Timestamp type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    domainRegisteredDateTime?: NullableOption<string> | undefined;
    /**
     * The local DNS name resolution as it appears in the host's local DNS cache (for example, in case the 'hosts' file was
     * tampered with).
     */
    localDnsName?: NullableOption<string> | undefined;
    // Network Address Translation destination IP address.
    natDestinationAddress?: NullableOption<string> | undefined;
    // Network Address Translation destination port.
    natDestinationPort?: NullableOption<string> | undefined;
    // Network Address Translation source IP address.
    natSourceAddress?: NullableOption<string> | undefined;
    // Network Address Translation source port.
    natSourcePort?: NullableOption<string> | undefined;
    /**
     * Network protocol. Possible values are: unknown, ip, icmp, igmp, ggp, ipv4, tcp, pup, udp, idp, ipv6, ipv6RoutingHeader,
     * ipv6FragmentHeader, ipSecEncapsulatingSecurityPayload, ipSecAuthenticationHeader, icmpV6, ipv6NoNextHeader,
     * ipv6DestinationOptions, nd, raw, ipx, spx, spxII.
     */
    protocol?: NullableOption<SecurityNetworkProtocol> | undefined;
    /**
     * Provider generated/calculated risk score of the network connection. Recommended value range of 0-1, which equates to a
     * percentage.
     */
    riskScore?: NullableOption<string> | undefined;
    // Source (i.e. origin) IP address (of the network connection).
    sourceAddress?: NullableOption<string> | undefined;
    // Location (by IP address mapping) associated with the source of a network connection.
    sourceLocation?: NullableOption<string> | undefined;
    // Source (i.e. origin) IP port (of the network connection).
    sourcePort?: NullableOption<string> | undefined;
    // Network connection status. Possible values are: unknown, attempted, succeeded, blocked, failed.
    status?: NullableOption<ConnectionStatus> | undefined;
    // Parameters (suffix) of the destination URL.
    urlParameters?: NullableOption<string> | undefined;
}
export interface Process {
    // User account identifier (user account context the process ran under) for example, AccountName, SID, and so on.
    accountName?: NullableOption<string> | undefined;
    // The full process invocation commandline including all parameters.
    commandLine?: NullableOption<string> | undefined;
    /**
     * Time at which the process was started. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: NullableOption<string> | undefined;
    // Complex type containing file hashes (cryptographic and location-sensitive).
    fileHash?: NullableOption<FileHash> | undefined;
    // The integrity level of the process. Possible values are: unknown, untrusted, low, medium, high, system.
    integrityLevel?: NullableOption<ProcessIntegrityLevel> | undefined;
    // True if the process is elevated.
    isElevated?: NullableOption<boolean> | undefined;
    // The name of the process' Image file.
    name?: NullableOption<string> | undefined;
    /**
     * DateTime at which the parent process was started. The Timestamp type represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    parentProcessCreatedDateTime?: NullableOption<string> | undefined;
    // The Process ID (PID) of the parent process.
    parentProcessId?: NullableOption<number> | undefined;
    // The name of the image file of the parent process.
    parentProcessName?: NullableOption<string> | undefined;
    // Full path, including filename.
    path?: NullableOption<string> | undefined;
    // The Process ID (PID) of the process.
    processId?: NullableOption<number> | undefined;
}
export interface RegistryKeyState {
    /**
     * A Windows registry hive : HKEY_CURRENT_CONFIG HKEY_CURRENT_USER HKEY_LOCAL_MACHINE/SAM HKEY_LOCAL_MACHINE/Security
     * HKEY_LOCAL_MACHINE/Software HKEY_LOCAL_MACHINE/System HKEY_USERS/.Default. Possible values are: unknown, currentConfig,
     * currentUser, localMachineSam, localMachineSecurity, localMachineSoftware, localMachineSystem, usersDefault.
     */
    hive?: NullableOption<RegistryHive> | undefined;
    // Current (i.e. changed) registry key (excludes HIVE).
    key?: NullableOption<string> | undefined;
    // Previous (i.e. before changed) registry key (excludes HIVE).
    oldKey?: NullableOption<string> | undefined;
    // Previous (i.e. before changed) registry key value data (contents).
    oldValueData?: NullableOption<string> | undefined;
    // Previous (i.e. before changed) registry key value name.
    oldValueName?: NullableOption<string> | undefined;
    // Operation that changed the registry key name and/or value. Possible values are: unknown, create, modify, delete.
    operation?: NullableOption<RegistryOperation> | undefined;
    /**
     * Process ID (PID) of the process that modified the registry key (process details will appear in the alert 'processes'
     * collection).
     */
    processId?: NullableOption<number> | undefined;
    // Current (i.e. changed) registry key value data (contents).
    valueData?: NullableOption<string> | undefined;
    // Current (i.e. changed) registry key value name
    valueName?: NullableOption<string> | undefined;
    /**
     * Registry key value type REG_BINARY REG_DWORD REG_DWORD_LITTLE_ENDIAN REG_DWORD_BIG_ENDIANREG_EXPAND_SZ REG_LINK
     * REG_MULTI_SZ REG_NONE REG_QWORD REG_QWORD_LITTLE_ENDIAN REG_SZ Possible values are: unknown, binary, dword,
     * dwordLittleEndian, dwordBigEndian, expandSz, link, multiSz, none, qword, qwordlittleEndian, sz.
     */
    valueType?: NullableOption<RegistryValueType> | undefined;
}
export interface SecureScoreControlStateUpdate {
    assignedTo?: NullableOption<string> | undefined;
    comment?: NullableOption<string> | undefined;
    state?: NullableOption<string> | undefined;
    updatedBy?: NullableOption<string> | undefined;
    updatedDateTime?: NullableOption<string> | undefined;
}
export interface SecurityResource {
    // Name of the resource that is related to current alert. Required.
    resource?: NullableOption<string> | undefined;
    // Represents type of security resources related to an alert. Possible values are: attacked, related.
    resourceType?: NullableOption<SecurityResourceType> | undefined;
}
export interface SecurityVendorInformation {
    // Specific provider (product/service - not vendor company); for example, WindowsDefenderATP.
    provider?: NullableOption<string> | undefined;
    // Version of the provider or subprovider, if it exists, that generated the alert. Required
    providerVersion?: NullableOption<string> | undefined;
    // Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen.
    subProvider?: NullableOption<string> | undefined;
    // Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required
    vendor?: NullableOption<string> | undefined;
}
export interface UriClickSecurityState {
    clickAction?: NullableOption<string> | undefined;
    clickDateTime?: NullableOption<string> | undefined;
    id?: NullableOption<string> | undefined;
    sourceId?: NullableOption<string> | undefined;
    uriDomain?: NullableOption<string> | undefined;
    verdict?: NullableOption<string> | undefined;
}
export interface UserSecurityState {
    // AAD User object identifier (GUID) - represents the physical/multi-account user entity.
    aadUserId?: NullableOption<string> | undefined;
    // Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName).
    accountName?: NullableOption<string> | undefined;
    // NetBIOS/Active Directory domain of user account (that is, domain/account format).
    domainName?: NullableOption<string> | undefined;
    // For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient.
    emailRole?: NullableOption<EmailRole> | undefined;
    // Indicates whether the user logged on through a VPN.
    isVpn?: NullableOption<boolean> | undefined;
    /**
     * Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and
     * is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    logonDateTime?: NullableOption<string> | undefined;
    // User sign-in ID.
    logonId?: NullableOption<string> | undefined;
    // IP Address the sign-in request originated from.
    logonIp?: NullableOption<string> | undefined;
    // Location (by IP address mapping) associated with a user sign-in event by this user.
    logonLocation?: NullableOption<string> | undefined;
    // Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service.
    logonType?: NullableOption<LogonType> | undefined;
    // Active Directory (on-premises) Security Identifier (SID) of the user.
    onPremisesSecurityIdentifier?: NullableOption<string> | undefined;
    /**
     * Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a
     * percentage.
     */
    riskScore?: NullableOption<string> | undefined;
    /**
     * User account type (group membership), per Windows definition. Possible values are: unknown, standard, power,
     * administrator.
     */
    userAccountType?: NullableOption<UserAccountSecurityType> | undefined;
    // User sign-in name - internet format: (user account name)@(user account DNS domain name).
    userPrincipalName?: NullableOption<string> | undefined;
}
export interface VulnerabilityState {
    // Common Vulnerabilities and Exposures (CVE) for the vulnerability.
    cve?: NullableOption<string> | undefined;
    // Base Common Vulnerability Scoring System (CVSS) severity score for this vulnerability.
    severity?: NullableOption<string> | undefined;
    /**
     * Indicates whether the detected vulnerability (file) was running at the time of detection or was the file detected at
     * rest on the disk.
     */
    wasRunning?: NullableOption<boolean> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface MediaConfig {}
export interface AppHostedMediaConfig extends MediaConfig {
    // The media configuration blob generated by smart media agent.
    blob?: NullableOption<string> | undefined;
}
export interface AudioConferencing {
    // The conference id of the online meeting.
    conferenceId?: NullableOption<string> | undefined;
    // A URL to the externally-accessible web page that contains dial-in information.
    dialinUrl?: NullableOption<string> | undefined;
    // The toll-free number that connects to the Audio Conference Provider.
    tollFreeNumber?: NullableOption<string> | undefined;
    // The toll number that connects to the Audio Conference Provider.
    tollNumber?: NullableOption<string> | undefined;
}
export interface CallMediaState {
    // The audio media state. Possible values are: active, inactive, unknownFutureValue.
    audio?: NullableOption<MediaState> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface CallOptions {}
export interface CallRoute {
    // The identity that was resolved to in the call.
    final?: IdentitySet | undefined;
    // The identity that was originally used in the call.
    original?: IdentitySet | undefined;
    // Possible values are: forwarded, lookup, selfFork.
    routingType?: RoutingType | undefined;
}
export interface CallTranscriptionInfo {
    // The state modified time in UTC.
    lastModifiedDateTime?: NullableOption<string> | undefined;
    // Possible values are: notStarted, active, inactive.
    state?: CallTranscriptionState | undefined;
}
export interface ChatInfo {
    // The unique identifier for a message in a Microsoft Teams channel.
    messageId?: NullableOption<string> | undefined;
    // The ID of the reply message.
    replyChainMessageId?: NullableOption<string> | undefined;
    // The unique identifier for a thread in Microsoft Teams.
    threadId?: NullableOption<string> | undefined;
}
export interface CommsNotification {
    // Possible values are: created, updated, deleted.
    changeType?: ChangeType | undefined;
    // URI of the resource that was changed.
    resourceUrl?: string | undefined;
}
export interface CommsNotifications {
    // The notification of a change in the resource.
    value?: NullableOption<CommsNotification[]> | undefined;
}
// tslint:disable-next-line: interface-name
export interface IncomingContext {
    // The id of the participant that is under observation. Read-only.
    observedParticipantId?: NullableOption<string> | undefined;
    // The identity that the call is happening on behalf of.
    onBehalfOf?: NullableOption<IdentitySet> | undefined;
    // The id of the participant that triggered the incoming call. Read-only.
    sourceParticipantId?: NullableOption<string> | undefined;
    // The identity that transferred the call.
    transferor?: NullableOption<IdentitySet> | undefined;
}
// tslint:disable-next-line: interface-name
export interface InvitationParticipantInfo {
    // The identitySet associated with this invitation.
    identity?: IdentitySet | undefined;
    /**
     * Optional. The call which the target idenity is currently a part of. This call will be dropped once the participant is
     * added.
     */
    replacesCallId?: NullableOption<string> | undefined;
}
export interface LobbyBypassSettings {
    // Specifies whether or not to always let dial-in callers bypass the lobby. Optional.
    isDialInBypassEnabled?: NullableOption<boolean> | undefined;
    /**
     * Specifies the type of participants that are automatically admitted into a meeting, bypassing the lobby. Possible values
     * are listed in the following table. Optional.
     */
    scope?: NullableOption<LobbyBypassScope> | undefined;
}
export interface MediaInfo {
    /**
     * Optional, used to uniquely identity the resource. If passed the prompt uri will be cached against this resourceId as
     * key.
     */
    resourceId?: NullableOption<string> | undefined;
    /**
     * Path to the prompt to be played. Currently only Wave file (.wav) format, single-channel, 16-bit samples with a 16,000
     * (16KHz) sampling rate is only supported.
     */
    uri?: string | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface Prompt {}
export interface MediaPrompt extends Prompt {
    // The media information.
    mediaInfo?: MediaInfo | undefined;
}
export interface MediaStream {
    // The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive.
    direction?: MediaDirection | undefined;
    // The media stream label.
    label?: NullableOption<string> | undefined;
    // The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data.
    mediaType?: Modality | undefined;
    // Indicates whether the media is muted by the server.
    serverMuted?: boolean | undefined;
    // The source ID.
    sourceId?: string | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface MeetingInfo {}
export interface MeetingParticipantInfo {
    // Identity information of the participant.
    identity?: NullableOption<IdentitySet> | undefined;
    /**
     * Specifies the participant's role in the meeting. Possible values are attendee, presenter, producer, and
     * unknownFutureValue.
     */
    role?: NullableOption<OnlineMeetingRole> | undefined;
    // User principal name of the participant.
    upn?: NullableOption<string> | undefined;
}
export interface MeetingParticipants {
    // Information of the meeting attendees.
    attendees?: NullableOption<MeetingParticipantInfo[]> | undefined;
    // Information of the meeting organizer.
    organizer?: NullableOption<MeetingParticipantInfo> | undefined;
}
export interface OrganizerMeetingInfo extends MeetingInfo {
    // The organizer Azure Active Directory identity.
    organizer?: IdentitySet | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface OutgoingCallOptions extends CallOptions {}
export interface ParticipantInfo {
    /**
     * The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call.
     * Read-only.
     */
    countryCode?: NullableOption<string> | undefined;
    /**
     * The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or
     * skypeForBusinessVoipPhone. Read-only.
     */
    endpointType?: NullableOption<EndpointType> | undefined;
    // The identitySet associated with this participant. Read-only.
    identity?: IdentitySet | undefined;
    // The language culture string. Read-only.
    languageId?: NullableOption<string> | undefined;
    /**
     * The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not
     * change based on the participant's current physical location, unlike countryCode. Read-only.
     */
    region?: NullableOption<string> | undefined;
}
export interface RecordingInfo {
    // The identities of recording initiator.
    initiator?: NullableOption<IdentitySet> | undefined;
    // Possible values are: unknown, notRecording, recording, or failed.
    recordingStatus?: RecordingStatus | undefined;
}
export interface ResultInfo {
    // The result code.
    code?: number | undefined;
    // The message.
    message?: NullableOption<string> | undefined;
    // The result sub-code.
    subcode?: number | undefined;
}
export interface ServiceHostedMediaConfig extends MediaConfig {
    // The list of media to pre-fetch.
    preFetchMedia?: NullableOption<MediaInfo[]> | undefined;
}
export interface TeleconferenceDeviceMediaQuality {
    // The average inbound stream network jitter.
    averageInboundJitter?: NullableOption<string> | undefined;
    // The average inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
    averageInboundPacketLossRateInPercentage?: NullableOption<number> | undefined;
    // The average inbound stream network round trip delay.
    averageInboundRoundTripDelay?: NullableOption<string> | undefined;
    // The average outbound stream network jitter.
    averageOutboundJitter?: NullableOption<string> | undefined;
    // The average outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
    averageOutboundPacketLossRateInPercentage?: NullableOption<number> | undefined;
    // The average outbound stream network round trip delay.
    averageOutboundRoundTripDelay?: NullableOption<string> | undefined;
    /**
     * The channel index of media. Indexing begins with 1. If a media session contains 3 video modalities, channel indexes
     * will be 1, 2, and 3.
     */
    channelIndex?: number | undefined;
    // The total number of the inbound packets.
    inboundPackets?: NullableOption<number> | undefined;
    // the local IP address for the media session.
    localIPAddress?: NullableOption<string> | undefined;
    // The local media port.
    localPort?: NullableOption<number> | undefined;
    // The maximum inbound stream network jitter.
    maximumInboundJitter?: NullableOption<string> | undefined;
    // The maximum inbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
    maximumInboundPacketLossRateInPercentage?: NullableOption<number> | undefined;
    // The maximum inbound stream network round trip delay.
    maximumInboundRoundTripDelay?: NullableOption<string> | undefined;
    // The maximum outbound stream network jitter.
    maximumOutboundJitter?: NullableOption<string> | undefined;
    // The maximum outbound stream packet loss rate in percentage (0-100). For example, 0.01 means 0.01%.
    maximumOutboundPacketLossRateInPercentage?: NullableOption<number> | undefined;
    // The maximum outbound stream network round trip delay.
    maximumOutboundRoundTripDelay?: NullableOption<string> | undefined;
    /**
     * The total modality duration. If the media enabled and disabled multiple times, MediaDuration will the summation of all
     * of the durations.
     */
    mediaDuration?: NullableOption<string> | undefined;
    // The network link speed in bytes
    networkLinkSpeedInBytes?: NullableOption<number> | undefined;
    // The total number of the outbound packets.
    outboundPackets?: NullableOption<number> | undefined;
    // The remote IP address for the media session.
    remoteIPAddress?: NullableOption<string> | undefined;
    // The remote media port.
    remotePort?: NullableOption<number> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface TeleconferenceDeviceAudioQuality extends TeleconferenceDeviceMediaQuality {}
export interface TeleconferenceDeviceQuality {
    /**
     * A unique identifier for all the participant calls in a conference or a unique identifier for two participant calls in
     * P2P call. This needs to be copied over from Microsoft.Graph.Call.CallChainId.
     */
    callChainId?: string | undefined;
    // A geo-region where the service is deployed, such as ProdNoam.
    cloudServiceDeploymentEnvironment?: NullableOption<string> | undefined;
    // A unique deployment identifier assigned by Azure.
    cloudServiceDeploymentId?: NullableOption<string> | undefined;
    // The Azure deployed cloud service instance name, such as FrontEnd_IN_3.
    cloudServiceInstanceName?: NullableOption<string> | undefined;
    // The Azure deployed cloud service name, such as contoso.cloudapp.net.
    cloudServiceName?: NullableOption<string> | undefined;
    // Any additional description, such as VTC Bldg 30/21.
    deviceDescription?: string | undefined;
    // The user media agent name, such as Cisco SX80.
    deviceName?: string | undefined;
    /**
     * A unique identifier for a specific media leg of a participant in a conference. One participant can have multiple media
     * leg identifiers if retargeting happens. CVI partner assigns this value.
     */
    mediaLegId?: string | undefined;
    /**
     * The list of media qualities in a media session (call), such as audio quality, video quality, and/or screen sharing
     * quality.
     */
    mediaQualityList?: TeleconferenceDeviceMediaQuality[] | undefined;
    /**
     * A unique identifier for a specific participant in a conference. The CVI partner needs to copy over Call.MyParticipantId
     * to this property.
     */
    participantId?: string | undefined;
}
export interface TeleconferenceDeviceVideoQuality extends TeleconferenceDeviceMediaQuality {
    // The average inbound stream video bit rate per second.
    averageInboundBitRate?: NullableOption<number> | undefined;
    // The average inbound stream video frame rate per second.
    averageInboundFrameRate?: NullableOption<number> | undefined;
    // The average outbound stream video bit rate per second.
    averageOutboundBitRate?: NullableOption<number> | undefined;
    // The average outbound stream video frame rate per second.
    averageOutboundFrameRate?: NullableOption<number> | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface TeleconferenceDeviceScreenSharingQuality extends TeleconferenceDeviceVideoQuality {}
export interface TokenMeetingInfo extends MeetingInfo {
    // The token used to join the call.
    token?: string | undefined;
}
export interface ToneInfo {
    // An incremental identifier used for ordering DTMF events.
    sequenceId?: number | undefined;
    /**
     * Possible values are: tone0, tone1, tone2, tone3, tone4, tone5, tone6, tone7, tone8, tone9, star, pound, a, b, c, d,
     * flash.
     */
    tone?: Tone | undefined;
}
export interface ChangeNotification {
    /**
     * Indicates the type of change that will raise the change notification. The supported values are: created, updated,
     * deleted. Required.
     */
    changeType?: ChangeType | undefined;
    /**
     * Value of the clientState property sent specified in the subscription request (if any). The maximum length is 255
     * characters. The client can check whether the change notification came from the service by comparing the values of the
     * clientState property. The value of the clientState property sent with the subscription is compared with the value of
     * the clientState property received with each change notification. Optional.
     */
    clientState?: NullableOption<string> | undefined;
    /**
     * (Preview) Encrypted content attached with the change notification. Only provided if encryptionCertificate and
     * includeResourceData were defined during the subscription request and if the resource supports it. Optional.
     */
    encryptedContent?: NullableOption<ChangeNotificationEncryptedContent> | undefined;
    // Unique ID for the notification. Optional.
    id?: NullableOption<string> | undefined;
    /**
     * The type of lifecycle notification if the current notification is a lifecycle notification. Optional. Supported values
     * are missed, removed, reauthorizationRequired.
     */
    lifecycleEvent?: NullableOption<LifecycleEventType> | undefined;
    // The URI of the resource that emitted the change notification relative to https://graph.microsoft.com. Required.
    resource?: string | undefined;
    // The content of this property depends on the type of resource being subscribed to. Required.
    resourceData?: NullableOption<ResourceData> | undefined;
    // The expiration time for the subscription. Required.
    subscriptionExpirationDateTime?: string | undefined;
    // The unique identifier of the subscription that generated the notification.
    subscriptionId?: string | undefined;
    // The unique identifier of the tenant from which the change notification originated.
    tenantId?: string | undefined;
}
export interface ChangeNotificationEncryptedContent {
    /**
     * Base64-encoded encrypted data that produces a full resource respresented as JSON. The data has been encrypted with the
     * provided dataKey using an AES/CBC/PKCS5PADDING cipher suite.
     */
    data?: string | undefined;
    /**
     * Base64-encoded symmetric key generated by Microsoft Graph to encrypt the data value and to generate the data signature.
     * This key is encrypted with the certificate public key that was provided during the subscription. It must be decrypted
     * with the certificate private key before it can be used to decrypt the data or verify the signature. This key has been
     * encrypted with the following cipher suite: RSA/ECB/OAEPWithSHA1AndMGF1Padding.
     */
    dataKey?: string | undefined;
    // Base64-encoded HMAC-SHA256 hash of the data for validation purposes.
    dataSignature?: string | undefined;
    // ID of the certificate used to encrypt the dataKey.
    encryptionCertificateId?: string | undefined;
    // Hexadecimal representation of the thumbprint of the certificate used to encrypt the dataKey.
    encryptionCertificateThumbprint?: string | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface ResourceData {}
export interface ChangeNotificationCollection {
    /**
     * Contains an array of JWT tokens generated by Microsoft Graph for the application to validate the origin of the
     * notifications. Microsoft Graph generates a single token for each distinct app and tenant pair for an item if it exists
     * in the value array. Keep in mind that notifications can contain a mix of items for various apps and tenants that
     * subscribed using the same notification URL. Only provided for change notifications with resource data Optional.
     */
    validationTokens?: NullableOption<string[]> | undefined;
    // The set of notifications being sent to the notification URL. Required.
    value?: ChangeNotification[] | undefined;
}
// tslint:disable-next-line: no-empty-interface
export interface TeamworkNotificationRecipient {}
export interface AadUserNotificationRecipient extends TeamworkNotificationRecipient {
    // Azure AD user identifier. Use the List users method to get this ID.
    userId?: string | undefined;
}
export interface ChannelIdentity {
    // The identity of the channel in which the message was posted.
    channelId?: NullableOption<string> | undefined;
    // The identity of the team in which the message was posted.
    teamId?: NullableOption<string> | undefined;
}
export interface ChatMessageAttachment {
    /**
     * The content of the attachment. If the attachment is a rich card, set the property to the rich card object. This
     * property and contentUrl are mutually exclusive.
     */
    content?: NullableOption<string> | undefined;
    /**
     * The media type of the content attachment. It can have the following values: reference: Attachment is a link to another
     * file. Populate the contentURL with the link to the object.Any contentTypes supported by the Bot Framework's Attachment
     * objectapplication/vnd.microsoft.card.codesnippet: A code snippet. application/vnd.microsoft.card.announcement: An
     * announcement header.
     */
    contentType?: NullableOption<string> | undefined;
    // URL for the content of the attachment. Supported protocols: http, https, file and data.
    contentUrl?: NullableOption<string> | undefined;
    // Read-only. Unique id of the attachment.
    id?: NullableOption<string> | undefined;
    // Name of the attachment.
    name?: NullableOption<string> | undefined;
    /**
     * URL to a thumbnail image that the channel can use if it supports using an alternative, smaller form of content or
     * contentUrl. For example, if you set contentType to application/word and set contentUrl to the location of the Word
     * document, you might include a thumbnail image that represents the document. The channel could display the thumbnail
     * image instead of the document. When the user clicks the image, the channel would open the document.
     */
    thumbnailUrl?: NullableOption<string> | undefined;
}
export interface ChatMessageMention {
    /**
     * Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding
     * &amp;lt;at id='{index}'&amp;gt; tag in the message body.
     */
    id?: NullableOption<number> | undefined;
    /**
     * The entity (user, application, team, or channel) that was mentioned. If it was a channel or team that was @mentioned,
     * the identitySet contains a conversation property giving the ID of the team/channel, and a conversationIdentityType
     * property that represents either the team or channel.
     */
    mentioned?: NullableOption<IdentitySet> | undefined;
    // String used to represent the mention. For example, a user's display name, a team name.
    mentionText?: NullableOption<string> | undefined;
}
export interface ChatMessagePolicyViolation {
    /**
     * The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender --
     * Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the
     * message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users
     * within the organization to read the message.
     */
    dlpAction?: NullableOption<ChatMessagePolicyViolationDlpActionTypes> | undefined;
    // Justification text provided by the sender of the message when overriding a policy violation.
    justificationText?: NullableOption<string> | undefined;
    // Information to display to the message sender about why the message was flagged as a violation.
    policyTip?: NullableOption<ChatMessagePolicyViolationPolicyTip> | undefined;
    /**
     * Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are:
     * NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction
     * is not required.
     */
    userAction?: NullableOption<ChatMessagePolicyViolationUserActionTypes> | undefined;
    /**
     * Indicates what actions the sender may take in response to the policy violation. Supported values are:
     * NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and
     * its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification
     * -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had
     * hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender
     * to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after
     * providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually
     * exclusive.
     */
    verdictDetails?: NullableOption<ChatMessagePolicyViolationVerdictDetailsTypes> | undefined;
}
export interface ChatMessagePolicyViolationPolicyTip {
    /**
     * The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what
     * users shouldn't say in chats)
     */
    complianceUrl?: NullableOption<string> | undefined;
    // Explanatory text shown to the sender of the message.
    generalText?: NullableOption<string> | undefined;
    /**
     * The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its
     * own conditions, examples include 'Credit Card Number' and 'Social Security Number'.
     */
    matchedConditionDescriptions?: NullableOption<string[]> | undefined;
}
export interface ChatMessageReaction {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     */
    createdDateTime?: string | undefined;
    // Supported values are like, angry, sad, laugh, heart, surprised.
    reactionType?: string | undefined;
    // The user who reacted to the message.
    user?: IdentitySet | undefined;
}
export interface OperationError {
    // Operation error code.
    code?: NullableOption<string> | undefined;
    // Operation error message.
    message?: NullableOption<string> | undefined;
}
export interface TeamClassSettings {
    /**
     * If set to true, enables sending of weekly assignments digest emails to parents/guardians, provided the tenant admin has
     * enabled the setting globally.
     */
    notifyGuardiansAboutAssignments?: NullableOption<boolean> | undefined;
}
export interface TeamFunSettings {
    // If set to true, enables users to include custom memes.
    allowCustomMemes?: NullableOption<boolean> | undefined;
    // If set to true, enables Giphy use.
    allowGiphy?: NullableOption<boolean> | undefined;
    // If set to true, enables users to include stickers and memes.
    allowStickersAndMemes?: NullableOption<boolean> | undefined;
    // Giphy content rating. Possible values are: moderate, strict.
    giphyContentRating?: NullableOption<GiphyRatingType> | undefined;
}
export interface TeamGuestSettings {
    // If set to true, guests can add and update channels.
    allowCreateUpdateChannels?: NullableOption<boolean> | undefined;
    // If set to true, guests can delete channels.
    allowDeleteChannels?: NullableOption<boolean> | undefined;
}
export interface TeamMemberSettings {
    // If set to true, members can add and remove apps.
    allowAddRemoveApps?: NullableOption<boolean> | undefined;
    // If set to true, members can add and update private channels.
    allowCreatePrivateChannels?: NullableOption<boolean> | undefined;
    // If set to true, members can add and update any channels.
    allowCreateUpdateChannels?: NullableOption<boolean> | undefined;
    // If set to true, members can add, update, and remove connectors.
    allowCreateUpdateRemoveConnectors?: NullableOption<boolean> | undefined;
    // If set to true, members can add, update, and remove tabs.
    allowCreateUpdateRemoveTabs?: NullableOption<boolean> | undefined;
    // If set to true, members can delete channels.
    allowDeleteChannels?: NullableOption<boolean> | undefined;
}
export interface TeamMessagingSettings {
    // If set to true, @channel mentions are allowed.
    allowChannelMentions?: NullableOption<boolean> | undefined;
    // If set to true, owners can delete any message.
    allowOwnerDeleteMessages?: NullableOption<boolean> | undefined;
    // If set to true, @team mentions are allowed.
    allowTeamMentions?: NullableOption<boolean> | undefined;
    // If set to true, users can delete their messages.
    allowUserDeleteMessages?: NullableOption<boolean> | undefined;
    // If set to true, users can edit their messages.
    allowUserEditMessages?: NullableOption<boolean> | undefined;
}
export interface TeamsTabConfiguration {
    // Url used for rendering tab contents in Teams. Required.
    contentUrl?: NullableOption<string> | undefined;
    // Identifier for the entity hosted by the tab provider.
    entityId?: NullableOption<string> | undefined;
    // Url called by Teams client when a Tab is removed using the Teams Client.
    removeUrl?: NullableOption<string> | undefined;
    // Url for showing tab contents outside of Teams.
    websiteUrl?: NullableOption<string> | undefined;
}
export interface TeamworkActivityTopic {
    /**
     * Type of source. Possible values are: entityUrl, text. For supported Microsoft Graph URLs, use entityUrl. For custom
     * text, use text.
     */
    source?: NullableOption<TeamworkActivityTopicSource> | undefined;
    /**
     * The topic value. If the value of the source property is entityUrl, this must be a Microsoft Graph URL. If the vaule is
     * text, this must be a plain text value.
     */
    value?: string | undefined;
    /**
     * The link the user clicks when they select the notification. Optional when source is entityUrl; required when source is
     * text.
     */
    webUrl?: NullableOption<string> | undefined;
}
export interface ScheduleEntity {
    endDateTime?: NullableOption<string> | undefined;
    startDateTime?: NullableOption<string> | undefined;
    theme?: ScheduleEntityTheme | undefined;
}
export interface ShiftItem extends ScheduleEntity {
    /**
     * An incremental part of a shift which can cover details of when and where an employee is during their shift. For
     * example, an assignment or a scheduled break or lunch. Required.
     */
    activities?: NullableOption<ShiftActivity[]> | undefined;
    // The shift label of the shiftItem.
    displayName?: NullableOption<string> | undefined;
    // The shift notes for the shiftItem.
    notes?: NullableOption<string> | undefined;
}
export interface OpenShiftItem extends ShiftItem {
    // Count of the number of slots for the given open shift.
    openSlotCount?: number | undefined;
}
export interface ShiftActivity {
    // Customer defined code for the shiftActivity. Required.
    code?: NullableOption<string> | undefined;
    // The name of the shiftActivity. Required.
    displayName?: NullableOption<string> | undefined;
    /**
     * The end date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
     */
    endDateTime?: NullableOption<string> | undefined;
    // Indicates whether the microsoft.graph.user should be paid for the activity during their shift. Required.
    isPaid?: NullableOption<boolean> | undefined;
    /**
     * The start date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
     */
    startDateTime?: NullableOption<string> | undefined;
    theme?: ScheduleEntityTheme | undefined;
}
export interface ShiftAvailability {
    // Specifies the pattern for recurrence
    recurrence?: NullableOption<PatternedRecurrence> | undefined;
    // The time slot(s) preferred by the user.
    timeSlots?: NullableOption<TimeRange[]> | undefined;
    // Specifies the time zone for the indicated time.
    timeZone?: NullableOption<string> | undefined;
}
export interface TimeRange {
    // End time for the time range.
    endTime?: NullableOption<string> | undefined;
    // Start time for the time range.
    startTime?: NullableOption<string> | undefined;
}
export interface TimeOffItem extends ScheduleEntity {
    // ID of the timeOffReason for this timeOffItem. Required.
    timeOffReasonId?: NullableOption<string> | undefined;
}
export interface WorkforceIntegrationEncryption {
    // Possible values are: sharedSecret, unknownFutureValue.
    protocol?: NullableOption<WorkforceIntegrationEncryptionProtocol> | undefined;
    // Encryption shared secret.
    secret?: NullableOption<string> | undefined;
}

export namespace CallRecords {
    type CallType = "unknown" | "groupCall" | "peerToPeer" | "unknownFutureValue";
    type ClientPlatform =
        | "unknown"
        | "windows"
        | "macOS"
        | "iOS"
        | "android"
        | "web"
        | "ipPhone"
        | "roomSystem"
        | "surfaceHub"
        | "holoLens"
        | "unknownFutureValue";
    type FailureStage = "unknown" | "callSetup" | "midcall" | "unknownFutureValue";
    type MediaStreamDirection = "callerToCallee" | "calleeToCaller";
    type Modality = "audio" | "video" | "videoBasedScreenSharing" | "data" | "screenSharing" | "unknownFutureValue";
    type NetworkConnectionType = "unknown" | "wired" | "wifi" | "mobile" | "tunnel" | "unknownFutureValue";
    type ProductFamily = "unknown" | "teams" | "skypeForBusiness" | "lync" | "unknownFutureValue";
    type ServiceRole =
        | "unknown"
        | "customBot"
        | "skypeForBusinessMicrosoftTeamsGateway"
        | "skypeForBusinessAudioVideoMcu"
        | "skypeForBusinessApplicationSharingMcu"
        | "skypeForBusinessCallQueues"
        | "skypeForBusinessAutoAttendant"
        | "mediationServer"
        | "mediationServerCloudConnectorEdition"
        | "exchangeUnifiedMessagingService"
        | "mediaController"
        | "conferencingAnnouncementService"
        | "conferencingAttendant"
        | "audioTeleconferencerController"
        | "skypeForBusinessUnifiedCommunicationApplicationPlatform"
        | "responseGroupServiceAnnouncementService"
        | "gateway"
        | "skypeTranslator"
        | "skypeForBusinessAttendant"
        | "responseGroupService"
        | "voicemail"
        | "unknownFutureValue";
    type UserFeedbackRating = "notRated" | "bad" | "poor" | "fair" | "good" | "excellent" | "unknownFutureValue";
    type WifiBand = "unknown" | "frequency24GHz" | "frequency50GHz" | "frequency60GHz" | "unknownFutureValue";
    type WifiRadioType =
        | "unknown"
        | "wifi80211a"
        | "wifi80211b"
        | "wifi80211g"
        | "wifi80211n"
        | "wifi80211ac"
        | "wifi80211ax"
        | "unknownFutureValue";
    interface CallRecord extends microsoftgraph.Entity {
        /**
         * UTC time when the last user left the call. The DateTimeOffset type represents date and time information using ISO 8601
         * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        endDateTime?: string | undefined;
        // Meeting URL associated to the call. May not be available for a peerToPeer call record type.
        joinWebUrl?: NullableOption<string> | undefined;
        /**
         * UTC time when the call record was created. The DatetimeOffset type represents date and time information using ISO 8601
         * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        lastModifiedDateTime?: string | undefined;
        /**
         * List of all the modalities used in the call. Possible values are: unknown, audio, video, videoBasedScreenSharing, data,
         * screenSharing, unknownFutureValue.
         */
        modalities?: Modality[] | undefined;
        // The organizing party's identity.
        organizer?: NullableOption<microsoftgraph.IdentitySet> | undefined;
        // List of distinct identities involved in the call.
        participants?: NullableOption<microsoftgraph.IdentitySet[]> | undefined;
        /**
         * UTC time when the first user joined the call. The DatetimeOffset type represents date and time information using ISO
         * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        startDateTime?: string | undefined;
        // Indicates the type of the call. Possible values are: unknown, groupCall, peerToPeer, unknownFutureValue.
        type?: CallType | undefined;
        /**
         * Monotonically increasing version of the call record. Higher version call records with the same ID includes additional
         * data compared to the lower version.
         */
        version?: number | undefined;
        /**
         * List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls
         * typically have at least one session per participant. Read-only. Nullable.
         */
        sessions?: NullableOption<Session[]> | undefined;
    }
    interface Session extends microsoftgraph.Entity {
        // Endpoint that answered the session.
        callee?: NullableOption<Endpoint> | undefined;
        // Endpoint that initiated the session.
        caller?: NullableOption<Endpoint> | undefined;
        /**
         * UTC time when the last user left the session. The DateTimeOffset type represents date and time information using ISO
         * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        endDateTime?: string | undefined;
        // Failure information associated with the session if the session failed.
        failureInfo?: NullableOption<FailureInfo> | undefined;
        /**
         * List of modalities present in the session. Possible values are: unknown, audio, video, videoBasedScreenSharing, data,
         * screenSharing, unknownFutureValue.
         */
        modalities?: Modality[] | undefined;
        /**
         * UTC fime when the first user joined the session. The DateTimeOffset type represents date and time information using ISO
         * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        startDateTime?: string | undefined;
        // The list of segments involved in the session. Read-only. Nullable.
        segments?: NullableOption<Segment[]> | undefined;
    }
    interface Segment extends microsoftgraph.Entity {
        // Endpoint that answered this segment.
        callee?: NullableOption<Endpoint> | undefined;
        // Endpoint that initiated this segment.
        caller?: NullableOption<Endpoint> | undefined;
        /**
         * UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and
         * is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        endDateTime?: string | undefined;
        // Failure information associated with the segment if it failed.
        failureInfo?: NullableOption<FailureInfo> | undefined;
        // Media associated with this segment.
        media?: NullableOption<Media[]> | undefined;
        /**
         * UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format
         * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        startDateTime?: string | undefined;
    }
    interface UserAgent {
        // Identifies the version of application software used by this endpoint.
        applicationVersion?: NullableOption<string> | undefined;
        // User-agent header value reported by this endpoint.
        headerValue?: NullableOption<string> | undefined;
    }
    interface ClientUserAgent extends UserAgent {
        /**
         * Identifies the platform used by this endpoint. Possible values are: unknown, windows, macOS, iOS, android, web,
         * ipPhone, roomSystem, surfaceHub, holoLens, unknownFutureValue.
         */
        platform?: ClientPlatform | undefined;
        /**
         * Identifies the family of application software used by this endpoint. Possible values are: unknown, teams,
         * skypeForBusiness, lync, unknownFutureValue.
         */
        productFamily?: ProductFamily | undefined;
    }
    interface DeviceInfo {
        // Name of the capture device driver used by the media endpoint.
        captureDeviceDriver?: NullableOption<string> | undefined;
        // Name of the capture device used by the media endpoint.
        captureDeviceName?: NullableOption<string> | undefined;
        // Fraction of the call that the media endpoint detected the capture device was not working properly.
        captureNotFunctioningEventRatio?: NullableOption<number> | undefined;
        /**
         * Fraction of the call that the media endpoint detected the CPU resources available were insufficient and caused poor
         * quality of the audio sent and received.
         */
        cpuInsufficentEventRatio?: NullableOption<number> | undefined;
        /**
         * Fraction of the call that the media endpoint detected clipping in the captured audio that caused poor quality of the
         * audio being sent.
         */
        deviceClippingEventRatio?: NullableOption<number> | undefined;
        /**
         * Fraction of the call that the media endpoint detected glitches or gaps in the audio played or captured that caused poor
         * quality of the audio being sent or received.
         */
        deviceGlitchEventRatio?: NullableOption<number> | undefined;
        // Number of times during the call that the media endpoint detected howling or screeching audio.
        howlingEventCount?: NullableOption<number> | undefined;
        // The root mean square (RMS) of the incoming signal of up to the first 30 seconds of the call.
        initialSignalLevelRootMeanSquare?: NullableOption<number> | undefined;
        /**
         * Fraction of the call that the media endpoint detected low speech level that caused poor quality of the audio being
         * sent.
         */
        lowSpeechLevelEventRatio?: NullableOption<number> | undefined;
        /**
         * Fraction of the call that the media endpoint detected low speech to noise level that caused poor quality of the audio
         * being sent.
         */
        lowSpeechToNoiseEventRatio?: NullableOption<number> | undefined;
        // Glitches per 5 minute interval for the media endpoint's microphone.
        micGlitchRate?: NullableOption<number> | undefined;
        /**
         * Average energy level of received audio for audio classified as mono noise or left channel of stereo noise by the media
         * endpoint.
         */
        receivedNoiseLevel?: NullableOption<number> | undefined;
        /**
         * Average energy level of received audio for audio classified as mono speech, or left channel of stereo speech by the
         * media endpoint.
         */
        receivedSignalLevel?: NullableOption<number> | undefined;
        // Name of the render device driver used by the media endpoint.
        renderDeviceDriver?: NullableOption<string> | undefined;
        // Name of the render device used by the media endpoint.
        renderDeviceName?: NullableOption<string> | undefined;
        // Fraction of the call that media endpoint detected device render is muted.
        renderMuteEventRatio?: NullableOption<number> | undefined;
        // Fraction of the call that the media endpoint detected the render device was not working properly.
        renderNotFunctioningEventRatio?: NullableOption<number> | undefined;
        // Fraction of the call that media endpoint detected device render volume is set to 0.
        renderZeroVolumeEventRatio?: NullableOption<number> | undefined;
        /**
         * Average energy level of sent audio for audio classified as mono noise or left channel of stereo noise by the media
         * endpoint.
         */
        sentNoiseLevel?: NullableOption<number> | undefined;
        /**
         * Average energy level of sent audio for audio classified as mono speech, or left channel of stereo speech by the media
         * endpoint.
         */
        sentSignalLevel?: NullableOption<number> | undefined;
        // Glitches per 5 minute internal for the media endpoint's loudspeaker.
        speakerGlitchRate?: NullableOption<number> | undefined;
    }
    interface Endpoint {
        // User-agent reported by this endpoint.
        userAgent?: NullableOption<UserAgent> | undefined;
    }
    interface FailureInfo {
        // Classification of why a call or portion of a call failed.
        reason?: NullableOption<string> | undefined;
        // The stage when the failure occurred. Possible values are: unknown, callSetup, midcall, unknownFutureValue.
        stage?: FailureStage | undefined;
    }
// tslint:disable-next-line: no-empty-interface
    interface FeedbackTokenSet {}
    interface Media {
        // Device information associated with the callee endpoint of this media.
        calleeDevice?: NullableOption<DeviceInfo> | undefined;
        // Network information associated with the callee endpoint of this media.
        calleeNetwork?: NullableOption<NetworkInfo> | undefined;
        // Device information associated with the caller endpoint of this media.
        callerDevice?: NullableOption<DeviceInfo> | undefined;
        // Network information associated with the caller endpoint of this media.
        callerNetwork?: NullableOption<NetworkInfo> | undefined;
        // How the media was identified during media negotiation stage.
        label?: NullableOption<string> | undefined;
        // Network streams associated with this media.
        streams?: NullableOption<MediaStream[]> | undefined;
    }
    interface NetworkInfo {
        /**
         * Fraction of the call that the media endpoint detected the available bandwidth or bandwidth policy was low enough to
         * cause poor quality of the audio sent.
         */
        bandwidthLowEventRatio?: NullableOption<number> | undefined;
        // The wireless LAN basic service set identifier of the media endpoint used to connect to the network.
        basicServiceSetIdentifier?: NullableOption<string> | undefined;
        /**
         * Type of network used by the media endpoint. Possible values are: unknown, wired, wifi, mobile, tunnel,
         * unknownFutureValue.
         */
        connectionType?: NetworkConnectionType | undefined;
        /**
         * Fraction of the call that the media endpoint detected the network delay was significant enough to impact the ability to
         * have real-time two-way communication.
         */
        delayEventRatio?: NullableOption<number> | undefined;
        // DNS suffix associated with the network adapter of the media endpoint.
        dnsSuffix?: NullableOption<string> | undefined;
        // IP address of the media endpoint.
        ipAddress?: NullableOption<string> | undefined;
        // Link speed in bits per second reported by the network adapter used by the media endpoint.
        linkSpeed?: NullableOption<number> | undefined;
        // The media access control (MAC) address of the media endpoint's network device.
        macAddress?: NullableOption<string> | undefined;
        // Network port number used by media endpoint.
        port?: NullableOption<number> | undefined;
        // Fraction of the call that the media endpoint detected the network was causing poor quality of the audio received.
        receivedQualityEventRatio?: NullableOption<number> | undefined;
        /**
         * IP address of the media endpoint as seen by the media relay server. This is typically the public internet IP address
         * associated to the endpoint.
         */
        reflexiveIPAddress?: NullableOption<string> | undefined;
        // IP address of the media relay server allocated by the media endpoint.
        relayIPAddress?: NullableOption<string> | undefined;
        // Network port number allocated on the media relay server by the media endpoint.
        relayPort?: NullableOption<number> | undefined;
        // Fraction of the call that the media endpoint detected the network was causing poor quality of the audio sent.
        sentQualityEventRatio?: NullableOption<number> | undefined;
        // Subnet used for media stream by the media endpoint.
        subnet?: NullableOption<string> | undefined;
        /**
         * WiFi band used by the media endpoint. Possible values are: unknown, frequency24GHz, frequency50GHz, frequency60GHz,
         * unknownFutureValue.
         */
        wifiBand?: WifiBand | undefined;
        // Estimated remaining battery charge in percentage reported by the media endpoint.
        wifiBatteryCharge?: NullableOption<number> | undefined;
        // WiFi channel used by the media endpoint.
        wifiChannel?: NullableOption<number> | undefined;
        /**
         * Name of the Microsoft WiFi driver used by the media endpoint. Value may be localized based on the language used by
         * endpoint.
         */
        wifiMicrosoftDriver?: NullableOption<string> | undefined;
        // Version of the Microsoft WiFi driver used by the media endpoint.
        wifiMicrosoftDriverVersion?: NullableOption<string> | undefined;
        /**
         * Type of WiFi radio used by the media endpoint. Possible values are: unknown, wifi80211a, wifi80211b, wifi80211g,
         * wifi80211n, wifi80211ac, wifi80211ax, unknownFutureValue.
         */
        wifiRadioType?: WifiRadioType | undefined;
        // WiFi signal strength in percentage reported by the media endpoint.
        wifiSignalStrength?: NullableOption<number> | undefined;
        // Name of the WiFi driver used by the media endpoint. Value may be localized based on the language used by endpoint.
        wifiVendorDriver?: NullableOption<string> | undefined;
        // Version of the WiFi driver used by the media endpoint.
        wifiVendorDriverVersion?: NullableOption<string> | undefined;
    }
    interface MediaStream {
        /**
         * Average Network Mean Opinion Score degradation for stream. Represents how much the network loss and jitter has impacted
         * the quality of received audio.
         */
        averageAudioDegradation?: NullableOption<number> | undefined;
        /**
         * Average jitter for the stream computed as specified in [RFC 3550][], denoted in [ISO 8601][] format. For example, 1
         * second is denoted as 'PT1S', where 'P' is the duration designator, 'T' is the time designator, and 'S' is the second
         * designator.
         */
        averageAudioNetworkJitter?: NullableOption<string> | undefined;
        // Average estimated bandwidth available between two endpoints in bits per second.
        averageBandwidthEstimate?: NullableOption<number> | undefined;
        /**
         * Average jitter for the stream computed as specified in [RFC 3550][], denoted in [ISO 8601][] format. For example, 1
         * second is denoted as 'PT1S', where 'P' is the duration designator, 'T' is the time designator, and 'S' is the second
         * designator.
         */
        averageJitter?: NullableOption<string> | undefined;
        // Average packet loss rate for stream.
        averagePacketLossRate?: NullableOption<number> | undefined;
        /**
         * Ratio of the number of audio frames with samples generated by packet loss concealment to the total number of audio
         * frames.
         */
        averageRatioOfConcealedSamples?: NullableOption<number> | undefined;
        // Average frames per second received for all video streams computed over the duration of the session.
        averageReceivedFrameRate?: NullableOption<number> | undefined;
        /**
         * Average network propagation round-trip time computed as specified in [RFC 3550][], denoted in [ISO 8601][] format. For
         * example, 1 second is denoted as 'PT1S', where 'P' is the duration designator, 'T' is the time designator, and 'S' is
         * the second designator.
         */
        averageRoundTripTime?: NullableOption<string> | undefined;
        // Average percentage of video frames lost as displayed to the user.
        averageVideoFrameLossPercentage?: NullableOption<number> | undefined;
        // Average frames per second received for a video stream, computed over the duration of the session.
        averageVideoFrameRate?: NullableOption<number> | undefined;
        // Average fraction of packets lost, as specified in [RFC 3550][], computed over the duration of the session.
        averageVideoPacketLossRate?: NullableOption<number> | undefined;
        /**
         * UTC time when the stream ended. The DateTimeOffset type represents date and time information using ISO 8601 format and
         * is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        endDateTime?: NullableOption<string> | undefined;
        // Fraction of the call where frame rate is less than 7.5 frames per second.
        lowFrameRateRatio?: NullableOption<number> | undefined;
        // Fraction of the call that the client is running less than 70% expected video processing capability.
        lowVideoProcessingCapabilityRatio?: NullableOption<number> | undefined;
        /**
         * Maximum of audio network jitter computed over each of the 20 second windows during the session, denoted in [ISO 8601][]
         * format. For example, 1 second is denoted as 'PT1S', where 'P' is the duration designator, 'T' is the time designator,
         * and 'S' is the second designator.
         */
        maxAudioNetworkJitter?: NullableOption<string> | undefined;
        /**
         * Maximum jitter for the stream computed as specified in RFC 3550, denoted in [ISO 8601][] format. For example, 1 second
         * is denoted as 'PT1S', where 'P' is the duration designator, 'T' is the time designator, and 'S' is the second
         * designator.
         */
        maxJitter?: NullableOption<string> | undefined;
        // Maximum packet loss rate for the stream.
        maxPacketLossRate?: NullableOption<number> | undefined;
        // Maximum ratio of packets concealed by the healer.
        maxRatioOfConcealedSamples?: NullableOption<number> | undefined;
        /**
         * Maximum network propagation round-trip time computed as specified in [RFC 3550][], denoted in [ISO 8601][] format. For
         * example, 1 second is denoted as 'PT1S', where 'P' is the duration designator, 'T' is the time designator, and 'S' is
         * the second designator.
         */
        maxRoundTripTime?: NullableOption<string> | undefined;
        // Packet count for the stream.
        packetUtilization?: NullableOption<number> | undefined;
        // Packet loss rate after FEC has been applied aggregated across all video streams and codecs.
        postForwardErrorCorrectionPacketLossRate?: NullableOption<number> | undefined;
        /**
         * UTC time when the stream started. The DateTimeOffset type represents date and time information using ISO 8601 format
         * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         */
        startDateTime?: NullableOption<string> | undefined;
        // Indicates the direction of the media stream. Possible values are: callerToCallee, calleeToCaller.
        streamDirection?: MediaStreamDirection | undefined;
        // Unique identifier for the stream.
        streamId?: NullableOption<string> | undefined;
        /**
         * True if the media stream bypassed the Mediation Server and went straight between client and PSTN Gateway/PBX, false
         * otherwise.
         */
        wasMediaBypassed?: NullableOption<boolean> | undefined;
    }
    interface ParticipantEndpoint extends Endpoint {
        // The feedback provided by the user of this endpoint about the quality of the session.
        feedback?: NullableOption<UserFeedback> | undefined;
        // Identity associated with the endpoint.
        identity?: NullableOption<microsoftgraph.IdentitySet> | undefined;
    }
    interface UserFeedback {
        /**
         * The rating provided by the user of this endpoint about the quality of this Session. Possible values are: notRated, bad,
         * poor, fair, good, excellent, unknownFutureValue.
         */
        rating?: UserFeedbackRating | undefined;
        // The feedback text provided by the user of this endpoint for the session.
        text?: NullableOption<string> | undefined;
        /**
         * The set of feedback tokens provided by the user of this endpoint for the session. This is a set of Boolean properties.
         * The property names should not be relied upon since they may change depending on what tokens are offered to the user.
         */
        tokens?: NullableOption<FeedbackTokenSet> | undefined;
    }
// tslint:disable-next-line: no-empty-interface
    interface ServiceEndpoint extends Endpoint {}
    interface ServiceUserAgent extends UserAgent {
        /**
         * Identifies the role of the service used by this endpoint. Possible values are: unknown, customBot,
         * skypeForBusinessMicrosoftTeamsGateway, skypeForBusinessAudioVideoMcu, skypeForBusinessApplicationSharingMcu,
         * skypeForBusinessCallQueues, skypeForBusinessAutoAttendant, mediationServer, mediationServerCloudConnectorEdition,
         * exchangeUnifiedMessagingService, mediaController, conferencingAnnouncementService, conferencingAttendant,
         * audioTeleconferencerController, skypeForBusinessUnifiedCommunicationApplicationPlatform,
         * responseGroupServiceAnnouncementService, gateway, skypeTranslator, skypeForBusinessAttendant, responseGroupService,
         * voicemail, unknownFutureValue.
         */
        role?: ServiceRole | undefined;
    }
}
export namespace ExternalConnectors {
    type ExternalItemContentType = "text" | "html" | "unknownFutureValue";
    interface ExternalItem extends microsoftgraph.Entity {
        content?: NullableOption<ExternalItemContent> | undefined;
        properties?: NullableOption<Properties> | undefined;
    }
    interface ExternalItemContent {
        type?: ExternalItemContentType | undefined;
        value?: NullableOption<string> | undefined;
    }
// tslint:disable-next-line: no-empty-interface
    interface Properties {}
}
