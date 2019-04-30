// Type definitions for instabug-reactnative 8.0
// Project: https://github.com/Instabug/instabug-reactnative#readme
// Definitions by: Peng Cao <https://github.com/pengcao1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const Instabug: InstabugStatic;
export type Instabug = InstabugStatic;
export type BugReporting = BugReportingStatic;
export default Instabug;

interface InstabugStatic {
    invocationEvent: InvocationEvent;
    colorTheme: ColorTheme;
    locale: Locale;
    strings: Strings;
    welcomeMessageMode: WelcomeMessageMode;
    startWithToken(token: string, event: string[]): void;
    setColorTheme(colorTheme: string): void;
    setPrimaryColor(color: number): void;
    setFloatingButtonEdge(): void;
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
    setPromptOptionsEnabled(chat: boolean, bug: boolean, feedback: boolean): void;
    setSurveysEnabled(enabled: boolean): void;
    setPostInvocationHandler(): void;
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
    // microphonePermissionAlertSettingsButtonText Instabug.microphonePermissionAlertSettingsButtonText,
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
    // Instabug.strings.collectingDataText
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

interface InvocationEvent {
    none: string;
    shake: string;
    screenshot: string;
    twoFingersSwipe: string;
    floatingButton: string;
}

interface BugReportingStatic {
    setShakingThresholdForAndroid(shakingThreshold: number): void;
    setShakingThresholdForiPhone(shakingThreshold: number): void;
    setShakingThresholdForiPad(shakingThreshold: number): void;
}
