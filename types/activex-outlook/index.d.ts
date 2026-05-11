/// <reference types="activex-interop" />
/// <reference types="activex-stdole" />
/// <reference types="activex-office" />

declare namespace Outlook {
    const enum OlAccountType {
        olExchange = 0,
        olHttp = 3,
        olImap = 1,
        olOtherAccount = 5,
        olPop3 = 2,
    }

    const enum OlActionCopyLike {
        olForward = 2,
        olReply = 0,
        olReplyAll = 1,
        olReplyFolder = 3,
        olRespond = 4,
    }

    const enum OlActionReplyStyle {
        olEmbedOriginalItem = 1,
        olIncludeOriginalText = 2,
        olIndentOriginalText = 3,
        olLinkOriginalItem = 4,
        olOmitOriginalText = 0,
        olReplyTickOriginalText = 1000,
        olUserPreference = 5,
    }

    const enum OlActionResponseStyle {
        olOpen = 0,
        olPrompt = 2,
        olSend = 1,
    }

    const enum OlActionShowOn {
        olDontShow = 0,
        olMenu = 1,
        olMenuAndToolbar = 2,
    }

    const enum OlAddressEntryUserType {
        olExchangeAgentAddressEntry = 3,
        olExchangeDistributionListAddressEntry = 1,
        olExchangeOrganizationAddressEntry = 4,
        olExchangePublicFolderAddressEntry = 2,
        olExchangeRemoteUserAddressEntry = 5,
        olExchangeUserAddressEntry = 0,
        olLdapAddressEntry = 20,
        olOtherAddressEntry = 40,
        olOutlookContactAddressEntry = 10,
        olOutlookDistributionListAddressEntry = 11,
        olSmtpAddressEntry = 30,
    }

    const enum OlAddressListType {
        olCustomAddressList = 4,
        olExchangeContainer = 1,
        olExchangeGlobalAddressList = 0,
        olOutlookAddressList = 2,
        olOutlookLdapAddressList = 3,
    }

    const enum OlAlign {
        olAlignCenter = 1,
        olAlignLeft = 0,
        olAlignRight = 2,
    }

    const enum OlAlignment {
        olAlignmentLeft = 0,
        olAlignmentRight = 1,
    }

    const enum OlAlwaysDeleteConversation {
        olAlwaysDelete = 1,
        olAlwaysDeleteUnsupported = 2,
        olDoNotDelete = 0,
    }

    const enum OlAppointmentCopyOptions {
        olCopyAsAccept = 2,
        olCreateAppointment = 1,
        olPromptUser = 0,
    }

    const enum OlAppointmentTimeField {
        olAppointmentTimeFieldEnd = 3,
        olAppointmentTimeFieldNone = 1,
        olAppointmentTimeFieldStart = 2,
    }

    const enum OlAttachmentBlockLevel {
        olAttachmentBlockLevelNone = 0,
        olAttachmentBlockLevelOpen = 1,
    }

    const enum OlAttachmentType {
        olByReference = 4,
        olByValue = 1,
        olEmbeddeditem = 5,
        olOLE = 6,
    }

    const enum OlAutoDiscoverConnectionMode {
        olAutoDiscoverConnectionExternal = 1,
        olAutoDiscoverConnectionInternal = 2,
        olAutoDiscoverConnectionInternalDomain = 3,
        olAutoDiscoverConnectionUnknown = 0,
    }

    const enum OlAutoPreview {
        olAutoPreviewAll = 0,
        olAutoPreviewNone = 2,
        olAutoPreviewUnread = 1,
    }

    const enum OlBackStyle {
        olBackStyleOpaque = 1,
        olBackStyleTransparent = 0,
    }

    const enum OlBodyFormat {
        olFormatHTML = 2,
        olFormatPlain = 1,
        olFormatRichText = 3,
        olFormatUnspecified = 0,
    }

    const enum OlBorderStyle {
        olBorderStyleNone = 0,
        olBorderStyleSingle = 1,
    }

    const enum OlBusinessCardType {
        olBusinessCardTypeInterConnect = 1,
        olBusinessCardTypeOutlook = 0,
    }

    const enum OlBusyStatus {
        olBusy = 2,
        olFree = 0,
        olOutOfOffice = 3,
        olTentative = 1,
    }

    const enum OlCalendarDetail {
        olFreeBusyAndSubject = 1,
        olFreeBusyOnly = 0,
        olFullDetails = 2,
    }

    const enum OlCalendarMailFormat {
        olCalendarMailFormatDailySchedule = 0,
        olCalendarMailFormatEventList = 1,
    }

    const enum OlCalendarViewMode {
        olCalendarView5DayWeek = 4,
        olCalendarViewDay = 0,
        olCalendarViewMonth = 2,
        olCalendarViewMultiDay = 3,
        olCalendarViewWeek = 1,
    }

    const enum OlCategoryColor {
        olCategoryColorBlack = 15,
        olCategoryColorBlue = 8,
        olCategoryColorDarkBlue = 23,
        olCategoryColorDarkGray = 14,
        olCategoryColorDarkGreen = 20,
        olCategoryColorDarkMaroon = 25,
        olCategoryColorDarkOlive = 22,
        olCategoryColorDarkOrange = 17,
        olCategoryColorDarkPeach = 18,
        olCategoryColorDarkPurple = 24,
        olCategoryColorDarkRed = 16,
        olCategoryColorDarkSteel = 12,
        olCategoryColorDarkTeal = 21,
        olCategoryColorDarkYellow = 19,
        olCategoryColorGray = 13,
        olCategoryColorGreen = 5,
        olCategoryColorMaroon = 10,
        olCategoryColorNone = 0,
        olCategoryColorOlive = 7,
        olCategoryColorOrange = 2,
        olCategoryColorPeach = 3,
        olCategoryColorPurple = 9,
        olCategoryColorRed = 1,
        olCategoryColorSteel = 11,
        olCategoryColorTeal = 6,
        olCategoryColorYellow = 4,
    }

    const enum OlCategoryShortcutKey {
        olCategoryShortcutKeyCtrlF10 = 9,
        olCategoryShortcutKeyCtrlF11 = 10,
        olCategoryShortcutKeyCtrlF12 = 11,
        olCategoryShortcutKeyCtrlF2 = 1,
        olCategoryShortcutKeyCtrlF3 = 2,
        olCategoryShortcutKeyCtrlF4 = 3,
        olCategoryShortcutKeyCtrlF5 = 4,
        olCategoryShortcutKeyCtrlF6 = 5,
        olCategoryShortcutKeyCtrlF7 = 6,
        olCategoryShortcutKeyCtrlF8 = 7,
        olCategoryShortcutKeyCtrlF9 = 8,
        olCategoryShortcutKeyNone = 0,
    }

    const enum OlColor {
        olAutoColor = 0,
        olColorAqua = 15,
        olColorBlack = 1,
        olColorBlue = 13,
        olColorFuchsia = 14,
        olColorGray = 8,
        olColorGreen = 3,
        olColorLime = 11,
        olColorMaroon = 2,
        olColorNavy = 5,
        olColorOlive = 4,
        olColorPurple = 6,
        olColorRed = 10,
        olColorSilver = 9,
        olColorTeal = 7,
        olColorWhite = 16,
        olColorYellow = 12,
    }

    const enum OlComboBoxStyle {
        olComboBoxStyleCombo = 0,
        olComboBoxStyleList = 2,
    }

    const enum OlContactPhoneNumber {
        olContactPhoneAssistant = 0,
        olContactPhoneBusiness = 1,
        olContactPhoneBusiness2 = 2,
        olContactPhoneBusinessFax = 3,
        olContactPhoneCallback = 4,
        olContactPhoneCar = 5,
        olContactPhoneCompany = 6,
        olContactPhoneHome = 7,
        olContactPhoneHome2 = 8,
        olContactPhoneHomeFax = 9,
        olContactPhoneISDN = 10,
        olContactPhoneMobile = 11,
        olContactPhoneOther = 12,
        olContactPhoneOtherFax = 13,
        olContactPhonePager = 14,
        olContactPhonePrimary = 15,
        olContactPhoneRadio = 16,
        olContactPhoneTelex = 17,
        olContactPhoneTTYTTD = 18,
    }

    const enum OlContextMenu {
        olAttachmentContextMenu = 3,
        olFolderContextMenu = 2,
        olItemContextMenu = 0,
        olShortcutContextMenu = 5,
        olStoreContextMenu = 4,
        olViewContextMenu = 1,
    }

    const enum OlDaysOfWeek {
        olFriday = 32,
        olMonday = 2,
        olSaturday = 64,
        olSunday = 1,
        olThursday = 16,
        olTuesday = 4,
        olWednesday = 8,
    }

    const enum OlDayWeekTimeScale {
        olTimeScale10Minutes = 2,
        olTimeScale15Minutes = 3,
        olTimeScale30Minutes = 4,
        olTimeScale5Minutes = 0,
        olTimeScale60Minutes = 5,
        olTimeScale6Minutes = 1,
    }

    const enum OlDefaultExpandCollapseSetting {
        olAllCollapsed = 1,
        olAllExpanded = 0,
        olLastViewed = 2,
    }

    const enum OlDefaultFolders {
        olFolderCalendar = 9,
        olFolderConflicts = 19,
        olFolderContacts = 10,
        olFolderDeletedItems = 3,
        olFolderDrafts = 16,
        olFolderInbox = 6,
        olFolderJournal = 11,
        olFolderJunk = 23,
        olFolderLocalFailures = 21,
        olFolderManagedEmail = 29,
        olFolderNotes = 12,
        olFolderOutbox = 4,
        olFolderRssFeeds = 25,
        olFolderSentMail = 5,
        olFolderServerFailures = 22,
        olFolderSuggestedContacts = 30,
        olFolderSyncIssues = 20,
        olFolderTasks = 13,
        olFolderToDo = 28,
        olPublicFoldersAllPublicFolders = 18,
    }

    const enum OlDefaultSelectNamesDisplayMode {
        olDefaultDelegates = 6,
        olDefaultMail = 1,
        olDefaultMeeting = 2,
        olDefaultMembers = 5,
        olDefaultPickRooms = 8,
        olDefaultSharingRequest = 4,
        olDefaultSingleName = 7,
        olDefaultTask = 3,
    }

    const enum OlDisplayType {
        olAgent = 3,
        olDistList = 1,
        olForum = 2,
        olOrganization = 4,
        olPrivateDistList = 5,
        olRemoteUser = 6,
        olUser = 0,
    }

    const enum OlDownloadState {
        olFullItem = 1,
        olHeaderOnly = 0,
    }

    const enum OlDragBehavior {
        olDragBehaviorDisabled = 0,
        olDragBehaviorEnabled = 1,
    }

    const enum OlEditorType {
        olEditorHTML = 2,
        olEditorRTF = 3,
        olEditorText = 1,
        olEditorWord = 4,
    }

    const enum OlEnterFieldBehavior {
        olEnterFieldBehaviorRecallSelection = 1,
        olEnterFieldBehaviorSelectAll = 0,
    }

    const enum OlExchangeConnectionMode {
        olCachedConnectedDrizzle = 600,
        olCachedConnectedFull = 700,
        olCachedConnectedHeaders = 500,
        olCachedDisconnected = 400,
        olCachedOffline = 200,
        olDisconnected = 300,
        olNoExchange = 0,
        olOffline = 100,
        olOnline = 800,
    }

    const enum OlExchangeStoreType {
        olAdditionalExchangeMailbox = 4,
        olExchangeMailbox = 1,
        olExchangePublicFolder = 2,
        olNotExchange = 3,
        olPrimaryExchangeMailbox = 0,
    }

    const enum OlFlagIcon {
        olBlueFlagIcon = 5,
        olGreenFlagIcon = 3,
        olNoFlagIcon = 0,
        olOrangeFlagIcon = 2,
        olPurpleFlagIcon = 1,
        olRedFlagIcon = 6,
        olYellowFlagIcon = 4,
    }

    const enum OlFlagStatus {
        olFlagComplete = 1,
        olFlagMarked = 2,
        olNoFlag = 0,
    }

    const enum OlFolderDisplayMode {
        olFolderDisplayFolderOnly = 1,
        olFolderDisplayNoNavigation = 2,
        olFolderDisplayNormal = 0,
    }

    const enum OlFormatCurrency {
        olFormatCurrencyDecimal = 1,
        olFormatCurrencyNonDecimal = 2,
    }

    const enum OlFormatDateTime {
        olFormatDateTimeBestFit = 17,
        olFormatDateTimeLongDate = 6,
        olFormatDateTimeLongDateReversed = 7,
        OlFormatDateTimeLongDayDate = 5,
        olFormatDateTimeLongDayDateTime = 1,
        olFormatDateTimeLongTime = 15,
        olFormatDateTimeShortDate = 8,
        olFormatDateTimeShortDateNumOnly = 9,
        olFormatDateTimeShortDateTime = 2,
        olFormatDateTimeShortDayDate = 13,
        olFormatDateTimeShortDayDateTime = 3,
        olFormatDateTimeShortDayMonth = 10,
        olFormatDateTimeShortDayMonthDateTime = 4,
        olFormatDateTimeShortMonthYear = 11,
        olFormatDateTimeShortMonthYearNumOnly = 12,
        olFormatDateTimeShortTime = 16,
    }

    const enum OlFormatDuration {
        olFormatDurationLong = 2,
        olFormatDurationLongBusiness = 4,
        olFormatDurationShort = 1,
        olFormatDurationShortBusiness = 3,
    }

    const enum OlFormatEnumeration {
        olFormatEnumBitmap = 1,
        olFormatEnumText = 2,
    }

    const enum OlFormatInteger {
        olFormatIntegerComputer1 = 2,
        olFormatIntegerComputer2 = 3,
        olFormatIntegerComputer3 = 4,
        olFormatIntegerPlain = 1,
    }

    const enum OlFormatKeywords {
        olFormatKeywordsText = 1,
    }

    const enum OlFormatNumber {
        olFormatNumber1Decimal = 3,
        olFormatNumber2Decimal = 4,
        olFormatNumberAllDigits = 1,
        olFormatNumberComputer1 = 6,
        olFormatNumberComputer2 = 7,
        olFormatNumberComputer3 = 8,
        olFormatNumberRaw = 9,
        olFormatNumberScientific = 5,
        olFormatNumberTruncated = 2,
    }

    const enum OlFormatPercent {
        olFormatPercent1Decimal = 2,
        olFormatPercent2Decimal = 3,
        olFormatPercentAllDigits = 4,
        olFormatPercentRounded = 1,
    }

    const enum OlFormatSmartFrom {
        olFormatSmartFromFromOnly = 2,
        olFormatSmartFromFromTo = 1,
    }

    const enum OlFormatText {
        olFormatTextText = 1,
    }

    const enum OlFormatYesNo {
        olFormatYesNoIcon = 4,
        olFormatYesNoOnOff = 2,
        olFormatYesNoTrueFalse = 3,
        olFormatYesNoYesNo = 1,
    }

    const enum OlFormRegionIcon {
        olFormRegionIconDefault = 1,
        olFormRegionIconEncrypted = 9,
        olFormRegionIconForwarded = 5,
        olFormRegionIconPage = 11,
        olFormRegionIconRead = 3,
        olFormRegionIconRecurring = 12,
        olFormRegionIconReplied = 4,
        olFormRegionIconSigned = 8,
        olFormRegionIconSubmitted = 7,
        olFormRegionIconUnread = 2,
        olFormRegionIconUnsent = 6,
        olFormRegionIconWindow = 10,
    }

    const enum OlFormRegionMode {
        olFormRegionCompose = 1,
        olFormRegionPreview = 2,
        olFormRegionRead = 0,
    }

    const enum OlFormRegionSize {
        olFormRegionTypeAdjoining = 1,
        olFormRegionTypeSeparate = 0,
    }

    const enum OlFormRegistry {
        olDefaultRegistry = 0,
        olFolderRegistry = 3,
        olOrganizationRegistry = 4,
        olPersonalRegistry = 2,
    }

    const enum OlGender {
        olFemale = 1,
        olMale = 2,
        olUnspecified = 0,
    }

    const enum OlGridLineStyle {
        olGridLineDashes = 3,
        olGridLineLargeDots = 2,
        olGridLineNone = 0,
        olGridLineSmallDots = 1,
        olGridLineSolid = 4,
    }

    const enum OlGroupType {
        olCustomFoldersGroup = 0,
        olFavoriteFoldersGroup = 4,
        olMyFoldersGroup = 1,
        olOtherFoldersGroup = 3,
        olPeopleFoldersGroup = 2,
        olReadOnlyGroup = 6,
        olRoomsGroup = 5,
    }

    const enum OlHorizontalLayout {
        olHorizontalLayoutAlignCenter = 1,
        olHorizontalLayoutAlignLeft = 0,
        olHorizontalLayoutAlignRight = 2,
        olHorizontalLayoutGrow = 3,
    }

    const enum OlIconViewPlacement {
        olIconAutoArrange = 2,
        olIconDoNotArrange = 0,
        olIconLineUp = 1,
        olIconSortAndAutoArrange = 3,
    }

    const enum OlIconViewType {
        olIconViewLarge = 0,
        olIconViewList = 2,
        olIconViewSmall = 1,
    }

    const enum OlImportance {
        olImportanceHigh = 2,
        olImportanceLow = 0,
        olImportanceNormal = 1,
    }

    const enum OlInspectorClose {
        olDiscard = 1,
        olPromptForSave = 2,
        olSave = 0,
    }

    const enum OlItemType {
        olAppointmentItem = 1,
        olContactItem = 2,
        olDistributionListItem = 7,
        olJournalItem = 4,
        olMailItem = 0,
        olMobileItemMMS = 12,
        olMobileItemSMS = 11,
        olNoteItem = 5,
        olPostItem = 6,
        olTaskItem = 3,
    }

    const enum OlJournalRecipientType {
        olAssociatedContact = 1,
    }

    const enum OlMailingAddress {
        olBusiness = 2,
        olHome = 1,
        olNone = 0,
        olOther = 3,
    }

    const enum OlMailRecipientType {
        olBCC = 3,
        olCC = 2,
        olOriginator = 0,
        olTo = 1,
    }

    const enum OlMarkInterval {
        olMarkComplete = 5,
        olMarkNextWeek = 3,
        olMarkNoDate = 4,
        olMarkThisWeek = 2,
        olMarkToday = 0,
        olMarkTomorrow = 1,
    }

    const enum OlMatchEntry {
        olMatchEntryComplete = 1,
        olMatchEntryFirstLetter = 0,
        olMatchEntryNone = 2,
    }

    const enum OlMeetingRecipientType {
        olOptional = 2,
        olOrganizer = 0,
        olRequired = 1,
        olResource = 3,
    }

    const enum OlMeetingResponse {
        olMeetingAccepted = 3,
        olMeetingDeclined = 4,
        olMeetingTentative = 2,
    }

    const enum OlMeetingStatus {
        olMeeting = 1,
        olMeetingCanceled = 5,
        olMeetingReceived = 3,
        olMeetingReceivedAndCanceled = 7,
        olNonMeeting = 0,
    }

    const enum OlMobileFormat {
        olMMS = 1,
        olSMS = 0,
    }

    const enum OlMouseButton {
        olMouseButtonLeft = 1,
        olMouseButtonMiddle = 4,
        olMouseButtonRight = 2,
    }

    const enum OlMousePointer {
        olMousePointerAppStarting = 13,
        olMousePointerArrow = 1,
        olMousePointerCross = 2,
        olMousePointerCustom = 99,
        olMousePointerDefault = 0,
        olMousePointerHelp = 14,
        olMousePointerHourGlass = 11,
        olMousePointerIBeam = 3,
        olMousePointerNoDrop = 12,
        olMousePointerSizeAll = 15,
        olMousePointerSizeNESW = 6,
        olMousePointerSizeNS = 7,
        olMousePointerSizeNWSE = 8,
        olMousePointerSizeWE = 9,
        olMousePointerUpArrow = 10,
    }

    const enum OlMultiLine {
        olAlwaysMultiLine = 2,
        olAlwaysSingleLine = 1,
        olWidthMultiLine = 0,
    }

    const enum OlMultiSelect {
        olMultiSelectExtended = 2,
        olMultiSelectMulti = 1,
        olMultiSelectSingle = 0,
    }

    const enum OlNavigationModuleType {
        olModuleCalendar = 1,
        olModuleContacts = 2,
        olModuleFolderList = 6,
        olModuleJournal = 4,
        olModuleMail = 0,
        olModuleNotes = 5,
        olModuleShortcuts = 7,
        olModuleSolutions = 8,
        olModuleTasks = 3,
    }

    const enum OlNetMeetingType {
        olExchangeConferencing = 2,
        olNetMeeting = 0,
        olNetShow = 1,
    }

    const enum OlNoteColor {
        olBlue = 0,
        olGreen = 1,
        olPink = 2,
        olWhite = 4,
        olYellow = 3,
    }

    const enum OlObjectClass {
        olAccount = 105,
        olAccountRuleCondition = 135,
        olAccounts = 106,
        olAction = 32,
        olActions = 33,
        olAddressEntries = 21,
        olAddressEntry = 8,
        olAddressList = 7,
        olAddressLists = 20,
        olAddressRuleCondition = 170,
        olApplication = 0,
        olAppointment = 26,
        olAssignToCategoryRuleAction = 122,
        olAttachment = 5,
        olAttachments = 18,
        olAttachmentSelection = 169,
        olAutoFormatRule = 147,
        olAutoFormatRules = 148,
        olCalendarModule = 159,
        olCalendarSharing = 151,
        olCategories = 153,
        olCategory = 152,
        olCategoryRuleCondition = 130,
        olClassBusinessCardView = 168,
        olClassCalendarView = 139,
        olClassCardView = 138,
        olClassIconView = 137,
        olClassNavigationPane = 155,
        olClassTableView = 136,
        olClassTimeLineView = 140,
        olClassTimeZone = 174,
        olClassTimeZones = 175,
        olColumn = 154,
        olColumnFormat = 149,
        olColumns = 150,
        olConflict = 102,
        olConflicts = 103,
        olContact = 40,
        olContactsModule = 160,
        olConversation = 178,
        olConversationHeader = 182,
        olDistributionList = 69,
        olDocument = 41,
        olException = 30,
        olExceptions = 29,
        olExchangeDistributionList = 111,
        olExchangeUser = 110,
        olExplorer = 34,
        olExplorers = 60,
        olFolder = 2,
        olFolders = 15,
        olFormDescription = 37,
        olFormNameRuleCondition = 131,
        olFormRegion = 129,
        olFromRssFeedRuleCondition = 173,
        olFromRuleCondition = 132,
        olImportanceRuleCondition = 128,
        olInspector = 35,
        olInspectors = 61,
        olItemProperties = 98,
        olItemProperty = 99,
        olItems = 16,
        olJournal = 42,
        olJournalModule = 162,
        olLink = 75,
        olLinks = 76,
        olMail = 43,
        olMailModule = 158,
        olMarkAsTaskRuleAction = 124,
        olMeetingCancellation = 54,
        olMeetingForwardNotification = 181,
        olMeetingRequest = 53,
        olMeetingResponseNegative = 55,
        olMeetingResponsePositive = 56,
        olMeetingResponseTentative = 57,
        olMobile = 176,
        olMoveOrCopyRuleAction = 118,
        olNamespace = 1,
        olNavigationFolder = 167,
        olNavigationFolders = 166,
        olNavigationGroup = 165,
        olNavigationGroups = 164,
        olNavigationModule = 157,
        olNavigationModules = 156,
        olNewItemAlertRuleAction = 125,
        olNote = 44,
        olNotesModule = 163,
        olOrderField = 144,
        olOrderFields = 145,
        olOutlookBarGroup = 66,
        olOutlookBarGroups = 65,
        olOutlookBarPane = 63,
        olOutlookBarShortcut = 68,
        olOutlookBarShortcuts = 67,
        olOutlookBarStorage = 64,
        olOutspace = 180,
        olPages = 36,
        olPanes = 62,
        olPlaySoundRuleAction = 123,
        olPost = 45,
        olPropertyAccessor = 112,
        olPropertyPages = 71,
        olPropertyPageSite = 70,
        olRecipient = 4,
        olRecipients = 17,
        olRecurrencePattern = 28,
        olReminder = 101,
        olReminders = 100,
        olRemote = 47,
        olReport = 46,
        olResults = 78,
        olRow = 121,
        olRule = 115,
        olRuleAction = 117,
        olRuleActions = 116,
        olRuleCondition = 127,
        olRuleConditions = 126,
        olRules = 114,
        olSearch = 77,
        olSelection = 74,
        olSelectNamesDialog = 109,
        olSenderInAddressListRuleCondition = 133,
        olSendRuleAction = 119,
        olSharing = 104,
        olSimpleItems = 179,
        olSolutionsModule = 177,
        olStorageItem = 113,
        olStore = 107,
        olStores = 108,
        olSyncObject = 72,
        olSyncObjects = 73,
        olTable = 120,
        olTask = 48,
        olTaskRequest = 49,
        olTaskRequestAccept = 51,
        olTaskRequestDecline = 52,
        olTaskRequestUpdate = 50,
        olTasksModule = 161,
        olTextRuleCondition = 134,
        olUserDefinedProperties = 172,
        olUserDefinedProperty = 171,
        olUserProperties = 38,
        olUserProperty = 39,
        olView = 80,
        olViewField = 142,
        olViewFields = 141,
        olViewFont = 146,
        olViews = 79,
    }

    const enum OlOfficeDocItemsType {
        olExcelWorkSheetItem = 8,
        olPowerPointShowItem = 10,
        olWordDocumentItem = 9,
    }

    const enum OlOutlookBarViewType {
        olLargeIcon = 0,
        olSmallIcon = 1,
    }

    const enum OlPageType {
        olPageTypePlanner = 0,
        olPageTypeTracker = 1,
    }

    const enum OlPane {
        olFolderList = 2,
        olNavigationPane = 4,
        olOutlookBar = 1,
        olPreview = 3,
        olToDoBar = 5,
    }

    const enum OlPermission {
        olDoNotForward = 1,
        olPermissionTemplate = 2,
        olUnrestricted = 0,
    }

    const enum OlPermissionService {
        olPassport = 2,
        olUnknown = 0,
        olWindows = 1,
    }

    const enum OlPictureAlignment {
        olPictureAlignmentLeft = 0,
        olPictureAlignmentTop = 1,
    }

    const enum OlRecipientSelectors {
        olShowNone = 0,
        olShowTo = 1,
        olShowToCc = 2,
        olShowToCcBcc = 3,
    }

    const enum OlRecurrenceState {
        olApptException = 3,
        olApptMaster = 1,
        olApptNotRecurring = 0,
        olApptOccurrence = 2,
    }

    const enum OlRecurrenceType {
        olRecursDaily = 0,
        olRecursMonthly = 2,
        olRecursMonthNth = 3,
        olRecursWeekly = 1,
        olRecursYearly = 5,
        olRecursYearNth = 6,
    }

    const enum OlReferenceType {
        olStrong = 1,
        olWeak = 0,
    }

    const enum OlRemoteStatus {
        olMarkedForCopy = 3,
        olMarkedForDelete = 4,
        olMarkedForDownload = 2,
        olRemoteStatusNone = 0,
        olUnMarked = 1,
    }

    const enum OlResponseStatus {
        olResponseAccepted = 3,
        olResponseDeclined = 4,
        olResponseNone = 0,
        olResponseNotResponded = 5,
        olResponseOrganized = 1,
        olResponseTentative = 2,
    }

    const enum OlRuleActionType {
        olRuleActionAssignToCategory = 2,
        olRuleActionCcMessage = 27,
        olRuleActionClearCategories = 30,
        olRuleActionCopyToFolder = 5,
        olRuleActionCustomAction = 22,
        olRuleActionDefer = 28,
        olRuleActionDelete = 3,
        olRuleActionDeletePermanently = 4,
        olRuleActionDesktopAlert = 24,
        olRuleActionFlagClear = 13,
        olRuleActionFlagColor = 12,
        olRuleActionFlagForActionInDays = 11,
        olRuleActionForward = 6,
        olRuleActionForwardAsAttachment = 7,
        olRuleActionImportance = 14,
        olRuleActionMarkAsTask = 29,
        olRuleActionMarkRead = 19,
        olRuleActionMoveToFolder = 1,
        olRuleActionNewItemAlert = 23,
        olRuleActionNotifyDelivery = 26,
        olRuleActionNotifyRead = 25,
        olRuleActionPlaySound = 17,
        olRuleActionPrint = 16,
        olRuleActionRedirect = 8,
        olRuleActionRunScript = 20,
        olRuleActionSensitivity = 15,
        olRuleActionServerReply = 9,
        olRuleActionStartApplication = 18,
        olRuleActionStop = 21,
        olRuleActionTemplate = 10,
        olRuleActionUnknown = 0,
    }

    const enum OlRuleConditionType {
        olConditionAccount = 3,
        olConditionAnyCategory = 29,
        olConditionBody = 13,
        olConditionBodyOrSubject = 14,
        olConditionCategory = 18,
        olConditionCc = 9,
        olConditionDateRange = 22,
        olConditionFlaggedForAction = 8,
        olConditionFormName = 23,
        olConditionFrom = 1,
        olConditionFromAnyRssFeed = 31,
        olConditionFromRssFeed = 30,
        olConditionHasAttachment = 20,
        olConditionImportance = 6,
        olConditionLocalMachineOnly = 27,
        olConditionMeetingInviteOrUpdate = 26,
        olConditionMessageHeader = 15,
        olConditionNotTo = 11,
        olConditionOnlyToMe = 4,
        olConditionOOF = 19,
        olConditionOtherMachine = 28,
        olConditionProperty = 24,
        olConditionRecipientAddress = 16,
        olConditionSenderAddress = 17,
        olConditionSenderInAddressBook = 25,
        olConditionSensitivity = 7,
        olConditionSentTo = 12,
        olConditionSizeRange = 21,
        olConditionSubject = 2,
        olConditionTo = 5,
        olConditionToOrCc = 10,
        olConditionUnknown = 0,
    }

    const enum OlRuleExecuteOption {
        olRuleExecuteAllMessages = 0,
        olRuleExecuteReadMessages = 1,
        olRuleExecuteUnreadMessages = 2,
    }

    const enum OlRuleType {
        olRuleReceive = 0,
        olRuleSend = 1,
    }

    const enum OlSaveAsType {
        olDoc = 4,
        olHTML = 5,
        olICal = 8,
        olMHTML = 10,
        olMSG = 3,
        olMSGUnicode = 9,
        olRTF = 1,
        olTemplate = 2,
        olTXT = 0,
        olVCal = 7,
        olVCard = 6,
    }

    const enum OlScrollBars {
        olScrollBarsBoth = 3,
        olScrollBarsHorizontal = 1,
        olScrollBarsNone = 0,
        olScrollBarsVertical = 2,
    }

    const enum OlSearchScope {
        olSearchScopeAllFolders = 1,
        olSearchScopeAllOutlookItems = 2,
        olSearchScopeCurrentFolder = 0,
        olSearchScopeSubfolders = 3,
    }

    const enum OlSelectionContents {
        olConversationHeaders = 1,
    }

    const enum OlSelectionLocation {
        olAttachmentWell = 4,
        olDailyTaskList = 3,
        olToDoBarAppointmentList = 2,
        olToDoBarTaskList = 1,
        olViewList = 0,
    }

    const enum OlSensitivity {
        olConfidential = 3,
        olNormal = 0,
        olPersonal = 1,
        olPrivate = 2,
    }

    const enum OlSharingMsgType {
        olSharingMsgTypeInvite = 2,
        olSharingMsgTypeInviteAndRequest = 3,
        olSharingMsgTypeRequest = 1,
        olSharingMsgTypeResponseAllow = 4,
        olSharingMsgTypeResponseDeny = 5,
        olSharingMsgTypeUnknown = 0,
    }

    const enum OlSharingProvider {
        olProviderExchange = 1,
        olProviderFederate = 7,
        olProviderICal = 4,
        olProviderPubCal = 3,
        olProviderRSS = 6,
        olProviderSharePoint = 5,
        olProviderUnknown = 0,
        olProviderWebCal = 2,
    }

    const enum OlShiftState {
        olShiftStateAltMask = 4,
        olShiftStateCtrlMask = 2,
        olShiftStateShiftMask = 1,
    }

    const enum OlShowItemCount {
        olNoItemCount = 0,
        olShowTotalItemCount = 2,
        olShowUnreadItemCount = 1,
    }

    const enum OlSolutionScope {
        olHideInDefaultModules = 0,
        olShowInDefaultModules = 1,
    }

    const enum OlSortOrder {
        olAscending = 1,
        olDescending = 2,
        olSortNone = 0,
    }

    const enum OlSpecialFolders {
        olSpecialFolderAllTasks = 0,
        olSpecialFolderReminders = 1,
    }

    const enum OlStorageIdentifierType {
        olIdentifyByEntryID = 1,
        olIdentifyByMessageClass = 2,
        olIdentifyBySubject = 0,
    }

    const enum OlStoreType {
        olStoreANSI = 3,
        olStoreDefault = 1,
        olStoreUnicode = 2,
    }

    const enum OlSyncState {
        olSyncStarted = 1,
        olSyncStopped = 0,
    }

    const enum OlTableContents {
        olHiddenItems = 1,
        olUserItems = 0,
    }

    const enum OlTaskDelegationState {
        olTaskDelegationAccepted = 2,
        olTaskDelegationDeclined = 3,
        olTaskDelegationUnknown = 1,
        olTaskNotDelegated = 0,
    }

    const enum OlTaskOwnership {
        olDelegatedTask = 1,
        olNewTask = 0,
        olOwnTask = 2,
    }

    const enum OlTaskRecipientType {
        olFinalStatus = 3,
        olUpdate = 2,
    }

    const enum OlTaskResponse {
        olTaskAccept = 2,
        olTaskAssign = 1,
        olTaskDecline = 3,
        olTaskSimple = 0,
    }

    const enum OlTaskStatus {
        olTaskComplete = 2,
        olTaskDeferred = 4,
        olTaskInProgress = 1,
        olTaskNotStarted = 0,
        olTaskWaiting = 3,
    }

    const enum OlTextAlign {
        olTextAlignCenter = 2,
        olTextAlignLeft = 1,
        olTextAlignRight = 3,
    }

    const enum OlTimelineViewMode {
        olTimelineViewDay = 0,
        olTimelineViewMonth = 2,
        olTimelineViewWeek = 1,
    }

    const enum OlTimeStyle {
        olTimeStyleShortDuration = 4,
        olTimeStyleTimeDuration = 1,
        olTimeStyleTimeOnly = 0,
    }

    const enum OlTrackingStatus {
        olTrackingDelivered = 1,
        olTrackingNone = 0,
        olTrackingNotDelivered = 2,
        olTrackingNotRead = 3,
        olTrackingRead = 6,
        olTrackingRecallFailure = 4,
        olTrackingRecallSuccess = 5,
        olTrackingReplied = 7,
    }

    const enum OlUserPropertyType {
        olCombination = 19,
        olCurrency = 14,
        olDateTime = 5,
        olDuration = 7,
        olEnumeration = 21,
        olFormula = 18,
        olInteger = 20,
        olKeywords = 11,
        olNumber = 3,
        olOutlookInternal = 0,
        olPercent = 12,
        olSmartFrom = 22,
        olText = 1,
        olYesNo = 6,
    }

    const enum OlVerticalLayout {
        olVerticalLayoutAlignBottom = 2,
        olVerticalLayoutAlignMiddle = 1,
        olVerticalLayoutAlignTop = 0,
        olVerticalLayoutGrow = 3,
    }

    const enum OlViewSaveOption {
        olViewSaveOptionAllFoldersOfType = 2,
        olViewSaveOptionThisFolderEveryone = 0,
        olViewSaveOptionThisFolderOnlyMe = 1,
    }

    const enum OlViewType {
        olBusinessCardView = 5,
        olCalendarView = 2,
        olCardView = 1,
        olDailyTaskListView = 6,
        olIconView = 3,
        olTableView = 0,
        olTimelineView = 4,
    }

    const enum OlWindowState {
        olMaximized = 0,
        olMinimized = 1,
        olNormalWindow = 2,
    }

    class _DocSiteControl {
        private "Outlook._DocSiteControl_typekey": _DocSiteControl;
        private constructor();
        ReadOnly: number;
        SuppressAttachments: number;
    }

    class _RecipientControl {
        private "Outlook._RecipientControl_typekey": _RecipientControl;
        private constructor();
        BackColor: number;
        Enabled: number;
        Font: any;
        ForeColor: number;
        ReadOnly: number;
        SpecialEffect: number;
    }

    class Account {
        private "Outlook.Account_typekey": Account;
        private constructor();
        readonly AccountType: OlAccountType;
        readonly Application: Application;
        readonly AutoDiscoverConnectionMode: OlAutoDiscoverConnectionMode;
        readonly AutoDiscoverXml: string;
        readonly Class: OlObjectClass;
        readonly CurrentUser: Recipient;
        readonly DeliveryStore: Store;
        readonly DisplayName: string;
        readonly ExchangeConnectionMode: OlExchangeConnectionMode;
        readonly ExchangeMailboxServerName: string;
        readonly ExchangeMailboxServerVersion: string;
        GetAddressEntryFromID(ID: string): AddressEntry;
        GetRecipientFromID(EntryID: string): Recipient;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly SmtpAddress: string;
        readonly UserName: string;
    }

    class AccountRuleCondition {
        private "Outlook.AccountRuleCondition_typekey": AccountRuleCondition;
        private constructor();
        Account: Account;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Accounts {
        private "Outlook.Accounts_typekey": Accounts;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Account;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class AccountSelector {
        private "Outlook.AccountSelector_typekey": AccountSelector;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Parent: any;
        readonly SelectedAccount: Account;
        readonly Session: NameSpace;
    }

    class Action {
        private "Outlook.Action_typekey": Action;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        CopyLike: OlActionCopyLike;
        Delete(): void;
        Enabled: boolean;
        Execute(): any;
        MessageClass: string;
        Name: string;
        readonly Parent: any;
        Prefix: string;
        ReplyStyle: OlActionReplyStyle;
        ResponseStyle: OlActionResponseStyle;
        readonly Session: NameSpace;
        ShowOn: OlActionShowOn;
    }

    class Actions {
        private "Outlook.Actions_typekey": Actions;
        private constructor();
        Add(): Action;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Action;
        readonly Parent: any;
        Remove(Index: number): void;
        readonly Session: NameSpace;
    }

    class AddressEntries {
        private "Outlook.AddressEntries_typekey": AddressEntries;
        private constructor();
        Add(Type: string, Name?: any, Address?: any): AddressEntry;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        GetFirst(): AddressEntry;
        GetLast(): AddressEntry;
        GetNext(): AddressEntry;
        GetPrevious(): AddressEntry;
        Item(Index: any): AddressEntry;
        readonly Parent: any;
        readonly RawTable: any;
        readonly Session: NameSpace;
        Sort(Property?: any, Order?: any): void;
    }

    class AddressEntry {
        private "Outlook.AddressEntry_typekey": AddressEntry;
        private constructor();
        Address: string;
        readonly AddressEntryUserType: OlAddressEntryUserType;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Delete(): void;
        Details(HWnd?: any): void;
        readonly DisplayType: OlDisplayType;
        GetContact(): ContactItem;
        GetExchangeDistributionList(): ExchangeDistributionList;
        GetExchangeUser(): ExchangeUser;
        GetFreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
        readonly ID: string;
        readonly Manager: AddressEntry;
        MAPIOBJECT: any;
        readonly Members: AddressEntries;
        Name: string;
        readonly Parent: any;
        readonly PropertyAccessor: PropertyAccessor;
        readonly Session: NameSpace;
        Type: string;
        Update(MakePermanent?: any, Refresh?: any): void;
        UpdateFreeBusy(): void;
    }

    class AddressList {
        private "Outlook.AddressList_typekey": AddressList;
        private constructor();
        readonly AddressEntries: AddressEntries;
        readonly AddressListType: OlAddressListType;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        GetContactsFolder(): Folder;
        readonly ID: string;
        readonly Index: number;
        readonly IsInitialAddressList: boolean;
        readonly IsReadOnly: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly PropertyAccessor: PropertyAccessor;
        readonly ResolutionOrder: number;
        readonly Session: NameSpace;
    }

    class AddressLists {
        private "Outlook.AddressLists_typekey": AddressLists;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): AddressList;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class AddressRuleCondition {
        private "Outlook.AddressRuleCondition_typekey": AddressRuleCondition;
        private constructor();
        Address: any;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Application {
        private "Outlook.Application_typekey": Application;
        private constructor();
        ActiveExplorer(): Explorer;
        ActiveInspector(): Inspector;
        ActiveWindow(): any;
        AdvancedSearch(Scope: string, Filter?: any, SearchSubFolders?: any, Tag?: any): Search;
        readonly AnswerWizard: Office.AnswerWizard;
        readonly Application: Application;
        readonly Assistance: Office.IAssistance;
        readonly Assistant: Office.Assistant;
        readonly Class: OlObjectClass;
        readonly COMAddIns: Office.COMAddIns;
        CopyFile(FilePath: string, DestFolderPath: string): any;
        CreateItem(ItemType: OlItemType.olAppointmentItem): AppointmentItem;
        CreateItem(ItemType: OlItemType.olContactItem): ContactItem;
        CreateItem(ItemType: OlItemType.olDistributionListItem): DistListItem;
        CreateItem(ItemType: OlItemType.olJournalItem): JournalItem;
        CreateItem(ItemType: OlItemType.olMailItem): MailItem;
        CreateItem(ItemType: OlItemType.olMobileItemMMS | OlItemType.olMobileItemSMS): MobileItem;
        CreateItem(ItemType: OlItemType.olNoteItem): NoteItem;
        CreateItem(ItemType: OlItemType.olPostItem): PostItem;
        CreateItem(ItemType: OlItemType.olTaskItem): TaskItem;
        CreateItemFromTemplate(TemplatePath: string, InFolder?: any): any;
        CreateObject(ObjectName: string): any;
        readonly DefaultProfileName: string;
        readonly Explorers: Explorers;
        FeatureInstall: Office.MsoFeatureInstall;
        GetNamespace(Type: string): NameSpace;
        GetNewNickNames(pvar: any): void;
        GetObjectReference(Item: any, ReferenceType: OlReferenceType): any;
        readonly Inspectors: Inspectors;
        IsSearchSynchronous(LookInFolders: string): boolean;
        readonly IsTrusted: boolean;
        readonly LanguageSettings: Office.LanguageSettings;
        readonly Name: string;
        readonly Parent: any;
        readonly PickerDialog: Office.PickerDialog;
        readonly ProductCode: string;
        Quit(): void;
        RefreshFormRegionDefinition(RegionName: string): void;
        readonly Reminders: Reminders;
        readonly Session: NameSpace;
        readonly TimeZones: TimeZones;
        readonly Version: string;
    }

    class AppointmentItem {
        private "Outlook.AppointmentItem_typekey": AppointmentItem;
        private constructor();
        readonly Actions: Actions;
        AllDayEvent: boolean;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        BusyStatus: OlBusyStatus;
        Categories: string;
        readonly Class: OlObjectClass;
        ClearRecurrencePattern(): void;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        ConferenceServerAllowExternal: boolean;
        ConferenceServerPassword: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        CopyTo(DestinationFolder: Folder, CopyOptions: OlAppointmentCopyOptions): AppointmentItem;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        Duration: number;
        End: VarDate;
        EndInEndTimeZone: VarDate;
        EndTimeZone: TimeZone;
        EndUTC: VarDate;
        readonly EntryID: string;
        ForceUpdateToAllAttendees: boolean;
        readonly FormDescription: FormDescription;
        ForwardAsVcal(): MailItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        GetOrganizer(): AddressEntry;
        GetRecurrencePattern(): RecurrencePattern;
        readonly GlobalAppointmentID: string;
        Importance: OlImportance;
        InternetCodepage: number;
        readonly IsConflict: boolean;
        IsOnlineMeeting: boolean;
        readonly IsRecurring: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        Location: string;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MeetingStatus: OlMeetingStatus;
        readonly MeetingWorkspaceURL: string;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NetMeetingAutoStart: boolean;
        NetMeetingDocPathName: string;
        NetMeetingOrganizerAlias: string;
        NetMeetingServer: string;
        NetMeetingType: OlNetMeetingType;
        NetShowURL: string;
        NoAging: boolean;
        OptionalAttendees: string;
        readonly Organizer: string;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        readonly Recipients: Recipients;
        readonly RecurrenceState: OlRecurrenceState;
        ReminderMinutesBeforeStart: number;
        ReminderOverrideDefault: boolean;
        ReminderPlaySound: boolean;
        ReminderSet: boolean;
        ReminderSoundFile: string;
        ReplyTime: VarDate;
        RequiredAttendees: string;
        Resources: string;
        Respond(Response: OlMeetingResponse, fNoUI?: any, fAdditionalTextDialog?: any): MeetingItem;
        ResponseRequested: boolean;
        readonly ResponseStatus: OlResponseStatus;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Send(): void;
        SendUsingAccount: Account;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Start: VarDate;
        StartInStartTimeZone: VarDate;
        StartTimeZone: TimeZone;
        StartUTC: VarDate;
        Subject: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class AssignToCategoryRuleAction {
        private "Outlook.AssignToCategoryRuleAction_typekey": AssignToCategoryRuleAction;
        private constructor();
        readonly ActionType: OlRuleActionType;
        readonly Application: Application;
        Categories: any;
        readonly Class: OlObjectClass;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Attachment {
        private "Outlook.Attachment_typekey": Attachment;
        private constructor();
        readonly Application: Application;
        readonly BlockLevel: OlAttachmentBlockLevel;
        readonly Class: OlObjectClass;
        Delete(): void;
        DisplayName: string;
        readonly FileName: string;
        GetTemporaryFilePath(): string;
        readonly Index: number;
        readonly MAPIOBJECT: any;
        readonly Parent: any;
        readonly PathName: string;
        Position: number;
        readonly PropertyAccessor: PropertyAccessor;
        SaveAsFile(Path: string): void;
        readonly Session: NameSpace;
        readonly Size: number;
        readonly Type: OlAttachmentType;
    }

    class Attachments {
        private "Outlook.Attachments_typekey": Attachments;
        private constructor();
        Add(Source: any, Type?: any, Position?: any, DisplayName?: any): Attachment;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Attachment;
        readonly Parent: any;
        Remove(Index: number): void;
        readonly Session: NameSpace;
    }

    class AttachmentSelection {
        private "Outlook.AttachmentSelection_typekey": AttachmentSelection;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        GetSelection(SelectionContents: OlSelectionContents): Selection;
        Item(Index: any): Attachment;
        readonly Location: OlSelectionLocation;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class AutoFormatRule {
        private "Outlook.AutoFormatRule_typekey": AutoFormatRule;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Enabled: boolean;
        Filter: string;
        Font: ViewFont;
        Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly Standard: boolean;
    }

    class AutoFormatRules {
        private "Outlook.AutoFormatRules_typekey": AutoFormatRules;
        private constructor();
        Add(Name: string): AutoFormatRule;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Insert(Name: string, Index: any): AutoFormatRule;
        Item(Index: any): AutoFormatRule;
        readonly Parent: any;
        Remove(Index: any): void;
        RemoveAll(): void;
        Save(): void;
        readonly Session: NameSpace;
    }

    class BusinessCardView {
        private "Outlook.BusinessCardView_typekey": BusinessCardView;
        private constructor();
        readonly Application: Application;
        Apply(): void;
        CardSize: number;
        readonly Class: OlObjectClass;
        Copy(Name: string, SaveOption: OlViewSaveOption): View;
        Delete(): void;
        Filter: string;
        GoToDate(Date: VarDate): void;
        readonly HeadingsFont: ViewFont;
        Language: string;
        LockUserChanges: boolean;
        Name: string;
        readonly Parent: any;
        Reset(): void;
        Save(): void;
        readonly SaveOption: OlViewSaveOption;
        readonly Session: NameSpace;
        readonly SortFields: OrderFields;
        readonly Standard: boolean;
        readonly ViewType: OlViewType;
        XML: string;
    }

    class CalendarModule {
        private "Outlook.CalendarModule_typekey": CalendarModule;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly NavigationGroups: NavigationGroups;
        readonly NavigationModuleType: OlNavigationModuleType;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class CalendarSharing {
        private "Outlook.CalendarSharing_typekey": CalendarSharing;
        private constructor();
        readonly Application: Application;
        CalendarDetail: OlCalendarDetail;
        readonly Class: OlObjectClass;
        EndDate: VarDate;
        readonly Folder: Folder;
        ForwardAsICal(MailFormat: OlCalendarMailFormat): MailItem;
        IncludeAttachments: boolean;
        IncludePrivateDetails: boolean;
        IncludeWholeCalendar: boolean;
        readonly Parent: any;
        RestrictToWorkingHours: boolean;
        SaveAsICal(Path: string): void;
        readonly Session: NameSpace;
        StartDate: VarDate;
    }

    class CalendarView {
        private "Outlook.CalendarView_typekey": CalendarView;
        private constructor();
        readonly Application: Application;
        Apply(): void;
        readonly AutoFormatRules: AutoFormatRules;
        BoldDatesWithItems: boolean;
        BoldSubjects: boolean;
        CalendarViewMode: OlCalendarViewMode;
        readonly Class: OlObjectClass;
        Copy(Name: string, SaveOption: OlViewSaveOption): View;
        DaysInMultiDayMode: number;
        readonly DayWeekFont: ViewFont;
        readonly DayWeekTimeFont: ViewFont;
        DayWeekTimeScale: OlDayWeekTimeScale;
        Delete(): void;
        readonly DisplayedDates: any;
        EndField: string;
        Filter: string;
        GoToDate(Date: VarDate): void;
        Language: string;
        LockUserChanges: boolean;
        readonly MonthFont: ViewFont;
        MonthShowEndTime: boolean;
        Name: string;
        readonly Parent: any;
        Reset(): void;
        Save(): void;
        readonly SaveOption: OlViewSaveOption;
        readonly SelectedEndTime: VarDate;
        readonly SelectedStartTime: VarDate;
        readonly Session: NameSpace;
        readonly Standard: boolean;
        StartField: string;
        readonly ViewType: OlViewType;
        XML: string;
    }

    class CardView {
        private "Outlook.CardView_typekey": CardView;
        private constructor();
        AllowInCellEditing: boolean;
        readonly Application: Application;
        Apply(): void;
        readonly AutoFormatRules: AutoFormatRules;
        readonly BodyFont: ViewFont;
        readonly Class: OlObjectClass;
        Copy(Name: string, SaveOption: OlViewSaveOption): View;
        Delete(): void;
        Filter: string;
        GoToDate(Date: VarDate): void;
        readonly HeadingsFont: ViewFont;
        Language: string;
        LockUserChanges: boolean;
        MultiLineFieldHeight: number;
        Name: string;
        readonly Parent: any;
        Reset(): void;
        Save(): void;
        readonly SaveOption: OlViewSaveOption;
        readonly Session: NameSpace;
        ShowEmptyFields: boolean;
        readonly SortFields: OrderFields;
        readonly Standard: boolean;
        readonly ViewFields: ViewFields;
        readonly ViewType: OlViewType;
        Width: number;
        XML: string;
    }

    class Categories {
        private "Outlook.Categories_typekey": Categories;
        private constructor();
        Add(Name: string, Color?: any, ShortcutKey?: any): Category;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Category;
        readonly Parent: any;
        Remove(Index: any): void;
        readonly Session: NameSpace;
    }

    class Category {
        private "Outlook.Category_typekey": Category;
        private constructor();
        readonly Application: Application;
        readonly CategoryBorderColor: stdole.OLE_COLOR;
        readonly CategoryGradientBottomColor: stdole.OLE_COLOR;
        readonly CategoryGradientTopColor: stdole.OLE_COLOR;
        readonly CategoryID: string;
        readonly Class: OlObjectClass;
        Color: OlCategoryColor;
        Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        ShortcutKey: OlCategoryShortcutKey;
    }

    class CategoryRuleCondition {
        private "Outlook.CategoryRuleCondition_typekey": CategoryRuleCondition;
        private constructor();
        readonly Application: Application;
        Categories: any;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Column {
        private "Outlook.Column_typekey": Column;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class ColumnFormat {
        private "Outlook.ColumnFormat_typekey": ColumnFormat;
        private constructor();
        Align: OlAlign;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        FieldFormat: number;
        readonly FieldType: OlUserPropertyType;
        Label: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        Width: number;
    }

    class Columns {
        private "Outlook.Columns_typekey": Columns;
        private constructor();
        Add(Name: string): Column;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Column;
        readonly Parent: any;
        Remove(Index: any): void;
        RemoveAll(): void;
        readonly Session: NameSpace;
    }

    class Conflict {
        private "Outlook.Conflict_typekey": Conflict;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Item: any;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly Type: OlObjectClass;
    }

    class Conflicts {
        private "Outlook.Conflicts_typekey": Conflicts;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        GetFirst(): Conflict;
        GetLast(): Conflict;
        GetNext(): Conflict;
        GetPrevious(): Conflict;
        Item(Index: any): Conflict;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class ContactItem {
        private "Outlook.ContactItem_typekey": ContactItem;
        private constructor();
        Account: string;
        readonly Actions: Actions;
        AddBusinessCardLogoPicture(Path: string): void;
        AddPicture(Path: string): void;
        Anniversary: VarDate;
        readonly Application: Application;
        AssistantName: string;
        AssistantTelephoneNumber: string;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Birthday: VarDate;
        Body: string;
        Business2TelephoneNumber: string;
        BusinessAddress: string;
        BusinessAddressCity: string;
        BusinessAddressCountry: string;
        BusinessAddressPostalCode: string;
        BusinessAddressPostOfficeBox: string;
        BusinessAddressState: string;
        BusinessAddressStreet: string;
        BusinessCardLayoutXml: string;
        readonly BusinessCardType: OlBusinessCardType;
        BusinessFaxNumber: string;
        BusinessHomePage: string;
        BusinessTelephoneNumber: string;
        CallbackTelephoneNumber: string;
        CarTelephoneNumber: string;
        Categories: string;
        Children: string;
        readonly Class: OlObjectClass;
        ClearTaskFlag(): void;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly CompanyAndFullName: string;
        readonly CompanyLastFirstNoSpace: string;
        readonly CompanyLastFirstSpaceOnly: string;
        CompanyMainTelephoneNumber: string;
        CompanyName: string;
        ComputerNetworkName: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        CustomerID: string;
        Delete(): void;
        Department: string;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        Email1Address: string;
        Email1AddressType: string;
        Email1DisplayName: string;
        readonly Email1EntryID: string;
        Email2Address: string;
        Email2AddressType: string;
        Email2DisplayName: string;
        readonly Email2EntryID: string;
        Email3Address: string;
        Email3AddressType: string;
        Email3DisplayName: string;
        readonly Email3EntryID: string;
        readonly EntryID: string;
        FileAs: string;
        FirstName: string;
        readonly FormDescription: FormDescription;
        ForwardAsBusinessCard(): MailItem;
        ForwardAsVcard(): MailItem;
        FTPSite: string;
        FullName: string;
        readonly FullNameAndCompany: string;
        Gender: OlGender;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        GovernmentIDNumber: string;
        readonly HasPicture: boolean;
        Hobby: string;
        Home2TelephoneNumber: string;
        HomeAddress: string;
        HomeAddressCity: string;
        HomeAddressCountry: string;
        HomeAddressPostalCode: string;
        HomeAddressPostOfficeBox: string;
        HomeAddressState: string;
        HomeAddressStreet: string;
        HomeFaxNumber: string;
        HomeTelephoneNumber: string;
        IMAddress: string;
        Importance: OlImportance;
        Initials: string;
        InternetFreeBusyAddress: string;
        readonly IsConflict: boolean;
        ISDNNumber: string;
        readonly IsMarkedAsTask: boolean;
        readonly ItemProperties: ItemProperties;
        JobTitle: string;
        Journal: boolean;
        Language: string;
        readonly LastFirstAndSuffix: string;
        readonly LastFirstNoSpace: string;
        readonly LastFirstNoSpaceAndSuffix: string;
        readonly LastFirstNoSpaceCompany: string;
        readonly LastFirstSpaceOnly: string;
        readonly LastFirstSpaceOnlyCompany: string;
        readonly LastModificationTime: VarDate;
        LastName: string;
        readonly LastNameAndFirstName: string;
        readonly Links: Links;
        MailingAddress: string;
        MailingAddressCity: string;
        MailingAddressCountry: string;
        MailingAddressPostalCode: string;
        MailingAddressPostOfficeBox: string;
        MailingAddressState: string;
        MailingAddressStreet: string;
        ManagerName: string;
        readonly MAPIOBJECT: any;
        MarkAsTask(MarkInterval: OlMarkInterval): void;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        MiddleName: string;
        Mileage: string;
        MobileTelephoneNumber: string;
        Move(DestFldr: Folder): any;
        NetMeetingAlias: string;
        NetMeetingServer: string;
        NickName: string;
        NoAging: boolean;
        OfficeLocation: string;
        OrganizationalIDNumber: string;
        OtherAddress: string;
        OtherAddressCity: string;
        OtherAddressCountry: string;
        OtherAddressPostalCode: string;
        OtherAddressPostOfficeBox: string;
        OtherAddressState: string;
        OtherAddressStreet: string;
        OtherFaxNumber: string;
        OtherTelephoneNumber: string;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        PagerNumber: string;
        readonly Parent: any;
        PersonalHomePage: string;
        PrimaryTelephoneNumber: string;
        PrintOut(): void;
        Profession: string;
        readonly PropertyAccessor: PropertyAccessor;
        RadioTelephoneNumber: string;
        ReferredBy: string;
        ReminderOverrideDefault: boolean;
        ReminderPlaySound: boolean;
        ReminderSet: boolean;
        ReminderSoundFile: string;
        ReminderTime: VarDate;
        RemovePicture(): void;
        ResetBusinessCard(): void;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        SaveBusinessCardImage(Path: string): void;
        readonly Saved: boolean;
        SelectedMailingAddress: OlMailingAddress;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowBusinessCardEditor(): void;
        ShowCategoriesDialog(): void;
        ShowCheckPhoneDialog(PhoneNumber: OlContactPhoneNumber): void;
        readonly Size: number;
        Spouse: string;
        Subject: string;
        Suffix: string;
        TaskCompletedDate: VarDate;
        TaskDueDate: VarDate;
        TaskStartDate: VarDate;
        TaskSubject: string;
        TelexNumber: string;
        Title: string;
        ToDoTaskOrdinal: VarDate;
        TTYTDDTelephoneNumber: string;
        UnRead: boolean;
        User1: string;
        User2: string;
        User3: string;
        User4: string;
        UserCertificate: string;
        readonly UserProperties: UserProperties;
        WebPage: string;
        YomiCompanyName: string;
        YomiFirstName: string;
        YomiLastName: string;
    }

    class ContactsModule {
        private "Outlook.ContactsModule_typekey": ContactsModule;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly NavigationGroups: NavigationGroups;
        readonly NavigationModuleType: OlNavigationModuleType;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class Conversation {
        private "Outlook.Conversation_typekey": Conversation;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        ClearAlwaysAssignCategories(Store: Store): void;
        readonly ConversationID: string;
        GetAlwaysAssignCategories(Store: Store): string;
        GetAlwaysDelete(Store: Store): OlAlwaysDeleteConversation;
        GetAlwaysMoveToFolder(Store: Store): Folder;
        GetChildren(Item: any): SimpleItems;
        GetParent(Item: any): any;
        GetRootItems(): SimpleItems;
        GetTable(): Table;
        MarkAsRead(): void;
        MarkAsUnread(): void;
        readonly Parent: any;
        readonly Session: NameSpace;
        SetAlwaysAssignCategories(Categories: string, Store: Store): void;
        SetAlwaysDelete(AlwaysDelete: OlAlwaysDeleteConversation, Store: Store): void;
        SetAlwaysMoveToFolder(MoveToFolder: Folder, Store: Store): void;
        StopAlwaysDelete(Store: Store): void;
        StopAlwaysMoveToFolder(Store: Store): void;
    }

    class ConversationHeader {
        private "Outlook.ConversationHeader_typekey": ConversationHeader;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConversationID: string;
        readonly ConversationTopic: string;
        GetConversation(): Conversation;
        GetItems(): SimpleItems;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class DistListItem {
        private "Outlook.DistListItem_typekey": DistListItem;
        private constructor();
        readonly Actions: Actions;
        AddMember(Recipient: Recipient): void;
        AddMembers(Recipients: Recipients): void;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly CheckSum: number;
        readonly Class: OlObjectClass;
        ClearTaskFlag(): void;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        DLName: string;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        GetMember(Index: number): Recipient;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly IsMarkedAsTask: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkAsTask(MarkInterval: OlMarkInterval): void;
        MarkForDownload: OlRemoteStatus;
        readonly MemberCount: number;
        Members: any;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        OneOffMembers: any;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        ReminderOverrideDefault: boolean;
        ReminderPlaySound: boolean;
        ReminderSet: boolean;
        ReminderSoundFile: string;
        ReminderTime: VarDate;
        RemoveMember(Recipient: Recipient): void;
        RemoveMembers(Recipients: Recipients): void;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        TaskCompletedDate: VarDate;
        TaskDueDate: VarDate;
        TaskStartDate: VarDate;
        TaskSubject: string;
        ToDoTaskOrdinal: VarDate;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class DocumentItem {
        private "Outlook.DocumentItem_typekey": DocumentItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        readonly GetInspector: Inspector;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class DoNotUseMeFolder {
        private "Outlook.DoNotUseMeFolder_typekey": DoNotUseMeFolder;
        private constructor();
        AddressBookName: string;
        AddToFavorites(fNoUI?: any, Name?: any): void;
        AddToPFFavorites(): void;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        CopyTo(DestinationFolder: Folder): Folder;
        readonly CurrentView: View;
        CustomViewsOnly: boolean;
        readonly DefaultItemType: OlItemType;
        readonly DefaultMessageClass: string;
        Delete(): void;
        Description: string;
        Display(): void;
        readonly EntryID: string;
        readonly FolderPath: string;
        readonly Folders: Folders;
        readonly FullFolderPath: string;
        GetCalendarExporter(): CalendarSharing;
        GetCustomIcon(): stdole.StdPicture;
        GetExplorer(DisplayMode?: any): Explorer;
        GetStorage(StorageIdentifier: string, StorageIdentifierType: OlStorageIdentifierType): StorageItem;
        GetTable(Filter?: any, TableContents?: any): Table;
        InAppFolderSyncObject: boolean;
        readonly IsSharePointFolder: boolean;
        readonly Items: Items;
        readonly MAPIOBJECT: any;
        MoveTo(DestinationFolder: Folder): void;
        Name: string;
        readonly Parent: any;
        readonly PropertyAccessor: PropertyAccessor;
        readonly Session: NameSpace;
        SetCustomIcon(Picture: stdole.StdPicture): void;
        ShowAsOutlookAB: boolean;
        ShowItemCount: OlShowItemCount;
        readonly Store: Store;
        readonly StoreID: string;
        readonly UnReadItemCount: number;
        readonly UserDefinedProperties: UserDefinedProperties;
        readonly UserPermissions: any;
        readonly Views: Views;
        WebViewAllowNavigation: boolean;
        WebViewOn: boolean;
        WebViewURL: string;
    }

    class Exception {
        private "Outlook.Exception_typekey": Exception;
        private constructor();
        readonly Application: Application;
        readonly AppointmentItem: AppointmentItem;
        readonly Class: OlObjectClass;
        readonly Deleted: boolean;
        readonly ItemProperties: ItemProperties;
        readonly OriginalDate: VarDate;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Exceptions {
        private "Outlook.Exceptions_typekey": Exceptions;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Exception;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class ExchangeDistributionList {
        private "Outlook.ExchangeDistributionList_typekey": ExchangeDistributionList;
        private constructor();
        Address: string;
        readonly AddressEntryUserType: OlAddressEntryUserType;
        readonly Alias: string;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Comments: string;
        Delete(): void;
        Details(HWnd?: any): void;
        readonly DisplayType: OlDisplayType;
        GetContact(): ContactItem;
        GetExchangeDistributionList(): ExchangeDistributionList;
        GetExchangeDistributionListMembers(): AddressEntries;
        GetExchangeUser(): ExchangeUser;
        GetFreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
        GetMemberOfList(): AddressEntries;
        GetOwners(): AddressEntries;
        readonly ID: string;
        readonly Manager: AddressEntry;
        MAPIOBJECT: any;
        readonly Members: AddressEntries;
        Name: string;
        readonly Parent: any;
        readonly PrimarySmtpAddress: string;
        readonly PropertyAccessor: PropertyAccessor;
        readonly Session: NameSpace;
        Type: string;
        Update(MakePermanent?: any, Refresh?: any): void;
        UpdateFreeBusy(): void;
    }

    class ExchangeUser {
        private "Outlook.ExchangeUser_typekey": ExchangeUser;
        private constructor();
        Address: string;
        readonly AddressEntryUserType: OlAddressEntryUserType;
        readonly Alias: string;
        readonly Application: Application;
        AssistantName: string;
        BusinessTelephoneNumber: string;
        City: string;
        readonly Class: OlObjectClass;
        Comments: string;
        CompanyName: string;
        Delete(): void;
        Department: string;
        Details(HWnd?: any): void;
        readonly DisplayType: OlDisplayType;
        FirstName: string;
        GetContact(): ContactItem;
        GetDirectReports(): AddressEntries;
        GetExchangeDistributionList(): ExchangeDistributionList;
        GetExchangeUser(): ExchangeUser;
        GetExchangeUserManager(): ExchangeUser;
        GetFreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
        GetMemberOfList(): AddressEntries;
        GetPicture(): stdole.StdPicture;
        readonly ID: string;
        JobTitle: string;
        LastName: string;
        readonly Manager: AddressEntry;
        MAPIOBJECT: any;
        readonly Members: AddressEntries;
        MobileTelephoneNumber: string;
        Name: string;
        OfficeLocation: string;
        readonly Parent: any;
        PostalCode: string;
        readonly PrimarySmtpAddress: string;
        readonly PropertyAccessor: PropertyAccessor;
        readonly Session: NameSpace;
        StateOrProvince: string;
        StreetAddress: string;
        Type: string;
        Update(MakePermanent?: any, Refresh?: any): void;
        UpdateFreeBusy(): void;
        YomiCompanyName: string;
        YomiDepartment: string;
        YomiDisplayName: string;
        YomiFirstName: string;
        YomiLastName: string;
    }

    class Explorer {
        private "Outlook.Explorer_typekey": Explorer;
        private constructor();
        readonly AccountSelector: AccountSelector;
        Activate(): void;
        AddToSelection(Item: any): void;
        readonly Application: Application;
        readonly AttachmentSelection: AttachmentSelection;
        readonly Caption: string;
        readonly Class: OlObjectClass;
        ClearSearch(): void;
        ClearSelection(): void;
        Close(): void;
        readonly CommandBars: Office.CommandBars;
        CurrentFolder: Folder;
        CurrentView: any;
        DeselectFolder(Folder: Folder): void;
        Display(): void;
        Height: number;
        readonly HTMLDocument: any;
        IsFolderSelected(Folder: Folder): boolean;
        IsItemSelectableInView(Item: any): boolean;
        IsPaneVisible(Pane: OlPane): boolean;
        Left: number;
        readonly NavigationPane: NavigationPane;
        readonly Panes: Panes;
        readonly Parent: any;
        RemoveFromSelection(Item: any): void;
        Search(Query: string, SearchScope: OlSearchScope): void;
        SelectAllItems(): void;
        SelectFolder(Folder: Folder): void;
        readonly Selection: Selection;
        readonly Session: NameSpace;
        ShowPane(Pane: OlPane, Visible: boolean): void;
        Top: number;
        readonly Views: any;
        Width: number;
        WindowState: OlWindowState;
    }

    class Explorers {
        private "Outlook.Explorers_typekey": Explorers;
        private constructor();
        Add(Folder: any, DisplayMode: OlFolderDisplayMode): Explorer;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Explorer;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Folder {
        private "Outlook.Folder_typekey": Folder;
        private constructor();
        AddressBookName: string;
        AddToFavorites(fNoUI?: any, Name?: any): void;
        AddToPFFavorites(): void;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        CopyTo(DestinationFolder: Folder): Folder;
        readonly CurrentView: View;
        CustomViewsOnly: boolean;
        readonly DefaultItemType: OlItemType;
        readonly DefaultMessageClass: string;
        Delete(): void;
        Description: string;
        Display(): void;
        readonly EntryID: string;
        readonly FolderPath: string;
        readonly Folders: Folders;
        readonly FullFolderPath: string;
        GetCalendarExporter(): CalendarSharing;
        GetCustomIcon(): stdole.StdPicture;
        GetExplorer(DisplayMode?: any): Explorer;
        GetStorage(StorageIdentifier: string, StorageIdentifierType: OlStorageIdentifierType): StorageItem;
        GetTable(Filter?: any, TableContents?: any): Table;
        InAppFolderSyncObject: boolean;
        readonly IsSharePointFolder: boolean;
        readonly Items: Items;
        readonly MAPIOBJECT: any;
        MoveTo(DestinationFolder: Folder): void;
        Name: string;
        readonly Parent: any;
        readonly PropertyAccessor: PropertyAccessor;
        readonly Session: NameSpace;
        SetCustomIcon(Picture: stdole.StdPicture): void;
        ShowAsOutlookAB: boolean;
        ShowItemCount: OlShowItemCount;
        readonly Store: Store;
        readonly StoreID: string;
        readonly UnReadItemCount: number;
        readonly UserDefinedProperties: UserDefinedProperties;
        readonly UserPermissions: any;
        readonly Views: Views;
        WebViewAllowNavigation: boolean;
        WebViewOn: boolean;
        WebViewURL: string;
    }

    class Folders {
        private "Outlook.Folders_typekey": Folders;
        private constructor();
        Add(Name: string, Type?: any): Folder;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        GetFirst(): Folder;
        GetLast(): Folder;
        GetNext(): Folder;
        GetPrevious(): Folder;
        Item(Index: any): Folder;
        readonly Parent: any;
        readonly RawTable: any;
        Remove(Index: number): void;
        readonly Session: NameSpace;
    }

    class FormDescription {
        private "Outlook.FormDescription_typekey": FormDescription;
        private constructor();
        readonly Application: Application;
        Category: string;
        CategorySub: string;
        readonly Class: OlObjectClass;
        Comment: string;
        ContactName: string;
        DisplayName: string;
        Hidden: boolean;
        Icon: string;
        Locked: boolean;
        readonly MessageClass: string;
        MiniIcon: string;
        Name: string;
        Number: string;
        OneOff: boolean;
        readonly Parent: any;
        Password: string;
        PublishForm(Registry: OlFormRegistry, Folder?: any): void;
        readonly ScriptText: string;
        readonly Session: NameSpace;
        Template: string;
        UseWordMail: boolean;
        Version: string;
    }

    class FormNameRuleCondition {
        private "Outlook.FormNameRuleCondition_typekey": FormNameRuleCondition;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        FormName: any;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class FormRegion {
        private "Outlook.FormRegion_typekey": FormRegion;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Detail: string;
        readonly DisplayName: string;
        EnableAutoLayout: boolean;
        readonly Form: any;
        readonly FormRegionMode: OlFormRegionMode;
        readonly Inspector: Inspector;
        readonly InternalName: string;
        readonly IsExpanded: boolean;
        readonly Item: any;
        readonly Language: number;
        readonly Parent: any;
        Reflow(): void;
        Select(): void;
        readonly Session: NameSpace;
        SetControlItemProperty(Control: any, PropertyName: string): void;
        SuppressControlReplacement: boolean;
        Visible: boolean;
    }

    class FormRegionStartup {
        private "Outlook.FormRegionStartup_typekey": FormRegionStartup;
        private constructor();
        BeforeFormRegionShow(FormRegion: FormRegion): void;
        GetFormRegionIcon(FormRegionName: string, LCID: number, Icon: OlFormRegionIcon): any;
        GetFormRegionManifest(FormRegionName: string, LCID: number): any;
        GetFormRegionStorage(
            FormRegionName: string,
            Item: any,
            LCID: number,
            FormRegionMode: OlFormRegionMode,
            FormRegionSize: OlFormRegionSize,
        ): any;
    }

    class FromRssFeedRuleCondition {
        private "Outlook.FromRssFeedRuleCondition_typekey": FromRssFeedRuleCondition;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        FromRssFeed: any;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class IconView {
        private "Outlook.IconView_typekey": IconView;
        private constructor();
        readonly Application: Application;
        Apply(): void;
        readonly Class: OlObjectClass;
        Copy(Name: string, SaveOption: OlViewSaveOption): View;
        Delete(): void;
        Filter: string;
        GoToDate(Date: VarDate): void;
        IconPlacement: OlIconViewPlacement;
        IconViewType: OlIconViewType;
        Language: string;
        LockUserChanges: boolean;
        Name: string;
        readonly Parent: any;
        Reset(): void;
        Save(): void;
        readonly SaveOption: OlViewSaveOption;
        readonly Session: NameSpace;
        readonly SortFields: OrderFields;
        readonly Standard: boolean;
        readonly ViewType: OlViewType;
        XML: string;
    }

    class ImportanceRuleCondition {
        private "Outlook.ImportanceRuleCondition_typekey": ImportanceRuleCondition;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        Importance: OlImportance;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Inspector {
        private "Outlook.Inspector_typekey": Inspector;
        private constructor();
        Activate(): void;
        readonly Application: Application;
        readonly AttachmentSelection: AttachmentSelection;
        readonly Caption: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        readonly CommandBars: Office.CommandBars;
        readonly CurrentItem: any;
        Display(Modal?: any): void;
        readonly EditorType: OlEditorType;
        Height: number;
        HideFormPage(PageName: string): void;
        readonly HTMLEditor: any;
        IsWordMail(): boolean;
        Left: number;
        readonly ModifiedFormPages: any;
        NewFormRegion(): any;
        OpenFormRegion(Path: string): any;
        readonly Parent: any;
        SaveFormRegion(Page: any, FileName: string): void;
        readonly Session: NameSpace;
        SetControlItemProperty(Control: any, PropertyName: string): void;
        SetCurrentFormPage(PageName: string): void;
        SetSchedulingStartTime(Start: VarDate): void;
        ShowFormPage(PageName: string): void;
        Top: number;
        Width: number;
        WindowState: OlWindowState;
        readonly WordEditor: any;
    }

    class Inspectors {
        private "Outlook.Inspectors_typekey": Inspectors;
        private constructor();
        Add(Item: any): Inspector;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Inspector;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class ItemProperties {
        private "Outlook.ItemProperties_typekey": ItemProperties;
        private constructor();
        Add(Name: string, Type: OlUserPropertyType, AddToFolderFields?: any, DisplayFormat?: any): ItemProperty;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): ItemProperty;
        readonly Parent: any;
        Remove(Index: number): void;
        readonly Session: NameSpace;
    }

    class ItemProperty {
        private "Outlook.ItemProperty_typekey": ItemProperty;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Delete(): void;
        Formula: string;
        readonly IsUserProperty: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly Type: OlUserPropertyType;
        ValidationFormula: string;
        ValidationText: string;
        Value: any;
    }

    class Items {
        private "Outlook.Items_typekey": Items;
        private constructor();
        Add(Type?: any): any;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Find(Filter: string): any;
        FindNext(): any;
        GetFirst(): any;
        GetLast(): any;
        GetNext(): any;
        GetPrevious(): any;
        IncludeRecurrences: boolean;
        Item(Index: any): any;
        readonly Parent: any;
        readonly RawTable: any;
        Remove(Index: number): void;
        ResetColumns(): void;
        Restrict(Filter: string): Items;
        readonly Session: NameSpace;
        SetColumns(Columns: string): void;
        Sort(Property: string, Descending?: any): void;
    }

    class JournalItem {
        private "Outlook.JournalItem_typekey": JournalItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        ContactNames: string;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        DocPosted: boolean;
        DocPrinted: boolean;
        DocRouted: boolean;
        DocSaved: boolean;
        readonly DownloadState: OlDownloadState;
        Duration: number;
        End: VarDate;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        Forward(): MailItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        readonly Recipients: Recipients;
        Reply(): MailItem;
        ReplyAll(): MailItem;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Start: VarDate;
        StartTimer(): void;
        StopTimer(): void;
        Subject: string;
        Type: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class JournalModule {
        private "Outlook.JournalModule_typekey": JournalModule;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly NavigationGroups: NavigationGroups;
        readonly NavigationModuleType: OlNavigationModuleType;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class Link {
        private "Outlook.Link_typekey": Link;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Item: any;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly Type: OlObjectClass;
    }

    class Links {
        private "Outlook.Links_typekey": Links;
        private constructor();
        Add(Item: any): Link;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Link;
        readonly Parent: any;
        Remove(Index: any): void;
        readonly Session: NameSpace;
    }

    class MailItem {
        private "Outlook.MailItem_typekey": MailItem;
        private constructor();
        readonly Actions: Actions;
        AddBusinessCard(contact: ContactItem): void;
        AlternateRecipientAllowed: boolean;
        readonly Application: Application;
        readonly Attachments: Attachments;
        AutoForwarded: boolean;
        readonly AutoResolvedWinner: boolean;
        BCC: string;
        BillingInformation: string;
        Body: string;
        BodyFormat: OlBodyFormat;
        Categories: string;
        CC: string;
        readonly Class: OlObjectClass;
        ClearConversationIndex(): void;
        ClearTaskFlag(): void;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        DeferredDeliveryTime: VarDate;
        Delete(): void;
        DeleteAfterSubmit: boolean;
        Display(Modal?: boolean): void;
        readonly DownloadState: OlDownloadState;
        EnableSharedAttachments: boolean;
        readonly EntryID: string;
        ExpiryTime: VarDate;
        FlagDueBy: VarDate;
        FlagIcon: OlFlagIcon;
        FlagRequest: string;
        FlagStatus: OlFlagStatus;
        readonly FormDescription: FormDescription;
        Forward(): MailItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        HasCoverSheet: boolean;
        HTMLBody: string;
        Importance: OlImportance;
        InternetCodepage: number;
        readonly IsConflict: boolean;
        IsIPFax: boolean;
        readonly IsMarkedAsTask: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkAsTask(MarkInterval: OlMarkInterval): void;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        OriginatorDeliveryReportRequested: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        Permission: OlPermission;
        PermissionService: OlPermissionService;
        PermissionTemplateGuid: string;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        ReadReceiptRequested: boolean;
        readonly ReceivedByEntryID: string;
        readonly ReceivedByName: string;
        readonly ReceivedOnBehalfOfEntryID: string;
        readonly ReceivedOnBehalfOfName: string;
        readonly ReceivedTime: VarDate;
        RecipientReassignmentProhibited: boolean;
        readonly Recipients: Recipients;
        ReminderOverrideDefault: boolean;
        ReminderPlaySound: boolean;
        ReminderSet: boolean;
        ReminderSoundFile: string;
        ReminderTime: VarDate;
        RemoteStatus: OlRemoteStatus;
        Reply(): MailItem;
        ReplyAll(): MailItem;
        readonly ReplyRecipientNames: string;
        readonly ReplyRecipients: Recipients;
        readonly RetentionExpirationDate: VarDate;
        readonly RetentionPolicyName: string;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        SaveSentMessageFolder: Folder;
        Send(): void;
        Sender: AddressEntry;
        readonly SenderEmailAddress: string;
        readonly SenderEmailType: string;
        readonly SenderName: string;
        SendUsingAccount: Account;
        Sensitivity: OlSensitivity;
        readonly Sent: boolean;
        readonly SentOn: VarDate;
        SentOnBehalfOfName: string;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        readonly Submitted: boolean;
        TaskCompletedDate: VarDate;
        TaskDueDate: VarDate;
        TaskStartDate: VarDate;
        TaskSubject: string;
        To: string;
        ToDoTaskOrdinal: VarDate;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
        VotingOptions: string;
        VotingResponse: string;
    }

    class MailModule {
        private "Outlook.MailModule_typekey": MailModule;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly NavigationGroups: NavigationGroups;
        readonly NavigationModuleType: OlNavigationModuleType;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class MarkAsTaskRuleAction {
        private "Outlook.MarkAsTaskRuleAction_typekey": MarkAsTaskRuleAction;
        private constructor();
        readonly ActionType: OlRuleActionType;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Enabled: boolean;
        FlagTo: string;
        MarkInterval: OlMarkInterval;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class MeetingItem {
        private "Outlook.MeetingItem_typekey": MeetingItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        AutoForwarded: boolean;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        DeferredDeliveryTime: VarDate;
        Delete(): void;
        DeleteAfterSubmit: boolean;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        ExpiryTime: VarDate;
        FlagDueBy: VarDate;
        FlagIcon: OlFlagIcon;
        FlagRequest: string;
        FlagStatus: OlFlagStatus;
        readonly FormDescription: FormDescription;
        Forward(): MeetingItem;
        GetAssociatedAppointment(AddToCalendar: boolean): AppointmentItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly IsLatestVersion: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        readonly MeetingWorkspaceURL: string;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        OriginatorDeliveryReportRequested: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        ReceivedTime: VarDate;
        readonly Recipients: Recipients;
        ReminderSet: boolean;
        ReminderTime: VarDate;
        Reply(): MailItem;
        ReplyAll(): MailItem;
        readonly ReplyRecipients: Recipients;
        readonly RetentionExpirationDate: VarDate;
        readonly RetentionPolicyName: string;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        SaveSentMessageFolder: Folder;
        Send(): void;
        readonly SenderEmailAddress: string;
        readonly SenderEmailType: string;
        readonly SenderName: string;
        SendUsingAccount: Account;
        Sensitivity: OlSensitivity;
        readonly Sent: boolean;
        readonly SentOn: VarDate;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        readonly Submitted: boolean;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class MobileItem {
        private "Outlook.MobileItem_typekey": MobileItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly Count: number;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        Forward(): MobileItem;
        readonly GetInspector: Inspector;
        HTMLBody: string;
        Importance: OlImportance;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly MAPIOBJECT: any;
        MessageClass: string;
        Mileage: string;
        readonly MobileFormat: OlMobileFormat;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        readonly ReceivedByEntryID: string;
        readonly ReceivedByName: string;
        readonly ReceivedTime: VarDate;
        readonly Recipients: Recipients;
        Reply(): MobileItem;
        ReplyAll(): MobileItem;
        readonly ReplyRecipientNames: string;
        readonly ReplyRecipients: Recipients;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Send(ForceSend: boolean): void;
        readonly SenderEmailAddress: string;
        readonly SenderEmailType: string;
        readonly SenderName: string;
        SendUsingAccount: Account;
        Sensitivity: OlSensitivity;
        readonly Sent: boolean;
        readonly SentOn: VarDate;
        readonly Session: NameSpace;
        readonly Size: number;
        SMILBody: string;
        Subject: string;
        readonly Submitted: boolean;
        To: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class MoveOrCopyRuleAction {
        private "Outlook.MoveOrCopyRuleAction_typekey": MoveOrCopyRuleAction;
        private constructor();
        readonly ActionType: OlRuleActionType;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Enabled: boolean;
        Folder: Folder;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class NameSpace {
        private "Outlook.NameSpace_typekey": NameSpace;
        private constructor();
        readonly Accounts: Accounts;
        readonly AddressLists: AddressLists;
        AddStore(Store: any): void;
        AddStoreEx(Store: any, Type: OlStoreType): void;
        readonly Application: Application;
        readonly AutoDiscoverConnectionMode: OlAutoDiscoverConnectionMode;
        readonly AutoDiscoverXml: string;
        readonly Categories: Categories;
        readonly Class: OlObjectClass;
        CompareEntryIDs(FirstEntryID: string, SecondEntryID: string): boolean;
        CreateContactCard(AddressEntry: AddressEntry): Office.ContactCard;
        CreateRecipient(RecipientName: string): Recipient;
        CreateSharingItem(Context: any, Provider?: any): SharingItem;
        readonly CurrentProfileName: string;
        readonly CurrentUser: Recipient;
        readonly DefaultStore: Store;
        Dial(ContactItem?: any): void;
        readonly ExchangeConnectionMode: OlExchangeConnectionMode;
        readonly ExchangeMailboxServerName: string;
        readonly ExchangeMailboxServerVersion: string;
        readonly Folders: Folders;
        GetAddressEntryFromID(ID: string): AddressEntry;
        GetDefaultFolder(FolderType: OlDefaultFolders): Folder;
        GetFolderFromID(EntryIDFolder: string, EntryIDStore?: any): Folder;
        GetGlobalAddressList(): AddressList;
        GetItemFromID(EntryIDItem: string, EntryIDStore?: any): any;
        GetRecipientFromID(EntryID: string): Recipient;
        GetSelectNamesDialog(): SelectNamesDialog;
        GetSharedDefaultFolder(Recipient: Recipient, FolderType: OlDefaultFolders): Folder;
        GetStoreFromID(ID: string): Store;
        Logoff(): void;
        Logon(Profile?: any, Password?: any, ShowDialog?: any, NewSession?: any): void;
        readonly MAPIOBJECT: any;
        readonly Offline: boolean;
        OpenSharedFolder(Path: string, Name?: any, DownloadAttachments?: any, UseTTL?: any): Folder;
        OpenSharedItem(Path: string): any;
        readonly Parent: any;
        PickFolder(): Folder;
        RefreshRemoteHeaders(): void;
        RemoveStore(Folder: Folder): void;
        SendAndReceive(showProgressDialog: boolean): void;
        readonly Session: NameSpace;
        readonly Stores: Stores;
        readonly SyncObjects: SyncObjects;
        readonly Type: string;
    }

    class NavigationFolder {
        private "Outlook.NavigationFolder_typekey": NavigationFolder;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly DisplayName: string;
        readonly Folder: Folder;
        readonly IsRemovable: boolean;
        IsSelected: boolean;
        IsSideBySide: boolean;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
    }

    class NavigationFolders {
        private "Outlook.NavigationFolders_typekey": NavigationFolders;
        private constructor();
        Add(Folder: Folder): NavigationFolder;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): NavigationFolder;
        readonly Parent: any;
        Remove(RemovableFolder: NavigationFolder): void;
        readonly Session: NameSpace;
    }

    class NavigationGroup {
        private "Outlook.NavigationGroup_typekey": NavigationGroup;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly GroupType: OlGroupType;
        Name: string;
        readonly NavigationFolders: NavigationFolders;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
    }

    class NavigationGroups {
        private "Outlook.NavigationGroups_typekey": NavigationGroups;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Create(GroupDisplayName: string): NavigationGroup;
        Delete(Group: NavigationGroup): void;
        GetDefaultNavigationGroup(DefaultFolderGroup: OlGroupType): NavigationGroup;
        Item(Index: any): NavigationGroup;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class NavigationModule {
        private "Outlook.NavigationModule_typekey": NavigationModule;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly NavigationModuleType: OlNavigationModuleType;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class NavigationModules {
        private "Outlook.NavigationModules_typekey": NavigationModules;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        GetNavigationModule(ModuleType: OlNavigationModuleType): NavigationModule;
        Item(Index: any): NavigationModule;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class NavigationPane {
        private "Outlook.NavigationPane_typekey": NavigationPane;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        CurrentModule: NavigationModule;
        DisplayedModuleCount: number;
        IsCollapsed: boolean;
        readonly Modules: NavigationModules;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class NewItemAlertRuleAction {
        private "Outlook.NewItemAlertRuleAction_typekey": NewItemAlertRuleAction;
        private constructor();
        readonly ActionType: OlRuleActionType;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
        Text: string;
    }

    class NoteItem {
        private "Outlook.NoteItem_typekey": NoteItem;
        private constructor();
        readonly Application: Application;
        readonly AutoResolvedWinner: boolean;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Color: OlNoteColor;
        readonly Conflicts: Conflicts;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly GetInspector: Inspector;
        Height: number;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        Left: number;
        readonly Links: Links;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Move(DestFldr: Folder): any;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        readonly Session: NameSpace;
        readonly Size: number;
        readonly Subject: string;
        Top: number;
        Width: number;
    }

    class NotesModule {
        private "Outlook.NotesModule_typekey": NotesModule;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly NavigationGroups: NavigationGroups;
        readonly NavigationModuleType: OlNavigationModuleType;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class OlkBusinessCardControl {
        private "Outlook.OlkBusinessCardControl_typekey": OlkBusinessCardControl;
        private constructor();
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
    }

    class OlkCategory {
        private "Outlook.OlkCategory_typekey": OlkCategory;
        private constructor();
        AutoSize: boolean;
        BackColor: stdole.OLE_COLOR;
        BackStyle: OlBackStyle;
        Enabled: boolean;
        ForeColor: stdole.OLE_COLOR;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
    }

    class OlkCheckBox {
        private "Outlook.OlkCheckBox_typekey": OlkCheckBox;
        private constructor();
        Accelerator: string;
        Alignment: OlAlignment;
        BackColor: stdole.OLE_COLOR;
        BackStyle: OlBackStyle;
        Caption: string;
        Enabled: boolean;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        TripleState: boolean;
        Value: any;
        WordWrap: boolean;
    }

    class OlkComboBox {
        private "Outlook.OlkComboBox_typekey": OlkComboBox;
        private constructor();
        AddItem(ItemText: string, Index?: any): void;
        AutoSize: boolean;
        AutoTab: boolean;
        AutoWordSelect: boolean;
        BackColor: stdole.OLE_COLOR;
        BorderStyle: OlBorderStyle;
        Clear(): void;
        Copy(): void;
        Cut(): void;
        DragBehavior: OlDragBehavior;
        DropDown(): void;
        Enabled: boolean;
        EnterFieldBehavior: OlEnterFieldBehavior;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        GetItem(Index: number): string;
        HideSelection: boolean;
        readonly ListCount: number;
        ListIndex: number;
        Locked: boolean;
        MaxLength: number;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        Paste(): void;
        RemoveItem(Index: number): void;
        SelectionMargin: boolean;
        SelLength: number;
        SelStart: number;
        readonly SelText: string;
        SetItem(Index: number, Item: string): void;
        Style: OlComboBoxStyle;
        Text: string;
        TextAlign: OlTextAlign;
        TopIndex: number;
        Value: any;
    }

    class OlkCommandButton {
        private "Outlook.OlkCommandButton_typekey": OlkCommandButton;
        private constructor();
        Accelerator: string;
        AutoSize: boolean;
        Caption: string;
        DisplayDropArrow: boolean;
        Enabled: boolean;
        readonly Font: stdole.StdFont;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        Picture: stdole.StdPicture;
        PictureAlignment: OlPictureAlignment;
        TextAlign: OlTextAlign;
        WordWrap: boolean;
    }

    class OlkContactPhoto {
        private "Outlook.OlkContactPhoto_typekey": OlkContactPhoto;
        private constructor();
        Enabled: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
    }

    class OlkDateControl {
        private "Outlook.OlkDateControl_typekey": OlkDateControl;
        private constructor();
        AutoSize: boolean;
        AutoWordSelect: boolean;
        BackColor: stdole.OLE_COLOR;
        BackStyle: OlBackStyle;
        Date: VarDate;
        DropDown(): void;
        Enabled: boolean;
        EnterFieldBehavior: OlEnterFieldBehavior;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        HideSelection: boolean;
        Locked: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        ShowNoneButton: boolean;
        Text: string;
        TextAlign: OlTextAlign;
        Value: any;
    }

    class OlkFrameHeader {
        private "Outlook.OlkFrameHeader_typekey": OlkFrameHeader;
        private constructor();
        Alignment: OlAlignment;
        Caption: string;
        Enabled: boolean;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
    }

    class OlkInfoBar {
        private "Outlook.OlkInfoBar_typekey": OlkInfoBar;
        private constructor();
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
    }

    class OlkLabel {
        private "Outlook.OlkLabel_typekey": OlkLabel;
        private constructor();
        Accelerator: string;
        AutoSize: boolean;
        BackColor: stdole.OLE_COLOR;
        BackStyle: OlBackStyle;
        BorderStyle: OlBorderStyle;
        Caption: string;
        Enabled: boolean;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        TextAlign: OlTextAlign;
        UseHeaderColor: boolean;
        Value: any;
        WordWrap: boolean;
    }

    class OlkListBox {
        private "Outlook.OlkListBox_typekey": OlkListBox;
        private constructor();
        AddItem(ItemText: string, Index?: any): void;
        BackColor: stdole.OLE_COLOR;
        BorderStyle: OlBorderStyle;
        Clear(): void;
        Copy(): void;
        Enabled: boolean;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        GetItem(Index: number): string;
        GetSelected(Index: number): boolean;
        readonly ListCount: number;
        ListIndex: number;
        Locked: boolean;
        MatchEntry: OlMatchEntry;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        MultiSelect: OlMultiSelect;
        RemoveItem(Index: number): void;
        SetItem(Index: number, Item: string): void;
        SetSelected(Index: number, Selected: boolean): void;
        Text: string;
        TextAlign: OlTextAlign;
        TopIndex: number;
        Value: any;
    }

    class OlkOptionButton {
        private "Outlook.OlkOptionButton_typekey": OlkOptionButton;
        private constructor();
        Accelerator: string;
        Alignment: OlAlignment;
        BackColor: stdole.OLE_COLOR;
        BackStyle: OlBackStyle;
        Caption: string;
        Enabled: boolean;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        GroupName: string;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        Value: any;
        WordWrap: boolean;
    }

    class OlkPageControl {
        private "Outlook.OlkPageControl_typekey": OlkPageControl;
        private constructor();
        Page: OlPageType;
    }

    class OlkSenderPhoto {
        private "Outlook.OlkSenderPhoto_typekey": OlkSenderPhoto;
        private constructor();
        Enabled: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        readonly PreferredHeight: number;
        readonly PreferredWidth: number;
    }

    /** Outlook TextBox */
    class OlkTextBox {
        private "Outlook.OlkTextBox_typekey": OlkTextBox;
        private constructor();
        AutoSize: boolean;
        AutoTab: boolean;
        AutoWordSelect: boolean;
        BackColor: stdole.OLE_COLOR;
        BorderStyle: OlBorderStyle;
        Clear(): void;
        Copy(): void;
        Cut(): void;
        DragBehavior: OlDragBehavior;
        Enabled: boolean;
        EnableRichText: boolean;
        EnterFieldBehavior: OlEnterFieldBehavior;
        EnterKeyBehavior: boolean;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        HideSelection: boolean;
        IntegralHeight: boolean;
        Locked: boolean;
        MaxLength: number;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        MultiLine: boolean;
        PasswordChar: string;
        Paste(): void;
        Scrollbars: OlScrollBars;
        SelectionMargin: boolean;
        SelLength: number;
        SelStart: number;
        readonly SelText: string;
        TabKeyBehavior: boolean;
        Text: string;
        TextAlign: OlTextAlign;
        Value: any;
        WordWrap: boolean;
    }

    class OlkTimeControl {
        private "Outlook.OlkTimeControl_typekey": OlkTimeControl;
        private constructor();
        AutoSize: boolean;
        AutoWordSelect: boolean;
        BackColor: stdole.OLE_COLOR;
        BackStyle: OlBackStyle;
        DropDown(): void;
        Enabled: boolean;
        EnterFieldBehavior: OlEnterFieldBehavior;
        readonly Font: stdole.StdFont;
        ForeColor: stdole.OLE_COLOR;
        HideSelection: boolean;
        IntervalTime: VarDate;
        Locked: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        ReferenceTime: VarDate;
        Style: OlTimeStyle;
        Text: string;
        TextAlign: OlTextAlign;
        Time: VarDate;
        Value: any;
    }

    class OlkTimeZoneControl {
        private "Outlook.OlkTimeZoneControl_typekey": OlkTimeZoneControl;
        private constructor();
        AppointmentTimeField: OlAppointmentTimeField;
        BorderStyle: OlBorderStyle;
        DropDown(): void;
        Enabled: boolean;
        Locked: boolean;
        MouseIcon: stdole.StdPicture;
        MousePointer: OlMousePointer;
        SelectedTimeZoneIndex: number;
        Value: any;
    }

    class OrderField {
        private "Outlook.OrderField_typekey": OrderField;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        IsDescending: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly ViewXMLSchemaName: string;
    }

    class OrderFields {
        private "Outlook.OrderFields_typekey": OrderFields;
        private constructor();
        Add(PropertyName: string, IsDescending?: any): OrderField;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Insert(PropertyName: string, Index: any, IsDescending?: any): OrderField;
        Item(Index: any): OrderField;
        readonly Parent: any;
        Remove(Index: any): void;
        RemoveAll(): void;
        readonly Session: NameSpace;
    }

    class OutlookBarGroup {
        private "Outlook.OutlookBarGroup_typekey": OutlookBarGroup;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly Shortcuts: OutlookBarShortcuts;
        ViewType: OlOutlookBarViewType;
    }

    class OutlookBarGroups {
        private "Outlook.OutlookBarGroups_typekey": OutlookBarGroups;
        private constructor();
        Add(Name: string, Index?: any): OutlookBarGroup;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): OutlookBarGroup;
        readonly Parent: any;
        Remove(Index: any): void;
        readonly Session: NameSpace;
    }

    class OutlookBarPane {
        private "Outlook.OutlookBarPane_typekey": OutlookBarPane;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Contents: OutlookBarStorage;
        CurrentGroup: OutlookBarGroup;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class OutlookBarShortcut {
        private "Outlook.OutlookBarShortcut_typekey": OutlookBarShortcut;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        SetIcon(Icon: any): void;
        readonly Target: any;
    }

    class OutlookBarShortcuts {
        private "Outlook.OutlookBarShortcuts_typekey": OutlookBarShortcuts;
        private constructor();
        Add(Target: any, Name: string, Index?: any): OutlookBarShortcut;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): OutlookBarShortcut;
        readonly Parent: any;
        Remove(Index: any): void;
        readonly Session: NameSpace;
    }

    class OutlookBarStorage {
        private "Outlook.OutlookBarStorage_typekey": OutlookBarStorage;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Groups: OutlookBarGroups;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Panes {
        private "Outlook.Panes_typekey": Panes;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): any;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class PlaySoundRuleAction {
        private "Outlook.PlaySoundRuleAction_typekey": PlaySoundRuleAction;
        private constructor();
        readonly ActionType: OlRuleActionType;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Enabled: boolean;
        FilePath: string;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class PostItem {
        private "Outlook.PostItem_typekey": PostItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        BodyFormat: OlBodyFormat;
        Categories: string;
        readonly Class: OlObjectClass;
        ClearConversationIndex(): void;
        ClearTaskFlag(): void;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        ExpiryTime: VarDate;
        readonly FormDescription: FormDescription;
        Forward(): MailItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        HTMLBody: string;
        Importance: OlImportance;
        InternetCodepage: number;
        readonly IsConflict: boolean;
        readonly IsMarkedAsTask: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkAsTask(MarkInterval: OlMarkInterval): void;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        Post(): void;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        readonly ReceivedTime: VarDate;
        ReminderOverrideDefault: boolean;
        ReminderPlaySound: boolean;
        ReminderSet: boolean;
        ReminderSoundFile: string;
        ReminderTime: VarDate;
        Reply(): MailItem;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        readonly SenderEmailAddress: string;
        readonly SenderEmailType: string;
        readonly SenderName: string;
        Sensitivity: OlSensitivity;
        readonly SentOn: VarDate;
        readonly Session: NameSpace;
        SetACLs(): boolean;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        TaskCompletedDate: VarDate;
        TaskDueDate: VarDate;
        TaskStartDate: VarDate;
        TaskSubject: string;
        ToDoTaskOrdinal: VarDate;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class PropertyAccessor {
        private "Outlook.PropertyAccessor_typekey": PropertyAccessor;
        private constructor();
        readonly Application: Application;
        BinaryToString(Value: any): string;
        readonly Class: OlObjectClass;
        DeleteProperties(SchemaNames: any): any;
        DeleteProperty(SchemaName: string): void;
        GetProperties(SchemaNames: any): any;
        GetProperty(SchemaName: string): any;
        LocalTimeToUTC(Value: VarDate): VarDate;
        readonly Parent: any;
        readonly Session: NameSpace;
        SetProperties(SchemaNames: any, Values: any): any;
        SetProperty(SchemaName: string, Value: any): void;
        StringToBinary(Value: string): any;
        UTCToLocalTime(Value: VarDate): VarDate;
    }

    class PropertyPages {
        private "Outlook.PropertyPages_typekey": PropertyPages;
        private constructor();
        Add(Page: any, Title: string): void;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): any;
        readonly Parent: any;
        Remove(Index: any): void;
        readonly Session: NameSpace;
    }

    class Recipient {
        private "Outlook.Recipient_typekey": Recipient;
        private constructor();
        readonly Address: string;
        AddressEntry: AddressEntry;
        readonly Application: Application;
        AutoResponse: string;
        readonly Class: OlObjectClass;
        Delete(): void;
        readonly DisplayType: OlDisplayType;
        readonly EntryID: string;
        FreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
        readonly Index: number;
        readonly MeetingResponseStatus: OlResponseStatus;
        readonly Name: string;
        readonly Parent: any;
        readonly PropertyAccessor: PropertyAccessor;
        Resolve(): boolean;
        readonly Resolved: boolean;
        Sendable: boolean;
        readonly Session: NameSpace;
        TrackingStatus: OlTrackingStatus;
        TrackingStatusTime: VarDate;
        Type: number;
    }

    class Recipients {
        private "Outlook.Recipients_typekey": Recipients;
        private constructor();
        Add(Name: string): Recipient;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Recipient;
        readonly Parent: any;
        Remove(Index: number): void;
        ResolveAll(): boolean;
        readonly Session: NameSpace;
    }

    class RecurrencePattern {
        private "Outlook.RecurrencePattern_typekey": RecurrencePattern;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        DayOfMonth: number;
        DayOfWeekMask: OlDaysOfWeek;
        Duration: number;
        EndTime: VarDate;
        readonly Exceptions: Exceptions;
        GetOccurrence(StartDate: VarDate): AppointmentItem;
        Instance: number;
        Interval: number;
        MonthOfYear: number;
        NoEndDate: boolean;
        Occurrences: number;
        readonly Parent: any;
        PatternEndDate: VarDate;
        PatternStartDate: VarDate;
        RecurrenceType: OlRecurrenceType;
        Regenerate: boolean;
        readonly Session: NameSpace;
        StartTime: VarDate;
    }

    class Reminder {
        private "Outlook.Reminder_typekey": Reminder;
        private constructor();
        readonly Application: Application;
        readonly Caption: string;
        readonly Class: OlObjectClass;
        Dismiss(): void;
        readonly IsVisible: boolean;
        readonly Item: any;
        readonly NextReminderDate: VarDate;
        readonly OriginalReminderDate: VarDate;
        readonly Parent: any;
        readonly Session: NameSpace;
        Snooze(SnoozeTime?: any): void;
    }

    class Reminders {
        private "Outlook.Reminders_typekey": Reminders;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Reminder;
        readonly Parent: any;
        Remove(Index: any): void;
        readonly Session: NameSpace;
    }

    class RemoteItem {
        private "Outlook.RemoteItem_typekey": RemoteItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        readonly HasAttachment: boolean;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        readonly RemoteMessageClass: string;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        readonly TransferSize: number;
        readonly TransferTime: number;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class ReportItem {
        private "Outlook.ReportItem_typekey": ReportItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        readonly RetentionExpirationDate: VarDate;
        readonly RetentionPolicyName: string;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class Results {
        private "Outlook.Results_typekey": Results;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        DefaultItemType: OlItemType;
        GetFirst(): any;
        GetLast(): any;
        GetNext(): any;
        GetPrevious(): any;
        Item(Index: any): any;
        readonly Parent: any;
        readonly RawTable: any;
        ResetColumns(): void;
        readonly Session: NameSpace;
        SetColumns(Columns: string): void;
        Sort(Property: string, Descending?: any): void;
    }

    class Row {
        private "Outlook.Row_typekey": Row;
        private constructor();
        readonly Application: Application;
        BinaryToString(Index: any): string;
        readonly Class: OlObjectClass;
        GetValues(): any;
        Item(Index: any): any;
        LocalTimeToUTC(Index: any): VarDate;
        readonly Parent: any;
        readonly Session: NameSpace;
        UTCToLocalTime(Index: any): VarDate;
    }

    class Rule {
        private "Outlook.Rule_typekey": Rule;
        private constructor();
        readonly Actions: RuleActions;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Conditions: RuleConditions;
        Enabled: boolean;
        readonly Exceptions: RuleConditions;
        Execute(ShowProgress?: any, Folder?: any, IncludeSubfolders?: any, RuleExecuteOption?: any): void;
        ExecutionOrder: number;
        readonly IsLocalRule: boolean;
        Name: string;
        readonly Parent: any;
        readonly RuleType: OlRuleType;
        readonly Session: NameSpace;
    }

    class RuleAction {
        private "Outlook.RuleAction_typekey": RuleAction;
        private constructor();
        readonly ActionType: OlRuleActionType;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class RuleActions {
        private "Outlook.RuleActions_typekey": RuleActions;
        private constructor();
        readonly Application: Application;
        readonly AssignToCategory: AssignToCategoryRuleAction;
        readonly CC: SendRuleAction;
        readonly Class: OlObjectClass;
        readonly ClearCategories: RuleAction;
        readonly CopyToFolder: MoveOrCopyRuleAction;
        readonly Count: number;
        readonly Delete: RuleAction;
        readonly DeletePermanently: RuleAction;
        readonly DesktopAlert: RuleAction;
        readonly Forward: SendRuleAction;
        readonly ForwardAsAttachment: SendRuleAction;
        Item(Index: number): RuleAction;
        readonly MarkAsTask: MarkAsTaskRuleAction;
        readonly MoveToFolder: MoveOrCopyRuleAction;
        readonly NewItemAlert: NewItemAlertRuleAction;
        readonly NotifyDelivery: RuleAction;
        readonly NotifyRead: RuleAction;
        readonly Parent: any;
        readonly PlaySound: PlaySoundRuleAction;
        readonly Redirect: SendRuleAction;
        readonly Session: NameSpace;
        readonly Stop: RuleAction;
    }

    class RuleCondition {
        private "Outlook.RuleCondition_typekey": RuleCondition;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class RuleConditions {
        private "Outlook.RuleConditions_typekey": RuleConditions;
        private constructor();
        readonly Account: AccountRuleCondition;
        readonly AnyCategory: RuleCondition;
        readonly Application: Application;
        readonly Body: TextRuleCondition;
        readonly BodyOrSubject: TextRuleCondition;
        readonly Category: CategoryRuleCondition;
        readonly CC: RuleCondition;
        readonly Class: OlObjectClass;
        readonly Count: number;
        readonly FormName: FormNameRuleCondition;
        readonly From: ToOrFromRuleCondition;
        readonly FromAnyRSSFeed: RuleCondition;
        readonly FromRssFeed: FromRssFeedRuleCondition;
        readonly HasAttachment: RuleCondition;
        readonly Importance: ImportanceRuleCondition;
        Item(Index: number): RuleCondition;
        readonly MeetingInviteOrUpdate: RuleCondition;
        readonly MessageHeader: TextRuleCondition;
        readonly NotTo: RuleCondition;
        readonly OnLocalMachine: RuleCondition;
        readonly OnlyToMe: RuleCondition;
        readonly OnOtherMachine: RuleCondition;
        readonly Parent: any;
        readonly RecipientAddress: AddressRuleCondition;
        readonly SenderAddress: AddressRuleCondition;
        readonly SenderInAddressList: SenderInAddressListRuleCondition;
        readonly SentTo: ToOrFromRuleCondition;
        readonly Session: NameSpace;
        readonly Subject: TextRuleCondition;
        readonly ToMe: RuleCondition;
        readonly ToOrCc: RuleCondition;
    }

    class Rules {
        private "Outlook.Rules_typekey": Rules;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Create(Name: string, RuleType: OlRuleType): Rule;
        IsRssRulesProcessingEnabled: boolean;
        Item(Index: any): Rule;
        readonly Parent: any;
        Remove(Index: any): void;
        Save(ShowProgress?: any): void;
        readonly Session: NameSpace;
    }

    class Search {
        private "Outlook.Search_typekey": Search;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Filter: string;
        GetTable(): Table;
        readonly IsSynchronous: boolean;
        readonly Parent: any;
        readonly Results: Results;
        Save(Name: string): Folder;
        readonly Scope: string;
        readonly SearchSubFolders: boolean;
        readonly Session: NameSpace;
        Stop(): void;
        readonly Tag: string;
    }

    class Selection {
        private "Outlook.Selection_typekey": Selection;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        GetSelection(SelectionContents: OlSelectionContents): Selection;
        Item(Index: any): any;
        readonly Location: OlSelectionLocation;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class SelectNamesDialog {
        private "Outlook.SelectNamesDialog_typekey": SelectNamesDialog;
        private constructor();
        AllowMultipleSelection: boolean;
        readonly Application: Application;
        BccLabel: string;
        Caption: string;
        CcLabel: string;
        readonly Class: OlObjectClass;
        Display(): boolean;
        ForceResolution: boolean;
        InitialAddressList: AddressList;
        NumberOfRecipientSelectors: OlRecipientSelectors;
        readonly Parent: any;
        Recipients: Recipients;
        readonly Session: NameSpace;
        SetDefaultDisplayMode(defaultMode: OlDefaultSelectNamesDisplayMode): void;
        ShowOnlyInitialAddressList: boolean;
        ToLabel: string;
    }

    class SenderInAddressListRuleCondition {
        private "Outlook.SenderInAddressListRuleCondition_typekey": SenderInAddressListRuleCondition;
        private constructor();
        AddressList: AddressList;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class SendRuleAction {
        private "Outlook.SendRuleAction_typekey": SendRuleAction;
        private constructor();
        readonly ActionType: OlRuleActionType;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Enabled: boolean;
        readonly Parent: any;
        readonly Recipients: Recipients;
        readonly Session: NameSpace;
    }

    class SharingItem {
        private "Outlook.SharingItem_typekey": SharingItem;
        private constructor();
        readonly Actions: Actions;
        AddBusinessCard(contact: ContactItem): void;
        Allow(): void;
        AllowWriteAccess: boolean;
        AlternateRecipientAllowed: boolean;
        readonly Application: Application;
        readonly Attachments: Attachments;
        AutoForwarded: boolean;
        BCC: string;
        BillingInformation: string;
        Body: string;
        BodyFormat: OlBodyFormat;
        Categories: string;
        CC: string;
        readonly Class: OlObjectClass;
        ClearConversationIndex(): void;
        ClearTaskFlag(): void;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        DeferredDeliveryTime: VarDate;
        Delete(): void;
        DeleteAfterSubmit: boolean;
        Deny(): SharingItem;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        EnableSharedAttachments: boolean;
        readonly EntryID: string;
        ExpiryTime: VarDate;
        FlagDueBy: VarDate;
        FlagIcon: OlFlagIcon;
        FlagRequest: string;
        FlagStatus: OlFlagStatus;
        readonly FormDescription: FormDescription;
        Forward(): SharingItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        HTMLBody: string;
        Importance: OlImportance;
        InternetCodepage: number;
        readonly IsConflict: boolean;
        readonly IsMarkedAsTask: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly MAPIOBJECT: any;
        MarkAsTask(MarkInterval: OlMarkInterval): void;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        OpenSharedFolder(): Folder;
        OriginatorDeliveryReportRequested: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        Permission: OlPermission;
        PermissionService: OlPermissionService;
        PermissionTemplateGuid: string;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        ReadReceiptRequested: boolean;
        readonly ReceivedByEntryID: string;
        readonly ReceivedByName: string;
        readonly ReceivedOnBehalfOfEntryID: string;
        readonly ReceivedOnBehalfOfName: string;
        readonly ReceivedTime: VarDate;
        RecipientReassignmentProhibited: boolean;
        readonly Recipients: Recipients;
        ReminderOverrideDefault: boolean;
        ReminderPlaySound: boolean;
        ReminderSet: boolean;
        ReminderSoundFile: string;
        ReminderTime: VarDate;
        readonly RemoteID: string;
        readonly RemoteName: string;
        readonly RemotePath: string;
        RemoteStatus: OlRemoteStatus;
        Reply(): MailItem;
        ReplyAll(): MailItem;
        readonly ReplyRecipientNames: string;
        readonly ReplyRecipients: Recipients;
        readonly RequestedFolder: OlDefaultFolders;
        readonly RetentionExpirationDate: VarDate;
        readonly RetentionPolicyName: string;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        SaveSentMessageFolder: Folder;
        Send(): void;
        readonly SenderEmailAddress: string;
        readonly SenderEmailType: string;
        readonly SenderName: string;
        SendUsingAccount: Account;
        Sensitivity: OlSensitivity;
        readonly Sent: boolean;
        readonly SentOn: VarDate;
        SentOnBehalfOfName: string;
        readonly Session: NameSpace;
        readonly SharingProvider: OlSharingProvider;
        readonly SharingProviderGuid: string;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        readonly Submitted: boolean;
        TaskCompletedDate: VarDate;
        TaskDueDate: VarDate;
        TaskStartDate: VarDate;
        TaskSubject: string;
        To: string;
        ToDoTaskOrdinal: VarDate;
        Type: OlSharingMsgType;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class SimpleItems {
        private "Outlook.SimpleItems_typekey": SimpleItems;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): any;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class SolutionsModule {
        private "Outlook.SolutionsModule_typekey": SolutionsModule;
        private constructor();
        AddSolution(Solution: Folder, Scope: OlSolutionScope): void;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly NavigationModuleType: OlNavigationModuleType;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class StorageItem {
        private "Outlook.StorageItem_typekey": StorageItem;
        private constructor();
        readonly Application: Application;
        readonly Attachments: Attachments;
        Body: string;
        readonly Class: OlObjectClass;
        readonly CreationTime: VarDate;
        Creator: string;
        Delete(): void;
        readonly EntryID: string;
        readonly LastModificationTime: VarDate;
        readonly Parent: any;
        readonly PropertyAccessor: PropertyAccessor;
        Save(): void;
        readonly Session: NameSpace;
        readonly Size: number;
        Subject: string;
        readonly UserProperties: UserProperties;
    }

    class Store {
        private "Outlook.Store_typekey": Store;
        private constructor();
        readonly Application: Application;
        readonly Categories: Categories;
        readonly Class: OlObjectClass;
        readonly DisplayName: string;
        readonly ExchangeStoreType: OlExchangeStoreType;
        readonly FilePath: string;
        GetDefaultFolder(FolderType: OlDefaultFolders): Folder;
        GetRootFolder(): Folder;
        GetRules(): Rules;
        GetSearchFolders(): Folders;
        GetSpecialFolder(FolderType: OlSpecialFolders): Folder;
        readonly IsCachedExchange: boolean;
        readonly IsConversationEnabled: boolean;
        readonly IsDataFileStore: boolean;
        readonly IsInstantSearchEnabled: boolean;
        readonly IsOpen: boolean;
        readonly MAPIOBJECT: any;
        readonly Parent: any;
        readonly PropertyAccessor: PropertyAccessor;
        RefreshQuotaDisplay(): void;
        readonly Session: NameSpace;
        readonly StoreID: string;
    }

    class Stores {
        private "Outlook.Stores_typekey": Stores;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): Store;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class SyncObject {
        private "Outlook.SyncObject_typekey": SyncObject;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        Start(): void;
        Stop(): void;
    }

    class SyncObjects {
        private "Outlook.SyncObjects_typekey": SyncObjects;
        private constructor();
        readonly AppFolders: SyncObject;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): SyncObject;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class Table {
        private "Outlook.Table_typekey": Table;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Columns: Columns;
        readonly EndOfTable: boolean;
        FindNextRow(): Row;
        FindRow(Filter: string): Row;
        GetArray(MaxRows: number): any;
        GetNextRow(): Row;
        GetRowCount(): number;
        MoveToStart(): void;
        readonly Parent: any;
        Restrict(Filter: string): Table;
        readonly Session: NameSpace;
        Sort(SortProperty: string, Descending?: any): void;
    }

    class TableView {
        private "Outlook.TableView_typekey": TableView;
        private constructor();
        AllowInCellEditing: boolean;
        AlwaysExpandConversation: boolean;
        readonly Application: Application;
        Apply(): void;
        readonly AutoFormatRules: AutoFormatRules;
        AutomaticColumnSizing: boolean;
        AutomaticGrouping: boolean;
        AutoPreview: OlAutoPreview;
        readonly AutoPreviewFont: ViewFont;
        readonly Class: OlObjectClass;
        readonly ColumnFont: ViewFont;
        Copy(Name: string, SaveOption: OlViewSaveOption): View;
        DefaultExpandCollapseSetting: OlDefaultExpandCollapseSetting;
        Delete(): void;
        Filter: string;
        GetTable(): Table;
        GoToDate(Date: VarDate): void;
        GridLineStyle: OlGridLineStyle;
        readonly GroupByFields: OrderFields;
        HideReadingPaneHeaderInfo: boolean;
        Language: string;
        LockUserChanges: boolean;
        MaxLinesInMultiLineView: number;
        MultiLine: OlMultiLine;
        MultiLineWidth: number;
        Name: string;
        readonly Parent: any;
        Reset(): void;
        readonly RowFont: ViewFont;
        Save(): void;
        readonly SaveOption: OlViewSaveOption;
        readonly Session: NameSpace;
        ShowConversationByDate: boolean;
        ShowConversationSendersAboveSubject: boolean;
        ShowFullConversations: boolean;
        ShowItemsInGroups: boolean;
        ShowNewItemRow: boolean;
        ShowReadingPane: boolean;
        ShowUnreadAndFlaggedMessages: boolean;
        readonly SortFields: OrderFields;
        readonly Standard: boolean;
        readonly ViewFields: ViewFields;
        readonly ViewType: OlViewType;
        XML: string;
    }

    class TaskItem {
        private "Outlook.TaskItem_typekey": TaskItem;
        private constructor();
        readonly Actions: Actions;
        ActualWork: number;
        readonly Application: Application;
        Assign(): TaskItem;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        CancelResponseState(): void;
        CardData: string;
        Categories: string;
        readonly Class: OlObjectClass;
        ClearRecurrencePattern(): void;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        Complete: boolean;
        readonly Conflicts: Conflicts;
        ContactNames: string;
        Contacts: string;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        DateCompleted: VarDate;
        readonly DelegationState: OlTaskDelegationState;
        readonly Delegator: string;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        DueDate: VarDate;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        GetRecurrencePattern(): RecurrencePattern;
        Importance: OlImportance;
        InternetCodepage: number;
        readonly IsConflict: boolean;
        readonly IsRecurring: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkComplete(): void;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        Ordinal: number;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        Owner: string;
        readonly Ownership: OlTaskOwnership;
        readonly Parent: any;
        PercentComplete: number;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        readonly Recipients: Recipients;
        ReminderOverrideDefault: boolean;
        ReminderPlaySound: boolean;
        ReminderSet: boolean;
        ReminderSoundFile: string;
        ReminderTime: VarDate;
        Respond(Response: OlTaskResponse, fNoUI: any, fAdditionalTextDialog: any): TaskItem;
        readonly ResponseState: OlTaskResponse;
        Role: string;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        SchedulePlusPriority: string;
        Send(): void;
        SendUsingAccount: Account;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        SkipRecurrence(): boolean;
        StartDate: VarDate;
        Status: OlTaskStatus;
        StatusOnCompletionRecipients: string;
        StatusReport(): any;
        StatusUpdateRecipients: string;
        Subject: string;
        TeamTask: boolean;
        ToDoTaskOrdinal: VarDate;
        TotalWork: number;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class TaskRequestAcceptItem {
        private "Outlook.TaskRequestAcceptItem_typekey": TaskRequestAcceptItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        GetAssociatedTask(AddToTaskList: boolean): TaskItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class TaskRequestDeclineItem {
        private "Outlook.TaskRequestDeclineItem_typekey": TaskRequestDeclineItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        GetAssociatedTask(AddToTaskList: boolean): TaskItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class TaskRequestItem {
        private "Outlook.TaskRequestItem_typekey": TaskRequestItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        GetAssociatedTask(AddToTaskList: boolean): TaskItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class TaskRequestUpdateItem {
        private "Outlook.TaskRequestUpdateItem_typekey": TaskRequestUpdateItem;
        private constructor();
        readonly Actions: Actions;
        readonly Application: Application;
        readonly Attachments: Attachments;
        readonly AutoResolvedWinner: boolean;
        BillingInformation: string;
        Body: string;
        Categories: string;
        readonly Class: OlObjectClass;
        Close(SaveMode: OlInspectorClose): void;
        Companies: string;
        readonly Conflicts: Conflicts;
        readonly ConversationID: string;
        readonly ConversationIndex: string;
        readonly ConversationTopic: string;
        Copy(): any;
        readonly CreationTime: VarDate;
        Delete(): void;
        Display(Modal?: any): void;
        readonly DownloadState: OlDownloadState;
        readonly EntryID: string;
        readonly FormDescription: FormDescription;
        GetAssociatedTask(AddToTaskList: boolean): TaskItem;
        GetConversation(): Conversation;
        readonly GetInspector: Inspector;
        Importance: OlImportance;
        readonly IsConflict: boolean;
        readonly ItemProperties: ItemProperties;
        readonly LastModificationTime: VarDate;
        readonly Links: Links;
        readonly MAPIOBJECT: any;
        MarkForDownload: OlRemoteStatus;
        MessageClass: string;
        Mileage: string;
        Move(DestFldr: Folder): any;
        NoAging: boolean;
        readonly OutlookInternalVersion: number;
        readonly OutlookVersion: string;
        readonly Parent: any;
        PrintOut(): void;
        readonly PropertyAccessor: PropertyAccessor;
        RTFBody: any;
        Save(): void;
        SaveAs(Path: string, Type?: any): void;
        readonly Saved: boolean;
        Sensitivity: OlSensitivity;
        readonly Session: NameSpace;
        ShowCategoriesDialog(): void;
        readonly Size: number;
        Subject: string;
        UnRead: boolean;
        readonly UserProperties: UserProperties;
    }

    class TasksModule {
        private "Outlook.TasksModule_typekey": TasksModule;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Name: string;
        readonly NavigationGroups: NavigationGroups;
        readonly NavigationModuleType: OlNavigationModuleType;
        readonly Parent: any;
        Position: number;
        readonly Session: NameSpace;
        Visible: boolean;
    }

    class TextRuleCondition {
        private "Outlook.TextRuleCondition_typekey": TextRuleCondition;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        readonly Parent: any;
        readonly Session: NameSpace;
        Text: any;
    }

    class TimelineView {
        private "Outlook.TimelineView_typekey": TimelineView;
        private constructor();
        readonly Application: Application;
        Apply(): void;
        readonly Class: OlObjectClass;
        Copy(Name: string, SaveOption: OlViewSaveOption): View;
        DefaultExpandCollapseSetting: OlDefaultExpandCollapseSetting;
        Delete(): void;
        EndField: string;
        Filter: string;
        GoToDate(Date: VarDate): void;
        readonly GroupByFields: OrderFields;
        readonly ItemFont: ViewFont;
        Language: string;
        LockUserChanges: boolean;
        readonly LowerScaleFont: ViewFont;
        MaxLabelWidth: number;
        Name: string;
        readonly Parent: any;
        Reset(): void;
        Save(): void;
        readonly SaveOption: OlViewSaveOption;
        readonly Session: NameSpace;
        ShowLabelWhenViewingByMonth: boolean;
        ShowWeekNumbers: boolean;
        readonly Standard: boolean;
        StartField: string;
        TimelineViewMode: OlTimelineViewMode;
        readonly UpperScaleFont: ViewFont;
        readonly ViewType: OlViewType;
        XML: string;
    }

    class TimeZone {
        private "Outlook.TimeZone_typekey": TimeZone;
        private constructor();
        readonly Application: Application;
        readonly Bias: number;
        readonly Class: OlObjectClass;
        readonly DaylightBias: number;
        readonly DaylightDate: VarDate;
        readonly DaylightDesignation: string;
        readonly ID: string;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly StandardBias: number;
        readonly StandardDate: VarDate;
        readonly StandardDesignation: string;
    }

    class TimeZones {
        private "Outlook.TimeZones_typekey": TimeZones;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        ConvertTime(SourceDateTime: VarDate, SourceTimeZone: TimeZone, DestinationTimeZone: TimeZone): VarDate;
        readonly Count: number;
        readonly CurrentTimeZone: TimeZone;
        Item(Index: any): TimeZone;
        readonly Parent: any;
        readonly Session: NameSpace;
    }

    class ToOrFromRuleCondition {
        private "Outlook.ToOrFromRuleCondition_typekey": ToOrFromRuleCondition;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ConditionType: OlRuleConditionType;
        Enabled: boolean;
        readonly Parent: any;
        readonly Recipients: Recipients;
        readonly Session: NameSpace;
    }

    class UserDefinedProperties {
        private "Outlook.UserDefinedProperties_typekey": UserDefinedProperties;
        private constructor();
        Add(Name: string, Type: OlUserPropertyType, DisplayFormat?: any, Formula?: any): UserDefinedProperty;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Find(Name: string): UserDefinedProperty;
        Item(Index: any): UserDefinedProperty;
        readonly Parent: any;
        Refresh(): void;
        Remove(Index: number): void;
        readonly Session: NameSpace;
    }

    class UserDefinedProperty {
        private "Outlook.UserDefinedProperty_typekey": UserDefinedProperty;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Delete(): void;
        readonly DisplayFormat: number;
        readonly Formula: string;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly Type: OlUserPropertyType;
    }

    class UserProperties {
        private "Outlook.UserProperties_typekey": UserProperties;
        private constructor();
        Add(Name: string, Type: OlUserPropertyType, AddToFolderFields?: any, DisplayFormat?: any): UserProperty;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Find(Name: string, Custom?: any): UserProperty;
        Item(Index: any): UserProperty;
        readonly Parent: any;
        Remove(Index: number): void;
        readonly Session: NameSpace;
    }

    class UserProperty {
        private "Outlook.UserProperty_typekey": UserProperty;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        Delete(): void;
        Formula: string;
        readonly IsUserProperty: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly Type: OlUserPropertyType;
        ValidationFormula: string;
        ValidationText: string;
        Value: any;
    }

    class View {
        private "Outlook.View_typekey": View;
        private constructor();
        readonly Application: Application;
        Apply(): void;
        readonly Class: OlObjectClass;
        Copy(Name: string, SaveOption: OlViewSaveOption): View;
        Delete(): void;
        Filter: string;
        GoToDate(Date: VarDate): void;
        Language: string;
        LockUserChanges: boolean;
        Name: string;
        readonly Parent: any;
        Reset(): void;
        Save(): void;
        readonly SaveOption: OlViewSaveOption;
        readonly Session: NameSpace;
        readonly Standard: boolean;
        readonly ViewType: OlViewType;
        XML: string;
    }

    class ViewField {
        private "Outlook.ViewField_typekey": ViewField;
        private constructor();
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly ColumnFormat: ColumnFormat;
        readonly Parent: any;
        readonly Session: NameSpace;
        readonly ViewXMLSchemaName: string;
    }

    class ViewFields {
        private "Outlook.ViewFields_typekey": ViewFields;
        private constructor();
        Add(PropertyName: string): ViewField;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Insert(PropertyName: string, Index: any): ViewField;
        Item(Index: any): ViewField;
        readonly Parent: any;
        Remove(Index: any): void;
        readonly Session: NameSpace;
    }

    class ViewFont {
        private "Outlook.ViewFont_typekey": ViewFont;
        private constructor();
        readonly Application: Application;
        Bold: boolean;
        readonly Class: OlObjectClass;
        Color: OlColor;
        ExtendedColor: OlCategoryColor;
        Italic: boolean;
        Name: string;
        readonly Parent: any;
        readonly Session: NameSpace;
        Size: number;
        Strikethrough: boolean;
        Underline: boolean;
    }

    class Views {
        private "Outlook.Views_typekey": Views;
        private constructor();
        Add(Name: string, ViewType: OlViewType, SaveOption: OlViewSaveOption): View;
        readonly Application: Application;
        readonly Class: OlObjectClass;
        readonly Count: number;
        Item(Index: any): View;
        readonly Parent: any;
        Remove(Index: any): void;
        readonly Session: NameSpace;
    }
}

interface ActiveXObject {
    on(
        obj: Outlook.Accounts,
        event: "AutoDiscoverComplete",
        argNames: ["Account"],
        handler: (this: Outlook.Accounts, parameter: { readonly Account: Outlook.Account }) => void,
    ): void;
    on(
        obj: Outlook.AccountSelector,
        event: "SelectedAccountChange",
        argNames: ["SelectedAccount"],
        handler: (
            this: Outlook.AccountSelector,
            parameter: { readonly SelectedAccount: Outlook.Account },
        ) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "AdvancedSearchComplete" | "AdvancedSearchStopped",
        argNames: ["SearchObject"],
        handler: (
            this: Outlook.Application,
            parameter: { readonly SearchObject: Outlook.Search },
        ) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "AttachmentContextMenuDisplay",
        argNames: ["CommandBar", "Attachments"],
        handler: (
            this: Outlook.Application,
            parameter: { readonly CommandBar: Office.CommandBar; readonly Attachments: Outlook.AttachmentSelection },
        ) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "BeforeFolderSharingDialog",
        argNames: ["FolderToShare", "Cancel"],
        handler: (
            this: Outlook.Application,
            parameter: { readonly FolderToShare: Outlook.Folder; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "ContextMenuClose",
        argNames: ["ContextMenu"],
        handler: (this: Outlook.Application, parameter: { readonly ContextMenu: Outlook.OlContextMenu }) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "FolderContextMenuDisplay",
        argNames: ["CommandBar", "Folder"],
        handler: (
            this: Outlook.Application,
            parameter: { readonly CommandBar: Office.CommandBar; readonly Folder: Outlook.Folder },
        ) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "ItemContextMenuDisplay",
        argNames: ["CommandBar", "Selection"],
        handler: (
            this: Outlook.Application,
            parameter: { readonly CommandBar: Office.CommandBar; readonly Selection: Outlook.Selection },
        ) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "ItemLoad" | "Reminder",
        argNames: ["Item"],
        handler: (this: Outlook.Application, parameter: { readonly Item: any }) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "ItemSend",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.Application, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "NewMailEx",
        argNames: ["EntryIDCollection"],
        handler: (this: Outlook.Application, parameter: { readonly EntryIDCollection: string }) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "OptionsPagesAdd",
        argNames: ["Pages"],
        handler: (this: Outlook.Application, parameter: { readonly Pages: Outlook.PropertyPages }) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "ShortcutContextMenuDisplay",
        argNames: ["CommandBar", "Shortcut"],
        handler: (
            this: Outlook.Application,
            parameter: { readonly CommandBar: Office.CommandBar; readonly Shortcut: Outlook.OutlookBarShortcut },
        ) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "StoreContextMenuDisplay",
        argNames: ["CommandBar", "Store"],
        handler: (
            this: Outlook.Application,
            parameter: { readonly CommandBar: Office.CommandBar; readonly Store: Outlook.Store },
        ) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "ViewContextMenuDisplay",
        argNames: ["CommandBar", "View"],
        handler: (
            this: Outlook.Application,
            parameter: { readonly CommandBar: Office.CommandBar; readonly View: Outlook.View },
        ) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.AppointmentItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.AppointmentItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.AppointmentItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.AppointmentItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.AppointmentItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.AppointmentItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.AppointmentItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.AppointmentItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.ContactItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.ContactItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.ContactItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.ContactItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.ContactItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.ContactItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.ContactItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.ContactItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.DistListItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.DistListItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.DistListItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.DistListItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.DistListItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.DistListItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.DistListItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.DistListItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.DocumentItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.DocumentItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.DocumentItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.DocumentItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.DocumentItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.DocumentItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.DocumentItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.DocumentItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.Explorer,
        event: "BeforeFolderSwitch",
        argNames: ["NewFolder", "Cancel"],
        handler: (this: Outlook.Explorer, parameter: { readonly NewFolder: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Explorer,
        event: "BeforeItemCopy" | "BeforeItemCut" | "BeforeMaximize" | "BeforeMinimize" | "BeforeMove" | "BeforeSize",
        argNames: ["Cancel"],
        handler: (this: Outlook.Explorer, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Explorer,
        event: "BeforeItemPaste",
        argNames: ["ClipboardContent", "Target", "Cancel"],
        handler: (
            this: Outlook.Explorer,
            parameter: { readonly ClipboardContent: any; readonly Target: Outlook.Folder; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.Explorer,
        event: "BeforeViewSwitch",
        argNames: ["NewView", "Cancel"],
        handler: (this: Outlook.Explorer, parameter: { readonly NewView: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Explorers,
        event: "NewExplorer",
        argNames: ["Explorer"],
        handler: (this: Outlook.Explorers, parameter: { readonly Explorer: Outlook.Explorer }) => void,
    ): void;
    on(
        obj: Outlook.Folder,
        event: "BeforeFolderMove",
        argNames: ["MoveTo", "Cancel"],
        handler: (this: Outlook.Folder, parameter: { readonly MoveTo: Outlook.Folder; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Folder,
        event: "BeforeItemMove",
        argNames: ["Item", "MoveTo", "Cancel"],
        handler: (
            this: Outlook.Folder,
            parameter: { readonly Item: any; readonly MoveTo: Outlook.Folder; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.Folders,
        event: "FolderAdd" | "FolderChange",
        argNames: ["Folder"],
        handler: (this: Outlook.Folders, parameter: { readonly Folder: Outlook.Folder }) => void,
    ): void;
    on(
        obj: Outlook.FormRegion,
        event: "Expanded",
        argNames: ["Expand"],
        handler: (this: Outlook.FormRegion, parameter: { readonly Expand: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Inspector,
        event: "BeforeMaximize" | "BeforeMinimize" | "BeforeMove" | "BeforeSize",
        argNames: ["Cancel"],
        handler: (
            this: Outlook.Inspector,
            parameter: { Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.Inspector,
        event: "PageChange",
        argNames: ["ActivePageName"],
        handler: (this: Outlook.Inspector, parameter: { readonly ActivePageName: string }) => void,
    ): void;
    on(
        obj: Outlook.Inspectors,
        event: "NewInspector",
        argNames: ["Inspector"],
        handler: (this: Outlook.Inspectors, parameter: { readonly Inspector: Outlook.Inspector }) => void,
    ): void;
    on(
        obj: Outlook.Items,
        event: "ItemAdd" | "ItemChange",
        argNames: ["Item"],
        handler: (this: Outlook.Items, parameter: { readonly Item: any }) => void,
    ): void;
    on(
        obj: Outlook.JournalItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.JournalItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.JournalItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.JournalItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.JournalItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.JournalItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.JournalItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.JournalItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.JournalItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.JournalItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.JournalItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.JournalItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.JournalItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.JournalItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.JournalItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.JournalItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.MailItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.MailItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (
            this: Outlook.MailItem,
            parameter: { Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.MailItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.MailItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.MailItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.MailItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (this: Outlook.MailItem, parameter: { readonly Response: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.MeetingItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.MeetingItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.MeetingItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.MeetingItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.MeetingItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.MeetingItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.MeetingItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.MeetingItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.MobileItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.MobileItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.MobileItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.MobileItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.MobileItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.MobileItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.MobileItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (this: Outlook.MobileItem, parameter: { readonly Response: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.NameSpace,
        event: "OptionsPagesAdd",
        argNames: ["Pages", "Folder"],
        handler: (
            this: Outlook.NameSpace,
            parameter: { readonly Pages: Outlook.PropertyPages; readonly Folder: Outlook.Folder },
        ) => void,
    ): void;
    on(
        obj: Outlook.NavigationGroups,
        event: "NavigationFolderAdd" | "SelectedChange",
        argNames: ["NavigationFolder"],
        handler: (
            this: Outlook.NavigationGroups,
            parameter: { readonly NavigationFolder: Outlook.NavigationFolder },
        ) => void,
    ): void;
    on(
        obj: Outlook.NavigationPane,
        event: "ModuleSwitch",
        argNames: ["CurrentModule"],
        handler: (
            this: Outlook.NavigationPane,
            parameter: { readonly CurrentModule: Outlook.NavigationModule },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkBusinessCardControl,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkBusinessCardControl,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkCategory,
        event: "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkCategory, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkCategory,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkCategory,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkCategory,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkCategory, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkCategory,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkCategory,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkCheckBox,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkCheckBox, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkCheckBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkCheckBox,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkCheckBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkCheckBox, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkCheckBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkCheckBox,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkComboBox,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkComboBox, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkComboBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkComboBox,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkComboBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkComboBox, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkComboBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkComboBox,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkCommandButton,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkCommandButton, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkCommandButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkCommandButton,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkCommandButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkCommandButton, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkCommandButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkCommandButton,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkContactPhoto,
        event: "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkContactPhoto, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkContactPhoto,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkContactPhoto,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkContactPhoto,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkContactPhoto, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkContactPhoto,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkContactPhoto,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkDateControl,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkDateControl, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkDateControl,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkDateControl,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkDateControl,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkDateControl, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkDateControl,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkDateControl,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkInfoBar,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkInfoBar,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkLabel,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkLabel,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkListBox,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkListBox, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkListBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkListBox,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkListBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkListBox, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkListBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkListBox,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkOptionButton,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkOptionButton, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkOptionButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkOptionButton,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkOptionButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkOptionButton, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkOptionButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkOptionButton,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkSenderPhoto,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkSenderPhoto,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkTextBox,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkTextBox, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkTextBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkTextBox,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkTextBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkTextBox, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkTextBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkTextBox,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeControl,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkTimeControl, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeControl,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkTimeControl,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeControl,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkTimeControl, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeControl,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkTimeControl,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeZoneControl,
        event: "BeforeUpdate" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Outlook.OlkTimeZoneControl, parameter: { readonly Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeZoneControl,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (
            this: Outlook.OlkTimeZoneControl,
            parameter: { readonly KeyCode: number; readonly Shift: Outlook.OlShiftState },
        ) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeZoneControl,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Outlook.OlkTimeZoneControl, parameter: { readonly KeyAscii: number }) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeZoneControl,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Outlook.OlkTimeZoneControl,
            parameter: {
                readonly Button: Outlook.OlMouseButton;
                readonly Shift: Outlook.OlShiftState;
                readonly X: stdole.OLE_XPOS_CONTAINER;
                readonly Y: stdole.OLE_YPOS_CONTAINER;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.OutlookBarGroups,
        event: "BeforeGroupAdd",
        argNames: ["Cancel"],
        handler: (this: Outlook.OutlookBarGroups, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OutlookBarGroups,
        event: "BeforeGroupRemove",
        argNames: ["Group", "Cancel"],
        handler: (
            this: Outlook.OutlookBarGroups,
            parameter: { readonly Group: Outlook.OutlookBarGroup; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.OutlookBarGroups,
        event: "GroupAdd",
        argNames: ["NewGroup"],
        handler: (this: Outlook.OutlookBarGroups, parameter: { readonly NewGroup: Outlook.OutlookBarGroup }) => void,
    ): void;
    on(
        obj: Outlook.OutlookBarPane,
        event: "BeforeGroupSwitch",
        argNames: ["ToGroup", "Cancel"],
        handler: (
            this: Outlook.OutlookBarPane,
            parameter: { readonly ToGroup: Outlook.OutlookBarGroup; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.OutlookBarPane,
        event: "BeforeNavigate",
        argNames: ["Shortcut", "Cancel"],
        handler: (
            this: Outlook.OutlookBarPane,
            parameter: { readonly Shortcut: Outlook.OutlookBarShortcut; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.OutlookBarShortcuts,
        event: "BeforeShortcutAdd",
        argNames: ["Cancel"],
        handler: (this: Outlook.OutlookBarShortcuts, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.OutlookBarShortcuts,
        event: "BeforeShortcutRemove",
        argNames: ["Shortcut", "Cancel"],
        handler: (
            this: Outlook.OutlookBarShortcuts,
            parameter: { readonly Shortcut: Outlook.OutlookBarShortcut; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.OutlookBarShortcuts,
        event: "ShortcutAdd",
        argNames: ["NewShortcut"],
        handler: (
            this: Outlook.OutlookBarShortcuts,
            parameter: { readonly NewShortcut: Outlook.OutlookBarShortcut },
        ) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.PostItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.PostItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (
            this: Outlook.PostItem,
            parameter: { Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.PostItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.PostItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.PostItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.PostItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (this: Outlook.PostItem, parameter: { readonly Response: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Reminders,
        event: "BeforeReminderShow",
        argNames: ["Cancel"],
        handler: (this: Outlook.Reminders, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Reminders,
        event: "ReminderAdd" | "ReminderChange" | "ReminderFire" | "Snooze",
        argNames: ["ReminderObject"],
        handler: (
            this: Outlook.Reminders,
            parameter: { readonly ReminderObject: Outlook.Reminder },
        ) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.RemoteItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.RemoteItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.RemoteItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.RemoteItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.RemoteItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.RemoteItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.RemoteItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (this: Outlook.RemoteItem, parameter: { readonly Response: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.ReportItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.ReportItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.ReportItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.ReportItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.ReportItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.ReportItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.ReportItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (this: Outlook.ReportItem, parameter: { readonly Response: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Results,
        event: "ItemAdd" | "ItemChange",
        argNames: ["Item"],
        handler: (this: Outlook.Results, parameter: { readonly Item: any }) => void,
    ): void;
    on(
        obj: Outlook.SharingItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.SharingItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.SharingItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.SharingItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.SharingItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.SharingItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.SharingItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.SharingItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.SharingItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.SharingItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.SharingItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.SharingItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.SharingItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.SharingItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.SharingItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.SharingItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.Stores,
        event: "BeforeStoreRemove",
        argNames: ["Store", "Cancel"],
        handler: (this: Outlook.Stores, parameter: { readonly Store: Outlook.Store; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.Stores,
        event: "StoreAdd",
        argNames: ["Store"],
        handler: (this: Outlook.Stores, parameter: { readonly Store: Outlook.Store }) => void,
    ): void;
    on(
        obj: Outlook.SyncObject,
        event: "OnError",
        argNames: ["Code", "Description"],
        handler: (
            this: Outlook.SyncObject,
            parameter: { readonly Code: number; readonly Description: string },
        ) => void,
    ): void;
    on(
        obj: Outlook.SyncObject,
        event: "Progress",
        argNames: ["State", "Description", "Value", "Max"],
        handler: (
            this: Outlook.SyncObject,
            parameter: {
                readonly State: Outlook.OlSyncState;
                readonly Description: string;
                readonly Value: number;
                readonly Max: number;
            },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.TaskItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.TaskItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (
            this: Outlook.TaskItem,
            parameter: { Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.TaskItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.TaskItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.TaskItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.TaskItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (this: Outlook.TaskItem, parameter: { readonly Response: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (this: Outlook.TaskRequestAcceptItem, parameter: { readonly Attachment: Outlook.Attachment }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.TaskRequestAcceptItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.TaskRequestAcceptItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (
            this: Outlook.TaskRequestAcceptItem,
            parameter: { readonly Item: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.TaskRequestAcceptItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (
            this: Outlook.TaskRequestAcceptItem,
            parameter: { readonly Name: string },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (
            this: Outlook.TaskRequestAcceptItem,
            parameter: { readonly Forward: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.TaskRequestAcceptItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (this: Outlook.TaskRequestDeclineItem, parameter: { readonly Attachment: Outlook.Attachment }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.TaskRequestDeclineItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.TaskRequestDeclineItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (
            this: Outlook.TaskRequestDeclineItem,
            parameter: { readonly Item: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.TaskRequestDeclineItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (
            this: Outlook.TaskRequestDeclineItem,
            parameter: { readonly Name: string },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (
            this: Outlook.TaskRequestDeclineItem,
            parameter: { readonly Forward: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.TaskRequestDeclineItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (
            this: Outlook.TaskRequestItem,
            parameter: { readonly Attachment: Outlook.Attachment },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.TaskRequestItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.TaskRequestItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (this: Outlook.TaskRequestItem, parameter: { readonly Item: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.TaskRequestItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (this: Outlook.TaskRequestItem, parameter: { readonly Name: string }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (this: Outlook.TaskRequestItem, parameter: { readonly Forward: any; Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.TaskRequestItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event: "AttachmentAdd" | "AttachmentRead" | "AttachmentRemove",
        argNames: ["Attachment"],
        handler: (this: Outlook.TaskRequestUpdateItem, parameter: { readonly Attachment: Outlook.Attachment }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event:
            | "BeforeAttachmentAdd"
            | "BeforeAttachmentPreview"
            | "BeforeAttachmentRead"
            | "BeforeAttachmentSave"
            | "BeforeAttachmentWriteToTempFile",
        argNames: ["Attachment", "Cancel"],
        handler: (
            this: Outlook.TaskRequestUpdateItem,
            parameter: { readonly Attachment: Outlook.Attachment; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event: "BeforeAutoSave" | "BeforeCheckNames" | "Close" | "Open" | "Send" | "Write",
        argNames: ["Cancel"],
        handler: (this: Outlook.TaskRequestUpdateItem, parameter: { Cancel: boolean }) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event: "BeforeDelete",
        argNames: ["Item", "Cancel"],
        handler: (
            this: Outlook.TaskRequestUpdateItem,
            parameter: { readonly Item: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event: "CustomAction",
        argNames: ["Action", "Response", "Cancel"],
        handler: (
            this: Outlook.TaskRequestUpdateItem,
            parameter: { readonly Action: any; readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event: "CustomPropertyChange" | "PropertyChange",
        argNames: ["Name"],
        handler: (
            this: Outlook.TaskRequestUpdateItem,
            parameter: { readonly Name: string },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event: "Forward",
        argNames: ["Forward", "Cancel"],
        handler: (
            this: Outlook.TaskRequestUpdateItem,
            parameter: { readonly Forward: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event: "Reply" | "ReplyAll",
        argNames: ["Response", "Cancel"],
        handler: (
            this: Outlook.TaskRequestUpdateItem,
            parameter: { readonly Response: any; Cancel: boolean },
        ) => void,
    ): void;
    on(
        obj: Outlook.Views,
        event: "ViewAdd" | "ViewRemove",
        argNames: ["View"],
        handler: (this: Outlook.Views, parameter: { readonly View: Outlook.View }) => void,
    ): void;
    on(
        obj: Outlook.Application,
        event: "MAPILogonComplete" | "NewMail" | "Quit" | "Startup",
        handler: (this: Outlook.Application, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.AppointmentItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.AppointmentItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.ContactItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.ContactItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.DistListItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.DistListItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.DocumentItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.DocumentItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.Explorer,
        event:
            | "Activate"
            | "AttachmentSelectionChange"
            | "Close"
            | "Deactivate"
            | "FolderSwitch"
            | "SelectionChange"
            | "ViewSwitch",
        handler: (this: Outlook.Explorer, parameter: {}) => void,
    ): void;
    on(obj: Outlook.Folders, event: "FolderRemove", handler: (this: Outlook.Folders, parameter: {}) => void): void;
    on(obj: Outlook.FormRegion, event: "Close", handler: (this: Outlook.FormRegion, parameter: {}) => void): void;
    on(
        obj: Outlook.Inspector,
        event: "Activate" | "AttachmentSelectionChange" | "Close" | "Deactivate",
        handler: (this: Outlook.Inspector, parameter: {}) => void,
    ): void;
    on(obj: Outlook.Items, event: "ItemRemove", handler: (this: Outlook.Items, parameter: {}) => void): void;
    on(
        obj: Outlook.JournalItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.JournalItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.MailItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.MailItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.MeetingItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.MeetingItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.MobileItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.MobileItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.NameSpace,
        event: "AutoDiscoverComplete",
        handler: (this: Outlook.NameSpace, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.NavigationGroups,
        event: "NavigationFolderRemove",
        handler: (this: Outlook.NavigationGroups, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkBusinessCardControl,
        event: "Click" | "DoubleClick",
        handler: (this: Outlook.OlkBusinessCardControl, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkCategory,
        event: "Change" | "Click" | "DoubleClick" | "Enter",
        handler: (this: Outlook.OlkCategory, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkCheckBox,
        event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "Enter",
        handler: (this: Outlook.OlkCheckBox, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkComboBox,
        event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "DropButtonClick" | "Enter",
        handler: (this: Outlook.OlkComboBox, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkCommandButton,
        event: "AfterUpdate" | "Click" | "DoubleClick" | "Enter",
        handler: (this: Outlook.OlkCommandButton, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkContactPhoto,
        event: "Change" | "Click" | "DoubleClick" | "Enter",
        handler: (this: Outlook.OlkContactPhoto, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkDateControl,
        event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "DropButtonClick" | "Enter",
        handler: (this: Outlook.OlkDateControl, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkInfoBar,
        event: "Click" | "DoubleClick",
        handler: (this: Outlook.OlkInfoBar, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkLabel,
        event: "Click" | "DoubleClick",
        handler: (this: Outlook.OlkLabel, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkListBox,
        event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "Enter",
        handler: (this: Outlook.OlkListBox, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkOptionButton,
        event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "Enter",
        handler: (this: Outlook.OlkOptionButton, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkSenderPhoto,
        event: "Change" | "Click" | "DoubleClick",
        handler: (this: Outlook.OlkSenderPhoto, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkTextBox,
        event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "Enter",
        handler: (this: Outlook.OlkTextBox, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeControl,
        event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "DropButtonClick" | "Enter",
        handler: (this: Outlook.OlkTimeControl, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.OlkTimeZoneControl,
        event: "AfterUpdate" | "Change" | "Click" | "DoubleClick" | "DropButtonClick" | "Enter",
        handler: (this: Outlook.OlkTimeZoneControl, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.PostItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.PostItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.Reminders,
        event: "ReminderRemove",
        handler: (this: Outlook.Reminders, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.RemoteItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.RemoteItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.ReportItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.ReportItem, parameter: {}) => void,
    ): void;
    on(obj: Outlook.Results, event: "ItemRemove", handler: (this: Outlook.Results, parameter: {}) => void): void;
    on(
        obj: Outlook.SharingItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.SharingItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.SyncObject,
        event: "SyncEnd" | "SyncStart",
        handler: (this: Outlook.SyncObject, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.TaskItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.TaskItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestAcceptItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.TaskRequestAcceptItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestDeclineItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.TaskRequestDeclineItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.TaskRequestItem, parameter: {}) => void,
    ): void;
    on(
        obj: Outlook.TaskRequestUpdateItem,
        event: "AfterWrite" | "BeforeRead" | "Read" | "Unload",
        handler: (this: Outlook.TaskRequestUpdateItem, parameter: {}) => void,
    ): void;
}

interface ActiveXObjectNameMap {
    "DOCSITE.DocSiteControl": Outlook._DocSiteControl;
    "Outlook.Application": Outlook.Application;
    "Outlook.OlkBusinessCardControl": Outlook.OlkBusinessCardControl;
    "Outlook.OlkCategoryStrip": Outlook.OlkCategory;
    "Outlook.OlkCheckBox": Outlook.OlkCheckBox;
    "Outlook.OlkComboBox": Outlook.OlkComboBox;
    "Outlook.OlkCommandButton": Outlook.OlkCommandButton;
    "Outlook.OlkContactPhoto": Outlook.OlkContactPhoto;
    "Outlook.OlkDateControl": Outlook.OlkDateControl;
    "Outlook.OlkFrameHeader": Outlook.OlkFrameHeader;
    "Outlook.OlkInfoBar": Outlook.OlkInfoBar;
    "Outlook.OlkLabel": Outlook.OlkLabel;
    "Outlook.OlkListBox": Outlook.OlkListBox;
    "Outlook.OlkOptionButton": Outlook.OlkOptionButton;
    "Outlook.OlkPageControl": Outlook.OlkPageControl;
    "Outlook.OlkSenderPhoto": Outlook.OlkSenderPhoto;
    "Outlook.OlkTextBox": Outlook.OlkTextBox;
    "Outlook.OlkTimeControl": Outlook.OlkTimeControl;
    "Outlook.OlkTimeZone": Outlook.OlkTimeZoneControl;
    "RECIP.RecipCtl": Outlook._RecipientControl;
}

interface EnumeratorConstructor {
    new(col: Outlook.ItemProperties): Enumerator<Outlook.ItemProperty>;
    new(col: Outlook.Reminders): Enumerator<Outlook.Reminder>;
    new(col: Outlook.Views): Enumerator<Outlook.View>;
}
