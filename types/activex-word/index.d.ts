// Type definitions for Microsoft Word 14.0 Object Library - Word 14.0
// Project: https://msdn.microsoft.com/en-us/library/fp179696.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        public readonly Application: Application;
        public readonly Autoload: boolean;
        public readonly Compiled: boolean;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public Installed: boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Path: string;
    }

    class AddIns {
        private 'Word.AddIns_typekey': AddIns;
        private constructor();
        public Add(FileName: string, Install?: any): AddIn;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): AddIn;
        public readonly Parent: any;
        public Unload(RemoveFromList: boolean): void;
    }

    class Adjustments {
        private 'Word.Adjustments_typekey': Adjustments;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): number;
        public readonly Parent: any;
    }

    class Application {
        private 'Word.Application_typekey': Application;
        private constructor();
        public Activate(): void;
        public readonly ActiveDocument: Document;
        public readonly ActiveEncryptionSession: number;
        public ActivePrinter: string;
        public readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        public readonly ActiveWindow: Window;
        public AddAddress(TagID: SafeArray<string>, Value: SafeArray<string>): void;
        public readonly AddIns: AddIns;
        public readonly AnswerWizard: Office.AnswerWizard;
        public readonly Application: Application;
        public readonly ArbitraryXMLSupportAvailable: boolean;
        public readonly Assistance: Office.IAssistance;
        public readonly Assistant: Office.Assistant;
        public readonly AutoCaptions: AutoCaptions;
        public readonly AutoCorrect: AutoCorrect;
        public readonly AutoCorrectEmail: AutoCorrect;
        public AutomaticChange(): void;
        public AutomationSecurity: Office.MsoAutomationSecurity;
        public readonly BackgroundPrintingStatus: number;
        public readonly BackgroundSavingStatus: number;
        public readonly Bibliography: Bibliography;
        public BrowseExtraFileTypes: string;
        public readonly Browser: Browser;
        public readonly Build: string;
        public readonly BuildFeatureCrew: string;
        public readonly BuildFull: string;
        public BuildKeyCode(Arg1: WdKey, Arg2?: any, Arg3?: any, Arg4?: any): number;
        public readonly CapsLock: boolean;
        public Caption: string;
        public readonly CaptionLabels: CaptionLabels;
        public CentimetersToPoints(Centimeters: number): number;
        public ChangeFileOpenDirectory(Path: string): void;
        public CheckGrammar(String: string): boolean;
        public CheckLanguage: boolean;
        public CheckSpelling(
            Word: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any,
            CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): boolean;
        public CleanString(String: string): string;
        public readonly COMAddIns: Office.COMAddIns;
        public readonly CommandBars: Office.CommandBars;

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
        public CompareDocuments(
            OriginalDocument: Document, RevisedDocument: Document, Destination?: WdCompareDestination, Granularity?: WdGranularity, CompareFormatting?: boolean,
            CompareCaseChanges?: boolean, CompareWhitespace?: boolean, CompareTables?: boolean, CompareHeaders?: boolean, CompareFootnotes?: boolean,
            CompareTextboxes?: boolean, CompareFields?: boolean, CompareComments?: boolean, CompareMoves?: boolean, RevisedAuthor?: string, IgnoreAllComparisonWarnings?: boolean): Document;
        public readonly Creator: number;
        public readonly CustomDictionaries: Dictionaries;
        public CustomizationContext: any;
        public DDEExecute(Channel: number, Command: string): void;
        public DDEInitiate(App: string, Topic: string): number;
        public DDEPoke(Channel: number, Item: string, Data: string): void;
        public DDERequest(Channel: number, Item: string): string;
        public DDETerminate(Channel: number): void;
        public DDETerminateAll(): void;
        public DefaultLegalBlackline: boolean;
        public DefaultSaveFormat: string;
        public DefaultTableSeparator: string;
        public DefaultWebOptions(): DefaultWebOptions;
        public readonly Dialogs: Dialogs;
        public DiscussionSupport(Range: any, cid: any, piCSE: any): void;
        public DisplayAlerts: WdAlertLevel;
        public DisplayAutoCompleteTips: boolean;
        public DisplayDocumentInformationPanel: boolean;
        public DisplayRecentFiles: boolean;
        public DisplayScreenTips: boolean;
        public DisplayScrollBars: boolean;
        public DisplayStatusBar: boolean;
        public readonly Documents: Documents;
        public DontResetInsertionPointProperties: boolean;
        public readonly Dummy1: boolean;
        public Dummy2(): boolean;
        public Dummy4(): void;
        public readonly EmailOptions: EmailOptions;
        public EmailTemplate: string;
        public EnableCancelKey: WdEnableCancelKey;
        public FeatureInstall: Office.MsoFeatureInstall;
        public readonly FileConverters: FileConverters;
        public FileDialog(FileDialogType: Office.MsoFileDialogType): Office.FileDialog;
        public readonly FileSearch: Office.FileSearch;
        public FileValidation: Office.MsoFileValidationMode;
        public FindKey(KeyCode: number, KeyCode2?: any): KeyBinding;
        public readonly FocusInMailHeader: boolean;
        public readonly FontNames: FontNames;
        public GetAddress(
            Name?: any, AddressProperties?: any, UseAutoText?: any, DisplaySelectDialog?: any, SelectDialog?: any, CheckNamesDialog?: any, RecentAddressesChoice?: any,
            UpdateRecentAddresses?: any): string;
        public GetDefaultTheme(DocumentType: WdDocumentMedium): string;
        public GetSpellingSuggestions(
            Word: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any,
            CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any,
            CustomDictionary10?: any): SpellingSuggestions;
        public GoBack(): void;
        public GoForward(): void;
        public readonly HangulHanjaDictionaries: HangulHanjaConversionDictionaries;
        public Height: number;
        public Help(HelpType: any): void;
        public HelpTool(): void;
        public InchesToPoints(Inches: number): number;
        public International(Index: WdInternationalIndex): any;
        public IsObjectValid(Object: any): boolean;
        public readonly IsSandboxed: boolean;
        public readonly KeyBindings: KeyBindings;

        /** @param number [LangId=0] */
        public Keyboard(LangId?: number): number;
        public KeyboardBidi(): void;
        public KeyboardLatin(): void;
        public KeysBoundTo(KeyCategory: WdKeyCategory, Command: string, CommandParameter?: any): KeysBoundTo;
        public KeyString(KeyCode: number, KeyCode2?: any): string;
        public readonly LandscapeFontNames: FontNames;
        public readonly Language: Office.MsoLanguageID;
        public readonly Languages: Languages;
        public readonly LanguageSettings: Office.LanguageSettings;
        public Left: number;
        public LinesToPoints(Lines: number): number;
        public ListCommands(ListAllCommands: boolean): void;
        public readonly ListGalleries: ListGalleries;
        public LoadMasterList(FileName: string): void;
        public LookupNameProperties(Name: string): void;
        public readonly MacroContainer: any;
        public readonly MailingLabel: MailingLabel;
        public readonly MailMessage: MailMessage;
        public readonly MailSystem: WdMailSystem;
        public readonly MAPIAvailable: boolean;
        public readonly MathCoprocessorAvailable: boolean;

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
        public MergeDocuments(
            OriginalDocument: Document, RevisedDocument: Document, Destination?: WdCompareDestination, Granularity?: WdGranularity, CompareFormatting?: boolean,
            CompareCaseChanges?: boolean, CompareWhitespace?: boolean, CompareTables?: boolean, CompareHeaders?: boolean, CompareFootnotes?: boolean,
            CompareTextboxes?: boolean, CompareFields?: boolean, CompareComments?: boolean, CompareMoves?: boolean, OriginalAuthor?: string, RevisedAuthor?: string,
            FormatFrom?: WdMergeFormatFrom): Document;
        public MillimetersToPoints(Millimeters: number): number;
        public MountVolume(Zone: string, Server: string, Volume: string, User?: any, UserPassword?: any, VolumePassword?: any): number;
        public readonly MouseAvailable: boolean;
        public Move(Left: number, Top: number): void;
        public readonly Name: string;
        public readonly NewDocument: Office.NewFile;
        public NewWindow(): Window;
        public NextLetter(): void;
        public readonly NormalTemplate: Template;
        public readonly NumLock: boolean;
        public readonly OMathAutoCorrect: OMathAutoCorrect;
        public OnTime(When: any, Name: string, Tolerance?: any): void;
        public OpenAttachmentsInFullScreen: boolean;
        public readonly Options: Options;
        public OrganizerCopy(Source: string, Destination: string, Name: string, Object: WdOrganizerObject): void;
        public OrganizerDelete(Source: string, Name: string, Object: WdOrganizerObject): void;
        public OrganizerRename(Source: string, Name: string, NewName: string, Object: WdOrganizerObject): void;
        public readonly Parent: any;
        public readonly Path: string;
        public readonly PathSeparator: string;
        public PicasToPoints(Picas: number): number;
        public readonly PickerDialog: Office.PickerDialog;
        public PixelsToPoints(Pixels: number, fVertical?: any): number;
        public PointsToCentimeters(Points: number): number;
        public PointsToInches(Points: number): number;
        public PointsToLines(Points: number): number;
        public PointsToMillimeters(Points: number): number;
        public PointsToPicas(Points: number): number;
        public PointsToPixels(Points: number, fVertical?: any): number;
        public readonly PortraitFontNames: FontNames;
        public PrintOut(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any,
            PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;
        public PrintOut2000(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any,
            PrintZoomPaperWidth?: any, PrintZoomPaperHeight?: any): void;
        public PrintOutOld(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, FileName?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;
        public PrintPreview: boolean;
        public ProductCode(): string;
        public readonly ProtectedViewWindows: ProtectedViewWindows;
        public PutFocusInMailHeader(): void;
        public Quit(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;
        public readonly RecentFiles: RecentFiles;
        public Repeat(Times?: any): boolean;
        public ResetIgnoreAll(): void;
        public Resize(Width: number, Height: number): void;
        public RestrictLinkedStyles: boolean;
        public Run(
            MacroName: string, varg1?: any, varg2?: any, varg3?: any, varg4?: any, varg5?: any, varg6?: any, varg7?: any, varg8?: any, varg9?: any, varg10?: any,
            varg11?: any, varg12?: any, varg13?: any, varg14?: any, varg15?: any, varg16?: any, varg17?: any, varg18?: any, varg19?: any, varg20?: any, varg21?: any,
            varg22?: any, varg23?: any, varg24?: any, varg25?: any, varg26?: any, varg27?: any, varg28?: any, varg29?: any, varg30?: any): any;
        public RunOld(MacroName: string): void;
        public ScreenRefresh(): void;
        public ScreenUpdating: boolean;
        public readonly Selection: Selection;
        public SendFax(): void;
        public SetDefaultTheme(Name: string, DocumentType: WdDocumentMedium): void;
        public ShowClipboard(): void;
        public ShowMe(): void;
        public ShowStartupDialog: boolean;
        public ShowStylePreviews: boolean;
        public ShowVisualBasicEditor: boolean;
        public ShowWindowsInTaskbar: boolean;
        public readonly SmartArtColors: Office.SmartArtColors;
        public readonly SmartArtLayouts: Office.SmartArtLayouts;
        public readonly SmartArtQuickStyles: Office.SmartArtQuickStyles;
        public readonly SmartTagRecognizers: SmartTagRecognizers;
        public readonly SmartTagTypes: SmartTagTypes;
        public readonly SpecialMode: boolean;
        public StartupPath: string;
        public readonly StatusBar: string;
        public SubstituteFont(UnavailableFont: string, SubstituteFont: string): void;
        public SynonymInfo(Word: string, LanguageID?: any): SynonymInfo;
        public readonly System: System;
        public readonly TaskPanes: TaskPanes;
        public readonly Tasks: Tasks;
        public readonly Templates: Templates;
        public ThreeWayMerge(LocalDocument: Document, ServerDocument: Document, BaseDocument: Document, FavorSource: boolean): void;
        public ToggleKeyboard(): void;
        public Top: number;
        public readonly UndoRecord: UndoRecord;
        public readonly UsableHeight: number;
        public readonly UsableWidth: number;
        public UserAddress: string;
        public readonly UserControl: boolean;
        public UserInitials: string;
        public UserName: string;
        public readonly VBE: VBIDE.VBE;
        public readonly Version: string;
        public Visible: boolean;
        public Width: number;
        public readonly Windows: Windows;
        public WindowState: WdWindowState;
        public readonly WordBasic: any;
        public readonly XMLNamespaces: XMLNamespaces;
    }

    class AutoCaption {
        private 'Word.AutoCaption_typekey': AutoCaption;
        private constructor();
        public readonly Application: Application;
        public AutoInsert: boolean;
        public CaptionLabel: any;
        public readonly Creator: number;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class AutoCaptions {
        private 'Word.AutoCaptions_typekey': AutoCaptions;
        private constructor();
        public readonly Application: Application;
        public CancelAutoInsert(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): AutoCaption;
        public readonly Parent: any;
    }

    class AutoCorrect {
        private 'Word.AutoCorrect_typekey': AutoCorrect;
        private constructor();
        public readonly Application: Application;
        public CorrectCapsLock: boolean;
        public CorrectDays: boolean;
        public CorrectHangulAndAlphabet: boolean;
        public CorrectInitialCaps: boolean;
        public CorrectKeyboardSetting: boolean;
        public CorrectSentenceCaps: boolean;
        public CorrectTableCells: boolean;
        public readonly Creator: number;
        public DisplayAutoCorrectOptions: boolean;
        public readonly Entries: AutoCorrectEntries;
        public FirstLetterAutoAdd: boolean;
        public readonly FirstLetterExceptions: FirstLetterExceptions;
        public HangulAndAlphabetAutoAdd: boolean;
        public readonly HangulAndAlphabetExceptions: HangulAndAlphabetExceptions;
        public OtherCorrectionsAutoAdd: boolean;
        public readonly OtherCorrectionsExceptions: OtherCorrectionsExceptions;
        public readonly Parent: any;
        public ReplaceText: boolean;
        public ReplaceTextFromSpellingChecker: boolean;
        public TwoInitialCapsAutoAdd: boolean;
        public readonly TwoInitialCapsExceptions: TwoInitialCapsExceptions;
    }

    class AutoCorrectEntries {
        private 'Word.AutoCorrectEntries_typekey': AutoCorrectEntries;
        private constructor();
        public Add(Name: string, Value: string): AutoCorrectEntry;
        public AddRichText(Name: string, Range: Range): AutoCorrectEntry;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): AutoCorrectEntry;
        public readonly Parent: any;
    }

    class AutoCorrectEntry {
        private 'Word.AutoCorrectEntry_typekey': AutoCorrectEntry;
        private constructor();
        public readonly Application: Application;
        public Apply(Range: Range): void;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public Name: string;
        public readonly Parent: any;
        public readonly RichText: boolean;
        public Value: string;
    }

    class AutoTextEntries {
        private 'Word.AutoTextEntries_typekey': AutoTextEntries;
        private constructor();
        public Add(Name: string, Range: Range): AutoTextEntry;
        public AppendToSpike(Range: Range): AutoTextEntry;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): AutoTextEntry;
        public readonly Parent: any;
    }

    class AutoTextEntry {
        private 'Word.AutoTextEntry_typekey': AutoTextEntry;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public Insert(Where: Range, RichText?: any): Range;
        public Name: string;
        public readonly Parent: any;
        public readonly StyleName: string;
        public Value: string;
    }

    class Bibliography {
        private 'Word.Bibliography_typekey': Bibliography;
        private constructor();
        public readonly Application: Application;
        public BibliographyStyle: string;
        public readonly Creator: number;
        public GenerateUniqueTag(): string;
        public readonly Parent: any;
        public readonly Sources: Sources;
    }

    class Bookmark {
        private 'Word.Bookmark_typekey': Bookmark;
        private constructor();
        public readonly Application: Application;
        public readonly Column: boolean;
        public Copy(Name: string): Bookmark;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Empty: boolean;
        public End: number;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Range: Range;
        public Select(): void;
        public Start: number;
        public readonly StoryType: WdStoryType;
    }

    class Bookmarks {
        private 'Word.Bookmarks_typekey': Bookmarks;
        private constructor();
        public Add(Name: string, Range?: any): Bookmark;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public DefaultSorting: WdBookmarkSortBy;
        public Exists(Name: string): boolean;
        public Item(Index: any): Bookmark;
        public readonly Parent: any;
        public ShowHidden: boolean;
    }

    class Border {
        private 'Word.Border_typekey': Border;
        private constructor();
        public readonly Application: Application;
        public ArtStyle: WdPageBorderArt;
        public ArtWidth: number;
        public Color: WdColor;
        public ColorIndex: WdColorIndex;
        public readonly Creator: number;
        public readonly Inside: boolean;
        public LineStyle: WdLineStyle;
        public LineWidth: WdLineWidth;
        public readonly Parent: any;
        public Visible: boolean;
    }

    class Borders {
        private 'Word.Borders_typekey': Borders;
        private constructor();
        public AlwaysInFront: boolean;
        public readonly Application: Application;
        public ApplyPageBordersToAllSections(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public DistanceFrom: WdBorderDistanceFrom;
        public DistanceFromBottom: number;
        public DistanceFromLeft: number;
        public DistanceFromRight: number;
        public DistanceFromTop: number;
        public Enable: number;
        public EnableFirstPageInSection: boolean;
        public EnableOtherPagesInSection: boolean;
        public readonly HasHorizontal: boolean;
        public readonly HasVertical: boolean;
        public InsideColor: WdColor;
        public InsideColorIndex: WdColorIndex;
        public InsideLineStyle: WdLineStyle;
        public InsideLineWidth: WdLineWidth;
        public Item(Index: WdBorderType): Border;
        public JoinBorders: boolean;
        public OutsideColor: WdColor;
        public OutsideColorIndex: WdColorIndex;
        public OutsideLineStyle: WdLineStyle;
        public OutsideLineWidth: WdLineWidth;
        public readonly Parent: any;
        public Shadow: boolean;
        public SurroundFooter: boolean;
        public SurroundHeader: boolean;
    }

    class Break {
        private 'Word.Break_typekey': Break;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly PageIndex: number;
        public readonly Parent: any;
        public readonly Range: Range;
    }

    class Breaks {
        private 'Word.Breaks_typekey': Breaks;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Break;
        public readonly Parent: any;
    }

    class Browser {
        private 'Word.Browser_typekey': Browser;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Next(): void;
        public readonly Parent: any;
        public Previous(): void;
        public Target: WdBrowseTarget;
    }

    class BuildingBlock {
        private 'Word.BuildingBlock_typekey': BuildingBlock;
        private constructor();
        public readonly Application: Application;
        public readonly Category: Category;
        public readonly Creator: number;
        public Delete(): void;
        public Description: string;
        public readonly ID: string;
        public readonly Index: number;
        public Insert(Where: Range, RichText?: any): Range;
        public InsertOptions: number;
        public Name: string;
        public readonly Parent: any;
        public readonly Type: BuildingBlockType;
        public Value: string;
    }

    class BuildingBlockEntries {
        private 'Word.BuildingBlockEntries_typekey': BuildingBlockEntries;
        private constructor();

        /** @param Word.WdDocPartInsertOptions [InsertOptions=0] */
        public Add(Name: string, Type: WdBuildingBlockTypes, Category: string, Range: Range, Description: any, InsertOptions?: WdDocPartInsertOptions): BuildingBlock;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): BuildingBlock;
        public readonly Parent: any;
    }

    class BuildingBlocks {
        private 'Word.BuildingBlocks_typekey': BuildingBlocks;
        private constructor();

        /** @param Word.WdDocPartInsertOptions [InsertOptions=0] */
        public Add(Name: string, Range: Range, Description: any, InsertOptions?: WdDocPartInsertOptions): BuildingBlock;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): BuildingBlock;
        public readonly Parent: any;
    }

    class BuildingBlockType {
        private 'Word.BuildingBlockType_typekey': BuildingBlockType;
        private constructor();
        public readonly Application: Application;
        public readonly Categories: Categories;
        public readonly Creator: number;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class BuildingBlockTypes {
        private 'Word.BuildingBlockTypes_typekey': BuildingBlockTypes;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: WdBuildingBlockTypes): BuildingBlockType;
        public readonly Parent: any;
    }

    class CalloutFormat {
        private 'Word.CalloutFormat_typekey': CalloutFormat;
        private constructor();
        public Accent: Office.MsoTriState;
        public Angle: Office.MsoCalloutAngleType;
        public readonly Application: Application;
        public AutoAttach: Office.MsoTriState;
        public readonly AutoLength: Office.MsoTriState;
        public AutomaticLength(): void;
        public Border: Office.MsoTriState;
        public readonly Creator: number;
        public CustomDrop(Drop: number): void;
        public CustomLength(Length: number): void;
        public readonly Drop: number;
        public readonly DropType: Office.MsoCalloutDropType;
        public Gap: number;
        public readonly Length: number;
        public readonly Parent: any;
        public PresetDrop(DropType: Office.MsoCalloutDropType): void;
        public Type: Office.MsoCalloutType;
    }

    class CanvasShapes {
        private 'Word.CanvasShapes_typekey': CanvasShapes;
        private constructor();
        public AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        public AddCurve(SafeArrayOfPoints: any): Shape;
        public AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        public AddPicture(FileName: string, LinkToFile?: any, SaveWithDocument?: any, Left?: any, Top?: any, Width?: any, Height?: any): Shape;
        public AddPolyline(SafeArrayOfPoints: any): Shape;
        public AddShape(Type: number, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number): Shape;
        public readonly Application: Application;
        public BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Shape;
        public readonly Parent: any;
        public Range(Index: any): ShapeRange;
        public SelectAll(): void;
    }

    class CaptionLabel {
        private 'Word.CaptionLabel_typekey': CaptionLabel;
        private constructor();
        public readonly Application: Application;
        public readonly BuiltIn: boolean;
        public ChapterStyleLevel: number;
        public readonly Creator: number;
        public Delete(): void;
        public readonly ID: WdCaptionLabelID;
        public IncludeChapterNumber: boolean;
        public readonly Name: string;
        public NumberStyle: WdCaptionNumberStyle;
        public readonly Parent: any;
        public Position: WdCaptionPosition;
        public Separator: WdSeparatorType;
    }

    class CaptionLabels {
        private 'Word.CaptionLabels_typekey': CaptionLabels;
        private constructor();
        public Add(Name: string): CaptionLabel;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): CaptionLabel;
        public readonly Parent: any;
    }

    class Categories {
        private 'Word.Categories_typekey': Categories;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Category;
        public readonly Parent: any;
    }

    class Category {
        private 'Word.Category_typekey': Category;
        private constructor();
        public readonly Application: Application;
        public readonly BuildingBlocks: BuildingBlocks;
        public readonly Creator: number;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Type: BuildingBlockType;
    }

    class Cell {
        private 'Word.Cell_typekey': Cell;
        private constructor();
        public readonly Application: Application;
        public AutoSum(): void;
        public Borders: Borders;
        public BottomPadding: number;
        public readonly Column: Column;
        public readonly ColumnIndex: number;
        public readonly Creator: number;
        public Delete(ShiftCells?: any): void;
        public FitText: boolean;
        public Formula(Formula?: any, NumFormat?: any): void;
        public Height: number;
        public HeightRule: WdRowHeightRule;
        public ID: string;
        public LeftPadding: number;
        public Merge(MergeTo: Cell): void;
        public readonly NestingLevel: number;
        public readonly Next: Cell;
        public readonly Parent: any;
        public PreferredWidth: number;
        public PreferredWidthType: WdPreferredWidthType;
        public readonly Previous: Cell;
        public readonly Range: Range;
        public RightPadding: number;
        public readonly Row: Row;
        public readonly RowIndex: number;
        public Select(): void;
        public SetHeight(RowHeight: any, HeightRule: WdRowHeightRule): void;
        public SetWidth(ColumnWidth: number, RulerStyle: WdRulerStyle): void;
        public readonly Shading: Shading;
        public Split(NumRows?: any, NumColumns?: any): void;
        public readonly Tables: Tables;
        public TopPadding: number;
        public VerticalAlignment: WdCellVerticalAlignment;
        public Width: number;
        public WordWrap: boolean;
    }

    class Cells {
        private 'Word.Cells_typekey': Cells;
        private constructor();
        public Add(BeforeCell?: any): Cell;
        public readonly Application: Application;
        public AutoFit(): void;
        public Borders: Borders;
        public readonly Count: number;
        public readonly Creator: number;
        public Delete(ShiftCells?: any): void;
        public DistributeHeight(): void;
        public DistributeWidth(): void;
        public Height: number;
        public HeightRule: WdRowHeightRule;
        public Item(Index: number): Cell;
        public Merge(): void;
        public readonly NestingLevel: number;
        public readonly Parent: any;
        public PreferredWidth: number;
        public PreferredWidthType: WdPreferredWidthType;
        public SetHeight(RowHeight: any, HeightRule: WdRowHeightRule): void;
        public SetWidth(ColumnWidth: number, RulerStyle: WdRulerStyle): void;
        public readonly Shading: Shading;
        public Split(NumRows?: any, NumColumns?: any, MergeBeforeSplit?: any): void;
        public VerticalAlignment: WdCellVerticalAlignment;
        public Width: number;
    }

    class Characters {
        private 'Word.Characters_typekey': Characters;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public readonly First: Range;
        public Item(Index: number): Range;
        public readonly Last: Range;
        public readonly Parent: any;
    }

    class Chart {
        private 'Word.Chart_typekey': Chart;
        private constructor();
        public readonly Application: any;
        public ApplyChartTemplate(FileName: string): void;
        public ApplyCustomType(ChartType: Office.XlChartType, TypeName?: any): void;

        /** @param Word.XlDataLabelsType [Type=2] */
        public ApplyDataLabels(
            Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any,
            ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;
        public ApplyLayout(Layout: number, ChartType?: any): void;
        public readonly Area3DGroup: ChartGroup;
        public AreaGroups(Index?: any): any;
        public AutoFormat(Gallery: number, Format?: any): void;
        public AutoScaling: boolean;

        /** @param Word.XlAxisGroup [AxisGroup=1] */
        public Axes(Type: any, AxisGroup?: XlAxisGroup): any;
        public readonly BackWall: Walls;
        public readonly Bar3DGroup: ChartGroup;
        public BarGroups(Index?: any): any;
        public BarShape: XlBarShape;
        public readonly ChartArea: ChartArea;
        public readonly ChartData: ChartData;
        public ChartGroups(Index?: any): any;
        public ChartStyle: any;
        public readonly ChartTitle: ChartTitle;
        public ChartType: Office.XlChartType;
        public ChartWizard(
            Source?: any, Gallery?: any, Format?: any, PlotBy?: any, CategoryLabels?: any, SeriesLabels?: any, HasLegend?: any, Title?: any, CategoryTitle?: any,
            ValueTitle?: any, ExtraTitle?: any): void;
        public ClearToMatchStyle(): void;
        public readonly Column3DGroup: ChartGroup;
        public ColumnGroups(Index?: any): any;
        public Copy(Before?: any, After?: any): void;

        /**
         * @param Word.XlPictureAppearance [Appearance=1]
         * @param Word.XlCopyPictureFormat [Format=-4147]
         * @param Word.XlPictureAppearance [Size=2]
         */
        public CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat, Size?: XlPictureAppearance): void;
        public readonly Corners: Corners;
        public readonly Creator: number;
        public readonly DataTable: DataTable;
        public Delete(): any;
        public DepthPercent: number;
        public DisplayBlanksAs: XlDisplayBlanksAs;
        public DoughnutGroups(Index?: any): any;
        public Elevation: number;
        public Export(FileName: string, FilterName?: any, Interactive?: any): boolean;
        public readonly Floor: Floor;
        public GapDepth: number;
        public GetChartElement(x: number, y: number, ElementID: number, Arg1: number, Arg2: number): void;
        public HasAxis(Index1?: any, Index2?: any): any;
        public HasDataTable: boolean;
        public HasLegend: boolean;
        public HasPivotFields: boolean;
        public HasTitle: boolean;
        public HeightPercent: number;
        public readonly Legend: Legend;
        public readonly Line3DGroup: ChartGroup;
        public LineGroups(Index?: any): any;
        public readonly Parent: any;
        public Paste(Type?: any): void;
        public Perspective: number;
        public readonly Pie3DGroup: ChartGroup;
        public PieGroups(Index?: any): any;
        public readonly PivotLayout: any;
        public readonly PlotArea: PlotArea;
        public PlotBy: XlRowCol;
        public PlotVisibleOnly: boolean;
        public RadarGroups(Index?: any): any;
        public Refresh(): void;
        public RightAngleAxes: any;
        public Rotation: any;
        public SaveChartTemplate(FileName: string): void;
        public Select(Replace?: any): any;
        public SeriesCollection(Index?: any): any;
        public SetBackgroundPicture(FileName: string): void;
        public SetDefaultChart(Name: any): void;
        public SetElement(Element: Office.MsoChartElementType): void;
        public SetSourceData(Source: string, PlotBy?: any): void;
        public readonly Shapes: any;
        public ShowAllFieldButtons: boolean;
        public ShowAxisFieldButtons: boolean;
        public ShowDataLabelsOverMaximum: boolean;
        public ShowLegendFieldButtons: boolean;
        public ShowReportFilterFieldButtons: boolean;
        public ShowValueFieldButtons: boolean;
        public readonly SideWall: Walls;
        public SubType: number;
        public readonly SurfaceGroup: ChartGroup;
        public Type: number;
        public readonly Walls: Walls;
        public XYGroups(Index?: any): any;
    }

    class ChartArea {
        private 'Word.ChartArea_typekey': ChartArea;
        private constructor();
        public readonly Application: any;
        public AutoScaleFont: any;
        public readonly Border: ChartBorder;
        public Clear(): any;
        public ClearContents(): any;
        public ClearFormats(): any;
        public Copy(): any;
        public readonly Creator: number;
        public readonly Fill: ChartFillFormat;
        public readonly Font: ChartFont;
        public readonly Format: ChartFormat;
        public Height: number;
        public readonly Interior: Interior;
        public Left: number;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
        public Shadow: boolean;
        public Top: number;
        public Width: number;
    }

    class ChartBorder {
        private 'Word.ChartBorder_typekey': ChartBorder;
        private constructor();
        public readonly Application: any;
        public Color: any;
        public ColorIndex: any;
        public readonly Creator: number;
        public LineStyle: any;
        public readonly Parent: any;
        public Weight: any;
    }

    class ChartCharacters {
        private 'Word.ChartCharacters_typekey': ChartCharacters;
        private constructor();
        public readonly Application: any;
        public Caption: string;
        public readonly Count: number;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Font: ChartFont;
        public Insert(String: string): any;
        public readonly Parent: any;
        public PhoneticCharacters: string;
        public Text: string;
    }

    class ChartColorFormat {
        private 'Word.ChartColorFormat_typekey': ChartColorFormat;
        private constructor();
        public readonly _Default: number;
        public readonly Application: any;
        public readonly Creator: number;
        public readonly Parent: any;
        public readonly RGB: number;
        public SchemeColor: number;
        public readonly Type: number;
    }

    class ChartData {
        private 'Word.ChartData_typekey': ChartData;
        private constructor();
        public Activate(): void;
        public BreakLink(): void;
        public readonly IsLinked: boolean;
        public readonly Workbook: any;
    }

    class ChartFillFormat {
        private 'Word.ChartFillFormat_typekey': ChartFillFormat;
        private constructor();
        public readonly Application: any;
        public readonly BackColor: ChartColorFormat;
        public readonly Creator: number;
        public readonly ForeColor: ChartColorFormat;
        public readonly GradientColorType: Office.MsoGradientColorType;
        public readonly GradientDegree: number;
        public readonly GradientStyle: Office.MsoGradientStyle;
        public readonly GradientVariant: number;
        public OneColorGradient(Style: Office.MsoGradientStyle, Variant: number, Degree: number): void;
        public readonly Parent: any;
        public readonly Pattern: Office.MsoPatternType;
        public Patterned(Pattern: Office.MsoPatternType): void;
        public PresetGradient(Style: Office.MsoGradientStyle, Variant: number, PresetGradientType: Office.MsoPresetGradientType): void;
        public readonly PresetGradientType: Office.MsoPresetGradientType;
        public readonly PresetTexture: Office.MsoPresetTexture;
        public PresetTextured(PresetTexture: Office.MsoPresetTexture): void;
        public Solid(): void;
        public readonly TextureName: string;
        public readonly TextureType: Office.MsoTextureType;
        public TwoColorGradient(Style: Office.MsoGradientStyle, Variant: number): void;
        public readonly Type: Office.MsoFillType;
        public UserPicture(PictureFile?: any, PictureFormat?: any, PictureStackUnit?: any, PicturePlacement?: any): void;
        public UserTextured(TextureFile: string): void;
        public Visible: Office.MsoTriState;
    }

    class ChartFont {
        private 'Word.ChartFont_typekey': ChartFont;
        private constructor();
        public readonly Application: any;
        public Background: any;
        public Bold: any;
        public Color: any;
        public ColorIndex: any;
        public readonly Creator: number;
        public FontStyle: any;
        public Italic: any;
        public Name: any;
        public OutlineFont: any;
        public readonly Parent: any;
        public Shadow: any;
        public Size: any;
        public StrikeThrough: any;
        public Subscript: any;
        public Superscript: any;
        public Underline: any;
    }

    class ChartFormat {
        private 'Word.ChartFormat_typekey': ChartFormat;
        private constructor();
        public readonly Application: any;
        public readonly Creator: number;
        public readonly Fill: FillFormat;
        public readonly Glow: GlowFormat;
        public readonly Line: LineFormat;
        public readonly Parent: any;
        public readonly PictureFormat: PictureFormat;
        public readonly Shadow: ShadowFormat;
        public readonly SoftEdge: SoftEdgeFormat;
        public readonly TextFrame2: Office.TextFrame2;
        public readonly ThreeD: ThreeDFormat;
    }

    class ChartGroup {
        private 'Word.ChartGroup_typekey': ChartGroup;
        private constructor();
        public readonly Application: any;
        public AxisGroup: XlAxisGroup;
        public BubbleScale: number;
        public readonly Creator: number;
        public DoughnutHoleSize: number;
        public readonly DownBars: DownBars;
        public readonly DropLines: DropLines;
        public FirstSliceAngle: number;
        public GapWidth: number;
        public Has3DShading: boolean;
        public HasDropLines: boolean;
        public HasHiLoLines: boolean;
        public HasRadarAxisLabels: boolean;
        public HasSeriesLines: boolean;
        public HasUpDownBars: boolean;
        public readonly HiLoLines: HiLoLines;
        public readonly Index: number;
        public Overlap: number;
        public readonly Parent: any;
        public readonly RadarAxisLabels: TickLabels;
        public SecondPlotSize: number;
        public SeriesCollection(Index?: any): any;
        public readonly SeriesLines: SeriesLines;
        public ShowNegativeBubbles: boolean;
        public SizeRepresents: XlSizeRepresents;
        public SplitType: XlChartSplitType;
        public SplitValue: any;
        public SubType: number;
        public Type: number;
        public readonly UpBars: UpBars;
        public VaryByCategories: boolean;
    }

    class ChartTitle {
        private 'Word.ChartTitle_typekey': ChartTitle;
        private constructor();
        public readonly Application: any;
        public AutoScaleFont: any;
        public readonly Border: ChartBorder;
        public Caption: string;
        public Characters(Start?: any, Length?: any): ChartCharacters;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Fill: ChartFillFormat;
        public readonly Font: ChartFont;
        public readonly Format: ChartFormat;
        public Formula: string;
        public FormulaLocal: string;
        public FormulaR1C1: string;
        public FormulaR1C1Local: string;
        public readonly Height: number;
        public HorizontalAlignment: any;
        public IncludeInLayout: boolean;
        public readonly Interior: Interior;
        public Left: number;
        public readonly Name: string;
        public Orientation: any;
        public readonly Parent: any;
        public Position: XlChartElementPosition;
        public ReadingOrder: number;
        public Select(): any;
        public Shadow: boolean;
        public Text: string;
        public Top: number;
        public VerticalAlignment: any;
        public readonly Width: number;
    }

    class CheckBox {
        private 'Word.CheckBox_typekey': CheckBox;
        private constructor();
        public readonly Application: Application;
        public AutoSize: boolean;
        public readonly Creator: number;
        public Default: boolean;
        public readonly Parent: any;
        public Size: number;
        public readonly Valid: boolean;
        public Value: boolean;
    }

    class CoAuthLock {
        private 'Word.CoAuthLock_typekey': CoAuthLock;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly HeaderFooter: boolean;
        public readonly Owner: CoAuthor;
        public readonly Parent: any;
        public readonly Range: Range;
        public readonly Type: WdLockType;
        public Unlock(): void;
    }

    class CoAuthLocks {
        private 'Word.CoAuthLocks_typekey': CoAuthLocks;
        private constructor();

        /** @param Word.WdLockType [Type=1] */
        public Add(Range: any, Type?: WdLockType): CoAuthLock;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): CoAuthLock;
        public readonly Parent: any;
        public RemoveEphemeralLocks(): void;
    }

    class CoAuthor {
        private 'Word.CoAuthor_typekey': CoAuthor;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly EmailAddress: string;
        public readonly ID: string;
        public readonly IsMe: boolean;
        public readonly Locks: CoAuthLocks;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class CoAuthoring {
        private 'Word.CoAuthoring_typekey': CoAuthoring;
        private constructor();
        public readonly Application: Application;
        public readonly Authors: CoAuthors;
        public readonly CanMerge: boolean;
        public readonly CanShare: boolean;
        public readonly Conflicts: Conflicts;
        public readonly Creator: number;
        public readonly Locks: CoAuthLocks;
        public readonly Me: CoAuthor;
        public readonly Parent: any;
        public readonly PendingUpdates: boolean;
        public readonly Updates: CoAuthUpdates;
    }

    class CoAuthors {
        private 'Word.CoAuthors_typekey': CoAuthors;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): CoAuthor;
        public readonly Parent: any;
    }

    class CoAuthUpdate {
        private 'Word.CoAuthUpdate_typekey': CoAuthUpdate;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Parent: any;
        public readonly Range: Range;
    }

    class CoAuthUpdates {
        private 'Word.CoAuthUpdates_typekey': CoAuthUpdates;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): CoAuthUpdate;
        public readonly Parent: any;
    }

    class ColorFormat {
        private 'Word.ColorFormat_typekey': ColorFormat;
        private constructor();
        public readonly Application: Application;
        public Black: number;
        public Brightness: number;
        public readonly Creator: number;
        public Cyan: number;
        public Ink(Index: number): number;
        public Magenta: number;
        public Name: string;
        public ObjectThemeColor: WdThemeColorIndex;
        public OverPrint: Office.MsoTriState;
        public readonly Parent: any;
        public RGB: number;
        public SchemeColor: number;
        public SetCMYK(Cyan: number, Magenta: number, Yellow: number, Black: number): void;
        public TintAndShade: number;
        public readonly Type: Office.MsoColorType;
        public Yellow: number;
    }

    class Column {
        private 'Word.Column_typekey': Column;
        private constructor();
        public readonly Application: Application;
        public AutoFit(): void;
        public Borders: Borders;
        public readonly Cells: Cells;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly IsFirst: boolean;
        public readonly IsLast: boolean;
        public readonly NestingLevel: number;
        public readonly Next: Column;
        public readonly Parent: any;
        public PreferredWidth: number;
        public PreferredWidthType: WdPreferredWidthType;
        public readonly Previous: Column;
        public Select(): void;
        public SetWidth(ColumnWidth: number, RulerStyle: WdRulerStyle): void;
        public readonly Shading: Shading;
        public Sort(
            ExcludeHeader?: any, SortFieldType?: any, SortOrder?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any,
            IgnoreHe?: any, LanguageID?: any): void;
        public SortOld(ExcludeHeader?: any, SortFieldType?: any, SortOrder?: any, CaseSensitive?: any, LanguageID?: any): void;
        public Width: number;
    }

    class Columns {
        private 'Word.Columns_typekey': Columns;
        private constructor();
        public Add(BeforeColumn?: any): Column;
        public readonly Application: Application;
        public AutoFit(): void;
        public Borders: Borders;
        public readonly Count: number;
        public readonly Creator: number;
        public Delete(): void;
        public DistributeWidth(): void;
        public readonly First: Column;
        public Item(Index: number): Column;
        public readonly Last: Column;
        public readonly NestingLevel: number;
        public readonly Parent: any;
        public PreferredWidth: number;
        public PreferredWidthType: WdPreferredWidthType;
        public Select(): void;
        public SetWidth(ColumnWidth: number, RulerStyle: WdRulerStyle): void;
        public readonly Shading: Shading;
        public Width: number;
    }

    class Comment {
        private 'Word.Comment_typekey': Comment;
        private constructor();
        public readonly Application: Application;
        public Author: string;
        public readonly Creator: number;
        public readonly Date: VarDate;
        public Delete(): void;
        public Edit(): void;
        public readonly Index: number;
        public Initial: string;
        public readonly IsInk: boolean;
        public readonly Parent: any;
        public readonly Range: Range;
        public readonly Reference: Range;
        public readonly Scope: Range;
        public ShowTip: boolean;
    }

    class Comments {
        private 'Word.Comments_typekey': Comments;
        private constructor();
        public Add(Range: Range, Text?: any): Comment;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Comment;
        public readonly Parent: any;
        public ShowBy: string;
    }

    class ConditionalStyle {
        private 'Word.ConditionalStyle_typekey': ConditionalStyle;
        private constructor();
        public readonly Application: Application;
        public Borders: Borders;
        public BottomPadding: number;
        public readonly Creator: number;
        public Font: Font;
        public LeftPadding: number;
        public ParagraphFormat: ParagraphFormat;
        public readonly Parent: any;
        public RightPadding: number;
        public readonly Shading: Shading;
        public TopPadding: number;
    }

    class Conflict {
        private 'Word.Conflict_typekey': Conflict;
        private constructor();
        public Accept(): void;
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Index: number;
        public readonly Parent: any;
        public readonly Range: Range;
        public Reject(): void;
        public readonly Type: WdRevisionType;
    }

    class Conflicts {
        private 'Word.Conflicts_typekey': Conflicts;
        private constructor();
        public AcceptAll(): void;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Conflict;
        public readonly Parent: any;
        public RejectAll(): void;
    }

    class ConnectorFormat {
        private 'Word.ConnectorFormat_typekey': ConnectorFormat;
        private constructor();
        public readonly Application: Application;
        public BeginConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        public readonly BeginConnected: Office.MsoTriState;
        public readonly BeginConnectedShape: Shape;
        public readonly BeginConnectionSite: number;
        public BeginDisconnect(): void;
        public readonly Creator: number;
        public EndConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        public readonly EndConnected: Office.MsoTriState;
        public readonly EndConnectedShape: Shape;
        public readonly EndConnectionSite: number;
        public EndDisconnect(): void;
        public readonly Parent: any;
        public Type: Office.MsoConnectorType;
    }

    class ContentControl {
        private 'Word.ContentControl_typekey': ContentControl;
        private constructor();
        public readonly Application: Application;
        public BuildingBlockCategory: string;
        public BuildingBlockType: WdBuildingBlockTypes;
        public Checked: boolean;
        public Copy(): void;
        public readonly Creator: number;
        public Cut(): void;
        public DateCalendarType: WdCalendarType;
        public DateDisplayFormat: string;
        public DateDisplayLocale: WdLanguageID;
        public DateStorageFormat: WdContentControlDateStorageFormat;
        public DefaultTextStyle: any;

        /** @param boolean [DeleteContents=false] */
        public Delete(DeleteContents?: boolean): void;
        public readonly DropdownListEntries: ContentControlListEntries;
        public readonly ID: string;
        public LockContentControl: boolean;
        public LockContents: boolean;
        public MultiLine: boolean;
        public readonly Parent: any;
        public readonly ParentContentControl: ContentControl;
        public readonly PlaceholderText: BuildingBlock;
        public readonly Range: Range;

        /** @param string [Font=''] */
        public SetCheckedSymbol(CharacterNumber: number, Font?: string): void;

        /**
         * @param Word.BuildingBlock [BuildingBlock=0]
         * @param Word.Range [Range=0]
         * @param string [Text='']
         */
        public SetPlaceholderText(BuildingBlock?: BuildingBlock, Range?: Range, Text?: string): void;

        /** @param string [Font=''] */
        public SetUncheckedSymbol(CharacterNumber: number, Font?: string): void;
        public readonly ShowingPlaceholderText: boolean;
        public Tag: string;
        public Temporary: boolean;
        public Title: string;
        public Type: WdContentControlType;
        public Ungroup(): void;
        public readonly XMLMapping: XMLMapping;
    }

    class ContentControlListEntries {
        private 'Word.ContentControlListEntries_typekey': ContentControlListEntries;
        private constructor();

        /**
         * @param string [Value='']
         * @param number [Index=0]
         */
        public Add(Text: string, Value?: string, Index?: number): ContentControlListEntry;
        public readonly Application: Application;
        public Clear(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): ContentControlListEntry;
        public readonly Parent: any;
    }

    class ContentControlListEntry {
        private 'Word.ContentControlListEntry_typekey': ContentControlListEntry;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public Index: number;
        public MoveDown(): void;
        public MoveUp(): void;
        public readonly Parent: any;
        public Select(): void;
        public Text: string;
        public Value: string;
    }

    class ContentControls {
        private 'Word.ContentControls_typekey': ContentControls;
        private constructor();

        /** @param Word.WdContentControlType [Type=0] */
        public Add(Type?: WdContentControlType, Range?: any): ContentControl;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): ContentControl;
        public readonly Parent: any;
    }

    class Corners {
        private 'Word.Corners_typekey': Corners;
        private constructor();
        public readonly Application: any;
        public readonly Creator: number;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class CustomLabel {
        private 'Word.CustomLabel_typekey': CustomLabel;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly DotMatrix: boolean;
        public Height: number;
        public HorizontalPitch: number;
        public readonly Index: number;
        public Name: string;
        public NumberAcross: number;
        public NumberDown: number;
        public PageSize: WdCustomLabelPageSize;
        public readonly Parent: any;
        public SideMargin: number;
        public TopMargin: number;
        public readonly Valid: boolean;
        public VerticalPitch: number;
        public Width: number;
    }

    class CustomLabels {
        private 'Word.CustomLabels_typekey': CustomLabels;
        private constructor();
        public Add(Name: string, DotMatrix?: any): CustomLabel;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): CustomLabel;
        public readonly Parent: any;
    }

    class CustomProperties {
        private 'Word.CustomProperties_typekey': CustomProperties;
        private constructor();
        public Add(Name: string, Value: string): CustomProperty;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): CustomProperty;
        public readonly Parent: any;
    }

    class CustomProperty {
        private 'Word.CustomProperty_typekey': CustomProperty;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Name: string;
        public readonly Parent: any;
        public Value: string;
    }

    class DataTable {
        private 'Word.DataTable_typekey': DataTable;
        private constructor();
        public readonly Application: any;
        public AutoScaleFont: any;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Font: ChartFont;
        public readonly Format: ChartFormat;
        public HasBorderHorizontal: boolean;
        public HasBorderOutline: boolean;
        public HasBorderVertical: boolean;
        public readonly Parent: any;
        public Select(): void;
        public ShowLegendKey: boolean;
    }

    class DefaultWebOptions {
        private 'Word.DefaultWebOptions_typekey': DefaultWebOptions;
        private constructor();
        public AllowPNG: boolean;
        public AlwaysSaveInDefaultEncoding: boolean;
        public readonly Application: Application;
        public BrowserLevel: WdBrowserLevel;
        public CheckIfOfficeIsHTMLEditor: boolean;
        public CheckIfWordIsDefaultHTMLEditor: boolean;
        public readonly Creator: number;
        public Encoding: Office.MsoEncoding;
        public readonly FolderSuffix: string;
        public readonly Fonts: Office.WebPageFonts;
        public OptimizeForBrowser: boolean;
        public OrganizeInFolder: boolean;
        public readonly Parent: any;
        public PixelsPerInch: number;
        public RelyOnCSS: boolean;
        public RelyOnVML: boolean;
        public SaveNewWebPagesAsWebArchives: boolean;
        public ScreenSize: Office.MsoScreenSize;
        public TargetBrowser: Office.MsoTargetBrowser;
        public UpdateLinksOnSave: boolean;
        public UseLongFileNames: boolean;
    }

    class Diagram {
        private 'Word.Diagram_typekey': Diagram;
        private constructor();
        public readonly Application: Application;
        public AutoFormat: Office.MsoTriState;
        public AutoLayout: Office.MsoTriState;
        public Convert(Type: Office.MsoDiagramType): void;
        public readonly Creator: number;
        public FitText(): void;
        public readonly Nodes: DiagramNodes;
        public readonly Parent: any;
        public Reverse: Office.MsoTriState;
        public readonly Type: Office.MsoDiagramType;
    }

    class DiagramNode {
        private 'Word.DiagramNode_typekey': DiagramNode;
        private constructor();

        /**
         * @param Office.MsoRelativeNodePosition [Pos=2]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        public AddNode(Pos?: Office.MsoRelativeNodePosition, NodeType?: Office.MsoDiagramNodeType): DiagramNode;
        public readonly Application: Application;
        public readonly Children: DiagramNodeChildren;

        /**
         * @param Word.DiagramNode [TargetNode=0]
         * @param Office.MsoRelativeNodePosition [Pos=2]
         */
        public CloneNode(copyChildren: boolean, TargetNode?: DiagramNode, Pos?: Office.MsoRelativeNodePosition): DiagramNode;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Diagram: Diagram;
        public Layout: Office.MsoOrgChartLayoutType;
        public MoveNode(TargetNode: DiagramNode, Pos: Office.MsoRelativeNodePosition): void;
        public NextNode(): DiagramNode;
        public readonly Parent: any;
        public PrevNode(): DiagramNode;
        public ReplaceNode(TargetNode: DiagramNode): void;
        public readonly Root: DiagramNode;
        public readonly Shape: Shape;

        /** @param Office.MsoRelativeNodePosition [Pos=-1] */
        public SwapNode(TargetNode: DiagramNode, Pos?: Office.MsoRelativeNodePosition): void;
        public readonly TextShape: Shape;
        public TransferChildren(ReceivingNode: DiagramNode): void;
    }

    class DiagramNodeChildren {
        private 'Word.DiagramNodeChildren_typekey': DiagramNodeChildren;
        private constructor();

        /**
         * @param any [Index=-1]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        public AddNode(Index?: any, NodeType?: Office.MsoDiagramNodeType): DiagramNode;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public readonly FirstChild: DiagramNode;
        public Item(Index: any): DiagramNode;
        public readonly LastChild: DiagramNode;
        public readonly Parent: any;
        public SelectAll(): void;
    }

    class DiagramNodes {
        private 'Word.DiagramNodes_typekey': DiagramNodes;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): DiagramNode;
        public readonly Parent: any;
        public SelectAll(): void;
    }

    class Dialog {
        private 'Word.Dialog_typekey': Dialog;
        private constructor();
        public readonly Application: Application;
        public readonly CommandBarId: number;
        public readonly CommandName: string;
        public readonly Creator: number;
        public DefaultTab: WdWordDialogTab;
        public Display(TimeOut?: any): number;
        public Execute(): void;
        public readonly Parent: any;
        public Show(TimeOut?: any): number;
        public readonly Type: WdWordDialog;
        public Update(): void;
    }

    class Dialogs {
        private 'Word.Dialogs_typekey': Dialogs;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: WdWordDialog): Dialog;
        public readonly Parent: any;
    }

    class Dictionaries {
        private 'Word.Dictionaries_typekey': Dictionaries;
        private constructor();
        public ActiveCustomDictionary: Dictionary;
        public Add(FileName: string): Dictionary;
        public readonly Application: Application;
        public ClearAll(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Dictionary;
        public readonly Maximum: number;
        public readonly Parent: any;
    }

    class Dictionary {
        private 'Word.Dictionary_typekey': Dictionary;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public LanguageID: WdLanguageID;
        public LanguageSpecific: boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Path: string;
        public readonly ReadOnly: boolean;
        public readonly Type: WdDictionaryType;
    }

    class Document {
        private 'Word.Document_typekey': Document;
        private constructor();
        public _CodeName: string;
        public AcceptAllRevisions(): void;
        public AcceptAllRevisionsShown(): void;
        public Activate(): void;
        public readonly ActiveTheme: string;
        public readonly ActiveThemeDisplayName: string;
        public readonly ActiveWindow: Window;
        public ActiveWritingStyle(LanguageID: any): string;
        public AddDocumentWorkspaceHeader(RichFormat: boolean, Url: string, Title: string, Description: string, ID: string): void;
        public AddMeetingWorkspaceHeader(SkipIfAbsent: boolean, Url: string, Title: string, Description: string, ID: string): void;
        public AddToFavorites(): void;
        public readonly Application: Application;
        public ApplyDocumentTheme(FileName: string): void;
        public ApplyQuickStyleSet(Name: string): void;
        public ApplyQuickStyleSet2(Style: any): void;
        public ApplyTheme(Name: string): void;
        public AttachedTemplate: any;
        public AutoFormat(): void;
        public AutoFormatOverride: boolean;
        public AutoHyphenation: boolean;
        public AutoSummarize(Length?: any, Mode?: any, UpdateProperties?: any): Range;
        public Background: Shape;
        public readonly Bibliography: Bibliography;
        public readonly Bookmarks: Bookmarks;
        public readonly BuiltInDocumentProperties: any;
        public CanCheckin(): boolean;
        public readonly Characters: Characters;
        public CheckConsistency(): void;
        public CheckGrammar(): void;

        /**
         * @param boolean [SaveChanges=true]
         * @param boolean [MakePublic=false]
         */
        public CheckIn(SaveChanges?: boolean, Comments?: any, MakePublic?: boolean): void;

        /**
         * @param boolean [SaveChanges=true]
         * @param boolean [MakePublic=false]
         */
        public CheckInWithVersion(SaveChanges?: boolean, Comments?: any, MakePublic?: boolean, VersionType?: any): void;
        public CheckNewSmartTags(): void;
        public CheckSpelling(
            CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any,
            CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): void;
        public readonly ChildNodeSuggestions: XMLChildNodeSuggestions;
        public ClickAndTypeParagraphStyle: any;
        public Close(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;
        public ClosePrintPreview(): void;
        public readonly CoAuthoring: CoAuthoring;
        public readonly CodeName: string;
        public readonly CommandBars: Office.CommandBars;
        public readonly Comments: Comments;
        public Compare(
            Name: string, AuthorName?: any, CompareTarget?: any, DetectFormatChanges?: any, IgnoreAllComparisonWarnings?: any, AddToRecentFiles?: any,
            RemovePersonalInformation?: any, RemoveDateAndTime?: any): void;
        public Compare2000(Name: string): void;
        public Compare2002(Name: string, AuthorName?: any, CompareTarget?: any, DetectFormatChanges?: any, IgnoreAllComparisonWarnings?: any, AddToRecentFiles?: any): void;
        public Compatibility(Type: WdCompatibility): boolean;
        public readonly CompatibilityMode: number;
        public ComputeStatistics(Statistic: WdStatistic, IncludeFootnotesAndEndnotes?: any): number;
        public ConsecutiveHyphensLimit: number;
        public readonly Container: any;
        public readonly Content: Range;
        public readonly ContentControls: ContentControls;
        public readonly ContentTypeProperties: Office.MetaProperties;
        public Convert(): void;
        public ConvertAutoHyphens(): void;
        public ConvertNumbersToText(NumberType?: any): void;
        public ConvertVietDoc(CodePageOrigin: number): void;
        public CopyStylesFromTemplate(Template: string): void;
        public CountNumberedItems(NumberType?: any, Level?: any): number;
        public CreateLetterContent(
            DateFormat: string, IncludeHeaderFooter: boolean, PageDesign: string, LetterStyle: WdLetterStyle, Letterhead: boolean,
            LetterheadLocation: WdLetterheadLocation, LetterheadSize: number, RecipientName: string, RecipientAddress: string, Salutation: string,
            SalutationType: WdSalutationType, RecipientReference: string, MailingInstructions: string, AttentionLine: string, Subject: string, CCList: string,
            ReturnAddress: string, SenderName: string, Closing: string, SenderCompany: string, SenderJobTitle: string, SenderInitials: string, EnclosureNumber: number,
            InfoBlock?: any, RecipientCode?: any, RecipientGender?: any, ReturnAddressShortForm?: any, SenderCity?: any, SenderCode?: any, SenderGender?: any, SenderReference?: any): LetterContent;
        public readonly Creator: number;
        public readonly CurrentRsid: number;
        public readonly CustomDocumentProperties: any;
        public readonly CustomXMLParts: Office.CustomXMLParts;
        public DataForm(): void;
        public readonly DefaultTableStyle: any;
        public DefaultTabStop: number;
        public DefaultTargetFrame: string;
        public DeleteAllComments(): void;
        public DeleteAllCommentsShown(): void;
        public DeleteAllEditableRanges(EditorID?: any): void;
        public DeleteAllInkAnnotations(): void;
        public DetectLanguage(): void;
        public DisableFeatures: boolean;
        public DisableFeaturesIntroducedAfter: WdDisableFeaturesIntroducedAfter;
        public readonly DocID: number;
        public readonly DocumentInspectors: Office.DocumentInspectors;
        public readonly DocumentLibraryVersions: Office.DocumentLibraryVersions;
        public readonly DocumentTheme: Office.OfficeTheme;
        public DoNotEmbedSystemFonts: boolean;
        public DowngradeDocument(): void;
        public readonly Dummy1: undefined;
        public Dummy2(): void;
        public readonly Dummy3: undefined;
        public Dummy4(): void;
        public EditionOptions(Type: WdEditionType, Option: WdEditionOption, Name: string, Format?: any): void;
        public readonly Email: Email;
        public EmbedLinguisticData: boolean;
        public EmbedSmartTags: boolean;
        public EmbedTrueTypeFonts: boolean;
        public EncryptionProvider: string;
        public readonly Endnotes: Endnotes;
        public EndReview(): void;
        public EnforceStyle: boolean;
        public readonly Envelope: Envelope;

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
        public ExportAsFixedFormat(
            OutputFileName: string, ExportFormat: WdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WdExportOptimizeFor, Range?: WdExportRange, From?: number,
            To?: number, Item?: WdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WdExportCreateBookmarks, DocStructureTags?: boolean,
            BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;
        public FarEastLineBreakLanguage: WdFarEastLineBreakLanguageID;
        public FarEastLineBreakLevel: WdFarEastLineBreakLevel;
        public readonly Fields: Fields;
        public Final: boolean;
        public FitToPages(): void;
        public FollowHyperlink(Address?: any, SubAddress?: any, NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;
        public readonly Footnotes: Footnotes;
        public FormattingShowClear: boolean;
        public FormattingShowFilter: WdShowFilter;
        public FormattingShowFont: boolean;
        public FormattingShowNextLevel: boolean;
        public FormattingShowNumbering: boolean;
        public FormattingShowParagraph: boolean;
        public FormattingShowUserStyleName: boolean;
        public readonly FormFields: FormFields;
        public readonly FormsDesign: boolean;
        public ForwardMailer(): void;
        public readonly Frames: Frames;
        public readonly Frameset: Frameset;
        public FreezeLayout(): void;
        public readonly FullName: string;
        public GetCrossReferenceItems(ReferenceType: any): any;
        public GetLetterContent(): LetterContent;
        public GetWorkflowTasks(): Office.WorkflowTasks;
        public GetWorkflowTemplates(): Office.WorkflowTemplates;
        public GoTo(What?: any, Which?: any, Count?: any, Name?: any): Range;
        public GrammarChecked: boolean;
        public readonly GrammaticalErrors: ProofreadingErrors;
        public GridDistanceHorizontal: number;
        public GridDistanceVertical: number;
        public GridOriginFromMargin: boolean;
        public GridOriginHorizontal: number;
        public GridOriginVertical: number;
        public GridSpaceBetweenHorizontalLines: number;
        public GridSpaceBetweenVerticalLines: number;
        public HasMailer: boolean;
        public readonly HasPassword: boolean;
        public HasRoutingSlip: boolean;
        public readonly HasVBProject: boolean;
        public readonly HTMLDivisions: HTMLDivisions;
        public readonly HTMLProject: Office.HTMLProject;
        public readonly Hyperlinks: Hyperlinks;
        public HyphenateCaps: boolean;
        public HyphenationZone: number;
        public readonly Indexes: Indexes;
        public readonly InlineShapes: InlineShapes;
        public readonly IsMasterDocument: boolean;
        public readonly IsSubdocument: boolean;
        public JustificationMode: WdJustificationMode;
        public KerningByAlgorithm: boolean;
        public Kind: WdDocumentKind;
        public LanguageDetected: boolean;
        public readonly ListParagraphs: ListParagraphs;
        public readonly Lists: Lists;
        public readonly ListTemplates: ListTemplates;
        public LockQuickStyleSet: boolean;
        public LockServerFile(): void;
        public LockTheme: boolean;
        public readonly MailEnvelope: Office.MsoEnvelope;
        public readonly Mailer: Mailer;
        public readonly MailMerge: MailMerge;
        public MakeCompatibilityDefault(): void;
        public ManualHyphenation(): void;
        public Merge(FileName: string, MergeTarget?: any, DetectFormatChanges?: any, UseFormattingFrom?: any, AddToRecentFiles?: any): void;
        public Merge2000(FileName: string): void;
        public readonly Name: string;
        public NoLineBreakAfter: string;
        public NoLineBreakBefore: string;
        public OMathBreakBin: WdOMathBreakBin;
        public OMathBreakSub: WdOMathBreakSub;
        public OMathFontName: string;
        public OMathIntSubSupLim: boolean;
        public OMathJc: WdOMathJc;
        public OMathLeftMargin: number;
        public OMathNarySupSubLim: boolean;
        public OMathRightMargin: number;
        public readonly OMaths: OMaths;
        public OMathSmallFrac: boolean;
        public OMathWrap: number;
        public readonly OpenEncoding: Office.MsoEncoding;
        public OptimizeForWord97: boolean;
        public readonly OriginalDocumentTitle: string;
        public PageSetup: PageSetup;
        public readonly Paragraphs: Paragraphs;
        public readonly Parent: any;
        public readonly Password: string;
        public readonly PasswordEncryptionAlgorithm: string;
        public readonly PasswordEncryptionFileProperties: boolean;
        public readonly PasswordEncryptionKeyLength: number;
        public readonly PasswordEncryptionProvider: string;
        public readonly Path: string;
        public readonly Permission: Office.Permission;
        public Post(): void;
        public PresentIt(): void;
        public PrintFormsData: boolean;
        public PrintFractionalWidths: boolean;
        public PrintOut(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any,
            PrintZoomPaperHeight?: any): void;
        public PrintOut2000(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any,
            PrintZoomPaperHeight?: any): void;
        public PrintOutOld(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;
        public PrintPostScriptOverText: boolean;
        public PrintPreview(): void;
        public PrintRevisions: boolean;
        public Protect(Type: WdProtectionType, NoReset?: any, Password?: any, UseIRM?: any, EnforceStyleLock?: any): void;
        public Protect2002(Type: WdProtectionType, NoReset?: any, Password?: any): void;
        public readonly ProtectionType: WdProtectionType;
        public Range(Start?: any, End?: any): Range;
        public readonly ReadabilityStatistics: ReadabilityStatistics;
        public ReadingLayoutSizeX: number;
        public ReadingLayoutSizeY: number;
        public ReadingModeLayoutFrozen: boolean;
        public readonly ReadOnly: boolean;
        public ReadOnlyRecommended: boolean;
        public RecheckSmartTags(): void;
        public Redo(Times?: any): boolean;
        public RejectAllRevisions(): void;
        public RejectAllRevisionsShown(): void;
        public Reload(): void;
        public ReloadAs(Encoding: Office.MsoEncoding): void;
        public RemoveDateAndTime: boolean;
        public RemoveDocumentInformation(RemoveDocInfoType: WdRemoveDocInfoType): void;
        public RemoveDocumentWorkspaceHeader(ID: string): void;
        public RemoveLockedStyles(): void;
        public RemoveNumbers(NumberType?: any): void;
        public RemovePersonalInformation: boolean;
        public RemoveSmartTags(): void;
        public RemoveTheme(): void;
        public Repaginate(): void;
        public Reply(): void;
        public ReplyAll(): void;
        public ReplyWithChanges(ShowMessage?: any): void;
        public readonly Research: Research;
        public ResetFormFields(): void;
        public readonly RevisedDocumentTitle: string;
        public readonly Revisions: Revisions;
        public Route(): void;
        public readonly Routed: boolean;
        public readonly RoutingSlip: RoutingSlip;
        public RunAutoMacro(Which: WdAutoMacros): void;
        public RunLetterWizard(LetterContent?: any, WizardMode?: any): void;
        public Save(): void;
        public SaveAs(
            FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any,
            EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any, Encoding?: any, InsertLineBreaks?: any,
            AllowSubstitutions?: any, LineEnding?: any, AddBiDiMarks?: any): void;
        public SaveAs2(
            FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any,
            EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any, Encoding?: any, InsertLineBreaks?: any,
            AllowSubstitutions?: any, LineEnding?: any, AddBiDiMarks?: any, CompatibilityMode?: any): void;
        public SaveAs2000(
            FileName?: any, FileFormat?: any, LockComments?: any, Password?: any, AddToRecentFiles?: any, WritePassword?: any, ReadOnlyRecommended?: any,
            EmbedTrueTypeFonts?: any, SaveNativePictureFormat?: any, SaveFormsData?: any, SaveAsAOCELetter?: any): void;
        public SaveAsQuickStyleSet(FileName: string): void;
        public Saved: boolean;
        public SaveEncoding: Office.MsoEncoding;
        public readonly SaveFormat: number;
        public SaveFormsData: boolean;
        public SaveSubsetFonts: boolean;
        public sblt(s: string): void;
        public readonly Scripts: Office.Scripts;
        public readonly Sections: Sections;
        public Select(): void;
        public SelectAllEditableRanges(EditorID?: any): void;
        public SelectContentControlsByTag(Tag: string): ContentControls;
        public SelectContentControlsByTitle(Title: string): ContentControls;
        public SelectLinkedControls(Node: Office.CustomXMLNode): ContentControls;

        /**
         * @param string [PrefixMapping='']
         * @param boolean [FastSearchSkippingTextNodes=true]
         */
        public SelectNodes(XPath: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean): XMLNodes;

        /**
         * @param string [PrefixMapping='']
         * @param boolean [FastSearchSkippingTextNodes=true]
         */
        public SelectSingleNode(XPath: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean): XMLNode;

        /** @param Office.CustomXMLPart [Stream=0] */
        public SelectUnlinkedControls(Stream?: Office.CustomXMLPart): ContentControls;
        public SendFax(Address: string, Subject?: any): void;
        public SendFaxOverInternet(Recipients?: any, Subject?: any, ShowMessage?: any): void;
        public SendForReview(Recipients?: any, Subject?: any, ShowMessage?: any, IncludeAttachment?: any): void;
        public SendMail(): void;
        public SendMailer(FileFormat?: any, Priority?: any): void;
        public readonly Sentences: Sentences;
        public readonly ServerPolicy: Office.ServerPolicy;
        public SetCompatibilityMode(Mode: number): void;
        public SetDefaultTableStyle(Style: any, SetInTemplate: boolean): void;
        public SetLetterContent(LetterContent: any): void;
        public SetPasswordEncryptionOptions(PasswordEncryptionProvider: string, PasswordEncryptionAlgorithm: string, PasswordEncryptionKeyLength: number, PasswordEncryptionFileProperties?: any): void;
        public readonly Shapes: Shapes;
        public readonly SharedWorkspace: Office.SharedWorkspace;
        public ShowGrammaticalErrors: boolean;
        public ShowRevisions: boolean;
        public ShowSpellingErrors: boolean;
        public ShowSummary: boolean;
        public readonly Signatures: Office.SignatureSet;
        public readonly SmartDocument: Office.SmartDocument;
        public readonly SmartTags: SmartTags;
        public SmartTagsAsXMLProps: boolean;
        public SnapToGrid: boolean;
        public SnapToShapes: boolean;
        public SpellingChecked: boolean;
        public readonly SpellingErrors: ProofreadingErrors;
        public readonly StoryRanges: StoryRanges;
        public readonly Styles: Styles;
        public readonly StyleSheets: StyleSheets;
        public StyleSortMethod: WdStyleSort;
        public readonly Subdocuments: Subdocuments;
        public SummaryLength: number;
        public SummaryViewMode: WdSummaryMode;
        public readonly Sync: Office.Sync;
        public readonly Tables: Tables;
        public readonly TablesOfAuthorities: TablesOfAuthorities;
        public readonly TablesOfAuthoritiesCategories: TablesOfAuthoritiesCategories;
        public readonly TablesOfContents: TablesOfContents;
        public readonly TablesOfFigures: TablesOfFigures;
        public TextEncoding: Office.MsoEncoding;
        public TextLineEnding: WdLineEndingType;
        public ToggleFormsDesign(): void;
        public TrackFormatting: boolean;
        public TrackMoves: boolean;
        public TrackRevisions: boolean;

        /** @param boolean [DataOnly=true] */
        public TransformDocument(Path: string, DataOnly?: boolean): void;
        public readonly Type: WdDocumentType;
        public Undo(Times?: any): boolean;
        public UndoClear(): void;
        public UnfreezeLayout(): void;
        public Unprotect(Password?: any): void;
        public UpdateStyles(): void;
        public UpdateStylesOnOpen: boolean;
        public UpdateSummaryProperties(): void;
        public UseMathDefaults: boolean;
        public UserControl: boolean;
        public readonly Variables: Variables;
        public readonly VBASigned: boolean;
        public readonly VBProject: VBIDE.VBProject;
        public readonly Versions: Versions;
        public ViewCode(): void;
        public ViewPropertyBrowser(): void;
        public readonly WebOptions: WebOptions;
        public WebPagePreview(): void;
        public readonly Windows: Windows;
        public readonly WordOpenXML: string;
        public readonly Words: Words;
        public readonly WritePassword: string;
        public readonly WriteReserved: boolean;
        public XMLHideNamespaces: boolean;
        public readonly XMLNodes: XMLNodes;
        public XMLSaveDataOnly: boolean;
        public XMLSaveThroughXSLT: string;
        public readonly XMLSchemaReferences: XMLSchemaReferences;
        public readonly XMLSchemaViolations: XMLNodes;
        public XMLShowAdvancedErrors: boolean;
        public XMLUseXSLTWhenSaving: boolean;
    }

    class Documents {
        private 'Word.Documents_typekey': Documents;
        private constructor();
        public Add(Template?: any, NewTemplate?: any, DocumentType?: any, Visible?: any): Document;

        /** @param string [PostID=''] */
        public AddBlogDocument(ProviderID: string, PostURL: string, BlogName: string, PostID?: string): Document;
        public AddOld(Template?: any, NewTemplate?: any): Document;
        public readonly Application: Application;
        public CanCheckOut(FileName: string): boolean;
        public CheckOut(FileName: string): void;
        public Close(SaveChanges?: any, OriginalFormat?: any, RouteDocument?: any): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Document;
        public Open(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any,
            NoEncodingDialog?: any, XMLTransform?: any): Document;
        public Open2000(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any): Document;
        public Open2002(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any, NoEncodingDialog?: any): Document;
        public OpenNoRepairDialog(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any, Encoding?: any, Visible?: any, OpenAndRepair?: any, DocumentDirection?: any,
            NoEncodingDialog?: any, XMLTransform?: any): Document;
        public OpenOld(
            FileName: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, Format?: any): Document;
        public readonly Parent: any;
        public Save(NoPrompt?: any, OriginalFormat?: any): void;
    }

    class DownBars {
        private 'Word.DownBars_typekey': DownBars;
        private constructor();
        public readonly Application: any;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Fill: ChartFillFormat;
        public readonly Format: ChartFormat;
        public readonly Interior: Interior;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class DropCap {
        private 'Word.DropCap_typekey': DropCap;
        private constructor();
        public readonly Application: Application;
        public Clear(): void;
        public readonly Creator: number;
        public DistanceFromText: number;
        public Enable(): void;
        public FontName: string;
        public LinesToDrop: number;
        public readonly Parent: any;
        public Position: WdDropPosition;
    }

    class DropDown {
        private 'Word.DropDown_typekey': DropDown;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Default: number;
        public readonly ListEntries: ListEntries;
        public readonly Parent: any;
        public readonly Valid: boolean;
        public Value: number;
    }

    class DropLines {
        private 'Word.DropLines_typekey': DropLines;
        private constructor();
        public readonly Application: any;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): void;
    }

    class Editor {
        private 'Word.Editor_typekey': Editor;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public DeleteAll(): void;
        public readonly ID: string;
        public readonly Name: string;
        public readonly NextRange: Range;
        public readonly Parent: any;
        public readonly Range: Range;
        public SelectAll(): void;
    }

    class Editors {
        private 'Word.Editors_typekey': Editors;
        private constructor();
        public Add(EditorID: any): Editor;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Editor;
        public readonly Parent: any;
    }

    class Email {
        private 'Word.Email_typekey': Email;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly CurrentEmailAuthor: EmailAuthor;
        public readonly Parent: any;
    }

    class EmailAuthor {
        private 'Word.EmailAuthor_typekey': EmailAuthor;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Parent: any;
        public readonly Style: Style;
    }

    class EmailOptions {
        private 'Word.EmailOptions_typekey': EmailOptions;
        private constructor();
        public readonly Application: Application;
        public AutoFormatAsYouTypeApplyBorders: boolean;
        public AutoFormatAsYouTypeApplyBulletedLists: boolean;
        public AutoFormatAsYouTypeApplyClosings: boolean;
        public AutoFormatAsYouTypeApplyDates: boolean;
        public AutoFormatAsYouTypeApplyFirstIndents: boolean;
        public AutoFormatAsYouTypeApplyHeadings: boolean;
        public AutoFormatAsYouTypeApplyNumberedLists: boolean;
        public AutoFormatAsYouTypeApplyTables: boolean;
        public AutoFormatAsYouTypeAutoLetterWizard: boolean;
        public AutoFormatAsYouTypeDefineStyles: boolean;
        public AutoFormatAsYouTypeDeleteAutoSpaces: boolean;
        public AutoFormatAsYouTypeFormatListItemBeginning: boolean;
        public AutoFormatAsYouTypeInsertClosings: boolean;
        public AutoFormatAsYouTypeInsertOvers: boolean;
        public AutoFormatAsYouTypeMatchParentheses: boolean;
        public AutoFormatAsYouTypeReplaceFarEastDashes: boolean;
        public AutoFormatAsYouTypeReplaceFractions: boolean;
        public AutoFormatAsYouTypeReplaceHyperlinks: boolean;
        public AutoFormatAsYouTypeReplaceOrdinals: boolean;
        public AutoFormatAsYouTypeReplacePlainTextEmphasis: boolean;
        public AutoFormatAsYouTypeReplaceQuotes: boolean;
        public AutoFormatAsYouTypeReplaceSymbols: boolean;
        public readonly ComposeStyle: Style;
        public readonly Creator: number;
        public readonly Dummy1: boolean;
        public readonly Dummy2: boolean;
        public Dummy3(): void;
        public readonly EmailSignature: EmailSignature;
        public EmbedSmartTag: boolean;
        public HTMLFidelity: WdEmailHTMLFidelity;
        public MarkComments: boolean;
        public MarkCommentsWith: string;
        public NewColorOnReply: boolean;
        public readonly Parent: any;
        public readonly PlainTextStyle: Style;
        public RelyOnCSS: boolean;
        public readonly ReplyStyle: Style;
        public TabIndentKey: boolean;
        public ThemeName: string;
        public UseThemeStyle: boolean;
        public UseThemeStyleOnReply: boolean;
    }

    class EmailSignature {
        private 'Word.EmailSignature_typekey': EmailSignature;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly EmailSignatureEntries: EmailSignatureEntries;
        public NewMessageSignature: string;
        public readonly Parent: any;
        public ReplyMessageSignature: string;
    }

    class EmailSignatureEntries {
        private 'Word.EmailSignatureEntries_typekey': EmailSignatureEntries;
        private constructor();
        public Add(Name: string, Range: Range): EmailSignatureEntry;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): EmailSignatureEntry;
        public readonly Parent: any;
    }

    class EmailSignatureEntry {
        private 'Word.EmailSignatureEntry_typekey': EmailSignatureEntry;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public Name: string;
        public readonly Parent: any;
    }

    class Endnote {
        private 'Word.Endnote_typekey': Endnote;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Parent: any;
        public readonly Range: Range;
        public readonly Reference: Range;
    }

    class EndnoteOptions {
        private 'Word.EndnoteOptions_typekey': EndnoteOptions;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Location: WdEndnoteLocation;
        public NumberingRule: WdNumberingRule;
        public NumberStyle: WdNoteNumberStyle;
        public readonly Parent: any;
        public StartingNumber: number;
    }

    class Endnotes {
        private 'Word.Endnotes_typekey': Endnotes;
        private constructor();
        public Add(Range: Range, Reference?: any, Text?: any): Endnote;
        public readonly Application: Application;
        public readonly ContinuationNotice: Range;
        public readonly ContinuationSeparator: Range;
        public Convert(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Endnote;
        public Location: WdEndnoteLocation;
        public NumberingRule: WdNumberingRule;
        public NumberStyle: WdNoteNumberStyle;
        public readonly Parent: any;
        public ResetContinuationNotice(): void;
        public ResetContinuationSeparator(): void;
        public ResetSeparator(): void;
        public readonly Separator: Range;
        public StartingNumber: number;
        public SwapWithFootnotes(): void;
    }

    class Envelope {
        private 'Word.Envelope_typekey': Envelope;
        private constructor();
        public readonly Address: Range;
        public AddressFromLeft: number;
        public AddressFromTop: number;
        public readonly AddressStyle: Style;
        public readonly Application: Application;
        public readonly Creator: number;
        public DefaultFaceUp: boolean;
        public DefaultHeight: number;
        public DefaultOmitReturnAddress: boolean;
        public DefaultOrientation: WdEnvelopeOrientation;
        public DefaultPrintBarCode: boolean;
        public DefaultPrintFIMA: boolean;
        public DefaultSize: string;
        public DefaultWidth: number;
        public FeedSource: WdPaperTray;
        public Insert(
            ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any,
            Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any,
            DefaultFaceUp?: any, DefaultOrientation?: any, PrintEPostage?: any, Vertical?: any, RecipientNamefromLeft?: any, RecipientNamefromTop?: any,
            RecipientPostalfromLeft?: any, RecipientPostalfromTop?: any, SenderNamefromLeft?: any, SenderNamefromTop?: any, SenderPostalfromLeft?: any, SenderPostalfromTop?: any): void;
        public Insert2000(
            ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any,
            Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any,
            DefaultFaceUp?: any, DefaultOrientation?: any): void;
        public Options(): void;
        public readonly Parent: any;
        public PrintOut(
            ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any,
            Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any,
            DefaultFaceUp?: any, DefaultOrientation?: any, PrintEPostage?: any, Vertical?: any, RecipientNamefromLeft?: any, RecipientNamefromTop?: any,
            RecipientPostalfromLeft?: any, RecipientPostalfromTop?: any, SenderNamefromLeft?: any, SenderNamefromTop?: any, SenderPostalfromLeft?: any, SenderPostalfromTop?: any): void;
        public PrintOut2000(
            ExtractAddress?: any, Address?: any, AutoText?: any, OmitReturnAddress?: any, ReturnAddress?: any, ReturnAutoText?: any, PrintBarCode?: any, PrintFIMA?: any,
            Size?: any, Height?: any, Width?: any, FeedSource?: any, AddressFromLeft?: any, AddressFromTop?: any, ReturnAddressFromLeft?: any, ReturnAddressFromTop?: any,
            DefaultFaceUp?: any, DefaultOrientation?: any): void;
        public RecipientNamefromLeft: number;
        public RecipientNamefromTop: number;
        public RecipientPostalfromLeft: number;
        public RecipientPostalfromTop: number;
        public readonly ReturnAddress: Range;
        public ReturnAddressFromLeft: number;
        public ReturnAddressFromTop: number;
        public readonly ReturnAddressStyle: Style;
        public SenderNamefromLeft: number;
        public SenderNamefromTop: number;
        public SenderPostalfromLeft: number;
        public SenderPostalfromTop: number;
        public UpdateDocument(): void;
        public Vertical: boolean;
    }

    class Field {
        private 'Word.Field_typekey': Field;
        private constructor();
        public readonly Application: Application;
        public Code: Range;
        public Copy(): void;
        public readonly Creator: number;
        public Cut(): void;
        public Data: string;
        public Delete(): void;
        public DoClick(): void;
        public readonly Index: number;
        public readonly InlineShape: InlineShape;
        public readonly Kind: WdFieldKind;
        public readonly LinkFormat: LinkFormat;
        public Locked: boolean;
        public readonly Next: Field;
        public readonly OLEFormat: OLEFormat;
        public readonly Parent: any;
        public readonly Previous: Field;
        public Result: Range;
        public Select(): void;
        public ShowCodes: boolean;
        public readonly Type: WdFieldType;
        public Unlink(): void;
        public Update(): boolean;
        public UpdateSource(): void;
    }

    class Fields {
        private 'Word.Fields_typekey': Fields;
        private constructor();
        public Add(Range: Range, Type?: any, Text?: any, PreserveFormatting?: any): Field;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Field;
        public Locked: number;
        public readonly Parent: any;
        public ToggleShowCodes(): void;
        public Unlink(): void;
        public Update(): number;
        public UpdateSource(): void;
    }

    class FileConverter {
        private 'Word.FileConverter_typekey': FileConverter;
        private constructor();
        public readonly Application: Application;
        public readonly CanOpen: boolean;
        public readonly CanSave: boolean;
        public readonly ClassName: string;
        public readonly Creator: number;
        public readonly Extensions: string;
        public readonly FormatName: string;
        public readonly Name: string;
        public readonly OpenFormat: number;
        public readonly Parent: any;
        public readonly Path: string;
        public readonly SaveFormat: number;
    }

    class FileConverters {
        private 'Word.FileConverters_typekey': FileConverters;
        private constructor();
        public readonly Application: Application;
        public ConvertMacWordChevrons: WdChevronConvertRule;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): FileConverter;
        public readonly Parent: any;
    }

    class FillFormat {
        private 'Word.FillFormat_typekey': FillFormat;
        private constructor();
        public readonly Application: Application;
        public readonly BackColor: ColorFormat;
        public Background(): void;
        public readonly Creator: number;
        public readonly ForeColor: ColorFormat;
        public GradientAngle: number;
        public readonly GradientColorType: Office.MsoGradientColorType;
        public readonly GradientDegree: number;
        public readonly GradientStops: Office.GradientStops;
        public readonly GradientStyle: Office.MsoGradientStyle;
        public readonly GradientVariant: number;
        public OneColorGradient(Style: Office.MsoGradientStyle, Variant: number, Degree: number): void;
        public readonly Parent: any;
        public readonly Pattern: Office.MsoPatternType;
        public Patterned(Pattern: Office.MsoPatternType): void;
        public readonly PictureEffects: Office.PictureEffects;
        public PresetGradient(Style: Office.MsoGradientStyle, Variant: number, PresetGradientType: Office.MsoPresetGradientType): void;
        public readonly PresetGradientType: Office.MsoPresetGradientType;
        public readonly PresetTexture: Office.MsoPresetTexture;
        public PresetTextured(PresetTexture: Office.MsoPresetTexture): void;
        public RotateWithObject: Office.MsoTriState;
        public Solid(): void;
        public TextureAlignment: Office.MsoTextureAlignment;
        public TextureHorizontalScale: number;
        public readonly TextureName: string;
        public TextureOffsetX: number;
        public TextureOffsetY: number;
        public TextureTile: Office.MsoTriState;
        public readonly TextureType: Office.MsoTextureType;
        public TextureVerticalScale: number;
        public Transparency: number;
        public TwoColorGradient(Style: Office.MsoGradientStyle, Variant: number): void;
        public readonly Type: Office.MsoFillType;
        public UserPicture(PictureFile: string): void;
        public UserTextured(TextureFile: string): void;
        public Visible: Office.MsoTriState;
    }

    class Find {
        private 'Word.Find_typekey': Find;
        private constructor();
        public readonly Application: Application;
        public ClearAllFuzzyOptions(): void;
        public ClearFormatting(): void;
        public ClearHitHighlight(): boolean;
        public CorrectHangulEndings: boolean;
        public readonly Creator: number;
        public Execute(
            FindText?: any, MatchCase?: any, MatchWholeWord?: any, MatchWildcards?: any, MatchSoundsLike?: any, MatchAllWordForms?: any, Forward?: any, Wrap?: any,
            Format?: any, ReplaceWith?: any, Replace?: any, MatchKashida?: any, MatchDiacritics?: any, MatchAlefHamza?: any, MatchControl?: any): boolean;
        public Execute2007(
            FindText?: any, MatchCase?: any, MatchWholeWord?: any, MatchWildcards?: any, MatchSoundsLike?: any, MatchAllWordForms?: any, Forward?: any, Wrap?: any,
            Format?: any, ReplaceWith?: any, Replace?: any, MatchKashida?: any, MatchDiacritics?: any, MatchAlefHamza?: any, MatchControl?: any, MatchPrefix?: any,
            MatchSuffix?: any, MatchPhrase?: any, IgnoreSpace?: any, IgnorePunct?: any): boolean;
        public ExecuteOld(
            FindText?: any, MatchCase?: any, MatchWholeWord?: any, MatchWildcards?: any, MatchSoundsLike?: any, MatchAllWordForms?: any, Forward?: any, Wrap?: any,
            Format?: any, ReplaceWith?: any, Replace?: any): boolean;
        public Font: Font;
        public Format: boolean;
        public Forward: boolean;
        public readonly Found: boolean;
        public readonly Frame: Frame;
        public HanjaPhoneticHangul: boolean;
        public Highlight: number;
        public HitHighlight(
            FindText: any, HighlightColor?: any, TextColor?: any, MatchCase?: any, MatchWholeWord?: any, MatchPrefix?: any, MatchSuffix?: any, MatchPhrase?: any,
            MatchWildcards?: any, MatchSoundsLike?: any, MatchAllWordForms?: any, MatchByte?: any, MatchFuzzy?: any, MatchKashida?: any, MatchDiacritics?: any,
            MatchAlefHamza?: any, MatchControl?: any, IgnoreSpace?: any, IgnorePunct?: any, HanjaPhoneticHangul?: any): boolean;
        public IgnorePunct: boolean;
        public IgnoreSpace: boolean;
        public LanguageID: WdLanguageID;
        public LanguageIDFarEast: WdLanguageID;
        public LanguageIDOther: WdLanguageID;
        public MatchAlefHamza: boolean;
        public MatchAllWordForms: boolean;
        public MatchByte: boolean;
        public MatchCase: boolean;
        public MatchControl: boolean;
        public MatchDiacritics: boolean;
        public MatchFuzzy: boolean;
        public MatchKashida: boolean;
        public MatchPhrase: boolean;
        public MatchPrefix: boolean;
        public MatchSoundsLike: boolean;
        public MatchSuffix: boolean;
        public MatchWholeWord: boolean;
        public MatchWildcards: boolean;
        public NoProofing: number;
        public ParagraphFormat: ParagraphFormat;
        public readonly Parent: any;
        public readonly Replacement: Replacement;
        public SetAllFuzzyOptions(): void;
        public Style: any;
        public Text: string;
        public Wrap: WdFindWrap;
    }

    class FirstLetterException {
        private 'Word.FirstLetterException_typekey': FirstLetterException;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class FirstLetterExceptions {
        private 'Word.FirstLetterExceptions_typekey': FirstLetterExceptions;
        private constructor();
        public Add(Name: string): FirstLetterException;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): FirstLetterException;
        public readonly Parent: any;
    }

    class Floor {
        private 'Word.Floor_typekey': Floor;
        private constructor();
        public readonly Application: any;
        public readonly Border: ChartBorder;
        public ClearFormats(): any;
        public readonly Creator: number;
        public readonly Fill: ChartFillFormat;
        public readonly Format: ChartFormat;
        public readonly Interior: Interior;
        public readonly Name: string;
        public readonly Parent: any;
        public Paste(): void;
        public PictureType: any;
        public Select(): any;
        public Thickness: number;
    }

    class Font {
        private 'Word.Font_typekey': Font;
        private constructor();
        public AllCaps: number;
        public Animation: WdAnimation;
        public readonly Application: Application;
        public Bold: number;
        public BoldBi: number;
        public Borders: Borders;
        public Color: WdColor;
        public ColorIndex: WdColorIndex;
        public ColorIndexBi: WdColorIndex;
        public ContextualAlternates: number;
        public readonly Creator: number;
        public DiacriticColor: WdColor;
        public DisableCharacterSpaceGrid: boolean;
        public DoubleStrikeThrough: number;
        public readonly Duplicate: Font;
        public Emboss: number;
        public EmphasisMark: WdEmphasisMark;
        public Engrave: number;
        public Fill: FillFormat;
        public Glow: GlowFormat;
        public Grow(): void;
        public Hidden: number;
        public Italic: number;
        public ItalicBi: number;
        public Kerning: number;
        public Ligatures: WdLigatures;
        public Line: LineFormat;
        public Name: string;
        public NameAscii: string;
        public NameBi: string;
        public NameFarEast: string;
        public NameOther: string;
        public NumberForm: WdNumberForm;
        public NumberSpacing: WdNumberSpacing;
        public Outline: number;
        public readonly Parent: any;
        public Position: number;
        public Reflection: ReflectionFormat;
        public Reset(): void;
        public Scaling: number;
        public SetAsTemplateDefault(): void;
        public readonly Shading: Shading;
        public Shadow: number;
        public Shrink(): void;
        public Size: number;
        public SizeBi: number;
        public SmallCaps: number;
        public Spacing: number;
        public StrikeThrough: number;
        public StylisticSet: WdStylisticSet;
        public Subscript: number;
        public Superscript: number;
        public readonly TextColor: ColorFormat;
        public TextShadow: ShadowFormat;
        public ThreeD: ThreeDFormat;
        public Underline: WdUnderline;
        public UnderlineColor: WdColor;
    }

    class FontNames {
        private 'Word.FontNames_typekey': FontNames;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): string;
        public readonly Parent: any;
    }

    class Footnote {
        private 'Word.Footnote_typekey': Footnote;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Parent: any;
        public readonly Range: Range;
        public readonly Reference: Range;
    }

    class FootnoteOptions {
        private 'Word.FootnoteOptions_typekey': FootnoteOptions;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Location: WdFootnoteLocation;
        public NumberingRule: WdNumberingRule;
        public NumberStyle: WdNoteNumberStyle;
        public readonly Parent: any;
        public StartingNumber: number;
    }

    class Footnotes {
        private 'Word.Footnotes_typekey': Footnotes;
        private constructor();
        public Add(Range: Range, Reference?: any, Text?: any): Footnote;
        public readonly Application: Application;
        public readonly ContinuationNotice: Range;
        public readonly ContinuationSeparator: Range;
        public Convert(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Footnote;
        public Location: WdFootnoteLocation;
        public NumberingRule: WdNumberingRule;
        public NumberStyle: WdNoteNumberStyle;
        public readonly Parent: any;
        public ResetContinuationNotice(): void;
        public ResetContinuationSeparator(): void;
        public ResetSeparator(): void;
        public readonly Separator: Range;
        public StartingNumber: number;
        public SwapWithEndnotes(): void;
    }

    class FormField {
        private 'Word.FormField_typekey': FormField;
        private constructor();
        public readonly Application: Application;
        public CalculateOnExit: boolean;
        public readonly CheckBox: CheckBox;
        public Copy(): void;
        public readonly Creator: number;
        public Cut(): void;
        public Delete(): void;
        public readonly DropDown: DropDown;
        public Enabled: boolean;
        public EntryMacro: string;
        public ExitMacro: string;
        public HelpText: string;
        public Name: string;
        public readonly Next: FormField;
        public OwnHelp: boolean;
        public OwnStatus: boolean;
        public readonly Parent: any;
        public readonly Previous: FormField;
        public readonly Range: Range;
        public Result: string;
        public Select(): void;
        public StatusText: string;
        public readonly TextInput: TextInput;
        public readonly Type: WdFieldType;
    }

    class FormFields {
        private 'Word.FormFields_typekey': FormFields;
        private constructor();
        public Add(Range: Range, Type: WdFieldType): FormField;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): FormField;
        public readonly Parent: any;
        public Shaded: boolean;
    }

    class Frame {
        private 'Word.Frame_typekey': Frame;
        private constructor();
        public readonly Application: Application;
        public Borders: Borders;
        public Copy(): void;
        public readonly Creator: number;
        public Cut(): void;
        public Delete(): void;
        public Height: number;
        public HeightRule: WdFrameSizeRule;
        public HorizontalDistanceFromText: number;
        public HorizontalPosition: number;
        public LockAnchor: boolean;
        public readonly Parent: any;
        public readonly Range: Range;
        public RelativeHorizontalPosition: WdRelativeHorizontalPosition;
        public RelativeVerticalPosition: WdRelativeVerticalPosition;
        public Select(): void;
        public readonly Shading: Shading;
        public TextWrap: boolean;
        public VerticalDistanceFromText: number;
        public VerticalPosition: number;
        public Width: number;
        public WidthRule: WdFrameSizeRule;
    }

    class Frames {
        private 'Word.Frames_typekey': Frames;
        private constructor();
        public Add(Range: Range): Frame;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Delete(): void;
        public Item(Index: number): Frame;
        public readonly Parent: any;
    }

    class Frameset {
        private 'Word.Frameset_typekey': Frameset;
        private constructor();
        public AddNewFrame(Where: WdFramesetNewFrameLocation): Frameset;
        public readonly Application: Application;
        public readonly ChildFramesetCount: number;
        public ChildFramesetItem(Index: number): Frameset;
        public readonly Creator: number;
        public Delete(): void;
        public FrameDefaultURL: string;
        public FrameDisplayBorders: boolean;
        public FrameLinkToFile: boolean;
        public FrameName: string;
        public FrameResizable: boolean;
        public FrameScrollbarType: WdScrollbarType;
        public FramesetBorderColor: WdColor;
        public FramesetBorderWidth: number;
        public Height: number;
        public HeightType: WdFramesetSizeType;
        public readonly Parent: any;
        public readonly ParentFrameset: Frameset;
        public readonly Type: WdFramesetType;
        public Width: number;
        public WidthType: WdFramesetSizeType;
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
        public AddNodes(SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        public readonly Application: Application;
        public ConvertToShape(Anchor?: any): Shape;
        public readonly Creator: number;
        public readonly Parent: any;
    }

    class Global {
        private 'Word.Global_typekey': Global;
        private constructor();
        public readonly ActiveDocument: Document;
        public ActivePrinter: string;
        public readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        public readonly ActiveWindow: Window;
        public readonly AddIns: AddIns;
        public readonly AnswerWizard: Office.AnswerWizard;
        public readonly Application: Application;
        public readonly Assistant: Office.Assistant;
        public readonly AutoCaptions: AutoCaptions;
        public readonly AutoCorrect: AutoCorrect;
        public readonly AutoCorrectEmail: AutoCorrect;
        public BuildKeyCode(Arg1: WdKey, Arg2?: any, Arg3?: any, Arg4?: any): number;
        public readonly CaptionLabels: CaptionLabels;
        public CentimetersToPoints(Centimeters: number): number;
        public ChangeFileOpenDirectory(Path: string): void;
        public CheckSpelling(
            Word: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any,
            CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): boolean;
        public CleanString(String: string): string;
        public readonly CommandBars: Office.CommandBars;
        public readonly Creator: number;
        public readonly CustomDictionaries: Dictionaries;
        public CustomizationContext: any;
        public DDEExecute(Channel: number, Command: string): void;
        public DDEInitiate(App: string, Topic: string): number;
        public DDEPoke(Channel: number, Item: string, Data: string): void;
        public DDERequest(Channel: number, Item: string): string;
        public DDETerminate(Channel: number): void;
        public DDETerminateAll(): void;
        public readonly Dialogs: Dialogs;
        public readonly Documents: Documents;
        public readonly FileConverters: FileConverters;
        public FindKey(KeyCode: number, KeyCode2?: any): KeyBinding;
        public readonly FontNames: FontNames;
        public GetSpellingSuggestions(
            Word: string, CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any,
            CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any,
            CustomDictionary10?: any): SpellingSuggestions;
        public readonly HangulHanjaDictionaries: HangulHanjaConversionDictionaries;
        public Help(HelpType: any): void;
        public InchesToPoints(Inches: number): number;
        public IsObjectValid(Object: any): boolean;
        public readonly IsSandboxed: boolean;
        public readonly KeyBindings: KeyBindings;
        public KeysBoundTo(KeyCategory: WdKeyCategory, Command: string, CommandParameter?: any): KeysBoundTo;
        public KeyString(KeyCode: number, KeyCode2?: any): string;
        public readonly LandscapeFontNames: FontNames;
        public readonly Languages: Languages;
        public readonly LanguageSettings: Office.LanguageSettings;
        public LinesToPoints(Lines: number): number;
        public readonly ListGalleries: ListGalleries;
        public readonly MacroContainer: any;
        public MillimetersToPoints(Millimeters: number): number;
        public readonly Name: string;
        public NewWindow(): Window;
        public readonly NormalTemplate: Template;
        public readonly Options: Options;
        public readonly Parent: any;
        public PicasToPoints(Picas: number): number;
        public PixelsToPoints(Pixels: number, fVertical?: any): number;
        public PointsToCentimeters(Points: number): number;
        public PointsToInches(Points: number): number;
        public PointsToLines(Points: number): number;
        public PointsToMillimeters(Points: number): number;
        public PointsToPicas(Points: number): number;
        public PointsToPixels(Points: number, fVertical?: any): number;
        public readonly PortraitFontNames: FontNames;
        public PrintPreview: boolean;
        public readonly ProtectedViewWindows: ProtectedViewWindows;
        public readonly RecentFiles: RecentFiles;
        public Repeat(Times?: any): boolean;
        public readonly Selection: Selection;
        public ShowVisualBasicEditor: boolean;
        public readonly StatusBar: string;
        public SynonymInfo(Word: string, LanguageID?: any): SynonymInfo;
        public readonly System: System;
        public readonly Tasks: Tasks;
        public readonly Templates: Templates;
        public readonly VBE: VBIDE.VBE;
        public readonly Windows: Windows;
        public readonly WordBasic: any;
    }

    class GlowFormat {
        private 'Word.GlowFormat_typekey': GlowFormat;
        private constructor();
        public readonly Application: Application;
        public readonly Color: ColorFormat;
        public readonly Creator: number;
        public readonly Parent: any;
        public Radius: number;
        public Transparency: number;
    }

    class GroupShapes {
        private 'Word.GroupShapes_typekey': GroupShapes;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Shape;
        public readonly Parent: any;
        public Range(Index: any): ShapeRange;
    }

    class HangulAndAlphabetException {
        private 'Word.HangulAndAlphabetException_typekey': HangulAndAlphabetException;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class HangulAndAlphabetExceptions {
        private 'Word.HangulAndAlphabetExceptions_typekey': HangulAndAlphabetExceptions;
        private constructor();
        public Add(Name: string): HangulAndAlphabetException;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): HangulAndAlphabetException;
        public readonly Parent: any;
    }

    class HangulHanjaConversionDictionaries {
        private 'Word.HangulHanjaConversionDictionaries_typekey': HangulHanjaConversionDictionaries;
        private constructor();
        public ActiveCustomDictionary: Dictionary;
        public Add(FileName: string): Dictionary;
        public readonly Application: Application;
        public readonly BuiltinDictionary: Dictionary;
        public ClearAll(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Dictionary;
        public readonly Maximum: number;
        public readonly Parent: any;
    }

    class HeaderFooter {
        private 'Word.HeaderFooter_typekey': HeaderFooter;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Exists: boolean;
        public readonly Index: WdHeaderFooterIndex;
        public readonly IsHeader: boolean;
        public LinkToPrevious: boolean;
        public readonly PageNumbers: PageNumbers;
        public readonly Parent: any;
        public readonly Range: Range;
        public readonly Shapes: Shapes;
    }

    class HeadersFooters {
        private 'Word.HeadersFooters_typekey': HeadersFooters;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: WdHeaderFooterIndex): HeaderFooter;
        public readonly Parent: any;
    }

    class HeadingStyle {
        private 'Word.HeadingStyle_typekey': HeadingStyle;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public Level: number;
        public readonly Parent: any;
        public Style: any;
    }

    class HeadingStyles {
        private 'Word.HeadingStyles_typekey': HeadingStyles;
        private constructor();
        public Add(Style: any, Level: number): HeadingStyle;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): HeadingStyle;
        public readonly Parent: any;
    }

    class HiLoLines {
        private 'Word.HiLoLines_typekey': HiLoLines;
        private constructor();
        public readonly Application: any;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): void;
    }

    class HorizontalLineFormat {
        private 'Word.HorizontalLineFormat_typekey': HorizontalLineFormat;
        private constructor();
        public Alignment: WdHorizontalLineAlignment;
        public readonly Application: Application;
        public readonly Creator: number;
        public NoShade: boolean;
        public readonly Parent: any;
        public PercentWidth: number;
        public WidthType: WdHorizontalLineWidthType;
    }

    class HTMLDivision {
        private 'Word.HTMLDivision_typekey': HTMLDivision;
        private constructor();
        public readonly Application: Application;
        public readonly Borders: Borders;
        public readonly Creator: number;
        public Delete(): void;
        public HTMLDivisionParent(LevelsUp?: any): HTMLDivision;
        public readonly HTMLDivisions: HTMLDivisions;
        public LeftIndent: number;
        public readonly Parent: any;
        public readonly Range: Range;
        public RightIndent: number;
        public SpaceAfter: number;
        public SpaceBefore: number;
    }

    class HTMLDivisions {
        private 'Word.HTMLDivisions_typekey': HTMLDivisions;
        private constructor();
        public Add(Range?: any): HTMLDivision;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): HTMLDivision;
        public readonly NestingLevel: number;
        public readonly Parent: any;
    }

    class Hyperlink {
        private 'Word.Hyperlink_typekey': Hyperlink;
        private constructor();
        public Address: string;
        public readonly AddressOld: string;
        public AddToFavorites(): void;
        public readonly Application: Application;
        public CreateNewDocument(FileName: string, EditNow: boolean, Overwrite: boolean): void;
        public readonly Creator: number;
        public Delete(): void;
        public EmailSubject: string;
        public readonly ExtraInfoRequired: boolean;
        public Follow(NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Range: Range;
        public ScreenTip: string;
        public readonly Shape: Shape;
        public SubAddress: string;
        public readonly SubAddressOld: string;
        public Target: string;
        public TextToDisplay: string;
        public readonly Type: Office.MsoHyperlinkType;
    }

    class Hyperlinks {
        private 'Word.Hyperlinks_typekey': Hyperlinks;
        private constructor();
        public _Add(Anchor: any, Address?: any, SubAddress?: any): Hyperlink;
        public Add(Anchor: any, Address?: any, SubAddress?: any, ScreenTip?: any, TextToDisplay?: any, Target?: any): Hyperlink;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Hyperlink;
        public readonly Parent: any;
    }

    class Index {
        private 'Word.Index_typekey': Index;
        private constructor();
        public AccentedLetters: boolean;
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public Filter: WdIndexFilter;
        public HeadingSeparator: WdHeadingSeparator;
        public IndexLanguage: WdLanguageID;
        public NumberOfColumns: number;
        public readonly Parent: any;
        public readonly Range: Range;
        public RightAlignPageNumbers: boolean;
        public SortBy: WdIndexSortBy;
        public TabLeader: WdTabLeader;
        public Type: WdIndexType;
        public Update(): void;
    }

    class Indexes {
        private 'Word.Indexes_typekey': Indexes;
        private constructor();
        public Add(Range: Range, HeadingSeparator?: any, RightAlignPageNumbers?: any, Type?: any, NumberOfColumns?: any, AccentedLetters?: any, SortBy?: any, IndexLanguage?: any): Index;
        public AddOld(Range: Range, HeadingSeparator?: any, RightAlignPageNumbers?: any, Type?: any, NumberOfColumns?: any, AccentedLetters?: any): Index;
        public readonly Application: Application;
        public AutoMarkEntries(ConcordanceFileName: string): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Format: WdIndexFormat;
        public Item(Index: number): Index;
        public MarkAllEntries(Range: Range, Entry?: any, EntryAutoText?: any, CrossReference?: any, CrossReferenceAutoText?: any, BookmarkName?: any, Bold?: any, Italic?: any): void;
        public MarkEntry(Range: Range, Entry?: any, EntryAutoText?: any, CrossReference?: any, CrossReferenceAutoText?: any, BookmarkName?: any, Bold?: any, Italic?: any, Reading?: any): Field;
        public readonly Parent: any;
    }

    class InlineShape {
        private 'Word.InlineShape_typekey': InlineShape;
        private constructor();
        public Activate(): void;
        public AlternativeText: string;
        public readonly AnchorID: number;
        public readonly Application: Application;
        public Borders: Borders;
        public readonly Chart: Chart;
        public ConvertToShape(): Shape;
        public readonly Creator: number;
        public Delete(): void;
        public readonly EditID: number;
        public readonly Field: Field;
        public readonly Fill: FillFormat;
        public readonly Glow: GlowFormat;
        public readonly GroupItems: GroupShapes;
        public readonly HasChart: Office.MsoTriState;
        public readonly HasSmartArt: Office.MsoTriState;
        public Height: number;
        public readonly HorizontalLineFormat: HorizontalLineFormat;
        public readonly Hyperlink: Hyperlink;
        public readonly IsPictureBullet: boolean;
        public readonly Line: LineFormat;
        public readonly LinkFormat: LinkFormat;
        public LockAspectRatio: Office.MsoTriState;
        public readonly OLEFormat: OLEFormat;
        public readonly OWSAnchor: number;
        public readonly Parent: any;
        public PictureFormat: PictureFormat;
        public readonly Range: Range;
        public readonly Reflection: ReflectionFormat;
        public Reset(): void;
        public ScaleHeight: number;
        public ScaleWidth: number;
        public readonly Script: Office.Script;
        public Select(): void;
        public readonly Shadow: ShadowFormat;
        public readonly SmartArt: Office.SmartArt;
        public readonly SoftEdge: SoftEdgeFormat;
        public TextEffect: TextEffectFormat;
        public Title: string;
        public readonly Type: WdInlineShapeType;
        public Width: number;
    }

    class InlineShapes {
        private 'Word.InlineShapes_typekey': InlineShapes;
        private constructor();

        /** @param Office.XlChartType [Type=-1] */
        public AddChart(Type?: Office.XlChartType, Range?: any): InlineShape;
        public AddHorizontalLine(FileName: string, Range?: any): InlineShape;
        public AddHorizontalLineStandard(Range?: any): InlineShape;
        public AddOLEControl(ClassType?: any, Range?: any): InlineShape;
        public AddOLEObject(ClassType?: any, FileName?: any, LinkToFile?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Range?: any): InlineShape;
        public AddPicture(FileName: string, LinkToFile?: any, SaveWithDocument?: any, Range?: any): InlineShape;
        public AddPictureBullet(FileName: string, Range?: any): InlineShape;
        public AddSmartArt(Layout: Office.SmartArtLayout, Range?: any): InlineShape;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): InlineShape;
        public New(Range: Range): InlineShape;
        public readonly Parent: any;
    }

    class Interior {
        private 'Word.Interior_typekey': Interior;
        private constructor();
        public readonly Application: any;
        public Color: any;
        public ColorIndex: any;
        public readonly Creator: number;
        public InvertIfNegative: any;
        public readonly Parent: any;
        public Pattern: any;
        public PatternColor: any;
        public PatternColorIndex: any;
    }

    class KeyBinding {
        private 'Word.KeyBinding_typekey': KeyBinding;
        private constructor();
        public readonly Application: Application;
        public Clear(): void;
        public readonly Command: string;
        public readonly CommandParameter: string;
        public readonly Context: any;
        public readonly Creator: number;
        public Disable(): void;
        public Execute(): void;
        public readonly KeyCategory: WdKeyCategory;
        public readonly KeyCode: number;
        public readonly KeyCode2: number;
        public readonly KeyString: string;
        public readonly Parent: any;
        public readonly Protected: boolean;
        public Rebind(KeyCategory: WdKeyCategory, Command: string, CommandParameter?: any): void;
    }

    class KeyBindings {
        private 'Word.KeyBindings_typekey': KeyBindings;
        private constructor();
        public Add(KeyCategory: WdKeyCategory, Command: string, KeyCode: number, KeyCode2?: any, CommandParameter?: any): KeyBinding;
        public readonly Application: Application;
        public ClearAll(): void;
        public readonly Context: any;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): KeyBinding;
        public Key(KeyCode: number, KeyCode2?: any): KeyBinding;
        public readonly Parent: any;
    }

    class KeysBoundTo {
        private 'Word.KeysBoundTo_typekey': KeysBoundTo;
        private constructor();
        public readonly Application: Application;
        public readonly Command: string;
        public readonly CommandParameter: string;
        public readonly Context: any;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): KeyBinding;
        public Key(KeyCode: number, KeyCode2?: any): KeyBinding;
        public readonly KeyCategory: WdKeyCategory;
        public readonly Parent: any;
    }

    class Language {
        private 'Word.Language_typekey': Language;
        private constructor();
        public readonly ActiveGrammarDictionary: Dictionary;
        public readonly ActiveHyphenationDictionary: Dictionary;
        public readonly ActiveSpellingDictionary: Dictionary;
        public readonly ActiveThesaurusDictionary: Dictionary;
        public readonly Application: Application;
        public readonly Creator: number;
        public DefaultWritingStyle: string;
        public readonly ID: WdLanguageID;
        public readonly Name: string;
        public readonly NameLocal: string;
        public readonly Parent: any;
        public SpellingDictionaryType: WdDictionaryType;
        public readonly WritingStyleList: any;
    }

    class Languages {
        private 'Word.Languages_typekey': Languages;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Language;
        public readonly Parent: any;
    }

    class Legend {
        private 'Word.Legend_typekey': Legend;
        private constructor();
        public readonly Application: any;
        public AutoScaleFont: any;
        public readonly Border: ChartBorder;
        public Clear(): any;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Fill: ChartFillFormat;
        public readonly Font: ChartFont;
        public readonly Format: ChartFormat;
        public Height: number;
        public IncludeInLayout: boolean;
        public readonly Interior: Interior;
        public Left: number;
        public LegendEntries(Index?: any): any;
        public readonly Name: string;
        public readonly Parent: any;
        public Position: XlLegendPosition;
        public Select(): any;
        public Shadow: boolean;
        public Top: number;
        public Width: number;
    }

    class LetterContent {
        private 'Word.LetterContent_typekey': LetterContent;
        private constructor();
        public readonly Application: Application;
        public AttentionLine: string;
        public CCList: string;
        public Closing: string;
        public readonly Creator: number;
        public DateFormat: string;
        public readonly Duplicate: LetterContent;
        public EnclosureNumber: number;
        public IncludeHeaderFooter: boolean;
        public InfoBlock: boolean;
        public Letterhead: boolean;
        public LetterheadLocation: WdLetterheadLocation;
        public LetterheadSize: number;
        public LetterStyle: WdLetterStyle;
        public MailingInstructions: string;
        public PageDesign: string;
        public readonly Parent: any;
        public RecipientAddress: string;
        public RecipientCode: string;
        public RecipientGender: WdSalutationGender;
        public RecipientName: string;
        public RecipientReference: string;
        public ReturnAddress: string;
        public ReturnAddressShortForm: string;
        public Salutation: string;
        public SalutationType: WdSalutationType;
        public SenderCity: string;
        public SenderCode: string;
        public SenderCompany: string;
        public SenderGender: WdSalutationGender;
        public SenderInitials: string;
        public SenderJobTitle: string;
        public SenderName: string;
        public SenderReference: string;
        public Subject: string;
    }

    class Line {
        private 'Word.Line_typekey': Line;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Height: number;
        public readonly Left: number;
        public readonly LineType: WdLineType;
        public readonly Parent: any;
        public readonly Range: Range;
        public readonly Rectangles: Rectangles;
        public readonly Top: number;
        public readonly Width: number;
    }

    class LineFormat {
        private 'Word.LineFormat_typekey': LineFormat;
        private constructor();
        public readonly Application: Application;
        public readonly BackColor: ColorFormat;
        public BeginArrowheadLength: Office.MsoArrowheadLength;
        public BeginArrowheadStyle: Office.MsoArrowheadStyle;
        public BeginArrowheadWidth: Office.MsoArrowheadWidth;
        public readonly Creator: number;
        public DashStyle: Office.MsoLineDashStyle;
        public EndArrowheadLength: Office.MsoArrowheadLength;
        public EndArrowheadStyle: Office.MsoArrowheadStyle;
        public EndArrowheadWidth: Office.MsoArrowheadWidth;
        public readonly ForeColor: ColorFormat;
        public InsetPen: Office.MsoTriState;
        public readonly Parent: any;
        public Pattern: Office.MsoPatternType;
        public Style: Office.MsoLineStyle;
        public Transparency: number;
        public Visible: Office.MsoTriState;
        public Weight: number;
    }

    class LineNumbering {
        private 'Word.LineNumbering_typekey': LineNumbering;
        private constructor();
        public Active: number;
        public readonly Application: Application;
        public CountBy: number;
        public readonly Creator: number;
        public DistanceFromText: number;
        public readonly Parent: any;
        public RestartMode: WdNumberingRule;
        public StartingNumber: number;
    }

    class Lines {
        private 'Word.Lines_typekey': Lines;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Line;
        public readonly Parent: any;
    }

    class LinkFormat {
        private 'Word.LinkFormat_typekey': LinkFormat;
        private constructor();
        public readonly Application: Application;
        public AutoUpdate: boolean;
        public BreakLink(): void;
        public readonly Creator: number;
        public Locked: boolean;
        public readonly Parent: any;
        public SavePictureWithDocument: boolean;
        public SourceFullName: string;
        public readonly SourceName: string;
        public readonly SourcePath: string;
        public readonly Type: WdLinkType;
        public Update(): void;
    }

    class List {
        private 'Word.List_typekey': List;
        private constructor();
        public readonly Application: Application;
        public ApplyListTemplate(ListTemplate: ListTemplate, ContinuePreviousList?: any, DefaultListBehavior?: any): void;
        public ApplyListTemplateOld(ListTemplate: ListTemplate, ContinuePreviousList?: any): void;
        public ApplyListTemplateWithLevel(ListTemplate: ListTemplate, ContinuePreviousList?: any, DefaultListBehavior?: any, ApplyLevel?: any): void;
        public CanContinuePreviousList(ListTemplate: ListTemplate): WdContinue;
        public ConvertNumbersToText(NumberType?: any): void;
        public CountNumberedItems(NumberType?: any, Level?: any): number;
        public readonly Creator: number;
        public readonly ListParagraphs: ListParagraphs;
        public readonly Parent: any;
        public readonly Range: Range;
        public RemoveNumbers(NumberType?: any): void;
        public readonly SingleListTemplate: boolean;
        public readonly StyleName: string;
    }

    class ListEntries {
        private 'Word.ListEntries_typekey': ListEntries;
        private constructor();
        public Add(Name: string, Index?: any): ListEntry;
        public readonly Application: Application;
        public Clear(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): ListEntry;
        public readonly Parent: any;
    }

    class ListEntry {
        private 'Word.ListEntry_typekey': ListEntry;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public Name: string;
        public readonly Parent: any;
    }

    class ListFormat {
        private 'Word.ListFormat_typekey': ListFormat;
        private constructor();
        public readonly Application: Application;
        public ApplyBulletDefault(DefaultListBehavior?: any): void;
        public ApplyBulletDefaultOld(): void;
        public ApplyListTemplate(ListTemplate: ListTemplate, ContinuePreviousList?: any, ApplyTo?: any, DefaultListBehavior?: any): void;
        public ApplyListTemplateOld(ListTemplate: ListTemplate, ContinuePreviousList?: any, ApplyTo?: any): void;
        public ApplyListTemplateWithLevel(ListTemplate: ListTemplate, ContinuePreviousList?: any, ApplyTo?: any, DefaultListBehavior?: any, ApplyLevel?: any): void;
        public ApplyNumberDefault(DefaultListBehavior?: any): void;
        public ApplyNumberDefaultOld(): void;
        public ApplyOutlineNumberDefault(DefaultListBehavior?: any): void;
        public ApplyOutlineNumberDefaultOld(): void;
        public CanContinuePreviousList(ListTemplate: ListTemplate): WdContinue;
        public ConvertNumbersToText(NumberType?: any): void;
        public CountNumberedItems(NumberType?: any, Level?: any): number;
        public readonly Creator: number;
        public readonly List: List;
        public ListIndent(): void;
        public ListLevelNumber: number;
        public ListOutdent(): void;
        public readonly ListPictureBullet: InlineShape;
        public readonly ListString: string;
        public readonly ListTemplate: ListTemplate;
        public readonly ListType: WdListType;
        public readonly ListValue: number;
        public readonly Parent: any;
        public RemoveNumbers(NumberType?: any): void;
        public readonly SingleList: boolean;
        public readonly SingleListTemplate: boolean;
    }

    class ListGalleries {
        private 'Word.ListGalleries_typekey': ListGalleries;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: WdListGalleryType): ListGallery;
        public readonly Parent: any;
    }

    class ListGallery {
        private 'Word.ListGallery_typekey': ListGallery;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly ListTemplates: ListTemplates;
        public Modified(Index: number): boolean;
        public readonly Parent: any;
        public Reset(Index: number): void;
    }

    class ListLevel {
        private 'Word.ListLevel_typekey': ListLevel;
        private constructor();
        public Alignment: WdListLevelAlignment;
        public readonly Application: Application;
        public ApplyPictureBullet(FileName: string): InlineShape;
        public readonly Creator: number;
        public Font: Font;
        public readonly Index: number;
        public LinkedStyle: string;
        public NumberFormat: string;
        public NumberPosition: number;
        public NumberStyle: WdListNumberStyle;
        public readonly Parent: any;
        public readonly PictureBullet: InlineShape;
        public ResetOnHigher: number;
        public ResetOnHigherOld: boolean;
        public StartAt: number;
        public TabPosition: number;
        public TextPosition: number;
        public TrailingCharacter: WdTrailingCharacter;
    }

    class ListLevels {
        private 'Word.ListLevels_typekey': ListLevels;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): ListLevel;
        public readonly Parent: any;
    }

    class ListParagraphs {
        private 'Word.ListParagraphs_typekey': ListParagraphs;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Paragraph;
        public readonly Parent: any;
    }

    class Lists {
        private 'Word.Lists_typekey': Lists;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): List;
        public readonly Parent: any;
    }

    class ListTemplate {
        private 'Word.ListTemplate_typekey': ListTemplate;
        private constructor();
        public readonly Application: Application;
        public Convert(Level?: any): ListTemplate;
        public readonly Creator: number;
        public readonly ListLevels: ListLevels;
        public Name: string;
        public OutlineNumbered: boolean;
        public readonly Parent: any;
    }

    class ListTemplates {
        private 'Word.ListTemplates_typekey': ListTemplates;
        private constructor();
        public Add(OutlineNumbered?: any, Name?: any): ListTemplate;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): ListTemplate;
        public readonly Parent: any;
    }

    class Mailer {
        private 'Word.Mailer_typekey': Mailer;
        private constructor();
        public readonly Application: Application;
        public BCCRecipients: any;
        public CCRecipients: any;
        public readonly Creator: number;
        public Enclosures: any;
        public readonly Parent: any;
        public readonly Received: boolean;
        public Recipients: any;
        public readonly SendDateTime: VarDate;
        public readonly Sender: string;
        public Subject: string;
    }

    class MailingLabel {
        private 'Word.MailingLabel_typekey': MailingLabel;
        private constructor();
        public readonly Application: Application;
        public CreateNewDocument(Name?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any, PrintEPostageLabel?: any, Vertical?: any): Document;
        public CreateNewDocument2000(Name?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any): Document;
        public CreateNewDocumentByID(LabelID?: any, Address?: any, AutoText?: any, ExtractAddress?: any, LaserTray?: any, PrintEPostageLabel?: any, Vertical?: any): Document;
        public readonly Creator: number;
        public readonly CustomLabels: CustomLabels;
        public DefaultLabelName: string;
        public DefaultLaserTray: WdPaperTray;
        public DefaultPrintBarCode: boolean;
        public LabelOptions(): void;
        public readonly Parent: any;
        public PrintOut(Name?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any, PrintEPostageLabel?: any, Vertical?: any): void;
        public PrintOut2000(Name?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any): void;
        public PrintOutByID(LabelID?: any, Address?: any, ExtractAddress?: any, LaserTray?: any, SingleLabel?: any, Row?: any, Column?: any, PrintEPostageLabel?: any, Vertical?: any): void;
        public Vertical: boolean;
    }

    class MailMerge {
        private 'Word.MailMerge_typekey': MailMerge;
        private constructor();
        public readonly Application: Application;
        public Check(): void;
        public CreateDataSource(
            Name?: any, PasswordDocument?: any, WritePasswordDocument?: any, HeaderRecord?: any, MSQuery?: any, SQLStatement?: any, SQLStatement1?: any, Connection?: any, LinkToSource?: any): void;
        public CreateHeaderSource(Name: string, PasswordDocument?: any, WritePasswordDocument?: any, HeaderRecord?: any): void;
        public readonly Creator: number;
        public readonly DataSource: MailMergeDataSource;
        public Destination: WdMailMergeDestination;
        public EditDataSource(): void;
        public EditHeaderSource(): void;
        public EditMainDocument(): void;
        public Execute(Pause?: any): void;
        public readonly Fields: MailMergeFields;
        public HighlightMergeFields: boolean;
        public MailAddressFieldName: string;
        public MailAsAttachment: boolean;
        public MailFormat: WdMailMergeMailFormat;
        public MailSubject: string;
        public MainDocumentType: WdMailMergeMainDocType;
        public OpenDataSource(
            Name: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, LinkToSource?: any, AddToRecentFiles?: any, PasswordDocument?: any,
            PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any,
            OpenExclusive?: any, SubType?: any): void;
        public OpenDataSource2000(
            Name: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, LinkToSource?: any, AddToRecentFiles?: any, PasswordDocument?: any,
            PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any): void;
        public OpenHeaderSource(
            Name: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, OpenExclusive?: any): void;
        public OpenHeaderSource2000(
            Name: string, Format?: any, ConfirmConversions?: any, ReadOnly?: any, AddToRecentFiles?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any): void;
        public readonly Parent: any;
        public ShowSendToCustom: string;
        public ShowWizard(InitialState: any, ShowDocumentStep?: any, ShowTemplateStep?: any, ShowDataStep?: any, ShowWriteStep?: any, ShowPreviewStep?: any, ShowMergeStep?: any): void;
        public readonly State: WdMailMergeState;
        public SuppressBlankLines: boolean;
        public UseAddressBook(Type: string): void;
        public ViewMailMergeFieldCodes: number;
        public WizardState: number;
    }

    class MailMergeDataField {
        private 'Word.MailMergeDataField_typekey': MailMergeDataField;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Value: string;
    }

    class MailMergeDataFields {
        private 'Word.MailMergeDataFields_typekey': MailMergeDataFields;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): MailMergeDataField;
        public readonly Parent: any;
    }

    class MailMergeDataSource {
        private 'Word.MailMergeDataSource_typekey': MailMergeDataSource;
        private constructor();
        public ActiveRecord: WdMailMergeActiveRecord;
        public readonly Application: Application;
        public Close(): void;
        public readonly ConnectString: string;
        public readonly Creator: number;
        public readonly DataFields: MailMergeDataFields;
        public readonly FieldNames: MailMergeFieldNames;
        public FindRecord(FindText: string, Field?: any): boolean;
        public FindRecord2000(FindText: string, Field: string): boolean;
        public FirstRecord: number;
        public readonly HeaderSourceName: string;
        public readonly HeaderSourceType: WdMailMergeDataSource;
        public Included: boolean;
        public InvalidAddress: boolean;
        public InvalidComments: string;
        public LastRecord: number;
        public readonly MappedDataFields: MappedDataFields;
        public readonly Name: string;
        public readonly Parent: any;
        public QueryString: string;
        public readonly RecordCount: number;
        public SetAllErrorFlags(Invalid: boolean, InvalidComment: string): void;
        public SetAllIncludedFlags(Included: boolean): void;
        public readonly TableName: string;
        public readonly Type: WdMailMergeDataSource;
    }

    class MailMergeField {
        private 'Word.MailMergeField_typekey': MailMergeField;
        private constructor();
        public readonly Application: Application;
        public Code: Range;
        public Copy(): void;
        public readonly Creator: number;
        public Cut(): void;
        public Delete(): void;
        public Locked: boolean;
        public readonly Next: MailMergeField;
        public readonly Parent: any;
        public readonly Previous: MailMergeField;
        public Select(): void;
        public readonly Type: WdFieldType;
    }

    class MailMergeFieldName {
        private 'Word.MailMergeFieldName_typekey': MailMergeFieldName;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class MailMergeFieldNames {
        private 'Word.MailMergeFieldNames_typekey': MailMergeFieldNames;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): MailMergeFieldName;
        public readonly Parent: any;
    }

    class MailMergeFields {
        private 'Word.MailMergeFields_typekey': MailMergeFields;
        private constructor();
        public Add(Range: Range, Name: string): MailMergeField;
        public AddAsk(Range: Range, Name: string, Prompt?: any, DefaultAskText?: any, AskOnce?: any): MailMergeField;
        public AddFillIn(Range: Range, Prompt?: any, DefaultFillInText?: any, AskOnce?: any): MailMergeField;
        public AddIf(Range: Range, MergeField: string, Comparison: WdMailMergeComparison, CompareTo?: any, TrueAutoText?: any, TrueText?: any, FalseAutoText?: any, FalseText?: any): MailMergeField;
        public AddMergeRec(Range: Range): MailMergeField;
        public AddMergeSeq(Range: Range): MailMergeField;
        public AddNext(Range: Range): MailMergeField;
        public AddNextIf(Range: Range, MergeField: string, Comparison: WdMailMergeComparison, CompareTo?: any): MailMergeField;
        public AddSet(Range: Range, Name: string, ValueText?: any, ValueAutoText?: any): MailMergeField;
        public AddSkipIf(Range: Range, MergeField: string, Comparison: WdMailMergeComparison, CompareTo?: any): MailMergeField;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): MailMergeField;
        public readonly Parent: any;
    }

    class MailMessage {
        private 'Word.MailMessage_typekey': MailMessage;
        private constructor();
        public readonly Application: Application;
        public CheckName(): void;
        public readonly Creator: number;
        public Delete(): void;
        public DisplayMoveDialog(): void;
        public DisplayProperties(): void;
        public DisplaySelectNamesDialog(): void;
        public Forward(): void;
        public GoToNext(): void;
        public GoToPrevious(): void;
        public readonly Parent: any;
        public Reply(): void;
        public ReplyAll(): void;
        public ToggleHeader(): void;
    }

    class MappedDataField {
        private 'Word.MappedDataField_typekey': MappedDataField;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public DataFieldIndex: number;
        public readonly DataFieldName: string;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Value: string;
    }

    class MappedDataFields {
        private 'Word.MappedDataFields_typekey': MappedDataFields;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: WdMappedDataFields): MappedDataField;
        public readonly Parent: any;
    }

    class OLEControl {
        private 'Word.OLEControl_typekey': OLEControl;
        private constructor();
        public Activate(): void;
        public AltHTML: string;
        public readonly Automation: any;
        public Copy(): void;
        public Cut(): void;
        public Delete(): void;
        public Height: number;
        public Left: number;
        public Name: string;
        public Select(): void;
        public Top: number;
        public Width: number;
    }

    class OLEFormat {
        private 'Word.OLEFormat_typekey': OLEFormat;
        private constructor();
        public Activate(): void;
        public ActivateAs(ClassType: string): void;
        public readonly Application: Application;
        public ClassType: string;
        public ConvertTo(ClassType?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any): void;
        public readonly Creator: number;
        public DisplayAsIcon: boolean;
        public DoVerb(VerbIndex?: any): void;
        public Edit(): void;
        public IconIndex: number;
        public IconLabel: string;
        public IconName: string;
        public readonly IconPath: string;
        public readonly Label: string;
        public readonly Object: any;
        public Open(): void;
        public readonly Parent: any;
        public PreserveFormattingOnUpdate: boolean;
        public readonly ProgID: string;
    }

    class OMath {
        private 'Word.OMath_typekey': OMath;
        private constructor();
        public AlignPoint: number;
        public readonly Application: Application;
        public readonly ArgIndex: number;
        public ArgSize: number;
        public readonly Breaks: OMathBreaks;
        public BuildUp(): void;
        public ConvertToLiteralText(): void;
        public ConvertToMathText(): void;
        public ConvertToNormalText(): void;
        public readonly Creator: number;
        public readonly Functions: OMathFunctions;
        public Justification: WdOMathJc;
        public Linearize(): void;
        public readonly NestingLevel: number;
        public readonly Parent: any;
        public readonly ParentArg: OMath;
        public readonly ParentCol: OMathMatCol;
        public readonly ParentFunction: OMathFunction;
        public readonly ParentOMath: OMath;
        public readonly ParentRow: OMathMatRow;
        public readonly Range: Range;
        public Remove(): void;
        public Type: WdOMathType;
    }

    class OMathAcc {
        private 'Word.OMathAcc_typekey': OMathAcc;
        private constructor();
        public readonly Application: Application;
        public Char: number;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Parent: any;
    }

    class OMathArgs {
        private 'Word.OMathArgs_typekey': OMathArgs;
        private constructor();
        public Add(BeforeArg?: any): OMath;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): OMath;
        public readonly Parent: any;
    }

    class OMathAutoCorrect {
        private 'Word.OMathAutoCorrect_typekey': OMathAutoCorrect;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Entries: OMathAutoCorrectEntries;
        public readonly Functions: OMathRecognizedFunctions;
        public readonly Parent: any;
        public ReplaceText: boolean;
        public UseOutsideOMath: boolean;
    }

    class OMathAutoCorrectEntries {
        private 'Word.OMathAutoCorrectEntries_typekey': OMathAutoCorrectEntries;
        private constructor();
        public Add(Name: string, Value: string): OMathAutoCorrectEntry;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): OMathAutoCorrectEntry;
        public readonly Parent: any;
    }

    class OMathAutoCorrectEntry {
        private 'Word.OMathAutoCorrectEntry_typekey': OMathAutoCorrectEntry;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public Name: string;
        public readonly Parent: any;
        public Value: string;
    }

    class OMathBar {
        private 'Word.OMathBar_typekey': OMathBar;
        private constructor();
        public readonly Application: Application;
        public BarTop: boolean;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Parent: any;
    }

    class OMathBorderBox {
        private 'Word.OMathBorderBox_typekey': OMathBorderBox;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public HideBot: boolean;
        public HideLeft: boolean;
        public HideRight: boolean;
        public HideTop: boolean;
        public readonly Parent: any;
        public StrikeBLTR: boolean;
        public StrikeH: boolean;
        public StrikeTLBR: boolean;
        public StrikeV: boolean;
    }

    class OMathBox {
        private 'Word.OMathBox_typekey': OMathBox;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Diff: boolean;
        public readonly E: OMath;
        public NoBreak: boolean;
        public OpEmu: boolean;
        public readonly Parent: any;
    }

    class OMathBreak {
        private 'Word.OMathBreak_typekey': OMathBreak;
        private constructor();
        public AlignAt: number;
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Parent: any;
        public readonly Range: Range;
    }

    class OMathBreaks {
        private 'Word.OMathBreaks_typekey': OMathBreaks;
        private constructor();
        public Add(Range: Range): OMathBreak;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): OMathBreak;
        public readonly Parent: any;
    }

    class OMathDelim {
        private 'Word.OMathDelim_typekey': OMathDelim;
        private constructor();
        public readonly Application: Application;
        public BegChar: number;
        public readonly Creator: number;
        public readonly E: OMathArgs;
        public EndChar: number;
        public Grow: boolean;
        public NoLeftChar: boolean;
        public NoRightChar: boolean;
        public readonly Parent: any;
        public SepChar: number;
        public Shape: WdOMathShapeType;
    }

    class OMathEqArray {
        private 'Word.OMathEqArray_typekey': OMathEqArray;
        private constructor();
        public Align: WdOMathVertAlignType;
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMathArgs;
        public MaxDist: boolean;
        public ObjDist: boolean;
        public readonly Parent: any;
        public RowSpacing: number;
        public RowSpacingRule: WdOMathSpacingRule;
    }

    class OMathFrac {
        private 'Word.OMathFrac_typekey': OMathFrac;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Den: OMath;
        public readonly Num: OMath;
        public readonly Parent: any;
        public Type: WdOMathFracType;
    }

    class OMathFunc {
        private 'Word.OMathFunc_typekey': OMathFunc;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly FName: OMath;
        public readonly Parent: any;
    }

    class OMathFunction {
        private 'Word.OMathFunction_typekey': OMathFunction;
        private constructor();
        public readonly Acc: OMathAcc;
        public readonly Application: Application;
        public readonly Args: OMathArgs;
        public readonly Bar: OMathBar;
        public readonly BorderBox: OMathBorderBox;
        public readonly Box: OMathBox;
        public readonly Creator: number;
        public readonly Delim: OMathDelim;
        public readonly EqArray: OMathEqArray;
        public readonly Frac: OMathFrac;
        public readonly Func: OMathFunc;
        public readonly GroupChar: OMathGroupChar;
        public readonly LimLow: OMathLimLow;
        public readonly LimUpp: OMathLimUpp;
        public readonly Mat: OMathMat;
        public readonly Nary: OMathNary;
        public readonly OMath: OMath;
        public readonly Parent: any;
        public readonly Phantom: OMathPhantom;
        public readonly Rad: OMathRad;
        public readonly Range: Range;
        public Remove(): OMathFunction;
        public readonly ScrPre: OMathScrPre;
        public readonly ScrSub: OMathScrSub;
        public readonly ScrSubSup: OMathScrSubSup;
        public readonly ScrSup: OMathScrSup;
        public readonly Type: WdOMathFunctionType;
    }

    class OMathFunctions {
        private 'Word.OMathFunctions_typekey': OMathFunctions;
        private constructor();
        public Add(Range: Range, Type: WdOMathFunctionType, NumArgs?: any, NumCols?: any): OMathFunction;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): OMathFunction;
        public readonly Parent: any;
    }

    class OMathGroupChar {
        private 'Word.OMathGroupChar_typekey': OMathGroupChar;
        private constructor();
        public AlignTop: boolean;
        public readonly Application: Application;
        public Char: number;
        public CharTop: boolean;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Parent: any;
    }

    class OMathLimLow {
        private 'Word.OMathLimLow_typekey': OMathLimLow;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Lim: OMath;
        public readonly Parent: any;
        public ToLimUpp(): OMathFunction;
    }

    class OMathLimUpp {
        private 'Word.OMathLimUpp_typekey': OMathLimUpp;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Lim: OMath;
        public readonly Parent: any;
        public ToLimLow(): OMathFunction;
    }

    class OMathMat {
        private 'Word.OMathMat_typekey': OMathMat;
        private constructor();
        public Align: WdOMathVertAlignType;
        public readonly Application: Application;
        public Cell(Row: number, Col: number): OMath;
        public ColGap: number;
        public ColGapRule: WdOMathSpacingRule;
        public readonly Cols: OMathMatCols;
        public ColSpacing: number;
        public readonly Creator: number;
        public readonly Parent: any;
        public PlcHoldHidden: boolean;
        public readonly Rows: OMathMatRows;
        public RowSpacing: number;
        public RowSpacingRule: WdOMathSpacingRule;
    }

    class OMathMatCol {
        private 'Word.OMathMatCol_typekey': OMathMatCol;
        private constructor();
        public Align: WdOMathHorizAlignType;
        public readonly Application: Application;
        public readonly Args: OMathArgs;
        public readonly ColIndex: number;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Parent: any;
    }

    class OMathMatCols {
        private 'Word.OMathMatCols_typekey': OMathMatCols;
        private constructor();
        public Add(BeforeCol?: any): OMathMatCol;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): OMathMatCol;
        public readonly Parent: any;
    }

    class OMathMatRow {
        private 'Word.OMathMatRow_typekey': OMathMatRow;
        private constructor();
        public readonly Application: Application;
        public readonly Args: OMathArgs;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Parent: any;
        public readonly RowIndex: number;
    }

    class OMathMatRows {
        private 'Word.OMathMatRows_typekey': OMathMatRows;
        private constructor();
        public Add(BeforeRow?: any): OMathMatRow;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): OMathMatRow;
        public readonly Parent: any;
    }

    class OMathNary {
        private 'Word.OMathNary_typekey': OMathNary;
        private constructor();
        public readonly Application: Application;
        public Char: number;
        public readonly Creator: number;
        public readonly E: OMath;
        public Grow: boolean;
        public HideSub: boolean;
        public HideSup: boolean;
        public readonly Parent: any;
        public readonly Sub: OMath;
        public SubSupLim: boolean;
        public readonly Sup: OMath;
    }

    class OMathPhantom {
        private 'Word.OMathPhantom_typekey': OMathPhantom;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Parent: any;
        public Show: boolean;
        public Smash: boolean;
        public Transp: boolean;
        public ZeroAsc: boolean;
        public ZeroDesc: boolean;
        public ZeroWid: boolean;
    }

    class OMathRad {
        private 'Word.OMathRad_typekey': OMathRad;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Deg: OMath;
        public readonly E: OMath;
        public HideDeg: boolean;
        public readonly Parent: any;
    }

    class OMathRecognizedFunction {
        private 'Word.OMathRecognizedFunction_typekey': OMathRecognizedFunction;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class OMathRecognizedFunctions {
        private 'Word.OMathRecognizedFunctions_typekey': OMathRecognizedFunctions;
        private constructor();
        public Add(Name: string): OMathRecognizedFunction;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): OMathRecognizedFunction;
        public readonly Parent: any;
    }

    class OMaths {
        private 'Word.OMaths_typekey': OMaths;
        private constructor();
        public Add(Range: Range): Range;
        public readonly Application: Application;
        public BuildUp(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): OMath;
        public Linearize(): void;
        public readonly Parent: any;
    }

    class OMathScrPre {
        private 'Word.OMathScrPre_typekey': OMathScrPre;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Parent: any;
        public readonly Sub: OMath;
        public readonly Sup: OMath;
        public ToScrSubSup(): OMathFunction;
    }

    class OMathScrSub {
        private 'Word.OMathScrSub_typekey': OMathScrSub;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Parent: any;
        public readonly Sub: OMath;
    }

    class OMathScrSubSup {
        private 'Word.OMathScrSubSup_typekey': OMathScrSubSup;
        private constructor();
        public AlignScripts: boolean;
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Parent: any;
        public RemoveSub(): OMathFunction;
        public RemoveSup(): OMathFunction;
        public readonly Sub: OMath;
        public readonly Sup: OMath;
        public ToScrPre(): OMathFunction;
    }

    class OMathScrSup {
        private 'Word.OMathScrSup_typekey': OMathScrSup;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly E: OMath;
        public readonly Parent: any;
        public readonly Sup: OMath;
    }

    class Options {
        private 'Word.Options_typekey': Options;
        private constructor();
        public AddBiDirectionalMarksWhenSavingTextFile: boolean;
        public AddControlCharacters: boolean;
        public AddHebDoubleQuote: boolean;
        public AllowAccentedUppercase: boolean;
        public AllowClickAndTypeMouse: boolean;
        public AllowCombinedAuxiliaryForms: boolean;
        public AllowCompoundNounProcessing: boolean;
        public AllowDragAndDrop: boolean;
        public AllowFastSave: boolean;
        public AllowOpenInDraftView: boolean;
        public AllowPixelUnits: boolean;
        public AllowReadingMode: boolean;
        public AlwaysUseClearType: boolean;
        public AnimateScreenMovements: boolean;
        public readonly Application: Application;
        public ApplyFarEastFontsToAscii: boolean;
        public ArabicMode: WdAraSpeller;
        public ArabicNumeral: WdArabicNumeral;
        public AutoCreateNewDrawings: boolean;
        public AutoFormatApplyBulletedLists: boolean;
        public AutoFormatApplyFirstIndents: boolean;
        public AutoFormatApplyHeadings: boolean;
        public AutoFormatApplyLists: boolean;
        public AutoFormatApplyOtherParas: boolean;
        public AutoFormatAsYouTypeApplyBorders: boolean;
        public AutoFormatAsYouTypeApplyBulletedLists: boolean;
        public AutoFormatAsYouTypeApplyClosings: boolean;
        public AutoFormatAsYouTypeApplyDates: boolean;
        public AutoFormatAsYouTypeApplyFirstIndents: boolean;
        public AutoFormatAsYouTypeApplyHeadings: boolean;
        public AutoFormatAsYouTypeApplyNumberedLists: boolean;
        public AutoFormatAsYouTypeApplyTables: boolean;
        public AutoFormatAsYouTypeAutoLetterWizard: boolean;
        public AutoFormatAsYouTypeDefineStyles: boolean;
        public AutoFormatAsYouTypeDeleteAutoSpaces: boolean;
        public AutoFormatAsYouTypeFormatListItemBeginning: boolean;
        public AutoFormatAsYouTypeInsertClosings: boolean;
        public AutoFormatAsYouTypeInsertOvers: boolean;
        public AutoFormatAsYouTypeMatchParentheses: boolean;
        public AutoFormatAsYouTypeReplaceFarEastDashes: boolean;
        public AutoFormatAsYouTypeReplaceFractions: boolean;
        public AutoFormatAsYouTypeReplaceHyperlinks: boolean;
        public AutoFormatAsYouTypeReplaceOrdinals: boolean;
        public AutoFormatAsYouTypeReplacePlainTextEmphasis: boolean;
        public AutoFormatAsYouTypeReplaceQuotes: boolean;
        public AutoFormatAsYouTypeReplaceSymbols: boolean;
        public AutoFormatDeleteAutoSpaces: boolean;
        public AutoFormatMatchParentheses: boolean;
        public AutoFormatPlainTextWordMail: boolean;
        public AutoFormatPreserveStyles: boolean;
        public AutoFormatReplaceFarEastDashes: boolean;
        public AutoFormatReplaceFractions: boolean;
        public AutoFormatReplaceHyperlinks: boolean;
        public AutoFormatReplaceOrdinals: boolean;
        public AutoFormatReplacePlainTextEmphasis: boolean;
        public AutoFormatReplaceQuotes: boolean;
        public AutoFormatReplaceSymbols: boolean;
        public AutoKeyboardSwitching: boolean;
        public AutoWordSelection: boolean;
        public BackgroundOpen: boolean;
        public BackgroundSave: boolean;
        public BibliographySort: string;
        public BibliographyStyle: string;
        public BlueScreen: boolean;
        public BrazilReform: WdPortugueseReform;
        public ButtonFieldClicks: number;
        public CheckGrammarAsYouType: boolean;
        public CheckGrammarWithSpelling: boolean;
        public CheckHangulEndings: boolean;
        public CheckSpellingAsYouType: boolean;
        public CommentsColor: WdColorIndex;
        public ConfirmConversions: boolean;
        public ContextualSpeller: boolean;
        public ConvertHighAnsiToFarEast: boolean;
        public CreateBackup: boolean;
        public readonly Creator: number;
        public CtrlClickHyperlinkToOpen: boolean;
        public CursorMovement: WdCursorMovement;
        public DefaultBorderColor: WdColor;
        public DefaultBorderColorIndex: WdColorIndex;
        public DefaultBorderLineStyle: WdLineStyle;
        public DefaultBorderLineWidth: WdLineWidth;
        public DefaultEPostageApp: string;
        public DefaultFilePath(Path: WdDefaultFilePath): string;
        public DefaultHighlightColorIndex: WdColorIndex;
        public DefaultOpenFormat: WdOpenFormat;
        public DefaultTextEncoding: Office.MsoEncoding;
        public DefaultTray: string;
        public DefaultTrayID: number;
        public DeletedCellColor: WdCellColor;
        public DeletedTextColor: WdColorIndex;
        public DeletedTextMark: WdDeletedTextMark;
        public DiacriticColorVal: WdColor;
        public DisableFeaturesbyDefault: boolean;
        public DisableFeaturesIntroducedAfterbyDefault: WdDisableFeaturesIntroducedAfter;
        public DisplayGridLines: boolean;
        public DisplayPasteOptions: boolean;
        public DisplaySmartTagButtons: boolean;
        public DocumentViewDirection: WdDocumentViewDirection;
        public DoNotPromptForConvert: boolean;
        public EnableHangulHanjaRecentOrdering: boolean;
        public EnableLegacyIMEMode: boolean;
        public EnableLivePreview: boolean;
        public EnableMisusedWordsDictionary: boolean;
        public EnableSound: boolean;
        public readonly EnvelopeFeederInstalled: boolean;
        public FormatScanning: boolean;
        public FrenchReform: WdFrenchSpeller;
        public GridDistanceHorizontal: number;
        public GridDistanceVertical: number;
        public GridOriginHorizontal: number;
        public GridOriginVertical: number;
        public HangulHanjaFastConversion: boolean;
        public HebrewMode: WdHebSpellStart;
        public IgnoreInternetAndFileAddresses: boolean;
        public IgnoreMixedDigits: boolean;
        public IgnoreUppercase: boolean;
        public IMEAutomaticControl: boolean;
        public InlineConversion: boolean;
        public InsertedCellColor: WdCellColor;
        public InsertedTextColor: WdColorIndex;
        public InsertedTextMark: WdInsertedTextMark;
        public INSKeyForOvertype: boolean;
        public INSKeyForPaste: boolean;
        public InterpretHighAnsi: WdHighAnsiText;
        public LabelSmartTags: boolean;
        public LocalNetworkFile: boolean;
        public MapPaperSize: boolean;
        public MatchFuzzyAY: boolean;
        public MatchFuzzyBV: boolean;
        public MatchFuzzyByte: boolean;
        public MatchFuzzyCase: boolean;
        public MatchFuzzyDash: boolean;
        public MatchFuzzyDZ: boolean;
        public MatchFuzzyHF: boolean;
        public MatchFuzzyHiragana: boolean;
        public MatchFuzzyIterationMark: boolean;
        public MatchFuzzyKanji: boolean;
        public MatchFuzzyKiKu: boolean;
        public MatchFuzzyOldKana: boolean;
        public MatchFuzzyProlongedSoundMark: boolean;
        public MatchFuzzyPunctuation: boolean;
        public MatchFuzzySmallKana: boolean;
        public MatchFuzzySpace: boolean;
        public MatchFuzzyTC: boolean;
        public MatchFuzzyZJ: boolean;
        public MeasurementUnit: WdMeasurementUnits;
        public MergedCellColor: WdCellColor;
        public MonthNames: WdMonthNames;
        public MoveFromTextColor: WdColorIndex;
        public MoveFromTextMark: WdMoveFromTextMark;
        public MoveToTextColor: WdColorIndex;
        public MoveToTextMark: WdMoveToTextMark;
        public MultipleWordConversionsMode: WdMultipleWordConversionsMode;
        public OMathAutoBuildUp: boolean;
        public OMathCopyLF: boolean;
        public OptimizeForWord97byDefault: boolean;
        public Overtype: boolean;
        public Pagination: boolean;
        public readonly Parent: any;
        public PasteAdjustParagraphSpacing: boolean;
        public PasteAdjustTableFormatting: boolean;
        public PasteAdjustWordSpacing: boolean;
        public PasteFormatBetweenDocuments: WdPasteOptions;
        public PasteFormatBetweenStyledDocuments: WdPasteOptions;
        public PasteFormatFromExternalSource: WdPasteOptions;
        public PasteFormatWithinDocument: WdPasteOptions;
        public PasteMergeFromPPT: boolean;
        public PasteMergeFromXL: boolean;
        public PasteMergeLists: boolean;
        public PasteOptionKeepBulletsAndNumbers: boolean;
        public PasteSmartCutPaste: boolean;
        public PasteSmartStyleBehavior: boolean;
        public PictureEditor: string;
        public PictureWrapType: WdWrapTypeMerged;
        public PortugalReform: WdPortugueseReform;
        public PrecisePositioning: boolean;
        public PrintBackground: boolean;
        public PrintBackgrounds: boolean;
        public PrintComments: boolean;
        public PrintDraft: boolean;
        public PrintDrawingObjects: boolean;
        public PrintEvenPagesInAscendingOrder: boolean;
        public PrintFieldCodes: boolean;
        public PrintHiddenText: boolean;
        public PrintOddPagesInAscendingOrder: boolean;
        public PrintProperties: boolean;
        public PrintReverse: boolean;
        public PrintXMLTag: boolean;
        public PromptUpdateStyle: boolean;
        public RepeatWord: boolean;
        public ReplaceSelection: boolean;
        public RevisedLinesColor: WdColorIndex;
        public RevisedLinesMark: WdRevisedLinesMark;
        public RevisedPropertiesColor: WdColorIndex;
        public RevisedPropertiesMark: WdRevisedPropertiesMark;
        public RevisionsBalloonPrintOrientation: WdRevisionsBalloonPrintOrientation;
        public RTFInClipboard: boolean;
        public SaveInterval: number;
        public SaveNormalPrompt: boolean;
        public SavePropertiesPrompt: boolean;
        public SendMailAttach: boolean;
        public SequenceCheck: boolean;
        public SetWPHelpOptions(CommandKeyHelp?: any, DocNavigationKeys?: any, MouseSimulation?: any, DemoGuidance?: any, DemoSpeed?: any, HelpType?: any): void;
        public ShortMenuNames: boolean;
        public ShowControlCharacters: boolean;
        public ShowDevTools: boolean;
        public ShowDiacritics: boolean;
        public ShowFormatError: boolean;
        public ShowMarkupOpenSave: boolean;
        public ShowMenuFloaties: boolean;
        public ShowReadabilityStatistics: boolean;
        public ShowSelectionFloaties: boolean;
        public SmartCursoring: boolean;
        public SmartCutPaste: boolean;
        public SmartParaSelection: boolean;
        public SnapToGrid: boolean;
        public SnapToShapes: boolean;
        public SpanishMode: WdSpanishSpeller;
        public SplitCellColor: WdCellColor;
        public StoreRSIDOnSave: boolean;
        public StrictFinalYaa: boolean;
        public StrictInitialAlefHamza: boolean;
        public StrictRussianE: boolean;
        public StrictTaaMarboota: boolean;
        public SuggestFromMainDictionaryOnly: boolean;
        public SuggestSpellingCorrections: boolean;
        public TabIndentKey: boolean;
        public TypeNReplace: boolean;
        public UpdateFieldsAtPrint: boolean;
        public UpdateFieldsWithTrackedChangesAtPrint: boolean;
        public UpdateLinksAtOpen: boolean;
        public UpdateLinksAtPrint: boolean;
        public UpdateStyleListBehavior: WdUpdateStyleListBehavior;
        public UseCharacterUnit: boolean;
        public UseDiffDiacColor: boolean;
        public UseGermanSpellingReform: boolean;
        public UseNormalStyleForList: boolean;
        public VirusProtection: boolean;
        public VisualSelection: WdVisualSelection;
        public WarnBeforeSavingPrintingSendingMarkup: boolean;
        public WPDocNavKeys: boolean;
        public WPHelp: boolean;
    }

    class OtherCorrectionsException {
        private 'Word.OtherCorrectionsException_typekey': OtherCorrectionsException;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class OtherCorrectionsExceptions {
        private 'Word.OtherCorrectionsExceptions_typekey': OtherCorrectionsExceptions;
        private constructor();
        public Add(Name: string): OtherCorrectionsException;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): OtherCorrectionsException;
        public readonly Parent: any;
    }

    class Page {
        private 'Word.Page_typekey': Page;
        private constructor();
        public readonly Application: Application;
        public readonly Breaks: Breaks;
        public readonly Creator: number;
        public readonly EnhMetaFileBits: any;
        public readonly Height: number;
        public readonly Left: number;
        public readonly Parent: any;
        public readonly Rectangles: Rectangles;
        public readonly Top: number;
        public readonly Width: number;
    }

    class PageNumber {
        private 'Word.PageNumber_typekey': PageNumber;
        private constructor();
        public Alignment: WdPageNumberAlignment;
        public readonly Application: Application;
        public Copy(): void;
        public readonly Creator: number;
        public Cut(): void;
        public Delete(): void;
        public readonly Index: number;
        public readonly Parent: any;
        public Select(): void;
    }

    class PageNumbers {
        private 'Word.PageNumbers_typekey': PageNumbers;
        private constructor();
        public Add(PageNumberAlignment?: any, FirstPage?: any): PageNumber;
        public readonly Application: Application;
        public ChapterPageSeparator: WdSeparatorType;
        public readonly Count: number;
        public readonly Creator: number;
        public DoubleQuote: boolean;
        public HeadingLevelForChapter: number;
        public IncludeChapterNumber: boolean;
        public Item(Index: number): PageNumber;
        public NumberStyle: WdPageNumberStyle;
        public readonly Parent: any;
        public RestartNumberingAtSection: boolean;
        public ShowFirstPageNumber: boolean;
        public StartingNumber: number;
    }

    class Pages {
        private 'Word.Pages_typekey': Pages;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Page;
        public readonly Parent: any;
    }

    class PageSetup {
        private 'Word.PageSetup_typekey': PageSetup;
        private constructor();
        public readonly Application: Application;
        public BookFoldPrinting: boolean;
        public BookFoldPrintingSheets: number;
        public BookFoldRevPrinting: boolean;
        public BottomMargin: number;
        public CharsLine: number;
        public readonly Creator: number;
        public DifferentFirstPageHeaderFooter: number;
        public FirstPageTray: WdPaperTray;
        public FooterDistance: number;
        public Gutter: number;
        public GutterOnTop: boolean;
        public GutterPos: WdGutterStyle;
        public GutterStyle: WdGutterStyleOld;
        public HeaderDistance: number;
        public LayoutMode: WdLayoutMode;
        public LeftMargin: number;
        public LineNumbering: LineNumbering;
        public LinesPage: number;
        public MirrorMargins: number;
        public OddAndEvenPagesHeaderFooter: number;
        public Orientation: WdOrientation;
        public OtherPagesTray: WdPaperTray;
        public PageHeight: number;
        public PageWidth: number;
        public PaperSize: WdPaperSize;
        public readonly Parent: any;
        public RightMargin: number;
        public SectionDirection: WdSectionDirection;
        public SectionStart: WdSectionStart;
        public SetAsTemplateDefault(): void;
        public ShowGrid: boolean;
        public SuppressEndnotes: number;
        public TextColumns: TextColumns;
        public TogglePortrait(): void;
        public TopMargin: number;
        public TwoPagesOnOne: boolean;
        public VerticalAlignment: WdVerticalAlignment;
    }

    class Pane {
        private 'Word.Pane_typekey': Pane;
        private constructor();
        public Activate(): void;
        public readonly Application: Application;
        public AutoScroll(Velocity: number): void;
        public BrowseToWindow: boolean;
        public readonly BrowseWidth: number;
        public Close(): void;
        public readonly Creator: number;
        public DisplayRulers: boolean;
        public DisplayVerticalRuler: boolean;
        public readonly Document: Document;
        public readonly Frameset: Frameset;
        public HorizontalPercentScrolled: number;
        public readonly Index: number;
        public LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;
        public MinimumFontSize: number;
        public NewFrameset(): void;
        public readonly Next: Pane;
        public readonly Pages: Pages;
        public PageScroll(Down?: any, Up?: any): void;
        public readonly Parent: any;
        public readonly Previous: Pane;
        public readonly Selection: Selection;
        public SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;
        public TOCInFrameset(): void;
        public VerticalPercentScrolled: number;
        public readonly View: View;
        public readonly Zooms: Zooms;
    }

    class Panes {
        private 'Word.Panes_typekey': Panes;
        private constructor();
        public Add(SplitVertical?: any): Pane;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Pane;
        public readonly Parent: any;
    }

    class Paragraph {
        private 'Word.Paragraph_typekey': Paragraph;
        private constructor();
        public AddSpaceBetweenFarEastAndAlpha: number;
        public AddSpaceBetweenFarEastAndDigit: number;
        public Alignment: WdParagraphAlignment;
        public readonly Application: Application;
        public AutoAdjustRightIndent: number;
        public BaseLineAlignment: WdBaselineAlignment;
        public Borders: Borders;
        public CharacterUnitFirstLineIndent: number;
        public CharacterUnitLeftIndent: number;
        public CharacterUnitRightIndent: number;
        public CloseUp(): void;
        public readonly Creator: number;
        public DisableLineHeightGrid: number;
        public readonly DropCap: DropCap;
        public FarEastLineBreakControl: number;
        public FirstLineIndent: number;
        public Format: ParagraphFormat;
        public HalfWidthPunctuationOnTopOfLine: number;
        public HangingPunctuation: number;
        public Hyphenation: number;
        public ID: string;
        public Indent(): void;
        public IndentCharWidth(Count: number): void;
        public IndentFirstLineCharWidth(Count: number): void;
        public readonly IsStyleSeparator: boolean;
        public JoinList(): void;
        public KeepTogether: number;
        public KeepWithNext: number;
        public LeftIndent: number;
        public LineSpacing: number;
        public LineSpacingRule: WdLineSpacing;
        public LineUnitAfter: number;
        public LineUnitBefore: number;

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
        public ListAdvanceTo(Level1?: number, Level2?: number, Level3?: number, Level4?: number, Level5?: number, Level6?: number, Level7?: number, Level8?: number, Level9?: number): void;
        public ListNumberOriginal(Level: number): number;
        public MirrorIndents: number;
        public Next(Count?: any): Paragraph;
        public NoLineNumber: number;
        public OpenOrCloseUp(): void;
        public OpenUp(): void;
        public Outdent(): void;
        public OutlineDemote(): void;
        public OutlineDemoteToBody(): void;
        public OutlineLevel: WdOutlineLevel;
        public OutlinePromote(): void;
        public PageBreakBefore: number;
        public readonly ParaID: number;
        public readonly Parent: any;
        public Previous(Count?: any): Paragraph;
        public readonly Range: Range;
        public ReadingOrder: WdReadingOrder;
        public Reset(): void;
        public ResetAdvanceTo(): void;
        public RightIndent: number;
        public SelectNumber(): void;
        public SeparateList(): void;
        public readonly Shading: Shading;
        public Space1(): void;
        public Space15(): void;
        public Space2(): void;
        public SpaceAfter: number;
        public SpaceAfterAuto: number;
        public SpaceBefore: number;
        public SpaceBeforeAuto: number;
        public Style: any;
        public TabHangingIndent(Count: number): void;
        public TabIndent(Count: number): void;
        public TabStops: TabStops;
        public TextboxTightWrap: WdTextboxTightWrap;
        public readonly TextID: number;
        public WidowControl: number;
        public WordWrap: number;
    }

    class ParagraphFormat {
        private 'Word.ParagraphFormat_typekey': ParagraphFormat;
        private constructor();
        public AddSpaceBetweenFarEastAndAlpha: number;
        public AddSpaceBetweenFarEastAndDigit: number;
        public Alignment: WdParagraphAlignment;
        public readonly Application: Application;
        public AutoAdjustRightIndent: number;
        public BaseLineAlignment: WdBaselineAlignment;
        public Borders: Borders;
        public CharacterUnitFirstLineIndent: number;
        public CharacterUnitLeftIndent: number;
        public CharacterUnitRightIndent: number;
        public CloseUp(): void;
        public readonly Creator: number;
        public DisableLineHeightGrid: number;
        public readonly Duplicate: ParagraphFormat;
        public FarEastLineBreakControl: number;
        public FirstLineIndent: number;
        public HalfWidthPunctuationOnTopOfLine: number;
        public HangingPunctuation: number;
        public Hyphenation: number;
        public IndentCharWidth(Count: number): void;
        public IndentFirstLineCharWidth(Count: number): void;
        public KeepTogether: number;
        public KeepWithNext: number;
        public LeftIndent: number;
        public LineSpacing: number;
        public LineSpacingRule: WdLineSpacing;
        public LineUnitAfter: number;
        public LineUnitBefore: number;
        public MirrorIndents: number;
        public NoLineNumber: number;
        public OpenOrCloseUp(): void;
        public OpenUp(): void;
        public OutlineLevel: WdOutlineLevel;
        public PageBreakBefore: number;
        public readonly Parent: any;
        public ReadingOrder: WdReadingOrder;
        public Reset(): void;
        public RightIndent: number;
        public readonly Shading: Shading;
        public Space1(): void;
        public Space15(): void;
        public Space2(): void;
        public SpaceAfter: number;
        public SpaceAfterAuto: number;
        public SpaceBefore: number;
        public SpaceBeforeAuto: number;
        public Style: any;
        public TabHangingIndent(Count: number): void;
        public TabIndent(Count: number): void;
        public TabStops: TabStops;
        public TextboxTightWrap: WdTextboxTightWrap;
        public WidowControl: number;
        public WordWrap: number;
    }

    class Paragraphs {
        private 'Word.Paragraphs_typekey': Paragraphs;
        private constructor();
        public Add(Range?: any): Paragraph;
        public AddSpaceBetweenFarEastAndAlpha: number;
        public AddSpaceBetweenFarEastAndDigit: number;
        public Alignment: WdParagraphAlignment;
        public readonly Application: Application;
        public AutoAdjustRightIndent: number;
        public BaseLineAlignment: WdBaselineAlignment;
        public Borders: Borders;
        public CharacterUnitFirstLineIndent: number;
        public CharacterUnitLeftIndent: number;
        public CharacterUnitRightIndent: number;
        public CloseUp(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public DecreaseSpacing(): void;
        public DisableLineHeightGrid: number;
        public FarEastLineBreakControl: number;
        public readonly First: Paragraph;
        public FirstLineIndent: number;
        public Format: ParagraphFormat;
        public HalfWidthPunctuationOnTopOfLine: number;
        public HangingPunctuation: number;
        public Hyphenation: number;
        public IncreaseSpacing(): void;
        public Indent(): void;
        public IndentCharWidth(Count: number): void;
        public IndentFirstLineCharWidth(Count: number): void;
        public Item(Index: number): Paragraph;
        public KeepTogether: number;
        public KeepWithNext: number;
        public readonly Last: Paragraph;
        public LeftIndent: number;
        public LineSpacing: number;
        public LineSpacingRule: WdLineSpacing;
        public LineUnitAfter: number;
        public LineUnitBefore: number;
        public NoLineNumber: number;
        public OpenOrCloseUp(): void;
        public OpenUp(): void;
        public Outdent(): void;
        public OutlineDemote(): void;
        public OutlineDemoteToBody(): void;
        public OutlineLevel: WdOutlineLevel;
        public OutlinePromote(): void;
        public PageBreakBefore: number;
        public readonly Parent: any;
        public ReadingOrder: WdReadingOrder;
        public Reset(): void;
        public RightIndent: number;
        public readonly Shading: Shading;
        public Space1(): void;
        public Space15(): void;
        public Space2(): void;
        public SpaceAfter: number;
        public SpaceAfterAuto: number;
        public SpaceBefore: number;
        public SpaceBeforeAuto: number;
        public Style: any;
        public TabHangingIndent(Count: number): void;
        public TabIndent(Count: number): void;
        public TabStops: TabStops;
        public WidowControl: number;
        public WordWrap: number;
    }

    class PictureFormat {
        private 'Word.PictureFormat_typekey': PictureFormat;
        private constructor();
        public readonly Application: Application;
        public Brightness: number;
        public ColorType: Office.MsoPictureColorType;
        public Contrast: number;
        public readonly Creator: number;
        public Crop: Office.Crop;
        public CropBottom: number;
        public CropLeft: number;
        public CropRight: number;
        public CropTop: number;
        public IncrementBrightness(Increment: number): void;
        public IncrementContrast(Increment: number): void;
        public readonly Parent: any;
        public TransparencyColor: number;
        public TransparentBackground: Office.MsoTriState;
    }

    class PlotArea {
        private 'Word.PlotArea_typekey': PlotArea;
        private constructor();
        public readonly Application: any;
        public readonly Border: ChartBorder;
        public ClearFormats(): any;
        public readonly Creator: number;
        public readonly Fill: ChartFillFormat;
        public readonly Format: ChartFormat;
        public Height: number;
        public InsideHeight: number;
        public InsideLeft: number;
        public InsideTop: number;
        public InsideWidth: number;
        public readonly Interior: Interior;
        public Left: number;
        public readonly Name: string;
        public readonly Parent: any;
        public Position: XlChartElementPosition;
        public Select(): any;
        public Top: number;
        public Width: number;
    }

    class ProofreadingErrors {
        private 'Word.ProofreadingErrors_typekey': ProofreadingErrors;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Range;
        public readonly Parent: any;
        public readonly Type: WdProofreadingErrorType;
    }

    class ProtectedViewWindow {
        private 'Word.ProtectedViewWindow_typekey': ProtectedViewWindow;
        private constructor();
        public Activate(): void;
        public readonly Active: boolean;
        public readonly Application: Application;
        public Caption: string;
        public Close(): void;
        public readonly Creator: number;
        public readonly Document: Document;
        public Edit(PasswordTemplate?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any): Document;
        public Height: number;
        public readonly Index: number;
        public Left: number;
        public readonly Parent: any;
        public readonly SourceName: string;
        public readonly SourcePath: string;
        public ToggleRibbon(): void;
        public Top: number;
        public Visible: boolean;
        public Width: number;
        public WindowState: WdWindowState;
    }

    class ProtectedViewWindows {
        private 'Word.ProtectedViewWindows_typekey': ProtectedViewWindows;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): ProtectedViewWindow;
        public Open(FileName: any, AddToRecentFiles?: any, PasswordDocument?: any, Visible?: any, OpenAndRepair?: any): ProtectedViewWindow;
        public readonly Parent: any;
    }

    class Range {
        private 'Word.Range_typekey': Range;
        private constructor();
        public readonly Application: Application;
        public AutoFormat(): void;
        public Bold: number;
        public BoldBi: number;
        public readonly BookmarkID: number;
        public readonly Bookmarks: Bookmarks;
        public Borders: Borders;
        public Calculate(): number;
        public readonly CanEdit: number;
        public readonly CanPaste: number;
        public Case: WdCharacterCase;
        public readonly Cells: Cells;
        public readonly Characters: Characters;
        public readonly CharacterStyle: any;
        public CharacterWidth: WdCharacterWidth;
        public CheckGrammar(): void;
        public CheckSpelling(
            CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, CustomDictionary2?: any, CustomDictionary3?: any, CustomDictionary4?: any,
            CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any, CustomDictionary10?: any): void;
        public CheckSynonyms(): void;
        public Collapse(Direction?: any): void;
        public readonly Columns: Columns;
        public CombineCharacters: boolean;
        public readonly Comments: Comments;
        public ComputeStatistics(Statistic: WdStatistic): number;
        public readonly Conflicts: Conflicts;
        public readonly ContentControls: ContentControls;
        public ConvertHangulAndHanja(ConversionsMode?: any, FastConversion?: any, CheckHangulEnding?: any, EnableRecentOrdering?: any, CustomDictionary?: any): void;
        public ConvertToTable(
            Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any,
            ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any, AutoFitBehavior?: any, DefaultTableBehavior?: any): Table;
        public ConvertToTableOld(
            Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any,
            ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any): Table;
        public Copy(): void;
        public CopyAsPicture(): void;
        public CreatePublisher(Edition?: any, ContainsPICT?: any, ContainsRTF?: any, ContainsText?: any): void;
        public readonly Creator: number;
        public Cut(): void;
        public Delete(Unit?: any, Count?: any): number;
        public DetectLanguage(): void;
        public DisableCharacterSpaceGrid: boolean;
        public readonly Document: Document;
        public readonly Duplicate: Range;
        public readonly Editors: Editors;
        public EmphasisMark: WdEmphasisMark;
        public End: number;
        public readonly EndnoteOptions: EndnoteOptions;
        public readonly Endnotes: Endnotes;
        public EndOf(Unit?: any, Extend?: any): number;
        public readonly EnhMetaFileBits: any;
        public Expand(Unit?: any): number;

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
        public ExportAsFixedFormat(
            OutputFileName: string, ExportFormat: WdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WdExportOptimizeFor, ExportCurrentPage?: boolean,
            Item?: WdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WdExportCreateBookmarks, DocStructureTags?: boolean,
            BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;
        public ExportFragment(FileName: string, Format: WdSaveFormat): void;
        public readonly Fields: Fields;
        public readonly Find: Find;
        public FitTextWidth: number;
        public Font: Font;
        public readonly FootnoteOptions: FootnoteOptions;
        public readonly Footnotes: Footnotes;
        public FormattedText: Range;
        public readonly FormFields: FormFields;
        public readonly Frames: Frames;
        public GetSpellingSuggestions(
            CustomDictionary?: any, IgnoreUppercase?: any, MainDictionary?: any, SuggestionMode?: any, CustomDictionary2?: any, CustomDictionary3?: any,
            CustomDictionary4?: any, CustomDictionary5?: any, CustomDictionary6?: any, CustomDictionary7?: any, CustomDictionary8?: any, CustomDictionary9?: any,
            CustomDictionary10?: any): SpellingSuggestions;
        public GoTo(What?: any, Which?: any, Count?: any, Name?: any): Range;
        public GoToEditableRange(EditorID?: any): Range;
        public GoToNext(What: WdGoToItem): Range;
        public GoToPrevious(What: WdGoToItem): Range;
        public GrammarChecked: boolean;
        public readonly GrammaticalErrors: ProofreadingErrors;
        public HighlightColorIndex: WdColorIndex;
        public HorizontalInVertical: WdHorizontalInVerticalType;
        public readonly HTMLDivisions: HTMLDivisions;
        public readonly Hyperlinks: Hyperlinks;
        public ID: string;

        /** @param boolean [MatchDestination=false] */
        public ImportFragment(FileName: string, MatchDestination?: boolean): void;
        public Information(Type: WdInformation): any;
        public readonly InlineShapes: InlineShapes;
        public InRange(Range: Range): boolean;
        public InsertAfter(Text: string): void;

        /** @param number [RelativeTo=0] */
        public InsertAlignmentTab(Alignment: number, RelativeTo?: number): void;
        public InsertAutoText(): void;
        public InsertBefore(Text: string): void;
        public InsertBreak(Type?: any): void;
        public InsertCaption(Label: any, Title?: any, TitleAutoText?: any, Position?: any, ExcludeLabel?: any): void;
        public InsertCaptionXP(Label: any, Title?: any, TitleAutoText?: any, Position?: any): void;
        public InsertCrossReference(
            ReferenceType: any, ReferenceKind: WdReferenceKind, ReferenceItem: any, InsertAsHyperlink?: any, IncludePosition?: any, SeparateNumbers?: any, SeparatorString?: any): void;
        public InsertCrossReference_2002(ReferenceType: any, ReferenceKind: WdReferenceKind, ReferenceItem: any, InsertAsHyperlink?: any, IncludePosition?: any): void;
        public InsertDatabase(
            Format?: any, Style?: any, LinkToSource?: any, Connection?: any, SQLStatement?: any, SQLStatement1?: any, PasswordDocument?: any, PasswordTemplate?: any,
            WritePasswordDocument?: any, WritePasswordTemplate?: any, DataSource?: any, From?: any, To?: any, IncludeFields?: any): void;
        public InsertDateTime(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any, DateLanguage?: any, CalendarType?: any): void;
        public InsertDateTimeOld(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any): void;
        public InsertFile(FileName: string, Range?: any, ConfirmConversions?: any, Link?: any, Attachment?: any): void;
        public InsertParagraph(): void;
        public InsertParagraphAfter(): void;
        public InsertParagraphBefore(): void;
        public InsertSymbol(CharacterNumber: number, Font?: any, Unicode?: any, Bias?: any): void;
        public InsertXML(XML: string, Transform?: any): void;
        public InStory(Range: Range): boolean;
        public readonly IsEndOfRowMark: boolean;
        public IsEqual(Range: Range): boolean;
        public Italic: number;
        public ItalicBi: number;
        public Kana: WdKana;
        public LanguageDetected: boolean;
        public LanguageID: WdLanguageID;
        public LanguageIDFarEast: WdLanguageID;
        public LanguageIDOther: WdLanguageID;
        public readonly ListFormat: ListFormat;
        public readonly ListParagraphs: ListParagraphs;
        public readonly ListStyle: any;
        public readonly Locks: CoAuthLocks;
        public LookupNameProperties(): void;
        public ModifyEnclosure(Style: any, Symbol?: any, EnclosedText?: any): void;
        public Move(Unit?: any, Count?: any): number;
        public MoveEnd(Unit?: any, Count?: any): number;
        public MoveEndUntil(Cset: any, Count?: any): number;
        public MoveEndWhile(Cset: any, Count?: any): number;
        public MoveStart(Unit?: any, Count?: any): number;
        public MoveStartUntil(Cset: any, Count?: any): number;
        public MoveStartWhile(Cset: any, Count?: any): number;
        public MoveUntil(Cset: any, Count?: any): number;
        public MoveWhile(Cset: any, Count?: any): number;
        public Next(Unit?: any, Count?: any): Range;
        public readonly NextStoryRange: Range;
        public NextSubdocument(): void;
        public NoProofing: number;
        public readonly OMaths: OMaths;
        public Orientation: WdTextOrientation;
        public PageSetup: PageSetup;
        public ParagraphFormat: ParagraphFormat;
        public readonly Paragraphs: Paragraphs;
        public readonly ParagraphStyle: any;
        public readonly Parent: any;
        public readonly ParentContentControl: ContentControl;
        public Paste(): void;
        public PasteAndFormat(Type: WdRecoveryType): void;
        public PasteAppendTable(): void;
        public PasteAsNestedTable(): void;
        public PasteExcelTable(LinkedToExcel: boolean, WordFormatting: boolean, RTF: boolean): void;
        public PasteSpecial(IconIndex?: any, Link?: any, Placement?: any, DisplayAsIcon?: any, DataType?: any, IconFileName?: any, IconLabel?: any): void;

        /**
         * @param Word.WdPhoneticGuideAlignmentType [Alignment=-1]
         * @param number [Raise=0]
         * @param number [FontSize=0]
         * @param string [FontName='']
         */
        public PhoneticGuide(Text: string, Alignment?: WdPhoneticGuideAlignmentType, Raise?: number, FontSize?: number, FontName?: string): void;
        public Previous(Unit?: any, Count?: any): Range;
        public readonly PreviousBookmarkID: number;
        public PreviousSubdocument(): void;
        public readonly ReadabilityStatistics: ReadabilityStatistics;
        public Relocate(Direction: number): void;
        public readonly Revisions: Revisions;
        public readonly Rows: Rows;
        public readonly Scripts: Office.Scripts;
        public readonly Sections: Sections;
        public Select(): void;
        public readonly Sentences: Sentences;
        public SetListLevel(Level: number): void;
        public SetRange(Start: number, End: number): void;
        public readonly Shading: Shading;
        public readonly ShapeRange: ShapeRange;
        public ShowAll: boolean;
        public readonly SmartTags: SmartTags;
        public Sort(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any,
            IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;
        public SortAscending(): void;
        public SortDescending(): void;
        public SortOld(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, LanguageID?: any): void;
        public SpellingChecked: boolean;
        public readonly SpellingErrors: ProofreadingErrors;
        public Start: number;
        public StartOf(Unit?: any, Extend?: any): number;
        public readonly StoryLength: number;
        public readonly StoryType: WdStoryType;
        public Style: any;
        public readonly Subdocuments: Subdocuments;
        public SubscribeTo(Edition: string, Format?: any): void;
        public readonly SynonymInfo: SynonymInfo;
        public readonly Tables: Tables;
        public readonly TableStyle: any;

        /**
         * @param Word.WdTCSCConverterDirection [WdTCSCConverterDirection=2]
         * @param boolean [CommonTerms=false]
         * @param boolean [UseVariants=false]
         */
        public TCSCConverter(WdTCSCConverterDirection?: WdTCSCConverterDirection, CommonTerms?: boolean, UseVariants?: boolean): void;
        public Text: string;
        public TextRetrievalMode: TextRetrievalMode;
        public readonly TopLevelTables: Tables;
        public TwoLinesInOne: WdTwoLinesInOneType;
        public Underline: WdUnderline;
        public readonly Updates: CoAuthUpdates;
        public WholeStory(): void;
        public readonly WordOpenXML: string;
        public readonly Words: Words;

        /** @param boolean [DataOnly=false] */
        public XML(DataOnly?: boolean): string;
        public readonly XMLNodes: XMLNodes;
        public readonly XMLParentNode: XMLNode;
    }

    class ReadabilityStatistic {
        private 'Word.ReadabilityStatistic_typekey': ReadabilityStatistic;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Value: number;
    }

    class ReadabilityStatistics {
        private 'Word.ReadabilityStatistics_typekey': ReadabilityStatistics;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): ReadabilityStatistic;
        public readonly Parent: any;
    }

    class RecentFile {
        private 'Word.RecentFile_typekey': RecentFile;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public Open(): Document;
        public readonly Parent: any;
        public readonly Path: string;
        public ReadOnly: boolean;
    }

    class RecentFiles {
        private 'Word.RecentFiles_typekey': RecentFiles;
        private constructor();
        public Add(Document: any, ReadOnly?: any): RecentFile;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): RecentFile;
        public Maximum: number;
        public readonly Parent: any;
    }

    class Rectangle {
        private 'Word.Rectangle_typekey': Rectangle;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Height: number;
        public readonly Left: number;
        public readonly Lines: Lines;
        public readonly Parent: any;
        public readonly Range: Range;
        public readonly RectangleType: WdRectangleType;
        public readonly Top: number;
        public readonly Width: number;
    }

    class Rectangles {
        private 'Word.Rectangles_typekey': Rectangles;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Rectangle;
        public readonly Parent: any;
    }

    class ReflectionFormat {
        private 'Word.ReflectionFormat_typekey': ReflectionFormat;
        private constructor();
        public readonly Application: Application;
        public Blur: number;
        public readonly Creator: number;
        public Offset: number;
        public readonly Parent: any;
        public Size: number;
        public Transparency: number;
        public Type: Office.MsoReflectionType;
    }

    class Replacement {
        private 'Word.Replacement_typekey': Replacement;
        private constructor();
        public readonly Application: Application;
        public ClearFormatting(): void;
        public readonly Creator: number;
        public Font: Font;
        public readonly Frame: Frame;
        public Highlight: number;
        public LanguageID: WdLanguageID;
        public LanguageIDFarEast: WdLanguageID;
        public NoProofing: number;
        public ParagraphFormat: ParagraphFormat;
        public readonly Parent: any;
        public Style: any;
        public Text: string;
    }

    class Research {
        private 'Word.Research_typekey': Research;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public FavoriteService: string;
        public IsResearchService(ServiceID: string): boolean;
        public readonly Parent: any;

        /**
         * @param string [QueryString='']
         * @param Word.WdLanguageID [QueryLanguage=0]
         * @param boolean [UseSelection=false]
         * @param boolean [LaunchQuery=true]
         */
        public Query(ServiceID: string, QueryString?: string, QueryLanguage?: WdLanguageID, UseSelection?: boolean, LaunchQuery?: boolean): any;
        public SetLanguagePair(LanguageFrom: WdLanguageID, LanguageTo: WdLanguageID): any;
    }

    class Reviewer {
        private 'Word.Reviewer_typekey': Reviewer;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Parent: any;
        public Visible: boolean;
    }

    class Reviewers {
        private 'Word.Reviewers_typekey': Reviewers;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Reviewer;
        public readonly Parent: any;
    }

    class Revision {
        private 'Word.Revision_typekey': Revision;
        private constructor();
        public Accept(): void;
        public readonly Application: Application;
        public readonly Author: string;
        public readonly Cells: Cells;
        public readonly Creator: number;
        public readonly Date: VarDate;
        public readonly FormatDescription: string;
        public readonly Index: number;
        public readonly MovedRange: Range;
        public readonly Parent: any;
        public readonly Range: Range;
        public Reject(): void;
        public readonly Style: Style;
        public readonly Type: WdRevisionType;
    }

    class Revisions {
        private 'Word.Revisions_typekey': Revisions;
        private constructor();
        public AcceptAll(): void;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Revision;
        public readonly Parent: any;
        public RejectAll(): void;
    }

    class RoutingSlip {
        private 'Word.RoutingSlip_typekey': RoutingSlip;
        private constructor();
        public AddRecipient(Recipient: string): void;
        public readonly Application: Application;
        public readonly Creator: number;
        public Delivery: WdRoutingSlipDelivery;
        public Message: string;
        public readonly Parent: any;
        public Protect: WdProtectionType;
        public Recipients(Index?: any): any;
        public Reset(): void;
        public ReturnWhenDone: boolean;
        public readonly Status: WdRoutingSlipStatus;
        public Subject: string;
        public TrackStatus: boolean;
    }

    class Row {
        private 'Word.Row_typekey': Row;
        private constructor();
        public Alignment: WdRowAlignment;
        public AllowBreakAcrossPages: number;
        public readonly Application: Application;
        public Borders: Borders;
        public readonly Cells: Cells;
        public ConvertToText(Separator?: any, NestedTables?: any): Range;
        public ConvertToTextOld(Separator?: any): Range;
        public readonly Creator: number;
        public Delete(): void;
        public HeadingFormat: number;
        public Height: number;
        public HeightRule: WdRowHeightRule;
        public ID: string;
        public readonly Index: number;
        public readonly IsFirst: boolean;
        public readonly IsLast: boolean;
        public LeftIndent: number;
        public readonly NestingLevel: number;
        public readonly Next: Row;
        public readonly Parent: any;
        public readonly Previous: Row;
        public readonly Range: Range;
        public Select(): void;
        public SetHeight(RowHeight: number, HeightRule: WdRowHeightRule): void;
        public SetLeftIndent(LeftIndent: number, RulerStyle: WdRulerStyle): void;
        public readonly Shading: Shading;
        public SpaceBetweenColumns: number;
    }

    class Rows {
        private 'Word.Rows_typekey': Rows;
        private constructor();
        public Add(BeforeRow?: any): Row;
        public Alignment: WdRowAlignment;
        public AllowBreakAcrossPages: number;
        public AllowOverlap: number;
        public readonly Application: Application;
        public Borders: Borders;
        public ConvertToText(Separator?: any, NestedTables?: any): Range;
        public ConvertToTextOld(Separator?: any): Range;
        public readonly Count: number;
        public readonly Creator: number;
        public Delete(): void;
        public DistanceBottom: number;
        public DistanceLeft: number;
        public DistanceRight: number;
        public DistanceTop: number;
        public DistributeHeight(): void;
        public readonly First: Row;
        public HeadingFormat: number;
        public Height: number;
        public HeightRule: WdRowHeightRule;
        public HorizontalPosition: number;
        public Item(Index: number): Row;
        public readonly Last: Row;
        public LeftIndent: number;
        public readonly NestingLevel: number;
        public readonly Parent: any;
        public RelativeHorizontalPosition: WdRelativeHorizontalPosition;
        public RelativeVerticalPosition: WdRelativeVerticalPosition;
        public Select(): void;
        public SetHeight(RowHeight: number, HeightRule: WdRowHeightRule): void;
        public SetLeftIndent(LeftIndent: number, RulerStyle: WdRulerStyle): void;
        public readonly Shading: Shading;
        public SpaceBetweenColumns: number;
        public TableDirection: WdTableDirection;
        public VerticalPosition: number;
        public WrapAroundText: number;
    }

    class Section {
        private 'Word.Section_typekey': Section;
        private constructor();
        public readonly Application: Application;
        public Borders: Borders;
        public readonly Creator: number;
        public readonly Footers: HeadersFooters;
        public readonly Headers: HeadersFooters;
        public readonly Index: number;
        public PageSetup: PageSetup;
        public readonly Parent: any;
        public ProtectedForForms: boolean;
        public readonly Range: Range;
    }

    class Sections {
        private 'Word.Sections_typekey': Sections;
        private constructor();
        public Add(Range?: any, Start?: any): Section;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public readonly First: Section;
        public Item(Index: number): Section;
        public readonly Last: Section;
        public PageSetup: PageSetup;
        public readonly Parent: any;
    }

    class Selection {
        private 'Word.Selection_typekey': Selection;
        private constructor();
        public readonly Active: boolean;
        public readonly Application: Application;
        public BoldRun(): void;
        public readonly BookmarkID: number;
        public readonly Bookmarks: Bookmarks;
        public Borders: Borders;
        public Calculate(): number;
        public readonly Cells: Cells;
        public readonly Characters: Characters;
        public readonly ChildShapeRange: ShapeRange;
        public ClearCharacterAllFormatting(): void;
        public ClearCharacterDirectFormatting(): void;
        public ClearCharacterStyle(): void;
        public ClearFormatting(): void;
        public ClearParagraphAllFormatting(): void;
        public ClearParagraphDirectFormatting(): void;
        public ClearParagraphStyle(): void;
        public Collapse(Direction?: any): void;
        public readonly Columns: Columns;
        public ColumnSelectMode: boolean;
        public readonly Comments: Comments;
        public readonly ContentControls: ContentControls;
        public ConvertToTable(
            Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any,
            ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any, AutoFitBehavior?: any, DefaultTableBehavior?: any): Table;
        public ConvertToTableOld(
            Separator?: any, NumRows?: any, NumColumns?: any, InitialColumnWidth?: any, Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any,
            ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any, ApplyLastColumn?: any, AutoFit?: any): Table;
        public Copy(): void;
        public CopyAsPicture(): void;
        public CopyFormat(): void;
        public CreateAutoTextEntry(Name: string, StyleName: string): AutoTextEntry;
        public CreateTextbox(): void;
        public readonly Creator: number;
        public Cut(): void;
        public Delete(Unit?: any, Count?: any): number;
        public DetectLanguage(): void;
        public readonly Document: Document;
        public readonly Editors: Editors;
        public End: number;
        public EndKey(Unit?: any, Extend?: any): number;
        public readonly EndnoteOptions: EndnoteOptions;
        public readonly Endnotes: Endnotes;
        public EndOf(Unit?: any, Extend?: any): number;
        public readonly EnhMetaFileBits: any;
        public EscapeKey(): void;
        public Expand(Unit?: any): number;

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
        public ExportAsFixedFormat(
            OutputFileName: string, ExportFormat: WdExportFormat, OpenAfterExport?: boolean, OptimizeFor?: WdExportOptimizeFor, ExportCurrentPage?: boolean,
            Item?: WdExportItem, IncludeDocProps?: boolean, KeepIRM?: boolean, CreateBookmarks?: WdExportCreateBookmarks, DocStructureTags?: boolean,
            BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, FixedFormatExtClassPtr?: any): void;
        public Extend(Character?: any): void;
        public ExtendMode: boolean;
        public readonly Fields: Fields;
        public readonly Find: Find;
        public FitTextWidth: number;
        public Flags: WdSelectionFlags;
        public Font: Font;
        public readonly FootnoteOptions: FootnoteOptions;
        public readonly Footnotes: Footnotes;
        public FormattedText: Range;
        public readonly FormFields: FormFields;
        public readonly Frames: Frames;
        public GoTo(What?: any, Which?: any, Count?: any, Name?: any): Range;
        public GoToEditableRange(EditorID?: any): Range;
        public GoToNext(What: WdGoToItem): Range;
        public GoToPrevious(What: WdGoToItem): Range;
        public readonly HasChildShapeRange: boolean;
        public readonly HeaderFooter: HeaderFooter;
        public HomeKey(Unit?: any, Extend?: any): number;
        public readonly HTMLDivisions: HTMLDivisions;
        public readonly Hyperlinks: Hyperlinks;
        public Information(Type: WdInformation): any;
        public readonly InlineShapes: InlineShapes;
        public InRange(Range: Range): boolean;
        public InsertAfter(Text: string): void;
        public InsertBefore(Text: string): void;
        public InsertBreak(Type?: any): void;
        public InsertCaption(Label: any, Title?: any, TitleAutoText?: any, Position?: any, ExcludeLabel?: any): void;
        public InsertCaptionXP(Label: any, Title?: any, TitleAutoText?: any, Position?: any): void;
        public InsertCells(ShiftCells?: any): void;
        public InsertColumns(): void;
        public InsertColumnsRight(): void;
        public InsertCrossReference(
            ReferenceType: any, ReferenceKind: WdReferenceKind, ReferenceItem: any, InsertAsHyperlink?: any, IncludePosition?: any, SeparateNumbers?: any, SeparatorString?: any): void;
        public InsertCrossReference_2002(ReferenceType: any, ReferenceKind: WdReferenceKind, ReferenceItem: any, InsertAsHyperlink?: any, IncludePosition?: any): void;
        public InsertDateTime(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any, DateLanguage?: any, CalendarType?: any): void;
        public InsertDateTimeOld(DateTimeFormat?: any, InsertAsField?: any, InsertAsFullWidth?: any): void;
        public InsertFile(FileName: string, Range?: any, ConfirmConversions?: any, Link?: any, Attachment?: any): void;
        public InsertFormula(Formula?: any, NumberFormat?: any): void;
        public InsertNewPage(): void;
        public InsertParagraph(): void;
        public InsertParagraphAfter(): void;
        public InsertParagraphBefore(): void;
        public InsertRows(NumRows?: any): void;
        public InsertRowsAbove(NumRows?: any): void;
        public InsertRowsBelow(NumRows?: any): void;
        public InsertStyleSeparator(): void;
        public InsertSymbol(CharacterNumber: number, Font?: any, Unicode?: any, Bias?: any): void;
        public InsertXML(XML: string, Transform?: any): void;
        public InStory(Range: Range): boolean;
        public readonly IPAtEndOfLine: boolean;
        public readonly IsEndOfRowMark: boolean;
        public IsEqual(Range: Range): boolean;
        public ItalicRun(): void;
        public LanguageDetected: boolean;
        public LanguageID: WdLanguageID;
        public LanguageIDFarEast: WdLanguageID;
        public LanguageIDOther: WdLanguageID;
        public LtrPara(): void;
        public LtrRun(): void;
        public Move(Unit?: any, Count?: any): number;
        public MoveDown(Unit?: any, Count?: any, Extend?: any): number;
        public MoveEnd(Unit?: any, Count?: any): number;
        public MoveEndUntil(Cset: any, Count?: any): number;
        public MoveEndWhile(Cset: any, Count?: any): number;
        public MoveLeft(Unit?: any, Count?: any, Extend?: any): number;
        public MoveRight(Unit?: any, Count?: any, Extend?: any): number;
        public MoveStart(Unit?: any, Count?: any): number;
        public MoveStartUntil(Cset: any, Count?: any): number;
        public MoveStartWhile(Cset: any, Count?: any): number;
        public MoveUntil(Cset: any, Count?: any): number;
        public MoveUp(Unit?: any, Count?: any, Extend?: any): number;
        public MoveWhile(Cset: any, Count?: any): number;
        public Next(Unit?: any, Count?: any): Range;
        public NextField(): Field;
        public NextRevision(Wrap?: any): Revision;
        public NextSubdocument(): void;
        public NoProofing: number;
        public readonly OMaths: OMaths;
        public Orientation: WdTextOrientation;
        public PageSetup: PageSetup;
        public ParagraphFormat: ParagraphFormat;
        public readonly Paragraphs: Paragraphs;
        public readonly Parent: any;
        public readonly ParentContentControl: ContentControl;
        public Paste(): void;
        public PasteAndFormat(Type: WdRecoveryType): void;
        public PasteAppendTable(): void;
        public PasteAsNestedTable(): void;
        public PasteExcelTable(LinkedToExcel: boolean, WordFormatting: boolean, RTF: boolean): void;
        public PasteFormat(): void;
        public PasteSpecial(IconIndex?: any, Link?: any, Placement?: any, DisplayAsIcon?: any, DataType?: any, IconFileName?: any, IconLabel?: any): void;
        public Previous(Unit?: any, Count?: any): Range;
        public readonly PreviousBookmarkID: number;
        public PreviousField(): Field;
        public PreviousRevision(Wrap?: any): Revision;
        public PreviousSubdocument(): void;
        public readonly Range: Range;
        public ReadingModeGrowFont(): void;
        public ReadingModeShrinkFont(): void;
        public readonly Rows: Rows;
        public RtlPara(): void;
        public RtlRun(): void;
        public readonly Sections: Sections;
        public Select(): void;
        public SelectCell(): void;
        public SelectColumn(): void;
        public SelectCurrentAlignment(): void;
        public SelectCurrentColor(): void;
        public SelectCurrentFont(): void;
        public SelectCurrentIndent(): void;
        public SelectCurrentSpacing(): void;
        public SelectCurrentTabs(): void;
        public SelectRow(): void;
        public readonly Sentences: Sentences;
        public SetRange(Start: number, End: number): void;
        public readonly Shading: Shading;
        public readonly ShapeRange: ShapeRange;
        public Shrink(): void;
        public ShrinkDiscontiguousSelection(): void;
        public readonly SmartTags: SmartTags;
        public Sort(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any,
            IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any, SubFieldNumber?: any, SubFieldNumber2?: any, SubFieldNumber3?: any): void;
        public Sort2000(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any,
            IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;
        public SortAscending(): void;
        public SortDescending(): void;
        public SortOld(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, SortColumn?: any, Separator?: any, CaseSensitive?: any, LanguageID?: any): void;
        public SplitTable(): void;
        public Start: number;
        public StartIsActive: boolean;
        public StartOf(Unit?: any, Extend?: any): number;
        public readonly StoryLength: number;
        public readonly StoryType: WdStoryType;
        public Style: any;
        public readonly Tables: Tables;
        public Text: string;
        public ToggleCharacterCode(): void;
        public readonly TopLevelTables: Tables;
        public readonly Type: WdSelectionType;
        public TypeBackspace(): void;
        public TypeParagraph(): void;
        public TypeText(Text: string): void;
        public WholeStory(): void;
        public readonly WordOpenXML: string;
        public readonly Words: Words;

        /** @param boolean [DataOnly=false] */
        public XML(DataOnly?: boolean): string;
        public readonly XMLNodes: XMLNodes;
        public readonly XMLParentNode: XMLNode;
    }

    class Sentences {
        private 'Word.Sentences_typekey': Sentences;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public readonly First: Range;
        public Item(Index: number): Range;
        public readonly Last: Range;
        public readonly Parent: any;
    }

    class SeriesLines {
        private 'Word.SeriesLines_typekey': SeriesLines;
        private constructor();
        public readonly Application: any;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class Shading {
        private 'Word.Shading_typekey': Shading;
        private constructor();
        public readonly Application: Application;
        public BackgroundPatternColor: WdColor;
        public BackgroundPatternColorIndex: WdColorIndex;
        public readonly Creator: number;
        public ForegroundPatternColor: WdColor;
        public ForegroundPatternColorIndex: WdColorIndex;
        public readonly Parent: any;
        public Texture: WdTextureIndex;
    }

    class ShadowFormat {
        private 'Word.ShadowFormat_typekey': ShadowFormat;
        private constructor();
        public readonly Application: Application;
        public Blur: number;
        public readonly Creator: number;
        public readonly ForeColor: ColorFormat;
        public IncrementOffsetX(Increment: number): void;
        public IncrementOffsetY(Increment: number): void;
        public Obscured: Office.MsoTriState;
        public OffsetX: number;
        public OffsetY: number;
        public readonly Parent: any;
        public RotateWithShape: Office.MsoTriState;
        public Size: number;
        public Style: Office.MsoShadowStyle;
        public Transparency: number;
        public Type: Office.MsoShadowType;
        public Visible: Office.MsoTriState;
    }

    class Shape {
        private 'Word.Shape_typekey': Shape;
        private constructor();
        public Activate(): void;
        public readonly Adjustments: Adjustments;
        public AlternativeText: string;
        public readonly Anchor: Range;
        public readonly AnchorID: number;
        public readonly Application: Application;
        public Apply(): void;
        public AutoShapeType: Office.MsoAutoShapeType;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public readonly Callout: CalloutFormat;
        public CanvasCropBottom(Increment: number): void;
        public CanvasCropLeft(Increment: number): void;
        public CanvasCropRight(Increment: number): void;
        public CanvasCropTop(Increment: number): void;
        public readonly CanvasItems: CanvasShapes;
        public readonly Chart: Chart;
        public readonly Child: Office.MsoTriState;
        public readonly ConnectionSiteCount: number;
        public readonly Connector: Office.MsoTriState;
        public readonly ConnectorFormat: ConnectorFormat;
        public ConvertToFrame(): Frame;
        public ConvertToInlineShape(): InlineShape;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Diagram: Office.IMsoDiagram;
        public readonly DiagramNode: DiagramNode;
        public Duplicate(): Shape;
        public readonly EditID: number;
        public readonly Fill: FillFormat;
        public Flip(FlipCmd: Office.MsoFlipCmd): void;
        public readonly Glow: GlowFormat;
        public readonly GroupItems: GroupShapes;
        public readonly HasChart: Office.MsoTriState;
        public readonly HasDiagram: Office.MsoTriState;
        public readonly HasDiagramNode: Office.MsoTriState;
        public readonly HasSmartArt: Office.MsoTriState;
        public Height: number;
        public HeightRelative: number;
        public readonly HorizontalFlip: Office.MsoTriState;
        public readonly Hyperlink: Hyperlink;
        public readonly ID: number;
        public IncrementLeft(Increment: number): void;
        public IncrementRotation(Increment: number): void;
        public IncrementTop(Increment: number): void;
        public LayoutInCell: number;
        public Left: number;
        public LeftRelative: number;
        public readonly Line: LineFormat;
        public readonly LinkFormat: LinkFormat;
        public LockAnchor: number;
        public LockAspectRatio: Office.MsoTriState;
        public Name: string;
        public readonly Nodes: ShapeNodes;
        public readonly OLEFormat: OLEFormat;
        public readonly Parent: any;
        public readonly ParentGroup: Shape;
        public PickUp(): void;
        public readonly PictureFormat: PictureFormat;
        public readonly Reflection: ReflectionFormat;
        public RelativeHorizontalPosition: WdRelativeHorizontalPosition;
        public RelativeHorizontalSize: WdRelativeHorizontalSize;
        public RelativeVerticalPosition: WdRelativeVerticalPosition;
        public RelativeVerticalSize: WdRelativeVerticalSize;
        public RerouteConnections(): void;
        public Rotation: number;
        public readonly RTF: string;

        /** @param Office.MsoScaleFrom [Scale=0] */
        public ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [Scale=0] */
        public ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;
        public readonly Script: Office.Script;
        public Select(Replace?: any): void;
        public SetShapesDefaultProperties(): void;
        public readonly Shadow: ShadowFormat;
        public ShapeStyle: Office.MsoShapeStyleIndex;
        public readonly SmartArt: Office.SmartArt;
        public readonly SoftEdge: SoftEdgeFormat;
        public readonly TextEffect: TextEffectFormat;
        public readonly TextFrame: TextFrame;
        public readonly TextFrame2: Office.TextFrame2;
        public readonly ThreeD: ThreeDFormat;
        public Title: string;
        public Top: number;
        public TopRelative: number;
        public readonly Type: Office.MsoShapeType;
        public Ungroup(): ShapeRange;
        public readonly VerticalFlip: Office.MsoTriState;
        public readonly Vertices: any;
        public Visible: Office.MsoTriState;
        public Width: number;
        public WidthRelative: number;
        public readonly WrapFormat: WrapFormat;
        public ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        public readonly ZOrderPosition: number;
    }

    class ShapeNode {
        private 'Word.ShapeNode_typekey': ShapeNode;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly EditingType: Office.MsoEditingType;
        public readonly Parent: any;
        public readonly Points: any;
        public readonly SegmentType: Office.MsoSegmentType;
    }

    class ShapeNodes {
        private 'Word.ShapeNodes_typekey': ShapeNodes;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Delete(Index: number): void;

        /**
         * @param number [X2=0]
         * @param number [Y2=0]
         * @param number [X3=0]
         * @param number [Y3=0]
         */
        public Insert(Index: number, SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        public Item(Index: any): ShapeNode;
        public readonly Parent: any;
        public SetEditingType(Index: number, EditingType: Office.MsoEditingType): void;
        public SetPosition(Index: number, X1: number, Y1: number): void;
        public SetSegmentType(Index: number, SegmentType: Office.MsoSegmentType): void;
    }

    class ShapeRange {
        private 'Word.ShapeRange_typekey': ShapeRange;
        private constructor();
        public Activate(): void;
        public readonly Adjustments: Adjustments;
        public Align(Align: Office.MsoAlignCmd, RelativeTo: number): void;
        public AlternativeText: string;
        public readonly Anchor: Range;
        public readonly Application: Application;
        public Apply(): void;
        public AutoShapeType: Office.MsoAutoShapeType;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public readonly Callout: CalloutFormat;
        public CanvasCropBottom(Increment: number): void;
        public CanvasCropLeft(Increment: number): void;
        public CanvasCropRight(Increment: number): void;
        public CanvasCropTop(Increment: number): void;
        public readonly CanvasItems: CanvasShapes;
        public readonly Child: Office.MsoTriState;
        public readonly ConnectionSiteCount: number;
        public readonly Connector: Office.MsoTriState;
        public readonly ConnectorFormat: ConnectorFormat;
        public ConvertToFrame(): Frame;
        public ConvertToInlineShape(): InlineShape;
        public readonly Count: number;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Diagram: Office.IMsoDiagram;
        public readonly DiagramNode: DiagramNode;
        public Distribute(Distribute: Office.MsoDistributeCmd, RelativeTo: number): void;
        public Duplicate(): ShapeRange;
        public readonly Fill: FillFormat;
        public Flip(FlipCmd: Office.MsoFlipCmd): void;
        public readonly Glow: GlowFormat;
        public Group(): Shape;
        public readonly GroupItems: GroupShapes;
        public readonly HasDiagram: Office.MsoTriState;
        public readonly HasDiagramNode: Office.MsoTriState;
        public Height: number;
        public HeightRelative: number;
        public readonly HorizontalFlip: Office.MsoTriState;
        public readonly Hyperlink: Hyperlink;
        public readonly ID: number;
        public IncrementLeft(Increment: number): void;
        public IncrementRotation(Increment: number): void;
        public IncrementTop(Increment: number): void;
        public Item(Index: any): Shape;
        public LayoutInCell: number;
        public Left: number;
        public LeftRelative: number;
        public readonly Line: LineFormat;
        public LockAnchor: number;
        public LockAspectRatio: Office.MsoTriState;
        public Name: string;
        public readonly Nodes: ShapeNodes;
        public readonly Parent: any;
        public readonly ParentGroup: Shape;
        public PickUp(): void;
        public readonly PictureFormat: PictureFormat;
        public readonly Reflection: ReflectionFormat;
        public Regroup(): Shape;
        public RelativeHorizontalPosition: WdRelativeHorizontalPosition;
        public RelativeHorizontalSize: WdRelativeHorizontalSize;
        public RelativeVerticalPosition: WdRelativeVerticalPosition;
        public RelativeVerticalSize: WdRelativeVerticalSize;
        public RerouteConnections(): void;
        public Rotation: number;
        public readonly RTF: string;

        /** @param Office.MsoScaleFrom [Scale=0] */
        public ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [Scale=0] */
        public ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;
        public Select(Replace?: any): void;
        public SetShapesDefaultProperties(): void;
        public readonly Shadow: ShadowFormat;
        public ShapeStyle: Office.MsoShapeStyleIndex;
        public readonly SoftEdge: SoftEdgeFormat;
        public readonly TextEffect: TextEffectFormat;
        public readonly TextFrame: TextFrame;
        public readonly TextFrame2: Office.TextFrame2;
        public readonly ThreeD: ThreeDFormat;
        public Title: string;
        public Top: number;
        public TopRelative: number;
        public readonly Type: Office.MsoShapeType;
        public Ungroup(): ShapeRange;
        public readonly VerticalFlip: Office.MsoTriState;
        public readonly Vertices: any;
        public Visible: Office.MsoTriState;
        public Width: number;
        public WidthRelative: number;
        public readonly WrapFormat: WrapFormat;
        public ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        public readonly ZOrderPosition: number;
    }

    class Shapes {
        private 'Word.Shapes_typekey': Shapes;
        private constructor();
        public AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        public AddCanvas(Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;

        /** @param Office.XlChartType [Type=-1] */
        public AddChart(Type?: Office.XlChartType, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any): Shape;
        public AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        public AddCurve(SafeArrayOfPoints: any, Anchor?: any): Shape;
        public AddDiagram(Type: Office.MsoDiagramType, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        public AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        public AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number, Anchor?: any): Shape;
        public AddOLEControl(ClassType?: any, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any): Shape;
        public AddOLEObject(
            ClassType?: any, FileName?: any, LinkToFile?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Left?: any, Top?: any,
            Width?: any, Height?: any, Anchor?: any): Shape;
        public AddPicture(FileName: string, LinkToFile?: any, SaveWithDocument?: any, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any): Shape;
        public AddPolyline(SafeArrayOfPoints: any, Anchor?: any): Shape;
        public AddShape(Type: number, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        public AddSmartArt(Layout: Office.SmartArtLayout, Left?: any, Top?: any, Width?: any, Height?: any, Anchor?: any): Shape;
        public AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number, Anchor?: any): Shape;
        public AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number, Anchor?: any): Shape;
        public readonly Application: Application;
        public BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Shape;
        public readonly Parent: any;
        public Range(Index: any): ShapeRange;
        public SelectAll(): void;
    }

    class SmartTag {
        private 'Word.SmartTag_typekey': SmartTag;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly DownloadURL: string;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Properties: CustomProperties;
        public readonly Range: Range;
        public Select(): void;
        public readonly SmartTagActions: SmartTagActions;
        public readonly XML: string;
        public readonly XMLNode: XMLNode;
    }

    class SmartTagAction {
        private 'Word.SmartTagAction_typekey': SmartTagAction;
        private constructor();
        public readonly ActiveXControl: any;
        public readonly Application: Application;
        public CheckboxState: boolean;
        public readonly Creator: number;
        public Execute(): void;
        public ExpandDocumentFragment: boolean;
        public ExpandHelp: boolean;
        public ListSelection: number;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly PresentInPane: boolean;
        public RadioGroupSelection: number;
        public TextboxText: string;
        public readonly Type: WdSmartTagControlType;
    }

    class SmartTagActions {
        private 'Word.SmartTagActions_typekey': SmartTagActions;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): SmartTagAction;
        public readonly Parent: any;
        public ReloadActions(): void;
    }

    class SmartTagRecognizer {
        private 'Word.SmartTagRecognizer_typekey': SmartTagRecognizer;
        private constructor();
        public readonly Application: Application;
        public readonly Caption: string;
        public readonly Creator: number;
        public Enabled: boolean;
        public readonly FullName: string;
        public readonly Parent: any;
        public readonly ProgID: string;
    }

    class SmartTagRecognizers {
        private 'Word.SmartTagRecognizers_typekey': SmartTagRecognizers;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): SmartTagRecognizer;
        public readonly Parent: any;
        public ReloadRecognizers(): void;
    }

    class SmartTags {
        private 'Word.SmartTags_typekey': SmartTags;
        private constructor();
        public Add(Name: string, Range?: any, Properties?: any): SmartTag;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): SmartTag;
        public readonly Parent: any;
        public SmartTagsByType(Name: string): SmartTags;
    }

    class SmartTagType {
        private 'Word.SmartTagType_typekey': SmartTagType;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly FriendlyName: string;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly SmartTagActions: SmartTagActions;
        public readonly SmartTagRecognizers: SmartTagRecognizers;
    }

    class SmartTagTypes {
        private 'Word.SmartTagTypes_typekey': SmartTagTypes;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): SmartTagType;
        public readonly Parent: any;
        public ReloadAll(): void;
    }

    class SoftEdgeFormat {
        private 'Word.SoftEdgeFormat_typekey': SoftEdgeFormat;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Parent: any;
        public Radius: number;
        public Type: Office.MsoSoftEdgeType;
    }

    class Source {
        private 'Word.Source_typekey': Source;
        private constructor();
        public readonly Application: Application;
        public readonly Cited: boolean;
        public readonly Creator: number;
        public Delete(): void;
        public Field(Name: string): string;
        public readonly Parent: any;
        public readonly Tag: string;
        public readonly XML: string;
    }

    class Sources {
        private 'Word.Sources_typekey': Sources;
        private constructor();
        public Add(Data: string): void;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Source;
        public readonly Parent: any;
    }

    class SpellingSuggestion {
        private 'Word.SpellingSuggestion_typekey': SpellingSuggestion;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class SpellingSuggestions {
        private 'Word.SpellingSuggestions_typekey': SpellingSuggestions;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): SpellingSuggestion;
        public readonly Parent: any;
        public readonly SpellingErrorType: WdSpellingErrorType;
    }

    class StoryRanges {
        private 'Word.StoryRanges_typekey': StoryRanges;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: WdStoryType): Range;
        public readonly Parent: any;
    }

    class Style {
        private 'Word.Style_typekey': Style;
        private constructor();
        public readonly Application: Application;
        public AutomaticallyUpdate: boolean;
        public BaseStyle: any;
        public Borders: Borders;
        public readonly BuiltIn: boolean;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Description: string;
        public Font: Font;
        public readonly Frame: Frame;
        public Hidden: boolean;
        public readonly InUse: boolean;
        public LanguageID: WdLanguageID;
        public LanguageIDFarEast: WdLanguageID;
        public readonly Linked: boolean;
        public LinkStyle: any;
        public LinkToListTemplate(ListTemplate: ListTemplate, ListLevelNumber?: any): void;
        public readonly ListLevelNumber: number;
        public readonly ListTemplate: ListTemplate;
        public Locked: boolean;
        public NameLocal: string;
        public NextParagraphStyle: any;
        public NoProofing: number;
        public NoSpaceBetweenParagraphsOfSameStyle: boolean;
        public ParagraphFormat: ParagraphFormat;
        public readonly Parent: any;
        public Priority: number;
        public QuickStyle: boolean;
        public readonly Shading: Shading;
        public readonly Table: TableStyle;
        public readonly Type: WdStyleType;
        public UnhideWhenUsed: boolean;
        public Visibility: boolean;
    }

    class Styles {
        private 'Word.Styles_typekey': Styles;
        private constructor();
        public Add(Name: string, Type?: any): Style;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Style;
        public readonly Parent: any;
    }

    class StyleSheet {
        private 'Word.StyleSheet_typekey': StyleSheet;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly FullName: string;
        public readonly Index: number;
        public Move(Precedence: WdStyleSheetPrecedence): void;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Path: string;
        public Title: string;
        public Type: WdStyleSheetLinkType;
    }

    class StyleSheets {
        private 'Word.StyleSheets_typekey': StyleSheets;
        private constructor();
        public Add(FileName: string, LinkType: WdStyleSheetLinkType, Title: string, Precedence: WdStyleSheetPrecedence): StyleSheet;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): StyleSheet;
        public readonly Parent: any;
    }

    class Subdocument {
        private 'Word.Subdocument_typekey': Subdocument;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly HasFile: boolean;
        public readonly Level: number;
        public Locked: boolean;
        public readonly Name: string;
        public Open(): Document;
        public readonly Parent: any;
        public readonly Path: string;
        public readonly Range: Range;
        public Split(Range: Range): void;
    }

    class Subdocuments {
        private 'Word.Subdocuments_typekey': Subdocuments;
        private constructor();
        public AddFromFile(
            Name: any, ConfirmConversions?: any, ReadOnly?: any, PasswordDocument?: any, PasswordTemplate?: any, Revert?: any, WritePasswordDocument?: any, WritePasswordTemplate?: any): Subdocument;
        public AddFromRange(Range: Range): Subdocument;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Delete(): void;
        public Expanded: boolean;
        public Item(Index: number): Subdocument;
        public Merge(FirstSubdocument?: any, LastSubdocument?: any): void;
        public readonly Parent: any;
        public Select(): void;
    }

    class SynonymInfo {
        private 'Word.SynonymInfo_typekey': SynonymInfo;
        private constructor();
        public readonly AntonymList: any;
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Found: boolean;
        public readonly MeaningCount: number;
        public readonly MeaningList: any;
        public readonly Parent: any;
        public readonly PartOfSpeechList: any;
        public readonly RelatedExpressionList: any;
        public readonly RelatedWordList: any;
        public SynonymList(Meaning: any): any;
        public readonly Word: string;
    }

    class System {
        private 'Word.System_typekey': System;
        private constructor();
        public readonly Application: Application;
        public readonly ComputerType: string;
        public Connect(Path: string, Drive?: any, Password?: any): void;
        public readonly Country: WdCountry;
        public readonly CountryRegion: WdCountry;
        public readonly Creator: number;
        public Cursor: WdCursorType;
        public readonly FreeDiskSpace: number;
        public readonly HorizontalResolution: number;
        public readonly LanguageDesignation: string;
        public readonly MacintoshName: string;
        public readonly MathCoprocessorInstalled: boolean;
        public MSInfo(): void;
        public readonly OperatingSystem: string;
        public readonly Parent: any;
        public PrivateProfileString(FileName: string, Section: string, Key: string): string;
        public readonly ProcessorType: string;
        public ProfileString(Section: string, Key: string): string;
        public readonly QuickDrawInstalled: boolean;
        public readonly Version: string;
        public readonly VerticalResolution: number;
    }

    class Table {
        private 'Word.Table_typekey': Table;
        private constructor();
        public AllowAutoFit: boolean;
        public AllowPageBreaks: boolean;
        public readonly Application: Application;
        public ApplyStyleColumnBands: boolean;
        public ApplyStyleDirectFormatting(StyleName: string): void;
        public ApplyStyleFirstColumn: boolean;
        public ApplyStyleHeadingRows: boolean;
        public ApplyStyleLastColumn: boolean;
        public ApplyStyleLastRow: boolean;
        public ApplyStyleRowBands: boolean;
        public AutoFitBehavior(Behavior: WdAutoFitBehavior): void;
        public AutoFormat(
            Format?: any, ApplyBorders?: any, ApplyShading?: any, ApplyFont?: any, ApplyColor?: any, ApplyHeadingRows?: any, ApplyLastRow?: any, ApplyFirstColumn?: any,
            ApplyLastColumn?: any, AutoFit?: any): void;
        public readonly AutoFormatType: number;
        public Borders: Borders;
        public BottomPadding: number;
        public Cell(Row: number, Column: number): Cell;
        public readonly Columns: Columns;
        public ConvertToText(Separator?: any, NestedTables?: any): Range;
        public ConvertToTextOld(Separator?: any): Range;
        public readonly Creator: number;
        public Delete(): void;
        public Descr: string;
        public ID: string;
        public LeftPadding: number;
        public readonly NestingLevel: number;
        public readonly Parent: any;
        public PreferredWidth: number;
        public PreferredWidthType: WdPreferredWidthType;
        public readonly Range: Range;
        public RightPadding: number;
        public readonly Rows: Rows;
        public Select(): void;
        public readonly Shading: Shading;
        public Sort(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, CaseSensitive?: any, BidiSort?: any, IgnoreThe?: any, IgnoreKashida?: any, IgnoreDiacritics?: any, IgnoreHe?: any, LanguageID?: any): void;
        public SortAscending(): void;
        public SortDescending(): void;
        public SortOld(
            ExcludeHeader?: any, FieldNumber?: any, SortFieldType?: any, SortOrder?: any, FieldNumber2?: any, SortFieldType2?: any, SortOrder2?: any, FieldNumber3?: any,
            SortFieldType3?: any, SortOrder3?: any, CaseSensitive?: any, LanguageID?: any): void;
        public Spacing: number;
        public Split(BeforeRow: any): Table;
        public Style: any;
        public TableDirection: WdTableDirection;
        public readonly Tables: Tables;
        public Title: string;
        public TopPadding: number;
        public readonly Uniform: boolean;
        public UpdateAutoFormat(): void;
    }

    class TableOfAuthorities {
        private 'Word.TableOfAuthorities_typekey': TableOfAuthorities;
        private constructor();
        public readonly Application: Application;
        public Bookmark: string;
        public Category: number;
        public readonly Creator: number;
        public Delete(): void;
        public EntrySeparator: string;
        public IncludeCategoryHeader: boolean;
        public IncludeSequenceName: string;
        public KeepEntryFormatting: boolean;
        public PageNumberSeparator: string;
        public PageRangeSeparator: string;
        public readonly Parent: any;
        public Passim: boolean;
        public readonly Range: Range;
        public Separator: string;
        public TabLeader: WdTabLeader;
        public Update(): void;
    }

    class TableOfAuthoritiesCategory {
        private 'Word.TableOfAuthoritiesCategory_typekey': TableOfAuthoritiesCategory;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Index: number;
        public Name: string;
        public readonly Parent: any;
    }

    class TableOfContents {
        private 'Word.TableOfContents_typekey': TableOfContents;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly HeadingStyles: HeadingStyles;
        public HidePageNumbersInWeb: boolean;
        public IncludePageNumbers: boolean;
        public LowerHeadingLevel: number;
        public readonly Parent: any;
        public readonly Range: Range;
        public RightAlignPageNumbers: boolean;
        public TabLeader: WdTabLeader;
        public TableID: string;
        public Update(): void;
        public UpdatePageNumbers(): void;
        public UpperHeadingLevel: number;
        public UseFields: boolean;
        public UseHeadingStyles: boolean;
        public UseHyperlinks: boolean;
    }

    class TableOfFigures {
        private 'Word.TableOfFigures_typekey': TableOfFigures;
        private constructor();
        public readonly Application: Application;
        public Caption: string;
        public readonly Creator: number;
        public Delete(): void;
        public readonly HeadingStyles: HeadingStyles;
        public HidePageNumbersInWeb: boolean;
        public IncludeLabel: boolean;
        public IncludePageNumbers: boolean;
        public LowerHeadingLevel: number;
        public readonly Parent: any;
        public readonly Range: Range;
        public RightAlignPageNumbers: boolean;
        public TabLeader: WdTabLeader;
        public TableID: string;
        public Update(): void;
        public UpdatePageNumbers(): void;
        public UpperHeadingLevel: number;
        public UseFields: boolean;
        public UseHeadingStyles: boolean;
        public UseHyperlinks: boolean;
    }

    class Tables {
        private 'Word.Tables_typekey': Tables;
        private constructor();
        public Add(Range: Range, NumRows: number, NumColumns: number, DefaultTableBehavior?: any, AutoFitBehavior?: any): Table;
        public AddOld(Range: Range, NumRows: number, NumColumns: number): Table;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Table;
        public readonly NestingLevel: number;
        public readonly Parent: any;
    }

    class TablesOfAuthorities {
        private 'Word.TablesOfAuthorities_typekey': TablesOfAuthorities;
        private constructor();
        public Add(
            Range: Range, Category?: any, Bookmark?: any, Passim?: any, KeepEntryFormatting?: any, Separator?: any, IncludeSequenceName?: any, EntrySeparator?: any,
            PageRangeSeparator?: any, IncludeCategoryHeader?: any, PageNumberSeparator?: any): TableOfAuthorities;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Format: WdToaFormat;
        public Item(Index: number): TableOfAuthorities;
        public MarkAllCitations(ShortCitation: string, LongCitation?: any, LongCitationAutoText?: any, Category?: any): void;
        public MarkCitation(Range: Range, ShortCitation: string, LongCitation?: any, LongCitationAutoText?: any, Category?: any): Field;
        public NextCitation(ShortCitation: string): void;
        public readonly Parent: any;
    }

    class TablesOfAuthoritiesCategories {
        private 'Word.TablesOfAuthoritiesCategories_typekey': TablesOfAuthoritiesCategories;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): TableOfAuthoritiesCategory;
        public readonly Parent: any;
    }

    class TablesOfContents {
        private 'Word.TablesOfContents_typekey': TablesOfContents;
        private constructor();
        public Add(
            Range: Range, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any,
            IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any, UseOutlineLevels?: any): TableOfContents;
        public Add2000(
            Range: Range, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any,
            IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any): TableOfContents;
        public AddOld(
            Range: Range, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any, RightAlignPageNumbers?: any,
            IncludePageNumbers?: any, AddedStyles?: any): TableOfContents;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Format: WdTocFormat;
        public Item(Index: number): TableOfContents;
        public MarkEntry(Range: Range, Entry?: any, EntryAutoText?: any, TableID?: any, Level?: any): Field;
        public readonly Parent: any;
    }

    class TablesOfFigures {
        private 'Word.TablesOfFigures_typekey': TablesOfFigures;
        private constructor();
        public Add(
            Range: Range, Caption?: any, IncludeLabel?: any, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any,
            RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any, UseHyperlinks?: any, HidePageNumbersInWeb?: any): TableOfFigures;
        public AddOld(
            Range: Range, Caption?: any, IncludeLabel?: any, UseHeadingStyles?: any, UpperHeadingLevel?: any, LowerHeadingLevel?: any, UseFields?: any, TableID?: any,
            RightAlignPageNumbers?: any, IncludePageNumbers?: any, AddedStyles?: any): TableOfFigures;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Format: WdTofFormat;
        public Item(Index: number): TableOfFigures;
        public MarkEntry(Range: Range, Entry?: any, EntryAutoText?: any, TableID?: any, Level?: any): Field;
        public readonly Parent: any;
    }

    class TableStyle {
        private 'Word.TableStyle_typekey': TableStyle;
        private constructor();
        public Alignment: WdRowAlignment;
        public AllowBreakAcrossPage: number;
        public AllowPageBreaks: boolean;
        public readonly Application: Application;
        public Borders: Borders;
        public BottomPadding: number;
        public ColumnStripe: number;
        public Condition(ConditionCode: WdConditionCode): ConditionalStyle;
        public readonly Creator: number;
        public LeftIndent: number;
        public LeftPadding: number;
        public readonly Parent: any;
        public RightPadding: number;
        public RowStripe: number;
        public readonly Shading: Shading;
        public Spacing: number;
        public TableDirection: WdTableDirection;
        public TopPadding: number;
    }

    class TabStop {
        private 'Word.TabStop_typekey': TabStop;
        private constructor();
        public Alignment: WdTabAlignment;
        public readonly Application: Application;
        public Clear(): void;
        public readonly Creator: number;
        public readonly CustomTab: boolean;
        public Leader: WdTabLeader;
        public readonly Next: TabStop;
        public readonly Parent: any;
        public Position: number;
        public readonly Previous: TabStop;
    }

    class TabStops {
        private 'Word.TabStops_typekey': TabStops;
        private constructor();
        public Add(Position: number, Alignment?: any, Leader?: any): TabStop;
        public After(Position: number): TabStop;
        public readonly Application: Application;
        public Before(Position: number): TabStop;
        public ClearAll(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): TabStop;
        public readonly Parent: any;
    }

    class Task {
        private 'Word.Task_typekey': Task;
        private constructor();
        public Activate(Wait?: any): void;
        public readonly Application: Application;
        public Close(): void;
        public readonly Creator: number;
        public Height: number;
        public Left: number;
        public Move(Left: number, Top: number): void;
        public readonly Name: string;
        public readonly Parent: any;
        public Resize(Width: number, Height: number): void;
        public SendWindowMessage(Message: number, wParam: number, lParam: number): void;
        public Top: number;
        public Visible: boolean;
        public Width: number;
        public WindowState: WdWindowState;
    }

    class TaskPane {
        private 'Word.TaskPane_typekey': TaskPane;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Parent: any;
        public Visible: boolean;
    }

    class TaskPanes {
        private 'Word.TaskPanes_typekey': TaskPanes;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: WdTaskPanes): TaskPane;
        public readonly Parent: any;
    }

    class Tasks {
        private 'Word.Tasks_typekey': Tasks;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Exists(Name: string): boolean;
        public ExitWindows(): void;
        public Item(Index: any): Task;
        public readonly Parent: any;
    }

    class Template {
        private 'Word.Template_typekey': Template;
        private constructor();
        public readonly Application: Application;
        public readonly AutoTextEntries: AutoTextEntries;
        public readonly BuildingBlockEntries: BuildingBlockEntries;
        public readonly BuildingBlockTypes: BuildingBlockTypes;
        public readonly BuiltInDocumentProperties: any;
        public readonly Creator: number;
        public readonly CustomDocumentProperties: any;
        public FarEastLineBreakLanguage: WdFarEastLineBreakLanguageID;
        public FarEastLineBreakLevel: WdFarEastLineBreakLevel;
        public readonly FullName: string;
        public JustificationMode: WdJustificationMode;
        public KerningByAlgorithm: boolean;
        public LanguageID: WdLanguageID;
        public LanguageIDFarEast: WdLanguageID;
        public readonly ListTemplates: ListTemplates;
        public readonly Name: string;
        public NoLineBreakAfter: string;
        public NoLineBreakBefore: string;
        public NoProofing: number;
        public OpenAsDocument(): Document;
        public readonly Parent: any;
        public readonly Path: string;
        public Save(): void;
        public Saved: boolean;
        public readonly Type: WdTemplateType;
        public readonly VBProject: VBIDE.VBProject;
    }

    class Templates {
        private 'Word.Templates_typekey': Templates;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Template;
        public LoadBuildingBlocks(): void;
        public readonly Parent: any;
    }

    class TextColumn {
        private 'Word.TextColumn_typekey': TextColumn;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Parent: any;
        public SpaceAfter: number;
        public Width: number;
    }

    class TextColumns {
        private 'Word.TextColumns_typekey': TextColumns;
        private constructor();
        public Add(Width?: any, Spacing?: any, EvenlySpaced?: any): TextColumn;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public EvenlySpaced: number;
        public FlowDirection: WdFlowDirection;
        public Item(Index: number): TextColumn;
        public LineBetween: number;
        public readonly Parent: any;
        public SetCount(NumColumns: number): void;
        public Spacing: number;
        public Width: number;
    }

    class TextEffectFormat {
        private 'Word.TextEffectFormat_typekey': TextEffectFormat;
        private constructor();
        public Alignment: Office.MsoTextEffectAlignment;
        public readonly Application: Application;
        public readonly Creator: number;
        public FontBold: Office.MsoTriState;
        public FontItalic: Office.MsoTriState;
        public FontName: string;
        public FontSize: number;
        public KernedPairs: Office.MsoTriState;
        public NormalizedHeight: Office.MsoTriState;
        public readonly Parent: any;
        public PresetShape: Office.MsoPresetTextEffectShape;
        public PresetTextEffect: Office.MsoPresetTextEffect;
        public RotatedChars: Office.MsoTriState;
        public Text: string;
        public ToggleVerticalText(): void;
        public Tracking: number;
    }

    class TextFrame {
        private 'Word.TextFrame_typekey': TextFrame;
        private constructor();
        public readonly Application: Application;
        public AutoSize: number;
        public BreakForwardLink(): void;
        public readonly Column: Office.TextColumn2;
        public readonly ContainingRange: Range;
        public readonly Creator: number;
        public DeleteText(): void;
        public readonly HasText: number;
        public HorizontalAnchor: Office.MsoHorizontalAnchor;
        public MarginBottom: number;
        public MarginLeft: number;
        public MarginRight: number;
        public MarginTop: number;
        public Next: TextFrame;
        public NoTextRotation: Office.MsoTriState;
        public Orientation: Office.MsoTextOrientation;
        public readonly Overflowing: boolean;
        public readonly Parent: Shape;
        public PathFormat: Office.MsoPathFormat;
        public Previous: TextFrame;
        public readonly TextRange: Range;
        public readonly ThreeD: ThreeDFormat;
        public ValidLinkTarget(TargetTextFrame: TextFrame): boolean;
        public VerticalAnchor: Office.MsoVerticalAnchor;
        public WarpFormat: Office.MsoWarpFormat;
        public WordWrap: number;
    }

    class TextInput {
        private 'Word.TextInput_typekey': TextInput;
        private constructor();
        public readonly Application: Application;
        public Clear(): void;
        public readonly Creator: number;
        public Default: string;
        public EditType(Type: WdTextFormFieldType, Default?: any, Format?: any, Enabled?: any): void;
        public readonly Format: string;
        public readonly Parent: any;
        public readonly Type: WdTextFormFieldType;
        public readonly Valid: boolean;
        public Width: number;
    }

    class TextRetrievalMode {
        private 'Word.TextRetrievalMode_typekey': TextRetrievalMode;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Duplicate: TextRetrievalMode;
        public IncludeFieldCodes: boolean;
        public IncludeHiddenText: boolean;
        public readonly Parent: any;
        public ViewType: WdViewType;
    }

    class ThreeDFormat {
        private 'Word.ThreeDFormat_typekey': ThreeDFormat;
        private constructor();
        public readonly Application: Application;
        public BevelBottomDepth: number;
        public BevelBottomInset: number;
        public BevelBottomType: Office.MsoBevelType;
        public BevelTopDepth: number;
        public BevelTopInset: number;
        public BevelTopType: Office.MsoBevelType;
        public readonly ContourColor: ColorFormat;
        public ContourWidth: number;
        public readonly Creator: number;
        public Depth: number;
        public readonly ExtrusionColor: ColorFormat;
        public ExtrusionColorType: Office.MsoExtrusionColorType;
        public FieldOfView: number;
        public IncrementRotationHorizontal(Increment: number): void;
        public IncrementRotationVertical(Increment: number): void;
        public IncrementRotationX(Increment: number): void;
        public IncrementRotationY(Increment: number): void;
        public IncrementRotationZ(Increment: number): void;
        public LightAngle: number;
        public readonly Parent: any;
        public Perspective: Office.MsoTriState;
        public readonly PresetCamera: Office.MsoPresetCamera;
        public readonly PresetExtrusionDirection: Office.MsoPresetExtrusionDirection;
        public PresetLighting: Office.MsoLightRigType;
        public PresetLightingDirection: Office.MsoPresetLightingDirection;
        public PresetLightingSoftness: Office.MsoPresetLightingSoftness;
        public PresetMaterial: Office.MsoPresetMaterial;
        public readonly PresetThreeDFormat: Office.MsoPresetThreeDFormat;
        public ProjectText: Office.MsoTriState;
        public ResetRotation(): void;
        public RotationX: number;
        public RotationY: number;
        public RotationZ: number;
        public SetExtrusionDirection(PresetExtrusionDirection: Office.MsoPresetExtrusionDirection): void;
        public SetPresetCamera(PresetCamera: Office.MsoPresetCamera): void;
        public SetThreeDFormat(PresetThreeDFormat: Office.MsoPresetThreeDFormat): void;
        public Visible: Office.MsoTriState;
        public Z: number;
    }

    class TickLabels {
        private 'Word.TickLabels_typekey': TickLabels;
        private constructor();
        public Alignment: number;
        public readonly Application: any;
        public AutoScaleFont: any;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Depth: number;
        public readonly Font: ChartFont;
        public readonly Format: ChartFormat;
        public MultiLevel: boolean;
        public readonly Name: string;
        public NumberFormat: string;
        public NumberFormatLinked: boolean;
        public NumberFormatLocal: any;
        public Offset: number;
        public Orientation: XlTickLabelOrientation;
        public readonly Parent: any;
        public ReadingOrder: number;
        public Select(): any;
    }

    class TwoInitialCapsException {
        private 'Word.TwoInitialCapsException_typekey': TwoInitialCapsException;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class TwoInitialCapsExceptions {
        private 'Word.TwoInitialCapsExceptions_typekey': TwoInitialCapsExceptions;
        private constructor();
        public Add(Name: string): TwoInitialCapsException;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): TwoInitialCapsException;
        public readonly Parent: any;
    }

    class UndoRecord {
        private 'Word.UndoRecord_typekey': UndoRecord;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly CustomRecordLevel: number;
        public readonly CustomRecordName: string;
        public EndCustomRecord(): void;
        public readonly IsRecordingCustomRecord: boolean;
        public readonly Parent: any;

        /** @param string [Name=''] */
        public StartCustomRecord(Name?: string): void;
    }

    class UpBars {
        private 'Word.UpBars_typekey': UpBars;
        private constructor();
        public readonly Application: any;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Fill: ChartFillFormat;
        public readonly Format: ChartFormat;
        public readonly Interior: Interior;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class Variable {
        private 'Word.Variable_typekey': Variable;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Parent: any;
        public Value: string;
    }

    class Variables {
        private 'Word.Variables_typekey': Variables;
        private constructor();
        public Add(Name: string, Value?: any): Variable;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Variable;
        public readonly Parent: any;
    }

    class Version {
        private 'Word.Version_typekey': Version;
        private constructor();
        public readonly Application: Application;
        public readonly Comment: string;
        public readonly Creator: number;
        public readonly Date: VarDate;
        public Delete(): void;
        public readonly Index: number;
        public Open(): Document;
        public OpenOld(): void;
        public readonly Parent: any;
        public readonly SavedBy: string;
    }

    class Versions {
        private 'Word.Versions_typekey': Versions;
        private constructor();
        public readonly Application: Application;
        public AutoVersion: WdAutoVersions;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): Version;
        public readonly Parent: any;
        public Save(Comment?: any): void;
    }

    class View {
        private 'Word.View_typekey': View;
        private constructor();
        public readonly Application: Application;
        public BrowseToWindow: number;
        public CollapseOutline(Range?: any): void;
        public ConflictMode: boolean;
        public readonly Creator: number;
        public DisplayBackgrounds: boolean;
        public DisplayPageBoundaries: boolean;
        public DisplaySmartTags: boolean;
        public Draft: boolean;
        public EnlargeFontsLessThan: number;
        public ExpandOutline(Range?: any): void;
        public FieldShading: WdFieldShading;
        public FullScreen: boolean;
        public Magnifier: boolean;
        public MailMergeDataView: boolean;
        public MarkupMode: WdRevisionsMode;
        public NextHeaderFooter(): void;
        public Panning: boolean;
        public readonly Parent: any;
        public PreviousHeaderFooter(): void;
        public ReadingLayout: boolean;
        public ReadingLayoutActualView: boolean;
        public ReadingLayoutAllowEditing: boolean;
        public ReadingLayoutAllowMultiplePages: boolean;
        public ReadingLayoutTruncateMargins: WdReadingLayoutMargin;
        public readonly Reviewers: Reviewers;
        public RevisionsBalloonShowConnectingLines: boolean;
        public RevisionsBalloonSide: WdRevisionsBalloonMargin;
        public RevisionsBalloonWidth: number;
        public RevisionsBalloonWidthType: WdRevisionsBalloonWidthType;
        public RevisionsMode: WdRevisionsMode;
        public RevisionsView: WdRevisionsView;
        public SeekView: WdSeekView;
        public ShadeEditableRanges: number;
        public ShowAll: boolean;
        public ShowAllHeadings(): void;
        public ShowAnimation: boolean;
        public ShowBookmarks: boolean;
        public ShowComments: boolean;
        public ShowCropMarks: boolean;
        public ShowDrawings: boolean;
        public ShowFieldCodes: boolean;
        public ShowFirstLineOnly: boolean;
        public ShowFormat: boolean;
        public ShowFormatChanges: boolean;
        public ShowHeading(Level: number): void;
        public ShowHiddenText: boolean;
        public ShowHighlight: boolean;
        public ShowHyphens: boolean;
        public ShowInkAnnotations: boolean;
        public ShowInsertionsAndDeletions: boolean;
        public ShowMainTextLayer: boolean;
        public ShowMarkupAreaHighlight: boolean;
        public ShowObjectAnchors: boolean;
        public ShowOptionalBreaks: boolean;
        public ShowOtherAuthors: boolean;
        public ShowParagraphs: boolean;
        public ShowPicturePlaceHolders: boolean;
        public ShowRevisionsAndComments: boolean;
        public ShowSpaces: boolean;
        public ShowTabs: boolean;
        public ShowTextBoundaries: boolean;
        public ShowXMLMarkup: number;
        public SplitSpecial: WdSpecialPane;
        public TableGridlines: boolean;
        public Type: WdViewType;
        public WrapToWindow: boolean;
        public readonly Zoom: Zoom;
    }

    class Walls {
        private 'Word.Walls_typekey': Walls;
        private constructor();
        public readonly Application: any;
        public readonly Border: ChartBorder;
        public ClearFormats(): any;
        public readonly Creator: number;
        public readonly Fill: ChartFillFormat;
        public readonly Format: ChartFormat;
        public readonly Interior: Interior;
        public readonly Name: string;
        public readonly Parent: any;
        public Paste(): void;
        public PictureType: any;
        public PictureUnit: any;
        public Select(): any;
        public Thickness: number;
    }

    class WebOptions {
        private 'Word.WebOptions_typekey': WebOptions;
        private constructor();
        public AllowPNG: boolean;
        public readonly Application: Application;
        public BrowserLevel: WdBrowserLevel;
        public readonly Creator: number;
        public Encoding: Office.MsoEncoding;
        public readonly FolderSuffix: string;
        public OptimizeForBrowser: boolean;
        public OrganizeInFolder: boolean;
        public readonly Parent: any;
        public PixelsPerInch: number;
        public RelyOnCSS: boolean;
        public RelyOnVML: boolean;
        public ScreenSize: Office.MsoScreenSize;
        public TargetBrowser: Office.MsoTargetBrowser;
        public UseDefaultFolderSuffix(): void;
        public UseLongFileNames: boolean;
    }

    class Window {
        private 'Word.Window_typekey': Window;
        private constructor();
        public Activate(): void;
        public readonly Active: boolean;
        public readonly ActivePane: Pane;
        public readonly Application: Application;
        public Caption: string;
        public Close(SaveChanges?: any, RouteDocument?: any): void;
        public readonly Creator: number;
        public DisplayHorizontalScrollBar: boolean;
        public DisplayLeftScrollBar: boolean;
        public DisplayRightRuler: boolean;
        public DisplayRulers: boolean;
        public DisplayScreenTips: boolean;
        public DisplayVerticalRuler: boolean;
        public DisplayVerticalScrollBar: boolean;
        public readonly Document: Document;
        public DocumentMap: boolean;
        public DocumentMapPercentWidth: number;
        public EnvelopeVisible: boolean;
        public GetPoint(ScreenPixelsLeft: number, ScreenPixelsTop: number, ScreenPixelsWidth: number, ScreenPixelsHeight: number, obj: any): void;
        public Height: number;
        public HorizontalPercentScrolled: number;
        public IMEMode: WdIMEMode;
        public readonly Index: number;
        public LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;
        public Left: number;
        public NewWindow(): Window;
        public readonly Next: Window;
        public PageScroll(Down?: any, Up?: any): void;
        public readonly Panes: Panes;
        public readonly Parent: any;
        public readonly Previous: Window;
        public PrintOut(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any,
            PrintZoomPaperHeight?: any): void;
        public PrintOut2000(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any, PrintZoomColumn?: any, PrintZoomRow?: any, PrintZoomPaperWidth?: any,
            PrintZoomPaperHeight?: any): void;
        public PrintOutOld(
            Background?: any, Append?: any, Range?: any, OutputFileName?: any, From?: any, To?: any, Item?: any, Copies?: any, Pages?: any, PageType?: any,
            PrintToFile?: any, Collate?: any, ActivePrinterMacGX?: any, ManualDuplexPrint?: any): void;
        public RangeFromPoint(x: number, y: number): any;
        public ScrollIntoView(obj: any, Start?: any): void;
        public readonly Selection: Selection;
        public SetFocus(): void;
        public ShowSourceDocuments: WdShowSourceDocuments;
        public SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): void;
        public Split: boolean;
        public SplitVertical: number;
        public StyleAreaWidth: number;
        public Thumbnails: boolean;
        public ToggleRibbon(): void;
        public ToggleShowAllReviewers(): void;
        public Top: number;
        public readonly Type: WdWindowType;
        public readonly UsableHeight: number;
        public readonly UsableWidth: number;
        public VerticalPercentScrolled: number;
        public readonly View: View;
        public Visible: boolean;
        public Width: number;
        public readonly WindowNumber: number;
        public WindowState: WdWindowState;
    }

    class Windows {
        private 'Word.Windows_typekey': Windows;
        private constructor();
        public Add(Window?: any): Window;
        public readonly Application: Application;
        public Arrange(ArrangeStyle?: any): void;
        public BreakSideBySide(): boolean;
        public CompareSideBySideWith(Document: any): boolean;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Window;
        public readonly Parent: any;
        public ResetPositionsSideBySide(): void;
        public SyncScrollingSideBySide: boolean;
    }

    class Words {
        private 'Word.Words_typekey': Words;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public readonly First: Range;
        public Item(Index: number): Range;
        public readonly Last: Range;
        public readonly Parent: any;
    }

    class WrapFormat {
        private 'Word.WrapFormat_typekey': WrapFormat;
        private constructor();
        public AllowOverlap: number;
        public readonly Application: Application;
        public readonly Creator: number;
        public DistanceBottom: number;
        public DistanceLeft: number;
        public DistanceRight: number;
        public DistanceTop: number;
        public readonly Parent: any;
        public Side: WdWrapSideType;
        public Type: WdWrapType;
    }

    class XMLChildNodeSuggestion {
        private 'Word.XMLChildNodeSuggestion_typekey': XMLChildNodeSuggestion;
        private constructor();
        public readonly Application: Application;
        public readonly BaseName: string;
        public readonly Creator: number;
        public Insert(Range?: any): XMLNode;
        public readonly NamespaceURI: string;
        public readonly Parent: any;
        public readonly XMLSchemaReference: XMLSchemaReference;
    }

    class XMLChildNodeSuggestions {
        private 'Word.XMLChildNodeSuggestions_typekey': XMLChildNodeSuggestions;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): XMLChildNodeSuggestion;
        public readonly Parent: any;
    }

    class XMLMapping {
        private 'Word.XMLMapping_typekey': XMLMapping;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly CustomXMLNode: Office.CustomXMLNode;
        public readonly CustomXMLPart: Office.CustomXMLPart;
        public Delete(): void;
        public readonly IsMapped: boolean;
        public readonly Parent: any;
        public readonly PrefixMappings: string;

        /**
         * @param string [PrefixMapping='']
         * @param Office.CustomXMLPart [Source=0]
         */
        public SetMapping(XPath: string, PrefixMapping?: string, Source?: Office.CustomXMLPart): boolean;
        public SetMappingByNode(Node: Office.CustomXMLNode): boolean;
        public readonly XPath: string;
    }

    class XMLNamespace {
        private 'Word.XMLNamespace_typekey': XMLNamespace;
        private constructor();

        /** @param boolean [AllUsers=false] */
        public Alias(AllUsers?: boolean): string;
        public readonly Application: Application;
        public AttachToDocument(Document: any): void;
        public readonly Creator: number;

        /** @param boolean [AllUsers=false] */
        public DefaultTransform(AllUsers?: boolean): XSLTransform;
        public Delete(): void;

        /** @param boolean [AllUsers=false] */
        public Location(AllUsers?: boolean): string;
        public readonly Parent: any;
        public readonly URI: string;
        public readonly XSLTransforms: XSLTransforms;
    }

    class XMLNamespaces {
        private 'Word.XMLNamespaces_typekey': XMLNamespaces;
        private constructor();

        /** @param boolean [InstallForAllUsers=false] */
        public Add(Path: string, NamespaceURI: any, Alias: any, InstallForAllUsers?: boolean): XMLNamespace;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;

        /** @param boolean [InstallForAllUsers=false] */
        public InstallManifest(Path: string, InstallForAllUsers?: boolean): void;
        public Item(Index: any): XMLNamespace;
        public readonly Parent: any;
    }

    class XMLNode {
        private 'Word.XMLNode_typekey': XMLNode;
        private constructor();
        public readonly Application: Application;
        public readonly Attributes: XMLNodes;
        public readonly BaseName: string;
        public readonly ChildNodes: XMLNodes;
        public readonly ChildNodeSuggestions: XMLChildNodeSuggestions;
        public Copy(): void;
        public readonly Creator: number;
        public Cut(): void;
        public Delete(): void;
        public readonly FirstChild: XMLNode;
        public readonly HasChildNodes: boolean;
        public readonly LastChild: XMLNode;
        public readonly Level: WdXMLNodeLevel;
        public readonly NamespaceURI: string;
        public readonly NextSibling: XMLNode;
        public readonly NodeType: WdXMLNodeType;
        public NodeValue: string;
        public readonly OwnerDocument: Document;
        public readonly Parent: any;
        public readonly ParentNode: XMLNode;
        public PlaceholderText: string;
        public readonly PreviousSibling: XMLNode;
        public readonly Range: Range;
        public RemoveChild(ChildElement: XMLNode): void;

        /**
         * @param string [PrefixMapping='']
         * @param boolean [FastSearchSkippingTextNodes=true]
         */
        public SelectNodes(XPath: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean): XMLNodes;

        /**
         * @param string [PrefixMapping='']
         * @param boolean [FastSearchSkippingTextNodes=true]
         */
        public SelectSingleNode(XPath: string, PrefixMapping?: string, FastSearchSkippingTextNodes?: boolean): XMLNode;

        /** @param boolean [ClearedAutomatically=true] */
        public SetValidationError(Status: WdXMLValidationStatus, ErrorText: any, ClearedAutomatically?: boolean): void;
        public readonly SmartTag: SmartTag;
        public Text: string;
        public Validate(): void;

        /** @param boolean [Advanced=false] */
        public ValidationErrorText(Advanced?: boolean): string;
        public readonly ValidationStatus: WdXMLValidationStatus;
        public readonly WordOpenXML: string;

        /** @param boolean [DataOnly=false] */
        public XML(DataOnly?: boolean): string;
    }

    class XMLNodes {
        private 'Word.XMLNodes_typekey': XMLNodes;
        private constructor();
        public Add(Name: string, Namespace: string, Range?: any): XMLNode;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): XMLNode;
        public readonly Parent: any;
    }

    class XMLSchemaReference {
        private 'Word.XMLSchemaReference_typekey': XMLSchemaReference;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Location: string;
        public readonly NamespaceURI: string;
        public readonly Parent: any;
        public Reload(): void;
    }

    class XMLSchemaReferences {
        private 'Word.XMLSchemaReferences_typekey': XMLSchemaReferences;
        private constructor();

        /** @param boolean [InstallForAllUsers=false] */
        public Add(NamespaceURI: any, Alias: any, FileName: any, InstallForAllUsers?: boolean): XMLSchemaReference;
        public AllowSaveAsXMLWithoutValidation: boolean;
        public readonly Application: Application;
        public AutomaticValidation: boolean;
        public readonly Count: number;
        public readonly Creator: number;
        public HideValidationErrors: boolean;
        public IgnoreMixedContent: boolean;
        public Item(Index: any): XMLSchemaReference;
        public readonly Parent: any;
        public ShowPlaceholderText: boolean;
        public Validate(): void;
    }

    class XSLTransform {
        private 'Word.XSLTransform_typekey': XSLTransform;
        private constructor();

        /** @param boolean [AllUsers=false] */
        public Alias(AllUsers?: boolean): string;
        public readonly Application: Application;
        public readonly Creator: number;
        public Delete(): void;
        public readonly ID: string;

        /** @param boolean [AllUsers=false] */
        public Location(AllUsers?: boolean): string;
        public readonly Parent: any;
    }

    class XSLTransforms {
        private 'Word.XSLTransforms_typekey': XSLTransforms;
        private constructor();

        /** @param boolean [InstallForAllUsers=false] */
        public Add(Location: string, Alias: any, InstallForAllUsers?: boolean): XSLTransform;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): XSLTransform;
        public readonly Parent: any;
    }

    class Zoom {
        private 'Word.Zoom_typekey': Zoom;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public PageColumns: number;
        public PageFit: WdPageFit;
        public PageRows: number;
        public readonly Parent: any;
        public Percentage: number;
    }

    class Zooms {
        private 'Word.Zooms_typekey': Zooms;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public Item(Index: WdViewType): Zoom;
        public readonly Parent: any;
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
