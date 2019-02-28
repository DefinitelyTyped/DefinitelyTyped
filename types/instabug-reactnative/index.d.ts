// Type definitions for instabug-reactnative 8.0
// Project: https://github.com/Instabug/instabug-reactnative#readme
// Definitions by: Aly Ezz <https://github.com/alyezz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace BugReporting {
  function setInvocationEvents(invocationEvents: invocationEvent[]): void;
  function invoke(): void;
  function setInvocationOptions(invocationOptions: invocationOptions[]): void;
  function invokeWithInvocationModeAndOptions(
    invocationMode: invocationMode,
    invocationOptions: invocationOptions[]
    ): void;
  function onInvokeHandler(preInvocationHandler: () => void): void;
  function onReportSubmitHandler(preSendingHandler: () => void): void;
  function onSDKDismissedHandler(postInvocationHandler: () => void): void;
  function dismiss(): void;
  function setPromptOptionsEnabled(
    chat: boolean,
    bug: boolean,
    feedback: boolean
    ): void;
  function setShakingThresholdForiPhone(iPhoneShakingThreshold: number): void;
  function setShakingThresholdForiPad(iPadShakingThreshold: number): void;
  function setShakingThresholdForAndroid(androidThreshold: number): void;
  function setExtendedBugReportMode(extendedBugReportMode: extendedBugReportMode): void;
  enum invocationEvent {
    none,
    shake,
    screenshot,
    twoFingersSwipe,
    floatingButton
  }
  enum invocationMode {
    NA,
    newBug,
    newFeedback,
    newChat,
    chatsList
  }
  enum invocationOptions {
    emailFieldHidden,
    emailFieldOptional,
    commentFieldRequired,
    disablePostSendingDialog
  }
  enum extendedBugReportMode {
    enabledWithRequiredFields,
    enabledWithOptionalFields,
    disabled
  }
}
export namespace FeatureRequests {
  function setEmailFieldRequired(
    isEmailFieldRequired: boolean,
    actionTypes: actionTypes[]
    ): void;
  function show(): void;
  enum actionTypes {
    allActions,
    reportBug,
    requestNewFeature,
    addCommentToFeature
  }
}
export namespace Surveys {
  function showSurveyIfAvailable(): void;
  function setThresholdForReshowingSurveyAfterDismiss(
    sessionCount: number,
    daysCount: number
    ): void;
  function getAvailableSurveys(availableSurveysCallback: () => void): void;
  function setAutoShowingEnabled(autoShowingSurveysEnabled: boolean): void;
  function onShowCallback(willShowSurveyHandler: () => void): void;
  function onDismissCallback(didDismissSurveyHandler: () => void): void;
  function showSurvey(surveyToken: string): void;
  function hasRespondedToSurvey(
    surveyToken: string,
    surveyTokenCallback: () => void
    ): void;
  function setShouldShowWelcomeScreen(shouldShowWelcomeScreen: boolean): void;
}
export function startWithToken(
  token: string,
  invocationEvent: invocationEvent[]
  ): void;
export function invoke(): void;
export function invokeWithInvocationMode(invocationMode: invocationMode): void;
export function dismiss(): void;
export function setUserData(userData: string): void;
export function setAutoScreenRecordingEnabled(autoScreenRecordingEnabled: boolean): void;
export function setAutoScreenRecosetAutoScreenRecordingMaxDurationrdingEnabled(autoScreenRecordingMaxDuration: number): void;
export function IBGLog(log: string): void;
export function setUserStepsEnabled(isUserStepsEnabled: boolean): void;
export function setIBGLogPrintsToConsole(printsToConsole: boolean): void;
export function setCrashReportingEnabled(enableCrashReporter: boolean): void;
export function setPreSendingHandler(preSendingHandler: () => void): void;
export function setDidSelectPromptOptionHandler(didSelectPromptOptionHandler: () => void): void;
export function showSurveyWithToken(surveyToken: string): void;
export function hasRespondedToSurveyWithToken(
  surveyToken: string,
  surveyTokenCallback: () => void
  ): void;
export function setSessionProfilerEnabled(sessionProfilerEnabled: boolean): void;
export function setPreInvocationHandler(preInvocationHandler: () => void): void;
export function setPostInvocationHandler(postInvocationHandler: () => void): void;
export function showIntroMessage(): void;
export function setUserEmail(userEmail: string): void;
export function setUserName(userName: string): void;
export function setWillSkipScreenshotAnnotation(setWillSkipScreenshotAnnotation: boolean): void;
export function getUnreadMessagesCount(messageCountCallback: () => void): void;
export function setInvocationEvent(invocationEvent: invocationEvent): void;
export function setPushNotificationsEnabled(isPushNotificationEnabled: boolean): void;
export function setEmailFieldRequired(isEmailFieldRequired: boolean): void;
export function setEmailFieldRequiredForActions(
  isEmailFieldRequired: boolean,
  actionTypes: actionTypes
  ): void;
export function setCommentFieldRequired(isCommentFieldRequired: boolean): void;
export function setShakingThresholdForIPhone(
  iPhoneShakingThreshold: number,
  iPadShakingThreshold: number
  ): void;
export function setShakingThresholdForiPhone(iPhoneShakingThreshold: number): void;
export function setShakingThresholdForiPad(iPadShakingThreshold: number): void;
export function setShakingThresholdForAndroid(androidThreshold: number): void;
export function setFloatingButtonEdge(
  floatingButtonEdge: number,
  offsetFromTop: number
  ): void;
export function setLocale(locale: locale): void;
export function setIntroMessageEnabled(isIntroMessageEnabled: boolean): void;
export function setColorTheme(colorTheme: colorTheme): void;
export function setPrimaryColor(setPrimaryColor: string): void;
export function appendTags(tags: string[]): void;
export function resetTags(): void;
export function getTags(tagsCallback: () => void): void;
export function setstringToKey(
  string: string,
  key: string
  ): void;
export function setAttachmentTypesEnabled(
  screenshot: boolean,
  extraScreenshot: boolean,
  galleryImage: boolean,
  voiceNote: boolean,
  screenRecording: boolean
  ): void;
export function setEnabledAttachmentTypes(
  screenshot: boolean,
  extraScreenshot: boolean,
  galleryImage: boolean,
  screenRecording: boolean
  ): void;
export function setChatNotificationEnabled(isChatNotificationEnabled: boolean): void;
export function setOnNewMessageHandler(onNewMessageHandler: () => void): void;
export function isInstabugNotification(
  dict: any,
  isInstabugNotificationCallback: () => void
  ): void;
export function identifyUserWithEmail(
  email: string,
  name: string
  ): void;
export function logOut(): void;
export function setReportCategories(...titles: string[]): void;
export function setExtendedBugReportMode(extendedBugReportMode: extendedBugReportMode): void;
export function logUserEventWithName(name: string,  params?: any): void;
export function logVerbose(message: string): void;
export function logInfo(message: string): void;
export function logDebug(message: string): void;
export function logError(message: string): void;
export function logWarn(message: string): void;
export function clearLogs(): void;
export function setReproStepsMode(reproStepsMode: reproStepsMode): void;
export function setUserAttribute(
  key: string,
  value: string
  ): void;
export function getUserAttribute(
  key: string,
  userAttributeCallback: () => void)
  : void;
export function removeUserAttribute(key: string): void;
export function getAllUserAttributes(userAttributesCallback: () => void): void;
export function clearAllUserAttributes(): void;
export function setViewHierarchyEnabled(viewHierarchyEnabled: boolean): void;
export function setSurveysEnabled(surveysEnabled: boolean): void;
export function showSurveysIfAvailable(): void;
export function setWillShowSurveyHandler(willShowSurveyHandler: () => void): void;
export function setDidDismissSurveyHandler(didDismissSurveyHandler: () => void): void;
export function setPromptOptionsEnabled(
  chat: boolean,
  bug: boolean,
  feedback: boolean
  ): void;
export function setDebugEnabled(isDebugEnabled: boolean): void;
export function enable(): void;
export function disable(): void;
export function isRunningLive(runningLiveCallBack: () => void): void;
export function setSuccessDialogEnabled(enabled: boolean): void;
export function setEnableInAppNotificationSound(shouldPlaySound: boolean): void;
export function reportJSException(errorObject: any): void;
export function setVideoRecordingFloatingButtonPosition(position: IBGPosition): void;
export function setThresholdForReshowingSurveyAfterDismiss(
  sessionCount: number,
  daysCount: number
  ): void;
export function setAutoShowingSurveysEnabled(autoShowingSurveysEnabled: boolean): void;
export function showFeatureRequests(): void;
export function setShouldShowSurveysWelcomeScreen(shouldShowWelcomeScreen: boolean): void;
export function showWelcomeMessage(welcomeMessageMode: welcomeMessageMode): void;
export function setWelcomeMessageMode(welcomeMessageMode: welcomeMessageMode): void;
export function addFileAttachment(
  filePath: string,
  fileName: string
  ): void;
export function callPrivateApi(
  apiName: string,
  param: any
  ): void;
export enum invocationEvent {
  none,
  shake,
  screenshot,
  twoFingersSwipe,
  floatingButton
}
export enum reproStepsMode {
  enabled,
  disabled,
  enabledWithNoScreenshots
}
export enum dismissType {
  submit,
  cancel,
  addAttachment
}
export enum promptOption {
  bug,
  chat,
  feedback
}
export enum reportType {
  bug,
  feedback
}
export enum invocationMode {
  NA,
  newBug,
  newFeedback,
  newChat,
  chatsList
}
export enum invocationOptions {
  invocationOptionsEmailFieldHidden,
  invocationOptionsEmailFieldOptional,
  invocationOptionsCommentFieldRequired,
  invocationOptionsDisablePostSendingDialog
}
export enum extendedBugReportMode {
  enabledWithRequiredFields,
  enabledWithOptionalFields,
  disabled
}
export enum locale {
  arabic,
  chineseSimplified,
  chineseTraditional,
  czech,
  danish,
  dutch,
  english,
  french,
  german,
  italian,
  japanese,
  polish,
  portugueseBrazil,
  russian,
  spanish,
  swedish,
  turkish,
  korean
}
export enum colorTheme {
  light,
  dark
}
export enum floatingButtonEdge {
  left,
  right
}
export enum IBGPosition {
  bottomRight,
  topRight,
  bottomLeft,
  topLeft
}
export enum welcomeMessageMode {
  live,
  beta,
  disabled
}
export enum actionTypes {
  allActions,
  reportBug,
  requestNewFeature,
  addCommentToFeature
}
export enum strings {
  shakeHint,
  swipeHint,
  edgeSwipeStartHint,
  startAlertText,
  invalidEmailMessage,
  invalidEmailTitle,
  invalidCommentMessage,
  invalidCommentTitle,
  invocationHeader,
  talkToUs,
  reportBug,
  reportFeedback,
  emailFieldHint,
  commentFieldHintForBugReport,
  commentFieldHintForFeedback,
  addVideoMessage,
  addVoiceMessage,
  addImageFromGallery,
  addExtraScreenshot,
  audioRecordingPermissionDeniedTitle,
  audioRecordingPermissionDeniedMessage,
  microphonePermissionAlertSettingsButtonText,
  recordingMessageToHoldText,
  recordingMessageToReleaseText,
  conversationsHeaderTitle,
  screenshotHeaderTitle,
  chatsNoConversationsHeadlineText,
  doneButtonText,
  okButtonText,
  cancelButtonText,
  thankYouText,
  audio,
  video,
  image,
  chatsHeaderTitle,
  team,
  messagesNotification,
  messagesNotificationAndOthers,
  conversationTextFieldHint,
  collectingDataText,
  thankYouAlertText,
  welcomeMessageBetaWelcomeStepTitle,
  welcomeMessageBetaWelcomeStepContent,
  welcomeMessageBetaHowToReportStepTitle,
  welcomeMessageBetaHowToReportStepContent,
  welcomeMessageBetaFinishStepTitle,
  welcomeMessageBetaFinishStepContent,
  welcomeMessageLiveWelcomeStepTitle,
  welcomeMessageLiveWelcomeStepContent
}
