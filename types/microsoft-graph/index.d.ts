// Type definitions for non-npm package microsoft-graph 1.12
// Project: https://github.com/microsoftgraph/msgraph-typescript-typings
// Definitions by: Microsoft Graph Team <https://github.com/microsoftgraph>
//                 Muthurathinam Muthusamy <https://github.com/muthurathinam>
//                 Darrel Miller <https://github.com/darrelmiller>
//                 Nimeesh Patel <https://github.com/nimeesh-msft>
//                 Michael Mainer <https://github.com/MIchaelMainer>
//                 Nakul Sabharwal <https://github.com/NakulSabharwal>
//                 Peter Ombwa <https://github.com/peombwa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace microsoftgraph;

export type RiskLevel = "low" | "medium" | "high" | "hidden" | "none" | "unknownFutureValue";
export type AppliedConditionalAccessPolicyResult =
    | "success"
    | "failure"
    | "notApplied"
    | "notEnabled"
    | "unknown"
    | "unknownFutureValue";
export type ConditionalAccessStatus = "success" | "failure" | "notApplied" | "unknownFutureValue";
export type GroupType = "unifiedGroups" | "azureAD" | "unknownFutureValue";
export type OperationResult = "success" | "failure" | "timeout" | "unknownFutureValue";
export type RiskState =
    | "none"
    | "confirmedSafe"
    | "remediated"
    | "dismissed"
    | "atRisk"
    | "confirmedCompromised"
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
export type EducationUserRole = "student" | "teacher" | "none" | "unknownFutureValue";
export type EducationExternalSource = "sis" | "manual" | "unknownFutureValue";
export type EducationGender = "female" | "male" | "other" | "unknownFutureValue";
export type AttendeeType = "required" | "optional" | "resource";
export type ActivityDomain = "unknown" | "work" | "personal" | "unrestricted";
export type FreeBusyStatus = "free" | "tentative" | "busy" | "oof" | "workingElsewhere" | "unknown";
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
export type PhysicalAddressType = "unknown" | "home" | "business" | "other";
export type LocationUniqueIdType = "unknown" | "locationStore" | "directory" | "private" | "bing";
export type DayOfWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
export type AutomaticRepliesStatus = "disabled" | "alwaysEnabled" | "scheduled";
export type ExternalAudienceScope = "none" | "contactsOnly" | "all";
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
export type RecipientScopeType = "none" | "internal" | "external" | "externalPartner" | "externalNonPartner";
export type ExchangeIdFormat = "entryId" | "ewsId" | "immutableEntryId" | "restId" | "restImmutableEntryId";
export type TimeZoneStandard = "windows" | "iana";
export type BodyType = "text" | "html";
export type Importance = "low" | "normal" | "high";
export type InferenceClassificationType = "focused" | "other";
export type FollowupFlagStatus = "notFlagged" | "complete" | "flagged";
export type MeetingMessageType =
    | "none"
    | "meetingRequest"
    | "meetingCancelled"
    | "meetingAccepted"
    | "meetingTenativelyAccepted"
    | "meetingDeclined";
export type CalendarColor =
    | "lightBlue"
    | "lightGreen"
    | "lightOrange"
    | "lightGray"
    | "lightYellow"
    | "lightTeal"
    | "lightPink"
    | "lightBrown"
    | "lightRed"
    | "maxColor"
    | "auto";
export type ResponseType = "none" | "organizer" | "tentativelyAccepted" | "accepted" | "declined" | "notResponded";
export type Sensitivity = "normal" | "personal" | "private" | "confidential";
export type RecurrencePatternType =
    | "daily"
    | "weekly"
    | "absoluteMonthly"
    | "relativeMonthly"
    | "absoluteYearly"
    | "relativeYearly";
export type WeekIndex = "first" | "second" | "third" | "fourth" | "last";
export type RecurrenceRangeType = "endDate" | "noEnd" | "numbered";
export type EventType = "singleInstance" | "occurrence" | "exception" | "seriesMaster";
export type SelectionLikelihoodInfo = "notSpecified" | "high";
export type WebsiteType = "other" | "home" | "work" | "blog" | "profile";
export type CategoryColor =
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
    | "preset24"
    | "none";
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
export type InstallIntent = "available" | "required" | "uninstall" | "availableWithoutEnrollment";
export type MobileAppPublishingState = "notPublished" | "processing" | "published";
export type WindowsArchitecture = "none" | "x86" | "x64" | "arm" | "neutral";
export type ManagedAppAvailability = "global" | "lineOfBusiness";
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
export type WindowsDeviceType = "none" | "desktop" | "mobile" | "holographic" | "team";
export type VppTokenAccountType = "business" | "education";
export type MicrosoftStoreForBusinessLicenseType = "offline" | "online";
export type ComplianceStatus =
    | "unknown"
    | "notApplicable"
    | "compliant"
    | "remediated"
    | "nonCompliant"
    | "error"
    | "conflict"
    | "notAssigned";
export type MdmAppConfigKeyType = "stringType" | "integerType" | "realType" | "booleanType" | "tokenType";
export type InstallState = "notApplicable" | "installed" | "failed" | "notInstalled" | "uninstallFailed" | "unknown";
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
export type AppListType = "none" | "appsInListCompliant" | "appsNotInListCompliant";
export type AndroidRequiredPasswordType =
    | "deviceDefault"
    | "alphabetic"
    | "alphanumeric"
    | "alphanumericWithSymbols"
    | "lowSecurityBiometric"
    | "numeric"
    | "numericComplex"
    | "any";
export type WebBrowserCookieSettings =
    | "browserDefault"
    | "blockAlways"
    | "allowCurrentWebSite"
    | "allowFromWebsitesVisited"
    | "allowAlways";
export type AndroidWorkProfileRequiredPasswordType =
    | "deviceDefault"
    | "lowSecurityBiometric"
    | "required"
    | "atLeastNumeric"
    | "numericComplex"
    | "atLeastAlphabetic"
    | "atLeastAlphanumeric"
    | "alphanumericWithSymbols";
export type AndroidWorkProfileCrossProfileDataSharingType =
    | "deviceDefault"
    | "preventAny"
    | "allowPersonalToWork"
    | "noRestrictions";
export type AndroidWorkProfileDefaultAppPermissionPolicyType = "deviceDefault" | "prompt" | "autoGrant" | "autoDeny";
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
export type RatingAppsType = "allAllowed" | "allBlocked" | "agesAbove4" | "agesAbove9" | "agesAbove12" | "agesAbove17";
export type RequiredPasswordType = "deviceDefault" | "alphanumeric" | "numeric";
export type IosNotificationAlertType = "deviceDefault" | "banner" | "modal" | "none";
export type StateManagementSetting = "notConfigured" | "blocked" | "allowed";
export type FirewallPreSharedKeyEncodingMethodType = "deviceDefault" | "none" | "utF8";
export type FirewallCertificateRevocationListCheckMethodType = "deviceDefault" | "none" | "attempt" | "require";
export type FirewallPacketQueueingMethodType =
    | "deviceDefault"
    | "disabled"
    | "queueInbound"
    | "queueOutbound"
    | "queueBoth";
export type AppLockerApplicationControlType =
    | "notConfigured"
    | "enforceComponentsAndStoreApps"
    | "auditComponentsAndStoreApps"
    | "enforceComponentsStoreAppsAndSmartlocker"
    | "auditComponentsStoreAppsAndSmartlocker";
export type ApplicationGuardBlockFileTransferType =
    | "notConfigured"
    | "blockImageAndTextFile"
    | "blockImageFile"
    | "blockNone"
    | "blockTextFile";
export type ApplicationGuardBlockClipboardSharingType =
    | "notConfigured"
    | "blockBoth"
    | "blockHostToContainer"
    | "blockContainerToHost"
    | "blockNone";
export type BitLockerEncryptionMethod = "aesCbc128" | "aesCbc256" | "xtsAes128" | "xtsAes256";
export type DiagnosticDataSubmissionMode = "userDefined" | "none" | "basic" | "enhanced" | "full";
export type EdgeCookiePolicy = "userDefined" | "allow" | "blockThirdParty" | "blockAll";
export type VisibilitySetting = "notConfigured" | "hide" | "show";
export type DefenderThreatAction =
    | "deviceDefault"
    | "clean"
    | "quarantine"
    | "remove"
    | "allow"
    | "userDefined"
    | "block";
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
export type DefenderCloudBlockLevelType = "notConfigured" | "high" | "highPlus" | "zeroTolerance";
export type WindowsStartMenuAppListVisibilityType = "userDefined" | "collapse" | "remove" | "disableSettingsApp";
export type WindowsStartMenuModeType = "userDefined" | "fullScreen" | "nonFullScreen";
export type WindowsSpotlightEnablementSettings = "notConfigured" | "disabled" | "enabled";
export type AutomaticUpdateMode =
    | "userDefined"
    | "notifyDownload"
    | "autoInstallAtMaintenanceTime"
    | "autoInstallAndRebootAtMaintenanceTime"
    | "autoInstallAndRebootAtScheduledTime"
    | "autoInstallAndRebootWithoutEndUserControl";
export type SafeSearchFilterType = "userDefined" | "strict" | "moderate";
export type EdgeSearchEngineType = "default" | "bing";
export type PrereleaseFeatures = "userDefined" | "settingsOnly" | "settingsAndExperimentations" | "notAllowed";
export type EditionUpgradeLicenseType = "productKey" | "licenseFile";
export type WindowsDeliveryOptimizationMode =
    | "userDefined"
    | "httpOnly"
    | "httpWithPeeringNat"
    | "httpWithPeeringPrivateGroup"
    | "httpWithInternetPeering"
    | "simpleDownload"
    | "bypassMode";
export type SharedPCAccountDeletionPolicyType =
    | "immediate"
    | "diskSpaceThreshold"
    | "diskSpaceThresholdOrInactiveThreshold";
export type SharedPCAllowedAccountType = "guest" | "domain";
export type WindowsUpdateType =
    | "userDefined"
    | "all"
    | "businessReadyOnly"
    | "windowsInsiderBuildFast"
    | "windowsInsiderBuildSlow"
    | "windowsInsiderBuildRelease";
export type InternetSiteSecurityLevel = "userDefined" | "medium" | "mediumHigh" | "high";
export type SiteSecurityLevel = "userDefined" | "low" | "mediumLow" | "medium" | "mediumHigh" | "high";
export type WindowsUserAccountControlSettings =
    | "userDefined"
    | "alwaysNotify"
    | "notifyOnAppChanges"
    | "notifyOnAppChangesWithoutDimming"
    | "neverNotify";
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
export type WelcomeScreenMeetingInformation =
    | "userDefined"
    | "showOrganizerAndTimeOnly"
    | "showOrganizerAndTimeAndSubject";
export type DeviceComplianceActionType =
    | "noAction"
    | "notification"
    | "block"
    | "retire"
    | "wipe"
    | "removeResourceAccessProfiles"
    | "pushNotification";
export type DeviceThreatProtectionLevel = "unavailable" | "secured" | "low" | "medium" | "high" | "notSet";
export type PolicyPlatformType =
    | "android"
    | "iOS"
    | "macOS"
    | "windowsPhone81"
    | "windows81AndLater"
    | "windows10AndLater"
    | "androidWorkProfile"
    | "all";
export type IosUpdatesInstallStatus =
    | "success"
    | "available"
    | "idle"
    | "unknown"
    | "downloading"
    | "downloadFailed"
    | "downloadRequiresComputer"
    | "downloadInsufficientSpace"
    | "downloadInsufficientPower"
    | "downloadInsufficientNetwork"
    | "installing"
    | "installInsufficientSpace"
    | "installInsufficientPower"
    | "installPhoneCallInProgress"
    | "installFailed"
    | "notSupportedOperation"
    | "sharedDeviceUserLoggedInError";
export type DeviceManagementExchangeConnectorSyncType = "fullSync" | "deltaSync";
export type MdmAuthority = "unknown" | "intune" | "sccm" | "office365";
export type WindowsHelloForBusinessPinUsage = "allowed" | "required" | "disallowed";
export type Enablement = "notConfigured" | "enabled" | "disabled";
export type VppTokenState = "unknown" | "valid" | "expired" | "invalid" | "assignedToExternalMDM";
export type VppTokenSyncStatus = "none" | "inProgress" | "completed" | "failed";
export type DeviceManagementExchangeConnectorStatus = "none" | "connectionPending" | "connected" | "disconnected";
export type DeviceManagementExchangeConnectorType = "onPremises" | "hosted" | "serviceToService" | "dedicated";
export type MobileThreatPartnerTenantState = "unavailable" | "available" | "enabled" | "unresponsive";
export type DeviceManagementPartnerTenantState =
    | "unknown"
    | "unavailable"
    | "enabled"
    | "terminated"
    | "rejected"
    | "unresponsive";
export type DeviceManagementPartnerAppType = "unknown" | "singleTenantApp" | "multiTenantApp";
export type ActionState = "none" | "pending" | "canceled" | "active" | "done" | "failed" | "notSupported";
export type ManagedDeviceOwnerType = "unknown" | "company" | "personal";
export type ComplianceState =
    | "unknown"
    | "compliant"
    | "noncompliant"
    | "conflict"
    | "error"
    | "inGracePeriod"
    | "configManager";
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
    | "windowsCoManagement";
export type DeviceRegistrationState =
    | "notRegistered"
    | "registered"
    | "revoked"
    | "keyConflict"
    | "approvalPending"
    | "certificateReset"
    | "notRegisteredPendingEnrollment"
    | "unknown";
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
export type DeviceManagementSubscriptionState =
    | "pending"
    | "active"
    | "warning"
    | "disabled"
    | "deleted"
    | "blocked"
    | "lockedOut";
export type ManagedAppDataStorageLocation = "oneDriveForBusiness" | "sharePoint" | "localStorage";
export type ManagedAppDataTransferLevel = "allApps" | "managedApps" | "none";
export type ManagedAppClipboardSharingLevel = "allApps" | "managedAppsWithPasteIn" | "managedApps" | "blocked";
export type ManagedAppPinCharacterSet = "numeric" | "alphanumericAndSymbol";
export type ManagedAppDataEncryptionType =
    | "useDeviceSettings"
    | "afterDeviceRestart"
    | "whenDeviceLockedExceptOpenFiles"
    | "whenDeviceLocked";
export type WindowsInformationProtectionEnforcementLevel =
    | "noProtection"
    | "encryptAndAuditOnly"
    | "encryptAuditAndPrompt"
    | "encryptAuditAndBlock";
export type WindowsInformationProtectionPinCharacterRequirements = "notAllow" | "requireAtLeastOne" | "allow";
export type ManagedAppFlaggedReason = "none" | "rootedDevice";
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
export type PlannerPreviewType = "automatic" | "noPreview" | "checklist" | "description" | "reference";
export type OperationStatus = "NotStarted" | "Running" | "Completed" | "Failed";
export type OnenotePatchInsertPosition = "After" | "Before";
export type OnenotePatchActionType = "Replace" | "Append" | "Delete" | "Insert" | "Prepend";
export type OnenoteSourceService = "Unknown" | "OneDrive" | "OneDriveForBusiness" | "OnPremOneDriveForBusiness";
export type OnenoteUserRole = "Owner" | "Contributor" | "Reader" | "None";
export type DataPolicyOperationStatus = "notStarted" | "running" | "complete" | "failed" | "unknownFutureValue";
export type Status = "active" | "updated" | "deleted" | "ignored" | "unknownFutureValue";
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
    | "unknownFutureValue"
    | "unknown";
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
export type ChangeType = "created" | "updated" | "deleted";
export type MediaDirection = "inactive" | "sendOnly" | "receiveOnly" | "sendReceive";
export type MediaState = "active" | "inactive" | "unknownFutureValue";
export type Modality = "audio" | "video" | "videoBasedScreenSharing" | "data" | "unknownFutureValue";
export type RejectReason = "none" | "busy" | "forbidden" | "unknownFutureValue";
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
export type TeamVisibilityType = "private" | "public" | "hiddenMembership" | "unknownFutureValue";
export type ClonableTeamParts = "apps" | "tabs" | "settings" | "channels" | "members";
export type GiphyRatingType = "moderate" | "strict" | "unknownFutureValue";
export type TeamsAsyncOperationType =
    | "invalid"
    | "cloneTeam"
    | "archiveTeam"
    | "unarchiveTeam"
    | "createTeam"
    | "unknownFutureValue";
export type TeamsAsyncOperationStatus =
    | "invalid"
    | "notStarted"
    | "inProgress"
    | "succeeded"
    | "failed"
    | "unknownFutureValue";
export type TeamsAppDistributionMethod = "store" | "organization" | "sideloaded" | "unknownFutureValue";
export interface Entity {
    // Read-only.
    id?: string;
}
export interface DirectoryAudit extends Entity {
    /**
     * Indicates which resource category that's targeted by the activity. (For example: User Management, Group Management
     * etc..)
     */
    category?: string;
    /**
     * Indicates a unique ID that helps correlate activities that span across various services. Can be used to trace logs
     * across services.
     */
    correlationId?: string;
    // Indicates the result of the activity.Possible values are: success, failure, timeout, unknownFutureValue.
    result?: OperationResult;
    // Describes cause of 'failure' or 'timeout' results.
    resultReason?: string;
    /**
     * Indicates the activity name or the operation name (examples: 'Create User' and 'Add member to group'). For full list,
     * see Azure AD activity list.
     */
    activityDisplayName?: string;
    /**
     * Indicates the date and time the activity was performed. The Timestamp type is always in UTC time. For example, midnight
     * UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    activityDateTime?: string;
    /**
     * Indicates information on which service initiated the activity (For example: Self-service Password Management, Core
     * Directory, B2C, Invited Users, Microsoft Identity Manager, Privileged Identity Management.
     */
    loggedByService?: string;
    operationType?: string;
    // Indicates information about the user or app initiated the activity.
    initiatedBy?: AuditActivityInitiator;
    /**
     * Indicates information on which resource was changed due to the activity. Target Resource Type can be User, Device,
     * Directory, App, Role, Group, Policy or Other.
     */
    targetResources?: TargetResource[];
    // Indicates additional details on the activity.
    additionalDetails?: KeyValue[];
}
export interface SignIn extends Entity {
    // Date and time (UTC) the sign-in was initiated. Example: midnight on Jan 1, 2014 is reported as '2014-01-01T00:00:00Z'.
    createdDateTime?: string;
    // Display name of the user that initiated the sign-in.
    userDisplayName?: string;
    // User principal name of the user that initiated the sign-in.
    userPrincipalName?: string;
    // ID of the user that initiated the sign-in.
    userId?: string;
    // Unique GUID representing the app ID in the Azure Active Directory.
    appId?: string;
    // App name displayed in the Azure Portal.
    appDisplayName?: string;
    // IP address of the client used to sign in.
    ipAddress?: string;
    // Sign-in status. Possible values include Success and Failure.
    status?: SignInStatus;
    /**
     * Identifies the legacy client used for sign-in activity. Includes Browser, Exchange Active Sync, modern clients, IMAP,
     * MAPI, SMTP, and POP.
     */
    clientAppUsed?: string;
    // Device information from where the sign-in occurred; includes device ID, operating system, and browser.
    deviceDetail?: DeviceDetail;
    // Provides the city, state, and country code where the sign-in originated.
    location?: SignInLocation;
    // The request ID sent from the client when the sign-in is initiated; used to troubleshoot sign-in activity.
    correlationId?: string;
    /**
     * Reports status of an activated conditional access policy. Possible values are: success, failure, notApplied, and
     * unknownFutureValue.
     */
    conditionalAccessStatus?: ConditionalAccessStatus;
    appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicy[];
    // Indicates if a sign-in is interactive or not.
    isInteractive?: boolean;
    /**
     * Provides the 'reason' behind a specific state of a risky user, sign-in or a risk event. The possible values are: none,
     * adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset,
     * adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser,
     * adminConfirmedSigninCompromised, unknownFutureValue. The value none means that no action has been performed on the user
     * or sign-in so far. Note: Details for this property require an Azure AD Premium P2 license. Other licenses return the
     * value hidden.
     */
    riskDetail?: RiskDetail;
    /**
     * Aggregated risk level. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value
     * hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Note: Details for this property are
     * only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     */
    riskLevelAggregated?: RiskLevel;
    /**
     * Risk level during sign-in. The possible values are: none, low, medium, high, hidden, and unknownFutureValue. The value
     * hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Note: Details for this property are
     * only available for Azure AD Premium P2 customers. All other customers will be returned hidden.
     */
    riskLevelDuringSignIn?: RiskLevel;
    /**
     * Reports status of the risky user, sign-in, or a risk event. The possible values are: none, confirmedSafe, remediated,
     * dismissed, atRisk, confirmedCompromised, unknownFutureValue.
     */
    riskState?: RiskState;
    /**
     * Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress,
     * maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials,
     * investigationsThreatIntelligence, generic, and unknownFutureValue.
     */
    riskEventTypes?: RiskEventType[];
    // Name of the resource the user signed into.
    resourceDisplayName?: string;
    // ID of the resource that the user signed into.
    resourceId?: string;
}
export interface RestrictedSignIn extends SignIn {
    targetTenantId?: string;
}
export interface AuditLogRoot extends Entity {
    // Read-only. Nullable.
    signIns?: SignIn[];
    // Read-only. Nullable.
    directoryAudits?: DirectoryAudit[];
    restrictedSignIns?: RestrictedSignIn[];
}
// tslint:disable-next-line: interface-name
export interface Invitation extends Entity {
    // The display name of the user being invited.
    invitedUserDisplayName?: string;
    /**
     * The userType of the user being invited. By default, this is Guest. You can invite as Member if you are a company
     * administrator.
     */
    invitedUserType?: string;
    // The email address of the user being invited. Required.
    invitedUserEmailAddress?: string;
    /**
     * Additional configuration for the message being sent to the invited user, including customizing message text, language
     * and cc recipient list.
     */
    invitedUserMessageInfo?: InvitedUserMessageInfo;
    // Indicates whether an email should be sent to the user being invited or not. The default is false.
    sendInvitationMessage?: boolean;
    // The URL user should be redirected to once the invitation is redeemed. Required.
    inviteRedirectUrl?: string;
    // The URL user can use to redeem his invitation. Read-Only
    inviteRedeemUrl?: string;
    // The status of the invitation. Possible values: PendingAcceptance, Completed, InProgress, and Error
    status?: string;
    // The user created as part of the invitation creation. Read-Only
    invitedUser?: User;
}
export interface DirectoryObject extends Entity {
    deletedDateTime?: string;
}
export interface User extends DirectoryObject {
    // true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter.
    accountEnabled?: boolean;
    /**
     * Sets the age group of the user. Allowed values: null, minor, notAdult and adult. Refer to the legal age group property
     * definitions for further information.
     */
    ageGroup?: string;
    // The licenses that are assigned to the user. Not nullable.
    assignedLicenses?: AssignedLicense[];
    // The plans that are assigned to the user. Read-only. Not nullable.
    assignedPlans?: AssignedPlan[];
    /**
     * The telephone numbers for the user. NOTE: Although this is a string collection, only one number can be set for this
     * property.
     */
    businessPhones?: string[];
    // The city in which the user is located. Supports $filter.
    city?: string;
    /**
     * The company name which the user is associated. This property can be useful for describing the company that an external
     * user comes from.
     */
    companyName?: string;
    /**
     * Sets whether consent has been obtained for minors. Allowed values: null, granted, denied and notRequired. Refer to the
     * legal age group property definitions for further information.
     */
    consentProvidedForMinor?: string;
    // The country/region in which the user is located; for example, 'US' or 'UK'. Supports $filter.
    country?: string;
    // The name for the department in which the user works. Supports $filter.
    department?: string;
    /**
     * The name displayed in the address book for the user. This is usually the combination of the user's first name, middle
     * initial and last name. This property is required when a user is created and it cannot be cleared during updates.
     * Supports $filter and $orderby.
     */
    displayName?: string;
    // The employee identifier assigned to the user by the organization. Supports $filter.
    employeeId?: string;
    // The fax number of the user.
    faxNumber?: string;
    // The given name (first name) of the user. Supports $filter.
    givenName?: string;
    // The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only.
    imAddresses?: string[];
    // true if the user is a resource account; otherwise, false. Null value should be considered false.
    isResourceAccount?: boolean;
    // The user’s job title. Supports $filter.
    jobTitle?: string;
    /**
     * Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated
     * based on ageGroup and consentProvidedForMinor properties. Allowed values: null, minorWithOutParentalConsent,
     * minorWithParentalConsent, minorNoParentalConsentRequired, notAdult and adult. Refer to the legal age group property
     * definitions for further information.)
     */
    legalAgeGroupClassification?: string;
    // State of license assignments for this user. Read-only.
    licenseAssignmentStates?: LicenseAssignmentState[];
    // The SMTP address for the user, for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports $filter.
    mail?: string;
    // The mail alias for the user. This property must be specified when a user is created. Supports $filter.
    mailNickname?: string;
    // The primary cellular telephone number for the user.
    mobilePhone?: string;
    /**
     * Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who
     * are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
     */
    onPremisesDistinguishedName?: string;
    /**
     * Contains extensionAttributes 1-15 for the user. Note that the individual extension attributes are neither selectable
     * nor filterable. For an onPremisesSyncEnabled user, this set of properties is mastered on-premises and is read-only. For
     * a cloud-only user (where onPremisesSyncEnabled is false), these properties may be set during creation or update.
     */
    onPremisesExtensionAttributes?: OnPremisesExtensionAttributes;
    /**
     * This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This
     * property must be specified when creating a new user account in the Graph if you are using a federated domain for the
     * user’s userPrincipalName (UPN) property. Important: The $ and _ characters cannot be used when specifying this
     * property. Supports $filter.
     */
    onPremisesImmutableId?: string;
    /**
     * Indicates the last time at which the object was synced with the on-premises directory; for example:
     * '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in
     * UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only.
     */
    onPremisesLastSyncDateTime?: string;
    // Errors when using Microsoft synchronization product during provisioning.
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
    /**
     * Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud.
     * Read-only.
     */
    onPremisesSecurityIdentifier?: string;
    /**
     * true if this object is synced from an on-premises directory; false if this object was originally synced from an
     * on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory
     * (default). Read-only
     */
    onPremisesSyncEnabled?: boolean;
    /**
     * Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The
     * property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory
     * via Azure AD Connect. Read-only.
     */
    onPremisesDomainName?: string;
    /**
     * Contains the on-premises samAccountName synchronized from the on-premises directory. The property is only populated for
     * customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
     */
    onPremisesSamAccountName?: string;
    /**
     * Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated
     * for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.
     * Read-only.
     */
    onPremisesUserPrincipalName?: string;
    /**
     * A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com']. Supports
     * $filter.
     */
    otherMails?: string[];
    /**
     * Specifies password policies for the user. This value is an enumeration with one possible value being
     * 'DisableStrongPassword', which allows weaker passwords than the default policy to be specified.
     * 'DisablePasswordExpiration' can also be specified. The two may be specified together; for example:
     * 'DisablePasswordExpiration, DisableStrongPassword'.
     */
    passwordPolicies?: string;
    /**
     * Specifies the password profile for the user. The profile contains the user’s password. This property is required when a
     * user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies
     * property. By default, a strong password is required.
     */
    passwordProfile?: PasswordProfile;
    // The office location in the user's place of business.
    officeLocation?: string;
    /**
     * The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United
     * States of America, this attribute contains the ZIP code.
     */
    postalCode?: string;
    // The preferred language for the user. Should follow ISO 639-1 Code; for example 'en-US'.
    preferredLanguage?: string;
    // The plans that are provisioned for the user. Read-only. Not nullable.
    provisionedPlans?: ProvisionedPlan[];
    /**
     * For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'] The any operator is required for filter
     * expressions on multi-valued properties. Read-only, Not nullable. Supports $filter.
     */
    proxyAddresses?: string[];
    /**
     * true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as
     * true. For users invited through the invitation manager, this property will be set to false.
     */
    showInAddressList?: boolean;
    /**
     * Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get
     * an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as
     * Microsoft Graph). If this happens, the application will need to acquire a new refresh token by making a request to the
     * authorize endpoint. Read-only. Use revokeSignInSessions to reset.
     */
    signInSessionsValidFromDateTime?: string;
    // The state or province in the user's address. Supports $filter.
    state?: string;
    // The street address of the user's place of business.
    streetAddress?: string;
    // The user's surname (family name or last name). Supports $filter.
    surname?: string;
    /**
     * A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal
     * requirement to check for availability of services in countries. Examples include: 'US', 'JP', and 'GB'. Not nullable.
     * Supports $filter.
     */
    usageLocation?: string;
    /**
     * The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet
     * standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where
     * domain must be present in the tenant’s collection of verified domains. This property is required when a user is
     * created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.
     * Supports $filter and $orderby.
     */
    userPrincipalName?: string;
    /**
     * A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports
     * $filter.
     */
    userType?: string;
    /**
     * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to
     * incoming messages, locale and time zone.
     */
    mailboxSettings?: MailboxSettings;
    // The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
    deviceEnrollmentLimit?: number;
    // A freeform text entry field for the user to describe themselves.
    aboutMe?: string;
    /**
     * The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always
     * in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    birthday?: string;
    /**
     * The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always
     * in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    hireDate?: string;
    // A list for the user to describe their interests.
    interests?: string[];
    // The URL for the user's personal site.
    mySite?: string;
    // A list for the user to enumerate their past projects.
    pastProjects?: string[];
    // The preferred name for the user.
    preferredName?: string;
    // A list for the user to enumerate their responsibilities.
    responsibilities?: string[];
    // A list for the user to enumerate the schools they have attended.
    schools?: string[];
    // A list for the user to enumerate their skills.
    skills?: string[];
    // Devices that are owned by the user. Read-only. Nullable.
    ownedDevices?: DirectoryObject[];
    // Devices that are registered for the user. Read-only. Nullable.
    registeredDevices?: DirectoryObject[];
    // The user or contact that is this user’s manager. Read-only. (HTTP Methods: GET, PUT, DELETE.)
    manager?: DirectoryObject;
    /**
     * The users and contacts that report to the user. (The users and contacts that have their manager property set to this
     * user.) Read-only. Nullable.
     */
    directReports?: DirectoryObject[];
    // The groups and directory roles that the user is a member of. Read-only. Nullable.
    memberOf?: DirectoryObject[];
    // Directory objects that were created by the user. Read-only. Nullable.
    createdObjects?: DirectoryObject[];
    // Directory objects that are owned by the user. Read-only. Nullable.
    ownedObjects?: DirectoryObject[];
    // A collection of this user's license details. Read-only.
    licenseDetails?: LicenseDetails[];
    transitiveMemberOf?: DirectoryObject[];
    // Read-only.
    outlook?: OutlookUser;
    // The messages in a mailbox or folder. Read-only. Nullable.
    messages?: Message[];
    // The user's mail folders. Read-only. Nullable.
    mailFolders?: MailFolder[];
    // The user's primary calendar. Read-only.
    calendar?: Calendar;
    // The user's calendars. Read-only. Nullable.
    calendars?: Calendar[];
    // The user's calendar groups. Read-only. Nullable.
    calendarGroups?: CalendarGroup[];
    // The calendar view for the calendar. Read-only. Nullable.
    calendarView?: Event[];
    // The user's events. Default is to show Events under the Default Calendar. Read-only. Nullable.
    events?: Event[];
    // People that are relevant to the user. Read-only. Nullable.
    people?: Person[];
    // The user's contacts. Read-only. Nullable.
    contacts?: Contact[];
    // The user's contacts folders. Read-only. Nullable.
    contactFolders?: ContactFolder[];
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or
     * importance.
     */
    inferenceClassification?: InferenceClassification;
    // The user's profile photo. Read-only.
    photo?: ProfilePhoto;
    photos?: ProfilePhoto[];
    // The user's OneDrive. Read-only.
    drive?: Drive;
    // A collection of drives available for this user. Read-only.
    drives?: Drive[];
    // The collection of open extensions defined for the user. Read-only. Nullable.
    extensions?: Extension[];
    // The managed devices associated with the user.
    managedDevices?: ManagedDevice[];
    // Zero or more managed app registrations that belong to the user.
    managedAppRegistrations?: ManagedAppRegistration[];
    // The list of troubleshooting events for this user.
    deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEvent[];
    // Entry-point to the Planner resource that might exist for a user. Read-only.
    planner?: PlannerUser;
    insights?: OfficeGraphInsights;
    settings?: UserSettings;
    // Read-only.
    onenote?: Onenote;
    // The user's activities across devices. Read-only. Nullable.
    activities?: UserActivity[];
    onlineMeetings?: OnlineMeeting[];
    joinedTeams?: Group[];
}
export interface LicenseDetails extends Entity {
    // Information about the service plans assigned with the license. Read-only, Not nullable
    servicePlans?: ServicePlanInfo[];
    /**
     * Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object.
     * Read-only
     */
    skuId?: string;
    /**
     * Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'.
     * Read-only
     */
    skuPartNumber?: string;
}
export interface OutlookUser extends Entity {
    // A list of categories defined for the user.
    masterCategories?: OutlookCategory[];
}
export interface OutlookItem extends Entity {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    createdDateTime?: string;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    lastModifiedDateTime?: string;
    /**
     * Identifies the version of the item. Every time the item is changed, changeKey changes as well. This allows Exchange to
     * apply changes to the correct version of the object. Read-only.
     */
    changeKey?: string;
    // The categories associated with the item
    categories?: string[];
}
export interface Message extends OutlookItem {
    // The date and time the message was received.
    receivedDateTime?: string;
    // The date and time the message was sent.
    sentDateTime?: string;
    /**
     * Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message
     * contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body
     * property to look for a src attribute, such as &amp;lt;IMG src='cid:image001.jpg@01D26CD8.6C05F070'&amp;gt;.
     */
    hasAttachments?: boolean;
    // The message ID in the format specified by RFC2822.
    internetMessageId?: string;
    /**
     * A collection of message headers defined by RFC5322. The set includes message headers indicating the network path taken
     * by a message from the sender to the recipient. It can also contain custom message headers that hold app data for the
     * message. Returned only on applying a $select query option. Read-only.
     */
    internetMessageHeaders?: InternetMessageHeader[];
    // The subject of the message.
    subject?: string;
    // The body of the message. It can be in HTML or text format. Find out about safe HTML in a message body.
    body?: ItemBody;
    // The first 255 characters of the message body. It is in text format.
    bodyPreview?: string;
    // The importance of the message: Low, Normal, High.
    importance?: Importance;
    // The unique identifier for the message's parent mailFolder.
    parentFolderId?: string;
    /**
     * The account that is actually used to generate the message. In most cases, this value is the same as the from property.
     * You can set this property to a different value when sending a message from a shared mailbox, or sending a message as a
     * delegate. In any case, the value must correspond to the actual mailbox used. Find out more about setting the from and
     * sender properties of a message.
     */
    sender?: Recipient;
    /**
     * The mailbox owner and sender of the message. The value must correspond to the actual mailbox used. Find out more about
     * setting the from and sender properties of a message.
     */
    from?: Recipient;
    // The To: recipients for the message.
    toRecipients?: Recipient[];
    // The Cc: recipients for the message.
    ccRecipients?: Recipient[];
    // The Bcc: recipients for the message.
    bccRecipients?: Recipient[];
    // The email addresses to use when replying.
    replyTo?: Recipient[];
    // The ID of the conversation the email belongs to.
    conversationId?: string;
    /**
     * The part of the body of the message that is unique to the current message. uniqueBody is not returned by default but
     * can be retrieved for a given message by use of the ?$select=uniqueBody query. It can be in HTML or text format.
     */
    uniqueBody?: ItemBody;
    // Indicates whether a read receipt is requested for the message.
    isDeliveryReceiptRequested?: boolean;
    // Indicates whether a read receipt is requested for the message.
    isReadReceiptRequested?: boolean;
    // Indicates whether the message has been read.
    isRead?: boolean;
    // Indicates whether the message is a draft. A message is a draft if it hasn't been sent yet.
    isDraft?: boolean;
    /**
     * The URL to open the message in Outlook Web App.You can append an ispopout argument to the end of the URL to change how
     * the message is displayed. If ispopout is not present or if it is set to 1, then the message is shown in a popout
     * window. If ispopout is set to 0, then the browser will show the message in the Outlook Web App review pane.The message
     * will open in the browser if you are logged in to your mailbox via Outlook Web App. You will be prompted to login if you
     * are not already logged in with the browser.This URL can be accessed from within an iFrame.
     */
    webLink?: string;
    /**
     * The classification of the message for the user, based on inferred relevance or importance, or on an explicit override.
     * The possible values are: focused or other.
     */
    inferenceClassification?: InferenceClassificationType;
    // The flag value that indicates the status, start date, due date, or completion date for the message.
    flag?: FollowupFlag;
    // The collection of single-value extended properties defined for the message. Nullable.
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    // The collection of multi-value extended properties defined for the message. Nullable.
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    // The fileAttachment and itemAttachment attachments for the message.
    attachments?: Attachment[];
    // The collection of open extensions defined for the message. Nullable.
    extensions?: Extension[];
}
export interface MailFolder extends Entity {
    // The mailFolder's display name.
    displayName?: string;
    // The unique identifier for the mailFolder's parent mailFolder.
    parentFolderId?: string;
    // The number of immediate child mailFolders in the current mailFolder.
    childFolderCount?: number;
    // The number of items in the mailFolder marked as unread.
    unreadItemCount?: number;
    // The number of items in the mailFolder.
    totalItemCount?: number;
    // The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    // The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    // The collection of messages in the mailFolder.
    messages?: Message[];
    // The collection of rules that apply to the user's Inbox folder.
    messageRules?: MessageRule[];
    // The collection of child folders in the mailFolder.
    childFolders?: MailFolder[];
}
export interface Calendar extends Entity {
    // The calendar name.
    name?: string;
    /**
     * Specifies the color theme to distinguish the calendar from other calendars in a UI. The property values are:
     * LightBlue=0, LightGreen=1, LightOrange=2, LightGray=3, LightYellow=4, LightTeal=5, LightPink=6, LightBrown=7,
     * LightRed=8, MaxColor=9, Auto=-1
     */
    color?: CalendarColor;
    /**
     * Identifies the version of the calendar object. Every time the calendar is changed, changeKey changes as well. This
     * allows Exchange to apply changes to the correct version of the object. Read-only.
     */
    changeKey?: string;
    /**
     * True if the user has the permission to share the calendar, false otherwise. Only the user who created the calendar can
     * share it.
     */
    canShare?: boolean;
    // True if the user can read calendar items that have been marked private, false otherwise.
    canViewPrivateItems?: boolean;
    /**
     * True if the user can write to the calendar, false otherwise. This property is true for the user who created the
     * calendar. This property is also true for a user who has been shared a calendar and granted write access.
     */
    canEdit?: boolean;
    /**
     * If set, this represents the user who created or added the calendar. For a calendar that the user created or added, the
     * owner property is set to the user. For a calendar shared with the user, the owner property is set to the person who
     * shared that calendar with the user.
     */
    owner?: EmailAddress;
    // The collection of single-value extended properties defined for the calendar. Read-only. Nullable.
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    // The collection of multi-value extended properties defined for the calendar. Read-only. Nullable.
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    // The events in the calendar. Navigation property. Read-only.
    events?: Event[];
    // The calendar view for the calendar. Navigation property. Read-only.
    calendarView?: Event[];
}
export interface CalendarGroup extends Entity {
    // The group name.
    name?: string;
    // The class identifier. Read-only.
    classId?: string;
    /**
     * Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This
     * allows Exchange to apply changes to the correct version of the object. Read-only.
     */
    changeKey?: string;
    // The calendars in the calendar group. Navigation property. Read-only. Nullable.
    calendars?: Calendar[];
}
export interface Event extends OutlookItem {
    /**
     * The start time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a
     * legacy custom time zone was set in desktop Outlook.
     */
    originalStartTimeZone?: string;
    /**
     * The end time zone that was set when the event was created. A value of tzone://Microsoft/Custom indicates that a legacy
     * custom time zone was set in desktop Outlook.
     */
    originalEndTimeZone?: string;
    // Indicates the type of response sent in response to an event message.
    responseStatus?: ResponseStatus;
    // A unique identifier that is shared by all instances of an event across different calendars. Read-only.
    iCalUId?: string;
    // The number of minutes before the event start time that the reminder alert occurs.
    reminderMinutesBeforeStart?: number;
    // Set to true if an alert is set to remind the user of the event.
    isReminderOn?: boolean;
    // Set to true if the event has attachments.
    hasAttachments?: boolean;
    // The text of the event's subject line.
    subject?: string;
    // The body of the message associated with the event. It can be in HTML or text format.
    body?: ItemBody;
    // The preview of the message associated with the event. It is in text format.
    bodyPreview?: string;
    // The importance of the event. The possible values are: low, normal, high.
    importance?: Importance;
    // The possible values are: normal, personal, private, confidential.
    sensitivity?: Sensitivity;
    // The date, time, and time zone that the event starts. By default, the start time is in UTC.
    start?: DateTimeTimeZone;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    originalStart?: string;
    // The date, time, and time zone that the event ends. By default, the end time is in UTC.
    end?: DateTimeTimeZone;
    // The location of the event.
    location?: Location;
    /**
     * The locations where the event is held or attended from. The location and locations properties always correspond with
     * each other. If you update the location property, any prior locations in the locations collection would be removed and
     * replaced by the new location value.
     */
    locations?: Location[];
    // Set to true if the event lasts all day.
    isAllDay?: boolean;
    // Set to true if the event has been canceled.
    isCancelled?: boolean;
    // Set to true if the message sender is also the organizer.
    isOrganizer?: boolean;
    // The recurrence pattern for the event.
    recurrence?: PatternedRecurrence;
    // Set to true if the sender would like a response when the event is accepted or declined.
    responseRequested?: boolean;
    // The ID for the recurring series master item, if this event is part of a recurring series.
    seriesMasterId?: string;
    // The status to show. The possible values are: free, tentative, busy, oof, workingElsewhere, unknown.
    showAs?: FreeBusyStatus;
    // The event type. The possible values are: singleInstance, occurrence, exception, seriesMaster. Read-only.
    type?: EventType;
    // The collection of attendees for the event.
    attendees?: Attendee[];
    // The organizer of the event.
    organizer?: Recipient;
    /**
     * The URL to open the event in Outlook on the web.Outlook on the web opens the event in the browser if you are signed in
     * to your mailbox. Otherwise, Outlook on the web prompts you to sign in.This URL can be accessed from within an iFrame.
     */
    webLink?: string;
    /**
     * A URL for an online meeting. The property is set only when an organizer specifies an event as an online meeting such as
     * a Skype meeting. Read-only.
     */
    onlineMeetingUrl?: string;
    /**
     * The collection of fileAttachment and itemAttachment attachments for the event. Navigation property. Read-only.
     * Nullable.
     */
    attachments?: Attachment[];
    // The collection of single-value extended properties defined for the event. Read-only. Nullable.
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    // The collection of multi-value extended properties defined for the event. Read-only. Nullable.
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    // The calendar that contains the event. Navigation property. Read-only.
    calendar?: Calendar;
    // The instances of the event. Navigation property. Read-only. Nullable.
    instances?: Event[];
    // The collection of open extensions defined for the event. Read-only. Nullable.
    extensions?: Extension[];
}
export interface Person extends Entity {
    // The person's display name.
    displayName?: string;
    // The person's given name.
    givenName?: string;
    // The person's surname.
    surname?: string;
    // The person's birthday.
    birthday?: string;
    // Free-form notes that the user has taken about this person.
    personNotes?: string;
    // true if the user has flagged this person as a favorite.
    isFavorite?: boolean;
    // The person's email addresses.
    scoredEmailAddresses?: ScoredEmailAddress[];
    // The person's phone numbers.
    phones?: Phone[];
    // The person's addresses.
    postalAddresses?: Location[];
    // The person's websites.
    websites?: Website[];
    // The person's job title.
    jobTitle?: string;
    // The name of the person's company.
    companyName?: string;
    // The phonetic Japanese name of the person's company.
    yomiCompany?: string;
    // The person's department.
    department?: string;
    // The location of the person's office.
    officeLocation?: string;
    // The person's profession.
    profession?: string;
    // The type of person.
    personType?: PersonType;
    /**
     * The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the
     * Internet standard RFC 822. By convention, this should map to the person's email name. The general format is
     * alias@domain.
     */
    userPrincipalName?: string;
    // The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
    imAddress?: string;
}
export interface Contact extends OutlookItem {
    // The ID of the contact's parent folder.
    parentFolderId?: string;
    /**
     * The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in
     * UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    birthday?: string;
    // The name the contact is filed under.
    fileAs?: string;
    /**
     * The contact's display name. You can specify the display name in a create or update operation. Note that later updates
     * to other properties may cause an automatically generated value to overwrite the displayName value you have specified.
     * To preserve a pre-existing value, always include it as displayName in an update operation.
     */
    displayName?: string;
    // The contact's given name.
    givenName?: string;
    // The contact's initials.
    initials?: string;
    // The contact's middle name.
    middleName?: string;
    // The contact's nickname.
    nickName?: string;
    // The contact's surname.
    surname?: string;
    // The contact's title.
    title?: string;
    // The phonetic Japanese given name (first name) of the contact.
    yomiGivenName?: string;
    // The phonetic Japanese surname (last name) of the contact.
    yomiSurname?: string;
    // The phonetic Japanese company name of the contact.
    yomiCompanyName?: string;
    // The contact's generation.
    generation?: string;
    // The contact's email addresses.
    emailAddresses?: EmailAddress[];
    // The contact's instant messaging (IM) addresses.
    imAddresses?: string[];
    // The contact’s job title.
    jobTitle?: string;
    // The name of the contact's company.
    companyName?: string;
    // The contact's department.
    department?: string;
    // The location of the contact's office.
    officeLocation?: string;
    // The contact's profession.
    profession?: string;
    // The business home page of the contact.
    businessHomePage?: string;
    // The name of the contact's assistant.
    assistantName?: string;
    // The name of the contact's manager.
    manager?: string;
    // The contact's home phone numbers.
    homePhones?: string[];
    // The contact's mobile phone number.
    mobilePhone?: string;
    // The contact's business phone numbers.
    businessPhones?: string[];
    // The contact's home address.
    homeAddress?: PhysicalAddress;
    // The contact's business address.
    businessAddress?: PhysicalAddress;
    // Other addresses for the contact.
    otherAddress?: PhysicalAddress;
    // The name of the contact's spouse/partner.
    spouseName?: string;
    // The user's notes about the contact.
    personalNotes?: string;
    // The names of the contact's children.
    children?: string[];
    // The collection of single-value extended properties defined for the contact. Read-only. Nullable.
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    // The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    // Optional contact picture. You can get or set a photo for a contact.
    photo?: ProfilePhoto;
    // The collection of open extensions defined for the contact. Read-only. Nullable.
    extensions?: Extension[];
}
export interface ContactFolder extends Entity {
    // The ID of the folder's parent folder.
    parentFolderId?: string;
    // The folder's display name.
    displayName?: string;
    // The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    // The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    // The contacts in the folder. Navigation property. Read-only. Nullable.
    contacts?: Contact[];
    // The collection of child folders in the folder. Navigation property. Read-only. Nullable.
    childFolders?: ContactFolder[];
}
// tslint:disable-next-line: interface-name
export interface InferenceClassification extends Entity {
    /**
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other.
     * Read-only. Nullable.
     */
    overrides?: InferenceClassificationOverride[];
}
export interface ProfilePhoto extends Entity {
    // The height of the photo. Read-only.
    height?: number;
    // The width of the photo. Read-only.
    width?: number;
}
export interface BaseItem extends Entity {
    // Identity of the user, device, or application which created the item. Read-only.
    createdBy?: IdentitySet;
    // Date and time of item creation. Read-only.
    createdDateTime?: string;
    // Provides a user-visible description of the item. Optional.
    description?: string;
    // ETag for the item. Read-only.
    eTag?: string;
    // Identity of the user, device, and application which last modified the item. Read-only.
    lastModifiedBy?: IdentitySet;
    // Date and time the item was last modified. Read-only.
    lastModifiedDateTime?: string;
    // The name of the item. Read-write.
    name?: string;
    // Parent information, if the item has a parent. Read-write.
    parentReference?: ItemReference;
    // URL that displays the resource in the browser. Read-only.
    webUrl?: string;
    // Identity of the user who created the item. Read-only.
    createdByUser?: User;
    // Identity of the user who last modified the item. Read-only.
    lastModifiedByUser?: User;
}
export interface Drive extends BaseItem {
    /**
     * Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for
     * Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     */
    driveType?: string;
    // Optional. The user account that owns the drive. Read-only.
    owner?: IdentitySet;
    // Optional. Information about the drive's storage space quota. Read-only.
    quota?: Quota;
    sharePointIds?: SharepointIds;
    // If present, indicates that this is a system-managed drive. Read-only.
    system?: SystemFacet;
    // All items contained in the drive. Read-only. Nullable.
    items?: DriveItem[];
    // For drives in SharePoint, the underlying document library list. Read-only. Nullable.
    list?: List;
    // The root folder of the drive. Read-only.
    root?: DriveItem;
    // Collection of common folders available in OneDrive. Read-only. Nullable.
    special?: DriveItem[];
}
// tslint:disable-next-line: no-empty-interface
export interface Extension extends Entity {}
export interface ManagedDevice extends Entity {
    // Unique Identifier for the user associated with the device
    userId?: string;
    // Name of the device
    deviceName?: string;
    // Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal.
    managedDeviceOwnerType?: ManagedDeviceOwnerType;
    // List of ComplexType deviceActionResult objects.
    deviceActionResults?: DeviceActionResult[];
    // Enrollment time of the device.
    enrolledDateTime?: string;
    // The date and time that the device last completed a successful sync with Intune.
    lastSyncDateTime?: string;
    // Operating system of the device. Windows, iOS, etc.
    operatingSystem?: string;
    /**
     * Compliance state of the device. Possible values are: unknown, compliant, noncompliant, conflict, error, inGracePeriod,
     * configManager.
     */
    complianceState?: ComplianceState;
    // whether the device is jail broken or rooted.
    jailBroken?: string;
    /**
     * Management channel of the device. Intune, EAS, etc. Possible values are: eas, mdm, easMdm, intuneClient,
     * easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown,
     * jamf, googleCloudDevicePolicyController.
     */
    managementAgent?: ManagementAgentType;
    // Operating system version of the device.
    osVersion?: string;
    // Whether the device is Exchange ActiveSync activated.
    easActivated?: boolean;
    // Exchange ActiveSync Id of the device.
    easDeviceId?: string;
    // Exchange ActivationSync activation time of the device.
    easActivationDateTime?: string;
    // Whether the device is Azure Active Directory registered.
    azureADRegistered?: boolean;
    /**
     * Enrollment type of the device. Possible values are: unknown, userEnrollment, deviceEnrollmentManager,
     * appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment,
     * windowsBulkAzureDomainJoin, windowsCoManagement.
     */
    deviceEnrollmentType?: DeviceEnrollmentType;
    // Code that allows the Activation Lock on a device to be bypassed.
    activationLockBypassCode?: string;
    // Email(s) for the user associated with the device
    emailAddress?: string;
    // The unique identifier for the Azure Active Directory device. Read only.
    azureADDeviceId?: string;
    /**
     * Device registration state. Possible values are: notRegistered, registered, revoked, keyConflict, approvalPending,
     * certificateReset, notRegisteredPendingEnrollment, unknown.
     */
    deviceRegistrationState?: DeviceRegistrationState;
    // Device category display name
    deviceCategoryDisplayName?: string;
    // Device supervised status
    isSupervised?: boolean;
    // Last time the device contacted Exchange.
    exchangeLastSuccessfulSyncDateTime?: string;
    // The Access State of the device in Exchange. Possible values are: none, unknown, allowed, blocked, quarantined.
    exchangeAccessState?: DeviceManagementExchangeAccessState;
    /**
     * The reason for the device's access state in Exchange. Possible values are: none, unknown, exchangeGlobalRule,
     * exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other, compliant, notCompliant,
     * notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword,
     * deviceNotKnownWithManagedApp.
     */
    exchangeAccessStateReason?: DeviceManagementExchangeAccessStateReason;
    // Url that allows a Remote Assistance session to be established with the device.
    remoteAssistanceSessionUrl?: string;
    // An error string that identifies issues when creating Remote Assistance session objects.
    remoteAssistanceSessionErrorDetails?: string;
    // Device encryption status
    isEncrypted?: boolean;
    // Device user principal name
    userPrincipalName?: string;
    // Model of the device
    model?: string;
    // Manufacturer of the device
    manufacturer?: string;
    // IMEI
    imei?: string;
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string;
    // SerialNumber
    serialNumber?: string;
    // Phone number of the device
    phoneNumber?: string;
    // Android security patch level
    androidSecurityPatchLevel?: string;
    // User display name
    userDisplayName?: string;
    // ConfigrMgr client enabled features
    configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures;
    // Wi-Fi MAC
    wiFiMacAddress?: string;
    // The device health attestation state.
    deviceHealthAttestationState?: DeviceHealthAttestationState;
    // Subscriber Carrier
    subscriberCarrier?: string;
    // MEID
    meid?: string;
    // Total Storage in Bytes
    totalStorageSpaceInBytes?: number;
    // Free Storage in Bytes
    freeStorageSpaceInBytes?: number;
    // Automatically generated name to identify a device. Can be overwritten to a user friendly name.
    managedDeviceName?: string;
    /**
     * Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read
     * Only. Possible values are: unknown, activated, deactivated, secured, lowSeverity, mediumSeverity, highSeverity,
     * unresponsive, compromised, misconfigured.
     */
    partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState;
    // Device configuration states for this device.
    deviceConfigurationStates?: DeviceConfigurationState[];
    // Device compliance policy states for this device.
    deviceCompliancePolicyStates?: DeviceCompliancePolicyState[];
    // Device category
    deviceCategory?: DeviceCategory;
}
export interface ManagedAppRegistration extends Entity {
    // Date and time of creation
    createdDateTime?: string;
    // Date and time of last the app synced with management service.
    lastSyncDateTime?: string;
    // App version
    applicationVersion?: string;
    // App management SDK version
    managementSdkVersion?: string;
    // Operating System version
    platformVersion?: string;
    // Host device type
    deviceType?: string;
    /**
     * App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in
     * all conditions.
     */
    deviceTag?: string;
    // Host device name
    deviceName?: string;
    // Zero or more reasons an app registration is flagged. E.g. app running on rooted device
    flaggedReasons?: ManagedAppFlaggedReason[];
    // The user Id to who this app registration belongs.
    userId?: string;
    // The app package Identifier
    appIdentifier?: MobileAppIdentifier;
    // Version of the entity.
    version?: string;
    // Zero or more policys already applied on the registered app when it last synchronized with managment service.
    appliedPolicies?: ManagedAppPolicy[];
    // Zero or more policies admin intended for the app as of now.
    intendedPolicies?: ManagedAppPolicy[];
    // Zero or more long running operations triggered on the app registration.
    operations?: ManagedAppOperation[];
}
export interface DeviceManagementTroubleshootingEvent extends Entity {
    // Time when the event occurred .
    eventDateTime?: string;
    // Id used for tracing the failure in the service.
    correlationId?: string;
}
export interface PlannerUser extends Entity {
    // Read-only. Nullable. Returns the plannerPlans shared with the user.
    tasks?: PlannerTask[];
    // Read-only. Nullable. Returns the plannerTasks assigned to the user.
    plans?: PlannerPlan[];
}
export interface OfficeGraphInsights extends Entity {
    trending?: Trending[];
    shared?: SharedInsight[];
    used?: UsedInsight[];
}
export interface UserSettings extends Entity {
    contributionToContentDiscoveryDisabled?: boolean;
    contributionToContentDiscoveryAsOrganizationDisabled?: boolean;
}
export interface Onenote extends Entity {
    // The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
    notebooks?: Notebook[];
    // The sections in all OneNote notebooks that are owned by the user or group. Read-only. Nullable.
    sections?: OnenoteSection[];
    // The section groups in all OneNote notebooks that are owned by the user or group. Read-only. Nullable.
    sectionGroups?: SectionGroup[];
    // The pages in all OneNote notebooks that are owned by the user or group. Read-only. Nullable.
    pages?: OnenotePage[];
    /**
     * The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get
     * the binary content of a specific resource. Read-only. Nullable.
     */
    resources?: OnenoteResource[];
    /**
     * The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of
     * long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     */
    operations?: OnenoteOperation[];
}
export interface UserActivity extends Entity {
    // Required. The object containing information to render the activity in the UX.
    visualElements?: VisualInfo;
    /**
     * Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as
     * a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named
     * cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a
     * sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath.
     * You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file
     * and domain is needed for Word vs. PowerPoint.
     */
    activitySourceHost?: string;
    /**
     * Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a
     * web-based app if no native app exists.
     */
    activationUrl?: string;
    // Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter.
    appActivityId?: string;
    /**
     * Optional. Short text description of the app used to generate the activity for use in cases when the app is not
     * installed on the user’s local device.
     */
    appDisplayName?: string;
    /**
     * Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a
     * pointer to an item in an RSS feed).
     */
    contentUrl?: string;
    // Set by the server. DateTime in UTC when the object was created on the server.
    createdDateTime?: string;
    // Set by the server. DateTime in UTC when the object expired on the server.
    expirationDateTime?: string;
    // Optional. URL used to launch the activity in a web-based app, if available.
    fallbackUrl?: string;
    // Set by the server. DateTime in UTC when the object was modified on the server.
    lastModifiedDateTime?: string;
    /**
     * Optional. The timezone in which the user's device used to generate the activity was located at activity creation time;
     * values supplied as Olson IDs in order to support cross-platform representation.
     */
    userTimezone?: string;
    // Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax.
    contentInfo?: any;
    // Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
    status?: Status;
    // Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
    historyItems?: ActivityHistoryItem[];
}
export interface OnlineMeeting extends Entity {
    creationDateTime?: string;
    startDateTime?: string;
    endDateTime?: string;
    joinUrl?: string;
    subject?: string;
    participants?: MeetingParticipants;
    audioConferencing?: AudioConferencing;
    chatInfo?: ChatInfo;
    videoTeleconferenceId?: string;
}
export interface Group extends DirectoryObject {
    // The licenses that are assigned to the group. Returned only on $select. Read-only.
    assignedLicenses?: AssignedLicense[];
    /**
     * Describes a classification for the group (such as low, medium or high business impact). Valid values for this property
     * are defined by creating a ClassificationList setting value, based on the template definition.Returned by default.
     */
    classification?: string;
    /**
     * Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is
     * created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For
     * example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Returned by default. Read-only.
     */
    createdDateTime?: string;
    // An optional description for the group. Returned by default.
    description?: string;
    /**
     * The display name for the group. This property is required when a group is created and cannot be cleared during updates.
     * Returned by default. Supports $filter and $orderby.
     */
    displayName?: string;
    /**
     * Indicates whether there are members in this group that have license errors from its group-based license assignment.
     * This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have
     * members with license errors (that is, filter for this property being true). See an example.
     */
    hasMembersWithLicenseErrors?: boolean;
    /**
     * Specifies the group type and its membership. If the collection contains Unified then the group is an Office 365 group;
     * otherwise it's a security group. If the collection includes DynamicMembership, the group has dynamic membership;
     * otherwise, membership is static. Returned by default. Supports $filter.
     */
    groupTypes?: string[];
    /**
     * Indicates status of the group license assignment to all members of the group. Default value is false. Read-only.
     * Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete.Returned only on $select. Read-only.
     */
    licenseProcessingState?: LicenseProcessingState;
    /**
     * The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only.
     * Supports $filter.
     */
    mail?: string;
    // Specifies whether the group is mail-enabled. Returned by default.
    mailEnabled?: boolean;
    /**
     * The mail alias for the group, unique in the organization. This property must be specified when a group is created.
     * Returned by default. Supports $filter.
     */
    mailNickname?: string;
    /**
     * Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date
     * and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would
     * look like this: '2014-01-01T00:00:00Z'. Returned by default. Read-only. Supports $filter.
     */
    onPremisesLastSyncDateTime?: string;
    // Errors when using Microsoft synchronization product during provisioning. Returned by default.
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
    /**
     * Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud.
     * Returned by default. Read-only.
     */
    onPremisesSecurityIdentifier?: string;
    /**
     * true if this group is synced from an on-premises directory; false if this group was originally synced from an
     * on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory
     * (default). Returned by default. Read-only. Supports $filter.
     */
    onPremisesSyncEnabled?: boolean;
    // The preferred data location for the group. For more information, see OneDrive Online Multi-Geo. Returned by default.
    preferredDataLocation?: string;
    /**
     * Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp:
     * bob@sales.contoso.com']. The any operator is required to filter expressions on multi-valued properties. Returned by
     * default. Read-only. Not nullable. Supports $filter.
     */
    proxyAddresses?: string[];
    /**
     * Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew
     * service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC
     * time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Returned by default.
     * Read-only.
     */
    renewedDateTime?: string;
    // Specifies whether the group is a security group. Returned by default. Supports $filter.
    securityEnabled?: boolean;
    /**
     * Specifies the visibility of an Office 365 group. Possible values are: Private, Public, or Hiddenmembership; blank
     * values are treated as public. See group visibility options to learn more.Visibility can be set only when a group is
     * created; it is not editable.Visibility is supported only for unified groups; it is not supported for security groups.
     * Returned by default.
     */
    visibility?: string;
    /**
     * Indicates if people external to the organization can send messages to the group. Default value is false. Returned only
     * on $select.
     */
    allowExternalSenders?: boolean;
    /**
     * Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this
     * property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default
     * value is false. Returned only on $select.
     */
    autoSubscribeNewMembers?: boolean;
    /**
     * Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only
     * on $select.
     */
    isSubscribedByMail?: boolean;
    /**
     * Count of conversations that have received new posts since the signed-in user last visited the group. Returned only on
     * $select.
     */
    unseenCount?: number;
    isArchived?: boolean;
    /**
     * Users and groups that are members of this group. HTTP Methods: GET (supported for all groups), POST (supported for
     * Office 365 groups, security groups and mail-enabled security groups), DELETE (supported for Office 365 groups and
     * security groups) Nullable.
     */
    members?: DirectoryObject[];
    // Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable.
    memberOf?: DirectoryObject[];
    // A list of group members with license errors from this group-based license assignment. Read-only.
    membersWithLicenseErrors?: DirectoryObject[];
    transitiveMembers?: DirectoryObject[];
    transitiveMemberOf?: DirectoryObject[];
    // The user (or application) that created the group. NOTE: This is not set if the user is an administrator. Read-only.
    createdOnBehalfOf?: DirectoryObject;
    /**
     * The owners of the group. The owners are a set of non-admin users who are allowed to modify this object. Limited to 10
     * owners. HTTP Methods: GET (supported for all groups), POST (supported for Office 365 groups, security groups and
     * mail-enabled security groups), DELETE (supported for Office 365 groups and security groups). Nullable.
     */
    owners?: DirectoryObject[];
    // Read-only. Nullable.
    settings?: GroupSetting[];
    // The group's conversations.
    conversations?: Conversation[];
    // The profile photos owned by the group. Read-only. Nullable.
    photos?: ProfilePhoto[];
    /**
     * The list of users or groups that are allowed to create post's or calendar events in this group. If this list is
     * non-empty then only users or groups listed here are allowed to post.
     */
    acceptedSenders?: DirectoryObject[];
    // The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
    rejectedSenders?: DirectoryObject[];
    // The group's conversation threads. Nullable.
    threads?: ConversationThread[];
    // The group's calendar. Read-only.
    calendar?: Calendar;
    // The calendar view for the calendar. Read-only.
    calendarView?: Event[];
    // The group's calendar events.
    events?: Event[];
    // The group's profile photo
    photo?: ProfilePhoto;
    // The group's default drive. Read-only.
    drive?: Drive;
    // The group's drives. Read-only.
    drives?: Drive[];
    // The list of SharePoint sites in this group. Access the default site with /sites/root.
    sites?: Site[];
    // The collection of open extensions defined for the group. Read-only. Nullable.
    extensions?: Extension[];
    // The collection of lifecycle policies for this group. Read-only. Nullable.
    groupLifecyclePolicies?: GroupLifecyclePolicy[];
    // Entry-point to Planner resource that might exist for a Unified Group.
    planner?: PlannerGroup;
    // Read-only.
    onenote?: Onenote;
    team?: Team;
}
// tslint:disable-next-line: interface-name
export interface IdentityProvider extends Entity {
    type?: string;
    name?: string;
    clientId?: string;
    clientSecret?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface AdministrativeUnit extends DirectoryObject {}
export interface Directory extends Entity {
    // Recently deleted items. Read-only. Nullable.
    deletedItems?: DirectoryObject[];
}
export interface CertificateBasedAuthConfiguration extends Entity {
    // Collection of certificate authorities which creates a trusted certificate chain.
    certificateAuthorities?: CertificateAuthority[];
}
export interface OrgContact extends DirectoryObject {
    addresses?: PhysicalOfficeAddress[];
    companyName?: string;
    department?: string;
    displayName?: string;
    givenName?: string;
    jobTitle?: string;
    mail?: string;
    mailNickname?: string;
    onPremisesSyncEnabled?: boolean;
    onPremisesLastSyncDateTime?: string;
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
    phones?: Phone[];
    proxyAddresses?: string[];
    surname?: string;
    manager?: DirectoryObject;
    directReports?: DirectoryObject[];
    memberOf?: DirectoryObject[];
    transitiveMemberOf?: DirectoryObject[];
}
export interface Device extends DirectoryObject {
    // true if the account is enabled; otherwise, false. Required.
    accountEnabled?: boolean;
    // For internal use only. Not nullable.
    alternativeSecurityIds?: AlternativeSecurityId[];
    /**
     * The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only.
     */
    approximateLastSignInDateTime?: string;
    /**
     * The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information
     * using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'. Read-only.
     */
    complianceExpirationDateTime?: string;
    // Unique identifier set by Azure Device Registration Service at the time of registration.
    deviceId?: string;
    // For interal use only. Set to null.
    deviceMetadata?: string;
    // For interal use only.
    deviceVersion?: number;
    // The display name for the device. Required.
    displayName?: string;
    /**
     * true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be
     * updated by Intune for any device OS type or by an approved MDM app for Windows OS devices.
     */
    isCompliant?: boolean;
    /**
     * true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by
     * Intune for any device OS type or by an approved MDM app for Windows OS devices.
     */
    isManaged?: boolean;
    /**
     * The last time at which the object was synced with the on-premises directory.The Timestamp type represents date and time
     * information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like
     * this: '2014-01-01T00:00:00Z' Read-only.
     */
    onPremisesLastSyncDateTime?: string;
    /**
     * true if this object is synced from an on-premises directory; false if this object was originally synced from an
     * on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory
     * (default). Read-only.
     */
    onPremisesSyncEnabled?: boolean;
    // The type of operating system on the device. Required.
    operatingSystem?: string;
    // The version of the operating system on the device. Required.
    operatingSystemVersion?: string;
    // For interal use only. Not nullable.
    physicalIds?: string[];
    // The profile type of the device. Possible values:RegisteredDevice (default)SecureVMPrinterSharedIoT
    profileType?: string;
    // List of labels applied to the device by the system.
    systemLabels?: string[];
    /**
     * Type of trust for the joined device. Read-only. Possible values: Workplace - indicates bring your own personal
     * devicesAzureAd - Cloud only joined devicesServerAd - on-premises domain joined devices joined to Azure AD. For more
     * details, see Introduction to device management in Azure Active Directory
     */
    trustType?: string;
    // Groups that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable.
    memberOf?: DirectoryObject[];
    /**
     * The user that cloud joined the device or registered their personal device. The registered owner is set at the time of
     * registration. Currently, there can be only one owner. Read-only. Nullable.
     */
    registeredOwners?: DirectoryObject[];
    /**
     * Collection of registered users of the device. For cloud joined devices and registered personal devices, registered
     * users are set to the same value as registered owners at the time of registration. Read-only. Nullable.
     */
    registeredUsers?: DirectoryObject[];
    transitiveMemberOf?: DirectoryObject[];
    // The collection of open extensions defined for the device. Read-only. Nullable.
    extensions?: Extension[];
}
export interface DirectoryObjectPartnerReference extends DirectoryObject {
    // Description of the object returned. Read-only.
    description?: string;
    // Name of directory object being returned, like group or application. Read-only.
    displayName?: string;
    // The tenant identifier for the partner tenant. Read-only.
    externalPartnerTenantId?: string;
    // The type of the referenced object in the partner tenant. Read-only.
    objectType?: string;
}
export interface DirectoryRole extends DirectoryObject {
    // The description for the directory role. Read-only.
    description?: string;
    // The display name for the directory role. Read-only.
    displayName?: string;
    /**
     * The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a
     * directory role in a tenant with a POST operation. After the directory role has been activated, the property is read
     * only.
     */
    roleTemplateId?: string;
    // Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable.
    members?: DirectoryObject[];
}
export interface DirectoryRoleTemplate extends DirectoryObject {
    // The description to set for the directory role. Read-only.
    description?: string;
    // The display name to set for the directory role. Read-only.
    displayName?: string;
}
export interface Domain extends Entity {
    /**
     * Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed
     * indicates a cloud managed domain where Azure AD performs user authentication.Federated indicates authentication is
     * federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation
     * Services. This property is read-only and is not nullable.
     */
    authenticationType?: string;
    /**
     * This property is always null except when the verify action is used. When the verify action is used, a domain entity is
     * returned in the response. The availabilityStatus property of the domain entity in the response is either
     * AvailableImmediately or EmailVerifiedDomainTakeoverScheduled.
     */
    availabilityStatus?: string;
    /**
     * The value of the property is false if the DNS record management of the domain has been delegated to Office 365.
     * Otherwise, the value is true. Not nullable
     */
    isAdminManaged?: boolean;
    /**
     * True if this is the default domain that is used for user creation. There is only one default domain per company. Not
     * nullable
     */
    isDefault?: boolean;
    /**
     * True if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only
     * one initial domain per company. Not nullable
     */
    isInitial?: boolean;
    // True if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable
    isRoot?: boolean;
    // True if the domain has completed domain ownership verification. Not nullable
    isVerified?: boolean;
    /**
     * Specifies the number of days before a user receives notification that their password will expire. If the property is
     * not set, a default value of 14 days will be used.
     */
    passwordNotificationWindowInDays?: number;
    /**
     * Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default
     * value of 90 days will be used.
     */
    passwordValidityPeriodInDays?: number;
    /**
     * The capabilities assigned to the domain.Can include 0, 1 or more of following values: Email, Sharepoint,
     * EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic,
     * OrgIdAuthentication, Yammer, Intune The values which you can add/remove using Graph API include: Email,
     * OfficeCommunicationsOnline, YammerNot nullable
     */
    supportedServices?: string[];
    // Status of asynchronous operations scheduled for the domain.
    state?: DomainState;
    /**
     * DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online
     * services.Read-only, Nullable
     */
    serviceConfigurationRecords?: DomainDnsRecord[];
    /**
     * DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership
     * verification with Azure AD.Read-only, Nullable
     */
    verificationDnsRecords?: DomainDnsRecord[];
    // Read-only, Nullable
    domainNameReferences?: DirectoryObject[];
}
export interface DomainDnsRecord extends Entity {
    /**
     * If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate
     * correctly with the domain.
     */
    isOptional?: boolean;
    // Value used when configuring the name of the DNS record at the DNS host.
    label?: string;
    // Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, TxtKey
    recordType?: string;
    /**
     * Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null,
     * Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation,
     * SharePointPublic, OrgIdAuthentication, Yammer, Intune
     */
    supportedService?: string;
    // Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable
    ttl?: number;
}
export interface DomainDnsCnameRecord extends DomainDnsRecord {
    // The canonical name of the CNAME record. Used to configure the CNAME record at the DNS host.
    canonicalName?: string;
}
export interface DomainDnsMxRecord extends DomainDnsRecord {
    // Value used when configuring the answer/destination/value of the MX record at the DNS host.
    mailExchange?: string;
    // Value used when configuring the Preference/Priority property of the MX record at the DNS host.
    preference?: number;
}
export interface DomainDnsSrvRecord extends DomainDnsRecord {
    // Value to use when configuring the Target property of the SRV record at the DNS host.
    nameTarget?: string;
    // Value to use when configuring the port property of the SRV record at the DNS host.
    port?: number;
    // Value to use when configuring the priority property of the SRV record at the DNS host.
    priority?: number;
    // Value to use when configuring the protocol property of the SRV record at the DNS host.
    protocol?: string;
    // Value to use when configuring the service property of the SRV record at the DNS host.
    service?: string;
    // Value to use when configuring the weight property of the SRV record at the DNS host.
    weight?: number;
}
export interface DomainDnsTxtRecord extends DomainDnsRecord {
    // Value used when configuring the text property at the DNS host.
    text?: string;
}
export interface DomainDnsUnavailableRecord extends DomainDnsRecord {
    // Provides the reason why the DomainDnsUnavailableRecord entity is returned.
    description?: string;
}
export interface GroupSetting extends Entity {
    // Display name of this group of settings, which comes from the associated template.
    displayName?: string;
    // Unique identifier for the template used to create this group of settings. Read-only.
    templateId?: string;
    // Collection of name value pairs. Must contain and set all the settings defined in the template.
    values?: SettingValue[];
}
export interface Conversation extends Entity {
    // The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
    topic?: string;
    // Indicates whether any of the posts within this Conversation has at least one attachment.
    hasAttachments?: boolean;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    lastDeliveredDateTime?: string;
    // All the users that sent a message to this Conversation.
    uniqueSenders?: string[];
    // A short summary from the body of the latest post in this converstaion.
    preview?: string;
    // A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
    threads?: ConversationThread[];
}
export interface ConversationThread extends Entity {
    // The To: recipients for the thread.
    toRecipients?: Recipient[];
    // The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
    topic?: string;
    // Indicates whether any of the posts within this thread has at least one attachment.
    hasAttachments?: boolean;
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    lastDeliveredDateTime?: string;
    // All the users that sent a message to this thread.
    uniqueSenders?: string[];
    // The Cc: recipients for the thread.
    ccRecipients?: Recipient[];
    // A short summary from the body of the latest post in this converstaion.
    preview?: string;
    // Indicates if the thread is locked.
    isLocked?: boolean;
    // Read-only. Nullable.
    posts?: Post[];
}
export interface Site extends BaseItem {
    // The full title for the site. Read-only.
    displayName?: string;
    // If present, indicates that this is the root site in the site collection. Read-only.
    root?: Root;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: SharepointIds;
    // Provides details about the site's site collection. Available only on the root site. Read-only.
    siteCollection?: SiteCollection;
    // Analytics about the view activities that took place in this site.
    analytics?: ItemAnalytics;
    // The collection of column definitions reusable across lists under this site.
    columns?: ColumnDefinition[];
    // The collection of content types defined for this site.
    contentTypes?: ContentType[];
    // The default drive (document library) for this site.
    drive?: Drive;
    // The collection of drives (document libraries) under this site.
    drives?: Drive[];
    // Used to address any item contained in this site. This collection cannot be enumerated.
    items?: BaseItem[];
    // The collection of lists under this site.
    lists?: List[];
    // The collection of the sub-sites under this site.
    sites?: Site[];
    // Calls the OneNote service for notebook related operations.
    onenote?: Onenote;
}
export interface GroupLifecyclePolicy extends Entity {
    /**
     * Number of days before a group expires and needs to be renewed. Once renewed, the group expiration is extended by the
     * number of days defined.
     */
    groupLifetimeInDays?: number;
    // The group type for which the expiration policy applies. Possible values are All, Selected or None.
    managedGroupTypes?: string;
    /**
     * List of email address to send notifications for groups without owners. Multiple email address can be defined by
     * separating email address with a semicolon.
     */
    alternateNotificationEmails?: string;
}
export interface PlannerGroup extends Entity {
    // Read-only. Nullable. Returns the plannerPlans owned by the group.
    plans?: PlannerPlan[];
}
export interface Team extends Entity {
    /**
     * A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a
     * team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not
     * parsed.
     */
    webUrl?: string;
    /**
     * Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the
     * team.
     */
    memberSettings?: TeamMemberSettings;
    // Settings to configure whether guests can create, update, or delete channels in the team.
    guestSettings?: TeamGuestSettings;
    // Settings to configure messaging and mentions in the team.
    messagingSettings?: TeamMessagingSettings;
    // Settings to configure use of Giphy, memes, and stickers in the team.
    funSettings?: TeamFunSettings;
    // Whether this team is in read-only mode.
    isArchived?: boolean;
    // The collection of channels &amp; messages associated with the team.
    channels?: Channel[];
    // The apps installed in this team.
    installedApps?: TeamsAppInstallation[];
    operations?: TeamsAsyncOperation[];
}
export interface Contract extends DirectoryObject {
    /**
     * Type of contract.Possible values are: SyndicationPartner - Partner that exclusively resells and manages O365 and Intune
     * for this customer. They resell and support their customers. BreadthPartner - Partner has the ability to provide
     * administrative support for this customer. However, the partner is not allowed to resell to the customer.ResellerPartner
     * - Partner that is similar to a syndication partner, except that the partner doesn’t have exclusive access to a tenant.
     * In the syndication case, the customer cannot buy additional direct subscriptions from Microsoft or from other partners.
     */
    contractType?: string;
    /**
     * The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the
     * customer tenant's organization resource.
     */
    customerId?: string;
    /**
     * A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is
     * established. It is not automatically updated if the customer tenant's default domain name changes.
     */
    defaultDomainName?: string;
    /**
     * A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established.
     * It is not automatically updated if the customer tenant's display name changes.
     */
    displayName?: string;
}
export interface SubscribedSku extends Entity {
    // For example, 'Enabled'.
    capabilityStatus?: string;
    // The number of licenses that have been assigned.
    consumedUnits?: number;
    // Information about the number and status of prepaid licenses.
    prepaidUnits?: LicenseUnitsDetail;
    // Information about the service plans that are available with the SKU. Not nullable
    servicePlans?: ServicePlanInfo[];
    // The unique identifier (GUID) for the service SKU.
    skuId?: string;
    // The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'.
    skuPartNumber?: string;
    // For example, 'User' or 'Company'.
    appliesTo?: string;
}
export interface Organization extends DirectoryObject {
    // The collection of service plans associated with the tenant. Not nullable.
    assignedPlans?: AssignedPlan[];
    /**
     * Telephone number for the organization. NOTE: Although this is a string collection, only one number can be set for this
     * property.
     */
    businessPhones?: string[];
    // City name of the address for the organization.
    city?: string;
    // Country/region name of the address for the organization.
    country?: string;
    // Country/region abbreviation for the organization.
    countryLetterCode?: string;
    /**
     * Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the
     * organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in
     * UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only.
     */
    createdDateTime?: string;
    // The display name for the tenant.
    displayName?: string;
    // Not nullable.
    marketingNotificationEmails?: string[];
    /**
     * The time and date at which the tenant was last synced with the on-premise directory. The Timestamp type represents date
     * and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would
     * look like this: '2014-01-01T00:00:00Z'. Read-only.
     */
    onPremisesLastSyncDateTime?: string;
    /**
     * true if this object is synced from an on-premises directory; false if this object was originally synced from an
     * on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory
     * (default).
     */
    onPremisesSyncEnabled?: boolean;
    // Postal code of the address for the organization.
    postalCode?: string;
    // The preferred language for the organization. Should follow ISO 639-1 Code; for example 'en'.
    preferredLanguage?: string;
    // The privacy profile of an organization.
    privacyProfile?: PrivacyProfile;
    // Not nullable.
    provisionedPlans?: ProvisionedPlan[];
    securityComplianceNotificationMails?: string[];
    securityComplianceNotificationPhones?: string[];
    // State name of the address for the organization.
    state?: string;
    // Street name of the address for organization.
    street?: string;
    // Not nullable.
    technicalNotificationMails?: string[];
    // The collection of domains associated with this tenant. Not nullable.
    verifiedDomains?: VerifiedDomain[];
    // Mobile device management authority. Possible values are: unknown, intune, sccm, office365.
    mobileDeviceManagementAuthority?: MdmAuthority;
    /**
     * Navigation property to manage certificate-based authentication configuration. Only a single instance of
     * certificateBasedAuthConfiguration can be created in the collection.
     */
    certificateBasedAuthConfiguration?: CertificateBasedAuthConfiguration[];
    // The collection of open extensions defined for the organization. Read-only. Nullable.
    extensions?: Extension[];
}
export interface GroupSettingTemplate extends DirectoryObject {
    // Display name of the template.
    displayName?: string;
    // Description of the template.
    description?: string;
    /**
     * Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this
     * template.
     */
    values?: SettingTemplateValue[];
}
export interface EducationRoot extends Entity {
    // Read-only. Nullable.
    classes?: EducationClass[];
    // Read-only. Nullable.
    schools?: EducationSchool[];
    // Read-only. Nullable.
    users?: EducationUser[];
    // Read-only. Nullable.
    me?: EducationUser;
}
export interface EducationClass extends Entity {
    // Name of the class.
    displayName?: string;
    // Mail name for sending email to all members, if this is enabled.
    mailNickname?: string;
    // Description of the class.
    description?: string;
    // Entity who created the class
    createdBy?: IdentitySet;
    // Class code used by the school to identify the class.
    classCode?: string;
    // Name of the class in the syncing system.
    externalName?: string;
    // ID of the class from the syncing system.
    externalId?: string;
    // How this class was created. The possible values are: sis, manual, unknownFutureValue.
    externalSource?: EducationExternalSource;
    // Term for this class.
    term?: EducationTerm;
    // All schools that this class is associated with. Nullable.
    schools?: EducationSchool[];
    // All users in the class. Nullable.
    members?: EducationUser[];
    // All teachers in the class. Nullable.
    teachers?: EducationUser[];
    // The directory group corresponding to this class.
    group?: Group;
}
export interface EducationOrganization extends Entity {
    // Organization display name.
    displayName?: string;
    // Organization description.
    description?: string;
    // Source where this organization was created from. The possible values are: sis, manual, unknownFutureValue.
    externalSource?: EducationExternalSource;
}
export interface EducationSchool extends EducationOrganization {
    // Email address of the principal.
    principalEmail?: string;
    // Name of the principal.
    principalName?: string;
    // ID of principal in syncing system.
    externalPrincipalId?: string;
    // Lowest grade taught.
    lowestGrade?: string;
    // Highest grade taught.
    highestGrade?: string;
    // School Number.
    schoolNumber?: string;
    // ID of school in syncing system.
    externalId?: string;
    // Phone number of school.
    phone?: string;
    fax?: string;
    // Entity who created the school.
    createdBy?: IdentitySet;
    // Address of the school.
    address?: PhysicalAddress;
    // Classes taught at the school. Nullable.
    classes?: EducationClass[];
    // Users in the school. Nullable.
    users?: EducationUser[];
}
export interface EducationUser extends Entity {
    /**
     * Default role for a user. The user's role might be different in an individual class. The possible values are: student,
     * teacher. Supports $filter.
     */
    primaryRole?: EducationUserRole;
    // The middle name of user.
    middleName?: string;
    // Where this user was created from. The possible values are: sis, manual.
    externalSource?: EducationExternalSource;
    // Address where user lives.
    residenceAddress?: PhysicalAddress;
    // Mail address of user.
    mailingAddress?: PhysicalAddress;
    // If the primary role is student, this block will contain student specific data.
    student?: EducationStudent;
    // If the primary role is teacher, this block will contain teacher specific data.
    teacher?: EducationTeacher;
    // Entity who created the user.
    createdBy?: IdentitySet;
    // True if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter.
    accountEnabled?: boolean;
    // The licenses that are assigned to the user. Not nullable.
    assignedLicenses?: AssignedLicense[];
    // The plans that are assigned to the user. Read-only. Not nullable.
    assignedPlans?: AssignedPlan[];
    /**
     * The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this
     * property.
     */
    businessPhones?: string[];
    // The name for the department in which the user works. Supports $filter.
    department?: string;
    /**
     * The name displayed in the address book for the user. This is usually the combination of the user's first name, middle
     * initial, and last name. This property is required when a user is created and it cannot be cleared during updates.
     * Supports $filter and $orderby.
     */
    displayName?: string;
    // The given name (first name) of the user. Supports $filter.
    givenName?: string;
    // The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports $filter.
    mail?: string;
    // The mail alias for the user. This property must be specified when a user is created. Supports $filter.
    mailNickname?: string;
    // The primary cellular telephone number for the user.
    mobilePhone?: string;
    /**
     * Specifies password policies for the user. This value is an enumeration with one possible value being
     * 'DisableStrongPassword', which allows weaker passwords than the default policy to be specified.
     * 'DisablePasswordExpiration' can also be specified. The two can be specified together; for example:
     * 'DisablePasswordExpiration, DisableStrongPassword'.
     */
    passwordPolicies?: string;
    /**
     * Specifies the password profile for the user. The profile contains the user’s password. This property is required when a
     * user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies
     * property. By default, a strong password is required.
     */
    passwordProfile?: PasswordProfile;
    officeLocation?: string;
    // The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'.
    preferredLanguage?: string;
    // The plans that are provisioned for the user. Read-only. Not nullable.
    provisionedPlans?: ProvisionedPlan[];
    refreshTokensValidFromDateTime?: string;
    showInAddressList?: boolean;
    // The user's surname (family name or last name). Supports $filter.
    surname?: string;
    /**
     * A two-letter country code (ISO standard 3166). Required for users who will be assigned licenses due to a legal
     * requirement to check for availability of services in countries or regions. Examples include: 'US', 'JP', and 'GB'. Not
     * nullable. Supports $filter.
     */
    usageLocation?: string;
    /**
     * The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet
     * standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where
     * domain must be present in the tenant’s collection of verified domains. This property is required when a user is
     * created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.
     * Supports $filter and $orderby.
     */
    userPrincipalName?: string;
    /**
     * A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports
     * $filter.
     */
    userType?: string;
    // Schools to which the user belongs. Nullable.
    schools?: EducationSchool[];
    // Classes to which the user belongs. Nullable.
    classes?: EducationClass[];
    // The directory user corresponding to this user.
    user?: User;
}
// tslint:disable-next-line: interface-name
export interface ItemAnalytics extends Entity {
    itemActivityStats?: ItemActivityStat[];
    allTime?: ItemActivityStat;
    lastSevenDays?: ItemActivityStat;
}
export interface ColumnDefinition extends Entity {
    // This column stores boolean values.
    boolean?: BooleanColumn;
    // This column's data is calculated based on other columns.
    calculated?: CalculatedColumn;
    // This column stores data from a list of choices.
    choice?: ChoiceColumn;
    // For site columns, the name of the group this column belongs to. Helps organize related columns.
    columnGroup?: string;
    // This column stores currency values.
    currency?: CurrencyColumn;
    // This column stores DateTime values.
    dateTime?: DateTimeColumn;
    // The default value for this column.
    defaultValue?: DefaultColumnValue;
    // The user-facing description of the column.
    description?: string;
    // The user-facing name of the column.
    displayName?: string;
    // If true, no two list items may have the same value for this column.
    enforceUniqueValues?: boolean;
    // Specifies whether the column is displayed in the user interface.
    hidden?: boolean;
    // Specifies whether the column values can used for sorting and searching.
    indexed?: boolean;
    // This column's data is looked up from another source in the site.
    lookup?: LookupColumn;
    /**
     * The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see
     * displayName.
     */
    name?: string;
    // This column stores number values.
    number?: NumberColumn;
    // This column stores Person or Group values.
    personOrGroup?: PersonOrGroupColumn;
    // Specifies whether the column values can be modified.
    readOnly?: boolean;
    // Specifies whether the column value is not optional.
    required?: boolean;
    // This column stores text values.
    text?: TextColumn;
}
export interface ContentType extends Entity {
    // The descriptive text for the item.
    description?: string;
    // The name of the group this content type belongs to. Helps organize related content types.
    group?: string;
    // Indicates whether the content type is hidden in the list's 'New' menu.
    hidden?: boolean;
    /**
     * If this content type is inherited from another scope (like a site), provides a reference to the item where the content
     * type is defined.
     */
    inheritedFrom?: ItemReference;
    // The name of the content type.
    name?: string;
    // Specifies the order in which the content type appears in the selection UI.
    order?: ContentTypeOrder;
    // The unique identifier of the content type.
    parentId?: string;
    // If true, the content type cannot be modified unless this value is first set to false.
    readOnly?: boolean;
    /**
     * If true, the content type cannot be modified by users or through push-down operations. Only site collection
     * administrators can seal or unseal content types.
     */
    sealed?: boolean;
    // The collection of columns that are required by this content type
    columnLinks?: ColumnLink[];
}
export interface List extends BaseItem {
    // The displayable title of the list.
    displayName?: string;
    // Provides additional details about the list.
    list?: ListInfo;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: SharepointIds;
    // If present, indicates that this is a system-managed list. Read-only.
    system?: SystemFacet;
    // The collection of field definitions for this list.
    columns?: ColumnDefinition[];
    // The collection of content types present in this list.
    contentTypes?: ContentType[];
    // Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
    drive?: Drive;
    // All items contained in the list.
    items?: ListItem[];
}
export interface ListItem extends BaseItem {
    // The content type of this list item
    contentType?: ContentTypeInfo;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: SharepointIds;
    // Analytics about the view activities that took place on this item.
    analytics?: ItemAnalytics;
    // For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
    driveItem?: DriveItem;
    // The values of the columns set on this list item.
    fields?: FieldValueSet;
    // The list of previous versions of the list item.
    versions?: ListItemVersion[];
}
export interface DriveItem extends BaseItem {
    // Audio metadata, if the item is an audio file. Read-only.
    audio?: Audio;
    // The content stream, if the item represents a file.
    content?: any;
    /**
     * An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is
     * not returned if the item is a folder. Read-only.
     */
    cTag?: string;
    // Information about the deleted state of the item. Read-only.
    deleted?: Deleted;
    // File metadata, if the item is a file. Read-only.
    file?: File;
    // File system information on client. Read-write.
    fileSystemInfo?: FileSystemInfo;
    // Folder metadata, if the item is a folder. Read-only.
    folder?: Folder;
    // Image metadata, if the item is an image. Read-only.
    image?: Image;
    // Location metadata, if the item has location data. Read-only.
    location?: GeoCoordinates;
    /**
     * If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some
     * contexts and folders in others. Read-only.
     */
    package?: Package;
    // Photo metadata, if the item is a photo. Read-only.
    photo?: Photo;
    /**
     * Provides information about the published or checked-out state of an item, in locations that support such actions. This
     * property is not returned by default. Read-only.
     */
    publication?: PublicationFacet;
    // Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
    remoteItem?: RemoteItem;
    // If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
    root?: Root;
    // Search metadata, if the item is from a search result. Read-only.
    searchResult?: SearchResult;
    /**
     * Indicates that the item has been shared with others and provides information about the shared state of the item.
     * Read-only.
     */
    shared?: Shared;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: SharepointIds;
    // Size of the item in bytes. Read-only.
    size?: number;
    // If the current item is also available as a special folder, this facet is returned. Read-only.
    specialFolder?: SpecialFolder;
    // Video metadata, if the item is a video. Read-only.
    video?: Video;
    // WebDAV compatible URL for the item.
    webDavUrl?: string;
    // For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
    workbook?: Workbook;
    // Analytics about the view activities that took place on this item.
    analytics?: ItemAnalytics;
    /**
     * Collection containing Item objects for the immediate children of Item. Only items representing folders have children.
     * Read-only. Nullable.
     */
    children?: DriveItem[];
    // For drives in SharePoint, the associated document library list item. Read-only. Nullable.
    listItem?: ListItem;
    // The set of permissions for the item. Read-only. Nullable.
    permissions?: Permission[];
    // The set of subscriptions on the item. Only supported on the root of a drive.
    subscriptions?: Subscription[];
    /**
     * Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][].
     * Read-only. Nullable.
     */
    thumbnails?: ThumbnailSet[];
    // The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
    versions?: DriveItemVersion[];
}
export interface Workbook extends Entity {
    application?: WorkbookApplication;
    // Represents a collection of workbook scoped named items (named ranges and constants). Read-only.
    names?: WorkbookNamedItem[];
    // Represents a collection of tables associated with the workbook. Read-only.
    tables?: WorkbookTable[];
    // Represents a collection of worksheets associated with the workbook. Read-only.
    worksheets?: WorkbookWorksheet[];
    comments?: WorkbookComment[];
    functions?: WorkbookFunctions;
}
export interface Permission extends Entity {
    // For user type permissions, the details of the users &amp; applications for this permission. Read-only.
    grantedTo?: IdentitySet;
    // Provides a reference to the ancestor of the current permission, if it is inherited from an ancestor. Read-only.
    inheritedFrom?: ItemReference;
    // Details of any associated sharing invitation for this permission. Read-only.
    invitation?: SharingInvitation;
    // Provides the link details of the current permission, if it is a link type permissions. Read-only.
    link?: SharingLink;
    // The type of permission, e.g. read. See below for the full list of roles. Read-only.
    roles?: string[];
    // A unique token that can be used to access this shared item via the **shares** API. Read-only.
    shareId?: string;
}
export interface Subscription extends Entity {
    /**
     * Required. Specifies the resource that will be monitored for changes. Do not include the base URL
     * (https://graph.microsoft.com/v1.0/).
     */
    resource?: string;
    /**
     * Required. Indicates the type of change in the subscribed resource that will raise a notification. The supported values
     * are: created, updated, deleted. Multiple values can be combined using a comma-separated list.Note: Drive root item
     * notifications support only the updated changeType. User and group notifications support updated and deleted changeType.
     */
    changeType?: string;
    /**
     * Optional. Specifies the value of the clientState property sent by the service in each notification. The maximum length
     * is 128 characters. The client can check that the notification came from the service by comparing the value of the
     * clientState property sent with the subscription with the value of the clientState property received with each
     * notification.
     */
    clientState?: string;
    // Required. The URL of the endpoint that will receive the notifications. This URL must make use of the HTTPS protocol.
    notificationUrl?: string;
    /**
     * Required. Specifies the date and time when the webhook subscription expires. The time is in UTC, and can be an amount
     * of time from subscription creation that varies for the resource subscribed to. See the table below for maximum
     * supported subscription length of time.
     */
    expirationDateTime?: string;
    // Identifier of the application used to create the subscription. Read-only.
    applicationId?: string;
    /**
     * Identifier of the user or service principal that created the subscription. If the app used delegated permissions to
     * create the subscription, this field contains the id of the signed-in user the app called on behalf of. If the app used
     * application permissions, this field contains the id of the service principal corresponding to the app. Read-only.
     */
    creatorId?: string;
}
export interface ThumbnailSet extends Entity {
    // A 1920x1920 scaled thumbnail.
    large?: Thumbnail;
    // A 176x176 scaled thumbnail.
    medium?: Thumbnail;
    // A 48x48 cropped thumbnail.
    small?: Thumbnail;
    // A custom thumbnail image or the original image used to generate other thumbnails.
    source?: Thumbnail;
}
export interface BaseItemVersion extends Entity {
    // Identity of the user which last modified the version. Read-only.
    lastModifiedBy?: IdentitySet;
    // Date and time the version was last modified. Read-only.
    lastModifiedDateTime?: string;
    // Indicates the publication status of this particular version. Read-only.
    publication?: PublicationFacet;
}
export interface DriveItemVersion extends BaseItemVersion {
    // The content stream for this version of the item.
    content?: any;
    // Indicates the size of the content stream for this version of the item.
    size?: number;
}
export interface WorkbookApplication extends Entity {
    calculationMode?: string;
}
export interface WorkbookNamedItem extends Entity {
    // Represents the comment associated with this name.
    comment?: string;
    // The name of the object. Read-only.
    name?: string;
    // Indicates whether the name is scoped to the workbook or to a specific worksheet. Read-only.
    scope?: string;
    /**
     * Indicates what type of reference is associated with the name. The possible values are: String, Integer, Double,
     * Boolean, Range. Read-only.
     */
    type?: string;
    // Represents the formula that the name is defined to refer to. E.g. =Sheet14!$B$2:$H$12, =4.75, etc. Read-only.
    value?: any;
    // Specifies whether the object is visible or not.
    visible?: boolean;
    /**
     * Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet.
     * Read-only.
     */
    worksheet?: WorkbookWorksheet;
}
export interface WorkbookTable extends Entity {
    // Indicates whether the first column contains special formatting.
    highlightFirstColumn?: boolean;
    // Indicates whether the last column contains special formatting.
    highlightLastColumn?: boolean;
    /**
     * Legacy Id used in older Excle clients. The value of the identifier remains the same even when the table is renamed.
     * This property should be interpreted as an opaque string value and should not be parsed to any other type. Read-only.
     */
    legacyId?: string;
    // Name of the table.
    name?: string;
    /**
     * Indicates whether the columns show banded formatting in which odd columns are highlighted differently from even ones to
     * make reading the table easier.
     */
    showBandedColumns?: boolean;
    /**
     * Indicates whether the rows show banded formatting in which odd rows are highlighted differently from even ones to make
     * reading the table easier.
     */
    showBandedRows?: boolean;
    /**
     * Indicates whether the filter buttons are visible at the top of each column header. Setting this is only allowed if the
     * table contains a header row.
     */
    showFilterButton?: boolean;
    // Indicates whether the header row is visible or not. This value can be set to show or remove the header row.
    showHeaders?: boolean;
    // Indicates whether the total row is visible or not. This value can be set to show or remove the total row.
    showTotals?: boolean;
    /**
     * Constant value that represents the Table style. The possible values are: TableStyleLight1 thru TableStyleLight21,
     * TableStyleMedium1 thru TableStyleMedium28, TableStyleStyleDark1 thru TableStyleStyleDark11. A custom user-defined style
     * present in the workbook can also be specified.
     */
    style?: string;
    // Represents a collection of all the columns in the table. Read-only.
    columns?: WorkbookTableColumn[];
    // Represents a collection of all the rows in the table. Read-only.
    rows?: WorkbookTableRow[];
    // Represents the sorting for the table. Read-only.
    sort?: WorkbookTableSort;
    // The worksheet containing the current table. Read-only.
    worksheet?: WorkbookWorksheet;
}
export interface WorkbookWorksheet extends Entity {
    // The display name of the worksheet.
    name?: string;
    // The zero-based position of the worksheet within the workbook.
    position?: number;
    // The Visibility of the worksheet. The possible values are: Visible, Hidden, VeryHidden.
    visibility?: string;
    // Returns collection of charts that are part of the worksheet. Read-only.
    charts?: WorkbookChart[];
    // Returns collection of names that are associated with the worksheet. Read-only.
    names?: WorkbookNamedItem[];
    // Collection of PivotTables that are part of the worksheet.
    pivotTables?: WorkbookPivotTable[];
    // Returns sheet protection object for a worksheet. Read-only.
    protection?: WorkbookWorksheetProtection;
    // Collection of tables that are part of the worksheet. Read-only.
    tables?: WorkbookTable[];
}
export interface WorkbookComment extends Entity {
    // The content of comment.
    content?: string;
    // Indicates the type for the comment.
    contentType?: string;
    // Read-only. Nullable.
    replies?: WorkbookCommentReply[];
}
// tslint:disable-next-line: no-empty-interface
export interface WorkbookFunctions extends Entity {}
export interface WorkbookChart extends Entity {
    // Represents the height, in points, of the chart object.
    height?: number;
    // The distance, in points, from the left side of the chart to the worksheet origin.
    left?: number;
    // Represents the name of a chart object.
    name?: string;
    /**
     * Represents the distance, in points, from the top edge of the object to the top of row 1 (on a worksheet) or the top of
     * the chart area (on a chart).
     */
    top?: number;
    // Represents the width, in points, of the chart object.
    width?: number;
    // Represents chart axes. Read-only.
    axes?: WorkbookChartAxes;
    // Represents the datalabels on the chart. Read-only.
    dataLabels?: WorkbookChartDataLabels;
    // Encapsulates the format properties for the chart area. Read-only.
    format?: WorkbookChartAreaFormat;
    // Represents the legend for the chart. Read-only.
    legend?: WorkbookChartLegend;
    // Represents either a single series or collection of series in the chart. Read-only.
    series?: WorkbookChartSeries[];
    /**
     * Represents the title of the specified chart, including the text, visibility, position and formating of the title.
     * Read-only.
     */
    title?: WorkbookChartTitle;
    // The worksheet containing the current chart. Read-only.
    worksheet?: WorkbookWorksheet;
}
export interface WorkbookChartAxes extends Entity {
    // Represents the category axis in a chart. Read-only.
    categoryAxis?: WorkbookChartAxis;
    // Represents the series axis of a 3-dimensional chart. Read-only.
    seriesAxis?: WorkbookChartAxis;
    // Represents the value axis in an axis. Read-only.
    valueAxis?: WorkbookChartAxis;
}
export interface WorkbookChartDataLabels extends Entity {
    /**
     * DataLabelPosition value that represents the position of the data label. The possible values are: None, Center,
     * InsideEnd, InsideBase, OutsideEnd, Left, Right, Top, Bottom, BestFit, Callout.
     */
    position?: string;
    // String representing the separator used for the data labels on a chart.
    separator?: string;
    // Boolean value representing if the data label bubble size is visible or not.
    showBubbleSize?: boolean;
    // Boolean value representing if the data label category name is visible or not.
    showCategoryName?: boolean;
    // Boolean value representing if the data label legend key is visible or not.
    showLegendKey?: boolean;
    // Boolean value representing if the data label percentage is visible or not.
    showPercentage?: boolean;
    // Boolean value representing if the data label series name is visible or not.
    showSeriesName?: boolean;
    // Boolean value representing if the data label value is visible or not.
    showValue?: boolean;
    // Represents the format of chart data labels, which includes fill and font formatting. Read-only.
    format?: WorkbookChartDataLabelFormat;
}
export interface WorkbookChartAreaFormat extends Entity {
    // Represents the fill format of an object, which includes background formatting information. Read-only.
    fill?: WorkbookChartFill;
    // Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
    font?: WorkbookChartFont;
}
export interface WorkbookChartLegend extends Entity {
    // Boolean value for whether the chart legend should overlap with the main body of the chart.
    overlay?: boolean;
    // Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom.
    position?: string;
    // A boolean value the represents the visibility of a ChartLegend object.
    visible?: boolean;
    // Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
    format?: WorkbookChartLegendFormat;
}
export interface WorkbookChartSeries extends Entity {
    // Represents the name of a series in a chart.
    name?: string;
    // Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
    format?: WorkbookChartSeriesFormat;
    // Represents a collection of all points in the series. Read-only.
    points?: WorkbookChartPoint[];
}
export interface WorkbookChartTitle extends Entity {
    // Boolean value representing if the chart title will overlay the chart or not.
    overlay?: boolean;
    // Represents the title text of a chart.
    text?: string;
    // A boolean value the represents the visibility of a chart title object.
    visible?: boolean;
    // Represents the formatting of a chart title, which includes fill and font formatting. Read-only.
    format?: WorkbookChartTitleFormat;
}
// tslint:disable-next-line: no-empty-interface
export interface WorkbookChartFill extends Entity {}
export interface WorkbookChartFont extends Entity {
    // Represents the bold status of font.
    bold?: boolean;
    // HTML color code representation of the text color. E.g. #FF0000 represents Red.
    color?: string;
    // Represents the italic status of the font.
    italic?: boolean;
    // Font name (e.g. 'Calibri')
    name?: string;
    // Size of the font (e.g. 11)
    size?: number;
    // Type of underline applied to the font. The possible values are: None, Single.
    underline?: string;
}
export interface WorkbookChartAxis extends Entity {
    /**
     * Represents the interval between two major tick marks. Can be set to a numeric value or an empty string. The returned
     * value is always a number.
     */
    majorUnit?: any;
    /**
     * Represents the maximum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis
     * values). The returned value is always a number.
     */
    maximum?: any;
    /**
     * Represents the minimum value on the value axis. Can be set to a numeric value or an empty string (for automatic axis
     * values). The returned value is always a number.
     */
    minimum?: any;
    /**
     * Represents the interval between two minor tick marks. 'Can be set to a numeric value or an empty string (for automatic
     * axis values). The returned value is always a number.
     */
    minorUnit?: any;
    // Represents the formatting of a chart object, which includes line and font formatting. Read-only.
    format?: WorkbookChartAxisFormat;
    // Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.
    majorGridlines?: WorkbookChartGridlines;
    // Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
    minorGridlines?: WorkbookChartGridlines;
    // Represents the axis title. Read-only.
    title?: WorkbookChartAxisTitle;
}
export interface WorkbookChartAxisFormat extends Entity {
    // Represents the font attributes (font name, font size, color, etc.) for a chart axis element. Read-only.
    font?: WorkbookChartFont;
    // Represents chart line formatting. Read-only.
    line?: WorkbookChartLineFormat;
}
export interface WorkbookChartGridlines extends Entity {
    // Boolean value representing if the axis gridlines are visible or not.
    visible?: boolean;
    // Represents the formatting of chart gridlines. Read-only.
    format?: WorkbookChartGridlinesFormat;
}
export interface WorkbookChartAxisTitle extends Entity {
    // Represents the axis title.
    text?: string;
    // A boolean that specifies the visibility of an axis title.
    visible?: boolean;
    // Represents the formatting of chart axis title. Read-only.
    format?: WorkbookChartAxisTitleFormat;
}
export interface WorkbookChartLineFormat extends Entity {
    // HTML color code representing the color of lines in the chart.
    color?: string;
}
export interface WorkbookChartAxisTitleFormat extends Entity {
    // Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.
    font?: WorkbookChartFont;
}
export interface WorkbookChartDataLabelFormat extends Entity {
    // Represents the fill format of the current chart data label. Read-only.
    fill?: WorkbookChartFill;
    // Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.
    font?: WorkbookChartFont;
}
export interface WorkbookChartGridlinesFormat extends Entity {
    // Represents chart line formatting. Read-only.
    line?: WorkbookChartLineFormat;
}
export interface WorkbookChartLegendFormat extends Entity {
    // Represents the fill format of an object, which includes background formating information. Read-only.
    fill?: WorkbookChartFill;
    // Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only.
    font?: WorkbookChartFont;
}
export interface WorkbookChartPoint extends Entity {
    // Returns the value of a chart point. Read-only.
    value?: any;
    // Encapsulates the format properties chart point. Read-only.
    format?: WorkbookChartPointFormat;
}
export interface WorkbookChartPointFormat extends Entity {
    // Represents the fill format of a chart, which includes background formating information. Read-only.
    fill?: WorkbookChartFill;
}
export interface WorkbookChartSeriesFormat extends Entity {
    // Represents the fill format of a chart series, which includes background formating information. Read-only.
    fill?: WorkbookChartFill;
    // Represents line formatting. Read-only.
    line?: WorkbookChartLineFormat;
}
export interface WorkbookChartTitleFormat extends Entity {
    // Represents the fill format of an object, which includes background formatting information. Read-only.
    fill?: WorkbookChartFill;
    // Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.
    font?: WorkbookChartFont;
}
export interface WorkbookCommentReply extends Entity {
    // The content of a comment reply.
    content?: string;
    // Indicates the type for the comment reply.
    contentType?: string;
}
export interface WorkbookFilter extends Entity {
    // The currently applied filter on the given column. Read-only.
    criteria?: WorkbookFilterCriteria;
}
export interface WorkbookFormatProtection extends Entity {
    /**
     * Indicates if Excel hides the formula for the cells in the range. A null value indicates that the entire range doesn't
     * have uniform formula hidden setting.
     */
    formulaHidden?: boolean;
    /**
     * Indicates if Excel locks the cells in the object. A null value indicates that the entire range doesn't have uniform
     * lock setting.
     */
    locked?: boolean;
}
export interface WorkbookFunctionResult extends Entity {
    error?: string;
    value?: any;
}
export interface WorkbookPivotTable extends Entity {
    // Name of the PivotTable.
    name?: string;
    // The worksheet containing the current PivotTable. Read-only.
    worksheet?: WorkbookWorksheet;
}
export interface WorkbookRange extends Entity {
    /**
     * Represents the range reference in A1-style. Address value will contain the Sheet reference (e.g. Sheet1!A1:B4).
     * Read-only.
     */
    address?: string;
    // Represents range reference for the specified range in the language of the user. Read-only.
    addressLocal?: string;
    // Number of cells in the range. Read-only.
    cellCount?: number;
    // Represents the total number of columns in the range. Read-only.
    columnCount?: number;
    // Represents if all columns of the current range are hidden.
    columnHidden?: boolean;
    // Represents the column number of the first cell in the range. Zero-indexed. Read-only.
    columnIndex?: number;
    // Represents the formula in A1-style notation.
    formulas?: any;
    /**
     * Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the
     * English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     */
    formulasLocal?: any;
    // Represents the formula in R1C1-style notation.
    formulasR1C1?: any;
    // Represents if all cells of the current range are hidden. Read-only.
    hidden?: boolean;
    // Represents Excel's number format code for the given cell.
    numberFormat?: any;
    // Returns the total number of rows in the range. Read-only.
    rowCount?: number;
    // Represents if all rows of the current range are hidden.
    rowHidden?: boolean;
    // Returns the row number of the first cell in the range. Zero-indexed. Read-only.
    rowIndex?: number;
    /**
     * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that
     * happens in Excel UI will not affect the text value returned by the API. Read-only.
     */
    text?: any;
    /**
     * Represents the type of data of each cell. The possible values are: Unknown, Empty, String, Integer, Double, Boolean,
     * Error. Read-only.
     */
    valueTypes?: any;
    /**
     * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell
     * that contain an error will return the error string.
     */
    values?: any;
    // Returns a format object, encapsulating the range's font, fill, borders, alignment, and other properties. Read-only.
    format?: WorkbookRangeFormat;
    // The worksheet containing the current range. Read-only.
    sort?: WorkbookRangeSort;
    // The worksheet containing the current range. Read-only.
    worksheet?: WorkbookWorksheet;
}
export interface WorkbookRangeFormat extends Entity {
    // Gets or sets the width of all colums within the range. If the column widths are not uniform, null will be returned.
    columnWidth?: number;
    /**
     * Represents the horizontal alignment for the specified object. The possible values are: General, Left, Center, Right,
     * Fill, Justify, CenterAcrossSelection, Distributed.
     */
    horizontalAlignment?: string;
    // Gets or sets the height of all rows in the range. If the row heights are not uniform null will be returned.
    rowHeight?: number;
    /**
     * Represents the vertical alignment for the specified object. The possible values are: Top, Center, Bottom, Justify,
     * Distributed.
     */
    verticalAlignment?: string;
    /**
     * Indicates if Excel wraps the text in the object. A null value indicates that the entire range doesn't have uniform wrap
     * setting
     */
    wrapText?: boolean;
    // Collection of border objects that apply to the overall range selected Read-only.
    borders?: WorkbookRangeBorder[];
    // Returns the fill object defined on the overall range. Read-only.
    fill?: WorkbookRangeFill;
    // Returns the font object defined on the overall range selected Read-only.
    font?: WorkbookRangeFont;
    // Returns the format protection object for a range. Read-only.
    protection?: WorkbookFormatProtection;
}
// tslint:disable-next-line: no-empty-interface
export interface WorkbookRangeSort extends Entity {}
export interface WorkbookRangeBorder extends Entity {
    /**
     * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color
     * (e.g. 'orange').
     */
    color?: string;
    /**
     * Constant value that indicates the specific side of the border. The possible values are: EdgeTop, EdgeBottom, EdgeLeft,
     * EdgeRight, InsideVertical, InsideHorizontal, DiagonalDown, DiagonalUp. Read-only.
     */
    sideIndex?: string;
    /**
     * One of the constants of line style specifying the line style for the border. The possible values are: None, Continuous,
     * Dash, DashDot, DashDotDot, Dot, Double, SlantDashDot.
     */
    style?: string;
    // Specifies the weight of the border around a range. The possible values are: Hairline, Thin, Medium, Thick.
    weight?: string;
}
export interface WorkbookRangeFill extends Entity {
    /**
     * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color
     * (e.g. 'orange')
     */
    color?: string;
}
export interface WorkbookRangeFont extends Entity {
    // Represents the bold status of font.
    bold?: boolean;
    // HTML color code representation of the text color. E.g. #FF0000 represents Red.
    color?: string;
    // Represents the italic status of the font.
    italic?: boolean;
    // Font name (e.g. 'Calibri')
    name?: string;
    // Font size.
    size?: number;
    /**
     * Type of underline applied to the font. The possible values are: None, Single, Double, SingleAccountant,
     * DoubleAccountant.
     */
    underline?: string;
}
export interface WorkbookRangeView extends Entity {
    // Represents the cell addresses
    cellAddresses?: any;
    // Returns the number of visible columns. Read-only.
    columnCount?: number;
    // Represents the formula in A1-style notation.
    formulas?: any;
    /**
     * Represents the formula in A1-style notation, in the user's language and number-formatting locale. For example, the
     * English '=SUM(A1, 1.5)' formula would become '=SUMME(A1; 1,5)' in German.
     */
    formulasLocal?: any;
    // Represents the formula in R1C1-style notation.
    formulasR1C1?: any;
    // Index of the range.
    index?: number;
    // Represents Excel's number format code for the given cell. Read-only.
    numberFormat?: any;
    // Returns the number of visible rows. Read-only.
    rowCount?: number;
    /**
     * Text values of the specified range. The Text value will not depend on the cell width. The # sign substitution that
     * happens in Excel UI will not affect the text value returned by the API. Read-only.
     */
    text?: any;
    /**
     * Represents the type of data of each cell. Read-only. The possible values are: Unknown, Empty, String, Integer, Double,
     * Boolean, Error.
     */
    valueTypes?: any;
    /**
     * Represents the raw values of the specified range view. The data returned could be of type string, number, or a boolean.
     * Cell that contain an error will return the error string.
     */
    values?: any;
    // Represents a collection of range views associated with the range. Read-only. Read-only.
    rows?: WorkbookRangeView[];
}
export interface WorkbookTableColumn extends Entity {
    // Returns the index number of the column within the columns collection of the table. Zero-indexed. Read-only.
    index?: number;
    // Returns the name of the table column.
    name?: string;
    /**
     * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell
     * that contain an error will return the error string.
     */
    values?: any;
    // Retrieve the filter applied to the column. Read-only.
    filter?: WorkbookFilter;
}
export interface WorkbookTableRow extends Entity {
    // Returns the index number of the row within the rows collection of the table. Zero-indexed. Read-only.
    index?: number;
    /**
     * Represents the raw values of the specified range. The data returned could be of type string, number, or a boolean. Cell
     * that contain an error will return the error string.
     */
    values?: any;
}
export interface WorkbookTableSort extends Entity {
    // Represents the current conditions used to last sort the table. Read-only.
    fields?: WorkbookSortField[];
    // Represents whether the casing impacted the last sort of the table. Read-only.
    matchCase?: boolean;
    /**
     * Represents Chinese character ordering method last used to sort the table. The possible values are: PinYin, StrokeCount.
     * Read-only.
     */
    method?: string;
}
export interface WorkbookWorksheetProtection extends Entity {
    // Sheet protection options. Read-only.
    options?: WorkbookWorksheetProtectionOptions;
    // Indicates if the worksheet is protected. Read-only.
    protected?: boolean;
}
export interface OutlookCategory extends Entity {
    /**
     * A unique name that identifies a category in the user's mailbox. After a category is created, the name cannot be
     * changed. Read-only.
     */
    displayName?: string;
    /**
     * A pre-set color constant that characterizes a category, and that is mapped to one of 25 predefined colors. See the note
     * below.
     */
    color?: CategoryColor;
}
export interface SingleValueLegacyExtendedProperty extends Entity {
    // A property value.
    value?: string;
}
export interface MultiValueLegacyExtendedProperty extends Entity {
    // A collection of property values.
    value?: string[];
}
export interface Attachment extends Entity {
    /**
     * The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    lastModifiedDateTime?: string;
    // The attachment's file name.
    name?: string;
    // The MIME type.
    contentType?: string;
    // The length of the attachment in bytes.
    size?: number;
    // true if the attachment is an inline attachment; otherwise, false.
    isInline?: boolean;
}
export interface EventMessage extends Message {
    /**
     * The type of event message: none, meetingRequest, meetingCancelled, meetingAccepted, meetingTenativelyAccepted,
     * meetingDeclined.
     */
    meetingMessageType?: MeetingMessageType;
    /**
     * The event associated with the event message. The assumption for attendees or room resources is that the Calendar
     * Attendant is set to automatically update the calendar with an event when meeting request event messages arrive.
     * Navigation property. Read-only.
     */
    event?: Event;
}
export interface MessageRule extends Entity {
    // The display name of the rule.
    displayName?: string;
    // Indicates the order in which the rule is executed, among other rules.
    sequence?: number;
    // Conditions that when fulfilled, will trigger the corresponding actions for that rule.
    conditions?: MessageRulePredicates;
    // Actions to be taken on a message when the corresponding conditions are fulfilled.
    actions?: MessageRuleActions;
    // Exception conditions for the rule.
    exceptions?: MessageRulePredicates;
    // Indicates whether the rule is enabled to be applied to messages.
    isEnabled?: boolean;
    // Indicates whether the rule is in an error condition. Read-only.
    hasError?: boolean;
    // Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
    isReadOnly?: boolean;
}
export interface MailSearchFolder extends MailFolder {
    // Indicates whether a search folder is editable using REST APIs.
    isSupported?: boolean;
    /**
     * Indicates how the mailbox folder hierarchy should be traversed in the search. true means that a deep search should be
     * done to include child folders in the hierarchy of each folder explicitly specified in sourceFolderIds. false means a
     * shallow search of only each of the folders explicitly specified in sourceFolderIds.
     */
    includeNestedFolders?: boolean;
    // The mailbox folders that should be mined.
    sourceFolderIds?: string[];
    // The OData query to filter the messages.
    filterQuery?: string;
}
// tslint:disable-next-line: interface-name
export interface InferenceClassificationOverride extends Entity {
    /**
     * Specifies how incoming messages from a specific sender should always be classified as. The possible values are:
     * focused, other.
     */
    classifyAs?: InferenceClassificationType;
    // The email address information of the sender for whom the override is created.
    senderEmailAddress?: EmailAddress;
}
export interface Post extends OutlookItem {
    // The contents of the post. This is a default property. This property can be null.
    body?: ItemBody;
    /**
     * Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    receivedDateTime?: string;
    // Indicates whether the post has at least one attachment. This is a default property.
    hasAttachments?: boolean;
    /**
     * Used in delegate access scenarios. Indicates who posted the message on behalf of another user. This is a default
     * property.
     */
    from?: Recipient;
    /**
     * Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the
     * case when Sender is not specified. This is a default property.
     */
    sender?: Recipient;
    // Unique ID of the conversation thread. Read-only.
    conversationThreadId?: string;
    // Conversation participants that were added to the thread as part of this post.
    newParticipants?: Recipient[];
    // Unique ID of the conversation. Read-only.
    conversationId?: string;
    // Read-only.
    inReplyTo?: Post;
    // The collection of single-value extended properties defined for the post. Read-only. Nullable.
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    // The collection of multi-value extended properties defined for the post. Read-only. Nullable.
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    // The collection of open extensions defined for the post. Read-only. Nullable.
    extensions?: Extension[];
    // Read-only. Nullable.
    attachments?: Attachment[];
}
export interface FileAttachment extends Attachment {
    // The ID of the attachment in the Exchange store.
    contentId?: string;
    // Do not use this property as it is not supported.
    contentLocation?: string;
    // The base64-encoded contents of the file.
    contentBytes?: number;
}
// tslint:disable-next-line: interface-name
export interface ItemAttachment extends Attachment {
    // The attached message or event. Navigation property.
    item?: OutlookItem;
}
// tslint:disable-next-line: no-empty-interface
export interface ReferenceAttachment extends Attachment {}
export interface OpenTypeExtension extends Extension {
    // A unique text identifier for an open type open extension. Required.
    extensionName?: string;
}
export interface ColumnLink extends Entity {
    // The name of the column in this content type.
    name?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface FieldValueSet extends Entity {}
// tslint:disable-next-line: interface-name
export interface ItemActivity extends Entity {
    // An item was accessed.
    access?: AccessAction;
    // Details about when the activity took place. Read-only.
    activityDateTime?: string;
    // Identity of who performed the action. Read-only.
    actor?: IdentitySet;
    // Exposes the driveItem that was the target of this activity.
    driveItem?: DriveItem;
}
// tslint:disable-next-line: interface-name
export interface ItemActivityStat extends Entity {
    // When the interval starts. Read-only.
    startDateTime?: string;
    // When the interval ends. Read-only.
    endDateTime?: string;
    // Statistics about the access actions in this interval. Read-only.
    access?: ItemActionStat;
    // Statistics about the create actions in this interval. Read-only.
    create?: ItemActionStat;
    // Statistics about the delete actions in this interval. Read-only.
    delete?: ItemActionStat;
    // Statistics about the edit actions in this interval. Read-only.
    edit?: ItemActionStat;
    // Statistics about the move actions in this interval. Read-only.
    move?: ItemActionStat;
    // Indicates whether the item is 'trending.' Read-only.
    isTrending?: boolean;
    // Indicates that the statistics in this interval are based on incomplete data. Read-only.
    incompleteData?: IncompleteData;
    // Exposes the itemActivities represented in this itemActivityStat resource.
    activities?: ItemActivity[];
}
export interface ListItemVersion extends BaseItemVersion {
    // A collection of the fields and values for this version of the list item.
    fields?: FieldValueSet;
}
export interface SharedDriveItem extends BaseItem {
    // Information about the owner of the shared item being referenced.
    owner?: IdentitySet;
    // Used to access the underlying driveItem
    driveItem?: DriveItem;
    // All driveItems contained in the sharing root. This collection cannot be enumerated.
    items?: DriveItem[];
    // Used to access the underlying list
    list?: List;
    // Used to access the underlying listItem
    listItem?: ListItem;
    // Used to access the underlying driveItem. Deprecated -- use driveItem instead.
    root?: DriveItem;
    // Used to access the underlying site
    site?: Site;
}
export interface SchemaExtension extends Entity {
    // Description for the schema extension.
    description?: string;
    /**
     * Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from
     * contact, device, event, group, message, organization, post, or user.
     */
    targetTypes?: string[];
    // The collection of property names and types that make up the schema extension definition.
    properties?: ExtensionSchemaProperty[];
    /**
     * The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated.
     * Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state
     * transitions and behaviors.
     */
    status?: string;
    /**
     * The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to
     * set the owner. If not supplied, then the calling application's appId will be set as the owner. In either case, the
     * signed-in user must be the owner of the application. Once set, this property is read-only and cannot be changed.
     */
    owner?: string;
}
export interface DeviceAppManagement extends Entity {
    // The last time the apps from the Microsoft Store for Business were synced successfully for the account.
    microsoftStoreForBusinessLastSuccessfulSyncDateTime?: string;
    // Whether the account is enabled for syncing applications from the Microsoft Store for Business.
    isEnabledForMicrosoftStoreForBusiness?: boolean;
    /**
     * The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a
     * country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is
     * -&amp;lt;country/regioncode2&amp;gt;, where is a lowercase two-letter code derived from ISO 639-1 and
     * &amp;lt;country/regioncode2&amp;gt; is an uppercase two-letter code derived from ISO 3166. For example, en-US for
     * English (United States) is a specific culture.
     */
    microsoftStoreForBusinessLanguage?: string;
    // The last time an application sync from the Microsoft Store for Business was completed.
    microsoftStoreForBusinessLastCompletedApplicationSyncTime?: string;
    // The Managed eBook.
    managedEBooks?: ManagedEBook[];
    // The mobile apps.
    mobileApps?: MobileApp[];
    // The mobile app categories.
    mobileAppCategories?: MobileAppCategory[];
    // The Managed Device Mobile Application Configurations.
    mobileAppConfigurations?: ManagedDeviceMobileAppConfiguration[];
    // List of Vpp tokens for this organization.
    vppTokens?: VppToken[];
    // Managed app policies.
    managedAppPolicies?: ManagedAppPolicy[];
    // iOS managed app policies.
    iosManagedAppProtections?: IosManagedAppProtection[];
    // Android managed app policies.
    androidManagedAppProtections?: AndroidManagedAppProtection[];
    // Default managed app policies.
    defaultManagedAppProtections?: DefaultManagedAppProtection[];
    // Targeted managed app configurations.
    targetedManagedAppConfigurations?: TargetedManagedAppConfiguration[];
    // Windows information protection for apps running on devices which are MDM enrolled.
    mdmWindowsInformationProtectionPolicies?: MdmWindowsInformationProtectionPolicy[];
    // Windows information protection for apps running on devices which are not MDM enrolled.
    windowsInformationProtectionPolicies?: WindowsInformationProtectionPolicy[];
    // The managed app registrations.
    managedAppRegistrations?: ManagedAppRegistration[];
    // The managed app statuses.
    managedAppStatuses?: ManagedAppStatus[];
}
export interface ManagedEBook extends Entity {
    // Name of the eBook.
    displayName?: string;
    // Description.
    description?: string;
    // Publisher.
    publisher?: string;
    // The date and time when the eBook was published.
    publishedDateTime?: string;
    // Book cover.
    largeCover?: MimeContent;
    // The date and time when the eBook file was created.
    createdDateTime?: string;
    // The date and time when the eBook was last modified.
    lastModifiedDateTime?: string;
    // The more information Url.
    informationUrl?: string;
    // The privacy statement Url.
    privacyInformationUrl?: string;
    // The list of assignments for this eBook.
    assignments?: ManagedEBookAssignment[];
    // Mobile App Install Summary.
    installSummary?: EBookInstallSummary;
    // The list of installation states for this eBook.
    deviceStates?: DeviceInstallState[];
    // The list of installation states for this eBook.
    userStateSummary?: UserInstallStateSummary[];
}
export interface MobileApp extends Entity {
    // The admin provided or imported title of the app.
    displayName?: string;
    // The description of the app.
    description?: string;
    // The publisher of the app.
    publisher?: string;
    // The large icon, to be displayed in the app details and used for upload of the icon.
    largeIcon?: MimeContent;
    // The date and time the app was created.
    createdDateTime?: string;
    // The date and time the app was last modified.
    lastModifiedDateTime?: string;
    // The value indicating whether the app is marked as featured by the admin.
    isFeatured?: boolean;
    // The privacy statement Url.
    privacyInformationUrl?: string;
    // The more information Url.
    informationUrl?: string;
    // The owner of the app.
    owner?: string;
    // The developer of the app.
    developer?: string;
    // Notes for the app.
    notes?: string;
    /**
     * The publishing state for the app. The app cannot be assigned unless the app is published. Possible values are:
     * notPublished, processing, published.
     */
    publishingState?: MobileAppPublishingState;
    // The list of categories for this app.
    categories?: MobileAppCategory[];
    // The list of group assignments for this mobile app.
    assignments?: MobileAppAssignment[];
}
export interface MobileAppCategory extends Entity {
    // The name of the app category.
    displayName?: string;
    // The date and time the mobileAppCategory was last modified.
    lastModifiedDateTime?: string;
}
export interface ManagedDeviceMobileAppConfiguration extends Entity {
    // the associated app.
    targetedMobileApps?: string[];
    // DateTime the object was created.
    createdDateTime?: string;
    // Admin provided description of the Device Configuration.
    description?: string;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string;
    // Admin provided name of the device configuration.
    displayName?: string;
    // Version of the device configuration.
    version?: number;
    // The list of group assignemenets for app configration.
    assignments?: ManagedDeviceMobileAppConfigurationAssignment[];
    // List of ManagedDeviceMobileAppConfigurationDeviceStatus.
    deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatus[];
    // List of ManagedDeviceMobileAppConfigurationUserStatus.
    userStatuses?: ManagedDeviceMobileAppConfigurationUserStatus[];
    // App configuration device status summary.
    deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummary;
    // App configuration user status summary.
    userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummary;
}
export interface VppToken extends Entity {
    // The organization associated with the Apple Volume Purchase Program Token
    organizationName?: string;
    /**
     * The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible
     * values are: business, education. Possible values are: business, education.
     */
    vppTokenAccountType?: VppTokenAccountType;
    // The apple Id associated with the given Apple Volume Purchase Program Token.
    appleId?: string;
    // The expiration date time of the Apple Volume Purchase Program Token.
    expirationDateTime?: string;
    /**
     * The last time when an application sync was done with the Apple volume purchase program service using the Apple Volume
     * Purchase Program Token.
     */
    lastSyncDateTime?: string;
    // The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program.
    token?: string;
    // Last modification date time associated with the Apple Volume Purchase Program Token.
    lastModifiedDateTime?: string;
    /**
     * Current state of the Apple Volume Purchase Program Token. Possible values are: unknown, valid, expired, invalid,
     * assignedToExternalMDM. Possible values are: unknown, valid, expired, invalid, assignedToExternalMDM.
     */
    state?: VppTokenState;
    /**
     * Current sync status of the last application sync which was triggered using the Apple Volume Purchase Program Token.
     * Possible values are: none, inProgress, completed, failed. Possible values are: none, inProgress, completed, failed.
     */
    lastSyncStatus?: VppTokenSyncStatus;
    // Whether or not apps for the VPP token will be automatically updated.
    automaticallyUpdateApps?: boolean;
    // Whether or not apps for the VPP token will be automatically updated.
    countryOrRegion?: string;
}
export interface ManagedAppPolicy extends Entity {
    // Policy display name.
    displayName?: string;
    // The policy's description.
    description?: string;
    // The date and time the policy was created.
    createdDateTime?: string;
    // Last time the policy was modified.
    lastModifiedDateTime?: string;
    // Version of the entity.
    version?: string;
}
export interface ManagedAppProtection extends ManagedAppPolicy {
    // The period after which access is checked when the device is not connected to the internet.
    periodOfflineBeforeAccessCheck?: string;
    // The period after which access is checked when the device is connected to the internet.
    periodOnlineBeforeAccessCheck?: string;
    // Sources from which data is allowed to be transferred. Possible values are: allApps, managedApps, none.
    allowedInboundDataTransferSources?: ManagedAppDataTransferLevel;
    // Destinations to which data is allowed to be transferred. Possible values are: allApps, managedApps, none.
    allowedOutboundDataTransferDestinations?: ManagedAppDataTransferLevel;
    // Indicates whether organizational credentials are required for app use.
    organizationalCredentialsRequired?: boolean;
    /**
     * The level to which the clipboard may be shared between apps on the managed device. Possible values are: allApps,
     * managedAppsWithPasteIn, managedApps, blocked.
     */
    allowedOutboundClipboardSharingLevel?: ManagedAppClipboardSharingLevel;
    // Indicates whether the backup of a managed app's data is blocked.
    dataBackupBlocked?: boolean;
    // Indicates whether device compliance is required.
    deviceComplianceRequired?: boolean;
    // Indicates whether internet links should be opened in the managed browser app.
    managedBrowserToOpenLinksRequired?: boolean;
    // Indicates whether users may use the 'Save As' menu item to save a copy of protected files.
    saveAsBlocked?: boolean;
    // The amount of time an app is allowed to remain disconnected from the internet before all managed data it is wiped.
    periodOfflineBeforeWipeIsEnforced?: string;
    // Indicates whether an app-level pin is required.
    pinRequired?: boolean;
    // Maximum number of incorrect pin retry attempts before the managed app is either blocked or wiped.
    maximumPinRetries?: number;
    // Indicates whether simplePin is blocked.
    simplePinBlocked?: boolean;
    // Minimum pin length required for an app-level pin if PinRequired is set to True
    minimumPinLength?: number;
    /**
     * Character set which may be used for an app-level pin if PinRequired is set to True. Possible values are: numeric,
     * alphanumericAndSymbol.
     */
    pinCharacterSet?: ManagedAppPinCharacterSet;
    // TimePeriod before the all-level pin must be reset if PinRequired is set to True.
    periodBeforePinReset?: string;
    // Data storage locations where a user may store managed data.
    allowedDataStorageLocations?: ManagedAppDataStorageLocation[];
    // Indicates whether contacts can be synced to the user's device.
    contactSyncBlocked?: boolean;
    // Indicates whether printing is allowed from managed apps.
    printBlocked?: boolean;
    // Indicates whether use of the fingerprint reader is allowed in place of a pin if PinRequired is set to True.
    fingerprintBlocked?: boolean;
    // Indicates whether use of the app pin is required if the device pin is set.
    disableAppPinIfDevicePinIsSet?: boolean;
    // Versions less than the specified version will block the managed app from accessing company data.
    minimumRequiredOsVersion?: string;
    // Versions less than the specified version will result in warning message on the managed app from accessing company data.
    minimumWarningOsVersion?: string;
    // Versions less than the specified version will block the managed app from accessing company data.
    minimumRequiredAppVersion?: string;
    // Versions less than the specified version will result in warning message on the managed app.
    minimumWarningAppVersion?: string;
}
export interface TargetedManagedAppProtection extends ManagedAppProtection {
    // Indicates if the policy is deployed to any inclusion groups or not.
    isAssigned?: boolean;
    // Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
    assignments?: TargetedManagedAppPolicyAssignment[];
}
// tslint:disable-next-line: interface-name
export interface IosManagedAppProtection extends TargetedManagedAppProtection {
    /**
     * Type of encryption which should be used for data in a managed app. Possible values are: useDeviceSettings,
     * afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     */
    appDataEncryptionType?: ManagedAppDataEncryptionType;
    // Versions less than the specified version will block the managed app from accessing company data.
    minimumRequiredSdkVersion?: string;
    // Count of apps to which the current policy is deployed.
    deployedAppCount?: number;
    // Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True.
    faceIdBlocked?: boolean;
    // List of apps to which the policy is deployed.
    apps?: ManagedMobileApp[];
    // Navigation property to deployment summary of the configuration.
    deploymentSummary?: ManagedAppPolicyDeploymentSummary;
}
export interface AndroidManagedAppProtection extends TargetedManagedAppProtection {
    // Indicates whether a managed user can take screen captures of managed apps
    screenCaptureBlocked?: boolean;
    // When this setting is enabled, app level encryption is disabled if device level encryption is enabled
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean;
    // Indicates whether application data for managed apps should be encrypted
    encryptAppData?: boolean;
    // Count of apps to which the current policy is deployed.
    deployedAppCount?: number;
    // Define the oldest required Android security patch level a user can have to gain secure access to the app.
    minimumRequiredPatchVersion?: string;
    // Define the oldest recommended Android security patch level a user can have for secure access to the app.
    minimumWarningPatchVersion?: string;
    // List of apps to which the policy is deployed.
    apps?: ManagedMobileApp[];
    // Navigation property to deployment summary of the configuration.
    deploymentSummary?: ManagedAppPolicyDeploymentSummary;
}
export interface DefaultManagedAppProtection extends ManagedAppProtection {
    /**
     * Type of encryption which should be used for data in a managed app. (iOS Only). Possible values are: useDeviceSettings,
     * afterDeviceRestart, whenDeviceLockedExceptOpenFiles, whenDeviceLocked.
     */
    appDataEncryptionType?: ManagedAppDataEncryptionType;
    // Indicates whether screen capture is blocked. (Android only)
    screenCaptureBlocked?: boolean;
    // Indicates whether managed-app data should be encrypted. (Android only)
    encryptAppData?: boolean;
    // When this setting is enabled, app level encryption is disabled if device level encryption is enabled. (Android only)
    disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean;
    // Versions less than the specified version will block the managed app from accessing company data. (iOS Only)
    minimumRequiredSdkVersion?: string;
    // A set of string key and string value pairs to be sent to the affected users, unalterned by this service
    customSettings?: KeyValuePair[];
    // Count of apps to which the current policy is deployed.
    deployedAppCount?: number;
    /**
     * Define the oldest required Android security patch level a user can have to gain secure access to the app. (Android
     * only)
     */
    minimumRequiredPatchVersion?: string;
    // Define the oldest recommended Android security patch level a user can have for secure access to the app. (Android only)
    minimumWarningPatchVersion?: string;
    // Indicates whether use of the FaceID is allowed in place of a pin if PinRequired is set to True. (iOS Only)
    faceIdBlocked?: boolean;
    // List of apps to which the policy is deployed.
    apps?: ManagedMobileApp[];
    // Navigation property to deployment summary of the configuration.
    deploymentSummary?: ManagedAppPolicyDeploymentSummary;
}
export interface ManagedAppConfiguration extends ManagedAppPolicy {
    /**
     * A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned
     * by this service
     */
    customSettings?: KeyValuePair[];
}
export interface TargetedManagedAppConfiguration extends ManagedAppConfiguration {
    // Count of apps to which the current policy is deployed.
    deployedAppCount?: number;
    // Indicates if the policy is deployed to any inclusion groups or not.
    isAssigned?: boolean;
    // List of apps to which the policy is deployed.
    apps?: ManagedMobileApp[];
    // Navigation property to deployment summary of the configuration.
    deploymentSummary?: ManagedAppPolicyDeploymentSummary;
    // Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
    assignments?: TargetedManagedAppPolicyAssignment[];
}
export interface WindowsInformationProtection extends ManagedAppPolicy {
    /**
     * WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection,
     * encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.
     */
    enforcementLevel?: WindowsInformationProtectionEnforcementLevel;
    // Primary enterprise domain
    enterpriseDomain?: string;
    // List of enterprise domains to be protected
    enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollection[];
    // Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
    protectionUnderLockConfigRequired?: boolean;
    /**
     * Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data
     * recovery agent(DRA) certificate for encrypting file system(EFS)
     */
    dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificate;
    /**
     * This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1
     * (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after
     * unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
     */
    revokeOnUnenrollDisabled?: boolean;
    /**
     * TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has
     * access to RMS-protected file and how long they have access
     */
    rightsManagementServicesTemplateId?: string;
    // Specifies whether to allow Azure RMS encryption for WIP
    azureRightsManagementServicesAllowed?: boolean;
    /**
     * Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the
     * Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the
     * title bar of a WIP-protected app
     */
    iconsVisible?: boolean;
    /**
     * Protected applications can access enterprise data and the data handled by those applications are protected with
     * encryption
     */
    protectedApps?: WindowsInformationProtectionApp[];
    /**
     * Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This
     * is because some critical enterprise applications may have compatibility problems with encrypted data.
     */
    exemptApps?: WindowsInformationProtectionApp[];
    /**
     * This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent
     * to a device will be considered enterprise data and protected These locations will be considered a safe destination for
     * enterprise data to be shared to
     */
    enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollection[];
    /**
     * Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these
     * resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource
     * will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this
     * purpose must also be configured using the EnterpriseInternalProxyServers policy
     */
    enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollection[];
    /**
     * Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers
     * will be considered part of the enterprise and protected. These locations will be considered a safe destination for
     * enterprise data to be shared to
     */
    enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollection[];
    /**
     * Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other
     * subnets. Default is false
     */
    enterpriseIPRangesAreAuthoritative?: boolean;
    // This is a list of proxy servers. Any server not on this list is considered non-enterprise
    enterpriseProxyServers?: WindowsInformationProtectionResourceCollection[];
    /**
     * This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167,
     * 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the
     * Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the
     * EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
     */
    enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollection[];
    /**
     * Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies.
     * Default is false
     */
    enterpriseProxyServersAreAuthoritative?: boolean;
    // List of domain names that can used for work or personal resource
    neutralDomainResources?: WindowsInformationProtectionResourceCollection[];
    // This switch is for the Windows Search Indexer, to allow or disallow indexing of items
    indexingEncryptedStoresOrItemsBlocked?: boolean;
    /**
     * Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share
     * within the corporate boundary
     */
    smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollection[];
    // Indicates if the policy is deployed to any inclusion groups or not.
    isAssigned?: boolean;
    // Another way to input protected apps through xml files
    protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFile[];
    // Another way to input exempt apps through xml files
    exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFile[];
    // Navigation property to list of security groups targeted for policy.
    assignments?: TargetedManagedAppPolicyAssignment[];
}
// tslint:disable-next-line: no-empty-interface
export interface MdmWindowsInformationProtectionPolicy extends WindowsInformationProtection {}
export interface WindowsInformationProtectionPolicy extends WindowsInformationProtection {
    // New property in RS2, pending documentation
    revokeOnMdmHandoffDisabled?: boolean;
    // Enrollment url for the MDM
    mdmEnrollmentUrl?: string;
    // Boolean value that sets Windows Hello for Business as a method for signing into Windows.
    windowsHelloForBusinessBlocked?: boolean;
    /**
     * Integer value that sets the minimum number of characters required for the PIN. Default value is 4. The lowest number
     * you can configure for this policy setting is 4. The largest number you can configure must be less than the number
     * configured in the Maximum PIN length policy setting or the number 127, whichever is the lowest.
     */
    pinMinimumLength?: number;
    /**
     * Integer value that configures the use of uppercase letters in the Windows Hello for Business PIN. Default is NotAllow.
     * Possible values are: notAllow, requireAtLeastOne, allow.
     */
    pinUppercaseLetters?: WindowsInformationProtectionPinCharacterRequirements;
    /**
     * Integer value that configures the use of lowercase letters in the Windows Hello for Business PIN. Default is NotAllow.
     * Possible values are: notAllow, requireAtLeastOne, allow.
     */
    pinLowercaseLetters?: WindowsInformationProtectionPinCharacterRequirements;
    /**
     * Integer value that configures the use of special characters in the Windows Hello for Business PIN. Valid special
     * characters for Windows Hello for Business PIN gestures include: ! ' # $ % &amp; ' ( ) + , - . / : ; &amp;lt; = &amp;gt;
     * ? @ [ / ] ^ ` {
     */
    pinSpecialCharacters?: WindowsInformationProtectionPinCharacterRequirements;
    /**
     * Integer value specifies the period of time (in days) that a PIN can be used before the system requires the user to
     * change it. The largest number you can configure for this policy setting is 730. The lowest number you can configure for
     * this policy setting is 0. If this policy is set to 0, then the user's PIN will never expire. This node was added in
     * Windows 10, version 1511. Default is 0.
     */
    pinExpirationDays?: number;
    /**
     * Integer value that specifies the number of past PINs that can be associated to a user account that can't be reused. The
     * largest number you can configure for this policy setting is 50. The lowest number you can configure for this policy
     * setting is 0. If this policy is set to 0, then storage of previous PINs is not required. This node was added in Windows
     * 10, version 1511. Default is 0.
     */
    numberOfPastPinsRemembered?: number;
    /**
     * The number of authentication failures allowed before the device will be wiped. A value of 0 disables device wipe
     * functionality. Range is an integer X where 4 &amp;lt;= X &amp;lt;= 16 for desktop and 0 &amp;lt;= X &amp;lt;= 999 for
     * mobile devices.
     */
    passwordMaximumAttemptCount?: number;
    /**
     * Specifies the maximum amount of time (in minutes) allowed after the device is idle that will cause the device to become
     * PIN or password locked. Range is an integer X where 0 &amp;lt;= X &amp;lt;= 999.
     */
    minutesOfInactivityBeforeDeviceLock?: number;
    // Offline interval before app data is wiped (days)
    daysWithoutContactBeforeUnenroll?: number;
}
export interface ManagedAppStatus extends Entity {
    // Friendly name of the status report.
    displayName?: string;
    // Version of the entity.
    version?: string;
}
export interface MobileAppAssignment extends Entity {
    /**
     * The install intent defined by the admin. Possible values are: available, required, uninstall,
     * availableWithoutEnrollment.
     */
    intent?: InstallIntent;
    // The target group assignment defined by the admin.
    target?: DeviceAndAppManagementAssignmentTarget;
    // The settings for target assignment defined by the admin.
    settings?: MobileAppAssignmentSettings;
}
export interface MobileAppContentFile extends Entity {
    // The Azure Storage URI.
    azureStorageUri?: string;
    // A value indicating whether the file is committed.
    isCommitted?: boolean;
    // The time the file was created.
    createdDateTime?: string;
    // the file name.
    name?: string;
    // The size of the file prior to encryption.
    size?: number;
    // The size of the file after encryption.
    sizeEncrypted?: number;
    // The time the Azure storage Uri expires.
    azureStorageUriExpirationDateTime?: string;
    // The manifest information.
    manifest?: number;
    /**
     * The state of the current upload request. Possible values are: success, transientError, error, unknown,
     * azureStorageUriRequestSuccess, azureStorageUriRequestPending, azureStorageUriRequestFailed,
     * azureStorageUriRequestTimedOut, azureStorageUriRenewalSuccess, azureStorageUriRenewalPending,
     * azureStorageUriRenewalFailed, azureStorageUriRenewalTimedOut, commitFileSuccess, commitFilePending, commitFileFailed,
     * commitFileTimedOut.
     */
    uploadState?: MobileAppContentFileUploadState;
}
export interface ManagedDeviceMobileAppConfigurationAssignment extends Entity {
    // Assignment target that the T&amp;C policy is assigned to.
    target?: DeviceAndAppManagementAssignmentTarget;
}
export interface ManagedDeviceMobileAppConfigurationDeviceStatus extends Entity {
    // Device name of the DevicePolicyStatus.
    deviceDisplayName?: string;
    // The User Name that is being reported
    userName?: string;
    // The device model that is being reported
    deviceModel?: string;
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
}
export interface ManagedDeviceMobileAppConfigurationUserStatus extends Entity {
    // User name of the DevicePolicyStatus.
    userDisplayName?: string;
    // Devices count for that user.
    devicesCount?: number;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
}
export interface ManagedDeviceMobileAppConfigurationDeviceSummary extends Entity {
    // Number of pending devices
    pendingCount?: number;
    // Number of not applicable devices
    notApplicableCount?: number;
    // Number of succeeded devices
    successCount?: number;
    // Number of error devices
    errorCount?: number;
    // Number of failed devices
    failedCount?: number;
    // Last update time
    lastUpdateDateTime?: string;
    // Version of the policy for that overview
    configurationVersion?: number;
}
export interface ManagedDeviceMobileAppConfigurationUserSummary extends Entity {
    // Number of pending Users
    pendingCount?: number;
    // Number of not applicable users
    notApplicableCount?: number;
    // Number of succeeded Users
    successCount?: number;
    // Number of error Users
    errorCount?: number;
    // Number of failed Users
    failedCount?: number;
    // Last update time
    lastUpdateDateTime?: string;
    // Version of the policy for that overview
    configurationVersion?: number;
}
// tslint:disable-next-line: no-empty-interface
export interface MacOSOfficeSuiteApp extends MobileApp {}
export interface ManagedApp extends MobileApp {
    // The Application's availability. Possible values are: global, lineOfBusiness.
    appAvailability?: ManagedAppAvailability;
    // The Application's version.
    version?: string;
}
export interface ManagedAndroidStoreApp extends ManagedApp {
    // The app's package ID.
    packageId?: string;
    // The Android AppStoreUrl.
    appStoreUrl?: string;
    // The value for the minimum supported operating system.
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
}
export interface ManagedIOSStoreApp extends ManagedApp {
    // The app's Bundle ID.
    bundleId?: string;
    // The Apple AppStoreUrl.
    appStoreUrl?: string;
    // The iOS architecture for which this app can run on.
    applicableDeviceType?: IosDeviceType;
    // The value for the minimum supported operating system.
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
}
export interface ManagedMobileLobApp extends ManagedApp {
    // The internal committed content version.
    committedContentVersion?: string;
    // The name of the main Lob application file.
    fileName?: string;
    // The total size, including all uploaded files.
    size?: number;
    // The list of content versions for this app.
    contentVersions?: MobileAppContent[];
}
export interface MobileAppContent extends Entity {
    // The list of files for this app content version.
    files?: MobileAppContentFile[];
}
export interface ManagedAndroidLobApp extends ManagedMobileLobApp {
    // The package identifier.
    packageId?: string;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
    // The version name of managed Android Line of Business (LoB) app.
    versionName?: string;
    // The version code of managed Android Line of Business (LoB) app.
    versionCode?: string;
}
export interface ManagedIOSLobApp extends ManagedMobileLobApp {
    // The Identity Name.
    bundleId?: string;
    // The iOS architecture for which this app can run on.
    applicableDeviceType?: IosDeviceType;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
    // The expiration time.
    expirationDateTime?: string;
    // The version number of managed iOS Line of Business (LoB) app.
    versionNumber?: string;
    // The build number of managed iOS Line of Business (LoB) app.
    buildNumber?: string;
}
export interface MobileLobApp extends MobileApp {
    // The internal committed content version.
    committedContentVersion?: string;
    // The name of the main Lob application file.
    fileName?: string;
    // The total size, including all uploaded files.
    size?: number;
    // The list of content versions for this app.
    contentVersions?: MobileAppContent[];
}
export interface WindowsMobileMSI extends MobileLobApp {
    // The command line.
    commandLine?: string;
    // The product code.
    productCode?: string;
    // The product version of Windows Mobile MSI Line of Business (LoB) app.
    productVersion?: string;
    /**
     * A boolean to control whether the app's version will be used to detect the app after it is installed on a device. Set
     * this to true for Windows Mobile MSI Line of Business (LoB) apps that use a self update feature.
     */
    ignoreVersionDetection?: boolean;
}
export interface WindowsUniversalAppX extends MobileLobApp {
    // The Windows architecture(s) for which this app can run on. Possible values are: none, x86, x64, arm, neutral.
    applicableArchitectures?: WindowsArchitecture;
    /**
     * The Windows device type(s) for which this app can run on. Possible values are: none, desktop, mobile, holographic,
     * team.
     */
    applicableDeviceTypes?: WindowsDeviceType;
    // The Identity Name.
    identityName?: string;
    // The Identity Publisher Hash.
    identityPublisherHash?: string;
    // The Identity Resource Identifier.
    identityResourceIdentifier?: string;
    // Whether or not the app is a bundle.
    isBundle?: boolean;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: WindowsMinimumOperatingSystem;
    // The identity version.
    identityVersion?: string;
}
export interface AndroidLobApp extends MobileLobApp {
    // The package identifier.
    packageId?: string;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
    // The version name of Android Line of Business (LoB) app.
    versionName?: string;
    // The version code of Android Line of Business (LoB) app.
    versionCode?: string;
}
// tslint:disable-next-line: interface-name
export interface IosLobApp extends MobileLobApp {
    // The Identity Name.
    bundleId?: string;
    // The iOS architecture for which this app can run on.
    applicableDeviceType?: IosDeviceType;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
    // The expiration time.
    expirationDateTime?: string;
    // The version number of iOS Line of Business (LoB) app.
    versionNumber?: string;
    // The build number of iOS Line of Business (LoB) app.
    buildNumber?: string;
}
export interface MicrosoftStoreForBusinessApp extends MobileApp {
    // The number of Microsoft Store for Business licenses in use.
    usedLicenseCount?: number;
    // The total number of Microsoft Store for Business licenses.
    totalLicenseCount?: number;
    // The app product key
    productKey?: string;
    // The app license type. Possible values are: offline, online.
    licenseType?: MicrosoftStoreForBusinessLicenseType;
    // The app package identifier
    packageIdentityName?: string;
}
export interface WebApp extends MobileApp {
    // The web app URL.
    appUrl?: string;
    // Whether or not to use managed browser. This property is only applicable for Android and IOS.
    useManagedBrowser?: boolean;
}
export interface AndroidStoreApp extends MobileApp {
    // The package identifier.
    packageId?: string;
    // The Android app store URL.
    appStoreUrl?: string;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem;
}
// tslint:disable-next-line: interface-name
export interface IosVppApp extends MobileApp {
    // The number of VPP licenses in use.
    usedLicenseCount?: number;
    // The total number of VPP licenses.
    totalLicenseCount?: number;
    // The VPP application release date and time.
    releaseDateTime?: string;
    // The store URL.
    appStoreUrl?: string;
    // The supported License Type.
    licensingType?: VppLicensingType;
    // The applicable iOS Device Type.
    applicableDeviceType?: IosDeviceType;
    // The organization associated with the Apple Volume Purchase Program Token
    vppTokenOrganizationName?: string;
    /**
     * The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible
     * values are: business, education. Possible values are: business, education.
     */
    vppTokenAccountType?: VppTokenAccountType;
    // The Apple Id associated with the given Apple Volume Purchase Program Token.
    vppTokenAppleId?: string;
    // The Identity Name.
    bundleId?: string;
}
// tslint:disable-next-line: interface-name
export interface IosStoreApp extends MobileApp {
    // The Identity Name.
    bundleId?: string;
    // The Apple App Store URL
    appStoreUrl?: string;
    // The iOS architecture for which this app can run on.
    applicableDeviceType?: IosDeviceType;
    // The value for the minimum applicable operating system.
    minimumSupportedOperatingSystem?: IosMinimumOperatingSystem;
}
// tslint:disable-next-line: interface-name
export interface IosMobileAppConfiguration extends ManagedDeviceMobileAppConfiguration {
    // mdm app configuration Base64 binary.
    encodedSettingXml?: number;
    // app configuration setting items.
    settings?: AppConfigurationSettingItem[];
}
export interface ManagedEBookAssignment extends Entity {
    // The assignment target for eBook.
    target?: DeviceAndAppManagementAssignmentTarget;
    // The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment.
    installIntent?: InstallIntent;
}
export interface EBookInstallSummary extends Entity {
    // Number of Devices that have successfully installed this book.
    installedDeviceCount?: number;
    // Number of Devices that have failed to install this book.
    failedDeviceCount?: number;
    // Number of Devices that does not have this book installed.
    notInstalledDeviceCount?: number;
    // Number of Users whose devices have all succeeded to install this book.
    installedUserCount?: number;
    // Number of Users that have 1 or more device that failed to install this book.
    failedUserCount?: number;
    // Number of Users that did not install this book.
    notInstalledUserCount?: number;
}
export interface DeviceInstallState extends Entity {
    // Device name.
    deviceName?: string;
    // Device Id.
    deviceId?: string;
    // Last sync date and time.
    lastSyncDateTime?: string;
    /**
     * The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed,
     * unknown.
     */
    installState?: InstallState;
    // The error code for install failures.
    errorCode?: string;
    // OS Version.
    osVersion?: string;
    // OS Description.
    osDescription?: string;
    // Device User Name.
    userName?: string;
}
export interface UserInstallStateSummary extends Entity {
    // User name.
    userName?: string;
    // Installed Device Count.
    installedDeviceCount?: number;
    // Failed Device Count.
    failedDeviceCount?: number;
    // Not installed device count.
    notInstalledDeviceCount?: number;
    // The install state of the eBook.
    deviceStates?: DeviceInstallState[];
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IosVppEBookAssignment extends ManagedEBookAssignment {}
// tslint:disable-next-line: interface-name
export interface IosVppEBook extends ManagedEBook {
    // The Vpp token ID.
    vppTokenId?: string;
    // The Apple ID associated with Vpp token.
    appleId?: string;
    // The Vpp token's organization name.
    vppOrganizationName?: string;
    // Genres.
    genres?: string[];
    // Language.
    language?: string;
    // Seller.
    seller?: string;
    // Total license count.
    totalLicenseCount?: number;
    // Used license count.
    usedLicenseCount?: number;
}
export interface DeviceManagement extends Entity {
    // Account level settings.
    settings?: DeviceManagementSettings;
    /**
     * intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the
     * end user web portal.
     */
    intuneBrand?: IntuneBrand;
    /**
     * Tenant mobile device management subscription state. The possible values are: pending, active, warning, disabled,
     * deleted, blocked, lockedOut.
     */
    subscriptionState?: DeviceManagementSubscriptionState;
    // The terms and conditions associated with device management of the company.
    termsAndConditions?: TermsAndConditions[];
    // The device configurations.
    deviceConfigurations?: DeviceConfiguration[];
    // The device compliance policies.
    deviceCompliancePolicies?: DeviceCompliancePolicy[];
    // The software update status summary.
    softwareUpdateStatusSummary?: SoftwareUpdateStatusSummary;
    // The device compliance state summary for this account.
    deviceCompliancePolicyDeviceStateSummary?: DeviceCompliancePolicyDeviceStateSummary;
    // The summary states of compliance policy settings for this account.
    deviceCompliancePolicySettingStateSummaries?: DeviceCompliancePolicySettingStateSummary[];
    // The device configuration device state summary for this account.
    deviceConfigurationDeviceStateSummaries?: DeviceConfigurationDeviceStateSummary;
    // The IOS software update installation statuses for this account.
    iosUpdateStatuses?: IosUpdateDeviceStatus[];
    // The list of device categories with the tenant.
    deviceCategories?: DeviceCategory[];
    // The list of Exchange Connectors configured by the tenant.
    exchangeConnectors?: DeviceManagementExchangeConnector[];
    // The list of device enrollment configurations
    deviceEnrollmentConfigurations?: DeviceEnrollmentConfiguration[];
    /**
     * The Exchange on premises conditional access settings. On premises conditional access will require devices to be both
     * enrolled and compliant for mail access
     */
    conditionalAccessSettings?: OnPremisesConditionalAccessSettings;
    // The list of Mobile threat Defense connectors configured by the tenant.
    mobileThreatDefenseConnectors?: MobileThreatDefenseConnector[];
    // The list of Device Management Partners configured by the tenant.
    deviceManagementPartners?: DeviceManagementPartner[];
    // Apple push notification certificate.
    applePushNotificationCertificate?: ApplePushNotificationCertificate;
    // Device overview
    managedDeviceOverview?: ManagedDeviceOverview;
    // The list of detected apps associated with a device.
    detectedApps?: DetectedApp[];
    // The list of managed devices.
    managedDevices?: ManagedDevice[];
    // The Notification Message Templates.
    notificationMessageTemplates?: NotificationMessageTemplate[];
    // The Role Definitions.
    roleDefinitions?: RoleDefinition[];
    // The Role Assignments.
    roleAssignments?: DeviceAndAppManagementRoleAssignment[];
    // The Resource Operations.
    resourceOperations?: ResourceOperation[];
    // The remote assist partners.
    remoteAssistancePartners?: RemoteAssistancePartner[];
    // The telecom expense management partners.
    telecomExpenseManagementPartners?: TelecomExpenseManagementPartner[];
    // The list of troubleshooting events for the tenant.
    troubleshootingEvents?: DeviceManagementTroubleshootingEvent[];
    // The windows information protection app learning summaries.
    windowsInformationProtectionAppLearningSummaries?: WindowsInformationProtectionAppLearningSummary[];
    // The windows information protection network learning summaries.
    windowsInformationProtectionNetworkLearningSummaries?: WindowsInformationProtectionNetworkLearningSummary[];
}
export interface TermsAndConditions extends Entity {
    // DateTime the object was created.
    createdDateTime?: string;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string;
    // Administrator-supplied name for the T&amp;C policy.
    displayName?: string;
    // Administrator-supplied description of the T&amp;C policy.
    description?: string;
    /**
     * Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&amp;C
     * policy.
     */
    title?: string;
    /**
     * Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user
     * on prompts to accept the T&amp;C policy.
     */
    bodyText?: string;
    /**
     * Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms
     * and conditions set out in the T&amp;C policy. This is shown to the user on prompts to accept the T&amp;C policy.
     */
    acceptanceStatement?: string;
    /**
     * Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and
     * wishes to require users to re-accept the modified T&amp;C policy.
     */
    version?: number;
    // The list of assignments for this T&amp;C policy.
    assignments?: TermsAndConditionsAssignment[];
    // The list of acceptance statuses for this T&amp;C policy.
    acceptanceStatuses?: TermsAndConditionsAcceptanceStatus[];
}
export interface DeviceConfiguration extends Entity {
    // DateTime the object was last modified.
    lastModifiedDateTime?: string;
    // DateTime the object was created.
    createdDateTime?: string;
    // Admin provided description of the Device Configuration.
    description?: string;
    // Admin provided name of the device configuration.
    displayName?: string;
    // Version of the device configuration.
    version?: number;
    // The list of assignments for the device configuration profile.
    assignments?: DeviceConfigurationAssignment[];
    // Device configuration installation status by device.
    deviceStatuses?: DeviceConfigurationDeviceStatus[];
    // Device configuration installation status by user.
    userStatuses?: DeviceConfigurationUserStatus[];
    // Device Configuration devices status overview
    deviceStatusOverview?: DeviceConfigurationDeviceOverview;
    // Device Configuration users status overview
    userStatusOverview?: DeviceConfigurationUserOverview;
    // Device Configuration Setting State Device Summary
    deviceSettingStateSummaries?: SettingStateDeviceSummary[];
}
export interface DeviceCompliancePolicy extends Entity {
    // DateTime the object was created.
    createdDateTime?: string;
    // Admin provided description of the Device Configuration.
    description?: string;
    // DateTime the object was last modified.
    lastModifiedDateTime?: string;
    // Admin provided name of the device configuration.
    displayName?: string;
    // Version of the device configuration.
    version?: number;
    // The list of scheduled action for this rule
    scheduledActionsForRule?: DeviceComplianceScheduledActionForRule[];
    // List of DeviceComplianceDeviceStatus.
    deviceStatuses?: DeviceComplianceDeviceStatus[];
    // List of DeviceComplianceUserStatus.
    userStatuses?: DeviceComplianceUserStatus[];
    // Device compliance devices status overview
    deviceStatusOverview?: DeviceComplianceDeviceOverview;
    // Device compliance users status overview
    userStatusOverview?: DeviceComplianceUserOverview;
    // Compliance Setting State Device Summary
    deviceSettingStateSummaries?: SettingStateDeviceSummary[];
    // The collection of assignments for this compliance policy.
    assignments?: DeviceCompliancePolicyAssignment[];
}
export interface SoftwareUpdateStatusSummary extends Entity {
    // The name of the policy.
    displayName?: string;
    // Number of compliant devices.
    compliantDeviceCount?: number;
    // Number of non compliant devices.
    nonCompliantDeviceCount?: number;
    // Number of remediated devices.
    remediatedDeviceCount?: number;
    // Number of devices had error.
    errorDeviceCount?: number;
    // Number of unknown devices.
    unknownDeviceCount?: number;
    // Number of conflict devices.
    conflictDeviceCount?: number;
    // Number of not applicable devices.
    notApplicableDeviceCount?: number;
    // Number of compliant users.
    compliantUserCount?: number;
    // Number of non compliant users.
    nonCompliantUserCount?: number;
    // Number of remediated users.
    remediatedUserCount?: number;
    // Number of users had error.
    errorUserCount?: number;
    // Number of unknown users.
    unknownUserCount?: number;
    // Number of conflict users.
    conflictUserCount?: number;
    // Number of not applicable users.
    notApplicableUserCount?: number;
}
export interface DeviceCompliancePolicyDeviceStateSummary extends Entity {
    // Number of devices that are in grace period
    inGracePeriodCount?: number;
    // Number of devices that have compliance managed by System Center Configuration Manager
    configManagerCount?: number;
    // Number of unknown devices
    unknownDeviceCount?: number;
    // Number of not applicable devices
    notApplicableDeviceCount?: number;
    // Number of compliant devices
    compliantDeviceCount?: number;
    // Number of remediated devices
    remediatedDeviceCount?: number;
    // Number of NonCompliant devices
    nonCompliantDeviceCount?: number;
    // Number of error devices
    errorDeviceCount?: number;
    // Number of conflict devices
    conflictDeviceCount?: number;
}
export interface DeviceCompliancePolicySettingStateSummary extends Entity {
    // The setting class name and property name.
    setting?: string;
    // Name of the setting.
    settingName?: string;
    /**
     * Setting platform. Possible values are: android, iOS, macOS, windowsPhone81, windows81AndLater, windows10AndLater,
     * androidWorkProfile, all.
     */
    platformType?: PolicyPlatformType;
    // Number of unknown devices
    unknownDeviceCount?: number;
    // Number of not applicable devices
    notApplicableDeviceCount?: number;
    // Number of compliant devices
    compliantDeviceCount?: number;
    // Number of remediated devices
    remediatedDeviceCount?: number;
    // Number of NonCompliant devices
    nonCompliantDeviceCount?: number;
    // Number of error devices
    errorDeviceCount?: number;
    // Number of conflict devices
    conflictDeviceCount?: number;
    // Not yet documented
    deviceComplianceSettingStates?: DeviceComplianceSettingState[];
}
export interface DeviceConfigurationDeviceStateSummary extends Entity {
    // Number of unknown devices
    unknownDeviceCount?: number;
    // Number of not applicable devices
    notApplicableDeviceCount?: number;
    // Number of compliant devices
    compliantDeviceCount?: number;
    // Number of remediated devices
    remediatedDeviceCount?: number;
    // Number of NonCompliant devices
    nonCompliantDeviceCount?: number;
    // Number of error devices
    errorDeviceCount?: number;
    // Number of conflict devices
    conflictDeviceCount?: number;
}
// tslint:disable-next-line: interface-name
export interface IosUpdateDeviceStatus extends Entity {
    /**
     * The installation status of the policy report. Possible values are: success, available, idle, unknown, downloading,
     * downloadFailed, downloadRequiresComputer, downloadInsufficientSpace, downloadInsufficientPower,
     * downloadInsufficientNetwork, installing, installInsufficientSpace, installInsufficientPower,
     * installPhoneCallInProgress, installFailed, notSupportedOperation, sharedDeviceUserLoggedInError.
     */
    installStatus?: IosUpdatesInstallStatus;
    // The device version that is being reported.
    osVersion?: string;
    // The device id that is being reported.
    deviceId?: string;
    // The User id that is being reported.
    userId?: string;
    // Device name of the DevicePolicyStatus.
    deviceDisplayName?: string;
    // The User Name that is being reported
    userName?: string;
    // The device model that is being reported
    deviceModel?: string;
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
}
export interface DeviceCategory extends Entity {
    // Display name for the device category.
    displayName?: string;
    // Optional description for the device category.
    description?: string;
}
export interface DeviceManagementExchangeConnector extends Entity {
    // Last sync time for the Exchange Connector
    lastSyncDateTime?: string;
    // Exchange Connector Status. Possible values are: none, connectionPending, connected, disconnected.
    status?: DeviceManagementExchangeConnectorStatus;
    // Email address used to configure the Service To Service Exchange Connector.
    primarySmtpAddress?: string;
    // The name of the Exchange server.
    serverName?: string;
    // The name of the server hosting the Exchange Connector.
    connectorServerName?: string;
    // The type of Exchange Connector Configured. Possible values are: onPremises, hosted, serviceToService, dedicated.
    exchangeConnectorType?: DeviceManagementExchangeConnectorType;
    // The version of the ExchangeConnectorAgent
    version?: string;
    // An alias assigned to the Exchange server
    exchangeAlias?: string;
    // Exchange Organization to the Exchange server
    exchangeOrganization?: string;
}
export interface DeviceEnrollmentConfiguration extends Entity {
    // Not yet documented
    displayName?: string;
    // Not yet documented
    description?: string;
    // Not yet documented
    priority?: number;
    // Not yet documented
    createdDateTime?: string;
    // Not yet documented
    lastModifiedDateTime?: string;
    // Not yet documented
    version?: number;
    // The list of group assignments for the device configuration profile.
    assignments?: EnrollmentConfigurationAssignment[];
}
export interface OnPremisesConditionalAccessSettings extends Entity {
    // Indicates if on premises conditional access is enabled for this organization
    enabled?: boolean;
    /**
     * User groups that will be targeted by on premises conditional access. All users in these groups will be required to have
     * mobile device managed and compliant for mail access.
     */
    includedGroups?: string[];
    /**
     * User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the
     * conditional access policy.
     */
    excludedGroups?: string[];
    // Override the default access rule when allowing a device to ensure access is granted.
    overrideDefaultRule?: boolean;
}
export interface MobileThreatDefenseConnector extends Entity {
    // DateTime of last Heartbeat recieved from the Data Sync Partner
    lastHeartbeatDateTime?: string;
    // Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive.
    partnerState?: MobileThreatPartnerTenantState;
    // For Android, set whether data from the data sync partner should be used during compliance evaluations
    androidEnabled?: boolean;
    // For IOS, get or set whether data from the data sync partner should be used during compliance evaluations
    iosEnabled?: boolean;
    // For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant
    androidDeviceBlockedOnMissingPartnerData?: boolean;
    // For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant
    iosDeviceBlockedOnMissingPartnerData?: boolean;
    /**
     * Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the
     * Data Sync Partner
     */
    partnerUnsupportedOsVersionBlocked?: boolean;
    // Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
    partnerUnresponsivenessThresholdInDays?: number;
}
export interface DeviceManagementPartner extends Entity {
    // Timestamp of last heartbeat after admin enabled option Connect to Device management Partner
    lastHeartbeatDateTime?: string;
    // Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
    partnerState?: DeviceManagementPartnerTenantState;
    // Partner App type. Possible values are: unknown, singleTenantApp, multiTenantApp.
    partnerAppType?: DeviceManagementPartnerAppType;
    // Partner Single tenant App id
    singleTenantAppId?: string;
    // Partner display name
    displayName?: string;
    // Whether device management partner is configured or not
    isConfigured?: boolean;
    // DateTime in UTC when PartnerDevices will be removed
    whenPartnerDevicesWillBeRemovedDateTime?: string;
    // DateTime in UTC when PartnerDevices will be marked as NonCompliant
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: string;
}
export interface ApplePushNotificationCertificate extends Entity {
    // Apple Id of the account used to create the MDM push certificate.
    appleIdentifier?: string;
    // Topic Id.
    topicIdentifier?: string;
    // Last modified date and time for Apple push notification certificate.
    lastModifiedDateTime?: string;
    // The expiration date and time for Apple push notification certificate.
    expirationDateTime?: string;
    // Not yet documented
    certificate?: string;
}
export interface ManagedDeviceOverview extends Entity {
    // Total enrolled device count. Does not include PC devices managed via Intune PC Agent
    enrolledDeviceCount?: number;
    // The number of devices enrolled in MDM
    mdmEnrolledCount?: number;
    // The number of devices enrolled in both MDM and EAS
    dualEnrolledDeviceCount?: number;
    // Device operating system summary.
    deviceOperatingSystemSummary?: DeviceOperatingSystemSummary;
    // Distribution of Exchange Access State in Intune
    deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary;
}
export interface DetectedApp extends Entity {
    // Name of the discovered application. Read-only
    displayName?: string;
    // Version of the discovered application. Read-only
    version?: string;
    // Discovered application size in bytes. Read-only
    sizeInByte?: number;
    // The number of devices that have installed this application
    deviceCount?: number;
    // The devices that have the discovered application installed
    managedDevices?: ManagedDevice[];
}
export interface NotificationMessageTemplate extends Entity {
    // DateTime the object was last modified.
    lastModifiedDateTime?: string;
    // Display name for the Notification Message Template.
    displayName?: string;
    // The default locale to fallback onto when the requested locale is not available.
    defaultLocale?: string;
    /**
     * The Message Template Branding Options. Branding is defined in the Intune Admin Console. Possible values are: none,
     * includeCompanyLogo, includeCompanyName, includeContactInformation.
     */
    brandingOptions?: NotificationTemplateBrandingOptions;
    // The list of localized messages for this Notification Message Template.
    localizedNotificationMessages?: LocalizedNotificationMessage[];
}
export interface RoleDefinition extends Entity {
    // Display Name of the Role definition.
    displayName?: string;
    // Description of the Role definition.
    description?: string;
    /**
     * List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of
     * the rolePermission.
     */
    rolePermissions?: RolePermission[];
    // Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition.
    isBuiltIn?: boolean;
    // List of Role assignments for this role definition.
    roleAssignments?: RoleAssignment[];
}
export interface RoleAssignment extends Entity {
    // The display or friendly name of the role Assignment.
    displayName?: string;
    // Description of the Role Assignment.
    description?: string;
    // List of ids of role scope member security groups. These are IDs from Azure Active Directory.
    resourceScopes?: string[];
    // Role definition this assignment is part of.
    roleDefinition?: RoleDefinition;
}
export interface DeviceAndAppManagementRoleAssignment extends RoleAssignment {
    // The list of ids of role member security groups. These are IDs from Azure Active Directory.
    members?: string[];
}
export interface ResourceOperation extends Entity {
    // Name of the Resource this operation is performed on.
    resourceName?: string;
    /**
     * Type of action this operation is going to perform. The actionName should be concise and limited to as few words as
     * possible.
     */
    actionName?: string;
    /**
     * Description of the resource operation. The description is used in mouse-over text for the operation when shown in the
     * Azure Portal.
     */
    description?: string;
}
export interface RemoteAssistancePartner extends Entity {
    // Display name of the partner.
    displayName?: string;
    // URL of the partner's onboarding portal, where an administrator can configure their Remote Assistance service.
    onboardingUrl?: string;
    // TBD. Possible values are: notOnboarded, onboarding, onboarded.
    onboardingStatus?: RemoteAssistanceOnboardingStatus;
    // Timestamp of the last request sent to Intune by the TEM partner.
    lastConnectionDateTime?: string;
}
export interface TelecomExpenseManagementPartner extends Entity {
    // Display name of the TEM partner.
    displayName?: string;
    // URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
    url?: string;
    // Whether the partner's AAD app has been authorized to access Intune.
    appAuthorized?: boolean;
    // Whether Intune's connection to the TEM service is currently enabled or disabled.
    enabled?: boolean;
    // Timestamp of the last request sent to Intune by the TEM partner.
    lastConnectionDateTime?: string;
}
export interface WindowsInformationProtectionAppLearningSummary extends Entity {
    // Application Name
    applicationName?: string;
    // Application Type. Possible values are: universal, desktop.
    applicationType?: ApplicationType;
    // Device Count
    deviceCount?: number;
}
export interface WindowsInformationProtectionNetworkLearningSummary extends Entity {
    // Website url
    url?: string;
    // Device Count
    deviceCount?: number;
}
export interface TermsAndConditionsAssignment extends Entity {
    // Assignment target that the T&amp;C policy is assigned to.
    target?: DeviceAndAppManagementAssignmentTarget;
}
export interface TermsAndConditionsAcceptanceStatus extends Entity {
    // Display name of the user whose acceptance the entity represents.
    userDisplayName?: string;
    // Most recent version number of the T&amp;C accepted by the user.
    acceptedVersion?: number;
    // DateTime when the terms were last accepted by the user.
    acceptedDateTime?: string;
    // Navigation link to the terms and conditions that are assigned.
    termsAndConditions?: TermsAndConditions;
}
// tslint:disable-next-line: no-empty-interface
export interface ReportRoot extends Entity {}
export interface DeviceConfigurationAssignment extends Entity {
    // The assignment target for the device configuration.
    target?: DeviceAndAppManagementAssignmentTarget;
}
export interface DeviceConfigurationDeviceStatus extends Entity {
    // Device name of the DevicePolicyStatus.
    deviceDisplayName?: string;
    // The User Name that is being reported
    userName?: string;
    // The device model that is being reported
    deviceModel?: string;
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
}
export interface DeviceConfigurationUserStatus extends Entity {
    // User name of the DevicePolicyStatus.
    userDisplayName?: string;
    // Devices count for that user.
    devicesCount?: number;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
}
export interface DeviceConfigurationDeviceOverview extends Entity {
    // Number of pending devices
    pendingCount?: number;
    // Number of not applicable devices
    notApplicableCount?: number;
    // Number of succeeded devices
    successCount?: number;
    // Number of error devices
    errorCount?: number;
    // Number of failed devices
    failedCount?: number;
    // Last update time
    lastUpdateDateTime?: string;
    // Version of the policy for that overview
    configurationVersion?: number;
}
export interface DeviceConfigurationUserOverview extends Entity {
    // Number of pending Users
    pendingCount?: number;
    // Number of not applicable users
    notApplicableCount?: number;
    // Number of succeeded Users
    successCount?: number;
    // Number of error Users
    errorCount?: number;
    // Number of failed Users
    failedCount?: number;
    // Last update time
    lastUpdateDateTime?: string;
    // Version of the policy for that overview
    configurationVersion?: number;
}
export interface SettingStateDeviceSummary extends Entity {
    // Name of the setting
    settingName?: string;
    // Name of the InstancePath for the setting
    instancePath?: string;
    // Device Unkown count for the setting
    unknownDeviceCount?: number;
    // Device Not Applicable count for the setting
    notApplicableDeviceCount?: number;
    // Device Compliant count for the setting
    compliantDeviceCount?: number;
    // Device Compliant count for the setting
    remediatedDeviceCount?: number;
    // Device NonCompliant count for the setting
    nonCompliantDeviceCount?: number;
    // Device error count for the setting
    errorDeviceCount?: number;
    // Device conflict error count for the setting
    conflictDeviceCount?: number;
}
export interface DeviceCompliancePolicyAssignment extends Entity {
    // Target for the compliance policy assignment.
    target?: DeviceAndAppManagementAssignmentTarget;
}
export interface DeviceComplianceScheduledActionForRule extends Entity {
    // Name of the rule which this scheduled action applies to.
    ruleName?: string;
    // The list of scheduled action configurations for this compliance policy.
    scheduledActionConfigurations?: DeviceComplianceActionItem[];
}
export interface DeviceComplianceDeviceStatus extends Entity {
    // Device name of the DevicePolicyStatus.
    deviceDisplayName?: string;
    // The User Name that is being reported
    userName?: string;
    // The device model that is being reported
    deviceModel?: string;
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
}
export interface DeviceComplianceUserStatus extends Entity {
    // User name of the DevicePolicyStatus.
    userDisplayName?: string;
    // Devices count for that user.
    devicesCount?: number;
    /**
     * Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated,
     * nonCompliant, error, conflict, notAssigned.
     */
    status?: ComplianceStatus;
    // Last modified date time of the policy report.
    lastReportedDateTime?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
}
export interface DeviceComplianceDeviceOverview extends Entity {
    // Number of pending devices
    pendingCount?: number;
    // Number of not applicable devices
    notApplicableCount?: number;
    // Number of succeeded devices
    successCount?: number;
    // Number of error devices
    errorCount?: number;
    // Number of failed devices
    failedCount?: number;
    // Last update time
    lastUpdateDateTime?: string;
    // Version of the policy for that overview
    configurationVersion?: number;
}
export interface DeviceComplianceUserOverview extends Entity {
    // Number of pending Users
    pendingCount?: number;
    // Number of not applicable users
    notApplicableCount?: number;
    // Number of succeeded Users
    successCount?: number;
    // Number of error Users
    errorCount?: number;
    // Number of failed Users
    failedCount?: number;
    // Last update time
    lastUpdateDateTime?: string;
    // Version of the policy for that overview
    configurationVersion?: number;
}
export interface DeviceComplianceActionItem extends Entity {
    // Number of hours to wait till the action will be enforced. Valid values 0 to 8760
    gracePeriodHours?: number;
    /**
     * What action to take. Possible values are: noAction, notification, block, retire, wipe, removeResourceAccessProfiles,
     * pushNotification.
     */
    actionType?: DeviceComplianceActionType;
    // What notification Message template to use
    notificationTemplateId?: string;
    // A list of group IDs to speicify who to CC this notification message to.
    notificationMessageCCList?: string[];
}
export interface AndroidCustomConfiguration extends DeviceConfiguration {
    // OMA settings. This collection can contain a maximum of 1000 elements.
    omaSettings?: OmaSetting[];
}
export interface AndroidGeneralDeviceConfiguration extends DeviceConfiguration {
    // Indicates whether or not to block clipboard sharing to copy and paste between applications.
    appsBlockClipboardSharing?: boolean;
    // Indicates whether or not to block copy and paste within applications.
    appsBlockCopyPaste?: boolean;
    // Indicates whether or not to block the YouTube app.
    appsBlockYouTube?: boolean;
    // Indicates whether or not to block Bluetooth.
    bluetoothBlocked?: boolean;
    // Indicates whether or not to block the use of the camera.
    cameraBlocked?: boolean;
    // Indicates whether or not to block data roaming.
    cellularBlockDataRoaming?: boolean;
    // Indicates whether or not to block SMS/MMS messaging.
    cellularBlockMessaging?: boolean;
    // Indicates whether or not to block voice roaming.
    cellularBlockVoiceRoaming?: boolean;
    // Indicates whether or not to block syncing Wi-Fi tethering.
    cellularBlockWiFiTethering?: boolean;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection
     * can contain a maximum of 10000 elements.
     */
    compliantAppsList?: AppListItem[];
    // Type of list that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    compliantAppListType?: AppListType;
    // Indicates whether or not to block diagnostic data submission.
    diagnosticDataBlockSubmission?: boolean;
    // Indicates whether or not to block location services.
    locationServicesBlocked?: boolean;
    // Indicates whether or not to block Google account auto sync.
    googleAccountBlockAutoSync?: boolean;
    // Indicates whether or not to block the Google Play store.
    googlePlayStoreBlocked?: boolean;
    // Indicates whether or not to block the screen sleep button while in Kiosk Mode.
    kioskModeBlockSleepButton?: boolean;
    // Indicates whether or not to block the volume buttons while in Kiosk Mode.
    kioskModeBlockVolumeButtons?: boolean;
    /**
     * A list of apps that will be allowed to run when the device is in Kiosk Mode. This collection can contain a maximum of
     * 500 elements.
     */
    kioskModeApps?: AppListItem[];
    // Indicates whether or not to block Near-Field Communication.
    nfcBlocked?: boolean;
    // Indicates whether or not to block fingerprint unlock.
    passwordBlockFingerprintUnlock?: boolean;
    // Indicates whether or not to block Smart Lock and other trust agents.
    passwordBlockTrustAgents?: boolean;
    // Number of days before the password expires. Valid values 1 to 365
    passwordExpirationDays?: number;
    // Minimum length of passwords. Valid values 4 to 16
    passwordMinimumLength?: number;
    // Minutes of inactivity before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    // Number of previous passwords to block. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: number;
    // Number of sign in failures allowed before factory reset. Valid values 1 to 16
    passwordSignInFailureCountBeforeFactoryReset?: number;
    /**
     * Type of password that is required. Possible values are: deviceDefault, alphabetic, alphanumeric,
     * alphanumericWithSymbols, lowSecurityBiometric, numeric, numericComplex, any.
     */
    passwordRequiredType?: AndroidRequiredPasswordType;
    // Indicates whether or not to require a password.
    passwordRequired?: boolean;
    // Indicates whether or not to block powering off the device.
    powerOffBlocked?: boolean;
    // Indicates whether or not to block user performing a factory reset.
    factoryResetBlocked?: boolean;
    // Indicates whether or not to block screenshots.
    screenCaptureBlocked?: boolean;
    // Indicates whether or not to allow device sharing mode.
    deviceSharingAllowed?: boolean;
    // Indicates whether or not to block Google Backup.
    storageBlockGoogleBackup?: boolean;
    // Indicates whether or not to block removable storage usage.
    storageBlockRemovableStorage?: boolean;
    // Indicates whether or not to require device encryption.
    storageRequireDeviceEncryption?: boolean;
    // Indicates whether or not to require removable storage encryption.
    storageRequireRemovableStorageEncryption?: boolean;
    // Indicates whether or not to block the use of the Voice Assistant.
    voiceAssistantBlocked?: boolean;
    // Indicates whether or not to block voice dialing.
    voiceDialingBlocked?: boolean;
    // Indicates whether or not to block popups within the web browser.
    webBrowserBlockPopups?: boolean;
    // Indicates whether or not to block the web browser's auto fill feature.
    webBrowserBlockAutofill?: boolean;
    // Indicates whether or not to block JavaScript within the web browser.
    webBrowserBlockJavaScript?: boolean;
    // Indicates whether or not to block the web browser.
    webBrowserBlocked?: boolean;
    /**
     * Cookie settings within the web browser. Possible values are: browserDefault, blockAlways, allowCurrentWebSite,
     * allowFromWebsitesVisited, allowAlways.
     */
    webBrowserCookieSettings?: WebBrowserCookieSettings;
    // Indicates whether or not to block syncing Wi-Fi.
    wiFiBlocked?: boolean;
    // List of apps which can be installed on the KNOX device. This collection can contain a maximum of 500 elements.
    appsInstallAllowList?: AppListItem[];
    /**
     * List of apps which are blocked from being launched on the KNOX device. This collection can contain a maximum of 500
     * elements.
     */
    appsLaunchBlockList?: AppListItem[];
    // List of apps to be hidden on the KNOX device. This collection can contain a maximum of 500 elements.
    appsHideList?: AppListItem[];
    // Require the Android Verify apps feature is turned on.
    securityRequireVerifyApps?: boolean;
}
export interface AndroidWorkProfileCustomConfiguration extends DeviceConfiguration {
    // OMA settings. This collection can contain a maximum of 500 elements.
    omaSettings?: OmaSetting[];
}
export interface AndroidWorkProfileGeneralDeviceConfiguration extends DeviceConfiguration {
    // Indicates whether or not to block fingerprint unlock.
    passwordBlockFingerprintUnlock?: boolean;
    // Indicates whether or not to block Smart Lock and other trust agents.
    passwordBlockTrustAgents?: boolean;
    // Number of days before the password expires. Valid values 1 to 365
    passwordExpirationDays?: number;
    // Minimum length of passwords. Valid values 4 to 16
    passwordMinimumLength?: number;
    // Minutes of inactivity before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    // Number of previous passwords to block. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: number;
    // Number of sign in failures allowed before factory reset. Valid values 1 to 16
    passwordSignInFailureCountBeforeFactoryReset?: number;
    /**
     * Type of password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required, atLeastNumeric,
     * numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols.
     */
    passwordRequiredType?: AndroidWorkProfileRequiredPasswordType;
    /**
     * Type of data sharing that is allowed. Possible values are: deviceDefault, preventAny, allowPersonalToWork,
     * noRestrictions.
     */
    workProfileDataSharingType?: AndroidWorkProfileCrossProfileDataSharingType;
    // Indicates whether or not to block notifications while device locked.
    workProfileBlockNotificationsWhileDeviceLocked?: boolean;
    // Block users from adding/removing accounts in work profile.
    workProfileBlockAddingAccounts?: boolean;
    // Allow bluetooth devices to access enterprise contacts.
    workProfileBluetoothEnableContactSharing?: boolean;
    // Block screen capture in work profile.
    workProfileBlockScreenCapture?: boolean;
    // Block display work profile caller ID in personal profile.
    workProfileBlockCrossProfileCallerId?: boolean;
    // Block work profile camera.
    workProfileBlockCamera?: boolean;
    // Block work profile contacts availability in personal profile.
    workProfileBlockCrossProfileContactsSearch?: boolean;
    // Boolean that indicates if the setting disallow cross profile copy/paste is enabled.
    workProfileBlockCrossProfileCopyPaste?: boolean;
    // Type of password that is required. Possible values are: deviceDefault, prompt, autoGrant, autoDeny.
    workProfileDefaultAppPermissionPolicy?: AndroidWorkProfileDefaultAppPermissionPolicyType;
    // Indicates whether or not to block fingerprint unlock for work profile.
    workProfilePasswordBlockFingerprintUnlock?: boolean;
    // Indicates whether or not to block Smart Lock and other trust agents for work profile.
    workProfilePasswordBlockTrustAgents?: boolean;
    // Number of days before the work profile password expires. Valid values 1 to 365
    workProfilePasswordExpirationDays?: number;
    // Minimum length of work profile password. Valid values 4 to 16
    workProfilePasswordMinimumLength?: number;
    // Minimum # of numeric characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinNumericCharacters?: number;
    // Minimum # of non-letter characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinNonLetterCharacters?: number;
    // Minimum # of letter characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinLetterCharacters?: number;
    // Minimum # of lower-case characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinLowerCaseCharacters?: number;
    // Minimum # of upper-case characters required in work profile password. Valid values 1 to 10
    workProfilePasswordMinUpperCaseCharacters?: number;
    // Minimum # of symbols required in work profile password. Valid values 1 to 10
    workProfilePasswordMinSymbolCharacters?: number;
    // Minutes of inactivity before the screen times out.
    workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number;
    // Number of previous work profile passwords to block. Valid values 0 to 24
    workProfilePasswordPreviousPasswordBlockCount?: number;
    // Number of sign in failures allowed before work profile is removed and all corporate data deleted. Valid values 1 to 16
    workProfilePasswordSignInFailureCountBeforeFactoryReset?: number;
    /**
     * Type of work profile password that is required. Possible values are: deviceDefault, lowSecurityBiometric, required,
     * atLeastNumeric, numericComplex, atLeastAlphabetic, atLeastAlphanumeric, alphanumericWithSymbols.
     */
    workProfilePasswordRequiredType?: AndroidWorkProfileRequiredPasswordType;
    // Password is required or not for work profile
    workProfileRequirePassword?: boolean;
    // Require the Android Verify apps feature is turned on.
    securityRequireVerifyApps?: boolean;
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IosCertificateProfile extends DeviceConfiguration {}
// tslint:disable-next-line: interface-name
export interface IosCustomConfiguration extends DeviceConfiguration {
    // Name that is displayed to the user.
    payloadName?: string;
    // Payload file name (.mobileconfig
    payloadFileName?: string;
    // Payload. (UTF8 encoded byte array)
    payload?: number;
}
// tslint:disable-next-line: interface-name
export interface IosGeneralDeviceConfiguration extends DeviceConfiguration {
    // Indicates whether or not to allow account modification when the device is in supervised mode.
    accountBlockModification?: boolean;
    // Indicates whether or not to allow activation lock when the device is in the supervised mode.
    activationLockAllowWhenSupervised?: boolean;
    // Indicates whether or not to allow AirDrop when the device is in supervised mode.
    airDropBlocked?: boolean;
    // Indicates whether or not to cause AirDrop to be considered an unmanaged drop target (iOS 9.0 and later).
    airDropForceUnmanagedDropTarget?: boolean;
    // Indicates whether or not to enforce all devices receiving AirPlay requests from this device to use a pairing password.
    airPlayForcePairingPasswordForOutgoingRequests?: boolean;
    // Indicates whether or not to allow Apple Watch pairing when the device is in supervised mode (iOS 9.0 and later).
    appleWatchBlockPairing?: boolean;
    // Indicates whether or not to force a paired Apple Watch to use Wrist Detection (iOS 8.2 and later).
    appleWatchForceWristDetection?: boolean;
    // Indicates whether or not to block the user from using News when the device is in supervised mode (iOS 9.0 and later).
    appleNewsBlocked?: boolean;
    /**
     * Gets or sets the list of iOS apps allowed to autonomously enter Single App Mode. Supervised only. iOS 7.0 and later.
     * This collection can contain a maximum of 500 elements.
     */
    appsSingleAppModeList?: AppListItem[];
    /**
     * List of apps in the visibility list (either visible/launchable apps list or hidden/unlaunchable apps list, controlled
     * by AppsVisibilityListType) (iOS 9.3 and later). This collection can contain a maximum of 10000 elements.
     */
    appsVisibilityList?: AppListItem[];
    // Type of list that is in the AppsVisibilityList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    appsVisibilityListType?: AppListType;
    /**
     * Indicates whether or not to block the automatic downloading of apps purchased on other devices when the device is in
     * supervised mode (iOS 9.0 and later).
     */
    appStoreBlockAutomaticDownloads?: boolean;
    // Indicates whether or not to block the user from using the App Store.
    appStoreBlocked?: boolean;
    // Indicates whether or not to block the user from making in app purchases.
    appStoreBlockInAppPurchases?: boolean;
    /**
     * Indicates whether or not to block the App Store app, not restricting installation through Host apps. Applies to
     * supervised mode only (iOS 9.0 and later).
     */
    appStoreBlockUIAppInstallation?: boolean;
    // Indicates whether or not to require a password when using the app store.
    appStoreRequirePassword?: boolean;
    /**
     * Indicates whether or not to allow modification of Bluetooth settings when the device is in supervised mode (iOS 10.0
     * and later).
     */
    bluetoothBlockModification?: boolean;
    // Indicates whether or not to block the user from accessing the camera of the device.
    cameraBlocked?: boolean;
    // Indicates whether or not to block data roaming.
    cellularBlockDataRoaming?: boolean;
    // Indicates whether or not to block global background fetch while roaming.
    cellularBlockGlobalBackgroundFetchWhileRoaming?: boolean;
    // Indicates whether or not to allow changes to cellular app data usage settings when the device is in supervised mode.
    cellularBlockPerAppDataModification?: boolean;
    // Indicates whether or not to block Personal Hotspot.
    cellularBlockPersonalHotspot?: boolean;
    // Indicates whether or not to block voice roaming.
    cellularBlockVoiceRoaming?: boolean;
    // Indicates whether or not to block untrusted TLS certificates.
    certificatesBlockUntrustedTlsCertificates?: boolean;
    /**
     * Indicates whether or not to allow remote screen observation by Classroom app when the device is in supervised mode (iOS
     * 9.3 and later).
     */
    classroomAppBlockRemoteScreenObservation?: boolean;
    /**
     * Indicates whether or not to automatically give permission to the teacher of a managed course on the Classroom app to
     * view a student's screen without prompting when the device is in supervised mode.
     */
    classroomAppForceUnpromptedScreenObservation?: boolean;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection
     * can contain a maximum of 10000 elements.
     */
    compliantAppsList?: AppListItem[];
    // List that is in the AppComplianceList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    compliantAppListType?: AppListType;
    /**
     * Indicates whether or not to block the user from installing configuration profiles and certificates interactively when
     * the device is in supervised mode.
     */
    configurationProfileBlockChanges?: boolean;
    // Indicates whether or not to block definition lookup when the device is in supervised mode (iOS 8.1.3 and later ).
    definitionLookupBlocked?: boolean;
    /**
     * Indicates whether or not to allow the user to enables restrictions in the device settings when the device is in
     * supervised mode.
     */
    deviceBlockEnableRestrictions?: boolean;
    /**
     * Indicates whether or not to allow the use of the 'Erase all content and settings' option on the device when the device
     * is in supervised mode.
     */
    deviceBlockEraseContentAndSettings?: boolean;
    // Indicates whether or not to allow device name modification when the device is in supervised mode (iOS 9.0 and later).
    deviceBlockNameModification?: boolean;
    // Indicates whether or not to block diagnostic data submission.
    diagnosticDataBlockSubmission?: boolean;
    /**
     * Indicates whether or not to allow diagnostics submission settings modification when the device is in supervised mode
     * (iOS 9.3.2 and later).
     */
    diagnosticDataBlockSubmissionModification?: boolean;
    // Indicates whether or not to block the user from viewing managed documents in unmanaged apps.
    documentsBlockManagedDocumentsInUnmanagedApps?: boolean;
    // Indicates whether or not to block the user from viewing unmanaged documents in managed apps.
    documentsBlockUnmanagedDocumentsInManagedApps?: boolean;
    // An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
    emailInDomainSuffixes?: string[];
    // Indicates whether or not to block the user from trusting an enterprise app.
    enterpriseAppBlockTrust?: boolean;
    // Indicates whether or not to block the user from modifying the enterprise app trust settings.
    enterpriseAppBlockTrustModification?: boolean;
    // Indicates whether or not to block the user from using FaceTime.
    faceTimeBlocked?: boolean;
    // Indicates whether or not to block Find My Friends when the device is in supervised mode.
    findMyFriendsBlocked?: boolean;
    // Indicates whether or not to block the user from having friends in Game Center.
    gamingBlockGameCenterFriends?: boolean;
    // Indicates whether or not to block the user from using multiplayer gaming.
    gamingBlockMultiplayer?: boolean;
    // Indicates whether or not to block the user from using Game Center when the device is in supervised mode.
    gameCenterBlocked?: boolean;
    /**
     * indicates whether or not to allow host pairing to control the devices an iOS device can pair with when the iOS device
     * is in supervised mode.
     */
    hostPairingBlocked?: boolean;
    // Indicates whether or not to block the user from using the iBooks Store when the device is in supervised mode.
    iBooksStoreBlocked?: boolean;
    // Indicates whether or not to block the user from downloading media from the iBookstore that has been tagged as erotica.
    iBooksStoreBlockErotica?: boolean;
    /**
     * Indicates whether or not to block the user from continuing work they started on iOS device to another iOS or macOS
     * device.
     */
    iCloudBlockActivityContinuation?: boolean;
    // Indicates whether or not to block iCloud backup.
    iCloudBlockBackup?: boolean;
    // Indicates whether or not to block iCloud document sync.
    iCloudBlockDocumentSync?: boolean;
    // Indicates whether or not to block Managed Apps Cloud Sync.
    iCloudBlockManagedAppsSync?: boolean;
    // Indicates whether or not to block iCloud Photo Library.
    iCloudBlockPhotoLibrary?: boolean;
    // Indicates whether or not to block iCloud Photo Stream Sync.
    iCloudBlockPhotoStreamSync?: boolean;
    // Indicates whether or not to block Shared Photo Stream.
    iCloudBlockSharedPhotoStream?: boolean;
    // Indicates whether or not to require backups to iCloud be encrypted.
    iCloudRequireEncryptedBackup?: boolean;
    // Indicates whether or not to block the user from accessing explicit content in iTunes and the App Store.
    iTunesBlockExplicitContent?: boolean;
    /**
     * Indicates whether or not to block Music service and revert Music app to classic mode when the device is in supervised
     * mode (iOS 9.3 and later and macOS 10.12 and later).
     */
    iTunesBlockMusicService?: boolean;
    /**
     * Indicates whether or not to block the user from using iTunes Radio when the device is in supervised mode (iOS 9.3 and
     * later).
     */
    iTunesBlockRadio?: boolean;
    // Indicates whether or not to block keyboard auto-correction when the device is in supervised mode (iOS 8.1.3 and later).
    keyboardBlockAutoCorrect?: boolean;
    // Indicates whether or not to block the user from using dictation input when the device is in supervised mode.
    keyboardBlockDictation?: boolean;
    // Indicates whether or not to block predictive keyboards when device is in supervised mode (iOS 8.1.3 and later).
    keyboardBlockPredictive?: boolean;
    // Indicates whether or not to block keyboard shortcuts when the device is in supervised mode (iOS 9.0 and later).
    keyboardBlockShortcuts?: boolean;
    // Indicates whether or not to block keyboard spell-checking when the device is in supervised mode (iOS 8.1.3 and later).
    keyboardBlockSpellCheck?: boolean;
    // Indicates whether or not to allow assistive speak while in kiosk mode.
    kioskModeAllowAssistiveSpeak?: boolean;
    // Indicates whether or not to allow access to the Assistive Touch Settings while in kiosk mode.
    kioskModeAllowAssistiveTouchSettings?: boolean;
    // Indicates whether or not to allow device auto lock while in kiosk mode.
    kioskModeAllowAutoLock?: boolean;
    // Indicates whether or not to allow access to the Color Inversion Settings while in kiosk mode.
    kioskModeAllowColorInversionSettings?: boolean;
    // Indicates whether or not to allow use of the ringer switch while in kiosk mode.
    kioskModeAllowRingerSwitch?: boolean;
    // Indicates whether or not to allow screen rotation while in kiosk mode.
    kioskModeAllowScreenRotation?: boolean;
    // Indicates whether or not to allow use of the sleep button while in kiosk mode.
    kioskModeAllowSleepButton?: boolean;
    // Indicates whether or not to allow use of the touchscreen while in kiosk mode.
    kioskModeAllowTouchscreen?: boolean;
    // Indicates whether or not to allow access to the voice over settings while in kiosk mode.
    kioskModeAllowVoiceOverSettings?: boolean;
    // Indicates whether or not to allow use of the volume buttons while in kiosk mode.
    kioskModeAllowVolumeButtons?: boolean;
    // Indicates whether or not to allow access to the zoom settings while in kiosk mode.
    kioskModeAllowZoomSettings?: boolean;
    // URL in the app store to the app to use for kiosk mode. Use if KioskModeManagedAppId is not known.
    kioskModeAppStoreUrl?: string;
    // ID for built-in apps to use for kiosk mode. Used when KioskModeManagedAppId and KioskModeAppStoreUrl are not set.
    kioskModeBuiltInAppId?: string;
    // Indicates whether or not to require assistive touch while in kiosk mode.
    kioskModeRequireAssistiveTouch?: boolean;
    // Indicates whether or not to require color inversion while in kiosk mode.
    kioskModeRequireColorInversion?: boolean;
    // Indicates whether or not to require mono audio while in kiosk mode.
    kioskModeRequireMonoAudio?: boolean;
    // Indicates whether or not to require voice over while in kiosk mode.
    kioskModeRequireVoiceOver?: boolean;
    // Indicates whether or not to require zoom while in kiosk mode.
    kioskModeRequireZoom?: boolean;
    /**
     * Managed app id of the app to use for kiosk mode. If KioskModeManagedAppId is specified then KioskModeAppStoreUrl will
     * be ignored.
     */
    kioskModeManagedAppId?: string;
    // Indicates whether or not to block the user from using control center on the lock screen.
    lockScreenBlockControlCenter?: boolean;
    // Indicates whether or not to block the user from using the notification view on the lock screen.
    lockScreenBlockNotificationView?: boolean;
    // Indicates whether or not to block the user from using passbook when the device is locked.
    lockScreenBlockPassbook?: boolean;
    // Indicates whether or not to block the user from using the Today View on the lock screen.
    lockScreenBlockTodayView?: boolean;
    // Media content rating settings for Australia
    mediaContentRatingAustralia?: MediaContentRatingAustralia;
    // Media content rating settings for Canada
    mediaContentRatingCanada?: MediaContentRatingCanada;
    // Media content rating settings for France
    mediaContentRatingFrance?: MediaContentRatingFrance;
    // Media content rating settings for Germany
    mediaContentRatingGermany?: MediaContentRatingGermany;
    // Media content rating settings for Ireland
    mediaContentRatingIreland?: MediaContentRatingIreland;
    // Media content rating settings for Japan
    mediaContentRatingJapan?: MediaContentRatingJapan;
    // Media content rating settings for New Zealand
    mediaContentRatingNewZealand?: MediaContentRatingNewZealand;
    // Media content rating settings for United Kingdom
    mediaContentRatingUnitedKingdom?: MediaContentRatingUnitedKingdom;
    // Media content rating settings for United States
    mediaContentRatingUnitedStates?: MediaContentRatingUnitedStates;
    /**
     * List of managed apps and the network rules that applies to them. This collection can contain a maximum of 1000
     * elements.
     */
    networkUsageRules?: IosNetworkUsageRule[];
    /**
     * Media content rating settings for Apps. Possible values are: allAllowed, allBlocked, agesAbove4, agesAbove9,
     * agesAbove12, agesAbove17.
     */
    mediaContentRatingApps?: RatingAppsType;
    // Indicates whether or not to block the user from using the Messages app on the supervised device.
    messagesBlocked?: boolean;
    // Indicates whether or not to allow notifications settings modification (iOS 9.3 and later).
    notificationsBlockSettingsModification?: boolean;
    // Indicates whether or not to block fingerprint unlock.
    passcodeBlockFingerprintUnlock?: boolean;
    // Block modification of registered Touch ID fingerprints when in supervised mode.
    passcodeBlockFingerprintModification?: boolean;
    // Indicates whether or not to allow passcode modification on the supervised device (iOS 9.0 and later).
    passcodeBlockModification?: boolean;
    // Indicates whether or not to block simple passcodes.
    passcodeBlockSimple?: boolean;
    // Number of days before the passcode expires. Valid values 1 to 65535
    passcodeExpirationDays?: number;
    // Minimum length of passcode. Valid values 4 to 14
    passcodeMinimumLength?: number;
    // Minutes of inactivity before a passcode is required.
    passcodeMinutesOfInactivityBeforeLock?: number;
    // Minutes of inactivity before the screen times out.
    passcodeMinutesOfInactivityBeforeScreenTimeout?: number;
    // Number of character sets a passcode must contain. Valid values 0 to 4
    passcodeMinimumCharacterSetCount?: number;
    // Number of previous passcodes to block. Valid values 1 to 24
    passcodePreviousPasscodeBlockCount?: number;
    // Number of sign in failures allowed before wiping the device. Valid values 4 to 11
    passcodeSignInFailureCountBeforeWipe?: number;
    // Type of passcode that is required. Possible values are: deviceDefault, alphanumeric, numeric.
    passcodeRequiredType?: RequiredPasswordType;
    // Indicates whether or not to require a passcode.
    passcodeRequired?: boolean;
    // Indicates whether or not to block the user from using podcasts on the supervised device (iOS 8.0 and later).
    podcastsBlocked?: boolean;
    // Indicates whether or not to block the user from using Auto fill in Safari.
    safariBlockAutofill?: boolean;
    // Indicates whether or not to block JavaScript in Safari.
    safariBlockJavaScript?: boolean;
    // Indicates whether or not to block popups in Safari.
    safariBlockPopups?: boolean;
    // Indicates whether or not to block the user from using Safari.
    safariBlocked?: boolean;
    /**
     * Cookie settings for Safari. Possible values are: browserDefault, blockAlways, allowCurrentWebSite,
     * allowFromWebsitesVisited, allowAlways.
     */
    safariCookieSettings?: WebBrowserCookieSettings;
    // URLs matching the patterns listed here will be considered managed.
    safariManagedDomains?: string[];
    /**
     * Users can save passwords in Safari only from URLs matching the patterns listed here. Applies to devices in supervised
     * mode (iOS 9.3 and later).
     */
    safariPasswordAutoFillDomains?: string[];
    // Indicates whether or not to require fraud warning in Safari.
    safariRequireFraudWarning?: boolean;
    // Indicates whether or not to block the user from taking Screenshots.
    screenCaptureBlocked?: boolean;
    // Indicates whether or not to block the user from using Siri.
    siriBlocked?: boolean;
    // Indicates whether or not to block the user from using Siri when locked.
    siriBlockedWhenLocked?: boolean;
    // Indicates whether or not to block Siri from querying user-generated content when used on a supervised device.
    siriBlockUserGeneratedContent?: boolean;
    // Indicates whether or not to prevent Siri from dictating, or speaking profane language on supervised device.
    siriRequireProfanityFilter?: boolean;
    // Indicates whether or not to block Spotlight search from returning internet results on supervised device.
    spotlightBlockInternetResults?: boolean;
    // Indicates whether or not to block voice dialing.
    voiceDialingBlocked?: boolean;
    // Indicates whether or not to allow wallpaper modification on supervised device (iOS 9.0 and later) .
    wallpaperBlockModification?: boolean;
    /**
     * Indicates whether or not to force the device to use only Wi-Fi networks from configuration profiles when the device is
     * in supervised mode.
     */
    wiFiConnectOnlyToConfiguredNetworks?: boolean;
}
// tslint:disable-next-line: interface-name
export interface IosUpdateConfiguration extends DeviceConfiguration {
    // Active Hours Start (active hours mean the time window when updates install should not happen)
    activeHoursStart?: string;
    // Active Hours End (active hours mean the time window when updates install should not happen)
    activeHoursEnd?: string;
    // Days in week for which active hours are configured. This collection can contain a maximum of 7 elements.
    scheduledInstallDays?: DayOfWeek[];
    // UTC Time Offset indicated in minutes
    utcTimeOffsetInMinutes?: number;
}
export interface MacOSCustomConfiguration extends DeviceConfiguration {
    // Name that is displayed to the user.
    payloadName?: string;
    // Payload file name (.mobileconfig
    payloadFileName?: string;
    // Payload. (UTF8 encoded byte array)
    payload?: number;
}
export interface MacOSGeneralDeviceConfiguration extends DeviceConfiguration {
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection
     * can contain a maximum of 10000 elements.
     */
    compliantAppsList?: AppListItem[];
    // List that is in the CompliantAppsList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    compliantAppListType?: AppListType;
    // An email address lacking a suffix that matches any of these strings will be considered out-of-domain.
    emailInDomainSuffixes?: string[];
    // Block simple passwords.
    passwordBlockSimple?: boolean;
    // Number of days before the password expires.
    passwordExpirationDays?: number;
    // Number of character sets a password must contain. Valid values 0 to 4
    passwordMinimumCharacterSetCount?: number;
    // Minimum length of passwords.
    passwordMinimumLength?: number;
    // Minutes of inactivity required before a password is required.
    passwordMinutesOfInactivityBeforeLock?: number;
    // Minutes of inactivity required before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    // Number of previous passwords to block.
    passwordPreviousPasswordBlockCount?: number;
    // Type of password that is required. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // Whether or not to require a password.
    passwordRequired?: boolean;
}
// tslint:disable-next-line: no-empty-interface
export interface AppleDeviceFeaturesConfigurationBase extends DeviceConfiguration {}
// tslint:disable-next-line: interface-name
export interface IosDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase {
    // Asset tag information for the device, displayed on the login window and lock screen.
    assetTagTemplate?: string;
    // A footnote displayed on the login window and lock screen. Available in iOS 9.3.1 and later.
    lockScreenFootnote?: string;
    // A list of app and folders to appear on the Home Screen Dock. This collection can contain a maximum of 500 elements.
    homeScreenDockIcons?: IosHomeScreenItem[];
    // A list of pages on the Home Screen. This collection can contain a maximum of 500 elements.
    homeScreenPages?: IosHomeScreenPage[];
    /**
     * Notification settings for each bundle id. Applicable to devices in supervised mode only (iOS 9.3 and later). This
     * collection can contain a maximum of 500 elements.
     */
    notificationSettings?: IosNotificationSettings[];
}
// tslint:disable-next-line: no-empty-interface
export interface MacOSDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase {}
export interface Windows10EndpointProtectionConfiguration extends DeviceConfiguration {
    // Blocks stateful FTP connections to the device
    firewallBlockStatefulFTP?: boolean;
    /**
     * Configures the idle timeout for security associations, in seconds, from 300 to 3600 inclusive. This is the period after
     * which security associations will expire and be deleted. Valid values 300 to 3600
     */
    firewallIdleTimeoutForSecurityAssociationInSeconds?: number;
    // Select the preshared key encoding to be used. Possible values are: deviceDefault, none, utF8.
    firewallPreSharedKeyEncodingMethod?: FirewallPreSharedKeyEncodingMethodType;
    // Configures IPSec exemptions to allow neighbor discovery IPv6 ICMP type-codes
    firewallIPSecExemptionsAllowNeighborDiscovery?: boolean;
    // Configures IPSec exemptions to allow ICMP
    firewallIPSecExemptionsAllowICMP?: boolean;
    // Configures IPSec exemptions to allow router discovery IPv6 ICMP type-codes
    firewallIPSecExemptionsAllowRouterDiscovery?: boolean;
    // Configures IPSec exemptions to allow both IPv4 and IPv6 DHCP traffic
    firewallIPSecExemptionsAllowDHCP?: boolean;
    /**
     * Specify how the certificate revocation list is to be enforced. Possible values are: deviceDefault, none, attempt,
     * require.
     */
    firewallCertificateRevocationListCheckMethod?: FirewallCertificateRevocationListCheckMethodType;
    /**
     * If an authentication set is not fully supported by a keying module, direct the module to ignore only unsupported
     * authentication suites rather than the entire set
     */
    firewallMergeKeyingModuleSettings?: boolean;
    /**
     * Configures how packet queueing should be applied in the tunnel gateway scenario. Possible values are: deviceDefault,
     * disabled, queueInbound, queueOutbound, queueBoth.
     */
    firewallPacketQueueingMethod?: FirewallPacketQueueingMethodType;
    // Configures the firewall profile settings for domain networks
    firewallProfileDomain?: WindowsFirewallNetworkProfile;
    // Configures the firewall profile settings for public networks
    firewallProfilePublic?: WindowsFirewallNetworkProfile;
    // Configures the firewall profile settings for private networks
    firewallProfilePrivate?: WindowsFirewallNetworkProfile;
    // List of exe files and folders to be excluded from attack surface reduction rules
    defenderAttackSurfaceReductionExcludedPaths?: string[];
    // List of paths to exe that are allowed to access protected folders
    defenderGuardedFoldersAllowedAppPaths?: string[];
    // List of folder paths to be added to the list of protected folders
    defenderAdditionalGuardedFolders?: string[];
    // Xml content containing information regarding exploit protection details.
    defenderExploitProtectionXml?: number;
    // Name of the file from which DefenderExploitProtectionXml was obtained.
    defenderExploitProtectionXmlFileName?: string;
    // Indicates whether or not to block user from overriding Exploit Protection settings.
    defenderSecurityCenterBlockExploitProtectionOverride?: boolean;
    /**
     * Enables the Admin to choose what types of app to allow on devices. Possible values are: notConfigured,
     * enforceComponentsAndStoreApps, auditComponentsAndStoreApps, enforceComponentsStoreAppsAndSmartlocker,
     * auditComponentsStoreAppsAndSmartlocker.
     */
    appLockerApplicationControl?: AppLockerApplicationControlType;
    // Allows IT Admins to configure SmartScreen for Windows.
    smartScreenEnableInShell?: boolean;
    // Allows IT Admins to control whether users can ignore SmartScreen warnings and run malicious files.
    smartScreenBlockOverrideForFiles?: boolean;
    // Enable Windows Defender Application Guard
    applicationGuardEnabled?: boolean;
    /**
     * Block clipboard to transfer image file, text file or neither of them. Possible values are: notConfigured,
     * blockImageAndTextFile, blockImageFile, blockNone, blockTextFile.
     */
    applicationGuardBlockFileTransfer?: ApplicationGuardBlockFileTransferType;
    // Block enterprise sites to load non-enterprise content, such as third party plug-ins
    applicationGuardBlockNonEnterpriseContent?: boolean;
    // Allow persisting user generated data inside the App Guard Containter (favorites, cookies, web passwords, etc.)
    applicationGuardAllowPersistence?: boolean;
    /**
     * Force auditing will persist Windows logs and events to meet security/compliance criteria (sample events are user
     * login-logoff, use of privilege rights, software installation, system changes, etc.)
     */
    applicationGuardForceAuditing?: boolean;
    /**
     * Block clipboard to share data from Host to Container, or from Container to Host, or both ways, or neither ways.
     * Possible values are: notConfigured, blockBoth, blockHostToContainer, blockContainerToHost, blockNone.
     */
    applicationGuardBlockClipboardSharing?: ApplicationGuardBlockClipboardSharingType;
    // Allow printing to PDF from Container
    applicationGuardAllowPrintToPDF?: boolean;
    // Allow printing to XPS from Container
    applicationGuardAllowPrintToXPS?: boolean;
    // Allow printing to Local Printers from Container
    applicationGuardAllowPrintToLocalPrinters?: boolean;
    // Allow printing to Network Printers from Container
    applicationGuardAllowPrintToNetworkPrinters?: boolean;
    // Allows the Admin to disable the warning prompt for other disk encryption on the user machines.
    bitLockerDisableWarningForOtherDiskEncryption?: boolean;
    // Allows the admin to require encryption to be turned on using BitLocker. This policy is valid only for a mobile SKU.
    bitLockerEnableStorageCardEncryptionOnMobile?: boolean;
    // Allows the admin to require encryption to be turned on using BitLocker.
    bitLockerEncryptDevice?: boolean;
    // BitLocker Removable Drive Policy.
    bitLockerRemovableDrivePolicy?: BitLockerRemovableDrivePolicy;
}
export interface Windows10GeneralConfiguration extends DeviceConfiguration {
    // Endpoint for discovering cloud printers.
    enterpriseCloudPrintDiscoveryEndPoint?: string;
    // Authentication endpoint for acquiring OAuth tokens.
    enterpriseCloudPrintOAuthAuthority?: string;
    // GUID of a client application authorized to retrieve OAuth tokens from the OAuth Authority.
    enterpriseCloudPrintOAuthClientIdentifier?: string;
    // OAuth resource URI for print service as configured in the Azure portal.
    enterpriseCloudPrintResourceIdentifier?: string;
    /**
     * Maximum number of printers that should be queried from a discovery endpoint. This is a mobile only setting. Valid
     * values 1 to 65535
     */
    enterpriseCloudPrintDiscoveryMaxLimit?: number;
    // OAuth resource URI for printer discovery service as configured in Azure portal.
    enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: string;
    // Specifies if search can use diacritics.
    searchBlockDiacritics?: boolean;
    // Specifies whether to use automatic language detection when indexing content and properties.
    searchDisableAutoLanguageDetection?: boolean;
    /**
     * Indicates whether or not to block indexing of WIP-protected items to prevent them from appearing in search results for
     * Cortana or Explorer.
     */
    searchDisableIndexingEncryptedItems?: boolean;
    // Indicates whether or not to block remote queries of this computer’s index.
    searchEnableRemoteQueries?: boolean;
    // Indicates whether or not to disable the search indexer backoff feature.
    searchDisableIndexerBackoff?: boolean;
    // Indicates whether or not to allow users to add locations on removable drives to libraries and to be indexed.
    searchDisableIndexingRemovableDrive?: boolean;
    // Specifies minimum amount of hard drive space on the same drive as the index location before indexing stops.
    searchEnableAutomaticIndexSizeManangement?: boolean;
    /**
     * Gets or sets a value allowing the device to send diagnostic and usage telemetry data, such as Watson. Possible values
     * are: userDefined, none, basic, enhanced, full.
     */
    diagnosticsDataSubmissionMode?: DiagnosticDataSubmissionMode;
    // Gets or sets a value allowing IT admins to prevent apps and features from working with files on OneDrive.
    oneDriveDisableFileSync?: boolean;
    // Allows IT Admins to control whether users are allowed to install apps from places other than the Store.
    smartScreenEnableAppInstallControl?: boolean;
    /**
     * A http or https Url to a jpg, jpeg or png image that needs to be downloaded and used as the Desktop Image or a file Url
     * to a local image on the file system that needs to used as the Desktop Image.
     */
    personalizationDesktopImageUrl?: string;
    /**
     * A http or https Url to a jpg, jpeg or png image that neeeds to be downloaded and used as the Lock Screen Image or a
     * file Url to a local image on the file system that needs to be used as the Lock Screen Image.
     */
    personalizationLockScreenImageUrl?: string;
    // Specify a list of allowed Bluetooth services and profiles in hex formatted strings.
    bluetoothAllowedServices?: string[];
    // Whether or not to Block the user from using bluetooth advertising.
    bluetoothBlockAdvertising?: boolean;
    // Whether or not to Block the user from using bluetooth discoverable mode.
    bluetoothBlockDiscoverableMode?: boolean;
    // Whether or not to block specific bundled Bluetooth peripherals to automatically pair with the host device.
    bluetoothBlockPrePairing?: boolean;
    // Indicates whether or not to block auto fill.
    edgeBlockAutofill?: boolean;
    // Indicates whether or not to Block the user from using the Edge browser.
    edgeBlocked?: boolean;
    /**
     * Indicates which cookies to block in the Edge browser. Possible values are: userDefined, allow, blockThirdParty,
     * blockAll.
     */
    edgeCookiePolicy?: EdgeCookiePolicy;
    // Indicates whether or not to block developer tools in the Edge browser.
    edgeBlockDeveloperTools?: boolean;
    // Indicates whether or not to Block the user from sending the do not track header.
    edgeBlockSendingDoNotTrackHeader?: boolean;
    // Indicates whether or not to block extensions in the Edge browser.
    edgeBlockExtensions?: boolean;
    // Indicates whether or not to block InPrivate browsing on corporate networks, in the Edge browser.
    edgeBlockInPrivateBrowsing?: boolean;
    // Indicates whether or not to Block the user from using JavaScript.
    edgeBlockJavaScript?: boolean;
    // Indicates whether or not to Block password manager.
    edgeBlockPasswordManager?: boolean;
    /**
     * Block the address bar dropdown functionality in Microsoft Edge. Disable this settings to minimize network connections
     * from Microsoft Edge to Microsoft services.
     */
    edgeBlockAddressBarDropdown?: boolean;
    /**
     * Block Microsoft compatibility list in Microsoft Edge. This list from Microsoft helps Edge properly display sites with
     * known compatibility issues.
     */
    edgeBlockCompatibilityList?: boolean;
    // Clear browsing data on exiting Microsoft Edge.
    edgeClearBrowsingDataOnExit?: boolean;
    /**
     * Allow users to change Start pages on Edge. Use the EdgeHomepageUrls to specify the Start pages that the user would see
     * by default when they open Edge.
     */
    edgeAllowStartPagesModification?: boolean;
    /**
     * Block the Microsoft web page that opens on the first use of Microsoft Edge. This policy allows enterprises, like those
     * enrolled in zero emissions configurations, to block this page.
     */
    edgeDisableFirstRunPage?: boolean;
    /**
     * Block the collection of information by Microsoft for live tile creation when users pin a site to Start from Microsoft
     * Edge.
     */
    edgeBlockLiveTileDataCollection?: boolean;
    /**
     * Enable favorites sync between Internet Explorer and Microsoft Edge. Additions, deletions, modifications and order
     * changes to favorites are shared between browsers.
     */
    edgeSyncFavoritesWithInternetExplorer?: boolean;
    // Whether or not to Block the user from using data over cellular while roaming.
    cellularBlockDataWhenRoaming?: boolean;
    // Whether or not to Block the user from using VPN over cellular.
    cellularBlockVpn?: boolean;
    // Whether or not to Block the user from using VPN when roaming over cellular.
    cellularBlockVpnWhenRoaming?: boolean;
    // Whether or not to block end user access to Defender.
    defenderBlockEndUserAccess?: boolean;
    // Number of days before deleting quarantined malware. Valid values 0 to 90
    defenderDaysBeforeDeletingQuarantinedMalware?: number;
    // Gets or sets Defender’s actions to take on detected Malware per threat level.
    defenderDetectedMalwareActions?: DefenderDetectedMalwareActions;
    /**
     * Defender day of the week for the system scan. Possible values are: userDefined, everyday, sunday, monday, tuesday,
     * wednesday, thursday, friday, saturday.
     */
    defenderSystemScanSchedule?: WeeklySchedule;
    // Files and folder to exclude from scans and real time protection.
    defenderFilesAndFoldersToExclude?: string[];
    // File extensions to exclude from scans and real time protection.
    defenderFileExtensionsToExclude?: string[];
    // Max CPU usage percentage during scan. Valid values 0 to 100
    defenderScanMaxCpu?: number;
    /**
     * Value for monitoring file activity. Possible values are: userDefined, disable, monitorAllFiles,
     * monitorIncomingFilesOnly, monitorOutgoingFilesOnly.
     */
    defenderMonitorFileActivity?: DefenderMonitorFileActivity;
    // Processes to exclude from scans and real time protection.
    defenderProcessesToExclude?: string[];
    /**
     * The configuration for how to prompt user for sample submission. Possible values are: userDefined, alwaysPrompt,
     * promptBeforeSendingPersonalData, neverSendData, sendAllDataWithoutPrompting.
     */
    defenderPromptForSampleSubmission?: DefenderPromptForSampleSubmission;
    // Indicates whether or not to require behavior monitoring.
    defenderRequireBehaviorMonitoring?: boolean;
    // Indicates whether or not to require cloud protection.
    defenderRequireCloudProtection?: boolean;
    // Indicates whether or not to require network inspection system.
    defenderRequireNetworkInspectionSystem?: boolean;
    // Indicates whether or not to require real time monitoring.
    defenderRequireRealTimeMonitoring?: boolean;
    // Indicates whether or not to scan archive files.
    defenderScanArchiveFiles?: boolean;
    // Indicates whether or not to scan downloads.
    defenderScanDownloads?: boolean;
    // Indicates whether or not to scan files opened from a network folder.
    defenderScanNetworkFiles?: boolean;
    // Indicates whether or not to scan incoming mail messages.
    defenderScanIncomingMail?: boolean;
    // Indicates whether or not to scan mapped network drives during full scan.
    defenderScanMappedNetworkDrivesDuringFullScan?: boolean;
    // Indicates whether or not to scan removable drives during full scan.
    defenderScanRemovableDrivesDuringFullScan?: boolean;
    // Indicates whether or not to scan scripts loaded in Internet Explorer browser.
    defenderScanScriptsLoadedInInternetExplorer?: boolean;
    // The signature update interval in hours. Specify 0 not to check. Valid values 0 to 24
    defenderSignatureUpdateIntervalInHours?: number;
    // The defender system scan type. Possible values are: userDefined, disabled, quick, full.
    defenderScanType?: DefenderScanType;
    // The defender time for the system scan.
    defenderScheduledScanTime?: string;
    // The time to perform a daily quick scan.
    defenderScheduledQuickScanTime?: string;
    // Specifies the level of cloud-delivered protection. Possible values are: notConfigured, high, highPlus, zeroTolerance.
    defenderCloudBlockLevel?: DefenderCloudBlockLevelType;
    /**
     * Specify whether to show a user-configurable setting to control the screen timeout while on the lock screen of Windows
     * 10 Mobile devices. If this policy is set to Allow, the value set by lockScreenTimeoutInSeconds is ignored.
     */
    lockScreenAllowTimeoutConfiguration?: boolean;
    // Indicates whether or not to block action center notifications over lock screen.
    lockScreenBlockActionCenterNotifications?: boolean;
    // Indicates whether or not the user can interact with Cortana using speech while the system is locked.
    lockScreenBlockCortana?: boolean;
    // Indicates whether to allow toast notifications above the device lock screen.
    lockScreenBlockToastNotifications?: boolean;
    /**
     * Set the duration (in seconds) from the screen locking to the screen turning off for Windows 10 Mobile devices.
     * Supported values are 11-1800. Valid values 11 to 1800
     */
    lockScreenTimeoutInSeconds?: number;
    /**
     * Specify whether PINs or passwords such as '1111' or '1234' are allowed. For Windows 10 desktops, it also controls the
     * use of picture passwords.
     */
    passwordBlockSimple?: boolean;
    // The password expiration in days. Valid values 0 to 730
    passwordExpirationDays?: number;
    // The minimum password length. Valid values 4 to 16
    passwordMinimumLength?: number;
    // The minutes of inactivity before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: number;
    // The number of previous passwords to prevent reuse of. Valid values 0 to 50
    passwordPreviousPasswordBlockCount?: number;
    // Indicates whether or not to require the user to have a password.
    passwordRequired?: boolean;
    // Indicates whether or not to require a password upon resuming from an idle state.
    passwordRequireWhenResumeFromIdleState?: boolean;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // The number of sign in failures before factory reset. Valid values 0 to 999
    passwordSignInFailureCountBeforeFactoryReset?: number;
    /**
     * Enables or disables the use of advertising ID. Added in Windows 10, version 1607. Possible values are: notConfigured,
     * blocked, allowed.
     */
    privacyAdvertisingId?: StateManagementSetting;
    /**
     * Indicates whether or not to allow the automatic acceptance of the pairing and privacy user consent dialog when
     * launching apps.
     */
    privacyAutoAcceptPairingAndConsentPrompts?: boolean;
    /**
     * Indicates whether or not to block the usage of cloud based speech services for Cortana, Dictation, or Store
     * applications.
     */
    privacyBlockInputPersonalization?: boolean;
    // Indicates whether or not to block the user from unpinning apps from taskbar.
    startBlockUnpinningAppsFromTaskbar?: boolean;
    /**
     * Setting the value of this collapses the app list, removes the app list entirely, or disables the corresponding toggle
     * in the Settings app. Possible values are: userDefined, collapse, remove, disableSettingsApp.
     */
    startMenuAppListVisibility?: WindowsStartMenuAppListVisibilityType;
    // Enabling this policy hides the change account setting from appearing in the user tile in the start menu.
    startMenuHideChangeAccountSettings?: boolean;
    /**
     * Enabling this policy hides the most used apps from appearing on the start menu and disables the corresponding toggle in
     * the Settings app.
     */
    startMenuHideFrequentlyUsedApps?: boolean;
    // Enabling this policy hides hibernate from appearing in the power button in the start menu.
    startMenuHideHibernate?: boolean;
    // Enabling this policy hides lock from appearing in the user tile in the start menu.
    startMenuHideLock?: boolean;
    // Enabling this policy hides the power button from appearing in the start menu.
    startMenuHidePowerButton?: boolean;
    /**
     * Enabling this policy hides recent jump lists from appearing on the start menu/taskbar and disables the corresponding
     * toggle in the Settings app.
     */
    startMenuHideRecentJumpLists?: boolean;
    /**
     * Enabling this policy hides recently added apps from appearing on the start menu and disables the corresponding toggle
     * in the Settings app.
     */
    startMenuHideRecentlyAddedApps?: boolean;
    // Enabling this policy hides 'Restart/Update and Restart' from appearing in the power button in the start menu.
    startMenuHideRestartOptions?: boolean;
    // Enabling this policy hides shut down/update and shut down from appearing in the power button in the start menu.
    startMenuHideShutDown?: boolean;
    // Enabling this policy hides sign out from appearing in the user tile in the start menu.
    startMenuHideSignOut?: boolean;
    // Enabling this policy hides sleep from appearing in the power button in the start menu.
    startMenuHideSleep?: boolean;
    // Enabling this policy hides switch account from appearing in the user tile in the start menu.
    startMenuHideSwitchAccount?: boolean;
    // Enabling this policy hides the user tile from appearing in the start menu.
    startMenuHideUserTile?: boolean;
    /**
     * This policy setting allows you to import Edge assets to be used with startMenuLayoutXml policy. Start layout can
     * contain secondary tile from Edge app which looks for Edge local asset file. Edge local asset would not exist and cause
     * Edge secondary tile to appear empty in this case. This policy only gets applied when startMenuLayoutXml policy is
     * modified. The value should be a UTF-8 Base64 encoded byte array.
     */
    startMenuLayoutEdgeAssetsXml?: number;
    /**
     * Allows admins to override the default Start menu layout and prevents the user from changing it. The layout is modified
     * by specifying an XML file based on a layout modification schema. XML needs to be in a UTF8 encoded byte array format.
     */
    startMenuLayoutXml?: number;
    // Allows admins to decide how the Start menu is displayed. Possible values are: userDefined, fullScreen, nonFullScreen.
    startMenuMode?: WindowsStartMenuModeType;
    /**
     * Enforces the visibility (Show/Hide) of the Documents folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderDocuments?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the Downloads folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderDownloads?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the FileExplorer shortcut on the Start menu. Possible values are: notConfigured,
     * hide, show.
     */
    startMenuPinnedFolderFileExplorer?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the HomeGroup folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderHomeGroup?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the Music folder shortcut on the Start menu. Possible values are: notConfigured,
     * hide, show.
     */
    startMenuPinnedFolderMusic?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the Network folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderNetwork?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the PersonalFolder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderPersonalFolder?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the Pictures folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderPictures?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the Settings folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderSettings?: VisibilitySetting;
    /**
     * Enforces the visibility (Show/Hide) of the Videos folder shortcut on the Start menu. Possible values are:
     * notConfigured, hide, show.
     */
    startMenuPinnedFolderVideos?: VisibilitySetting;
    // Indicates whether or not to block access to Settings app.
    settingsBlockSettingsApp?: boolean;
    // Indicates whether or not to block access to System in Settings app.
    settingsBlockSystemPage?: boolean;
    // Indicates whether or not to block access to Devices in Settings app.
    settingsBlockDevicesPage?: boolean;
    // Indicates whether or not to block access to Network &amp; Internet in Settings app.
    settingsBlockNetworkInternetPage?: boolean;
    // Indicates whether or not to block access to Personalization in Settings app.
    settingsBlockPersonalizationPage?: boolean;
    // Indicates whether or not to block access to Accounts in Settings app.
    settingsBlockAccountsPage?: boolean;
    // Indicates whether or not to block access to Time &amp; Language in Settings app.
    settingsBlockTimeLanguagePage?: boolean;
    // Indicates whether or not to block access to Ease of Access in Settings app.
    settingsBlockEaseOfAccessPage?: boolean;
    // Indicates whether or not to block access to Privacy in Settings app.
    settingsBlockPrivacyPage?: boolean;
    // Indicates whether or not to block access to Update &amp; Security in Settings app.
    settingsBlockUpdateSecurityPage?: boolean;
    // Indicates whether or not to block access to Apps in Settings app.
    settingsBlockAppsPage?: boolean;
    // Indicates whether or not to block access to Gaming in Settings app.
    settingsBlockGamingPage?: boolean;
    /**
     * Allows IT admins to block experiences that are typically for consumers only, such as Start suggestions, Membership
     * notifications, Post-OOBE app install and redirect tiles.
     */
    windowsSpotlightBlockConsumerSpecificFeatures?: boolean;
    // Allows IT admins to turn off all Windows Spotlight features
    windowsSpotlightBlocked?: boolean;
    /**
     * Block suggestions from Microsoft that show after each OS clean install, upgrade or in an on-going basis to introduce
     * users to what is new or changed
     */
    windowsSpotlightBlockOnActionCenter?: boolean;
    // Block personalized content in Windows spotlight based on user’s device usage.
    windowsSpotlightBlockTailoredExperiences?: boolean;
    // Block third party content delivered via Windows Spotlight
    windowsSpotlightBlockThirdPartyNotifications?: boolean;
    // Block Windows Spotlight Windows welcome experience
    windowsSpotlightBlockWelcomeExperience?: boolean;
    // Allows IT admins to turn off the popup of Windows Tips.
    windowsSpotlightBlockWindowsTips?: boolean;
    // Specifies the type of Spotlight. Possible values are: notConfigured, disabled, enabled.
    windowsSpotlightConfigureOnLockScreen?: WindowsSpotlightEnablementSettings;
    /**
     * If set, proxy settings will be applied to all processes and accounts in the device. Otherwise, it will be applied to
     * the user account that’s enrolled into MDM.
     */
    networkProxyApplySettingsDeviceWide?: boolean;
    /**
     * Disable automatic detection of settings. If enabled, the system will try to find the path to a proxy auto-config (PAC)
     * script.
     */
    networkProxyDisableAutoDetect?: boolean;
    // Address to the proxy auto-config (PAC) script you want to use.
    networkProxyAutomaticConfigurationUrl?: string;
    // Specifies manual proxy server settings.
    networkProxyServer?: Windows10NetworkProxyServer;
    /**
     * Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a
     * Microsoft account.
     */
    accountsBlockAddingNonMicrosoftAccountEmail?: boolean;
    // Indicates whether or not to block the user from selecting an AntiTheft mode preference (Windows 10 Mobile only).
    antiTheftModeBlocked?: boolean;
    // Whether or not to Block the user from using bluetooth.
    bluetoothBlocked?: boolean;
    // Whether or not to Block the user from accessing the camera of the device.
    cameraBlocked?: boolean;
    /**
     * Whether or not to block Connected Devices Service which enables discovery and connection to other devices, remote
     * messaging, remote app sessions and other cross-device experiences.
     */
    connectedDevicesServiceBlocked?: boolean;
    // Whether or not to Block the user from doing manual root certificate installation.
    certificatesBlockManualRootCertificateInstallation?: boolean;
    // Whether or not to Block the user from using copy paste.
    copyPasteBlocked?: boolean;
    // Whether or not to Block the user from using Cortana.
    cortanaBlocked?: boolean;
    // Indicates whether or not to Block the user from resetting their phone.
    deviceManagementBlockFactoryResetOnMobile?: boolean;
    // Indicates whether or not to Block the user from doing manual un-enrollment from device management.
    deviceManagementBlockManualUnenroll?: boolean;
    // Specifies what filter level of safe search is required. Possible values are: userDefined, strict, moderate.
    safeSearchFilter?: SafeSearchFilterType;
    // Indicates whether or not to block popups.
    edgeBlockPopups?: boolean;
    // Indicates whether or not to block the user from using the search suggestions in the address bar.
    edgeBlockSearchSuggestions?: boolean;
    /**
     * Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer. Note: the name of this property
     * is misleading; the property is obsolete, use EdgeSendIntranetTrafficToInternetExplorer instead.
     */
    edgeBlockSendingIntranetTrafficToInternetExplorer?: boolean;
    // Indicates whether or not to switch the intranet traffic from Edge to Internet Explorer.
    edgeSendIntranetTrafficToInternetExplorer?: boolean;
    // Indicates whether or not to Require the user to use the smart screen filter.
    edgeRequireSmartScreen?: boolean;
    // Indicates the enterprise mode site list location. Could be a local file, local network or http location.
    edgeEnterpriseModeSiteListLocation?: string;
    // The first run URL for when Edge browser is opened for the first time.
    edgeFirstRunUrl?: string;
    /**
     * Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their
     * default search engine provided the AllowSearchEngineCustomization policy is not set.
     */
    edgeSearchEngine?: EdgeSearchEngineBase;
    // The list of URLs for homepages shodwn on MDM-enrolled devices on Edge browser.
    edgeHomepageUrls?: string[];
    // Indicates whether or not to prevent access to about flags on Edge browser.
    edgeBlockAccessToAboutFlags?: boolean;
    // Indicates whether or not users can override SmartScreen Filter warnings about potentially malicious websites.
    smartScreenBlockPromptOverride?: boolean;
    // Indicates whether or not users can override the SmartScreen Filter warnings about downloading unverified files
    smartScreenBlockPromptOverrideForFiles?: boolean;
    // Indicates whether or not user's localhost IP address is displayed while making phone calls using the WebRTC
    webRtcBlockLocalhostIpAddress?: boolean;
    // Indicates whether or not to Block the user from using internet sharing.
    internetSharingBlocked?: boolean;
    // Indicates whether or not to block the user from installing provisioning packages.
    settingsBlockAddProvisioningPackage?: boolean;
    // Indicates whether or not to block the runtime configuration agent from removing provisioning packages.
    settingsBlockRemoveProvisioningPackage?: boolean;
    // Indicates whether or not to block the user from changing date and time settings.
    settingsBlockChangeSystemTime?: boolean;
    // Indicates whether or not to block the user from editing the device name.
    settingsBlockEditDeviceName?: boolean;
    // Indicates whether or not to block the user from changing the region settings.
    settingsBlockChangeRegion?: boolean;
    // Indicates whether or not to block the user from changing the language settings.
    settingsBlockChangeLanguage?: boolean;
    // Indicates whether or not to block the user from changing power and sleep settings.
    settingsBlockChangePowerSleep?: boolean;
    // Indicates whether or not to Block the user from location services.
    locationServicesBlocked?: boolean;
    // Indicates whether or not to Block a Microsoft account.
    microsoftAccountBlocked?: boolean;
    // Indicates whether or not to Block Microsoft account settings sync.
    microsoftAccountBlockSettingsSync?: boolean;
    // Indicates whether or not to Block the user from using near field communication.
    nfcBlocked?: boolean;
    // Indicates whether or not to Block the user from reset protection mode.
    resetProtectionModeBlocked?: boolean;
    // Indicates whether or not to Block the user from taking Screenshots.
    screenCaptureBlocked?: boolean;
    // Indicates whether or not to Block the user from using removable storage.
    storageBlockRemovableStorage?: boolean;
    // Indicating whether or not to require encryption on a mobile device.
    storageRequireMobileDeviceEncryption?: boolean;
    // Indicates whether or not to Block the user from USB connection.
    usbBlocked?: boolean;
    // Indicates whether or not to Block the user from voice recording.
    voiceRecordingBlocked?: boolean;
    // Indicating whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
    wiFiBlockAutomaticConnectHotspots?: boolean;
    // Indicates whether or not to Block the user from using Wi-Fi.
    wiFiBlocked?: boolean;
    // Indicates whether or not to Block the user from using Wi-Fi manual configuration.
    wiFiBlockManualConfiguration?: boolean;
    /**
     * Specify how often devices scan for Wi-Fi networks. Supported values are 1-500, where 100 = default, and 500 = low
     * frequency. Valid values 1 to 500
     */
    wiFiScanInterval?: number;
    // Indicates whether or not to allow other devices from discovering this PC for projection.
    wirelessDisplayBlockProjectionToThisDevice?: boolean;
    // Indicates whether or not to allow user input from wireless display receiver.
    wirelessDisplayBlockUserInputFromReceiver?: boolean;
    // Indicates whether or not to require a PIN for new devices to initiate pairing.
    wirelessDisplayRequirePinForPairing?: boolean;
    // Indicates whether or not to Block the user from using the Windows store.
    windowsStoreBlocked?: boolean;
    /**
     * Indicates whether apps from AppX packages signed with a trusted certificate can be side loaded. Possible values are:
     * notConfigured, blocked, allowed.
     */
    appsAllowTrustedAppsSideloading?: StateManagementSetting;
    // Indicates whether or not to block automatic update of apps from Windows Store.
    windowsStoreBlockAutoUpdate?: boolean;
    // Indicates whether or not to allow developer unlock. Possible values are: notConfigured, blocked, allowed.
    developerUnlockSetting?: StateManagementSetting;
    // Indicates whether or not to block multiple users of the same app to share data.
    sharedUserAppDataAllowed?: boolean;
    /**
     * Indicates whether or not to disable the launch of all apps from Windows Store that came pre-installed or were
     * downloaded.
     */
    appsBlockWindowsStoreOriginatedApps?: boolean;
    // Indicates whether or not to enable Private Store Only.
    windowsStoreEnablePrivateStoreOnly?: boolean;
    // Indicates whether application data is restricted to the system drive.
    storageRestrictAppDataToSystemVolume?: boolean;
    // Indicates whether the installation of applications is restricted to the system drive.
    storageRestrictAppInstallToSystemVolume?: boolean;
    // Indicates whether or not to block DVR and broadcasting.
    gameDvrBlocked?: boolean;
    // Indicates whether or not to enable device discovery UX.
    experienceBlockDeviceDiscovery?: boolean;
    // Indicates whether or not to allow the error dialog from displaying if no SIM card is detected.
    experienceBlockErrorDialogWhenNoSIM?: boolean;
    // Indicates whether or not to enable task switching on the device.
    experienceBlockTaskSwitcher?: boolean;
    // Disables the ability to quickly switch between users that are logged on simultaneously without logging off.
    logonBlockFastUserSwitching?: boolean;
    // Whether the device is required to connect to the network.
    tenantLockdownRequireNetworkDuringOutOfBoxExperience?: boolean;
}
export interface WindowsDefenderAdvancedThreatProtectionConfiguration extends DeviceConfiguration {
    // Windows Defender AdvancedThreatProtection 'Allow Sample Sharing' Rule
    allowSampleSharing?: boolean;
    // Expedite Windows Defender Advanced Threat Protection telemetry reporting frequency.
    enableExpeditedTelemetryReporting?: boolean;
}
export interface EditionUpgradeConfiguration extends DeviceConfiguration {
    // Edition Upgrade License Type. Possible values are: productKey, licenseFile.
    licenseType?: EditionUpgradeLicenseType;
    /**
     * Edition Upgrade Target Edition. Possible values are: windows10Enterprise, windows10EnterpriseN, windows10Education,
     * windows10EducationN, windows10MobileEnterprise, windows10HolographicEnterprise, windows10Professional,
     * windows10ProfessionalN, windows10ProfessionalEducation, windows10ProfessionalEducationN,
     * windows10ProfessionalWorkstation, windows10ProfessionalWorkstationN.
     */
    targetEdition?: Windows10EditionType;
    // Edition Upgrade License File Content.
    license?: string;
    // Edition Upgrade Product Key.
    productKey?: string;
}
export interface Windows10CustomConfiguration extends DeviceConfiguration {
    // OMA settings. This collection can contain a maximum of 1000 elements.
    omaSettings?: OmaSetting[];
}
export interface Windows10EnterpriseModernAppManagementConfiguration extends DeviceConfiguration {
    // Indicates whether or not to uninstall a fixed list of built-in Windows apps.
    uninstallBuiltInApps?: boolean;
}
export interface SharedPCConfiguration extends DeviceConfiguration {
    // Specifies how accounts are managed on a shared PC. Only applies when disableAccountManager is false.
    accountManagerPolicy?: SharedPCAccountManagerPolicy;
    // Indicates which type of accounts are allowed to use on a shared PC. Possible values are: guest, domain.
    allowedAccounts?: SharedPCAllowedAccountType;
    // Specifies whether local storage is allowed on a shared PC.
    allowLocalStorage?: boolean;
    // Disables the account manager for shared PC mode.
    disableAccountManager?: boolean;
    /**
     * Specifies whether the default shared PC education environment policies should be disabled. For Windows 10 RS2 and
     * later, this policy will be applied without setting Enabled to true.
     */
    disableEduPolicies?: boolean;
    // Specifies whether the default shared PC power policies should be disabled.
    disablePowerPolicies?: boolean;
    // Disables the requirement to sign in whenever the device wakes up from sleep mode.
    disableSignInOnResume?: boolean;
    // Enables shared PC mode and applies the shared pc policies.
    enabled?: boolean;
    /**
     * Specifies the time in seconds that a device must sit idle before the PC goes to sleep. Setting this value to 0 prevents
     * the sleep timeout from occurring.
     */
    idleTimeBeforeSleepInSeconds?: number;
    /**
     * Specifies the display text for the account shown on the sign-in screen which launches the app specified by
     * SetKioskAppUserModelId. Only applies when KioskAppUserModelId is set.
     */
    kioskAppDisplayName?: string;
    // Specifies the application user model ID of the app to use with assigned access.
    kioskAppUserModelId?: string;
    // Specifies the daily start time of maintenance hour.
    maintenanceStartTime?: string;
}
export interface Windows10SecureAssessmentConfiguration extends DeviceConfiguration {
    /**
     * Url link to an assessment that's automatically loaded when the secure assessment browser is launched. It has to be a
     * valid Url (http[s]://msdn.microsoft.com/).
     */
    launchUri?: string;
    /**
     * The account used to configure the Windows device for taking the test. The user can be a domain account (domain/user),
     * an AAD account (username@tenant.com) or a local account (username).
     */
    configurationAccount?: string;
    // Indicates whether or not to allow the app from printing during the test.
    allowPrinting?: boolean;
    // Indicates whether or not to allow screen capture capability during a test.
    allowScreenCapture?: boolean;
    // Indicates whether or not to allow text suggestions during the test.
    allowTextSuggestion?: boolean;
}
export interface WindowsPhone81CustomConfiguration extends DeviceConfiguration {
    // OMA settings. This collection can contain a maximum of 1000 elements.
    omaSettings?: OmaSetting[];
}
export interface WindowsUpdateForBusinessConfiguration extends DeviceConfiguration {
    /**
     * Delivery Optimization Mode. Possible values are: userDefined, httpOnly, httpWithPeeringNat,
     * httpWithPeeringPrivateGroup, httpWithInternetPeering, simpleDownload, bypassMode.
     */
    deliveryOptimizationMode?: WindowsDeliveryOptimizationMode;
    // The pre-release features. Possible values are: userDefined, settingsOnly, settingsAndExperimentations, notAllowed.
    prereleaseFeatures?: PrereleaseFeatures;
    /**
     * Automatic update mode. Possible values are: userDefined, notifyDownload, autoInstallAtMaintenanceTime,
     * autoInstallAndRebootAtMaintenanceTime, autoInstallAndRebootAtScheduledTime, autoInstallAndRebootWithoutEndUserControl.
     */
    automaticUpdateMode?: AutomaticUpdateMode;
    // Allow Microsoft Update Service
    microsoftUpdateServiceAllowed?: boolean;
    // Exclude Windows update Drivers
    driversExcluded?: boolean;
    // Installation schedule
    installationSchedule?: WindowsUpdateInstallScheduleType;
    // Defer Quality Updates by these many days
    qualityUpdatesDeferralPeriodInDays?: number;
    // Defer Feature Updates by these many days
    featureUpdatesDeferralPeriodInDays?: number;
    // Pause Quality Updates
    qualityUpdatesPaused?: boolean;
    // Pause Feature Updates
    featureUpdatesPaused?: boolean;
    // Quality Updates Pause Expiry datetime
    qualityUpdatesPauseExpiryDateTime?: string;
    // Feature Updates Pause Expiry datetime
    featureUpdatesPauseExpiryDateTime?: string;
    /**
     * Determines which branch devices will receive their updates from. Possible values are: userDefined, all,
     * businessReadyOnly, windowsInsiderBuildFast, windowsInsiderBuildSlow, windowsInsiderBuildRelease.
     */
    businessReadyUpdatesOnly?: WindowsUpdateType;
}
export interface Windows81GeneralConfiguration extends DeviceConfiguration {
    /**
     * Indicates whether or not to Block the user from adding email accounts to the device that are not associated with a
     * Microsoft account.
     */
    accountsBlockAddingNonMicrosoftAccountEmail?: boolean;
    // Value indicating whether this policy only applies to Windows 8.1. This property is read-only.
    applyOnlyToWindows81?: boolean;
    // Indicates whether or not to block auto fill.
    browserBlockAutofill?: boolean;
    // Indicates whether or not to block automatic detection of Intranet sites.
    browserBlockAutomaticDetectionOfIntranetSites?: boolean;
    // Indicates whether or not to block enterprise mode access.
    browserBlockEnterpriseModeAccess?: boolean;
    // Indicates whether or not to Block the user from using JavaScript.
    browserBlockJavaScript?: boolean;
    // Indicates whether or not to block plug-ins.
    browserBlockPlugins?: boolean;
    // Indicates whether or not to block popups.
    browserBlockPopups?: boolean;
    // Indicates whether or not to Block the user from sending the do not track header.
    browserBlockSendingDoNotTrackHeader?: boolean;
    // Indicates whether or not to block a single word entry on Intranet sites.
    browserBlockSingleWordEntryOnIntranetSites?: boolean;
    // Indicates whether or not to require the user to use the smart screen filter.
    browserRequireSmartScreen?: boolean;
    // The enterprise mode site list location. Could be a local file, local network or http location.
    browserEnterpriseModeSiteListLocation?: string;
    // The internet security level. Possible values are: userDefined, medium, mediumHigh, high.
    browserInternetSecurityLevel?: InternetSiteSecurityLevel;
    // The Intranet security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high.
    browserIntranetSecurityLevel?: SiteSecurityLevel;
    // The logging report location.
    browserLoggingReportLocation?: string;
    // Indicates whether or not to require high security for restricted sites.
    browserRequireHighSecurityForRestrictedSites?: boolean;
    // Indicates whether or not to require a firewall.
    browserRequireFirewall?: boolean;
    // Indicates whether or not to require fraud warning.
    browserRequireFraudWarning?: boolean;
    // The trusted sites security level. Possible values are: userDefined, low, mediumLow, medium, mediumHigh, high.
    browserTrustedSitesSecurityLevel?: SiteSecurityLevel;
    // Indicates whether or not to block data roaming.
    cellularBlockDataRoaming?: boolean;
    // Indicates whether or not to block diagnostic data submission.
    diagnosticsBlockDataSubmission?: boolean;
    // Indicates whether or not to Block the user from using a pictures password and pin.
    passwordBlockPicturePasswordAndPin?: boolean;
    // Password expiration in days.
    passwordExpirationDays?: number;
    // The minimum password length.
    passwordMinimumLength?: number;
    // The minutes of inactivity before the screen times out.
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: number;
    // The number of previous passwords to prevent re-use of. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: number;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // The number of sign in failures before factory reset.
    passwordSignInFailureCountBeforeFactoryReset?: number;
    // Indicates whether or not to require encryption on a mobile device.
    storageRequireDeviceEncryption?: boolean;
    // Indicates whether or not to require automatic updates.
    updatesRequireAutomaticUpdates?: boolean;
    /**
     * The user account control settings. Possible values are: userDefined, alwaysNotify, notifyOnAppChanges,
     * notifyOnAppChangesWithoutDimming, neverNotify.
     */
    userAccountControlSettings?: WindowsUserAccountControlSettings;
    // The work folders url.
    workFoldersUrl?: string;
}
export interface WindowsPhone81GeneralConfiguration extends DeviceConfiguration {
    // Value indicating whether this policy only applies to Windows Phone 8.1. This property is read-only.
    applyOnlyToWindowsPhone81?: boolean;
    // Indicates whether or not to block copy paste.
    appsBlockCopyPaste?: boolean;
    // Indicates whether or not to block bluetooth.
    bluetoothBlocked?: boolean;
    // Indicates whether or not to block camera.
    cameraBlocked?: boolean;
    // Indicates whether or not to block Wi-Fi tethering. Has no impact if Wi-Fi is blocked.
    cellularBlockWifiTethering?: boolean;
    /**
     * List of apps in the compliance (either allow list or block list, controlled by CompliantAppListType). This collection
     * can contain a maximum of 10000 elements.
     */
    compliantAppsList?: AppListItem[];
    // List that is in the AppComplianceList. Possible values are: none, appsInListCompliant, appsNotInListCompliant.
    compliantAppListType?: AppListType;
    // Indicates whether or not to block diagnostic data submission.
    diagnosticDataBlockSubmission?: boolean;
    // Indicates whether or not to block custom email accounts.
    emailBlockAddingAccounts?: boolean;
    // Indicates whether or not to block location services.
    locationServicesBlocked?: boolean;
    // Indicates whether or not to block using a Microsoft Account.
    microsoftAccountBlocked?: boolean;
    // Indicates whether or not to block Near-Field Communication.
    nfcBlocked?: boolean;
    // Indicates whether or not to block syncing the calendar.
    passwordBlockSimple?: boolean;
    // Number of days before the password expires.
    passwordExpirationDays?: number;
    // Minimum length of passwords.
    passwordMinimumLength?: number;
    // Minutes of inactivity before screen timeout.
    passwordMinutesOfInactivityBeforeScreenTimeout?: number;
    // Number of character sets a password must contain.
    passwordMinimumCharacterSetCount?: number;
    // Number of previous passwords to block. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: number;
    // Number of sign in failures allowed before factory reset.
    passwordSignInFailureCountBeforeFactoryReset?: number;
    // Password type that is required. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // Indicates whether or not to require a password.
    passwordRequired?: boolean;
    // Indicates whether or not to block screenshots.
    screenCaptureBlocked?: boolean;
    // Indicates whether or not to block removable storage.
    storageBlockRemovableStorage?: boolean;
    // Indicates whether or not to require encryption.
    storageRequireEncryption?: boolean;
    // Indicates whether or not to block the web browser.
    webBrowserBlocked?: boolean;
    // Indicates whether or not to block Wi-Fi.
    wifiBlocked?: boolean;
    // Indicates whether or not to block automatically connecting to Wi-Fi hotspots. Has no impact if Wi-Fi is blocked.
    wifiBlockAutomaticConnectHotspots?: boolean;
    // Indicates whether or not to block Wi-Fi hotspot reporting. Has no impact if Wi-Fi is blocked.
    wifiBlockHotspotReporting?: boolean;
    // Indicates whether or not to block the Windows Store.
    windowsStoreBlocked?: boolean;
}
export interface Windows10TeamGeneralConfiguration extends DeviceConfiguration {
    // Indicates whether or not to Block Azure Operational Insights.
    azureOperationalInsightsBlockTelemetry?: boolean;
    // The Azure Operational Insights workspace id.
    azureOperationalInsightsWorkspaceId?: string;
    // The Azure Operational Insights Workspace key.
    azureOperationalInsightsWorkspaceKey?: string;
    // Specifies whether to automatically launch the Connect app whenever a projection is initiated.
    connectAppBlockAutoLaunch?: boolean;
    // Indicates whether or not to Block setting a maintenance window for device updates.
    maintenanceWindowBlocked?: boolean;
    // Maintenance window duration for device updates. Valid values 0 to 5
    maintenanceWindowDurationInHours?: number;
    // Maintenance window start time for device updates.
    maintenanceWindowStartTime?: string;
    /**
     * The channel. Possible values are: userDefined, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
     * thirtySix, forty, fortyFour, fortyEight, oneHundredFortyNine, oneHundredFiftyThree, oneHundredFiftySeven,
     * oneHundredSixtyOne, oneHundredSixtyFive.
     */
    miracastChannel?: MiracastChannel;
    // Indicates whether or not to Block wireless projection.
    miracastBlocked?: boolean;
    // Indicates whether or not to require a pin for wireless projection.
    miracastRequirePin?: boolean;
    /**
     * Specifies whether to disable the 'My meetings and files' feature in the Start menu, which shows the signed-in user's
     * meetings and files from Office 365.
     */
    settingsBlockMyMeetingsAndFiles?: boolean;
    // Specifies whether to allow the ability to resume a session when the session times out.
    settingsBlockSessionResume?: boolean;
    // Specifies whether to disable auto-populating of the sign-in dialog with invitees from scheduled meetings.
    settingsBlockSigninSuggestions?: boolean;
    /**
     * Specifies the default volume value for a new session. Permitted values are 0-100. The default is 45. Valid values 0 to
     * 100
     */
    settingsDefaultVolume?: number;
    // Specifies the number of minutes until the Hub screen turns off.
    settingsScreenTimeoutInMinutes?: number;
    // Specifies the number of minutes until the session times out.
    settingsSessionTimeoutInMinutes?: number;
    // Specifies the number of minutes until the Hub enters sleep mode.
    settingsSleepTimeoutInMinutes?: number;
    // Indicates whether or not to Block the welcome screen from waking up automatically when someone enters the room.
    welcomeScreenBlockAutomaticWakeUp?: boolean;
    // The welcome screen background image URL. The URL must use the HTTPS protocol and return a PNG image.
    welcomeScreenBackgroundImageUrl?: string;
    /**
     * The welcome screen meeting information shown. Possible values are: userDefined, showOrganizerAndTimeOnly,
     * showOrganizerAndTimeAndSubject.
     */
    welcomeScreenMeetingInformation?: WelcomeScreenMeetingInformation;
}
export interface AndroidCompliancePolicy extends DeviceCompliancePolicy {
    // Require a password to unlock device.
    passwordRequired?: boolean;
    // Minimum password length. Valid values 4 to 16
    passwordMinimumLength?: number;
    /**
     * Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols,
     * lowSecurityBiometric, numeric, numericComplex, any.
     */
    passwordRequiredType?: AndroidRequiredPasswordType;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: number;
    // Number of days before the password expires. Valid values 1 to 365
    passwordExpirationDays?: number;
    // Number of previous passwords to block. Valid values 1 to 24
    passwordPreviousPasswordBlockCount?: number;
    // Require that devices disallow installation of apps from unknown sources.
    securityPreventInstallAppsFromUnknownSources?: boolean;
    // Disable USB debugging on Android devices.
    securityDisableUsbDebugging?: boolean;
    // Require the Android Verify apps feature is turned on.
    securityRequireVerifyApps?: boolean;
    // Require that devices have enabled device threat protection.
    deviceThreatProtectionEnabled?: boolean;
    /**
     * Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured,
     * low, medium, high, notSet.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel;
    // Devices must not be jailbroken or rooted.
    securityBlockJailbrokenDevices?: boolean;
    // Minimum Android version.
    osMinimumVersion?: string;
    // Maximum Android version.
    osMaximumVersion?: string;
    // Minimum Android security patch level.
    minAndroidSecurityPatchLevel?: string;
    // Require encryption on Android devices.
    storageRequireEncryption?: boolean;
    // Require the device to pass the SafetyNet basic integrity check.
    securityRequireSafetyNetAttestationBasicIntegrity?: boolean;
    // Require the device to pass the SafetyNet certified device check.
    securityRequireSafetyNetAttestationCertifiedDevice?: boolean;
    // Require Google Play Services to be installed and enabled on the device.
    securityRequireGooglePlayServices?: boolean;
    /**
     * Require the device to have up to date security providers. The device will require Google Play Services to be enabled
     * and up to date.
     */
    securityRequireUpToDateSecurityProviders?: boolean;
    // Require the device to pass the Company Portal client app runtime integrity check.
    securityRequireCompanyPortalAppIntegrity?: boolean;
}
export interface AndroidWorkProfileCompliancePolicy extends DeviceCompliancePolicy {
    // Require a password to unlock device.
    passwordRequired?: boolean;
    // Minimum password length. Valid values 4 to 16
    passwordMinimumLength?: number;
    /**
     * Type of characters in password. Possible values are: deviceDefault, alphabetic, alphanumeric, alphanumericWithSymbols,
     * lowSecurityBiometric, numeric, numericComplex, any.
     */
    passwordRequiredType?: AndroidRequiredPasswordType;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: number;
    // Number of days before the password expires. Valid values 1 to 365
    passwordExpirationDays?: number;
    // Number of previous passwords to block. Valid values 1 to 24
    passwordPreviousPasswordBlockCount?: number;
    // Require that devices disallow installation of apps from unknown sources.
    securityPreventInstallAppsFromUnknownSources?: boolean;
    // Disable USB debugging on Android devices.
    securityDisableUsbDebugging?: boolean;
    // Require the Android Verify apps feature is turned on.
    securityRequireVerifyApps?: boolean;
    // Require that devices have enabled device threat protection.
    deviceThreatProtectionEnabled?: boolean;
    /**
     * Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured,
     * low, medium, high, notSet.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel;
    // Devices must not be jailbroken or rooted.
    securityBlockJailbrokenDevices?: boolean;
    // Minimum Android version.
    osMinimumVersion?: string;
    // Maximum Android version.
    osMaximumVersion?: string;
    // Minimum Android security patch level.
    minAndroidSecurityPatchLevel?: string;
    // Require encryption on Android devices.
    storageRequireEncryption?: boolean;
    // Require the device to pass the SafetyNet basic integrity check.
    securityRequireSafetyNetAttestationBasicIntegrity?: boolean;
    // Require the device to pass the SafetyNet certified device check.
    securityRequireSafetyNetAttestationCertifiedDevice?: boolean;
    // Require Google Play Services to be installed and enabled on the device.
    securityRequireGooglePlayServices?: boolean;
    /**
     * Require the device to have up to date security providers. The device will require Google Play Services to be enabled
     * and up to date.
     */
    securityRequireUpToDateSecurityProviders?: boolean;
    // Require the device to pass the Company Portal client app runtime integrity check.
    securityRequireCompanyPortalAppIntegrity?: boolean;
}
// tslint:disable-next-line: interface-name
export interface IosCompliancePolicy extends DeviceCompliancePolicy {
    // Indicates whether or not to block simple passcodes.
    passcodeBlockSimple?: boolean;
    // Number of days before the passcode expires. Valid values 1 to 65535
    passcodeExpirationDays?: number;
    // Minimum length of passcode. Valid values 4 to 14
    passcodeMinimumLength?: number;
    // Minutes of inactivity before a passcode is required.
    passcodeMinutesOfInactivityBeforeLock?: number;
    // Number of previous passcodes to block. Valid values 1 to 24
    passcodePreviousPasscodeBlockCount?: number;
    // The number of character sets required in the password.
    passcodeMinimumCharacterSetCount?: number;
    // The required passcode type. Possible values are: deviceDefault, alphanumeric, numeric.
    passcodeRequiredType?: RequiredPasswordType;
    // Indicates whether or not to require a passcode.
    passcodeRequired?: boolean;
    // Minimum IOS version.
    osMinimumVersion?: string;
    // Maximum IOS version.
    osMaximumVersion?: string;
    // Devices must not be jailbroken or rooted.
    securityBlockJailbrokenDevices?: boolean;
    // Require that devices have enabled device threat protection .
    deviceThreatProtectionEnabled?: boolean;
    /**
     * Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured,
     * low, medium, high, notSet.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel;
    // Indicates whether or not to require a managed email profile.
    managedEmailProfileRequired?: boolean;
}
export interface MacOSCompliancePolicy extends DeviceCompliancePolicy {
    // Whether or not to require a password.
    passwordRequired?: boolean;
    // Indicates whether or not to block simple passwords.
    passwordBlockSimple?: boolean;
    // Number of days before the password expires. Valid values 1 to 65535
    passwordExpirationDays?: number;
    // Minimum length of password. Valid values 4 to 14
    passwordMinimumLength?: number;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: number;
    // Number of previous passwords to block. Valid values 1 to 24
    passwordPreviousPasswordBlockCount?: number;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: number;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // Minimum MacOS version.
    osMinimumVersion?: string;
    // Maximum MacOS version.
    osMaximumVersion?: string;
    // Require that devices have enabled system integrity protection.
    systemIntegrityProtectionEnabled?: boolean;
    // Require that devices have enabled device threat protection.
    deviceThreatProtectionEnabled?: boolean;
    /**
     * Require Mobile Threat Protection minimum risk level to report noncompliance. Possible values are: unavailable, secured,
     * low, medium, high, notSet.
     */
    deviceThreatProtectionRequiredSecurityLevel?: DeviceThreatProtectionLevel;
    // Require encryption on Mac OS devices.
    storageRequireEncryption?: boolean;
    // Whether the firewall should be enabled or not.
    firewallEnabled?: boolean;
    // Corresponds to the 'Block all incoming connections' option.
    firewallBlockAllIncoming?: boolean;
    // Corresponds to 'Enable stealth mode.'
    firewallEnableStealthMode?: boolean;
}
export interface Windows10CompliancePolicy extends DeviceCompliancePolicy {
    // Require a password to unlock Windows device.
    passwordRequired?: boolean;
    // Indicates whether or not to block simple password.
    passwordBlockSimple?: boolean;
    // Require a password to unlock an idle device.
    passwordRequiredToUnlockFromIdle?: boolean;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: number;
    // The password expiration in days.
    passwordExpirationDays?: number;
    // The minimum password length.
    passwordMinimumLength?: number;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: number;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // The number of previous passwords to prevent re-use of.
    passwordPreviousPasswordBlockCount?: number;
    // Require devices to be reported as healthy by Windows Device Health Attestation.
    requireHealthyDeviceReport?: boolean;
    // Minimum Windows 10 version.
    osMinimumVersion?: string;
    // Maximum Windows 10 version.
    osMaximumVersion?: string;
    // Minimum Windows Phone version.
    mobileOsMinimumVersion?: string;
    // Maximum Windows Phone version.
    mobileOsMaximumVersion?: string;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is
     * enabled.
     */
    earlyLaunchAntiMalwareDriverEnabled?: boolean;
    // Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled
    bitLockerEnabled?: boolean;
    // Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled.
    secureBootEnabled?: boolean;
    // Require devices to be reported as healthy by Windows Device Health Attestation.
    codeIntegrityEnabled?: boolean;
    // Require encryption on windows devices.
    storageRequireEncryption?: boolean;
}
export interface Windows10MobileCompliancePolicy extends DeviceCompliancePolicy {
    // Require a password to unlock Windows Phone device.
    passwordRequired?: boolean;
    // Whether or not to block syncing the calendar.
    passwordBlockSimple?: boolean;
    // Minimum password length. Valid values 4 to 16
    passwordMinimumLength?: number;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: number;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // The number of previous passwords to prevent re-use of.
    passwordPreviousPasswordBlockCount?: number;
    // Number of days before password expiration. Valid values 1 to 255
    passwordExpirationDays?: number;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: number;
    // Require a password to unlock an idle device.
    passwordRequireToUnlockFromIdle?: boolean;
    // Minimum Windows Phone version.
    osMinimumVersion?: string;
    // Maximum Windows Phone version.
    osMaximumVersion?: string;
    /**
     * Require devices to be reported as healthy by Windows Device Health Attestation - early launch antimalware driver is
     * enabled.
     */
    earlyLaunchAntiMalwareDriverEnabled?: boolean;
    // Require devices to be reported healthy by Windows Device Health Attestation - bit locker is enabled
    bitLockerEnabled?: boolean;
    // Require devices to be reported as healthy by Windows Device Health Attestation - secure boot is enabled.
    secureBootEnabled?: boolean;
    // Require devices to be reported as healthy by Windows Device Health Attestation.
    codeIntegrityEnabled?: boolean;
    // Require encryption on windows devices.
    storageRequireEncryption?: boolean;
}
export interface Windows81CompliancePolicy extends DeviceCompliancePolicy {
    // Require a password to unlock Windows device.
    passwordRequired?: boolean;
    // Indicates whether or not to block simple password.
    passwordBlockSimple?: boolean;
    // Password expiration in days.
    passwordExpirationDays?: number;
    // The minimum password length.
    passwordMinimumLength?: number;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: number;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: number;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // The number of previous passwords to prevent re-use of. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: number;
    // Minimum Windows 8.1 version.
    osMinimumVersion?: string;
    // Maximum Windows 8.1 version.
    osMaximumVersion?: string;
    // Indicates whether or not to require encryption on a windows 8.1 device.
    storageRequireEncryption?: boolean;
}
export interface WindowsPhone81CompliancePolicy extends DeviceCompliancePolicy {
    // Whether or not to block syncing the calendar.
    passwordBlockSimple?: boolean;
    // Number of days before the password expires.
    passwordExpirationDays?: number;
    // Minimum length of passwords.
    passwordMinimumLength?: number;
    // Minutes of inactivity before a password is required.
    passwordMinutesOfInactivityBeforeLock?: number;
    // The number of character sets required in the password.
    passwordMinimumCharacterSetCount?: number;
    // The required password type. Possible values are: deviceDefault, alphanumeric, numeric.
    passwordRequiredType?: RequiredPasswordType;
    // Number of previous passwords to block. Valid values 0 to 24
    passwordPreviousPasswordBlockCount?: number;
    // Whether or not to require a password.
    passwordRequired?: boolean;
    // Minimum Windows Phone version.
    osMinimumVersion?: string;
    // Maximum Windows Phone version.
    osMaximumVersion?: string;
    // Require encryption on windows phone devices.
    storageRequireEncryption?: boolean;
}
export interface DeviceComplianceSettingState extends Entity {
    // The setting class name and property name.
    setting?: string;
    // The Setting Name that is being reported
    settingName?: string;
    // The Device Id that is being reported
    deviceId?: string;
    // The Device Name that is being reported
    deviceName?: string;
    // The user Id that is being reported
    userId?: string;
    // The User email address that is being reported
    userEmail?: string;
    // The User Name that is being reported
    userName?: string;
    // The User PrincipalName that is being reported
    userPrincipalName?: string;
    // The device model that is being reported
    deviceModel?: string;
    /**
     * The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant,
     * error, conflict, notAssigned.
     */
    state?: ComplianceStatus;
    // The DateTime when device compliance grace period expires
    complianceGracePeriodExpirationDateTime?: string;
}
export interface DeviceConfigurationState extends Entity {
    settingStates?: DeviceConfigurationSettingState[];
    // The name of the policy for this policyBase
    displayName?: string;
    // The version of the policy
    version?: number;
    // Platform type that the policy applies to
    platformType?: PolicyPlatformType;
    // The compliance state of the policy
    state?: ComplianceStatus;
    // Count of how many setting a policy holds
    settingCount?: number;
}
export interface DeviceCompliancePolicyState extends Entity {
    settingStates?: DeviceCompliancePolicySettingState[];
    // The name of the policy for this policyBase
    displayName?: string;
    // The version of the policy
    version?: number;
    // Platform type that the policy applies to
    platformType?: PolicyPlatformType;
    // The compliance state of the policy
    state?: ComplianceStatus;
    // Count of how many setting a policy holds
    settingCount?: number;
}
export interface EnrollmentConfigurationAssignment extends Entity {
    // Not yet documented
    target?: DeviceAndAppManagementAssignmentTarget;
}
export interface DeviceEnrollmentLimitConfiguration extends DeviceEnrollmentConfiguration {
    // Not yet documented
    limit?: number;
}
export interface DeviceEnrollmentPlatformRestrictionsConfiguration extends DeviceEnrollmentConfiguration {
    // Not yet documented
    iosRestriction?: DeviceEnrollmentPlatformRestriction;
    // Not yet documented
    windowsRestriction?: DeviceEnrollmentPlatformRestriction;
    // Not yet documented
    windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction;
    // Not yet documented
    androidRestriction?: DeviceEnrollmentPlatformRestriction;
    // Not yet documented
    macOSRestriction?: DeviceEnrollmentPlatformRestriction;
}
export interface DeviceEnrollmentWindowsHelloForBusinessConfiguration extends DeviceEnrollmentConfiguration {
    // Not yet documented
    pinMinimumLength?: number;
    // Not yet documented
    pinMaximumLength?: number;
    // Not yet documented. Possible values are: allowed, required, disallowed.
    pinUppercaseCharactersUsage?: WindowsHelloForBusinessPinUsage;
    // Not yet documented. Possible values are: allowed, required, disallowed.
    pinLowercaseCharactersUsage?: WindowsHelloForBusinessPinUsage;
    // Not yet documented. Possible values are: allowed, required, disallowed.
    pinSpecialCharactersUsage?: WindowsHelloForBusinessPinUsage;
    // Not yet documented. Possible values are: notConfigured, enabled, disabled.
    state?: Enablement;
    // Not yet documented
    securityDeviceRequired?: boolean;
    // Not yet documented
    unlockWithBiometricsEnabled?: boolean;
    // Not yet documented
    remotePassportEnabled?: boolean;
    // Not yet documented
    pinPreviousBlockCount?: number;
    // Not yet documented
    pinExpirationInDays?: number;
    // Not yet documented. Possible values are: notConfigured, enabled, disabled.
    enhancedBiometricsState?: Enablement;
}
export interface ManagedMobileApp extends Entity {
    // The identifier for an app with it's operating system type.
    mobileAppIdentifier?: MobileAppIdentifier;
    // Version of the entity.
    version?: string;
}
export interface TargetedManagedAppPolicyAssignment extends Entity {
    // Identifier for deployment of a group or app
    target?: DeviceAndAppManagementAssignmentTarget;
}
export interface ManagedAppOperation extends Entity {
    // The operation name.
    displayName?: string;
    // The last time the app operation was modified.
    lastModifiedDateTime?: string;
    // The current state of the operation
    state?: string;
    // Version of the entity.
    version?: string;
}
export interface ManagedAppPolicyDeploymentSummary extends Entity {
    // Not yet documented
    displayName?: string;
    // Not yet documented
    configurationDeployedUserCount?: number;
    // Not yet documented
    lastRefreshTime?: string;
    // Not yet documented
    configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[];
    // Version of the entity.
    version?: string;
}
export interface WindowsInformationProtectionAppLockerFile extends Entity {
    // The friendly name
    displayName?: string;
    // SHA256 hash of the file
    fileHash?: string;
    // File as a byte array
    file?: number;
    // Version of the entity.
    version?: string;
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IosManagedAppRegistration extends ManagedAppRegistration {}
// tslint:disable-next-line: no-empty-interface
export interface AndroidManagedAppRegistration extends ManagedAppRegistration {}
export interface ManagedAppStatusRaw extends ManagedAppStatus {
    // Status report content.
    content?: any;
}
export interface LocalizedNotificationMessage extends Entity {
    // DateTime the object was last modified.
    lastModifiedDateTime?: string;
    // The Locale for which this message is destined.
    locale?: string;
    // The Message Template Subject.
    subject?: string;
    // The Message Template content.
    messageTemplate?: string;
    /**
     * Flag to indicate whether or not this is the default locale for language fallback. This flag can only be set. To unset,
     * set this property to true on another Localized Notification Message.
     */
    isDefault?: boolean;
}
// tslint:disable-next-line: no-empty-interface
export interface DeviceAndAppManagementRoleDefinition extends RoleDefinition {}
export interface EnrollmentTroubleshootingEvent extends DeviceManagementTroubleshootingEvent {
    // Device identifier created or collected by Intune.
    managedDeviceIdentifier?: string;
    // Operating System.
    operatingSystem?: string;
    // OS Version.
    osVersion?: string;
    // Identifier for the user that tried to enroll the device.
    userId?: string;
    // Azure AD device identifier.
    deviceId?: string;
    /**
     * Type of the enrollment. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser,
     * appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin,
     * windowsCoManagement.
     */
    enrollmentType?: DeviceEnrollmentType;
    /**
     * Highlevel failure category. Possible values are: unknown, authentication, authorization, accountValidation,
     * userValidation, deviceNotSupported, inMaintenance, badRequest, featureNotSupported, enrollmentRestrictionsEnforced,
     * clientDisconnected, userAbandonment.
     */
    failureCategory?: DeviceEnrollmentFailureReason;
    // Detailed failure reason.
    failureReason?: string;
}
export interface PlannerTask extends Entity {
    // Identity of the user that created the task.
    createdBy?: IdentitySet;
    // Plan ID to which the task belongs.
    planId?: string;
    /**
     * Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long
     * and case-sensitive. Format validation is done on the service.
     */
    bucketId?: string;
    // Title of the task.
    title?: string;
    // Hint used to order items of this type in a list view. The format is defined as outlined here.
    orderHint?: string;
    // Hint used to order items of this type in a list view. The format is defined as outlined here.
    assigneePriority?: string;
    // Percentage of task completion. When set to 100, the task is considered completed.
    percentComplete?: number;
    /**
     * Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    startDateTime?: string;
    /**
     * Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'
     */
    createdDateTime?: string;
    /**
     * Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    dueDateTime?: string;
    // Read-only. Value is true if the details object of the task has a non-empty description and false otherwise.
    hasDescription?: boolean;
    /**
     * This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist,
     * description, reference.
     */
    previewType?: PlannerPreviewType;
    /**
     * Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date
     * and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would
     * look like this: '2014-01-01T00:00:00Z'
     */
    completedDateTime?: string;
    // Identity of the user that completed the task.
    completedBy?: IdentitySet;
    // Number of external references that exist on the task.
    referenceCount?: number;
    // Number of checklist items that are present on the task.
    checklistItemCount?: number;
    // Number of checklist items with value set to false, representing incomplete items.
    activeChecklistItemCount?: number;
    // The categories to which the task has been applied. See applied Categories for possible values.
    appliedCategories?: PlannerAppliedCategories;
    // The set of assignees the task is assigned to.
    assignments?: PlannerAssignments;
    // Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group.
    conversationThreadId?: string;
    // Read-only. Nullable. Additional details about the task.
    details?: PlannerTaskDetails;
    // Read-only. Nullable. Used to render the task correctly in the task board view when grouped by assignedTo.
    assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat;
    // Read-only. Nullable. Used to render the task correctly in the task board view when grouped by progress.
    progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat;
    // Read-only. Nullable. Used to render the task correctly in the task board view when grouped by bucket.
    bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat;
}
export interface PlannerPlan extends Entity {
    // Read-only. The user who created the plan.
    createdBy?: IdentitySet;
    /**
     * Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'
     */
    createdDateTime?: string;
    /**
     * ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this
     * property can’t be updated.
     */
    owner?: string;
    // Required. Title of the plan.
    title?: string;
    // Read-only. Nullable. Collection of tasks in the plan.
    tasks?: PlannerTask[];
    // Read-only. Nullable. Collection of buckets in the plan.
    buckets?: PlannerBucket[];
    // Read-only. Nullable. Additional details about the plan.
    details?: PlannerPlanDetails;
}
export interface Planner extends Entity {
    // Read-only. Nullable. Returns a collection of the specified tasks
    tasks?: PlannerTask[];
    // Read-only. Nullable. Returns a collection of the specified plans
    plans?: PlannerPlan[];
    // Read-only. Nullable. Returns a collection of the specified buckets
    buckets?: PlannerBucket[];
}
export interface PlannerBucket extends Entity {
    // Name of the bucket.
    name?: string;
    // Plan ID to which the bucket belongs.
    planId?: string;
    // Hint used to order items of this type in a list view. The format is defined as outlined here.
    orderHint?: string;
    // Read-only. Nullable. The collection of tasks in the bucket.
    tasks?: PlannerTask[];
}
export interface PlannerTaskDetails extends Entity {
    // Description of the task
    description?: string;
    /**
     * This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist,
     * description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
     */
    previewType?: PlannerPreviewType;
    // The collection of references on the task.
    references?: PlannerExternalReferences;
    // The collection of checklist items on the task.
    checklist?: PlannerChecklistItems;
}
export interface PlannerAssignedToTaskBoardTaskFormat extends Entity {
    /**
     * Hint value used to order the task on the AssignedTo view of the Task Board when the task is not assigned to anyone, or
     * if the orderHintsByAssignee dictionary does not provide an order hint for the user the task is assigned to. The format
     * is defined as outlined here.
     */
    unassignedOrderHint?: string;
    /**
     * Dictionary of hints used to order tasks on the AssignedTo view of the Task Board. The key of each entry is one of the
     * users the task is assigned to and the value is the order hint. The format of each value is defined as outlined here.
     */
    orderHintsByAssignee?: PlannerOrderHintsByAssignee;
}
export interface PlannerProgressTaskBoardTaskFormat extends Entity {
    // Hint value used to order the task on the Progress view of the Task Board. The format is defined as outlined here.
    orderHint?: string;
}
export interface PlannerBucketTaskBoardTaskFormat extends Entity {
    // Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here.
    orderHint?: string;
}
export interface PlannerPlanDetails extends Entity {
    /**
     * Set of user ids that this plan is shared with. If you are leveraging Office 365 Groups, use the Groups API to manage
     * group membership to share the group's plan. You can also add existing members of the group to this collection though it
     * is not required for them to access the plan owned by the group.
     */
    sharedWith?: PlannerUserIds;
    // An object that specifies the descriptions of the six categories that can be associated with tasks in the plan
    categoryDescriptions?: PlannerCategoryDescriptions;
}
export interface Trending extends Entity {
    weight?: number;
    resourceVisualization?: ResourceVisualization;
    resourceReference?: ResourceReference;
    lastModifiedDateTime?: string;
    resource?: Entity;
}
export interface SharedInsight extends Entity {
    lastShared?: SharingDetail;
    sharingHistory?: SharingDetail[];
    resourceVisualization?: ResourceVisualization;
    resourceReference?: ResourceReference;
    lastSharedMethod?: Entity;
    resource?: Entity;
}
export interface UsedInsight extends Entity {
    lastUsed?: UsageDetails;
    resourceVisualization?: ResourceVisualization;
    resourceReference?: ResourceReference;
    resource?: Entity;
}
export interface OnenoteEntityBaseModel extends Entity {
    // The endpoint where you can get details about the page. Read-only.
    self?: string;
}
export interface OnenoteEntitySchemaObjectModel extends OnenoteEntityBaseModel {
    /**
     * The date and time when the page was created. The timestamp represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'.
     * Read-only.
     */
    createdDateTime?: string;
}
export interface OnenoteEntityHierarchyModel extends OnenoteEntitySchemaObjectModel {
    // The name of the notebook.
    displayName?: string;
    // Identity of the user, device, and application which created the item. Read-only.
    createdBy?: IdentitySet;
    // Identity of the user, device, and application which created the item. Read-only.
    lastModifiedBy?: IdentitySet;
    /**
     * The date and time when the notebook was last modified. The timestamp represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'. Read-only.
     */
    lastModifiedDateTime?: string;
}
export interface Notebook extends OnenoteEntityHierarchyModel {
    // Indicates whether this is the user's default notebook. Read-only.
    isDefault?: boolean;
    /**
     * Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor
     * represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
     */
    userRole?: OnenoteUserRole;
    /**
     * Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the
     * owner. Read-only.
     */
    isShared?: boolean;
    // The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
    sectionsUrl?: string;
    // The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
    sectionGroupsUrl?: string;
    /**
     * Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's
     * installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
     */
    links?: NotebookLinks;
    // The sections in the notebook. Read-only. Nullable.
    sections?: OnenoteSection[];
    // The section groups in the notebook. Read-only. Nullable.
    sectionGroups?: SectionGroup[];
}
export interface OnenoteSection extends OnenoteEntityHierarchyModel {
    // Indicates whether this is the user's default section. Read-only.
    isDefault?: boolean;
    /**
     * Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's
     * installed. The oneNoteWebURL link opens the section in OneNote on the web.
     */
    links?: SectionLinks;
    // The pages endpoint where you can get details for all the pages in the section. Read-only.
    pagesUrl?: string;
    // The notebook that contains the section. Read-only.
    parentNotebook?: Notebook;
    // The section group that contains the section. Read-only.
    parentSectionGroup?: SectionGroup;
    // The collection of pages in the section. Read-only. Nullable.
    pages?: OnenotePage[];
}
export interface SectionGroup extends OnenoteEntityHierarchyModel {
    // The URL for the sections navigation property, which returns all the sections in the section group. Read-only.
    sectionsUrl?: string;
    /**
     * The URL for the sectionGroups navigation property, which returns all the section groups in the section group.
     * Read-only.
     */
    sectionGroupsUrl?: string;
    // The notebook that contains the section group. Read-only.
    parentNotebook?: Notebook;
    // The section group that contains the section group. Read-only.
    parentSectionGroup?: SectionGroup;
    // The sections in the section group. Read-only. Nullable.
    sections?: OnenoteSection[];
    // The section groups in the section. Read-only. Nullable.
    sectionGroups?: SectionGroup[];
}
export interface OnenotePage extends OnenoteEntitySchemaObjectModel {
    // The title of the page.
    title?: string;
    // The unique identifier of the application that created the page. Read-only.
    createdByAppId?: string;
    /**
     * Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed.
     * The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
     */
    links?: PageLinks;
    // The URL for the page's HTML content. Read-only.
    contentUrl?: string;
    // The page's HTML content.
    content?: any;
    /**
     * The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'. Read-only.
     */
    lastModifiedDateTime?: string;
    // The indentation level of the page. Read-only.
    level?: number;
    // The order of the page within its parent section. Read-only.
    order?: number;
    userTags?: string[];
    // The section that contains the page. Read-only.
    parentSection?: OnenoteSection;
    // The notebook that contains the page. Read-only.
    parentNotebook?: Notebook;
}
export interface OnenoteResource extends OnenoteEntityBaseModel {
    // The content stream
    content?: any;
    // The URL for downloading the content
    contentUrl?: string;
}
export interface Operation extends Entity {
    // The current status of the operation: notStarted, running, completed, failed
    status?: OperationStatus;
    // The start time of the operation.
    createdDateTime?: string;
    // The time of the last action of the operation.
    lastActionDateTime?: string;
}
export interface OnenoteOperation extends Operation {
    // The resource URI for the object. For example, the resource URI for a copied page or section.
    resourceLocation?: string;
    // The resource id.
    resourceId?: string;
    // The error returned by the operation.
    error?: OnenoteOperationError;
    // The operation percent complete if the operation is still in running status
    percentComplete?: string;
}
export interface DataPolicyOperation extends Entity {
    /**
     * Represents when the request for this data policy operation was completed, in UTC time, using the ISO 8601 format. For
     * example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Null until the operation completes.
     */
    completedDateTime?: string;
    // Possible values are: notStarted, running, complete, failed, unknownFutureValue.
    status?: DataPolicyOperationStatus;
    // The URL location to where data is being exported for export requests.
    storageLocation?: string;
    // The id for the user on whom the operation is performed.
    userId?: string;
    /**
     * Represents when the request for this data operation was submitted, in UTC time, using the ISO 8601 format. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    submittedDateTime?: string;
    // Specifies the progress of an operation.
    progress?: number;
}
export interface ActivityHistoryItem extends Entity {
    // Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored.
    status?: Status;
    /**
     * Optional. The duration of active user engagement. if not supplied, this is calculated from the startedDateTime and
     * lastActiveDateTime.
     */
    activeDurationSeconds?: number;
    // Set by the server. DateTime in UTC when the object was created on the server.
    createdDateTime?: string;
    /**
     * Optional. UTC DateTime when the historyItem (activity session) was last understood as active or finished - if null,
     * historyItem status should be Ongoing.
     */
    lastActiveDateTime?: string;
    // Set by the server. DateTime in UTC when the object was modified on the server.
    lastModifiedDateTime?: string;
    // Optional. UTC DateTime when the historyItem will undergo hard-delete. Can be set by the client.
    expirationDateTime?: string;
    // Required. UTC DateTime when the historyItem (activity session) was started. Required for timeline history.
    startedDateTime?: string;
    /**
     * Optional. The timezone in which the user's device used to generate the activity was located at activity creation time.
     * Values supplied as Olson IDs in order to support cross-platform representation.
     */
    userTimezone?: string;
    // Optional. NavigationProperty/Containment; navigation property to the associated activity.
    activity?: UserActivity;
}
export interface Security extends Entity {
    // Read-only. Nullable.
    alerts?: Alert[];
    secureScoreControlProfiles?: SecureScoreControlProfile[];
    secureScores?: SecureScore[];
}
export interface Alert extends Entity {
    // Name or alias of the activity group (attacker) this alert is attributed to.
    activityGroupName?: string;
    // Name of the analyst the alert is assigned to for triage, investigation, or remediation (supports update).
    assignedTo?: string;
    // Azure subscription ID, present if this alert is related to an Azure resource.
    azureSubscriptionId?: string;
    // Azure Active Directory tenant ID. Required.
    azureTenantId?: string;
    // Category of the alert (for example, credentialTheft, ransomware, etc.).
    category?: string;
    /**
     * Time at which the alert was closed. The Timestamp type represents date and time information using ISO 8601 format and
     * is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z' (supports
     * update).
     */
    closedDateTime?: string;
    // Security-related stateful information generated by the provider about the cloud application/s related to this alert.
    cloudAppStates?: CloudAppSecurityState[];
    // Customer-provided comments on alert (for customer alert management) (supports update).
    comments?: string[];
    // Confidence of the detection logic (percentage between 1-100).
    confidence?: number;
    /**
     * Time at which the alert was created by the alert provider. The Timestamp type represents date and time information
     * using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'. Required.
     */
    createdDateTime?: string;
    // Alert description.
    description?: string;
    // Set of alerts related to this alert entity (each alert is pushed to the SIEM as a separate record).
    detectionIds?: string[];
    /**
     * Time at which the event(s) that served as the trigger(s) to generate the alert occurred. The Timestamp type represents
     * date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014
     * would look like this: '2014-01-01T00:00:00Z'. Required.
     */
    eventDateTime?: string;
    /**
     * Analyst feedback on the alert. Possible values are: unknown, truePositive, falsePositive, benignPositive. (supports
     * update)
     */
    feedback?: AlertFeedback;
    // Security-related stateful information generated by the provider about the file(s) related to this alert.
    fileStates?: FileSecurityState[];
    historyStates?: AlertHistoryState[];
    // Security-related stateful information generated by the provider about the host(s) related to this alert.
    hostStates?: HostSecurityState[];
    /**
     * Time at which the alert entity was last modified. The Timestamp type represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'.
     */
    lastModifiedDateTime?: string;
    // Threat Intelligence pertaining to malware related to this alert.
    malwareStates?: MalwareState[];
    // Security-related stateful information generated by the provider about the network connection(s) related to this alert.
    networkConnections?: NetworkConnection[];
    // Security-related stateful information generated by the provider about the process or processes related to this alert.
    processes?: Process[];
    /**
     * Vendor/provider recommended action(s) to take as a result of the alert (for example, isolate machine, enforce2FA,
     * reimage host).
     */
    recommendedActions?: string[];
    // Security-related stateful information generated by the provider about the registry keys related to this alert.
    registryKeyStates?: RegistryKeyState[];
    // Alert severity - set by vendor/provider. Possible values are: unknown, informational, low, medium, high. Required.
    severity?: AlertSeverity;
    /**
     * Hyperlinks (URIs) to the source material related to the alert, for example, provider's user interface for alerts or log
     * search, etc.
     */
    sourceMaterials?: string[];
    /**
     * Alert lifecycle status (stage). Possible values are: unknown, newAlert, inProgress, resolved. (supports update).
     * Required.
     */
    status?: AlertStatus;
    /**
     * User-definable labels that can be applied to an alert and can serve as filter conditions (for example 'HVA', 'SAW',
     * etc.) (supports update).
     */
    tags?: string[];
    // Alert title. Required.
    title?: string;
    /**
     * Security-related information about the specific properties that triggered the alert (properties appearing in the
     * alert). Alerts might contain information about multiple users, hosts, files, ip addresses. This field indicates which
     * properties triggered the alert generation.
     */
    triggers?: AlertTrigger[];
    // Security-related stateful information generated by the provider about the user accounts related to this alert.
    userStates?: UserSecurityState[];
    /**
     * Complex type containing details about the security product/service vendor, provider, and subprovider (for example,
     * vendor=Microsoft; provider=Windows Defender ATP; subProvider=AppLocker). Required.
     */
    vendorInformation?: SecurityVendorInformation;
    // Threat intelligence pertaining to one or more vulnerabilities related to this alert.
    vulnerabilityStates?: VulnerabilityState[];
}
export interface SecureScoreControlProfile extends Entity {
    // Control action type (Config, Review, Behavior).
    actionType?: string;
    // URL to where the control can be actioned.
    actionUrl?: string;
    // GUID string for tenant ID.
    azureTenantId?: string;
    complianceInformation?: ComplianceInformation[];
    // Control action category (Identity, Data, Device, Apps, Infrastructure).
    controlCategory?: string;
    controlStateUpdates?: SecureScoreControlStateUpdate[];
    // Flag to indicate if a control is depreciated.
    deprecated?: boolean;
    // Resource cost of implemmentating control (low, moderate, high).
    implementationCost?: string;
    // Time at which the control profile entity was last modified. The Timestamp type represents date and time
    lastModifiedDateTime?: string;
    // max attainable score for the control.
    maxScore?: number;
    // Microsoft's stack ranking of control.
    rank?: number;
    // Description of what the control will help remediate.
    remediation?: string;
    // Description of the impact on users of the remediation.
    remediationImpact?: string;
    // Service that owns the control (Exchange, Sharepoint, Azure AD).
    service?: string;
    // List of threats the control mitigates (accountBreach,dataDeletion,dataExfiltration,dataSpillage,
    threats?: string[];
    tier?: string;
    // Title of the control.
    title?: string;
    userImpact?: string;
    vendorInformation?: SecurityVendorInformation;
}
export interface SecureScore extends Entity {
    // Active user count of the given tenant.
    activeUserCount?: number;
    /**
     * Average score by different scopes (for example, average by industry, average by seating) and control category
     * (Identity, Data, Device, Apps, Infrastructure) within the scope.
     */
    averageComparativeScores?: AverageComparativeScore[];
    // GUID string for tenant ID.
    azureTenantId?: string;
    // Contains tenant scores for a set of controls.
    controlScores?: ControlScore[];
    // The date when the entity is created.
    createdDateTime?: string;
    // Tenant current attained score on specified date.
    currentScore?: number;
    // Microsoft-provided services for the tenant (for example, Exchange online, Skype, Sharepoint).
    enabledServices?: string[];
    // Licensed user count of the given tenant.
    licensedUserCount?: number;
    // Tenant maximum possible score on specified date.
    maxScore?: number;
    /**
     * Complex type containing details about the security product/service vendor, provider, and subprovider (for example,
     * vendor=Microsoft; provider=SecureScore). Required.
     */
    vendorInformation?: SecurityVendorInformation;
}
export interface CloudCommunications extends Entity {
    calls?: Call[];
    onlineMeetings?: OnlineMeeting[];
}
export interface Call extends Entity {
    state?: CallState;
    mediaState?: CallMediaState;
    resultInfo?: ResultInfo;
    direction?: CallDirection;
    subject?: string;
    callbackUri?: string;
    source?: ParticipantInfo;
    targets?: ParticipantInfo[];
    requestedModalities?: Modality[];
    mediaConfig?: MediaConfig;
    chatInfo?: ChatInfo;
    meetingInfo?: MeetingInfo;
    tenantId?: string;
    myParticipantId?: string;
    toneInfo?: ToneInfo;
    participants?: Participant[];
    operations?: CommsOperation[];
}
export interface Participant extends Entity {
    info?: ParticipantInfo;
    mediaStreams?: MediaStream[];
    isMuted?: boolean;
    isInLobby?: boolean;
}
export interface CommsOperation extends Entity {
    status?: OperationStatus;
    clientContext?: string;
    resultInfo?: ResultInfo;
}
// tslint:disable-next-line: interface-name
export interface InviteParticipantsOperation extends CommsOperation {
    participants?: InvitationParticipantInfo[];
}
// tslint:disable-next-line: no-empty-interface
export interface MuteParticipantOperation extends CommsOperation {}
// tslint:disable-next-line: no-empty-interface
export interface PlayPromptOperation extends CommsOperation {}
export interface RecordOperation extends CommsOperation {
    recordingLocation?: string;
    recordingAccessToken?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface SubscribeToToneOperation extends CommsOperation {}
// tslint:disable-next-line: no-empty-interface
export interface UnmuteParticipantOperation extends CommsOperation {}
export interface AppCatalogs extends Entity {
    teamsApps?: TeamsApp[];
}
export interface TeamsApp extends Entity {
    // The ID of the catalog provided by the app developer in the Microsoft Teams zip app package.
    externalId?: string;
    // The name of the catalog app provided by the app developer in the Microsoft Teams zip app package.
    displayName?: string;
    // The method of distribution for the app.
    distributionMethod?: TeamsAppDistributionMethod;
    // The details for each version of the app.
    appDefinitions?: TeamsAppDefinition[];
}
export interface Channel extends Entity {
    // Channel name as it will appear to the user in Microsoft Teams.
    displayName?: string;
    // Optional textual description for the channel.
    description?: string;
    // The email address for sending messages to the channel. Read-only.
    email?: string;
    /**
     * A hyperlink that will navigate to the channel in Microsoft Teams. This is the URL that you get when you right-click a
     * channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not
     * parsed. Read-only.
     */
    webUrl?: string;
    // A collection of all the tabs in the channel. A navigation property.
    tabs?: TeamsTab[];
}
export interface TeamsAppInstallation extends Entity {
    // The app that is installed.
    teamsApp?: TeamsApp;
    // The details of this version of the app.
    teamsAppDefinition?: TeamsAppDefinition;
}
export interface TeamsAsyncOperation extends Entity {
    operationType?: TeamsAsyncOperationType;
    createdDateTime?: string;
    status?: TeamsAsyncOperationStatus;
    lastActionDateTime?: string;
    attemptsCount?: number;
    targetResourceId?: string;
    targetResourceLocation?: string;
    error?: OperationError;
}
export interface TeamsAppDefinition extends Entity {
    // The id from the Teams App manifest.
    teamsAppId?: string;
    // The name of the app provided by the app developer.
    displayName?: string;
    // The version number of the application.
    version?: string;
}
export interface TeamsTab extends Entity {
    // Name of the tab.
    displayName?: string;
    // Deep link url of the tab instance. Read only.
    webUrl?: string;
    // Container for custom settings applied to a tab. The tab is considered configured only once this property is set.
    configuration?: TeamsTabConfiguration;
    // The application that is linked to the tab. This cannot be changed after tab creation.
    teamsApp?: TeamsApp;
}
export interface AuditActivityInitiator {
    /**
     * If the resource initiating the activity is a user, this property Indicates all the user related information like
     * userId, Name, UserPrinicpalName.
     */
    user?: UserIdentity;
    /**
     * If the resource initiating the activity is an app, this property indicates all the app related information like appId,
     * Name, servicePrincipalId, Name.
     */
    app?: AppIdentity;
}
export interface UserIdentity {
    // Unique identifier for the identity.
    id?: string;
    // The identity's display name. Note that this may not always be available or up-to-date.
    displayName?: string;
    // Indicates the client IP address used by user performing the activity (audit log only).
    ipAddress?: string;
    // The userPrincipalName attribute of the user.
    userPrincipalName?: string;
}
export interface AppIdentity {
    // Refers to the Unique GUID representing Application Id in the Azure Active Directory.
    appId?: string;
    // Refers to the Application Name displayed in the Azure Portal.
    displayName?: string;
    // Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App.
    servicePrincipalId?: string;
    // Refers to the Service Principal Name is the Application name in the tenant.
    servicePrincipalName?: string;
}
export interface TargetResource {
    // Indicates the unique ID of the resource.
    id?: string;
    // Indicates the visible name defined for the resource. Typically specified when the resource is created.
    displayName?: string;
    // Describes the resource type. Example values include Application, Group, ServicePrincipal, and User.
    type?: string;
    // When type is set to User, this includes the user name that initiated the action; null for other types.
    userPrincipalName?: string;
    // When type is set to Group, this indicates the group type.
    groupType?: GroupType;
    // Indicates name, old value and new value of each attribute that changed. Property values depend on the operation type.
    modifiedProperties?: ModifiedProperty[];
}
export interface ModifiedProperty {
    // Indicates the property name of the target attribute that was changed.
    displayName?: string;
    // Indicates the previous value (before the update) for the property.
    oldValue?: string;
    // Indicates the updated value for the propery.
    newValue?: string;
}
export interface KeyValue {
    // Key for the key-value pair.
    key?: string;
    // Value for the key-value pair.
    value?: string;
}
export interface SignInStatus {
    /**
     * Provides the 5-6digit error code that's generated during a sign-in failure. Check out the list of error codes and
     * messages.
     */
    errorCode?: number;
    /**
     * Provides the error message or the reason for failure for the corresponding sign-in activity. Check out the list of
     * error codes and messages.
     */
    failureReason?: string;
    // Provides additional details on the sign-in activity
    additionalDetails?: string;
}
export interface DeviceDetail {
    // Refers to the UniqueID of the device used for signing in.
    deviceId?: string;
    // Refers to the name of the device used for signing in.
    displayName?: string;
    // Indicates the operating system name and version used for signing in.
    operatingSystem?: string;
    // Indicates the browser information of the used for signing in.
    browser?: string;
    // Indicates whether the device is compliant.
    isCompliant?: boolean;
    // Indicates whether the device is managed.
    isManaged?: boolean;
    // Provides information about whether the signed-in device is Workplace Joined, AzureAD Joined, Domain Joined.
    trustType?: string;
}
export interface SignInLocation {
    /**
     * Provides the city where the sign-in originated. This is calculated using latitude/longitude information from the
     * sign-in activity.
     */
    city?: string;
    /**
     * Provides the State where the sign-in originated. This is calculated using latitude/longitude information from the
     * sign-in activity.
     */
    state?: string;
    /**
     * Provides the country code info (2 letter code) where the sign-in originated. This is calculated using
     * latitude/longitude information from the sign-in activity.
     */
    countryOrRegion?: string;
    // Provides the latitude, longitude and altitude where the sign-in originated.
    geoCoordinates?: GeoCoordinates;
}
export interface GeoCoordinates {
    // Optional. The altitude (height), in feet, above sea level for the item. Read-only.
    altitude?: number;
    // Optional. The latitude, in decimal, for the item. Read-only.
    latitude?: number;
    // Optional. The longitude, in decimal, for the item. Read-only.
    longitude?: number;
}
export interface AppliedConditionalAccessPolicy {
    // Unique GUID of the conditional access polic.y
    id?: string;
    // Refers to the Name of the conditional access policy (example: 'Require MFA for Salesforce').
    displayName?: string;
    /**
     * Refers to the grant controls enforced by the conditional access policy (example: 'Require multi-factor
     * authentication').
     */
    enforcedGrantControls?: string[];
    // Refers to the session controls enforced by the conditional access policy (example: 'Require app enforced controls').
    enforcedSessionControls?: string[];
    /**
     * Indicates the result of the CA policy that was triggered. Possible values are:successfailurenotApplied - Policy isn't
     * applied because policy conditions were not met.notEnabled - This is due to the policy in disabled state.
     */
    result?: AppliedConditionalAccessPolicyResult;
}
// tslint:disable-next-line: interface-name
export interface InvitedUserMessageInfo {
    // Additional recipients the invitation message should be sent to. Currently only 1 additional recipient is supported.
    ccRecipients?: Recipient[];
    /**
     * The language you want to send the default message in. If the customizedMessageBody is specified, this property is
     * ignored, and the message is sent using the customizedMessageBody. The language format should be in ISO 639. The default
     * is en-US.
     */
    messageLanguage?: string;
    // Customized message body you want to send if you don't want the default message.
    customizedMessageBody?: string;
}
export interface Recipient {
    // The recipient's email address.
    emailAddress?: EmailAddress;
}
export interface EmailAddress {
    // The display name of the person or entity.
    name?: string;
    // The email address of the person or entity.
    address?: string;
}
export interface AssignedLicense {
    // A collection of the unique identifiers for plans that have been disabled.
    disabledPlans?: string[];
    // The unique identifier for the SKU.
    skuId?: string;
}
export interface AssignedPlan {
    /**
     * The date and time at which the plan was assigned; for example: 2013-01-02T19:32:30Z. The Timestamp type represents date
     * and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would
     * look like this: '2014-01-01T00:00:00Z'
     */
    assignedDateTime?: string;
    // For example, 'Enabled'.
    capabilityStatus?: string;
    // The name of the service; for example, 'Exchange'.
    service?: string;
    // A GUID that identifies the service plan.
    servicePlanId?: string;
}
export interface LicenseAssignmentState {
    skuId?: string;
    disabledPlans?: string[];
    assignedByGroup?: string;
    state?: string;
    error?: string;
}
export interface OnPremisesExtensionAttributes {
    // First customizable extension attribute.
    extensionAttribute1?: string;
    // Second customizable extension attribute.
    extensionAttribute2?: string;
    // Third customizable extension attribute.
    extensionAttribute3?: string;
    // Fourth customizable extension attribute.
    extensionAttribute4?: string;
    // Fifth customizable extension attribute.
    extensionAttribute5?: string;
    // Sixth customizable extension attribute.
    extensionAttribute6?: string;
    // Seventh customizable extension attribute.
    extensionAttribute7?: string;
    // Eighth customizable extension attribute.
    extensionAttribute8?: string;
    // Ninth customizable extension attribute.
    extensionAttribute9?: string;
    // Tenth customizable extension attribute.
    extensionAttribute10?: string;
    // Eleventh customizable extension attribute.
    extensionAttribute11?: string;
    // Twelfth customizable extension attribute.
    extensionAttribute12?: string;
    // Thirteenth customizable extension attribute.
    extensionAttribute13?: string;
    // Fourteenth customizable extension attribute.
    extensionAttribute14?: string;
    // Fifteenth customizable extension attribute.
    extensionAttribute15?: string;
}
export interface OnPremisesProvisioningError {
    // Value of the property causing the error.
    value?: string;
    /**
     * Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict
     * - indicates a property value is not unique. Other objects contain the same value for the property.
     */
    category?: string;
    // Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress
    propertyCausingError?: string;
    // The date and time at which the error occurred.
    occurredDateTime?: string;
}
export interface PasswordProfile {
    /**
     * The password for the user. This property is required when a user is created. It can be updated, but the user will be
     * required to change the password on the next login. The password must satisfy minimum requirements as specified by the
     * user’s passwordPolicies property. By default, a strong password is required.
     */
    password?: string;
    // true if the user must change her password on the next login; otherwise false.
    forceChangePasswordNextSignIn?: boolean;
    /**
     * If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their
     * password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform
     * a multi-factor authentication before password change. After a password change, this property will be automatically
     * reset to false. If not set, default is false.
     */
    forceChangePasswordNextSignInWithMfa?: boolean;
}
export interface ProvisionedPlan {
    // For example, 'Enabled'.
    capabilityStatus?: string;
    // For example, 'Success'.
    provisioningStatus?: string;
    // The name of the service; for example, 'AccessControlS2S'
    service?: string;
}
export interface MailboxSettings {
    // Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
    automaticRepliesSetting?: AutomaticRepliesSetting;
    // Folder ID of an archive folder for the user.
    archiveFolder?: string;
    // The default time zone for the user's mailbox.
    timeZone?: string;
    // The locale information for the user, including the preferred language and country/region.
    language?: LocaleInfo;
    // The days of the week and hours in a specific time zone that the user works.
    workingHours?: WorkingHours;
    // The date format for the user's mailbox.
    dateFormat?: string;
    // The time format for the user's mailbox.
    timeFormat?: string;
}
export interface AutomaticRepliesSetting {
    // Configurations status for automatic replies. The possible values are: disabled, alwaysEnabled, scheduled.
    status?: AutomaticRepliesStatus;
    /**
     * The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status
     * is AlwaysEnabled or Scheduled. The possible values are: none, contactsOnly, all.
     */
    externalAudience?: ExternalAudienceScope;
    // The date and time that automatic replies are set to begin, if Status is set to Scheduled.
    scheduledStartDateTime?: DateTimeTimeZone;
    // The date and time that automatic replies are set to end, if Status is set to Scheduled.
    scheduledEndDateTime?: DateTimeTimeZone;
    /**
     * The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled
     * or Scheduled.
     */
    internalReplyMessage?: string;
    // The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled.
    externalReplyMessage?: string;
}
export interface DateTimeTimeZone {
    /**
     * A single point of time in a combined date and time representation ({date}T{time}; for example,
     * 2017-08-29T04:00:00.0000000).
     */
    dateTime?: string;
    // Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
    timeZone?: string;
}
export interface LocaleInfo {
    /**
     * A locale representation for the user, which includes the user's preferred language and country/region. For example,
     * 'en-us'. The language component follows 2-letter codes as defined in ISO 639-1, and the country component follows
     * 2-letter codes as defined in ISO 3166-1 alpha-2.
     */
    locale?: string;
    // A name representing the user's locale in natural language, for example, 'English (United States)'.
    displayName?: string;
}
export interface WorkingHours {
    // The days of the week on which the user works.
    daysOfWeek?: DayOfWeek[];
    // The time of the day that the user starts working.
    startTime?: string;
    // The time of the day that the user stops working.
    endTime?: string;
    // The time zone to which the working hours apply.
    timeZone?: TimeZoneBase;
}
export interface TimeZoneBase {
    /**
     * The name of a time zone. It can be a standard time zone name such as 'Hawaii-Aleutian Standard Time', or 'Customized
     * Time Zone' for a custom time zone.
     */
    name?: string;
}
export interface CertificateAuthority {
    /**
     * Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate
     * authority.
     */
    isRootAuthority?: boolean;
    // The URL of the certificate revocation list.
    certificateRevocationListUrl?: string;
    /**
     * The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was
     * created.
     */
    deltaCertificateRevocationListUrl?: string;
    // Required. The base64 encoded string representing the public certificate.
    certificate?: number;
    // The issuer of the certificate, calculated from the certificate value. Read-only.
    issuer?: string;
    // The subject key identifier of the certificate, calculated from the certificate value. Read-only.
    issuerSki?: string;
}
export interface PhysicalOfficeAddress {
    // The city.
    city?: string;
    // The country or region. It's a free-format string value, for example, 'United States'.
    countryOrRegion?: string;
    // Office location such as building and office number for an organizational contact.
    officeLocation?: string;
    // The postal code.
    postalCode?: string;
    // The state.
    state?: string;
    // The street.
    street?: string;
}
export interface Phone {
    /**
     * The type of phone number. The possible values are: home, business, mobile, other, assistant, homeFax, businessFax,
     * otherFax, pager, radio.
     */
    type?: PhoneType;
    // The phone number.
    number?: string;
    region?: string;
    language?: string;
}
export interface AlternativeSecurityId {
    // For internal use only
    type?: number;
    // For internal use only
    identityProvider?: string;
    // For internal use only
    key?: number;
}
export interface DomainState {
    /**
     * Current status of the operation. Scheduled - Operation has been scheduled but has not started. InProgress - Task has
     * started and is in progress. Failed - Operation has failed.
     */
    status?: string;
    // Type of asynchronous operation. The values can be ForceDelete or Verification
    operation?: string;
    /**
     * Timestamp for when the last activity occurred. The value is updated when an operation is scheduled, the asynchronous
     * task starts, and when the operation completes.
     */
    lastActionDateTime?: string;
}
export interface ServicePlanInfo {
    // The unique identifier of the service plan.
    servicePlanId?: string;
    // The name of the service plan.
    servicePlanName?: string;
    /**
     * The provisioning status of the service plan. Possible values:'Success' - Service is fully provisioned.'Disabled' -
     * Service has been disabled.'PendingInput' - Service is not yet provisioned; awaiting service
     * confirmation.'PendingActivation' - Service is provisioned but requires explicit activation by administrator (for
     * example, Intune_O365 service plan)'PendingProvisioning' - Microsoft has added a new service to the product SKU and it
     * has not been activated in the tenant, yet.
     */
    provisioningStatus?: string;
    /**
     * The object the service plan can be assigned to. Possible values:'User' - service plan can be assigned to individual
     * users.'Company' - service plan can be assigned to the entire tenant.
     */
    appliesTo?: string;
}
export interface LicenseProcessingState {
    state?: string;
}
export interface LicenseUnitsDetail {
    // The number of units that are enabled.
    enabled?: number;
    // The number of units that are suspended.
    suspended?: number;
    // The number of units that are in warning status.
    warning?: number;
}
export interface PrivacyProfile {
    // A valid smtp email address for the privacy statement contact. Not required.
    contactEmail?: string;
    /**
     * A valid URL format that begins with http:// or https://. Maximum length is 255 characters. The URL that directs to the
     * company's privacy statement. Not required.
     */
    statementUrl?: string;
}
export interface VerifiedDomain {
    // For example, 'Email', 'OfficeCommunicationsOnline'.
    capabilities?: string;
    // true if this is the default domain associated with the tenant; otherwise, false.
    isDefault?: boolean;
    // true if this is the initial domain associated with the tenant; otherwise, false
    isInitial?: boolean;
    // The domain name; for example, 'contoso.onmicrosoft.com'
    name?: string;
    // For example, 'Managed'.
    type?: string;
}
export interface SettingValue {
    // Name of the setting (as defined by the groupSettingTemplate).
    name?: string;
    // Value of the setting.
    value?: string;
}
export interface SettingTemplateValue {
    // Name of the setting.
    name?: string;
    // Type of the setting.
    type?: string;
    // Default value for the setting.
    defaultValue?: string;
    // Description of the setting.
    description?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface ComplexExtensionValue {}
export interface PhysicalAddress {
    // The street.
    street?: string;
    // The city.
    city?: string;
    // The state.
    state?: string;
    // The country or region. It's a free-format string value, for example, 'United States'.
    countryOrRegion?: string;
    // The postal code.
    postalCode?: string;
}
// tslint:disable-next-line: interface-name
export interface Identity {
    /**
     * The identity's display name. Note that this may not always be available or up to date. For example, if a user changes
     * their display name, the API may show the new value in a future response, but the items associated with the user won't
     * show up as having changed when using delta.
     */
    displayName?: string;
    // Unique identifier for the identity.
    id?: string;
}
// tslint:disable-next-line: interface-name
export interface IdentitySet {
    // Optional. The application associated with this action.
    application?: Identity;
    // Optional. The device associated with this action.
    device?: Identity;
    // Optional. The user associated with this action.
    user?: Identity;
}
export interface EducationStudent {
    // Year the student is graduating from the school.
    graduationYear?: string;
    // Current grade level of the student.
    grade?: string;
    // Birth date of the student.
    birthDate?: string;
    // The possible values are: female, male, other, unknownFutureValue.
    gender?: EducationGender;
    // Student Number.
    studentNumber?: string;
    // ID of the student in the source system.
    externalId?: string;
}
export interface EducationTeacher {
    // Teacher number.
    teacherNumber?: string;
    // ID of the teacher in the source system.
    externalId?: string;
}
export interface EducationTerm {
    // ID of term in the syncing system.
    externalId?: string;
    // Start of the term.
    startDate?: string;
    // End of the term.
    endDate?: string;
    // Display name of the term.
    displayName?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface Root {}
export interface SharepointIds {
    // The unique identifier (guid) for the item's list in SharePoint.
    listId?: string;
    // An integer identifier for the item within the containing list.
    listItemId?: string;
    // The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site.
    listItemUniqueId?: string;
    // The unique identifier (guid) for the item's site collection (SPSite).
    siteId?: string;
    // The SharePoint URL for the site that contains the item.
    siteUrl?: string;
    // The unique identifier (guid) for the item's site (SPWeb).
    webId?: string;
}
export interface SiteCollection {
    // The hostname for the site collection. Read-only.
    hostname?: string;
    // If present, indicates that this is a root site collection in SharePoint. Read-only.
    root?: Root;
}
export interface ListInfo {
    // If true, indicates that content types are enabled for this list.
    contentTypesEnabled?: boolean;
    // If true, indicates that the list is not normally visible in the SharePoint user experience.
    hidden?: boolean;
    /**
     * An enumerated value that represents the base list template used in creating the list. Possible values include
     * documentLibrary, genericList, task, survey, announcements, contacts, and more.
     */
    template?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface SystemFacet {}
export interface Quota {
    // Total space consumed by files in the recycle bin, in bytes. Read-only.
    deleted?: number;
    // Total space remaining before reaching the quota limit, in bytes. Read-only.
    remaining?: number;
    // Enumeration value that indicates the state of the storage space. Read-only.
    state?: string;
    // Total allowed storage space, in bytes. Read-only.
    total?: number;
    // Total space used, in bytes. Read-only.
    used?: number;
}
export interface Audio {
    // The title of the album for this audio file.
    album?: string;
    // The artist named on the album for the audio file.
    albumArtist?: string;
    // The performing artist for the audio file.
    artist?: string;
    // Bitrate expressed in kbps.
    bitrate?: number;
    // The name of the composer of the audio file.
    composers?: string;
    // Copyright information for the audio file.
    copyright?: string;
    // The number of the disc this audio file came from.
    disc?: number;
    // The total number of discs in this album.
    discCount?: number;
    // Duration of the audio file, expressed in milliseconds
    duration?: number;
    // The genre of this audio file.
    genre?: string;
    // Indicates if the file is protected with digital rights management.
    hasDrm?: boolean;
    // Indicates if the file is encoded with a variable bitrate.
    isVariableBitrate?: boolean;
    // The title of the audio file.
    title?: string;
    // The number of the track on the original disc for this audio file.
    track?: number;
    // The total number of tracks on the original disc for this audio file.
    trackCount?: number;
    // The year the audio file was recorded.
    year?: number;
}
export interface Deleted {
    // Represents the state of the deleted item.
    state?: string;
}
export interface File {
    // Hashes of the file's binary content, if available. Read-only.
    hashes?: Hashes;
    /**
     * The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file
     * was uploaded. Read-only.
     */
    mimeType?: string;
    processingMetadata?: boolean;
}
export interface Hashes {
    // The CRC32 value of the file in little endian (if available). Read-only.
    crc32Hash?: string;
    /**
     * A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available).
     * Read-only.
     */
    quickXorHash?: string;
    // SHA1 hash for the contents of the file (if available). Read-only.
    sha1Hash?: string;
}
export interface FileSystemInfo {
    // The UTC date and time the file was created on a client.
    createdDateTime?: string;
    // The UTC date and time the file was last accessed. Available for the recent file list only.
    lastAccessedDateTime?: string;
    // The UTC date and time the file was last modified on a client.
    lastModifiedDateTime?: string;
}
export interface Folder {
    // Number of children contained immediately within this container.
    childCount?: number;
    // A collection of properties defining the recommended view for the folder.
    view?: FolderView;
}
export interface FolderView {
    // The method by which the folder should be sorted.
    sortBy?: string;
    // If true, indicates that items should be sorted in descending order. Otherwise, items should be sorted ascending.
    sortOrder?: string;
    // The type of view that should be used to represent the folder.
    viewType?: string;
}
// tslint:disable-next-line: interface-name
export interface Image {
    // Optional. Height of the image, in pixels. Read-only.
    height?: number;
    // Optional. Width of the image, in pixels. Read-only.
    width?: number;
}
export interface Package {
    /**
     * A string indicating the type of package. While oneNote is the only currently defined value, you should expect other
     * package types to be returned and handle them accordingly.
     */
    type?: string;
}
export interface Photo {
    // Camera manufacturer. Read-only.
    cameraMake?: string;
    // Camera model. Read-only.
    cameraModel?: string;
    // The denominator for the exposure time fraction from the camera. Read-only.
    exposureDenominator?: number;
    // The numerator for the exposure time fraction from the camera. Read-only.
    exposureNumerator?: number;
    // The F-stop value from the camera. Read-only.
    fNumber?: number;
    // The focal length from the camera. Read-only.
    focalLength?: number;
    // The ISO value from the camera. Read-only.
    iso?: number;
    // Represents the date and time the photo was taken. Read-only.
    takenDateTime?: string;
}
export interface PublicationFacet {
    // The state of publication for this document. Either published or checkout. Read-only.
    level?: string;
    // The unique identifier for the version that is visible to the current caller. Read-only.
    versionId?: string;
}
export interface RemoteItem {
    // Identity of the user, device, and application which created the item. Read-only.
    createdBy?: IdentitySet;
    // Date and time of item creation. Read-only.
    createdDateTime?: string;
    // Indicates that the remote item is a file. Read-only.
    file?: File;
    // Information about the remote item from the local file system. Read-only.
    fileSystemInfo?: FileSystemInfo;
    // Indicates that the remote item is a folder. Read-only.
    folder?: Folder;
    // Unique identifier for the remote item in its drive. Read-only.
    id?: string;
    // Identity of the user, device, and application which last modified the item. Read-only.
    lastModifiedBy?: IdentitySet;
    // Date and time the item was last modified. Read-only.
    lastModifiedDateTime?: string;
    // Optional. Filename of the remote item. Read-only.
    name?: string;
    /**
     * If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some
     * contexts and folders in others. Read-only.
     */
    package?: Package;
    // Properties of the parent of the remote item. Read-only.
    parentReference?: ItemReference;
    /**
     * Indicates that the item has been shared with others and provides information about the shared state of the item.
     * Read-only.
     */
    shared?: Shared;
    /**
     * Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers.
     * Read-only.
     */
    sharepointIds?: SharepointIds;
    // Size of the remote item. Read-only.
    size?: number;
    // If the current item is also available as a special folder, this facet is returned. Read-only.
    specialFolder?: SpecialFolder;
    // DAV compatible URL for the item.
    webDavUrl?: string;
    // URL that displays the resource in the browser. Read-only.
    webUrl?: string;
}
// tslint:disable-next-line: interface-name
export interface ItemReference {
    // Unique identifier of the drive instance that contains the item. Read-only.
    driveId?: string;
    // Identifies the type of drive. See [drive][] resource for values.
    driveType?: string;
    // Unique identifier of the item in the drive. Read-only.
    id?: string;
    // The name of the item being referenced. Read-only.
    name?: string;
    // Path that can be used to navigate to the item. Read-only.
    path?: string;
    // A unique identifier for a shared resource that can be accessed via the [Shares][] API.
    shareId?: string;
    // Returns identifiers useful for SharePoint REST compatibility. Read-only.
    sharepointIds?: SharepointIds;
    siteId?: string;
}
export interface Shared {
    // The identity of the owner of the shared item. Read-only.
    owner?: IdentitySet;
    // Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only.
    scope?: string;
    // The identity of the user who shared the item. Read-only.
    sharedBy?: IdentitySet;
    // The UTC date and time when the item was shared. Read-only.
    sharedDateTime?: string;
}
export interface SpecialFolder {
    // The unique identifier for this item in the /drive/special collection
    name?: string;
}
export interface SearchResult {
    /**
     * A callback URL that can be used to record telemetry information. The application should issue a GET on this URL if the
     * user interacts with this item to improve the quality of results.
     */
    onClickTelemetryUrl?: string;
}
export interface Video {
    // Number of audio bits per sample.
    audioBitsPerSample?: number;
    // Number of audio channels.
    audioChannels?: number;
    // Name of the audio format (AAC, MP3, etc.).
    audioFormat?: string;
    // Number of audio samples per second.
    audioSamplesPerSecond?: number;
    // Bit rate of the video in bits per second.
    bitrate?: number;
    // Duration of the file in milliseconds.
    duration?: number;
    // 'Four character code' name of the video format.
    fourCC?: string;
    // Frame rate of the video.
    frameRate?: number;
    // Height of the video, in pixels.
    height?: number;
    // Width of the video, in pixels.
    width?: number;
}
export interface WorkbookSessionInfo {
    // Id of the workbook session.
    id?: string;
    // true for persistent session. false for non-persistent session (view mode)
    persistChanges?: boolean;
}
export interface WorkbookFilterCriteria {
    color?: string;
    criterion1?: string;
    criterion2?: string;
    dynamicCriteria?: string;
    filterOn?: string;
    icon?: WorkbookIcon;
    operator?: string;
    values?: any;
}
export interface WorkbookIcon {
    // Represents the index of the icon in the given set.
    index?: number;
    /**
     * Represents the set that the icon is part of. The possible values are: Invalid, ThreeArrows, ThreeArrowsGray,
     * ThreeFlags, ThreeTrafficLights1, ThreeTrafficLights2, ThreeSigns, ThreeSymbols, ThreeSymbols2, FourArrows,
     * FourArrowsGray, FourRedToBlack, FourRating, FourTrafficLights, FiveArrows, FiveArrowsGray, FiveRating, FiveQuarters,
     * ThreeStars, ThreeTriangles, FiveBoxes.
     */
    set?: string;
}
export interface WorkbookSortField {
    // Represents whether the sorting is done in an ascending fashion.
    ascending?: boolean;
    // Represents the color that is the target of the condition if the sorting is on font or cell color.
    color?: string;
    // Represents additional sorting options for this field. The possible values are: Normal, TextAsNumber.
    dataOption?: string;
    // Represents the icon that is the target of the condition if the sorting is on the cell's icon.
    icon?: WorkbookIcon;
    /**
     * Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset
     * from the first column (or row).
     */
    key?: number;
    // Represents the type of sorting of this condition. The possible values are: Value, CellColor, FontColor, Icon.
    sortOn?: string;
}
export interface WorkbookWorksheetProtectionOptions {
    // Represents the worksheet protection option of allowing using auto filter feature.
    allowAutoFilter?: boolean;
    // Represents the worksheet protection option of allowing deleting columns.
    allowDeleteColumns?: boolean;
    // Represents the worksheet protection option of allowing deleting rows.
    allowDeleteRows?: boolean;
    // Represents the worksheet protection option of allowing formatting cells.
    allowFormatCells?: boolean;
    // Represents the worksheet protection option of allowing formatting columns.
    allowFormatColumns?: boolean;
    // Represents the worksheet protection option of allowing formatting rows.
    allowFormatRows?: boolean;
    // Represents the worksheet protection option of allowing inserting columns.
    allowInsertColumns?: boolean;
    // Represents the worksheet protection option of allowing inserting hyperlinks.
    allowInsertHyperlinks?: boolean;
    // Represents the worksheet protection option of allowing inserting rows.
    allowInsertRows?: boolean;
    // Represents the worksheet protection option of allowing using pivot table feature.
    allowPivotTables?: boolean;
    // Represents the worksheet protection option of allowing using sort feature.
    allowSort?: boolean;
}
export interface WorkbookFilterDatetime {
    date?: string;
    specificity?: string;
}
export interface WorkbookRangeReference {
    address?: string;
}
export interface AttendeeBase extends Recipient {
    /**
     * The type of attendee. The possible values are: required, optional, resource. Currently if the attendee is a person,
     * findMeetingTimes always considers the person is of the Required type.
     */
    type?: AttendeeType;
}
export interface LocationConstraint {
    // Constraint information for one or more locations that the client requests for the meeting.
    locations?: LocationConstraintItem[];
    /**
     * The client requests the service to include in the response a meeting location for the meeting. If this is true and all
     * the resources are busy, findMeetingTimes will not return any meeting time suggestions. If this is false and all the
     * resources are busy, findMeetingTimes would still look for meeting times without locations.
     */
    isRequired?: boolean;
    // The client requests the service to suggest one or more meeting locations.
    suggestLocation?: boolean;
}
export interface Location {
    // The name associated with the location.
    displayName?: string;
    // Optional email address of the location.
    locationEmailAddress?: string;
    // The street address of the location.
    address?: PhysicalAddress;
    // Optional URI representing the location.
    locationUri?: string;
    // The geographic coordinates and elevation of the location.
    coordinates?: OutlookGeoCoordinates;
    /**
     * The type of location. The possible values are: default, conferenceRoom, homeAddress, businessAddress,geoCoordinates,
     * streetAddress, hotel, restaurant, localBusiness, postalAddress. Read-only.
     */
    locationType?: LocationType;
    // For internal use only.
    uniqueId?: string;
    // For internal use only.
    uniqueIdType?: LocationUniqueIdType;
}
export interface OutlookGeoCoordinates {
    // The latitude of the location.
    latitude?: number;
    // The longitude of the location.
    longitude?: number;
    /**
     * The accuracy of the latitude and longitude. As an example, the accuracy can be measured in meters, such as the latitude
     * and longitude are accurate to within 50 meters.
     */
    accuracy?: number;
    // The altitude of the location.
    altitude?: number;
    // The accuracy of the altitude.
    altitudeAccuracy?: number;
}
export interface LocationConstraintItem extends Location {
    /**
     * If set to true and the specified resource is busy, findMeetingTimes looks for another resource that is free. If set to
     * false and the specified resource is busy, findMeetingTimes returns the resource best ranked in the user's cache without
     * checking if it's free. Default is true.
     */
    resolveAvailability?: boolean;
}
export interface MeetingTimeSuggestionsResult {
    // An array of meeting suggestions.
    meetingTimeSuggestions?: MeetingTimeSuggestion[];
    /**
     * A reason for not returning any meeting suggestions. The possible values are: attendeesUnavailable,
     * attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string
     * if the meetingTimeSuggestions property does include any meeting suggestions.
     */
    emptySuggestionsReason?: string;
}
export interface MeetingTimeSuggestion {
    // A percentage that represents the likelhood of all the attendees attending.
    confidence?: number;
    /**
     * Order of meeting time suggestions sorted by their computed confidence value from high to low, then by chronology if
     * there are suggestions with the same confidence.
     */
    order?: number;
    /**
     * Availability of the meeting organizer for this meeting suggestion. The possible values are: free, tentative, busy, oof,
     * workingElsewhere, unknown.
     */
    organizerAvailability?: FreeBusyStatus;
    // An array that shows the availability status of each attendee for this meeting suggestion.
    attendeeAvailability?: AttendeeAvailability[];
    // An array that specifies the name and geographic location of each meeting location for this meeting suggestion.
    locations?: Location[];
    // Reason for suggesting the meeting time.
    suggestionReason?: string;
    // A time period suggested for the meeting.
    meetingTimeSlot?: TimeSlot;
}
export interface AttendeeAvailability {
    /**
     * The email address and type of attendee - whether it's a person or a resource, and whether required or optional if it's
     * a person.
     */
    attendee?: AttendeeBase;
    /**
     * The availability status of the attendee. The possible values are: free, tentative, busy, oof, workingElsewhere,
     * unknown.
     */
    availability?: FreeBusyStatus;
}
export interface TimeSlot {
    // The date, time, and time zone that a period ends.
    start?: DateTimeTimeZone;
    // The date, time, and time zone that a period begins.
    end?: DateTimeTimeZone;
}
export interface TimeConstraint {
    // The nature of the activity, optional. The possible values are: work, personal, unrestricted, or unknown.
    activityDomain?: ActivityDomain;
    timeSlots?: TimeSlot[];
}
export interface CustomTimeZone extends TimeZoneBase {
    /**
     * The time offset of the time zone from Coordinated Universal Time (UTC). This value is in minutes. Time zones that are
     * ahead of UTC have a positive offset; time zones that are behind UTC have a negative offset.
     */
    bias?: number;
    // Specifies when the time zone switches from daylight saving time to standard time.
    standardOffset?: StandardTimeZoneOffset;
    // Specifies when the time zone switches from standard time to daylight saving time.
    daylightOffset?: DaylightTimeZoneOffset;
}
export interface StandardTimeZoneOffset {
    // Represents the time of day when the transition from daylight saving time to standard time occurs.
    time?: string;
    // Represents the nth occurrence of the day of week that the transition from daylight saving time to standard time occurs.
    dayOccurrence?: number;
    // Represents the day of the week when the transition from daylight saving time to standard time.
    dayOfWeek?: DayOfWeek;
    // Represents the month of the year when the transition from daylight saving time to standard time occurs.
    month?: number;
    /**
     * Represents how frequently in terms of years the change from daylight saving time to standard time occurs. For example,
     * a value of 0 means every year.
     */
    year?: number;
}
export interface DaylightTimeZoneOffset extends StandardTimeZoneOffset {
    // The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes.
    daylightBias?: number;
}
export interface Reminder {
    // The unique ID of the event. Read only.
    eventId?: string;
    // The date, time, and time zone that the event starts.
    eventStartTime?: DateTimeTimeZone;
    // The date, time and time zone that the event ends.
    eventEndTime?: DateTimeTimeZone;
    /**
     * Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows
     * Exchange to apply changes to the correct version of the object.
     */
    changeKey?: string;
    // The text of the event's subject line.
    eventSubject?: string;
    // The location of the event.
    eventLocation?: Location;
    /**
     * The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox
     * via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL can be
     * accessed from within an iFrame.
     */
    eventWebLink?: string;
    // The date, time, and time zone that the reminder is set to occur.
    reminderFireTime?: DateTimeTimeZone;
}
export interface MailTips {
    // The email address of the recipient to get mailtips for.
    emailAddress?: EmailAddress;
    // Mail tips for automatic reply if it has been set up by the recipient.
    automaticReplies?: AutomaticRepliesMailTips;
    // The mailbox full status of the recipient.
    mailboxFull?: boolean;
    // A custom mail tip that can be set on the recipient's mailbox.
    customMailTip?: string;
    // The number of external members if the recipient is a distribution list.
    externalMemberCount?: number;
    // The number of members if the recipient is a distribution list.
    totalMemberCount?: number;
    /**
     * Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders,
     * rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders.
     */
    deliveryRestricted?: boolean;
    /**
     * Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list
     * and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a
     * recipient requires approval of the recipient's manager.
     */
    isModerated?: boolean;
    /**
     * The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For
     * example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator
     * wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their
     * message may leave the organization, helping them make the correct decisions about wording, tone and content.
     */
    recipientScope?: RecipientScopeType;
    // Recipients suggested based on previous contexts where they appear in the same message.
    recipientSuggestions?: Recipient[];
    // The maximum message size that has been configured for the recipient's organization or mailbox.
    maxMessageSize?: number;
    // Errors that occur during the getMailTips action.
    error?: MailTipsError;
}
export interface AutomaticRepliesMailTips {
    // The automatic reply message.
    message?: string;
    // The language that the automatic reply message is in.
    messageLanguage?: LocaleInfo;
    // The date and time that automatic replies are set to begin.
    scheduledStartTime?: DateTimeTimeZone;
    // The date and time that automatic replies are set to end.
    scheduledEndTime?: DateTimeTimeZone;
}
export interface MailTipsError {
    // The error message.
    message?: string;
    // The error code.
    code?: string;
}
export interface ConvertIdResult {
    // The identifier that was converted. This value is the original, un-converted identifier.
    sourceId?: string;
    // The converted identifier. This value is not present if the conversion failed.
    targetId?: string;
    /**
     * An error object indicating the reason for the conversion failure. This value is not present if the conversion
     * succeeded.
     */
    errorDetails?: GenericError;
}
export interface GenericError {
    // The error message.
    message?: string;
    // The error code.
    code?: string;
}
export interface TimeZoneInformation {
    // An identifier for the time zone.
    alias?: string;
    // A display string that represents the time zone.
    displayName?: string;
}
// tslint:disable-next-line: interface-name
export interface InternetMessageHeader {
    // Represents the key in a key-value pair.
    name?: string;
    // The value in a key-value pair.
    value?: string;
}
// tslint:disable-next-line: interface-name
export interface ItemBody {
    // The type of the content. Possible values are text and HTML.
    contentType?: BodyType;
    // The content of the item.
    content?: string;
}
export interface FollowupFlag {
    // The date and time that the follow-up was finished.
    completedDateTime?: DateTimeTimeZone;
    // The date and time that the follow-up is to be finished.
    dueDateTime?: DateTimeTimeZone;
    // The date and time that the follow-up is to begin.
    startDateTime?: DateTimeTimeZone;
    // The status for follow-up for an item. Possible values are notFlagged, complete, and flagged.
    flagStatus?: FollowupFlagStatus;
}
export interface ScheduleInformation {
    // An SMTP address of the user, distribution list, or resource, identifying an instance of scheduleInformation.
    scheduleId?: string;
    // Contains the items that describe the availability of the user or resource.
    scheduleItems?: ScheduleItem[];
    /**
     * Represents a merged view of availability of all the items in scheduleItems. The view consists of time slots.
     * Availability during each time slot is indicated with: 0= free, 1= tentative, 2= busy, 3= out of office, 4= working
     * elsewhere.
     */
    availabilityView?: string;
    // Error information from attempting to get the availability of the user, distribution list, or resource.
    error?: FreeBusyError;
    /**
     * The days of the week and hours in a specific time zone that the user works. These are set as part of the user's
     * mailboxSettings.
     */
    workingHours?: WorkingHours;
}
export interface ScheduleItem {
    // The date, time, and time zone that the corresponding event starts.
    start?: DateTimeTimeZone;
    // The date, time, and time zone that the corresponding event ends.
    end?: DateTimeTimeZone;
    // The sensitivity of the corresponding event. True if the event is marked private, false otherwise. Optional.
    isPrivate?: boolean;
    /**
     * The availability status of the user or resource during the corresponding event. The possible values are: free,
     * tentative, busy, oof, workingElsewhere, unknown.
     */
    status?: FreeBusyStatus;
    // The corresponding event's subject line. Optional.
    subject?: string;
    // The location where the corresponding event is held or attended from. Optional.
    location?: string;
}
export interface FreeBusyError {
    // Describes the error.
    message?: string;
    // The response code from querying for the availability of the user, distribution list, or resource.
    responseCode?: string;
}
export interface ResponseStatus {
    // The response type. The possible values are: None, Organizer, TentativelyAccepted, Accepted, Declined, NotResponded.
    response?: ResponseType;
    /**
     * The date and time that the response was returned. It uses ISO 8601 format and is always in UTC time. For example,
     * midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    time?: string;
}
export interface PatternedRecurrence {
    // The frequency of an event.
    pattern?: RecurrencePattern;
    // The duration of an event.
    range?: RecurrenceRange;
}
export interface RecurrencePattern {
    // The recurrence pattern type: daily, weekly, absoluteMonthly, relativeMonthly, absoluteYearly, relativeYearly. Required.
    type?: RecurrencePatternType;
    /**
     * The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type.
     * Required.
     */
    interval?: number;
    // The month in which the event occurs. This is a number from 1 to 12.
    month?: number;
    // The day of the month on which the event occurs. Required if type is absoluteMonthly or absoluteYearly.
    dayOfMonth?: number;
    /**
     * A collection of the days of the week on which the event occurs. The possible values are: sunday, monday, tuesday,
     * wednesday, thursday, friday, saturday. If type is relativeMonthly or relativeYearly, and daysOfWeek specifies more than
     * one day, the event falls on the first day that satisfies the pattern. Required if type is weekly, relativeMonthly, or
     * relativeYearly.
     */
    daysOfWeek?: DayOfWeek[];
    /**
     * The first day of the week. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday.
     * Default is sunday. Required if type is weekly.
     */
    firstDayOfWeek?: DayOfWeek;
    /**
     * Specifies on which instance of the allowed days specified in daysOfsWeek the event occurs, counted from the first
     * instance in the month. The possible values are: first, second, third, fourth, last. Default is first. Optional and used
     * if type is relativeMonthly or relativeYearly.
     */
    index?: WeekIndex;
}
export interface RecurrenceRange {
    // The recurrence range. The possible values are: endDate, noEnd, numbered. Required.
    type?: RecurrenceRangeType;
    /**
     * The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later,
     * depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event.
     * Required.
     */
    startDate?: string;
    /**
     * The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence
     * of the meeting may not be this date. Required if type is endDate.
     */
    endDate?: string;
    // Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used.
    recurrenceTimeZone?: string;
    // The number of times to repeat the event. Required and must be positive if type is numbered.
    numberOfOccurrences?: number;
}
export interface Attendee extends AttendeeBase {
    // The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent.
    status?: ResponseStatus;
}
export interface ScoredEmailAddress {
    // The email address.
    address?: string;
    /**
     * The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned
     * results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s
     * communication and collaboration patterns and business relationships.
     */
    relevanceScore?: number;
    selectionLikelihood?: SelectionLikelihoodInfo;
    itemId?: string;
}
export interface Website {
    // The possible values are: other, home, work, blog, profile.
    type?: WebsiteType;
    // The URL of the website.
    address?: string;
    // The display name of the web site.
    displayName?: string;
}
export interface PersonType {
    // The type of data source, such as Person.
    class?: string;
    // The secondary type of data source, such as OrganizationUser.
    subclass?: string;
}
export interface MessageRulePredicates {
    /**
     * Represents the categories that an incoming message should be labeled with in order for the condition or exception to
     * apply.
     */
    categories?: string[];
    /**
     * Represents the strings that appear in the subject of an incoming message in order for the condition or exception to
     * apply.
     */
    subjectContains?: string[];
    /**
     * Represents the strings that should appear in the body of an incoming message in order for the condition or exception to
     * apply.
     */
    bodyContains?: string[];
    /**
     * Represents the strings that should appear in the body or subject of an incoming message in order for the condition or
     * exception to apply.
     */
    bodyOrSubjectContains?: string[];
    /**
     * Represents the strings that appear in the from property of an incoming message in order for the condition or exception
     * to apply.
     */
    senderContains?: string[];
    /**
     * Represents the strings that appear in either the toRecipients or ccRecipients properties of an incoming message in
     * order for the condition or exception to apply.
     */
    recipientContains?: string[];
    /**
     * Represents the strings that appear in the headers of an incoming message in order for the condition or exception to
     * apply.
     */
    headerContains?: string[];
    /**
     * Represents the flag-for-action value that appears on an incoming message in order for the condition or exception to
     * apply. The possible values are: any, call, doNotForward, followUp, fyi, forward, noResponseNecessary, read, reply,
     * replyToAll, review.
     */
    messageActionFlag?: MessageActionFlag;
    /**
     * The importance that is stamped on an incoming message in order for the condition or exception to apply: low, normal,
     * high.
     */
    importance?: Importance;
    /**
     * Represents the sensitivity level that must be stamped on an incoming message in order for the condition or exception to
     * apply. The possible values are: normal, personal, private, confidential.
     */
    sensitivity?: Sensitivity;
    // Represents the specific sender email addresses of an incoming message in order for the condition or exception to apply.
    fromAddresses?: Recipient[];
    /**
     * Represents the email addresses that an incoming message must have been sent to in order for the condition or exception
     * to apply.
     */
    sentToAddresses?: Recipient[];
    /**
     * Indicates whether the owner of the mailbox must be in the toRecipients property of an incoming message in order for the
     * condition or exception to apply.
     */
    sentToMe?: boolean;
    /**
     * Indicates whether the owner of the mailbox must be the only recipient in an incoming message in order for the condition
     * or exception to apply.
     */
    sentOnlyToMe?: boolean;
    /**
     * Indicates whether the owner of the mailbox must be in the ccRecipients property of an incoming message in order for the
     * condition or exception to apply.
     */
    sentCcMe?: boolean;
    /**
     * Indicates whether the owner of the mailbox must be in either a toRecipients or ccRecipients property of an incoming
     * message in order for the condition or exception to apply.
     */
    sentToOrCcMe?: boolean;
    /**
     * Indicates whether the owner of the mailbox must not be a recipient of an incoming message in order for the condition or
     * exception to apply.
     */
    notSentToMe?: boolean;
    // Indicates whether an incoming message must have attachments in order for the condition or exception to apply.
    hasAttachments?: boolean;
    // Indicates whether an incoming message must be an approval request in order for the condition or exception to apply.
    isApprovalRequest?: boolean;
    // Indicates whether an incoming message must be automatically forwarded in order for the condition or exception to apply.
    isAutomaticForward?: boolean;
    // Indicates whether an incoming message must be an auto reply in order for the condition or exception to apply.
    isAutomaticReply?: boolean;
    // Indicates whether an incoming message must be encrypted in order for the condition or exception to apply.
    isEncrypted?: boolean;
    // Indicates whether an incoming message must be a meeting request in order for the condition or exception to apply.
    isMeetingRequest?: boolean;
    // Indicates whether an incoming message must be a meeting response in order for the condition or exception to apply.
    isMeetingResponse?: boolean;
    // Indicates whether an incoming message must be a non-delivery report in order for the condition or exception to apply.
    isNonDeliveryReport?: boolean;
    /**
     * Indicates whether an incoming message must be permission controlled (RMS-protected) in order for the condition or
     * exception to apply.
     */
    isPermissionControlled?: boolean;
    // Indicates whether an incoming message must be a read receipt in order for the condition or exception to apply.
    isReadReceipt?: boolean;
    // Indicates whether an incoming message must be S/MIME-signed in order for the condition or exception to apply.
    isSigned?: boolean;
    // Indicates whether an incoming message must be a voice mail in order for the condition or exception to apply.
    isVoicemail?: boolean;
    /**
     * Represents the minimum and maximum sizes (in kilobytes) that an incoming message must fall in between in order for the
     * condition or exception to apply.
     */
    withinSizeRange?: SizeRange;
}
export interface SizeRange {
    // The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    minimumSize?: number;
    // The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    maximumSize?: number;
}
export interface MessageRuleActions {
    // The ID of the folder that a message will be moved to.
    moveToFolder?: string;
    // The ID of a folder that a message is to be copied to.
    copyToFolder?: string;
    // Indicates whether a message should be moved to the Deleted Items folder.
    delete?: boolean;
    // Indicates whether a message should be permanently deleted and not saved to the Deleted Items folder.
    permanentDelete?: boolean;
    // Indicates whether a message should be marked as read.
    markAsRead?: boolean;
    // Sets the importance of the message, which can be: low, normal, high.
    markImportance?: Importance;
    // The email addresses of the recipients to which a message should be forwarded.
    forwardTo?: Recipient[];
    // The email addresses of the recipients to which a message should be forwarded as an attachment.
    forwardAsAttachmentTo?: Recipient[];
    // The email addresses to which a message should be redirected.
    redirectTo?: Recipient[];
    // A list of categories to be assigned to a message.
    assignCategories?: string[];
    // Indicates whether subsequent rules should be evaluated.
    stopProcessingRules?: boolean;
}
// tslint:disable-next-line: no-empty-interface
export interface BooleanColumn {}
export interface CalculatedColumn {
    // For dateTime output types, the format of the value. Must be one of dateOnly or dateTime.
    format?: string;
    // The formula used to compute the value for this column.
    formula?: string;
    // The output type used to format values in this column. Must be one of boolean, currency, dateTime, number, or text.
    outputType?: string;
}
export interface ChoiceColumn {
    // If true, allows custom values that aren't in the configured choices.
    allowTextEntry?: boolean;
    // The list of values available for this column.
    choices?: string[];
    // How the choices are to be presented in the UX. Must be one of checkBoxes, dropDownMenu, or radioButtons
    displayAs?: string;
}
export interface CurrencyColumn {
    // Specifies the locale from which to infer the currency symbol.
    locale?: string;
}
export interface DateTimeColumn {
    /**
     * How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details.
     * If unspecified, treated as default.
     */
    displayAs?: string;
    // Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime
    format?: string;
}
export interface DefaultColumnValue {
    // The formula used to compute the default value for this column.
    formula?: string;
    // The direct value to use as the default value for this column.
    value?: string;
}
export interface LookupColumn {
    // Indicates whether multiple values can be selected from the source.
    allowMultipleValues?: boolean;
    // Indicates whether values in the column should be able to exceed the standard limit of 255 characters.
    allowUnlimitedLength?: boolean;
    // The name of the lookup source column.
    columnName?: string;
    // The unique identifier of the lookup source list.
    listId?: string;
    /**
     * If specified, this column is a secondary lookup, pulling an additional field from the list item looked up by the
     * primary lookup. Use the list item looked up by the primary as the source for the column named here.
     */
    primaryLookupColumnId?: string;
}
export interface NumberColumn {
    // How many decimal places to display. See below for information about the possible values.
    decimalPlaces?: string;
    // How the value should be presented in the UX. Must be one of number or percentage. If unspecified, treated as number.
    displayAs?: string;
    // The maximum permitted value.
    maximum?: number;
    // The minimum permitted value.
    minimum?: number;
}
export interface PersonOrGroupColumn {
    // Indicates whether multiple values can be selected from the source.
    allowMultipleSelection?: boolean;
    // Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly.
    chooseFromType?: string;
    // How to display the information about the person or group chosen. See below.
    displayAs?: string;
}
export interface TextColumn {
    // Whether to allow multiple lines of text.
    allowMultipleLines?: boolean;
    // Whether updates to this column should replace existing text, or append to it.
    appendChangesToExistingText?: boolean;
    // The size of the text box.
    linesForEditing?: number;
    // The maximum number of characters for the value.
    maxLength?: number;
    // The type of text being stored. Must be one of plain or richText
    textType?: string;
}
export interface ContentTypeOrder {
    // Whether this is the default Content Type
    default?: boolean;
    // Specifies the position in which the Content Type appears in the selection UI.
    position?: number;
}
// tslint:disable-next-line: no-empty-interface
export interface AccessAction {}
// tslint:disable-next-line: interface-name
export interface ItemActionStat {
    // The number of times the action took place. Read-only.
    actionCount?: number;
    // The number of distinct actors that performed the action. Read-only.
    actorCount?: number;
}
// tslint:disable-next-line: interface-name
export interface IncompleteData {
    // The service does not have source data before the specified time.
    missingDataBeforeDateTime?: string;
    // Some data was not recorded due to excessive activity.
    wasThrottled?: boolean;
}
export interface ContentTypeInfo {
    // The id of the content type.
    id?: string;
}
export interface SharingInvitation {
    // The email address provided for the recipient of the sharing invitation. Read-only.
    email?: string;
    /**
     * Provides information about who sent the invitation that created this permission, if that information is available.
     * Read-only.
     */
    invitedBy?: IdentitySet;
    redeemedBy?: string;
    // If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only.
    signInRequired?: boolean;
}
export interface SharingLink {
    // The app the link is associated with.
    application?: Identity;
    /**
     * The scope of the link represented by this permission. Value anonymous indicates the link is usable by anyone,
     * organization indicates the link is only usable for users signed into the same tenant.
     */
    scope?: string;
    // The type of the link created.
    type?: string;
    // A URL that opens the item in the browser on the OneDrive website.
    webUrl?: string;
}
export interface Thumbnail {
    // The content stream for the thumbnail.
    content?: any;
    // The height of the thumbnail, in pixels.
    height?: number;
    /**
     * The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is
     * requested.
     */
    sourceItemId?: string;
    // The URL used to fetch the thumbnail content.
    url?: string;
    // The width of the thumbnail, in pixels.
    width?: number;
}
export interface DriveItemUploadableProperties {
    // Provides a user-visible description of the item. Read-write. Only on OneDrive Personal
    description?: string;
    // File system information on client. Read-write.
    fileSystemInfo?: FileSystemInfo;
    // The name of the item (filename and extension). Read-write.
    name?: string;
}
export interface DriveRecipient {
    // The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).
    alias?: string;
    // The email address for the recipient, if the recipient has an associated email address.
    email?: string;
    // The unique identifier for the recipient in the directory.
    objectId?: string;
}
// tslint:disable-next-line: interface-name
export interface ItemPreviewInfo {
    getUrl?: string;
    postParameters?: string;
    postUrl?: string;
}
export interface UploadSession {
    /**
     * The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration
     * time is reached.
     */
    expirationDateTime?: string;
    /**
     * A collection of byte ranges that the server is missing for the file. These ranges are zero indexed and of the format
     * 'start-end' (e.g. '0-26' to indicate the first 27 bytes of the file).
     */
    nextExpectedRanges?: string[];
    // The URL endpoint that accepts PUT requests for byte ranges of the file.
    uploadUrl?: string;
}
export interface ExtensionSchemaProperty {
    // The name of the strongly-typed property defined as part of a schema extension.
    name?: string;
    /**
     * The type of the property that is defined as part of a schema extension. Allowed values are Binary, Boolean, DateTime,
     * Integer or String. See the table below for more details.
     */
    type?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface DeviceAndAppManagementAssignmentTarget {}
// tslint:disable-next-line: no-empty-interface
export interface MobileAppAssignmentSettings {}
export interface MimeContent {
    // Indicates the content mime type.
    type?: string;
    // The byte array that contains the actual content.
    value?: number;
}
export interface FileEncryptionInfo {
    // The key used to encrypt the file content.
    encryptionKey?: number;
    // The initialization vector used for the encryption algorithm.
    initializationVector?: number;
    // The hash of the encrypted file content + IV (content hash).
    mac?: number;
    // The key used to get mac.
    macKey?: number;
    // The profile identifier.
    profileIdentifier?: string;
    // The file digest prior to encryption.
    fileDigest?: number;
    // The file digest algorithm.
    fileDigestAlgorithm?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface AllLicensedUsersAssignmentTarget extends DeviceAndAppManagementAssignmentTarget {}
export interface GroupAssignmentTarget extends DeviceAndAppManagementAssignmentTarget {
    // The group Id that is the target of the assignment.
    groupId?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface ExclusionGroupAssignmentTarget extends GroupAssignmentTarget {}
// tslint:disable-next-line: no-empty-interface
export interface AllDevicesAssignmentTarget extends DeviceAndAppManagementAssignmentTarget {}
// tslint:disable-next-line: interface-name
export interface IosLobAppAssignmentSettings extends MobileAppAssignmentSettings {
    // The VPN Configuration Id to apply for this app.
    vpnConfigurationId?: string;
}
// tslint:disable-next-line: interface-name
export interface IosStoreAppAssignmentSettings extends MobileAppAssignmentSettings {
    // The VPN Configuration Id to apply for this app.
    vpnConfigurationId?: string;
}
// tslint:disable-next-line: interface-name
export interface IosVppAppAssignmentSettings extends MobileAppAssignmentSettings {
    // Whether or not to use device licensing.
    useDeviceLicensing?: boolean;
    // The VPN Configuration Id to apply for this app.
    vpnConfigurationId?: string;
}
export interface MicrosoftStoreForBusinessAppAssignmentSettings extends MobileAppAssignmentSettings {
    // Whether or not to use device execution context for Microsoft Store for Business mobile app.
    useDeviceContext?: boolean;
}
export interface AndroidMinimumOperatingSystem {
    // Version 4.0 or later.
    v4_0?: boolean;
    // Version 4.0.3 or later.
    v4_0_3?: boolean;
    // Version 4.1 or later.
    v4_1?: boolean;
    // Version 4.2 or later.
    v4_2?: boolean;
    // Version 4.3 or later.
    v4_3?: boolean;
    // Version 4.4 or later.
    v4_4?: boolean;
    // Version 5.0 or later.
    v5_0?: boolean;
    // Version 5.1 or later.
    v5_1?: boolean;
}
// tslint:disable-next-line: interface-name
export interface IosDeviceType {
    // Whether the app should run on iPads.
    iPad?: boolean;
    // Whether the app should run on iPhones and iPods.
    iPhoneAndIPod?: boolean;
}
// tslint:disable-next-line: interface-name
export interface IosMinimumOperatingSystem {
    // Version 8.0 or later.
    v8_0?: boolean;
    // Version 9.0 or later.
    v9_0?: boolean;
    // Version 10.0 or later.
    v10_0?: boolean;
    // Version 11.0 or later.
    v11_0?: boolean;
    // Version 12.0 or later.
    v12_0?: boolean;
    // Version 13.0 or later.
    v13_0?: boolean;
}
export interface WindowsMinimumOperatingSystem {
    // Windows version 8.0 or later.
    v8_0?: boolean;
    // Windows version 8.1 or later.
    v8_1?: boolean;
    // Windows version 10.0 or later.
    v10_0?: boolean;
}
export interface VppLicensingType {
    // Whether the program supports the user licensing type.
    supportsUserLicensing?: boolean;
    // Whether the program supports the device licensing type.
    supportsDeviceLicensing?: boolean;
}
export interface AppConfigurationSettingItem {
    // app configuration key.
    appConfigKey?: string;
    // app configuration key type. Possible values are: stringType, integerType, realType, booleanType, tokenType.
    appConfigKeyType?: MdmAppConfigKeyType;
    // app configuration key value.
    appConfigKeyValue?: string;
}
export interface DeviceManagementSettings {
    // The number of days a device is allowed to go without checking in to remain compliant. Valid values 0 to 120
    deviceComplianceCheckinThresholdDays?: number;
    // Is feature enabled or not for scheduled action for rule.
    isScheduledActionEnabled?: boolean;
    // Device should be noncompliant when there is no compliance policy targeted when this is true
    secureByDefault?: boolean;
}
// tslint:disable-next-line: interface-name
export interface IntuneBrand {
    // Company/organization name that is displayed to end users.
    displayName?: string;
    // Name of the person/organization responsible for IT support.
    contactITName?: string;
    // Phone number of the person/organization responsible for IT support.
    contactITPhoneNumber?: string;
    // Email address of the person/organization responsible for IT support.
    contactITEmailAddress?: string;
    // Text comments regarding the person/organization responsible for IT support.
    contactITNotes?: string;
    // URL to the company/organization’s privacy policy.
    privacyUrl?: string;
    // URL to the company/organization’s IT helpdesk site.
    onlineSupportSiteUrl?: string;
    // Display name of the company/organization’s IT helpdesk site.
    onlineSupportSiteName?: string;
    // Primary theme color used in the Company Portal applications and web portal.
    themeColor?: RgbColor;
    // Boolean that represents whether the administrator-supplied logo images are shown or not shown.
    showLogo?: boolean;
    // Logo image displayed in Company Portal apps which have a light background behind the logo.
    lightBackgroundLogo?: MimeContent;
    // Logo image displayed in Company Portal apps which have a dark background behind the logo.
    darkBackgroundLogo?: MimeContent;
    // Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
    showNameNextToLogo?: boolean;
    // Boolean that represents whether the administrator-supplied display name will be shown next to the logo image.
    showDisplayNameNextToLogo?: boolean;
}
export interface RgbColor {
    // Red value
    r?: number;
    // Green value
    g?: number;
    // Blue value
    b?: number;
}
export interface Report {
    // Not yet documented
    content?: any;
}
export interface AppListItem {
    // The application name
    name?: string;
    // The publisher of the application
    publisher?: string;
    // The Store URL of the application
    appStoreUrl?: string;
    // The application or bundle identifier of the application
    appId?: string;
}
export interface OmaSetting {
    // Display Name.
    displayName?: string;
    // Description.
    description?: string;
    // OMA.
    omaUri?: string;
}
export interface OmaSettingInteger extends OmaSetting {
    // Value.
    value?: number;
}
export interface OmaSettingFloatingPoint extends OmaSetting {
    // Value.
    value?: number;
}
export interface OmaSettingString extends OmaSetting {
    // Value.
    value?: string;
}
export interface OmaSettingDateTime extends OmaSetting {
    // Value.
    value?: string;
}
export interface OmaSettingStringXml extends OmaSetting {
    // File name associated with the Value property (.xml).
    fileName?: string;
    // Value. (UTF8 encoded byte array)
    value?: number;
}
export interface OmaSettingBoolean extends OmaSetting {
    // Value.
    value?: boolean;
}
export interface OmaSettingBase64 extends OmaSetting {
    // File name associated with the Value property (.cer
    fileName?: string;
    // Value. (Base64 encoded string)
    value?: string;
}
export interface MediaContentRatingAustralia {
    /**
     * Movies rating selected for Australia. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature,
     * agesAbove15, agesAbove18.
     */
    movieRating?: RatingAustraliaMoviesType;
    /**
     * TV rating selected for Australia. Possible values are: allAllowed, allBlocked, preschoolers, children, general,
     * parentalGuidance, mature, agesAbove15, agesAbove15AdultViolence.
     */
    tvRating?: RatingAustraliaTelevisionType;
}
export interface MediaContentRatingCanada {
    /**
     * Movies rating selected for Canada. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove14,
     * agesAbove18, restricted.
     */
    movieRating?: RatingCanadaMoviesType;
    /**
     * TV rating selected for Canada. Possible values are: allAllowed, allBlocked, children, childrenAbove8, general,
     * parentalGuidance, agesAbove14, agesAbove18.
     */
    tvRating?: RatingCanadaTelevisionType;
}
export interface MediaContentRatingFrance {
    /**
     * Movies rating selected for France. Possible values are: allAllowed, allBlocked, agesAbove10, agesAbove12, agesAbove16,
     * agesAbove18.
     */
    movieRating?: RatingFranceMoviesType;
    /**
     * TV rating selected for France. Possible values are: allAllowed, allBlocked, agesAbove10, agesAbove12, agesAbove16,
     * agesAbove18.
     */
    tvRating?: RatingFranceTelevisionType;
}
export interface MediaContentRatingGermany {
    /**
     * Movies rating selected for Germany. Possible values are: allAllowed, allBlocked, general, agesAbove6, agesAbove12,
     * agesAbove16, adults.
     */
    movieRating?: RatingGermanyMoviesType;
    /**
     * TV rating selected for Germany. Possible values are: allAllowed, allBlocked, general, agesAbove6, agesAbove12,
     * agesAbove16, adults.
     */
    tvRating?: RatingGermanyTelevisionType;
}
export interface MediaContentRatingIreland {
    /**
     * Movies rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, parentalGuidance,
     * agesAbove12, agesAbove15, agesAbove16, adults.
     */
    movieRating?: RatingIrelandMoviesType;
    /**
     * TV rating selected for Ireland. Possible values are: allAllowed, allBlocked, general, children, youngAdults,
     * parentalSupervision, mature.
     */
    tvRating?: RatingIrelandTelevisionType;
}
export interface MediaContentRatingJapan {
    /**
     * Movies rating selected for Japan. Possible values are: allAllowed, allBlocked, general, parentalGuidance, agesAbove15,
     * agesAbove18.
     */
    movieRating?: RatingJapanMoviesType;
    // TV rating selected for Japan. Possible values are: allAllowed, allBlocked, explicitAllowed.
    tvRating?: RatingJapanTelevisionType;
}
export interface MediaContentRatingNewZealand {
    /**
     * Movies rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, mature,
     * agesAbove13, agesAbove15, agesAbove16, agesAbove18, restricted, agesAbove16Restricted.
     */
    movieRating?: RatingNewZealandMoviesType;
    // TV rating selected for New Zealand. Possible values are: allAllowed, allBlocked, general, parentalGuidance, adults.
    tvRating?: RatingNewZealandTelevisionType;
}
export interface MediaContentRatingUnitedKingdom {
    /**
     * Movies rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, general, universalChildren,
     * parentalGuidance, agesAbove12Video, agesAbove12Cinema, agesAbove15, adults.
     */
    movieRating?: RatingUnitedKingdomMoviesType;
    // TV rating selected for United Kingdom. Possible values are: allAllowed, allBlocked, caution.
    tvRating?: RatingUnitedKingdomTelevisionType;
}
export interface MediaContentRatingUnitedStates {
    /**
     * Movies rating selected for United States. Possible values are: allAllowed, allBlocked, general, parentalGuidance,
     * parentalGuidance13, restricted, adults.
     */
    movieRating?: RatingUnitedStatesMoviesType;
    /**
     * TV rating selected for United States. Possible values are: allAllowed, allBlocked, childrenAll, childrenAbove7,
     * general, parentalGuidance, childrenAbove14, adults.
     */
    tvRating?: RatingUnitedStatesTelevisionType;
}
// tslint:disable-next-line: interface-name
export interface IosNetworkUsageRule {
    /**
     * Information about the managed apps that this rule is going to apply to. This collection can contain a maximum of 500
     * elements.
     */
    managedApps?: AppListItem[];
    // If set to true, corresponding managed apps will not be allowed to use cellular data when roaming.
    cellularDataBlockWhenRoaming?: boolean;
    // If set to true, corresponding managed apps will not be allowed to use cellular data at any time.
    cellularDataBlocked?: boolean;
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenItem {
    // Name of the app
    displayName?: string;
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenPage {
    // Name of the page
    displayName?: string;
    // A list of apps and folders to appear on a page. This collection can contain a maximum of 500 elements.
    icons?: IosHomeScreenItem[];
}
// tslint:disable-next-line: interface-name
export interface IosNotificationSettings {
    // Bundle id of app to which to apply these notification settings.
    bundleID?: string;
    // Application name to be associated with the bundleID.
    appName?: string;
    // Publisher to be associated with the bundleID.
    publisher?: string;
    // Indicates whether notifications are allowed for this app.
    enabled?: boolean;
    // Indicates whether notifications can be shown in notification center.
    showInNotificationCenter?: boolean;
    // Indicates whether notifications can be shown on the lock screen.
    showOnLockScreen?: boolean;
    // Indicates the type of alert for notifications for this app. Possible values are: deviceDefault, banner, modal, none.
    alertType?: IosNotificationAlertType;
    // Indicates whether badges are allowed for this app.
    badgesEnabled?: boolean;
    // Indicates whether sounds are allowed for this app.
    soundsEnabled?: boolean;
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenFolder extends IosHomeScreenItem {
    /**
     * Pages of Home Screen Layout Icons which must be Application Type. This collection can contain a maximum of 500
     * elements.
     */
    pages?: IosHomeScreenFolderPage[];
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenFolderPage {
    // Name of the folder page
    displayName?: string;
    // A list of apps to appear on a page within a folder. This collection can contain a maximum of 500 elements.
    apps?: IosHomeScreenApp[];
}
// tslint:disable-next-line: interface-name
export interface IosHomeScreenApp extends IosHomeScreenItem {
    // BundleID of app
    bundleID?: string;
}
export interface WindowsFirewallNetworkProfile {
    /**
     * Configures the host device to allow or block the firewall and advanced security enforcement for the network profile.
     * Possible values are: notConfigured, blocked, allowed.
     */
    firewallEnabled?: StateManagementSetting;
    /**
     * Prevent the server from operating in stealth mode. When StealthModeRequired and StealthModeBlocked are both true,
     * StealthModeBlocked takes priority.
     */
    stealthModeBlocked?: boolean;
    /**
     * Configures the firewall to block all incoming traffic regardless of other policy settings. When IncomingTrafficRequired
     * and IncomingTrafficBlocked are both true, IncomingTrafficBlocked takes priority.
     */
    incomingTrafficBlocked?: boolean;
    /**
     * Configures the firewall to block unicast responses to multicast broadcast traffic. When
     * UnicastResponsesToMulticastBroadcastsRequired and UnicastResponsesToMulticastBroadcastsBlocked are both true,
     * UnicastResponsesToMulticastBroadcastsBlocked takes priority.
     */
    unicastResponsesToMulticastBroadcastsBlocked?: boolean;
    /**
     * Prevents the firewall from displaying notifications when an application is blocked from listening on a port. When
     * InboundNotificationsRequired and InboundNotificationsBlocked are both true, InboundNotificationsBlocked takes priority.
     */
    inboundNotificationsBlocked?: boolean;
    /**
     * Configures the firewall to merge authorized application rules from group policy with those from local store instead of
     * ignoring the local store rules. When AuthorizedApplicationRulesFromGroupPolicyNotMerged and
     * AuthorizedApplicationRulesFromGroupPolicyMerged are both true, AuthorizedApplicationRulesFromGroupPolicyMerged takes
     * priority.
     */
    authorizedApplicationRulesFromGroupPolicyMerged?: boolean;
    /**
     * Configures the firewall to merge global port rules from group policy with those from local store instead of ignoring
     * the local store rules. When GlobalPortRulesFromGroupPolicyNotMerged and GlobalPortRulesFromGroupPolicyMerged are both
     * true, GlobalPortRulesFromGroupPolicyMerged takes priority.
     */
    globalPortRulesFromGroupPolicyMerged?: boolean;
    /**
     * Configures the firewall to merge connection security rules from group policy with those from local store instead of
     * ignoring the local store rules. When ConnectionSecurityRulesFromGroupPolicyNotMerged and
     * ConnectionSecurityRulesFromGroupPolicyMerged are both true, ConnectionSecurityRulesFromGroupPolicyMerged takes
     * priority.
     */
    connectionSecurityRulesFromGroupPolicyMerged?: boolean;
    /**
     * Configures the firewall to block all outgoing connections by default. When OutboundConnectionsRequired and
     * OutboundConnectionsBlocked are both true, OutboundConnectionsBlocked takes priority. This setting will get applied to
     * Windows releases version 1809 and above.
     */
    outboundConnectionsBlocked?: boolean;
    /**
     * Configures the firewall to block all incoming connections by default. When InboundConnectionsRequired and
     * InboundConnectionsBlocked are both true, InboundConnectionsBlocked takes priority.
     */
    inboundConnectionsBlocked?: boolean;
    /**
     * Configures the firewall to allow the host computer to respond to unsolicited network traffic of that traffic is secured
     * by IPSec even when stealthModeBlocked is set to true. When SecuredPacketExemptionBlocked and
     * SecuredPacketExemptionAllowed are both true, SecuredPacketExemptionAllowed takes priority.
     */
    securedPacketExemptionAllowed?: boolean;
    /**
     * Configures the firewall to merge Firewall Rule policies from group policy with those from local store instead of
     * ignoring the local store rules. When PolicyRulesFromGroupPolicyNotMerged and PolicyRulesFromGroupPolicyMerged are both
     * true, PolicyRulesFromGroupPolicyMerged takes priority.
     */
    policyRulesFromGroupPolicyMerged?: boolean;
}
export interface BitLockerRemovableDrivePolicy {
    // Select the encryption method for removable drives. Possible values are: aesCbc128, aesCbc256, xtsAes128, xtsAes256.
    encryptionMethod?: BitLockerEncryptionMethod;
    /**
     * Indicates whether to block write access to devices configured in another organization. If
     * requireEncryptionForWriteAccess is false, this value does not affect.
     */
    requireEncryptionForWriteAccess?: boolean;
    /**
     * This policy setting determines whether BitLocker protection is required for removable data drives to be writable on a
     * computer.
     */
    blockCrossOrganizationWriteAccess?: boolean;
}
export interface DefenderDetectedMalwareActions {
    /**
     * Indicates a Defender action to take for low severity Malware threat detected. Possible values are: deviceDefault,
     * clean, quarantine, remove, allow, userDefined, block.
     */
    lowSeverity?: DefenderThreatAction;
    /**
     * Indicates a Defender action to take for moderate severity Malware threat detected. Possible values are: deviceDefault,
     * clean, quarantine, remove, allow, userDefined, block.
     */
    moderateSeverity?: DefenderThreatAction;
    /**
     * Indicates a Defender action to take for high severity Malware threat detected. Possible values are: deviceDefault,
     * clean, quarantine, remove, allow, userDefined, block.
     */
    highSeverity?: DefenderThreatAction;
    /**
     * Indicates a Defender action to take for severe severity Malware threat detected. Possible values are: deviceDefault,
     * clean, quarantine, remove, allow, userDefined, block.
     */
    severeSeverity?: DefenderThreatAction;
}
export interface Windows10NetworkProxyServer {
    // Address to the proxy server. Specify an address in the format [':']
    address?: string;
    /**
     * Addresses that should not use the proxy server. The system will not use the proxy server for addresses beginning with
     * what is specified in this node.
     */
    exceptions?: string[];
    // Specifies whether the proxy server should be used for local (intranet) addresses.
    useForLocalAddresses?: boolean;
}
// tslint:disable-next-line: no-empty-interface
export interface EdgeSearchEngineBase {}
export interface EdgeSearchEngineCustom extends EdgeSearchEngineBase {
    /**
     * Points to a https link containing the OpenSearch xml file that contains, at minimum, the short name and the URL to the
     * search Engine.
     */
    edgeSearchEngineOpenSearchXmlUrl?: string;
}
export interface EdgeSearchEngine extends EdgeSearchEngineBase {
    /**
     * Allows IT admins to set a predefined default search engine for MDM-Controlled devices. Possible values are: default,
     * bing.
     */
    edgeSearchEngineType?: EdgeSearchEngineType;
}
export interface SharedPCAccountManagerPolicy {
    /**
     * Configures when accounts are deleted. Possible values are: immediate, diskSpaceThreshold,
     * diskSpaceThresholdOrInactiveThreshold.
     */
    accountDeletionPolicy?: SharedPCAccountDeletionPolicyType;
    /**
     * Sets the percentage of available disk space a PC should have before it stops deleting cached shared PC accounts. Only
     * applies when AccountDeletionPolicy is DiskSpaceThreshold or DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to
     * 100
     */
    cacheAccountsAboveDiskFreePercentage?: number;
    /**
     * Specifies when the accounts will start being deleted when they have not been logged on during the specified period,
     * given as number of days. Only applies when AccountDeletionPolicy is DiskSpaceThreshold or
     * DiskSpaceThresholdOrInactiveThreshold.
     */
    inactiveThresholdDays?: number;
    /**
     * Sets the percentage of disk space remaining on a PC before cached accounts will be deleted to free disk space. Accounts
     * that have been inactive the longest will be deleted first. Only applies when AccountDeletionPolicy is
     * DiskSpaceThresholdOrInactiveThreshold. Valid values 0 to 100
     */
    removeAccountsBelowDiskFreePercentage?: number;
}
// tslint:disable-next-line: no-empty-interface
export interface WindowsUpdateInstallScheduleType {}
export interface WindowsUpdateScheduledInstall extends WindowsUpdateInstallScheduleType {
    /**
     * Scheduled Install Day in week. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday,
     * thursday, friday, saturday.
     */
    scheduledInstallDay?: WeeklySchedule;
    // Scheduled Install Time during day
    scheduledInstallTime?: string;
}
export interface WindowsUpdateActiveHoursInstall extends WindowsUpdateInstallScheduleType {
    // Active Hours Start
    activeHoursStart?: string;
    // Active Hours End
    activeHoursEnd?: string;
}
export interface DeviceActionResult {
    // Action name
    actionName?: string;
    // State of the action. Possible values are: none, pending, canceled, active, done, failed, notSupported.
    actionState?: ActionState;
    // Time the action was initiated
    startDateTime?: string;
    // Time the action state was last updated
    lastUpdatedDateTime?: string;
}
export interface ConfigurationManagerClientEnabledFeatures {
    // Whether inventory is managed by Intune
    inventory?: boolean;
    // Whether modern application is managed by Intune
    modernApps?: boolean;
    // Whether resource access is managed by Intune
    resourceAccess?: boolean;
    // Whether device configuration is managed by Intune
    deviceConfiguration?: boolean;
    // Whether compliance policy is managed by Intune
    compliancePolicy?: boolean;
    // Whether Windows Update for Business is managed by Intune
    windowsUpdateForBusiness?: boolean;
}
export interface DeviceHealthAttestationState {
    // The Timestamp of the last update.
    lastUpdateDateTime?: string;
    // The DHA report version. (Namespace version)
    contentNamespaceUrl?: string;
    // The DHA report version. (Namespace version)
    deviceHealthAttestationStatus?: string;
    // The HealthAttestation state schema version
    contentVersion?: string;
    // The DateTime when device was evaluated or issued to MDM
    issuedDateTime?: string;
    /**
     * TWhen an Attestation Identity Key (AIK) is present on a device, it indicates that the device has an endorsement key
     * (EK) certificate.
     */
    attestationIdentityKey?: string;
    // The number of times a PC device has hibernated or resumed
    resetCount?: number;
    // The number of times a PC device has rebooted
    restartCount?: number;
    // DEP Policy defines a set of hardware and software technologies that perform additional checks on memory
    dataExcutionPolicy?: string;
    // On or Off of BitLocker Drive Encryption
    bitLockerStatus?: string;
    // The version of the Boot Manager
    bootManagerVersion?: string;
    // The version of the Boot Manager
    codeIntegrityCheckVersion?: string;
    // When Secure Boot is enabled, the core components must have the correct cryptographic signatures
    secureBoot?: string;
    // When bootDebugging is enabled, the device is used in development and testing
    bootDebugging?: string;
    // When operatingSystemKernelDebugging is enabled, the device is used in development and testing
    operatingSystemKernelDebugging?: string;
    // When code integrity is enabled, code execution is restricted to integrity verified code
    codeIntegrity?: string;
    // When test signing is allowed, the device does not enforce signature validation during boot
    testSigning?: string;
    // Safe mode is a troubleshooting option for Windows that starts your computer in a limited state
    safeMode?: string;
    // Operating system running with limited services that is used to prepare a computer for Windows
    windowsPE?: string;
    // ELAM provides protection for the computers in your network when they start up
    earlyLaunchAntiMalwareDriverProtection?: string;
    // VSM is a container that protects high value assets from a compromised kernel
    virtualSecureMode?: string;
    // Informational attribute that identifies the HASH algorithm that was used by TPM
    pcrHashAlgorithm?: string;
    // The security version number of the Boot Application
    bootAppSecurityVersion?: string;
    // The security version number of the Boot Application
    bootManagerSecurityVersion?: string;
    // The security version number of the Boot Application
    tpmVersion?: string;
    // The measurement that is captured in PCR[0]
    pcr0?: string;
    // Fingerprint of the Custom Secure Boot Configuration Policy
    secureBootConfigurationPolicyFingerPrint?: string;
    // The Code Integrity policy that is controlling the security of the boot environment
    codeIntegrityPolicy?: string;
    // The Boot Revision List that was loaded during initial boot on the attested device
    bootRevisionListInfo?: string;
    // The Operating System Revision List that was loaded during initial boot on the attested device
    operatingSystemRevListInfo?: string;
    // This attribute appears if DHA-Service detects an integrity issue
    healthStatusMismatchInfo?: string;
    // This attribute indicates if DHA is supported for the device
    healthAttestationSupportedStatus?: string;
}
export interface DeviceConfigurationSettingState {
    // The setting that is being reported
    setting?: string;
    // Localized/user friendly setting name that is being reported
    settingName?: string;
    // Name of setting instance that is being reported.
    instanceDisplayName?: string;
    /**
     * The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant,
     * error, conflict, notAssigned.
     */
    state?: ComplianceStatus;
    // Error code for the setting
    errorCode?: number;
    // Error description
    errorDescription?: string;
    // UserId
    userId?: string;
    // UserName
    userName?: string;
    // UserEmail
    userEmail?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
    // Contributing policies
    sources?: SettingSource[];
    // Current value of setting on device
    currentValue?: string;
}
export interface SettingSource {
    // Not yet documented
    id?: string;
    // Not yet documented
    displayName?: string;
}
export interface DeviceCompliancePolicySettingState {
    // The setting that is being reported
    setting?: string;
    // Localized/user friendly setting name that is being reported
    settingName?: string;
    // Name of setting instance that is being reported.
    instanceDisplayName?: string;
    /**
     * The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant,
     * error, conflict, notAssigned.
     */
    state?: ComplianceStatus;
    // Error code for the setting
    errorCode?: number;
    // Error description
    errorDescription?: string;
    // UserId
    userId?: string;
    // UserName
    userName?: string;
    // UserEmail
    userEmail?: string;
    // UserPrincipalName.
    userPrincipalName?: string;
    // Contributing policies
    sources?: SettingSource[];
    // Current value of setting on device
    currentValue?: string;
}
export interface DeviceEnrollmentPlatformRestriction {
    // Block the platform from enrolling
    platformBlocked?: boolean;
    // Block personally owned devices from enrolling
    personalDeviceEnrollmentBlocked?: boolean;
    // Min OS version supported
    osMinimumVersion?: string;
    // Max OS version supported
    osMaximumVersion?: string;
}
export interface UpdateWindowsDeviceAccountActionParameter {
    // Not yet documented
    deviceAccount?: WindowsDeviceAccount;
    // Not yet documented
    passwordRotationEnabled?: boolean;
    // Not yet documented
    calendarSyncEnabled?: boolean;
    // Not yet documented
    deviceAccountEmail?: string;
    // Not yet documented
    exchangeServer?: string;
    // Not yet documented
    sessionInitiationProtocalAddress?: string;
}
export interface WindowsDeviceAccount {
    // Not yet documented
    password?: string;
}
export interface WindowsDefenderScanActionResult extends DeviceActionResult {
    // Scan type either full scan or quick scan
    scanType?: string;
}
export interface DeleteUserFromSharedAppleDeviceActionResult extends DeviceActionResult {
    // User principal name of the user to be deleted
    userPrincipalName?: string;
}
export interface DeviceGeoLocation {
    // Time at which location was recorded, relative to UTC
    lastCollectedDateTime?: string;
    // Longitude coordinate of the device's location
    longitude?: number;
    // Latitude coordinate of the device's location
    latitude?: number;
    // Altitude, given in meters above sea level
    altitude?: number;
    // Accuracy of longitude and latitude in meters
    horizontalAccuracy?: number;
    // Accuracy of altitude in meters
    verticalAccuracy?: number;
    // Heading in degrees from true north
    heading?: number;
    // Speed the device is traveling in meters per second
    speed?: number;
}
export interface LocateDeviceActionResult extends DeviceActionResult {
    // device location
    deviceLocation?: DeviceGeoLocation;
}
export interface RemoteLockActionResult extends DeviceActionResult {
    // Pin to unlock the client
    unlockPin?: string;
}
export interface ResetPasscodeActionResult extends DeviceActionResult {
    // Newly generated passcode for the device
    passcode?: string;
}
export interface DeviceOperatingSystemSummary {
    // Number of android device count.
    androidCount?: number;
    // Number of iOS device count.
    iosCount?: number;
    // Number of Mac OS X device count.
    macOSCount?: number;
    // Number of Windows mobile device count.
    windowsMobileCount?: number;
    // Number of Windows device count.
    windowsCount?: number;
    // Number of unknown device count.
    unknownCount?: number;
}
export interface DeviceExchangeAccessStateSummary {
    // Total count of devices with Exchange Access State: Allowed.
    allowedDeviceCount?: number;
    // Total count of devices with Exchange Access State: Blocked.
    blockedDeviceCount?: number;
    // Total count of devices with Exchange Access State: Quarantined.
    quarantinedDeviceCount?: number;
    // Total count of devices with Exchange Access State: Unknown.
    unknownDeviceCount?: number;
    // Total count of devices for which no Exchange Access State could be found.
    unavailableDeviceCount?: number;
}
export interface WindowsDeviceADAccount extends WindowsDeviceAccount {
    // Not yet documented
    domainName?: string;
    // Not yet documented
    userName?: string;
}
export interface WindowsDeviceAzureADAccount extends WindowsDeviceAccount {
    // Not yet documented
    userPrincipalName?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface MobileAppIdentifier {}
export interface ManagedAppDiagnosticStatus {
    // The validation friendly name
    validationName?: string;
    // The state of the operation
    state?: string;
    // Instruction on how to mitigate a failed validation
    mitigationInstruction?: string;
}
export interface KeyValuePair {
    // Name for this key-value pair
    name?: string;
    // Value for this key-value pair
    value?: string;
}
export interface WindowsInformationProtectionResourceCollection {
    // Display name
    displayName?: string;
    // Collection of resources
    resources?: string[];
}
export interface WindowsInformationProtectionDataRecoveryCertificate {
    // Data recovery Certificate subject name
    subjectName?: string;
    // Data recovery Certificate description
    description?: string;
    // Data recovery Certificate expiration datetime
    expirationDateTime?: string;
    // Data recovery Certificate
    certificate?: number;
}
export interface WindowsInformationProtectionApp {
    // App display name.
    displayName?: string;
    // The app's description.
    description?: string;
    // The publisher name
    publisherName?: string;
    // The product name.
    productName?: string;
    // If true, app is denied protection or exemption.
    denied?: boolean;
}
export interface WindowsInformationProtectionProxiedDomainCollection {
    // Display name
    displayName?: string;
    // Collection of proxied domains
    proxiedDomains?: ProxiedDomain[];
}
export interface ProxiedDomain {
    // The IP address or FQDN
    ipAddressOrFQDN?: string;
    // Proxy IP or FQDN
    proxy?: string;
}
export interface WindowsInformationProtectionIPRangeCollection {
    // Display name
    displayName?: string;
    // Collection of Internet protocol address ranges
    ranges?: IpRange[];
}
// tslint:disable-next-line: interface-name no-empty-interface
export interface IpRange {}
export interface AndroidMobileAppIdentifier extends MobileAppIdentifier {
    // The identifier for an app, as specified in the play store.
    packageId?: string;
}
// tslint:disable-next-line: interface-name
export interface IosMobileAppIdentifier extends MobileAppIdentifier {
    // The identifier for an app, as specified in the app store.
    bundleId?: string;
}
export interface ManagedAppPolicyDeploymentSummaryPerApp {
    // Deployment of an app.
    mobileAppIdentifier?: MobileAppIdentifier;
    // Number of users the policy is applied.
    configurationAppliedUserCount?: number;
}
// tslint:disable-next-line: no-empty-interface
export interface WindowsInformationProtectionStoreApp extends WindowsInformationProtectionApp {}
export interface WindowsInformationProtectionDesktopApp extends WindowsInformationProtectionApp {
    // The binary name.
    binaryName?: string;
    // The lower binary version.
    binaryVersionLow?: string;
    // The high binary version.
    binaryVersionHigh?: string;
}
// tslint:disable-next-line: interface-name
export interface IPv6Range extends IpRange {
    // Lower address
    lowerAddress?: string;
    // Upper address
    upperAddress?: string;
}
// tslint:disable-next-line: interface-name
export interface IPv4Range extends IpRange {
    // Lower address.
    lowerAddress?: string;
    // Upper address.
    upperAddress?: string;
}
export interface RolePermission {
    // Actions
    resourceActions?: ResourceAction[];
}
export interface ResourceAction {
    // Allowed Actions
    allowedResourceActions?: string[];
    // Not Allowed Actions
    notAllowedResourceActions?: string[];
}
// tslint:disable-next-line: no-empty-interface
export interface PlannerAppliedCategories {}
// tslint:disable-next-line: no-empty-interface
export interface PlannerAssignments {}
export interface PlannerExternalReference {
    // A name alias to describe the reference.
    alias?: string;
    // Used to describe the type of the reference. Types include: PowerPoint, Word, Excel, Other.
    type?: string;
    // Used to set the relative priority order in which the reference will be shown as a preview on the task.
    previewPriority?: string;
    // Read-only. User ID by which this is last modified.
    lastModifiedBy?: IdentitySet;
    /**
     * Read-only. Date and time at which this is last modified. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'
     */
    lastModifiedDateTime?: string;
}
export interface PlannerChecklistItem {
    // Value is true if the item is checked and false otherwise.
    isChecked?: boolean;
    // Title of the checklist item
    title?: string;
    // Used to set the relative order of items in the checklist. The format is defined as outlined here.
    orderHint?: string;
    // Read-only. User ID by which this is last modified.
    lastModifiedBy?: IdentitySet;
    /**
     * Read-only. Date and time at which this is last modified. The Timestamp type represents date and time information using
     * ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'
     */
    lastModifiedDateTime?: string;
}
export interface PlannerAssignment {
    // The identity of the user that performed the assignment of the task, i.e. the assignor.
    assignedBy?: IdentitySet;
    /**
     * The time at which the task was assigned. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    assignedDateTime?: string;
    // Hint used to order assignees in a task. The format is defined as outlined here.
    orderHint?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface PlannerExternalReferences {}
// tslint:disable-next-line: no-empty-interface
export interface PlannerChecklistItems {}
// tslint:disable-next-line: no-empty-interface
export interface PlannerOrderHintsByAssignee {}
// tslint:disable-next-line: no-empty-interface
export interface PlannerUserIds {}
export interface PlannerCategoryDescriptions {
    // The label associated with Category 1
    category1?: string;
    // The label associated with Category 2
    category2?: string;
    // The label associated with Category 3
    category3?: string;
    // The label associated with Category 4
    category4?: string;
    // The label associated with Category 5
    category5?: string;
    // The label associated with Category 6
    category6?: string;
}
export interface ResourceVisualization {
    title?: string;
    type?: string;
    mediaType?: string;
    previewImageUrl?: string;
    previewText?: string;
    containerWebUrl?: string;
    containerDisplayName?: string;
    containerType?: string;
}
export interface ResourceReference {
    webUrl?: string;
    id?: string;
    type?: string;
}
export interface SharingDetail {
    sharedBy?: InsightIdentity;
    sharedDateTime?: string;
    sharingSubject?: string;
    sharingType?: string;
    sharingReference?: ResourceReference;
}
// tslint:disable-next-line: interface-name
export interface InsightIdentity {
    displayName?: string;
    id?: string;
    address?: string;
}
export interface UsageDetails {
    lastAccessedDateTime?: string;
    lastModifiedDateTime?: string;
}
export interface NotebookLinks {
    // Opens the notebook in the OneNote native client if it's installed.
    oneNoteClientUrl?: ExternalLink;
    // Opens the notebook in OneNote on the web.
    oneNoteWebUrl?: ExternalLink;
}
export interface ExternalLink {
    // The url of the link.
    href?: string;
}
export interface SectionLinks {
    // Opens the section in the OneNote native client if it's installed.
    oneNoteClientUrl?: ExternalLink;
    // Opens the section in OneNote on the web.
    oneNoteWebUrl?: ExternalLink;
}
export interface PageLinks {
    // Opens the page in the OneNote native client if it's installed.
    oneNoteClientUrl?: ExternalLink;
    // Opens the page in OneNote on the web.
    oneNoteWebUrl?: ExternalLink;
}
export interface OnenoteOperationError {
    // The error code.
    code?: string;
    // The error message.
    message?: string;
}
export interface Diagnostic {
    message?: string;
    url?: string;
}
export interface OnenotePatchContentCommand {
    // The action to perform on the target element. The possible values are: replace, append, delete, insert, or prepend.
    action?: OnenotePatchActionType;
    /**
     * The element to update. Must be the #&amp;lt;data-id&amp;gt; or the generated &amp;lt;id&amp;gt; of the element, or the
     * body or title keyword.
     */
    target?: string;
    /**
     * A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary
     * data, the request must be sent using the multipart/form-data content type with a 'Commands' part.
     */
    content?: string;
    /**
     * The location to add the supplied content, relative to the target element. The possible values are: after (default) or
     * before.
     */
    position?: OnenotePatchInsertPosition;
}
export interface OnenotePagePreview {
    previewText?: string;
    links?: OnenotePagePreviewLinks;
}
export interface OnenotePagePreviewLinks {
    previewImageUrl?: ExternalLink;
}
export interface RecentNotebook {
    // The name of the notebook.
    displayName?: string;
    /**
     * The date and time when the notebook was last modified. The timestamp represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'. Read-only.
     */
    lastAccessedTime?: string;
    /**
     * Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote client, if it's installed.
     * The oneNoteWebURL link opens the notebook in OneNote on the web.
     */
    links?: RecentNotebookLinks;
    // The backend store where the Notebook resides, either OneDriveForBusiness or OneDrive.
    sourceService?: OnenoteSourceService;
}
export interface RecentNotebookLinks {
    // Opens the notebook in the OneNote native client if it's installed.
    oneNoteClientUrl?: ExternalLink;
    // Opens the notebook in OneNote on the web.
    oneNoteWebUrl?: ExternalLink;
}
export interface CopyNotebookModel {
    isDefault?: boolean;
    userRole?: OnenoteUserRole;
    isShared?: boolean;
    sectionsUrl?: string;
    sectionGroupsUrl?: string;
    links?: NotebookLinks;
    name?: string;
    createdBy?: string;
    createdByIdentity?: IdentitySet;
    lastModifiedBy?: string;
    lastModifiedByIdentity?: IdentitySet;
    lastModifiedTime?: string;
    id?: string;
    self?: string;
    createdTime?: string;
}
// tslint:disable-next-line: interface-name
export interface ImageInfo {
    // Optional; URI that points to an icon which represents the application used to generate the activity
    iconUrl?: string;
    alternativeText?: string;
    // Optional; alt-text accessible content for the image
    alternateText?: string;
    /**
     * Optional; parameter used to indicate the server is able to render image dynamically in response to parameterization.
     * For example – a high contrast image
     */
    addImageQuery?: boolean;
}
export interface VisualInfo {
    // Optional. JSON object used to represent an icon which represents the application used to generate the activity
    attribution?: ImageInfo;
    /**
     * Optional. Background color used to render the activity in the UI - brand color for the application source of the
     * activity. Must be a valid hex color
     */
    backgroundColor?: string;
    /**
     * Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or
     * metadata)
     */
    description?: string;
    /**
     * Required. Short text description of the user's unique activity (for example, document name in cases where an activity
     * refers to document creation)
     */
    displayText?: string;
    /**
     * Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell
     * UI
     */
    content?: any;
}
export interface CloudAppSecurityState {
    // Destination IP Address of the connection to the cloud application/service.
    destinationServiceIp?: string;
    // Cloud application/service name (for example 'Salesforce', 'DropBox', etc.).
    destinationServiceName?: string;
    /**
     * Provider-generated/calculated risk score of the Cloud Application/Service. Recommended value range of 0-1, which
     * equates to a percentage.
     */
    riskScore?: string;
}
export interface FileSecurityState {
    // Complex type containing file hashes (cryptographic and location-sensitive).
    fileHash?: FileHash;
    // File name (without path).
    name?: string;
    // Full file path of the file/imageFile.
    path?: string;
    /**
     * Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a
     * percentage.
     */
    riskScore?: string;
}
export interface FileHash {
    // File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256.
    hashType?: FileHashType;
    // Value of the file hash.
    hashValue?: string;
}
export interface AlertHistoryState {
    appId?: string;
    assignedTo?: string;
    comments?: string[];
    feedback?: AlertFeedback;
    status?: AlertStatus;
    updatedDateTime?: string;
    user?: string;
}
export interface HostSecurityState {
    // Host FQDN (Fully Qualified Domain Name) (for example, machine.company.com).
    fqdn?: string;
    isAzureAdJoined?: boolean;
    isAzureAdRegistered?: boolean;
    // True if the host is domain joined to an on-premises Active Directory domain.
    isHybridAzureDomainJoined?: boolean;
    // The local host name, without the DNS domain name.
    netBiosName?: string;
    // Host Operating System. (For example, Windows10, MacOS, RHEL, etc.).
    os?: string;
    // Private (not routable) IPv4 or IPv6 address (see RFC 1918) at the time of the alert.
    privateIpAddress?: string;
    // Publicly routable IPv4 or IPv6 address (see RFC 1918) at time of the alert.
    publicIpAddress?: string;
    // Provider-generated/calculated risk score of the host. Recommended value range of 0-1, which equates to a percentage.
    riskScore?: string;
}
export interface MalwareState {
    // Provider-generated malware category (for example, trojan, ransomware, etc.).
    category?: string;
    // Provider-generated malware family (for example, 'wannacry', 'notpetya', etc.).
    family?: string;
    // Provider-generated malware variant name (for example, Trojan:Win32/Powessere.H).
    name?: string;
    // Provider-determined severity of this malware.
    severity?: string;
    /**
     * Indicates whether the detected file (malware/vulnerability) was running at the time of detection or was detected at
     * rest on the disk.
     */
    wasRunning?: boolean;
}
export interface NetworkConnection {
    // Name of the application managing the network connection (for example, Facebook, SMTP, etc.).
    applicationName?: string;
    // Destination IP address (of the network connection).
    destinationAddress?: string;
    // Destination domain portion of the destination URL. (for example 'www.contoso.com').
    destinationDomain?: string;
    // Destination port (of the network connection).
    destinationPort?: string;
    // Network connection URL/URI string - excluding parameters. (for example 'www.contoso.com/products/default.html')
    destinationUrl?: string;
    // Network connection direction. Possible values are: unknown, inbound, outbound.
    direction?: ConnectionDirection;
    /**
     * Date when the destination domain was registered. The Timestamp type represents date and time information using ISO 8601
     * format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
     */
    domainRegisteredDateTime?: string;
    /**
     * The local DNS name resolution as it appears in the host's local DNS cache (for example, in case the 'hosts' file was
     * tampered with).
     */
    localDnsName?: string;
    // Network Address Translation destination IP address.
    natDestinationAddress?: string;
    // Network Address Translation destination port.
    natDestinationPort?: string;
    // Network Address Translation source IP address.
    natSourceAddress?: string;
    // Network Address Translation source port.
    natSourcePort?: string;
    /**
     * Network protocol. Possible values are: unknown, ip, icmp, igmp, ggp, ipv4, tcp, pup, udp, idp, ipv6, ipv6RoutingHeader,
     * ipv6FragmentHeader, ipSecEncapsulatingSecurityPayload, ipSecAuthenticationHeader, icmpV6, ipv6NoNextHeader,
     * ipv6DestinationOptions, nd, raw, ipx, spx, spxII.
     */
    protocol?: SecurityNetworkProtocol;
    /**
     * Provider generated/calculated risk score of the network connection. Recommended value range of 0-1, which equates to a
     * percentage.
     */
    riskScore?: string;
    // Source (i.e. origin) IP address (of the network connection).
    sourceAddress?: string;
    // Source (i.e. origin) IP port (of the network connection).
    sourcePort?: string;
    // Network connection status. Possible values are: unknown, attempted, succeeded, blocked, failed.
    status?: ConnectionStatus;
    // Parameters (suffix) of the destination URL.
    urlParameters?: string;
}
export interface Process {
    // User account identifier (user account context the process ran under) for example, AccountName, SID, and so on.
    accountName?: string;
    // The full process invocation commandline including all parameters.
    commandLine?: string;
    /**
     * Time at which the process was started. The Timestamp type represents date and time information using ISO 8601 format
     * and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'.
     */
    createdDateTime?: string;
    // Complex type containing file hashes (cryptographic and location-sensitive).
    fileHash?: FileHash;
    // The integrity level of the process. Possible values are: unknown, untrusted, low, medium, high, system.
    integrityLevel?: ProcessIntegrityLevel;
    // True if the process is elevated.
    isElevated?: boolean;
    // The name of the process' Image file.
    name?: string;
    /**
     * DateTime at which the parent process was started. The Timestamp type represents date and time information using ISO
     * 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this:
     * '2014-01-01T00:00:00Z'.
     */
    parentProcessCreatedDateTime?: string;
    // The Process ID (PID) of the parent process.
    parentProcessId?: number;
    // The name of the image file of the parent process.
    parentProcessName?: string;
    // Full path, including filename.
    path?: string;
    // The Process ID (PID) of the process.
    processId?: number;
}
export interface RegistryKeyState {
    /**
     * A Windows registry hive : HKEY_CURRENT_CONFIG HKEY_CURRENT_USER HKEY_LOCAL_MACHINE/SAM HKEY_LOCAL_MACHINE/Security
     * HKEY_LOCAL_MACHINE/Software HKEY_LOCAL_MACHINE/System HKEY_USERS/.Default. Possible values are: unknown, currentConfig,
     * currentUser, localMachineSam, localMachineSecurity, localMachineSoftware, localMachineSystem, usersDefault.
     */
    hive?: RegistryHive;
    // Current (i.e. changed) registry key (excludes HIVE).
    key?: string;
    // Previous (i.e. before changed) registry key (excludes HIVE).
    oldKey?: string;
    // Previous (i.e. before changed) registry key value data (contents).
    oldValueData?: string;
    // Previous (i.e. before changed) registry key value name.
    oldValueName?: string;
    // Operation that changed the registry key name and/or value. Possible values are: unknown, create, modify, delete.
    operation?: RegistryOperation;
    /**
     * Process ID (PID) of the process that modified the registry key (process details will appear in the alert 'processes'
     * collection).
     */
    processId?: number;
    // Current (i.e. changed) registry key value data (contents).
    valueData?: string;
    // Current (i.e. changed) registry key value name
    valueName?: string;
    /**
     * Registry key value type REG_BINARY REG_DWORD REG_DWORD_LITTLE_ENDIAN REG_DWORD_BIG_ENDIANREG_EXPAND_SZ REG_LINK
     * REG_MULTI_SZ REG_NONE REG_QWORD REG_QWORD_LITTLE_ENDIAN REG_SZ Possible values are: unknown, binary, dword,
     * dwordLittleEndian, dwordBigEndian, expandSz, link, multiSz, none, qword, qwordlittleEndian, sz.
     */
    valueType?: RegistryValueType;
}
export interface AlertTrigger {
    // Name of the property serving as a detection trigger.
    name?: string;
    // Type of the property in the key:value pair for interpretation. For example, String, Boolean, etc.
    type?: string;
    // Value of the property serving as a detection trigger.
    value?: string;
}
export interface UserSecurityState {
    // AAD User object identifier (GUID) - represents the physical/multi-account user entity.
    aadUserId?: string;
    // Account name of user account (without Active Directory domain or DNS domain) - (also called mailNickName).
    accountName?: string;
    // NetBIOS/Active Directory domain of user account (that is, domain/account format).
    domainName?: string;
    // For email-related alerts - user account's email 'role'. Possible values are: unknown, sender, recipient.
    emailRole?: EmailRole;
    // Indicates whether the user logged on through a VPN.
    isVpn?: boolean;
    /**
     * Time at which the sign-in occurred. The Timestamp type represents date and time information using ISO 8601 format and
     * is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'.
     */
    logonDateTime?: string;
    // User sign-in ID.
    logonId?: string;
    // IP Address the sign-in request originated from.
    logonIp?: string;
    // Location (by IP address mapping) associated with a user sign-in event by this user.
    logonLocation?: string;
    // Method of user sign in. Possible values are: unknown, interactive, remoteInteractive, network, batch, service.
    logonType?: LogonType;
    // Active Directory (on-premises) Security Identifier (SID) of the user.
    onPremisesSecurityIdentifier?: string;
    /**
     * Provider-generated/calculated risk score of the user account. Recommended value range of 0-1, which equates to a
     * percentage.
     */
    riskScore?: string;
    /**
     * User account type (group membership), per Windows definition. Possible values are: unknown, standard, power,
     * administrator.
     */
    userAccountType?: UserAccountSecurityType;
    // User sign-in name - internet format: (user account name)@(user account DNS domain name).
    userPrincipalName?: string;
}
export interface SecurityVendorInformation {
    // Specific provider (product/service - not vendor company); for example, WindowsDefenderATP.
    provider?: string;
    // Version of the provider or subprovider, if it exists, that generated the alert. Required
    providerVersion?: string;
    // Specific subprovider (under aggregating provider); for example, WindowsDefenderATP.SmartScreen.
    subProvider?: string;
    // Name of the alert vendor (for example, Microsoft, Dell, FireEye). Required
    vendor?: string;
}
export interface VulnerabilityState {
    // Common Vulnerabilities and Exposures (CVE) for the vulnerability.
    cve?: string;
    // Base Common Vulnerability Scoring System (CVSS) severity score for this vulnerability.
    severity?: string;
    /**
     * Indicates whether the detected vulnerability (file) was running at the time of detection or was the file detected at
     * rest on the disk.
     */
    wasRunning?: boolean;
}
export interface AverageComparativeScore {
    // Average score within specified basis.
    averageScore?: number;
    // Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes.
    basis?: string;
}
export interface ControlScore {
    // Control action category (Identity, Data, Device, Apps, Infrastructure).
    controlCategory?: string;
    // Control unique name.
    controlName?: string;
    // Description of the control.
    description?: string;
    // Tenant achieved score for the control (it varies day by day depending on tenant operations on the control).
    score?: number;
}
export interface ComplianceInformation {
    // Collection of the certification controls associated with certification
    certificationControls?: CertificationControl[];
    // Compliance certification name (for example, ISO 27018:2014, GDPR, FedRAMP, NIST 800-171)
    certificationName?: string;
}
export interface CertificationControl {
    // Certification control name
    name?: string;
    // URL for the Microsoft Service Trust Portal
    url?: string;
}
export interface SecureScoreControlStateUpdate {
    // Assigns the control to the user who will take the action.
    assignedTo?: string;
    // Provides optional comment about the control.
    comment?: string;
    // State of the control, which can be modified via a PATCH command (for example, ignored, thirdParty).
    state?: string;
    // ID of the user who updated tenant state.
    updatedBy?: string;
    // Time at which the control state was updated.
    updatedDateTime?: string;
}
export interface CallMediaState {
    audio?: MediaState;
}
export interface ResultInfo {
    code?: number;
    subcode?: number;
    message?: string;
}
export interface ParticipantInfo {
    identity?: IdentitySet;
    region?: string;
    languageId?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface MediaConfig {}
export interface ChatInfo {
    threadId?: string;
    messageId?: string;
    replyChainMessageId?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface MeetingInfo {}
export interface ToneInfo {
    sequenceId?: number;
    tone?: Tone;
}
// tslint:disable-next-line: interface-name
export interface InvitationParticipantInfo extends ParticipantInfo {
    replacesCallId?: string;
}
export interface MeetingParticipants {
    organizer?: MeetingParticipantInfo;
    attendees?: MeetingParticipantInfo[];
}
export interface MeetingParticipantInfo {
    identity?: IdentitySet;
    upn?: string;
}
export interface AudioConferencing {
    conferenceId?: string;
    tollNumber?: string;
    tollFreeNumber?: string;
    dialinUrl?: string;
}
export interface MediaStream {
    mediaType?: Modality;
    label?: string;
    sourceId?: string;
    direction?: MediaDirection;
    serverMuted?: boolean;
}
export interface CommsNotification {
    changeType?: ChangeType;
    resourceUrl?: string;
}
export interface CommsNotifications {
    value?: CommsNotification[];
}
export interface AppHostedMediaConfig extends MediaConfig {
    blob?: string;
}
export interface ServiceHostedMediaConfig extends MediaConfig {
    preFetchMedia?: MediaInfo[];
}
export interface MediaInfo {
    uri?: string;
    resourceId?: string;
}
export interface OrganizerMeetingInfo extends MeetingInfo {
    organizer?: IdentitySet;
}
export interface TokenMeetingInfo extends MeetingInfo {
    token?: string;
}
// tslint:disable-next-line: no-empty-interface
export interface Prompt {}
export interface MediaPrompt extends Prompt {
    mediaInfo?: MediaInfo;
}
export interface TeamMemberSettings {
    // If set to true, members can add and update channels.
    allowCreateUpdateChannels?: boolean;
    // If set to true, members can delete channels.
    allowDeleteChannels?: boolean;
    // If set to true, members can add and remove apps.
    allowAddRemoveApps?: boolean;
    // If set to true, members can add, update, and remove tabs.
    allowCreateUpdateRemoveTabs?: boolean;
    // If set to true, members can add, update, and remove connectors.
    allowCreateUpdateRemoveConnectors?: boolean;
}
export interface TeamGuestSettings {
    // If set to true, guests can add and update channels.
    allowCreateUpdateChannels?: boolean;
    // If set to true, guests can delete channels.
    allowDeleteChannels?: boolean;
}
export interface TeamMessagingSettings {
    // If set to true, users can edit their messages.
    allowUserEditMessages?: boolean;
    // If set to true, users can delete their messages.
    allowUserDeleteMessages?: boolean;
    // If set to true, owners can delete any message.
    allowOwnerDeleteMessages?: boolean;
    // If set to true, @team mentions are allowed.
    allowTeamMentions?: boolean;
    // If set to true, @channel mentions are allowed.
    allowChannelMentions?: boolean;
}
export interface TeamFunSettings {
    // If set to true, enables Giphy use.
    allowGiphy?: boolean;
    // Giphy content rating. Possible values are: moderate, strict.
    giphyContentRating?: GiphyRatingType;
    // If set to true, enables users to include stickers and memes.
    allowStickersAndMemes?: boolean;
    // If set to true, enables users to include custom memes.
    allowCustomMemes?: boolean;
}
export interface TeamClassSettings {
    notifyGuardiansAboutAssignments?: boolean;
}
export interface TeamsTabConfiguration {
    // Identifier for the entity hosted by the tab provider.
    entityId?: string;
    // Url used for rendering tab contents in Teams. Required.
    contentUrl?: string;
    // Url called by Teams client when a Tab is removed using the Teams Client.
    removeUrl?: string;
    // Url for showing tab contents outside of Teams.
    websiteUrl?: string;
}
export interface OperationError {
    // Operation error code.
    code?: string;
    // Operation error message.
    message?: string;
}
