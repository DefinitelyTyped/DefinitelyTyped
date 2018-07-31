// Type definitions for Microsoft Excel 14.0 Object Library - Excel 14.0
// Project: https://msdn.microsoft.com/en-us/library/fp179694.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="activex-office" />
/// <reference types="activex-vbide" />
/// <reference types="activex-stdole" />
/// <reference types="activex-adodb" />
/// <reference types="activex-dao" />

declare namespace Excel {
    type AddSheetResult<T> =
        T extends XlSheetType.xlDialogSheet ? DialogSheet :
        T extends XlSheetType.xlChart ? Chart :
        T extends XlSheetType ? Worksheet :
        T extends undefined ? Sheet :
        never;

    type InternationalResult<T> =
        T extends XlApplicationInternationalStrings ? string :
        T extends XlApplicationInternationalNumbers ? number :
        T extends XlApplicationInternationalBooleans ? boolean :
        any;

    type LineStyle = XlLineStyle | Constants.xlGray25 | Constants.xlGray50 | Constants.xlGray75 | Constants.xlAutomatic;

    type HorizontalAlignments = Constants.xlCenter | Constants.xlDistributed | Constants.xlJustify | Constants.xlLeft | Constants.xlRight;

    type VerticalAlignments = Constants.xlBottom | Constants.xlCenter | Constants.xlDistributed | Constants.xlJustify | Constants.xlTop;

    type PivotTableWizardSourceData<TSourceType> =
        TSourceType extends XlPivotTableSourceType.xlExternal ? SafeArray<string> :
        TSourceType extends XlPivotTableSourceType ? Range | SafeArray<Range> | string :
        TSourceType extends undefined ? undefined :
        never;

    type PivotTableWizardAutoPage<TSourceType> =
        TSourceType extends XlPivotTableSourceType.xlConsolidation ? boolean :
        undefined;

    type PrintToFileName<T> =
        T extends true ? string :
        undefined;

    type Sheet = Worksheet | Chart | DialogSheet;

    type SheetView = WorksheetView | DialogSheetView;

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

    const enum FunctionCategory {
        Commands = 10,
        Customizing = 11,
        Database = 6,
        DateAndTime = 2,
        DDEAndExternal = 13,
        Financial = 1,
        Information = 9,
        Logical = 8,
        LookupAndReference = 5,
        MacroControl = 12,
        MathAndTrig = 3,
        Statistical = 4,
        Text = 7,
        UserDefined = 14,
    }

    const enum InputBoxReturnType {
        Formula = 0,
        Number = 1,
        String = 2,
        Boolean = 4,
        Range = 8,
        ErrorValue = 16,
        SafeArray = 64,
    }

    const enum PivotFieldSubtotal {
        Automatic = 1,
        Average = 4,
        Count = 3,
        CountNums = 8,
        Max = 5,
        Min = 6,
        Product = 7,
        StdDev = 9,
        StdDevp = 10,
        Sum = 2,
        Var = 11,
        Varp = 12
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

    const enum XlApplicationInternationalStrings {
        xlAlternateArraySeparator = 16,
        xlColumnSeparator = 14,
        xlCurrencyCode = 25,
        xlDecimalSeparator = 3,
        xlGeneralFormatName = 26,
        xlLeftBrace = 12,
        xlLeftBracket = 10,
        xlListSeparator = 5,
        xlLowerCaseColumnLetter = 9,
        xlLowerCaseRowLetter = 8,
        xlRightBrace = 13,
        xlRightBracket = 11,
        xlUpperCaseColumnLetter = 7,
        xlUpperCaseRowLetter = 6,
        xlDateSeparator = 17,
        xlDayCode = 21,
        xlHourCode = 22,
        xlMinuteCode = 23,
        xlMonthCode = 20,
        xlRowSeparator = 15,
        xlSecondCode = 24,
        xlThousandsSeparator = 4,
        xlTimeSeparator = 18,
        xlYearCode = 19,
    }

    const enum XlApplicationInternationalNumbers {
        xlCountryCode = 1,
        xlCountrySetting = 2,
        xlCurrencyDigits = 27,
        xlCurrencyNegative = 28,
        xlNoncurrencyDigits = 29,
        xlDateOrder = 32,
        xlMonthNameChars = 30,
        xlWeekdayNameChars = 31,
    }

    const enum XlApplicationInternationalBooleans {
        xl24HourClock = 33,
        xl4DigitYears = 43,
        xlCurrencyBefore = 37,
        xlCurrencyLeadingZeros = 40,
        xlCurrencyMinusSign = 38,
        xlCurrencySpaceBefore = 36,
        xlCurrencyTrailingZeros = 39,
        xlDayLeadingZero = 42,
        xlMDY = 44,
        xlMetric = 35,
        xlMonthLeadingZero = 41,
        xlNonEnglishFunctions = 34,
        xlTimeLeadingZero = 45,
    }

    type XlApplicationInternational = XlApplicationInternationalStrings | XlApplicationInternationalNumbers | XlApplicationInternationalBooleans;

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

    class AboveAverage {
        private 'Excel.AboveAverage_typekey': AboveAverage;
        private constructor();
        AboveBelow: XlAboveBelow;
        readonly Application: Application;
        readonly AppliesTo: Range;
        readonly Borders: Borders;
        CalcFor: XlCalcFor;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Font: Font;
        readonly Interior: Interior;
        ModifyAppliesToRange(Range: Range): void;
        NumberFormat: string;
        NumStdDev: number;
        readonly Parent: any;
        Priority: number;
        readonly PTCondition: boolean;
        ScopeType: XlPivotConditionScope;
        SetFirstPriority(): void;
        SetLastPriority(): void;
        StopIfTrue: boolean;
        readonly Type: number;
    }

    class Action {
        private 'Excel.Action_typekey': Action;
        private constructor();
        readonly Application: Application;
        readonly Caption: string;
        readonly Content: string;
        readonly Coordinate: string;
        readonly Creator: XlCreator;
        Execute(): void;
        readonly Name: string;
        readonly Parent: any;
        readonly Type: XlActionType;
    }

    interface Actions {
        _Default(Index: number | string): Action;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): Action;
        readonly Parent: any;
        (Index: number | string): Action;
    }

    class AddIn {
        private 'Excel.AddIn_typekey': AddIn;
        private constructor();
        readonly Application: Application;
        readonly Author: string;
        readonly CLSID: string;
        readonly Comments: string;
        readonly Creator: XlCreator;
        readonly FullName: string;
        Installed: boolean;
        readonly IsOpen: boolean;
        readonly Keywords: string;
        readonly Name: string;
        readonly Parent: any;
        readonly Path: string;
        readonly progID: string;
        readonly Subject: string;
        readonly Title: string;
    }

    interface AddIns {
        _Default(Index: number | string): AddIn;
        Add(Filename: string, CopyFile?: boolean): AddIn;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): AddIn;
        readonly Parent: any;
        (Index: number | string): AddIn;
    }

    type AddIns2 = AddIns;

    interface Adjustments {
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): number;
        readonly Parent: any;
        (Index: number): number;
    }

    class AllowEditRange {
        private 'Excel.AllowEditRange_typekey': AllowEditRange;
        private constructor();
        ChangePassword(Password: string): void;
        Delete(): void;
        Range: Range;
        Title: string;
        Unprotect(Password?: string): void;
        readonly Users: UserAccessList;
    }

    interface AllowEditRanges {
        _Default(Index: number | string): AllowEditRange;
        Add(Title: string, Range: Range, Password?: string): AllowEditRange;
        readonly Count: number;
        Item(Index: number | string): AllowEditRange;
        (Index: number | string): AllowEditRange;
    }

    class Application {
        private 'Excel.Application_typekey': Application;
        private constructor();
        readonly _Default: string;
        _Evaluate(Name: any): any;
        _FindFile(): void;
        _MacroOptions(Macro?: any, Description?: any, HasMenu?: any, MenuText?: any, HasShortcutKey?: any, ShortcutKey?: any, Category?: any, StatusBar?: any, HelpContextID?: any, HelpFile?: any): void;
        _Run2(Macro?: any, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        _Wait(Time: any): void;
        _WSFunction(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        ActivateMicrosoftApp(Index: XlMSApplication): void;
        readonly ActiveCell: Range;
        readonly ActiveChart: Chart;
        readonly ActiveDialog: DialogSheet;
        readonly ActiveEncryptionSession: number;
        readonly ActiveMenuBar: MenuBar;
        ActivePrinter: string;
        readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        readonly ActiveSheet: Sheet;
        readonly ActiveWindow: Window;
        readonly ActiveWorkbook: Workbook;
        AddChartAutoFormat(Chart: any, Name: string, Description?: any): void;
        AddCustomList(ListArray: SafeArray<string> | Range, ByRow?: boolean): void;
        readonly AddIns: AddIns;
        readonly AddIns2: AddIns2;
        AlertBeforeOverwriting: boolean;
        AltStartupPath: string;
        AlwaysUseClearType: boolean;
        readonly AnswerWizard: Office.AnswerWizard;
        readonly Application: Application;
        readonly ArbitraryXMLSupportAvailable: boolean;
        AskToUpdateLinks: boolean;
        readonly Assistance: Office.IAssistance;
        readonly Assistant: Office.Assistant;
        readonly AutoCorrect: AutoCorrect;
        AutoFormatAsYouTypeReplaceHyperlinks: boolean;
        AutomationSecurity: Office.MsoAutomationSecurity;
        AutoPercentEntry: boolean;
        readonly AutoRecover: AutoRecover;
        readonly Build: number;
        Calculate(): void;
        CalculateBeforeSave: boolean;
        CalculateFull(): void;
        CalculateFullRebuild(): void;
        CalculateUntilAsyncQueriesDone(): void;
        Calculation: XlCalculation;
        CalculationInterruptKey: XlCalculationInterruptKey;
        readonly CalculationState: XlCalculationState;
        readonly CalculationVersion: number;
        Caller(Index?: number): Range | string | Error;
        readonly CanPlaySounds: boolean;
        readonly CanRecordSounds: boolean;
        Caption: string;
        CellDragAndDrop: boolean;
        readonly Cells: Range;
        CentimetersToPoints(Centimeters: number): number;
        readonly Charts: Sheets<Chart>;
        CheckAbort(KeepAbort?: boolean): void;
        CheckSpelling(Word: string, CustomDictionary?: string, IgnoreUppercase?: boolean): boolean;
        ClipboardFormats: SafeArray<XlClipboardFormat> & ((Index: number) => XlClipboardFormat);
        ClusterConnector: string;
        ColorButtons: boolean;
        readonly Columns: Range;
        readonly COMAddIns: Office.COMAddIns;
        readonly CommandBars: Office.CommandBars;
        CommandUnderlines: XlCommandUnderlines;
        ConstrainNumeric: boolean;
        ControlCharacters: boolean;
        ConvertFormula(Formula: string, FromReferenceStyle: XlReferenceStyle, ToReferenceStyle?: XlReferenceStyle, ToAbsolute?: XlReferenceType, RelativeTo?: Range): string;
        CopyObjectsWithCells: boolean;
        readonly Creator: XlCreator;
        Cursor: XlMousePointer;
        CursorMovement: number;
        readonly CustomListCount: number;
        CutCopyMode: XlCutCopyMode;
        DataEntryMode: number;
        readonly DDEAppReturnCode: number;
        DDEExecute(Channel: number, String: string): void;
        DDEInitiate(App: string, Topic: string): number;
        DDEPoke(Channel: number, Item: any, Data: any): void;
        DDERequest(Channel: number, Item: string): any;
        DDETerminate(Channel: number): void;
        DecimalSeparator: string;
        DefaultFilePath: string;
        DefaultSaveFormat: XlFileFormat;
        DefaultSheetDirection: number;
        readonly DefaultWebOptions: DefaultWebOptions;
        DeferAsyncQueries: boolean;
        DeleteChartAutoFormat(Name: string): void;
        DeleteCustomList(ListNum: number): void;
        readonly Dialogs: Dialogs;
        readonly DialogSheets: Sheets<DialogSheet>;
        DisplayAlerts: boolean;
        DisplayClipboardWindow: boolean;
        DisplayCommentIndicator: XlCommentDisplayMode;
        DisplayDocumentActionTaskPane: boolean;
        DisplayDocumentInformationPanel: boolean;
        DisplayExcel4Menus: boolean;
        DisplayFormulaAutoComplete: boolean;
        DisplayFormulaBar: boolean;
        DisplayFullScreen: boolean;
        DisplayFunctionToolTips: boolean;
        DisplayInfoWindow: boolean;
        DisplayInsertOptions: boolean;
        DisplayNoteIndicator: boolean;
        DisplayPasteOptions: boolean;
        DisplayRecentFiles: boolean;
        DisplayScrollBars: boolean;
        DisplayStatusBar: boolean;
        DisplayXMLSourcePane(XmlMap?: XmlMap): void;
        DoubleClick(): void;
        Dummy1(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        Dummy10(arg?: any): boolean;
        readonly Dummy101: any;
        Dummy11(): void;
        Dummy12(p1: PivotTable, p2: PivotTable): void;
        Dummy13(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        Dummy14(): void;
        Dummy2(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any): any;
        Dummy20(grfCompareFunctions: number): any;
        Dummy22: boolean;
        Dummy23: boolean;
        Dummy3(): any;
        Dummy4(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any): any;
        Dummy5(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any): any;
        Dummy6(): any;
        Dummy7(): any;
        Dummy8(Arg1?: any): any;
        Dummy9(): any;
        EditDirectlyInCell: boolean;
        EnableAnimations: boolean;
        EnableAutoComplete: boolean;
        EnableCancelKey: XlEnableCancelKey;
        EnableEvents: boolean;
        EnableLargeOperationAlert: boolean;
        EnableLivePreview: boolean;
        EnableSound: boolean;
        EnableTipWizard: boolean;
        readonly ErrorCheckingOptions: ErrorCheckingOptions;
        Evaluate(Name: string): any;
        readonly Excel4IntlMacroSheets: Sheets;
        readonly Excel4MacroSheets: Sheets;
        ExecuteExcel4Macro(String: string): any;
        ExtendList: boolean;
        FeatureInstall: Office.MsoFeatureInstall;
        FileConverters(Index1?: string, Index2?: string): SafeArray;
        FileDialog(fileDialogType: Office.MsoFileDialogType): Office.FileDialog;
        readonly FileExportConverters: FileExportConverters;
        readonly FileFind: Office.IFind;
        readonly FileSearch: Office.FileSearch;
        FileValidation: Office.MsoFileValidationMode;
        FileValidationPivot: XlFileValidationPivotMode;
        FindFile(): boolean;
        FindFormat: CellFormat;
        FixedDecimal: boolean;
        FixedDecimalPlaces: number;
        FormulaBarHeight: number;
        GenerateGetPivotData: boolean;
        GenerateTableRefs: XlGenerateTableRefs;
        GetCustomListContents(ListNum: number): SafeArray<string>;
        GetCustomListNum(ListArray: SafeArray<string>): number;

        /** @param ButtonText Macintosh only */
        GetOpenFilename(FileFilter?: string, FilterIndex?: number, Title?: string, ButtonText?: null, MultiSelect?: false): string;

        /** @param ButtonText Macintosh only */
        GetOpenFilename(FileFilter: string | null, FilterIndex: number | null, Title: string | null, ButtonText: null, MultiSelect: true): SafeArray<string>;
        GetPhonetic(Text?: string): string;

        /** @param ButtonText Macintosh only */
        GetSaveAsFilename(InitialFilename?: string, FileFilter?: string, FilterIndex?: number, Title?: string, ButtonText?: undefined): string;
        Goto(Reference?: Range | string, Scroll?: boolean): void;
        Height: number;
        Help(HelpFile?: string, HelpContextID?: number): void;
        HighQualityModeForGraphics: boolean;
        readonly Hinstance: number;
        readonly HinstancePtr: number;
        readonly Hwnd: number;
        IgnoreRemoteRequests: boolean;
        InchesToPoints(Inches: number): number;
        InputBox(Prompt: string, Title?: string, Default?: string, Left?: number, Top?: number, HelpFile?: string, HelpContextID?: number, Type?: InputBoxReturnType): string | number | boolean | Range | Error | SafeArray<string> | SafeArray<number> | SafeArray<boolean>;
        Interactive: boolean;
        International: SafeArray & (<T>(Index: T) => InternationalResult<T>);
        Intersect(Arg1: Range, Arg2: Range, Arg3?: Range, Arg4?: Range, Arg5?: Range, Arg6?: Range, Arg7?: Range, Arg8?: Range, Arg9?: Range, Arg10?: Range, Arg11?: Range, Arg12?: Range, Arg13?: Range, Arg14?: Range, Arg15?: Range, Arg16?: Range, Arg17?: Range, Arg18?: Range, Arg19?: Range, Arg20?: Range, Arg21?: Range, Arg22?: Range, Arg23?: Range, Arg24?: Range, Arg25?: Range, Arg26?: Range, Arg27?: Range, Arg28?: Range, Arg29?: Range, Arg30?: Range): Range;
        readonly IsSandboxed: boolean;
        Iteration: boolean;
        readonly LanguageSettings: Office.LanguageSettings;
        LargeButtons: boolean;
        LargeOperationCellThousandCount: number;
        Left: number;
        readonly LibraryPath: string;
        MacroOptions(Macro?: string, Description?: string, HasMenu?: undefined, MenuText?: undefined, HasShortcutKey?: boolean, ShortcutKey?: string, Category?: FunctionCategory | string, StatusBar?: string, HelpContextID?: number, HelpFile?: string, ArgumentDescriptions?: SafeArray<string>): void;
        MailLogoff(): void;
        MailLogon(Name?: string, Password?: string, DownloadNewMail?: boolean): void;
        readonly MailSession: string | null;
        readonly MailSystem: XlMailSystem;
        MapPaperSize: boolean;
        readonly MathCoprocessorAvailable: boolean;
        MaxChange: number;
        MaxIterations: number;
        MeasurementUnit: number;
        readonly MemoryFree: number;
        readonly MemoryTotal: number;
        readonly MemoryUsed: number;
        readonly MenuBars: MenuBars;
        readonly Modules: Modules;
        readonly MouseAvailable: boolean;
        MoveAfterReturn: boolean;
        MoveAfterReturnDirection: XlDirection;
        readonly MultiThreadedCalculation: MultiThreadedCalculation;
        readonly Name: string;
        readonly Names: Names;
        readonly NetworkTemplatesPath: string;
        readonly NewWorkbook: Office.NewFile;
        NextLetter(): Workbook;
        readonly ODBCErrors: ODBCErrors;
        ODBCTimeout: number;
        readonly OLEDBErrors: OLEDBErrors;
        OnCalculate: string;
        OnData: string;
        OnDoubleClick: string;
        OnEntry: string;
        OnKey(Key: string, Procedure?: string): void;
        OnRepeat(Text: string, Procedure: string): void;
        OnSheetActivate: string;
        OnSheetDeactivate: string;
        OnTime(EarliestTime: any, Procedure: string, LatestTime?: any, Schedule?: boolean): void;
        OnUndo(Text: string, Procedure: string): void;
        OnWindow: string;
        readonly OperatingSystem: string;
        readonly OrganizationName: string;
        readonly Parent: Application;
        readonly Path: string;
        readonly PathSeparator: string;
        PivotTableSelection: boolean;
        PreviousSelections(Index: 1 | 2 | 3 | 4): Range | null;
        PrintCommunication: boolean;
        readonly ProductCode: string;
        PromptForSummaryInfo: boolean;
        readonly ProtectedViewWindows: ProtectedViewWindows;
        Quit(): void;
        readonly Quitting: boolean;
        Range(Cell1: string | Range, Cell2?: string | Range): Range;
        readonly Ready: boolean;
        readonly RecentFiles: RecentFiles;
        RecordMacro(BasicCode: string): void;

        /** This overload prevents recording */
        RecordMacro(BasicCode: '', XlmCode: ''): void;
        readonly RecordRelative: boolean;
        ReferenceStyle: XlReferenceStyle;
        RegisteredFunctions(Index1: string | undefined, Index2?: string): SafeArray | null;
        RegisterXLL(Filename: string): boolean;
        Repeat(): void;
        ReplaceFormat: CellFormat;
        ResetTipWizard(): void;
        RollZoom: boolean;
        readonly Rows: Range;
        readonly RTD: RTD;
        Run(Macro?: string | Range | number, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        Save(Filename?: any): void;
        SaveISO8601Dates: boolean;

        /** @deprecated */
        SaveWorkspace(Filename?: any): void;
        ScreenUpdating: boolean;
        readonly Selection: any;
        SendKeys(Keys: string, Wait?: boolean): void;
        SetDefaultChart(FormatName?: any, Gallery?: any): void;
        SharePointVersion(bstrUrl: string): number;
        readonly Sheets: Sheets;
        SheetsInNewWorkbook: number;
        ShortcutMenus(Index: number): Menu;
        ShowChartTipNames: boolean;
        ShowChartTipValues: boolean;
        ShowDevTools: boolean;
        ShowMenuFloaties: boolean;
        ShowSelectionFloaties: boolean;
        ShowStartupDialog: boolean;
        ShowToolTips: boolean;
        ShowWindowsInTaskbar: boolean;
        readonly SmartArtColors: Office.SmartArtColors;
        readonly SmartArtLayouts: Office.SmartArtLayouts;
        readonly SmartArtQuickStyles: Office.SmartArtQuickStyles;
        readonly SmartTagRecognizers: SmartTagRecognizers;
        readonly Speech: Speech;
        readonly SpellingOptions: SpellingOptions;
        StandardFont: string;
        StandardFontSize: number;
        readonly StartupPath: string;

        /**
         * Get or set the text of the status bar
         *
         * Returns `false` if Microsoft Excel has control of the status bar.
         *
         * To restore the default status bar text, set the property to False ; this works even if the status bar is hidden.
         */
        StatusBar: string | false;
        Support(Object: any, ID: number, arg?: any): any;
        readonly TemplatesPath: string;
        readonly ThisCell: Range;
        readonly ThisWorkbook: Workbook;
        ThousandsSeparator: string;
        readonly Toolbars: Toolbars;
        Top: number;
        TransitionMenuKey: string;
        TransitionMenuKeyAction: number;
        TransitionNavigKeys: boolean;
        UILanguage: number;
        Undo(): void;
        Union(Arg1: Range, Arg2: Range, Arg3?: Range, Arg4?: Range, Arg5?: Range, Arg6?: Range, Arg7?: Range, Arg8?: Range, Arg9?: Range, Arg10?: Range, Arg11?: Range, Arg12?: Range, Arg13?: Range, Arg14?: Range, Arg15?: Range, Arg16?: Range, Arg17?: Range, Arg18?: Range, Arg19?: Range, Arg20?: Range, Arg21?: Range, Arg22?: Range, Arg23?: Range, Arg24?: Range, Arg25?: Range, Arg26?: Range, Arg27?: Range, Arg28?: Range, Arg29?: Range, Arg30?: Range): Range;
        readonly UsableHeight: number;
        readonly UsableWidth: number;
        UseClusterConnector: boolean;
        readonly UsedObjects: UsedObjects;
        UserControl: boolean;
        readonly UserLibraryPath: string;
        UserName: string;
        UseSystemSeparators: boolean;
        readonly Value: string;
        readonly VBE: VBIDE.VBE;
        readonly Version: string;
        Visible: boolean;

        /**
         * @param Volatile [Volatile=true]
         */
        Volatile(Volatile?: boolean): void;
        Wait(Time: any): boolean;
        WarnOnFunctionNameConflict: boolean;
        readonly Watches: Watches;
        Width: number;
        readonly Windows: Windows;
        readonly WindowsForPens: boolean;
        WindowState: XlWindowState;
        readonly Workbooks: Workbooks;
        readonly WorksheetFunction: WorksheetFunction;
        readonly Worksheets: Sheets<Worksheet>;
    }

    interface Areas {
        _Default(Index: number): Range;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): Range;
        readonly Parent: any;
        (Index: number): Range;
    }

    class AutoCorrect {
        private 'Excel.AutoCorrect_typekey': AutoCorrect;
        private constructor();

        /** @returns The string to be replaced */
        AddReplacement(What: string, Replacement: string): string;
        readonly Application: Application;
        AutoExpandListRange: boolean;
        AutoFillFormulasInLists: boolean;
        CapitalizeNamesOfDays: boolean;
        CorrectCapsLock: boolean;
        CorrectSentenceCap: boolean;
        readonly Creator: XlCreator;

        /** @returns The string to be replaced */
        DeleteReplacement(What: string): string;
        DisplayAutoCorrectOptions: boolean;
        readonly Parent: any;
        ReplacementList(Index: number): SafeArray<string>;
        ReplaceText: boolean;
        TwoInitialCapitals: boolean;
    }

    class AutoFilter {
        private 'Excel.AutoFilter_typekey': AutoFilter;
        private constructor();
        readonly Application: Application;
        ApplyFilter(): void;
        readonly Creator: XlCreator;
        readonly FilterMode: boolean;
        readonly Filters: Filters;
        readonly Parent: any;
        readonly Range: Range;
        ShowAllData(): void;
        readonly Sort: Sort;
    }

    class AutoRecover {
        private 'Excel.AutoRecover_typekey': AutoRecover;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Enabled: boolean;
        readonly Parent: any;
        Path: string;
        Time: number;
    }

    interface Axes {
        /** @param AxisGroup [AxisGroup=1] */
        _Default(Type: XlAxisType, AxisGroup?: XlAxisGroup): Axis;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;

        /** @param AxisGroup [AxisGroup=1] */
        Item(Type: XlAxisType, AxisGroup?: XlAxisGroup): Axis;
        readonly Parent: any;

        /** @param AxisGroup [AxisGroup=1] */
        (Type: XlAxisType, AxisGroup?: XlAxisGroup): Axis;
    }

    class Axis {
        private 'Excel.Axis_typekey': Axis;
        private constructor();
        readonly Application: Application;
        AxisBetweenCategories: boolean;
        readonly AxisGroup: XlAxisGroup;
        readonly AxisTitle: AxisTitle;
        BaseUnit: XlTimeUnit;
        BaseUnitIsAuto: boolean;
        readonly Border: Border;
        CategoryNames: SafeArray<string> | Range;
        CategoryType: XlCategoryType;
        readonly Creator: XlCreator;
        Crosses: XlAxisCrosses;
        CrossesAt: number;
        Delete(): any;
        DisplayUnit: XlDisplayUnit;
        DisplayUnitCustom: number;
        readonly DisplayUnitLabel: DisplayUnitLabel;
        readonly Format: ChartFormat;
        HasDisplayUnitLabel: boolean;
        HasMajorGridlines: boolean;
        HasMinorGridlines: boolean;
        HasTitle: boolean;
        readonly Height: number;
        readonly Left: number;
        LogBase: number;
        readonly MajorGridlines: Gridlines;
        MajorTickMark: XlTickMark;
        MajorUnit: number;
        MajorUnitIsAuto: boolean;
        MajorUnitScale: XlTimeUnit;
        MaximumScale: number;
        MaximumScaleIsAuto: boolean;
        MinimumScale: number;
        MinimumScaleIsAuto: boolean;
        readonly MinorGridlines: Gridlines;
        MinorTickMark: XlTickMark;
        MinorUnit: number;
        MinorUnitIsAuto: boolean;
        MinorUnitScale: XlTimeUnit;
        readonly Parent: any;
        ReversePlotOrder: boolean;
        ScaleType: XlScaleType;
        Select(): any;
        TickLabelPosition: XlTickLabelPosition;
        readonly TickLabels: TickLabels;
        TickLabelSpacing: number;
        TickLabelSpacingIsAuto: boolean;
        TickMarkSpacing: number;
        readonly Top: number;
        Type: XlAxisType;
        readonly Width: number;
    }

    class AxisTitle {
        private 'Excel.AxisTitle_typekey': AxisTitle;
        private constructor();
        readonly Application: Application;
        AutoScaleFont: any;
        readonly Border: Border;
        Caption: string;
        Characters(Start?: number, Length?: number): Characters;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: Font;
        readonly Format: ChartFormat;
        Formula: string;
        FormulaLocal: string;
        FormulaR1C1: string;
        FormulaR1C1Local: string;
        readonly Height: number;
        HorizontalAlignment: HorizontalAlignments;
        IncludeInLayout: boolean;
        readonly Interior: Interior;
        Left: number;
        readonly Name: string;
        Orientation: number | XlOrientation;
        readonly Parent: any;
        Position: XlChartElementPosition;
        ReadingOrder: number;
        Select(): any;
        Shadow: boolean;
        Text: string;
        Top: number;
        VerticalAlignment: VerticalAlignments;
        readonly Width: number;
    }

    class Border {
        private 'Excel.Border_typekey': Border;
        private constructor();
        readonly Application: Application;
        Color: XlRgbColor | number;
        ColorIndex: number | XlColorIndex;
        readonly Creator: XlCreator;
        LineStyle: LineStyle;
        readonly Parent: any;
        ThemeColor: XlThemeColor;
        TintAndShade: number;
        Weight: XlBorderWeight;
    }

    interface Borders {
        _Default(Index: XlBordersIndex): Border;
        readonly Application: Application;
        Color: XlRgbColor | number;
        ColorIndex: number | XlColorIndex | null;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: XlBordersIndex): Border;
        LineStyle: LineStyle;
        readonly Parent: any;
        ThemeColor: XlThemeColor;
        TintAndShade: number;
        Value: LineStyle;
        Weight: XlBorderWeight;
        (Index: XlBordersIndex): Border;
    }

    interface CalculatedFields {
        _Add(Name: string, Formula: string): PivotField;
        _Default(Field: any): PivotField;

        /**
         * @param UseStandardFormula [UseStandardFormula=false]
         */
        Add(Name: string, Formula: string, UseStandardFormula?: boolean): PivotField;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): PivotField;
        readonly Parent: any;
        (Field: number | string): PivotField;
    }

    interface CalculatedItems {
        _Add(Name: string, Formula: string): PivotItem;
        _Default(Field: number | string): PivotItem;

        /**
         * @param UseStandardFormula [UseStandardFormula=false]
         */
        Add(Name: string, Formula: string, UseStandardFormula?: boolean): PivotItem;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): PivotItem;
        readonly Parent: any;
        (Field: number | string): PivotItem;
    }

    class CalculatedMember {
        private 'Excel.CalculatedMember_typekey': CalculatedMember;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly DisplayFolder: string;
        readonly Dynamic: boolean;
        FlattenHierarchies: boolean;
        readonly Formula: string;
        HierarchizeDistinct: boolean;
        readonly IsValid: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly SolveOrder: number;
        readonly SourceName: string;
        readonly Type: XlCalculatedMemberType;
    }

    interface CalculatedMembers {
        _Add(Name: string, Formula: string, SolveOrder?: any, Type?: any): CalculatedMember;
        _Default(Index: any): CalculatedMember;
        Add(Name: string, Formula: string, SolveOrder?: number, Type?: XlCalculatedMemberType, Dynamic?: boolean, DisplayFolder?: string, HierarchizeDistinct?: boolean): CalculatedMember;

        /** @version 2013 */
        AddCalculatedMember(Name: string, Formula: string, SolveOrder?: number, Type?: XlCalculatedMemberType, DisplayFolder?: string, MeasureGroup?: any, ParentMember?: any, NumberFormat?: any): CalculatedMember;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): CalculatedMember;
        readonly Parent: any;
        (Index: number | string): CalculatedMember;
    }

    class CalloutFormat {
        private 'Excel.CalloutFormat_typekey': CalloutFormat;
        private constructor();
        Accent: Office.MsoTriState;
        Angle: Office.MsoCalloutAngleType;
        readonly Application: any;
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

    class CellFormat {
        private 'Excel.CellFormat_typekey': CellFormat;
        private constructor();
        AddIndent: boolean;
        readonly Application: Application;
        Borders: Borders;
        Clear(): void;
        readonly Creator: XlCreator;
        Font: Font;
        FormulaHidden: boolean | null;
        HorizontalAlignment: HorizontalAlignments;
        IndentLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
        Interior: Interior;
        Locked: boolean | null;
        MergeCells: boolean;
        NumberFormat: string | null;
        NumberFormatLocal: string | null;
        Orientation: number | XlOrientation;
        readonly Parent: any;
        ShrinkToFit: boolean | null;
        VerticalAlignment: VerticalAlignments;
        WrapText: boolean | null;
    }

    class Characters {
        private 'Excel.Characters_typekey': Characters;
        private constructor();
        readonly Application: Application;
        Caption: string;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): null;
        readonly Font: Font;
        Insert(String: string | null): string;
        readonly Parent: any;
        PhoneticCharacters: string;
        Text: string;
    }

    class Chart {
        private 'Excel.Chart_typekey': Chart;
        private constructor();
        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;

        /** @param Type [Type=2] */
        _ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any): void;
        _CodeName: string;
        _Evaluate(Name: any): any;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        _SaveAs(Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any): void;
        Activate(): void;
        readonly Application: Application;
        ApplyChartTemplate(Filename: string): void;
        ApplyCustomType(ChartType: XlChartType, TypeName?: any): void;

        /** @param Type [Type=2] */
        ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: boolean, AutoText?: boolean, HasLeaderLines?: boolean, ShowSeriesName?: boolean, ShowCategoryName?: boolean, ShowValue?: boolean, ShowPercentage?: boolean, ShowBubbleSize?: boolean, Separator?: string): void;
        ApplyLayout(Layout: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, ChartType?: XlChartType): void;
        Arcs(Index?: any): any;
        readonly Area3DGroup: ChartGroup;
        AreaGroups(Index?: any): any;
        AutoFormat(Gallery: number, Format?: any): void;
        AutoScaling: boolean;

        /** @param AxisGroup [AxisGroup=1] */
        Axes(Type?: XlAxisType, AxisGroup?: XlAxisGroup): Axes | Axis;
        readonly BackWall: Walls;
        readonly Bar3DGroup: ChartGroup;
        BarGroups(Index?: any): any;
        BarShape: XlBarShape;
        Buttons(Index?: any): any;
        readonly ChartArea: ChartArea;
        ChartObjects(Index?: SafeArray<string | number>): ChartObjects;
        ChartObjects(Index: string | number): ChartObject;
        ChartStyle: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48;
        readonly ChartTitle: ChartTitle;
        ChartType: XlChartType;
        ChartWizard(Source?: Range, Gallery?: XlChartType, Format?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, PlotBy?: XlRowCol, CategoryLabels?: number, SeriesLabels?: number, HasLegend?: boolean, Title?: string, CategoryTitle?: string, ValueTitle?: string, ExtraTitle?: string): void;
        CheckBoxes(Index?: any): any;
        CheckSpelling(CustomDictionary?: string, IgnoreUppercase?: boolean, AlwaysSuggest?: boolean, SpellLang?: Office.MsoLanguageID): void;
        ClearToMatchStyle(): void;
        readonly CodeName: string;
        readonly Column3DGroup: ChartGroup;
        ColumnGroups(Index?: any): any;
        Copy(Before?: Sheet): void;
        Copy(Before: undefined, After: Sheet): void;
        CopyChartBuild(): void;

        /**
         * @param Appearance [Appearance=1]
         * @param Format [Format=-4147]
         * @param Size [Size=2]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat, Size?: XlPictureAppearance): void;
        readonly Corners: Corners;

        /**
         * @param Appearance [Appearance=1]
         * @param Size [Size=1]
         */
        CreatePublisher(Edition: any, Appearance?: XlPictureAppearance, Size?: XlPictureAppearance, ContainsPICT?: any, ContainsBIFF?: any, ContainsRTF?: any, ContainsVALU?: any): void;
        readonly Creator: XlCreator;
        readonly DataTable: DataTable;
        Delete(): void;
        DepthPercent: number;
        Deselect(): void;
        DisplayBlanksAs: XlDisplayBlanksAs;
        DoughnutGroups(Index?: any): any;
        DrawingObjects(Index?: any): any;
        Drawings(Index?: any): any;
        DropDowns(Index?: any): any;
        Dummy24: boolean;
        Dummy25: boolean;
        Elevation: number;
        Evaluate(Name: string): any;
        Export(Filename: string, FilterName?: string, Interactive?: boolean): boolean;
        ExportAsFixedFormat(Type: XlFixedFormatType, Filename?: string, Quality?: XlFixedFormatQuality, IncludeDocProperties?: boolean, IgnorePrintAreas?: boolean, From?: number, To?: number, OpenAfterPublish?: boolean, FixedFormatExtClassPtr?: any): void;
        readonly Floor: Floor;
        GapDepth: number;
        GetChartElement(x: number, y: number, ElementID: number, Arg1: number, Arg2: number): void;
        GroupBoxes(Index?: any): any;
        GroupObjects(Index?: any): any;
        HasAxis(Index1?: XlAxisType, Index2?: XlAxisGroup): boolean;
        HasDataTable: boolean;
        HasLegend: boolean;
        HasPivotFields: boolean;
        HasTitle: boolean;
        HeightPercent: number;
        readonly Hyperlinks: Hyperlinks;
        readonly Index: number;
        Labels(Index?: any): any;
        readonly Legend: Legend;
        readonly Line3DGroup: ChartGroup;
        LineGroups(Index?: any): any;
        Lines(Index?: any): any;
        ListBoxes(Index?: any): any;
        Location(Where: XlChartLocation.xlLocationAsObject, Name: string): Chart;
        Location(Where: XlChartLocation, Name?: string): Chart;
        readonly MailEnvelope: Office.MsoEnvelope;
        Move(Before?: Sheet, After?: Sheet): void;
        Name: string;
        readonly Next: Sheet;
        OLEObjects(Index: number | string): OLEObject;
        OLEObjects(): OLEObjects;
        OnDoubleClick: string;
        OnSheetActivate: string;
        OnSheetDeactivate: string;
        OptionButtons(Index?: any): any;
        Ovals(Index?: any): any;
        readonly PageSetup: PageSetup;
        readonly Parent: any;
        Paste(Type?: XlPasteType.xlPasteAll | XlPasteType.xlPasteFormats | XlPasteType.xlPasteFormulas): void;
        Perspective: number;
        Pictures(Index?: any): any;
        readonly Pie3DGroup: ChartGroup;
        PieGroups(Index?: any): any;
        readonly PivotLayout: PivotLayout;
        readonly PlotArea: PlotArea;
        PlotBy: XlRowCol;
        PlotVisibleOnly: boolean;
        readonly Previous: Sheet;
        readonly PrintedCommentPages: number;
        PrintOut<T extends boolean | undefined>(From?: number, To?: number, Copies?: number, Preview?: boolean, ActivePrinter?: string, PrintToFile?: T, Collate?: boolean, PrToFileName?: PrintToFileName<T>): any;
        PrintPreview(EnableChanges?: boolean): void;

        /** @param Scenarios Passing `true` for this argument is only valid on worksheets */
        Protect(Password?: string, DrawingObjects?: boolean, Contents?: boolean, Scenarios?: false, UserInterfaceOnly?: boolean): void;
        readonly ProtectContents: boolean;
        ProtectData: boolean;
        readonly ProtectDrawingObjects: boolean;
        ProtectFormatting: boolean;
        ProtectGoalSeek: boolean;
        readonly ProtectionMode: boolean;
        ProtectSelection: boolean;
        RadarGroups(Index?: any): any;
        Rectangles(Index?: any): any;
        Refresh(): void;

        /** `true` if the chart axes are at right angles, independent of chart rotation or elevation. Applies only to 3-D line, column, and bar charts. */
        RightAngleAxes: boolean;
        Rotation: number;
        SaveAs(Filename: string, FileFormat?: XlFileFormat, Password?: string, WriteResPassword?: string, ReadOnlyRecommended?: boolean, CreateBackup?: boolean, AddToMru?: boolean, TextCodepage?: any, TextVisualLayout?: any, Local?: any): void;
        SaveChartTemplate(Filename: string): void;
        readonly Scripts: Office.Scripts;
        ScrollBars(Index?: any): any;
        Select(Replace?: boolean): void;
        SeriesCollection(Index?: number | string): SeriesCollection | Series;
        SetBackgroundPicture(Filename: string): void;
        SetDefaultChart(Name: any): void;
        SetElement(Element: Office.MsoChartElementType): void;
        SetSourceData(Source: Range, PlotBy?: XlRowCol): void;
        readonly Shapes: Shapes;
        ShowAllFieldButtons: boolean;
        ShowAxisFieldButtons: boolean;
        ShowDataLabelsOverMaximum: boolean;
        ShowLegendFieldButtons: boolean;
        ShowReportFilterFieldButtons: boolean;
        ShowValueFieldButtons: boolean;
        ShowWindow: boolean;
        readonly SideWall: Walls;
        SizeWithWindow: boolean;
        Spinners(Index?: any): any;
        SubType: number;
        readonly SurfaceGroup: ChartGroup;
        readonly Tab: Tab;
        TextBoxes(Index?: any): any;
        Type: number;
        Unprotect(Password?: string): void;
        Visible: XlSheetVisibility;
        readonly Walls: Walls;
        WallsAndGridlines2D: boolean;
        XYGroups(Index?: any): any;
    }

    class ChartArea {
        private 'Excel.ChartArea_typekey': ChartArea;
        private constructor();
        readonly Application: Application;
        AutoScaleFont: any;
        readonly Border: Border;
        Clear(): any;
        ClearContents(): any;
        ClearFormats(): any;
        Copy(): any;
        readonly Creator: XlCreator;
        readonly Fill: ChartFillFormat;
        readonly Font: Font;
        readonly Format: ChartFormat;
        Height: number;
        readonly Interior: Interior;
        Left: number;
        readonly Name: string;
        readonly Parent: any;
        RoundedCorners: boolean;
        Select(): any;
        Shadow: boolean;
        Top: number;
        Width: number;
    }

    class ChartColorFormat {
        private 'Excel.ChartColorFormat_typekey': ChartColorFormat;
        private constructor();
        readonly _Default: number;
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Parent: any;
        readonly RGB: number;
        SchemeColor: number;
        readonly Type: number;
    }

    class ChartFillFormat {
        private 'Excel.ChartFillFormat_typekey': ChartFillFormat;
        private constructor();
        readonly Application: Application;
        readonly BackColor: ChartColorFormat;
        readonly Creator: XlCreator;
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

    class ChartFormat {
        private 'Excel.ChartFormat_typekey': ChartFormat;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Fill: FillFormat;
        readonly Glow: Office.GlowFormat;
        readonly Line: LineFormat;
        readonly Parent: any;
        readonly PictureFormat: PictureFormat;
        readonly Shadow: ShadowFormat;
        readonly SoftEdge: Office.SoftEdgeFormat;
        readonly TextFrame2: TextFrame2;
        readonly ThreeD: ThreeDFormat;
    }

    class ChartGroup {
        private 'Excel.ChartGroup_typekey': ChartGroup;
        private constructor();
        readonly Application: Application;
        AxisGroup: XlAxisGroup;
        BubbleScale: number;
        readonly Creator: XlCreator;
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
        SeriesCollection(Index?: number | string): SeriesCollection | Series;
        readonly SeriesLines: SeriesLines;
        ShowNegativeBubbles: boolean;
        SizeRepresents: XlSizeRepresents;
        SplitType: XlChartSplitType;
        SplitValue: number;
        SubType: number;
        Type: number;
        readonly UpBars: UpBars;
        VaryByCategories: boolean;
    }

    interface ChartGroups {
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): ChartGroup;
        readonly Parent: any;
        (Index: number): ChartGroup;
    }

    class ChartObject {
        private 'Excel.ChartObject_typekey': ChartObject;
        private constructor();
        _Copy(): any;
        Activate(): any;
        readonly Application: Application;
        readonly Border: Border;
        readonly BottomRightCell: Range;
        BringToFront(): any;
        readonly Chart: Chart;
        Copy(): any;

        /**
         * @param Appearance [Appearance=2]
         * @param Format [Format=-4147]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        readonly Creator: XlCreator;
        Cut(): any;
        Delete(): any;
        Duplicate(): any;
        Enabled: boolean;
        Height: number;
        readonly Index: number;
        readonly Interior: Interior;
        Left: number;
        Locked: boolean;
        Name: string;
        OnAction: string;
        readonly Parent: any;
        Placement: XlPlacement;
        PrintObject: boolean;
        ProtectChartObject: boolean;
        RoundedCorners: boolean;
        Select(Replace?: boolean): any;
        SendToBack(): any;
        Shadow: boolean;
        readonly ShapeRange: ShapeRange;
        Top: number;
        readonly TopLeftCell: Range;
        Visible: boolean;
        Width: number;
        readonly ZOrder: number;
    }

    interface ChartObjects {
        _Copy(): any;
        _Default(Index: any): any;
        Add(Left: number, Top: number, Width: number, Height: number): ChartObject;
        readonly Application: Application;
        readonly Border: Border;
        BringToFront(): any;
        Copy(): any;

        /**
         * @param Appearance [Appearance=2]
         * @param Format [Format=-4147]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        readonly Count: number;
        readonly Creator: XlCreator;
        Cut(): any;
        Delete(): any;
        Duplicate(): any;
        Enabled: boolean;
        Group(): GroupObject;
        Height: number;
        readonly Interior: Interior;
        Item(Index: number | string): ChartObject;
        Left: number;
        Locked: boolean;
        OnAction: string;
        readonly Parent: any;
        Placement: XlPlacement;
        PrintObject: boolean;
        ProtectChartObject: boolean;
        RoundedCorners: boolean;
        Select(Replace?: boolean): any;
        SendToBack(): any;
        Shadow: boolean;
        readonly ShapeRange: ShapeRange;
        Top: number;
        Visible: boolean;
        Width: number;
        (Index: number | string): any;
    }

    class ChartTitle {
        private 'Excel.ChartTitle_typekey': ChartTitle;
        private constructor();
        readonly Application: Application;
        AutoScaleFont: any;
        readonly Border: Border;
        Caption: string;
        Characters(Start?: number, Length?: number): Characters;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: Font;
        readonly Format: ChartFormat;
        Formula: string;
        FormulaLocal: string;
        FormulaR1C1: string;
        FormulaR1C1Local: string;
        readonly Height: number;
        HorizontalAlignment: HorizontalAlignments;
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
        VerticalAlignment: VerticalAlignments;
        readonly Width: number;
    }

    class ColorFormat {
        private 'Excel.ColorFormat_typekey': ColorFormat;
        private constructor();
        readonly Application: any;
        Brightness: number;
        readonly Creator: number;
        ObjectThemeColor: Office.MsoThemeColorIndex;
        readonly Parent: any;
        RGB: Office.MsoRGBType;
        SchemeColor: number;
        TintAndShade: number;
        readonly Type: Office.MsoColorType;
    }

    class ColorScale {
        private 'Excel.ColorScale_typekey': ColorScale;
        private constructor();
        readonly Application: Application;
        readonly AppliesTo: Range;
        readonly ColorScaleCriteria: ColorScaleCriteria;
        readonly Creator: XlCreator;
        Delete(): void;
        Formula: string;
        ModifyAppliesToRange(Range: Range): void;
        readonly Parent: any;
        Priority: number;
        readonly PTCondition: boolean;
        ScopeType: XlPivotConditionScope;
        SetFirstPriority(): void;
        SetLastPriority(): void;
        readonly StopIfTrue: boolean;
        readonly Type: number;
    }

    interface ColorScaleCriteria {
        _Default(Index: any): ColorScaleCriterion;
        readonly Count: number;
        Item(Index: number): ColorScaleCriterion;
        (Index: number): ColorScaleCriterion;
    }

    class ColorScaleCriterion {
        private 'Excel.ColorScaleCriterion_typekey': ColorScaleCriterion;
        private constructor();
        readonly FormatColor: FormatColor;
        readonly Index: number;
        Type: XlConditionValueTypes;
        Value: any;
    }

    class Comment {
        private 'Excel.Comment_typekey': Comment;
        private constructor();
        readonly Application: Application;
        readonly Author: string;
        readonly Creator: XlCreator;
        Delete(): void;
        Next(): Comment;
        readonly Parent: any;
        Previous(): Comment;
        readonly Shape: Shape;
        Text(Text?: string, Start?: number, Overwrite?: boolean): string;
        Visible: boolean;
    }

    interface Comments {
        _Default(Index: number): Comment;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): Comment;
        readonly Parent: any;
        (Index: number): Comment;
    }

    class ConditionValue {
        private 'Excel.ConditionValue_typekey': ConditionValue;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Modify(newtype: XlConditionValueTypes.xlConditionValueLowestValue | XlConditionValueTypes.xlConditionValueHighestValue): void;
        Modify(newtype: XlConditionValueTypes.xlConditionValueNumber | XlConditionValueTypes.xlConditionValuePercent | XlConditionValueTypes.xlConditionValuePercentile, newvalue: number): void;
        Modify(newtype: XlConditionValueTypes.xlConditionValueFormula, newvalue: string): void;
        Modify(newtype: XlConditionValueTypes, newvalue?: any): void;
        readonly Parent: any;
        readonly Type: XlConditionValueTypes;
        Value: number | string;
    }

    interface Connections {
        _Default(Index: any): WorkbookConnection;
        Add(Name: string, Description: string, ConnectionString: string, CommandText: string, lCmdtype?: any): WorkbookConnection;
        AddFromFile(Filename: string): WorkbookConnection;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): WorkbookConnection;
        readonly Parent: any;
        (Index: number): WorkbookConnection;
    }

    class ConnectorFormat {
        private 'Excel.ConnectorFormat_typekey': ConnectorFormat;
        private constructor();
        readonly Application: Application;
        BeginConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        readonly BeginConnected: Office.MsoTriState;
        readonly BeginConnectedShape: Shape;
        readonly BeginConnectionSite: number;
        BeginDisconnect(): void;
        readonly Creator: XlCreator;
        EndConnect(ConnectedShape: Shape, ConnectionSite: number): void;
        readonly EndConnected: Office.MsoTriState;
        readonly EndConnectedShape: Shape;
        readonly EndConnectionSite: number;
        EndDisconnect(): void;
        readonly Parent: any;
        Type: Office.MsoConnectorType;
    }

    class ControlFormat {
        private 'Excel.ControlFormat_typekey': ControlFormat;
        private constructor();
        _Default: number;
        AddItem(Text: string, Index?: number): void;
        readonly Application: Application;
        readonly Creator: XlCreator;
        DropDownLines: number;
        Enabled: boolean;
        LargeChange: number;
        LinkedCell: string;
        List(Index: number): string;
        List(): SafeArray<string>;
        ListCount: number;
        ListFillRange: string;
        ListIndex: number;
        LockedText: boolean;
        Max: number;
        Min: number;
        MultiSelect: number;
        readonly Parent: any;
        PrintObject: boolean;
        RemoveAllItems(): void;
        RemoveItem(Index: number, Count?: number): void;
        SmallChange: number;
        Value: number;
    }

    class Corners {
        private 'Excel.Corners_typekey': Corners;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class CubeField {
        private 'Excel.CubeField_typekey': CubeField;
        private constructor();
        _AddMemberPropertyField(Property: string, PropertyOrder?: any): void;
        readonly _Caption: string;
        AddMemberPropertyField(Property: string, PropertyOrder?: number, PropertyDisplayedIn?: XlPropertyDisplayedIn): void;
        readonly AllItemsVisible: boolean;
        readonly Application: Application;
        Caption: string;
        ClearManualFilter(): void;
        CreatePivotFields(): void;
        readonly Creator: XlCreator;
        readonly CubeFieldSubType: XlCubeFieldSubType;
        readonly CubeFieldType: XlCubeFieldType;
        CurrentPageName: string;
        Delete(): void;
        DragToColumn: boolean;
        DragToData: boolean;
        DragToHide: boolean;
        DragToPage: boolean;
        DragToRow: boolean;
        EnableMultiplePageItems: boolean;
        FlattenHierarchies: boolean;
        readonly HasMemberProperties: boolean;
        HiddenLevels: number;
        HierarchizeDistinct: boolean;
        IncludeNewItemsInFilter: boolean;
        readonly IsDate: boolean;
        LayoutForm: XlLayoutFormType;
        LayoutSubtotalLocation: XlSubtototalLocationType;
        readonly Name: string;
        Orientation: XlPivotFieldOrientation;
        readonly Parent: any;
        readonly PivotFields: PivotFields;
        Position: number;
        ShowInFieldList: boolean;
        readonly TreeviewControl: TreeviewControl;
        readonly Value: string;
    }

    interface CubeFields {
        _Default(Index: any): CubeField;
        AddSet(Name: string, Caption: string): CubeField;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): CubeField;
        readonly Parent: any;
        (Index: number | string): CubeField;
    }

    interface CustomProperties {
        _Default(Index: any): CustomProperty;
        Add(Name: string, Value: any): CustomProperty;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): CustomProperty;
        readonly Parent: any;
        (Index: number | string): CustomProperty;
    }

    class CustomProperty {
        private 'Excel.CustomProperty_typekey': CustomProperty;
        private constructor();
        readonly _Default: any;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        Name: string;
        readonly Parent: any;
        Value: any;
    }

    class CustomView {
        private 'Excel.CustomView_typekey': CustomView;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Name: string;
        readonly Parent: any;
        readonly PrintSettings: boolean;
        readonly RowColSettings: boolean;
        Show(): void;
    }

    interface CustomViews {
        _Default(ViewName: any): CustomView;
        Add(ViewName: string, PrintSettings?: boolean, RowColSettings?: boolean): CustomView;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(ViewName: number | string): CustomView;
        readonly Parent: any;
        (ViewName: number | string): CustomView;
    }

    class Databar {
        private 'Excel.Databar_typekey': Databar;
        private constructor();
        readonly Application: Application;
        readonly AppliesTo: Range;
        readonly AxisColor: FormatColor;
        AxisPosition: XlDataBarAxisPosition;
        readonly BarBorder: DataBarBorder;
        readonly BarColor: FormatColor;
        BarFillType: XlDataBarFillType;
        readonly Creator: XlCreator;
        Delete(): void;
        Direction: number;
        Formula: string;
        readonly MaxPoint: ConditionValue;
        readonly MinPoint: ConditionValue;
        ModifyAppliesToRange(Range: Range): void;
        readonly NegativeBarFormat: NegativeBarFormat;
        readonly Parent: any;
        PercentMax: number;
        PercentMin: number;
        Priority: number;
        readonly PTCondition: boolean;
        ScopeType: XlPivotConditionScope;
        SetFirstPriority(): void;
        SetLastPriority(): void;
        ShowValue: boolean;
        readonly StopIfTrue: boolean;
        readonly Type: number;
    }

    class DataBarBorder {
        private 'Excel.DataBarBorder_typekey': DataBarBorder;
        private constructor();
        readonly Application: Application;
        readonly Color: FormatColor;
        readonly Creator: XlCreator;
        readonly Parent: any;
        Type: XlDataBarBorderType;
    }

    class DataLabel {
        private 'Excel.DataLabel_typekey': DataLabel;
        private constructor();
        readonly Application: Application;
        AutoScaleFont: any;
        AutoText: boolean;
        readonly Border: Border;
        Caption: string;
        Characters(Start?: number, Length?: number): Characters;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: Font;
        readonly Format: ChartFormat;
        Formula: string;
        FormulaLocal: string;
        FormulaR1C1: string;
        FormulaR1C1Local: string;
        readonly Height: number;
        HorizontalAlignment: HorizontalAlignments;
        readonly Interior: Interior;
        Left: number;
        readonly Name: string;
        NumberFormat: string;
        NumberFormatLinked: boolean;
        NumberFormatLocal: string;
        Orientation: XlOrientation;
        readonly Parent: any;
        Position: XlDataLabelPosition;
        ReadingOrder: number;
        Select(): any;
        Separator: string | XlDataLabelSeparator;
        Shadow: boolean;
        ShowBubbleSize: boolean;
        ShowCategoryName: boolean;
        ShowLegendKey: boolean;
        ShowPercentage: boolean;
        ShowSeriesName: boolean;
        ShowValue: boolean;
        Text: string;
        Top: number;
        Type: any;
        VerticalAlignment: VerticalAlignments;
        readonly Width: number;
    }

    interface DataLabels {
        _Default(Index: any): DataLabel;
        readonly Application: Application;
        AutoScaleFont: any;
        AutoText: boolean;
        readonly Border: Border;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: Font;
        readonly Format: ChartFormat;
        HorizontalAlignment: HorizontalAlignments;
        readonly Interior: Interior;
        Item(Index: number): DataLabel;
        readonly Name: string;
        NumberFormat: string;
        NumberFormatLinked: boolean;
        NumberFormatLocal: string;
        Orientation: XlOrientation;
        readonly Parent: any;
        Position: XlDataLabelPosition;
        ReadingOrder: number;
        Select(): any;
        Separator: string | XlDataLabelSeparator;
        Shadow: boolean;
        ShowBubbleSize: boolean;
        ShowCategoryName: boolean;
        ShowLegendKey: boolean;
        ShowPercentage: boolean;
        ShowSeriesName: boolean;
        ShowValue: boolean;
        Type: any;
        VerticalAlignment: VerticalAlignments;
        (Index: number): DataLabel;
    }

    class DataTable {
        private 'Excel.DataTable_typekey': DataTable;
        private constructor();
        readonly Application: Application;
        AutoScaleFont: any;
        readonly Border: Border;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Font: Font;
        readonly Format: ChartFormat;
        HasBorderHorizontal: boolean;
        HasBorderOutline: boolean;
        HasBorderVertical: boolean;
        readonly Parent: any;
        Select(): void;
        ShowLegendKey: boolean;
    }

    class DefaultWebOptions {
        private 'Excel.DefaultWebOptions_typekey': DefaultWebOptions;
        private constructor();
        AllowPNG: boolean;
        AlwaysSaveInDefaultEncoding: boolean;
        readonly Application: Application;
        CheckIfOfficeIsHTMLEditor: boolean;
        readonly Creator: XlCreator;
        DownloadComponents: boolean;
        Encoding: Office.MsoEncoding;
        readonly FolderSuffix: string;
        readonly Fonts: Office.WebPageFonts;
        LoadPictures: boolean;
        LocationOfComponents: string;
        OrganizeInFolder: boolean;
        readonly Parent: any;
        PixelsPerInch: number;
        RelyOnCSS: boolean;
        RelyOnVML: boolean;
        SaveHiddenData: boolean;
        SaveNewWebPagesAsWebArchives: boolean;
        ScreenSize: Office.MsoScreenSize;
        TargetBrowser: Office.MsoTargetBrowser;
        UpdateLinksOnSave: boolean;
        UseLongFileNames: boolean;
    }

    class Diagram {
        private 'Excel.Diagram_typekey': Diagram;
        private constructor();
        readonly Application: Application;
        AutoFormat: Office.MsoTriState;
        AutoLayout: Office.MsoTriState;
        Convert(Type: Office.MsoDiagramType): void;
        readonly Creator: XlCreator;
        FitText(): void;
        readonly Nodes: DiagramNodes;
        readonly Parent: any;
        Reverse: Office.MsoTriState;
        readonly Type: Office.MsoDiagramType;
    }

    class DiagramNode {
        private 'Excel.DiagramNode_typekey': DiagramNode;
        private constructor();

        /**
         * @param pos [pos=2]
         * @param nodeType [nodeType=1]
         */
        AddNode(pos?: Office.MsoRelativeNodePosition, nodeType?: Office.MsoDiagramNodeType): DiagramNode;
        readonly Application: any;
        readonly Children: DiagramNodeChildren;

        /** @param pos [pos=2] */
        CloneNode(copyChildren: boolean, pTargetNode: DiagramNode, pos?: Office.MsoRelativeNodePosition): DiagramNode;
        readonly Creator: number;
        Delete(): void;
        readonly Diagram: Office.IMsoDiagram;
        Layout: Office.MsoOrgChartLayoutType;
        MoveNode(pTargetNode: DiagramNode, pos: Office.MsoRelativeNodePosition): void;
        NextNode(): DiagramNode;
        readonly Parent: any;
        PrevNode(): DiagramNode;
        ReplaceNode(pTargetNode: DiagramNode): void;
        readonly Root: DiagramNode;
        readonly Shape: Shape;

        /** @param swapChildren [swapChildren=true] */
        SwapNode(pTargetNode: DiagramNode, swapChildren?: boolean): void;
        readonly TextShape: Shape;
        TransferChildren(pReceivingNode: DiagramNode): void;
    }

    interface DiagramNodeChildren {
        /**
         * @param Index [Index=-1]
         * @param nodeType [nodeType=1]
         */
        AddNode(Index?: any, nodeType?: Office.MsoDiagramNodeType): DiagramNode;
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        readonly FirstChild: DiagramNode;
        Item(Index: any): DiagramNode;
        readonly LastChild: DiagramNode;
        readonly Parent: any;
        SelectAll(): void;
        (Index: any): DiagramNode;
    }

    interface DiagramNodes {
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): DiagramNode;
        readonly Parent: any;
        SelectAll(): void;
        (Index: any): DiagramNode;
    }

    class Dialog {
        private 'Excel.Dialog_typekey': Dialog;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Parent: any;
        Show(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): boolean;
    }

    class DialogFrame {
        private 'Excel.DialogFrame_typekey': DialogFrame;
        private constructor();
        readonly Application: Application;
        Caption: string;
        Characters(Start?: any, Length?: any): Characters;
        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any): any;

        /**
         * @param Appearance [Appearance=2]
         * @param Format [Format=-4147]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        readonly Creator: XlCreator;
        Height: number;
        Left: number;
        Locked: boolean;
        LockedText: boolean;
        Name: string;
        OnAction: string;
        readonly Parent: any;
        Select(Replace?: any): any;
        readonly ShapeRange: ShapeRange;
        Text: string;
        Top: number;
        Width: number;
    }

    interface Dialogs {
        _Default(Index: XlBuiltInDialog): Dialog;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: XlBuiltInDialog): Dialog;
        readonly Parent: any;
        (Index: XlBuiltInDialog): Dialog;
    }

    class DialogSheet {
        private 'Excel.DialogSheet_typekey': DialogSheet;
        private constructor();
        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        _CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, IgnoreFinalYaa?: any, SpellScript?: any): void;
        _CodeName: string;
        _DisplayRightToLeft: number;
        _Evaluate(Name: any): any;
        _PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any): void;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        _SaveAs(Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any): void;
        Activate(): void;
        readonly Application: Application;
        Arcs(Index?: any): any;
        readonly AutoFilter: AutoFilter;
        Buttons(Index?: any): any;
        ChartObjects(Index?: any): any;
        CheckBoxes(Index?: any): any;
        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any): void;
        CircleInvalid(): void;
        ClearCircles(): void;
        readonly CodeName: string;
        readonly Comments: Comments;
        Copy(Before?: Sheet): void;
        Copy(Before: undefined, After: Sheet): void;
        readonly Creator: XlCreator;
        readonly CustomProperties: CustomProperties;
        DefaultButton: any;
        Delete(): void;
        readonly DialogFrame: DialogFrame;
        DisplayAutomaticPageBreaks: boolean;
        DisplayPageBreaks: boolean;
        DisplayRightToLeft: boolean;
        DrawingObjects(Index?: any): any;
        Drawings(Index?: any): any;
        DropDowns(Index?: any): any;
        EditBoxes(Index?: any): any;
        EnableAutoFilter: boolean;
        EnableCalculation: boolean;
        EnableFormatConditionsCalculation: boolean;
        EnableOutlining: boolean;
        EnablePivotTable: boolean;
        EnableSelection: XlEnableSelection;
        Evaluate(Name: any): any;
        ExportAsFixedFormat(Type: XlFixedFormatType, Filename?: any, Quality?: any, IncludeDocProperties?: any, IgnorePrintAreas?: any, From?: any, To?: any, OpenAfterPublish?: any, FixedFormatExtClassPtr?: any): void;
        Focus: any;
        GroupBoxes(Index?: any): any;
        GroupObjects(Index?: any): any;
        Hide(Cancel?: any): boolean;
        readonly HPageBreaks: HPageBreaks;
        readonly Hyperlinks: Hyperlinks;
        readonly Index: number;
        Labels(Index?: any): any;
        Lines(Index?: any): any;
        ListBoxes(Index?: any): any;
        readonly MailEnvelope: Office.MsoEnvelope;
        Move(Before?: Sheet, After?: Sheet): void;
        Name: string;
        readonly Names: Names;
        readonly Next: any;
        OLEObjects(Index?: any): any;
        OnDoubleClick: string;
        OnSheetActivate: string;
        OnSheetDeactivate: string;
        OptionButtons(Index?: any): any;
        Ovals(Index?: any): any;
        readonly PageSetup: PageSetup;
        readonly Parent: any;
        Paste(Destination?: any, Link?: any): void;
        PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any, NoHTMLFormatting?: any): void;
        Pictures(Index?: any): any;
        readonly Previous: any;
        readonly PrintedCommentPages: number;
        PrintOut<T extends boolean | undefined>(From?: number, To?: number, Copies?: number, Preview?: boolean, ActivePrinter?: string, PrintToFile?: T, Collate?: boolean, PrToFileName?: PrintToFileName<T>): any;
        PrintPreview(EnableChanges?: any): void;
        Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any, AllowFormattingCells?: any, AllowFormattingColumns?: any, AllowFormattingRows?: any, AllowInsertingColumns?: any, AllowInsertingRows?: any, AllowInsertingHyperlinks?: any, AllowDeletingColumns?: any, AllowDeletingRows?: any, AllowSorting?: any, AllowFiltering?: any, AllowUsingPivotTables?: any): void;
        readonly ProtectContents: boolean;
        readonly ProtectDrawingObjects: boolean;
        readonly Protection: Protection;
        readonly ProtectionMode: boolean;
        readonly ProtectScenarios: boolean;
        readonly QueryTables: QueryTables;
        Rectangles(Index?: any): any;
        ResetAllPageBreaks(): void;
        SaveAs(Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any, Local?: any): void;
        readonly Scripts: Office.Scripts;
        ScrollArea: string;
        ScrollBars(Index?: any): any;
        Select(Replace?: any): void;
        readonly Shapes: Shapes;
        Show(): boolean;
        readonly SmartTags: SmartTags;
        readonly Sort: Sort;
        Spinners(Index?: any): any;
        readonly Tab: Tab;
        TextBoxes(Index?: any): any;
        Unprotect(Password?: any): void;
        Visible: XlSheetVisibility;
        readonly VPageBreaks: VPageBreaks;
    }

    class DialogSheetView {
        private 'Excel.DialogSheetView_typekey': DialogSheetView;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Parent: any;
        readonly Sheet: DialogSheet;
    }

    class DisplayFormat {
        private 'Excel.DisplayFormat_typekey': DisplayFormat;
        private constructor();
        readonly AddIndent: boolean | null;
        readonly Application: Application;
        readonly Borders: Borders;
        Characters(Start?: number, Length?: number): Characters;
        readonly Creator: XlCreator;
        readonly Font: Font;
        readonly FormulaHidden: boolean | null;
        readonly HorizontalAlignment: any;
        readonly IndentLevel: any;
        readonly Interior: Interior;
        readonly Locked: boolean | null;
        readonly MergeCells: boolean;
        readonly NumberFormat: string | null;
        readonly NumberFormatLocal: string | null;
        readonly Orientation: any;
        readonly Parent: any;
        readonly ReadingOrder: number;
        readonly ShrinkToFit: boolean;
        readonly Style: Style;
        readonly VerticalAlignment: any;
        readonly WrapText: boolean;
    }

    class DisplayUnitLabel {
        private 'Excel.DisplayUnitLabel_typekey': DisplayUnitLabel;
        private constructor();
        readonly Application: Application;
        AutoScaleFont: any;
        readonly Border: Border;
        Caption: string;
        Characters(Start?: number, Length?: number): Characters;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: Font;
        readonly Format: ChartFormat;
        Formula: string;
        FormulaLocal: string;
        FormulaR1C1: string;
        FormulaR1C1Local: string;
        readonly Height: number;
        HorizontalAlignment: HorizontalAlignments;
        readonly Interior: Interior;
        Left: number;
        readonly Name: string;
        Orientation: XlOrientation;
        readonly Parent: any;
        Position: XlChartElementPosition;
        ReadingOrder: number;
        Select(): any;
        Shadow: boolean;
        Text: string;
        Top: number;
        VerticalAlignment: VerticalAlignments;
        readonly Width: number;
    }

    class DownBars {
        private 'Excel.DownBars_typekey': DownBars;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Interior: Interior;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class DropLines {
        private 'Excel.DropLines_typekey': DropLines;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class Error {
        private 'Excel.Error_typekey': Error;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Ignore: boolean;
        readonly Parent: any;
        readonly Value: boolean;
    }

    class ErrorBars {
        private 'Excel.ErrorBars_typekey': ErrorBars;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        ClearFormats(): any;
        readonly Creator: XlCreator;
        Delete(): any;
        EndStyle: XlEndStyleCap;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class ErrorCheckingOptions {
        private 'Excel.ErrorCheckingOptions_typekey': ErrorCheckingOptions;
        private constructor();
        readonly Application: Application;
        BackgroundChecking: boolean;
        readonly Creator: XlCreator;
        EmptyCellReferences: boolean;
        EvaluateToError: boolean;
        InconsistentFormula: boolean;
        InconsistentTableFormula: boolean;
        IndicatorColorIndex: XlColorIndex;
        ListDataValidation: boolean;
        NumberAsText: boolean;
        OmittedCells: boolean;
        readonly Parent: any;
        TextDate: boolean;
        UnlockedFormulaCells: boolean;
    }

    interface Errors {
        _Default(Index: any): Error;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Item(Index: number | XlErrorChecks): Error;
        readonly Parent: any;
        (Index: number | XlErrorChecks): Error;
    }

    class FileExportConverter {
        private 'Excel.FileExportConverter_typekey': FileExportConverter;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Description: string;
        readonly Extensions: string;
        readonly FileFormat: number;
        readonly Parent: any;
    }

    interface FileExportConverters {
        _Default(Index: any): FileExportConverter;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): FileExportConverter;
        readonly Parent: any;
        (Index: number): FileExportConverter;
    }

    class FillFormat {
        private 'Excel.FillFormat_typekey': FillFormat;
        private constructor();
        readonly Application: any;
        BackColor: ColorFormat;
        Background(): void;
        readonly Creator: number;
        ForeColor: ColorFormat;
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

    class Filter {
        private 'Excel.Filter_typekey': Filter;
        private constructor();
        readonly _Operator: XlAutoFilterOperator;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        readonly Criteria1: any;
        readonly Criteria2: any;
        readonly On: boolean;
        Operator: XlAutoFilterOperator;
        readonly Parent: any;
    }

    interface Filters {
        _Default(Index: number): Filter;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): Filter;
        readonly Parent: any;
        (Index: number): Filter;
    }

    class Floor {
        private 'Excel.Floor_typekey': Floor;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        ClearFormats(): any;
        readonly Creator: XlCreator;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Interior: Interior;
        readonly Name: string;
        readonly Parent: any;
        Paste(): void;
        PictureType: XlChartPictureType;
        Select(): any;
        Thickness: number;
    }

    class Font {
        private 'Excel.Font_typekey': Font;
        private constructor();
        readonly Application: Application;
        Background: XlBackground;
        Bold: boolean;
        Color: XlRgbColor | number;
        ColorIndex: number | XlColorIndex;
        readonly Creator: XlCreator;
        FontStyle: 'Regular' | 'Italic' | 'Bold' | 'Bold Italic';
        Italic: boolean;
        Name: string;
        OutlineFont: any;
        readonly Parent: any;
        Shadow: any;
        Size: number;
        Strikethrough: boolean;
        Subscript: boolean;
        Superscript: boolean;
        ThemeColor: XlThemeColor;
        ThemeFont: XlThemeFont;
        TintAndShade: number;
        Underline: XlUnderlineStyle;
    }

    class FormatColor {
        private 'Excel.FormatColor_typekey': FormatColor;
        private constructor();
        readonly Application: Application;
        Color: XlRgbColor | number;
        ColorIndex: XlColorIndex;
        readonly Creator: XlCreator;
        readonly Parent: any;
        ThemeColor: XlThemeColor;
        TintAndShade: number;
    }

    class FormatCondition {
        private 'Excel.FormatCondition_typekey': FormatCondition;
        private constructor();
        _Modify(Type: XlFormatConditionType, Operator?: any, Formula1?: any, Formula2?: any): void;
        readonly Application: Application;
        readonly AppliesTo: Range;
        readonly Borders: Borders;
        readonly Creator: XlCreator;
        DateOperator: XlTimePeriods;
        Delete(): void;
        readonly Font: Font;
        readonly Formula1: string;
        readonly Formula2: string;
        readonly Interior: Interior;
        Modify(Type: XlFormatConditionType.xlExpression, Operator: undefined, Formula1: string): void;
        Modify(Type: XlFormatConditionType, Operator: XlFormatConditionOperator.xlBetween | XlFormatConditionOperator.xlNotBetween, Formula1: string, Formula2: string): void;
        Modify(Type: XlFormatConditionType, Operator?: XlFormatConditionOperator, Formula1?: string, Formula2?: string, String?: any, Operator2?: any): void;
        ModifyAppliesToRange(Range: Range): void;
        NumberFormat: string;
        readonly Operator: number;
        readonly Parent: any;
        Priority: number;
        readonly PTCondition: boolean;
        ScopeType: XlPivotConditionScope;
        SetFirstPriority(): void;
        SetLastPriority(): void;
        StopIfTrue: boolean;
        Text: string;
        TextOperator: XlContainsOperator;
        readonly Type: number;
    }

    interface FormatConditions {
        _Default(Index: any): any;
        Add(Type: XlFormatConditionType.xlExpression, Operator: undefined, Formula1: string): FormatCondition;
        Add(Type: XlFormatConditionType, Operator: XlFormatConditionOperator.xlBetween | XlFormatConditionOperator.xlNotBetween, Formula1: string, Formula2: string): FormatCondition;
        Add(Type: XlFormatConditionType, Operator?: XlFormatConditionOperator, Formula1?: string, Formula2?: string, String?: any, TextOperator?: any, DateOperator?: any, ScopeType?: any): FormatCondition;
        AddAboveAverage(): AboveAverage;
        AddColorScale(ColorScaleType: number): ColorScale;
        AddDatabar(): Databar;
        AddIconSetCondition(): IconSetCondition;
        AddTop10(): Top10;
        AddUniqueValues(): UniqueValues;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;
        Item(Index: number | string): FormatCondition;
        readonly Parent: any;
        (Index: number | string): FormatCondition;
    }

    class FreeformBuilder {
        private 'Excel.FreeformBuilder_typekey': FreeformBuilder;
        private constructor();
        AddNodes(SegmentType: Office.MsoSegmentType.msoSegmentCurve, EditingType: Office.MsoEditingType.msoEditingCorner, X1: number, Y1: number, X2: number, Y2: number, X3: number, Y3: number): void;
        AddNodes(SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType.msoEditingAuto, X1: number, Y1: number): void;
        readonly Application: Application;
        ConvertToShape(): Shape;
        readonly Creator: XlCreator;
        readonly Parent: any;
    }

    // there is no way to use the Globals class from within Javascript

    class Graphic {
        private 'Excel.Graphic_typekey': Graphic;
        private constructor();
        readonly Application: Application;
        Brightness: number;
        ColorType: Office.MsoPictureColorType;
        Contrast: number;
        readonly Creator: XlCreator;
        CropBottom: number;
        CropLeft: number;
        CropRight: number;
        CropTop: number;
        Filename: string;
        Height: number;
        LockAspectRatio: Office.MsoTriState;
        readonly Parent: any;
        Width: number;
    }

    class Gridlines {
        private 'Excel.Gridlines_typekey': Gridlines;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class GroupObject {
        private 'Excel.GroupObject_typekey': GroupObject;
        private constructor();
        _Default: number;
        AddIndent: boolean;
        readonly Application: Application;
        ArrowHeadLength: any;
        ArrowHeadStyle: any;
        ArrowHeadWidth: any;
        AutoSize: boolean;
        readonly Border: Border;
        readonly BottomRightCell: Range;
        BringToFront(): any;
        CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any): any;
        Copy(): any;

        /**
         * @param Appearance [Appearance=2]
         * @param Format [Format=-4147]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        readonly Creator: XlCreator;
        Cut(): any;
        Delete(): any;
        Duplicate(): any;
        Enabled: boolean;
        readonly Font: Font;
        Height: number;
        HorizontalAlignment: any;
        readonly Index: number;
        readonly Interior: Interior;
        Left: number;
        Locked: boolean;
        Name: string;
        OnAction: string;
        Orientation: any;
        readonly Parent: any;
        Placement: any;
        PrintObject: boolean;
        ReadingOrder: number;
        RoundedCorners: boolean;
        Select(Replace?: any): any;
        SendToBack(): any;
        Shadow: boolean;
        readonly ShapeRange: ShapeRange;
        Top: number;
        readonly TopLeftCell: Range;
        Ungroup(): any;
        VerticalAlignment: any;
        Visible: boolean;
        Width: number;
        readonly ZOrder: number;
    }

    interface GroupShapes {
        _Default(Index: any): Shape;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): Shape;
        readonly Parent: any;
        Range(Index: number | string | SafeArray<number | string>): ShapeRange;
        (Index: number | string): Shape;
    }

    class HeaderFooter {
        private 'Excel.HeaderFooter_typekey': HeaderFooter;
        private constructor();
        readonly Picture: Graphic;
        Text: string;
    }

    class HiLoLines {
        private 'Excel.HiLoLines_typekey': HiLoLines;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class HPageBreak {
        private 'Excel.HPageBreak_typekey': HPageBreak;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        DragOff(Direction: XlDirection, RegionIndex: number): void;
        readonly Extent: XlPageBreakExtent;
        Location: Range;
        readonly Parent: Worksheet;
        Type: XlPageBreak;
    }

    interface HPageBreaks {
        _Default(Index: number): HPageBreak;
        Add(Before: Range): HPageBreak;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): HPageBreak;
        readonly Parent: any;
        (Index: number): HPageBreak;
    }

    class Hyperlink {
        private 'Excel.Hyperlink_typekey': Hyperlink;
        private constructor();
        Address: string;
        AddToFavorites(): void;
        readonly Application: Application;
        CreateNewDocument(Filename: string, EditNow: boolean, Overwrite: boolean): void;
        readonly Creator: XlCreator;
        Delete(): void;
        EmailSubject: string;
        Follow(NewWindow?: boolean, AddHistory?: undefined, ExtraInfo?: string | Office.ByteArray, Method?: Office.MsoExtraInfoMethod, HeaderInfo?: string): void;
        readonly Name: string;
        readonly Parent: any;
        readonly Range: Range;
        ScreenTip: string;
        readonly Shape: Shape;
        SubAddress: string;
        TextToDisplay: string;
        readonly Type: number;
    }

    interface Hyperlinks {
        _Default(Index: any): Hyperlink;
        Add(Anchor: Range | Shape, Address: string, SubAddress?: string, ScreenTip?: string, TextToDisplay?: string): Hyperlink;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;
        Item(Index: number | string): Hyperlink;
        readonly Parent: any;
        (Index: number | string): Hyperlink;
    }

    class Icon {
        private 'Excel.Icon_typekey': Icon;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Index: number;
        readonly Parent: IconSet;
    }

    // tslint:disable-next-line:interface-name
    interface IconSet {
        _Default(Index: any): Icon;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        readonly ID: XlIconSet;
        Item(Index: number): Icon;
        readonly Parent: any;
        (Index: number): Icon;
    }

    class IconSetCondition {
        private 'Excel.IconSetCondition_typekey': IconSetCondition;
        private constructor();
        readonly Application: Application;
        readonly AppliesTo: Range;
        readonly Creator: XlCreator;
        Delete(): void;
        Formula: string;
        readonly IconCriteria: IconCriteria;
        IconSet: IconSets;
        ModifyAppliesToRange(Range: Range): void;
        readonly Parent: any;
        PercentileValues: boolean;
        Priority: number;
        readonly PTCondition: boolean;
        ReverseOrder: boolean;
        ScopeType: XlPivotConditionScope;
        SetFirstPriority(): void;
        SetLastPriority(): void;
        ShowIconOnly: boolean;
        readonly StopIfTrue: boolean;
        readonly Type: number;
    }

    // tslint:disable-next-line:interface-name
    interface IconCriteria {
        _Default(Index: any): IconCriterion;
        readonly Count: number;
        Item(Index: number): IconCriterion;
        (Index: number): IconCriterion;
    }

    class IconCriterion {
        private 'Excel.IconCriterion_typekey': IconCriterion;
        private constructor();
        Icon: XlIcon;
        readonly Index: number;
        Operator: number;
        Type: XlConditionValueTypes;
        Value: number | string;
    }

    // tslint:disable-next-line:interface-name
    interface IconSets {
        _Default(Index: any): any;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): IconSet;
        readonly Parent: any;
        (Index: number): IconSet;
    }

    class Interior {
        private 'Excel.Interior_typekey': Interior;
        private constructor();
        readonly Application: Application;
        Color: XlRgbColor | number;
        ColorIndex: number | XlColorIndex;
        readonly Creator: XlCreator;
        readonly Gradient: any;
        InvertIfNegative: boolean;
        readonly Parent: any;
        Pattern: XlPattern;
        PatternColor: XlRgbColor | number;
        PatternColorIndex: number | XlColorIndex;
        PatternThemeColor: XlThemeColor;
        PatternTintAndShade: number;
        ThemeColor: XlThemeColor;
        TintAndShade: number;
    }

    class LeaderLines {
        private 'Excel.LeaderLines_typekey': LeaderLines;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Format: ChartFormat;
        readonly Parent: any;
        Select(): void;
    }

    class Legend {
        private 'Excel.Legend_typekey': Legend;
        private constructor();
        readonly Application: Application;
        AutoScaleFont: any;
        readonly Border: Border;
        Clear(): any;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Font: Font;
        readonly Format: ChartFormat;
        Height: number;
        IncludeInLayout: boolean;
        readonly Interior: Interior;
        Left: number;
        LegendEntries: LegendEntries & ((Index: number) => LegendEntry);
        readonly Name: string;
        readonly Parent: any;
        Position: XlLegendPosition;
        Select(): any;
        Shadow: boolean;
        Top: number;
        Width: number;
    }

    interface LegendEntries {
        _Default(Index: any): LegendEntry;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): LegendEntry;
        readonly Parent: any;
        (Index: number): LegendEntry;
    }

    class LegendEntry {
        private 'Excel.LegendEntry_typekey': LegendEntry;
        private constructor();
        readonly Application: Application;
        AutoScaleFont: any;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Font: Font;
        readonly Format: ChartFormat;
        readonly Height: number;
        readonly Index: number;
        readonly Left: number;
        readonly LegendKey: LegendKey;
        readonly Parent: any;
        Select(): any;
        readonly Top: number;
        readonly Width: number;
    }

    class LegendKey {
        private 'Excel.LegendKey_typekey': LegendKey;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        ClearFormats(): any;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Height: number;
        readonly Interior: Interior;
        InvertIfNegative: boolean;
        readonly Left: number;
        MarkerBackgroundColor: number;
        MarkerBackgroundColorIndex: XlColorIndex;
        MarkerForegroundColor: number;
        MarkerForegroundColorIndex: XlColorIndex;
        MarkerSize: number;
        MarkerStyle: XlMarkerStyle;
        readonly Parent: any;
        PictureType: number;
        PictureUnit: number;
        PictureUnit2: number;
        Select(): any;
        Shadow: boolean;
        Smooth: boolean;
        readonly Top: number;
        readonly Width: number;
    }

    class LineFormat {
        private 'Excel.LineFormat_typekey': LineFormat;
        private constructor();
        readonly Application: any;
        BackColor: ColorFormat;
        BeginArrowheadLength: Office.MsoArrowheadLength;
        BeginArrowheadStyle: Office.MsoArrowheadStyle;
        BeginArrowheadWidth: Office.MsoArrowheadWidth;
        readonly Creator: number;
        DashStyle: Office.MsoLineDashStyle;
        EndArrowheadLength: Office.MsoArrowheadLength;
        EndArrowheadStyle: Office.MsoArrowheadStyle;
        EndArrowheadWidth: Office.MsoArrowheadWidth;
        ForeColor: ColorFormat;
        InsetPen: Office.MsoTriState;
        readonly Parent: any;
        Pattern: Office.MsoPatternType;
        Style: Office.MsoLineStyle;
        Transparency: number;
        Visible: Office.MsoTriState;
        Weight: number;
    }

    class LinkFormat {
        private 'Excel.LinkFormat_typekey': LinkFormat;
        private constructor();
        readonly Application: Application;
        AutoUpdate: boolean;
        readonly Creator: XlCreator;
        Locked: boolean;
        readonly Parent: any;
        Update(): void;
    }

    class ListColumn {
        private 'Excel.ListColumn_typekey': ListColumn;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly DataBodyRange: Range;
        Delete(): void;
        readonly Index: number;
        readonly ListDataFormat: ListDataFormat;
        Name: string;
        readonly Parent: any;
        readonly Range: Range;
        readonly SharePointFormula: string;
        readonly Total: Range;
        TotalsCalculation: XlTotalsCalculation;
        readonly XPath: XPath;
    }

    interface ListColumns {
        _Default(Index: any): ListColumn;
        Add(Position?: number): ListColumn;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): ListColumn;
        readonly Parent: any;
        (Index: number | string): ListColumn;
    }

    class ListDataFormat {
        private 'Excel.ListDataFormat_typekey': ListDataFormat;
        private constructor();
        readonly _Default: XlListDataType;
        readonly AllowFillIn: boolean;
        readonly Application: Application;
        readonly Choices: SafeArray<string>;
        readonly Creator: XlCreator;
        readonly DecimalPlaces: number;
        readonly DefaultValue: any;
        readonly IsPercent: boolean;
        readonly lcid: number;
        readonly MaxCharacters: number;
        readonly MaxNumber: number | null;
        readonly MinNumber: number | null;
        readonly Parent: any;
        readonly ReadOnly: boolean;
        readonly Required: boolean;
        readonly Type: XlListDataType;
    }

    class ListObject {
        private 'Excel.ListObject_typekey': ListObject;
        private constructor();
        readonly _Default: string;
        readonly Active: boolean;
        AlternativeText: string;
        readonly Application: Application;
        readonly AutoFilter: AutoFilter;
        Comment: string;
        readonly Creator: XlCreator;
        readonly DataBodyRange: Range;
        Delete(): void;
        DisplayName: string;
        readonly DisplayRightToLeft: boolean;
        ExportToVisio(): void;
        readonly HeaderRowRange: Range;
        readonly InsertRowRange: Range;
        readonly ListColumns: ListColumns;
        readonly ListRows: ListRows;
        Name: string;
        readonly Parent: any;
        Publish(Target: SafeArray<string>, LinkSource: boolean): string;
        readonly QueryTable: QueryTable;
        readonly Range: Range;
        Refresh(): void;
        Resize(Range: Range): void;
        readonly SharePointURL: string;
        ShowAutoFilter: boolean;
        ShowHeaders: boolean;
        ShowTableStyleColumnStripes: boolean;
        ShowTableStyleFirstColumn: boolean;
        ShowTableStyleLastColumn: boolean;
        ShowTableStyleRowStripes: boolean;
        ShowTotals: boolean;
        readonly Sort: Sort;
        readonly SourceType: XlListObjectSourceType;
        Summary: string;
        TableStyle: any;
        readonly TotalsRowRange: Range;
        Unlink(): void;
        Unlist(): void;

        /** @param iConflictType [iConflictType=0] */
        UpdateChanges(iConflictType?: XlListConflict): void;
        readonly XmlMap: XmlMap;
    }

    interface ListObjects {
        /**
         * @param SourceType [SourceType=1]
         * @param XlListObjectHasHeaders [XlListObjectHasHeaders=0]
         */
        _Add(SourceType?: XlListObjectSourceType, Source?: any, LinkSource?: any, XlListObjectHasHeaders?: XlYesNoGuess, Destination?: any): ListObject;
        _Default(Index: any): ListObject;

        Add(SourceType: XlListObjectSourceType.xlSrcRange, Source?: Range, LinkSource?: undefined, XlListObjectHasHeaders?: XlYesNoGuess, Destination?: undefined, TableStyleName?: string): ListObject;
        Add(SourceType: XlListObjectSourceType.xlSrcExternal, Source: SafeArray<string>, LinkSource: boolean, XlListObjectHasHeaders: XlYesNoGuess, Destination: Range, TableStyleName?: string): ListObject;

        /**
         * @param SourceType [SourceType=1]
         * @param XlListObjectHasHeaders [XlListObjectHasHeaders=0]
         */
        Add(SourceType?: XlListObjectSourceType, Source?: any, LinkSource?: boolean, XlListObjectHasHeaders?: XlYesNoGuess, Destination?: Range, TableStyleName?: string): ListObject;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): ListObject;
        readonly Parent: any;
        (Index: number | string): ListObject;
    }

    class ListRow {
        private 'Excel.ListRow_typekey': ListRow;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Index: number;
        readonly InvalidData: boolean;
        readonly Parent: any;
        readonly Range: Range;
    }

    interface ListRows {
        _Add(Position?: any): ListRow;
        _Default(Index: any): ListRow;
        Add(Position?: number, AlwaysInsert?: boolean): ListRow;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): ListRow;
        readonly Parent: any;
        (Index: number | string): ListRow;
    }

    /** Macintosh only */
    class Mailer {
        private 'Excel.Mailer_typekey': Mailer;
        private constructor();
        readonly Application: Application;
        BCCRecipients: any;
        CCRecipients: any;
        readonly Creator: XlCreator;
        Enclosures: any;
        readonly Parent: any;
        readonly Received: boolean;
        readonly SendDateTime: VarDate;
        readonly Sender: string;
        Subject: string;
        ToRecipients: any;
        WhichAddress: any;
    }

    class Menu {
        private 'Excel.Menu_typekey': Menu;
        private constructor();
        readonly Application: Application;
        Caption: string;
        readonly Creator: XlCreator;
        Delete(): void;
        Enabled: boolean;
        readonly Index: number;
        readonly MenuItems: MenuItems;
        readonly Parent: any;
    }

    class MenuBar {
        private 'Excel.MenuBar_typekey': MenuBar;
        private constructor();
        Activate(): void;
        readonly Application: Application;
        readonly BuiltIn: boolean;
        Caption: string;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Index: number;
        readonly Menus: Menus;
        readonly Parent: any;
        Reset(): void;
    }

    interface MenuBars {
        _Default(Index: any): MenuBar;
        Add(Name?: any): MenuBar;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): MenuBar;
        readonly Parent: any;
        (Index: any): MenuBar;
    }

    class MenuItem {
        private 'Excel.MenuItem_typekey': MenuItem;
        private constructor();
        readonly Application: Application;
        Caption: string;
        Checked: boolean;
        readonly Creator: XlCreator;
        Delete(): void;
        Enabled: boolean;
        HelpContextID: number;
        HelpFile: string;
        readonly Index: number;
        OnAction: string;
        readonly Parent: any;
        StatusBar: string;
    }

    interface MenuItems {
        _Default(Index: any): any;
        Add(Caption: string, OnAction?: any, ShortcutKey?: any, Before?: any, Restore?: any, StatusBar?: any, HelpFile?: any, HelpContextID?: any): MenuItem;
        AddMenu(Caption: string, Before?: any, Restore?: any): Menu;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): any;
        readonly Parent: any;
        (Index: any): any;
    }

    interface Menus {
        _Default(Index: any): Menu;
        Add(Caption: string, Before?: any, Restore?: any): Menu;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): Menu;
        readonly Parent: any;
        (Index: any): Menu;
    }

    class Module {
        private 'Excel.Module_typekey': Module;
        private constructor();
        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        _CodeName: string;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        _SaveAs(Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any): void;
        Activate(): void;
        readonly Application: Application;
        readonly CodeName: string;
        Copy(Before?: any, After?: any): void;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Index: number;
        InsertFile(Filename: any, Merge?: any): any;
        Move(Before?: any, After?: any): void;
        Name: string;
        readonly Next: any;
        OnDoubleClick: string;
        OnSheetActivate: string;
        OnSheetDeactivate: string;
        readonly PageSetup: PageSetup;
        readonly Parent: any;
        readonly Previous: any;
        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        readonly ProtectContents: boolean;
        readonly ProtectionMode: boolean;
        SaveAs(Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any): void;
        Select(Replace?: any): void;
        readonly Shapes: Shapes;
        Unprotect(Password?: any): void;
        Visible: XlSheetVisibility;
    }

    interface Modules {
        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        _Default(Index: any): any;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        Add(Before?: any, After?: any, Count?: any): Module;
        readonly Application: Application;
        Copy(Before?: any, After?: any): void;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly HPageBreaks: HPageBreaks;
        Item(Index: any): any;
        Move(Before?: any, After?: any): void;
        readonly Parent: any;
        PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any, IgnorePrintAreas?: any): void;
        Select(Replace?: any): void;
        Visible: any;
        readonly VPageBreaks: VPageBreaks;
        (Index: any): any;
    }

    class MultiThreadedCalculation {
        private 'Excel.MultiThreadedCalculation_typekey': MultiThreadedCalculation;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Enabled: boolean;
        readonly Parent: any;
        ThreadCount: number;
        ThreadMode: XlThreadMode;
    }

    class Name {
        private 'Excel.Name_typekey': Name;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        Category: string;
        CategoryLocal: string;
        Comment: string;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Index: number;
        MacroType: XlXLMMacroType;
        Name: string;
        NameLocal: string;
        readonly Parent: any;
        RefersTo: string;
        RefersToLocal: string;
        RefersToR1C1: string;
        RefersToR1C1Local: string;
        readonly RefersToRange: Range;
        ShortcutKey: string;
        readonly ValidWorkbookParameter: boolean;
        Value: string;
        Visible: boolean;
        WorkbookParameter: boolean;
    }

    interface Names {
        _Default(Index?: any, IndexLocal?: any, RefersTo?: any): Name;
        Add(Name?: string, RefersTo?: string, Visible?: boolean, MacroType?: 1 | 2 | 3, ShortcutKey?: string, Category?: FunctionCategory | string, NameLocal?: string, RefersToLocal?: string, CategoryLocal?: string, RefersToR1C1?: string, RefersToR1C1Local?: string): Name;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): Name;
        Item(Index: undefined, IndexLocal: string): Name;
        Item(Index: undefined, IndexLocal: undefined, RefersTo: string): Name;
        readonly Parent: any;
        (Index: number | string): Name;
        (Index: undefined, IndexLocal: string): Name;
        (Index: undefined, IndexLocal: undefined, RefersTo: string): Name;
    }

    class NegativeBarFormat {
        private 'Excel.NegativeBarFormat_typekey': NegativeBarFormat;
        private constructor();
        readonly Application: Application;
        readonly BorderColor: FormatColor;
        BorderColorType: XlDataBarNegativeColorType;
        readonly Color: FormatColor;
        ColorType: XlDataBarNegativeColorType;
        readonly Creator: XlCreator;
        readonly Parent: any;
    }

    class ODBCConnection {
        private 'Excel.ODBCConnection_typekey': ODBCConnection;
        private constructor();
        AlwaysUseConnectionFile: boolean;
        readonly Application: Application;
        BackgroundQuery: boolean;
        CancelRefresh(): void;
        CommandText: string;
        CommandType: XlCmdType;
        Connection: string;
        readonly Creator: XlCreator;
        EnableRefresh: boolean;
        readonly Parent: any;
        Refresh(): void;
        readonly RefreshDate: VarDate;
        readonly Refreshing: boolean;
        RefreshOnFileOpen: boolean;
        RefreshPeriod: number;
        RobustConnect: XlRobustConnect;
        SaveAsODC(ODCFileName: string, Description?: string, Keywords?: string): void;
        SavePassword: boolean;
        ServerCredentialsMethod: XlCredentialsMethod;
        ServerSSOApplicationID: string;
        SourceConnectionFile: string;
        SourceData: string | SafeArray<string> | PivotTable;
        SourceDataFile: string;
    }

    class ODBCError {
        private 'Excel.ODBCError_typekey': ODBCError;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly ErrorString: string;
        readonly Parent: any;
        readonly SqlState: string;
    }

    interface ODBCErrors {
        _Default(Index: number): ODBCError;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): ODBCError;
        readonly Parent: any;
        (Index: number): ODBCError;
    }

    class OLEDBConnection {
        private 'Excel.OLEDBConnection_typekey': OLEDBConnection;
        private constructor();
        readonly ADOConnection: ADODB.Connection;
        AlwaysUseConnectionFile: boolean;
        readonly Application: Application;
        BackgroundQuery: boolean;
        readonly CalculatedMembers: CalculatedMembers;
        CancelRefresh(): void;
        CommandText: string;
        CommandType: XlCmdType;
        Connection: string;
        readonly Creator: XlCreator;
        EnableRefresh: boolean;
        readonly IsConnected: boolean;
        LocalConnection: string;
        LocaleID: number;
        MaintainConnection: boolean;
        MakeConnection(): void;
        MaxDrillthroughRecords: number;
        readonly OLAP: boolean;
        readonly Parent: any;
        Reconnect(): void;
        Refresh(): void;
        readonly RefreshDate: VarDate;
        readonly Refreshing: boolean;
        RefreshOnFileOpen: boolean;
        RefreshPeriod: number;
        RetrieveInOfficeUILang: boolean;
        RobustConnect: XlRobustConnect;
        SaveAsODC(ODCFileName: string, Description?: string, Keywords?: string): void;
        SavePassword: boolean;
        ServerCredentialsMethod: XlCredentialsMethod;
        ServerFillColor: boolean;
        ServerFontStyle: boolean;
        ServerNumberFormat: boolean;
        ServerSSOApplicationID: string;
        ServerTextColor: boolean;
        SourceConnectionFile: string;
        SourceDataFile: string;
        UseLocalConnection: boolean;
    }

    class OLEDBError {
        private 'Excel.OLEDBError_typekey': OLEDBError;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly ErrorString: string;
        readonly Native: number;
        readonly Number: number;
        readonly Parent: any;
        readonly SqlState: string;
        readonly Stage: number;
    }

    interface OLEDBErrors {
        _Default(Index: number): OLEDBError;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): OLEDBError;
        readonly Parent: any;
        (Index: number): OLEDBError;
    }

    class OLEFormat {
        private 'Excel.OLEFormat_typekey': OLEFormat;
        private constructor();
        Activate(): void;
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Object: any;
        readonly Parent: any;
        readonly progID: string;
        Verb(Verb?: XlOLEVerb): void;
    }

    class OLEObject {
        private 'Excel.OLEObject_typekey': OLEObject;
        private constructor();
        Activate(): any;
        AltHTML: string;
        readonly Application: Application;
        AutoLoad: boolean;
        AutoUpdate: boolean;
        readonly Border: Border;
        readonly BottomRightCell: Range;
        BringToFront(): any;
        Copy(): any;

        /**
         * @param Appearance [Appearance=2]
         * @param Format [Format=-4147]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        readonly Creator: XlCreator;
        Cut(): any;
        Delete(): any;
        Duplicate(): any;
        Enabled: boolean;
        Height: number;
        readonly Index: number;
        readonly Interior: Interior;
        Left: number;
        LinkedCell: string;
        ListFillRange: string;
        Locked: boolean;
        Name: string;
        readonly Object: any;
        readonly OLEType: XlOLEType.xlOLELink | XlOLEType.xlOLEEmbed;
        OnAction: string;
        readonly Parent: any;
        Placement: XlPlacement;
        PrintObject: boolean;
        readonly progID: string;
        Select(Replace?: boolean): any;
        SendToBack(): any;
        Shadow: boolean;
        readonly ShapeRange: ShapeRange;
        SourceName: string;
        Top: number;
        readonly TopLeftCell: Range;
        Update(): any;

        /** @param Verb [Verb=1] */
        Verb(Verb?: XlOLEVerb): any;
        Visible: boolean;
        Width: number;
        readonly ZOrder: number;
    }

    class OLEObjects {
        private 'Excel.OLEObjects_typekey': OLEObjects;
        private constructor();
        Add(ClassType: string, Filename: undefined, Link: undefined, DisplayAsIcon: true, IconFileName?: string, IconIndex?: number, IconLabel?: string, Left?: number, Top?: number, Width?: number, Height?: number): OLEObject;
        Add(ClassType: string, Filename?: undefined, Link?: undefined, DisplayAsIcon?: false, IconFileName?: undefined, IconIndex?: undefined, IconLabel?: undefined, Left?: number, Top?: number, Width?: number, Height?: number): OLEObject;
        Add(ClassType: undefined, Filename: string, Link: boolean, DisplayAsIcon: true, IconFileName?: string, IconIndex?: number, IconLabel?: string, Left?: number, Top?: number, Width?: number, Height?: number): OLEObject;
        Add(ClassType: undefined, Filename: string, Link?: boolean, DisplayAsIcon?: false, IconFileName?: undefined, IconIndex?: undefined, IconLabel?: undefined, Left?: number, Top?: number, Width?: number, Height?: number): OLEObject;
        readonly Application: Application;
        AutoLoad: boolean;
        readonly Border: Border;
        BringToFront(): any;
        Copy(): any;

        /**
         * @param Appearance [Appearance=2]
         * @param Format [Format=-4147]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        readonly Count: number;
        readonly Creator: XlCreator;
        Cut(): any;
        Delete(): any;
        Duplicate(): any;
        Enabled: boolean;
        Group(): GroupObject;
        Height: number;
        readonly Interior: Interior;
        Item(Index: number | string): any;
        Left: number;
        Locked: boolean;
        OnAction: string;
        readonly Parent: any;
        Placement: any;
        PrintObject: boolean;
        Select(Replace?: boolean): any;
        SendToBack(): any;
        Shadow: boolean;
        readonly ShapeRange: ShapeRange;
        SourceName: string;
        Top: number;
        Visible: boolean;
        Width: number;
        readonly ZOrder: number;
    }

    class Outline {
        private 'Excel.Outline_typekey': Outline;
        private constructor();
        readonly Application: Application;
        AutomaticStyles: boolean;
        readonly Creator: XlCreator;
        readonly Parent: any;
        ShowLevels(RowLevels?: number, ColumnLevels?: number): any;
        SummaryColumn: XlSummaryColumn;
        SummaryRow: XlSummaryRow;
    }

    class Page {
        private 'Excel.Page_typekey': Page;
        private constructor();
        readonly CenterFooter: HeaderFooter;
        readonly CenterHeader: HeaderFooter;
        readonly LeftFooter: HeaderFooter;
        readonly LeftHeader: HeaderFooter;
        readonly RightFooter: HeaderFooter;
        readonly RightHeader: HeaderFooter;
    }

    interface Pages {
        _Default(Index: any): Page;
        readonly Count: number;
        Item(Index: number): Page;
        (Index: number): Page;
    }

    class PageSetup {
        private 'Excel.PageSetup_typekey': PageSetup;
        private constructor();
        AlignMarginsHeaderFooter: boolean;
        readonly Application: Application;
        BlackAndWhite: boolean;
        BottomMargin: number;
        CenterFooter: string;
        readonly CenterFooterPicture: Graphic;
        CenterHeader: string;
        readonly CenterHeaderPicture: Graphic;
        CenterHorizontally: boolean;
        CenterVertically: boolean;
        ChartSize: XlObjectSize;
        readonly Creator: XlCreator;
        DifferentFirstPageHeaderFooter: boolean;
        Draft: boolean;
        readonly EvenPage: Page;
        readonly FirstPage: Page;
        FirstPageNumber: number;
        FitToPagesTall: number | false;
        FitToPagesWide: number | false;
        FooterMargin: number;
        HeaderMargin: number;
        LeftFooter: string;
        readonly LeftFooterPicture: Graphic;
        LeftHeader: string;
        readonly LeftHeaderPicture: Graphic;
        LeftMargin: number;
        OddAndEvenPagesHeaderFooter: boolean;
        Order: XlOrder;
        Orientation: XlPageOrientation;
        readonly Pages: Pages;
        PaperSize: XlPaperSize;
        readonly Parent: any;
        PrintArea: string;
        PrintComments: XlPrintLocation;
        PrintErrors: XlPrintErrors;
        PrintGridlines: boolean;
        PrintHeadings: boolean;
        PrintNotes: boolean;
        PrintQuality: SafeArray<number> & ((Index: 1 | 2) => number);
        PrintTitleColumns: string;
        PrintTitleRows: string;
        RightFooter: string;
        readonly RightFooterPicture: Graphic;
        RightHeader: string;
        readonly RightHeaderPicture: Graphic;
        RightMargin: number;
        ScaleWithDocHeaderFooter: boolean;
        TopMargin: number;

        /** Represents a percentage between 10 and 400 */
        Zoom: number;
    }

    class Pane {
        private 'Excel.Pane_typekey': Pane;
        private constructor();
        Activate(): boolean;
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Index: number;
        LargeScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): any;
        readonly Parent: any;
        PointsToScreenPixelsX(Points: number): number;
        PointsToScreenPixelsY(Points: number): number;
        ScrollColumn: number;
        ScrollIntoView(Left: number, Top: number, Width: number, Height: number, Start?: boolean): void;
        ScrollRow: number;
        SmallScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): any;
        readonly VisibleRange: Range;
    }

    interface Panes {
        _Default(Index: number): Pane;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): Pane;
        readonly Parent: any;
        (Index: number): Pane;
    }

    class Parameter {
        private 'Excel.Parameter_typekey': Parameter;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        DataType: XlParameterDataType;
        Name: string;
        readonly Parent: any;
        readonly PromptString: string;
        RefreshOnChange: boolean;
        SetParam(Type: XlParameterType, Value: any): void;
        readonly SourceRange: Range;
        readonly Type: XlParameterType;
        readonly Value: any;
    }

    interface Parameters {
        _Default(Index: any): Parameter;
        Add(Name: string, iDataType?: XlParameterDataType): Parameter;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;
        Item(Index: number | string): Parameter;
        readonly Parent: any;
        (Index: number | string): Parameter;
    }

    class Phonetic {
        private 'Excel.Phonetic_typekey': Phonetic;
        private constructor();
        Alignment: number;
        readonly Application: Application;
        CharacterType: number;
        readonly Creator: XlCreator;
        readonly Font: Font;
        readonly Parent: any;
        Text: string;
        Visible: boolean;
    }

    interface Phonetics {
        _Default(Index: number): any;
        Add(Start: number, Length: number, Text: string): void;
        Alignment: number;
        readonly Application: Application;
        CharacterType: number;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Font: Font;
        Item(Index: number): Phonetic;
        readonly Length: number;
        readonly Parent: any;
        readonly Start: number;
        Text: string;
        Visible: boolean;
        (Index: number): Phonetic;
    }

    class PictureFormat {
        private 'Excel.PictureFormat_typekey': PictureFormat;
        private constructor();
        readonly Application: any;
        Brightness: number;
        ColorType: Office.MsoPictureColorType;
        Contrast: number;
        readonly Creator: number;
        readonly Crop: Office.Crop;
        CropBottom: number;
        CropLeft: number;
        CropRight: number;
        CropTop: number;
        IncrementBrightness(Increment: number): void;
        IncrementContrast(Increment: number): void;
        readonly Parent: any;
        TransparencyColor: Office.MsoRGBType;
        TransparentBackground: Office.MsoTriState;
    }

    class PivotAxis {
        private 'Excel.PivotAxis_typekey': PivotAxis;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Parent: any;
        readonly PivotLines: PivotLines;
    }

    class PivotCache {
        private 'Excel.PivotCache_typekey': PivotCache;
        private constructor();
        readonly ADOConnection: ADODB.Connection;
        readonly Application: Application;
        BackgroundQuery: boolean;
        CommandText: string;
        CommandType: XlCmdType;
        Connection: string;
        CreatePivotTable(TableDestination: Range, TableName?: string, ReadData?: boolean, DefaultVersion?: any): PivotTable;
        readonly Creator: XlCreator;
        EnableRefresh: boolean;
        readonly Index: number;
        readonly IsConnected: boolean;
        LocalConnection: string;
        MaintainConnection: boolean;
        MakeConnection(): void;
        readonly MemoryUsed: number;
        MissingItemsLimit: XlPivotTableMissingItems;
        readonly OLAP: boolean;
        OptimizeCache: boolean;
        readonly Parent: any;
        readonly QueryType: XlQueryType;
        readonly RecordCount: number;
        Recordset: ADODB.Recordset;
        Refresh(): void;
        readonly RefreshDate: VarDate;
        readonly RefreshName: string;
        RefreshOnFileOpen: boolean;
        RefreshPeriod: number;
        ResetTimer(): void;
        RobustConnect: XlRobustConnect;
        SaveAsODC(ODCFileName: string, Description?: string, Keywords?: string): void;
        SavePassword: boolean;
        SourceConnectionFile: string;
        SourceData: string | SafeArray<string> | PivotTable;
        readonly SourceDataFile: string;
        readonly SourceType: XlPivotTableSourceType;
        Sql: any;
        UpgradeOnRefresh: boolean;
        UseLocalConnection: boolean;
        readonly Version: XlPivotTableVersionList;
        readonly WorkbookConnection: WorkbookConnection;
    }

    interface PivotCaches {
        _Default(Index: any): PivotCache;
        Add(SourceType: XlPivotTableSourceType, SourceData?: any): PivotCache;
        readonly Application: Application;
        readonly Count: number;
        Create(SourceType: XlPivotTableSourceType.xlDatabase | XlPivotTableSourceType.xlConsolidation, SourceData: string, Version?: XlPivotTableVersionList): PivotCache;
        Create(SourceType: XlPivotTableSourceType.xlExternal, SourceData: WorkbookConnection, Version?: XlPivotTableVersionList): PivotCache;
        readonly Creator: XlCreator;
        Item(Index: number): PivotCache;
        readonly Parent: any;
        (Index: number): PivotCache;
    }

    class PivotCell {
        private 'Excel.PivotCell_typekey': PivotCell;
        private constructor();
        AllocateChange(): void;
        readonly Application: Application;
        readonly CellChanged: XlCellChangedState;
        readonly ColumnItems: PivotItemList;
        readonly Creator: XlCreator;
        readonly CustomSubtotalFunction: XlConsolidationFunction;
        readonly DataField: PivotField;
        readonly DataSourceValue: any;
        DiscardChange(): void;
        readonly Dummy18: string;
        readonly MDX: string;
        readonly Parent: any;
        readonly PivotCellType: XlPivotCellType;
        readonly PivotColumnLine: PivotLine;
        readonly PivotField: PivotField;
        readonly PivotItem: PivotItem;
        readonly PivotRowLine: PivotLine;
        readonly PivotTable: PivotTable;
        readonly Range: Range;
        readonly RowItems: PivotItemList;
    }

    class PivotField {
        private 'Excel.PivotField_typekey': PivotField;
        private constructor();
        _AutoSort(Order: number, Field: string): void;
        _Default: string;
        AddPageItem(Item: string, ClearList?: boolean): void;
        readonly AllItemsVisible: boolean;
        readonly Application: Application;
        AutoShow(Type: number, Range: number, Count: number, Field: string): void;
        readonly AutoShowCount: number;
        readonly AutoShowField: string;
        readonly AutoShowRange: number;
        readonly AutoShowType: number;
        AutoSort(Order: number, Field: string, PivotLine?: any, CustomSubtotal?: any): void;
        readonly AutoSortCustomSubtotal: number;
        readonly AutoSortField: string;
        readonly AutoSortOrder: number;
        readonly AutoSortPivotLine: PivotLine;
        BaseField: any;
        BaseItem: any;
        CalculatedItems(): CalculatedItems;
        Calculation: XlPivotFieldCalculation;
        Caption: string;
        readonly ChildField: PivotField;
        readonly ChildItems: PivotItemsResult;
        ClearAllFilters(): void;
        ClearLabelFilters(): void;
        ClearManualFilter(): void;
        ClearValueFilters(): void;
        readonly Creator: XlCreator;
        readonly CubeField: CubeField;
        CurrentPage: PivotItem;
        CurrentPageList: SafeArray<string>;
        CurrentPageName: string;
        DatabaseSort: boolean;
        readonly DataRange: Range;
        readonly DataType: XlPivotFieldDataType;
        Delete(): void;
        readonly DisplayAsCaption: boolean;
        DisplayAsTooltip: boolean;
        DisplayInReport: boolean;
        DragToColumn: boolean;
        DragToData: boolean;
        DragToHide: boolean;
        DragToPage: boolean;
        DragToRow: boolean;
        DrilledDown: boolean;
        DrillTo(Field: string): void;
        EnableItemSelection: boolean;
        EnableMultiplePageItems: boolean;
        Formula: string;
        Function: XlConsolidationFunction;
        readonly GroupLevel: number;
        Hidden: boolean;
        readonly HiddenItems: PivotItemsResult;
        HiddenItemsList: SafeArray<string>;
        IncludeNewItemsInFilter: boolean;
        readonly IsCalculated: boolean;
        readonly IsMemberProperty: boolean;
        readonly LabelRange: Range;
        LayoutBlankLine: boolean;
        LayoutCompactRow: boolean;
        LayoutForm: XlLayoutFormType;
        LayoutPageBreak: boolean;
        LayoutSubtotalLocation: XlSubtototalLocationType;
        MemberPropertyCaption: string;
        readonly MemoryUsed: number;
        Name: string;
        NumberFormat: string;
        Orientation: XlPivotFieldOrientation;
        readonly Parent: any;
        readonly ParentField: PivotField;
        readonly ParentItems: PivotItemsResult;
        readonly PivotFilters: PivotFilters;
        readonly PivotItems: PivotItemsResult;
        Position: any;
        PropertyOrder: number;
        readonly PropertyParentField: PivotField;
        RepeatLabels: boolean;
        ServerBased: boolean;
        ShowAllItems: boolean;
        ShowDetail: boolean;
        readonly ShowingInAxis: boolean;
        readonly SourceCaption: string;
        readonly SourceName: string;
        StandardFormula: string;
        SubtotalName: string;
        readonly Subtotals: SafeArray<boolean> & ((Index: PivotFieldSubtotal) => boolean);
        readonly TotalLevels: number;
        UseMemberPropertyAsCaption: boolean;
        Value: string;
        readonly VisibleItems: PivotItemsResult;
        VisibleItemsList: SafeArray<string>;
    }

    class PivotFields {
        private 'Excel.PivotFields_typekey': PivotFields;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): PivotField;
        readonly Parent: PivotTable;
    }

    type PivotFieldsResult = PivotFields & ((Index: number | string) => PivotField) & ((Indexes: SafeArray<number | string>) => PivotFields);

    class PivotFilter {
        private 'Excel.PivotFilter_typekey': PivotFilter;
        private constructor();
        readonly Active: boolean;
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly DataCubeField: CubeField;
        readonly DataField: PivotField;
        Delete(): void;
        readonly Description: string;
        readonly FilterType: XlPivotFilterType;
        readonly IsMemberPropertyFilter: boolean;
        readonly MemberPropertyField: PivotField;
        readonly Name: string;
        Order: number;
        readonly Parent: any;
        readonly PivotField: PivotField;
        readonly Value1: any;
        readonly Value2: any;
    }

    interface PivotFilters {
        _Default(Index: any): PivotFilter;
        Add(Type: XlPivotFilterType, DataField?: any, Value1?: any, Value2?: any, Order?: any, Name?: any, Description?: any, MemberPropertyField?: any): PivotFilter;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): PivotFilter;
        readonly Parent: any;
        (Index: number): PivotFilter;
    }

    class PivotFormula {
        private 'Excel.PivotFormula_typekey': PivotFormula;
        private constructor();
        _Default: string;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        Formula: string;
        Index: number;
        readonly Parent: any;
        StandardFormula: string;
        Value: string;
    }

    interface PivotFormulas {
        _Add(Formula: string): PivotFormula;
        _Default(Index: any): PivotFormula;
        Add(Formula: string, UseStandardFormula?: any): PivotFormula;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): PivotFormula;
        readonly Parent: any;
        (Index: number | string): PivotFormula;
    }

    class PivotItem {
        private 'Excel.PivotItem_typekey': PivotItem;
        private constructor();
        _Default: string;
        readonly Application: Application;
        Caption: string;
        ChildItems: PivotItemsResult;
        readonly Creator: XlCreator;
        readonly DataRange: Range;
        Delete(): void;
        DrilledDown: boolean;
        DrillTo(Field: string): void;
        Formula: string;
        readonly IsCalculated: boolean;
        readonly LabelRange: Range;
        Name: string;
        readonly Parent: PivotField;
        readonly ParentItem: PivotItem;
        readonly ParentShowDetail: boolean;
        Position: number;
        readonly RecordCount: number;
        ShowDetail: boolean;
        readonly SourceName: any;
        readonly SourceNameStandard: string;
        StandardFormula: string;
        Value: string;
        Visible: boolean;
    }

    interface PivotItemList {
        _Default(Field: any): PivotItem;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): PivotItem;
        readonly Parent: any;
        (Field: number | string): PivotItem;
    }

    class PivotItems {
        private 'Excel.PivotItems_typekey': PivotItems;
        private constructor();
        Add(Name: string): void;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): any;
        readonly Parent: PivotField;
    }

    type PivotItemsResult = PivotItems & ((Index: number | string) => PivotItem) & ((Indexes: SafeArray<number | string>) => PivotItems);

    class PivotLayout {
        private 'Excel.PivotLayout_typekey': PivotLayout;
        private constructor();
        AddFields(RowFields?: any, ColumnFields?: any, PageFields?: any, AppendField?: any): void;
        readonly Application: Application;
        ColumnFields(Index?: any): any;
        readonly Creator: XlCreator;
        readonly CubeFields: CubeFields;
        DataFields(Index?: any): any;
        HiddenFields(Index?: any): any;
        InnerDetail: string;
        PageFields(Index?: any): any;
        readonly Parent: any;
        readonly PivotCache: PivotCache;
        PivotFields(Index?: any): any;
        readonly PivotTable: PivotTable;
        RowFields(Index?: any): any;
        VisibleFields(Index?: any): any;
    }

    class PivotLine {
        private 'Excel.PivotLine_typekey': PivotLine;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly LineType: XlPivotLineType;
        readonly Parent: any;
        readonly PivotLineCells: PivotLineCells;
        readonly Position: number;
    }

    interface PivotLineCells {
        _Default(Index: any): PivotCell;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): PivotCell;
        readonly Parent: any;
        (Index: number): PivotCell;
    }

    interface PivotLines {
        _Default(Index: any): PivotLine;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): PivotLine;
        readonly Parent: any;
        (Index: number): PivotLine;
    }

    class PivotTable {
        private 'Excel.PivotTable_typekey': PivotTable;
        private constructor();
        _Default: string;

        /** @param Mode [Mode=0] */
        _PivotSelect(Name: string, Mode?: XlPTSelectionMode): void;
        readonly ActiveFilters: PivotFilters;
        AddDataField(Field: any, Caption?: any, Function?: any): PivotField;
        AddFields(RowFields?: string | SafeArray<string>, ColumnFields?: string | SafeArray<string>, PageFields?: string | SafeArray<string>, AddToTable?: boolean): any;
        AllocateChanges(): void;
        Allocation: XlAllocation;
        AllocationMethod: XlAllocationMethod;
        AllocationValue: XlAllocationValue;
        AllocationWeightExpression: string;
        AllowMultipleFilters: boolean;
        AlternativeText: string;
        readonly Application: Application;
        CacheIndex: number;
        CalculatedFields(): CalculatedFields;
        readonly CalculatedMembers: CalculatedMembers;
        CalculatedMembersInFilters: boolean;
        ChangeConnection(conn: WorkbookConnection): void;
        readonly ChangeList: PivotTableChangeList;
        ChangePivotCache(PivotCache: string): void;
        ClearAllFilters(): void;
        ClearTable(): void;
        ColumnFields: PivotFieldsResult;
        ColumnGrand: boolean;
        readonly ColumnRange: Range;
        CommitChanges(): void;
        CompactLayoutColumnHeader: string;
        CompactLayoutRowHeader: string;
        CompactRowIndent: number;
        ConvertToFormulas(ConvertFilters: boolean): void;
        CreateCubeFile(File: string, Measures?: SafeArray<string>, Levels?: SafeArray<string>, Members?: SafeArray<SafeArray<string>>, Properties?: boolean): string;
        readonly Creator: XlCreator;
        readonly CubeFields: CubeFields;
        readonly DataBodyRange: Range;
        DataFields: PivotFieldsResult;
        readonly DataLabelRange: Range;
        readonly DataPivotField: PivotField;
        DiscardChanges(): void;
        DisplayContextTooltips: boolean;
        DisplayEmptyColumn: boolean;
        DisplayEmptyRow: boolean;
        DisplayErrorString: boolean;
        DisplayFieldCaptions: boolean;
        DisplayImmediateItems: boolean;
        DisplayMemberPropertyTooltips: boolean;
        DisplayNullString: boolean;
        Dummy15(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        EnableDataValueEditing: boolean;
        EnableDrilldown: boolean;
        EnableFieldDialog: boolean;
        EnableFieldList: boolean;
        EnableWizard: boolean;
        EnableWriteback: boolean;
        ErrorString: string;
        FieldListSortAscending: boolean;
        Format(Format: XlPivotFormatType): void;
        GetData(Name: string): number;
        GetPivotData(DataField?: string, Field1?: string, Item1?: string, Field2?: string, Item2?: string, Field3?: string, Item3?: string, Field4?: string, Item4?: string, Field5?: string, Item5?: string, Field6?: string, Item6?: string, Field7?: string, Item7?: string, Field8?: string, Item8?: string, Field9?: string, Item9?: string, Field10?: string, Item10?: string, Field11?: string, Item11?: string, Field12?: string, Item12?: string, Field13?: string, Item13?: string, Field14?: string, Item14?: string): Range;
        GrandTotalName: string;
        HasAutoFormat: boolean;
        HiddenFields: PivotFieldsResult;
        InGridDropZones: boolean;
        InnerDetail: string;
        LayoutRowDefault: XlLayoutRowType;
        ListFormulas(): void;
        Location: string;
        ManualUpdate: boolean;
        readonly MDX: string;
        MergeLabels: boolean;
        Name: string;
        NullString: string;
        PageFieldOrder: number;
        PageFields: PivotFieldsResult;
        PageFieldStyle: string;
        PageFieldWrapCount: number;
        readonly PageRange: Range;
        readonly PageRangeCells: Range;
        readonly Parent: any;
        PivotCache(): PivotCache;
        readonly PivotColumnAxis: PivotAxis;
        PivotFields: PivotFieldsResult;
        readonly PivotFormulas: PivotFormulas;
        readonly PivotRowAxis: PivotAxis;

        /** @param Mode [Mode=0] */
        PivotSelect(Name: string, Mode?: XlPTSelectionMode, UseStandardName?: boolean): void;
        PivotSelection: string;
        PivotSelectionStandard: string;
        PivotTableWizard(): void;
        PivotTableWizard<TSourceType>(SourceType: TSourceType, SourceData: PivotTableWizardSourceData<TSourceType>, TableDestination?: Range, TableName?: string, RowGrand?: boolean, ColumnGrand?: boolean, SaveData?: boolean, HasAutoFormat?: boolean, AutoPage?: PivotTableWizardAutoPage<TSourceType>, Reserved?: undefined, BackgroundQuery?: boolean, OptimizeCache?: boolean, PageFieldOrder?: XlOrder, PageFieldWrapCount?: number, ReadData?: boolean, Connection?: string): void;
        PreserveFormatting: boolean;
        PrintDrillIndicators: boolean;
        PrintTitles: boolean;
        RefreshDataSourceValues(): void;
        readonly RefreshDate: VarDate;
        readonly RefreshName: string;
        RefreshTable(): boolean;
        RepeatAllLabels(Repeat: XlPivotFieldRepeatLabels): void;
        RepeatItemsOnEachPrintedPage: boolean;
        RowAxisLayout(RowLayout: XlLayoutRowType): void;
        RowFields: PivotFieldsResult;
        RowGrand: boolean;
        readonly RowRange: Range;
        SaveData: boolean;
        SelectionMode: XlPTSelectionMode;
        ShowCellBackgroundFromOLAP: boolean;
        ShowDrillIndicators: boolean;
        ShowPageMultipleItemLabel: boolean;
        ShowPages(PageField?: string): any;
        ShowTableStyleColumnHeaders: boolean;
        ShowTableStyleColumnStripes: boolean;
        ShowTableStyleLastColumn: boolean;
        ShowTableStyleRowHeaders: boolean;
        ShowTableStyleRowStripes: boolean;
        ShowValuesRow: boolean;
        readonly Slicers: Slicers;
        SmallGrid: boolean;
        SortUsingCustomLists: boolean;
        SourceData: any;
        SubtotalHiddenPageItems: boolean;
        SubtotalLocation(Location: XlSubtototalLocationType): void;
        Summary: string;
        readonly TableRange1: Range;
        readonly TableRange2: Range;
        TableStyle: string;
        TableStyle2: any;
        Tag: string;
        TotalsAnnotation: boolean;
        Update(): void;
        VacatedStyle: string;
        Value: string;
        readonly Version: XlPivotTableVersionList;
        ViewCalculatedMembers: boolean;
        VisibleFields: PivotFieldsResult;
        VisualTotals: boolean;
        VisualTotalsForSets: boolean;
    }

    interface PivotTableChangeList {
        _Default(Index: any): ValueChange;
        Add(Tuple: string, Value: number, AllocationValue?: any, AllocationMethod?: any, AllocationWeightExpression?: any): ValueChange;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): ValueChange;
        readonly Parent: any;
        (Index: number | string): ValueChange;
    }

    class PlotArea {
        private 'Excel.PlotArea_typekey': PlotArea;
        private constructor();
        readonly _InsideHeight: number;
        readonly _InsideLeft: number;
        readonly _InsideTop: number;
        readonly _InsideWidth: number;
        readonly Application: Application;
        readonly Border: Border;
        ClearFormats(): any;
        readonly Creator: XlCreator;
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

    class Point {
        private 'Excel.Point_typekey': Point;
        private constructor();

        /** @param Type [Type=2] */
        _ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any): any;
        readonly Application: Application;

        /** @param Type [Type=2] */
        ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: boolean, AutoText?: boolean, HasLeaderLines?: boolean, ShowSeriesName?: boolean, ShowCategoryName?: boolean, ShowValue?: boolean, ShowPercentage?: boolean, ShowBubbleSize?: boolean, Separator?: string): any;
        ApplyPictToEnd: boolean;
        ApplyPictToFront: boolean;
        ApplyPictToSides: boolean;
        readonly Border: Border;
        ClearFormats(): any;
        Copy(): any;
        readonly Creator: XlCreator;
        readonly DataLabel: DataLabel;
        Delete(): any;
        Explosion: number;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        Has3DEffect: boolean;
        HasDataLabel: boolean;
        readonly Height: number;
        readonly Interior: Interior;
        InvertIfNegative: boolean;
        readonly Left: number;
        MarkerBackgroundColor: number;
        MarkerBackgroundColorIndex: XlColorIndex;
        MarkerForegroundColor: number;
        MarkerForegroundColorIndex: XlColorIndex;
        MarkerSize: number;
        MarkerStyle: XlMarkerStyle;
        readonly Name: string;
        readonly Parent: any;
        Paste(): any;
        PictureType: XlChartPictureType;
        PictureUnit: number;
        PictureUnit2: number;

        /** @param Index [Index=2] */
        PieSliceLocation(loc: XlPieSliceLocation, Index?: XlPieSliceIndex): number;
        SecondaryPlot: boolean;
        Select(): any;
        Shadow: boolean;
        readonly Top: number;
        readonly Width: number;
    }

    interface Points {
        _Default(Index: number): Point;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): Point;
        readonly Parent: any;
        (Index: number): Point;
    }

    class ProtectedViewWindow {
        private 'Excel.ProtectedViewWindow_typekey': ProtectedViewWindow;
        private constructor();
        readonly _Default: string;
        Activate(): void;
        Caption: string;
        Close(): boolean;
        Edit(WriteResPassword?: string, UpdateLinks?: 0 | 1): Workbook;
        EnableResize: boolean;
        Height: number;
        Left: number;
        readonly SourceName: string;
        readonly SourcePath: string;
        Top: number;
        Visible: boolean;
        Width: number;
        WindowState: XlProtectedViewWindowState;
        readonly Workbook: Workbook;
    }

    interface ProtectedViewWindows {
        _Default(Index: any): ProtectedViewWindow;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): ProtectedViewWindow;
        Open(Filename: string, Password?: string, AddToMru?: boolean, RepairMode?: boolean): ProtectedViewWindow;
        readonly Parent: any;
        (Index: number | string): ProtectedViewWindow;
    }

    class Protection {
        private 'Excel.Protection_typekey': Protection;
        private constructor();
        readonly AllowDeletingColumns: boolean;
        readonly AllowDeletingRows: boolean;
        readonly AllowEditRanges: AllowEditRanges;
        readonly AllowFiltering: boolean;
        readonly AllowFormattingCells: boolean;
        readonly AllowFormattingColumns: boolean;
        readonly AllowFormattingRows: boolean;
        readonly AllowInsertingColumns: boolean;
        readonly AllowInsertingHyperlinks: boolean;
        readonly AllowInsertingRows: boolean;
        readonly AllowSorting: boolean;
        readonly AllowUsingPivotTables: boolean;
    }

    class PublishObject {
        private 'Excel.PublishObject_typekey': PublishObject;
        private constructor();
        readonly Application: Application;
        AutoRepublish: boolean;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly DivID: string;
        Filename: string;
        HtmlType: XlHtmlType;
        readonly Parent: any;
        Publish(Create?: boolean): void;
        readonly Sheet: string;
        readonly Source: string;
        readonly SourceType: XlSourceType;
        Title: string;
    }

    interface PublishObjects {
        _Default(Index: any): PublishObject;
        Add(SourceType: XlSourceType, Filename: string, Sheet?: string, Source?: XlSourceType.xlSourceAutoFilter | XlSourceType.xlSourceChart | XlSourceType.xlSourcePivotTable | XlSourceType.xlSourcePrintArea | XlSourceType.xlSourceQuery | XlSourceType.xlSourceRange, HtmlType?: XlHtmlType, DivID?: string, Title?: string): PublishObject;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;
        Item(Index: number | string): PublishObject;
        readonly Parent: any;
        Publish(): void;
        (Index: number | string): PublishObject;
    }

    class QueryTable {
        private 'Excel.QueryTable_typekey': QueryTable;
        private constructor();
        AdjustColumnWidth: boolean;
        readonly Application: Application;
        BackgroundQuery: boolean;
        CancelRefresh(): void;
        CommandText: string;
        CommandType: XlCmdType;
        Connection: string;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Destination: Range;
        EditWebPage: string;
        EnableEditing: boolean;
        EnableRefresh: boolean;
        readonly FetchedRowOverflow: boolean;
        FieldNames: boolean;
        FillAdjacentFormulas: boolean;
        HasAutoFormat: boolean;
        readonly ListObject: ListObject;
        MaintainConnection: boolean;
        Name: string;
        readonly Parameters: Parameters;
        readonly Parent: any;
        PostText: string;
        PreserveColumnInfo: boolean;
        PreserveFormatting: boolean;
        readonly QueryType: XlQueryType;
        Recordset: DAO.Recordset | ADODB.Recordset;
        Refresh(BackgroundQuery?: boolean): boolean;
        readonly Refreshing: boolean;
        RefreshOnFileOpen: boolean;
        RefreshPeriod: number;
        RefreshStyle: XlCellInsertionMode;
        ResetTimer(): void;
        readonly ResultRange: Range;
        RobustConnect: XlRobustConnect;
        RowNumbers: boolean;
        SaveAsODC(ODCFileName: string, Description?: string, Keywords?: string): void;
        SaveData: boolean;
        SavePassword: boolean;
        readonly Sort: Sort;
        SourceConnectionFile: string;
        SourceDataFile: string;
        Sql: any;
        TablesOnlyFromHTML: boolean;
        TextFileColumnDataTypes: SafeArray<XlColumnDataType>;
        TextFileCommaDelimiter: boolean;
        TextFileConsecutiveDelimiter: boolean;
        TextFileDecimalSeparator: string;
        TextFileFixedColumnWidths: SafeArray<number>;
        TextFileOtherDelimiter: string;
        TextFileParseType: XlTextParsingType;
        TextFilePlatform: number;
        TextFilePromptOnRefresh: boolean;
        TextFileSemicolonDelimiter: boolean;
        TextFileSpaceDelimiter: boolean;
        TextFileStartRow: number;
        TextFileTabDelimiter: boolean;
        TextFileTextQualifier: XlTextQualifier;
        TextFileThousandsSeparator: string;
        TextFileTrailingMinusNumbers: boolean;
        TextFileVisualLayout: XlTextVisualLayoutType;
        WebConsecutiveDelimitersAsOne: boolean;
        WebDisableDateRecognition: boolean;
        WebDisableRedirections: boolean;
        WebFormatting: XlWebFormatting;
        WebPreFormattedTextToColumns: boolean;
        WebSelectionType: XlWebSelectionType;
        WebSingleBlockTextImport: boolean;
        WebTables: string;
        readonly WorkbookConnection: WorkbookConnection;
    }

    interface QueryTables {
        _Default(Index: any): QueryTable;
        Add(Connection: QueryTable | DAO.Recordset | ADODB.Recordset, Destination: Range): QueryTable;
        Add(Connection: string, Destination: Range, Sql?: string): QueryTable;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): QueryTable;
        readonly Parent: any;
        (Index: number | string): QueryTable;
    }

    interface Range {
        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): any;

        /**
         * @param Weight [Weight=2]
         * @param ColorIndex [ColorIndex=-4105]
         */
        _BorderAround(LineStyle: any, Weight?: XlBorderWeight, ColorIndex?: XlColorIndex, Color?: any): any;
        _Default(RowIndex?: any, ColumnIndex?: any): any;

        /**
         * @param Paste [Paste=-4104]
         * @param Operation [Operation=-4142]
         */
        _PasteSpecial(Paste?: XlPasteType, Operation?: XlPasteSpecialOperation, SkipBlanks?: any, Transpose?: any): any;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): any;
        Activate(): any;
        AddComment(Text?: string): Comment;
        AddIndent: boolean;

        /** @param ReferenceStyle [ReferenceStyle=1] */
        Address(RowAbsolute?: boolean, ColumnAbsolute?: boolean, ReferenceStyle?: XlReferenceStyle, External?: boolean, RelativeTo?: Range): string;

        /** @param ReferenceStyle [ReferenceStyle=1] */
        AddressLocal(RowAbsolute?: boolean, ColumnAbsolute?: boolean, ReferenceStyle?: XlReferenceStyle, External?: boolean, RelativeTo?: Range): string;
        AdvancedFilter(Action: XlFilterAction.xlFilterCopy, CriteriaRange?: Range, CopyToRange?: Range, Unique?: boolean): any;
        AdvancedFilter(Action: XlFilterAction, CriteriaRange?: Range, CopyToRange?: undefined, Unique?: boolean): any;
        AllocateChanges(): void;
        readonly AllowEdit: boolean;
        readonly Application: Application;

        /** @param Order [Order=1] */
        ApplyNames(Names?: SafeArray<string>, IgnoreRelativeAbsolute?: boolean, UseRowColumnNames?: boolean, OmitColumn?: boolean, OmitRow?: boolean, Order?: XlApplyNamesOrder, AppendLast?: boolean): any;
        ApplyOutlineStyles(): any;
        readonly Areas: Areas;
        AutoComplete(String: string): string;

        /** @param Type [Type=0] */
        AutoFill(Destination: Range, Type?: XlAutoFillType): any;

        /** @param Operator [Operator=1] */
        AutoFilter(Field: number, Criteria1: string, Operator?: XlAutoFilterOperator, Criteria2?: string, VisibleDropDown?: boolean): any;
        AutoFit(): any;

        /** @param Format [Format=1] */
        AutoFormat(Format?: XlRangeAutoFormat, Number?: any, Font?: any, Alignment?: any, Border?: any, Pattern?: any, Width?: any): any;
        AutoOutline(): any;

        /**
         * @param Weight [Weight=2]
         * @param ColorIndex [ColorIndex=-4105]
         */
        BorderAround(LineStyle?: XlLineStyle, Weight?: XlBorderWeight, ColorIndex?: XlColorIndex, Color?: number, ThemeColor?: number | XlThemeColor): any;
        readonly Borders: Borders;
        Calculate(): any;
        CalculateRowMajorOrder(): any;
        readonly Cells: Range;
        Characters(Start?: number, Length?: number): Characters;
        CheckSpelling(CustomDictionary?: string, IgnoreUppercase?: boolean, AlwaysSuggest?: boolean, SpellLang?: Office.MsoLanguageID): any;
        Clear(): any;
        ClearComments(): void;
        ClearContents(): any;
        ClearFormats(): any;
        ClearHyperlinks(): void;
        ClearNotes(): any;
        ClearOutline(): any;
        readonly Column: number;
        ColumnDifferences(Comparison: Range): Range;
        readonly Columns: Range;
        ColumnWidth: number | null;
        readonly Comment: Comment;
        Consolidate(Sources?: SafeArray<string>, Function?: XlConsolidationFunction, TopRow?: boolean, LeftColumn?: boolean, CreateLinks?: boolean): any;
        Copy(Destination?: Range): any;
        CopyFromRecordset(Data: DAO.Recordset | ADODB.Recordset, MaxRows?: number, MaxColumns?: number): number;

        /**
         * @param Appearance [Appearance=1]
         * @param Format [Format=-4147]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): any;
        readonly Count: number;
        readonly CountLarge: number;
        CreateNames(Top?: boolean, Left?: boolean, Bottom?: boolean, Right?: boolean): any;

        /** @param Appearance [Appearance=1] */
        CreatePublisher(Edition: any, Appearance?: XlPictureAppearance, ContainsPICT?: any, ContainsBIFF?: any, ContainsRTF?: any, ContainsVALU?: any): any;
        readonly Creator: XlCreator;
        readonly CurrentArray: Range;
        readonly CurrentRegion: Range;
        Cut(Destination?: Range): any;

        /**
         * @param Type [Type=-4132]
         * @param Date [Date=1]
         * @param Step [Step=1]
         */
        DataSeries(Rowcol: XlRowCol, Type?: XlDataSeriesType, Date?: XlDataSeriesDate, Step?: number, Stop?: number, Trend?: boolean): any;
        Delete(Shift?: XlDeleteShiftDirection): any;
        readonly Dependents: Range;
        DialogBox(): number | false;
        readonly DirectDependents: Range;
        readonly DirectPrecedents: Range;
        Dirty(): void;
        DiscardChanges(): void;
        readonly DisplayFormat: DisplayFormat;

        /**
         * @param Appearance [Appearance=1]
         * @param ChartSize [ChartSize=1]
         */
        EditionOptions(Type: XlEditionType, Option: XlEditionOptionsOption, Name: any, Reference: any, Appearance?: XlPictureAppearance, ChartSize?: XlPictureAppearance, Format?: any): any;
        End(Direction: XlDirection): Range;
        readonly EntireColumn: Range;
        readonly EntireRow: Range;
        readonly Errors: Errors;
        ExportAsFixedFormat(Type: XlFixedFormatType, Filename?: string, Quality?: XlFixedFormatQuality, IncludeDocProperties?: boolean, IgnorePrintAreas?: boolean, From?: number, To?: number, OpenAfterPublish?: boolean, FixedFormatExtClassPtr?: any): void;
        FillDown(): any;
        FillLeft(): any;
        FillRight(): any;
        FillUp(): any;

        /** @param SearchDirection [SearchDirection=1] */
        Find(What: any, After?: any, LookIn?: XlFindLookIn, LookAt?: XlLookAt, SearchOrder?: XlSearchOrder, SearchDirection?: XlSearchDirection, MatchCase?: boolean, MatchByte?: boolean, SearchFormat?: any): Range;
        FindNext(After?: any): Range;
        FindPrevious(After?: any): Range;
        readonly Font: Font;
        readonly FormatConditions: FormatConditions;
        Formula: string | SafeArray<string>;
        FormulaArray: string | SafeArray<string> | null;
        FormulaHidden: boolean | null;
        FormulaLabel: XlFormulaLabel;
        FormulaLocal: string | SafeArray<string>;
        FormulaR1C1: string | SafeArray<string>;
        FormulaR1C1Local: string | SafeArray<string>;
        FunctionWizard(): any;
        GoalSeek(Goal: any, ChangingCell: Range): boolean;
        Group(Start?: any, End?: any, By?: number, Periods?: SafeArray<boolean>): any;
        readonly HasArray: boolean;
        readonly HasFormula: boolean | null;
        Height: number;
        Hidden: boolean;
        HorizontalAlignment: HorizontalAlignments;
        readonly Hyperlinks: Hyperlinks;
        ID: string;
        IndentLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
        Insert(Shift?: XlInsertShiftDirection, CopyOrigin?: any): any;
        InsertIndent(InsertAmount: number): void;
        readonly Interior: Interior;
        Item(RowIndex: number, ColumnIndex?: number): Range;
        Item(Address: string): Range;
        Justify(): any;
        readonly Left: number;
        readonly ListHeaderRows: number;
        ListNames(): any;
        readonly ListObject: ListObject;
        readonly LocationInTable: XlLocationInTable;
        Locked: boolean | null;
        readonly MDX: string;
        Merge(Across?: boolean): void;
        readonly MergeArea: Range;
        MergeCells: boolean;
        Name: string | Name;
        NavigateArrow(TowardPrecedent?: boolean, ArrowNumber?: number, LinkNumber?: number): any;
        readonly Next: Range;
        NoteText(Text?: string, Start?: number, Length?: number): string;
        NumberFormat: string | null;
        NumberFormatLocal: string | null;
        Offset(RowOffset?: number, ColumnOffset?: number): Range;
        Orientation: number | XlOrientation;
        OutlineLevel: number;
        PageBreak: number;
        readonly Parent: any;
        Parse(ParseLine?: string, Destination?: Range): any;

        /**
         * @param Paste [Paste=-4104]
         * @param Operation [Operation=-4142]
         */
        PasteSpecial(Paste?: XlPasteType, Operation?: XlPasteSpecialOperation, SkipBlanks?: boolean, Transpose?: boolean): any;
        readonly Phonetic: Phonetic;
        readonly Phonetics: Phonetics;
        readonly PivotCell: PivotCell;
        readonly PivotField: PivotField;
        readonly PivotItem: PivotItem;
        readonly PivotTable: PivotTable;
        readonly Precedents: Range;
        readonly PrefixCharacter: "'" | '"' | '^' | '\\' | '';
        readonly Previous: Range;
        PrintOut<T extends boolean | undefined>(From?: number, To?: number, Copies?: number, Preview?: boolean, ActivePrinter?: string, PrintToFile?: T, Collate?: boolean, PrToFileName?: PrintToFileName<T>): any;
        PrintPreview(EnableChanges?: boolean): any;
        readonly QueryTable: QueryTable;
        Range(Cell1: string | Range, Cell2?: string | Range): Range;
        ReadingOrder: number;

        /** @param Header [Header=2] */
        RemoveDuplicates(Columns: SafeArray<number>, Header?: XlYesNoGuess): void;
        RemoveSubtotal(): any;
        Replace(What: string, Replacement: string, LookAt?: XlLookAt, SearchOrder?: XlSearchOrder, MatchCase?: boolean, MatchByte?: boolean, SearchFormat?: boolean, ReplaceFormat?: boolean): boolean;
        Resize(RowSize?: number, ColumnSize?: number): Range;
        readonly Row: number;
        RowDifferences(Comparison: Range): Range;
        RowHeight: number | null;
        readonly Rows: Range;
        Run(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        Select(): any;
        readonly ServerActions: Actions;
        SetPhonetic(): void;
        Show(): any;
        ShowDependents(Remove?: boolean): any;
        ShowDetail: any;
        ShowErrors(): any;
        ShowPrecedents(Remove?: boolean): any;
        ShrinkToFit: boolean | null;
        readonly SmartTags: SmartTags;

        /**
         * @param Order1 [Order1=1]
         * @param Order2 [Order2=1]
         * @param Order3 [Order3=1]
         * @param Header [Header=2]
         * @param Orientation [Orientation=2]
         * @param SortMethod [SortMethod=1]
         * @param DataOption1 [DataOption1=0]
         * @param DataOption2 [DataOption2=0]
         * @param DataOption3 [DataOption3=0]
         */
        Sort(Key1: string | Range, Order1?: XlSortOrder, Key2?: any, Type?: any, Order2?: XlSortOrder, Key3?: any, Order3?: XlSortOrder, Header?: XlYesNoGuess, OrderCustom?: number, MatchCase?: boolean, Orientation?: XlSortOrientation, SortMethod?: XlSortMethod, DataOption1?: XlSortDataOption, DataOption2?: XlSortDataOption, DataOption3?: XlSortDataOption): any;

        /**
         * @param SortMethod [SortMethod=1]
         * @param Order1 [Order1=1]
         * @param Order2 [Order2=1]
         * @param Order3 [Order3=1]
         * @param Header [Header=2]
         * @param Orientation [Orientation=2]
         * @param DataOption1 [DataOption1=0]
         * @param DataOption2 [DataOption2=0]
         * @param DataOption3 [DataOption3=0]
         */
        SortSpecial(SortMethod?: XlSortMethod, Key1?: string | Range, Order1?: XlSortOrder, Type?: any, Key2?: string | Range, Order2?: XlSortOrder, Key3?: string | Range, Order3?: XlSortOrder, Header?: XlYesNoGuess, OrderCustom?: number, MatchCase?: boolean, Orientation?: XlSortOrientation, DataOption1?: XlSortDataOption, DataOption2?: XlSortDataOption, DataOption3?: XlSortDataOption): any;
        readonly SoundNote: SoundNote;
        readonly SparklineGroups: SparklineGroups;
        Speak(SpeakDirection?: XlSpeakDirection, SpeakFormulas?: boolean): void;
        SpecialCells(Type: XlCellType.xlCellTypeConstants | XlCellType.xlCellTypeFormulas, Value?: XlSpecialCellsValue): Range;
        SpecialCells(Type: XlCellType): Range;
        Style: Style;

        /** @param Format [Format=-4158] */
        SubscribeTo(Edition: string, Format?: XlSubscribeToFormat): any;

        /** @param SummaryBelowData [SummaryBelowData=1] */
        Subtotal(GroupBy: number, Function: XlConsolidationFunction, TotalList: SafeArray<number>, Replace: boolean, PageBreaks: boolean, SummaryBelowData?: XlSummaryRow): any;
        readonly Summary: boolean;
        Table(RowInput?: Range, ColumnInput?: Range): any;
        readonly Text: string;

        /**
         * @param DataType [DataType=1]
         * @param TextQualifier [TextQualifier=1]
         */
        TextToColumns(Destination: Range, DataType?: XlTextParsingType, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: boolean, Tab?: boolean, Semicolon?: boolean, Comma?: boolean, Space?: boolean, Other?: boolean, OtherChar?: string, FieldInfo?: SafeArray, DecimalSeparator?: string, ThousandsSeparator?: string, TrailingMinusNumbers?: any): any;
        readonly Top: number;
        Ungroup(): any;
        UnMerge(): void;
        UseStandardHeight: boolean | null;
        UseStandardWidth: boolean | null;
        readonly Validation: Validation;

        // tslint:disable-next-line: ban-types
        Value: Exclude<any, Function> & ((RangeValueDataType?: XlRangeValueDataType) => any);
        Value2: any;
        VerticalAlignment: VerticalAlignments;
        readonly Width: number;
        readonly Worksheet: Worksheet;
        WrapText: boolean | null;
        readonly XPath: XPath;
        (RowIndex: number, ColumnIndex?: number): Range;
        (Address: string): Range;
    }

    interface Ranges {
        _Default(Index: any): Range;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): Range;
        readonly Parent: any;
        (Index: any): Range;
    }

    class RecentFile {
        private 'Excel.RecentFile_typekey': RecentFile;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        Open(): Workbook;
        readonly Parent: any;
        readonly Path: string;
    }

    interface RecentFiles {
        _Default(Index: number): RecentFile;
        Add(Name: string): RecentFile;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): RecentFile;
        Maximum: number;
        readonly Parent: any;
        (Index: number): RecentFile;
    }

    class Research {
        private 'Excel.Research_typekey': Research;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        IsResearchService(ServiceID: string): boolean;
        readonly Parent: any;
        Query(ServiceID: string, QueryString?: string, QueryLanguage?: any, UseSelection?: boolean, LaunchQuery?: boolean): any;
        SetLanguagePair(LanguageFrom: number, LanguageTo: number): any;
    }

    class RoutingSlip {
        private 'Excel.RoutingSlip_typekey': RoutingSlip;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delivery: XlRoutingSlipDelivery;
        Message: any;
        readonly Parent: any;
        Recipients(Index?: any): any;
        Reset(): any;
        ReturnWhenDone: boolean;
        readonly Status: XlRoutingSlipStatus;
        Subject: any;
        TrackStatus: boolean;
    }

    class RTD {
        private 'Excel.RTD_typekey': RTD;
        private constructor();
        RefreshData(): void;
        RestartServers(): void;
        ThrottleInterval: number;
    }

    class Scenario {
        private 'Excel.Scenario_typekey': Scenario;
        private constructor();
        readonly Application: Application;
        ChangeScenario(ChangingCells: Range, Values?: SafeArray): any;
        readonly ChangingCells: Range;
        Comment: string;
        readonly Creator: XlCreator;
        Delete(): any;
        Hidden: boolean;
        readonly Index: number;
        Locked: boolean;
        Name: string;
        readonly Parent: any;
        Show(): any;
        Values(): SafeArray;
        Values(Index: number): any;
    }

    interface Scenarios {
        Add(Name: string, ChangingCells: Range, Values?: SafeArray, Comment?: string, Locked?: boolean, Hidden?: boolean): Scenario;
        readonly Application: Application;
        readonly Count: number;

        /** @param ReportType [ReportType=1] */
        CreateSummary(ReportType?: XlSummaryReportType, ResultCells?: Range): any;
        readonly Creator: XlCreator;
        Item(Index: number | string): Scenario;
        Merge(Source: string | Worksheet): any;
        readonly Parent: any;
        (Index: number | string): Scenario;
    }

    class Series {
        private 'Excel.Series_typekey': Series;
        private constructor();

        /** @param Type [Type=2] */
        _ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any): any;
        readonly Application: Application;
        ApplyCustomType(ChartType: XlChartType): void;

        /** @param Type [Type=2] */
        ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: boolean, AutoText?: boolean, HasLeaderLines?: boolean, ShowSeriesName?: boolean, ShowCategoryName?: boolean, ShowValue?: boolean, ShowPercentage?: boolean, ShowBubbleSize?: boolean, Separator?: string): any;
        ApplyPictToEnd: boolean;
        ApplyPictToFront: boolean;
        ApplyPictToSides: boolean;
        AxisGroup: XlAxisGroup;
        BarShape: XlBarShape;
        readonly Border: Border;
        BubbleSizes: string;
        ChartType: XlChartType;
        ClearFormats(): any;
        Copy(): any;
        readonly Creator: XlCreator;
        DataLabels: DataLabels & ((Index: number) => DataLabel);
        Delete(): any;
        ErrorBar(Direction: XlErrorBarDirection, Include: XlErrorBarInclude, Type: XlErrorBarType, Amount?: any, MinusValues?: any): any;
        readonly ErrorBars: ErrorBars;
        Explosion: number;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        Formula: string;
        FormulaLocal: string;
        FormulaR1C1: string;
        FormulaR1C1Local: string;
        Has3DEffect: boolean;
        HasDataLabels: boolean;
        HasErrorBars: boolean;
        HasLeaderLines: boolean;
        readonly Interior: Interior;
        InvertColor: number;
        InvertColorIndex: number;
        InvertIfNegative: boolean;
        readonly LeaderLines: LeaderLines;
        MarkerBackgroundColor: number;
        MarkerBackgroundColorIndex: XlColorIndex;
        MarkerForegroundColor: number;
        MarkerForegroundColorIndex: XlColorIndex;
        MarkerSize: number;
        MarkerStyle: XlMarkerStyle;
        Name: string;
        readonly Parent: any;
        Paste(): any;
        PictureType: XlChartPictureType;
        PictureUnit: number;
        PictureUnit2: number;
        readonly PlotColorIndex: number;
        PlotOrder: number;
        Points: Points & ((Index: number) => Point);
        Select(): any;
        Shadow: boolean;
        Smooth: boolean;
        Trendlines: Trendlines & ((Index: number | string) => Trendline);
        Type: number;
        Values: Range | SafeArray<number>;
        XValues: Range | SafeArray<number>;
    }

    interface SeriesCollection {
        _Default(Index: any): Series;

        /** @param Rowcol [Rowcol=-4105] */
        Add(Source: Range, Rowcol?: XlRowCol, SeriesLabels?: boolean, CategoryLabels?: boolean, Replace?: boolean): Series;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Extend(Source: Range, Rowcol?: XlRowCol, CategoryLabels?: boolean): any;
        Item(Index: number | string): Series;
        NewSeries(): Series;
        readonly Parent: any;

        /** @param Rowcol [Rowcol=-4105] */
        Paste(Rowcol?: XlRowCol, SeriesLabels?: boolean, CategoryLabels?: boolean, Replace?: boolean, NewSeries?: boolean): any;
        (Index: number | string): Series;
    }

    class SeriesLines {
        private 'Excel.SeriesLines_typekey': SeriesLines;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    interface ServerViewableItems {
        _Default(Index: any): any;
        Add(Obj: any): any;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(Index: number): void;
        DeleteAll(): void;
        Item(Index: number): any;
        readonly Parent: any;
        (Index: number): any;
    }

    class ShadowFormat {
        private 'Excel.ShadowFormat_typekey': ShadowFormat;
        private constructor();
        readonly Application: any;
        Blur: number;
        readonly Creator: number;
        ForeColor: ColorFormat;
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
        private 'Excel.Shape_typekey': Shape;
        private constructor();
        readonly Adjustments: Adjustments;
        AlternativeText: string;
        readonly Application: Application;
        Apply(): void;
        AutoShapeType: Office.MsoAutoShapeType;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        BlackWhiteMode: Office.MsoBlackWhiteMode;
        readonly BottomRightCell: Range;
        readonly Callout: CalloutFormat;
        CanvasCropBottom(Increment: number): void;
        CanvasCropLeft(Increment: number): void;
        CanvasCropRight(Increment: number): void;
        CanvasCropTop(Increment: number): void;
        readonly CanvasItems: Office.CanvasShapes;
        readonly Chart: Chart;
        readonly Child: Office.MsoTriState;
        readonly ConnectionSiteCount: number;
        readonly Connector: Office.MsoTriState;
        readonly ConnectorFormat: ConnectorFormat;
        readonly ControlFormat: ControlFormat;
        Copy(): void;
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat): void;
        readonly Creator: XlCreator;
        Cut(): void;
        Delete(): void;
        readonly Diagram: Diagram;
        readonly DiagramNode: DiagramNode;
        readonly DrawingObject: any;
        Duplicate(): Shape;
        readonly Fill: FillFormat;
        Flip(FlipCmd: Office.MsoFlipCmd): void;
        readonly FormControlType: XlFormControl;
        readonly Glow: Office.GlowFormat;
        readonly GroupItems: GroupShapes;
        readonly HasChart: Office.MsoTriState;
        readonly HasDiagram: Office.MsoTriState;
        readonly HasDiagramNode: Office.MsoTriState;
        readonly HasSmartArt: Office.MsoTriState;
        Height: number;
        readonly HorizontalFlip: Office.MsoTriState;
        readonly Hyperlink: Hyperlink;
        readonly ID: number;
        IncrementLeft(Increment: number): void;
        IncrementRotation(Increment: number): void;
        IncrementTop(Increment: number): void;
        Left: number;
        readonly Line: LineFormat;
        readonly LinkFormat: LinkFormat;
        LockAspectRatio: Office.MsoTriState;
        Locked: boolean;
        Name: string;
        readonly Nodes: ShapeNodes;
        readonly OLEFormat: OLEFormat;
        OnAction: string;
        readonly Parent: any;
        readonly ParentGroup: Shape;
        PickUp(): void;
        readonly PictureFormat: PictureFormat;
        Placement: XlPlacement;
        readonly Reflection: Office.ReflectionFormat;
        RerouteConnections(): void;
        Rotation: number;
        ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;
        ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;
        readonly Script: Office.Script;
        Select(Replace?: boolean): void;
        SetShapesDefaultProperties(): void;
        readonly Shadow: ShadowFormat;
        ShapeStyle: Office.MsoShapeStyleIndex;
        readonly SmartArt: Office.SmartArt;
        readonly SoftEdge: Office.SoftEdgeFormat;
        readonly TextEffect: TextEffectFormat;
        readonly TextFrame: TextFrame;
        readonly TextFrame2: TextFrame2;
        readonly ThreeD: ThreeDFormat;
        Title: string;
        Top: number;
        readonly TopLeftCell: Range;
        readonly Type: Office.MsoShapeType;
        Ungroup(): ShapeRange;
        readonly VerticalFlip: Office.MsoTriState;
        readonly Vertices: SafeArray<number>;
        Visible: Office.MsoTriState;
        Width: number;
        ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        readonly ZOrderPosition: number;
    }

    class ShapeNode {
        private 'Excel.ShapeNode_typekey': ShapeNode;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly EditingType: Office.MsoEditingType;
        readonly Parent: any;
        readonly Points: SafeArray<number>;
        readonly SegmentType: Office.MsoSegmentType;
    }

    interface ShapeNodes {
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Delete(Index: number): void;

        /**
         * @param X2 [X2=0]
         * @param Y2 [Y2=0]
         * @param X3 [X3=0]
         * @param Y3 [Y3=0]
         */
        Insert(Index: number, SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        Item(Index: number | string): ShapeNode;
        readonly Parent: any;
        SetEditingType(Index: number, EditingType: Office.MsoEditingType): void;
        SetPosition(Index: number, X1: number, Y1: number): void;
        SetSegmentType(Index: number, SegmentType: Office.MsoSegmentType): void;
        (Index: number | string): ShapeNode;
    }

    interface ShapeRange {
        _Default(Index: any): Shape;
        readonly Adjustments: Adjustments;
        Align(AlignCmd: Office.MsoAlignCmd, RelativeTo: Office.MsoTriState): void;
        AlternativeText: string;
        readonly Application: Application;
        Apply(): void;
        AutoShapeType: Office.MsoAutoShapeType;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        BlackWhiteMode: Office.MsoBlackWhiteMode;
        readonly Callout: CalloutFormat;
        CanvasCropBottom(Increment: number): void;
        CanvasCropLeft(Increment: number): void;
        CanvasCropRight(Increment: number): void;
        CanvasCropTop(Increment: number): void;
        readonly CanvasItems: Office.CanvasShapes;
        readonly Chart: Chart;
        readonly Child: Office.MsoTriState;
        readonly ConnectionSiteCount: number;
        readonly Connector: Office.MsoTriState;
        readonly ConnectorFormat: ConnectorFormat;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Diagram: Diagram;
        readonly DiagramNode: DiagramNode;
        Distribute(DistributeCmd: Office.MsoDistributeCmd, RelativeTo: Office.MsoTriState): void;
        Duplicate(): ShapeRange;
        readonly Fill: FillFormat;
        Flip(FlipCmd: Office.MsoFlipCmd): void;
        readonly Glow: Office.GlowFormat;
        Group(): Shape;
        readonly GroupItems: GroupShapes;
        readonly HasChart: Office.MsoTriState;
        readonly HasDiagram: Office.MsoTriState;
        readonly HasDiagramNode: Office.MsoTriState;
        Height: number;
        readonly HorizontalFlip: Office.MsoTriState;
        readonly ID: number;
        IncrementLeft(Increment: number): void;
        IncrementRotation(Increment: number): void;
        IncrementTop(Increment: number): void;
        Item(Index: number | string): Shape;
        Left: number;
        readonly Line: LineFormat;
        LockAspectRatio: Office.MsoTriState;
        Name: string;
        readonly Nodes: ShapeNodes;
        readonly Parent: any;
        readonly ParentGroup: Shape;
        PickUp(): void;
        readonly PictureFormat: PictureFormat;
        readonly Reflection: Office.ReflectionFormat;
        Regroup(): Shape;
        RerouteConnections(): void;
        Rotation: number;
        ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;
        ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, Scale?: Office.MsoScaleFrom): void;
        Select(Replace?: boolean): void;
        SetShapesDefaultProperties(): void;
        readonly Shadow: ShadowFormat;
        ShapeStyle: Office.MsoShapeStyleIndex;
        readonly SoftEdge: Office.SoftEdgeFormat;
        readonly TextEffect: TextEffectFormat;
        readonly TextFrame: TextFrame;
        readonly TextFrame2: TextFrame2;
        readonly ThreeD: ThreeDFormat;
        Title: string;
        Top: number;
        readonly Type: Office.MsoShapeType;
        Ungroup(): ShapeRange;
        readonly VerticalFlip: Office.MsoTriState;
        readonly Vertices: SafeArray<number>;
        Visible: Office.MsoTriState;
        Width: number;
        ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        readonly ZOrderPosition: number;
        (Index: number | string): Shape;
    }

    interface Shapes {
        _Default(Index: any): Shape;
        AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddCanvas(Left: number, Top: number, Width: number, Height: number): Shape;
        AddChart(XlChartType?: XlChartType, Left?: number, Top?: number, Width?: number, Height?: number, NewLayout?: boolean): Shape;
        AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddCurve(SafeArrayOfPoints: SafeArray<number>): Shape;
        AddDiagram(Type: Office.MsoDiagramType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddFormControl(Type: XlFormControl, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddOLEObject(ClassType: string, Filename?: undefined, Link?: false, DisplayAsIcon?: boolean, IconFileName?: string, IconIndex?: number, IconLabel?: string, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        AddOLEObject(ClassType: undefined, Filename: string, Link?: boolean, DisplayAsIcon?: boolean, IconFileName?: string, IconIndex?: number, IconLabel?: string, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        AddPicture(Filename: string, LinkToFile: Office.MsoTriState, SaveWithDocument: Office.MsoTriState, Left: number, Top: number, Width: number, Height: number): Shape;
        AddPolyline(SafeArrayOfPoints: SafeArray<number>): Shape;
        AddShape(Type: Office.MsoAutoShapeType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddSmartArt(Layout: Office.SmartArtLayout, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextEffect(PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState, Left: number, Top: number): Shape;
        readonly Application: Application;
        BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): Shape;
        readonly Parent: any;
        Range(Index: number | string | SafeArray<number | string>): ShapeRange;
        SelectAll(): void;
        (Index: number | string): Shape;
    }

    interface Sheets<TSheet = Sheet> {
        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        _Default(Index: any): any;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        Add<T>(Before?: Sheet, After?: Sheet, Count?: number, Type?: T): AddSheetResult<T>;
        readonly Application: Application;
        Copy(Before?: Sheet): void;
        Copy(Before: undefined, After: Sheet): void;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;

        /** @param Type [Type=-4104] */
        FillAcrossSheets(Range: Range, Type?: XlFillWith): void;
        readonly HPageBreaks: HPageBreaks;
        Item(Index: string | number): TSheet;
        Item(Indexes: SafeArray<string | number>): Sheets<TSheet>;
        Move(Before?: Sheet | number): void;
        Move(Before: undefined, After: Sheet | number): void;
        readonly Parent: any;
        PrintOut<T extends boolean | undefined>(From?: number, To?: number, Copies?: number, Preview?: boolean, ActivePrinter?: string, PrintToFile?: T, Collate?: boolean, PrToFileName?: PrintToFileName<T>, IgnorePrintAreas?: boolean): void;
        PrintPreview(EnableChanges?: boolean): void;
        Select(Replace?: boolean): void;
        Visible: any;
        readonly VPageBreaks: VPageBreaks;
        (Index: string | number): TSheet;
        (Indexes: SafeArray<string | number>): Sheets<TSheet>;
    }

    interface SheetViews {
        _Default(Index: any): any;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): SheetView;
        readonly Parent: any;
        (Index: any): SheetView;
    }

    class Slicer {
        private 'Excel.Slicer_typekey': Slicer;
        private constructor();
        readonly ActiveItem: SlicerItem;
        readonly Application: Application;
        Caption: string;
        ColumnWidth: number;
        Copy(): void;
        readonly Creator: XlCreator;
        Cut(): void;
        Delete(): void;
        DisableMoveResizeUI: boolean;
        DisplayHeader: boolean;
        Height: number;
        Left: number;
        Locked: boolean;
        Name: string;
        NumberOfColumns: number;
        readonly Parent: any;
        RowHeight: number;
        readonly Shape: Shape;
        readonly SlicerCache: SlicerCache;
        readonly SlicerCacheLevel: SlicerCacheLevel;
        Style: any;
        Top: number;
        Width: number;
    }

    class SlicerCache {
        private 'Excel.SlicerCache_typekey': SlicerCache;
        private constructor();
        readonly Application: Application;
        ClearManualFilter(): void;
        readonly Creator: XlCreator;
        CrossFilterType: XlSlicerCrossFilterType;
        Delete(): void;
        readonly Index: number;
        Name: string;
        readonly OLAP: boolean;
        readonly Parent: any;
        readonly PivotTables: SlicerPivotTables;
        ShowAllItems: boolean;
        readonly SlicerCacheLevels: SlicerCacheLevels;
        readonly SlicerItems: SlicerItems;
        readonly Slicers: Slicers;
        SortItems: XlSlicerSort;
        SortUsingCustomLists: boolean;
        readonly SourceName: string;
        readonly SourceType: XlPivotTableSourceType;
        readonly VisibleSlicerItems: SlicerItems;
        VisibleSlicerItemsList: any;
        readonly WorkbookConnection: WorkbookConnection;
    }

    class SlicerCacheLevel {
        private 'Excel.SlicerCacheLevel_typekey': SlicerCacheLevel;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        CrossFilterType: XlSlicerCrossFilterType;
        readonly Name: string;
        readonly Ordinal: number;
        readonly Parent: any;
        readonly SlicerItems: SlicerItems;
        SortItems: XlSlicerSort;
        readonly VisibleSlicerItemsList: any;
    }

    interface SlicerCacheLevels {
        _Default(Level?: any): SlicerCacheLevel;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Level?: number | string): SlicerCacheLevel;
        readonly Parent: any;
        (Level?: number | string): SlicerCacheLevel;
    }

    interface SlicerCaches {
        _Default(Index: any): SlicerCache;
        Add(Source: WorkbookConnection | PivotTable | string, SourceField: any, Name?: any): SlicerCache;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): SlicerCache;
        readonly Parent: any;
        (Index: number | string): SlicerCache;
    }

    class SlicerItem {
        private 'Excel.SlicerItem_typekey': SlicerItem;
        private constructor();
        readonly Application: Application;
        readonly Caption: string;
        readonly Creator: XlCreator;
        readonly HasData: boolean;
        readonly Name: string;
        readonly Parent: SlicerCache;
        Selected: boolean;
        readonly SourceName: any;
        readonly SourceNameStandard: string;
        readonly Value: string;
    }

    interface SlicerItems {
        _Default(Index: any): SlicerItem;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): SlicerItem;
        readonly Parent: any;
        (Index: number | string): SlicerItem;
    }

    interface SlicerPivotTables {
        _Default(Index: any): PivotTable;
        AddPivotTable(PivotTable: PivotTable): void;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): PivotTable;
        readonly Parent: any;
        RemovePivotTable(PivotTable: PivotTable | number | string): void;
        (Index: number | string): PivotTable;
    }

    interface Slicers {
        _Default(Index: any): Slicer;
        Add(SlicerDestination: string | Worksheet, Level?: any, Name?: string, Caption?: string, Top?: number, Left?: number, Width?: number, Height?: number): Slicer;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): Slicer;
        readonly Parent: any;
        (Index: number | string): Slicer;
    }

    class SmartTag {
        private 'Excel.SmartTag_typekey': SmartTag;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly DownloadURL: string;
        readonly Name: string;
        readonly Parent: any;
        readonly Properties: CustomProperties;
        readonly Range: Range;
        readonly SmartTagActions: SmartTagActions;
        readonly XML: string;
    }

    class SmartTagAction {
        private 'Excel.SmartTagAction_typekey': SmartTagAction;
        private constructor();
        readonly _Default: string;
        readonly ActiveXControl: any;
        readonly Application: Application;
        CheckboxState: boolean;
        readonly Creator: XlCreator;
        Execute(): void;
        ExpandHelp: boolean;
        ListSelection: number;
        readonly Name: string;
        readonly Parent: any;
        readonly PresentInPane: boolean;
        RadioGroupSelection: number;
        TextboxText: string;
        readonly Type: XlSmartTagControlType;
    }

    interface SmartTagActions {
        _Default(Index: any): SmartTagAction;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): SmartTagAction;
        readonly Parent: any;
        (Index: any): SmartTagAction;
    }

    class SmartTagOptions {
        private 'Excel.SmartTagOptions_typekey': SmartTagOptions;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        DisplaySmartTags: XlSmartTagDisplayMode;
        EmbedSmartTags: boolean;
        readonly Parent: any;
    }

    class SmartTagRecognizer {
        private 'Excel.SmartTagRecognizer_typekey': SmartTagRecognizer;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Enabled: boolean;
        readonly FullName: string;
        readonly Parent: any;
        readonly progID: string;
    }

    interface SmartTagRecognizers {
        _Default(Index: any): SmartTagRecognizer;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): SmartTagRecognizer;
        readonly Parent: any;
        Recognize: boolean;
        (Index: any): SmartTagRecognizer;
    }

    interface SmartTags {
        _Default(Index: any): SmartTag;
        Add(SmartTagType: string): SmartTag;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        readonly Parent: any;
        (Index: any): SmartTag;
    }

    class Sort {
        private 'Excel.Sort_typekey': Sort;
        private constructor();
        readonly Application: Application;
        Apply(): void;
        readonly Creator: XlCreator;
        Header: XlYesNoGuess;
        MatchCase: boolean;
        Orientation: XlSortOrientation;
        readonly Parent: any;
        readonly Rng: Range;
        SetRange(Rng: Range): void;
        readonly SortFields: SortFields;
        SortMethod: XlSortMethod;
    }

    class SortField {
        private 'Excel.SortField_typekey': SortField;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        CustomOrder: any;
        DataOption: XlSortDataOption;
        Delete(): void;
        readonly Key: Range;
        ModifyKey(Key: Range): void;
        Order: XlSortOrder;
        readonly Parent: any;
        Priority: number;
        SetIcon(Icon: Icon): void;
        SortOn: XlSortOn;
        readonly SortOnValue: any;
    }

    interface SortFields {
        _Default(Index: any): SortField;
        Add(Key: Range, SortOn?: any, Order?: any, CustomOrder?: any, DataOption?: any): SortField;
        readonly Application: Application;
        Clear(): void;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): SortField;
        readonly Parent: any;
        (Index: any): SortField;
    }

    class SoundNote {
        private 'Excel.SoundNote_typekey': SoundNote;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): any;
        Import(Filename: string): any;
        readonly Parent: any;
        Play(): any;
        Record(): any;
    }

    class SparkAxes {
        private 'Excel.SparkAxes_typekey': SparkAxes;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Horizontal: SparkHorizontalAxis;
        readonly Parent: any;
        readonly Vertical: SparkVerticalAxis;
    }

    class SparkColor {
        private 'Excel.SparkColor_typekey': SparkColor;
        private constructor();
        readonly Application: Application;
        readonly Color: FormatColor;
        readonly Creator: XlCreator;
        readonly Parent: any;
        Visible: boolean;
    }

    class SparkHorizontalAxis {
        private 'Excel.SparkHorizontalAxis_typekey': SparkHorizontalAxis;
        private constructor();
        readonly Application: Application;
        readonly Axis: SparkColor;
        readonly Creator: XlCreator;
        readonly IsDateAxis: boolean;
        readonly Parent: any;
        RightToLeftPlotOrder: boolean;
    }

    class Sparkline {
        private 'Excel.Sparkline_typekey': Sparkline;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Location: Range;
        ModifyLocation(Range: Range): void;
        ModifySourceData(Formula: string): void;
        readonly Parent: any;
        SourceData: string;
    }

    class SparklineGroup {
        private 'Excel.SparklineGroup_typekey': SparklineGroup;
        private constructor();
        readonly Application: Application;
        readonly Axes: SparkAxes;
        readonly Count: number;
        readonly Creator: XlCreator;
        DateRange: string;
        Delete(): void;
        DisplayBlanksAs: XlDisplayBlanksAs;
        DisplayHidden: boolean;
        Item(Index: any): Sparkline;
        LineWeight: any;
        Location: Range;
        Modify(Location: Range, SourceData: string): void;
        ModifyDateRange(DateRange: string): void;
        ModifyLocation(Location: Range): void;
        ModifySourceData(SourceData: string): void;
        readonly Parent: any;
        PlotBy: XlSparklineRowCol;
        readonly Points: SparkPoints;
        readonly SeriesColor: FormatColor;
        SourceData: string;
        Type: XlSparkType;
    }

    interface SparklineGroups {
        _Default(Index: any): SparklineGroup;
        Add(Type: XlSparkType, SourceData: string): SparklineGroup;
        readonly Application: Application;
        Clear(): void;
        ClearGroups(): void;
        readonly Count: number;
        readonly Creator: XlCreator;
        Group(Location: Range): void;
        Item(Index: number): SparklineGroup;
        readonly Parent: any;
        Ungroup(): void;
        (Index: number): SparklineGroup;
    }

    class SparkPoints {
        private 'Excel.SparkPoints_typekey': SparkPoints;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Firstpoint: SparkColor;
        readonly Highpoint: SparkColor;
        readonly Lastpoint: SparkColor;
        readonly Lowpoint: SparkColor;
        readonly Markers: SparkColor;
        readonly Negative: SparkColor;
        readonly Parent: any;
    }

    class SparkVerticalAxis {
        private 'Excel.SparkVerticalAxis_typekey': SparkVerticalAxis;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        CustomMaxScaleValue: any;
        CustomMinScaleValue: any;
        MaxScaleType: XlSparkScale;
        MinScaleType: XlSparkScale;
        readonly Parent: any;
    }

    class Speech {
        private 'Excel.Speech_typekey': Speech;
        private constructor();
        Direction: XlSpeakDirection;
        Speak(Text: string, SpeakAsync?: boolean, SpeakXML?: boolean, Purge?: boolean): void;
        SpeakCellOnEnter: boolean;
    }

    class SpellingOptions {
        private 'Excel.SpellingOptions_typekey': SpellingOptions;
        private constructor();
        ArabicModes: XlArabicModes;
        ArabicStrictAlefHamza: boolean;
        ArabicStrictFinalYaa: boolean;
        ArabicStrictTaaMarboota: boolean;
        BrazilReform: XlPortugueseReform;
        DictLang: number;
        GermanPostReform: boolean;
        HebrewModes: XlHebrewModes;
        IgnoreCaps: boolean;
        IgnoreFileNames: boolean;
        IgnoreMixedDigits: boolean;
        KoreanCombineAux: boolean;
        KoreanProcessCompound: boolean;
        KoreanUseAutoChangeList: boolean;
        PortugalReform: XlPortugueseReform;
        RussianStrictE: boolean;
        SpanishModes: XlSpanishModes;
        SuggestMainOnly: boolean;
        UserDict: string;
    }

    class Style {
        private 'Excel.Style_typekey': Style;
        private constructor();
        readonly _Default: string;
        AddIndent: boolean;
        readonly Application: Application;
        readonly Borders: Borders;
        readonly BuiltIn: boolean;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Font: Font;
        FormulaHidden: boolean;
        HorizontalAlignment: XlHAlign;
        IncludeAlignment: boolean;
        IncludeBorder: boolean;
        IncludeFont: boolean;
        IncludeNumber: boolean;
        IncludePatterns: boolean;
        IncludeProtection: boolean;
        IndentLevel: number;
        readonly Interior: Interior;
        Locked: boolean;
        MergeCells: boolean;
        readonly Name: string;
        readonly NameLocal: string;
        NumberFormat: string;
        NumberFormatLocal: string;
        Orientation: XlOrientation;
        readonly Parent: any;
        ReadingOrder: number;
        ShrinkToFit: boolean;
        readonly Value: string;
        VerticalAlignment: XlVAlign;
        WrapText: boolean;
    }

    interface Styles {
        _Default(Index: any): Style;
        Add(Name: string, BasedOn?: any): Style;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): Style;
        Merge(Workbook: Workbook): any;
        readonly Parent: any;
        (Index: any): Style;
    }

    class Tab {
        private 'Excel.Tab_typekey': Tab;
        private constructor();
        readonly Application: Application;
        Color: XlRgbColor | number;
        ColorIndex: XlColorIndex;
        readonly Creator: XlCreator;
        readonly Parent: any;
        ThemeColor: XlThemeColor;
        TintAndShade: number;
    }

    class TableStyle {
        private 'Excel.TableStyle_typekey': TableStyle;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        readonly BuiltIn: boolean;
        readonly Creator: XlCreator;
        Delete(): void;
        Duplicate(NewTableStyleName?: string): TableStyle;
        readonly Name: string;
        readonly NameLocal: string;
        readonly Parent: any;
        ShowAsAvailablePivotTableStyle: boolean;
        ShowAsAvailableSlicerStyle: boolean;
        ShowAsAvailableTableStyle: boolean;
        readonly TableStyleElements: TableStyleElements;
    }

    class TableStyleElement {
        private 'Excel.TableStyleElement_typekey': TableStyleElement;
        private constructor();
        readonly Application: Application;
        readonly Borders: Borders;
        Clear(): void;
        readonly Creator: XlCreator;
        readonly Font: Font;
        readonly HasFormat: boolean;
        readonly Interior: Interior;
        readonly Parent: any;
        StripeSize: number;
    }

    interface TableStyleElements {
        _Default(Index: XlTableStyleElementType): TableStyleElement;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: XlTableStyleElementType): TableStyleElement;
        readonly Parent: any;
        (Index: XlTableStyleElementType): TableStyleElement;
    }

    interface TableStyles {
        _Default(Index: any): TableStyle;
        Add(TableStyleName: string): TableStyle;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): TableStyle;
        readonly Parent: any;
        (Index: number | string): TableStyle;
    }

    class TextEffectFormat {
        private 'Excel.TextEffectFormat_typekey': TextEffectFormat;
        private constructor();
        Alignment: Office.MsoTextEffectAlignment;
        readonly Application: any;
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
        private 'Excel.TextFrame_typekey': TextFrame;
        private constructor();
        readonly Application: Application;
        AutoMargins: boolean;
        AutoSize: boolean;
        Characters(Start?: number, Length?: number): Characters;
        readonly Creator: XlCreator;
        HorizontalAlignment: XlHAlign;
        HorizontalOverflow: XlOartHorizontalOverflow;
        MarginBottom: number;
        MarginLeft: number;
        MarginRight: number;
        MarginTop: number;
        Orientation: Office.MsoTextOrientation;
        readonly Parent: any;
        ReadingOrder: number;
        VerticalAlignment: XlVAlign;
        VerticalOverflow: XlOartVerticalOverflow;
    }

    class TextFrame2 {
        private 'Excel.TextFrame2_typekey': TextFrame2;
        private constructor();
        readonly Application: any;
        AutoSize: Office.MsoAutoSize;
        readonly Column: Office.TextColumn2;
        readonly Creator: number;
        DeleteText(): void;
        readonly HasText: Office.MsoTriState;
        HorizontalAnchor: Office.MsoHorizontalAnchor;
        MarginBottom: number;
        MarginLeft: number;
        MarginRight: number;
        MarginTop: number;
        NoTextRotation: Office.MsoTriState;
        Orientation: Office.MsoTextOrientation;
        readonly Parent: any;
        PathFormat: Office.MsoPathFormat;
        readonly Ruler: Office.Ruler2;
        readonly TextRange: Office.TextRange2;
        readonly ThreeD: ThreeDFormat;
        VerticalAnchor: Office.MsoVerticalAnchor;
        WarpFormat: Office.MsoWarpFormat;
        WordArtformat: Office.MsoPresetTextEffect;
        WordWrap: Office.MsoTriState;
    }

    class ThreeDFormat {
        private 'Excel.ThreeDFormat_typekey': ThreeDFormat;
        private constructor();
        readonly Application: any;
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
        private 'Excel.TickLabels_typekey': TickLabels;
        private constructor();
        Alignment: number;
        readonly Application: Application;
        AutoScaleFont: any;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Depth: number;
        readonly Font: Font;
        readonly Format: ChartFormat;
        MultiLevel: boolean;
        readonly Name: string;
        NumberFormat: string;
        NumberFormatLinked: boolean;
        NumberFormatLocal: string;
        Offset: number;
        Orientation: XlTickLabelOrientation;
        readonly Parent: any;
        ReadingOrder: number;
        Select(): any;
    }

    class Toolbar {
        private 'Excel.Toolbar_typekey': Toolbar;
        private constructor();
        readonly Application: Application;
        readonly BuiltIn: boolean;
        readonly Creator: XlCreator;
        Delete(): void;
        Height: number;
        Left: number;
        readonly Name: string;
        readonly Parent: any;
        Position: number;
        Protection: XlToolbarProtection;
        Reset(): void;
        readonly ToolbarButtons: ToolbarButtons;
        Top: number;
        Visible: boolean;
        Width: number;
    }

    class ToolbarButton {
        private 'Excel.ToolbarButton_typekey': ToolbarButton;
        private constructor();
        readonly Application: Application;
        readonly BuiltIn: boolean;
        BuiltInFace: boolean;
        Copy(Toolbar: Toolbar, Before: number): void;
        CopyFace(): void;
        readonly Creator: XlCreator;
        Delete(): void;
        Edit(): void;
        Enabled: boolean;
        HelpContextID: number;
        HelpFile: string;
        readonly ID: number;
        readonly IsGap: boolean;
        Move(Toolbar: Toolbar, Before: number): void;
        Name: string;
        OnAction: string;
        readonly Parent: any;
        PasteFace(): void;
        Pushed: boolean;
        Reset(): void;
        StatusBar: string;
        Width: number;
    }

    interface ToolbarButtons {
        _Default(Index: number): ToolbarButton;
        Add(Button?: any, Before?: any, OnAction?: any, Pushed?: any, Enabled?: any, StatusBar?: any, HelpFile?: any, HelpContextID?: any): ToolbarButton;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): ToolbarButton;
        readonly Parent: any;
        (Index: number): ToolbarButton;
    }

    interface Toolbars {
        _Default(Index: any): Toolbar;
        Add(Name?: any): Toolbar;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: any): Toolbar;
        readonly Parent: any;
        (Index: any): Toolbar;
    }

    class Top10 {
        private 'Excel.Top10_typekey': Top10;
        private constructor();
        readonly Application: Application;
        readonly AppliesTo: Range;
        readonly Borders: Borders;
        CalcFor: XlCalcFor;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Font: Font;
        readonly Interior: Interior;
        ModifyAppliesToRange(Range: Range): void;
        NumberFormat: string;
        readonly Parent: any;
        Percent: boolean;
        Priority: number;
        readonly PTCondition: boolean;
        Rank: number;
        ScopeType: XlPivotConditionScope;
        SetFirstPriority(): void;
        SetLastPriority(): void;
        StopIfTrue: boolean;
        TopBottom: XlTopBottom;
        readonly Type: number;
    }

    class TreeviewControl {
        private 'Excel.TreeviewControl_typekey': TreeviewControl;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Drilled: any;
        Hidden: SafeArray<SafeArray<string>>;
        readonly Parent: any;
    }

    class Trendline {
        private 'Excel.Trendline_typekey': Trendline;
        private constructor();
        readonly Application: Application;
        Backward: number;
        Backward2: number;
        readonly Border: Border;
        ClearFormats(): any;
        readonly Creator: XlCreator;
        readonly DataLabel: DataLabel;
        Delete(): any;
        DisplayEquation: boolean;
        DisplayRSquared: boolean;
        readonly Format: ChartFormat;
        Forward: number;
        Forward2: number;
        readonly Index: number;
        Intercept: number;
        InterceptIsAuto: boolean;
        Name: string;
        NameIsAuto: boolean;
        Order: number;
        readonly Parent: any;
        Period: number;
        Select(): any;
        Type: XlTrendlineType;
    }

    interface Trendlines {
        _Default(Index?: any): Trendline;

        /** @param Type [Type=-4132] */
        Add(Type?: XlTrendlineType, Order?: number, Period?: number, Forward?: number, Backward?: number, Intercept?: any, DisplayEquation?: boolean, DisplayRSquared?: boolean, Name?: string): Trendline;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): Trendline;
        readonly Parent: any;
        (Index: number): Trendline;
    }

    class UniqueValues {
        private 'Excel.UniqueValues_typekey': UniqueValues;
        private constructor();
        readonly Application: Application;
        readonly AppliesTo: Range;
        readonly Borders: Borders;
        readonly Creator: XlCreator;
        Delete(): void;
        DupeUnique: XlDupeUnique;
        readonly Font: Font;
        readonly Interior: Interior;
        ModifyAppliesToRange(Range: Range): void;
        NumberFormat: string;
        readonly Parent: any;
        Priority: number;
        readonly PTCondition: boolean;
        ScopeType: XlPivotConditionScope;
        SetFirstPriority(): void;
        SetLastPriority(): void;
        StopIfTrue: boolean;
        readonly Type: XlFormatConditionType.xlUniqueValues;
    }

    class UpBars {
        private 'Excel.UpBars_typekey': UpBars;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        readonly Creator: XlCreator;
        Delete(): any;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Interior: Interior;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    interface UsedObjects {
        _Default(Index: any): any;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): any;
        readonly Parent: any;
        (Index: number | string): any;
    }

    class UserAccess {
        private 'Excel.UserAccess_typekey': UserAccess;
        private constructor();
        AllowEdit: boolean;
        Delete(): void;
        readonly Name: string;
    }

    interface UserAccessList {
        _Default(Index: any): UserAccess;
        Add(Name: string, AllowEdit: boolean): UserAccess;
        readonly Count: number;
        DeleteAll(): void;
        Item(Index: number | string): UserAccess;
        (Index: number | string): UserAccess;
    }

    class Validation {
        private 'Excel.Validation_typekey': Validation;
        private constructor();
        Add(Type: XlDVType.xlValidateInputOnly): void;
        Add(Type: XlDVType.xlValidateWholeNumber | XlDVType.xlValidateDate | XlDVType.xlValidateDecimal | XlDVType.xlValidateTextLength | XlDVType.xlValidateTime, AlertStyle?: XlDVAlertStyle, Operator?: XlFormatConditionOperator.xlBetween | XlFormatConditionOperator.xlNotBetween, Formula1?: string, Formula2?: string): void;
        Add(Type?: XlDVType, AlertStyle?: XlDVAlertStyle, Operator?: XlFormatConditionOperator, Formula1?: string): void;
        readonly AlertStyle: number;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        ErrorMessage: string;
        ErrorTitle: string;
        readonly Formula1: string;
        readonly Formula2: string;
        IgnoreBlank: boolean;
        IMEMode: number;
        InCellDropdown: boolean;
        InputMessage: string;
        InputTitle: string;
        Modify(Type: XlDVType.xlValidateInputOnly): void;
        Modify(Type: XlDVType.xlValidateWholeNumber | XlDVType.xlValidateDate | XlDVType.xlValidateDecimal | XlDVType.xlValidateTextLength | XlDVType.xlValidateTime, AlertStyle?: XlDVAlertStyle, Operator?: XlFormatConditionOperator.xlBetween | XlFormatConditionOperator.xlNotBetween, Formula1?: string, Formula2?: string): void;
        Modify(Type?: XlDVType, AlertStyle?: XlDVAlertStyle, Operator?: XlFormatConditionOperator, Formula1?: string): void;
        readonly Operator: number;
        readonly Parent: any;
        ShowError: boolean;
        ShowInput: boolean;
        readonly Type: number;
        readonly Value: boolean;
    }

    class ValueChange {
        private 'Excel.ValueChange_typekey': ValueChange;
        private constructor();
        readonly AllocationMethod: XlAllocationMethod;
        readonly AllocationValue: XlAllocationValue;
        readonly AllocationWeightExpression: string;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Order: number;
        readonly Parent: any;
        readonly PivotCell: PivotCell;
        readonly Tuple: string;
        readonly Value: number;
        readonly VisibleInPivotTable: boolean;
    }

    class VPageBreak {
        private 'Excel.VPageBreak_typekey': VPageBreak;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        DragOff(Direction: XlDirection, RegionIndex: number): void;
        readonly Extent: XlPageBreakExtent;
        Location: Range;
        readonly Parent: Worksheet;
        Type: XlPageBreak;
    }

    interface VPageBreaks {
        _Default(Index: number): VPageBreak;
        Add(Before: Range): VPageBreak;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number): VPageBreak;
        readonly Parent: any;
        (Index: number): VPageBreak;
    }

    class Walls {
        private 'Excel.Walls_typekey': Walls;
        private constructor();
        readonly Application: Application;
        readonly Border: Border;
        ClearFormats(): any;
        readonly Creator: XlCreator;
        readonly Fill: ChartFillFormat;
        readonly Format: ChartFormat;
        readonly Interior: Interior;
        readonly Name: string;
        readonly Parent: any;
        Paste(): void;
        PictureType: XlChartPictureType;
        PictureUnit: number;
        Select(): any;
        Thickness: number;
    }

    class Watch {
        private 'Excel.Watch_typekey': Watch;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        readonly Parent: any;
        readonly Source: any;
    }

    interface Watches {
        _Default(Index: any): Watch;
        Add(Source: any): Watch;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Delete(): void;
        Item(Index: number | string): Watch;
        readonly Parent: any;
        (Index: number | string): Watch;
    }

    class WebOptions {
        private 'Excel.WebOptions_typekey': WebOptions;
        private constructor();
        AllowPNG: boolean;
        readonly Application: Application;
        readonly Creator: XlCreator;
        DownloadComponents: boolean;
        Encoding: Office.MsoEncoding;
        readonly FolderSuffix: string;
        LocationOfComponents: string;
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
        private 'Excel.Window_typekey': Window;
        private constructor();
        _DisplayRightToLeft: boolean;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): any;
        Activate(): any;
        ActivateNext(): any;
        ActivatePrevious(): any;
        readonly ActiveCell: Range;
        readonly ActiveChart: Chart;
        readonly ActivePane: Pane;
        readonly ActiveSheet: Sheet | null;
        readonly ActiveSheetView: SheetView | null;
        readonly Application: Application;
        AutoFilterDateGrouping: boolean;
        Caption: string;
        Close(SaveChanges?: boolean, Filename?: string, RouteWorkbook?: boolean): boolean;
        readonly Creator: XlCreator;
        DisplayFormulas: boolean;
        DisplayGridlines: boolean;
        DisplayHeadings: boolean;
        DisplayHorizontalScrollBar: boolean;
        DisplayOutline: boolean;
        DisplayRightToLeft: boolean;
        DisplayRuler: boolean;
        DisplayVerticalScrollBar: boolean;
        DisplayWhitespace: boolean;
        DisplayWorkbookTabs: boolean;
        DisplayZeros: boolean;
        EnableResize: boolean;
        FreezePanes: boolean;
        GridlineColor: number;
        GridlineColorIndex: XlColorIndex;
        Height: number;
        readonly Index: number;
        LargeScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): any;
        Left: number;
        NewWindow(): Window;
        OnWindow: string;
        readonly Panes: Panes;
        readonly Parent: any;
        PointsToScreenPixelsX(Points: number): number;
        PointsToScreenPixelsY(Points: number): number;
        PrintOut<T extends boolean | undefined>(From?: number, To?: number, Copies?: number, Preview?: boolean, ActivePrinter?: string, PrintToFile?: T, Collate?: boolean, PrToFileName?: PrintToFileName<T>): any;
        PrintPreview(EnableChanges?: boolean): any;
        RangeFromPoint(x: number, y: number): Shape | Range | null;
        readonly RangeSelection: Range;
        ScrollColumn: number;
        ScrollIntoView(Left: number, Top: number, Width: number, Height: number, Start?: boolean): void;
        ScrollRow: number;
        ScrollWorkbookTabs(Sheets: 0, Position: Constants.xlFirst | Constants.xlLast): any;
        ScrollWorkbookTabs(Sheets: number): any;
        readonly SelectedSheets: Sheets;
        readonly Selection: any;
        readonly SheetViews: SheetViews;
        SmallScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): any;
        Split: boolean;
        SplitColumn: number;
        SplitHorizontal: number;
        SplitRow: number;
        SplitVertical: number;
        TabRatio: number;
        Top: number;
        readonly Type: XlWindowType;
        readonly UsableHeight: number;
        readonly UsableWidth: number;
        View: XlWindowView;
        Visible: boolean;
        readonly VisibleRange: Range;
        Width: number;
        readonly WindowNumber: number;
        WindowState: XlWindowState;
        Zoom: number | true;
    }

    interface Windows {
        _Default(Index: any): Window;
        readonly Application: Application;
        Arrange(ArrangeStyle: XlArrangeStyle, ActiveWorkbook: true, SyncHorizontal?: boolean, SyncVertical?: boolean): any;

        /** @param ArrangeStyle [ArrangeStyle=1] */
        Arrange(ArrangeStyle?: XlArrangeStyle, ActiveWorkbook?: boolean, SyncHorizontal?: boolean, SyncVertical?: boolean): any;
        BreakSideBySide(): boolean;
        CompareSideBySideWith(WindowName: string): boolean;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): Window;
        readonly Parent: any;
        ResetPositionsSideBySide(): void;
        SyncScrollingSideBySide: boolean;
        (Index: number | string): Window;
    }

    class Workbook {
        private 'Excel.Workbook_typekey': Workbook;
        private constructor();
        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        _CodeName: string;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        _Protect(Password?: any, Structure?: any, Windows?: any): void;
        _ProtectSharing(Filename?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, SharingPassword?: any): void;
        readonly _ReadOnlyRecommended: boolean;

        /** @param AccessMode [AccessMode=1] */
        _SaveAs(Filename: string, FileFormat?: XlFileFormat, Password?: string, WriteResPassword?: string, ReadOnlyRecommended?: boolean, CreateBackup?: boolean, AccessMode?: XlSaveAsAccessMode, ConflictResolution?: XlSaveConflictResolution, AddToMru?: boolean, TextCodepage?: any, TextVisualLayout?: any): void;
        AcceptAllChanges(When?: any, Who?: any, Where?: any): void;
        AcceptLabelsInFormulas: boolean;
        AccuracyVersion: number;
        Activate(): void;
        readonly ActiveChart: Chart;
        readonly ActiveSheet: Sheet;
        readonly ActiveSlicer: Slicer;
        AddToFavorites(): void;
        readonly Application: Application;
        ApplyTheme(Filename: string): void;
        Author: string;
        AutoUpdateFrequency: number;
        AutoUpdateSaveChanges: boolean;
        BreakLink(Name: string, Type: XlLinkType): void;
        readonly BuiltinDocumentProperties: Office.DocumentProperties<Application>;
        readonly CalculationVersion: number;
        CanCheckIn(): boolean;
        ChangeFileAccess(Mode: XlFileAccess.xlReadWrite, WritePassword?: string, Notify?: boolean): void;
        ChangeFileAccess(Mode: XlFileAccess): void;
        ChangeHistoryDuration: number;

        /** @param Type [Type=1] */
        ChangeLink(Name: string, NewName: string, Type?: XlLinkType): void;
        readonly Charts: Sheets<Chart>;
        CheckCompatibility: boolean;
        CheckIn(SaveChanges: true, Comments?: string, MakePublic?: boolean): void;
        CheckIn(SaveChanges?: any): void;
        CheckInWithVersion(SaveChanges?: boolean, Comments?: any, MakePublic?: any, VersionType?: any): void;
        Close(SaveChanges: true, Filename?: string, RouteWorkbook?: boolean): void;
        Close(SaveChanges?: boolean, Filename?: undefined, RouteWorkbook?: boolean): void;
        readonly CodeName: string;
        Colors: SafeArray<number> & ((Index: number) => number);
        readonly CommandBars: Office.CommandBars;
        Comments: string;
        ConflictResolution: XlSaveConflictResolution;
        readonly Connections: Connections;
        readonly ConnectionsDisabled: boolean;
        readonly Container: any;
        readonly ContentTypeProperties: Office.MetaProperties;
        readonly CreateBackup: boolean;
        readonly Creator: XlCreator;
        readonly CustomDocumentProperties: Office.DocumentProperties<Application>;
        readonly CustomViews: CustomViews;
        readonly CustomXMLParts: Office.CustomXMLParts;
        Date1904: boolean;
        DefaultPivotTableStyle: any;
        DefaultSlicerStyle: any;
        DefaultTableStyle: any;
        DeleteNumberFormat(NumberFormat: string): void;
        readonly DialogSheets: Sheets<DialogSheet>;
        DisplayDrawingObjects: XlDisplayDrawingObjects;
        DisplayInkComments: boolean;
        readonly DocumentInspectors: Office.DocumentInspectors;
        readonly DocumentLibraryVersions: Office.DocumentLibraryVersions;
        DoNotPromptForConvert: boolean;
        Dummy16(): void;
        Dummy17(calcid: number): void;
        Dummy26(): void;
        Dummy27(): void;
        EnableAutoRecover: boolean;
        EnableConnections(): void;
        EncryptionProvider: string;
        EndReview(): void;
        EnvelopeVisible: boolean;
        readonly Excel4IntlMacroSheets: Sheets;
        readonly Excel4MacroSheets: Sheets;
        readonly Excel8CompatibilityMode: boolean;
        ExclusiveAccess(): boolean;
        ExportAsFixedFormat(Type: XlFixedFormatType, Filename?: string, Quality?: XlFixedFormatQuality, IncludeDocProperties?: boolean, IgnorePrintAreas?: boolean, From?: number, To?: number, OpenAfterPublish?: boolean, FixedFormatExtClassPtr?: any): void;
        readonly FileFormat: XlFileFormat;
        Final: boolean;
        FollowHyperlink(Address: string, SubAddress?: string, NewWindow?: boolean, AddHistory?: undefined, ExtraInfo?: string | Office.ByteArray, Method?: Office.MsoExtraInfoMethod, HeaderInfo?: string): void;
        ForceFullCalculation: boolean;
        ForwardMailer(): void;
        readonly FullName: string;
        readonly FullNameURLEncoded: string;
        GetWorkflowTasks(): Office.WorkflowTasks;
        GetWorkflowTemplates(): Office.WorkflowTemplates;
        HasMailer: boolean;
        readonly HasPassword: boolean;
        HasRoutingSlip: boolean;
        readonly HasVBProject: boolean;
        HighlightChangesOnScreen: boolean;
        HighlightChangesOptions(When?: XlHighlightChangesTime, Who?: 'Everyone' | 'Everyone but me' | string, Where?: string): void;
        readonly HTMLProject: Office.HTMLProject;
        readonly IconSets: IconSets;
        InactiveListBorderVisible: boolean;
        IsAddin: boolean;
        readonly IsInplace: boolean;
        KeepChangeHistory: boolean;
        Keywords: string;
        LinkInfo(Name: string, LinkInfo: XlLinkInfo, Type?: XlLinkInfoType, EditionRef?: string): any;
        LinkSources(Type?: XlLink): SafeArray<string>;
        ListChangesOnNewSheet: boolean;
        LockServerFile(): void;
        readonly Mailer: Mailer;
        MergeWorkbook(Filename: string): void;
        readonly Modules: Sheets;
        readonly MultiUserEditing: boolean;
        readonly Name: string;
        readonly Names: Names;
        NewWindow(): Window;
        OnSave: string;
        OnSheetActivate: string;
        OnSheetDeactivate: string;
        OpenLinks(Name: string, ReadOnly?: boolean, Type?: XlLink): void;
        readonly Parent: any;
        Password: string;
        readonly PasswordEncryptionAlgorithm: string;
        readonly PasswordEncryptionFileProperties: boolean;
        readonly PasswordEncryptionKeyLength: number;
        readonly PasswordEncryptionProvider: string;
        readonly Path: string;
        readonly Permission: Office.Permission;
        PersonalViewListSettings: boolean;
        PersonalViewPrintSettings: boolean;
        PivotCaches(): PivotCaches;
        PivotTableWizard(): void;
        PivotTableWizard<TSourceType>(SourceType: TSourceType, SourceData: PivotTableWizardSourceData<TSourceType>, TableDestination?: Range, TableName?: string, RowGrand?: boolean, ColumnGrand?: boolean, SaveData?: boolean, HasAutoFormat?: boolean, AutoPage?: PivotTableWizardAutoPage<TSourceType>, Reserved?: undefined, BackgroundQuery?: boolean, OptimizeCache?: boolean, PageFieldOrder?: XlOrder, PageFieldWrapCount?: number, ReadData?: boolean, Connection?: string): void;
        Post(): void;
        PrecisionAsDisplayed: boolean;
        PrintOut<T extends boolean | undefined>(From?: number, To?: number, Copies?: number, Preview?: boolean, ActivePrinter?: string, PrintToFile?: T, Collate?: boolean, PrToFileName?: PrintToFileName<T>, IgnorePrintAreas?: boolean): void;
        PrintPreview(EnableChanges?: boolean): void;
        Protect(Password?: string, Structure?: boolean, Windows?: boolean): void;
        ProtectSharing(Filename?: string, Password?: string, WriteResPassword?: string, ReadOnlyRecommended?: boolean, CreateBackup?: boolean, SharingPassword?: string, FileFormat?: any): void;
        readonly ProtectStructure: boolean;
        readonly ProtectWindows: boolean;
        readonly PublishObjects: PublishObjects;
        PurgeChangeHistoryNow(Days: number, SharingPassword?: string): void;
        readonly ReadOnly: boolean;
        ReadOnlyRecommended: boolean;
        RecheckSmartTags(): void;
        RefreshAll(): void;
        RejectAllChanges(When?: any, Who?: any, Where?: any): void;
        ReloadAs(Encoding: Office.MsoEncoding): void;
        RemoveDocumentInformation(RemoveDocInfoType: XlRemoveDocInfoType): void;
        RemovePersonalInformation: boolean;
        RemoveUser(Index: number): void;
        Reply(): void;
        ReplyAll(): void;
        ReplyWithChanges(ShowMessage?: boolean): void;
        readonly Research: Research;
        ResetColors(): void;
        readonly RevisionNumber: number;
        Route(): void;
        readonly Routed: boolean;
        readonly RoutingSlip: RoutingSlip;
        RunAutoMacros(Which: XlRunAutoMacro): void;
        Save(): void;

        /** @param AccessMode [AccessMode=1] */
        SaveAs(Filename: string, FileFormat?: XlFileFormat, Password?: string, WriteResPassword?: string, ReadOnlyRecommended?: boolean, CreateBackup?: boolean, AccessMode?: XlSaveAsAccessMode, ConflictResolution?: XlSaveConflictResolution, AddToMru?: boolean, TextCodepage?: any, TextVisualLayout?: any): void;
        SaveAsXMLData(Filename: string, Map: XmlMap): void;
        SaveCopyAs(Filename: string): void;
        Saved: boolean;
        SaveLinkValues: boolean;
        sblt(s: string): void;
        SendFaxOverInternet(Recipients?: string, Subject?: string, ShowMessage?: boolean): void;
        SendForReview(Recipients?: string, Subject?: string, ShowMessage?: boolean, IncludeAttachment?: boolean): void;
        SendMail(Recipients: string | SafeArray<string>, Subject?: string, ReturnReceipt?: boolean): void;

        /**
         * Macintosh only
         *
         * @param Priority [Priority=-4143]
         */
        SendMailer(FileFormat: any, Priority?: XlPriority): void;
        readonly ServerPolicy: Office.ServerPolicy;
        readonly ServerViewableItems: ServerViewableItems;
        SetLinkOnData(Name: string, Procedure?: string): void;
        SetPasswordEncryptionOptions(PasswordEncryptionProvider?: string, PasswordEncryptionAlgorithm?: string, PasswordEncryptionKeyLength?: number, PasswordEncryptionFileProperties?: boolean): void;
        readonly SharedWorkspace: Office.SharedWorkspace;
        readonly Sheets: Sheets;
        ShowConflictHistory: boolean;
        ShowPivotChartActiveFields: boolean;
        ShowPivotTableFieldList: boolean;
        readonly Signatures: Office.SignatureSet;
        readonly SlicerCaches: SlicerCaches;
        readonly SmartDocument: Office.SmartDocument;
        readonly SmartTagOptions: SmartTagOptions;
        readonly Styles: Styles;
        Subject: string;
        readonly Sync: Office.Sync;
        readonly TableStyles: TableStyles;
        TemplateRemoveExtData: boolean;
        readonly Theme: Office.OfficeTheme;
        Title: string;
        ToggleFormsDesign(): void;
        Unprotect(Password?: string): void;
        UnprotectSharing(SharingPassword?: string): void;
        UpdateFromFile(): void;
        UpdateLink(Name?: string, Type?: XlLinkType): void;
        UpdateLinks: XlUpdateLinks;
        UpdateRemoteReferences: boolean;
        UserControl: boolean;
        readonly UserStatus: SafeArray;
        readonly VBASigned: boolean;
        readonly VBProject: VBIDE.VBProject;
        readonly WebOptions: WebOptions;
        WebPagePreview(): void;
        readonly Windows: Windows;
        readonly Worksheets: Sheets<Worksheet>;
        WritePassword: string;
        readonly WriteReserved: boolean;
        readonly WriteReservedBy: string;
        XmlImport(Url: string, ImportMap: XmlMap, Overwrite?: boolean, Destination?: any): XlXmlImportResult;
        XmlImportXml(Data: string, ImportMap: XmlMap, Overwrite?: boolean, Destination?: any): XlXmlImportResult;
        readonly XmlMaps: XmlMaps;
        readonly XmlNamespaces: XmlNamespaces;
    }

    class WorkbookConnection {
        private 'Excel.WorkbookConnection_typekey': WorkbookConnection;
        private constructor();
        _Default: string;
        readonly Application: Application;
        readonly Creator: XlCreator;
        Delete(): void;
        Description: string;
        Name: string;
        readonly ODBCConnection: ODBCConnection;
        readonly OLEDBConnection: OLEDBConnection;
        readonly Parent: any;
        readonly Ranges: Ranges;
        Refresh(): void;
        readonly Type: XlConnectionType;
    }

    interface Workbooks {
        /** @param TextQualifier [TextQualifier=1] */
        __OpenText(Filename: string, Origin: any, StartRow: any, DataType: any, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any, Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, TextVisualLayout?: any): void;
        _Default(Index: any): Workbook;
        _Open(Filename: string, UpdateLinks?: any, ReadOnly?: any, Format?: any, Password?: any, WriteResPassword?: any, IgnoreReadOnlyRecommended?: any, Origin?: any, Delimiter?: any, Editable?: any, Notify?: any, Converter?: any, AddToMru?: any): Workbook;

        /** @param TextQualifier [TextQualifier=1] */
        _OpenText(Filename: string, Origin: any, StartRow: any, DataType: any, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: any, Tab?: any, Semicolon?: any, Comma?: any, Space?: any, Other?: any, OtherChar?: any, FieldInfo?: any, TextVisualLayout?: any, DecimalSeparator?: any, ThousandsSeparator?: any): void;
        _OpenXML(Filename: string, Stylesheets?: any): Workbook;
        Add(Template?: string | XlWBATemplate): Workbook;
        readonly Application: Application;
        CanCheckOut(Filename: string): boolean;
        CheckOut(Filename: string): void;
        Close(): void;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): Workbook;
        Open(Filename: string, UpdateLinks?: 0 | 3, ReadOnly?: boolean, Format?: 1 | 2 | 3 | 4 | 5, Password?: string, WriteResPassword?: string, IgnoreReadOnlyRecommended?: boolean, Origin?: XlPlatform, Delimiter?: undefined, Editable?: boolean, Notify?: boolean, Converter?: number, AddToMru?: boolean, Local?: boolean, CorruptLoad?: XlCorruptLoad): Workbook;
        Open(Filename: string, UpdateLinks?: 0 | 3, ReadOnly?: boolean, Format?: 6, Password?: string, WriteResPassword?: string, IgnoreReadOnlyRecommended?: boolean, Origin?: XlPlatform, Delimiter?: string, Editable?: boolean, Notify?: boolean, Converter?: number, AddToMru?: boolean, Local?: boolean, CorruptLoad?: XlCorruptLoad): Workbook;
        OpenDatabase(Filename: string, CommandText?: string, CommandType?: XlCmdType, BackgroundQuery?: boolean, ImportDataAs?: XlImportDataAs): Workbook;

        /** @param TextQualifier [TextQualifier=1] */
        OpenText(Filename: string, Origin: XlPlatform, StartRow: number, DataType: XlTextParsingType.xlDelimited, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: boolean, Tab?: boolean, Semicolon?: boolean, Comma?: boolean, Space?: boolean, Other?: true, OtherChar?: string, FieldInfo?: SafeArray, TextVisualLayout?: any, DecimalSeparator?: string, ThousandsSeparator?: string, TrailingMinusNumbers?: boolean, Local?: boolean): void;

        /** @param TextQualifier [TextQualifier=1] */
        OpenText(Filename: string, Origin: XlPlatform, StartRow: number, DataType: XlTextParsingType.xlDelimited, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: boolean, Tab?: boolean, Semicolon?: boolean, Comma?: boolean, Space?: boolean, Other?: boolean, OtherChar?: undefined, FieldInfo?: SafeArray, TextVisualLayout?: any, DecimalSeparator?: string, ThousandsSeparator?: string, TrailingMinusNumbers?: boolean, Local?: boolean): void;

        /** @param TextQualifier [TextQualifier=1] */
        OpenText(Filename: string, Origin: XlPlatform, StartRow: number, DataType: XlTextParsingType, TextQualifier?: XlTextQualifier, ConsecutiveDelimiter?: undefined, Tab?: undefined, Semicolon?: undefined, Comma?: undefined, Space?: undefined, Other?: undefined, OtherChar?: undefined, FieldInfo?: SafeArray, TextVisualLayout?: any, DecimalSeparator?: string, ThousandsSeparator?: string, TrailingMinusNumbers?: boolean, Local?: boolean): void;
        OpenXML(Filename: string, Stylesheets?: string | SafeArray<string>, LoadOption?: XlXmlLoadOption): Workbook;
        readonly Parent: any;
        (Index: number | string): Workbook;
    }

    class Worksheet {
        private 'Excel.Worksheet_typekey': Worksheet;
        private constructor();
        __PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any): void;
        _CheckSpelling(CustomDictionary?: any, IgnoreUppercase?: any, AlwaysSuggest?: any, SpellLang?: any, IgnoreFinalYaa?: any, SpellScript?: any): void;
        _CodeName: string;
        _DisplayRightToLeft: number;
        _Evaluate(Name: any): any;
        _PasteSpecial(Format?: any, Link?: any, DisplayAsIcon?: any, IconFileName?: any, IconIndex?: any, IconLabel?: any): void;
        _PrintOut(From?: any, To?: any, Copies?: any, Preview?: any, ActivePrinter?: any, PrintToFile?: any, Collate?: any, PrToFileName?: any): void;
        _Protect(Password?: any, DrawingObjects?: any, Contents?: any, Scenarios?: any, UserInterfaceOnly?: any): void;
        _SaveAs(Filename: string, FileFormat?: any, Password?: any, WriteResPassword?: any, ReadOnlyRecommended?: any, CreateBackup?: any, AddToMru?: any, TextCodepage?: any, TextVisualLayout?: any): void;
        Activate(): void;
        readonly Application: Application;
        Arcs(Index?: any): any;
        readonly AutoFilter: AutoFilter;
        AutoFilterMode: boolean;
        Buttons(Index?: any): any;
        Calculate(): void;
        readonly Cells: Range;
        ChartObjects(Index?: SafeArray<string | number>): ChartObjects;
        ChartObjects(Index: string | number): ChartObject;
        CheckBoxes(Index?: any): any;
        CheckSpelling(CustomDictionary?: string, IgnoreUppercase?: boolean, AlwaysSuggest?: boolean, SpellLang?: Office.MsoLanguageID): void;
        CircleInvalid(): void;
        readonly CircularReference: Range;
        ClearArrows(): void;
        ClearCircles(): void;
        readonly CodeName: string;
        readonly Columns: Range;
        readonly Comments: Comments;
        readonly ConsolidationFunction: XlConsolidationFunction;
        readonly ConsolidationOptions: SafeArray<boolean>;
        readonly ConsolidationSources: SafeArray<string> | undefined;
        Copy(Before?: Sheet): void;
        Copy(Before: undefined, After: Sheet): void;
        readonly Creator: XlCreator;
        readonly CustomProperties: CustomProperties;
        Delete(): void;
        DisplayAutomaticPageBreaks: boolean;
        DisplayPageBreaks: boolean;
        DisplayRightToLeft: boolean;
        DrawingObjects(Index?: any): any;
        Drawings(Index?: any): any;
        DropDowns(Index?: any): any;
        EnableAutoFilter: boolean;
        EnableCalculation: boolean;
        EnableFormatConditionsCalculation: boolean;
        EnableOutlining: boolean;
        EnablePivotTable: boolean;
        EnableSelection: XlEnableSelection;
        Evaluate(Name: string): any;
        ExportAsFixedFormat(Type: XlFixedFormatType, Filename?: string, Quality?: XlFixedFormatQuality, IncludeDocProperties?: boolean, IgnorePrintAreas?: boolean, From?: number, To?: number, OpenAfterPublish?: boolean, FixedFormatExtClassPtr?: any): void;
        readonly FilterMode: boolean;
        GroupBoxes(Index?: any): any;
        GroupObjects(Index?: any): any;
        readonly HPageBreaks: HPageBreaks;
        readonly Hyperlinks: Hyperlinks;
        readonly Index: number;
        Labels(Index?: any): any;
        Lines(Index?: any): any;
        ListBoxes(Index?: any): any;
        readonly ListObjects: ListObjects;
        readonly MailEnvelope: Office.MsoEnvelope;
        Move(Before?: Sheet, After?: Sheet): void;
        Name: string;
        readonly Names: Names;
        readonly Next: Worksheet;
        OLEObjects(Index: number | string): OLEObject;
        OLEObjects(): OLEObjects;
        OnCalculate: string;
        OnData: string;
        OnDoubleClick: string;
        OnEntry: string;
        OnSheetActivate: string;
        OnSheetDeactivate: string;
        OptionButtons(Index?: any): any;
        readonly Outline: Outline;
        Ovals(Index?: any): any;
        readonly PageSetup: PageSetup;
        readonly Parent: any;
        Paste(Destination?: Range, Link?: boolean): void;
        PasteSpecial(Format: string | undefined, Link: boolean | undefined, DisplayAsIcon: true, IconFileName?: string, IconIndex?: number, IconLabel?: string, NoHTMLFormatting?: boolean): void;
        PasteSpecial(Format?: string, Link?: boolean, DisplayAsIcon?: boolean, IconFileName?: undefined, IconIndex?: undefined, IconLabel?: undefined, NoHTMLFormatting?: boolean): void;
        Pictures(Index?: any): any;
        PivotTables(Index?: any): any;
        PivotTableWizard(): void;
        PivotTableWizard<TSourceType>(SourceType: TSourceType, SourceData: PivotTableWizardSourceData<TSourceType>, TableDestination?: Range, TableName?: string, RowGrand?: boolean, ColumnGrand?: boolean, SaveData?: boolean, HasAutoFormat?: boolean, AutoPage?: PivotTableWizardAutoPage<TSourceType>, Reserved?: undefined, BackgroundQuery?: boolean, OptimizeCache?: boolean, PageFieldOrder?: XlOrder, PageFieldWrapCount?: number, ReadData?: boolean, Connection?: string): void;
        readonly Previous: Worksheet;
        readonly PrintedCommentPages: number;
        PrintOut<T extends boolean | undefined>(From?: number, To?: number, Copies?: number, Preview?: boolean, ActivePrinter?: string, PrintToFile?: T, Collate?: boolean, PrToFileName?: PrintToFileName<T>, IgnorePrintAreas?: boolean): void;
        PrintPreview(EnableChanges?: boolean): void;
        Protect(Password?: string, DrawingObjects?: boolean, Contents?: boolean, Scenarios?: boolean, UserInterfaceOnly?: boolean, AllowFormattingCells?: boolean, AllowFormattingColumns?: boolean, AllowFormattingRows?: boolean, AllowInsertingColumns?: boolean, AllowInsertingRows?: boolean, AllowInsertingHyperlinks?: boolean, AllowDeletingColumns?: boolean, AllowDeletingRows?: boolean, AllowSorting?: boolean, AllowFiltering?: boolean, AllowUsingPivotTables?: boolean): void;
        readonly ProtectContents: boolean;
        readonly ProtectDrawingObjects: boolean;
        readonly Protection: Protection;
        readonly ProtectionMode: boolean;
        readonly ProtectScenarios: boolean;
        readonly QueryTables: QueryTables;
        Range(Cell1: string | Range, Cell2?: string | Range): Range;
        Rectangles(Index?: any): any;
        ResetAllPageBreaks(): void;
        readonly Rows: Range;
        SaveAs(Filename: string, FileFormat?: XlFileFormat, Password?: string, WriteResPassword?: string, ReadOnlyRecommended?: boolean, CreateBackup?: boolean, AddToMru?: boolean, TextCodepage?: any, TextVisualLayout?: any, Local?: boolean): void;
        Scenarios(Index: number | string): Scenario;
        Scenarios(Index?: SafeArray<number | string>): Scenarios;
        readonly Scripts: Office.Scripts;
        ScrollArea: string;
        ScrollBars(Index?: any): any;
        Select(Replace?: boolean): void;
        SetBackgroundPicture(Filename: string): void;
        readonly Shapes: Shapes;
        ShowAllData(): void;
        ShowDataForm(): void;
        readonly SmartTags: SmartTags;
        readonly Sort: Sort;
        Spinners(Index?: any): any;
        readonly StandardHeight: number;
        StandardWidth: number;
        readonly Tab: Tab;
        TextBoxes(Index?: any): any;
        TransitionExpEval: boolean;
        TransitionFormEntry: boolean;
        readonly Type: XlSheetType;
        Unprotect(Password?: string): void;
        readonly UsedRange: Range;
        Visible: XlSheetVisibility;
        readonly VPageBreaks: VPageBreaks;
        XmlDataQuery(XPath: string, SelectionNamespaces?: string, Map?: XmlMap): Range | null;
        XmlMapQuery(XPath: string, SelectionNamespaces?: string, Map?: XmlMap): Range;
    }

    class WorksheetFunction {
        private 'Excel.WorksheetFunction_typekey': WorksheetFunction;
        private constructor();
        _WSFunction(Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        AccrInt(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): number;
        AccrIntM(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        Acos(Arg1: number): number;
        Acosh(Arg1: number): number;
        Aggregate(Arg1: number, Arg2: number, Arg3: Range, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        AmorDegrc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): number;
        AmorLinc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): number;
        And(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): boolean;
        readonly Application: Application;
        Asc(Arg1: string): string;
        Asin(Arg1: number): number;
        Asinh(Arg1: number): number;
        Atan2(Arg1: number, Arg2: number): number;
        Atanh(Arg1: number): number;
        AveDev(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Average(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        AverageIf(Arg1: Range, Arg2: any, Arg3?: any): number;
        AverageIfs(Arg1: Range, Arg2: Range, Arg3: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any): number;
        BahtText(Arg1: number): string;
        BesselI(Arg1: any, Arg2: any): number;
        BesselJ(Arg1: any, Arg2: any): number;
        BesselK(Arg1: any, Arg2: any): number;
        BesselY(Arg1: any, Arg2: any): number;
        Beta_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean, Arg5?: any, Arg6?: any): number;
        Beta_Inv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        BetaDist(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        BetaInv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        Bin2Dec(Arg1: any): string;
        Bin2Hex(Arg1: any, Arg2?: any): string;
        Bin2Oct(Arg1: any, Arg2?: any): string;
        Binom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        Binom_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        BinomDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        Ceiling(Arg1: number, Arg2: number): number;
        Ceiling_Precise(Arg1: number, Arg2?: any): number;
        ChiDist(Arg1: number, Arg2: number): number;
        ChiInv(Arg1: number, Arg2: number): number;
        ChiSq_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
        ChiSq_Dist_RT(Arg1: number, Arg2: number): number;
        ChiSq_Inv(Arg1: number, Arg2: number): number;
        ChiSq_Inv_RT(Arg1: number, Arg2: number): number;
        ChiSq_Test(Arg1: any, Arg2: any): number;
        ChiTest(Arg1: any, Arg2: any): number;
        Choose(Arg1: any, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        Clean(Arg1: string): string;
        Combin(Arg1: number, Arg2: number): number;
        Complex(Arg1: any, Arg2: any, Arg3?: any): string;
        Confidence(Arg1: number, Arg2: number, Arg3: number): number;
        Confidence_Norm(Arg1: number, Arg2: number, Arg3: number): number;
        Confidence_T(Arg1: number, Arg2: number, Arg3: number): number;
        Convert(Arg1: any, Arg2: any, Arg3: any): number;
        Correl(Arg1: any, Arg2: any): number;
        Cosh(Arg1: number): number;
        Count(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        CountA(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        CountBlank(Arg1: Range): number;
        CountIf(Arg1: Range, Arg2: string | number): number;
        CountIfs(Arg1: Range, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        CoupDayBs(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        CoupDays(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        CoupDaysNc(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        CoupNcd(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        CoupNum(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        CoupPcd(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): number;
        Covar(Arg1: any, Arg2: any): number;
        Covariance_P(Arg1: any, Arg2: any): number;
        Covariance_S(Arg1: any, Arg2: any): number;
        readonly Creator: XlCreator;
        CritBinom(Arg1: number, Arg2: number, Arg3: number): number;
        CumIPmt(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any): number;
        CumPrinc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any): number;
        DAverage(Arg1: Range, Arg2: any, Arg3: any): number;
        Days360(Arg1: any, Arg2: any, Arg3?: any): number;
        Db(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any): number;
        Dbcs(Arg1: string): string;
        DCount(Arg1: Range, Arg2: any, Arg3: any): number;
        DCountA(Arg1: Range, Arg2: any, Arg3: any): number;
        Ddb(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any): number;
        Dec2Bin(Arg1: any, Arg2?: any): string;
        Dec2Hex(Arg1: any, Arg2?: any): string;
        Dec2Oct(Arg1: any, Arg2?: any): string;
        Degrees(Arg1: number): number;
        Delta(Arg1: any, Arg2?: any): number;
        DevSq(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        DGet(Arg1: Range, Arg2: any, Arg3: any): any;
        Disc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        DMax(Arg1: Range, Arg2: any, Arg3: any): number;
        DMin(Arg1: Range, Arg2: any, Arg3: any): number;
        Dollar(Arg1: number, Arg2?: any): string;
        DollarDe(Arg1: any, Arg2: any): number;
        DollarFr(Arg1: any, Arg2: any): number;
        DProduct(Arg1: Range, Arg2: any, Arg3: any): number;
        DStDev(Arg1: Range, Arg2: any, Arg3: any): number;
        DStDevP(Arg1: Range, Arg2: any, Arg3: any): number;
        DSum(Arg1: Range, Arg2: any, Arg3: any): number;
        Dummy19(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        Dummy21(Arg1: number, Arg2: number): number;
        Duration(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
        DVar(Arg1: Range, Arg2: any, Arg3: any): number;
        DVarP(Arg1: Range, Arg2: any, Arg3: any): number;
        EDate(Arg1: any, Arg2: any): number;
        Effect(Arg1: any, Arg2: any): number;
        EoMonth(Arg1: any, Arg2: any): number;
        Erf(Arg1: any, Arg2?: any): number;
        Erf_Precise(Arg1: any): number;
        ErfC(Arg1: any): number;
        ErfC_Precise(Arg1: any): number;
        Even(Arg1: number): number;
        Expon_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
        ExponDist(Arg1: number, Arg2: number, Arg3: boolean): number;
        F_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        F_Dist_RT(Arg1: number, Arg2: number, Arg3: number): number;
        F_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        F_Inv_RT(Arg1: number, Arg2: number, Arg3: number): number;
        F_Test(Arg1: any, Arg2: any): number;
        Fact(Arg1: number): number;
        FactDouble(Arg1: any): number;
        FDist(Arg1: number, Arg2: number, Arg3: number): number;
        Find(Arg1: string, Arg2: string, Arg3?: any): number;
        FindB(Arg1: string, Arg2: string, Arg3?: any): number;
        FInv(Arg1: number, Arg2: number, Arg3: number): number;
        Fisher(Arg1: number): number;
        FisherInv(Arg1: number): number;
        Fixed(Arg1: number, Arg2?: any, Arg3?: any): string;
        Floor(Arg1: number, Arg2: number): number;
        Floor_Precise(Arg1: number, Arg2?: any): number;
        Forecast(Arg1: number, Arg2: any, Arg3: any): number;
        Frequency(Arg1: any, Arg2: any): any;
        FTest(Arg1: any, Arg2: any): number;
        Fv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        FVSchedule(Arg1: any, Arg2: any): number;
        Gamma_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        Gamma_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        GammaDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        GammaInv(Arg1: number, Arg2: number, Arg3: number): number;
        GammaLn(Arg1: number): number;
        GammaLn_Precise(Arg1: number): number;
        Gcd(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        GeoMean(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        GeStep(Arg1: any, Arg2?: any): number;
        Growth(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        HarMean(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Hex2Bin(Arg1: any, Arg2?: any): string;
        Hex2Dec(Arg1: any): string;
        Hex2Oct(Arg1: any, Arg2?: any): string;
        HLookup(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): any;
        HypGeom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5: boolean): number;
        HypGeomDist(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
        IfError(Arg1: any, Arg2: any): any;
        ImAbs(Arg1: any): string;
        Imaginary(Arg1: any): number;
        ImArgument(Arg1: any): string;
        ImConjugate(Arg1: any): string;
        ImCos(Arg1: any): string;
        ImDiv(Arg1: any, Arg2: any): string;
        ImExp(Arg1: any): string;
        ImLn(Arg1: any): string;
        ImLog10(Arg1: any): string;
        ImLog2(Arg1: any): string;
        ImPower(Arg1: any, Arg2: any): string;
        ImProduct(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): string;
        ImReal(Arg1: any): number;
        ImSin(Arg1: any): string;
        ImSqrt(Arg1: any): string;
        ImSub(Arg1: any, Arg2: any): string;
        ImSum(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): string;
        Index(Arg1: any, Arg2: number, Arg3?: any, Arg4?: any): any;
        Intercept(Arg1: any, Arg2: any): number;
        IntRate(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        Ipmt(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any, Arg6?: any): number;
        Irr(Arg1: any, Arg2?: any): number;
        IsErr(Arg1: any): boolean;
        IsError(Arg1: any): boolean;
        IsEven(Arg1: any): boolean;
        IsLogical(Arg1: any): boolean;
        IsNA(Arg1: any): boolean;
        IsNonText(Arg1: any): boolean;
        IsNumber(Arg1: any): boolean;
        ISO_Ceiling(Arg1: number, Arg2?: any): number;
        IsOdd(Arg1: any): boolean;
        Ispmt(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
        IsText(Arg1: any): boolean;
        IsThaiDigit(Arg1: string): boolean;
        Kurt(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Large(Arg1: any, Arg2: number): number;
        Lcm(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        LinEst(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        Ln(Arg1: number): number;
        Log(Arg1: number, Arg2?: any): number;
        Log10(Arg1: number): number;
        LogEst(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        LogInv(Arg1: number, Arg2: number, Arg3: number): number;
        LogNorm_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        LogNorm_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        LogNormDist(Arg1: number, Arg2: number, Arg3: number): number;
        Lookup(Arg1: any, Arg2: any, Arg3?: any): any;
        Match(Arg1: any, Arg2: any, Arg3?: any): number;
        Max(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        MDeterm(Arg1: any): number;
        MDuration(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
        Median(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Min(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        MInverse(Arg1: any): any;
        MIrr(Arg1: any, Arg2: number, Arg3: number): number;
        MMult(Arg1: any, Arg2: any): any;
        Mode(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Mode_Mult(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        Mode_Sngl(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        MRound(Arg1: any, Arg2: any): number;
        MultiNomial(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        NegBinom_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        NegBinomDist(Arg1: number, Arg2: number, Arg3: number): number;
        NetworkDays(Arg1: any, Arg2: any, Arg3?: any): number;
        NetworkDays_Intl(Arg1: any, Arg2: any, Arg3?: any, Arg4?: any): number;
        Nominal(Arg1: any, Arg2: any): number;
        Norm_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        Norm_Inv(Arg1: number, Arg2: number, Arg3: number): number;
        Norm_S_Dist(Arg1: number, Arg2: boolean): number;
        Norm_S_Inv(Arg1: number): number;
        NormDist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        NormInv(Arg1: number, Arg2: number, Arg3: number): number;
        NormSDist(Arg1: number): number;
        NormSInv(Arg1: number): number;
        NPer(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        Npv(Arg1: number, Arg2: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Oct2Bin(Arg1: any, Arg2?: any): string;
        Oct2Dec(Arg1: any): string;
        Oct2Hex(Arg1: any, Arg2?: any): string;
        Odd(Arg1: number): number;
        OddFPrice(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7: any, Arg8: any, Arg9?: any): number;
        OddFYield(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7: any, Arg8: any, Arg9?: any): number;
        OddLPrice(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7: any, Arg8?: any): number;
        OddLYield(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7: any, Arg8?: any): number;
        Or(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): boolean;
        readonly Parent: any;
        Pearson(Arg1: any, Arg2: any): number;
        Percentile(Arg1: any, Arg2: number): number;
        Percentile_Exc(Arg1: any, Arg2: number): number;
        Percentile_Inc(Arg1: any, Arg2: number): number;
        PercentRank(Arg1: any, Arg2: number, Arg3?: any): number;
        PercentRank_Exc(Arg1: any, Arg2: number, Arg3?: any): number;
        PercentRank_Inc(Arg1: any, Arg2: number, Arg3?: any): number;
        Permut(Arg1: number, Arg2: number): number;
        Phonetic(Arg1: Range): string;
        Pi(): number;
        Pmt(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        Poisson(Arg1: number, Arg2: number, Arg3: boolean): number;
        Poisson_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
        Power(Arg1: number, Arg2: number): number;
        Ppmt(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5?: any, Arg6?: any): number;
        Price(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6: any, Arg7?: any): number;
        PriceDisc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        PriceMat(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
        Prob(Arg1: any, Arg2: any, Arg3: number, Arg4?: any): number;
        Product(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Proper(Arg1: string): string;
        Pv(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any): number;
        Quartile(Arg1: any, Arg2: number): number;
        Quartile_Exc(Arg1: any, Arg2: number): number;
        Quartile_Inc(Arg1: any, Arg2: number): number;
        Quotient(Arg1: any, Arg2: any): number;
        Radians(Arg1: number): number;
        RandBetween(Arg1: any, Arg2: any): number;
        Rank(Arg1: number, Arg2: Range, Arg3?: any): number;
        Rank_Avg(Arg1: number, Arg2: Range, Arg3?: any): number;
        Rank_Eq(Arg1: number, Arg2: Range, Arg3?: any): number;
        Rate(Arg1: number, Arg2: number, Arg3: number, Arg4?: any, Arg5?: any, Arg6?: any): number;
        Received(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        Replace(Arg1: string, Arg2: number, Arg3: number, Arg4: string): string;
        ReplaceB(Arg1: string, Arg2: number, Arg3: number, Arg4: string): string;
        Rept(Arg1: string, Arg2: number): string;
        Roman(Arg1: number, Arg2?: any): string;
        Round(Arg1: number, Arg2: number): number;
        RoundBahtDown(Arg1: number): number;
        RoundBahtUp(Arg1: number): number;
        RoundDown(Arg1: number, Arg2: number): number;
        RoundUp(Arg1: number, Arg2: number): number;
        RSq(Arg1: any, Arg2: any): number;
        RTD(progID: any, server: any, topic1: any, topic2?: any, topic3?: any, topic4?: any, topic5?: any, topic6?: any, topic7?: any, topic8?: any, topic9?: any, topic10?: any, topic11?: any, topic12?: any, topic13?: any, topic14?: any, topic15?: any, topic16?: any, topic17?: any, topic18?: any, topic19?: any, topic20?: any, topic21?: any, topic22?: any, topic23?: any, topic24?: any, topic25?: any, topic26?: any, topic27?: any, topic28?: any): any;
        Search(Arg1: string, Arg2: string, Arg3?: any): number;
        SearchB(Arg1: string, Arg2: string, Arg3?: any): number;
        SeriesSum(Arg1: any, Arg2: any, Arg3: any, Arg4: any): number;
        Sinh(Arg1: number): number;
        Skew(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Sln(Arg1: number, Arg2: number, Arg3: number): number;
        Slope(Arg1: any, Arg2: any): number;
        Small(Arg1: any, Arg2: number): number;
        SqrtPi(Arg1: any): number;
        Standardize(Arg1: number, Arg2: number, Arg3: number): number;
        StDev(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        StDev_P(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        StDev_S(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        StDevP(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        StEyx(Arg1: any, Arg2: any): number;
        Substitute(Arg1: string, Arg2: string, Arg3: string, Arg4?: any): string;
        Subtotal(Arg1: number, Arg2: Range, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Sum(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        SumIf(Arg1: Range, Arg2: any, Arg3?: any): number;
        SumIfs(Arg1: Range, Arg2: Range, Arg3: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any): number;
        SumProduct(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        SumSq(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        SumX2MY2(Arg1: any, Arg2: any): number;
        SumX2PY2(Arg1: any, Arg2: any): number;
        SumXMY2(Arg1: any, Arg2: any): number;
        Syd(Arg1: number, Arg2: number, Arg3: number, Arg4: number): number;
        T_Dist(Arg1: number, Arg2: number, Arg3: boolean): number;
        T_Dist_2T(Arg1: number, Arg2: number): number;
        T_Dist_RT(Arg1: number, Arg2: number): number;
        T_Inv(Arg1: number, Arg2: number): number;
        T_Inv_2T(Arg1: number, Arg2: number): number;
        T_Test(Arg1: any, Arg2: any, Arg3: number, Arg4: number): number;
        Tanh(Arg1: number): number;
        TBillEq(Arg1: any, Arg2: any, Arg3?: any): number;
        TBillPrice(Arg1: any, Arg2: any, Arg3?: any): number;
        TBillYield(Arg1: any, Arg2: any, Arg3?: any): number;
        TDist(Arg1: number, Arg2: number, Arg3: number): number;
        Text(Arg1: any, Arg2: string): string;
        ThaiDayOfWeek(Arg1: number): string;
        ThaiDigit(Arg1: string): string;
        ThaiMonthOfYear(Arg1: number): string;
        ThaiNumSound(Arg1: number): string;
        ThaiNumString(Arg1: number): string;
        ThaiStringLength(Arg1: string): number;
        ThaiYear(Arg1: number): number;
        TInv(Arg1: number, Arg2: number): number;
        Transpose(Arg1: any): any;
        Trend(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any): any;
        Trim(Arg1: string): string;
        TrimMean(Arg1: any, Arg2: number): number;
        TTest(Arg1: any, Arg2: any, Arg3: number, Arg4: number): number;
        USDollar(Arg1: number, Arg2: number): string;
        Var(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Var_P(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Var_S(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        VarP(Arg1: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any, Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any, Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): number;
        Vdb(Arg1: number, Arg2: number, Arg3: number, Arg4: number, Arg5: number, Arg6?: any, Arg7?: any): number;
        VLookup(Arg1: any, Arg2: any, Arg3: any, Arg4?: any): any;
        Weekday(Arg1: any, Arg2?: any): number;
        WeekNum(Arg1: any, Arg2?: any): number;
        Weibull(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        Weibull_Dist(Arg1: number, Arg2: number, Arg3: number, Arg4: boolean): number;
        WorkDay(Arg1: any, Arg2: any, Arg3?: any): number;
        WorkDay_Intl(Arg1: any, Arg2: any, Arg3?: any, Arg4?: any): number;
        Xirr(Arg1: any, Arg2: any, Arg3?: any): number;
        Xnpv(Arg1: any, Arg2: any): number;
        YearFrac(Arg1: any, Arg2: any, Arg3?: any): number;
        YieldDisc(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5?: any): number;
        YieldMat(Arg1: any, Arg2: any, Arg3: any, Arg4: any, Arg5: any, Arg6?: any): number;
        Z_Test(Arg1: any, Arg2: number, Arg3?: any): number;
        ZTest(Arg1: any, Arg2: number, Arg3?: any): number;
    }

    class WorksheetView {
        private 'Excel.WorksheetView_typekey': WorksheetView;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        DisplayFormulas: boolean;
        DisplayGridlines: boolean;
        DisplayHeadings: boolean;
        DisplayOutline: boolean;
        DisplayZeros: boolean;
        readonly Parent: any;
        readonly Sheet: Worksheet;
    }

    class XmlDataBinding {
        private 'Excel.XmlDataBinding_typekey': XmlDataBinding;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        ClearSettings(): void;
        readonly Creator: XlCreator;
        LoadSettings(Url: string): void;
        readonly Parent: any;
        Refresh(): XlXmlImportResult;
        readonly SourceUrl: string;
    }

    class XmlMap {
        private 'Excel.XmlMap_typekey': XmlMap;
        private constructor();
        readonly _Default: string;
        AdjustColumnWidth: boolean;
        AppendOnImport: boolean;
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly DataBinding: XmlDataBinding;
        Delete(): void;
        Export(Url: string, Overwrite?: boolean): XlXmlExportResult;
        ExportXml(Data: string): XlXmlExportResult;
        Import(Url: string, Overwrite?: boolean): XlXmlImportResult;
        ImportXml(XmlData: string, Overwrite?: boolean): XlXmlImportResult;
        readonly IsExportable: boolean;
        Name: string;
        readonly Parent: any;
        PreserveColumnFilter: boolean;
        PreserveNumberFormatting: boolean;
        readonly RootElementName: string;
        readonly RootElementNamespace: XmlNamespace;
        SaveDataSourceDefinition: boolean;
        readonly Schemas: XmlSchemas;
        ShowImportExportValidationErrors: boolean;
        readonly WorkbookConnection: WorkbookConnection;
    }

    interface XmlMaps {
        _Default(Index: any): XmlMap;
        Add(Schema: string, RootElementName?: string): XmlMap;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): XmlMap;
        readonly Parent: any;
        (Index: number | string): XmlMap;
    }

    class XmlNamespace {
        private 'Excel.XmlNamespace_typekey': XmlNamespace;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Parent: any;
        readonly Prefix: string;
        readonly Uri: string;
    }

    interface XmlNamespaces {
        _Default(Index: any): XmlNamespace;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        InstallManifest(Path: string, InstallForAllUsers?: boolean): void;
        Item(Index: number | string): XmlNamespace;
        readonly Parent: any;
        readonly Value: string;
        (Index: number | string): XmlNamespace;
    }

    class XmlSchema {
        private 'Excel.XmlSchema_typekey': XmlSchema;
        private constructor();
        readonly Application: Application;
        readonly Creator: XlCreator;
        readonly Name: string;
        readonly Namespace: XmlNamespace;
        readonly Parent: any;
        readonly XML: string;
    }

    interface XmlSchemas {
        _Default(Index: any): XmlSchema;
        readonly Application: Application;
        readonly Count: number;
        readonly Creator: XlCreator;
        Item(Index: number | string): XmlSchema;
        readonly Parent: any;
        (Index: number | string): XmlSchema;
    }

    class XPath {
        private 'Excel.XPath_typekey': XPath;
        private constructor();
        readonly _Default: string;
        readonly Application: Application;
        Clear(): void;
        readonly Creator: XlCreator;
        readonly Map: XmlMap;
        readonly Parent: any;
        readonly Repeating: boolean;
        SetValue(Map: XmlMap, XPath: string, SelectionNamespace?: any, Repeating?: boolean): void;
        readonly Value: string;
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

interface EnumeratorConstructor {
    // we need this because there are two overloads for Item on the Sheets object
    new <T>(sheets: Excel.Sheets<T>): Enumerator<T>;
}

interface ActiveXObject {
    on(obj: Excel.Application, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (this: Excel.Application, parameter: { readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number }) => void): void;
    on(obj: Excel.Application, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (this: Excel.Application, parameter: { readonly itinfo: number, readonly lcid: number, pptinfo: undefined }) => void): void;
    on(obj: Excel.Application, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.Application, parameter: { pctinfo: number }) => void): void;
    on(obj: Excel.Application, event: 'Invoke', argNames: Excel.EventHelperTypes.Application_Invoke_ArgNames, handler: (this: Excel.Application, parameter: Excel.EventHelperTypes.Application_Invoke_Parameter) => void): void;
    on(obj: Excel.Application, event: 'NewWorkbook' | 'WorkbookActivate' | 'WorkbookAddinInstall' | 'WorkbookAddinUninstall' | 'WorkbookDeactivate' | 'WorkbookOpen', argNames: ['Wb'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook }) => void): void;
    on(obj: Excel.Application, event: 'ProtectedViewWindowActivate' | 'ProtectedViewWindowDeactivate' | 'ProtectedViewWindowOpen' | 'ProtectedViewWindowResize', argNames: ['Pvw'], handler: (this: Excel.Application, parameter: { readonly Pvw: Excel.ProtectedViewWindow }) => void): void;
    on(obj: Excel.Application, event: 'ProtectedViewWindowBeforeClose', argNames: ['Pvw', 'Reason', 'Cancel'], handler: (this: Excel.Application, parameter: { readonly Pvw: Excel.ProtectedViewWindow, readonly Reason: Excel.XlProtectedViewCloseReason, Cancel: boolean }) => void): void;
    on(obj: Excel.Application, event: 'ProtectedViewWindowBeforeEdit', argNames: ['Pvw', 'Cancel'], handler: (this: Excel.Application, parameter: { readonly Pvw: Excel.ProtectedViewWindow, Cancel: boolean }) => void): void;
    on(obj: Excel.Application, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.Application, parameter: { readonly riid: stdole.GUID, ppvObj: undefined }) => void): void;
    on(obj: Excel.Application, event: 'SheetActivate' | 'SheetCalculate' | 'SheetDeactivate', argNames: ['Sh'], handler: (this: Excel.Application, parameter: { readonly Sh: Excel.Chart | Excel.Worksheet }) => void): void;
    on(obj: Excel.Application, event: 'SheetBeforeDoubleClick' | 'SheetBeforeRightClick', argNames: ['Sh', 'Target', 'Cancel'], handler: (this: Excel.Application, parameter: { readonly Sh: Excel.Worksheet, readonly Target: Excel.Range, Cancel: boolean }) => void): void;
    on(obj: Excel.Application, event: 'SheetChange' | 'SheetSelectionChange', argNames: ['Sh', 'Target'], handler: (this: Excel.Application, parameter: { readonly Sh: Excel.Worksheet, readonly Target: Excel.Range }) => void): void;
    on(obj: Excel.Application, event: 'SheetFollowHyperlink', argNames: ['Sh', 'Target'], handler: (this: Excel.Application, parameter: { readonly Sh: Excel.Worksheet, readonly Target: Excel.Hyperlink }) => void): void;
    on(obj: Excel.Application, event: 'SheetPivotTableAfterValueChange', argNames: ['Sh', 'TargetPivotTable', 'TargetRange'], handler: (this: Excel.Application, parameter: { readonly Sh: Excel.Worksheet, readonly TargetPivotTable: Excel.PivotTable, readonly TargetRange: Excel.Range }) => void): void;
    on(obj: Excel.Application, event: 'SheetPivotTableBeforeAllocateChanges' | 'SheetPivotTableBeforeCommitChanges', argNames: ['Sh', 'TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd', 'Cancel'], handler: (this: Excel.Application, parameter: { readonly Sh: Excel.Worksheet, readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number, Cancel: boolean }) => void): void;
    on(obj: Excel.Application, event: 'SheetPivotTableBeforeDiscardChanges', argNames: ['Sh', 'TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd'], handler: (this: Excel.Application, parameter: { readonly Sh: any, readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number }) => void): void;
    on(obj: Excel.Application, event: 'SheetPivotTableUpdate', argNames: ['Sh', 'Target'], handler: (this: Excel.Application, parameter: { readonly Sh: Excel.Worksheet, readonly Target: Excel.PivotTable }) => void): void;
    on(obj: Excel.Application, event: 'WindowActivate' | 'WindowDeactivate' | 'WindowResize', argNames: ['Wb', 'Wn'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Wn: Excel.Window }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookAfterSave', argNames: ['Wb', 'Success'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Success: boolean }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookAfterXmlExport', argNames: ['Wb', 'Map', 'Url', 'Result'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Map: Excel.XmlMap, readonly Url: string, readonly Result: Excel.XlXmlExportResult }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookAfterXmlImport', argNames: ['Wb', 'Map', 'IsRefresh', 'Result'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Map: Excel.XmlMap, readonly IsRefresh: boolean, readonly Result: Excel.XlXmlImportResult }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookBeforeClose' | 'WorkbookBeforePrint', argNames: ['Wb', 'Cancel'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, Cancel: boolean }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookBeforeSave', argNames: ['Wb', 'SaveAsUI', 'Cancel'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly SaveAsUI: boolean, Cancel: boolean }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookBeforeXmlExport', argNames: ['Wb', 'Map', 'Url', 'Cancel'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Map: Excel.XmlMap, readonly Url: string, Cancel: boolean }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookBeforeXmlImport', argNames: ['Wb', 'Map', 'Url', 'IsRefresh', 'Cancel'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Map: Excel.XmlMap, readonly Url: string, readonly IsRefresh: boolean, Cancel: boolean }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookNewChart', argNames: ['Wb', 'Ch'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Ch: Excel.Chart }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookNewSheet', argNames: ['Wb', 'Sh'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Sh: Excel.Worksheet }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookPivotTableCloseConnection' | 'WorkbookPivotTableOpenConnection', argNames: ['Wb', 'Target'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Target: Excel.PivotTable }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookRowsetComplete', argNames: ['Wb', 'Description', 'Sheet', 'Success'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly Description: string, readonly Sheet: string, readonly Success: boolean }) => void): void;
    on(obj: Excel.Application, event: 'WorkbookSync', argNames: ['Wb', 'SyncEventType'], handler: (this: Excel.Application, parameter: { readonly Wb: Excel.Workbook, readonly SyncEventType: Office.MsoSyncEventType }) => void): void;
    on(obj: Excel.Chart, event: 'BeforeDoubleClick', argNames: ['ElementID', 'Arg1', 'Arg2', 'Cancel'], handler: (this: Excel.Chart, parameter: { readonly ElementID: number, readonly Arg1: number, readonly Arg2: number, Cancel: boolean }) => void): void;
    on(obj: Excel.Chart, event: 'BeforeRightClick', argNames: ['Cancel'], handler: (this: Excel.Chart, parameter: { Cancel: boolean }) => void): void;
    on(obj: Excel.Chart, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (this: Excel.Chart, parameter: { readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number }) => void): void;
    on(obj: Excel.Chart, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (this: Excel.Chart, parameter: { readonly itinfo: number, readonly lcid: number, pptinfo: undefined }) => void): void;
    on(obj: Excel.Chart, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.Chart, parameter: { pctinfo: number }) => void): void;
    on(obj: Excel.Chart, event: 'Invoke', argNames: Excel.EventHelperTypes.Chart_Invoke_ArgNames, handler: (this: Excel.Chart, parameter: Excel.EventHelperTypes.Chart_Invoke_Parameter) => void): void;
    on(obj: Excel.Chart, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'x', 'y'], handler: (this: Excel.Chart, parameter: { readonly Button: number, readonly Shift: number, readonly x: number, readonly y: number }) => void): void;
    on(obj: Excel.Chart, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.Chart, parameter: { readonly riid: stdole.GUID, ppvObj: undefined }) => void): void;
    on(obj: Excel.Chart, event: 'Select', argNames: ['ElementID', 'Arg1', 'Arg2'], handler: (this: Excel.Chart, parameter: { readonly ElementID: number, readonly Arg1: number, readonly Arg2: number }) => void): void;
    on(obj: Excel.Chart, event: 'SeriesChange', argNames: ['SeriesIndex', 'PointIndex'], handler: (this: Excel.Chart, parameter: { readonly SeriesIndex: number, readonly PointIndex: number }) => void): void;
    on(obj: Excel.OLEObject, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (this: Excel.OLEObject, parameter: { readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number }) => void): void;
    on(obj: Excel.OLEObject, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (this: Excel.OLEObject, parameter: { readonly itinfo: number, readonly lcid: number, pptinfo: undefined }) => void): void;
    on(obj: Excel.OLEObject, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.OLEObject, parameter: { pctinfo: number }) => void): void;
    on(obj: Excel.OLEObject, event: 'Invoke', argNames: Excel.EventHelperTypes.OLEObject_Invoke_ArgNames, handler: (this: Excel.OLEObject, parameter: Excel.EventHelperTypes.OLEObject_Invoke_Parameter) => void): void;
    on(obj: Excel.OLEObject, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.OLEObject, parameter: { readonly riid: stdole.GUID, ppvObj: undefined }) => void): void;
    on(obj: Excel.QueryTable, event: 'AfterRefresh', argNames: ['Success'], handler: (this: Excel.QueryTable, parameter: { readonly Success: boolean }) => void): void;
    on(obj: Excel.QueryTable, event: 'BeforeRefresh', argNames: ['Cancel'], handler: (this: Excel.QueryTable, parameter: { Cancel: boolean }) => void): void;
    on(obj: Excel.QueryTable, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (this: Excel.QueryTable, parameter: { readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number }) => void): void;
    on(obj: Excel.QueryTable, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (this: Excel.QueryTable, parameter: { readonly itinfo: number, readonly lcid: number, pptinfo: undefined }) => void): void;
    on(obj: Excel.QueryTable, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.QueryTable, parameter: { pctinfo: number }) => void): void;
    on(obj: Excel.QueryTable, event: 'Invoke', argNames: Excel.EventHelperTypes.QueryTable_Invoke_ArgNames, handler: (this: Excel.QueryTable, parameter: Excel.EventHelperTypes.QueryTable_Invoke_Parameter) => void): void;
    on(obj: Excel.QueryTable, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.QueryTable, parameter: { readonly riid: stdole.GUID, ppvObj: undefined }) => void): void;
    on(obj: Excel.Workbook, event: 'AfterSave', argNames: ['Success'], handler: (this: Excel.Workbook, parameter: { readonly Success: boolean }) => void): void;
    on(obj: Excel.Workbook, event: 'AfterXmlExport', argNames: ['Map', 'Url', 'Result'], handler: (this: Excel.Workbook, parameter: { readonly Map: Excel.XmlMap, readonly Url: string, readonly Result: Excel.XlXmlExportResult }) => void): void;
    on(obj: Excel.Workbook, event: 'AfterXmlImport', argNames: ['Map', 'IsRefresh', 'Result'], handler: (this: Excel.Workbook, parameter: { readonly Map: Excel.XmlMap, readonly IsRefresh: boolean, readonly Result: Excel.XlXmlImportResult }) => void): void;
    on(obj: Excel.Workbook, event: 'BeforeClose' | 'BeforePrint', argNames: ['Cancel'], handler: (this: Excel.Workbook, parameter: { Cancel: boolean }) => void): void;
    on(obj: Excel.Workbook, event: 'BeforeSave', argNames: ['SaveAsUI', 'Cancel'], handler: (this: Excel.Workbook, parameter: { readonly SaveAsUI: boolean, Cancel: boolean }) => void): void;
    on(obj: Excel.Workbook, event: 'BeforeXmlExport', argNames: ['Map', 'Url', 'Cancel'], handler: (this: Excel.Workbook, parameter: { readonly Map: Excel.XmlMap, readonly Url: string, Cancel: boolean }) => void): void;
    on(obj: Excel.Workbook, event: 'BeforeXmlImport', argNames: ['Map', 'Url', 'IsRefresh', 'Cancel'], handler: (this: Excel.Workbook, parameter: { readonly Map: Excel.XmlMap, readonly Url: string, readonly IsRefresh: boolean, Cancel: boolean }) => void): void;
    on(obj: Excel.Workbook, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (this: Excel.Workbook, parameter: { readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number }) => void): void;
    on(obj: Excel.Workbook, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (this: Excel.Workbook, parameter: { readonly itinfo: number, readonly lcid: number, pptinfo: undefined }) => void): void;
    on(obj: Excel.Workbook, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.Workbook, parameter: { pctinfo: number }) => void): void;
    on(obj: Excel.Workbook, event: 'Invoke', argNames: Excel.EventHelperTypes.Workbook_Invoke_ArgNames, handler: (this: Excel.Workbook, parameter: Excel.EventHelperTypes.Workbook_Invoke_Parameter) => void): void;
    on(obj: Excel.Workbook, event: 'NewChart', argNames: ['Ch'], handler: (this: Excel.Workbook, parameter: { readonly Ch: Excel.Chart }) => void): void;
    on(obj: Excel.Workbook, event: 'NewSheet' | 'SheetActivate' | 'SheetCalculate' | 'SheetDeactivate', argNames: ['Sh'], handler: (this: Excel.Workbook, parameter: { readonly Sh: Excel.Chart | Excel.Worksheet }) => void): void;
    on(obj: Excel.Workbook, event: 'PivotTableCloseConnection' | 'PivotTableOpenConnection', argNames: ['Target'], handler: (this: Excel.Workbook, parameter: { readonly Target: Excel.PivotTable }) => void): void;
    on(obj: Excel.Workbook, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.Workbook, parameter: { readonly riid: stdole.GUID, ppvObj: undefined }) => void): void;
    on(obj: Excel.Workbook, event: 'RowsetComplete', argNames: ['Description', 'Sheet', 'Success'], handler: (this: Excel.Workbook, parameter: { readonly Description: string, readonly Sheet: string, readonly Success: boolean }) => void): void;
    on(obj: Excel.Workbook, event: 'SheetBeforeDoubleClick' | 'SheetBeforeRightClick', argNames: ['Sh', 'Target', 'Cancel'], handler: (this: Excel.Workbook, parameter: { readonly Sh: Excel.Worksheet, readonly Target: Excel.Range, Cancel: boolean }) => void): void;
    on(obj: Excel.Workbook, event: 'SheetChange' | 'SheetSelectionChange', argNames: ['Sh', 'Target'], handler: (this: Excel.Workbook, parameter: { readonly Sh: Excel.Worksheet, readonly Target: Excel.Range }) => void): void;
    on(obj: Excel.Workbook, event: 'SheetFollowHyperlink', argNames: ['Sh', 'Target'], handler: (this: Excel.Workbook, parameter: { readonly Sh: Excel.Worksheet, readonly Target: Excel.Hyperlink }) => void): void;
    on(obj: Excel.Workbook, event: 'SheetPivotTableAfterValueChange', argNames: ['Sh', 'TargetPivotTable', 'TargetRange'], handler: (this: Excel.Workbook, parameter: { readonly Sh: Excel.Worksheet, readonly TargetPivotTable: Excel.PivotTable, readonly TargetRange: Excel.Range }) => void): void;
    on(obj: Excel.Workbook, event: 'SheetPivotTableBeforeAllocateChanges' | 'SheetPivotTableBeforeCommitChanges', argNames: ['Sh', 'TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd', 'Cancel'], handler: (this: Excel.Workbook, parameter: { readonly Sh: Excel.Worksheet, readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number, Cancel: boolean }) => void): void;
    on(obj: Excel.Workbook, event: 'SheetPivotTableBeforeDiscardChanges', argNames: ['Sh', 'TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd'], handler: (this: Excel.Workbook, parameter: { readonly Sh: any, readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number }) => void): void;
    on(obj: Excel.Workbook, event: 'SheetPivotTableChangeSync' | 'SheetPivotTableUpdate', argNames: ['Sh', 'Target'], handler: (this: Excel.Workbook, parameter: { readonly Sh: Excel.Worksheet, readonly Target: Excel.PivotTable }) => void): void;
    on(obj: Excel.Workbook, event: 'Sync', argNames: ['SyncEventType'], handler: (this: Excel.Workbook, parameter: { readonly SyncEventType: Office.MsoSyncEventType }) => void): void;
    on(obj: Excel.Workbook, event: 'WindowActivate' | 'WindowDeactivate' | 'WindowResize', argNames: ['Wn'], handler: (this: Excel.Workbook, parameter: { readonly Wn: Excel.Window }) => void): void;
    on(obj: Excel.Worksheet, event: 'BeforeDoubleClick' | 'BeforeRightClick', argNames: ['Target', 'Cancel'], handler: (this: Excel.Worksheet, parameter: { readonly Target: Excel.Range, Cancel: boolean }) => void): void;
    on(obj: Excel.Worksheet, event: 'Change' | 'SelectionChange', argNames: ['Target'], handler: (this: Excel.Worksheet, parameter: { readonly Target: Excel.Range }) => void): void;
    on(obj: Excel.Worksheet, event: 'FollowHyperlink', argNames: ['Target'], handler: (this: Excel.Worksheet, parameter: { readonly Target: Excel.Hyperlink }) => void): void;
    on(obj: Excel.Worksheet, event: 'GetIDsOfNames', argNames: ['riid', 'rgszNames', 'cNames', 'lcid', 'rgdispid'], handler: (this: Excel.Worksheet, parameter: { readonly riid: stdole.GUID, readonly rgszNames: number, readonly cNames: number, readonly lcid: number, rgdispid: number }) => void): void;
    on(obj: Excel.Worksheet, event: 'GetTypeInfo', argNames: ['itinfo', 'lcid', 'pptinfo'], handler: (this: Excel.Worksheet, parameter: { readonly itinfo: number, readonly lcid: number, pptinfo: undefined }) => void): void;
    on(obj: Excel.Worksheet, event: 'GetTypeInfoCount', argNames: ['pctinfo'], handler: (this: Excel.Worksheet, parameter: { pctinfo: number }) => void): void;
    on(obj: Excel.Worksheet, event: 'Invoke', argNames: Excel.EventHelperTypes.Worksheet_Invoke_ArgNames, handler: (this: Excel.Worksheet, parameter: Excel.EventHelperTypes.Worksheet_Invoke_Parameter) => void): void;
    on(obj: Excel.Worksheet, event: 'PivotTableAfterValueChange', argNames: ['TargetPivotTable', 'TargetRange'], handler: (this: Excel.Worksheet, parameter: { readonly TargetPivotTable: Excel.PivotTable, readonly TargetRange: Excel.Range }) => void): void;
    on(obj: Excel.Worksheet, event: 'PivotTableBeforeAllocateChanges' | 'PivotTableBeforeCommitChanges', argNames: ['TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd', 'Cancel'], handler: (this: Excel.Worksheet, parameter: { readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number, Cancel: boolean }) => void): void;
    on(obj: Excel.Worksheet, event: 'PivotTableBeforeDiscardChanges', argNames: ['TargetPivotTable', 'ValueChangeStart', 'ValueChangeEnd'], handler: (this: Excel.Worksheet, parameter: { readonly TargetPivotTable: Excel.PivotTable, readonly ValueChangeStart: number, readonly ValueChangeEnd: number }) => void): void;
    on(obj: Excel.Worksheet, event: 'PivotTableChangeSync' | 'PivotTableUpdate', argNames: ['Target'], handler: (this: Excel.Worksheet, parameter: { readonly Target: Excel.PivotTable }) => void): void;
    on(obj: Excel.Worksheet, event: 'QueryInterface', argNames: ['riid', 'ppvObj'], handler: (this: Excel.Worksheet, parameter: { readonly riid: stdole.GUID, ppvObj: undefined }) => void): void;
    on(obj: Excel.Application, event: 'AddRef' | 'AfterCalculate' | 'Release', handler: (this: Excel.Application, parameter: {}) => void): void;
    on(obj: Excel.Chart, event: 'Activate' | 'AddRef' | 'Calculate' | 'Deactivate' | 'DragOver' | 'DragPlot' | 'Release' | 'Resize', handler: (this: Excel.Chart, parameter: {}) => void): void;
    on(obj: Excel.OLEObject, event: 'AddRef' | 'GotFocus' | 'LostFocus' | 'Release', handler: (this: Excel.OLEObject, parameter: {}) => void): void;
    on(obj: Excel.QueryTable, event: 'AddRef' | 'Release', handler: (this: Excel.QueryTable, parameter: {}) => void): void;
    on(obj: Excel.Workbook, event: 'Activate' | 'AddinInstall' | 'AddinUninstall' | 'AddRef' | 'Deactivate' | 'Open' | 'Release', handler: (this: Excel.Workbook, parameter: {}) => void): void;
    on(obj: Excel.Worksheet, event: 'Activate' | 'AddRef' | 'Calculate' | 'Deactivate' | 'Release', handler: (this: Excel.Worksheet, parameter: {}) => void): void;
    set(obj: Excel.Chart, propertyName: 'HasAxis', parameterTypes: [Excel.XlAxisType | undefined, Excel.XlAxisGroup | undefined], newValue: boolean): void;
    set(obj: Excel.ControlFormat, propertyName: 'List', parameterTypes: [number], newValue: string): void;
    set(obj: Excel.ControlFormat, propertyName: 'List', parameterTypes: never[], newValue: SafeArray<string>): void;
    set(obj: Excel.PageSetup, propertyName: 'PrintQuality', parameterTypes: [number], newValue: number): void;
    set(obj: Excel.Workbook, propertyName: 'Colors', parameterTypes: [number], newValue: number): void;
    set(obj: Excel.Range, propertyName: 'Value', parameterTypes: [Excel.XlRangeValueDataType], newValue: any): void;
    set(obj: Excel.PivotField, propertyName: 'Subtotals', parameterTypes: [Excel.PivotFieldSubtotal], newValue: boolean): void;
}

interface ActiveXObjectNameMap {
    'Excel.Application': Excel.Application;
    'Excel.Chart': Excel.Chart;
    'Excel.Sheet': Excel.Worksheet;
}
