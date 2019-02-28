// Type definitions for instabug-reactnative 8.0.26
// Project: https://github.com/Instabug/instabug-reactnative#readme
// Definitions by: Aly Ezz <https://github.com/alyezz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "instabug-reactnative" {
    
    module BugReporting {

      function setInvocationEvents(invocationEvents: invocationEvent[]): void;

      function invoke(): void;

      function setInvocationOptions(invocationOptions: invocationOptions[]): void;

      function invokeWithInvocationModeAndOptions(
        invocationMode: invocationMode,
        invocationOptions: invocationOptions[]
        ): void;
      
      function onInvokeHandler(preInvocationHandler: Function): void;

      function onReportSubmitHandler(preSendingHandler: Function): void;

      function onSDKDismissedHandler(postInvocationHandler: Function): void;

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

    module FeatureRequests {

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

    module Surveys {

      function showSurveyIfAvailable(): void;

      function setThresholdForReshowingSurveyAfterDismiss(
        sessionCount: number, 
        daysCount: number
        ): void;

      function getAvailableSurveys(availableSurveysCallback: Function): void;

      function setAutoShowingEnabled(autoShowingSurveysEnabled: boolean): void;

      function onShowCallback(willShowSurveyHandler: Function): void;

      function onDismissCallback(didDismissSurveyHandler: Function): void;
      
      function showSurvey(surveyToken: String): void;

      function hasRespondedToSurvey(
        surveyToken: String, 
        surveyTokenCallback: Function
        ): void;

      function setShouldShowWelcomeScreen(shouldShowWelcomeScreen: boolean): void;
    }

    function startWithToken(
      token: String, 
      invocationEvent: invocationEvent[]
      ): void;

    function invoke(): void;

    function invokeWithInvocationMode(invocationMode: invocationMode): void;

    function dismiss(): void;

    function setUserData(userData: String): void;

    function setAutoScreenRecordingEnabled(autoScreenRecordingEnabled: boolean): void;

    function setAutoScreenRecosetAutoScreenRecordingMaxDurationrdingEnabled(autoScreenRecordingMaxDuration: number): void;

    function IBGLog(log: String): void;

    function setUserStepsEnabled(isUserStepsEnabled: boolean): void;

    function setIBGLogPrintsToConsole(printsToConsole: boolean): void;

    function setCrashReportingEnabled(enableCrashReporter: boolean): void;

    function setPreSendingHandler(preSendingHandler: Function): void;

    function setDidSelectPromptOptionHandler(didSelectPromptOptionHandler: Function): void;

    function showSurveyWithToken(surveyToken: String): void;

    function hasRespondedToSurveyWithToken(
      surveyToken: String, 
      surveyTokenCallback: Function
      ): void;

    function setSessionProfilerEnabled(sessionProfilerEnabled: boolean): void;

    function setPreInvocationHandler(preInvocationHandler: Function): void;

    function setPostInvocationHandler(postInvocationHandler: Function): void;

    function showIntroMessage(): void;

    function setUserEmail(userEmail: String): void;

    function setUserName(userName: String): void;

    function setWillSkipScreenshotAnnotation(setWillSkipScreenshotAnnotation: boolean): void;

    function getUnreadMessagesCount(messageCountCallback: Function): void;

    function setInvocationEvent(invocationEvent: invocationEvent): void;

    function setPushNotificationsEnabled(isPushNotificationEnabled: boolean): void;

    function setEmailFieldRequired(isEmailFieldRequired: boolean): void;

    function setEmailFieldRequiredForActions(
      isEmailFieldRequired: boolean, 
      actionTypes: actionTypes
      ): void;

    function setCommentFieldRequired(isCommentFieldRequired: boolean): void;

    function setShakingThresholdForIPhone(
      iPhoneShakingThreshold: number, 
      iPadShakingThreshold: number
      ): void;

    function setShakingThresholdForiPhone(iPhoneShakingThreshold: number): void;

    function setShakingThresholdForiPad(iPadShakingThreshold: number): void;

    function setShakingThresholdForAndroid(androidThreshold: number): void;

    function setFloatingButtonEdge(
      floatingButtonEdge: number, 
      offsetFromTop: number
      ): void;

    function setLocale(locale: locale): void;

    function setIntroMessageEnabled(isIntroMessageEnabled: boolean): void;

    function setColorTheme(colorTheme: colorTheme): void;

    function setPrimaryColor(setPrimaryColor: String): void;
    
    function appendTags(tags: String[]): void;

    function resetTags(): void;

    function getTags(tagsCallback: Function): void;

    function setStringToKey(
      string: String, 
      key: String
      ): void;

    function setAttachmentTypesEnabled(
      screenshot: boolean, 
      extraScreenshot: boolean, 
      galleryImage: boolean, 
      voiceNote: boolean, 
      screenRecording: boolean
      ): void;

    function setEnabledAttachmentTypes(
      screenshot: boolean, 
      extraScreenshot: boolean, 
      galleryImage: boolean, 
      screenRecording: boolean
      ): void;

    function setChatNotificationEnabled(isChatNotificationEnabled: boolean): void;

    function setOnNewMessageHandler(onNewMessageHandler: Function): void;

    function isInstabugNotification(
      dict: any, 
      isInstabugNotificationCallback: Function
      ): void;

    function identifyUserWithEmail(
      email: String, 
      name: String
      ): void;

    function logOut(): void;

    function setReportCategories(...titles: String[]): void;

    function setExtendedBugReportMode(extendedBugReportMode: extendedBugReportMode): void;

    function logUserEventWithName(name: String): void;

    function logUserEventWithName(
      name: String, 
      params: any
      ): void;

    function logVerbose(message: String): void;

    function logInfo(message: String): void;

    function logDebug(message: String): void;

    function logError(message: String): void;

    function logWarn(message: String): void;

    function clearLogs(): void;

    function setReproStepsMode(reproStepsMode: reproStepsMode): void;

    function setUserAttribute(
      key: String, 
      value: String
      ): void;

    function getUserAttribute(
      key: String, 
      userAttributeCallback: Function)
      : void;

    function removeUserAttribute(key: String): void;

    function getAllUserAttributes(userAttributesCallback: Function): void;

    function clearAllUserAttributes(): void;

    function setViewHierarchyEnabled(viewHierarchyEnabled: boolean): void;

    function setSurveysEnabled(surveysEnabled: boolean): void;

    function showSurveysIfAvailable(): void;

    function setWillShowSurveyHandler(willShowSurveyHandler: Function): void;

    function setDidDismissSurveyHandler(didDismissSurveyHandler: Function): void;

    function setPromptOptionsEnabled(
      chat: boolean, 
      bug:boolean, 
      feedback:boolean
      ): void;

    function setDebugEnabled(isDebugEnabled: boolean): void;

    function enable(): void;

    function disable(): void;

    function isRunningLive(runningLiveCallBack: Function): void;

    function setSuccessDialogEnabled(enabled: boolean): void;

    function setEnableInAppNotificationSound(shouldPlaySound: boolean): void;

    function reportJSException(errorObject: any): void;

    function setVideoRecordingFloatingButtonPosition(position: IBGPosition): void;

    function setThresholdForReshowingSurveyAfterDismiss(
      sessionCount: number, 
      daysCount: number
      ): void;

    function setAutoShowingSurveysEnabled(autoShowingSurveysEnabled: boolean): void;

    function showFeatureRequests(): void;

    function setShouldShowSurveysWelcomeScreen(shouldShowWelcomeScreen: boolean): void;

    function showWelcomeMessage(welcomeMessageMode: welcomeMessageMode): void;

    function setWelcomeMessageMode(welcomeMessageMode: welcomeMessageMode): void;

    function addFileAttachment(
      filePath: String, 
      fileName: String
      ): void;

    function callPrivateApi(
      apiName: String, 
      param: any
      ): void;

    enum invocationEvent {
      none,
      shake,
      screenshot,
      twoFingersSwipe,
      floatingButton
   }

   enum reproStepsMode {
      enabled,
      disabled,
      enabledWithNoScreenshots
   }

   enum dismissType {
      submit,
      cancel,
      addAttachment
   }

   enum promptOption {
      bug,
      chat,
      feedback
   }

   enum reportType {
      bug,
      feedback
   }

   enum invocationMode {
      NA,
      newBug,
      newFeedback,
      newChat,
      chatsList
   }

   enum invocationOptions {
      invocationOptionsEmailFieldHidden,
      invocationOptionsEmailFieldOptional,
      invocationOptionsCommentFieldRequired,
      invocationOptionsDisablePostSendingDialog
   }

   enum extendedBugReportMode {
      enabledWithRequiredFields,
      enabledWithOptionalFields,
      disabled
   }

   enum locale {
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

    enum colorTheme {
      light,
      dark
   }
    
   enum floatingButtonEdge {
      left,
      right
   }

    enum IBGPosition {
      bottomRight,
      topRight,
      bottomLeft,
      topLeft
   }

   enum welcomeMessageMode {
      live,
      beta,
      disabled
   }

    enum actionTypes {
      allActions,
      reportBug,
      requestNewFeature,
      addCommentToFeature
   }
   
    enum strings {
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

  }
