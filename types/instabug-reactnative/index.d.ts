// Type definitions for instabug-reactnative 8.0
// Project: https://github.com/Instabug/instabug-reactnative#readme
// Definitions by: Peng Cao <https://github.com/pengcao1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const Instabug: InstabugStatic;
export type Instabug = InstabugStatic;

export const BugReporting: BugReportingStatic;
export type BugReporting = BugReportingStatic;

export type Surveys = SurveysStatic;
export const Surveys: SurveysStatic;

export type FeatureRequests = FeatureRequestsStatic;
export const FeatureRequests: FeatureRequestsStatic;
export default Instabug;

interface InstabugStatic {
  colorTheme: ColorTheme;
  locale: Locale;
  strings: Strings;
  welcomeMessageMode: WelcomeMessageMode;
  floatingButtonEdge: FloatingButtonEdge;
  IBGPosition: BGPosition;
  reproStepsMode: ReproStepsMode;
  actionTypes: ActionTypes;
  startWithToken(token: string, event: string[]): void;
  setColorTheme(colorTheme: string): void;
  setPrimaryColor(color: number): void;
  setFloatingButtonEdge(floatingButtonEdge: string, offsetFromTop: number): void;
  setLocale(locale: string): void;
  setStringToKey(key: string): void;
  setWelcomeMessageMode(welcomeMsg: string): void;
  identifyUserWithEmail(email: string, name: string): void;
  setUserAttribute(key: string, value: string): void;
  getUserAttribute(key: string, callBack: (attribute: string) => void): void;
  getAllUserAttributes(callBack: (allAttributes: string[]) => void): void;
  removeUserAttribute(key: string): void;
  setUserData(key: string): void;
  logOut(): void;
  logVerbose(info: string): void;
  logInfo(info: string): void;
  logDebug(info: string): void;
  logError(info: string): void;
  logWarn(info: string): void;
  setUserStepsEnabled(enabled: boolean): void;
  setAutoScreenRecordingEnabled(enabled: boolean): void;
  setAutoScreenRecordingMaxDuration(ms: number): void;
  setViewHierarchyEnabled(enabled: boolean): void;
  resetTags(): void;
  getTags(callBack: (tags: string) => void): void;
  appendTags(tags: string[]): void;
  setSessionProfilerEnabled(enabled: boolean): void;
  setCrashReportingEnabled(enabled: boolean): void;
  setChatNotificationEnabled(enabled: boolean): void;
  getUnreadMessagesCount(callBack: (count: number) => void): void;
  setOnNewMessageHandler(callBacck: () => void): void;
  setSurveysEnabled(enabled: boolean): void;
  setPostInvocationHandler(): void;
  setReproStepsMode(enableState: string): void;
  setVideoRecordingFloatingButtonPosition(position: string): void;
  logUserEventWithName(name: string): void;
  logUserEventWithNameAndParams(name: string, params: any): void;
  setEnabledAttachmentTypes(screenshot: boolean,
                            extraScreenshot: boolean,
                            galleryImage: boolean,
                            screenRecording: boolean): void;
}

interface ActionTypes {
  requestNewFeature: string;
  addCommentToFeature: string;
}

interface ReproStepsMode {
  enabled: string;
  disabled: string;
  enabledWithNoScreenshots: string;
}

interface BGPosition {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
}

interface FloatingButtonEdge {
  left: string;
  right: string;
}
interface WelcomeMessageMode {
  beta: string;
  live: string;
  disabled: string;
}

interface Strings {
  shakeHint: string;
  swipeHint: string;
  edgeSwipeStartHint: string;
  startAlertText: string;
  invalidEmailMessage: string;
  invalidEmailTitle: string;
  invalidCommentMessage: string;
  invalidCommentTitle: string;
  invocationHeader: string;
  talkToUs: string;
  reportBug: string;
  reportFeedback: string;
  emailFieldHint: string;
  commentFieldHintForBugReport: string;
  commentFieldHintForFeedback: string;
  addVideoMessage: string;
  addVoiceMessage: string;
  addImageFromGallery: string;
  addExtraScreenshot: string;
  audioRecordingPermissionDeniedTitle: string;
  audioRecordingPermissionDeniedMessage: string;
  microphonePermissionAlertSettingsButtonText: string;
  recordingMessageToHoldText: string;
  recordingMessageToReleaseText: string;
  conversationsHeaderTitle: string;
  screenshotHeaderTitle: string;
  chatsNoConversationsHeadlineText: string;
  doneButtonText: string;
  okButtonText: string;
  cancelButtonText: string;
  thankYouText: string;
  audio: string;
  video: string;
  image: string;
  chatsHeaderTitle: string;
  team: string;
  messageNotification: string;
  messagesNotificationAndOthers: string;

  // iOS only
  ollectingDataText: string;
}

interface Locale {
  arabic: string;
  chineseSimplified: string;
  chineseTraditional: string;
  czech: string;
  danish: string;
  english: string;
  french: string;
  german: string;
  italian: string;
  japanese: string;
  polish: string;
  portugueseBrazil: string;
  russian: string;
  spanish: string;
  swedish: string;
  turkish: string;
}

interface ColorTheme {
  light: string;
  dark: string;
}

interface invocationEvent {
  none: string;
  shake: string;
  screenshot: string;
  twoFingersSwipe: string;
  floatingButton: string;
}

interface BugReportingStatic {
  invocationMode: invocationMode;
  invocationOptions: invocationOptions;
  extendedBugReportMode: iextendedBugReportMode;
  invocationEvent: invocationEvent;
  promptOption: ipromptOption;
  setShakingThresholdForAndroid(shakingThreshold: number): void;
  setShakingThresholdForiPhone(shakingThreshold: number): void;
  setShakingThresholdForiPad(shakingThreshold: number): void;
  reportJSException(exception: any): void;
  onReportSubmitHandler(callBack: () => void): void;
  invoke(): void;
  invokeWithInvocationModeAndOptions(invocationMode: string, invocationOptions: string[]): void;
  setPromptOptionsEnabled(chat: boolean, bug: boolean, feedback: boolean): void;
  setInvocationOptions(invocationOptions: string[]): void;
  OnInvokeHandler(callBack: () => void): void;
  // onSDKDismissedHandler(callBack: (dismissType, reportType) => void): void;
  setExtendedBugReportMode(extendedBugReportMode: string): void;
}

interface ipromptOption {
  bug: string;
  chat: string;
  feedback: string;
}

interface iextendedBugReportMode {
  // Disable extended bug report mode
  disabled: string;
  // Enable extended bug report mode and make all additional fields required
  enabledWithRequiredFields: string;
  // Enable extended bug report mode and make all additional fields optional
  enabledWithOptionalFields: string;
}

interface invocationMode {
  NA: string;
  newBug: string;
  newFeedback: string;
  newChat: string;
  chatsList: string;
}

interface invocationOptions {
  emailFieldHidden: string;
  emailFieldOptional: string;
  commentFieldRequired: string;
  disablePostSendingDialog: string;
}

interface SurveysStatic {
  setAutoShowingEnabled(enable: boolean): void;
  showSurveyIfAvailable(): void;
  showSurvey(token: string): void;
  hasRespondedToSurvey(surveyToken: string, callBack: (hasResponded: boolean) => void): void;
  setShouldShowWelcomeScreen(enable: boolean): void;
  setThresholdForReshowingSurveyAfterDismiss(sessionCount: number, daysCount: number): void;
  onShowCallback(callBack: () => void): void;
  onDismissCallback(callBack: () => void): void;
}

interface FeatureRequestsStatic {
  show(): void;
  setEmailFieldRequired(isEmailFieldRequired: boolean, actionTypes: string[]): void;
}
