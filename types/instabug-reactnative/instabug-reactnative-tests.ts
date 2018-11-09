import Instabug, { BugReporting, Surveys, FeatureRequests } from "instabug-reactnative";

Instabug.startWithToken("token: string", [""]);
Instabug.setColorTheme("colorTheme: string");
Instabug.setPrimaryColor(1);
Instabug.setFloatingButtonEdge(Instabug.floatingButtonEdge.left, 20);
Instabug.setLocale("locale: string");
Instabug.setStringToKey("key: string");
Instabug.setWelcomeMessageMode("welcomeMsg: string");
Instabug.identifyUserWithEmail("email: string", "name: string");
Instabug.setUserAttribute("key: string", "value: string");
Instabug.getUserAttribute("key: string", (attribute) => 1);
Instabug.getAllUserAttributes((allAttributes) => 1);
Instabug.removeUserAttribute("key: string");
Instabug.setUserData("key: string");
Instabug.logOut();
Instabug.logVerbose("info: string");
Instabug.logInfo("info: string");
Instabug.logDebug("info: string");
Instabug.logError("info: string");
Instabug.logWarn("info: string");
Instabug.setUserStepsEnabled(true);
Instabug.setAutoScreenRecordingEnabled(false);
Instabug.setAutoScreenRecordingMaxDuration(10000);
Instabug.setViewHierarchyEnabled(true);
Instabug.resetTags();
Instabug.getTags((tags) => 1);
Instabug.appendTags([""]);
Instabug.setSessionProfilerEnabled(false);
Instabug.setCrashReportingEnabled(true);
Instabug.setChatNotificationEnabled(false);
Instabug.getUnreadMessagesCount((count) => 1);
Instabug.setOnNewMessageHandler(() => 1);
Instabug.setSurveysEnabled(false);
Instabug.setPostInvocationHandler();
Instabug.setReproStepsMode("enabled");
Instabug.setVideoRecordingFloatingButtonPosition("postion");
Instabug.logUserEventWithName("name");
Instabug.logUserEventWithNameAndParams("name", {key: "key", value: "value"});
Instabug.setEnabledAttachmentTypes(true, true, true, true);

BugReporting.setPromptOptionsEnabled(true, true, true);
BugReporting.setShakingThresholdForAndroid(450);
BugReporting.setShakingThresholdForiPhone(450);
BugReporting.setShakingThresholdForiPad(450);
BugReporting.reportJSException("Exception");
BugReporting.onReportSubmitHandler(() => 1);
BugReporting.invoke();
BugReporting.invokeWithInvocationModeAndOptions("invocationMode", [
    "invocationOptions"
]);
BugReporting.setPromptOptionsEnabled(false, true, false);
BugReporting.setInvocationOptions(["invocationOptions"]);
BugReporting.OnInvokeHandler(() => 1);
BugReporting.setExtendedBugReportMode("");

Surveys.setAutoShowingEnabled(false);
Surveys.showSurveyIfAvailable();
Surveys.showSurvey("token: string");
Surveys.hasRespondedToSurvey("surveyToken: string", (hasResponded) => 1);
Surveys.setShouldShowWelcomeScreen(true);
Surveys.setThresholdForReshowingSurveyAfterDismiss(4, 5);
Surveys.onShowCallback(() => 1);
Surveys.onDismissCallback(() => 1);

FeatureRequests.show();
FeatureRequests.setEmailFieldRequired(true, ["actionTypes"]);
