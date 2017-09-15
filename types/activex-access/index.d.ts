// Type definitions for Microsoft Access 14.0 Object Library - Access 14.0
// Project: https://msdn.microsoft.com/en-us/library/dn142571.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="activex-office" />
/// <reference types="activex-dao" />
/// <reference types="activex-vbide" />
/// <reference types="activex-adodb" />

declare namespace Access {
    const enum AcBrowseToObjectType {
        acBrowseToForm = 2,
        acBrowseToReport = 3,
    }

    const enum AcCloseSave {
        acSaveNo = 2,
        acSavePrompt = 0,
        acSaveYes = 1,
    }

    const enum AcColorIndex {
        acColorIndexAqua = 14,
        acColorIndexBlack = 0,
        acColorIndexBlue = 12,
        acColorIndexBrightGreen = 10,
        acColorIndexDarkBlue = 4,
        acColorIndexFuschia = 13,
        acColorIndexGray = 7,
        acColorIndexGreen = 2,
        acColorIndexMaroon = 1,
        acColorIndexOlive = 3,
        acColorIndexRed = 9,
        acColorIndexSilver = 8,
        acColorIndexTeal = 6,
        acColorIndexViolet = 5,
        acColorIndexWhite = 15,
        acColorIndexYellow = 11,
    }

    const enum AcCommand {
        acCmdAboutMicrosoftAccess = 35,
        acCmdAddDataMacroAfterDelete = 720,
        acCmdAddDataMacroAfterInsert = 718,
        acCmdAddDataMacroAfterUpdate = 719,
        acCmdAddDataMacroBeforeChange = 722,
        acCmdAddDataMacroBeforeDelete = 721,
        acCmdAddFromOutlook = 583,
        acCmdAddInManager = 526,
        acCmdAddNamedDataMacro = 723,
        acCmdAddToNewGroup = 494,
        acCmdAddWatch = 201,
        acCmdAdvancedFilterSort = 99,
        acCmdAlignBottom = 46,
        acCmdAlignCenter = 477,
        acCmdAlignLeft = 43,
        acCmdAlignmentAndSizing = 478,
        acCmdAlignMiddle = 476,
        acCmdAlignRight = 44,
        acCmdAlignToGrid = 47,
        acCmdAlignTop = 45,
        acCmdAlignToShortest = 153,
        acCmdAlignToTallest = 154,
        acCmdAnalyzePerformance = 283,
        acCmdAnalyzeTable = 284,
        acCmdAnchorBottomLeft = 616,
        acCmdAnchorBottomRight = 618,
        acCmdAnchorBottomStretchAcross = 617,
        acCmdAnchorStretchAcross = 611,
        acCmdAnchorStretchDown = 613,
        acCmdAnchorStretchDownAcross = 614,
        acCmdAnchorStretchDownRight = 615,
        acCmdAnchorTopLeft = 610,
        acCmdAnchorTopRight = 612,
        acCmdAnswerWizard = 235,
        acCmdApplyAutoFormat1 = 648,
        acCmdApplyAutoFormat10 = 657,
        acCmdApplyAutoFormat11 = 658,
        acCmdApplyAutoFormat12 = 659,
        acCmdApplyAutoFormat13 = 660,
        acCmdApplyAutoFormat14 = 661,
        acCmdApplyAutoFormat15 = 662,
        acCmdApplyAutoFormat16 = 663,
        acCmdApplyAutoFormat17 = 664,
        acCmdApplyAutoFormat18 = 665,
        acCmdApplyAutoFormat19 = 666,
        acCmdApplyAutoFormat2 = 649,
        acCmdApplyAutoFormat20 = 667,
        acCmdApplyAutoFormat21 = 668,
        acCmdApplyAutoFormat22 = 669,
        acCmdApplyAutoFormat23 = 670,
        acCmdApplyAutoFormat24 = 671,
        acCmdApplyAutoFormat25 = 672,
        acCmdApplyAutoFormat3 = 650,
        acCmdApplyAutoFormat4 = 651,
        acCmdApplyAutoFormat5 = 652,
        acCmdApplyAutoFormat6 = 653,
        acCmdApplyAutoFormat7 = 654,
        acCmdApplyAutoFormat8 = 655,
        acCmdApplyAutoFormat9 = 656,
        acCmdApplyDefault = 55,
        acCmdApplyFilterSort = 93,
        acCmdAppMaximize = 10,
        acCmdAppMinimize = 11,
        acCmdAppMove = 12,
        acCmdAppRestore = 9,
        acCmdAppSize = 13,
        acCmdArrangeIconsAuto = 218,
        acCmdArrangeIconsByCreated = 216,
        acCmdArrangeIconsByModified = 217,
        acCmdArrangeIconsByName = 214,
        acCmdArrangeIconsByType = 215,
        acCmdAutoCorrect = 261,
        acCmdAutoDial = 192,
        acCmdAutoFormat = 270,
        acCmdBackgroundPicture = 474,
        acCmdBackgroundSound = 475,
        acCmdBackup = 513,
        acCmdBookmarksClearAll = 310,
        acCmdBookmarksNext = 308,
        acCmdBookmarksPrevious = 309,
        acCmdBookmarksToggle = 307,
        acCmdBringToFront = 52,
        acCmdBrowseSharePointList = 621,
        acCmdCalculatedColumn = 698,
        acCmdCallStack = 172,
        acCmdChangeToCheckBox = 231,
        acCmdChangeToComboBox = 230,
        acCmdChangeToCommandButton = 501,
        acCmdChangeToImage = 234,
        acCmdChangeToLabel = 228,
        acCmdChangeToListBox = 229,
        acCmdChangeToOptionButton = 233,
        acCmdChangeToTextBox = 227,
        acCmdChangeToToggleButton = 232,
        acCmdClearAll = 146,
        acCmdClearAllBreakpoints = 132,
        acCmdClearGrid = 71,
        acCmdClearHyperlink = 343,
        acCmdClearItemDefaults = 237,
        acCmdClose = 58,
        acCmdCloseAll = 646,
        acCmdCloseDatabase = 538,
        acCmdCloseWindow = 186,
        acCmdCollectDataViaEmail = 608,
        acCmdColumnWidth = 117,
        acCmdCompactDatabase = 4,
        acCmdCompatCheckCurrentObject = 696,
        acCmdCompatCheckDatabase = 695,
        acCmdCompileAllModules = 125,
        acCmdCompileAndSaveAllModules = 126,
        acCmdCompileLoadedModules = 290,
        acCmdCompleteWord = 306,
        acCmdConditionalFormatting = 500,
        acCmdConnection = 383,
        acCmdControlMarginsMedium = 630,
        acCmdControlMarginsNarrow = 629,
        acCmdControlMarginsNone = 628,
        acCmdControlMarginsWide = 631,
        acCmdControlPaddingMedium = 634,
        acCmdControlPaddingNarrow = 633,
        acCmdControlPaddingNone = 632,
        acCmdControlPaddingWide = 635,
        acCmdControlWizardsToggle = 197,
        acCmdConvertDatabase = 171,
        acCmdConvertLinkedTableToLocal = 700,
        acCmdConvertMacrosToVisualBasic = 279,
        acCmdCopy = 190,
        acCmdCopyDatabaseFile = 516,
        acCmdCopyHyperlink = 328,
        acCmdCreateMenuFromMacro = 334,
        acCmdCreateRelationship = 150,
        acCmdCreateReplica = 263,
        acCmdCreateShortcut = 219,
        acCmdCreateShortcutMenuFromMacro = 336,
        acCmdCreateToolbarFromMacro = 335,
        acCmdCut = 189,
        acCmdDataAccessPageAddToPage = 480,
        acCmdDataAccessPageBrowse = 344,
        acCmdDataAccessPageDesignView = 385,
        acCmdDataAccessPageFieldListRefresh = 479,
        acCmdDatabaseProperties = 256,
        acCmdDatabaseSplitter = 520,
        acCmdDataEntry = 78,
        acCmdDataOutline = 468,
        acCmdDatasheetView = 282,
        acCmdDateAndTime = 226,
        acCmdDebugWindow = 123,
        acCmdDelete = 337,
        acCmdDeleteGroup = 493,
        acCmdDeletePage = 332,
        acCmdDeleteQueryColumn = 81,
        acCmdDeleteRecord = 223,
        acCmdDeleteRows = 188,
        acCmdDeleteSharePointList = 627,
        acCmdDeleteTab = 255,
        acCmdDeleteTable = 489,
        acCmdDeleteTableColumn = 271,
        acCmdDeleteWatch = 267,
        acCmdDemote = 388,
        acCmdDesignObject = 697,
        acCmdDesignView = 183,
        acCmdDiagramAddRelatedTables = 373,
        acCmdDiagramAutosizeSelectedTables = 378,
        acCmdDiagramDeleteRelationship = 382,
        acCmdDiagramLayoutDiagram = 380,
        acCmdDiagramLayoutSelection = 379,
        acCmdDiagramModifyUserDefinedView = 375,
        acCmdDiagramNewLabel = 372,
        acCmdDiagramNewTable = 381,
        acCmdDiagramRecalculatePageBreaks = 377,
        acCmdDiagramShowRelationshipLabels = 374,
        acCmdDiagramViewPageBreaks = 376,
        acCmdDiscardChanges = 639,
        acCmdDiscardChangesAndRefresh = 640,
        acCmdDocMaximize = 15,
        acCmdDocMinimize = 60,
        acCmdDocMove = 16,
        acCmdDocRestore = 14,
        acCmdDocSize = 17,
        acCmdDocumenter = 285,
        acCmdDropSQLDatabase = 517,
        acCmdDuplicate = 34,
        acCmdEditHyperlink = 325,
        acCmdEditingAllowed = 70,
        acCmdEditListItems = 607,
        acCmdEditRelationship = 151,
        acCmdEditTriggers = 384,
        acCmdEditWatch = 202,
        acCmdEncryptDecryptDatabase = 5,
        acCmdEnd = 198,
        acCmdExit = 3,
        acCmdExport = 487,
        acCmdExportAccess = 559,
        acCmdExportdBase = 565,
        acCmdExportExcel = 556,
        acCmdExportFixedFormat = 592,
        acCmdExportHTML = 564,
        acCmdExportLotus = 567,
        acCmdExportODBC = 562,
        acCmdExportParadox = 566,
        acCmdExportRTF = 558,
        acCmdExportSharePointList = 557,
        acCmdExportSnapShot = 563,
        acCmdExportText = 560,
        acCmdExportXML = 561,
        acCmdFavoritesAddTo = 299,
        acCmdFavoritesOpen = 298,
        acCmdFieldList = 42,
        acCmdFieldTemplates = 647,
        acCmdFilterByForm = 207,
        acCmdFilterBySelection = 208,
        acCmdFilterExcludingSelection = 277,
        acCmdFilterMenu = 619,
        acCmdFind = 30,
        acCmdFindNext = 341,
        acCmdFindNextWordUnderCursor = 313,
        acCmdFindPrevious = 120,
        acCmdFindPrevWordUnderCursor = 312,
        acCmdFitToWindow = 245,
        acCmdFont = 19,
        acCmdFormatCells = 77,
        acCmdFormHdrFtr = 36,
        acCmdFormView = 281,
        acCmdFreezeColumn = 105,
        acCmdGoBack = 294,
        acCmdGoContinue = 127,
        acCmdGoForward = 295,
        acCmdGroupByTable = 387,
        acCmdGroupControls = 484,
        acCmdHideColumns = 79,
        acCmdHideMessageBar = 677,
        acCmdHidePane = 365,
        acCmdHideTable = 147,
        acCmdHorizontalSpacingDecrease = 158,
        acCmdHorizontalSpacingIncrease = 159,
        acCmdHorizontalSpacingMakeEqual = 157,
        acCmdHyperlinkDisplayText = 329,
        acCmdImport = 257,
        acCmdImportAttachAccess = 544,
        acCmdImportAttachdBase = 552,
        acCmdImportAttachExcel = 545,
        acCmdImportAttachHTML = 550,
        acCmdImportAttachLotus = 554,
        acCmdImportAttachODBC = 549,
        acCmdImportAttachOutlook = 551,
        acCmdImportAttachParadox = 553,
        acCmdImportAttachSharePointList = 547,
        acCmdImportAttachText = 546,
        acCmdImportAttachXML = 548,
        acCmdIndent = 205,
        acCmdIndexes = 152,
        acCmdInsertActiveXControl = 258,
        acCmdInsertChart = 293,
        acCmdInsertFile = 39,
        acCmdInsertFileIntoModule = 118,
        acCmdInsertHyperlink = 259,
        acCmdInsertLogo = 585,
        acCmdInsertLookupColumn = 273,
        acCmdInsertLookupField = 291,
        acCmdInsertMovieFromFile = 469,
        acCmdInsertNavigationButton = 724,
        acCmdInsertObject = 33,
        acCmdInsertPage = 331,
        acCmdInsertPicture = 222,
        acCmdInsertPivotTable = 470,
        acCmdInsertProcedure = 262,
        acCmdInsertQueryColumn = 82,
        acCmdInsertRows = 187,
        acCmdInsertSpreadsheet = 471,
        acCmdInsertSubdatasheet = 499,
        acCmdInsertTableColumn = 272,
        acCmdInsertTitle = 586,
        acCmdInsertUnboundSection = 472,
        acCmdInvokeBuilder = 178,
        acCmdJoinProperties = 72,
        acCmdLastPosition = 339,
        acCmdLayoutGridlinesBoth = 574,
        acCmdLayoutGridlinesBottom = 580,
        acCmdLayoutGridlinesCrossHatch = 578,
        acCmdLayoutGridlinesHorizontal = 576,
        acCmdLayoutGridlinesNone = 577,
        acCmdLayoutGridlinesOutline = 581,
        acCmdLayoutGridlinesTop = 579,
        acCmdLayoutGridlinesVertical = 575,
        acCmdLayoutInsertColumnLeft = 680,
        acCmdLayoutInsertColumnRight = 681,
        acCmdLayoutInsertRowAbove = 678,
        acCmdLayoutInsertRowBelow = 679,
        acCmdLayoutMergeCells = 682,
        acCmdLayoutPreview = 141,
        acCmdLayoutSplitColumnCell = 683,
        acCmdLayoutSplitRowCell = 684,
        acCmdLayoutView = 593,
        acCmdLineUpIcons = 213,
        acCmdLinkedTableManager = 519,
        acCmdLinkTables = 102,
        acCmdListConstants = 303,
        acCmdLoadFromQuery = 95,
        acCmdMacroAllActions = 589,
        acCmdMacroArguments = 588,
        acCmdMacroConditions = 87,
        acCmdMacroNames = 86,
        acCmdMakeMDEFile = 7,
        acCmdManageAttachments = 673,
        acCmdManageReplies = 609,
        acCmdManageTableEvents = 717,
        acCmdMaximiumRecords = 508,
        acCmdMicrosoftAccessHelpTopics = 100,
        acCmdMicrosoftOnTheWeb = 236,
        acCmdMicrosoftScriptEditor = 390,
        acCmdModifySharePointList = 622,
        acCmdModifySharePointListAlerts = 623,
        acCmdModifySharePointListPermissions = 625,
        acCmdModifySharePointListWorkflow = 624,
        acCmdMoreWindows = 8,
        acCmdMoveColumnCellDown = 573,
        acCmdMoveColumnCellUp = 572,
        acCmdNewDatabase = 26,
        acCmdNewGroup = 491,
        acCmdNewObjectAutoForm = 193,
        acCmdNewObjectAutoFormWeb = 705,
        acCmdNewObjectAutoReport = 194,
        acCmdNewObjectAutoReportWeb = 706,
        acCmdNewObjectBlankForm = 600,
        acCmdNewObjectBlankFormWeb = 703,
        acCmdNewObjectBlankReport = 602,
        acCmdNewObjectBlankReportWeb = 704,
        acCmdNewObjectClassModule = 140,
        acCmdNewObjectContinuousForm = 594,
        acCmdNewObjectContinuousFormWeb = 701,
        acCmdNewObjectDataAccessPage = 346,
        acCmdNewObjectDatasheetForm = 598,
        acCmdNewObjectDatasheetFormWeb = 702,
        acCmdNewObjectDesignForm = 604,
        acCmdNewObjectDesignQuery = 603,
        acCmdNewObjectDesignReport = 605,
        acCmdNewObjectDesignTable = 606,
        acCmdNewObjectDiagram = 352,
        acCmdNewObjectForm = 136,
        acCmdNewObjectFunction = 394,
        acCmdNewObjectLabelsReport = 601,
        acCmdNewObjectMacro = 138,
        acCmdNewObjectMacroWeb = 708,
        acCmdNewObjectModalForm = 599,
        acCmdNewObjectModule = 139,
        acCmdNewObjectNavigationLeft = 690,
        acCmdNewObjectNavigationLeftWeb = 710,
        acCmdNewObjectNavigationRight = 691,
        acCmdNewObjectNavigationRightWeb = 711,
        acCmdNewObjectNavigationTop = 689,
        acCmdNewObjectNavigationTopLeft = 693,
        acCmdNewObjectNavigationTopLeftWeb = 713,
        acCmdNewObjectNavigationTopRight = 694,
        acCmdNewObjectNavigationTopRightWeb = 714,
        acCmdNewObjectNavigationTopTop = 692,
        acCmdNewObjectNavigationTopTopWeb = 712,
        acCmdNewObjectNavigationTopWeb = 709,
        acCmdNewObjectPivotChart = 596,
        acCmdNewObjectPivotTable = 597,
        acCmdNewObjectQuery = 135,
        acCmdNewObjectQueryWeb = 707,
        acCmdNewObjectReport = 137,
        acCmdNewObjectSplitForm = 595,
        acCmdNewObjectStoredProcedure = 351,
        acCmdNewObjectTable = 134,
        acCmdNewObjectView = 350,
        acCmdObjBrwFindWholeWordOnly = 314,
        acCmdObjBrwGroupMembers = 318,
        acCmdObjBrwHelp = 316,
        acCmdObjBrwShowHiddenMembers = 315,
        acCmdObjBrwViewDefinition = 317,
        acCmdObjectBrowser = 200,
        acCmdOfficeClipboard = 488,
        acCmdOLEDDELinks = 27,
        acCmdOLEObjectConvert = 167,
        acCmdOLEObjectDefaultVerb = 57,
        acCmdOpenDatabase = 25,
        acCmdOpenHyperlink = 326,
        acCmdOpenNewHyperlink = 327,
        acCmdOpenSearchPage = 253,
        acCmdOpenStartPage = 252,
        acCmdOpenTable = 221,
        acCmdOpenURL = 251,
        acCmdOptions = 49,
        acCmdOutdent = 206,
        acCmdOutputToExcel = 175,
        acCmdOutputToRTF = 176,
        acCmdOutputToText = 177,
        acCmdPageHdrFtr = 182,
        acCmdPageNumber = 225,
        acCmdPageProperties = 467,
        acCmdPageSetup = 32,
        acCmdParameterInfo = 305,
        acCmdPartialReplicaWizard = 524,
        acCmdPaste = 191,
        acCmdPasteAppend = 38,
        acCmdPasteAsHyperlink = 490,
        acCmdPasteFormatting = 587,
        acCmdPasteSpecial = 64,
        acCmdPivotAutoAverage = 416,
        acCmdPivotAutoCount = 413,
        acCmdPivotAutoFilter = 398,
        acCmdPivotAutoMax = 415,
        acCmdPivotAutoMin = 414,
        acCmdPivotAutoStdDev = 417,
        acCmdPivotAutoStdDevP = 419,
        acCmdPivotAutoSum = 412,
        acCmdPivotAutoVar = 418,
        acCmdPivotAutoVarP = 420,
        acCmdPivotChartByRowByColumn = 456,
        acCmdPivotChartDrillInto = 457,
        acCmdPivotChartDrillOut = 532,
        acCmdPivotChartMultiplePlots = 458,
        acCmdPivotChartMultiplePlotsUnifiedScale = 459,
        acCmdPivotChartShowLegend = 455,
        acCmdPivotChartSortAscByTotal = 534,
        acCmdPivotChartSortDescByTotal = 535,
        acCmdPivotChartType = 453,
        acCmdPivotChartUndo = 460,
        acCmdPivotChartView = 397,
        acCmdPivotCollapse = 400,
        acCmdPivotDelete = 454,
        acCmdPivotDropAreas = 452,
        acCmdPivotExpand = 401,
        acCmdPivotRefresh = 404,
        acCmdPivotShowAll = 461,
        acCmdPivotShowBottom1 = 432,
        acCmdPivotShowBottom10 = 435,
        acCmdPivotShowBottom10Percent = 440,
        acCmdPivotShowBottom1Percent = 437,
        acCmdPivotShowBottom2 = 433,
        acCmdPivotShowBottom25 = 436,
        acCmdPivotShowBottom25Percent = 441,
        acCmdPivotShowBottom2Percent = 438,
        acCmdPivotShowBottom5 = 434,
        acCmdPivotShowBottom5Percent = 439,
        acCmdPivotShowBottomOther = 442,
        acCmdPivotShowTop1 = 421,
        acCmdPivotShowTop10 = 424,
        acCmdPivotShowTop10Percent = 429,
        acCmdPivotShowTop1Percent = 426,
        acCmdPivotShowTop2 = 422,
        acCmdPivotShowTop25 = 425,
        acCmdPivotShowTop25Percent = 430,
        acCmdPivotShowTop2Percent = 427,
        acCmdPivotShowTop5 = 423,
        acCmdPivotShowTop5Percent = 428,
        acCmdPivotShowTopOther = 431,
        acCmdPivotTableClearCustomOrdering = 527,
        acCmdPivotTableCreateCalcField = 444,
        acCmdPivotTableCreateCalcTotal = 443,
        acCmdPivotTableDemote = 411,
        acCmdPivotTableExpandIndicators = 451,
        acCmdPivotTableExportToExcel = 405,
        acCmdPivotTableFilterBySelection = 528,
        acCmdPivotTableGroupItems = 530,
        acCmdPivotTableHideDetails = 402,
        acCmdPivotTableMoveToColumnArea = 407,
        acCmdPivotTableMoveToDetailArea = 409,
        acCmdPivotTableMoveToFilterArea = 408,
        acCmdPivotTableMoveToRowArea = 406,
        acCmdPivotTablePercentColumnTotal = 447,
        acCmdPivotTablePercentGrandTotal = 450,
        acCmdPivotTablePercentParentColumnItem = 449,
        acCmdPivotTablePercentParentRowItem = 448,
        acCmdPivotTablePercentRowTotal = 446,
        acCmdPivotTablePromote = 410,
        acCmdPivotTableRemove = 529,
        acCmdPivotTableShowAsNormal = 445,
        acCmdPivotTableShowDetails = 403,
        acCmdPivotTableSubtotal = 399,
        acCmdPivotTableUngroupItems = 531,
        acCmdPivotTableView = 396,
        acCmdPrepareDatabaseForWeb = 716,
        acCmdPreviewEightPages = 249,
        acCmdPreviewFourPages = 248,
        acCmdPreviewOnePage = 246,
        acCmdPreviewTwelvePages = 250,
        acCmdPreviewTwoPages = 247,
        acCmdPrimaryKey = 107,
        acCmdPrint = 340,
        acCmdPrintPreview = 54,
        acCmdPrintRelationships = 483,
        acCmdPrintSelection = 590,
        acCmdProcedureDefinition = 122,
        acCmdPromote = 386,
        acCmdProperties = 287,
        acCmdPublishDatabase = 537,
        acCmdPublishDefaults = 324,
        acCmdPublishFixedFormat = 591,
        acCmdQueryAddToOutput = 362,
        acCmdQueryGroupBy = 361,
        acCmdQueryParameters = 76,
        acCmdQueryTotals = 73,
        acCmdQueryTypeAppend = 91,
        acCmdQueryTypeCrosstab = 74,
        acCmdQueryTypeDelete = 92,
        acCmdQueryTypeMakeTable = 94,
        acCmdQueryTypeSelect = 89,
        acCmdQueryTypeSQLDataDefinition = 168,
        acCmdQueryTypeSQLPassThrough = 169,
        acCmdQueryTypeSQLUnion = 180,
        acCmdQueryTypeUpdate = 90,
        acCmdQuickInfo = 304,
        acCmdQuickPrint = 278,
        acCmdQuickWatch = 203,
        acCmdRecordsGoToFirst = 67,
        acCmdRecordsGoToLast = 68,
        acCmdRecordsGoToNew = 28,
        acCmdRecordsGoToNext = 65,
        acCmdRecordsGoToPrevious = 66,
        acCmdRecoverDesignMaster = 265,
        acCmdRedo = 199,
        acCmdReferences = 260,
        acCmdRefresh = 18,
        acCmdRefreshData = 541,
        acCmdRefreshPage = 297,
        acCmdRefreshSharePointList = 626,
        acCmdRegisterActiveXControls = 254,
        acCmdRelationships = 133,
        acCmdRemove = 366,
        acCmdRemoveAllFilters = 644,
        acCmdRemoveAllSorts = 645,
        acCmdRemoveFilterFromCurrentColumn = 643,
        acCmdRemoveFilterSort = 144,
        acCmdRemoveFromLayout = 582,
        acCmdRemoveTable = 84,
        acCmdRename = 143,
        acCmdRenameColumn = 274,
        acCmdRenameGroup = 492,
        acCmdRepairDatabase = 6,
        acCmdReplace = 29,
        acCmdReportHdrFtr = 37,
        acCmdReportView = 539,
        acCmdReset = 124,
        acCmdResolveConflicts = 266,
        acCmdRestore = 514,
        acCmdRowHeight = 116,
        acCmdRun = 181,
        acCmdRunMacro = 31,
        acCmdRunOpenMacro = 338,
        acCmdSave = 20,
        acCmdSaveAllModules = 280,
        acCmdSaveAs = 21,
        acCmdSaveAsASP = 323,
        acCmdSaveAsDataAccessPage = 389,
        acCmdSaveAsHTML = 321,
        acCmdSaveAsIDC = 322,
        acCmdSaveAsOutlookContact = 584,
        acCmdSaveAsQuery = 96,
        acCmdSaveAsReport = 142,
        acCmdSaveAsTemplate = 686,
        acCmdSaveDatabaseAsNewTemplatePart = 687,
        acCmdSavedExports = 555,
        acCmdSavedImports = 543,
        acCmdSaveLayout = 145,
        acCmdSaveModuleAsText = 119,
        acCmdSaveRecord = 97,
        acCmdSaveSelectionAsNewDataType = 688,
        acCmdSelectAll = 333,
        acCmdSelectAllRecords = 109,
        acCmdSelectDataAccessPage = 347,
        acCmdSelectEntireColumn = 571,
        acCmdSelectEntireLayout = 715,
        acCmdSelectEntireRow = 570,
        acCmdSelectForm = 40,
        acCmdSelectRecord = 50,
        acCmdSelectReport = 319,
        acCmdSend = 173,
        acCmdSendToBack = 53,
        acCmdServerFilterByForm = 507,
        acCmdServerProperties = 496,
        acCmdSetCaption = 637,
        acCmdSetControlDefaults = 56,
        acCmdSetDatabasePassword = 275,
        acCmdSetNextStatement = 129,
        acCmdShareOnSharePoint = 542,
        acCmdSharePointSiteRecycleBin = 641,
        acCmdShowAllRelationships = 149,
        acCmdShowColumnHistory = 620,
        acCmdShowDatePicker = 636,
        acCmdShowDirectRelationships = 148,
        acCmdShowEnvelope = 533,
        acCmdShowLogicCatalog = 685,
        acCmdShowMembers = 302,
        acCmdShowMessageBar = 676,
        acCmdShowNextStatement = 130,
        acCmdShowOnlyWebToolbar = 300,
        acCmdShowTable = 185,
        acCmdSingleStep = 88,
        acCmdSizeToFit = 59,
        acCmdSizeToFitForm = 69,
        acCmdSizeToGrid = 48,
        acCmdSizeToNarrowest = 155,
        acCmdSizeToWidest = 156,
        acCmdSnapToGrid = 62,
        acCmdSortAscending = 163,
        acCmdSortDescending = 164,
        acCmdSortingAndGrouping = 51,
        acCmdSpeech = 511,
        acCmdSpelling = 269,
        acCmdSQLView = 184,
        acCmdStackedLayout = 568,
        acCmdStartNewWorkflow = 675,
        acCmdStartupProperties = 224,
        acCmdStepInto = 342,
        acCmdStepOut = 311,
        acCmdStepOver = 128,
        acCmdStepToCursor = 204,
        acCmdStopLoadingPage = 296,
        acCmdSubdatasheetCollapseAll = 505,
        acCmdSubdatasheetExpandAll = 504,
        acCmdSubdatasheetRemove = 506,
        acCmdSubformDatasheet = 108,
        acCmdSubformDatasheetView = 463,
        acCmdSubformFormView = 462,
        acCmdSubformInNewWindow = 495,
        acCmdSubformPivotChartView = 465,
        acCmdSubformPivotTableView = 464,
        acCmdSwitchboardManager = 521,
        acCmdSynchronize = 638,
        acCmdSynchronizeNow = 264,
        acCmdSyncWebApplication = 699,
        acCmdTabControlPageOrder = 330,
        acCmdTableAddTable = 498,
        acCmdTableCustomView = 497,
        acCmdTableNames = 75,
        acCmdTabOrder = 41,
        acCmdTabularLayout = 569,
        acCmdTestValidationRules = 196,
        acCmdTileHorizontally = 286,
        acCmdTileVertically = 23,
        acCmdToggleBreakpoint = 131,
        acCmdToggleCacheListData = 642,
        acCmdToggleFilter = 220,
        acCmdToggleOffline = 540,
        acCmdToolbarControlProperties = 301,
        acCmdToolbarsCustomize = 165,
        acCmdTransferSQLDatabase = 515,
        acCmdTransparentBackground = 288,
        acCmdTransparentBorder = 289,
        acCmdUndo = 292,
        acCmdUnfreezeAllColumns = 106,
        acCmdUngroupControls = 485,
        acCmdUnhideColumns = 80,
        acCmdUpsizingWizard = 522,
        acCmdUserAndGroupAccounts = 104,
        acCmdUserAndGroupPermissions = 103,
        acCmdUserLevelSecurityWizard = 276,
        acCmdVerticalSpacingDecrease = 161,
        acCmdVerticalSpacingIncrease = 162,
        acCmdVerticalSpacingMakeEqual = 160,
        acCmdViewCode = 170,
        acCmdViewDataAccessPages = 349,
        acCmdViewDetails = 210,
        acCmdViewDiagrams = 354,
        acCmdViewFieldList = 353,
        acCmdViewForms = 112,
        acCmdViewFunctions = 395,
        acCmdViewGrid = 63,
        acCmdViewLargeIcons = 209,
        acCmdViewList = 212,
        acCmdViewMacros = 114,
        acCmdViewModules = 115,
        acCmdViewObjectDependencies = 536,
        acCmdViewQueries = 111,
        acCmdViewReports = 113,
        acCmdViewRuler = 61,
        acCmdViewShowPaneDiagram = 358,
        acCmdViewShowPaneGrid = 359,
        acCmdViewShowPaneSQL = 357,
        acCmdViewSmallIcons = 211,
        acCmdViewStoredProcedures = 355,
        acCmdViewTableColumnNames = 363,
        acCmdViewTableColumnProperties = 368,
        acCmdViewTableKeys = 369,
        acCmdViewTableNameOnly = 364,
        acCmdViewTables = 110,
        acCmdViewTableUserView = 370,
        acCmdViewToolbox = 85,
        acCmdViewVerifySQL = 360,
        acCmdViewViews = 356,
        acCmdVisualBasicEditor = 525,
        acCmdWebPagePreview = 466,
        acCmdWebPageProperties = 486,
        acCmdWebTheme = 473,
        acCmdWindowArrangeIcons = 24,
        acCmdWindowCascade = 22,
        acCmdWindowHide = 2,
        acCmdWindowSplit = 121,
        acCmdWindowUnhide = 1,
        acCmdWordMailMerge = 195,
        acCmdWorkflowTasks = 674,
        acCmdWorkgroupAdministrator = 391,
        acCmdZoom10 = 244,
        acCmdZoom100 = 240,
        acCmdZoom1000 = 482,
        acCmdZoom150 = 239,
        acCmdZoom200 = 238,
        acCmdZoom25 = 243,
        acCmdZoom50 = 242,
        acCmdZoom500 = 481,
        acCmdZoom75 = 241,
        acCmdZoomBox = 179,
        acCmdZoomSelection = 371,
    }

    const enum AcControlType {
        acAttachment = 126,
        acBoundObjectFrame = 108,
        acCheckBox = 106,
        acComboBox = 111,
        acCommandButton = 104,
        acCustomControl = 119,
        acEmptyCell = 127,
        acImage = 103,
        acLabel = 100,
        acLine = 102,
        acListBox = 110,
        acNavigationButton = 130,
        acNavigationControl = 129,
        acObjectFrame = 114,
        acOptionButton = 105,
        acOptionGroup = 107,
        acPage = 124,
        acPageBreak = 118,
        acRectangle = 101,
        acSubform = 112,
        acTabCtl = 123,
        acTextBox = 109,
        acToggleButton = 122,
        acWebBrowser = 128,
    }

    const enum AcCurrentView {
        acCurViewDatasheet = 2,
        acCurViewDesign = 0,
        acCurViewFormBrowse = 1,
        acCurViewLayout = 7,
        acCurViewPivotChart = 4,
        acCurViewPivotTable = 3,
        acCurViewPreview = 5,
        acCurViewReportBrowse = 6,
    }

    const enum AcCursorOnHover {
        acCursorOnHoverDefault = 0,
        acCursorOnHoverHyperlinkHand = 1,
    }

    const enum AcDataAccessPageView {
        acDataAccessPageBrowse = 0,
        acDataAccessPageDesign = 1,
    }

    const enum AcDataObjectType {
        acActiveDataObject = -1,
        acDataForm = 2,
        acDataFunction = 10,
        acDataQuery = 1,
        acDataReport = 3,
        acDataServerView = 7,
        acDataStoredProcedure = 9,
        acDataTable = 0,
    }

    const enum AcDataTransferType {
        acExport = 1,
        acImport = 0,
        acLink = 2,
    }

    const enum AcDefReportView {
        acDefViewPreview = 0,
        acDefViewReportBrowse = 1,
    }

    const enum AcDefView {
        acDefViewContinuous = 1,
        acDefViewDatasheet = 2,
        acDefViewPivotChart = 4,
        acDefViewPivotTable = 3,
        acDefViewSingle = 0,
        acDefViewSplitForm = 5,
    }

    const enum AcDisplayAs {
        acDisplayAsIcon = 1,
        acDisplayAsImageIcon = 0,
        acDisplayAsPaperclip = 2,
    }

    const enum AcDisplayAsHyperlink {
        acDisplayAsHyperlinkAlways = 1,
        acDisplayAsHyperlinkIfHyperlink = 0,
        acDisplayAsHyperlinkOnScreenOnly = 2,
    }

    const enum AcExportQuality {
        acExportQualityPrint = 0,
        acExportQualityScreen = 1,
    }

    const enum AcExportXMLEncoding {
        acUTF16 = 1,
        acUTF8 = 0,
    }

    const enum AcExportXMLObjectType {
        acExportForm = 2,
        acExportFunction = 10,
        acExportQuery = 1,
        acExportReport = 3,
        acExportServerView = 7,
        acExportStoredProcedure = 9,
        acExportTable = 0,
    }

    const enum AcExportXMLOtherFlags {
        acEmbedSchema = 1,
        acExcludePrimaryKeyAndIndexes = 2,
        acExportAllTableAndFieldProperties = 32,
        acLiveReportSource = 8,
        acPersistReportML = 16,
        acRunFromServer = 4,
    }

    const enum AcExportXMLSchemaFormat {
        acSchemaNone = 0,
        acSchemaXSD = 1,
    }

    const enum AcFileFormat {
        acFileFormatAccess2 = 2,
        acFileFormatAccess2000 = 9,
        acFileFormatAccess2002 = 10,
        acFileFormatAccess2007 = 12,
        acFileFormatAccess95 = 7,
        acFileFormatAccess97 = 8,
    }

    const enum AcFilterType {
        acFilterNormal = 0,
        acServerFilter = 1,
    }

    const enum AcFindField {
        acAll = 0,
        acCurrent = -1,
    }

    const enum AcFindMatch {
        acAnywhere = 0,
        acEntire = 1,
        acStart = 2,
    }

    const enum AcFormatBarLimits {
        acAutomatic = 0,
        acNumber = 1,
        acPercent = 2,
    }

    const enum AcFormatConditionOperator {
        acBetween = 0,
        acEqual = 2,
        acGreaterThan = 4,
        acGreaterThanOrEqual = 6,
        acLessThan = 5,
        acLessThanOrEqual = 7,
        acNotBetween = 1,
        acNotEqual = 3,
    }

    const enum AcFormatConditionType {
        acDataBar = 3,
        acExpression = 1,
        acFieldHasFocus = 2,
        acFieldValue = 0,
    }

    const enum AcFormOpenDataMode {
        acFormAdd = 0,
        acFormEdit = 1,
        acFormPropertySettings = -1,
        acFormReadOnly = 2,
    }

    const enum AcFormView {
        acDesign = 1,
        acFormDS = 3,
        acFormPivotChart = 5,
        acFormPivotTable = 4,
        acLayout = 6,
        acNormal = 0,
        acPreview = 2,
    }

    const enum AcHorizontalAnchor {
        acHorizontalAnchorBoth = 2,
        acHorizontalAnchorLeft = 0,
        acHorizontalAnchorRight = 1,
    }

    const enum AcHyperlinkPart {
        acAddress = 2,
        acDisplayedValue = 0,
        acDisplayText = 1,
        acFullAddress = 5,
        acScreenTip = 4,
        acSubAddress = 3,
    }

    const enum AcImeMode {
        acImeModeAlpha = 8,
        acImeModeAlphaFull = 7,
        acImeModeDisable = 3,
        acImeModeHangul = 10,
        acImeModeHangulFull = 9,
        acImeModeHiragana = 4,
        acImeModeKatakana = 5,
        acImeModeKatakanaHalf = 6,
        acImeModeNoControl = 0,
        acImeModeOff = 2,
        acImeModeOn = 1,
    }

    const enum AcImeSentenceMode {
        acImeSentenceModeConversation = 2,
        acImeSentenceModeNone = 3,
        acImeSentenceModePhrasePredict = 0,
        acImeSentenceModePluralClause = 1,
    }

    const enum AcImportXMLOption {
        acAppendData = 2,
        acStructureAndData = 1,
        acStructureOnly = 0,
    }

    const enum AcLayoutType {
        acLayoutNone = 0,
        acLayoutStacked = 2,
        acLayoutTabular = 1,
    }

    const enum AcModuleType {
        acClassModule = 1,
        acStandardModule = 0,
    }

    const enum AcNavigationSpan {
        acHorizontal = 0,
        acVertical = 1,
    }

    const enum AcNewDatabaseFormat {
        acNewDatabaseFormatAccess2000 = 9,
        acNewDatabaseFormatAccess2002 = 10,
        acNewDatabaseFormatAccess2007 = 12,
        acNewDatabaseFormatUserDefault = 0,
    }

    const enum AcObjectType {
        acDataAccessPage = 6,
        acDatabaseProperties = 11,
        acDefault = -1,
        acDiagram = 8,
        acForm = 2,
        acFunction = 10,
        acMacro = 4,
        acModule = 5,
        acQuery = 1,
        acReport = 3,
        acServerView = 7,
        acStoredProcedure = 9,
        acTable = 0,
        acTableDataMacro = 12,
    }

    const enum AcOpenDataMode {
        acAdd = 0,
        acEdit = 1,
        acReadOnly = 2,
    }

    const enum AcOutputObjectType {
        acOutputDataAccessPage = 6,
        acOutputForm = 2,
        acOutputFunction = 10,
        acOutputModule = 5,
        acOutputQuery = 1,
        acOutputReport = 3,
        acOutputServerView = 7,
        acOutputStoredProcedure = 9,
        acOutputTable = 0,
    }

    const enum AcPictureCaptionArrangement {
        acBottom = 3,
        acGeneral = 1,
        acLeft = 4,
        acNoPictureCaption = 0,
        acRight = 5,
        acTop = 2,
    }

    const enum AcPrintColor {
        acPRCMColor = 2,
        acPRCMMonochrome = 1,
    }

    const enum AcPrintDuplex {
        acPRDPHorizontal = 2,
        acPRDPSimplex = 1,
        acPRDPVertical = 3,
    }

    const enum AcPrintItemLayout {
        acPRHorizontalColumnLayout = 1953,
        acPRVerticalColumnLayout = 1954,
    }

    const enum AcPrintObjQuality {
        acPRPQDraft = -1,
        acPRPQHigh = -4,
        acPRPQLow = -2,
        acPRPQMedium = -3,
    }

    const enum AcPrintOrientation {
        acPRORLandscape = 2,
        acPRORPortrait = 1,
    }

    const enum AcPrintPaperBin {
        acPRBNAuto = 7,
        acPRBNCassette = 14,
        acPRBNEnvelope = 5,
        acPRBNEnvManual = 6,
        acPRBNFormSource = 15,
        acPRBNLargeCapacity = 11,
        acPRBNLargeFmt = 10,
        acPRBNLower = 2,
        acPRBNManual = 4,
        acPRBNMiddle = 3,
        acPRBNSmallFmt = 9,
        acPRBNTractor = 8,
        acPRBNUpper = 1,
    }

    const enum AcPrintPaperSize {
        acPRPS10x14 = 16,
        acPRPS11x17 = 17,
        acPRPSA3 = 8,
        acPRPSA4 = 9,
        acPRPSA4Small = 10,
        acPRPSA5 = 11,
        acPRPSB4 = 12,
        acPRPSB5 = 13,
        acPRPSCSheet = 24,
        acPRPSDSheet = 25,
        acPRPSEnv10 = 20,
        acPRPSEnv11 = 21,
        acPRPSEnv12 = 22,
        acPRPSEnv14 = 23,
        acPRPSEnv9 = 19,
        acPRPSEnvB4 = 33,
        acPRPSEnvB5 = 34,
        acPRPSEnvB6 = 35,
        acPRPSEnvC3 = 29,
        acPRPSEnvC4 = 30,
        acPRPSEnvC5 = 28,
        acPRPSEnvC6 = 31,
        acPRPSEnvC65 = 32,
        acPRPSEnvDL = 27,
        acPRPSEnvItaly = 36,
        acPRPSEnvMonarch = 37,
        acPRPSEnvPersonal = 38,
        acPRPSESheet = 26,
        acPRPSExecutive = 7,
        acPRPSFanfoldLglGerman = 41,
        acPRPSFanfoldStdGerman = 40,
        acPRPSFanfoldUS = 39,
        acPRPSFolio = 14,
        acPRPSLedger = 4,
        acPRPSLegal = 5,
        acPRPSLetter = 1,
        acPRPSLetterSmall = 2,
        acPRPSNote = 18,
        acPRPSQuarto = 15,
        acPRPSStatement = 6,
        acPRPSTabloid = 3,
        acPRPSUser = 256,
    }

    const enum AcPrintQuality {
        acDraft = 3,
        acHigh = 0,
        acLow = 2,
        acMedium = 1,
    }

    const enum AcPrintRange {
        acPages = 2,
        acPrintAll = 0,
        acSelection = 1,
    }

    const enum AcProjectType {
        acADP = 1,
        acMDB = 2,
        acNull = 0,
    }

    const enum AcProperty {
        acPropertyBackColor = 8,
        acPropertyCaption = 9,
        acPropertyEnabled = 0,
        acPropertyForeColor = 7,
        acPropertyHeight = 6,
        acPropertyLeft = 3,
        acPropertyLocked = 2,
        acPropertyTop = 4,
        acPropertyValue = 10,
        acPropertyVisible = 1,
        acPropertyWidth = 5,
    }

    const enum AcQuitOption {
        acQuitPrompt = 0,
        acQuitSaveAll = 1,
        acQuitSaveNone = 2,
    }

    const enum AcRecord {
        acFirst = 2,
        acGoTo = 4,
        acLast = 3,
        acNewRec = 5,
        acNext = 1,
        acPrevious = 0,
    }

    const enum AcResourceType {
        acResourceImage = 1,
        acResourceTheme = 0,
    }

    const enum AcSearchDirection {
        acDown = 1,
        acSearchAll = 2,
        acUp = 0,
    }

    const enum AcSection {
        acDetail = 0,
        acFooter = 2,
        acGroupLevel1Footer = 6,
        acGroupLevel1Header = 5,
        acGroupLevel2Footer = 8,
        acGroupLevel2Header = 7,
        acHeader = 1,
        acPageFooter = 4,
        acPageHeader = 3,
    }

    const enum AcSendObjectType {
        acSendDataAccessPage = 6,
        acSendForm = 2,
        acSendModule = 5,
        acSendNoObject = -1,
        acSendQuery = 1,
        acSendReport = 3,
        acSendTable = 0,
    }

    const enum AcSeparatorCharacters {
        acSeparatorCharactersComma = 3,
        acSeparatorCharactersNewLine = 1,
        acSeparatorCharactersSemiColon = 2,
        acSeparatorCharactersSystemSeparator = 0,
    }

    const enum AcSharePointListTransferType {
        acImportSharePointList = 0,
        acLinkSharePointList = 1,
    }

    const enum AcShowToolbar {
        acToolbarNo = 2,
        acToolbarWhereApprop = 1,
        acToolbarYes = 0,
    }

    const enum AcSplitFormDatasheet {
        acDatasheetAllowEdits = 0,
        acDatasheetReadOnly = 1,
    }

    const enum AcSplitFormOrientation {
        acDatasheetOnBottom = 1,
        acDatasheetOnLeft = 2,
        acDatasheetOnRight = 3,
        acDatasheetOnTop = 0,
    }

    const enum AcSplitFormPrinting {
        acFormOnly = 0,
        acGridOnly = 1,
    }

    const enum AcSpreadSheetType {
        acSpreadsheetTypeExcel12 = 9,
        acSpreadsheetTypeExcel12Xml = 10,
        acSpreadsheetTypeExcel3 = 0,
        acSpreadsheetTypeExcel4 = 6,
        acSpreadsheetTypeExcel5 = 5,
        acSpreadsheetTypeExcel7 = 5,
        acSpreadsheetTypeExcel8 = 8,
        acSpreadsheetTypeExcel9 = 8,
        acSpreadsheetTypeExcel97 = 8,
        acSpreadsheetTypeLotusWJ2 = 4,
        acSpreadsheetTypeLotusWK1 = 2,
        acSpreadsheetTypeLotusWK3 = 3,
        acSpreadsheetTypeLotusWK4 = 7,
    }

    const enum AcSysCmdAction {
        acSysCmdAccessDir = 9,
        acSysCmdAccessVer = 7,
        acSysCmdClearHelpTopic = 11,
        acSysCmdClearStatus = 5,
        acSysCmdGetObjectState = 10,
        acSysCmdGetWorkgroupFile = 13,
        acSysCmdIniFile = 8,
        acSysCmdInitMeter = 1,
        acSysCmdProfile = 12,
        acSysCmdRemoveMeter = 3,
        acSysCmdRuntime = 6,
        acSysCmdSetStatus = 4,
        acSysCmdUpdateMeter = 2,
    }

    const enum AcTextFormat {
        acTextFormatHTMLRichText = 1,
        acTextFormatPlain = 0,
    }

    const enum AcTextTransferType {
        acExportDelim = 2,
        acExportFixed = 3,
        acExportHTML = 8,
        acExportMerge = 4,
        acImportDelim = 0,
        acImportFixed = 1,
        acImportHTML = 7,
        acLinkDelim = 5,
        acLinkFixed = 6,
        acLinkHTML = 9,
    }

    const enum AcTransformXMLScriptOption {
        acDisableScript = 2,
        acEnableScript = 0,
        acPromptScript = 1,
    }

    const enum AcVerticalAnchor {
        acVerticalAnchorBoth = 2,
        acVerticalAnchorBottom = 1,
        acVerticalAnchorTop = 0,
    }

    const enum AcView {
        acViewDesign = 1,
        acViewLayout = 6,
        acViewNormal = 0,
        acViewPivotChart = 4,
        acViewPivotTable = 3,
        acViewPreview = 2,
        acViewReport = 5,
    }

    const enum AcWebBrowserScrollBars {
        acScrollAuto = 0,
        acScrollNo = 2,
        acScrollYes = 1,
    }

    const enum AcWebBrowserState {
        acComplete = 4,
        acInteractive = 3,
        acLoaded = 2,
        acLoading = 1,
        acUnintialized = 0,
    }

    const enum AcWebUserDisplay {
        acWebUserEmail = 3,
        acWebUserID = 0,
        acWebUserLoginName = 2,
        acWebUserName = 1,
    }

    const enum AcWebUserGroupsDisplay {
        acWebUserGroupID = 0,
        acWebUserGroupName = 1,
    }

    const enum AcWindowMode {
        acDialog = 3,
        acHidden = 1,
        acIcon = 2,
        acWindowNormal = 0,
    }

    /** Predefined constants */
    const enum Constants {
        acAltMask = 4,
        acApplyFilter = 1,
        acApplyServerFilter = 3,
        acCloseFilterWindow = 2,
        acCloseServerFilterWindow = 4,
        acCopy = 2,
        acCtrlMask = 2,
        acCut = 1,
        acDataErrAdded = 2,
        acDataErrContinue = 0,
        acDataErrDisplay = 1,
        acDelete = 6,
        acDeleteCancel = 1,
        acDeleteOK = 0,
        acDeleteUserCancel = 2,
        acEditMenu = 1,
        acEffectChisel = 5,
        acEffectEtched = 3,
        acEffectNormal = 0,
        acEffectRaised = 1,
        acEffectShadow = 4,
        acEffectSunken = 2,
        acExit = 2,
        acFile = 0,
        acFilterAdvanced = 1,
        acFilterByForm = 0,
        acFormatASP = 'Microsoft Active Server Pages (*.asp)',
        acFormatDAP = 'Microsoft Access Data Access Page (*.htm; *.html)',
        acFormatHTML = 'HTML (*.html)',
        acFormatIIS = 'Microsoft IIS (*.htx; *.idc)',
        acFormatPDF = 'PDF Format (*.pdf)',
        acFormatRTF = 'Rich Text Format (*.rtf)',
        acFormatSNP = 'Snapshot Format (*.snp)',
        acFormatTXT = 'MS-DOS Text (*.txt)',
        acFormatXLS = 'Microsoft Excel (*.xls)',
        acFormatXLSB = 'Microsoft Excel Binary Workbook (*.xlsb)',
        acFormatXLSX = 'Microsoft Excel Workbook (*.xlsx)',
        acFormatXPS = 'XPS Format (*.xps)',
        acFormBar = 0,
        acGridlinesBoth = 3,
        acGridlinesBothV2 = -1,
        acGridlinesHoriz = 1,
        acGridlinesNone = 0,
        acGridlinesVert = 2,
        acLBClose = 8,
        acLBEnd = 9,
        acLBGetColumnCount = 4,
        acLBGetColumnWidth = 5,
        acLBGetFormat = 7,
        acLBGetRowCount = 3,
        acLBGetValue = 6,
        acLBInitialize = 0,
        acLBOpen = 1,
        acLeftButton = 1,
        acMenuCheck = 3,
        acMenuGray = 1,
        acMenuUncheck = 2,
        acMenuUngray = 0,
        acMenuVer1X = 11,
        acMenuVer20 = 20,
        acMenuVer70 = 70,
        acMiddleButton = 4,
        acNew = 0,
        acObject = 14,
        acObjectUpdate = 3,
        acObjectVerb = 0,
        acObjStateDirty = 2,
        acObjStateNew = 4,
        acObjStateOpen = 1,
        acOLEActivate = 7,
        acOLEActivateDoubleClick = 2,
        acOLEActivateGetFocus = 1,
        acOLEActivateManual = 0,
        acOLEChanged = 0,
        acOLEClose = 9,
        acOLEClosed = 2,
        acOLECopy = 4,
        acOLECreateEmbed = 0,
        acOLECreateFromFile = 1,
        acOLECreateLink = 1,
        acOLECreateNew = 0,
        acOLEDelete = 10,
        acOLEDisplayContent = 0,
        acOLEDisplayIcon = 1,
        acOLEEither = 2,
        acOLEEmbedded = 1,
        acOLEFetchVerbs = 17,
        acOLEInsertObjDlg = 14,
        acOLELinked = 0,
        acOLENone = 3,
        acOLEPaste = 5,
        acOLEPasteSpecialDlg = 15,
        acOLERenamed = 3,
        acOLESaved = 1,
        acOLESizeAutoSize = 2,
        acOLESizeClip = 0,
        acOLESizeStretch = 1,
        acOLESizeZoom = 3,
        acOLEUpdate = 6,
        acOLEUpdateAutomatic = 0,
        acOLEUpdateFrozen = 1,
        acOLEUpdateManual = 2,
        acOLEVerbHide = -3,
        acOLEVerbInPlaceActivate = -5,
        acOLEVerbInPlaceUIActivate = -4,
        acOLEVerbOpen = -2,
        acOLEVerbPrimary = 0,
        acOLEVerbShow = -1,
        acPaste = 3,
        acPrompt = 0,
        acPropCatData = 2,
        acPropCatEvent = 4,
        acPropCatLayout = 1,
        acPropCatNA = 0,
        acPropCatOther = 8,
        acRecordsMenu = 5,
        acRefresh = 5,
        acRightButton = 2,
        acSave = 1,
        acSaveForm = 4,
        acSaveFormAs = 5,
        acSaveRecord = 4,
        acSecFrmRptExecute = 256,
        acSecFrmRptReadDef = 4,
        acSecFrmRptWriteDef = 65548,
        acSecMacExecute = 8,
        acSecMacReadDef = 10,
        acSecMacWriteDef = 65542,
        acSecModReadDef = 2,
        acSecModWriteDef = 65542,
        acSelectAllRecords = 9,
        acSelectRecord = 8,
        acServerFilterByForm = 2,
        acShiftMask = 1,
        acShowAllRecords = 0,
        acUndo = 0,
        vbKey0 = 48,
        vbKey1 = 49,
        vbKey2 = 50,
        vbKey3 = 51,
        vbKey4 = 52,
        vbKey5 = 53,
        vbKey6 = 54,
        vbKey7 = 55,
        vbKey8 = 56,
        vbKey9 = 57,
        vbKeyA = 65,
        vbKeyAdd = 107,
        vbKeyB = 66,
        vbKeyBack = 8,
        vbKeyC = 67,
        vbKeyCancel = 3,
        vbKeyCapital = 20,
        vbKeyClear = 12,
        vbKeyControl = 17,
        vbKeyD = 68,
        vbKeyDecimal = 110,
        vbKeyDelete = 46,
        vbKeyDivide = 111,
        vbKeyDown = 40,
        vbKeyE = 69,
        vbKeyEnd = 35,
        vbKeyEscape = 27,
        vbKeyExecute = 43,
        vbKeyF = 70,
        vbKeyF1 = 112,
        vbKeyF10 = 121,
        vbKeyF11 = 122,
        vbKeyF12 = 123,
        vbKeyF13 = 124,
        vbKeyF14 = 125,
        vbKeyF15 = 126,
        vbKeyF16 = 127,
        vbKeyF2 = 113,
        vbKeyF3 = 114,
        vbKeyF4 = 115,
        vbKeyF5 = 116,
        vbKeyF6 = 117,
        vbKeyF7 = 118,
        vbKeyF8 = 119,
        vbKeyF9 = 120,
        vbKeyG = 71,
        vbKeyH = 72,
        vbKeyHelp = 47,
        vbKeyHome = 36,
        vbKeyI = 73,
        vbKeyInsert = 45,
        vbKeyJ = 74,
        vbKeyK = 75,
        vbKeyL = 76,
        vbKeyLButton = 1,
        vbKeyLeft = 37,
        vbKeyM = 77,
        vbKeyMButton = 4,
        vbKeyMenu = 18,
        vbKeyMultiply = 106,
        vbKeyN = 78,
        vbKeyNumlock = 144,
        vbKeyNumpad0 = 96,
        vbKeyNumpad1 = 97,
        vbKeyNumpad2 = 98,
        vbKeyNumpad3 = 99,
        vbKeyNumpad4 = 100,
        vbKeyNumpad5 = 101,
        vbKeyNumpad6 = 102,
        vbKeyNumpad7 = 103,
        vbKeyNumpad8 = 104,
        vbKeyNumpad9 = 105,
        vbKeyO = 79,
        vbKeyP = 80,
        vbKeyPageDown = 34,
        vbKeyPageUp = 33,
        vbKeyPause = 19,
        vbKeyPrint = 42,
        vbKeyQ = 81,
        vbKeyR = 82,
        vbKeyRButton = 2,
        vbKeyReturn = 13,
        vbKeyRight = 39,
        vbKeyS = 83,
        vbKeySelect = 41,
        vbKeySeparator = 108,
        vbKeyShift = 16,
        vbKeySnapshot = 44,
        vbKeySpace = 32,
        vbKeySubtract = 109,
        vbKeyT = 84,
        vbKeyTab = 9,
        vbKeyU = 85,
        vbKeyUp = 38,
        vbKeyV = 86,
        vbKeyW = 87,
        vbKeyX = 88,
        vbKeyY = 89,
        vbKeyZ = 90,
    }

    const enum OldConstants {
        A_ADD = 0,
        A_ALL = 0,
        A_ANYWHERE = 0,
        A_ATTACH = 2,
        A_COPY = 3,
        A_CURRENT = 1,
        A_CUT = 2,
        A_DELETE = 6,
        A_DELETE_V2 = 7,
        A_DESIGN = 1,
        A_DIALOG = 3,
        A_DOWN = 1,
        A_DRAFT = 3,
        A_EDIT = 1,
        A_EDITMENU = 1,
        A_ENTIRE = 1,
        A_EXIT = 2,
        A_EXPORT = 1,
        A_EXPORTDELIM = 2,
        A_EXPORTFIXED = 3,
        A_EXPORTMERGE = 4,
        A_FILE = 0,
        A_FIRST = 2,
        A_FORM = 2,
        A_FORMATRTF = 'Rich Text Format (*.rtf)',
        A_FORMATTXT = 'MS-DOS Text (*.txt)',
        A_FORMATXLS = 'Microsoft Excel (*.xls)',
        A_FORMBAR = 0,
        A_FORMDS = 3,
        A_GOTO = 4,
        A_HIDDEN = 1,
        A_HIGH = 0,
        A_ICON = 2,
        A_IMPORT = 0,
        A_IMPORTDELIM = 0,
        A_IMPORTFIXED = 1,
        A_LAST = 3,
        A_LOW = 2,
        A_MACRO = 4,
        A_MEDIUM = 1,
        A_MENU_VER1X = 11,
        A_MENU_VER20 = 20,
        A_MODULE = 5,
        A_NEW = 0,
        A_NEWREC = 5,
        A_NEXT = 1,
        A_NORMAL = 0,
        A_OBJECT = 14,
        A_OBJECTUPDATE = 3,
        A_OBJECTVERB = 0,
        A_PAGES = 2,
        A_PASTE = 4,
        A_PREVIEW = 2,
        A_PREVIOUS = 0,
        A_PRINTALL = 0,
        A_PROMPT = 0,
        A_QUERY = 1,
        A_READONLY = 2,
        A_RECORDSMENU = 3,
        A_REFRESH = 2,
        A_REPORT = 3,
        A_SAVE = 1,
        A_SAVEFORM = 2,
        A_SAVEFORMAS = 3,
        A_SAVERECORD = 4,
        A_SELECTALLRECORDS = 8,
        A_SELECTALLRECORDS_V2 = 9,
        A_SELECTION = 1,
        A_SELECTRECORD = 7,
        A_SELECTRECORD_V2 = 8,
        A_START = 2,
        A_TABLE = 0,
        A_TOOLBAR_NO = 2,
        A_TOOLBAR_WHERE_APPROP = 1,
        A_TOOLBAR_YES = 0,
        A_UNDO = 0,
        A_UNDOFIELD = 1,
        A_UP = 0,
        ALT_MASK = 4,
        CTRL_MASK = 2,
        DATA_ERRADDED = 2,
        DATA_ERRCONTINUE = 0,
        DATA_ERRDISPLAY = 1,
        DB_APPENDONLY = 8,
        DB_ATTACHEDODBC = 536870912,
        DB_ATTACHEDTABLE = 1073741824,
        DB_ATTACHEXCLUSIVE = 65536,
        DB_ATTACHSAVEPWD = 131072,
        DB_AUTOINCRFIELD = 16,
        DB_BINARY = 9,
        DB_BOOLEAN = 1,
        DB_BYTE = 2,
        DB_CONSISTENT = 32,
        DB_CURRENCY = 5,
        DB_DATE = 8,
        DB_DECRYPT = 4,
        DB_DENYREAD = 2,
        DB_DENYWRITE = 1,
        DB_DESCENDING = 1,
        DB_DOUBLE = 7,
        DB_ENCRYPT = 2,
        DB_FAILONERROR = 128,
        DB_FIXEDFIELD = 1,
        DB_FORWARDONLY = 256,
        DB_FREELOCKS = 1,
        DB_HIDDENOBJECT = 1,
        DB_IGNORENULL = 8,
        DB_INCONSISTENT = 16,
        DB_INTEGER = 3,
        DB_LANG_ARABIC = ';LANGID=0x0401;CP=1256;COUNTRY=0',
        DB_LANG_CYRILLIC = ';LANGID=0x0419;CP=1251;COUNTRY=0',
        DB_LANG_CZECH = ';LANGID=0x0405;CP=1250;COUNTRY=0',
        DB_LANG_DUTCH = ';LANGID=0x0413;CP=1252;COUNTRY=0',
        DB_LANG_GENERAL = ';LANGID=0x0409;CP=1252;COUNTRY=0',
        DB_LANG_GREEK = ';LANGID=0x0408;CP=1253;COUNTRY=0',
        DB_LANG_HEBREW = ';LANGID=0x040D;CP=1255;COUNTRY=0',
        DB_LANG_HUNGARIAN = ';LANGID=0x040E;CP=1250;COUNTRY=0',
        DB_LANG_ICELANDIC = ';LANGID=0x040F;CP=1252;COUNTRY=0',
        DB_LANG_NORDIC = ';LANGID=0x041D;CP=1252;COUNTRY=0',
        DB_LANG_NORWDAN = ';LANGID=0x0414;CP=1252;COUNTRY=0',
        DB_LANG_POLISH = ';LANGID=0x0415;CP=1250;COUNTRY=0',
        DB_LANG_SPANISH = ';LANGID=0x040A;CP=1252;COUNTRY=0',
        DB_LANG_SWEDFIN = ';LANGID=0x040B;CP=1252;COUNTRY=0',
        DB_LANG_TURKISH = ';LANGID=0x041F;CP=1254;COUNTRY=0',
        DB_LONG = 4,
        DB_LONGBINARY = 11,
        DB_MEMO = 12,
        DB_NONULLS = 3,
        DB_OLE = 11,
        DB_OPEN_DYNASET = 2,
        DB_OPEN_SNAPSHOT = 4,
        DB_OPEN_TABLE = 1,
        DB_OPTIONINIPATH = 1,
        DB_PRIMARY = 2,
        DB_PROHIBITNULL = 4,
        DB_QACTION = 240,
        DB_QAPPEND = 64,
        DB_QCROSSTAB = 16,
        DB_QDDL = 96,
        DB_QDELETE = 32,
        DB_QMAKETABLE = 80,
        DB_QSELECT = 0,
        DB_QSETOPERATION = 128,
        DB_QSPTBULK = 144,
        DB_QSQLPASSTHROUGH = 112,
        DB_QUERYDEF = 5,
        DB_QUPDATE = 48,
        DB_READONLY = 4,
        DB_RELATIONDELETECASCADE = 4096,
        DB_RELATIONDONTENFORCE = 2,
        DB_RELATIONINHERITED = 4,
        DB_RELATIONLEFT = 16777216,
        DB_RELATIONRIGHT = 33554432,
        DB_RELATIONUNIQUE = 1,
        DB_RELATIONUPDATECASCADE = 256,
        DB_SEC_CREATE = 1,
        DB_SEC_DBCREATE = 1,
        DB_SEC_DBEXCLUSIVE = 4,
        DB_SEC_DBOPEN = 2,
        DB_SEC_DELETE = 65536,
        DB_SEC_DELETEDATA = 128,
        DB_SEC_FRMRPT_EXECUTE = 256,
        DB_SEC_FRMRPT_READDEF = 4,
        DB_SEC_FRMRPT_WRITEDEF = 65548,
        DB_SEC_FULLACCESS = 1048575,
        DB_SEC_INSERTDATA = 32,
        DB_SEC_MAC_EXECUTE = 8,
        DB_SEC_MAC_READDEF = 10,
        DB_SEC_MAC_WRITEDEF = 65542,
        DB_SEC_MOD_READDEF = 2,
        DB_SEC_MOD_WRITEDEF = 65542,
        DB_SEC_NOACCESS = 0,
        DB_SEC_READDEF = 4,
        DB_SEC_READSEC = 131072,
        DB_SEC_REPLACEDATA = 64,
        DB_SEC_RETRIEVEDATA = 20,
        DB_SEC_WRITEDEF = 65548,
        DB_SEC_WRITEOWNER = 524288,
        DB_SEC_WRITESEC = 262144,
        DB_SINGLE = 6,
        DB_SORTARABIC = 267,
        DB_SORTCYRILLIC = 263,
        DB_SORTCZECH = 264,
        DB_SORTDUTCH = 259,
        DB_SORTGENERAL = 256,
        DB_SORTGREEK = 269,
        DB_SORTHEBREW = 268,
        DB_SORTHUNGARIAN = 265,
        DB_SORTICELANDIC = 262,
        DB_SORTNORWDAN = 261,
        DB_SORTPDXINTL = 4096,
        DB_SORTPDXNOR = 4098,
        DB_SORTPDXSWE = 4097,
        DB_SORTPOLISH = 266,
        DB_SORTSPANISH = 258,
        DB_SORTSWEDFIN = 260,
        DB_SORTTURKISH = 270,
        DB_SORTUNDEFINED = -1,
        DB_SQLPASSTHROUGH = 64,
        DB_SYSTEMOBJECT = -2147483646,
        DB_TABLE = 1,
        DB_TEXT = 10,
        DB_UNIQUE = 1,
        DB_UPDATABLEFIELD = 32,
        DB_VARIABLEFIELD = 2,
        DB_VERSION10 = 1,
        DB_VERSION11 = 8,
        DB_VERSION20 = 16,
        DELETE_CANCEL = 1,
        DELETE_OK = 0,
        DELETE_USER_CANCEL = 2,
        LB_CLOSE = 8,
        LB_END = 9,
        LB_GETCOLUMNCOUNT = 4,
        LB_GETCOLUMNWIDTH = 5,
        LB_GETFORMAT = 7,
        LB_GETROWCOUNT = 3,
        LB_GETVALUE = 6,
        LB_INITIALIZE = 0,
        LB_OPEN = 1,
        LEFT_BUTTON = 1,
        MIDDLE_BUTTON = 4,
        OBJSTATE_DIRTY = 2,
        OBJSTATE_NEW = 4,
        OBJSTATE_OPEN = 1,
        OLE_CHANGED = 0,
        OLE_CLOSED = 2,
        OLE_RELEASE = 5,
        OLE_RENAMED = 3,
        OLE_SAVED = 1,
        RIGHT_BUTTON = 2,
        SHIFT_MASK = 1,
        SYSCMD_ACCESSDIR = 9,
        SYSCMD_ACCESSVER = 7,
        SYSCMD_CLEARHELPTOPIC = 11,
        SYSCMD_CLEARSTATUS = 5,
        SYSCMD_GETOBJECTSTATE = 10,
        SYSCMD_INIFILE = 8,
        SYSCMD_INITMETER = 1,
        SYSCMD_REMOVEMETER = 3,
        SYSCMD_RUNTIME = 6,
        SYSCMD_SETSTATUS = 4,
        SYSCMD_UPDATEMETER = 2,
        V_CURRENCY = 6,
        V_DATE = 7,
        V_DOUBLE = 5,
        V_EMPTY = 0,
        V_INTEGER = 2,
        V_LONG = 3,
        V_NULL = 1,
        V_SINGLE = 4,
        V_STRING = 8,
    }

    const enum ProcKind {
        Get = 3,
        Let = 1,
        Proc = 0,
        Set = 2,
    }

    const enum RefKind {
        Project = 1,
        TypeLib = 0,
    }

    class _AccessProperty {
        private 'Access._AccessProperty_typekey': _AccessProperty;
        private constructor();
        public readonly Application: Application;
        public readonly Category: number;
        public readonly Inherited: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public Name: string;
        public readonly Parent: any;
        public readonly Properties: DAO.Properties;
        public Type: number;
        public Value: any;
    }

    class _CheckBoxInOption {
        private 'Access._CheckBoxInOption_typekey': _CheckBoxInOption;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OptionValue: number;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public TripleState: boolean;
        public Undo(): void;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class _ChildLabel {
        private 'Access._ChildLabel_typekey': _ChildLabel;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public readonly Application: Application;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomMargin: number;
        public BottomPadding: number;
        public Caption: string;
        public ControlName: string;
        public ControlTipText: string;
        public ControlType: number;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public HyperlinkAddress: string;
        public HyperlinkSubAddress: string;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftMargin: number;
        public LeftPadding: number;
        public LineSpacing: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public NumeralShapes: number;
        public OldBorderStyle: number;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public RightMargin: number;
        public RightPadding: number;
        public Section: number;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public readonly SmartTags: SmartTags;
        public SpecialEffect: number;
        public Tag: string;
        public Target: string;
        public TextAlign: number;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public Top: number;
        public TopMargin: number;
        public TopPadding: number;
        public Vertical: boolean;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class _ControlInReportEvents {
        private 'Access._ControlInReportEvents_typekey': _ControlInReportEvents;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public readonly Application: Application;
        public BottomPadding: number;
        public Column(Index: number, Row?: any): any;
        public readonly Controls: Children;
        public Dropdown(): void;
        public readonly Form: Form;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public IsMemberSafe(dispid: number): boolean;
        public ItemData(Index: number): any;
        public readonly ItemsSelected: _ItemsSelected;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public LeftPadding: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Object: any;
        public ObjectVerbs(Index: number): string;
        public readonly OldValue: any;
        public readonly Pages: Pages;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public readonly Report: Report;
        public Requery(): void;
        public RightPadding: number;
        public Selected(lRow: number): number;
        public SetFocus(): void;
        public SizeToFit(): void;
        public readonly SmartTags: SmartTags;
        public TopPadding: number;
        public Undo(): void;
        public VerticalAnchor: AcVerticalAnchor;
    }

    class _CustomControlInReport {
        private 'Access._CustomControlInReport_typekey': _CustomControlInReport;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public About: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public readonly Application: Application;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public Cancel: boolean;
        public Class: string;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public Custom: string;
        public Default: boolean;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public LpOleObject: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Object: any;
        public ObjectPalette: any;
        public ObjectVerbs(Index: number): string;
        public ObjectVerbsCount: number;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OLEClass: string;
        public OleData: any;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnUpdated: string;
        public OnUpdatedMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public Value: any;
        public VarOleObject: any;
        public Verb: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class _ItemsSelected {
        private 'Access._ItemsSelected_typekey': _ItemsSelected;
        private constructor();
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): number;
    }

    class _OptionButtonInOption {
        private 'Access._OptionButtonInOption_typekey': _OptionButtonInOption;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OptionValue: number;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public TripleState: boolean;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class _PageHdrFtrInReport {
        private 'Access._PageHdrFtrInReport_typekey': _PageHdrFtrInReport;
        private constructor();
        public _Name: string;
        public AlternateBackColor: number;
        public AlternateBackShade: number;
        public AlternateBackThemeColorIndex: number;
        public AlternateBackTint: number;
        public readonly Application: Application;
        public AutoHeight: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public CanGrow: boolean;
        public CanShrink: boolean;
        public readonly Controls: Children;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public ForceNewPage: number;
        public HasContinued: boolean;
        public Height: number;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public KeepTogether: boolean;
        public Name: string;
        public NewRowOrCol: number;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnFormat: string;
        public OnFormatMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnPaint: string;
        public OnPaintMacro: string;
        public OnPrint: string;
        public OnPrintMacro: string;
        public OnRetreat: string;
        public OnRetreatMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public RepeatSection: boolean;
        public SetTabOrder(): void;
        public SpecialEffect: number;
        public Tag: string;
        public Visible: boolean;
        public WillContinue: boolean;
    }

    class _SectionInReport {
        private 'Access._SectionInReport_typekey': _SectionInReport;
        private constructor();
        public _Name: string;
        public AlternateBackColor: number;
        public AlternateBackShade: number;
        public AlternateBackThemeColorIndex: number;
        public AlternateBackTint: number;
        public readonly Application: Application;
        public AutoHeight: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public CanGrow: boolean;
        public CanShrink: boolean;
        public readonly Controls: Children;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public ForceNewPage: number;
        public HasContinued: boolean;
        public Height: number;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public KeepTogether: boolean;
        public Name: string;
        public NewRowOrCol: number;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnFormat: string;
        public OnFormatMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnPaint: string;
        public OnPaintMacro: string;
        public OnPrint: string;
        public OnPrintMacro: string;
        public OnRetreat: string;
        public OnRetreatMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public RepeatSection: boolean;
        public SetTabOrder(): void;
        public SpecialEffect: number;
        public Tag: string;
        public Visible: boolean;
        public WillContinue: boolean;
    }

    class _ToggleButtonInOption {
        private 'Access._ToggleButtonInOption_typekey': _ToggleButtonInOption;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public Bevel: number;
        public BorderColor: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public Caption: string;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public Glow: number;
        public Goto(): void;
        public Gradient: number;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public HoverColor: number;
        public HoverForeColor: number;
        public HoverForeShade: number;
        public HoverForeThemeColorIndex: number;
        public HoverForeTint: number;
        public HoverShade: number;
        public HoverThemeColorIndex: number;
        public HoverTint: number;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public ObjectPalette: any;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OptionValue: number;
        public readonly Parent: any;
        public Picture: string;
        public PictureData: any;
        public PictureType: number;
        public PressedColor: number;
        public PressedForeColor: number;
        public PressedForeShade: number;
        public PressedForeThemeColorIndex: number;
        public PressedForeTint: number;
        public PressedShade: number;
        public PressedThemeColorIndex: number;
        public PressedTint: number;
        public readonly Properties: Properties;
        public QuickStyle: number;
        public QuickStyleMask: number;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public Shadow: number;
        public Shape: number;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SoftEdges: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public Top: number;
        public TopPadding: number;
        public TripleState: boolean;
        public Undo(): void;
        public UseTheme: boolean;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class AccessField {
        private 'Access.AccessField_typekey': AccessField;
        private constructor();
        public IsMemberSafe(dispid: number): boolean;
        public Value: any;
    }

    class AccessObject {
        private 'Access.AccessObject_typekey': AccessObject;
        private constructor();
        public readonly _Name: string;
        public readonly Attributes: number;
        public readonly CurrentView: AcCurrentView;
        public readonly DateCreated: VarDate;
        public readonly DateModified: VarDate;
        public FullName: string;
        public GetDependencyInfo(): DependencyInfo;
        public IsDependentUpon(ObjectType: AcObjectType, ObjectName: string): boolean;
        public readonly IsLoaded: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public readonly IsWeb: boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Properties: AccessObjectProperties;
        public readonly Type: AcObjectType;
    }

    class AccessObjectProperties {
        private 'Access.AccessObjectProperties_typekey': AccessObjectProperties;
        private constructor();
        public Add(PropertyName: string, Value: any): void;
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): AccessObjectProperty;
        public readonly Parent: any;
        public Remove(Item: any): void;
    }

    class AccessObjectProperty {
        private 'Access.AccessObjectProperty_typekey': AccessObjectProperty;
        private constructor();
        public readonly _Value: any;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public Value: any;
    }

    class AdditionalData {
        private 'Access.AdditionalData_typekey': AdditionalData;
        private constructor();
        public Add(var_0: string): AdditionalData;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): AdditionalData;
        public Name: string;
    }

    class AllDataAccessPages {
        private 'Access.AllDataAccessPages_typekey': AllDataAccessPages;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllDatabaseDiagrams {
        private 'Access.AllDatabaseDiagrams_typekey': AllDatabaseDiagrams;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllForms {
        private 'Access.AllForms_typekey': AllForms;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllFunctions {
        private 'Access.AllFunctions_typekey': AllFunctions;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllMacros {
        private 'Access.AllMacros_typekey': AllMacros;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllModules {
        private 'Access.AllModules_typekey': AllModules;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllQueries {
        private 'Access.AllQueries_typekey': AllQueries;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllReports {
        private 'Access.AllReports_typekey': AllReports;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllStoredProcedures {
        private 'Access.AllStoredProcedures_typekey': AllStoredProcedures;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllTables {
        private 'Access.AllTables_typekey': AllTables;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class AllViews {
        private 'Access.AllViews_typekey': AllViews;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): AccessObject;
        public readonly Parent: any;
    }

    class Application {
        private 'Access.Application_typekey': Application;
        private constructor();
        public AccessError(ErrorNumber: any): any;
        public AddAutoCorrect(ChangeFrom: string, ChangeTo: string): void;
        public AddToFavorites(): void;
        public readonly ADOConnectString: string;
        public readonly AnswerWizard: Office.AnswerWizard;
        public readonly Application: Application;
        public AppLoadString(id: number): any;
        public readonly Assistance: Office.IAssistance;
        public readonly Assistant: Office.Assistant;
        public readonly AutoCorrect: AutoCorrect;
        public AutomationSecurity: Office.MsoAutomationSecurity;
        public BeginUndoable(Hwnd: number): void;
        public readonly BrokenReference: boolean;
        public readonly Build: number;
        public BuildCriteria(Field: string, FieldType: number, Expression: string): string;
        public BuilderString(): any;
        public CloseCurrentDatabase(): void;
        public readonly CodeContextObject: any;
        public readonly CodeData: CodeData;
        public CodeDb(): DAO.Database;
        public readonly CodeProject: CodeProject;
        public ColumnHistory(TableName: string, ColumnName: string, queryString: string): string;
        public readonly COMAddIns: Office.COMAddIns;
        public readonly CommandBars: Office.CommandBars;

        /** @param boolean [LogFile=false] */
        public CompactRepair(SourceFile: string, DestinationFile: string, LogFile?: boolean): boolean;
        public ConvertAccessProject(SourceFilename: string, DestinationFilename: string, DestinationFileFormat: AcFileFormat): void;
        public CreateAccessProject(filepath: string, Connect?: any): void;
        public CreateAdditionalData(): AdditionalData;

        /** @param Access.AcSection [Section=0] */
        public CreateControl(FormName: string, ControlType: AcControlType, Section?: AcSection, Parent?: any, ColumnName?: any, Left?: any, Top?: any, Width?: any, Height?: any): Control;
        public CreateControlEx(
            FormName: string, ControlType: AcControlType, Section: AcSection, Parent: string, ControlSource: string, Left: number, Top: number, Width: number, Height: number): Control;
        public CreateControlExOld(
            FormName: string, ControlType: AcControlType, Section: AcSection, Parent: string, ControlSource: string, Left: number, Top: number, Width: number, Height: number): Control;

        /** @param Access.AcSection [Section=0] */
        public CreateControlOld(FormName: string, ControlType: AcControlType, Section?: AcSection, Parent?: any, ColumnName?: any, Left?: any, Top?: any, Width?: any, Height?: any): Control;

        /** @param boolean [CreateNewFile=true] */
        public CreateDataAccessPage(FileName: any, CreateNewFile?: boolean): DataAccessPage;
        public CreateForm(Database?: any, FormTemplate?: any): Form;
        public CreateGroupLevel(ReportName: string, Expression: string, Header: number, Footer: number): number;

        /**
         * @param string [Path=' ']
         * @param string [Name=' ']
         * @param string [Company=' ']
         * @param string [WorkgroupID=' ']
         * @param boolean [Replace=false]
         */
        public CreateNewWorkgroupFile(Path?: string, Name?: string, Company?: string, WorkgroupID?: string, Replace?: boolean): void;
        public CreateReport(Database?: any, ReportTemplate?: any): Report;

        /** @param Access.AcSection [Section=0] */
        public CreateReportControl(ReportName: string, ControlType: AcControlType, Section?: AcSection, Parent?: any, ColumnName?: any, Left?: any, Top?: any, Width?: any, Height?: any): Control;
        public CreateReportControlEx(
            ReportName: string, ControlType: AcControlType, Section: AcSection, Parent: string, ControlName: string, Left: number, Top: number, Width: number, Height: number): Control;
        public CreateReportControlExOld(
            ReportName: string, ControlType: AcControlType, Section: AcSection, Parent: string, ControlName: string, Left: number, Top: number, Width: number, Height: number): Control;

        /** @param Access.AcSection [Section=0] */
        public CreateReportControlOld(ReportName: string, ControlType: AcControlType, Section?: AcSection, Parent?: any, ColumnName?: any, Left?: any, Top?: any, Width?: any, Height?: any): Control;
        public readonly CurrentData: CurrentData;
        public CurrentDb(): DAO.Database;
        public readonly CurrentObjectName: string;
        public readonly CurrentObjectType: AcObjectType;
        public readonly CurrentProject: CurrentProject;
        public CurrentUser(): string;
        public CurrentWebUser(DisplayOption: AcWebUserDisplay): any;
        public CurrentWebUserGroups(DisplayOption: AcWebUserGroupsDisplay): any;
        public readonly DataAccessPages: DataAccessPages;
        public DAvg(Expr: string, Domain: string, Criteria?: any): any;
        public readonly DBEngine: DAO.DBEngine;
        public DCount(Expr: string, Domain: string, Criteria?: any): any;
        public DDEExecute(ChanNum: any, Command: string): void;
        public DDEInitiate(Application: string, Topic: string): any;
        public DDEPoke(ChanNum: any, Item: string, Data: string): void;
        public DDERequest(ChanNum: any, Item: string): string;
        public DDETerminate(ChanNum: any): void;
        public DDETerminateAll(): void;
        public readonly DefaultWebOptions: DefaultWebOptions;
        public DefaultWorkspaceClone(): DAO.Workspace;
        public DelAutoCorrect(ChangeFrom: string): void;
        public DeleteControl(FormName: string, ControlName: string): void;
        public DeleteReportControl(ReportName: string, ControlName: string): void;
        public DFirst(Expr: string, Domain: string, Criteria?: any): any;
        public DirtyObject(ObjectType: AcObjectType, ObjectName: string): void;
        public DLast(Expr: string, Domain: string, Criteria?: any): any;
        public DLookup(Expr: string, Domain: string, Criteria?: any): any;
        public DMax(Expr: string, Domain: string, Criteria?: any): any;
        public DMin(Expr: string, Domain: string, Criteria?: any): any;
        public readonly DoCmd: DoCmd;
        public DStDev(Expr: string, Domain: string, Criteria?: any): any;
        public DStDevP(Expr: string, Domain: string, Criteria?: any): any;
        public DSum(Expr: string, Domain: string, Criteria?: any): any;
        public DVar(Expr: string, Domain: string, Criteria?: any): any;
        public DVarP(Expr: string, Domain: string, Criteria?: any): any;

        /** @param string [bstrStatusBarText=''] */
        public Echo(EchoOn: number, bstrStatusBarText?: string): void;
        public EuroConvert(Number: number, SourceCurrency: string, TargetCurrency: string, FullPrecision?: any, TriangulationPrecision?: any): number;
        public Eval(StringExpr: string): any;

        /**
         * @param boolean [SelectedRecords=false]
         * @param number [FromPage=1]
         * @param number [ToPage=-1]
         */
        public ExportCustomFixedFormat(
            ExternalExporter: any, OutputFileName: string, ObjectName: string, ObjectType: AcOutputObjectType, SelectedRecords?: boolean, FromPage?: number, ToPage?: number): void;
        public ExportNavigationPane(Path: string): void;

        /**
         * @param string [DataTarget='']
         * @param string [SchemaTarget='']
         * @param string [PresentationTarget='']
         * @param string [ImageTarget='']
         * @param Access.AcExportXMLEncoding [Encoding=0]
         * @param Access.AcExportXMLOtherFlags [OtherFlags=0]
         * @param string [WhereCondition='']
         */
        public ExportXML(
            ObjectType: AcExportXMLObjectType, DataSource: string, DataTarget?: string, SchemaTarget?: string, PresentationTarget?: string, ImageTarget?: string,
            Encoding?: AcExportXMLEncoding, OtherFlags?: AcExportXMLOtherFlags, WhereCondition?: string, AdditionalData?: any): void;

        /**
         * @param string [DataTarget='']
         * @param string [SchemaTarget='']
         * @param string [PresentationTarget='']
         * @param string [ImageTarget='']
         * @param Access.AcExportXMLEncoding [Encoding=0]
         * @param number [OtherFlags=0]
         */
        public ExportXMLOld(
            ObjectType: AcExportXMLObjectType, DataSource: string, DataTarget?: string, SchemaTarget?: string, PresentationTarget?: string, ImageTarget?: string,
            Encoding?: AcExportXMLEncoding, OtherFlags?: number): void;
        public FeatureInstall: Office.MsoFeatureInstall;
        public FileDialog(dialogType: Office.MsoFileDialogType): Office.FileDialog;
        public readonly FileSearch: Office.FileSearch;

        /**
         * @param string [SubAddress='']
         * @param boolean [NewWindow=false]
         * @param boolean [AddHistory=true]
         * @param Office.MsoExtraInfoMethod [Method=0]
         * @param string [HeaderInfo='']
         */
        public FollowHyperlink(Address: string, SubAddress?: string, NewWindow?: boolean, AddHistory?: boolean, ExtraInfo?: any, Method?: Office.MsoExtraInfoMethod, HeaderInfo?: string): void;
        public readonly Forms: Forms;
        public GetHiddenAttribute(ObjectType: AcObjectType, ObjectName: string): boolean;
        public GetOption(OptionName: string): any;
        public GUIDFromString(String: any): any;
        public HtmlEncode(PlainText: any, Length?: any): string;
        public hWndAccessApp(): number;

        /** @param Access.AcHyperlinkPart [Part=0] */
        public HyperlinkPart(Hyperlink: any, Part?: AcHyperlinkPart): string;

        /** @param boolean [fAppendOnly=false] */
        public ImportNavigationPane(Path: string, fAppendOnly?: boolean): void;

        /** @param Access.AcImportXMLOption [ImportOptions=1] */
        public ImportXML(DataSource: string, ImportOptions?: AcImportXMLOption): void;
        public InsertText(Text: string, ModuleName: string): void;
        public InstantiateTemplate(Path: string): void;
        public IsClient(): boolean;
        public readonly IsCompiled: boolean;
        public IsCurrentWebUserInGroup(GroupNameOrID: any): boolean;
        public IsMemberSafe(dispid: number): boolean;
        public readonly LanguageSettings: Office.LanguageSettings;
        public LoadCustomUI(CustomUIName: string, CustomUIXML: string): void;
        public LoadFromAXL(ObjectType: AcObjectType, ObjectName: string, FileName: string): void;
        public LoadFromText(ObjectType: AcObjectType, ObjectName: string, FileName: string): void;
        public LoadPicture(FileName: string): any;
        public readonly LocalVars: LocalVars;
        public readonly MacroError: MacroError;
        public MenuBar: string;
        public readonly Modules: Modules;
        public readonly MsoDebugOptions: Office.MsoDebugOptions;
        public readonly Name: string;
        public NewAccessProject(filepath: string, Connect?: any): void;

        /**
         * @param Access.AcNewDatabaseFormat [FileFormat=0]
         * @param string [SiteAddress='']
         * @param string [ListID='']
         */
        public NewCurrentDatabase(filepath: string, FileFormat?: AcNewDatabaseFormat, Template?: any, SiteAddress?: string, ListID?: string): void;
        public NewCurrentDatabaseOld(filepath: string): void;
        public readonly NewFileTaskPane: Office.NewFile;
        public Nz(Value: any, ValueIfNull?: any): any;

        /** @param boolean [Exclusive=false] */
        public OpenAccessProject(filepath: string, Exclusive?: boolean): void;

        /**
         * @param boolean [Exclusive=false]
         * @param string [bstrPassword='']
         */
        public OpenCurrentDatabase(filepath: string, Exclusive?: boolean, bstrPassword?: string): void;

        /** @param boolean [Exclusive=false] */
        public OpenCurrentDatabaseOld(filepath: string, Exclusive?: boolean): void;
        public readonly Parent: any;
        public PlainText(RichText: any, Length?: any): string;
        public Printer: Printer;
        public readonly Printers: Printers;
        public readonly ProductCode: string;

        /** @param Access.AcQuitOption [Option=1] */
        public Quit(Option?: AcQuitOption): void;
        public readonly References: References;
        public RefreshDatabaseWindow(): void;
        public RefreshTitleBar(): void;
        public ReloadAddIns(): void;
        public ReplaceModule(objtyp: number, ModuleName: string, FileName: string, token: number): void;
        public readonly Reports: Reports;
        public readonly ReturnVars: ReturnVars;
        public Run(
            Procedure: string, Arg1?: any, Arg2?: any, Arg3?: any, Arg4?: any, Arg5?: any, Arg6?: any, Arg7?: any, Arg8?: any, Arg9?: any, Arg10?: any, Arg11?: any,
            Arg12?: any, Arg13?: any, Arg14?: any, Arg15?: any, Arg16?: any, Arg17?: any, Arg18?: any, Arg19?: any, Arg20?: any, Arg21?: any, Arg22?: any, Arg23?: any,
            Arg24?: any, Arg25?: any, Arg26?: any, Arg27?: any, Arg28?: any, Arg29?: any, Arg30?: any): any;
        public RunCommand(Command: AcCommand): void;
        public SaveAsAXL(ObjectType: AcObjectType, ObjectName: string, FileName: string): void;
        public SaveAsTemplate(
            Path: string, Title: string, IconPath: string, CoreTable: string, Category: string, PreviewPath?: any, Description?: any, InstantiationForm?: any,
            ApplicationPart?: any, IncludeData?: any, Variation?: any): void;
        public SaveAsText(ObjectType: AcObjectType, ObjectName: string, FileName: string): void;
        public readonly Screen: Screen;
        public SetDefaultWorkgroupFile(Path: string): void;
        public SetHiddenAttribute(ObjectType: AcObjectType, ObjectName: string, fHidden: boolean): void;
        public SetOption(OptionName: string, Setting: any): void;
        public SetUndoRecording(yesno: number): void;
        public ShortcutMenuBar: string;
        public StringFromGUID(Guid: any): any;
        public SysCmd(Action: AcSysCmdAction, Argument2?: any, Argument3?: any): any;
        public readonly TempVars: TempVars;

        /**
         * @param boolean [WellFormedXMLOutput=false]
         * @param Access.AcTransformXMLScriptOption [ScriptOption=1]
         */
        public TransformXML(DataSource: string, TransformSource: string, OutputTarget: string, WellFormedXMLOutput?: boolean, ScriptOption?: AcTransformXMLScriptOption): void;
        public UserControl: boolean;
        public readonly VBE: VBIDE.VBE;
        public readonly Version: string;
        public readonly VGXFrameInterval: any;
        public Visible: boolean;
        public readonly WebServices: WebServices;
        public readonly WizHook: WizHook;
    }

    class Attachment {
        private 'Access.Attachment_typekey': Attachment;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public readonly AttachmentCount: number;
        public AutoLabel: boolean;
        public Back(): void;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public CurrentAttachment: number;
        public DefaultPicture: string;
        public DefaultPictureType: number;
        public DisplayAs: AcDisplayAs;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FileData(var_0?: any): any;
        public FileName(var_0?: any): string;
        public FileType(var_0?: any): string;
        public FileURL(var_0?: any): string;
        public Forward(): void;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnAttachmentCurrent: string;
        public OnAttachmentCurrentMacro: string;
        public OnChange: string;
        public OnChangeMacro: string;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnDirty: string;
        public OnDirtyMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Parent: any;
        public PictureAlignment: number;
        public PictureDisp(var_0?: any): any;
        public PictureSizeMode: number;
        public PictureTiling: boolean;
        public readonly Properties: Properties;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class AutoCorrect {
        private 'Access.AutoCorrect_typekey': AutoCorrect;
        private constructor();
        public DisplayAutoCorrectOptions: boolean;
        public IsMemberSafe(dispid: number): boolean;
    }

    class BoundObjectFrame {
        private 'Access.BoundObjectFrame_typekey': BoundObjectFrame;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public Action: number;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoActivate: number;
        public AutoLabel: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public Class: string;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DisplayType: boolean;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public LpOleObject: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Object: any;
        public ObjectPalette: any;
        public ObjectVerbs(Index: number): string;
        public ObjectVerbsCount: number;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OLEType: number;
        public OLETypeAllowed: number;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnUpdated: string;
        public OnUpdatedMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Requery(): void;
        public RightPadding: number;
        public Scaling: number;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeMode: number;
        public SizeToFit(): void;
        public SourceDoc: string;
        public SourceItem: string;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public UpdateOptions: number;
        public Value: any;
        public VarOleObject: any;
        public Verb: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class CheckBox {
        private 'Access.CheckBox_typekey': CheckBox;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OptionValue: number;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public TripleState: boolean;
        public Undo(): void;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class Children {
        private 'Access.Children_typekey': Children;
        private constructor();
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): any;
    }

    class Class {
        private 'Access.Class_typekey': Class;
        private constructor();
    }

    class CodeData {
        private 'Access.CodeData_typekey': CodeData;
        private constructor();
        public readonly AllDatabaseDiagrams: AllDatabaseDiagrams;
        public readonly AllFunctions: AllFunctions;
        public readonly AllQueries: AllQueries;
        public readonly AllStoredProcedures: AllStoredProcedures;
        public readonly AllTables: AllTables;
        public readonly AllViews: AllViews;
        public IsMemberSafe(dispid: number): boolean;
    }

    class CodeProject {
        private 'Access.CodeProject_typekey': CodeProject;
        private constructor();
        public readonly AccessConnection: ADODB.Connection;
        public AddSharedImage(SharedImageName: string, FileName: string): void;
        public readonly AllDataAccessPages: AllDataAccessPages;
        public readonly AllForms: AllForms;
        public readonly AllMacros: AllMacros;
        public readonly AllModules: AllModules;
        public readonly AllReports: AllReports;
        public readonly Application: Application;
        public readonly BaseConnectionString: string;
        public CloseConnection(): void;
        public readonly Connection: ADODB.Connection;
        public readonly FileFormat: AcFileFormat;
        public readonly FullName: string;
        public readonly ImportExportSpecifications: ImportExportSpecifications;
        public readonly IsConnected: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public readonly IsTrusted: boolean;
        public readonly IsWeb: boolean;
        public readonly Name: string;
        public OpenConnection(BaseConnectionString?: any, UserID?: any, Password?: any): void;
        public readonly Parent: any;
        public readonly Path: string;
        public readonly ProjectType: AcProjectType;
        public readonly Properties: AccessObjectProperties;
        public RemovePersonalInformation: boolean;
        public readonly Resources: SharedResources;
        public UpdateDependencyInfo(): void;
        public readonly WebSite: string;
    }

    class ComboBox {
        private 'Access.ComboBox_typekey': ComboBox;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AddItem(Item: string, Index?: any): void;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public AllowAutoCorrect: boolean;
        public AllowedText: number;
        public AllowValueListEdits: boolean;
        public readonly Application: Application;
        public AutoExpand: boolean;
        public AutoLabel: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomMargin: number;
        public BottomPadding: number;
        public BoundColumn: number;
        public CanGrow: boolean;
        public CanShrink: boolean;
        public Coltyp: number;
        public Column(Index: number, Row?: any): any;
        public ColumnCount: number;
        public ColumnHeads: boolean;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ColumnWidths: string;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DecimalPlaces: number;
        public DefaultValue: string;
        public DisplayAsHyperlink: AcDisplayAsHyperlink;
        public DisplayWhen: number;
        public Dropdown(): void;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public Format: string;
        public readonly FormatConditions: FormatConditions;
        public FormatPictureText: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public IMEHold: boolean;
        public IMEMode: AcImeMode;
        public IMESentenceMode: AcImeSentenceMode;
        public InheritValueList: boolean;
        public InputMask: string;
        public InSelection: boolean;
        public IsHyperlink: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public ItemData(Index: number): any;
        public readonly ItemsSelected: _ItemsSelected;
        public KeyboardLanguage: number;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftMargin: number;
        public LeftPadding: number;
        public LimitToList: boolean;
        public ListCount: number;
        public ListIndex: number;
        public ListItemsEditForm: string;
        public ListRows: number;
        public ListWidth: string;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public NumeralShapes: number;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnChange: string;
        public OnChangeMacro: string;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnDirty: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnNotInList: string;
        public OnNotInListMacro: string;
        public OnUndo: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public Recordset: any;
        public RemoveItem(Index: any): void;
        public Requery(): void;
        public RightMargin: number;
        public RightPadding: number;
        public RowSource: string;
        public RowSourceType: string;
        public ScrollBarAlign: number;
        public Section: number;
        public Selected(lRow: number): number;
        public SelLength: number;
        public SelStart: number;
        public SelText: string;
        public SeparatorCharacters: AcSeparatorCharacters;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public ShowOnlyRowSourceValues: boolean;
        public SizeToFit(): void;
        public readonly SmartTags: SmartTags;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Target: string;
        public Text: string;
        public TextAlign: number;
        public TextAlignGeneral: number;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public Top: number;
        public TopMargin: number;
        public TopPadding: number;
        public Undo(): void;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class CommandButton {
        private 'Access.CommandButton_typekey': CommandButton;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdateMacro: string;
        public Alignment: number;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public AutoRepeat: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdateMacro: string;
        public Bevel: number;
        public BorderColor: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public Cancel: boolean;
        public Caption: string;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlTipText: string;
        public ControlType: number;
        public CursorOnHover: AcCursorOnHover;
        public Default: boolean;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public Glow: number;
        public Goto(): void;
        public Gradient: number;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public HoverColor: number;
        public HoverForeColor: number;
        public HoverForeShade: number;
        public HoverForeThemeColorIndex: number;
        public HoverForeTint: number;
        public HoverShade: number;
        public HoverThemeColorIndex: number;
        public HoverTint: number;
        public readonly Hyperlink: Hyperlink;
        public HyperlinkAddress: string;
        public HyperlinkSubAddress: string;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public ObjectPalette: any;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnPush: string;
        public readonly Parent: any;
        public Picture: string;
        public PictureCaptionArrangement: AcPictureCaptionArrangement;
        public PictureData: any;
        public PictureType: number;
        public PressedColor: number;
        public PressedForeColor: number;
        public PressedForeShade: number;
        public PressedForeThemeColorIndex: number;
        public PressedForeTint: number;
        public PressedShade: number;
        public PressedThemeColorIndex: number;
        public PressedTint: number;
        public readonly Properties: Properties;
        public QuickStyle: number;
        public QuickStyleMask: number;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public Shadow: number;
        public Shape: number;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SoftEdges: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Target: string;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public Top: number;
        public TopPadding: number;
        public Transparent: boolean;
        public UseTheme: boolean;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class Control {
        private 'Access.Control_typekey': Control;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public readonly Application: Application;
        public BottomPadding: number;
        public Column(Index: number, Row?: any): any;
        public readonly Controls: Children;
        public Dropdown(): void;
        public readonly Form: Form;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public IsMemberSafe(dispid: number): boolean;
        public ItemData(Index: number): any;
        public readonly ItemsSelected: _ItemsSelected;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public LeftPadding: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Object: any;
        public ObjectVerbs(Index: number): string;
        public readonly OldValue: any;
        public readonly Pages: Pages;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public readonly Report: Report;
        public Requery(): void;
        public RightPadding: number;
        public Selected(lRow: number): number;
        public SetFocus(): void;
        public SizeToFit(): void;
        public readonly SmartTags: SmartTags;
        public TopPadding: number;
        public Undo(): void;
        public VerticalAnchor: AcVerticalAnchor;
    }

    class Controls {
        private 'Access.Controls_typekey': Controls;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): any;
        public readonly Parent: any;
    }

    class CurrentData {
        private 'Access.CurrentData_typekey': CurrentData;
        private constructor();
        public readonly AllDatabaseDiagrams: AllDatabaseDiagrams;
        public readonly AllFunctions: AllFunctions;
        public readonly AllQueries: AllQueries;
        public readonly AllStoredProcedures: AllStoredProcedures;
        public readonly AllTables: AllTables;
        public readonly AllViews: AllViews;
        public IsMemberSafe(dispid: number): boolean;
    }

    class CurrentProject {
        private 'Access.CurrentProject_typekey': CurrentProject;
        private constructor();
        public readonly AccessConnection: ADODB.Connection;
        public AddSharedImage(SharedImageName: string, FileName: string): void;
        public readonly AllDataAccessPages: AllDataAccessPages;
        public readonly AllForms: AllForms;
        public readonly AllMacros: AllMacros;
        public readonly AllModules: AllModules;
        public readonly AllReports: AllReports;
        public readonly Application: Application;
        public readonly BaseConnectionString: string;
        public CloseConnection(): void;
        public readonly Connection: ADODB.Connection;
        public readonly FileFormat: AcFileFormat;
        public readonly FullName: string;
        public readonly ImportExportSpecifications: ImportExportSpecifications;
        public readonly IsConnected: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public readonly IsTrusted: boolean;
        public readonly IsWeb: boolean;
        public readonly Name: string;
        public OpenConnection(BaseConnectionString?: any, UserID?: any, Password?: any): void;
        public readonly Parent: any;
        public readonly Path: string;
        public readonly ProjectType: AcProjectType;
        public readonly Properties: AccessObjectProperties;
        public RemovePersonalInformation: boolean;
        public readonly Resources: SharedResources;
        public UpdateDependencyInfo(): void;
        public readonly WebSite: string;
    }

    class CustomControl {
        private 'Access.CustomControl_typekey': CustomControl;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public About: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public readonly Application: Application;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public Cancel: boolean;
        public Class: string;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public Custom: string;
        public Default: boolean;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public LpOleObject: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Object: any;
        public ObjectPalette: any;
        public ObjectVerbs(Index: number): string;
        public ObjectVerbsCount: number;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OLEClass: string;
        public OleData: any;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnUpdated: string;
        public OnUpdatedMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public Value: any;
        public VarOleObject: any;
        public Verb: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class DataAccessPage {
        private 'Access.DataAccessPage_typekey': DataAccessPage;
        private constructor();
        public readonly _Name: string;
        public readonly Application: Application;
        public ApplyTheme(ThemeName: string): void;
        public ConnectionString: string;
        public readonly CurrentSelection: any;
        public readonly CurrentView: number;
        public readonly Document: any;
        public readonly FieldListConnection: any;
        public IsMemberSafe(dispid: number): boolean;
        public readonly MailEnvelope: Office.MsoEnvelope;
        public readonly MSODSC: any;
        public readonly Name: string;
        public readonly Parent: any;
        public RemovePersonalInformation: boolean;
        public Tag: string;
        public Visible: boolean;
        public readonly WebOptions: WebOptions;
        public readonly WindowHeight: number;
        public readonly WindowWidth: number;
    }

    class DataAccessPages {
        private 'Access.DataAccessPages_typekey': DataAccessPages;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): DataAccessPage;
        public readonly Parent: any;
    }

    class DefaultWebOptions {
        private 'Access.DefaultWebOptions_typekey': DefaultWebOptions;
        private constructor();
        public AlwaysSaveInDefaultEncoding: boolean;
        public readonly Application: Application;
        public CheckIfOfficeIsHTMLEditor: boolean;
        public DownloadComponents: boolean;
        public Encoding: Office.MsoEncoding;
        public readonly FolderSuffix: string;
        public FollowedHyperlinkColor: AcColorIndex;
        public HyperlinkColor: AcColorIndex;
        public IsMemberSafe(dispid: number): boolean;
        public LocationOfComponents: string;
        public OrganizeInFolder: boolean;
        public readonly Parent: any;
        public TargetBrowser: Office.MsoTargetBrowser;
        public UnderlineHyperlinks: boolean;
        public UseLongFileNames: boolean;
    }

    class DependencyInfo {
        private 'Access.DependencyInfo_typekey': DependencyInfo;
        private constructor();
        public readonly Dependants: DependencyObjects;
        public readonly Dependencies: DependencyObjects;
        public readonly InsufficientPermissions: DependencyObjects;
        public IsMemberSafe(dispid: number): boolean;
        public readonly OutOfDateObjects: DependencyObjects;
        public readonly Parent: any;
        public readonly UnsupportedObjects: DependencyObjects;
    }

    class DependencyObjects {
        private 'Access.DependencyObjects_typekey': DependencyObjects;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): AccessObject;
        public readonly Parent: any;
    }

    class DoCmd {
        private 'Access.DoCmd_typekey': DoCmd;
        private constructor();
        public AddMenu(MenuName: any, MenuMacroName: any, StatusBarText?: any): void;
        public ApplyFilter(FilterName?: any, WhereCondition?: any, ControlName?: any): void;
        public ApplyFilterOld0(FilterName?: any, WhereCondition?: any): void;
        public Beep(): void;

        /** @param Access.AcFormOpenDataMode [DataMode=1] */
        public BrowseTo(ObjectType: AcBrowseToObjectType, ObjectName: any, PathtoSubformControl: any, WhereCondition: any, Page: any, DataMode?: AcFormOpenDataMode): void;
        public CancelEvent(): void;
        public ClearMacroError(): void;

        /**
         * @param Access.AcObjectType [ObjectType=-1]
         * @param Access.AcCloseSave [Save=0]
         */
        public Close(ObjectType?: AcObjectType, ObjectName?: any, Save?: AcCloseSave): void;
        public CloseDatabase(): void;
        public CopyDatabaseFile(DatabaseFileName: any, OverwriteExistingFile?: any, DisconnectAllUsers?: any): void;

        /** @param Access.AcObjectType [SourceObjectType=-1] */
        public CopyObject(DestinationDatabase: any, NewName: any, SourceObjectType?: AcObjectType, SourceObjectName?: any): void;

        /** @param Access.AcObjectType [ObjectType=-1] */
        public DeleteObject(ObjectType?: AcObjectType, ObjectName?: any): void;
        public DoMenuItem(MenuBar: any, MenuName: any, Command: any, Subcommand?: any, Version?: any): void;
        public Echo(EchoOn: any, StatusBarText?: any): void;
        public FindNext(): void;

        /**
         * @param Access.AcFindMatch [Match=1]
         * @param Access.AcSearchDirection [Search=2]
         * @param Access.AcFindField [OnlyCurrentField=-1]
         */
        public FindRecord(FindWhat: any, Match?: AcFindMatch, MatchCase?: any, Search?: AcSearchDirection, SearchAsFormatted?: any, OnlyCurrentField?: AcFindField, FindFirst?: any): void;
        public GoToControl(ControlName: any): void;
        public GoToPage(PageNumber: any, Right?: any, Down?: any): void;

        /**
         * @param Access.AcDataObjectType [ObjectType=-1]
         * @param Access.AcRecord [Record=1]
         */
        public GoToRecord(ObjectType?: AcDataObjectType, ObjectName?: any, Record?: AcRecord, Offset?: any): void;
        public Hourglass(HourglassOn: any): void;
        public LockNavigationPane(Lock: any): void;
        public Maximize(): void;
        public Minimize(): void;
        public MoveSize(Right?: any, Down?: any, Width?: any, Height?: any): void;
        public NavigateTo(Category?: any, Group?: any): void;

        /** @param Access.AcDataAccessPageView [View=0] */
        public OpenDataAccessPage(DataAccessPageName: any, View?: AcDataAccessPageView): void;
        public OpenDiagram(DiagramName: any): void;

        /**
         * @param Access.AcFormView [View=0]
         * @param Access.AcFormOpenDataMode [DataMode=-1]
         * @param Access.AcWindowMode [WindowMode=0]
         */
        public OpenForm(FormName: any, View?: AcFormView, FilterName?: any, WhereCondition?: any, DataMode?: AcFormOpenDataMode, WindowMode?: AcWindowMode, OpenArgs?: any): void;

        /**
         * @param Access.AcView [View=0]
         * @param Access.AcOpenDataMode [DataMode=1]
         */
        public OpenFunction(FunctionName: any, View?: AcView, DataMode?: AcOpenDataMode): void;
        public OpenModule(ModuleName?: any, ProcedureName?: any): void;

        /**
         * @param Access.AcView [View=0]
         * @param Access.AcOpenDataMode [DataMode=1]
         */
        public OpenQuery(QueryName: any, View?: AcView, DataMode?: AcOpenDataMode): void;

        /**
         * @param Access.AcView [View=0]
         * @param Access.AcWindowMode [WindowMode=0]
         */
        public OpenReport(ReportName: any, View?: AcView, FilterName?: any, WhereCondition?: any, WindowMode?: AcWindowMode, OpenArgs?: any): void;

        /** @param Access.AcView [View=0] */
        public OpenReportOld0(ReportName: any, View?: AcView, FilterName?: any, WhereCondition?: any): void;

        /**
         * @param Access.AcView [View=0]
         * @param Access.AcOpenDataMode [DataMode=1]
         */
        public OpenStoredProcedure(ProcedureName: any, View?: AcView, DataMode?: AcOpenDataMode): void;

        /**
         * @param Access.AcView [View=0]
         * @param Access.AcOpenDataMode [DataMode=1]
         */
        public OpenTable(TableName: any, View?: AcView, DataMode?: AcOpenDataMode): void;

        /**
         * @param Access.AcView [View=0]
         * @param Access.AcOpenDataMode [DataMode=1]
         */
        public OpenView(ViewName: any, View?: AcView, DataMode?: AcOpenDataMode): void;

        /** @param Access.AcExportQuality [OutputQuality=0] */
        public OutputTo(ObjectType: AcOutputObjectType, ObjectName: any, OutputFormat: any, OutputFile: any, AutoStart: any, TemplateFile: any, Encoding: any, OutputQuality?: AcExportQuality): void;
        public OutputToOld0(ObjectType: AcOutputObjectType, ObjectName?: any, OutputFormat?: any, OutputFile?: any, AutoStart?: any, TemplateFile?: any): void;
        public OutputToOld1(ObjectType: AcOutputObjectType, ObjectName?: any, OutputFormat?: any, OutputFile?: any, AutoStart?: any, TemplateFile?: any, Encoding?: any): void;

        /**
         * @param Access.AcPrintRange [PrintRange=0]
         * @param Access.AcPrintQuality [PrintQuality=0]
         */
        public PrintOut(PrintRange?: AcPrintRange, PageFrom?: any, PageTo?: any, PrintQuality?: AcPrintQuality, Copies?: any, CollateCopies?: any): void;

        /** @param Access.AcQuitOption [Options=1] */
        public Quit(Options?: AcQuitOption): void;
        public RefreshRecord(): void;

        /** @param Access.AcObjectType [ObjectType=-1] */
        public Rename(NewName: any, ObjectType?: AcObjectType, OldName?: any): void;

        /** @param Access.AcObjectType [ObjectType=-1] */
        public RepaintObject(ObjectType?: AcObjectType, ObjectName?: any): void;
        public Requery(ControlName?: any): void;
        public Restore(): void;
        public RunCommand(Command: AcCommand): void;
        public RunDataMacro(MacroName: any): void;
        public RunMacro(MacroName: any, RepeatCount?: any, RepeatExpression?: any): void;
        public RunSavedImportExport(SavedImportExportName: any): void;
        public RunSQL(SQLStatement: any, UseTransaction?: any): void;

        /** @param Access.AcObjectType [ObjectType=-1] */
        public Save(ObjectType?: AcObjectType, ObjectName?: any): void;

        /**
         * @param Access.AcDataObjectType [ObjectType=-1]
         * @param Access.AcRecord [Record=2]
         */
        public SearchForRecord(ObjectType?: AcDataObjectType, ObjectName?: any, Record?: AcRecord, WhereCondition?: any): void;
        public SelectObject(ObjectType: AcObjectType, ObjectName?: any, InDatabaseWindow?: any): void;

        /** @param Access.AcSendObjectType [ObjectType=-1] */
        public SendObject(
            ObjectType?: AcSendObjectType, ObjectName?: any, OutputFormat?: any, To?: any, Cc?: any, Bcc?: any, Subject?: any, MessageText?: any, EditMessage?: any, TemplateFile?: any): void;
        public SetDisplayedCategories(Show: any, Category?: any): void;
        public SetFilter(FilterName?: any, WhereCondition?: any, ControlName?: any): void;
        public SetMenuItem(MenuIndex: any, CommandIndex?: any, SubcommandIndex?: any, Flag?: any): void;
        public SetOrderBy(OrderBy: any, ControlName?: any): void;
        public SetParameter(Name: any, Expression: any): void;

        /** @param Access.AcProperty [Property=0] */
        public SetProperty(ControlName: any, Property?: AcProperty, Value?: any): void;
        public SetWarnings(WarningsOn: any): void;
        public ShowAllRecords(): void;

        /** @param Access.AcShowToolbar [Show=0] */
        public ShowToolbar(ToolbarName: any, Show?: AcShowToolbar): void;
        public SingleStep(): void;

        /**
         * @param Access.AcDataTransferType [TransferType=0]
         * @param Access.AcObjectType [ObjectType=0]
         */
        public TransferDatabase(
            TransferType?: AcDataTransferType, DatabaseType?: any, DatabaseName?: any, ObjectType?: AcObjectType, Source?: any, Destination?: any, StructureOnly?: any, StoreLogin?: any): void;
        public TransferSharePointList(TransferType: AcSharePointListTransferType, SiteAddress: any, ListID: any, ViewID?: any, TableName?: any, GetLookupDisplayValues?: any): void;

        /**
         * @param Access.AcDataTransferType [TransferType=0]
         * @param Access.AcSpreadSheetType [SpreadsheetType=10]
         */
        public TransferSpreadsheet(TransferType?: AcDataTransferType, SpreadsheetType?: AcSpreadSheetType, TableName?: any, FileName?: any, HasFieldNames?: any, Range?: any, UseOA?: any): void;
        public TransferSQLDatabase(Server: any, Database: any, UseTrustedConnection?: any, Login?: any, Password?: any, TransferCopyData?: any): void;

        /** @param Access.AcTextTransferType [TransferType=0] */
        public TransferText(TransferType?: AcTextTransferType, SpecificationName?: any, TableName?: any, FileName?: any, HasFieldNames?: any, HTMLTableName?: any, CodePage?: any): void;
    }

    class EmptyCell {
        private 'Access.EmptyCell_typekey': EmptyCell;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public readonly Application: Application;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BottomPadding: number;
        public ControlName: string;
        public ControlType: number;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public RightPadding: number;
        public Section: number;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public StatusBarText: string;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class Entities {
        private 'Access.Entities_typekey': Entities;
        private constructor();
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): Entity;
        public readonly Parent: any;
    }

    class Entity {
        private 'Access.Entity_typekey': Entity;
        private constructor();
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public readonly Operations: Operations;
        public readonly Parent: any;
    }

    class Form {
        private 'Access.Form_typekey': Form;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public acHiddenCurrentPage: number;
        public readonly ActiveControl: Control;
        public AfterBeginTransaction: string;
        public AfterBeginTransactionMacro: string;
        public AfterCommitTransaction: string;
        public AfterCommitTransactionMacro: string;
        public AfterDelConfirm: string;
        public AfterDelConfirmMacro: string;
        public AfterFinalRender: string;
        public AfterFinalRenderMacro: string;
        public AfterInsert: string;
        public AfterInsertMacro: string;
        public AfterLayout: string;
        public AfterLayoutMacro: string;
        public AfterRender: string;
        public AfterRenderMacro: string;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public AllowAdditions: boolean;
        public AllowDatasheetView: boolean;
        public AllowDeletions: boolean;
        public AllowDesignChanges: boolean;
        public AllowEditing: boolean;
        public AllowEdits: boolean;
        public AllowFilters: boolean;
        public AllowFormView: boolean;
        public AllowLayoutView: boolean;
        public AllowPivotChartView: boolean;
        public AllowPivotTableView: boolean;
        public AllowUpdating: number;
        public readonly Application: Application;
        public AutoCenter: boolean;
        public AutoResize: boolean;
        public BatchUpdates: boolean;
        public BeforeBeginTransaction: string;
        public BeforeBeginTransactionMacro: string;
        public BeforeCommitTransaction: string;
        public BeforeCommitTransactionMacro: string;
        public BeforeDelConfirm: string;
        public BeforeDelConfirmMacro: string;
        public BeforeInsert: string;
        public BeforeInsertMacro: string;
        public BeforeQuery: string;
        public BeforeQueryMacro: string;
        public BeforeRender: string;
        public BeforeRenderMacro: string;
        public BeforeScreenTip: string;
        public BeforeScreenTipMacro: string;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BeginBatchEdit: string;
        public BeginBatchEditMacro: string;
        public Bookmark: any;
        public BorderStyle: number;
        public Caption: string;
        public readonly ChartSpace: any;
        public CloseButton: boolean;
        public CommandBeforeExecute: string;
        public CommandBeforeExecuteMacro: string;
        public CommandChecked: string;
        public CommandCheckedMacro: string;
        public CommandEnabled: string;
        public CommandEnabledMacro: string;
        public CommandExecute: string;
        public CommandExecuteMacro: string;
        public CommitOnClose: number;
        public CommitOnNavigation: boolean;
        public readonly ConnectControl: Control;
        public ConnectSynch: number;
        public ControlBox: boolean;
        public readonly Controls: Controls;
        public Count: number;
        public CurrentRecord: number;
        public CurrentSectionLeft: number;
        public CurrentSectionTop: number;
        public CurrentView: number;
        public Cycle: number;
        public DataChange: string;
        public DataChangeMacro: string;
        public DataEntry: boolean;
        public DataSetChange: string;
        public DataSetChangeMacro: string;
        public DatasheetAlternateBackColor: number;
        public DatasheetBackColor: number;
        public DatasheetBorderLineStyle: number;
        public DatasheetCellsEffect: number;
        public DatasheetColumnHeaderUnderlineStyle: number;
        public DatasheetFontHeight: number;
        public DatasheetFontItalic: boolean;
        public DatasheetFontName: string;
        public DatasheetFontUnderline: boolean;
        public DatasheetFontWeight: number;
        public DatasheetForeColor: number;
        public DatasheetGridlinesBehavior: number;
        public DatasheetGridlinesColor: number;
        public DefaultControl(ControlType: number): Control;
        public DefaultEditing: number;
        public DefaultView: number;
        public Dirty: boolean;
        public DisplayOnSharePointSite: number;
        public DividingLines: boolean;
        public readonly Dynaset: any;
        public FastLaserPrinting: boolean;
        public FetchDefaults: boolean;
        public Filter: string;
        public FilterOn: boolean;
        public FilterOnLoad: boolean;
        public FitToScreen: boolean;
        public readonly Form: Form;
        public FormName: string;
        public FrozenColumns: number;

        /**
         * @param number [Right=0]
         * @param number [Down=0]
         */
        public GoToPage(PageNumber: number, Right?: number, Down?: number): void;
        public GridX: number;
        public GridY: number;
        public HasModule: boolean;
        public HelpContextId: number;
        public HelpFile: string;
        public HorizontalDatasheetGridlineStyle: number;
        public Hwnd: number;
        public InputParameters: string;
        public InsideHeight: number;
        public InsideWidth: number;
        public KeyPreview: boolean;
        public LayoutForPrint: boolean;
        public LogicalPageHeight: number;
        public LogicalPageWidth: number;
        public MaxButton: boolean;
        public MaxRecButton: boolean;
        public MaxRecords: number;
        public MenuBar: string;
        public MinButton: boolean;
        public MinMaxButtons: number;
        public Modal: boolean;
        public readonly Module: Module;
        public MouseWheel: string;
        public MouseWheelMacro: string;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Moveable: boolean;
        public Name: string;
        public NavigationButtons: boolean;
        public NavigationCaption: string;
        public readonly NewRecord: number;
        public OnActivate: string;
        public OnActivateMacro: string;
        public OnApplyFilter: string;
        public OnApplyFilterMacro: string;
        public OnClick: string;
        public OnClickMacro: string;
        public OnClose: string;
        public OnCloseMacro: string;
        public OnConnect: string;
        public OnConnectMacro: string;
        public OnCurrent: string;
        public OnCurrentMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnDeactivate: string;
        public OnDeactivateMacro: string;
        public OnDelete: string;
        public OnDeleteMacro: string;
        public OnDirty: string;
        public OnDirtyMacro: string;
        public OnDisconnect: string;
        public OnDisconnectMacro: string;
        public OnError: string;
        public OnErrorMacro: string;
        public OnFilter: string;
        public OnFilterMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnInsert: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLoad: string;
        public OnLoadMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMenu: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnOpen: string;
        public OnOpenMacro: string;
        public OnRecordExit: string;
        public OnRecordExitMacro: string;
        public OnResize: string;
        public OnResizeMacro: string;
        public OnTimer: string;
        public OnTimerMacro: string;
        public OnUndo: string;
        public OnUndoMacro: string;
        public OnUnload: string;
        public OnUnloadMacro: string;
        public OpenArgs: any;
        public OrderBy: string;
        public OrderByOn: boolean;
        public OrderByOnLoad: boolean;
        public Orientation: number;
        public Page: number;
        public Pages: number;
        public Painting: boolean;
        public PaintPalette: any;
        public PaletteSource: string;
        public readonly Parent: any;
        public Picture: string;
        public PictureAlignment: number;
        public PictureData: any;
        public PicturePalette: any;
        public PictureSizeMode: number;
        public PictureTiling: boolean;
        public PictureType: number;
        public readonly PivotTable: any;
        public PivotTableChange: string;
        public PivotTableChangeMacro: string;
        public PopUp: boolean;
        public Printer: Printer;
        public readonly Properties: Properties;
        public PrtDevMode: any;
        public PrtDevNames: any;
        public PrtMip: any;
        public Query: string;
        public QueryMacro: string;
        public Recalc(): void;
        public RecordLocks: number;
        public RecordSelectors: boolean;
        public Recordset: any;
        public readonly RecordsetClone: any;
        public RecordsetType: number;
        public RecordSource: string;
        public RecordSourceQualifier: string;
        public Refresh(): void;
        public Repaint(): void;
        public Requery(): void;
        public ResyncCommand: string;
        public RibbonName: string;
        public RollbackTransaction: string;
        public RollbackTransactionMacro: string;
        public RowHeight: number;
        public ScrollBars: number;
        public Section(Index: any): Section;
        public SectionOld(Index: any): Section;
        public SelectionChange: string;
        public SelectionChangeMacro: string;
        public SelHeight: number;
        public SelLeft: number;
        public SelTop: number;
        public SelWidth: number;
        public ServerFilter: string;
        public ServerFilterByForm: boolean;
        public SetFocus(): void;
        public ShortcutMenu: boolean;
        public ShortcutMenuBar: string;
        public ShowGrid: boolean;
        public SplitFormDatasheet: AcSplitFormDatasheet;
        public SplitFormOrientation: AcSplitFormOrientation;
        public SplitFormPrinting: AcSplitFormPrinting;
        public SplitFormSize: number;
        public SplitFormSplitterBar: boolean;
        public SplitFormSplitterBarSave: boolean;
        public SubdatasheetExpanded: boolean;
        public SubdatasheetHeight: number;
        public TabularCharSet: number;
        public TabularFamily: number;
        public Tag: string;
        public TimerInterval: number;
        public Toolbar: string;
        public Undo(): void;
        public UndoBatchEdit: string;
        public UndoBatchEditMacro: string;
        public UniqueTable: string;
        public UseDefaultPrinter: boolean;
        public VerticalDatasheetGridlineStyle: number;
        public ViewChange: string;
        public ViewChangeMacro: string;
        public ViewsAllowed: number;
        public Visible: boolean;
        public WhatsThisButton: boolean;
        public Width: number;
        public WindowHeight: number;
        public readonly WindowLeft: number;
        public readonly WindowTop: number;
        public WindowWidth: number;
        public ZoomControl: number;
    }

    class FormatCondition {
        private 'Access.FormatCondition_typekey': FormatCondition;
        private constructor();
        public BackColor: number;
        public Delete(): void;
        public Enabled: boolean;
        public readonly Expression1: string;
        public readonly Expression2: string;
        public FontBold: boolean;
        public FontItalic: boolean;
        public FontUnderline: boolean;
        public ForeColor: number;
        public IsMemberSafe(dispid: number): boolean;
        public LongestBarLimit: AcFormatBarLimits;
        public LongestBarValue: string;

        /** @param Access.AcFormatConditionOperator [Operator=0] */
        public Modify(Type: AcFormatConditionType, Operator?: AcFormatConditionOperator, Expression1?: any, Expression2?: any): void;
        public readonly Operator: AcFormatConditionOperator;
        public ShortestBarLimit: AcFormatBarLimits;
        public ShortestBarValue: string;
        public ShowBarOnly: boolean;
        public readonly Type: AcFormatConditionType;
    }

    class FormatConditions {
        private 'Access.FormatConditions_typekey': FormatConditions;
        private constructor();

        /** @param Access.AcFormatConditionOperator [Operator=0] */
        public Add(Type: AcFormatConditionType, Operator?: AcFormatConditionOperator, Expression1?: any, Expression2?: any): FormatCondition;
        public readonly Application: Application;
        public readonly Count: number;
        public Delete(): void;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): FormatCondition;
        public readonly Parent: any;
    }

    class FormOld {
        private 'Access.FormOld_typekey': FormOld;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public acHiddenCurrentPage: number;
        public readonly ActiveControl: Control;
        public AfterDelConfirm: string;
        public AfterInsert: string;
        public AfterUpdate: string;
        public AllowAdditions: boolean;
        public AllowDeletions: boolean;
        public AllowDesignChanges: boolean;
        public AllowEditing: boolean;
        public AllowEdits: boolean;
        public AllowFilters: boolean;
        public AllowUpdating: number;
        public readonly Application: Application;
        public AutoCenter: boolean;
        public AutoResize: boolean;
        public BeforeDelConfirm: string;
        public BeforeInsert: string;
        public BeforeUpdate: string;
        public Bookmark: any;
        public BorderStyle: number;
        public Caption: string;
        public CloseButton: boolean;
        public readonly ConnectControl: Control;
        public ConnectSynch: number;
        public ControlBox: boolean;
        public readonly Controls: Controls;
        public Count: number;
        public CurrentRecord: number;
        public CurrentSectionLeft: number;
        public CurrentSectionTop: number;
        public CurrentView: number;
        public Cycle: number;
        public DataEntry: boolean;
        public DatasheetBackColor: number;
        public DatasheetCellsEffect: number;
        public DatasheetFontHeight: number;
        public DatasheetFontItalic: boolean;
        public DatasheetFontName: string;
        public DatasheetFontUnderline: boolean;
        public DatasheetFontWeight: number;
        public DatasheetForeColor: number;
        public DatasheetGridlinesBehavior: number;
        public DatasheetGridlinesColor: number;
        public DefaultControl(ControlType: number): Control;
        public DefaultEditing: number;
        public DefaultView: number;
        public Dirty: boolean;
        public DividingLines: boolean;
        public readonly Dynaset: any;
        public FastLaserPrinting: boolean;
        public Filter: string;
        public FilterOn: boolean;
        public readonly Form: Form;
        public FormName: string;
        public FrozenColumns: number;

        /**
         * @param number [Right=0]
         * @param number [Down=0]
         */
        public GoToPage(PageNumber: number, Right?: number, Down?: number): void;
        public GridX: number;
        public GridY: number;
        public HasModule: boolean;
        public HelpContextId: number;
        public HelpFile: string;
        public Hwnd: number;
        public InputParameters: string;
        public InsideHeight: number;
        public InsideWidth: number;
        public KeyPreview: boolean;
        public LayoutForPrint: boolean;
        public LogicalPageHeight: number;
        public LogicalPageWidth: number;
        public MaxButton: boolean;
        public MaxRecButton: boolean;
        public MaxRecords: number;
        public MenuBar: string;
        public MinButton: boolean;
        public MinMaxButtons: number;
        public Modal: boolean;
        public readonly Module: Module;
        public Name: string;
        public NavigationButtons: boolean;
        public readonly NewRecord: number;
        public OnActivate: string;
        public OnApplyFilter: string;
        public OnClick: string;
        public OnClose: string;
        public OnCurrent: string;
        public OnDblClick: string;
        public OnDeactivate: string;
        public OnDelete: string;
        public OnDirty: string;
        public OnError: string;
        public OnFilter: string;
        public OnGotFocus: string;
        public OnInsert: string;
        public OnKeyDown: string;
        public OnKeyPress: string;
        public OnKeyUp: string;
        public OnLoad: string;
        public OnLostFocus: string;
        public OnMenu: string;
        public OnMouseDown: string;
        public OnMouseMove: string;
        public OnMouseUp: string;
        public OnOpen: string;
        public OnResize: string;
        public OnTimer: string;
        public OnUnload: string;
        public OpenArgs: any;
        public OrderBy: string;
        public OrderByOn: boolean;
        public Orientation: number;
        public Page: number;
        public Pages: number;
        public Painting: boolean;
        public PaintPalette: any;
        public PaletteSource: string;
        public readonly Parent: any;
        public Picture: string;
        public PictureAlignment: number;
        public PictureData: any;
        public PicturePalette: any;
        public PictureSizeMode: number;
        public PictureTiling: boolean;
        public PictureType: number;
        public PopUp: boolean;
        public readonly Properties: Properties;
        public PrtDevMode: any;
        public PrtDevNames: any;
        public PrtMip: any;
        public Recalc(): void;
        public RecordLocks: number;
        public RecordSelectors: boolean;
        public Recordset: any;
        public readonly RecordsetClone: any;
        public RecordsetType: number;
        public RecordSource: string;
        public Refresh(): void;
        public Repaint(): void;
        public Requery(): void;
        public ResyncCommand: string;
        public RowHeight: number;
        public ScrollBars: number;
        public Section(Index: any): Section;
        public SelHeight: number;
        public SelLeft: number;
        public SelTop: number;
        public SelWidth: number;
        public ServerFilter: string;
        public ServerFilterByForm: boolean;
        public SetFocus(): void;
        public ShortcutMenu: boolean;
        public ShortcutMenuBar: string;
        public ShowGrid: boolean;
        public SubdatasheetExpanded: boolean;
        public SubdatasheetHeight: number;
        public TabularCharSet: number;
        public TabularFamily: number;
        public Tag: string;
        public TimerInterval: number;
        public Toolbar: string;
        public Undo(): void;
        public UniqueTable: string;
        public ViewsAllowed: number;
        public Visible: boolean;
        public WhatsThisButton: boolean;
        public Width: number;
        public WindowHeight: number;
        public WindowWidth: number;
        public ZoomControl: number;
    }

    class FormOldV10 {
        private 'Access.FormOldV10_typekey': FormOldV10;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public acHiddenCurrentPage: number;
        public readonly ActiveControl: Control;
        public AfterBeginTransaction: string;
        public AfterCommitTransaction: string;
        public AfterDelConfirm: string;
        public AfterFinalRender: string;
        public AfterInsert: string;
        public AfterLayout: string;
        public AfterRender: string;
        public AfterUpdate: string;
        public AllowAdditions: boolean;
        public AllowDatasheetView: boolean;
        public AllowDeletions: boolean;
        public AllowDesignChanges: boolean;
        public AllowEditing: boolean;
        public AllowEdits: boolean;
        public AllowFilters: boolean;
        public AllowFormView: boolean;
        public AllowPivotChartView: boolean;
        public AllowPivotTableView: boolean;
        public AllowUpdating: number;
        public readonly Application: Application;
        public AutoCenter: boolean;
        public AutoResize: boolean;
        public BatchUpdates: boolean;
        public BeforeBeginTransaction: string;
        public BeforeCommitTransaction: string;
        public BeforeDelConfirm: string;
        public BeforeInsert: string;
        public BeforeQuery: string;
        public BeforeRender: string;
        public BeforeScreenTip: string;
        public BeforeUpdate: string;
        public BeginBatchEdit: string;
        public Bookmark: any;
        public BorderStyle: number;
        public Caption: string;
        public readonly ChartSpace: any;
        public CloseButton: boolean;
        public CommandBeforeExecute: string;
        public CommandChecked: string;
        public CommandEnabled: string;
        public CommandExecute: string;
        public CommitOnClose: number;
        public CommitOnNavigation: boolean;
        public readonly ConnectControl: Control;
        public ConnectSynch: number;
        public ControlBox: boolean;
        public readonly Controls: Controls;
        public Count: number;
        public CurrentRecord: number;
        public CurrentSectionLeft: number;
        public CurrentSectionTop: number;
        public CurrentView: number;
        public Cycle: number;
        public DataChange: string;
        public DataEntry: boolean;
        public DataSetChange: string;
        public DatasheetBackColor: number;
        public DatasheetBorderLineStyle: number;
        public DatasheetCellsEffect: number;
        public DatasheetColumnHeaderUnderlineStyle: number;
        public DatasheetFontHeight: number;
        public DatasheetFontItalic: boolean;
        public DatasheetFontName: string;
        public DatasheetFontUnderline: boolean;
        public DatasheetFontWeight: number;
        public DatasheetForeColor: number;
        public DatasheetGridlinesBehavior: number;
        public DatasheetGridlinesColor: number;
        public DefaultControl(ControlType: number): Control;
        public DefaultEditing: number;
        public DefaultView: number;
        public Dirty: boolean;
        public DividingLines: boolean;
        public readonly Dynaset: any;
        public FastLaserPrinting: boolean;
        public FetchDefaults: boolean;
        public Filter: string;
        public FilterOn: boolean;
        public readonly Form: Form;
        public FormName: string;
        public FrozenColumns: number;

        /**
         * @param number [Right=0]
         * @param number [Down=0]
         */
        public GoToPage(PageNumber: number, Right?: number, Down?: number): void;
        public GridX: number;
        public GridY: number;
        public HasModule: boolean;
        public HelpContextId: number;
        public HelpFile: string;
        public HorizontalDatasheetGridlineStyle: number;
        public Hwnd: number;
        public InputParameters: string;
        public InsideHeight: number;
        public InsideWidth: number;
        public KeyPreview: boolean;
        public LayoutForPrint: boolean;
        public LogicalPageHeight: number;
        public LogicalPageWidth: number;
        public MaxButton: boolean;
        public MaxRecButton: boolean;
        public MaxRecords: number;
        public MenuBar: string;
        public MinButton: boolean;
        public MinMaxButtons: number;
        public Modal: boolean;
        public readonly Module: Module;
        public MouseWheel: string;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Moveable: boolean;
        public Name: string;
        public NavigationButtons: boolean;
        public readonly NewRecord: number;
        public OnActivate: string;
        public OnApplyFilter: string;
        public OnClick: string;
        public OnClose: string;
        public OnConnect: string;
        public OnCurrent: string;
        public OnDblClick: string;
        public OnDeactivate: string;
        public OnDelete: string;
        public OnDirty: string;
        public OnDisconnect: string;
        public OnError: string;
        public OnFilter: string;
        public OnGotFocus: string;
        public OnInsert: string;
        public OnKeyDown: string;
        public OnKeyPress: string;
        public OnKeyUp: string;
        public OnLoad: string;
        public OnLostFocus: string;
        public OnMenu: string;
        public OnMouseDown: string;
        public OnMouseMove: string;
        public OnMouseUp: string;
        public OnOpen: string;
        public OnRecordExit: string;
        public OnResize: string;
        public OnTimer: string;
        public OnUndo: string;
        public OnUnload: string;
        public OpenArgs: any;
        public OrderBy: string;
        public OrderByOn: boolean;
        public Orientation: number;
        public Page: number;
        public Pages: number;
        public Painting: boolean;
        public PaintPalette: any;
        public PaletteSource: string;
        public readonly Parent: any;
        public Picture: string;
        public PictureAlignment: number;
        public PictureData: any;
        public PicturePalette: any;
        public PictureSizeMode: number;
        public PictureTiling: boolean;
        public PictureType: number;
        public readonly PivotTable: any;
        public PivotTableChange: string;
        public PopUp: boolean;
        public Printer: Printer;
        public readonly Properties: Properties;
        public PrtDevMode: any;
        public PrtDevNames: any;
        public PrtMip: any;
        public Query: string;
        public Recalc(): void;
        public RecordLocks: number;
        public RecordSelectors: boolean;
        public Recordset: any;
        public readonly RecordsetClone: any;
        public RecordsetType: number;
        public RecordSource: string;
        public RecordSourceQualifier: string;
        public Refresh(): void;
        public Repaint(): void;
        public Requery(): void;
        public ResyncCommand: string;
        public RollbackTransaction: string;
        public RowHeight: number;
        public ScrollBars: number;
        public Section(Index: any): Section;
        public SelectionChange: string;
        public SelHeight: number;
        public SelLeft: number;
        public SelTop: number;
        public SelWidth: number;
        public ServerFilter: string;
        public ServerFilterByForm: boolean;
        public SetFocus(): void;
        public ShortcutMenu: boolean;
        public ShortcutMenuBar: string;
        public ShowGrid: boolean;
        public SubdatasheetExpanded: boolean;
        public SubdatasheetHeight: number;
        public TabularCharSet: number;
        public TabularFamily: number;
        public Tag: string;
        public TimerInterval: number;
        public Toolbar: string;
        public Undo(): void;
        public UndoBatchEdit: string;
        public UniqueTable: string;
        public UseDefaultPrinter: boolean;
        public VerticalDatasheetGridlineStyle: number;
        public ViewChange: string;
        public ViewsAllowed: number;
        public Visible: boolean;
        public WhatsThisButton: boolean;
        public Width: number;
        public WindowHeight: number;
        public readonly WindowLeft: number;
        public readonly WindowTop: number;
        public WindowWidth: number;
        public ZoomControl: number;
    }

    class Forms {
        private 'Access.Forms_typekey': Forms;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): Form;
        public readonly Parent: any;
    }

    class GroupLevel {
        private 'Access.GroupLevel_typekey': GroupLevel;
        private constructor();
        public readonly Application: Application;
        public ControlSource: string;
        public GroupFooter: boolean;
        public GroupHeader: boolean;
        public GroupInterval: number;
        public GroupOn: number;
        public IsMemberSafe(dispid: number): boolean;
        public KeepTogether: number;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public SortOrder: boolean;
    }

    class Hyperlink {
        private 'Access.Hyperlink_typekey': Hyperlink;
        private constructor();
        public Address: string;
        public AddToFavorites(): void;
        public CreateNewDocument(FileName: string, EditNow: boolean, Overwrite: boolean): void;
        public EmailSubject: string;

        /**
         * @param boolean [NewWindow=false]
         * @param boolean [AddHistory=true]
         * @param Office.MsoExtraInfoMethod [Method=0]
         * @param string [HeaderInfo='']
         */
        public Follow(NewWindow?: boolean, AddHistory?: boolean, ExtraInfo?: any, Method?: Office.MsoExtraInfoMethod, HeaderInfo?: string): void;
        public IsMemberSafe(dispid: number): boolean;
        public ScreenTip: string;
        public SubAddress: string;
        public TextToDisplay: string;
    }

    class Image {
        private 'Access.Image_typekey': Image;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public readonly Application: Application;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlTipText: string;
        public ControlType: number;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public HyperlinkAddress: string;
        public HyperlinkSubAddress: string;
        public ImageHeight: number;
        public ImageWidth: number;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public ObjectPalette: any;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Parent: any;
        public Picture: string;
        public PictureAlignment: number;
        public PictureData: any;
        public PictureTiling: boolean;
        public PictureType: number;
        public readonly Properties: Properties;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeMode: number;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public Tag: string;
        public Target: string;
        public Top: number;
        public TopPadding: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class ImportExportSpecification {
        private 'Access.ImportExportSpecification_typekey': ImportExportSpecification;
        private constructor();
        public readonly Application: Application;
        public Delete(): void;
        public Description: string;
        public Execute(Prompt?: any): void;
        public IsMemberSafe(dispid: number): boolean;
        public Name: string;
        public readonly Parent: any;
        public XML: string;
    }

    class ImportExportSpecifications {
        private 'Access.ImportExportSpecifications_typekey': ImportExportSpecifications;
        private constructor();
        public Add(Name: string, SpecificationDefinition: string): ImportExportSpecification;
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): ImportExportSpecification;
        public readonly Parent: any;
    }

    class Label {
        private 'Access.Label_typekey': Label;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public readonly Application: Application;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomMargin: number;
        public BottomPadding: number;
        public Caption: string;
        public ControlName: string;
        public ControlTipText: string;
        public ControlType: number;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public HyperlinkAddress: string;
        public HyperlinkSubAddress: string;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftMargin: number;
        public LeftPadding: number;
        public LineSpacing: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public NumeralShapes: number;
        public OldBorderStyle: number;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public RightMargin: number;
        public RightPadding: number;
        public Section: number;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public readonly SmartTags: SmartTags;
        public SpecialEffect: number;
        public Tag: string;
        public Target: string;
        public TextAlign: number;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public Top: number;
        public TopMargin: number;
        public TopPadding: number;
        public Vertical: boolean;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class Line {
        private 'Access.Line_typekey': Line;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public readonly Application: Application;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public ControlName: string;
        public ControlType: number;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public Height: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public Left: number;
        public LineSlant: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Section: number;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public Tag: string;
        public Top: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class ListBox {
        private 'Access.ListBox_typekey': ListBox;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AddItem(Item: string, Index?: any): void;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public AllowValueListEdits: boolean;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public BoundColumn: number;
        public Column(Index: number, Row?: any): any;
        public ColumnCount: number;
        public ColumnHeads: boolean;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ColumnWidths: string;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public IMEHold: boolean;
        public IMEMode: AcImeMode;
        public IMESentenceMode: AcImeSentenceMode;
        public InheritValueList: boolean;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public ItemData(Index: number): any;
        public readonly ItemsSelected: _ItemsSelected;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public ListCount: number;
        public ListIndex: number;
        public ListItemsEditForm: string;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public MultiSelect: number;
        public Name: string;
        public NumeralShapes: number;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public Recordset: any;
        public RemoveItem(Index: any): void;
        public Requery(): void;
        public RightPadding: number;
        public RowSource: string;
        public RowSourceType: string;
        public ScrollBarAlign: number;
        public Section: number;
        public Selected(lRow: number): number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public ShowOnlyRowSourceValues: boolean;
        public SizeToFit(): void;
        public readonly SmartTags: SmartTags;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public TextAlign: number;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public Top: number;
        public TopPadding: number;
        public Undo(): void;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class LocalVar {
        private 'Access.LocalVar_typekey': LocalVar;
        private constructor();
        public _Value: any;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public Value: any;
    }

    class LocalVars {
        private 'Access.LocalVars_typekey': LocalVars;
        private constructor();
        public Add(Name: string, Value: any): void;
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): LocalVar;
        public readonly Parent: any;
    }

    class MacroError {
        private 'Access.MacroError_typekey': MacroError;
        private constructor();
        public readonly ActionName: string;
        public readonly Arguments: string;
        public readonly Condition: string;
        public readonly Description: string;
        public IsMemberSafe(dispid: number): boolean;
        public readonly MacroName: string;
        public readonly Number: number;
    }

    class Module {
        private 'Access.Module_typekey': Module;
        private constructor();
        public AddFromFile(FileName: string): void;
        public AddFromString(String: string): void;
        public readonly Application: Application;
        public readonly CountOfDeclarationLines: number;
        public readonly CountOfLines: number;
        public CreateEventProc(EventName: string, ObjectName: string): number;
        public DeleteLines(StartLine: number, Count: number): void;

        /**
         * @param boolean [WholeWord=false]
         * @param boolean [MatchCase=false]
         * @param boolean [PatternSearch=false]
         */
        public Find(Target: string, StartLine: number, StartColumn: number, EndLine: number, EndColumn: number, WholeWord?: boolean, MatchCase?: boolean, PatternSearch?: boolean): boolean;
        public InsertLines(Line: number, String: string): void;
        public InsertText(Text: string): void;
        public IsMemberSafe(dispid: number): boolean;
        public Lines(Line: number, NumLines: number): string;
        public Name: string;
        public readonly Parent: any;
        public ProcBodyLine(ProcName: string, ProcKind: VBIDE.vbext_ProcKind): number;
        public ProcCountLines(ProcName: string, ProcKind: VBIDE.vbext_ProcKind): number;
        public ProcOfLine(Line: number, pprockind: VBIDE.vbext_ProcKind): string;
        public ProcStartLine(ProcName: string, ProcKind: VBIDE.vbext_ProcKind): number;
        public ReplaceLine(Line: number, String: string): void;
        public readonly Type: AcModuleType;
    }

    class Modules {
        private 'Access.Modules_typekey': Modules;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): Module;
        public readonly Parent: any;
    }

    class NavigationButton {
        private 'Access.NavigationButton_typekey': NavigationButton;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdateMacro: string;
        public Alignment: number;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public AutoRepeat: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdateMacro: string;
        public Bevel: number;
        public BorderColor: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public Caption: string;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlTipText: string;
        public ControlType: number;
        public CursorOnHover: AcCursorOnHover;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public Glow: number;
        public Goto(): void;
        public Gradient: number;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public HoverColor: number;
        public HoverForeColor: number;
        public HoverForeShade: number;
        public HoverForeThemeColorIndex: number;
        public HoverForeTint: number;
        public HoverShade: number;
        public HoverThemeColorIndex: number;
        public HoverTint: number;
        public readonly Hyperlink: Hyperlink;
        public HyperlinkAddress: string;
        public HyperlinkSubAddress: string;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public readonly Left: number;
        public LeftPadding: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public NavigationTargetName: string;
        public NavigationWhereClause: string;
        public ObjectPalette: any;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnPush: string;
        public readonly Parent: any;
        public readonly ParentTab: NavigationButton;
        public Picture: string;
        public PictureCaptionArrangement: AcPictureCaptionArrangement;
        public PictureData: any;
        public PictureType: number;
        public PressedColor: number;
        public PressedForeColor: number;
        public PressedForeShade: number;
        public PressedForeThemeColorIndex: number;
        public PressedForeTint: number;
        public PressedShade: number;
        public PressedThemeColorIndex: number;
        public PressedTint: number;
        public readonly Properties: Properties;
        public QuickStyle: number;
        public QuickStyleMask: number;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public Shadow: number;
        public Shape: number;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SoftEdges: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Target: string;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public readonly Top: number;
        public TopPadding: number;
        public Transparent: boolean;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class NavigationControl {
        private 'Access.NavigationControl_typekey': NavigationControl;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AllowedText: number;
        public readonly Application: Application;
        public AutoTab: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlTipText: string;
        public ControlType: number;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FilterLookup: number;
        public readonly FormatConditions: FormatConditions;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public KeyboardLanguage: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public LineSpacing: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public NumeralShapes: number;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public ScrollBarAlign: number;
        public Section: number;
        public readonly SelectedTab: NavigationButton;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public readonly SmartTags: SmartTags;
        public Span: AcNavigationSpan;
        public SpecialEffect: number;
        public StatusBarText: string;
        public SubForm: string;
        public TabIndex: number;
        public readonly Tabs: Children;
        public TabStop: boolean;
        public Tag: string;
        public Target: string;
        public Top: number;
        public TopPadding: number;
        public Undo(): void;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class ObjectFrame {
        private 'Access.ObjectFrame_typekey': ObjectFrame;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public Action: number;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoActivate: number;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public Class: string;
        public ColumnCount: number;
        public ColumnHeads: boolean;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlTipText: string;
        public ControlType: number;
        public Data: number;
        public DisplayType: boolean;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public Item: string;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public LinkChildFields: string;
        public LinkMasterFields: string;
        public Locked: boolean;
        public LpOleObject: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Object: any;
        public ObjectPalette: any;
        public ObjectVerbs(Index: number): string;
        public ObjectVerbsCount: number;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OLEClass: string;
        public OleData: any;
        public OLEType: number;
        public OLETypeAllowed: number;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnUpdated: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Requery(): void;
        public RightPadding: number;
        public RowSource: string;
        public RowSourceType: string;
        public Scaling: number;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeMode: number;
        public SizeToFit(): void;
        public SourceDoc: string;
        public SourceItem: string;
        public SourceObject: string;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public UpdateMethod: number;
        public UpdateOptions: number;
        public VarOleObject: any;
        public Verb: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class Operation {
        private 'Access.Operation_typekey': Operation;
        private constructor();

        /** @param string [bstrParameters=''] */
        public Execute(bstrParameters?: string): any;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly WSParameters: WSParameters;
    }

    class Operations {
        private 'Access.Operations_typekey': Operations;
        private constructor();
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): Operation;
        public readonly Parent: any;
    }

    class OptionButton {
        private 'Access.OptionButton_typekey': OptionButton;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OptionValue: number;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public TripleState: boolean;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class OptionGroup {
        private 'Access.OptionGroup_typekey': OptionGroup;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public Left: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Requery(): void;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public Undo(): void;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class Page {
        private 'Access.Page_typekey': Page;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public readonly Application: Application;
        public Caption: string;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlTipText: string;
        public ControlType: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public Height: number;
        public HelpContextId: number;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public Left: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public PageIndex: number;
        public readonly Parent: any;
        public Picture: string;
        public PictureData: any;
        public PictureType: number;
        public readonly Properties: Properties;
        public Requery(): void;
        public Section: number;
        public SetFocus(): void;
        public SetTabOrder(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public StatusBarText: string;
        public Tag: string;
        public Top: number;
        public Visible: boolean;
        public Width: number;
    }

    class PageBreak {
        private 'Access.PageBreak_typekey': PageBreak;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public readonly Application: Application;
        public ControlName: string;
        public ControlType: number;
        public EventProcPrefix: string;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public Left: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Section: number;
        public SizeToFit(): void;
        public Tag: string;
        public Top: number;
        public Visible: boolean;
    }

    class Pages {
        private 'Access.Pages_typekey': Pages;
        private constructor();
        public Add(Before?: any): Page;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): Page;
        public Remove(Item?: any): void;
    }

    class PaletteButton {
        private 'Access.PaletteButton_typekey': PaletteButton;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BackColor: number;
        public BackStyle: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public Left: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OptionValue: number;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Requery(): void;
        public Section: number;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TripleState: boolean;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public Visible: boolean;
        public Width: number;
    }

    class Printer {
        private 'Access.Printer_typekey': Printer;
        private constructor();
        public BottomMargin: number;
        public ColorMode: AcPrintColor;
        public ColumnSpacing: number;
        public Copies: number;
        public DataOnly: boolean;
        public DefaultSize: boolean;
        public readonly DeviceName: string;
        public readonly DriverName: string;
        public Duplex: AcPrintDuplex;
        public IsMemberSafe(dispid: number): boolean;
        public ItemLayout: AcPrintItemLayout;
        public ItemsAcross: number;
        public ItemSizeHeight: number;
        public ItemSizeWidth: number;
        public LeftMargin: number;
        public Orientation: AcPrintOrientation;
        public PaperBin: AcPrintPaperBin;
        public PaperSize: AcPrintPaperSize;
        public readonly Port: string;
        public PrintQuality: AcPrintObjQuality;
        public RightMargin: number;
        public RowSpacing: number;
        public TopMargin: number;
    }

    class Printers {
        private 'Access.Printers_typekey': Printers;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): Printer;
        public readonly Parent: any;
    }

    class Properties {
        private 'Access.Properties_typekey': Properties;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): any;
        public readonly Parent: any;
    }

    class Rectangle {
        private 'Access.Rectangle_typekey': Rectangle;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public readonly Application: Application;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public ControlName: string;
        public ControlType: number;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public Height: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public Left: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public Section: number;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public Tag: string;
        public Top: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class Reference {
        private 'Access.Reference_typekey': Reference;
        private constructor();
        public readonly BuiltIn: boolean;
        public readonly Collection: References;
        public readonly FullPath: string;
        public readonly Guid: string;
        public readonly IsBroken: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Kind: VBIDE.vbext_RefKind;
        public readonly Major: number;
        public readonly Minor: number;
        public readonly Name: string;
    }

    class References {
        private 'Access.References_typekey': References;
        private constructor();
        public AddFromFile(FileName: string): Reference;
        public AddFromGuid(Guid: string, Major: number, Minor: number): Reference;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(var_0: any): Reference;
        public readonly Parent: any;
        public Remove(Reference: Reference): void;
    }

    class Report {
        private 'Access.Report_typekey': Report;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public acHiddenCurrentPage: number;
        public readonly ActiveControl: Control;
        public AllowDesignChanges: boolean;
        public AllowLayoutView: boolean;
        public AllowReportView: boolean;
        public readonly Application: Application;
        public AutoCenter: boolean;
        public AutoResize: boolean;
        public BorderStyle: number;
        public Caption: string;
        public Circle(flags: number, X: number, Y: number, radius: number, color: number, start: number, end: number, aspect: number): void;
        public CloseButton: boolean;
        public ControlBox: boolean;
        public readonly Controls: Controls;
        public Count: number;
        public CurrentRecord: number;
        public CurrentView: number;
        public CurrentX: number;
        public CurrentY: number;
        public Cycle: number;
        public DateGrouping: number;
        public DefaultControl(ControlType: number): Control;
        public DefaultView: number;
        public Dirty: boolean;
        public DisplayOnSharePointSite: number;
        public DrawMode: number;
        public DrawStyle: number;
        public DrawWidth: number;
        public FastLaserPrinting: boolean;
        public FillColor: number;
        public FillStyle: number;
        public Filter: string;
        public FilterOn: boolean;
        public FilterOnLoad: boolean;
        public FitToPage: boolean;
        public FontBold: number;
        public FontItalic: number;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: number;
        public ForeColor: number;
        public FormatCount: number;
        public FormName: string;
        public GridX: number;
        public GridY: number;
        public GroupLevel(Index: number): GroupLevel;
        public GrpKeepTogether: number;
        public HasData: number;
        public HasModule: boolean;
        public Height: number;
        public HelpContextId: number;
        public HelpFile: string;
        public Hwnd: number;
        public InputParameters: string;
        public KeyPreview: boolean;
        public LayoutForPrint: boolean;
        public Left: number;
        public Line(flags: number, x1: number, y1: number, x2: number, y2: number, color: number): void;
        public LogicalPageHeight: number;
        public LogicalPageWidth: number;
        public MaxButton: boolean;
        public MenuBar: string;
        public MinButton: boolean;
        public MinMaxButtons: number;
        public Modal: boolean;
        public readonly Module: Module;
        public MouseWheel: string;
        public MouseWheelMacro: string;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Moveable: boolean;
        public MoveLayout: boolean;
        public Name: string;
        public NextRecord: boolean;
        public OnActivate: string;
        public OnActivateMacro: string;
        public OnApplyFilter: string;
        public OnApplyFilterMacro: string;
        public OnClick: string;
        public OnClickMacro: string;
        public OnClose: string;
        public OnCloseMacro: string;
        public OnCurrent: string;
        public OnCurrentMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnDeactivate: string;
        public OnDeactivateMacro: string;
        public OnError: string;
        public OnErrorMacro: string;
        public OnFilter: string;
        public OnFilterMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLoad: string;
        public OnLoadMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMenu: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnNoData: string;
        public OnNoDataMacro: string;
        public OnOpen: string;
        public OnOpenMacro: string;
        public OnPage: string;
        public OnPageMacro: string;
        public OnResize: string;
        public OnResizeMacro: string;
        public OnTimer: string;
        public OnTimerMacro: string;
        public OnUnload: string;
        public OnUnloadMacro: string;
        public OpenArgs: any;
        public OrderBy: string;
        public OrderByOn: boolean;
        public OrderByOnLoad: boolean;
        public Orientation: number;
        public Page: number;
        public PageFooter: number;
        public PageHeader: number;
        public Pages: number;
        public Painting: boolean;
        public PaintPalette: any;
        public PaletteSource: string;
        public readonly Parent: any;
        public Picture: string;
        public PictureAlignment: number;
        public PictureData: any;
        public PicturePages: number;
        public PicturePalette: any;
        public PictureSizeMode: number;
        public PictureTiling: boolean;
        public PictureType: number;
        public PopUp: boolean;
        public Print(Expr: string): void;
        public PrintCount: number;
        public Printer: Printer;
        public PrintSection: boolean;
        public readonly Properties: Properties;
        public PrtDevMode: any;
        public PrtDevNames: any;
        public PrtMip: any;
        public PSet(flags: number, X: number, Y: number, color: number): void;
        public RecordLocks: number;
        public Recordset: any;
        public RecordSource: string;
        public RecordSourceQualifier: string;
        public readonly Report: Report;
        public Requery(): void;
        public RibbonName: string;
        public Scale(flags: number, x1: number, y1: number, x2: number, y2: number): void;
        public ScaleHeight: number;
        public ScaleLeft: number;
        public ScaleMode: number;
        public ScaleTop: number;
        public ScaleWidth: number;
        public ScrollBars: number;
        public Section(Index: any): Section;
        public SectionOld(Index: any): Section;
        public ServerFilter: string;
        public readonly Shape: string;
        public ShortcutMenuBar: string;
        public ShowPageMargins: boolean;
        public Tag: string;
        public TextHeight(Expr: string): number;
        public TextWidth(Expr: string): number;
        public TimerInterval: number;
        public Toolbar: string;
        public Top: number;
        public UseDefaultPrinter: boolean;
        public Visible: boolean;
        public Width: number;
        public WindowHeight: number;
        public readonly WindowLeft: number;
        public readonly WindowTop: number;
        public WindowWidth: number;
        public ZoomControl: number;
    }

    class ReportOld {
        private 'Access.ReportOld_typekey': ReportOld;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public acHiddenCurrentPage: number;
        public readonly ActiveControl: Control;
        public readonly Application: Application;
        public Caption: string;
        public Circle(flags: number, X: number, Y: number, radius: number, color: number, start: number, end: number, aspect: number): void;
        public readonly Controls: Controls;
        public Count: number;
        public CurrentRecord: number;
        public CurrentX: number;
        public CurrentY: number;
        public DateGrouping: number;
        public DefaultControl(ControlType: number): Control;
        public Dirty: boolean;
        public DrawMode: number;
        public DrawStyle: number;
        public DrawWidth: number;
        public FastLaserPrinting: boolean;
        public FillColor: number;
        public FillStyle: number;
        public Filter: string;
        public FilterOn: boolean;
        public FontBold: number;
        public FontItalic: number;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: number;
        public ForeColor: number;
        public FormatCount: number;
        public FormName: string;
        public GridX: number;
        public GridY: number;
        public GroupLevel(Index: number): GroupLevel;
        public GrpKeepTogether: number;
        public HasData: number;
        public HasModule: boolean;
        public Height: number;
        public HelpContextId: number;
        public HelpFile: string;
        public Hwnd: number;
        public InputParameters: string;
        public LayoutForPrint: boolean;
        public Left: number;
        public Line(flags: number, x1: number, y1: number, x2: number, y2: number, color: number): void;
        public LogicalPageHeight: number;
        public LogicalPageWidth: number;
        public MaxButton: boolean;
        public MenuBar: string;
        public MinButton: boolean;
        public readonly Module: Module;
        public MoveLayout: boolean;
        public Name: string;
        public NextRecord: boolean;
        public OnActivate: string;
        public OnClose: string;
        public OnDeactivate: string;
        public OnError: string;
        public OnMenu: string;
        public OnNoData: string;
        public OnOpen: string;
        public OnPage: string;
        public OrderBy: string;
        public OrderByOn: boolean;
        public Orientation: number;
        public Page: number;
        public PageFooter: number;
        public PageHeader: number;
        public Pages: number;
        public Painting: boolean;
        public PaintPalette: any;
        public PaletteSource: string;
        public readonly Parent: any;
        public Picture: string;
        public PictureAlignment: number;
        public PictureData: any;
        public PicturePages: number;
        public PicturePalette: any;
        public PictureSizeMode: number;
        public PictureTiling: boolean;
        public PictureType: number;
        public Print(Expr: string): void;
        public PrintCount: number;
        public PrintSection: boolean;
        public readonly Properties: Properties;
        public PrtDevMode: any;
        public PrtDevNames: any;
        public PrtMip: any;
        public PSet(flags: number, X: number, Y: number, color: number): void;
        public RecordLocks: number;
        public RecordSource: string;
        public readonly Report: Report;
        public Scale(flags: number, x1: number, y1: number, x2: number, y2: number): void;
        public ScaleHeight: number;
        public ScaleLeft: number;
        public ScaleMode: number;
        public ScaleTop: number;
        public ScaleWidth: number;
        public Section(Index: any): Section;
        public ServerFilter: string;
        public ShortcutMenuBar: string;
        public Tag: string;
        public TextHeight(Expr: string): number;
        public TextWidth(Expr: string): number;
        public Toolbar: string;
        public Top: number;
        public Visible: boolean;
        public Width: number;
        public ZoomControl: number;
    }

    class ReportOldV10 {
        private 'Access.ReportOldV10_typekey': ReportOldV10;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public acHiddenCurrentPage: number;
        public readonly ActiveControl: Control;
        public readonly Application: Application;
        public AutoCenter: boolean;
        public AutoResize: boolean;
        public BorderStyle: number;
        public Caption: string;
        public Circle(flags: number, X: number, Y: number, radius: number, color: number, start: number, end: number, aspect: number): void;
        public CloseButton: boolean;
        public ControlBox: boolean;
        public readonly Controls: Controls;
        public Count: number;
        public CurrentRecord: number;
        public CurrentX: number;
        public CurrentY: number;
        public DateGrouping: number;
        public DefaultControl(ControlType: number): Control;
        public Dirty: boolean;
        public DrawMode: number;
        public DrawStyle: number;
        public DrawWidth: number;
        public FastLaserPrinting: boolean;
        public FillColor: number;
        public FillStyle: number;
        public Filter: string;
        public FilterOn: boolean;
        public FontBold: number;
        public FontItalic: number;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: number;
        public ForeColor: number;
        public FormatCount: number;
        public FormName: string;
        public GridX: number;
        public GridY: number;
        public GroupLevel(Index: number): GroupLevel;
        public GrpKeepTogether: number;
        public HasData: number;
        public HasModule: boolean;
        public Height: number;
        public HelpContextId: number;
        public HelpFile: string;
        public Hwnd: number;
        public InputParameters: string;
        public LayoutForPrint: boolean;
        public Left: number;
        public Line(flags: number, x1: number, y1: number, x2: number, y2: number, color: number): void;
        public LogicalPageHeight: number;
        public LogicalPageWidth: number;
        public MaxButton: boolean;
        public MenuBar: string;
        public MinButton: boolean;
        public MinMaxButtons: number;
        public Modal: boolean;
        public readonly Module: Module;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Moveable: boolean;
        public MoveLayout: boolean;
        public Name: string;
        public NextRecord: boolean;
        public OnActivate: string;
        public OnClose: string;
        public OnDeactivate: string;
        public OnError: string;
        public OnMenu: string;
        public OnNoData: string;
        public OnOpen: string;
        public OnPage: string;
        public OpenArgs: any;
        public OrderBy: string;
        public OrderByOn: boolean;
        public Orientation: number;
        public Page: number;
        public PageFooter: number;
        public PageHeader: number;
        public Pages: number;
        public Painting: boolean;
        public PaintPalette: any;
        public PaletteSource: string;
        public readonly Parent: any;
        public Picture: string;
        public PictureAlignment: number;
        public PictureData: any;
        public PicturePages: number;
        public PicturePalette: any;
        public PictureSizeMode: number;
        public PictureTiling: boolean;
        public PictureType: number;
        public PopUp: boolean;
        public Print(Expr: string): void;
        public PrintCount: number;
        public Printer: Printer;
        public PrintSection: boolean;
        public readonly Properties: Properties;
        public PrtDevMode: any;
        public PrtDevNames: any;
        public PrtMip: any;
        public PSet(flags: number, X: number, Y: number, color: number): void;
        public RecordLocks: number;
        public Recordset: any;
        public RecordSource: string;
        public RecordSourceQualifier: string;
        public readonly Report: Report;
        public Scale(flags: number, x1: number, y1: number, x2: number, y2: number): void;
        public ScaleHeight: number;
        public ScaleLeft: number;
        public ScaleMode: number;
        public ScaleTop: number;
        public ScaleWidth: number;
        public Section(Index: any): Section;
        public ServerFilter: string;
        public readonly Shape: string;
        public ShortcutMenuBar: string;
        public Tag: string;
        public TextHeight(Expr: string): number;
        public TextWidth(Expr: string): number;
        public Toolbar: string;
        public Top: number;
        public UseDefaultPrinter: boolean;
        public Visible: boolean;
        public Width: number;
        public WindowHeight: number;
        public readonly WindowLeft: number;
        public readonly WindowTop: number;
        public WindowWidth: number;
        public ZoomControl: number;
    }

    class Reports {
        private 'Access.Reports_typekey': Reports;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): Report;
        public readonly Parent: any;
    }

    class ReturnVar {
        private 'Access.ReturnVar_typekey': ReturnVar;
        private constructor();
        public readonly _Value: any;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public readonly Value: any;
    }

    class ReturnVars {
        private 'Access.ReturnVars_typekey': ReturnVars;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): ReturnVar;
        public readonly Parent: any;
    }

    class Screen {
        private 'Access.Screen_typekey': Screen;
        private constructor();
        public readonly ActiveControl: Control;
        public readonly ActiveDataAccessPage: DataAccessPage;
        public readonly ActiveDatasheet: Form;
        public readonly ActiveForm: Form;
        public readonly ActiveReport: Report;
        public readonly Application: Application;
        public IsMemberSafe(dispid: number): boolean;
        public MousePointer: number;
        public readonly Parent: any;
        public readonly PreviousControl: Control;
    }

    class Section {
        private 'Access.Section_typekey': Section;
        private constructor();
        public _Name: string;
        public AlternateBackColor: number;
        public AlternateBackShade: number;
        public AlternateBackThemeColorIndex: number;
        public AlternateBackTint: number;
        public readonly Application: Application;
        public AutoHeight: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public CanGrow: boolean;
        public CanShrink: boolean;
        public readonly Controls: Children;
        public DisplayWhen: number;
        public EventProcPrefix: string;
        public ForceNewPage: number;
        public HasContinued: boolean;
        public Height: number;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public KeepTogether: boolean;
        public Name: string;
        public NewRowOrCol: number;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnFormat: string;
        public OnFormatMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnPaint: string;
        public OnPaintMacro: string;
        public OnPrint: string;
        public OnPrintMacro: string;
        public OnRetreat: string;
        public OnRetreatMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public RepeatSection: boolean;
        public SetTabOrder(): void;
        public SpecialEffect: number;
        public Tag: string;
        public Visible: boolean;
        public WillContinue: boolean;
    }

    class SharedResource {
        private 'Access.SharedResource_typekey': SharedResource;
        private constructor();
        public Delete(): void;
        public IsMemberSafe(dispid: number): boolean;
        public Name: string;
        public readonly Parent: any;
        public readonly Type: AcResourceType;
    }

    class SharedResources {
        private 'Access.SharedResources_typekey': SharedResources;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: number): SharedResource;
        public readonly Parent: any;
    }

    class SmartTag {
        private 'Access.SmartTag_typekey': SmartTag;
        private constructor();
        public readonly Application: Application;
        public Delete(): void;
        public IsMemberSafe(dispid: number): boolean;
        public readonly IsMissing: boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Properties: SmartTagProperties;
        public readonly SmartTagActions: SmartTagActions;
        public readonly XML: string;
    }

    class SmartTagAction {
        private 'Access.SmartTagAction_typekey': SmartTagAction;
        private constructor();
        public readonly Application: Application;
        public Execute(): void;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class SmartTagActions {
        private 'Access.SmartTagActions_typekey': SmartTagActions;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): SmartTagAction;
        public readonly Parent: any;
    }

    class SmartTagProperties {
        private 'Access.SmartTagProperties_typekey': SmartTagProperties;
        private constructor();
        public Add(Name: string, Value: any): SmartTagProperty;
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): SmartTagProperty;
        public readonly Parent: any;
    }

    class SmartTagProperty {
        private 'Access.SmartTagProperty_typekey': SmartTagProperty;
        private constructor();
        public Delete(): void;
        public IsMemberSafe(dispid: number): boolean;
        public Name: string;
        public Value: string;
    }

    class SmartTags {
        private 'Access.SmartTags_typekey': SmartTags;
        private constructor();
        public Add(Name: string): SmartTag;
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): SmartTag;
        public readonly Parent: any;
    }

    class SubForm {
        private 'Access.SubForm_typekey': SubForm;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public CanGrow: boolean;
        public CanShrink: boolean;
        public ControlName: string;
        public readonly Controls: Controls;
        public ControlType: number;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FilterOnEmptyMaster: boolean;
        public readonly Form: Form;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public LinkChildFields: string;
        public LinkMasterFields: string;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public OldBorderStyle: number;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public readonly Parent: any;
        public readonly Properties: Properties;
        public readonly Report: Report;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public SizeToFit(): void;
        public SourceObject: string;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class SubReport {
        private 'Access.SubReport_typekey': SubReport;
        private constructor();
        public readonly Application: Application;
        public readonly Form: Form;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Parent: any;
        public readonly Report: Report;
    }

    class TabControl {
        private 'Access.TabControl_typekey': TabControl;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public readonly Application: Application;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BorderColor: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BottomPadding: number;
        public ControlName: string;
        public ControlType: number;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public Gradient: number;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public HoverColor: number;
        public HoverForeColor: number;
        public HoverForeShade: number;
        public HoverForeThemeColorIndex: number;
        public HoverForeTint: number;
        public HoverShade: number;
        public HoverThemeColorIndex: number;
        public HoverTint: number;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public MultiRow: boolean;
        public Name: string;
        public readonly OldValue: any;
        public OnChange: string;
        public OnChangeMacro: string;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public readonly Pages: Pages;
        public readonly Parent: any;
        public PressedColor: number;
        public PressedForeColor: number;
        public PressedForeShade: number;
        public PressedForeThemeColorIndex: number;
        public PressedForeTint: number;
        public PressedShade: number;
        public PressedThemeColorIndex: number;
        public PressedTint: number;
        public readonly Properties: Properties;
        public RightPadding: number;
        public Section: number;
        public Shape: number;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public StatusBarText: string;
        public Style: number;
        public TabFixedHeight: number;
        public TabFixedWidth: number;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public Top: number;
        public TopPadding: number;
        public UseTheme: boolean;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class TempVar {
        private 'Access.TempVar_typekey': TempVar;
        private constructor();
        public _Value: any;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public Value: any;
    }

    class TempVars {
        private 'Access.TempVars_typekey': TempVars;
        private constructor();
        public Add(Name: string, Value: any): void;
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): TempVar;
        public readonly Parent: any;
        public Remove(var_0: any): void;
        public RemoveAll(): void;
    }

    class TextBox {
        private 'Access.TextBox_typekey': TextBox;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public AllowAutoCorrect: boolean;
        public AllowedText: number;
        public readonly Application: Application;
        public AsianLineBreak: boolean;
        public AutoLabel: boolean;
        public AutoTab: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackStyle: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomMargin: number;
        public BottomPadding: number;
        public CanGrow: boolean;
        public CanShrink: boolean;
        public Coltyp: number;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DecimalPlaces: number;
        public DefaultValue: string;
        public DisplayAsHyperlink: AcDisplayAsHyperlink;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EnterKeyBehavior: boolean;
        public EventProcPrefix: string;
        public FELineBreak: boolean;
        public FilterLookup: number;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public Format: string;
        public readonly FormatConditions: FormatConditions;
        public FormatPictureText: string;
        public FuriganaControl: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public IMEHold: boolean;
        public IMEMode: AcImeMode;
        public IMESentenceMode: AcImeSentenceMode;
        public InputMask: string;
        public InSelection: boolean;
        public IsHyperlink: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public KeyboardLanguage: number;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftMargin: number;
        public LeftPadding: number;
        public LineSpacing: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public NumeralShapes: number;
        public OldBorderStyle: number;
        public readonly OldValue: any;
        public OnChange: string;
        public OnChangeMacro: string;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnDirty: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnUndo: string;
        public readonly Parent: any;
        public PostalAddress: string;
        public readonly Properties: Properties;
        public ReadingOrder: number;
        public Requery(): void;
        public RightMargin: number;
        public RightPadding: number;
        public RunningSum: number;
        public ScrollBarAlign: number;
        public ScrollBars: number;
        public Section: number;
        public SelLength: number;
        public SelStart: number;
        public SelText: string;
        public SetFocus(): void;
        public ShortcutMenuBar: string;
        public ShowDatePicker: number;
        public SizeToFit(): void;
        public readonly SmartTags: SmartTags;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Target: string;
        public Text: string;
        public TextAlign: number;
        public TextAlignGeneral: number;
        public TextFontCharSet: number;
        public TextFormat: AcTextFormat;
        public ThemeFontIndex: number;
        public Top: number;
        public TopMargin: number;
        public TopPadding: number;
        public Undo(): void;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public Vertical: boolean;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class ToggleButton {
        private 'Access.ToggleButton_typekey': ToggleButton;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public _Name: string;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public AddColon: boolean;
        public AfterUpdate: string;
        public AfterUpdateMacro: string;
        public readonly Application: Application;
        public AutoLabel: boolean;
        public BackColor: number;
        public BackShade: number;
        public BackThemeColorIndex: number;
        public BackTint: number;
        public BeforeUpdate: string;
        public BeforeUpdateMacro: string;
        public Bevel: number;
        public BorderColor: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public Caption: string;
        public ColumnHidden: boolean;
        public ColumnOrder: number;
        public ColumnWidth: number;
        public ControlName: string;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DefaultValue: string;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public FontBold: number;
        public FontItalic: boolean;
        public FontName: string;
        public FontSize: number;
        public FontUnderline: boolean;
        public FontWeight: number;
        public ForeColor: number;
        public ForeShade: number;
        public ForeThemeColorIndex: number;
        public ForeTint: number;
        public Glow: number;
        public Goto(): void;
        public Gradient: number;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HideDuplicates: boolean;
        public HorizontalAnchor: AcHorizontalAnchor;
        public HoverColor: number;
        public HoverForeColor: number;
        public HoverForeShade: number;
        public HoverForeThemeColorIndex: number;
        public HoverForeTint: number;
        public HoverShade: number;
        public HoverThemeColorIndex: number;
        public HoverTint: number;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsVisible: boolean;
        public LabelAlign: number;
        public LabelX: number;
        public LabelY: number;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public Locked: boolean;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public ObjectPalette: any;
        public readonly OldValue: any;
        public OnClick: string;
        public OnClickMacro: string;
        public OnDblClick: string;
        public OnDblClickMacro: string;
        public OnEnter: string;
        public OnEnterMacro: string;
        public OnExit: string;
        public OnExitMacro: string;
        public OnGotFocus: string;
        public OnGotFocusMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnLostFocus: string;
        public OnLostFocusMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OptionValue: number;
        public readonly Parent: any;
        public Picture: string;
        public PictureData: any;
        public PictureType: number;
        public PressedColor: number;
        public PressedForeColor: number;
        public PressedForeShade: number;
        public PressedForeThemeColorIndex: number;
        public PressedForeTint: number;
        public PressedShade: number;
        public PressedThemeColorIndex: number;
        public PressedTint: number;
        public readonly Properties: Properties;
        public QuickStyle: number;
        public QuickStyleMask: number;
        public ReadingOrder: number;
        public Requery(): void;
        public RightPadding: number;
        public Section: number;
        public SetFocus(): void;
        public Shadow: number;
        public Shape: number;
        public ShortcutMenuBar: string;
        public SizeToFit(): void;
        public SoftEdges: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public TextFontCharSet: number;
        public ThemeFontIndex: number;
        public Top: number;
        public TopPadding: number;
        public TripleState: boolean;
        public Undo(): void;
        public UseTheme: boolean;
        public ValidationRule: string;
        public ValidationText: string;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class WebBrowserControl {
        private 'Access.WebBrowserControl_typekey': WebBrowserControl;
        private constructor();
        public _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        public accChild(varChild: any): any;
        public readonly accChildCount: number;
        public accDefaultAction(varChild?: any): string;
        public accDescription(varChild?: any): string;
        public accDoDefaultAction(varChild?: any): void;
        public readonly accFocus: any;
        public accHelp(varChild?: any): string;
        public accHelpTopic(pszHelpFile: string, varChild?: any): number;
        public accHitTest(xLeft: number, yTop: number): any;
        public accKeyboardShortcut(varChild?: any): string;
        public accLocation(pxLeft: number, pyTop: number, pcxWidth: number, pcyHeight: number, varChild?: any): void;
        public accName(varChild?: any): string;
        public accNavigate(navDir: number, varStart?: any): any;
        public readonly accParent: any;
        public accRole(varChild?: any): any;
        public accSelect(flagsSelect: number, varChild?: any): void;
        public readonly accSelection: any;
        public accState(varChild?: any): any;
        public accValue(varChild?: any): string;
        public readonly Application: Application;
        public BorderColor: number;
        public BorderLineStyle: number;
        public BorderShade: number;
        public BorderStyle: number;
        public BorderThemeColorIndex: number;
        public BorderTint: number;
        public BorderWidth: number;
        public BottomPadding: number;
        public readonly Controls: Children;
        public ControlSource: string;
        public ControlTipText: string;
        public ControlType: number;
        public DisplayWhen: number;
        public Enabled: boolean;
        public EventProcPrefix: string;
        public Goto(): void;
        public GridlineColor: number;
        public GridlineShade: number;
        public GridlineStyleBottom: number;
        public GridlineStyleLeft: number;
        public GridlineStyleRight: number;
        public GridlineStyleTop: number;
        public GridlineThemeColorIndex: number;
        public GridlineTint: number;
        public GridlineWidthBottom: number;
        public GridlineWidthLeft: number;
        public GridlineWidthRight: number;
        public GridlineWidthTop: number;
        public Height: number;
        public HelpContextId: number;
        public HorizontalAnchor: AcHorizontalAnchor;
        public readonly Hyperlink: Hyperlink;
        public InSelection: boolean;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Layout: AcLayoutType;
        public readonly LayoutID: number;
        public Left: number;
        public LeftPadding: number;
        public readonly LocationURL: string;
        public Move(Left: any, Top?: any, Width?: any, Height?: any): void;
        public Name: string;
        public readonly Object: any;
        public readonly OldValue: any;
        public OnBeforeNavigate: string;
        public OnBeforeNavigateMacro: string;
        public OnClickMacro: string;
        public OnDblClickMacro: string;
        public OnDocumentComplete: string;
        public OnDocumentCompleteMacro: string;
        public OnKeyDown: string;
        public OnKeyDownMacro: string;
        public OnKeyPress: string;
        public OnKeyPressMacro: string;
        public OnKeyUp: string;
        public OnKeyUpMacro: string;
        public OnMouseDown: string;
        public OnMouseDownMacro: string;
        public OnMouseMove: string;
        public OnMouseMoveMacro: string;
        public OnMouseUp: string;
        public OnMouseUpMacro: string;
        public OnNavigateError: string;
        public OnNavigateErrorMacro: string;
        public OnProgressChange: string;
        public OnProgressChangeMacro: string;
        public OnUpdated: string;
        public OnUpdatedMacro: string;
        public readonly Parent: any;
        public readonly Progress: number;
        public readonly Properties: Properties;
        public readonly ReadyState: AcWebBrowserState;
        public Requery(): void;
        public RightPadding: number;
        public ScrollBars: AcWebBrowserScrollBars;
        public ScrollLeft: number;
        public ScrollTop: number;
        public Section: number;
        public SetFocus(): void;
        public SizeToFit(): void;
        public SpecialEffect: number;
        public StatusBarText: string;
        public TabIndex: number;
        public TabStop: boolean;
        public Tag: string;
        public Top: number;
        public TopPadding: number;
        public Transform: string;
        public Undo(): void;
        public Value: any;
        public VerticalAnchor: AcVerticalAnchor;
        public Visible: boolean;
        public Width: number;
    }

    class WebOptions {
        private 'Access.WebOptions_typekey': WebOptions;
        private constructor();
        public readonly Application: Application;
        public DownloadComponents: boolean;
        public Encoding: Office.MsoEncoding;
        public readonly FolderSuffix: string;
        public IsMemberSafe(dispid: number): boolean;
        public LocationOfComponents: string;
        public OrganizeInFolder: boolean;
        public readonly Parent: any;
        public TargetBrowser: Office.MsoTargetBrowser;
        public UseDefaultFolderSuffix(): void;
        public UseLongFileNames: boolean;
    }

    class WebService {
        private 'Access.WebService_typekey': WebService;
        private constructor();
        public readonly Entities: Entities;
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public readonly Parent: any;
    }

    class WebServices {
        private 'Access.WebServices_typekey': WebServices;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): WebService;
        public readonly Parent: any;
    }

    class WizHook {
        private 'Access.WizHook_typekey': WizHook;
        private constructor();
        public AccessUserDataDir(): string;
        public AccessWizFilePath(bstrWhich: string): string;
        public AdpUIDPwd(pbstrUID: string, pbstrPwd: string): boolean;
        public AnalyzeQuery(Workspace: DAO.Workspace, Database: DAO.Database, Query: string, Results: string): number;
        public AnalyzeTable(Workspace: DAO.Workspace, Database: DAO.Database, Table: string, ReturnDebugInfo: boolean, Results: string): number;
        public ArgsOfActid(Actid: number): number;
        public BracketString(String: string, flags: number): boolean;
        public CacheStatus(bstrStatus: string): void;
        public CloseCurrentDatabase(): boolean;
        public CreateDataPageControl(DpName: string, CtlName: string, Typ: number, Section: string, SectionType: number, AppletCode: string, X: number, Y: number, dx: number, dy: number): void;
        public CurrentLangID(): number;
        public readonly DbcVbProject: VBIDE.VBProject;
        public EmbedFileOnDataPage(DpName: string, FileToInsert: string): string;
        public EnglishPictToLocal(In: string, Out: string): boolean;
        public ExecuteTempImexSpec(bstrSpecXML: string): void;
        public FCacheStatus(): boolean;
        public FCreateNameMap(objtyp: number, bstrObjName: string): boolean;
        public FGetMSDE(fBlockKeys: boolean): boolean;
        public FileExists(File: string): boolean;
        public FirstDbcDataObject(Name: string, ObjType: AcObjectType, Attribs: number): boolean;
        public FIsFEWch(wch: number): boolean;
        public FIsPublishedXasTable(bstrObjectName: string): boolean;
        public FIsValidXasObjectName(bstrObjectName: string, iobjtyp: AcObjectType): boolean;
        public FIsXasDb(): boolean;
        public FullPath(RelativePath: string, FullPath: string): number;
        public GetAccWizRCPath(): string;
        public GetAdeRegistryPath(): string;
        public GetColumns(bstrBase: string): string;
        public GetCurrentView(bstrTableName: string): number;
        public GetDisabledExtensions(): string;
        public GetFileName(
            hwndOwner: number, AppName: string, DlgTitle: string, OpenTitle: string, File: string, InitialDir: string, Filter: string, FilterIndex: number, View: number,
            flags: number, fOpen: boolean): number;
        public GetFileName2(
            hwndOwner: number, AppName: string, DlgTitle: string, OpenTitle: string, File: string, InitialDir: string, Filter: string, FilterIndex: number, View: number,
            flags: number, fOpen: boolean, fFileSystem: any): number;
        public GetFileOdso(bstrExt: string, bstrFilename: string): number;
        public GetImexTblName(): string;
        public GetInfoForColumns(bstrBase: string): string;
        public GetLinkedListProperty(bstrTableName: string, bstrPropertyName: string, fServer: boolean): string;
        public GetObjPubOption(bstrObjectName: string, iobjtyp: AcObjectType, fTablesAsClient: boolean): number;
        public GetScriptString(HScr: number, ScriptColumn: number, Value: string): boolean;
        public GetWizGlob(lWhich: number): any;
        public GlobalProcExists(Name: string): boolean;
        public HideDates(): boolean;
        public IsMatchToDbcConnectString(bstrConnectionString: string): boolean;
        public IsMemberSafe(dispid: number): boolean;
        public IsValidIdent(Identifier: string): boolean;
        public readonly Key: number;
        public KeyboardLangID(): number;
        public KnownWizLeaks(fStart: boolean): void;
        public LoadImexSpecSolution(bstrFilename: string): void;
        public LocalFont(): string;
        public NameFromActid(Actid: number): string;
        public ObjTypOfRecordSource(RecordSource: string): number;
        public OfficeAddInDir(): string;
        public OpenEmScript(pProperty: _AccessProperty, OpenMode: number, Extra: number, Version: number): number;
        public OpenPictureFile(File: string, Cancelled: boolean): boolean;
        public OpenScript(Script: string, Label: string, OpenMode: number, Extra: number, Version: number): number;
        public ReportLeaksToFile(fRptToFile: boolean, bstrFileOut: string): void;
        public SaveObject(bstrName: string, objtyp: number): void;
        public SaveScriptString(HScr: number, ScriptColumn: number, Value: string): boolean;
        public SetDefaultSpecName(bstrSpecName: string): void;
        public SetDpBlockKeyInput(fBlockKeys: boolean): void;
        public SetVbaPassword(bstrDbName: string, bstrConnect: string, bstrPasswd: string): boolean;
        public SetWizGlob(lWhich: number, vValue: any): void;
        public SortStringArray(Array: SafeArray<string>): void;
        public SplitPath(Path: string, Drive: string, Dir: string, File: string, Ext: string): void;
        public TableFieldHasUniqueIndex(Table: string, Columns: string): boolean;
        public TranslateExpression(In: string, Out: string, ParseFlags: number, TranslateFlags: number): boolean;
        public TwipsFromFont(FontName: string, Size: number, Weight: number, Italic: boolean, Underline: boolean, Cch: number, Caption: string, MaxWidthCch: number, dx: number, dy: number): boolean;
        public WizCopyCmdbars(bstrADPName: string): void;
        public WizHelp(HelpFile: string, wCmd: number, ContextID: number): boolean;
        public WizMsgBox(bstrText: string, bstrCaption: string, wStyle: number, idHelpID: number, bstrHelpFileName: string): number;
    }

    class WSParameter {
        private 'Access.WSParameter_typekey': WSParameter;
        private constructor();
        public IsMemberSafe(dispid: number): boolean;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Type: number;
    }

    class WSParameters {
        private 'Access.WSParameters_typekey': WSParameters;
        private constructor();
        public readonly Count: number;
        public IsMemberSafe(dispid: number): boolean;
        public Item(Index: any): WSParameter;
        public readonly Parent: any;
    }

    namespace EventHelperTypes {
        type WebBrowserControl_BeforeNavigate2_ArgNames = ['pDisp', 'URL', 'flags', 'TargetFrameName', 'PostData', 'Headers', 'Cancel'];

        interface WebBrowserControl_BeforeNavigate2_Parameter {
            Cancel: boolean;
            readonly flags: any;
            readonly Headers: any;
            readonly pDisp: any;
            readonly PostData: any;
            readonly TargetFrameName: any;
            readonly URL: any;
        }
    }
}

interface ActiveXObject {
    on(obj: Access._CheckBoxInOption, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access._CheckBoxInOption, parameter: {Cancel: number}) => void): void;
    on(obj: Access._CheckBoxInOption, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access._CheckBoxInOption, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access._CheckBoxInOption, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access._CheckBoxInOption, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access._CheckBoxInOption, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access._CheckBoxInOption, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access._OptionButtonInOption, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access._OptionButtonInOption, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access._OptionButtonInOption, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Access._OptionButtonInOption, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access._OptionButtonInOption, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access._OptionButtonInOption, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access._OptionButtonInOption, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'],
        handler: (this: Access._OptionButtonInOption, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access._PageHdrFtrInReport, event: 'DblClick', argNames: ['Cancel'], handler: (this: Access._PageHdrFtrInReport, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access._PageHdrFtrInReport, event: 'Format', argNames: ['Cancel', 'FormatCount'], handler: (
            this: Access._PageHdrFtrInReport, parameter: {Cancel: number, FormatCount: number}) => void): void;
    on(
        obj: Access._PageHdrFtrInReport, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access._PageHdrFtrInReport, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access._PageHdrFtrInReport, event: 'Print', argNames: ['Cancel', 'PrintCount'], handler: (this: Access._PageHdrFtrInReport, parameter: {Cancel: number, PrintCount: number}) => void): void;
    on(obj: Access._SectionInReport, event: 'DblClick', argNames: ['Cancel'], handler: (this: Access._SectionInReport, parameter: {Cancel: number}) => void): void;
    on(obj: Access._SectionInReport, event: 'Format', argNames: ['Cancel', 'FormatCount'], handler: (this: Access._SectionInReport, parameter: {Cancel: number, FormatCount: number}) => void): void;
    on(
        obj: Access._SectionInReport, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access._SectionInReport, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access._SectionInReport, event: 'Print', argNames: ['Cancel', 'PrintCount'], handler: (this: Access._SectionInReport, parameter: {Cancel: number, PrintCount: number}) => void): void;
    on(obj: Access._ToggleButtonInOption, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access._ToggleButtonInOption, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access._ToggleButtonInOption, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (
            this: Access._ToggleButtonInOption, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access._ToggleButtonInOption, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access._ToggleButtonInOption, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access._ToggleButtonInOption, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'],
        handler: (this: Access._ToggleButtonInOption, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.Attachment, event: 'BeforeUpdate' | 'DblClick' | 'Dirty' | 'Exit', argNames: ['Cancel'], handler: (this: Access.Attachment, parameter: {Cancel: number}) => void): void;
    on(obj: Access.Attachment, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.Attachment, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.Attachment, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.Attachment, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.Attachment, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.Attachment, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.BoundObjectFrame, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.BoundObjectFrame, parameter: {Cancel: number}) => void): void;
    on(obj: Access.BoundObjectFrame, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.BoundObjectFrame, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.BoundObjectFrame, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.BoundObjectFrame, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.BoundObjectFrame, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.BoundObjectFrame, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.BoundObjectFrame, event: 'Updated', argNames: ['Code'], handler: (this: Access.BoundObjectFrame, parameter: {Code: number}) => void): void;
    on(obj: Access.CheckBox, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.CheckBox, parameter: {Cancel: number}) => void): void;
    on(obj: Access.CheckBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.CheckBox, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.CheckBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.CheckBox, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.CheckBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.CheckBox, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.ComboBox, event: 'BeforeUpdate' | 'DblClick' | 'Dirty' | 'Exit' | 'Undo', argNames: ['Cancel'], handler: (this: Access.ComboBox, parameter: {Cancel: number}) => void): void;
    on(obj: Access.ComboBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.ComboBox, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.ComboBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.ComboBox, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.ComboBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.ComboBox, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.ComboBox, event: 'NotInList', argNames: ['NewData', 'Response'], handler: (this: Access.ComboBox, parameter: {NewData: string, Response: number}) => void): void;
    on(obj: Access.CommandButton, event: 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.CommandButton, parameter: {Cancel: number}) => void): void;
    on(obj: Access.CommandButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.CommandButton, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.CommandButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.CommandButton, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.CommandButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.CommandButton, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.CustomControl, event: 'Exit', argNames: ['Cancel'], handler: (this: Access.CustomControl, parameter: {Cancel: number}) => void): void;
    on(obj: Access.CustomControl, event: 'Updated', argNames: ['Code'], handler: (this: Access.CustomControl, parameter: {Code: number}) => void): void;
    on(obj: Access.Form, event: 'AfterDelConfirm', argNames: ['Status'], handler: (this: Access.Form, parameter: {Status: number}) => void): void;
    on(obj: Access.Form, event: 'AfterFinalRender' | 'AfterLayout', argNames: ['drawObject'], handler: (this: Access.Form, parameter: {readonly drawObject: any}) => void): void;
    on(obj: Access.Form, event: 'AfterRender', argNames: ['drawObject', 'chartObject'], handler: (this: Access.Form, parameter: {readonly drawObject: any, readonly chartObject: any}) => void): void;
    on(obj: Access.Form, event: 'ApplyFilter', argNames: ['Cancel', 'ApplyType'], handler: (this: Access.Form, parameter: {Cancel: number, ApplyType: number}) => void): void;
    on(obj: Access.Form, event: 'BeforeDelConfirm', argNames: ['Cancel', 'Response'], handler: (this: Access.Form, parameter: {Cancel: number, Response: number}) => void): void;
    on(
        obj: Access.Form, event: 'BeforeInsert' | 'BeforeUpdate' | 'BeginBatchEdit' | 'DblClick' | 'Delete' | 'Dirty' | 'Open' | 'RecordExit' | 'Undo' | 'UndoBatchEdit' |
        'Unload',
        argNames: ['Cancel'], handler: (this: Access.Form, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.Form, event: 'BeforeRender', argNames: ['drawObject', 'chartObject', 'Cancel'], handler: (
            this: Access.Form, parameter: {readonly drawObject: any, readonly chartObject: any, readonly Cancel: any}) => void): void;
    on(
        obj: Access.Form, event: 'BeforeScreenTip', argNames: ['ScreenTipText', 'SourceObject'], handler: (
            this: Access.Form, parameter: {readonly ScreenTipText: any, readonly SourceObject: any}) => void): void;
    on(obj: Access.Form, event: 'CommandBeforeExecute', argNames: ['Command', 'Cancel'], handler: (this: Access.Form, parameter: {readonly Command: any, readonly Cancel: any}) => void): void;
    on(obj: Access.Form, event: 'CommandChecked', argNames: ['Command', 'Checked'], handler: (this: Access.Form, parameter: {readonly Command: any, readonly Checked: any}) => void): void;
    on(obj: Access.Form, event: 'CommandEnabled', argNames: ['Command', 'Enabled'], handler: (this: Access.Form, parameter: {readonly Command: any, readonly Enabled: any}) => void): void;
    on(obj: Access.Form, event: 'CommandExecute', argNames: ['Command'], handler: (this: Access.Form, parameter: {readonly Command: any}) => void): void;
    on(obj: Access.Form, event: 'DataChange' | 'PivotTableChange' | 'ViewChange', argNames: ['Reason'], handler: (this: Access.Form, parameter: {readonly Reason: number}) => void): void;
    on(obj: Access.Form, event: 'Error', argNames: ['DataErr', 'Response'], handler: (this: Access.Form, parameter: {DataErr: number, Response: number}) => void): void;
    on(obj: Access.Form, event: 'Filter', argNames: ['Cancel', 'FilterType'], handler: (this: Access.Form, parameter: {Cancel: number, FilterType: number}) => void): void;
    on(obj: Access.Form, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.Form, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.Form, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.Form, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.Form, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.Form, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.Form, event: 'MouseWheel', argNames: ['Page', 'Count'], handler: (this: Access.Form, parameter: {readonly Page: boolean, readonly Count: number}) => void): void;
    on(
        obj: Access.FormOld, event: 'AfterBeginTransaction' | 'AfterCommitTransaction' | 'RollbackTransaction', argNames: ['Connection'], handler: (
            this: Access.FormOld, parameter: {readonly Connection: ADODB.Connection}) => void): void;
    on(obj: Access.FormOld, event: 'AfterDelConfirm', argNames: ['Status'], handler: (this: Access.FormOld, parameter: {Status: number}) => void): void;
    on(obj: Access.FormOld, event: 'AfterFinalRender' | 'AfterLayout', argNames: ['drawObject'], handler: (this: Access.FormOld, parameter: {readonly drawObject: any}) => void): void;
    on(
        obj: Access.FormOld, event: 'AfterRender', argNames: ['drawObject', 'chartObject'], handler: (
            this: Access.FormOld, parameter: {readonly drawObject: any, readonly chartObject: any}) => void): void;
    on(obj: Access.FormOld, event: 'ApplyFilter', argNames: ['Cancel', 'ApplyType'], handler: (this: Access.FormOld, parameter: {Cancel: number, ApplyType: number}) => void): void;
    on(
        obj: Access.FormOld, event: 'BeforeBeginTransaction' | 'BeforeCommitTransaction', argNames: ['Cancel', 'Connection'], handler: (
            this: Access.FormOld, parameter: {Cancel: number, readonly Connection: ADODB.Connection}) => void): void;
    on(obj: Access.FormOld, event: 'BeforeDelConfirm', argNames: ['Cancel', 'Response'], handler: (this: Access.FormOld, parameter: {Cancel: number, Response: number}) => void): void;
    on(
        obj: Access.FormOld, event: 'BeforeInsert' | 'BeforeUpdate' | 'BeginBatchEdit' | 'DblClick' | 'Delete' | 'Dirty' | 'Open' | 'RecordExit' | 'Undo' |
        'UndoBatchEdit' | 'Unload',
        argNames: ['Cancel'], handler: (this: Access.FormOld, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.FormOld, event: 'BeforeRender', argNames: ['drawObject', 'chartObject', 'Cancel'], handler: (
            this: Access.FormOld, parameter: {readonly drawObject: any, readonly chartObject: any, readonly Cancel: any}) => void): void;
    on(
        obj: Access.FormOld, event: 'BeforeScreenTip', argNames: ['ScreenTipText', 'SourceObject'], handler: (
            this: Access.FormOld, parameter: {readonly ScreenTipText: any, readonly SourceObject: any}) => void): void;
    on(obj: Access.FormOld, event: 'CommandBeforeExecute', argNames: ['Command', 'Cancel'], handler: (this: Access.FormOld, parameter: {readonly Command: any, readonly Cancel: any}) => void): void;
    on(obj: Access.FormOld, event: 'CommandChecked', argNames: ['Command', 'Checked'], handler: (this: Access.FormOld, parameter: {readonly Command: any, readonly Checked: any}) => void): void;
    on(obj: Access.FormOld, event: 'CommandEnabled', argNames: ['Command', 'Enabled'], handler: (this: Access.FormOld, parameter: {readonly Command: any, readonly Enabled: any}) => void): void;
    on(obj: Access.FormOld, event: 'CommandExecute', argNames: ['Command'], handler: (this: Access.FormOld, parameter: {readonly Command: any}) => void): void;
    on(obj: Access.FormOld, event: 'DataChange' | 'PivotTableChange' | 'ViewChange', argNames: ['Reason'], handler: (this: Access.FormOld, parameter: {readonly Reason: number}) => void): void;
    on(obj: Access.FormOld, event: 'Error', argNames: ['DataErr', 'Response'], handler: (this: Access.FormOld, parameter: {DataErr: number, Response: number}) => void): void;
    on(obj: Access.FormOld, event: 'Filter', argNames: ['Cancel', 'FilterType'], handler: (this: Access.FormOld, parameter: {Cancel: number, FilterType: number}) => void): void;
    on(obj: Access.FormOld, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.FormOld, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.FormOld, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.FormOld, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.FormOld, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.FormOld, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.FormOld, event: 'MouseWheel', argNames: ['Page', 'Count'], handler: (this: Access.FormOld, parameter: {readonly Page: boolean, readonly Count: number}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'AfterBeginTransaction' | 'AfterCommitTransaction' | 'RollbackTransaction', argNames: ['Connection'],
        handler: (this: Access.FormOldV10, parameter: {readonly Connection: ADODB.Connection}) => void): void;
    on(obj: Access.FormOldV10, event: 'AfterDelConfirm', argNames: ['Status'], handler: (this: Access.FormOldV10, parameter: {Status: number}) => void): void;
    on(obj: Access.FormOldV10, event: 'AfterFinalRender' | 'AfterLayout', argNames: ['drawObject'], handler: (this: Access.FormOldV10, parameter: {readonly drawObject: any}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'AfterRender', argNames: ['drawObject', 'chartObject'], handler: (
            this: Access.FormOldV10, parameter: {readonly drawObject: any, readonly chartObject: any}) => void): void;
    on(obj: Access.FormOldV10, event: 'ApplyFilter', argNames: ['Cancel', 'ApplyType'], handler: (this: Access.FormOldV10, parameter: {Cancel: number, ApplyType: number}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'BeforeBeginTransaction' | 'BeforeCommitTransaction', argNames: ['Cancel', 'Connection'], handler: (
            this: Access.FormOldV10, parameter: {Cancel: number, readonly Connection: ADODB.Connection}) => void): void;
    on(obj: Access.FormOldV10, event: 'BeforeDelConfirm', argNames: ['Cancel', 'Response'], handler: (this: Access.FormOldV10, parameter: {Cancel: number, Response: number}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'BeforeInsert' | 'BeforeUpdate' | 'BeginBatchEdit' | 'DblClick' | 'Delete' | 'Dirty' | 'Open' | 'RecordExit' | 'Undo' |
        'UndoBatchEdit' | 'Unload',
        argNames: ['Cancel'], handler: (this: Access.FormOldV10, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'BeforeRender', argNames: ['drawObject', 'chartObject', 'Cancel'], handler: (
            this: Access.FormOldV10, parameter: {readonly drawObject: any, readonly chartObject: any, readonly Cancel: any}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'BeforeScreenTip', argNames: ['ScreenTipText', 'SourceObject'], handler: (
            this: Access.FormOldV10, parameter: {readonly ScreenTipText: any, readonly SourceObject: any}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'CommandBeforeExecute', argNames: ['Command', 'Cancel'], handler: (
            this: Access.FormOldV10, parameter: {readonly Command: any, readonly Cancel: any}) => void): void;
    on(obj: Access.FormOldV10, event: 'CommandChecked', argNames: ['Command', 'Checked'], handler: (this: Access.FormOldV10, parameter: {readonly Command: any, readonly Checked: any}) => void): void;
    on(obj: Access.FormOldV10, event: 'CommandEnabled', argNames: ['Command', 'Enabled'], handler: (this: Access.FormOldV10, parameter: {readonly Command: any, readonly Enabled: any}) => void): void;
    on(obj: Access.FormOldV10, event: 'CommandExecute', argNames: ['Command'], handler: (this: Access.FormOldV10, parameter: {readonly Command: any}) => void): void;
    on(obj: Access.FormOldV10, event: 'DataChange' | 'PivotTableChange' | 'ViewChange', argNames: ['Reason'], handler: (this: Access.FormOldV10, parameter: {readonly Reason: number}) => void): void;
    on(obj: Access.FormOldV10, event: 'Error', argNames: ['DataErr', 'Response'], handler: (this: Access.FormOldV10, parameter: {DataErr: number, Response: number}) => void): void;
    on(obj: Access.FormOldV10, event: 'Filter', argNames: ['Cancel', 'FilterType'], handler: (this: Access.FormOldV10, parameter: {Cancel: number, FilterType: number}) => void): void;
    on(obj: Access.FormOldV10, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.FormOldV10, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.FormOldV10, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.FormOldV10, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.FormOldV10, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.FormOldV10, event: 'MouseWheel', argNames: ['Page', 'Count'], handler: (this: Access.FormOldV10, parameter: {readonly Page: boolean, readonly Count: number}) => void): void;
    on(obj: Access.Image, event: 'DblClick', argNames: ['Cancel'], handler: (this: Access.Image, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.Image, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.Image, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.Label, event: 'DblClick', argNames: ['Cancel'], handler: (this: Access.Label, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.Label, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.Label, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.ListBox, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.ListBox, parameter: {Cancel: number}) => void): void;
    on(obj: Access.ListBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.ListBox, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.ListBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.ListBox, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.ListBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.ListBox, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.NavigationButton, event: 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.NavigationButton, parameter: {Cancel: number}) => void): void;
    on(obj: Access.NavigationButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.NavigationButton, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.NavigationButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.NavigationButton, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.NavigationButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.NavigationButton, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(
        obj: Access.NavigationControl, event: 'BeforeUpdate' | 'DblClick' | 'Dirty' | 'Exit' | 'Undo', argNames: ['Cancel'], handler: (
            this: Access.NavigationControl, parameter: {Cancel: number}) => void): void;
    on(obj: Access.NavigationControl, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.NavigationControl, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.NavigationControl, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.NavigationControl, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.NavigationControl, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.NavigationControl, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.ObjectFrame, event: 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.ObjectFrame, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.ObjectFrame, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.ObjectFrame, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.ObjectFrame, event: 'Updated', argNames: ['Code'], handler: (this: Access.ObjectFrame, parameter: {Code: number}) => void): void;
    on(obj: Access.OptionButton, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.OptionButton, parameter: {Cancel: number}) => void): void;
    on(obj: Access.OptionButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.OptionButton, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.OptionButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.OptionButton, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.OptionButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.OptionButton, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.OptionGroup, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.OptionGroup, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.OptionGroup, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.OptionGroup, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.Page, event: 'DblClick', argNames: ['Cancel'], handler: (this: Access.Page, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.Page, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.Page, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.PaletteButton, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.PaletteButton, parameter: {Cancel: number}) => void): void;
    on(obj: Access.PaletteButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.PaletteButton, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.PaletteButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.PaletteButton, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.PaletteButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.PaletteButton, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.Rectangle, event: 'DblClick', argNames: ['Cancel'], handler: (this: Access.Rectangle, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.Rectangle, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.Rectangle, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.References, event: 'ItemAdded' | 'ItemRemoved', argNames: ['Reference'], handler: (this: Access.References, parameter: {readonly Reference: Access.Reference}) => void): void;
    on(obj: Access.Report, event: 'ApplyFilter', argNames: ['Cancel', 'ApplyType'], handler: (this: Access.Report, parameter: {Cancel: number, ApplyType: number}) => void): void;
    on(obj: Access.Report, event: 'DblClick' | 'NoData' | 'Open' | 'Unload', argNames: ['Cancel'], handler: (this: Access.Report, parameter: {Cancel: number}) => void): void;
    on(obj: Access.Report, event: 'Error', argNames: ['DataErr', 'Response'], handler: (this: Access.Report, parameter: {DataErr: number, Response: number}) => void): void;
    on(obj: Access.Report, event: 'Filter', argNames: ['Cancel', 'FilterType'], handler: (this: Access.Report, parameter: {Cancel: number, FilterType: number}) => void): void;
    on(obj: Access.Report, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.Report, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.Report, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.Report, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.Report, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.Report, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.Report, event: 'MouseWheel', argNames: ['Page', 'Count'], handler: (this: Access.Report, parameter: {readonly Page: boolean, readonly Count: number}) => void): void;
    on(obj: Access.ReportOld, event: 'Error', argNames: ['DataErr', 'Response'], handler: (this: Access.ReportOld, parameter: {DataErr: number, Response: number}) => void): void;
    on(obj: Access.ReportOld, event: 'NoData' | 'Open', argNames: ['Cancel'], handler: (this: Access.ReportOld, parameter: {Cancel: number}) => void): void;
    on(obj: Access.ReportOldV10, event: 'Error', argNames: ['DataErr', 'Response'], handler: (this: Access.ReportOldV10, parameter: {DataErr: number, Response: number}) => void): void;
    on(obj: Access.ReportOldV10, event: 'NoData' | 'Open', argNames: ['Cancel'], handler: (this: Access.ReportOldV10, parameter: {Cancel: number}) => void): void;
    on(obj: Access.Section, event: 'DblClick', argNames: ['Cancel'], handler: (this: Access.Section, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.Section, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.Section, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.SubForm, event: 'Exit', argNames: ['Cancel'], handler: (this: Access.SubForm, parameter: {Cancel: number}) => void): void;
    on(obj: Access.SubReport, event: 'Exit', argNames: ['Cancel'], handler: (this: Access.SubReport, parameter: {Cancel: number}) => void): void;
    on(obj: Access.TabControl, event: 'DblClick', argNames: ['Cancel'], handler: (this: Access.TabControl, parameter: {Cancel: number}) => void): void;
    on(obj: Access.TabControl, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.TabControl, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.TabControl, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.TabControl, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.TabControl, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.TabControl, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.TextBox, event: 'BeforeUpdate' | 'DblClick' | 'Dirty' | 'Exit' | 'Undo', argNames: ['Cancel'], handler: (this: Access.TextBox, parameter: {Cancel: number}) => void): void;
    on(obj: Access.TextBox, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.TextBox, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.TextBox, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.TextBox, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.TextBox, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.TextBox, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(obj: Access.ToggleButton, event: 'BeforeUpdate' | 'DblClick' | 'Exit', argNames: ['Cancel'], handler: (this: Access.ToggleButton, parameter: {Cancel: number}) => void): void;
    on(obj: Access.ToggleButton, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.ToggleButton, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.ToggleButton, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.ToggleButton, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.ToggleButton, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.ToggleButton, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(
        obj: Access.WebBrowserControl, event: 'BeforeNavigate2', argNames: Access.EventHelperTypes.WebBrowserControl_BeforeNavigate2_ArgNames,
        handler: (this: Access.WebBrowserControl, parameter: Access.EventHelperTypes.WebBrowserControl_BeforeNavigate2_Parameter) => void): void;
    on(
        obj: Access.WebBrowserControl, event: 'BeforeUpdate' | 'DblClick' | 'Dirty' | 'Exit', argNames: ['Cancel'], handler: (
            this: Access.WebBrowserControl, parameter: {Cancel: number}) => void): void;
    on(
        obj: Access.WebBrowserControl, event: 'DocumentComplete', argNames: ['pDisp', 'URL'], handler: (
            this: Access.WebBrowserControl, parameter: {readonly pDisp: any, readonly URL: any}) => void): void;
    on(obj: Access.WebBrowserControl, event: 'KeyDown' | 'KeyUp', argNames: ['KeyCode', 'Shift'], handler: (this: Access.WebBrowserControl, parameter: {KeyCode: number, Shift: number}) => void): void;
    on(obj: Access.WebBrowserControl, event: 'KeyPress', argNames: ['KeyAscii'], handler: (this: Access.WebBrowserControl, parameter: {KeyAscii: number}) => void): void;
    on(
        obj: Access.WebBrowserControl, event: 'MouseDown' | 'MouseMove' | 'MouseUp', argNames: ['Button', 'Shift', 'X', 'Y'], handler: (
            this: Access.WebBrowserControl, parameter: {Button: number, Shift: number, X: number, Y: number}) => void): void;
    on(
        obj: Access.WebBrowserControl, event: 'NavigateError', argNames: ['pDisp', 'URL', 'TargetFrameName', 'StatusCode', 'Cancel'],
        handler: (this: Access.WebBrowserControl, parameter: {readonly pDisp: any, readonly URL: any, readonly TargetFrameName: any, readonly StatusCode: any, Cancel: boolean}) => void): void;
    on(
        obj: Access.WebBrowserControl, event: 'ProgressChange', argNames: ['Progress', 'ProgressMax'], handler: (
            this: Access.WebBrowserControl, parameter: {readonly Progress: number, readonly ProgressMax: number}) => void): void;
    on(obj: Access.WebBrowserControl, event: 'Updated', argNames: ['Code'], handler: (this: Access.WebBrowserControl, parameter: {Code: number}) => void): void;
    on(obj: Access._CheckBoxInOption, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access._CheckBoxInOption, parameter: {}) => void): void;
    on(obj: Access._OptionButtonInOption, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access._OptionButtonInOption, parameter: {}) => void): void;
    on(obj: Access._PageHdrFtrInReport, event: 'Click' | 'Paint', handler: (this: Access._PageHdrFtrInReport, parameter: {}) => void): void;
    on(obj: Access._SectionInReport, event: 'Click' | 'Paint' | 'Retreat', handler: (this: Access._SectionInReport, parameter: {}) => void): void;
    on(obj: Access._ToggleButtonInOption, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access._ToggleButtonInOption, parameter: {}) => void): void;
    on(obj: Access.Attachment, event: 'AfterUpdate' | 'AttachmentCurrent' | 'Change' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.Attachment, parameter: {}) => void): void;
    on(obj: Access.BoundObjectFrame, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.BoundObjectFrame, parameter: {}) => void): void;
    on(obj: Access.CheckBox, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.CheckBox, parameter: {}) => void): void;
    on(obj: Access.Class, event: 'Initialize' | 'Terminate', handler: (this: Access.Class, parameter: {}) => void): void;
    on(obj: Access.ComboBox, event: 'AfterUpdate' | 'Change' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.ComboBox, parameter: {}) => void): void;
    on(obj: Access.CommandButton, event: 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.CommandButton, parameter: {}) => void): void;
    on(obj: Access.CustomControl, event: 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.CustomControl, parameter: {}) => void): void;
    on(
        obj: Access.Form, event: 'Activate' | 'AfterInsert' | 'AfterUpdate' | 'BeforeQuery' | 'Click' | 'Close' | 'Current' | 'DataSetChange' | 'Deactivate' | 'GotFocus' |
        'Load' | 'LostFocus' | 'OnConnect' | 'OnDisconnect' | 'Query' | 'Resize' | 'SelectionChange' | 'Timer',
        handler: (this: Access.Form, parameter: {}) => void): void;
    on(
        obj: Access.FormOld, event: 'Activate' | 'AfterInsert' | 'AfterUpdate' | 'BeforeQuery' | 'Click' | 'Close' | 'Current' | 'DataSetChange' | 'Deactivate' |
        'GotFocus' | 'Load' | 'LostFocus' | 'OnConnect' | 'OnDisconnect' | 'Query' | 'Resize' | 'SelectionChange' | 'Timer',
        handler: (this: Access.FormOld, parameter: {}) => void): void;
    on(
        obj: Access.FormOldV10, event: 'Activate' | 'AfterInsert' | 'AfterUpdate' | 'BeforeQuery' | 'Click' | 'Close' | 'Current' | 'DataSetChange' | 'Deactivate' |
        'GotFocus' | 'Load' | 'LostFocus' | 'OnConnect' | 'OnDisconnect' | 'Query' | 'Resize' | 'SelectionChange' | 'Timer',
        handler: (this: Access.FormOldV10, parameter: {}) => void): void;
    on(obj: Access.Image, event: 'Click', handler: (this: Access.Image, parameter: {}) => void): void;
    on(obj: Access.Label, event: 'Click', handler: (this: Access.Label, parameter: {}) => void): void;
    on(obj: Access.ListBox, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.ListBox, parameter: {}) => void): void;
    on(obj: Access.NavigationButton, event: 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.NavigationButton, parameter: {}) => void): void;
    on(obj: Access.NavigationControl, event: 'AfterUpdate' | 'Change' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.NavigationControl, parameter: {}) => void): void;
    on(obj: Access.ObjectFrame, event: 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.ObjectFrame, parameter: {}) => void): void;
    on(obj: Access.OptionButton, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.OptionButton, parameter: {}) => void): void;
    on(obj: Access.OptionGroup, event: 'AfterUpdate' | 'Click' | 'Enter', handler: (this: Access.OptionGroup, parameter: {}) => void): void;
    on(obj: Access.Page, event: 'Click', handler: (this: Access.Page, parameter: {}) => void): void;
    on(obj: Access.PaletteButton, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.PaletteButton, parameter: {}) => void): void;
    on(obj: Access.Rectangle, event: 'Click', handler: (this: Access.Rectangle, parameter: {}) => void): void;
    on(
        obj: Access.Report, event: 'Activate' | 'Click' | 'Close' | 'Current' | 'Deactivate' | 'GotFocus' | 'Load' | 'LostFocus' | 'Page' | 'Resize' | 'Timer',
        handler: (this: Access.Report, parameter: {}) => void): void;
    on(obj: Access.ReportOld, event: 'Activate' | 'Close' | 'Deactivate' | 'Page', handler: (this: Access.ReportOld, parameter: {}) => void): void;
    on(obj: Access.ReportOldV10, event: 'Activate' | 'Close' | 'Deactivate' | 'Page', handler: (this: Access.ReportOldV10, parameter: {}) => void): void;
    on(obj: Access.Section, event: 'Click' | 'Paint', handler: (this: Access.Section, parameter: {}) => void): void;
    on(obj: Access.SubForm, event: 'Enter', handler: (this: Access.SubForm, parameter: {}) => void): void;
    on(obj: Access.SubReport, event: 'Enter', handler: (this: Access.SubReport, parameter: {}) => void): void;
    on(obj: Access.TabControl, event: 'Change' | 'Click', handler: (this: Access.TabControl, parameter: {}) => void): void;
    on(obj: Access.TextBox, event: 'AfterUpdate' | 'Change' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.TextBox, parameter: {}) => void): void;
    on(obj: Access.ToggleButton, event: 'AfterUpdate' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.ToggleButton, parameter: {}) => void): void;
    on(obj: Access.WebBrowserControl, event: 'AfterUpdate' | 'Change' | 'Click' | 'Enter' | 'GotFocus' | 'LostFocus', handler: (this: Access.WebBrowserControl, parameter: {}) => void): void;
    set(
        obj: Access._CheckBoxInOption | Access._ChildLabel | Access._CustomControlInReport | Access._OptionButtonInOption | Access._ToggleButtonInOption |
        Access.Attachment | Access.BoundObjectFrame | Access.CheckBox | Access.ComboBox | Access.CommandButton | Access.CustomControl | Access.EmptyCell | Access.Form |
        Access.FormOld | Access.FormOldV10 | Access.Label | Access.ListBox | Access.NavigationButton | Access.NavigationControl | Access.ObjectFrame |
        Access.OptionButton | Access.OptionGroup | Access.Page | Access.SubForm | Access.TabControl | Access.TextBox | Access.ToggleButton | Access.WebBrowserControl,
        propertyName: 'accName' | 'accValue', parameterTypes: [any], newValue: string): void;
    set(obj: Access._ControlInReportEvents | Access.ComboBox | Access.Control | Access.ListBox, propertyName: 'Selected', parameterTypes: [number], newValue: number): void;
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
}

interface ActiveXObjectNameMap {
    'Access.Application': Access.Application;
}

interface EnumeratorConstructor {
    new(col: Access._ItemsSelected): Enumerator<number>;
    new(col: Access.AccessObjectProperties): Enumerator<Access.AccessObjectProperty>;
    new(col: Access.AdditionalData): Enumerator<Access.AdditionalData>;
    new(
        col: Access.AllDataAccessPages | Access.AllDatabaseDiagrams | Access.AllForms | Access.AllFunctions | Access.AllMacros | Access.AllModules | Access.AllQueries |
        Access.AllReports | Access.AllStoredProcedures | Access.AllTables | Access.AllViews | Access.DependencyObjects): Enumerator<Access.AccessObject>;
    new(col: Access.Children | Access.Controls | Access.Properties): Enumerator<any>;
    new(col: Access.DataAccessPages): Enumerator<Access.DataAccessPage>;
    new(col: Access.Entities): Enumerator<Access.Entity>;
    new(col: Access.FormatConditions): Enumerator<Access.FormatCondition>;
    new(col: Access.Forms): Enumerator<Access.Form>;
    new(col: Access.ImportExportSpecifications): Enumerator<Access.ImportExportSpecification>;
    new(col: Access.LocalVars): Enumerator<Access.LocalVar>;
    new(col: Access.Modules): Enumerator<Access.Module>;
    new(col: Access.Operations): Enumerator<Access.Operation>;
    new(col: Access.Pages): Enumerator<Access.Page>;
    new(col: Access.Printers): Enumerator<Access.Printer>;
    new(col: Access.References): Enumerator<Access.Reference>;
    new(col: Access.Reports): Enumerator<Access.Report>;
    new(col: Access.ReturnVars): Enumerator<Access.ReturnVar>;
    new(col: Access.SharedResources): Enumerator<Access.SharedResource>;
    new(col: Access.SmartTagActions): Enumerator<Access.SmartTagAction>;
    new(col: Access.SmartTagProperties): Enumerator<Access.SmartTagProperty>;
    new(col: Access.SmartTags): Enumerator<Access.SmartTag>;
    new(col: Access.TempVars): Enumerator<Access.TempVar>;
    new(col: Access.WebServices): Enumerator<Access.WebService>;
    new(col: Access.WSParameters): Enumerator<Access.WSParameter>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
