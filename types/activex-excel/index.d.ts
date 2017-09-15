// Type definitions for Microsoft Excel 14.0 Object Library - Excel 14.0
// Project: https://msdn.microsoft.com/en-us/library/fp179694.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="activex-office" />
/// <reference types="activex-vbide" />
/// <reference types="activex-stdole" />

declare namespace Excel {
    const enum Constants {
        xl3DBar = -4099,
        xl3DEffects1 = 13,
        xl3DEffects2 = 14,
        xl3DSurface = -4103,
        xlAbove = 0,
        xlAccounting1 = 4,
        xlAccounting2 = 5,
        xlAccounting3 = 6,
        xlAccounting4 = 17,
        xlAdd = 2,
        xlAll = -4104,
        xlAllExceptBorders = 7,
        xlAutomatic = -4105,
        xlBar = 2,
        xlBelow = 1,
        xlBidi = -5000,
        xlBidiCalendar = 3,
        xlBoth = 1,
        xlBottom = -4107,
        xlCascade = 7,
        xlCenter = -4108,
        xlCenterAcrossSelection = 7,
        xlChart4 = 2,
        xlChartSeries = 17,
        xlChartShort = 6,
        xlChartTitles = 18,
        xlChecker = 9,
        xlCircle = 8,
        xlClassic1 = 1,
        xlClassic2 = 2,
        xlClassic3 = 3,
        xlClosed = 3,
        xlColor1 = 7,
        xlColor2 = 8,
        xlColor3 = 9,
        xlColumn = 3,
        xlCombination = -4111,
        xlComplete = 4,
        xlConstants = 2,
        xlContents = 2,
        xlContext = -5002,
        xlCorner = 2,
        xlCrissCross = 16,
        xlCross = 4,
        xlCustom = -4114,
        xlDebugCodePane = 13,
        xlDefaultAutoFormat = -1,
        xlDesktop = 9,
        xlDiamond = 2,
        xlDirect = 1,
        xlDistributed = -4117,
        xlDivide = 5,
        xlDoubleAccounting = 5,
        xlDoubleClosed = 5,
        xlDoubleOpen = 4,
        xlDoubleQuote = 1,
        xlDrawingObject = 14,
        xlEntireChart = 20,
        xlExcelMenus = 1,
        xlExtended = 3,
        xlFill = 5,
        xlFirst = 0,
        xlFixedValue = 1,
        xlFloating = 5,
        xlFormats = -4122,
        xlFormula = 5,
        xlFullScript = 1,
        xlGeneral = 1,
        xlGray16 = 17,
        xlGray25 = -4124,
        xlGray50 = -4125,
        xlGray75 = -4126,
        xlGray8 = 18,
        xlGregorian = 2,
        xlGrid = 15,
        xlGridline = 22,
        xlHigh = -4127,
        xlHindiNumerals = 3,
        xlIcons = 1,
        xlImmediatePane = 12,
        xlInside = 2,
        xlInteger = 2,
        xlJustify = -4130,
        xlLast = 1,
        xlLastCell = 11,
        xlLatin = -5001,
        xlLeft = -4131,
        xlLeftToRight = 2,
        xlLightDown = 13,
        xlLightHorizontal = 11,
        xlLightUp = 14,
        xlLightVertical = 12,
        xlList1 = 10,
        xlList2 = 11,
        xlList3 = 12,
        xlLocalFormat1 = 15,
        xlLocalFormat2 = 16,
        xlLogicalCursor = 1,
        xlLong = 3,
        xlLotusHelp = 2,
        xlLow = -4134,
        xlLTR = -5003,
        xlMacrosheetCell = 7,
        xlManual = -4135,
        xlMaximum = 2,
        xlMinimum = 4,
        xlMinusValues = 3,
        xlMixed = 2,
        xlMixedAuthorizedScript = 4,
        xlMixedScript = 3,
        xlModule = -4141,
        xlMultiply = 4,
        xlNarrow = 1,
        xlNextToAxis = 4,
        xlNoDocuments = 3,
        xlNone = -4142,
        xlNotes = -4144,
        xlOff = -4146,
        xlOn = 1,
        xlOpaque = 3,
        xlOpen = 2,
        xlOutside = 3,
        xlPartial = 3,
        xlPartialScript = 2,
        xlPercent = 2,
        xlPlus = 9,
        xlPlusValues = 2,
        xlReference = 4,
        xlRight = -4152,
        xlRTL = -5004,
        xlScale = 3,
        xlSemiautomatic = 2,
        xlSemiGray75 = 10,
        xlShort = 1,
        xlShowLabel = 4,
        xlShowLabelAndPercent = 5,
        xlShowPercent = 3,
        xlShowValue = 2,
        xlSimple = -4154,
        xlSingle = 2,
        xlSingleAccounting = 4,
        xlSingleQuote = 2,
        xlSolid = 1,
        xlSquare = 1,
        xlStar = 5,
        xlStError = 4,
        xlStrict = 2,
        xlSubtract = 3,
        xlSystem = 1,
        xlTextBox = 16,
        xlTiled = 1,
        xlTitleBar = 8,
        xlToolbar = 1,
        xlToolbarButton = 2,
        xlTop = -4160,
        xlTopToBottom = 1,
        xlTransparent = 2,
        xlTriangle = 3,
        xlVeryHidden = 2,
        xlVisible = 12,
        xlVisualCursor = 2,
        xlWatchPane = 11,
        xlWide = 3,
        xlWorkbookTab = 6,
        xlWorksheet4 = 1,
        xlWorksheetCell = 3,
        xlWorksheetShort = 5,
    }

    const enum XlAboveBelow {
        xlAboveAverage = 0,
        xlAboveStdDev = 4,
        xlBelowAverage = 1,
        xlBelowStdDev = 5,
        xlEqualAboveAverage = 2,
        xlEqualBelowAverage = 3,
    }

    const enum XlActionType {
        xlActionTypeDrillthrough = 256,
        xlActionTypeReport = 128,
        xlActionTypeRowset = 16,
        xlActionTypeUrl = 1,
    }

    const enum XlAllocation {
        xlAutomaticAllocation = 2,
        xlManualAllocation = 1,
    }

    const enum XlAllocationMethod {
        xlEqualAllocation = 1,
        xlWeightedAllocation = 2,
    }

    const enum XlAllocationValue {
        xlAllocateIncrement = 2,
        xlAllocateValue = 1,
    }

    const enum XlApplicationInternational {
        xl24HourClock = 33,
        xl4DigitYears = 43,
        xlAlternateArraySeparator = 16,
        xlColumnSeparator = 14,
        xlCountryCode = 1,
        xlCountrySetting = 2,
        xlCurrencyBefore = 37,
        xlCurrencyCode = 25,
        xlCurrencyDigits = 27,
        xlCurrencyLeadingZeros = 40,
        xlCurrencyMinusSign = 38,
        xlCurrencyNegative = 28,
        xlCurrencySpaceBefore = 36,
        xlCurrencyTrailingZeros = 39,
        xlDateOrder = 32,
        xlDateSeparator = 17,
        xlDayCode = 21,
        xlDayLeadingZero = 42,
        xlDecimalSeparator = 3,
        xlGeneralFormatName = 26,
        xlHourCode = 22,
        xlLeftBrace = 12,
        xlLeftBracket = 10,
        xlListSeparator = 5,
        xlLowerCaseColumnLetter = 9,
        xlLowerCaseRowLetter = 8,
        xlMDY = 44,
        xlMetric = 35,
        xlMinuteCode = 23,
        xlMonthCode = 20,
        xlMonthLeadingZero = 41,
        xlMonthNameChars = 30,
        xlNoncurrencyDigits = 29,
        xlNonEnglishFunctions = 34,
        xlRightBrace = 13,
        xlRightBracket = 11,
        xlRowSeparator = 15,
        xlSecondCode = 24,
        xlThousandsSeparator = 4,
        xlTimeLeadingZero = 45,
        xlTimeSeparator = 18,
        xlUpperCaseColumnLetter = 7,
        xlUpperCaseRowLetter = 6,
        xlWeekdayNameChars = 31,
        xlYearCode = 19,
    }

    const enum XlApplyNamesOrder {
        xlColumnThenRow = 2,
        xlRowThenColumn = 1,
    }

    const enum XlArabicModes {
        xlArabicBothStrict = 3,
        xlArabicNone = 0,
        xlArabicStrictAlefHamza = 1,
        xlArabicStrictFinalYaa = 2,
    }

    const enum XlArrangeStyle {
        xlArrangeStyleCascade = 7,
        xlArrangeStyleHorizontal = -4128,
        xlArrangeStyleTiled = 1,
        xlArrangeStyleVertical = -4166,
    }

    const enum XlArrowHeadLength {
        xlArrowHeadLengthLong = 3,
        xlArrowHeadLengthMedium = -4138,
        xlArrowHeadLengthShort = 1,
    }

    const enum XlArrowHeadStyle {
        xlArrowHeadStyleClosed = 3,
        xlArrowHeadStyleDoubleClosed = 5,
        xlArrowHeadStyleDoubleOpen = 4,
        xlArrowHeadStyleNone = -4142,
        xlArrowHeadStyleOpen = 2,
    }

    const enum XlArrowHeadWidth {
        xlArrowHeadWidthMedium = -4138,
        xlArrowHeadWidthNarrow = 1,
        xlArrowHeadWidthWide = 3,
    }

    const enum XlAutoFillType {
        xlFillCopy = 1,
        xlFillDays = 5,
        xlFillDefault = 0,
        xlFillFormats = 3,
        xlFillMonths = 7,
        xlFillSeries = 2,
        xlFillValues = 4,
        xlFillWeekdays = 6,
        xlFillYears = 8,
        xlGrowthTrend = 10,
        xlLinearTrend = 9,
    }

    const enum XlAutoFilterOperator {
        xlAnd = 1,
        xlBottom10Items = 4,
        xlBottom10Percent = 6,
        xlFilterAutomaticFontColor = 13,
        xlFilterCellColor = 8,
        xlFilterDynamic = 11,
        xlFilterFontColor = 9,
        xlFilterIcon = 10,
        xlFilterNoFill = 12,
        xlFilterNoIcon = 14,
        xlFilterValues = 7,
        xlOr = 2,
        xlTop10Items = 3,
        xlTop10Percent = 5,
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

    const enum XlBordersIndex {
        xlDiagonalDown = 5,
        xlDiagonalUp = 6,
        xlEdgeBottom = 9,
        xlEdgeLeft = 7,
        xlEdgeRight = 10,
        xlEdgeTop = 8,
        xlInsideHorizontal = 12,
        xlInsideVertical = 11,
    }

    const enum XlBorderWeight {
        xlHairline = 1,
        xlMedium = -4138,
        xlThick = 4,
        xlThin = 2,
    }

    const enum XlBuiltInDialog {
        _xlDialogChartSourceData = 541,
        _xlDialogPhonetic = 538,
        xlDialogActivate = 103,
        xlDialogActiveCellFont = 476,
        xlDialogAddChartAutoformat = 390,
        xlDialogAddinManager = 321,
        xlDialogAlignment = 43,
        xlDialogApplyNames = 133,
        xlDialogApplyStyle = 212,
        xlDialogAppMove = 170,
        xlDialogAppSize = 171,
        xlDialogArrangeAll = 12,
        xlDialogAssignToObject = 213,
        xlDialogAssignToTool = 293,
        xlDialogAttachText = 80,
        xlDialogAttachToolbars = 323,
        xlDialogAutoCorrect = 485,
        xlDialogAxes = 78,
        xlDialogBorder = 45,
        xlDialogCalculation = 32,
        xlDialogCellProtection = 46,
        xlDialogChangeLink = 166,
        xlDialogChartAddData = 392,
        xlDialogChartLocation = 527,
        xlDialogChartOptionsDataLabelMultiple = 724,
        xlDialogChartOptionsDataLabels = 505,
        xlDialogChartOptionsDataTable = 506,
        xlDialogChartSourceData = 540,
        xlDialogChartTrend = 350,
        xlDialogChartType = 526,
        xlDialogChartWizard = 288,
        xlDialogCheckboxProperties = 435,
        xlDialogClear = 52,
        xlDialogColorPalette = 161,
        xlDialogColumnWidth = 47,
        xlDialogCombination = 73,
        xlDialogConditionalFormatting = 583,
        xlDialogConsolidate = 191,
        xlDialogCopyChart = 147,
        xlDialogCopyPicture = 108,
        xlDialogCreateList = 796,
        xlDialogCreateNames = 62,
        xlDialogCreatePublisher = 217,
        xlDialogCustomizeToolbar = 276,
        xlDialogCustomViews = 493,
        xlDialogDataDelete = 36,
        xlDialogDataLabel = 379,
        xlDialogDataLabelMultiple = 723,
        xlDialogDataSeries = 40,
        xlDialogDataValidation = 525,
        xlDialogDefineName = 61,
        xlDialogDefineStyle = 229,
        xlDialogDeleteFormat = 111,
        xlDialogDeleteName = 110,
        xlDialogDemote = 203,
        xlDialogDisplay = 27,
        xlDialogDocumentInspector = 862,
        xlDialogEditboxProperties = 438,
        xlDialogEditColor = 223,
        xlDialogEditDelete = 54,
        xlDialogEditionOptions = 251,
        xlDialogEditSeries = 228,
        xlDialogErrorbarX = 463,
        xlDialogErrorbarY = 464,
        xlDialogErrorChecking = 732,
        xlDialogEvaluateFormula = 709,
        xlDialogExternalDataProperties = 530,
        xlDialogExtract = 35,
        xlDialogFileDelete = 6,
        xlDialogFileSharing = 481,
        xlDialogFillGroup = 200,
        xlDialogFillWorkgroup = 301,
        xlDialogFilter = 447,
        xlDialogFilterAdvanced = 370,
        xlDialogFindFile = 475,
        xlDialogFont = 26,
        xlDialogFontProperties = 381,
        xlDialogFormatAuto = 269,
        xlDialogFormatChart = 465,
        xlDialogFormatCharttype = 423,
        xlDialogFormatFont = 150,
        xlDialogFormatLegend = 88,
        xlDialogFormatMain = 225,
        xlDialogFormatMove = 128,
        xlDialogFormatNumber = 42,
        xlDialogFormatOverlay = 226,
        xlDialogFormatSize = 129,
        xlDialogFormatText = 89,
        xlDialogFormulaFind = 64,
        xlDialogFormulaGoto = 63,
        xlDialogFormulaReplace = 130,
        xlDialogFunctionWizard = 450,
        xlDialogGallery3dArea = 193,
        xlDialogGallery3dBar = 272,
        xlDialogGallery3dColumn = 194,
        xlDialogGallery3dLine = 195,
        xlDialogGallery3dPie = 196,
        xlDialogGallery3dSurface = 273,
        xlDialogGalleryArea = 67,
        xlDialogGalleryBar = 68,
        xlDialogGalleryColumn = 69,
        xlDialogGalleryCustom = 388,
        xlDialogGalleryDoughnut = 344,
        xlDialogGalleryLine = 70,
        xlDialogGalleryPie = 71,
        xlDialogGalleryRadar = 249,
        xlDialogGalleryScatter = 72,
        xlDialogGoalSeek = 198,
        xlDialogGridlines = 76,
        xlDialogImportTextFile = 666,
        xlDialogInsert = 55,
        xlDialogInsertHyperlink = 596,
        xlDialogInsertNameLabel = 496,
        xlDialogInsertObject = 259,
        xlDialogInsertPicture = 342,
        xlDialogInsertTitle = 380,
        xlDialogLabelProperties = 436,
        xlDialogListboxProperties = 437,
        xlDialogMacroOptions = 382,
        xlDialogMailEditMailer = 470,
        xlDialogMailLogon = 339,
        xlDialogMailNextLetter = 378,
        xlDialogMainChart = 85,
        xlDialogMainChartType = 185,
        xlDialogMenuEditor = 322,
        xlDialogMove = 262,
        xlDialogMyPermission = 834,
        xlDialogNameManager = 977,
        xlDialogNew = 119,
        xlDialogNewName = 978,
        xlDialogNewWebQuery = 667,
        xlDialogNote = 154,
        xlDialogObjectProperties = 207,
        xlDialogObjectProtection = 214,
        xlDialogOpen = 1,
        xlDialogOpenLinks = 2,
        xlDialogOpenMail = 188,
        xlDialogOpenText = 441,
        xlDialogOptionsCalculation = 318,
        xlDialogOptionsChart = 325,
        xlDialogOptionsEdit = 319,
        xlDialogOptionsGeneral = 356,
        xlDialogOptionsListsAdd = 458,
        xlDialogOptionsME = 647,
        xlDialogOptionsTransition = 355,
        xlDialogOptionsView = 320,
        xlDialogOutline = 142,
        xlDialogOverlay = 86,
        xlDialogOverlayChartType = 186,
        xlDialogPageSetup = 7,
        xlDialogParse = 91,
        xlDialogPasteNames = 58,
        xlDialogPasteSpecial = 53,
        xlDialogPatterns = 84,
        xlDialogPermission = 832,
        xlDialogPhonetic = 656,
        xlDialogPivotCalculatedField = 570,
        xlDialogPivotCalculatedItem = 572,
        xlDialogPivotClientServerSet = 689,
        xlDialogPivotFieldGroup = 433,
        xlDialogPivotFieldProperties = 313,
        xlDialogPivotFieldUngroup = 434,
        xlDialogPivotShowPages = 421,
        xlDialogPivotSolveOrder = 568,
        xlDialogPivotTableOptions = 567,
        xlDialogPivotTableSlicerConnections = 1183,
        xlDialogPivotTableWhatIfAnalysisSettings = 1153,
        xlDialogPivotTableWizard = 312,
        xlDialogPlacement = 300,
        xlDialogPrint = 8,
        xlDialogPrinterSetup = 9,
        xlDialogPrintPreview = 222,
        xlDialogPromote = 202,
        xlDialogProperties = 474,
        xlDialogPropertyFields = 754,
        xlDialogProtectDocument = 28,
        xlDialogProtectSharing = 620,
        xlDialogPublishAsWebPage = 653,
        xlDialogPushbuttonProperties = 445,
        xlDialogReplaceFont = 134,
        xlDialogRoutingSlip = 336,
        xlDialogRowHeight = 127,
        xlDialogRun = 17,
        xlDialogSaveAs = 5,
        xlDialogSaveCopyAs = 456,
        xlDialogSaveNewObject = 208,
        xlDialogSaveWorkbook = 145,
        xlDialogSaveWorkspace = 285,
        xlDialogScale = 87,
        xlDialogScenarioAdd = 307,
        xlDialogScenarioCells = 305,
        xlDialogScenarioEdit = 308,
        xlDialogScenarioMerge = 473,
        xlDialogScenarioSummary = 311,
        xlDialogScrollbarProperties = 420,
        xlDialogSearch = 731,
        xlDialogSelectSpecial = 132,
        xlDialogSendMail = 189,
        xlDialogSeriesAxes = 460,
        xlDialogSeriesOptions = 557,
        xlDialogSeriesOrder = 466,
        xlDialogSeriesShape = 504,
        xlDialogSeriesX = 461,
        xlDialogSeriesY = 462,
        xlDialogSetBackgroundPicture = 509,
        xlDialogSetManager = 1109,
        xlDialogSetMDXEditor = 1208,
        xlDialogSetPrintTitles = 23,
        xlDialogSetTupleEditorOnColumns = 1108,
        xlDialogSetTupleEditorOnRows = 1107,
        xlDialogSetUpdateStatus = 159,
        xlDialogShowDetail = 204,
        xlDialogShowToolbar = 220,
        xlDialogSize = 261,
        xlDialogSlicerCreation = 1182,
        xlDialogSlicerPivotTableConnections = 1184,
        xlDialogSlicerSettings = 1179,
        xlDialogSort = 39,
        xlDialogSortSpecial = 192,
        xlDialogSparklineInsertColumn = 1134,
        xlDialogSparklineInsertLine = 1133,
        xlDialogSparklineInsertWinLoss = 1135,
        xlDialogSplit = 137,
        xlDialogStandardFont = 190,
        xlDialogStandardWidth = 472,
        xlDialogStyle = 44,
        xlDialogSubscribeTo = 218,
        xlDialogSubtotalCreate = 398,
        xlDialogSummaryInfo = 474,
        xlDialogTable = 41,
        xlDialogTabOrder = 394,
        xlDialogTextToColumns = 422,
        xlDialogUnhide = 94,
        xlDialogUpdateLink = 201,
        xlDialogVbaInsertFile = 328,
        xlDialogVbaMakeAddin = 478,
        xlDialogVbaProcedureDefinition = 330,
        xlDialogView3d = 197,
        xlDialogWebOptionsBrowsers = 773,
        xlDialogWebOptionsEncoding = 686,
        xlDialogWebOptionsFiles = 684,
        xlDialogWebOptionsFonts = 687,
        xlDialogWebOptionsGeneral = 683,
        xlDialogWebOptionsPictures = 685,
        xlDialogWindowMove = 14,
        xlDialogWindowSize = 13,
        xlDialogWorkbookAdd = 281,
        xlDialogWorkbookCopy = 283,
        xlDialogWorkbookInsert = 354,
        xlDialogWorkbookMove = 282,
        xlDialogWorkbookName = 386,
        xlDialogWorkbookNew = 302,
        xlDialogWorkbookOptions = 284,
        xlDialogWorkbookProtect = 417,
        xlDialogWorkbookTabSplit = 415,
        xlDialogWorkbookUnhide = 384,
        xlDialogWorkgroup = 199,
        xlDialogWorkspace = 95,
        xlDialogZoom = 256,
    }

    const enum XlCalcFor {
        xlAllValues = 0,
        xlColGroups = 2,
        xlRowGroups = 1,
    }

    const enum XlCalculatedMemberType {
        xlCalculatedMember = 0,
        xlCalculatedSet = 1,
    }

    const enum XlCalculation {
        xlCalculationAutomatic = -4105,
        xlCalculationManual = -4135,
        xlCalculationSemiautomatic = 2,
    }

    const enum XlCalculationInterruptKey {
        xlAnyKey = 2,
        xlEscKey = 1,
        xlNoKey = 0,
    }

    const enum XlCalculationState {
        xlCalculating = 1,
        xlDone = 0,
        xlPending = 2,
    }

    const enum XlCategoryType {
        xlAutomaticScale = -4105,
        xlCategoryScale = 2,
        xlTimeScale = 3,
    }

    const enum XlCellChangedState {
        xlCellChangeApplied = 3,
        xlCellChanged = 2,
        xlCellNotChanged = 1,
    }

    const enum XlCellInsertionMode {
        xlInsertDeleteCells = 1,
        xlInsertEntireRows = 2,
        xlOverwriteCells = 0,
    }

    const enum XlCellType {
        xlCellTypeAllFormatConditions = -4172,
        xlCellTypeAllValidation = -4174,
        xlCellTypeBlanks = 4,
        xlCellTypeComments = -4144,
        xlCellTypeConstants = 2,
        xlCellTypeFormulas = -4123,
        xlCellTypeLastCell = 11,
        xlCellTypeSameFormatConditions = -4173,
        xlCellTypeSameValidation = -4175,
        xlCellTypeVisible = 12,
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

    const enum XlChartLocation {
        xlLocationAsNewSheet = 1,
        xlLocationAsObject = 2,
        xlLocationAutomatic = 3,
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

    const enum XlCheckInVersionType {
        xlCheckInMajorVersion = 1,
        xlCheckInMinorVersion = 0,
        xlCheckInOverwriteVersion = 2,
    }

    const enum XlClipboardFormat {
        xlClipboardFormatBIFF = 8,
        xlClipboardFormatBIFF12 = 63,
        xlClipboardFormatBIFF2 = 18,
        xlClipboardFormatBIFF3 = 20,
        xlClipboardFormatBIFF4 = 30,
        xlClipboardFormatBinary = 15,
        xlClipboardFormatBitmap = 9,
        xlClipboardFormatCGM = 13,
        xlClipboardFormatCSV = 5,
        xlClipboardFormatDIF = 4,
        xlClipboardFormatDspText = 12,
        xlClipboardFormatEmbeddedObject = 21,
        xlClipboardFormatEmbedSource = 22,
        xlClipboardFormatLink = 11,
        xlClipboardFormatLinkSource = 23,
        xlClipboardFormatLinkSourceDesc = 32,
        xlClipboardFormatMovie = 24,
        xlClipboardFormatNative = 14,
        xlClipboardFormatObjectDesc = 31,
        xlClipboardFormatObjectLink = 19,
        xlClipboardFormatOwnerLink = 17,
        xlClipboardFormatPICT = 2,
        xlClipboardFormatPrintPICT = 3,
        xlClipboardFormatRTF = 7,
        xlClipboardFormatScreenPICT = 29,
        xlClipboardFormatStandardFont = 28,
        xlClipboardFormatStandardScale = 27,
        xlClipboardFormatSYLK = 6,
        xlClipboardFormatTable = 16,
        xlClipboardFormatText = 0,
        xlClipboardFormatToolFace = 25,
        xlClipboardFormatToolFacePICT = 26,
        xlClipboardFormatVALU = 1,
        xlClipboardFormatWK1 = 10,
    }

    const enum XlCmdType {
        xlCmdCube = 1,
        xlCmdDefault = 4,
        xlCmdList = 5,
        xlCmdSql = 2,
        xlCmdTable = 3,
    }

    const enum XlColorIndex {
        xlColorIndexAutomatic = -4105,
        xlColorIndexNone = -4142,
    }

    const enum XlColumnDataType {
        xlDMYFormat = 4,
        xlDYMFormat = 7,
        xlEMDFormat = 10,
        xlGeneralFormat = 1,
        xlMDYFormat = 3,
        xlMYDFormat = 6,
        xlSkipColumn = 9,
        xlTextFormat = 2,
        xlYDMFormat = 8,
        xlYMDFormat = 5,
    }

    const enum XlCommandUnderlines {
        xlCommandUnderlinesAutomatic = -4105,
        xlCommandUnderlinesOff = -4146,
        xlCommandUnderlinesOn = 1,
    }

    const enum XlCommentDisplayMode {
        xlCommentAndIndicator = 1,
        xlCommentIndicatorOnly = -1,
        xlNoIndicator = 0,
    }

    const enum XlConditionValueTypes {
        xlConditionValueAutomaticMax = 7,
        xlConditionValueAutomaticMin = 6,
        xlConditionValueFormula = 4,
        xlConditionValueHighestValue = 2,
        xlConditionValueLowestValue = 1,
        xlConditionValueNone = -1,
        xlConditionValueNumber = 0,
        xlConditionValuePercent = 3,
        xlConditionValuePercentile = 5,
    }

    const enum XlConnectionType {
        xlConnectionTypeODBC = 2,
        xlConnectionTypeOLEDB = 1,
        xlConnectionTypeTEXT = 4,
        xlConnectionTypeWEB = 5,
        xlConnectionTypeXMLMAP = 3,
    }

    const enum XlConsolidationFunction {
        xlAverage = -4106,
        xlCount = -4112,
        xlCountNums = -4113,
        xlMax = -4136,
        xlMin = -4139,
        xlProduct = -4149,
        xlStDev = -4155,
        xlStDevP = -4156,
        xlSum = -4157,
        xlUnknown = 1000,
        xlVar = -4164,
        xlVarP = -4165,
    }

    const enum XlContainsOperator {
        xlBeginsWith = 2,
        xlContains = 0,
        xlDoesNotContain = 1,
        xlEndsWith = 3,
    }

    const enum XlCopyPictureFormat {
        xlBitmap = 2,
        xlPicture = -4147,
    }

    const enum XlCorruptLoad {
        xlExtractData = 2,
        xlNormalLoad = 0,
        xlRepairFile = 1,
    }

    const enum XlCreator {
        xlCreatorCode = 1480803660,
    }

    const enum XlCredentialsMethod {
        xlCredentialsMethodIntegrated = 0,
        xlCredentialsMethodNone = 1,
        xlCredentialsMethodStored = 2,
    }

    const enum XlCubeFieldSubType {
        xlCubeAttribute = 4,
        xlCubeCalculatedMeasure = 5,
        xlCubeHierarchy = 1,
        xlCubeKPIGoal = 7,
        xlCubeKPIStatus = 8,
        xlCubeKPITrend = 9,
        xlCubeKPIValue = 6,
        xlCubeKPIWeight = 10,
        xlCubeMeasure = 2,
        xlCubeSet = 3,
    }

    const enum XlCubeFieldType {
        xlHierarchy = 1,
        xlMeasure = 2,
        xlSet = 3,
    }

    const enum XlCutCopyMode {
        xlCopy = 1,
        xlCut = 2,
    }

    const enum XlCVError {
        xlErrDiv0 = 2007,
        xlErrNA = 2042,
        xlErrName = 2029,
        xlErrNull = 2000,
        xlErrNum = 2036,
        xlErrRef = 2023,
        xlErrValue = 2015,
    }

    const enum XlDataBarAxisPosition {
        xlDataBarAxisAutomatic = 0,
        xlDataBarAxisMidpoint = 1,
        xlDataBarAxisNone = 2,
    }

    const enum XlDataBarBorderType {
        xlDataBarBorderNone = 0,
        xlDataBarBorderSolid = 1,
    }

    const enum XlDataBarFillType {
        xlDataBarFillGradient = 1,
        xlDataBarFillSolid = 0,
    }

    const enum XlDataBarNegativeColorType {
        xlDataBarColor = 0,
        xlDataBarSameAsPositive = 1,
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

    const enum XlDataSeriesDate {
        xlDay = 1,
        xlMonth = 3,
        xlWeekday = 2,
        xlYear = 4,
    }

    const enum XlDataSeriesType {
        xlAutoFill = 4,
        xlChronological = 3,
        xlDataSeriesLinear = -4132,
        xlGrowth = 2,
    }

    const enum XlDeleteShiftDirection {
        xlShiftToLeft = -4159,
        xlShiftUp = -4162,
    }

    const enum XlDirection {
        xlDown = -4121,
        xlToLeft = -4159,
        xlToRight = -4161,
        xlUp = -4162,
    }

    const enum XlDisplayBlanksAs {
        xlInterpolated = 3,
        xlNotPlotted = 1,
        xlZero = 2,
    }

    const enum XlDisplayDrawingObjects {
        xlDisplayShapes = -4104,
        xlHide = 3,
        xlPlaceholders = 2,
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

    const enum XlDupeUnique {
        xlDuplicate = 1,
        xlUnique = 0,
    }

    const enum XlDVAlertStyle {
        xlValidAlertInformation = 3,
        xlValidAlertStop = 1,
        xlValidAlertWarning = 2,
    }

    const enum XlDVType {
        xlValidateCustom = 7,
        xlValidateDate = 4,
        xlValidateDecimal = 2,
        xlValidateInputOnly = 0,
        xlValidateList = 3,
        xlValidateTextLength = 6,
        xlValidateTime = 5,
        xlValidateWholeNumber = 1,
    }

    const enum XlDynamicFilterCriteria {
        xlFilterAboveAverage = 33,
        xlFilterAllDatesInPeriodApril = 24,
        xlFilterAllDatesInPeriodAugust = 28,
        xlFilterAllDatesInPeriodDecember = 32,
        xlFilterAllDatesInPeriodFebruray = 22,
        xlFilterAllDatesInPeriodJanuary = 21,
        xlFilterAllDatesInPeriodJuly = 27,
        xlFilterAllDatesInPeriodJune = 26,
        xlFilterAllDatesInPeriodMarch = 23,
        xlFilterAllDatesInPeriodMay = 25,
        xlFilterAllDatesInPeriodNovember = 31,
        xlFilterAllDatesInPeriodOctober = 30,
        xlFilterAllDatesInPeriodQuarter1 = 17,
        xlFilterAllDatesInPeriodQuarter2 = 18,
        xlFilterAllDatesInPeriodQuarter3 = 19,
        xlFilterAllDatesInPeriodQuarter4 = 20,
        xlFilterAllDatesInPeriodSeptember = 29,
        xlFilterBelowAverage = 34,
        xlFilterLastMonth = 8,
        xlFilterLastQuarter = 11,
        xlFilterLastWeek = 5,
        xlFilterLastYear = 14,
        xlFilterNextMonth = 9,
        xlFilterNextQuarter = 12,
        xlFilterNextWeek = 6,
        xlFilterNextYear = 15,
        xlFilterThisMonth = 7,
        xlFilterThisQuarter = 10,
        xlFilterThisWeek = 4,
        xlFilterThisYear = 13,
        xlFilterToday = 1,
        xlFilterTomorrow = 3,
        xlFilterYearToDate = 16,
        xlFilterYesterday = 2,
    }

    const enum XlEditionFormat {
        xlBIFF = 2,
        xlPICT = 1,
        xlRTF = 4,
        xlVALU = 8,
    }

    const enum XlEditionOptionsOption {
        xlAutomaticUpdate = 4,
        xlCancel = 1,
        xlChangeAttributes = 6,
        xlManualUpdate = 5,
        xlOpenSource = 3,
        xlSelect = 3,
        xlSendPublisher = 2,
        xlUpdateSubscriber = 2,
    }

    const enum XlEditionType {
        xlPublisher = 1,
        xlSubscriber = 2,
    }

    const enum XlEnableCancelKey {
        xlDisabled = 0,
        xlErrorHandler = 2,
        xlInterrupt = 1,
    }

    const enum XlEnableSelection {
        xlNoRestrictions = 0,
        xlNoSelection = -4142,
        xlUnlockedCells = 1,
    }

    const enum XlEndStyleCap {
        xlCap = 1,
        xlNoCap = 2,
    }

    const enum XlErrorBarDirection {
        xlX = -4168,
        xlY = 1,
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

    const enum XlErrorChecks {
        xlEmptyCellReferences = 7,
        xlEvaluateToError = 1,
        xlInconsistentFormula = 4,
        xlInconsistentListFormula = 9,
        xlListDataValidation = 8,
        xlNumberAsText = 3,
        xlOmittedCells = 5,
        xlTextDate = 2,
        xlUnlockedFormulaCells = 6,
    }

    const enum XlFileAccess {
        xlReadOnly = 3,
        xlReadWrite = 2,
    }

    const enum XlFileFormat {
        xlAddIn = 18,
        xlAddIn8 = 18,
        xlCSV = 6,
        xlCSVMac = 22,
        xlCSVMSDOS = 24,
        xlCSVWindows = 23,
        xlCurrentPlatformText = -4158,
        xlDBF2 = 7,
        xlDBF3 = 8,
        xlDBF4 = 11,
        xlDIF = 9,
        xlExcel12 = 50,
        xlExcel2 = 16,
        xlExcel2FarEast = 27,
        xlExcel3 = 29,
        xlExcel4 = 33,
        xlExcel4Workbook = 35,
        xlExcel5 = 39,
        xlExcel7 = 39,
        xlExcel8 = 56,
        xlExcel9795 = 43,
        xlHtml = 44,
        xlIntlAddIn = 26,
        xlIntlMacro = 25,
        xlOpenDocumentSpreadsheet = 60,
        xlOpenXMLAddIn = 55,
        xlOpenXMLTemplate = 54,
        xlOpenXMLTemplateMacroEnabled = 53,
        xlOpenXMLWorkbook = 51,
        xlOpenXMLWorkbookMacroEnabled = 52,
        xlSYLK = 2,
        xlTemplate = 17,
        xlTemplate8 = 17,
        xlTextMac = 19,
        xlTextMSDOS = 21,
        xlTextPrinter = 36,
        xlTextWindows = 20,
        xlUnicodeText = 42,
        xlWebArchive = 45,
        xlWJ2WD1 = 14,
        xlWJ3 = 40,
        xlWJ3FJ3 = 41,
        xlWK1 = 5,
        xlWK1ALL = 31,
        xlWK1FMT = 30,
        xlWK3 = 15,
        xlWK3FM3 = 32,
        xlWK4 = 38,
        xlWKS = 4,
        xlWorkbookDefault = 51,
        xlWorkbookNormal = -4143,
        xlWorks2FarEast = 28,
        xlWQ1 = 34,
        xlXMLSpreadsheet = 46,
    }

    const enum XlFileValidationPivotMode {
        xlFileValidationPivotDefault = 0,
        xlFileValidationPivotRun = 1,
        xlFileValidationPivotSkip = 2,
    }

    const enum XlFillWith {
        xlFillWithAll = -4104,
        xlFillWithContents = 2,
        xlFillWithFormats = -4122,
    }

    const enum XlFilterAction {
        xlFilterCopy = 2,
        xlFilterInPlace = 1,
    }

    const enum XlFilterAllDatesInPeriod {
        xlFilterAllDatesInPeriodDay = 2,
        xlFilterAllDatesInPeriodHour = 3,
        xlFilterAllDatesInPeriodMinute = 4,
        xlFilterAllDatesInPeriodMonth = 1,
        xlFilterAllDatesInPeriodSecond = 5,
        xlFilterAllDatesInPeriodYear = 0,
    }

    const enum XlFindLookIn {
        xlComments = -4144,
        xlFormulas = -4123,
        xlValues = -4163,
    }

    const enum XlFixedFormatQuality {
        xlQualityMinimum = 1,
        xlQualityStandard = 0,
    }

    const enum XlFixedFormatType {
        xlTypePDF = 0,
        xlTypeXPS = 1,
    }

    const enum XlFormatConditionOperator {
        xlBetween = 1,
        xlEqual = 3,
        xlGreater = 5,
        xlGreaterEqual = 7,
        xlLess = 6,
        xlLessEqual = 8,
        xlNotBetween = 2,
        xlNotEqual = 4,
    }

    const enum XlFormatConditionType {
        xlAboveAverageCondition = 12,
        xlBlanksCondition = 10,
        xlCellValue = 1,
        xlColorScale = 3,
        xlDatabar = 4,
        xlErrorsCondition = 16,
        xlExpression = 2,
        xlIconSets = 6,
        xlNoBlanksCondition = 13,
        xlNoErrorsCondition = 17,
        xlTextString = 9,
        xlTimePeriod = 11,
        xlTop10 = 5,
        xlUniqueValues = 8,
    }

    const enum XlFormatFilterTypes {
        xlFilterBottom = 0,
        xlFilterBottomPercent = 2,
        xlFilterTop = 1,
        xlFilterTopPercent = 3,
    }

    const enum XlFormControl {
        xlButtonControl = 0,
        xlCheckBox = 1,
        xlDropDown = 2,
        xlEditBox = 3,
        xlGroupBox = 4,
        xlLabel = 5,
        xlListBox = 6,
        xlOptionButton = 7,
        xlScrollBar = 8,
        xlSpinner = 9,
    }

    const enum XlFormulaLabel {
        xlColumnLabels = 2,
        xlMixedLabels = 3,
        xlNoLabels = -4142,
        xlRowLabels = 1,
    }

    const enum XlGenerateTableRefs {
        xlGenerateTableRefA1 = 0,
        xlGenerateTableRefStruct = 1,
    }

    const enum XlGradientFillType {
        xlGradientFillLinear = 0,
        xlGradientFillPath = 1,
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

    const enum XlHebrewModes {
        xlHebrewFullScript = 0,
        xlHebrewMixedAuthorizedScript = 3,
        xlHebrewMixedScript = 2,
        xlHebrewPartialScript = 1,
    }

    const enum XlHighlightChangesTime {
        xlAllChanges = 2,
        xlNotYetReviewed = 3,
        xlSinceMyLastSave = 1,
    }

    const enum XlHtmlType {
        xlHtmlCalc = 1,
        xlHtmlChart = 3,
        xlHtmlList = 2,
        xlHtmlStatic = 0,
    }

    const enum XlIcon {
        xlIcon0Bars = 37,
        xlIcon0FilledBoxes = 52,
        xlIcon1Bar = 38,
        xlIcon1FilledBox = 51,
        xlIcon2Bars = 39,
        xlIcon2FilledBoxes = 50,
        xlIcon3Bars = 40,
        xlIcon3FilledBoxes = 49,
        xlIcon4Bars = 41,
        xlIcon4FilledBoxes = 48,
        xlIconBlackCircle = 32,
        xlIconBlackCircleWithBorder = 13,
        xlIconCircleWithOneWhiteQuarter = 33,
        xlIconCircleWithThreeWhiteQuarters = 35,
        xlIconCircleWithTwoWhiteQuarters = 34,
        xlIconGoldStar = 42,
        xlIconGrayCircle = 31,
        xlIconGrayDownArrow = 6,
        xlIconGrayDownInclineArrow = 28,
        xlIconGraySideArrow = 5,
        xlIconGrayUpArrow = 4,
        xlIconGrayUpInclineArrow = 27,
        xlIconGreenCheck = 22,
        xlIconGreenCheckSymbol = 19,
        xlIconGreenCircle = 10,
        xlIconGreenFlag = 7,
        xlIconGreenTrafficLight = 14,
        xlIconGreenUpArrow = 1,
        xlIconGreenUpTriangle = 45,
        xlIconHalfGoldStar = 43,
        xlIconNoCellIcon = -1,
        xlIconPinkCircle = 30,
        xlIconRedCircle = 29,
        xlIconRedCircleWithBorder = 12,
        xlIconRedCross = 24,
        xlIconRedCrossSymbol = 21,
        xlIconRedDiamond = 18,
        xlIconRedDownArrow = 3,
        xlIconRedDownTriangle = 47,
        xlIconRedFlag = 9,
        xlIconRedTrafficLight = 16,
        xlIconSilverStar = 44,
        xlIconWhiteCircleAllWhiteQuarters = 36,
        xlIconYellowCircle = 11,
        xlIconYellowDash = 46,
        xlIconYellowDownInclineArrow = 26,
        xlIconYellowExclamation = 23,
        xlIconYellowExclamationSymbol = 20,
        xlIconYellowFlag = 8,
        xlIconYellowSideArrow = 2,
        xlIconYellowTrafficLight = 15,
        xlIconYellowTriangle = 17,
        xlIconYellowUpInclineArrow = 25,
    }

    const enum XlIconSet {
        xl3Arrows = 1,
        xl3ArrowsGray = 2,
        xl3Flags = 3,
        xl3Signs = 6,
        xl3Stars = 18,
        xl3Symbols = 7,
        xl3Symbols2 = 8,
        xl3TrafficLights1 = 4,
        xl3TrafficLights2 = 5,
        xl3Triangles = 19,
        xl4Arrows = 9,
        xl4ArrowsGray = 10,
        xl4CRV = 12,
        xl4RedToBlack = 11,
        xl4TrafficLights = 13,
        xl5Arrows = 14,
        xl5ArrowsGray = 15,
        xl5Boxes = 20,
        xl5CRV = 16,
        xl5Quarters = 17,
        xlCustomSet = -1,
    }

    const enum XlIMEMode {
        xlIMEModeAlpha = 8,
        xlIMEModeAlphaFull = 7,
        xlIMEModeDisable = 3,
        xlIMEModeHangul = 10,
        xlIMEModeHangulFull = 9,
        xlIMEModeHiragana = 4,
        xlIMEModeKatakana = 5,
        xlIMEModeKatakanaHalf = 6,
        xlIMEModeNoControl = 0,
        xlIMEModeOff = 2,
        xlIMEModeOn = 1,
    }

    const enum XlImportDataAs {
        xlPivotTableReport = 1,
        xlQueryTable = 0,
        xlTable = 2,
    }

    const enum XlInsertFormatOrigin {
        xlFormatFromLeftOrAbove = 0,
        xlFormatFromRightOrBelow = 1,
    }

    const enum XlInsertShiftDirection {
        xlShiftDown = -4121,
        xlShiftToRight = -4161,
    }

    const enum XlLayoutFormType {
        xlOutline = 1,
        xlTabular = 0,
    }

    const enum XlLayoutRowType {
        xlCompactRow = 0,
        xlOutlineRow = 2,
        xlTabularRow = 1,
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

    const enum XlLink {
        xlExcelLinks = 1,
        xlOLELinks = 2,
        xlPublishers = 5,
        xlSubscribers = 6,
    }

    const enum XlLinkInfo {
        xlEditionDate = 2,
        xlLinkInfoStatus = 3,
        xlUpdateState = 1,
    }

    const enum XlLinkInfoType {
        xlLinkInfoOLELinks = 2,
        xlLinkInfoPublishers = 5,
        xlLinkInfoSubscribers = 6,
    }

    const enum XlLinkStatus {
        xlLinkStatusCopiedValues = 10,
        xlLinkStatusIndeterminate = 5,
        xlLinkStatusInvalidName = 7,
        xlLinkStatusMissingFile = 1,
        xlLinkStatusMissingSheet = 2,
        xlLinkStatusNotStarted = 6,
        xlLinkStatusOK = 0,
        xlLinkStatusOld = 3,
        xlLinkStatusSourceNotCalculated = 4,
        xlLinkStatusSourceNotOpen = 8,
        xlLinkStatusSourceOpen = 9,
    }

    const enum XlLinkType {
        xlLinkTypeExcelLinks = 1,
        xlLinkTypeOLELinks = 2,
    }

    const enum XlListConflict {
        xlListConflictDialog = 0,
        xlListConflictDiscardAllConflicts = 2,
        xlListConflictError = 3,
        xlListConflictRetryAllConflicts = 1,
    }

    const enum XlListDataType {
        xlListDataTypeCheckbox = 9,
        xlListDataTypeChoice = 6,
        xlListDataTypeChoiceMulti = 7,
        xlListDataTypeCounter = 11,
        xlListDataTypeCurrency = 4,
        xlListDataTypeDateTime = 5,
        xlListDataTypeHyperLink = 10,
        xlListDataTypeListLookup = 8,
        xlListDataTypeMultiLineRichText = 12,
        xlListDataTypeMultiLineText = 2,
        xlListDataTypeNone = 0,
        xlListDataTypeNumber = 3,
        xlListDataTypeText = 1,
    }

    const enum XlListObjectSourceType {
        xlSrcExternal = 0,
        xlSrcQuery = 3,
        xlSrcRange = 1,
        xlSrcXml = 2,
    }

    const enum XlLocationInTable {
        xlColumnHeader = -4110,
        xlColumnItem = 5,
        xlDataHeader = 3,
        xlDataItem = 7,
        xlPageHeader = 2,
        xlPageItem = 6,
        xlRowHeader = -4153,
        xlRowItem = 4,
        xlTableBody = 8,
    }

    const enum XlLookAt {
        xlPart = 2,
        xlWhole = 1,
    }

    const enum XlLookFor {
        xlLookForBlanks = 0,
        xlLookForErrors = 1,
        xlLookForFormulas = 2,
    }

    const enum XlMailSystem {
        xlMAPI = 1,
        xlNoMailSystem = 0,
        xlPowerTalk = 2,
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

    const enum XlMeasurementUnits {
        xlCentimeters = 1,
        xlInches = 0,
        xlMillimeters = 2,
    }

    const enum XlMouseButton {
        xlNoButton = 0,
        xlPrimaryButton = 1,
        xlSecondaryButton = 2,
    }

    const enum XlMousePointer {
        xlDefault = -4143,
        xlIBeam = 3,
        xlNorthwestArrow = 1,
        xlWait = 2,
    }

    const enum XlMSApplication {
        xlMicrosoftAccess = 4,
        xlMicrosoftFoxPro = 5,
        xlMicrosoftMail = 3,
        xlMicrosoftPowerPoint = 2,
        xlMicrosoftProject = 6,
        xlMicrosoftSchedulePlus = 7,
        xlMicrosoftWord = 1,
    }

    const enum XlOartHorizontalOverflow {
        xlOartHorizontalOverflowClip = 1,
        xlOartHorizontalOverflowOverflow = 0,
    }

    const enum XlOartVerticalOverflow {
        xlOartVerticalOverflowClip = 1,
        xlOartVerticalOverflowEllipsis = 2,
        xlOartVerticalOverflowOverflow = 0,
    }

    const enum XlObjectSize {
        xlFitToPage = 2,
        xlFullPage = 3,
        xlScreenSize = 1,
    }

    const enum XlOLEType {
        xlOLEControl = 2,
        xlOLEEmbed = 1,
        xlOLELink = 0,
    }

    const enum XlOLEVerb {
        xlVerbOpen = 2,
        xlVerbPrimary = 1,
    }

    const enum XlOrder {
        xlDownThenOver = 1,
        xlOverThenDown = 2,
    }

    const enum XlOrientation {
        xlDownward = -4170,
        xlHorizontal = -4128,
        xlUpward = -4171,
        xlVertical = -4166,
    }

    const enum XlPageBreak {
        xlPageBreakAutomatic = -4105,
        xlPageBreakManual = -4135,
        xlPageBreakNone = -4142,
    }

    const enum XlPageBreakExtent {
        xlPageBreakFull = 1,
        xlPageBreakPartial = 2,
    }

    const enum XlPageOrientation {
        xlLandscape = 2,
        xlPortrait = 1,
    }

    const enum XlPaperSize {
        xlPaper10x14 = 16,
        xlPaper11x17 = 17,
        xlPaperA3 = 8,
        xlPaperA4 = 9,
        xlPaperA4Small = 10,
        xlPaperA5 = 11,
        xlPaperB4 = 12,
        xlPaperB5 = 13,
        xlPaperCsheet = 24,
        xlPaperDsheet = 25,
        xlPaperEnvelope10 = 20,
        xlPaperEnvelope11 = 21,
        xlPaperEnvelope12 = 22,
        xlPaperEnvelope14 = 23,
        xlPaperEnvelope9 = 19,
        xlPaperEnvelopeB4 = 33,
        xlPaperEnvelopeB5 = 34,
        xlPaperEnvelopeB6 = 35,
        xlPaperEnvelopeC3 = 29,
        xlPaperEnvelopeC4 = 30,
        xlPaperEnvelopeC5 = 28,
        xlPaperEnvelopeC6 = 31,
        xlPaperEnvelopeC65 = 32,
        xlPaperEnvelopeDL = 27,
        xlPaperEnvelopeItaly = 36,
        xlPaperEnvelopeMonarch = 37,
        xlPaperEnvelopePersonal = 38,
        xlPaperEsheet = 26,
        xlPaperExecutive = 7,
        xlPaperFanfoldLegalGerman = 41,
        xlPaperFanfoldStdGerman = 40,
        xlPaperFanfoldUS = 39,
        xlPaperFolio = 14,
        xlPaperLedger = 4,
        xlPaperLegal = 5,
        xlPaperLetter = 1,
        xlPaperLetterSmall = 2,
        xlPaperNote = 18,
        xlPaperQuarto = 15,
        xlPaperStatement = 6,
        xlPaperTabloid = 3,
        xlPaperUser = 256,
    }

    const enum XlParameterDataType {
        xlParamTypeBigInt = -5,
        xlParamTypeBinary = -2,
        xlParamTypeBit = -7,
        xlParamTypeChar = 1,
        xlParamTypeDate = 9,
        xlParamTypeDecimal = 3,
        xlParamTypeDouble = 8,
        xlParamTypeFloat = 6,
        xlParamTypeInteger = 4,
        xlParamTypeLongVarBinary = -4,
        xlParamTypeLongVarChar = -1,
        xlParamTypeNumeric = 2,
        xlParamTypeReal = 7,
        xlParamTypeSmallInt = 5,
        xlParamTypeTime = 10,
        xlParamTypeTimestamp = 11,
        xlParamTypeTinyInt = -6,
        xlParamTypeUnknown = 0,
        xlParamTypeVarBinary = -3,
        xlParamTypeVarChar = 12,
        xlParamTypeWChar = -8,
    }

    const enum XlParameterType {
        xlConstant = 1,
        xlPrompt = 0,
        xlRange = 2,
    }

    const enum XlPasteSpecialOperation {
        xlPasteSpecialOperationAdd = 2,
        xlPasteSpecialOperationDivide = 5,
        xlPasteSpecialOperationMultiply = 4,
        xlPasteSpecialOperationNone = -4142,
        xlPasteSpecialOperationSubtract = 3,
    }

    const enum XlPasteType {
        xlPasteAll = -4104,
        xlPasteAllExceptBorders = 7,
        xlPasteAllMergingConditionalFormats = 14,
        xlPasteAllUsingSourceTheme = 13,
        xlPasteColumnWidths = 8,
        xlPasteComments = -4144,
        xlPasteFormats = -4122,
        xlPasteFormulas = -4123,
        xlPasteFormulasAndNumberFormats = 11,
        xlPasteValidation = 6,
        xlPasteValues = -4163,
        xlPasteValuesAndNumberFormats = 12,
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

    const enum XlPhoneticAlignment {
        xlPhoneticAlignCenter = 2,
        xlPhoneticAlignDistributed = 3,
        xlPhoneticAlignLeft = 1,
        xlPhoneticAlignNoControl = 0,
    }

    const enum XlPhoneticCharacterType {
        xlHiragana = 2,
        xlKatakana = 1,
        xlKatakanaHalf = 0,
        xlNoConversion = 3,
    }

    const enum XlPictureAppearance {
        xlPrinter = 2,
        xlScreen = 1,
    }

    const enum XlPictureConvertorType {
        xlBMP = 1,
        xlCGM = 7,
        xlDRW = 4,
        xlDXF = 5,
        xlEPS = 8,
        xlHGL = 6,
        xlPCT = 13,
        xlPCX = 10,
        xlPIC = 11,
        xlPLT = 12,
        xlTIF = 9,
        xlWMF = 2,
        xlWPG = 3,
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

    const enum XlPivotCellType {
        xlPivotCellBlankCell = 9,
        xlPivotCellCustomSubtotal = 7,
        xlPivotCellDataField = 4,
        xlPivotCellDataPivotField = 8,
        xlPivotCellGrandTotal = 3,
        xlPivotCellPageFieldItem = 6,
        xlPivotCellPivotField = 5,
        xlPivotCellPivotItem = 1,
        xlPivotCellSubtotal = 2,
        xlPivotCellValue = 0,
    }

    const enum XlPivotConditionScope {
        xlDataFieldScope = 2,
        xlFieldsScope = 1,
        xlSelectionScope = 0,
    }

    const enum XlPivotFieldCalculation {
        xlDifferenceFrom = 2,
        xlIndex = 9,
        xlNoAdditionalCalculation = -4143,
        xlPercentDifferenceFrom = 4,
        xlPercentOf = 3,
        xlPercentOfColumn = 7,
        xlPercentOfParent = 12,
        xlPercentOfParentColumn = 11,
        xlPercentOfParentRow = 10,
        xlPercentOfRow = 6,
        xlPercentOfTotal = 8,
        xlPercentRunningTotal = 13,
        xlRankAscending = 14,
        xlRankDecending = 15,
        xlRunningTotal = 5,
    }

    const enum XlPivotFieldDataType {
        xlDate = 2,
        xlNumber = -4145,
        xlText = -4158,
    }

    const enum XlPivotFieldOrientation {
        xlColumnField = 2,
        xlDataField = 4,
        xlHidden = 0,
        xlPageField = 3,
        xlRowField = 1,
    }

    const enum XlPivotFieldRepeatLabels {
        xlDoNotRepeatLabels = 1,
        xlRepeatLabels = 2,
    }

    const enum XlPivotFilterType {
        xlAfter = 33,
        xlAfterOrEqualTo = 34,
        xlAllDatesInPeriodApril = 60,
        xlAllDatesInPeriodAugust = 64,
        xlAllDatesInPeriodDecember = 68,
        xlAllDatesInPeriodFebruary = 58,
        xlAllDatesInPeriodJanuary = 57,
        xlAllDatesInPeriodJuly = 63,
        xlAllDatesInPeriodJune = 62,
        xlAllDatesInPeriodMarch = 59,
        xlAllDatesInPeriodMay = 61,
        xlAllDatesInPeriodNovember = 67,
        xlAllDatesInPeriodOctober = 66,
        xlAllDatesInPeriodQuarter1 = 53,
        xlAllDatesInPeriodQuarter2 = 54,
        xlAllDatesInPeriodQuarter3 = 55,
        xlAllDatesInPeriodQuarter4 = 56,
        xlAllDatesInPeriodSeptember = 65,
        xlBefore = 31,
        xlBeforeOrEqualTo = 32,
        xlBottomCount = 2,
        xlBottomPercent = 4,
        xlBottomSum = 6,
        xlCaptionBeginsWith = 17,
        xlCaptionContains = 21,
        xlCaptionDoesNotBeginWith = 18,
        xlCaptionDoesNotContain = 22,
        xlCaptionDoesNotEndWith = 20,
        xlCaptionDoesNotEqual = 16,
        xlCaptionEndsWith = 19,
        xlCaptionEquals = 15,
        xlCaptionIsBetween = 27,
        xlCaptionIsGreaterThan = 23,
        xlCaptionIsGreaterThanOrEqualTo = 24,
        xlCaptionIsLessThan = 25,
        xlCaptionIsLessThanOrEqualTo = 26,
        xlCaptionIsNotBetween = 28,
        xlDateBetween = 35,
        xlDateLastMonth = 45,
        xlDateLastQuarter = 48,
        xlDateLastWeek = 42,
        xlDateLastYear = 51,
        xlDateNextMonth = 43,
        xlDateNextQuarter = 46,
        xlDateNextWeek = 40,
        xlDateNextYear = 49,
        xlDateNotBetween = 36,
        xlDateThisMonth = 44,
        xlDateThisQuarter = 47,
        xlDateThisWeek = 41,
        xlDateThisYear = 50,
        xlDateToday = 38,
        xlDateTomorrow = 37,
        xlDateYesterday = 39,
        xlNotSpecificDate = 30,
        xlSpecificDate = 29,
        xlTopCount = 1,
        xlTopPercent = 3,
        xlTopSum = 5,
        xlValueDoesNotEqual = 8,
        xlValueEquals = 7,
        xlValueIsBetween = 13,
        xlValueIsGreaterThan = 9,
        xlValueIsGreaterThanOrEqualTo = 10,
        xlValueIsLessThan = 11,
        xlValueIsLessThanOrEqualTo = 12,
        xlValueIsNotBetween = 14,
        xlYearToDate = 52,
    }

    const enum XlPivotFormatType {
        xlPTClassic = 20,
        xlPTNone = 21,
        xlReport1 = 0,
        xlReport10 = 9,
        xlReport2 = 1,
        xlReport3 = 2,
        xlReport4 = 3,
        xlReport5 = 4,
        xlReport6 = 5,
        xlReport7 = 6,
        xlReport8 = 7,
        xlReport9 = 8,
        xlTable1 = 10,
        xlTable10 = 19,
        xlTable2 = 11,
        xlTable3 = 12,
        xlTable4 = 13,
        xlTable5 = 14,
        xlTable6 = 15,
        xlTable7 = 16,
        xlTable8 = 17,
        xlTable9 = 18,
    }

    const enum XlPivotLineType {
        xlPivotLineBlank = 3,
        xlPivotLineGrandTotal = 2,
        xlPivotLineRegular = 0,
        xlPivotLineSubtotal = 1,
    }

    const enum XlPivotTableMissingItems {
        xlMissingItemsDefault = -1,
        xlMissingItemsMax = 32500,
        xlMissingItemsMax2 = 1048576,
        xlMissingItemsNone = 0,
    }

    const enum XlPivotTableSourceType {
        xlConsolidation = 3,
        xlDatabase = 1,
        xlExternal = 2,
        xlPivotTable = -4148,
        xlScenario = 4,
    }

    const enum XlPivotTableVersionList {
        xlPivotTableVersion10 = 1,
        xlPivotTableVersion11 = 2,
        xlPivotTableVersion12 = 3,
        xlPivotTableVersion14 = 4,
        xlPivotTableVersion2000 = 0,
        xlPivotTableVersionCurrent = -1,
    }

    const enum XlPlacement {
        xlFreeFloating = 3,
        xlMove = 2,
        xlMoveAndSize = 1,
    }

    const enum XlPlatform {
        xlMacintosh = 1,
        xlMSDOS = 3,
        xlWindows = 2,
    }

    const enum XlPortugueseReform {
        xlPortugueseBoth = 3,
        xlPortuguesePostReform = 2,
        xlPortuguesePreReform = 1,
    }

    const enum XlPrintErrors {
        xlPrintErrorsBlank = 1,
        xlPrintErrorsDash = 2,
        xlPrintErrorsDisplayed = 0,
        xlPrintErrorsNA = 3,
    }

    const enum XlPrintLocation {
        xlPrintInPlace = 16,
        xlPrintNoComments = -4142,
        xlPrintSheetEnd = 1,
    }

    const enum XlPriority {
        xlPriorityHigh = -4127,
        xlPriorityLow = -4134,
        xlPriorityNormal = -4143,
    }

    const enum XlPropertyDisplayedIn {
        xlDisplayPropertyInPivotTable = 1,
        xlDisplayPropertyInPivotTableAndTooltip = 3,
        xlDisplayPropertyInTooltip = 2,
    }

    const enum XlProtectedViewCloseReason {
        xlProtectedViewCloseEdit = 1,
        xlProtectedViewCloseForced = 2,
        xlProtectedViewCloseNormal = 0,
    }

    const enum XlProtectedViewWindowState {
        xlProtectedViewWindowMaximized = 2,
        xlProtectedViewWindowMinimized = 1,
        xlProtectedViewWindowNormal = 0,
    }

    const enum XlPTSelectionMode {
        xlBlanks = 4,
        xlButton = 15,
        xlDataAndLabel = 0,
        xlDataOnly = 2,
        xlFirstRow = 256,
        xlLabelOnly = 1,
        xlOrigin = 3,
    }

    const enum XlQueryType {
        xlADORecordset = 7,
        xlDAORecordset = 2,
        xlODBCQuery = 1,
        xlOLEDBQuery = 5,
        xlTextImport = 6,
        xlWebQuery = 4,
    }

    const enum XlRangeAutoFormat {
        xlRangeAutoFormat3DEffects1 = 13,
        xlRangeAutoFormat3DEffects2 = 14,
        xlRangeAutoFormatAccounting1 = 4,
        xlRangeAutoFormatAccounting2 = 5,
        xlRangeAutoFormatAccounting3 = 6,
        xlRangeAutoFormatAccounting4 = 17,
        xlRangeAutoFormatClassic1 = 1,
        xlRangeAutoFormatClassic2 = 2,
        xlRangeAutoFormatClassic3 = 3,
        xlRangeAutoFormatClassicPivotTable = 31,
        xlRangeAutoFormatColor1 = 7,
        xlRangeAutoFormatColor2 = 8,
        xlRangeAutoFormatColor3 = 9,
        xlRangeAutoFormatList1 = 10,
        xlRangeAutoFormatList2 = 11,
        xlRangeAutoFormatList3 = 12,
        xlRangeAutoFormatLocalFormat1 = 15,
        xlRangeAutoFormatLocalFormat2 = 16,
        xlRangeAutoFormatLocalFormat3 = 19,
        xlRangeAutoFormatLocalFormat4 = 20,
        xlRangeAutoFormatNone = -4142,
        xlRangeAutoFormatPTNone = 42,
        xlRangeAutoFormatReport1 = 21,
        xlRangeAutoFormatReport10 = 30,
        xlRangeAutoFormatReport2 = 22,
        xlRangeAutoFormatReport3 = 23,
        xlRangeAutoFormatReport4 = 24,
        xlRangeAutoFormatReport5 = 25,
        xlRangeAutoFormatReport6 = 26,
        xlRangeAutoFormatReport7 = 27,
        xlRangeAutoFormatReport8 = 28,
        xlRangeAutoFormatReport9 = 29,
        xlRangeAutoFormatSimple = -4154,
        xlRangeAutoFormatTable1 = 32,
        xlRangeAutoFormatTable10 = 41,
        xlRangeAutoFormatTable2 = 33,
        xlRangeAutoFormatTable3 = 34,
        xlRangeAutoFormatTable4 = 35,
        xlRangeAutoFormatTable5 = 36,
        xlRangeAutoFormatTable6 = 37,
        xlRangeAutoFormatTable7 = 38,
        xlRangeAutoFormatTable8 = 39,
        xlRangeAutoFormatTable9 = 40,
    }

    const enum XlRangeValueDataType {
        xlRangeValueDefault = 10,
        xlRangeValueMSPersistXML = 12,
        xlRangeValueXMLSpreadsheet = 11,
    }

    const enum XlReferenceStyle {
        xlA1 = 1,
        xlR1C1 = -4150,
    }

    const enum XlReferenceType {
        xlAbsolute = 1,
        xlAbsRowRelColumn = 2,
        xlRelative = 4,
        xlRelRowAbsColumn = 3,
    }

    const enum XlRemoveDocInfoType {
        xlRDIAll = 99,
        xlRDIComments = 1,
        xlRDIContentType = 16,
        xlRDIDefinedNameComments = 18,
        xlRDIDocumentManagementPolicy = 15,
        xlRDIDocumentProperties = 8,
        xlRDIDocumentServerProperties = 14,
        xlRDIDocumentWorkspace = 10,
        xlRDIEmailHeader = 5,
        xlRDIInactiveDataConnections = 19,
        xlRDIInkAnnotations = 11,
        xlRDIPrinterPath = 20,
        xlRDIPublishInfo = 13,
        xlRDIRemovePersonalInformation = 4,
        xlRDIRoutingSlip = 6,
        xlRDIScenarioComments = 12,
        xlRDISendForReview = 7,
    }

    const enum XlRgbColor {
        rgbAliceBlue = 16775408,
        rgbAntiqueWhite = 14150650,
        rgbAqua = 16776960,
        rgbAquamarine = 13959039,
        rgbAzure = 16777200,
        rgbBeige = 14480885,
        rgbBisque = 12903679,
        rgbBlack = 0,
        rgbBlanchedAlmond = 13495295,
        rgbBlue = 16711680,
        rgbBlueViolet = 14822282,
        rgbBrown = 2763429,
        rgbBurlyWood = 8894686,
        rgbCadetBlue = 10526303,
        rgbChartreuse = 65407,
        rgbCoral = 5275647,
        rgbCornflowerBlue = 15570276,
        rgbCornsilk = 14481663,
        rgbCrimson = 3937500,
        rgbDarkBlue = 9109504,
        rgbDarkCyan = 9145088,
        rgbDarkGoldenrod = 755384,
        rgbDarkGray = 11119017,
        rgbDarkGreen = 25600,
        rgbDarkGrey = 11119017,
        rgbDarkKhaki = 7059389,
        rgbDarkMagenta = 9109643,
        rgbDarkOliveGreen = 3107669,
        rgbDarkOrange = 36095,
        rgbDarkOrchid = 13382297,
        rgbDarkRed = 139,
        rgbDarkSalmon = 8034025,
        rgbDarkSeaGreen = 9419919,
        rgbDarkSlateBlue = 9125192,
        rgbDarkSlateGray = 5197615,
        rgbDarkSlateGrey = 5197615,
        rgbDarkTurquoise = 13749760,
        rgbDarkViolet = 13828244,
        rgbDeepPink = 9639167,
        rgbDeepSkyBlue = 16760576,
        rgbDimGray = 6908265,
        rgbDimGrey = 6908265,
        rgbDodgerBlue = 16748574,
        rgbFireBrick = 2237106,
        rgbFloralWhite = 15792895,
        rgbForestGreen = 2263842,
        rgbFuchsia = 16711935,
        rgbGainsboro = 14474460,
        rgbGhostWhite = 16775416,
        rgbGold = 55295,
        rgbGoldenrod = 2139610,
        rgbGray = 8421504,
        rgbGreen = 32768,
        rgbGreenYellow = 3145645,
        rgbGrey = 8421504,
        rgbHoneydew = 15794160,
        rgbHotPink = 11823615,
        rgbIndianRed = 6053069,
        rgbIndigo = 8519755,
        rgbIvory = 15794175,
        rgbKhaki = 9234160,
        rgbLavender = 16443110,
        rgbLavenderBlush = 16118015,
        rgbLawnGreen = 64636,
        rgbLemonChiffon = 13499135,
        rgbLightBlue = 15128749,
        rgbLightCoral = 8421616,
        rgbLightCyan = 9145088,
        rgbLightGoldenrodYellow = 13826810,
        rgbLightGray = 13882323,
        rgbLightGreen = 9498256,
        rgbLightGrey = 13882323,
        rgbLightPink = 12695295,
        rgbLightSalmon = 8036607,
        rgbLightSeaGreen = 11186720,
        rgbLightSkyBlue = 16436871,
        rgbLightSlateGray = 10061943,
        rgbLightSlateGrey = 10061943,
        rgbLightSteelBlue = 14599344,
        rgbLightYellow = 14745599,
        rgbLime = 65280,
        rgbLimeGreen = 3329330,
        rgbLinen = 15134970,
        rgbMaroon = 128,
        rgbMediumAquamarine = 11206502,
        rgbMediumBlue = 13434880,
        rgbMediumOrchid = 13850042,
        rgbMediumPurple = 14381203,
        rgbMediumSeaGreen = 7451452,
        rgbMediumSlateBlue = 15624315,
        rgbMediumSpringGreen = 10156544,
        rgbMediumTurquoise = 13422920,
        rgbMediumVioletRed = 8721863,
        rgbMidnightBlue = 7346457,
        rgbMintCream = 16449525,
        rgbMistyRose = 14804223,
        rgbMoccasin = 11920639,
        rgbNavajoWhite = 11394815,
        rgbNavy = 8388608,
        rgbNavyBlue = 8388608,
        rgbOldLace = 15136253,
        rgbOlive = 32896,
        rgbOliveDrab = 2330219,
        rgbOrange = 42495,
        rgbOrangeRed = 17919,
        rgbOrchid = 14053594,
        rgbPaleGoldenrod = 7071982,
        rgbPaleGreen = 10025880,
        rgbPaleTurquoise = 15658671,
        rgbPaleVioletRed = 9662683,
        rgbPapayaWhip = 14020607,
        rgbPeachPuff = 12180223,
        rgbPeru = 4163021,
        rgbPink = 13353215,
        rgbPlum = 14524637,
        rgbPowderBlue = 15130800,
        rgbPurple = 8388736,
        rgbRed = 255,
        rgbRosyBrown = 9408444,
        rgbRoyalBlue = 14772545,
        rgbSalmon = 7504122,
        rgbSandyBrown = 6333684,
        rgbSeaGreen = 5737262,
        rgbSeashell = 15660543,
        rgbSienna = 2970272,
        rgbSilver = 12632256,
        rgbSkyBlue = 15453831,
        rgbSlateBlue = 13458026,
        rgbSlateGray = 9470064,
        rgbSlateGrey = 9470064,
        rgbSnow = 16448255,
        rgbSpringGreen = 8388352,
        rgbSteelBlue = 11829830,
        rgbTan = 9221330,
        rgbTeal = 8421376,
        rgbThistle = 14204888,
        rgbTomato = 4678655,
        rgbTurquoise = 13688896,
        rgbViolet = 15631086,
        rgbWheat = 11788021,
        rgbWhite = 16777215,
        rgbWhiteSmoke = 16119285,
        rgbYellow = 65535,
        rgbYellowGreen = 3329434,
    }

    const enum XlRobustConnect {
        xlAlways = 1,
        xlAsRequired = 0,
        xlNever = 2,
    }

    const enum XlRoutingSlipDelivery {
        xlAllAtOnce = 2,
        xlOneAfterAnother = 1,
    }

    const enum XlRoutingSlipStatus {
        xlNotYetRouted = 0,
        xlRoutingComplete = 2,
        xlRoutingInProgress = 1,
    }

    const enum XlRowCol {
        xlColumns = 2,
        xlRows = 1,
    }

    const enum XlRunAutoMacro {
        xlAutoActivate = 3,
        xlAutoClose = 2,
        xlAutoDeactivate = 4,
        xlAutoOpen = 1,
    }

    const enum XlSaveAction {
        xlDoNotSaveChanges = 2,
        xlSaveChanges = 1,
    }

    const enum XlSaveAsAccessMode {
        xlExclusive = 3,
        xlNoChange = 1,
        xlShared = 2,
    }

    const enum XlSaveConflictResolution {
        xlLocalSessionChanges = 2,
        xlOtherSessionChanges = 3,
        xlUserResolution = 1,
    }

    const enum XlScaleType {
        xlScaleLinear = -4132,
        xlScaleLogarithmic = -4133,
    }

    const enum XlSearchDirection {
        xlNext = 1,
        xlPrevious = 2,
    }

    const enum XlSearchOrder {
        xlByColumns = 2,
        xlByRows = 1,
    }

    const enum XlSearchWithin {
        xlWithinSheet = 1,
        xlWithinWorkbook = 2,
    }

    const enum XlSheetType {
        xlChart = -4109,
        xlDialogSheet = -4116,
        xlExcel4IntlMacroSheet = 4,
        xlExcel4MacroSheet = 3,
        xlWorksheet = -4167,
    }

    const enum XlSheetVisibility {
        xlSheetHidden = 0,
        xlSheetVeryHidden = 2,
        xlSheetVisible = -1,
    }

    const enum XlSizeRepresents {
        xlSizeIsArea = 1,
        xlSizeIsWidth = 2,
    }

    const enum XlSlicerCrossFilterType {
        xlSlicerCrossFilterShowItemsWithDataAtTop = 2,
        xlSlicerCrossFilterShowItemsWithNoData = 3,
        xlSlicerNoCrossFilter = 1,
    }

    const enum XlSlicerSort {
        xlSlicerSortAscending = 2,
        xlSlicerSortDataSourceOrder = 1,
        xlSlicerSortDescending = 3,
    }

    const enum XlSmartTagControlType {
        xlSmartTagControlActiveX = 13,
        xlSmartTagControlButton = 6,
        xlSmartTagControlCheckbox = 9,
        xlSmartTagControlCombo = 12,
        xlSmartTagControlHelp = 3,
        xlSmartTagControlHelpURL = 4,
        xlSmartTagControlImage = 8,
        xlSmartTagControlLabel = 7,
        xlSmartTagControlLink = 2,
        xlSmartTagControlListbox = 11,
        xlSmartTagControlRadioGroup = 14,
        xlSmartTagControlSeparator = 5,
        xlSmartTagControlSmartTag = 1,
        xlSmartTagControlTextbox = 10,
    }

    const enum XlSmartTagDisplayMode {
        xlButtonOnly = 2,
        xlDisplayNone = 1,
        xlIndicatorAndButton = 0,
    }

    const enum XlSortDataOption {
        xlSortNormal = 0,
        xlSortTextAsNumbers = 1,
    }

    const enum XlSortMethod {
        xlPinYin = 1,
        xlStroke = 2,
    }

    const enum XlSortMethodOld {
        xlCodePage = 2,
        xlSyllabary = 1,
    }

    const enum XlSortOn {
        xlSortOnCellColor = 1,
        xlSortOnFontColor = 2,
        xlSortOnIcon = 3,
        xlSortOnValues = 0,
    }

    const enum XlSortOrder {
        xlAscending = 1,
        xlDescending = 2,
    }

    const enum XlSortOrientation {
        xlSortColumns = 1,
        xlSortRows = 2,
    }

    const enum XlSortType {
        xlSortLabels = 2,
        xlSortValues = 1,
    }

    const enum XlSourceType {
        xlSourceAutoFilter = 3,
        xlSourceChart = 5,
        xlSourcePivotTable = 6,
        xlSourcePrintArea = 2,
        xlSourceQuery = 7,
        xlSourceRange = 4,
        xlSourceSheet = 1,
        xlSourceWorkbook = 0,
    }

    const enum XlSpanishModes {
        xlSpanishTuteoAndVoseo = 1,
        xlSpanishTuteoOnly = 0,
        xlSpanishVoseoOnly = 2,
    }

    const enum XlSparklineRowCol {
        xlSparklineColumnsSquare = 2,
        xlSparklineNonSquare = 0,
        xlSparklineRowsSquare = 1,
    }

    const enum XlSparkScale {
        xlSparkScaleCustom = 3,
        xlSparkScaleGroup = 1,
        xlSparkScaleSingle = 2,
    }

    const enum XlSparkType {
        xlSparkColumn = 2,
        xlSparkColumnStacked100 = 3,
        xlSparkLine = 1,
    }

    const enum XlSpeakDirection {
        xlSpeakByColumns = 1,
        xlSpeakByRows = 0,
    }

    const enum XlSpecialCellsValue {
        xlErrors = 16,
        xlLogical = 4,
        xlNumbers = 1,
        xlTextValues = 2,
    }

    const enum XlStdColorScale {
        xlColorScaleBlackWhite = 3,
        xlColorScaleGYR = 2,
        xlColorScaleRYG = 1,
        xlColorScaleWhiteBlack = 4,
    }

    const enum XlSubscribeToFormat {
        xlSubscribeToPicture = -4147,
        xlSubscribeToText = -4158,
    }

    const enum XlSubtototalLocationType {
        xlAtBottom = 2,
        xlAtTop = 1,
    }

    const enum XlSummaryColumn {
        xlSummaryOnLeft = -4131,
        xlSummaryOnRight = -4152,
    }

    const enum XlSummaryReportType {
        xlStandardSummary = 1,
        xlSummaryPivotTable = -4148,
    }

    const enum XlSummaryRow {
        xlSummaryAbove = 0,
        xlSummaryBelow = 1,
    }

    const enum XlTableStyleElementType {
        xlBlankRow = 19,
        xlColumnStripe1 = 7,
        xlColumnStripe2 = 8,
        xlColumnSubheading1 = 20,
        xlColumnSubheading2 = 21,
        xlColumnSubheading3 = 22,
        xlFirstColumn = 3,
        xlFirstHeaderCell = 9,
        xlFirstTotalCell = 11,
        xlGrandTotalColumn = 4,
        xlGrandTotalRow = 2,
        xlHeaderRow = 1,
        xlLastColumn = 4,
        xlLastHeaderCell = 10,
        xlLastTotalCell = 12,
        xlPageFieldLabels = 26,
        xlPageFieldValues = 27,
        xlRowStripe1 = 5,
        xlRowStripe2 = 6,
        xlRowSubheading1 = 23,
        xlRowSubheading2 = 24,
        xlRowSubheading3 = 25,
        xlSlicerHoveredSelectedItemWithData = 33,
        xlSlicerHoveredSelectedItemWithNoData = 35,
        xlSlicerHoveredUnselectedItemWithData = 32,
        xlSlicerHoveredUnselectedItemWithNoData = 34,
        xlSlicerSelectedItemWithData = 30,
        xlSlicerSelectedItemWithNoData = 31,
        xlSlicerUnselectedItemWithData = 28,
        xlSlicerUnselectedItemWithNoData = 29,
        xlSubtotalColumn1 = 13,
        xlSubtotalColumn2 = 14,
        xlSubtotalColumn3 = 15,
        xlSubtotalRow1 = 16,
        xlSubtotalRow2 = 17,
        xlSubtotalRow3 = 18,
        xlTotalRow = 2,
        xlWholeTable = 0,
    }

    const enum XlTabPosition {
        xlTabPositionFirst = 0,
        xlTabPositionLast = 1,
    }

    const enum XlTextParsingType {
        xlDelimited = 1,
        xlFixedWidth = 2,
    }

    const enum XlTextQualifier {
        xlTextQualifierDoubleQuote = 1,
        xlTextQualifierNone = -4142,
        xlTextQualifierSingleQuote = 2,
    }

    const enum XlTextVisualLayoutType {
        xlTextVisualLTR = 1,
        xlTextVisualRTL = 2,
    }

    const enum XlThemeColor {
        xlThemeColorAccent1 = 5,
        xlThemeColorAccent2 = 6,
        xlThemeColorAccent3 = 7,
        xlThemeColorAccent4 = 8,
        xlThemeColorAccent5 = 9,
        xlThemeColorAccent6 = 10,
        xlThemeColorDark1 = 1,
        xlThemeColorDark2 = 3,
        xlThemeColorFollowedHyperlink = 12,
        xlThemeColorHyperlink = 11,
        xlThemeColorLight1 = 2,
        xlThemeColorLight2 = 4,
    }

    const enum XlThemeFont {
        xlThemeFontMajor = 1,
        xlThemeFontMinor = 2,
        xlThemeFontNone = 0,
    }

    const enum XlThreadMode {
        xlThreadModeAutomatic = 0,
        xlThreadModeManual = 1,
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

    const enum XlTimePeriods {
        xlLast7Days = 2,
        xlLastMonth = 5,
        xlLastWeek = 4,
        xlNextMonth = 8,
        xlNextWeek = 7,
        xlThisMonth = 9,
        xlThisWeek = 3,
        xlToday = 0,
        xlTomorrow = 6,
        xlYesterday = 1,
    }

    const enum XlTimeUnit {
        xlDays = 0,
        xlMonths = 1,
        xlYears = 2,
    }

    const enum XlToolbarProtection {
        xlNoButtonChanges = 1,
        xlNoChanges = 4,
        xlNoDockingChanges = 3,
        xlNoShapeChanges = 2,
        xlToolbarProtectionNone = -4143,
    }

    const enum XlTopBottom {
        xlTop10Bottom = 0,
        xlTop10Top = 1,
    }

    const enum XlTotalsCalculation {
        xlTotalsCalculationAverage = 2,
        xlTotalsCalculationCount = 3,
        xlTotalsCalculationCountNums = 4,
        xlTotalsCalculationCustom = 9,
        xlTotalsCalculationMax = 6,
        xlTotalsCalculationMin = 5,
        xlTotalsCalculationNone = 0,
        xlTotalsCalculationStdDev = 7,
        xlTotalsCalculationSum = 1,
        xlTotalsCalculationVar = 8,
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

    const enum XlUpdateLinks {
        xlUpdateLinksAlways = 3,
        xlUpdateLinksNever = 2,
        xlUpdateLinksUserSetting = 1,
    }

    const enum XlVAlign {
        xlVAlignBottom = -4107,
        xlVAlignCenter = -4108,
        xlVAlignDistributed = -4117,
        xlVAlignJustify = -4130,
        xlVAlignTop = -4160,
    }

    const enum XlWBATemplate {
        xlWBATChart = -4109,
        xlWBATExcel4IntlMacroSheet = 4,
        xlWBATExcel4MacroSheet = 3,
        xlWBATWorksheet = -4167,
    }

    const enum XlWebFormatting {
        xlWebFormattingAll = 1,
        xlWebFormattingNone = 3,
        xlWebFormattingRTF = 2,
    }

    const enum XlWebSelectionType {
        xlAllTables = 2,
        xlEntirePage = 1,
        xlSpecifiedTables = 3,
    }

    const enum XlWindowState {
        xlMaximized = -4137,
        xlMinimized = -4140,
        xlNormal = -4143,
    }

    const enum XlWindowType {
        xlChartAsWindow = 5,
        xlChartInPlace = 4,
        xlClipboard = 3,
        xlInfo = -4129,
        xlWorkbook = 1,
    }

    const enum XlWindowView {
        xlNormalView = 1,
        xlPageBreakPreview = 2,
        xlPageLayoutView = 3,
    }

    const enum XlXLMMacroType {
        xlCommand = 2,
        xlFunction = 1,
        xlNotXLM = 3,
    }

    const enum XlXmlExportResult {
        xlXmlExportSuccess = 0,
        xlXmlExportValidationFailed = 1,
    }

    const enum XlXmlImportResult {
        xlXmlImportElementsTruncated = 1,
        xlXmlImportSuccess = 0,
        xlXmlImportValidationFailed = 2,
    }

    const enum XlXmlLoadOption {
        xlXmlLoadImportToList = 2,
        xlXmlLoadMapXml = 3,
        xlXmlLoadOpenXml = 1,
        xlXmlLoadPromptUser = 0,
    }

    const enum XlYesNoGuess {
        xlGuess = 0,
        xlNo = 2,
        xlYes = 1,
    }

    class Action {
        private 'Excel.Action_typekey': Action;
        private constructor();
        public readonly Application: Application;
        public readonly Caption: string;
        public readonly Content: string;
        public readonly Coordinate: string;
        public readonly Creator: XlCreator;
        public Execute(): void;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Type: XlActionType;
    }

    class Actions {
        private 'Excel.Actions_typekey': Actions;
        private constructor();
        public _Default(Index: any): Action;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Action;
        public readonly Parent: any;
    }

    class AddIn {
        private 'Excel.AddIn_typekey': AddIn;
        private constructor();
        public readonly Application: Application;
        public readonly Author: string;
        public readonly CLSID: string;
        public readonly Comments: string;
        public readonly Creator: XlCreator;
        public readonly FullName: string;
        public Installed: boolean;
        public readonly IsOpen: boolean;
        public readonly Keywords: string;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Path: string;
        public readonly progID: string;
        public readonly Subject: string;
        public readonly Title: string;
    }

    class AddIns {
        private 'Excel.AddIns_typekey': AddIns;
        private constructor();
        public _Default(Index: any): AddIn;
        public Add(Filename: string, CopyFile?: any): AddIn;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): AddIn;
        public readonly Parent: any;
    }

    class AddIns2 {
        private 'Excel.AddIns2_typekey': AddIns2;
        private constructor();
        public _Default(Index: any): AddIn;
        public Add(Filename: string, CopyFile?: any): AddIn;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): AddIn;
        public readonly Parent: any;
    }

    class Adjustments {
        private 'Excel.Adjustments_typekey': Adjustments;
        private constructor();
        public readonly Application: any;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): number;
        public readonly Parent: any;
    }

    class AllowEditRange {
        private 'Excel.AllowEditRange_typekey': AllowEditRange;
        private constructor();
        public ChangePassword(Password: string): void;
        public Delete(): void;
        public Range: Range;
        public Title: string;
        public Unprotect(Password?: any): void;
        public readonly Users: UserAccessList;
    }

    class AllowEditRanges {
        private 'Excel.AllowEditRanges_typekey': AllowEditRanges;
        private constructor();
        public _Default(Index: any): AllowEditRange;
        public Add(Title: string, Range: Range, Password?: any): AllowEditRange;
        public readonly Count: number;
        public Item(Index: any): AllowEditRange;
    }

    class Application {
        private 'Excel.Application_typekey': Application;
        private constructor();
        public readonly _Default: string;
        public _Evaluate(Name: any): any;
        public _FindFile(): void;
        public _MacroOptions(
            Macro?: any, Description?: any, HasMenu?: any, MenuText?: any, HasShortcutKey?: any, ShortcutKey?: any, Category?: any, StatusBar?: any, HelpContextID?: any, HelpFile?: any): void;
        public _Run2(
            Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public _Wait(Time: any): void;
        public _WSFunction(
            Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public ActivateMicrosoftApp(Index: XlMSApplication): void;
        public readonly ActiveCell: Range;
        public readonly ActiveChart: Chart;
        public readonly ActiveDialog: DialogSheet;
        public readonly ActiveEncryptionSession: number;
        public readonly ActiveMenuBar: MenuBar;
        public ActivePrinter: string;
        public readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        public readonly ActiveSheet: any;
        public readonly ActiveWindow: Window;
        public readonly ActiveWorkbook: Workbook;
        public AddChartAutoFormat(Chart: any, Name: string, Description?: any): void;
        public AddCustomList(ListArray: any, ByRow?: any): void;
        public readonly AddIns: AddIns;
        public readonly AddIns2: AddIns2;
        public AlertBeforeOverwriting: boolean;
        public AltStartupPath: string;
        public AlwaysUseClearType: boolean;
        public readonly AnswerWizard: Office.AnswerWizard;
        public readonly Application: Application;
        public readonly ArbitraryXMLSupportAvailable: boolean;
        public AskToUpdateLinks: boolean;
        public readonly Assistance: Office.IAssistance;
        public readonly Assistant: Office.Assistant;
        public readonly AutoCorrect: AutoCorrect;
        public AutoFormatAsYouTypeReplaceHyperlinks: boolean;
        public AutomationSecurity: Office.MsoAutomationSecurity;
        public AutoPercentEntry: boolean;
        public readonly AutoRecover: AutoRecover;
        public readonly Build: number;
        public Calculate(): void;
        public CalculateBeforeSave: boolean;
        public CalculateFull(): void;
        public CalculateFullRebuild(): void;
        public CalculateUntilAsyncQueriesDone(): void;
        public Calculation: XlCalculation;
        public CalculationInterruptKey: XlCalculationInterruptKey;
        public readonly CalculationState: XlCalculationState;
        public readonly CalculationVersion: number;
        public Caller(Index?: any): any;
        public readonly CanPlaySounds: boolean;
        public readonly CanRecordSounds: boolean;
        public Caption: string;
        public CellDragAndDrop: boolean;
        public readonly Cells: Range;
        public CentimetersToPoints(Centimeters: number): number;
        public readonly Charts: Sheets;
        public CheckAbort(KeepAbort?: any): void;
        public CheckSpelling(Word: string, CustomDictionary?: any, IgnoreUppercase?: any): boolean;
        public ClipboardFormats(Index?: any): any;
        public ClusterConnector: string;
        public ColorButtons: boolean;
        public readonly Columns: Range;
        public readonly COMAddIns: Office.COMAddIns;
        public readonly CommandBars: Office.CommandBars;
        public CommandUnderlines: XlCommandUnderlines;
        public ConstrainNumeric: boolean;
        public ControlCharacters: boolean;
        public ConvertFormula(Formula: any, FromReferenceStyle: XlReferenceStyle, ToReferenceStyle?: any, ToAbsolute?: any, RelativeTo?: any): any;
        public CopyObjectsWithCells: boolean;
        public readonly Creator: XlCreator;
        public Cursor: XlMousePointer;
        public CursorMovement: number;
        public readonly CustomListCount: number;
        public CutCopyMode: XlCutCopyMode;
        public DataEntryMode: number;
        public readonly DDEAppReturnCode: number;
        public DDEExecute(Channel: number, String: string): void;
        public DDEInitiate(App: string, Topic: string): number;
        public DDEPoke(Channel: number, Item: any, Data: any): void;
        public DDERequest(Channel: number, Item: string): any;
        public DDETerminate(Channel: number): void;
        public DecimalSeparator: string;
        public DefaultFilePath: string;
        public DefaultSaveFormat: XlFileFormat;
        public DefaultSheetDirection: number;
        public readonly DefaultWebOptions: DefaultWebOptions;
        public DeferAsyncQueries: boolean;
        public DeleteChartAutoFormat(Name: string): void;
        public DeleteCustomList(ListNum: number): void;
        public readonly Dialogs: Dialogs;
        public readonly DialogSheets: Sheets;
        public DisplayAlerts: boolean;
        public DisplayClipboardWindow: boolean;
        public DisplayCommentIndicator: XlCommentDisplayMode;
        public DisplayDocumentActionTaskPane: boolean;
        public DisplayDocumentInformationPanel: boolean;
        public DisplayExcel4Menus: boolean;
        public DisplayFormulaAutoComplete: boolean;
        public DisplayFormulaBar: boolean;
        public DisplayFullScreen: boolean;
        public DisplayFunctionToolTips: boolean;
        public DisplayInfoWindow: boolean;
        public DisplayInsertOptions: boolean;
        public DisplayNoteIndicator: boolean;
        public DisplayPasteOptions: boolean;
        public DisplayRecentFiles: boolean;
        public DisplayScrollBars: boolean;
        public DisplayStatusBar: boolean;
        public DisplayXMLSourcePane(XmlMap?: any): void;
        public DoubleClick(): void;
        public Dummy1(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        public Dummy10(arg?: any): boolean;
        public readonly Dummy101: any;
        public Dummy11(): void;
        public Dummy12(p1: PivotTable, p2: PivotTable): void;
        public Dummy13(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public Dummy14(): void;
        public Dummy2(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any): any;
        public Dummy20(grfCompareFunctions: number): any;
        public Dummy22: boolean;
        public Dummy23: boolean;
        public Dummy3(): any;
        public Dummy4(
            Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any): any;
        public Dummy5(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any): any;
        public Dummy6(): any;
        public Dummy7(): any;
        public Dummy8(Arg1?: any): any;
        public Dummy9(): any;
        public EditDirectlyInCell: boolean;
        public EnableAnimations: boolean;
        public EnableAutoComplete: boolean;
        public EnableCancelKey: XlEnableCancelKey;
        public EnableEvents: boolean;
        public EnableLargeOperationAlert: boolean;
        public EnableLivePreview: boolean;
        public EnableSound: boolean;
        public EnableTipWizard: boolean;
        public readonly ErrorCheckingOptions: ErrorCheckingOptions;
        public Evaluate(Name: any): any;
        public readonly Excel4IntlMacroSheets: Sheets;
        public readonly Excel4MacroSheets: Sheets;
        public ExecuteExcel4Macro(String: string): any;
        public ExtendList: boolean;
        public FeatureInstall: Office.MsoFeatureInstall;
        public FileConverters(Index1?: any, Index2?: any): any;
        public FileDialog(fileDialogType: Office.MsoFileDialogType): Office.FileDialog;
        public readonly FileExportConverters: FileExportConverters;
        public readonly FileFind: Office.IFind;
        public readonly FileSearch: Office.FileSearch;
        public FileValidation: Office.MsoFileValidationMode;
        public FileValidationPivot: XlFileValidationPivotMode;
        public FindFile(): boolean;
        public FindFormat: CellFormat;
        public FixedDecimal: boolean;
        public FixedDecimalPlaces: number;
        public FormulaBarHeight: number;
        public GenerateGetPivotData: boolean;
        public GenerateTableRefs: XlGenerateTableRefs;
        public GetCustomListContents(ListNum: number): any;
        public GetCustomListNum(ListArray: any): number;
        public GetOpenFilename(FileFilter?: any, FilterIndex?: any, Title?: any, ButtonText?: any, MultiSelect?: any): any;
        public GetPhonetic(Text?: any): string;
        public GetSaveAsFilename(InitialFilename?: any, FileFilter?: any, FilterIndex?: any, Title?: any, ButtonText?: any): any;
        public Goto(Reference?: any, Scroll?: any): void;
        public Height: number;
        public Help(HelpFile?: any, HelpContextID?: any): void;
        public HighQualityModeForGraphics: boolean;
        public readonly Hinstance: number;
        public readonly HinstancePtr: any;
        public readonly Hwnd: number;
        public IgnoreRemoteRequests: boolean;
        public InchesToPoints(Inches: number): number;
        public InputBox(Prompt: string, Title?: any, Default?: any, Left?: any, Top?: any, HelpFile?: any, HelpContextID?: any, Type?: any): any;
        public Interactive: boolean;
        public International(Index?: any): any;
        public Intersect(
            Arg1: Range, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): Range;
        public readonly IsSandboxed: boolean;
        public Iteration: boolean;
        public readonly LanguageSettings: Office.LanguageSettings;
        public LargeButtons: boolean;
        public LargeOperationCellThousandCount: number;
        public Left: number;
        public readonly LibraryPath: string;
        public MacroOptions(
            Macro?: any, Description?: any, HasMenu?: any, MenuText?: any, HasShortcutKey?: any, ShortcutKey?: any, Category?: any, StatusBar?: any, HelpContextID?: any,
            HelpFile?: any, ArgumentDescriptions?: any): void;
        public MailLogoff(): void;
        public MailLogon(Name?: any, Password?: any, DownloadNewMail?: any): void;
        public readonly MailSession: any;
        public readonly MailSystem: XlMailSystem;
        public MapPaperSize: boolean;
        public readonly MathCoprocessorAvailable: boolean;
        public MaxChange: number;
        public MaxIterations: number;
        public MeasurementUnit: number;
        public readonly MemoryFree: number;
        public readonly MemoryTotal: number;
        public readonly MemoryUsed: number;
        public readonly MenuBars: MenuBars;
        public readonly Modules: Modules;
        public readonly MouseAvailable: boolean;
        public MoveAfterReturn: boolean;
        public MoveAfterReturnDirection: XlDirection;
        public readonly MultiThreadedCalculation: MultiThreadedCalculation;
        public readonly Name: string;
        public readonly Names: Names;
        public readonly NetworkTemplatesPath: string;
        public readonly NewWorkbook: Office.NewFile;
        public NextLetter(): Workbook;
        public readonly ODBCErrors: ODBCErrors;
        public ODBCTimeout: number;
        public readonly OLEDBErrors: OLEDBErrors;
        public OnCalculate: string;
        public OnData: string;
        public OnDoubleClick: string;
        public OnEntry: string;
        public OnKey(Key: string, Procedure?: any): void;
        public OnRepeat(Text: string, Procedure: string): void;
        public OnSheetActivate: string;
        public OnSheetDeactivate: string;
        public OnTime(EarliestTime: any, Procedure: string, LatestTime?: any, Schedule?: any): void;
        public OnUndo(Text: string, Procedure: string): void;
        public OnWindow: string;
        public readonly OperatingSystem: string;
        public readonly OrganizationName: string;
        public readonly Parent: Application;
        public readonly Path: string;
        public readonly PathSeparator: string;
        public PivotTableSelection: boolean;
        public PreviousSelections(Index?: any): any;
        public PrintCommunication: boolean;
        public readonly ProductCode: string;
        public PromptForSummaryInfo: boolean;
        public readonly ProtectedViewWindows: ProtectedViewWindows;
        public Quit(): void;
        public readonly Quitting: boolean;
        public Range(Cell1: any, Cell2?: any): Range;
        public readonly Ready: boolean;
        public readonly RecentFiles: RecentFiles;
        public RecordMacro(BasicCode?: any, XlmCode?: any): void;
        public readonly RecordRelative: boolean;
        public ReferenceStyle: XlReferenceStyle;
        public RegisteredFunctions(Index1?: any, Index2?: any): any;
        public RegisterXLL(Filename: string): boolean;
        public Repeat(): void;
        public ReplaceFormat: CellFormat;
        public ResetTipWizard(): void;
        public RollZoom: boolean;
        public readonly Rows: Range;
        public readonly RTD: RTD;
        public Run(
            Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public Save(Filename?: any): void;
        public SaveISO8601Dates: boolean;
        public SaveWorkspace(Filename?: any): void;
        public ScreenUpdating: boolean;
        public readonly Selection: any;
        public SendKeys(Keys: any, Wait?: any): void;
        public SetDefaultChart(FormatName?: any, Gallery?: any): void;
        public SharePointVersion(bstrUrl: string): number;
        public readonly Sheets: Sheets;
        public SheetsInNewWorkbook: number;
        public ShortcutMenus(Index: number): Menu;
        public ShowChartTipNames: boolean;
        public ShowChartTipValues: boolean;
        public ShowDevTools: boolean;
        public ShowMenuFloaties: boolean;
        public ShowSelectionFloaties: boolean;
        public ShowStartupDialog: boolean;
        public ShowToolTips: boolean;
        public ShowWindowsInTaskbar: boolean;
        public readonly SmartArtColors: Office.SmartArtColors;
        public readonly SmartArtLayouts: Office.SmartArtLayouts;
        public readonly SmartArtQuickStyles: Office.SmartArtQuickStyles;
        public readonly SmartTagRecognizers: SmartTagRecognizers;
        public readonly Speech: Speech;
        public readonly SpellingOptions: SpellingOptions;
        public StandardFont: string;
        public StandardFontSize: number;
        public readonly StartupPath: string;
        public StatusBar: any;
        public Support(Object: any, ID: number, arg?: any): any;
        public readonly TemplatesPath: string;
        public readonly ThisCell: Range;
        public readonly ThisWorkbook: Workbook;
        public ThousandsSeparator: string;
        public readonly Toolbars: Toolbars;
        public Top: number;
        public TransitionMenuKey: string;
        public TransitionMenuKeyAction: number;
        public TransitionNavigKeys: boolean;
        public UILanguage: number;
        public Undo(): void;
        public Union(
            Arg1: Range, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): Range;
        public readonly UsableHeight: number;
        public readonly UsableWidth: number;
        public UseClusterConnector: boolean;
        public readonly UsedObjects: UsedObjects;
        public UserControl: boolean;
        public readonly UserLibraryPath: string;
        public UserName: string;
        public UseSystemSeparators: boolean;
        public readonly Value: string;
        public readonly VBE: VBIDE.VBE;
        public readonly Version: string;
        public Visible: boolean;
        public Volatile(Volatile?: any): void;
        public Wait(Time: any): boolean;
        public WarnOnFunctionNameConflict: boolean;
        public readonly Watches: Watches;
        public Width: number;
        public readonly Windows: Windows;
        public readonly WindowsForPens: boolean;
        public WindowState: XlWindowState;
        public readonly Workbooks: Workbooks;
        public readonly WorksheetFunction: WorksheetFunction;
        public readonly Worksheets: Sheets;
    }

    class Areas {
        private 'Excel.Areas_typekey': Areas;
        private constructor();
        public _Default(Index: number): Range;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): Range;
        public readonly Parent: any;
    }

    class AutoCorrect {
        private 'Excel.AutoCorrect_typekey': AutoCorrect;
        private constructor();
        public AddReplacement(What: string, Replacement: string): any;
        public readonly Application: Application;
        public AutoExpandListRange: boolean;
        public AutoFillFormulasInLists: boolean;
        public CapitalizeNamesOfDays: boolean;
        public CorrectCapsLock: boolean;
        public CorrectSentenceCap: boolean;
        public readonly Creator: XlCreator;
        public DeleteReplacement(What: string): any;
        public DisplayAutoCorrectOptions: boolean;
        public readonly Parent: any;
        public ReplacementList(Index?: any): any;
        public ReplaceText: boolean;
        public TwoInitialCapitals: boolean;
    }

    class AutoFilter {
        private 'Excel.AutoFilter_typekey': AutoFilter;
        private constructor();
        public readonly Application: Application;
        public ApplyFilter(): void;
        public readonly Creator: XlCreator;
        public readonly FilterMode: boolean;
        public readonly Filters: Filters;
        public readonly Parent: any;
        public readonly Range: Range;
        public ShowAllData(): void;
        public readonly Sort: Sort;
    }

    class AutoRecover {
        private 'Excel.AutoRecover_typekey': AutoRecover;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Enabled: boolean;
        public readonly Parent: any;
        public Path: string;
        public Time: number;
    }

    class Border {
        private 'Excel.Border_typekey': Border;
        private constructor();
        public readonly Application: Application;
        public Color: any;
        public ColorIndex: any;
        public readonly Creator: XlCreator;
        public LineStyle: any;
        public readonly Parent: any;
        public ThemeColor: any;
        public TintAndShade: any;
        public Weight: any;
    }

    class Borders {
        private 'Excel.Borders_typekey': Borders;
        private constructor();
        public _Default(Index: XlBordersIndex): Border;
        public readonly Application: Application;
        public Color: any;
        public ColorIndex: any;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: XlBordersIndex): Border;
        public LineStyle: any;
        public readonly Parent: any;
        public ThemeColor: any;
        public TintAndShade: any;
        public Value: any;
        public Weight: any;
    }

    class CalculatedFields {
        private 'Excel.CalculatedFields_typekey': CalculatedFields;
        private constructor();
        public _Add(Name: string, Formula: string): PivotField;
        public _Default(Field: any): PivotField;
        public Add(Name: string, Formula: string, UseStandardFormula?: any): PivotField;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotField;
        public readonly Parent: any;
    }

    class CalculatedItems {
        private 'Excel.CalculatedItems_typekey': CalculatedItems;
        private constructor();
        public _Add(Name: string, Formula: string): PivotItem;
        public _Default(Field: any): PivotItem;
        public Add(Name: string, Formula: string, UseStandardFormula?: any): PivotItem;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotItem;
        public readonly Parent: any;
    }

    class CalculatedMember {
        private 'Excel.CalculatedMember_typekey': CalculatedMember;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly DisplayFolder: string;
        public readonly Dynamic: boolean;
        public FlattenHierarchies: boolean;
        public readonly Formula: string;
        public HierarchizeDistinct: boolean;
        public readonly IsValid: boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly SolveOrder: number;
        public readonly SourceName: string;
        public readonly Type: XlCalculatedMemberType;
    }

    class CalculatedMembers {
        private 'Excel.CalculatedMembers_typekey': CalculatedMembers;
        private constructor();
        public _Add(Name: string, Formula: string, SolveOrder?: any, Type?: any): CalculatedMember;
        public _Default(Index: any): CalculatedMember;
        public Add(Name: string, Formula: any, SolveOrder?: any, Type?: any, Dynamic?: any, DisplayFolder?: any, HierarchizeDistinct?: any): CalculatedMember;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): CalculatedMember;
        public readonly Parent: any;
    }

    class CalloutFormat {
        private 'Excel.CalloutFormat_typekey': CalloutFormat;
        private constructor();
        public Accent: Office.MsoTriState;
        public Angle: Office.MsoCalloutAngleType;
        public readonly Application: any;
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

    class CellFormat {
        private 'Excel.CellFormat_typekey': CellFormat;
        private constructor();
        public AddIndent: any;
        public readonly Application: Application;
        public Borders: Borders;
        public Clear(): void;
        public readonly Creator: XlCreator;
        public Font: Font;
        public FormulaHidden: any;
        public HorizontalAlignment: any;
        public IndentLevel: any;
        public Interior: Interior;
        public Locked: any;
        public MergeCells: any;
        public NumberFormat: any;
        public NumberFormatLocal: any;
        public Orientation: any;
        public readonly Parent: any;
        public ShrinkToFit: any;
        public VerticalAlignment: any;
        public WrapText: any;
    }

    class Characters {
        private 'Excel.Characters_typekey': Characters;
        private constructor();
        public readonly Application: Application;
        public Caption: string;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Font: Font;
        public Insert(String: string): any;
        public readonly Parent: any;
        public PhoneticCharacters: string;
        public Text: string;
    }

    class Chart {
        private 'Excel.Chart_typekey': Chart;
        private constructor();
        public __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;

        /** @param Excel.XlDataLabelsType [Type=2] */
        public _ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any): void;
        public _CodeName: string;
        public _Evaluate(Name: any): any;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        public _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        public _SaveAs(
            Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any,
            TextVisualLayout?: any): void;
        public Activate(): void;
        public readonly Application: Application;
        public ApplyChartTemplate(Filename: string): void;
        public ApplyCustomType(ChartType: XlChartType, TypeName?: any): void;

        /** @param Excel.XlDataLabelsType [Type=2] */
        public ApplyDataLabels(
            Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any,
            ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;
        public ApplyLayout(Layout: number, ChartType?: any): void;
        public Arcs(Index?: any): any;
        public readonly Area3DGroup: ChartGroup;
        public AreaGroups(Index?: any): any;
        public AutoFormat(Gallery: number, Format?: any): void;
        public AutoScaling: boolean;

        /** @param Excel.XlAxisGroup [AxisGroup=1] */
        public Axes(Type: any, AxisGroup?: XlAxisGroup): any;
        public readonly BackWall: Walls;
        public readonly Bar3DGroup: ChartGroup;
        public BarGroups(Index?: any): any;
        public BarShape: XlBarShape;
        public Buttons(Index?: any): any;
        public readonly ChartArea: ChartArea;
        public ChartGroups(Index?: any): any;
        public ChartObjects(Index?: any): any;
        public ChartStyle: any;
        public readonly ChartTitle: ChartTitle;
        public ChartType: XlChartType;
        public ChartWizard(
            Source?: any, Gallery?: any, Format?: any, PlotBy?: any, CategoryLabels?: any, SeriesLabels?: any, HasLegend?: any, Title?: any, CategoryTitle?: any,
            ValueTitle?: any, ExtraTitle?: any): void;
        public CheckBoxes(Index?: any): any;
        public CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any): void;
        public ClearToMatchStyle(): void;
        public readonly CodeName: string;
        public readonly Column3DGroup: ChartGroup;
        public ColumnGroups(Index?: any): any;
        public Copy(Before?: any, After?: any): void;
        public CopyChartBuild(): void;

        /**
         * @param Excel.XlPictureAppearance [Appearance=1]
         * @param Excel.XlCopyPictureFormat [Format=-4147]
         * @param Excel.XlPictureAppearance [Size=2]
         */
        public CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat, Size?: XlPictureAppearance): void;
        public readonly Corners: Corners;

        /**
         * @param Excel.XlPictureAppearance [Appearance=1]
         * @param Excel.XlPictureAppearance [Size=1]
         */
        public CreatePublisher(Edition: any, Appearance?: XlPictureAppearance, Size?: XlPictureAppearance, ContainsPICT?: any, ContainsBIFF?: any, ContainsRTF?: any, ContainsVALU?: any): void;
        public readonly Creator: XlCreator;
        public readonly DataTable: DataTable;
        public Delete(): void;
        public DepthPercent: number;
        public Deselect(): void;
        public DisplayBlanksAs: XlDisplayBlanksAs;
        public DoughnutGroups(Index?: any): any;
        public DrawingObjects(Index?: any): any;
        public Drawings(Index?: any): any;
        public DropDowns(Index?: any): any;
        public Dummy24: boolean;
        public Dummy25: boolean;
        public Elevation: number;
        public Evaluate(Name: any): any;
        public Export(Filename: string, FilterName?: any, Interactive?: any): boolean;
        public ExportAsFixedFormat(
            Type: XlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any,
            FixedFormatExtClassPtr?: any): void;
        public readonly Floor: Floor;
        public GapDepth: number;
        public GetChartElement(x: number, y: number, ElementID: number, Arg1: number, Arg2: number): void;
        public GroupBoxes(Index?: any): any;
        public GroupObjects(Index?: any): any;
        public HasAxis(Index1?: any, Index2?: any): any;
        public HasDataTable: boolean;
        public HasLegend: boolean;
        public HasPivotFields: boolean;
        public HasTitle: boolean;
        public HeightPercent: number;
        public readonly Hyperlinks: Hyperlinks;
        public readonly Index: number;
        public Labels(Index?: any): any;
        public readonly Legend: Legend;
        public readonly Line3DGroup: ChartGroup;
        public LineGroups(Index?: any): any;
        public Lines(Index?: any): any;
        public ListBoxes(Index?: any): any;
        public Location(Where: XlChartLocation, Name?: any): Chart;
        public readonly MailEnvelope: Office.MsoEnvelope;
        public Move(Before?: any, After?: any): void;
        public Name: string;
        public readonly Next: any;
        public OLEObjects(Index?: any): any;
        public OnDoubleClick: string;
        public OnSheetActivate: string;
        public OnSheetDeactivate: string;
        public OptionButtons(Index?: any): any;
        public Ovals(Index?: any): any;
        public readonly PageSetup: PageSetup;
        public readonly Parent: any;
        public Paste(Type?: any): void;
        public Perspective: number;
        public Pictures(Index?: any): any;
        public readonly Pie3DGroup: ChartGroup;
        public PieGroups(Index?: any): any;
        public readonly PivotLayout: PivotLayout;
        public readonly PlotArea: PlotArea;
        public PlotBy: XlRowCol;
        public PlotVisibleOnly: boolean;
        public readonly Previous: any;
        public readonly PrintedCommentPages: number;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        public PrintPreview(EnableChanges?: any): void;
        public Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        public readonly ProtectContents: boolean;
        public ProtectData: boolean;
        public readonly ProtectDrawingObjects: boolean;
        public ProtectFormatting: boolean;
        public ProtectGoalSeek: boolean;
        public readonly ProtectionMode: boolean;
        public ProtectSelection: boolean;
        public RadarGroups(Index?: any): any;
        public Rectangles(Index?: any): any;
        public Refresh(): void;
        public RightAngleAxes: any;
        public Rotation: any;
        public SaveAs(
            Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any,
            TextVisualLayout?: any, Local?: any): void;
        public SaveChartTemplate(Filename: string): void;
        public readonly Scripts: Office.Scripts;
        public ScrollBars(Index?: any): any;
        public Select(Replace?: any): void;
        public SeriesCollection(Index?: any): any;
        public SetBackgroundPicture(Filename: string): void;
        public SetDefaultChart(Name: any): void;
        public SetElement(Element: Office.MsoChartElementType): void;
        public SetSourceData(Source: Range, PlotBy?: any): void;
        public readonly Shapes: Shapes;
        public ShowAllFieldButtons: boolean;
        public ShowAxisFieldButtons: boolean;
        public ShowDataLabelsOverMaximum: boolean;
        public ShowLegendFieldButtons: boolean;
        public ShowReportFilterFieldButtons: boolean;
        public ShowValueFieldButtons: boolean;
        public ShowWindow: boolean;
        public readonly SideWall: Walls;
        public SizeWithWindow: boolean;
        public Spinners(Index?: any): any;
        public SubType: number;
        public readonly SurfaceGroup: ChartGroup;
        public readonly Tab: Tab;
        public TextBoxes(Index?: any): any;
        public Type: number;
        public Unprotect(Password?: any): void;
        public Visible: XlSheetVisibility;
        public readonly Walls: Walls;
        public WallsAndGridlines2D: boolean;
        public XYGroups(Index?: any): any;
    }

    class ChartArea {
        private 'Excel.ChartArea_typekey': ChartArea;
        private constructor();
        public readonly Application: Application;
        public AutoScaleFont: any;
        public readonly Border: Border;
        public Clear(): any;
        public ClearContents(): any;
        public ClearFormats(): any;
        public Copy(): any;
        public readonly Creator: XlCreator;
        public readonly Fill: ChartFillFormat;
        public readonly Font: Font;
        public readonly Format: ChartFormat;
        public Height: number;
        public readonly Interior: Interior;
        public Left: number;
        public readonly Name: string;
        public readonly Parent: any;
        public RoundedCorners: boolean;
        public Select(): any;
        public Shadow: boolean;
        public Top: number;
        public Width: number;
    }

    class ChartColorFormat {
        private 'Excel.ChartColorFormat_typekey': ChartColorFormat;
        private constructor();
        public readonly _Default: number;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
        public readonly RGB: number;
        public SchemeColor: number;
        public readonly Type: number;
    }

    class ChartFillFormat {
        private 'Excel.ChartFillFormat_typekey': ChartFillFormat;
        private constructor();
        public readonly Application: Application;
        public readonly BackColor: ChartColorFormat;
        public readonly Creator: XlCreator;
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

    class ChartFormat {
        private 'Excel.ChartFormat_typekey': ChartFormat;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Fill: FillFormat;
        public readonly Glow: Office.GlowFormat;
        public readonly Line: LineFormat;
        public readonly Parent: any;
        public readonly PictureFormat: PictureFormat;
        public readonly Shadow: ShadowFormat;
        public readonly SoftEdge: Office.SoftEdgeFormat;
        public readonly TextFrame2: TextFrame2;
        public readonly ThreeD: ThreeDFormat;
    }

    class ChartGroup {
        private 'Excel.ChartGroup_typekey': ChartGroup;
        private constructor();
        public readonly Application: Application;
        public AxisGroup: XlAxisGroup;
        public BubbleScale: number;
        public readonly Creator: XlCreator;
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
        private 'Excel.ChartTitle_typekey': ChartTitle;
        private constructor();
        public readonly Application: Application;
        public AutoScaleFont: any;
        public readonly Border: Border;
        public Caption: string;
        public Characters(Start?: any, Length?: any): Characters;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Fill: ChartFillFormat;
        public readonly Font: Font;
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

    class ColorFormat {
        private 'Excel.ColorFormat_typekey': ColorFormat;
        private constructor();
        public readonly Application: any;
        public Brightness: number;
        public readonly Creator: number;
        public ObjectThemeColor: Office.MsoThemeColorIndex;
        public readonly Parent: any;
        public RGB: Office.MsoRGBType;
        public SchemeColor: number;
        public TintAndShade: number;
        public readonly Type: Office.MsoColorType;
    }

    class Comment {
        private 'Excel.Comment_typekey': Comment;
        private constructor();
        public readonly Application: Application;
        public readonly Author: string;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Next(): Comment;
        public readonly Parent: any;
        public Previous(): Comment;
        public readonly Shape: Shape;
        public Text(Text?: any, Start?: any, Overwrite?: any): string;
        public Visible: boolean;
    }

    class Comments {
        private 'Excel.Comments_typekey': Comments;
        private constructor();
        public _Default(Index: number): Comment;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): Comment;
        public readonly Parent: any;
    }

    class Connections {
        private 'Excel.Connections_typekey': Connections;
        private constructor();
        public _Default(Index: any): WorkbookConnection;
        public Add(Name: string, Description: string, ConnectionString: any, CommandText: any, lCmdtype?: any): WorkbookConnection;
        public AddFromFile(Filename: string): WorkbookConnection;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): WorkbookConnection;
        public readonly Parent: any;
    }

    class ConnectorFormat {
        private 'Excel.ConnectorFormat_typekey': ConnectorFormat;
        private constructor();
        public readonly Application: Application;
        public BeginConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        public readonly BeginConnected: Office.MsoTriState;
        public readonly BeginConnectedShape: Shape;
        public readonly BeginConnectionSite: number;
        public BeginDisconnect(): void;
        public readonly Creator: XlCreator;
        public EndConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        public readonly EndConnected: Office.MsoTriState;
        public readonly EndConnectedShape: Shape;
        public readonly EndConnectionSite: number;
        public EndDisconnect(): void;
        public readonly Parent: any;
        public Type: Office.MsoConnectorType;
    }

    class ControlFormat {
        private 'Excel.ControlFormat_typekey': ControlFormat;
        private constructor();
        public _Default: number;
        public AddItem(Text: string, Index?: any): void;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public DropDownLines: number;
        public Enabled: boolean;
        public LargeChange: number;
        public LinkedCell: string;
        public List(Index?: any): any;
        public ListCount: number;
        public ListFillRange: string;
        public ListIndex: number;
        public LockedText: boolean;
        public Max: number;
        public Min: number;
        public MultiSelect: number;
        public readonly Parent: any;
        public PrintObject: boolean;
        public RemoveAllItems(): void;
        public RemoveItem(Index: number, Count?: any): void;
        public SmallChange: number;
        public Value: number;
    }

    class Corners {
        private 'Excel.Corners_typekey': Corners;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class CubeField {
        private 'Excel.CubeField_typekey': CubeField;
        private constructor();
        public _AddMemberPropertyField(Property: string, PropertyOrder?: any): void;
        public readonly _Caption: string;
        public AddMemberPropertyField(Property: string, PropertyOrder?: any, PropertyDisplayedIn?: any): void;
        public readonly AllItemsVisible: boolean;
        public readonly Application: Application;
        public Caption: string;
        public ClearManualFilter(): void;
        public CreatePivotFields(): void;
        public readonly Creator: XlCreator;
        public readonly CubeFieldSubType: XlCubeFieldSubType;
        public readonly CubeFieldType: XlCubeFieldType;
        public CurrentPageName: string;
        public Delete(): void;
        public DragToColumn: boolean;
        public DragToData: boolean;
        public DragToHide: boolean;
        public DragToPage: boolean;
        public DragToRow: boolean;
        public EnableMultiplePageItems: boolean;
        public FlattenHierarchies: boolean;
        public readonly HasMemberProperties: boolean;
        public HiddenLevels: number;
        public HierarchizeDistinct: boolean;
        public IncludeNewItemsInFilter: boolean;
        public readonly IsDate: boolean;
        public LayoutForm: XlLayoutFormType;
        public LayoutSubtotalLocation: XlSubtototalLocationType;
        public readonly Name: string;
        public Orientation: XlPivotFieldOrientation;
        public readonly Parent: any;
        public readonly PivotFields: PivotFields;
        public Position: number;
        public ShowInFieldList: boolean;
        public readonly TreeviewControl: TreeviewControl;
        public readonly Value: string;
    }

    class CubeFields {
        private 'Excel.CubeFields_typekey': CubeFields;
        private constructor();
        public _Default(Index: any): CubeField;
        public AddSet(Name: string, Caption: string): CubeField;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): CubeField;
        public readonly Parent: any;
    }

    class CustomProperties {
        private 'Excel.CustomProperties_typekey': CustomProperties;
        private constructor();
        public _Default(Index: any): CustomProperty;
        public Add(Name: string, Value: any): CustomProperty;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): CustomProperty;
        public readonly Parent: any;
    }

    class CustomProperty {
        private 'Excel.CustomProperty_typekey': CustomProperty;
        private constructor();
        public readonly _Default: any;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Name: string;
        public readonly Parent: any;
        public Value: any;
    }

    class CustomView {
        private 'Excel.CustomView_typekey': CustomView;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly PrintSettings: boolean;
        public readonly RowColSettings: boolean;
        public Show(): void;
    }

    class CustomViews {
        private 'Excel.CustomViews_typekey': CustomViews;
        private constructor();
        public _Default(ViewName: any): CustomView;
        public Add(ViewName: string, PrintSettings?: any, RowColSettings?: any): CustomView;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(ViewName: any): CustomView;
        public readonly Parent: any;
    }

    class DataTable {
        private 'Excel.DataTable_typekey': DataTable;
        private constructor();
        public readonly Application: Application;
        public AutoScaleFont: any;
        public readonly Border: Border;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Font: Font;
        public readonly Format: ChartFormat;
        public HasBorderHorizontal: boolean;
        public HasBorderOutline: boolean;
        public HasBorderVertical: boolean;
        public readonly Parent: any;
        public Select(): void;
        public ShowLegendKey: boolean;
    }

    class DefaultWebOptions {
        private 'Excel.DefaultWebOptions_typekey': DefaultWebOptions;
        private constructor();
        public AllowPNG: boolean;
        public AlwaysSaveInDefaultEncoding: boolean;
        public readonly Application: Application;
        public CheckIfOfficeIsHTMLEditor: boolean;
        public readonly Creator: XlCreator;
        public DownloadComponents: boolean;
        public Encoding: Office.MsoEncoding;
        public readonly FolderSuffix: string;
        public readonly Fonts: Office.WebPageFonts;
        public LoadPictures: boolean;
        public LocationOfComponents: string;
        public OrganizeInFolder: boolean;
        public readonly Parent: any;
        public PixelsPerInch: number;
        public RelyOnCSS: boolean;
        public RelyOnVML: boolean;
        public SaveHiddenData: boolean;
        public SaveNewWebPagesAsWebArchives: boolean;
        public ScreenSize: Office.MsoScreenSize;
        public TargetBrowser: Office.MsoTargetBrowser;
        public UpdateLinksOnSave: boolean;
        public UseLongFileNames: boolean;
    }

    class Diagram {
        private 'Excel.Diagram_typekey': Diagram;
        private constructor();
        public readonly Application: Application;
        public AutoFormat: Office.MsoTriState;
        public AutoLayout: Office.MsoTriState;
        public Convert(Type: Office.MsoDiagramType): void;
        public readonly Creator: XlCreator;
        public FitText(): void;
        public readonly Nodes: DiagramNodes;
        public readonly Parent: any;
        public Reverse: Office.MsoTriState;
        public readonly Type: Office.MsoDiagramType;
    }

    class DiagramNode {
        private 'Excel.DiagramNode_typekey': DiagramNode;
        private constructor();

        /**
         * @param Office.MsoRelativeNodePosition [pos=2]
         * @param Office.MsoDiagramNodeType [nodeType=1]
         */
        public AddNode(pos?: Office.MsoRelativeNodePosition, nodeType?: Office.MsoDiagramNodeType): DiagramNode;
        public readonly Application: any;
        public readonly Children: DiagramNodeChildren;

        /** @param Office.MsoRelativeNodePosition [pos=2] */
        public CloneNode(copyChildren: boolean, pTargetNode: DiagramNode, pos?: Office.MsoRelativeNodePosition): DiagramNode;
        public readonly Creator: number;
        public Delete(): void;
        public readonly Diagram: Office.IMsoDiagram;
        public Layout: Office.MsoOrgChartLayoutType;
        public MoveNode(pTargetNode: DiagramNode, pos: Office.MsoRelativeNodePosition): void;
        public NextNode(): DiagramNode;
        public readonly Parent: any;
        public PrevNode(): DiagramNode;
        public ReplaceNode(pTargetNode: DiagramNode): void;
        public readonly Root: DiagramNode;
        public readonly Shape: Shape;

        /** @param boolean [swapChildren=true] */
        public SwapNode(pTargetNode: DiagramNode, swapChildren?: boolean): void;
        public readonly TextShape: Shape;
        public TransferChildren(pReceivingNode: DiagramNode): void;
    }

    class DiagramNodeChildren {
        private 'Excel.DiagramNodeChildren_typekey': DiagramNodeChildren;
        private constructor();

        /**
         * @param any [Index=-1]
         * @param Office.MsoDiagramNodeType [nodeType=1]
         */
        public AddNode(Index?: any, nodeType?: Office.MsoDiagramNodeType): DiagramNode;
        public readonly Application: any;
        public readonly Count: number;
        public readonly Creator: number;
        public readonly FirstChild: DiagramNode;
        public Item(Index: any): DiagramNode;
        public readonly LastChild: DiagramNode;
        public readonly Parent: any;
        public SelectAll(): void;
    }

    class DiagramNodes {
        private 'Excel.DiagramNodes_typekey': DiagramNodes;
        private constructor();
        public readonly Application: any;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): DiagramNode;
        public readonly Parent: any;
        public SelectAll(): void;
    }

    class Dialog {
        private 'Excel.Dialog_typekey': Dialog;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
        public Show(
            Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): boolean;
    }

    class DialogFrame {
        private 'Excel.DialogFrame_typekey': DialogFrame;
        private constructor();
        public readonly Application: Application;
        public Caption: string;
        public Characters(Start?: any, Length?: any): Characters;
        public CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any): any;

        /**
         * @param Excel.XlPictureAppearance [Appearance=2]
         * @param Excel.XlCopyPictureFormat [Format=-4147]
         */
        public CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        public readonly Creator: XlCreator;
        public Height: number;
        public Left: number;
        public Locked: boolean;
        public LockedText: boolean;
        public Name: string;
        public OnAction: string;
        public readonly Parent: any;
        public Select(Replace?: any): any;
        public readonly ShapeRange: ShapeRange;
        public Text: string;
        public Top: number;
        public Width: number;
    }

    class Dialogs {
        private 'Excel.Dialogs_typekey': Dialogs;
        private constructor();
        public _Default(Index: XlBuiltInDialog): Dialog;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: XlBuiltInDialog): Dialog;
        public readonly Parent: any;
    }

    class DialogSheet {
        private 'Excel.DialogSheet_typekey': DialogSheet;
        private constructor();
        public __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        public _CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, IgnoreFinalYaa?: any, SpellScript?: any): void;
        public _CodeName: string;
        public _DisplayRightToLeft: number;
        public _Evaluate(Name: any): any;
        public _PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any): void;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        public _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        public _SaveAs(
            Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any,
            TextVisualLayout?: any): void;
        public Activate(): void;
        public readonly Application: Application;
        public Arcs(Index?: any): any;
        public readonly AutoFilter: AutoFilter;
        public Buttons(Index?: any): any;
        public ChartObjects(Index?: any): any;
        public CheckBoxes(Index?: any): any;
        public CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any): void;
        public CircleInvalid(): void;
        public ClearCircles(): void;
        public readonly CodeName: string;
        public readonly Comments: Comments;
        public Copy(Before?: any, After?: any): void;
        public readonly Creator: XlCreator;
        public readonly CustomProperties: CustomProperties;
        public DefaultButton: any;
        public Delete(): void;
        public readonly DialogFrame: DialogFrame;
        public DisplayAutomaticPageBreaks: boolean;
        public DisplayPageBreaks: boolean;
        public DisplayRightToLeft: boolean;
        public DrawingObjects(Index?: any): any;
        public Drawings(Index?: any): any;
        public DropDowns(Index?: any): any;
        public EditBoxes(Index?: any): any;
        public EnableAutoFilter: boolean;
        public EnableCalculation: boolean;
        public EnableFormatConditionsCalculation: boolean;
        public EnableOutlining: boolean;
        public EnablePivotTable: boolean;
        public EnableSelection: XlEnableSelection;
        public Evaluate(Name: any): any;
        public ExportAsFixedFormat(
            Type: XlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any,
            FixedFormatExtClassPtr?: any): void;
        public Focus: any;
        public GroupBoxes(Index?: any): any;
        public GroupObjects(Index?: any): any;
        public Hide(Cancel?: any): boolean;
        public readonly HPageBreaks: HPageBreaks;
        public readonly Hyperlinks: Hyperlinks;
        public readonly Index: number;
        public Labels(Index?: any): any;
        public Lines(Index?: any): any;
        public ListBoxes(Index?: any): any;
        public readonly MailEnvelope: Office.MsoEnvelope;
        public Move(Before?: any, After?: any): void;
        public Name: string;
        public readonly Names: Names;
        public readonly Next: any;
        public OLEObjects(Index?: any): any;
        public OnDoubleClick: string;
        public OnSheetActivate: string;
        public OnSheetDeactivate: string;
        public OptionButtons(Index?: any): any;
        public Ovals(Index?: any): any;
        public readonly PageSetup: PageSetup;
        public readonly Parent: any;
        public Paste(Destination?: any, Link?: any): void;
        public PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, NoHTMLFormatting?: any): void;
        public Pictures(Index?: any): any;
        public readonly Previous: any;
        public readonly PrintedCommentPages: number;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        public PrintPreview(EnableChanges?: any): void;
        public Protect(
            Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, AllowFormattingCells?: any, AllowFormattingColumns?: any,
            AllowFormattingRows?: any, AllowInsertingColumns?: any, AllowInsertingRows?: any, AllowInsertingHyperlinks?: any, AllowDeletingColumns?: any,
            AllowDeletingRows?: any, AllowSorting?: any, AllowFiltering?: any, AllowUsingPivotTables?: any): void;
        public readonly ProtectContents: boolean;
        public readonly ProtectDrawingObjects: boolean;
        public readonly Protection: Protection;
        public readonly ProtectionMode: boolean;
        public readonly ProtectScenarios: boolean;
        public readonly QueryTables: QueryTables;
        public Rectangles(Index?: any): any;
        public ResetAllPageBreaks(): void;
        public SaveAs(
            Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any,
            TextVisualLayout?: any, Local?: any): void;
        public readonly Scripts: Office.Scripts;
        public ScrollArea: string;
        public ScrollBars(Index?: any): any;
        public Select(Replace?: any): void;
        public readonly Shapes: Shapes;
        public Show(): boolean;
        public readonly SmartTags: SmartTags;
        public readonly Sort: Sort;
        public Spinners(Index?: any): any;
        public readonly Tab: Tab;
        public TextBoxes(Index?: any): any;
        public Unprotect(Password?: any): void;
        public Visible: XlSheetVisibility;
        public readonly VPageBreaks: VPageBreaks;
    }

    class DisplayFormat {
        private 'Excel.DisplayFormat_typekey': DisplayFormat;
        private constructor();
        public readonly AddIndent: any;
        public readonly Application: Application;
        public readonly Borders: Borders;
        public Characters(Start?: any, Length?: any): Characters;
        public readonly Creator: XlCreator;
        public readonly Font: Font;
        public readonly FormulaHidden: any;
        public readonly HorizontalAlignment: any;
        public readonly IndentLevel: any;
        public readonly Interior: Interior;
        public readonly Locked: any;
        public readonly MergeCells: any;
        public readonly NumberFormat: any;
        public readonly NumberFormatLocal: any;
        public readonly Orientation: any;
        public readonly Parent: any;
        public readonly ReadingOrder: number;
        public readonly ShrinkToFit: any;
        public readonly Style: any;
        public readonly VerticalAlignment: any;
        public readonly WrapText: any;
    }

    class DownBars {
        private 'Excel.DownBars_typekey': DownBars;
        private constructor();
        public readonly Application: Application;
        public readonly Border: Border;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Fill: ChartFillFormat;
        public readonly Format: ChartFormat;
        public readonly Interior: Interior;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class DropLines {
        private 'Excel.DropLines_typekey': DropLines;
        private constructor();
        public readonly Application: Application;
        public readonly Border: Border;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class Error {
        private 'Excel.Error_typekey': Error;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Ignore: boolean;
        public readonly Parent: any;
        public readonly Value: boolean;
    }

    class ErrorCheckingOptions {
        private 'Excel.ErrorCheckingOptions_typekey': ErrorCheckingOptions;
        private constructor();
        public readonly Application: Application;
        public BackgroundChecking: boolean;
        public readonly Creator: XlCreator;
        public EmptyCellReferences: boolean;
        public EvaluateToError: boolean;
        public InconsistentFormula: boolean;
        public InconsistentTableFormula: boolean;
        public IndicatorColorIndex: XlColorIndex;
        public ListDataValidation: boolean;
        public NumberAsText: boolean;
        public OmittedCells: boolean;
        public readonly Parent: any;
        public TextDate: boolean;
        public UnlockedFormulaCells: boolean;
    }

    class Errors {
        private 'Excel.Errors_typekey': Errors;
        private constructor();
        public _Default(Index: any): Error;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Item(Index: any): Error;
        public readonly Parent: any;
    }

    class FileExportConverter {
        private 'Excel.FileExportConverter_typekey': FileExportConverter;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Description: string;
        public readonly Extensions: string;
        public readonly FileFormat: number;
        public readonly Parent: any;
    }

    class FileExportConverters {
        private 'Excel.FileExportConverters_typekey': FileExportConverters;
        private constructor();
        public _Default(Index: any): FileExportConverter;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): FileExportConverter;
        public readonly Parent: any;
    }

    class FillFormat {
        private 'Excel.FillFormat_typekey': FillFormat;
        private constructor();
        public readonly Application: any;
        public BackColor: ColorFormat;
        public Background(): void;
        public readonly Creator: number;
        public ForeColor: ColorFormat;
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

    class Filter {
        private 'Excel.Filter_typekey': Filter;
        private constructor();
        public readonly _Operator: XlAutoFilterOperator;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public readonly Criteria1: any;
        public readonly Criteria2: any;
        public readonly On: boolean;
        public Operator: XlAutoFilterOperator;
        public readonly Parent: any;
    }

    class Filters {
        private 'Excel.Filters_typekey': Filters;
        private constructor();
        public _Default(Index: number): Filter;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): Filter;
        public readonly Parent: any;
    }

    class Floor {
        private 'Excel.Floor_typekey': Floor;
        private constructor();
        public readonly Application: Application;
        public readonly Border: Border;
        public ClearFormats(): any;
        public readonly Creator: XlCreator;
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
        private 'Excel.Font_typekey': Font;
        private constructor();
        public readonly Application: Application;
        public Background: any;
        public Bold: any;
        public Color: any;
        public ColorIndex: any;
        public readonly Creator: XlCreator;
        public FontStyle: any;
        public Italic: any;
        public Name: any;
        public OutlineFont: any;
        public readonly Parent: any;
        public Shadow: any;
        public Size: any;
        public Strikethrough: any;
        public Subscript: any;
        public Superscript: any;
        public ThemeColor: any;
        public ThemeFont: XlThemeFont;
        public TintAndShade: any;
        public Underline: any;
    }

    class FormatColor {
        private 'Excel.FormatColor_typekey': FormatColor;
        private constructor();
        public readonly Application: Application;
        public Color: any;
        public ColorIndex: XlColorIndex;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
        public ThemeColor: any;
        public TintAndShade: any;
    }

    class FormatConditions {
        private 'Excel.FormatConditions_typekey': FormatConditions;
        private constructor();
        public _Default(Index: any): any;
        public Add(Type: XlFormatConditionType, Operator?: any, Formula1?: any, Formula2?: any, String?: any, TextOperator?: any, DateOperator?: any, ScopeType?: any): any;
        public AddAboveAverage(): any;
        public AddColorScale(ColorScaleType: number): any;
        public AddDatabar(): any;
        public AddIconSetCondition(): any;
        public AddTop10(): any;
        public AddUniqueValues(): any;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Item(Index: any): any;
        public readonly Parent: any;
    }

    class FreeformBuilder {
        private 'Excel.FreeformBuilder_typekey': FreeformBuilder;
        private constructor();
        public AddNodes(SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: any, Y2?: any, X3?: any, Y3?: any): void;
        public readonly Application: Application;
        public ConvertToShape(): Shape;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
    }

    class Global {
        private 'Excel.Global_typekey': Global;
        private constructor();
        public _Evaluate(Name: any): any;
        public _Run2(
            Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public readonly ActiveCell: Range;
        public readonly ActiveChart: Chart;
        public readonly ActiveDialog: DialogSheet;
        public readonly ActiveMenuBar: MenuBar;
        public ActivePrinter: string;
        public readonly ActiveSheet: any;
        public readonly ActiveWindow: Window;
        public readonly ActiveWorkbook: Workbook;
        public readonly AddIns: AddIns;
        public readonly Application: Application;
        public readonly Assistant: Office.Assistant;
        public Calculate(): void;
        public readonly Cells: Range;
        public readonly Charts: Sheets;
        public readonly Columns: Range;
        public readonly CommandBars: Office.CommandBars;
        public readonly Creator: XlCreator;
        public readonly DDEAppReturnCode: number;
        public DDEExecute(Channel: number, String: string): void;
        public DDEInitiate(App: string, Topic: string): number;
        public DDEPoke(Channel: number, Item: any, Data: any): void;
        public DDERequest(Channel: number, Item: string): any;
        public DDETerminate(Channel: number): void;
        public readonly DialogSheets: Sheets;
        public Evaluate(Name: any): any;
        public readonly Excel4IntlMacroSheets: Sheets;
        public readonly Excel4MacroSheets: Sheets;
        public ExecuteExcel4Macro(String: string): any;
        public Intersect(
            Arg1: Range, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): Range;
        public readonly MenuBars: MenuBars;
        public readonly Modules: Modules;
        public readonly Names: Names;
        public readonly Parent: Application;
        public Range(Cell1: any, Cell2?: any): Range;
        public readonly Rows: Range;
        public Run(
            Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public readonly Selection: any;
        public SendKeys(Keys: any, Wait?: any): void;
        public readonly Sheets: Sheets;
        public ShortcutMenus(Index: number): Menu;
        public readonly ThisWorkbook: Workbook;
        public readonly Toolbars: Toolbars;
        public Union(
            Arg1: Range, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): Range;
        public readonly Windows: Windows;
        public readonly Workbooks: Workbooks;
        public readonly WorksheetFunction: WorksheetFunction;
        public readonly Worksheets: Sheets;
    }

    class Graphic {
        private 'Excel.Graphic_typekey': Graphic;
        private constructor();
        public readonly Application: Application;
        public Brightness: number;
        public ColorType: Office.MsoPictureColorType;
        public Contrast: number;
        public readonly Creator: XlCreator;
        public CropBottom: number;
        public CropLeft: number;
        public CropRight: number;
        public CropTop: number;
        public Filename: string;
        public Height: number;
        public LockAspectRatio: Office.MsoTriState;
        public readonly Parent: any;
        public Width: number;
    }

    class GroupShapes {
        private 'Excel.GroupShapes_typekey': GroupShapes;
        private constructor();
        public _Default(Index: any): Shape;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Shape;
        public readonly Parent: any;
        public Range(Index: any): ShapeRange;
    }

    class HeaderFooter {
        private 'Excel.HeaderFooter_typekey': HeaderFooter;
        private constructor();
        public readonly Picture: Graphic;
        public Text: string;
    }

    class HiLoLines {
        private 'Excel.HiLoLines_typekey': HiLoLines;
        private constructor();
        public readonly Application: Application;
        public readonly Border: Border;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class HPageBreak {
        private 'Excel.HPageBreak_typekey': HPageBreak;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public DragOff(Direction: XlDirection, RegionIndex: number): void;
        public readonly Extent: XlPageBreakExtent;
        public Location: Range;
        public readonly Parent: Worksheet;
        public Type: XlPageBreak;
    }

    class HPageBreaks {
        private 'Excel.HPageBreaks_typekey': HPageBreaks;
        private constructor();
        public _Default(Index: number): HPageBreak;
        public Add(Before: any): HPageBreak;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): HPageBreak;
        public readonly Parent: any;
    }

    class Hyperlink {
        private 'Excel.Hyperlink_typekey': Hyperlink;
        private constructor();
        public Address: string;
        public AddToFavorites(): void;
        public readonly Application: Application;
        public CreateNewDocument(Filename: string, EditNow: boolean, Overwrite: boolean): void;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public EmailSubject: string;
        public Follow(NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Range: Range;
        public ScreenTip: string;
        public readonly Shape: Shape;
        public SubAddress: string;
        public TextToDisplay: string;
        public readonly Type: number;
    }

    class Hyperlinks {
        private 'Excel.Hyperlinks_typekey': Hyperlinks;
        private constructor();
        public _Default(Index: any): Hyperlink;
        public Add(Anchor: any, Address: string, SubAddress?: any, ScreenTip?: any, TextToDisplay?: any): any;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Item(Index: any): Hyperlink;
        public readonly Parent: any;
    }

    class Icon {
        private 'Excel.Icon_typekey': Icon;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Index: number;
        public readonly Parent: IconSet;
    }

    class IconSet {
        private 'Excel.IconSet_typekey': IconSet;
        private constructor();
        public _Default(Index: any): Icon;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public readonly ID: XlIconSet;
        public Item(Index: any): Icon;
        public readonly Parent: any;
    }

    class IconSets {
        private 'Excel.IconSets_typekey': IconSets;
        private constructor();
        public _Default(Index: any): any;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): any;
        public readonly Parent: any;
    }

    class Interior {
        private 'Excel.Interior_typekey': Interior;
        private constructor();
        public readonly Application: Application;
        public Color: any;
        public ColorIndex: any;
        public readonly Creator: XlCreator;
        public readonly Gradient: any;
        public InvertIfNegative: any;
        public readonly Parent: any;
        public Pattern: any;
        public PatternColor: any;
        public PatternColorIndex: any;
        public PatternThemeColor: any;
        public PatternTintAndShade: any;
        public ThemeColor: any;
        public TintAndShade: any;
    }

    class Legend {
        private 'Excel.Legend_typekey': Legend;
        private constructor();
        public readonly Application: Application;
        public AutoScaleFont: any;
        public readonly Border: Border;
        public Clear(): any;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Fill: ChartFillFormat;
        public readonly Font: Font;
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

    class LineFormat {
        private 'Excel.LineFormat_typekey': LineFormat;
        private constructor();
        public readonly Application: any;
        public BackColor: ColorFormat;
        public BeginArrowheadLength: Office.MsoArrowheadLength;
        public BeginArrowheadStyle: Office.MsoArrowheadStyle;
        public BeginArrowheadWidth: Office.MsoArrowheadWidth;
        public readonly Creator: number;
        public DashStyle: Office.MsoLineDashStyle;
        public EndArrowheadLength: Office.MsoArrowheadLength;
        public EndArrowheadStyle: Office.MsoArrowheadStyle;
        public EndArrowheadWidth: Office.MsoArrowheadWidth;
        public ForeColor: ColorFormat;
        public InsetPen: Office.MsoTriState;
        public readonly Parent: any;
        public Pattern: Office.MsoPatternType;
        public Style: Office.MsoLineStyle;
        public Transparency: number;
        public Visible: Office.MsoTriState;
        public Weight: number;
    }

    class LinkFormat {
        private 'Excel.LinkFormat_typekey': LinkFormat;
        private constructor();
        public readonly Application: Application;
        public AutoUpdate: boolean;
        public readonly Creator: XlCreator;
        public Locked: boolean;
        public readonly Parent: any;
        public Update(): void;
    }

    class ListColumn {
        private 'Excel.ListColumn_typekey': ListColumn;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly DataBodyRange: Range;
        public Delete(): void;
        public readonly Index: number;
        public readonly ListDataFormat: ListDataFormat;
        public Name: string;
        public readonly Parent: any;
        public readonly Range: Range;
        public readonly SharePointFormula: string;
        public readonly Total: Range;
        public TotalsCalculation: XlTotalsCalculation;
        public readonly XPath: XPath;
    }

    class ListColumns {
        private 'Excel.ListColumns_typekey': ListColumns;
        private constructor();
        public _Default(Index: any): ListColumn;
        public Add(Position?: any): ListColumn;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): ListColumn;
        public readonly Parent: any;
    }

    class ListDataFormat {
        private 'Excel.ListDataFormat_typekey': ListDataFormat;
        private constructor();
        public readonly _Default: XlListDataType;
        public readonly AllowFillIn: boolean;
        public readonly Application: Application;
        public readonly Choices: any;
        public readonly Creator: XlCreator;
        public readonly DecimalPlaces: number;
        public readonly DefaultValue: any;
        public readonly IsPercent: boolean;
        public readonly lcid: number;
        public readonly MaxCharacters: number;
        public readonly MaxNumber: any;
        public readonly MinNumber: any;
        public readonly Parent: any;
        public readonly ReadOnly: boolean;
        public readonly Required: boolean;
        public readonly Type: XlListDataType;
    }

    class ListObject {
        private 'Excel.ListObject_typekey': ListObject;
        private constructor();
        public readonly _Default: string;
        public readonly Active: boolean;
        public AlternativeText: string;
        public readonly Application: Application;
        public readonly AutoFilter: AutoFilter;
        public Comment: string;
        public readonly Creator: XlCreator;
        public readonly DataBodyRange: Range;
        public Delete(): void;
        public DisplayName: string;
        public readonly DisplayRightToLeft: boolean;
        public ExportToVisio(): void;
        public readonly HeaderRowRange: Range;
        public readonly InsertRowRange: Range;
        public readonly ListColumns: ListColumns;
        public readonly ListRows: ListRows;
        public Name: string;
        public readonly Parent: any;
        public Publish(Target: any, LinkSource: boolean): string;
        public readonly QueryTable: QueryTable;
        public readonly Range: Range;
        public Refresh(): void;
        public Resize(Range: Range): void;
        public readonly SharePointURL: string;
        public ShowAutoFilter: boolean;
        public ShowHeaders: boolean;
        public ShowTableStyleColumnStripes: boolean;
        public ShowTableStyleFirstColumn: boolean;
        public ShowTableStyleLastColumn: boolean;
        public ShowTableStyleRowStripes: boolean;
        public ShowTotals: boolean;
        public readonly Sort: Sort;
        public readonly SourceType: XlListObjectSourceType;
        public Summary: string;
        public TableStyle: any;
        public readonly TotalsRowRange: Range;
        public Unlink(): void;
        public Unlist(): void;

        /** @param Excel.XlListConflict [iConflictType=0] */
        public UpdateChanges(iConflictType?: XlListConflict): void;
        public readonly XmlMap: XmlMap;
    }

    class ListObjects {
        private 'Excel.ListObjects_typekey': ListObjects;
        private constructor();

        /**
         * @param Excel.XlListObjectSourceType [SourceType=1]
         * @param Excel.XlYesNoGuess [XlListObjectHasHeaders=0]
         */
        public _Add(SourceType?: XlListObjectSourceType, Source?: any, LinkSource?: any, XlListObjectHasHeaders?: XlYesNoGuess, Destination?: any): ListObject;
        public _Default(Index: any): ListObject;

        /**
         * @param Excel.XlListObjectSourceType [SourceType=1]
         * @param Excel.XlYesNoGuess [XlListObjectHasHeaders=0]
         */
        public Add(SourceType?: XlListObjectSourceType, Source?: any, LinkSource?: any, XlListObjectHasHeaders?: XlYesNoGuess, Destination?: any, TableStyleName?: any): ListObject;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): ListObject;
        public readonly Parent: any;
    }

    class ListRow {
        private 'Excel.ListRow_typekey': ListRow;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Index: number;
        public readonly InvalidData: boolean;
        public readonly Parent: any;
        public readonly Range: Range;
    }

    class ListRows {
        private 'Excel.ListRows_typekey': ListRows;
        private constructor();
        public _Add(Position?: any): ListRow;
        public _Default(Index: any): ListRow;
        public Add(Position?: any, AlwaysInsert?: any): ListRow;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): ListRow;
        public readonly Parent: any;
    }

    class Mailer {
        private 'Excel.Mailer_typekey': Mailer;
        private constructor();
        public readonly Application: Application;
        public BCCRecipients: any;
        public CCRecipients: any;
        public readonly Creator: XlCreator;
        public Enclosures: any;
        public readonly Parent: any;
        public readonly Received: boolean;
        public readonly SendDateTime: VarDate;
        public readonly Sender: string;
        public Subject: string;
        public ToRecipients: any;
        public WhichAddress: any;
    }

    class Menu {
        private 'Excel.Menu_typekey': Menu;
        private constructor();
        public readonly Application: Application;
        public Caption: string;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Enabled: boolean;
        public readonly Index: number;
        public readonly MenuItems: MenuItems;
        public readonly Parent: any;
    }

    class MenuBar {
        private 'Excel.MenuBar_typekey': MenuBar;
        private constructor();
        public Activate(): void;
        public readonly Application: Application;
        public readonly BuiltIn: boolean;
        public Caption: string;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Index: number;
        public readonly Menus: Menus;
        public readonly Parent: any;
        public Reset(): void;
    }

    class MenuBars {
        private 'Excel.MenuBars_typekey': MenuBars;
        private constructor();
        public _Default(Index: any): MenuBar;
        public Add(Name?: any): MenuBar;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): MenuBar;
        public readonly Parent: any;
    }

    class MenuItem {
        private 'Excel.MenuItem_typekey': MenuItem;
        private constructor();
        public readonly Application: Application;
        public Caption: string;
        public Checked: boolean;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Enabled: boolean;
        public HelpContextID: number;
        public HelpFile: string;
        public readonly Index: number;
        public OnAction: string;
        public readonly Parent: any;
        public StatusBar: string;
    }

    class MenuItems {
        private 'Excel.MenuItems_typekey': MenuItems;
        private constructor();
        public _Default(Index: any): any;
        public Add(Caption: string, OnAction?: any, ShortcutKey?: any, Before?: any, Restore?: any, StatusBar?: any, HelpFile?: any, HelpContextID?: any): MenuItem;
        public AddMenu(Caption: string, Before?: any, Restore?: any): Menu;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): any;
        public readonly Parent: any;
    }

    class Menus {
        private 'Excel.Menus_typekey': Menus;
        private constructor();
        public _Default(Index: any): Menu;
        public Add(Caption: string, Before?: any, Restore?: any): Menu;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Menu;
        public readonly Parent: any;
    }

    class Module {
        private 'Excel.Module_typekey': Module;
        private constructor();
        public __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        public _CodeName: string;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        public _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        public _SaveAs(
            Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any,
            TextVisualLayout?: any): void;
        public Activate(): void;
        public readonly Application: Application;
        public readonly CodeName: string;
        public Copy(Before?: any, After?: any): void;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Index: number;
        public InsertFile(Filename: any, Merge?: any): any;
        public Move(Before?: any, After?: any): void;
        public Name: string;
        public readonly Next: any;
        public OnDoubleClick: string;
        public OnSheetActivate: string;
        public OnSheetDeactivate: string;
        public readonly PageSetup: PageSetup;
        public readonly Parent: any;
        public readonly Previous: any;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        public Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        public readonly ProtectContents: boolean;
        public readonly ProtectionMode: boolean;
        public SaveAs(
            Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any,
            TextVisualLayout?: any): void;
        public Select(Replace?: any): void;
        public readonly Shapes: Shapes;
        public Unprotect(Password?: any): void;
        public Visible: XlSheetVisibility;
    }

    class Modules {
        private 'Excel.Modules_typekey': Modules;
        private constructor();
        public __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        public _Default(Index: any): any;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        public Add(Before?: any, After?: any, Count?: any): Module;
        public readonly Application: Application;
        public Copy(Before?: any, After?: any): void;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly HPageBreaks: HPageBreaks;
        public Item(Index: any): any;
        public Move(Before?: any, After?: any): void;
        public readonly Parent: any;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any): void;
        public Select(Replace?: any): void;
        public Visible: any;
        public readonly VPageBreaks: VPageBreaks;
    }

    class MultiThreadedCalculation {
        private 'Excel.MultiThreadedCalculation_typekey': MultiThreadedCalculation;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Enabled: boolean;
        public readonly Parent: any;
        public ThreadCount: number;
        public ThreadMode: XlThreadMode;
    }

    class Name {
        private 'Excel.Name_typekey': Name;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public Category: string;
        public CategoryLocal: string;
        public Comment: string;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Index: number;
        public MacroType: XlXLMMacroType;
        public Name: string;
        public NameLocal: string;
        public readonly Parent: any;
        public RefersTo: any;
        public RefersToLocal: any;
        public RefersToR1C1: any;
        public RefersToR1C1Local: any;
        public readonly RefersToRange: Range;
        public ShortcutKey: string;
        public readonly ValidWorkbookParameter: boolean;
        public Value: string;
        public Visible: boolean;
        public WorkbookParameter: boolean;
    }

    class Names {
        private 'Excel.Names_typekey': Names;
        private constructor();
        public _Default(Index?: any, IndexLocal?: any, RefersTo?: any): Name;
        public Add(
            Name?: any, RefersTo?: any, Visible?: any, MacroType?: any, ShortcutKey?: any, Category?: any, NameLocal?: any, RefersToLocal?: any, CategoryLocal?: any,
            RefersToR1C1?: any, RefersToR1C1Local?: any): Name;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index?: any, IndexLocal?: any, RefersTo?: any): Name;
        public readonly Parent: any;
    }

    class ODBCConnection {
        private 'Excel.ODBCConnection_typekey': ODBCConnection;
        private constructor();
        public AlwaysUseConnectionFile: boolean;
        public readonly Application: Application;
        public BackgroundQuery: boolean;
        public CancelRefresh(): void;
        public CommandText: any;
        public CommandType: XlCmdType;
        public Connection: any;
        public readonly Creator: XlCreator;
        public EnableRefresh: boolean;
        public readonly Parent: any;
        public Refresh(): void;
        public readonly RefreshDate: VarDate;
        public readonly Refreshing: boolean;
        public RefreshOnFileOpen: boolean;
        public RefreshPeriod: number;
        public RobustConnect: XlRobustConnect;
        public SaveAsODC(ODCFileName: string, Description?: any, Keywords?: any): void;
        public SavePassword: boolean;
        public ServerCredentialsMethod: XlCredentialsMethod;
        public ServerSSOApplicationID: string;
        public SourceConnectionFile: string;
        public SourceData: any;
        public SourceDataFile: string;
    }

    class ODBCError {
        private 'Excel.ODBCError_typekey': ODBCError;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly ErrorString: string;
        public readonly Parent: any;
        public readonly SqlState: string;
    }

    class ODBCErrors {
        private 'Excel.ODBCErrors_typekey': ODBCErrors;
        private constructor();
        public _Default(Index: number): ODBCError;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): ODBCError;
        public readonly Parent: any;
    }

    class OLEDBConnection {
        private 'Excel.OLEDBConnection_typekey': OLEDBConnection;
        private constructor();
        public readonly ADOConnection: any;
        public AlwaysUseConnectionFile: boolean;
        public readonly Application: Application;
        public BackgroundQuery: boolean;
        public readonly CalculatedMembers: CalculatedMembers;
        public CancelRefresh(): void;
        public CommandText: any;
        public CommandType: XlCmdType;
        public Connection: any;
        public readonly Creator: XlCreator;
        public EnableRefresh: boolean;
        public readonly IsConnected: boolean;
        public LocalConnection: any;
        public LocaleID: number;
        public MaintainConnection: boolean;
        public MakeConnection(): void;
        public MaxDrillthroughRecords: number;
        public readonly OLAP: boolean;
        public readonly Parent: any;
        public Reconnect(): void;
        public Refresh(): void;
        public readonly RefreshDate: VarDate;
        public readonly Refreshing: boolean;
        public RefreshOnFileOpen: boolean;
        public RefreshPeriod: number;
        public RetrieveInOfficeUILang: boolean;
        public RobustConnect: XlRobustConnect;
        public SaveAsODC(ODCFileName: string, Description?: any, Keywords?: any): void;
        public SavePassword: boolean;
        public ServerCredentialsMethod: XlCredentialsMethod;
        public ServerFillColor: boolean;
        public ServerFontStyle: boolean;
        public ServerNumberFormat: boolean;
        public ServerSSOApplicationID: string;
        public ServerTextColor: boolean;
        public SourceConnectionFile: string;
        public SourceDataFile: string;
        public UseLocalConnection: boolean;
    }

    class OLEDBError {
        private 'Excel.OLEDBError_typekey': OLEDBError;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly ErrorString: string;
        public readonly Native: number;
        public readonly Number: number;
        public readonly Parent: any;
        public readonly SqlState: string;
        public readonly Stage: number;
    }

    class OLEDBErrors {
        private 'Excel.OLEDBErrors_typekey': OLEDBErrors;
        private constructor();
        public _Default(Index: number): OLEDBError;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): OLEDBError;
        public readonly Parent: any;
    }

    class OLEFormat {
        private 'Excel.OLEFormat_typekey': OLEFormat;
        private constructor();
        public Activate(): void;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Object: any;
        public readonly Parent: any;
        public readonly progID: string;
        public Verb(Verb?: any): void;
    }

    class OLEObject {
        private 'Excel.OLEObject_typekey': OLEObject;
        private constructor();
        public Activate(): any;
        public AltHTML: string;
        public readonly Application: Application;
        public AutoLoad: boolean;
        public AutoUpdate: boolean;
        public readonly Border: Border;
        public readonly BottomRightCell: Range;
        public BringToFront(): any;
        public Copy(): any;

        /**
         * @param Excel.XlPictureAppearance [Appearance=2]
         * @param Excel.XlCopyPictureFormat [Format=-4147]
         */
        public CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        public readonly Creator: XlCreator;
        public Cut(): any;
        public Delete(): any;
        public Duplicate(): any;
        public Enabled: boolean;
        public Height: number;
        public readonly Index: number;
        public readonly Interior: Interior;
        public Left: number;
        public LinkedCell: string;
        public ListFillRange: string;
        public Locked: boolean;
        public Name: string;
        public readonly Object: any;
        public readonly OLEType: any;
        public OnAction: string;
        public readonly Parent: any;
        public Placement: any;
        public PrintObject: boolean;
        public readonly progID: string;
        public Select(Replace?: any): any;
        public SendToBack(): any;
        public Shadow: boolean;
        public readonly ShapeRange: ShapeRange;
        public SourceName: string;
        public Top: number;
        public readonly TopLeftCell: Range;
        public Update(): any;

        /** @param Excel.XlOLEVerb [Verb=1] */
        public Verb(Verb?: XlOLEVerb): any;
        public Visible: boolean;
        public Width: number;
        public readonly ZOrder: number;
    }

    class Outline {
        private 'Excel.Outline_typekey': Outline;
        private constructor();
        public readonly Application: Application;
        public AutomaticStyles: boolean;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
        public ShowLevels(RowLevels?: any, ColumnLevels?: any): any;
        public SummaryColumn: XlSummaryColumn;
        public SummaryRow: XlSummaryRow;
    }

    class Page {
        private 'Excel.Page_typekey': Page;
        private constructor();
        public readonly CenterFooter: HeaderFooter;
        public readonly CenterHeader: HeaderFooter;
        public readonly LeftFooter: HeaderFooter;
        public readonly LeftHeader: HeaderFooter;
        public readonly RightFooter: HeaderFooter;
        public readonly RightHeader: HeaderFooter;
    }

    class Pages {
        private 'Excel.Pages_typekey': Pages;
        private constructor();
        public _Default(Index: any): Page;
        public readonly Count: number;
        public Item(Index: any): Page;
    }

    class PageSetup {
        private 'Excel.PageSetup_typekey': PageSetup;
        private constructor();
        public AlignMarginsHeaderFooter: boolean;
        public readonly Application: Application;
        public BlackAndWhite: boolean;
        public BottomMargin: number;
        public CenterFooter: string;
        public readonly CenterFooterPicture: Graphic;
        public CenterHeader: string;
        public readonly CenterHeaderPicture: Graphic;
        public CenterHorizontally: boolean;
        public CenterVertically: boolean;
        public ChartSize: XlObjectSize;
        public readonly Creator: XlCreator;
        public DifferentFirstPageHeaderFooter: boolean;
        public Draft: boolean;
        public readonly EvenPage: Page;
        public readonly FirstPage: Page;
        public FirstPageNumber: number;
        public FitToPagesTall: any;
        public FitToPagesWide: any;
        public FooterMargin: number;
        public HeaderMargin: number;
        public LeftFooter: string;
        public readonly LeftFooterPicture: Graphic;
        public LeftHeader: string;
        public readonly LeftHeaderPicture: Graphic;
        public LeftMargin: number;
        public OddAndEvenPagesHeaderFooter: boolean;
        public Order: XlOrder;
        public Orientation: XlPageOrientation;
        public readonly Pages: Pages;
        public PaperSize: XlPaperSize;
        public readonly Parent: any;
        public PrintArea: string;
        public PrintComments: XlPrintLocation;
        public PrintErrors: XlPrintErrors;
        public PrintGridlines: boolean;
        public PrintHeadings: boolean;
        public PrintNotes: boolean;
        public PrintQuality(Index?: any): any;
        public PrintTitleColumns: string;
        public PrintTitleRows: string;
        public RightFooter: string;
        public readonly RightFooterPicture: Graphic;
        public RightHeader: string;
        public readonly RightHeaderPicture: Graphic;
        public RightMargin: number;
        public ScaleWithDocHeaderFooter: boolean;
        public TopMargin: number;
        public Zoom: any;
    }

    class Pane {
        private 'Excel.Pane_typekey': Pane;
        private constructor();
        public Activate(): boolean;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Index: number;
        public LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): any;
        public readonly Parent: any;
        public PointsToScreenPixelsX(Points: number): number;
        public PointsToScreenPixelsY(Points: number): number;
        public ScrollColumn: number;
        public ScrollIntoView(Left: number, Top: number, Width: number, Height: number, Start?: any): void;
        public ScrollRow: number;
        public SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): any;
        public readonly VisibleRange: Range;
    }

    class Panes {
        private 'Excel.Panes_typekey': Panes;
        private constructor();
        public _Default(Index: number): Pane;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): Pane;
        public readonly Parent: any;
    }

    class Parameter {
        private 'Excel.Parameter_typekey': Parameter;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public DataType: XlParameterDataType;
        public Name: string;
        public readonly Parent: any;
        public readonly PromptString: string;
        public RefreshOnChange: boolean;
        public SetParam(Type: XlParameterType, Value: any): void;
        public readonly SourceRange: Range;
        public readonly Type: XlParameterType;
        public readonly Value: any;
    }

    class Parameters {
        private 'Excel.Parameters_typekey': Parameters;
        private constructor();
        public _Default(Index: any): Parameter;
        public Add(Name: string, iDataType?: any): Parameter;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Item(Index: any): Parameter;
        public readonly Parent: any;
    }

    class Phonetic {
        private 'Excel.Phonetic_typekey': Phonetic;
        private constructor();
        public Alignment: number;
        public readonly Application: Application;
        public CharacterType: number;
        public readonly Creator: XlCreator;
        public readonly Font: Font;
        public readonly Parent: any;
        public Text: string;
        public Visible: boolean;
    }

    class Phonetics {
        private 'Excel.Phonetics_typekey': Phonetics;
        private constructor();
        public _Default(Index: number): any;
        public Add(Start: number, Length: number, Text: string): void;
        public Alignment: number;
        public readonly Application: Application;
        public CharacterType: number;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Font: Font;
        public Item(Index: number): any;
        public readonly Length: number;
        public readonly Parent: any;
        public readonly Start: number;
        public Text: string;
        public Visible: boolean;
    }

    class PictureFormat {
        private 'Excel.PictureFormat_typekey': PictureFormat;
        private constructor();
        public readonly Application: any;
        public Brightness: number;
        public ColorType: Office.MsoPictureColorType;
        public Contrast: number;
        public readonly Creator: number;
        public readonly Crop: Office.Crop;
        public CropBottom: number;
        public CropLeft: number;
        public CropRight: number;
        public CropTop: number;
        public IncrementBrightness(Increment: number): void;
        public IncrementContrast(Increment: number): void;
        public readonly Parent: any;
        public TransparencyColor: Office.MsoRGBType;
        public TransparentBackground: Office.MsoTriState;
    }

    class PivotAxis {
        private 'Excel.PivotAxis_typekey': PivotAxis;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
        public readonly PivotLines: PivotLines;
    }

    class PivotCache {
        private 'Excel.PivotCache_typekey': PivotCache;
        private constructor();
        public readonly ADOConnection: any;
        public readonly Application: Application;
        public BackgroundQuery: boolean;
        public CommandText: any;
        public CommandType: XlCmdType;
        public Connection: any;
        public CreatePivotTable(TableDestination: any, TableName?: any, ReadData?: any, DefaultVersion?: any): PivotTable;
        public readonly Creator: XlCreator;
        public EnableRefresh: boolean;
        public readonly Index: number;
        public readonly IsConnected: boolean;
        public LocalConnection: any;
        public MaintainConnection: boolean;
        public MakeConnection(): void;
        public readonly MemoryUsed: number;
        public MissingItemsLimit: XlPivotTableMissingItems;
        public readonly OLAP: boolean;
        public OptimizeCache: boolean;
        public readonly Parent: any;
        public readonly QueryType: XlQueryType;
        public readonly RecordCount: number;
        public Recordset: any;
        public Refresh(): void;
        public readonly RefreshDate: VarDate;
        public readonly RefreshName: string;
        public RefreshOnFileOpen: boolean;
        public RefreshPeriod: number;
        public ResetTimer(): void;
        public RobustConnect: XlRobustConnect;
        public SaveAsODC(ODCFileName: string, Description?: any, Keywords?: any): void;
        public SavePassword: boolean;
        public SourceConnectionFile: string;
        public SourceData: any;
        public readonly SourceDataFile: string;
        public readonly SourceType: XlPivotTableSourceType;
        public Sql: any;
        public UpgradeOnRefresh: boolean;
        public UseLocalConnection: boolean;
        public readonly Version: XlPivotTableVersionList;
        public readonly WorkbookConnection: WorkbookConnection;
    }

    class PivotCaches {
        private 'Excel.PivotCaches_typekey': PivotCaches;
        private constructor();
        public _Default(Index: any): PivotCache;
        public Add(SourceType: XlPivotTableSourceType, SourceData?: any): PivotCache;
        public readonly Application: Application;
        public readonly Count: number;
        public Create(SourceType: XlPivotTableSourceType, SourceData?: any, Version?: any): PivotCache;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotCache;
        public readonly Parent: any;
    }

    class PivotCell {
        private 'Excel.PivotCell_typekey': PivotCell;
        private constructor();
        public AllocateChange(): void;
        public readonly Application: Application;
        public readonly CellChanged: XlCellChangedState;
        public readonly ColumnItems: PivotItemList;
        public readonly Creator: XlCreator;
        public readonly CustomSubtotalFunction: XlConsolidationFunction;
        public readonly DataField: PivotField;
        public readonly DataSourceValue: any;
        public DiscardChange(): void;
        public readonly Dummy18: string;
        public readonly MDX: string;
        public readonly Parent: any;
        public readonly PivotCellType: XlPivotCellType;
        public readonly PivotColumnLine: PivotLine;
        public readonly PivotField: PivotField;
        public readonly PivotItem: PivotItem;
        public readonly PivotRowLine: PivotLine;
        public readonly PivotTable: PivotTable;
        public readonly Range: Range;
        public readonly RowItems: PivotItemList;
    }

    class PivotField {
        private 'Excel.PivotField_typekey': PivotField;
        private constructor();
        public _AutoSort(Order: number, Field: string): void;
        public _Default: string;
        public AddPageItem(Item: string, ClearList?: any): void;
        public readonly AllItemsVisible: boolean;
        public readonly Application: Application;
        public AutoShow(Type: number, Range: number, Count: number, Field: string): void;
        public readonly AutoShowCount: number;
        public readonly AutoShowField: string;
        public readonly AutoShowRange: number;
        public readonly AutoShowType: number;
        public AutoSort(Order: number, Field: string, PivotLine?: any, CustomSubtotal?: any): void;
        public readonly AutoSortCustomSubtotal: number;
        public readonly AutoSortField: string;
        public readonly AutoSortOrder: number;
        public readonly AutoSortPivotLine: PivotLine;
        public BaseField: any;
        public BaseItem: any;
        public CalculatedItems(): CalculatedItems;
        public Calculation: XlPivotFieldCalculation;
        public Caption: string;
        public readonly ChildField: PivotField;
        public ChildItems(Index?: any): any;
        public ClearAllFilters(): void;
        public ClearLabelFilters(): void;
        public ClearManualFilter(): void;
        public ClearValueFilters(): void;
        public readonly Creator: XlCreator;
        public readonly CubeField: CubeField;
        public CurrentPage: any;
        public CurrentPageList: any;
        public CurrentPageName: string;
        public DatabaseSort: boolean;
        public readonly DataRange: Range;
        public readonly DataType: XlPivotFieldDataType;
        public Delete(): void;
        public readonly DisplayAsCaption: boolean;
        public DisplayAsTooltip: boolean;
        public DisplayInReport: boolean;
        public DragToColumn: boolean;
        public DragToData: boolean;
        public DragToHide: boolean;
        public DragToPage: boolean;
        public DragToRow: boolean;
        public DrilledDown: boolean;
        public DrillTo(Field: string): void;
        public EnableItemSelection: boolean;
        public EnableMultiplePageItems: boolean;
        public Formula: string;
        public Function: XlConsolidationFunction;
        public readonly GroupLevel: any;
        public Hidden: boolean;
        public HiddenItems(Index?: any): any;
        public HiddenItemsList: any;
        public IncludeNewItemsInFilter: boolean;
        public readonly IsCalculated: boolean;
        public readonly IsMemberProperty: boolean;
        public readonly LabelRange: Range;
        public LayoutBlankLine: boolean;
        public LayoutCompactRow: boolean;
        public LayoutForm: XlLayoutFormType;
        public LayoutPageBreak: boolean;
        public LayoutSubtotalLocation: XlSubtototalLocationType;
        public MemberPropertyCaption: string;
        public readonly MemoryUsed: number;
        public Name: string;
        public NumberFormat: string;
        public Orientation: XlPivotFieldOrientation;
        public readonly Parent: any;
        public readonly ParentField: PivotField;
        public ParentItems(Index?: any): any;
        public readonly PivotFilters: PivotFilters;
        public PivotItems(Index?: any): any;
        public Position: any;
        public PropertyOrder: number;
        public readonly PropertyParentField: PivotField;
        public RepeatLabels: boolean;
        public ServerBased: boolean;
        public ShowAllItems: boolean;
        public ShowDetail: boolean;
        public readonly ShowingInAxis: boolean;
        public readonly SourceCaption: string;
        public readonly SourceName: string;
        public StandardFormula: string;
        public SubtotalName: string;
        public Subtotals(Index?: any): any;
        public readonly TotalLevels: any;
        public UseMemberPropertyAsCaption: boolean;
        public Value: string;
        public VisibleItems(Index?: any): any;
        public VisibleItemsList: any;
    }

    class PivotFields {
        private 'Excel.PivotFields_typekey': PivotFields;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): any;
        public readonly Parent: PivotTable;
    }

    class PivotFilter {
        private 'Excel.PivotFilter_typekey': PivotFilter;
        private constructor();
        public readonly Active: boolean;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly DataCubeField: CubeField;
        public readonly DataField: PivotField;
        public Delete(): void;
        public readonly Description: string;
        public readonly FilterType: XlPivotFilterType;
        public readonly IsMemberPropertyFilter: boolean;
        public readonly MemberPropertyField: PivotField;
        public readonly Name: string;
        public Order: number;
        public readonly Parent: any;
        public readonly PivotField: PivotField;
        public readonly Value1: any;
        public readonly Value2: any;
    }

    class PivotFilters {
        private 'Excel.PivotFilters_typekey': PivotFilters;
        private constructor();
        public _Default(Index: any): PivotFilter;
        public Add(Type: XlPivotFilterType, DataField?: any, Value1?: any, Value2?: any, Order?: any, Name?: any, Description?: any, MemberPropertyField?: any): PivotFilter;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotFilter;
        public readonly Parent: any;
    }

    class PivotFormula {
        private 'Excel.PivotFormula_typekey': PivotFormula;
        private constructor();
        public _Default: string;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Formula: string;
        public Index: number;
        public readonly Parent: any;
        public StandardFormula: string;
        public Value: string;
    }

    class PivotFormulas {
        private 'Excel.PivotFormulas_typekey': PivotFormulas;
        private constructor();
        public _Add(Formula: string): PivotFormula;
        public _Default(Index: any): PivotFormula;
        public Add(Formula: string, UseStandardFormula?: any): PivotFormula;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotFormula;
        public readonly Parent: any;
    }

    class PivotItem {
        private 'Excel.PivotItem_typekey': PivotItem;
        private constructor();
        public _Default: string;
        public readonly Application: Application;
        public Caption: string;
        public ChildItems(Index?: any): any;
        public readonly Creator: XlCreator;
        public readonly DataRange: Range;
        public Delete(): void;
        public DrilledDown: boolean;
        public DrillTo(Field: string): void;
        public Formula: string;
        public readonly IsCalculated: boolean;
        public readonly LabelRange: Range;
        public Name: string;
        public readonly Parent: PivotField;
        public readonly ParentItem: PivotItem;
        public readonly ParentShowDetail: boolean;
        public Position: number;
        public readonly RecordCount: number;
        public ShowDetail: boolean;
        public readonly SourceName: any;
        public readonly SourceNameStandard: string;
        public StandardFormula: string;
        public Value: string;
        public Visible: boolean;
    }

    class PivotItemList {
        private 'Excel.PivotItemList_typekey': PivotItemList;
        private constructor();
        public _Default(Field: any): PivotItem;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotItem;
        public readonly Parent: any;
    }

    class PivotLayout {
        private 'Excel.PivotLayout_typekey': PivotLayout;
        private constructor();
        public AddFields(RowFields?: any, ColumnFields?: any, PageFields?: any, AppendField?: any): void;
        public readonly Application: Application;
        public ColumnFields(Index?: any): any;
        public readonly Creator: XlCreator;
        public readonly CubeFields: CubeFields;
        public DataFields(Index?: any): any;
        public HiddenFields(Index?: any): any;
        public InnerDetail: string;
        public PageFields(Index?: any): any;
        public readonly Parent: any;
        public readonly PivotCache: PivotCache;
        public PivotFields(Index?: any): any;
        public readonly PivotTable: PivotTable;
        public RowFields(Index?: any): any;
        public VisibleFields(Index?: any): any;
    }

    class PivotLine {
        private 'Excel.PivotLine_typekey': PivotLine;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly LineType: XlPivotLineType;
        public readonly Parent: any;
        public readonly PivotLineCells: PivotLineCells;
        public readonly Position: number;
    }

    class PivotLineCells {
        private 'Excel.PivotLineCells_typekey': PivotLineCells;
        private constructor();
        public _Default(Index: any): PivotCell;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotCell;
        public readonly Parent: any;
    }

    class PivotLines {
        private 'Excel.PivotLines_typekey': PivotLines;
        private constructor();
        public _Default(Index: any): PivotLine;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotLine;
        public readonly Parent: any;
    }

    class PivotTable {
        private 'Excel.PivotTable_typekey': PivotTable;
        private constructor();
        public _Default: string;

        /** @param Excel.XlPTSelectionMode [Mode=0] */
        public _PivotSelect(Name: string, Mode?: XlPTSelectionMode): void;
        public readonly ActiveFilters: PivotFilters;
        public AddDataField(Field: any, Caption?: any, Function?: any): PivotField;
        public AddFields(RowFields?: any, ColumnFields?: any, PageFields?: any, AddToTable?: any): any;
        public AllocateChanges(): void;
        public Allocation: XlAllocation;
        public AllocationMethod: XlAllocationMethod;
        public AllocationValue: XlAllocationValue;
        public AllocationWeightExpression: string;
        public AllowMultipleFilters: boolean;
        public AlternativeText: string;
        public readonly Application: Application;
        public CacheIndex: number;
        public CalculatedFields(): CalculatedFields;
        public readonly CalculatedMembers: CalculatedMembers;
        public CalculatedMembersInFilters: boolean;
        public ChangeConnection(conn: WorkbookConnection): void;
        public readonly ChangeList: PivotTableChangeList;
        public ChangePivotCache(PivotCache: any): void;
        public ClearAllFilters(): void;
        public ClearTable(): void;
        public ColumnFields(Index?: any): any;
        public ColumnGrand: boolean;
        public readonly ColumnRange: Range;
        public CommitChanges(): void;
        public CompactLayoutColumnHeader: string;
        public CompactLayoutRowHeader: string;
        public CompactRowIndent: number;
        public ConvertToFormulas(ConvertFilters: boolean): void;
        public CreateCubeFile(File: string, Measures?: any, Levels?: any, Members?: any, Properties?: any): string;
        public readonly Creator: XlCreator;
        public readonly CubeFields: CubeFields;
        public readonly DataBodyRange: Range;
        public DataFields(Index?: any): any;
        public readonly DataLabelRange: Range;
        public readonly DataPivotField: PivotField;
        public DiscardChanges(): void;
        public DisplayContextTooltips: boolean;
        public DisplayEmptyColumn: boolean;
        public DisplayEmptyRow: boolean;
        public DisplayErrorString: boolean;
        public DisplayFieldCaptions: boolean;
        public DisplayImmediateItems: boolean;
        public DisplayMemberPropertyTooltips: boolean;
        public DisplayNullString: boolean;
        public Dummy15(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public EnableDataValueEditing: boolean;
        public EnableDrilldown: boolean;
        public EnableFieldDialog: boolean;
        public EnableFieldList: boolean;
        public EnableWizard: boolean;
        public EnableWriteback: boolean;
        public ErrorString: string;
        public FieldListSortAscending: boolean;
        public Format(Format: XlPivotFormatType): void;
        public GetData(Name: string): number;
        public GetPivotData(
            DataField?: any, Field1?: any, Item1?: any, Field2?: any, Item2?: any, Field3?: any, Item3?: any, Field4?: any, Item4?: any, Field5?: any, Item5?: any,
            Field6?: any, Item6?: any, Field7?: any, Item7?: any, Field8?: any, Item8?: any, Field9?: any, Item9?: any, Field10?: any, Item10?: any, Field11?: any,
            Item11?: any, Field12?: any, Item12?: any, Field13?: any, Item13?: any, Field14?: any, Item14?: any): Range;
        public GrandTotalName: string;
        public HasAutoFormat: boolean;
        public HiddenFields(Index?: any): any;
        public InGridDropZones: boolean;
        public InnerDetail: string;
        public LayoutRowDefault: XlLayoutRowType;
        public ListFormulas(): void;
        public Location: string;
        public ManualUpdate: boolean;
        public readonly MDX: string;
        public MergeLabels: boolean;
        public Name: string;
        public NullString: string;
        public PageFieldOrder: number;
        public PageFields(Index?: any): any;
        public PageFieldStyle: string;
        public PageFieldWrapCount: number;
        public readonly PageRange: Range;
        public readonly PageRangeCells: Range;
        public readonly Parent: any;
        public PivotCache(): PivotCache;
        public readonly PivotColumnAxis: PivotAxis;
        public PivotFields(Index?: any): any;
        public readonly PivotFormulas: PivotFormulas;
        public readonly PivotRowAxis: PivotAxis;

        /** @param Excel.XlPTSelectionMode [Mode=0] */
        public PivotSelect(Name: string, Mode?: XlPTSelectionMode, UseStandardName?: any): void;
        public PivotSelection: string;
        public PivotSelectionStandard: string;
        public PivotTableWizard(
            SourceType?: any, SourceData?: any, TableDestination?: any, TableName?: any, RowGrand?: any, ColumnGrand?: any, SaveData?: any, HasAutoFormat?: any,
            AutoPage?: any, Reserved?: any, BackgroundQuery?: any, OptimizeCache?: any, PageFieldOrder?: any, PageFieldWrapCount?: any, ReadData?: any, Connection?: any): void;
        public PreserveFormatting: boolean;
        public PrintDrillIndicators: boolean;
        public PrintTitles: boolean;
        public RefreshDataSourceValues(): void;
        public readonly RefreshDate: VarDate;
        public readonly RefreshName: string;
        public RefreshTable(): boolean;
        public RepeatAllLabels(Repeat: XlPivotFieldRepeatLabels): void;
        public RepeatItemsOnEachPrintedPage: boolean;
        public RowAxisLayout(RowLayout: XlLayoutRowType): void;
        public RowFields(Index?: any): any;
        public RowGrand: boolean;
        public readonly RowRange: Range;
        public SaveData: boolean;
        public SelectionMode: XlPTSelectionMode;
        public ShowCellBackgroundFromOLAP: boolean;
        public ShowDrillIndicators: boolean;
        public ShowPageMultipleItemLabel: boolean;
        public ShowPages(PageField?: any): any;
        public ShowTableStyleColumnHeaders: boolean;
        public ShowTableStyleColumnStripes: boolean;
        public ShowTableStyleLastColumn: boolean;
        public ShowTableStyleRowHeaders: boolean;
        public ShowTableStyleRowStripes: boolean;
        public ShowValuesRow: boolean;
        public readonly Slicers: Slicers;
        public SmallGrid: boolean;
        public SortUsingCustomLists: boolean;
        public SourceData: any;
        public SubtotalHiddenPageItems: boolean;
        public SubtotalLocation(Location: XlSubtototalLocationType): void;
        public Summary: string;
        public readonly TableRange1: Range;
        public readonly TableRange2: Range;
        public TableStyle: string;
        public TableStyle2: any;
        public Tag: string;
        public TotalsAnnotation: boolean;
        public Update(): void;
        public VacatedStyle: string;
        public Value: string;
        public readonly Version: XlPivotTableVersionList;
        public ViewCalculatedMembers: boolean;
        public VisibleFields(Index?: any): any;
        public VisualTotals: boolean;
        public VisualTotalsForSets: boolean;
    }

    class PivotTableChangeList {
        private 'Excel.PivotTableChangeList_typekey': PivotTableChangeList;
        private constructor();
        public _Default(Index: any): ValueChange;
        public Add(Tuple: string, Value: number, AllocationValue?: any, AllocationMethod?: any, AllocationWeightExpression?: any): ValueChange;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): ValueChange;
        public readonly Parent: any;
    }

    class PlotArea {
        private 'Excel.PlotArea_typekey': PlotArea;
        private constructor();
        public readonly _InsideHeight: number;
        public readonly _InsideLeft: number;
        public readonly _InsideTop: number;
        public readonly _InsideWidth: number;
        public readonly Application: Application;
        public readonly Border: Border;
        public ClearFormats(): any;
        public readonly Creator: XlCreator;
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

    class ProtectedViewWindow {
        private 'Excel.ProtectedViewWindow_typekey': ProtectedViewWindow;
        private constructor();
        public readonly _Default: string;
        public Activate(): void;
        public Caption: string;
        public Close(): boolean;
        public Edit(WriteResPassword?: any, UpdateLinks?: any): Workbook;
        public EnableResize: boolean;
        public Height: number;
        public Left: number;
        public readonly SourceName: string;
        public readonly SourcePath: string;
        public Top: number;
        public Visible: boolean;
        public Width: number;
        public WindowState: XlProtectedViewWindowState;
        public readonly Workbook: Workbook;
    }

    class ProtectedViewWindows {
        private 'Excel.ProtectedViewWindows_typekey': ProtectedViewWindows;
        private constructor();
        public _Default(Index: any): ProtectedViewWindow;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): ProtectedViewWindow;
        public Open(Filename: string, Password?: any, AddToMru?: any, RepairMode?: any): ProtectedViewWindow;
        public readonly Parent: any;
    }

    class Protection {
        private 'Excel.Protection_typekey': Protection;
        private constructor();
        public readonly AllowDeletingColumns: boolean;
        public readonly AllowDeletingRows: boolean;
        public readonly AllowEditRanges: AllowEditRanges;
        public readonly AllowFiltering: boolean;
        public readonly AllowFormattingCells: boolean;
        public readonly AllowFormattingColumns: boolean;
        public readonly AllowFormattingRows: boolean;
        public readonly AllowInsertingColumns: boolean;
        public readonly AllowInsertingHyperlinks: boolean;
        public readonly AllowInsertingRows: boolean;
        public readonly AllowSorting: boolean;
        public readonly AllowUsingPivotTables: boolean;
    }

    class PublishObject {
        private 'Excel.PublishObject_typekey': PublishObject;
        private constructor();
        public readonly Application: Application;
        public AutoRepublish: boolean;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly DivID: string;
        public Filename: string;
        public HtmlType: XlHtmlType;
        public readonly Parent: any;
        public Publish(Create?: any): void;
        public readonly Sheet: string;
        public readonly Source: string;
        public readonly SourceType: XlSourceType;
        public Title: string;
    }

    class PublishObjects {
        private 'Excel.PublishObjects_typekey': PublishObjects;
        private constructor();
        public _Default(Index: any): PublishObject;
        public Add(SourceType: XlSourceType, Filename: string, Sheet?: any, Source?: any, HtmlType?: any, DivID?: any, Title?: any): PublishObject;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Item(Index: any): PublishObject;
        public readonly Parent: any;
        public Publish(): void;
    }

    class QueryTable {
        private 'Excel.QueryTable_typekey': QueryTable;
        private constructor();
        public AdjustColumnWidth: boolean;
        public readonly Application: Application;
        public BackgroundQuery: boolean;
        public CancelRefresh(): void;
        public CommandText: any;
        public CommandType: XlCmdType;
        public Connection: any;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Destination: Range;
        public EditWebPage: any;
        public EnableEditing: boolean;
        public EnableRefresh: boolean;
        public readonly FetchedRowOverflow: boolean;
        public FieldNames: boolean;
        public FillAdjacentFormulas: boolean;
        public HasAutoFormat: boolean;
        public readonly ListObject: ListObject;
        public MaintainConnection: boolean;
        public Name: string;
        public readonly Parameters: Parameters;
        public readonly Parent: any;
        public PostText: string;
        public PreserveColumnInfo: boolean;
        public PreserveFormatting: boolean;
        public readonly QueryType: XlQueryType;
        public Recordset: any;
        public Refresh(BackgroundQuery?: any): boolean;
        public readonly Refreshing: boolean;
        public RefreshOnFileOpen: boolean;
        public RefreshPeriod: number;
        public RefreshStyle: XlCellInsertionMode;
        public ResetTimer(): void;
        public readonly ResultRange: Range;
        public RobustConnect: XlRobustConnect;
        public RowNumbers: boolean;
        public SaveAsODC(ODCFileName: string, Description?: any, Keywords?: any): void;
        public SaveData: boolean;
        public SavePassword: boolean;
        public readonly Sort: Sort;
        public SourceConnectionFile: string;
        public SourceDataFile: string;
        public Sql: any;
        public TablesOnlyFromHTML: boolean;
        public TextFileColumnDataTypes: any;
        public TextFileCommaDelimiter: boolean;
        public TextFileConsecutiveDelimiter: boolean;
        public TextFileDecimalSeparator: string;
        public TextFileFixedColumnWidths: any;
        public TextFileOtherDelimiter: string;
        public TextFileParseType: XlTextParsingType;
        public TextFilePlatform: number;
        public TextFilePromptOnRefresh: boolean;
        public TextFileSemicolonDelimiter: boolean;
        public TextFileSpaceDelimiter: boolean;
        public TextFileStartRow: number;
        public TextFileTabDelimiter: boolean;
        public TextFileTextQualifier: XlTextQualifier;
        public TextFileThousandsSeparator: string;
        public TextFileTrailingMinusNumbers: boolean;
        public TextFileVisualLayout: XlTextVisualLayoutType;
        public WebConsecutiveDelimitersAsOne: boolean;
        public WebDisableDateRecognition: boolean;
        public WebDisableRedirections: boolean;
        public WebFormatting: XlWebFormatting;
        public WebPreFormattedTextToColumns: boolean;
        public WebSelectionType: XlWebSelectionType;
        public WebSingleBlockTextImport: boolean;
        public WebTables: string;
        public readonly WorkbookConnection: WorkbookConnection;
    }

    class QueryTables {
        private 'Excel.QueryTables_typekey': QueryTables;
        private constructor();
        public _Default(Index: any): QueryTable;
        public Add(Connection: any, Destination: Range, Sql?: any): QueryTable;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): QueryTable;
        public readonly Parent: any;
    }

    class Range {
        private 'Excel.Range_typekey': Range;
        private constructor();
        public __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): any;

        /**
         * @param Excel.XlBorderWeight [Weight=2]
         * @param Excel.XlColorIndex [ColorIndex=-4105]
         */
        public _BorderAround(LineStyle: any, Weight?: XlBorderWeight, ColorIndex?: XlColorIndex, Color?: any): any;
        public _Default(RowIndex?: any, ColumnIndex?: any): any;

        /**
         * @param Excel.XlPasteType [Paste=-4104]
         * @param Excel.XlPasteSpecialOperation [Operation=-4142]
         */
        public _PasteSpecial(Paste?: XlPasteType, Operation?: XlPasteSpecialOperation, SkipBlanks?: any, Transpose?: any): any;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): any;
        public Activate(): any;
        public AddComment(Text?: any): Comment;
        public AddIndent: any;

        /** @param Excel.XlReferenceStyle [ReferenceStyle=1] */
        public Address(RowAbsolute: any, ColumnAbsolute: any, ReferenceStyle?: XlReferenceStyle, External?: any, RelativeTo?: any): string;

        /** @param Excel.XlReferenceStyle [ReferenceStyle=1] */
        public AddressLocal(RowAbsolute: any, ColumnAbsolute: any, ReferenceStyle?: XlReferenceStyle, External?: any, RelativeTo?: any): string;
        public AdvancedFilter(Action: XlFilterAction, CriteriaRange?: any, CopyToRange?: any, Unique?: any): any;
        public AllocateChanges(): void;
        public readonly AllowEdit: boolean;
        public readonly Application: Application;

        /** @param Excel.XlApplyNamesOrder [Order=1] */
        public ApplyNames(Names: any, IgnoreRelativeAbsolute: any, UseRowColumnNames: any, OmitColumn: any, OmitRow: any, Order?: XlApplyNamesOrder, AppendLast?: any): any;
        public ApplyOutlineStyles(): any;
        public readonly Areas: Areas;
        public AutoComplete(String: string): string;

        /** @param Excel.XlAutoFillType [Type=0] */
        public AutoFill(Destination: Range, Type?: XlAutoFillType): any;

        /** @param Excel.XlAutoFilterOperator [Operator=1] */
        public AutoFilter(Field: any, Criteria1: any, Operator?: XlAutoFilterOperator, Criteria2?: any, VisibleDropDown?: any): any;
        public AutoFit(): any;

        /** @param Excel.XlRangeAutoFormat [Format=1] */
        public AutoFormat(Format?: XlRangeAutoFormat, Number?: any, Font?: any, Alignment?: any, Border?: any, Pattern?: any, Width?: any): any;
        public AutoOutline(): any;

        /**
         * @param Excel.XlBorderWeight [Weight=2]
         * @param Excel.XlColorIndex [ColorIndex=-4105]
         */
        public BorderAround(LineStyle: any, Weight?: XlBorderWeight, ColorIndex?: XlColorIndex, Color?: any, ThemeColor?: any): any;
        public readonly Borders: Borders;
        public Calculate(): any;
        public CalculateRowMajorOrder(): any;
        public readonly Cells: Range;
        public Characters(Start?: any, Length?: any): Characters;
        public CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any): any;
        public Clear(): any;
        public ClearComments(): void;
        public ClearContents(): any;
        public ClearFormats(): any;
        public ClearHyperlinks(): void;
        public ClearNotes(): any;
        public ClearOutline(): any;
        public readonly Column: number;
        public ColumnDifferences(Comparison: any): Range;
        public readonly Columns: Range;
        public ColumnWidth: any;
        public readonly Comment: Comment;
        public Consolidate(Sources?: any, Function?: any, TopRow?: any, LeftColumn?: any, CreateLinks?: any): any;
        public Copy(Destination?: any): any;
        public CopyFromRecordset(Data: any, MaxRows?: any, MaxColumns?: any): number;

        /**
         * @param Excel.XlPictureAppearance [Appearance=1]
         * @param Excel.XlCopyPictureFormat [Format=-4147]
         */
        public CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        public readonly Count: number;
        public readonly CountLarge: any;
        public CreateNames(Top?: any, Left?: any, Bottom?: any, Right?: any): any;

        /** @param Excel.XlPictureAppearance [Appearance=1] */
        public CreatePublisher(Edition: any, Appearance?: XlPictureAppearance, ContainsPICT?: any, ContainsBIFF?: any, ContainsRTF?: any, ContainsVALU?: any): any;
        public readonly Creator: XlCreator;
        public readonly CurrentArray: Range;
        public readonly CurrentRegion: Range;
        public Cut(Destination?: any): any;

        /**
         * @param Excel.XlDataSeriesType [Type=-4132]
         * @param Excel.XlDataSeriesDate [Date=1]
         */
        public DataSeries(Rowcol: any, Type?: XlDataSeriesType, Date?: XlDataSeriesDate, Step?: any, Stop?: any, Trend?: any): any;
        public Delete(Shift?: any): any;
        public readonly Dependents: Range;
        public DialogBox(): any;
        public readonly DirectDependents: Range;
        public readonly DirectPrecedents: Range;
        public Dirty(): void;
        public DiscardChanges(): void;
        public readonly DisplayFormat: DisplayFormat;

        /**
         * @param Excel.XlPictureAppearance [Appearance=1]
         * @param Excel.XlPictureAppearance [ChartSize=1]
         */
        public EditionOptions(Type: XlEditionType, Option: XlEditionOptionsOption, Name: any, Reference: any, Appearance?: XlPictureAppearance, ChartSize?: XlPictureAppearance, Format?: any): any;
        public End(Direction: XlDirection): Range;
        public readonly EntireColumn: Range;
        public readonly EntireRow: Range;
        public readonly Errors: Errors;
        public ExportAsFixedFormat(
            Type: XlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any,
            FixedFormatExtClassPtr?: any): void;
        public FillDown(): any;
        public FillLeft(): any;
        public FillRight(): any;
        public FillUp(): any;

        /** @param Excel.XlSearchDirection [SearchDirection=1] */
        public Find(What: any, After: any, LookIn: any, LookAt: any, SearchOrder: any, SearchDirection?: XlSearchDirection, MatchCase?: any, MatchByte?: any, SearchFormat?: any): Range;
        public FindNext(After?: any): Range;
        public FindPrevious(After?: any): Range;
        public readonly Font: Font;
        public readonly FormatConditions: FormatConditions;
        public Formula: any;
        public FormulaArray: any;
        public FormulaHidden: any;
        public FormulaLabel: XlFormulaLabel;
        public FormulaLocal: any;
        public FormulaR1C1: any;
        public FormulaR1C1Local: any;
        public FunctionWizard(): any;
        public GoalSeek(Goal: any, ChangingCell: Range): boolean;
        public Group(Start?: any, End?: any, By?: any, Periods?: any): any;
        public readonly HasArray: any;
        public readonly HasFormula: any;
        public readonly Height: any;
        public Hidden: any;
        public HorizontalAlignment: any;
        public readonly Hyperlinks: Hyperlinks;
        public ID: string;
        public IndentLevel: any;
        public Insert(Shift?: any, CopyOrigin?: any): any;
        public InsertIndent(InsertAmount: number): void;
        public readonly Interior: Interior;
        public Item(RowIndex: any, ColumnIndex?: any): any;
        public Justify(): any;
        public readonly Left: any;
        public readonly ListHeaderRows: number;
        public ListNames(): any;
        public readonly ListObject: ListObject;
        public readonly LocationInTable: XlLocationInTable;
        public Locked: any;
        public readonly MDX: string;
        public Merge(Across?: any): void;
        public readonly MergeArea: Range;
        public MergeCells: any;
        public Name: any;
        public NavigateArrow(TowardPrecedent?: any, ArrowNumber?: any, LinkNumber?: any): any;
        public readonly Next: Range;
        public NoteText(Text?: any, Start?: any, Length?: any): string;
        public NumberFormat: any;
        public NumberFormatLocal: any;
        public Offset(RowOffset?: any, ColumnOffset?: any): Range;
        public Orientation: any;
        public OutlineLevel: any;
        public PageBreak: number;
        public readonly Parent: any;
        public Parse(ParseLine?: any, Destination?: any): any;

        /**
         * @param Excel.XlPasteType [Paste=-4104]
         * @param Excel.XlPasteSpecialOperation [Operation=-4142]
         */
        public PasteSpecial(Paste?: XlPasteType, Operation?: XlPasteSpecialOperation, SkipBlanks?: any, Transpose?: any): any;
        public readonly Phonetic: Phonetic;
        public readonly Phonetics: Phonetics;
        public readonly PivotCell: PivotCell;
        public readonly PivotField: PivotField;
        public readonly PivotItem: PivotItem;
        public readonly PivotTable: PivotTable;
        public readonly Precedents: Range;
        public readonly PrefixCharacter: any;
        public readonly Previous: Range;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): any;
        public PrintPreview(EnableChanges?: any): any;
        public readonly QueryTable: QueryTable;
        public Range(Cell1: any, Cell2?: any): Range;
        public ReadingOrder: number;

        /** @param Excel.XlYesNoGuess [Header=2] */
        public RemoveDuplicates(Columns: any, Header?: XlYesNoGuess): void;
        public RemoveSubtotal(): any;
        public Replace(What: any, Replacement: any, LookAt?: any, SearchOrder?: any, MatchCase?: any, MatchByte?: any, SearchFormat?: any, ReplaceFormat?: any): boolean;
        public Resize(RowSize?: any, ColumnSize?: any): Range;
        public readonly Row: number;
        public RowDifferences(Comparison: any): Range;
        public RowHeight: any;
        public readonly Rows: Range;
        public Run(
            Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public Select(): any;
        public readonly ServerActions: Actions;
        public SetPhonetic(): void;
        public Show(): any;
        public ShowDependents(Remove?: any): any;
        public ShowDetail: any;
        public ShowErrors(): any;
        public ShowPrecedents(Remove?: any): any;
        public ShrinkToFit: any;
        public readonly SmartTags: SmartTags;

        /**
         * @param Excel.XlSortOrder [Order1=1]
         * @param Excel.XlSortOrder [Order2=1]
         * @param Excel.XlSortOrder [Order3=1]
         * @param Excel.XlYesNoGuess [Header=2]
         * @param Excel.XlSortOrientation [Orientation=2]
         * @param Excel.XlSortMethod [SortMethod=1]
         * @param Excel.XlSortDataOption [DataOption1=0]
         * @param Excel.XlSortDataOption [DataOption2=0]
         * @param Excel.XlSortDataOption [DataOption3=0]
         */
        public Sort(
            Key1: any, Order1?: XlSortOrder, Key2?: any, Type?: any, Order2?: XlSortOrder, Key3?: any, Order3?: XlSortOrder, Header?: XlYesNoGuess, OrderCustom?: any,
            MatchCase?: any, Orientation?: XlSortOrientation, SortMethod?: XlSortMethod, DataOption1?: XlSortDataOption, DataOption2?: XlSortDataOption, DataOption3?: XlSortDataOption): any;

        /**
         * @param Excel.XlSortMethod [SortMethod=1]
         * @param Excel.XlSortOrder [Order1=1]
         * @param Excel.XlSortOrder [Order2=1]
         * @param Excel.XlSortOrder [Order3=1]
         * @param Excel.XlYesNoGuess [Header=2]
         * @param Excel.XlSortOrientation [Orientation=2]
         * @param Excel.XlSortDataOption [DataOption1=0]
         * @param Excel.XlSortDataOption [DataOption2=0]
         * @param Excel.XlSortDataOption [DataOption3=0]
         */
        public SortSpecial(
            SortMethod?: XlSortMethod, Key1?: any, Order1?: XlSortOrder, Type?: any, Key2?: any, Order2?: XlSortOrder, Key3?: any, Order3?: XlSortOrder,
            Header?: XlYesNoGuess, OrderCustom?: any, MatchCase?: any, Orientation?: XlSortOrientation, DataOption1?: XlSortDataOption, DataOption2?: XlSortDataOption,
            DataOption3?: XlSortDataOption): any;
        public readonly SoundNote: SoundNote;
        public readonly SparklineGroups: SparklineGroups;
        public Speak(SpeakDirection?: any, SpeakFormulas?: any): void;
        public SpecialCells(Type: XlCellType, Value?: any): Range;
        public Style: any;

        /** @param Excel.XlSubscribeToFormat [Format=-4158] */
        public SubscribeTo(Edition: string, Format?: XlSubscribeToFormat): any;

        /** @param Excel.XlSummaryRow [SummaryBelowData=1] */
        public Subtotal(GroupBy: number, Function: XlConsolidationFunction, TotalList: any, Replace: any, PageBreaks: any, SummaryBelowData?: XlSummaryRow): any;
        public readonly Summary: any;
        public Table(RowInput?: any, ColumnInput?: any): any;
        public readonly Text: any;

        /**
         * @param Excel.XlTextParsingType [DataType=1]
         * @param Excel.XlTextQualifier [TextQualifier=1]
         */
        public TextToColumns(
            Destination: any, DataType?: XlTextParsingType, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any, Comma?: any,
            Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, DecimalSeparator?: any, ThousandsSeparator?: any, TrailingMinusNumbers?: any): any;
        public readonly Top: any;
        public Ungroup(): any;
        public UnMerge(): void;
        public UseStandardHeight: any;
        public UseStandardWidth: any;
        public readonly Validation: Validation;
        public Value(RangeValueDataType?: any): any;
        public Value2: any;
        public VerticalAlignment: any;
        public readonly Width: any;
        public readonly Worksheet: Worksheet;
        public WrapText: any;
        public readonly XPath: XPath;
    }

    class Ranges {
        private 'Excel.Ranges_typekey': Ranges;
        private constructor();
        public _Default(Index: any): Range;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Range;
        public readonly Parent: any;
    }

    class RecentFile {
        private 'Excel.RecentFile_typekey': RecentFile;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public Open(): Workbook;
        public readonly Parent: any;
        public readonly Path: string;
    }

    class RecentFiles {
        private 'Excel.RecentFiles_typekey': RecentFiles;
        private constructor();
        public _Default(Index: number): RecentFile;
        public Add(Name: string): RecentFile;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): RecentFile;
        public Maximum: number;
        public readonly Parent: any;
    }

    class Research {
        private 'Excel.Research_typekey': Research;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public IsResearchService(ServiceID: string): boolean;
        public readonly Parent: any;
        public Query(ServiceID: string, QueryString?: any, QueryLanguage?: any, UseSelection?: any, LaunchQuery?: any): any;
        public SetLanguagePair(LanguageFrom: number, LanguageTo: number): any;
    }

    class RoutingSlip {
        private 'Excel.RoutingSlip_typekey': RoutingSlip;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delivery: XlRoutingSlipDelivery;
        public Message: any;
        public readonly Parent: any;
        public Recipients(Index?: any): any;
        public Reset(): any;
        public ReturnWhenDone: boolean;
        public readonly Status: XlRoutingSlipStatus;
        public Subject: any;
        public TrackStatus: boolean;
    }

    class RTD {
        private 'Excel.RTD_typekey': RTD;
        private constructor();
        public RefreshData(): void;
        public RestartServers(): void;
        public ThrottleInterval: number;
    }

    class SeriesLines {
        private 'Excel.SeriesLines_typekey': SeriesLines;
        private constructor();
        public readonly Application: Application;
        public readonly Border: Border;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class ServerViewableItems {
        private 'Excel.ServerViewableItems_typekey': ServerViewableItems;
        private constructor();
        public _Default(Index: any): any;
        public Add(Obj: any): any;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(Index: any): void;
        public DeleteAll(): void;
        public Item(Index: any): any;
        public readonly Parent: any;
    }

    class ShadowFormat {
        private 'Excel.ShadowFormat_typekey': ShadowFormat;
        private constructor();
        public readonly Application: any;
        public Blur: number;
        public readonly Creator: number;
        public ForeColor: ColorFormat;
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
        private 'Excel.Shape_typekey': Shape;
        private constructor();
        public readonly Adjustments: Adjustments;
        public AlternativeText: string;
        public readonly Application: Application;
        public Apply(): void;
        public AutoShapeType: Office.MsoAutoShapeType;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public BlackWhiteMode: Office.MsoBlackWhiteMode;
        public readonly BottomRightCell: Range;
        public readonly Callout: CalloutFormat;
        public CanvasCropBottom(Increment: number): void;
        public CanvasCropLeft(Increment: number): void;
        public CanvasCropRight(Increment: number): void;
        public CanvasCropTop(Increment: number): void;
        public readonly CanvasItems: Office.CanvasShapes;
        public readonly Chart: Chart;
        public readonly Child: Office.MsoTriState;
        public readonly ConnectionSiteCount: number;
        public readonly Connector: Office.MsoTriState;
        public readonly ConnectorFormat: ConnectorFormat;
        public readonly ControlFormat: ControlFormat;
        public Copy(): void;
        public CopyPicture(Appearance?: any, Format?: any): void;
        public readonly Creator: XlCreator;
        public Cut(): void;
        public Delete(): void;
        public readonly Diagram: Diagram;
        public readonly DiagramNode: DiagramNode;
        public readonly DrawingObject: any;
        public Duplicate(): Shape;
        public readonly Fill: FillFormat;
        public Flip(FlipCmd: Office.MsoFlipCmd): void;
        public readonly FormControlType: XlFormControl;
        public readonly Glow: Office.GlowFormat;
        public readonly GroupItems: GroupShapes;
        public readonly HasChart: Office.MsoTriState;
        public readonly HasDiagram: Office.MsoTriState;
        public readonly HasDiagramNode: Office.MsoTriState;
        public readonly HasSmartArt: Office.MsoTriState;
        public Height: number;
        public readonly HorizontalFlip: Office.MsoTriState;
        public readonly Hyperlink: Hyperlink;
        public readonly ID: number;
        public IncrementLeft(Increment: number): void;
        public IncrementRotation(Increment: number): void;
        public IncrementTop(Increment: number): void;
        public Left: number;
        public readonly Line: LineFormat;
        public readonly LinkFormat: LinkFormat;
        public LockAspectRatio: Office.MsoTriState;
        public Locked: boolean;
        public Name: string;
        public readonly Nodes: ShapeNodes;
        public readonly OLEFormat: OLEFormat;
        public OnAction: string;
        public readonly Parent: any;
        public readonly ParentGroup: Shape;
        public PickUp(): void;
        public readonly PictureFormat: PictureFormat;
        public Placement: XlPlacement;
        public readonly Reflection: Office.ReflectionFormat;
        public RerouteConnections(): void;
        public Rotation: number;
        public ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: any): void;
        public ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: any): void;
        public readonly Script: Office.Script;
        public Select(Replace?: any): void;
        public SetShapesDefaultProperties(): void;
        public readonly Shadow: ShadowFormat;
        public ShapeStyle: Office.MsoShapeStyleIndex;
        public readonly SmartArt: Office.SmartArt;
        public readonly SoftEdge: Office.SoftEdgeFormat;
        public readonly TextEffect: TextEffectFormat;
        public readonly TextFrame: TextFrame;
        public readonly TextFrame2: TextFrame2;
        public readonly ThreeD: ThreeDFormat;
        public Title: string;
        public Top: number;
        public readonly TopLeftCell: Range;
        public readonly Type: Office.MsoShapeType;
        public Ungroup(): ShapeRange;
        public readonly VerticalFlip: Office.MsoTriState;
        public readonly Vertices: any;
        public Visible: Office.MsoTriState;
        public Width: number;
        public ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        public readonly ZOrderPosition: number;
    }

    class ShapeNode {
        private 'Excel.ShapeNode_typekey': ShapeNode;
        private constructor();
        public readonly Application: any;
        public readonly Creator: number;
        public readonly EditingType: Office.MsoEditingType;
        public readonly Parent: any;
        public readonly Points: any;
        public readonly SegmentType: Office.MsoSegmentType;
    }

    class ShapeNodes {
        private 'Excel.ShapeNodes_typekey': ShapeNodes;
        private constructor();
        public readonly Application: any;
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
        private 'Excel.ShapeRange_typekey': ShapeRange;
        private constructor();
        public _Default(Index: any): Shape;
        public readonly Adjustments: Adjustments;
        public Align(AlignCmd: Office.MsoAlignCmd, RelativeTo: Office.MsoTriState): void;
        public AlternativeText: string;
        public readonly Application: Application;
        public Apply(): void;
        public AutoShapeType: Office.MsoAutoShapeType;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public BlackWhiteMode: Office.MsoBlackWhiteMode;
        public readonly Callout: CalloutFormat;
        public CanvasCropBottom(Increment: number): void;
        public CanvasCropLeft(Increment: number): void;
        public CanvasCropRight(Increment: number): void;
        public CanvasCropTop(Increment: number): void;
        public readonly CanvasItems: Office.CanvasShapes;
        public readonly Chart: Chart;
        public readonly Child: Office.MsoTriState;
        public readonly ConnectionSiteCount: number;
        public readonly Connector: Office.MsoTriState;
        public readonly ConnectorFormat: ConnectorFormat;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Diagram: Diagram;
        public readonly DiagramNode: DiagramNode;
        public Distribute(DistributeCmd: Office.MsoDistributeCmd, RelativeTo: Office.MsoTriState): void;
        public Duplicate(): ShapeRange;
        public readonly Fill: FillFormat;
        public Flip(FlipCmd: Office.MsoFlipCmd): void;
        public readonly Glow: Office.GlowFormat;
        public Group(): Shape;
        public readonly GroupItems: GroupShapes;
        public readonly HasChart: Office.MsoTriState;
        public readonly HasDiagram: Office.MsoTriState;
        public readonly HasDiagramNode: Office.MsoTriState;
        public Height: number;
        public readonly HorizontalFlip: Office.MsoTriState;
        public readonly ID: number;
        public IncrementLeft(Increment: number): void;
        public IncrementRotation(Increment: number): void;
        public IncrementTop(Increment: number): void;
        public Item(Index: any): Shape;
        public Left: number;
        public readonly Line: LineFormat;
        public LockAspectRatio: Office.MsoTriState;
        public Name: string;
        public readonly Nodes: ShapeNodes;
        public readonly Parent: any;
        public readonly ParentGroup: Shape;
        public PickUp(): void;
        public readonly PictureFormat: PictureFormat;
        public readonly Reflection: Office.ReflectionFormat;
        public Regroup(): Shape;
        public RerouteConnections(): void;
        public Rotation: number;
        public ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: any): void;
        public ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: any): void;
        public Select(Replace?: any): void;
        public SetShapesDefaultProperties(): void;
        public readonly Shadow: ShadowFormat;
        public ShapeStyle: Office.MsoShapeStyleIndex;
        public readonly SoftEdge: Office.SoftEdgeFormat;
        public readonly TextEffect: TextEffectFormat;
        public readonly TextFrame: TextFrame;
        public readonly TextFrame2: TextFrame2;
        public readonly ThreeD: ThreeDFormat;
        public Title: string;
        public Top: number;
        public readonly Type: Office.MsoShapeType;
        public Ungroup(): ShapeRange;
        public readonly VerticalFlip: Office.MsoTriState;
        public readonly Vertices: any;
        public Visible: Office.MsoTriState;
        public Width: number;
        public ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        public readonly ZOrderPosition: number;
    }

    class Shapes {
        private 'Excel.Shapes_typekey': Shapes;
        private constructor();
        public _Default(Index: any): Shape;
        public AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddCanvas(Left: number, Top: number, Width: number, Height: number): Shape;
        public AddChart(XlChartType?: any, Left?: any, Top?: any, Width?: any, Height?: any): Shape;
        public AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        public AddCurve(SafeArrayOfPoints: any): Shape;
        public AddDiagram(Type: Office.MsoDiagramType, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddFormControl(Type: XlFormControl, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        public AddOLEObject(
            ClassType?: any, Filename?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, Left?: any, Top?: any, Width?: any, Height?: any): Shape;
        public AddPicture(Filename: string, LinkToFile: Office.MsoTriState, SaveWithDocument: Office.MsoTriState, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddPolyline(SafeArrayOfPoints: any): Shape;
        public AddShape(Type: Office.MsoAutoShapeType, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddSmartArt(Layout: Office.SmartArtLayout, Left?: any, Top?: any, Width?: any, Height?: any): Shape;
        public AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number): Shape;
        public readonly Application: Application;
        public BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Shape;
        public readonly Parent: any;
        public Range(Index: any): ShapeRange;
        public SelectAll(): void;
    }

    class Sheets {
        private 'Excel.Sheets_typekey': Sheets;
        private constructor();
        public __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        public _Default(Index: any): any;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        public Add(Before?: any, After?: any, Count?: any, Type?: any): any;
        public readonly Application: Application;
        public Copy(Before?: any, After?: any): void;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;

        /** @param Excel.XlFillWith [Type=-4104] */
        public FillAcrossSheets(Range: Range, Type?: XlFillWith): void;
        public readonly HPageBreaks: HPageBreaks;
        public Item(Index: any): any;
        public Move(Before?: any, After?: any): void;
        public readonly Parent: any;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any): void;
        public PrintPreview(EnableChanges?: any): void;
        public Select(Replace?: any): void;
        public Visible: any;
        public readonly VPageBreaks: VPageBreaks;
    }

    class SheetViews {
        private 'Excel.SheetViews_typekey': SheetViews;
        private constructor();
        public _Default(Index: any): any;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): any;
        public readonly Parent: any;
    }

    class Slicer {
        private 'Excel.Slicer_typekey': Slicer;
        private constructor();
        public readonly ActiveItem: SlicerItem;
        public readonly Application: Application;
        public Caption: string;
        public ColumnWidth: number;
        public Copy(): void;
        public readonly Creator: XlCreator;
        public Cut(): void;
        public Delete(): void;
        public DisableMoveResizeUI: boolean;
        public DisplayHeader: boolean;
        public Height: number;
        public Left: number;
        public Locked: boolean;
        public Name: string;
        public NumberOfColumns: number;
        public readonly Parent: any;
        public RowHeight: number;
        public readonly Shape: Shape;
        public readonly SlicerCache: SlicerCache;
        public readonly SlicerCacheLevel: SlicerCacheLevel;
        public Style: any;
        public Top: number;
        public Width: number;
    }

    class SlicerCache {
        private 'Excel.SlicerCache_typekey': SlicerCache;
        private constructor();
        public readonly Application: Application;
        public ClearManualFilter(): void;
        public readonly Creator: XlCreator;
        public CrossFilterType: XlSlicerCrossFilterType;
        public Delete(): void;
        public readonly Index: number;
        public Name: string;
        public readonly OLAP: boolean;
        public readonly Parent: any;
        public readonly PivotTables: SlicerPivotTables;
        public ShowAllItems: boolean;
        public readonly SlicerCacheLevels: SlicerCacheLevels;
        public readonly SlicerItems: SlicerItems;
        public readonly Slicers: Slicers;
        public SortItems: XlSlicerSort;
        public SortUsingCustomLists: boolean;
        public readonly SourceName: string;
        public readonly SourceType: XlPivotTableSourceType;
        public readonly VisibleSlicerItems: SlicerItems;
        public VisibleSlicerItemsList: any;
        public readonly WorkbookConnection: WorkbookConnection;
    }

    class SlicerCacheLevel {
        private 'Excel.SlicerCacheLevel_typekey': SlicerCacheLevel;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public CrossFilterType: XlSlicerCrossFilterType;
        public readonly Name: string;
        public readonly Ordinal: number;
        public readonly Parent: any;
        public readonly SlicerItems: SlicerItems;
        public SortItems: XlSlicerSort;
        public readonly VisibleSlicerItemsList: any;
    }

    class SlicerCacheLevels {
        private 'Excel.SlicerCacheLevels_typekey': SlicerCacheLevels;
        private constructor();
        public _Default(Level?: any): SlicerCacheLevel;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Level?: any): SlicerCacheLevel;
        public readonly Parent: any;
    }

    class SlicerCaches {
        private 'Excel.SlicerCaches_typekey': SlicerCaches;
        private constructor();
        public _Default(Index: any): SlicerCache;
        public Add(Source: any, SourceField: any, Name?: any): SlicerCache;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): SlicerCache;
        public readonly Parent: any;
    }

    class SlicerItem {
        private 'Excel.SlicerItem_typekey': SlicerItem;
        private constructor();
        public readonly Application: Application;
        public readonly Caption: string;
        public readonly Creator: XlCreator;
        public readonly HasData: boolean;
        public readonly Name: string;
        public readonly Parent: SlicerCache;
        public Selected: boolean;
        public readonly SourceName: any;
        public readonly SourceNameStandard: string;
        public readonly Value: string;
    }

    class SlicerItems {
        private 'Excel.SlicerItems_typekey': SlicerItems;
        private constructor();
        public _Default(Index: any): SlicerItem;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): SlicerItem;
        public readonly Parent: any;
    }

    class SlicerPivotTables {
        private 'Excel.SlicerPivotTables_typekey': SlicerPivotTables;
        private constructor();
        public _Default(Index: any): PivotTable;
        public AddPivotTable(PivotTable: PivotTable): void;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): PivotTable;
        public readonly Parent: any;
        public RemovePivotTable(PivotTable: any): void;
    }

    class Slicers {
        private 'Excel.Slicers_typekey': Slicers;
        private constructor();
        public _Default(Index: any): Slicer;
        public Add(SlicerDestination: any, Level?: any, Name?: any, Caption?: any, Top?: any, Left?: any, Width?: any, Height?: any): Slicer;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Slicer;
        public readonly Parent: any;
    }

    class SmartTag {
        private 'Excel.SmartTag_typekey': SmartTag;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly DownloadURL: string;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Properties: CustomProperties;
        public readonly Range: Range;
        public readonly SmartTagActions: SmartTagActions;
        public readonly XML: string;
    }

    class SmartTagAction {
        private 'Excel.SmartTagAction_typekey': SmartTagAction;
        private constructor();
        public readonly _Default: string;
        public readonly ActiveXControl: any;
        public readonly Application: Application;
        public CheckboxState: boolean;
        public readonly Creator: XlCreator;
        public Execute(): void;
        public ExpandHelp: boolean;
        public ListSelection: number;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly PresentInPane: boolean;
        public RadioGroupSelection: number;
        public TextboxText: string;
        public readonly Type: XlSmartTagControlType;
    }

    class SmartTagActions {
        private 'Excel.SmartTagActions_typekey': SmartTagActions;
        private constructor();
        public _Default(Index: any): SmartTagAction;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): SmartTagAction;
        public readonly Parent: any;
    }

    class SmartTagOptions {
        private 'Excel.SmartTagOptions_typekey': SmartTagOptions;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public DisplaySmartTags: XlSmartTagDisplayMode;
        public EmbedSmartTags: boolean;
        public readonly Parent: any;
    }

    class SmartTagRecognizer {
        private 'Excel.SmartTagRecognizer_typekey': SmartTagRecognizer;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Enabled: boolean;
        public readonly FullName: string;
        public readonly Parent: any;
        public readonly progID: string;
    }

    class SmartTagRecognizers {
        private 'Excel.SmartTagRecognizers_typekey': SmartTagRecognizers;
        private constructor();
        public _Default(Index: any): SmartTagRecognizer;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): SmartTagRecognizer;
        public readonly Parent: any;
        public Recognize: boolean;
    }

    class SmartTags {
        private 'Excel.SmartTags_typekey': SmartTags;
        private constructor();
        public _Default(Index: any): SmartTag;
        public Add(SmartTagType: string): SmartTag;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
    }

    class Sort {
        private 'Excel.Sort_typekey': Sort;
        private constructor();
        public readonly Application: Application;
        public Apply(): void;
        public readonly Creator: XlCreator;
        public Header: XlYesNoGuess;
        public MatchCase: boolean;
        public Orientation: XlSortOrientation;
        public readonly Parent: any;
        public readonly Rng: Range;
        public SetRange(Rng: Range): void;
        public readonly SortFields: SortFields;
        public SortMethod: XlSortMethod;
    }

    class SortField {
        private 'Excel.SortField_typekey': SortField;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public CustomOrder: any;
        public DataOption: XlSortDataOption;
        public Delete(): void;
        public readonly Key: Range;
        public ModifyKey(Key: Range): void;
        public Order: XlSortOrder;
        public readonly Parent: any;
        public Priority: number;
        public SetIcon(Icon: Icon): void;
        public SortOn: XlSortOn;
        public readonly SortOnValue: any;
    }

    class SortFields {
        private 'Excel.SortFields_typekey': SortFields;
        private constructor();
        public _Default(Index: any): SortField;
        public Add(Key: Range, SortOn?: any, Order?: any, CustomOrder?: any, DataOption?: any): SortField;
        public readonly Application: Application;
        public Clear(): void;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): SortField;
        public readonly Parent: any;
    }

    class SoundNote {
        private 'Excel.SoundNote_typekey': SoundNote;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public Import(Filename: string): any;
        public readonly Parent: any;
        public Play(): any;
        public Record(): any;
    }

    class SparkAxes {
        private 'Excel.SparkAxes_typekey': SparkAxes;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Horizontal: SparkHorizontalAxis;
        public readonly Parent: any;
        public readonly Vertical: SparkVerticalAxis;
    }

    class SparkColor {
        private 'Excel.SparkColor_typekey': SparkColor;
        private constructor();
        public readonly Application: Application;
        public readonly Color: FormatColor;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
        public Visible: boolean;
    }

    class SparkHorizontalAxis {
        private 'Excel.SparkHorizontalAxis_typekey': SparkHorizontalAxis;
        private constructor();
        public readonly Application: Application;
        public readonly Axis: SparkColor;
        public readonly Creator: XlCreator;
        public readonly IsDateAxis: boolean;
        public readonly Parent: any;
        public RightToLeftPlotOrder: boolean;
    }

    class Sparkline {
        private 'Excel.Sparkline_typekey': Sparkline;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Location: Range;
        public ModifyLocation(Range: Range): void;
        public ModifySourceData(Formula: string): void;
        public readonly Parent: any;
        public SourceData: string;
    }

    class SparklineGroup {
        private 'Excel.SparklineGroup_typekey': SparklineGroup;
        private constructor();
        public readonly Application: Application;
        public readonly Axes: SparkAxes;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public DateRange: string;
        public Delete(): void;
        public DisplayBlanksAs: XlDisplayBlanksAs;
        public DisplayHidden: boolean;
        public Item(Index: any): Sparkline;
        public LineWeight: any;
        public Location: Range;
        public Modify(Location: Range, SourceData: string): void;
        public ModifyDateRange(DateRange: string): void;
        public ModifyLocation(Location: Range): void;
        public ModifySourceData(SourceData: string): void;
        public readonly Parent: any;
        public PlotBy: XlSparklineRowCol;
        public readonly Points: SparkPoints;
        public readonly SeriesColor: FormatColor;
        public SourceData: string;
        public Type: XlSparkType;
    }

    class SparklineGroups {
        private 'Excel.SparklineGroups_typekey': SparklineGroups;
        private constructor();
        public _Default(Index: any): SparklineGroup;
        public Add(Type: XlSparkType, SourceData: string): SparklineGroup;
        public readonly Application: Application;
        public Clear(): void;
        public ClearGroups(): void;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Group(Location: Range): void;
        public Item(Index: any): SparklineGroup;
        public readonly Parent: any;
        public Ungroup(): void;
    }

    class SparkPoints {
        private 'Excel.SparkPoints_typekey': SparkPoints;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Firstpoint: SparkColor;
        public readonly Highpoint: SparkColor;
        public readonly Lastpoint: SparkColor;
        public readonly Lowpoint: SparkColor;
        public readonly Markers: SparkColor;
        public readonly Negative: SparkColor;
        public readonly Parent: any;
    }

    class SparkVerticalAxis {
        private 'Excel.SparkVerticalAxis_typekey': SparkVerticalAxis;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public CustomMaxScaleValue: any;
        public CustomMinScaleValue: any;
        public MaxScaleType: XlSparkScale;
        public MinScaleType: XlSparkScale;
        public readonly Parent: any;
    }

    class Speech {
        private 'Excel.Speech_typekey': Speech;
        private constructor();
        public Direction: XlSpeakDirection;
        public Speak(Text: string, SpeakAsync?: any, SpeakXML?: any, Purge?: any): void;
        public SpeakCellOnEnter: boolean;
    }

    class SpellingOptions {
        private 'Excel.SpellingOptions_typekey': SpellingOptions;
        private constructor();
        public ArabicModes: XlArabicModes;
        public ArabicStrictAlefHamza: boolean;
        public ArabicStrictFinalYaa: boolean;
        public ArabicStrictTaaMarboota: boolean;
        public BrazilReform: XlPortugueseReform;
        public DictLang: number;
        public GermanPostReform: boolean;
        public HebrewModes: XlHebrewModes;
        public IgnoreCaps: boolean;
        public IgnoreFileNames: boolean;
        public IgnoreMixedDigits: boolean;
        public KoreanCombineAux: boolean;
        public KoreanProcessCompound: boolean;
        public KoreanUseAutoChangeList: boolean;
        public PortugalReform: XlPortugueseReform;
        public RussianStrictE: boolean;
        public SpanishModes: XlSpanishModes;
        public SuggestMainOnly: boolean;
        public UserDict: string;
    }

    class Style {
        private 'Excel.Style_typekey': Style;
        private constructor();
        public readonly _Default: string;
        public AddIndent: boolean;
        public readonly Application: Application;
        public readonly Borders: Borders;
        public readonly BuiltIn: boolean;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Font: Font;
        public FormulaHidden: boolean;
        public HorizontalAlignment: XlHAlign;
        public IncludeAlignment: boolean;
        public IncludeBorder: boolean;
        public IncludeFont: boolean;
        public IncludeNumber: boolean;
        public IncludePatterns: boolean;
        public IncludeProtection: boolean;
        public IndentLevel: number;
        public readonly Interior: Interior;
        public Locked: boolean;
        public MergeCells: any;
        public readonly Name: string;
        public readonly NameLocal: string;
        public NumberFormat: string;
        public NumberFormatLocal: string;
        public Orientation: XlOrientation;
        public readonly Parent: any;
        public ReadingOrder: number;
        public ShrinkToFit: boolean;
        public readonly Value: string;
        public VerticalAlignment: XlVAlign;
        public WrapText: boolean;
    }

    class Styles {
        private 'Excel.Styles_typekey': Styles;
        private constructor();
        public _Default(Index: any): Style;
        public Add(Name: string, BasedOn?: any): Style;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Style;
        public Merge(Workbook: any): any;
        public readonly Parent: any;
    }

    class Tab {
        private 'Excel.Tab_typekey': Tab;
        private constructor();
        public readonly Application: Application;
        public Color: any;
        public ColorIndex: XlColorIndex;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
        public ThemeColor: XlThemeColor;
        public TintAndShade: any;
    }

    class TableStyle {
        private 'Excel.TableStyle_typekey': TableStyle;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public readonly BuiltIn: boolean;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Duplicate(NewTableStyleName?: any): TableStyle;
        public readonly Name: string;
        public readonly NameLocal: string;
        public readonly Parent: any;
        public ShowAsAvailablePivotTableStyle: boolean;
        public ShowAsAvailableSlicerStyle: boolean;
        public ShowAsAvailableTableStyle: boolean;
        public readonly TableStyleElements: TableStyleElements;
    }

    class TableStyleElement {
        private 'Excel.TableStyleElement_typekey': TableStyleElement;
        private constructor();
        public readonly Application: Application;
        public readonly Borders: Borders;
        public Clear(): void;
        public readonly Creator: XlCreator;
        public readonly Font: Font;
        public readonly HasFormat: boolean;
        public readonly Interior: Interior;
        public readonly Parent: any;
        public StripeSize: number;
    }

    class TableStyleElements {
        private 'Excel.TableStyleElements_typekey': TableStyleElements;
        private constructor();
        public _Default(Index: XlTableStyleElementType): TableStyleElement;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: XlTableStyleElementType): TableStyleElement;
        public readonly Parent: any;
    }

    class TableStyles {
        private 'Excel.TableStyles_typekey': TableStyles;
        private constructor();
        public _Default(Index: any): TableStyle;
        public Add(TableStyleName: string): TableStyle;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): TableStyle;
        public readonly Parent: any;
    }

    class TextEffectFormat {
        private 'Excel.TextEffectFormat_typekey': TextEffectFormat;
        private constructor();
        public Alignment: Office.MsoTextEffectAlignment;
        public readonly Application: any;
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
        private 'Excel.TextFrame_typekey': TextFrame;
        private constructor();
        public readonly Application: Application;
        public AutoMargins: boolean;
        public AutoSize: boolean;
        public Characters(Start?: any, Length?: any): Characters;
        public readonly Creator: XlCreator;
        public HorizontalAlignment: XlHAlign;
        public HorizontalOverflow: XlOartHorizontalOverflow;
        public MarginBottom: number;
        public MarginLeft: number;
        public MarginRight: number;
        public MarginTop: number;
        public Orientation: Office.MsoTextOrientation;
        public readonly Parent: any;
        public ReadingOrder: number;
        public VerticalAlignment: XlVAlign;
        public VerticalOverflow: XlOartVerticalOverflow;
    }

    class TextFrame2 {
        private 'Excel.TextFrame2_typekey': TextFrame2;
        private constructor();
        public readonly Application: any;
        public AutoSize: Office.MsoAutoSize;
        public readonly Column: Office.TextColumn2;
        public readonly Creator: number;
        public DeleteText(): void;
        public readonly HasText: Office.MsoTriState;
        public HorizontalAnchor: Office.MsoHorizontalAnchor;
        public MarginBottom: number;
        public MarginLeft: number;
        public MarginRight: number;
        public MarginTop: number;
        public NoTextRotation: Office.MsoTriState;
        public Orientation: Office.MsoTextOrientation;
        public readonly Parent: any;
        public PathFormat: Office.MsoPathFormat;
        public readonly Ruler: Office.Ruler2;
        public readonly TextRange: Office.TextRange2;
        public readonly ThreeD: ThreeDFormat;
        public VerticalAnchor: Office.MsoVerticalAnchor;
        public WarpFormat: Office.MsoWarpFormat;
        public WordArtformat: Office.MsoPresetTextEffect;
        public WordWrap: Office.MsoTriState;
    }

    class ThreeDFormat {
        private 'Excel.ThreeDFormat_typekey': ThreeDFormat;
        private constructor();
        public readonly Application: any;
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
        private 'Excel.TickLabels_typekey': TickLabels;
        private constructor();
        public Alignment: number;
        public readonly Application: Application;
        public AutoScaleFont: any;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Depth: number;
        public readonly Font: Font;
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

    class Toolbar {
        private 'Excel.Toolbar_typekey': Toolbar;
        private constructor();
        public readonly Application: Application;
        public readonly BuiltIn: boolean;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Height: number;
        public Left: number;
        public readonly Name: string;
        public readonly Parent: any;
        public Position: number;
        public Protection: XlToolbarProtection;
        public Reset(): void;
        public readonly ToolbarButtons: ToolbarButtons;
        public Top: number;
        public Visible: boolean;
        public Width: number;
    }

    class ToolbarButton {
        private 'Excel.ToolbarButton_typekey': ToolbarButton;
        private constructor();
        public readonly Application: Application;
        public readonly BuiltIn: boolean;
        public BuiltInFace: boolean;
        public Copy(Toolbar: Toolbar, Before: number): void;
        public CopyFace(): void;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Edit(): void;
        public Enabled: boolean;
        public HelpContextID: number;
        public HelpFile: string;
        public readonly ID: number;
        public readonly IsGap: boolean;
        public Move(Toolbar: Toolbar, Before: number): void;
        public Name: string;
        public OnAction: string;
        public readonly Parent: any;
        public PasteFace(): void;
        public Pushed: boolean;
        public Reset(): void;
        public StatusBar: string;
        public Width: number;
    }

    class ToolbarButtons {
        private 'Excel.ToolbarButtons_typekey': ToolbarButtons;
        private constructor();
        public _Default(Index: number): ToolbarButton;
        public Add(Button?: any, Before?: any, OnAction?: any, Pushed?: any, Enabled?: any, StatusBar?: any, HelpFile?: any, HelpContextID?: any): ToolbarButton;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): ToolbarButton;
        public readonly Parent: any;
    }

    class Toolbars {
        private 'Excel.Toolbars_typekey': Toolbars;
        private constructor();
        public _Default(Index: any): Toolbar;
        public Add(Name?: any): Toolbar;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Toolbar;
        public readonly Parent: any;
    }

    class TreeviewControl {
        private 'Excel.TreeviewControl_typekey': TreeviewControl;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Drilled: any;
        public Hidden: any;
        public readonly Parent: any;
    }

    class UpBars {
        private 'Excel.UpBars_typekey': UpBars;
        private constructor();
        public readonly Application: Application;
        public readonly Border: Border;
        public readonly Creator: XlCreator;
        public Delete(): any;
        public readonly Fill: ChartFillFormat;
        public readonly Format: ChartFormat;
        public readonly Interior: Interior;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class UsedObjects {
        private 'Excel.UsedObjects_typekey': UsedObjects;
        private constructor();
        public _Default(Index: any): any;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): any;
        public readonly Parent: any;
    }

    class UserAccess {
        private 'Excel.UserAccess_typekey': UserAccess;
        private constructor();
        public AllowEdit: boolean;
        public Delete(): void;
        public readonly Name: string;
    }

    class UserAccessList {
        private 'Excel.UserAccessList_typekey': UserAccessList;
        private constructor();
        public _Default(Index: any): UserAccess;
        public Add(Name: string, AllowEdit: boolean): UserAccess;
        public readonly Count: number;
        public DeleteAll(): void;
        public Item(Index: any): UserAccess;
    }

    class Validation {
        private 'Excel.Validation_typekey': Validation;
        private constructor();
        public Add(Type: XlDVType, AlertStyle?: any, Operator?: any, Formula1?: any, Formula2?: any): void;
        public readonly AlertStyle: number;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public ErrorMessage: string;
        public ErrorTitle: string;
        public readonly Formula1: string;
        public readonly Formula2: string;
        public IgnoreBlank: boolean;
        public IMEMode: number;
        public InCellDropdown: boolean;
        public InputMessage: string;
        public InputTitle: string;
        public Modify(Type?: any, AlertStyle?: any, Operator?: any, Formula1?: any, Formula2?: any): void;
        public readonly Operator: number;
        public readonly Parent: any;
        public ShowError: boolean;
        public ShowInput: boolean;
        public readonly Type: number;
        public readonly Value: boolean;
    }

    class ValueChange {
        private 'Excel.ValueChange_typekey': ValueChange;
        private constructor();
        public readonly AllocationMethod: XlAllocationMethod;
        public readonly AllocationValue: XlAllocationValue;
        public readonly AllocationWeightExpression: string;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Order: number;
        public readonly Parent: any;
        public readonly PivotCell: PivotCell;
        public readonly Tuple: string;
        public readonly Value: number;
        public readonly VisibleInPivotTable: boolean;
    }

    class VPageBreak {
        private 'Excel.VPageBreak_typekey': VPageBreak;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public DragOff(Direction: XlDirection, RegionIndex: number): void;
        public readonly Extent: XlPageBreakExtent;
        public Location: Range;
        public readonly Parent: Worksheet;
        public Type: XlPageBreak;
    }

    class VPageBreaks {
        private 'Excel.VPageBreaks_typekey': VPageBreaks;
        private constructor();
        public _Default(Index: number): VPageBreak;
        public Add(Before: any): VPageBreak;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: number): VPageBreak;
        public readonly Parent: any;
    }

    class Walls {
        private 'Excel.Walls_typekey': Walls;
        private constructor();
        public readonly Application: Application;
        public readonly Border: Border;
        public ClearFormats(): any;
        public readonly Creator: XlCreator;
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

    class Watch {
        private 'Excel.Watch_typekey': Watch;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public readonly Parent: any;
        public readonly Source: any;
    }

    class Watches {
        private 'Excel.Watches_typekey': Watches;
        private constructor();
        public _Default(Index: any): Watch;
        public Add(Source: any): Watch;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Item(Index: any): Watch;
        public readonly Parent: any;
    }

    class WebOptions {
        private 'Excel.WebOptions_typekey': WebOptions;
        private constructor();
        public AllowPNG: boolean;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public DownloadComponents: boolean;
        public Encoding: Office.MsoEncoding;
        public readonly FolderSuffix: string;
        public LocationOfComponents: string;
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
        private 'Excel.Window_typekey': Window;
        private constructor();
        public _DisplayRightToLeft: boolean;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): any;
        public Activate(): any;
        public ActivateNext(): any;
        public ActivatePrevious(): any;
        public readonly ActiveCell: Range;
        public readonly ActiveChart: Chart;
        public readonly ActivePane: Pane;
        public readonly ActiveSheet: any;
        public readonly ActiveSheetView: any;
        public readonly Application: Application;
        public AutoFilterDateGrouping: boolean;
        public Caption: any;
        public Close(SaveChanges?: any, Filename?: any, RouteWorkbook?: any): boolean;
        public readonly Creator: XlCreator;
        public DisplayFormulas: boolean;
        public DisplayGridlines: boolean;
        public DisplayHeadings: boolean;
        public DisplayHorizontalScrollBar: boolean;
        public DisplayOutline: boolean;
        public DisplayRightToLeft: boolean;
        public DisplayRuler: boolean;
        public DisplayVerticalScrollBar: boolean;
        public DisplayWhitespace: boolean;
        public DisplayWorkbookTabs: boolean;
        public DisplayZeros: boolean;
        public EnableResize: boolean;
        public FreezePanes: boolean;
        public GridlineColor: number;
        public GridlineColorIndex: XlColorIndex;
        public Height: number;
        public readonly Index: number;
        public LargeScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): any;
        public Left: number;
        public NewWindow(): Window;
        public OnWindow: string;
        public readonly Panes: Panes;
        public readonly Parent: any;
        public PointsToScreenPixelsX(Points: number): number;
        public PointsToScreenPixelsY(Points: number): number;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): any;
        public PrintPreview(EnableChanges?: any): any;
        public RangeFromPoint(x: number, y: number): any;
        public readonly RangeSelection: Range;
        public ScrollColumn: number;
        public ScrollIntoView(Left: number, Top: number, Width: number, Height: number, Start?: any): void;
        public ScrollRow: number;
        public ScrollWorkbookTabs(Sheets?: any, Position?: any): any;
        public readonly SelectedSheets: Sheets;
        public readonly Selection: any;
        public readonly SheetViews: SheetViews;
        public SmallScroll(Down?: any, Up?: any, ToRight?: any, ToLeft?: any): any;
        public Split: boolean;
        public SplitColumn: number;
        public SplitHorizontal: number;
        public SplitRow: number;
        public SplitVertical: number;
        public TabRatio: number;
        public Top: number;
        public readonly Type: XlWindowType;
        public readonly UsableHeight: number;
        public readonly UsableWidth: number;
        public View: XlWindowView;
        public Visible: boolean;
        public readonly VisibleRange: Range;
        public Width: number;
        public readonly WindowNumber: number;
        public WindowState: XlWindowState;
        public Zoom: any;
    }

    class Windows {
        private 'Excel.Windows_typekey': Windows;
        private constructor();
        public _Default(Index: any): Window;
        public readonly Application: Application;

        /** @param Excel.XlArrangeStyle [ArrangeStyle=1] */
        public Arrange(ArrangeStyle?: XlArrangeStyle, ActiveWorkbook?: any, SyncHorizontal?: any, SyncVertical?: any): any;
        public BreakSideBySide(): boolean;
        public CompareSideBySideWith(WindowName: any): boolean;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Window;
        public readonly Parent: any;
        public ResetPositionsSideBySide(): void;
        public SyncScrollingSideBySide: boolean;
    }

    class Workbook {
        private 'Excel.Workbook_typekey': Workbook;
        private constructor();
        public __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        public _CodeName: string;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        public _Protect(Password?: any, Structure?: any, Windows?: any): void;
        public _ProtectSharing(Filename?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, SharingPassword?: any): void;
        public readonly _ReadOnlyRecommended: boolean;

        /** @param Excel.XlSaveAsAccessMode [AccessMode=1] */
        public _SaveAs(
            Filename: any, FileFormat: any, Password: any, WriteResPassword: any, ReadOnlyRecommended: any, CreateBackup: any, AccessMode?: XlSaveAsAccessMode,
            ConflictResolution?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any): void;
        public AcceptAllChanges(When?: any, Who?: any, Where?: any): void;
        public AcceptLabelsInFormulas: boolean;
        public AccuracyVersion: number;
        public Activate(): void;
        public readonly ActiveChart: Chart;
        public readonly ActiveSheet: any;
        public readonly ActiveSlicer: Slicer;
        public AddToFavorites(): void;
        public readonly Application: Application;
        public ApplyTheme(Filename: string): void;
        public Author: string;
        public AutoUpdateFrequency: number;
        public AutoUpdateSaveChanges: boolean;
        public BreakLink(Name: string, Type: XlLinkType): void;
        public readonly BuiltinDocumentProperties: any;
        public readonly CalculationVersion: number;
        public CanCheckIn(): boolean;
        public ChangeFileAccess(Mode: XlFileAccess, WritePassword?: any, Notify?: any): void;
        public ChangeHistoryDuration: number;

        /** @param Excel.XlLinkType [Type=1] */
        public ChangeLink(Name: string, NewName: string, Type?: XlLinkType): void;
        public readonly Charts: Sheets;
        public CheckCompatibility: boolean;
        public CheckIn(SaveChanges?: any, Comments?: any, MakePublic?: any): void;
        public CheckInWithVersion(SaveChanges?: any, Comments?: any, MakePublic?: any, VersionType?: any): void;
        public Close(SaveChanges?: any, Filename?: any, RouteWorkbook?: any): void;
        public readonly CodeName: string;
        public Colors(Index?: any): any;
        public readonly CommandBars: Office.CommandBars;
        public Comments: string;
        public ConflictResolution: XlSaveConflictResolution;
        public readonly Connections: Connections;
        public readonly ConnectionsDisabled: boolean;
        public readonly Container: any;
        public readonly ContentTypeProperties: Office.MetaProperties;
        public readonly CreateBackup: boolean;
        public readonly Creator: XlCreator;
        public readonly CustomDocumentProperties: any;
        public readonly CustomViews: CustomViews;
        public readonly CustomXMLParts: Office.CustomXMLParts;
        public Date1904: boolean;
        public DefaultPivotTableStyle: any;
        public DefaultSlicerStyle: any;
        public DefaultTableStyle: any;
        public DeleteNumberFormat(NumberFormat: string): void;
        public readonly DialogSheets: Sheets;
        public DisplayDrawingObjects: XlDisplayDrawingObjects;
        public DisplayInkComments: boolean;
        public readonly DocumentInspectors: Office.DocumentInspectors;
        public readonly DocumentLibraryVersions: Office.DocumentLibraryVersions;
        public DoNotPromptForConvert: boolean;
        public Dummy16(): void;
        public Dummy17(calcid: number): void;
        public Dummy26(): void;
        public Dummy27(): void;
        public EnableAutoRecover: boolean;
        public EnableConnections(): void;
        public EncryptionProvider: string;
        public EndReview(): void;
        public EnvelopeVisible: boolean;
        public readonly Excel4IntlMacroSheets: Sheets;
        public readonly Excel4MacroSheets: Sheets;
        public readonly Excel8CompatibilityMode: boolean;
        public ExclusiveAccess(): boolean;
        public ExportAsFixedFormat(
            Type: XlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any,
            FixedFormatExtClassPtr?: any): void;
        public readonly FileFormat: XlFileFormat;
        public Final: boolean;
        public FollowHyperlink(Address: string, SubAddress?: any, NewWindow?: any, AddHistory?: any, ExtraInfo?: any, Method?: any, HeaderInfo?: any): void;
        public ForceFullCalculation: boolean;
        public ForwardMailer(): void;
        public readonly FullName: string;
        public readonly FullNameURLEncoded: string;
        public GetWorkflowTasks(): Office.WorkflowTasks;
        public GetWorkflowTemplates(): Office.WorkflowTemplates;
        public HasMailer: boolean;
        public readonly HasPassword: boolean;
        public HasRoutingSlip: boolean;
        public readonly HasVBProject: boolean;
        public HighlightChangesOnScreen: boolean;
        public HighlightChangesOptions(When?: any, Who?: any, Where?: any): void;
        public readonly HTMLProject: Office.HTMLProject;
        public readonly IconSets: IconSets;
        public InactiveListBorderVisible: boolean;
        public IsAddin: boolean;
        public readonly IsInplace: boolean;
        public KeepChangeHistory: boolean;
        public Keywords: string;
        public LinkInfo(Name: string, LinkInfo: XlLinkInfo, Type?: any, EditionRef?: any): any;
        public LinkSources(Type?: any): any;
        public ListChangesOnNewSheet: boolean;
        public LockServerFile(): void;
        public readonly Mailer: Mailer;
        public MergeWorkbook(Filename: any): void;
        public readonly Modules: Sheets;
        public readonly MultiUserEditing: boolean;
        public readonly Name: string;
        public readonly Names: Names;
        public NewWindow(): Window;
        public OnSave: string;
        public OnSheetActivate: string;
        public OnSheetDeactivate: string;
        public OpenLinks(Name: string, ReadOnly?: any, Type?: any): void;
        public readonly Parent: any;
        public Password: string;
        public readonly PasswordEncryptionAlgorithm: string;
        public readonly PasswordEncryptionFileProperties: boolean;
        public readonly PasswordEncryptionKeyLength: number;
        public readonly PasswordEncryptionProvider: string;
        public readonly Path: string;
        public readonly Permission: Office.Permission;
        public PersonalViewListSettings: boolean;
        public PersonalViewPrintSettings: boolean;
        public PivotCaches(): PivotCaches;
        public PivotTableWizard(
            SourceType?: any, SourceData?: any, TableDestination?: any, TableName?: any, RowGrand?: any, ColumnGrand?: any, SaveData?: any, HasAutoFormat?: any,
            AutoPage?: any, Reserved?: any, BackgroundQuery?: any, OptimizeCache?: any, PageFieldOrder?: any, PageFieldWrapCount?: any, ReadData?: any, Connection?: any): void;
        public Post(DestName?: any): void;
        public PrecisionAsDisplayed: boolean;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any): void;
        public PrintPreview(EnableChanges?: any): void;
        public Protect(Password?: any, Structure?: any, Windows?: any): void;
        public ProtectSharing(Filename?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, SharingPassword?: any, FileFormat?: any): void;
        public readonly ProtectStructure: boolean;
        public readonly ProtectWindows: boolean;
        public readonly PublishObjects: PublishObjects;
        public PurgeChangeHistoryNow(Days: number, SharingPassword?: any): void;
        public readonly ReadOnly: boolean;
        public ReadOnlyRecommended: boolean;
        public RecheckSmartTags(): void;
        public RefreshAll(): void;
        public RejectAllChanges(When?: any, Who?: any, Where?: any): void;
        public ReloadAs(Encoding: Office.MsoEncoding): void;
        public RemoveDocumentInformation(RemoveDocInfoType: XlRemoveDocInfoType): void;
        public RemovePersonalInformation: boolean;
        public RemoveUser(Index: number): void;
        public Reply(): void;
        public ReplyAll(): void;
        public ReplyWithChanges(ShowMessage?: any): void;
        public readonly Research: Research;
        public ResetColors(): void;
        public readonly RevisionNumber: number;
        public Route(): void;
        public readonly Routed: boolean;
        public readonly RoutingSlip: RoutingSlip;
        public RunAutoMacros(Which: XlRunAutoMacro): void;
        public Save(): void;

        /** @param Excel.XlSaveAsAccessMode [AccessMode=1] */
        public SaveAs(
            Filename: any, FileFormat: any, Password: any, WriteResPassword: any, ReadOnlyRecommended: any, CreateBackup: any, AccessMode?: XlSaveAsAccessMode,
            ConflictResolution?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, Local?: any): void;
        public SaveAsXMLData(Filename: string, Map: XmlMap): void;
        public SaveCopyAs(Filename?: any): void;
        public Saved: boolean;
        public SaveLinkValues: boolean;
        public sblt(s: string): void;
        public SendFaxOverInternet(Recipients?: any, Subject?: any, ShowMessage?: any): void;
        public SendForReview(Recipients?: any, Subject?: any, ShowMessage?: any, IncludeAttachment?: any): void;
        public SendMail(Recipients: any, Subject?: any, ReturnReceipt?: any): void;

        /** @param Excel.XlPriority [Priority=-4143] */
        public SendMailer(FileFormat: any, Priority?: XlPriority): void;
        public readonly ServerPolicy: Office.ServerPolicy;
        public readonly ServerViewableItems: ServerViewableItems;
        public SetLinkOnData(Name: string, Procedure?: any): void;
        public SetPasswordEncryptionOptions(PasswordEncryptionProvider?: any, PasswordEncryptionAlgorithm?: any, PasswordEncryptionKeyLength?: any, PasswordEncryptionFileProperties?: any): void;
        public readonly SharedWorkspace: Office.SharedWorkspace;
        public readonly Sheets: Sheets;
        public ShowConflictHistory: boolean;
        public ShowPivotChartActiveFields: boolean;
        public ShowPivotTableFieldList: boolean;
        public readonly Signatures: Office.SignatureSet;
        public readonly SlicerCaches: SlicerCaches;
        public readonly SmartDocument: Office.SmartDocument;
        public readonly SmartTagOptions: SmartTagOptions;
        public readonly Styles: Styles;
        public Subject: string;
        public readonly Sync: Office.Sync;
        public readonly TableStyles: TableStyles;
        public TemplateRemoveExtData: boolean;
        public readonly Theme: Office.OfficeTheme;
        public Title: string;
        public ToggleFormsDesign(): void;
        public Unprotect(Password?: any): void;
        public UnprotectSharing(SharingPassword?: any): void;
        public UpdateFromFile(): void;
        public UpdateLink(Name?: any, Type?: any): void;
        public UpdateLinks: XlUpdateLinks;
        public UpdateRemoteReferences: boolean;
        public UserControl: boolean;
        public readonly UserStatus: any;
        public readonly VBASigned: boolean;
        public readonly VBProject: VBIDE.VBProject;
        public readonly WebOptions: WebOptions;
        public WebPagePreview(): void;
        public readonly Windows: Windows;
        public readonly Worksheets: Sheets;
        public WritePassword: string;
        public readonly WriteReserved: boolean;
        public readonly WriteReservedBy: string;
        public XmlImport(Url: string, ImportMap: XmlMap, Overwrite?: any, Destination?: any): XlXmlImportResult;
        public XmlImportXml(Data: string, ImportMap: XmlMap, Overwrite?: any, Destination?: any): XlXmlImportResult;
        public readonly XmlMaps: XmlMaps;
        public readonly XmlNamespaces: XmlNamespaces;
    }

    class WorkbookConnection {
        private 'Excel.WorkbookConnection_typekey': WorkbookConnection;
        private constructor();
        public _Default: string;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public Delete(): void;
        public Description: string;
        public Name: string;
        public readonly ODBCConnection: ODBCConnection;
        public readonly OLEDBConnection: OLEDBConnection;
        public readonly Parent: any;
        public readonly Ranges: Ranges;
        public Refresh(): void;
        public readonly Type: XlConnectionType;
    }

    class Workbooks {
        private 'Excel.Workbooks_typekey': Workbooks;
        private constructor();

        /** @param Excel.XlTextQualifier [TextQualifier=1] */
        public __OpenText(
            Filename: string, Origin: any, StartRow: any, DataType: any, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any,
            Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, TextVisualLayout?: any): void;
        public _Default(Index: any): Workbook;
        public _Open(
            Filename: string, UpdateLinks?: any, ReadOnly?: any, Format?: any, Password?: any, WriteResPassword?: any, IgnoreReadOnlyRecommended?: any, Origin?: any,
            Delimiter?: any, Editable?: any, Notify?: any, Converter?: any, AddToMru?: any): Workbook;

        /** @param Excel.XlTextQualifier [TextQualifier=1] */
        public _OpenText(
            Filename: string, Origin: any, StartRow: any, DataType: any, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any,
            Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, TextVisualLayout?: any, DecimalSeparator?: any, ThousandsSeparator?: any): void;
        public _OpenXML(Filename: string, Stylesheets?: any): Workbook;
        public Add(Template?: any): Workbook;
        public readonly Application: Application;
        public CanCheckOut(Filename: string): boolean;
        public CheckOut(Filename: string): void;
        public Close(): void;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): Workbook;
        public Open(
            Filename: string, UpdateLinks?: any, ReadOnly?: any, Format?: any, Password?: any, WriteResPassword?: any, IgnoreReadOnlyRecommended?: any, Origin?: any,
            Delimiter?: any, Editable?: any, Notify?: any, Converter?: any, AddToMru?: any, Local?: any, CorruptLoad?: any): Workbook;
        public OpenDatabase(Filename: string, CommandText?: any, CommandType?: any, BackgroundQuery?: any, ImportDataAs?: any): Workbook;

        /** @param Excel.XlTextQualifier [TextQualifier=1] */
        public OpenText(
            Filename: string, Origin: any, StartRow: any, DataType: any, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any,
            Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, TextVisualLayout?: any, DecimalSeparator?: any, ThousandsSeparator?: any,
            TrailingMinusNumbers?: any, Local?: any): void;
        public OpenXML(Filename: string, Stylesheets?: any, LoadOption?: any): Workbook;
        public readonly Parent: any;
    }

    class Worksheet {
        private 'Excel.Worksheet_typekey': Worksheet;
        private constructor();
        public __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        public _CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, IgnoreFinalYaa?: any, SpellScript?: any): void;
        public _CodeName: string;
        public _DisplayRightToLeft: number;
        public _Evaluate(Name: any): any;
        public _PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any): void;
        public _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        public _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        public _SaveAs(
            Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any,
            TextVisualLayout?: any): void;
        public Activate(): void;
        public readonly Application: Application;
        public Arcs(Index?: any): any;
        public readonly AutoFilter: AutoFilter;
        public AutoFilterMode: boolean;
        public Buttons(Index?: any): any;
        public Calculate(): void;
        public readonly Cells: Range;
        public ChartObjects(Index?: any): any;
        public CheckBoxes(Index?: any): any;
        public CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any): void;
        public CircleInvalid(): void;
        public readonly CircularReference: Range;
        public ClearArrows(): void;
        public ClearCircles(): void;
        public readonly CodeName: string;
        public readonly Columns: Range;
        public readonly Comments: Comments;
        public readonly ConsolidationFunction: XlConsolidationFunction;
        public readonly ConsolidationOptions: any;
        public readonly ConsolidationSources: any;
        public Copy(Before?: any, After?: any): void;
        public readonly Creator: XlCreator;
        public readonly CustomProperties: CustomProperties;
        public Delete(): void;
        public DisplayAutomaticPageBreaks: boolean;
        public DisplayPageBreaks: boolean;
        public DisplayRightToLeft: boolean;
        public DrawingObjects(Index?: any): any;
        public Drawings(Index?: any): any;
        public DropDowns(Index?: any): any;
        public EnableAutoFilter: boolean;
        public EnableCalculation: boolean;
        public EnableFormatConditionsCalculation: boolean;
        public EnableOutlining: boolean;
        public EnablePivotTable: boolean;
        public EnableSelection: XlEnableSelection;
        public Evaluate(Name: any): any;
        public ExportAsFixedFormat(
            Type: XlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any,
            FixedFormatExtClassPtr?: any): void;
        public readonly FilterMode: boolean;
        public GroupBoxes(Index?: any): any;
        public GroupObjects(Index?: any): any;
        public readonly HPageBreaks: HPageBreaks;
        public readonly Hyperlinks: Hyperlinks;
        public readonly Index: number;
        public Labels(Index?: any): any;
        public Lines(Index?: any): any;
        public ListBoxes(Index?: any): any;
        public readonly ListObjects: ListObjects;
        public readonly MailEnvelope: Office.MsoEnvelope;
        public Move(Before?: any, After?: any): void;
        public Name: string;
        public readonly Names: Names;
        public readonly Next: any;
        public OLEObjects(Index?: any): any;
        public OnCalculate: string;
        public OnData: string;
        public OnDoubleClick: string;
        public OnEntry: string;
        public OnSheetActivate: string;
        public OnSheetDeactivate: string;
        public OptionButtons(Index?: any): any;
        public readonly Outline: Outline;
        public Ovals(Index?: any): any;
        public readonly PageSetup: PageSetup;
        public readonly Parent: any;
        public Paste(Destination?: any, Link?: any): void;
        public PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, NoHTMLFormatting?: any): void;
        public Pictures(Index?: any): any;
        public PivotTables(Index?: any): any;
        public PivotTableWizard(
            SourceType?: any, SourceData?: any, TableDestination?: any, TableName?: any, RowGrand?: any, ColumnGrand?: any, SaveData?: any, HasAutoFormat?: any,
            AutoPage?: any, Reserved?: any, BackgroundQuery?: any, OptimizeCache?: any, PageFieldOrder?: any, PageFieldWrapCount?: any, ReadData?: any, Connection?: any): PivotTable;
        public readonly Previous: any;
        public readonly PrintedCommentPages: number;
        public PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any): void;
        public PrintPreview(EnableChanges?: any): void;
        public Protect(
            Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, AllowFormattingCells?: any, AllowFormattingColumns?: any,
            AllowFormattingRows?: any, AllowInsertingColumns?: any, AllowInsertingRows?: any, AllowInsertingHyperlinks?: any, AllowDeletingColumns?: any,
            AllowDeletingRows?: any, AllowSorting?: any, AllowFiltering?: any, AllowUsingPivotTables?: any): void;
        public readonly ProtectContents: boolean;
        public readonly ProtectDrawingObjects: boolean;
        public readonly Protection: Protection;
        public readonly ProtectionMode: boolean;
        public readonly ProtectScenarios: boolean;
        public readonly QueryTables: QueryTables;
        public Range(Cell1: any, Cell2?: any): Range;
        public Rectangles(Index?: any): any;
        public ResetAllPageBreaks(): void;
        public readonly Rows: Range;
        public SaveAs(
            Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any,
            TextVisualLayout?: any, Local?: any): void;
        public Scenarios(Index?: any): any;
        public readonly Scripts: Office.Scripts;
        public ScrollArea: string;
        public ScrollBars(Index?: any): any;
        public Select(Replace?: any): void;
        public SetBackgroundPicture(Filename: string): void;
        public readonly Shapes: Shapes;
        public ShowAllData(): void;
        public ShowDataForm(): void;
        public readonly SmartTags: SmartTags;
        public readonly Sort: Sort;
        public Spinners(Index?: any): any;
        public readonly StandardHeight: number;
        public StandardWidth: number;
        public readonly Tab: Tab;
        public TextBoxes(Index?: any): any;
        public TransitionExpEval: boolean;
        public TransitionFormEntry: boolean;
        public readonly Type: XlSheetType;
        public Unprotect(Password?: any): void;
        public readonly UsedRange: Range;
        public Visible: XlSheetVisibility;
        public readonly VPageBreaks: VPageBreaks;
        public XmlDataQuery(XPath: string, SelectionNamespaces?: any, Map?: any): Range;
        public XmlMapQuery(XPath: string, SelectionNamespaces?: any, Map?: any): Range;
    }

    class WorksheetFunction {
        private 'Excel.WorksheetFunction_typekey': WorksheetFunction;
        private constructor();
        public _WSFunction(
            Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public AccrInt(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): number;
        public AccrIntM(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        public Acos(Arg1: number): number;
        public Acosh(Arg1: number): number;
        public Aggregate(
            Arg1: number, Arg2: number, Arg3: Range, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public AmorDegrc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): number;
        public AmorLinc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): number;
        public And(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): boolean;
        public readonly Application: Application;
        public Asc(Arg1: string): string;
        public Asin(Arg1: number): number;
        public Asinh(Arg1: number): number;
        public Atan2(Arg1: number, Arg2: number): number;
        public Atanh(Arg1: number): number;
        public AveDev(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Average(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public AverageIf(Arg1: Range, Arg2: any, Arg3?: any): number;
        public AverageIfs(
            Arg1: Range, Arg2: Range, Arg3: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any): number;
        public BahtText(Arg1: number): string;
        public BesselI(Arg1: any, Arg2: any): number;
        public BesselJ(Arg1: any, Arg2: any): number;
        public BesselK(Arg1: any, Arg2: any): number;
        public BesselY(Arg1: any, Arg2: any): number;
        public Beta_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean, Arg5?: any, Arg6?: any): number;
        public Beta_Inv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        public BetaDist(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        public BetaInv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        public Bin2Dec(Arg1: any): string;
        public Bin2Hex(Arg1: any, Arg2?: any): string;
        public Bin2Oct(Arg1: any, Arg2?: any): string;
        public Binom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public Binom_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        public BinomDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public Ceiling(Arg1: number, Arg2: number): number;
        public Ceiling_Precise(Arg1: number, Arg2?: any): number;
        public ChiDist(Arg1: number, Arg2: number): number;
        public ChiInv(Arg1: number, Arg2: number): number;
        public ChiSq_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
        public ChiSq_Dist_RT(Arg1: number, Arg2: number): number;
        public ChiSq_Inv(Arg1: number, Arg2: number): number;
        public ChiSq_Inv_RT(Arg1: number, Arg2: number): number;
        public ChiSq_Test(Arg1: any, Arg2: any): number;
        public ChiTest(Arg1: any, Arg2: any): number;
        public Choose(
            Arg1: any, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public Clean(Arg1: string): string;
        public Combin(Arg1: number, Arg2: number): number;
        public Complex(Arg1: any, Arg2: any, Arg3?: any): string;
        public Confidence(Arg1: number, Arg2: number, Arg3: number): number;
        public Confidence_Norm(Arg1: number, Arg2: number, Arg3: number): number;
        public Confidence_T(Arg1: number, Arg2: number, Arg3: number): number;
        public Convert(Arg1: any, Arg2: any, Arg3: any): number;
        public Correl(Arg1: any, Arg2: any): number;
        public Cosh(Arg1: number): number;
        public Count(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public CountA(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public CountBlank(Arg1: Range): number;
        public CountIf(Arg1: Range, Arg2: any): number;
        public CountIfs(
            Arg1: Range, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public CoupDayBs(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        public CoupDays(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        public CoupDaysNc(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        public CoupNcd(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        public CoupNum(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        public CoupPcd(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        public Covar(Arg1: any, Arg2: any): number;
        public Covariance_P(Arg1: any, Arg2: any): number;
        public Covariance_S(Arg1: any, Arg2: any): number;
        public readonly Creator: XlCreator;
        public CritBinom(Arg1: number, Arg2: number, Arg3: number): number;
        public CumIPmt(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any): number;
        public CumPrinc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any): number;
        public DAverage(Arg1: Range, Arg2: any, Arg3: any): number;
        public Days360(Arg1: any, Arg2: any, Arg3?: any): number;
        public Db(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any): number;
        public Dbcs(Arg1: string): string;
        public DCount(Arg1: Range, Arg2: any, Arg3: any): number;
        public DCountA(Arg1: Range, Arg2: any, Arg3: any): number;
        public Ddb(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any): number;
        public Dec2Bin(Arg1: any, Arg2?: any): string;
        public Dec2Hex(Arg1: any, Arg2?: any): string;
        public Dec2Oct(Arg1: any, Arg2?: any): string;
        public Degrees(Arg1: number): number;
        public Delta(Arg1: any, Arg2?: any): number;
        public DevSq(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public DGet(Arg1: Range, Arg2: any, Arg3: any): any;
        public Disc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        public DMax(Arg1: Range, Arg2: any, Arg3: any): number;
        public DMin(Arg1: Range, Arg2: any, Arg3: any): number;
        public Dollar(Arg1: number, Arg2?: any): string;
        public DollarDe(Arg1: any, Arg2: any): number;
        public DollarFr(Arg1: any, Arg2: any): number;
        public DProduct(Arg1: Range, Arg2: any, Arg3: any): number;
        public DStDev(Arg1: Range, Arg2: any, Arg3: any): number;
        public DStDevP(Arg1: Range, Arg2: any, Arg3: any): number;
        public DSum(Arg1: Range, Arg2: any, Arg3: any): number;
        public Dummy19(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public Dummy21(Arg1: number, Arg2: number): number;
        public Duration(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
        public DVar(Arg1: Range, Arg2: any, Arg3: any): number;
        public DVarP(Arg1: Range, Arg2: any, Arg3: any): number;
        public EDate(Arg1: any, Arg2: any): number;
        public Effect(Arg1: any, Arg2: any): number;
        public EoMonth(Arg1: any, Arg2: any): number;
        public Erf(Arg1: any, Arg2?: any): number;
        public Erf_Precise(Arg1: any): number;
        public ErfC(Arg1: any): number;
        public ErfC_Precise(Arg1: any): number;
        public Even(Arg1: number): number;
        public Expon_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
        public ExponDist(Arg1: number, Arg2: number, Arg3: boolean): number;
        public F_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public F_Dist_RT(Arg1: number, Arg2: number, Arg3: number): number;
        public F_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        public F_Inv_RT(Arg1: number, Arg2: number, Arg3: number): number;
        public F_Test(Arg1: any, Arg2: any): number;
        public Fact(Arg1: number): number;
        public FactDouble(Arg1: any): number;
        public FDist(Arg1: number, Arg2: number, Arg3: number): number;
        public Find(Arg1: string, Arg2: string, Arg3?: any): number;
        public FindB(Arg1: string, Arg2: string, Arg3?: any): number;
        public FInv(Arg1: number, Arg2: number, Arg3: number): number;
        public Fisher(Arg1: number): number;
        public FisherInv(Arg1: number): number;
        public Fixed(Arg1: number, Arg2?: any, Arg3?: any): string;
        public Floor(Arg1: number, Arg2: number): number;
        public Floor_Precise(Arg1: number, Arg2?: any): number;
        public Forecast(Arg1: number, Arg2: any, Arg3: any): number;
        public Frequency(Arg1: any, Arg2: any): any;
        public FTest(Arg1: any, Arg2: any): number;
        public Fv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        public FVSchedule(Arg1: any, Arg2: any): number;
        public Gamma_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public Gamma_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        public GammaDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public GammaInv(Arg1: number, Arg2: number, Arg3: number): number;
        public GammaLn(Arg1: number): number;
        public GammaLn_Precise(Arg1: number): number;
        public Gcd(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public GeoMean(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public GeStep(Arg1: any, Arg2?: any): number;
        public Growth(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        public HarMean(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Hex2Bin(Arg1: any, Arg2?: any): string;
        public Hex2Dec(Arg1: any): string;
        public Hex2Oct(Arg1: any, Arg2?: any): string;
        public HLookup(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): any;
        public HypGeom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5: boolean): number;
        public HypGeomDist(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
        public IfError(Arg1: any, Arg2: any): any;
        public ImAbs(Arg1: any): string;
        public Imaginary(Arg1: any): number;
        public ImArgument(Arg1: any): string;
        public ImConjugate(Arg1: any): string;
        public ImCos(Arg1: any): string;
        public ImDiv(Arg1: any, Arg2: any): string;
        public ImExp(Arg1: any): string;
        public ImLn(Arg1: any): string;
        public ImLog10(Arg1: any): string;
        public ImLog2(Arg1: any): string;
        public ImPower(Arg1: any, Arg2: any): string;
        public ImProduct(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): string;
        public ImReal(Arg1: any): number;
        public ImSin(Arg1: any): string;
        public ImSqrt(Arg1: any): string;
        public ImSub(Arg1: any, Arg2: any): string;
        public ImSum(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): string;
        public Index(Arg1: any, Arg2: number, Arg3?: any, Arg4?: any): any;
        public Intercept(Arg1: any, Arg2: any): number;
        public IntRate(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        public Ipmt(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any, Arg6?: any): number;
        public Irr(Arg1: any, Arg2?: any): number;
        public IsErr(Arg1: any): boolean;
        public IsError(Arg1: any): boolean;
        public IsEven(Arg1: any): boolean;
        public IsLogical(Arg1: any): boolean;
        public IsNA(Arg1: any): boolean;
        public IsNonText(Arg1: any): boolean;
        public IsNumber(Arg1: any): boolean;
        public ISO_Ceiling(Arg1: number, Arg2?: any): number;
        public IsOdd(Arg1: any): boolean;
        public Ispmt(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
        public IsText(Arg1: any): boolean;
        public IsThaiDigit(Arg1: string): boolean;
        public Kurt(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Large(Arg1: any, Arg2: number): number;
        public Lcm(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public LinEst(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        public Ln(Arg1: number): number;
        public Log(Arg1: number, Arg2?: any): number;
        public Log10(Arg1: number): number;
        public LogEst(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        public LogInv(Arg1: number, Arg2: number, Arg3: number): number;
        public LogNorm_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public LogNorm_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        public LogNormDist(Arg1: number, Arg2: number, Arg3: number): number;
        public Lookup(Arg1: any, Arg2: any, Arg3?: any): any;
        public Match(Arg1: any, Arg2: any, Arg3?: any): number;
        public Max(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public MDeterm(Arg1: any): number;
        public MDuration(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
        public Median(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Min(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public MInverse(Arg1: any): any;
        public MIrr(Arg1: any, Arg2: number, Arg3: number): number;
        public MMult(Arg1: any, Arg2: any): any;
        public Mode(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Mode_Mult(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public Mode_Sngl(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public MRound(Arg1: any, Arg2: any): number;
        public MultiNomial(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public NegBinom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public NegBinomDist(Arg1: number, Arg2: number, Arg3: number): number;
        public NetworkDays(Arg1: any, Arg2: any, Arg3?: any): number;
        public NetworkDays_Intl(Arg1: any, Arg2: any, Arg3?: any, Arg4?: any): number;
        public Nominal(Arg1: any, Arg2: any): number;
        public Norm_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public Norm_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        public Norm_S_Dist(Arg1: number, Arg2: boolean): number;
        public Norm_S_Inv(Arg1: number): number;
        public NormDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public NormInv(Arg1: number, Arg2: number, Arg3: number): number;
        public NormSDist(Arg1: number): number;
        public NormSInv(Arg1: number): number;
        public NPer(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        public Npv(
            Arg1: number, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Oct2Bin(Arg1: any, Arg2?: any): string;
        public Oct2Dec(Arg1: any): string;
        public Oct2Hex(Arg1: any, Arg2?: any): string;
        public Odd(Arg1: number): number;
        public OddFPrice(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7: any, Arg8: any, Arg9?: any): number;
        public OddFYield(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7: any, Arg8: any, Arg9?: any): number;
        public OddLPrice(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7: any, Arg8?: any): number;
        public OddLYield(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7: any, Arg8?: any): number;
        public Or(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): boolean;
        public readonly Parent: any;
        public Pearson(Arg1: any, Arg2: any): number;
        public Percentile(Arg1: any, Arg2: number): number;
        public Percentile_Exc(Arg1: any, Arg2: number): number;
        public Percentile_Inc(Arg1: any, Arg2: number): number;
        public PercentRank(Arg1: any, Arg2: number, Arg3?: any): number;
        public PercentRank_Exc(Arg1: any, Arg2: number, Arg3?: any): number;
        public PercentRank_Inc(Arg1: any, Arg2: number, Arg3?: any): number;
        public Permut(Arg1: number, Arg2: number): number;
        public Phonetic(Arg1: Range): string;
        public Pi(): number;
        public Pmt(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        public Poisson(Arg1: number, Arg2: number, Arg3: boolean): number;
        public Poisson_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
        public Power(Arg1: number, Arg2: number): number;
        public Ppmt(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any, Arg6?: any): number;
        public Price(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): number;
        public PriceDisc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        public PriceMat(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
        public Prob(Arg1: any, Arg2: any, Arg3: number, Arg4?: any): number;
        public Product(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Proper(Arg1: string): string;
        public Pv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        public Quartile(Arg1: any, Arg2: number): number;
        public Quartile_Exc(Arg1: any, Arg2: number): number;
        public Quartile_Inc(Arg1: any, Arg2: number): number;
        public Quotient(Arg1: any, Arg2: any): number;
        public Radians(Arg1: number): number;
        public RandBetween(Arg1: any, Arg2: any): number;
        public Rank(Arg1: number, Arg2: Range, Arg3?: any): number;
        public Rank_Avg(Arg1: number, Arg2: Range, Arg3?: any): number;
        public Rank_Eq(Arg1: number, Arg2: Range, Arg3?: any): number;
        public Rate(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any, Arg6?: any): number;
        public Received(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        public Replace(Arg1: string, Arg2: number, Arg3: number, Arg4: string): string;
        public ReplaceB(Arg1: string, Arg2: number, Arg3: number, Arg4: string): string;
        public Rept(Arg1: string, Arg2: number): string;
        public Roman(Arg1: number, Arg2?: any): string;
        public Round(Arg1: number, Arg2: number): number;
        public RoundBahtDown(Arg1: number): number;
        public RoundBahtUp(Arg1: number): number;
        public RoundDown(Arg1: number, Arg2: number): number;
        public RoundUp(Arg1: number, Arg2: number): number;
        public RSq(Arg1: any, Arg2: any): number;
        public RTD(
            progID: any, server: any, topic1: any, topic2?: any, topic3?: any, topic4?: any, topic5?: any, topic6?: any, topic7?: any, topic8?: any, topic9?: any,
            topic10?: any, topic11?: any, topic12?: any, topic13?: any, topic14?: any, topic15?: any, topic16?: any, topic17?: any, topic18?: any, topic19?: any,
            topic20?: any, topic21?: any, topic22?: any, topic23?: any, topic24?: any, topic25?: any, topic26?: any, topic27?: any, topic28?: any): any;
        public Search(Arg1: string, Arg2: string, Arg3?: any): number;
        public SearchB(Arg1: string, Arg2: string, Arg3?: any): number;
        public SeriesSum(Arg1: any, Arg2: any, Arg3: any, Arg4: any): number;
        public Sinh(Arg1: number): number;
        public Skew(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Sln(Arg1: number, Arg2: number, Arg3: number): number;
        public Slope(Arg1: any, Arg2: any): number;
        public Small(Arg1: any, Arg2: number): number;
        public SqrtPi(Arg1: any): number;
        public Standardize(Arg1: number, Arg2: number, Arg3: number): number;
        public StDev(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public StDev_P(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public StDev_S(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public StDevP(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public StEyx(Arg1: any, Arg2: any): number;
        public Substitute(Arg1: string, Arg2: string, Arg3: string, Arg4?: any): string;
        public Subtotal(
            Arg1: number, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Sum(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public SumIf(Arg1: Range, Arg2: any, Arg3?: any): number;
        public SumIfs(
            Arg1: Range, Arg2: Range, Arg3: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any,
            Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any,
            Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any): number;
        public SumProduct(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public SumSq(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public SumX2MY2(Arg1: any, Arg2: any): number;
        public SumX2PY2(Arg1: any, Arg2: any): number;
        public SumXMY2(Arg1: any, Arg2: any): number;
        public Syd(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
        public T_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
        public T_Dist_2T(Arg1: number, Arg2: number): number;
        public T_Dist_RT(Arg1: number, Arg2: number): number;
        public T_Inv(Arg1: number, Arg2: number): number;
        public T_Inv_2T(Arg1: number, Arg2: number): number;
        public T_Test(Arg1: any, Arg2: any, Arg3: number, Arg4: number): number;
        public Tanh(Arg1: number): number;
        public TBillEq(Arg1: any, Arg2: any, Arg3?: any): number;
        public TBillPrice(Arg1: any, Arg2: any, Arg3?: any): number;
        public TBillYield(Arg1: any, Arg2: any, Arg3?: any): number;
        public TDist(Arg1: number, Arg2: number, Arg3: number): number;
        public Text(Arg1: any, Arg2: string): string;
        public ThaiDayOfWeek(Arg1: number): string;
        public ThaiDigit(Arg1: string): string;
        public ThaiMonthOfYear(Arg1: number): string;
        public ThaiNumSound(Arg1: number): string;
        public ThaiNumString(Arg1: number): string;
        public ThaiStringLength(Arg1: string): number;
        public ThaiYear(Arg1: number): number;
        public TInv(Arg1: number, Arg2: number): number;
        public Transpose(Arg1: any): any;
        public Trend(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        public Trim(Arg1: string): string;
        public TrimMean(Arg1: any, Arg2: number): number;
        public TTest(Arg1: any, Arg2: any, Arg3: number, Arg4: number): number;
        public USDollar(Arg1: number, Arg2: number): string;
        public Var(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Var_P(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Var_S(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public VarP(
            Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any,
            Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any,
            Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        public Vdb(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5: number, Arg6?: any, Arg7?: any): number;
        public VLookup(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): any;
        public Weekday(Arg1: any, Arg2?: any): number;
        public WeekNum(Arg1: any, Arg2?: any): number;
        public Weibull(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public Weibull_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        public WorkDay(Arg1: any, Arg2: any, Arg3?: any): number;
        public WorkDay_Intl(Arg1: any, Arg2: any, Arg3?: any, Arg4?: any): number;
        public Xirr(Arg1: any, Arg2: any, Arg3?: any): number;
        public Xnpv(Arg1: any, Arg2: any): number;
        public YearFrac(Arg1: any, Arg2: any, Arg3?: any): number;
        public YieldDisc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        public YieldMat(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
        public Z_Test(Arg1: any, Arg2: number, Arg3?: any): number;
        public ZTest(Arg1: any, Arg2: number, Arg3?: any): number;
    }

    class XmlDataBinding {
        private 'Excel.XmlDataBinding_typekey': XmlDataBinding;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public ClearSettings(): void;
        public readonly Creator: XlCreator;
        public LoadSettings(Url: string): void;
        public readonly Parent: any;
        public Refresh(): XlXmlImportResult;
        public readonly SourceUrl: string;
    }

    class XmlMap {
        private 'Excel.XmlMap_typekey': XmlMap;
        private constructor();
        public readonly _Default: string;
        public AdjustColumnWidth: boolean;
        public AppendOnImport: boolean;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly DataBinding: XmlDataBinding;
        public Delete(): void;
        public Export(Url: string, Overwrite?: any): XlXmlExportResult;
        public ExportXml(Data: string): XlXmlExportResult;
        public Import(Url: string, Overwrite?: any): XlXmlImportResult;
        public ImportXml(XmlData: string, Overwrite?: any): XlXmlImportResult;
        public readonly IsExportable: boolean;
        public Name: string;
        public readonly Parent: any;
        public PreserveColumnFilter: boolean;
        public PreserveNumberFormatting: boolean;
        public readonly RootElementName: string;
        public readonly RootElementNamespace: XmlNamespace;
        public SaveDataSourceDefinition: boolean;
        public readonly Schemas: XmlSchemas;
        public ShowImportExportValidationErrors: boolean;
        public readonly WorkbookConnection: WorkbookConnection;
    }

    class XmlMaps {
        private 'Excel.XmlMaps_typekey': XmlMaps;
        private constructor();
        public _Default(Index: any): XmlMap;
        public Add(Schema: string, RootElementName?: any): XmlMap;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): XmlMap;
        public readonly Parent: any;
    }

    class XmlNamespace {
        private 'Excel.XmlNamespace_typekey': XmlNamespace;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Parent: any;
        public readonly Prefix: string;
        public readonly Uri: string;
    }

    class XmlNamespaces {
        private 'Excel.XmlNamespaces_typekey': XmlNamespaces;
        private constructor();
        public _Default(Index: any): XmlNamespace;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public InstallManifest(Path: string, InstallForAllUsers?: any): void;
        public Item(Index: any): XmlNamespace;
        public readonly Parent: any;
        public readonly Value: string;
    }

    class XmlSchema {
        private 'Excel.XmlSchema_typekey': XmlSchema;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: XlCreator;
        public readonly Name: string;
        public readonly Namespace: XmlNamespace;
        public readonly Parent: any;
        public readonly XML: string;
    }

    class XmlSchemas {
        private 'Excel.XmlSchemas_typekey': XmlSchemas;
        private constructor();
        public _Default(Index: any): XmlSchema;
        public readonly Application: Application;
        public readonly Count: number;
        public readonly Creator: XlCreator;
        public Item(Index: any): XmlSchema;
        public readonly Parent: any;
    }

    class XPath {
        private 'Excel.XPath_typekey': XPath;
        private constructor();
        public readonly _Default: string;
        public readonly Application: Application;
        public Clear(): void;
        public readonly Creator: XlCreator;
        public readonly Map: XmlMap;
        public readonly Parent: any;
        public readonly Repeating: boolean;
        public SetValue(Map: XmlMap, XPath: string, SelectionNamespace?: any, Repeating?: any): void;
        public readonly Value: string;
    }

    namespace EventHelperTypes {
        type Application_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type Chart_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type OLEObject_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type QueryTable_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type Workbook_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

        type Worksheet_Invoke_ArgNames = ['dispidMember', 'riid', 'lcid', 'wFlags', 'pdispparams', 'pvarResult', 'pexcepinfo', 'puArgErr'];

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

        interface Chart_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface OLEObject_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface QueryTable_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface Workbook_Invoke_Parameter {
            readonly dispidMember: number;
            readonly lcid: number;
            readonly pdispparams: stdole.DISPPARAMS;
            pexcepinfo: stdole.EXCEPINFO;
            puArgErr: number;
            pvarResult: any;
            readonly riid: stdole.GUID;
            readonly wFlags: number;
        }

        interface Worksheet_Invoke_Parameter {
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
        obj: Excel.Application, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Excel.Application, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Excel.Application, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Excel.Application, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Excel.Application, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.Application, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Excel.Application, event: 'Invoke', argNames: Excel.EventHelperTypes.Application_Invoke_ArgNames, handler: (
            this: Excel.Application, parameter: Excel.EventHelperTypes.Application_Invoke_Parameter) => void): void;
    on(
        obj: Excel.Application, event: 'NewWorkbook' | 'WorkbookActivate' | 'WorkbookAddinInstall' | 'WorkbookAddinUninstall' | 'WorkbookDeactivate' | 'WorkbookOpen',
        argNames: ['Wb'], handler: (this: Excel.Application, parameter: {readonly Wb: Excel.Workbook}) => void): void;
    on(
        obj: Excel.Application, event: 'ProtectedViewWindowActivate' | 'ProtectedViewWindowDeactivate' | 'ProtectedViewWindowOpen' | 'ProtectedViewWindowResize',
        argNames: ['Pvw'], handler: (this: Excel.Application, parameter: {readonly Pvw: Excel.ProtectedViewWindow}) => void): void;
    on(
        obj: Excel.Application, event: 'ProtectedViewWindowBeforeClose', argNames: ['Pvw', 'Reason', 'Cancel'], handler: (
            this: Excel.Application, parameter: {readonly Pvw: Excel.ProtectedViewWindow, readonly Reason: Excel.XlProtectedViewCloseReason, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Application, event: 'ProtectedViewWindowBeforeEdit', argNames: ['Pvw', 'Cancel'], handler: (
            this: Excel.Application, parameter: {readonly Pvw: Excel.ProtectedViewWindow, Cancel: boolean}) => void): void;
    on(obj: Excel.Application, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.Application, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(obj: Excel.Application, event: 'SheetActivate' | 'SheetCalculate' | 'SheetDeactivate', argNames: ['Sh'], handler: (this: Excel.Application, parameter: {readonly Sh: any}) => void): void;
    on(
        obj: Excel.Application, event: 'SheetBeforeDoubleClick' | 'SheetBeforeRightClick', argNames: ['Sh', 'Target', 'Cancel'], handler: (
            this: Excel.Application, parameter: {readonly Sh: any, readonly Target: Excel.Range, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Application, event: 'SheetChange' | 'SheetSelectionChange', argNames: ['Sh', 'Target'], handler: (
            this: Excel.Application, parameter: {readonly Sh: any, readonly Target: Excel.Range}) => void): void;
    on(
        obj: Excel.Application, event: 'SheetFollowHyperlink', argNames: ['Sh', 'Target'], handler: (
            this: Excel.Application, parameter: {readonly Sh: any, readonly Target: Excel.Hyperlink}) => void): void;
    on(
        obj: Excel.Application, event: 'SheetPivotTableAfterValueChange', argNames: ['Sh', 'TargetPivotTable', 'TargetRange'], handler: (
            this: Excel.Application, parameter: {readonly Sh: any, readonly TargetPivotTable: Excel.PivotTable, readonly TargetRange: Excel.Range}) => void): void;
    on(
        obj: Excel.Application, event: 'SheetPivotTableBeforeAllocateChanges' | 'SheetPivotTableBeforeCommitChanges',
        argNames: ['Sh', 'TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd', 'Cancel'], handler: (
            this: Excel.Application,
            parameter: {readonly Sh: any, readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Application, event: 'SheetPivotTableBeforeDiscardChanges', argNames: ['Sh', 'TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd'],
        handler: (
            this: Excel.Application, parameter: {readonly Sh: any, readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number}) => void): void;
    on(
        obj: Excel.Application, event: 'SheetPivotTableUpdate', argNames: ['Sh', 'Target'], handler: (
            this: Excel.Application, parameter: {readonly Sh: any, readonly Target: Excel.PivotTable}) => void): void;
    on(
        obj: Excel.Application, event: 'WindowActivate' | 'WindowDeactivate' | 'WindowResize', argNames: ['Wb', 'Wn'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Wn: Excel.Window}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookAfterSave', argNames: ['Wb', 'Success'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Success: boolean}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookAfterXmlExport', argNames: ['Wb', 'Map', 'Url', 'Result'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Map: Excel.XmlMap, readonly Url: string, readonly Result: Excel.XlXmlExportResult}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookAfterXmlImport', argNames: ['Wb', 'Map', 'IsRefresh', 'Result'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Map: Excel.XmlMap, readonly IsRefresh: boolean, readonly Result: Excel.XlXmlImportResult}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookBeforeClose' | 'WorkbookBeforePrint', argNames: ['Wb', 'Cancel'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookBeforeSave', argNames: ['Wb', 'SaveAsUI', 'Cancel'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly SaveAsUI: boolean, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookBeforeXmlExport', argNames: ['Wb', 'Map', 'Url', 'Cancel'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Map: Excel.XmlMap, readonly Url: string, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookBeforeXmlImport', argNames: ['Wb', 'Map', 'Url', 'IsRefresh', 'Cancel'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Map: Excel.XmlMap, readonly Url: string, readonly IsRefresh: boolean, Cancel: boolean}) => void): void;
    on(obj: Excel.Application, event: 'WorkbookNewChart', argNames: ['Wb', 'Ch'], handler: (this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Ch: Excel.Chart}) => void): void;
    on(obj: Excel.Application, event: 'WorkbookNewSheet', argNames: ['Wb', 'Sh'], handler: (this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Sh: any}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookPivotTableCloseConnection' | 'WorkbookPivotTableOpenConnection', argNames: ['Wb', 'Target'],
        handler: (this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Target: Excel.PivotTable}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookRowsetComplete', argNames: ['Wb', 'Description', 'Sheet', 'Success'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly Description: string, readonly Sheet: string, readonly Success: boolean}) => void): void;
    on(
        obj: Excel.Application, event: 'WorkbookSync', argNames: ['Wb', 'SyncEventType'], handler: (
            this: Excel.Application, parameter: {readonly Wb: Excel.Workbook, readonly SyncEventType: Office.MsoSyncEventType}) => void): void;
    on(
        obj: Excel.Chart, event: 'BeforeDoubleClick', argNames: ['ElementID', 'Arg1', 'Arg2', 'Cancel'], handler: (
            this: Excel.Chart, parameter: {readonly ElementID: number, readonly Arg1: number, readonly Arg2: number, Cancel: boolean}) => void): void;
    on(obj: Excel.Chart, event: 'BeforeRightClick', argNames: ['Cancel'], handler: (this: Excel.Chart, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Excel.Chart, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Excel.Chart, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Excel.Chart, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Excel.Chart, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Excel.Chart, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.Chart, parameter: {pctinfo: number}) => void): void;
    on(obj: Excel.Chart, event: 'Invoke', argNames: Excel.EventHelperTypes.Chart_Invoke_ArgNames, handler: (this: Excel.Chart, parameter: Excel.EventHelperTypes.Chart_Invoke_Parameter) => void): void;
    on(
        obj: Excel.Chart, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'x', 'y'], handler: (
            this: Excel.Chart, parameter: {readonly Button: number, readonly Shift: number, readonly x: number, readonly y: number}) => void): void;
    on(obj: Excel.Chart, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.Chart, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: Excel.Chart, event: 'Select', argNames: ['ElementID', 'Arg1', 'Arg2'], handler: (
            this: Excel.Chart, parameter: {readonly ElementID: number, readonly Arg1: number, readonly Arg2: number}) => void): void;
    on(
        obj: Excel.Chart, event: 'SeriesChange', argNames: ['SeriesIndex', 'PointIndex'], handler: (
            this: Excel.Chart, parameter: {readonly SeriesIndex: number, readonly PointIndex: number}) => void): void;
    on(
        obj: Excel.OLEObject, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Excel.OLEObject, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Excel.OLEObject, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Excel.OLEObject, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Excel.OLEObject, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.OLEObject, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Excel.OLEObject, event: 'Invoke', argNames: Excel.EventHelperTypes.OLEObject_Invoke_ArgNames, handler: (
            this: Excel.OLEObject, parameter: Excel.EventHelperTypes.OLEObject_Invoke_Parameter) => void): void;
    on(obj: Excel.OLEObject, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.OLEObject, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(obj: Excel.QueryTable, event: 'AfterRefresh', argNames: ['Success'], handler: (this: Excel.QueryTable, parameter: {readonly Success: boolean}) => void): void;
    on(obj: Excel.QueryTable, event: 'BeforeRefresh', argNames: ['Cancel'], handler: (this: Excel.QueryTable, parameter: {Cancel: boolean}) => void): void;
    on(
        obj: Excel.QueryTable, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Excel.QueryTable, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Excel.QueryTable, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Excel.QueryTable, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Excel.QueryTable, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.QueryTable, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Excel.QueryTable, event: 'Invoke', argNames: Excel.EventHelperTypes.QueryTable_Invoke_ArgNames, handler: (
            this: Excel.QueryTable, parameter: Excel.EventHelperTypes.QueryTable_Invoke_Parameter) => void): void;
    on(obj: Excel.QueryTable, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.QueryTable, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(obj: Excel.Workbook, event: 'AfterSave', argNames: ['Success'], handler: (this: Excel.Workbook, parameter: {readonly Success: boolean}) => void): void;
    on(
        obj: Excel.Workbook, event: 'AfterXmlExport', argNames: ['Map', 'Url', 'Result'], handler: (
            this: Excel.Workbook, parameter: {readonly Map: Excel.XmlMap, readonly Url: string, readonly Result: Excel.XlXmlExportResult}) => void): void;
    on(
        obj: Excel.Workbook, event: 'AfterXmlImport', argNames: ['Map', 'IsRefresh', 'Result'], handler: (
            this: Excel.Workbook, parameter: {readonly Map: Excel.XmlMap, readonly IsRefresh: boolean, readonly Result: Excel.XlXmlImportResult}) => void): void;
    on(obj: Excel.Workbook, event: 'BeforeClose' | 'BeforePrint', argNames: ['Cancel'], handler: (this: Excel.Workbook, parameter: {Cancel: boolean}) => void): void;
    on(obj: Excel.Workbook, event: 'BeforeSave', argNames: ['SaveAsUI', 'Cancel'], handler: (this: Excel.Workbook, parameter: {readonly SaveAsUI: boolean, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Workbook, event: 'BeforeXmlExport', argNames: ['Map', 'Url', 'Cancel'], handler: (
            this: Excel.Workbook, parameter: {readonly Map: Excel.XmlMap, readonly Url: string, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Workbook, event: 'BeforeXmlImport', argNames: ['Map', 'Url', 'IsRefresh', 'Cancel'], handler: (
            this: Excel.Workbook, parameter: {readonly Map: Excel.XmlMap, readonly Url: string, readonly IsRefresh: boolean, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Workbook, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Excel.Workbook, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Excel.Workbook, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Excel.Workbook, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Excel.Workbook, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.Workbook, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Excel.Workbook, event: 'Invoke', argNames: Excel.EventHelperTypes.Workbook_Invoke_ArgNames, handler: (
            this: Excel.Workbook, parameter: Excel.EventHelperTypes.Workbook_Invoke_Parameter) => void): void;
    on(obj: Excel.Workbook, event: 'NewChart', argNames: ['Ch'], handler: (this: Excel.Workbook, parameter: {readonly Ch: Excel.Chart}) => void): void;
    on(obj: Excel.Workbook, event: 'NewSheet' | 'SheetActivate' | 'SheetCalculate' | 'SheetDeactivate', argNames: ['Sh'], handler: (this: Excel.Workbook, parameter: {readonly Sh: any}) => void): void;
    on(
        obj: Excel.Workbook, event: 'PivotTableCloseConnection' | 'PivotTableOpenConnection', argNames: ['Target'], handler: (
            this: Excel.Workbook, parameter: {readonly Target: Excel.PivotTable}) => void): void;
    on(obj: Excel.Workbook, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.Workbook, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(
        obj: Excel.Workbook, event: 'RowsetComplete', argNames: ['Description', 'Sheet', 'Success'], handler: (
            this: Excel.Workbook, parameter: {readonly Description: string, readonly Sheet: string, readonly Success: boolean}) => void): void;
    on(
        obj: Excel.Workbook, event: 'SheetBeforeDoubleClick' | 'SheetBeforeRightClick', argNames: ['Sh', 'Target', 'Cancel'], handler: (
            this: Excel.Workbook, parameter: {readonly Sh: any, readonly Target: Excel.Range, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Workbook, event: 'SheetChange' | 'SheetSelectionChange', argNames: ['Sh', 'Target'], handler: (
            this: Excel.Workbook, parameter: {readonly Sh: any, readonly Target: Excel.Range}) => void): void;
    on(obj: Excel.Workbook, event: 'SheetFollowHyperlink', argNames: ['Sh', 'Target'], handler: (this: Excel.Workbook, parameter: {readonly Sh: any, readonly Target: Excel.Hyperlink}) => void): void;
    on(
        obj: Excel.Workbook, event: 'SheetPivotTableAfterValueChange', argNames: ['Sh', 'TargetPivotTable', 'TargetRange'], handler: (
            this: Excel.Workbook, parameter: {readonly Sh: any, readonly TargetPivotTable: Excel.PivotTable, readonly TargetRange: Excel.Range}) => void): void;
    on(
        obj: Excel.Workbook, event: 'SheetPivotTableBeforeAllocateChanges' | 'SheetPivotTableBeforeCommitChanges',
        argNames: ['Sh', 'TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd', 'Cancel'], handler: (
            this: Excel.Workbook,
            parameter: {readonly Sh: any, readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Workbook, event: 'SheetPivotTableBeforeDiscardChanges', argNames: ['Sh', 'TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd'],
        handler: (this: Excel.Workbook, parameter: {readonly Sh: any, readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number}) => void): void;
    on(
        obj: Excel.Workbook, event: 'SheetPivotTableChangeSync' | 'SheetPivotTableUpdate', argNames: ['Sh', 'Target'], handler: (
            this: Excel.Workbook, parameter: {readonly Sh: any, readonly Target: Excel.PivotTable}) => void): void;
    on(obj: Excel.Workbook, event: 'Sync', argNames: ['SyncEventType'], handler: (this: Excel.Workbook, parameter: {readonly SyncEventType: Office.MsoSyncEventType}) => void): void;
    on(obj: Excel.Workbook, event: 'WindowActivate' | 'WindowDeactivate' | 'WindowResize', argNames: ['Wn'], handler: (this: Excel.Workbook, parameter: {readonly Wn: Excel.Window}) => void): void;
    on(
        obj: Excel.Worksheet, event: 'BeforeDoubleClick' | 'BeforeRightClick', argNames: ['Target', 'Cancel'], handler: (
            this: Excel.Worksheet, parameter: {readonly Target: Excel.Range, Cancel: boolean}) => void): void;
    on(obj: Excel.Worksheet, event: 'Change' | 'SelectionChange', argNames: ['Target'], handler: (this: Excel.Worksheet, parameter: {readonly Target: Excel.Range}) => void): void;
    on(obj: Excel.Worksheet, event: 'FollowHyperlink', argNames: ['Target'], handler: (this: Excel.Worksheet, parameter: {readonly Target: Excel.Hyperlink}) => void): void;
    on(
        obj: Excel.Worksheet, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (
            this: Excel.Worksheet, parameter: {readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number}) => void): void;
    on(
        obj: Excel.Worksheet, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (
            this: Excel.Worksheet, parameter: {readonly itinfo: number, readonly lcid: number, pptinfo: undefined}) => void): void;
    on(obj: Excel.Worksheet, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.Worksheet, parameter: {pctinfo: number}) => void): void;
    on(
        obj: Excel.Worksheet, event: 'Invoke', argNames: Excel.EventHelperTypes.Worksheet_Invoke_ArgNames, handler: (
            this: Excel.Worksheet, parameter: Excel.EventHelperTypes.Worksheet_Invoke_Parameter) => void): void;
    on(
        obj: Excel.Worksheet, event: 'PivotTableAfterValueChange', argNames: ['TargetPivotTable', 'TargetRange'], handler: (
            this: Excel.Worksheet, parameter: {readonly TargetPivotTable: Excel.PivotTable, readonly TargetRange: Excel.Range}) => void): void;
    on(
        obj: Excel.Worksheet, event: 'PivotTableBeforeAllocateChanges' | 'PivotTableBeforeCommitChanges',
        argNames: ['TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd', 'Cancel'], handler: (
            this: Excel.Worksheet, parameter: {readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number, Cancel: boolean}) => void): void;
    on(
        obj: Excel.Worksheet, event: 'PivotTableBeforeDiscardChanges', argNames: ['TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd'],
        handler: (this: Excel.Worksheet, parameter: {readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number}) => void): void;
    on(obj: Excel.Worksheet, event: 'PivotTableChangeSync' | 'PivotTableUpdate', argNames: ['Target'], handler: (this: Excel.Worksheet, parameter: {readonly Target: Excel.PivotTable}) => void): void;
    on(obj: Excel.Worksheet, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.Worksheet, parameter: {readonly riid: stdole.GUID, ppvObj: undefined}) => void): void;
    on(obj: Excel.Application, event: 'AddRef' | 'AfterCalculate' | 'Release', handler: (this: Excel.Application, parameter: {}) => void): void;
    on(obj: Excel.Chart, event: 'Activate' | 'AddRef' | 'Calculate' | 'Deactivate' | 'DragOver' | 'DragPlot' | 'Release' | 'Resize', handler: (this: Excel.Chart, parameter: {}) => void): void;
    on(obj: Excel.OLEObject, event: 'AddRef' | 'GotFocus' | 'LostFocus' | 'Release', handler: (this: Excel.OLEObject, parameter: {}) => void): void;
    on(obj: Excel.QueryTable, event: 'AddRef' | 'Release', handler: (this: Excel.QueryTable, parameter: {}) => void): void;
    on(obj: Excel.Workbook, event: 'Activate' | 'AddinInstall' | 'AddinUninstall' | 'AddRef' | 'Deactivate' | 'Open' | 'Release', handler: (this: Excel.Workbook, parameter: {}) => void): void;
    on(obj: Excel.Worksheet, event: 'Activate' | 'AddRef' | 'Calculate' | 'Deactivate' | 'Release', handler: (this: Excel.Worksheet, parameter: {}) => void): void;
    set(obj: Excel.Chart, propertyName: 'HasAxis', parameterTypes: [any, any], newValue: any): void;
    set(obj: Excel.Workbook, propertyName: 'Colors', parameterTypes: [any], newValue: any): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'Excel.Application': Excel.Application;
    'Excel.Chart': Excel.Chart;
    'Excel.Sheet': Excel.Worksheet;
}

interface EnumeratorConstructor {
    new(col: Excel.Actions): Enumerator<Excel.Action>;
    new(col: Excel.AddIns | Excel.AddIns2): Enumerator<Excel.AddIn>;
    new(col: Excel.AllowEditRanges): Enumerator<Excel.AllowEditRange>;
    new(col: Excel.Areas | Excel.Ranges): Enumerator<Excel.Range>;
    new(col: Excel.Borders): Enumerator<Excel.Border>;
    new(col: Excel.CalculatedFields): Enumerator<Excel.PivotField>;
    new(col: Excel.CalculatedItems | Excel.PivotItemList): Enumerator<Excel.PivotItem>;
    new(col: Excel.CalculatedMembers): Enumerator<Excel.CalculatedMember>;
    new(col: Excel.Comments): Enumerator<Excel.Comment>;
    new(col: Excel.Connections): Enumerator<Excel.WorkbookConnection>;
    new(col: Excel.CubeFields): Enumerator<Excel.CubeField>;
    new(col: Excel.CustomProperties): Enumerator<Excel.CustomProperty>;
    new(col: Excel.CustomViews): Enumerator<Excel.CustomView>;
    new(col: Excel.DiagramNodeChildren | Excel.DiagramNodes): Enumerator<Excel.DiagramNode>;
    new(col: Excel.Dialogs): Enumerator<Excel.Dialog>;
    new(col: Excel.FileExportConverters): Enumerator<Excel.FileExportConverter>;
    new(col: Excel.Filters): Enumerator<Excel.Filter>;
    new(
        col: Excel.FormatConditions | Excel.IconSets | Excel.MenuItems | Excel.Modules | Excel.Phonetics | Excel.PivotFields | Excel.Range | Excel.ServerViewableItems |
        Excel.Sheets | Excel.SheetViews | Excel.UsedObjects): Enumerator<any>;
    new(col: Excel.GroupShapes | Excel.ShapeRange | Excel.Shapes): Enumerator<Excel.Shape>;
    new(col: Excel.HPageBreaks): Enumerator<Excel.HPageBreak>;
    new(col: Excel.Hyperlinks): Enumerator<Excel.Hyperlink>;
    new(col: Excel.IconSet): Enumerator<Excel.Icon>;
    new(col: Excel.ListColumns): Enumerator<Excel.ListColumn>;
    new(col: Excel.ListObjects): Enumerator<Excel.ListObject>;
    new(col: Excel.ListRows): Enumerator<Excel.ListRow>;
    new(col: Excel.MenuBars): Enumerator<Excel.MenuBar>;
    new(col: Excel.Menus): Enumerator<Excel.Menu>;
    new(col: Excel.Names): Enumerator<Excel.Name>;
    new(col: Excel.ODBCErrors): Enumerator<Excel.ODBCError>;
    new(col: Excel.OLEDBErrors): Enumerator<Excel.OLEDBError>;
    new(col: Excel.Pages): Enumerator<Excel.Page>;
    new(col: Excel.Parameters): Enumerator<Excel.Parameter>;
    new(col: Excel.PivotCaches): Enumerator<Excel.PivotCache>;
    new(col: Excel.PivotFilters): Enumerator<Excel.PivotFilter>;
    new(col: Excel.PivotFormulas): Enumerator<Excel.PivotFormula>;
    new(col: Excel.PivotLineCells): Enumerator<Excel.PivotCell>;
    new(col: Excel.PivotLines): Enumerator<Excel.PivotLine>;
    new(col: Excel.PivotTableChangeList): Enumerator<Excel.ValueChange>;
    new(col: Excel.ProtectedViewWindows): Enumerator<Excel.ProtectedViewWindow>;
    new(col: Excel.PublishObjects): Enumerator<Excel.PublishObject>;
    new(col: Excel.QueryTables): Enumerator<Excel.QueryTable>;
    new(col: Excel.RecentFiles): Enumerator<Excel.RecentFile>;
    new(col: Excel.ShapeNodes): Enumerator<Excel.ShapeNode>;
    new(col: Excel.SlicerCacheLevels): Enumerator<Excel.SlicerCacheLevel>;
    new(col: Excel.SlicerCaches): Enumerator<Excel.SlicerCache>;
    new(col: Excel.SlicerItems): Enumerator<Excel.SlicerItem>;
    new(col: Excel.SlicerPivotTables): Enumerator<Excel.PivotTable>;
    new(col: Excel.Slicers): Enumerator<Excel.Slicer>;
    new(col: Excel.SmartTagActions): Enumerator<Excel.SmartTagAction>;
    new(col: Excel.SmartTagRecognizers): Enumerator<Excel.SmartTagRecognizer>;
    new(col: Excel.SortFields): Enumerator<Excel.SortField>;
    new(col: Excel.SparklineGroup): Enumerator<Excel.Sparkline>;
    new(col: Excel.SparklineGroups): Enumerator<Excel.SparklineGroup>;
    new(col: Excel.Styles): Enumerator<Excel.Style>;
    new(col: Excel.TableStyleElements): Enumerator<Excel.TableStyleElement>;
    new(col: Excel.TableStyles): Enumerator<Excel.TableStyle>;
    new(col: Excel.ToolbarButtons): Enumerator<Excel.ToolbarButton>;
    new(col: Excel.Toolbars): Enumerator<Excel.Toolbar>;
    new(col: Excel.UserAccessList): Enumerator<Excel.UserAccess>;
    new(col: Excel.VPageBreaks): Enumerator<Excel.VPageBreak>;
    new(col: Excel.Watches): Enumerator<Excel.Watch>;
    new(col: Excel.Windows): Enumerator<Excel.Window>;
    new(col: Excel.Workbooks): Enumerator<Excel.Workbook>;
    new(col: Excel.XmlMaps): Enumerator<Excel.XmlMap>;
    new(col: Excel.XmlNamespaces): Enumerator<Excel.XmlNamespace>;
    new(col: Excel.XmlSchemas): Enumerator<Excel.XmlSchema>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
