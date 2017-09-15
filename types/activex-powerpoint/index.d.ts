// Type definitions for Microsoft PowerPoint 14.0 Object Library - PowerPoint 14.0
// Project: https://msdn.microsoft.com/en-us/library/fp161225.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        public Action: PpActionType;
        public ActionVerb: string;
        public AnimateAction: Office.MsoTriState;
        public readonly Application: Application;
        public readonly Hyperlink: Hyperlink;
        public readonly Parent: any;
        public Run: string;
        public ShowAndReturn: Office.MsoTriState;
        public SlideShowName: string;
        public readonly SoundEffect: SoundEffect;
    }

    class ActionSettings {
        private 'PowerPoint.ActionSettings_typekey': ActionSettings;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: PpMouseActivation): ActionSetting;
        public readonly Parent: any;
    }

    class AddIn {
        private 'PowerPoint.AddIn_typekey': AddIn;
        private constructor();
        public readonly Application: Application;
        public AutoLoad: Office.MsoTriState;
        public DisplayAlerts: Office.MsoTriState;
        public readonly FullName: string;
        public Loaded: Office.MsoTriState;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly Path: string;
        public Registered: Office.MsoTriState;
        public readonly RegisteredInHKLM: Office.MsoTriState;
    }

    class AddIns {
        private 'PowerPoint.AddIns_typekey': AddIns;
        private constructor();
        public Add(FileName: string): AddIn;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: any): AddIn;
        public readonly Parent: any;
        public Remove(Index: any): void;
    }

    class Adjustments {
        private 'PowerPoint.Adjustments_typekey': Adjustments;
        private constructor();
        public readonly Application: any;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: number): number;
        public readonly Parent: any;
    }

    class AnimationBehavior {
        private 'PowerPoint.AnimationBehavior_typekey': AnimationBehavior;
        private constructor();
        public Accumulate: MsoAnimAccumulate;
        public Additive: MsoAnimAdditive;
        public readonly Application: Application;
        public readonly ColorEffect: ColorEffect;
        public readonly CommandEffect: CommandEffect;
        public Delete(): void;
        public readonly FilterEffect: FilterEffect;
        public readonly MotionEffect: MotionEffect;
        public readonly Parent: any;
        public readonly PropertyEffect: PropertyEffect;
        public readonly RotationEffect: RotationEffect;
        public readonly ScaleEffect: ScaleEffect;
        public readonly SetEffect: SetEffect;
        public readonly Timing: Timing;
        public Type: MsoAnimType;
    }

    class AnimationBehaviors {
        private 'PowerPoint.AnimationBehaviors_typekey': AnimationBehaviors;
        private constructor();

        /** @param number [Index=-1] */
        public Add(Type: MsoAnimType, Index?: number): AnimationBehavior;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): AnimationBehavior;
        public readonly Parent: any;
    }

    class AnimationPoint {
        private 'PowerPoint.AnimationPoint_typekey': AnimationPoint;
        private constructor();
        public readonly Application: Application;
        public Delete(): void;
        public Formula: string;
        public readonly Parent: any;
        public Time: number;
        public Value: any;
    }

    class AnimationPoints {
        private 'PowerPoint.AnimationPoints_typekey': AnimationPoints;
        private constructor();

        /** @param number [Index=-1] */
        public Add(Index?: number): AnimationPoint;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): AnimationPoint;
        public readonly Parent: any;
        public Smooth: Office.MsoTriState;
    }

    class AnimationSettings {
        private 'PowerPoint.AnimationSettings_typekey': AnimationSettings;
        private constructor();
        public AdvanceMode: PpAdvanceMode;
        public AdvanceTime: number;
        public AfterEffect: PpAfterEffect;
        public Animate: Office.MsoTriState;
        public AnimateBackground: Office.MsoTriState;
        public AnimateTextInReverse: Office.MsoTriState;
        public AnimationOrder: number;
        public readonly Application: Application;
        public ChartUnitEffect: PpChartUnitEffect;
        public readonly DimColor: ColorFormat;
        public EntryEffect: PpEntryEffect;
        public readonly Parent: any;
        public readonly PlaySettings: PlaySettings;
        public readonly SoundEffect: SoundEffect;
        public TextLevelEffect: PpTextLevelEffect;
        public TextUnitEffect: PpTextUnitEffect;
    }

    class Application {
        private 'PowerPoint.Application_typekey': Application;
        private constructor();
        public Activate(): void;
        public readonly Active: Office.MsoTriState;
        public readonly ActiveEncryptionSession: number;
        public readonly ActivePresentation: Presentation;
        public readonly ActivePrinter: string;
        public readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        public readonly ActiveWindow: DocumentWindow;
        public readonly AddIns: AddIns;
        public readonly AnswerWizard: Office.AnswerWizard;
        public readonly Assistance: Office.IAssistance;
        public readonly Assistant: Office.Assistant;
        public readonly AutoCorrect: AutoCorrect;
        public AutomationSecurity: Office.MsoAutomationSecurity;
        public readonly Build: string;
        public Caption: string;
        public readonly COMAddIns: Office.COMAddIns;
        public readonly CommandBars: Office.CommandBars;
        public readonly Creator: number;
        public readonly DefaultWebOptions: DefaultWebOptions;
        public readonly Dialogs: any;
        public DisplayAlerts: PpAlertLevel;
        public DisplayDocumentInformationPanel: boolean;
        public DisplayGridLines: Office.MsoTriState;
        public FeatureInstall: Office.MsoFeatureInstall;
        public readonly FileConverters: FileConverters;
        public FileDialog(Type: Office.MsoFileDialogType): Office.FileDialog;
        public readonly FileFind: Office.IFind;
        public readonly FileSearch: Office.FileSearch;
        public FileValidation: Office.MsoFileValidationMode;

        /** @param boolean [Persist=false] */
        public GetOptionFlag(Option: number, Persist?: boolean): boolean;
        public Height: number;

        /**
         * @param string [HelpFile='vbapp10.chm']
         * @param number [ContextID=0]
         */
        public Help(HelpFile?: string, ContextID?: number): void;
        public readonly IsSandboxed: boolean;
        public readonly LanguageSettings: Office.LanguageSettings;
        public LaunchPublishSlidesDialog(SlideLibraryUrl: string): void;
        public LaunchSendToPPTDialog(SlideUrls: any): void;
        public Left: number;
        public readonly Marker: any;
        public readonly MsoDebugOptions: Office.MsoDebugOptions;
        public readonly Name: string;
        public readonly NewPresentation: Office.NewFile;
        public readonly OperatingSystem: string;
        public readonly Options: Options;
        public readonly Path: string;
        public PPFileDialog(Type: PpFileDialogType): any;
        public readonly Presentations: Presentations;
        public readonly ProductCode: string;
        public readonly ProtectedViewWindows: ProtectedViewWindows;
        public Quit(): void;
        public readonly ResampleMediaTasks: ResampleMediaTasks;
        public Run(MacroName: string, ...safeArrayOfParams: any[]): any;

        /** @param boolean [Persist=false] */
        public SetOptionFlag(Option: number, State: boolean, Persist?: boolean): void;
        public SetPerfMarker(Marker: number): void;
        public ShowStartupDialog: Office.MsoTriState;
        public ShowWindowsInTaskbar: Office.MsoTriState;
        public readonly SlideShowWindows: SlideShowWindows;
        public readonly SmartArtColors: Office.SmartArtColors;
        public readonly SmartArtLayouts: Office.SmartArtLayouts;
        public readonly SmartArtQuickStyles: Office.SmartArtQuickStyles;
        public StartNewUndoEntry(): void;
        public Top: number;
        public readonly VBE: VBIDE.VBE;
        public readonly Version: string;
        public Visible: Office.MsoTriState;
        public Width: number;
        public readonly Windows: DocumentWindows;
        public WindowState: PpWindowState;
    }

    class AutoCorrect {
        private 'PowerPoint.AutoCorrect_typekey': AutoCorrect;
        private constructor();
        public DisplayAutoCorrectOptions: boolean;
        public DisplayAutoLayoutOptions: boolean;
    }

    class Borders {
        private 'PowerPoint.Borders_typekey': Borders;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(BorderType: PpBorderType): LineFormat;
        public readonly Parent: any;
    }

    class Broadcast {
        private 'PowerPoint.Broadcast_typekey': Broadcast;
        private constructor();
        public readonly Application: Application;
        public readonly AttendeeUrl: string;
        public End(): void;
        public readonly IsBroadcasting: boolean;
        public readonly Parent: any;
        public Start(serverUrl: string): void;
    }

    class BulletFormat {
        private 'PowerPoint.BulletFormat_typekey': BulletFormat;
        private constructor();
        public readonly Application: Application;
        public Character: number;
        public readonly Font: Font;
        public readonly Number: number;
        public readonly Parent: any;
        public Picture(Picture: string): void;
        public RelativeSize: number;
        public StartValue: number;
        public Style: PpNumberedBulletStyle;
        public Type: PpBulletType;
        public UseTextColor: Office.MsoTriState;
        public UseTextFont: Office.MsoTriState;
        public Visible: Office.MsoTriState;
    }

    class CalloutFormat {
        private 'PowerPoint.CalloutFormat_typekey': CalloutFormat;
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

    class CanvasShapes {
        private 'PowerPoint.CanvasShapes_typekey': CanvasShapes;
        private constructor();
        public AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        public AddCurve(SafeArrayOfPoints: any): Shape;
        public AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;

        /**
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddPicture(FileName: string, LinkToFile: Office.MsoTriState, SaveWithDocument: Office.MsoTriState, Left: number, Top: number, Width?: number, Height?: number): Shape;
        public AddPolyline(SafeArrayOfPoints: any): Shape;
        public AddShape(Type: Office.MsoAutoShapeType, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number): Shape;
        public readonly Application: any;
        public readonly Background: Shape;
        public BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Shape;
        public readonly Parent: any;
        public Range(Index: any): ShapeRange;
        public SelectAll(): void;
    }

    class Cell {
        private 'PowerPoint.Cell_typekey': Cell;
        private constructor();
        public readonly Application: Application;
        public readonly Borders: Borders;
        public Merge(MergeTo: Cell): void;
        public readonly Parent: any;
        public Select(): void;
        public readonly Selected: boolean;
        public readonly Shape: Shape;
        public Split(NumRows: number, NumColumns: number): void;
    }

    class CellRange {
        private 'PowerPoint.CellRange_typekey': CellRange;
        private constructor();
        public readonly Application: Application;
        public readonly Borders: Borders;
        public readonly Count: number;
        public Item(Index: number): Cell;
        public readonly Parent: any;
    }

    class Chart {
        private 'PowerPoint.Chart_typekey': Chart;
        private constructor();

        /** @param PowerPoint.XlDataLabelsType [Type=2] */
        public _ApplyDataLabels(Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any): void;
        public AlternativeText: string;
        public readonly Application: Application;
        public ApplyChartTemplate(FileName: string): void;
        public ApplyCustomType(ChartType: Office.XlChartType, TypeName?: any): void;

        /** @param PowerPoint.XlDataLabelsType [Type=2] */
        public ApplyDataLabels(
            Type?: XlDataLabelsType, LegendKey?: any, AutoText?: any, HasLeaderLines?: any, ShowSeriesName?: any, ShowCategoryName?: any, ShowValue?: any,
            ShowPercentage?: any, ShowBubbleSize?: any, Separator?: any): void;
        public ApplyLayout(Layout: number, ChartType?: any): void;
        public readonly Area3DGroup: ChartGroup;
        public AreaGroups(Index?: any): any;
        public AutoFormat(Gallery: number, Format?: any): void;
        public AutoScaling: boolean;

        /** @param PowerPoint.XlAxisGroup [AxisGroup=1] */
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
         * @param PowerPoint.XlPictureAppearance [Appearance=1]
         * @param PowerPoint.XlCopyPictureFormat [Format=-4147]
         * @param PowerPoint.XlPictureAppearance [Size=2]
         */
        public CopyPicture(Appearance?: XlPictureAppearance, Format?: XlCopyPictureFormat, Size?: XlPictureAppearance): void;
        public readonly Corners: Corners;
        public readonly Creator: number;
        public readonly DataTable: DataTable;
        public Delete(): void;
        public DepthPercent: number;
        public DisplayBlanksAs: XlDisplayBlanksAs;
        public DoughnutGroups(Index?: any): any;
        public Elevation: number;
        public Export(FileName: string, FilterName?: any, Interactive?: any): boolean;
        public readonly Floor: Floor;
        public readonly Format: ChartFormat;
        public GapDepth: number;
        public GetChartElement(X: number, Y: number, ElementID: number, Arg1: number, Arg2: number): void;
        public HasAxis(Index1?: any, Index2?: any): any;
        public HasDataTable: boolean;
        public HasLegend: boolean;
        public HasPivotFields: boolean;
        public HasTitle: boolean;
        public HeightPercent: number;
        public readonly Legend: Legend;
        public readonly Line3DGroup: ChartGroup;
        public LineGroups(Index?: any): any;
        public Name: string;
        public readonly Parent: any;
        public Paste(Type?: any): void;
        public Perspective: number;
        public readonly Pie3DGroup: ChartGroup;
        public PieGroups(Index?: any): any;
        public readonly PlotArea: PlotArea;
        public PlotBy: XlRowCol;
        public PlotVisibleOnly: boolean;
        public RadarGroups(Index?: any): any;
        public Refresh(): void;
        public RightAngleAxes: any;
        public Rotation: any;
        public SaveChartTemplate(FileName: string): void;
        public Select(Replace?: any): void;
        public SeriesCollection(Index?: any): any;
        public SetBackgroundPicture(FileName: string): void;
        public SetDefaultChart(Name: any): void;
        public SetElement(Element: Office.MsoChartElementType): void;
        public SetSourceData(Source: string, PlotBy?: any): void;
        public readonly Shapes: Shapes;
        public ShowAllFieldButtons: boolean;
        public ShowAxisFieldButtons: boolean;
        public ShowDataLabelsOverMaximum: boolean;
        public ShowLegendFieldButtons: boolean;
        public ShowReportFilterFieldButtons: boolean;
        public ShowValueFieldButtons: boolean;
        public readonly SideWall: Walls;
        public Subtype: number;
        public readonly SurfaceGroup: ChartGroup;
        public Title: string;
        public Type: number;
        public readonly Walls: Walls;
        public XYGroups(Index?: any): any;
    }

    class ChartArea {
        private 'PowerPoint.ChartArea_typekey': ChartArea;
        private constructor();
        public readonly Application: Application;
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
        private 'PowerPoint.ChartBorder_typekey': ChartBorder;
        private constructor();
        public readonly Application: Application;
        public Color: any;
        public ColorIndex: any;
        public readonly Creator: number;
        public LineStyle: any;
        public readonly Parent: any;
        public Weight: any;
    }

    class ChartCharacters {
        private 'PowerPoint.ChartCharacters_typekey': ChartCharacters;
        private constructor();
        public readonly Application: Application;
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
        private 'PowerPoint.ChartColorFormat_typekey': ChartColorFormat;
        private constructor();
        public readonly _Default: number;
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Parent: any;
        public readonly RGB: number;
        public SchemeColor: number;
        public readonly Type: number;
    }

    class ChartData {
        private 'PowerPoint.ChartData_typekey': ChartData;
        private constructor();
        public Activate(): void;
        public BreakLink(): void;
        public readonly IsLinked: boolean;
        public readonly Workbook: any;
    }

    class ChartFillFormat {
        private 'PowerPoint.ChartFillFormat_typekey': ChartFillFormat;
        private constructor();
        public readonly Application: Application;
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
        private 'PowerPoint.ChartFont_typekey': ChartFont;
        private constructor();
        public readonly Application: Application;
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
        public Strikethrough: any;
        public Subscript: any;
        public Superscript: any;
        public Underline: any;
    }

    class ChartFormat {
        private 'PowerPoint.ChartFormat_typekey': ChartFormat;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
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
        private 'PowerPoint.ChartGroup_typekey': ChartGroup;
        private constructor();
        public readonly Application: Application;
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
        public Subtype: number;
        public Type: number;
        public readonly UpBars: UpBars;
        public VaryByCategories: boolean;
    }

    class ChartTitle {
        private 'PowerPoint.ChartTitle_typekey': ChartTitle;
        private constructor();
        public readonly Application: Application;
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

    class Coauthoring {
        private 'PowerPoint.Coauthoring_typekey': Coauthoring;
        private constructor();
        public readonly Application: Application;
        public readonly CoauthorCount: number;
        public EndReview(): void;
        public FavorServerEditsDuringMerge: boolean;
        public readonly MergeMode: boolean;
        public readonly Parent: any;
        public readonly PendingUpdates: boolean;
    }

    class ColorEffect {
        private 'PowerPoint.ColorEffect_typekey': ColorEffect;
        private constructor();
        public readonly Application: Application;
        public readonly By: ColorFormat;
        public readonly From: ColorFormat;
        public readonly Parent: any;
        public readonly To: ColorFormat;
    }

    class ColorFormat {
        private 'PowerPoint.ColorFormat_typekey': ColorFormat;
        private constructor();
        public readonly Application: any;
        public Brightness: number;
        public readonly Creator: number;
        public ObjectThemeColor: Office.MsoThemeColorIndex;
        public readonly Parent: any;
        public RGB: Office.MsoRGBType;
        public SchemeColor: PpColorSchemeIndex;
        public TintAndShade: number;
        public readonly Type: Office.MsoColorType;
    }

    class ColorScheme {
        private 'PowerPoint.ColorScheme_typekey': ColorScheme;
        private constructor();
        public readonly Application: Application;
        public Colors(SchemeColor: PpColorSchemeIndex): RGBColor;
        public readonly Count: number;
        public Delete(): void;
        public readonly Parent: any;
    }

    class ColorSchemes {
        private 'PowerPoint.ColorSchemes_typekey': ColorSchemes;
        private constructor();

        /** @param PowerPoint.ColorScheme [Scheme=0] */
        public Add(Scheme?: ColorScheme): ColorScheme;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): ColorScheme;
        public readonly Parent: any;
    }

    class Column {
        private 'PowerPoint.Column_typekey': Column;
        private constructor();
        public readonly Application: Application;
        public readonly Cells: CellRange;
        public Delete(): void;
        public readonly Parent: any;
        public Select(): void;
        public Width: number;
    }

    class Columns {
        private 'PowerPoint.Columns_typekey': Columns;
        private constructor();

        /** @param number [BeforeColumn=-1] */
        public Add(BeforeColumn?: number): Column;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): Column;
        public readonly Parent: any;
    }

    class CommandEffect {
        private 'PowerPoint.CommandEffect_typekey': CommandEffect;
        private constructor();
        public readonly Application: Application;
        public bookmark: string;
        public Command: string;
        public readonly Parent: any;
        public Type: MsoAnimCommandType;
    }

    class Comment {
        private 'PowerPoint.Comment_typekey': Comment;
        private constructor();
        public readonly Application: Application;
        public readonly Author: string;
        public readonly AuthorIndex: number;
        public readonly AuthorInitials: string;
        public readonly DateTime: VarDate;
        public Delete(): void;
        public readonly Left: number;
        public readonly Parent: any;
        public readonly Text: string;
        public readonly Top: number;
    }

    class Comments {
        private 'PowerPoint.Comments_typekey': Comments;
        private constructor();
        public Add(Left: number, Top: number, Author: string, AuthorInitials: string, Text: string): Comment;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): Comment;
        public readonly Parent: any;
    }

    class ConnectorFormat {
        private 'PowerPoint.ConnectorFormat_typekey': ConnectorFormat;
        private constructor();
        public readonly Application: any;
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

    class Corners {
        private 'PowerPoint.Corners_typekey': Corners;
        private constructor();
        public readonly Application: Application;
        public readonly Creator: number;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class CustomerData {
        private 'PowerPoint.CustomerData_typekey': CustomerData;
        private constructor();
        public Add(): Office.CustomXMLPart;
        public readonly Application: Application;
        public readonly Count: number;
        public Delete(Id: string): void;
        public Item(Id: string): Office.CustomXMLPart;
        public readonly Parent: any;
    }

    class CustomLayout {
        private 'PowerPoint.CustomLayout_typekey': CustomLayout;
        private constructor();
        public readonly Application: Application;
        public readonly Background: ShapeRange;
        public Copy(): void;
        public readonly CustomerData: CustomerData;
        public Cut(): void;
        public Delete(): void;
        public readonly Design: Design;
        public DisplayMasterShapes: Office.MsoTriState;
        public Duplicate(): CustomLayout;
        public FollowMasterBackground: Office.MsoTriState;
        public readonly HeadersFooters: HeadersFooters;
        public readonly Height: number;
        public readonly Hyperlinks: Hyperlinks;
        public readonly Index: number;
        public MatchingName: string;
        public MoveTo(toPos: number): void;
        public Name: string;
        public readonly Parent: any;
        public Preserved: Office.MsoTriState;
        public Select(): void;
        public readonly Shapes: Shapes;
        public readonly SlideShowTransition: SlideShowTransition;
        public readonly ThemeColorScheme: Office.ThemeColorScheme;
        public readonly TimeLine: TimeLine;
        public readonly Width: number;
    }

    class CustomLayouts {
        private 'PowerPoint.CustomLayouts_typekey': CustomLayouts;
        private constructor();
        public Add(Index: number): CustomLayout;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: any): CustomLayout;
        public readonly Parent: any;

        /** @param number [Index=-1] */
        public Paste(Index?: number): CustomLayout;
    }

    class DataTable {
        private 'PowerPoint.DataTable_typekey': DataTable;
        private constructor();
        public readonly Application: Application;
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
        private 'PowerPoint.DefaultWebOptions_typekey': DefaultWebOptions;
        private constructor();
        public AllowPNG: Office.MsoTriState;
        public AlwaysSaveInDefaultEncoding: Office.MsoTriState;
        public CheckIfOfficeIsHTMLEditor: Office.MsoTriState;
        public Encoding: Office.MsoEncoding;
        public readonly FolderSuffix: string;
        public readonly Fonts: Office.WebPageFonts;
        public FrameColors: PpFrameColors;
        public HTMLVersion: PpHTMLVersion;
        public IncludeNavigation: Office.MsoTriState;
        public OrganizeInFolder: Office.MsoTriState;
        public RelyOnVML: Office.MsoTriState;
        public ResizeGraphics: Office.MsoTriState;
        public SaveNewWebPagesAsWebArchives: Office.MsoTriState;
        public ScreenSize: Office.MsoScreenSize;
        public ShowSlideAnimation: Office.MsoTriState;
        public TargetBrowser: Office.MsoTargetBrowser;
        public UpdateLinksOnSave: Office.MsoTriState;
        public UseLongFileNames: Office.MsoTriState;
    }

    class Design {
        private 'PowerPoint.Design_typekey': Design;
        private constructor();
        public AddTitleMaster(): Master;
        public readonly Application: Application;
        public Delete(): void;
        public readonly HasTitleMaster: Office.MsoTriState;
        public readonly Index: number;
        public MoveTo(toPos: number): void;
        public Name: string;
        public readonly Parent: any;
        public Preserved: Office.MsoTriState;
        public readonly SlideMaster: Master;
        public readonly TitleMaster: Master;
    }

    class Designs {
        private 'PowerPoint.Designs_typekey': Designs;
        private constructor();

        /** @param number [Index=-1] */
        public Add(designName: string, Index?: number): Design;
        public readonly Application: Application;

        /** @param number [Index=-1] */
        public Clone(pOriginal: Design, Index?: number): Design;
        public readonly Count: number;
        public Item(Index: any): Design;

        /** @param number [Index=-1] */
        public Load(TemplateName: string, Index?: number): Design;
        public readonly Parent: any;
    }

    class Diagram {
        private 'PowerPoint.Diagram_typekey': Diagram;
        private constructor();
        public readonly Application: any;
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
        private 'PowerPoint.DiagramNode_typekey': DiagramNode;
        private constructor();

        /**
         * @param Office.MsoRelativeNodePosition [Pos=2]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        public AddNode(Pos?: Office.MsoRelativeNodePosition, NodeType?: Office.MsoDiagramNodeType): DiagramNode;
        public readonly Application: any;
        public readonly Children: DiagramNodeChildren;

        /** @param Office.MsoRelativeNodePosition [Pos=2] */
        public CloneNode(CopyChildren: boolean, TargetNode: DiagramNode, Pos?: Office.MsoRelativeNodePosition): DiagramNode;
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

        /** @param boolean [SwapChildren=true] */
        public SwapNode(TargetNode: DiagramNode, SwapChildren?: boolean): void;
        public readonly TextShape: Shape;
        public TransferChildren(ReceivingNode: DiagramNode): void;
    }

    class DiagramNodeChildren {
        private 'PowerPoint.DiagramNodeChildren_typekey': DiagramNodeChildren;
        private constructor();

        /**
         * @param any [Index=-1]
         * @param Office.MsoDiagramNodeType [NodeType=1]
         */
        public AddNode(Index?: any, NodeType?: Office.MsoDiagramNodeType): DiagramNode;
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
        private 'PowerPoint.DiagramNodes_typekey': DiagramNodes;
        private constructor();
        public readonly Application: any;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): DiagramNode;
        public readonly Parent: any;
        public SelectAll(): void;
    }

    class DocumentWindow {
        private 'PowerPoint.DocumentWindow_typekey': DocumentWindow;
        private constructor();
        public Activate(): void;
        public readonly Active: Office.MsoTriState;
        public readonly ActivePane: Pane;
        public readonly Application: Application;
        public BlackAndWhite: Office.MsoTriState;
        public readonly Caption: string;
        public Close(): void;
        public ExpandSection(sectionIndex: number, Expand: boolean): void;
        public FitToPage(): void;
        public Height: number;
        public IsSectionExpanded(sectionIndex: number): boolean;

        /**
         * @param number [Down=1]
         * @param number [Up=0]
         * @param number [ToRight=0]
         * @param number [ToLeft=0]
         */
        public LargeScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): void;
        public Left: number;
        public NewWindow(): DocumentWindow;
        public readonly Panes: Panes;
        public readonly Parent: any;
        public PointsToScreenPixelsX(Points: number): number;
        public PointsToScreenPixelsY(Points: number): number;
        public readonly Presentation: Presentation;
        public RangeFromPoint(X: number, Y: number): any;

        /** @param Office.MsoTriState [Start=-1] */
        public ScrollIntoView(Left: number, Top: number, Width: number, Height: number, Start?: Office.MsoTriState): void;
        public readonly Selection: Selection;

        /**
         * @param number [Down=1]
         * @param number [Up=0]
         * @param number [ToRight=0]
         * @param number [ToLeft=0]
         */
        public SmallScroll(Down?: number, Up?: number, ToRight?: number, ToLeft?: number): void;
        public SplitHorizontal: number;
        public SplitVertical: number;
        public Top: number;
        public readonly View: View;
        public ViewType: PpViewType;
        public Width: number;
        public WindowState: PpWindowState;
    }

    class DocumentWindows {
        private 'PowerPoint.DocumentWindows_typekey': DocumentWindows;
        private constructor();
        public readonly Application: Application;

        /** @param PowerPoint.PpArrangeStyle [arrangeStyle=1] */
        public Arrange(arrangeStyle?: PpArrangeStyle): void;
        public readonly Count: number;
        public Item(Index: number): DocumentWindow;
        public readonly Parent: any;
    }

    class DownBars {
        private 'PowerPoint.DownBars_typekey': DownBars;
        private constructor();
        public readonly Application: Application;
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

    class DropLines {
        private 'PowerPoint.DropLines_typekey': DropLines;
        private constructor();
        public readonly Application: Application;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class Effect {
        private 'PowerPoint.Effect_typekey': Effect;
        private constructor();
        public readonly Application: Application;
        public readonly Behaviors: AnimationBehaviors;
        public Delete(): void;
        public readonly DisplayName: string;
        public readonly EffectInformation: EffectInformation;
        public readonly EffectParameters: EffectParameters;
        public EffectType: MsoAnimEffect;
        public Exit: Office.MsoTriState;
        public readonly Index: number;
        public MoveAfter(Effect: Effect): void;
        public MoveBefore(Effect: Effect): void;
        public MoveTo(toPos: number): void;
        public Paragraph: number;
        public readonly Parent: any;
        public Shape: Shape;
        public readonly TextRangeLength: number;
        public readonly TextRangeStart: number;
        public readonly Timing: Timing;
    }

    class EffectInformation {
        private 'PowerPoint.EffectInformation_typekey': EffectInformation;
        private constructor();
        public readonly AfterEffect: MsoAnimAfterEffect;
        public readonly AnimateBackground: Office.MsoTriState;
        public readonly AnimateTextInReverse: Office.MsoTriState;
        public readonly Application: Application;
        public readonly BuildByLevelEffect: MsoAnimateByLevel;
        public readonly Dim: ColorFormat;
        public readonly Parent: any;
        public readonly PlaySettings: PlaySettings;
        public readonly SoundEffect: SoundEffect;
        public readonly TextUnitEffect: MsoAnimTextUnitEffect;
    }

    class EffectParameters {
        private 'PowerPoint.EffectParameters_typekey': EffectParameters;
        private constructor();
        public Amount: number;
        public readonly Application: Application;
        public readonly Color2: ColorFormat;
        public Direction: MsoAnimDirection;
        public FontName: string;
        public readonly Parent: any;
        public Relative: Office.MsoTriState;
        public Size: number;
    }

    class ExtraColors {
        private 'PowerPoint.ExtraColors_typekey': ExtraColors;
        private constructor();
        public Add(Type: Office.MsoRGBType): void;
        public readonly Application: Application;
        public Clear(): void;
        public readonly Count: number;
        public Item(Index: number): Office.MsoRGBType;
        public readonly Parent: any;
    }

    class FileConverter {
        private 'PowerPoint.FileConverter_typekey': FileConverter;
        private constructor();
        public readonly Application: Application;
        public readonly CanOpen: boolean;
        public readonly CanSave: boolean;
        public readonly ClassName: string;
        public readonly Creator: FileConverters;
        public readonly Extensions: string;
        public readonly FormatName: string;
        public readonly Name: string;
        public readonly OpenFormat: number;
        public readonly Parent: FileConverters;
        public readonly Path: string;
        public readonly SaveFormat: number;
    }

    class FileConverters {
        private 'PowerPoint.FileConverters_typekey': FileConverters;
        private constructor();
        public readonly Count: number;
        public Item(Index: any): FileConverter;
    }

    class FillFormat {
        private 'PowerPoint.FillFormat_typekey': FillFormat;
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

    class FilterEffect {
        private 'PowerPoint.FilterEffect_typekey': FilterEffect;
        private constructor();
        public readonly Application: Application;
        public readonly Parent: any;
        public Reveal: Office.MsoTriState;
        public Subtype: MsoAnimFilterEffectSubtype;
        public Type: MsoAnimFilterEffectType;
    }

    class Floor {
        private 'PowerPoint.Floor_typekey': Floor;
        private constructor();
        public readonly Application: Application;
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
        private 'PowerPoint.Font_typekey': Font;
        private constructor();
        public readonly Application: Application;
        public AutoRotateNumbers: Office.MsoTriState;
        public BaselineOffset: number;
        public Bold: Office.MsoTriState;
        public readonly Color: ColorFormat;
        public readonly Embeddable: Office.MsoTriState;
        public readonly Embedded: Office.MsoTriState;
        public Emboss: Office.MsoTriState;
        public Italic: Office.MsoTriState;
        public Name: string;
        public NameAscii: string;
        public NameComplexScript: string;
        public NameFarEast: string;
        public NameOther: string;
        public readonly Parent: any;
        public Shadow: Office.MsoTriState;
        public Size: number;
        public Subscript: Office.MsoTriState;
        public Superscript: Office.MsoTriState;
        public Underline: Office.MsoTriState;
    }

    class Fonts {
        private 'PowerPoint.Fonts_typekey': Fonts;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: any): Font;
        public readonly Parent: any;
        public Replace(Original: string, Replacement: string): void;
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
        public AddNodes(SegmentType: Office.MsoSegmentType, EditingType: Office.MsoEditingType, X1: number, Y1: number, X2?: number, Y2?: number, X3?: number, Y3?: number): void;
        public readonly Application: any;
        public ConvertToShape(): Shape;
        public readonly Creator: number;
        public readonly Parent: any;
    }

    class Global {
        private 'PowerPoint.Global_typekey': Global;
        private constructor();
        public readonly ActivePresentation: Presentation;
        public readonly ActiveProtectedViewWindow: ProtectedViewWindow;
        public readonly ActiveWindow: DocumentWindow;
        public readonly AddIns: AddIns;
        public readonly AnswerWizard: Office.AnswerWizard;
        public readonly Application: Application;
        public readonly Assistant: Office.Assistant;
        public readonly CommandBars: Office.CommandBars;
        public readonly Dialogs: any;
        public readonly FileConverters: FileConverters;
        public readonly IsSandboxed: boolean;
        public readonly Presentations: Presentations;
        public readonly ProtectedViewWindows: ProtectedViewWindows;
        public readonly SlideShowWindows: SlideShowWindows;
        public readonly Windows: DocumentWindows;
    }

    class GroupShapes {
        private 'PowerPoint.GroupShapes_typekey': GroupShapes;
        private constructor();
        public readonly Application: any;
        public readonly Count: number;
        public readonly Creator: number;
        public Item(Index: any): Shape;
        public readonly Parent: any;
        public Range(Index: any): ShapeRange;
    }

    class HeaderFooter {
        private 'PowerPoint.HeaderFooter_typekey': HeaderFooter;
        private constructor();
        public readonly Application: Application;
        public Format: PpDateTimeFormat;
        public readonly Parent: any;
        public Text: string;
        public UseFormat: Office.MsoTriState;
        public Visible: Office.MsoTriState;
    }

    class HeadersFooters {
        private 'PowerPoint.HeadersFooters_typekey': HeadersFooters;
        private constructor();
        public readonly Application: Application;
        public Clear(): void;
        public readonly DateAndTime: HeaderFooter;
        public DisplayOnTitleSlide: Office.MsoTriState;
        public readonly Footer: HeaderFooter;
        public readonly Header: HeaderFooter;
        public readonly Parent: any;
        public readonly SlideNumber: HeaderFooter;
    }

    class HiLoLines {
        private 'PowerPoint.HiLoLines_typekey': HiLoLines;
        private constructor();
        public readonly Application: Application;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class Hyperlink {
        private 'PowerPoint.Hyperlink_typekey': Hyperlink;
        private constructor();
        public Address: string;
        public AddToFavorites(): void;
        public readonly Application: Application;
        public CreateNewDocument(FileName: string, EditNow: Office.MsoTriState, Overwrite: Office.MsoTriState): void;
        public Delete(): void;
        public EmailSubject: string;
        public Follow(): void;
        public readonly Parent: any;
        public ScreenTip: string;
        public ShowAndReturn: Office.MsoTriState;
        public SubAddress: string;
        public TextToDisplay: string;
        public readonly Type: Office.MsoHyperlinkType;
    }

    class Hyperlinks {
        private 'PowerPoint.Hyperlinks_typekey': Hyperlinks;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): Hyperlink;
        public readonly Parent: any;
    }

    class Interior {
        private 'PowerPoint.Interior_typekey': Interior;
        private constructor();
        public readonly Application: Application;
        public Color: any;
        public ColorIndex: any;
        public readonly Creator: number;
        public InvertIfNegative: any;
        public readonly Parent: any;
        public Pattern: any;
        public PatternColor: any;
        public PatternColorIndex: any;
    }

    class Legend {
        private 'PowerPoint.Legend_typekey': Legend;
        private constructor();
        public readonly Application: Application;
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

    class LineFormat {
        private 'PowerPoint.LineFormat_typekey': LineFormat;
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
        private 'PowerPoint.LinkFormat_typekey': LinkFormat;
        private constructor();
        public readonly Application: Application;
        public AutoUpdate: PpUpdateOption;
        public BreakLink(): void;
        public readonly Parent: any;
        public SourceFullName: string;
        public Update(): void;
    }

    class Master {
        private 'PowerPoint.Master_typekey': Master;
        private constructor();
        public readonly Application: Application;
        public ApplyTheme(themeName: string): void;
        public readonly Background: ShapeRange;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public ColorScheme: ColorScheme;
        public readonly CustomerData: CustomerData;
        public readonly CustomLayouts: CustomLayouts;
        public Delete(): void;
        public readonly Design: Design;
        public readonly HeadersFooters: HeadersFooters;
        public readonly Height: number;
        public readonly Hyperlinks: Hyperlinks;
        public Name: string;
        public readonly Parent: any;
        public readonly Scripts: Office.Scripts;
        public readonly Shapes: Shapes;
        public readonly SlideShowTransition: SlideShowTransition;
        public readonly TextStyles: TextStyles;
        public readonly Theme: Office.OfficeTheme;
        public readonly TimeLine: TimeLine;
        public readonly Width: number;
    }

    class MediaBookmark {
        private 'PowerPoint.MediaBookmark_typekey': MediaBookmark;
        private constructor();
        public Delete(): void;
        public readonly Index: number;
        public readonly Name: string;
        public readonly Position: number;
    }

    class MediaBookmarks {
        private 'PowerPoint.MediaBookmarks_typekey': MediaBookmarks;
        private constructor();
        public Add(Position: number, Name: string): MediaBookmark;
        public readonly Count: number;
        public Item(Index: number): MediaBookmark;
    }

    class MediaFormat {
        private 'PowerPoint.MediaFormat_typekey': MediaFormat;
        private constructor();
        public readonly Application: Application;
        public readonly AudioCompressionType: string;
        public readonly AudioSamplingRate: number;
        public EndPoint: number;
        public FadeInDuration: number;
        public FadeOutDuration: number;
        public readonly IsEmbedded: boolean;
        public readonly IsLinked: boolean;
        public readonly Length: number;
        public readonly MediaBookmarks: MediaBookmarks;
        public Muted: boolean;
        public readonly Parent: any;

        /**
         * @param boolean [Trim=false]
         * @param number [SampleHeight=768]
         * @param number [SampleWidth=1280]
         * @param number [VideoFrameRate=24]
         * @param number [AudioSamplingRate=48000]
         * @param number [VideoBitRate=7000000]
         */
        public Resample(Trim?: boolean, SampleHeight?: number, SampleWidth?: number, VideoFrameRate?: number, AudioSamplingRate?: number, VideoBitRate?: number): void;

        /** @param PowerPoint.PpResampleMediaProfile [profile=2] */
        public ResampleFromProfile(profile?: PpResampleMediaProfile): void;
        public readonly ResamplingStatus: PpMediaTaskStatus;
        public readonly SampleHeight: number;
        public readonly SampleWidth: number;
        public SetDisplayPicture(Position: number): void;
        public SetDisplayPictureFromFile(FilePath: string): void;
        public StartPoint: number;
        public readonly VideoCompressionType: string;
        public readonly VideoFrameRate: number;
        public Volume: number;
    }

    class MotionEffect {
        private 'PowerPoint.MotionEffect_typekey': MotionEffect;
        private constructor();
        public readonly Application: Application;
        public ByX: number;
        public ByY: number;
        public FromX: number;
        public FromY: number;
        public readonly Parent: any;
        public Path: string;
        public ToX: number;
        public ToY: number;
    }

    class MouseTracker {
        private 'PowerPoint.MouseTracker_typekey': MouseTracker;
        private constructor();
        public EndTrack(X: number, Y: number): void;
        public OnTrack(X: number, Y: number): void;
    }

    class NamedSlideShow {
        private 'PowerPoint.NamedSlideShow_typekey': NamedSlideShow;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Delete(): void;
        public readonly Name: string;
        public readonly Parent: any;
        public readonly SlideIDs: any;
    }

    class NamedSlideShows {
        private 'PowerPoint.NamedSlideShows_typekey': NamedSlideShows;
        private constructor();
        public Add(Name: string, safeArrayOfSlideIDs: any): NamedSlideShow;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: any): NamedSlideShow;
        public readonly Parent: any;
    }

    class ObjectVerbs {
        private 'PowerPoint.ObjectVerbs_typekey': ObjectVerbs;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): string;
        public readonly Parent: any;
    }

    class OLEControl {
        private 'PowerPoint.OLEControl_typekey': OLEControl;
        private constructor();
        public AltHTML: string;
        public Height: number;
        public Left: number;
        public Name: string;
        public Top: number;
        public Visible: boolean;
        public Width: number;
        public readonly ZOrderPosition: number;
    }

    class OLEFormat {
        private 'PowerPoint.OLEFormat_typekey': OLEFormat;
        private constructor();
        public Activate(): void;
        public readonly Application: Application;

        /** @param number [Index=0] */
        public DoVerb(Index?: number): void;
        public FollowColors: PpFollowColors;
        public readonly Object: any;
        public readonly ObjectVerbs: ObjectVerbs;
        public readonly Parent: any;
        public readonly ProgID: string;
    }

    class Options {
        private 'PowerPoint.Options_typekey': Options;
        private constructor();
        public DisplayPasteOptions: Office.MsoTriState;
        public DoNotPromptForConvert: Office.MsoTriState;
        public ShowCoauthoringMergeChanges: boolean;
    }

    class PageSetup {
        private 'PowerPoint.PageSetup_typekey': PageSetup;
        private constructor();
        public readonly Application: Application;
        public FirstSlideNumber: number;
        public NotesOrientation: Office.MsoOrientation;
        public readonly Parent: any;
        public SlideHeight: number;
        public SlideOrientation: Office.MsoOrientation;
        public SlideSize: PpSlideSizeType;
        public SlideWidth: number;
    }

    class Pane {
        private 'PowerPoint.Pane_typekey': Pane;
        private constructor();
        public Activate(): void;
        public readonly Active: Office.MsoTriState;
        public readonly Application: Application;
        public readonly Parent: any;
        public readonly ViewType: PpViewType;
    }

    class Panes {
        private 'PowerPoint.Panes_typekey': Panes;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): Pane;
        public readonly Parent: any;
    }

    class ParagraphFormat {
        private 'PowerPoint.ParagraphFormat_typekey': ParagraphFormat;
        private constructor();
        public Alignment: PpParagraphAlignment;
        public readonly Application: Application;
        public BaseLineAlignment: PpBaselineAlignment;
        public readonly Bullet: BulletFormat;
        public FarEastLineBreakControl: Office.MsoTriState;
        public HangingPunctuation: Office.MsoTriState;
        public LineRuleAfter: Office.MsoTriState;
        public LineRuleBefore: Office.MsoTriState;
        public LineRuleWithin: Office.MsoTriState;
        public readonly Parent: any;
        public SpaceAfter: number;
        public SpaceBefore: number;
        public SpaceWithin: number;
        public TextDirection: PpDirection;
        public WordWrap: Office.MsoTriState;
    }

    class PictureFormat {
        private 'PowerPoint.PictureFormat_typekey': PictureFormat;
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

    class PlaceholderFormat {
        private 'PowerPoint.PlaceholderFormat_typekey': PlaceholderFormat;
        private constructor();
        public readonly Application: Application;
        public readonly ContainedType: Office.MsoShapeType;
        public Name: string;
        public readonly Parent: any;
        public readonly Type: PpPlaceholderType;
    }

    class Placeholders {
        private 'PowerPoint.Placeholders_typekey': Placeholders;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public FindByName(Index: any): Shape;
        public Item(Index: number): Shape;
        public readonly Parent: any;
    }

    class Player {
        private 'PowerPoint.Player_typekey': Player;
        private constructor();
        public readonly Application: Application;
        public CurrentPosition: number;
        public GoToNextBookmark(): void;
        public GoToPreviousBookmark(): void;
        public readonly Parent: any;
        public Pause(): void;
        public Play(): void;
        public readonly State: PpPlayerState;
        public Stop(): void;
    }

    class PlaySettings {
        private 'PowerPoint.PlaySettings_typekey': PlaySettings;
        private constructor();
        public ActionVerb: string;
        public readonly Application: Application;
        public HideWhileNotPlaying: Office.MsoTriState;
        public LoopUntilStopped: Office.MsoTriState;
        public readonly Parent: any;
        public PauseAnimation: Office.MsoTriState;
        public PlayOnEntry: Office.MsoTriState;
        public RewindMovie: Office.MsoTriState;
        public StopAfterSlides: number;
    }

    class PlotArea {
        private 'PowerPoint.PlotArea_typekey': PlotArea;
        private constructor();
        public readonly Application: Application;
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

    class PowerRex {
        private 'PowerPoint.PowerRex_typekey': PowerRex;
        private constructor();
        public OnAsfEncoderEvent(erorCode: any, bstrErrorDesc: any): void;
    }

    class Presentation {
        private 'PowerPoint.Presentation_typekey': Presentation;
        private constructor();
        public AcceptAll(): void;

        /** @param string [FileName=''] */
        public AddBaseline(FileName?: string): void;
        public AddTitleMaster(): Master;
        public AddToFavorites(): void;
        public readonly Application: Application;
        public ApplyTemplate(FileName: string): void;
        public ApplyTheme(themeName: string): void;
        public readonly Broadcast: Broadcast;
        public readonly BuiltInDocumentProperties: any;
        public CanCheckIn(): boolean;

        /** @param boolean [SaveChanges=true] */
        public CheckIn(SaveChanges?: boolean, Comments?: any, MakePublic?: any): void;

        /** @param boolean [SaveChanges=true] */
        public CheckInWithVersion(SaveChanges?: boolean, Comments?: any, MakePublic?: any, VersionType?: any): void;
        public Close(): void;
        public readonly Coauthoring: Coauthoring;
        public readonly ColorSchemes: ColorSchemes;
        public readonly CommandBars: Office.CommandBars;
        public readonly Container: any;
        public readonly ContentTypeProperties: Office.MetaProperties;
        public Convert(): void;
        public Convert2(FileName: string): void;

        /**
         * @param boolean [UseTimingsAndNarrations=true]
         * @param number [DefaultSlideDuration=5]
         * @param number [VertResolution=720]
         * @param number [FramesPerSecond=30]
         * @param number [Quality=85]
         */
        public CreateVideo(FileName: string, UseTimingsAndNarrations?: boolean, DefaultSlideDuration?: number, VertResolution?: number, FramesPerSecond?: number, Quality?: number): void;
        public readonly CreateVideoStatus: PpMediaTaskStatus;
        public readonly CustomDocumentProperties: any;
        public readonly CustomerData: CustomerData;
        public readonly CustomXMLParts: Office.CustomXMLParts;
        public DefaultLanguageID: Office.MsoLanguageID;
        public readonly DefaultShape: Shape;
        public DeleteSection(Index: number): void;
        public readonly Designs: Designs;
        public DisableSections(): void;
        public DisplayComments: Office.MsoTriState;
        public readonly DocumentInspectors: Office.DocumentInspectors;
        public readonly DocumentLibraryVersions: Office.DocumentLibraryVersions;
        public EncryptionProvider: string;
        public EndReview(): void;
        public EnsureAllMediaUpgraded(): void;
        public EnvelopeVisible: Office.MsoTriState;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         */
        public Export(Path: string, FilterName: string, ScaleWidth?: number, ScaleHeight?: number): void;

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
        public ExportAsFixedFormat(
            Path: string, FixedFormatType: PpFixedFormatType, Intent?: PpFixedFormatIntent, FrameSlides?: Office.MsoTriState, HandoutOrder?: PpPrintHandoutOrder,
            OutputType?: PpPrintOutputType, PrintHiddenSlides?: Office.MsoTriState, PrintRange?: PrintRange, RangeType?: PpPrintRangeType, SlideShowName?: string,
            IncludeDocProperties?: boolean, KeepIRMSettings?: boolean, DocStructureTags?: boolean, BitmapMissingFonts?: boolean, UseISO19005_1?: boolean, ExternalExporter?: any): void;
        public readonly ExtraColors: ExtraColors;
        public FarEastLineBreakLanguage: Office.MsoFarEastLineBreakLanguageID;
        public FarEastLineBreakLevel: PpFarEastLineBreakLevel;
        public Final: boolean;

        /**
         * @param string [SubAddress='']
         * @param boolean [NewWindow=false]
         * @param boolean [AddHistory=true]
         * @param string [ExtraInfo='']
         * @param Office.MsoExtraInfoMethod [Method=0]
         * @param string [HeaderInfo='']
         */
        public FollowHyperlink(Address: string, SubAddress?: string, NewWindow?: boolean, AddHistory?: boolean, ExtraInfo?: string, Method?: Office.MsoExtraInfoMethod, HeaderInfo?: string): void;
        public readonly Fonts: Fonts;
        public readonly FullName: string;
        public GetWorkflowTasks(): Office.WorkflowTasks;
        public GetWorkflowTemplates(): Office.WorkflowTemplates;
        public GridDistance: number;
        public readonly HandoutMaster: Master;
        public readonly HasHandoutMaster: boolean;
        public readonly HasNotesMaster: boolean;
        public readonly HasRevisionInfo: PpRevisionInfo;
        public readonly HasSections: boolean;
        public readonly HasTitleMaster: Office.MsoTriState;
        public readonly HasVBProject: boolean;
        public readonly HTMLProject: Office.HTMLProject;
        public readonly InMergeMode: boolean;
        public LayoutDirection: PpDirection;
        public LockServerFile(): void;
        public MakeIntoTemplate(IsDesignTemplate: Office.MsoTriState): void;
        public Merge(Path: string): void;
        public MergeWithBaseline(withPresentation: string, baselinePresentation: string): void;
        public readonly Name: string;
        public NewSectionAfter(Index: number, AfterSlide: boolean, sectionTitle: string, newSectionIndex: number): void;
        public NewWindow(): DocumentWindow;
        public NoLineBreakAfter: string;
        public NoLineBreakBefore: string;
        public readonly NotesMaster: Master;
        public readonly PageSetup: PageSetup;
        public readonly Parent: any;
        public Password: string;
        public readonly PasswordEncryptionAlgorithm: string;
        public readonly PasswordEncryptionFileProperties: boolean;
        public readonly PasswordEncryptionKeyLength: number;
        public readonly PasswordEncryptionProvider: string;
        public readonly Path: string;
        public readonly Permission: Office.Permission;
        public readonly PrintOptions: PrintOptions;

        /**
         * @param number [From=-1]
         * @param number [To=-1]
         * @param string [PrintToFile='']
         * @param number [Copies=0]
         * @param Office.MsoTriState [Collate=-99]
         */
        public PrintOut(From?: number, To?: number, PrintToFile?: string, Copies?: number, Collate?: Office.MsoTriState): void;
        public readonly PublishObjects: PublishObjects;

        /**
         * @param boolean [Overwrite=false]
         * @param boolean [UseSlideOrder=false]
         */
        public PublishSlides(SlideLibraryUrl: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;
        public readonly ReadOnly: Office.MsoTriState;
        public RejectAll(): void;
        public ReloadAs(cp: Office.MsoEncoding): void;
        public RemoveBaseline(): void;
        public RemoveDocumentInformation(Type: PpRemoveDocInfoType): void;
        public RemovePersonalInformation: Office.MsoTriState;

        /** @param boolean [ShowMessage=true] */
        public ReplyWithChanges(ShowMessage?: boolean): void;
        public readonly Research: Research;
        public Save(): void;

        /**
         * @param PowerPoint.PpSaveAsFileType [FileFormat=11]
         * @param Office.MsoTriState [EmbedTrueTypeFonts=-2]
         */
        public SaveAs(FileName: string, FileFormat?: PpSaveAsFileType, EmbedTrueTypeFonts?: Office.MsoTriState): void;

        /**
         * @param PowerPoint.PpSaveAsFileType [FileFormat=11]
         * @param Office.MsoTriState [EmbedTrueTypeFonts=-2]
         */
        public SaveCopyAs(FileName: string, FileFormat?: PpSaveAsFileType, EmbedTrueTypeFonts?: Office.MsoTriState): void;
        public Saved: Office.MsoTriState;
        public sblt(s: string): void;
        public readonly SectionCount: number;
        public readonly SectionProperties: SectionProperties;
        public sectionTitle(Index: number): string;

        /**
         * @param string [Recipients='']
         * @param string [Subject='']
         * @param boolean [ShowMessage=false]
         */
        public SendFaxOverInternet(Recipients?: string, Subject?: string, ShowMessage?: boolean): void;

        /**
         * @param string [Recipients='']
         * @param string [Subject='']
         * @param boolean [ShowMessage=true]
         */
        public SendForReview(Recipients?: string, Subject?: string, ShowMessage?: boolean, IncludeAttachment?: any): void;
        public readonly ServerPolicy: Office.ServerPolicy;
        public SetPasswordEncryptionOptions(
            PasswordEncryptionProvider: string, PasswordEncryptionAlgorithm: string, PasswordEncryptionKeyLength: number, PasswordEncryptionFileProperties: boolean): void;
        public SetUndoText(Text: string): void;
        public readonly SharedWorkspace: Office.SharedWorkspace;
        public readonly Signatures: Office.SignatureSet;
        public readonly SlideMaster: Master;
        public readonly Slides: Slides;
        public readonly SlideShowSettings: SlideShowSettings;
        public readonly SlideShowWindow: SlideShowWindow;
        public SnapToGrid: Office.MsoTriState;
        public readonly Sync: Office.Sync;
        public readonly Tags: Tags;
        public readonly TemplateName: string;
        public readonly TitleMaster: Master;
        public UpdateLinks(): void;
        public readonly VBASigned: Office.MsoTriState;
        public readonly VBProject: VBIDE.VBProject;
        public readonly WebOptions: WebOptions;
        public WebPagePreview(): void;
        public readonly Windows: DocumentWindows;
        public WritePassword: string;
    }

    class Presentations {
        private 'PowerPoint.Presentations_typekey': Presentations;
        private constructor();

        /** @param Office.MsoTriState [WithWindow=-1] */
        public Add(WithWindow?: Office.MsoTriState): Presentation;
        public readonly Application: Application;
        public CanCheckOut(FileName: string): boolean;
        public CheckOut(FileName: string): void;
        public readonly Count: number;
        public Item(Index: any): Presentation;

        /**
         * @param Office.MsoTriState [ReadOnly=0]
         * @param Office.MsoTriState [Untitled=0]
         * @param Office.MsoTriState [WithWindow=-1]
         */
        public Open(FileName: string, ReadOnly?: Office.MsoTriState, Untitled?: Office.MsoTriState, WithWindow?: Office.MsoTriState): Presentation;

        /**
         * @param Office.MsoTriState [ReadOnly=0]
         * @param Office.MsoTriState [Untitled=0]
         * @param Office.MsoTriState [WithWindow=-1]
         * @param Office.MsoTriState [OpenAndRepair=0]
         */
        public Open2007(FileName: string, ReadOnly?: Office.MsoTriState, Untitled?: Office.MsoTriState, WithWindow?: Office.MsoTriState, OpenAndRepair?: Office.MsoTriState): Presentation;

        /**
         * @param Office.MsoTriState [ReadOnly=0]
         * @param Office.MsoTriState [Untitled=0]
         * @param Office.MsoTriState [WithWindow=-1]
         */
        public OpenOld(FileName: string, ReadOnly?: Office.MsoTriState, Untitled?: Office.MsoTriState, WithWindow?: Office.MsoTriState): Presentation;
        public readonly Parent: any;
    }

    class PrintOptions {
        private 'PowerPoint.PrintOptions_typekey': PrintOptions;
        private constructor();
        public ActivePrinter: string;
        public readonly Application: Application;
        public Collate: Office.MsoTriState;
        public FitToPage: Office.MsoTriState;
        public FrameSlides: Office.MsoTriState;
        public HandoutOrder: PpPrintHandoutOrder;
        public HighQuality: Office.MsoTriState;
        public NumberOfCopies: number;
        public OutputType: PpPrintOutputType;
        public readonly Parent: any;
        public PrintColorType: PpPrintColorType;
        public PrintComments: Office.MsoTriState;
        public PrintFontsAsGraphics: Office.MsoTriState;
        public PrintHiddenSlides: Office.MsoTriState;
        public PrintInBackground: Office.MsoTriState;
        public readonly Ranges: PrintRanges;
        public RangeType: PpPrintRangeType;
        public sectionIndex: number;
        public SlideShowName: string;
    }

    class PrintRange {
        private 'PowerPoint.PrintRange_typekey': PrintRange;
        private constructor();
        public readonly Application: Application;
        public Delete(): void;
        public readonly End: number;
        public readonly Parent: any;
        public readonly Start: number;
    }

    class PrintRanges {
        private 'PowerPoint.PrintRanges_typekey': PrintRanges;
        private constructor();
        public Add(Start: number, End: number): PrintRange;
        public readonly Application: Application;
        public ClearAll(): void;
        public readonly Count: number;
        public Item(Index: number): PrintRange;
        public readonly Parent: any;
    }

    class PropertyEffect {
        private 'PowerPoint.PropertyEffect_typekey': PropertyEffect;
        private constructor();
        public readonly Application: Application;
        public From: any;
        public readonly Parent: any;
        public readonly Points: AnimationPoints;
        public Property: MsoAnimProperty;
        public To: any;
    }

    class ProtectedViewWindow {
        private 'PowerPoint.ProtectedViewWindow_typekey': ProtectedViewWindow;
        private constructor();
        public Activate(): void;
        public readonly Active: Office.MsoTriState;
        public readonly Application: Application;
        public readonly Caption: string;
        public Close(): void;

        /** @param string [ModifyPassword=''] */
        public Edit(ModifyPassword?: string): Presentation;
        public Height: number;
        public Left: number;
        public readonly Parent: any;
        public readonly Presentation: Presentation;
        public readonly SourceName: string;
        public readonly SourcePath: string;
        public Top: number;
        public Width: number;
        public WindowState: PpWindowState;
    }

    class ProtectedViewWindows {
        private 'PowerPoint.ProtectedViewWindows_typekey': ProtectedViewWindows;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): ProtectedViewWindow;

        /**
         * @param string [ReadPassword='']
         * @param Office.MsoTriState [OpenAndRepair=0]
         */
        public Open(FileName: string, ReadPassword?: string, OpenAndRepair?: Office.MsoTriState): ProtectedViewWindow;
        public readonly Parent: any;
    }

    class PublishObject {
        private 'PowerPoint.PublishObject_typekey': PublishObject;
        private constructor();
        public readonly Application: Application;
        public FileName: string;
        public HTMLVersion: PpHTMLVersion;
        public readonly Parent: any;
        public Publish(): void;
        public RangeEnd: number;
        public RangeStart: number;
        public SlideShowName: string;
        public SourceType: PpPublishSourceType;
        public SpeakerNotes: Office.MsoTriState;
    }

    class PublishObjects {
        private 'PowerPoint.PublishObjects_typekey': PublishObjects;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): PublishObject;
        public readonly Parent: any;
    }

    class ResampleMediaTask {
        private 'PowerPoint.ResampleMediaTask_typekey': ResampleMediaTask;
        private constructor();
        public readonly AudioCompressionType: string;
        public readonly AudioSamplingRate: number;
        public readonly ContainerType: string;
        public readonly IsEmbedded: boolean;
        public readonly IsLinked: boolean;
        public readonly profile: PpResampleMediaProfile;
        public readonly SampleHeight: number;
        public readonly SampleWidth: number;
        public readonly Shape: Shape;
        public readonly VideoCompressionType: string;
        public readonly VideoFrameRate: number;
    }

    class ResampleMediaTasks {
        private 'PowerPoint.ResampleMediaTasks_typekey': ResampleMediaTasks;
        private constructor();
        public Cancel(): void;
        public readonly Count: number;
        public Item(Index: number): ResampleMediaTask;
        public Pause(): void;
        public readonly PercentComplete: number;
        public Resume(): void;
    }

    class Research {
        private 'PowerPoint.Research_typekey': Research;
        private constructor();
        public readonly Application: Application;
        public IsResearchService(ServiceID: string): boolean;
        public readonly Parent: any;

        /**
         * @param boolean [UseSelection=false]
         * @param boolean [LaunchQuery=true]
         */
        public Query(ServiceID: string, QueryString: any, QueryLanguage: any, UseSelection?: boolean, LaunchQuery?: boolean): void;
        public SetLanguagePair(Language1: any, Language2: any): void;
    }

    class RGBColor {
        private 'PowerPoint.RGBColor_typekey': RGBColor;
        private constructor();
        public readonly Application: Application;
        public readonly Parent: any;
        public RGB: Office.MsoRGBType;
    }

    class RotationEffect {
        private 'PowerPoint.RotationEffect_typekey': RotationEffect;
        private constructor();
        public readonly Application: Application;
        public By: number;
        public From: number;
        public readonly Parent: any;
        public To: number;
    }

    class Row {
        private 'PowerPoint.Row_typekey': Row;
        private constructor();
        public readonly Application: Application;
        public readonly Cells: CellRange;
        public Delete(): void;
        public Height: number;
        public readonly Parent: any;
        public Select(): void;
    }

    class Rows {
        private 'PowerPoint.Rows_typekey': Rows;
        private constructor();

        /** @param number [BeforeRow=-1] */
        public Add(BeforeRow?: number): Row;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): Row;
        public readonly Parent: any;
    }

    class Ruler {
        private 'PowerPoint.Ruler_typekey': Ruler;
        private constructor();
        public readonly Application: Application;
        public readonly Levels: RulerLevels;
        public readonly Parent: any;
        public readonly TabStops: TabStops;
    }

    class RulerLevel {
        private 'PowerPoint.RulerLevel_typekey': RulerLevel;
        private constructor();
        public readonly Application: Application;
        public FirstMargin: number;
        public LeftMargin: number;
        public readonly Parent: any;
    }

    class RulerLevels {
        private 'PowerPoint.RulerLevels_typekey': RulerLevels;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): RulerLevel;
        public readonly Parent: any;
    }

    class ScaleEffect {
        private 'PowerPoint.ScaleEffect_typekey': ScaleEffect;
        private constructor();
        public readonly Application: Application;
        public ByX: number;
        public ByY: number;
        public FromX: number;
        public FromY: number;
        public readonly Parent: any;
        public ToX: number;
        public ToY: number;
    }

    class SectionProperties {
        private 'PowerPoint.SectionProperties_typekey': SectionProperties;
        private constructor();
        public AddBeforeSlide(SlideIndex: number, sectionName: string): number;
        public AddSection(sectionIndex: number, sectionName?: any): number;
        public readonly Application: Application;
        public readonly Count: number;
        public Delete(sectionIndex: number, deleteSlides: boolean): void;
        public FirstSlide(sectionIndex: number): number;
        public Move(sectionIndex: number, toPos: number): void;
        public Name(sectionIndex: number): string;
        public readonly Parent: any;
        public Rename(sectionIndex: number, sectionName: string): void;
        public SectionID(sectionIndex: number): string;
        public SlidesCount(sectionIndex: number): number;
    }

    class Selection {
        private 'PowerPoint.Selection_typekey': Selection;
        private constructor();
        public readonly Application: Application;
        public readonly ChildShapeRange: ShapeRange;
        public Copy(): void;
        public Cut(): void;
        public Delete(): void;
        public readonly HasChildShapeRange: boolean;
        public readonly Parent: any;
        public readonly ShapeRange: ShapeRange;
        public readonly SlideRange: SlideRange;
        public readonly TextRange: TextRange;
        public readonly TextRange2: Office.TextRange2;
        public readonly Type: PpSelectionType;
        public Unselect(): void;
    }

    class Sequence {
        private 'PowerPoint.Sequence_typekey': Sequence;
        private constructor();

        /**
         * @param PowerPoint.MsoAnimateByLevel [Level=0]
         * @param PowerPoint.MsoAnimTriggerType [trigger=1]
         * @param number [Index=-1]
         */
        public AddEffect(Shape: Shape, effectId: MsoAnimEffect, Level?: MsoAnimateByLevel, trigger?: MsoAnimTriggerType, Index?: number): Effect;

        /**
         * @param string [bookmark='']
         * @param PowerPoint.MsoAnimateByLevel [Level=0]
         */
        public AddTriggerEffect(pShape: Shape, effectId: MsoAnimEffect, trigger: MsoAnimTriggerType, pTriggerShape: Shape, bookmark?: string, Level?: MsoAnimateByLevel): Effect;
        public readonly Application: Application;

        /** @param number [Index=-1] */
        public Clone(Effect: Effect, Index?: number): Effect;

        /**
         * @param Office.MsoRGBType [DimColor=0]
         * @param PowerPoint.PpColorSchemeIndex [DimSchemeColor=0]
         */
        public ConvertToAfterEffect(Effect: Effect, After: MsoAnimAfterEffect, DimColor?: Office.MsoRGBType, DimSchemeColor?: PpColorSchemeIndex): Effect;
        public ConvertToAnimateBackground(Effect: Effect, AnimateBackground: Office.MsoTriState): Effect;
        public ConvertToAnimateInReverse(Effect: Effect, animateInReverse: Office.MsoTriState): Effect;
        public ConvertToBuildLevel(Effect: Effect, Level: MsoAnimateByLevel): Effect;
        public ConvertToTextUnitEffect(Effect: Effect, unitEffect: MsoAnimTextUnitEffect): Effect;
        public readonly Count: number;
        public FindFirstAnimationFor(Shape: Shape): Effect;
        public FindFirstAnimationForClick(click: number): Effect;
        public Item(Index: number): Effect;
        public readonly Parent: any;
    }

    class Sequences {
        private 'PowerPoint.Sequences_typekey': Sequences;
        private constructor();

        /** @param number [Index=-1] */
        public Add(Index?: number): Sequence;
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): Sequence;
        public readonly Parent: any;
    }

    class SeriesLines {
        private 'PowerPoint.SeriesLines_typekey': SeriesLines;
        private constructor();
        public readonly Application: Application;
        public readonly Border: ChartBorder;
        public readonly Creator: number;
        public Delete(): any;
        public readonly Format: ChartFormat;
        public readonly Name: string;
        public readonly Parent: any;
        public Select(): any;
    }

    class SetEffect {
        private 'PowerPoint.SetEffect_typekey': SetEffect;
        private constructor();
        public readonly Application: Application;
        public readonly Parent: any;
        public Property: MsoAnimProperty;
        public To: any;
    }

    class ShadowFormat {
        private 'PowerPoint.ShadowFormat_typekey': ShadowFormat;
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
        private 'PowerPoint.Shape_typekey': Shape;
        private constructor();
        public readonly ActionSettings: ActionSettings;
        public readonly Adjustments: Adjustments;
        public AlternativeText: string;
        public readonly AnimationSettings: AnimationSettings;
        public readonly Application: any;
        public Apply(): void;
        public ApplyAnimation(): void;
        public AutoShapeType: Office.MsoAutoShapeType;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public BlackWhiteMode: Office.MsoBlackWhiteMode;
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
        public ConvertTextToSmartArt(Layout: Office.SmartArtLayout): void;
        public Copy(): void;
        public readonly Creator: number;
        public readonly CustomerData: CustomerData;
        public Cut(): void;
        public Delete(): void;
        public readonly Diagram: Diagram;
        public readonly DiagramNode: DiagramNode;
        public Duplicate(): ShapeRange;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         * @param PowerPoint.PpExportMode [ExportMode=1]
         */
        public Export(PathName: string, Filter: PpShapeFormat, ScaleWidth?: number, ScaleHeight?: number, ExportMode?: PpExportMode): void;
        public readonly Fill: FillFormat;
        public Flip(FlipCmd: Office.MsoFlipCmd): void;
        public readonly Glow: Office.GlowFormat;
        public readonly GroupItems: GroupShapes;
        public readonly HasChart: Office.MsoTriState;
        public readonly HasDiagram: Office.MsoTriState;
        public readonly HasDiagramNode: Office.MsoTriState;
        public readonly HasSmartArt: Office.MsoTriState;
        public readonly HasTable: Office.MsoTriState;
        public readonly HasTextFrame: Office.MsoTriState;
        public Height: number;
        public readonly HorizontalFlip: Office.MsoTriState;
        public readonly Id: number;
        public IncrementLeft(Increment: number): void;
        public IncrementRotation(Increment: number): void;
        public IncrementTop(Increment: number): void;
        public Left: number;
        public readonly Line: LineFormat;
        public readonly LinkFormat: LinkFormat;
        public LockAspectRatio: Office.MsoTriState;
        public readonly MediaFormat: MediaFormat;
        public readonly MediaType: PpMediaType;
        public Name: string;
        public readonly Nodes: ShapeNodes;
        public readonly OLEFormat: OLEFormat;
        public readonly Parent: any;
        public readonly ParentGroup: Shape;
        public PickUp(): void;
        public PickupAnimation(): void;
        public readonly PictureFormat: PictureFormat;
        public readonly PlaceholderFormat: PlaceholderFormat;
        public readonly Reflection: Office.ReflectionFormat;
        public RerouteConnections(): void;
        public Rotation: number;
        public readonly RTF: string;

        /** @param Office.MsoScaleFrom [fScale=0] */
        public ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, fScale?: Office.MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [fScale=0] */
        public ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, fScale?: Office.MsoScaleFrom): void;
        public readonly Script: Office.Script;

        /** @param Office.MsoTriState [Replace=-1] */
        public Select(Replace?: Office.MsoTriState): void;
        public SetShapesDefaultProperties(): void;
        public readonly Shadow: ShadowFormat;
        public ShapeStyle: Office.MsoShapeStyleIndex;
        public readonly SmartArt: Office.SmartArt;
        public readonly SoftEdge: Office.SoftEdgeFormat;
        public readonly SoundFormat: SoundFormat;
        public readonly Table: Table;
        public readonly Tags: Tags;
        public readonly TextEffect: TextEffectFormat;
        public readonly TextFrame: TextFrame;
        public readonly TextFrame2: TextFrame2;
        public readonly ThreeD: ThreeDFormat;
        public Title: string;
        public Top: number;
        public readonly Type: Office.MsoShapeType;
        public Ungroup(): ShapeRange;
        public UpgradeMedia(): void;
        public readonly VerticalFlip: Office.MsoTriState;
        public readonly Vertices: any;
        public Visible: Office.MsoTriState;
        public Width: number;
        public ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        public readonly ZOrderPosition: number;
    }

    class ShapeNode {
        private 'PowerPoint.ShapeNode_typekey': ShapeNode;
        private constructor();
        public readonly Application: any;
        public readonly Creator: number;
        public readonly EditingType: Office.MsoEditingType;
        public readonly Parent: any;
        public readonly Points: any;
        public readonly SegmentType: Office.MsoSegmentType;
    }

    class ShapeNodes {
        private 'PowerPoint.ShapeNodes_typekey': ShapeNodes;
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
        private 'PowerPoint.ShapeRange_typekey': ShapeRange;
        private constructor();
        public readonly ActionSettings: ActionSettings;
        public readonly Adjustments: Adjustments;
        public Align(AlignCmd: Office.MsoAlignCmd, RelativeTo: Office.MsoTriState): void;
        public AlternativeText: string;
        public readonly AnimationSettings: AnimationSettings;
        public readonly Application: any;
        public Apply(): void;
        public ApplyAnimation(): void;
        public AutoShapeType: Office.MsoAutoShapeType;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public BlackWhiteMode: Office.MsoBlackWhiteMode;
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
        public ConvertTextToSmartArt(Layout: Office.SmartArtLayout): void;
        public Copy(): void;
        public readonly Count: number;
        public readonly Creator: number;
        public readonly CustomerData: CustomerData;
        public Cut(): void;
        public Delete(): void;
        public readonly Diagram: Diagram;
        public readonly DiagramNode: DiagramNode;
        public Distribute(DistributeCmd: Office.MsoDistributeCmd, RelativeTo: Office.MsoTriState): void;
        public Duplicate(): ShapeRange;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         * @param PowerPoint.PpExportMode [ExportMode=1]
         */
        public Export(PathName: string, Filter: PpShapeFormat, ScaleWidth?: number, ScaleHeight?: number, ExportMode?: PpExportMode): void;
        public readonly Fill: FillFormat;
        public Flip(FlipCmd: Office.MsoFlipCmd): void;
        public readonly Glow: Office.GlowFormat;
        public Group(): Shape;
        public readonly GroupItems: GroupShapes;
        public readonly HasChart: Office.MsoTriState;
        public readonly HasDiagram: Office.MsoTriState;
        public readonly HasDiagramNode: Office.MsoTriState;
        public readonly HasSmartArt: Office.MsoTriState;
        public readonly HasTable: Office.MsoTriState;
        public readonly HasTextFrame: Office.MsoTriState;
        public Height: number;
        public readonly HorizontalFlip: Office.MsoTriState;
        public readonly Id: number;
        public IncrementLeft(Increment: number): void;
        public IncrementRotation(Increment: number): void;
        public IncrementTop(Increment: number): void;
        public Item(Index: any): Shape;
        public Left: number;
        public readonly Line: LineFormat;
        public readonly LinkFormat: LinkFormat;
        public LockAspectRatio: Office.MsoTriState;
        public readonly MediaFormat: MediaFormat;
        public readonly MediaType: PpMediaType;
        public Name: string;
        public readonly Nodes: ShapeNodes;
        public readonly OLEFormat: OLEFormat;
        public readonly Parent: any;
        public readonly ParentGroup: Shape;
        public PickUp(): void;
        public PickupAnimation(): void;
        public readonly PictureFormat: PictureFormat;
        public readonly PlaceholderFormat: PlaceholderFormat;
        public readonly Reflection: Office.ReflectionFormat;
        public Regroup(): Shape;
        public RerouteConnections(): void;
        public Rotation: number;
        public readonly RTF: string;

        /** @param Office.MsoScaleFrom [fScale=0] */
        public ScaleHeight(Factor: number, RelativeToOriginalSize: Office.MsoTriState, fScale?: Office.MsoScaleFrom): void;

        /** @param Office.MsoScaleFrom [fScale=0] */
        public ScaleWidth(Factor: number, RelativeToOriginalSize: Office.MsoTriState, fScale?: Office.MsoScaleFrom): void;
        public readonly Script: Office.Script;

        /** @param Office.MsoTriState [Replace=-1] */
        public Select(Replace?: Office.MsoTriState): void;
        public SetShapesDefaultProperties(): void;
        public readonly Shadow: ShadowFormat;
        public ShapeStyle: Office.MsoShapeStyleIndex;
        public readonly SmartArt: Office.SmartArt;
        public readonly SoftEdge: Office.SoftEdgeFormat;
        public readonly SoundFormat: SoundFormat;
        public readonly Table: Table;
        public readonly Tags: Tags;
        public readonly TextEffect: TextEffectFormat;
        public readonly TextFrame: TextFrame;
        public readonly TextFrame2: TextFrame2;
        public readonly ThreeD: ThreeDFormat;
        public Title: string;
        public Top: number;
        public readonly Type: Office.MsoShapeType;
        public Ungroup(): ShapeRange;
        public UpgradeMedia(): void;
        public readonly VerticalFlip: Office.MsoTriState;
        public readonly Vertices: any;
        public Visible: Office.MsoTriState;
        public Width: number;
        public ZOrder(ZOrderCmd: Office.MsoZOrderCmd): void;
        public readonly ZOrderPosition: number;
    }

    class Shapes {
        private 'PowerPoint.Shapes_typekey': Shapes;
        private constructor();
        public AddCallout(Type: Office.MsoCalloutType, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddCanvas(Left: number, Top: number, Width: number, Height: number): Shape;

        /**
         * @param Office.XlChartType [Type=-1]
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddChart(Type?: Office.XlChartType, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=1.25]
         * @param number [Top=1.25]
         * @param number [Width=145.25]
         * @param number [Height=145.25]
         */
        public AddComment(Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        public AddConnector(Type: Office.MsoConnectorType, BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;
        public AddCurve(SafeArrayOfPoints: any): Shape;
        public AddDiagram(Type: Office.MsoDiagramType, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddLabel(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddLine(BeginX: number, BeginY: number, EndX: number, EndY: number): Shape;

        /**
         * @param number [Left=0]
         * @param number [Top=0]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddMediaObject(FileName: string, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param Office.MsoTriState [LinkToFile=0]
         * @param Office.MsoTriState [SaveWithDocument=-1]
         * @param number [Left=0]
         * @param number [Top=0]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddMediaObject2(FileName: string, LinkToFile?: Office.MsoTriState, SaveWithDocument?: Office.MsoTriState, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=0]
         * @param number [Top=0]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddMediaObjectFromEmbedTag(EmbedTag: string, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

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
        public AddOLEObject(
            Left?: number, Top?: number, Width?: number, Height?: number, ClassName?: string, FileName?: string, DisplayAsIcon?: Office.MsoTriState, IconFileName?: string,
            IconIndex?: number, IconLabel?: string, Link?: Office.MsoTriState): Shape;

        /**
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddPicture(FileName: string, LinkToFile: Office.MsoTriState, SaveWithDocument: Office.MsoTriState, Left: number, Top: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddPlaceholder(Type: PpPlaceholderType, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        public AddPolyline(SafeArrayOfPoints: any): Shape;
        public AddShape(Type: Office.MsoAutoShapeType, Left: number, Top: number, Width: number, Height: number): Shape;

        /**
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddSmartArt(Layout: Office.SmartArtLayout, Left?: number, Top?: number, Width?: number, Height?: number): Shape;

        /**
         * @param number [Left=-1]
         * @param number [Top=-1]
         * @param number [Width=-1]
         * @param number [Height=-1]
         */
        public AddTable(NumRows: number, NumColumns: number, Left?: number, Top?: number, Width?: number, Height?: number): Shape;
        public AddTextbox(Orientation: Office.MsoTextOrientation, Left: number, Top: number, Width: number, Height: number): Shape;
        public AddTextEffect(
            PresetTextEffect: Office.MsoPresetTextEffect, Text: string, FontName: string, FontSize: number, FontBold: Office.MsoTriState, FontItalic: Office.MsoTriState,
            Left: number, Top: number): Shape;
        public AddTitle(): Shape;
        public readonly Application: any;
        public BuildFreeform(EditingType: Office.MsoEditingType, X1: number, Y1: number): FreeformBuilder;
        public readonly Count: number;
        public readonly Creator: number;
        public readonly HasTitle: Office.MsoTriState;
        public Item(Index: any): Shape;
        public readonly Parent: any;
        public Paste(): ShapeRange;

        /**
         * @param PowerPoint.PpPasteDataType [DataType=0]
         * @param Office.MsoTriState [DisplayAsIcon=0]
         * @param string [IconFileName='']
         * @param number [IconIndex=0]
         * @param string [IconLabel='']
         * @param Office.MsoTriState [Link=0]
         */
        public PasteSpecial(DataType?: PpPasteDataType, DisplayAsIcon?: Office.MsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Office.MsoTriState): ShapeRange;
        public readonly Placeholders: Placeholders;
        public Range(Index?: any): ShapeRange;
        public SelectAll(): void;
        public readonly Title: Shape;
    }

    class Slide {
        private 'PowerPoint.Slide_typekey': Slide;
        private constructor();
        public readonly Application: Application;
        public ApplyTemplate(FileName: string): void;
        public ApplyTheme(themeName: string): void;
        public ApplyThemeColorScheme(themeColorSchemeName: string): void;
        public readonly Background: ShapeRange;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public ColorScheme: ColorScheme;
        public readonly Comments: Comments;
        public Copy(): void;
        public readonly CustomerData: CustomerData;
        public CustomLayout: CustomLayout;
        public Cut(): void;
        public Delete(): void;
        public Design: Design;
        public DisplayMasterShapes: Office.MsoTriState;
        public Duplicate(): SlideRange;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         */
        public Export(FileName: string, FilterName: string, ScaleWidth?: number, ScaleHeight?: number): void;
        public FollowMasterBackground: Office.MsoTriState;
        public readonly HasNotesPage: Office.MsoTriState;
        public readonly HeadersFooters: HeadersFooters;
        public readonly Hyperlinks: Hyperlinks;
        public Layout: PpSlideLayout;
        public readonly Master: Master;
        public MoveTo(toPos: number): void;
        public MoveToSectionStart(toSection: number): void;
        public Name: string;
        public readonly NotesPage: SlideRange;
        public readonly Parent: any;
        public readonly PrintSteps: number;

        /**
         * @param boolean [Overwrite=false]
         * @param boolean [UseSlideOrder=false]
         */
        public PublishSlides(SlideLibraryUrl: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;
        public readonly Scripts: Office.Scripts;
        public readonly sectionIndex: number;
        public readonly SectionNumber: number;
        public Select(): void;
        public readonly Shapes: Shapes;
        public readonly SlideID: number;
        public readonly SlideIndex: number;
        public readonly SlideNumber: number;
        public readonly SlideShowTransition: SlideShowTransition;
        public readonly Tags: Tags;
        public readonly ThemeColorScheme: Office.ThemeColorScheme;
        public readonly TimeLine: TimeLine;
    }

    class SlideRange {
        private 'PowerPoint.SlideRange_typekey': SlideRange;
        private constructor();
        public readonly Application: Application;
        public ApplyTemplate(FileName: string): void;
        public ApplyTheme(themeName: string): void;
        public ApplyThemeColorScheme(themeColorSchemeName: string): void;
        public readonly Background: ShapeRange;
        public BackgroundStyle: Office.MsoBackgroundStyleIndex;
        public ColorScheme: ColorScheme;
        public readonly Comments: Comments;
        public Copy(): void;
        public readonly Count: number;
        public readonly CustomerData: CustomerData;
        public CustomLayout: CustomLayout;
        public Cut(): void;
        public Delete(): void;
        public Design: Design;
        public DisplayMasterShapes: Office.MsoTriState;
        public Duplicate(): SlideRange;

        /**
         * @param number [ScaleWidth=0]
         * @param number [ScaleHeight=0]
         */
        public Export(FileName: string, FilterName: string, ScaleWidth?: number, ScaleHeight?: number): void;
        public FollowMasterBackground: Office.MsoTriState;
        public readonly HasNotesPage: Office.MsoTriState;
        public readonly HeadersFooters: HeadersFooters;
        public readonly Hyperlinks: Hyperlinks;
        public Item(Index: any): Slide;
        public Layout: PpSlideLayout;
        public readonly Master: Master;
        public MoveTo(toPos: number): void;
        public MoveToSectionStart(toSection: number): void;
        public Name: string;
        public readonly NotesPage: SlideRange;
        public readonly Parent: any;
        public readonly PrintSteps: number;

        /**
         * @param boolean [Overwrite=false]
         * @param boolean [UseSlideOrder=false]
         */
        public PublishSlides(SlideLibraryUrl: string, Overwrite?: boolean, UseSlideOrder?: boolean): void;
        public readonly Scripts: Office.Scripts;
        public readonly sectionIndex: number;
        public readonly SectionNumber: number;
        public Select(): void;
        public readonly Shapes: Shapes;
        public readonly SlideID: number;
        public readonly SlideIndex: number;
        public readonly SlideNumber: number;
        public readonly SlideShowTransition: SlideShowTransition;
        public readonly Tags: Tags;
        public readonly ThemeColorScheme: Office.ThemeColorScheme;
        public readonly TimeLine: TimeLine;
    }

    class Slides {
        private 'PowerPoint.Slides_typekey': Slides;
        private constructor();
        public Add(Index: number, Layout: PpSlideLayout): Slide;
        public AddSlide(Index: number, pCustomLayout: CustomLayout): Slide;
        public readonly Application: Application;
        public readonly Count: number;
        public FindBySlideID(SlideID: number): Slide;

        /**
         * @param number [SlideStart=1]
         * @param number [SlideEnd=-1]
         */
        public InsertFromFile(FileName: string, Index: number, SlideStart?: number, SlideEnd?: number): number;
        public Item(Index: any): Slide;
        public readonly Parent: any;

        /** @param number [Index=-1] */
        public Paste(Index?: number): SlideRange;
        public Range(Index?: any): SlideRange;
    }

    class SlideShowSettings {
        private 'PowerPoint.SlideShowSettings_typekey': SlideShowSettings;
        private constructor();
        public AdvanceMode: PpSlideShowAdvanceMode;
        public readonly Application: Application;
        public EndingSlide: number;
        public LoopUntilStopped: Office.MsoTriState;
        public readonly NamedSlideShows: NamedSlideShows;
        public readonly Parent: any;
        public readonly PointerColor: ColorFormat;
        public RangeType: PpSlideShowRangeType;
        public Run(): SlideShowWindow;
        public ShowMediaControls: Office.MsoTriState;
        public ShowPresenterView: Office.MsoTriState;
        public ShowScrollbar: Office.MsoTriState;
        public ShowType: PpSlideShowType;
        public ShowWithAnimation: Office.MsoTriState;
        public ShowWithNarration: Office.MsoTriState;
        public SlideShowName: string;
        public StartingSlide: number;
    }

    class SlideShowTransition {
        private 'PowerPoint.SlideShowTransition_typekey': SlideShowTransition;
        private constructor();
        public AdvanceOnClick: Office.MsoTriState;
        public AdvanceOnTime: Office.MsoTriState;
        public AdvanceTime: number;
        public readonly Application: Application;
        public Duration: number;
        public EntryEffect: PpEntryEffect;
        public Hidden: Office.MsoTriState;
        public LoopSoundUntilNext: Office.MsoTriState;
        public readonly Parent: any;
        public readonly SoundEffect: SoundEffect;
        public Speed: PpTransitionSpeed;
    }

    class SlideShowView {
        private 'PowerPoint.SlideShowView_typekey': SlideShowView;
        private constructor();
        public AcceleratorsEnabled: Office.MsoTriState;
        public readonly AdvanceMode: PpSlideShowAdvanceMode;
        public readonly Application: Application;
        public readonly CurrentShowPosition: number;
        public DrawLine(BeginX: number, BeginY: number, EndX: number, EndY: number): void;
        public EndNamedShow(): void;
        public EraseDrawing(): void;
        public Exit(): void;
        public First(): void;
        public FirstAnimationIsAutomatic(): boolean;
        public GetClickCount(): number;
        public GetClickIndex(): number;
        public GotoClick(Index: number): void;
        public GotoNamedShow(SlideShowName: string): void;

        /** @param Office.MsoTriState [ResetSlide=-1] */
        public GotoSlide(Index: number, ResetSlide?: Office.MsoTriState): void;
        public InstallTracker(pTracker: MouseTracker, Presenter: Office.MsoTriState): void;
        public readonly IsNamedShow: Office.MsoTriState;
        public Last(): void;
        public readonly LastSlideViewed: Slide;
        public readonly MediaControlsHeight: number;
        public readonly MediaControlsLeft: number;
        public readonly MediaControlsTop: number;
        public readonly MediaControlsVisible: Office.MsoTriState;
        public readonly MediaControlsWidth: number;
        public Next(): void;
        public readonly Parent: any;
        public Player(ShapeId: any): Player;
        public readonly PointerColor: ColorFormat;
        public PointerType: PpSlideShowPointerType;
        public readonly PresentationElapsedTime: number;
        public Previous(): void;
        public ResetSlideTime(): void;
        public readonly Slide: Slide;
        public SlideElapsedTime: number;
        public readonly SlideShowName: string;
        public State: PpSlideShowState;
        public readonly Zoom: number;
    }

    class SlideShowWindow {
        private 'PowerPoint.SlideShowWindow_typekey': SlideShowWindow;
        private constructor();
        public Activate(): void;
        public readonly Active: Office.MsoTriState;
        public readonly Application: Application;
        public Height: number;
        public readonly IsFullScreen: Office.MsoTriState;
        public Left: number;
        public readonly Parent: any;
        public readonly Presentation: Presentation;
        public Top: number;
        public readonly View: SlideShowView;
        public Width: number;
    }

    class SlideShowWindows {
        private 'PowerPoint.SlideShowWindows_typekey': SlideShowWindows;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Index: number): SlideShowWindow;
        public readonly Parent: any;
    }

    class SoundEffect {
        private 'PowerPoint.SoundEffect_typekey': SoundEffect;
        private constructor();
        public readonly Application: Application;
        public ImportFromFile(FileName: string): void;
        public Name: string;
        public readonly Parent: any;
        public Play(): void;
        public Type: PpSoundEffectType;
    }

    class SoundFormat {
        private 'PowerPoint.SoundFormat_typekey': SoundFormat;
        private constructor();
        public Export(FileName: string): PpSoundFormatType;
        public Import(FileName: string): void;
        public Play(): void;
        public readonly SourceFullName: string;
        public readonly Type: PpSoundFormatType;
    }

    class Table {
        private 'PowerPoint.Table_typekey': Table;
        private constructor();
        public AlternativeText: string;
        public readonly Application: Application;

        /**
         * @param string [StyleID='']
         * @param boolean [SaveFormatting=false]
         */
        public ApplyStyle(StyleID?: string, SaveFormatting?: boolean): void;
        public readonly Background: TableBackground;
        public Cell(Row: number, Column: number): Cell;
        public readonly Columns: Columns;
        public FirstCol: boolean;
        public FirstRow: boolean;
        public HorizBanding: boolean;
        public LastCol: boolean;
        public LastRow: boolean;
        public MergeBorders(): void;
        public readonly Parent: any;
        public readonly Rows: Rows;
        public ScaleProportionally(scale: number): void;
        public readonly Style: TableStyle;
        public TableDirection: PpDirection;
        public Title: string;
        public VertBanding: boolean;
    }

    class TableBackground {
        private 'PowerPoint.TableBackground_typekey': TableBackground;
        private constructor();
        public readonly Fill: FillFormat;
        public readonly Picture: PictureFormat;
        public readonly Reflection: Office.ReflectionFormat;
        public readonly Shadow: ShadowFormat;
    }

    class TableStyle {
        private 'PowerPoint.TableStyle_typekey': TableStyle;
        private constructor();
        public readonly Id: string;
        public readonly Name: string;
    }

    class TabStop {
        private 'PowerPoint.TabStop_typekey': TabStop;
        private constructor();
        public readonly Application: Application;
        public Clear(): void;
        public readonly Parent: any;
        public Position: number;
        public Type: PpTabStopType;
    }

    class TabStops {
        private 'PowerPoint.TabStops_typekey': TabStops;
        private constructor();
        public Add(Type: PpTabStopType, Position: number): TabStop;
        public readonly Application: Application;
        public readonly Count: number;
        public DefaultSpacing: number;
        public Item(Index: number): TabStop;
        public readonly Parent: any;
    }

    class Tags {
        private 'PowerPoint.Tags_typekey': Tags;
        private constructor();
        public Add(Name: string, Value: string): void;
        public AddBinary(Name: string, FilePath: string): void;
        public readonly Application: Application;
        public BinaryValue(Name: string): number;
        public readonly Count: number;
        public Delete(Name: string): void;
        public Item(Name: string): string;
        public Name(Index: number): string;
        public readonly Parent: any;
        public Value(Index: number): string;
    }

    class TextEffectFormat {
        private 'PowerPoint.TextEffectFormat_typekey': TextEffectFormat;
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
        private 'PowerPoint.TextFrame_typekey': TextFrame;
        private constructor();
        public readonly Application: any;
        public AutoSize: PpAutoSize;
        public readonly Creator: number;
        public DeleteText(): void;
        public readonly HasText: Office.MsoTriState;
        public HorizontalAnchor: Office.MsoHorizontalAnchor;
        public MarginBottom: number;
        public MarginLeft: number;
        public MarginRight: number;
        public MarginTop: number;
        public Orientation: Office.MsoTextOrientation;
        public readonly Parent: any;
        public readonly Ruler: Ruler;
        public readonly TextRange: TextRange;
        public VerticalAnchor: Office.MsoVerticalAnchor;
        public WordWrap: Office.MsoTriState;
    }

    class TextFrame2 {
        private 'PowerPoint.TextFrame2_typekey': TextFrame2;
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
        public WordArtFormat: Office.MsoPresetTextEffect;
        public WordWrap: Office.MsoTriState;
    }

    class TextRange {
        private 'PowerPoint.TextRange_typekey': TextRange;
        private constructor();
        public readonly ActionSettings: ActionSettings;
        public AddPeriods(): void;
        public readonly Application: Application;
        public readonly BoundHeight: number;
        public readonly BoundLeft: number;
        public readonly BoundTop: number;
        public readonly BoundWidth: number;
        public ChangeCase(Type: PpChangeCase): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        public Characters(Start?: number, Length?: number): TextRange;
        public Copy(): void;
        public readonly Count: number;
        public Cut(): void;
        public Delete(): void;

        /**
         * @param number [After=0]
         * @param Office.MsoTriState [MatchCase=0]
         * @param Office.MsoTriState [WholeWords=0]
         */
        public Find(FindWhat: string, After?: number, MatchCase?: Office.MsoTriState, WholeWords?: Office.MsoTriState): TextRange;
        public readonly Font: Font;
        public IndentLevel: number;

        /** @param string [NewText=''] */
        public InsertAfter(NewText?: string): TextRange;

        /** @param string [NewText=''] */
        public InsertBefore(NewText?: string): TextRange;

        /** @param Office.MsoTriState [InsertAsField=0] */
        public InsertDateTime(DateTimeFormat: PpDateTimeFormat, InsertAsField?: Office.MsoTriState): TextRange;
        public InsertSlideNumber(): TextRange;

        /** @param Office.MsoTriState [Unicode=0] */
        public InsertSymbol(FontName: string, CharNumber: number, Unicode?: Office.MsoTriState): TextRange;
        public LanguageID: Office.MsoLanguageID;
        public readonly Length: number;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        public Lines(Start?: number, Length?: number): TextRange;
        public LtrRun(): void;
        public readonly ParagraphFormat: ParagraphFormat;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        public Paragraphs(Start?: number, Length?: number): TextRange;
        public readonly Parent: any;
        public Paste(): TextRange;

        /**
         * @param PowerPoint.PpPasteDataType [DataType=0]
         * @param Office.MsoTriState [DisplayAsIcon=0]
         * @param string [IconFileName='']
         * @param number [IconIndex=0]
         * @param string [IconLabel='']
         * @param Office.MsoTriState [Link=0]
         */
        public PasteSpecial(DataType?: PpPasteDataType, DisplayAsIcon?: Office.MsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Office.MsoTriState): TextRange;
        public RemovePeriods(): void;

        /**
         * @param number [After=0]
         * @param Office.MsoTriState [MatchCase=0]
         * @param Office.MsoTriState [WholeWords=0]
         */
        public Replace(FindWhat: string, ReplaceWhat: string, After?: number, MatchCase?: Office.MsoTriState, WholeWords?: Office.MsoTriState): TextRange;
        public RotatedBounds(X1: number, Y1: number, X2: number, Y2: number, X3: number, Y3: number, x4: number, y4: number): void;
        public RtlRun(): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        public Runs(Start?: number, Length?: number): TextRange;
        public Select(): void;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        public Sentences(Start?: number, Length?: number): TextRange;
        public readonly Start: number;
        public Text: string;
        public TrimText(): TextRange;

        /**
         * @param number [Start=-1]
         * @param number [Length=-1]
         */
        public Words(Start?: number, Length?: number): TextRange;
    }

    class TextStyle {
        private 'PowerPoint.TextStyle_typekey': TextStyle;
        private constructor();
        public readonly Application: Application;
        public readonly Levels: TextStyleLevels;
        public readonly Parent: any;
        public readonly Ruler: Ruler;
        public readonly TextFrame: TextFrame;
    }

    class TextStyleLevel {
        private 'PowerPoint.TextStyleLevel_typekey': TextStyleLevel;
        private constructor();
        public readonly Application: Application;
        public readonly Font: Font;
        public readonly ParagraphFormat: ParagraphFormat;
        public readonly Parent: any;
    }

    class TextStyleLevels {
        private 'PowerPoint.TextStyleLevels_typekey': TextStyleLevels;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Level: number): TextStyleLevel;
        public readonly Parent: any;
    }

    class TextStyles {
        private 'PowerPoint.TextStyles_typekey': TextStyles;
        private constructor();
        public readonly Application: Application;
        public readonly Count: number;
        public Item(Type: PpTextStyleType): TextStyle;
        public readonly Parent: any;
    }

    class ThreeDFormat {
        private 'PowerPoint.ThreeDFormat_typekey': ThreeDFormat;
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
        private 'PowerPoint.TickLabels_typekey': TickLabels;
        private constructor();
        public Alignment: number;
        public readonly Application: Application;
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

    class TimeLine {
        private 'PowerPoint.TimeLine_typekey': TimeLine;
        private constructor();
        public readonly Application: Application;
        public readonly InteractiveSequences: Sequences;
        public readonly MainSequence: Sequence;
        public readonly Parent: any;
    }

    class Timing {
        private 'PowerPoint.Timing_typekey': Timing;
        private constructor();
        public Accelerate: number;
        public readonly Application: Application;
        public AutoReverse: Office.MsoTriState;
        public BounceEnd: Office.MsoTriState;
        public BounceEndIntensity: number;
        public Decelerate: number;
        public Duration: number;
        public readonly Parent: any;
        public RepeatCount: number;
        public RepeatDuration: number;
        public Restart: MsoAnimEffectRestart;
        public RewindAtEnd: Office.MsoTriState;
        public SmoothEnd: Office.MsoTriState;
        public SmoothStart: Office.MsoTriState;
        public Speed: number;
        public TriggerBookmark: string;
        public TriggerDelayTime: number;
        public TriggerShape: Shape;
        public TriggerType: MsoAnimTriggerType;
    }

    class UpBars {
        private 'PowerPoint.UpBars_typekey': UpBars;
        private constructor();
        public readonly Application: Application;
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

    class View {
        private 'PowerPoint.View_typekey': View;
        private constructor();
        public readonly Application: Application;
        public DisplaySlideMiniature: Office.MsoTriState;
        public GotoSlide(Index: number): void;
        public readonly MediaControlsHeight: number;
        public readonly MediaControlsLeft: number;
        public readonly MediaControlsTop: number;
        public readonly MediaControlsVisible: Office.MsoTriState;
        public readonly MediaControlsWidth: number;
        public readonly Parent: any;
        public Paste(): void;

        /**
         * @param PowerPoint.PpPasteDataType [DataType=0]
         * @param Office.MsoTriState [DisplayAsIcon=0]
         * @param string [IconFileName='']
         * @param number [IconIndex=0]
         * @param string [IconLabel='']
         * @param Office.MsoTriState [Link=0]
         */
        public PasteSpecial(DataType?: PpPasteDataType, DisplayAsIcon?: Office.MsoTriState, IconFileName?: string, IconIndex?: number, IconLabel?: string, Link?: Office.MsoTriState): void;
        public Player(ShapeId: any): Player;
        public readonly PrintOptions: PrintOptions;

        /**
         * @param number [From=-1]
         * @param number [To=-1]
         * @param string [PrintToFile='']
         * @param number [Copies=0]
         * @param Office.MsoTriState [Collate=-99]
         */
        public PrintOut(From?: number, To?: number, PrintToFile?: string, Copies?: number, Collate?: Office.MsoTriState): void;
        public Slide: any;
        public readonly Type: PpViewType;
        public Zoom: number;
        public ZoomToFit: Office.MsoTriState;
    }

    class Walls {
        private 'PowerPoint.Walls_typekey': Walls;
        private constructor();
        public readonly Application: Application;
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
        private 'PowerPoint.WebOptions_typekey': WebOptions;
        private constructor();
        public AllowPNG: Office.MsoTriState;
        public Encoding: Office.MsoEncoding;
        public readonly FolderSuffix: string;
        public FrameColors: PpFrameColors;
        public HTMLVersion: PpHTMLVersion;
        public IncludeNavigation: Office.MsoTriState;
        public OrganizeInFolder: Office.MsoTriState;
        public RelyOnVML: Office.MsoTriState;
        public ResizeGraphics: Office.MsoTriState;
        public ScreenSize: Office.MsoScreenSize;
        public ShowSlideAnimation: Office.MsoTriState;
        public TargetBrowser: Office.MsoTargetBrowser;
        public UseDefaultFolderSuffix(): void;
        public UseLongFileNames: Office.MsoTriState;
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
    new<K extends keyof ActiveXObjectNameMap = any>(progid: K): ActiveXObjectNameMap[K];
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
