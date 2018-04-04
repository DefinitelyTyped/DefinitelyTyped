// Type definitions for Microsoft Office 14.0 Object Library - Office 14.0
// Project: https://msdn.microsoft.com/VBA/Office-Shared-VBA/articles/office-vba-object-library-reference
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="activex-stdole" />

declare namespace Office {
    type MsoRGBType = number;

    const enum BackstageGroupStyle {
        BackstageGroupStyleError = 2,
        BackstageGroupStyleNormal = 0,
        BackstageGroupStyleWarning = 1,
    }

    const enum CertificateDetail {
        certdetAvailable = 0,
        certdetExpirationDate = 3,
        certdetIssuer = 2,
        certdetSubject = 1,
        certdetThumbprint = 4,
    }

    const enum CertificateVerificationResults {
        certverresError = 0,
        certverresExpired = 5,
        certverresInvalid = 4,
        certverresRevoked = 6,
        certverresUntrusted = 7,
        certverresUnverified = 2,
        certverresValid = 3,
        certverresVerifying = 1,
    }

    const enum ContentVerificationResults {
        contverresError = 0,
        contverresModified = 4,
        contverresUnverified = 2,
        contverresValid = 3,
        contverresVerifying = 1,
    }

    const enum DocProperties {
        offPropertyTypeBoolean = 2,
        offPropertyTypeDate = 3,
        offPropertyTypeFloat = 5,
        offPropertyTypeNumber = 1,
        offPropertyTypeString = 4,
    }

    const enum EncryptionCipherMode {
        cipherModeCBC = 1,
        cipherModeECB = 0,
    }

    const enum EncryptionProviderDetail {
        encprovdetAlgorithm = 1,
        encprovdetBlockCipher = 2,
        encprovdetCipherBlockSize = 3,
        encprovdetCipherMode = 4,
        encprovdetUrl = 0,
    }

    const enum MailFormat {
        mfHTML = 2,
        mfPlainText = 1,
        mfRTF = 3,
    }

    const enum MsoAlertButtonType {
        msoAlertButtonAbortRetryIgnore = 2,
        msoAlertButtonOK = 0,
        msoAlertButtonOKCancel = 1,
        msoAlertButtonRetryCancel = 5,
        msoAlertButtonYesAllNoCancel = 6,
        msoAlertButtonYesNo = 4,
        msoAlertButtonYesNoCancel = 3,
    }

    const enum MsoAlertCancelType {
        msoAlertCancelDefault = -1,
        msoAlertCancelFifth = 4,
        msoAlertCancelFirst = 0,
        msoAlertCancelFourth = 3,
        msoAlertCancelSecond = 1,
        msoAlertCancelThird = 2,
    }

    const enum MsoAlertDefaultType {
        msoAlertDefaultFifth = 4,
        msoAlertDefaultFirst = 0,
        msoAlertDefaultFourth = 3,
        msoAlertDefaultSecond = 1,
        msoAlertDefaultThird = 2,
    }

    const enum MsoAlertIconType {
        msoAlertIconCritical = 1,
        msoAlertIconInfo = 4,
        msoAlertIconNoIcon = 0,
        msoAlertIconQuery = 2,
        msoAlertIconWarning = 3,
    }

    const enum MsoAlignCmd {
        msoAlignBottoms = 5,
        msoAlignCenters = 1,
        msoAlignLefts = 0,
        msoAlignMiddles = 4,
        msoAlignRights = 2,
        msoAlignTops = 3,
    }

    const enum MsoAnimationType {
        msoAnimationAppear = 32,
        msoAnimationBeginSpeaking = 4,
        msoAnimationCharacterSuccessMajor = 6,
        msoAnimationCheckingSomething = 103,
        msoAnimationDisappear = 31,
        msoAnimationEmptyTrash = 116,
        msoAnimationGestureDown = 113,
        msoAnimationGestureLeft = 114,
        msoAnimationGestureRight = 19,
        msoAnimationGestureUp = 115,
        msoAnimationGetArtsy = 100,
        msoAnimationGetAttentionMajor = 11,
        msoAnimationGetAttentionMinor = 12,
        msoAnimationGetTechy = 101,
        msoAnimationGetWizardy = 102,
        msoAnimationGoodbye = 3,
        msoAnimationGreeting = 2,
        msoAnimationIdle = 1,
        msoAnimationListensToComputer = 26,
        msoAnimationLookDown = 104,
        msoAnimationLookDownLeft = 105,
        msoAnimationLookDownRight = 106,
        msoAnimationLookLeft = 107,
        msoAnimationLookRight = 108,
        msoAnimationLookUp = 109,
        msoAnimationLookUpLeft = 110,
        msoAnimationLookUpRight = 111,
        msoAnimationPrinting = 18,
        msoAnimationRestPose = 5,
        msoAnimationSaving = 112,
        msoAnimationSearching = 13,
        msoAnimationSendingMail = 25,
        msoAnimationThinking = 24,
        msoAnimationWorkingAtSomething = 23,
        msoAnimationWritingNotingSomething = 22,
    }

    const enum MsoAppLanguageID {
        msoLanguageIDExeMode = 4,
        msoLanguageIDHelp = 3,
        msoLanguageIDInstall = 1,
        msoLanguageIDUI = 2,
        msoLanguageIDUIPrevious = 5,
    }

    const enum MsoArrowheadLength {
        msoArrowheadLengthMedium = 2,
        msoArrowheadLengthMixed = -2,
        msoArrowheadLong = 3,
        msoArrowheadShort = 1,
    }

    const enum MsoArrowheadStyle {
        msoArrowheadDiamond = 5,
        msoArrowheadNone = 1,
        msoArrowheadOpen = 3,
        msoArrowheadOval = 6,
        msoArrowheadStealth = 4,
        msoArrowheadStyleMixed = -2,
        msoArrowheadTriangle = 2,
    }

    const enum MsoArrowheadWidth {
        msoArrowheadNarrow = 1,
        msoArrowheadWide = 3,
        msoArrowheadWidthMedium = 2,
        msoArrowheadWidthMixed = -2,
    }

    const enum MsoAutomationSecurity {
        msoAutomationSecurityByUI = 2,
        msoAutomationSecurityForceDisable = 3,
        msoAutomationSecurityLow = 1,
    }

    const enum MsoAutoShapeType {
        msoShape10pointStar = 149,
        msoShape12pointStar = 150,
        msoShape16pointStar = 94,
        msoShape24pointStar = 95,
        msoShape32pointStar = 96,
        msoShape4pointStar = 91,
        msoShape5pointStar = 92,
        msoShape6pointStar = 147,
        msoShape7pointStar = 148,
        msoShape8pointStar = 93,
        msoShapeActionButtonBackorPrevious = 129,
        msoShapeActionButtonBeginning = 131,
        msoShapeActionButtonCustom = 125,
        msoShapeActionButtonDocument = 134,
        msoShapeActionButtonEnd = 132,
        msoShapeActionButtonForwardorNext = 130,
        msoShapeActionButtonHelp = 127,
        msoShapeActionButtonHome = 126,
        msoShapeActionButtonInformation = 128,
        msoShapeActionButtonMovie = 136,
        msoShapeActionButtonReturn = 133,
        msoShapeActionButtonSound = 135,
        msoShapeArc = 25,
        msoShapeBalloon = 137,
        msoShapeBentArrow = 41,
        msoShapeBentUpArrow = 44,
        msoShapeBevel = 15,
        msoShapeBlockArc = 20,
        msoShapeCan = 13,
        msoShapeChartPlus = 182,
        msoShapeChartStar = 181,
        msoShapeChartX = 180,
        msoShapeChevron = 52,
        msoShapeChord = 161,
        msoShapeCircularArrow = 60,
        msoShapeCloud = 179,
        msoShapeCloudCallout = 108,
        msoShapeCorner = 162,
        msoShapeCornerTabs = 169,
        msoShapeCross = 11,
        msoShapeCube = 14,
        msoShapeCurvedDownArrow = 48,
        msoShapeCurvedDownRibbon = 100,
        msoShapeCurvedLeftArrow = 46,
        msoShapeCurvedRightArrow = 45,
        msoShapeCurvedUpArrow = 47,
        msoShapeCurvedUpRibbon = 99,
        msoShapeDecagon = 144,
        msoShapeDiagonalStripe = 141,
        msoShapeDiamond = 4,
        msoShapeDodecagon = 146,
        msoShapeDonut = 18,
        msoShapeDoubleBrace = 27,
        msoShapeDoubleBracket = 26,
        msoShapeDoubleWave = 104,
        msoShapeDownArrow = 36,
        msoShapeDownArrowCallout = 56,
        msoShapeDownRibbon = 98,
        msoShapeExplosion1 = 89,
        msoShapeExplosion2 = 90,
        msoShapeFlowchartAlternateProcess = 62,
        msoShapeFlowchartCard = 75,
        msoShapeFlowchartCollate = 79,
        msoShapeFlowchartConnector = 73,
        msoShapeFlowchartData = 64,
        msoShapeFlowchartDecision = 63,
        msoShapeFlowchartDelay = 84,
        msoShapeFlowchartDirectAccessStorage = 87,
        msoShapeFlowchartDisplay = 88,
        msoShapeFlowchartDocument = 67,
        msoShapeFlowchartExtract = 81,
        msoShapeFlowchartInternalStorage = 66,
        msoShapeFlowchartMagneticDisk = 86,
        msoShapeFlowchartManualInput = 71,
        msoShapeFlowchartManualOperation = 72,
        msoShapeFlowchartMerge = 82,
        msoShapeFlowchartMultidocument = 68,
        msoShapeFlowchartOfflineStorage = 139,
        msoShapeFlowchartOffpageConnector = 74,
        msoShapeFlowchartOr = 78,
        msoShapeFlowchartPredefinedProcess = 65,
        msoShapeFlowchartPreparation = 70,
        msoShapeFlowchartProcess = 61,
        msoShapeFlowchartPunchedTape = 76,
        msoShapeFlowchartSequentialAccessStorage = 85,
        msoShapeFlowchartSort = 80,
        msoShapeFlowchartStoredData = 83,
        msoShapeFlowchartSummingJunction = 77,
        msoShapeFlowchartTerminator = 69,
        msoShapeFoldedCorner = 16,
        msoShapeFrame = 158,
        msoShapeFunnel = 174,
        msoShapeGear6 = 172,
        msoShapeGear9 = 173,
        msoShapeHalfFrame = 159,
        msoShapeHeart = 21,
        msoShapeHeptagon = 145,
        msoShapeHexagon = 10,
        msoShapeHorizontalScroll = 102,
        msoShapeIsoscelesTriangle = 7,
        msoShapeLeftArrow = 34,
        msoShapeLeftArrowCallout = 54,
        msoShapeLeftBrace = 31,
        msoShapeLeftBracket = 29,
        msoShapeLeftCircularArrow = 176,
        msoShapeLeftRightArrow = 37,
        msoShapeLeftRightArrowCallout = 57,
        msoShapeLeftRightCircularArrow = 177,
        msoShapeLeftRightRibbon = 140,
        msoShapeLeftRightUpArrow = 40,
        msoShapeLeftUpArrow = 43,
        msoShapeLightningBolt = 22,
        msoShapeLineCallout1 = 109,
        msoShapeLineCallout1AccentBar = 113,
        msoShapeLineCallout1BorderandAccentBar = 121,
        msoShapeLineCallout1NoBorder = 117,
        msoShapeLineCallout2 = 110,
        msoShapeLineCallout2AccentBar = 114,
        msoShapeLineCallout2BorderandAccentBar = 122,
        msoShapeLineCallout2NoBorder = 118,
        msoShapeLineCallout3 = 111,
        msoShapeLineCallout3AccentBar = 115,
        msoShapeLineCallout3BorderandAccentBar = 123,
        msoShapeLineCallout3NoBorder = 119,
        msoShapeLineCallout4 = 112,
        msoShapeLineCallout4AccentBar = 116,
        msoShapeLineCallout4BorderandAccentBar = 124,
        msoShapeLineCallout4NoBorder = 120,
        msoShapeLineInverse = 183,
        msoShapeMathDivide = 166,
        msoShapeMathEqual = 167,
        msoShapeMathMinus = 164,
        msoShapeMathMultiply = 165,
        msoShapeMathNotEqual = 168,
        msoShapeMathPlus = 163,
        msoShapeMixed = -2,
        msoShapeMoon = 24,
        msoShapeNonIsoscelesTrapezoid = 143,
        msoShapeNoSymbol = 19,
        msoShapeNotchedRightArrow = 50,
        msoShapeNotPrimitive = 138,
        msoShapeOctagon = 6,
        msoShapeOval = 9,
        msoShapeOvalCallout = 107,
        msoShapeParallelogram = 2,
        msoShapePentagon = 51,
        msoShapePie = 142,
        msoShapePieWedge = 175,
        msoShapePlaque = 28,
        msoShapePlaqueTabs = 171,
        msoShapeQuadArrow = 39,
        msoShapeQuadArrowCallout = 59,
        msoShapeRectangle = 1,
        msoShapeRectangularCallout = 105,
        msoShapeRegularPentagon = 12,
        msoShapeRightArrow = 33,
        msoShapeRightArrowCallout = 53,
        msoShapeRightBrace = 32,
        msoShapeRightBracket = 30,
        msoShapeRightTriangle = 8,
        msoShapeRound1Rectangle = 151,
        msoShapeRound2DiagRectangle = 153,
        msoShapeRound2SameRectangle = 152,
        msoShapeRoundedRectangle = 5,
        msoShapeRoundedRectangularCallout = 106,
        msoShapeSmileyFace = 17,
        msoShapeSnip1Rectangle = 155,
        msoShapeSnip2DiagRectangle = 157,
        msoShapeSnip2SameRectangle = 156,
        msoShapeSnipRoundRectangle = 154,
        msoShapeSquareTabs = 170,
        msoShapeStripedRightArrow = 49,
        msoShapeSun = 23,
        msoShapeSwooshArrow = 178,
        msoShapeTear = 160,
        msoShapeTrapezoid = 3,
        msoShapeUpArrow = 35,
        msoShapeUpArrowCallout = 55,
        msoShapeUpDownArrow = 38,
        msoShapeUpDownArrowCallout = 58,
        msoShapeUpRibbon = 97,
        msoShapeUTurnArrow = 42,
        msoShapeVerticalScroll = 101,
        msoShapeWave = 103,
    }

    const enum MsoAutoSize {
        msoAutoSizeMixed = -2,
        msoAutoSizeNone = 0,
        msoAutoSizeShapeToFitText = 1,
        msoAutoSizeTextToFitShape = 2,
    }

    const enum MsoBackgroundStyleIndex {
        msoBackgroundStyleMixed = -2,
        msoBackgroundStyleNotAPreset = 0,
        msoBackgroundStylePreset1 = 1,
        msoBackgroundStylePreset10 = 10,
        msoBackgroundStylePreset11 = 11,
        msoBackgroundStylePreset12 = 12,
        msoBackgroundStylePreset2 = 2,
        msoBackgroundStylePreset3 = 3,
        msoBackgroundStylePreset4 = 4,
        msoBackgroundStylePreset5 = 5,
        msoBackgroundStylePreset6 = 6,
        msoBackgroundStylePreset7 = 7,
        msoBackgroundStylePreset8 = 8,
        msoBackgroundStylePreset9 = 9,
    }

    const enum MsoBalloonButtonType {
        msoBalloonButtonAbort = -8,
        msoBalloonButtonBack = -5,
        msoBalloonButtonCancel = -2,
        msoBalloonButtonClose = -12,
        msoBalloonButtonIgnore = -9,
        msoBalloonButtonNext = -6,
        msoBalloonButtonNo = -4,
        msoBalloonButtonNull = 0,
        msoBalloonButtonOK = -1,
        msoBalloonButtonOptions = -14,
        msoBalloonButtonRetry = -7,
        msoBalloonButtonSearch = -10,
        msoBalloonButtonSnooze = -11,
        msoBalloonButtonTips = -13,
        msoBalloonButtonYes = -3,
        msoBalloonButtonYesToAll = -15,
    }

    const enum MsoBalloonErrorType {
        msoBalloonErrorBadCharacter = 8,
        msoBalloonErrorBadPictureRef = 4,
        msoBalloonErrorBadReference = 5,
        msoBalloonErrorButtonlessModal = 6,
        msoBalloonErrorButtonModeless = 7,
        msoBalloonErrorCharNotTopmostForModal = 10,
        msoBalloonErrorCOMFailure = 9,
        msoBalloonErrorNone = 0,
        msoBalloonErrorOther = 1,
        msoBalloonErrorOutOfMemory = 3,
        msoBalloonErrorTooBig = 2,
        msoBalloonErrorTooManyControls = 11,
    }

    const enum MsoBalloonType {
        msoBalloonTypeBullets = 1,
        msoBalloonTypeButtons = 0,
        msoBalloonTypeNumbers = 2,
    }

    const enum MsoBarPosition {
        msoBarBottom = 3,
        msoBarFloating = 4,
        msoBarLeft = 0,
        msoBarMenuBar = 6,
        msoBarPopup = 5,
        msoBarRight = 2,
        msoBarTop = 1,
    }

    const enum MsoBarProtection {
        msoBarNoChangeDock = 16,
        msoBarNoChangeVisible = 8,
        msoBarNoCustomize = 1,
        msoBarNoHorizontalDock = 64,
        msoBarNoMove = 4,
        msoBarNoProtection = 0,
        msoBarNoResize = 2,
        msoBarNoVerticalDock = 32,
    }

    const enum MsoBarRow {
        msoBarRowFirst = 0,
        msoBarRowLast = -1,
    }

    const enum MsoBarType {
        msoBarTypeMenuBar = 1,
        msoBarTypeNormal = 0,
        msoBarTypePopup = 2,
    }

    const enum MsoBaselineAlignment {
        msoBaselineAlignAuto = 5,
        msoBaselineAlignBaseline = 1,
        msoBaselineAlignCenter = 3,
        msoBaselineAlignFarEast50 = 4,
        msoBaselineAlignMixed = -2,
        msoBaselineAlignTop = 2,
    }

    const enum MsoBevelType {
        msoBevelAngle = 6,
        msoBevelArtDeco = 13,
        msoBevelCircle = 3,
        msoBevelConvex = 8,
        msoBevelCoolSlant = 9,
        msoBevelCross = 5,
        msoBevelDivot = 10,
        msoBevelHardEdge = 12,
        msoBevelNone = 1,
        msoBevelRelaxedInset = 2,
        msoBevelRiblet = 11,
        msoBevelSlope = 4,
        msoBevelSoftRound = 7,
        msoBevelTypeMixed = -2,
    }

    const enum MsoBlackWhiteMode {
        msoBlackWhiteAutomatic = 1,
        msoBlackWhiteBlack = 8,
        msoBlackWhiteBlackTextAndLine = 6,
        msoBlackWhiteDontShow = 10,
        msoBlackWhiteGrayOutline = 5,
        msoBlackWhiteGrayScale = 2,
        msoBlackWhiteHighContrast = 7,
        msoBlackWhiteInverseGrayScale = 4,
        msoBlackWhiteLightGrayScale = 3,
        msoBlackWhiteMixed = -2,
        msoBlackWhiteWhite = 9,
    }

    const enum MsoBlogCategorySupport {
        msoBlogMultipleCategories = 2,
        msoBlogNoCategories = 0,
        msoBlogOneCategory = 1,
    }

    const enum MsoBlogImageType {
        msoblogImageTypeGIF = 2,
        msoblogImageTypeJPEG = 1,
        msoblogImageTypePNG = 3,
    }

    const enum MsoBulletType {
        msoBulletMixed = -2,
        msoBulletNone = 0,
        msoBulletNumbered = 2,
        msoBulletPicture = 3,
        msoBulletUnnumbered = 1,
    }

    const enum MsoButtonSetType {
        msoButtonSetAbortRetryIgnore = 10,
        msoButtonSetBackClose = 6,
        msoButtonSetBackNextClose = 8,
        msoButtonSetBackNextSnooze = 12,
        msoButtonSetCancel = 2,
        msoButtonSetNextClose = 7,
        msoButtonSetNone = 0,
        msoButtonSetOK = 1,
        msoButtonSetOkCancel = 3,
        msoButtonSetRetryCancel = 9,
        msoButtonSetSearchClose = 11,
        msoButtonSetTipsOptionsClose = 13,
        msoButtonSetYesAllNoCancel = 14,
        msoButtonSetYesNo = 4,
        msoButtonSetYesNoCancel = 5,
    }

    const enum MsoButtonState {
        msoButtonDown = -1,
        msoButtonMixed = 2,
        msoButtonUp = 0,
    }

    const enum MsoButtonStyle {
        msoButtonAutomatic = 0,
        msoButtonCaption = 2,
        msoButtonIcon = 1,
        msoButtonIconAndCaption = 3,
        msoButtonIconAndCaptionBelow = 11,
        msoButtonIconAndWrapCaption = 7,
        msoButtonIconAndWrapCaptionBelow = 15,
        msoButtonWrapCaption = 14,
    }

    const enum MsoButtonStyleHidden {
        msoButtonTextBelow = 8,
        msoButtonWrapText = 4,
    }

    const enum MsoCalloutAngleType {
        msoCalloutAngle30 = 2,
        msoCalloutAngle45 = 3,
        msoCalloutAngle60 = 4,
        msoCalloutAngle90 = 5,
        msoCalloutAngleAutomatic = 1,
        msoCalloutAngleMixed = -2,
    }

    const enum MsoCalloutDropType {
        msoCalloutDropBottom = 4,
        msoCalloutDropCenter = 3,
        msoCalloutDropCustom = 1,
        msoCalloutDropMixed = -2,
        msoCalloutDropTop = 2,
    }

    const enum MsoCalloutType {
        msoCalloutFour = 4,
        msoCalloutMixed = -2,
        msoCalloutOne = 1,
        msoCalloutThree = 3,
        msoCalloutTwo = 2,
    }

    const enum MsoCharacterSet {
        msoCharacterSetArabic = 1,
        msoCharacterSetCyrillic = 2,
        msoCharacterSetEnglishWesternEuropeanOtherLatinScript = 3,
        msoCharacterSetGreek = 4,
        msoCharacterSetHebrew = 5,
        msoCharacterSetJapanese = 6,
        msoCharacterSetKorean = 7,
        msoCharacterSetMultilingualUnicode = 8,
        msoCharacterSetSimplifiedChinese = 9,
        msoCharacterSetThai = 10,
        msoCharacterSetTraditionalChinese = 11,
        msoCharacterSetVietnamese = 12,
    }

    const enum MsoChartElementType {
        msoElementChartFloorNone = 1200,
        msoElementChartFloorShow = 1201,
        msoElementChartTitleAboveChart = 2,
        msoElementChartTitleCenteredOverlay = 1,
        msoElementChartTitleNone = 0,
        msoElementChartWallNone = 1100,
        msoElementChartWallShow = 1101,
        msoElementDataLabelBestFit = 210,
        msoElementDataLabelBottom = 209,
        msoElementDataLabelCenter = 202,
        msoElementDataLabelInsideBase = 204,
        msoElementDataLabelInsideEnd = 203,
        msoElementDataLabelLeft = 206,
        msoElementDataLabelNone = 200,
        msoElementDataLabelOutSideEnd = 205,
        msoElementDataLabelRight = 207,
        msoElementDataLabelShow = 201,
        msoElementDataLabelTop = 208,
        msoElementDataTableNone = 500,
        msoElementDataTableShow = 501,
        msoElementDataTableWithLegendKeys = 502,
        msoElementErrorBarNone = 700,
        msoElementErrorBarPercentage = 702,
        msoElementErrorBarStandardDeviation = 703,
        msoElementErrorBarStandardError = 701,
        msoElementLegendBottom = 104,
        msoElementLegendLeft = 103,
        msoElementLegendLeftOverlay = 106,
        msoElementLegendNone = 100,
        msoElementLegendRight = 101,
        msoElementLegendRightOverlay = 105,
        msoElementLegendTop = 102,
        msoElementLineDropHiLoLine = 804,
        msoElementLineDropLine = 801,
        msoElementLineHiLoLine = 802,
        msoElementLineNone = 800,
        msoElementLineSeriesLine = 803,
        msoElementPlotAreaNone = 1000,
        msoElementPlotAreaShow = 1001,
        msoElementPrimaryCategoryAxisBillions = 374,
        msoElementPrimaryCategoryAxisLogScale = 375,
        msoElementPrimaryCategoryAxisMillions = 373,
        msoElementPrimaryCategoryAxisNone = 348,
        msoElementPrimaryCategoryAxisReverse = 351,
        msoElementPrimaryCategoryAxisShow = 349,
        msoElementPrimaryCategoryAxisThousands = 372,
        msoElementPrimaryCategoryAxisTitleAdjacentToAxis = 301,
        msoElementPrimaryCategoryAxisTitleBelowAxis = 302,
        msoElementPrimaryCategoryAxisTitleHorizontal = 305,
        msoElementPrimaryCategoryAxisTitleNone = 300,
        msoElementPrimaryCategoryAxisTitleRotated = 303,
        msoElementPrimaryCategoryAxisTitleVertical = 304,
        msoElementPrimaryCategoryAxisWithoutLabels = 350,
        msoElementPrimaryCategoryGridLinesMajor = 334,
        msoElementPrimaryCategoryGridLinesMinor = 333,
        msoElementPrimaryCategoryGridLinesMinorMajor = 335,
        msoElementPrimaryCategoryGridLinesNone = 332,
        msoElementPrimaryValueAxisBillions = 356,
        msoElementPrimaryValueAxisLogScale = 357,
        msoElementPrimaryValueAxisMillions = 355,
        msoElementPrimaryValueAxisNone = 352,
        msoElementPrimaryValueAxisShow = 353,
        msoElementPrimaryValueAxisThousands = 354,
        msoElementPrimaryValueAxisTitleAdjacentToAxis = 306,
        msoElementPrimaryValueAxisTitleBelowAxis = 308,
        msoElementPrimaryValueAxisTitleHorizontal = 311,
        msoElementPrimaryValueAxisTitleNone = 306,
        msoElementPrimaryValueAxisTitleRotated = 309,
        msoElementPrimaryValueAxisTitleVertical = 310,
        msoElementPrimaryValueGridLinesMajor = 330,
        msoElementPrimaryValueGridLinesMinor = 329,
        msoElementPrimaryValueGridLinesMinorMajor = 331,
        msoElementPrimaryValueGridLinesNone = 328,
        msoElementSecondaryCategoryAxisBillions = 378,
        msoElementSecondaryCategoryAxisLogScale = 379,
        msoElementSecondaryCategoryAxisMillions = 377,
        msoElementSecondaryCategoryAxisNone = 358,
        msoElementSecondaryCategoryAxisReverse = 361,
        msoElementSecondaryCategoryAxisShow = 359,
        msoElementSecondaryCategoryAxisThousands = 376,
        msoElementSecondaryCategoryAxisTitleAdjacentToAxis = 313,
        msoElementSecondaryCategoryAxisTitleBelowAxis = 314,
        msoElementSecondaryCategoryAxisTitleHorizontal = 317,
        msoElementSecondaryCategoryAxisTitleNone = 312,
        msoElementSecondaryCategoryAxisTitleRotated = 315,
        msoElementSecondaryCategoryAxisTitleVertical = 316,
        msoElementSecondaryCategoryAxisWithoutLabels = 360,
        msoElementSecondaryCategoryGridLinesMajor = 342,
        msoElementSecondaryCategoryGridLinesMinor = 341,
        msoElementSecondaryCategoryGridLinesMinorMajor = 343,
        msoElementSecondaryCategoryGridLinesNone = 340,
        msoElementSecondaryValueAxisBillions = 366,
        msoElementSecondaryValueAxisLogScale = 367,
        msoElementSecondaryValueAxisMillions = 365,
        msoElementSecondaryValueAxisNone = 362,
        msoElementSecondaryValueAxisShow = 363,
        msoElementSecondaryValueAxisThousands = 364,
        msoElementSecondaryValueAxisTitleAdjacentToAxis = 319,
        msoElementSecondaryValueAxisTitleBelowAxis = 320,
        msoElementSecondaryValueAxisTitleHorizontal = 323,
        msoElementSecondaryValueAxisTitleNone = 318,
        msoElementSecondaryValueAxisTitleRotated = 321,
        msoElementSecondaryValueAxisTitleVertical = 322,
        msoElementSecondaryValueGridLinesMajor = 338,
        msoElementSecondaryValueGridLinesMinor = 337,
        msoElementSecondaryValueGridLinesMinorMajor = 339,
        msoElementSecondaryValueGridLinesNone = 336,
        msoElementSeriesAxisGridLinesMajor = 346,
        msoElementSeriesAxisGridLinesMinor = 345,
        msoElementSeriesAxisGridLinesMinorMajor = 347,
        msoElementSeriesAxisGridLinesNone = 344,
        msoElementSeriesAxisNone = 368,
        msoElementSeriesAxisReverse = 371,
        msoElementSeriesAxisShow = 369,
        msoElementSeriesAxisTitleHorizontal = 327,
        msoElementSeriesAxisTitleNone = 324,
        msoElementSeriesAxisTitleRotated = 325,
        msoElementSeriesAxisTitleVertical = 326,
        msoElementSeriesAxisWithoutLabeling = 370,
        msoElementTrendlineAddExponential = 602,
        msoElementTrendlineAddLinear = 601,
        msoElementTrendlineAddLinearForecast = 603,
        msoElementTrendlineAddTwoPeriodMovingAverage = 604,
        msoElementTrendlineNone = 600,
        msoElementUpDownBarsNone = 900,
        msoElementUpDownBarsShow = 901,
    }

    const enum MsoClipboardFormat {
        msoClipboardFormatHTML = 2,
        msoClipboardFormatMixed = -2,
        msoClipboardFormatNative = 1,
        msoClipboardFormatPlainText = 4,
        msoClipboardFormatRTF = 3,
    }

    const enum MsoColorType {
        msoColorTypeCMS = 4,
        msoColorTypeCMYK = 3,
        msoColorTypeInk = 5,
        msoColorTypeMixed = -2,
        msoColorTypeRGB = 1,
        msoColorTypeScheme = 2,
    }

    const enum MsoComboStyle {
        msoComboLabel = 1,
        msoComboNormal = 0,
    }

    const enum MsoCommandBarButtonHyperlinkType {
        msoCommandBarButtonHyperlinkInsertPicture = 2,
        msoCommandBarButtonHyperlinkNone = 0,
        msoCommandBarButtonHyperlinkOpen = 1,
    }

    const enum MsoCondition {
        msoConditionAnyNumberBetween = 34,
        msoConditionAnytime = 25,
        msoConditionAnytimeBetween = 26,
        msoConditionAtLeast = 36,
        msoConditionAtMost = 35,
        msoConditionBeginsWith = 11,
        msoConditionDoesNotEqual = 33,
        msoConditionEndsWith = 12,
        msoConditionEquals = 32,
        msoConditionEqualsCompleted = 66,
        msoConditionEqualsDeferred = 68,
        msoConditionEqualsHigh = 60,
        msoConditionEqualsInProgress = 65,
        msoConditionEqualsLow = 58,
        msoConditionEqualsNormal = 59,
        msoConditionEqualsNotStarted = 64,
        msoConditionEqualsWaitingForSomeoneElse = 67,
        msoConditionFileTypeAllFiles = 1,
        msoConditionFileTypeBinders = 6,
        msoConditionFileTypeCalendarItem = 45,
        msoConditionFileTypeContactItem = 46,
        msoConditionFileTypeDatabases = 7,
        msoConditionFileTypeDataConnectionFiles = 51,
        msoConditionFileTypeDesignerFiles = 56,
        msoConditionFileTypeDocumentImagingFiles = 54,
        msoConditionFileTypeExcelWorkbooks = 4,
        msoConditionFileTypeJournalItem = 48,
        msoConditionFileTypeMailItem = 44,
        msoConditionFileTypeNoteItem = 47,
        msoConditionFileTypeOfficeFiles = 2,
        msoConditionFileTypeOutlookItems = 43,
        msoConditionFileTypePhotoDrawFiles = 50,
        msoConditionFileTypePowerPointPresentations = 5,
        msoConditionFileTypeProjectFiles = 53,
        msoConditionFileTypePublisherFiles = 52,
        msoConditionFileTypeTaskItem = 49,
        msoConditionFileTypeTemplates = 8,
        msoConditionFileTypeVisioFiles = 55,
        msoConditionFileTypeWebPages = 57,
        msoConditionFileTypeWordDocuments = 3,
        msoConditionFreeText = 42,
        msoConditionIncludes = 9,
        msoConditionIncludesFormsOf = 41,
        msoConditionIncludesNearEachOther = 13,
        msoConditionIncludesPhrase = 10,
        msoConditionInTheLast = 31,
        msoConditionInTheNext = 30,
        msoConditionIsExactly = 14,
        msoConditionIsNo = 40,
        msoConditionIsNot = 15,
        msoConditionIsYes = 39,
        msoConditionLastMonth = 22,
        msoConditionLastWeek = 19,
        msoConditionLessThan = 38,
        msoConditionMoreThan = 37,
        msoConditionNextMonth = 24,
        msoConditionNextWeek = 21,
        msoConditionNotEqualToCompleted = 71,
        msoConditionNotEqualToDeferred = 73,
        msoConditionNotEqualToHigh = 63,
        msoConditionNotEqualToInProgress = 70,
        msoConditionNotEqualToLow = 61,
        msoConditionNotEqualToNormal = 62,
        msoConditionNotEqualToNotStarted = 69,
        msoConditionNotEqualToWaitingForSomeoneElse = 72,
        msoConditionOn = 27,
        msoConditionOnOrAfter = 28,
        msoConditionOnOrBefore = 29,
        msoConditionThisMonth = 23,
        msoConditionThisWeek = 20,
        msoConditionToday = 17,
        msoConditionTomorrow = 18,
        msoConditionYesterday = 16,
    }

    const enum MsoConnector {
        msoConnectorAnd = 1,
        msoConnectorOr = 2,
    }

    const enum MsoConnectorType {
        msoConnectorCurve = 3,
        msoConnectorElbow = 2,
        msoConnectorStraight = 1,
        msoConnectorTypeMixed = -2,
    }

    const enum MsoContactCardAddressType {
        msoContactCardAddressTypeIM = 3,
        msoContactCardAddressTypeOutlook = 1,
        msoContactCardAddressTypeSMTP = 2,
        msoContactCardAddressTypeUnknown = 0,
    }

    const enum MsoContactCardStyle {
        msoContactCardFull = 1,
        msoContactCardHover = 0,
    }

    const enum MsoContactCardType {
        msoContactCardTypeEnterpriseContact = 0,
        msoContactCardTypeEnterpriseGroup = 3,
        msoContactCardTypePersonalContact = 1,
        msoContactCardTypePersonalDistributionList = 4,
        msoContactCardTypeUnknownContact = 2,
    }

    const enum MsoControlOLEUsage {
        msoControlOLEUsageBoth = 3,
        msoControlOLEUsageClient = 2,
        msoControlOLEUsageNeither = 0,
        msoControlOLEUsageServer = 1,
    }

    const enum MsoControlType {
        msoControlActiveX = 22,
        msoControlAutoCompleteCombo = 26,
        msoControlButton = 1,
        msoControlButtonDropdown = 5,
        msoControlButtonPopup = 12,
        msoControlComboBox = 4,
        msoControlCustom = 0,
        msoControlDropdown = 3,
        msoControlEdit = 2,
        msoControlExpandingGrid = 16,
        msoControlGauge = 19,
        msoControlGenericDropdown = 8,
        msoControlGraphicCombo = 20,
        msoControlGraphicDropdown = 9,
        msoControlGraphicPopup = 11,
        msoControlGrid = 18,
        msoControlLabel = 15,
        msoControlLabelEx = 24,
        msoControlOCXDropdown = 7,
        msoControlPane = 21,
        msoControlPopup = 10,
        msoControlSpinner = 23,
        msoControlSplitButtonMRUPopup = 14,
        msoControlSplitButtonPopup = 13,
        msoControlSplitDropdown = 6,
        msoControlSplitExpandingGrid = 17,
        msoControlWorkPane = 25,
    }

    const enum MsoCTPDockPosition {
        msoCTPDockPositionBottom = 3,
        msoCTPDockPositionFloating = 4,
        msoCTPDockPositionLeft = 0,
        msoCTPDockPositionRight = 2,
        msoCTPDockPositionTop = 1,
    }

    const enum MsoCTPDockPositionRestrict {
        msoCTPDockPositionRestrictNoChange = 1,
        msoCTPDockPositionRestrictNoHorizontal = 2,
        msoCTPDockPositionRestrictNone = 0,
        msoCTPDockPositionRestrictNoVertical = 3,
    }

    const enum MsoCustomXMLNodeType {
        msoCustomXMLNodeAttribute = 2,
        msoCustomXMLNodeCData = 4,
        msoCustomXMLNodeComment = 8,
        msoCustomXMLNodeDocument = 9,
        msoCustomXMLNodeElement = 1,
        msoCustomXMLNodeProcessingInstruction = 7,
        msoCustomXMLNodeText = 3,
    }

    const enum MsoCustomXMLValidationErrorType {
        msoCustomXMLValidationErrorAutomaticallyCleared = 1,
        msoCustomXMLValidationErrorManual = 2,
        msoCustomXMLValidationErrorSchemaGenerated = 0,
    }

    const enum MsoDateTimeFormat {
        msoDateTimeddddMMMMddyyyy = 2,
        msoDateTimedMMMMyyyy = 3,
        msoDateTimedMMMyy = 5,
        msoDateTimeFigureOut = 14,
        msoDateTimeFormatMixed = -2,
        msoDateTimeHmm = 10,
        msoDateTimehmmAMPM = 12,
        msoDateTimeHmmss = 11,
        msoDateTimehmmssAMPM = 13,
        msoDateTimeMdyy = 1,
        msoDateTimeMMddyyHmm = 8,
        msoDateTimeMMddyyhmmAMPM = 9,
        msoDateTimeMMMMdyyyy = 4,
        msoDateTimeMMMMyy = 6,
        msoDateTimeMMyy = 7,
    }

    const enum MsoDiagramNodeType {
        msoDiagramAssistant = 2,
        msoDiagramNode = 1,
    }

    const enum MsoDiagramType {
        msoDiagramCycle = 2,
        msoDiagramMixed = -2,
        msoDiagramOrgChart = 1,
        msoDiagramPyramid = 4,
        msoDiagramRadial = 3,
        msoDiagramTarget = 6,
        msoDiagramVenn = 5,
    }

    const enum MsoDistributeCmd {
        msoDistributeHorizontally = 0,
        msoDistributeVertically = 1,
    }

    const enum MsoDocInspectorStatus {
        msoDocInspectorStatusDocOk = 0,
        msoDocInspectorStatusError = 2,
        msoDocInspectorStatusIssueFound = 1,
    }

    const enum MsoDocProperties {
        msoPropertyTypeBoolean = 2,
        msoPropertyTypeDate = 3,
        msoPropertyTypeFloat = 5,
        msoPropertyTypeNumber = 1,
        msoPropertyTypeString = 4,
    }

    const enum MsoEditingType {
        msoEditingAuto = 0,
        msoEditingCorner = 1,
        msoEditingSmooth = 2,
        msoEditingSymmetric = 3,
    }

    const enum MsoEncoding {
        msoEncodingArabic = 1256,
        msoEncodingArabicASMO = 708,
        msoEncodingArabicAutoDetect = 51256,
        msoEncodingArabicTransparentASMO = 720,
        msoEncodingAutoDetect = 50001,
        msoEncodingBaltic = 1257,
        msoEncodingCentralEuropean = 1250,
        msoEncodingCyrillic = 1251,
        msoEncodingCyrillicAutoDetect = 51251,
        msoEncodingEBCDICArabic = 20420,
        msoEncodingEBCDICDenmarkNorway = 20277,
        msoEncodingEBCDICFinlandSweden = 20278,
        msoEncodingEBCDICFrance = 20297,
        msoEncodingEBCDICGermany = 20273,
        msoEncodingEBCDICGreek = 20423,
        msoEncodingEBCDICGreekModern = 875,
        msoEncodingEBCDICHebrew = 20424,
        msoEncodingEBCDICIcelandic = 20871,
        msoEncodingEBCDICInternational = 500,
        msoEncodingEBCDICItaly = 20280,
        msoEncodingEBCDICJapaneseKatakanaExtended = 20290,
        msoEncodingEBCDICJapaneseKatakanaExtendedAndJapanese = 50930,
        msoEncodingEBCDICJapaneseLatinExtendedAndJapanese = 50939,
        msoEncodingEBCDICKoreanExtended = 20833,
        msoEncodingEBCDICKoreanExtendedAndKorean = 50933,
        msoEncodingEBCDICLatinAmericaSpain = 20284,
        msoEncodingEBCDICMultilingualROECELatin2 = 870,
        msoEncodingEBCDICRussian = 20880,
        msoEncodingEBCDICSerbianBulgarian = 21025,
        msoEncodingEBCDICSimplifiedChineseExtendedAndSimplifiedChinese = 50935,
        msoEncodingEBCDICThai = 20838,
        msoEncodingEBCDICTurkish = 20905,
        msoEncodingEBCDICTurkishLatin5 = 1026,
        msoEncodingEBCDICUnitedKingdom = 20285,
        msoEncodingEBCDICUSCanada = 37,
        msoEncodingEBCDICUSCanadaAndJapanese = 50931,
        msoEncodingEBCDICUSCanadaAndTraditionalChinese = 50937,
        msoEncodingEUCChineseSimplifiedChinese = 51936,
        msoEncodingEUCJapanese = 51932,
        msoEncodingEUCKorean = 51949,
        msoEncodingEUCTaiwaneseTraditionalChinese = 51950,
        msoEncodingEuropa3 = 29001,
        msoEncodingExtAlphaLowercase = 21027,
        msoEncodingGreek = 1253,
        msoEncodingGreekAutoDetect = 51253,
        msoEncodingHebrew = 1255,
        msoEncodingHZGBSimplifiedChinese = 52936,
        msoEncodingIA5German = 20106,
        msoEncodingIA5IRV = 20105,
        msoEncodingIA5Norwegian = 20108,
        msoEncodingIA5Swedish = 20107,
        msoEncodingISCIIAssamese = 57006,
        msoEncodingISCIIBengali = 57003,
        msoEncodingISCIIDevanagari = 57002,
        msoEncodingISCIIGujarati = 57010,
        msoEncodingISCIIKannada = 57008,
        msoEncodingISCIIMalayalam = 57009,
        msoEncodingISCIIOriya = 57007,
        msoEncodingISCIIPunjabi = 57011,
        msoEncodingISCIITamil = 57004,
        msoEncodingISCIITelugu = 57005,
        msoEncodingISO2022CNSimplifiedChinese = 50229,
        msoEncodingISO2022CNTraditionalChinese = 50227,
        msoEncodingISO2022JPJISX02011989 = 50222,
        msoEncodingISO2022JPJISX02021984 = 50221,
        msoEncodingISO2022JPNoHalfwidthKatakana = 50220,
        msoEncodingISO2022KR = 50225,
        msoEncodingISO6937NonSpacingAccent = 20269,
        msoEncodingISO885915Latin9 = 28605,
        msoEncodingISO88591Latin1 = 28591,
        msoEncodingISO88592CentralEurope = 28592,
        msoEncodingISO88593Latin3 = 28593,
        msoEncodingISO88594Baltic = 28594,
        msoEncodingISO88595Cyrillic = 28595,
        msoEncodingISO88596Arabic = 28596,
        msoEncodingISO88597Greek = 28597,
        msoEncodingISO88598Hebrew = 28598,
        msoEncodingISO88598HebrewLogical = 38598,
        msoEncodingISO88599Turkish = 28599,
        msoEncodingJapaneseAutoDetect = 50932,
        msoEncodingJapaneseShiftJIS = 932,
        msoEncodingKOI8R = 20866,
        msoEncodingKOI8U = 21866,
        msoEncodingKorean = 949,
        msoEncodingKoreanAutoDetect = 50949,
        msoEncodingKoreanJohab = 1361,
        msoEncodingMacArabic = 10004,
        msoEncodingMacCroatia = 10082,
        msoEncodingMacCyrillic = 10007,
        msoEncodingMacGreek1 = 10006,
        msoEncodingMacHebrew = 10005,
        msoEncodingMacIcelandic = 10079,
        msoEncodingMacJapanese = 10001,
        msoEncodingMacKorean = 10003,
        msoEncodingMacLatin2 = 10029,
        msoEncodingMacRoman = 10000,
        msoEncodingMacRomania = 10010,
        msoEncodingMacSimplifiedChineseGB2312 = 10008,
        msoEncodingMacTraditionalChineseBig5 = 10002,
        msoEncodingMacTurkish = 10081,
        msoEncodingMacUkraine = 10017,
        msoEncodingOEMArabic = 864,
        msoEncodingOEMBaltic = 775,
        msoEncodingOEMCanadianFrench = 863,
        msoEncodingOEMCyrillic = 855,
        msoEncodingOEMCyrillicII = 866,
        msoEncodingOEMGreek437G = 737,
        msoEncodingOEMHebrew = 862,
        msoEncodingOEMIcelandic = 861,
        msoEncodingOEMModernGreek = 869,
        msoEncodingOEMMultilingualLatinI = 850,
        msoEncodingOEMMultilingualLatinII = 852,
        msoEncodingOEMNordic = 865,
        msoEncodingOEMPortuguese = 860,
        msoEncodingOEMTurkish = 857,
        msoEncodingOEMUnitedStates = 437,
        msoEncodingSimplifiedChineseAutoDetect = 50936,
        msoEncodingSimplifiedChineseGB18030 = 54936,
        msoEncodingSimplifiedChineseGBK = 936,
        msoEncodingT61 = 20261,
        msoEncodingTaiwanCNS = 20000,
        msoEncodingTaiwanEten = 20002,
        msoEncodingTaiwanIBM5550 = 20003,
        msoEncodingTaiwanTCA = 20001,
        msoEncodingTaiwanTeleText = 20004,
        msoEncodingTaiwanWang = 20005,
        msoEncodingThai = 874,
        msoEncodingTraditionalChineseAutoDetect = 50950,
        msoEncodingTraditionalChineseBig5 = 950,
        msoEncodingTurkish = 1254,
        msoEncodingUnicodeBigEndian = 1201,
        msoEncodingUnicodeLittleEndian = 1200,
        msoEncodingUSASCII = 20127,
        msoEncodingUTF7 = 65000,
        msoEncodingUTF8 = 65001,
        msoEncodingVietnamese = 1258,
        msoEncodingWestern = 1252,
    }

    const enum MsoExtraInfoMethod {
        msoMethodGet = 0,
        msoMethodPost = 1,
    }

    const enum MsoExtrusionColorType {
        msoExtrusionColorAutomatic = 1,
        msoExtrusionColorCustom = 2,
        msoExtrusionColorTypeMixed = -2,
    }

    const enum MsoFarEastLineBreakLanguageID {
        MsoFarEastLineBreakLanguageJapanese = 1041,
        MsoFarEastLineBreakLanguageKorean = 1042,
        MsoFarEastLineBreakLanguageSimplifiedChinese = 2052,
        MsoFarEastLineBreakLanguageTraditionalChinese = 1028,
    }

    const enum MsoFeatureInstall {
        msoFeatureInstallNone = 0,
        msoFeatureInstallOnDemand = 1,
        msoFeatureInstallOnDemandWithUI = 2,
    }

    const enum MsoFileDialogType {
        msoFileDialogFilePicker = 3,
        msoFileDialogFolderPicker = 4,
        msoFileDialogOpen = 1,
        msoFileDialogSaveAs = 2,
    }

    const enum MsoFileDialogView {
        msoFileDialogViewDetails = 2,
        msoFileDialogViewLargeIcons = 6,
        msoFileDialogViewList = 1,
        msoFileDialogViewPreview = 4,
        msoFileDialogViewProperties = 3,
        msoFileDialogViewSmallIcons = 7,
        msoFileDialogViewThumbnail = 5,
        msoFileDialogViewTiles = 9,
        msoFileDialogViewWebView = 8,
    }

    const enum MsoFileFindListBy {
        msoListbyName = 1,
        msoListbyTitle = 2,
    }

    const enum MsoFileFindOptions {
        msoOptionsAdd = 2,
        msoOptionsNew = 1,
        msoOptionsWithin = 3,
    }

    const enum MsoFileFindSortBy {
        msoFileFindSortbyAuthor = 1,
        msoFileFindSortbyDateCreated = 2,
        msoFileFindSortbyDateSaved = 4,
        msoFileFindSortbyFileName = 5,
        msoFileFindSortbyLastSavedBy = 3,
        msoFileFindSortbySize = 6,
        msoFileFindSortbyTitle = 7,
    }

    const enum MsoFileFindView {
        msoViewFileInfo = 1,
        msoViewPreview = 2,
        msoViewSummaryInfo = 3,
    }

    const enum MsoFileNewAction {
        msoCreateNewFile = 1,
        msoEditFile = 0,
        msoOpenFile = 2,
    }

    const enum MsoFileNewSection {
        msoBottomSection = 4,
        msoNew = 1,
        msoNewfromExistingFile = 2,
        msoNewfromTemplate = 3,
        msoOpenDocument = 0,
    }

    const enum MsoFileType {
        msoFileTypeAllFiles = 1,
        msoFileTypeBinders = 6,
        msoFileTypeCalendarItem = 11,
        msoFileTypeContactItem = 12,
        msoFileTypeDatabases = 7,
        msoFileTypeDataConnectionFiles = 17,
        msoFileTypeDesignerFiles = 22,
        msoFileTypeDocumentImagingFiles = 20,
        msoFileTypeExcelWorkbooks = 4,
        msoFileTypeJournalItem = 14,
        msoFileTypeMailItem = 10,
        msoFileTypeNoteItem = 13,
        msoFileTypeOfficeFiles = 2,
        msoFileTypeOutlookItems = 9,
        msoFileTypePhotoDrawFiles = 16,
        msoFileTypePowerPointPresentations = 5,
        msoFileTypeProjectFiles = 19,
        msoFileTypePublisherFiles = 18,
        msoFileTypeTaskItem = 15,
        msoFileTypeTemplates = 8,
        msoFileTypeVisioFiles = 21,
        msoFileTypeWebPages = 23,
        msoFileTypeWordDocuments = 3,
    }

    const enum MsoFileValidationMode {
        msoFileValidationDefault = 0,
        msoFileValidationSkip = 1,
    }

    const enum MsoFillType {
        msoFillBackground = 5,
        msoFillGradient = 3,
        msoFillMixed = -2,
        msoFillPatterned = 2,
        msoFillPicture = 6,
        msoFillSolid = 1,
        msoFillTextured = 4,
    }

    const enum MsoFilterComparison {
        msoFilterComparisonContains = 8,
        msoFilterComparisonEqual = 0,
        msoFilterComparisonGreaterThan = 3,
        msoFilterComparisonGreaterThanEqual = 5,
        msoFilterComparisonIsBlank = 6,
        msoFilterComparisonIsNotBlank = 7,
        msoFilterComparisonLessThan = 2,
        msoFilterComparisonLessThanEqual = 4,
        msoFilterComparisonNotContains = 9,
        msoFilterComparisonNotEqual = 1,
    }

    const enum MsoFilterConjunction {
        msoFilterConjunctionAnd = 0,
        msoFilterConjunctionOr = 1,
    }

    const enum MsoFlipCmd {
        msoFlipHorizontal = 0,
        msoFlipVertical = 1,
    }

    const enum MsoFontLanguageIndex {
        msoThemeComplexScript = 2,
        msoThemeEastAsian = 3,
        msoThemeLatin = 1,
    }

    const enum MsoGradientColorType {
        msoGradientColorMixed = -2,
        msoGradientMultiColor = 4,
        msoGradientOneColor = 1,
        msoGradientPresetColors = 3,
        msoGradientTwoColors = 2,
    }

    const enum MsoGradientStyle {
        msoGradientDiagonalDown = 4,
        msoGradientDiagonalUp = 3,
        msoGradientFromCenter = 7,
        msoGradientFromCorner = 5,
        msoGradientFromTitle = 6,
        msoGradientHorizontal = 1,
        msoGradientMixed = -2,
        msoGradientVertical = 2,
    }

    const enum MsoHorizontalAnchor {
        msoAnchorCenter = 2,
        msoAnchorNone = 1,
        msoHorizontalAnchorMixed = -2,
    }

    const enum MsoHTMLProjectOpen {
        msoHTMLProjectOpenSourceView = 1,
        msoHTMLProjectOpenTextView = 2,
    }

    const enum MsoHTMLProjectState {
        msoHTMLProjectStateDocumentLocked = 1,
        msoHTMLProjectStateDocumentProjectUnlocked = 3,
        msoHTMLProjectStateProjectLocked = 2,
    }

    const enum MsoHyperlinkType {
        msoHyperlinkInlineShape = 2,
        msoHyperlinkRange = 0,
        msoHyperlinkShape = 1,
    }

    const enum MsoIconType {
        msoIconAlert = 2,
        msoIconAlertCritical = 7,
        msoIconAlertInfo = 4,
        msoIconAlertQuery = 6,
        msoIconAlertWarning = 5,
        msoIconNone = 0,
        msoIconTip = 3,
    }

    const enum MsoIodGroup {
        msoIodGroupPIAs = 0,
        msoIodGroupVSTOR35Mgd = 1,
        msoIodGroupVSTOR40Mgd = 2,
    }

    const enum MsoLanguageID {
        msoLanguageIDAfrikaans = 1078,
        msoLanguageIDAlbanian = 1052,
        msoLanguageIDAmharic = 1118,
        msoLanguageIDArabic = 1025,
        msoLanguageIDArabicAlgeria = 5121,
        msoLanguageIDArabicBahrain = 15361,
        msoLanguageIDArabicEgypt = 3073,
        msoLanguageIDArabicIraq = 2049,
        msoLanguageIDArabicJordan = 11265,
        msoLanguageIDArabicKuwait = 13313,
        msoLanguageIDArabicLebanon = 12289,
        msoLanguageIDArabicLibya = 4097,
        msoLanguageIDArabicMorocco = 6145,
        msoLanguageIDArabicOman = 8193,
        msoLanguageIDArabicQatar = 16385,
        msoLanguageIDArabicSyria = 10241,
        msoLanguageIDArabicTunisia = 7169,
        msoLanguageIDArabicUAE = 14337,
        msoLanguageIDArabicYemen = 9217,
        msoLanguageIDArmenian = 1067,
        msoLanguageIDAssamese = 1101,
        msoLanguageIDAzeriCyrillic = 2092,
        msoLanguageIDAzeriLatin = 1068,
        msoLanguageIDBasque = 1069,
        msoLanguageIDBelgianDutch = 2067,
        msoLanguageIDBelgianFrench = 2060,
        msoLanguageIDBengali = 1093,
        msoLanguageIDBosnian = 4122,
        msoLanguageIDBosnianBosniaHerzegovinaCyrillic = 8218,
        msoLanguageIDBosnianBosniaHerzegovinaLatin = 5146,
        msoLanguageIDBrazilianPortuguese = 1046,
        msoLanguageIDBulgarian = 1026,
        msoLanguageIDBurmese = 1109,
        msoLanguageIDByelorussian = 1059,
        msoLanguageIDCatalan = 1027,
        msoLanguageIDCherokee = 1116,
        msoLanguageIDChineseHongKongSAR = 3076,
        msoLanguageIDChineseMacaoSAR = 5124,
        msoLanguageIDChineseSingapore = 4100,
        msoLanguageIDCroatian = 1050,
        msoLanguageIDCzech = 1029,
        msoLanguageIDDanish = 1030,
        msoLanguageIDDivehi = 1125,
        msoLanguageIDDutch = 1043,
        msoLanguageIDDzongkhaBhutan = 2129,
        msoLanguageIDEdo = 1126,
        msoLanguageIDEnglishAUS = 3081,
        msoLanguageIDEnglishBelize = 10249,
        msoLanguageIDEnglishCanadian = 4105,
        msoLanguageIDEnglishCaribbean = 9225,
        msoLanguageIDEnglishIndonesia = 14345,
        msoLanguageIDEnglishIreland = 6153,
        msoLanguageIDEnglishJamaica = 8201,
        msoLanguageIDEnglishNewZealand = 5129,
        msoLanguageIDEnglishPhilippines = 13321,
        msoLanguageIDEnglishSouthAfrica = 7177,
        msoLanguageIDEnglishTrinidadTobago = 11273,
        msoLanguageIDEnglishUK = 2057,
        msoLanguageIDEnglishUS = 1033,
        msoLanguageIDEnglishZimbabwe = 12297,
        msoLanguageIDEstonian = 1061,
        msoLanguageIDFaeroese = 1080,
        msoLanguageIDFarsi = 1065,
        msoLanguageIDFilipino = 1124,
        msoLanguageIDFinnish = 1035,
        msoLanguageIDFrench = 1036,
        msoLanguageIDFrenchCameroon = 11276,
        msoLanguageIDFrenchCanadian = 3084,
        msoLanguageIDFrenchCongoDRC = 9228,
        msoLanguageIDFrenchCotedIvoire = 12300,
        msoLanguageIDFrenchHaiti = 15372,
        msoLanguageIDFrenchLuxembourg = 5132,
        msoLanguageIDFrenchMali = 13324,
        msoLanguageIDFrenchMonaco = 6156,
        msoLanguageIDFrenchMorocco = 14348,
        msoLanguageIDFrenchReunion = 8204,
        msoLanguageIDFrenchSenegal = 10252,
        msoLanguageIDFrenchWestIndies = 7180,
        msoLanguageIDFrenchZaire = 9228,
        msoLanguageIDFrisianNetherlands = 1122,
        msoLanguageIDFulfulde = 1127,
        msoLanguageIDGaelicIreland = 2108,
        msoLanguageIDGaelicScotland = 1084,
        msoLanguageIDGalician = 1110,
        msoLanguageIDGeorgian = 1079,
        msoLanguageIDGerman = 1031,
        msoLanguageIDGermanAustria = 3079,
        msoLanguageIDGermanLiechtenstein = 5127,
        msoLanguageIDGermanLuxembourg = 4103,
        msoLanguageIDGreek = 1032,
        msoLanguageIDGuarani = 1140,
        msoLanguageIDGujarati = 1095,
        msoLanguageIDHausa = 1128,
        msoLanguageIDHawaiian = 1141,
        msoLanguageIDHebrew = 1037,
        msoLanguageIDHindi = 1081,
        msoLanguageIDHungarian = 1038,
        msoLanguageIDIbibio = 1129,
        msoLanguageIDIcelandic = 1039,
        msoLanguageIDIgbo = 1136,
        msoLanguageIDIndonesian = 1057,
        msoLanguageIDInuktitut = 1117,
        msoLanguageIDItalian = 1040,
        msoLanguageIDJapanese = 1041,
        msoLanguageIDKannada = 1099,
        msoLanguageIDKanuri = 1137,
        msoLanguageIDKashmiri = 1120,
        msoLanguageIDKashmiriDevanagari = 2144,
        msoLanguageIDKazakh = 1087,
        msoLanguageIDKhmer = 1107,
        msoLanguageIDKirghiz = 1088,
        msoLanguageIDKonkani = 1111,
        msoLanguageIDKorean = 1042,
        msoLanguageIDKyrgyz = 1088,
        msoLanguageIDLao = 1108,
        msoLanguageIDLatin = 1142,
        msoLanguageIDLatvian = 1062,
        msoLanguageIDLithuanian = 1063,
        msoLanguageIDMacedonian = 1071,
        msoLanguageIDMacedonianFYROM = 1071,
        msoLanguageIDMalayalam = 1100,
        msoLanguageIDMalayBruneiDarussalam = 2110,
        msoLanguageIDMalaysian = 1086,
        msoLanguageIDMaltese = 1082,
        msoLanguageIDManipuri = 1112,
        msoLanguageIDMaori = 1153,
        msoLanguageIDMarathi = 1102,
        msoLanguageIDMexicanSpanish = 2058,
        msoLanguageIDMixed = -2,
        msoLanguageIDMongolian = 1104,
        msoLanguageIDNepali = 1121,
        msoLanguageIDNone = 0,
        msoLanguageIDNoProofing = 1024,
        msoLanguageIDNorwegianBokmol = 1044,
        msoLanguageIDNorwegianNynorsk = 2068,
        msoLanguageIDOriya = 1096,
        msoLanguageIDOromo = 1138,
        msoLanguageIDPashto = 1123,
        msoLanguageIDPolish = 1045,
        msoLanguageIDPortuguese = 2070,
        msoLanguageIDPunjabi = 1094,
        msoLanguageIDQuechuaBolivia = 1131,
        msoLanguageIDQuechuaEcuador = 2155,
        msoLanguageIDQuechuaPeru = 3179,
        msoLanguageIDRhaetoRomanic = 1047,
        msoLanguageIDRomanian = 1048,
        msoLanguageIDRomanianMoldova = 2072,
        msoLanguageIDRussian = 1049,
        msoLanguageIDRussianMoldova = 2073,
        msoLanguageIDSamiLappish = 1083,
        msoLanguageIDSanskrit = 1103,
        msoLanguageIDSepedi = 1132,
        msoLanguageIDSerbianBosniaHerzegovinaCyrillic = 7194,
        msoLanguageIDSerbianBosniaHerzegovinaLatin = 6170,
        msoLanguageIDSerbianCyrillic = 3098,
        msoLanguageIDSerbianLatin = 2074,
        msoLanguageIDSesotho = 1072,
        msoLanguageIDSimplifiedChinese = 2052,
        msoLanguageIDSindhi = 1113,
        msoLanguageIDSindhiPakistan = 2137,
        msoLanguageIDSinhalese = 1115,
        msoLanguageIDSlovak = 1051,
        msoLanguageIDSlovenian = 1060,
        msoLanguageIDSomali = 1143,
        msoLanguageIDSorbian = 1070,
        msoLanguageIDSpanish = 1034,
        msoLanguageIDSpanishArgentina = 11274,
        msoLanguageIDSpanishBolivia = 16394,
        msoLanguageIDSpanishChile = 13322,
        msoLanguageIDSpanishColombia = 9226,
        msoLanguageIDSpanishCostaRica = 5130,
        msoLanguageIDSpanishDominicanRepublic = 7178,
        msoLanguageIDSpanishEcuador = 12298,
        msoLanguageIDSpanishElSalvador = 17418,
        msoLanguageIDSpanishGuatemala = 4106,
        msoLanguageIDSpanishHonduras = 18442,
        msoLanguageIDSpanishModernSort = 3082,
        msoLanguageIDSpanishNicaragua = 19466,
        msoLanguageIDSpanishPanama = 6154,
        msoLanguageIDSpanishParaguay = 15370,
        msoLanguageIDSpanishPeru = 10250,
        msoLanguageIDSpanishPuertoRico = 20490,
        msoLanguageIDSpanishUruguay = 14346,
        msoLanguageIDSpanishVenezuela = 8202,
        msoLanguageIDSutu = 1072,
        msoLanguageIDSwahili = 1089,
        msoLanguageIDSwedish = 1053,
        msoLanguageIDSwedishFinland = 2077,
        msoLanguageIDSwissFrench = 4108,
        msoLanguageIDSwissGerman = 2055,
        msoLanguageIDSwissItalian = 2064,
        msoLanguageIDSyriac = 1114,
        msoLanguageIDTajik = 1064,
        msoLanguageIDTamazight = 1119,
        msoLanguageIDTamazightLatin = 2143,
        msoLanguageIDTamil = 1097,
        msoLanguageIDTatar = 1092,
        msoLanguageIDTelugu = 1098,
        msoLanguageIDThai = 1054,
        msoLanguageIDTibetan = 1105,
        msoLanguageIDTigrignaEritrea = 2163,
        msoLanguageIDTigrignaEthiopic = 1139,
        msoLanguageIDTraditionalChinese = 1028,
        msoLanguageIDTsonga = 1073,
        msoLanguageIDTswana = 1074,
        msoLanguageIDTurkish = 1055,
        msoLanguageIDTurkmen = 1090,
        msoLanguageIDUkrainian = 1058,
        msoLanguageIDUrdu = 1056,
        msoLanguageIDUzbekCyrillic = 2115,
        msoLanguageIDUzbekLatin = 1091,
        msoLanguageIDVenda = 1075,
        msoLanguageIDVietnamese = 1066,
        msoLanguageIDWelsh = 1106,
        msoLanguageIDXhosa = 1076,
        msoLanguageIDYi = 1144,
        msoLanguageIDYiddish = 1085,
        msoLanguageIDYoruba = 1130,
        msoLanguageIDZulu = 1077,
    }

    const enum MsoLanguageIDHidden {
        msoLanguageIDChineseHongKong = 3076,
        msoLanguageIDChineseMacao = 5124,
        msoLanguageIDEnglishTrinidad = 11273,
    }

    const enum MsoLastModified {
        msoLastModifiedAnyTime = 7,
        msoLastModifiedLastMonth = 5,
        msoLastModifiedLastWeek = 3,
        msoLastModifiedThisMonth = 6,
        msoLastModifiedThisWeek = 4,
        msoLastModifiedToday = 2,
        msoLastModifiedYesterday = 1,
    }

    const enum MsoLightRigType {
        msoLightRigBalanced = 14,
        msoLightRigBrightRoom = 27,
        msoLightRigChilly = 22,
        msoLightRigContrasting = 18,
        msoLightRigFlat = 24,
        msoLightRigFlood = 17,
        msoLightRigFreezing = 23,
        msoLightRigGlow = 26,
        msoLightRigHarsh = 16,
        msoLightRigLegacyFlat1 = 1,
        msoLightRigLegacyFlat2 = 2,
        msoLightRigLegacyFlat3 = 3,
        msoLightRigLegacyFlat4 = 4,
        msoLightRigLegacyHarsh1 = 9,
        msoLightRigLegacyHarsh2 = 10,
        msoLightRigLegacyHarsh3 = 11,
        msoLightRigLegacyHarsh4 = 12,
        msoLightRigLegacyNormal1 = 5,
        msoLightRigLegacyNormal2 = 6,
        msoLightRigLegacyNormal3 = 7,
        msoLightRigLegacyNormal4 = 8,
        msoLightRigMixed = -2,
        msoLightRigMorning = 19,
        msoLightRigSoft = 15,
        msoLightRigSunrise = 20,
        msoLightRigSunset = 21,
        msoLightRigThreePoint = 13,
        msoLightRigTwoPoint = 25,
    }

    const enum MsoLineDashStyle {
        msoLineDash = 4,
        msoLineDashDot = 5,
        msoLineDashDotDot = 6,
        msoLineDashStyleMixed = -2,
        msoLineLongDash = 7,
        msoLineLongDashDot = 8,
        msoLineLongDashDotDot = 9,
        msoLineRoundDot = 3,
        msoLineSolid = 1,
        msoLineSquareDot = 2,
        msoLineSysDash = 10,
        msoLineSysDashDot = 12,
        msoLineSysDot = 11,
    }

    const enum MsoLineStyle {
        msoLineSingle = 1,
        msoLineStyleMixed = -2,
        msoLineThickBetweenThin = 5,
        msoLineThickThin = 4,
        msoLineThinThick = 3,
        msoLineThinThin = 2,
    }

    const enum MsoMenuAnimation {
        msoMenuAnimationNone = 0,
        msoMenuAnimationRandom = 1,
        msoMenuAnimationSlide = 3,
        msoMenuAnimationUnfold = 2,
    }

    const enum MsoMetaPropertyType {
        msoMetaPropertyTypeBoolean = 1,
        msoMetaPropertyTypeBusinessData = 20,
        msoMetaPropertyTypeBusinessDataSecondary = 21,
        msoMetaPropertyTypeCalculated = 3,
        msoMetaPropertyTypeChoice = 2,
        msoMetaPropertyTypeComputed = 4,
        msoMetaPropertyTypeCurrency = 5,
        msoMetaPropertyTypeDateTime = 6,
        msoMetaPropertyTypeFillInChoice = 7,
        msoMetaPropertyTypeGuid = 8,
        msoMetaPropertyTypeInteger = 9,
        msoMetaPropertyTypeLookup = 10,
        msoMetaPropertyTypeMax = 22,
        msoMetaPropertyTypeMultiChoice = 12,
        msoMetaPropertyTypeMultiChoiceFillIn = 13,
        msoMetaPropertyTypeMultiChoiceLookup = 11,
        msoMetaPropertyTypeNote = 14,
        msoMetaPropertyTypeNumber = 15,
        msoMetaPropertyTypeText = 16,
        msoMetaPropertyTypeUnknown = 0,
        msoMetaPropertyTypeUrl = 17,
        msoMetaPropertyTypeUser = 18,
        msoMetaPropertyTypeUserMulti = 19,
    }

    const enum MsoMixedType {
        msoIntegerMixed = 32768,
        msoSingleMixed = -2147483648,
    }

    const enum MsoModeType {
        msoModeAutoDown = 1,
        msoModeModal = 0,
        msoModeModeless = 2,
    }

    const enum MsoMoveRow {
        msoMoveRowFirst = -4,
        msoMoveRowNbr = -1,
        msoMoveRowNext = -2,
        msoMoveRowPrev = -3,
    }

    const enum MsoNumberedBulletStyle {
        msoBulletAlphaLCParenBoth = 8,
        msoBulletAlphaLCParenRight = 9,
        msoBulletAlphaLCPeriod = 0,
        msoBulletAlphaUCParenBoth = 10,
        msoBulletAlphaUCParenRight = 11,
        msoBulletAlphaUCPeriod = 1,
        msoBulletArabicAbjadDash = 24,
        msoBulletArabicAlphaDash = 23,
        msoBulletArabicDBPeriod = 29,
        msoBulletArabicDBPlain = 28,
        msoBulletArabicParenBoth = 12,
        msoBulletArabicParenRight = 2,
        msoBulletArabicPeriod = 3,
        msoBulletArabicPlain = 13,
        msoBulletCircleNumDBPlain = 18,
        msoBulletCircleNumWDBlackPlain = 20,
        msoBulletCircleNumWDWhitePlain = 19,
        msoBulletHebrewAlphaDash = 25,
        msoBulletHindiAlpha1Period = 40,
        msoBulletHindiAlphaPeriod = 36,
        msoBulletHindiNumParenRight = 39,
        msoBulletHindiNumPeriod = 37,
        msoBulletKanjiKoreanPeriod = 27,
        msoBulletKanjiKoreanPlain = 26,
        msoBulletKanjiSimpChinDBPeriod = 38,
        msoBulletRomanLCParenBoth = 4,
        msoBulletRomanLCParenRight = 5,
        msoBulletRomanLCPeriod = 6,
        msoBulletRomanUCParenBoth = 14,
        msoBulletRomanUCParenRight = 15,
        msoBulletRomanUCPeriod = 7,
        msoBulletSimpChinPeriod = 17,
        msoBulletSimpChinPlain = 16,
        msoBulletStyleMixed = -2,
        msoBulletThaiAlphaParenBoth = 32,
        msoBulletThaiAlphaParenRight = 31,
        msoBulletThaiAlphaPeriod = 30,
        msoBulletThaiNumParenBoth = 35,
        msoBulletThaiNumParenRight = 34,
        msoBulletThaiNumPeriod = 33,
        msoBulletTradChinPeriod = 22,
        msoBulletTradChinPlain = 21,
    }

    const enum MsoOLEMenuGroup {
        msoOLEMenuGroupContainer = 2,
        msoOLEMenuGroupEdit = 1,
        msoOLEMenuGroupFile = 0,
        msoOLEMenuGroupHelp = 5,
        msoOLEMenuGroupNone = -1,
        msoOLEMenuGroupObject = 3,
        msoOLEMenuGroupWindow = 4,
    }

    const enum MsoOrgChartLayoutType {
        msoOrgChartLayoutBothHanging = 2,
        msoOrgChartLayoutDefault = 5,
        msoOrgChartLayoutLeftHanging = 3,
        msoOrgChartLayoutMixed = -2,
        msoOrgChartLayoutRightHanging = 4,
        msoOrgChartLayoutStandard = 1,
    }

    const enum MsoOrgChartOrientation {
        msoOrgChartOrientationMixed = -2,
        msoOrgChartOrientationVertical = 1,
    }

    const enum MsoOrientation {
        msoOrientationHorizontal = 1,
        msoOrientationMixed = -2,
        msoOrientationVertical = 2,
    }

    const enum MsoParagraphAlignment {
        msoAlignCenter = 2,
        msoAlignDistribute = 5,
        msoAlignJustify = 4,
        msoAlignJustifyLow = 7,
        msoAlignLeft = 1,
        msoAlignMixed = -2,
        msoAlignRight = 3,
        msoAlignThaiDistribute = 6,
    }

    const enum MsoPathFormat {
        msoPathType1 = 1,
        msoPathType2 = 2,
        msoPathType3 = 3,
        msoPathType4 = 4,
        msoPathTypeMixed = -2,
        msoPathTypeNone = 0,
    }

    const enum MsoPatternType {
        msoPattern10Percent = 2,
        msoPattern20Percent = 3,
        msoPattern25Percent = 4,
        msoPattern30Percent = 5,
        msoPattern40Percent = 6,
        msoPattern50Percent = 7,
        msoPattern5Percent = 1,
        msoPattern60Percent = 8,
        msoPattern70Percent = 9,
        msoPattern75Percent = 10,
        msoPattern80Percent = 11,
        msoPattern90Percent = 12,
        msoPatternCross = 51,
        msoPatternDarkDownwardDiagonal = 15,
        msoPatternDarkHorizontal = 13,
        msoPatternDarkUpwardDiagonal = 16,
        msoPatternDarkVertical = 14,
        msoPatternDashedDownwardDiagonal = 28,
        msoPatternDashedHorizontal = 32,
        msoPatternDashedUpwardDiagonal = 27,
        msoPatternDashedVertical = 31,
        msoPatternDiagonalBrick = 40,
        msoPatternDiagonalCross = 54,
        msoPatternDivot = 46,
        msoPatternDottedDiamond = 24,
        msoPatternDottedGrid = 45,
        msoPatternDownwardDiagonal = 52,
        msoPatternHorizontal = 49,
        msoPatternHorizontalBrick = 35,
        msoPatternLargeCheckerBoard = 36,
        msoPatternLargeConfetti = 33,
        msoPatternLargeGrid = 34,
        msoPatternLightDownwardDiagonal = 21,
        msoPatternLightHorizontal = 19,
        msoPatternLightUpwardDiagonal = 22,
        msoPatternLightVertical = 20,
        msoPatternMixed = -2,
        msoPatternNarrowHorizontal = 30,
        msoPatternNarrowVertical = 29,
        msoPatternOutlinedDiamond = 41,
        msoPatternPlaid = 42,
        msoPatternShingle = 47,
        msoPatternSmallCheckerBoard = 17,
        msoPatternSmallConfetti = 37,
        msoPatternSmallGrid = 23,
        msoPatternSolidDiamond = 39,
        msoPatternSphere = 43,
        msoPatternTrellis = 18,
        msoPatternUpwardDiagonal = 53,
        msoPatternVertical = 50,
        msoPatternWave = 48,
        msoPatternWeave = 44,
        msoPatternWideDownwardDiagonal = 25,
        msoPatternWideUpwardDiagonal = 26,
        msoPatternZigZag = 38,
    }

    const enum MsoPermission {
        msoPermissionAllCommon = 127,
        msoPermissionChange = 15,
        msoPermissionEdit = 2,
        msoPermissionExtract = 8,
        msoPermissionFullControl = 64,
        msoPermissionObjModel = 32,
        msoPermissionPrint = 16,
        msoPermissionRead = 1,
        msoPermissionSave = 4,
        msoPermissionView = 1,
    }

    const enum MsoPickerField {
        msoPickerFieldDateTime = 1,
        msoPickerFieldMax = 5,
        msoPickerFieldNumber = 2,
        msoPickerFieldText = 3,
        msoPickerFieldUnknown = 0,
        msoPickerFieldUser = 4,
    }

    const enum MsoPictureColorType {
        msoPictureAutomatic = 1,
        msoPictureBlackAndWhite = 3,
        msoPictureGrayscale = 2,
        msoPictureMixed = -2,
        msoPictureWatermark = 4,
    }

    const enum MsoPictureEffectType {
        msoEffectBackgroundRemoval = 1,
        msoEffectBlur = 2,
        msoEffectBrightnessContrast = 3,
        msoEffectCement = 4,
        msoEffectChalkSketch = 6,
        msoEffectColorTemperature = 7,
        msoEffectCrisscrossEtching = 5,
        msoEffectCutout = 8,
        msoEffectFilmGrain = 9,
        msoEffectGlass = 10,
        msoEffectGlowDiffused = 11,
        msoEffectGlowEdges = 12,
        msoEffectLightScreen = 13,
        msoEffectLineDrawing = 14,
        msoEffectMarker = 15,
        msoEffectMosiaicBubbles = 16,
        msoEffectNone = 0,
        msoEffectPaintBrush = 17,
        msoEffectPaintStrokes = 18,
        msoEffectPastelsSmooth = 19,
        msoEffectPencilGrayscale = 20,
        msoEffectPencilSketch = 21,
        msoEffectPhotocopy = 22,
        msoEffectPlasticWrap = 23,
        msoEffectSaturation = 24,
        msoEffectSharpenSoften = 25,
        msoEffectTexturizer = 26,
        msoEffectWatercolorSponge = 27,
    }

    const enum MsoPresetCamera {
        msoCameraIsometricBottomDown = 23,
        msoCameraIsometricBottomUp = 22,
        msoCameraIsometricLeftDown = 25,
        msoCameraIsometricLeftUp = 24,
        msoCameraIsometricOffAxis1Left = 28,
        msoCameraIsometricOffAxis1Right = 29,
        msoCameraIsometricOffAxis1Top = 30,
        msoCameraIsometricOffAxis2Left = 31,
        msoCameraIsometricOffAxis2Right = 32,
        msoCameraIsometricOffAxis2Top = 33,
        msoCameraIsometricOffAxis3Bottom = 36,
        msoCameraIsometricOffAxis3Left = 34,
        msoCameraIsometricOffAxis3Right = 35,
        msoCameraIsometricOffAxis4Bottom = 39,
        msoCameraIsometricOffAxis4Left = 37,
        msoCameraIsometricOffAxis4Right = 38,
        msoCameraIsometricRightDown = 27,
        msoCameraIsometricRightUp = 26,
        msoCameraIsometricTopDown = 21,
        msoCameraIsometricTopUp = 20,
        msoCameraLegacyObliqueBottom = 8,
        msoCameraLegacyObliqueBottomLeft = 7,
        msoCameraLegacyObliqueBottomRight = 9,
        msoCameraLegacyObliqueFront = 5,
        msoCameraLegacyObliqueLeft = 4,
        msoCameraLegacyObliqueRight = 6,
        msoCameraLegacyObliqueTop = 2,
        msoCameraLegacyObliqueTopLeft = 1,
        msoCameraLegacyObliqueTopRight = 3,
        msoCameraLegacyPerspectiveBottom = 17,
        msoCameraLegacyPerspectiveBottomLeft = 16,
        msoCameraLegacyPerspectiveBottomRight = 18,
        msoCameraLegacyPerspectiveFront = 14,
        msoCameraLegacyPerspectiveLeft = 13,
        msoCameraLegacyPerspectiveRight = 15,
        msoCameraLegacyPerspectiveTop = 11,
        msoCameraLegacyPerspectiveTopLeft = 10,
        msoCameraLegacyPerspectiveTopRight = 12,
        msoCameraObliqueBottom = 46,
        msoCameraObliqueBottomLeft = 45,
        msoCameraObliqueBottomRight = 47,
        msoCameraObliqueLeft = 43,
        msoCameraObliqueRight = 44,
        msoCameraObliqueTop = 41,
        msoCameraObliqueTopLeft = 40,
        msoCameraObliqueTopRight = 42,
        msoCameraOrthographicFront = 19,
        msoCameraPerspectiveAbove = 51,
        msoCameraPerspectiveAboveLeftFacing = 53,
        msoCameraPerspectiveAboveRightFacing = 54,
        msoCameraPerspectiveBelow = 52,
        msoCameraPerspectiveContrastingLeftFacing = 55,
        msoCameraPerspectiveContrastingRightFacing = 56,
        msoCameraPerspectiveFront = 48,
        msoCameraPerspectiveHeroicExtremeLeftFacing = 59,
        msoCameraPerspectiveHeroicExtremeRightFacing = 60,
        msoCameraPerspectiveHeroicLeftFacing = 57,
        msoCameraPerspectiveHeroicRightFacing = 58,
        msoCameraPerspectiveLeft = 49,
        msoCameraPerspectiveRelaxed = 61,
        msoCameraPerspectiveRelaxedModerately = 62,
        msoCameraPerspectiveRight = 50,
        msoPresetCameraMixed = -2,
    }

    const enum MsoPresetExtrusionDirection {
        msoExtrusionBottom = 2,
        msoExtrusionBottomLeft = 3,
        msoExtrusionBottomRight = 1,
        msoExtrusionLeft = 6,
        msoExtrusionNone = 5,
        msoExtrusionRight = 4,
        msoExtrusionTop = 8,
        msoExtrusionTopLeft = 9,
        msoExtrusionTopRight = 7,
        msoPresetExtrusionDirectionMixed = -2,
    }

    const enum MsoPresetGradientType {
        msoGradientBrass = 20,
        msoGradientCalmWater = 8,
        msoGradientChrome = 21,
        msoGradientChromeII = 22,
        msoGradientDaybreak = 4,
        msoGradientDesert = 6,
        msoGradientEarlySunset = 1,
        msoGradientFire = 9,
        msoGradientFog = 10,
        msoGradientGold = 18,
        msoGradientGoldII = 19,
        msoGradientHorizon = 5,
        msoGradientLateSunset = 2,
        msoGradientMahogany = 15,
        msoGradientMoss = 11,
        msoGradientNightfall = 3,
        msoGradientOcean = 7,
        msoGradientParchment = 14,
        msoGradientPeacock = 12,
        msoGradientRainbow = 16,
        msoGradientRainbowII = 17,
        msoGradientSapphire = 24,
        msoGradientSilver = 23,
        msoGradientWheat = 13,
        msoPresetGradientMixed = -2,
    }

    const enum MsoPresetLightingDirection {
        msoLightingBottom = 8,
        msoLightingBottomLeft = 7,
        msoLightingBottomRight = 9,
        msoLightingLeft = 4,
        msoLightingNone = 5,
        msoLightingRight = 6,
        msoLightingTop = 2,
        msoLightingTopLeft = 1,
        msoLightingTopRight = 3,
        msoPresetLightingDirectionMixed = -2,
    }

    const enum MsoPresetLightingSoftness {
        msoLightingBright = 3,
        msoLightingDim = 1,
        msoLightingNormal = 2,
        msoPresetLightingSoftnessMixed = -2,
    }

    const enum MsoPresetMaterial {
        msoMaterialClear = 13,
        msoMaterialDarkEdge = 11,
        msoMaterialFlat = 14,
        msoMaterialMatte = 1,
        msoMaterialMatte2 = 5,
        msoMaterialMetal = 3,
        msoMaterialMetal2 = 7,
        msoMaterialPlastic = 2,
        msoMaterialPlastic2 = 6,
        msoMaterialPowder = 10,
        msoMaterialSoftEdge = 12,
        msoMaterialSoftMetal = 15,
        msoMaterialTranslucentPowder = 9,
        msoMaterialWarmMatte = 8,
        msoMaterialWireFrame = 4,
        msoPresetMaterialMixed = -2,
    }

    const enum MsoPresetTextEffect {
        msoTextEffect1 = 0,
        msoTextEffect10 = 9,
        msoTextEffect11 = 10,
        msoTextEffect12 = 11,
        msoTextEffect13 = 12,
        msoTextEffect14 = 13,
        msoTextEffect15 = 14,
        msoTextEffect16 = 15,
        msoTextEffect17 = 16,
        msoTextEffect18 = 17,
        msoTextEffect19 = 18,
        msoTextEffect2 = 1,
        msoTextEffect20 = 19,
        msoTextEffect21 = 20,
        msoTextEffect22 = 21,
        msoTextEffect23 = 22,
        msoTextEffect24 = 23,
        msoTextEffect25 = 24,
        msoTextEffect26 = 25,
        msoTextEffect27 = 26,
        msoTextEffect28 = 27,
        msoTextEffect29 = 28,
        msoTextEffect3 = 2,
        msoTextEffect30 = 29,
        msoTextEffect4 = 3,
        msoTextEffect5 = 4,
        msoTextEffect6 = 5,
        msoTextEffect7 = 6,
        msoTextEffect8 = 7,
        msoTextEffect9 = 8,
        msoTextEffectMixed = -2,
    }

    const enum MsoPresetTextEffectShape {
        msoTextEffectShapeArchDownCurve = 10,
        msoTextEffectShapeArchDownPour = 14,
        msoTextEffectShapeArchUpCurve = 9,
        msoTextEffectShapeArchUpPour = 13,
        msoTextEffectShapeButtonCurve = 12,
        msoTextEffectShapeButtonPour = 16,
        msoTextEffectShapeCanDown = 20,
        msoTextEffectShapeCanUp = 19,
        msoTextEffectShapeCascadeDown = 40,
        msoTextEffectShapeCascadeUp = 39,
        msoTextEffectShapeChevronDown = 6,
        msoTextEffectShapeChevronUp = 5,
        msoTextEffectShapeCircleCurve = 11,
        msoTextEffectShapeCirclePour = 15,
        msoTextEffectShapeCurveDown = 18,
        msoTextEffectShapeCurveUp = 17,
        msoTextEffectShapeDeflate = 26,
        msoTextEffectShapeDeflateBottom = 28,
        msoTextEffectShapeDeflateInflate = 31,
        msoTextEffectShapeDeflateInflateDeflate = 32,
        msoTextEffectShapeDeflateTop = 30,
        msoTextEffectShapeDoubleWave1 = 23,
        msoTextEffectShapeDoubleWave2 = 24,
        msoTextEffectShapeFadeDown = 36,
        msoTextEffectShapeFadeLeft = 34,
        msoTextEffectShapeFadeRight = 33,
        msoTextEffectShapeFadeUp = 35,
        msoTextEffectShapeInflate = 25,
        msoTextEffectShapeInflateBottom = 27,
        msoTextEffectShapeInflateTop = 29,
        msoTextEffectShapeMixed = -2,
        msoTextEffectShapePlainText = 1,
        msoTextEffectShapeRingInside = 7,
        msoTextEffectShapeRingOutside = 8,
        msoTextEffectShapeSlantDown = 38,
        msoTextEffectShapeSlantUp = 37,
        msoTextEffectShapeStop = 2,
        msoTextEffectShapeTriangleDown = 4,
        msoTextEffectShapeTriangleUp = 3,
        msoTextEffectShapeWave1 = 21,
        msoTextEffectShapeWave2 = 22,
    }

    const enum MsoPresetTexture {
        msoPresetTextureMixed = -2,
        msoTextureBlueTissuePaper = 17,
        msoTextureBouquet = 20,
        msoTextureBrownMarble = 11,
        msoTextureCanvas = 2,
        msoTextureCork = 21,
        msoTextureDenim = 3,
        msoTextureFishFossil = 7,
        msoTextureGranite = 12,
        msoTextureGreenMarble = 9,
        msoTextureMediumWood = 24,
        msoTextureNewsprint = 13,
        msoTextureOak = 23,
        msoTexturePaperBag = 6,
        msoTexturePapyrus = 1,
        msoTextureParchment = 15,
        msoTexturePinkTissuePaper = 18,
        msoTexturePurpleMesh = 19,
        msoTextureRecycledPaper = 14,
        msoTextureSand = 8,
        msoTextureStationery = 16,
        msoTextureWalnut = 22,
        msoTextureWaterDroplets = 5,
        msoTextureWhiteMarble = 10,
        msoTextureWovenMat = 4,
    }

    const enum MsoPresetThreeDFormat {
        msoPresetThreeDFormatMixed = -2,
        msoThreeD1 = 1,
        msoThreeD10 = 10,
        msoThreeD11 = 11,
        msoThreeD12 = 12,
        msoThreeD13 = 13,
        msoThreeD14 = 14,
        msoThreeD15 = 15,
        msoThreeD16 = 16,
        msoThreeD17 = 17,
        msoThreeD18 = 18,
        msoThreeD19 = 19,
        msoThreeD2 = 2,
        msoThreeD20 = 20,
        msoThreeD3 = 3,
        msoThreeD4 = 4,
        msoThreeD5 = 5,
        msoThreeD6 = 6,
        msoThreeD7 = 7,
        msoThreeD8 = 8,
        msoThreeD9 = 9,
    }

    const enum MsoReflectionType {
        msoReflectionType1 = 1,
        msoReflectionType2 = 2,
        msoReflectionType3 = 3,
        msoReflectionType4 = 4,
        msoReflectionType5 = 5,
        msoReflectionType6 = 6,
        msoReflectionType7 = 7,
        msoReflectionType8 = 8,
        msoReflectionType9 = 9,
        msoReflectionTypeMixed = -2,
        msoReflectionTypeNone = 0,
    }

    const enum MsoRelativeNodePosition {
        msoAfterLastSibling = 4,
        msoAfterNode = 2,
        msoBeforeFirstSibling = 3,
        msoBeforeNode = 1,
    }

    const enum MsoScaleFrom {
        msoScaleFromBottomRight = 2,
        msoScaleFromMiddle = 1,
        msoScaleFromTopLeft = 0,
    }

    const enum MsoScreenSize {
        msoScreenSize1024x768 = 4,
        msoScreenSize1152x882 = 5,
        msoScreenSize1152x900 = 6,
        msoScreenSize1280x1024 = 7,
        msoScreenSize1600x1200 = 8,
        msoScreenSize1800x1440 = 9,
        msoScreenSize1920x1200 = 10,
        msoScreenSize544x376 = 0,
        msoScreenSize640x480 = 1,
        msoScreenSize720x512 = 2,
        msoScreenSize800x600 = 3,
    }

    const enum MsoScriptLanguage {
        msoScriptLanguageASP = 3,
        msoScriptLanguageJava = 1,
        msoScriptLanguageOther = 4,
        msoScriptLanguageVisualBasic = 2,
    }

    const enum MsoScriptLocation {
        msoScriptLocationInBody = 2,
        msoScriptLocationInHead = 1,
    }

    const enum MsoSearchIn {
        msoSearchInCustom = 3,
        msoSearchInMyComputer = 0,
        msoSearchInMyNetworkPlaces = 2,
        msoSearchInOutlook = 1,
    }

    const enum MsoSegmentType {
        msoSegmentCurve = 1,
        msoSegmentLine = 0,
    }

    const enum MsoShadowStyle {
        msoShadowStyleInnerShadow = 1,
        msoShadowStyleMixed = -2,
        msoShadowStyleOuterShadow = 2,
    }

    const enum MsoShadowType {
        msoShadow1 = 1,
        msoShadow10 = 10,
        msoShadow11 = 11,
        msoShadow12 = 12,
        msoShadow13 = 13,
        msoShadow14 = 14,
        msoShadow15 = 15,
        msoShadow16 = 16,
        msoShadow17 = 17,
        msoShadow18 = 18,
        msoShadow19 = 19,
        msoShadow2 = 2,
        msoShadow20 = 20,
        msoShadow21 = 21,
        msoShadow22 = 22,
        msoShadow23 = 23,
        msoShadow24 = 24,
        msoShadow25 = 25,
        msoShadow26 = 26,
        msoShadow27 = 27,
        msoShadow28 = 28,
        msoShadow29 = 29,
        msoShadow3 = 3,
        msoShadow30 = 30,
        msoShadow31 = 31,
        msoShadow32 = 32,
        msoShadow33 = 33,
        msoShadow34 = 34,
        msoShadow35 = 35,
        msoShadow36 = 36,
        msoShadow37 = 37,
        msoShadow38 = 38,
        msoShadow39 = 39,
        msoShadow4 = 4,
        msoShadow40 = 40,
        msoShadow41 = 41,
        msoShadow42 = 42,
        msoShadow43 = 43,
        msoShadow5 = 5,
        msoShadow6 = 6,
        msoShadow7 = 7,
        msoShadow8 = 8,
        msoShadow9 = 9,
        msoShadowMixed = -2,
    }

    const enum MsoShapeStyleIndex {
        msoLineStylePreset1 = 10001,
        msoLineStylePreset10 = 10010,
        msoLineStylePreset11 = 10011,
        msoLineStylePreset12 = 10012,
        msoLineStylePreset13 = 10013,
        msoLineStylePreset14 = 10014,
        msoLineStylePreset15 = 10015,
        msoLineStylePreset16 = 10016,
        msoLineStylePreset17 = 10017,
        msoLineStylePreset18 = 10018,
        msoLineStylePreset19 = 10019,
        msoLineStylePreset2 = 10002,
        msoLineStylePreset20 = 10020,
        msoLineStylePreset21 = 10021,
        msoLineStylePreset3 = 10003,
        msoLineStylePreset4 = 10004,
        msoLineStylePreset5 = 10005,
        msoLineStylePreset6 = 10006,
        msoLineStylePreset7 = 10007,
        msoLineStylePreset8 = 10008,
        msoLineStylePreset9 = 10009,
        msoShapeStyleMixed = -2,
        msoShapeStyleNotAPreset = 0,
        msoShapeStylePreset1 = 1,
        msoShapeStylePreset10 = 10,
        msoShapeStylePreset11 = 11,
        msoShapeStylePreset12 = 12,
        msoShapeStylePreset13 = 13,
        msoShapeStylePreset14 = 14,
        msoShapeStylePreset15 = 15,
        msoShapeStylePreset16 = 16,
        msoShapeStylePreset17 = 17,
        msoShapeStylePreset18 = 18,
        msoShapeStylePreset19 = 19,
        msoShapeStylePreset2 = 2,
        msoShapeStylePreset20 = 20,
        msoShapeStylePreset21 = 21,
        msoShapeStylePreset22 = 22,
        msoShapeStylePreset23 = 23,
        msoShapeStylePreset24 = 24,
        msoShapeStylePreset25 = 25,
        msoShapeStylePreset26 = 26,
        msoShapeStylePreset27 = 27,
        msoShapeStylePreset28 = 28,
        msoShapeStylePreset29 = 29,
        msoShapeStylePreset3 = 3,
        msoShapeStylePreset30 = 30,
        msoShapeStylePreset31 = 31,
        msoShapeStylePreset32 = 32,
        msoShapeStylePreset33 = 33,
        msoShapeStylePreset34 = 34,
        msoShapeStylePreset35 = 35,
        msoShapeStylePreset36 = 36,
        msoShapeStylePreset37 = 37,
        msoShapeStylePreset38 = 38,
        msoShapeStylePreset39 = 39,
        msoShapeStylePreset4 = 4,
        msoShapeStylePreset40 = 40,
        msoShapeStylePreset41 = 41,
        msoShapeStylePreset42 = 42,
        msoShapeStylePreset5 = 5,
        msoShapeStylePreset6 = 6,
        msoShapeStylePreset7 = 7,
        msoShapeStylePreset8 = 8,
        msoShapeStylePreset9 = 9,
    }

    const enum MsoShapeType {
        msoAutoShape = 1,
        msoCallout = 2,
        msoCanvas = 20,
        msoChart = 3,
        msoComment = 4,
        msoDiagram = 21,
        msoEmbeddedOLEObject = 7,
        msoFormControl = 8,
        msoFreeform = 5,
        msoGroup = 6,
        msoInk = 22,
        msoInkComment = 23,
        msoLine = 9,
        msoLinkedOLEObject = 10,
        msoLinkedPicture = 11,
        msoMedia = 16,
        msoOLEControlObject = 12,
        msoPicture = 13,
        msoPlaceholder = 14,
        msoScriptAnchor = 18,
        msoShapeTypeMixed = -2,
        msoSlicer = 25,
        msoSmartArt = 24,
        msoTable = 19,
        msoTextBox = 17,
        msoTextEffect = 15,
    }

    const enum MsoSharedWorkspaceTaskPriority {
        msoSharedWorkspaceTaskPriorityHigh = 1,
        msoSharedWorkspaceTaskPriorityLow = 3,
        msoSharedWorkspaceTaskPriorityNormal = 2,
    }

    const enum MsoSharedWorkspaceTaskStatus {
        msoSharedWorkspaceTaskStatusCompleted = 3,
        msoSharedWorkspaceTaskStatusDeferred = 4,
        msoSharedWorkspaceTaskStatusInProgress = 2,
        msoSharedWorkspaceTaskStatusNotStarted = 1,
        msoSharedWorkspaceTaskStatusWaiting = 5,
    }

    const enum MsoSignatureSubset {
        msoSignatureSubsetAll = 5,
        msoSignatureSubsetSignatureLines = 2,
        msoSignatureSubsetSignatureLinesSigned = 3,
        msoSignatureSubsetSignatureLinesUnsigned = 4,
        msoSignatureSubsetSignaturesAllSigs = 0,
        msoSignatureSubsetSignaturesNonVisible = 1,
    }

    const enum MsoSmartArtNodePosition {
        msoSmartArtNodeAbove = 4,
        msoSmartArtNodeAfter = 2,
        msoSmartArtNodeBefore = 3,
        msoSmartArtNodeBelow = 5,
        msoSmartArtNodeDefault = 1,
    }

    const enum MsoSmartArtNodeType {
        msoSmartArtNodeTypeAssistant = 2,
        msoSmartArtNodeTypeDefault = 1,
    }

    const enum MsoSoftEdgeType {
        msoSoftEdgeType1 = 1,
        msoSoftEdgeType2 = 2,
        msoSoftEdgeType3 = 3,
        msoSoftEdgeType4 = 4,
        msoSoftEdgeType5 = 5,
        msoSoftEdgeType6 = 6,
        msoSoftEdgeTypeMixed = -2,
        msoSoftEdgeTypeNone = 0,
    }

    const enum MsoSortBy {
        msoSortByFileName = 1,
        msoSortByFileType = 3,
        msoSortByLastModified = 4,
        msoSortByNone = 5,
        msoSortBySize = 2,
    }

    const enum MsoSortOrder {
        msoSortOrderAscending = 1,
        msoSortOrderDescending = 2,
    }

    const enum MsoSyncAvailableType {
        msoSyncAvailableAnywhere = 2,
        msoSyncAvailableNone = 0,
        msoSyncAvailableOffline = 1,
    }

    const enum MsoSyncCompareType {
        msoSyncCompareAndMerge = 0,
        msoSyncCompareSideBySide = 1,
    }

    const enum MsoSyncConflictResolutionType {
        msoSyncConflictClientWins = 0,
        msoSyncConflictMerge = 2,
        msoSyncConflictServerWins = 1,
    }

    const enum MsoSyncErrorType {
        msoSyncErrorCouldNotCompare = 13,
        msoSyncErrorCouldNotConnect = 2,
        msoSyncErrorCouldNotOpen = 11,
        msoSyncErrorCouldNotResolve = 14,
        msoSyncErrorCouldNotUpdate = 12,
        msoSyncErrorFileInUse = 6,
        msoSyncErrorFileNotFound = 4,
        msoSyncErrorFileTooLarge = 5,
        msoSyncErrorNone = 0,
        msoSyncErrorNoNetwork = 15,
        msoSyncErrorOutOfSpace = 3,
        msoSyncErrorUnauthorizedUser = 1,
        msoSyncErrorUnknown = 16,
        msoSyncErrorUnknownDownload = 10,
        msoSyncErrorUnknownUpload = 9,
        msoSyncErrorVirusDownload = 8,
        msoSyncErrorVirusUpload = 7,
    }

    const enum MsoSyncEventType {
        msoSyncEventDownloadFailed = 2,
        msoSyncEventDownloadInitiated = 0,
        msoSyncEventDownloadNoChange = 6,
        msoSyncEventDownloadSucceeded = 1,
        msoSyncEventOffline = 7,
        msoSyncEventUploadFailed = 5,
        msoSyncEventUploadInitiated = 3,
        msoSyncEventUploadSucceeded = 4,
    }

    const enum MsoSyncStatusType {
        msoSyncStatusConflict = 4,
        msoSyncStatusError = 6,
        msoSyncStatusLatest = 1,
        msoSyncStatusLocalChanges = 3,
        msoSyncStatusNewerAvailable = 2,
        msoSyncStatusNoSharedWorkspace = 0,
        msoSyncStatusNotRoaming = 0,
        msoSyncStatusSuspended = 5,
    }

    const enum MsoSyncVersionType {
        msoSyncVersionLastViewed = 0,
        msoSyncVersionServer = 1,
    }

    const enum MsoTabStopType {
        msoTabStopCenter = 2,
        msoTabStopDecimal = 4,
        msoTabStopLeft = 1,
        msoTabStopMixed = -2,
        msoTabStopRight = 3,
    }

    const enum MsoTargetBrowser {
        msoTargetBrowserIE4 = 2,
        msoTargetBrowserIE5 = 3,
        msoTargetBrowserIE6 = 4,
        msoTargetBrowserV3 = 0,
        msoTargetBrowserV4 = 1,
    }

    const enum MsoTextCaps {
        msoAllCaps = 2,
        msoCapsMixed = -2,
        msoNoCaps = 0,
        msoSmallCaps = 1,
    }

    const enum MsoTextChangeCase {
        msoCaseLower = 2,
        msoCaseSentence = 1,
        msoCaseTitle = 4,
        msoCaseToggle = 5,
        msoCaseUpper = 3,
    }

    const enum MsoTextCharWrap {
        msoCharWrapMixed = -2,
        msoCustomCharWrap = 3,
        msoNoCharWrap = 0,
        msoStandardCharWrap = 1,
        msoStrictCharWrap = 2,
    }

    const enum MsoTextDirection {
        msoTextDirectionLeftToRight = 1,
        msoTextDirectionMixed = -2,
        msoTextDirectionRightToLeft = 2,
    }

    const enum MsoTextEffectAlignment {
        msoTextEffectAlignmentCentered = 2,
        msoTextEffectAlignmentLeft = 1,
        msoTextEffectAlignmentLetterJustify = 4,
        msoTextEffectAlignmentMixed = -2,
        msoTextEffectAlignmentRight = 3,
        msoTextEffectAlignmentStretchJustify = 6,
        msoTextEffectAlignmentWordJustify = 5,
    }

    const enum MsoTextFontAlign {
        msoFontAlignAuto = 0,
        msoFontAlignBaseline = 3,
        msoFontAlignBottom = 4,
        msoFontAlignCenter = 2,
        msoFontAlignMixed = -2,
        msoFontAlignTop = 1,
    }

    const enum MsoTextOrientation {
        msoTextOrientationDownward = 3,
        msoTextOrientationHorizontal = 1,
        msoTextOrientationHorizontalRotatedFarEast = 6,
        msoTextOrientationMixed = -2,
        msoTextOrientationUpward = 2,
        msoTextOrientationVertical = 5,
        msoTextOrientationVerticalFarEast = 4,
    }

    const enum MsoTextStrike {
        msoDoubleStrike = 2,
        msoNoStrike = 0,
        msoSingleStrike = 1,
        msoStrikeMixed = -2,
    }

    const enum MsoTextTabAlign {
        msoTabAlignCenter = 1,
        msoTabAlignDecimal = 3,
        msoTabAlignLeft = 0,
        msoTabAlignMixed = -2,
        msoTabAlignRight = 2,
    }

    const enum MsoTextUnderlineType {
        msoNoUnderline = 0,
        msoUnderlineDashHeavyLine = 8,
        msoUnderlineDashLine = 7,
        msoUnderlineDashLongHeavyLine = 10,
        msoUnderlineDashLongLine = 9,
        msoUnderlineDotDashHeavyLine = 12,
        msoUnderlineDotDashLine = 11,
        msoUnderlineDotDotDashHeavyLine = 14,
        msoUnderlineDotDotDashLine = 13,
        msoUnderlineDottedHeavyLine = 6,
        msoUnderlineDottedLine = 5,
        msoUnderlineDoubleLine = 3,
        msoUnderlineHeavyLine = 4,
        msoUnderlineMixed = -2,
        msoUnderlineSingleLine = 2,
        msoUnderlineWavyDoubleLine = 17,
        msoUnderlineWavyHeavyLine = 16,
        msoUnderlineWavyLine = 15,
        msoUnderlineWords = 1,
    }

    const enum MsoTextureAlignment {
        msoTextureAlignmentMixed = -2,
        msoTextureBottom = 7,
        msoTextureBottomLeft = 6,
        msoTextureBottomRight = 8,
        msoTextureCenter = 4,
        msoTextureLeft = 3,
        msoTextureRight = 5,
        msoTextureTop = 1,
        msoTextureTopLeft = 0,
        msoTextureTopRight = 2,
    }

    const enum MsoTextureType {
        msoTexturePreset = 1,
        msoTextureTypeMixed = -2,
        msoTextureUserDefined = 2,
    }

    const enum MsoThemeColorIndex {
        msoNotThemeColor = 0,
        msoThemeColorAccent1 = 5,
        msoThemeColorAccent2 = 6,
        msoThemeColorAccent3 = 7,
        msoThemeColorAccent4 = 8,
        msoThemeColorAccent5 = 9,
        msoThemeColorAccent6 = 10,
        msoThemeColorBackground1 = 14,
        msoThemeColorBackground2 = 16,
        msoThemeColorDark1 = 1,
        msoThemeColorDark2 = 3,
        msoThemeColorFollowedHyperlink = 12,
        msoThemeColorHyperlink = 11,
        msoThemeColorLight1 = 2,
        msoThemeColorLight2 = 4,
        msoThemeColorMixed = -2,
        msoThemeColorText1 = 13,
        msoThemeColorText2 = 15,
    }

    const enum MsoThemeColorSchemeIndex {
        msoThemeAccent1 = 5,
        msoThemeAccent2 = 6,
        msoThemeAccent3 = 7,
        msoThemeAccent4 = 8,
        msoThemeAccent5 = 9,
        msoThemeAccent6 = 10,
        msoThemeDark1 = 1,
        msoThemeDark2 = 3,
        msoThemeFollowedHyperlink = 12,
        msoThemeHyperlink = 11,
        msoThemeLight1 = 2,
        msoThemeLight2 = 4,
    }

    const enum MsoTriState {
        msoCTrue = 1,
        msoFalse = 0,
        msoTriStateMixed = -2,
        msoTriStateToggle = -3,
        msoTrue = -1,
    }

    const enum MsoVerticalAnchor {
        msoAnchorBottom = 4,
        msoAnchorBottomBaseLine = 5,
        msoAnchorMiddle = 3,
        msoAnchorTop = 1,
        msoAnchorTopBaseline = 2,
        msoVerticalAnchorMixed = -2,
    }

    const enum MsoWarpFormat {
        msoWarpFormat1 = 0,
        msoWarpFormat10 = 9,
        msoWarpFormat11 = 10,
        msoWarpFormat12 = 11,
        msoWarpFormat13 = 12,
        msoWarpFormat14 = 13,
        msoWarpFormat15 = 14,
        msoWarpFormat16 = 15,
        msoWarpFormat17 = 16,
        msoWarpFormat18 = 17,
        msoWarpFormat19 = 18,
        msoWarpFormat2 = 1,
        msoWarpFormat20 = 19,
        msoWarpFormat21 = 20,
        msoWarpFormat22 = 21,
        msoWarpFormat23 = 22,
        msoWarpFormat24 = 23,
        msoWarpFormat25 = 24,
        msoWarpFormat26 = 25,
        msoWarpFormat27 = 26,
        msoWarpFormat28 = 27,
        msoWarpFormat29 = 28,
        msoWarpFormat3 = 2,
        msoWarpFormat30 = 29,
        msoWarpFormat31 = 30,
        msoWarpFormat32 = 31,
        msoWarpFormat33 = 32,
        msoWarpFormat34 = 33,
        msoWarpFormat35 = 34,
        msoWarpFormat36 = 35,
        msoWarpFormat37 = 36,
        msoWarpFormat4 = 3,
        msoWarpFormat5 = 4,
        msoWarpFormat6 = 5,
        msoWarpFormat7 = 6,
        msoWarpFormat8 = 7,
        msoWarpFormat9 = 8,
        msoWarpFormatMixed = -2,
    }

    const enum MsoWizardActType {
        msoWizardActActive = 1,
        msoWizardActInactive = 0,
        msoWizardActResume = 3,
        msoWizardActSuspend = 2,
    }

    const enum MsoWizardMsgType {
        msoWizardMsgLocalStateOff = 2,
        msoWizardMsgLocalStateOn = 1,
        msoWizardMsgResuming = 5,
        msoWizardMsgShowHelp = 3,
        msoWizardMsgSuspending = 4,
    }

    const enum MsoZOrderCmd {
        msoBringForward = 2,
        msoBringInFrontOfText = 4,
        msoBringToFront = 0,
        msoSendBackward = 3,
        msoSendBehindText = 5,
        msoSendToBack = 1,
    }

    const enum RibbonControlSize {
        RibbonControlSizeLarge = 1,
        RibbonControlSizeRegular = 0,
    }

    const enum SignatureDetail {
        sigdetApplicationName = 1,
        sigdetApplicationVersion = 2,
        sigdetColorDepth = 8,
        sigdetDelSuggSigner = 16,
        sigdetDelSuggSignerEmail = 20,
        sigdetDelSuggSignerEmailSet = 21,
        sigdetDelSuggSignerLine2 = 18,
        sigdetDelSuggSignerLine2Set = 19,
        sigdetDelSuggSignerSet = 17,
        sigdetDocPreviewImg = 10,
        sigdetHashAlgorithm = 14,
        sigdetHorizResolution = 6,
        sigdetIPCurrentView = 12,
        sigdetIPFormHash = 11,
        sigdetLocalSigningTime = 0,
        sigdetNumberOfMonitors = 5,
        sigdetOfficeVersion = 3,
        sigdetShouldShowViewWarning = 15,
        sigdetSignatureType = 13,
        sigdetSignedData = 9,
        sigdetVertResolution = 7,
        sigdetWindowsVersion = 4,
    }

    const enum SignatureLineImage {
        siglnimgSigned = 4,
        siglnimgSignedInvalid = 3,
        siglnimgSignedValid = 2,
        siglnimgSoftwareRequired = 0,
        siglnimgUnsigned = 1,
    }

    const enum SignatureProviderDetail {
        sigprovdetHashAlgorithm = 1,
        sigprovdetUIOnly = 2,
        sigprovdetUrl = 0,
        sigprovdetUseOfficeStampUI = 4,
        sigprovdetUseOfficeUI = 3,
    }

    const enum SignatureType {
        sigtypeMax = 3,
        sigtypeNonVisible = 1,
        sigtypeSignatureLine = 2,
        sigtypeUnknown = 0,
    }

    const enum XlAxisCrosses {
        xlAxisCrossesAutomatic = -4105,
        xlAxisCrossesCustom = -4114,
        xlAxisCrossesMaximum = 2,
        xlAxisCrossesMinimum = 4,
    }

    const enum XlAxisGroup {
        xlPrimary = 1,
        xlSecondary = 2,
    }

    const enum XlAxisType {
        xlCategory = 1,
        xlSeriesAxis = 3,
        xlValue = 2,
    }

    const enum XlBarShape {
        xlBox = 0,
        xlConeToMax = 5,
        xlConeToPoint = 4,
        xlCylinder = 3,
        xlPyramidToMax = 2,
        xlPyramidToPoint = 1,
    }

    const enum XlBorderWeight {
        xlHairline = 1,
        xlMedium = -4138,
        xlThick = 4,
        xlThin = 2,
    }

    const enum XlCategoryType {
        xlAutomaticScale = -4105,
        xlCategoryScale = 2,
        xlTimeScale = 3,
    }

    const enum XlChartElementPosition {
        xlChartElementPositionAutomatic = -4105,
        xlChartElementPositionCustom = -4114,
    }

    const enum XlChartItem {
        xlAxis = 21,
        xlAxisTitle = 17,
        xlChartArea = 2,
        xlChartTitle = 4,
        xlCorners = 6,
        xlDataLabel = 0,
        xlDataTable = 7,
        xlDisplayUnitLabel = 30,
        xlDownBars = 20,
        xlDropLines = 26,
        xlErrorBars = 9,
        xlFloor = 23,
        xlHiLoLines = 25,
        xlLeaderLines = 29,
        xlLegend = 24,
        xlLegendEntry = 12,
        xlLegendKey = 13,
        xlMajorGridlines = 15,
        xlMinorGridlines = 16,
        xlNothing = 28,
        xlPivotChartDropZone = 32,
        xlPivotChartFieldButton = 31,
        xlPlotArea = 19,
        xlRadarAxisLabels = 27,
        xlSeries = 3,
        xlSeriesLines = 22,
        xlShape = 14,
        xlTrendline = 8,
        xlUpBars = 18,
        xlWalls = 5,
        xlXErrorBars = 10,
        xlYErrorBars = 11,
    }

    const enum XlChartOrientation {
        xlDownward = -4170,
        xlHorizontal = -4128,
        xlUpward = -4171,
        xlVertical = -4166,
    }

    const enum XlChartPictureType {
        xlStack = 2,
        xlStackScale = 3,
        xlStretch = 1,
    }

    const enum XlChartSplitType {
        xlSplitByCustomSplit = 4,
        xlSplitByPercentValue = 3,
        xlSplitByPosition = 1,
        xlSplitByValue = 2,
    }

    const enum XlChartType {
        xl3DArea = -4098,
        xl3DAreaStacked = 78,
        xl3DAreaStacked100 = 79,
        xl3DBarClustered = 60,
        xl3DBarStacked = 61,
        xl3DBarStacked100 = 62,
        xl3DColumn = -4100,
        xl3DColumnClustered = 54,
        xl3DColumnStacked = 55,
        xl3DColumnStacked100 = 56,
        xl3DLine = -4101,
        xl3DPie = -4102,
        xl3DPieExploded = 70,
        xlArea = 1,
        xlAreaStacked = 76,
        xlAreaStacked100 = 77,
        xlBarClustered = 57,
        xlBarOfPie = 71,
        xlBarStacked = 58,
        xlBarStacked100 = 59,
        xlBubble = 15,
        xlBubble3DEffect = 87,
        xlColumnClustered = 51,
        xlColumnStacked = 52,
        xlColumnStacked100 = 53,
        xlConeBarClustered = 102,
        xlConeBarStacked = 103,
        xlConeBarStacked100 = 104,
        xlConeCol = 105,
        xlConeColClustered = 99,
        xlConeColStacked = 100,
        xlConeColStacked100 = 101,
        xlCylinderBarClustered = 95,
        xlCylinderBarStacked = 96,
        xlCylinderBarStacked100 = 97,
        xlCylinderCol = 98,
        xlCylinderColClustered = 92,
        xlCylinderColStacked = 93,
        xlCylinderColStacked100 = 94,
        xlDoughnut = -4120,
        xlDoughnutExploded = 80,
        xlLine = 4,
        xlLineMarkers = 65,
        xlLineMarkersStacked = 66,
        xlLineMarkersStacked100 = 67,
        xlLineStacked = 63,
        xlLineStacked100 = 64,
        xlPie = 5,
        xlPieExploded = 69,
        xlPieOfPie = 68,
        xlPyramidBarClustered = 109,
        xlPyramidBarStacked = 110,
        xlPyramidBarStacked100 = 111,
        xlPyramidCol = 112,
        xlPyramidColClustered = 106,
        xlPyramidColStacked = 107,
        xlPyramidColStacked100 = 108,
        xlRadar = -4151,
        xlRadarFilled = 82,
        xlRadarMarkers = 81,
        xlStockHLC = 88,
        xlStockOHLC = 89,
        xlStockVHLC = 90,
        xlStockVOHLC = 91,
        xlSurface = 83,
        xlSurfaceTopView = 85,
        xlSurfaceTopViewWireframe = 86,
        xlSurfaceWireframe = 84,
        xlXYScatter = -4169,
        xlXYScatterLines = 74,
        xlXYScatterLinesNoMarkers = 75,
        xlXYScatterSmooth = 72,
        xlXYScatterSmoothNoMarkers = 73,
    }

    const enum XlColorIndex {
        xlColorIndexAutomatic = -4105,
        xlColorIndexNone = -4142,
    }

    const enum XlConstants {
        xl3DBar = -4099,
        xl3DSurface = -4103,
        xlAbove = 0,
        xlAutomatic = -4105,
        xlBar = 2,
        xlBelow = 1,
        xlBoth = 1,
        xlBottom = -4107,
        xlCenter = -4108,
        xlChecker = 9,
        xlCircle = 8,
        xlColumn = 3,
        xlCombination = -4111,
        xlCorner = 2,
        xlCrissCross = 16,
        xlCross = 4,
        xlCustom = -4114,
        xlDefaultAutoFormat = -1,
        xlDiamond = 2,
        xlDistributed = -4117,
        xlFill = 5,
        xlFixedValue = 1,
        xlGeneral = 1,
        xlGray16 = 17,
        xlGray25 = -4124,
        xlGray50 = -4125,
        xlGray75 = -4126,
        xlGray8 = 18,
        xlGrid = 15,
        xlHigh = -4127,
        xlInside = 2,
        xlJustify = -4130,
        xlLeft = -4131,
        xlLightDown = 13,
        xlLightHorizontal = 11,
        xlLightUp = 14,
        xlLightVertical = 12,
        xlLow = -4134,
        xlMaximum = 2,
        xlMinimum = 4,
        xlMinusValues = 3,
        xlNextToAxis = 4,
        xlNone = -4142,
        xlOpaque = 3,
        xlOutside = 3,
        xlPercent = 2,
        xlPlus = 9,
        xlPlusValues = 2,
        xlRight = -4152,
        xlScale = 3,
        xlSemiGray75 = 10,
        xlShowLabel = 4,
        xlShowLabelAndPercent = 5,
        xlShowPercent = 3,
        xlShowValue = 2,
        xlSingle = 2,
        xlSolid = 1,
        xlSquare = 1,
        xlStar = 5,
        xlStError = 4,
        xlTop = -4160,
        xlTransparent = 2,
        xlTriangle = 3,
    }

    const enum XlDataLabelPosition {
        xlLabelPositionAbove = 0,
        xlLabelPositionBelow = 1,
        xlLabelPositionBestFit = 5,
        xlLabelPositionCenter = -4108,
        xlLabelPositionCustom = 7,
        xlLabelPositionInsideBase = 4,
        xlLabelPositionInsideEnd = 3,
        xlLabelPositionLeft = -4131,
        xlLabelPositionMixed = 6,
        xlLabelPositionOutsideEnd = 2,
        xlLabelPositionRight = -4152,
    }

    const enum XlDataLabelsType {
        xlDataLabelsShowBubbleSizes = 6,
        xlDataLabelsShowLabel = 4,
        xlDataLabelsShowLabelAndPercent = 5,
        xlDataLabelsShowNone = -4142,
        xlDataLabelsShowPercent = 3,
        xlDataLabelsShowValue = 2,
    }

    const enum XlDisplayBlanksAs {
        xlInterpolated = 3,
        xlNotPlotted = 1,
        xlZero = 2,
    }

    const enum XlDisplayUnit {
        xlDisplayUnitCustom = -4114,
        xlDisplayUnitNone = -4142,
        xlHundredMillions = -8,
        xlHundreds = -2,
        xlHundredThousands = -5,
        xlMillionMillions = -10,
        xlMillions = -6,
        xlTenMillions = -7,
        xlTenThousands = -4,
        xlThousandMillions = -9,
        xlThousands = -3,
    }

    const enum XlEndStyleCap {
        xlCap = 1,
        xlNoCap = 2,
    }

    const enum XlErrorBarDirection {
        xlChartX = -4168,
        xlChartY = 1,
    }

    const enum XlErrorBarInclude {
        xlErrorBarIncludeBoth = 1,
        xlErrorBarIncludeMinusValues = 3,
        xlErrorBarIncludeNone = -4142,
        xlErrorBarIncludePlusValues = 2,
    }

    const enum XlErrorBarType {
        xlErrorBarTypeCustom = -4114,
        xlErrorBarTypeFixedValue = 1,
        xlErrorBarTypePercent = 2,
        xlErrorBarTypeStDev = -4155,
        xlErrorBarTypeStError = 4,
    }

    const enum XlHAlign {
        xlHAlignCenter = -4108,
        xlHAlignCenterAcrossSelection = 7,
        xlHAlignDistributed = -4117,
        xlHAlignFill = 5,
        xlHAlignGeneral = 1,
        xlHAlignJustify = -4130,
        xlHAlignLeft = -4131,
        xlHAlignRight = -4152,
    }

    const enum XlLegendPosition {
        xlLegendPositionBottom = -4107,
        xlLegendPositionCorner = 2,
        xlLegendPositionCustom = -4161,
        xlLegendPositionLeft = -4131,
        xlLegendPositionRight = -4152,
        xlLegendPositionTop = -4160,
    }

    const enum XlMarkerStyle {
        xlMarkerStyleAutomatic = -4105,
        xlMarkerStyleCircle = 8,
        xlMarkerStyleDash = -4115,
        xlMarkerStyleDiamond = 2,
        xlMarkerStyleDot = -4118,
        xlMarkerStyleNone = -4142,
        xlMarkerStylePicture = -4147,
        xlMarkerStylePlus = 9,
        xlMarkerStyleSquare = 1,
        xlMarkerStyleStar = 5,
        xlMarkerStyleTriangle = 3,
        xlMarkerStyleX = -4168,
    }

    const enum XlPieSliceIndex {
        xlCenterPoint = 5,
        xlInnerCenterPoint = 8,
        xlInnerClockwisePoint = 7,
        xlInnerCounterClockwisePoint = 9,
        xlMidClockwiseRadiusPoint = 4,
        xlMidCounterClockwiseRadiusPoint = 6,
        xlOuterCenterPoint = 2,
        xlOuterClockwisePoint = 3,
        xlOuterCounterClockwisePoint = 1,
    }

    const enum XlPieSliceLocation {
        xlHorizontalCoordinate = 1,
        xlVerticalCoordinate = 2,
    }

    const enum XlPivotFieldOrientation {
        xlColumnField = 2,
        xlDataField = 4,
        xlHidden = 0,
        xlPageField = 3,
        xlRowField = 1,
    }

    const enum XlReadingOrder {
        xlContext = -5002,
        xlLTR = -5003,
        xlRTL = -5004,
    }

    const enum XlRowCol {
        xlColumns = 2,
        xlRows = 1,
    }

    const enum XlScaleType {
        xlScaleLinear = -4132,
        xlScaleLogarithmic = -4133,
    }

    const enum XlSizeRepresents {
        xlSizeIsArea = 1,
        xlSizeIsWidth = 2,
    }

    const enum XlTickLabelOrientation {
        xlTickLabelOrientationAutomatic = -4105,
        xlTickLabelOrientationDownward = -4170,
        xlTickLabelOrientationHorizontal = -4128,
        xlTickLabelOrientationUpward = -4171,
        xlTickLabelOrientationVertical = -4166,
    }

    const enum XlTickLabelPosition {
        xlTickLabelPositionHigh = -4127,
        xlTickLabelPositionLow = -4134,
        xlTickLabelPositionNextToAxis = 4,
        xlTickLabelPositionNone = -4142,
    }

    const enum XlTickMark {
        xlTickMarkCross = 4,
        xlTickMarkInside = 2,
        xlTickMarkNone = -4142,
        xlTickMarkOutside = 3,
    }

    const enum XlTimeUnit {
        xlDays = 0,
        xlMonths = 1,
        xlYears = 2,
    }

    const enum XlTrendlineType {
        xlExponential = 5,
        xlLinear = -4132,
        xlLogarithmic = -4133,
        xlMovingAvg = 6,
        xlPolynomial = 3,
        xlPower = 4,
    }

    const enum XlUnderlineStyle {
        xlUnderlineStyleDouble = -4119,
        xlUnderlineStyleDoubleAccounting = 5,
        xlUnderlineStyleNone = -4142,
        xlUnderlineStyleSingle = 2,
        xlUnderlineStyleSingleAccounting = 4,
    }

    const enum XlVAlign {
        xlVAlignBottom = -4107,
        xlVAlignCenter = -4108,
        xlVAlignDistributed = -4117,
        xlVAlignJustify = -4130,
        xlVAlignTop = -4160,
    }

    class Adjustments {
        private 'Office.Adjustments_typekey': Adjustments;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): number;
        readonly Parent: any;
    }

    class AnswerWizard {
        private 'Office.AnswerWizard_typekey': AnswerWizard;
        private constructor();
        readonly Application: any;
        ClearFileList(): void;
        readonly Creator: number;
        readonly Files: AnswerWizardFiles;
        readonly Parent: any;
        ResetFileList(): void;
    }

    class AnswerWizardFiles {
        private 'Office.AnswerWizardFiles_typekey': AnswerWizardFiles;
        private constructor();
        Add(FileName: string): void;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Delete(FileName: string): void;
        Item(Index: number): string;
        readonly Parent: any;
    }

    class Assistant {
        private 'Office.Assistant_typekey': Assistant;
        private constructor();
        ActivateWizard(WizardID: number, act: MsoWizardActType, Animation?: any): void;
        Animation: MsoAnimationType;
        readonly Application: any;
        AssistWithAlerts: boolean;
        AssistWithHelp: boolean;
        AssistWithWizards: boolean;
        readonly BalloonError: MsoBalloonErrorType;
        readonly Creator: number;
        DoAlert(bstrAlertTitle: string, bstrAlertText: string, alb: MsoAlertButtonType, alc: MsoAlertIconType, ald: MsoAlertDefaultType, alq: MsoAlertCancelType, varfSysAlert: boolean): number;
        EndWizard(WizardID: number, varfSuccess: boolean, Animation?: any): void;
        FeatureTips: boolean;
        FileName: string;
        GuessHelp: boolean;
        Help(): void;
        HighPriorityTips: boolean;
        readonly Item: string;
        KeyboardShortcutTips: boolean;
        Left: number;
        MouseTips: boolean;
        Move(xLeft: number, yTop: number): void;
        MoveWhenInTheWay: boolean;
        readonly Name: string;
        readonly NewBalloon: Balloon;
        On: boolean;
        readonly Parent: any;
        Reduced: boolean;
        ResetTips(): void;
        SearchWhenProgramming: boolean;
        Sounds: boolean;
        StartWizard(On: boolean, Callback: string, PrivateX: number, Animation?: any, CustomTeaser?: any, Top?: any, Left?: any, Bottom?: any, Right?: any): number;
        TipOfDay: boolean;
        Top: number;
        Visible: boolean;
    }

    class Balloon {
        private 'Office.Balloon_typekey': Balloon;
        private constructor();
        Animation: MsoAnimationType;
        readonly Application: any;
        BalloonType: MsoBalloonType;
        Button: MsoButtonSetType;
        Callback: string;
        readonly Checkboxes: any;
        Close(): void;
        readonly Creator: number;
        Heading: string;
        Icon: MsoIconType;
        readonly Labels: any;
        Mode: MsoModeType;
        readonly Name: string;
        readonly Parent: any;
        Private: number;
        SetAvoidRectangle(Left: number, Top: number, Right: number, Bottom: number): void;
        Show(): MsoBalloonButtonType;
        Text: string;
    }

    class BulletFormat2 {
        private 'Office.BulletFormat2_typekey': BulletFormat2;
        private constructor();
        readonly Application: any;
        Character: number;
        readonly Creator: number;
        readonly Font: Font2;
        readonly Number: number;
        readonly Parent: any;
        Picture(FileName: string): void;
        RelativeSize: number;
        StartValue: number;
        Style: MsoNumberedBulletStyle;
        Type: MsoBulletType;
        UseTextColor: MsoTriState;
        UseTextFont: MsoTriState;
        Visible: MsoTriState;
    }

    class CalloutFormat {
        private 'Office.CalloutFormat_typekey': CalloutFormat;
        private constructor();
        Accent: MsoTriState;
        Angle: MsoCalloutAngleType;
        readonly Application: any;
        AutoAttach: MsoTriState;
        readonly AutoLength: MsoTriState;
        AutomaticLength(): void;
        Border: MsoTriState;
        readonly Creator: number;
        CustomDrop(Drop: number): void;
        CustomLength(Length: number): void;
        readonly Drop: number;
        readonly DropType: MsoCalloutDropType;
        Gap: number;
        readonly Length: number;
        readonly Parent: any;
        PresetDrop(DropType: MsoCalloutDropType): void;
        Type: MsoCalloutType;
    }

    class CanvasShapes {
        private 'Office.CanvasShapes_typekey': CanvasShapes;
        private constructor();
        AddCallout(Type: MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddConnector(Type: MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddCurve(SafeArrayOfPoints: any): Shape;
        AddLabel(Orientation: MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;

        /**
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddPicture(FileName: string, LinkToFile: MsoTriState, SaveWithDocument: MsoTriState, Left: number, Top: number, Width?: number, Height?: number): Shape;
        AddPolyline(SafeArrayOfPoints: any): Shape;
        AddShape(Type: MsoAutoShapeType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextbox(Orientation: MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextEffect(PresetTextEffect: MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: MsoTriState, FontItalic: MsoTriState, Left: number, Top: number): Shape;
        readonly Application: any;
        readonly Background: Shape;
        BuildFreeform(EditingType: MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Shape;
        readonly Parent: any;
        Range(Index: any): ShapeRange;
        SelectAll(): void;
    }

    class ChartColorFormat {
        private 'Office.ChartColorFormat_typekey': ChartColorFormat;
        private constructor();
        readonly _Default: number;
        readonly Application: any;
        readonly Creator: number;
        readonly Parent: any;
        RGB: number;
        SchemeColor: number;
        readonly Type: number;
    }

    class ChartFillFormat {
        private 'Office.ChartFillFormat_typekey': ChartFillFormat;
        private constructor();
        readonly Application: any;
        readonly BackColor: ChartColorFormat;
        readonly Creator: number;
        readonly ForeColor: ChartColorFormat;
        readonly GradientColorType: number;
        readonly GradientDegree: number;
        readonly GradientStyle: number;
        readonly GradientVariant: number;
        OneColorGradient(Style: number, Variant: number, Degree: number): void;
        readonly Parent: any;
        readonly Pattern: number;
        Patterned(Pattern: number): void;
        PresetGradient(Style: number, Variant: number, PresetGradientType: number): void;
        readonly PresetGradientType: number;
        readonly PresetTexture: number;
        PresetTextured(PresetTexture: number): void;
        Solid(): void;
        readonly TextureName: string;
        readonly TextureType: number;
        TwoColorGradient(Style: number, Variant: number): void;
        readonly Type: number;
        UserPicture(PictureFile: any, PictureFormat: any, PictureStackUnit: any, PicturePlacement: any): void;
        UserTextured(TextureFile: string): void;
        Visible: number;
    }

    class ChartFont {
        private 'Office.ChartFont_typekey': ChartFont;
        private constructor();
        readonly Application: any;
        Background: any;
        Bold: any;
        Color: any;
        ColorIndex: any;
        readonly Creator: number;
        FontStyle: any;
        Italic: any;
        Name: any;
        OutlineFont: any;
        readonly Parent: any;
        Shadow: any;
        Size: any;
        StrikeThrough: any;
        Subscript: any;
        Superscript: any;
        Underline: any;
    }

    class ColorFormat {
        private 'Office.ColorFormat_typekey': ColorFormat;
        private constructor();
        readonly Application: any;
        Brightness: number;
        readonly Creator: number;
        ObjectThemeColor: MsoThemeColorIndex;
        readonly Parent: any;
        RGB: number;
        SchemeColor: number;
        TintAndShade: number;
        readonly Type: MsoColorType;
    }

    class COMAddIn {
        private 'Office.COMAddIn_typekey': COMAddIn;
        private constructor();
        readonly Application: any;
        Connect: boolean;
        readonly Creator: number;
        Description: string;
        readonly Guid: string;
        Object: any;
        readonly Parent: any;
        readonly ProgId: string;
    }

    class COMAddIns {
        private 'Office.COMAddIns_typekey': COMAddIns;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): COMAddIn;
        readonly Parent: any;
        SetAppModal(varfModal: boolean): void;
        Update(): void;
    }

    class CommandBar {
        private 'Office.CommandBar_typekey': CommandBar;
        private constructor();
        accChild(varChild: any): any;
        readonly accChildCount: number;
        accDefaultAction(varChild?: any): string;
        accDescription(varChild?: any): string;
        accDoDefaultAction(varChild?: any): void;
        readonly accFocus: any;
        accHelp(varChild?: any): string;
        accHelpTopic(pszHelpFile: string, varChild?: any): number;
        accHitTest(xLeft: number, yTop: number): any;
        accKeyboardShortcut(varChild?: any): string;
        accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        accName(varChild?: any): string;
        accNavigate(navDir: number, varStart?: any): any;
        readonly accParent: any;
        accRole(varChild?: any): any;
        accSelect(flagsSelect: number, varChild?: any): void;
        readonly accSelection: any;
        accState(varChild?: any): any;
        accValue(varChild?: any): string;
        AdaptiveMenu: boolean;
        readonly Application: any;
        readonly BuiltIn: boolean;
        Context: string;
        readonly Controls: CommandBarControls;
        readonly Creator: number;
        Delete(): void;
        Enabled: boolean;
        FindControl(Type?: any, Id?: any, Tag?: any, Visible?: any, Recursive?: any): CommandBarControl;
        Height: number;
        readonly Id: number;
        readonly Index: number;
        readonly InstanceId: number;
        readonly InstanceIdPtr: any;
        Left: number;
        Name: string;
        NameLocal: string;
        readonly Parent: any;
        Position: MsoBarPosition;
        Protection: MsoBarProtection;
        Reset(): void;
        RowIndex: number;
        ShowPopup(x?: any, y?: any): void;
        Top: number;
        readonly Type: MsoBarType;
        Visible: boolean;
        Width: number;
    }

    class CommandBarButton {
        private 'Office.CommandBarButton_typekey': CommandBarButton;
        private constructor();
        accChild(varChild: any): any;
        readonly accChildCount: number;
        accDefaultAction(varChild?: any): string;
        accDescription(varChild?: any): string;
        accDoDefaultAction(varChild?: any): void;
        readonly accFocus: any;
        accHelp(varChild?: any): string;
        accHelpTopic(pszHelpFile: string, varChild?: any): number;
        accHitTest(xLeft: number, yTop: number): any;
        accKeyboardShortcut(varChild?: any): string;
        accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        accName(varChild?: any): string;
        accNavigate(navDir: number, varStart?: any): any;
        readonly accParent: any;
        accRole(varChild?: any): any;
        accSelect(flagsSelect: number, varChild?: any): void;
        readonly accSelection: any;
        accState(varChild?: any): any;
        accValue(varChild?: any): string;
        readonly Application: any;
        BeginGroup: boolean;
        readonly BuiltIn: boolean;
        BuiltInFace: boolean;
        Caption: string;
        readonly Control: any;
        Copy(Bar?: any, Before?: any): CommandBarControl;
        CopyFace(): void;
        readonly Creator: number;
        Delete(Temporary?: any): void;
        DescriptionText: string;
        Enabled: boolean;
        Execute(): void;
        FaceId: number;
        Height: number;
        HelpContextId: number;
        HelpFile: string;
        HyperlinkType: MsoCommandBarButtonHyperlinkType;
        readonly Id: number;
        readonly Index: number;
        readonly InstanceId: number;
        readonly InstanceIdPtr: any;
        readonly IsPriorityDropped: boolean;
        readonly Left: number;
        Mask: stdole.IPictureDisp;
        Move(Bar?: any, Before?: any): CommandBarControl;
        OLEUsage: MsoControlOLEUsage;
        OnAction: string;
        Parameter: string;
        readonly Parent: CommandBar;
        PasteFace(): void;
        Picture: stdole.IPictureDisp;
        Priority: number;
        Reserved1(): void;
        Reserved2(): void;
        Reserved3(): void;
        Reserved4(): void;
        Reserved5(): void;
        Reserved6(): void;
        Reserved7(): void;
        Reset(): void;
        SetFocus(): void;
        ShortcutText: string;
        State: MsoButtonState;
        Style: MsoButtonStyle;
        Tag: string;
        TooltipText: string;
        readonly Top: number;
        readonly Type: MsoControlType;
        Visible: boolean;
        Width: number;
    }

    class CommandBarComboBox {
        private 'Office.CommandBarComboBox_typekey': CommandBarComboBox;
        private constructor();
        accChild(varChild: any): any;
        readonly accChildCount: number;
        accDefaultAction(varChild?: any): string;
        accDescription(varChild?: any): string;
        accDoDefaultAction(varChild?: any): void;
        readonly accFocus: any;
        accHelp(varChild?: any): string;
        accHelpTopic(pszHelpFile: string, varChild?: any): number;
        accHitTest(xLeft: number, yTop: number): any;
        accKeyboardShortcut(varChild?: any): string;
        accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        accName(varChild?: any): string;
        accNavigate(navDir: number, varStart?: any): any;
        readonly accParent: any;
        accRole(varChild?: any): any;
        accSelect(flagsSelect: number, varChild?: any): void;
        readonly accSelection: any;
        accState(varChild?: any): any;
        accValue(varChild?: any): string;
        AddItem(Text: string, Index?: any): void;
        readonly Application: any;
        BeginGroup: boolean;
        readonly BuiltIn: boolean;
        Caption: string;
        Clear(): void;
        readonly Control: any;
        Copy(Bar?: any, Before?: any): CommandBarControl;
        readonly Creator: number;
        Delete(Temporary?: any): void;
        DescriptionText: string;
        DropDownLines: number;
        DropDownWidth: number;
        Enabled: boolean;
        Execute(): void;
        Height: number;
        HelpContextId: number;
        HelpFile: string;
        readonly Id: number;
        readonly Index: number;
        readonly InstanceId: number;
        readonly InstanceIdPtr: any;
        readonly IsPriorityDropped: boolean;
        readonly Left: number;
        List(Index: number): string;
        readonly ListCount: number;
        ListHeaderCount: number;
        ListIndex: number;
        Move(Bar?: any, Before?: any): CommandBarControl;
        OLEUsage: MsoControlOLEUsage;
        OnAction: string;
        Parameter: string;
        readonly Parent: CommandBar;
        Priority: number;
        RemoveItem(Index: number): void;
        Reserved1(): void;
        Reserved2(): void;
        Reserved3(): void;
        Reserved4(): void;
        Reserved5(): void;
        Reserved6(): void;
        Reserved7(): void;
        Reset(): void;
        SetFocus(): void;
        Style: MsoComboStyle;
        Tag: string;
        Text: string;
        TooltipText: string;
        readonly Top: number;
        readonly Type: MsoControlType;
        Visible: boolean;
        Width: number;
    }

    class CommandBarControl {
        private 'Office.CommandBarControl_typekey': CommandBarControl;
        private constructor();
        accChild(varChild: any): any;
        readonly accChildCount: number;
        accDefaultAction(varChild?: any): string;
        accDescription(varChild?: any): string;
        accDoDefaultAction(varChild?: any): void;
        readonly accFocus: any;
        accHelp(varChild?: any): string;
        accHelpTopic(pszHelpFile: string, varChild?: any): number;
        accHitTest(xLeft: number, yTop: number): any;
        accKeyboardShortcut(varChild?: any): string;
        accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        accName(varChild?: any): string;
        accNavigate(navDir: number, varStart?: any): any;
        readonly accParent: any;
        accRole(varChild?: any): any;
        accSelect(flagsSelect: number, varChild?: any): void;
        readonly accSelection: any;
        accState(varChild?: any): any;
        accValue(varChild?: any): string;
        readonly Application: any;
        BeginGroup: boolean;
        readonly BuiltIn: boolean;
        Caption: string;
        readonly Control: any;
        Copy(Bar?: any, Before?: any): CommandBarControl;
        readonly Creator: number;
        Delete(Temporary?: any): void;
        DescriptionText: string;
        Enabled: boolean;
        Execute(): void;
        Height: number;
        HelpContextId: number;
        HelpFile: string;
        readonly Id: number;
        readonly Index: number;
        readonly InstanceId: number;
        readonly IsPriorityDropped: boolean;
        readonly Left: number;
        Move(Bar?: any, Before?: any): CommandBarControl;
        OLEUsage: MsoControlOLEUsage;
        OnAction: string;
        Parameter: string;
        readonly Parent: CommandBar;
        Priority: number;
        Reserved1(): void;
        Reserved2(): void;
        Reserved3(): void;
        Reserved4(): void;
        Reserved5(): void;
        Reserved6(): void;
        Reserved7(): void;
        Reset(): void;
        SetFocus(): void;
        Tag: string;
        TooltipText: string;
        readonly Top: number;
        readonly Type: MsoControlType;
        Visible: boolean;
        Width: number;
    }

    class CommandBarControls {
        private 'Office.CommandBarControls_typekey': CommandBarControls;
        private constructor();
        Add(Type?: any, Id?: any, Parameter?: any, Before?: any, Temporary?: any): CommandBarControl;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): CommandBarControl;
        readonly Parent: CommandBar;
    }

    class CommandBars {
        private 'Office.CommandBars_typekey': CommandBars;
        private constructor();
        readonly ActionControl: CommandBarControl;
        readonly ActiveMenuBar: CommandBar;
        AdaptiveMenus: boolean;
        Add(Name?: any, Position?: any, MenuBar?: any, Temporary?: any): CommandBar;
        AddEx(TbidOrName?: any, Position?: any, MenuBar?: any, Temporary?: any, TbtrProtection?: any): CommandBar;
        readonly Application: any;
        CommitRenderingTransaction(hwnd: number): void;
        readonly Count: number;
        readonly Creator: number;
        DisableAskAQuestionDropdown: boolean;
        DisableCustomize: boolean;
        DisplayFonts: boolean;
        DisplayKeysInTooltips: boolean;
        DisplayTooltips: boolean;
        ExecuteMso(idMso: string): void;
        FindControl(Type?: any, Id?: any, Tag?: any, Visible?: any): CommandBarControl;
        FindControls(Type?: any, Id?: any, Tag?: any, Visible?: any): CommandBarControls;
        GetEnabledMso(idMso: string): boolean;
        GetImageMso(idMso: string, Width: number, Height: number): stdole.IPictureDisp;
        GetLabelMso(idMso: string): string;
        GetPressedMso(idMso: string): boolean;
        GetScreentipMso(idMso: string): string;
        GetSupertipMso(idMso: string): string;
        GetVisibleMso(idMso: string): boolean;
        IdsString(ids: number, pbstrName: string): number;
        Item(Index: any): CommandBar;
        LargeButtons: boolean;
        MenuAnimationStyle: MsoMenuAnimation;
        readonly Parent: any;
        ReleaseFocus(): void;
        TmcGetName(tmc: number, pbstrName: string): number;
    }

    class ConnectorFormat {
        private 'Office.ConnectorFormat_typekey': ConnectorFormat;
        private constructor();
        readonly Application: any;
        BeginConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        readonly BeginConnected: MsoTriState;
        readonly BeginConnectedShape: Shape;
        readonly BeginConnectionSite: number;
        BeginDisconnect(): void;
        readonly Creator: number;
        EndConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        readonly EndConnected: MsoTriState;
        readonly EndConnectedShape: Shape;
        readonly EndConnectionSite: number;
        EndDisconnect(): void;
        readonly Parent: any;
        Type: MsoConnectorType;
    }

    class ContactCard {
        private 'Office.ContactCard_typekey': ContactCard;
        private constructor();
        readonly Application: any;
        Close(): void;
        readonly Creator: number;

        /** @param boolean [ShowWithDelay=false] */
        Show(
            CardStyle: MsoContactCardStyle, RectangleLeft: number, RectangleRight: number, RectangleTop: number, RectangleBottom: number, HorizontalPosition: number, ShowWithDelay?: boolean): void;
    }

    class Crop {
        private 'Office.Crop_typekey': Crop;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        PictureHeight: number;
        PictureOffsetX: number;
        PictureOffsetY: number;
        PictureWidth: number;
        ShapeHeight: number;
        ShapeLeft: number;
        ShapeTop: number;
        ShapeWidth: number;
    }

    class CustomTaskPane {
        private 'Office.CustomTaskPane_typekey': CustomTaskPane;
        private constructor();
        readonly Application: any;
        readonly ContentControl: any;
        Delete(): void;
        DockPosition: MsoCTPDockPosition;
        DockPositionRestrict: MsoCTPDockPositionRestrict;
        Height: number;
        readonly Title: string;
        Visible: boolean;
        Width: number;
        readonly Window: any;
    }

    class CustomXMLNode {
        private 'Office.CustomXMLNode_typekey': CustomXMLNode;
        private constructor();

        /**
         * @param string [Name='']
         * @param string [NamespaceURI='']
         * @param Office.MsoCustomXMLNodeType [NodeType=1]
         * @param string [NodeValue='']
         */
        AppendChildNode(Name?: string, NamespaceURI?: string, NodeType?: MsoCustomXMLNodeType, NodeValue?: string): void;
        AppendChildSubtree(XML: string): void;
        readonly Application: any;
        readonly Attributes: CustomXMLNodes;
        readonly BaseName: string;
        readonly ChildNodes: CustomXMLNodes;
        readonly Creator: number;
        Delete(): void;
        readonly FirstChild: CustomXMLNode;
        HasChildNodes(): boolean;

        /**
         * @param string [Name='']
         * @param string [NamespaceURI='']
         * @param Office.MsoCustomXMLNodeType [NodeType=1]
         * @param string [NodeValue='']
         * @param Office.CustomXMLNode [NextSibling=0]
         */
        InsertNodeBefore(Name?: string, NamespaceURI?: string, NodeType?: MsoCustomXMLNodeType, NodeValue?: string, NextSibling?: CustomXMLNode): void;

        /** @param Office.CustomXMLNode [NextSibling=0] */
        InsertSubtreeBefore(XML: string, NextSibling?: CustomXMLNode): void;
        readonly LastChild: CustomXMLNode;
        readonly NamespaceURI: string;
        readonly NextSibling: CustomXMLNode;
        readonly NodeType: MsoCustomXMLNodeType;
        NodeValue: string;
        readonly OwnerDocument: any;
        readonly OwnerPart: CustomXMLPart;
        readonly Parent: any;
        readonly ParentNode: CustomXMLNode;
        readonly PreviousSibling: CustomXMLNode;
        RemoveChild(Child: CustomXMLNode): void;

        /**
         * @param string [Name='']
         * @param string [NamespaceURI='']
         * @param Office.MsoCustomXMLNodeType [NodeType=1]
         * @param string [NodeValue='']
         */
        ReplaceChildNode(OldNode: CustomXMLNode, Name?: string, NamespaceURI?: string, NodeType?: MsoCustomXMLNodeType, NodeValue?: string): void;
        ReplaceChildSubtree(XML: string, OldNode: CustomXMLNode): void;
        SelectNodes(XPath: string): CustomXMLNodes;
        SelectSingleNode(XPath: string): CustomXMLNode;
        Text: string;
        readonly XML: string;
        readonly XPath: string;
    }

    class CustomXMLNodes {
        private 'Office.CustomXMLNodes_typekey': CustomXMLNodes;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): CustomXMLNode;
        readonly Parent: any;
    }

    class CustomXMLPart {
        private 'Office.CustomXMLPart_typekey': CustomXMLPart;
        private constructor();

        /**
         * @param string [Name='']
         * @param string [NamespaceURI='']
         * @param Office.CustomXMLNode [NextSibling=0]
         * @param Office.MsoCustomXMLNodeType [NodeType=1]
         * @param string [NodeValue='']
         */
        AddNode(Parent: CustomXMLNode, Name?: string, NamespaceURI?: string, NextSibling?: CustomXMLNode, NodeType?: MsoCustomXMLNodeType, NodeValue?: string): void;
        readonly Application: any;
        readonly BuiltIn: boolean;
        readonly Creator: number;
        Delete(): void;
        readonly DocumentElement: CustomXMLNode;
        readonly Errors: CustomXMLValidationErrors;
        readonly Id: string;
        Load(FilePath: string): boolean;
        LoadXML(XML: string): boolean;
        readonly NamespaceManager: CustomXMLPrefixMappings;
        readonly NamespaceURI: string;
        readonly Parent: any;
        SchemaCollection: CustomXMLSchemaCollection;
        SelectNodes(XPath: string): CustomXMLNodes;
        SelectSingleNode(XPath: string): CustomXMLNode;
        readonly XML: string;
    }

    class CustomXMLParts {
        private 'Office.CustomXMLParts_typekey': CustomXMLParts;
        private constructor();

        /** @param string [XML=''] */
        Add(XML?: string, SchemaCollection?: any): CustomXMLPart;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): CustomXMLPart;
        readonly Parent: any;
        SelectByID(Id: string): CustomXMLPart;
        SelectByNamespace(NamespaceURI: string): CustomXMLParts;
    }

    class CustomXMLPrefixMapping {
        private 'Office.CustomXMLPrefixMapping_typekey': CustomXMLPrefixMapping;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly NamespaceURI: string;
        readonly Parent: any;
        readonly Prefix: string;
    }

    class CustomXMLPrefixMappings {
        private 'Office.CustomXMLPrefixMappings_typekey': CustomXMLPrefixMappings;
        private constructor();
        AddNamespace(Prefix: string, NamespaceURI: string): void;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): CustomXMLPrefixMapping;
        LookupNamespace(Prefix: string): string;
        LookupPrefix(NamespaceURI: string): string;
        readonly Parent: any;
    }

    class CustomXMLSchema {
        private 'Office.CustomXMLSchema_typekey': CustomXMLSchema;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Delete(): void;
        readonly Location: string;
        readonly NamespaceURI: string;
        readonly Parent: any;
        Reload(): void;
    }

    class CustomXMLSchemaCollection {
        private 'Office.CustomXMLSchemaCollection_typekey': CustomXMLSchemaCollection;
        private constructor();

        /**
         * @param string [NamespaceURI='']
         * @param string [Alias='']
         * @param string [FileName='']
         * @param boolean [InstallForAllUsers=false]
         */
        Add(NamespaceURI?: string, Alias?: string, FileName?: string, InstallForAllUsers?: boolean): CustomXMLSchema;
        AddCollection(SchemaCollection: CustomXMLSchemaCollection): void;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): CustomXMLSchema;
        NamespaceURI(Index: number): string;
        readonly Parent: any;
        Validate(): boolean;
    }

    class CustomXMLValidationError {
        private 'Office.CustomXMLValidationError_typekey': CustomXMLValidationError;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Delete(): void;
        readonly ErrorCode: number;
        readonly Name: string;
        readonly Node: CustomXMLNode;
        readonly Parent: any;
        readonly Text: string;
        readonly Type: MsoCustomXMLValidationErrorType;
    }

    class CustomXMLValidationErrors {
        private 'Office.CustomXMLValidationErrors_typekey': CustomXMLValidationErrors;
        private constructor();

        /**
         * @param string [ErrorText='']
         * @param boolean [ClearedOnUpdate=true]
         */
        Add(Node: CustomXMLNode, ErrorName: string, ErrorText?: string, ClearedOnUpdate?: boolean): void;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): CustomXMLValidationError;
        readonly Parent: any;
    }

    class DiagramNode {
        private 'Office.DiagramNode_typekey': DiagramNode;
        private constructor();

        /**
         * @param Office.MsoRelativeNodePosition [Pos=2]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        AddNode(Pos?: MsoRelativeNodePosition, NodeType?: MsoDiagramNodeType): DiagramNode;
        readonly Application: any;
        readonly Children: DiagramNodeChildren;

        /** @param Office.MsoRelativeNodePosition [Pos=2] */
        CloneNode(CopyChildren: boolean, TargetNode: DiagramNode, Pos?: MsoRelativeNodePosition): DiagramNode;
        readonly Creator: number;
        Delete(): void;
        readonly Diagram: IMsoDiagram;
        Layout: MsoOrgChartLayoutType;
        MoveNode(TargetNode: DiagramNode, Pos: MsoRelativeNodePosition): void;
        NextNode(): DiagramNode;
        readonly Parent: any;
        PrevNode(): DiagramNode;
        ReplaceNode(TargetNode: DiagramNode): void;
        readonly Root: DiagramNode;
        readonly Shape: Shape;

        /** @param boolean [SwapChildren=true] */
        SwapNode(TargetNode: DiagramNode, SwapChildren?: boolean): void;
        readonly TextShape: Shape;
        TransferChildren(ReceivingNode: DiagramNode): void;
    }

    class DiagramNodeChildren {
        private 'Office.DiagramNodeChildren_typekey': DiagramNodeChildren;
        private constructor();

        /**
         * @param any [Index=-1]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        AddNode(Index?: any, NodeType?: MsoDiagramNodeType): DiagramNode;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        readonly FirstChild: DiagramNode;
        Item(Index: any): DiagramNode;
        readonly LastChild: DiagramNode;
        readonly Parent: any;
        SelectAll(): void;
    }

    class DiagramNodes {
        private 'Office.DiagramNodes_typekey': DiagramNodes;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): DiagramNode;
        readonly Parent: any;
        SelectAll(): void;
    }

    class DocumentInspector {
        private 'Office.DocumentInspector_typekey': DocumentInspector;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Description: string;
        Fix(Status: MsoDocInspectorStatus, Results: string): void;
        Inspect(Status: MsoDocInspectorStatus, Results: string): void;
        readonly Name: string;
        readonly Parent: any;
    }

    class DocumentInspectors {
        private 'Office.DocumentInspectors_typekey': DocumentInspectors;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): DocumentInspector;
        readonly Parent: any;
    }

    class DocumentProperties<TApplication = any> {
        private 'Office.DocumentProperties_typekey': DocumentProperties<TApplication>;
        private constructor();
        Add(Name: string, LinkToContent: boolean, Type?: MsoDocProperties, Value?: any, LinkSource?: string): DocumentProperty;
        Application: TApplication;
        Count: number;
        Creator: number;
        Item(index: string | number): DocumentProperty<TApplication>;
        Parent: any;
    }

    class DocumentProperty<TApplication = any> {
        private 'Office.DocumentProperty_typekey': DocumentProperty<TApplication>;
        private constructor();
        Application: TApplication;
        Creator: number;
        Delete(): void;
        LinkSource: string;
        LinkToContent: boolean;
        Name: string;
        Parent: any;
        Type: MsoDocProperties;
        Value: any;
    }

    class DocumentLibraryVersion {
        private 'Office.DocumentLibraryVersion_typekey': DocumentLibraryVersion;
        private constructor();
        readonly Application: any;
        readonly Comments: string;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Modified: any;
        readonly ModifiedBy: string;
        Open(): any;
        readonly Parent: any;
        Restore(): any;
    }

    class DocumentLibraryVersions {
        private 'Office.DocumentLibraryVersions_typekey': DocumentLibraryVersions;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        readonly IsVersioningEnabled: boolean;
        Item(lIndex: number): DocumentLibraryVersion;
        readonly Parent: any;
    }

    class EffectParameter {
        private 'Office.EffectParameter_typekey': EffectParameter;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Name: string;
        Value: any;
    }

    class EffectParameters {
        private 'Office.EffectParameters_typekey': EffectParameters;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): EffectParameter;
    }

    class FileDialog {
        private 'Office.FileDialog_typekey': FileDialog;
        private constructor();
        AllowMultiSelect: boolean;
        readonly Application: any;
        ButtonName: string;
        readonly Creator: number;
        readonly DialogType: MsoFileDialogType;
        Execute(): void;
        FilterIndex: number;
        readonly Filters: FileDialogFilters;
        InitialFileName: string;
        InitialView: MsoFileDialogView;
        readonly Item: string;
        readonly Parent: any;
        readonly SelectedItems: FileDialogSelectedItems;
        Show(): number;
        Title: string;
    }

    class FileDialogFilter {
        private 'Office.FileDialogFilter_typekey': FileDialogFilter;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Description: string;
        readonly Extensions: string;
        readonly Parent: any;
    }

    class FileDialogFilters {
        private 'Office.FileDialogFilters_typekey': FileDialogFilters;
        private constructor();
        Add(Description: string, Extensions: string, Position?: any): FileDialogFilter;
        readonly Application: any;
        Clear(): void;
        readonly Count: number;
        readonly Creator: number;
        Delete(filter?: any): void;
        Item(Index: number): FileDialogFilter;
        readonly Parent: any;
    }

    class FileDialogSelectedItems {
        private 'Office.FileDialogSelectedItems_typekey': FileDialogSelectedItems;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): string;
        readonly Parent: any;
    }

    class FileSearch {
        private 'Office.FileSearch_typekey': FileSearch;
        private constructor();
        readonly Application: any;
        readonly Creator: number;

        /**
         * @param Office.MsoSortBy [SortBy=1]
         * @param Office.MsoSortOrder [SortOrder=1]
         * @param boolean [AlwaysAccurate=true]
         */
        Execute(SortBy?: MsoSortBy, SortOrder?: MsoSortOrder, AlwaysAccurate?: boolean): number;
        FileName: string;
        FileType: MsoFileType;
        readonly FileTypes: FileTypes;
        readonly FoundFiles: FoundFiles;
        LastModified: MsoLastModified;
        LookIn: string;
        MatchAllWordForms: boolean;
        MatchTextExactly: boolean;
        NewSearch(): void;
        readonly PropertyTests: PropertyTests;
        RefreshScopes(): void;
        readonly SearchFolders: SearchFolders;
        readonly SearchScopes: SearchScopes;
        SearchSubFolders: boolean;
        TextOrProperty: string;
    }

    class FileTypes {
        private 'Office.FileTypes_typekey': FileTypes;
        private constructor();
        Add(FileType: MsoFileType): void;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): MsoFileType;
        Remove(Index: number): void;
    }

    class FillFormat {
        private 'Office.FillFormat_typekey': FillFormat;
        private constructor();
        readonly Application: any;
        BackColor: ColorFormat;
        Background(): void;
        readonly Creator: number;
        ForeColor: ColorFormat;
        GradientAngle: number;
        readonly GradientColorType: MsoGradientColorType;
        readonly GradientDegree: number;
        readonly GradientStops: GradientStops;
        readonly GradientStyle: MsoGradientStyle;
        readonly GradientVariant: number;
        OneColorGradient(Style: MsoGradientStyle, Variant: number, Degree: number): void;
        readonly Parent: any;
        readonly Pattern: MsoPatternType;
        Patterned(Pattern: MsoPatternType): void;
        readonly PictureEffects: PictureEffects;
        PresetGradient(Style: MsoGradientStyle, Variant: number, PresetGradientType: MsoPresetGradientType): void;
        readonly PresetGradientType: MsoPresetGradientType;
        readonly PresetTexture: MsoPresetTexture;
        PresetTextured(PresetTexture: MsoPresetTexture): void;
        RotateWithObject: MsoTriState;
        Solid(): void;
        TextureAlignment: MsoTextureAlignment;
        TextureHorizontalScale: number;
        readonly TextureName: string;
        TextureOffsetX: number;
        TextureOffsetY: number;
        TextureTile: MsoTriState;
        readonly TextureType: MsoTextureType;
        TextureVerticalScale: number;
        Transparency: number;
        TwoColorGradient(Style: MsoGradientStyle, Variant: number): void;
        readonly Type: MsoFillType;
        UserPicture(PictureFile: string): void;
        UserTextured(TextureFile: string): void;
        Visible: MsoTriState;
    }

    class Font2 {
        private 'Office.Font2_typekey': Font2;
        private constructor();
        Allcaps: MsoTriState;
        readonly Application: any;
        AutorotateNumbers: MsoTriState;
        BaselineOffset: number;
        Bold: MsoTriState;
        Caps: MsoTextCaps;
        readonly Creator: number;
        DoubleStrikeThrough: MsoTriState;
        readonly Embeddable: MsoTriState;
        readonly Embedded: MsoTriState;
        Equalize: MsoTriState;
        readonly Fill: FillFormat;
        readonly Glow: GlowFormat;
        readonly Highlight: ColorFormat;
        Italic: MsoTriState;
        Kerning: number;
        readonly Line: LineFormat;
        Name: string;
        NameAscii: string;
        NameComplexScript: string;
        NameFarEast: string;
        NameOther: string;
        readonly Parent: any;
        readonly Reflection: ReflectionFormat;
        readonly Shadow: ShadowFormat;
        Size: number;
        Smallcaps: MsoTriState;
        SoftEdgeFormat: MsoSoftEdgeType;
        Spacing: number;
        Strike: MsoTextStrike;
        StrikeThrough: MsoTriState;
        Subscript: MsoTriState;
        Superscript: MsoTriState;
        readonly UnderlineColor: ColorFormat;
        UnderlineStyle: MsoTextUnderlineType;
        WordArtformat: MsoPresetTextEffect;
    }

    class FoundFiles {
        private 'Office.FoundFiles_typekey': FoundFiles;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): string;
    }

    class FreeformBuilder {
        private 'Office.FreeformBuilder_typekey': FreeformBuilder;
        private constructor();

        /**
         * @param number [X2=0]
         * @param number [Y2=0]
         * @param number [X3=0]
         * @param number [Y3=0]
         */
        AddNodes(SegmentType: MsoSegmentType, EditingType: MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        readonly Application: any;
        ConvertToShape(): Shape;
        readonly Creator: number;
        readonly Parent: any;
    }

    class GlowFormat {
        private 'Office.GlowFormat_typekey': GlowFormat;
        private constructor();
        readonly Application: any;
        readonly Color: ColorFormat;
        readonly Creator: number;
        Radius: number;
        Transparency: number;
    }

    class GradientStop {
        private 'Office.GradientStop_typekey': GradientStop;
        private constructor();
        readonly Application: any;
        readonly Color: ColorFormat;
        readonly Creator: number;
        Position: number;
        Transparency: number;
    }

    class GradientStops {
        private 'Office.GradientStops_typekey': GradientStops;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;

        /** @param number [Index=-1] */
        Delete(Index?: number): void;

        /**
         * @param number [Transparency=0]
         * @param number [Index=-1]
         */
        Insert(RGB: number, Position: number, Transparency?: number, Index?: number): void;

        /**
         * @param number [Transparency=0]
         * @param number [Index=-1]
         * @param number [Brightness=0]
         */
        Insert2(RGB: number, Position: number, Transparency?: number, Index?: number, Brightness?: number): void;
        Item(Index: number): GradientStop;
    }

    class GroupShapes {
        private 'Office.GroupShapes_typekey': GroupShapes;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Shape;
        readonly Parent: any;
        Range(Index: any): ShapeRange;
    }

    class HTMLProject {
        private 'Office.HTMLProject_typekey': HTMLProject;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly HTMLProjectItems: HTMLProjectItems;

        /** @param Office.MsoHTMLProjectOpen [OpenKind=0] */
        Open(OpenKind?: MsoHTMLProjectOpen): void;
        readonly Parent: any;

        /** @param boolean [Refresh=true] */
        RefreshDocument(Refresh?: boolean): void;

        /** @param boolean [Refresh=true] */
        RefreshProject(Refresh?: boolean): void;
        readonly State: MsoHTMLProjectState;
    }

    class HTMLProjectItem {
        private 'Office.HTMLProjectItem_typekey': HTMLProjectItem;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly IsOpen: boolean;
        LoadFromFile(FileName: string): void;
        readonly Name: string;

        /** @param Office.MsoHTMLProjectOpen [OpenKind=0] */
        Open(OpenKind?: MsoHTMLProjectOpen): void;
        readonly Parent: any;
        SaveCopyAs(FileName: string): void;
        Text: string;
    }

    class HTMLProjectItems {
        private 'Office.HTMLProjectItems_typekey': HTMLProjectItems;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): HTMLProjectItem;
        readonly Parent: any;
    }

    class IAssistance {
        private 'Office.IAssistance_typekey': IAssistance;
        private constructor();

        /** ClearDefaultContext Method */
        ClearDefaultContext(HelpId: string): void;

        /**
         * SearchHelp Method
         * @param string [Scope='']
         */
        SearchHelp(Query: string, Scope?: string): void;

        /** SetDefaultContext Method */
        SetDefaultContext(HelpId: string): void;

        /**
         * ShowHelp Method
         * @param string [HelpId='']
         * @param string [Scope='']
         */
        ShowHelp(HelpId?: string, Scope?: string): void;
    }

    class IFind {
        private 'Office.IFind_typekey': IFind;
        private constructor();
        Author: string;
        DateCreatedFrom: any;
        DateCreatedTo: any;
        DateSavedFrom: any;
        DateSavedTo: any;
        Delete(bstrQueryName: string): void;
        Execute(): void;
        FileType: number;
        Keywords: string;
        ListBy: MsoFileFindListBy;
        Load(bstrQueryName: string): void;
        MatchCase: boolean;
        Name: string;
        Options: MsoFileFindOptions;
        PatternMatch: boolean;
        readonly Results: IFoundFiles;
        Save(bstrQueryName: string): void;
        SavedBy: string;
        SearchPath: string;
        SelectedFile: number;
        Show(): number;
        SortBy: MsoFileFindSortBy;
        SubDir: boolean;
        Subject: string;
        Text: string;
        Title: string;
        View: MsoFileFindView;
    }

    class IFoundFiles {
        private 'Office.IFoundFiles_typekey': IFoundFiles;
        private constructor();
        readonly Count: number;
        Item(Index: number): string;
    }

    class IMsoBorder {
        private 'Office.IMsoBorder_typekey': IMsoBorder;
        private constructor();
        readonly Application: any;
        Color: any;
        ColorIndex: any;
        readonly Creator: number;
        LineStyle: any;
        readonly Parent: any;
        Weight: any;
    }

    class IMsoCharacters {
        private 'Office.IMsoCharacters_typekey': IMsoCharacters;
        private constructor();
        readonly Application: any;
        Caption: string;
        readonly Count: number;
        readonly Creator: number;
        Delete(): any;
        readonly Font: ChartFont;
        Insert(bstr: string): any;
        readonly Parent: any;
        PhoneticCharacters: string;
        Text: string;
    }

    class IMsoChart {
        private 'Office.IMsoChart_typekey': IMsoChart;
        private constructor();

        /** @param Office.XlDataLabelsType [Type=2] */
        _ApplyDataLabels(Type?: XlDataLabelsType, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any): void;
        readonly Application: any;
        ApplyChartTemplate(bstrFileName: string): void;
        ApplyCustomType(ChartType: XlChartType, TypeName?: any): void;

        /** @param Office.XlDataLabelsType [Type=2] */
        ApplyDataLabels(
            Type?: XlDataLabelsType, IMsoLegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any,
            ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;
        ApplyLayout(Layout: number, varChartType?: any): void;
        readonly Area3DGroup: IMsoChartGroup;
        AreaGroups(Index?: any): any;
        AutoFormat(rGallery: number, varFormat?: any): void;
        AutoScaling: boolean;

        /** @param Office.XlAxisGroup [AxisGroup=1] */
        Axes(Type: any, AxisGroup?: XlAxisGroup): any;
        readonly BackWall: IMsoWalls;
        readonly Bar3DGroup: IMsoChartGroup;
        BarGroups(Index?: any): any;
        BarShape: XlBarShape;
        readonly ChartArea: IMsoChartArea;
        readonly ChartData: IMsoChartData;
        ChartGroups(pvarIndex?: any, varIgallery?: any): any;
        ChartStyle: any;
        readonly ChartTitle: IMsoChartTitle;
        ChartType: XlChartType;
        ChartWizard(
            varSource?: any, varGallery?: any, varFormat?: any, varPlotBy?: any, varCategoryLabels?: any, varSeriesLabels?: any, varHasLegend?: any, varTitle?: any,
            varCategoryTitle?: any, varValueTitle?: any, varExtraTitle?: any): void;
        ClearToMatchStyle(): void;
        readonly Column3DGroup: IMsoChartGroup;
        ColumnGroups(Index?: any): any;
        Copy(): any;

        /**
         * @param number [Appearance=1]
         * @param number [Format=-4147]
         * @param number [Size=2]
         */
        CopyPicture(Appearance?: number, Format?: number, Size?: number): void;
        readonly Corners: IMsoCorners;
        readonly Creator: number;
        readonly DataTable: IMsoDataTable;
        Delete(): any;
        DepthPercent: number;
        DisplayBlanksAs: XlDisplayBlanksAs;
        DoughnutGroups(Index?: any): any;
        Elevation: number;
        Export(bstr: string, varFilterName?: any, varInteractive?: any): boolean;
        readonly Floor: IMsoFloor;
        readonly Format: IMsoChartFormat;
        GapDepth: number;
        GetChartElement(x: number, y: number, ElementID: number, Arg1: number, Arg2: number): void;
        HasAxis(axisType?: any, AxisGroup?: any): any;
        HasDataTable: boolean;
        HasLegend: boolean;
        HasPivotFields: boolean;
        HasTitle: boolean;
        HeightPercent: number;
        readonly Legend: IMsoLegend;
        readonly Line3DGroup: IMsoChartGroup;
        LineGroups(Index?: any): any;
        readonly Parent: any;
        Perspective: number;
        readonly Pie3DGroup: IMsoChartGroup;
        PieGroups(Index?: any): any;
        readonly PivotLayout: any;
        readonly PlotArea: IMsoPlotArea;
        PlotBy: XlRowCol;
        PlotVisibleOnly: boolean;
        RadarGroups(Index?: any): any;
        Refresh(): void;
        RefreshPivotTable(): void;
        RightAngleAxes: any;
        Rotation: any;
        SaveChartTemplate(bstrFileName: string): void;
        Select(Replace?: any): any;
        SeriesCollection(Index?: any): any;
        SetDefaultChart(varName: any): void;
        SetElement(RHS: MsoChartElementType): void;
        SetSourceData(Source: string, PlotBy?: any): void;
        readonly Shapes: Shapes;
        ShowAllFieldButtons: boolean;
        ShowAxisFieldButtons: boolean;
        ShowDataLabelsOverMaximum: boolean;
        ShowLegendFieldButtons: boolean;
        ShowReportFilterFieldButtons: boolean;
        ShowValueFieldButtons: boolean;
        readonly SideWall: IMsoWalls;
        SubType: number;
        readonly SurfaceGroup: IMsoChartGroup;
        Type: number;

        /** @param boolean [fBackWall=true] */
        Walls(fBackWall?: boolean): IMsoWalls;
        XYGroups(Index?: any): any;
    }

    class IMsoChartArea {
        private 'Office.IMsoChartArea_typekey': IMsoChartArea;
        private constructor();
        readonly Application: any;
        AutoScaleFont: any;
        readonly Border: IMsoBorder;
        Clear(): any;
        ClearContents(): any;
        ClearFormats(): any;
        Copy(): any;
        readonly Creator: number;
        readonly Fill: ChartFillFormat;
        readonly Font: ChartFont;
        readonly Format: IMsoChartFormat;
        Height: number;
        readonly Interior: IMsoInterior;
        Left: number;
        readonly Name: string;
        readonly Parent: any;
        RoundedCorners: boolean;
        Select(): any;
        Shadow: boolean;
        Top: number;
        Width: number;
    }

    class IMsoChartData {
        private 'Office.IMsoChartData_typekey': IMsoChartData;
        private constructor();
        Activate(): void;
        BreakLink(): void;
        readonly IsLinked: boolean;
        readonly Workbook: any;
    }

    class IMsoChartFormat {
        private 'Office.IMsoChartFormat_typekey': IMsoChartFormat;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Fill: FillFormat;
        readonly Glow: GlowFormat;
        readonly Line: LineFormat;
        readonly Parent: any;
        readonly PictureFormat: PictureFormat;
        readonly Shadow: ShadowFormat;
        readonly SoftEdge: SoftEdgeFormat;
        readonly TextFrame2: TextFrame2;
        readonly ThreeD: ThreeDFormat;
    }

    class IMsoChartGroup {
        private 'Office.IMsoChartGroup_typekey': IMsoChartGroup;
        private constructor();
        readonly Application: any;
        AxisGroup: number;
        BubbleScale: number;
        readonly Creator: number;
        DoughnutHoleSize: number;
        readonly DownBars: IMsoDownBars;
        readonly DropLines: IMsoDropLines;
        FirstSliceAngle: number;
        GapWidth: number;
        Has3DShading: boolean;
        HasDropLines: boolean;
        HasHiLoLines: boolean;
        HasRadarAxisLabels: boolean;
        HasSeriesLines: boolean;
        HasUpDownBars: boolean;
        readonly HiLoLines: IMsoHiLoLines;
        readonly Index: number;
        Overlap: number;
        readonly Parent: any;
        readonly RadarAxisLabels: any;
        SecondPlotSize: number;
        SeriesCollection(Index?: any): any;
        readonly SeriesLines: IMsoSeriesLines;
        ShowNegativeBubbles: boolean;
        SizeRepresents: XlSizeRepresents;
        SplitType: XlChartSplitType;
        SplitValue: any;
        SubType: number;
        Type: number;
        readonly UpBars: IMsoUpBars;
        VaryByCategories: boolean;
    }

    class IMsoChartTitle {
        private 'Office.IMsoChartTitle_typekey': IMsoChartTitle;
        private constructor();
        readonly Application: any;
        AutoScaleFont: any;
        readonly Border: IMsoBorder;
        Caption: string;
        Characters(Start?: any, Length?: any): IMsoCharacters;
        readonly Creator: number;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: ChartFont;
        readonly Format: IMsoChartFormat;
        Formula: string;
        FormulaLocal: string;
        FormulaR1C1: string;
        FormulaR1C1Local: string;
        readonly Height: number;
        HorizontalAlignment: any;
        IncludeInLayout: boolean;
        readonly Interior: IMsoInterior;
        Left: number;
        readonly Name: string;
        Orientation: any;
        readonly Parent: any;
        Position: XlChartElementPosition;
        ReadingOrder: number;
        Select(): any;
        Shadow: boolean;
        Text: string;
        Top: number;
        VerticalAlignment: any;
        readonly Width: number;
    }

    class IMsoCorners {
        private 'Office.IMsoCorners_typekey': IMsoCorners;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class IMsoDataTable {
        private 'Office.IMsoDataTable_typekey': IMsoDataTable;
        private constructor();
        readonly Application: any;
        AutoScaleFont: any;
        readonly Border: IMsoBorder;
        readonly Creator: number;
        Delete(): void;
        readonly Font: ChartFont;
        readonly Format: IMsoChartFormat;
        HasBorderHorizontal: boolean;
        HasBorderOutline: boolean;
        HasBorderVertical: boolean;
        readonly Parent: any;
        Select(): void;
        ShowLegendKey: boolean;
    }

    class IMsoDiagram {
        private 'Office.IMsoDiagram_typekey': IMsoDiagram;
        private constructor();
        readonly Application: any;
        AutoFormat: MsoTriState;
        AutoLayout: MsoTriState;
        Convert(Type: MsoDiagramType): void;
        readonly Creator: number;
        FitText(): void;
        readonly Nodes: DiagramNodes;
        readonly Parent: any;
        Reverse: MsoTriState;
        readonly Type: MsoDiagramType;
    }

    class IMsoDownBars {
        private 'Office.IMsoDownBars_typekey': IMsoDownBars;
        private constructor();
        readonly Application: any;
        readonly Border: IMsoBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Format: IMsoChartFormat;
        readonly Interior: IMsoInterior;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class IMsoDropLines {
        private 'Office.IMsoDropLines_typekey': IMsoDropLines;
        private constructor();
        readonly Application: any;
        readonly Border: IMsoBorder;
        readonly Creator: number;
        Delete(): void;
        readonly Format: IMsoChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): void;
    }

    class IMsoFloor {
        private 'Office.IMsoFloor_typekey': IMsoFloor;
        private constructor();
        readonly Application: any;
        readonly Border: IMsoBorder;
        ClearFormats(): any;
        readonly Creator: number;
        readonly Fill: ChartFillFormat;
        readonly Format: IMsoChartFormat;
        readonly Interior: IMsoInterior;
        readonly Name: string;
        readonly Parent: any;
        Paste(): void;
        PictureType: any;
        Select(): any;
        Thickness: number;
    }

    class IMsoHiLoLines {
        private 'Office.IMsoHiLoLines_typekey': IMsoHiLoLines;
        private constructor();
        readonly Application: any;
        readonly Border: IMsoBorder;
        readonly Creator: number;
        Delete(): void;
        readonly Format: IMsoChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): void;
    }

    class IMsoInterior {
        private 'Office.IMsoInterior_typekey': IMsoInterior;
        private constructor();
        readonly Application: any;
        Color: any;
        ColorIndex: any;
        readonly Creator: number;
        InvertIfNegative: any;
        readonly Parent: any;
        Pattern: any;
        PatternColor: any;
        PatternColorIndex: any;
    }

    class IMsoLegend {
        private 'Office.IMsoLegend_typekey': IMsoLegend;
        private constructor();
        readonly Application: any;
        AutoScaleFont: any;
        readonly Border: IMsoBorder;
        Clear(): any;
        readonly Creator: number;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: ChartFont;
        readonly Format: IMsoChartFormat;
        Height: number;
        IncludeInLayout: boolean;
        readonly Interior: IMsoInterior;
        Left: number;
        LegendEntries(Index?: any): any;
        readonly Name: string;
        readonly Parent: any;
        Position: XlLegendPosition;
        Select(): any;
        Shadow: boolean;
        Top: number;
        Width: number;
    }

    class IMsoPlotArea {
        private 'Office.IMsoPlotArea_typekey': IMsoPlotArea;
        private constructor();
        readonly Application: any;
        readonly Border: IMsoBorder;
        ClearFormats(): any;
        readonly Creator: number;
        readonly Fill: ChartFillFormat;
        readonly Format: IMsoChartFormat;
        Height: number;
        InsideHeight: number;
        InsideLeft: number;
        InsideTop: number;
        InsideWidth: number;
        readonly Interior: IMsoInterior;
        Left: number;
        readonly Name: string;
        readonly Parent: any;
        Position: XlChartElementPosition;
        Select(): any;
        Top: number;
        Width: number;
    }

    class IMsoSeriesLines {
        private 'Office.IMsoSeriesLines_typekey': IMsoSeriesLines;
        private constructor();
        readonly Application: any;
        readonly Border: IMsoBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Format: IMsoChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class IMsoUpBars {
        private 'Office.IMsoUpBars_typekey': IMsoUpBars;
        private constructor();
        readonly Application: any;
        readonly Border: IMsoBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Format: IMsoChartFormat;
        readonly Interior: IMsoInterior;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class IMsoWalls {
        private 'Office.IMsoWalls_typekey': IMsoWalls;
        private constructor();
        readonly Application: any;
        readonly Border: IMsoBorder;
        ClearFormats(): any;
        readonly Creator: number;
        readonly Fill: ChartFillFormat;
        readonly Format: IMsoChartFormat;
        readonly Interior: IMsoInterior;
        readonly Name: string;
        readonly Parent: any;
        Paste(): void;
        PictureType: any;
        PictureUnit: any;
        Select(): any;
        Thickness: number;
    }

    class LanguageSettings {
        private 'Office.LanguageSettings_typekey': LanguageSettings;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        LanguageID(Id: MsoAppLanguageID): number;
        LanguagePreferredForEditing(lid: MsoLanguageID): boolean;
        readonly Parent: any;
    }

    class LineFormat {
        private 'Office.LineFormat_typekey': LineFormat;
        private constructor();
        readonly Application: any;
        BackColor: ColorFormat;
        BeginArrowheadLength: MsoArrowheadLength;
        BeginArrowheadStyle: MsoArrowheadStyle;
        BeginArrowheadWidth: MsoArrowheadWidth;
        readonly Creator: number;
        DashStyle: MsoLineDashStyle;
        EndArrowheadLength: MsoArrowheadLength;
        EndArrowheadStyle: MsoArrowheadStyle;
        EndArrowheadWidth: MsoArrowheadWidth;
        ForeColor: ColorFormat;
        InsetPen: MsoTriState;
        readonly Parent: any;
        Pattern: MsoPatternType;
        Style: MsoLineStyle;
        Transparency: number;
        Visible: MsoTriState;
        Weight: number;
    }

    class MetaProperties {
        private 'Office.MetaProperties_typekey': MetaProperties;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        GetItemByInternalName(InternalName: string): MetaProperty;
        Item(Index: any): MetaProperty;
        readonly Parent: any;
        readonly SchemaXml: string;
        Validate(): string;
        readonly ValidationError: string;
    }

    class MetaProperty {
        private 'Office.MetaProperty_typekey': MetaProperty;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Id: string;
        readonly IsReadOnly: boolean;
        readonly IsRequired: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly Type: MsoMetaPropertyType;
        Validate(): string;
        readonly ValidationError: string;
        Value: any;
    }

    class MsoDebugOptions {
        private 'Office.MsoDebugOptions_typekey': MsoDebugOptions;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        FeatureReports: number;
        OutputToDebugger: boolean;
        OutputToFile: boolean;
        OutputToMessageBox: boolean;
        readonly UnitTestManager: any;
    }

    class MsoEnvelope {
        private 'Office.MsoEnvelope_typekey': MsoEnvelope;
        private constructor();
        readonly CommandBars: any;
        Introduction: string;
        readonly Item: any;
        readonly Parent: any;
    }

    class NewFile {
        private 'Office.NewFile_typekey': NewFile;
        private constructor();
        Add(FileName: string, Section?: any, DisplayName?: any, Action?: any): boolean;
        readonly Application: any;
        readonly Creator: number;
        Remove(FileName: string, Section?: any, DisplayName?: any, Action?: any): boolean;
    }

    class OfficeTheme {
        private 'Office.OfficeTheme_typekey': OfficeTheme;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Parent: any;
        readonly ThemeColorScheme: ThemeColorScheme;
        readonly ThemeEffectScheme: ThemeEffectScheme;
        readonly ThemeFontScheme: ThemeFontScheme;
    }

    class ParagraphFormat2 {
        private 'Office.ParagraphFormat2_typekey': ParagraphFormat2;
        private constructor();
        Alignment: MsoParagraphAlignment;
        readonly Application: any;
        BaselineAlignment: MsoBaselineAlignment;
        readonly Bullet: BulletFormat2;
        readonly Creator: number;
        FarEastLineBreakLevel: MsoTriState;
        FirstLineIndent: number;
        HangingPunctuation: MsoTriState;
        IndentLevel: number;
        LeftIndent: number;
        LineRuleAfter: MsoTriState;
        LineRuleBefore: MsoTriState;
        LineRuleWithin: MsoTriState;
        readonly Parent: any;
        RightIndent: number;
        SpaceAfter: number;
        SpaceBefore: number;
        SpaceWithin: number;
        readonly TabStops: TabStops2;
        TextDirection: MsoTextDirection;
        WordWrap: MsoTriState;
    }

    class Permission {
        private 'Office.Permission_typekey': Permission;
        private constructor();
        Add(UserId: string, Permission?: any, ExpirationDate?: any): UserPermission;
        readonly Application: any;
        ApplyPolicy(FileName: string): void;
        readonly Count: number;
        readonly Creator: number;
        DocumentAuthor: string;
        Enabled: boolean;
        EnableTrustedBrowser: boolean;
        Item(Index: any): UserPermission;
        readonly Parent: any;
        readonly PermissionFromPolicy: boolean;
        readonly PolicyDescription: string;
        readonly PolicyName: string;
        RemoveAll(): void;
        RequestPermissionURL: string;
        StoreLicenses: boolean;
    }

    class PickerDialog {
        private 'Office.PickerDialog_typekey': PickerDialog;
        private constructor();
        readonly Application: any;
        CreatePickerResults(): PickerResults;
        readonly Creator: number;
        DataHandlerId: string;
        readonly Properties: PickerProperties;
        Resolve(TokenText: string, duplicateDlgMode: number): PickerResults;

        /**
         * @param boolean [IsMultiSelect=true]
         * @param Office.PickerResults [ExistingResults=0]
         */
        Show(IsMultiSelect?: boolean, ExistingResults?: PickerResults): PickerResults;
        Title: string;
    }

    class PickerField {
        private 'Office.PickerField_typekey': PickerField;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly IsHidden: boolean;
        readonly Name: string;
        readonly Type: MsoPickerField;
    }

    class PickerFields {
        private 'Office.PickerFields_typekey': PickerFields;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): PickerField;
    }

    class PickerProperties {
        private 'Office.PickerProperties_typekey': PickerProperties;
        private constructor();
        Add(Id: string, Value: string, Type: MsoPickerField): PickerProperty;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): PickerProperty;
        Remove(Id: string): void;
    }

    class PickerProperty {
        private 'Office.PickerProperty_typekey': PickerProperty;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Id: string;
        readonly Type: MsoPickerField;
        readonly Value: any;
    }

    class PickerResult {
        private 'Office.PickerResult_typekey': PickerResult;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        DisplayName: string;
        readonly DuplicateResults: any;
        Fields: PickerFields;
        readonly Id: string;
        ItemData: any;
        SIPId: string;
        SubItems: any;
        Type: string;
    }

    class PickerResults {
        private 'Office.PickerResults_typekey': PickerResults;
        private constructor();

        /** @param string [SIPId=''] */
        Add(Id: string, DisplayName: string, Type: string, SIPId?: string, ItemData?: any, SubItems?: any): PickerResult;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): PickerResult;
    }

    class PictureEffect {
        private 'Office.PictureEffect_typekey': PictureEffect;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Delete(): void;
        readonly EffectParameters: EffectParameters;
        Position: number;
        readonly Type: MsoPictureEffectType;
        Visible: MsoTriState;
    }

    class PictureEffects {
        private 'Office.PictureEffects_typekey': PictureEffects;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;

        /** @param number [Index=-1] */
        Delete(Index?: number): void;

        /** @param number [Position=-1] */
        Insert(EffectType: MsoPictureEffectType, Position?: number): PictureEffect;
        Item(Index: number): PictureEffect;
    }

    class PictureFormat {
        private 'Office.PictureFormat_typekey': PictureFormat;
        private constructor();
        readonly Application: any;
        Brightness: number;
        ColorType: MsoPictureColorType;
        Contrast: number;
        readonly Creator: number;
        readonly Crop: Crop;
        CropBottom: number;
        CropLeft: number;
        CropRight: number;
        CropTop: number;
        IncrementBrightness(Increment: number): void;
        IncrementContrast(Increment: number): void;
        readonly Parent: any;
        TransparencyColor: number;
        TransparentBackground: MsoTriState;
    }

    class PolicyItem {
        private 'Office.PolicyItem_typekey': PolicyItem;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Data: string;
        readonly Description: string;
        readonly Id: string;
        readonly Name: string;
        readonly Parent: any;
    }

    class PropertyTest {
        private 'Office.PropertyTest_typekey': PropertyTest;
        private constructor();
        readonly Application: any;
        readonly Condition: MsoCondition;
        readonly Connector: MsoConnector;
        readonly Creator: number;
        readonly Name: string;
        readonly SecondValue: any;
        readonly Value: any;
    }

    class PropertyTests {
        private 'Office.PropertyTests_typekey': PropertyTests;
        private constructor();

        /** @param Office.MsoConnector [Connector=1] */
        Add(Name: string, Condition: MsoCondition, Value: any, SecondValue: any, Connector?: MsoConnector): void;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): PropertyTest;
        Remove(Index: number): void;
    }

    class ReflectionFormat {
        private 'Office.ReflectionFormat_typekey': ReflectionFormat;
        private constructor();
        readonly Application: any;
        Blur: number;
        readonly Creator: number;
        Offset: number;
        Size: number;
        Transparency: number;
        Type: MsoReflectionType;
    }

    class Ruler2 {
        private 'Office.Ruler2_typekey': Ruler2;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Levels: RulerLevels2;
        readonly Parent: any;
        readonly TabStops: TabStops2;
    }

    class RulerLevel2 {
        private 'Office.RulerLevel2_typekey': RulerLevel2;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        FirstMargin: number;
        LeftMargin: number;
        readonly Parent: any;
    }

    class RulerLevels2 {
        private 'Office.RulerLevels2_typekey': RulerLevels2;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): RulerLevel2;
        readonly Parent: any;
    }

    class ScopeFolder {
        private 'Office.ScopeFolder_typekey': ScopeFolder;
        private constructor();
        AddToSearchFolders(): void;
        readonly Application: any;
        readonly Creator: number;
        readonly Name: string;
        readonly Path: string;
        readonly ScopeFolders: ScopeFolders;
    }

    class ScopeFolders {
        private 'Office.ScopeFolders_typekey': ScopeFolders;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): ScopeFolder;
    }

    class Script {
        private 'Office.Script_typekey': Script;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Delete(): void;
        Extended: string;
        Id: string;
        Language: MsoScriptLanguage;
        readonly Location: MsoScriptLocation;
        readonly Parent: any;
        ScriptText: string;
        readonly Shape: any;
    }

    class Scripts {
        private 'Office.Scripts_typekey': Scripts;
        private constructor();

        /**
         * @param Office.MsoScriptLocation [Location=2]
         * @param Office.MsoScriptLanguage [Language=2]
         * @param string [Id='']
         * @param string [Extended='']
         * @param string [ScriptText='']
         */
        Add(Anchor?: any, Location?: MsoScriptLocation, Language?: MsoScriptLanguage, Id?: string, Extended?: string, ScriptText?: string): Script;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Delete(): void;
        Item(Index: any): Script;
        readonly Parent: any;
    }

    class SearchFolders {
        private 'Office.SearchFolders_typekey': SearchFolders;
        private constructor();
        Add(ScopeFolder: ScopeFolder): void;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): ScopeFolder;
        Remove(Index: number): void;
    }

    class SearchScope {
        private 'Office.SearchScope_typekey': SearchScope;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly ScopeFolder: ScopeFolder;
        readonly Type: MsoSearchIn;
    }

    class SearchScopes {
        private 'Office.SearchScopes_typekey': SearchScopes;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): SearchScope;
    }

    class ServerPolicy {
        private 'Office.ServerPolicy_typekey': ServerPolicy;
        private constructor();
        readonly Application: any;
        readonly BlockPreview: boolean;
        readonly Count: number;
        readonly Creator: number;
        readonly Description: string;
        readonly Id: string;
        Item(Index: any): PolicyItem;
        readonly Name: string;
        readonly Parent: any;
        readonly Statement: string;
    }

    class ShadowFormat {
        private 'Office.ShadowFormat_typekey': ShadowFormat;
        private constructor();
        readonly Application: any;
        Blur: number;
        readonly Creator: number;
        ForeColor: ColorFormat;
        IncrementOffsetX(Increment: number): void;
        IncrementOffsetY(Increment: number): void;
        Obscured: MsoTriState;
        OffsetX: number;
        OffsetY: number;
        readonly Parent: any;
        RotateWithShape: MsoTriState;
        Size: number;
        Style: MsoShadowStyle;
        Transparency: number;
        Type: MsoShadowType;
        Visible: MsoTriState;
    }

    class Shape {
        private 'Office.Shape_typekey': Shape;
        private constructor();
        readonly Adjustments: Adjustments;
        AlternativeText: string;
        readonly Application: any;
        Apply(): void;
        AutoShapeType: MsoAutoShapeType;
        BackgroundStyle: MsoBackgroundStyleIndex;
        BlackWhiteMode: MsoBlackWhiteMode;
        readonly Callout: CalloutFormat;
        CanvasCropBottom(Increment: number): void;
        CanvasCropLeft(Increment: number): void;
        CanvasCropRight(Increment: number): void;
        CanvasCropTop(Increment: number): void;
        readonly CanvasItems: CanvasShapes;
        readonly Chart: IMsoChart;
        readonly Child: MsoTriState;
        readonly ConnectionSiteCount: number;
        readonly Connector: MsoTriState;
        readonly ConnectorFormat: ConnectorFormat;
        ConvertTextToSmartArt(Layout: SmartArtLayout): void;
        Copy(): void;
        readonly Creator: number;
        Cut(): void;
        Delete(): void;
        readonly Diagram: IMsoDiagram;
        readonly DiagramNode: DiagramNode;
        Duplicate(): Shape;
        readonly Fill: FillFormat;
        Flip(FlipCmd: MsoFlipCmd): void;
        readonly Glow: GlowFormat;
        readonly GroupItems: GroupShapes;
        readonly HasChart: MsoTriState;
        readonly HasDiagram: MsoTriState;
        readonly HasDiagramNode: MsoTriState;
        readonly HasSmartArt: MsoTriState;
        Height: number;
        readonly HorizontalFlip: MsoTriState;
        readonly Id: number;
        IncrementLeft(Increment: number): void;
        IncrementRotation(Increment: number): void;
        IncrementTop(Increment: number): void;
        Left: number;
        readonly Line: LineFormat;
        LockAspectRatio: MsoTriState;
        Name: string;
        readonly Nodes: ShapeNodes;
        readonly Parent: any;
        readonly ParentGroup: Shape;
        PickUp(): void;
        readonly PictureFormat: PictureFormat;
        readonly Reflection: ReflectionFormat;
        RerouteConnections(): void;
        Rotation: number;
        readonly RTF: string;

        /** @param Office.MsoScaleFrom [fScale=0] */
        ScaleHeight(Factor: number, RelativeToOriginalSize: MsoTriState, fScale?: MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [fScale=0] */
        ScaleWidth(Factor: number, RelativeToOriginalSize: MsoTriState, fScale?: MsoScaleFrom): void;
        readonly Script: Script;
        Select(Replace?: any): void;
        SetShapesDefaultProperties(): void;
        readonly Shadow: ShadowFormat;
        ShapeStyle: MsoShapeStyleIndex;
        readonly SmartArt: SmartArt;
        readonly SoftEdge: SoftEdgeFormat;
        readonly TextEffect: TextEffectFormat;
        readonly TextFrame: TextFrame;
        readonly TextFrame2: TextFrame2;
        readonly ThreeD: ThreeDFormat;
        Title: string;
        Top: number;
        readonly Type: MsoShapeType;
        Ungroup(): ShapeRange;
        readonly VerticalFlip: MsoTriState;
        readonly Vertices: any;
        Visible: MsoTriState;
        Width: number;
        ZOrder(ZOrderCmd: MsoZOrderCmd): void;
        readonly ZOrderPosition: number;
    }

    class ShapeNode {
        private 'Office.ShapeNode_typekey': ShapeNode;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly EditingType: MsoEditingType;
        readonly Parent: any;
        readonly Points: any;
        readonly SegmentType: MsoSegmentType;
    }

    class ShapeNodes {
        private 'Office.ShapeNodes_typekey': ShapeNodes;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Delete(Index: number): void;

        /**
         * @param number [X2=0]
         * @param number [Y2=0]
         * @param number [X3=0]
         * @param number [Y3=0]
         */
        Insert(Index: number, SegmentType: MsoSegmentType, EditingType: MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        Item(Index: any): ShapeNode;
        readonly Parent: any;
        SetEditingType(Index: number, EditingType: MsoEditingType): void;
        SetPosition(Index: number, X1: number, Y1: number): void;
        SetSegmentType(Index: number, SegmentType: MsoSegmentType): void;
    }

    class ShapeRange {
        private 'Office.ShapeRange_typekey': ShapeRange;
        private constructor();
        readonly Adjustments: Adjustments;
        Align(AlignCmd: MsoAlignCmd, RelativeTo: MsoTriState): void;
        AlternativeText: string;
        readonly Application: any;
        Apply(): void;
        AutoShapeType: MsoAutoShapeType;
        BackgroundStyle: MsoBackgroundStyleIndex;
        BlackWhiteMode: MsoBlackWhiteMode;
        readonly Callout: CalloutFormat;
        CanvasCropBottom(Increment: number): void;
        CanvasCropLeft(Increment: number): void;
        CanvasCropRight(Increment: number): void;
        CanvasCropTop(Increment: number): void;
        readonly CanvasItems: CanvasShapes;
        readonly Chart: IMsoChart;
        readonly Child: MsoTriState;
        readonly ConnectionSiteCount: number;
        readonly Connector: MsoTriState;
        readonly ConnectorFormat: ConnectorFormat;
        Copy(): void;
        readonly Count: number;
        readonly Creator: number;
        Cut(): void;
        Delete(): void;
        readonly Diagram: IMsoDiagram;
        readonly DiagramNode: DiagramNode;
        Distribute(DistributeCmd: MsoDistributeCmd, RelativeTo: MsoTriState): void;
        Duplicate(): ShapeRange;
        readonly Fill: FillFormat;
        Flip(FlipCmd: MsoFlipCmd): void;
        readonly Glow: GlowFormat;
        Group(): Shape;
        readonly GroupItems: GroupShapes;
        readonly HasChart: MsoTriState;
        readonly HasDiagram: MsoTriState;
        readonly HasDiagramNode: MsoTriState;
        Height: number;
        readonly HorizontalFlip: MsoTriState;
        readonly Id: number;
        IncrementLeft(Increment: number): void;
        IncrementRotation(Increment: number): void;
        IncrementTop(Increment: number): void;
        Item(Index: any): Shape;
        Left: number;
        readonly Line: LineFormat;
        LockAspectRatio: MsoTriState;
        Name: string;
        readonly Nodes: ShapeNodes;
        readonly Parent: any;
        readonly ParentGroup: Shape;
        PickUp(): void;
        readonly PictureFormat: PictureFormat;
        readonly Reflection: ReflectionFormat;
        Regroup(): Shape;
        RerouteConnections(): void;
        Rotation: number;
        readonly RTF: string;

        /** @param Office.MsoScaleFrom [fScale=0] */
        ScaleHeight(Factor: number, RelativeToOriginalSize: MsoTriState, fScale?: MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [fScale=0] */
        ScaleWidth(Factor: number, RelativeToOriginalSize: MsoTriState, fScale?: MsoScaleFrom): void;
        readonly Script: Script;
        Select(Replace?: any): void;
        SetShapesDefaultProperties(): void;
        readonly Shadow: ShadowFormat;
        ShapeStyle: MsoShapeStyleIndex;
        readonly SoftEdge: SoftEdgeFormat;
        readonly TextEffect: TextEffectFormat;
        readonly TextFrame: TextFrame;
        readonly TextFrame2: TextFrame2;
        readonly ThreeD: ThreeDFormat;
        Title: string;
        Top: number;
        readonly Type: MsoShapeType;
        Ungroup(): ShapeRange;
        readonly VerticalFlip: MsoTriState;
        readonly Vertices: any;
        Visible: MsoTriState;
        Width: number;
        ZOrder(ZOrderCmd: MsoZOrderCmd): void;
        readonly ZOrderPosition: number;
    }

    class Shapes {
        private 'Office.Shapes_typekey': Shapes;
        private constructor();
        AddCallout(Type: MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddCanvas(Left: number, Top: number, Width: number, Height: number): Shape;

        /**
         * @param Office.XlChartType [Type=-1]
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddChart(Type?: XlChartType, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        AddConnector(Type: MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddCurve(SafeArrayOfPoints: any): Shape;
        AddDiagram(Type: MsoDiagramType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLabel(Orientation: MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;

        /**
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddPicture(FileName: string, LinkToFile: MsoTriState, SaveWithDocument: MsoTriState, Left: number, Top: number, Width?: number, Height?: number): Shape;
        AddPolyline(SafeArrayOfPoints: any): Shape;
        AddShape(Type: MsoAutoShapeType, Left: number, Top: number, Width: number, Height: number): Shape;

        /**
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddSmartArt(Layout: SmartArtLayout, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        AddTable(NumRows: number, NumColumns: number, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextbox(Orientation: MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextEffect(PresetTextEffect: MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: MsoTriState, FontItalic: MsoTriState, Left: number, Top: number): Shape;
        readonly Application: any;
        readonly Background: Shape;
        BuildFreeform(EditingType: MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        readonly Count: number;
        readonly Creator: number;
        readonly Default: Shape;
        Item(Index: any): Shape;
        readonly Parent: any;
        Range(Index: any): ShapeRange;
        SelectAll(): void;
    }

    class SharedWorkspace {
        private 'Office.SharedWorkspace_typekey': SharedWorkspace;
        private constructor();
        readonly Application: any;
        readonly Connected: boolean;
        CreateNew(URL?: any, Name?: any): void;
        readonly Creator: number;
        Delete(): void;
        Disconnect(): void;
        readonly Files: SharedWorkspaceFiles;
        readonly Folders: SharedWorkspaceFolders;
        readonly LastRefreshed: any;
        readonly Links: SharedWorkspaceLinks;
        readonly Members: SharedWorkspaceMembers;
        Name: string;
        readonly Parent: any;
        Refresh(): void;
        RemoveDocument(): void;
        SourceURL: string;
        readonly Tasks: SharedWorkspaceTasks;
        readonly URL: string;
    }

    class SharedWorkspaceFile {
        private 'Office.SharedWorkspaceFile_typekey': SharedWorkspaceFile;
        private constructor();
        readonly Application: any;
        readonly CreatedBy: string;
        readonly CreatedDate: any;
        readonly Creator: number;
        Delete(): void;
        readonly ModifiedBy: string;
        readonly ModifiedDate: any;
        readonly Parent: any;
        readonly URL: string;
    }

    class SharedWorkspaceFiles {
        private 'Office.SharedWorkspaceFiles_typekey': SharedWorkspaceFiles;
        private constructor();
        Add(FileName: string, ParentFolder?: any, OverwriteIfFileAlreadyExists?: any, KeepInSync?: any): SharedWorkspaceFile;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): SharedWorkspaceFile;
        readonly ItemCountExceeded: boolean;
        readonly Parent: any;
    }

    class SharedWorkspaceFolder {
        private 'Office.SharedWorkspaceFolder_typekey': SharedWorkspaceFolder;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Delete(DeleteEventIfFolderContainsFiles?: any): void;
        readonly FolderName: string;
        readonly Parent: any;
    }

    class SharedWorkspaceFolders {
        private 'Office.SharedWorkspaceFolders_typekey': SharedWorkspaceFolders;
        private constructor();
        Add(FolderName: string, ParentFolder?: any): SharedWorkspaceFolder;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): SharedWorkspaceFolder;
        readonly ItemCountExceeded: boolean;
        readonly Parent: any;
    }

    class SharedWorkspaceLink {
        private 'Office.SharedWorkspaceLink_typekey': SharedWorkspaceLink;
        private constructor();
        readonly Application: any;
        readonly CreatedBy: string;
        readonly CreatedDate: any;
        readonly Creator: number;
        Delete(): void;
        Description: string;
        readonly ModifiedBy: string;
        readonly ModifiedDate: any;
        Notes: string;
        readonly Parent: any;
        Save(): void;
        URL: string;
    }

    class SharedWorkspaceLinks {
        private 'Office.SharedWorkspaceLinks_typekey': SharedWorkspaceLinks;
        private constructor();
        Add(URL: string, Description?: any, Notes?: any): SharedWorkspaceLink;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): SharedWorkspaceLink;
        readonly ItemCountExceeded: boolean;
        readonly Parent: any;
    }

    class SharedWorkspaceMember {
        private 'Office.SharedWorkspaceMember_typekey': SharedWorkspaceMember;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Delete(): void;
        readonly DomainName: string;
        readonly Email: string;
        readonly Id: string;
        readonly Name: string;
        readonly Parent: any;
    }

    class SharedWorkspaceMembers {
        private 'Office.SharedWorkspaceMembers_typekey': SharedWorkspaceMembers;
        private constructor();
        Add(Email: string, DomainName: string, DisplayName: string, Role?: any): SharedWorkspaceMember;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): SharedWorkspaceMember;
        readonly ItemCountExceeded: boolean;
        readonly Parent: any;
    }

    class SharedWorkspaceTask {
        private 'Office.SharedWorkspaceTask_typekey': SharedWorkspaceTask;
        private constructor();
        readonly Application: any;
        AssignedTo: string;
        readonly CreatedBy: string;
        readonly CreatedDate: any;
        readonly Creator: number;
        Delete(): void;
        Description: string;
        DueDate: any;
        readonly ModifiedBy: string;
        readonly ModifiedDate: any;
        readonly Parent: any;
        Priority: MsoSharedWorkspaceTaskPriority;
        Save(): void;
        Status: MsoSharedWorkspaceTaskStatus;
        Title: string;
    }

    class SharedWorkspaceTasks {
        private 'Office.SharedWorkspaceTasks_typekey': SharedWorkspaceTasks;
        private constructor();
        Add(Title: string, Status?: any, Priority?: any, Assignee?: any, Description?: any, DueDate?: any): SharedWorkspaceTask;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): SharedWorkspaceTask;
        readonly ItemCountExceeded: boolean;
        readonly Parent: any;
    }

    class Signature {
        private 'Office.Signature_typekey': Signature;
        private constructor();
        readonly Application: any;
        AttachCertificate: boolean;
        readonly CanSetup: boolean;
        readonly Creator: number;
        Delete(): void;
        readonly Details: SignatureInfo;
        readonly ExpireDate: any;
        readonly IsCertificateExpired: boolean;
        readonly IsCertificateRevoked: boolean;
        readonly IsSignatureLine: boolean;
        readonly IsSigned: boolean;
        readonly Issuer: string;
        readonly IsValid: boolean;
        readonly Parent: any;
        readonly Setup: SignatureSetup;
        ShowDetails(): void;
        Sign(varSigImg?: any, varDelSuggSigner?: any, varDelSuggSignerLine2?: any, varDelSuggSignerEmail?: any): void;
        readonly SignatureLineShape: any;
        readonly SignDate: any;
        readonly Signer: string;
        readonly SortHint: number;
    }

    class SignatureInfo {
        private 'Office.SignatureInfo_typekey': SignatureInfo;
        private constructor();
        readonly Application: any;
        readonly CertificateVerificationResults: CertificateVerificationResults;
        readonly ContentVerificationResults: ContentVerificationResults;
        readonly Creator: number;
        GetCertificateDetail(certdet: CertificateDetail): any;
        GetSignatureDetail(sigdet: SignatureDetail): any;
        readonly IsCertificateExpired: boolean;
        readonly IsCertificateRevoked: boolean;
        readonly IsCertificateUntrusted: boolean;
        readonly IsValid: boolean;
        readonly ReadOnly: boolean;
        SelectCertificateDetailByThumbprint(bstrThumbprint: string): void;
        SelectSignatureCertificate(ParentWindow: any): void;
        ShowSignatureCertificate(ParentWindow: any): void;
        SignatureComment: string;
        SignatureImage: stdole.IPictureDisp;
        readonly SignatureProvider: string;
        SignatureText: string;
    }

    class SignatureSet {
        private 'Office.SignatureSet_typekey': SignatureSet;
        private constructor();
        Add(): Signature;
        AddNonVisibleSignature(varSigProv?: any): Signature;
        AddSignatureLine(varSigProv?: any): Signature;
        readonly Application: any;
        readonly CanAddSignatureLine: boolean;
        Commit(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(iSig: number): Signature;
        readonly Parent: any;
        readonly ShowSignaturesPane: boolean;
        Subset: MsoSignatureSubset;
    }

    class SignatureSetup {
        private 'Office.SignatureSetup_typekey': SignatureSetup;
        private constructor();
        AdditionalXml: string;
        AllowComments: boolean;
        readonly Application: any;
        readonly Creator: number;
        readonly Id: string;
        readonly ReadOnly: boolean;
        ShowSignDate: boolean;
        readonly SignatureProvider: string;
        SigningInstructions: string;
        SuggestedSigner: string;
        SuggestedSignerEmail: string;
        SuggestedSignerLine2: string;
    }

    class SmartArt {
        private 'Office.SmartArt_typekey': SmartArt;
        private constructor();
        readonly AllNodes: SmartArtNodes;
        readonly Application: any;
        Color: SmartArtColor;
        readonly Creator: number;
        Layout: SmartArtLayout;
        readonly Nodes: SmartArtNodes;
        readonly Parent: any;
        QuickStyle: SmartArtQuickStyle;
        Reset(): void;
        Reverse: MsoTriState;
    }

    class SmartArtColor {
        private 'Office.SmartArtColor_typekey': SmartArtColor;
        private constructor();
        readonly Application: any;
        readonly Category: string;
        readonly Creator: number;
        readonly Description: string;
        readonly Id: string;
        readonly Name: string;
        readonly Parent: any;
    }

    class SmartArtColors {
        private 'Office.SmartArtColors_typekey': SmartArtColors;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): SmartArtColor;
        readonly Parent: any;
    }

    class SmartArtLayout {
        private 'Office.SmartArtLayout_typekey': SmartArtLayout;
        private constructor();
        readonly Application: any;
        readonly Category: string;
        readonly Creator: number;
        readonly Description: string;
        readonly Id: string;
        readonly Name: string;
        readonly Parent: any;
    }

    class SmartArtLayouts {
        private 'Office.SmartArtLayouts_typekey': SmartArtLayouts;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): SmartArtLayout;
        readonly Parent: any;
    }

    class SmartArtNode {
        private 'Office.SmartArtNode_typekey': SmartArtNode;
        private constructor();

        /**
         * @param Office.MsoSmartArtNodePosition [Position=1]
         * @param Office.MsoSmartArtNodeType [Type=1]
         */
        AddNode(Position?: MsoSmartArtNodePosition, Type?: MsoSmartArtNodeType): SmartArtNode;
        readonly Application: any;
        readonly Creator: number;
        Delete(): void;
        Demote(): void;
        readonly Hidden: MsoTriState;
        Larger(): void;
        readonly Level: number;
        readonly Nodes: SmartArtNodes;
        OrgChartLayout: MsoOrgChartLayoutType;
        readonly Parent: any;
        readonly ParentNode: SmartArtNode;
        Promote(): void;
        ReorderDown(): void;
        ReorderUp(): void;
        readonly Shapes: ShapeRange;
        Smaller(): void;
        readonly TextFrame2: TextFrame2;
        readonly Type: MsoSmartArtNodeType;
    }

    class SmartArtNodes {
        private 'Office.SmartArtNodes_typekey': SmartArtNodes;
        private constructor();
        Add(): SmartArtNode;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): SmartArtNode;
        readonly Parent: any;
    }

    class SmartArtQuickStyle {
        private 'Office.SmartArtQuickStyle_typekey': SmartArtQuickStyle;
        private constructor();
        readonly Application: any;
        readonly Category: string;
        readonly Creator: number;
        readonly Description: string;
        readonly Id: string;
        readonly Name: string;
        readonly Parent: any;
    }

    class SmartArtQuickStyles {
        private 'Office.SmartArtQuickStyles_typekey': SmartArtQuickStyles;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): SmartArtQuickStyle;
        readonly Parent: any;
    }

    class SmartDocument {
        private 'Office.SmartDocument_typekey': SmartDocument;
        private constructor();
        readonly Application: any;
        readonly Creator: number;

        /** @param boolean [ConsiderAllSchemas=false] */
        PickSolution(ConsiderAllSchemas?: boolean): void;
        RefreshPane(): void;
        SolutionID: string;
        SolutionURL: string;
    }

    class SoftEdgeFormat {
        private 'Office.SoftEdgeFormat_typekey': SoftEdgeFormat;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Radius: number;
        Type: MsoSoftEdgeType;
    }

    class Sync {
        private 'Office.Sync_typekey': Sync;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly ErrorType: MsoSyncErrorType;
        GetUpdate(): void;
        readonly LastSyncTime: any;
        OpenVersion(SyncVersionType: MsoSyncVersionType): void;
        readonly Parent: any;
        PutUpdate(): void;
        ResolveConflict(SyncConflictResolution: MsoSyncConflictResolutionType): void;
        readonly Status: MsoSyncStatusType;
        Unsuspend(): void;
        readonly WorkspaceLastChangedBy: string;
    }

    class TabStop2 {
        private 'Office.TabStop2_typekey': TabStop2;
        private constructor();
        readonly Application: any;
        Clear(): void;
        readonly Creator: number;
        readonly Parent: any;
        Position: number;
        Type: MsoTabStopType;
    }

    class TabStops2 {
        private 'Office.TabStops2_typekey': TabStops2;
        private constructor();
        Add(Type: MsoTabStopType, Position: number): TabStop2;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        DefaultSpacing: number;
        Item(Index: any): TabStop2;
        readonly Parent: any;
    }

    class TextColumn2 {
        private 'Office.TextColumn2_typekey': TextColumn2;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Number: number;
        Spacing: number;
        TextDirection: MsoTextDirection;
    }

    class TextEffectFormat {
        private 'Office.TextEffectFormat_typekey': TextEffectFormat;
        private constructor();
        Alignment: MsoTextEffectAlignment;
        readonly Application: any;
        readonly Creator: number;
        FontBold: MsoTriState;
        FontItalic: MsoTriState;
        FontName: string;
        FontSize: number;
        KernedPairs: MsoTriState;
        NormalizedHeight: MsoTriState;
        readonly Parent: any;
        PresetShape: MsoPresetTextEffectShape;
        PresetTextEffect: MsoPresetTextEffect;
        RotatedChars: MsoTriState;
        Text: string;
        ToggleVerticalText(): void;
        Tracking: number;
    }

    class TextFrame {
        private 'Office.TextFrame_typekey': TextFrame;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        MarginBottom: number;
        MarginLeft: number;
        MarginRight: number;
        MarginTop: number;
        Orientation: MsoTextOrientation;
        readonly Parent: any;
    }

    class TextFrame2 {
        private 'Office.TextFrame2_typekey': TextFrame2;
        private constructor();
        readonly Application: any;
        AutoSize: MsoAutoSize;
        readonly Column: TextColumn2;
        readonly Creator: number;
        DeleteText(): void;
        readonly HasText: MsoTriState;
        HorizontalAnchor: MsoHorizontalAnchor;
        MarginBottom: number;
        MarginLeft: number;
        MarginRight: number;
        MarginTop: number;
        NoTextRotation: MsoTriState;
        Orientation: MsoTextOrientation;
        readonly Parent: any;
        PathFormat: MsoPathFormat;
        readonly Ruler: Ruler2;
        readonly TextRange: TextRange2;
        readonly ThreeD: ThreeDFormat;
        VerticalAnchor: MsoVerticalAnchor;
        WarpFormat: MsoWarpFormat;
        WordArtformat: MsoPresetTextEffect;
        WordWrap: MsoTriState;
    }

    class TextRange2 {
        private 'Office.TextRange2_typekey': TextRange2;
        private constructor();
        AddPeriods(): void;
        readonly Application: any;
        readonly BoundHeight: number;
        readonly BoundLeft: number;
        readonly BoundTop: number;
        readonly BoundWidth: number;
        ChangeCase(Type: MsoTextChangeCase): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Characters(Start?: number, Length?: number): TextRange2;
        Copy(): void;
        readonly Count: number;
        readonly Creator: number;
        Cut(): void;
        Delete(): void;

        /**
         * @param number [After=0]
         * @param Office.MsoTriState [MatchCase=0]
         * @param Office.MsoTriState [WholeWords=0]
         */
        Find(FindWhat: string, After?: number, MatchCase?: MsoTriState, WholeWords?: MsoTriState): TextRange2;
        readonly Font: Font2;

        /** @param string [NewText=''] */
        InsertAfter(NewText?: string): TextRange2;

        /** @param string [NewText=''] */
        InsertBefore(NewText?: string): TextRange2;

        /** @param Office.MsoTriState [Unicode=0] */
        InsertSymbol(FontName: string, CharNumber: number, Unicode?: MsoTriState): TextRange2;
        Item(Index: any): TextRange2;
        LanguageID: MsoLanguageID;
        readonly Length: number;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Lines(Start?: number, Length?: number): TextRange2;
        LtrRun(): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        MathZones(Start?: number, Length?: number): TextRange2;
        readonly ParagraphFormat: ParagraphFormat2;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Paragraphs(Start?: number, Length?: number): TextRange2;
        readonly Parent: any;
        Paste(): TextRange2;
        PasteSpecial(Format: MsoClipboardFormat): TextRange2;
        RemovePeriods(): void;

        /**
         * @param number [After=0]
         * @param Office.MsoTriState [MatchCase=0]
         * @param Office.MsoTriState [WholeWords=0]
         */
        Replace(FindWhat: string, ReplaceWhat: string, After?: number, MatchCase?: MsoTriState, WholeWords?: MsoTriState): TextRange2;
        RotatedBounds(X1: number, Y1: number, X2: number, Y2: number, X3: number, Y3: number, x4: number, y4: number): void;
        RtlRun(): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Runs(Start?: number, Length?: number): TextRange2;
        Select(): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Sentences(Start?: number, Length?: number): TextRange2;
        readonly Start: number;
        Text: string;
        TrimText(): TextRange2;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Words(Start?: number, Length?: number): TextRange2;
    }

    class ThemeColor {
        private 'Office.ThemeColor_typekey': ThemeColor;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Parent: any;
        RGB: number;
        readonly ThemeColorSchemeIndex: MsoThemeColorSchemeIndex;
    }

    class ThemeColorScheme {
        private 'Office.ThemeColorScheme_typekey': ThemeColorScheme;
        private constructor();
        readonly Application: any;
        Colors(Index: MsoThemeColorSchemeIndex): ThemeColor;
        readonly Count: number;
        readonly Creator: number;
        GetCustomColor(Name: string): number;
        Load(FileName: string): void;
        readonly Parent: any;
        Save(FileName: string): void;
    }

    class ThemeEffectScheme {
        private 'Office.ThemeEffectScheme_typekey': ThemeEffectScheme;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Load(FileName: string): void;
        readonly Parent: any;
    }

    class ThemeFont {
        private 'Office.ThemeFont_typekey': ThemeFont;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Name: string;
        readonly Parent: any;
    }

    class ThemeFonts {
        private 'Office.ThemeFonts_typekey': ThemeFonts;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: MsoFontLanguageIndex): ThemeFont;
        readonly Parent: any;
    }

    class ThemeFontScheme {
        private 'Office.ThemeFontScheme_typekey': ThemeFontScheme;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        Load(FileName: string): void;
        readonly MajorFont: ThemeFonts;
        readonly MinorFont: ThemeFonts;
        readonly Parent: any;
        Save(FileName: string): void;
    }

    class ThreeDFormat {
        private 'Office.ThreeDFormat_typekey': ThreeDFormat;
        private constructor();
        readonly Application: any;
        BevelBottomDepth: number;
        BevelBottomInset: number;
        BevelBottomType: MsoBevelType;
        BevelTopDepth: number;
        BevelTopInset: number;
        BevelTopType: MsoBevelType;
        readonly ContourColor: ColorFormat;
        ContourWidth: number;
        readonly Creator: number;
        Depth: number;
        readonly ExtrusionColor: ColorFormat;
        ExtrusionColorType: MsoExtrusionColorType;
        FieldOfView: number;
        IncrementRotationHorizontal(Increment: number): void;
        IncrementRotationVertical(Increment: number): void;
        IncrementRotationX(Increment: number): void;
        IncrementRotationY(Increment: number): void;
        IncrementRotationZ(Increment: number): void;
        LightAngle: number;
        readonly Parent: any;
        Perspective: MsoTriState;
        readonly PresetCamera: MsoPresetCamera;
        readonly PresetExtrusionDirection: MsoPresetExtrusionDirection;
        PresetLighting: MsoLightRigType;
        PresetLightingDirection: MsoPresetLightingDirection;
        PresetLightingSoftness: MsoPresetLightingSoftness;
        PresetMaterial: MsoPresetMaterial;
        readonly PresetThreeDFormat: MsoPresetThreeDFormat;
        ProjectText: MsoTriState;
        ResetRotation(): void;
        RotationX: number;
        RotationY: number;
        RotationZ: number;
        SetExtrusionDirection(PresetExtrusionDirection: MsoPresetExtrusionDirection): void;
        SetPresetCamera(PresetCamera: MsoPresetCamera): void;
        SetThreeDFormat(PresetThreeDFormat: MsoPresetThreeDFormat): void;
        Visible: MsoTriState;
        Z: number;
    }

    class UserPermission {
        private 'Office.UserPermission_typekey': UserPermission;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        ExpirationDate: any;
        readonly Parent: any;
        Permission: number;
        Remove(): void;
        readonly UserId: string;
    }

    class WebPageFont {
        private 'Office.WebPageFont_typekey': WebPageFont;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        FixedWidthFont: string;
        FixedWidthFontSize: number;
        ProportionalFont: string;
        ProportionalFontSize: number;
    }

    class WebPageFonts {
        private 'Office.WebPageFonts_typekey': WebPageFonts;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: MsoCharacterSet): WebPageFont;
    }

    class WorkflowTask {
        private 'Office.WorkflowTask_typekey': WorkflowTask;
        private constructor();
        readonly Application: any;
        readonly AssignedTo: string;
        readonly CreatedBy: string;
        readonly CreatedDate: VarDate;
        readonly Creator: number;
        readonly Description: string;
        readonly DueDate: VarDate;
        readonly Id: string;
        readonly ListID: string;
        readonly Name: string;
        Show(): number;
        readonly WorkflowID: string;
    }

    class WorkflowTasks {
        private 'Office.WorkflowTasks_typekey': WorkflowTasks;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): WorkflowTask;
    }

    class WorkflowTemplate {
        private 'Office.WorkflowTemplate_typekey': WorkflowTemplate;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Description: string;
        readonly DocumentLibraryName: string;
        readonly DocumentLibraryURL: string;
        readonly Id: string;
        readonly Name: string;
        Show(): number;
    }

    class WorkflowTemplates {
        private 'Office.WorkflowTemplates_typekey': WorkflowTemplates;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): WorkflowTemplate;
    }

    namespace EventHelperTypes {
        type CommandBarButton_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type CommandBarComboBox_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type CommandBars_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type CustomTaskPane_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type CustomXMLPart_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type CustomXMLParts_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        interface CommandBarButton_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface CommandBarComboBox_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface CommandBars_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface CustomTaskPane_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface CustomXMLPart_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface CustomXMLParts_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }
    }
}

interface ActiveXObject {
    on(
        obj: Office.CommandBarButton, event: 'Click', argNames: ['Ctrl', 'CancelDefault'], handler: (
            this: Office.CommandBarButton, parameter: {readonly Ctrl: Office.CommandBarButton, CancelDefault: boolean}) => void): void;
    on(
        obj: Office.CommandBarButton, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Office.CommandBarButton, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Office.CommandBarButton, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Office.CommandBarButton, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Office.CommandBarButton, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Office.CommandBarButton, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Office.CommandBarButton, event: 'Invoke', argNames: Office.EventHelperTypes.CommandBarButton_Invoke_ArgNames, handler: (
            this: Office.CommandBarButton, parameter: Office.EventHelperTypes.CommandBarButton_Invoke_Parameter) => void): void;
    on(
        obj: Office.CommandBarButton, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (
            this: Office.CommandBarButton, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(obj: Office.CommandBarComboBox, event: 'Change', argNames: ['Ctrl'], handler: (this: Office.CommandBarComboBox, parameter: {readonly Ctrl: Office.CommandBarComboBox}) => void): void;
    on(
        obj: Office.CommandBarComboBox, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Office.CommandBarComboBox, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Office.CommandBarComboBox, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Office.CommandBarComboBox, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Office.CommandBarComboBox, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Office.CommandBarComboBox, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Office.CommandBarComboBox, event: 'Invoke', argNames: Office.EventHelperTypes.CommandBarComboBox_Invoke_ArgNames, handler: (
            this: Office.CommandBarComboBox, parameter: Office.EventHelperTypes.CommandBarComboBox_Invoke_Parameter) => void): void;
    on(
        obj: Office.CommandBarComboBox, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (
            this: Office.CommandBarComboBox, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: Office.CommandBars, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Office.CommandBars, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Office.CommandBars, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Office.CommandBars, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Office.CommandBars, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Office.CommandBars, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Office.CommandBars, event: 'Invoke', argNames: Office.EventHelperTypes.CommandBars_Invoke_ArgNames, handler: (
            this: Office.CommandBars, parameter: Office.EventHelperTypes.CommandBars_Invoke_Parameter) => void): void;
    on(obj: Office.CommandBars, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Office.CommandBars, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: Office.CustomTaskPane, event: 'DockPositionStateChange' | 'VisibleStateChange', argNames: ['CustomTaskPaneInst'], handler: (
            this: Office.CustomTaskPane, parameter: {readonly CustomTaskPaneInst: Office.CustomTaskPane}) => void): void;
    on(
        obj: Office.CustomTaskPane, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Office.CustomTaskPane, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Office.CustomTaskPane, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Office.CustomTaskPane, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Office.CustomTaskPane, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Office.CustomTaskPane, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Office.CustomTaskPane, event: 'Invoke', argNames: Office.EventHelperTypes.CustomTaskPane_Invoke_ArgNames, handler: (
            this: Office.CustomTaskPane, parameter: Office.EventHelperTypes.CustomTaskPane_Invoke_Parameter) => void): void;
    on(
        obj: Office.CustomTaskPane, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (
            this: Office.CustomTaskPane, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: Office.CustomXMLPart, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Office.CustomXMLPart, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Office.CustomXMLPart, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Office.CustomXMLPart, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Office.CustomXMLPart, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Office.CustomXMLPart, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Office.CustomXMLPart, event: 'Invoke', argNames: Office.EventHelperTypes.CustomXMLPart_Invoke_ArgNames, handler: (
            this: Office.CustomXMLPart, parameter: Office.EventHelperTypes.CustomXMLPart_Invoke_Parameter) => void): void;
    on(
        obj: Office.CustomXMLPart, event: 'NodeAfterDelete', argNames: ['OldNode', 'OldParentNode', 'OldNextSibling', 'InUndoRedo'], handler: (
            this: Office.CustomXMLPart,
            parameter: {
                readonly OldNode: Office.CustomXMLNode, readonly OldParentNode: Office.CustomXMLNode, readonly OldNextSibling: Office.CustomXMLNode, readonly InUndoRedo: boolean}) => void): void;
    on(
        obj: Office.CustomXMLPart, event: 'NodeAfterInsert', argNames: ['NewNode', 'InUndoRedo'], handler: (
            this: Office.CustomXMLPart, parameter: {readonly NewNode: Office.CustomXMLNode, readonly InUndoRedo: boolean}) => void): void;
    on(
        obj: Office.CustomXMLPart, event: 'NodeAfterReplace', argNames: ['OldNode', 'NewNode', 'InUndoRedo'], handler: (
            this: Office.CustomXMLPart, parameter: {readonly OldNode: Office.CustomXMLNode, readonly NewNode: Office.CustomXMLNode, readonly InUndoRedo: boolean}) => void): void;
    on(
        obj: Office.CustomXMLPart, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (
            this: Office.CustomXMLPart, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: Office.CustomXMLParts, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Office.CustomXMLParts, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Office.CustomXMLParts, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Office.CustomXMLParts, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Office.CustomXMLParts, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Office.CustomXMLParts, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Office.CustomXMLParts, event: 'Invoke', argNames: Office.EventHelperTypes.CustomXMLParts_Invoke_ArgNames, handler: (
            this: Office.CustomXMLParts, parameter: Office.EventHelperTypes.CustomXMLParts_Invoke_Parameter) => void): void;
    on(obj: Office.CustomXMLParts, event: 'PartAfterAdd', argNames: ['NewPart'], handler: (this: Office.CustomXMLParts, parameter: {readonly NewPart: Office.CustomXMLPart}) => void): void;
    on(obj: Office.CustomXMLParts, event: 'PartAfterLoad', argNames: ['Part'], handler: (this: Office.CustomXMLParts, parameter: {readonly Part: Office.CustomXMLPart}) => void): void;
    on(obj: Office.CustomXMLParts, event: 'PartBeforeDelete', argNames: ['OldPart'], handler: (this: Office.CustomXMLParts, parameter: {readonly OldPart: Office.CustomXMLPart}) => void): void;
    on(
        obj: Office.CustomXMLParts, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (
            this: Office.CustomXMLParts, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(obj: Office.CommandBarButton, event: 'AddRef' | 'Release', handler: (this: Office.CommandBarButton, parameter: {}) => void): void;
    on(obj: Office.CommandBarComboBox, event: 'AddRef' | 'Release', handler: (this: Office.CommandBarComboBox, parameter: {}) => void): void;
    on(obj: Office.CommandBars, event: 'AddRef' | 'OnUpdate' | 'Release', handler: (this: Office.CommandBars, parameter: {}) => void): void;
    on(obj: Office.CustomTaskPane, event: 'AddRef' | 'Release', handler: (this: Office.CustomTaskPane, parameter: {}) => void): void;
    on(obj: Office.CustomXMLPart, event: 'AddRef' | 'Release', handler: (this: Office.CustomXMLPart, parameter: {}) => void): void;
    on(obj: Office.CustomXMLParts, event: 'AddRef' | 'Release', handler: (this: Office.CustomXMLParts, parameter: {}) => void): void;
    on(obj: Office.MsoEnvelope, event: 'EnvelopeHide' | 'EnvelopeShow', handler: (this: Office.MsoEnvelope, parameter: {}) => void): void;
    set(obj: Office.CommandBarButton | Office.CommandBarComboBox, propertyName: 'accName' | 'accValue', parameterTypes: [any], newValue: string): void;
    set(obj: Office.CommandBarComboBox, propertyName: 'List', parameterTypes: [number], newValue: string): void;
}

interface EnumeratorConstructor {
    new(col: Office.CanvasShapes | Office.GroupShapes | Office.ShapeRange | Office.Shapes): Enumerator<Office.Shape>;
    new(col: Office.COMAddIns): Enumerator<Office.COMAddIn>;
    new(col: Office.CommandBarControls): Enumerator<Office.CommandBarControl>;
    new(col: Office.CommandBars): Enumerator<Office.CommandBar>;
    new(col: Office.CustomXMLNodes): Enumerator<Office.CustomXMLNode>;
    new(col: Office.CustomXMLParts): Enumerator<Office.CustomXMLPart>;
    new(col: Office.CustomXMLPrefixMappings): Enumerator<Office.CustomXMLPrefixMapping>;
    new(col: Office.CustomXMLSchemaCollection): Enumerator<Office.CustomXMLSchema>;
    new(col: Office.CustomXMLValidationErrors): Enumerator<Office.CustomXMLValidationError>;
    new(col: Office.DiagramNodeChildren | Office.DiagramNodes): Enumerator<Office.DiagramNode>;
    new(col: Office.DocumentInspectors): Enumerator<Office.DocumentInspector>;
    new(col: Office.DocumentLibraryVersions): Enumerator<Office.DocumentLibraryVersion>;
    new(col: Office.EffectParameters): Enumerator<Office.EffectParameter>;
    new(col: Office.FileDialogFilters): Enumerator<Office.FileDialogFilter>;
    new(col: Office.FileDialogSelectedItems | Office.FoundFiles | Office.IFoundFiles): Enumerator<string>;
    new(col: Office.FileTypes): Enumerator<Office.MsoFileType>;
    new(col: Office.GradientStops): Enumerator<Office.GradientStop>;
    new(col: Office.HTMLProjectItems): Enumerator<Office.HTMLProjectItem>;
    new(col: Office.MetaProperties): Enumerator<Office.MetaProperty>;
    new(col: Office.Permission): Enumerator<Office.UserPermission>;
    new(col: Office.PickerFields): Enumerator<Office.PickerField>;
    new(col: Office.PickerProperties): Enumerator<Office.PickerProperty>;
    new(col: Office.PickerResults): Enumerator<Office.PickerResult>;
    new(col: Office.PictureEffects): Enumerator<Office.PictureEffect>;
    new(col: Office.PropertyTests): Enumerator<Office.PropertyTest>;
    new(col: Office.RulerLevels2): Enumerator<Office.RulerLevel2>;
    new(col: Office.ScopeFolders | Office.SearchFolders): Enumerator<Office.ScopeFolder>;
    new(col: Office.Scripts): Enumerator<Office.Script>;
    new(col: Office.SearchScopes): Enumerator<Office.SearchScope>;
    new(col: Office.ShapeNodes): Enumerator<Office.ShapeNode>;
    new(col: Office.SharedWorkspaceFiles): Enumerator<Office.SharedWorkspaceFile>;
    new(col: Office.SharedWorkspaceFolders): Enumerator<Office.SharedWorkspaceFolder>;
    new(col: Office.SharedWorkspaceLinks): Enumerator<Office.SharedWorkspaceLink>;
    new(col: Office.SharedWorkspaceMembers): Enumerator<Office.SharedWorkspaceMember>;
    new(col: Office.SharedWorkspaceTasks): Enumerator<Office.SharedWorkspaceTask>;
    new(col: Office.SignatureSet): Enumerator<Office.Signature>;
    new(col: Office.SmartArtColors): Enumerator<Office.SmartArtColor>;
    new(col: Office.SmartArtLayouts): Enumerator<Office.SmartArtLayout>;
    new(col: Office.SmartArtNodes): Enumerator<Office.SmartArtNode>;
    new(col: Office.SmartArtQuickStyles): Enumerator<Office.SmartArtQuickStyle>;
    new(col: Office.TabStops2): Enumerator<Office.TabStop2>;
    new(col: Office.TextRange2): Enumerator<Office.TextRange2>;
    new(col: Office.ThemeFonts): Enumerator<Office.ThemeFont>;
    new(col: Office.WebPageFonts): Enumerator<Office.WebPageFont>;
    new(col: Office.WorkflowTasks): Enumerator<Office.WorkflowTask>;
    new(col: Office.WorkflowTemplates): Enumerator<Office.WorkflowTemplate>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
