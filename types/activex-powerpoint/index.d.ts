// Type definitions for non-npm package Microsoft PowerPoint 14.0 Object Library - PowerPoint 14.0
// Project: https://msdn.microsoft.com/en-us/library/fp161225.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="activex-office" />
/// <reference types="activex-vbide" />

declare namespace PowerPoint {
    const enum MsoAnimAccumulate {
        msoAnimAccumulateAlways = 2,
        msoAnimAccumulateNone = 1,
    }

    const enum MsoAnimAdditive {
        msoAnimAdditiveAddBase = 1,
        msoAnimAdditiveAddSum = 2,
    }

    const enum MsoAnimAfterEffect {
        msoAnimAfterEffectDim = 1,
        msoAnimAfterEffectHide = 2,
        msoAnimAfterEffectHideOnNextClick = 3,
        msoAnimAfterEffectMixed = -1,
        msoAnimAfterEffectNone = 0,
    }

    const enum MsoAnimateByLevel {
        msoAnimateChartAllAtOnce = 7,
        msoAnimateChartByCategory = 8,
        msoAnimateChartByCategoryElements = 9,
        msoAnimateChartBySeries = 10,
        msoAnimateChartBySeriesElements = 11,
        msoAnimateDiagramAllAtOnce = 12,
        msoAnimateDiagramBreadthByLevel = 16,
        msoAnimateDiagramBreadthByNode = 15,
        msoAnimateDiagramClockwise = 17,
        msoAnimateDiagramClockwiseIn = 18,
        msoAnimateDiagramClockwiseOut = 19,
        msoAnimateDiagramCounterClockwise = 20,
        msoAnimateDiagramCounterClockwiseIn = 21,
        msoAnimateDiagramCounterClockwiseOut = 22,
        msoAnimateDiagramDepthByBranch = 14,
        msoAnimateDiagramDepthByNode = 13,
        msoAnimateDiagramDown = 26,
        msoAnimateDiagramInByRing = 23,
        msoAnimateDiagramOutByRing = 24,
        msoAnimateDiagramUp = 25,
        msoAnimateLevelMixed = -1,
        msoAnimateLevelNone = 0,
        msoAnimateTextByAllLevels = 1,
        msoAnimateTextByFifthLevel = 6,
        msoAnimateTextByFirstLevel = 2,
        msoAnimateTextByFourthLevel = 5,
        msoAnimateTextBySecondLevel = 3,
        msoAnimateTextByThirdLevel = 4,
    }

    const enum MsoAnimCommandType {
        msoAnimCommandTypeCall = 1,
        msoAnimCommandTypeEvent = 0,
        msoAnimCommandTypeVerb = 2,
    }

    const enum MsoAnimDirection {
        msoAnimDirectionAcross = 18,
        msoAnimDirectionBottom = 11,
        msoAnimDirectionBottomLeft = 15,
        msoAnimDirectionBottomRight = 14,
        msoAnimDirectionCenter = 28,
        msoAnimDirectionClockwise = 21,
        msoAnimDirectionCounterclockwise = 22,
        msoAnimDirectionCycleClockwise = 43,
        msoAnimDirectionCycleCounterclockwise = 44,
        msoAnimDirectionDown = 3,
        msoAnimDirectionDownLeft = 9,
        msoAnimDirectionDownRight = 8,
        msoAnimDirectionFontAllCaps = 40,
        msoAnimDirectionFontBold = 35,
        msoAnimDirectionFontItalic = 36,
        msoAnimDirectionFontShadow = 39,
        msoAnimDirectionFontStrikethrough = 38,
        msoAnimDirectionFontUnderline = 37,
        msoAnimDirectionGradual = 42,
        msoAnimDirectionHorizontal = 16,
        msoAnimDirectionHorizontalIn = 23,
        msoAnimDirectionHorizontalOut = 24,
        msoAnimDirectionIn = 19,
        msoAnimDirectionInBottom = 31,
        msoAnimDirectionInCenter = 30,
        msoAnimDirectionInSlightly = 29,
        msoAnimDirectionInstant = 41,
        msoAnimDirectionLeft = 4,
        msoAnimDirectionNone = 0,
        msoAnimDirectionOrdinalMask = 5,
        msoAnimDirectionOut = 20,
        msoAnimDirectionOutBottom = 34,
        msoAnimDirectionOutCenter = 33,
        msoAnimDirectionOutSlightly = 32,
        msoAnimDirectionRight = 2,
        msoAnimDirectionSlightly = 27,
        msoAnimDirectionTop = 10,
        msoAnimDirectionTopLeft = 12,
        msoAnimDirectionTopRight = 13,
        msoAnimDirectionUp = 1,
        msoAnimDirectionUpLeft = 6,
        msoAnimDirectionUpRight = 7,
        msoAnimDirectionVertical = 17,
        msoAnimDirectionVerticalIn = 25,
        msoAnimDirectionVerticalOut = 26,
    }

    const enum MsoAnimEffect {
        msoAnimEffectAppear = 1,
        msoAnimEffectArcUp = 47,
        msoAnimEffectAscend = 39,
        msoAnimEffectBlast = 64,
        msoAnimEffectBlinds = 3,
        msoAnimEffectBoldFlash = 63,
        msoAnimEffectBoldReveal = 65,
        msoAnimEffectBoomerang = 25,
        msoAnimEffectBounce = 26,
        msoAnimEffectBox = 4,
        msoAnimEffectBrushOnColor = 66,
        msoAnimEffectBrushOnUnderline = 67,
        msoAnimEffectCenterRevolve = 40,
        msoAnimEffectChangeFillColor = 54,
        msoAnimEffectChangeFont = 55,
        msoAnimEffectChangeFontColor = 56,
        msoAnimEffectChangeFontSize = 57,
        msoAnimEffectChangeFontStyle = 58,
        msoAnimEffectChangeLineColor = 60,
        msoAnimEffectCheckerboard = 5,
        msoAnimEffectCircle = 6,
        msoAnimEffectColorBlend = 68,
        msoAnimEffectColorReveal = 27,
        msoAnimEffectColorWave = 69,
        msoAnimEffectComplementaryColor = 70,
        msoAnimEffectComplementaryColor2 = 71,
        msoAnimEffectContrastingColor = 72,
        msoAnimEffectCrawl = 7,
        msoAnimEffectCredits = 28,
        msoAnimEffectCustom = 0,
        msoAnimEffectDarken = 73,
        msoAnimEffectDesaturate = 74,
        msoAnimEffectDescend = 42,
        msoAnimEffectDiamond = 8,
        msoAnimEffectDissolve = 9,
        msoAnimEffectEaseIn = 29,
        msoAnimEffectExpand = 50,
        msoAnimEffectFade = 10,
        msoAnimEffectFadedSwivel = 41,
        msoAnimEffectFadedZoom = 48,
        msoAnimEffectFlashBulb = 75,
        msoAnimEffectFlashOnce = 11,
        msoAnimEffectFlicker = 76,
        msoAnimEffectFlip = 51,
        msoAnimEffectFloat = 30,
        msoAnimEffectFly = 2,
        msoAnimEffectFold = 53,
        msoAnimEffectGlide = 49,
        msoAnimEffectGrowAndTurn = 31,
        msoAnimEffectGrowShrink = 59,
        msoAnimEffectGrowWithColor = 77,
        msoAnimEffectLighten = 78,
        msoAnimEffectLightSpeed = 32,
        msoAnimEffectMediaPause = 84,
        msoAnimEffectMediaPlay = 83,
        msoAnimEffectMediaPlayFromBookmark = 150,
        msoAnimEffectMediaStop = 85,
        msoAnimEffectPath4PointStar = 101,
        msoAnimEffectPath5PointStar = 90,
        msoAnimEffectPath6PointStar = 96,
        msoAnimEffectPath8PointStar = 102,
        msoAnimEffectPathArcDown = 122,
        msoAnimEffectPathArcLeft = 136,
        msoAnimEffectPathArcRight = 143,
        msoAnimEffectPathArcUp = 129,
        msoAnimEffectPathBean = 116,
        msoAnimEffectPathBounceLeft = 126,
        msoAnimEffectPathBounceRight = 139,
        msoAnimEffectPathBuzzsaw = 110,
        msoAnimEffectPathCircle = 86,
        msoAnimEffectPathCrescentMoon = 91,
        msoAnimEffectPathCurvedSquare = 105,
        msoAnimEffectPathCurvedX = 106,
        msoAnimEffectPathCurvyLeft = 133,
        msoAnimEffectPathCurvyRight = 146,
        msoAnimEffectPathCurvyStar = 108,
        msoAnimEffectPathDecayingWave = 145,
        msoAnimEffectPathDiagonalDownRight = 134,
        msoAnimEffectPathDiagonalUpRight = 141,
        msoAnimEffectPathDiamond = 88,
        msoAnimEffectPathDown = 127,
        msoAnimEffectPathEqualTriangle = 98,
        msoAnimEffectPathFigure8Four = 113,
        msoAnimEffectPathFootball = 97,
        msoAnimEffectPathFunnel = 137,
        msoAnimEffectPathHeart = 94,
        msoAnimEffectPathHeartbeat = 130,
        msoAnimEffectPathHexagon = 89,
        msoAnimEffectPathHorizontalFigure8 = 111,
        msoAnimEffectPathInvertedSquare = 119,
        msoAnimEffectPathInvertedTriangle = 118,
        msoAnimEffectPathLeft = 120,
        msoAnimEffectPathLoopdeLoop = 109,
        msoAnimEffectPathNeutron = 114,
        msoAnimEffectPathOctagon = 95,
        msoAnimEffectPathParallelogram = 99,
        msoAnimEffectPathPeanut = 112,
        msoAnimEffectPathPentagon = 100,
        msoAnimEffectPathPlus = 117,
        msoAnimEffectPathPointyStar = 104,
        msoAnimEffectPathRight = 149,
        msoAnimEffectPathRightTriangle = 87,
        msoAnimEffectPathSCurve1 = 144,
        msoAnimEffectPathSCurve2 = 124,
        msoAnimEffectPathSineWave = 125,
        msoAnimEffectPathSpiralLeft = 140,
        msoAnimEffectPathSpiralRight = 131,
        msoAnimEffectPathSpring = 138,
        msoAnimEffectPathSquare = 92,
        msoAnimEffectPathStairsDown = 147,
        msoAnimEffectPathSwoosh = 115,
        msoAnimEffectPathTeardrop = 103,
        msoAnimEffectPathTrapezoid = 93,
        msoAnimEffectPathTurnDown = 135,
        msoAnimEffectPathTurnRight = 121,
        msoAnimEffectPathTurnUp = 128,
        msoAnimEffectPathTurnUpRight = 142,
        msoAnimEffectPathUp = 148,
        msoAnimEffectPathVerticalFigure8 = 107,
        msoAnimEffectPathWave = 132,
        msoAnimEffectPathZigzag = 123,
        msoAnimEffectPeek = 12,
        msoAnimEffectPinwheel = 33,
        msoAnimEffectPlus = 13,
        msoAnimEffectRandomBars = 14,
        msoAnimEffectRandomEffects = 24,
        msoAnimEffectRiseUp = 34,
        msoAnimEffectShimmer = 52,
        msoAnimEffectSling = 43,
        msoAnimEffectSpin = 61,
        msoAnimEffectSpinner = 44,
        msoAnimEffectSpiral = 15,
        msoAnimEffectSplit = 16,
        msoAnimEffectStretch = 17,
        msoAnimEffectStretchy = 45,
        msoAnimEffectStrips = 18,
        msoAnimEffectStyleEmphasis = 79,
        msoAnimEffectSwish = 35,
        msoAnimEffectSwivel = 19,
        msoAnimEffectTeeter = 80,
        msoAnimEffectThinLine = 36,
        msoAnimEffectTransparency = 62,
        msoAnimEffectUnfold = 37,
        msoAnimEffectVerticalGrow = 81,
        msoAnimEffectWave = 82,
        msoAnimEffectWedge = 20,
        msoAnimEffectWheel = 21,
        msoAnimEffectWhip = 38,
        msoAnimEffectWipe = 22,
        msoAnimEffectZip = 46,
        msoAnimEffectZoom = 23,
    }

    const enum MsoAnimEffectAfter {
        msoAnimEffectAfterFreeze = 1,
        msoAnimEffectAfterHold = 3,
        msoAnimEffectAfterRemove = 2,
        msoAnimEffectAfterTransition = 4,
    }

    const enum MsoAnimEffectRestart {
        msoAnimEffectRestartAlways = 1,
        msoAnimEffectRestartNever = 3,
        msoAnimEffectRestartWhenOff = 2,
    }

    const enum MsoAnimFilterEffectSubtype {
        msoAnimFilterEffectSubtypeAcross = 9,
        msoAnimFilterEffectSubtypeDown = 25,
        msoAnimFilterEffectSubtypeDownLeft = 14,
        msoAnimFilterEffectSubtypeDownRight = 16,
        msoAnimFilterEffectSubtypeFromBottom = 13,
        msoAnimFilterEffectSubtypeFromLeft = 10,
        msoAnimFilterEffectSubtypeFromRight = 11,
        msoAnimFilterEffectSubtypeFromTop = 12,
        msoAnimFilterEffectSubtypeHorizontal = 5,
        msoAnimFilterEffectSubtypeIn = 7,
        msoAnimFilterEffectSubtypeInHorizontal = 3,
        msoAnimFilterEffectSubtypeInVertical = 1,
        msoAnimFilterEffectSubtypeLeft = 23,
        msoAnimFilterEffectSubtypeNone = 0,
        msoAnimFilterEffectSubtypeOut = 8,
        msoAnimFilterEffectSubtypeOutHorizontal = 4,
        msoAnimFilterEffectSubtypeOutVertical = 2,
        msoAnimFilterEffectSubtypeRight = 24,
        msoAnimFilterEffectSubtypeSpokes1 = 18,
        msoAnimFilterEffectSubtypeSpokes2 = 19,
        msoAnimFilterEffectSubtypeSpokes3 = 20,
        msoAnimFilterEffectSubtypeSpokes4 = 21,
        msoAnimFilterEffectSubtypeSpokes8 = 22,
        msoAnimFilterEffectSubtypeUp = 26,
        msoAnimFilterEffectSubtypeUpLeft = 15,
        msoAnimFilterEffectSubtypeUpRight = 17,
        msoAnimFilterEffectSubtypeVertical = 6,
    }

    const enum MsoAnimFilterEffectType {
        msoAnimFilterEffectTypeBarn = 1,
        msoAnimFilterEffectTypeBlinds = 2,
        msoAnimFilterEffectTypeBox = 3,
        msoAnimFilterEffectTypeCheckerboard = 4,
        msoAnimFilterEffectTypeCircle = 5,
        msoAnimFilterEffectTypeDiamond = 6,
        msoAnimFilterEffectTypeDissolve = 7,
        msoAnimFilterEffectTypeFade = 8,
        msoAnimFilterEffectTypeImage = 9,
        msoAnimFilterEffectTypeNone = 0,
        msoAnimFilterEffectTypePixelate = 10,
        msoAnimFilterEffectTypePlus = 11,
        msoAnimFilterEffectTypeRandomBar = 12,
        msoAnimFilterEffectTypeSlide = 13,
        msoAnimFilterEffectTypeStretch = 14,
        msoAnimFilterEffectTypeStrips = 15,
        msoAnimFilterEffectTypeWedge = 16,
        msoAnimFilterEffectTypeWheel = 17,
        msoAnimFilterEffectTypeWipe = 18,
    }

    const enum MsoAnimProperty {
        msoAnimColor = 7,
        msoAnimHeight = 4,
        msoAnimNone = 0,
        msoAnimOpacity = 5,
        msoAnimRotation = 6,
        msoAnimShapeFillBackColor = 1007,
        msoAnimShapeFillColor = 1005,
        msoAnimShapeFillOn = 1004,
        msoAnimShapeFillOpacity = 1006,
        msoAnimShapeLineColor = 1009,
        msoAnimShapeLineOn = 1008,
        msoAnimShapePictureBrightness = 1001,
        msoAnimShapePictureContrast = 1000,
        msoAnimShapePictureGamma = 1002,
        msoAnimShapePictureGrayscale = 1003,
        msoAnimShapeShadowColor = 1012,
        msoAnimShapeShadowOffsetX = 1014,
        msoAnimShapeShadowOffsetY = 1015,
        msoAnimShapeShadowOn = 1010,
        msoAnimShapeShadowOpacity = 1013,
        msoAnimShapeShadowType = 1011,
        msoAnimTextBulletCharacter = 111,
        msoAnimTextBulletColor = 114,
        msoAnimTextBulletFontName = 112,
        msoAnimTextBulletNumber = 113,
        msoAnimTextBulletRelativeSize = 115,
        msoAnimTextBulletStyle = 116,
        msoAnimTextBulletType = 117,
        msoAnimTextFontBold = 100,
        msoAnimTextFontColor = 101,
        msoAnimTextFontEmboss = 102,
        msoAnimTextFontItalic = 103,
        msoAnimTextFontName = 104,
        msoAnimTextFontShadow = 105,
        msoAnimTextFontSize = 106,
        msoAnimTextFontStrikeThrough = 110,
        msoAnimTextFontSubscript = 107,
        msoAnimTextFontSuperscript = 108,
        msoAnimTextFontUnderline = 109,
        msoAnimVisibility = 8,
        msoAnimWidth = 3,
        msoAnimX = 1,
        msoAnimY = 2,
    }

    const enum MsoAnimTextUnitEffect {
        msoAnimTextUnitEffectByCharacter = 1,
        msoAnimTextUnitEffectByParagraph = 0,
        msoAnimTextUnitEffectByWord = 2,
        msoAnimTextUnitEffectMixed = -1,
    }

    const enum MsoAnimTriggerType {
        msoAnimTriggerAfterPrevious = 3,
        msoAnimTriggerMixed = -1,
        msoAnimTriggerNone = 0,
        msoAnimTriggerOnMediaBookmark = 5,
        msoAnimTriggerOnPageClick = 1,
        msoAnimTriggerOnShapeClick = 4,
        msoAnimTriggerWithPrevious = 2,
    }

    const enum MsoAnimType {
        msoAnimTypeColor = 2,
        msoAnimTypeCommand = 6,
        msoAnimTypeFilter = 7,
        msoAnimTypeMixed = -2,
        msoAnimTypeMotion = 1,
        msoAnimTypeNone = 0,
        msoAnimTypeProperty = 5,
        msoAnimTypeRotation = 4,
        msoAnimTypeScale = 3,
        msoAnimTypeSet = 8,
    }

    const enum MsoClickState {
        msoClickStateAfterAllAnimations = -2,
        msoClickStateBeforeAutomaticAnimations = -1,
    }

    const enum PpActionType {
        ppActionEndShow = 6,
        ppActionFirstSlide = 3,
        ppActionHyperlink = 7,
        ppActionLastSlide = 4,
        ppActionLastSlideViewed = 5,
        ppActionMixed = -2,
        ppActionNamedSlideShow = 10,
        ppActionNextSlide = 1,
        ppActionNone = 0,
        ppActionOLEVerb = 11,
        ppActionPlay = 12,
        ppActionPreviousSlide = 2,
        ppActionRunMacro = 8,
        ppActionRunProgram = 9,
    }

    const enum PpAdvanceMode {
        ppAdvanceModeMixed = -2,
        ppAdvanceOnClick = 1,
        ppAdvanceOnTime = 2,
    }

    const enum PpAfterEffect {
        ppAfterEffectDim = 2,
        ppAfterEffectHide = 1,
        ppAfterEffectHideOnClick = 3,
        ppAfterEffectMixed = -2,
        ppAfterEffectNothing = 0,
    }

    const enum PpAlertLevel {
        ppAlertsAll = 2,
        ppAlertsNone = 1,
    }

    const enum PpArrangeStyle {
        ppArrangeCascade = 2,
        ppArrangeTiled = 1,
    }

    const enum PpAutoSize {
        ppAutoSizeMixed = -2,
        ppAutoSizeNone = 0,
        ppAutoSizeShapeToFitText = 1,
    }

    const enum PpBaselineAlignment {
        ppBaselineAlignAuto = 5,
        ppBaselineAlignBaseline = 1,
        ppBaselineAlignCenter = 3,
        ppBaselineAlignFarEast50 = 4,
        ppBaselineAlignMixed = -2,
        ppBaselineAlignTop = 2,
    }

    const enum PpBorderType {
        ppBorderBottom = 3,
        ppBorderDiagonalDown = 5,
        ppBorderDiagonalUp = 6,
        ppBorderLeft = 2,
        ppBorderRight = 4,
        ppBorderTop = 1,
    }

    const enum PpBulletType {
        ppBulletMixed = -2,
        ppBulletNone = 0,
        ppBulletNumbered = 2,
        ppBulletPicture = 3,
        ppBulletUnnumbered = 1,
    }

    const enum PpChangeCase {
        ppCaseLower = 2,
        ppCaseSentence = 1,
        ppCaseTitle = 4,
        ppCaseToggle = 5,
        ppCaseUpper = 3,
    }

    const enum PpChartUnitEffect {
        ppAnimateByCategory = 2,
        ppAnimateByCategoryElements = 4,
        ppAnimateBySeries = 1,
        ppAnimateBySeriesElements = 3,
        ppAnimateChartAllAtOnce = 5,
        ppAnimateChartMixed = -2,
    }

    const enum PpCheckInVersionType {
        ppCheckInMajorVersion = 1,
        ppCheckInMinorVersion = 0,
        ppCheckInOverwriteVersion = 2,
    }

    const enum PpColorSchemeIndex {
        ppAccent1 = 6,
        ppAccent2 = 7,
        ppAccent3 = 8,
        ppBackground = 1,
        ppFill = 5,
        ppForeground = 2,
        ppNotSchemeColor = 0,
        ppSchemeColorMixed = -2,
        ppShadow = 3,
        ppTitle = 4,
    }

    const enum PpDateTimeFormat {
        ppDateTimeddddMMMMddyyyy = 2,
        ppDateTimedMMMMyyyy = 3,
        ppDateTimedMMMyy = 5,
        ppDateTimeFigureOut = 14,
        ppDateTimeFormatMixed = -2,
        ppDateTimeHmm = 10,
        ppDateTimehmmAMPM = 12,
        ppDateTimeHmmss = 11,
        ppDateTimehmmssAMPM = 13,
        ppDateTimeMdyy = 1,
        ppDateTimeMMddyyHmm = 8,
        ppDateTimeMMddyyhmmAMPM = 9,
        ppDateTimeMMMMdyyyy = 4,
        ppDateTimeMMMMyy = 6,
        ppDateTimeMMyy = 7,
    }

    const enum PpDirection {
        ppDirectionLeftToRight = 1,
        ppDirectionMixed = -2,
        ppDirectionRightToLeft = 2,
    }

    const enum PpEntryEffect {
        ppEffectAppear = 3844,
        ppEffectBlindsHorizontal = 769,
        ppEffectBlindsVertical = 770,
        ppEffectBoxDown = 3925,
        ppEffectBoxIn = 3074,
        ppEffectBoxLeft = 3922,
        ppEffectBoxOut = 3073,
        ppEffectBoxRight = 3924,
        ppEffectBoxUp = 3923,
        ppEffectCheckerboardAcross = 1025,
        ppEffectCheckerboardDown = 1026,
        ppEffectCircleOut = 3845,
        ppEffectCombHorizontal = 3847,
        ppEffectCombVertical = 3848,
        ppEffectConveyorLeft = 3882,
        ppEffectConveyorRight = 3883,
        ppEffectCoverDown = 1284,
        ppEffectCoverLeft = 1281,
        ppEffectCoverLeftDown = 1287,
        ppEffectCoverLeftUp = 1285,
        ppEffectCoverRight = 1283,
        ppEffectCoverRightDown = 1288,
        ppEffectCoverRightUp = 1286,
        ppEffectCoverUp = 1282,
        ppEffectCrawlFromDown = 3344,
        ppEffectCrawlFromLeft = 3341,
        ppEffectCrawlFromRight = 3343,
        ppEffectCrawlFromUp = 3342,
        ppEffectCubeDown = 3917,
        ppEffectCubeLeft = 3914,
        ppEffectCubeRight = 3916,
        ppEffectCubeUp = 3915,
        ppEffectCut = 257,
        ppEffectCutThroughBlack = 258,
        ppEffectDiamondOut = 3846,
        ppEffectDissolve = 1537,
        ppEffectDoorsHorizontal = 3885,
        ppEffectDoorsVertical = 3884,
        ppEffectFade = 1793,
        ppEffectFadeSmoothly = 3849,
        ppEffectFerrisWheelLeft = 3899,
        ppEffectFerrisWheelRight = 3900,
        ppEffectFlashbulb = 3909,
        ppEffectFlashOnceFast = 3841,
        ppEffectFlashOnceMedium = 3842,
        ppEffectFlashOnceSlow = 3843,
        ppEffectFlipDown = 3908,
        ppEffectFlipLeft = 3905,
        ppEffectFlipRight = 3907,
        ppEffectFlipUp = 3906,
        ppEffectFlyFromBottom = 3332,
        ppEffectFlyFromBottomLeft = 3335,
        ppEffectFlyFromBottomRight = 3336,
        ppEffectFlyFromLeft = 3329,
        ppEffectFlyFromRight = 3331,
        ppEffectFlyFromTop = 3330,
        ppEffectFlyFromTopLeft = 3333,
        ppEffectFlyFromTopRight = 3334,
        ppEffectFlyThroughIn = 3890,
        ppEffectFlyThroughInBounce = 3892,
        ppEffectFlyThroughOut = 3891,
        ppEffectFlyThroughOutBounce = 3893,
        ppEffectGalleryLeft = 3880,
        ppEffectGalleryRight = 3881,
        ppEffectGlitterDiamondDown = 3875,
        ppEffectGlitterDiamondLeft = 3872,
        ppEffectGlitterDiamondRight = 3874,
        ppEffectGlitterDiamondUp = 3873,
        ppEffectGlitterHexagonDown = 3879,
        ppEffectGlitterHexagonLeft = 3876,
        ppEffectGlitterHexagonRight = 3878,
        ppEffectGlitterHexagonUp = 3877,
        ppEffectHoneycomb = 3898,
        ppEffectMixed = -2,
        ppEffectNewsflash = 3850,
        ppEffectNone = 0,
        ppEffectOrbitDown = 3929,
        ppEffectOrbitLeft = 3926,
        ppEffectOrbitRight = 3928,
        ppEffectOrbitUp = 3927,
        ppEffectPanDown = 3933,
        ppEffectPanLeft = 3930,
        ppEffectPanRight = 3932,
        ppEffectPanUp = 3931,
        ppEffectPeekFromDown = 3338,
        ppEffectPeekFromLeft = 3337,
        ppEffectPeekFromRight = 3339,
        ppEffectPeekFromUp = 3340,
        ppEffectPlusOut = 3851,
        ppEffectPushDown = 3852,
        ppEffectPushLeft = 3853,
        ppEffectPushRight = 3854,
        ppEffectPushUp = 3855,
        ppEffectRandom = 513,
        ppEffectRandomBarsHorizontal = 2305,
        ppEffectRandomBarsVertical = 2306,
        ppEffectRevealBlackLeft = 3896,
        ppEffectRevealBlackRight = 3897,
        ppEffectRevealSmoothLeft = 3894,
        ppEffectRevealSmoothRight = 3895,
        ppEffectRippleCenter = 3867,
        ppEffectRippleLeftDown = 3870,
        ppEffectRippleLeftUp = 3869,
        ppEffectRippleRightDown = 3871,
        ppEffectRippleRightUp = 3868,
        ppEffectRotateDown = 3921,
        ppEffectRotateLeft = 3918,
        ppEffectRotateRight = 3920,
        ppEffectRotateUp = 3919,
        ppEffectShredRectangleIn = 3912,
        ppEffectShredRectangleOut = 3913,
        ppEffectShredStripsIn = 3910,
        ppEffectShredStripsOut = 3911,
        ppEffectSpiral = 3357,
        ppEffectSplitHorizontalIn = 3586,
        ppEffectSplitHorizontalOut = 3585,
        ppEffectSplitVerticalIn = 3588,
        ppEffectSplitVerticalOut = 3587,
        ppEffectStretchAcross = 3351,
        ppEffectStretchDown = 3355,
        ppEffectStretchLeft = 3352,
        ppEffectStretchRight = 3354,
        ppEffectStretchUp = 3353,
        ppEffectStripsDownLeft = 2563,
        ppEffectStripsDownRight = 2564,
        ppEffectStripsLeftDown = 2567,
        ppEffectStripsLeftUp = 2565,
        ppEffectStripsRightDown = 2568,
        ppEffectStripsRightUp = 2566,
        ppEffectStripsUpLeft = 2561,
        ppEffectStripsUpRight = 2562,
        ppEffectSwitchDown = 3904,
        ppEffectSwitchLeft = 3901,
        ppEffectSwitchRight = 3903,
        ppEffectSwitchUp = 3902,
        ppEffectSwivel = 3356,
        ppEffectUncoverDown = 2052,
        ppEffectUncoverLeft = 2049,
        ppEffectUncoverLeftDown = 2055,
        ppEffectUncoverLeftUp = 2053,
        ppEffectUncoverRight = 2051,
        ppEffectUncoverRightDown = 2056,
        ppEffectUncoverRightUp = 2054,
        ppEffectUncoverUp = 2050,
        ppEffectVortexDown = 3866,
        ppEffectVortexLeft = 3863,
        ppEffectVortexRight = 3865,
        ppEffectVortexUp = 3864,
        ppEffectWarpIn = 3888,
        ppEffectWarpOut = 3889,
        ppEffectWedge = 3856,
        ppEffectWheel1Spoke = 3857,
        ppEffectWheel2Spokes = 3858,
        ppEffectWheel3Spokes = 3859,
        ppEffectWheel4Spokes = 3860,
        ppEffectWheel8Spokes = 3861,
        ppEffectWheelReverse1Spoke = 3862,
        ppEffectWindowHorizontal = 3887,
        ppEffectWindowVertical = 3886,
        ppEffectWipeDown = 2820,
        ppEffectWipeLeft = 2817,
        ppEffectWipeRight = 2819,
        ppEffectWipeUp = 2818,
        ppEffectZoomBottom = 3350,
        ppEffectZoomCenter = 3349,
        ppEffectZoomIn = 3345,
        ppEffectZoomInSlightly = 3346,
        ppEffectZoomOut = 3347,
        ppEffectZoomOutSlightly = 3348,
    }

    const enum PpExportMode {
        ppClipRelativeToSlide = 2,
        ppRelativeToSlide = 1,
        ppScaleToFit = 3,
        ppScaleXY = 4,
    }

    const enum PpFarEastLineBreakLevel {
        ppFarEastLineBreakLevelCustom = 3,
        ppFarEastLineBreakLevelNormal = 1,
        ppFarEastLineBreakLevelStrict = 2,
    }

    const enum PpFileDialogType {
        ppFileDialogOpen = 1,
        ppFileDialogSave = 2,
    }

    const enum PpFixedFormatIntent {
        ppFixedFormatIntentPrint = 2,
        ppFixedFormatIntentScreen = 1,
    }

    const enum PpFixedFormatType {
        ppFixedFormatTypePDF = 2,
        ppFixedFormatTypeXPS = 1,
    }

    const enum PpFollowColors {
        ppFollowColorsMixed = -2,
        ppFollowColorsNone = 0,
        ppFollowColorsScheme = 1,
        ppFollowColorsTextAndBackground = 2,
    }

    const enum PpFrameColors {
        ppFrameColorsBlackTextOnWhite = 5,
        ppFrameColorsBrowserColors = 1,
        ppFrameColorsPresentationSchemeAccentColor = 3,
        ppFrameColorsPresentationSchemeTextColor = 2,
        ppFrameColorsWhiteTextOnBlack = 4,
    }

    const enum PpHTMLVersion {
        ppHTMLAutodetect = 4,
        ppHTMLDual = 3,
        ppHTMLv3 = 1,
        ppHTMLv4 = 2,
    }

    const enum PpIndentControl {
        ppIndentControlMixed = -2,
        ppIndentKeepAttr = 2,
        ppIndentReplaceAttr = 1,
    }

    const enum PpMediaTaskStatus {
        ppMediaTaskStatusDone = 3,
        ppMediaTaskStatusFailed = 4,
        ppMediaTaskStatusInProgress = 1,
        ppMediaTaskStatusNone = 0,
        ppMediaTaskStatusQueued = 2,
    }

    const enum PpMediaType {
        ppMediaTypeMixed = -2,
        ppMediaTypeMovie = 3,
        ppMediaTypeOther = 1,
        ppMediaTypeSound = 2,
    }

    const enum PpMouseActivation {
        ppMouseClick = 1,
        ppMouseOver = 2,
    }

    const enum PpNumberedBulletStyle {
        ppBulletAlphaLCParenBoth = 8,
        ppBulletAlphaLCParenRight = 9,
        ppBulletAlphaLCPeriod = 0,
        ppBulletAlphaUCParenBoth = 10,
        ppBulletAlphaUCParenRight = 11,
        ppBulletAlphaUCPeriod = 1,
        ppBulletArabicAbjadDash = 24,
        ppBulletArabicAlphaDash = 23,
        ppBulletArabicDBPeriod = 29,
        ppBulletArabicDBPlain = 28,
        ppBulletArabicParenBoth = 12,
        ppBulletArabicParenRight = 2,
        ppBulletArabicPeriod = 3,
        ppBulletArabicPlain = 13,
        ppBulletCircleNumDBPlain = 18,
        ppBulletCircleNumWDBlackPlain = 20,
        ppBulletCircleNumWDWhitePlain = 19,
        ppBulletHebrewAlphaDash = 25,
        ppBulletHindiAlpha1Period = 40,
        ppBulletHindiAlphaPeriod = 36,
        ppBulletHindiNumParenRight = 39,
        ppBulletHindiNumPeriod = 37,
        ppBulletKanjiKoreanPeriod = 27,
        ppBulletKanjiKoreanPlain = 26,
        ppBulletKanjiSimpChinDBPeriod = 38,
        ppBulletRomanLCParenBoth = 4,
        ppBulletRomanLCParenRight = 5,
        ppBulletRomanLCPeriod = 6,
        ppBulletRomanUCParenBoth = 14,
        ppBulletRomanUCParenRight = 15,
        ppBulletRomanUCPeriod = 7,
        ppBulletSimpChinPeriod = 17,
        ppBulletSimpChinPlain = 16,
        ppBulletStyleMixed = -2,
        ppBulletThaiAlphaParenBoth = 32,
        ppBulletThaiAlphaParenRight = 31,
        ppBulletThaiAlphaPeriod = 30,
        ppBulletThaiNumParenBoth = 35,
        ppBulletThaiNumParenRight = 34,
        ppBulletThaiNumPeriod = 33,
        ppBulletTradChinPeriod = 22,
        ppBulletTradChinPlain = 21,
    }

    const enum PpParagraphAlignment {
        ppAlignCenter = 2,
        ppAlignDistribute = 5,
        ppAlignJustify = 4,
        ppAlignJustifyLow = 7,
        ppAlignLeft = 1,
        ppAlignmentMixed = -2,
        ppAlignRight = 3,
        ppAlignThaiDistribute = 6,
    }

    const enum PpPasteDataType {
        ppPasteBitmap = 1,
        ppPasteDefault = 0,
        ppPasteEnhancedMetafile = 2,
        ppPasteGIF = 4,
        ppPasteHTML = 8,
        ppPasteJPG = 5,
        ppPasteMetafilePicture = 3,
        ppPasteOLEObject = 10,
        ppPastePNG = 6,
        ppPasteRTF = 9,
        ppPasteShape = 11,
        ppPasteText = 7,
    }

    const enum PpPlaceholderType {
        ppPlaceholderBitmap = 9,
        ppPlaceholderBody = 2,
        ppPlaceholderCenterTitle = 3,
        ppPlaceholderChart = 8,
        ppPlaceholderDate = 16,
        ppPlaceholderFooter = 15,
        ppPlaceholderHeader = 14,
        ppPlaceholderMediaClip = 10,
        ppPlaceholderMixed = -2,
        ppPlaceholderObject = 7,
        ppPlaceholderOrgChart = 11,
        ppPlaceholderPicture = 18,
        ppPlaceholderSlideNumber = 13,
        ppPlaceholderSubtitle = 4,
        ppPlaceholderTable = 12,
        ppPlaceholderTitle = 1,
        ppPlaceholderVerticalBody = 6,
        ppPlaceholderVerticalObject = 17,
        ppPlaceholderVerticalTitle = 5,
    }

    const enum PpPlayerState {
        ppNotReady = 3,
        ppPaused = 1,
        ppPlaying = 0,
        ppStopped = 2,
    }

    const enum PpPrintColorType {
        ppPrintBlackAndWhite = 2,
        ppPrintColor = 1,
        ppPrintPureBlackAndWhite = 3,
    }

    const enum PpPrintHandoutOrder {
        ppPrintHandoutHorizontalFirst = 2,
        ppPrintHandoutVerticalFirst = 1,
    }

    const enum PpPrintOutputType {
        ppPrintOutputBuildSlides = 7,
        ppPrintOutputFourSlideHandouts = 8,
        ppPrintOutputNineSlideHandouts = 9,
        ppPrintOutputNotesPages = 5,
        ppPrintOutputOneSlideHandouts = 10,
        ppPrintOutputOutline = 6,
        ppPrintOutputSixSlideHandouts = 4,
        ppPrintOutputSlides = 1,
        ppPrintOutputThreeSlideHandouts = 3,
        ppPrintOutputTwoSlideHandouts = 2,
    }

    const enum PpPrintRangeType {
        ppPrintAll = 1,
        ppPrintCurrent = 3,
        ppPrintNamedSlideShow = 5,
        ppPrintSection = 6,
        ppPrintSelection = 2,
        ppPrintSlideRange = 4,
    }

    const enum PpProtectedViewCloseReason {
        ppProtectedViewCloseEdit = 1,
        ppProtectedViewCloseForced = 2,
        ppProtectedViewCloseNormal = 0,
    }

    const enum PpPublishSourceType {
        ppPublishAll = 1,
        ppPublishNamedSlideShow = 3,
        ppPublishSlideRange = 2,
    }

    const enum PpRemoveDocInfoType {
        ppRDIAll = 99,
        ppRDIComments = 1,
        ppRDIContentType = 16,
        ppRDIDocumentManagementPolicy = 15,
        ppRDIDocumentProperties = 8,
        ppRDIDocumentServerProperties = 14,
        ppRDIDocumentWorkspace = 10,
        ppRDIInkAnnotations = 11,
        ppRDIPublishPath = 13,
        ppRDIRemovePersonalInformation = 4,
        ppRDISlideUpdateInformation = 17,
    }

    const enum PpResampleMediaProfile {
        ppResampleMediaProfileCustom = 1,
        ppResampleMediaProfileSmall = 2,
        ppResampleMediaProfileSmaller = 3,
        ppResampleMediaProfileSmallest = 4,
    }

    const enum PpRevisionInfo {
        ppRevisionInfoBaseline = 1,
        ppRevisionInfoMerged = 2,
        ppRevisionInfoNone = 0,
    }

    const enum PpSaveAsFileType {
        ppSaveAsAddIn = 8,
        ppSaveAsBMP = 19,
        ppSaveAsDefault = 11,
        ppSaveAsEMF = 23,
        ppSaveAsExternalConverter = 64000,
        ppSaveAsGIF = 16,
        ppSaveAsHTML = 12,
        ppSaveAsHTMLDual = 14,
        ppSaveAsHTMLv3 = 13,
        ppSaveAsJPG = 17,
        ppSaveAsMetaFile = 15,
        ppSaveAsOpenDocumentPresentation = 35,
        ppSaveAsOpenXMLAddin = 30,
        ppSaveAsOpenXMLPicturePresentation = 36,
        ppSaveAsOpenXMLPresentation = 24,
        ppSaveAsOpenXMLPresentationMacroEnabled = 25,
        ppSaveAsOpenXMLShow = 28,
        ppSaveAsOpenXMLShowMacroEnabled = 29,
        ppSaveAsOpenXMLTemplate = 26,
        ppSaveAsOpenXMLTemplateMacroEnabled = 27,
        ppSaveAsOpenXMLTheme = 31,
        ppSaveAsPDF = 32,
        ppSaveAsPNG = 18,
        ppSaveAsPowerPoint3 = 4,
        ppSaveAsPowerPoint4 = 3,
        ppSaveAsPowerPoint4FarEast = 10,
        ppSaveAsPowerPoint7 = 2,
        ppSaveAsPresentation = 1,
        ppSaveAsPresForReview = 22,
        ppSaveAsRTF = 6,
        ppSaveAsShow = 7,
        ppSaveAsTemplate = 5,
        ppSaveAsTIF = 21,
        ppSaveAsWebArchive = 20,
        ppSaveAsWMV = 37,
        ppSaveAsXMLPresentation = 34,
        ppSaveAsXPS = 33,
    }

    const enum PpSelectionType {
        ppSelectionNone = 0,
        ppSelectionShapes = 2,
        ppSelectionSlides = 1,
        ppSelectionText = 3,
    }

    const enum PpShapeFormat {
        ppShapeFormatBMP = 3,
        ppShapeFormatEMF = 5,
        ppShapeFormatGIF = 0,
        ppShapeFormatJPG = 1,
        ppShapeFormatPNG = 2,
        ppShapeFormatWMF = 4,
    }

    const enum PpSlideLayout {
        ppLayoutBlank = 12,
        ppLayoutChart = 8,
        ppLayoutChartAndText = 6,
        ppLayoutClipartAndText = 10,
        ppLayoutClipArtAndVerticalText = 26,
        ppLayoutComparison = 34,
        ppLayoutContentWithCaption = 35,
        ppLayoutCustom = 32,
        ppLayoutFourObjects = 24,
        ppLayoutLargeObject = 15,
        ppLayoutMediaClipAndText = 18,
        ppLayoutMixed = -2,
        ppLayoutObject = 16,
        ppLayoutObjectAndText = 14,
        ppLayoutObjectAndTwoObjects = 30,
        ppLayoutObjectOverText = 19,
        ppLayoutOrgchart = 7,
        ppLayoutPictureWithCaption = 36,
        ppLayoutSectionHeader = 33,
        ppLayoutTable = 4,
        ppLayoutText = 2,
        ppLayoutTextAndChart = 5,
        ppLayoutTextAndClipart = 9,
        ppLayoutTextAndMediaClip = 17,
        ppLayoutTextAndObject = 13,
        ppLayoutTextAndTwoObjects = 21,
        ppLayoutTextOverObject = 20,
        ppLayoutTitle = 1,
        ppLayoutTitleOnly = 11,
        ppLayoutTwoColumnText = 3,
        ppLayoutTwoObjects = 29,
        ppLayoutTwoObjectsAndObject = 31,
        ppLayoutTwoObjectsAndText = 22,
        ppLayoutTwoObjectsOverText = 23,
        ppLayoutVerticalText = 25,
        ppLayoutVerticalTitleAndText = 27,
        ppLayoutVerticalTitleAndTextOverChart = 28,
    }

    const enum PpSlideShowAdvanceMode {
        ppSlideShowManualAdvance = 1,
        ppSlideShowRehearseNewTimings = 3,
        ppSlideShowUseSlideTimings = 2,
    }

    const enum PpSlideShowPointerType {
        ppSlideShowPointerAlwaysHidden = 3,
        ppSlideShowPointerArrow = 1,
        ppSlideShowPointerAutoArrow = 4,
        ppSlideShowPointerEraser = 5,
        ppSlideShowPointerNone = 0,
        ppSlideShowPointerPen = 2,
    }

    const enum PpSlideShowRangeType {
        ppShowAll = 1,
        ppShowNamedSlideShow = 3,
        ppShowSlideRange = 2,
    }

    const enum PpSlideShowState {
        ppSlideShowBlackScreen = 3,
        ppSlideShowDone = 5,
        ppSlideShowPaused = 2,
        ppSlideShowRunning = 1,
        ppSlideShowWhiteScreen = 4,
    }

    const enum PpSlideShowType {
        ppShowTypeKiosk = 3,
        ppShowTypeSpeaker = 1,
        ppShowTypeWindow = 2,
        ppShowTypeWindow2 = 4,
    }

    const enum PpSlideSizeType {
        ppSlideSize35MM = 4,
        ppSlideSizeA3Paper = 9,
        ppSlideSizeA4Paper = 3,
        ppSlideSizeB4ISOPaper = 10,
        ppSlideSizeB4JISPaper = 12,
        ppSlideSizeB5ISOPaper = 11,
        ppSlideSizeB5JISPaper = 13,
        ppSlideSizeBanner = 6,
        ppSlideSizeCustom = 7,
        ppSlideSizeHagakiCard = 14,
        ppSlideSizeLedgerPaper = 8,
        ppSlideSizeLetterPaper = 2,
        ppSlideSizeOnScreen = 1,
        ppSlideSizeOnScreen16x10 = 16,
        ppSlideSizeOnScreen16x9 = 15,
        ppSlideSizeOverhead = 5,
    }

    const enum PpSoundEffectType {
        ppSoundEffectsMixed = -2,
        ppSoundFile = 2,
        ppSoundNone = 0,
        ppSoundStopPrevious = 1,
    }

    const enum PpSoundFormatType {
        ppSoundFormatCDAudio = 3,
        ppSoundFormatMIDI = 2,
        ppSoundFormatMixed = -2,
        ppSoundFormatNone = 0,
        ppSoundFormatWAV = 1,
    }

    const enum PpTabStopType {
        ppTabStopCenter = 2,
        ppTabStopDecimal = 4,
        ppTabStopLeft = 1,
        ppTabStopMixed = -2,
        ppTabStopRight = 3,
    }

    const enum PpTextLevelEffect {
        ppAnimateByAllLevels = 16,
        ppAnimateByFifthLevel = 5,
        ppAnimateByFirstLevel = 1,
        ppAnimateByFourthLevel = 4,
        ppAnimateBySecondLevel = 2,
        ppAnimateByThirdLevel = 3,
        ppAnimateLevelMixed = -2,
        ppAnimateLevelNone = 0,
    }

    const enum PpTextStyleType {
        ppBodyStyle = 3,
        ppDefaultStyle = 1,
        ppTitleStyle = 2,
    }

    const enum PpTextUnitEffect {
        ppAnimateByCharacter = 2,
        ppAnimateByParagraph = 0,
        ppAnimateByWord = 1,
        ppAnimateUnitMixed = -2,
    }

    const enum PpTransitionSpeed {
        ppTransitionSpeedFast = 3,
        ppTransitionSpeedMedium = 2,
        ppTransitionSpeedMixed = -2,
        ppTransitionSpeedSlow = 1,
    }

    const enum PpUpdateOption {
        ppUpdateOptionAutomatic = 2,
        ppUpdateOptionManual = 1,
        ppUpdateOptionMixed = -2,
    }

    const enum PpViewType {
        ppViewHandoutMaster = 4,
        ppViewMasterThumbnails = 12,
        ppViewNormal = 9,
        ppViewNotesMaster = 5,
        ppViewNotesPage = 3,
        ppViewOutline = 6,
        ppViewPrintPreview = 10,
        ppViewSlide = 1,
        ppViewSlideMaster = 2,
        ppViewSlideSorter = 7,
        ppViewThumbnails = 11,
        ppViewTitleMaster = 8,
    }

    const enum PpWindowState {
        ppWindowMaximized = 3,
        ppWindowMinimized = 2,
        ppWindowNormal = 1,
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

    class ActionSetting {
        private 'PowerPoint.ActionSetting_typekey': ActionSetting;
        private constructor();
        Action: PpActionType;
        ActionVerb: string;
        AnimateAction: Office.MsoTriState;
        readonly Application: Application;
        readonly Hyperlink: Hyperlink;
        readonly Parent: any;
        Run: string;
        ShowAndReturn: Office.MsoTriState;
        SlideShowName: string;
        readonly SoundEffect: SoundEffect;
    }

    class ActionSettings {
        private 'PowerPoint.ActionSettings_typekey': ActionSettings;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: PpMouseActivation): ActionSetting;
        readonly Parent: any;
    }

    class AddIn {
        private 'PowerPoint.AddIn_typekey': AddIn;
        private constructor();
        readonly Application: Application;
        AutoLoad: Office.MsoTriState;
        DisplayAlerts: Office.MsoTriState;
        readonly FullName: string;
        Loaded: Office.MsoTriState;
        readonly Name: string;
        readonly Parent: any;
        readonly Path: string;
        Registered: Office.MsoTriState;
        readonly RegisteredInHKLM: Office.MsoTriState;
    }

    class AddIns {
        private 'PowerPoint.AddIns_typekey': AddIns;
        private constructor();
        Add(FileName: string): AddIn;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: any): AddIn;
        readonly Parent: any;
        Remove(Index: any): void;
    }

    class Adjustments {
        private 'PowerPoint.Adjustments_typekey': Adjustments;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: number): number;
        readonly Parent: any;
    }

    class AnimationBehavior {
        private 'PowerPoint.AnimationBehavior_typekey': AnimationBehavior;
        private constructor();
        Accumulate: MsoAnimAccumulate;
        Additive: MsoAnimAdditive;
        readonly Application: Application;
        readonly ColorEffect: ColorEffect;
        readonly CommandEffect: CommandEffect;
        Delete(): void;
        readonly FilterEffect: FilterEffect;
        readonly MotionEffect: MotionEffect;
        readonly Parent: any;
        readonly PropertyEffect: PropertyEffect;
        readonly RotationEffect: RotationEffect;
        readonly ScaleEffect: ScaleEffect;
        readonly SetEffect: SetEffect;
        readonly Timing: Timing;
        Type: MsoAnimType;
    }

    class AnimationBehaviors {
        private 'PowerPoint.AnimationBehaviors_typekey': AnimationBehaviors;
        private constructor();

        /** @param number [Index=-1] */
        Add(Type: MsoAnimType, Index?: number): AnimationBehavior;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): AnimationBehavior;
        readonly Parent: any;
    }

    class AnimationPoint {
        private 'PowerPoint.AnimationPoint_typekey': AnimationPoint;
        private constructor();
        readonly Application: Application;
        Delete(): void;
        Formula: string;
        readonly Parent: any;
        Time: number;
        Value: any;
    }

    class AnimationPoints {
        private 'PowerPoint.AnimationPoints_typekey': AnimationPoints;
        private constructor();

        /** @param number [Index=-1] */
        Add(Index?: number): AnimationPoint;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): AnimationPoint;
        readonly Parent: any;
        Smooth: Office.MsoTriState;
    }

    class AnimationSettings {
        private 'PowerPoint.AnimationSettings_typekey': AnimationSettings;
        private constructor();
        AdvanceMode: PpAdvanceMode;
        AdvanceTime: number;
        AfterEffect: PpAfterEffect;
        Animate: Office.MsoTriState;
        AnimateBackground: Office.MsoTriState;
        AnimateTextInReverse: Office.MsoTriState;
        AnimationOrder: number;
        readonly Application: Application;
        ChartUnitEffect: PpChartUnitEffect;
        readonly DimColor: ColorFormat;
        EntryEffect: PpEntryEffect;
        readonly Parent: any;
        readonly PlaySettings: PlaySettings;
        readonly SoundEffect: SoundEffect;
        TextLevelEffect: PpTextLevelEffect;
        TextUnitEffect: PpTextUnitEffect;
    }

    class Application {
        private 'PowerPoint.Application_typekey': Application;
        private constructor();
        Activate(): void;
        readonly Active: Office.MsoTriState;
        readonly ActiveEncryptionSession: number;
        readonly ActivePresentation: Presentation;
        readonly ActivePrinter: string;
        readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        readonly ActiveWindow: DocumentWindow;
        readonly AddIns: AddIns;
        readonly AnswerWizard: Office.AnswerWizard;
        readonly Assistance: Office.IAssistance;
        readonly Assistant: Office.Assistant;
        readonly AutoCorrect: AutoCorrect;
        AutomationSecurity: Office.MsoAutomationSecurity;
        readonly Build: string;
        Caption: string;
        readonly COMAddIns: Office.COMAddIns;
        readonly CommandBars: Office.CommandBars;
        readonly Creator: number;
        readonly DefaultWebOptions: DefaultWebOptions;
        readonly Dialogs: any;
        DisplayAlerts: PpAlertLevel;
        DisplayDocumentInformationPanel: boolean;
        DisplayGridLines: Office.MsoTriState;
        FeatureInstall: Office.MsoFeatureInstall;
        readonly FileConverters: FileConverters;
        FileDialog(Type: Office.MsoFileDialogType): Office.FileDialog;
        readonly FileFind: Office.IFind;
        readonly FileSearch: Office.FileSearch;
        FileValidation: Office.MsoFileValidationMode;

        /** @param boolean [Persist=false] */
        GetOptionFlag(Option: number, Persist?: boolean): boolean;
        Height: number;

        /**
         * @param string [HelpFile='vbapp10.chm']
         * @param number [ContextID=0]
         */
        Help(HelpFile?: string, ContextID?: number): void;
        readonly IsSandboxed: boolean;
        readonly LanguageSettings: Office.LanguageSettings;
        LaunchPublishSlidesDialog(SlideLibraryUrl: string): void;
        LaunchSendToPPTDialog(SlideUrls: any): void;
        Left: number;
        readonly Marker: any;
        readonly MsoDebugOptions: Office.MsoDebugOptions;
        readonly Name: string;
        readonly NewPresentation: Office.NewFile;
        readonly OperatingSystem: string;
        readonly Options: Options;
        readonly Path: string;
        PPFileDialog(Type: PpFileDialogType): any;
        readonly Presentations: Presentations;
        readonly ProductCode: string;
        readonly ProtectedViewWindows: ProtectedViewWindows;
        Quit(): void;
        readonly ResampleMediaTasks: ResampleMediaTasks;
        Run(MacroName: string, ...safeArrayOfParams: any[]): any;

        /** @param boolean [Persist=false] */
        SetOptionFlag(Option: number, State: boolean, Persist?: boolean): void;
        SetPerfMarker(Marker: number): void;
        ShowStartupDialog: Office.MsoTriState;
        ShowWindowsInTaskbar: Office.MsoTriState;
        readonly SlideShowWindows: SlideShowWindows;
        readonly SmartArtColors: Office.SmartArtColors;
        readonly SmartArtLayouts: Office.SmartArtLayouts;
        readonly SmartArtQuickStyles: Office.SmartArtQuickStyles;
        StartNewUndoEntry(): void;
        Top: number;
        readonly VBE: VBIDE.VBE;
        readonly Version: string;
        Visible: Office.MsoTriState;
        Width: number;
        readonly Windows: DocumentWindows;
        WindowState: PpWindowState;
    }

    class AutoCorrect {
        private 'PowerPoint.AutoCorrect_typekey': AutoCorrect;
        private constructor();
        DisplayAutoCorrectOptions: boolean;
        DisplayAutoLayoutOptions: boolean;
    }

    class Borders {
        private 'PowerPoint.Borders_typekey': Borders;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(BorderType: PpBorderType): LineFormat;
        readonly Parent: any;
    }

    class Broadcast {
        private 'PowerPoint.Broadcast_typekey': Broadcast;
        private constructor();
        readonly Application: Application;
        readonly AttendeeUrl: string;
        End(): void;
        readonly IsBroadcasting: boolean;
        readonly Parent: any;
        Start(serverUrl: string): void;
    }

    class BulletFormat {
        private 'PowerPoint.BulletFormat_typekey': BulletFormat;
        private constructor();
        readonly Application: Application;
        Character: number;
        readonly Font: Font;
        readonly Number: number;
        readonly Parent: any;
        Picture(Picture: string): void;
        RelativeSize: number;
        StartValue: number;
        Style: PpNumberedBulletStyle;
        Type: PpBulletType;
        UseTextColor: Office.MsoTriState;
        UseTextFont: Office.MsoTriState;
        Visible: Office.MsoTriState;
    }

    class CalloutFormat {
        private 'PowerPoint.CalloutFormat_typekey': CalloutFormat;
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

    class CanvasShapes {
        private 'PowerPoint.CanvasShapes_typekey': CanvasShapes;
        private constructor();
        AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddCurve(SafeArrayOfPoints: any): Shape;
        AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;

        /**
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddPicture(FileName: string, LinkToFile: Office.MsoTriState, SaveWithDocument: Office.MsoTriState, Left: number, Top: number, Width?: number, Height?: number): Shape;
        AddPolyline(SafeArrayOfPoints: any): Shape;
        AddShape(Type: Office.MsoAutoShapeType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number): Shape;
        readonly Application: any;
        readonly Background: Shape;
        BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Shape;
        readonly Parent: any;
        Range(Index: any): ShapeRange;
        SelectAll(): void;
    }

    class Cell {
        private 'PowerPoint.Cell_typekey': Cell;
        private constructor();
        readonly Application: Application;
        readonly Borders: Borders;
        Merge(MergeTo: Cell): void;
        readonly Parent: any;
        Select(): void;
        readonly Selected: boolean;
        readonly Shape: Shape;
        Split(NumRows: number, NumColumns: number): void;
    }

    class CellRange {
        private 'PowerPoint.CellRange_typekey': CellRange;
        private constructor();
        readonly Application: Application;
        readonly Borders: Borders;
        readonly Count: number;
        Item(Index: number): Cell;
        readonly Parent: any;
    }

    class Chart {
        private 'PowerPoint.Chart_typekey': Chart;
        private constructor();

        /** @param PowerPoint.XlDataLabelsType [Type=2] */
        _ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any): void;
        AlternativeText: string;
        readonly Application: Application;
        ApplyChartTemplate(FileName: string): void;
        ApplyCustomType(ChartType: Office.XlChartType, TypeName?: any): void;

        /** @param PowerPoint.XlDataLabelsType [Type=2] */
        ApplyDataLabels(
            Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any,
            ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;
        ApplyLayout(Layout: number, ChartType?: any): void;
        readonly Area3DGroup: ChartGroup;
        AreaGroups(Index?: any): any;
        AutoFormat(Gallery: number, Format?: any): void;
        AutoScaling: boolean;

        /** @param PowerPoint.XlAxisGroup [AxisGroup=1] */
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
         * @param PowerPoint.XlPictureAppearance [Appearance=1]
         * @param PowerPoint.XlCopyPictureFormat [Format=-4147]
         * @param PowerPoint.XlPictureAppearance [Size=2]
         */
        CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat, Size?: XlPictureAppearance): void;
        readonly Corners: Corners;
        readonly Creator: number;
        readonly DataTable: DataTable;
        Delete(): void;
        DepthPercent: number;
        DisplayBlanksAs: XlDisplayBlanksAs;
        DoughnutGroups(Index?: any): any;
        Elevation: number;
        Export(FileName: string, FilterName?: any, Interactive?: any): boolean;
        readonly Floor: Floor;
        readonly Format: ChartFormat;
        GapDepth: number;
        GetChartElement(X: number, Y: number, ElementID: number, Arg1: number, Arg2: number): void;
        HasAxis(Index1?: any, Index2?: any): any;
        HasDataTable: boolean;
        HasLegend: boolean;
        HasPivotFields: boolean;
        HasTitle: boolean;
        HeightPercent: number;
        readonly Legend: Legend;
        readonly Line3DGroup: ChartGroup;
        LineGroups(Index?: any): any;
        Name: string;
        readonly Parent: any;
        Paste(Type?: any): void;
        Perspective: number;
        readonly Pie3DGroup: ChartGroup;
        PieGroups(Index?: any): any;
        readonly PlotArea: PlotArea;
        PlotBy: XlRowCol;
        PlotVisibleOnly: boolean;
        RadarGroups(Index?: any): any;
        Refresh(): void;
        RightAngleAxes: any;
        Rotation: any;
        SaveChartTemplate(FileName: string): void;
        Select(Replace?: any): void;
        SeriesCollection(Index?: any): any;
        SetBackgroundPicture(FileName: string): void;
        SetDefaultChart(Name: any): void;
        SetElement(Element: Office.MsoChartElementType): void;
        SetSourceData(Source: string, PlotBy?: any): void;
        readonly Shapes: Shapes;
        ShowAllFieldButtons: boolean;
        ShowAxisFieldButtons: boolean;
        ShowDataLabelsOverMaximum: boolean;
        ShowLegendFieldButtons: boolean;
        ShowReportFilterFieldButtons: boolean;
        ShowValueFieldButtons: boolean;
        readonly SideWall: Walls;
        Subtype: number;
        readonly SurfaceGroup: ChartGroup;
        Title: string;
        Type: number;
        readonly Walls: Walls;
        XYGroups(Index?: any): any;
    }

    class ChartArea {
        private 'PowerPoint.ChartArea_typekey': ChartArea;
        private constructor();
        readonly Application: Application;
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
        private 'PowerPoint.ChartBorder_typekey': ChartBorder;
        private constructor();
        readonly Application: Application;
        Color: any;
        ColorIndex: any;
        readonly Creator: number;
        LineStyle: any;
        readonly Parent: any;
        Weight: any;
    }

    class ChartCharacters {
        private 'PowerPoint.ChartCharacters_typekey': ChartCharacters;
        private constructor();
        readonly Application: Application;
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
        private 'PowerPoint.ChartColorFormat_typekey': ChartColorFormat;
        private constructor();
        readonly _Default: number;
        readonly Application: Application;
        readonly Creator: number;
        readonly Parent: any;
        readonly RGB: number;
        SchemeColor: number;
        readonly Type: number;
    }

    class ChartData {
        private 'PowerPoint.ChartData_typekey': ChartData;
        private constructor();
        Activate(): void;
        BreakLink(): void;
        readonly IsLinked: boolean;
        readonly Workbook: any;
    }

    class ChartFillFormat {
        private 'PowerPoint.ChartFillFormat_typekey': ChartFillFormat;
        private constructor();
        readonly Application: Application;
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
        private 'PowerPoint.ChartFont_typekey': ChartFont;
        private constructor();
        readonly Application: Application;
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
        Strikethrough: any;
        Subscript: any;
        Superscript: any;
        Underline: any;
    }

    class ChartFormat {
        private 'PowerPoint.ChartFormat_typekey': ChartFormat;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
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
        private 'PowerPoint.ChartGroup_typekey': ChartGroup;
        private constructor();
        readonly Application: Application;
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
        Subtype: number;
        Type: number;
        readonly UpBars: UpBars;
        VaryByCategories: boolean;
    }

    class ChartTitle {
        private 'PowerPoint.ChartTitle_typekey': ChartTitle;
        private constructor();
        readonly Application: Application;
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

    class Coauthoring {
        private 'PowerPoint.Coauthoring_typekey': Coauthoring;
        private constructor();
        readonly Application: Application;
        readonly CoauthorCount: number;
        EndReview(): void;
        FavorServerEditsDuringMerge: boolean;
        readonly MergeMode: boolean;
        readonly Parent: any;
        readonly PendingUpdates: boolean;
    }

    class ColorEffect {
        private 'PowerPoint.ColorEffect_typekey': ColorEffect;
        private constructor();
        readonly Application: Application;
        readonly By: ColorFormat;
        readonly From: ColorFormat;
        readonly Parent: any;
        readonly To: ColorFormat;
    }

    class ColorFormat {
        private 'PowerPoint.ColorFormat_typekey': ColorFormat;
        private constructor();
        readonly Application: any;
        Brightness: number;
        readonly Creator: number;
        ObjectThemeColor: Office.MsoThemeColorIndex;
        readonly Parent: any;
        RGB: Office.MsoRGBType;
        SchemeColor: PpColorSchemeIndex;
        TintAndShade: number;
        readonly Type: Office.MsoColorType;
    }

    class ColorScheme {
        private 'PowerPoint.ColorScheme_typekey': ColorScheme;
        private constructor();
        readonly Application: Application;
        Colors(SchemeColor: PpColorSchemeIndex): RGBColor;
        readonly Count: number;
        Delete(): void;
        readonly Parent: any;
    }

    class ColorSchemes {
        private 'PowerPoint.ColorSchemes_typekey': ColorSchemes;
        private constructor();

        /** @param PowerPoint.ColorScheme [Scheme=0] */
        Add(Scheme?: ColorScheme): ColorScheme;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): ColorScheme;
        readonly Parent: any;
    }

    class Column {
        private 'PowerPoint.Column_typekey': Column;
        private constructor();
        readonly Application: Application;
        readonly Cells: CellRange;
        Delete(): void;
        readonly Parent: any;
        Select(): void;
        Width: number;
    }

    class Columns {
        private 'PowerPoint.Columns_typekey': Columns;
        private constructor();

        /** @param number [BeforeColumn=-1] */
        Add(BeforeColumn?: number): Column;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): Column;
        readonly Parent: any;
    }

    class CommandEffect {
        private 'PowerPoint.CommandEffect_typekey': CommandEffect;
        private constructor();
        readonly Application: Application;
        bookmark: string;
        Command: string;
        readonly Parent: any;
        Type: MsoAnimCommandType;
    }

    class Comment {
        private 'PowerPoint.Comment_typekey': Comment;
        private constructor();
        readonly Application: Application;
        readonly Author: string;
        readonly AuthorIndex: number;
        readonly AuthorInitials: string;
        readonly DateTime: VarDate;
        Delete(): void;
        readonly Left: number;
        readonly Parent: any;
        readonly Text: string;
        readonly Top: number;
    }

    class Comments {
        private 'PowerPoint.Comments_typekey': Comments;
        private constructor();
        Add(Left: number, Top: number, Author: string, AuthorInitials: string, Text: string): Comment;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): Comment;
        readonly Parent: any;
    }

    class ConnectorFormat {
        private 'PowerPoint.ConnectorFormat_typekey': ConnectorFormat;
        private constructor();
        readonly Application: any;
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

    class Corners {
        private 'PowerPoint.Corners_typekey': Corners;
        private constructor();
        readonly Application: Application;
        readonly Creator: number;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class CustomerData {
        private 'PowerPoint.CustomerData_typekey': CustomerData;
        private constructor();
        Add(): Office.CustomXMLPart;
        readonly Application: Application;
        readonly Count: number;
        Delete(Id: string): void;
        Item(Id: string): Office.CustomXMLPart;
        readonly Parent: any;
    }

    class CustomLayout {
        private 'PowerPoint.CustomLayout_typekey': CustomLayout;
        private constructor();
        readonly Application: Application;
        readonly Background: ShapeRange;
        Copy(): void;
        readonly CustomerData: CustomerData;
        Cut(): void;
        Delete(): void;
        readonly Design: Design;
        DisplayMasterShapes: Office.MsoTriState;
        Duplicate(): CustomLayout;
        FollowMasterBackground: Office.MsoTriState;
        readonly HeadersFooters: HeadersFooters;
        readonly Height: number;
        readonly Hyperlinks: Hyperlinks;
        readonly Index: number;
        MatchingName: string;
        MoveTo(toPos: number): void;
        Name: string;
        readonly Parent: any;
        Preserved: Office.MsoTriState;
        Select(): void;
        readonly Shapes: Shapes;
        readonly SlideShowTransition: SlideShowTransition;
        readonly ThemeColorScheme: Office.ThemeColorScheme;
        readonly TimeLine: TimeLine;
        readonly Width: number;
    }

    class CustomLayouts {
        private 'PowerPoint.CustomLayouts_typekey': CustomLayouts;
        private constructor();
        Add(Index: number): CustomLayout;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: any): CustomLayout;
        readonly Parent: any;

        /** @param number [Index=-1] */
        Paste(Index?: number): CustomLayout;
    }

    class DataTable {
        private 'PowerPoint.DataTable_typekey': DataTable;
        private constructor();
        readonly Application: Application;
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
        private 'PowerPoint.DefaultWebOptions_typekey': DefaultWebOptions;
        private constructor();
        AllowPNG: Office.MsoTriState;
        AlwaysSaveInDefaultEncoding: Office.MsoTriState;
        CheckIfOfficeIsHTMLEditor: Office.MsoTriState;
        Encoding: Office.MsoEncoding;
        readonly FolderSuffix: string;
        readonly Fonts: Office.WebPageFonts;
        FrameColors: PpFrameColors;
        HTMLVersion: PpHTMLVersion;
        IncludeNavigation: Office.MsoTriState;
        OrganizeInFolder: Office.MsoTriState;
        RelyOnVML: Office.MsoTriState;
        ResizeGraphics: Office.MsoTriState;
        SaveNewWebPagesAsWebArchives: Office.MsoTriState;
        ScreenSize: Office.MsoScreenSize;
        ShowSlideAnimation: Office.MsoTriState;
        TargetBrowser: Office.MsoTargetBrowser;
        UpdateLinksOnSave: Office.MsoTriState;
        UseLongFileNames: Office.MsoTriState;
    }

    class Design {
        private 'PowerPoint.Design_typekey': Design;
        private constructor();
        AddTitleMaster(): Master;
        readonly Application: Application;
        Delete(): void;
        readonly HasTitleMaster: Office.MsoTriState;
        readonly Index: number;
        MoveTo(toPos: number): void;
        Name: string;
        readonly Parent: any;
        Preserved: Office.MsoTriState;
        readonly SlideMaster: Master;
        readonly TitleMaster: Master;
    }

    class Designs {
        private 'PowerPoint.Designs_typekey': Designs;
        private constructor();

        /** @param number [Index=-1] */
        Add(designName: string, Index?: number): Design;
        readonly Application: Application;

        /** @param number [Index=-1] */
        Clone(pOriginal: Design, Index?: number): Design;
        readonly Count: number;
        Item(Index: any): Design;

        /** @param number [Index=-1] */
        Load(TemplateName: string, Index?: number): Design;
        readonly Parent: any;
    }

    class Diagram {
        private 'PowerPoint.Diagram_typekey': Diagram;
        private constructor();
        readonly Application: any;
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
        private 'PowerPoint.DiagramNode_typekey': DiagramNode;
        private constructor();

        /**
         * @param Office.MsoRelativeNodePosition [Pos=2]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        AddNode(Pos?: Office.MsoRelativeNodePosition, NodeType?: Office.MsoDiagramNodeType): DiagramNode;
        readonly Application: any;
        readonly Children: DiagramNodeChildren;

        /** @param Office.MsoRelativeNodePosition [Pos=2] */
        CloneNode(CopyChildren: boolean, TargetNode: DiagramNode, Pos?: Office.MsoRelativeNodePosition): DiagramNode;
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

        /** @param boolean [SwapChildren=true] */
        SwapNode(TargetNode: DiagramNode, SwapChildren?: boolean): void;
        readonly TextShape: Shape;
        TransferChildren(ReceivingNode: DiagramNode): void;
    }

    class DiagramNodeChildren {
        private 'PowerPoint.DiagramNodeChildren_typekey': DiagramNodeChildren;
        private constructor();

        /**
         * @param any [Index=-1]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        AddNode(Index?: any, NodeType?: Office.MsoDiagramNodeType): DiagramNode;
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
        private 'PowerPoint.DiagramNodes_typekey': DiagramNodes;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): DiagramNode;
        readonly Parent: any;
        SelectAll(): void;
    }

    class DocumentWindow {
        private 'PowerPoint.DocumentWindow_typekey': DocumentWindow;
        private constructor();
        Activate(): void;
        readonly Active: Office.MsoTriState;
        readonly ActivePane: Pane;
        readonly Application: Application;
        BlackAndWhite: Office.MsoTriState;
        readonly Caption: string;
        Close(): void;
        ExpandSection(sectionIndex: number, Expand: boolean): void;
        FitToPage(): void;
        Height: number;
        IsSectionExpanded(sectionIndex: number): boolean;

        /**
         * @param number [Down=1]
         * @param number [Up=0]
         * @param number [ToRight=0]
         * @param number [ToLeft=0]
         */
        LargeScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): void;
        Left: number;
        NewWindow(): DocumentWindow;
        readonly Panes: Panes;
        readonly Parent: any;
        PointsToScreenPixelsX(Points: number): number;
        PointsToScreenPixelsY(Points: number): number;
        readonly Presentation: Presentation;
        RangeFromPoint(X: number, Y: number): any;

        /** @param Office.MsoTriState [Start=-1] */
        ScrollIntoView(Left: number, Top: number, Width: number, Height: number, Start?: Office.MsoTriState): void;
        readonly Selection: Selection;

        /**
         * @param number [Down=1]
         * @param number [Up=0]
         * @param number [ToRight=0]
         * @param number [ToLeft=0]
         */
        SmallScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): void;
        SplitHorizontal: number;
        SplitVertical: number;
        Top: number;
        readonly View: View;
        ViewType: PpViewType;
        Width: number;
        WindowState: PpWindowState;
    }

    class DocumentWindows {
        private 'PowerPoint.DocumentWindows_typekey': DocumentWindows;
        private constructor();
        readonly Application: Application;

        /** @param PowerPoint.PpArrangeStyle [arrangeStyle=1] */
        Arrange(arrangeStyle?: PpArrangeStyle): void;
        readonly Count: number;
        Item(Index: number): DocumentWindow;
        readonly Parent: any;
    }

    class DownBars {
        private 'PowerPoint.DownBars_typekey': DownBars;
        private constructor();
        readonly Application: Application;
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

    class DropLines {
        private 'PowerPoint.DropLines_typekey': DropLines;
        private constructor();
        readonly Application: Application;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class Effect {
        private 'PowerPoint.Effect_typekey': Effect;
        private constructor();
        readonly Application: Application;
        readonly Behaviors: AnimationBehaviors;
        Delete(): void;
        readonly DisplayName: string;
        readonly EffectInformation: EffectInformation;
        readonly EffectParameters: EffectParameters;
        EffectType: MsoAnimEffect;
        Exit: Office.MsoTriState;
        readonly Index: number;
        MoveAfter(Effect: Effect): void;
        MoveBefore(Effect: Effect): void;
        MoveTo(toPos: number): void;
        Paragraph: number;
        readonly Parent: any;
        Shape: Shape;
        readonly TextRangeLength: number;
        readonly TextRangeStart: number;
        readonly Timing: Timing;
    }

    class EffectInformation {
        private 'PowerPoint.EffectInformation_typekey': EffectInformation;
        private constructor();
        readonly AfterEffect: MsoAnimAfterEffect;
        readonly AnimateBackground: Office.MsoTriState;
        readonly AnimateTextInReverse: Office.MsoTriState;
        readonly Application: Application;
        readonly BuildByLevelEffect: MsoAnimateByLevel;
        readonly Dim: ColorFormat;
        readonly Parent: any;
        readonly PlaySettings: PlaySettings;
        readonly SoundEffect: SoundEffect;
        readonly TextUnitEffect: MsoAnimTextUnitEffect;
    }

    class EffectParameters {
        private 'PowerPoint.EffectParameters_typekey': EffectParameters;
        private constructor();
        Amount: number;
        readonly Application: Application;
        readonly Color2: ColorFormat;
        Direction: MsoAnimDirection;
        FontName: string;
        readonly Parent: any;
        Relative: Office.MsoTriState;
        Size: number;
    }

    class ExtraColors {
        private 'PowerPoint.ExtraColors_typekey': ExtraColors;
        private constructor();
        Add(Type: Office.MsoRGBType): void;
        readonly Application: Application;
        Clear(): void;
        readonly Count: number;
        Item(Index: number): Office.MsoRGBType;
        readonly Parent: any;
    }

    class FileConverter {
        private 'PowerPoint.FileConverter_typekey': FileConverter;
        private constructor();
        readonly Application: Application;
        readonly CanOpen: boolean;
        readonly CanSave: boolean;
        readonly ClassName: string;
        readonly Creator: FileConverters;
        readonly Extensions: string;
        readonly FormatName: string;
        readonly Name: string;
        readonly OpenFormat: number;
        readonly Parent: FileConverters;
        readonly Path: string;
        readonly SaveFormat: number;
    }

    class FileConverters {
        private 'PowerPoint.FileConverters_typekey': FileConverters;
        private constructor();
        readonly Count: number;
        Item(Index: any): FileConverter;
    }

    class FillFormat {
        private 'PowerPoint.FillFormat_typekey': FillFormat;
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

    class FilterEffect {
        private 'PowerPoint.FilterEffect_typekey': FilterEffect;
        private constructor();
        readonly Application: Application;
        readonly Parent: any;
        Reveal: Office.MsoTriState;
        Subtype: MsoAnimFilterEffectSubtype;
        Type: MsoAnimFilterEffectType;
    }

    class Floor {
        private 'PowerPoint.Floor_typekey': Floor;
        private constructor();
        readonly Application: Application;
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
        private 'PowerPoint.Font_typekey': Font;
        private constructor();
        readonly Application: Application;
        AutoRotateNumbers: Office.MsoTriState;
        BaselineOffset: number;
        Bold: Office.MsoTriState;
        readonly Color: ColorFormat;
        readonly Embeddable: Office.MsoTriState;
        readonly Embedded: Office.MsoTriState;
        Emboss: Office.MsoTriState;
        Italic: Office.MsoTriState;
        Name: string;
        NameAscii: string;
        NameComplexScript: string;
        NameFarEast: string;
        NameOther: string;
        readonly Parent: any;
        Shadow: Office.MsoTriState;
        Size: number;
        Subscript: Office.MsoTriState;
        Superscript: Office.MsoTriState;
        Underline: Office.MsoTriState;
    }

    class Fonts {
        private 'PowerPoint.Fonts_typekey': Fonts;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: any): Font;
        readonly Parent: any;
        Replace(Original: string, Replacement: string): void;
    }

    class FreeformBuilder {
        private 'PowerPoint.FreeformBuilder_typekey': FreeformBuilder;
        private constructor();

        /**
         * @param number [X2=0]
         * @param number [Y2=0]
         * @param number [X3=0]
         * @param number [Y3=0]
         */
        AddNodes(SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        readonly Application: any;
        ConvertToShape(): Shape;
        readonly Creator: number;
        readonly Parent: any;
    }

    class Global {
        private 'PowerPoint.Global_typekey': Global;
        private constructor();
        readonly ActivePresentation: Presentation;
        readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        readonly ActiveWindow: DocumentWindow;
        readonly AddIns: AddIns;
        readonly AnswerWizard: Office.AnswerWizard;
        readonly Application: Application;
        readonly Assistant: Office.Assistant;
        readonly CommandBars: Office.CommandBars;
        readonly Dialogs: any;
        readonly FileConverters: FileConverters;
        readonly IsSandboxed: boolean;
        readonly Presentations: Presentations;
        readonly ProtectedViewWindows: ProtectedViewWindows;
        readonly SlideShowWindows: SlideShowWindows;
        readonly Windows: DocumentWindows;
    }

    class GroupShapes {
        private 'PowerPoint.GroupShapes_typekey': GroupShapes;
        private constructor();
        readonly Application: any;
        readonly Count: number;
        readonly Creator: number;
        Item(Index: any): Shape;
        readonly Parent: any;
        Range(Index: any): ShapeRange;
    }

    class HeaderFooter {
        private 'PowerPoint.HeaderFooter_typekey': HeaderFooter;
        private constructor();
        readonly Application: Application;
        Format: PpDateTimeFormat;
        readonly Parent: any;
        Text: string;
        UseFormat: Office.MsoTriState;
        Visible: Office.MsoTriState;
    }

    class HeadersFooters {
        private 'PowerPoint.HeadersFooters_typekey': HeadersFooters;
        private constructor();
        readonly Application: Application;
        Clear(): void;
        readonly DateAndTime: HeaderFooter;
        DisplayOnTitleSlide: Office.MsoTriState;
        readonly Footer: HeaderFooter;
        readonly Header: HeaderFooter;
        readonly Parent: any;
        readonly SlideNumber: HeaderFooter;
    }

    class HiLoLines {
        private 'PowerPoint.HiLoLines_typekey': HiLoLines;
        private constructor();
        readonly Application: Application;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class Hyperlink {
        private 'PowerPoint.Hyperlink_typekey': Hyperlink;
        private constructor();
        Address: string;
        AddToFavorites(): void;
        readonly Application: Application;
        CreateNewDocument(FileName: string, EditNow: Office.MsoTriState, Overwrite: Office.MsoTriState): void;
        Delete(): void;
        EmailSubject: string;
        Follow(): void;
        readonly Parent: any;
        ScreenTip: string;
        ShowAndReturn: Office.MsoTriState;
        SubAddress: string;
        TextToDisplay: string;
        readonly Type: Office.MsoHyperlinkType;
    }

    class Hyperlinks {
        private 'PowerPoint.Hyperlinks_typekey': Hyperlinks;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): Hyperlink;
        readonly Parent: any;
    }

    class Interior {
        private 'PowerPoint.Interior_typekey': Interior;
        private constructor();
        readonly Application: Application;
        Color: any;
        ColorIndex: any;
        readonly Creator: number;
        InvertIfNegative: any;
        readonly Parent: any;
        Pattern: any;
        PatternColor: any;
        PatternColorIndex: any;
    }

    class Legend {
        private 'PowerPoint.Legend_typekey': Legend;
        private constructor();
        readonly Application: Application;
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

    class LineFormat {
        private 'PowerPoint.LineFormat_typekey': LineFormat;
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
        private 'PowerPoint.LinkFormat_typekey': LinkFormat;
        private constructor();
        readonly Application: Application;
        AutoUpdate: PpUpdateOption;
        BreakLink(): void;
        readonly Parent: any;
        SourceFullName: string;
        Update(): void;
    }

    class Master {
        private 'PowerPoint.Master_typekey': Master;
        private constructor();
        readonly Application: Application;
        ApplyTheme(themeName: string): void;
        readonly Background: ShapeRange;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        ColorScheme: ColorScheme;
        readonly CustomerData: CustomerData;
        readonly CustomLayouts: CustomLayouts;
        Delete(): void;
        readonly Design: Design;
        readonly HeadersFooters: HeadersFooters;
        readonly Height: number;
        readonly Hyperlinks: Hyperlinks;
        Name: string;
        readonly Parent: any;
        readonly Scripts: Office.Scripts;
        readonly Shapes: Shapes;
        readonly SlideShowTransition: SlideShowTransition;
        readonly TextStyles: TextStyles;
        readonly Theme: Office.OfficeTheme;
        readonly TimeLine: TimeLine;
        readonly Width: number;
    }

    class MediaBookmark {
        private 'PowerPoint.MediaBookmark_typekey': MediaBookmark;
        private constructor();
        Delete(): void;
        readonly Index: number;
        readonly Name: string;
        readonly Position: number;
    }

    class MediaBookmarks {
        private 'PowerPoint.MediaBookmarks_typekey': MediaBookmarks;
        private constructor();
        Add(Position: number, Name: string): MediaBookmark;
        readonly Count: number;
        Item(Index: number): MediaBookmark;
    }

    class MediaFormat {
        private 'PowerPoint.MediaFormat_typekey': MediaFormat;
        private constructor();
        readonly Application: Application;
        readonly AudioCompressionType: string;
        readonly AudioSamplingRate: number;
        EndPoint: number;
        FadeInDuration: number;
        FadeOutDuration: number;
        readonly IsEmbedded: boolean;
        readonly IsLinked: boolean;
        readonly Length: number;
        readonly MediaBookmarks: MediaBookmarks;
        Muted: boolean;
        readonly Parent: any;

        /**
         * @param boolean [Trim=false]
         * @param number [SampleHeight=768]
         * @param number [SampleWidth=1280]
         * @param number [VideoFrameRate=24]
         * @param number [AudioSamplingRate=48000]
         * @param number [VideoBitRate=7000000]
         */
        Resample(Trim?: boolean, SampleHeight?: number, SampleWidth?: number, VideoFrameRate?: number, AudioSamplingRate?: number, VideoBitRate?: number): void;

        /** @param PowerPoint.PpResampleMediaProfile [profile=2] */
        ResampleFromProfile(profile?: PpResampleMediaProfile): void;
        readonly ResamplingStatus: PpMediaTaskStatus;
        readonly SampleHeight: number;
        readonly SampleWidth: number;
        SetDisplayPicture(Position: number): void;
        SetDisplayPictureFromFile(FilePath: string): void;
        StartPoint: number;
        readonly VideoCompressionType: string;
        readonly VideoFrameRate: number;
        Volume: number;
    }

    class MotionEffect {
        private 'PowerPoint.MotionEffect_typekey': MotionEffect;
        private constructor();
        readonly Application: Application;
        ByX: number;
        ByY: number;
        FromX: number;
        FromY: number;
        readonly Parent: any;
        Path: string;
        ToX: number;
        ToY: number;
    }

    class MouseTracker {
        private 'PowerPoint.MouseTracker_typekey': MouseTracker;
        private constructor();
        EndTrack(X: number, Y: number): void;
        OnTrack(X: number, Y: number): void;
    }

    class NamedSlideShow {
        private 'PowerPoint.NamedSlideShow_typekey': NamedSlideShow;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Delete(): void;
        readonly Name: string;
        readonly Parent: any;
        readonly SlideIDs: any;
    }

    class NamedSlideShows {
        private 'PowerPoint.NamedSlideShows_typekey': NamedSlideShows;
        private constructor();
        Add(Name: string, safeArrayOfSlideIDs: any): NamedSlideShow;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: any): NamedSlideShow;
        readonly Parent: any;
    }

    class ObjectVerbs {
        private 'PowerPoint.ObjectVerbs_typekey': ObjectVerbs;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): string;
        readonly Parent: any;
    }

    class OLEControl {
        private 'PowerPoint.OLEControl_typekey': OLEControl;
        private constructor();
        AltHTML: string;
        Height: number;
        Left: number;
        Name: string;
        Top: number;
        Visible: boolean;
        Width: number;
        readonly ZOrderPosition: number;
    }

    class OLEFormat {
        private 'PowerPoint.OLEFormat_typekey': OLEFormat;
        private constructor();
        Activate(): void;
        readonly Application: Application;

        /** @param number [Index=0] */
        DoVerb(Index?: number): void;
        FollowColors: PpFollowColors;
        readonly Object: any;
        readonly ObjectVerbs: ObjectVerbs;
        readonly Parent: any;
        readonly ProgID: string;
    }

    class Options {
        private 'PowerPoint.Options_typekey': Options;
        private constructor();
        DisplayPasteOptions: Office.MsoTriState;
        DoNotPromptForConvert: Office.MsoTriState;
        ShowCoauthoringMergeChanges: boolean;
    }

    class PageSetup {
        private 'PowerPoint.PageSetup_typekey': PageSetup;
        private constructor();
        readonly Application: Application;
        FirstSlideNumber: number;
        NotesOrientation: Office.MsoOrientation;
        readonly Parent: any;
        SlideHeight: number;
        SlideOrientation: Office.MsoOrientation;
        SlideSize: PpSlideSizeType;
        SlideWidth: number;
    }

    class Pane {
        private 'PowerPoint.Pane_typekey': Pane;
        private constructor();
        Activate(): void;
        readonly Active: Office.MsoTriState;
        readonly Application: Application;
        readonly Parent: any;
        readonly ViewType: PpViewType;
    }

    class Panes {
        private 'PowerPoint.Panes_typekey': Panes;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): Pane;
        readonly Parent: any;
    }

    class ParagraphFormat {
        private 'PowerPoint.ParagraphFormat_typekey': ParagraphFormat;
        private constructor();
        Alignment: PpParagraphAlignment;
        readonly Application: Application;
        BaseLineAlignment: PpBaselineAlignment;
        readonly Bullet: BulletFormat;
        FarEastLineBreakControl: Office.MsoTriState;
        HangingPunctuation: Office.MsoTriState;
        LineRuleAfter: Office.MsoTriState;
        LineRuleBefore: Office.MsoTriState;
        LineRuleWithin: Office.MsoTriState;
        readonly Parent: any;
        SpaceAfter: number;
        SpaceBefore: number;
        SpaceWithin: number;
        TextDirection: PpDirection;
        WordWrap: Office.MsoTriState;
    }

    class PictureFormat {
        private 'PowerPoint.PictureFormat_typekey': PictureFormat;
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

    class PlaceholderFormat {
        private 'PowerPoint.PlaceholderFormat_typekey': PlaceholderFormat;
        private constructor();
        readonly Application: Application;
        readonly ContainedType: Office.MsoShapeType;
        Name: string;
        readonly Parent: any;
        readonly Type: PpPlaceholderType;
    }

    class Placeholders {
        private 'PowerPoint.Placeholders_typekey': Placeholders;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        FindByName(Index: any): Shape;
        Item(Index: number): Shape;
        readonly Parent: any;
    }

    class Player {
        private 'PowerPoint.Player_typekey': Player;
        private constructor();
        readonly Application: Application;
        CurrentPosition: number;
        GoToNextBookmark(): void;
        GoToPreviousBookmark(): void;
        readonly Parent: any;
        Pause(): void;
        Play(): void;
        readonly State: PpPlayerState;
        Stop(): void;
    }

    class PlaySettings {
        private 'PowerPoint.PlaySettings_typekey': PlaySettings;
        private constructor();
        ActionVerb: string;
        readonly Application: Application;
        HideWhileNotPlaying: Office.MsoTriState;
        LoopUntilStopped: Office.MsoTriState;
        readonly Parent: any;
        PauseAnimation: Office.MsoTriState;
        PlayOnEntry: Office.MsoTriState;
        RewindMovie: Office.MsoTriState;
        StopAfterSlides: number;
    }

    class PlotArea {
        private 'PowerPoint.PlotArea_typekey': PlotArea;
        private constructor();
        readonly Application: Application;
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

    class PowerRex {
        private 'PowerPoint.PowerRex_typekey': PowerRex;
        private constructor();
        OnAsfEncoderEvent(erorCode: any, bstrErrorDesc: any): void;
    }

    class Presentation {
        private 'PowerPoint.Presentation_typekey': Presentation;
        private constructor();
        AcceptAll(): void;

        /** @param string [FileName=''] */
        AddBaseline(FileName?: string): void;
        AddTitleMaster(): Master;
        AddToFavorites(): void;
        readonly Application: Application;
        ApplyTemplate(FileName: string): void;
        ApplyTheme(themeName: string): void;
        readonly Broadcast: Broadcast;
        readonly BuiltInDocumentProperties: any;
        CanCheckIn(): boolean;

        /** @param boolean [SaveChanges=true] */
        CheckIn(SaveChanges?: boolean, Comments?: any, MakePublic?: any): void;

        /** @param boolean [SaveChanges=true] */
        CheckInWithVersion(SaveChanges?: boolean, Comments?: any, MakePublic?: any, VersionType?: any): void;
        Close(): void;
        readonly Coauthoring: Coauthoring;
        readonly ColorSchemes: ColorSchemes;
        readonly CommandBars: Office.CommandBars;
        readonly Container: any;
        readonly ContentTypeProperties: Office.MetaProperties;
        Convert(): void;
        Convert2(FileName: string): void;

        /**
         * @param boolean [UseTimingsAndNarrations=true]
         * @param number [DefaultSlideDuration=5]
         * @param number [VertResolution=720]
         * @param number [FramesPerSecond=30]
         * @param number [Quality=85]
         */
        CreateVideo(FileName: string, UseTimingsAndNarrations?: boolean, DefaultSlideDuration?: number, VertResolution?: number, FramesPerSecond?: number, Quality?: number): void;
        readonly CreateVideoStatus: PpMediaTaskStatus;
        readonly CustomDocumentProperties: any;
        readonly CustomerData: CustomerData;
        readonly CustomXMLParts: Office.CustomXMLParts;
        DefaultLanguageID: Office.MsoLanguageID;
        readonly DefaultShape: Shape;
        DeleteSection(Index: number): void;
        readonly Designs: Designs;
        DisableSections(): void;
        DisplayComments: Office.MsoTriState;
        readonly DocumentInspectors: Office.DocumentInspectors;
        readonly DocumentLibraryVersions: Office.DocumentLibraryVersions;
        EncryptionProvider: string;
        EndReview(): void;
        EnsureAllMediaUpgraded(): void;
        EnvelopeVisible: Office.MsoTriState;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         */
        Export(Path: string, FilterName: string, ScaleWidth?: number, ScaleHeight?: number): void;

        /**
         * @param PowerPoint.PpFixedFormatIntent [Intent=1]
         * @param Office.MsoTriState [FrameSlides=0]
         * @param PowerPoint.PpPrintHandoutOrder [HandoutOrder=1]
         * @param PowerPoint.PpPrintOutputType [OutputType=1]
         * @param Office.MsoTriState [PrintHiddenSlides=0]
         * @param PowerPoint.PrintRange [PrintRange=0]
         * @param PowerPoint.PpPrintRangeType [RangeType=1]
         * @param string [SlideShowName='']
         * @param boolean [IncludeDocProperties=false]
         * @param boolean [KeepIRMSettings=true]
         * @param boolean [DocStructureTags=true]
         * @param boolean [BitmapMissingFonts=true]
         * @param boolean [UseISO19005_1=false]
         */
        ExportAsFixedFormat(
            Path: string, FixedFormatType: PpFixedFormatType, Intent?: PpFixedFormatIntent, FrameSlides?: Office.MsoTriState, HandoutOrder?: PpPrintHandoutOrder,
            OutputType?: PpPrintOutputType, PrintHiddenSlides?: Office.MsoTriState, PrintRange?: PrintRange, RangeType?: PpPrintRangeType, SlideShowName?: string,
            IncludeDocProperties?: boolean, KeepIRMSettings?: boolean, DocStructureTags?: boolean, BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, ExternalExporter?: any): void;
        readonly ExtraColors: ExtraColors;
        FarEastLineBreakLanguage: Office.MsoFarEastLineBreakLanguageID;
        FarEastLineBreakLevel: PpFarEastLineBreakLevel;
        Final: boolean;

        /**
         * @param string [SubAddress='']
         * @param boolean [NewWindow=false]
         * @param boolean [AddHistory=true]
         * @param string [ExtraInfo='']
         * @param Office.MsoExtraInfoMethod [Method=0]
         * @param string [HeaderInfo='']
         */
        FollowHyperlink(Address: string, SubAddress?: string, NewWindow?: boolean, AddHistory?: boolean, ExtraInfo?: string, Method?: Office.MsoExtraInfoMethod, HeaderInfo?: string): void;
        readonly Fonts: Fonts;
        readonly FullName: string;
        GetWorkflowTasks(): Office.WorkflowTasks;
        GetWorkflowTemplates(): Office.WorkflowTemplates;
        GridDistance: number;
        readonly HandoutMaster: Master;
        readonly HasHandoutMaster: boolean;
        readonly HasNotesMaster: boolean;
        readonly HasRevisionInfo: PpRevisionInfo;
        readonly HasSections: boolean;
        readonly HasTitleMaster: Office.MsoTriState;
        readonly HasVBProject: boolean;
        readonly HTMLProject: Office.HTMLProject;
        readonly InMergeMode: boolean;
        LayoutDirection: PpDirection;
        LockServerFile(): void;
        MakeIntoTemplate(IsDesignTemplate: Office.MsoTriState): void;
        Merge(Path: string): void;
        MergeWithBaseline(withPresentation: string, baselinePresentation: string): void;
        readonly Name: string;
        NewSectionAfter(Index: number, AfterSlide: boolean, sectionTitle: string, newSectionIndex: number): void;
        NewWindow(): DocumentWindow;
        NoLineBreakAfter: string;
        NoLineBreakBefore: string;
        readonly NotesMaster: Master;
        readonly PageSetup: PageSetup;
        readonly Parent: any;
        Password: string;
        readonly PasswordEncryptionAlgorithm: string;
        readonly PasswordEncryptionFileProperties: boolean;
        readonly PasswordEncryptionKeyLength: number;
        readonly PasswordEncryptionProvider: string;
        readonly Path: string;
        readonly Permission: Office.Permission;
        readonly PrintOptions: PrintOptions;

        /**
         * @param number [From=-1]
         * @param number [To=-1]
         * @param string [PrintToFile='']
         * @param number [Copies=0]
         * @param Office.MsoTriState [Collate=-99]
         */
        PrintOut(From?: number, To?: number, PrintToFile?: string, Copies?: number, Collate?: Office.MsoTriState): void;
        readonly PublishObjects: PublishObjects;

        /**
         * @param boolean [Overwrite=false]
         * @param boolean [UseSlideOrder=false]
         */
        PublishSlides(SlideLibraryUrl: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;
        readonly ReadOnly: Office.MsoTriState;
        RejectAll(): void;
        ReloadAs(cp: Office.MsoEncoding): void;
        RemoveBaseline(): void;
        RemoveDocumentInformation(Type: PpRemoveDocInfoType): void;
        RemovePersonalInformation: Office.MsoTriState;

        /** @param boolean [ShowMessage=true] */
        ReplyWithChanges(ShowMessage?: boolean): void;
        readonly Research: Research;
        Save(): void;

        /**
         * @param PowerPoint.PpSaveAsFileType [FileFormat=11]
         * @param Office.MsoTriState [EmbedTrueTypeFonts=-2]
         */
        SaveAs(FileName: string, FileFormat?: PpSaveAsFileType, EmbedTrueTypeFonts?: Office.MsoTriState): void;

        /**
         * @param PowerPoint.PpSaveAsFileType [FileFormat=11]
         * @param Office.MsoTriState [EmbedTrueTypeFonts=-2]
         */
        SaveCopyAs(FileName: string, FileFormat?: PpSaveAsFileType, EmbedTrueTypeFonts?: Office.MsoTriState): void;
        Saved: Office.MsoTriState;
        sblt(s: string): void;
        readonly SectionCount: number;
        readonly SectionProperties: SectionProperties;
        sectionTitle(Index: number): string;

        /**
         * @param string [Recipients='']
         * @param string [Subject='']
         * @param boolean [ShowMessage=false]
         */
        SendFaxOverInternet(Recipients?: string, Subject?: string, ShowMessage?: boolean): void;

        /**
         * @param string [Recipients='']
         * @param string [Subject='']
         * @param boolean [ShowMessage=true]
         */
        SendForReview(Recipients?: string, Subject?: string, ShowMessage?: boolean, IncludeAttachment?: any): void;
        readonly ServerPolicy: Office.ServerPolicy;
        SetPasswordEncryptionOptions(
            PasswordEncryptionProvider: string, PasswordEncryptionAlgorithm: string, PasswordEncryptionKeyLength: number, PasswordEncryptionFileProperties: boolean): void;
        SetUndoText(Text: string): void;
        readonly SharedWorkspace: Office.SharedWorkspace;
        readonly Signatures: Office.SignatureSet;
        readonly SlideMaster: Master;
        readonly Slides: Slides;
        readonly SlideShowSettings: SlideShowSettings;
        readonly SlideShowWindow: SlideShowWindow;
        SnapToGrid: Office.MsoTriState;
        readonly Sync: Office.Sync;
        readonly Tags: Tags;
        readonly TemplateName: string;
        readonly TitleMaster: Master;
        UpdateLinks(): void;
        readonly VBASigned: Office.MsoTriState;
        readonly VBProject: VBIDE.VBProject;
        readonly WebOptions: WebOptions;
        WebPagePreview(): void;
        readonly Windows: DocumentWindows;
        WritePassword: string;
    }

    class Presentations {
        private 'PowerPoint.Presentations_typekey': Presentations;
        private constructor();

        /** @param Office.MsoTriState [WithWindow=-1] */
        Add(WithWindow?: Office.MsoTriState): Presentation;
        readonly Application: Application;
        CanCheckOut(FileName: string): boolean;
        CheckOut(FileName: string): void;
        readonly Count: number;
        Item(Index: any): Presentation;

        /**
         * @param Office.MsoTriState [ReadOnly=0]
         * @param Office.MsoTriState [Untitled=0]
         * @param Office.MsoTriState [WithWindow=-1]
         */
        Open(FileName: string, ReadOnly?: Office.MsoTriState, Untitled?: Office.MsoTriState, WithWindow?: Office.MsoTriState): Presentation;

        /**
         * @param Office.MsoTriState [ReadOnly=0]
         * @param Office.MsoTriState [Untitled=0]
         * @param Office.MsoTriState [WithWindow=-1]
         * @param Office.MsoTriState [OpenAndRepair=0]
         */
        Open2007(FileName: string, ReadOnly?: Office.MsoTriState, Untitled?: Office.MsoTriState, WithWindow?: Office.MsoTriState, OpenAndRepair?: Office.MsoTriState): Presentation;

        /**
         * @param Office.MsoTriState [ReadOnly=0]
         * @param Office.MsoTriState [Untitled=0]
         * @param Office.MsoTriState [WithWindow=-1]
         */
        OpenOld(FileName: string, ReadOnly?: Office.MsoTriState, Untitled?: Office.MsoTriState, WithWindow?: Office.MsoTriState): Presentation;
        readonly Parent: any;
    }

    class PrintOptions {
        private 'PowerPoint.PrintOptions_typekey': PrintOptions;
        private constructor();
        ActivePrinter: string;
        readonly Application: Application;
        Collate: Office.MsoTriState;
        FitToPage: Office.MsoTriState;
        FrameSlides: Office.MsoTriState;
        HandoutOrder: PpPrintHandoutOrder;
        HighQuality: Office.MsoTriState;
        NumberOfCopies: number;
        OutputType: PpPrintOutputType;
        readonly Parent: any;
        PrintColorType: PpPrintColorType;
        PrintComments: Office.MsoTriState;
        PrintFontsAsGraphics: Office.MsoTriState;
        PrintHiddenSlides: Office.MsoTriState;
        PrintInBackground: Office.MsoTriState;
        readonly Ranges: PrintRanges;
        RangeType: PpPrintRangeType;
        sectionIndex: number;
        SlideShowName: string;
    }

    class PrintRange {
        private 'PowerPoint.PrintRange_typekey': PrintRange;
        private constructor();
        readonly Application: Application;
        Delete(): void;
        readonly End: number;
        readonly Parent: any;
        readonly Start: number;
    }

    class PrintRanges {
        private 'PowerPoint.PrintRanges_typekey': PrintRanges;
        private constructor();
        Add(Start: number, End: number): PrintRange;
        readonly Application: Application;
        ClearAll(): void;
        readonly Count: number;
        Item(Index: number): PrintRange;
        readonly Parent: any;
    }

    class PropertyEffect {
        private 'PowerPoint.PropertyEffect_typekey': PropertyEffect;
        private constructor();
        readonly Application: Application;
        From: any;
        readonly Parent: any;
        readonly Points: AnimationPoints;
        Property: MsoAnimProperty;
        To: any;
    }

    class ProtectedViewWindow {
        private 'PowerPoint.ProtectedViewWindow_typekey': ProtectedViewWindow;
        private constructor();
        Activate(): void;
        readonly Active: Office.MsoTriState;
        readonly Application: Application;
        readonly Caption: string;
        Close(): void;

        /** @param string [ModifyPassword=''] */
        Edit(ModifyPassword?: string): Presentation;
        Height: number;
        Left: number;
        readonly Parent: any;
        readonly Presentation: Presentation;
        readonly SourceName: string;
        readonly SourcePath: string;
        Top: number;
        Width: number;
        WindowState: PpWindowState;
    }

    class ProtectedViewWindows {
        private 'PowerPoint.ProtectedViewWindows_typekey': ProtectedViewWindows;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): ProtectedViewWindow;

        /**
         * @param string [ReadPassword='']
         * @param Office.MsoTriState [OpenAndRepair=0]
         */
        Open(FileName: string, ReadPassword?: string, OpenAndRepair?: Office.MsoTriState): ProtectedViewWindow;
        readonly Parent: any;
    }

    class PublishObject {
        private 'PowerPoint.PublishObject_typekey': PublishObject;
        private constructor();
        readonly Application: Application;
        FileName: string;
        HTMLVersion: PpHTMLVersion;
        readonly Parent: any;
        Publish(): void;
        RangeEnd: number;
        RangeStart: number;
        SlideShowName: string;
        SourceType: PpPublishSourceType;
        SpeakerNotes: Office.MsoTriState;
    }

    class PublishObjects {
        private 'PowerPoint.PublishObjects_typekey': PublishObjects;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): PublishObject;
        readonly Parent: any;
    }

    class ResampleMediaTask {
        private 'PowerPoint.ResampleMediaTask_typekey': ResampleMediaTask;
        private constructor();
        readonly AudioCompressionType: string;
        readonly AudioSamplingRate: number;
        readonly ContainerType: string;
        readonly IsEmbedded: boolean;
        readonly IsLinked: boolean;
        readonly profile: PpResampleMediaProfile;
        readonly SampleHeight: number;
        readonly SampleWidth: number;
        readonly Shape: Shape;
        readonly VideoCompressionType: string;
        readonly VideoFrameRate: number;
    }

    class ResampleMediaTasks {
        private 'PowerPoint.ResampleMediaTasks_typekey': ResampleMediaTasks;
        private constructor();
        Cancel(): void;
        readonly Count: number;
        Item(Index: number): ResampleMediaTask;
        Pause(): void;
        readonly PercentComplete: number;
        Resume(): void;
    }

    class Research {
        private 'PowerPoint.Research_typekey': Research;
        private constructor();
        readonly Application: Application;
        IsResearchService(ServiceID: string): boolean;
        readonly Parent: any;

        /**
         * @param boolean [UseSelection=false]
         * @param boolean [LaunchQuery=true]
         */
        Query(ServiceID: string, QueryString: any, QueryLanguage: any, UseSelection?: boolean, LaunchQuery?: boolean): void;
        SetLanguagePair(Language1: any, Language2: any): void;
    }

    class RGBColor {
        private 'PowerPoint.RGBColor_typekey': RGBColor;
        private constructor();
        readonly Application: Application;
        readonly Parent: any;
        RGB: Office.MsoRGBType;
    }

    class RotationEffect {
        private 'PowerPoint.RotationEffect_typekey': RotationEffect;
        private constructor();
        readonly Application: Application;
        By: number;
        From: number;
        readonly Parent: any;
        To: number;
    }

    class Row {
        private 'PowerPoint.Row_typekey': Row;
        private constructor();
        readonly Application: Application;
        readonly Cells: CellRange;
        Delete(): void;
        Height: number;
        readonly Parent: any;
        Select(): void;
    }

    class Rows {
        private 'PowerPoint.Rows_typekey': Rows;
        private constructor();

        /** @param number [BeforeRow=-1] */
        Add(BeforeRow?: number): Row;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): Row;
        readonly Parent: any;
    }

    class Ruler {
        private 'PowerPoint.Ruler_typekey': Ruler;
        private constructor();
        readonly Application: Application;
        readonly Levels: RulerLevels;
        readonly Parent: any;
        readonly TabStops: TabStops;
    }

    class RulerLevel {
        private 'PowerPoint.RulerLevel_typekey': RulerLevel;
        private constructor();
        readonly Application: Application;
        FirstMargin: number;
        LeftMargin: number;
        readonly Parent: any;
    }

    class RulerLevels {
        private 'PowerPoint.RulerLevels_typekey': RulerLevels;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): RulerLevel;
        readonly Parent: any;
    }

    class ScaleEffect {
        private 'PowerPoint.ScaleEffect_typekey': ScaleEffect;
        private constructor();
        readonly Application: Application;
        ByX: number;
        ByY: number;
        FromX: number;
        FromY: number;
        readonly Parent: any;
        ToX: number;
        ToY: number;
    }

    class SectionProperties {
        private 'PowerPoint.SectionProperties_typekey': SectionProperties;
        private constructor();
        AddBeforeSlide(SlideIndex: number, sectionName: string): number;
        AddSection(sectionIndex: number, sectionName?: any): number;
        readonly Application: Application;
        readonly Count: number;
        Delete(sectionIndex: number, deleteSlides: boolean): void;
        FirstSlide(sectionIndex: number): number;
        Move(sectionIndex: number, toPos: number): void;
        Name(sectionIndex: number): string;
        readonly Parent: any;
        Rename(sectionIndex: number, sectionName: string): void;
        SectionID(sectionIndex: number): string;
        SlidesCount(sectionIndex: number): number;
    }

    class Selection {
        private 'PowerPoint.Selection_typekey': Selection;
        private constructor();
        readonly Application: Application;
        readonly ChildShapeRange: ShapeRange;
        Copy(): void;
        Cut(): void;
        Delete(): void;
        readonly HasChildShapeRange: boolean;
        readonly Parent: any;
        readonly ShapeRange: ShapeRange;
        readonly SlideRange: SlideRange;
        readonly TextRange: TextRange;
        readonly TextRange2: Office.TextRange2;
        readonly Type: PpSelectionType;
        Unselect(): void;
    }

    class Sequence {
        private 'PowerPoint.Sequence_typekey': Sequence;
        private constructor();

        /**
         * @param PowerPoint.MsoAnimateByLevel [Level=0]
         * @param PowerPoint.MsoAnimTriggerType [trigger=1]
         * @param number [Index=-1]
         */
        AddEffect(Shape: Shape, effectId: MsoAnimEffect, Level?: MsoAnimateByLevel, trigger?: MsoAnimTriggerType, Index?: number): Effect;

        /**
         * @param string [bookmark='']
         * @param PowerPoint.MsoAnimateByLevel [Level=0]
         */
        AddTriggerEffect(pShape: Shape, effectId: MsoAnimEffect, trigger: MsoAnimTriggerType, pTriggerShape: Shape, bookmark?: string, Level?: MsoAnimateByLevel): Effect;
        readonly Application: Application;

        /** @param number [Index=-1] */
        Clone(Effect: Effect, Index?: number): Effect;

        /**
         * @param Office.MsoRGBType [DimColor=0]
         * @param PowerPoint.PpColorSchemeIndex [DimSchemeColor=0]
         */
        ConvertToAfterEffect(Effect: Effect, After: MsoAnimAfterEffect, DimColor?: Office.MsoRGBType, DimSchemeColor?: PpColorSchemeIndex): Effect;
        ConvertToAnimateBackground(Effect: Effect, AnimateBackground: Office.MsoTriState): Effect;
        ConvertToAnimateInReverse(Effect: Effect, animateInReverse: Office.MsoTriState): Effect;
        ConvertToBuildLevel(Effect: Effect, Level: MsoAnimateByLevel): Effect;
        ConvertToTextUnitEffect(Effect: Effect, unitEffect: MsoAnimTextUnitEffect): Effect;
        readonly Count: number;
        FindFirstAnimationFor(Shape: Shape): Effect;
        FindFirstAnimationForClick(click: number): Effect;
        Item(Index: number): Effect;
        readonly Parent: any;
    }

    class Sequences {
        private 'PowerPoint.Sequences_typekey': Sequences;
        private constructor();

        /** @param number [Index=-1] */
        Add(Index?: number): Sequence;
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): Sequence;
        readonly Parent: any;
    }

    class SeriesLines {
        private 'PowerPoint.SeriesLines_typekey': SeriesLines;
        private constructor();
        readonly Application: Application;
        readonly Border: ChartBorder;
        readonly Creator: number;
        Delete(): any;
        readonly Format: ChartFormat;
        readonly Name: string;
        readonly Parent: any;
        Select(): any;
    }

    class SetEffect {
        private 'PowerPoint.SetEffect_typekey': SetEffect;
        private constructor();
        readonly Application: Application;
        readonly Parent: any;
        Property: MsoAnimProperty;
        To: any;
    }

    class ShadowFormat {
        private 'PowerPoint.ShadowFormat_typekey': ShadowFormat;
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
        private 'PowerPoint.Shape_typekey': Shape;
        private constructor();
        readonly ActionSettings: ActionSettings;
        readonly Adjustments: Adjustments;
        AlternativeText: string;
        readonly AnimationSettings: AnimationSettings;
        readonly Application: any;
        Apply(): void;
        ApplyAnimation(): void;
        AutoShapeType: Office.MsoAutoShapeType;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        BlackWhiteMode: Office.MsoBlackWhiteMode;
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
        ConvertTextToSmartArt(Layout: Office.SmartArtLayout): void;
        Copy(): void;
        readonly Creator: number;
        readonly CustomerData: CustomerData;
        Cut(): void;
        Delete(): void;
        readonly Diagram: Diagram;
        readonly DiagramNode: DiagramNode;
        Duplicate(): ShapeRange;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         * @param PowerPoint.PpExportMode [ExportMode=1]
         */
        Export(PathName: string, Filter: PpShapeFormat, ScaleWidth?: number, ScaleHeight?: number, ExportMode?: PpExportMode): void;
        readonly Fill: FillFormat;
        Flip(FlipCmd: Office.MsoFlipCmd): void;
        readonly Glow: Office.GlowFormat;
        readonly GroupItems: GroupShapes;
        readonly HasChart: Office.MsoTriState;
        readonly HasDiagram: Office.MsoTriState;
        readonly HasDiagramNode: Office.MsoTriState;
        readonly HasSmartArt: Office.MsoTriState;
        readonly HasTable: Office.MsoTriState;
        readonly HasTextFrame: Office.MsoTriState;
        Height: number;
        readonly HorizontalFlip: Office.MsoTriState;
        readonly Id: number;
        IncrementLeft(Increment: number): void;
        IncrementRotation(Increment: number): void;
        IncrementTop(Increment: number): void;
        Left: number;
        readonly Line: LineFormat;
        readonly LinkFormat: LinkFormat;
        LockAspectRatio: Office.MsoTriState;
        readonly MediaFormat: MediaFormat;
        readonly MediaType: PpMediaType;
        Name: string;
        readonly Nodes: ShapeNodes;
        readonly OLEFormat: OLEFormat;
        readonly Parent: any;
        readonly ParentGroup: Shape;
        PickUp(): void;
        PickupAnimation(): void;
        readonly PictureFormat: PictureFormat;
        readonly PlaceholderFormat: PlaceholderFormat;
        readonly Reflection: Office.ReflectionFormat;
        RerouteConnections(): void;
        Rotation: number;
        readonly RTF: string;

        /** @param Office.MsoScaleFrom [fScale=0] */
        ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, fScale?: Office.MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [fScale=0] */
        ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, fScale?: Office.MsoScaleFrom): void;
        readonly Script: Office.Script;

        /** @param Office.MsoTriState [Replace=-1] */
        Select(Replace?: Office.MsoTriState): void;
        SetShapesDefaultProperties(): void;
        readonly Shadow: ShadowFormat;
        ShapeStyle: Office.MsoShapeStyleIndex;
        readonly SmartArt: Office.SmartArt;
        readonly SoftEdge: Office.SoftEdgeFormat;
        readonly SoundFormat: SoundFormat;
        readonly Table: Table;
        readonly Tags: Tags;
        readonly TextEffect: TextEffectFormat;
        readonly TextFrame: TextFrame;
        readonly TextFrame2: TextFrame2;
        readonly ThreeD: ThreeDFormat;
        Title: string;
        Top: number;
        readonly Type: Office.MsoShapeType;
        Ungroup(): ShapeRange;
        UpgradeMedia(): void;
        readonly VerticalFlip: Office.MsoTriState;
        readonly Vertices: any;
        Visible: Office.MsoTriState;
        Width: number;
        ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        readonly ZOrderPosition: number;
    }

    class ShapeNode {
        private 'PowerPoint.ShapeNode_typekey': ShapeNode;
        private constructor();
        readonly Application: any;
        readonly Creator: number;
        readonly EditingType: Office.MsoEditingType;
        readonly Parent: any;
        readonly Points: any;
        readonly SegmentType: Office.MsoSegmentType;
    }

    class ShapeNodes {
        private 'PowerPoint.ShapeNodes_typekey': ShapeNodes;
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
        Insert(Index: number, SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        Item(Index: any): ShapeNode;
        readonly Parent: any;
        SetEditingType(Index: number, EditingType: Office.MsoEditingType): void;
        SetPosition(Index: number, X1: number, Y1: number): void;
        SetSegmentType(Index: number, SegmentType: Office.MsoSegmentType): void;
    }

    class ShapeRange {
        private 'PowerPoint.ShapeRange_typekey': ShapeRange;
        private constructor();
        readonly ActionSettings: ActionSettings;
        readonly Adjustments: Adjustments;
        Align(AlignCmd: Office.MsoAlignCmd, RelativeTo: Office.MsoTriState): void;
        AlternativeText: string;
        readonly AnimationSettings: AnimationSettings;
        readonly Application: any;
        Apply(): void;
        ApplyAnimation(): void;
        AutoShapeType: Office.MsoAutoShapeType;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        BlackWhiteMode: Office.MsoBlackWhiteMode;
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
        ConvertTextToSmartArt(Layout: Office.SmartArtLayout): void;
        Copy(): void;
        readonly Count: number;
        readonly Creator: number;
        readonly CustomerData: CustomerData;
        Cut(): void;
        Delete(): void;
        readonly Diagram: Diagram;
        readonly DiagramNode: DiagramNode;
        Distribute(DistributeCmd: Office.MsoDistributeCmd, RelativeTo: Office.MsoTriState): void;
        Duplicate(): ShapeRange;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         * @param PowerPoint.PpExportMode [ExportMode=1]
         */
        Export(PathName: string, Filter: PpShapeFormat, ScaleWidth?: number, ScaleHeight?: number, ExportMode?: PpExportMode): void;
        readonly Fill: FillFormat;
        Flip(FlipCmd: Office.MsoFlipCmd): void;
        readonly Glow: Office.GlowFormat;
        Group(): Shape;
        readonly GroupItems: GroupShapes;
        readonly HasChart: Office.MsoTriState;
        readonly HasDiagram: Office.MsoTriState;
        readonly HasDiagramNode: Office.MsoTriState;
        readonly HasSmartArt: Office.MsoTriState;
        readonly HasTable: Office.MsoTriState;
        readonly HasTextFrame: Office.MsoTriState;
        Height: number;
        readonly HorizontalFlip: Office.MsoTriState;
        readonly Id: number;
        IncrementLeft(Increment: number): void;
        IncrementRotation(Increment: number): void;
        IncrementTop(Increment: number): void;
        Item(Index: any): Shape;
        Left: number;
        readonly Line: LineFormat;
        readonly LinkFormat: LinkFormat;
        LockAspectRatio: Office.MsoTriState;
        readonly MediaFormat: MediaFormat;
        readonly MediaType: PpMediaType;
        Name: string;
        readonly Nodes: ShapeNodes;
        readonly OLEFormat: OLEFormat;
        readonly Parent: any;
        readonly ParentGroup: Shape;
        PickUp(): void;
        PickupAnimation(): void;
        readonly PictureFormat: PictureFormat;
        readonly PlaceholderFormat: PlaceholderFormat;
        readonly Reflection: Office.ReflectionFormat;
        Regroup(): Shape;
        RerouteConnections(): void;
        Rotation: number;
        readonly RTF: string;

        /** @param Office.MsoScaleFrom [fScale=0] */
        ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, fScale?: Office.MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [fScale=0] */
        ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, fScale?: Office.MsoScaleFrom): void;
        readonly Script: Office.Script;

        /** @param Office.MsoTriState [Replace=-1] */
        Select(Replace?: Office.MsoTriState): void;
        SetShapesDefaultProperties(): void;
        readonly Shadow: ShadowFormat;
        ShapeStyle: Office.MsoShapeStyleIndex;
        readonly SmartArt: Office.SmartArt;
        readonly SoftEdge: Office.SoftEdgeFormat;
        readonly SoundFormat: SoundFormat;
        readonly Table: Table;
        readonly Tags: Tags;
        readonly TextEffect: TextEffectFormat;
        readonly TextFrame: TextFrame;
        readonly TextFrame2: TextFrame2;
        readonly ThreeD: ThreeDFormat;
        Title: string;
        Top: number;
        readonly Type: Office.MsoShapeType;
        Ungroup(): ShapeRange;
        UpgradeMedia(): void;
        readonly VerticalFlip: Office.MsoTriState;
        readonly Vertices: any;
        Visible: Office.MsoTriState;
        Width: number;
        ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        readonly ZOrderPosition: number;
    }

    class Shapes {
        private 'PowerPoint.Shapes_typekey': Shapes;
        private constructor();
        AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddCanvas(Left: number, Top: number, Width: number, Height: number): Shape;

        /**
         * @param Office.XlChartType [Type=-1]
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddChart(Type?: Office.XlChartType, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=1.25]
         * @param number [Top=1.25]
         * @param number [Width=145.25]
         * @param number [Height=145.25]
         */
        AddComment(Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        AddCurve(SafeArrayOfPoints: any): Shape;
        AddDiagram(Type: Office.MsoDiagramType, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;

        /**
         * @param number [Left=0]
         * @param number [Top=0]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddMediaObject(FileName: string, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param Office.MsoTriState [LinkToFile=0]
         * @param Office.MsoTriState [SaveWithDocument=-1]
         * @param number [Left=0]
         * @param number [Top=0]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddMediaObject2(FileName: string, LinkToFile?: Office.MsoTriState, SaveWithDocument?: Office.MsoTriState, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=0]
         * @param number [Top=0]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddMediaObjectFromEmbedTag(EmbedTag: string, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=0]
         * @param number [Top=0]
         * @param number [Width=-1]
         * @param number [Height=-1]
         * @param string [ClassName='']
         * @param string [FileName='']
         * @param Office.MsoTriState [DisplayAsIcon=0]
         * @param string [IconFileName='']
         * @param number [IconIndex=0]
         * @param string [IconLabel='']
         * @param Office.MsoTriState [Link=0]
         */
        AddOLEObject(
            Left?: number, Top?: number, Width?: number, Height?: number, ClassName?: string, FileName?: string, DisplayAsIcon?: Office.MsoTriState, IconFileName?: string,
            IconIndex?: number, IconLabel?: string, Link?: Office.MsoTriState): Shape;

        /**
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddPicture(FileName: string, LinkToFile: Office.MsoTriState, SaveWithDocument: Office.MsoTriState, Left: number, Top: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddPlaceholder(Type: PpPlaceholderType, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        AddPolyline(SafeArrayOfPoints: any): Shape;
        AddShape(Type: Office.MsoAutoShapeType, Left: number, Top: number, Width: number, Height: number): Shape;

        /**
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddSmartArt(Layout: Office.SmartArtLayout, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        AddTable(NumRows: number, NumColumns: number, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number): Shape;
        AddTitle(): Shape;
        readonly Application: any;
        BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        readonly Count: number;
        readonly Creator: number;
        readonly HasTitle: Office.MsoTriState;
        Item(Index: any): Shape;
        readonly Parent: any;
        Paste(): ShapeRange;

        /**
         * @param PowerPoint.PpPasteDataType [DataType=0]
         * @param Office.MsoTriState [DisplayAsIcon=0]
         * @param string [IconFileName='']
         * @param number [IconIndex=0]
         * @param string [IconLabel='']
         * @param Office.MsoTriState [Link=0]
         */
        PasteSpecial(DataType?: PpPasteDataType, DisplayAsIcon?: Office.MsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Office.MsoTriState): ShapeRange;
        readonly Placeholders: Placeholders;
        Range(Index?: any): ShapeRange;
        SelectAll(): void;
        readonly Title: Shape;
    }

    class Slide {
        private 'PowerPoint.Slide_typekey': Slide;
        private constructor();
        readonly Application: Application;
        ApplyTemplate(FileName: string): void;
        ApplyTheme(themeName: string): void;
        ApplyThemeColorScheme(themeColorSchemeName: string): void;
        readonly Background: ShapeRange;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        ColorScheme: ColorScheme;
        readonly Comments: Comments;
        Copy(): void;
        readonly CustomerData: CustomerData;
        CustomLayout: CustomLayout;
        Cut(): void;
        Delete(): void;
        Design: Design;
        DisplayMasterShapes: Office.MsoTriState;
        Duplicate(): SlideRange;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         */
        Export(FileName: string, FilterName: string, ScaleWidth?: number, ScaleHeight?: number): void;
        FollowMasterBackground: Office.MsoTriState;
        readonly HasNotesPage: Office.MsoTriState;
        readonly HeadersFooters: HeadersFooters;
        readonly Hyperlinks: Hyperlinks;
        Layout: PpSlideLayout;
        readonly Master: Master;
        MoveTo(toPos: number): void;
        MoveToSectionStart(toSection: number): void;
        Name: string;
        readonly NotesPage: SlideRange;
        readonly Parent: any;
        readonly PrintSteps: number;

        /**
         * @param boolean [Overwrite=false]
         * @param boolean [UseSlideOrder=false]
         */
        PublishSlides(SlideLibraryUrl: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;
        readonly Scripts: Office.Scripts;
        readonly sectionIndex: number;
        readonly SectionNumber: number;
        Select(): void;
        readonly Shapes: Shapes;
        readonly SlideID: number;
        readonly SlideIndex: number;
        readonly SlideNumber: number;
        readonly SlideShowTransition: SlideShowTransition;
        readonly Tags: Tags;
        readonly ThemeColorScheme: Office.ThemeColorScheme;
        readonly TimeLine: TimeLine;
    }

    class SlideRange {
        private 'PowerPoint.SlideRange_typekey': SlideRange;
        private constructor();
        readonly Application: Application;
        ApplyTemplate(FileName: string): void;
        ApplyTheme(themeName: string): void;
        ApplyThemeColorScheme(themeColorSchemeName: string): void;
        readonly Background: ShapeRange;
        BackgroundStyle: Office.MsoBackgroundStyleIndex;
        ColorScheme: ColorScheme;
        readonly Comments: Comments;
        Copy(): void;
        readonly Count: number;
        readonly CustomerData: CustomerData;
        CustomLayout: CustomLayout;
        Cut(): void;
        Delete(): void;
        Design: Design;
        DisplayMasterShapes: Office.MsoTriState;
        Duplicate(): SlideRange;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         */
        Export(FileName: string, FilterName: string, ScaleWidth?: number, ScaleHeight?: number): void;
        FollowMasterBackground: Office.MsoTriState;
        readonly HasNotesPage: Office.MsoTriState;
        readonly HeadersFooters: HeadersFooters;
        readonly Hyperlinks: Hyperlinks;
        Item(Index: any): Slide;
        Layout: PpSlideLayout;
        readonly Master: Master;
        MoveTo(toPos: number): void;
        MoveToSectionStart(toSection: number): void;
        Name: string;
        readonly NotesPage: SlideRange;
        readonly Parent: any;
        readonly PrintSteps: number;

        /**
         * @param boolean [Overwrite=false]
         * @param boolean [UseSlideOrder=false]
         */
        PublishSlides(SlideLibraryUrl: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;
        readonly Scripts: Office.Scripts;
        readonly sectionIndex: number;
        readonly SectionNumber: number;
        Select(): void;
        readonly Shapes: Shapes;
        readonly SlideID: number;
        readonly SlideIndex: number;
        readonly SlideNumber: number;
        readonly SlideShowTransition: SlideShowTransition;
        readonly Tags: Tags;
        readonly ThemeColorScheme: Office.ThemeColorScheme;
        readonly TimeLine: TimeLine;
    }

    class Slides {
        private 'PowerPoint.Slides_typekey': Slides;
        private constructor();
        Add(Index: number, Layout: PpSlideLayout): Slide;
        AddSlide(Index: number, pCustomLayout: CustomLayout): Slide;
        readonly Application: Application;
        readonly Count: number;
        FindBySlideID(SlideID: number): Slide;

        /**
         * @param number [SlideStart=1]
         * @param number [SlideEnd=-1]
         */
        InsertFromFile(FileName: string, Index: number, SlideStart?: number, SlideEnd?: number): number;
        Item(Index: any): Slide;
        readonly Parent: any;

        /** @param number [Index=-1] */
        Paste(Index?: number): SlideRange;
        Range(Index?: any): SlideRange;
    }

    class SlideShowSettings {
        private 'PowerPoint.SlideShowSettings_typekey': SlideShowSettings;
        private constructor();
        AdvanceMode: PpSlideShowAdvanceMode;
        readonly Application: Application;
        EndingSlide: number;
        LoopUntilStopped: Office.MsoTriState;
        readonly NamedSlideShows: NamedSlideShows;
        readonly Parent: any;
        readonly PointerColor: ColorFormat;
        RangeType: PpSlideShowRangeType;
        Run(): SlideShowWindow;
        ShowMediaControls: Office.MsoTriState;
        ShowPresenterView: Office.MsoTriState;
        ShowScrollbar: Office.MsoTriState;
        ShowType: PpSlideShowType;
        ShowWithAnimation: Office.MsoTriState;
        ShowWithNarration: Office.MsoTriState;
        SlideShowName: string;
        StartingSlide: number;
    }

    class SlideShowTransition {
        private 'PowerPoint.SlideShowTransition_typekey': SlideShowTransition;
        private constructor();
        AdvanceOnClick: Office.MsoTriState;
        AdvanceOnTime: Office.MsoTriState;
        AdvanceTime: number;
        readonly Application: Application;
        Duration: number;
        EntryEffect: PpEntryEffect;
        Hidden: Office.MsoTriState;
        LoopSoundUntilNext: Office.MsoTriState;
        readonly Parent: any;
        readonly SoundEffect: SoundEffect;
        Speed: PpTransitionSpeed;
    }

    class SlideShowView {
        private 'PowerPoint.SlideShowView_typekey': SlideShowView;
        private constructor();
        AcceleratorsEnabled: Office.MsoTriState;
        readonly AdvanceMode: PpSlideShowAdvanceMode;
        readonly Application: Application;
        readonly CurrentShowPosition: number;
        DrawLine(BeginX: number, BeginY: number, EndX: number, EndY: number): void;
        EndNamedShow(): void;
        EraseDrawing(): void;
        Exit(): void;
        First(): void;
        FirstAnimationIsAutomatic(): boolean;
        GetClickCount(): number;
        GetClickIndex(): number;
        GotoClick(Index: number): void;
        GotoNamedShow(SlideShowName: string): void;

        /** @param Office.MsoTriState [ResetSlide=-1] */
        GotoSlide(Index: number, ResetSlide?: Office.MsoTriState): void;
        InstallTracker(pTracker: MouseTracker, Presenter: Office.MsoTriState): void;
        readonly IsNamedShow: Office.MsoTriState;
        Last(): void;
        readonly LastSlideViewed: Slide;
        readonly MediaControlsHeight: number;
        readonly MediaControlsLeft: number;
        readonly MediaControlsTop: number;
        readonly MediaControlsVisible: Office.MsoTriState;
        readonly MediaControlsWidth: number;
        Next(): void;
        readonly Parent: any;
        Player(ShapeId: any): Player;
        readonly PointerColor: ColorFormat;
        PointerType: PpSlideShowPointerType;
        readonly PresentationElapsedTime: number;
        Previous(): void;
        ResetSlideTime(): void;
        readonly Slide: Slide;
        SlideElapsedTime: number;
        readonly SlideShowName: string;
        State: PpSlideShowState;
        readonly Zoom: number;
    }

    class SlideShowWindow {
        private 'PowerPoint.SlideShowWindow_typekey': SlideShowWindow;
        private constructor();
        Activate(): void;
        readonly Active: Office.MsoTriState;
        readonly Application: Application;
        Height: number;
        readonly IsFullScreen: Office.MsoTriState;
        Left: number;
        readonly Parent: any;
        readonly Presentation: Presentation;
        Top: number;
        readonly View: SlideShowView;
        Width: number;
    }

    class SlideShowWindows {
        private 'PowerPoint.SlideShowWindows_typekey': SlideShowWindows;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Index: number): SlideShowWindow;
        readonly Parent: any;
    }

    class SoundEffect {
        private 'PowerPoint.SoundEffect_typekey': SoundEffect;
        private constructor();
        readonly Application: Application;
        ImportFromFile(FileName: string): void;
        Name: string;
        readonly Parent: any;
        Play(): void;
        Type: PpSoundEffectType;
    }

    class SoundFormat {
        private 'PowerPoint.SoundFormat_typekey': SoundFormat;
        private constructor();
        Export(FileName: string): PpSoundFormatType;
        Import(FileName: string): void;
        Play(): void;
        readonly SourceFullName: string;
        readonly Type: PpSoundFormatType;
    }

    class Table {
        private 'PowerPoint.Table_typekey': Table;
        private constructor();
        AlternativeText: string;
        readonly Application: Application;

        /**
         * @param string [StyleID='']
         * @param boolean [SaveFormatting=false]
         */
        ApplyStyle(StyleID?: string, SaveFormatting?: boolean): void;
        readonly Background: TableBackground;
        Cell(Row: number, Column: number): Cell;
        readonly Columns: Columns;
        FirstCol: boolean;
        FirstRow: boolean;
        HorizBanding: boolean;
        LastCol: boolean;
        LastRow: boolean;
        MergeBorders(): void;
        readonly Parent: any;
        readonly Rows: Rows;
        ScaleProportionally(scale: number): void;
        readonly Style: TableStyle;
        TableDirection: PpDirection;
        Title: string;
        VertBanding: boolean;
    }

    class TableBackground {
        private 'PowerPoint.TableBackground_typekey': TableBackground;
        private constructor();
        readonly Fill: FillFormat;
        readonly Picture: PictureFormat;
        readonly Reflection: Office.ReflectionFormat;
        readonly Shadow: ShadowFormat;
    }

    class TableStyle {
        private 'PowerPoint.TableStyle_typekey': TableStyle;
        private constructor();
        readonly Id: string;
        readonly Name: string;
    }

    class TabStop {
        private 'PowerPoint.TabStop_typekey': TabStop;
        private constructor();
        readonly Application: Application;
        Clear(): void;
        readonly Parent: any;
        Position: number;
        Type: PpTabStopType;
    }

    class TabStops {
        private 'PowerPoint.TabStops_typekey': TabStops;
        private constructor();
        Add(Type: PpTabStopType, Position: number): TabStop;
        readonly Application: Application;
        readonly Count: number;
        DefaultSpacing: number;
        Item(Index: number): TabStop;
        readonly Parent: any;
    }

    class Tags {
        private 'PowerPoint.Tags_typekey': Tags;
        private constructor();
        Add(Name: string, Value: string): void;
        AddBinary(Name: string, FilePath: string): void;
        readonly Application: Application;
        BinaryValue(Name: string): number;
        readonly Count: number;
        Delete(Name: string): void;
        Item(Name: string): string;
        Name(Index: number): string;
        readonly Parent: any;
        Value(Index: number): string;
    }

    class TextEffectFormat {
        private 'PowerPoint.TextEffectFormat_typekey': TextEffectFormat;
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
        private 'PowerPoint.TextFrame_typekey': TextFrame;
        private constructor();
        readonly Application: any;
        AutoSize: PpAutoSize;
        readonly Creator: number;
        DeleteText(): void;
        readonly HasText: Office.MsoTriState;
        HorizontalAnchor: Office.MsoHorizontalAnchor;
        MarginBottom: number;
        MarginLeft: number;
        MarginRight: number;
        MarginTop: number;
        Orientation: Office.MsoTextOrientation;
        readonly Parent: any;
        readonly Ruler: Ruler;
        readonly TextRange: TextRange;
        VerticalAnchor: Office.MsoVerticalAnchor;
        WordWrap: Office.MsoTriState;
    }

    class TextFrame2 {
        private 'PowerPoint.TextFrame2_typekey': TextFrame2;
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
        WordArtFormat: Office.MsoPresetTextEffect;
        WordWrap: Office.MsoTriState;
    }

    class TextRange {
        private 'PowerPoint.TextRange_typekey': TextRange;
        private constructor();
        readonly ActionSettings: ActionSettings;
        AddPeriods(): void;
        readonly Application: Application;
        readonly BoundHeight: number;
        readonly BoundLeft: number;
        readonly BoundTop: number;
        readonly BoundWidth: number;
        ChangeCase(Type: PpChangeCase): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Characters(Start?: number, Length?: number): TextRange;
        Copy(): void;
        readonly Count: number;
        Cut(): void;
        Delete(): void;

        /**
         * @param number [After=0]
         * @param Office.MsoTriState [MatchCase=0]
         * @param Office.MsoTriState [WholeWords=0]
         */
        Find(FindWhat: string, After?: number, MatchCase?: Office.MsoTriState, WholeWords?: Office.MsoTriState): TextRange;
        readonly Font: Font;
        IndentLevel: number;

        /** @param string [NewText=''] */
        InsertAfter(NewText?: string): TextRange;

        /** @param string [NewText=''] */
        InsertBefore(NewText?: string): TextRange;

        /** @param Office.MsoTriState [InsertAsField=0] */
        InsertDateTime(DateTimeFormat: PpDateTimeFormat, InsertAsField?: Office.MsoTriState): TextRange;
        InsertSlideNumber(): TextRange;

        /** @param Office.MsoTriState [Unicode=0] */
        InsertSymbol(FontName: string, CharNumber: number, Unicode?: Office.MsoTriState): TextRange;
        LanguageID: Office.MsoLanguageID;
        readonly Length: number;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Lines(Start?: number, Length?: number): TextRange;
        LtrRun(): void;
        readonly ParagraphFormat: ParagraphFormat;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Paragraphs(Start?: number, Length?: number): TextRange;
        readonly Parent: any;
        Paste(): TextRange;

        /**
         * @param PowerPoint.PpPasteDataType [DataType=0]
         * @param Office.MsoTriState [DisplayAsIcon=0]
         * @param string [IconFileName='']
         * @param number [IconIndex=0]
         * @param string [IconLabel='']
         * @param Office.MsoTriState [Link=0]
         */
        PasteSpecial(DataType?: PpPasteDataType, DisplayAsIcon?: Office.MsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Office.MsoTriState): TextRange;
        RemovePeriods(): void;

        /**
         * @param number [After=0]
         * @param Office.MsoTriState [MatchCase=0]
         * @param Office.MsoTriState [WholeWords=0]
         */
        Replace(FindWhat: string, ReplaceWhat: string, After?: number, MatchCase?: Office.MsoTriState, WholeWords?: Office.MsoTriState): TextRange;
        RotatedBounds(X1: number, Y1: number, X2: number, Y2: number, X3: number, Y3: number, x4: number, y4: number): void;
        RtlRun(): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Runs(Start?: number, Length?: number): TextRange;
        Select(): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Sentences(Start?: number, Length?: number): TextRange;
        readonly Start: number;
        Text: string;
        TrimText(): TextRange;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        Words(Start?: number, Length?: number): TextRange;
    }

    class TextStyle {
        private 'PowerPoint.TextStyle_typekey': TextStyle;
        private constructor();
        readonly Application: Application;
        readonly Levels: TextStyleLevels;
        readonly Parent: any;
        readonly Ruler: Ruler;
        readonly TextFrame: TextFrame;
    }

    class TextStyleLevel {
        private 'PowerPoint.TextStyleLevel_typekey': TextStyleLevel;
        private constructor();
        readonly Application: Application;
        readonly Font: Font;
        readonly ParagraphFormat: ParagraphFormat;
        readonly Parent: any;
    }

    class TextStyleLevels {
        private 'PowerPoint.TextStyleLevels_typekey': TextStyleLevels;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Level: number): TextStyleLevel;
        readonly Parent: any;
    }

    class TextStyles {
        private 'PowerPoint.TextStyles_typekey': TextStyles;
        private constructor();
        readonly Application: Application;
        readonly Count: number;
        Item(Type: PpTextStyleType): TextStyle;
        readonly Parent: any;
    }

    class ThreeDFormat {
        private 'PowerPoint.ThreeDFormat_typekey': ThreeDFormat;
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
        private 'PowerPoint.TickLabels_typekey': TickLabels;
        private constructor();
        Alignment: number;
        readonly Application: Application;
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

    class TimeLine {
        private 'PowerPoint.TimeLine_typekey': TimeLine;
        private constructor();
        readonly Application: Application;
        readonly InteractiveSequences: Sequences;
        readonly MainSequence: Sequence;
        readonly Parent: any;
    }

    class Timing {
        private 'PowerPoint.Timing_typekey': Timing;
        private constructor();
        Accelerate: number;
        readonly Application: Application;
        AutoReverse: Office.MsoTriState;
        BounceEnd: Office.MsoTriState;
        BounceEndIntensity: number;
        Decelerate: number;
        Duration: number;
        readonly Parent: any;
        RepeatCount: number;
        RepeatDuration: number;
        Restart: MsoAnimEffectRestart;
        RewindAtEnd: Office.MsoTriState;
        SmoothEnd: Office.MsoTriState;
        SmoothStart: Office.MsoTriState;
        Speed: number;
        TriggerBookmark: string;
        TriggerDelayTime: number;
        TriggerShape: Shape;
        TriggerType: MsoAnimTriggerType;
    }

    class UpBars {
        private 'PowerPoint.UpBars_typekey': UpBars;
        private constructor();
        readonly Application: Application;
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

    class View {
        private 'PowerPoint.View_typekey': View;
        private constructor();
        readonly Application: Application;
        DisplaySlideMiniature: Office.MsoTriState;
        GotoSlide(Index: number): void;
        readonly MediaControlsHeight: number;
        readonly MediaControlsLeft: number;
        readonly MediaControlsTop: number;
        readonly MediaControlsVisible: Office.MsoTriState;
        readonly MediaControlsWidth: number;
        readonly Parent: any;
        Paste(): void;

        /**
         * @param PowerPoint.PpPasteDataType [DataType=0]
         * @param Office.MsoTriState [DisplayAsIcon=0]
         * @param string [IconFileName='']
         * @param number [IconIndex=0]
         * @param string [IconLabel='']
         * @param Office.MsoTriState [Link=0]
         */
        PasteSpecial(DataType?: PpPasteDataType, DisplayAsIcon?: Office.MsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Office.MsoTriState): void;
        Player(ShapeId: any): Player;
        readonly PrintOptions: PrintOptions;

        /**
         * @param number [From=-1]
         * @param number [To=-1]
         * @param string [PrintToFile='']
         * @param number [Copies=0]
         * @param Office.MsoTriState [Collate=-99]
         */
        PrintOut(From?: number, To?: number, PrintToFile?: string, Copies?: number, Collate?: Office.MsoTriState): void;
        Slide: any;
        readonly Type: PpViewType;
        Zoom: number;
        ZoomToFit: Office.MsoTriState;
    }

    class Walls {
        private 'PowerPoint.Walls_typekey': Walls;
        private constructor();
        readonly Application: Application;
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
        private 'PowerPoint.WebOptions_typekey': WebOptions;
        private constructor();
        AllowPNG: Office.MsoTriState;
        Encoding: Office.MsoEncoding;
        readonly FolderSuffix: string;
        FrameColors: PpFrameColors;
        HTMLVersion: PpHTMLVersion;
        IncludeNavigation: Office.MsoTriState;
        OrganizeInFolder: Office.MsoTriState;
        RelyOnVML: Office.MsoTriState;
        ResizeGraphics: Office.MsoTriState;
        ScreenSize: Office.MsoScreenSize;
        ShowSlideAnimation: Office.MsoTriState;
        TargetBrowser: Office.MsoTargetBrowser;
        UseDefaultFolderSuffix(): void;
        UseLongFileNames: Office.MsoTriState;
    }
}

interface ActiveXObject {
    on(
        obj: PowerPoint.Application, event: 'AfterNewPresentation' | 'AfterPresentationOpen' | 'NewPresentation' | 'PresentationClose' | 'PresentationCloseFinal' |
        'PresentationOpen' | 'PresentationPrint' | 'PresentationSave' | 'SlideShowEnd', argNames: ['Pres'], handler: (
            this: PowerPoint.Application, parameter: {readonly Pres: PowerPoint.Presentation}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'ColorSchemeChanged' | 'SlideSelectionChanged', argNames: ['SldRange'], handler: (
            this: PowerPoint.Application, parameter: {readonly SldRange: PowerPoint.SlideRange}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'PresentationBeforeClose' | 'PresentationBeforeSave', argNames: ['Pres', 'Cancel'], handler: (
            this: PowerPoint.Application, parameter: {readonly Pres: PowerPoint.Presentation, Cancel: boolean}) => void): void;
    on(obj: PowerPoint.Application, event: 'PresentationNewSlide', argNames: ['Sld'], handler: (this: PowerPoint.Application, parameter: {readonly Sld: PowerPoint.Slide}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'PresentationSync', argNames: ['Pres', 'SyncEventType'], handler: (
            this: PowerPoint.Application, parameter: {readonly Pres: PowerPoint.Presentation, readonly SyncEventType: Office.MsoSyncEventType}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'ProtectedViewWindowActivate' | 'ProtectedViewWindowDeactivate' | 'ProtectedViewWindowOpen', argNames: ['ProtViewWindow'],
        handler: (this: PowerPoint.Application, parameter: {readonly ProtViewWindow: PowerPoint.ProtectedViewWindow}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'ProtectedViewWindowBeforeClose', argNames: ['ProtViewWindow', 'ProtectedViewCloseReason', 'Cancel'],
        handler: (
            this: PowerPoint.Application,
            parameter: {readonly ProtViewWindow: PowerPoint.ProtectedViewWindow, readonly ProtectedViewCloseReason: PowerPoint.PpProtectedViewCloseReason, Cancel: boolean}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'ProtectedViewWindowBeforeEdit', argNames: ['ProtViewWindow', 'Cancel'], handler: (
            this: PowerPoint.Application, parameter: {readonly ProtViewWindow: PowerPoint.ProtectedViewWindow, Cancel: boolean}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'SlideShowBegin' | 'SlideShowNextBuild' | 'SlideShowNextSlide' | 'SlideShowOnNext' | 'SlideShowOnPrevious', argNames: ['Wn'],
        handler: (this: PowerPoint.Application, parameter: {readonly Wn: PowerPoint.SlideShowWindow}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'SlideShowNextClick', argNames: ['Wn', 'nEffect'], handler: (
            this: PowerPoint.Application, parameter: {readonly Wn: PowerPoint.SlideShowWindow, readonly nEffect: PowerPoint.Effect}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'WindowActivate' | 'WindowDeactivate', argNames: ['Pres', 'Wn'], handler: (
            this: PowerPoint.Application, parameter: {readonly Pres: PowerPoint.Presentation, readonly Wn: PowerPoint.DocumentWindow}) => void): void;
    on(
        obj: PowerPoint.Application, event: 'WindowBeforeDoubleClick' | 'WindowBeforeRightClick', argNames: ['Sel', 'Cancel'], handler: (
            this: PowerPoint.Application, parameter: {readonly Sel: PowerPoint.Selection, Cancel: boolean}) => void): void;
    on(obj: PowerPoint.Application, event: 'WindowSelectionChange', argNames: ['Sel'], handler: (this: PowerPoint.Application, parameter: {readonly Sel: PowerPoint.Selection}) => void): void;
    on(obj: PowerPoint.OLEControl, event: 'GotFocus' | 'LostFocus', handler: (this: PowerPoint.OLEControl, parameter: {}) => void): void;
}

interface ActiveXObjectNameMap {
    'PowerPoint.Application': PowerPoint.Application;
}

interface EnumeratorConstructor {
    new(col: PowerPoint.ActionSettings): Enumerator<PowerPoint.ActionSetting>;
    new(col: PowerPoint.AddIns): Enumerator<PowerPoint.AddIn>;
    new(col: PowerPoint.AnimationBehaviors): Enumerator<PowerPoint.AnimationBehavior>;
    new(col: PowerPoint.AnimationPoints): Enumerator<PowerPoint.AnimationPoint>;
    new(col: PowerPoint.Borders): Enumerator<PowerPoint.LineFormat>;
    new(col: PowerPoint.CanvasShapes | PowerPoint.GroupShapes | PowerPoint.Placeholders | PowerPoint.ShapeRange | PowerPoint.Shapes): Enumerator<PowerPoint.Shape>;
    new(col: PowerPoint.CellRange): Enumerator<PowerPoint.Cell>;
    new(col: PowerPoint.ColorSchemes): Enumerator<PowerPoint.ColorScheme>;
    new(col: PowerPoint.Columns): Enumerator<PowerPoint.Column>;
    new(col: PowerPoint.Comments): Enumerator<PowerPoint.Comment>;
    new(col: PowerPoint.CustomerData): Enumerator<Office.CustomXMLPart>;
    new(col: PowerPoint.CustomLayouts): Enumerator<PowerPoint.CustomLayout>;
    new(col: PowerPoint.Designs): Enumerator<PowerPoint.Design>;
    new(col: PowerPoint.DiagramNodeChildren | PowerPoint.DiagramNodes): Enumerator<PowerPoint.DiagramNode>;
    new(col: PowerPoint.DocumentWindows): Enumerator<PowerPoint.DocumentWindow>;
    new(col: PowerPoint.ExtraColors): Enumerator<Office.MsoRGBType>;
    new(col: PowerPoint.FileConverters): Enumerator<PowerPoint.FileConverter>;
    new(col: PowerPoint.Fonts): Enumerator<PowerPoint.Font>;
    new(col: PowerPoint.Hyperlinks): Enumerator<PowerPoint.Hyperlink>;
    new(col: PowerPoint.MediaBookmarks): Enumerator<PowerPoint.MediaBookmark>;
    new(col: PowerPoint.NamedSlideShows): Enumerator<PowerPoint.NamedSlideShow>;
    new(col: PowerPoint.ObjectVerbs | PowerPoint.Tags): Enumerator<string>;
    new(col: PowerPoint.Panes): Enumerator<PowerPoint.Pane>;
    new(col: PowerPoint.Presentations): Enumerator<PowerPoint.Presentation>;
    new(col: PowerPoint.PrintRanges): Enumerator<PowerPoint.PrintRange>;
    new(col: PowerPoint.ProtectedViewWindows): Enumerator<PowerPoint.ProtectedViewWindow>;
    new(col: PowerPoint.PublishObjects): Enumerator<PowerPoint.PublishObject>;
    new(col: PowerPoint.ResampleMediaTasks): Enumerator<PowerPoint.ResampleMediaTask>;
    new(col: PowerPoint.Rows): Enumerator<PowerPoint.Row>;
    new(col: PowerPoint.RulerLevels): Enumerator<PowerPoint.RulerLevel>;
    new(col: PowerPoint.Sequence): Enumerator<PowerPoint.Effect>;
    new(col: PowerPoint.Sequences): Enumerator<PowerPoint.Sequence>;
    new(col: PowerPoint.ShapeNodes): Enumerator<PowerPoint.ShapeNode>;
    new(col: PowerPoint.SlideRange | PowerPoint.Slides): Enumerator<PowerPoint.Slide>;
    new(col: PowerPoint.SlideShowWindows): Enumerator<PowerPoint.SlideShowWindow>;
    new(col: PowerPoint.TabStops): Enumerator<PowerPoint.TabStop>;
    new(col: PowerPoint.TextStyleLevels): Enumerator<PowerPoint.TextStyleLevel>;
    new(col: PowerPoint.TextStyles): Enumerator<PowerPoint.TextStyle>;
}

interface SafeArray<T = any> {
    _brand: SafeArray<T>;
}
