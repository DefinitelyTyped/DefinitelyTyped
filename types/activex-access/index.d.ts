/// <reference types="activex-interop" />
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

    const enum AcFormSection {
        acDetail = 0,
        acFooter = 2,
        acHeader = 1,
        acPageFooter = 4,
        acPageHeader = 3,
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

    const enum AcSetMenuItemState {
        acMenuCheck = 3,
        acMenuGray = 1,
        acMenuUncheck = 2,
        acMenuUngray = 0,
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

    const enum AcOutputFormat {
        acFormatASP = "Microsoft Active Server Pages (*.asp)",
        acFormatDAP = "Microsoft Access Data Access Page (*.htm; *.html)",
        acFormatHTML = "HTML (*.html)",
        acFormatIIS = "Microsoft IIS (*.htx; *.idc)",
        acFormatPDF = "PDF Format (*.pdf)",
        acFormatRTF = "Rich Text Format (*.rtf)",
        acFormatSNP = "Snapshot Format (*.snp)",
        acFormatTXT = "MS-DOS Text (*.txt)",
        acFormatXLS = "Microsoft Excel (*.xls)",
        acFormatXLSB = "Microsoft Excel Binary Workbook (*.xlsb)",
        acFormatXLSX = "Microsoft Excel Workbook (*.xlsx)",
        acFormatXPS = "XPS Format (*.xps)",
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

    const enum AcReportSection {
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

    const enum AcResourceType {
        acResourceImage = 1,
        acResourceTheme = 0,
    }

    const enum AcSearchDirection {
        acDown = 1,
        acSearchAll = 2,
        acUp = 0,
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
        acFormatASP = "Microsoft Active Server Pages (*.asp)",
        acFormatDAP = "Microsoft Access Data Access Page (*.htm; *.html)",
        acFormatHTML = "HTML (*.html)",
        acFormatIIS = "Microsoft IIS (*.htx; *.idc)",
        acFormatPDF = "PDF Format (*.pdf)",
        acFormatRTF = "Rich Text Format (*.rtf)",
        acFormatSNP = "Snapshot Format (*.snp)",
        acFormatTXT = "MS-DOS Text (*.txt)",
        acFormatXLS = "Microsoft Excel (*.xls)",
        acFormatXLSB = "Microsoft Excel Binary Workbook (*.xlsb)",
        acFormatXLSX = "Microsoft Excel Workbook (*.xlsx)",
        acFormatXPS = "XPS Format (*.xps)",
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
        A_FORMATRTF = "Rich Text Format (*.rtf)",
        A_FORMATTXT = "MS-DOS Text (*.txt)",
        A_FORMATXLS = "Microsoft Excel (*.xls)",
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
        DB_LANG_ARABIC = ";LANGID=0x0401;CP=1256;COUNTRY=0",
        DB_LANG_CYRILLIC = ";LANGID=0x0419;CP=1251;COUNTRY=0",
        DB_LANG_CZECH = ";LANGID=0x0405;CP=1250;COUNTRY=0",
        DB_LANG_DUTCH = ";LANGID=0x0413;CP=1252;COUNTRY=0",
        DB_LANG_GENERAL = ";LANGID=0x0409;CP=1252;COUNTRY=0",
        DB_LANG_GREEK = ";LANGID=0x0408;CP=1253;COUNTRY=0",
        DB_LANG_HEBREW = ";LANGID=0x040D;CP=1255;COUNTRY=0",
        DB_LANG_HUNGARIAN = ";LANGID=0x040E;CP=1250;COUNTRY=0",
        DB_LANG_ICELANDIC = ";LANGID=0x040F;CP=1252;COUNTRY=0",
        DB_LANG_NORDIC = ";LANGID=0x041D;CP=1252;COUNTRY=0",
        DB_LANG_NORWDAN = ";LANGID=0x0414;CP=1252;COUNTRY=0",
        DB_LANG_POLISH = ";LANGID=0x0415;CP=1250;COUNTRY=0",
        DB_LANG_SPANISH = ";LANGID=0x040A;CP=1252;COUNTRY=0",
        DB_LANG_SWEDFIN = ";LANGID=0x040B;CP=1252;COUNTRY=0",
        DB_LANG_TURKISH = ";LANGID=0x041F;CP=1254;COUNTRY=0",
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

    type ByteArray = SafeArray<number>;

    type DatabaseType =
        | "Microsoft Access (default)"
        | "Jet 2.x"
        | "Jet 3.x"
        | "dBase III"
        | "dBase IV"
        | "dBase 5.0"
        | "Paradox 3.x"
        | "Paradox 4.x"
        | "Paradox 5.x"
        | "Paradox 7.x"
        | "ODBC Database"
        | "WSS";

    class _CheckBoxInOption {
        private "Access._CheckBoxInOption_typekey": _CheckBoxInOption;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoLabel: boolean;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OptionValue: number;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        TripleState: boolean;
        Undo(): void;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class _ChildLabel {
        private "Access._ChildLabel_typekey": _ChildLabel;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        readonly Application: Application;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomMargin: number;
        BottomPadding: number;
        Caption: string;
        ControlName: string;
        ControlTipText: string;
        ControlType: number;
        DisplayWhen: number;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        HyperlinkAddress: string;
        HyperlinkSubAddress: string;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftMargin: number;
        LeftPadding: number;
        LineSpacing: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        NumeralShapes: number;
        OldBorderStyle: number;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        RightMargin: number;
        RightPadding: number;
        Section: number;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        readonly SmartTags: SmartTags;
        SpecialEffect: number;
        Tag: string;
        Target: string;
        TextAlign: number;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        Top: number;
        TopMargin: number;
        TopPadding: number;
        Vertical: boolean;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class _ControlInReportEvents {
        private "Access._ControlInReportEvents_typekey": _ControlInReportEvents;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        readonly Application: Application;
        BottomPadding: number;
        Column(Index: number, Row?: any): any;
        readonly Controls: Children;
        Dropdown(): void;
        readonly Form: Form;
        Goto(): void;
        GridlineColor: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        IsMemberSafe(dispid: number): boolean;
        ItemData(Index: number): any;
        readonly ItemsSelected: _ItemsSelected;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        LeftPadding: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Object: any;
        ObjectVerbs(Index: number): string;
        readonly OldValue: any;
        readonly Pages: Pages;
        readonly Parent: any;
        readonly Properties: Properties;
        readonly Report: Report;
        Requery(): void;
        RightPadding: number;
        Selected(lRow: number): number;
        SetFocus(): void;
        SizeToFit(): void;
        readonly SmartTags: SmartTags;
        TopPadding: number;
        Undo(): void;
        VerticalAnchor: AcVerticalAnchor;
    }

    class _CustomControlInReport {
        private "Access._CustomControlInReport_typekey": _CustomControlInReport;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        About: string;
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
        readonly Application: Application;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        Cancel: boolean;
        Class: string;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        Custom: string;
        Default: boolean;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        LpOleObject: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Object: any;
        ObjectPalette: any;
        ObjectVerbs(Index: number): string;
        ObjectVerbsCount: number;
        OldBorderStyle: number;
        readonly OldValue: any;
        OLEClass: string;
        OleData: any;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnUpdated: string;
        OnUpdatedMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        SizeToFit(): void;
        SpecialEffect: number;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        Value: any;
        VarOleObject: any;
        Verb: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    interface _ItemsSelected {
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: any): number;
        (Index: any): number;
    }

    class _OptionButtonInOption {
        private "Access._OptionButtonInOption_typekey": _OptionButtonInOption;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoLabel: boolean;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OptionValue: number;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        TripleState: boolean;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class _PageHdrFtrInReport {
        private "Access._PageHdrFtrInReport_typekey": _PageHdrFtrInReport;
        private constructor();
        _Name: string;
        AlternateBackColor: number;
        AlternateBackShade: number;
        AlternateBackThemeColorIndex: number;
        AlternateBackTint: number;
        readonly Application: Application;
        AutoHeight: boolean;
        BackColor: number;
        BackShade: number;
        BackThemeColorIndex: number;
        BackTint: number;
        CanGrow: boolean;
        CanShrink: boolean;
        readonly Controls: Children;
        DisplayWhen: number;
        EventProcPrefix: string;
        ForceNewPage: number;
        HasContinued: boolean;
        Height: number;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        KeepTogether: boolean;
        Name: string;
        NewRowOrCol: number;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnFormat: string;
        OnFormatMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnPaint: string;
        OnPaintMacro: string;
        OnPrint: string;
        OnPrintMacro: string;
        OnRetreat: string;
        OnRetreatMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        RepeatSection: boolean;
        SetTabOrder(): void;
        SpecialEffect: number;
        Tag: string;
        Visible: boolean;
        WillContinue: boolean;
    }

    class _SectionInReport {
        private "Access._SectionInReport_typekey": _SectionInReport;
        private constructor();
        _Name: string;
        AlternateBackColor: number;
        AlternateBackShade: number;
        AlternateBackThemeColorIndex: number;
        AlternateBackTint: number;
        readonly Application: Application;
        AutoHeight: boolean;
        BackColor: number;
        BackShade: number;
        BackThemeColorIndex: number;
        BackTint: number;
        CanGrow: boolean;
        CanShrink: boolean;
        readonly Controls: Children;
        DisplayWhen: number;
        EventProcPrefix: string;
        ForceNewPage: number;
        HasContinued: boolean;
        Height: number;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        KeepTogether: boolean;
        Name: string;
        NewRowOrCol: number;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnFormat: string;
        OnFormatMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnPaint: string;
        OnPaintMacro: string;
        OnPrint: string;
        OnPrintMacro: string;
        OnRetreat: string;
        OnRetreatMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        RepeatSection: boolean;
        SetTabOrder(): void;
        SpecialEffect: number;
        Tag: string;
        Visible: boolean;
        WillContinue: boolean;
    }

    class _ToggleButtonInOption {
        private "Access._ToggleButtonInOption_typekey": _ToggleButtonInOption;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoLabel: boolean;
        BackColor: number;
        BackShade: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        Bevel: number;
        BorderColor: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        Caption: string;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        Glow: number;
        Goto(): void;
        Gradient: number;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        HoverColor: number;
        HoverForeColor: number;
        HoverForeShade: number;
        HoverForeThemeColorIndex: number;
        HoverForeTint: number;
        HoverShade: number;
        HoverThemeColorIndex: number;
        HoverTint: number;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        ObjectPalette: any;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OptionValue: number;
        readonly Parent: any;
        Picture: string;
        PictureData: any;
        PictureType: number;
        PressedColor: number;
        PressedForeColor: number;
        PressedForeShade: number;
        PressedForeThemeColorIndex: number;
        PressedForeTint: number;
        PressedShade: number;
        PressedThemeColorIndex: number;
        PressedTint: number;
        readonly Properties: Properties;
        QuickStyle: number;
        QuickStyleMask: number;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        Shadow: number;
        Shape: number;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SoftEdges: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        Top: number;
        TopPadding: number;
        TripleState: boolean;
        Undo(): void;
        UseTheme: boolean;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class AccessField {
        private "Access.AccessField_typekey": AccessField;
        private constructor();
        IsMemberSafe(dispid: number): boolean;
        Value: any;
    }

    class AccessObject {
        private "Access.AccessObject_typekey": AccessObject;
        private constructor();
        readonly _Name: string;
        readonly Attributes: number;
        readonly CurrentView: AcCurrentView;
        readonly DateCreated: VarDate;
        readonly DateModified: VarDate;
        FullName: string;
        GetDependencyInfo(): DependencyInfo;
        IsDependentUpon(ObjectType: AcObjectType, ObjectName: string): boolean;
        readonly IsLoaded: boolean;
        IsMemberSafe(dispid: number): boolean;
        readonly IsWeb: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly Properties: AccessObjectProperties;
        readonly Type: AcObjectType;
    }

    interface AccessObjectProperties {
        Add(PropertyName: string, Value: any): void;
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): AccessObjectProperty;
        readonly Parent: any;
        Remove(Item: number | string): void;
        (Index: number | string): AccessObjectProperty;
    }

    class AccessObjectProperty {
        private "Access.AccessObjectProperty_typekey": AccessObjectProperty;
        private constructor();
        readonly _Value: any;
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        Value: any;
    }

    interface AccessObjects {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(var_0: number | string): AccessObject;
        readonly Parent: any;
        (var_0: number | string): AccessObject;
    }

    class AccessProperty {
        private "Access._AccessProperty_typekey": AccessProperty;
        private constructor();
        readonly Application: Application;
        readonly Category: number;
        readonly Inherited: boolean;
        IsMemberSafe(dispid: number): boolean;
        Name: string;
        readonly Parent: any;
        readonly Properties: DAO.Properties;
        Type: number;
        Value: any;
    }

    interface AdditionalData {
        Add(var_0: string): AdditionalData;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): AdditionalData;
        Name: string;
        (Index: number | string): AdditionalData;
    }

    class Application {
        private "Access.Application_typekey": Application;
        private constructor();
        AccessError(ErrorNumber: number): string;
        AddAutoCorrect(ChangeFrom: string, ChangeTo: string): void;
        AddToFavorites(): void;
        readonly ADOConnectString: string;
        readonly AnswerWizard: Office.AnswerWizard;
        readonly Application: Application;
        AppLoadString(id: number): any;
        readonly Assistance: Office.IAssistance;
        readonly Assistant: Office.Assistant;
        readonly AutoCorrect: AutoCorrect;
        AutomationSecurity: Office.MsoAutomationSecurity;
        BeginUndoable(Hwnd: number): void;
        readonly BrokenReference: boolean;
        readonly Build: number;
        BuildCriteria(Field: string, FieldType: number, Expression: string): string;
        BuilderString(): any;
        CloseCurrentDatabase(): void;
        readonly CodeContextObject: any;
        readonly CodeData: CodeData;
        CodeDb(): DAO.Database;
        readonly CodeProject: CodeProject;
        ColumnHistory(TableName: string, ColumnName: string, queryString: string): string;
        readonly COMAddIns: Office.COMAddIns;
        readonly CommandBars: Office.CommandBars;

        /** @param LogFile [LogFile=false] */
        CompactRepair(SourceFile: string, DestinationFile: string, LogFile?: boolean): boolean;
        ConvertAccessProject(
            SourceFilename: string,
            DestinationFilename: string,
            DestinationFileFormat: AcFileFormat,
        ): void;
        CreateAccessProject(filepath: string, Connect?: string): void;
        CreateAdditionalData(): AdditionalData;

        /** @param Section [Section=0] */
        CreateControl(
            FormName: string,
            ControlType: AcControlType,
            Section?: AcFormSection,
            Parent?: string,
            ColumnName?: string,
            Left?: number,
            Top?: number,
            Width?: number,
            Height?: number,
        ): Control;
        CreateControlEx(
            FormName: string,
            ControlType: AcControlType,
            Section: AcFormSection,
            Parent: string,
            ControlSource: string,
            Left: number,
            Top: number,
            Width: number,
            Height: number,
        ): Control;
        CreateControlExOld(
            FormName: string,
            ControlType: AcControlType,
            Section: AcFormSection,
            Parent: string,
            ControlSource: string,
            Left: number,
            Top: number,
            Width: number,
            Height: number,
        ): Control;

        /** @param Section [Section=0] */
        CreateControlOld(
            FormName: string,
            ControlType: AcControlType,
            Section?: AcFormSection,
            Parent?: string,
            ColumnName?: string,
            Left?: number,
            Top?: number,
            Width?: number,
            Height?: number,
        ): Control;

        /** @param CreateNewFile [CreateNewFile=true] */
        CreateDataAccessPage(FileName: string, CreateNewFile?: boolean): DataAccessPage;
        CreateForm(Database?: string, FormTemplate?: string): Form;
        CreateGroupLevel(ReportName: string, Expression: string, Header: number, Footer: number): number;

        /**
         * @param Path [Path=' ']
         * @param Name [Name=' ']
         * @param Company [Company=' ']
         * @param WorkgroupID [WorkgroupID=' ']
         * @param Replace [Replace=false]
         */
        CreateNewWorkgroupFile(
            Path?: string,
            Name?: string,
            Company?: string,
            WorkgroupID?: string,
            Replace?: boolean,
        ): void;
        CreateReport(Database?: string, ReportTemplate?: string): Report;

        /** @param Section [Section=0] */
        CreateReportControl(
            ReportName: string,
            ControlType: AcControlType,
            Section?: AcReportSection,
            Parent?: string,
            ColumnName?: string,
            Left?: number,
            Top?: number,
            Width?: number,
            Height?: number,
        ): Control;
        CreateReportControlEx(
            ReportName: string,
            ControlType: AcControlType,
            Section: AcReportSection,
            Parent: string,
            ControlName: string,
            Left: number,
            Top: number,
            Width: number,
            Height: number,
        ): Control;
        CreateReportControlExOld(
            ReportName: string,
            ControlType: AcControlType,
            Section: AcReportSection,
            Parent: string,
            ControlName: string,
            Left: number,
            Top: number,
            Width: number,
            Height: number,
        ): Control;

        /** @param Section [Section=0] */
        CreateReportControlOld(
            ReportName: string,
            ControlType: AcControlType,
            Section?: AcReportSection,
            Parent?: string,
            ColumnName?: string,
            Left?: number,
            Top?: number,
            Width?: number,
            Height?: number,
        ): Control;
        readonly CurrentData: CurrentData;
        CurrentDb(): DAO.Database;
        readonly CurrentObjectName: string;
        readonly CurrentObjectType: AcObjectType;
        readonly CurrentProject: CurrentProject;
        CurrentUser(): string;
        CurrentWebUser(DisplayOption: AcWebUserDisplay): any;
        CurrentWebUserGroups(DisplayOption: AcWebUserGroupsDisplay): any;
        readonly DataAccessPages: DataAccessPages;
        DAvg(Expr: string, Domain: string, Criteria?: string): number | null;
        readonly DBEngine: DAO.DBEngine;
        DCount(Expr: string, Domain: string, Criteria?: string): number | null;
        DDEExecute(ChanNum: number, Command: string): void;
        DDEInitiate(Application: string, Topic: string): number;
        DDEPoke(ChanNum: number, Item: string, Data: string): void;
        DDERequest(ChanNum: number, Item: string): string;
        DDETerminate(ChanNum: number): void;
        DDETerminateAll(): void;
        readonly DefaultWebOptions: DefaultWebOptions;
        DefaultWorkspaceClone(): DAO.Workspace;
        DelAutoCorrect(ChangeFrom: string): void;
        DeleteControl(FormName: string, ControlName: string): void;
        DeleteReportControl(ReportName: string, ControlName: string): void;
        DFirst(Expr: string, Domain: string, Criteria?: string): any;
        DirtyObject(ObjectType: AcObjectType, ObjectName: string): void;
        DLast(Expr: string, Domain: string, Criteria?: string): any;
        DLookup(Expr: string, Domain: string, Criteria?: string): any;
        DMax(Expr: string, Domain: string, Criteria?: string): any;
        DMin(Expr: string, Domain: string, Criteria?: string): any;
        readonly DoCmd: DoCmd;
        DStDev(Expr: string, Domain: string, Criteria?: string): number | null;
        DStDevP(Expr: string, Domain: string, Criteria?: string): number | null;
        DSum(Expr: string, Domain: string, Criteria?: string): number | null;
        DVar(Expr: string, Domain: string, Criteria?: string): number | null;
        DVarP(Expr: string, Domain: string, Criteria?: string): number | null;

        /** @param bstrStatusBarText [bstrStatusBarText=''] */
        Echo(EchoOn: number, bstrStatusBarText?: string): void;
        EuroConvert(
            Number: number,
            SourceCurrency: string,
            TargetCurrency: string,
            FullPrecision?: boolean,
            TriangulationPrecision?: number,
        ): number;
        Eval(StringExpr: string): any;

        /**
         * @param SelectedRecords [SelectedRecords=false]
         * @param FromPage [FromPage=1]
         * @param ToPage [ToPage=-1]
         */
        ExportCustomFixedFormat(
            ExternalExporter: any,
            OutputFileName: string,
            ObjectName: string,
            ObjectType: AcOutputObjectType,
            SelectedRecords?: boolean,
            FromPage?: number,
            ToPage?: number,
        ): void;
        ExportNavigationPane(Path: string): void;

        /**
         * @param DataTarget [DataTarget='']
         * @param SchemaTarget [SchemaTarget='']
         * @param PresentationTarget [PresentationTarget='']
         * @param ImageTarget [ImageTarget='']
         * @param Encoding [Encoding=0]
         * @param OtherFlags [OtherFlags=0]
         * @param WhereCondition [WhereCondition='']
         */
        ExportXML(
            ObjectType: AcExportXMLObjectType,
            DataSource: string,
            DataTarget?: string,
            SchemaTarget?: string,
            PresentationTarget?: string,
            ImageTarget?: string,
            Encoding?: AcExportXMLEncoding,
            OtherFlags?: AcExportXMLOtherFlags,
            WhereCondition?: string,
            AdditionalData?: AdditionalData,
        ): void;

        /**
         * @param DataTarget [DataTarget='']
         * @param SchemaTarget [SchemaTarget='']
         * @param PresentationTarget [PresentationTarget='']
         * @param ImageTarget [ImageTarget='']
         * @param Encoding [Encoding=0]
         * @param OtherFlags [OtherFlags=0]
         */
        ExportXMLOld(
            ObjectType: AcExportXMLObjectType,
            DataSource: string,
            DataTarget?: string,
            SchemaTarget?: string,
            PresentationTarget?: string,
            ImageTarget?: string,
            Encoding?: AcExportXMLEncoding,
            OtherFlags?: number,
        ): void;
        FeatureInstall: Office.MsoFeatureInstall;
        FileDialog(dialogType: Office.MsoFileDialogType): Office.FileDialog;
        readonly FileSearch: Office.FileSearch;

        /**
         * @param SubAddress [SubAddress='']
         * @param NewWindow [NewWindow=false]
         * @param AddHistory [AddHistory=true]
         * @param Method [Method=0]
         * @param HeaderInfo [HeaderInfo='']
         */
        FollowHyperlink(
            Address: string,
            SubAddress?: string,
            NewWindow?: boolean,
            AddHistory?: boolean,
            ExtraInfo?: string | ByteArray,
            Method?: Office.MsoExtraInfoMethod,
            HeaderInfo?: string,
        ): void;
        readonly Forms: Forms;
        GetHiddenAttribute(ObjectType: AcObjectType, ObjectName: string): boolean;

        /**
         * Returns different types of values based on how the options are set:
         * * If by selecting / clearing a checkbox, returns `boolean`
         * * If by typing a string or numeric value, returns `string` or `number`
         * * If by choosing from a list, will return the 0-based index of the selected item
         */
        GetOption(OptionName: string): boolean | string | number;
        GUIDFromString(String: string): ByteArray;
        HtmlEncode(PlainText: string, Length?: number): string;
        hWndAccessApp(): number;

        /** @param Part [Part=0] */
        HyperlinkPart(Hyperlink: any, Part?: AcHyperlinkPart): string;

        /** @param fAppendOnly [fAppendOnly=false] */
        ImportNavigationPane(Path: string, fAppendOnly?: boolean): void;

        /** @param ImportOptions [ImportOptions=1] */
        ImportXML(DataSource: string, ImportOptions?: AcImportXMLOption): void;
        InsertText(Text: string, ModuleName: string): void;
        InstantiateTemplate(Path: string): void;
        IsClient(): boolean;
        readonly IsCompiled: boolean;
        IsCurrentWebUserInGroup(GroupNameOrID: any): boolean;
        IsMemberSafe(dispid: number): boolean;
        readonly LanguageSettings: Office.LanguageSettings;
        LoadCustomUI(CustomUIName: string, CustomUIXML: string): void;
        LoadFromAXL(ObjectType: AcObjectType, ObjectName: string, FileName: string): void;
        LoadFromText(ObjectType: AcObjectType, ObjectName: string, FileName: string): void;
        LoadPicture(FileName: string): any;
        readonly LocalVars: LocalVars;
        readonly MacroError: MacroError;
        MenuBar: string;
        readonly Modules: Modules;
        readonly MsoDebugOptions: Office.MsoDebugOptions;
        readonly Name: string;
        NewAccessProject(filepath: string, Connect?: string): void;

        /**
         * @param FileFormat [FileFormat=0]
         * @param SiteAddress [SiteAddress='']
         * @param ListID [ListID='']
         */
        NewCurrentDatabase(
            filepath: string,
            FileFormat?: AcNewDatabaseFormat,
            Template?: string,
            SiteAddress?: string,
            ListID?: string,
        ): void;
        NewCurrentDatabaseOld(filepath: string): void;
        readonly NewFileTaskPane: Office.NewFile;
        Nz(Value: any, ValueIfNull?: any): any;

        /** @param Exclusive [Exclusive=false] */
        OpenAccessProject(filepath: string, Exclusive?: boolean): void;

        /**
         * @param Exclusive [Exclusive=false]
         * @param bstrPassword [bstrPassword='']
         */
        OpenCurrentDatabase(filepath: string, Exclusive?: boolean, bstrPassword?: string): void;

        /** @param Exclusive [Exclusive=false] */
        OpenCurrentDatabaseOld(filepath: string, Exclusive?: boolean): void;
        readonly Parent: any;
        PlainText(RichText: string, Length?: number): string;
        Printer: Printer;
        readonly Printers: Printers;
        readonly ProductCode: string;

        /** @param Option [Option=1] */
        Quit(Option?: AcQuitOption): void;
        readonly References: References;
        RefreshDatabaseWindow(): void;
        RefreshTitleBar(): void;
        ReloadAddIns(): void;
        ReplaceModule(objtyp: number, ModuleName: string, FileName: string, token: number): void;
        readonly Reports: Reports;
        readonly ReturnVars: ReturnVars;
        Run(
            Procedure: string,
            Arg1?: any,
            Arg2?: any,
            Arg3?: any,
            Arg4?: any,
            Arg5?: any,
            Arg6?: any,
            Arg7?: any,
            Arg8?: any,
            Arg9?: any,
            Arg10?: any,
            Arg11?: any,
            Arg12?: any,
            Arg13?: any,
            Arg14?: any,
            Arg15?: any,
            Arg16?: any,
            Arg17?: any,
            Arg18?: any,
            Arg19?: any,
            Arg20?: any,
            Arg21?: any,
            Arg22?: any,
            Arg23?: any,
            Arg24?: any,
            Arg25?: any,
            Arg26?: any,
            Arg27?: any,
            Arg28?: any,
            Arg29?: any,
            Arg30?: any,
        ): any;
        RunCommand(Command: AcCommand): void;
        SaveAsAXL(ObjectType: AcObjectType, ObjectName: string, FileName: string): void;
        SaveAsTemplate(
            Path: string,
            Title: string,
            IconPath: string,
            CoreTable: string,
            Category: string,
            PreviewPath?: any,
            Description?: string,
            InstantiationForm?: string,
            ApplicationPart?: boolean,
            IncludeData?: boolean,
            Variation?: any,
        ): void;
        SaveAsText(ObjectType: AcObjectType, ObjectName: string, FileName: string): void;
        readonly Screen: Screen;
        SetDefaultWorkgroupFile(Path: string): void;
        SetHiddenAttribute(ObjectType: AcObjectType, ObjectName: string, fHidden: boolean): void;

        /**
         * Pass different types of values based on how the option is set in the UI
         * * If by selecting / clearing a checkbox, pass a `boolean`
         * * If by typing a string or numeric value, pass a `string` or `number`
         * * If by choosing from a list, pass the 0-based index of the tiem to select
         */
        SetOption(OptionName: string, Setting: boolean | string | number): void;
        SetUndoRecording(yesno: number): void;
        ShortcutMenuBar: string;
        StringFromGUID(Guid: ByteArray): string;
        SysCmd(Action: AcSysCmdAction.acSysCmdInitMeter, StatusText: string, MaxValue: number): null;
        SysCmd(Action: AcSysCmdAction.acSysCmdUpdateMeter, CurrentValue: number): null;
        SysCmd(Action: AcSysCmdAction.acSysCmdSetStatus, StatusText: string): null;
        SysCmd(
            Action: AcSysCmdAction.acSysCmdGetObjectState,
            Argument2: AcObjectType,
            Argument3: string,
        ): Constants.acObjStateDirty | Constants.acObjStateNew | Constants.acObjStateOpen;
        SysCmd(
            Acton:
                | AcSysCmdAction.acSysCmdAccessDir
                | AcSysCmdAction.acSysCmdAccessVer
                | AcSysCmdAction.acSysCmdClearHelpTopic
                | AcSysCmdAction.acSysCmdClearStatus
                | AcSysCmdAction.acSysCmdGetWorkgroupFile
                | AcSysCmdAction.acSysCmdIniFile
                | AcSysCmdAction.acSysCmdProfile
                | AcSysCmdAction.acSysCmdRemoveMeter
                | AcSysCmdAction.acSysCmdRuntime,
        ): null;
        readonly TempVars: TempVars;

        /**
         * @param WellFormedXMLOutput [WellFormedXMLOutput=false]
         * @param ScriptOption [ScriptOption=1]
         */
        TransformXML(
            DataSource: string,
            TransformSource: string,
            OutputTarget: string,
            WellFormedXMLOutput?: boolean,
            ScriptOption?: AcTransformXMLScriptOption,
        ): void;
        UserControl: boolean;
        readonly VBE: VBIDE.VBE;
        readonly Version: string;
        readonly VGXFrameInterval: any;
        Visible: boolean;
        readonly WebServices: WebServices;
        readonly WizHook: WizHook;
    }

    class Attachment {
        private "Access.Attachment_typekey": Attachment;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        readonly AttachmentCount: number;
        AutoLabel: boolean;
        Back(): void;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        CurrentAttachment: number;
        DefaultPicture: string;
        DefaultPictureType: number;
        DisplayAs: AcDisplayAs;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FileData(var_0?: any): any;
        FileName(var_0?: number | string): string;
        FileType(var_0?: number | string): string;
        FileURL(var_0?: number | string): string;
        Forward(): void;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: null): void;
        Name: string;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnAttachmentCurrent: string;
        OnAttachmentCurrentMacro: string;
        OnChange: string;
        OnChangeMacro: string;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnDirty: string;
        OnDirtyMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Parent: any;
        PictureAlignment: number;
        PictureDisp(var_0?: any): any;
        PictureSizeMode: number;
        PictureTiling: boolean;
        readonly Properties: Properties;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class AutoCorrect {
        private "Access.AutoCorrect_typekey": AutoCorrect;
        private constructor();
        DisplayAutoCorrectOptions: boolean;
        IsMemberSafe(dispid: number): boolean;
    }

    class BoundObjectFrame {
        private "Access.BoundObjectFrame_typekey": BoundObjectFrame;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        Action: number;
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoActivate: number;
        AutoLabel: boolean;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        Class: string;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DisplayType: boolean;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        LpOleObject: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Object: any;
        ObjectPalette: any;
        ObjectVerbs(Index: number): string;
        ObjectVerbsCount: number;
        OldBorderStyle: number;
        readonly OldValue: any;
        OLEType: number;
        OLETypeAllowed: number;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnUpdated: string;
        OnUpdatedMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        Requery(): void;
        RightPadding: number;
        Scaling: number;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeMode: number;
        SizeToFit(): void;
        SourceDoc: string;
        SourceItem: string;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        UpdateOptions: number;
        Value: any;
        VarOleObject: any;
        Verb: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class CheckBox {
        private "Access.CheckBox_typekey": CheckBox;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoLabel: boolean;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OptionValue: number;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        TripleState: boolean;
        Undo(): void;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    interface Children {
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        Item<T = Control>(Index: number | string): T;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        <T = Control>(Index: number | string): T;
    }

    class Class {
        private "Access.Class_typekey": Class;
        private constructor();
    }

    class CodeData {
        private "Access.CodeData_typekey": CodeData;
        private constructor();
        readonly AllDatabaseDiagrams: AccessObjects;
        readonly AllFunctions: AccessObjects;
        readonly AllQueries: AccessObjects;
        readonly AllStoredProcedures: AccessObjects;
        readonly AllTables: AccessObjects;
        readonly AllViews: AccessObjects;
        IsMemberSafe(dispid: number): boolean;
    }

    class CodeProject {
        private "Access.CodeProject_typekey": CodeProject;
        private constructor();
        readonly AccessConnection: ADODB.Connection;
        AddSharedImage(SharedImageName: string, FileName: string): void;
        readonly AllDataAccessPages: AccessObjects;
        readonly AllForms: AccessObjects;
        readonly AllMacros: AccessObjects;
        readonly AllModules: AccessObjects;
        readonly AllReports: AccessObjects;
        readonly Application: Application;
        readonly BaseConnectionString: string;
        CloseConnection(): void;
        readonly Connection: ADODB.Connection;
        readonly FileFormat: AcFileFormat;
        readonly FullName: string;
        readonly ImportExportSpecifications: ImportExportSpecifications;
        readonly IsConnected: boolean;
        IsMemberSafe(dispid: number): boolean;
        readonly IsTrusted: boolean;
        readonly IsWeb: boolean;
        readonly Name: string;
        OpenConnection(BaseConnectionString?: string, UserID?: string, Password?: string): void;
        readonly Parent: any;
        readonly Path: string;
        readonly ProjectType: AcProjectType;
        readonly Properties: AccessObjectProperties;
        RemovePersonalInformation: boolean;
        readonly Resources: SharedResources;
        UpdateDependencyInfo(): void;
        readonly WebSite: string;
    }

    class ComboBox {
        private "Access.ComboBox_typekey": ComboBox;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AddItem(Item: string, Index?: number): void;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        AllowAutoCorrect: boolean;
        AllowedText: number;
        AllowValueListEdits: boolean;
        readonly Application: Application;
        AutoExpand: boolean;
        AutoLabel: boolean;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomMargin: number;
        BottomPadding: number;
        BoundColumn: number;
        CanGrow: boolean;
        CanShrink: boolean;
        Coltyp: number;
        Column(Index: number, Row?: number): any;
        ColumnCount: number;
        ColumnHeads: boolean;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ColumnWidths: string;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DecimalPlaces: number;
        DefaultValue: string;
        DisplayAsHyperlink: AcDisplayAsHyperlink;
        DisplayWhen: number;
        Dropdown(): void;
        Enabled: boolean;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        Format: string;
        readonly FormatConditions: FormatConditions;
        FormatPictureText: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        IMEHold: boolean;
        IMEMode: AcImeMode;
        IMESentenceMode: AcImeSentenceMode;
        InheritValueList: boolean;
        InputMask: string;
        InSelection: boolean;
        IsHyperlink: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        ItemData(Index: number): any;
        readonly ItemsSelected: _ItemsSelected;
        KeyboardLanguage: number;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftMargin: number;
        LeftPadding: number;
        LimitToList: boolean;
        ListCount: number;
        ListIndex: number;
        ListItemsEditForm: string;
        ListRows: number;
        ListWidth: string;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        NumeralShapes: number;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnChange: string;
        OnChangeMacro: string;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnDirty: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnNotInList: string;
        OnNotInListMacro: string;
        OnUndo: string;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        Recordset: DAO.Recordset | ADODB.Recordset;
        RemoveItem(Index: number | string): void;
        Requery(): void;
        RightMargin: number;
        RightPadding: number;
        RowSource: string;
        RowSourceType: string;
        ScrollBarAlign: number;
        Section: number;
        Selected(lRow: number): number;
        SelLength: number;
        SelStart: number;
        SelText: string;
        SeparatorCharacters: AcSeparatorCharacters;
        SetFocus(): void;
        ShortcutMenuBar: string;
        ShowOnlyRowSourceValues: boolean;
        SizeToFit(): void;
        readonly SmartTags: SmartTags;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Target: string;
        Text: string;
        TextAlign: number;
        TextAlignGeneral: number;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        Top: number;
        TopMargin: number;
        TopPadding: number;
        Undo(): void;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class CommandButton {
        private "Access.CommandButton_typekey": CommandButton;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdateMacro: string;
        Alignment: number;
        readonly Application: Application;
        AutoLabel: boolean;
        AutoRepeat: boolean;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdateMacro: string;
        Bevel: number;
        BorderColor: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        Cancel: boolean;
        Caption: string;
        ControlName: string;
        readonly Controls: Children;
        ControlTipText: string;
        ControlType: number;
        CursorOnHover: AcCursorOnHover;
        Default: boolean;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        Glow: number;
        Goto(): void;
        Gradient: number;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        HoverColor: number;
        HoverForeColor: number;
        HoverForeShade: number;
        HoverForeThemeColorIndex: number;
        HoverForeTint: number;
        HoverShade: number;
        HoverThemeColorIndex: number;
        HoverTint: number;
        readonly Hyperlink: Hyperlink;
        HyperlinkAddress: string;
        HyperlinkSubAddress: string;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        ObjectPalette: any;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnPush: string;
        readonly Parent: any;
        Picture: string;
        PictureCaptionArrangement: AcPictureCaptionArrangement;
        PictureData: any;
        PictureType: number;
        PressedColor: number;
        PressedForeColor: number;
        PressedForeShade: number;
        PressedForeThemeColorIndex: number;
        PressedForeTint: number;
        PressedShade: number;
        PressedThemeColorIndex: number;
        PressedTint: number;
        readonly Properties: Properties;
        QuickStyle: number;
        QuickStyleMask: number;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        Shadow: number;
        Shape: number;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SoftEdges: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Target: string;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        Top: number;
        TopPadding: number;
        Transparent: boolean;
        UseTheme: boolean;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class Control {
        private "Access.Control_typekey": Control;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        readonly Application: Application;
        BottomPadding: number;
        Column(Index: number, Row?: number): any;
        readonly Controls: Children;
        Dropdown(): void;
        readonly Form: Form;
        Goto(): void;
        GridlineColor: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        IsMemberSafe(dispid: number): boolean;
        ItemData(Index: number): any;
        readonly ItemsSelected: _ItemsSelected;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        LeftPadding: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Object: any;
        ObjectVerbs(Index: number): string;
        readonly OldValue: any;
        readonly Pages: Pages;
        readonly Parent: any;
        readonly Properties: Properties;
        readonly Report: Report;
        Requery(): void;
        RightPadding: number;
        Selected(lRow: number): number;
        SetFocus(): void;
        SizeToFit(): void;
        readonly SmartTags: SmartTags;
        TopPadding: number;
        Undo(): void;
        VerticalAnchor: AcVerticalAnchor;
    }

    interface Controls {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        Item<T = Control>(Index: number | string): T;
        readonly Parent: any;
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        <T = Control>(Index: number | string): T;
    }

    class CurrentData {
        private "Access.CurrentData_typekey": CurrentData;
        private constructor();
        readonly AllDatabaseDiagrams: AccessObjects;
        readonly AllFunctions: AccessObjects;
        readonly AllQueries: AccessObjects;
        readonly AllStoredProcedures: AccessObjects;
        readonly AllTables: AccessObjects;
        readonly AllViews: AccessObjects;
        IsMemberSafe(dispid: number): boolean;
    }

    class CurrentProject {
        private "Access.CurrentProject_typekey": CurrentProject;
        private constructor();
        readonly AccessConnection: ADODB.Connection;
        AddSharedImage(SharedImageName: string, FileName: string): void;
        readonly AllDataAccessPages: AccessObjects;
        readonly AllForms: AccessObjects;
        readonly AllMacros: AccessObjects;
        readonly AllModules: AccessObjects;
        readonly AllReports: AccessObjects;
        readonly Application: Application;
        readonly BaseConnectionString: string;
        CloseConnection(): void;
        readonly Connection: ADODB.Connection;
        readonly FileFormat: AcFileFormat;
        readonly FullName: string;
        readonly ImportExportSpecifications: ImportExportSpecifications;
        readonly IsConnected: boolean;
        IsMemberSafe(dispid: number): boolean;
        readonly IsTrusted: boolean;
        readonly IsWeb: boolean;
        readonly Name: string;
        OpenConnection(BaseConnectionString?: string, UserID?: string, Password?: string): void;
        readonly Parent: any;
        readonly Path: string;
        readonly ProjectType: AcProjectType;
        readonly Properties: AccessObjectProperties;
        RemovePersonalInformation: boolean;
        readonly Resources: SharedResources;
        UpdateDependencyInfo(): void;
        readonly WebSite: string;
    }

    class CustomControl {
        private "Access.CustomControl_typekey": CustomControl;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        About: string;
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
        readonly Application: Application;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        Cancel: boolean;
        Class: string;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        Custom: string;
        Default: boolean;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        LpOleObject: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Object: any;
        ObjectPalette: any;
        ObjectVerbs(Index: number): string;
        ObjectVerbsCount: number;
        OldBorderStyle: number;
        readonly OldValue: any;
        OLEClass: string;
        OleData: any;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnUpdated: string;
        OnUpdatedMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        SizeToFit(): void;
        SpecialEffect: number;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        Value: any;
        VarOleObject: any;
        Verb: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class DataAccessPage {
        private "Access.DataAccessPage_typekey": DataAccessPage;
        private constructor();
        readonly _Name: string;
        readonly Application: Application;
        ApplyTheme(ThemeName: string): void;
        ConnectionString: string;
        readonly CurrentSelection: any;
        readonly CurrentView: number;
        readonly Document: any;
        readonly FieldListConnection: any;
        IsMemberSafe(dispid: number): boolean;
        readonly MailEnvelope: Office.MsoEnvelope;
        readonly MSODSC: any;
        readonly Name: string;
        readonly Parent: any;
        RemovePersonalInformation: boolean;
        Tag: string;
        Visible: boolean;
        readonly WebOptions: WebOptions;
        readonly WindowHeight: number;
        readonly WindowWidth: number;
    }

    interface DataAccessPages {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(var_0: any): DataAccessPage;
        readonly Parent: any;
        (var_0: any): DataAccessPage;
    }

    class DefaultWebOptions {
        private "Access.DefaultWebOptions_typekey": DefaultWebOptions;
        private constructor();
        AlwaysSaveInDefaultEncoding: boolean;
        readonly Application: Application;
        CheckIfOfficeIsHTMLEditor: boolean;
        DownloadComponents: boolean;
        Encoding: Office.MsoEncoding;
        readonly FolderSuffix: string;
        FollowedHyperlinkColor: AcColorIndex;
        HyperlinkColor: AcColorIndex;
        IsMemberSafe(dispid: number): boolean;
        LocationOfComponents: string;
        OrganizeInFolder: boolean;
        readonly Parent: any;
        TargetBrowser: Office.MsoTargetBrowser;
        UnderlineHyperlinks: boolean;
        UseLongFileNames: boolean;
    }

    class DependencyInfo {
        private "Access.DependencyInfo_typekey": DependencyInfo;
        private constructor();
        readonly Dependants: DependencyObjects;
        readonly Dependencies: DependencyObjects;
        readonly InsufficientPermissions: DependencyObjects;
        IsMemberSafe(dispid: number): boolean;
        readonly OutOfDateObjects: DependencyObjects;
        readonly Parent: any;
        readonly UnsupportedObjects: DependencyObjects;
    }

    interface DependencyObjects {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): AccessObject;
        readonly Parent: any;
        (Index: number | string): AccessObject;
    }

    class DoCmd {
        private "Access.DoCmd_typekey": DoCmd;
        private constructor();
        AddMenu(MenuName: string, MenuMacroName: string, StatusBarText?: string): void;
        ApplyFilter(FilterName?: string, WhereCondition?: string, ControlName?: any): void;
        ApplyFilterOld0(FilterName?: string, WhereCondition?: string): void;
        Beep(): void;

        /** @param DataMode [DataMode=1] */
        BrowseTo(
            ObjectType: AcBrowseToObjectType,
            ObjectName: string,
            PathtoSubformControl?: string,
            WhereCondition?: string,
            Page?: string,
            DataMode?: AcFormOpenDataMode,
        ): void;
        CancelEvent(): void;
        ClearMacroError(): void;

        /**
         * @param ObjectType [ObjectType=-1]
         * @param Save [Save=0]
         */
        Close(ObjectType: AcObjectType, ObjectName: string, Save?: AcCloseSave): void;
        Close(): void;
        CloseDatabase(): void;
        CopyDatabaseFile(DatabaseFileName: string, OverwriteExistingFile?: boolean, DisconnectAllUsers?: boolean): void;

        /** @param SourceObjectType [SourceObjectType=-1] */
        CopyObject(
            DestinationDatabase: string,
            NewName: string,
            SourceObjectType?: AcObjectType,
            SourceObjectName?: string,
        ): void;

        /** @param ObjectType [ObjectType=-1] */
        DeleteObject(ObjectType?: AcObjectType, ObjectName?: string): void;

        /** @deprecated Use the **RunCommand** method */
        DoMenuItem(
            MenuBar: Constants.acFormBar | number,
            MenuName: Constants.acFile | Constants.acEditMenu | Constants.acRecordsMenu | number,
            Command:
                | Constants.acNew
                | Constants.acSaveForm
                | Constants.acSaveFormAs
                | Constants.acSaveRecord
                | Constants.acUndo
                | Constants.acCut
                | Constants.acCopy
                | Constants.acPaste
                | Constants.acDelete
                | Constants.acSelectRecord
                | Constants.acSelectAllRecords
                | Constants.acRefresh
                | number,
            Subcommand?: Constants.acObjectVerb | Constants.acObjectUpdate | number,
            Version?: Constants.acMenuVer70 | Constants.acMenuVer20 | Constants.acMenuVer1X,
        ): void;
        Echo(EchoOn: boolean, StatusBarText?: string): void;
        FindNext(): void;

        /**
         * @param Match [Match=1]
         * @param MatchCase [MatchCase=false]
         * @param Search [Search=2]
         * @param SearchAsFormatted [SearchAsFormatted=false]
         * @param OnlyCurrentField [OnlyCurrentField=-1]
         */
        FindRecord(
            FindWhat: string | number | VarDate,
            Match?: AcFindMatch,
            MatchCase?: boolean,
            Search?: AcSearchDirection,
            SearchAsFormatted?: boolean,
            OnlyCurrentField?: AcFindField,
            FindFirst?: boolean,
        ): void;
        GoToControl(ControlName: string): void;
        GoToPage(PageNumber: number, Right?: number, Down?: number): void;

        /**
         * @param ObjectType [ObjectType=-1]
         * @param Record [Record=1]
         */
        GoToRecord(
            ObjectType?: AcDataObjectType,
            ObjectName?: string,
            Record?: AcRecord.acFirst | AcRecord.acLast | AcRecord.acNewRec,
        ): void;

        /**
         * @param ObjectType [ObjectType=-1]
         * @param Record [Record=1]
         */
        GoToRecord(
            ObjectType?: AcDataObjectType,
            ObjectName?: string,
            Record?: AcRecord,
            Offset?: AcRecord.acNext | AcRecord.acPrevious | AcRecord.acGoTo,
        ): void;
        Hourglass(HourglassOn: boolean): void;
        LockNavigationPane(Lock: boolean): void;
        Maximize(): void;
        Minimize(): void;
        MoveSize(Right?: number, Down?: number, Width?: number, Height?: number): void;
        NavigateTo(Category?: any, Group?: any): void;

        /** @param View [View=0] */
        OpenDataAccessPage(DataAccessPageName: string, View?: AcDataAccessPageView): void;
        OpenDiagram(DiagramName: string): void;

        /**
         * @param View [View=0]
         * @param DataMode [DataMode=-1]
         * @param WindowMode [WindowMode=0]
         */
        OpenForm(
            FormName: string,
            View?: AcFormView,
            FilterName?: string,
            WhereCondition?: string,
            DataMode?: AcFormOpenDataMode,
            WindowMode?: AcWindowMode,
            OpenArgs?: string,
        ): void;

        /**
         * @param View [View=0]
         * @param DataMode [DataMode=1]
         */
        OpenFunction(FunctionName: string, View?: AcView, DataMode?: AcOpenDataMode): void;
        OpenModule(ModuleName?: string, ProcedureName?: string): void;

        /**
         * @param View [View=0]
         * @param DataMode [DataMode=1]
         */
        OpenQuery(QueryName: string, View?: AcView, DataMode?: AcOpenDataMode): void;

        /**
         * @param View [View=0]
         * @param WindowMode [WindowMode=0]
         */
        OpenReport(
            ReportName: string,
            View?: AcView,
            FilterName?: string,
            WhereCondition?: string,
            WindowMode?: AcWindowMode,
            OpenArgs?: string,
        ): void;

        /** @param View [View=0] */
        OpenReportOld0(ReportName: any, View?: AcView, FilterName?: any, WhereCondition?: any): void;

        /**
         * @param View [View=0]
         * @param DataMode [DataMode=1]
         */
        OpenStoredProcedure(ProcedureName: string, View?: AcView, DataMode?: AcOpenDataMode): void;

        /**
         * @param View [View=0]
         * @param DataMode [DataMode=1]
         */
        OpenTable(TableName: string, View?: AcView, DataMode?: AcOpenDataMode): void;

        /**
         * @param View [View=0]
         * @param DataMode [DataMode=1]
         */
        OpenView(ViewName: string, View?: AcView, DataMode?: AcOpenDataMode): void;

        /** @param OutputQuality [OutputQuality=0] */
        OutputTo(
            ObjectType: AcOutputObjectType.acOutputModule,
            ObjectName: string,
            OutputFormat: AcOutputFormat.acFormatTXT,
            OutputFile: string,
            AutoStart: boolean,
            TemplateFile: string,
            Encoding: any,
            OutputQuality?: AcExportQuality,
        ): void;

        /** @param OutputQuality [OutputQuality=0] */
        OutputTo(
            ObjectType: AcOutputObjectType,
            ObjectName?: string,
            OutputFormat?: AcOutputFormat,
            OutputFile?: string,
            AutoStart?: boolean,
            TemplateFile?: string,
            Encoding?: any,
            OutputQuality?: AcExportQuality,
        ): void;
        OutputToOld0(
            ObjectType: AcOutputObjectType,
            ObjectName?: any,
            OutputFormat?: any,
            OutputFile?: any,
            AutoStart?: any,
            TemplateFile?: any,
        ): void;
        OutputToOld1(
            ObjectType: AcOutputObjectType,
            ObjectName?: any,
            OutputFormat?: any,
            OutputFile?: any,
            AutoStart?: any,
            TemplateFile?: any,
            Encoding?: any,
        ): void;

        /**
         * @param PrintRange [PrintRange=0]
         * @param PrintQuality [PrintQuality=0]
         * @param Copies [Copies=1]
         * @param CollateCopies [CollateCopies=true]
         */
        PrintOut(
            PrintRange: AcPrintRange.acPages,
            PageFrom?: number,
            PageTo?: number,
            PrintQuality?: AcPrintQuality,
            Copies?: number,
            CollateCopies?: boolean,
        ): void;

        /**
         * @param PrintRange [PrintRange=0]
         * @param PrintQuality [PrintQuality=0]
         * @param Copies [Copies=1]
         * @param CollateCopies [CollateCopies=true]
         */
        PrintOut(
            PrintRange?: AcPrintRange,
            PageFrom?: undefined,
            PageTo?: undefined,
            PrintQuality?: AcPrintQuality,
            Copies?: number,
            CollateCopies?: boolean,
        ): void;

        /** @param Options [Options=1] */
        Quit(Options?: AcQuitOption): void;
        RefreshRecord(): void;

        /** @param ObjectType [ObjectType=-1] */
        Rename(NewName: string, ObjectType: AcObjectType, OldName: string): void;
        Rename(NewName: string): void;

        /** @param ObjectType [ObjectType=-1] */
        RepaintObject(ObjectType: AcObjectType, ObjectName: string): void;
        RepaintObject(): void;

        Requery(ControlName?: string): void;
        Restore(): void;
        RunCommand(Command: AcCommand): void;
        RunDataMacro(MacroName: string): void;
        RunMacro(MacroName: string, RepeatCount?: number, RepeatExpression?: string): void;
        RunSavedImportExport(SavedImportExportName: string): void;
        RunSQL(SQLStatement: string, UseTransaction?: boolean): void;

        /** @param ObjectType [ObjectType=-1] */
        Save(ObjectType: AcObjectType | undefined, ObjectName: string): void;
        Save(): void;

        /**
         * @param ObjectType [ObjectType=-1]
         * @param Record [Record=2]
         */
        SearchForRecord(
            ObjectType?: AcDataObjectType,
            ObjectName?: string,
            Record?: AcRecord,
            WhereCondition?: string,
        ): void;
        SelectObject(ObjectType: AcObjectType, ObjectName: string | undefined, InDatabaseWindow: true): void;
        SelectObject(ObjectType: AcObjectType, ObjectName: string): void;

        /** @param ObjectType [ObjectType=-1] */
        SendObject(
            ObjectType?: AcSendObjectType,
            ObjectName?: string,
            OutputFormat?: AcOutputFormat,
            To?: string,
            Cc?: string,
            Bcc?: string,
            Subject?: string,
            MessageText?: string,
            EditMessage?: boolean,
            TemplateFile?: string,
        ): void;
        SetDisplayedCategories(Show: boolean, Category?: string): void;
        SetFilter(FilterName?: string, WhereCondition?: string, ControlName?: string): void;
        SetMenuItem(
            MenuIndex: number,
            CommandIndex?: number,
            SubcommandIndex?: number,
            Flag?: AcSetMenuItemState,
        ): void;
        SetOrderBy(OrderBy: string, ControlName?: string): void;
        SetParameter(Name: string, Expression: any): void;

        /** @param Property [Property=0] */
        SetProperty(ControlName: string, Property?: AcProperty, Value?: any): void;
        SetWarnings(WarningsOn: boolean): void;
        ShowAllRecords(): void;

        /** @param Show [Show=0] */
        ShowToolbar(ToolbarName: string, Show?: AcShowToolbar): void;
        SingleStep(): void;

        /**
         * @param TransferType [TransferType=0]
         * @param ObjectType [ObjectType=0]
         * @param StructureOnly [StructureOnly=false\]
         * @param StoreLogin [StoreLogin=false]
         */
        TransferDatabase(
            TransferType?: AcDataTransferType,
            DatabaseType?: DatabaseType,
            DatabaseName?: string,
            ObjectType?: AcObjectType,
            Source?: string,
            Destination?: string,
            StructureOnly?: boolean,
            StoreLogin?: boolean,
        ): void;
        TransferSharePointList(
            TransferType: AcSharePointListTransferType,
            SiteAddress: string,
            ListID: string,
            ViewID?: string,
            TableName?: string,
            GetLookupDisplayValues?: boolean,
        ): void;

        /**
         * @param TransferType [TransferType=0]
         * @param SpreadsheetType [SpreadsheetType=10]
         * @param HasFieldNames [HasFieldNames=false]
         */
        TransferSpreadsheet(
            TransferType: AcDataTransferType.acImport,
            SpreadsheetType?: AcSpreadSheetType,
            TableName?: string,
            FileName?: string,
            HasFieldNames?: boolean,
            Range?: any,
        ): void;

        /**
         * @param TransferType [TransferType=0]
         * @param SpreadsheetType [SpreadsheetType=10]
         * @param HasFieldNames [HasFieldNames=false]
         */
        TransferSpreadsheet(
            TransferType?: AcDataTransferType,
            SpreadsheetType?: AcSpreadSheetType,
            TableName?: string,
            FileName?: string,
            HasFieldNames?: boolean,
        ): void;
        TransferSQLDatabase(
            Server: string,
            Database: string,
            UseTrustedConnection?: boolean,
            Login?: string,
            Password?: string,
            TransferCopyData?: boolean,
        ): void;

        /**
         * @param TransferType [TransferType=0]
         * @param Encoding For valid values see https://msdn.microsoft.com/en-us/library/windows/desktop/dd317756(v=vs.85).aspx
         */
        TransferText(
            TransferType?: AcTextTransferType.acExportHTML | AcTextTransferType.acImportHTML,
            SpecificationName?: string,
            TableName?: string,
            FileName?: string,
            HasFieldNames?: boolean,
            HTMLTableName?: string,
            CodePage?: number,
        ): void;
        TransferText(
            TransferType?: AcTextTransferType,
            SpecificationName?: string,
            TableName?: string,
            FileName?: string,
            HasFieldNames?: boolean,
            HTMLTableName?: undefined,
            CodePage?: number,
        ): void;
    }

    class EmptyCell {
        private "Access.EmptyCell_typekey": EmptyCell;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        readonly Application: Application;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BottomPadding: number;
        ControlName: string;
        ControlType: number;
        DisplayWhen: number;
        EventProcPrefix: string;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Parent: any;
        readonly Properties: Properties;
        RightPadding: number;
        Section: number;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SpecialEffect: number;
        StatusBarText: string;
        Tag: string;
        Top: number;
        TopPadding: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    interface Entities {
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: any): Entity;
        readonly Parent: any;
        (Index: any): Entity;
    }

    class Entity {
        private "Access.Entity_typekey": Entity;
        private constructor();
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        readonly Operations: Operations;
        readonly Parent: any;
    }

    class Form {
        private "Access.Form_typekey": Form;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        acHiddenCurrentPage: number;
        readonly ActiveControl: Control;
        AfterBeginTransaction: string;
        AfterBeginTransactionMacro: string;
        AfterCommitTransaction: string;
        AfterCommitTransactionMacro: string;
        AfterDelConfirm: string;
        AfterDelConfirmMacro: string;
        AfterFinalRender: string;
        AfterFinalRenderMacro: string;
        AfterInsert: string;
        AfterInsertMacro: string;
        AfterLayout: string;
        AfterLayoutMacro: string;
        AfterRender: string;
        AfterRenderMacro: string;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        AllowAdditions: boolean;
        AllowDatasheetView: boolean;
        AllowDeletions: boolean;
        AllowDesignChanges: boolean;
        AllowEditing: boolean;
        AllowEdits: boolean;
        AllowFilters: boolean;
        AllowFormView: boolean;
        AllowLayoutView: boolean;
        AllowPivotChartView: boolean;
        AllowPivotTableView: boolean;
        AllowUpdating: number;
        readonly Application: Application;
        AutoCenter: boolean;
        AutoResize: boolean;
        BatchUpdates: boolean;
        BeforeBeginTransaction: string;
        BeforeBeginTransactionMacro: string;
        BeforeCommitTransaction: string;
        BeforeCommitTransactionMacro: string;
        BeforeDelConfirm: string;
        BeforeDelConfirmMacro: string;
        BeforeInsert: string;
        BeforeInsertMacro: string;
        BeforeQuery: string;
        BeforeQueryMacro: string;
        BeforeRender: string;
        BeforeRenderMacro: string;
        BeforeScreenTip: string;
        BeforeScreenTipMacro: string;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BeginBatchEdit: string;
        BeginBatchEditMacro: string;
        Bookmark: ADODB.Bookmark | DAO.Bookmark;
        BorderStyle: number;
        Caption: string;
        readonly ChartSpace: any;
        CloseButton: boolean;
        CommandBeforeExecute: string;
        CommandBeforeExecuteMacro: string;
        CommandChecked: string;
        CommandCheckedMacro: string;
        CommandEnabled: string;
        CommandEnabledMacro: string;
        CommandExecute: string;
        CommandExecuteMacro: string;
        CommitOnClose: number;
        CommitOnNavigation: boolean;
        readonly ConnectControl: Control;
        ConnectSynch: number;
        ControlBox: boolean;
        readonly Controls: Controls;
        Count: number;
        CurrentRecord: number;
        CurrentSectionLeft: number;
        CurrentSectionTop: number;
        CurrentView: number;
        Cycle: number;
        DataChange: string;
        DataChangeMacro: string;
        DataEntry: boolean;
        DataSetChange: string;
        DataSetChangeMacro: string;
        DatasheetAlternateBackColor: number;
        DatasheetBackColor: number;
        DatasheetBorderLineStyle: number;
        DatasheetCellsEffect: number;
        DatasheetColumnHeaderUnderlineStyle: number;
        DatasheetFontHeight: number;
        DatasheetFontItalic: boolean;
        DatasheetFontName: string;
        DatasheetFontUnderline: boolean;
        DatasheetFontWeight: number;
        DatasheetForeColor: number;
        DatasheetGridlinesBehavior: number;
        DatasheetGridlinesColor: number;
        DefaultControl(ControlType: number): Control;
        DefaultEditing: number;
        DefaultView: number;
        Dirty: boolean;
        DisplayOnSharePointSite: number;
        DividingLines: boolean;
        readonly Dynaset: any;
        FastLaserPrinting: boolean;
        FetchDefaults: boolean;
        Filter: string;
        FilterOn: boolean;
        FilterOnLoad: boolean;
        FitToScreen: boolean;
        readonly Form: Form;
        FormName: string;
        FrozenColumns: number;

        /**
         * @param Right [Right=0]
         * @param Down [Down=0]
         */
        GoToPage(PageNumber: number, Right?: number, Down?: number): void;
        GridX: number;
        GridY: number;
        HasModule: boolean;
        HelpContextId: number;
        HelpFile: string;
        HorizontalDatasheetGridlineStyle: number;
        Hwnd: number;
        InputParameters: string;
        InsideHeight: number;
        InsideWidth: number;
        KeyPreview: boolean;
        LayoutForPrint: boolean;
        LogicalPageHeight: number;
        LogicalPageWidth: number;
        MaxButton: boolean;
        MaxRecButton: boolean;
        MaxRecords: number;
        MenuBar: string;
        MinButton: boolean;
        MinMaxButtons: number;
        Modal: boolean;
        readonly Module: Module;
        MouseWheel: string;
        MouseWheelMacro: string;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Moveable: boolean;
        Name: string;
        NavigationButtons: boolean;
        NavigationCaption: string;
        readonly NewRecord: number;
        OnActivate: string;
        OnActivateMacro: string;
        OnApplyFilter: string;
        OnApplyFilterMacro: string;
        OnClick: string;
        OnClickMacro: string;
        OnClose: string;
        OnCloseMacro: string;
        OnConnect: string;
        OnConnectMacro: string;
        OnCurrent: string;
        OnCurrentMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnDeactivate: string;
        OnDeactivateMacro: string;
        OnDelete: string;
        OnDeleteMacro: string;
        OnDirty: string;
        OnDirtyMacro: string;
        OnDisconnect: string;
        OnDisconnectMacro: string;
        OnError: string;
        OnErrorMacro: string;
        OnFilter: string;
        OnFilterMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnInsert: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLoad: string;
        OnLoadMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMenu: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnOpen: string;
        OnOpenMacro: string;
        OnRecordExit: string;
        OnRecordExitMacro: string;
        OnResize: string;
        OnResizeMacro: string;
        OnTimer: string;
        OnTimerMacro: string;
        OnUndo: string;
        OnUndoMacro: string;
        OnUnload: string;
        OnUnloadMacro: string;
        OpenArgs: string;
        OrderBy: string;
        OrderByOn: boolean;
        OrderByOnLoad: boolean;
        Orientation: number;
        Page: number;
        Pages: number;
        Painting: boolean;
        PaintPalette: any;
        PaletteSource: string;
        readonly Parent: any;
        Picture: string;
        PictureAlignment: number;
        PictureData: any;
        PicturePalette: any;
        PictureSizeMode: number;
        PictureTiling: boolean;
        PictureType: number;
        readonly PivotTable: any;
        PivotTableChange: string;
        PivotTableChangeMacro: string;
        PopUp: boolean;
        Printer: Printer;
        readonly Properties: Properties;
        PrtDevMode: any;
        PrtDevNames: any;
        PrtMip: any;
        Query: string;
        QueryMacro: string;
        Recalc(): void;
        RecordLocks: number;
        RecordSelectors: boolean;
        Recordset: DAO.Recordset | ADODB.Recordset | null;
        readonly RecordsetClone: DAO.Recordset | ADODB.Recordset;
        RecordsetType: number;
        RecordSource: string;
        RecordSourceQualifier: string;
        Refresh(): void;
        Repaint(): void;
        Requery(): void;
        ResyncCommand: string;
        RibbonName: string;
        RollbackTransaction: string;
        RollbackTransactionMacro: string;
        RowHeight: number;
        ScrollBars: number;
        Section(Index: AcFormSection | string): Section;
        SectionOld(Index: any): Section;
        SelectionChange: string;
        SelectionChangeMacro: string;
        SelHeight: number;
        SelLeft: number;
        SelTop: number;
        SelWidth: number;
        ServerFilter: string;
        ServerFilterByForm: boolean;
        SetFocus(): void;
        ShortcutMenu: boolean;
        ShortcutMenuBar: string;
        ShowGrid: boolean;
        SplitFormDatasheet: AcSplitFormDatasheet;
        SplitFormOrientation: AcSplitFormOrientation;
        SplitFormPrinting: AcSplitFormPrinting;
        SplitFormSize: number;
        SplitFormSplitterBar: boolean;
        SplitFormSplitterBarSave: boolean;
        SubdatasheetExpanded: boolean;
        SubdatasheetHeight: number;
        TabularCharSet: number;
        TabularFamily: number;
        Tag: string;
        TimerInterval: number;
        Toolbar: string;
        Undo(): void;
        UndoBatchEdit: string;
        UndoBatchEditMacro: string;
        UniqueTable: string;
        UseDefaultPrinter: boolean;
        VerticalDatasheetGridlineStyle: number;
        ViewChange: string;
        ViewChangeMacro: string;
        ViewsAllowed: number;
        Visible: boolean;
        WhatsThisButton: boolean;
        Width: number;
        WindowHeight: number;
        readonly WindowLeft: number;
        readonly WindowTop: number;
        WindowWidth: number;
        ZoomControl: number;
    }

    class FormatCondition {
        private "Access.FormatCondition_typekey": FormatCondition;
        private constructor();
        BackColor: number;
        Delete(): void;
        Enabled: boolean;
        readonly Expression1: string;
        readonly Expression2: string;
        FontBold: boolean;
        FontItalic: boolean;
        FontUnderline: boolean;
        ForeColor: number;
        IsMemberSafe(dispid: number): boolean;
        LongestBarLimit: AcFormatBarLimits;
        LongestBarValue: string;

        /** @param Operator [Operator=0] */
        Modify(
            Type: AcFormatConditionType.acExpression,
            Operator: undefined,
            Expression1: string | number | boolean,
        ): void;

        /** @param Operator [Operator=0] */
        Modify(
            Type: AcFormatConditionType,
            Operator: AcFormatConditionOperator.acBetween | AcFormatConditionOperator.acNotBetween,
            Expression1: string | number | boolean,
            Expression2: string | number | boolean,
        ): void;

        /** @param Operator [Operator=0] */
        Modify(
            Type: AcFormatConditionType,
            Operator?: AcFormatConditionOperator,
            Expression1?: string | number | boolean,
        ): void;

        readonly Operator: AcFormatConditionOperator;
        ShortestBarLimit: AcFormatBarLimits;
        ShortestBarValue: string;
        ShowBarOnly: boolean;
        readonly Type: AcFormatConditionType;
    }

    interface FormatConditions {
        /** @param Operator [Operator=0] */
        Add(
            Type: AcFormatConditionType.acExpression,
            Operator: undefined,
            Expression1: string | number | boolean,
        ): FormatCondition;

        /** @param Operator [Operator=0] */
        Add(
            Type: AcFormatConditionType,
            Operator: AcFormatConditionOperator.acBetween | AcFormatConditionOperator.acNotBetween,
            Expression1: string | number | boolean,
            Expression2: string | number | boolean,
        ): FormatCondition;

        /** @param Operator [Operator=0] */
        Add(
            Type: AcFormatConditionType,
            Operator?: AcFormatConditionOperator,
            Expression1?: string | number | boolean,
        ): FormatCondition;

        readonly Application: Application;
        readonly Count: number;
        Delete(): void;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number): FormatCondition;
        readonly Parent: any;
        (Index: number): FormatCondition;
    }

    interface Forms {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): Form;
        readonly Parent: any;
        (Index: number | string): Form;
    }

    class GroupLevel {
        private "Access.GroupLevel_typekey": GroupLevel;
        private constructor();
        readonly Application: Application;
        ControlSource: string;
        GroupFooter: boolean;
        GroupHeader: boolean;
        GroupInterval: number;
        GroupOn: number;
        IsMemberSafe(dispid: number): boolean;
        KeepTogether: number;
        readonly Parent: any;
        readonly Properties: Properties;
        SortOrder: boolean;
    }

    class Hyperlink {
        private "Access.Hyperlink_typekey": Hyperlink;
        private constructor();
        Address: string;
        AddToFavorites(): void;
        CreateNewDocument(FileName: string, EditNow: boolean, Overwrite: boolean): void;
        EmailSubject: string;

        /**
         * @param NewWindow [NewWindow=false]
         * @param AddHistory [AddHistory=true]
         * @param Method [Method=0]
         * @param HeaderInfo [HeaderInfo='']
         */
        Follow(
            NewWindow?: boolean,
            AddHistory?: boolean,
            ExtraInfo?: any,
            Method?: Office.MsoExtraInfoMethod,
            HeaderInfo?: string,
        ): void;
        IsMemberSafe(dispid: number): boolean;
        ScreenTip: string;
        SubAddress: string;
        TextToDisplay: string;
    }

    class Image {
        private "Access.Image_typekey": Image;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        readonly Application: Application;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        ControlName: string;
        readonly Controls: Children;
        ControlTipText: string;
        ControlType: number;
        DisplayWhen: number;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        HyperlinkAddress: string;
        HyperlinkSubAddress: string;
        ImageHeight: number;
        ImageWidth: number;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        ObjectPalette: any;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Parent: any;
        Picture: string;
        PictureAlignment: number;
        PictureData: any;
        PictureTiling: boolean;
        PictureType: number;
        readonly Properties: Properties;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeMode: number;
        SizeToFit(): void;
        SpecialEffect: number;
        Tag: string;
        Target: string;
        Top: number;
        TopPadding: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class ImportExportSpecification {
        private "Access.ImportExportSpecification_typekey": ImportExportSpecification;
        private constructor();
        readonly Application: Application;
        Delete(): void;
        Description: string;
        Execute(Prompt?: boolean): void;
        IsMemberSafe(dispid: number): boolean;
        Name: string;
        readonly Parent: any;
        XML: string;
    }

    interface ImportExportSpecifications {
        Add(Name: string, SpecificationDefinition: string): ImportExportSpecification;
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): ImportExportSpecification;
        readonly Parent: any;
        (Index: number | string): ImportExportSpecification;
    }

    class Label {
        private "Access.Label_typekey": Label;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        readonly Application: Application;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomMargin: number;
        BottomPadding: number;
        Caption: string;
        ControlName: string;
        ControlTipText: string;
        ControlType: number;
        DisplayWhen: number;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        HyperlinkAddress: string;
        HyperlinkSubAddress: string;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftMargin: number;
        LeftPadding: number;
        LineSpacing: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        NumeralShapes: number;
        OldBorderStyle: number;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        RightMargin: number;
        RightPadding: number;
        Section: number;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        readonly SmartTags: SmartTags;
        SpecialEffect: number;
        Tag: string;
        Target: string;
        TextAlign: number;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        Top: number;
        TopMargin: number;
        TopPadding: number;
        Vertical: boolean;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class Line {
        private "Access.Line_typekey": Line;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        readonly Application: Application;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        ControlName: string;
        ControlType: number;
        DisplayWhen: number;
        EventProcPrefix: string;
        Height: number;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        Left: number;
        LineSlant: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OldBorderStyle: number;
        readonly Parent: any;
        readonly Properties: Properties;
        Section: number;
        SizeToFit(): void;
        SpecialEffect: number;
        Tag: string;
        Top: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class ListBox {
        private "Access.ListBox_typekey": ListBox;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AddItem(Item: string, Index?: number): void;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        AllowValueListEdits: boolean;
        readonly Application: Application;
        AutoLabel: boolean;
        BackColor: number;
        BackShade: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        BoundColumn: number;
        Column(Index: number, Row?: number): any;
        ColumnCount: number;
        ColumnHeads: boolean;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ColumnWidths: string;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        IMEHold: boolean;
        IMEMode: AcImeMode;
        IMESentenceMode: AcImeSentenceMode;
        InheritValueList: boolean;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        ItemData(Index: number): any;
        readonly ItemsSelected: _ItemsSelected;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        ListCount: number;
        ListIndex: number;
        ListItemsEditForm: string;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        MultiSelect: number;
        Name: string;
        NumeralShapes: number;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        Recordset: DAO.Recordset | ADODB.Recordset;
        RemoveItem(Index: number | string): void;
        Requery(): void;
        RightPadding: number;
        RowSource: string;
        RowSourceType: string;
        ScrollBarAlign: number;
        Section: number;
        Selected(lRow: number): number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        ShowOnlyRowSourceValues: boolean;
        SizeToFit(): void;
        readonly SmartTags: SmartTags;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        TextAlign: number;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        Top: number;
        TopPadding: number;
        Undo(): void;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class LocalVar {
        private "Access.LocalVar_typekey": LocalVar;
        private constructor();
        _Value: any;
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        Value: any;
    }

    interface LocalVars {
        Add(Name: string, Value: any): void;
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: any): LocalVar;
        readonly Parent: any;
        (Index: any): LocalVar;
    }

    class MacroError {
        private "Access.MacroError_typekey": MacroError;
        private constructor();
        readonly ActionName: string;
        readonly Arguments: string;
        readonly Condition: string;
        readonly Description: string;
        IsMemberSafe(dispid: number): boolean;
        readonly MacroName: string;
        readonly Number: number;
    }

    class Module {
        private "Access.Module_typekey": Module;
        private constructor();
        AddFromFile(FileName: string): void;
        AddFromString(String: string): void;
        readonly Application: Application;
        readonly CountOfDeclarationLines: number;
        readonly CountOfLines: number;
        CreateEventProc(EventName: string, ObjectName: string): number;
        DeleteLines(StartLine: number, Count: number): void;

        /**
         * @param WholeWord [WholeWord=false]
         * @param MatchCase [MatchCase=false]
         * @param PatternSearch [PatternSearch=false]
         */
        Find(
            Target: string,
            StartLine: number,
            StartColumn: number,
            EndLine: number,
            EndColumn: number,
            WholeWord?: boolean,
            MatchCase?: boolean,
            PatternSearch?: boolean,
        ): boolean;
        InsertLines(Line: number, String: string): void;
        InsertText(Text: string): void;
        IsMemberSafe(dispid: number): boolean;
        Lines(Line: number, NumLines: number): string;
        Name: string;
        readonly Parent: any;
        ProcBodyLine(ProcName: string, ProcKind: VBIDE.vbext_ProcKind): number;
        ProcCountLines(ProcName: string, ProcKind: VBIDE.vbext_ProcKind): number;
        ProcOfLine(Line: number, pprockind: VBIDE.vbext_ProcKind): string;
        ProcStartLine(ProcName: string, ProcKind: VBIDE.vbext_ProcKind): number;
        ReplaceLine(Line: number, String: string): void;
        readonly Type: AcModuleType;
    }

    interface Modules {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): Module;
        readonly Parent: any;
        (Index: number | string): Module;
    }

    class NavigationButton {
        private "Access.NavigationButton_typekey": NavigationButton;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdateMacro: string;
        Alignment: number;
        readonly Application: Application;
        AutoLabel: boolean;
        AutoRepeat: boolean;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdateMacro: string;
        Bevel: number;
        BorderColor: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        Caption: string;
        ControlName: string;
        readonly Controls: Children;
        ControlTipText: string;
        ControlType: number;
        CursorOnHover: AcCursorOnHover;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        Glow: number;
        Goto(): void;
        Gradient: number;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        HoverColor: number;
        HoverForeColor: number;
        HoverForeShade: number;
        HoverForeThemeColorIndex: number;
        HoverForeTint: number;
        HoverShade: number;
        HoverThemeColorIndex: number;
        HoverTint: number;
        readonly Hyperlink: Hyperlink;
        HyperlinkAddress: string;
        HyperlinkSubAddress: string;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        readonly Left: number;
        LeftPadding: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        NavigationTargetName: string;
        NavigationWhereClause: string;
        ObjectPalette: any;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnPush: string;
        readonly Parent: any;
        readonly ParentTab: NavigationButton;
        Picture: string;
        PictureCaptionArrangement: AcPictureCaptionArrangement;
        PictureData: any;
        PictureType: number;
        PressedColor: number;
        PressedForeColor: number;
        PressedForeShade: number;
        PressedForeThemeColorIndex: number;
        PressedForeTint: number;
        PressedShade: number;
        PressedThemeColorIndex: number;
        PressedTint: number;
        readonly Properties: Properties;
        QuickStyle: number;
        QuickStyleMask: number;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        Shadow: number;
        Shape: number;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SoftEdges: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Target: string;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        readonly Top: number;
        TopPadding: number;
        Transparent: boolean;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class NavigationControl {
        private "Access.NavigationControl_typekey": NavigationControl;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AllowedText: number;
        readonly Application: Application;
        AutoTab: boolean;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        ControlName: string;
        readonly Controls: Children;
        ControlTipText: string;
        ControlType: number;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FilterLookup: number;
        readonly FormatConditions: FormatConditions;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        KeyboardLanguage: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        LineSpacing: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        NumeralShapes: number;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        ScrollBarAlign: number;
        Section: number;
        readonly SelectedTab: NavigationButton;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        readonly SmartTags: SmartTags;
        Span: AcNavigationSpan;
        SpecialEffect: number;
        StatusBarText: string;
        SubForm: string;
        TabIndex: number;
        readonly Tabs: Children;
        TabStop: boolean;
        Tag: string;
        Target: string;
        Top: number;
        TopPadding: number;
        Undo(): void;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class ObjectFrame {
        private "Access.ObjectFrame_typekey": ObjectFrame;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        Action: number;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoActivate: number;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        Class: string;
        ColumnCount: number;
        ColumnHeads: boolean;
        ControlName: string;
        readonly Controls: Children;
        ControlTipText: string;
        ControlType: number;
        Data: number;
        DisplayType: boolean;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        Item: string;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        LinkChildFields: string;
        LinkMasterFields: string;
        Locked: boolean;
        LpOleObject: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Object: any;
        ObjectPalette: any;
        ObjectVerbs(Index: number): string;
        ObjectVerbsCount: number;
        OldBorderStyle: number;
        readonly OldValue: any;
        OLEClass: string;
        OleData: any;
        OLEType: number;
        OLETypeAllowed: number;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnUpdated: string;
        readonly Parent: any;
        readonly Properties: Properties;
        Requery(): void;
        RightPadding: number;
        RowSource: string;
        RowSourceType: string;
        Scaling: number;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeMode: number;
        SizeToFit(): void;
        SourceDoc: string;
        SourceItem: string;
        SourceObject: string;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        UpdateMethod: number;
        UpdateOptions: number;
        VarOleObject: any;
        Verb: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class Operation {
        private "Access.Operation_typekey": Operation;
        private constructor();

        /** @param bstrParameters [bstrParameters=''] */
        Execute(bstrParameters?: string): any;
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly WSParameters: WSParameters;
    }

    interface Operations {
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): Operation;
        readonly Parent: any;
        (Index: number | string): Operation;
    }

    class OptionButton {
        private "Access.OptionButton_typekey": OptionButton;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoLabel: boolean;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OptionValue: number;
        readonly Parent: any;
        readonly Properties: Properties;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        TripleState: boolean;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class OptionGroup {
        private "Access.OptionGroup_typekey": OptionGroup;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoLabel: boolean;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        Left: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        Requery(): void;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        Undo(): void;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class Page {
        private "Access.Page_typekey": Page;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        readonly Application: Application;
        Caption: string;
        ControlName: string;
        readonly Controls: Children;
        ControlTipText: string;
        ControlType: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        Height: number;
        HelpContextId: number;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        Left: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        PageIndex: number;
        readonly Parent: any;
        Picture: string;
        PictureData: any;
        PictureType: number;
        readonly Properties: Properties;
        Requery(): void;
        Section: number;
        SetFocus(): void;
        SetTabOrder(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        StatusBarText: string;
        Tag: string;
        Top: number;
        Visible: boolean;
        Width: number;
    }

    class PageBreak {
        private "Access.PageBreak_typekey": PageBreak;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        readonly Application: Application;
        ControlName: string;
        ControlType: number;
        EventProcPrefix: string;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        Left: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Parent: any;
        readonly Properties: Properties;
        Section: number;
        SizeToFit(): void;
        Tag: string;
        Top: number;
        Visible: boolean;
    }

    interface Pages {
        Add(Before?: number): Page;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): Page;
        Remove(Item?: number): void;
        (Index: number | string): Page;
    }

    class PaletteButton {
        private "Access.PaletteButton_typekey": PaletteButton;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoLabel: boolean;
        BackColor: number;
        BackStyle: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        Left: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OptionValue: number;
        readonly Parent: any;
        readonly Properties: Properties;
        Requery(): void;
        Section: number;
        SetFocus(): void;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TripleState: boolean;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        Visible: boolean;
        Width: number;
    }

    class Printer {
        private "Access.Printer_typekey": Printer;
        private constructor();
        BottomMargin: number;
        ColorMode: AcPrintColor;
        ColumnSpacing: number;
        Copies: number;
        DataOnly: boolean;
        DefaultSize: boolean;
        readonly DeviceName: string;
        readonly DriverName: string;
        Duplex: AcPrintDuplex;
        IsMemberSafe(dispid: number): boolean;
        ItemLayout: AcPrintItemLayout;
        ItemsAcross: number;
        ItemSizeHeight: number;
        ItemSizeWidth: number;
        LeftMargin: number;
        Orientation: AcPrintOrientation;
        PaperBin: AcPrintPaperBin;
        PaperSize: AcPrintPaperSize;
        readonly Port: string;
        PrintQuality: AcPrintObjQuality;
        RightMargin: number;
        RowSpacing: number;
        TopMargin: number;
    }

    interface Printers {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): Printer;
        readonly Parent: any;
        (Index: number | string): Printer;
    }

    interface Properties {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): AccessProperty;
        readonly Parent: any;
        (Index: number | string): AccessProperty;
    }

    class Rectangle {
        private "Access.Rectangle_typekey": Rectangle;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        readonly Application: Application;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        ControlName: string;
        ControlType: number;
        DisplayWhen: number;
        EventProcPrefix: string;
        Height: number;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        Left: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OldBorderStyle: number;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        Section: number;
        SizeToFit(): void;
        SpecialEffect: number;
        Tag: string;
        Top: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class Reference {
        private "Access.Reference_typekey": Reference;
        private constructor();
        readonly BuiltIn: boolean;
        readonly Collection: References;
        readonly FullPath: string;
        readonly Guid: string;
        readonly IsBroken: boolean;
        IsMemberSafe(dispid: number): boolean;
        readonly Kind: VBIDE.vbext_RefKind;
        readonly Major: number;
        readonly Minor: number;
        readonly Name: string;
    }

    interface References {
        AddFromFile(FileName: string): Reference;
        AddFromGuid(Guid: string, Major: number, Minor: number): Reference;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(var_0: number | string): Reference;
        readonly Parent: any;
        Remove(Reference: Reference): void;
        (var_0: number | string): Reference;
    }

    class Report {
        private "Access.Report_typekey": Report;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
        acHiddenCurrentPage: number;
        readonly ActiveControl: Control;
        AllowDesignChanges: boolean;
        AllowLayoutView: boolean;
        AllowReportView: boolean;
        readonly Application: Application;
        AutoCenter: boolean;
        AutoResize: boolean;
        BorderStyle: number;
        Caption: string;
        Circle(
            flags: number,
            X: number,
            Y: number,
            radius: number,
            color: number,
            start: number,
            end: number,
            aspect: number,
        ): void;
        CloseButton: boolean;
        ControlBox: boolean;
        readonly Controls: Controls;
        Count: number;
        CurrentRecord: number;
        CurrentView: number;
        CurrentX: number;
        CurrentY: number;
        Cycle: number;
        DateGrouping: number;
        DefaultControl(ControlType: number): Control;
        DefaultView: number;
        Dirty: boolean;
        DisplayOnSharePointSite: number;
        DrawMode: number;
        DrawStyle: number;
        DrawWidth: number;
        FastLaserPrinting: boolean;
        FillColor: number;
        FillStyle: number;
        Filter: string;
        FilterOn: boolean;
        FilterOnLoad: boolean;
        FitToPage: boolean;
        FontBold: number;
        FontItalic: number;
        FontName: string;
        FontSize: number;
        FontUnderline: number;
        ForeColor: number;
        FormatCount: number;
        FormName: string;
        GridX: number;
        GridY: number;
        GroupLevel(Index: number): GroupLevel;
        GrpKeepTogether: number;
        HasData: number;
        HasModule: boolean;
        Height: number;
        HelpContextId: number;
        HelpFile: string;
        Hwnd: number;
        InputParameters: string;
        KeyPreview: boolean;
        LayoutForPrint: boolean;
        Left: number;
        Line(flags: number, x1: number, y1: number, x2: number, y2: number, color: number): void;
        LogicalPageHeight: number;
        LogicalPageWidth: number;
        MaxButton: boolean;
        MenuBar: string;
        MinButton: boolean;
        MinMaxButtons: number;
        Modal: boolean;
        readonly Module: Module;
        MouseWheel: string;
        MouseWheelMacro: string;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Moveable: boolean;
        MoveLayout: boolean;
        Name: string;
        NextRecord: boolean;
        OnActivate: string;
        OnActivateMacro: string;
        OnApplyFilter: string;
        OnApplyFilterMacro: string;
        OnClick: string;
        OnClickMacro: string;
        OnClose: string;
        OnCloseMacro: string;
        OnCurrent: string;
        OnCurrentMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnDeactivate: string;
        OnDeactivateMacro: string;
        OnError: string;
        OnErrorMacro: string;
        OnFilter: string;
        OnFilterMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLoad: string;
        OnLoadMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMenu: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnNoData: string;
        OnNoDataMacro: string;
        OnOpen: string;
        OnOpenMacro: string;
        OnPage: string;
        OnPageMacro: string;
        OnResize: string;
        OnResizeMacro: string;
        OnTimer: string;
        OnTimerMacro: string;
        OnUnload: string;
        OnUnloadMacro: string;
        OpenArgs: string;
        OrderBy: string;
        OrderByOn: boolean;
        OrderByOnLoad: boolean;
        Orientation: number;
        Page: number;
        PageFooter: number;
        PageHeader: number;
        Pages: number;
        Painting: boolean;
        PaintPalette: any;
        PaletteSource: string;
        readonly Parent: any;
        Picture: string;
        PictureAlignment: number;
        PictureData: any;
        PicturePages: number;
        PicturePalette: any;
        PictureSizeMode: number;
        PictureTiling: boolean;
        PictureType: number;
        PopUp: boolean;
        Print(Expr: string): void;
        PrintCount: number;
        Printer: Printer;
        PrintSection: boolean;
        readonly Properties: Properties;
        PrtDevMode: any;
        PrtDevNames: any;
        PrtMip: any;
        PSet(flags: number, X: number, Y: number, color: number): void;
        RecordLocks: number;
        Recordset: DAO.Recordset | ADODB.Recordset | null;
        RecordSource: string;
        RecordSourceQualifier: string;
        readonly Report: Report;
        Requery(): void;
        RibbonName: string;
        Scale(flags: number, x1: number, y1: number, x2: number, y2: number): void;
        ScaleHeight: number;
        ScaleLeft: number;
        ScaleMode: number;
        ScaleTop: number;
        ScaleWidth: number;
        ScrollBars: number;
        Section(Index: AcReportSection | string): Section;
        SectionOld(Index: any): Section;
        ServerFilter: string;
        readonly Shape: string;
        ShortcutMenuBar: string;
        ShowPageMargins: boolean;
        Tag: string;
        TextHeight(Expr: string): number;
        TextWidth(Expr: string): number;
        TimerInterval: number;
        Toolbar: string;
        Top: number;
        UseDefaultPrinter: boolean;
        Visible: boolean;
        Width: number;
        WindowHeight: number;
        readonly WindowLeft: number;
        readonly WindowTop: number;
        WindowWidth: number;
        ZoomControl: number;
    }

    interface Reports {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: string | number): Report;
        readonly Parent: any;
        (Index: string | number): Report;
    }

    class ReturnVar {
        private "Access.ReturnVar_typekey": ReturnVar;
        private constructor();
        readonly _Value: string | number;
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        readonly Value: string | number;
    }

    interface ReturnVars {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): ReturnVar;
        readonly Parent: any;
        (Index: string | number): ReturnVar;
    }

    class Screen {
        private "Access.Screen_typekey": Screen;
        private constructor();
        readonly ActiveControl: Control;
        readonly ActiveDataAccessPage: DataAccessPage;
        readonly ActiveDatasheet: Form;
        readonly ActiveForm: Form;
        readonly ActiveReport: Report;
        readonly Application: Application;
        IsMemberSafe(dispid: number): boolean;
        MousePointer: number;
        readonly Parent: any;
        readonly PreviousControl: Control;
    }

    class Section {
        private "Access.Section_typekey": Section;
        private constructor();
        _Name: string;
        AlternateBackColor: number;
        AlternateBackShade: number;
        AlternateBackThemeColorIndex: number;
        AlternateBackTint: number;
        readonly Application: Application;
        AutoHeight: boolean;
        BackColor: number;
        BackShade: number;
        BackThemeColorIndex: number;
        BackTint: number;
        CanGrow: boolean;
        CanShrink: boolean;
        readonly Controls: Children;
        DisplayWhen: number;
        EventProcPrefix: string;
        ForceNewPage: number;
        HasContinued: boolean;
        Height: number;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        KeepTogether: boolean;
        Name: string;
        NewRowOrCol: number;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnFormat: string;
        OnFormatMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnPaint: string;
        OnPaintMacro: string;
        OnPrint: string;
        OnPrintMacro: string;
        OnRetreat: string;
        OnRetreatMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        RepeatSection: boolean;
        SetTabOrder(): void;
        SpecialEffect: number;
        Tag: string;
        Visible: boolean;
        WillContinue: boolean;
    }

    class SharedResource {
        private "Access.SharedResource_typekey": SharedResource;
        private constructor();
        Delete(): void;
        IsMemberSafe(dispid: number): boolean;
        Name: string;
        readonly Parent: any;
        readonly Type: AcResourceType;
    }

    interface SharedResources {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number): SharedResource;
        readonly Parent: any;
        (Index: number): SharedResource;
    }

    class SmartTag {
        private "Access.SmartTag_typekey": SmartTag;
        private constructor();
        readonly Application: Application;
        Delete(): void;
        IsMemberSafe(dispid: number): boolean;
        readonly IsMissing: boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly Properties: SmartTagProperties;
        readonly SmartTagActions: SmartTagActions;
        readonly XML: string;
    }

    class SmartTagAction {
        private "Access.SmartTagAction_typekey": SmartTagAction;
        private constructor();
        readonly Application: Application;
        Execute(): void;
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        readonly Parent: any;
    }

    interface SmartTagActions {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): SmartTagAction;
        readonly Parent: any;
        (Index: number | string): SmartTagAction;
    }

    interface SmartTagProperties {
        Add(Name: string, Value: any): SmartTagProperty;
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): SmartTagProperty;
        readonly Parent: any;
        (Index: number | string): SmartTagProperty;
    }

    class SmartTagProperty {
        private "Access.SmartTagProperty_typekey": SmartTagProperty;
        private constructor();
        Delete(): void;
        IsMemberSafe(dispid: number): boolean;
        Name: string;
        Value: string;
    }

    interface SmartTags {
        Add(Name: string): SmartTag;
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): SmartTag;
        readonly Parent: any;
        (Index: number | string): SmartTag;
    }

    class SubForm {
        private "Access.SubForm_typekey": SubForm;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        readonly Application: Application;
        AutoLabel: boolean;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        CanGrow: boolean;
        CanShrink: boolean;
        ControlName: string;
        readonly Controls: Controls;
        ControlType: number;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FilterOnEmptyMaster: boolean;
        readonly Form: Form;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HorizontalAnchor: AcHorizontalAnchor;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        LinkChildFields: string;
        LinkMasterFields: string;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        OldBorderStyle: number;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        readonly Parent: any;
        readonly Properties: Properties;
        readonly Report: Report;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        SizeToFit(): void;
        SourceObject: string;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class SubReport {
        private "Access.SubReport_typekey": SubReport;
        private constructor();
        readonly Application: Application;
        readonly Form: Form;
        IsMemberSafe(dispid: number): boolean;
        readonly Parent: any;
        readonly Report: Report;
    }

    class TabControl {
        private "Access.TabControl_typekey": TabControl;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        readonly Application: Application;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BorderColor: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BottomPadding: number;
        ControlName: string;
        ControlType: number;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        Gradient: number;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        HoverColor: number;
        HoverForeColor: number;
        HoverForeShade: number;
        HoverForeThemeColorIndex: number;
        HoverForeTint: number;
        HoverShade: number;
        HoverThemeColorIndex: number;
        HoverTint: number;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        MultiRow: boolean;
        Name: string;
        readonly OldValue: any;
        OnChange: string;
        OnChangeMacro: string;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        readonly Pages: Pages;
        readonly Parent: any;
        PressedColor: number;
        PressedForeColor: number;
        PressedForeShade: number;
        PressedForeThemeColorIndex: number;
        PressedForeTint: number;
        PressedShade: number;
        PressedThemeColorIndex: number;
        PressedTint: number;
        readonly Properties: Properties;
        RightPadding: number;
        Section: number;
        Shape: number;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        StatusBarText: string;
        Style: number;
        TabFixedHeight: number;
        TabFixedWidth: number;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        Top: number;
        TopPadding: number;
        UseTheme: boolean;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class TempVar {
        private "Access.TempVar_typekey": TempVar;
        private constructor();
        _Value: number | string | boolean;
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        Value: number | string | boolean;
    }

    interface TempVars {
        Add(Name: string, Value: number | string | boolean): void;
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): TempVar;
        readonly Parent: any;
        Remove(Index: number | string): void;
        RemoveAll(): void;
        (Index: number | string): TempVar;
    }

    class TextBox {
        private "Access.TextBox_typekey": TextBox;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        AllowAutoCorrect: boolean;
        AllowedText: number;
        readonly Application: Application;
        AsianLineBreak: boolean;
        AutoLabel: boolean;
        AutoTab: boolean;
        BackColor: number;
        BackShade: number;
        BackStyle: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomMargin: number;
        BottomPadding: number;
        CanGrow: boolean;
        CanShrink: boolean;
        Coltyp: number;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DecimalPlaces: number;
        DefaultValue: string;
        DisplayAsHyperlink: AcDisplayAsHyperlink;
        DisplayWhen: number;
        Enabled: boolean;
        EnterKeyBehavior: boolean;
        EventProcPrefix: string;
        FELineBreak: boolean;
        FilterLookup: number;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        Format: string;
        readonly FormatConditions: FormatConditions;
        FormatPictureText: string;
        FuriganaControl: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        IMEHold: boolean;
        IMEMode: AcImeMode;
        IMESentenceMode: AcImeSentenceMode;
        InputMask: string;
        InSelection: boolean;
        IsHyperlink: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        KeyboardLanguage: number;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftMargin: number;
        LeftPadding: number;
        LineSpacing: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        NumeralShapes: number;
        OldBorderStyle: number;
        readonly OldValue: any;
        OnChange: string;
        OnChangeMacro: string;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnDirty: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnUndo: string;
        readonly Parent: any;
        PostalAddress: string;
        readonly Properties: Properties;
        ReadingOrder: number;
        Requery(): void;
        RightMargin: number;
        RightPadding: number;
        RunningSum: number;
        ScrollBarAlign: number;
        ScrollBars: number;
        Section: number;
        SelLength: number;
        SelStart: number;
        SelText: string;
        SetFocus(): void;
        ShortcutMenuBar: string;
        ShowDatePicker: number;
        SizeToFit(): void;
        readonly SmartTags: SmartTags;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Target: string;
        Text: string;
        TextAlign: number;
        TextAlignGeneral: number;
        TextFontCharSet: number;
        TextFormat: AcTextFormat;
        ThemeFontIndex: number;
        Top: number;
        TopMargin: number;
        TopPadding: number;
        Undo(): void;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        Vertical: boolean;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class ToggleButton {
        private "Access.ToggleButton_typekey": ToggleButton;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
        _Name: string;
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
        AddColon: boolean;
        AfterUpdate: string;
        AfterUpdateMacro: string;
        readonly Application: Application;
        AutoLabel: boolean;
        BackColor: number;
        BackShade: number;
        BackThemeColorIndex: number;
        BackTint: number;
        BeforeUpdate: string;
        BeforeUpdateMacro: string;
        Bevel: number;
        BorderColor: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        Caption: string;
        ColumnHidden: boolean;
        ColumnOrder: number;
        ColumnWidth: number;
        ControlName: string;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DefaultValue: string;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        FontBold: number;
        FontItalic: boolean;
        FontName: string;
        FontSize: number;
        FontUnderline: boolean;
        FontWeight: number;
        ForeColor: number;
        ForeShade: number;
        ForeThemeColorIndex: number;
        ForeTint: number;
        Glow: number;
        Goto(): void;
        Gradient: number;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HideDuplicates: boolean;
        HorizontalAnchor: AcHorizontalAnchor;
        HoverColor: number;
        HoverForeColor: number;
        HoverForeShade: number;
        HoverForeThemeColorIndex: number;
        HoverForeTint: number;
        HoverShade: number;
        HoverThemeColorIndex: number;
        HoverTint: number;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        IsVisible: boolean;
        LabelAlign: number;
        LabelX: number;
        LabelY: number;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        Locked: boolean;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        ObjectPalette: any;
        readonly OldValue: any;
        OnClick: string;
        OnClickMacro: string;
        OnDblClick: string;
        OnDblClickMacro: string;
        OnEnter: string;
        OnEnterMacro: string;
        OnExit: string;
        OnExitMacro: string;
        OnGotFocus: string;
        OnGotFocusMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnLostFocus: string;
        OnLostFocusMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OptionValue: number;
        readonly Parent: any;
        Picture: string;
        PictureData: any;
        PictureType: number;
        PressedColor: number;
        PressedForeColor: number;
        PressedForeShade: number;
        PressedForeThemeColorIndex: number;
        PressedForeTint: number;
        PressedShade: number;
        PressedThemeColorIndex: number;
        PressedTint: number;
        readonly Properties: Properties;
        QuickStyle: number;
        QuickStyleMask: number;
        ReadingOrder: number;
        Requery(): void;
        RightPadding: number;
        Section: number;
        SetFocus(): void;
        Shadow: number;
        Shape: number;
        ShortcutMenuBar: string;
        SizeToFit(): void;
        SoftEdges: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        TextFontCharSet: number;
        ThemeFontIndex: number;
        Top: number;
        TopPadding: number;
        TripleState: boolean;
        Undo(): void;
        UseTheme: boolean;
        ValidationRule: string;
        ValidationText: string;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class WebBrowserControl {
        private "Access.WebBrowserControl_typekey": WebBrowserControl;
        private constructor();
        _Evaluate(bstrExpr: string, ...ppsa: any[]): any;
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
        readonly Application: Application;
        BorderColor: number;
        BorderLineStyle: number;
        BorderShade: number;
        BorderStyle: number;
        BorderThemeColorIndex: number;
        BorderTint: number;
        BorderWidth: number;
        BottomPadding: number;
        readonly Controls: Children;
        ControlSource: string;
        ControlTipText: string;
        ControlType: number;
        DisplayWhen: number;
        Enabled: boolean;
        EventProcPrefix: string;
        Goto(): void;
        GridlineColor: number;
        GridlineShade: number;
        GridlineStyleBottom: number;
        GridlineStyleLeft: number;
        GridlineStyleRight: number;
        GridlineStyleTop: number;
        GridlineThemeColorIndex: number;
        GridlineTint: number;
        GridlineWidthBottom: number;
        GridlineWidthLeft: number;
        GridlineWidthRight: number;
        GridlineWidthTop: number;
        Height: number;
        HelpContextId: number;
        HorizontalAnchor: AcHorizontalAnchor;
        readonly Hyperlink: Hyperlink;
        InSelection: boolean;
        IsMemberSafe(dispid: number): boolean;
        readonly Layout: AcLayoutType;
        readonly LayoutID: number;
        Left: number;
        LeftPadding: number;
        readonly LocationURL: string;
        Move(Left: number, Top?: number, Width?: number, Height?: number): void;
        Name: string;
        readonly Object: any;
        readonly OldValue: any;
        OnBeforeNavigate: string;
        OnBeforeNavigateMacro: string;
        OnClickMacro: string;
        OnDblClickMacro: string;
        OnDocumentComplete: string;
        OnDocumentCompleteMacro: string;
        OnKeyDown: string;
        OnKeyDownMacro: string;
        OnKeyPress: string;
        OnKeyPressMacro: string;
        OnKeyUp: string;
        OnKeyUpMacro: string;
        OnMouseDown: string;
        OnMouseDownMacro: string;
        OnMouseMove: string;
        OnMouseMoveMacro: string;
        OnMouseUp: string;
        OnMouseUpMacro: string;
        OnNavigateError: string;
        OnNavigateErrorMacro: string;
        OnProgressChange: string;
        OnProgressChangeMacro: string;
        OnUpdated: string;
        OnUpdatedMacro: string;
        readonly Parent: any;
        readonly Progress: number;
        readonly Properties: Properties;
        readonly ReadyState: AcWebBrowserState;
        Requery(): void;
        RightPadding: number;
        ScrollBars: AcWebBrowserScrollBars;
        ScrollLeft: number;
        ScrollTop: number;
        Section: number;
        SetFocus(): void;
        SizeToFit(): void;
        SpecialEffect: number;
        StatusBarText: string;
        TabIndex: number;
        TabStop: boolean;
        Tag: string;
        Top: number;
        TopPadding: number;
        Transform: string;
        Undo(): void;
        Value: any;
        VerticalAnchor: AcVerticalAnchor;
        Visible: boolean;
        Width: number;
    }

    class WebOptions {
        private "Access.WebOptions_typekey": WebOptions;
        private constructor();
        readonly Application: Application;
        DownloadComponents: boolean;
        Encoding: Office.MsoEncoding;
        readonly FolderSuffix: string;
        IsMemberSafe(dispid: number): boolean;
        LocationOfComponents: string;
        OrganizeInFolder: boolean;
        readonly Parent: any;
        TargetBrowser: Office.MsoTargetBrowser;
        UseDefaultFolderSuffix(): void;
        UseLongFileNames: boolean;
    }

    class WebService {
        private "Access.WebService_typekey": WebService;
        private constructor();
        readonly Entities: Entities;
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        readonly Parent: any;
    }

    interface WebServices {
        readonly Application: Application;
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): WebService;
        readonly Parent: any;
        (Index: number | string): WebService;
    }

    class WizHook {
        private "Access.WizHook_typekey": WizHook;
        private constructor();
        AccessUserDataDir(): string;
        AccessWizFilePath(bstrWhich: string): string;
        AdpUIDPwd(pbstrUID: string, pbstrPwd: string): boolean;
        AnalyzeQuery(Workspace: DAO.Workspace, Database: DAO.Database, Query: string, Results: string): number;
        AnalyzeTable(
            Workspace: DAO.Workspace,
            Database: DAO.Database,
            Table: string,
            ReturnDebugInfo: boolean,
            Results: string,
        ): number;
        ArgsOfActid(Actid: number): number;
        BracketString(String: string, flags: number): boolean;
        CacheStatus(bstrStatus: string): void;
        CloseCurrentDatabase(): boolean;
        CreateDataPageControl(
            DpName: string,
            CtlName: string,
            Typ: number,
            Section: string,
            SectionType: number,
            AppletCode: string,
            X: number,
            Y: number,
            dx: number,
            dy: number,
        ): void;
        CurrentLangID(): number;
        readonly DbcVbProject: VBIDE.VBProject;
        EmbedFileOnDataPage(DpName: string, FileToInsert: string): string;
        EnglishPictToLocal(In: string, Out: string): boolean;
        ExecuteTempImexSpec(bstrSpecXML: string): void;
        FCacheStatus(): boolean;
        FCreateNameMap(objtyp: number, bstrObjName: string): boolean;
        FGetMSDE(fBlockKeys: boolean): boolean;
        FileExists(File: string): boolean;
        FirstDbcDataObject(Name: string, ObjType: AcObjectType, Attribs: number): boolean;
        FIsFEWch(wch: number): boolean;
        FIsPublishedXasTable(bstrObjectName: string): boolean;
        FIsValidXasObjectName(bstrObjectName: string, iobjtyp: AcObjectType): boolean;
        FIsXasDb(): boolean;
        FullPath(RelativePath: string, FullPath: string): number;
        GetAccWizRCPath(): string;
        GetAdeRegistryPath(): string;
        GetColumns(bstrBase: string): string;
        GetCurrentView(bstrTableName: string): number;
        GetDisabledExtensions(): string;
        GetFileName(
            hwndOwner: number,
            AppName: string,
            DlgTitle: string,
            OpenTitle: string,
            File: string,
            InitialDir: string,
            Filter: string,
            FilterIndex: number,
            View: number,
            flags: number,
            fOpen: boolean,
        ): number;
        GetFileName2(
            hwndOwner: number,
            AppName: string,
            DlgTitle: string,
            OpenTitle: string,
            File: string,
            InitialDir: string,
            Filter: string,
            FilterIndex: number,
            View: number,
            flags: number,
            fOpen: boolean,
            fFileSystem: any,
        ): number;
        GetFileOdso(bstrExt: string, bstrFilename: string): number;
        GetImexTblName(): string;
        GetInfoForColumns(bstrBase: string): string;
        GetLinkedListProperty(bstrTableName: string, bstrPropertyName: string, fServer: boolean): string;
        GetObjPubOption(bstrObjectName: string, iobjtyp: AcObjectType, fTablesAsClient: boolean): number;
        GetScriptString(HScr: number, ScriptColumn: number, Value: string): boolean;
        GetWizGlob(lWhich: number): any;
        GlobalProcExists(Name: string): boolean;
        HideDates(): boolean;
        IsMatchToDbcConnectString(bstrConnectionString: string): boolean;
        IsMemberSafe(dispid: number): boolean;
        IsValidIdent(Identifier: string): boolean;
        readonly Key: number;
        KeyboardLangID(): number;
        KnownWizLeaks(fStart: boolean): void;
        LoadImexSpecSolution(bstrFilename: string): void;
        LocalFont(): string;
        NameFromActid(Actid: number): string;
        ObjTypOfRecordSource(RecordSource: string): number;
        OfficeAddInDir(): string;
        OpenEmScript(pProperty: AccessProperty, OpenMode: number, Extra: number, Version: number): number;
        OpenPictureFile(File: string, Cancelled: boolean): boolean;
        OpenScript(Script: string, Label: string, OpenMode: number, Extra: number, Version: number): number;
        ReportLeaksToFile(fRptToFile: boolean, bstrFileOut: string): void;
        SaveObject(bstrName: string, objtyp: number): void;
        SaveScriptString(HScr: number, ScriptColumn: number, Value: string): boolean;
        SetDefaultSpecName(bstrSpecName: string): void;
        SetDpBlockKeyInput(fBlockKeys: boolean): void;
        SetVbaPassword(bstrDbName: string, bstrConnect: string, bstrPasswd: string): boolean;
        SetWizGlob(lWhich: number, vValue: any): void;
        SortStringArray(Array: SafeArray<string>): void;
        SplitPath(Path: string, Drive: string, Dir: string, File: string, Ext: string): void;
        TableFieldHasUniqueIndex(Table: string, Columns: string): boolean;
        TranslateExpression(In: string, Out: string, ParseFlags: number, TranslateFlags: number): boolean;
        TwipsFromFont(
            FontName: string,
            Size: number,
            Weight: number,
            Italic: boolean,
            Underline: boolean,
            Cch: number,
            Caption: string,
            MaxWidthCch: number,
            dx: number,
            dy: number,
        ): boolean;
        WizCopyCmdbars(bstrADPName: string): void;
        WizHelp(HelpFile: string, wCmd: number, ContextID: number): boolean;
        WizMsgBox(
            bstrText: string,
            bstrCaption: string,
            wStyle: number,
            idHelpID: number,
            bstrHelpFileName: string,
        ): number;
    }

    class WSParameter {
        private "Access.WSParameter_typekey": WSParameter;
        private constructor();
        IsMemberSafe(dispid: number): boolean;
        readonly Name: string;
        readonly Parent: any;
        readonly Type: number;
    }

    interface WSParameters {
        readonly Count: number;
        IsMemberSafe(dispid: number): boolean;
        Item(Index: number | string): WSParameter;
        readonly Parent: any;
        (Index: number | string): WSParameter;
    }

    namespace EventHelperTypes {
        type WebBrowserControl_BeforeNavigate2_ArgNames = [
            "pDisp",
            "URL",
            "flags",
            "TargetFrameName",
            "PostData",
            "Headers",
            "Cancel",
        ];

        interface WebBrowserControl_BeforeNavigate2_Parameter {
            Cancel: boolean;
            readonly flags: number;
            readonly Headers: any;
            readonly pDisp: any;
            readonly PostData: any;
            readonly TargetFrameName: string | null;
            readonly URL: string;
        }
    }
}

declare namespace AccWizObjects {
    const enum WIZ_CSIDL_FLAGS {
        WIZ_CSIDL_APPDATA = 26,
        WIZ_CSIDL_BITBUCKET = 10,
        WIZ_CSIDL_COMMON_DESKTOPDIRECTORY = 25,
        WIZ_CSIDL_COMMON_PROGRAMS = 23,
        WIZ_CSIDL_COMMON_STARTMENU = 22,
        WIZ_CSIDL_COMMON_STARTUP = 24,
        WIZ_CSIDL_CONTROLS = 3,
        WIZ_CSIDL_DESKTOP = 0,
        WIZ_CSIDL_DESKTOPDIRECTORY = 16,
        WIZ_CSIDL_DRIVES = 17,
        WIZ_CSIDL_FAVORITES = 6,
        WIZ_CSIDL_FONTS = 20,
        WIZ_CSIDL_NETHOOD = 19,
        WIZ_CSIDL_NETWORK = 18,
        WIZ_CSIDL_PERSONAL = 5,
        WIZ_CSIDL_PRINTERS = 4,
        WIZ_CSIDL_PRINTHOOD = 27,
        WIZ_CSIDL_PROGRAMS = 2,
        WIZ_CSIDL_RECENT = 8,
        WIZ_CSIDL_SENDTO = 9,
        WIZ_CSIDL_STARTMENU = 11,
        WIZ_CSIDL_STARTUP = 7,
        WIZ_CSIDL_TEMPLATES = 21,
    }

    const enum WIZ_SLGP_FLAGS {
        WIZ_SLGP_SHORTPATH = 1,
        WIZ_SLGP_UNCPRIORITY = 2,
    }

    const enum WIZ_SLR_FLAGS {
        WIZ_SLR_ANY_MATCH = 2,
        WIZ_SLR_NO_UI = 1,
        WIZ_SLR_UPDATE = 4,
    }

    const enum WIZ_SW_FLAGS {
        WIZ_SW_MAXIMIZE = 3,
        WIZ_SW_MINIMIZE = 7,
        WIZ_SW_NORMAL = 5,
    }

    /** Field List Control */
    class FieldList {
        private "AccWizObjects.FieldList_typekey": FieldList;
        private constructor();
        AddFieldList(
            bstrCaption: string,
            nLeft: number,
            nTop: number,
            nWidth: number,
            nHeight: number,
            nMultiSelectType: number,
            cCols: number,
            fShowPictures: boolean,
        ): void;
        AddJoinLine(
            IFieldList: number,
            iField: number,
            iForeignFieldList: number,
            iForeignField: number,
            lAttribs: number,
        ): void;
        DeleteFieldList(IFieldList: number): void;
        DeleteJoinLine(IJoinLine: number): void;
        readonly FieldListCount: number;
        FieldLists(IFieldList: number): any;
        HScrollPos: number;
        readonly JoinLineCount: number;
        JoinLines(IJoinLine: number): any;
        PersistentHighlight: boolean;
        Picture: stdole.IPictureDisp;
        PictureCols: number;
        PictureRows: number;
        ScrollBars: number;
        SelectedFieldListIndex: number;
        SetCursor(nCursorID: number): void;
        VScrollPos: number;
    }

    /** ImexGrid Control */
    class ImexGrid {
        private "AccWizObjects.ImexGrid_typekey": ImexGrid;
        private constructor();
        AddColumn(ColumnCaption: string, ColumnWidth: number, Index: number): void;
        AddRow(RowText: string, Index: number): void;
        AllowColumnSizing: boolean;
        BackColor: stdole.OLE_COLOR;
        CalcBestColumns(): void;
        Caption: string;
        ClearColumns(): void;
        ClearRows(): void;
        ColumnClickBehavior: number;
        readonly ColumnCount: number;
        Columns(ColumnNumber: number): any;
        ColumnState: any;
        DeleteColumn(Index: number): void;
        DeleteRow(Index: number): void;
        Delimiters: string;
        DrawTextLogicalOrder: boolean;
        FirstRowNumber: number;
        Font: stdole.IFontDisp;
        GridBackColor: stdole.OLE_COLOR;
        GridFont: stdole.IFontDisp;
        GridHeader: number;
        Painting: boolean;
        Refresh(): void;
        ResetHScrollPos(): void;
        ResetVScrollPos(): void;
        readonly RowCount: number;
        RowText(RowNumber: number): string;
        ShowColLines: boolean;
        ShowRowHeaders: boolean;
        StringDelimiters: string;
    }

    interface WIZ_FILETIME {
        readonly dwHighDateTime: number;
        readonly dwLowDateTime: number;
    }

    interface WIZ_WIN32_FIND_DATA {
        readonly cAlternate: SafeArray<number>;
        readonly cFileName: SafeArray<number>;
        readonly dwFileAttributes: number;
        readonly dwReserved0: number;
        readonly dwReserved1: number;
        readonly ftCreationTime: WIZ_FILETIME;
        readonly ftLastAccessTime: WIZ_FILETIME;
        readonly ftLastWriteTime: WIZ_FILETIME;
        readonly nFileSizeHigh: number;
        readonly nFileSizeLow: number;
    }

    /** WizShellLinkA Class */
    class WizShellLinkA {
        private "AccWizObjects.WizShellLinkA_typekey": WizShellLinkA;
        private constructor();

        /** GetArguments */
        GetArguments(pszArgs: string, cchMaxPath: number): void;

        /** GetDescription */
        GetDescription(pszName: string, cchMaxName: number): void;

        /** GetHotkey */
        GetHotkey(pwHotkey: number): void;

        /** GetIconLocation */
        GetIconLocation(pszIconPath: string, cchIconPath: number, piIcon: number): void;

        /** GetIDList */
        GetIDList(ppidl: WIZ_CSIDL_FLAGS): void;

        /** GetPath */
        GetPath(pszFile: string, cchMaxPath: number, pfd: WIZ_WIN32_FIND_DATA, fflags: number): void;

        /** GetShowCmd */
        GetShowCmd(piShowCmd: WIZ_SW_FLAGS): void;

        /** GetWorkingDirectory */
        GetWorkingDirectory(pszDir: string, cchMaxPath: number): void;

        /** Resolve */
        Resolve(hWnd: number, fflags: number): void;

        /** SetArguments */
        SetArguments(pszArgs: string): void;

        /** SetDescription */
        SetDescription(pszName: string): void;

        /** SetHotkey */
        SetHotkey(wHotkey: number): void;

        /** SetIconLocation */
        SetIconLocation(pszIconPath: string, iIcon: number): void;

        /** SetIDList */
        SetIDList(pidl: WIZ_CSIDL_FLAGS): void;

        /** SetPath */
        SetPath(pszFile: string): void;

        /** SetRelativePath */
        SetRelativePath(pszPathRel: string, dwReserved: number): void;

        /** SetShowCmd */
        SetShowCmd(iShowCmd: WIZ_SW_FLAGS): void;

        /** SetWorkingDirectory */
        SetWorkingDirectory(pszDir: string): void;
    }

    namespace EventHelperTypes {
        type FieldList_DragOver_ArgNames = ["SourceCtlName", "SourceFieldList", "SourceRow", "State", "X", "Y"];

        type FieldList_FldListDragDrop_ArgNames = [
            "SourceCtlName",
            "SourceFieldList",
            "SourceRow",
            "TargetCtlName",
            "TargetFieldList",
            "TargetRow",
        ];

        type FieldList_FldListDragOver_ArgNames = [
            "SourceCtlName",
            "SourceFieldList",
            "SourceRow",
            "TargetCtlName",
            "TargetFieldList",
            "TargetRow",
            "State",
        ];

        interface FieldList_DragOver_Parameter {
            readonly SourceCtlName: string;
            readonly SourceFieldList: number;
            readonly SourceRow: number;
            readonly State: number;
            readonly X: number;
            readonly Y: number;
        }

        interface FieldList_FldListDragDrop_Parameter {
            readonly SourceCtlName: string;
            readonly SourceFieldList: number;
            readonly SourceRow: number;
            readonly TargetCtlName: string;
            readonly TargetFieldList: number;
            readonly TargetRow: number;
        }

        interface FieldList_FldListDragOver_Parameter {
            readonly SourceCtlName: string;
            readonly SourceFieldList: number;
            readonly SourceRow: number;
            readonly State: number;
            readonly TargetCtlName: string;
            readonly TargetFieldList: number;
            readonly TargetRow: number;
        }
    }
}

interface ActiveXObject {
    on(
        obj: Access._CheckBoxInOption,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access._CheckBoxInOption, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access._CheckBoxInOption,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access._CheckBoxInOption, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access._CheckBoxInOption,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access._CheckBoxInOption, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access._CheckBoxInOption,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access._CheckBoxInOption,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access._OptionButtonInOption,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access._OptionButtonInOption, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access._OptionButtonInOption,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access._OptionButtonInOption, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access._OptionButtonInOption,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access._OptionButtonInOption, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access._OptionButtonInOption,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access._OptionButtonInOption,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access._PageHdrFtrInReport,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: Access._PageHdrFtrInReport, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access._PageHdrFtrInReport,
        event: "Format",
        argNames: ["Cancel", "FormatCount"],
        handler: (this: Access._PageHdrFtrInReport, parameter: { Cancel: number; FormatCount: number }) => void,
    ): void;
    on(
        obj: Access._PageHdrFtrInReport,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access._PageHdrFtrInReport,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access._PageHdrFtrInReport,
        event: "Print",
        argNames: ["Cancel", "PrintCount"],
        handler: (this: Access._PageHdrFtrInReport, parameter: { Cancel: number; PrintCount: number }) => void,
    ): void;
    on(
        obj: Access._SectionInReport,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: Access._SectionInReport, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access._SectionInReport,
        event: "Format",
        argNames: ["Cancel", "FormatCount"],
        handler: (this: Access._SectionInReport, parameter: { Cancel: number; FormatCount: number }) => void,
    ): void;
    on(
        obj: Access._SectionInReport,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access._SectionInReport,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access._SectionInReport,
        event: "Print",
        argNames: ["Cancel", "PrintCount"],
        handler: (this: Access._SectionInReport, parameter: { Cancel: number; PrintCount: number }) => void,
    ): void;
    on(
        obj: Access._ToggleButtonInOption,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access._ToggleButtonInOption, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access._ToggleButtonInOption,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access._ToggleButtonInOption, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access._ToggleButtonInOption,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access._ToggleButtonInOption, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access._ToggleButtonInOption,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access._ToggleButtonInOption,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.Attachment,
        event: "BeforeUpdate" | "DblClick" | "Dirty" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.Attachment, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.Attachment,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.Attachment, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.Attachment,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.Attachment, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.Attachment,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.Attachment, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.BoundObjectFrame,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.BoundObjectFrame, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.BoundObjectFrame,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.BoundObjectFrame, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.BoundObjectFrame,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.BoundObjectFrame, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.BoundObjectFrame,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access.BoundObjectFrame,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.BoundObjectFrame,
        event: "Updated",
        argNames: ["Code"],
        handler: (this: Access.BoundObjectFrame, parameter: { Code: number }) => void,
    ): void;
    on(
        obj: Access.CheckBox,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.CheckBox, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.CheckBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.CheckBox, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.CheckBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.CheckBox, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.CheckBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.CheckBox, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.ComboBox,
        event: "BeforeUpdate" | "DblClick" | "Dirty" | "Exit" | "Undo",
        argNames: ["Cancel"],
        handler: (this: Access.ComboBox, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.ComboBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.ComboBox, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.ComboBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.ComboBox, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.ComboBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.ComboBox, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.ComboBox,
        event: "NotInList",
        argNames: ["NewData", "Response"],
        handler: (this: Access.ComboBox, parameter: { NewData: string; Response: number }) => void,
    ): void;
    on(
        obj: Access.CommandButton,
        event: "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.CommandButton, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.CommandButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.CommandButton, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.CommandButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.CommandButton, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.CommandButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access.CommandButton,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.CustomControl,
        event: "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.CustomControl, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.CustomControl,
        event: "Updated",
        argNames: ["Code"],
        handler: (this: Access.CustomControl, parameter: { Code: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "AfterDelConfirm",
        argNames: ["Status"],
        handler: (this: Access.Form, parameter: { Status: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "AfterFinalRender" | "AfterLayout",
        argNames: ["drawObject"],
        handler: (this: Access.Form, parameter: { readonly drawObject: any }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "AfterRender",
        argNames: ["drawObject", "chartObject"],
        handler: (this: Access.Form, parameter: { readonly drawObject: any; readonly chartObject: any }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "ApplyFilter",
        argNames: ["Cancel", "ApplyType"],
        handler: (this: Access.Form, parameter: { Cancel: number; ApplyType: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "BeforeDelConfirm",
        argNames: ["Cancel", "Response"],
        handler: (this: Access.Form, parameter: { Cancel: number; Response: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event:
            | "BeforeInsert"
            | "BeforeUpdate"
            | "BeginBatchEdit"
            | "DblClick"
            | "Delete"
            | "Dirty"
            | "Open"
            | "RecordExit"
            | "Undo"
            | "UndoBatchEdit"
            | "Unload",
        argNames: ["Cancel"],
        handler: (this: Access.Form, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "BeforeRender",
        argNames: ["drawObject", "chartObject", "Cancel"],
        handler: (
            this: Access.Form,
            parameter: { readonly drawObject: any; readonly chartObject: any; readonly Cancel: any },
        ) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "BeforeScreenTip",
        argNames: ["ScreenTipText", "SourceObject"],
        handler: (this: Access.Form, parameter: { readonly ScreenTipText: any; readonly SourceObject: any }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "CommandBeforeExecute",
        argNames: ["Command", "Cancel"],
        handler: (this: Access.Form, parameter: { readonly Command: any; readonly Cancel: any }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "CommandChecked",
        argNames: ["Command", "Checked"],
        handler: (this: Access.Form, parameter: { readonly Command: any; readonly Checked: any }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "CommandEnabled",
        argNames: ["Command", "Enabled"],
        handler: (this: Access.Form, parameter: { readonly Command: any; readonly Enabled: any }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "CommandExecute",
        argNames: ["Command"],
        handler: (this: Access.Form, parameter: { readonly Command: any }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "DataChange" | "PivotTableChange" | "ViewChange",
        argNames: ["Reason"],
        handler: (this: Access.Form, parameter: { readonly Reason: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "Error",
        argNames: ["DataErr", "Response"],
        handler: (this: Access.Form, parameter: { DataErr: number; Response: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "Filter",
        argNames: ["Cancel", "FilterType"],
        handler: (this: Access.Form, parameter: { Cancel: number; FilterType: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.Form, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.Form, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.Form, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.Form,
        event: "MouseWheel",
        argNames: ["Page", "Count"],
        handler: (this: Access.Form, parameter: { readonly Page: boolean; readonly Count: number }) => void,
    ): void;
    on(
        obj: Access.Image,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: Access.Image, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.Image,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.Image, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.Label,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: Access.Label, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.Label,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.Label, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.ListBox,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.ListBox, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.ListBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.ListBox, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.ListBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.ListBox, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.ListBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.ListBox, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.NavigationButton,
        event: "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.NavigationButton, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.NavigationButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.NavigationButton, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.NavigationButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.NavigationButton, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.NavigationButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access.NavigationButton,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.NavigationControl,
        event: "BeforeUpdate" | "DblClick" | "Dirty" | "Exit" | "Undo",
        argNames: ["Cancel"],
        handler: (this: Access.NavigationControl, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.NavigationControl,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.NavigationControl, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.NavigationControl,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.NavigationControl, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.NavigationControl,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access.NavigationControl,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.ObjectFrame,
        event: "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.ObjectFrame, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.ObjectFrame,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.ObjectFrame, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.ObjectFrame,
        event: "Updated",
        argNames: ["Code"],
        handler: (this: Access.ObjectFrame, parameter: { Code: number }) => void,
    ): void;
    on(
        obj: Access.OptionButton,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.OptionButton, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.OptionButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.OptionButton, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.OptionButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.OptionButton, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.OptionButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access.OptionButton,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.OptionGroup,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.OptionGroup, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.OptionGroup,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.OptionGroup, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.Page,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: Access.Page, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.Page,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.Page, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.PaletteButton,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.PaletteButton, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.PaletteButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.PaletteButton, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.PaletteButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.PaletteButton, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.PaletteButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access.PaletteButton,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.Rectangle,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: Access.Rectangle, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.Rectangle,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.Rectangle, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.References,
        event: "ItemAdded" | "ItemRemoved",
        argNames: ["Reference"],
        handler: (this: Access.References, parameter: { readonly Reference: Access.Reference }) => void,
    ): void;
    on(
        obj: Access.Report,
        event: "ApplyFilter",
        argNames: ["Cancel", "ApplyType"],
        handler: (this: Access.Report, parameter: { Cancel: number; ApplyType: number }) => void,
    ): void;
    on(
        obj: Access.Report,
        event: "DblClick" | "NoData" | "Open" | "Unload",
        argNames: ["Cancel"],
        handler: (this: Access.Report, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.Report,
        event: "Error",
        argNames: ["DataErr", "Response"],
        handler: (this: Access.Report, parameter: { DataErr: number; Response: number }) => void,
    ): void;
    on(
        obj: Access.Report,
        event: "Filter",
        argNames: ["Cancel", "FilterType"],
        handler: (this: Access.Report, parameter: { Cancel: number; FilterType: number }) => void,
    ): void;
    on(
        obj: Access.Report,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.Report, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.Report,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.Report, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.Report,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.Report, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.Report,
        event: "MouseWheel",
        argNames: ["Page", "Count"],
        handler: (this: Access.Report, parameter: { readonly Page: boolean; readonly Count: number }) => void,
    ): void;
    on(
        obj: Access.Section,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: Access.Section, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.Section,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.Section, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.SubForm,
        event: "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.SubForm, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.SubReport,
        event: "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.SubReport, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.TabControl,
        event: "DblClick",
        argNames: ["Cancel"],
        handler: (this: Access.TabControl, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.TabControl,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.TabControl, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.TabControl,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.TabControl, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.TabControl,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.TabControl, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.TextBox,
        event: "BeforeUpdate" | "DblClick" | "Dirty" | "Exit" | "Undo",
        argNames: ["Cancel"],
        handler: (this: Access.TextBox, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.TextBox,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.TextBox, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.TextBox,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.TextBox, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.TextBox,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (this: Access.TextBox, parameter: { Button: number; Shift: number; X: number; Y: number }) => void,
    ): void;
    on(
        obj: Access.ToggleButton,
        event: "BeforeUpdate" | "DblClick" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.ToggleButton, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.ToggleButton,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.ToggleButton, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.ToggleButton,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.ToggleButton, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.ToggleButton,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access.ToggleButton,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "BeforeNavigate2",
        argNames: Access.EventHelperTypes.WebBrowserControl_BeforeNavigate2_ArgNames,
        handler: (
            this: Access.WebBrowserControl,
            parameter: Access.EventHelperTypes.WebBrowserControl_BeforeNavigate2_Parameter,
        ) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "BeforeUpdate" | "DblClick" | "Dirty" | "Exit",
        argNames: ["Cancel"],
        handler: (this: Access.WebBrowserControl, parameter: { Cancel: number }) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "DocumentComplete",
        argNames: ["pDisp", "URL"],
        handler: (this: Access.WebBrowserControl, parameter: { readonly pDisp: any; readonly URL: any }) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "KeyDown" | "KeyUp",
        argNames: ["KeyCode", "Shift"],
        handler: (this: Access.WebBrowserControl, parameter: { KeyCode: number; Shift: number }) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "KeyPress",
        argNames: ["KeyAscii"],
        handler: (this: Access.WebBrowserControl, parameter: { KeyAscii: number }) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "MouseDown" | "MouseMove" | "MouseUp",
        argNames: ["Button", "Shift", "X", "Y"],
        handler: (
            this: Access.WebBrowserControl,
            parameter: { Button: number; Shift: number; X: number; Y: number },
        ) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "NavigateError",
        argNames: ["pDisp", "URL", "TargetFrameName", "StatusCode", "Cancel"],
        handler: (
            this: Access.WebBrowserControl,
            parameter: {
                readonly pDisp: any;
                readonly URL: string;
                readonly TargetFrameName: string | null;
                readonly StatusCode: any;
                Cancel: boolean;
            },
        ) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "ProgressChange",
        argNames: ["Progress", "ProgressMax"],
        handler: (
            this: Access.WebBrowserControl,
            parameter: { readonly Progress: number; readonly ProgressMax: number },
        ) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "Updated",
        argNames: ["Code"],
        handler: (this: Access.WebBrowserControl, parameter: { Code: number }) => void,
    ): void;
    on(
        obj: Access._CheckBoxInOption,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access._CheckBoxInOption, parameter: {}) => void,
    ): void;
    on(
        obj: Access._OptionButtonInOption,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access._OptionButtonInOption, parameter: {}) => void,
    ): void;
    on(
        obj: Access._PageHdrFtrInReport,
        event: "Click" | "Paint",
        handler: (this: Access._PageHdrFtrInReport, parameter: {}) => void,
    ): void;
    on(
        obj: Access._SectionInReport,
        event: "Click" | "Paint" | "Retreat",
        handler: (this: Access._SectionInReport, parameter: {}) => void,
    ): void;
    on(
        obj: Access._ToggleButtonInOption,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access._ToggleButtonInOption, parameter: {}) => void,
    ): void;
    on(
        obj: Access.Attachment,
        event: "AfterUpdate" | "AttachmentCurrent" | "Change" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.Attachment, parameter: {}) => void,
    ): void;
    on(
        obj: Access.BoundObjectFrame,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.BoundObjectFrame, parameter: {}) => void,
    ): void;
    on(
        obj: Access.CheckBox,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.CheckBox, parameter: {}) => void,
    ): void;
    on(
        obj: Access.Class,
        event: "Initialize" | "Terminate",
        handler: (this: Access.Class, parameter: {}) => void,
    ): void;
    on(
        obj: Access.ComboBox,
        event: "AfterUpdate" | "Change" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.ComboBox, parameter: {}) => void,
    ): void;
    on(
        obj: Access.CommandButton,
        event: "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.CommandButton, parameter: {}) => void,
    ): void;
    on(
        obj: Access.CustomControl,
        event: "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.CustomControl, parameter: {}) => void,
    ): void;
    on(
        obj: Access.Form,
        event:
            | "Activate"
            | "AfterInsert"
            | "AfterUpdate"
            | "BeforeQuery"
            | "Click"
            | "Close"
            | "Current"
            | "DataSetChange"
            | "Deactivate"
            | "GotFocus"
            | "Load"
            | "LostFocus"
            | "OnConnect"
            | "OnDisconnect"
            | "Query"
            | "Resize"
            | "SelectionChange"
            | "Timer",
        handler: (this: Access.Form, parameter: {}) => void,
    ): void;
    on(obj: Access.Image, event: "Click", handler: (this: Access.Image, parameter: {}) => void): void;
    on(obj: Access.Label, event: "Click", handler: (this: Access.Label, parameter: {}) => void): void;
    on(
        obj: Access.ListBox,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.ListBox, parameter: {}) => void,
    ): void;
    on(
        obj: Access.NavigationButton,
        event: "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.NavigationButton, parameter: {}) => void,
    ): void;
    on(
        obj: Access.NavigationControl,
        event: "AfterUpdate" | "Change" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.NavigationControl, parameter: {}) => void,
    ): void;
    on(
        obj: Access.ObjectFrame,
        event: "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.ObjectFrame, parameter: {}) => void,
    ): void;
    on(
        obj: Access.OptionButton,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.OptionButton, parameter: {}) => void,
    ): void;
    on(
        obj: Access.OptionGroup,
        event: "AfterUpdate" | "Click" | "Enter",
        handler: (this: Access.OptionGroup, parameter: {}) => void,
    ): void;
    on(obj: Access.Page, event: "Click", handler: (this: Access.Page, parameter: {}) => void): void;
    on(
        obj: Access.PaletteButton,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.PaletteButton, parameter: {}) => void,
    ): void;
    on(obj: Access.Rectangle, event: "Click", handler: (this: Access.Rectangle, parameter: {}) => void): void;
    on(
        obj: Access.Report,
        event:
            | "Activate"
            | "Click"
            | "Close"
            | "Current"
            | "Deactivate"
            | "GotFocus"
            | "Load"
            | "LostFocus"
            | "Page"
            | "Resize"
            | "Timer",
        handler: (this: Access.Report, parameter: {}) => void,
    ): void;
    on(obj: Access.Section, event: "Click" | "Paint", handler: (this: Access.Section, parameter: {}) => void): void;
    on(obj: Access.SubForm, event: "Enter", handler: (this: Access.SubForm, parameter: {}) => void): void;
    on(obj: Access.SubReport, event: "Enter", handler: (this: Access.SubReport, parameter: {}) => void): void;
    on(
        obj: Access.TabControl,
        event: "Change" | "Click",
        handler: (this: Access.TabControl, parameter: {}) => void,
    ): void;
    on(
        obj: Access.TextBox,
        event: "AfterUpdate" | "Change" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.TextBox, parameter: {}) => void,
    ): void;
    on(
        obj: Access.ToggleButton,
        event: "AfterUpdate" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.ToggleButton, parameter: {}) => void,
    ): void;
    on(
        obj: Access.WebBrowserControl,
        event: "AfterUpdate" | "Change" | "Click" | "Enter" | "GotFocus" | "LostFocus",
        handler: (this: Access.WebBrowserControl, parameter: {}) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "DragDrop",
        argNames: ["SourceCtlName", "SourceFieldList", "SourceRow", "X", "Y"],
        handler: (
            this: AccWizObjects.FieldList,
            parameter: {
                readonly SourceCtlName: string;
                readonly SourceFieldList: number;
                readonly SourceRow: number;
                readonly X: number;
                readonly Y: number;
            },
        ) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "DragOver",
        argNames: AccWizObjects.EventHelperTypes.FieldList_DragOver_ArgNames,
        handler: (
            this: AccWizObjects.FieldList,
            parameter: AccWizObjects.EventHelperTypes.FieldList_DragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "FldListCheckItem" | "FldListClick" | "FldListDblClick" | "FldListHdrDblClick",
        argNames: ["FieldList"],
        handler: (this: AccWizObjects.FieldList, parameter: { readonly FieldList: number }) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "FldListDragDrop",
        argNames: AccWizObjects.EventHelperTypes.FieldList_FldListDragDrop_ArgNames,
        handler: (
            this: AccWizObjects.FieldList,
            parameter: AccWizObjects.EventHelperTypes.FieldList_FldListDragDrop_Parameter,
        ) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "FldListDragOver",
        argNames: AccWizObjects.EventHelperTypes.FieldList_FldListDragOver_ArgNames,
        handler: (
            this: AccWizObjects.FieldList,
            parameter: AccWizObjects.EventHelperTypes.FieldList_FldListDragOver_Parameter,
        ) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "FldListGotFocus" | "FldListLostFocus",
        argNames: ["FieldListIndex"],
        handler: (this: AccWizObjects.FieldList, parameter: { readonly FieldListIndex: number }) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "FldListKeyDown" | "FldListKeyUp",
        argNames: ["FieldList", "KeyCode", "Shift"],
        handler: (
            this: AccWizObjects.FieldList,
            parameter: { readonly FieldList: number; KeyCode: number; readonly Shift: number },
        ) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "FldListKeyPress",
        argNames: ["FieldList", "KeyAscii"],
        handler: (this: AccWizObjects.FieldList, parameter: { readonly FieldList: number; KeyAscii: number }) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "FldListMouseDown" | "FldListMouseMove" | "FldListMouseUp",
        argNames: ["FieldList", "Button", "Shift", "X", "Y"],
        handler: (
            this: AccWizObjects.FieldList,
            parameter: {
                readonly FieldList: number;
                readonly Button: number;
                readonly Shift: number;
                readonly X: stdole.OLE_XPOS_PIXELS;
                readonly Y: stdole.OLE_YPOS_PIXELS;
            },
        ) => void,
    ): void;
    on(
        obj: AccWizObjects.ImexGrid,
        event: "ColumnCreated" | "ColumnDeleted" | "ColumnSelected" | "ColumnSized",
        argNames: ["Column"],
        handler: (this: AccWizObjects.ImexGrid, parameter: { readonly Column: number }) => void,
    ): void;
    on(
        obj: AccWizObjects.FieldList,
        event: "AfterStartup",
        handler: (this: AccWizObjects.FieldList, parameter: {}) => void,
    ): void;
    set(
        obj:
            | Access._CheckBoxInOption
            | Access._ChildLabel
            | Access._CustomControlInReport
            | Access._OptionButtonInOption
            | Access._ToggleButtonInOption
            | Access.Attachment
            | Access.BoundObjectFrame
            | Access.CheckBox
            | Access.ComboBox
            | Access.CommandButton
            | Access.CustomControl
            | Access.EmptyCell
            | Access.Form
            | Access.Label
            | Access.ListBox
            | Access.NavigationButton
            | Access.NavigationControl
            | Access.ObjectFrame
            | Access.OptionButton
            | Access.OptionGroup
            | Access.Page
            | Access.SubForm
            | Access.TabControl
            | Access.TextBox
            | Access.ToggleButton
            | Access.WebBrowserControl,
        propertyName: "accName" | "accValue",
        parameterTypes: [any],
        newValue: string,
    ): void;
    set(
        obj: Access._ControlInReportEvents | Access.ComboBox | Access.Control | Access.ListBox,
        propertyName: "Selected",
        parameterTypes: [number],
        newValue: number,
    ): void;
    set(obj: AccWizObjects.ImexGrid, propertyName: "Columns", parameterTypes: [number], newValue: any): void;
    set(obj: AccWizObjects.ImexGrid, propertyName: "RowText", parameterTypes: [number], newValue: string): void;
}

interface ActiveXObjectNameMap {
    "Access.Application": Access.Application;
    "ACCWIZ.FieldListCtrl": AccWizObjects.FieldList;
    "ACCWIZ.ImexGridCtrl": AccWizObjects.ImexGrid;
    lnkfile: AccWizObjects.WizShellLinkA;
}
