// Type definitions for Microsoft Outlook 14.0 Object Library - Outlook 14.0
// Project: https://msdn.microsoft.com/en-us/vba/vba-outlook
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        private 'Outlook._DocSiteControl_typekey': _DocSiteControl;
        private constructor();
        public ReadOnly: number;
        public SuppressAttachments: number;
    }

    class _RecipientControl {
        private 'Outlook._RecipientControl_typekey': _RecipientControl;
        private constructor();
        public BackColor: number;
        public Enabled: number;
        public Font: any;
        public ForeColor: number;
        public ReadOnly: number;
        public SpecialEffect: number;
    }

    class Account {
        private 'Outlook.Account_typekey': Account;
        private constructor();
        public readonly AccountType: OlAccountType;
        public readonly Application: Application;
        public readonly AutoDiscoverConnectionMode: OlAutoDiscoverConnectionMode;
        public readonly AutoDiscoverXml: string;
        public readonly Class: OlObjectClass;
        public readonly CurrentUser: Recipient;
        public readonly DeliveryStore: Store;
        public readonly DisplayName: string;
        public readonly ExchangeConnectionMode: OlExchangeConnectionMode;
        public readonly ExchangeMailboxServerName: string;
        public readonly ExchangeMailboxServerVersion: string;
        public GetAddressEntryFromID(ID: string): AddressEntry;
        public GetRecipientFromID(EntryID: string): Recipient;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly SmtpAddress: string;
        public readonly UserName: string;
    }

    class AccountRuleCondition {
        private 'Outlook.AccountRuleCondition_typekey': AccountRuleCondition;
        private constructor();
        public Account: Account;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Accounts {
        private 'Outlook.Accounts_typekey': Accounts;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Account;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class AccountSelector {
        private 'Outlook.AccountSelector_typekey': AccountSelector;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Parent: any;
        public readonly SelectedAccount: Account;
        public readonly Session: NameSpace;
    }

    class Action {
        private 'Outlook.Action_typekey': Action;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public CopyLike: OlActionCopyLike;
        public Delete(): void;
        public Enabled: boolean;
        public Execute(): any;
        public MessageClass: string;
        public Name: string;
        public readonly Parent: any;
        public Prefix: string;
        public ReplyStyle: OlActionReplyStyle;
        public ResponseStyle: OlActionResponseStyle;
        public readonly Session: NameSpace;
        public ShowOn: OlActionShowOn;
    }

    class Actions {
        private 'Outlook.Actions_typekey': Actions;
        private constructor();
        public Add(): Action;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Action;
        public readonly Parent: any;
        public Remove(Index: number): void;
        public readonly Session: NameSpace;
    }

    class AddressEntries {
        private 'Outlook.AddressEntries_typekey': AddressEntries;
        private constructor();
        public Add(Type: string, Name?: any, Address?: any): AddressEntry;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public GetFirst(): AddressEntry;
        public GetLast(): AddressEntry;
        public GetNext(): AddressEntry;
        public GetPrevious(): AddressEntry;
        public Item(Index: any): AddressEntry;
        public readonly Parent: any;
        public readonly RawTable: any;
        public readonly Session: NameSpace;
        public Sort(Property?: any, Order?: any): void;
    }

    class AddressEntry {
        private 'Outlook.AddressEntry_typekey': AddressEntry;
        private constructor();
        public Address: string;
        public readonly AddressEntryUserType: OlAddressEntryUserType;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Delete(): void;
        public Details(HWnd?: any): void;
        public readonly DisplayType: OlDisplayType;
        public GetContact(): ContactItem;
        public GetExchangeDistributionList(): ExchangeDistributionList;
        public GetExchangeUser(): ExchangeUser;
        public GetFreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
        public readonly ID: string;
        public readonly Manager: AddressEntry;
        public MAPIOBJECT: any;
        public readonly Members: AddressEntries;
        public Name: string;
        public readonly Parent: any;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly Session: NameSpace;
        public Type: string;
        public Update(MakePermanent?: any, Refresh?: any): void;
        public UpdateFreeBusy(): void;
    }

    class AddressList {
        private 'Outlook.AddressList_typekey': AddressList;
        private constructor();
        public readonly AddressEntries: AddressEntries;
        public readonly AddressListType: OlAddressListType;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public GetContactsFolder(): Folder;
        public readonly ID: string;
        public readonly Index: number;
        public readonly IsInitialAddressList: boolean;
        public readonly IsReadOnly: boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly ResolutionOrder: number;
        public readonly Session: NameSpace;
    }

    class AddressLists {
        private 'Outlook.AddressLists_typekey': AddressLists;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): AddressList;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class AddressRuleCondition {
        private 'Outlook.AddressRuleCondition_typekey': AddressRuleCondition;
        private constructor();
        public Address: any;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Application {
        private 'Outlook.Application_typekey': Application;
        private constructor();
        public ActiveExplorer(): Explorer;
        public ActiveInspector(): Inspector;
        public ActiveWindow(): any;
        public AdvancedSearch(Scope: string, Filter?: any, SearchSubFolders?: any, Tag?: any): Search;
        public readonly AnswerWizard: Office.AnswerWizard;
        public readonly Application: Application;
        public readonly Assistance: Office.IAssistance;
        public readonly Assistant: Office.Assistant;
        public readonly Class: OlObjectClass;
        public readonly COMAddIns: Office.COMAddIns;
        public CopyFile(FilePath: string, DestFolderPath: string): any;
        public CreateItem(ItemType: OlItemType): any;
        public CreateItemFromTemplate(TemplatePath: string, InFolder?: any): any;
        public CreateObject(ObjectName: string): any;
        public readonly DefaultProfileName: string;
        public readonly Explorers: Explorers;
        public FeatureInstall: Office.MsoFeatureInstall;
        public GetNamespace(Type: string): NameSpace;
        public GetNewNickNames(pvar: any): void;
        public GetObjectReference(Item: any, ReferenceType: OlReferenceType): any;
        public readonly Inspectors: Inspectors;
        public IsSearchSynchronous(LookInFolders: string): boolean;
        public readonly IsTrusted: boolean;
        public readonly LanguageSettings: Office.LanguageSettings;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly PickerDialog: Office.PickerDialog;
        public readonly ProductCode: string;
        public Quit(): void;
        public RefreshFormRegionDefinition(RegionName: string): void;
        public readonly Reminders: Reminders;
        public readonly Session: NameSpace;
        public readonly TimeZones: TimeZones;
        public readonly Version: string;
    }

    class AppointmentItem {
        private 'Outlook.AppointmentItem_typekey': AppointmentItem;
        private constructor();
        public readonly Actions: Actions;
        public AllDayEvent: boolean;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public BusyStatus: OlBusyStatus;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public ClearRecurrencePattern(): void;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public ConferenceServerAllowExternal: boolean;
        public ConferenceServerPassword: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public CopyTo(DestinationFolder: Folder, CopyOptions: OlAppointmentCopyOptions): AppointmentItem;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public Duration: number;
        public End: VarDate;
        public EndInEndTimeZone: VarDate;
        public EndTimeZone: TimeZone;
        public EndUTC: VarDate;
        public readonly EntryID: string;
        public ForceUpdateToAllAttendees: boolean;
        public readonly FormDescription: FormDescription;
        public ForwardAsVcal(): MailItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public GetOrganizer(): AddressEntry;
        public GetRecurrencePattern(): RecurrencePattern;
        public readonly GlobalAppointmentID: string;
        public Importance: OlImportance;
        public InternetCodepage: number;
        public readonly IsConflict: boolean;
        public IsOnlineMeeting: boolean;
        public readonly IsRecurring: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public Location: string;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MeetingStatus: OlMeetingStatus;
        public readonly MeetingWorkspaceURL: string;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NetMeetingAutoStart: boolean;
        public NetMeetingDocPathName: string;
        public NetMeetingOrganizerAlias: string;
        public NetMeetingServer: string;
        public NetMeetingType: OlNetMeetingType;
        public NetShowURL: string;
        public NoAging: boolean;
        public OptionalAttendees: string;
        public readonly Organizer: string;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly Recipients: Recipients;
        public readonly RecurrenceState: OlRecurrenceState;
        public ReminderMinutesBeforeStart: number;
        public ReminderOverrideDefault: boolean;
        public ReminderPlaySound: boolean;
        public ReminderSet: boolean;
        public ReminderSoundFile: string;
        public ReplyTime: VarDate;
        public RequiredAttendees: string;
        public Resources: string;
        public Respond(Response: OlMeetingResponse, fNoUI?: any, fAdditionalTextDialog?: any): MeetingItem;
        public ResponseRequested: boolean;
        public readonly ResponseStatus: OlResponseStatus;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Send(): void;
        public SendUsingAccount: Account;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Start: VarDate;
        public StartInStartTimeZone: VarDate;
        public StartTimeZone: TimeZone;
        public StartUTC: VarDate;
        public Subject: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class AssignToCategoryRuleAction {
        private 'Outlook.AssignToCategoryRuleAction_typekey': AssignToCategoryRuleAction;
        private constructor();
        public readonly ActionType: OlRuleActionType;
        public readonly Application: Application;
        public Categories: any;
        public readonly Class: OlObjectClass;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Attachment {
        private 'Outlook.Attachment_typekey': Attachment;
        private constructor();
        public readonly Application: Application;
        public readonly BlockLevel: OlAttachmentBlockLevel;
        public readonly Class: OlObjectClass;
        public Delete(): void;
        public DisplayName: string;
        public readonly FileName: string;
        public GetTemporaryFilePath(): string;
        public readonly Index: number;
        public readonly MAPIOBJECT: any;
        public readonly Parent: any;
        public readonly PathName: string;
        public Position: number;
        public readonly PropertyAccessor: PropertyAccessor;
        public SaveAsFile(Path: string): void;
        public readonly Session: NameSpace;
        public readonly Size: number;
        public readonly Type: OlAttachmentType;
    }

    class Attachments {
        private 'Outlook.Attachments_typekey': Attachments;
        private constructor();
        public Add(Source: any, Type?: any, Position?: any, DisplayName?: any): Attachment;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Attachment;
        public readonly Parent: any;
        public Remove(Index: number): void;
        public readonly Session: NameSpace;
    }

    class AttachmentSelection {
        private 'Outlook.AttachmentSelection_typekey': AttachmentSelection;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public GetSelection(SelectionContents: OlSelectionContents): Selection;
        public Item(Index: any): Attachment;
        public readonly Location: OlSelectionLocation;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class AutoFormatRule {
        private 'Outlook.AutoFormatRule_typekey': AutoFormatRule;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Enabled: boolean;
        public Filter: string;
        public Font: ViewFont;
        public Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly Standard: boolean;
    }

    class AutoFormatRules {
        private 'Outlook.AutoFormatRules_typekey': AutoFormatRules;
        private constructor();
        public Add(Name: string): AutoFormatRule;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Insert(Name: string, Index: any): AutoFormatRule;
        public Item(Index: any): AutoFormatRule;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public RemoveAll(): void;
        public Save(): void;
        public readonly Session: NameSpace;
    }

    class BusinessCardView {
        private 'Outlook.BusinessCardView_typekey': BusinessCardView;
        private constructor();
        public readonly Application: Application;
        public Apply(): void;
        public CardSize: number;
        public readonly Class: OlObjectClass;
        public Copy(Name: string, SaveOption: OlViewSaveOption): View;
        public Delete(): void;
        public Filter: string;
        public GoToDate(Date: VarDate): void;
        public readonly HeadingsFont: ViewFont;
        public Language: string;
        public LockUserChanges: boolean;
        public Name: string;
        public readonly Parent: any;
        public Reset(): void;
        public Save(): void;
        public readonly SaveOption: OlViewSaveOption;
        public readonly Session: NameSpace;
        public readonly SortFields: OrderFields;
        public readonly Standard: boolean;
        public readonly ViewType: OlViewType;
        public XML: string;
    }

    class CalendarModule {
        private 'Outlook.CalendarModule_typekey': CalendarModule;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly NavigationGroups: NavigationGroups;
        public readonly NavigationModuleType: OlNavigationModuleType;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class CalendarSharing {
        private 'Outlook.CalendarSharing_typekey': CalendarSharing;
        private constructor();
        public readonly Application: Application;
        public CalendarDetail: OlCalendarDetail;
        public readonly Class: OlObjectClass;
        public EndDate: VarDate;
        public readonly Folder: Folder;
        public ForwardAsICal(MailFormat: OlCalendarMailFormat): MailItem;
        public IncludeAttachments: boolean;
        public IncludePrivateDetails: boolean;
        public IncludeWholeCalendar: boolean;
        public readonly Parent: any;
        public RestrictToWorkingHours: boolean;
        public SaveAsICal(Path: string): void;
        public readonly Session: NameSpace;
        public StartDate: VarDate;
    }

    class CalendarView {
        private 'Outlook.CalendarView_typekey': CalendarView;
        private constructor();
        public readonly Application: Application;
        public Apply(): void;
        public readonly AutoFormatRules: AutoFormatRules;
        public BoldDatesWithItems: boolean;
        public BoldSubjects: boolean;
        public CalendarViewMode: OlCalendarViewMode;
        public readonly Class: OlObjectClass;
        public Copy(Name: string, SaveOption: OlViewSaveOption): View;
        public DaysInMultiDayMode: number;
        public readonly DayWeekFont: ViewFont;
        public readonly DayWeekTimeFont: ViewFont;
        public DayWeekTimeScale: OlDayWeekTimeScale;
        public Delete(): void;
        public readonly DisplayedDates: any;
        public EndField: string;
        public Filter: string;
        public GoToDate(Date: VarDate): void;
        public Language: string;
        public LockUserChanges: boolean;
        public readonly MonthFont: ViewFont;
        public MonthShowEndTime: boolean;
        public Name: string;
        public readonly Parent: any;
        public Reset(): void;
        public Save(): void;
        public readonly SaveOption: OlViewSaveOption;
        public readonly SelectedEndTime: VarDate;
        public readonly SelectedStartTime: VarDate;
        public readonly Session: NameSpace;
        public readonly Standard: boolean;
        public StartField: string;
        public readonly ViewType: OlViewType;
        public XML: string;
    }

    class CardView {
        private 'Outlook.CardView_typekey': CardView;
        private constructor();
        public AllowInCellEditing: boolean;
        public readonly Application: Application;
        public Apply(): void;
        public readonly AutoFormatRules: AutoFormatRules;
        public readonly BodyFont: ViewFont;
        public readonly Class: OlObjectClass;
        public Copy(Name: string, SaveOption: OlViewSaveOption): View;
        public Delete(): void;
        public Filter: string;
        public GoToDate(Date: VarDate): void;
        public readonly HeadingsFont: ViewFont;
        public Language: string;
        public LockUserChanges: boolean;
        public MultiLineFieldHeight: number;
        public Name: string;
        public readonly Parent: any;
        public Reset(): void;
        public Save(): void;
        public readonly SaveOption: OlViewSaveOption;
        public readonly Session: NameSpace;
        public ShowEmptyFields: boolean;
        public readonly SortFields: OrderFields;
        public readonly Standard: boolean;
        public readonly ViewFields: ViewFields;
        public readonly ViewType: OlViewType;
        public Width: number;
        public XML: string;
    }

    class Categories {
        private 'Outlook.Categories_typekey': Categories;
        private constructor();
        public Add(Name: string, Color?: any, ShortcutKey?: any): Category;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Category;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public readonly Session: NameSpace;
    }

    class Category {
        private 'Outlook.Category_typekey': Category;
        private constructor();
        public readonly Application: Application;
        public readonly CategoryBorderColor: stdole.OLE_COLOR;
        public readonly CategoryGradientBottomColor: stdole.OLE_COLOR;
        public readonly CategoryGradientTopColor: stdole.OLE_COLOR;
        public readonly CategoryID: string;
        public readonly Class: OlObjectClass;
        public Color: OlCategoryColor;
        public Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public ShortcutKey: OlCategoryShortcutKey;
    }

    class CategoryRuleCondition {
        private 'Outlook.CategoryRuleCondition_typekey': CategoryRuleCondition;
        private constructor();
        public readonly Application: Application;
        public Categories: any;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Column {
        private 'Outlook.Column_typekey': Column;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class ColumnFormat {
        private 'Outlook.ColumnFormat_typekey': ColumnFormat;
        private constructor();
        public Align: OlAlign;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public FieldFormat: number;
        public readonly FieldType: OlUserPropertyType;
        public Label: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public Width: number;
    }

    class Columns {
        private 'Outlook.Columns_typekey': Columns;
        private constructor();
        public Add(Name: string): Column;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Column;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public RemoveAll(): void;
        public readonly Session: NameSpace;
    }

    class Conflict {
        private 'Outlook.Conflict_typekey': Conflict;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Item: any;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly Type: OlObjectClass;
    }

    class Conflicts {
        private 'Outlook.Conflicts_typekey': Conflicts;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public GetFirst(): Conflict;
        public GetLast(): Conflict;
        public GetNext(): Conflict;
        public GetPrevious(): Conflict;
        public Item(Index: any): Conflict;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class ContactItem {
        private 'Outlook.ContactItem_typekey': ContactItem;
        private constructor();
        public Account: string;
        public readonly Actions: Actions;
        public AddBusinessCardLogoPicture(Path: string): void;
        public AddPicture(Path: string): void;
        public Anniversary: VarDate;
        public readonly Application: Application;
        public AssistantName: string;
        public AssistantTelephoneNumber: string;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Birthday: VarDate;
        public Body: string;
        public Business2TelephoneNumber: string;
        public BusinessAddress: string;
        public BusinessAddressCity: string;
        public BusinessAddressCountry: string;
        public BusinessAddressPostalCode: string;
        public BusinessAddressPostOfficeBox: string;
        public BusinessAddressState: string;
        public BusinessAddressStreet: string;
        public BusinessCardLayoutXml: string;
        public readonly BusinessCardType: OlBusinessCardType;
        public BusinessFaxNumber: string;
        public BusinessHomePage: string;
        public BusinessTelephoneNumber: string;
        public CallbackTelephoneNumber: string;
        public CarTelephoneNumber: string;
        public Categories: string;
        public Children: string;
        public readonly Class: OlObjectClass;
        public ClearTaskFlag(): void;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly CompanyAndFullName: string;
        public readonly CompanyLastFirstNoSpace: string;
        public readonly CompanyLastFirstSpaceOnly: string;
        public CompanyMainTelephoneNumber: string;
        public CompanyName: string;
        public ComputerNetworkName: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public CustomerID: string;
        public Delete(): void;
        public Department: string;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public Email1Address: string;
        public Email1AddressType: string;
        public Email1DisplayName: string;
        public readonly Email1EntryID: string;
        public Email2Address: string;
        public Email2AddressType: string;
        public Email2DisplayName: string;
        public readonly Email2EntryID: string;
        public Email3Address: string;
        public Email3AddressType: string;
        public Email3DisplayName: string;
        public readonly Email3EntryID: string;
        public readonly EntryID: string;
        public FileAs: string;
        public FirstName: string;
        public readonly FormDescription: FormDescription;
        public ForwardAsBusinessCard(): MailItem;
        public ForwardAsVcard(): MailItem;
        public FTPSite: string;
        public FullName: string;
        public readonly FullNameAndCompany: string;
        public Gender: OlGender;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public GovernmentIDNumber: string;
        public readonly HasPicture: boolean;
        public Hobby: string;
        public Home2TelephoneNumber: string;
        public HomeAddress: string;
        public HomeAddressCity: string;
        public HomeAddressCountry: string;
        public HomeAddressPostalCode: string;
        public HomeAddressPostOfficeBox: string;
        public HomeAddressState: string;
        public HomeAddressStreet: string;
        public HomeFaxNumber: string;
        public HomeTelephoneNumber: string;
        public IMAddress: string;
        public Importance: OlImportance;
        public Initials: string;
        public InternetFreeBusyAddress: string;
        public readonly IsConflict: boolean;
        public ISDNNumber: string;
        public readonly IsMarkedAsTask: boolean;
        public readonly ItemProperties: ItemProperties;
        public JobTitle: string;
        public Journal: boolean;
        public Language: string;
        public readonly LastFirstAndSuffix: string;
        public readonly LastFirstNoSpace: string;
        public readonly LastFirstNoSpaceAndSuffix: string;
        public readonly LastFirstNoSpaceCompany: string;
        public readonly LastFirstSpaceOnly: string;
        public readonly LastFirstSpaceOnlyCompany: string;
        public readonly LastModificationTime: VarDate;
        public LastName: string;
        public readonly LastNameAndFirstName: string;
        public readonly Links: Links;
        public MailingAddress: string;
        public MailingAddressCity: string;
        public MailingAddressCountry: string;
        public MailingAddressPostalCode: string;
        public MailingAddressPostOfficeBox: string;
        public MailingAddressState: string;
        public MailingAddressStreet: string;
        public ManagerName: string;
        public readonly MAPIOBJECT: any;
        public MarkAsTask(MarkInterval: OlMarkInterval): void;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public MiddleName: string;
        public Mileage: string;
        public MobileTelephoneNumber: string;
        public Move(DestFldr: Folder): any;
        public NetMeetingAlias: string;
        public NetMeetingServer: string;
        public NickName: string;
        public NoAging: boolean;
        public OfficeLocation: string;
        public OrganizationalIDNumber: string;
        public OtherAddress: string;
        public OtherAddressCity: string;
        public OtherAddressCountry: string;
        public OtherAddressPostalCode: string;
        public OtherAddressPostOfficeBox: string;
        public OtherAddressState: string;
        public OtherAddressStreet: string;
        public OtherFaxNumber: string;
        public OtherTelephoneNumber: string;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public PagerNumber: string;
        public readonly Parent: any;
        public PersonalHomePage: string;
        public PrimaryTelephoneNumber: string;
        public PrintOut(): void;
        public Profession: string;
        public readonly PropertyAccessor: PropertyAccessor;
        public RadioTelephoneNumber: string;
        public ReferredBy: string;
        public ReminderOverrideDefault: boolean;
        public ReminderPlaySound: boolean;
        public ReminderSet: boolean;
        public ReminderSoundFile: string;
        public ReminderTime: VarDate;
        public RemovePicture(): void;
        public ResetBusinessCard(): void;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public SaveBusinessCardImage(Path: string): void;
        public readonly Saved: boolean;
        public SelectedMailingAddress: OlMailingAddress;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowBusinessCardEditor(): void;
        public ShowCategoriesDialog(): void;
        public ShowCheckPhoneDialog(PhoneNumber: OlContactPhoneNumber): void;
        public readonly Size: number;
        public Spouse: string;
        public Subject: string;
        public Suffix: string;
        public TaskCompletedDate: VarDate;
        public TaskDueDate: VarDate;
        public TaskStartDate: VarDate;
        public TaskSubject: string;
        public TelexNumber: string;
        public Title: string;
        public ToDoTaskOrdinal: VarDate;
        public TTYTDDTelephoneNumber: string;
        public UnRead: boolean;
        public User1: string;
        public User2: string;
        public User3: string;
        public User4: string;
        public UserCertificate: string;
        public readonly UserProperties: UserProperties;
        public WebPage: string;
        public YomiCompanyName: string;
        public YomiFirstName: string;
        public YomiLastName: string;
    }

    class ContactsModule {
        private 'Outlook.ContactsModule_typekey': ContactsModule;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly NavigationGroups: NavigationGroups;
        public readonly NavigationModuleType: OlNavigationModuleType;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class Conversation {
        private 'Outlook.Conversation_typekey': Conversation;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public ClearAlwaysAssignCategories(Store: Store): void;
        public readonly ConversationID: string;
        public GetAlwaysAssignCategories(Store: Store): string;
        public GetAlwaysDelete(Store: Store): OlAlwaysDeleteConversation;
        public GetAlwaysMoveToFolder(Store: Store): Folder;
        public GetChildren(Item: any): SimpleItems;
        public GetParent(Item: any): any;
        public GetRootItems(): SimpleItems;
        public GetTable(): Table;
        public MarkAsRead(): void;
        public MarkAsUnread(): void;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public SetAlwaysAssignCategories(Categories: string, Store: Store): void;
        public SetAlwaysDelete(AlwaysDelete: OlAlwaysDeleteConversation, Store: Store): void;
        public SetAlwaysMoveToFolder(MoveToFolder: Folder, Store: Store): void;
        public StopAlwaysDelete(Store: Store): void;
        public StopAlwaysMoveToFolder(Store: Store): void;
    }

    class ConversationHeader {
        private 'Outlook.ConversationHeader_typekey': ConversationHeader;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConversationID: string;
        public readonly ConversationTopic: string;
        public GetConversation(): Conversation;
        public GetItems(): SimpleItems;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class DistListItem {
        private 'Outlook.DistListItem_typekey': DistListItem;
        private constructor();
        public readonly Actions: Actions;
        public AddMember(Recipient: Recipient): void;
        public AddMembers(Recipients: Recipients): void;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly CheckSum: number;
        public readonly Class: OlObjectClass;
        public ClearTaskFlag(): void;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public DLName: string;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public GetMember(Index: number): Recipient;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly IsMarkedAsTask: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkAsTask(MarkInterval: OlMarkInterval): void;
        public MarkForDownload: OlRemoteStatus;
        public readonly MemberCount: number;
        public Members: any;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public OneOffMembers: any;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public ReminderOverrideDefault: boolean;
        public ReminderPlaySound: boolean;
        public ReminderSet: boolean;
        public ReminderSoundFile: string;
        public ReminderTime: VarDate;
        public RemoveMember(Recipient: Recipient): void;
        public RemoveMembers(Recipients: Recipients): void;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public TaskCompletedDate: VarDate;
        public TaskDueDate: VarDate;
        public TaskStartDate: VarDate;
        public TaskSubject: string;
        public ToDoTaskOrdinal: VarDate;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class DocumentItem {
        private 'Outlook.DocumentItem_typekey': DocumentItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public readonly GetInspector: Inspector;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class DoNotUseMeFolder {
        private 'Outlook.DoNotUseMeFolder_typekey': DoNotUseMeFolder;
        private constructor();
        public AddressBookName: string;
        public AddToFavorites(fNoUI?: any, Name?: any): void;
        public AddToPFFavorites(): void;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public CopyTo(DestinationFolder: Folder): Folder;
        public readonly CurrentView: View;
        public CustomViewsOnly: boolean;
        public readonly DefaultItemType: OlItemType;
        public readonly DefaultMessageClass: string;
        public Delete(): void;
        public Description: string;
        public Display(): void;
        public readonly EntryID: string;
        public readonly FolderPath: string;
        public readonly Folders: Folders;
        public readonly FullFolderPath: string;
        public GetCalendarExporter(): CalendarSharing;
        public GetCustomIcon(): stdole.StdPicture;
        public GetExplorer(DisplayMode?: any): Explorer;
        public GetStorage(StorageIdentifier: string, StorageIdentifierType: OlStorageIdentifierType): StorageItem;
        public GetTable(Filter?: any, TableContents?: any): Table;
        public InAppFolderSyncObject: boolean;
        public readonly IsSharePointFolder: boolean;
        public readonly Items: Items;
        public readonly MAPIOBJECT: any;
        public MoveTo(DestinationFolder: Folder): void;
        public Name: string;
        public readonly Parent: any;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly Session: NameSpace;
        public SetCustomIcon(Picture: stdole.StdPicture): void;
        public ShowAsOutlookAB: boolean;
        public ShowItemCount: OlShowItemCount;
        public readonly Store: Store;
        public readonly StoreID: string;
        public readonly UnReadItemCount: number;
        public readonly UserDefinedProperties: UserDefinedProperties;
        public readonly UserPermissions: any;
        public readonly Views: Views;
        public WebViewAllowNavigation: boolean;
        public WebViewOn: boolean;
        public WebViewURL: string;
    }

    class Exception {
        private 'Outlook.Exception_typekey': Exception;
        private constructor();
        public readonly Application: Application;
        public readonly AppointmentItem: AppointmentItem;
        public readonly Class: OlObjectClass;
        public readonly Deleted: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly OriginalDate: VarDate;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Exceptions {
        private 'Outlook.Exceptions_typekey': Exceptions;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Exception;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class ExchangeDistributionList {
        private 'Outlook.ExchangeDistributionList_typekey': ExchangeDistributionList;
        private constructor();
        public Address: string;
        public readonly AddressEntryUserType: OlAddressEntryUserType;
        public readonly Alias: string;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Comments: string;
        public Delete(): void;
        public Details(HWnd?: any): void;
        public readonly DisplayType: OlDisplayType;
        public GetContact(): ContactItem;
        public GetExchangeDistributionList(): ExchangeDistributionList;
        public GetExchangeDistributionListMembers(): AddressEntries;
        public GetExchangeUser(): ExchangeUser;
        public GetFreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
        public GetMemberOfList(): AddressEntries;
        public GetOwners(): AddressEntries;
        public readonly ID: string;
        public readonly Manager: AddressEntry;
        public MAPIOBJECT: any;
        public readonly Members: AddressEntries;
        public Name: string;
        public readonly Parent: any;
        public readonly PrimarySmtpAddress: string;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly Session: NameSpace;
        public Type: string;
        public Update(MakePermanent?: any, Refresh?: any): void;
        public UpdateFreeBusy(): void;
    }

    class ExchangeUser {
        private 'Outlook.ExchangeUser_typekey': ExchangeUser;
        private constructor();
        public Address: string;
        public readonly AddressEntryUserType: OlAddressEntryUserType;
        public readonly Alias: string;
        public readonly Application: Application;
        public AssistantName: string;
        public BusinessTelephoneNumber: string;
        public City: string;
        public readonly Class: OlObjectClass;
        public Comments: string;
        public CompanyName: string;
        public Delete(): void;
        public Department: string;
        public Details(HWnd?: any): void;
        public readonly DisplayType: OlDisplayType;
        public FirstName: string;
        public GetContact(): ContactItem;
        public GetDirectReports(): AddressEntries;
        public GetExchangeDistributionList(): ExchangeDistributionList;
        public GetExchangeUser(): ExchangeUser;
        public GetExchangeUserManager(): ExchangeUser;
        public GetFreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
        public GetMemberOfList(): AddressEntries;
        public GetPicture(): stdole.StdPicture;
        public readonly ID: string;
        public JobTitle: string;
        public LastName: string;
        public readonly Manager: AddressEntry;
        public MAPIOBJECT: any;
        public readonly Members: AddressEntries;
        public MobileTelephoneNumber: string;
        public Name: string;
        public OfficeLocation: string;
        public readonly Parent: any;
        public PostalCode: string;
        public readonly PrimarySmtpAddress: string;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly Session: NameSpace;
        public StateOrProvince: string;
        public StreetAddress: string;
        public Type: string;
        public Update(MakePermanent?: any, Refresh?: any): void;
        public UpdateFreeBusy(): void;
        public YomiCompanyName: string;
        public YomiDepartment: string;
        public YomiDisplayName: string;
        public YomiFirstName: string;
        public YomiLastName: string;
    }

    class Explorer {
        private 'Outlook.Explorer_typekey': Explorer;
        private constructor();
        public readonly AccountSelector: AccountSelector;
        public Activate(): void;
        public AddToSelection(Item: any): void;
        public readonly Application: Application;
        public readonly AttachmentSelection: AttachmentSelection;
        public readonly Caption: string;
        public readonly Class: OlObjectClass;
        public ClearSearch(): void;
        public ClearSelection(): void;
        public Close(): void;
        public readonly CommandBars: Office.CommandBars;
        public CurrentFolder: Folder;
        public CurrentView: any;
        public DeselectFolder(Folder: Folder): void;
        public Display(): void;
        public Height: number;
        public readonly HTMLDocument: any;
        public IsFolderSelected(Folder: Folder): boolean;
        public IsItemSelectableInView(Item: any): boolean;
        public IsPaneVisible(Pane: OlPane): boolean;
        public Left: number;
        public readonly NavigationPane: NavigationPane;
        public readonly Panes: Panes;
        public readonly Parent: any;
        public RemoveFromSelection(Item: any): void;
        public Search(Query: string, SearchScope: OlSearchScope): void;
        public SelectAllItems(): void;
        public SelectFolder(Folder: Folder): void;
        public readonly Selection: Selection;
        public readonly Session: NameSpace;
        public ShowPane(Pane: OlPane, Visible: boolean): void;
        public Top: number;
        public readonly Views: any;
        public Width: number;
        public WindowState: OlWindowState;
    }

    class Explorers {
        private 'Outlook.Explorers_typekey': Explorers;
        private constructor();
        public Add(Folder: any, DisplayMode: OlFolderDisplayMode): Explorer;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Explorer;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Folder {
        private 'Outlook.Folder_typekey': Folder;
        private constructor();
        public AddressBookName: string;
        public AddToFavorites(fNoUI?: any, Name?: any): void;
        public AddToPFFavorites(): void;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public CopyTo(DestinationFolder: Folder): Folder;
        public readonly CurrentView: View;
        public CustomViewsOnly: boolean;
        public readonly DefaultItemType: OlItemType;
        public readonly DefaultMessageClass: string;
        public Delete(): void;
        public Description: string;
        public Display(): void;
        public readonly EntryID: string;
        public readonly FolderPath: string;
        public readonly Folders: Folders;
        public readonly FullFolderPath: string;
        public GetCalendarExporter(): CalendarSharing;
        public GetCustomIcon(): stdole.StdPicture;
        public GetExplorer(DisplayMode?: any): Explorer;
        public GetStorage(StorageIdentifier: string, StorageIdentifierType: OlStorageIdentifierType): StorageItem;
        public GetTable(Filter?: any, TableContents?: any): Table;
        public InAppFolderSyncObject: boolean;
        public readonly IsSharePointFolder: boolean;
        public readonly Items: Items;
        public readonly MAPIOBJECT: any;
        public MoveTo(DestinationFolder: Folder): void;
        public Name: string;
        public readonly Parent: any;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly Session: NameSpace;
        public SetCustomIcon(Picture: stdole.StdPicture): void;
        public ShowAsOutlookAB: boolean;
        public ShowItemCount: OlShowItemCount;
        public readonly Store: Store;
        public readonly StoreID: string;
        public readonly UnReadItemCount: number;
        public readonly UserDefinedProperties: UserDefinedProperties;
        public readonly UserPermissions: any;
        public readonly Views: Views;
        public WebViewAllowNavigation: boolean;
        public WebViewOn: boolean;
        public WebViewURL: string;
    }

    class Folders {
        private 'Outlook.Folders_typekey': Folders;
        private constructor();
        public Add(Name: string, Type?: any): Folder;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public GetFirst(): Folder;
        public GetLast(): Folder;
        public GetNext(): Folder;
        public GetPrevious(): Folder;
        public Item(Index: any): Folder;
        public readonly Parent: any;
        public readonly RawTable: any;
        public Remove(Index: number): void;
        public readonly Session: NameSpace;
    }

    class FormDescription {
        private 'Outlook.FormDescription_typekey': FormDescription;
        private constructor();
        public readonly Application: Application;
        public Category: string;
        public CategorySub: string;
        public readonly Class: OlObjectClass;
        public Comment: string;
        public ContactName: string;
        public DisplayName: string;
        public Hidden: boolean;
        public Icon: string;
        public Locked: boolean;
        public readonly MessageClass: string;
        public MiniIcon: string;
        public Name: string;
        public Number: string;
        public OneOff: boolean;
        public readonly Parent: any;
        public Password: string;
        public PublishForm(Registry: OlFormRegistry, Folder?: any): void;
        public readonly ScriptText: string;
        public readonly Session: NameSpace;
        public Template: string;
        public UseWordMail: boolean;
        public Version: string;
    }

    class FormNameRuleCondition {
        private 'Outlook.FormNameRuleCondition_typekey': FormNameRuleCondition;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public FormName: any;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class FormRegion {
        private 'Outlook.FormRegion_typekey': FormRegion;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Detail: string;
        public readonly DisplayName: string;
        public EnableAutoLayout: boolean;
        public readonly Form: any;
        public readonly FormRegionMode: OlFormRegionMode;
        public readonly Inspector: Inspector;
        public readonly InternalName: string;
        public readonly IsExpanded: boolean;
        public readonly Item: any;
        public readonly Language: number;
        public readonly Parent: any;
        public Reflow(): void;
        public Select(): void;
        public readonly Session: NameSpace;
        public SetControlItemProperty(Control: any, PropertyName: string): void;
        public SuppressControlReplacement: boolean;
        public Visible: boolean;
    }

    class FormRegionStartup {
        private 'Outlook.FormRegionStartup_typekey': FormRegionStartup;
        private constructor();
        public BeforeFormRegionShow(FormRegion: FormRegion): void;
        public GetFormRegionIcon(FormRegionName: string, LCID: number, Icon: OlFormRegionIcon): any;
        public GetFormRegionManifest(FormRegionName: string, LCID: number): any;
        public GetFormRegionStorage(FormRegionName: string, Item: any, LCID: number, FormRegionMode: OlFormRegionMode, FormRegionSize: OlFormRegionSize): any;
    }

    class FromRssFeedRuleCondition {
        private 'Outlook.FromRssFeedRuleCondition_typekey': FromRssFeedRuleCondition;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public FromRssFeed: any;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class IconView {
        private 'Outlook.IconView_typekey': IconView;
        private constructor();
        public readonly Application: Application;
        public Apply(): void;
        public readonly Class: OlObjectClass;
        public Copy(Name: string, SaveOption: OlViewSaveOption): View;
        public Delete(): void;
        public Filter: string;
        public GoToDate(Date: VarDate): void;
        public IconPlacement: OlIconViewPlacement;
        public IconViewType: OlIconViewType;
        public Language: string;
        public LockUserChanges: boolean;
        public Name: string;
        public readonly Parent: any;
        public Reset(): void;
        public Save(): void;
        public readonly SaveOption: OlViewSaveOption;
        public readonly Session: NameSpace;
        public readonly SortFields: OrderFields;
        public readonly Standard: boolean;
        public readonly ViewType: OlViewType;
        public XML: string;
    }

    class ImportanceRuleCondition {
        private 'Outlook.ImportanceRuleCondition_typekey': ImportanceRuleCondition;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public Importance: OlImportance;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Inspector {
        private 'Outlook.Inspector_typekey': Inspector;
        private constructor();
        public Activate(): void;
        public readonly Application: Application;
        public readonly AttachmentSelection: AttachmentSelection;
        public readonly Caption: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public readonly CommandBars: Office.CommandBars;
        public readonly CurrentItem: any;
        public Display(Modal?: any): void;
        public readonly EditorType: OlEditorType;
        public Height: number;
        public HideFormPage(PageName: string): void;
        public readonly HTMLEditor: any;
        public IsWordMail(): boolean;
        public Left: number;
        public readonly ModifiedFormPages: any;
        public NewFormRegion(): any;
        public OpenFormRegion(Path: string): any;
        public readonly Parent: any;
        public SaveFormRegion(Page: any, FileName: string): void;
        public readonly Session: NameSpace;
        public SetControlItemProperty(Control: any, PropertyName: string): void;
        public SetCurrentFormPage(PageName: string): void;
        public SetSchedulingStartTime(Start: VarDate): void;
        public ShowFormPage(PageName: string): void;
        public Top: number;
        public Width: number;
        public WindowState: OlWindowState;
        public readonly WordEditor: any;
    }

    class Inspectors {
        private 'Outlook.Inspectors_typekey': Inspectors;
        private constructor();
        public Add(Item: any): Inspector;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Inspector;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class ItemProperties {
        private 'Outlook.ItemProperties_typekey': ItemProperties;
        private constructor();
        public Add(Name: string, Type: OlUserPropertyType, AddToFolderFields?: any, DisplayFormat?: any): ItemProperty;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): ItemProperty;
        public readonly Parent: any;
        public Remove(Index: number): void;
        public readonly Session: NameSpace;
    }

    class ItemProperty {
        private 'Outlook.ItemProperty_typekey': ItemProperty;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Delete(): void;
        public Formula: string;
        public readonly IsUserProperty: boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly Type: OlUserPropertyType;
        public ValidationFormula: string;
        public ValidationText: string;
        public Value: any;
    }

    class Items {
        private 'Outlook.Items_typekey': Items;
        private constructor();
        public Add(Type?: any): any;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Find(Filter: string): any;
        public FindNext(): any;
        public GetFirst(): any;
        public GetLast(): any;
        public GetNext(): any;
        public GetPrevious(): any;
        public IncludeRecurrences: boolean;
        public Item(Index: any): any;
        public readonly Parent: any;
        public readonly RawTable: any;
        public Remove(Index: number): void;
        public ResetColumns(): void;
        public Restrict(Filter: string): Items;
        public readonly Session: NameSpace;
        public SetColumns(Columns: string): void;
        public Sort(Property: string, Descending?: any): void;
    }

    class JournalItem {
        private 'Outlook.JournalItem_typekey': JournalItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public ContactNames: string;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public DocPosted: boolean;
        public DocPrinted: boolean;
        public DocRouted: boolean;
        public DocSaved: boolean;
        public readonly DownloadState: OlDownloadState;
        public Duration: number;
        public End: VarDate;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public Forward(): MailItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly Recipients: Recipients;
        public Reply(): MailItem;
        public ReplyAll(): MailItem;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Start: VarDate;
        public StartTimer(): void;
        public StopTimer(): void;
        public Subject: string;
        public Type: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class JournalModule {
        private 'Outlook.JournalModule_typekey': JournalModule;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly NavigationGroups: NavigationGroups;
        public readonly NavigationModuleType: OlNavigationModuleType;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class Link {
        private 'Outlook.Link_typekey': Link;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Item: any;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly Type: OlObjectClass;
    }

    class Links {
        private 'Outlook.Links_typekey': Links;
        private constructor();
        public Add(Item: any): Link;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Link;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public readonly Session: NameSpace;
    }

    class MailItem {
        private 'Outlook.MailItem_typekey': MailItem;
        private constructor();
        public readonly Actions: Actions;
        public AddBusinessCard(contact: ContactItem): void;
        public AlternateRecipientAllowed: boolean;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public AutoForwarded: boolean;
        public readonly AutoResolvedWinner: boolean;
        public BCC: string;
        public BillingInformation: string;
        public Body: string;
        public BodyFormat: OlBodyFormat;
        public Categories: string;
        public CC: string;
        public readonly Class: OlObjectClass;
        public ClearConversationIndex(): void;
        public ClearTaskFlag(): void;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public DeferredDeliveryTime: VarDate;
        public Delete(): void;
        public DeleteAfterSubmit: boolean;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public EnableSharedAttachments: boolean;
        public readonly EntryID: string;
        public ExpiryTime: VarDate;
        public FlagDueBy: VarDate;
        public FlagIcon: OlFlagIcon;
        public FlagRequest: string;
        public FlagStatus: OlFlagStatus;
        public readonly FormDescription: FormDescription;
        public Forward(): MailItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public HasCoverSheet: boolean;
        public HTMLBody: string;
        public Importance: OlImportance;
        public InternetCodepage: number;
        public readonly IsConflict: boolean;
        public IsIPFax: boolean;
        public readonly IsMarkedAsTask: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkAsTask(MarkInterval: OlMarkInterval): void;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public OriginatorDeliveryReportRequested: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public Permission: OlPermission;
        public PermissionService: OlPermissionService;
        public PermissionTemplateGuid: string;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public ReadReceiptRequested: boolean;
        public readonly ReceivedByEntryID: string;
        public readonly ReceivedByName: string;
        public readonly ReceivedOnBehalfOfEntryID: string;
        public readonly ReceivedOnBehalfOfName: string;
        public readonly ReceivedTime: VarDate;
        public RecipientReassignmentProhibited: boolean;
        public readonly Recipients: Recipients;
        public ReminderOverrideDefault: boolean;
        public ReminderPlaySound: boolean;
        public ReminderSet: boolean;
        public ReminderSoundFile: string;
        public ReminderTime: VarDate;
        public RemoteStatus: OlRemoteStatus;
        public Reply(): MailItem;
        public ReplyAll(): MailItem;
        public readonly ReplyRecipientNames: string;
        public readonly ReplyRecipients: Recipients;
        public readonly RetentionExpirationDate: VarDate;
        public readonly RetentionPolicyName: string;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public SaveSentMessageFolder: Folder;
        public Send(): void;
        public Sender: AddressEntry;
        public readonly SenderEmailAddress: string;
        public readonly SenderEmailType: string;
        public readonly SenderName: string;
        public SendUsingAccount: Account;
        public Sensitivity: OlSensitivity;
        public readonly Sent: boolean;
        public readonly SentOn: VarDate;
        public SentOnBehalfOfName: string;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public readonly Submitted: boolean;
        public TaskCompletedDate: VarDate;
        public TaskDueDate: VarDate;
        public TaskStartDate: VarDate;
        public TaskSubject: string;
        public To: string;
        public ToDoTaskOrdinal: VarDate;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
        public VotingOptions: string;
        public VotingResponse: string;
    }

    class MailModule {
        private 'Outlook.MailModule_typekey': MailModule;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly NavigationGroups: NavigationGroups;
        public readonly NavigationModuleType: OlNavigationModuleType;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class MarkAsTaskRuleAction {
        private 'Outlook.MarkAsTaskRuleAction_typekey': MarkAsTaskRuleAction;
        private constructor();
        public readonly ActionType: OlRuleActionType;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Enabled: boolean;
        public FlagTo: string;
        public MarkInterval: OlMarkInterval;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class MeetingItem {
        private 'Outlook.MeetingItem_typekey': MeetingItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public AutoForwarded: boolean;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public DeferredDeliveryTime: VarDate;
        public Delete(): void;
        public DeleteAfterSubmit: boolean;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public ExpiryTime: VarDate;
        public FlagDueBy: VarDate;
        public FlagIcon: OlFlagIcon;
        public FlagRequest: string;
        public FlagStatus: OlFlagStatus;
        public readonly FormDescription: FormDescription;
        public Forward(): MeetingItem;
        public GetAssociatedAppointment(AddToCalendar: boolean): AppointmentItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly IsLatestVersion: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public readonly MeetingWorkspaceURL: string;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public OriginatorDeliveryReportRequested: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public ReceivedTime: VarDate;
        public readonly Recipients: Recipients;
        public ReminderSet: boolean;
        public ReminderTime: VarDate;
        public Reply(): MailItem;
        public ReplyAll(): MailItem;
        public readonly ReplyRecipients: Recipients;
        public readonly RetentionExpirationDate: VarDate;
        public readonly RetentionPolicyName: string;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public SaveSentMessageFolder: Folder;
        public Send(): void;
        public readonly SenderEmailAddress: string;
        public readonly SenderEmailType: string;
        public readonly SenderName: string;
        public SendUsingAccount: Account;
        public Sensitivity: OlSensitivity;
        public readonly Sent: boolean;
        public readonly SentOn: VarDate;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public readonly Submitted: boolean;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class MobileItem {
        private 'Outlook.MobileItem_typekey': MobileItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly Count: number;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public Forward(): MobileItem;
        public readonly GetInspector: Inspector;
        public HTMLBody: string;
        public Importance: OlImportance;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly MAPIOBJECT: any;
        public MessageClass: string;
        public Mileage: string;
        public readonly MobileFormat: OlMobileFormat;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly ReceivedByEntryID: string;
        public readonly ReceivedByName: string;
        public readonly ReceivedTime: VarDate;
        public readonly Recipients: Recipients;
        public Reply(): MobileItem;
        public ReplyAll(): MobileItem;
        public readonly ReplyRecipientNames: string;
        public readonly ReplyRecipients: Recipients;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Send(ForceSend: boolean): void;
        public readonly SenderEmailAddress: string;
        public readonly SenderEmailType: string;
        public readonly SenderName: string;
        public SendUsingAccount: Account;
        public Sensitivity: OlSensitivity;
        public readonly Sent: boolean;
        public readonly SentOn: VarDate;
        public readonly Session: NameSpace;
        public readonly Size: number;
        public SMILBody: string;
        public Subject: string;
        public readonly Submitted: boolean;
        public To: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class MoveOrCopyRuleAction {
        private 'Outlook.MoveOrCopyRuleAction_typekey': MoveOrCopyRuleAction;
        private constructor();
        public readonly ActionType: OlRuleActionType;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Enabled: boolean;
        public Folder: Folder;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class NameSpace {
        private 'Outlook.NameSpace_typekey': NameSpace;
        private constructor();
        public readonly Accounts: Accounts;
        public readonly AddressLists: AddressLists;
        public AddStore(Store: any): void;
        public AddStoreEx(Store: any, Type: OlStoreType): void;
        public readonly Application: Application;
        public readonly AutoDiscoverConnectionMode: OlAutoDiscoverConnectionMode;
        public readonly AutoDiscoverXml: string;
        public readonly Categories: Categories;
        public readonly Class: OlObjectClass;
        public CompareEntryIDs(FirstEntryID: string, SecondEntryID: string): boolean;
        public CreateContactCard(AddressEntry: AddressEntry): Office.ContactCard;
        public CreateRecipient(RecipientName: string): Recipient;
        public CreateSharingItem(Context: any, Provider?: any): SharingItem;
        public readonly CurrentProfileName: string;
        public readonly CurrentUser: Recipient;
        public readonly DefaultStore: Store;
        public Dial(ContactItem?: any): void;
        public readonly ExchangeConnectionMode: OlExchangeConnectionMode;
        public readonly ExchangeMailboxServerName: string;
        public readonly ExchangeMailboxServerVersion: string;
        public readonly Folders: Folders;
        public GetAddressEntryFromID(ID: string): AddressEntry;
        public GetDefaultFolder(FolderType: OlDefaultFolders): Folder;
        public GetFolderFromID(EntryIDFolder: string, EntryIDStore?: any): Folder;
        public GetGlobalAddressList(): AddressList;
        public GetItemFromID(EntryIDItem: string, EntryIDStore?: any): any;
        public GetRecipientFromID(EntryID: string): Recipient;
        public GetSelectNamesDialog(): SelectNamesDialog;
        public GetSharedDefaultFolder(Recipient: Recipient, FolderType: OlDefaultFolders): Folder;
        public GetStoreFromID(ID: string): Store;
        public Logoff(): void;
        public Logon(Profile?: any, Password?: any, ShowDialog?: any, NewSession?: any): void;
        public readonly MAPIOBJECT: any;
        public readonly Offline: boolean;
        public OpenSharedFolder(Path: string, Name?: any, DownloadAttachments?: any, UseTTL?: any): Folder;
        public OpenSharedItem(Path: string): any;
        public readonly Parent: any;
        public PickFolder(): Folder;
        public RefreshRemoteHeaders(): void;
        public RemoveStore(Folder: Folder): void;
        public SendAndReceive(showProgressDialog: boolean): void;
        public readonly Session: NameSpace;
        public readonly Stores: Stores;
        public readonly SyncObjects: SyncObjects;
        public readonly Type: string;
    }

    class NavigationFolder {
        private 'Outlook.NavigationFolder_typekey': NavigationFolder;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly DisplayName: string;
        public readonly Folder: Folder;
        public readonly IsRemovable: boolean;
        public IsSelected: boolean;
        public IsSideBySide: boolean;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
    }

    class NavigationFolders {
        private 'Outlook.NavigationFolders_typekey': NavigationFolders;
        private constructor();
        public Add(Folder: Folder): NavigationFolder;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): NavigationFolder;
        public readonly Parent: any;
        public Remove(RemovableFolder: NavigationFolder): void;
        public readonly Session: NameSpace;
    }

    class NavigationGroup {
        private 'Outlook.NavigationGroup_typekey': NavigationGroup;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly GroupType: OlGroupType;
        public Name: string;
        public readonly NavigationFolders: NavigationFolders;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
    }

    class NavigationGroups {
        private 'Outlook.NavigationGroups_typekey': NavigationGroups;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Create(GroupDisplayName: string): NavigationGroup;
        public Delete(Group: NavigationGroup): void;
        public GetDefaultNavigationGroup(DefaultFolderGroup: OlGroupType): NavigationGroup;
        public Item(Index: any): NavigationGroup;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class NavigationModule {
        private 'Outlook.NavigationModule_typekey': NavigationModule;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly NavigationModuleType: OlNavigationModuleType;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class NavigationModules {
        private 'Outlook.NavigationModules_typekey': NavigationModules;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public GetNavigationModule(ModuleType: OlNavigationModuleType): NavigationModule;
        public Item(Index: any): NavigationModule;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class NavigationPane {
        private 'Outlook.NavigationPane_typekey': NavigationPane;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public CurrentModule: NavigationModule;
        public DisplayedModuleCount: number;
        public IsCollapsed: boolean;
        public readonly Modules: NavigationModules;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class NewItemAlertRuleAction {
        private 'Outlook.NewItemAlertRuleAction_typekey': NewItemAlertRuleAction;
        private constructor();
        public readonly ActionType: OlRuleActionType;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public Text: string;
    }

    class NoteItem {
        private 'Outlook.NoteItem_typekey': NoteItem;
        private constructor();
        public readonly Application: Application;
        public readonly AutoResolvedWinner: boolean;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Color: OlNoteColor;
        public readonly Conflicts: Conflicts;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly GetInspector: Inspector;
        public Height: number;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public Left: number;
        public readonly Links: Links;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Move(DestFldr: Folder): any;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public readonly Session: NameSpace;
        public readonly Size: number;
        public readonly Subject: string;
        public Top: number;
        public Width: number;
    }

    class NotesModule {
        private 'Outlook.NotesModule_typekey': NotesModule;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly NavigationGroups: NavigationGroups;
        public readonly NavigationModuleType: OlNavigationModuleType;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class OlkBusinessCardControl {
        private 'Outlook.OlkBusinessCardControl_typekey': OlkBusinessCardControl;
        private constructor();
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
    }

    class OlkCategory {
        private 'Outlook.OlkCategory_typekey': OlkCategory;
        private constructor();
        public AutoSize: boolean;
        public BackColor: stdole.OLE_COLOR;
        public BackStyle: OlBackStyle;
        public Enabled: boolean;
        public ForeColor: stdole.OLE_COLOR;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
    }

    class OlkCheckBox {
        private 'Outlook.OlkCheckBox_typekey': OlkCheckBox;
        private constructor();
        public Accelerator: string;
        public Alignment: OlAlignment;
        public BackColor: stdole.OLE_COLOR;
        public BackStyle: OlBackStyle;
        public Caption: string;
        public Enabled: boolean;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public TripleState: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class OlkComboBox {
        private 'Outlook.OlkComboBox_typekey': OlkComboBox;
        private constructor();
        public AddItem(ItemText: string, Index?: any): void;
        public AutoSize: boolean;
        public AutoTab: boolean;
        public AutoWordSelect: boolean;
        public BackColor: stdole.OLE_COLOR;
        public BorderStyle: OlBorderStyle;
        public Clear(): void;
        public Copy(): void;
        public Cut(): void;
        public DragBehavior: OlDragBehavior;
        public DropDown(): void;
        public Enabled: boolean;
        public EnterFieldBehavior: OlEnterFieldBehavior;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public GetItem(Index: number): string;
        public HideSelection: boolean;
        public readonly ListCount: number;
        public ListIndex: number;
        public Locked: boolean;
        public MaxLength: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public Paste(): void;
        public RemoveItem(Index: number): void;
        public SelectionMargin: boolean;
        public SelLength: number;
        public SelStart: number;
        public readonly SelText: string;
        public SetItem(Index: number, Item: string): void;
        public Style: OlComboBoxStyle;
        public Text: string;
        public TextAlign: OlTextAlign;
        public TopIndex: number;
        public Value: any;
    }

    class OlkCommandButton {
        private 'Outlook.OlkCommandButton_typekey': OlkCommandButton;
        private constructor();
        public Accelerator: string;
        public AutoSize: boolean;
        public Caption: string;
        public DisplayDropArrow: boolean;
        public Enabled: boolean;
        public readonly Font: stdole.StdFont;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public Picture: stdole.StdPicture;
        public PictureAlignment: OlPictureAlignment;
        public TextAlign: OlTextAlign;
        public WordWrap: boolean;
    }

    class OlkContactPhoto {
        private 'Outlook.OlkContactPhoto_typekey': OlkContactPhoto;
        private constructor();
        public Enabled: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
    }

    class OlkDateControl {
        private 'Outlook.OlkDateControl_typekey': OlkDateControl;
        private constructor();
        public AutoSize: boolean;
        public AutoWordSelect: boolean;
        public BackColor: stdole.OLE_COLOR;
        public BackStyle: OlBackStyle;
        public Date: VarDate;
        public DropDown(): void;
        public Enabled: boolean;
        public EnterFieldBehavior: OlEnterFieldBehavior;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public HideSelection: boolean;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public ShowNoneButton: boolean;
        public Text: string;
        public TextAlign: OlTextAlign;
        public Value: any;
    }

    class OlkFrameHeader {
        private 'Outlook.OlkFrameHeader_typekey': OlkFrameHeader;
        private constructor();
        public Alignment: OlAlignment;
        public Caption: string;
        public Enabled: boolean;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
    }

    class OlkInfoBar {
        private 'Outlook.OlkInfoBar_typekey': OlkInfoBar;
        private constructor();
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
    }

    class OlkLabel {
        private 'Outlook.OlkLabel_typekey': OlkLabel;
        private constructor();
        public Accelerator: string;
        public AutoSize: boolean;
        public BackColor: stdole.OLE_COLOR;
        public BackStyle: OlBackStyle;
        public BorderStyle: OlBorderStyle;
        public Caption: string;
        public Enabled: boolean;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public TextAlign: OlTextAlign;
        public UseHeaderColor: boolean;
        public Value: any;
        public WordWrap: boolean;
    }

    class OlkListBox {
        private 'Outlook.OlkListBox_typekey': OlkListBox;
        private constructor();
        public AddItem(ItemText: string, Index?: any): void;
        public BackColor: stdole.OLE_COLOR;
        public BorderStyle: OlBorderStyle;
        public Clear(): void;
        public Copy(): void;
        public Enabled: boolean;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public GetItem(Index: number): string;
        public GetSelected(Index: number): boolean;
        public readonly ListCount: number;
        public ListIndex: number;
        public Locked: boolean;
        public MatchEntry: OlMatchEntry;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public MultiSelect: OlMultiSelect;
        public RemoveItem(Index: number): void;
        public SetItem(Index: number, Item: string): void;
        public SetSelected(Index: number, Selected: boolean): void;
        public Text: string;
        public TextAlign: OlTextAlign;
        public TopIndex: number;
        public Value: any;
    }

    class OlkOptionButton {
        private 'Outlook.OlkOptionButton_typekey': OlkOptionButton;
        private constructor();
        public Accelerator: string;
        public Alignment: OlAlignment;
        public BackColor: stdole.OLE_COLOR;
        public BackStyle: OlBackStyle;
        public Caption: string;
        public Enabled: boolean;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public GroupName: string;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public Value: any;
        public WordWrap: boolean;
    }

    class OlkPageControl {
        private 'Outlook.OlkPageControl_typekey': OlkPageControl;
        private constructor();
        public Page: OlPageType;
    }

    class OlkSenderPhoto {
        private 'Outlook.OlkSenderPhoto_typekey': OlkSenderPhoto;
        private constructor();
        public Enabled: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public readonly PreferredHeight: number;
        public readonly PreferredWidth: number;
    }

    /** Outlook TextBox */
    class OlkTextBox {
        private 'Outlook.OlkTextBox_typekey': OlkTextBox;
        private constructor();
        public AutoSize: boolean;
        public AutoTab: boolean;
        public AutoWordSelect: boolean;
        public BackColor: stdole.OLE_COLOR;
        public BorderStyle: OlBorderStyle;
        public Clear(): void;
        public Copy(): void;
        public Cut(): void;
        public DragBehavior: OlDragBehavior;
        public Enabled: boolean;
        public EnableRichText: boolean;
        public EnterFieldBehavior: OlEnterFieldBehavior;
        public EnterKeyBehavior: boolean;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public HideSelection: boolean;
        public IntegralHeight: boolean;
        public Locked: boolean;
        public MaxLength: number;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public MultiLine: boolean;
        public PasswordChar: string;
        public Paste(): void;
        public Scrollbars: OlScrollBars;
        public SelectionMargin: boolean;
        public SelLength: number;
        public SelStart: number;
        public readonly SelText: string;
        public TabKeyBehavior: boolean;
        public Text: string;
        public TextAlign: OlTextAlign;
        public Value: any;
        public WordWrap: boolean;
    }

    class OlkTimeControl {
        private 'Outlook.OlkTimeControl_typekey': OlkTimeControl;
        private constructor();
        public AutoSize: boolean;
        public AutoWordSelect: boolean;
        public BackColor: stdole.OLE_COLOR;
        public BackStyle: OlBackStyle;
        public DropDown(): void;
        public Enabled: boolean;
        public EnterFieldBehavior: OlEnterFieldBehavior;
        public readonly Font: stdole.StdFont;
        public ForeColor: stdole.OLE_COLOR;
        public HideSelection: boolean;
        public IntervalTime: VarDate;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public ReferenceTime: VarDate;
        public Style: OlTimeStyle;
        public Text: string;
        public TextAlign: OlTextAlign;
        public Time: VarDate;
        public Value: any;
    }

    class OlkTimeZoneControl {
        private 'Outlook.OlkTimeZoneControl_typekey': OlkTimeZoneControl;
        private constructor();
        public AppointmentTimeField: OlAppointmentTimeField;
        public BorderStyle: OlBorderStyle;
        public DropDown(): void;
        public Enabled: boolean;
        public Locked: boolean;
        public MouseIcon: stdole.StdPicture;
        public MousePointer: OlMousePointer;
        public SelectedTimeZoneIndex: number;
        public Value: any;
    }

    class OrderField {
        private 'Outlook.OrderField_typekey': OrderField;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public IsDescending: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly ViewXMLSchemaName: string;
    }

    class OrderFields {
        private 'Outlook.OrderFields_typekey': OrderFields;
        private constructor();
        public Add(PropertyName: string, IsDescending?: any): OrderField;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Insert(PropertyName: string, Index: any, IsDescending?: any): OrderField;
        public Item(Index: any): OrderField;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public RemoveAll(): void;
        public readonly Session: NameSpace;
    }

    class OutlookBarGroup {
        private 'Outlook.OutlookBarGroup_typekey': OutlookBarGroup;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly Shortcuts: OutlookBarShortcuts;
        public ViewType: OlOutlookBarViewType;
    }

    class OutlookBarGroups {
        private 'Outlook.OutlookBarGroups_typekey': OutlookBarGroups;
        private constructor();
        public Add(Name: string, Index?: any): OutlookBarGroup;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): OutlookBarGroup;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public readonly Session: NameSpace;
    }

    class OutlookBarPane {
        private 'Outlook.OutlookBarPane_typekey': OutlookBarPane;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Contents: OutlookBarStorage;
        public CurrentGroup: OutlookBarGroup;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class OutlookBarShortcut {
        private 'Outlook.OutlookBarShortcut_typekey': OutlookBarShortcut;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public SetIcon(Icon: any): void;
        public readonly Target: any;
    }

    class OutlookBarShortcuts {
        private 'Outlook.OutlookBarShortcuts_typekey': OutlookBarShortcuts;
        private constructor();
        public Add(Target: any, Name: string, Index?: any): OutlookBarShortcut;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): OutlookBarShortcut;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public readonly Session: NameSpace;
    }

    class OutlookBarStorage {
        private 'Outlook.OutlookBarStorage_typekey': OutlookBarStorage;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Groups: OutlookBarGroups;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Panes {
        private 'Outlook.Panes_typekey': Panes;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): any;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class PlaySoundRuleAction {
        private 'Outlook.PlaySoundRuleAction_typekey': PlaySoundRuleAction;
        private constructor();
        public readonly ActionType: OlRuleActionType;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Enabled: boolean;
        public FilePath: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class PostItem {
        private 'Outlook.PostItem_typekey': PostItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public BodyFormat: OlBodyFormat;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public ClearConversationIndex(): void;
        public ClearTaskFlag(): void;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public ExpiryTime: VarDate;
        public readonly FormDescription: FormDescription;
        public Forward(): MailItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public HTMLBody: string;
        public Importance: OlImportance;
        public InternetCodepage: number;
        public readonly IsConflict: boolean;
        public readonly IsMarkedAsTask: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkAsTask(MarkInterval: OlMarkInterval): void;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public Post(): void;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly ReceivedTime: VarDate;
        public ReminderOverrideDefault: boolean;
        public ReminderPlaySound: boolean;
        public ReminderSet: boolean;
        public ReminderSoundFile: string;
        public ReminderTime: VarDate;
        public Reply(): MailItem;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public readonly SenderEmailAddress: string;
        public readonly SenderEmailType: string;
        public readonly SenderName: string;
        public Sensitivity: OlSensitivity;
        public readonly SentOn: VarDate;
        public readonly Session: NameSpace;
        public SetACLs(): boolean;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public TaskCompletedDate: VarDate;
        public TaskDueDate: VarDate;
        public TaskStartDate: VarDate;
        public TaskSubject: string;
        public ToDoTaskOrdinal: VarDate;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class PropertyAccessor {
        private 'Outlook.PropertyAccessor_typekey': PropertyAccessor;
        private constructor();
        public readonly Application: Application;
        public BinaryToString(Value: any): string;
        public readonly Class: OlObjectClass;
        public DeleteProperties(SchemaNames: any): any;
        public DeleteProperty(SchemaName: string): void;
        public GetProperties(SchemaNames: any): any;
        public GetProperty(SchemaName: string): any;
        public LocalTimeToUTC(Value: VarDate): VarDate;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public SetProperties(SchemaNames: any, Values: any): any;
        public SetProperty(SchemaName: string, Value: any): void;
        public StringToBinary(Value: string): any;
        public UTCToLocalTime(Value: VarDate): VarDate;
    }

    class PropertyPages {
        private 'Outlook.PropertyPages_typekey': PropertyPages;
        private constructor();
        public Add(Page: any, Title: string): void;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): any;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public readonly Session: NameSpace;
    }

    class Recipient {
        private 'Outlook.Recipient_typekey': Recipient;
        private constructor();
        public readonly Address: string;
        public AddressEntry: AddressEntry;
        public readonly Application: Application;
        public AutoResponse: string;
        public readonly Class: OlObjectClass;
        public Delete(): void;
        public readonly DisplayType: OlDisplayType;
        public readonly EntryID: string;
        public FreeBusy(Start: VarDate, MinPerChar: number, CompleteFormat?: any): string;
        public readonly Index: number;
        public readonly MeetingResponseStatus: OlResponseStatus;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly PropertyAccessor: PropertyAccessor;
        public Resolve(): boolean;
        public readonly Resolved: boolean;
        public Sendable: boolean;
        public readonly Session: NameSpace;
        public TrackingStatus: OlTrackingStatus;
        public TrackingStatusTime: VarDate;
        public Type: number;
    }

    class Recipients {
        private 'Outlook.Recipients_typekey': Recipients;
        private constructor();
        public Add(Name: string): Recipient;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Recipient;
        public readonly Parent: any;
        public Remove(Index: number): void;
        public ResolveAll(): boolean;
        public readonly Session: NameSpace;
    }

    class RecurrencePattern {
        private 'Outlook.RecurrencePattern_typekey': RecurrencePattern;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public DayOfMonth: number;
        public DayOfWeekMask: OlDaysOfWeek;
        public Duration: number;
        public EndTime: VarDate;
        public readonly Exceptions: Exceptions;
        public GetOccurrence(StartDate: VarDate): AppointmentItem;
        public Instance: number;
        public Interval: number;
        public MonthOfYear: number;
        public NoEndDate: boolean;
        public Occurrences: number;
        public readonly Parent: any;
        public PatternEndDate: VarDate;
        public PatternStartDate: VarDate;
        public RecurrenceType: OlRecurrenceType;
        public Regenerate: boolean;
        public readonly Session: NameSpace;
        public StartTime: VarDate;
    }

    class Reminder {
        private 'Outlook.Reminder_typekey': Reminder;
        private constructor();
        public readonly Application: Application;
        public readonly Caption: string;
        public readonly Class: OlObjectClass;
        public Dismiss(): void;
        public readonly IsVisible: boolean;
        public readonly Item: any;
        public readonly NextReminderDate: VarDate;
        public readonly OriginalReminderDate: VarDate;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public Snooze(SnoozeTime?: any): void;
    }

    class Reminders {
        private 'Outlook.Reminders_typekey': Reminders;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Reminder;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public readonly Session: NameSpace;
    }

    class RemoteItem {
        private 'Outlook.RemoteItem_typekey': RemoteItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public readonly HasAttachment: boolean;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly RemoteMessageClass: string;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public readonly TransferSize: number;
        public readonly TransferTime: number;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class ReportItem {
        private 'Outlook.ReportItem_typekey': ReportItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly RetentionExpirationDate: VarDate;
        public readonly RetentionPolicyName: string;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class Results {
        private 'Outlook.Results_typekey': Results;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public DefaultItemType: OlItemType;
        public GetFirst(): any;
        public GetLast(): any;
        public GetNext(): any;
        public GetPrevious(): any;
        public Item(Index: any): any;
        public readonly Parent: any;
        public readonly RawTable: any;
        public ResetColumns(): void;
        public readonly Session: NameSpace;
        public SetColumns(Columns: string): void;
        public Sort(Property: string, Descending?: any): void;
    }

    class Row {
        private 'Outlook.Row_typekey': Row;
        private constructor();
        public readonly Application: Application;
        public BinaryToString(Index: any): string;
        public readonly Class: OlObjectClass;
        public GetValues(): any;
        public Item(Index: any): any;
        public LocalTimeToUTC(Index: any): VarDate;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public UTCToLocalTime(Index: any): VarDate;
    }

    class Rule {
        private 'Outlook.Rule_typekey': Rule;
        private constructor();
        public readonly Actions: RuleActions;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Conditions: RuleConditions;
        public Enabled: boolean;
        public readonly Exceptions: RuleConditions;
        public Execute(ShowProgress?: any, Folder?: any, IncludeSubfolders?: any, RuleExecuteOption?: any): void;
        public ExecutionOrder: number;
        public readonly IsLocalRule: boolean;
        public Name: string;
        public readonly Parent: any;
        public readonly RuleType: OlRuleType;
        public readonly Session: NameSpace;
    }

    class RuleAction {
        private 'Outlook.RuleAction_typekey': RuleAction;
        private constructor();
        public readonly ActionType: OlRuleActionType;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class RuleActions {
        private 'Outlook.RuleActions_typekey': RuleActions;
        private constructor();
        public readonly Application: Application;
        public readonly AssignToCategory: AssignToCategoryRuleAction;
        public readonly CC: SendRuleAction;
        public readonly Class: OlObjectClass;
        public readonly ClearCategories: RuleAction;
        public readonly CopyToFolder: MoveOrCopyRuleAction;
        public readonly Count: number;
        public readonly Delete: RuleAction;
        public readonly DeletePermanently: RuleAction;
        public readonly DesktopAlert: RuleAction;
        public readonly Forward: SendRuleAction;
        public readonly ForwardAsAttachment: SendRuleAction;
        public Item(Index: number): RuleAction;
        public readonly MarkAsTask: MarkAsTaskRuleAction;
        public readonly MoveToFolder: MoveOrCopyRuleAction;
        public readonly NewItemAlert: NewItemAlertRuleAction;
        public readonly NotifyDelivery: RuleAction;
        public readonly NotifyRead: RuleAction;
        public readonly Parent: any;
        public readonly PlaySound: PlaySoundRuleAction;
        public readonly Redirect: SendRuleAction;
        public readonly Session: NameSpace;
        public readonly Stop: RuleAction;
    }

    class RuleCondition {
        private 'Outlook.RuleCondition_typekey': RuleCondition;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class RuleConditions {
        private 'Outlook.RuleConditions_typekey': RuleConditions;
        private constructor();
        public readonly Account: AccountRuleCondition;
        public readonly AnyCategory: RuleCondition;
        public readonly Application: Application;
        public readonly Body: TextRuleCondition;
        public readonly BodyOrSubject: TextRuleCondition;
        public readonly Category: CategoryRuleCondition;
        public readonly CC: RuleCondition;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public readonly FormName: FormNameRuleCondition;
        public readonly From: ToOrFromRuleCondition;
        public readonly FromAnyRSSFeed: RuleCondition;
        public readonly FromRssFeed: FromRssFeedRuleCondition;
        public readonly HasAttachment: RuleCondition;
        public readonly Importance: ImportanceRuleCondition;
        public Item(Index: number): RuleCondition;
        public readonly MeetingInviteOrUpdate: RuleCondition;
        public readonly MessageHeader: TextRuleCondition;
        public readonly NotTo: RuleCondition;
        public readonly OnLocalMachine: RuleCondition;
        public readonly OnlyToMe: RuleCondition;
        public readonly OnOtherMachine: RuleCondition;
        public readonly Parent: any;
        public readonly RecipientAddress: AddressRuleCondition;
        public readonly SenderAddress: AddressRuleCondition;
        public readonly SenderInAddressList: SenderInAddressListRuleCondition;
        public readonly SentTo: ToOrFromRuleCondition;
        public readonly Session: NameSpace;
        public readonly Subject: TextRuleCondition;
        public readonly ToMe: RuleCondition;
        public readonly ToOrCc: RuleCondition;
    }

    class Rules {
        private 'Outlook.Rules_typekey': Rules;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Create(Name: string, RuleType: OlRuleType): Rule;
        public IsRssRulesProcessingEnabled: boolean;
        public Item(Index: any): Rule;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public Save(ShowProgress?: any): void;
        public readonly Session: NameSpace;
    }

    class Search {
        private 'Outlook.Search_typekey': Search;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Filter: string;
        public GetTable(): Table;
        public readonly IsSynchronous: boolean;
        public readonly Parent: any;
        public readonly Results: Results;
        public Save(Name: string): Folder;
        public readonly Scope: string;
        public readonly SearchSubFolders: boolean;
        public readonly Session: NameSpace;
        public Stop(): void;
        public readonly Tag: string;
    }

    class Selection {
        private 'Outlook.Selection_typekey': Selection;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public GetSelection(SelectionContents: OlSelectionContents): Selection;
        public Item(Index: any): any;
        public readonly Location: OlSelectionLocation;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class SelectNamesDialog {
        private 'Outlook.SelectNamesDialog_typekey': SelectNamesDialog;
        private constructor();
        public AllowMultipleSelection: boolean;
        public readonly Application: Application;
        public BccLabel: string;
        public Caption: string;
        public CcLabel: string;
        public readonly Class: OlObjectClass;
        public Display(): boolean;
        public ForceResolution: boolean;
        public InitialAddressList: AddressList;
        public NumberOfRecipientSelectors: OlRecipientSelectors;
        public readonly Parent: any;
        public Recipients: Recipients;
        public readonly Session: NameSpace;
        public SetDefaultDisplayMode(defaultMode: OlDefaultSelectNamesDisplayMode): void;
        public ShowOnlyInitialAddressList: boolean;
        public ToLabel: string;
    }

    class SenderInAddressListRuleCondition {
        private 'Outlook.SenderInAddressListRuleCondition_typekey': SenderInAddressListRuleCondition;
        private constructor();
        public AddressList: AddressList;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class SendRuleAction {
        private 'Outlook.SendRuleAction_typekey': SendRuleAction;
        private constructor();
        public readonly ActionType: OlRuleActionType;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Recipients: Recipients;
        public readonly Session: NameSpace;
    }

    class SharingItem {
        private 'Outlook.SharingItem_typekey': SharingItem;
        private constructor();
        public readonly Actions: Actions;
        public AddBusinessCard(contact: ContactItem): void;
        public Allow(): void;
        public AllowWriteAccess: boolean;
        public AlternateRecipientAllowed: boolean;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public AutoForwarded: boolean;
        public BCC: string;
        public BillingInformation: string;
        public Body: string;
        public BodyFormat: OlBodyFormat;
        public Categories: string;
        public CC: string;
        public readonly Class: OlObjectClass;
        public ClearConversationIndex(): void;
        public ClearTaskFlag(): void;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public DeferredDeliveryTime: VarDate;
        public Delete(): void;
        public DeleteAfterSubmit: boolean;
        public Deny(): SharingItem;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public EnableSharedAttachments: boolean;
        public readonly EntryID: string;
        public ExpiryTime: VarDate;
        public FlagDueBy: VarDate;
        public FlagIcon: OlFlagIcon;
        public FlagRequest: string;
        public FlagStatus: OlFlagStatus;
        public readonly FormDescription: FormDescription;
        public Forward(): SharingItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public HTMLBody: string;
        public Importance: OlImportance;
        public InternetCodepage: number;
        public readonly IsConflict: boolean;
        public readonly IsMarkedAsTask: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly MAPIOBJECT: any;
        public MarkAsTask(MarkInterval: OlMarkInterval): void;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public OpenSharedFolder(): Folder;
        public OriginatorDeliveryReportRequested: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public Permission: OlPermission;
        public PermissionService: OlPermissionService;
        public PermissionTemplateGuid: string;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public ReadReceiptRequested: boolean;
        public readonly ReceivedByEntryID: string;
        public readonly ReceivedByName: string;
        public readonly ReceivedOnBehalfOfEntryID: string;
        public readonly ReceivedOnBehalfOfName: string;
        public readonly ReceivedTime: VarDate;
        public RecipientReassignmentProhibited: boolean;
        public readonly Recipients: Recipients;
        public ReminderOverrideDefault: boolean;
        public ReminderPlaySound: boolean;
        public ReminderSet: boolean;
        public ReminderSoundFile: string;
        public ReminderTime: VarDate;
        public readonly RemoteID: string;
        public readonly RemoteName: string;
        public readonly RemotePath: string;
        public RemoteStatus: OlRemoteStatus;
        public Reply(): MailItem;
        public ReplyAll(): MailItem;
        public readonly ReplyRecipientNames: string;
        public readonly ReplyRecipients: Recipients;
        public readonly RequestedFolder: OlDefaultFolders;
        public readonly RetentionExpirationDate: VarDate;
        public readonly RetentionPolicyName: string;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public SaveSentMessageFolder: Folder;
        public Send(): void;
        public readonly SenderEmailAddress: string;
        public readonly SenderEmailType: string;
        public readonly SenderName: string;
        public SendUsingAccount: Account;
        public Sensitivity: OlSensitivity;
        public readonly Sent: boolean;
        public readonly SentOn: VarDate;
        public SentOnBehalfOfName: string;
        public readonly Session: NameSpace;
        public readonly SharingProvider: OlSharingProvider;
        public readonly SharingProviderGuid: string;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public readonly Submitted: boolean;
        public TaskCompletedDate: VarDate;
        public TaskDueDate: VarDate;
        public TaskStartDate: VarDate;
        public TaskSubject: string;
        public To: string;
        public ToDoTaskOrdinal: VarDate;
        public Type: OlSharingMsgType;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class SimpleItems {
        private 'Outlook.SimpleItems_typekey': SimpleItems;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): any;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class SolutionsModule {
        private 'Outlook.SolutionsModule_typekey': SolutionsModule;
        private constructor();
        public AddSolution(Solution: Folder, Scope: OlSolutionScope): void;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly NavigationModuleType: OlNavigationModuleType;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class StorageItem {
        private 'Outlook.StorageItem_typekey': StorageItem;
        private constructor();
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public Body: string;
        public readonly Class: OlObjectClass;
        public readonly CreationTime: VarDate;
        public Creator: string;
        public Delete(): void;
        public readonly EntryID: string;
        public readonly LastModificationTime: VarDate;
        public readonly Parent: any;
        public readonly PropertyAccessor: PropertyAccessor;
        public Save(): void;
        public readonly Session: NameSpace;
        public readonly Size: number;
        public Subject: string;
        public readonly UserProperties: UserProperties;
    }

    class Store {
        private 'Outlook.Store_typekey': Store;
        private constructor();
        public readonly Application: Application;
        public readonly Categories: Categories;
        public readonly Class: OlObjectClass;
        public readonly DisplayName: string;
        public readonly ExchangeStoreType: OlExchangeStoreType;
        public readonly FilePath: string;
        public GetDefaultFolder(FolderType: OlDefaultFolders): Folder;
        public GetRootFolder(): Folder;
        public GetRules(): Rules;
        public GetSearchFolders(): Folders;
        public GetSpecialFolder(FolderType: OlSpecialFolders): Folder;
        public readonly IsCachedExchange: boolean;
        public readonly IsConversationEnabled: boolean;
        public readonly IsDataFileStore: boolean;
        public readonly IsInstantSearchEnabled: boolean;
        public readonly IsOpen: boolean;
        public readonly MAPIOBJECT: any;
        public readonly Parent: any;
        public readonly PropertyAccessor: PropertyAccessor;
        public RefreshQuotaDisplay(): void;
        public readonly Session: NameSpace;
        public readonly StoreID: string;
    }

    class Stores {
        private 'Outlook.Stores_typekey': Stores;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): Store;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class SyncObject {
        private 'Outlook.SyncObject_typekey': SyncObject;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public Start(): void;
        public Stop(): void;
    }

    class SyncObjects {
        private 'Outlook.SyncObjects_typekey': SyncObjects;
        private constructor();
        public readonly AppFolders: SyncObject;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): SyncObject;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class Table {
        private 'Outlook.Table_typekey': Table;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Columns: Columns;
        public readonly EndOfTable: boolean;
        public FindNextRow(): Row;
        public FindRow(Filter: string): Row;
        public GetArray(MaxRows: number): any;
        public GetNextRow(): Row;
        public GetRowCount(): number;
        public MoveToStart(): void;
        public readonly Parent: any;
        public Restrict(Filter: string): Table;
        public readonly Session: NameSpace;
        public Sort(SortProperty: string, Descending?: any): void;
    }

    class TableView {
        private 'Outlook.TableView_typekey': TableView;
        private constructor();
        public AllowInCellEditing: boolean;
        public AlwaysExpandConversation: boolean;
        public readonly Application: Application;
        public Apply(): void;
        public readonly AutoFormatRules: AutoFormatRules;
        public AutomaticColumnSizing: boolean;
        public AutomaticGrouping: boolean;
        public AutoPreview: OlAutoPreview;
        public readonly AutoPreviewFont: ViewFont;
        public readonly Class: OlObjectClass;
        public readonly ColumnFont: ViewFont;
        public Copy(Name: string, SaveOption: OlViewSaveOption): View;
        public DefaultExpandCollapseSetting: OlDefaultExpandCollapseSetting;
        public Delete(): void;
        public Filter: string;
        public GetTable(): Table;
        public GoToDate(Date: VarDate): void;
        public GridLineStyle: OlGridLineStyle;
        public readonly GroupByFields: OrderFields;
        public HideReadingPaneHeaderInfo: boolean;
        public Language: string;
        public LockUserChanges: boolean;
        public MaxLinesInMultiLineView: number;
        public MultiLine: OlMultiLine;
        public MultiLineWidth: number;
        public Name: string;
        public readonly Parent: any;
        public Reset(): void;
        public readonly RowFont: ViewFont;
        public Save(): void;
        public readonly SaveOption: OlViewSaveOption;
        public readonly Session: NameSpace;
        public ShowConversationByDate: boolean;
        public ShowConversationSendersAboveSubject: boolean;
        public ShowFullConversations: boolean;
        public ShowItemsInGroups: boolean;
        public ShowNewItemRow: boolean;
        public ShowReadingPane: boolean;
        public ShowUnreadAndFlaggedMessages: boolean;
        public readonly SortFields: OrderFields;
        public readonly Standard: boolean;
        public readonly ViewFields: ViewFields;
        public readonly ViewType: OlViewType;
        public XML: string;
    }

    class TaskItem {
        private 'Outlook.TaskItem_typekey': TaskItem;
        private constructor();
        public readonly Actions: Actions;
        public ActualWork: number;
        public readonly Application: Application;
        public Assign(): TaskItem;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public CancelResponseState(): void;
        public CardData: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public ClearRecurrencePattern(): void;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public Complete: boolean;
        public readonly Conflicts: Conflicts;
        public ContactNames: string;
        public Contacts: string;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public DateCompleted: VarDate;
        public readonly DelegationState: OlTaskDelegationState;
        public readonly Delegator: string;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public DueDate: VarDate;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public GetRecurrencePattern(): RecurrencePattern;
        public Importance: OlImportance;
        public InternetCodepage: number;
        public readonly IsConflict: boolean;
        public readonly IsRecurring: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkComplete(): void;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public Ordinal: number;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public Owner: string;
        public readonly Ownership: OlTaskOwnership;
        public readonly Parent: any;
        public PercentComplete: number;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public readonly Recipients: Recipients;
        public ReminderOverrideDefault: boolean;
        public ReminderPlaySound: boolean;
        public ReminderSet: boolean;
        public ReminderSoundFile: string;
        public ReminderTime: VarDate;
        public Respond(Response: OlTaskResponse, fNoUI: any, fAdditionalTextDialog: any): TaskItem;
        public readonly ResponseState: OlTaskResponse;
        public Role: string;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public SchedulePlusPriority: string;
        public Send(): void;
        public SendUsingAccount: Account;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public SkipRecurrence(): boolean;
        public StartDate: VarDate;
        public Status: OlTaskStatus;
        public StatusOnCompletionRecipients: string;
        public StatusReport(): any;
        public StatusUpdateRecipients: string;
        public Subject: string;
        public TeamTask: boolean;
        public ToDoTaskOrdinal: VarDate;
        public TotalWork: number;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class TaskRequestAcceptItem {
        private 'Outlook.TaskRequestAcceptItem_typekey': TaskRequestAcceptItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public GetAssociatedTask(AddToTaskList: boolean): TaskItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class TaskRequestDeclineItem {
        private 'Outlook.TaskRequestDeclineItem_typekey': TaskRequestDeclineItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public GetAssociatedTask(AddToTaskList: boolean): TaskItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class TaskRequestItem {
        private 'Outlook.TaskRequestItem_typekey': TaskRequestItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public GetAssociatedTask(AddToTaskList: boolean): TaskItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class TaskRequestUpdateItem {
        private 'Outlook.TaskRequestUpdateItem_typekey': TaskRequestUpdateItem;
        private constructor();
        public readonly Actions: Actions;
        public readonly Application: Application;
        public readonly Attachments: Attachments;
        public readonly AutoResolvedWinner: boolean;
        public BillingInformation: string;
        public Body: string;
        public Categories: string;
        public readonly Class: OlObjectClass;
        public Close(SaveMode: OlInspectorClose): void;
        public Companies: string;
        public readonly Conflicts: Conflicts;
        public readonly ConversationID: string;
        public readonly ConversationIndex: string;
        public readonly ConversationTopic: string;
        public Copy(): any;
        public readonly CreationTime: VarDate;
        public Delete(): void;
        public Display(Modal?: any): void;
        public readonly DownloadState: OlDownloadState;
        public readonly EntryID: string;
        public readonly FormDescription: FormDescription;
        public GetAssociatedTask(AddToTaskList: boolean): TaskItem;
        public GetConversation(): Conversation;
        public readonly GetInspector: Inspector;
        public Importance: OlImportance;
        public readonly IsConflict: boolean;
        public readonly ItemProperties: ItemProperties;
        public readonly LastModificationTime: VarDate;
        public readonly Links: Links;
        public readonly MAPIOBJECT: any;
        public MarkForDownload: OlRemoteStatus;
        public MessageClass: string;
        public Mileage: string;
        public Move(DestFldr: Folder): any;
        public NoAging: boolean;
        public readonly OutlookInternalVersion: number;
        public readonly OutlookVersion: string;
        public readonly Parent: any;
        public PrintOut(): void;
        public readonly PropertyAccessor: PropertyAccessor;
        public RTFBody: any;
        public Save(): void;
        public SaveAs(Path: string, Type?: any): void;
        public readonly Saved: boolean;
        public Sensitivity: OlSensitivity;
        public readonly Session: NameSpace;
        public ShowCategoriesDialog(): void;
        public readonly Size: number;
        public Subject: string;
        public UnRead: boolean;
        public readonly UserProperties: UserProperties;
    }

    class TasksModule {
        private 'Outlook.TasksModule_typekey': TasksModule;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Name: string;
        public readonly NavigationGroups: NavigationGroups;
        public readonly NavigationModuleType: OlNavigationModuleType;
        public readonly Parent: any;
        public Position: number;
        public readonly Session: NameSpace;
        public Visible: boolean;
    }

    class TextRuleCondition {
        private 'Outlook.TextRuleCondition_typekey': TextRuleCondition;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public Text: any;
    }

    class TimelineView {
        private 'Outlook.TimelineView_typekey': TimelineView;
        private constructor();
        public readonly Application: Application;
        public Apply(): void;
        public readonly Class: OlObjectClass;
        public Copy(Name: string, SaveOption: OlViewSaveOption): View;
        public DefaultExpandCollapseSetting: OlDefaultExpandCollapseSetting;
        public Delete(): void;
        public EndField: string;
        public Filter: string;
        public GoToDate(Date: VarDate): void;
        public readonly GroupByFields: OrderFields;
        public readonly ItemFont: ViewFont;
        public Language: string;
        public LockUserChanges: boolean;
        public readonly LowerScaleFont: ViewFont;
        public MaxLabelWidth: number;
        public Name: string;
        public readonly Parent: any;
        public Reset(): void;
        public Save(): void;
        public readonly SaveOption: OlViewSaveOption;
        public readonly Session: NameSpace;
        public ShowLabelWhenViewingByMonth: boolean;
        public ShowWeekNumbers: boolean;
        public readonly Standard: boolean;
        public StartField: string;
        public TimelineViewMode: OlTimelineViewMode;
        public readonly UpperScaleFont: ViewFont;
        public readonly ViewType: OlViewType;
        public XML: string;
    }

    class TimeZone {
        private 'Outlook.TimeZone_typekey': TimeZone;
        private constructor();
        public readonly Application: Application;
        public readonly Bias: number;
        public readonly Class: OlObjectClass;
        public readonly DaylightBias: number;
        public readonly DaylightDate: VarDate;
        public readonly DaylightDesignation: string;
        public readonly ID: string;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly StandardBias: number;
        public readonly StandardDate: VarDate;
        public readonly StandardDesignation: string;
    }

    class TimeZones {
        private 'Outlook.TimeZones_typekey': TimeZones;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public ConvertTime(SourceDateTime: VarDate, SourceTimeZone: TimeZone, DestinationTimeZone: TimeZone): VarDate;
        public readonly Count: number;
        public readonly CurrentTimeZone: TimeZone;
        public Item(Index: any): TimeZone;
        public readonly Parent: any;
        public readonly Session: NameSpace;
    }

    class ToOrFromRuleCondition {
        private 'Outlook.ToOrFromRuleCondition_typekey': ToOrFromRuleCondition;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ConditionType: OlRuleConditionType;
        public Enabled: boolean;
        public readonly Parent: any;
        public readonly Recipients: Recipients;
        public readonly Session: NameSpace;
    }

    class UserDefinedProperties {
        private 'Outlook.UserDefinedProperties_typekey': UserDefinedProperties;
        private constructor();
        public Add(Name: string, Type: OlUserPropertyType, DisplayFormat?: any, Formula?: any): UserDefinedProperty;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Find(Name: string): UserDefinedProperty;
        public Item(Index: any): UserDefinedProperty;
        public readonly Parent: any;
        public Refresh(): void;
        public Remove(Index: number): void;
        public readonly Session: NameSpace;
    }

    class UserDefinedProperty {
        private 'Outlook.UserDefinedProperty_typekey': UserDefinedProperty;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Delete(): void;
        public readonly DisplayFormat: number;
        public readonly Formula: string;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly Type: OlUserPropertyType;
    }

    class UserProperties {
        private 'Outlook.UserProperties_typekey': UserProperties;
        private constructor();
        public Add(Name: string, Type: OlUserPropertyType, AddToFolderFields?: any, DisplayFormat?: any): UserProperty;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Find(Name: string, Custom?: any): UserProperty;
        public Item(Index: any): UserProperty;
        public readonly Parent: any;
        public Remove(Index: number): void;
        public readonly Session: NameSpace;
    }

    class UserProperty {
        private 'Outlook.UserProperty_typekey': UserProperty;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public Delete(): void;
        public Formula: string;
        public readonly IsUserProperty: boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly Type: OlUserPropertyType;
        public ValidationFormula: string;
        public ValidationText: string;
        public Value: any;
    }

    class View {
        private 'Outlook.View_typekey': View;
        private constructor();
        public readonly Application: Application;
        public Apply(): void;
        public readonly Class: OlObjectClass;
        public Copy(Name: string, SaveOption: OlViewSaveOption): View;
        public Delete(): void;
        public Filter: string;
        public GoToDate(Date: VarDate): void;
        public Language: string;
        public LockUserChanges: boolean;
        public Name: string;
        public readonly Parent: any;
        public Reset(): void;
        public Save(): void;
        public readonly SaveOption: OlViewSaveOption;
        public readonly Session: NameSpace;
        public readonly Standard: boolean;
        public readonly ViewType: OlViewType;
        public XML: string;
    }

    class ViewField {
        private 'Outlook.ViewField_typekey': ViewField;
        private constructor();
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly ColumnFormat: ColumnFormat;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public readonly ViewXMLSchemaName: string;
    }

    class ViewFields {
        private 'Outlook.ViewFields_typekey': ViewFields;
        private constructor();
        public Add(PropertyName: string): ViewField;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Insert(PropertyName: string, Index: any): ViewField;
        public Item(Index: any): ViewField;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public readonly Session: NameSpace;
    }

    class ViewFont {
        private 'Outlook.ViewFont_typekey': ViewFont;
        private constructor();
        public readonly Application: Application;
        public Bold: boolean;
        public readonly Class: OlObjectClass;
        public Color: OlColor;
        public ExtendedColor: OlCategoryColor;
        public Italic: boolean;
        public Name: string;
        public readonly Parent: any;
        public readonly Session: NameSpace;
        public Size: number;
        public Strikethrough: boolean;
        public Underline: boolean;
    }

    class Views {
        private 'Outlook.Views_typekey': Views;
        private constructor();
        public Add(Name: string, ViewType: OlViewType, SaveOption: OlViewSaveOption): View;
        public readonly Application: Application;
        public readonly Class: OlObjectClass;
        public readonly Count: number;
        public Item(Index: any): View;
        public readonly Parent: any;
        public Remove(Index: any): void;
        public readonly Session: NameSpace;
    }
}

interface ActiveXObject {
    on(obj: Outlook.Accounts, event: 'AutoDiscoverComplete', argNames: ['Account'], handler: (this: Outlook.Accounts, parameter: {readonly Account: Outlook.Account}) => void): void;
    on(
        obj: Outlook.AccountSelector, event: 'SelectedAccountChange', argNames: ['SelectedAccount'], handler: (
            this: Outlook.AccountSelector, parameter: {readonly SelectedAccount: Outlook.Account}) => void): void;
    on(
        obj: Outlook.Application, event: 'AdvancedSearchComplete' | 'AdvancedSearchStopped', argNames: ['SearchObject'], handler: (
            this: Outlook.Application, parameter: {readonly SearchObject: Outlook.Search}) => void): void;
    on(
        obj: Outlook.Application, event: 'AttachmentContextMenuDisplay', argNames: ['CommandBar', 'Attachments'], handler: (
            this: Outlook.Application, parameter: {readonly CommandBar: Office.CommandBar, readonly Attachments: Outlook.AttachmentSelection}) => void): void;
    on(
        obj: Outlook.Application, event: 'BeforeFolderSharingDialog', argNames: ['FolderToShare', 'Cancel'], handler: (
            this: Outlook.Application, parameter: {readonly FolderToShare: Outlook.Folder, Cancel: boolean}) => void): void;
    on(obj: Outlook.Application, event: 'ContextMenuClose', argNames: ['ContextMenu'], handler: (this: Outlook.Application, parameter: {readonly ContextMenu: Outlook.OlContextMenu}) => void): void;
    on(
        obj: Outlook.Application, event: 'FolderContextMenuDisplay', argNames: ['CommandBar', 'Folder'], handler: (
            this: Outlook.Application, parameter: {readonly CommandBar: Office.CommandBar, readonly Folder: Outlook.Folder}) => void): void;
    on(
        obj: Outlook.Application, event: 'ItemContextMenuDisplay', argNames: ['CommandBar', 'Selection'], handler: (
            this: Outlook.Application, parameter: {readonly CommandBar: Office.CommandBar, readonly Selection: Outlook.Selection}) => void): void;
    on(obj: Outlook.Application, event: 'ItemLoad' | 'Reminder', argNames: ['Item'], handler: (this: Outlook.Application, parameter: {readonly Item: any}) => void): void;
    on(obj: Outlook.Application, event: 'ItemSend', argNames: ['Item', 'Cancel'], handler: (this: Outlook.Application, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.Application, event: 'NewMailEx', argNames: ['EntryIDCollection'], handler: (this: Outlook.Application, parameter: {readonly EntryIDCollection: string}) => void): void;
    on(obj: Outlook.Application, event: 'OptionsPagesAdd', argNames: ['Pages'], handler: (this: Outlook.Application, parameter: {readonly Pages: Outlook.PropertyPages}) => void): void;
    on(
        obj: Outlook.Application, event: 'ShortcutContextMenuDisplay', argNames: ['CommandBar', 'Shortcut'], handler: (
            this: Outlook.Application, parameter: {readonly CommandBar: Office.CommandBar, readonly Shortcut: Outlook.OutlookBarShortcut}) => void): void;
    on(
        obj: Outlook.Application, event: 'StoreContextMenuDisplay', argNames: ['CommandBar', 'Store'], handler: (
            this: Outlook.Application, parameter: {readonly CommandBar: Office.CommandBar, readonly Store: Outlook.Store}) => void): void;
    on(
        obj: Outlook.Application, event: 'ViewContextMenuDisplay', argNames: ['CommandBar', 'View'], handler: (
            this: Outlook.Application, parameter: {readonly CommandBar: Office.CommandBar, readonly View: Outlook.View}) => void): void;
    on(
        obj: Outlook.AppointmentItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.AppointmentItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.AppointmentItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.AppointmentItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.AppointmentItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.AppointmentItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.AppointmentItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.AppointmentItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.AppointmentItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.AppointmentItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.AppointmentItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.AppointmentItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.AppointmentItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.AppointmentItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.AppointmentItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.AppointmentItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.ContactItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.ContactItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.ContactItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.ContactItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.ContactItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.ContactItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.ContactItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.ContactItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.ContactItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.ContactItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.ContactItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.ContactItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.ContactItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.ContactItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.ContactItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.ContactItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.DistListItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.DistListItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.DistListItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.DistListItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.DistListItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.DistListItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.DistListItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.DistListItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.DistListItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.DistListItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.DistListItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.DistListItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.DistListItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.DistListItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.DistListItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.DistListItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.DocumentItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.DocumentItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.DocumentItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.DocumentItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.DocumentItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.DocumentItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.DocumentItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.DocumentItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.DocumentItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.DocumentItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.DocumentItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.DocumentItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.DocumentItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.DocumentItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.DocumentItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.DocumentItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.Explorer, event: 'BeforeFolderSwitch', argNames: ['NewFolder', 'Cancel'], handler: (this: Outlook.Explorer, parameter: {readonly NewFolder: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.Explorer, event: 'BeforeItemCopy' | 'BeforeItemCut' | 'BeforeMaximize' | 'BeforeMinimize' | 'BeforeMove' | 'BeforeSize', argNames: ['Cancel'],
        handler: (this: Outlook.Explorer, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Outlook.Explorer, event: 'BeforeItemPaste', argNames: ['ClipboardContent', 'Target', 'Cancel'], handler: (
            this: Outlook.Explorer, parameter: {readonly ClipboardContent: any, readonly Target: Outlook.Folder, Cancel: boolean}) => void): void;
    on(obj: Outlook.Explorer, event: 'BeforeViewSwitch', argNames: ['NewView', 'Cancel'], handler: (this: Outlook.Explorer, parameter: {readonly NewView: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.Explorers, event: 'NewExplorer', argNames: ['Explorer'], handler: (this: Outlook.Explorers, parameter: {readonly Explorer: Outlook.Explorer}) => void): void;
    on(obj: Outlook.Folder, event: 'BeforeFolderMove', argNames: ['MoveTo', 'Cancel'], handler: (this: Outlook.Folder, parameter: {readonly MoveTo: Outlook.Folder, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.Folder, event: 'BeforeItemMove', argNames: ['Item', 'MoveTo', 'Cancel'], handler: (
            this: Outlook.Folder, parameter: {readonly Item: any, readonly MoveTo: Outlook.Folder, Cancel: boolean}) => void): void;
    on(obj: Outlook.Folders, event: 'FolderAdd' | 'FolderChange', argNames: ['Folder'], handler: (this: Outlook.Folders, parameter: {readonly Folder: Outlook.Folder}) => void): void;
    on(obj: Outlook.FormRegion, event: 'Expanded', argNames: ['Expand'], handler: (this: Outlook.FormRegion, parameter: {readonly Expand: boolean}) => void): void;
    on(
        obj: Outlook.Inspector, event: 'BeforeMaximize' | 'BeforeMinimize' | 'BeforeMove' | 'BeforeSize', argNames: ['Cancel'], handler: (
            this: Outlook.Inspector, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.Inspector, event: 'PageChange', argNames: ['ActivePageName'], handler: (this: Outlook.Inspector, parameter: {readonly ActivePageName: string}) => void): void;
    on(obj: Outlook.Inspectors, event: 'NewInspector', argNames: ['Inspector'], handler: (this: Outlook.Inspectors, parameter: {readonly Inspector: Outlook.Inspector}) => void): void;
    on(obj: Outlook.Items, event: 'ItemAdd' | 'ItemChange', argNames: ['Item'], handler: (this: Outlook.Items, parameter: {readonly Item: any}) => void): void;
    on(
        obj: Outlook.JournalItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.JournalItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.JournalItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.JournalItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.JournalItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.JournalItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.JournalItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.JournalItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.JournalItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.JournalItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.JournalItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.JournalItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.JournalItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.JournalItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.JournalItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.JournalItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MailItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.MailItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.MailItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile',
        argNames: ['Attachment', 'Cancel'], handler: (this: Outlook.MailItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MailItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'], handler: (
            this: Outlook.MailItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.MailItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.MailItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MailItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.MailItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.MailItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.MailItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.MailItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.MailItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.MailItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (this: Outlook.MailItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MeetingItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.MeetingItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.MeetingItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.MeetingItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MeetingItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.MeetingItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.MeetingItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.MeetingItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MeetingItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.MeetingItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.MeetingItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.MeetingItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.MeetingItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.MeetingItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MeetingItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.MeetingItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MobileItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.MobileItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.MobileItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.MobileItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MobileItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.MobileItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.MobileItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.MobileItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.MobileItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.MobileItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.MobileItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.MobileItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.MobileItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.MobileItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.MobileItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (this: Outlook.MobileItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.NameSpace, event: 'OptionsPagesAdd', argNames: ['Pages', 'Folder'], handler: (
            this: Outlook.NameSpace, parameter: {readonly Pages: Outlook.PropertyPages, readonly Folder: Outlook.Folder}) => void): void;
    on(
        obj: Outlook.NavigationGroups, event: 'NavigationFolderAdd' | 'SelectedChange', argNames: ['NavigationFolder'], handler: (
            this: Outlook.NavigationGroups, parameter: {readonly NavigationFolder: Outlook.NavigationFolder}) => void): void;
    on(
        obj: Outlook.NavigationPane, event: 'ModuleSwitch', argNames: ['CurrentModule'], handler: (
            this: Outlook.NavigationPane, parameter: {readonly CurrentModule: Outlook.NavigationModule}) => void): void;
    on(
        obj: Outlook.OlkBusinessCardControl, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'],
        handler: (
            this: Outlook.OlkBusinessCardControl,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkCategory, event: 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkCategory, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkCategory, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkCategory, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkCategory, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkCategory, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkCategory, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkCategory,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkCheckBox, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkCheckBox, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkCheckBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkCheckBox, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkCheckBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkCheckBox, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkCheckBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkCheckBox,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkComboBox, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkComboBox, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkComboBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkComboBox, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkComboBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkComboBox, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkComboBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkComboBox,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkCommandButton, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkCommandButton, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkCommandButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkCommandButton, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkCommandButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkCommandButton, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkCommandButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkCommandButton,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkContactPhoto, event: 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkContactPhoto, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkContactPhoto, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkContactPhoto, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkContactPhoto, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkContactPhoto, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkContactPhoto, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkContactPhoto,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkDateControl, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkDateControl, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkDateControl, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkDateControl, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkDateControl, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkDateControl, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkDateControl, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkDateControl,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(
        obj: Outlook.OlkInfoBar, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkInfoBar,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(
        obj: Outlook.OlkLabel, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkLabel,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkListBox, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkListBox, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkListBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkListBox, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkListBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkListBox, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkListBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkListBox,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkOptionButton, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkOptionButton, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkOptionButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkOptionButton, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkOptionButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkOptionButton, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkOptionButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkOptionButton,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(
        obj: Outlook.OlkSenderPhoto, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkSenderPhoto,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkTextBox, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkTextBox, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkTextBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkTextBox, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkTextBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkTextBox, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkTextBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkTextBox,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkTimeControl, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkTimeControl, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkTimeControl, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkTimeControl, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkTimeControl, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkTimeControl, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkTimeControl, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkTimeControl,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OlkTimeZoneControl, event: 'BeforeUpdate' | 'Exit', argNames: ['Cancel'], handler: (this: Outlook.OlkTimeZoneControl, parameter: {readonly Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OlkTimeZoneControl, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Outlook.OlkTimeZoneControl, parameter: {readonly KeyCode: number, readonly Shift: Outlook.OlShiftState}) => void): void;
    on(obj: Outlook.OlkTimeZoneControl, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Outlook.OlkTimeZoneControl, parameter: {readonly KeyAscii: number}) => void): void;
    on(
        obj: Outlook.OlkTimeZoneControl, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Outlook.OlkTimeZoneControl,
            parameter: {readonly Button: Outlook.OlMouseButton, readonly Shift: Outlook.OlShiftState, readonly X: stdole.OLE_XPOS_CONTAINER, readonly Y: stdole.OLE_YPOS_CONTAINER}) => void): void;
    on(obj: Outlook.OutlookBarGroups, event: 'BeforeGroupAdd', argNames: ['Cancel'], handler: (this: Outlook.OutlookBarGroups, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OutlookBarGroups, event: 'BeforeGroupRemove', argNames: ['Group', 'Cancel'], handler: (
            this: Outlook.OutlookBarGroups, parameter: {readonly Group: Outlook.OutlookBarGroup, Cancel: boolean}) => void): void;
    on(obj: Outlook.OutlookBarGroups, event: 'GroupAdd', argNames: ['NewGroup'], handler: (this: Outlook.OutlookBarGroups, parameter: {readonly NewGroup: Outlook.OutlookBarGroup}) => void): void;
    on(
        obj: Outlook.OutlookBarPane, event: 'BeforeGroupSwitch', argNames: ['ToGroup', 'Cancel'], handler: (
            this: Outlook.OutlookBarPane, parameter: {readonly ToGroup: Outlook.OutlookBarGroup, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OutlookBarPane, event: 'BeforeNavigate', argNames: ['Shortcut', 'Cancel'], handler: (
            this: Outlook.OutlookBarPane, parameter: {readonly Shortcut: Outlook.OutlookBarShortcut, Cancel: boolean}) => void): void;
    on(obj: Outlook.OutlookBarShortcuts, event: 'BeforeShortcutAdd', argNames: ['Cancel'], handler: (this: Outlook.OutlookBarShortcuts, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OutlookBarShortcuts, event: 'BeforeShortcutRemove', argNames: ['Shortcut', 'Cancel'], handler: (
            this: Outlook.OutlookBarShortcuts, parameter: {readonly Shortcut: Outlook.OutlookBarShortcut, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.OutlookBarShortcuts, event: 'ShortcutAdd', argNames: ['NewShortcut'], handler: (
            this: Outlook.OutlookBarShortcuts, parameter: {readonly NewShortcut: Outlook.OutlookBarShortcut}) => void): void;
    on(
        obj: Outlook.PostItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.PostItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.PostItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile',
        argNames: ['Attachment', 'Cancel'], handler: (this: Outlook.PostItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.PostItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'], handler: (
            this: Outlook.PostItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.PostItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.PostItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.PostItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.PostItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.PostItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.PostItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.PostItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.PostItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.PostItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (this: Outlook.PostItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.Reminders, event: 'BeforeReminderShow', argNames: ['Cancel'], handler: (this: Outlook.Reminders, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Outlook.Reminders, event: 'ReminderAdd' | 'ReminderChange' | 'ReminderFire' | 'Snooze', argNames: ['ReminderObject'], handler: (
            this: Outlook.Reminders, parameter: {readonly ReminderObject: Outlook.Reminder}) => void): void;
    on(
        obj: Outlook.RemoteItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.RemoteItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.RemoteItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.RemoteItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.RemoteItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.RemoteItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.RemoteItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.RemoteItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.RemoteItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.RemoteItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.RemoteItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.RemoteItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.RemoteItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.RemoteItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.RemoteItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (this: Outlook.RemoteItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.ReportItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.ReportItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.ReportItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.ReportItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.ReportItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.ReportItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.ReportItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.ReportItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.ReportItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.ReportItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.ReportItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.ReportItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.ReportItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.ReportItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.ReportItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (this: Outlook.ReportItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.Results, event: 'ItemAdd' | 'ItemChange', argNames: ['Item'], handler: (this: Outlook.Results, parameter: {readonly Item: any}) => void): void;
    on(
        obj: Outlook.SharingItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.SharingItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.SharingItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.SharingItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.SharingItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.SharingItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.SharingItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.SharingItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.SharingItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.SharingItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.SharingItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.SharingItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.SharingItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.SharingItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.SharingItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.SharingItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.Stores, event: 'BeforeStoreRemove', argNames: ['Store', 'Cancel'], handler: (this: Outlook.Stores, parameter: {readonly Store: Outlook.Store, Cancel: boolean}) => void): void;
    on(obj: Outlook.Stores, event: 'StoreAdd', argNames: ['Store'], handler: (this: Outlook.Stores, parameter: {readonly Store: Outlook.Store}) => void): void;
    on(
        obj: Outlook.SyncObject, event: 'OnError', argNames: ['Code', 'Description'], handler: (
            this: Outlook.SyncObject, parameter: {readonly Code: number, readonly Description: string}) => void): void;
    on(
        obj: Outlook.SyncObject, event: 'Progress', argNames: ['State', 'Description', 'Value', 'Max'], handler: (
            this: Outlook.SyncObject, parameter: {readonly State: Outlook.OlSyncState, readonly Description: string, readonly Value: number, readonly Max: number}) => void): void;
    on(
        obj: Outlook.TaskItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.TaskItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.TaskItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile',
        argNames: ['Attachment', 'Cancel'], handler: (this: Outlook.TaskItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'], handler: (
            this: Outlook.TaskItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.TaskItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.TaskItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.TaskItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.TaskItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.TaskItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.TaskItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.TaskItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.TaskItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (this: Outlook.TaskItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestAcceptItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'],
        handler: (this: Outlook.TaskRequestAcceptItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.TaskRequestAcceptItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.TaskRequestAcceptItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestAcceptItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.TaskRequestAcceptItem, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestAcceptItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (
            this: Outlook.TaskRequestAcceptItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestAcceptItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.TaskRequestAcceptItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestAcceptItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (
            this: Outlook.TaskRequestAcceptItem, parameter: {readonly Name: string}) => void): void;
    on(
        obj: Outlook.TaskRequestAcceptItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (
            this: Outlook.TaskRequestAcceptItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestAcceptItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.TaskRequestAcceptItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestDeclineItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'],
        handler: (this: Outlook.TaskRequestDeclineItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.TaskRequestDeclineItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.TaskRequestDeclineItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestDeclineItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.TaskRequestDeclineItem, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestDeclineItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (
            this: Outlook.TaskRequestDeclineItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestDeclineItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.TaskRequestDeclineItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestDeclineItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (
            this: Outlook.TaskRequestDeclineItem, parameter: {readonly Name: string}) => void): void;
    on(
        obj: Outlook.TaskRequestDeclineItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (
            this: Outlook.TaskRequestDeclineItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestDeclineItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.TaskRequestDeclineItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'], handler: (
            this: Outlook.TaskRequestItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.TaskRequestItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.TaskRequestItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.TaskRequestItem, parameter: {Cancel: boolean}) => void): void;
    on(obj: Outlook.TaskRequestItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (this: Outlook.TaskRequestItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.TaskRequestItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.TaskRequestItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (this: Outlook.TaskRequestItem, parameter: {readonly Name: string}) => void): void;
    on(obj: Outlook.TaskRequestItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (this: Outlook.TaskRequestItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.TaskRequestItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestUpdateItem, event: 'AttachmentAdd' | 'AttachmentRead' | 'AttachmentRemove', argNames: ['Attachment'],
        handler: (this: Outlook.TaskRequestUpdateItem, parameter: {readonly Attachment: Outlook.Attachment}) => void): void;
    on(
        obj: Outlook.TaskRequestUpdateItem, event: 'BeforeAttachmentAdd' | 'BeforeAttachmentPreview' | 'BeforeAttachmentRead' | 'BeforeAttachmentSave' |
        'BeforeAttachmentWriteToTempFile', argNames: ['Attachment', 'Cancel'], handler: (
            this: Outlook.TaskRequestUpdateItem, parameter: {readonly Attachment: Outlook.Attachment, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestUpdateItem, event: 'BeforeAutoSave' | 'BeforeCheckNames' | 'Close' | 'Open' | 'Send' | 'Write', argNames: ['Cancel'],
        handler: (this: Outlook.TaskRequestUpdateItem, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestUpdateItem, event: 'BeforeDelete', argNames: ['Item', 'Cancel'], handler: (
            this: Outlook.TaskRequestUpdateItem, parameter: {readonly Item: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestUpdateItem, event: 'CustomAction', argNames: ['Action', 'Response', 'Cancel'], handler: (
            this: Outlook.TaskRequestUpdateItem, parameter: {readonly Action: any, readonly Response: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestUpdateItem, event: 'CustomPropertyChange' | 'PropertyChange', argNames: ['Name'], handler: (
            this: Outlook.TaskRequestUpdateItem, parameter: {readonly Name: string}) => void): void;
    on(
        obj: Outlook.TaskRequestUpdateItem, event: 'Forward', argNames: ['Forward', 'Cancel'], handler: (
            this: Outlook.TaskRequestUpdateItem, parameter: {readonly Forward: any, Cancel: boolean}) => void): void;
    on(
        obj: Outlook.TaskRequestUpdateItem, event: 'Reply' | 'ReplyAll', argNames: ['Response', 'Cancel'], handler: (
            this: Outlook.TaskRequestUpdateItem, parameter: {readonly Response: any, Cancel: boolean}) => void): void;
    on(obj: Outlook.Views, event: 'ViewAdd' | 'ViewRemove', argNames: ['View'], handler: (this: Outlook.Views, parameter: {readonly View: Outlook.View}) => void): void;
    on(obj: Outlook.Application, event: 'MAPILogonComplete' | 'NewMail' | 'Quit' | 'Startup', handler: (this: Outlook.Application, parameter: {}) => void): void;
    on(obj: Outlook.AppointmentItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.AppointmentItem, parameter: {}) => void): void;
    on(obj: Outlook.ContactItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.ContactItem, parameter: {}) => void): void;
    on(obj: Outlook.DistListItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.DistListItem, parameter: {}) => void): void;
    on(obj: Outlook.DocumentItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.DocumentItem, parameter: {}) => void): void;
    on(
        obj: Outlook.Explorer, event: 'Activate' | 'AttachmentSelectionChange' | 'Close' | 'Deactivate' | 'FolderSwitch' | 'SelectionChange' | 'ViewSwitch',
        handler: (this: Outlook.Explorer, parameter: {}) => void): void;
    on(obj: Outlook.Folders, event: 'FolderRemove', handler: (this: Outlook.Folders, parameter: {}) => void): void;
    on(obj: Outlook.FormRegion, event: 'Close', handler: (this: Outlook.FormRegion, parameter: {}) => void): void;
    on(obj: Outlook.Inspector, event: 'Activate' | 'AttachmentSelectionChange' | 'Close' | 'Deactivate', handler: (this: Outlook.Inspector, parameter: {}) => void): void;
    on(obj: Outlook.Items, event: 'ItemRemove', handler: (this: Outlook.Items, parameter: {}) => void): void;
    on(obj: Outlook.JournalItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.JournalItem, parameter: {}) => void): void;
    on(obj: Outlook.MailItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.MailItem, parameter: {}) => void): void;
    on(obj: Outlook.MeetingItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.MeetingItem, parameter: {}) => void): void;
    on(obj: Outlook.MobileItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.MobileItem, parameter: {}) => void): void;
    on(obj: Outlook.NameSpace, event: 'AutoDiscoverComplete', handler: (this: Outlook.NameSpace, parameter: {}) => void): void;
    on(obj: Outlook.NavigationGroups, event: 'NavigationFolderRemove', handler: (this: Outlook.NavigationGroups, parameter: {}) => void): void;
    on(obj: Outlook.OlkBusinessCardControl, event: 'Click' | 'DoubleClick', handler: (this: Outlook.OlkBusinessCardControl, parameter: {}) => void): void;
    on(obj: Outlook.OlkCategory, event: 'Change' | 'Click' | 'DoubleClick' | 'Enter', handler: (this: Outlook.OlkCategory, parameter: {}) => void): void;
    on(obj: Outlook.OlkCheckBox, event: 'AfterUpdate' | 'Change' | 'Click' | 'DoubleClick' | 'Enter', handler: (this: Outlook.OlkCheckBox, parameter: {}) => void): void;
    on(obj: Outlook.OlkComboBox, event: 'AfterUpdate' | 'Change' | 'Click' | 'DoubleClick' | 'DropButtonClick' | 'Enter', handler: (this: Outlook.OlkComboBox, parameter: {}) => void): void;
    on(obj: Outlook.OlkCommandButton, event: 'AfterUpdate' | 'Click' | 'DoubleClick' | 'Enter', handler: (this: Outlook.OlkCommandButton, parameter: {}) => void): void;
    on(obj: Outlook.OlkContactPhoto, event: 'Change' | 'Click' | 'DoubleClick' | 'Enter', handler: (this: Outlook.OlkContactPhoto, parameter: {}) => void): void;
    on(obj: Outlook.OlkDateControl, event: 'AfterUpdate' | 'Change' | 'Click' | 'DoubleClick' | 'DropButtonClick' | 'Enter', handler: (this: Outlook.OlkDateControl, parameter: {}) => void): void;
    on(obj: Outlook.OlkInfoBar, event: 'Click' | 'DoubleClick', handler: (this: Outlook.OlkInfoBar, parameter: {}) => void): void;
    on(obj: Outlook.OlkLabel, event: 'Click' | 'DoubleClick', handler: (this: Outlook.OlkLabel, parameter: {}) => void): void;
    on(obj: Outlook.OlkListBox, event: 'AfterUpdate' | 'Change' | 'Click' | 'DoubleClick' | 'Enter', handler: (this: Outlook.OlkListBox, parameter: {}) => void): void;
    on(obj: Outlook.OlkOptionButton, event: 'AfterUpdate' | 'Change' | 'Click' | 'DoubleClick' | 'Enter', handler: (this: Outlook.OlkOptionButton, parameter: {}) => void): void;
    on(obj: Outlook.OlkSenderPhoto, event: 'Change' | 'Click' | 'DoubleClick', handler: (this: Outlook.OlkSenderPhoto, parameter: {}) => void): void;
    on(obj: Outlook.OlkTextBox, event: 'AfterUpdate' | 'Change' | 'Click' | 'DoubleClick' | 'Enter', handler: (this: Outlook.OlkTextBox, parameter: {}) => void): void;
    on(obj: Outlook.OlkTimeControl, event: 'AfterUpdate' | 'Change' | 'Click' | 'DoubleClick' | 'DropButtonClick' | 'Enter', handler: (this: Outlook.OlkTimeControl, parameter: {}) => void): void;
    on(
        obj: Outlook.OlkTimeZoneControl, event: 'AfterUpdate' | 'Change' | 'Click' | 'DoubleClick' | 'DropButtonClick' | 'Enter',
        handler: (this: Outlook.OlkTimeZoneControl, parameter: {}) => void): void;
    on(obj: Outlook.PostItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.PostItem, parameter: {}) => void): void;
    on(obj: Outlook.Reminders, event: 'ReminderRemove', handler: (this: Outlook.Reminders, parameter: {}) => void): void;
    on(obj: Outlook.RemoteItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.RemoteItem, parameter: {}) => void): void;
    on(obj: Outlook.ReportItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.ReportItem, parameter: {}) => void): void;
    on(obj: Outlook.Results, event: 'ItemRemove', handler: (this: Outlook.Results, parameter: {}) => void): void;
    on(obj: Outlook.SharingItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.SharingItem, parameter: {}) => void): void;
    on(obj: Outlook.SyncObject, event: 'SyncEnd' | 'SyncStart', handler: (this: Outlook.SyncObject, parameter: {}) => void): void;
    on(obj: Outlook.TaskItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.TaskItem, parameter: {}) => void): void;
    on(obj: Outlook.TaskRequestAcceptItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.TaskRequestAcceptItem, parameter: {}) => void): void;
    on(obj: Outlook.TaskRequestDeclineItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.TaskRequestDeclineItem, parameter: {}) => void): void;
    on(obj: Outlook.TaskRequestItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.TaskRequestItem, parameter: {}) => void): void;
    on(obj: Outlook.TaskRequestUpdateItem, event: 'AfterWrite' | 'BeforeRead' | 'Read' | 'Unload', handler: (this: Outlook.TaskRequestUpdateItem, parameter: {}) => void): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'DOCSITE.DocSiteControl': Outlook._DocSiteControl;
    'Outlook.Application': Outlook.Application;
    'Outlook.OlkBusinessCardControl': Outlook.OlkBusinessCardControl;
    'Outlook.OlkCategoryStrip': Outlook.OlkCategory;
    'Outlook.OlkCheckBox': Outlook.OlkCheckBox;
    'Outlook.OlkComboBox': Outlook.OlkComboBox;
    'Outlook.OlkCommandButton': Outlook.OlkCommandButton;
    'Outlook.OlkContactPhoto': Outlook.OlkContactPhoto;
    'Outlook.OlkDateControl': Outlook.OlkDateControl;
    'Outlook.OlkFrameHeader': Outlook.OlkFrameHeader;
    'Outlook.OlkInfoBar': Outlook.OlkInfoBar;
    'Outlook.OlkLabel': Outlook.OlkLabel;
    'Outlook.OlkListBox': Outlook.OlkListBox;
    'Outlook.OlkOptionButton': Outlook.OlkOptionButton;
    'Outlook.OlkPageControl': Outlook.OlkPageControl;
    'Outlook.OlkSenderPhoto': Outlook.OlkSenderPhoto;
    'Outlook.OlkTextBox': Outlook.OlkTextBox;
    'Outlook.OlkTimeControl': Outlook.OlkTimeControl;
    'Outlook.OlkTimeZone': Outlook.OlkTimeZoneControl;
    'RECIP.RecipCtl': Outlook._RecipientControl;
}

interface EnumeratorConstructor {
    new(col: Outlook.ItemProperties): Enumerator<Outlook.ItemProperty>;
    new(col: Outlook.Reminders): Enumerator<Outlook.Reminder>;
    new(col: Outlook.Views): Enumerator<Outlook.View>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
