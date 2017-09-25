// Type definitions for Microsoft Word 14.0 Object Library - Word 14.0
// Project: https://msdn.microsoft.com/en-us/library/fp179696.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="activex-office" />
/// <reference types="activex-vbide" />
/// <reference types="activex-stdole" />

declare namespace Word {
    const enum WdAlertLevel {
        wdAlertsAll = -1,
        wdAlertsMessageBox = -2,
        wdAlertsNone = 0,
    }

    const enum WdAlignmentTabAlignment {
        wdCenter = 1,
        wdLeft = 0,
        wdRight = 2,
    }

    const enum WdAlignmentTabRelative {
        wdIndent = 1,
        wdMargin = 0,
    }

    const enum WdAnimation {
        wdAnimationBlinkingBackground = 2,
        wdAnimationLasVegasLights = 1,
        wdAnimationMarchingBlackAnts = 4,
        wdAnimationMarchingRedAnts = 5,
        wdAnimationNone = 0,
        wdAnimationShimmer = 6,
        wdAnimationSparkleText = 3,
    }

    const enum WdApplyQuickStyleSets {
        wdSessionStartSet = 1,
        wdTemplateSet = 2,
    }

    const enum WdArabicNumeral {
        wdNumeralArabic = 0,
        wdNumeralContext = 2,
        wdNumeralHindi = 1,
        wdNumeralSystem = 3,
    }

    const enum WdAraSpeller {
        wdBoth = 3,
        wdFinalYaa = 2,
        wdInitialAlef = 1,
        wdNone = 0,
    }

    const enum WdArrangeStyle {
        wdIcons = 1,
        wdTiled = 0,
    }

    const enum WdAutoFitBehavior {
        wdAutoFitContent = 1,
        wdAutoFitFixed = 0,
        wdAutoFitWindow = 2,
    }

    const enum WdAutoMacros {
        wdAutoClose = 3,
        wdAutoExec = 0,
        wdAutoExit = 4,
        wdAutoNew = 1,
        wdAutoOpen = 2,
        wdAutoSync = 5,
    }

    const enum WdAutoVersions {
        wdAutoVersionOff = 0,
        wdAutoVersionOnClose = 1,
    }

    const enum WdBaselineAlignment {
        wdBaselineAlignAuto = 4,
        wdBaselineAlignBaseline = 2,
        wdBaselineAlignCenter = 1,
        wdBaselineAlignFarEast50 = 3,
        wdBaselineAlignTop = 0,
    }

    const enum WdBookmarkSortBy {
        wdSortByLocation = 1,
        wdSortByName = 0,
    }

    const enum WdBorderDistanceFrom {
        wdBorderDistanceFromPageEdge = 1,
        wdBorderDistanceFromText = 0,
    }

    const enum WdBorderType {
        wdBorderBottom = -3,
        wdBorderDiagonalDown = -7,
        wdBorderDiagonalUp = -8,
        wdBorderHorizontal = -5,
        wdBorderLeft = -2,
        wdBorderRight = -4,
        wdBorderTop = -1,
        wdBorderVertical = -6,
    }

    const enum WdBorderTypeHID {
        emptyenum = 0,
    }

    const enum WdBreakType {
        wdColumnBreak = 8,
        wdLineBreak = 6,
        wdLineBreakClearLeft = 9,
        wdLineBreakClearRight = 10,
        wdPageBreak = 7,
        wdSectionBreakContinuous = 3,
        wdSectionBreakEvenPage = 4,
        wdSectionBreakNextPage = 2,
        wdSectionBreakOddPage = 5,
        wdTextWrappingBreak = 11,
    }

    const enum WdBrowserLevel {
        wdBrowserLevelMicrosoftInternetExplorer5 = 1,
        wdBrowserLevelMicrosoftInternetExplorer6 = 2,
        wdBrowserLevelV4 = 0,
    }

    const enum WdBrowseTarget {
        wdBrowseComment = 3,
        wdBrowseEdit = 10,
        wdBrowseEndnote = 5,
        wdBrowseField = 6,
        wdBrowseFind = 11,
        wdBrowseFootnote = 4,
        wdBrowseGoTo = 12,
        wdBrowseGraphic = 8,
        wdBrowseHeading = 9,
        wdBrowsePage = 1,
        wdBrowseSection = 2,
        wdBrowseTable = 7,
    }

    const enum WdBuildingBlockTypes {
        wdTypeAutoText = 9,
        wdTypeBibliography = 34,
        wdTypeCoverPage = 2,
        wdTypeCustom1 = 29,
        wdTypeCustom2 = 30,
        wdTypeCustom3 = 31,
        wdTypeCustom4 = 32,
        wdTypeCustom5 = 33,
        wdTypeCustomAutoText = 23,
        wdTypeCustomBibliography = 35,
        wdTypeCustomCoverPage = 16,
        wdTypeCustomEquations = 17,
        wdTypeCustomFooters = 18,
        wdTypeCustomHeaders = 19,
        wdTypeCustomPageNumber = 20,
        wdTypeCustomPageNumberBottom = 26,
        wdTypeCustomPageNumberPage = 27,
        wdTypeCustomPageNumberTop = 25,
        wdTypeCustomQuickParts = 15,
        wdTypeCustomTableOfContents = 28,
        wdTypeCustomTables = 21,
        wdTypeCustomTextBox = 24,
        wdTypeCustomWatermarks = 22,
        wdTypeEquations = 3,
        wdTypeFooters = 4,
        wdTypeHeaders = 5,
        wdTypePageNumber = 6,
        wdTypePageNumberBottom = 12,
        wdTypePageNumberPage = 13,
        wdTypePageNumberTop = 11,
        wdTypeQuickParts = 1,
        wdTypeTableOfContents = 14,
        wdTypeTables = 7,
        wdTypeTextBox = 10,
        wdTypeWatermarks = 8,
    }

    const enum WdBuiltInProperty {
        wdPropertyAppName = 9,
        wdPropertyAuthor = 3,
        wdPropertyBytes = 22,
        wdPropertyCategory = 18,
        wdPropertyCharacters = 16,
        wdPropertyCharsWSpaces = 30,
        wdPropertyComments = 5,
        wdPropertyCompany = 21,
        wdPropertyFormat = 19,
        wdPropertyHiddenSlides = 27,
        wdPropertyHyperlinkBase = 29,
        wdPropertyKeywords = 4,
        wdPropertyLastAuthor = 7,
        wdPropertyLines = 23,
        wdPropertyManager = 20,
        wdPropertyMMClips = 28,
        wdPropertyNotes = 26,
        wdPropertyPages = 14,
        wdPropertyParas = 24,
        wdPropertyRevision = 8,
        wdPropertySecurity = 17,
        wdPropertySlides = 25,
        wdPropertySubject = 2,
        wdPropertyTemplate = 6,
        wdPropertyTimeCreated = 11,
        wdPropertyTimeLastPrinted = 10,
        wdPropertyTimeLastSaved = 12,
        wdPropertyTitle = 1,
        wdPropertyVBATotalEdit = 13,
        wdPropertyWords = 15,
    }

    const enum WdBuiltinStyle {
        wdStyleBibliography = -266,
        wdStyleBlockQuotation = -85,
        wdStyleBodyText = -67,
        wdStyleBodyText2 = -81,
        wdStyleBodyText3 = -82,
        wdStyleBodyTextFirstIndent = -78,
        wdStyleBodyTextFirstIndent2 = -79,
        wdStyleBodyTextIndent = -68,
        wdStyleBodyTextIndent2 = -83,
        wdStyleBodyTextIndent3 = -84,
        wdStyleBookTitle = -265,
        wdStyleCaption = -35,
        wdStyleClosing = -64,
        wdStyleCommentReference = -40,
        wdStyleCommentText = -31,
        wdStyleDate = -77,
        wdStyleDefaultParagraphFont = -66,
        wdStyleEmphasis = -89,
        wdStyleEndnoteReference = -43,
        wdStyleEndnoteText = -44,
        wdStyleEnvelopeAddress = -37,
        wdStyleEnvelopeReturn = -38,
        wdStyleFooter = -33,
        wdStyleFootnoteReference = -39,
        wdStyleFootnoteText = -30,
        wdStyleHeader = -32,
        wdStyleHeading1 = -2,
        wdStyleHeading2 = -3,
        wdStyleHeading3 = -4,
        wdStyleHeading4 = -5,
        wdStyleHeading5 = -6,
        wdStyleHeading6 = -7,
        wdStyleHeading7 = -8,
        wdStyleHeading8 = -9,
        wdStyleHeading9 = -10,
        wdStyleHtmlAcronym = -96,
        wdStyleHtmlAddress = -97,
        wdStyleHtmlCite = -98,
        wdStyleHtmlCode = -99,
        wdStyleHtmlDfn = -100,
        wdStyleHtmlKbd = -101,
        wdStyleHtmlNormal = -95,
        wdStyleHtmlPre = -102,
        wdStyleHtmlSamp = -103,
        wdStyleHtmlTt = -104,
        wdStyleHtmlVar = -105,
        wdStyleHyperlink = -86,
        wdStyleHyperlinkFollowed = -87,
        wdStyleIndex1 = -11,
        wdStyleIndex2 = -12,
        wdStyleIndex3 = -13,
        wdStyleIndex4 = -14,
        wdStyleIndex5 = -15,
        wdStyleIndex6 = -16,
        wdStyleIndex7 = -17,
        wdStyleIndex8 = -18,
        wdStyleIndex9 = -19,
        wdStyleIndexHeading = -34,
        wdStyleIntenseEmphasis = -262,
        wdStyleIntenseQuote = -182,
        wdStyleIntenseReference = -264,
        wdStyleLineNumber = -41,
        wdStyleList = -48,
        wdStyleList2 = -51,
        wdStyleList3 = -52,
        wdStyleList4 = -53,
        wdStyleList5 = -54,
        wdStyleListBullet = -49,
        wdStyleListBullet2 = -55,
        wdStyleListBullet3 = -56,
        wdStyleListBullet4 = -57,
        wdStyleListBullet5 = -58,
        wdStyleListContinue = -69,
        wdStyleListContinue2 = -70,
        wdStyleListContinue3 = -71,
        wdStyleListContinue4 = -72,
        wdStyleListContinue5 = -73,
        wdStyleListNumber = -50,
        wdStyleListNumber2 = -59,
        wdStyleListNumber3 = -60,
        wdStyleListNumber4 = -61,
        wdStyleListNumber5 = -62,
        wdStyleListParagraph = -180,
        wdStyleMacroText = -46,
        wdStyleMessageHeader = -74,
        wdStyleNavPane = -90,
        wdStyleNormal = -1,
        wdStyleNormalIndent = -29,
        wdStyleNormalObject = -158,
        wdStyleNormalTable = -106,
        wdStyleNoteHeading = -80,
        wdStylePageNumber = -42,
        wdStylePlainText = -91,
        wdStyleQuote = -181,
        wdStyleSalutation = -76,
        wdStyleSignature = -65,
        wdStyleStrong = -88,
        wdStyleSubtitle = -75,
        wdStyleSubtleEmphasis = -261,
        wdStyleSubtleReference = -263,
        wdStyleTableColorfulGrid = -172,
        wdStyleTableColorfulList = -171,
        wdStyleTableColorfulShading = -170,
        wdStyleTableDarkList = -169,
        wdStyleTableLightGrid = -161,
        wdStyleTableLightGridAccent1 = -175,
        wdStyleTableLightList = -160,
        wdStyleTableLightListAccent1 = -174,
        wdStyleTableLightShading = -159,
        wdStyleTableLightShadingAccent1 = -173,
        wdStyleTableMediumGrid1 = -166,
        wdStyleTableMediumGrid2 = -167,
        wdStyleTableMediumGrid3 = -168,
        wdStyleTableMediumList1 = -164,
        wdStyleTableMediumList1Accent1 = -178,
        wdStyleTableMediumList2 = -165,
        wdStyleTableMediumShading1 = -162,
        wdStyleTableMediumShading1Accent1 = -176,
        wdStyleTableMediumShading2 = -163,
        wdStyleTableMediumShading2Accent1 = -177,
        wdStyleTableOfAuthorities = -45,
        wdStyleTableOfFigures = -36,
        wdStyleTitle = -63,
        wdStyleTOAHeading = -47,
        wdStyleTOC1 = -20,
        wdStyleTOC2 = -21,
        wdStyleTOC3 = -22,
        wdStyleTOC4 = -23,
        wdStyleTOC5 = -24,
        wdStyleTOC6 = -25,
        wdStyleTOC7 = -26,
        wdStyleTOC8 = -27,
        wdStyleTOC9 = -28,
        wdStyleTocHeading = -267,
    }

    const enum WdCalendarType {
        wdCalendarArabic = 1,
        wdCalendarHebrew = 2,
        wdCalendarJapan = 4,
        wdCalendarKorean = 6,
        wdCalendarSakaEra = 7,
        wdCalendarTaiwan = 3,
        wdCalendarThai = 5,
        wdCalendarTranslitEnglish = 8,
        wdCalendarTranslitFrench = 9,
        wdCalendarUmalqura = 13,
        wdCalendarWestern = 0,
    }

    const enum WdCalendarTypeBi {
        wdCalendarTypeBidi = 99,
        wdCalendarTypeGregorian = 100,
    }

    const enum WdCaptionLabelID {
        wdCaptionEquation = -3,
        wdCaptionFigure = -1,
        wdCaptionTable = -2,
    }

    const enum WdCaptionNumberStyle {
        wdCaptionNumberStyleArabic = 0,
        wdCaptionNumberStyleArabicFullWidth = 14,
        wdCaptionNumberStyleArabicLetter1 = 46,
        wdCaptionNumberStyleArabicLetter2 = 48,
        wdCaptionNumberStyleChosung = 25,
        wdCaptionNumberStyleGanada = 24,
        wdCaptionNumberStyleHanjaRead = 41,
        wdCaptionNumberStyleHanjaReadDigit = 42,
        wdCaptionNumberStyleHebrewLetter1 = 45,
        wdCaptionNumberStyleHebrewLetter2 = 47,
        wdCaptionNumberStyleHindiArabic = 51,
        wdCaptionNumberStyleHindiCardinalText = 52,
        wdCaptionNumberStyleHindiLetter1 = 49,
        wdCaptionNumberStyleHindiLetter2 = 50,
        wdCaptionNumberStyleKanji = 10,
        wdCaptionNumberStyleKanjiDigit = 11,
        wdCaptionNumberStyleKanjiTraditional = 16,
        wdCaptionNumberStyleLowercaseLetter = 4,
        wdCaptionNumberStyleLowercaseRoman = 2,
        wdCaptionNumberStyleNumberInCircle = 18,
        wdCaptionNumberStyleSimpChinNum2 = 38,
        wdCaptionNumberStyleSimpChinNum3 = 39,
        wdCaptionNumberStyleThaiArabic = 54,
        wdCaptionNumberStyleThaiCardinalText = 55,
        wdCaptionNumberStyleThaiLetter = 53,
        wdCaptionNumberStyleTradChinNum2 = 34,
        wdCaptionNumberStyleTradChinNum3 = 35,
        wdCaptionNumberStyleUppercaseLetter = 3,
        wdCaptionNumberStyleUppercaseRoman = 1,
        wdCaptionNumberStyleVietCardinalText = 56,
        wdCaptionNumberStyleZodiac1 = 30,
        wdCaptionNumberStyleZodiac2 = 31,
    }

    const enum WdCaptionNumberStyleHID {
        emptyenum = 0,
    }

    const enum WdCaptionPosition {
        wdCaptionPositionAbove = 0,
        wdCaptionPositionBelow = 1,
    }

    const enum WdCellColor {
        wdCellColorByAuthor = -1,
        wdCellColorLightBlue = 2,
        wdCellColorLightGray = 7,
        wdCellColorLightGreen = 6,
        wdCellColorLightOrange = 5,
        wdCellColorLightPurple = 4,
        wdCellColorLightYellow = 3,
        wdCellColorNoHighlight = 0,
        wdCellColorPink = 1,
    }

    const enum WdCellVerticalAlignment {
        wdCellAlignVerticalBottom = 3,
        wdCellAlignVerticalCenter = 1,
        wdCellAlignVerticalTop = 0,
    }

    const enum WdCharacterCase {
        wdFullWidth = 7,
        wdHalfWidth = 6,
        wdHiragana = 9,
        wdKatakana = 8,
        wdLowerCase = 0,
        wdNextCase = -1,
        wdTitleSentence = 4,
        wdTitleWord = 2,
        wdToggleCase = 5,
        wdUpperCase = 1,
    }

    const enum WdCharacterCaseHID {
        emptyenum = 0,
    }

    const enum WdCharacterWidth {
        wdWidthFullWidth = 7,
        wdWidthHalfWidth = 6,
    }

    const enum WdCheckInVersionType {
        wdCheckInMajorVersion = 1,
        wdCheckInMinorVersion = 0,
        wdCheckInOverwriteVersion = 2,
    }

    const enum WdChevronConvertRule {
        wdAlwaysConvert = 1,
        wdAskToConvert = 3,
        wdAskToNotConvert = 2,
        wdNeverConvert = 0,
    }

    const enum WdCollapseDirection {
        wdCollapseEnd = 0,
        wdCollapseStart = 1,
    }

    const enum WdColor {
        wdColorAqua = 13421619,
        wdColorAutomatic = -16777216,
        wdColorBlack = 0,
        wdColorBlue = 16711680,
        wdColorBlueGray = 10053222,
        wdColorBrightGreen = 65280,
        wdColorBrown = 13209,
        wdColorDarkBlue = 8388608,
        wdColorDarkGreen = 13056,
        wdColorDarkRed = 128,
        wdColorDarkTeal = 6697728,
        wdColorDarkYellow = 32896,
        wdColorGold = 52479,
        wdColorGray05 = 15987699,
        wdColorGray10 = 15132390,
        wdColorGray125 = 14737632,
        wdColorGray15 = 14277081,
        wdColorGray20 = 13421772,
        wdColorGray25 = 12632256,
        wdColorGray30 = 11776947,
        wdColorGray35 = 10921638,
        wdColorGray375 = 10526880,
        wdColorGray40 = 10066329,
        wdColorGray45 = 9211020,
        wdColorGray50 = 8421504,
        wdColorGray55 = 7566195,
        wdColorGray60 = 6710886,
        wdColorGray625 = 6316128,
        wdColorGray65 = 5855577,
        wdColorGray70 = 5000268,
        wdColorGray75 = 4210752,
        wdColorGray80 = 3355443,
        wdColorGray85 = 2500134,
        wdColorGray875 = 2105376,
        wdColorGray90 = 1644825,
        wdColorGray95 = 789516,
        wdColorGreen = 32768,
        wdColorIndigo = 10040115,
        wdColorLavender = 16751052,
        wdColorLightBlue = 16737843,
        wdColorLightGreen = 13434828,
        wdColorLightOrange = 39423,
        wdColorLightTurquoise = 16777164,
        wdColorLightYellow = 10092543,
        wdColorLime = 52377,
        wdColorOliveGreen = 13107,
        wdColorOrange = 26367,
        wdColorPaleBlue = 16764057,
        wdColorPink = 16711935,
        wdColorPlum = 6697881,
        wdColorRed = 255,
        wdColorRose = 13408767,
        wdColorSeaGreen = 6723891,
        wdColorSkyBlue = 16763904,
        wdColorTan = 10079487,
        wdColorTeal = 8421376,
        wdColorTurquoise = 16776960,
        wdColorViolet = 8388736,
        wdColorWhite = 16777215,
        wdColorYellow = 65535,
    }

    const enum WdColorIndex {
        wdAuto = 0,
        wdBlack = 1,
        wdBlue = 2,
        wdBrightGreen = 4,
        wdByAuthor = -1,
        wdDarkBlue = 9,
        wdDarkRed = 13,
        wdDarkYellow = 14,
        wdGray25 = 16,
        wdGray50 = 15,
        wdGreen = 11,
        wdNoHighlight = 0,
        wdPink = 5,
        wdRed = 6,
        wdTeal = 10,
        wdTurquoise = 3,
        wdViolet = 12,
        wdWhite = 8,
        wdYellow = 7,
    }

    const enum WdCompareDestination {
        wdCompareDestinationNew = 2,
        wdCompareDestinationOriginal = 0,
        wdCompareDestinationRevised = 1,
    }

    const enum WdCompareTarget {
        wdCompareTargetCurrent = 1,
        wdCompareTargetNew = 2,
        wdCompareTargetSelected = 0,
    }

    const enum WdCompatibility {
        wdAlignTablesRowByRow = 39,
        wdAllowSpaceOfSameStyleInTable = 54,
        wdApplyBreakingRules = 46,
        wdAutofitLikeWW11 = 57,
        wdAutospaceLikeWW7 = 38,
        wdCachedColBalance = 65,
        wdConvMailMergeEsc = 6,
        wdDisableOTKerning = 66,
        wdDontAdjustLineHeightInTable = 36,
        wdDontAutofitConstrainedTables = 56,
        wdDontBalanceSingleByteDoubleByteWidth = 16,
        wdDontBreakConstrainedForcedTables = 62,
        wdDontBreakWrappedTables = 43,
        wdDontOverrideTableStyleFontSzAndJustification = 68,
        wdDontSnapTextToGridInTableWithObjects = 44,
        wdDontULTrailSpace = 15,
        wdDontUseAsianBreakRulesInGrid = 48,
        wdDontUseHTMLParagraphAutoSpacing = 35,
        wdDontUseIndentAsNumberingTabStop = 52,
        wdDontVertAlignCellWithShape = 61,
        wdDontVertAlignInTextbox = 63,
        wdDontWrapTextWithPunctuation = 47,
        wdExactOnTop = 28,
        wdExpandShiftReturn = 14,
        wdFELineBreak11 = 53,
        wdFlipMirrorIndents = 67,
        wdFootnoteLayoutLikeWW8 = 34,
        wdForgetLastTabAlignment = 37,
        wdGrowAutofit = 50,
        wdHangulWidthLikeWW11 = 59,
        wdLayoutRawTableWidth = 40,
        wdLayoutTableRowsApart = 41,
        wdLeaveBackslashAlone = 13,
        wdLineWrapLikeWord6 = 32,
        wdMWSmallCaps = 22,
        wdNoColumnBalance = 5,
        wdNoExtraLineSpacing = 23,
        wdNoLeading = 20,
        wdNoSpaceForUL = 21,
        wdNoSpaceRaiseLower = 2,
        wdNoTabHangIndent = 1,
        wdOrigWordTableRules = 9,
        wdPrintBodyTextBeforeHeader = 19,
        wdPrintColBlack = 3,
        wdSelectFieldWithFirstOrLastCharacter = 45,
        wdShapeLayoutLikeWW8 = 33,
        wdShowBreaksInFrames = 11,
        wdSpacingInWholePoints = 18,
        wdSplitPgBreakAndParaMark = 60,
        wdSubFontBySize = 25,
        wdSuppressBottomSpacing = 29,
        wdSuppressSpBfAfterPgBrk = 7,
        wdSuppressTopSpacing = 8,
        wdSuppressTopSpacingMac5 = 17,
        wdSwapBordersFacingPages = 12,
        wdTransparentMetafiles = 10,
        wdTruncateFontHeight = 24,
        wdUnderlineTabInNumList = 58,
        wdUseNormalStyleForList = 51,
        wdUsePrinterMetrics = 26,
        wdUseWord2002TableStyleRules = 49,
        wdUseWord97LineBreakingRules = 42,
        wdWord11KerningPairs = 64,
        wdWPJustification = 31,
        wdWPSpaceWidth = 30,
        wdWrapTrailSpaces = 4,
        wdWW11IndentRules = 55,
        wdWW6BorderRules = 27,
    }

    const enum WdCompatibilityMode {
        wdCurrent = 65535,
        wdWord2003 = 11,
        wdWord2007 = 12,
        wdWord2010 = 14,
    }

    const enum WdConditionCode {
        wdEvenColumnBanding = 7,
        wdEvenRowBanding = 3,
        wdFirstColumn = 4,
        wdFirstRow = 0,
        wdLastColumn = 5,
        wdLastRow = 1,
        wdNECell = 8,
        wdNWCell = 9,
        wdOddColumnBanding = 6,
        wdOddRowBanding = 2,
        wdSECell = 10,
        wdSWCell = 11,
    }

    const enum WdConstants {
        wdAutoPosition = 0,
        wdBackward = -1073741823,
        wdCreatorCode = 1297307460,
        wdFirst = 1,
        wdForward = 1073741823,
        wdToggle = 9999998,
        wdUndefined = 9999999,
    }

    const enum WdContentControlDateStorageFormat {
        wdContentControlDateStorageDate = 1,
        wdContentControlDateStorageDateTime = 2,
        wdContentControlDateStorageText = 0,
    }

    const enum WdContentControlType {
        wdContentControlBuildingBlockGallery = 5,
        wdContentControlCheckBox = 8,
        wdContentControlComboBox = 3,
        wdContentControlDate = 6,
        wdContentControlDropdownList = 4,
        wdContentControlGroup = 7,
        wdContentControlPicture = 2,
        wdContentControlRichText = 0,
        wdContentControlText = 1,
    }

    const enum WdContinue {
        wdContinueDisabled = 0,
        wdContinueList = 2,
        wdResetList = 1,
    }

    const enum WdCountry {
        wdArgentina = 54,
        wdBrazil = 55,
        wdCanada = 2,
        wdChile = 56,
        wdChina = 86,
        wdDenmark = 45,
        wdFinland = 358,
        wdFrance = 33,
        wdGermany = 49,
        wdIceland = 354,
        wdItaly = 39,
        wdJapan = 81,
        wdKorea = 82,
        wdLatinAmerica = 3,
        wdMexico = 52,
        wdNetherlands = 31,
        wdNorway = 47,
        wdPeru = 51,
        wdSpain = 34,
        wdSweden = 46,
        wdTaiwan = 886,
        wdUK = 44,
        wdUS = 1,
        wdVenezuela = 58,
    }

    const enum WdCursorMovement {
        wdCursorMovementLogical = 0,
        wdCursorMovementVisual = 1,
    }

    const enum WdCursorType {
        wdCursorIBeam = 1,
        wdCursorNormal = 2,
        wdCursorNorthwestArrow = 3,
        wdCursorWait = 0,
    }

    const enum WdCustomLabelPageSize {
        wdCustomLabelA4 = 2,
        wdCustomLabelA4LS = 3,
        wdCustomLabelA5 = 4,
        wdCustomLabelA5LS = 5,
        wdCustomLabelB4JIS = 13,
        wdCustomLabelB5 = 6,
        wdCustomLabelFanfold = 8,
        wdCustomLabelHigaki = 11,
        wdCustomLabelHigakiLS = 12,
        wdCustomLabelLetter = 0,
        wdCustomLabelLetterLS = 1,
        wdCustomLabelMini = 7,
        wdCustomLabelVertHalfSheet = 9,
        wdCustomLabelVertHalfSheetLS = 10,
    }

    const enum WdDateLanguage {
        wdDateLanguageBidi = 10,
        wdDateLanguageLatin = 1033,
    }

    const enum WdDefaultFilePath {
        wdAutoRecoverPath = 5,
        wdBorderArtPath = 19,
        wdCurrentFolderPath = 14,
        wdDocumentsPath = 0,
        wdGraphicsFiltersPath = 10,
        wdPicturesPath = 1,
        wdProgramPath = 9,
        wdProofingToolsPath = 12,
        wdStartupPath = 8,
        wdStyleGalleryPath = 15,
        wdTempFilePath = 13,
        wdTextConvertersPath = 11,
        wdToolsPath = 6,
        wdTutorialPath = 7,
        wdUserOptionsPath = 4,
        wdUserTemplatesPath = 2,
        wdWorkgroupTemplatesPath = 3,
    }

    const enum WdDefaultListBehavior {
        wdWord10ListBehavior = 2,
        wdWord8ListBehavior = 0,
        wdWord9ListBehavior = 1,
    }

    const enum WdDefaultTableBehavior {
        wdWord8TableBehavior = 0,
        wdWord9TableBehavior = 1,
    }

    const enum WdDeleteCells {
        wdDeleteCellsEntireColumn = 3,
        wdDeleteCellsEntireRow = 2,
        wdDeleteCellsShiftLeft = 0,
        wdDeleteCellsShiftUp = 1,
    }

    const enum WdDeletedTextMark {
        wdDeletedTextMarkBold = 5,
        wdDeletedTextMarkCaret = 2,
        wdDeletedTextMarkColorOnly = 9,
        wdDeletedTextMarkDoubleStrikeThrough = 10,
        wdDeletedTextMarkDoubleUnderline = 8,
        wdDeletedTextMarkHidden = 0,
        wdDeletedTextMarkItalic = 6,
        wdDeletedTextMarkNone = 4,
        wdDeletedTextMarkPound = 3,
        wdDeletedTextMarkStrikeThrough = 1,
        wdDeletedTextMarkUnderline = 7,
    }

    const enum WdDiacriticColor {
        wdDiacriticColorBidi = 0,
        wdDiacriticColorLatin = 1,
    }

    const enum WdDictionaryType {
        wdGrammar = 1,
        wdHangulHanjaConversion = 8,
        wdHangulHanjaConversionCustom = 9,
        wdHyphenation = 3,
        wdSpelling = 0,
        wdSpellingComplete = 4,
        wdSpellingCustom = 5,
        wdSpellingLegal = 6,
        wdSpellingMedical = 7,
        wdThesaurus = 2,
    }

    const enum WdDictionaryTypeHID {
        emptyenum = 0,
    }

    const enum WdDisableFeaturesIntroducedAfter {
        wd70 = 0,
        wd70FE = 1,
        wd80 = 2,
    }

    const enum WdDocPartInsertOptions {
        wdInsertContent = 0,
        wdInsertPage = 2,
        wdInsertParagraph = 1,
    }

    const enum WdDocumentDirection {
        wdLeftToRight = 0,
        wdRightToLeft = 1,
    }

    const enum WdDocumentKind {
        wdDocumentEmail = 2,
        wdDocumentLetter = 1,
        wdDocumentNotSpecified = 0,
    }

    const enum WdDocumentMedium {
        wdDocument = 1,
        wdEmailMessage = 0,
        wdWebPage = 2,
    }

    const enum WdDocumentType {
        wdTypeDocument = 0,
        wdTypeFrameset = 2,
        wdTypeTemplate = 1,
    }

    const enum WdDocumentViewDirection {
        wdDocumentViewLtr = 1,
        wdDocumentViewRtl = 0,
    }

    const enum WdDropPosition {
        wdDropMargin = 2,
        wdDropNone = 0,
        wdDropNormal = 1,
    }

    const enum WdEditionOption {
        wdAutomaticUpdate = 3,
        wdCancelPublisher = 0,
        wdChangeAttributes = 5,
        wdManualUpdate = 4,
        wdOpenSource = 7,
        wdSelectPublisher = 2,
        wdSendPublisher = 1,
        wdUpdateSubscriber = 6,
    }

    const enum WdEditionType {
        wdPublisher = 0,
        wdSubscriber = 1,
    }

    const enum WdEditorType {
        wdEditorCurrent = -6,
        wdEditorEditors = -5,
        wdEditorEveryone = -1,
        wdEditorOwners = -4,
    }

    const enum WdEmailHTMLFidelity {
        wdEmailHTMLFidelityHigh = 3,
        wdEmailHTMLFidelityLow = 1,
        wdEmailHTMLFidelityMedium = 2,
    }

    const enum WdEmphasisMark {
        wdEmphasisMarkNone = 0,
        wdEmphasisMarkOverComma = 2,
        wdEmphasisMarkOverSolidCircle = 1,
        wdEmphasisMarkOverWhiteCircle = 3,
        wdEmphasisMarkUnderSolidCircle = 4,
    }

    const enum WdEnableCancelKey {
        wdCancelDisabled = 0,
        wdCancelInterrupt = 1,
    }

    const enum WdEncloseStyle {
        wdEncloseStyleLarge = 2,
        wdEncloseStyleNone = 0,
        wdEncloseStyleSmall = 1,
    }

    const enum WdEnclosureType {
        wdEnclosureCircle = 0,
        wdEnclosureDiamond = 3,
        wdEnclosureSquare = 1,
        wdEnclosureTriangle = 2,
    }

    const enum WdEndnoteLocation {
        wdEndOfDocument = 1,
        wdEndOfSection = 0,
    }

    const enum WdEnvelopeOrientation {
        wdCenterClockwise = 7,
        wdCenterLandscape = 4,
        wdCenterPortrait = 1,
        wdLeftClockwise = 6,
        wdLeftLandscape = 3,
        wdLeftPortrait = 0,
        wdRightClockwise = 8,
        wdRightLandscape = 5,
        wdRightPortrait = 2,
    }

    const enum WdExportCreateBookmarks {
        wdExportCreateHeadingBookmarks = 1,
        wdExportCreateNoBookmarks = 0,
        wdExportCreateWordBookmarks = 2,
    }

    const enum WdExportFormat {
        wdExportFormatPDF = 17,
        wdExportFormatXPS = 18,
    }

    const enum WdExportItem {
        wdExportDocumentContent = 0,
        wdExportDocumentWithMarkup = 7,
    }

    const enum WdExportOptimizeFor {
        wdExportOptimizeForOnScreen = 1,
        wdExportOptimizeForPrint = 0,
    }

    const enum WdExportRange {
        wdExportAllDocument = 0,
        wdExportCurrentPage = 2,
        wdExportFromTo = 3,
        wdExportSelection = 1,
    }

    const enum WdFarEastLineBreakLanguageID {
        wdLineBreakJapanese = 1041,
        wdLineBreakKorean = 1042,
        wdLineBreakSimplifiedChinese = 2052,
        wdLineBreakTraditionalChinese = 1028,
    }

    const enum WdFarEastLineBreakLevel {
        wdFarEastLineBreakLevelCustom = 2,
        wdFarEastLineBreakLevelNormal = 0,
        wdFarEastLineBreakLevelStrict = 1,
    }

    const enum WdFieldKind {
        wdFieldKindCold = 3,
        wdFieldKindHot = 1,
        wdFieldKindNone = 0,
        wdFieldKindWarm = 2,
    }

    const enum WdFieldShading {
        wdFieldShadingAlways = 1,
        wdFieldShadingNever = 0,
        wdFieldShadingWhenSelected = 2,
    }

    const enum WdFieldType {
        wdFieldAddin = 81,
        wdFieldAddressBlock = 93,
        wdFieldAdvance = 84,
        wdFieldAsk = 38,
        wdFieldAuthor = 17,
        wdFieldAutoNum = 54,
        wdFieldAutoNumLegal = 53,
        wdFieldAutoNumOutline = 52,
        wdFieldAutoText = 79,
        wdFieldAutoTextList = 89,
        wdFieldBarCode = 63,
        wdFieldBibliography = 97,
        wdFieldBidiOutline = 92,
        wdFieldCitation = 96,
        wdFieldComments = 19,
        wdFieldCompare = 80,
        wdFieldCreateDate = 21,
        wdFieldData = 40,
        wdFieldDatabase = 78,
        wdFieldDate = 31,
        wdFieldDDE = 45,
        wdFieldDDEAuto = 46,
        wdFieldDocProperty = 85,
        wdFieldDocVariable = 64,
        wdFieldEditTime = 25,
        wdFieldEmbed = 58,
        wdFieldEmpty = -1,
        wdFieldExpression = 34,
        wdFieldFileName = 29,
        wdFieldFileSize = 69,
        wdFieldFillIn = 39,
        wdFieldFootnoteRef = 5,
        wdFieldFormCheckBox = 71,
        wdFieldFormDropDown = 83,
        wdFieldFormTextInput = 70,
        wdFieldFormula = 49,
        wdFieldGlossary = 47,
        wdFieldGoToButton = 50,
        wdFieldGreetingLine = 94,
        wdFieldHTMLActiveX = 91,
        wdFieldHyperlink = 88,
        wdFieldIf = 7,
        wdFieldImport = 55,
        wdFieldInclude = 36,
        wdFieldIncludePicture = 67,
        wdFieldIncludeText = 68,
        wdFieldIndex = 8,
        wdFieldIndexEntry = 4,
        wdFieldInfo = 14,
        wdFieldKeyWord = 18,
        wdFieldLastSavedBy = 20,
        wdFieldLink = 56,
        wdFieldListNum = 90,
        wdFieldMacroButton = 51,
        wdFieldMergeField = 59,
        wdFieldMergeRec = 44,
        wdFieldMergeSeq = 75,
        wdFieldNext = 41,
        wdFieldNextIf = 42,
        wdFieldNoteRef = 72,
        wdFieldNumChars = 28,
        wdFieldNumPages = 26,
        wdFieldNumWords = 27,
        wdFieldOCX = 87,
        wdFieldPage = 33,
        wdFieldPageRef = 37,
        wdFieldPrint = 48,
        wdFieldPrintDate = 23,
        wdFieldPrivate = 77,
        wdFieldQuote = 35,
        wdFieldRef = 3,
        wdFieldRefDoc = 11,
        wdFieldRevisionNum = 24,
        wdFieldSaveDate = 22,
        wdFieldSection = 65,
        wdFieldSectionPages = 66,
        wdFieldSequence = 12,
        wdFieldSet = 6,
        wdFieldShape = 95,
        wdFieldSkipIf = 43,
        wdFieldStyleRef = 10,
        wdFieldSubject = 16,
        wdFieldSubscriber = 82,
        wdFieldSymbol = 57,
        wdFieldTemplate = 30,
        wdFieldTime = 32,
        wdFieldTitle = 15,
        wdFieldTOA = 73,
        wdFieldTOAEntry = 74,
        wdFieldTOC = 13,
        wdFieldTOCEntry = 9,
        wdFieldUserAddress = 62,
        wdFieldUserInitials = 61,
        wdFieldUserName = 60,
    }

    const enum WdFindMatch {
        wdMatchAnyCharacter = 65599,
        wdMatchAnyDigit = 65567,
        wdMatchAnyLetter = 65583,
        wdMatchCaretCharacter = 11,
        wdMatchColumnBreak = 14,
        wdMatchCommentMark = 5,
        wdMatchEmDash = 8212,
        wdMatchEnDash = 8211,
        wdMatchEndnoteMark = 65555,
        wdMatchField = 19,
        wdMatchFootnoteMark = 65554,
        wdMatchGraphic = 1,
        wdMatchManualLineBreak = 65551,
        wdMatchManualPageBreak = 65564,
        wdMatchNonbreakingHyphen = 30,
        wdMatchNonbreakingSpace = 160,
        wdMatchOptionalHyphen = 31,
        wdMatchParagraphMark = 65551,
        wdMatchSectionBreak = 65580,
        wdMatchTabCharacter = 9,
        wdMatchWhiteSpace = 65655,
    }

    const enum WdFindWrap {
        wdFindAsk = 2,
        wdFindContinue = 1,
        wdFindStop = 0,
    }

    const enum WdFlowDirection {
        wdFlowLtr = 0,
        wdFlowRtl = 1,
    }

    const enum WdFontBias {
        wdFontBiasDefault = 0,
        wdFontBiasDontCare = 255,
        wdFontBiasFareast = 1,
    }

    const enum WdFootnoteLocation {
        wdBeneathText = 1,
        wdBottomOfPage = 0,
    }

    const enum WdFramePosition {
        wdFrameBottom = -999997,
        wdFrameCenter = -999995,
        wdFrameInside = -999994,
        wdFrameLeft = -999998,
        wdFrameOutside = -999993,
        wdFrameRight = -999996,
        wdFrameTop = -999999,
    }

    const enum WdFramesetNewFrameLocation {
        wdFramesetNewFrameAbove = 0,
        wdFramesetNewFrameBelow = 1,
        wdFramesetNewFrameLeft = 3,
        wdFramesetNewFrameRight = 2,
    }

    const enum WdFramesetSizeType {
        wdFramesetSizeTypeFixed = 1,
        wdFramesetSizeTypePercent = 0,
        wdFramesetSizeTypeRelative = 2,
    }

    const enum WdFramesetType {
        wdFramesetTypeFrame = 1,
        wdFramesetTypeFrameset = 0,
    }

    const enum WdFrameSizeRule {
        wdFrameAtLeast = 1,
        wdFrameAuto = 0,
        wdFrameExact = 2,
    }

    const enum WdFrenchSpeller {
        wdFrenchBoth = 0,
        wdFrenchPostReform = 2,
        wdFrenchPreReform = 1,
    }

    const enum WdGoToDirection {
        wdGoToAbsolute = 1,
        wdGoToFirst = 1,
        wdGoToLast = -1,
        wdGoToNext = 2,
        wdGoToPrevious = 3,
        wdGoToRelative = 2,
    }

    const enum WdGoToItem {
        wdGoToBookmark = -1,
        wdGoToComment = 6,
        wdGoToEndnote = 5,
        wdGoToEquation = 10,
        wdGoToField = 7,
        wdGoToFootnote = 4,
        wdGoToGrammaticalError = 14,
        wdGoToGraphic = 8,
        wdGoToHeading = 11,
        wdGoToLine = 3,
        wdGoToObject = 9,
        wdGoToPage = 1,
        wdGoToPercent = 12,
        wdGoToProofreadingError = 15,
        wdGoToSection = 0,
        wdGoToSpellingError = 13,
        wdGoToTable = 2,
    }

    const enum WdGranularity {
        wdGranularityCharLevel = 0,
        wdGranularityWordLevel = 1,
    }

    const enum WdGutterStyle {
        wdGutterPosLeft = 0,
        wdGutterPosRight = 2,
        wdGutterPosTop = 1,
    }

    const enum WdGutterStyleOld {
        wdGutterStyleBidi = 2,
        wdGutterStyleLatin = -10,
    }

    const enum WdHeaderFooterIndex {
        wdHeaderFooterEvenPages = 3,
        wdHeaderFooterFirstPage = 2,
        wdHeaderFooterPrimary = 1,
    }

    const enum WdHeadingSeparator {
        wdHeadingSeparatorBlankLine = 1,
        wdHeadingSeparatorLetter = 2,
        wdHeadingSeparatorLetterFull = 4,
        wdHeadingSeparatorLetterLow = 3,
        wdHeadingSeparatorNone = 0,
    }

    const enum WdHebSpellStart {
        wdFullScript = 0,
        wdMixedAuthorizedScript = 3,
        wdMixedScript = 2,
        wdPartialScript = 1,
    }

    const enum WdHelpType {
        wdHelp = 0,
        wdHelpAbout = 1,
        wdHelpActiveWindow = 2,
        wdHelpContents = 3,
        wdHelpExamplesAndDemos = 4,
        wdHelpHWP = 13,
        wdHelpIchitaro = 11,
        wdHelpIndex = 5,
        wdHelpKeyboard = 6,
        wdHelpPE2 = 12,
        wdHelpPSSHelp = 7,
        wdHelpQuickPreview = 8,
        wdHelpSearch = 9,
        wdHelpUsingHelp = 10,
    }

    const enum WdHelpTypeHID {
        emptyenum = 0,
    }

    const enum WdHighAnsiText {
        wdAutoDetectHighAnsiFarEast = 2,
        wdHighAnsiIsFarEast = 0,
        wdHighAnsiIsHighAnsi = 1,
    }

    const enum WdHorizontalInVerticalType {
        wdHorizontalInVerticalFitInLine = 1,
        wdHorizontalInVerticalNone = 0,
        wdHorizontalInVerticalResizeLine = 2,
    }

    const enum WdHorizontalLineAlignment {
        wdHorizontalLineAlignCenter = 1,
        wdHorizontalLineAlignLeft = 0,
        wdHorizontalLineAlignRight = 2,
    }

    const enum WdHorizontalLineWidthType {
        wdHorizontalLineFixedWidth = -2,
        wdHorizontalLinePercentWidth = -1,
    }

    const enum WdIMEMode {
        wdIMEModeAlpha = 8,
        wdIMEModeAlphaFull = 7,
        wdIMEModeHangul = 10,
        wdIMEModeHangulFull = 9,
        wdIMEModeHiragana = 4,
        wdIMEModeKatakana = 5,
        wdIMEModeKatakanaHalf = 6,
        wdIMEModeNoControl = 0,
        wdIMEModeOff = 2,
        wdIMEModeOn = 1,
    }

    const enum WdIndexFilter {
        wdIndexFilterAiueo = 1,
        wdIndexFilterAkasatana = 2,
        wdIndexFilterChosung = 3,
        wdIndexFilterFull = 6,
        wdIndexFilterLow = 4,
        wdIndexFilterMedium = 5,
        wdIndexFilterNone = 0,
    }

    const enum WdIndexFormat {
        wdIndexBulleted = 4,
        wdIndexClassic = 1,
        wdIndexFancy = 2,
        wdIndexFormal = 5,
        wdIndexModern = 3,
        wdIndexSimple = 6,
        wdIndexTemplate = 0,
    }

    const enum WdIndexSortBy {
        wdIndexSortByStroke = 0,
        wdIndexSortBySyllable = 1,
    }

    const enum WdIndexType {
        wdIndexIndent = 0,
        wdIndexRunin = 1,
    }

    const enum WdInformation {
        wdActiveEndAdjustedPageNumber = 1,
        wdActiveEndPageNumber = 3,
        wdActiveEndSectionNumber = 2,
        wdAtEndOfRowMarker = 31,
        wdCapsLock = 21,
        wdEndOfRangeColumnNumber = 17,
        wdEndOfRangeRowNumber = 14,
        wdFirstCharacterColumnNumber = 9,
        wdFirstCharacterLineNumber = 10,
        wdFrameIsSelected = 11,
        wdHeaderFooterType = 33,
        wdHorizontalPositionRelativeToPage = 5,
        wdHorizontalPositionRelativeToTextBoundary = 7,
        wdInClipboard = 38,
        wdInCommentPane = 26,
        wdInEndnote = 36,
        wdInFootnote = 35,
        wdInFootnoteEndnotePane = 25,
        wdInHeaderFooter = 28,
        wdInMasterDocument = 34,
        wdInWordMail = 37,
        wdMaximumNumberOfColumns = 18,
        wdMaximumNumberOfRows = 15,
        wdNumberOfPagesInDocument = 4,
        wdNumLock = 22,
        wdOverType = 23,
        wdReferenceOfType = 32,
        wdRevisionMarking = 24,
        wdSelectionMode = 20,
        wdStartOfRangeColumnNumber = 16,
        wdStartOfRangeRowNumber = 13,
        wdVerticalPositionRelativeToPage = 6,
        wdVerticalPositionRelativeToTextBoundary = 8,
        wdWithInTable = 12,
        wdZoomPercentage = 19,
    }

    const enum WdInlineShapeType {
        wdInlineShapeChart = 12,
        wdInlineShapeDiagram = 13,
        wdInlineShapeEmbeddedOLEObject = 1,
        wdInlineShapeHorizontalLine = 6,
        wdInlineShapeLinkedOLEObject = 2,
        wdInlineShapeLinkedPicture = 4,
        wdInlineShapeLinkedPictureHorizontalLine = 8,
        wdInlineShapeLockedCanvas = 14,
        wdInlineShapeOLEControlObject = 5,
        wdInlineShapeOWSAnchor = 11,
        wdInlineShapePicture = 3,
        wdInlineShapePictureBullet = 9,
        wdInlineShapePictureHorizontalLine = 7,
        wdInlineShapeScriptAnchor = 10,
        wdInlineShapeSmartArt = 15,
    }

    const enum WdInsertCells {
        wdInsertCellsEntireColumn = 3,
        wdInsertCellsEntireRow = 2,
        wdInsertCellsShiftDown = 1,
        wdInsertCellsShiftRight = 0,
    }

    const enum WdInsertedTextMark {
        wdInsertedTextMarkBold = 1,
        wdInsertedTextMarkColorOnly = 5,
        wdInsertedTextMarkDoubleStrikeThrough = 7,
        wdInsertedTextMarkDoubleUnderline = 4,
        wdInsertedTextMarkItalic = 2,
        wdInsertedTextMarkNone = 0,
        wdInsertedTextMarkStrikeThrough = 6,
        wdInsertedTextMarkUnderline = 3,
    }

    const enum WdInternationalIndex {
        wd24HourClock = 21,
        wdCurrencyCode = 20,
        wdDateSeparator = 25,
        wdDecimalSeparator = 18,
        wdInternationalAM = 22,
        wdInternationalPM = 23,
        wdListSeparator = 17,
        wdProductLanguageID = 26,
        wdThousandsSeparator = 19,
        wdTimeSeparator = 24,
    }

    const enum WdJustificationMode {
        wdJustificationModeCompress = 1,
        wdJustificationModeCompressKana = 2,
        wdJustificationModeExpand = 0,
    }

    const enum WdKana {
        wdKanaHiragana = 9,
        wdKanaKatakana = 8,
    }

    const enum WdKey {
        wdKey0 = 48,
        wdKey1 = 49,
        wdKey2 = 50,
        wdKey3 = 51,
        wdKey4 = 52,
        wdKey5 = 53,
        wdKey6 = 54,
        wdKey7 = 55,
        wdKey8 = 56,
        wdKey9 = 57,
        wdKeyA = 65,
        wdKeyAlt = 1024,
        wdKeyB = 66,
        wdKeyBackSingleQuote = 192,
        wdKeyBackSlash = 220,
        wdKeyBackspace = 8,
        wdKeyC = 67,
        wdKeyCloseSquareBrace = 221,
        wdKeyComma = 188,
        wdKeyCommand = 512,
        wdKeyControl = 512,
        wdKeyD = 68,
        wdKeyDelete = 46,
        wdKeyE = 69,
        wdKeyEnd = 35,
        wdKeyEquals = 187,
        wdKeyEsc = 27,
        wdKeyF = 70,
        wdKeyF1 = 112,
        wdKeyF10 = 121,
        wdKeyF11 = 122,
        wdKeyF12 = 123,
        wdKeyF13 = 124,
        wdKeyF14 = 125,
        wdKeyF15 = 126,
        wdKeyF16 = 127,
        wdKeyF2 = 113,
        wdKeyF3 = 114,
        wdKeyF4 = 115,
        wdKeyF5 = 116,
        wdKeyF6 = 117,
        wdKeyF7 = 118,
        wdKeyF8 = 119,
        wdKeyF9 = 120,
        wdKeyG = 71,
        wdKeyH = 72,
        wdKeyHome = 36,
        wdKeyHyphen = 189,
        wdKeyI = 73,
        wdKeyInsert = 45,
        wdKeyJ = 74,
        wdKeyK = 75,
        wdKeyL = 76,
        wdKeyM = 77,
        wdKeyN = 78,
        wdKeyNumeric0 = 96,
        wdKeyNumeric1 = 97,
        wdKeyNumeric2 = 98,
        wdKeyNumeric3 = 99,
        wdKeyNumeric4 = 100,
        wdKeyNumeric5 = 101,
        wdKeyNumeric5Special = 12,
        wdKeyNumeric6 = 102,
        wdKeyNumeric7 = 103,
        wdKeyNumeric8 = 104,
        wdKeyNumeric9 = 105,
        wdKeyNumericAdd = 107,
        wdKeyNumericDecimal = 110,
        wdKeyNumericDivide = 111,
        wdKeyNumericMultiply = 106,
        wdKeyNumericSubtract = 109,
        wdKeyO = 79,
        wdKeyOpenSquareBrace = 219,
        wdKeyOption = 1024,
        wdKeyP = 80,
        wdKeyPageDown = 34,
        wdKeyPageUp = 33,
        wdKeyPause = 19,
        wdKeyPeriod = 190,
        wdKeyQ = 81,
        wdKeyR = 82,
        wdKeyReturn = 13,
        wdKeyS = 83,
        wdKeyScrollLock = 145,
        wdKeySemiColon = 186,
        wdKeyShift = 256,
        wdKeySingleQuote = 222,
        wdKeySlash = 191,
        wdKeySpacebar = 32,
        wdKeyT = 84,
        wdKeyTab = 9,
        wdKeyU = 85,
        wdKeyV = 86,
        wdKeyW = 87,
        wdKeyX = 88,
        wdKeyY = 89,
        wdKeyZ = 90,
        wdNoKey = 255,
    }

    const enum WdKeyCategory {
        wdKeyCategoryAutoText = 4,
        wdKeyCategoryCommand = 1,
        wdKeyCategoryDisable = 0,
        wdKeyCategoryFont = 3,
        wdKeyCategoryMacro = 2,
        wdKeyCategoryNil = -1,
        wdKeyCategoryPrefix = 7,
        wdKeyCategoryStyle = 5,
        wdKeyCategorySymbol = 6,
    }

    const enum WdLanguageID {
        wdAfrikaans = 1078,
        wdAlbanian = 1052,
        wdAmharic = 1118,
        wdArabic = 1025,
        wdArabicAlgeria = 5121,
        wdArabicBahrain = 15361,
        wdArabicEgypt = 3073,
        wdArabicIraq = 2049,
        wdArabicJordan = 11265,
        wdArabicKuwait = 13313,
        wdArabicLebanon = 12289,
        wdArabicLibya = 4097,
        wdArabicMorocco = 6145,
        wdArabicOman = 8193,
        wdArabicQatar = 16385,
        wdArabicSyria = 10241,
        wdArabicTunisia = 7169,
        wdArabicUAE = 14337,
        wdArabicYemen = 9217,
        wdArmenian = 1067,
        wdAssamese = 1101,
        wdAzeriCyrillic = 2092,
        wdAzeriLatin = 1068,
        wdBasque = 1069,
        wdBelgianDutch = 2067,
        wdBelgianFrench = 2060,
        wdBengali = 1093,
        wdBulgarian = 1026,
        wdBurmese = 1109,
        wdByelorussian = 1059,
        wdCatalan = 1027,
        wdCherokee = 1116,
        wdChineseHongKongSAR = 3076,
        wdChineseMacaoSAR = 5124,
        wdChineseSingapore = 4100,
        wdCroatian = 1050,
        wdCzech = 1029,
        wdDanish = 1030,
        wdDivehi = 1125,
        wdDutch = 1043,
        wdEdo = 1126,
        wdEnglishAUS = 3081,
        wdEnglishBelize = 10249,
        wdEnglishCanadian = 4105,
        wdEnglishCaribbean = 9225,
        wdEnglishIndonesia = 14345,
        wdEnglishIreland = 6153,
        wdEnglishJamaica = 8201,
        wdEnglishNewZealand = 5129,
        wdEnglishPhilippines = 13321,
        wdEnglishSouthAfrica = 7177,
        wdEnglishTrinidadTobago = 11273,
        wdEnglishUK = 2057,
        wdEnglishUS = 1033,
        wdEnglishZimbabwe = 12297,
        wdEstonian = 1061,
        wdFaeroese = 1080,
        wdFilipino = 1124,
        wdFinnish = 1035,
        wdFrench = 1036,
        wdFrenchCameroon = 11276,
        wdFrenchCanadian = 3084,
        wdFrenchCongoDRC = 9228,
        wdFrenchCotedIvoire = 12300,
        wdFrenchHaiti = 15372,
        wdFrenchLuxembourg = 5132,
        wdFrenchMali = 13324,
        wdFrenchMonaco = 6156,
        wdFrenchMorocco = 14348,
        wdFrenchReunion = 8204,
        wdFrenchSenegal = 10252,
        wdFrenchWestIndies = 7180,
        wdFrisianNetherlands = 1122,
        wdFulfulde = 1127,
        wdGaelicIreland = 2108,
        wdGaelicScotland = 1084,
        wdGalician = 1110,
        wdGeorgian = 1079,
        wdGerman = 1031,
        wdGermanAustria = 3079,
        wdGermanLiechtenstein = 5127,
        wdGermanLuxembourg = 4103,
        wdGreek = 1032,
        wdGuarani = 1140,
        wdGujarati = 1095,
        wdHausa = 1128,
        wdHawaiian = 1141,
        wdHebrew = 1037,
        wdHindi = 1081,
        wdHungarian = 1038,
        wdIbibio = 1129,
        wdIcelandic = 1039,
        wdIgbo = 1136,
        wdIndonesian = 1057,
        wdInuktitut = 1117,
        wdItalian = 1040,
        wdJapanese = 1041,
        wdKannada = 1099,
        wdKanuri = 1137,
        wdKashmiri = 1120,
        wdKazakh = 1087,
        wdKhmer = 1107,
        wdKirghiz = 1088,
        wdKonkani = 1111,
        wdKorean = 1042,
        wdKyrgyz = 1088,
        wdLanguageNone = 0,
        wdLao = 1108,
        wdLatin = 1142,
        wdLatvian = 1062,
        wdLithuanian = 1063,
        wdMacedonianFYROM = 1071,
        wdMalayalam = 1100,
        wdMalayBruneiDarussalam = 2110,
        wdMalaysian = 1086,
        wdMaltese = 1082,
        wdManipuri = 1112,
        wdMarathi = 1102,
        wdMexicanSpanish = 2058,
        wdMongolian = 1104,
        wdNepali = 1121,
        wdNoProofing = 1024,
        wdNorwegianBokmol = 1044,
        wdNorwegianNynorsk = 2068,
        wdOriya = 1096,
        wdOromo = 1138,
        wdPashto = 1123,
        wdPersian = 1065,
        wdPolish = 1045,
        wdPortuguese = 2070,
        wdPortugueseBrazil = 1046,
        wdPunjabi = 1094,
        wdRhaetoRomanic = 1047,
        wdRomanian = 1048,
        wdRomanianMoldova = 2072,
        wdRussian = 1049,
        wdRussianMoldova = 2073,
        wdSamiLappish = 1083,
        wdSanskrit = 1103,
        wdSerbianCyrillic = 3098,
        wdSerbianLatin = 2074,
        wdSesotho = 1072,
        wdSimplifiedChinese = 2052,
        wdSindhi = 1113,
        wdSindhiPakistan = 2137,
        wdSinhalese = 1115,
        wdSlovak = 1051,
        wdSlovenian = 1060,
        wdSomali = 1143,
        wdSorbian = 1070,
        wdSpanish = 1034,
        wdSpanishArgentina = 11274,
        wdSpanishBolivia = 16394,
        wdSpanishChile = 13322,
        wdSpanishColombia = 9226,
        wdSpanishCostaRica = 5130,
        wdSpanishDominicanRepublic = 7178,
        wdSpanishEcuador = 12298,
        wdSpanishElSalvador = 17418,
        wdSpanishGuatemala = 4106,
        wdSpanishHonduras = 18442,
        wdSpanishModernSort = 3082,
        wdSpanishNicaragua = 19466,
        wdSpanishPanama = 6154,
        wdSpanishParaguay = 15370,
        wdSpanishPeru = 10250,
        wdSpanishPuertoRico = 20490,
        wdSpanishUruguay = 14346,
        wdSpanishVenezuela = 8202,
        wdSutu = 1072,
        wdSwahili = 1089,
        wdSwedish = 1053,
        wdSwedishFinland = 2077,
        wdSwissFrench = 4108,
        wdSwissGerman = 2055,
        wdSwissItalian = 2064,
        wdSyriac = 1114,
        wdTajik = 1064,
        wdTamazight = 1119,
        wdTamazightLatin = 2143,
        wdTamil = 1097,
        wdTatar = 1092,
        wdTelugu = 1098,
        wdThai = 1054,
        wdTibetan = 1105,
        wdTigrignaEritrea = 2163,
        wdTigrignaEthiopic = 1139,
        wdTraditionalChinese = 1028,
        wdTsonga = 1073,
        wdTswana = 1074,
        wdTurkish = 1055,
        wdTurkmen = 1090,
        wdUkrainian = 1058,
        wdUrdu = 1056,
        wdUzbekCyrillic = 2115,
        wdUzbekLatin = 1091,
        wdVenda = 1075,
        wdVietnamese = 1066,
        wdWelsh = 1106,
        wdXhosa = 1076,
        wdYi = 1144,
        wdYiddish = 1085,
        wdYoruba = 1130,
        wdZulu = 1077,
    }

    const enum WdLanguageID2000 {
        wdChineseHongKong = 3076,
        wdChineseMacao = 5124,
        wdEnglishTrinidad = 11273,
    }

    const enum WdLayoutMode {
        wdLayoutModeDefault = 0,
        wdLayoutModeGenko = 3,
        wdLayoutModeGrid = 1,
        wdLayoutModeLineGrid = 2,
    }

    const enum WdLetterheadLocation {
        wdLetterBottom = 1,
        wdLetterLeft = 2,
        wdLetterRight = 3,
        wdLetterTop = 0,
    }

    const enum WdLetterStyle {
        wdFullBlock = 0,
        wdModifiedBlock = 1,
        wdSemiBlock = 2,
    }

    const enum WdLigatures {
        wdLigaturesAll = 15,
        wdLigaturesContextual = 2,
        wdLigaturesContextualDiscretional = 10,
        wdLigaturesContextualHistorical = 6,
        wdLigaturesContextualHistoricalDiscretional = 14,
        wdLigaturesDiscretional = 8,
        wdLigaturesHistorical = 4,
        wdLigaturesHistoricalDiscretional = 12,
        wdLigaturesNone = 0,
        wdLigaturesStandard = 1,
        wdLigaturesStandardContextual = 3,
        wdLigaturesStandardContextualDiscretional = 11,
        wdLigaturesStandardContextualHistorical = 7,
        wdLigaturesStandardDiscretional = 9,
        wdLigaturesStandardHistorical = 5,
        wdLigaturesStandardHistoricalDiscretional = 13,
    }

    const enum WdLineEndingType {
        wdCRLF = 0,
        wdCROnly = 1,
        wdLFCR = 3,
        wdLFOnly = 2,
        wdLSPS = 4,
    }

    const enum WdLineSpacing {
        wdLineSpace1pt5 = 1,
        wdLineSpaceAtLeast = 3,
        wdLineSpaceDouble = 2,
        wdLineSpaceExactly = 4,
        wdLineSpaceMultiple = 5,
        wdLineSpaceSingle = 0,
    }

    const enum WdLineStyle {
        wdLineStyleDashDot = 5,
        wdLineStyleDashDotDot = 6,
        wdLineStyleDashDotStroked = 20,
        wdLineStyleDashLargeGap = 4,
        wdLineStyleDashSmallGap = 3,
        wdLineStyleDot = 2,
        wdLineStyleDouble = 7,
        wdLineStyleDoubleWavy = 19,
        wdLineStyleEmboss3D = 21,
        wdLineStyleEngrave3D = 22,
        wdLineStyleInset = 24,
        wdLineStyleNone = 0,
        wdLineStyleOutset = 23,
        wdLineStyleSingle = 1,
        wdLineStyleSingleWavy = 18,
        wdLineStyleThickThinLargeGap = 16,
        wdLineStyleThickThinMedGap = 13,
        wdLineStyleThickThinSmallGap = 10,
        wdLineStyleThinThickLargeGap = 15,
        wdLineStyleThinThickMedGap = 12,
        wdLineStyleThinThickSmallGap = 9,
        wdLineStyleThinThickThinLargeGap = 17,
        wdLineStyleThinThickThinMedGap = 14,
        wdLineStyleThinThickThinSmallGap = 11,
        wdLineStyleTriple = 8,
    }

    const enum WdLineType {
        wdTableRow = 1,
        wdTextLine = 0,
    }

    const enum WdLineWidth {
        wdLineWidth025pt = 2,
        wdLineWidth050pt = 4,
        wdLineWidth075pt = 6,
        wdLineWidth100pt = 8,
        wdLineWidth150pt = 12,
        wdLineWidth225pt = 18,
        wdLineWidth300pt = 24,
        wdLineWidth450pt = 36,
        wdLineWidth600pt = 48,
    }

    const enum WdLinkType {
        wdLinkTypeChart = 8,
        wdLinkTypeDDE = 6,
        wdLinkTypeDDEAuto = 7,
        wdLinkTypeImport = 5,
        wdLinkTypeInclude = 4,
        wdLinkTypeOLE = 0,
        wdLinkTypePicture = 1,
        wdLinkTypeReference = 3,
        wdLinkTypeText = 2,
    }

    const enum WdListApplyTo {
        wdListApplyToSelection = 2,
        wdListApplyToThisPointForward = 1,
        wdListApplyToWholeList = 0,
    }

    const enum WdListGalleryType {
        wdBulletGallery = 1,
        wdNumberGallery = 2,
        wdOutlineNumberGallery = 3,
    }

    const enum WdListLevelAlignment {
        wdListLevelAlignCenter = 1,
        wdListLevelAlignLeft = 0,
        wdListLevelAlignRight = 2,
    }

    const enum WdListNumberStyle {
        wdListNumberStyleAiueo = 20,
        wdListNumberStyleAiueoHalfWidth = 12,
        wdListNumberStyleArabic = 0,
        wdListNumberStyleArabic1 = 46,
        wdListNumberStyleArabic2 = 48,
        wdListNumberStyleArabicFullWidth = 14,
        wdListNumberStyleArabicLZ = 22,
        wdListNumberStyleArabicLZ2 = 62,
        wdListNumberStyleArabicLZ3 = 63,
        wdListNumberStyleArabicLZ4 = 64,
        wdListNumberStyleBullet = 23,
        wdListNumberStyleCardinalText = 6,
        wdListNumberStyleChosung = 25,
        wdListNumberStyleGanada = 24,
        wdListNumberStyleGBNum1 = 26,
        wdListNumberStyleGBNum2 = 27,
        wdListNumberStyleGBNum3 = 28,
        wdListNumberStyleGBNum4 = 29,
        wdListNumberStyleHangul = 43,
        wdListNumberStyleHanja = 44,
        wdListNumberStyleHanjaRead = 41,
        wdListNumberStyleHanjaReadDigit = 42,
        wdListNumberStyleHebrew1 = 45,
        wdListNumberStyleHebrew2 = 47,
        wdListNumberStyleHindiArabic = 51,
        wdListNumberStyleHindiCardinalText = 52,
        wdListNumberStyleHindiLetter1 = 49,
        wdListNumberStyleHindiLetter2 = 50,
        wdListNumberStyleIroha = 21,
        wdListNumberStyleIrohaHalfWidth = 13,
        wdListNumberStyleKanji = 10,
        wdListNumberStyleKanjiDigit = 11,
        wdListNumberStyleKanjiTraditional = 16,
        wdListNumberStyleKanjiTraditional2 = 17,
        wdListNumberStyleLegal = 253,
        wdListNumberStyleLegalLZ = 254,
        wdListNumberStyleLowercaseBulgarian = 67,
        wdListNumberStyleLowercaseGreek = 60,
        wdListNumberStyleLowercaseLetter = 4,
        wdListNumberStyleLowercaseRoman = 2,
        wdListNumberStyleLowercaseRussian = 58,
        wdListNumberStyleLowercaseTurkish = 65,
        wdListNumberStyleNone = 255,
        wdListNumberStyleNumberInCircle = 18,
        wdListNumberStyleOrdinal = 5,
        wdListNumberStyleOrdinalText = 7,
        wdListNumberStylePictureBullet = 249,
        wdListNumberStyleSimpChinNum1 = 37,
        wdListNumberStyleSimpChinNum2 = 38,
        wdListNumberStyleSimpChinNum3 = 39,
        wdListNumberStyleSimpChinNum4 = 40,
        wdListNumberStyleThaiArabic = 54,
        wdListNumberStyleThaiCardinalText = 55,
        wdListNumberStyleThaiLetter = 53,
        wdListNumberStyleTradChinNum1 = 33,
        wdListNumberStyleTradChinNum2 = 34,
        wdListNumberStyleTradChinNum3 = 35,
        wdListNumberStyleTradChinNum4 = 36,
        wdListNumberStyleUppercaseBulgarian = 68,
        wdListNumberStyleUppercaseGreek = 61,
        wdListNumberStyleUppercaseLetter = 3,
        wdListNumberStyleUppercaseRoman = 1,
        wdListNumberStyleUppercaseRussian = 59,
        wdListNumberStyleUppercaseTurkish = 66,
        wdListNumberStyleVietCardinalText = 56,
        wdListNumberStyleZodiac1 = 30,
        wdListNumberStyleZodiac2 = 31,
        wdListNumberStyleZodiac3 = 32,
    }

    const enum WdListNumberStyleHID {
        emptyenum = 0,
    }

    const enum WdListType {
        wdListBullet = 2,
        wdListListNumOnly = 1,
        wdListMixedNumbering = 5,
        wdListNoNumbering = 0,
        wdListOutlineNumbering = 4,
        wdListPictureBullet = 6,
        wdListSimpleNumbering = 3,
    }

    const enum WdLockType {
        wdLockChanged = 3,
        wdLockEphemeral = 2,
        wdLockNone = 0,
        wdLockReservation = 1,
    }

    const enum WdMailerPriority {
        wdPriorityHigh = 3,
        wdPriorityLow = 2,
        wdPriorityNormal = 1,
    }

    const enum WdMailMergeActiveRecord {
        wdFirstDataSourceRecord = -6,
        wdFirstRecord = -4,
        wdLastDataSourceRecord = -7,
        wdLastRecord = -5,
        wdNextDataSourceRecord = -8,
        wdNextRecord = -2,
        wdNoActiveRecord = -1,
        wdPreviousDataSourceRecord = -9,
        wdPreviousRecord = -3,
    }

    const enum WdMailMergeComparison {
        wdMergeIfEqual = 0,
        wdMergeIfGreaterThan = 3,
        wdMergeIfGreaterThanOrEqual = 5,
        wdMergeIfIsBlank = 6,
        wdMergeIfIsNotBlank = 7,
        wdMergeIfLessThan = 2,
        wdMergeIfLessThanOrEqual = 4,
        wdMergeIfNotEqual = 1,
    }

    const enum WdMailMergeDataSource {
        wdMergeInfoFromAccessDDE = 1,
        wdMergeInfoFromExcelDDE = 2,
        wdMergeInfoFromMSQueryDDE = 3,
        wdMergeInfoFromODBC = 4,
        wdMergeInfoFromODSO = 5,
        wdMergeInfoFromWord = 0,
        wdNoMergeInfo = -1,
    }

    const enum WdMailMergeDefaultRecord {
        wdDefaultFirstRecord = 1,
        wdDefaultLastRecord = -16,
    }

    const enum WdMailMergeDestination {
        wdSendToEmail = 2,
        wdSendToFax = 3,
        wdSendToNewDocument = 0,
        wdSendToPrinter = 1,
    }

    const enum WdMailMergeMailFormat {
        wdMailFormatHTML = 1,
        wdMailFormatPlainText = 0,
    }

    const enum WdMailMergeMainDocType {
        wdCatalog = 3,
        wdDirectory = 3,
        wdEMail = 4,
        wdEnvelopes = 2,
        wdFax = 5,
        wdFormLetters = 0,
        wdMailingLabels = 1,
        wdNotAMergeDocument = -1,
    }

    const enum WdMailMergeState {
        wdDataSource = 5,
        wdMainAndDataSource = 2,
        wdMainAndHeader = 3,
        wdMainAndSourceAndHeader = 4,
        wdMainDocumentOnly = 1,
        wdNormalDocument = 0,
    }

    const enum WdMailSystem {
        wdMAPI = 1,
        wdMAPIandPowerTalk = 3,
        wdNoMailSystem = 0,
        wdPowerTalk = 2,
    }

    const enum WdMappedDataFields {
        wdAddress1 = 10,
        wdAddress2 = 11,
        wdAddress3 = 29,
        wdBusinessFax = 17,
        wdBusinessPhone = 16,
        wdCity = 12,
        wdCompany = 9,
        wdCountryRegion = 15,
        wdCourtesyTitle = 2,
        wdDepartment = 30,
        wdEmailAddress = 20,
        wdFirstName = 3,
        wdHomeFax = 19,
        wdHomePhone = 18,
        wdJobTitle = 8,
        wdLastName = 5,
        wdMiddleName = 4,
        wdNickname = 7,
        wdPostalCode = 14,
        wdRubyFirstName = 27,
        wdRubyLastName = 28,
        wdSpouseCourtesyTitle = 22,
        wdSpouseFirstName = 23,
        wdSpouseLastName = 25,
        wdSpouseMiddleName = 24,
        wdSpouseNickname = 26,
        wdState = 13,
        wdSuffix = 6,
        wdUniqueIdentifier = 1,
        wdWebPageURL = 21,
    }

    const enum WdMeasurementUnits {
        wdCentimeters = 1,
        wdInches = 0,
        wdMillimeters = 2,
        wdPicas = 4,
        wdPoints = 3,
    }

    const enum WdMeasurementUnitsHID {
        emptyenum = 0,
    }

    const enum WdMergeFormatFrom {
        wdMergeFormatFromOriginal = 0,
        wdMergeFormatFromPrompt = 2,
        wdMergeFormatFromRevised = 1,
    }

    const enum WdMergeSubType {
        wdMergeSubTypeAccess = 1,
        wdMergeSubTypeOAL = 2,
        wdMergeSubTypeOLEDBText = 5,
        wdMergeSubTypeOLEDBWord = 3,
        wdMergeSubTypeOther = 0,
        wdMergeSubTypeOutlook = 6,
        wdMergeSubTypeWord = 7,
        wdMergeSubTypeWord2000 = 8,
        wdMergeSubTypeWorks = 4,
    }

    const enum WdMergeTarget {
        wdMergeTargetCurrent = 1,
        wdMergeTargetNew = 2,
        wdMergeTargetSelected = 0,
    }

    const enum WdMonthNames {
        wdMonthNamesArabic = 0,
        wdMonthNamesEnglish = 1,
        wdMonthNamesFrench = 2,
    }

    const enum WdMoveFromTextMark {
        wdMoveFromTextMarkBold = 6,
        wdMoveFromTextMarkCaret = 3,
        wdMoveFromTextMarkColorOnly = 10,
        wdMoveFromTextMarkDoubleStrikeThrough = 1,
        wdMoveFromTextMarkDoubleUnderline = 9,
        wdMoveFromTextMarkHidden = 0,
        wdMoveFromTextMarkItalic = 7,
        wdMoveFromTextMarkNone = 5,
        wdMoveFromTextMarkPound = 4,
        wdMoveFromTextMarkStrikeThrough = 2,
        wdMoveFromTextMarkUnderline = 8,
    }

    const enum WdMovementType {
        wdExtend = 1,
        wdMove = 0,
    }

    const enum WdMoveToTextMark {
        wdMoveToTextMarkBold = 1,
        wdMoveToTextMarkColorOnly = 5,
        wdMoveToTextMarkDoubleStrikeThrough = 7,
        wdMoveToTextMarkDoubleUnderline = 4,
        wdMoveToTextMarkItalic = 2,
        wdMoveToTextMarkNone = 0,
        wdMoveToTextMarkStrikeThrough = 6,
        wdMoveToTextMarkUnderline = 3,
    }

    const enum WdMultipleWordConversionsMode {
        wdHangulToHanja = 0,
        wdHanjaToHangul = 1,
    }

    const enum WdNewDocumentType {
        wdNewBlankDocument = 0,
        wdNewEmailMessage = 2,
        wdNewFrameset = 3,
        wdNewWebPage = 1,
        wdNewXMLDocument = 4,
    }

    const enum WdNoteNumberStyle {
        wdNoteNumberStyleArabic = 0,
        wdNoteNumberStyleArabicFullWidth = 14,
        wdNoteNumberStyleArabicLetter1 = 46,
        wdNoteNumberStyleArabicLetter2 = 48,
        wdNoteNumberStyleHanjaRead = 41,
        wdNoteNumberStyleHanjaReadDigit = 42,
        wdNoteNumberStyleHebrewLetter1 = 45,
        wdNoteNumberStyleHebrewLetter2 = 47,
        wdNoteNumberStyleHindiArabic = 51,
        wdNoteNumberStyleHindiCardinalText = 52,
        wdNoteNumberStyleHindiLetter1 = 49,
        wdNoteNumberStyleHindiLetter2 = 50,
        wdNoteNumberStyleKanji = 10,
        wdNoteNumberStyleKanjiDigit = 11,
        wdNoteNumberStyleKanjiTraditional = 16,
        wdNoteNumberStyleLowercaseLetter = 4,
        wdNoteNumberStyleLowercaseRoman = 2,
        wdNoteNumberStyleNumberInCircle = 18,
        wdNoteNumberStyleSimpChinNum1 = 37,
        wdNoteNumberStyleSimpChinNum2 = 38,
        wdNoteNumberStyleSymbol = 9,
        wdNoteNumberStyleThaiArabic = 54,
        wdNoteNumberStyleThaiCardinalText = 55,
        wdNoteNumberStyleThaiLetter = 53,
        wdNoteNumberStyleTradChinNum1 = 33,
        wdNoteNumberStyleTradChinNum2 = 34,
        wdNoteNumberStyleUppercaseLetter = 3,
        wdNoteNumberStyleUppercaseRoman = 1,
        wdNoteNumberStyleVietCardinalText = 56,
    }

    const enum WdNoteNumberStyleHID {
        emptyenum = 0,
    }

    const enum WdNumberForm {
        wdNumberFormDefault = 0,
        wdNumberFormLining = 1,
        wdNumberFormOldStyle = 2,
    }

    const enum WdNumberingRule {
        wdRestartContinuous = 0,
        wdRestartPage = 2,
        wdRestartSection = 1,
    }

    const enum WdNumberSpacing {
        wdNumberSpacingDefault = 0,
        wdNumberSpacingProportional = 1,
        wdNumberSpacingTabular = 2,
    }

    const enum WdNumberStyleWordBasicBiDi {
        wdCaptionNumberStyleBidiLetter1 = 49,
        wdCaptionNumberStyleBidiLetter2 = 50,
        wdListNumberStyleBidi1 = 49,
        wdListNumberStyleBidi2 = 50,
        wdNoteNumberStyleBidiLetter1 = 49,
        wdNoteNumberStyleBidiLetter2 = 50,
        wdPageNumberStyleBidiLetter1 = 49,
        wdPageNumberStyleBidiLetter2 = 50,
    }

    const enum WdNumberType {
        wdNumberAllNumbers = 3,
        wdNumberListNum = 2,
        wdNumberParagraph = 1,
    }

    const enum WdOLEPlacement {
        wdFloatOverText = 1,
        wdInLine = 0,
    }

    const enum WdOLEType {
        wdOLEControl = 2,
        wdOLEEmbed = 1,
        wdOLELink = 0,
    }

    const enum WdOLEVerb {
        wdOLEVerbDiscardUndoState = -6,
        wdOLEVerbHide = -3,
        wdOLEVerbInPlaceActivate = -5,
        wdOLEVerbOpen = -2,
        wdOLEVerbPrimary = 0,
        wdOLEVerbShow = -1,
        wdOLEVerbUIActivate = -4,
    }

    const enum WdOMathBreakBin {
        wdOMathBreakBinAfter = 1,
        wdOMathBreakBinBefore = 0,
        wdOMathBreakBinRepeat = 2,
    }

    const enum WdOMathBreakSub {
        wdOMathBreakSubMinusMinus = 0,
        wdOMathBreakSubMinusPlus = 2,
        wdOMathBreakSubPlusMinus = 1,
    }

    const enum WdOMathFracType {
        wdOMathFracBar = 0,
        wdOMathFracLin = 3,
        wdOMathFracNoBar = 1,
        wdOMathFracSkw = 2,
    }

    const enum WdOMathFunctionType {
        wdOMathFunctionAcc = 1,
        wdOMathFunctionBar = 2,
        wdOMathFunctionBorderBox = 4,
        wdOMathFunctionBox = 3,
        wdOMathFunctionDelim = 5,
        wdOMathFunctionEqArray = 6,
        wdOMathFunctionFrac = 7,
        wdOMathFunctionFunc = 8,
        wdOMathFunctionGroupChar = 9,
        wdOMathFunctionLimLow = 10,
        wdOMathFunctionLimUpp = 11,
        wdOMathFunctionLiteralText = 22,
        wdOMathFunctionMat = 12,
        wdOMathFunctionNary = 13,
        wdOMathFunctionNormalText = 21,
        wdOMathFunctionPhantom = 14,
        wdOMathFunctionRad = 16,
        wdOMathFunctionScrPre = 15,
        wdOMathFunctionScrSub = 17,
        wdOMathFunctionScrSubSup = 18,
        wdOMathFunctionScrSup = 19,
        wdOMathFunctionText = 20,
    }

    const enum WdOMathHorizAlignType {
        wdOMathHorizAlignCenter = 0,
        wdOMathHorizAlignLeft = 1,
        wdOMathHorizAlignRight = 2,
    }

    const enum WdOMathJc {
        wdOMathJcCenter = 2,
        wdOMathJcCenterGroup = 1,
        wdOMathJcInline = 7,
        wdOMathJcLeft = 3,
        wdOMathJcRight = 4,
    }

    const enum WdOMathShapeType {
        wdOMathShapeCentered = 0,
        wdOMathShapeMatch = 1,
    }

    const enum WdOMathSpacingRule {
        wdOMathSpacing1pt5 = 1,
        wdOMathSpacingDouble = 2,
        wdOMathSpacingExactly = 3,
        wdOMathSpacingMultiple = 4,
        wdOMathSpacingSingle = 0,
    }

    const enum WdOMathType {
        wdOMathDisplay = 0,
        wdOMathInline = 1,
    }

    const enum WdOMathVertAlignType {
        wdOMathVertAlignBottom = 2,
        wdOMathVertAlignCenter = 0,
        wdOMathVertAlignTop = 1,
    }

    const enum WdOpenFormat {
        wdOpenFormatAllWord = 6,
        wdOpenFormatAllWordTemplates = 13,
        wdOpenFormatAuto = 0,
        wdOpenFormatDocument = 1,
        wdOpenFormatDocument97 = 1,
        wdOpenFormatEncodedText = 5,
        wdOpenFormatOpenDocumentText = 18,
        wdOpenFormatRTF = 3,
        wdOpenFormatTemplate = 2,
        wdOpenFormatTemplate97 = 2,
        wdOpenFormatText = 4,
        wdOpenFormatUnicodeText = 5,
        wdOpenFormatWebPages = 7,
        wdOpenFormatXML = 8,
        wdOpenFormatXMLDocument = 9,
        wdOpenFormatXMLDocumentMacroEnabled = 10,
        wdOpenFormatXMLDocumentMacroEnabledSerialized = 15,
        wdOpenFormatXMLDocumentSerialized = 14,
        wdOpenFormatXMLTemplate = 11,
        wdOpenFormatXMLTemplateMacroEnabled = 12,
        wdOpenFormatXMLTemplateMacroEnabledSerialized = 17,
        wdOpenFormatXMLTemplateSerialized = 16,
    }

    const enum WdOrganizerObject {
        wdOrganizerObjectAutoText = 1,
        wdOrganizerObjectCommandBars = 2,
        wdOrganizerObjectProjectItems = 3,
        wdOrganizerObjectStyles = 0,
    }

    const enum WdOrientation {
        wdOrientLandscape = 1,
        wdOrientPortrait = 0,
    }

    const enum WdOriginalFormat {
        wdOriginalDocumentFormat = 1,
        wdPromptUser = 2,
        wdWordDocument = 0,
    }

    const enum WdOutlineLevel {
        wdOutlineLevel1 = 1,
        wdOutlineLevel2 = 2,
        wdOutlineLevel3 = 3,
        wdOutlineLevel4 = 4,
        wdOutlineLevel5 = 5,
        wdOutlineLevel6 = 6,
        wdOutlineLevel7 = 7,
        wdOutlineLevel8 = 8,
        wdOutlineLevel9 = 9,
        wdOutlineLevelBodyText = 10,
    }

    const enum WdPageBorderArt {
        wdArtApples = 1,
        wdArtArchedScallops = 97,
        wdArtBabyPacifier = 70,
        wdArtBabyRattle = 71,
        wdArtBalloons3Colors = 11,
        wdArtBalloonsHotAir = 12,
        wdArtBasicBlackDashes = 155,
        wdArtBasicBlackDots = 156,
        wdArtBasicBlackSquares = 154,
        wdArtBasicThinLines = 151,
        wdArtBasicWhiteDashes = 152,
        wdArtBasicWhiteDots = 147,
        wdArtBasicWhiteSquares = 153,
        wdArtBasicWideInline = 150,
        wdArtBasicWideMidline = 148,
        wdArtBasicWideOutline = 149,
        wdArtBats = 37,
        wdArtBirds = 102,
        wdArtBirdsFlight = 35,
        wdArtCabins = 72,
        wdArtCakeSlice = 3,
        wdArtCandyCorn = 4,
        wdArtCelticKnotwork = 99,
        wdArtCertificateBanner = 158,
        wdArtChainLink = 128,
        wdArtChampagneBottle = 6,
        wdArtCheckedBarBlack = 145,
        wdArtCheckedBarColor = 61,
        wdArtCheckered = 144,
        wdArtChristmasTree = 8,
        wdArtCirclesLines = 91,
        wdArtCirclesRectangles = 140,
        wdArtClassicalWave = 56,
        wdArtClocks = 27,
        wdArtCompass = 54,
        wdArtConfetti = 31,
        wdArtConfettiGrays = 115,
        wdArtConfettiOutline = 116,
        wdArtConfettiStreamers = 14,
        wdArtConfettiWhite = 117,
        wdArtCornerTriangles = 141,
        wdArtCouponCutoutDashes = 163,
        wdArtCouponCutoutDots = 164,
        wdArtCrazyMaze = 100,
        wdArtCreaturesButterfly = 32,
        wdArtCreaturesFish = 34,
        wdArtCreaturesInsects = 142,
        wdArtCreaturesLadyBug = 33,
        wdArtCrossStitch = 138,
        wdArtCup = 67,
        wdArtDecoArch = 89,
        wdArtDecoArchColor = 50,
        wdArtDecoBlocks = 90,
        wdArtDiamondsGray = 88,
        wdArtDoubleD = 55,
        wdArtDoubleDiamonds = 127,
        wdArtEarth1 = 22,
        wdArtEarth2 = 21,
        wdArtEclipsingSquares1 = 101,
        wdArtEclipsingSquares2 = 86,
        wdArtEggsBlack = 66,
        wdArtFans = 51,
        wdArtFilm = 52,
        wdArtFirecrackers = 28,
        wdArtFlowersBlockPrint = 49,
        wdArtFlowersDaisies = 48,
        wdArtFlowersModern1 = 45,
        wdArtFlowersModern2 = 44,
        wdArtFlowersPansy = 43,
        wdArtFlowersRedRose = 39,
        wdArtFlowersRoses = 38,
        wdArtFlowersTeacup = 103,
        wdArtFlowersTiny = 42,
        wdArtGems = 139,
        wdArtGingerbreadMan = 69,
        wdArtGradient = 122,
        wdArtHandmade1 = 159,
        wdArtHandmade2 = 160,
        wdArtHeartBalloon = 16,
        wdArtHeartGray = 68,
        wdArtHearts = 15,
        wdArtHeebieJeebies = 120,
        wdArtHolly = 41,
        wdArtHouseFunky = 73,
        wdArtHypnotic = 87,
        wdArtIceCreamCones = 5,
        wdArtLightBulb = 121,
        wdArtLightning1 = 53,
        wdArtLightning2 = 119,
        wdArtMapleLeaf = 81,
        wdArtMapleMuffins = 2,
        wdArtMapPins = 30,
        wdArtMarquee = 146,
        wdArtMarqueeToothed = 131,
        wdArtMoons = 125,
        wdArtMosaic = 118,
        wdArtMusicNotes = 79,
        wdArtNorthwest = 104,
        wdArtOvals = 126,
        wdArtPackages = 26,
        wdArtPalmsBlack = 80,
        wdArtPalmsColor = 10,
        wdArtPaperClips = 82,
        wdArtPapyrus = 92,
        wdArtPartyFavor = 13,
        wdArtPartyGlass = 7,
        wdArtPencils = 25,
        wdArtPeople = 84,
        wdArtPeopleHats = 23,
        wdArtPeopleWaving = 85,
        wdArtPoinsettias = 40,
        wdArtPostageStamp = 135,
        wdArtPumpkin1 = 65,
        wdArtPushPinNote1 = 63,
        wdArtPushPinNote2 = 64,
        wdArtPyramids = 113,
        wdArtPyramidsAbove = 114,
        wdArtQuadrants = 60,
        wdArtRings = 29,
        wdArtSafari = 98,
        wdArtSawtooth = 133,
        wdArtSawtoothGray = 134,
        wdArtScaredCat = 36,
        wdArtSeattle = 78,
        wdArtShadowedSquares = 57,
        wdArtSharksTeeth = 132,
        wdArtShorebirdTracks = 83,
        wdArtSkyrocket = 77,
        wdArtSnowflakeFancy = 76,
        wdArtSnowflakes = 75,
        wdArtSombrero = 24,
        wdArtSouthwest = 105,
        wdArtStars = 19,
        wdArtStars3D = 17,
        wdArtStarsBlack = 74,
        wdArtStarsShadowed = 18,
        wdArtStarsTop = 157,
        wdArtSun = 20,
        wdArtSwirligig = 62,
        wdArtTornPaper = 161,
        wdArtTornPaperBlack = 162,
        wdArtTrees = 9,
        wdArtTriangleParty = 123,
        wdArtTriangles = 129,
        wdArtTribal1 = 130,
        wdArtTribal2 = 109,
        wdArtTribal3 = 108,
        wdArtTribal4 = 107,
        wdArtTribal5 = 110,
        wdArtTribal6 = 106,
        wdArtTwistedLines1 = 58,
        wdArtTwistedLines2 = 124,
        wdArtVine = 47,
        wdArtWaveline = 59,
        wdArtWeavingAngles = 96,
        wdArtWeavingBraid = 94,
        wdArtWeavingRibbon = 95,
        wdArtWeavingStrips = 136,
        wdArtWhiteFlowers = 46,
        wdArtWoodwork = 93,
        wdArtXIllusions = 111,
        wdArtZanyTriangles = 112,
        wdArtZigZag = 137,
        wdArtZigZagStitch = 143,
    }

    const enum WdPageFit {
        wdPageFitBestFit = 2,
        wdPageFitFullPage = 1,
        wdPageFitNone = 0,
        wdPageFitTextFit = 3,
    }

    const enum WdPageNumberAlignment {
        wdAlignPageNumberCenter = 1,
        wdAlignPageNumberInside = 3,
        wdAlignPageNumberLeft = 0,
        wdAlignPageNumberOutside = 4,
        wdAlignPageNumberRight = 2,
    }

    const enum WdPageNumberStyle {
        wdPageNumberStyleArabic = 0,
        wdPageNumberStyleArabicFullWidth = 14,
        wdPageNumberStyleArabicLetter1 = 46,
        wdPageNumberStyleArabicLetter2 = 48,
        wdPageNumberStyleHanjaRead = 41,
        wdPageNumberStyleHanjaReadDigit = 42,
        wdPageNumberStyleHebrewLetter1 = 45,
        wdPageNumberStyleHebrewLetter2 = 47,
        wdPageNumberStyleHindiArabic = 51,
        wdPageNumberStyleHindiCardinalText = 52,
        wdPageNumberStyleHindiLetter1 = 49,
        wdPageNumberStyleHindiLetter2 = 50,
        wdPageNumberStyleKanji = 10,
        wdPageNumberStyleKanjiDigit = 11,
        wdPageNumberStyleKanjiTraditional = 16,
        wdPageNumberStyleLowercaseLetter = 4,
        wdPageNumberStyleLowercaseRoman = 2,
        wdPageNumberStyleNumberInCircle = 18,
        wdPageNumberStyleNumberInDash = 57,
        wdPageNumberStyleSimpChinNum1 = 37,
        wdPageNumberStyleSimpChinNum2 = 38,
        wdPageNumberStyleThaiArabic = 54,
        wdPageNumberStyleThaiCardinalText = 55,
        wdPageNumberStyleThaiLetter = 53,
        wdPageNumberStyleTradChinNum1 = 33,
        wdPageNumberStyleTradChinNum2 = 34,
        wdPageNumberStyleUppercaseLetter = 3,
        wdPageNumberStyleUppercaseRoman = 1,
        wdPageNumberStyleVietCardinalText = 56,
    }

    const enum WdPageNumberStyleHID {
        emptyenum = 0,
    }

    const enum WdPaperSize {
        wdPaper10x14 = 0,
        wdPaper11x17 = 1,
        wdPaperA3 = 6,
        wdPaperA4 = 7,
        wdPaperA4Small = 8,
        wdPaperA5 = 9,
        wdPaperB4 = 10,
        wdPaperB5 = 11,
        wdPaperCSheet = 12,
        wdPaperCustom = 41,
        wdPaperDSheet = 13,
        wdPaperEnvelope10 = 25,
        wdPaperEnvelope11 = 26,
        wdPaperEnvelope12 = 27,
        wdPaperEnvelope14 = 28,
        wdPaperEnvelope9 = 24,
        wdPaperEnvelopeB4 = 29,
        wdPaperEnvelopeB5 = 30,
        wdPaperEnvelopeB6 = 31,
        wdPaperEnvelopeC3 = 32,
        wdPaperEnvelopeC4 = 33,
        wdPaperEnvelopeC5 = 34,
        wdPaperEnvelopeC6 = 35,
        wdPaperEnvelopeC65 = 36,
        wdPaperEnvelopeDL = 37,
        wdPaperEnvelopeItaly = 38,
        wdPaperEnvelopeMonarch = 39,
        wdPaperEnvelopePersonal = 40,
        wdPaperESheet = 14,
        wdPaperExecutive = 5,
        wdPaperFanfoldLegalGerman = 15,
        wdPaperFanfoldStdGerman = 16,
        wdPaperFanfoldUS = 17,
        wdPaperFolio = 18,
        wdPaperLedger = 19,
        wdPaperLegal = 4,
        wdPaperLetter = 2,
        wdPaperLetterSmall = 3,
        wdPaperNote = 20,
        wdPaperQuarto = 21,
        wdPaperStatement = 22,
        wdPaperTabloid = 23,
    }

    const enum WdPaperTray {
        wdPrinterAutomaticSheetFeed = 7,
        wdPrinterDefaultBin = 0,
        wdPrinterEnvelopeFeed = 5,
        wdPrinterFormSource = 15,
        wdPrinterLargeCapacityBin = 11,
        wdPrinterLargeFormatBin = 10,
        wdPrinterLowerBin = 2,
        wdPrinterManualEnvelopeFeed = 6,
        wdPrinterManualFeed = 4,
        wdPrinterMiddleBin = 3,
        wdPrinterOnlyBin = 1,
        wdPrinterPaperCassette = 14,
        wdPrinterSmallFormatBin = 9,
        wdPrinterTractorFeed = 8,
        wdPrinterUpperBin = 1,
    }

    const enum WdParagraphAlignment {
        wdAlignParagraphCenter = 1,
        wdAlignParagraphDistribute = 4,
        wdAlignParagraphJustify = 3,
        wdAlignParagraphJustifyHi = 7,
        wdAlignParagraphJustifyLow = 8,
        wdAlignParagraphJustifyMed = 5,
        wdAlignParagraphLeft = 0,
        wdAlignParagraphRight = 2,
        wdAlignParagraphThaiJustify = 9,
    }

    const enum WdParagraphAlignmentHID {
        emptyenum = 0,
    }

    const enum WdPartOfSpeech {
        wdAdjective = 0,
        wdAdverb = 2,
        wdConjunction = 5,
        wdIdiom = 8,
        wdInterjection = 7,
        wdNoun = 1,
        wdOther = 9,
        wdPreposition = 6,
        wdPronoun = 4,
        wdVerb = 3,
    }

    const enum WdPasteDataType {
        wdPasteBitmap = 4,
        wdPasteDeviceIndependentBitmap = 5,
        wdPasteEnhancedMetafile = 9,
        wdPasteHTML = 10,
        wdPasteHyperlink = 7,
        wdPasteMetafilePicture = 3,
        wdPasteOLEObject = 0,
        wdPasteRTF = 1,
        wdPasteShape = 8,
        wdPasteText = 2,
    }

    const enum WdPasteOptions {
        wdKeepSourceFormatting = 0,
        wdKeepTextOnly = 2,
        wdMatchDestinationFormatting = 1,
        wdUseDestinationStyles = 3,
    }

    const enum WdPhoneticGuideAlignmentType {
        wdPhoneticGuideAlignmentCenter = 0,
        wdPhoneticGuideAlignmentLeft = 3,
        wdPhoneticGuideAlignmentOneTwoOne = 2,
        wdPhoneticGuideAlignmentRight = 4,
        wdPhoneticGuideAlignmentRightVertical = 5,
        wdPhoneticGuideAlignmentZeroOneZero = 1,
    }

    const enum WdPictureLinkType {
        wdLinkDataInDoc = 1,
        wdLinkDataOnDisk = 2,
        wdLinkNone = 0,
    }

    const enum WdPortugueseReform {
        wdPortugueseBoth = 3,
        wdPortuguesePostReform = 2,
        wdPortuguesePreReform = 1,
    }

    const enum WdPreferredWidthType {
        wdPreferredWidthAuto = 1,
        wdPreferredWidthPercent = 2,
        wdPreferredWidthPoints = 3,
    }

    const enum WdPrintOutItem {
        wdPrintAutoTextEntries = 4,
        wdPrintComments = 2,
        wdPrintDocumentContent = 0,
        wdPrintDocumentWithMarkup = 7,
        wdPrintEnvelope = 6,
        wdPrintKeyAssignments = 5,
        wdPrintMarkup = 2,
        wdPrintProperties = 1,
        wdPrintStyles = 3,
    }

    const enum WdPrintOutPages {
        wdPrintAllPages = 0,
        wdPrintEvenPagesOnly = 2,
        wdPrintOddPagesOnly = 1,
    }

    const enum WdPrintOutRange {
        wdPrintAllDocument = 0,
        wdPrintCurrentPage = 2,
        wdPrintFromTo = 3,
        wdPrintRangeOfPages = 4,
        wdPrintSelection = 1,
    }

    const enum WdProofreadingErrorType {
        wdGrammaticalError = 1,
        wdSpellingError = 0,
    }

    const enum WdProtectedViewCloseReason {
        wdProtectedViewCloseEdit = 1,
        wdProtectedViewCloseForced = 2,
        wdProtectedViewCloseNormal = 0,
    }

    const enum WdProtectionType {
        wdAllowOnlyComments = 1,
        wdAllowOnlyFormFields = 2,
        wdAllowOnlyReading = 3,
        wdAllowOnlyRevisions = 0,
        wdNoProtection = -1,
    }

    const enum WdReadingLayoutMargin {
        wdAutomaticMargin = 0,
        wdFullMargin = 2,
        wdSuppressMargin = 1,
    }

    const enum WdReadingOrder {
        wdReadingOrderLtr = 1,
        wdReadingOrderRtl = 0,
    }

    const enum WdRecoveryType {
        wdChart = 14,
        wdChartLinked = 15,
        wdChartPicture = 13,
        wdFormatOriginalFormatting = 16,
        wdFormatPlainText = 22,
        wdFormatSurroundingFormattingWithEmphasis = 20,
        wdListCombineWithExistingList = 24,
        wdListContinueNumbering = 7,
        wdListDontMerge = 25,
        wdListRestartNumbering = 8,
        wdPasteDefault = 0,
        wdSingleCellTable = 6,
        wdSingleCellText = 5,
        wdTableAppendTable = 10,
        wdTableInsertAsRows = 11,
        wdTableOriginalFormatting = 12,
        wdTableOverwriteCells = 23,
        wdUseDestinationStylesRecovery = 19,
    }

    const enum WdRectangleType {
        wdDocumentControlRectangle = 13,
        wdLineBetweenColumnRectangle = 5,
        wdMailNavArea = 12,
        wdMarkupRectangle = 2,
        wdMarkupRectangleArea = 8,
        wdMarkupRectangleButton = 3,
        wdMarkupRectangleMoveMatch = 10,
        wdPageBorderRectangle = 4,
        wdReadingModeNavigation = 9,
        wdReadingModePanningArea = 11,
        wdSelection = 6,
        wdShapeRectangle = 1,
        wdSystem = 7,
        wdTextRectangle = 0,
    }

    const enum WdReferenceKind {
        wdContentText = -1,
        wdEndnoteNumber = 6,
        wdEndnoteNumberFormatted = 17,
        wdEntireCaption = 2,
        wdFootnoteNumber = 5,
        wdFootnoteNumberFormatted = 16,
        wdNumberFullContext = -4,
        wdNumberNoContext = -3,
        wdNumberRelativeContext = -2,
        wdOnlyCaptionText = 4,
        wdOnlyLabelAndNumber = 3,
        wdPageNumber = 7,
        wdPosition = 15,
    }

    const enum WdReferenceType {
        wdRefTypeBookmark = 2,
        wdRefTypeEndnote = 4,
        wdRefTypeFootnote = 3,
        wdRefTypeHeading = 1,
        wdRefTypeNumberedItem = 0,
    }

    const enum WdRelativeHorizontalPosition {
        wdRelativeHorizontalPositionCharacter = 3,
        wdRelativeHorizontalPositionColumn = 2,
        wdRelativeHorizontalPositionInnerMarginArea = 6,
        wdRelativeHorizontalPositionLeftMarginArea = 4,
        wdRelativeHorizontalPositionMargin = 0,
        wdRelativeHorizontalPositionOuterMarginArea = 7,
        wdRelativeHorizontalPositionPage = 1,
        wdRelativeHorizontalPositionRightMarginArea = 5,
    }

    const enum WdRelativeHorizontalSize {
        wdRelativeHorizontalSizeInnerMarginArea = 4,
        wdRelativeHorizontalSizeLeftMarginArea = 2,
        wdRelativeHorizontalSizeMargin = 0,
        wdRelativeHorizontalSizeOuterMarginArea = 5,
        wdRelativeHorizontalSizePage = 1,
        wdRelativeHorizontalSizeRightMarginArea = 3,
    }

    const enum WdRelativeVerticalPosition {
        wdRelativeVerticalPositionBottomMarginArea = 5,
        wdRelativeVerticalPositionInnerMarginArea = 6,
        wdRelativeVerticalPositionLine = 3,
        wdRelativeVerticalPositionMargin = 0,
        wdRelativeVerticalPositionOuterMarginArea = 7,
        wdRelativeVerticalPositionPage = 1,
        wdRelativeVerticalPositionParagraph = 2,
        wdRelativeVerticalPositionTopMarginArea = 4,
    }

    const enum WdRelativeVerticalSize {
        wdRelativeVerticalSizeBottomMarginArea = 3,
        wdRelativeVerticalSizeInnerMarginArea = 4,
        wdRelativeVerticalSizeMargin = 0,
        wdRelativeVerticalSizeOuterMarginArea = 5,
        wdRelativeVerticalSizePage = 1,
        wdRelativeVerticalSizeTopMarginArea = 2,
    }

    const enum WdRelocate {
        wdRelocateDown = 1,
        wdRelocateUp = 0,
    }

    const enum WdRemoveDocInfoType {
        wdRDIAll = 99,
        wdRDIComments = 1,
        wdRDIContentType = 16,
        wdRDIDocumentManagementPolicy = 15,
        wdRDIDocumentProperties = 8,
        wdRDIDocumentServerProperties = 14,
        wdRDIDocumentWorkspace = 10,
        wdRDIEmailHeader = 5,
        wdRDIInkAnnotations = 11,
        wdRDIRemovePersonalInformation = 4,
        wdRDIRevisions = 2,
        wdRDIRoutingSlip = 6,
        wdRDISendForReview = 7,
        wdRDITemplate = 9,
        wdRDIVersions = 3,
    }

    const enum WdReplace {
        wdReplaceAll = 2,
        wdReplaceNone = 0,
        wdReplaceOne = 1,
    }

    const enum WdRevisedLinesMark {
        wdRevisedLinesMarkLeftBorder = 1,
        wdRevisedLinesMarkNone = 0,
        wdRevisedLinesMarkOutsideBorder = 3,
        wdRevisedLinesMarkRightBorder = 2,
    }

    const enum WdRevisedPropertiesMark {
        wdRevisedPropertiesMarkBold = 1,
        wdRevisedPropertiesMarkColorOnly = 5,
        wdRevisedPropertiesMarkDoubleStrikeThrough = 7,
        wdRevisedPropertiesMarkDoubleUnderline = 4,
        wdRevisedPropertiesMarkItalic = 2,
        wdRevisedPropertiesMarkNone = 0,
        wdRevisedPropertiesMarkStrikeThrough = 6,
        wdRevisedPropertiesMarkUnderline = 3,
    }

    const enum WdRevisionsBalloonMargin {
        wdLeftMargin = 0,
        wdRightMargin = 1,
    }

    const enum WdRevisionsBalloonPrintOrientation {
        wdBalloonPrintOrientationAuto = 0,
        wdBalloonPrintOrientationForceLandscape = 2,
        wdBalloonPrintOrientationPreserve = 1,
    }

    const enum WdRevisionsBalloonWidthType {
        wdBalloonWidthPercent = 0,
        wdBalloonWidthPoints = 1,
    }

    const enum WdRevisionsMode {
        wdBalloonRevisions = 0,
        wdInLineRevisions = 1,
        wdMixedRevisions = 2,
    }

    const enum WdRevisionsView {
        wdRevisionsViewFinal = 0,
        wdRevisionsViewOriginal = 1,
    }

    const enum WdRevisionsWrap {
        wdWrapAlways = 1,
        wdWrapAsk = 2,
        wdWrapNever = 0,
    }

    const enum WdRevisionType {
        wdNoRevision = 0,
        wdRevisionCellDeletion = 17,
        wdRevisionCellInsertion = 16,
        wdRevisionCellMerge = 18,
        wdRevisionCellSplit = 19,
        wdRevisionConflict = 7,
        wdRevisionConflictDelete = 21,
        wdRevisionConflictInsert = 20,
        wdRevisionDelete = 2,
        wdRevisionDisplayField = 5,
        wdRevisionInsert = 1,
        wdRevisionMovedFrom = 14,
        wdRevisionMovedTo = 15,
        wdRevisionParagraphNumber = 4,
        wdRevisionParagraphProperty = 10,
        wdRevisionProperty = 3,
        wdRevisionReconcile = 6,
        wdRevisionReplace = 9,
        wdRevisionSectionProperty = 12,
        wdRevisionStyle = 8,
        wdRevisionStyleDefinition = 13,
        wdRevisionTableProperty = 11,
    }

    const enum WdRoutingSlipDelivery {
        wdAllAtOnce = 1,
        wdOneAfterAnother = 0,
    }

    const enum WdRoutingSlipStatus {
        wdNotYetRouted = 0,
        wdRouteComplete = 2,
        wdRouteInProgress = 1,
    }

    const enum WdRowAlignment {
        wdAlignRowCenter = 1,
        wdAlignRowLeft = 0,
        wdAlignRowRight = 2,
    }

    const enum WdRowHeightRule {
        wdRowHeightAtLeast = 1,
        wdRowHeightAuto = 0,
        wdRowHeightExactly = 2,
    }

    const enum WdRulerStyle {
        wdAdjustFirstColumn = 2,
        wdAdjustNone = 0,
        wdAdjustProportional = 1,
        wdAdjustSameWidth = 3,
    }

    const enum WdSalutationGender {
        wdGenderFemale = 0,
        wdGenderMale = 1,
        wdGenderNeutral = 2,
        wdGenderUnknown = 3,
    }

    const enum WdSalutationType {
        wdSalutationBusiness = 2,
        wdSalutationFormal = 1,
        wdSalutationInformal = 0,
        wdSalutationOther = 3,
    }

    const enum WdSaveFormat {
        wdFormatDocument = 0,
        wdFormatDocument97 = 0,
        wdFormatDocumentDefault = 16,
        wdFormatDOSText = 4,
        wdFormatDOSTextLineBreaks = 5,
        wdFormatEncodedText = 7,
        wdFormatFilteredHTML = 10,
        wdFormatFlatXML = 19,
        wdFormatFlatXMLMacroEnabled = 20,
        wdFormatFlatXMLTemplate = 21,
        wdFormatFlatXMLTemplateMacroEnabled = 22,
        wdFormatHTML = 8,
        wdFormatOpenDocumentText = 23,
        wdFormatPDF = 17,
        wdFormatRTF = 6,
        wdFormatTemplate = 1,
        wdFormatTemplate97 = 1,
        wdFormatText = 2,
        wdFormatTextLineBreaks = 3,
        wdFormatUnicodeText = 7,
        wdFormatWebArchive = 9,
        wdFormatXML = 11,
        wdFormatXMLDocument = 12,
        wdFormatXMLDocumentMacroEnabled = 13,
        wdFormatXMLTemplate = 14,
        wdFormatXMLTemplateMacroEnabled = 15,
        wdFormatXPS = 18,
    }

    const enum WdSaveOptions {
        wdDoNotSaveChanges = 0,
        wdPromptToSaveChanges = -2,
        wdSaveChanges = -1,
    }

    const enum WdScrollbarType {
        wdScrollbarTypeAuto = 0,
        wdScrollbarTypeNo = 2,
        wdScrollbarTypeYes = 1,
    }

    const enum WdSectionDirection {
        wdSectionDirectionLtr = 1,
        wdSectionDirectionRtl = 0,
    }

    const enum WdSectionStart {
        wdSectionContinuous = 0,
        wdSectionEvenPage = 3,
        wdSectionNewColumn = 1,
        wdSectionNewPage = 2,
        wdSectionOddPage = 4,
    }

    const enum WdSeekView {
        wdSeekCurrentPageFooter = 10,
        wdSeekCurrentPageHeader = 9,
        wdSeekEndnotes = 8,
        wdSeekEvenPagesFooter = 6,
        wdSeekEvenPagesHeader = 3,
        wdSeekFirstPageFooter = 5,
        wdSeekFirstPageHeader = 2,
        wdSeekFootnotes = 7,
        wdSeekMainDocument = 0,
        wdSeekPrimaryFooter = 4,
        wdSeekPrimaryHeader = 1,
    }

    const enum WdSelectionFlags {
        wdSelActive = 8,
        wdSelAtEOL = 2,
        wdSelOvertype = 4,
        wdSelReplace = 16,
        wdSelStartActive = 1,
    }

    const enum WdSelectionType {
        wdNoSelection = 0,
        wdSelectionBlock = 6,
        wdSelectionColumn = 4,
        wdSelectionFrame = 3,
        wdSelectionInlineShape = 7,
        wdSelectionIP = 1,
        wdSelectionNormal = 2,
        wdSelectionRow = 5,
        wdSelectionShape = 8,
    }

    const enum WdSeparatorType {
        wdSeparatorColon = 2,
        wdSeparatorEmDash = 3,
        wdSeparatorEnDash = 4,
        wdSeparatorHyphen = 0,
        wdSeparatorPeriod = 1,
    }

    const enum WdShapePosition {
        wdShapeBottom = -999997,
        wdShapeCenter = -999995,
        wdShapeInside = -999994,
        wdShapeLeft = -999998,
        wdShapeOutside = -999993,
        wdShapeRight = -999996,
        wdShapeTop = -999999,
    }

    const enum WdShapePositionRelative {
        wdShapePositionRelativeNone = -999999,
    }

    const enum WdShapeSizeRelative {
        wdShapeSizeRelativeNone = -999999,
    }

    const enum WdShowFilter {
        wdShowFilterFormattingAvailable = 4,
        wdShowFilterFormattingInUse = 3,
        wdShowFilterFormattingRecommended = 5,
        wdShowFilterStylesAll = 2,
        wdShowFilterStylesAvailable = 0,
        wdShowFilterStylesInUse = 1,
    }

    const enum WdShowSourceDocuments {
        wdShowSourceDocumentsBoth = 3,
        wdShowSourceDocumentsNone = 0,
        wdShowSourceDocumentsOriginal = 1,
        wdShowSourceDocumentsRevised = 2,
    }

    const enum WdSmartTagControlType {
        wdControlActiveX = 13,
        wdControlButton = 6,
        wdControlCheckbox = 9,
        wdControlCombo = 12,
        wdControlDocumentFragment = 14,
        wdControlDocumentFragmentURL = 15,
        wdControlHelp = 3,
        wdControlHelpURL = 4,
        wdControlImage = 8,
        wdControlLabel = 7,
        wdControlLink = 2,
        wdControlListbox = 11,
        wdControlRadioGroup = 16,
        wdControlSeparator = 5,
        wdControlSmartTag = 1,
        wdControlTextbox = 10,
    }

    const enum WdSortFieldType {
        wdSortFieldAlphanumeric = 0,
        wdSortFieldDate = 2,
        wdSortFieldJapanJIS = 4,
        wdSortFieldKoreaKS = 6,
        wdSortFieldNumeric = 1,
        wdSortFieldStroke = 5,
        wdSortFieldSyllable = 3,
    }

    const enum WdSortFieldTypeHID {
        emptyenum = 0,
    }

    const enum WdSortOrder {
        wdSortOrderAscending = 0,
        wdSortOrderDescending = 1,
    }

    const enum WdSortSeparator {
        wdSortSeparateByCommas = 1,
        wdSortSeparateByDefaultTableSeparator = 2,
        wdSortSeparateByTabs = 0,
    }

    const enum WdSpanishSpeller {
        wdSpanishTuteoAndVoseo = 1,
        wdSpanishTuteoOnly = 0,
        wdSpanishVoseoOnly = 2,
    }

    const enum WdSpecialPane {
        wdPaneComments = 15,
        wdPaneCurrentPageFooter = 17,
        wdPaneCurrentPageHeader = 16,
        wdPaneEndnoteContinuationNotice = 12,
        wdPaneEndnoteContinuationSeparator = 13,
        wdPaneEndnotes = 8,
        wdPaneEndnoteSeparator = 14,
        wdPaneEvenPagesFooter = 6,
        wdPaneEvenPagesHeader = 3,
        wdPaneFirstPageFooter = 5,
        wdPaneFirstPageHeader = 2,
        wdPaneFootnoteContinuationNotice = 9,
        wdPaneFootnoteContinuationSeparator = 10,
        wdPaneFootnotes = 7,
        wdPaneFootnoteSeparator = 11,
        wdPaneNone = 0,
        wdPanePrimaryFooter = 4,
        wdPanePrimaryHeader = 1,
        wdPaneRevisions = 18,
        wdPaneRevisionsHoriz = 19,
        wdPaneRevisionsVert = 20,
    }

    const enum WdSpellingErrorType {
        wdSpellingCapitalization = 2,
        wdSpellingCorrect = 0,
        wdSpellingNotInDictionary = 1,
    }

    const enum WdSpellingWordType {
        wdAnagram = 2,
        wdSpellword = 0,
        wdWildcard = 1,
    }

    const enum WdStatistic {
        wdStatisticCharacters = 3,
        wdStatisticCharactersWithSpaces = 5,
        wdStatisticFarEastCharacters = 6,
        wdStatisticLines = 1,
        wdStatisticPages = 2,
        wdStatisticParagraphs = 4,
        wdStatisticWords = 0,
    }

    const enum WdStatisticHID {
        emptyenum = 0,
    }

    const enum WdStoryType {
        wdCommentsStory = 4,
        wdEndnoteContinuationNoticeStory = 17,
        wdEndnoteContinuationSeparatorStory = 16,
        wdEndnoteSeparatorStory = 15,
        wdEndnotesStory = 3,
        wdEvenPagesFooterStory = 8,
        wdEvenPagesHeaderStory = 6,
        wdFirstPageFooterStory = 11,
        wdFirstPageHeaderStory = 10,
        wdFootnoteContinuationNoticeStory = 14,
        wdFootnoteContinuationSeparatorStory = 13,
        wdFootnoteSeparatorStory = 12,
        wdFootnotesStory = 2,
        wdMainTextStory = 1,
        wdPrimaryFooterStory = 9,
        wdPrimaryHeaderStory = 7,
        wdTextFrameStory = 5,
    }

    const enum WdStyleSheetLinkType {
        wdStyleSheetLinkTypeImported = 1,
        wdStyleSheetLinkTypeLinked = 0,
    }

    const enum WdStyleSheetPrecedence {
        wdStyleSheetPrecedenceHigher = -1,
        wdStyleSheetPrecedenceHighest = 1,
        wdStyleSheetPrecedenceLower = -2,
        wdStyleSheetPrecedenceLowest = 0,
    }

    const enum WdStyleSort {
        wdStyleSortByBasedOn = 3,
        wdStyleSortByFont = 2,
        wdStyleSortByName = 0,
        wdStyleSortByType = 4,
        wdStyleSortRecommended = 1,
    }

    const enum WdStyleType {
        wdStyleTypeCharacter = 2,
        wdStyleTypeLinked = 6,
        wdStyleTypeList = 4,
        wdStyleTypeParagraph = 1,
        wdStyleTypeParagraphOnly = 5,
        wdStyleTypeTable = 3,
    }

    const enum WdStylisticSet {
        wdStylisticSet01 = 1,
        wdStylisticSet02 = 2,
        wdStylisticSet03 = 4,
        wdStylisticSet04 = 8,
        wdStylisticSet05 = 16,
        wdStylisticSet06 = 32,
        wdStylisticSet07 = 64,
        wdStylisticSet08 = 128,
        wdStylisticSet09 = 256,
        wdStylisticSet10 = 512,
        wdStylisticSet11 = 1024,
        wdStylisticSet12 = 2048,
        wdStylisticSet13 = 4096,
        wdStylisticSet14 = 8192,
        wdStylisticSet15 = 16384,
        wdStylisticSet16 = 32768,
        wdStylisticSet17 = 65536,
        wdStylisticSet18 = 131072,
        wdStylisticSet19 = 262144,
        wdStylisticSet20 = 524288,
        wdStylisticSetDefault = 0,
    }

    const enum WdSubscriberFormats {
        wdSubscriberBestFormat = 0,
        wdSubscriberPict = 4,
        wdSubscriberRTF = 1,
        wdSubscriberText = 2,
    }

    const enum WdSummaryLength {
        wd100Words = -4,
        wd10Percent = -6,
        wd10Sentences = -2,
        wd20Sentences = -3,
        wd25Percent = -7,
        wd500Words = -5,
        wd50Percent = -8,
        wd75Percent = -9,
    }

    const enum WdSummaryMode {
        wdSummaryModeCreateNew = 3,
        wdSummaryModeHideAllButSummary = 1,
        wdSummaryModeHighlight = 0,
        wdSummaryModeInsert = 2,
    }

    const enum WdTabAlignment {
        wdAlignTabBar = 4,
        wdAlignTabCenter = 1,
        wdAlignTabDecimal = 3,
        wdAlignTabLeft = 0,
        wdAlignTabList = 6,
        wdAlignTabRight = 2,
    }

    const enum WdTabLeader {
        wdTabLeaderDashes = 2,
        wdTabLeaderDots = 1,
        wdTabLeaderHeavy = 4,
        wdTabLeaderLines = 3,
        wdTabLeaderMiddleDot = 5,
        wdTabLeaderSpaces = 0,
    }

    const enum WdTabLeaderHID {
        emptyenum = 0,
    }

    const enum WdTableDirection {
        wdTableDirectionLtr = 1,
        wdTableDirectionRtl = 0,
    }

    const enum WdTableFieldSeparator {
        wdSeparateByCommas = 2,
        wdSeparateByDefaultListSeparator = 3,
        wdSeparateByParagraphs = 0,
        wdSeparateByTabs = 1,
    }

    const enum WdTableFormat {
        wdTableFormat3DEffects1 = 32,
        wdTableFormat3DEffects2 = 33,
        wdTableFormat3DEffects3 = 34,
        wdTableFormatClassic1 = 4,
        wdTableFormatClassic2 = 5,
        wdTableFormatClassic3 = 6,
        wdTableFormatClassic4 = 7,
        wdTableFormatColorful1 = 8,
        wdTableFormatColorful2 = 9,
        wdTableFormatColorful3 = 10,
        wdTableFormatColumns1 = 11,
        wdTableFormatColumns2 = 12,
        wdTableFormatColumns3 = 13,
        wdTableFormatColumns4 = 14,
        wdTableFormatColumns5 = 15,
        wdTableFormatContemporary = 35,
        wdTableFormatElegant = 36,
        wdTableFormatGrid1 = 16,
        wdTableFormatGrid2 = 17,
        wdTableFormatGrid3 = 18,
        wdTableFormatGrid4 = 19,
        wdTableFormatGrid5 = 20,
        wdTableFormatGrid6 = 21,
        wdTableFormatGrid7 = 22,
        wdTableFormatGrid8 = 23,
        wdTableFormatList1 = 24,
        wdTableFormatList2 = 25,
        wdTableFormatList3 = 26,
        wdTableFormatList4 = 27,
        wdTableFormatList5 = 28,
        wdTableFormatList6 = 29,
        wdTableFormatList7 = 30,
        wdTableFormatList8 = 31,
        wdTableFormatNone = 0,
        wdTableFormatProfessional = 37,
        wdTableFormatSimple1 = 1,
        wdTableFormatSimple2 = 2,
        wdTableFormatSimple3 = 3,
        wdTableFormatSubtle1 = 38,
        wdTableFormatSubtle2 = 39,
        wdTableFormatWeb1 = 40,
        wdTableFormatWeb2 = 41,
        wdTableFormatWeb3 = 42,
    }

    const enum WdTableFormatApply {
        wdTableFormatApplyAutoFit = 16,
        wdTableFormatApplyBorders = 1,
        wdTableFormatApplyColor = 8,
        wdTableFormatApplyFirstColumn = 128,
        wdTableFormatApplyFont = 4,
        wdTableFormatApplyHeadingRows = 32,
        wdTableFormatApplyLastColumn = 256,
        wdTableFormatApplyLastRow = 64,
        wdTableFormatApplyShading = 2,
    }

    const enum WdTablePosition {
        wdTableBottom = -999997,
        wdTableCenter = -999995,
        wdTableInside = -999994,
        wdTableLeft = -999998,
        wdTableOutside = -999993,
        wdTableRight = -999996,
        wdTableTop = -999999,
    }

    const enum WdTaskPanes {
        wdTaskPaneApplyStyles = 17,
        wdTaskPaneDocumentActions = 7,
        wdTaskPaneDocumentManagement = 16,
        wdTaskPaneDocumentProtection = 6,
        wdTaskPaneDocumentUpdates = 13,
        wdTaskPaneFaxService = 11,
        wdTaskPaneFormatting = 0,
        wdTaskPaneHelp = 9,
        wdTaskPaneMailMerge = 2,
        wdTaskPaneNav = 18,
        wdTaskPaneResearch = 10,
        wdTaskPaneRevealFormatting = 1,
        wdTaskPaneSearch = 4,
        wdTaskPaneSelection = 19,
        wdTaskPaneSharedWorkspace = 8,
        wdTaskPaneSignature = 14,
        wdTaskPaneStyleInspector = 15,
        wdTaskPaneTranslate = 3,
        wdTaskPaneXMLDocument = 12,
        wdTaskPaneXMLStructure = 5,
    }

    const enum WdTCSCConverterDirection {
        wdTCSCConverterDirectionAuto = 2,
        wdTCSCConverterDirectionSCTC = 0,
        wdTCSCConverterDirectionTCSC = 1,
    }

    const enum WdTemplateType {
        wdAttachedTemplate = 2,
        wdGlobalTemplate = 1,
        wdNormalTemplate = 0,
    }

    const enum WdTextboxTightWrap {
        wdTightAll = 1,
        wdTightFirstAndLastLines = 2,
        wdTightFirstLineOnly = 3,
        wdTightLastLineOnly = 4,
        wdTightNone = 0,
    }

    const enum WdTextFormFieldType {
        wdCalculationText = 5,
        wdCurrentDateText = 3,
        wdCurrentTimeText = 4,
        wdDateText = 2,
        wdNumberText = 1,
        wdRegularText = 0,
    }

    const enum WdTextOrientation {
        wdTextOrientationDownward = 3,
        wdTextOrientationHorizontal = 0,
        wdTextOrientationHorizontalRotatedFarEast = 4,
        wdTextOrientationUpward = 2,
        wdTextOrientationVertical = 5,
        wdTextOrientationVerticalFarEast = 1,
    }

    const enum WdTextOrientationHID {
        emptyenum = 0,
    }

    const enum WdTextureIndex {
        wdTexture10Percent = 100,
        wdTexture12Pt5Percent = 125,
        wdTexture15Percent = 150,
        wdTexture17Pt5Percent = 175,
        wdTexture20Percent = 200,
        wdTexture22Pt5Percent = 225,
        wdTexture25Percent = 250,
        wdTexture27Pt5Percent = 275,
        wdTexture2Pt5Percent = 25,
        wdTexture30Percent = 300,
        wdTexture32Pt5Percent = 325,
        wdTexture35Percent = 350,
        wdTexture37Pt5Percent = 375,
        wdTexture40Percent = 400,
        wdTexture42Pt5Percent = 425,
        wdTexture45Percent = 450,
        wdTexture47Pt5Percent = 475,
        wdTexture50Percent = 500,
        wdTexture52Pt5Percent = 525,
        wdTexture55Percent = 550,
        wdTexture57Pt5Percent = 575,
        wdTexture5Percent = 50,
        wdTexture60Percent = 600,
        wdTexture62Pt5Percent = 625,
        wdTexture65Percent = 650,
        wdTexture67Pt5Percent = 675,
        wdTexture70Percent = 700,
        wdTexture72Pt5Percent = 725,
        wdTexture75Percent = 750,
        wdTexture77Pt5Percent = 775,
        wdTexture7Pt5Percent = 75,
        wdTexture80Percent = 800,
        wdTexture82Pt5Percent = 825,
        wdTexture85Percent = 850,
        wdTexture87Pt5Percent = 875,
        wdTexture90Percent = 900,
        wdTexture92Pt5Percent = 925,
        wdTexture95Percent = 950,
        wdTexture97Pt5Percent = 975,
        wdTextureCross = -11,
        wdTextureDarkCross = -5,
        wdTextureDarkDiagonalCross = -6,
        wdTextureDarkDiagonalDown = -3,
        wdTextureDarkDiagonalUp = -4,
        wdTextureDarkHorizontal = -1,
        wdTextureDarkVertical = -2,
        wdTextureDiagonalCross = -12,
        wdTextureDiagonalDown = -9,
        wdTextureDiagonalUp = -10,
        wdTextureHorizontal = -7,
        wdTextureNone = 0,
        wdTextureSolid = 1000,
        wdTextureVertical = -8,
    }

    const enum WdThemeColorIndex {
        wdNotThemeColor = -1,
        wdThemeColorAccent1 = 4,
        wdThemeColorAccent2 = 5,
        wdThemeColorAccent3 = 6,
        wdThemeColorAccent4 = 7,
        wdThemeColorAccent5 = 8,
        wdThemeColorAccent6 = 9,
        wdThemeColorBackground1 = 12,
        wdThemeColorBackground2 = 14,
        wdThemeColorHyperlink = 10,
        wdThemeColorHyperlinkFollowed = 11,
        wdThemeColorMainDark1 = 0,
        wdThemeColorMainDark2 = 2,
        wdThemeColorMainLight1 = 1,
        wdThemeColorMainLight2 = 3,
        wdThemeColorText1 = 13,
        wdThemeColorText2 = 15,
    }

    const enum WdToaFormat {
        wdTOAClassic = 1,
        wdTOADistinctive = 2,
        wdTOAFormal = 3,
        wdTOASimple = 4,
        wdTOATemplate = 0,
    }

    const enum WdTocFormat {
        wdTOCClassic = 1,
        wdTOCDistinctive = 2,
        wdTOCFancy = 3,
        wdTOCFormal = 5,
        wdTOCModern = 4,
        wdTOCSimple = 6,
        wdTOCTemplate = 0,
    }

    const enum WdTofFormat {
        wdTOFCentered = 3,
        wdTOFClassic = 1,
        wdTOFDistinctive = 2,
        wdTOFFormal = 4,
        wdTOFSimple = 5,
        wdTOFTemplate = 0,
    }

    const enum WdTrailingCharacter {
        wdTrailingNone = 2,
        wdTrailingSpace = 1,
        wdTrailingTab = 0,
    }

    const enum WdTwoLinesInOneType {
        wdTwoLinesInOneAngleBrackets = 4,
        wdTwoLinesInOneCurlyBrackets = 5,
        wdTwoLinesInOneNoBrackets = 1,
        wdTwoLinesInOneNone = 0,
        wdTwoLinesInOneParentheses = 2,
        wdTwoLinesInOneSquareBrackets = 3,
    }

    const enum WdUnderline {
        wdUnderlineDash = 7,
        wdUnderlineDashHeavy = 23,
        wdUnderlineDashLong = 39,
        wdUnderlineDashLongHeavy = 55,
        wdUnderlineDotDash = 9,
        wdUnderlineDotDashHeavy = 25,
        wdUnderlineDotDotDash = 10,
        wdUnderlineDotDotDashHeavy = 26,
        wdUnderlineDotted = 4,
        wdUnderlineDottedHeavy = 20,
        wdUnderlineDouble = 3,
        wdUnderlineNone = 0,
        wdUnderlineSingle = 1,
        wdUnderlineThick = 6,
        wdUnderlineWavy = 11,
        wdUnderlineWavyDouble = 43,
        wdUnderlineWavyHeavy = 27,
        wdUnderlineWords = 2,
    }

    const enum WdUnits {
        wdCell = 12,
        wdCharacter = 1,
        wdCharacterFormatting = 13,
        wdColumn = 9,
        wdItem = 16,
        wdLine = 5,
        wdParagraph = 4,
        wdParagraphFormatting = 14,
        wdRow = 10,
        wdScreen = 7,
        wdSection = 8,
        wdSentence = 3,
        wdStory = 6,
        wdTable = 15,
        wdWindow = 11,
        wdWord = 2,
    }

    const enum WdUpdateStyleListBehavior {
        wdListBehaviorAddBulletsNumbering = 1,
        wdListBehaviorKeepPreviousPattern = 0,
    }

    const enum WdUseFormattingFrom {
        wdFormattingFromCurrent = 0,
        wdFormattingFromPrompt = 2,
        wdFormattingFromSelected = 1,
    }

    const enum WdVerticalAlignment {
        wdAlignVerticalBottom = 3,
        wdAlignVerticalCenter = 1,
        wdAlignVerticalJustify = 2,
        wdAlignVerticalTop = 0,
    }

    const enum WdViewType {
        wdConflictView = 8,
        wdMasterView = 5,
        wdNormalView = 1,
        wdOutlineView = 2,
        wdPrintPreview = 4,
        wdPrintView = 3,
        wdReadingView = 7,
        wdWebView = 6,
    }

    const enum WdViewTypeOld {
        wdOnlineView = 6,
        wdPageView = 3,
    }

    const enum WdVisualSelection {
        wdVisualSelectionBlock = 0,
        wdVisualSelectionContinuous = 1,
    }

    const enum WdWindowState {
        wdWindowStateMaximize = 1,
        wdWindowStateMinimize = 2,
        wdWindowStateNormal = 0,
    }

    const enum WdWindowType {
        wdWindowDocument = 0,
        wdWindowTemplate = 1,
    }

    const enum WdWordDialog {
        wdDialogBuildingBlockOrganizer = 2067,
        wdDialogCompatibilityChecker = 2439,
        wdDialogConnect = 420,
        wdDialogConsistencyChecker = 1121,
        wdDialogContentControlProperties = 2394,
        wdDialogControlRun = 235,
        wdDialogConvertObject = 392,
        wdDialogCopyFile = 300,
        wdDialogCreateAutoText = 872,
        wdDialogCreateSource = 1922,
        wdDialogCSSLinks = 1261,
        wdDialogDocumentInspector = 1482,
        wdDialogDocumentStatistics = 78,
        wdDialogDrawAlign = 634,
        wdDialogDrawSnapToGrid = 633,
        wdDialogEditAutoText = 985,
        wdDialogEditCreatePublisher = 732,
        wdDialogEditFind = 112,
        wdDialogEditFrame = 458,
        wdDialogEditGoTo = 896,
        wdDialogEditGoToOld = 811,
        wdDialogEditLinks = 124,
        wdDialogEditObject = 125,
        wdDialogEditPasteSpecial = 111,
        wdDialogEditPublishOptions = 735,
        wdDialogEditReplace = 117,
        wdDialogEditStyle = 120,
        wdDialogEditSubscribeOptions = 736,
        wdDialogEditSubscribeTo = 733,
        wdDialogEditTOACategory = 625,
        wdDialogEmailOptions = 863,
        wdDialogExportAsFixedFormat = 2349,
        wdDialogFileDocumentLayout = 178,
        wdDialogFileFind = 99,
        wdDialogFileMacCustomPageSetupGX = 737,
        wdDialogFileMacPageSetup = 685,
        wdDialogFileMacPageSetupGX = 444,
        wdDialogFileNew = 79,
        wdDialogFileNew2007 = 1116,
        wdDialogFileOpen = 80,
        wdDialogFilePageSetup = 178,
        wdDialogFilePrint = 88,
        wdDialogFilePrintOneCopy = 445,
        wdDialogFilePrintSetup = 97,
        wdDialogFileRoutingSlip = 624,
        wdDialogFileSaveAs = 84,
        wdDialogFileSaveVersion = 1007,
        wdDialogFileSummaryInfo = 86,
        wdDialogFileVersions = 945,
        wdDialogFitText = 983,
        wdDialogFontSubstitution = 581,
        wdDialogFormatAddrFonts = 103,
        wdDialogFormatBordersAndShading = 189,
        wdDialogFormatBulletsAndNumbering = 824,
        wdDialogFormatCallout = 610,
        wdDialogFormatChangeCase = 322,
        wdDialogFormatColumns = 177,
        wdDialogFormatDefineStyleBorders = 185,
        wdDialogFormatDefineStyleFont = 181,
        wdDialogFormatDefineStyleFrame = 184,
        wdDialogFormatDefineStyleLang = 186,
        wdDialogFormatDefineStylePara = 182,
        wdDialogFormatDefineStyleTabs = 183,
        wdDialogFormatDrawingObject = 960,
        wdDialogFormatDropCap = 488,
        wdDialogFormatEncloseCharacters = 1162,
        wdDialogFormatFont = 174,
        wdDialogFormatFrame = 190,
        wdDialogFormatPageNumber = 298,
        wdDialogFormatParagraph = 175,
        wdDialogFormatPicture = 187,
        wdDialogFormatRetAddrFonts = 221,
        wdDialogFormatSectionLayout = 176,
        wdDialogFormatStyle = 180,
        wdDialogFormatStyleGallery = 505,
        wdDialogFormatStylesCustom = 1248,
        wdDialogFormatTabs = 179,
        wdDialogFormatTheme = 855,
        wdDialogFormattingRestrictions = 1427,
        wdDialogFormFieldHelp = 361,
        wdDialogFormFieldOptions = 353,
        wdDialogFrameSetProperties = 1074,
        wdDialogHelpAbout = 9,
        wdDialogHelpWordPerfectHelp = 10,
        wdDialogHelpWordPerfectHelpOptions = 511,
        wdDialogHorizontalInVertical = 1160,
        wdDialogIMESetDefault = 1094,
        wdDialogInsertAddCaption = 402,
        wdDialogInsertAutoCaption = 359,
        wdDialogInsertBookmark = 168,
        wdDialogInsertBreak = 159,
        wdDialogInsertCaption = 357,
        wdDialogInsertCaptionNumbering = 358,
        wdDialogInsertCrossReference = 367,
        wdDialogInsertDatabase = 341,
        wdDialogInsertDateTime = 165,
        wdDialogInsertField = 166,
        wdDialogInsertFile = 164,
        wdDialogInsertFootnote = 370,
        wdDialogInsertFormField = 483,
        wdDialogInsertHyperlink = 925,
        wdDialogInsertIndex = 170,
        wdDialogInsertIndexAndTables = 473,
        wdDialogInsertMergeField = 167,
        wdDialogInsertNumber = 812,
        wdDialogInsertObject = 172,
        wdDialogInsertPageNumbers = 294,
        wdDialogInsertPicture = 163,
        wdDialogInsertPlaceholder = 2348,
        wdDialogInsertSource = 2120,
        wdDialogInsertSubdocument = 583,
        wdDialogInsertSymbol = 162,
        wdDialogInsertTableOfAuthorities = 471,
        wdDialogInsertTableOfContents = 171,
        wdDialogInsertTableOfFigures = 472,
        wdDialogInsertWebComponent = 1324,
        wdDialogLabelOptions = 1367,
        wdDialogLetterWizard = 821,
        wdDialogListCommands = 723,
        wdDialogMailMerge = 676,
        wdDialogMailMergeCheck = 677,
        wdDialogMailMergeCreateDataSource = 642,
        wdDialogMailMergeCreateHeaderSource = 643,
        wdDialogMailMergeFieldMapping = 1304,
        wdDialogMailMergeFindRecipient = 1326,
        wdDialogMailMergeFindRecord = 569,
        wdDialogMailMergeHelper = 680,
        wdDialogMailMergeInsertAddressBlock = 1305,
        wdDialogMailMergeInsertAsk = 4047,
        wdDialogMailMergeInsertFields = 1307,
        wdDialogMailMergeInsertFillIn = 4048,
        wdDialogMailMergeInsertGreetingLine = 1306,
        wdDialogMailMergeInsertIf = 4049,
        wdDialogMailMergeInsertNextIf = 4053,
        wdDialogMailMergeInsertSet = 4054,
        wdDialogMailMergeInsertSkipIf = 4055,
        wdDialogMailMergeOpenDataSource = 81,
        wdDialogMailMergeOpenHeaderSource = 82,
        wdDialogMailMergeQueryOptions = 681,
        wdDialogMailMergeRecipients = 1308,
        wdDialogMailMergeSetDocumentType = 1339,
        wdDialogMailMergeUseAddressBook = 779,
        wdDialogMarkCitation = 463,
        wdDialogMarkIndexEntry = 169,
        wdDialogMarkTableOfContentsEntry = 442,
        wdDialogMyPermission = 1437,
        wdDialogNewToolbar = 586,
        wdDialogNoteOptions = 373,
        wdDialogOMathRecognizedFunctions = 2165,
        wdDialogOrganizer = 222,
        wdDialogPermission = 1469,
        wdDialogPhoneticGuide = 986,
        wdDialogReviewAfmtRevisions = 570,
        wdDialogSchemaLibrary = 1417,
        wdDialogSearch = 1363,
        wdDialogShowRepairs = 1381,
        wdDialogSourceManager = 1920,
        wdDialogStyleManagement = 1948,
        wdDialogTableAutoFormat = 563,
        wdDialogTableCellOptions = 1081,
        wdDialogTableColumnWidth = 143,
        wdDialogTableDeleteCells = 133,
        wdDialogTableFormatCell = 612,
        wdDialogTableFormula = 348,
        wdDialogTableInsertCells = 130,
        wdDialogTableInsertRow = 131,
        wdDialogTableInsertTable = 129,
        wdDialogTableOfCaptionsOptions = 551,
        wdDialogTableOfContentsOptions = 470,
        wdDialogTableProperties = 861,
        wdDialogTableRowHeight = 142,
        wdDialogTableSort = 199,
        wdDialogTableSplitCells = 137,
        wdDialogTableTableOptions = 1080,
        wdDialogTableToText = 128,
        wdDialogTableWrapping = 854,
        wdDialogTCSCTranslator = 1156,
        wdDialogTextToTable = 127,
        wdDialogToolsAcceptRejectChanges = 506,
        wdDialogToolsAdvancedSettings = 206,
        wdDialogToolsAutoCorrect = 378,
        wdDialogToolsAutoCorrectExceptions = 762,
        wdDialogToolsAutoManager = 915,
        wdDialogToolsAutoSummarize = 874,
        wdDialogToolsBulletsNumbers = 196,
        wdDialogToolsCompareDocuments = 198,
        wdDialogToolsCreateDirectory = 833,
        wdDialogToolsCreateEnvelope = 173,
        wdDialogToolsCreateLabels = 489,
        wdDialogToolsCustomize = 152,
        wdDialogToolsCustomizeKeyboard = 432,
        wdDialogToolsCustomizeMenuBar = 615,
        wdDialogToolsCustomizeMenus = 433,
        wdDialogToolsDictionary = 989,
        wdDialogToolsEnvelopesAndLabels = 607,
        wdDialogToolsGrammarSettings = 885,
        wdDialogToolsHangulHanjaConversion = 784,
        wdDialogToolsHighlightChanges = 197,
        wdDialogToolsHyphenation = 195,
        wdDialogToolsLanguage = 188,
        wdDialogToolsMacro = 215,
        wdDialogToolsMacroRecord = 214,
        wdDialogToolsManageFields = 631,
        wdDialogToolsMergeDocuments = 435,
        wdDialogToolsOptions = 974,
        wdDialogToolsOptionsAutoFormat = 959,
        wdDialogToolsOptionsAutoFormatAsYouType = 778,
        wdDialogToolsOptionsBidi = 1029,
        wdDialogToolsOptionsCompatibility = 525,
        wdDialogToolsOptionsEdit = 224,
        wdDialogToolsOptionsEditCopyPaste = 1356,
        wdDialogToolsOptionsFileLocations = 225,
        wdDialogToolsOptionsFuzzy = 790,
        wdDialogToolsOptionsGeneral = 203,
        wdDialogToolsOptionsPrint = 208,
        wdDialogToolsOptionsSave = 209,
        wdDialogToolsOptionsSecurity = 1361,
        wdDialogToolsOptionsSmartTag = 1395,
        wdDialogToolsOptionsSpellingAndGrammar = 211,
        wdDialogToolsOptionsTrackChanges = 386,
        wdDialogToolsOptionsTypography = 739,
        wdDialogToolsOptionsUserInfo = 213,
        wdDialogToolsOptionsView = 204,
        wdDialogToolsProtectDocument = 503,
        wdDialogToolsProtectSection = 578,
        wdDialogToolsRevisions = 197,
        wdDialogToolsSpellingAndGrammar = 828,
        wdDialogToolsTemplates = 87,
        wdDialogToolsThesaurus = 194,
        wdDialogToolsUnprotectDocument = 521,
        wdDialogToolsWordCount = 228,
        wdDialogTwoLinesInOne = 1161,
        wdDialogUpdateTOC = 331,
        wdDialogViewZoom = 577,
        wdDialogWebOptions = 898,
        wdDialogWindowActivate = 220,
        wdDialogXMLElementAttributes = 1460,
        wdDialogXMLOptions = 1425,
    }

    const enum WdWordDialogHID {
        emptyenum = 0,
    }

    const enum WdWordDialogTab {
        wdDialogEmailOptionsTabQuoting = 1900002,
        wdDialogEmailOptionsTabSignature = 1900000,
        wdDialogEmailOptionsTabStationary = 1900001,
        wdDialogFilePageSetupTabCharsLines = 150004,
        wdDialogFilePageSetupTabLayout = 150003,
        wdDialogFilePageSetupTabMargins = 150000,
        wdDialogFilePageSetupTabPaper = 150001,
        wdDialogFormatBordersAndShadingTabBorders = 700000,
        wdDialogFormatBordersAndShadingTabPageBorder = 700001,
        wdDialogFormatBordersAndShadingTabShading = 700002,
        wdDialogFormatBulletsAndNumberingTabBulleted = 1500000,
        wdDialogFormatBulletsAndNumberingTabNumbered = 1500001,
        wdDialogFormatBulletsAndNumberingTabOutlineNumbered = 1500002,
        wdDialogFormatDrawingObjectTabColorsAndLines = 1200000,
        wdDialogFormatDrawingObjectTabHR = 1200007,
        wdDialogFormatDrawingObjectTabPicture = 1200004,
        wdDialogFormatDrawingObjectTabPosition = 1200002,
        wdDialogFormatDrawingObjectTabSize = 1200001,
        wdDialogFormatDrawingObjectTabTextbox = 1200005,
        wdDialogFormatDrawingObjectTabWeb = 1200006,
        wdDialogFormatDrawingObjectTabWrapping = 1200003,
        wdDialogFormatFontTabAnimation = 600002,
        wdDialogFormatFontTabCharacterSpacing = 600001,
        wdDialogFormatFontTabFont = 600000,
        wdDialogFormatParagraphTabIndentsAndSpacing = 1000000,
        wdDialogFormatParagraphTabTeisai = 1000002,
        wdDialogFormatParagraphTabTextFlow = 1000001,
        wdDialogInsertIndexAndTablesTabIndex = 400000,
        wdDialogInsertIndexAndTablesTabTableOfAuthorities = 400003,
        wdDialogInsertIndexAndTablesTabTableOfContents = 400001,
        wdDialogInsertIndexAndTablesTabTableOfFigures = 400002,
        wdDialogInsertSymbolTabSpecialCharacters = 200001,
        wdDialogInsertSymbolTabSymbols = 200000,
        wdDialogLetterWizardTabLetterFormat = 1600000,
        wdDialogLetterWizardTabOtherElements = 1600002,
        wdDialogLetterWizardTabRecipientInfo = 1600001,
        wdDialogLetterWizardTabSenderInfo = 1600003,
        wdDialogNoteOptionsTabAllEndnotes = 300001,
        wdDialogNoteOptionsTabAllFootnotes = 300000,
        wdDialogOrganizerTabAutoText = 500001,
        wdDialogOrganizerTabCommandBars = 500002,
        wdDialogOrganizerTabMacros = 500003,
        wdDialogOrganizerTabStyles = 500000,
        wdDialogStyleManagementTabEdit = 2200000,
        wdDialogStyleManagementTabRecommend = 2200001,
        wdDialogStyleManagementTabRestrict = 2200002,
        wdDialogTablePropertiesTabCell = 1800003,
        wdDialogTablePropertiesTabColumn = 1800002,
        wdDialogTablePropertiesTabRow = 1800001,
        wdDialogTablePropertiesTabTable = 1800000,
        wdDialogTemplates = 2100000,
        wdDialogTemplatesLinkedCSS = 2100003,
        wdDialogTemplatesXMLExpansionPacks = 2100002,
        wdDialogTemplatesXMLSchema = 2100001,
        wdDialogToolsAutoCorrectExceptionsTabFirstLetter = 1400000,
        wdDialogToolsAutoCorrectExceptionsTabHangulAndAlphabet = 1400002,
        wdDialogToolsAutoCorrectExceptionsTabIac = 1400003,
        wdDialogToolsAutoCorrectExceptionsTabInitialCaps = 1400001,
        wdDialogToolsAutoManagerTabAutoCorrect = 1700000,
        wdDialogToolsAutoManagerTabAutoFormat = 1700003,
        wdDialogToolsAutoManagerTabAutoFormatAsYouType = 1700001,
        wdDialogToolsAutoManagerTabAutoText = 1700002,
        wdDialogToolsAutoManagerTabSmartTags = 1700004,
        wdDialogToolsEnvelopesAndLabelsTabEnvelopes = 800000,
        wdDialogToolsEnvelopesAndLabelsTabLabels = 800001,
        wdDialogToolsOptionsTabAcetate = 1266,
        wdDialogToolsOptionsTabBidi = 1029,
        wdDialogToolsOptionsTabCompatibility = 525,
        wdDialogToolsOptionsTabEdit = 224,
        wdDialogToolsOptionsTabFileLocations = 225,
        wdDialogToolsOptionsTabFuzzy = 790,
        wdDialogToolsOptionsTabGeneral = 203,
        wdDialogToolsOptionsTabHangulHanjaConversion = 786,
        wdDialogToolsOptionsTabPrint = 208,
        wdDialogToolsOptionsTabProofread = 211,
        wdDialogToolsOptionsTabSave = 209,
        wdDialogToolsOptionsTabSecurity = 1361,
        wdDialogToolsOptionsTabTrackChanges = 386,
        wdDialogToolsOptionsTabTypography = 739,
        wdDialogToolsOptionsTabUserInfo = 213,
        wdDialogToolsOptionsTabView = 204,
        wdDialogWebOptionsBrowsers = 2000000,
        wdDialogWebOptionsEncoding = 2000003,
        wdDialogWebOptionsFiles = 2000001,
        wdDialogWebOptionsFonts = 2000004,
        wdDialogWebOptionsGeneral = 2000000,
        wdDialogWebOptionsPictures = 2000002,
    }

    const enum WdWordDialogTabHID {
        wdDialogFilePageSetupTabPaperSize = 150001,
        wdDialogFilePageSetupTabPaperSource = 150002,
    }

    const enum WdWrapSideType {
        wdWrapBoth = 0,
        wdWrapLargest = 3,
        wdWrapLeft = 1,
        wdWrapRight = 2,
    }

    const enum WdWrapType {
        wdWrapBehind = 5,
        wdWrapFront = 3,
        wdWrapInline = 7,
        wdWrapNone = 3,
        wdWrapSquare = 0,
        wdWrapThrough = 2,
        wdWrapTight = 1,
        wdWrapTopBottom = 4,
    }

    const enum WdWrapTypeMerged {
        wdWrapMergeBehind = 3,
        wdWrapMergeFront = 4,
        wdWrapMergeInline = 0,
        wdWrapMergeSquare = 1,
        wdWrapMergeThrough = 5,
        wdWrapMergeTight = 2,
        wdWrapMergeTopBottom = 6,
    }

    const enum WdXMLNodeLevel {
        wdXMLNodeLevelCell = 3,
        wdXMLNodeLevelInline = 0,
        wdXMLNodeLevelParagraph = 1,
        wdXMLNodeLevelRow = 2,
    }

    const enum WdXMLNodeType {
        wdXMLNodeAttribute = 2,
        wdXMLNodeElement = 1,
    }

    const enum WdXMLSelectionChangeReason {
        wdXMLSelectionChangeReasonDelete = 2,
        wdXMLSelectionChangeReasonInsert = 1,
        wdXMLSelectionChangeReasonMove = 0,
    }

    const enum WdXMLValidationStatus {
        wdXMLValidationStatusCustom = -1072898048,
        wdXMLValidationStatusOK = 0,
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

    const enum XlBackground {
        xlBackgroundAutomatic = -4105,
        xlBackgroundOpaque = 3,
        xlBackgroundTransparent = 2,
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

    const enum XlChartGallery {
        xlAnyGallery = 23,
        xlBuiltIn = 21,
        xlUserDefined = 22,
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

    const enum XlChartPicturePlacement {
        xlAllFaces = 7,
        xlEnd = 2,
        xlEndSides = 3,
        xlFront = 4,
        xlFrontEnd = 6,
        xlFrontSides = 5,
        xlSides = 1,
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

    const enum XlCopyPictureFormat {
        xlBitmap = 2,
        xlPicture = -4147,
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

    const enum XlDataLabelSeparator {
        xlDataLabelSeparatorDefault = 1,
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

    const enum XlLineStyle {
        xlContinuous = 1,
        xlDash = -4115,
        xlDashDot = 4,
        xlDashDotDot = 5,
        xlDot = -4118,
        xlDouble = -4119,
        xlLineStyleNone = -4142,
        xlSlantDashDot = 13,
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

    const enum XlOrientation {
        xlDownward = -4170,
        xlHorizontal = -4128,
        xlUpward = -4171,
        xlVertical = -4166,
    }

    const enum XlPattern {
        xlPatternAutomatic = -4105,
        xlPatternChecker = 9,
        xlPatternCrissCross = 16,
        xlPatternDown = -4121,
        xlPatternGray16 = 17,
        xlPatternGray25 = -4124,
        xlPatternGray50 = -4125,
        xlPatternGray75 = -4126,
        xlPatternGray8 = 18,
        xlPatternGrid = 15,
        xlPatternHorizontal = -4128,
        xlPatternLightDown = 13,
        xlPatternLightHorizontal = 11,
        xlPatternLightUp = 14,
        xlPatternLightVertical = 12,
        xlPatternLinearGradient = 4000,
        xlPatternNone = -4142,
        xlPatternRectangularGradient = 4001,
        xlPatternSemiGray75 = 10,
        xlPatternSolid = 1,
        xlPatternUp = -4162,
        xlPatternVertical = -4166,
    }

    const enum XlPictureAppearance {
        xlPrinter = 2,
        xlScreen = 1,
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

    const enum XlRgbColor {
        xlAliceBlue = 16775408,
        xlAntiqueWhite = 14150650,
        xlAqua = 16776960,
        xlAquamarine = 13959039,
        xlAzure = 16777200,
        xlBeige = 14480885,
        xlBisque = 12903679,
        xlBlack = 0,
        xlBlanchedAlmond = 13495295,
        xlBlue = 16711680,
        xlBlueViolet = 14822282,
        xlBrown = 2763429,
        xlBurlyWood = 8894686,
        xlCadetBlue = 10526303,
        xlChartreuse = 65407,
        xlCoral = 5275647,
        xlCornflowerBlue = 15570276,
        xlCornsilk = 14481663,
        xlCrimson = 3937500,
        xlDarkBlue = 9109504,
        xlDarkCyan = 9145088,
        xlDarkGoldenrod = 755384,
        xlDarkGray = 11119017,
        xlDarkGreen = 25600,
        xlDarkGrey = 11119017,
        xlDarkKhaki = 7059389,
        xlDarkMagenta = 9109643,
        xlDarkOliveGreen = 3107669,
        xlDarkOrange = 36095,
        xlDarkOrchid = 13382297,
        xlDarkRed = 139,
        xlDarkSalmon = 8034025,
        xlDarkSeaGreen = 9419919,
        xlDarkSlateBlue = 9125192,
        xlDarkSlateGray = 5197615,
        xlDarkSlateGrey = 5197615,
        xlDarkTurquoise = 13749760,
        xlDarkViolet = 13828244,
        xlDeepPink = 9639167,
        xlDeepSkyBlue = 16760576,
        xlDimGray = 6908265,
        xlDimGrey = 6908265,
        xlDodgerBlue = 16748574,
        xlFireBrick = 2237106,
        xlFloralWhite = 15792895,
        xlForestGreen = 2263842,
        xlFuchsia = 16711935,
        xlGainsboro = 14474460,
        xlGhostWhite = 16775416,
        xlGold = 55295,
        xlGoldenrod = 2139610,
        xlGray = 8421504,
        xlGreen = 32768,
        xlGreenYellow = 3145645,
        xlGrey = 8421504,
        xlHoneydew = 15794160,
        xlHotPink = 11823615,
        xlIndianRed = 6053069,
        xlIndigo = 8519755,
        xlIvory = 15794175,
        xlKhaki = 9234160,
        xlLavender = 16443110,
        xlLavenderBlush = 16118015,
        xlLawnGreen = 64636,
        xlLemonChiffon = 13499135,
        xlLightBlue = 15128749,
        xlLightCoral = 8421616,
        xlLightCyan = 9145088,
        xlLightGoldenrodYellow = 13826810,
        xlLightGray = 13882323,
        xlLightGreen = 9498256,
        xlLightGrey = 13882323,
        xlLightPink = 12695295,
        xlLightSalmon = 8036607,
        xlLightSeaGreen = 11186720,
        xlLightSkyBlue = 16436871,
        xlLightSlateGray = 10061943,
        xlLightSlateGrey = 10061943,
        xlLightSteelBlue = 14599344,
        xlLightYellow = 14745599,
        xlLime = 65280,
        xlLimeGreen = 3329330,
        xlLinen = 15134970,
        xlMaroon = 128,
        xlMediumAquamarine = 11206502,
        xlMediumBlue = 13434880,
        xlMediumOrchid = 13850042,
        xlMediumPurple = 14381203,
        xlMediumSeaGreen = 7451452,
        xlMediumSlateBlue = 15624315,
        xlMediumSpringGreen = 10156544,
        xlMediumTurquoise = 13422920,
        xlMediumVioletRed = 8721863,
        xlMidnightBlue = 7346457,
        xlMintCream = 16449525,
        xlMistyRose = 14804223,
        xlMoccasin = 11920639,
        xlNavajoWhite = 11394815,
        xlNavy = 8388608,
        xlNavyBlue = 8388608,
        xlOldLace = 15136253,
        xlOlive = 32896,
        xlOliveDrab = 2330219,
        xlOrange = 42495,
        xlOrangeRed = 17919,
        xlOrchid = 14053594,
        xlPaleGoldenrod = 7071982,
        xlPaleGreen = 10025880,
        xlPaleTurquoise = 15658671,
        xlPaleVioletRed = 9662683,
        xlPapayaWhip = 14020607,
        xlPeachPuff = 12180223,
        xlPeru = 4163021,
        xlPink = 13353215,
        xlPlum = 14524637,
        xlPowderBlue = 15130800,
        xlPurple = 8388736,
        xlRed = 255,
        xlRosyBrown = 9408444,
        xlRoyalBlue = 14772545,
        xlSalmon = 7504122,
        xlSandyBrown = 6333684,
        xlSeaGreen = 5737262,
        xlSeashell = 15660543,
        xlSienna = 2970272,
        xlSilver = 12632256,
        xlSkyBlue = 15453831,
        xlSlateBlue = 13458026,
        xlSlateGray = 9470064,
        xlSlateGrey = 9470064,
        xlSnow = 16448255,
        xlSpringGreen = 8388352,
        xlSteelBlue = 11829830,
        xlTan = 9221330,
        xlTeal = 8421376,
        xlThistle = 14204888,
        xlTomato = 4678655,
        xlTurquoise = 13688896,
        xlViolet = 15631086,
        xlWheat = 11788021,
        xlWhite = 16777215,
        xlWhiteSmoke = 16119285,
        xlYellow = 65535,
        xlYellowGreen = 3329434,
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

    class AddIn {
        private 'Word.AddIn_typekey': AddIn;
        private constructor();
        readonly Application: Application;
        readonly Autoload: boolean;
        readonly Compiled: boolean;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        Installed: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly Path: string;
    }

    class AddIns {
        private 'Word.AddIns_typekey': AddIns;
        private constructor();
        Add(FileName: string, Install?: any): AddIn;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): AddIn;
        readonly Parent: any;
        Unload(RemoveFromList: boolean): void;
    }

    class Adjustments {
        private 'Word.Adjustments_typekey': Adjustments;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): number;
        readonly Parent: any;
    }

    class Application {
        private 'Word.Application_typekey': Application;
        private constructor();
        Activate(): void;
        readonly ActiveDocument: Document;
        readonly ActiveEncryptionSession: number;
        ActivePrinter: string;
        readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        readonly ActiveWindow: Window;
        AddAddress(TagID: SafeArray<string>, Value: SafeArray<string>): void;
        readonly AddIns: AddIns;
        readonly AnswerWizard: Office.AnswerWizard;
        readonly Application: Application;
        readonly ArbitraryXMLSupportAvailable: boolean;
        readonly Assistance: Office.IAssistance;
        readonly Assistant: Office.Assistant;
        readonly AutoCaptions: AutoCaptions;
        readonly AutoCorrect: AutoCorrect;
        readonly AutoCorrectEmail: AutoCorrect;
        AutomaticChange(): void;
        AutomationSecurity: Office.MsoAutomationSecurity;
        readonly BackgroundPrintingStatus: number;
        readonly BackgroundSavingStatus: number;
        readonly Bibliography: Bibliography;
        BrowseExtraFileTypes: string;
        readonly Browser: Browser;
        readonly Build: string;
        readonly BuildFeatureCrew: string;
        readonly BuildFull: string;
        BuildKeyCode(Arg1: WdKey, Arg2?: any, Arg3?: any, Arg4?: any): number;
        readonly CapsLock: boolean;
        Caption: string;
        readonly CaptionLabels: CaptionLabels;
        CentimetersToPoints(Centimeters: number): number;
        ChangeFileOpenDirectory(Path: string): void;
        CheckGrammar(String: string): boolean;
        CheckLanguage: boolean;
        CheckSpelling(
            Word: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any,
            CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): boolean;
        CleanString(String: string): string;
        readonly COMAddIns: Office.COMAddIns;
        readonly CommandBars: Office.CommandBars;

        /**
         * @param Word.WdCompareDestination [Destination=2]
         * @param Word.WdGranularity [Granularity=1]
         * @param boolean [CompareFormatting=true]
         * @param boolean [CompareCaseChanges=true]
         * @param boolean [CompareWhitespace=true]
         * @param boolean [CompareTables=true]
         * @param boolean [CompareHeaders=true]
         * @param boolean [CompareFootnotes=true]
         * @param boolean [CompareTextboxes=true]
         * @param boolean [CompareFields=true]
         * @param boolean [CompareComments=true]
         * @param boolean [CompareMoves=true]
         * @param string [RevisedAuthor='']
         * @param boolean [IgnoreAllComparisonWarnings=false]
         */
        CompareDocuments(
            OriginalDocument: Document, RevisedDocument: Document, Destination?: WdCompareDestination, Granularity?: WdGranularity, CompareFormatting?: boolean,
            CompareCaseChanges?: boolean, CompareWhitespace?: boolean, CompareTables?: boolean, CompareHeaders?: boolean, CompareFootnotes?: boolean,
            CompareTextboxes?: boolean, CompareFields?: boolean, CompareComments?: boolean, CompareMoves?: boolean, RevisedAuthor?: string, IgnoreAllComparisonWarnings?: boolean): Document;
        readonly Creator: number;
        readonly CustomDictionaries: Dictionaries;
        CustomizationContext: any;
        DDEExecute(Channel: number, Command: string): void;
        DDEInitiate(App: string, Topic: string): number;
        DDEPoke(Channel: number, Item: string, Data: string): void;
        DDERequest(Channel: number, Item: string): string;
        DDETerminate(Channel: number): void;
        DDETerminateAll(): void;
        DefaultLegalBlackline: boolean;
        DefaultSaveFormat: string;
        DefaultTableSeparator: string;
        DefaultWebOptions(): DefaultWebOptions;
        readonly Dialogs: Dialogs;
        DiscussionSupport(Range: any, cid: any, piCSE: any): void;
        DisplayAlerts: WdAlertLevel;
        DisplayAutoCompleteTips: boolean;
        DisplayDocumentInformationPanel: boolean;
        DisplayRecentFiles: boolean;
        DisplayScreenTips: boolean;
        DisplayScrollBars: boolean;
        DisplayStatusBar: boolean;
        readonly Documents: Documents;
        DontResetInsertionPointProperties: boolean;
        readonly Dummy1: boolean;
        Dummy2(): boolean;
        Dummy4(): void;
        readonly EmailOptions: EmailOptions;
        EmailTemplate: string;
        EnableCancelKey: WdEnableCancelKey;
        FeatureInstall: Office.MsoFeatureInstall;
        readonly FileConverters: FileConverters;
        FileDialog(FileDialogType: Office.MsoFileDialogType): Office.FileDialog;
        readonly FileSearch: Office.FileSearch;
        FileValidation: Office.MsoFileValidationMode;
        FindKey(KeyCode: number, KeyCode2?: any): KeyBinding;
        readonly FocusInMailHeader: boolean;
        readonly FontNames: FontNames;
        GetAddress(
            Name?: any, AddressProperties?: any, UseAutoText?: any, DisplaySelectDialog?: any, SelectDialog?: any, CheckNamesDialog?: any, RecentAddressesChoice?: any,
            UpdateRecentAddresses?: any): string;
        GetDefaultTheme(DocumentType: WdDocumentMedium): string;
        GetSpellingSuggestions(
            Word: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any,
            CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any,
            CustomDictionary10?: any): SpellingSuggestions;
        GoBack(): void;
        GoForward(): void;
        readonly HangulHanjaDictionaries: HangulHanjaConversionDictionaries;
        Height: number;
        Help(HelpType: any): void;
        HelpTool(): void;
        InchesToPoints(Inches: number): number;
        International(Index: WdInternationalIndex): any;
        IsObjectValid(Object: any): boolean;
        readonly IsSandboxed: boolean;
        readonly KeyBindings: KeyBindings;

        /** @param number [LangId=0] */
        Keyboard(LangId?: number): number;
        KeyboardBidi(): void;
        KeyboardLatin(): void;
        KeysBoundTo(KeyCategory: WdKeyCategory, Command: string, CommandParameter?: any): KeysBoundTo;
        KeyString(KeyCode: number, KeyCode2?: any): string;
        readonly LandscapeFontNames: FontNames;
        readonly Language: Office.MsoLanguageID;
        readonly Languages: Languages;
        readonly LanguageSettings: Office.LanguageSettings;
        Left: number;
        LinesToPoints(Lines: number): number;
        ListCommands(ListAllCommands: boolean): void;
        readonly ListGalleries: ListGalleries;
        LoadMasterList(FileName: string): void;
        LookupNameProperties(Name: string): void;
        readonly MacroContainer: any;
        readonly MailingLabel: MailingLabel;
        readonly MailMessage: MailMessage;
        readonly MailSystem: WdMailSystem;
        readonly MAPIAvailable: boolean;
        readonly MathCoprocessorAvailable: boolean;

        /**
         * @param Word.WdCompareDestination [Destination=2]
         * @param Word.WdGranularity [Granularity=1]
         * @param boolean [CompareFormatting=true]
         * @param boolean [CompareCaseChanges=true]
         * @param boolean [CompareWhitespace=true]
         * @param boolean [CompareTables=true]
         * @param boolean [CompareHeaders=true]
         * @param boolean [CompareFootnotes=true]
         * @param boolean [CompareTextboxes=true]
         * @param boolean [CompareFields=true]
         * @param boolean [CompareComments=true]
         * @param boolean [CompareMoves=true]
         * @param string [OriginalAuthor='']
         * @param string [RevisedAuthor='']
         * @param Word.WdMergeFormatFrom [FormatFrom=2]
         */
        MergeDocuments(
            OriginalDocument: Document, RevisedDocument: Document, Destination?: WdCompareDestination, Granularity?: WdGranularity, CompareFormatting?: boolean,
            CompareCaseChanges?: boolean, CompareWhitespace?: boolean, CompareTables?: boolean, CompareHeaders?: boolean, CompareFootnotes?: boolean,
            CompareTextboxes?: boolean, CompareFields?: boolean, CompareComments?: boolean, CompareMoves?: boolean, OriginalAuthor?: string, RevisedAuthor?: string,
            FormatFrom?: WdMergeFormatFrom): Document;
        MillimetersToPoints(Millimeters: number): number;
        MountVolume(Zone: string, Server: string, Volume: string, User?: any, UserPassword?: any, VolumePassword?: any): number;
        readonly MouseAvailable: boolean;
        Move(Left: number, Top: number): void;
        readonly Name: string;
        readonly NewDocument: Office.NewFile;
        NewWindow(): Window;
        NextLetter(): void;
        readonly NormalTemplate: Template;
        readonly NumLock: boolean;
        readonly OMathAutoCorrect: OMathAutoCorrect;
        OnTime(When: any, Name: string, Tolerance?: any): void;
        OpenAttachmentsInFullScreen: boolean;
        readonly Options: Options;
        OrganizerCopy(Source: string, Destination: string, Name: string, Object: WdOrganizerObject): void;
        OrganizerDelete(Source: string, Name: string, Object: WdOrganizerObject): void;
        OrganizerRename(Source: string, Name: string, NewName: string, Object: WdOrganizerObject): void;
        readonly Parent: any;
        readonly Path: string;
        readonly PathSeparator: string;
        PicasToPoints(Picas: number): number;
        readonly PickerDialog: Office.PickerDialog;
        PixelsToPoints(Pixels: number, fVertical?: any): number;
        PointsToCentimeters(Points: number): number;
        PointsToInches(Points: number): number;
        PointsToLines(Points: number): number;
        PointsToMillimeters(Points: number): number;
        PointsToPicas(Points: number): number;
        PointsToPixels(Points: number, fVertical?: any): number;
        readonly PortraitFontNames: FontNames;
        PrintOut(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any,
            PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;
        PrintOut2000(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any,
            PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;
        PrintOutOld(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;
        PrintPreview: boolean;
        ProductCode(): string;
        readonly ProtectedViewWindows: ProtectedViewWindows;
        PutFocusInMailHeader(): void;
        Quit(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;
        readonly RecentFiles: RecentFiles;
        Repeat(Times?: any): boolean;
        ResetIgnoreAll(): void;
        Resize(Width: number, Height: number): void;
        RestrictLinkedStyles: boolean;
        Run(
            MacroName: string, varg1?: any, varg2?: any, varg3?: any, varg4?: any, varg5?: any, varg6?: any, varg7?: any, varg8?: any, varg9?: any, varg10?: any,
            varg11?: any, varg12?: any, varg13?: any, varg14?: any, varg15?: any, varg16?: any, varg17?: any, varg18?: any, varg19?: any, varg20?: any, varg21?: any,
            varg22?: any, varg23?: any, varg24?: any, varg25?: any, varg26?: any, varg27?: any, varg28?: any, varg29?: any, varg30?: any): any;
        RunOld(MacroName: string): void;
        ScreenRefresh(): void;
        ScreenUpdating: boolean;
        readonly Selection: Selection;
        SendFax(): void;
        SetDefaultTheme(Name: string, DocumentType: WdDocumentMedium): void;
        ShowClipboard(): void;
        ShowMe(): void;
        ShowStartupDialog: boolean;
        ShowStylePreviews: boolean;
        ShowVisualBasicEditor: boolean;
        ShowWindowsInTaskbar: boolean;
        readonly SmartArtColors: Office.SmartArtColors;
        readonly SmartArtLayouts: Office.SmartArtLayouts;
        readonly SmartArtQuickStyles: Office.SmartArtQuickStyles;
        readonly SmartTagRecognizers: SmartTagRecognizers;
        readonly SmartTagTypes: SmartTagTypes;
        readonly SpecialMode: boolean;
        StartupPath: string;
        StatusBar: string;
        SubstituteFont(UnavailableFont: string, SubstituteFont: string): void;
        SynonymInfo(Word: string, LanguageID?: any): SynonymInfo;
        readonly System: System;
        readonly TaskPanes: TaskPanes;
        readonly Tasks: Tasks;
        readonly Templates: Templates;
        ThreeWayMerge(LocalDocument: Document, ServerDocument: Document, BaseDocument: Document, FavorSource: boolean): void;
        ToggleKeyboard(): void;
        Top: number;
        readonly UndoRecord: UndoRecord;
        readonly UsableHeight: number;
        readonly UsableWidth: number;
        UserAddress: string;
        readonly UserControl: boolean;
        UserInitials: string;
        UserName: string;
        readonly VBE: VBIDE.VBE;
        readonly Version: string;
        Visible: boolean;
        Width: number;
        readonly Windows: Windows;
        WindowState: WdWindowState;
        readonly WordBasic: any;
        readonly XMLNamespaces: XMLNamespaces;
    }

    class AutoCaption {
        private 'Word.AutoCaption_typekey': AutoCaption;
        private constructor();
        readonly Application: Application;
        AutoInsert: boolean;
        CaptionLabel: any;
        readonly Creator: number;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class AutoCaptions {
        private 'Word.AutoCaptions_typekey': AutoCaptions;
        private constructor();
        readonly Application: Application;
        CancelAutoInsert(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): AutoCaption;
        readonly Parent: any;
    }

    class AutoCorrect {
        private 'Word.AutoCorrect_typekey': AutoCorrect;
        private constructor();
        readonly Application: Application;
        CorrectCapsLock: boolean;
        CorrectDays: boolean;
        CorrectHangulAndAlphabet: boolean;
        CorrectInitialCaps: boolean;
        CorrectKeyboardSetting: boolean;
        CorrectSentenceCaps: boolean;
        CorrectTableCells: boolean;
        readonly Creator: number;
        DisplayAutoCorrectOptions: boolean;
        readonly Entries: AutoCorrectEntries;
        FirstLetterAutoAdd: boolean;
        readonly FirstLetterExceptions: FirstLetterExceptions;
        HangulAndAlphabetAutoAdd: boolean;
        readonly HangulAndAlphabetExceptions: HangulAndAlphabetExceptions;
        OtherCorrectionsAutoAdd: boolean;
        readonly OtherCorrectionsExceptions: OtherCorrectionsExceptions;
        readonly Parent: any;
        ReplaceText: boolean;
        ReplaceTextFromSpellingChecker: boolean;
        TwoInitialCapsAutoAdd: boolean;
        readonly TwoInitialCapsExceptions: TwoInitialCapsExceptions;
    }

    class AutoCorrectEntries {
        private 'Word.AutoCorrectEntries_typekey': AutoCorrectEntries;
        private constructor();
        Add(Name: string, Value: string): AutoCorrectEntry;
        AddRichText(Name: string, Range: Range): AutoCorrectEntry;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): AutoCorrectEntry;
        readonly Parent: any;
    }

    class AutoCorrectEntry {
        private 'Word.AutoCorrectEntry_typekey': AutoCorrectEntry;
        private constructor();
        readonly Application: Application;
        Apply(Range: Range): void;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        Name: string;
        readonly Parent: any;
        readonly RichText: boolean;
        Value: string;
    }

    class AutoTextEntries {
        private 'Word.AutoTextEntries_typekey': AutoTextEntries;
        private constructor();
        Add(Name: string, Range: Range): AutoTextEntry;
        AppendToSpike(Range: Range): AutoTextEntry;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): AutoTextEntry;
        readonly Parent: any;
    }

    class AutoTextEntry {
        private 'Word.AutoTextEntry_typekey': AutoTextEntry;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        Insert(Where: Range, RichText?: any): Range;
        Name: string;
        readonly Parent: any;
        readonly StyleName: string;
        Value: string;
    }

    class Bibliography {
        private 'Word.Bibliography_typekey': Bibliography;
        private constructor();
        readonly Application: Application;
        BibliographyStyle: string;
        readonly Creator: number;
        GenerateUniqueTag(): string;
        readonly Parent: any;
        readonly Sources: Sources;
    }

    class Bookmark {
        private 'Word.Bookmark_typekey': Bookmark;
        private constructor();
        readonly Application: Application;
        readonly Column: boolean;
        Copy(Name: string): Bookmark;
        readonly Creator: number;
        Delete(): void;
        readonly Empty: boolean;
        End: number;
        readonly Name: string;
        readonly Parent: any;
        readonly Range: Range;
        Select(): void;
        Start: number;
        readonly StoryType: WdStoryType;
    }

    class Bookmarks {
        private 'Word.Bookmarks_typekey': Bookmarks;
        private constructor();
        Add(Name: string, Range?: any): Bookmark;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        DefaultSorting: WdBookmarkSortBy;
        Exists(Name: string): boolean;
        Item(Index: number | string): Bookmark;
        readonly Parent: any;
        ShowHidden: boolean;
    }

    class Border {
        private 'Word.Border_typekey': Border;
        private constructor();
        readonly Application: Application;
        ArtStyle: WdPageBorderArt;
        ArtWidth: number;
        Color: WdColor;
        ColorIndex: WdColorIndex;
        readonly Creator: number;
        readonly Inside: boolean;
        LineStyle: WdLineStyle;
        LineWidth: WdLineWidth;
        readonly Parent: any;
        Visible: boolean;
    }

    class Borders {
        private 'Word.Borders_typekey': Borders;
        private constructor();
        AlwaysInFront: boolean;
        readonly Application: Application;
        ApplyPageBordersToAllSections(): void;
        readonly Count: number;
        readonly Creator: number;
        DistanceFrom: WdBorderDistanceFrom;
        DistanceFromBottom: number;
        DistanceFromLeft: number;
        DistanceFromRight: number;
        DistanceFromTop: number;
        Enable: boolean | WdConstants.wdUndefined | WdLineStyle;
        EnableFirstPageInSection: boolean;
        EnableOtherPagesInSection: boolean;
        readonly HasHorizontal: boolean;
        readonly HasVertical: boolean;
        InsideColor: WdColor;
        InsideColorIndex: WdColorIndex;
        InsideLineStyle: WdLineStyle;
        InsideLineWidth: WdLineWidth;
        Item(Index: WdBorderType): Border;
        JoinBorders: boolean;
        OutsideColor: WdColor;
        OutsideColorIndex: WdColorIndex;
        OutsideLineStyle: WdLineStyle;
        OutsideLineWidth: WdLineWidth;
        readonly Parent: any;
        Shadow: boolean;
        SurroundFooter: boolean;
        SurroundHeader: boolean;
    }

    class Break {
        private 'Word.Break_typekey': Break;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly PageIndex: number;
        readonly Parent: any;
        readonly Range: Range;
    }

    class Breaks {
        private 'Word.Breaks_typekey': Breaks;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Break;
        readonly Parent: any;
    }

    class Browser {
        private 'Word.Browser_typekey': Browser;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Next(): void;
        readonly Parent: any;
        Previous(): void;
        Target: WdBrowseTarget;
    }

    class BuildingBlock {
        private 'Word.BuildingBlock_typekey': BuildingBlock;
        private constructor();
        readonly Application: Application;
        readonly Category: Category;
        readonly Creator: number;
        Delete(): void;
        Description: string;
        readonly ID: string;
        readonly Index: number;
        Insert(Where: Range, RichText?: any): Range;
        InsertOptions: number;
        Name: string;
        readonly Parent: any;
        readonly Type: BuildingBlockType;
        Value: string;
    }

    class BuildingBlockEntries {
        private 'Word.BuildingBlockEntries_typekey': BuildingBlockEntries;
        private constructor();

        /** @param Word.WdDocPartInsertOptions [InsertOptions=0] */
        Add(Name: string, Type: WdBuildingBlockTypes, Category: string, Range: Range, Description: any, InsertOptions?: WdDocPartInsertOptions): BuildingBlock;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): BuildingBlock;
        readonly Parent: any;
    }

    class BuildingBlocks {
        private 'Word.BuildingBlocks_typekey': BuildingBlocks;
        private constructor();

        /** @param Word.WdDocPartInsertOptions [InsertOptions=0] */
        Add(Name: string, Range: Range, Description: any, InsertOptions?: WdDocPartInsertOptions): BuildingBlock;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): BuildingBlock;
        readonly Parent: any;
    }

    class BuildingBlockType {
        private 'Word.BuildingBlockType_typekey': BuildingBlockType;
        private constructor();
        readonly Application: Application;
        readonly Categories: Categories;
        readonly Creator: number;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class BuildingBlockTypes {
        private 'Word.BuildingBlockTypes_typekey': BuildingBlockTypes;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: WdBuildingBlockTypes): BuildingBlockType;
        readonly Parent: any;
    }

    class CalloutFormat {
        private 'Word.CalloutFormat_typekey': CalloutFormat;
        private constructor();
        Accent: Office.MsoTriState;
        Angle: Office.MsoCalloutAngleType;
        readonly Application: Application;
        AutoAttach: Office.MsoTriState;
        readonly AutoLength: Office.MsoTriState;
        AutomaticLength(): void;
        Border: Office.MsoTriState;
        readonly Creator: number;
        CustomDrop(Drop: number): void;
        CustomLength(Length: number): void;
        readonly Drop: number;
        readonly DropType: Office.MsoCalloutDropType;
        Gap: number;
        readonly Length: number;
        readonly Parent: any;
        PresetDrop(DropType: Office.MsoCalloutDropType): void;
        Type: Office.MsoCalloutType;
    }

    class CanvasShapes {
        private 'Word.CanvasShapes_typekey': CanvasShapes;
        private constructor();
        AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddCurve(SafeArrayOfPoints: any): Shape;
        AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddPicture(FileName: string, LinkToFile?: any, SaveWithDocument?: any, Left?: any, Top?: any, Width?: any, Height?: any): Shape;
        AddPolyline(SafeArrayOfPoints: any): Shape;
        AddShape(Type: number, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number): Shape;
        readonly Application: Application;
        BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Shape;
        readonly Parent: any;
        Range(Index: any): ShapeRange;
        SelectAll(): void;
    }

    class CaptionLabel {
        private 'Word.CaptionLabel_typekey': CaptionLabel;
        private constructor();
        readonly Application: Application;
        readonly BuiltIn: boolean;
        ChapterStyleLevel: number;
        readonly Creator: number;
        Delete(): void;
        readonly ID: WdCaptionLabelID;
        IncludeChapterNumber: boolean;
        readonly Name: string;
        NumberStyle: WdCaptionNumberStyle;
        readonly Parent: any;
        Position: WdCaptionPosition;
        Separator: WdSeparatorType;
    }

    class CaptionLabels {
        private 'Word.CaptionLabels_typekey': CaptionLabels;
        private constructor();
        Add(Name: string): CaptionLabel;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): CaptionLabel;
        readonly Parent: any;
    }

    class Categories {
        private 'Word.Categories_typekey': Categories;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Category;
        readonly Parent: any;
    }

    class Category {
        private 'Word.Category_typekey': Category;
        private constructor();
        readonly Application: Application;
        readonly BuildingBlocks: BuildingBlocks;
        readonly Creator: number;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
        readonly Type: BuildingBlockType;
    }

    class Cell {
        private 'Word.Cell_typekey': Cell;
        private constructor();
        readonly Application: Application;
        AutoSum(): void;
        Borders: Borders;
        BottomPadding: number;
        readonly Column: Column;
        readonly ColumnIndex: number;
        readonly Creator: number;
        Delete(ShiftCells?: any): void;
        FitText: boolean;
        Formula(Formula?: any, NumFormat?: any): void;
        Height: number;
        HeightRule: WdRowHeightRule;
        ID: string;
        LeftPadding: number;
        Merge(MergeTo: Cell): void;
        readonly NestingLevel: number;
        readonly Next: Cell;
        readonly Parent: any;
        PreferredWidth: number;
        PreferredWidthType: WdPreferredWidthType;
        readonly Previous: Cell;
        readonly Range: Range;
        RightPadding: number;
        readonly Row: Row;
        readonly RowIndex: number;
        Select(): void;
        SetHeight(RowHeight: any, HeightRule: WdRowHeightRule): void;
        SetWidth(ColumnWidth: number, RulerStyle: WdRulerStyle): void;
        readonly Shading: Shading;
        Split(NumRows?: any, NumColumns?: any): void;
        readonly Tables: Tables;
        TopPadding: number;
        VerticalAlignment: WdCellVerticalAlignment;
        Width: number;
        WordWrap: boolean;
    }

    class Cells {
        private 'Word.Cells_typekey': Cells;
        private constructor();
        Add(BeforeCell?: any): Cell;
        readonly Application: Application;
        AutoFit(): void;
        Borders: Borders;
        readonly Count: number;
        readonly Creator: number;
        Delete(ShiftCells?: any): void;
        DistributeHeight(): void;
        DistributeWidth(): void;
        Height: number;
        HeightRule: WdRowHeightRule;
        Item(Index: number): Cell;
        Merge(): void;
        readonly NestingLevel: number;
        readonly Parent: any;
        PreferredWidth: number;
        PreferredWidthType: WdPreferredWidthType;
        SetHeight(RowHeight: any, HeightRule: WdRowHeightRule): void;
        SetWidth(ColumnWidth: number, RulerStyle: WdRulerStyle): void;
        readonly Shading: Shading;
        Split(NumRows?: any, NumColumns?: any, MergeBeforeSplit?: any): void;
        VerticalAlignment: WdCellVerticalAlignment;
        Width: number;
    }

    class Characters {
        private 'Word.Characters_typekey': Characters;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        readonly First: Range;
        Item(Index: number): Range;
        readonly Last: Range;
        readonly Parent: any;
    }

    class Chart {
        private 'Word.Chart_typekey': Chart;
        private constructor();
        readonly Application: any;
        ApplyChartTemplate(FileName: string): void;
        ApplyCustomType(ChartType: Office.XlChartType, TypeName?: any): void;

        /** @param Word.XlDataLabelsType [Type=2] */
        ApplyDataLabels(
            Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any,
            ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;
        ApplyLayout(Layout: number, ChartType?: any): void;
        readonly Area3DGroup: ChartGroup;
        AreaGroups(Index?: any): any;
        AutoFormat(Gallery: number, Format?: any): void;
        AutoScaling: boolean;

        /** @param Word.XlAxisGroup [AxisGroup=1] */
        Axes(Type: any, AxisGroup?: XlAxisGroup): any;
        readonly BackWall: Walls;
        readonly Bar3DGroup: ChartGroup;
        BarGroups(Index?: any): any;
        BarShape: XlBarShape;
        readonly ChartArea: ChartArea;
        readonly ChartData: ChartData;
        ChartGroups(Index?: any): any;
        ChartStyle: any;
        readonly ChartTitle: ChartTitle;
        ChartType: Office.XlChartType;
        ChartWizard(
            Source?: any, Gallery?: any, Format?: any, PlotBy?: any, CategoryLabels?: any, SeriesLabels?: any, HasLegend?: any, Title?: any, CategoryTitle?: any,
            ValueTitle?: any, ExtraTitle?: any): void;
        ClearToMatchStyle(): void;
        readonly Column3DGroup: ChartGroup;
        ColumnGroups(Index?: any): any;
        Copy(Before?: any, After?: any): void;

        /**
         * @param Word.XlPictureAppearance [Appearance=1]
         * @param Word.XlCopyPictureFormat [Format=-4147]
         * @param Word.XlPictureAppearance [Size=2]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat, Size?: XlPictureAppearance): void;
        readonly Corners: Corners;
        readonly Creator: number;
        readonly DataTable: DataTable;
        Delete(): any;
        DepthPercent: number;
        DisplayBlanksAs: XlDisplayBlanksAs;
        DoughnutGroups(Index?: any): any;
        Elevation: number;
        Export(FileName: string, FilterName?: any, Interactive?: any): boolean;
        readonly Floor: Floor;
        GapDepth: number;
        GetChartElement(x: number, y: number, ElementID: number, Arg1: number, Arg2: number): void;
        HasAxis(Index1?: any, Index2?: any): any;
        HasDataTable: boolean;
        HasLegend: boolean;
        HasPivotFields: boolean;
        HasTitle: boolean;
        HeightPercent: number;
        readonly Legend: Legend;
        readonly Line3DGroup: ChartGroup;
        LineGroups(Index?: any): any;
        readonly Parent: any;
        Paste(Type?: any): void;
        Perspective: number;
        readonly Pie3DGroup: ChartGroup;
        PieGroups(Index?: any): any;
        readonly PivotLayout: any;
        readonly PlotArea: PlotArea;
        PlotBy: XlRowCol;
        PlotVisibleOnly: boolean;
        RadarGroups(Index?: any): any;
        Refresh(): void;
        RightAngleAxes: any;
        Rotation: any;
        SaveChartTemplate(FileName: string): void;
        Select(Replace?: any): any;
        SeriesCollection(Index?: any): any;
        SetBackgroundPicture(FileName: string): void;
        SetDefaultChart(Name: any): void;
        SetElement(Element: Office.MsoChartElementType): void;
        SetSourceData(Source: string, PlotBy?: any): void;
        readonly Shapes: any;
        ShowAllFieldButtons: boolean;
        ShowAxisFieldButtons: boolean;
        ShowDataLabelsOverMaximum: boolean;
        ShowLegendFieldButtons: boolean;
        ShowReportFilterFieldButtons: boolean;
        ShowValueFieldButtons: boolean;
        readonly SideWall: Walls;
        SubType: number;
        readonly SurfaceGroup: ChartGroup;
        Type: number;
        readonly Walls: Walls;
        XYGroups(Index?: any): any;
    }

    class ChartArea {
        private 'Word.ChartArea_typekey': ChartArea;
        private constructor();
        readonly Application: any;
        AutoScaleFont: any;
        readonly Border: ChartBorder;
        Clear(): any;
        ClearContents(): any;
        ClearFormats(): any;
        Copy(): any;
        readonly Creator: number;
        readonly Fill: ChartFillFormat;
        readonly Font: ChartFont;
        readonly Format: ChartFormat;
        Height: number;
        readonly Interior: Interior;
        Left: number;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
        Shadow: boolean;
        Top: number;
        Width: number;
    }

    class ChartBorder {
        private 'Word.ChartBorder_typekey': ChartBorder;
        private constructor();
        readonly Application: any;
        Color: any;
        ColorIndex: any;
        readonly Creator: number;
        LineStyle: any;
        readonly Parent: any;
        Weight: any;
    }

    class ChartCharacters {
        private 'Word.ChartCharacters_typekey': ChartCharacters;
        private constructor();
        readonly Application: any;
        Caption: string;
        readonly Count: number;
        readonly Creator: number;
        Delete(): any;
        readonly Font: ChartFont;
        Insert(String: string): any;
        readonly Parent: any;
        PhoneticCharacters: string;
        Text: string;
    }

    class ChartColorFormat {
        private 'Word.ChartColorFormat_typekey': ChartColorFormat;
        private constructor();
        readonly _Default: number;
        readonly Application: any;
        readonly Creator: number;
        readonly Parent: any;
        readonly RGB: number;
        SchemeColor: number;
        readonly Type: number;
    }

    class ChartData {
        private 'Word.ChartData_typekey': ChartData;
        private constructor();
        Activate(): void;
        BreakLink(): void;
        readonly IsLinked: boolean;
        readonly Workbook: any;
    }

    class ChartFillFormat {
        private 'Word.ChartFillFormat_typekey': ChartFillFormat;
        private constructor();
        readonly Application: any;
        readonly BackColor: ChartColorFormat;
        readonly Creator: number;
        readonly ForeColor: ChartColorFormat;
        readonly GradientColorType: Office.MsoGradientColorType;
        readonly GradientDegree: number;
        readonly GradientStyle: Office.MsoGradientStyle;
        readonly GradientVariant: number;
        OneColorGradient(Style: Office.MsoGradientStyle, Variant: number, Degree: number): void;
        readonly Parent: any;
        readonly Pattern: Office.MsoPatternType;
        Patterned(Pattern: Office.MsoPatternType): void;
        PresetGradient(Style: Office.MsoGradientStyle, Variant: number, PresetGradientType: Office.MsoPresetGradientType): void;
        readonly PresetGradientType: Office.MsoPresetGradientType;
        readonly PresetTexture: Office.MsoPresetTexture;
        PresetTextured(PresetTexture: Office.MsoPresetTexture): void;
        Solid(): void;
        readonly TextureName: string;
        readonly TextureType: Office.MsoTextureType;
        TwoColorGradient(Style: Office.MsoGradientStyle, Variant: number): void;
        readonly Type: Office.MsoFillType;
        UserPicture(PictureFile?: any, PictureFormat?: any, PictureStackUnit?: any, PicturePlacement?: any): void;
        UserTextured(TextureFile: string): void;
        Visible: Office.MsoTriState;
    }

    class ChartFont {
        private 'Word.ChartFont_typekey': ChartFont;
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

    class ChartFormat {
        private 'Word.ChartFormat_typekey': ChartFormat;
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
        readonly TextFrame2: Office.TextFrame2;
        readonly ThreeD: ThreeDFormat;
    }

    class ChartGroup {
        private 'Word.ChartGroup_typekey': ChartGroup;
        private constructor();
        readonly Application: any;
        AxisGroup: XlAxisGroup;
        BubbleScale: number;
        readonly Creator: number;
        DoughnutHoleSize: number;
        readonly DownBars: DownBars;
        readonly DropLines: DropLines;
        FirstSliceAngle: number;
        GapWidth: number;
        Has3DShading: boolean;
        HasDropLines: boolean;
        HasHiLoLines: boolean;
        HasRadarAxisLabels: boolean;
        HasSeriesLines: boolean;
        HasUpDownBars: boolean;
        readonly HiLoLines: HiLoLines;
        readonly Index: number;
        Overlap: number;
        readonly Parent: any;
        readonly RadarAxisLabels: TickLabels;
        SecondPlotSize: number;
        SeriesCollection(Index?: any): any;
        readonly SeriesLines: SeriesLines;
        ShowNegativeBubbles: boolean;
        SizeRepresents: XlSizeRepresents;
        SplitType: XlChartSplitType;
        SplitValue: any;
        SubType: number;
        Type: number;
        readonly UpBars: UpBars;
        VaryByCategories: boolean;
    }

    class ChartTitle {
        private 'Word.ChartTitle_typekey': ChartTitle;
        private constructor();
        readonly Application: any;
        AutoScaleFont: any;
        readonly Border: ChartBorder;
        Caption: string;
        Characters(Start?: any, Length?: any): ChartCharacters;
        readonly Creator: number;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: ChartFont;
        readonly Format: ChartFormat;
        Formula: string;
        FormulaLocal: string;
        FormulaR1C1: string;
        FormulaR1C1Local: string;
        readonly Height: number;
        HorizontalAlignment: any;
        IncludeInLayout: boolean;
        readonly Interior: Interior;
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

    class CheckBox {
        private 'Word.CheckBox_typekey': CheckBox;
        private constructor();
        readonly Application: Application;
        AutoSize: boolean;
        readonly Creator: number;
        Default: boolean;
        readonly Parent: any;
        Size: number;
        readonly Valid: boolean;
        Value: boolean;
    }

    class CoAuthLock {
        private 'Word.CoAuthLock_typekey': CoAuthLock;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly HeaderFooter: boolean;
        readonly Owner: CoAuthor;
        readonly Parent: any;
        readonly Range: Range;
        readonly Type: WdLockType;
        Unlock(): void;
    }

    class CoAuthLocks {
        private 'Word.CoAuthLocks_typekey': CoAuthLocks;
        private constructor();

        /** @param Word.WdLockType [Type=1] */
        Add(Range: any, Type?: WdLockType): CoAuthLock;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): CoAuthLock;
        readonly Parent: any;
        RemoveEphemeralLocks(): void;
    }

    class CoAuthor {
        private 'Word.CoAuthor_typekey': CoAuthor;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly EmailAddress: string;
        readonly ID: string;
        readonly IsMe: boolean;
        readonly Locks: CoAuthLocks;
        readonly Name: string;
        readonly Parent: any;
    }

    class CoAuthoring {
        private 'Word.CoAuthoring_typekey': CoAuthoring;
        private constructor();
        readonly Application: Application;
        readonly Authors: CoAuthors;
        readonly CanMerge: boolean;
        readonly CanShare: boolean;
        readonly Conflicts: Conflicts;
        readonly Creator: number;
        readonly Locks: CoAuthLocks;
        readonly Me: CoAuthor;
        readonly Parent: any;
        readonly PendingUpdates: boolean;
        readonly Updates: CoAuthUpdates;
    }

    class CoAuthors {
        private 'Word.CoAuthors_typekey': CoAuthors;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): CoAuthor;
        readonly Parent: any;
    }

    class CoAuthUpdate {
        private 'Word.CoAuthUpdate_typekey': CoAuthUpdate;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Parent: any;
        readonly Range: Range;
    }

    class CoAuthUpdates {
        private 'Word.CoAuthUpdates_typekey': CoAuthUpdates;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): CoAuthUpdate;
        readonly Parent: any;
    }

    class ColorFormat {
        private 'Word.ColorFormat_typekey': ColorFormat;
        private constructor();
        readonly Application: Application;
        Black: number;
        Brightness: number;
        readonly Creator: number;
        Cyan: number;
        Ink(Index: number): number;
        Magenta: number;
        Name: string;
        ObjectThemeColor: WdThemeColorIndex;
        OverPrint: Office.MsoTriState;
        readonly Parent: any;
        RGB: number;
        SchemeColor: number;
        SetCMYK(Cyan: number, Magenta: number, Yellow: number, Black: number): void;
        TintAndShade: number;
        readonly Type: Office.MsoColorType;
        Yellow: number;
    }

    class Column {
        private 'Word.Column_typekey': Column;
        private constructor();
        readonly Application: Application;
        AutoFit(): void;
        Borders: Borders;
        readonly Cells: Cells;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly IsFirst: boolean;
        readonly IsLast: boolean;
        readonly NestingLevel: number;
        readonly Next: Column;
        readonly Parent: any;
        PreferredWidth: number;
        PreferredWidthType: WdPreferredWidthType;
        readonly Previous: Column;
        Select(): void;
        SetWidth(ColumnWidth: number, RulerStyle: WdRulerStyle): void;
        readonly Shading: Shading;
        Sort(
            ExcludeHeader?: any, SortFieldType?: any, SortOrder?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any,
            IgnoreHe?: any, LanguageID?: any): void;
        SortOld(ExcludeHeader?: any, SortFieldType?: any, SortOrder?: any, CaseSensitive?: any, LanguageID?: any): void;
        Width: number;
    }

    class Columns {
        private 'Word.Columns_typekey': Columns;
        private constructor();
        Add(BeforeColumn?: any): Column;
        readonly Application: Application;
        AutoFit(): void;
        Borders: Borders;
        readonly Count: number;
        readonly Creator: number;
        Delete(): void;
        DistributeWidth(): void;
        readonly First: Column;
        Item(Index: number): Column;
        readonly Last: Column;
        readonly NestingLevel: number;
        readonly Parent: any;
        PreferredWidth: number;
        PreferredWidthType: WdPreferredWidthType;
        Select(): void;
        SetWidth(ColumnWidth: number, RulerStyle: WdRulerStyle): void;
        readonly Shading: Shading;
        Width: number;
    }

    class Comment {
        private 'Word.Comment_typekey': Comment;
        private constructor();
        readonly Application: Application;
        Author: string;
        readonly Creator: number;
        readonly Date: VarDate;
        Delete(): void;
        Edit(): void;
        readonly Index: number;
        Initial: string;
        readonly IsInk: boolean;
        readonly Parent: any;
        readonly Range: Range;
        readonly Reference: Range;
        readonly Scope: Range;
        ShowTip: boolean;
    }

    class Comments {
        private 'Word.Comments_typekey': Comments;
        private constructor();
        Add(Range: Range, Text?: any): Comment;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Comment;
        readonly Parent: any;
        ShowBy: string;
    }

    class ConditionalStyle {
        private 'Word.ConditionalStyle_typekey': ConditionalStyle;
        private constructor();
        readonly Application: Application;
        Borders: Borders;
        BottomPadding: number;
        readonly Creator: number;
        Font: Font;
        LeftPadding: number;
        ParagraphFormat: ParagraphFormat;
        readonly Parent: any;
        RightPadding: number;
        readonly Shading: Shading;
        TopPadding: number;
    }

    class Conflict {
        private 'Word.Conflict_typekey': Conflict;
        private constructor();
        Accept(): void;
        readonly Application: Application;
        readonly Creator: number;
        readonly Index: number;
        readonly Parent: any;
        readonly Range: Range;
        Reject(): void;
        readonly Type: WdRevisionType;
    }

    class Conflicts {
        private 'Word.Conflicts_typekey': Conflicts;
        private constructor();
        AcceptAll(): void;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Conflict;
        readonly Parent: any;
        RejectAll(): void;
    }

    class ConnectorFormat {
        private 'Word.ConnectorFormat_typekey': ConnectorFormat;
        private constructor();
        readonly Application: Application;
        BeginConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        readonly BeginConnected: Office.MsoTriState;
        readonly BeginConnectedShape: Shape;
        readonly BeginConnectionSite: number;
        BeginDisconnect(): void;
        readonly Creator: number;
        EndConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        readonly EndConnected: Office.MsoTriState;
        readonly EndConnectedShape: Shape;
        readonly EndConnectionSite: number;
        EndDisconnect(): void;
        readonly Parent: any;
        Type: Office.MsoConnectorType;
    }

    class ContentControl {
        private 'Word.ContentControl_typekey': ContentControl;
        private constructor();
        readonly Application: Application;
        BuildingBlockCategory: string;
        BuildingBlockType: WdBuildingBlockTypes;
        Checked: boolean;
        Copy(): void;
        readonly Creator: number;
        Cut(): void;
        DateCalendarType: WdCalendarType;
        DateDisplayFormat: string;
        DateDisplayLocale: WdLanguageID;
        DateStorageFormat: WdContentControlDateStorageFormat;
        DefaultTextStyle: any;

        /** @param boolean [DeleteContents=false] */
        Delete(DeleteContents?: boolean): void;
        readonly DropdownListEntries: ContentControlListEntries;
        readonly ID: string;
        LockContentControl: boolean;
        LockContents: boolean;
        MultiLine: boolean;
        readonly Parent: any;
        readonly ParentContentControl: ContentControl;
        readonly PlaceholderText: BuildingBlock;
        readonly Range: Range;

        /** @param string [Font=''] */
        SetCheckedSymbol(CharacterNumber: number, Font?: string): void;

        /**
         * @param Word.BuildingBlock [BuildingBlock=0]
         * @param Word.Range [Range=0]
         * @param string [Text='']
         */
        SetPlaceholderText(BuildingBlock?: BuildingBlock, Range?: Range, Text?: string): void;

        /** @param string [Font=''] */
        SetUncheckedSymbol(CharacterNumber: number, Font?: string): void;
        readonly ShowingPlaceholderText: boolean;
        Tag: string;
        Temporary: boolean;
        Title: string;
        Type: WdContentControlType;
        Ungroup(): void;
        readonly XMLMapping: XMLMapping;
    }

    class ContentControlListEntries {
        private 'Word.ContentControlListEntries_typekey': ContentControlListEntries;
        private constructor();

        /**
         * @param string [Value='']
         * @param number [Index=0]
         */
        Add(Text: string, Value?: string, Index?: number): ContentControlListEntry;
        readonly Application: Application;
        Clear(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): ContentControlListEntry;
        readonly Parent: any;
    }

    class ContentControlListEntry {
        private 'Word.ContentControlListEntry_typekey': ContentControlListEntry;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        Index: number;
        MoveDown(): void;
        MoveUp(): void;
        readonly Parent: any;
        Select(): void;
        Text: string;
        Value: string;
    }

    class ContentControls {
        private 'Word.ContentControls_typekey': ContentControls;
        private constructor();

        /** @param Word.WdContentControlType [Type=0] */
        Add(Type?: WdContentControlType, Range?: any): ContentControl;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): ContentControl;
        readonly Parent: any;
    }

    class Corners {
        private 'Word.Corners_typekey': Corners;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class CustomLabel {
        private 'Word.CustomLabel_typekey': CustomLabel;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly DotMatrix: boolean;
        Height: number;
        HorizontalPitch: number;
        readonly Index: number;
        Name: string;
        NumberAcross: number;
        NumberDown: number;
        PageSize: WdCustomLabelPageSize;
        readonly Parent: any;
        SideMargin: number;
        TopMargin: number;
        readonly Valid: boolean;
        VerticalPitch: number;
        Width: number;
    }

    class CustomLabels {
        private 'Word.CustomLabels_typekey': CustomLabels;
        private constructor();
        Add(Name: string, DotMatrix?: any): CustomLabel;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): CustomLabel;
        readonly Parent: any;
    }

    class CustomProperties {
        private 'Word.CustomProperties_typekey': CustomProperties;
        private constructor();
        Add(Name: string, Value: string): CustomProperty;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): CustomProperty;
        readonly Parent: any;
    }

    class CustomProperty {
        private 'Word.CustomProperty_typekey': CustomProperty;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Name: string;
        readonly Parent: any;
        Value: string;
    }

    class DataTable {
        private 'Word.DataTable_typekey': DataTable;
        private constructor();
        readonly Application: any;
        AutoScaleFont: any;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): void;
        readonly Font: ChartFont;
        readonly Format: ChartFormat;
        HasBorderHorizontal: boolean;
        HasBorderOutline: boolean;
        HasBorderVertical: boolean;
        readonly Parent: any;
        Select(): void;
        ShowLegendKey: boolean;
    }

    class DefaultWebOptions {
        private 'Word.DefaultWebOptions_typekey': DefaultWebOptions;
        private constructor();
        AllowPNG: boolean;
        AlwaysSaveInDefaultEncoding: boolean;
        readonly Application: Application;
        BrowserLevel: WdBrowserLevel;
        CheckIfOfficeIsHTMLEditor: boolean;
        CheckIfWordIsDefaultHTMLEditor: boolean;
        readonly Creator: number;
        Encoding: Office.MsoEncoding;
        readonly FolderSuffix: string;
        readonly Fonts: Office.WebPageFonts;
        OptimizeForBrowser: boolean;
        OrganizeInFolder: boolean;
        readonly Parent: any;
        PixelsPerInch: number;
        RelyOnCSS: boolean;
        RelyOnVML: boolean;
        SaveNewWebPagesAsWebArchives: boolean;
        ScreenSize: Office.MsoScreenSize;
        TargetBrowser: Office.MsoTargetBrowser;
        UpdateLinksOnSave: boolean;
        UseLongFileNames: boolean;
    }

    class Diagram {
        private 'Word.Diagram_typekey': Diagram;
        private constructor();
        readonly Application: Application;
        AutoFormat: Office.MsoTriState;
        AutoLayout: Office.MsoTriState;
        Convert(Type: Office.MsoDiagramType): void;
        readonly Creator: number;
        FitText(): void;
        readonly Nodes: DiagramNodes;
        readonly Parent: any;
        Reverse: Office.MsoTriState;
        readonly Type: Office.MsoDiagramType;
    }

    class DiagramNode {
        private 'Word.DiagramNode_typekey': DiagramNode;
        private constructor();

        /**
         * @param Office.MsoRelativeNodePosition [Pos=2]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        AddNode(Pos?: Office.MsoRelativeNodePosition, NodeType?: Office.MsoDiagramNodeType): DiagramNode;
        readonly Application: Application;
        readonly Children: DiagramNodeChildren;

        /**
         * @param Word.DiagramNode [TargetNode=0]
         * @param Office.MsoRelativeNodePosition [Pos=2]
         */
        CloneNode(copyChildren: boolean, TargetNode?: DiagramNode, Pos?: Office.MsoRelativeNodePosition): DiagramNode;
        readonly Creator: number;
        Delete(): void;
        readonly Diagram: Diagram;
        Layout: Office.MsoOrgChartLayoutType;
        MoveNode(TargetNode: DiagramNode, Pos: Office.MsoRelativeNodePosition): void;
        NextNode(): DiagramNode;
        readonly Parent: any;
        PrevNode(): DiagramNode;
        ReplaceNode(TargetNode: DiagramNode): void;
        readonly Root: DiagramNode;
        readonly Shape: Shape;

        /** @param Office.MsoRelativeNodePosition [Pos=-1] */
        SwapNode(TargetNode: DiagramNode, Pos?: Office.MsoRelativeNodePosition): void;
        readonly TextShape: Shape;
        TransferChildren(ReceivingNode: DiagramNode): void;
    }

    class DiagramNodeChildren {
        private 'Word.DiagramNodeChildren_typekey': DiagramNodeChildren;
        private constructor();

        /**
         * @param any [Index=-1]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        AddNode(Index?: any, NodeType?: Office.MsoDiagramNodeType): DiagramNode;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        readonly FirstChild: DiagramNode;
        Item(Index: any): DiagramNode;
        readonly LastChild: DiagramNode;
        readonly Parent: any;
        SelectAll(): void;
    }

    class DiagramNodes {
        private 'Word.DiagramNodes_typekey': DiagramNodes;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): DiagramNode;
        readonly Parent: any;
        SelectAll(): void;
    }

    class Dialog {
        private 'Word.Dialog_typekey': Dialog;
        private constructor();
        readonly Application: Application;
        readonly CommandBarId: number;
        readonly CommandName: string;
        readonly Creator: number;
        DefaultTab: WdWordDialogTab;
        Display(TimeOut?: number): number;
        Execute(): void;
        readonly Parent: any;
        Show(TimeOut?: any): number;
        readonly Type: WdWordDialog;
        Update(): void;
    }

    class Dialogs {
        private 'Word.Dialogs_typekey': Dialogs;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: WdWordDialog): Dialog;
        readonly Parent: any;
    }

    class Dictionaries {
        private 'Word.Dictionaries_typekey': Dictionaries;
        private constructor();
        ActiveCustomDictionary: Dictionary;
        Add(FileName: string): Dictionary;
        readonly Application: Application;
        ClearAll(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Dictionary;
        readonly Maximum: number;
        readonly Parent: any;
    }

    class Dictionary {
        private 'Word.Dictionary_typekey': Dictionary;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        LanguageID: WdLanguageID;
        LanguageSpecific: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly Path: string;
        readonly ReadOnly: boolean;
        readonly Type: WdDictionaryType;
    }

    class Document {
        private 'Word.Document_typekey': Document;
        private constructor();
        _CodeName: string;
        AcceptAllRevisions(): void;
        AcceptAllRevisionsShown(): void;
        Activate(): void;
        readonly ActiveTheme: string;
        readonly ActiveThemeDisplayName: string;
        readonly ActiveWindow: Window;
        ActiveWritingStyle(LanguageID: any): string;
        AddDocumentWorkspaceHeader(RichFormat: boolean, Url: string, Title: string, Description: string, ID: string): void;
        AddMeetingWorkspaceHeader(SkipIfAbsent: boolean, Url: string, Title: string, Description: string, ID: string): void;
        AddToFavorites(): void;
        readonly Application: Application;
        ApplyDocumentTheme(FileName: string): void;
        ApplyQuickStyleSet(Name: string): void;
        ApplyQuickStyleSet2(Style: any): void;
        ApplyTheme(Name: string): void;
        AttachedTemplate: Template;
        AutoFormat(): void;
        AutoFormatOverride: boolean;
        AutoHyphenation: boolean;
        AutoSummarize(Length?: any, Mode?: any, UpdateProperties?: any): Range;
        Background: Shape;
        readonly Bibliography: Bibliography;
        readonly Bookmarks: Bookmarks;
        readonly BuiltInDocumentProperties: Office.DocumentProperties<Application>;
        CanCheckin(): boolean;
        readonly Characters: Characters;
        CheckConsistency(): void;
        CheckGrammar(): void;

        /**
         * @param boolean [SaveChanges=true]
         * @param boolean [MakePublic=false]
         */
        CheckIn(SaveChanges?: boolean, Comments?: any, MakePublic?: boolean): void;

        /**
         * @param boolean [SaveChanges=true]
         * @param boolean [MakePublic=false]
         */
        CheckInWithVersion(SaveChanges?: boolean, Comments?: any, MakePublic?: boolean, VersionType?: any): void;
        CheckNewSmartTags(): void;
        CheckSpelling(
            CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any,
            CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): void;
        readonly ChildNodeSuggestions: XMLChildNodeSuggestions;
        ClickAndTypeParagraphStyle: any;
        Close(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;
        ClosePrintPreview(): void;
        readonly CoAuthoring: CoAuthoring;
        readonly CodeName: string;
        readonly CommandBars: Office.CommandBars;
        readonly Comments: Comments;
        Compare(
            Name: string, AuthorName?: any, CompareTarget?: any, DetectFormatChanges?: any, IgnoreAllComparisonWarnings?: any, AddToRecentFiles?: any,
            RemovePersonalInformation?: any, RemoveDateAndTime?: any): void;
        Compare2000(Name: string): void;
        Compare2002(Name: string, AuthorName?: any, CompareTarget?: any, DetectFormatChanges?: any, IgnoreAllComparisonWarnings?: any, AddToRecentFiles?: any): void;
        Compatibility(Type: WdCompatibility): boolean;
        readonly CompatibilityMode: number;
        ComputeStatistics(Statistic: WdStatistic, IncludeFootnotesAndEndnotes?: any): number;
        ConsecutiveHyphensLimit: number;
        readonly Container: any;
        readonly Content: Range;
        readonly ContentControls: ContentControls;
        readonly ContentTypeProperties: Office.MetaProperties;
        Convert(): void;
        ConvertAutoHyphens(): void;
        ConvertNumbersToText(NumberType?: any): void;
        ConvertVietDoc(CodePageOrigin: number): void;
        CopyStylesFromTemplate(Template: string): void;
        CountNumberedItems(NumberType?: any, Level?: any): number;
        CreateLetterContent(
            DateFormat: string, IncludeHeaderFooter: boolean, PageDesign: string, LetterStyle: WdLetterStyle, Letterhead: boolean,
            LetterheadLocation: WdLetterheadLocation, LetterheadSize: number, RecipientName: string, RecipientAddress: string, Salutation: string,
            SalutationType: WdSalutationType, RecipientReference: string, MailingInstructions: string, AttentionLine: string, Subject: string, CCList: string,
            ReturnAddress: string, SenderName: string, Closing: string, SenderCompany: string, SenderJobTitle: string, SenderInitials: string, EnclosureNumber: number,
            InfoBlock?: any, RecipientCode?: any, RecipientGender?: any, ReturnAddressShortForm?: any, SenderCity?: any, SenderCode?: any, SenderGender?: any, SenderReference?: any): LetterContent;
        readonly Creator: number;
        readonly CurrentRsid: number;
        readonly CustomDocumentProperties: Office.DocumentProperties<Application>;
        readonly CustomXMLParts: Office.CustomXMLParts;
        DataForm(): void;
        readonly DefaultTableStyle: any;
        DefaultTabStop: number;
        DefaultTargetFrame: string;
        DeleteAllComments(): void;
        DeleteAllCommentsShown(): void;
        DeleteAllEditableRanges(EditorID?: any): void;
        DeleteAllInkAnnotations(): void;
        DetectLanguage(): void;
        DisableFeatures: boolean;
        DisableFeaturesIntroducedAfter: WdDisableFeaturesIntroducedAfter;
        readonly DocID: number;
        readonly DocumentInspectors: Office.DocumentInspectors;
        readonly DocumentLibraryVersions: Office.DocumentLibraryVersions;
        readonly DocumentTheme: Office.OfficeTheme;
        DoNotEmbedSystemFonts: boolean;
        DowngradeDocument(): void;
        readonly Dummy1: undefined;
        Dummy2(): void;
        readonly Dummy3: undefined;
        Dummy4(): void;
        EditionOptions(Type: WdEditionType, Option: WdEditionOption, Name: string, Format?: any): void;
        readonly Email: Email;
        EmbedLinguisticData: boolean;
        EmbedSmartTags: boolean;
        EmbedTrueTypeFonts: boolean;
        EncryptionProvider: string;
        readonly Endnotes: Endnotes;
        EndReview(): void;
        EnforceStyle: boolean;
        readonly Envelope: Envelope;

        /**
         * @param boolean [OpenAfterExport=false]
         * @param Word.WdExportOptimizeFor [OptimizeFor=0]
         * @param Word.WdExportRange [Range=0]
         * @param number [From=1]
         * @param number [To=1]
         * @param Word.WdExportItem [Item=0]
         * @param boolean [IncludeDocProps=false]
         * @param boolean [KeepIRM=true]
         * @param Word.WdExportCreateBookmarks [CreateBookmarks=0]
         * @param boolean [DocStructureTags=true]
         * @param boolean [BitmapMissingFonts=true]
         * @param boolean [UseISO19005_1=false]
         */
        ExportAsFixedFormat(
            OutputFileName: string, ExportFormat: WdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WdExportOptimizeFor, Range?: WdExportRange, From?: number,
            To?: number, Item?: WdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WdExportCreateBookmarks, DocStructureTags?: boolean,
            BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;
        FarEastLineBreakLanguage: WdFarEastLineBreakLanguageID;
        FarEastLineBreakLevel: WdFarEastLineBreakLevel;
        readonly Fields: Fields;
        Final: boolean;
        FitToPages(): void;
        FollowHyperlink(Address?: any, SubAddress?: any, NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;
        readonly Footnotes: Footnotes;
        FormattingShowClear: boolean;
        FormattingShowFilter: WdShowFilter;
        FormattingShowFont: boolean;
        FormattingShowNextLevel: boolean;
        FormattingShowNumbering: boolean;
        FormattingShowParagraph: boolean;
        FormattingShowUserStyleName: boolean;
        readonly FormFields: FormFields;
        readonly FormsDesign: boolean;
        ForwardMailer(): void;
        readonly Frames: Frames;
        readonly Frameset: Frameset;
        FreezeLayout(): void;
        readonly FullName: string;
        GetCrossReferenceItems(ReferenceType: any): any;
        GetLetterContent(): LetterContent;
        GetWorkflowTasks(): Office.WorkflowTasks;
        GetWorkflowTemplates(): Office.WorkflowTemplates;
        GoTo(What?: any, Which?: any, Count?: any, Name?: any): Range;
        GrammarChecked: boolean;
        readonly GrammaticalErrors: ProofreadingErrors;
        GridDistanceHorizontal: number;
        GridDistanceVertical: number;
        GridOriginFromMargin: boolean;
        GridOriginHorizontal: number;
        GridOriginVertical: number;
        GridSpaceBetweenHorizontalLines: number;
        GridSpaceBetweenVerticalLines: number;
        HasMailer: boolean;
        readonly HasPassword: boolean;
        HasRoutingSlip: boolean;
        readonly HasVBProject: boolean;
        readonly HTMLDivisions: HTMLDivisions;
        readonly HTMLProject: Office.HTMLProject;
        readonly Hyperlinks: Hyperlinks;
        HyphenateCaps: boolean;
        HyphenationZone: number;
        readonly Indexes: Indexes;
        readonly InlineShapes: InlineShapes;
        readonly IsMasterDocument: boolean;
        readonly IsSubdocument: boolean;
        JustificationMode: WdJustificationMode;
        KerningByAlgorithm: boolean;
        Kind: WdDocumentKind;
        LanguageDetected: boolean;
        readonly ListParagraphs: ListParagraphs;
        readonly Lists: Lists;
        readonly ListTemplates: ListTemplates;
        LockQuickStyleSet: boolean;
        LockServerFile(): void;
        LockTheme: boolean;
        readonly MailEnvelope: Office.MsoEnvelope;
        readonly Mailer: Mailer;
        readonly MailMerge: MailMerge;
        MakeCompatibilityDefault(): void;
        ManualHyphenation(): void;
        Merge(FileName: string, MergeTarget?: any, DetectFormatChanges?: any, UseFormattingFrom?: any, AddToRecentFiles?: any): void;
        Merge2000(FileName: string): void;
        readonly Name: string;
        NoLineBreakAfter: string;
        NoLineBreakBefore: string;
        OMathBreakBin: WdOMathBreakBin;
        OMathBreakSub: WdOMathBreakSub;
        OMathFontName: string;
        OMathIntSubSupLim: boolean;
        OMathJc: WdOMathJc;
        OMathLeftMargin: number;
        OMathNarySupSubLim: boolean;
        OMathRightMargin: number;
        readonly OMaths: OMaths;
        OMathSmallFrac: boolean;
        OMathWrap: number;
        readonly OpenEncoding: Office.MsoEncoding;
        OptimizeForWord97: boolean;
        readonly OriginalDocumentTitle: string;
        PageSetup: PageSetup;
        readonly Paragraphs: Paragraphs;
        readonly Parent: any;
        readonly Password: string;
        readonly PasswordEncryptionAlgorithm: string;
        readonly PasswordEncryptionFileProperties: boolean;
        readonly PasswordEncryptionKeyLength: number;
        readonly PasswordEncryptionProvider: string;
        readonly Path: string;
        readonly Permission: Office.Permission;
        Post(): void;
        PresentIt(): void;
        PrintFormsData: boolean;
        PrintFractionalWidths: boolean;
        PrintOut(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any,
            PrintZoomPaperHeight?: any): void;
        PrintOut2000(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any,
            PrintZoomPaperHeight?: any): void;
        PrintOutOld(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;
        PrintPostScriptOverText: boolean;
        PrintPreview(): void;
        PrintRevisions: boolean;
        Protect(Type: WdProtectionType, NoReset?: any, Password?: any, UseIRM?: any, EnforceStyleLock?: any): void;
        Protect2002(Type: WdProtectionType, NoReset?: any, Password?: any): void;
        readonly ProtectionType: WdProtectionType;
        Range(Start?: number, End?: number): Range;
        readonly ReadabilityStatistics: ReadabilityStatistics;
        ReadingLayoutSizeX: number;
        ReadingLayoutSizeY: number;
        ReadingModeLayoutFrozen: boolean;
        readonly ReadOnly: boolean;
        ReadOnlyRecommended: boolean;
        RecheckSmartTags(): void;
        Redo(Times?: any): boolean;
        RejectAllRevisions(): void;
        RejectAllRevisionsShown(): void;
        Reload(): void;
        ReloadAs(Encoding: Office.MsoEncoding): void;
        RemoveDateAndTime: boolean;
        RemoveDocumentInformation(RemoveDocInfoType: WdRemoveDocInfoType): void;
        RemoveDocumentWorkspaceHeader(ID: string): void;
        RemoveLockedStyles(): void;
        RemoveNumbers(NumberType?: any): void;
        RemovePersonalInformation: boolean;
        RemoveSmartTags(): void;
        RemoveTheme(): void;
        Repaginate(): void;
        Reply(): void;
        ReplyAll(): void;
        ReplyWithChanges(ShowMessage?: any): void;
        readonly Research: Research;
        ResetFormFields(): void;
        readonly RevisedDocumentTitle: string;
        readonly Revisions: Revisions;
        Route(): void;
        readonly Routed: boolean;
        readonly RoutingSlip: RoutingSlip;
        RunAutoMacro(Which: WdAutoMacros): void;
        RunLetterWizard(LetterContent?: any, WizardMode?: any): void;
        Save(): void;
        SaveAs(
            FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any,
            EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any, Encoding?: any, InsertLineBreaks?: any,
            AllowSubstitutions?: any, LineEnding?: any, AddBiDiMarks?: any): void;
        SaveAs2(
            FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any,
            EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any, Encoding?: any, InsertLineBreaks?: any,
            AllowSubstitutions?: any, LineEnding?: any, AddBiDiMarks?: any, CompatibilityMode?: any): void;
        SaveAs2000(
            FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any,
            EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any): void;
        SaveAsQuickStyleSet(FileName: string): void;
        Saved: boolean;
        SaveEncoding: Office.MsoEncoding;
        readonly SaveFormat: number;
        SaveFormsData: boolean;
        SaveSubsetFonts: boolean;
        sblt(s: string): void;
        readonly Scripts: Office.Scripts;
        readonly Sections: Sections;
        Select(): void;
        SelectAllEditableRanges(EditorID?: any): void;
        SelectContentControlsByTag(Tag: string): ContentControls;
        SelectContentControlsByTitle(Title: string): ContentControls;
        SelectLinkedControls(Node: Office.CustomXMLNode): ContentControls;

        /**
         * @param string [PrefixMapping='']
         * @param boolean [FastSearchSkippingTextNodes=true]
         */
        SelectNodes(XPath: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean): XMLNodes;

        /**
         * @param string [PrefixMapping='']
         * @param boolean [FastSearchSkippingTextNodes=true]
         */
        SelectSingleNode(XPath: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean): XMLNode;

        /** @param Office.CustomXMLPart [Stream=0] */
        SelectUnlinkedControls(Stream?: Office.CustomXMLPart): ContentControls;
        SendFax(Address: string, Subject?: any): void;
        SendFaxOverInternet(Recipients?: any, Subject?: any, ShowMessage?: any): void;
        SendForReview(Recipients?: any, Subject?: any, ShowMessage?: any, IncludeAttachment?: any): void;
        SendMail(): void;
        SendMailer(FileFormat?: any, Priority?: any): void;
        readonly Sentences: Sentences;
        readonly ServerPolicy: Office.ServerPolicy;
        SetCompatibilityMode(Mode: number): void;
        SetDefaultTableStyle(Style: any, SetInTemplate: boolean): void;
        SetLetterContent(LetterContent: any): void;
        SetPasswordEncryptionOptions(PasswordEncryptionProvider: string, PasswordEncryptionAlgorithm: string, PasswordEncryptionKeyLength: number, PasswordEncryptionFileProperties?: any): void;
        readonly Shapes: Shapes;
        readonly SharedWorkspace: Office.SharedWorkspace;
        ShowGrammaticalErrors: boolean;
        ShowRevisions: boolean;
        ShowSpellingErrors: boolean;
        ShowSummary: boolean;
        readonly Signatures: Office.SignatureSet;
        readonly SmartDocument: Office.SmartDocument;
        readonly SmartTags: SmartTags;
        SmartTagsAsXMLProps: boolean;
        SnapToGrid: boolean;
        SnapToShapes: boolean;
        SpellingChecked: boolean;
        readonly SpellingErrors: ProofreadingErrors;
        readonly StoryRanges: StoryRanges;
        readonly Styles: Styles;
        readonly StyleSheets: StyleSheets;
        StyleSortMethod: WdStyleSort;
        readonly Subdocuments: Subdocuments;
        SummaryLength: number;
        SummaryViewMode: WdSummaryMode;
        readonly Sync: Office.Sync;
        readonly Tables: Tables;
        readonly TablesOfAuthorities: TablesOfAuthorities;
        readonly TablesOfAuthoritiesCategories: TablesOfAuthoritiesCategories;
        readonly TablesOfContents: TablesOfContents;
        readonly TablesOfFigures: TablesOfFigures;
        TextEncoding: Office.MsoEncoding;
        TextLineEnding: WdLineEndingType;
        ToggleFormsDesign(): void;
        TrackFormatting: boolean;
        TrackMoves: boolean;
        TrackRevisions: boolean;

        /** @param boolean [DataOnly=true] */
        TransformDocument(Path: string, DataOnly?: boolean): void;
        readonly Type: WdDocumentType;
        Undo(Times?: any): boolean;
        UndoClear(): void;
        UnfreezeLayout(): void;
        Unprotect(Password?: any): void;
        UpdateStyles(): void;
        UpdateStylesOnOpen: boolean;
        UpdateSummaryProperties(): void;
        UseMathDefaults: boolean;
        UserControl: boolean;
        readonly Variables: Variables;
        readonly VBASigned: boolean;
        readonly VBProject: VBIDE.VBProject;
        readonly Versions: Versions;
        ViewCode(): void;
        ViewPropertyBrowser(): void;
        readonly WebOptions: WebOptions;
        WebPagePreview(): void;
        readonly Windows: Windows;
        readonly WordOpenXML: string;
        readonly Words: Words;
        readonly WritePassword: string;
        readonly WriteReserved: boolean;
        XMLHideNamespaces: boolean;
        readonly XMLNodes: XMLNodes;
        XMLSaveDataOnly: boolean;
        XMLSaveThroughXSLT: string;
        readonly XMLSchemaReferences: XMLSchemaReferences;
        readonly XMLSchemaViolations: XMLNodes;
        XMLShowAdvancedErrors: boolean;
        XMLUseXSLTWhenSaving: boolean;
    }

    class Documents {
        private 'Word.Documents_typekey': Documents;
        private constructor();
        Add(Template?: string, NewTemplate?: boolean, DocumentType?: WdNewDocumentType, Visible?: boolean): Document;

        /** @param string [PostID=''] */
        AddBlogDocument(ProviderID: string, PostURL: string, BlogName: string, PostID?: string): Document;
        AddOld(Template?: any, NewTemplate?: any): Document;
        readonly Application: Application;
        CanCheckOut(FileName: string): boolean;
        CheckOut(FileName: string): void;
        Close(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number | string): Document;
        Open(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any,
            NoEncodingDialog?: any, XMLTransform?: any): Document;
        Open2000(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any): Document;
        Open2002(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any, NoEncodingDialog?: any): Document;
        OpenNoRepairDialog(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any,
            NoEncodingDialog?: any, XMLTransform?: any): Document;
        OpenOld(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any): Document;
        readonly Parent: any;
        Save(NoPrompt?: any, OriginalFormat?: any): void;
    }

    class DownBars {
        private 'Word.DownBars_typekey': DownBars;
        private constructor();
        readonly Application: any;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Interior: Interior;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class DropCap {
        private 'Word.DropCap_typekey': DropCap;
        private constructor();
        readonly Application: Application;
        Clear(): void;
        readonly Creator: number;
        DistanceFromText: number;
        Enable(): void;
        FontName: string;
        LinesToDrop: number;
        readonly Parent: any;
        Position: WdDropPosition;
    }

    class DropDown {
        private 'Word.DropDown_typekey': DropDown;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Default: number;
        readonly ListEntries: ListEntries;
        readonly Parent: any;
        readonly Valid: boolean;
        Value: number;
    }

    class DropLines {
        private 'Word.DropLines_typekey': DropLines;
        private constructor();
        readonly Application: any;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): void;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): void;
    }

    class Editor {
        private 'Word.Editor_typekey': Editor;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        DeleteAll(): void;
        readonly ID: string;
        readonly Name: string;
        readonly NextRange: Range;
        readonly Parent: any;
        readonly Range: Range;
        SelectAll(): void;
    }

    class Editors {
        private 'Word.Editors_typekey': Editors;
        private constructor();
        Add(EditorID: any): Editor;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Editor;
        readonly Parent: any;
    }

    class Email {
        private 'Word.Email_typekey': Email;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly CurrentEmailAuthor: EmailAuthor;
        readonly Parent: any;
    }

    class EmailAuthor {
        private 'Word.EmailAuthor_typekey': EmailAuthor;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Parent: any;
        readonly Style: Style;
    }

    class EmailOptions {
        private 'Word.EmailOptions_typekey': EmailOptions;
        private constructor();
        readonly Application: Application;
        AutoFormatAsYouTypeApplyBorders: boolean;
        AutoFormatAsYouTypeApplyBulletedLists: boolean;
        AutoFormatAsYouTypeApplyClosings: boolean;
        AutoFormatAsYouTypeApplyDates: boolean;
        AutoFormatAsYouTypeApplyFirstIndents: boolean;
        AutoFormatAsYouTypeApplyHeadings: boolean;
        AutoFormatAsYouTypeApplyNumberedLists: boolean;
        AutoFormatAsYouTypeApplyTables: boolean;
        AutoFormatAsYouTypeAutoLetterWizard: boolean;
        AutoFormatAsYouTypeDefineStyles: boolean;
        AutoFormatAsYouTypeDeleteAutoSpaces: boolean;
        AutoFormatAsYouTypeFormatListItemBeginning: boolean;
        AutoFormatAsYouTypeInsertClosings: boolean;
        AutoFormatAsYouTypeInsertOvers: boolean;
        AutoFormatAsYouTypeMatchParentheses: boolean;
        AutoFormatAsYouTypeReplaceFarEastDashes: boolean;
        AutoFormatAsYouTypeReplaceFractions: boolean;
        AutoFormatAsYouTypeReplaceHyperlinks: boolean;
        AutoFormatAsYouTypeReplaceOrdinals: boolean;
        AutoFormatAsYouTypeReplacePlainTextEmphasis: boolean;
        AutoFormatAsYouTypeReplaceQuotes: boolean;
        AutoFormatAsYouTypeReplaceSymbols: boolean;
        readonly ComposeStyle: Style;
        readonly Creator: number;
        readonly Dummy1: boolean;
        readonly Dummy2: boolean;
        Dummy3(): void;
        readonly EmailSignature: EmailSignature;
        EmbedSmartTag: boolean;
        HTMLFidelity: WdEmailHTMLFidelity;
        MarkComments: boolean;
        MarkCommentsWith: string;
        NewColorOnReply: boolean;
        readonly Parent: any;
        readonly PlainTextStyle: Style;
        RelyOnCSS: boolean;
        readonly ReplyStyle: Style;
        TabIndentKey: boolean;
        ThemeName: string;
        UseThemeStyle: boolean;
        UseThemeStyleOnReply: boolean;
    }

    class EmailSignature {
        private 'Word.EmailSignature_typekey': EmailSignature;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly EmailSignatureEntries: EmailSignatureEntries;
        NewMessageSignature: string;
        readonly Parent: any;
        ReplyMessageSignature: string;
    }

    class EmailSignatureEntries {
        private 'Word.EmailSignatureEntries_typekey': EmailSignatureEntries;
        private constructor();
        Add(Name: string, Range: Range): EmailSignatureEntry;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): EmailSignatureEntry;
        readonly Parent: any;
    }

    class EmailSignatureEntry {
        private 'Word.EmailSignatureEntry_typekey': EmailSignatureEntry;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        Name: string;
        readonly Parent: any;
    }

    class Endnote {
        private 'Word.Endnote_typekey': Endnote;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Parent: any;
        readonly Range: Range;
        readonly Reference: Range;
    }

    class EndnoteOptions {
        private 'Word.EndnoteOptions_typekey': EndnoteOptions;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Location: WdEndnoteLocation;
        NumberingRule: WdNumberingRule;
        NumberStyle: WdNoteNumberStyle;
        readonly Parent: any;
        StartingNumber: number;
    }

    class Endnotes {
        private 'Word.Endnotes_typekey': Endnotes;
        private constructor();
        Add(Range: Range, Reference?: any, Text?: any): Endnote;
        readonly Application: Application;
        readonly ContinuationNotice: Range;
        readonly ContinuationSeparator: Range;
        Convert(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Endnote;
        Location: WdEndnoteLocation;
        NumberingRule: WdNumberingRule;
        NumberStyle: WdNoteNumberStyle;
        readonly Parent: any;
        ResetContinuationNotice(): void;
        ResetContinuationSeparator(): void;
        ResetSeparator(): void;
        readonly Separator: Range;
        StartingNumber: number;
        SwapWithFootnotes(): void;
    }

    class Envelope {
        private 'Word.Envelope_typekey': Envelope;
        private constructor();
        readonly Address: Range;
        AddressFromLeft: number;
        AddressFromTop: number;
        readonly AddressStyle: Style;
        readonly Application: Application;
        readonly Creator: number;
        DefaultFaceUp: boolean;
        DefaultHeight: number;
        DefaultOmitReturnAddress: boolean;
        DefaultOrientation: WdEnvelopeOrientation;
        DefaultPrintBarCode: boolean;
        DefaultPrintFIMA: boolean;
        DefaultSize: string;
        DefaultWidth: number;
        FeedSource: WdPaperTray;
        Insert(
            ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any,
            Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any,
            DefaultFaceUp?: any, DefaultOrientation?: any, PrintEPostage?: any, Vertical?: any, RecipientNamefromLeft?: any, RecipientNamefromTop?: any,
            RecipientPostalfromLeft?: any, RecipientPostalfromTop?: any, SenderNamefromLeft?: any, SenderNamefromTop?: any, SenderPostalfromLeft?: any, SenderPostalfromTop?: any): void;
        Insert2000(
            ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any,
            Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any,
            DefaultFaceUp?: any, DefaultOrientation?: any): void;
        Options(): void;
        readonly Parent: any;
        PrintOut(
            ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any,
            Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any,
            DefaultFaceUp?: any, DefaultOrientation?: any, PrintEPostage?: any, Vertical?: any, RecipientNamefromLeft?: any, RecipientNamefromTop?: any,
            RecipientPostalfromLeft?: any, RecipientPostalfromTop?: any, SenderNamefromLeft?: any, SenderNamefromTop?: any, SenderPostalfromLeft?: any, SenderPostalfromTop?: any): void;
        PrintOut2000(
            ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any,
            Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any,
            DefaultFaceUp?: any, DefaultOrientation?: any): void;
        RecipientNamefromLeft: number;
        RecipientNamefromTop: number;
        RecipientPostalfromLeft: number;
        RecipientPostalfromTop: number;
        readonly ReturnAddress: Range;
        ReturnAddressFromLeft: number;
        ReturnAddressFromTop: number;
        readonly ReturnAddressStyle: Style;
        SenderNamefromLeft: number;
        SenderNamefromTop: number;
        SenderPostalfromLeft: number;
        SenderPostalfromTop: number;
        UpdateDocument(): void;
        Vertical: boolean;
    }

    class Field {
        private 'Word.Field_typekey': Field;
        private constructor();
        readonly Application: Application;
        Code: Range;
        Copy(): void;
        readonly Creator: number;
        Cut(): void;
        Data: string;
        Delete(): void;
        DoClick(): void;
        readonly Index: number;
        readonly InlineShape: InlineShape;
        readonly Kind: WdFieldKind;
        readonly LinkFormat: LinkFormat;
        Locked: boolean;
        readonly Next: Field;
        readonly OLEFormat: OLEFormat;
        readonly Parent: any;
        readonly Previous: Field;
        Result: Range;
        Select(): void;
        ShowCodes: boolean;
        readonly Type: WdFieldType;
        Unlink(): void;
        Update(): boolean;
        UpdateSource(): void;
    }

    class Fields {
        private 'Word.Fields_typekey': Fields;
        private constructor();
        Add(Range: Range, Type?: any, Text?: any, PreserveFormatting?: any): Field;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Field;
        Locked: number;
        readonly Parent: any;
        ToggleShowCodes(): void;
        Unlink(): void;
        Update(): number;
        UpdateSource(): void;
    }

    class FileConverter {
        private 'Word.FileConverter_typekey': FileConverter;
        private constructor();
        readonly Application: Application;
        readonly CanOpen: boolean;
        readonly CanSave: boolean;
        readonly ClassName: string;
        readonly Creator: number;
        readonly Extensions: string;
        readonly FormatName: string;
        readonly Name: string;
        readonly OpenFormat: number;
        readonly Parent: any;
        readonly Path: string;
        readonly SaveFormat: number;
    }

    class FileConverters {
        private 'Word.FileConverters_typekey': FileConverters;
        private constructor();
        readonly Application: Application;
        ConvertMacWordChevrons: WdChevronConvertRule;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): FileConverter;
        readonly Parent: any;
    }

    class FillFormat {
        private 'Word.FillFormat_typekey': FillFormat;
        private constructor();
        readonly Application: Application;
        readonly BackColor: ColorFormat;
        Background(): void;
        readonly Creator: number;
        readonly ForeColor: ColorFormat;
        GradientAngle: number;
        readonly GradientColorType: Office.MsoGradientColorType;
        readonly GradientDegree: number;
        readonly GradientStops: Office.GradientStops;
        readonly GradientStyle: Office.MsoGradientStyle;
        readonly GradientVariant: number;
        OneColorGradient(Style: Office.MsoGradientStyle, Variant: number, Degree: number): void;
        readonly Parent: any;
        readonly Pattern: Office.MsoPatternType;
        Patterned(Pattern: Office.MsoPatternType): void;
        readonly PictureEffects: Office.PictureEffects;
        PresetGradient(Style: Office.MsoGradientStyle, Variant: number, PresetGradientType: Office.MsoPresetGradientType): void;
        readonly PresetGradientType: Office.MsoPresetGradientType;
        readonly PresetTexture: Office.MsoPresetTexture;
        PresetTextured(PresetTexture: Office.MsoPresetTexture): void;
        RotateWithObject: Office.MsoTriState;
        Solid(): void;
        TextureAlignment: Office.MsoTextureAlignment;
        TextureHorizontalScale: number;
        readonly TextureName: string;
        TextureOffsetX: number;
        TextureOffsetY: number;
        TextureTile: Office.MsoTriState;
        readonly TextureType: Office.MsoTextureType;
        TextureVerticalScale: number;
        Transparency: number;
        TwoColorGradient(Style: Office.MsoGradientStyle, Variant: number): void;
        readonly Type: Office.MsoFillType;
        UserPicture(PictureFile: string): void;
        UserTextured(TextureFile: string): void;
        Visible: Office.MsoTriState;
    }

    class Find<TParent = Range | Selection> {
        private 'Word.Find_typekey': Find;
        private constructor();
        readonly Application: Application;
        ClearAllFuzzyOptions(): void;
        ClearFormatting(): void;
        ClearHitHighlight(): boolean;
        CorrectHangulEndings: boolean;
        readonly Creator: number;
        Execute(
            FindText?: string, MatchCase?: boolean, MatchWholeWord?: boolean, MatchWildcards?: boolean, MatchSoundsLike?: boolean, MatchAllWordForms?: boolean, Forward?: boolean, Wrap?: WdFindWrap,
            Format?: boolean, ReplaceWith?: string, Replace?: WdReplace, MatchKashida?: boolean, MatchDiacritics?: boolean, MatchAlefHamza?: boolean, MatchControl?: boolean): boolean;
        Execute2007(
            FindText?: string, MatchCase?: boolean, MatchWholeWord?: boolean, MatchWildcards?: boolean, MatchSoundsLike?: boolean, MatchAllWordForms?: boolean, Forward?: boolean, Wrap?: WdFindWrap,
            Format?: boolean, ReplaceWith?: string, Replace?: WdReplace, MatchKashida?: boolean, MatchDiacritics?: boolean, MatchAlefHamza?: boolean, MatchControl?: boolean, MatchPrefix?: boolean,
            MatchSuffix?: boolean, MatchPhrase?: boolean, IgnoreSpace?: boolean, IgnorePunct?: boolean): boolean;
        ExecuteOld(
            FindText?: string, MatchCase?: boolean, MatchWholeWord?: boolean, MatchWildcards?: boolean, MatchSoundsLike?: boolean, MatchAllWordForms?: boolean, Forward?: boolean, Wrap?: WdFindWrap,
            Format?: boolean, ReplaceWith?: string, Replace?: WdReplace): boolean;
        Font: Font;
        Format: boolean;
        Forward: boolean;
        readonly Found: boolean;
        readonly Frame: Frame;
        HanjaPhoneticHangul: boolean;
        Highlight: number;
        HitHighlight(
            FindText: any, HighlightColor?: any, TextColor?: any, MatchCase?: any, MatchWholeWord?: any, MatchPrefix?: any, MatchSuffix?: any, MatchPhrase?: any,
            MatchWildcards?: any, MatchSoundsLike?: any, MatchAllWordForms?: any, MatchByte?: any, MatchFuzzy?: any, MatchKashida?: any, MatchDiacritics?: any,
            MatchAlefHamza?: any, MatchControl?: any, IgnoreSpace?: any, IgnorePunct?: any, HanjaPhoneticHangul?: any): boolean;
        IgnorePunct: boolean;
        IgnoreSpace: boolean;
        LanguageID: WdLanguageID;
        LanguageIDFarEast: WdLanguageID;
        LanguageIDOther: WdLanguageID;
        MatchAlefHamza: boolean;
        MatchAllWordForms: boolean;
        MatchByte: boolean;
        MatchCase: boolean;
        MatchControl: boolean;
        MatchDiacritics: boolean;
        MatchFuzzy: boolean;
        MatchKashida: boolean;
        MatchPhrase: boolean;
        MatchPrefix: boolean;
        MatchSoundsLike: boolean;
        MatchSuffix: boolean;
        MatchWholeWord: boolean;
        MatchWildcards: boolean;
        NoProofing: number;
        ParagraphFormat: ParagraphFormat;
        readonly Parent: TParent;
        readonly Replacement: Replacement;
        SetAllFuzzyOptions(): void;
        Style: any;
        Text: string;
        Wrap: WdFindWrap;
    }

    class FirstLetterException {
        private 'Word.FirstLetterException_typekey': FirstLetterException;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class FirstLetterExceptions {
        private 'Word.FirstLetterExceptions_typekey': FirstLetterExceptions;
        private constructor();
        Add(Name: string): FirstLetterException;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): FirstLetterException;
        readonly Parent: any;
    }

    class Floor {
        private 'Word.Floor_typekey': Floor;
        private constructor();
        readonly Application: any;
        readonly Border: ChartBorder;
        ClearFormats(): any;
        readonly Creator: number;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Interior: Interior;
        readonly Name: string;
        readonly Parent: any;
        Paste(): void;
        PictureType: any;
        Select(): any;
        Thickness: number;
    }

    class Font {
        private 'Word.Font_typekey': Font;
        private constructor();
        AllCaps: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        Animation: WdAnimation;
        readonly Application: Application;
        Bold: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        BoldBi: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        Borders: Borders;
        Color: WdColor;
        ColorIndex: WdColorIndex;
        ColorIndexBi: WdColorIndex;
        ContextualAlternates: number;
        readonly Creator: number;
        DiacriticColor: WdColor;
        DisableCharacterSpaceGrid: boolean;
        DoubleStrikeThrough: number;
        readonly Duplicate: Font;
        Emboss: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        EmphasisMark: WdEmphasisMark;
        Engrave: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        Fill: FillFormat;
        Glow: GlowFormat;
        Grow(): void;
        Hidden: number;
        Italic: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        ItalicBi: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        Kerning: number;
        Ligatures: WdLigatures;
        Line: LineFormat;
        Name: string;
        NameAscii: string;
        NameBi: string;
        NameFarEast: string;
        NameOther: string;
        NumberForm: WdNumberForm;
        NumberSpacing: WdNumberSpacing;
        Outline: number;
        readonly Parent: any;
        Position: number;
        Reflection: ReflectionFormat;
        Reset(): void;
        Scaling: number;
        SetAsTemplateDefault(): void;
        readonly Shading: Shading;
        Shadow: number;
        Shrink(): void;
        Size: number;
        SizeBi: number;
        SmallCaps: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        Spacing: number;
        StrikeThrough: number;
        StylisticSet: WdStylisticSet;
        Subscript: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        Superscript: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        readonly TextColor: ColorFormat;
        TextShadow: ShadowFormat;
        ThreeD: ThreeDFormat;
        Underline: WdUnderline;
        UnderlineColor: WdColor;
    }

    class FontNames {
        private 'Word.FontNames_typekey': FontNames;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): string;
        readonly Parent: any;
    }

    class Footnote {
        private 'Word.Footnote_typekey': Footnote;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Parent: any;
        readonly Range: Range;
        readonly Reference: Range;
    }

    class FootnoteOptions {
        private 'Word.FootnoteOptions_typekey': FootnoteOptions;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Location: WdFootnoteLocation;
        NumberingRule: WdNumberingRule;
        NumberStyle: WdNoteNumberStyle;
        readonly Parent: any;
        StartingNumber: number;
    }

    class Footnotes {
        private 'Word.Footnotes_typekey': Footnotes;
        private constructor();
        Add(Range: Range, Reference?: any, Text?: any): Footnote;
        readonly Application: Application;
        readonly ContinuationNotice: Range;
        readonly ContinuationSeparator: Range;
        Convert(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Footnote;
        Location: WdFootnoteLocation;
        NumberingRule: WdNumberingRule;
        NumberStyle: WdNoteNumberStyle;
        readonly Parent: any;
        ResetContinuationNotice(): void;
        ResetContinuationSeparator(): void;
        ResetSeparator(): void;
        readonly Separator: Range;
        StartingNumber: number;
        SwapWithEndnotes(): void;
    }

    class FormField {
        private 'Word.FormField_typekey': FormField;
        private constructor();
        readonly Application: Application;
        CalculateOnExit: boolean;
        readonly CheckBox: CheckBox;
        Copy(): void;
        readonly Creator: number;
        Cut(): void;
        Delete(): void;
        readonly DropDown: DropDown;
        Enabled: boolean;
        EntryMacro: string;
        ExitMacro: string;
        HelpText: string;
        Name: string;
        readonly Next: FormField;
        OwnHelp: boolean;
        OwnStatus: boolean;
        readonly Parent: any;
        readonly Previous: FormField;
        readonly Range: Range;
        Result: string;
        Select(): void;
        StatusText: string;
        readonly TextInput: TextInput;
        readonly Type: WdFieldType;
    }

    class FormFields {
        private 'Word.FormFields_typekey': FormFields;
        private constructor();
        Add(Range: Range, Type: WdFieldType): FormField;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): FormField;
        readonly Parent: any;
        Shaded: boolean;
    }

    class Frame {
        private 'Word.Frame_typekey': Frame;
        private constructor();
        readonly Application: Application;
        Borders: Borders;
        Copy(): void;
        readonly Creator: number;
        Cut(): void;
        Delete(): void;
        Height: number;
        HeightRule: WdFrameSizeRule;
        HorizontalDistanceFromText: number;
        HorizontalPosition: number;
        LockAnchor: boolean;
        readonly Parent: any;
        readonly Range: Range;
        RelativeHorizontalPosition: WdRelativeHorizontalPosition;
        RelativeVerticalPosition: WdRelativeVerticalPosition;
        Select(): void;
        readonly Shading: Shading;
        TextWrap: boolean;
        VerticalDistanceFromText: number;
        VerticalPosition: number;
        Width: number;
        WidthRule: WdFrameSizeRule;
    }

    class Frames {
        private 'Word.Frames_typekey': Frames;
        private constructor();
        Add(Range: Range): Frame;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Delete(): void;
        Item(Index: number): Frame;
        readonly Parent: any;
    }

    class Frameset {
        private 'Word.Frameset_typekey': Frameset;
        private constructor();
        AddNewFrame(Where: WdFramesetNewFrameLocation): Frameset;
        readonly Application: Application;
        readonly ChildFramesetCount: number;
        ChildFramesetItem(Index: number): Frameset;
        readonly Creator: number;
        Delete(): void;
        FrameDefaultURL: string;
        FrameDisplayBorders: boolean;
        FrameLinkToFile: boolean;
        FrameName: string;
        FrameResizable: boolean;
        FrameScrollbarType: WdScrollbarType;
        FramesetBorderColor: WdColor;
        FramesetBorderWidth: number;
        Height: number;
        HeightType: WdFramesetSizeType;
        readonly Parent: any;
        readonly ParentFrameset: Frameset;
        readonly Type: WdFramesetType;
        Width: number;
        WidthType: WdFramesetSizeType;
    }

    class FreeformBuilder {
        private 'Word.FreeformBuilder_typekey': FreeformBuilder;
        private constructor();

        /**
         * @param number [X2=0]
         * @param number [Y2=0]
         * @param number [X3=0]
         * @param number [Y3=0]
         */
        AddNodes(SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        readonly Application: Application;
        ConvertToShape(Anchor?: any): Shape;
        readonly Creator: number;
        readonly Parent: any;
    }

    class Global {
        private 'Word.Global_typekey': Global;
        private constructor();
        readonly ActiveDocument: Document;
        ActivePrinter: string;
        readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        readonly ActiveWindow: Window;
        readonly AddIns: AddIns;
        readonly AnswerWizard: Office.AnswerWizard;
        readonly Application: Application;
        readonly Assistant: Office.Assistant;
        readonly AutoCaptions: AutoCaptions;
        readonly AutoCorrect: AutoCorrect;
        readonly AutoCorrectEmail: AutoCorrect;
        BuildKeyCode(Arg1: WdKey, Arg2?: any, Arg3?: any, Arg4?: any): number;
        readonly CaptionLabels: CaptionLabels;
        CentimetersToPoints(Centimeters: number): number;
        ChangeFileOpenDirectory(Path: string): void;
        CheckSpelling(
            Word: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any,
            CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): boolean;
        CleanString(String: string): string;
        readonly CommandBars: Office.CommandBars;
        readonly Creator: number;
        readonly CustomDictionaries: Dictionaries;
        CustomizationContext: any;
        DDEExecute(Channel: number, Command: string): void;
        DDEInitiate(App: string, Topic: string): number;
        DDEPoke(Channel: number, Item: string, Data: string): void;
        DDERequest(Channel: number, Item: string): string;
        DDETerminate(Channel: number): void;
        DDETerminateAll(): void;
        readonly Dialogs: Dialogs;
        readonly Documents: Documents;
        readonly FileConverters: FileConverters;
        FindKey(KeyCode: number, KeyCode2?: any): KeyBinding;
        readonly FontNames: FontNames;
        GetSpellingSuggestions(
            Word: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any,
            CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any,
            CustomDictionary10?: any): SpellingSuggestions;
        readonly HangulHanjaDictionaries: HangulHanjaConversionDictionaries;
        Help(HelpType: any): void;
        InchesToPoints(Inches: number): number;
        IsObjectValid(Object: any): boolean;
        readonly IsSandboxed: boolean;
        readonly KeyBindings: KeyBindings;
        KeysBoundTo(KeyCategory: WdKeyCategory, Command: string, CommandParameter?: any): KeysBoundTo;
        KeyString(KeyCode: number, KeyCode2?: any): string;
        readonly LandscapeFontNames: FontNames;
        readonly Languages: Languages;
        readonly LanguageSettings: Office.LanguageSettings;
        LinesToPoints(Lines: number): number;
        readonly ListGalleries: ListGalleries;
        readonly MacroContainer: any;
        MillimetersToPoints(Millimeters: number): number;
        readonly Name: string;
        NewWindow(): Window;
        readonly NormalTemplate: Template;
        readonly Options: Options;
        readonly Parent: any;
        PicasToPoints(Picas: number): number;
        PixelsToPoints(Pixels: number, fVertical?: any): number;
        PointsToCentimeters(Points: number): number;
        PointsToInches(Points: number): number;
        PointsToLines(Points: number): number;
        PointsToMillimeters(Points: number): number;
        PointsToPicas(Points: number): number;
        PointsToPixels(Points: number, fVertical?: any): number;
        readonly PortraitFontNames: FontNames;
        PrintPreview: boolean;
        readonly ProtectedViewWindows: ProtectedViewWindows;
        readonly RecentFiles: RecentFiles;
        Repeat(Times?: any): boolean;
        readonly Selection: Selection;
        ShowVisualBasicEditor: boolean;
        readonly StatusBar: string;
        SynonymInfo(Word: string, LanguageID?: any): SynonymInfo;
        readonly System: System;
        readonly Tasks: Tasks;
        readonly Templates: Templates;
        readonly VBE: VBIDE.VBE;
        readonly Windows: Windows;
        readonly WordBasic: any;
    }

    class GlowFormat {
        private 'Word.GlowFormat_typekey': GlowFormat;
        private constructor();
        readonly Application: Application;
        readonly Color: ColorFormat;
        readonly Creator: number;
        readonly Parent: any;
        Radius: number;
        Transparency: number;
    }

    class GroupShapes {
        private 'Word.GroupShapes_typekey': GroupShapes;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Shape;
        readonly Parent: any;
        Range(Index: any): ShapeRange;
    }

    class HangulAndAlphabetException {
        private 'Word.HangulAndAlphabetException_typekey': HangulAndAlphabetException;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class HangulAndAlphabetExceptions {
        private 'Word.HangulAndAlphabetExceptions_typekey': HangulAndAlphabetExceptions;
        private constructor();
        Add(Name: string): HangulAndAlphabetException;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): HangulAndAlphabetException;
        readonly Parent: any;
    }

    class HangulHanjaConversionDictionaries {
        private 'Word.HangulHanjaConversionDictionaries_typekey': HangulHanjaConversionDictionaries;
        private constructor();
        ActiveCustomDictionary: Dictionary;
        Add(FileName: string): Dictionary;
        readonly Application: Application;
        readonly BuiltinDictionary: Dictionary;
        ClearAll(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Dictionary;
        readonly Maximum: number;
        readonly Parent: any;
    }

    class HeaderFooter {
        private 'Word.HeaderFooter_typekey': HeaderFooter;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Exists: boolean;
        readonly Index: WdHeaderFooterIndex;
        readonly IsHeader: boolean;
        LinkToPrevious: boolean;
        readonly PageNumbers: PageNumbers;
        readonly Parent: any;
        readonly Range: Range;
        readonly Shapes: Shapes;
    }

    class HeadersFooters {
        private 'Word.HeadersFooters_typekey': HeadersFooters;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: WdHeaderFooterIndex): HeaderFooter;
        readonly Parent: any;
    }

    class HeadingStyle {
        private 'Word.HeadingStyle_typekey': HeadingStyle;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        Level: number;
        readonly Parent: any;
        Style: any;
    }

    class HeadingStyles {
        private 'Word.HeadingStyles_typekey': HeadingStyles;
        private constructor();
        Add(Style: any, Level: number): HeadingStyle;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): HeadingStyle;
        readonly Parent: any;
    }

    class HiLoLines {
        private 'Word.HiLoLines_typekey': HiLoLines;
        private constructor();
        readonly Application: any;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): void;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): void;
    }

    class HorizontalLineFormat {
        private 'Word.HorizontalLineFormat_typekey': HorizontalLineFormat;
        private constructor();
        Alignment: WdHorizontalLineAlignment;
        readonly Application: Application;
        readonly Creator: number;
        NoShade: boolean;
        readonly Parent: any;
        PercentWidth: number;
        WidthType: WdHorizontalLineWidthType;
    }

    class HTMLDivision {
        private 'Word.HTMLDivision_typekey': HTMLDivision;
        private constructor();
        readonly Application: Application;
        readonly Borders: Borders;
        readonly Creator: number;
        Delete(): void;
        HTMLDivisionParent(LevelsUp?: any): HTMLDivision;
        readonly HTMLDivisions: HTMLDivisions;
        LeftIndent: number;
        readonly Parent: any;
        readonly Range: Range;
        RightIndent: number;
        SpaceAfter: number;
        SpaceBefore: number;
    }

    class HTMLDivisions {
        private 'Word.HTMLDivisions_typekey': HTMLDivisions;
        private constructor();
        Add(Range?: any): HTMLDivision;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): HTMLDivision;
        readonly NestingLevel: number;
        readonly Parent: any;
    }

    class Hyperlink {
        private 'Word.Hyperlink_typekey': Hyperlink;
        private constructor();
        Address: string;
        readonly AddressOld: string;
        AddToFavorites(): void;
        readonly Application: Application;
        CreateNewDocument(FileName: string, EditNow: boolean, Overwrite: boolean): void;
        readonly Creator: number;
        Delete(): void;
        EmailSubject: string;
        readonly ExtraInfoRequired: boolean;
        Follow(NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;
        readonly Name: string;
        readonly Parent: any;
        readonly Range: Range;
        ScreenTip: string;
        readonly Shape: Shape;
        SubAddress: string;
        readonly SubAddressOld: string;
        Target: string;
        TextToDisplay: string;
        readonly Type: Office.MsoHyperlinkType;
    }

    class Hyperlinks {
        private 'Word.Hyperlinks_typekey': Hyperlinks;
        private constructor();
        _Add(Anchor: any, Address?: any, SubAddress?: any): Hyperlink;
        Add(Anchor: any, Address?: any, SubAddress?: any, ScreenTip?: any, TextToDisplay?: any, Target?: any): Hyperlink;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Hyperlink;
        readonly Parent: any;
    }

    class Index {
        private 'Word.Index_typekey': Index;
        private constructor();
        AccentedLetters: boolean;
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        Filter: WdIndexFilter;
        HeadingSeparator: WdHeadingSeparator;
        IndexLanguage: WdLanguageID;
        NumberOfColumns: number;
        readonly Parent: any;
        readonly Range: Range;
        RightAlignPageNumbers: boolean;
        SortBy: WdIndexSortBy;
        TabLeader: WdTabLeader;
        Type: WdIndexType;
        Update(): void;
    }

    class Indexes {
        private 'Word.Indexes_typekey': Indexes;
        private constructor();
        Add(Range: Range, HeadingSeparator?: any, RightAlignPageNumbers?: any, Type?: any, NumberOfColumns?: any, AccentedLetters?: any, SortBy?: any, IndexLanguage?: any): Index;
        AddOld(Range: Range, HeadingSeparator?: any, RightAlignPageNumbers?: any, Type?: any, NumberOfColumns?: any, AccentedLetters?: any): Index;
        readonly Application: Application;
        AutoMarkEntries(ConcordanceFileName: string): void;
        readonly Count: number;
        readonly Creator: number;
        Format: WdIndexFormat;
        Item(Index: number): Index;
        MarkAllEntries(Range: Range, Entry?: any, EntryAutoText?: any, CrossReference?: any, CrossReferenceAutoText?: any, BookmarkName?: any, Bold?: any, Italic?: any): void;
        MarkEntry(Range: Range, Entry?: any, EntryAutoText?: any, CrossReference?: any, CrossReferenceAutoText?: any, BookmarkName?: any, Bold?: any, Italic?: any, Reading?: any): Field;
        readonly Parent: any;
    }

    class InlineShape {
        private 'Word.InlineShape_typekey': InlineShape;
        private constructor();
        Activate(): void;
        AlternativeText: string;
        readonly AnchorID: number;
        readonly Application: Application;
        Borders: Borders;
        readonly Chart: Chart;
        ConvertToShape(): Shape;
        readonly Creator: number;
        Delete(): void;
        readonly EditID: number;
        readonly Field: Field;
        readonly Fill: FillFormat;
        readonly Glow: GlowFormat;
        readonly GroupItems: GroupShapes;
        readonly HasChart: Office.MsoTriState;
        readonly HasSmartArt: Office.MsoTriState;
        Height: number;
        readonly HorizontalLineFormat: HorizontalLineFormat;
        readonly Hyperlink: Hyperlink;
        readonly IsPictureBullet: boolean;
        readonly Line: LineFormat;
        readonly LinkFormat: LinkFormat;
        LockAspectRatio: Office.MsoTriState;
        readonly OLEFormat: OLEFormat;
        readonly OWSAnchor: number;
        readonly Parent: any;
        PictureFormat: PictureFormat;
        readonly Range: Range;
        readonly Reflection: ReflectionFormat;
        Reset(): void;
        ScaleHeight: number;
        ScaleWidth: number;
        readonly Script: Office.Script;
        Select(): void;
        readonly Shadow: ShadowFormat;
        readonly SmartArt: Office.SmartArt;
        readonly SoftEdge: SoftEdgeFormat;
        TextEffect: TextEffectFormat;
        Title: string;
        readonly Type: WdInlineShapeType;
        Width: number;
    }

    class InlineShapes {
        private 'Word.InlineShapes_typekey': InlineShapes;
        private constructor();

        /** @param Office.XlChartType [Type=-1] */
        AddChart(Type?: Office.XlChartType, Range?: any): InlineShape;
        AddHorizontalLine(FileName: string, Range?: any): InlineShape;
        AddHorizontalLineStandard(Range?: any): InlineShape;
        AddOLEControl(ClassType?: any, Range?: any): InlineShape;
        AddOLEObject(ClassType?: any, FileName?: any, LinkToFile?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Range?: any): InlineShape;
        AddPicture(FileName: string, LinkToFile?: any, SaveWithDocument?: any, Range?: any): InlineShape;
        AddPictureBullet(FileName: string, Range?: any): InlineShape;
        AddSmartArt(Layout: Office.SmartArtLayout, Range?: any): InlineShape;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): InlineShape;
        New(Range: Range): InlineShape;
        readonly Parent: any;
    }

    class Interior {
        private 'Word.Interior_typekey': Interior;
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

    class KeyBinding {
        private 'Word.KeyBinding_typekey': KeyBinding;
        private constructor();
        readonly Application: Application;
        Clear(): void;
        readonly Command: string;
        readonly CommandParameter: string;
        readonly Context: any;
        readonly Creator: number;
        Disable(): void;
        Execute(): void;
        readonly KeyCategory: WdKeyCategory;
        readonly KeyCode: number;
        readonly KeyCode2: number;
        readonly KeyString: string;
        readonly Parent: any;
        readonly Protected: boolean;
        Rebind(KeyCategory: WdKeyCategory, Command: string, CommandParameter?: any): void;
    }

    class KeyBindings {
        private 'Word.KeyBindings_typekey': KeyBindings;
        private constructor();
        Add(KeyCategory: WdKeyCategory, Command: string, KeyCode: number, KeyCode2?: any, CommandParameter?: any): KeyBinding;
        readonly Application: Application;
        ClearAll(): void;
        readonly Context: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): KeyBinding;
        Key(KeyCode: number, KeyCode2?: any): KeyBinding;
        readonly Parent: any;
    }

    class KeysBoundTo {
        private 'Word.KeysBoundTo_typekey': KeysBoundTo;
        private constructor();
        readonly Application: Application;
        readonly Command: string;
        readonly CommandParameter: string;
        readonly Context: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): KeyBinding;
        Key(KeyCode: number, KeyCode2?: any): KeyBinding;
        readonly KeyCategory: WdKeyCategory;
        readonly Parent: any;
    }

    class Language {
        private 'Word.Language_typekey': Language;
        private constructor();
        readonly ActiveGrammarDictionary: Dictionary;
        readonly ActiveHyphenationDictionary: Dictionary;
        readonly ActiveSpellingDictionary: Dictionary;
        readonly ActiveThesaurusDictionary: Dictionary;
        readonly Application: Application;
        readonly Creator: number;
        DefaultWritingStyle: string;
        readonly ID: WdLanguageID;
        readonly Name: string;
        readonly NameLocal: string;
        readonly Parent: any;
        SpellingDictionaryType: WdDictionaryType;
        readonly WritingStyleList: any;
    }

    class Languages {
        private 'Word.Languages_typekey': Languages;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Language;
        readonly Parent: any;
    }

    class Legend {
        private 'Word.Legend_typekey': Legend;
        private constructor();
        readonly Application: any;
        AutoScaleFont: any;
        readonly Border: ChartBorder;
        Clear(): any;
        readonly Creator: number;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: ChartFont;
        readonly Format: ChartFormat;
        Height: number;
        IncludeInLayout: boolean;
        readonly Interior: Interior;
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

    class LetterContent {
        private 'Word.LetterContent_typekey': LetterContent;
        private constructor();
        readonly Application: Application;
        AttentionLine: string;
        CCList: string;
        Closing: string;
        readonly Creator: number;
        DateFormat: string;
        readonly Duplicate: LetterContent;
        EnclosureNumber: number;
        IncludeHeaderFooter: boolean;
        InfoBlock: boolean;
        Letterhead: boolean;
        LetterheadLocation: WdLetterheadLocation;
        LetterheadSize: number;
        LetterStyle: WdLetterStyle;
        MailingInstructions: string;
        PageDesign: string;
        readonly Parent: any;
        RecipientAddress: string;
        RecipientCode: string;
        RecipientGender: WdSalutationGender;
        RecipientName: string;
        RecipientReference: string;
        ReturnAddress: string;
        ReturnAddressShortForm: string;
        Salutation: string;
        SalutationType: WdSalutationType;
        SenderCity: string;
        SenderCode: string;
        SenderCompany: string;
        SenderGender: WdSalutationGender;
        SenderInitials: string;
        SenderJobTitle: string;
        SenderName: string;
        SenderReference: string;
        Subject: string;
    }

    class Line {
        private 'Word.Line_typekey': Line;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Height: number;
        readonly Left: number;
        readonly LineType: WdLineType;
        readonly Parent: any;
        readonly Range: Range;
        readonly Rectangles: Rectangles;
        readonly Top: number;
        readonly Width: number;
    }

    class LineFormat {
        private 'Word.LineFormat_typekey': LineFormat;
        private constructor();
        readonly Application: Application;
        readonly BackColor: ColorFormat;
        BeginArrowheadLength: Office.MsoArrowheadLength;
        BeginArrowheadStyle: Office.MsoArrowheadStyle;
        BeginArrowheadWidth: Office.MsoArrowheadWidth;
        readonly Creator: number;
        DashStyle: Office.MsoLineDashStyle;
        EndArrowheadLength: Office.MsoArrowheadLength;
        EndArrowheadStyle: Office.MsoArrowheadStyle;
        EndArrowheadWidth: Office.MsoArrowheadWidth;
        readonly ForeColor: ColorFormat;
        InsetPen: Office.MsoTriState;
        readonly Parent: any;
        Pattern: Office.MsoPatternType;
        Style: Office.MsoLineStyle;
        Transparency: number;
        Visible: Office.MsoTriState;
        Weight: number;
    }

    class LineNumbering {
        private 'Word.LineNumbering_typekey': LineNumbering;
        private constructor();
        Active: number;
        readonly Application: Application;
        CountBy: number;
        readonly Creator: number;
        DistanceFromText: number;
        readonly Parent: any;
        RestartMode: WdNumberingRule;
        StartingNumber: number;
    }

    class Lines {
        private 'Word.Lines_typekey': Lines;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Line;
        readonly Parent: any;
    }

    class LinkFormat {
        private 'Word.LinkFormat_typekey': LinkFormat;
        private constructor();
        readonly Application: Application;
        AutoUpdate: boolean;
        BreakLink(): void;
        readonly Creator: number;
        Locked: boolean;
        readonly Parent: any;
        SavePictureWithDocument: boolean;
        SourceFullName: string;
        readonly SourceName: string;
        readonly SourcePath: string;
        readonly Type: WdLinkType;
        Update(): void;
    }

    class List {
        private 'Word.List_typekey': List;
        private constructor();
        readonly Application: Application;
        ApplyListTemplate(ListTemplate: ListTemplate, ContinuePreviousList?: any, DefaultListBehavior?: any): void;
        ApplyListTemplateOld(ListTemplate: ListTemplate, ContinuePreviousList?: any): void;
        ApplyListTemplateWithLevel(ListTemplate: ListTemplate, ContinuePreviousList?: any, DefaultListBehavior?: any, ApplyLevel?: any): void;
        CanContinuePreviousList(ListTemplate: ListTemplate): WdContinue;
        ConvertNumbersToText(NumberType?: any): void;
        CountNumberedItems(NumberType?: any, Level?: any): number;
        readonly Creator: number;
        readonly ListParagraphs: ListParagraphs;
        readonly Parent: any;
        readonly Range: Range;
        RemoveNumbers(NumberType?: any): void;
        readonly SingleListTemplate: boolean;
        readonly StyleName: string;
    }

    class ListEntries {
        private 'Word.ListEntries_typekey': ListEntries;
        private constructor();
        Add(Name: string, Index?: any): ListEntry;
        readonly Application: Application;
        Clear(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): ListEntry;
        readonly Parent: any;
    }

    class ListEntry {
        private 'Word.ListEntry_typekey': ListEntry;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        Name: string;
        readonly Parent: any;
    }

    class ListFormat {
        private 'Word.ListFormat_typekey': ListFormat;
        private constructor();
        readonly Application: Application;
        ApplyBulletDefault(DefaultListBehavior?: any): void;
        ApplyBulletDefaultOld(): void;
        ApplyListTemplate(ListTemplate: ListTemplate, ContinuePreviousList?: any, ApplyTo?: any, DefaultListBehavior?: any): void;
        ApplyListTemplateOld(ListTemplate: ListTemplate, ContinuePreviousList?: any, ApplyTo?: any): void;
        ApplyListTemplateWithLevel(ListTemplate: ListTemplate, ContinuePreviousList?: any, ApplyTo?: any, DefaultListBehavior?: any, ApplyLevel?: any): void;
        ApplyNumberDefault(DefaultListBehavior?: any): void;
        ApplyNumberDefaultOld(): void;
        ApplyOutlineNumberDefault(DefaultListBehavior?: any): void;
        ApplyOutlineNumberDefaultOld(): void;
        CanContinuePreviousList(ListTemplate: ListTemplate): WdContinue;
        ConvertNumbersToText(NumberType?: any): void;
        CountNumberedItems(NumberType?: any, Level?: any): number;
        readonly Creator: number;
        readonly List: List;
        ListIndent(): void;
        ListLevelNumber: number;
        ListOutdent(): void;
        readonly ListPictureBullet: InlineShape;
        readonly ListString: string;
        readonly ListTemplate: ListTemplate;
        readonly ListType: WdListType;
        readonly ListValue: number;
        readonly Parent: any;
        RemoveNumbers(NumberType?: any): void;
        readonly SingleList: boolean;
        readonly SingleListTemplate: boolean;
    }

    class ListGalleries {
        private 'Word.ListGalleries_typekey': ListGalleries;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: WdListGalleryType): ListGallery;
        readonly Parent: any;
    }

    class ListGallery {
        private 'Word.ListGallery_typekey': ListGallery;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly ListTemplates: ListTemplates;
        Modified(Index: number): boolean;
        readonly Parent: any;
        Reset(Index: number): void;
    }

    class ListLevel {
        private 'Word.ListLevel_typekey': ListLevel;
        private constructor();
        Alignment: WdListLevelAlignment;
        readonly Application: Application;
        ApplyPictureBullet(FileName: string): InlineShape;
        readonly Creator: number;
        Font: Font;
        readonly Index: number;
        LinkedStyle: string;
        NumberFormat: string;
        NumberPosition: number;
        NumberStyle: WdListNumberStyle;
        readonly Parent: any;
        readonly PictureBullet: InlineShape;
        ResetOnHigher: number;
        ResetOnHigherOld: boolean;
        StartAt: number;
        TabPosition: number;
        TextPosition: number;
        TrailingCharacter: WdTrailingCharacter;
    }

    class ListLevels {
        private 'Word.ListLevels_typekey': ListLevels;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): ListLevel;
        readonly Parent: any;
    }

    class ListParagraphs {
        private 'Word.ListParagraphs_typekey': ListParagraphs;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Paragraph;
        readonly Parent: any;
    }

    class Lists {
        private 'Word.Lists_typekey': Lists;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): List;
        readonly Parent: any;
    }

    class ListTemplate {
        private 'Word.ListTemplate_typekey': ListTemplate;
        private constructor();
        readonly Application: Application;
        Convert(Level?: any): ListTemplate;
        readonly Creator: number;
        readonly ListLevels: ListLevels;
        Name: string;
        OutlineNumbered: boolean;
        readonly Parent: any;
    }

    class ListTemplates {
        private 'Word.ListTemplates_typekey': ListTemplates;
        private constructor();
        Add(OutlineNumbered?: any, Name?: any): ListTemplate;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): ListTemplate;
        readonly Parent: any;
    }

    class Mailer {
        private 'Word.Mailer_typekey': Mailer;
        private constructor();
        readonly Application: Application;
        BCCRecipients: any;
        CCRecipients: any;
        readonly Creator: number;
        Enclosures: any;
        readonly Parent: any;
        readonly Received: boolean;
        Recipients: any;
        readonly SendDateTime: VarDate;
        readonly Sender: string;
        Subject: string;
    }

    class MailingLabel {
        private 'Word.MailingLabel_typekey': MailingLabel;
        private constructor();
        readonly Application: Application;
        CreateNewDocument(Name?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any, PrintEPostageLabel?: any, Vertical?: any): Document;
        CreateNewDocument2000(Name?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any): Document;
        CreateNewDocumentByID(LabelID?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any, PrintEPostageLabel?: any, Vertical?: any): Document;
        readonly Creator: number;
        readonly CustomLabels: CustomLabels;
        DefaultLabelName: string;
        DefaultLaserTray: WdPaperTray;
        DefaultPrintBarCode: boolean;
        LabelOptions(): void;
        readonly Parent: any;
        PrintOut(Name?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any, PrintEPostageLabel?: any, Vertical?: any): void;
        PrintOut2000(Name?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any): void;
        PrintOutByID(LabelID?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any, PrintEPostageLabel?: any, Vertical?: any): void;
        Vertical: boolean;
    }

    class MailMerge {
        private 'Word.MailMerge_typekey': MailMerge;
        private constructor();
        readonly Application: Application;
        Check(): void;
        CreateDataSource(
            Name?: any, PasswordDocument?: any, WritePasswordDocument?: any, HeaderRecord?: any, MSQuery?: any, SQLStatement?: any, SQLStatement1?: any, Connection?: any, LinkToSource?: any): void;
        CreateHeaderSource(Name: string, PasswordDocument?: any, WritePasswordDocument?: any, HeaderRecord?: any): void;
        readonly Creator: number;
        readonly DataSource: MailMergeDataSource;
        Destination: WdMailMergeDestination;
        EditDataSource(): void;
        EditHeaderSource(): void;
        EditMainDocument(): void;
        Execute(Pause?: any): void;
        readonly Fields: MailMergeFields;
        HighlightMergeFields: boolean;
        MailAddressFieldName: string;
        MailAsAttachment: boolean;
        MailFormat: WdMailMergeMailFormat;
        MailSubject: string;
        MainDocumentType: WdMailMergeMainDocType;
        OpenDataSource(
            Name: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, LinkToSource?: any, AddToRecentFiles?: any, PasswordDocument?: any,
            PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any,
            OpenExclusive?: any, SubType?: any): void;
        OpenDataSource2000(
            Name: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, LinkToSource?: any, AddToRecentFiles?: any, PasswordDocument?: any,
            PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any): void;
        OpenHeaderSource(
            Name: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, OpenExclusive?: any): void;
        OpenHeaderSource2000(
            Name: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any): void;
        readonly Parent: any;
        ShowSendToCustom: string;
        ShowWizard(InitialState: any, ShowDocumentStep?: any, ShowTemplateStep?: any, ShowDataStep?: any, ShowWriteStep?: any, ShowPreviewStep?: any, ShowMergeStep?: any): void;
        readonly State: WdMailMergeState;
        SuppressBlankLines: boolean;
        UseAddressBook(Type: string): void;
        ViewMailMergeFieldCodes: number;
        WizardState: number;
    }

    class MailMergeDataField {
        private 'Word.MailMergeDataField_typekey': MailMergeDataField;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
        readonly Value: string;
    }

    class MailMergeDataFields {
        private 'Word.MailMergeDataFields_typekey': MailMergeDataFields;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): MailMergeDataField;
        readonly Parent: any;
    }

    class MailMergeDataSource {
        private 'Word.MailMergeDataSource_typekey': MailMergeDataSource;
        private constructor();
        ActiveRecord: WdMailMergeActiveRecord;
        readonly Application: Application;
        Close(): void;
        readonly ConnectString: string;
        readonly Creator: number;
        readonly DataFields: MailMergeDataFields;
        readonly FieldNames: MailMergeFieldNames;
        FindRecord(FindText: string, Field?: any): boolean;
        FindRecord2000(FindText: string, Field: string): boolean;
        FirstRecord: number;
        readonly HeaderSourceName: string;
        readonly HeaderSourceType: WdMailMergeDataSource;
        Included: boolean;
        InvalidAddress: boolean;
        InvalidComments: string;
        LastRecord: number;
        readonly MappedDataFields: MappedDataFields;
        readonly Name: string;
        readonly Parent: any;
        QueryString: string;
        readonly RecordCount: number;
        SetAllErrorFlags(Invalid: boolean, InvalidComment: string): void;
        SetAllIncludedFlags(Included: boolean): void;
        readonly TableName: string;
        readonly Type: WdMailMergeDataSource;
    }

    class MailMergeField {
        private 'Word.MailMergeField_typekey': MailMergeField;
        private constructor();
        readonly Application: Application;
        Code: Range;
        Copy(): void;
        readonly Creator: number;
        Cut(): void;
        Delete(): void;
        Locked: boolean;
        readonly Next: MailMergeField;
        readonly Parent: any;
        readonly Previous: MailMergeField;
        Select(): void;
        readonly Type: WdFieldType;
    }

    class MailMergeFieldName {
        private 'Word.MailMergeFieldName_typekey': MailMergeFieldName;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class MailMergeFieldNames {
        private 'Word.MailMergeFieldNames_typekey': MailMergeFieldNames;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): MailMergeFieldName;
        readonly Parent: any;
    }

    class MailMergeFields {
        private 'Word.MailMergeFields_typekey': MailMergeFields;
        private constructor();
        Add(Range: Range, Name: string): MailMergeField;
        AddAsk(Range: Range, Name: string, Prompt?: any, DefaultAskText?: any, AskOnce?: any): MailMergeField;
        AddFillIn(Range: Range, Prompt?: any, DefaultFillInText?: any, AskOnce?: any): MailMergeField;
        AddIf(Range: Range, MergeField: string, Comparison: WdMailMergeComparison, CompareTo?: any, TrueAutoText?: any, TrueText?: any, FalseAutoText?: any, FalseText?: any): MailMergeField;
        AddMergeRec(Range: Range): MailMergeField;
        AddMergeSeq(Range: Range): MailMergeField;
        AddNext(Range: Range): MailMergeField;
        AddNextIf(Range: Range, MergeField: string, Comparison: WdMailMergeComparison, CompareTo?: any): MailMergeField;
        AddSet(Range: Range, Name: string, ValueText?: any, ValueAutoText?: any): MailMergeField;
        AddSkipIf(Range: Range, MergeField: string, Comparison: WdMailMergeComparison, CompareTo?: any): MailMergeField;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): MailMergeField;
        readonly Parent: any;
    }

    class MailMessage {
        private 'Word.MailMessage_typekey': MailMessage;
        private constructor();
        readonly Application: Application;
        CheckName(): void;
        readonly Creator: number;
        Delete(): void;
        DisplayMoveDialog(): void;
        DisplayProperties(): void;
        DisplaySelectNamesDialog(): void;
        Forward(): void;
        GoToNext(): void;
        GoToPrevious(): void;
        readonly Parent: any;
        Reply(): void;
        ReplyAll(): void;
        ToggleHeader(): void;
    }

    class MappedDataField {
        private 'Word.MappedDataField_typekey': MappedDataField;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        DataFieldIndex: number;
        readonly DataFieldName: string;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
        readonly Value: string;
    }

    class MappedDataFields {
        private 'Word.MappedDataFields_typekey': MappedDataFields;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: WdMappedDataFields): MappedDataField;
        readonly Parent: any;
    }

    class OLEControl {
        private 'Word.OLEControl_typekey': OLEControl;
        private constructor();
        Activate(): void;
        AltHTML: string;
        readonly Automation: any;
        Copy(): void;
        Cut(): void;
        Delete(): void;
        Height: number;
        Left: number;
        Name: string;
        Select(): void;
        Top: number;
        Width: number;
    }

    class OLEFormat {
        private 'Word.OLEFormat_typekey': OLEFormat;
        private constructor();
        Activate(): void;
        ActivateAs(ClassType: string): void;
        readonly Application: Application;
        ClassType: string;
        ConvertTo(ClassType?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any): void;
        readonly Creator: number;
        DisplayAsIcon: boolean;
        DoVerb(VerbIndex?: any): void;
        Edit(): void;
        IconIndex: number;
        IconLabel: string;
        IconName: string;
        readonly IconPath: string;
        readonly Label: string;
        readonly Object: any;
        Open(): void;
        readonly Parent: any;
        PreserveFormattingOnUpdate: boolean;
        readonly ProgID: string;
    }

    class OMath {
        private 'Word.OMath_typekey': OMath;
        private constructor();
        AlignPoint: number;
        readonly Application: Application;
        readonly ArgIndex: number;
        ArgSize: number;
        readonly Breaks: OMathBreaks;
        BuildUp(): void;
        ConvertToLiteralText(): void;
        ConvertToMathText(): void;
        ConvertToNormalText(): void;
        readonly Creator: number;
        readonly Functions: OMathFunctions;
        Justification: WdOMathJc;
        Linearize(): void;
        readonly NestingLevel: number;
        readonly Parent: any;
        readonly ParentArg: OMath;
        readonly ParentCol: OMathMatCol;
        readonly ParentFunction: OMathFunction;
        readonly ParentOMath: OMath;
        readonly ParentRow: OMathMatRow;
        readonly Range: Range;
        Remove(): void;
        Type: WdOMathType;
    }

    class OMathAcc {
        private 'Word.OMathAcc_typekey': OMathAcc;
        private constructor();
        readonly Application: Application;
        Char: number;
        readonly Creator: number;
        readonly E: OMath;
        readonly Parent: any;
    }

    class OMathArgs {
        private 'Word.OMathArgs_typekey': OMathArgs;
        private constructor();
        Add(BeforeArg?: any): OMath;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): OMath;
        readonly Parent: any;
    }

    class OMathAutoCorrect {
        private 'Word.OMathAutoCorrect_typekey': OMathAutoCorrect;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Entries: OMathAutoCorrectEntries;
        readonly Functions: OMathRecognizedFunctions;
        readonly Parent: any;
        ReplaceText: boolean;
        UseOutsideOMath: boolean;
    }

    class OMathAutoCorrectEntries {
        private 'Word.OMathAutoCorrectEntries_typekey': OMathAutoCorrectEntries;
        private constructor();
        Add(Name: string, Value: string): OMathAutoCorrectEntry;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): OMathAutoCorrectEntry;
        readonly Parent: any;
    }

    class OMathAutoCorrectEntry {
        private 'Word.OMathAutoCorrectEntry_typekey': OMathAutoCorrectEntry;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        Name: string;
        readonly Parent: any;
        Value: string;
    }

    class OMathBar {
        private 'Word.OMathBar_typekey': OMathBar;
        private constructor();
        readonly Application: Application;
        BarTop: boolean;
        readonly Creator: number;
        readonly E: OMath;
        readonly Parent: any;
    }

    class OMathBorderBox {
        private 'Word.OMathBorderBox_typekey': OMathBorderBox;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        HideBot: boolean;
        HideLeft: boolean;
        HideRight: boolean;
        HideTop: boolean;
        readonly Parent: any;
        StrikeBLTR: boolean;
        StrikeH: boolean;
        StrikeTLBR: boolean;
        StrikeV: boolean;
    }

    class OMathBox {
        private 'Word.OMathBox_typekey': OMathBox;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Diff: boolean;
        readonly E: OMath;
        NoBreak: boolean;
        OpEmu: boolean;
        readonly Parent: any;
    }

    class OMathBreak {
        private 'Word.OMathBreak_typekey': OMathBreak;
        private constructor();
        AlignAt: number;
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Parent: any;
        readonly Range: Range;
    }

    class OMathBreaks {
        private 'Word.OMathBreaks_typekey': OMathBreaks;
        private constructor();
        Add(Range: Range): OMathBreak;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): OMathBreak;
        readonly Parent: any;
    }

    class OMathDelim {
        private 'Word.OMathDelim_typekey': OMathDelim;
        private constructor();
        readonly Application: Application;
        BegChar: number;
        readonly Creator: number;
        readonly E: OMathArgs;
        EndChar: number;
        Grow: boolean;
        NoLeftChar: boolean;
        NoRightChar: boolean;
        readonly Parent: any;
        SepChar: number;
        Shape: WdOMathShapeType;
    }

    class OMathEqArray {
        private 'Word.OMathEqArray_typekey': OMathEqArray;
        private constructor();
        Align: WdOMathVertAlignType;
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMathArgs;
        MaxDist: boolean;
        ObjDist: boolean;
        readonly Parent: any;
        RowSpacing: number;
        RowSpacingRule: WdOMathSpacingRule;
    }

    class OMathFrac {
        private 'Word.OMathFrac_typekey': OMathFrac;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Den: OMath;
        readonly Num: OMath;
        readonly Parent: any;
        Type: WdOMathFracType;
    }

    class OMathFunc {
        private 'Word.OMathFunc_typekey': OMathFunc;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        readonly FName: OMath;
        readonly Parent: any;
    }

    class OMathFunction {
        private 'Word.OMathFunction_typekey': OMathFunction;
        private constructor();
        readonly Acc: OMathAcc;
        readonly Application: Application;
        readonly Args: OMathArgs;
        readonly Bar: OMathBar;
        readonly BorderBox: OMathBorderBox;
        readonly Box: OMathBox;
        readonly Creator: number;
        readonly Delim: OMathDelim;
        readonly EqArray: OMathEqArray;
        readonly Frac: OMathFrac;
        readonly Func: OMathFunc;
        readonly GroupChar: OMathGroupChar;
        readonly LimLow: OMathLimLow;
        readonly LimUpp: OMathLimUpp;
        readonly Mat: OMathMat;
        readonly Nary: OMathNary;
        readonly OMath: OMath;
        readonly Parent: any;
        readonly Phantom: OMathPhantom;
        readonly Rad: OMathRad;
        readonly Range: Range;
        Remove(): OMathFunction;
        readonly ScrPre: OMathScrPre;
        readonly ScrSub: OMathScrSub;
        readonly ScrSubSup: OMathScrSubSup;
        readonly ScrSup: OMathScrSup;
        readonly Type: WdOMathFunctionType;
    }

    class OMathFunctions {
        private 'Word.OMathFunctions_typekey': OMathFunctions;
        private constructor();
        Add(Range: Range, Type: WdOMathFunctionType, NumArgs?: any, NumCols?: any): OMathFunction;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): OMathFunction;
        readonly Parent: any;
    }

    class OMathGroupChar {
        private 'Word.OMathGroupChar_typekey': OMathGroupChar;
        private constructor();
        AlignTop: boolean;
        readonly Application: Application;
        Char: number;
        CharTop: boolean;
        readonly Creator: number;
        readonly E: OMath;
        readonly Parent: any;
    }

    class OMathLimLow {
        private 'Word.OMathLimLow_typekey': OMathLimLow;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        readonly Lim: OMath;
        readonly Parent: any;
        ToLimUpp(): OMathFunction;
    }

    class OMathLimUpp {
        private 'Word.OMathLimUpp_typekey': OMathLimUpp;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        readonly Lim: OMath;
        readonly Parent: any;
        ToLimLow(): OMathFunction;
    }

    class OMathMat {
        private 'Word.OMathMat_typekey': OMathMat;
        private constructor();
        Align: WdOMathVertAlignType;
        readonly Application: Application;
        Cell(Row: number, Col: number): OMath;
        ColGap: number;
        ColGapRule: WdOMathSpacingRule;
        readonly Cols: OMathMatCols;
        ColSpacing: number;
        readonly Creator: number;
        readonly Parent: any;
        PlcHoldHidden: boolean;
        readonly Rows: OMathMatRows;
        RowSpacing: number;
        RowSpacingRule: WdOMathSpacingRule;
    }

    class OMathMatCol {
        private 'Word.OMathMatCol_typekey': OMathMatCol;
        private constructor();
        Align: WdOMathHorizAlignType;
        readonly Application: Application;
        readonly Args: OMathArgs;
        readonly ColIndex: number;
        readonly Creator: number;
        Delete(): void;
        readonly Parent: any;
    }

    class OMathMatCols {
        private 'Word.OMathMatCols_typekey': OMathMatCols;
        private constructor();
        Add(BeforeCol?: any): OMathMatCol;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): OMathMatCol;
        readonly Parent: any;
    }

    class OMathMatRow {
        private 'Word.OMathMatRow_typekey': OMathMatRow;
        private constructor();
        readonly Application: Application;
        readonly Args: OMathArgs;
        readonly Creator: number;
        Delete(): void;
        readonly Parent: any;
        readonly RowIndex: number;
    }

    class OMathMatRows {
        private 'Word.OMathMatRows_typekey': OMathMatRows;
        private constructor();
        Add(BeforeRow?: any): OMathMatRow;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): OMathMatRow;
        readonly Parent: any;
    }

    class OMathNary {
        private 'Word.OMathNary_typekey': OMathNary;
        private constructor();
        readonly Application: Application;
        Char: number;
        readonly Creator: number;
        readonly E: OMath;
        Grow: boolean;
        HideSub: boolean;
        HideSup: boolean;
        readonly Parent: any;
        readonly Sub: OMath;
        SubSupLim: boolean;
        readonly Sup: OMath;
    }

    class OMathPhantom {
        private 'Word.OMathPhantom_typekey': OMathPhantom;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        readonly Parent: any;
        Show: boolean;
        Smash: boolean;
        Transp: boolean;
        ZeroAsc: boolean;
        ZeroDesc: boolean;
        ZeroWid: boolean;
    }

    class OMathRad {
        private 'Word.OMathRad_typekey': OMathRad;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Deg: OMath;
        readonly E: OMath;
        HideDeg: boolean;
        readonly Parent: any;
    }

    class OMathRecognizedFunction {
        private 'Word.OMathRecognizedFunction_typekey': OMathRecognizedFunction;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class OMathRecognizedFunctions {
        private 'Word.OMathRecognizedFunctions_typekey': OMathRecognizedFunctions;
        private constructor();
        Add(Name: string): OMathRecognizedFunction;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): OMathRecognizedFunction;
        readonly Parent: any;
    }

    class OMaths {
        private 'Word.OMaths_typekey': OMaths;
        private constructor();
        Add(Range: Range): Range;
        readonly Application: Application;
        BuildUp(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): OMath;
        Linearize(): void;
        readonly Parent: any;
    }

    class OMathScrPre {
        private 'Word.OMathScrPre_typekey': OMathScrPre;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        readonly Parent: any;
        readonly Sub: OMath;
        readonly Sup: OMath;
        ToScrSubSup(): OMathFunction;
    }

    class OMathScrSub {
        private 'Word.OMathScrSub_typekey': OMathScrSub;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        readonly Parent: any;
        readonly Sub: OMath;
    }

    class OMathScrSubSup {
        private 'Word.OMathScrSubSup_typekey': OMathScrSubSup;
        private constructor();
        AlignScripts: boolean;
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        readonly Parent: any;
        RemoveSub(): OMathFunction;
        RemoveSup(): OMathFunction;
        readonly Sub: OMath;
        readonly Sup: OMath;
        ToScrPre(): OMathFunction;
    }

    class OMathScrSup {
        private 'Word.OMathScrSup_typekey': OMathScrSup;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly E: OMath;
        readonly Parent: any;
        readonly Sup: OMath;
    }

    class Options {
        private 'Word.Options_typekey': Options;
        private constructor();
        AddBiDirectionalMarksWhenSavingTextFile: boolean;
        AddControlCharacters: boolean;
        AddHebDoubleQuote: boolean;
        AllowAccentedUppercase: boolean;
        AllowClickAndTypeMouse: boolean;
        AllowCombinedAuxiliaryForms: boolean;
        AllowCompoundNounProcessing: boolean;
        AllowDragAndDrop: boolean;
        AllowFastSave: boolean;
        AllowOpenInDraftView: boolean;
        AllowPixelUnits: boolean;
        AllowReadingMode: boolean;
        AlwaysUseClearType: boolean;
        AnimateScreenMovements: boolean;
        readonly Application: Application;
        ApplyFarEastFontsToAscii: boolean;
        ArabicMode: WdAraSpeller;
        ArabicNumeral: WdArabicNumeral;
        AutoCreateNewDrawings: boolean;
        AutoFormatApplyBulletedLists: boolean;
        AutoFormatApplyFirstIndents: boolean;
        AutoFormatApplyHeadings: boolean;
        AutoFormatApplyLists: boolean;
        AutoFormatApplyOtherParas: boolean;
        AutoFormatAsYouTypeApplyBorders: boolean;
        AutoFormatAsYouTypeApplyBulletedLists: boolean;
        AutoFormatAsYouTypeApplyClosings: boolean;
        AutoFormatAsYouTypeApplyDates: boolean;
        AutoFormatAsYouTypeApplyFirstIndents: boolean;
        AutoFormatAsYouTypeApplyHeadings: boolean;
        AutoFormatAsYouTypeApplyNumberedLists: boolean;
        AutoFormatAsYouTypeApplyTables: boolean;
        AutoFormatAsYouTypeAutoLetterWizard: boolean;
        AutoFormatAsYouTypeDefineStyles: boolean;
        AutoFormatAsYouTypeDeleteAutoSpaces: boolean;
        AutoFormatAsYouTypeFormatListItemBeginning: boolean;
        AutoFormatAsYouTypeInsertClosings: boolean;
        AutoFormatAsYouTypeInsertOvers: boolean;
        AutoFormatAsYouTypeMatchParentheses: boolean;
        AutoFormatAsYouTypeReplaceFarEastDashes: boolean;
        AutoFormatAsYouTypeReplaceFractions: boolean;
        AutoFormatAsYouTypeReplaceHyperlinks: boolean;
        AutoFormatAsYouTypeReplaceOrdinals: boolean;
        AutoFormatAsYouTypeReplacePlainTextEmphasis: boolean;
        AutoFormatAsYouTypeReplaceQuotes: boolean;
        AutoFormatAsYouTypeReplaceSymbols: boolean;
        AutoFormatDeleteAutoSpaces: boolean;
        AutoFormatMatchParentheses: boolean;
        AutoFormatPlainTextWordMail: boolean;
        AutoFormatPreserveStyles: boolean;
        AutoFormatReplaceFarEastDashes: boolean;
        AutoFormatReplaceFractions: boolean;
        AutoFormatReplaceHyperlinks: boolean;
        AutoFormatReplaceOrdinals: boolean;
        AutoFormatReplacePlainTextEmphasis: boolean;
        AutoFormatReplaceQuotes: boolean;
        AutoFormatReplaceSymbols: boolean;
        AutoKeyboardSwitching: boolean;
        AutoWordSelection: boolean;
        BackgroundOpen: boolean;
        BackgroundSave: boolean;
        BibliographySort: string;
        BibliographyStyle: string;
        BlueScreen: boolean;
        BrazilReform: WdPortugueseReform;
        ButtonFieldClicks: number;
        CheckGrammarAsYouType: boolean;
        CheckGrammarWithSpelling: boolean;
        CheckHangulEndings: boolean;
        CheckSpellingAsYouType: boolean;
        CommentsColor: WdColorIndex;
        ConfirmConversions: boolean;
        ContextualSpeller: boolean;
        ConvertHighAnsiToFarEast: boolean;
        CreateBackup: boolean;
        readonly Creator: number;
        CtrlClickHyperlinkToOpen: boolean;
        CursorMovement: WdCursorMovement;
        DefaultBorderColor: WdColor;
        DefaultBorderColorIndex: WdColorIndex;
        DefaultBorderLineStyle: WdLineStyle;
        DefaultBorderLineWidth: WdLineWidth;
        DefaultEPostageApp: string;
        DefaultFilePath(Path: WdDefaultFilePath): string;
        DefaultHighlightColorIndex: WdColorIndex;
        DefaultOpenFormat: WdOpenFormat;
        DefaultTextEncoding: Office.MsoEncoding;
        DefaultTray: string;
        DefaultTrayID: number;
        DeletedCellColor: WdCellColor;
        DeletedTextColor: WdColorIndex;
        DeletedTextMark: WdDeletedTextMark;
        DiacriticColorVal: WdColor;
        DisableFeaturesbyDefault: boolean;
        DisableFeaturesIntroducedAfterbyDefault: WdDisableFeaturesIntroducedAfter;
        DisplayGridLines: boolean;
        DisplayPasteOptions: boolean;
        DisplaySmartTagButtons: boolean;
        DocumentViewDirection: WdDocumentViewDirection;
        DoNotPromptForConvert: boolean;
        EnableHangulHanjaRecentOrdering: boolean;
        EnableLegacyIMEMode: boolean;
        EnableLivePreview: boolean;
        EnableMisusedWordsDictionary: boolean;
        EnableSound: boolean;
        readonly EnvelopeFeederInstalled: boolean;
        FormatScanning: boolean;
        FrenchReform: WdFrenchSpeller;
        GridDistanceHorizontal: number;
        GridDistanceVertical: number;
        GridOriginHorizontal: number;
        GridOriginVertical: number;
        HangulHanjaFastConversion: boolean;
        HebrewMode: WdHebSpellStart;
        IgnoreInternetAndFileAddresses: boolean;
        IgnoreMixedDigits: boolean;
        IgnoreUppercase: boolean;
        IMEAutomaticControl: boolean;
        InlineConversion: boolean;
        InsertedCellColor: WdCellColor;
        InsertedTextColor: WdColorIndex;
        InsertedTextMark: WdInsertedTextMark;
        INSKeyForOvertype: boolean;
        INSKeyForPaste: boolean;
        InterpretHighAnsi: WdHighAnsiText;
        LabelSmartTags: boolean;
        LocalNetworkFile: boolean;
        MapPaperSize: boolean;
        MatchFuzzyAY: boolean;
        MatchFuzzyBV: boolean;
        MatchFuzzyByte: boolean;
        MatchFuzzyCase: boolean;
        MatchFuzzyDash: boolean;
        MatchFuzzyDZ: boolean;
        MatchFuzzyHF: boolean;
        MatchFuzzyHiragana: boolean;
        MatchFuzzyIterationMark: boolean;
        MatchFuzzyKanji: boolean;
        MatchFuzzyKiKu: boolean;
        MatchFuzzyOldKana: boolean;
        MatchFuzzyProlongedSoundMark: boolean;
        MatchFuzzyPunctuation: boolean;
        MatchFuzzySmallKana: boolean;
        MatchFuzzySpace: boolean;
        MatchFuzzyTC: boolean;
        MatchFuzzyZJ: boolean;
        MeasurementUnit: WdMeasurementUnits;
        MergedCellColor: WdCellColor;
        MonthNames: WdMonthNames;
        MoveFromTextColor: WdColorIndex;
        MoveFromTextMark: WdMoveFromTextMark;
        MoveToTextColor: WdColorIndex;
        MoveToTextMark: WdMoveToTextMark;
        MultipleWordConversionsMode: WdMultipleWordConversionsMode;
        OMathAutoBuildUp: boolean;
        OMathCopyLF: boolean;
        OptimizeForWord97byDefault: boolean;
        Overtype: boolean;
        Pagination: boolean;
        readonly Parent: any;
        PasteAdjustParagraphSpacing: boolean;
        PasteAdjustTableFormatting: boolean;
        PasteAdjustWordSpacing: boolean;
        PasteFormatBetweenDocuments: WdPasteOptions;
        PasteFormatBetweenStyledDocuments: WdPasteOptions;
        PasteFormatFromExternalSource: WdPasteOptions;
        PasteFormatWithinDocument: WdPasteOptions;
        PasteMergeFromPPT: boolean;
        PasteMergeFromXL: boolean;
        PasteMergeLists: boolean;
        PasteOptionKeepBulletsAndNumbers: boolean;
        PasteSmartCutPaste: boolean;
        PasteSmartStyleBehavior: boolean;
        PictureEditor: string;
        PictureWrapType: WdWrapTypeMerged;
        PortugalReform: WdPortugueseReform;
        PrecisePositioning: boolean;
        PrintBackground: boolean;
        PrintBackgrounds: boolean;
        PrintComments: boolean;
        PrintDraft: boolean;
        PrintDrawingObjects: boolean;
        PrintEvenPagesInAscendingOrder: boolean;
        PrintFieldCodes: boolean;
        PrintHiddenText: boolean;
        PrintOddPagesInAscendingOrder: boolean;
        PrintProperties: boolean;
        PrintReverse: boolean;
        PrintXMLTag: boolean;
        PromptUpdateStyle: boolean;
        RepeatWord: boolean;
        ReplaceSelection: boolean;
        RevisedLinesColor: WdColorIndex;
        RevisedLinesMark: WdRevisedLinesMark;
        RevisedPropertiesColor: WdColorIndex;
        RevisedPropertiesMark: WdRevisedPropertiesMark;
        RevisionsBalloonPrintOrientation: WdRevisionsBalloonPrintOrientation;
        RTFInClipboard: boolean;
        SaveInterval: number;
        SaveNormalPrompt: boolean;
        SavePropertiesPrompt: boolean;
        SendMailAttach: boolean;
        SequenceCheck: boolean;
        SetWPHelpOptions(CommandKeyHelp?: any, DocNavigationKeys?: any, MouseSimulation?: any, DemoGuidance?: any, DemoSpeed?: any, HelpType?: any): void;
        ShortMenuNames: boolean;
        ShowControlCharacters: boolean;
        ShowDevTools: boolean;
        ShowDiacritics: boolean;
        ShowFormatError: boolean;
        ShowMarkupOpenSave: boolean;
        ShowMenuFloaties: boolean;
        ShowReadabilityStatistics: boolean;
        ShowSelectionFloaties: boolean;
        SmartCursoring: boolean;
        SmartCutPaste: boolean;
        SmartParaSelection: boolean;
        SnapToGrid: boolean;
        SnapToShapes: boolean;
        SpanishMode: WdSpanishSpeller;
        SplitCellColor: WdCellColor;
        StoreRSIDOnSave: boolean;
        StrictFinalYaa: boolean;
        StrictInitialAlefHamza: boolean;
        StrictRussianE: boolean;
        StrictTaaMarboota: boolean;
        SuggestFromMainDictionaryOnly: boolean;
        SuggestSpellingCorrections: boolean;
        TabIndentKey: boolean;
        TypeNReplace: boolean;
        UpdateFieldsAtPrint: boolean;
        UpdateFieldsWithTrackedChangesAtPrint: boolean;
        UpdateLinksAtOpen: boolean;
        UpdateLinksAtPrint: boolean;
        UpdateStyleListBehavior: WdUpdateStyleListBehavior;
        UseCharacterUnit: boolean;
        UseDiffDiacColor: boolean;
        UseGermanSpellingReform: boolean;
        UseNormalStyleForList: boolean;
        VirusProtection: boolean;
        VisualSelection: WdVisualSelection;
        WarnBeforeSavingPrintingSendingMarkup: boolean;
        WPDocNavKeys: boolean;
        WPHelp: boolean;
    }

    class OtherCorrectionsException {
        private 'Word.OtherCorrectionsException_typekey': OtherCorrectionsException;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class OtherCorrectionsExceptions {
        private 'Word.OtherCorrectionsExceptions_typekey': OtherCorrectionsExceptions;
        private constructor();
        Add(Name: string): OtherCorrectionsException;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): OtherCorrectionsException;
        readonly Parent: any;
    }

    class Page {
        private 'Word.Page_typekey': Page;
        private constructor();
        readonly Application: Application;
        readonly Breaks: Breaks;
        readonly Creator: number;
        readonly EnhMetaFileBits: any;
        readonly Height: number;
        readonly Left: number;
        readonly Parent: any;
        readonly Rectangles: Rectangles;
        readonly Top: number;
        readonly Width: number;
    }

    class PageNumber {
        private 'Word.PageNumber_typekey': PageNumber;
        private constructor();
        Alignment: WdPageNumberAlignment;
        readonly Application: Application;
        Copy(): void;
        readonly Creator: number;
        Cut(): void;
        Delete(): void;
        readonly Index: number;
        readonly Parent: any;
        Select(): void;
    }

    class PageNumbers {
        private 'Word.PageNumbers_typekey': PageNumbers;
        private constructor();
        Add(PageNumberAlignment?: any, FirstPage?: any): PageNumber;
        readonly Application: Application;
        ChapterPageSeparator: WdSeparatorType;
        readonly Count: number;
        readonly Creator: number;
        DoubleQuote: boolean;
        HeadingLevelForChapter: number;
        IncludeChapterNumber: boolean;
        Item(Index: number): PageNumber;
        NumberStyle: WdPageNumberStyle;
        readonly Parent: any;
        RestartNumberingAtSection: boolean;
        ShowFirstPageNumber: boolean;
        StartingNumber: number;
    }

    class Pages {
        private 'Word.Pages_typekey': Pages;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Page;
        readonly Parent: any;
    }

    class PageSetup {
        private 'Word.PageSetup_typekey': PageSetup;
        private constructor();
        readonly Application: Application;
        BookFoldPrinting: boolean;
        BookFoldPrintingSheets: number;
        BookFoldRevPrinting: boolean;
        BottomMargin: number;
        CharsLine: number;
        readonly Creator: number;
        DifferentFirstPageHeaderFooter: number;
        FirstPageTray: WdPaperTray;
        FooterDistance: number;
        Gutter: number;
        GutterOnTop: boolean;
        GutterPos: WdGutterStyle;
        GutterStyle: WdGutterStyleOld;
        HeaderDistance: number;
        LayoutMode: WdLayoutMode;
        LeftMargin: number;
        LineNumbering: LineNumbering;
        LinesPage: number;
        MirrorMargins: number;
        OddAndEvenPagesHeaderFooter: number;
        Orientation: WdOrientation;
        OtherPagesTray: WdPaperTray;
        PageHeight: number;
        PageWidth: number;
        PaperSize: WdPaperSize;
        readonly Parent: any;
        RightMargin: number;
        SectionDirection: WdSectionDirection;
        SectionStart: WdSectionStart;
        SetAsTemplateDefault(): void;
        ShowGrid: boolean;
        SuppressEndnotes: number;
        TextColumns: TextColumns;
        TogglePortrait(): void;
        TopMargin: number;
        TwoPagesOnOne: boolean;
        VerticalAlignment: WdVerticalAlignment;
    }

    class Pane {
        private 'Word.Pane_typekey': Pane;
        private constructor();
        Activate(): void;
        readonly Application: Application;
        AutoScroll(Velocity: number): void;
        BrowseToWindow: boolean;
        readonly BrowseWidth: number;
        Close(): void;
        readonly Creator: number;
        DisplayRulers: boolean;
        DisplayVerticalRuler: boolean;
        readonly Document: Document;
        readonly Frameset: Frameset;
        HorizontalPercentScrolled: number;
        readonly Index: number;
        LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;
        MinimumFontSize: number;
        NewFrameset(): void;
        readonly Next: Pane;
        readonly Pages: Pages;
        PageScroll(Down?: any, Up?: any): void;
        readonly Parent: any;
        readonly Previous: Pane;
        readonly Selection: Selection;
        SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;
        TOCInFrameset(): void;
        VerticalPercentScrolled: number;
        readonly View: View;
        readonly Zooms: Zooms;
    }

    class Panes {
        private 'Word.Panes_typekey': Panes;
        private constructor();
        Add(SplitVertical?: any): Pane;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Pane;
        readonly Parent: any;
    }

    class Paragraph {
        private 'Word.Paragraph_typekey': Paragraph;
        private constructor();
        AddSpaceBetweenFarEastAndAlpha: number;
        AddSpaceBetweenFarEastAndDigit: number;
        Alignment: WdParagraphAlignment;
        readonly Application: Application;
        AutoAdjustRightIndent: number;
        BaseLineAlignment: WdBaselineAlignment;
        Borders: Borders;
        CharacterUnitFirstLineIndent: number;
        CharacterUnitLeftIndent: number;
        CharacterUnitRightIndent: number;
        CloseUp(): void;
        readonly Creator: number;
        DisableLineHeightGrid: number;
        readonly DropCap: DropCap;
        FarEastLineBreakControl: number;
        FirstLineIndent: number;
        Format: ParagraphFormat;
        HalfWidthPunctuationOnTopOfLine: number;
        HangingPunctuation: number;
        Hyphenation: number;
        ID: string;
        Indent(): void;
        IndentCharWidth(Count: number): void;
        IndentFirstLineCharWidth(Count: number): void;
        readonly IsStyleSeparator: boolean;
        JoinList(): void;
        KeepTogether: number;
        KeepWithNext: number;
        LeftIndent: number;
        LineSpacing: number;
        LineSpacingRule: WdLineSpacing;
        LineUnitAfter: number;
        LineUnitBefore: number;

        /**
         * @param number [Level1=0]
         * @param number [Level2=0]
         * @param number [Level3=0]
         * @param number [Level4=0]
         * @param number [Level5=0]
         * @param number [Level6=0]
         * @param number [Level7=0]
         * @param number [Level8=0]
         * @param number [Level9=0]
         */
        ListAdvanceTo(Level1?: number, Level2?: number, Level3?: number, Level4?: number, Level5?: number, Level6?: number, Level7?: number, Level8?: number, Level9?: number): void;
        ListNumberOriginal(Level: number): number;
        MirrorIndents: number;
        Next(Count?: any): Paragraph;
        NoLineNumber: number;
        OpenOrCloseUp(): void;
        OpenUp(): void;
        Outdent(): void;
        OutlineDemote(): void;
        OutlineDemoteToBody(): void;
        OutlineLevel: WdOutlineLevel;
        OutlinePromote(): void;
        PageBreakBefore: number;
        readonly ParaID: number;
        readonly Parent: any;
        Previous(Count?: any): Paragraph;
        readonly Range: Range;
        ReadingOrder: WdReadingOrder;
        Reset(): void;
        ResetAdvanceTo(): void;
        RightIndent: number;
        SelectNumber(): void;
        SeparateList(): void;
        readonly Shading: Shading;
        Space1(): void;
        Space15(): void;
        Space2(): void;
        SpaceAfter: number;
        SpaceAfterAuto: number;
        SpaceBefore: number;
        SpaceBeforeAuto: number;
        Style: any;
        TabHangingIndent(Count: number): void;
        TabIndent(Count: number): void;
        TabStops: TabStops;
        TextboxTightWrap: WdTextboxTightWrap;
        readonly TextID: number;
        WidowControl: number;
        WordWrap: number;
    }

    class ParagraphFormat {
        private 'Word.ParagraphFormat_typekey': ParagraphFormat;
        private constructor();
        AddSpaceBetweenFarEastAndAlpha: number;
        AddSpaceBetweenFarEastAndDigit: number;
        Alignment: WdParagraphAlignment;
        readonly Application: Application;
        AutoAdjustRightIndent: number;
        BaseLineAlignment: WdBaselineAlignment;
        Borders: Borders;
        CharacterUnitFirstLineIndent: number;
        CharacterUnitLeftIndent: number;
        CharacterUnitRightIndent: number;
        CloseUp(): void;
        readonly Creator: number;
        DisableLineHeightGrid: number;
        readonly Duplicate: ParagraphFormat;
        FarEastLineBreakControl: number;
        FirstLineIndent: number;
        HalfWidthPunctuationOnTopOfLine: number;
        HangingPunctuation: number;
        Hyphenation: number;
        IndentCharWidth(Count: number): void;
        IndentFirstLineCharWidth(Count: number): void;
        KeepTogether: number;
        KeepWithNext: number;
        LeftIndent: number;
        LineSpacing: number;
        LineSpacingRule: WdLineSpacing;
        LineUnitAfter: number;
        LineUnitBefore: number;
        MirrorIndents: number;
        NoLineNumber: number;
        OpenOrCloseUp(): void;
        OpenUp(): void;
        OutlineLevel: WdOutlineLevel;
        PageBreakBefore: number;
        readonly Parent: any;
        ReadingOrder: WdReadingOrder;
        Reset(): void;
        RightIndent: number;
        readonly Shading: Shading;
        Space1(): void;
        Space15(): void;
        Space2(): void;
        SpaceAfter: number;
        SpaceAfterAuto: number;
        SpaceBefore: number;
        SpaceBeforeAuto: number;
        Style: any;
        TabHangingIndent(Count: number): void;
        TabIndent(Count: number): void;
        TabStops: TabStops;
        TextboxTightWrap: WdTextboxTightWrap;
        WidowControl: number;
        WordWrap: number;
    }

    class Paragraphs {
        private 'Word.Paragraphs_typekey': Paragraphs;
        private constructor();
        Add(Range?: any): Paragraph;
        AddSpaceBetweenFarEastAndAlpha: number;
        AddSpaceBetweenFarEastAndDigit: number;
        Alignment: WdParagraphAlignment;
        readonly Application: Application;
        AutoAdjustRightIndent: number;
        BaseLineAlignment: WdBaselineAlignment;
        Borders: Borders;
        CharacterUnitFirstLineIndent: number;
        CharacterUnitLeftIndent: number;
        CharacterUnitRightIndent: number;
        CloseUp(): void;
        readonly Count: number;
        readonly Creator: number;
        DecreaseSpacing(): void;
        DisableLineHeightGrid: number;
        FarEastLineBreakControl: number;
        readonly First: Paragraph;
        FirstLineIndent: number;
        Format: ParagraphFormat;
        HalfWidthPunctuationOnTopOfLine: number;
        HangingPunctuation: number;
        Hyphenation: number;
        IncreaseSpacing(): void;
        Indent(): void;
        IndentCharWidth(Count: number): void;
        IndentFirstLineCharWidth(Count: number): void;
        Item(Index: number): Paragraph;
        KeepTogether: number;
        KeepWithNext: number;
        readonly Last: Paragraph;
        LeftIndent: number;
        LineSpacing: number;
        LineSpacingRule: WdLineSpacing;
        LineUnitAfter: number;
        LineUnitBefore: number;
        NoLineNumber: number;
        OpenOrCloseUp(): void;
        OpenUp(): void;
        Outdent(): void;
        OutlineDemote(): void;
        OutlineDemoteToBody(): void;
        OutlineLevel: WdOutlineLevel;
        OutlinePromote(): void;
        PageBreakBefore: number;
        readonly Parent: any;
        ReadingOrder: WdReadingOrder;
        Reset(): void;
        RightIndent: number;
        readonly Shading: Shading;
        Space1(): void;
        Space15(): void;
        Space2(): void;
        SpaceAfter: number;
        SpaceAfterAuto: number;
        SpaceBefore: number;
        SpaceBeforeAuto: number;
        Style: any;
        TabHangingIndent(Count: number): void;
        TabIndent(Count: number): void;
        TabStops: TabStops;
        WidowControl: number;
        WordWrap: number;
    }

    class PictureFormat {
        private 'Word.PictureFormat_typekey': PictureFormat;
        private constructor();
        readonly Application: Application;
        Brightness: number;
        ColorType: Office.MsoPictureColorType;
        Contrast: number;
        readonly Creator: number;
        Crop: Office.Crop;
        CropBottom: number;
        CropLeft: number;
        CropRight: number;
        CropTop: number;
        IncrementBrightness(Increment: number): void;
        IncrementContrast(Increment: number): void;
        readonly Parent: any;
        TransparencyColor: number;
        TransparentBackground: Office.MsoTriState;
    }

    class PlotArea {
        private 'Word.PlotArea_typekey': PlotArea;
        private constructor();
        readonly Application: any;
        readonly Border: ChartBorder;
        ClearFormats(): any;
        readonly Creator: number;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        Height: number;
        InsideHeight: number;
        InsideLeft: number;
        InsideTop: number;
        InsideWidth: number;
        readonly Interior: Interior;
        Left: number;
        readonly Name: string;
        readonly Parent: any;
        Position: XlChartElementPosition;
        Select(): any;
        Top: number;
        Width: number;
    }

    class ProofreadingErrors {
        private 'Word.ProofreadingErrors_typekey': ProofreadingErrors;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Range;
        readonly Parent: any;
        readonly Type: WdProofreadingErrorType;
    }

    class ProtectedViewWindow {
        private 'Word.ProtectedViewWindow_typekey': ProtectedViewWindow;
        private constructor();
        Activate(): void;
        readonly Active: boolean;
        readonly Application: Application;
        Caption: string;
        Close(): void;
        readonly Creator: number;
        readonly Document: Document;
        Edit(PasswordTemplate?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any): Document;
        Height: number;
        readonly Index: number;
        Left: number;
        readonly Parent: any;
        readonly SourceName: string;
        readonly SourcePath: string;
        ToggleRibbon(): void;
        Top: number;
        Visible: boolean;
        Width: number;
        WindowState: WdWindowState;
    }

    class ProtectedViewWindows {
        private 'Word.ProtectedViewWindows_typekey': ProtectedViewWindows;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): ProtectedViewWindow;
        Open(FileName: any, AddToRecentFiles?: any, PasswordDocument?: any, Visible?: any, OpenAndRepair?: any): ProtectedViewWindow;
        readonly Parent: any;
    }

    class Range {
        private 'Word.Range_typekey': Range;
        private constructor();
        readonly Application: Application;
        AutoFormat(): void;
        Bold: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        BoldBi: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        readonly BookmarkID: number;
        readonly Bookmarks: Bookmarks;
        Borders: Borders;
        Calculate(): number;
        readonly CanEdit: number;
        readonly CanPaste: number;
        Case: WdCharacterCase;
        readonly Cells: Cells;
        readonly Characters: Characters;
        readonly CharacterStyle: any;
        CharacterWidth: WdCharacterWidth;
        CheckGrammar(): void;
        CheckSpelling(
            CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any,
            CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): void;
        CheckSynonyms(): void;

        /** @param WdCollapseDirection [Direction=wdCollapseStart] */
        Collapse(Direction?: WdCollapseDirection): void;
        readonly Columns: Columns;
        CombineCharacters: boolean;
        readonly Comments: Comments;
        ComputeStatistics(Statistic: WdStatistic): number;
        readonly Conflicts: Conflicts;
        readonly ContentControls: ContentControls;
        ConvertHangulAndHanja(ConversionsMode?: any, FastConversion?: any, CheckHangulEnding?: any, EnableRecentOrdering?: any, CustomDictionary?: any): void;
        ConvertToTable(
            Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any,
            ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any, AutoFitBehavior?: any, DefaultTableBehavior?: any): Table;
        ConvertToTableOld(
            Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any,
            ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any): Table;
        Copy(): void;
        CopyAsPicture(): void;
        CreatePublisher(Edition?: any, ContainsPICT?: any, ContainsRTF?: any, ContainsText?: any): void;
        readonly Creator: number;
        Cut(): void;
        Delete(Unit?: WdUnits, Count?: number): number;
        DetectLanguage(): void;
        DisableCharacterSpaceGrid: boolean;
        readonly Document: Document;
        readonly Duplicate: Range;
        readonly Editors: Editors;
        EmphasisMark: WdEmphasisMark;
        End: number;
        readonly EndnoteOptions: EndnoteOptions;
        readonly Endnotes: Endnotes;
        EndOf(Unit?: any, Extend?: any): number;
        readonly EnhMetaFileBits: any;
        Expand(Unit?: any): number;

        /**
         * @param boolean [OpenAfterExport=false]
         * @param Word.WdExportOptimizeFor [OptimizeFor=0]
         * @param boolean [ExportCurrentPage=false]
         * @param Word.WdExportItem [Item=0]
         * @param boolean [IncludeDocProps=false]
         * @param boolean [KeepIRM=true]
         * @param Word.WdExportCreateBookmarks [CreateBookmarks=0]
         * @param boolean [DocStructureTags=true]
         * @param boolean [BitmapMissingFonts=true]
         * @param boolean [UseISO19005_1=false]
         */
        ExportAsFixedFormat(
            OutputFileName: string, ExportFormat: WdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WdExportOptimizeFor, ExportCurrentPage?: boolean,
            Item?: WdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WdExportCreateBookmarks, DocStructureTags?: boolean,
            BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;
        ExportFragment(FileName: string, Format: WdSaveFormat): void;
        readonly Fields: Fields;
        readonly Find: Find<Range>;
        FitTextWidth: number;
        Font: Font;
        readonly FootnoteOptions: FootnoteOptions;
        readonly Footnotes: Footnotes;
        FormattedText: Range;
        readonly FormFields: FormFields;
        readonly Frames: Frames;
        GetSpellingSuggestions(
            CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any,
            CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any,
            CustomDictionary10?: any): SpellingSuggestions;
        GoTo(What?: any, Which?: any, Count?: any, Name?: any): Range;
        GoToEditableRange(EditorID?: any): Range;
        GoToNext(What: WdGoToItem): Range;
        GoToPrevious(What: WdGoToItem): Range;
        GrammarChecked: boolean;
        readonly GrammaticalErrors: ProofreadingErrors;
        HighlightColorIndex: WdColorIndex;
        HorizontalInVertical: WdHorizontalInVerticalType;
        readonly HTMLDivisions: HTMLDivisions;
        readonly Hyperlinks: Hyperlinks;
        ID: string;

        /** @param boolean [MatchDestination=false] */
        ImportFragment(FileName: string, MatchDestination?: boolean): void;
        Information(Type: WdInformation): any;
        readonly InlineShapes: InlineShapes;
        InRange(Range: Range): boolean;
        InsertAfter(Text: string): void;

        /** @param number [RelativeTo=0] */
        InsertAlignmentTab(Alignment: number, RelativeTo?: number): void;
        InsertAutoText(): void;
        InsertBefore(Text: string): void;
        InsertBreak(Type?: any): void;
        InsertCaption(Label: any, Title?: any, TitleAutoText?: any, Position?: any, ExcludeLabel?: any): void;
        InsertCaptionXP(Label: any, Title?: any, TitleAutoText?: any, Position?: any): void;
        InsertCrossReference(
            ReferenceType: any, ReferenceKind: WdReferenceKind, ReferenceItem: any, InsertAsHyperlink?: any, IncludePosition?: any, SeparateNumbers?: any, SeparatorString?: any): void;
        InsertCrossReference_2002(ReferenceType: any, ReferenceKind: WdReferenceKind, ReferenceItem: any, InsertAsHyperlink?: any, IncludePosition?: any): void;
        InsertDatabase(
            Format?: any, Style?: any, LinkToSource?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any, PasswordDocument?: any, PasswordTemplate?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, DataSource?: any, From?: any, To?: any, IncludeFields?: any): void;
        InsertDateTime(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any, DateLanguage?: any, CalendarType?: any): void;
        InsertDateTimeOld(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any): void;
        InsertFile(FileName: string, Range?: any, ConfirmConversions?: any, Link?: any, Attachment?: any): void;
        InsertParagraph(): void;
        InsertParagraphAfter(): void;
        InsertParagraphBefore(): void;
        InsertSymbol(CharacterNumber: number, Font?: any, Unicode?: any, Bias?: any): void;
        InsertXML(XML: string, Transform?: any): void;
        InStory(Range: Range): boolean;
        readonly IsEndOfRowMark: boolean;
        IsEqual(Range: Range): boolean;
        Italic: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        ItalicBi: boolean | WdConstants.wdUndefined | WdConstants.wdToggle;
        Kana: WdKana;
        LanguageDetected: boolean;
        LanguageID: WdLanguageID;
        LanguageIDFarEast: WdLanguageID;
        LanguageIDOther: WdLanguageID;
        readonly ListFormat: ListFormat;
        readonly ListParagraphs: ListParagraphs;
        readonly ListStyle: any;
        readonly Locks: CoAuthLocks;
        LookupNameProperties(): void;
        ModifyEnclosure(Style: any, Symbol?: any, EnclosedText?: any): void;
        Move(Unit?: WdUnits, Count?: number): number;
        MoveEnd(Unit?: WdUnits, Count?: number): number;
        MoveEndUntil(Cset: any, Count?: any): number;
        MoveEndWhile(Cset: any, Count?: any): number;
        MoveStart(Unit?: WdUnits, Count?: number): number;
        MoveStartUntil(Cset: any, Count?: any): number;
        MoveStartWhile(Cset: any, Count?: any): number;
        MoveUntil(Cset: any, Count?: any): number;
        MoveWhile(Cset: any, Count?: any): number;
        Next(Unit?: any, Count?: any): Range;
        readonly NextStoryRange: Range;
        NextSubdocument(): void;
        NoProofing: number;
        readonly OMaths: OMaths;
        Orientation: WdTextOrientation;
        PageSetup: PageSetup;
        ParagraphFormat: ParagraphFormat;
        readonly Paragraphs: Paragraphs;
        readonly ParagraphStyle: any;
        readonly Parent: any;
        readonly ParentContentControl: ContentControl;
        Paste(): void;
        PasteAndFormat(Type: WdRecoveryType): void;
        PasteAppendTable(): void;
        PasteAsNestedTable(): void;
        PasteExcelTable(LinkedToExcel: boolean, WordFormatting: boolean, RTF: boolean): void;
        PasteSpecial(IconIndex?: any, Link?: any, Placement?: any, DisplayAsIcon?: any, DataType?: any, IconFileName?: any, IconLabel?: any): void;

        /**
         * @param Word.WdPhoneticGuideAlignmentType [Alignment=-1]
         * @param number [Raise=0]
         * @param number [FontSize=0]
         * @param string [FontName='']
         */
        PhoneticGuide(Text: string, Alignment?: WdPhoneticGuideAlignmentType, Raise?: number, FontSize?: number, FontName?: string): void;
        Previous(Unit?: any, Count?: any): Range;
        readonly PreviousBookmarkID: number;
        PreviousSubdocument(): void;
        readonly ReadabilityStatistics: ReadabilityStatistics;
        Relocate(Direction: number): void;
        readonly Revisions: Revisions;
        readonly Rows: Rows;
        readonly Scripts: Office.Scripts;
        readonly Sections: Sections;
        Select(): void;
        readonly Sentences: Sentences;
        SetListLevel(Level: number): void;
        SetRange(Start: number, End: number): void;
        readonly Shading: Shading;
        readonly ShapeRange: ShapeRange;
        ShowAll: boolean;
        readonly SmartTags: SmartTags;
        Sort(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any,
            IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;
        SortAscending(): void;
        SortDescending(): void;
        SortOld(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, LanguageID?: any): void;
        SpellingChecked: boolean;
        readonly SpellingErrors: ProofreadingErrors;
        Start: number;
        StartOf(Unit?: any, Extend?: any): number;
        readonly StoryLength: number;
        readonly StoryType: WdStoryType;
        Style: any;
        readonly Subdocuments: Subdocuments;
        SubscribeTo(Edition: string, Format?: any): void;
        readonly SynonymInfo: SynonymInfo;
        readonly Tables: Tables;
        readonly TableStyle: any;

        /**
         * @param Word.WdTCSCConverterDirection [WdTCSCConverterDirection=2]
         * @param boolean [CommonTerms=false]
         * @param boolean [UseVariants=false]
         */
        TCSCConverter(WdTCSCConverterDirection?: WdTCSCConverterDirection, CommonTerms?: boolean, UseVariants?: boolean): void;
        Text: string;
        TextRetrievalMode: TextRetrievalMode;
        readonly TopLevelTables: Tables;
        TwoLinesInOne: WdTwoLinesInOneType;
        Underline: WdUnderline;
        readonly Updates: CoAuthUpdates;
        WholeStory(): void;
        readonly WordOpenXML: string;
        readonly Words: Words;

        /** @param boolean [DataOnly=false] */
        XML(DataOnly?: boolean): string;
        readonly XMLNodes: XMLNodes;
        readonly XMLParentNode: XMLNode;
    }

    class ReadabilityStatistic {
        private 'Word.ReadabilityStatistic_typekey': ReadabilityStatistic;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Name: string;
        readonly Parent: any;
        readonly Value: number;
    }

    class ReadabilityStatistics {
        private 'Word.ReadabilityStatistics_typekey': ReadabilityStatistics;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): ReadabilityStatistic;
        readonly Parent: any;
    }

    class RecentFile {
        private 'Word.RecentFile_typekey': RecentFile;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        Open(): Document;
        readonly Parent: any;
        readonly Path: string;
        ReadOnly: boolean;
    }

    class RecentFiles {
        private 'Word.RecentFiles_typekey': RecentFiles;
        private constructor();
        Add(Document: any, ReadOnly?: any): RecentFile;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): RecentFile;
        Maximum: number;
        readonly Parent: any;
    }

    class Rectangle {
        private 'Word.Rectangle_typekey': Rectangle;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Height: number;
        readonly Left: number;
        readonly Lines: Lines;
        readonly Parent: any;
        readonly Range: Range;
        readonly RectangleType: WdRectangleType;
        readonly Top: number;
        readonly Width: number;
    }

    class Rectangles {
        private 'Word.Rectangles_typekey': Rectangles;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Rectangle;
        readonly Parent: any;
    }

    class ReflectionFormat {
        private 'Word.ReflectionFormat_typekey': ReflectionFormat;
        private constructor();
        readonly Application: Application;
        Blur: number;
        readonly Creator: number;
        Offset: number;
        readonly Parent: any;
        Size: number;
        Transparency: number;
        Type: Office.MsoReflectionType;
    }

    class Replacement {
        private 'Word.Replacement_typekey': Replacement;
        private constructor();
        readonly Application: Application;
        ClearFormatting(): void;
        readonly Creator: number;
        Font: Font;
        readonly Frame: Frame;
        Highlight: number;
        LanguageID: WdLanguageID;
        LanguageIDFarEast: WdLanguageID;
        NoProofing: number;
        ParagraphFormat: ParagraphFormat;
        readonly Parent: any;
        Style: any;
        Text: string;
    }

    class Research {
        private 'Word.Research_typekey': Research;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        FavoriteService: string;
        IsResearchService(ServiceID: string): boolean;
        readonly Parent: any;

        /**
         * @param string [QueryString='']
         * @param Word.WdLanguageID [QueryLanguage=0]
         * @param boolean [UseSelection=false]
         * @param boolean [LaunchQuery=true]
         */
        Query(ServiceID: string, QueryString?: string, QueryLanguage?: WdLanguageID, UseSelection?: boolean, LaunchQuery?: boolean): any;
        SetLanguagePair(LanguageFrom: WdLanguageID, LanguageTo: WdLanguageID): any;
    }

    class Reviewer {
        private 'Word.Reviewer_typekey': Reviewer;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Parent: any;
        Visible: boolean;
    }

    class Reviewers {
        private 'Word.Reviewers_typekey': Reviewers;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Reviewer;
        readonly Parent: any;
    }

    class Revision {
        private 'Word.Revision_typekey': Revision;
        private constructor();
        Accept(): void;
        readonly Application: Application;
        readonly Author: string;
        readonly Cells: Cells;
        readonly Creator: number;
        readonly Date: VarDate;
        readonly FormatDescription: string;
        readonly Index: number;
        readonly MovedRange: Range;
        readonly Parent: any;
        readonly Range: Range;
        Reject(): void;
        readonly Style: Style;
        readonly Type: WdRevisionType;
    }

    class Revisions {
        private 'Word.Revisions_typekey': Revisions;
        private constructor();
        AcceptAll(): void;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Revision;
        readonly Parent: any;
        RejectAll(): void;
    }

    class RoutingSlip {
        private 'Word.RoutingSlip_typekey': RoutingSlip;
        private constructor();
        AddRecipient(Recipient: string): void;
        readonly Application: Application;
        readonly Creator: number;
        Delivery: WdRoutingSlipDelivery;
        Message: string;
        readonly Parent: any;
        Protect: WdProtectionType;
        Recipients(Index?: any): any;
        Reset(): void;
        ReturnWhenDone: boolean;
        readonly Status: WdRoutingSlipStatus;
        Subject: string;
        TrackStatus: boolean;
    }

    class Row {
        private 'Word.Row_typekey': Row;
        private constructor();
        Alignment: WdRowAlignment;
        AllowBreakAcrossPages: number;
        readonly Application: Application;
        Borders: Borders;
        readonly Cells: Cells;
        ConvertToText(Separator?: any, NestedTables?: any): Range;
        ConvertToTextOld(Separator?: any): Range;
        readonly Creator: number;
        Delete(): void;
        HeadingFormat: number;
        Height: number;
        HeightRule: WdRowHeightRule;
        ID: string;
        readonly Index: number;
        readonly IsFirst: boolean;
        readonly IsLast: boolean;
        LeftIndent: number;
        readonly NestingLevel: number;
        readonly Next: Row;
        readonly Parent: any;
        readonly Previous: Row;
        readonly Range: Range;
        Select(): void;
        SetHeight(RowHeight: number, HeightRule: WdRowHeightRule): void;
        SetLeftIndent(LeftIndent: number, RulerStyle: WdRulerStyle): void;
        readonly Shading: Shading;
        SpaceBetweenColumns: number;
    }

    class Rows {
        private 'Word.Rows_typekey': Rows;
        private constructor();
        Add(BeforeRow?: any): Row;
        Alignment: WdRowAlignment;
        AllowBreakAcrossPages: number;
        AllowOverlap: number;
        readonly Application: Application;
        Borders: Borders;
        ConvertToText(Separator?: any, NestedTables?: any): Range;
        ConvertToTextOld(Separator?: any): Range;
        readonly Count: number;
        readonly Creator: number;
        Delete(): void;
        DistanceBottom: number;
        DistanceLeft: number;
        DistanceRight: number;
        DistanceTop: number;
        DistributeHeight(): void;
        readonly First: Row;
        HeadingFormat: number;
        Height: number;
        HeightRule: WdRowHeightRule;
        HorizontalPosition: number;
        Item(Index: number): Row;
        readonly Last: Row;
        LeftIndent: number;
        readonly NestingLevel: number;
        readonly Parent: any;
        RelativeHorizontalPosition: WdRelativeHorizontalPosition;
        RelativeVerticalPosition: WdRelativeVerticalPosition;
        Select(): void;
        SetHeight(RowHeight: number, HeightRule: WdRowHeightRule): void;
        SetLeftIndent(LeftIndent: number, RulerStyle: WdRulerStyle): void;
        readonly Shading: Shading;
        SpaceBetweenColumns: number;
        TableDirection: WdTableDirection;
        VerticalPosition: number;
        WrapAroundText: number;
    }

    class Section {
        private 'Word.Section_typekey': Section;
        private constructor();
        readonly Application: Application;
        Borders: Borders;
        readonly Creator: number;
        readonly Footers: HeadersFooters;
        readonly Headers: HeadersFooters;
        readonly Index: number;
        PageSetup: PageSetup;
        readonly Parent: any;
        ProtectedForForms: boolean;
        readonly Range: Range;
    }

    class Sections {
        private 'Word.Sections_typekey': Sections;
        private constructor();
        Add(Range?: any, Start?: any): Section;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        readonly First: Section;
        Item(Index: number): Section;
        readonly Last: Section;
        PageSetup: PageSetup;
        readonly Parent: any;
    }

    class Selection {
        private 'Word.Selection_typekey': Selection;
        private constructor();
        readonly Active: boolean;
        readonly Application: Application;
        BoldRun(): void;
        readonly BookmarkID: number;
        readonly Bookmarks: Bookmarks;
        Borders: Borders;
        Calculate(): number;
        readonly Cells: Cells;
        readonly Characters: Characters;
        readonly ChildShapeRange: ShapeRange;
        ClearCharacterAllFormatting(): void;
        ClearCharacterDirectFormatting(): void;
        ClearCharacterStyle(): void;
        ClearFormatting(): void;
        ClearParagraphAllFormatting(): void;
        ClearParagraphDirectFormatting(): void;
        ClearParagraphStyle(): void;

        /** @param WdCollapseDirection [Direction=wdCollapseStart] */
        Collapse(Direction?: WdCollapseDirection): void;
        readonly Columns: Columns;
        ColumnSelectMode: boolean;
        readonly Comments: Comments;
        readonly ContentControls: ContentControls;
        ConvertToTable(
            Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any,
            ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any, AutoFitBehavior?: any, DefaultTableBehavior?: any): Table;
        ConvertToTableOld(
            Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any,
            ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any): Table;
        Copy(): void;
        CopyAsPicture(): void;
        CopyFormat(): void;
        CreateAutoTextEntry(Name: string, StyleName: string): AutoTextEntry;
        CreateTextbox(): void;
        readonly Creator: number;
        Cut(): void;
        Delete(Unit?: WdUnits, Count?: number): number;
        DetectLanguage(): void;
        readonly Document: Document;
        readonly Editors: Editors;
        End: number;
        EndKey(Unit?: any, Extend?: any): number;
        readonly EndnoteOptions: EndnoteOptions;
        readonly Endnotes: Endnotes;
        EndOf(Unit?: any, Extend?: any): number;
        readonly EnhMetaFileBits: any;
        EscapeKey(): void;
        Expand(Unit?: any): number;

        /**
         * @param boolean [OpenAfterExport=false]
         * @param Word.WdExportOptimizeFor [OptimizeFor=0]
         * @param boolean [ExportCurrentPage=false]
         * @param Word.WdExportItem [Item=0]
         * @param boolean [IncludeDocProps=false]
         * @param boolean [KeepIRM=true]
         * @param Word.WdExportCreateBookmarks [CreateBookmarks=0]
         * @param boolean [DocStructureTags=true]
         * @param boolean [BitmapMissingFonts=true]
         * @param boolean [UseISO19005_1=false]
         */
        ExportAsFixedFormat(
            OutputFileName: string, ExportFormat: WdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WdExportOptimizeFor, ExportCurrentPage?: boolean,
            Item?: WdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WdExportCreateBookmarks, DocStructureTags?: boolean,
            BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;
        Extend(Character?: any): void;
        ExtendMode: boolean;
        readonly Fields: Fields;
        readonly Find: Find<Selection>;
        FitTextWidth: number;
        Flags: WdSelectionFlags;
        Font: Font;
        readonly FootnoteOptions: FootnoteOptions;
        readonly Footnotes: Footnotes;
        FormattedText: Range;
        readonly FormFields: FormFields;
        readonly Frames: Frames;
        GoTo(What?: any, Which?: any, Count?: any, Name?: any): Range;
        GoToEditableRange(EditorID?: any): Range;
        GoToNext(What: WdGoToItem): Range;
        GoToPrevious(What: WdGoToItem): Range;
        readonly HasChildShapeRange: boolean;
        readonly HeaderFooter: HeaderFooter;
        HomeKey(Unit?: any, Extend?: any): number;
        readonly HTMLDivisions: HTMLDivisions;
        readonly Hyperlinks: Hyperlinks;
        Information(Type: WdInformation): any;
        readonly InlineShapes: InlineShapes;
        InRange(Range: Range): boolean;
        InsertAfter(Text: string): void;
        InsertBefore(Text: string): void;
        InsertBreak(Type?: any): void;
        InsertCaption(Label: any, Title?: any, TitleAutoText?: any, Position?: any, ExcludeLabel?: any): void;
        InsertCaptionXP(Label: any, Title?: any, TitleAutoText?: any, Position?: any): void;
        InsertCells(ShiftCells?: any): void;
        InsertColumns(): void;
        InsertColumnsRight(): void;
        InsertCrossReference(
            ReferenceType: any, ReferenceKind: WdReferenceKind, ReferenceItem: any, InsertAsHyperlink?: any, IncludePosition?: any, SeparateNumbers?: any, SeparatorString?: any): void;
        InsertCrossReference_2002(ReferenceType: any, ReferenceKind: WdReferenceKind, ReferenceItem: any, InsertAsHyperlink?: any, IncludePosition?: any): void;
        InsertDateTime(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any, DateLanguage?: any, CalendarType?: any): void;
        InsertDateTimeOld(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any): void;
        InsertFile(FileName: string, Range?: any, ConfirmConversions?: any, Link?: any, Attachment?: any): void;
        InsertFormula(Formula?: any, NumberFormat?: any): void;
        InsertNewPage(): void;
        InsertParagraph(): void;
        InsertParagraphAfter(): void;
        InsertParagraphBefore(): void;
        InsertRows(NumRows?: any): void;
        InsertRowsAbove(NumRows?: any): void;
        InsertRowsBelow(NumRows?: any): void;
        InsertStyleSeparator(): void;
        InsertSymbol(CharacterNumber: number, Font?: any, Unicode?: any, Bias?: any): void;
        InsertXML(XML: string, Transform?: any): void;
        InStory(Range: Range): boolean;
        readonly IPAtEndOfLine: boolean;
        readonly IsEndOfRowMark: boolean;
        IsEqual(Range: Range): boolean;
        ItalicRun(): void;
        LanguageDetected: boolean;
        LanguageID: WdLanguageID;
        LanguageIDFarEast: WdLanguageID;
        LanguageIDOther: WdLanguageID;
        LtrPara(): void;
        LtrRun(): void;
        Move(Unit?: WdUnits, Count?: number): number;
        MoveDown(Unit?: WdUnits, Count?: number): number;
        MoveEnd(Unit?: WdUnits, Count?: number): number;
        MoveEndUntil(Cset: any, Count?: any): number;
        MoveEndWhile(Cset: any, Count?: any): number;
        MoveLeft(Unit?: WdUnits, Count?: number): number;
        MoveRight(Unit?: WdUnits, Count?: number): number;
        MoveStart(Unit?: WdUnits, Count?: number): number;
        MoveStartUntil(Cset: any, Count?: any): number;
        MoveStartWhile(Cset: any, Count?: any): number;
        MoveUntil(Cset: any, Count?: any): number;
        MoveUp(Unit?: WdUnits, Count?: number): number;
        MoveWhile(Cset: any, Count?: any): number;
        Next(Unit?: WdUnits, Count?: number): Range;
        NextField(): Field;
        NextRevision(Wrap?: any): Revision;
        NextSubdocument(): void;
        NoProofing: number;
        readonly OMaths: OMaths;
        Orientation: WdTextOrientation;
        PageSetup: PageSetup;
        ParagraphFormat: ParagraphFormat;
        readonly Paragraphs: Paragraphs;
        readonly Parent: any;
        readonly ParentContentControl: ContentControl;
        Paste(): void;
        PasteAndFormat(Type: WdRecoveryType): void;
        PasteAppendTable(): void;
        PasteAsNestedTable(): void;
        PasteExcelTable(LinkedToExcel: boolean, WordFormatting: boolean, RTF: boolean): void;
        PasteFormat(): void;
        PasteSpecial(IconIndex?: any, Link?: any, Placement?: any, DisplayAsIcon?: any, DataType?: any, IconFileName?: any, IconLabel?: any): void;
        Previous(Unit?: any, Count?: any): Range;
        readonly PreviousBookmarkID: number;
        PreviousField(): Field;
        PreviousRevision(Wrap?: any): Revision;
        PreviousSubdocument(): void;
        readonly Range: Range;
        ReadingModeGrowFont(): void;
        ReadingModeShrinkFont(): void;
        readonly Rows: Rows;
        RtlPara(): void;
        RtlRun(): void;
        readonly Sections: Sections;
        Select(): void;
        SelectCell(): void;
        SelectColumn(): void;
        SelectCurrentAlignment(): void;
        SelectCurrentColor(): void;
        SelectCurrentFont(): void;
        SelectCurrentIndent(): void;
        SelectCurrentSpacing(): void;
        SelectCurrentTabs(): void;
        SelectRow(): void;
        readonly Sentences: Sentences;
        SetRange(Start: number, End: number): void;
        readonly Shading: Shading;
        readonly ShapeRange: ShapeRange;
        Shrink(): void;
        ShrinkDiscontiguousSelection(): void;
        readonly SmartTags: SmartTags;
        Sort(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any,
            IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any, SubFieldNumber?: any, SubFieldNumber2?: any, SubFieldNumber3?: any): void;
        Sort2000(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any,
            IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;
        SortAscending(): void;
        SortDescending(): void;
        SortOld(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, LanguageID?: any): void;
        SplitTable(): void;
        Start: number;
        StartIsActive: boolean;
        StartOf(Unit?: any, Extend?: any): number;
        readonly StoryLength: number;
        readonly StoryType: WdStoryType;
        Style: any;
        readonly Tables: Tables;
        Text: string;
        ToggleCharacterCode(): void;
        readonly TopLevelTables: Tables;
        readonly Type: WdSelectionType;
        TypeBackspace(): void;
        TypeParagraph(): void;
        TypeText(Text: string): void;
        WholeStory(): void;
        readonly WordOpenXML: string;
        readonly Words: Words;

        /** @param boolean [DataOnly=false] */
        XML(DataOnly?: boolean): string;
        readonly XMLNodes: XMLNodes;
        readonly XMLParentNode: XMLNode;
    }

    class Sentences {
        private 'Word.Sentences_typekey': Sentences;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        readonly First: Range;
        Item(Index: number): Range;
        readonly Last: Range;
        readonly Parent: any;
    }

    class SeriesLines {
        private 'Word.SeriesLines_typekey': SeriesLines;
        private constructor();
        readonly Application: any;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class Shading {
        private 'Word.Shading_typekey': Shading;
        private constructor();
        readonly Application: Application;
        BackgroundPatternColor: WdColor;
        BackgroundPatternColorIndex: WdColorIndex;
        readonly Creator: number;
        ForegroundPatternColor: WdColor;
        ForegroundPatternColorIndex: WdColorIndex;
        readonly Parent: any;
        Texture: WdTextureIndex;
    }

    class ShadowFormat {
        private 'Word.ShadowFormat_typekey': ShadowFormat;
        private constructor();
        readonly Application: Application;
        Blur: number;
        readonly Creator: number;
        readonly ForeColor: ColorFormat;
        IncrementOffsetX(Increment: number): void;
        IncrementOffsetY(Increment: number): void;
        Obscured: Office.MsoTriState;
        OffsetX: number;
        OffsetY: number;
        readonly Parent: any;
        RotateWithShape: Office.MsoTriState;
        Size: number;
        Style: Office.MsoShadowStyle;
        Transparency: number;
        Type: Office.MsoShadowType;
        Visible: Office.MsoTriState;
    }

    class Shape {
        private 'Word.Shape_typekey': Shape;
        private constructor();
        Activate(): void;
        readonly Adjustments: Adjustments;
        AlternativeText: string;
        readonly Anchor: Range;
        readonly AnchorID: number;
        readonly Application: Application;
        Apply(): void;
        AutoShapeType: Office.MsoAutoShapeType;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        readonly Callout: CalloutFormat;
        CanvasCropBottom(Increment: number): void;
        CanvasCropLeft(Increment: number): void;
        CanvasCropRight(Increment: number): void;
        CanvasCropTop(Increment: number): void;
        readonly CanvasItems: CanvasShapes;
        readonly Chart: Chart;
        readonly Child: Office.MsoTriState;
        readonly ConnectionSiteCount: number;
        readonly Connector: Office.MsoTriState;
        readonly ConnectorFormat: ConnectorFormat;
        ConvertToFrame(): Frame;
        ConvertToInlineShape(): InlineShape;
        readonly Creator: number;
        Delete(): void;
        readonly Diagram: Office.IMsoDiagram;
        readonly DiagramNode: DiagramNode;
        Duplicate(): Shape;
        readonly EditID: number;
        readonly Fill: FillFormat;
        Flip(FlipCmd: Office.MsoFlipCmd): void;
        readonly Glow: GlowFormat;
        readonly GroupItems: GroupShapes;
        readonly HasChart: Office.MsoTriState;
        readonly HasDiagram: Office.MsoTriState;
        readonly HasDiagramNode: Office.MsoTriState;
        readonly HasSmartArt: Office.MsoTriState;
        Height: number;
        HeightRelative: number;
        readonly HorizontalFlip: Office.MsoTriState;
        readonly Hyperlink: Hyperlink;
        readonly ID: number;
        IncrementLeft(Increment: number): void;
        IncrementRotation(Increment: number): void;
        IncrementTop(Increment: number): void;
        LayoutInCell: number;
        Left: number;
        LeftRelative: number;
        readonly Line: LineFormat;
        readonly LinkFormat: LinkFormat;
        LockAnchor: number;
        LockAspectRatio: Office.MsoTriState;
        Name: string;
        readonly Nodes: ShapeNodes;
        readonly OLEFormat: OLEFormat;
        readonly Parent: any;
        readonly ParentGroup: Shape;
        PickUp(): void;
        readonly PictureFormat: PictureFormat;
        readonly Reflection: ReflectionFormat;
        RelativeHorizontalPosition: WdRelativeHorizontalPosition;
        RelativeHorizontalSize: WdRelativeHorizontalSize;
        RelativeVerticalPosition: WdRelativeVerticalPosition;
        RelativeVerticalSize: WdRelativeVerticalSize;
        RerouteConnections(): void;
        Rotation: number;
        readonly RTF: string;

        /** @param Office.MsoScaleFrom [Scale=0] */
        ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [Scale=0] */
        ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;
        readonly Script: Office.Script;
        Select(Replace?: any): void;
        SetShapesDefaultProperties(): void;
        readonly Shadow: ShadowFormat;
        ShapeStyle: Office.MsoShapeStyleIndex;
        readonly SmartArt: Office.SmartArt;
        readonly SoftEdge: SoftEdgeFormat;
        readonly TextEffect: TextEffectFormat;
        readonly TextFrame: TextFrame;
        readonly TextFrame2: Office.TextFrame2;
        readonly ThreeD: ThreeDFormat;
        Title: string;
        Top: number;
        TopRelative: number;
        readonly Type: Office.MsoShapeType;
        Ungroup(): ShapeRange;
        readonly VerticalFlip: Office.MsoTriState;
        readonly Vertices: any;
        Visible: Office.MsoTriState;
        Width: number;
        WidthRelative: number;
        readonly WrapFormat: WrapFormat;
        ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        readonly ZOrderPosition: number;
    }

    class ShapeNode {
        private 'Word.ShapeNode_typekey': ShapeNode;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly EditingType: Office.MsoEditingType;
        readonly Parent: any;
        readonly Points: any;
        readonly SegmentType: Office.MsoSegmentType;
    }

    class ShapeNodes {
        private 'Word.ShapeNodes_typekey': ShapeNodes;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Delete(Index: number): void;

        /**
         * @param number [X2=0]
         * @param number [Y2=0]
         * @param number [X3=0]
         * @param number [Y3=0]
         */
        Insert(Index: number, SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        Item(Index: any): ShapeNode;
        readonly Parent: any;
        SetEditingType(Index: number, EditingType: Office.MsoEditingType): void;
        SetPosition(Index: number, X1: number, Y1: number): void;
        SetSegmentType(Index: number, SegmentType: Office.MsoSegmentType): void;
    }

    class ShapeRange {
        private 'Word.ShapeRange_typekey': ShapeRange;
        private constructor();
        Activate(): void;
        readonly Adjustments: Adjustments;
        Align(Align: Office.MsoAlignCmd, RelativeTo: number): void;
        AlternativeText: string;
        readonly Anchor: Range;
        readonly Application: Application;
        Apply(): void;
        AutoShapeType: Office.MsoAutoShapeType;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        readonly Callout: CalloutFormat;
        CanvasCropBottom(Increment: number): void;
        CanvasCropLeft(Increment: number): void;
        CanvasCropRight(Increment: number): void;
        CanvasCropTop(Increment: number): void;
        readonly CanvasItems: CanvasShapes;
        readonly Child: Office.MsoTriState;
        readonly ConnectionSiteCount: number;
        readonly Connector: Office.MsoTriState;
        readonly ConnectorFormat: ConnectorFormat;
        ConvertToFrame(): Frame;
        ConvertToInlineShape(): InlineShape;
        readonly Count: number;
        readonly Creator: number;
        Delete(): void;
        readonly Diagram: Office.IMsoDiagram;
        readonly DiagramNode: DiagramNode;
        Distribute(Distribute: Office.MsoDistributeCmd, RelativeTo: number): void;
        Duplicate(): ShapeRange;
        readonly Fill: FillFormat;
        Flip(FlipCmd: Office.MsoFlipCmd): void;
        readonly Glow: GlowFormat;
        Group(): Shape;
        readonly GroupItems: GroupShapes;
        readonly HasDiagram: Office.MsoTriState;
        readonly HasDiagramNode: Office.MsoTriState;
        Height: number;
        HeightRelative: number;
        readonly HorizontalFlip: Office.MsoTriState;
        readonly Hyperlink: Hyperlink;
        readonly ID: number;
        IncrementLeft(Increment: number): void;
        IncrementRotation(Increment: number): void;
        IncrementTop(Increment: number): void;
        Item(Index: any): Shape;
        LayoutInCell: number;
        Left: number;
        LeftRelative: number;
        readonly Line: LineFormat;
        LockAnchor: number;
        LockAspectRatio: Office.MsoTriState;
        Name: string;
        readonly Nodes: ShapeNodes;
        readonly Parent: any;
        readonly ParentGroup: Shape;
        PickUp(): void;
        readonly PictureFormat: PictureFormat;
        readonly Reflection: ReflectionFormat;
        Regroup(): Shape;
        RelativeHorizontalPosition: WdRelativeHorizontalPosition;
        RelativeHorizontalSize: WdRelativeHorizontalSize;
        RelativeVerticalPosition: WdRelativeVerticalPosition;
        RelativeVerticalSize: WdRelativeVerticalSize;
        RerouteConnections(): void;
        Rotation: number;
        readonly RTF: string;

        /** @param Office.MsoScaleFrom [Scale=0] */
        ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [Scale=0] */
        ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;
        Select(Replace?: any): void;
        SetShapesDefaultProperties(): void;
        readonly Shadow: ShadowFormat;
        ShapeStyle: Office.MsoShapeStyleIndex;
        readonly SoftEdge: SoftEdgeFormat;
        readonly TextEffect: TextEffectFormat;
        readonly TextFrame: TextFrame;
        readonly TextFrame2: Office.TextFrame2;
        readonly ThreeD: ThreeDFormat;
        Title: string;
        Top: number;
        TopRelative: number;
        readonly Type: Office.MsoShapeType;
        Ungroup(): ShapeRange;
        readonly VerticalFlip: Office.MsoTriState;
        readonly Vertices: any;
        Visible: Office.MsoTriState;
        Width: number;
        WidthRelative: number;
        readonly WrapFormat: WrapFormat;
        ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        readonly ZOrderPosition: number;
    }

    class Shapes {
        private 'Word.Shapes_typekey': Shapes;
        private constructor();
        AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        AddCanvas(Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;

        /** @param Office.XlChartType [Type=-1] */
        AddChart(Type?: Office.XlChartType, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any): Shape;
        AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddCurve(SafeArrayOfPoints: any, Anchor?: any): Shape;
        AddDiagram(Type: Office.MsoDiagramType, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number, Anchor?: any): Shape;
        AddOLEControl(ClassType?: any, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any): Shape;
        AddOLEObject(
            ClassType?: any, FileName?: any, LinkToFile?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Left?: any, Top?: any,
            Width?: any, Height?: any, Anchor?: any): Shape;
        AddPicture(FileName: string, LinkToFile?: any, SaveWithDocument?: any, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any): Shape;
        AddPolyline(SafeArrayOfPoints: any, Anchor?: any): Shape;
        AddShape(Type: number, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        AddSmartArt(Layout: Office.SmartArtLayout, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any): Shape;
        AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number, Anchor?: any): Shape;
        readonly Application: Application;
        BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Shape;
        readonly Parent: any;
        Range(Index: any): ShapeRange;
        SelectAll(): void;
    }

    class SmartTag {
        private 'Word.SmartTag_typekey': SmartTag;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly DownloadURL: string;
        readonly Name: string;
        readonly Parent: any;
        readonly Properties: CustomProperties;
        readonly Range: Range;
        Select(): void;
        readonly SmartTagActions: SmartTagActions;
        readonly XML: string;
        readonly XMLNode: XMLNode;
    }

    class SmartTagAction {
        private 'Word.SmartTagAction_typekey': SmartTagAction;
        private constructor();
        readonly ActiveXControl: any;
        readonly Application: Application;
        CheckboxState: boolean;
        readonly Creator: number;
        Execute(): void;
        ExpandDocumentFragment: boolean;
        ExpandHelp: boolean;
        ListSelection: number;
        readonly Name: string;
        readonly Parent: any;
        readonly PresentInPane: boolean;
        RadioGroupSelection: number;
        TextboxText: string;
        readonly Type: WdSmartTagControlType;
    }

    class SmartTagActions {
        private 'Word.SmartTagActions_typekey': SmartTagActions;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): SmartTagAction;
        readonly Parent: any;
        ReloadActions(): void;
    }

    class SmartTagRecognizer {
        private 'Word.SmartTagRecognizer_typekey': SmartTagRecognizer;
        private constructor();
        readonly Application: Application;
        readonly Caption: string;
        readonly Creator: number;
        Enabled: boolean;
        readonly FullName: string;
        readonly Parent: any;
        readonly ProgID: string;
    }

    class SmartTagRecognizers {
        private 'Word.SmartTagRecognizers_typekey': SmartTagRecognizers;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): SmartTagRecognizer;
        readonly Parent: any;
        ReloadRecognizers(): void;
    }

    class SmartTags {
        private 'Word.SmartTags_typekey': SmartTags;
        private constructor();
        Add(Name: string, Range?: any, Properties?: any): SmartTag;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): SmartTag;
        readonly Parent: any;
        SmartTagsByType(Name: string): SmartTags;
    }

    class SmartTagType {
        private 'Word.SmartTagType_typekey': SmartTagType;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly FriendlyName: string;
        readonly Name: string;
        readonly Parent: any;
        readonly SmartTagActions: SmartTagActions;
        readonly SmartTagRecognizers: SmartTagRecognizers;
    }

    class SmartTagTypes {
        private 'Word.SmartTagTypes_typekey': SmartTagTypes;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): SmartTagType;
        readonly Parent: any;
        ReloadAll(): void;
    }

    class SoftEdgeFormat {
        private 'Word.SoftEdgeFormat_typekey': SoftEdgeFormat;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Parent: any;
        Radius: number;
        Type: Office.MsoSoftEdgeType;
    }

    class Source {
        private 'Word.Source_typekey': Source;
        private constructor();
        readonly Application: Application;
        readonly Cited: boolean;
        readonly Creator: number;
        Delete(): void;
        Field(Name: string): string;
        readonly Parent: any;
        readonly Tag: string;
        readonly XML: string;
    }

    class Sources {
        private 'Word.Sources_typekey': Sources;
        private constructor();
        Add(Data: string): void;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Source;
        readonly Parent: any;
    }

    class SpellingSuggestion {
        private 'Word.SpellingSuggestion_typekey': SpellingSuggestion;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class SpellingSuggestions {
        private 'Word.SpellingSuggestions_typekey': SpellingSuggestions;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): SpellingSuggestion;
        readonly Parent: any;
        readonly SpellingErrorType: WdSpellingErrorType;
    }

    class StoryRanges {
        private 'Word.StoryRanges_typekey': StoryRanges;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: WdStoryType): Range;
        readonly Parent: any;
    }

    class Style {
        private 'Word.Style_typekey': Style;
        private constructor();
        readonly Application: Application;
        AutomaticallyUpdate: boolean;
        BaseStyle: any;
        Borders: Borders;
        readonly BuiltIn: boolean;
        readonly Creator: number;
        Delete(): void;
        readonly Description: string;
        Font: Font;
        readonly Frame: Frame;
        Hidden: boolean;
        readonly InUse: boolean;
        LanguageID: WdLanguageID;
        LanguageIDFarEast: WdLanguageID;
        readonly Linked: boolean;
        LinkStyle: any;
        LinkToListTemplate(ListTemplate: ListTemplate, ListLevelNumber?: any): void;
        readonly ListLevelNumber: number;
        readonly ListTemplate: ListTemplate;
        Locked: boolean;
        NameLocal: string;
        NextParagraphStyle: any;
        NoProofing: number;
        NoSpaceBetweenParagraphsOfSameStyle: boolean;
        ParagraphFormat: ParagraphFormat;
        readonly Parent: any;
        Priority: number;
        QuickStyle: boolean;
        readonly Shading: Shading;
        readonly Table: TableStyle;
        readonly Type: WdStyleType;
        UnhideWhenUsed: boolean;
        Visibility: boolean;
    }

    class Styles {
        private 'Word.Styles_typekey': Styles;
        private constructor();
        Add(Name: string, Type?: any): Style;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Style;
        readonly Parent: any;
    }

    class StyleSheet {
        private 'Word.StyleSheet_typekey': StyleSheet;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly FullName: string;
        readonly Index: number;
        Move(Precedence: WdStyleSheetPrecedence): void;
        readonly Name: string;
        readonly Parent: any;
        readonly Path: string;
        Title: string;
        Type: WdStyleSheetLinkType;
    }

    class StyleSheets {
        private 'Word.StyleSheets_typekey': StyleSheets;
        private constructor();
        Add(FileName: string, LinkType: WdStyleSheetLinkType, Title: string, Precedence: WdStyleSheetPrecedence): StyleSheet;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): StyleSheet;
        readonly Parent: any;
    }

    class Subdocument {
        private 'Word.Subdocument_typekey': Subdocument;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly HasFile: boolean;
        readonly Level: number;
        Locked: boolean;
        readonly Name: string;
        Open(): Document;
        readonly Parent: any;
        readonly Path: string;
        readonly Range: Range;
        Split(Range: Range): void;
    }

    class Subdocuments {
        private 'Word.Subdocuments_typekey': Subdocuments;
        private constructor();
        AddFromFile(
            Name: any, ConfirmConversions?: any, ReadOnly?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any): Subdocument;
        AddFromRange(Range: Range): Subdocument;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Delete(): void;
        Expanded: boolean;
        Item(Index: number): Subdocument;
        Merge(FirstSubdocument?: any, LastSubdocument?: any): void;
        readonly Parent: any;
        Select(): void;
    }

    class SynonymInfo {
        private 'Word.SynonymInfo_typekey': SynonymInfo;
        private constructor();
        readonly AntonymList: any;
        readonly Application: Application;
        readonly Creator: number;
        readonly Found: boolean;
        readonly MeaningCount: number;
        readonly MeaningList: any;
        readonly Parent: any;
        readonly PartOfSpeechList: any;
        readonly RelatedExpressionList: any;
        readonly RelatedWordList: any;
        SynonymList(Meaning: any): any;
        readonly Word: string;
    }

    class System {
        private 'Word.System_typekey': System;
        private constructor();
        readonly Application: Application;
        readonly ComputerType: string;
        Connect(Path: string, Drive?: any, Password?: any): void;
        readonly Country: WdCountry;
        readonly CountryRegion: WdCountry;
        readonly Creator: number;
        Cursor: WdCursorType;
        readonly FreeDiskSpace: number;
        readonly HorizontalResolution: number;
        readonly LanguageDesignation: string;
        readonly MacintoshName: string;
        readonly MathCoprocessorInstalled: boolean;
        MSInfo(): void;
        readonly OperatingSystem: string;
        readonly Parent: any;
        PrivateProfileString(FileName: string, Section: string, Key: string): string;
        readonly ProcessorType: string;
        ProfileString(Section: string, Key: string): string;
        readonly QuickDrawInstalled: boolean;
        readonly Version: string;
        readonly VerticalResolution: number;
    }

    class Table {
        private 'Word.Table_typekey': Table;
        private constructor();
        AllowAutoFit: boolean;
        AllowPageBreaks: boolean;
        readonly Application: Application;
        ApplyStyleColumnBands: boolean;
        ApplyStyleDirectFormatting(StyleName: string): void;
        ApplyStyleFirstColumn: boolean;
        ApplyStyleHeadingRows: boolean;
        ApplyStyleLastColumn: boolean;
        ApplyStyleLastRow: boolean;
        ApplyStyleRowBands: boolean;
        AutoFitBehavior(Behavior: WdAutoFitBehavior): void;
        AutoFormat(
            Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any, ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any,
            ApplyLastColumn?: any, AutoFit?: any): void;
        readonly AutoFormatType: number;
        Borders: Borders;
        BottomPadding: number;
        Cell(Row: number, Column: number): Cell;
        readonly Columns: Columns;
        ConvertToText(Separator?: any, NestedTables?: any): Range;
        ConvertToTextOld(Separator?: any): Range;
        readonly Creator: number;
        Delete(): void;
        Descr: string;
        ID: string;
        LeftPadding: number;
        readonly NestingLevel: number;
        readonly Parent: any;
        PreferredWidth: number;
        PreferredWidthType: WdPreferredWidthType;
        readonly Range: Range;
        RightPadding: number;
        readonly Rows: Rows;
        Select(): void;
        readonly Shading: Shading;
        Sort(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;
        SortAscending(): void;
        SortDescending(): void;
        SortOld(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, CaseSensitive?: any, LanguageID?: any): void;
        Spacing: number;
        Split(BeforeRow: any): Table;
        Style: any;
        TableDirection: WdTableDirection;
        readonly Tables: Tables;
        Title: string;
        TopPadding: number;
        readonly Uniform: boolean;
        UpdateAutoFormat(): void;
    }

    class TableOfAuthorities {
        private 'Word.TableOfAuthorities_typekey': TableOfAuthorities;
        private constructor();
        readonly Application: Application;
        Bookmark: string;
        Category: number;
        readonly Creator: number;
        Delete(): void;
        EntrySeparator: string;
        IncludeCategoryHeader: boolean;
        IncludeSequenceName: string;
        KeepEntryFormatting: boolean;
        PageNumberSeparator: string;
        PageRangeSeparator: string;
        readonly Parent: any;
        Passim: boolean;
        readonly Range: Range;
        Separator: string;
        TabLeader: WdTabLeader;
        Update(): void;
    }

    class TableOfAuthoritiesCategory {
        private 'Word.TableOfAuthoritiesCategory_typekey': TableOfAuthoritiesCategory;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Index: number;
        Name: string;
        readonly Parent: any;
    }

    class TableOfContents {
        private 'Word.TableOfContents_typekey': TableOfContents;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly HeadingStyles: HeadingStyles;
        HidePageNumbersInWeb: boolean;
        IncludePageNumbers: boolean;
        LowerHeadingLevel: number;
        readonly Parent: any;
        readonly Range: Range;
        RightAlignPageNumbers: boolean;
        TabLeader: WdTabLeader;
        TableID: string;
        Update(): void;
        UpdatePageNumbers(): void;
        UpperHeadingLevel: number;
        UseFields: boolean;
        UseHeadingStyles: boolean;
        UseHyperlinks: boolean;
    }

    class TableOfFigures {
        private 'Word.TableOfFigures_typekey': TableOfFigures;
        private constructor();
        readonly Application: Application;
        Caption: string;
        readonly Creator: number;
        Delete(): void;
        readonly HeadingStyles: HeadingStyles;
        HidePageNumbersInWeb: boolean;
        IncludeLabel: boolean;
        IncludePageNumbers: boolean;
        LowerHeadingLevel: number;
        readonly Parent: any;
        readonly Range: Range;
        RightAlignPageNumbers: boolean;
        TabLeader: WdTabLeader;
        TableID: string;
        Update(): void;
        UpdatePageNumbers(): void;
        UpperHeadingLevel: number;
        UseFields: boolean;
        UseHeadingStyles: boolean;
        UseHyperlinks: boolean;
    }

    class Tables {
        private 'Word.Tables_typekey': Tables;
        private constructor();
        Add(Range: Range, NumRows: number, NumColumns: number, DefaultTableBehavior?: any, AutoFitBehavior?: any): Table;
        AddOld(Range: Range, NumRows: number, NumColumns: number): Table;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Table;
        readonly NestingLevel: number;
        readonly Parent: any;
    }

    class TablesOfAuthorities {
        private 'Word.TablesOfAuthorities_typekey': TablesOfAuthorities;
        private constructor();
        Add(
            Range: Range, Category?: any, Bookmark?: any, Passim?: any, KeepEntryFormatting?: any, Separator?: any, IncludeSequenceName?: any, EntrySeparator?: any,
            PageRangeSeparator?: any, IncludeCategoryHeader?: any, PageNumberSeparator?: any): TableOfAuthorities;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Format: WdToaFormat;
        Item(Index: number): TableOfAuthorities;
        MarkAllCitations(ShortCitation: string, LongCitation?: any, LongCitationAutoText?: any, Category?: any): void;
        MarkCitation(Range: Range, ShortCitation: string, LongCitation?: any, LongCitationAutoText?: any, Category?: any): Field;
        NextCitation(ShortCitation: string): void;
        readonly Parent: any;
    }

    class TablesOfAuthoritiesCategories {
        private 'Word.TablesOfAuthoritiesCategories_typekey': TablesOfAuthoritiesCategories;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): TableOfAuthoritiesCategory;
        readonly Parent: any;
    }

    class TablesOfContents {
        private 'Word.TablesOfContents_typekey': TablesOfContents;
        private constructor();
        Add(
            Range: Range, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any,
            IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any, UseOutlineLevels?: any): TableOfContents;
        Add2000(
            Range: Range, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any,
            IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any): TableOfContents;
        AddOld(
            Range: Range, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any,
            IncludePageNumbers?: any, AddedStyles?: any): TableOfContents;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Format: WdTocFormat;
        Item(Index: number): TableOfContents;
        MarkEntry(Range: Range, Entry?: any, EntryAutoText?: any, TableID?: any, Level?: any): Field;
        readonly Parent: any;
    }

    class TablesOfFigures {
        private 'Word.TablesOfFigures_typekey': TablesOfFigures;
        private constructor();
        Add(
            Range: Range, Caption?: any, IncludeLabel?: any, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any,
            RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any): TableOfFigures;
        AddOld(
            Range: Range, Caption?: any, IncludeLabel?: any, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any,
            RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any): TableOfFigures;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Format: WdTofFormat;
        Item(Index: number): TableOfFigures;
        MarkEntry(Range: Range, Entry?: any, EntryAutoText?: any, TableID?: any, Level?: any): Field;
        readonly Parent: any;
    }

    class TableStyle {
        private 'Word.TableStyle_typekey': TableStyle;
        private constructor();
        Alignment: WdRowAlignment;
        AllowBreakAcrossPage: number;
        AllowPageBreaks: boolean;
        readonly Application: Application;
        Borders: Borders;
        BottomPadding: number;
        ColumnStripe: number;
        Condition(ConditionCode: WdConditionCode): ConditionalStyle;
        readonly Creator: number;
        LeftIndent: number;
        LeftPadding: number;
        readonly Parent: any;
        RightPadding: number;
        RowStripe: number;
        readonly Shading: Shading;
        Spacing: number;
        TableDirection: WdTableDirection;
        TopPadding: number;
    }

    class TabStop {
        private 'Word.TabStop_typekey': TabStop;
        private constructor();
        Alignment: WdTabAlignment;
        readonly Application: Application;
        Clear(): void;
        readonly Creator: number;
        readonly CustomTab: boolean;
        Leader: WdTabLeader;
        readonly Next: TabStop;
        readonly Parent: any;
        Position: number;
        readonly Previous: TabStop;
    }

    class TabStops {
        private 'Word.TabStops_typekey': TabStops;
        private constructor();
        Add(Position: number, Alignment?: any, Leader?: any): TabStop;
        After(Position: number): TabStop;
        readonly Application: Application;
        Before(Position: number): TabStop;
        ClearAll(): void;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): TabStop;
        readonly Parent: any;
    }

    class Task {
        private 'Word.Task_typekey': Task;
        private constructor();
        Activate(Wait?: any): void;
        readonly Application: Application;
        Close(): void;
        readonly Creator: number;
        Height: number;
        Left: number;
        Move(Left: number, Top: number): void;
        readonly Name: string;
        readonly Parent: any;
        Resize(Width: number, Height: number): void;
        SendWindowMessage(Message: number, wParam: number, lParam: number): void;
        Top: number;
        Visible: boolean;
        Width: number;
        WindowState: WdWindowState;
    }

    class TaskPane {
        private 'Word.TaskPane_typekey': TaskPane;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Parent: any;
        Visible: boolean;
    }

    class TaskPanes {
        private 'Word.TaskPanes_typekey': TaskPanes;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: WdTaskPanes): TaskPane;
        readonly Parent: any;
    }

    class Tasks {
        private 'Word.Tasks_typekey': Tasks;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Exists(Name: string): boolean;
        ExitWindows(): void;
        Item(Index: any): Task;
        readonly Parent: any;
    }

    class Template {
        private 'Word.Template_typekey': Template;
        private constructor();
        readonly Application: Application;
        readonly AutoTextEntries: AutoTextEntries;
        readonly BuildingBlockEntries: BuildingBlockEntries;
        readonly BuildingBlockTypes: BuildingBlockTypes;
        readonly BuiltInDocumentProperties: Office.DocumentProperties<Application>;
        readonly Creator: number;
        readonly CustomDocumentProperties: Office.DocumentProperties<Application>;
        FarEastLineBreakLanguage: WdFarEastLineBreakLanguageID;
        FarEastLineBreakLevel: WdFarEastLineBreakLevel;
        readonly FullName: string;
        JustificationMode: WdJustificationMode;
        KerningByAlgorithm: boolean;
        LanguageID: WdLanguageID;
        LanguageIDFarEast: WdLanguageID;
        readonly ListTemplates: ListTemplates;
        readonly Name: string;
        NoLineBreakAfter: string;
        NoLineBreakBefore: string;
        NoProofing: number;
        OpenAsDocument(): Document;
        readonly Parent: any;
        readonly Path: string;
        Save(): void;
        Saved: boolean;
        readonly Type: WdTemplateType;
        readonly VBProject: VBIDE.VBProject;
    }

    class Templates {
        private 'Word.Templates_typekey': Templates;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Template;
        LoadBuildingBlocks(): void;
        readonly Parent: any;
    }

    class TextColumn {
        private 'Word.TextColumn_typekey': TextColumn;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Parent: any;
        SpaceAfter: number;
        Width: number;
    }

    class TextColumns {
        private 'Word.TextColumns_typekey': TextColumns;
        private constructor();
        Add(Width?: any, Spacing?: any, EvenlySpaced?: any): TextColumn;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        EvenlySpaced: number;
        FlowDirection: WdFlowDirection;
        Item(Index: number): TextColumn;
        LineBetween: number;
        readonly Parent: any;
        SetCount(NumColumns: number): void;
        Spacing: number;
        Width: number;
    }

    class TextEffectFormat {
        private 'Word.TextEffectFormat_typekey': TextEffectFormat;
        private constructor();
        Alignment: Office.MsoTextEffectAlignment;
        readonly Application: Application;
        readonly Creator: number;
        FontBold: Office.MsoTriState;
        FontItalic: Office.MsoTriState;
        FontName: string;
        FontSize: number;
        KernedPairs: Office.MsoTriState;
        NormalizedHeight: Office.MsoTriState;
        readonly Parent: any;
        PresetShape: Office.MsoPresetTextEffectShape;
        PresetTextEffect: Office.MsoPresetTextEffect;
        RotatedChars: Office.MsoTriState;
        Text: string;
        ToggleVerticalText(): void;
        Tracking: number;
    }

    class TextFrame {
        private 'Word.TextFrame_typekey': TextFrame;
        private constructor();
        readonly Application: Application;
        AutoSize: number;
        BreakForwardLink(): void;
        readonly Column: Office.TextColumn2;
        readonly ContainingRange: Range;
        readonly Creator: number;
        DeleteText(): void;
        readonly HasText: number;
        HorizontalAnchor: Office.MsoHorizontalAnchor;
        MarginBottom: number;
        MarginLeft: number;
        MarginRight: number;
        MarginTop: number;
        Next: TextFrame;
        NoTextRotation: Office.MsoTriState;
        Orientation: Office.MsoTextOrientation;
        readonly Overflowing: boolean;
        readonly Parent: Shape;
        PathFormat: Office.MsoPathFormat;
        Previous: TextFrame;
        readonly TextRange: Range;
        readonly ThreeD: ThreeDFormat;
        ValidLinkTarget(TargetTextFrame: TextFrame): boolean;
        VerticalAnchor: Office.MsoVerticalAnchor;
        WarpFormat: Office.MsoWarpFormat;
        WordWrap: number;
    }

    class TextInput {
        private 'Word.TextInput_typekey': TextInput;
        private constructor();
        readonly Application: Application;
        Clear(): void;
        readonly Creator: number;
        Default: string;
        EditType(Type: WdTextFormFieldType, Default?: any, Format?: any, Enabled?: any): void;
        readonly Format: string;
        readonly Parent: any;
        readonly Type: WdTextFormFieldType;
        readonly Valid: boolean;
        Width: number;
    }

    class TextRetrievalMode {
        private 'Word.TextRetrievalMode_typekey': TextRetrievalMode;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Duplicate: TextRetrievalMode;
        IncludeFieldCodes: boolean;
        IncludeHiddenText: boolean;
        readonly Parent: any;
        ViewType: WdViewType;
    }

    class ThreeDFormat {
        private 'Word.ThreeDFormat_typekey': ThreeDFormat;
        private constructor();
        readonly Application: Application;
        BevelBottomDepth: number;
        BevelBottomInset: number;
        BevelBottomType: Office.MsoBevelType;
        BevelTopDepth: number;
        BevelTopInset: number;
        BevelTopType: Office.MsoBevelType;
        readonly ContourColor: ColorFormat;
        ContourWidth: number;
        readonly Creator: number;
        Depth: number;
        readonly ExtrusionColor: ColorFormat;
        ExtrusionColorType: Office.MsoExtrusionColorType;
        FieldOfView: number;
        IncrementRotationHorizontal(Increment: number): void;
        IncrementRotationVertical(Increment: number): void;
        IncrementRotationX(Increment: number): void;
        IncrementRotationY(Increment: number): void;
        IncrementRotationZ(Increment: number): void;
        LightAngle: number;
        readonly Parent: any;
        Perspective: Office.MsoTriState;
        readonly PresetCamera: Office.MsoPresetCamera;
        readonly PresetExtrusionDirection: Office.MsoPresetExtrusionDirection;
        PresetLighting: Office.MsoLightRigType;
        PresetLightingDirection: Office.MsoPresetLightingDirection;
        PresetLightingSoftness: Office.MsoPresetLightingSoftness;
        PresetMaterial: Office.MsoPresetMaterial;
        readonly PresetThreeDFormat: Office.MsoPresetThreeDFormat;
        ProjectText: Office.MsoTriState;
        ResetRotation(): void;
        RotationX: number;
        RotationY: number;
        RotationZ: number;
        SetExtrusionDirection(PresetExtrusionDirection: Office.MsoPresetExtrusionDirection): void;
        SetPresetCamera(PresetCamera: Office.MsoPresetCamera): void;
        SetThreeDFormat(PresetThreeDFormat: Office.MsoPresetThreeDFormat): void;
        Visible: Office.MsoTriState;
        Z: number;
    }

    class TickLabels {
        private 'Word.TickLabels_typekey': TickLabels;
        private constructor();
        Alignment: number;
        readonly Application: any;
        AutoScaleFont: any;
        readonly Creator: number;
        Delete(): any;
        readonly Depth: number;
        readonly Font: ChartFont;
        readonly Format: ChartFormat;
        MultiLevel: boolean;
        readonly Name: string;
        NumberFormat: string;
        NumberFormatLinked: boolean;
        NumberFormatLocal: any;
        Offset: number;
        Orientation: XlTickLabelOrientation;
        readonly Parent: any;
        ReadingOrder: number;
        Select(): any;
    }

    class TwoInitialCapsException {
        private 'Word.TwoInitialCapsException_typekey': TwoInitialCapsException;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
    }

    class TwoInitialCapsExceptions {
        private 'Word.TwoInitialCapsExceptions_typekey': TwoInitialCapsExceptions;
        private constructor();
        Add(Name: string): TwoInitialCapsException;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): TwoInitialCapsException;
        readonly Parent: any;
    }

    class UndoRecord {
        private 'Word.UndoRecord_typekey': UndoRecord;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly CustomRecordLevel: number;
        readonly CustomRecordName: string;
        EndCustomRecord(): void;
        readonly IsRecordingCustomRecord: boolean;
        readonly Parent: any;

        /** @param string [Name=''] */
        StartCustomRecord(Name?: string): void;
    }

    class UpBars {
        private 'Word.UpBars_typekey': UpBars;
        private constructor();
        readonly Application: any;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Interior: Interior;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class Variable {
        private 'Word.Variable_typekey': Variable;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        readonly Parent: any;
        Value: string;
    }

    class Variables {
        private 'Word.Variables_typekey': Variables;
        private constructor();
        Add(Name: string, Value?: any): Variable;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number | string): Variable;
        readonly Parent: any;
    }

    class Version {
        private 'Word.Version_typekey': Version;
        private constructor();
        readonly Application: Application;
        readonly Comment: string;
        readonly Creator: number;
        readonly Date: VarDate;
        Delete(): void;
        readonly Index: number;
        Open(): Document;
        OpenOld(): void;
        readonly Parent: any;
        readonly SavedBy: string;
    }

    class Versions {
        private 'Word.Versions_typekey': Versions;
        private constructor();
        readonly Application: Application;
        AutoVersion: WdAutoVersions;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): Version;
        readonly Parent: any;
        Save(Comment?: any): void;
    }

    class View {
        private 'Word.View_typekey': View;
        private constructor();
        readonly Application: Application;
        BrowseToWindow: number;
        CollapseOutline(Range?: any): void;
        ConflictMode: boolean;
        readonly Creator: number;
        DisplayBackgrounds: boolean;
        DisplayPageBoundaries: boolean;
        DisplaySmartTags: boolean;
        Draft: boolean;
        EnlargeFontsLessThan: number;
        ExpandOutline(Range?: any): void;
        FieldShading: WdFieldShading;
        FullScreen: boolean;
        Magnifier: boolean;
        MailMergeDataView: boolean;
        MarkupMode: WdRevisionsMode;
        NextHeaderFooter(): void;
        Panning: boolean;
        readonly Parent: any;
        PreviousHeaderFooter(): void;
        ReadingLayout: boolean;
        ReadingLayoutActualView: boolean;
        ReadingLayoutAllowEditing: boolean;
        ReadingLayoutAllowMultiplePages: boolean;
        ReadingLayoutTruncateMargins: WdReadingLayoutMargin;
        readonly Reviewers: Reviewers;
        RevisionsBalloonShowConnectingLines: boolean;
        RevisionsBalloonSide: WdRevisionsBalloonMargin;
        RevisionsBalloonWidth: number;
        RevisionsBalloonWidthType: WdRevisionsBalloonWidthType;
        RevisionsMode: WdRevisionsMode;
        RevisionsView: WdRevisionsView;
        SeekView: WdSeekView;
        ShadeEditableRanges: number;
        ShowAll: boolean;
        ShowAllHeadings(): void;
        ShowAnimation: boolean;
        ShowBookmarks: boolean;
        ShowComments: boolean;
        ShowCropMarks: boolean;
        ShowDrawings: boolean;
        ShowFieldCodes: boolean;
        ShowFirstLineOnly: boolean;
        ShowFormat: boolean;
        ShowFormatChanges: boolean;
        ShowHeading(Level: number): void;
        ShowHiddenText: boolean;
        ShowHighlight: boolean;
        ShowHyphens: boolean;
        ShowInkAnnotations: boolean;
        ShowInsertionsAndDeletions: boolean;
        ShowMainTextLayer: boolean;
        ShowMarkupAreaHighlight: boolean;
        ShowObjectAnchors: boolean;
        ShowOptionalBreaks: boolean;
        ShowOtherAuthors: boolean;
        ShowParagraphs: boolean;
        ShowPicturePlaceHolders: boolean;
        ShowRevisionsAndComments: boolean;
        ShowSpaces: boolean;
        ShowTabs: boolean;
        ShowTextBoundaries: boolean;
        ShowXMLMarkup: number;
        SplitSpecial: WdSpecialPane;
        TableGridlines: boolean;
        Type: WdViewType;
        WrapToWindow: boolean;
        readonly Zoom: Zoom;
    }

    class Walls {
        private 'Word.Walls_typekey': Walls;
        private constructor();
        readonly Application: any;
        readonly Border: ChartBorder;
        ClearFormats(): any;
        readonly Creator: number;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Interior: Interior;
        readonly Name: string;
        readonly Parent: any;
        Paste(): void;
        PictureType: any;
        PictureUnit: any;
        Select(): any;
        Thickness: number;
    }

    class WebOptions {
        private 'Word.WebOptions_typekey': WebOptions;
        private constructor();
        AllowPNG: boolean;
        readonly Application: Application;
        BrowserLevel: WdBrowserLevel;
        readonly Creator: number;
        Encoding: Office.MsoEncoding;
        readonly FolderSuffix: string;
        OptimizeForBrowser: boolean;
        OrganizeInFolder: boolean;
        readonly Parent: any;
        PixelsPerInch: number;
        RelyOnCSS: boolean;
        RelyOnVML: boolean;
        ScreenSize: Office.MsoScreenSize;
        TargetBrowser: Office.MsoTargetBrowser;
        UseDefaultFolderSuffix(): void;
        UseLongFileNames: boolean;
    }

    class Window {
        private 'Word.Window_typekey': Window;
        private constructor();
        Activate(): void;
        readonly Active: boolean;
        readonly ActivePane: Pane;
        readonly Application: Application;
        Caption: string;
        Close(SaveChanges?: any, RouteDocument?: any): void;
        readonly Creator: number;
        DisplayHorizontalScrollBar: boolean;
        DisplayLeftScrollBar: boolean;
        DisplayRightRuler: boolean;
        DisplayRulers: boolean;
        DisplayScreenTips: boolean;
        DisplayVerticalRuler: boolean;
        DisplayVerticalScrollBar: boolean;
        readonly Document: Document;
        DocumentMap: boolean;
        DocumentMapPercentWidth: number;
        EnvelopeVisible: boolean;
        GetPoint(ScreenPixelsLeft: number, ScreenPixelsTop: number, ScreenPixelsWidth: number, ScreenPixelsHeight: number, obj: any): void;
        Height: number;
        HorizontalPercentScrolled: number;
        IMEMode: WdIMEMode;
        readonly Index: number;
        LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;
        Left: number;
        NewWindow(): Window;
        readonly Next: Window;
        PageScroll(Down?: any, Up?: any): void;
        readonly Panes: Panes;
        readonly Parent: any;
        readonly Previous: Window;
        PrintOut(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any,
            PrintZoomPaperHeight?: any): void;
        PrintOut2000(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any,
            PrintZoomPaperHeight?: any): void;
        PrintOutOld(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;
        RangeFromPoint(x: number, y: number): any;
        ScrollIntoView(obj: any, Start?: any): void;
        readonly Selection: Selection;
        SetFocus(): void;
        ShowSourceDocuments: WdShowSourceDocuments;
        SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;
        Split: boolean;
        SplitVertical: number;
        StyleAreaWidth: number;
        Thumbnails: boolean;
        ToggleRibbon(): void;
        ToggleShowAllReviewers(): void;
        Top: number;
        readonly Type: WdWindowType;
        readonly UsableHeight: number;
        readonly UsableWidth: number;
        VerticalPercentScrolled: number;
        readonly View: View;
        Visible: boolean;
        Width: number;
        readonly WindowNumber: number;
        WindowState: WdWindowState;
    }

    class Windows {
        private 'Word.Windows_typekey': Windows;
        private constructor();
        Add(Window?: any): Window;
        readonly Application: Application;
        Arrange(ArrangeStyle?: any): void;
        BreakSideBySide(): boolean;
        CompareSideBySideWith(Document: any): boolean;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Window;
        readonly Parent: any;
        ResetPositionsSideBySide(): void;
        SyncScrollingSideBySide: boolean;
    }

    class Words {
        private 'Word.Words_typekey': Words;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        readonly First: Range;
        Item(Index: number): Range;
        readonly Last: Range;
        readonly Parent: any;
    }

    class WrapFormat {
        private 'Word.WrapFormat_typekey': WrapFormat;
        private constructor();
        AllowOverlap: number;
        readonly Application: Application;
        readonly Creator: number;
        DistanceBottom: number;
        DistanceLeft: number;
        DistanceRight: number;
        DistanceTop: number;
        readonly Parent: any;
        Side: WdWrapSideType;
        Type: WdWrapType;
    }

    class XMLChildNodeSuggestion {
        private 'Word.XMLChildNodeSuggestion_typekey': XMLChildNodeSuggestion;
        private constructor();
        readonly Application: Application;
        readonly BaseName: string;
        readonly Creator: number;
        Insert(Range?: any): XMLNode;
        readonly NamespaceURI: string;
        readonly Parent: any;
        readonly XMLSchemaReference: XMLSchemaReference;
    }

    class XMLChildNodeSuggestions {
        private 'Word.XMLChildNodeSuggestions_typekey': XMLChildNodeSuggestions;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): XMLChildNodeSuggestion;
        readonly Parent: any;
    }

    class XMLMapping {
        private 'Word.XMLMapping_typekey': XMLMapping;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly CustomXMLNode: Office.CustomXMLNode;
        readonly CustomXMLPart: Office.CustomXMLPart;
        Delete(): void;
        readonly IsMapped: boolean;
        readonly Parent: any;
        readonly PrefixMappings: string;

        /**
         * @param string [PrefixMapping='']
         * @param Office.CustomXMLPart [Source=0]
         */
        SetMapping(XPath: string, PrefixMapping?: string, Source?: Office.CustomXMLPart): boolean;
        SetMappingByNode(Node: Office.CustomXMLNode): boolean;
        readonly XPath: string;
    }

    class XMLNamespace {
        private 'Word.XMLNamespace_typekey': XMLNamespace;
        private constructor();

        /** @param boolean [AllUsers=false] */
        Alias(AllUsers?: boolean): string;
        readonly Application: Application;
        AttachToDocument(Document: any): void;
        readonly Creator: number;

        /** @param boolean [AllUsers=false] */
        DefaultTransform(AllUsers?: boolean): XSLTransform;
        Delete(): void;

        /** @param boolean [AllUsers=false] */
        Location(AllUsers?: boolean): string;
        readonly Parent: any;
        readonly URI: string;
        readonly XSLTransforms: XSLTransforms;
    }

    class XMLNamespaces {
        private 'Word.XMLNamespaces_typekey': XMLNamespaces;
        private constructor();

        /** @param boolean [InstallForAllUsers=false] */
        Add(Path: string, NamespaceURI: any, Alias: any, InstallForAllUsers?: boolean): XMLNamespace;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;

        /** @param boolean [InstallForAllUsers=false] */
        InstallManifest(Path: string, InstallForAllUsers?: boolean): void;
        Item(Index: any): XMLNamespace;
        readonly Parent: any;
    }

    class XMLNode {
        private 'Word.XMLNode_typekey': XMLNode;
        private constructor();
        readonly Application: Application;
        readonly Attributes: XMLNodes;
        readonly BaseName: string;
        readonly ChildNodes: XMLNodes;
        readonly ChildNodeSuggestions: XMLChildNodeSuggestions;
        Copy(): void;
        readonly Creator: number;
        Cut(): void;
        Delete(): void;
        readonly FirstChild: XMLNode;
        readonly HasChildNodes: boolean;
        readonly LastChild: XMLNode;
        readonly Level: WdXMLNodeLevel;
        readonly NamespaceURI: string;
        readonly NextSibling: XMLNode;
        readonly NodeType: WdXMLNodeType;
        NodeValue: string;
        readonly OwnerDocument: Document;
        readonly Parent: any;
        readonly ParentNode: XMLNode;
        PlaceholderText: string;
        readonly PreviousSibling: XMLNode;
        readonly Range: Range;
        RemoveChild(ChildElement: XMLNode): void;

        /**
         * @param string [PrefixMapping='']
         * @param boolean [FastSearchSkippingTextNodes=true]
         */
        SelectNodes(XPath: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean): XMLNodes;

        /**
         * @param string [PrefixMapping='']
         * @param boolean [FastSearchSkippingTextNodes=true]
         */
        SelectSingleNode(XPath: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean): XMLNode;

        /** @param boolean [ClearedAutomatically=true] */
        SetValidationError(Status: WdXMLValidationStatus, ErrorText: any, ClearedAutomatically?: boolean): void;
        readonly SmartTag: SmartTag;
        Text: string;
        Validate(): void;

        /** @param boolean [Advanced=false] */
        ValidationErrorText(Advanced?: boolean): string;
        readonly ValidationStatus: WdXMLValidationStatus;
        readonly WordOpenXML: string;

        /** @param boolean [DataOnly=false] */
        XML(DataOnly?: boolean): string;
    }

    class XMLNodes {
        private 'Word.XMLNodes_typekey': XMLNodes;
        private constructor();
        Add(Name: string, Namespace: string, Range?: any): XMLNode;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): XMLNode;
        readonly Parent: any;
    }

    class XMLSchemaReference {
        private 'Word.XMLSchemaReference_typekey': XMLSchemaReference;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly Location: string;
        readonly NamespaceURI: string;
        readonly Parent: any;
        Reload(): void;
    }

    class XMLSchemaReferences {
        private 'Word.XMLSchemaReferences_typekey': XMLSchemaReferences;
        private constructor();

        /** @param boolean [InstallForAllUsers=false] */
        Add(NamespaceURI: any, Alias: any, FileName: any, InstallForAllUsers?: boolean): XMLSchemaReference;
        AllowSaveAsXMLWithoutValidation: boolean;
        readonly Application: Application;
        AutomaticValidation: boolean;
        readonly Count: number;
        readonly Creator: number;
        HideValidationErrors: boolean;
        IgnoreMixedContent: boolean;
        Item(Index: any): XMLSchemaReference;
        readonly Parent: any;
        ShowPlaceholderText: boolean;
        Validate(): void;
    }

    class XSLTransform {
        private 'Word.XSLTransform_typekey': XSLTransform;
        private constructor();

        /** @param boolean [AllUsers=false] */
        Alias(AllUsers?: boolean): string;
        readonly Application: Application;
        readonly Creator: number;
        Delete(): void;
        readonly ID: string;

        /** @param boolean [AllUsers=false] */
        Location(AllUsers?: boolean): string;
        readonly Parent: any;
    }

    class XSLTransforms {
        private 'Word.XSLTransforms_typekey': XSLTransforms;
        private constructor();

        /** @param boolean [InstallForAllUsers=false] */
        Add(Location: string, Alias: any, InstallForAllUsers?: boolean): XSLTransform;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): XSLTransform;
        readonly Parent: any;
    }

    class Zoom {
        private 'Word.Zoom_typekey': Zoom;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        PageColumns: number;
        PageFit: WdPageFit;
        PageRows: number;
        readonly Parent: any;
        Percentage: number;
    }

    class Zooms {
        private 'Word.Zooms_typekey': Zooms;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        Item(Index: WdViewType): Zoom;
        readonly Parent: any;
    }

    namespace EventHelperTypes {
        type Application_EPostageInsertEx_ArgNames = ['Doc', 'cpDeliveryAddrStart', 'cpDeliveryAddrEnd', 'cpReturnAddrStart', 'cpReturnAddrEnd', 'xaWidth', 'yaHeight', 'bstrPrinterName',
         'bstrPaperFeed', 'fPrint', 'fCancel'];

        type Application_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        interface Application_EPostageInsertEx_Parameter {
            readonly bstrPaperFeed: string;
            readonly bstrPrinterName: string;
            readonly cpDeliveryAddrEnd: number;
            readonly cpDeliveryAddrStart: number;
            readonly cpReturnAddrEnd: number;
            readonly cpReturnAddrStart: number;
            readonly Doc: Document;
            fCancel: boolean;
            readonly fPrint: boolean;
            readonly xaWidth: number;
            readonly yaHeight: number;
        }

        interface Application_Invoke_Parameter {
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
        obj: Word.Application, event: 'DocumentBeforeClose' | 'DocumentBeforePrint' | 'MailMergeBeforeRecordMerge', argNames: ['Doc', 'Cancel'],
        handler: (this: Word.Application, parameter: {readonly Doc: Word.Document, Cancel: boolean}) => void): void;
    on(
        obj: Word.Application, event: 'DocumentBeforeSave', argNames: ['Doc', 'SaveAsUI', 'Cancel'], handler: (
            this: Word.Application, parameter: {readonly Doc: Word.Document, readonly SaveAsUI: boolean, Cancel: boolean}) => void): void;
    on(
        obj: Word.Application, event: 'DocumentOpen' | 'EPostageInsert' | 'EPostagePropertyDialog' | 'MailMergeAfterRecordMerge' | 'MailMergeDataSourceLoad' |
        'MailMergeWizardSendToCustom' | 'NewDocument',
        argNames: ['Doc'], handler: (this: Word.Application, parameter: {readonly Doc: Word.Document}) => void): void;
    on(
        obj: Word.Application, event: 'DocumentSync', argNames: ['Doc', 'SyncEventType'], handler: (
            this: Word.Application, parameter: {readonly Doc: Word.Document, readonly SyncEventType: Office.MsoSyncEventType}) => void): void;
    on(
        obj: Word.Application, event: 'EPostageInsertEx', argNames: Word.EventHelperTypes.Application_EPostageInsertEx_ArgNames, handler: (
            this: Word.Application, parameter: Word.EventHelperTypes.Application_EPostageInsertEx_Parameter) => void): void;
    on(
        obj: Word.Application, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Word.Application, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Word.Application, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Word.Application, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Word.Application, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Word.Application, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Word.Application, event: 'Invoke', argNames: Word.EventHelperTypes.Application_Invoke_ArgNames, handler: (
            this: Word.Application, parameter: Word.EventHelperTypes.Application_Invoke_Parameter) => void): void;
    on(
        obj: Word.Application, event: 'MailMergeAfterMerge', argNames: ['Doc', 'DocResult'], handler: (
            this: Word.Application, parameter: {readonly Doc: Word.Document, readonly DocResult: Word.Document}) => void): void;
    on(
        obj: Word.Application, event: 'MailMergeBeforeMerge', argNames: ['Doc', 'StartRecord', 'EndRecord', 'Cancel'], handler: (
            this: Word.Application, parameter: {readonly Doc: Word.Document, readonly StartRecord: number, readonly EndRecord: number, Cancel: boolean}) => void): void;
    on(
        obj: Word.Application, event: 'MailMergeDataSourceValidate', argNames: ['Doc', 'Handled'], handler: (
            this: Word.Application, parameter: {readonly Doc: Word.Document, readonly Handled: boolean}) => void): void;
    on(
        obj: Word.Application, event: 'MailMergeDataSourceValidate2', argNames: ['Doc', 'Handled'], handler: (
            this: Word.Application, parameter: {readonly Doc: Word.Document, Handled: boolean}) => void): void;
    on(
        obj: Word.Application, event: 'MailMergeWizardStateChange', argNames: ['Doc', 'FromState', 'ToState', 'Handled'], handler: (
            this: Word.Application, parameter: {readonly Doc: Word.Document, readonly FromState: number, readonly ToState: number, readonly Handled: boolean}) => void): void;
    on(
        obj: Word.Application, event: 'ProtectedViewWindowActivate' | 'ProtectedViewWindowDeactivate' | 'ProtectedViewWindowOpen' | 'ProtectedViewWindowSize',
        argNames: ['PvWindow'], handler: (this: Word.Application, parameter: {readonly PvWindow: Word.ProtectedViewWindow}) => void): void;
    on(
        obj: Word.Application, event: 'ProtectedViewWindowBeforeClose', argNames: ['PvWindow', 'CloseReason', 'Cancel'], handler: (
            this: Word.Application, parameter: {readonly PvWindow: Word.ProtectedViewWindow, readonly CloseReason: number, Cancel: boolean}) => void): void;
    on(
        obj: Word.Application, event: 'ProtectedViewWindowBeforeEdit', argNames: ['PvWindow', 'Cancel'], handler: (
            this: Word.Application, parameter: {readonly PvWindow: Word.ProtectedViewWindow, Cancel: boolean}) => void): void;
    on(obj: Word.Application, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Word.Application, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: Word.Application, event: 'WindowActivate' | 'WindowDeactivate' | 'WindowSize', argNames: ['Doc', 'Wn'], handler: (
            this: Word.Application, parameter: {readonly Doc: Word.Document, readonly Wn: Word.Window}) => void): void;
    on(
        obj: Word.Application, event: 'WindowBeforeDoubleClick' | 'WindowBeforeRightClick', argNames: ['Sel', 'Cancel'], handler: (
            this: Word.Application, parameter: {readonly Sel: Word.Selection, Cancel: boolean}) => void): void;
    on(obj: Word.Application, event: 'WindowSelectionChange', argNames: ['Sel'], handler: (this: Word.Application, parameter: {readonly Sel: Word.Selection}) => void): void;
    on(
        obj: Word.Application, event: 'XMLSelectionChange', argNames: ['Sel', 'OldXMLNode', 'NewXMLNode', 'Reason'], handler: (
            this: Word.Application, parameter: {readonly Sel: Word.Selection, readonly OldXMLNode: Word.XMLNode, readonly NewXMLNode: Word.XMLNode, readonly Reason: number}) => void): void;
    on(obj: Word.Application, event: 'XMLValidationError', argNames: ['XMLNode'], handler: (this: Word.Application, parameter: {readonly XMLNode: Word.XMLNode}) => void): void;
    on(
        obj: Word.Document, event: 'BuildingBlockInsert', argNames: ['Range', 'Name', 'Category', 'BlockType', 'Template'], handler: (
            this: Word.Document, parameter: {readonly Range: Word.Range, readonly Name: string, readonly Category: string, readonly BlockType: string, readonly Template: string}) => void): void;
    on(
        obj: Word.Document, event: 'ContentControlAfterAdd', argNames: ['NewContentControl', 'InUndoRedo'], handler: (
            this: Word.Document, parameter: {readonly NewContentControl: Word.ContentControl, readonly InUndoRedo: boolean}) => void): void;
    on(
        obj: Word.Document, event: 'ContentControlBeforeContentUpdate' | 'ContentControlBeforeStoreUpdate', argNames: ['ContentControl', 'Content'],
        handler: (this: Word.Document, parameter: {readonly ContentControl: Word.ContentControl, Content: string}) => void): void;
    on(
        obj: Word.Document, event: 'ContentControlBeforeDelete', argNames: ['OldContentControl', 'InUndoRedo'], handler: (
            this: Word.Document, parameter: {readonly OldContentControl: Word.ContentControl, readonly InUndoRedo: boolean}) => void): void;
    on(obj: Word.Document, event: 'ContentControlOnEnter', argNames: ['ContentControl'], handler: (this: Word.Document, parameter: {readonly ContentControl: Word.ContentControl}) => void): void;
    on(
        obj: Word.Document, event: 'ContentControlOnExit', argNames: ['ContentControl', 'Cancel'], handler: (
            this: Word.Document, parameter: {readonly ContentControl: Word.ContentControl, Cancel: boolean}) => void): void;
    on(obj: Word.Document, event: 'Sync', argNames: ['SyncEventType'], handler: (this: Word.Document, parameter: {readonly SyncEventType: Office.MsoSyncEventType}) => void): void;
    on(
        obj: Word.Document, event: 'XMLAfterInsert', argNames: ['NewXMLNode', 'InUndoRedo'], handler: (
            this: Word.Document, parameter: {readonly NewXMLNode: Word.XMLNode, readonly InUndoRedo: boolean}) => void): void;
    on(
        obj: Word.Document, event: 'XMLBeforeDelete', argNames: ['DeletedRange', 'OldXMLNode', 'InUndoRedo'], handler: (
            this: Word.Document, parameter: {readonly DeletedRange: Word.Range, readonly OldXMLNode: Word.XMLNode, readonly InUndoRedo: boolean}) => void): void;
    on(obj: Word.Application, event: 'AddRef' | 'DocumentChange' | 'Quit' | 'Release' | 'Startup', handler: (this: Word.Application, parameter: {}) => void): void;
    on(obj: Word.Document, event: 'Close' | 'New' | 'Open', handler: (this: Word.Document, parameter: {}) => void): void;
    on(obj: Word.OLEControl, event: 'GotFocus' | 'LostFocus', handler: (this: Word.OLEControl, parameter: {}) => void): void;
    set(obj: Word.Document, propertyName: 'ActiveWritingStyle', parameterTypes: [any], newValue: string): void;
    set(obj: Word.Document, propertyName: 'Compatibility', parameterTypes: [Word.WdCompatibility], newValue: boolean): void;
    set(obj: Word.System, propertyName: 'PrivateProfileString', parameterTypes: [string, string, string], newValue: string): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'Word.Application': Word.Application;
    'Word.Document': Word.Document;
}

interface EnumeratorConstructor {
    new(col: Word.AddIns): Enumerator<Word.AddIn>;
    new(col: Word.AutoCaptions): Enumerator<Word.AutoCaption>;
    new(col: Word.AutoCorrectEntries): Enumerator<Word.AutoCorrectEntry>;
    new(col: Word.AutoTextEntries): Enumerator<Word.AutoTextEntry>;
    new(col: Word.Bookmarks): Enumerator<Word.Bookmark>;
    new(col: Word.Borders): Enumerator<Word.Border>;
    new(col: Word.Breaks): Enumerator<Word.Break>;
    new(col: Word.CanvasShapes | Word.GroupShapes | Word.ShapeRange | Word.Shapes): Enumerator<Word.Shape>;
    new(col: Word.CaptionLabels): Enumerator<Word.CaptionLabel>;
    new(col: Word.Cells): Enumerator<Word.Cell>;
    new(col: Word.Characters | Word.ProofreadingErrors | Word.Sentences | Word.StoryRanges | Word.Words): Enumerator<Word.Range>;
    new(col: Word.CoAuthLocks): Enumerator<Word.CoAuthLock>;
    new(col: Word.CoAuthors): Enumerator<Word.CoAuthor>;
    new(col: Word.CoAuthUpdates): Enumerator<Word.CoAuthUpdate>;
    new(col: Word.Columns): Enumerator<Word.Column>;
    new(col: Word.Comments): Enumerator<Word.Comment>;
    new(col: Word.Conflicts): Enumerator<Word.Conflict>;
    new(col: Word.ContentControlListEntries): Enumerator<Word.ContentControlListEntry>;
    new(col: Word.ContentControls): Enumerator<Word.ContentControl>;
    new(col: Word.CustomLabels): Enumerator<Word.CustomLabel>;
    new(col: Word.CustomProperties): Enumerator<Word.CustomProperty>;
    new(col: Word.DiagramNodeChildren | Word.DiagramNodes): Enumerator<Word.DiagramNode>;
    new(col: Word.Dialogs): Enumerator<Word.Dialog>;
    new(col: Word.Dictionaries | Word.HangulHanjaConversionDictionaries): Enumerator<Word.Dictionary>;
    new(col: Word.Documents): Enumerator<Word.Document>;
    new(col: Word.EmailSignatureEntries): Enumerator<Word.EmailSignatureEntry>;
    new(col: Word.Endnotes): Enumerator<Word.Endnote>;
    new(col: Word.Fields): Enumerator<Word.Field>;
    new(col: Word.FileConverters): Enumerator<Word.FileConverter>;
    new(col: Word.FirstLetterExceptions): Enumerator<Word.FirstLetterException>;
    new(col: Word.FontNames): Enumerator<string>;
    new(col: Word.Footnotes): Enumerator<Word.Footnote>;
    new(col: Word.FormFields): Enumerator<Word.FormField>;
    new(col: Word.Frames): Enumerator<Word.Frame>;
    new(col: Word.HangulAndAlphabetExceptions): Enumerator<Word.HangulAndAlphabetException>;
    new(col: Word.HeadersFooters): Enumerator<Word.HeaderFooter>;
    new(col: Word.HeadingStyles): Enumerator<Word.HeadingStyle>;
    new(col: Word.HTMLDivisions): Enumerator<Word.HTMLDivision>;
    new(col: Word.Hyperlinks): Enumerator<Word.Hyperlink>;
    new(col: Word.Indexes): Enumerator<Word.Index>;
    new(col: Word.InlineShapes): Enumerator<Word.InlineShape>;
    new(col: Word.KeyBindings | Word.KeysBoundTo): Enumerator<Word.KeyBinding>;
    new(col: Word.Languages): Enumerator<Word.Language>;
    new(col: Word.Lines): Enumerator<Word.Line>;
    new(col: Word.ListEntries): Enumerator<Word.ListEntry>;
    new(col: Word.ListGalleries): Enumerator<Word.ListGallery>;
    new(col: Word.ListLevels): Enumerator<Word.ListLevel>;
    new(col: Word.ListParagraphs | Word.Paragraphs): Enumerator<Word.Paragraph>;
    new(col: Word.Lists): Enumerator<Word.List>;
    new(col: Word.ListTemplates): Enumerator<Word.ListTemplate>;
    new(col: Word.MailMergeDataFields): Enumerator<Word.MailMergeDataField>;
    new(col: Word.MailMergeFieldNames): Enumerator<Word.MailMergeFieldName>;
    new(col: Word.MailMergeFields): Enumerator<Word.MailMergeField>;
    new(col: Word.MappedDataFields): Enumerator<Word.MappedDataField>;
    new(col: Word.OMathAutoCorrectEntries): Enumerator<Word.OMathAutoCorrectEntry>;
    new(col: Word.OMathFunctions): Enumerator<Word.OMathFunction>;
    new(col: Word.OMathMatCols): Enumerator<Word.OMathMatCol>;
    new(col: Word.OMathMatRows): Enumerator<Word.OMathMatRow>;
    new(col: Word.OMathRecognizedFunctions): Enumerator<Word.OMathRecognizedFunction>;
    new(col: Word.OMaths): Enumerator<Word.OMath>;
    new(col: Word.OtherCorrectionsExceptions): Enumerator<Word.OtherCorrectionsException>;
    new(col: Word.PageNumbers): Enumerator<Word.PageNumber>;
    new(col: Word.Pages): Enumerator<Word.Page>;
    new(col: Word.Panes): Enumerator<Word.Pane>;
    new(col: Word.ProtectedViewWindows): Enumerator<Word.ProtectedViewWindow>;
    new(col: Word.ReadabilityStatistics): Enumerator<Word.ReadabilityStatistic>;
    new(col: Word.RecentFiles): Enumerator<Word.RecentFile>;
    new(col: Word.Rectangles): Enumerator<Word.Rectangle>;
    new(col: Word.Reviewers): Enumerator<Word.Reviewer>;
    new(col: Word.Revisions): Enumerator<Word.Revision>;
    new(col: Word.Rows): Enumerator<Word.Row>;
    new(col: Word.Sections): Enumerator<Word.Section>;
    new(col: Word.ShapeNodes): Enumerator<Word.ShapeNode>;
    new(col: Word.SmartTagActions): Enumerator<Word.SmartTagAction>;
    new(col: Word.SmartTagRecognizers): Enumerator<Word.SmartTagRecognizer>;
    new(col: Word.SmartTags): Enumerator<Word.SmartTag>;
    new(col: Word.SmartTagTypes): Enumerator<Word.SmartTagType>;
    new(col: Word.Sources): Enumerator<Word.Source>;
    new(col: Word.SpellingSuggestions): Enumerator<Word.SpellingSuggestion>;
    new(col: Word.Styles): Enumerator<Word.Style>;
    new(col: Word.StyleSheets): Enumerator<Word.StyleSheet>;
    new(col: Word.Subdocuments): Enumerator<Word.Subdocument>;
    new(col: Word.Tables): Enumerator<Word.Table>;
    new(col: Word.TablesOfAuthorities): Enumerator<Word.TableOfAuthorities>;
    new(col: Word.TablesOfAuthoritiesCategories): Enumerator<Word.TableOfAuthoritiesCategory>;
    new(col: Word.TablesOfContents): Enumerator<Word.TableOfContents>;
    new(col: Word.TablesOfFigures): Enumerator<Word.TableOfFigures>;
    new(col: Word.TabStops): Enumerator<Word.TabStop>;
    new(col: Word.TaskPanes): Enumerator<Word.TaskPane>;
    new(col: Word.Tasks): Enumerator<Word.Task>;
    new(col: Word.Templates): Enumerator<Word.Template>;
    new(col: Word.TextColumns): Enumerator<Word.TextColumn>;
    new(col: Word.TwoInitialCapsExceptions): Enumerator<Word.TwoInitialCapsException>;
    new(col: Word.Variables): Enumerator<Word.Variable>;
    new(col: Word.Versions): Enumerator<Word.Version>;
    new(col: Word.Windows): Enumerator<Word.Window>;
    new(col: Word.XMLChildNodeSuggestions): Enumerator<Word.XMLChildNodeSuggestion>;
    new(col: Word.XMLNamespaces): Enumerator<Word.XMLNamespace>;
    new(col: Word.XMLNodes): Enumerator<Word.XMLNode>;
    new(col: Word.XMLSchemaReferences): Enumerator<Word.XMLSchemaReference>;
    new(col: Word.XSLTransforms): Enumerator<Word.XSLTransform>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
