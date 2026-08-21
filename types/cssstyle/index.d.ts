export class CSSStyleDeclaration {
    constructor(onChangeCallback?: ((text: string) => void) | null);

    item(index: number): string;
    getPropertyValue(name: string): string;
    getPropertyPriority(name: string): string;
    setProperty(name: string, value: string | null, priority?: string | null): void;
    removeProperty(name: string): string;

    cssText: string;
    readonly length: number;
    readonly parentRule: object | null;
    cssFloat: string | null;
    [index: number]: string;

    // https://drafts.csswg.org/cssom/#ref-for-cssstyledeclaration④
    /** @deprecated */
    WebkitAnimation: string;
    /** @deprecated */
    WebkitAnimationDelay: string;
    /** @deprecated */
    WebkitAnimationDirection: string;
    /** @deprecated */
    WebkitAnimationDuration: string;
    /** @deprecated */
    WebkitAnimationFillMode: string;
    /** @deprecated */
    WebkitAnimationIterationCount: string;
    /** @deprecated */
    WebkitAnimationName: string;
    /** @deprecated */
    WebkitAnimationPlayState: string;
    /** @deprecated */
    WebkitAnimationTimingFunction: string;
    /** @deprecated */
    WebkitAppearance: string;
    /** @deprecated */
    WebkitAspectRatio: string;
    /** @deprecated */
    WebkitBackfaceVisibility: string;
    /** @deprecated */
    WebkitBackgroundClip: string;
    /** @deprecated */
    WebkitBackgroundComposite: string;
    /** @deprecated */
    WebkitBackgroundOrigin: string;
    /** @deprecated */
    WebkitBackgroundSize: string;
    /** @deprecated */
    WebkitBorderAfter: string;
    /** @deprecated */
    WebkitBorderAfterColor: string;
    /** @deprecated */
    WebkitBorderAfterStyle: string;
    /** @deprecated */
    WebkitBorderAfterWidth: string;
    /** @deprecated */
    WebkitBorderBefore: string;
    /** @deprecated */
    WebkitBorderBeforeColor: string;
    /** @deprecated */
    WebkitBorderBeforeStyle: string;
    /** @deprecated */
    WebkitBorderBeforeWidth: string;
    /** @deprecated */
    WebkitBorderEnd: string;
    /** @deprecated */
    WebkitBorderEndColor: string;
    /** @deprecated */
    WebkitBorderEndStyle: string;
    /** @deprecated */
    WebkitBorderEndWidth: string;
    /** @deprecated */
    WebkitBorderFit: string;
    /** @deprecated */
    WebkitBorderHorizontalSpacing: string;
    /** @deprecated */
    WebkitBorderImage: string;
    /** @deprecated */
    WebkitBorderRadius: string;
    /** @deprecated */
    WebkitBorderStart: string;
    /** @deprecated */
    WebkitBorderStartColor: string;
    /** @deprecated */
    WebkitBorderStartStyle: string;
    /** @deprecated */
    WebkitBorderStartWidth: string;
    /** @deprecated */
    WebkitBorderVerticalSpacing: string;
    /** @deprecated */
    WebkitBoxAlign: string;
    /** @deprecated */
    WebkitBoxDirection: string;
    /** @deprecated */
    WebkitBoxFlex: string;
    /** @deprecated */
    WebkitBoxFlexGroup: string;
    /** @deprecated */
    WebkitBoxLines: string;
    /** @deprecated */
    WebkitBoxOrdinalGroup: string;
    /** @deprecated */
    WebkitBoxOrient: string;
    /** @deprecated */
    WebkitBoxPack: string;
    /** @deprecated */
    WebkitBoxReflect: string;
    /** @deprecated */
    WebkitBoxShadow: string;
    /** @deprecated */
    WebkitColorCorrection: string;
    /** @deprecated */
    WebkitColumnAxis: string;
    /** @deprecated */
    WebkitColumnBreakAfter: string;
    /** @deprecated */
    WebkitColumnBreakBefore: string;
    /** @deprecated */
    WebkitColumnBreakInside: string;
    /** @deprecated */
    WebkitColumnCount: string;
    /** @deprecated */
    WebkitColumnGap: string;
    /** @deprecated */
    WebkitColumnRule: string;
    /** @deprecated */
    WebkitColumnRuleColor: string;
    /** @deprecated */
    WebkitColumnRuleStyle: string;
    /** @deprecated */
    WebkitColumnRuleWidth: string;
    /** @deprecated */
    WebkitColumnSpan: string;
    /** @deprecated */
    WebkitColumnWidth: string;
    /** @deprecated */
    WebkitColumns: string;
    /** @deprecated */
    WebkitFilter: string;
    /** @deprecated */
    WebkitFlexAlign: string;
    /** @deprecated */
    WebkitFlexDirection: string;
    /** @deprecated */
    WebkitFlexFlow: string;
    /** @deprecated */
    WebkitFlexItemAlign: string;
    /** @deprecated */
    WebkitFlexLinePack: string;
    /** @deprecated */
    WebkitFlexOrder: string;
    /** @deprecated */
    WebkitFlexPack: string;
    /** @deprecated */
    WebkitFlexWrap: string;
    /** @deprecated */
    WebkitFlowFrom: string;
    /** @deprecated */
    WebkitFlowInto: string;
    /** @deprecated */
    WebkitFontFeatureSettings: string;
    /** @deprecated */
    WebkitFontKerning: string;
    /** @deprecated */
    WebkitFontSizeDelta: string;
    /** @deprecated */
    WebkitFontSmoothing: string;
    /** @deprecated */
    WebkitFontVariantLigatures: string;
    /** @deprecated */
    WebkitHighlight: string;
    /** @deprecated */
    WebkitHyphenateCharacter: string;
    /** @deprecated */
    WebkitHyphenateLimitAfter: string;
    /** @deprecated */
    WebkitHyphenateLimitBefore: string;
    /** @deprecated */
    WebkitHyphenateLimitLines: string;
    /** @deprecated */
    WebkitHyphens: string;
    /** @deprecated */
    WebkitLineAlign: string;
    /** @deprecated */
    WebkitLineBoxContain: string;
    /** @deprecated */
    WebkitLineBreak: string;
    /** @deprecated */
    WebkitLineClamp: string;
    /** @deprecated */
    WebkitLineGrid: string;
    /** @deprecated */
    WebkitLineSnap: string;
    /** @deprecated */
    WebkitLocale: string;
    /** @deprecated */
    WebkitLogicalHeight: string;
    /** @deprecated */
    WebkitLogicalWidth: string;
    /** @deprecated */
    WebkitMarginAfter: string;
    /** @deprecated */
    WebkitMarginAfterCollapse: string;
    /** @deprecated */
    WebkitMarginBefore: string;
    /** @deprecated */
    WebkitMarginBeforeCollapse: string;
    /** @deprecated */
    WebkitMarginBottomCollapse: string;
    /** @deprecated */
    WebkitMarginCollapse: string;
    /** @deprecated */
    WebkitMarginEnd: string;
    /** @deprecated */
    WebkitMarginStart: string;
    /** @deprecated */
    WebkitMarginTopCollapse: string;
    /** @deprecated */
    WebkitMarquee: string;
    /** @deprecated */
    WebkitMarqueeDirection: string;
    /** @deprecated */
    WebkitMarqueeIncrement: string;
    /** @deprecated */
    WebkitMarqueeRepetition: string;
    /** @deprecated */
    WebkitMarqueeSpeed: string;
    /** @deprecated */
    WebkitMarqueeStyle: string;
    /** @deprecated */
    WebkitMask: string;
    /** @deprecated */
    WebkitMaskAttachment: string;
    /** @deprecated */
    WebkitMaskBoxImage: string;
    /** @deprecated */
    WebkitMaskBoxImageOutset: string;
    /** @deprecated */
    WebkitMaskBoxImageRepeat: string;
    /** @deprecated */
    WebkitMaskBoxImageSlice: string;
    /** @deprecated */
    WebkitMaskBoxImageSource: string;
    /** @deprecated */
    WebkitMaskBoxImageWidth: string;
    /** @deprecated */
    WebkitMaskClip: string;
    /** @deprecated */
    WebkitMaskComposite: string;
    /** @deprecated */
    WebkitMaskImage: string;
    /** @deprecated */
    WebkitMaskOrigin: string;
    /** @deprecated */
    WebkitMaskPosition: string;
    /** @deprecated */
    WebkitMaskPositionX: string;
    /** @deprecated */
    WebkitMaskPositionY: string;
    /** @deprecated */
    WebkitMaskRepeat: string;
    /** @deprecated */
    WebkitMaskRepeatX: string;
    /** @deprecated */
    WebkitMaskRepeatY: string;
    /** @deprecated */
    WebkitMaskSize: string;
    /** @deprecated */
    WebkitMatchNearestMailBlockquoteColor: string;
    /** @deprecated */
    WebkitMaxLogicalHeight: string;
    /** @deprecated */
    WebkitMaxLogicalWidth: string;
    /** @deprecated */
    WebkitMinLogicalHeight: string;
    /** @deprecated */
    WebkitMinLogicalWidth: string;
    /** @deprecated */
    WebkitNbspMode: string;
    /** @deprecated */
    WebkitOverflowScrolling: string;
    /** @deprecated */
    WebkitPaddingAfter: string;
    /** @deprecated */
    WebkitPaddingBefore: string;
    /** @deprecated */
    WebkitPaddingEnd: string;
    /** @deprecated */
    WebkitPaddingStart: string;
    /** @deprecated */
    WebkitPerspective: string;
    /** @deprecated */
    WebkitPerspectiveOrigin: string;
    /** @deprecated */
    WebkitPerspectiveOriginX: string;
    /** @deprecated */
    WebkitPerspectiveOriginY: string;
    /** @deprecated */
    WebkitPrintColorAdjust: string;
    /** @deprecated */
    WebkitRegionBreakAfter: string;
    /** @deprecated */
    WebkitRegionBreakBefore: string;
    /** @deprecated */
    WebkitRegionBreakInside: string;
    /** @deprecated */
    WebkitRegionOverflow: string;
    /** @deprecated */
    WebkitRtlOrdering: string;
    /** @deprecated */
    WebkitSvgShadow: string;
    /** @deprecated */
    WebkitTapHighlightColor: string;
    /** @deprecated */
    WebkitTextCombine: string;
    /** @deprecated */
    WebkitTextDecorationsInEffect: string;
    /** @deprecated */
    WebkitTextEmphasis: string;
    /** @deprecated */
    WebkitTextEmphasisColor: string;
    /** @deprecated */
    WebkitTextEmphasisPosition: string;
    /** @deprecated */
    WebkitTextEmphasisStyle: string;
    /** @deprecated */
    WebkitTextFillColor: string;
    /** @deprecated */
    WebkitTextOrientation: string;
    /** @deprecated */
    WebkitTextSecurity: string;
    /** @deprecated */
    WebkitTextSizeAdjust: string;
    /** @deprecated */
    WebkitTextStroke: string;
    /** @deprecated */
    WebkitTextStrokeColor: string;
    /** @deprecated */
    WebkitTextStrokeWidth: string;
    /** @deprecated */
    WebkitTransform: string;
    /** @deprecated */
    WebkitTransformOrigin: string;
    /** @deprecated */
    WebkitTransformOriginX: string;
    /** @deprecated */
    WebkitTransformOriginY: string;
    /** @deprecated */
    WebkitTransformOriginZ: string;
    /** @deprecated */
    WebkitTransformStyle: string;
    /** @deprecated */
    WebkitTransition: string;
    /** @deprecated */
    WebkitTransitionDelay: string;
    /** @deprecated */
    WebkitTransitionDuration: string;
    /** @deprecated */
    WebkitTransitionProperty: string;
    /** @deprecated */
    WebkitTransitionTimingFunction: string;
    /** @deprecated */
    WebkitUserDrag: string;
    /** @deprecated */
    WebkitUserModify: string;
    /** @deprecated */
    WebkitUserSelect: string;
    /** @deprecated */
    WebkitWrap: string;
    /** @deprecated */
    WebkitWrapFlow: string;
    /** @deprecated */
    WebkitWrapMargin: string;
    /** @deprecated */
    WebkitWrapPadding: string;
    /** @deprecated */
    WebkitWrapShapeInside: string;
    /** @deprecated */
    WebkitWrapShapeOutside: string;
    /** @deprecated */
    WebkitWrapThrough: string;
    /** @deprecated */
    WebkitWritingMode: string;
    /** @deprecated */
    WebkitZoom: string;

    alignContent: string;
    alignItems: string;
    alignSelf: string;
    alignmentBaseline: string;
    all: string;
    animation: string;
    animationDelay: string;
    animationDirection: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    appearance: string;
    azimuth: string;
    background: string;
    backgroundAttachment: string;
    backgroundBlendMode: string;
    backgroundClip: string;
    backgroundColor: string;
    backgroundImage: string;
    backgroundOrigin: string;
    backgroundPosition: string;
    backgroundPositionX: string;
    backgroundPositionY: string;
    backgroundRepeat: string;
    backgroundRepeatX: string;
    backgroundRepeatY: string;
    backgroundSize: string;
    baselineShift: string;
    blockOverflow: string;
    blockSize: string;
    bookmarkLabel: string;
    bookmarkLevel: string;
    bookmarkState: string;
    border: string;
    borderBlock: string;
    borderBlockColor: string;
    borderBlockEnd: string;
    borderBlockEndColor: string;
    borderBlockEndStyle: string;
    borderBlockEndWidth: string;
    borderBlockStart: string;
    borderBlockStartColor: string;
    borderBlockStartStyle: string;
    borderBlockStartWidth: string;
    borderBlockStyle: string;
    borderBlockWidth: string;
    borderBottom: string;
    borderBottomColor: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
    borderBottomStyle: string;
    borderBottomWidth: string;
    borderBoundary: string;
    borderCollapse: string;
    borderColor: string;
    borderEndEndRadius: string;
    borderEndStartRadius: string;
    borderImage: string;
    borderImageOutset: string;
    borderImageRepeat: string;
    borderImageSlice: string;
    borderImageSource: string;
    borderImageWidth: string;
    borderInline: string;
    borderInlineColor: string;
    borderInlineEnd: string;
    borderInlineEndColor: string;
    borderInlineEndStyle: string;
    borderInlineEndWidth: string;
    borderInlineStart: string;
    borderInlineStartColor: string;
    borderInlineStartStyle: string;
    borderInlineStartWidth: string;
    borderInlineStyle: string;
    borderInlineWidth: string;
    borderLeft: string;
    borderLeftColor: string;
    borderLeftStyle: string;
    borderLeftWidth: string;
    borderRadius: string;
    borderRight: string;
    borderRightColor: string;
    borderRightStyle: string;
    borderRightWidth: string;
    borderSpacing: string;
    borderStartEndRadius: string;
    borderStartStartRadius: string;
    borderStyle: string;
    borderTop: string;
    borderTopColor: string;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    borderTopStyle: string;
    borderTopWidth: string;
    borderWidth: string;
    bottom: string;
    boxDecorationBreak: string;
    boxShadow: string;
    boxSizing: string;
    boxSnap: string;
    breakAfter: string;
    breakBefore: string;
    breakInside: string;
    captionSide: string;
    caret: string;
    caretColor: string;
    caretShape: string;
    chains: string;
    clear: string;
    clip: string;
    clipPath: string;
    clipRule: string;
    color: string;
    colorAdjust: string;
    colorInterpolation: string;
    colorInterpolationFilters: string;
    colorProfile: string;
    colorRendering: string;
    colorScheme: string;
    columnCount: string;
    columnFill: string;
    columnGap: string;
    columnRule: string;
    columnRuleColor: string;
    columnRuleStyle: string;
    columnRuleWidth: string;
    columnSpan: string;
    columnWidth: string;
    columns: string;
    contain: string;
    content: string;
    continue: string;
    counterIncrement: string;
    counterReset: string;
    counterSet: string;
    cue: string;
    cueAfter: string;
    cueBefore: string;
    cursor: string;
    direction: string;
    display: string;
    dominantBaseline: string;
    elevation: string;
    emptyCells: string;
    enableBackground: string;
    fill: string;
    fillOpacity: string;
    fillRule: string;
    filter: string;
    flex: string;
    flexBasis: string;
    flexDirection: string;
    flexFlow: string;
    flexGrow: string;
    flexShrink: string;
    flexWrap: string;
    float: string;
    floodColor: string;
    floodOpacity: string;
    flow: string;
    flowFrom: string;
    flowInto: string;
    font: string;
    fontFamily: string;
    fontFeatureSettings: string;
    fontKerning: string;
    fontLanguageOverride: string;
    fontOpticalSizing: string;
    fontPalette: string;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: string;
    fontSynthesis: string;
    fontSynthesisSmallCaps: string;
    fontSynthesisStyle: string;
    fontSynthesisWeight: string;
    fontVariant: string;
    fontVariantAlternates: string;
    fontVariantCaps: string;
    fontVariantEastAsian: string;
    fontVariantEmoji: string;
    fontVariantLigatures: string;
    fontVariantNumeric: string;
    fontVariantPosition: string;
    fontVariationSettings: string;
    fontWeight: string;
    footnoteDisplay: string;
    footnotePolicy: string;
    forcedColorAdjust: string;
    gap: string;
    glyphOrientationHorizontal: string;
    glyphOrientationVertical: string;
    grid: string;
    gridArea: string;
    gridAutoColumns: string;
    gridAutoFlow: string;
    gridAutoRows: string;
    gridColumn: string;
    gridColumnEnd: string;
    gridColumnStart: string;
    gridRow: string;
    gridRowEnd: string;
    gridRowStart: string;
    gridTemplate: string;
    gridTemplateAreas: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    hangingPunctuation: string;
    height: string;
    hyphenateCharacter: string;
    hyphenateLimitChars: string;
    hyphenateLimitLast: string;
    hyphenateLimitLines: string;
    hyphenateLimitZone: string;
    hyphens: string;
    imageOrientation: string;
    imageRendering: string;
    imageResolution: string;
    initialLetters: string;
    initialLettersAlign: string;
    initialLettersWrap: string;
    inlineSize: string;
    inlineSizing: string;
    inset: string;
    insetBlock: string;
    insetBlockEnd: string;
    insetBlockStart: string;
    insetInline: string;
    insetInlineEnd: string;
    insetInlineStart: string;
    isolation: string;
    justifyContent: string;
    justifyItems: string;
    justifySelf: string;
    kerning: string;
    left: string;
    letterSpacing: string;
    lightingColor: string;
    lineBreak: string;
    lineClamp: string;
    lineGrid: string;
    lineHeight: string;
    linePadding: string;
    lineSnap: string;
    listStyle: string;
    listStyleImage: string;
    listStylePosition: string;
    listStyleType: string;
    margin: string;
    marginBlock: string;
    marginBlockEnd: string;
    marginBlockStart: string;
    marginBottom: string;
    marginInline: string;
    marginInlineEnd: string;
    marginInlineStart: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    marginTrim: string;
    marker: string;
    markerEnd: string;
    markerMid: string;
    markerOffset: string;
    markerSide: string;
    markerStart: string;
    marks: string;
    mask: string;
    maskBorder: string;
    maskBorderMode: string;
    maskBorderOutset: string;
    maskBorderRepeat: string;
    maskBorderSlice: string;
    maskBorderSource: string;
    maskBorderWidth: string;
    maskClip: string;
    maskComposite: string;
    maskImage: string;
    maskMode: string;
    maskOrigin: string;
    maskPosition: string;
    maskRepeat: string;
    maskSize: string;
    maskType: string;
    maxBlockSize: string;
    maxHeight: string;
    maxInlineSize: string;
    maxLines: string;
    maxWidth: string;
    minBlockSize: string;
    minHeight: string;
    minInlineSize: string;
    minWidth: string;
    mixBlendMode: string;
    navDown: string;
    navLeft: string;
    navRight: string;
    navUp: string;
    objectFit: string;
    objectPosition: string;
    offset: string;
    offsetAfter: string;
    offsetAnchor: string;
    offsetBefore: string;
    offsetDistance: string;
    offsetEnd: string;
    offsetPath: string;
    offsetPosition: string;
    offsetRotate: string;
    offsetStart: string;
    opacity: string;
    order: string;
    orphans: string;
    outline: string;
    outlineColor: string;
    outlineOffset: string;
    outlineStyle: string;
    outlineWidth: string;
    overflow: string;
    overflowBlock: string;
    overflowInline: string;
    overflowWrap: string;
    overflowX: string;
    overflowY: string;
    padding: string;
    paddingBlock: string;
    paddingBlockEnd: string;
    paddingBlockStart: string;
    paddingBottom: string;
    paddingInline: string;
    paddingInlineEnd: string;
    paddingInlineStart: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    page: string;
    pageBreakAfter: string;
    pageBreakBefore: string;
    pageBreakInside: string;
    pause: string;
    pauseAfter: string;
    pauseBefore: string;
    pitch: string;
    pitchRange: string;
    placeContent: string;
    placeItems: string;
    placeSelf: string;
    playDuring: string;
    pointerEvents: string;
    position: string;
    quotes: string;
    regionFragment: string;
    resize: string;
    richness: string;
    right: string;
    rowGap: string;
    rubyAlign: string;
    rubyMerge: string;
    rubyPosition: string;
    running: string;
    scrollBehavior: string;
    scrollMargin: string;
    scrollMarginBlock: string;
    scrollMarginBlockEnd: string;
    scrollMarginBlockStart: string;
    scrollMarginBottom: string;
    scrollMarginInline: string;
    scrollMarginInlineEnd: string;
    scrollMarginInlineStart: string;
    scrollMarginLeft: string;
    scrollMarginRight: string;
    scrollMarginTop: string;
    scrollPadding: string;
    scrollPaddingBlock: string;
    scrollPaddingBlockEnd: string;
    scrollPaddingBlockStart: string;
    scrollPaddingBottom: string;
    scrollPaddingInline: string;
    scrollPaddingInlineEnd: string;
    scrollPaddingInlineStart: string;
    scrollPaddingLeft: string;
    scrollPaddingRight: string;
    scrollPaddingTop: string;
    scrollSnapAlign: string;
    scrollSnapStop: string;
    scrollSnapType: string;
    shapeImageThreshold: string;
    shapeInside: string;
    shapeMargin: string;
    shapeOutside: string;
    shapeRendering: string;
    size: string;
    spatialNavigationAction: string;
    spatialNavigationContain: string;
    spatialNavigationFunction: string;
    speak: string;
    speakHeader: string;
    speakNumeral: string;
    speakPunctuation: string;
    speechRate: string;
    src: string;
    stopColor: string;
    stopOpacity: string;
    stress: string;
    stringSet: string;
    stroke: string;
    strokeDasharray: string;
    strokeDashoffset: string;
    strokeLinecap: string;
    strokeLinejoin: string;
    strokeMiterlimit: string;
    strokeOpacity: string;
    strokeWidth: string;
    tabSize: string;
    tableLayout: string;
    textAlign: string;
    textAlignAll: string;
    textAlignLast: string;
    textAnchor: string;
    textCombineUpright: string;
    textDecoration: string;
    textDecorationColor: string;
    textDecorationLine: string;
    textDecorationStyle: string;
    textEmphasis: string;
    textEmphasisColor: string;
    textEmphasisPosition: string;
    textEmphasisStyle: string;
    textGroupAlign: string;
    textIndent: string;
    textJustify: string;
    textLineThrough: string;
    textLineThroughColor: string;
    textLineThroughMode: string;
    textLineThroughStyle: string;
    textLineThroughWidth: string;
    textOrientation: string;
    textOverflow: string;
    textOverline: string;
    textOverlineColor: string;
    textOverlineMode: string;
    textOverlineStyle: string;
    textOverlineWidth: string;
    textRendering: string;
    textShadow: string;
    textSpaceCollapse: string;
    textSpaceTrim: string;
    textSpacing: string;
    textTransform: string;
    textUnderline: string;
    textUnderlineColor: string;
    textUnderlineMode: string;
    textUnderlinePosition: string;
    textUnderlineStyle: string;
    textUnderlineWidth: string;
    textWrap: string;
    top: string;
    transform: string;
    transformBox: string;
    transformOrigin: string;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    unicodeBidi: string;
    unicodeRange: string;
    userSelect: string;
    vectorEffect: string;
    verticalAlign: string;
    visibility: string;
    voiceFamily: string;
    volume: string;
    whiteSpace: string;
    widows: string;
    width: string;
    willChange: string;
    wordBoundaryDetection: string;
    wordBoundaryExpansion: string;
    wordBreak: string;
    wordSpacing: string;
    wordWrap: string;
    wrapAfter: string;
    wrapBefore: string;
    wrapFlow: string;
    wrapInside: string;
    wrapThrough: string;
    writingMode: string;
    zIndex: string;

    // https://drafts.csswg.org/cssom/#ref-for-cssstyledeclaration⑤
    /** @deprecated */
    webkitAnimation: string;
    /** @deprecated */
    webkitAnimationDelay: string;
    /** @deprecated */
    webkitAnimationDirection: string;
    /** @deprecated */
    webkitAnimationDuration: string;
    /** @deprecated */
    webkitAnimationFillMode: string;
    /** @deprecated */
    webkitAnimationIterationCount: string;
    /** @deprecated */
    webkitAnimationName: string;
    /** @deprecated */
    webkitAnimationPlayState: string;
    /** @deprecated */
    webkitAnimationTimingFunction: string;
    /** @deprecated */
    webkitAppearance: string;
    /** @deprecated */
    webkitAspectRatio: string;
    /** @deprecated */
    webkitBackfaceVisibility: string;
    /** @deprecated */
    webkitBackgroundClip: string;
    /** @deprecated */
    webkitBackgroundComposite: string;
    /** @deprecated */
    webkitBackgroundOrigin: string;
    /** @deprecated */
    webkitBackgroundSize: string;
    /** @deprecated */
    webkitBorderAfter: string;
    /** @deprecated */
    webkitBorderAfterColor: string;
    /** @deprecated */
    webkitBorderAfterStyle: string;
    /** @deprecated */
    webkitBorderAfterWidth: string;
    /** @deprecated */
    webkitBorderBefore: string;
    /** @deprecated */
    webkitBorderBeforeColor: string;
    /** @deprecated */
    webkitBorderBeforeStyle: string;
    /** @deprecated */
    webkitBorderBeforeWidth: string;
    /** @deprecated */
    webkitBorderEnd: string;
    /** @deprecated */
    webkitBorderEndColor: string;
    /** @deprecated */
    webkitBorderEndStyle: string;
    /** @deprecated */
    webkitBorderEndWidth: string;
    /** @deprecated */
    webkitBorderFit: string;
    /** @deprecated */
    webkitBorderHorizontalSpacing: string;
    /** @deprecated */
    webkitBorderImage: string;
    /** @deprecated */
    webkitBorderRadius: string;
    /** @deprecated */
    webkitBorderStart: string;
    /** @deprecated */
    webkitBorderStartColor: string;
    /** @deprecated */
    webkitBorderStartStyle: string;
    /** @deprecated */
    webkitBorderStartWidth: string;
    /** @deprecated */
    webkitBorderVerticalSpacing: string;
    /** @deprecated */
    webkitBoxAlign: string;
    /** @deprecated */
    webkitBoxDirection: string;
    /** @deprecated */
    webkitBoxFlex: string;
    /** @deprecated */
    webkitBoxFlexGroup: string;
    /** @deprecated */
    webkitBoxLines: string;
    /** @deprecated */
    webkitBoxOrdinalGroup: string;
    /** @deprecated */
    webkitBoxOrient: string;
    /** @deprecated */
    webkitBoxPack: string;
    /** @deprecated */
    webkitBoxReflect: string;
    /** @deprecated */
    webkitBoxShadow: string;
    /** @deprecated */
    webkitColorCorrection: string;
    /** @deprecated */
    webkitColumnAxis: string;
    /** @deprecated */
    webkitColumnBreakAfter: string;
    /** @deprecated */
    webkitColumnBreakBefore: string;
    /** @deprecated */
    webkitColumnBreakInside: string;
    /** @deprecated */
    webkitColumnCount: string;
    /** @deprecated */
    webkitColumnGap: string;
    /** @deprecated */
    webkitColumnRule: string;
    /** @deprecated */
    webkitColumnRuleColor: string;
    /** @deprecated */
    webkitColumnRuleStyle: string;
    /** @deprecated */
    webkitColumnRuleWidth: string;
    /** @deprecated */
    webkitColumnSpan: string;
    /** @deprecated */
    webkitColumnWidth: string;
    /** @deprecated */
    webkitColumns: string;
    /** @deprecated */
    webkitFilter: string;
    /** @deprecated */
    webkitFlexAlign: string;
    /** @deprecated */
    webkitFlexDirection: string;
    /** @deprecated */
    webkitFlexFlow: string;
    /** @deprecated */
    webkitFlexItemAlign: string;
    /** @deprecated */
    webkitFlexLinePack: string;
    /** @deprecated */
    webkitFlexOrder: string;
    /** @deprecated */
    webkitFlexPack: string;
    /** @deprecated */
    webkitFlexWrap: string;
    /** @deprecated */
    webkitFlowFrom: string;
    /** @deprecated */
    webkitFlowInto: string;
    /** @deprecated */
    webkitFontFeatureSettings: string;
    /** @deprecated */
    webkitFontKerning: string;
    /** @deprecated */
    webkitFontSizeDelta: string;
    /** @deprecated */
    webkitFontSmoothing: string;
    /** @deprecated */
    webkitFontVariantLigatures: string;
    /** @deprecated */
    webkitHighlight: string;
    /** @deprecated */
    webkitHyphenateCharacter: string;
    /** @deprecated */
    webkitHyphenateLimitAfter: string;
    /** @deprecated */
    webkitHyphenateLimitBefore: string;
    /** @deprecated */
    webkitHyphenateLimitLines: string;
    /** @deprecated */
    webkitHyphens: string;
    /** @deprecated */
    webkitLineAlign: string;
    /** @deprecated */
    webkitLineBoxContain: string;
    /** @deprecated */
    webkitLineBreak: string;
    /** @deprecated */
    webkitLineClamp: string;
    /** @deprecated */
    webkitLineGrid: string;
    /** @deprecated */
    webkitLineSnap: string;
    /** @deprecated */
    webkitLocale: string;
    /** @deprecated */
    webkitLogicalHeight: string;
    /** @deprecated */
    webkitLogicalWidth: string;
    /** @deprecated */
    webkitMarginAfter: string;
    /** @deprecated */
    webkitMarginAfterCollapse: string;
    /** @deprecated */
    webkitMarginBefore: string;
    /** @deprecated */
    webkitMarginBeforeCollapse: string;
    /** @deprecated */
    webkitMarginBottomCollapse: string;
    /** @deprecated */
    webkitMarginCollapse: string;
    /** @deprecated */
    webkitMarginEnd: string;
    /** @deprecated */
    webkitMarginStart: string;
    /** @deprecated */
    webkitMarginTopCollapse: string;
    /** @deprecated */
    webkitMarquee: string;
    /** @deprecated */
    webkitMarqueeDirection: string;
    /** @deprecated */
    webkitMarqueeIncrement: string;
    /** @deprecated */
    webkitMarqueeRepetition: string;
    /** @deprecated */
    webkitMarqueeSpeed: string;
    /** @deprecated */
    webkitMarqueeStyle: string;
    /** @deprecated */
    webkitMask: string;
    /** @deprecated */
    webkitMaskAttachment: string;
    /** @deprecated */
    webkitMaskBoxImage: string;
    /** @deprecated */
    webkitMaskBoxImageOutset: string;
    /** @deprecated */
    webkitMaskBoxImageRepeat: string;
    /** @deprecated */
    webkitMaskBoxImageSlice: string;
    /** @deprecated */
    webkitMaskBoxImageSource: string;
    /** @deprecated */
    webkitMaskBoxImageWidth: string;
    /** @deprecated */
    webkitMaskClip: string;
    /** @deprecated */
    webkitMaskComposite: string;
    /** @deprecated */
    webkitMaskImage: string;
    /** @deprecated */
    webkitMaskOrigin: string;
    /** @deprecated */
    webkitMaskPosition: string;
    /** @deprecated */
    webkitMaskPositionX: string;
    /** @deprecated */
    webkitMaskPositionY: string;
    /** @deprecated */
    webkitMaskRepeat: string;
    /** @deprecated */
    webkitMaskRepeatX: string;
    /** @deprecated */
    webkitMaskRepeatY: string;
    /** @deprecated */
    webkitMaskSize: string;
    /** @deprecated */
    webkitMatchNearestMailBlockquoteColor: string;
    /** @deprecated */
    webkitMaxLogicalHeight: string;
    /** @deprecated */
    webkitMaxLogicalWidth: string;
    /** @deprecated */
    webkitMinLogicalHeight: string;
    /** @deprecated */
    webkitMinLogicalWidth: string;
    /** @deprecated */
    webkitNbspMode: string;
    /** @deprecated */
    webkitOverflowScrolling: string;
    /** @deprecated */
    webkitPaddingAfter: string;
    /** @deprecated */
    webkitPaddingBefore: string;
    /** @deprecated */
    webkitPaddingEnd: string;
    /** @deprecated */
    webkitPaddingStart: string;
    /** @deprecated */
    webkitPerspective: string;
    /** @deprecated */
    webkitPerspectiveOrigin: string;
    /** @deprecated */
    webkitPerspectiveOriginX: string;
    /** @deprecated */
    webkitPerspectiveOriginY: string;
    /** @deprecated */
    webkitPrintColorAdjust: string;
    /** @deprecated */
    webkitRegionBreakAfter: string;
    /** @deprecated */
    webkitRegionBreakBefore: string;
    /** @deprecated */
    webkitRegionBreakInside: string;
    /** @deprecated */
    webkitRegionOverflow: string;
    /** @deprecated */
    webkitRtlOrdering: string;
    /** @deprecated */
    webkitSvgShadow: string;
    /** @deprecated */
    webkitTapHighlightColor: string;
    /** @deprecated */
    webkitTextCombine: string;
    /** @deprecated */
    webkitTextDecorationsInEffect: string;
    /** @deprecated */
    webkitTextEmphasis: string;
    /** @deprecated */
    webkitTextEmphasisColor: string;
    /** @deprecated */
    webkitTextEmphasisPosition: string;
    /** @deprecated */
    webkitTextEmphasisStyle: string;
    /** @deprecated */
    webkitTextFillColor: string;
    /** @deprecated */
    webkitTextOrientation: string;
    /** @deprecated */
    webkitTextSecurity: string;
    /** @deprecated */
    webkitTextSizeAdjust: string;
    /** @deprecated */
    webkitTextStroke: string;
    /** @deprecated */
    webkitTextStrokeColor: string;
    /** @deprecated */
    webkitTextStrokeWidth: string;
    /** @deprecated */
    webkitTransform: string;
    /** @deprecated */
    webkitTransformOrigin: string;
    /** @deprecated */
    webkitTransformOriginX: string;
    /** @deprecated */
    webkitTransformOriginY: string;
    /** @deprecated */
    webkitTransformOriginZ: string;
    /** @deprecated */
    webkitTransformStyle: string;
    /** @deprecated */
    webkitTransition: string;
    /** @deprecated */
    webkitTransitionDelay: string;
    /** @deprecated */
    webkitTransitionDuration: string;
    /** @deprecated */
    webkitTransitionProperty: string;
    /** @deprecated */
    webkitTransitionTimingFunction: string;
    /** @deprecated */
    webkitUserDrag: string;
    /** @deprecated */
    webkitUserModify: string;
    /** @deprecated */
    webkitUserSelect: string;
    /** @deprecated */
    webkitWrap: string;
    /** @deprecated */
    webkitWrapFlow: string;
    /** @deprecated */
    webkitWrapMargin: string;
    /** @deprecated */
    webkitWrapPadding: string;
    /** @deprecated */
    webkitWrapShapeInside: string;
    /** @deprecated */
    webkitWrapShapeOutside: string;
    /** @deprecated */
    webkitWrapThrough: string;
    /** @deprecated */
    webkitWritingMode: string;
    /** @deprecated */
    webkitZoom: string;

    // https://drafts.csswg.org/cssom/#ref-for-cssstyledeclaration⑥
    /** @deprecated */
    "-webkit-animation": string;
    /** @deprecated */
    "-webkit-animation-delay": string;
    /** @deprecated */
    "-webkit-animation-direction": string;
    /** @deprecated */
    "-webkit-animation-duration": string;
    /** @deprecated */
    "-webkit-animation-fill-mode": string;
    /** @deprecated */
    "-webkit-animation-iteration-count": string;
    /** @deprecated */
    "-webkit-animation-name": string;
    /** @deprecated */
    "-webkit-animation-play-state": string;
    /** @deprecated */
    "-webkit-animation-timing-function": string;
    /** @deprecated */
    "-webkit-appearance": string;
    /** @deprecated */
    "-webkit-aspect-ratio": string;
    /** @deprecated */
    "-webkit-backface-visibility": string;
    /** @deprecated */
    "-webkit-background-clip": string;
    /** @deprecated */
    "-webkit-background-composite": string;
    /** @deprecated */
    "-webkit-background-origin": string;
    /** @deprecated */
    "-webkit-background-size": string;
    /** @deprecated */
    "-webkit-border-after": string;
    /** @deprecated */
    "-webkit-border-after-color": string;
    /** @deprecated */
    "-webkit-border-after-style": string;
    /** @deprecated */
    "-webkit-border-after-width": string;
    /** @deprecated */
    "-webkit-border-before": string;
    /** @deprecated */
    "-webkit-border-before-color": string;
    /** @deprecated */
    "-webkit-border-before-style": string;
    /** @deprecated */
    "-webkit-border-before-width": string;
    /** @deprecated */
    "-webkit-border-end": string;
    /** @deprecated */
    "-webkit-border-end-color": string;
    /** @deprecated */
    "-webkit-border-end-style": string;
    /** @deprecated */
    "-webkit-border-end-width": string;
    /** @deprecated */
    "-webkit-border-fit": string;
    /** @deprecated */
    "-webkit-border-horizontal-spacing": string;
    /** @deprecated */
    "-webkit-border-image": string;
    /** @deprecated */
    "-webkit-border-radius": string;
    /** @deprecated */
    "-webkit-border-start": string;
    /** @deprecated */
    "-webkit-border-start-color": string;
    /** @deprecated */
    "-webkit-border-start-style": string;
    /** @deprecated */
    "-webkit-border-start-width": string;
    /** @deprecated */
    "-webkit-border-vertical-spacing": string;
    /** @deprecated */
    "-webkit-box-align": string;
    /** @deprecated */
    "-webkit-box-direction": string;
    /** @deprecated */
    "-webkit-box-flex": string;
    /** @deprecated */
    "-webkit-box-flex-group": string;
    /** @deprecated */
    "-webkit-box-lines": string;
    /** @deprecated */
    "-webkit-box-ordinal-group": string;
    /** @deprecated */
    "-webkit-box-orient": string;
    /** @deprecated */
    "-webkit-box-pack": string;
    /** @deprecated */
    "-webkit-box-reflect": string;
    /** @deprecated */
    "-webkit-box-shadow": string;
    /** @deprecated */
    "-webkit-color-correction": string;
    /** @deprecated */
    "-webkit-column-axis": string;
    /** @deprecated */
    "-webkit-column-break-after": string;
    /** @deprecated */
    "-webkit-column-break-before": string;
    /** @deprecated */
    "-webkit-column-break-inside": string;
    /** @deprecated */
    "-webkit-column-count": string;
    /** @deprecated */
    "-webkit-column-gap": string;
    /** @deprecated */
    "-webkit-column-rule": string;
    /** @deprecated */
    "-webkit-column-rule-color": string;
    /** @deprecated */
    "-webkit-column-rule-style": string;
    /** @deprecated */
    "-webkit-column-rule-width": string;
    /** @deprecated */
    "-webkit-column-span": string;
    /** @deprecated */
    "-webkit-column-width": string;
    /** @deprecated */
    "-webkit-columns": string;
    /** @deprecated */
    "-webkit-filter": string;
    /** @deprecated */
    "-webkit-flex-align": string;
    /** @deprecated */
    "-webkit-flex-direction": string;
    /** @deprecated */
    "-webkit-flex-flow": string;
    /** @deprecated */
    "-webkit-flex-item-align": string;
    /** @deprecated */
    "-webkit-flex-line-pack": string;
    /** @deprecated */
    "-webkit-flex-order": string;
    /** @deprecated */
    "-webkit-flex-pack": string;
    /** @deprecated */
    "-webkit-flex-wrap": string;
    /** @deprecated */
    "-webkit-flow-from": string;
    /** @deprecated */
    "-webkit-flow-into": string;
    /** @deprecated */
    "-webkit-font-feature-settings": string;
    /** @deprecated */
    "-webkit-font-kerning": string;
    /** @deprecated */
    "-webkit-font-size-delta": string;
    /** @deprecated */
    "-webkit-font-smoothing": string;
    /** @deprecated */
    "-webkit-font-variant-ligatures": string;
    /** @deprecated */
    "-webkit-highlight": string;
    /** @deprecated */
    "-webkit-hyphenate-character": string;
    /** @deprecated */
    "-webkit-hyphenate-limit-after": string;
    /** @deprecated */
    "-webkit-hyphenate-limit-before": string;
    /** @deprecated */
    "-webkit-hyphenate-limit-lines": string;
    /** @deprecated */
    "-webkit-hyphens": string;
    /** @deprecated */
    "-webkit-line-align": string;
    /** @deprecated */
    "-webkit-line-box-contain": string;
    /** @deprecated */
    "-webkit-line-break": string;
    /** @deprecated */
    "-webkit-line-clamp": string;
    /** @deprecated */
    "-webkit-line-grid": string;
    /** @deprecated */
    "-webkit-line-snap": string;
    /** @deprecated */
    "-webkit-locale": string;
    /** @deprecated */
    "-webkit-logical-height": string;
    /** @deprecated */
    "-webkit-logical-width": string;
    /** @deprecated */
    "-webkit-margin-after": string;
    /** @deprecated */
    "-webkit-margin-after-collapse": string;
    /** @deprecated */
    "-webkit-margin-before": string;
    /** @deprecated */
    "-webkit-margin-before-collapse": string;
    /** @deprecated */
    "-webkit-margin-bottom-collapse": string;
    /** @deprecated */
    "-webkit-margin-collapse": string;
    /** @deprecated */
    "-webkit-margin-end": string;
    /** @deprecated */
    "-webkit-margin-start": string;
    /** @deprecated */
    "-webkit-margin-top-collapse": string;
    /** @deprecated */
    "-webkit-marquee": string;
    /** @deprecated */
    "-webkit-marquee-direction": string;
    /** @deprecated */
    "-webkit-marquee-increment": string;
    /** @deprecated */
    "-webkit-marquee-repetition": string;
    /** @deprecated */
    "-webkit-marquee-speed": string;
    /** @deprecated */
    "-webkit-marquee-style": string;
    /** @deprecated */
    "-webkit-mask": string;
    /** @deprecated */
    "-webkit-mask-attachment": string;
    /** @deprecated */
    "-webkit-mask-box-image": string;
    /** @deprecated */
    "-webkit-mask-box-image-outset": string;
    /** @deprecated */
    "-webkit-mask-box-image-repeat": string;
    /** @deprecated */
    "-webkit-mask-box-image-slice": string;
    /** @deprecated */
    "-webkit-mask-box-image-source": string;
    /** @deprecated */
    "-webkit-mask-box-image-width": string;
    /** @deprecated */
    "-webkit-mask-clip": string;
    /** @deprecated */
    "-webkit-mask-composite": string;
    /** @deprecated */
    "-webkit-mask-image": string;
    /** @deprecated */
    "-webkit-mask-origin": string;
    /** @deprecated */
    "-webkit-mask-position": string;
    /** @deprecated */
    "-webkit-mask-position-x": string;
    /** @deprecated */
    "-webkit-mask-position-y": string;
    /** @deprecated */
    "-webkit-mask-repeat": string;
    /** @deprecated */
    "-webkit-mask-repeat-x": string;
    /** @deprecated */
    "-webkit-mask-repeat-y": string;
    /** @deprecated */
    "-webkit-mask-size": string;
    /** @deprecated */
    "-webkit-match-nearest-mail-blockquote-color": string;
    /** @deprecated */
    "-webkit-max-logical-height": string;
    /** @deprecated */
    "-webkit-max-logical-width": string;
    /** @deprecated */
    "-webkit-min-logical-height": string;
    /** @deprecated */
    "-webkit-min-logical-width": string;
    /** @deprecated */
    "-webkit-nbsp-mode": string;
    /** @deprecated */
    "-webkit-overflow-scrolling": string;
    /** @deprecated */
    "-webkit-padding-after": string;
    /** @deprecated */
    "-webkit-padding-before": string;
    /** @deprecated */
    "-webkit-padding-end": string;
    /** @deprecated */
    "-webkit-padding-start": string;
    /** @deprecated */
    "-webkit-perspective": string;
    /** @deprecated */
    "-webkit-perspective-origin": string;
    /** @deprecated */
    "-webkit-perspective-origin-x": string;
    /** @deprecated */
    "-webkit-perspective-origin-y": string;
    /** @deprecated */
    "-webkit-print-color-adjust": string;
    /** @deprecated */
    "-webkit-region-break-after": string;
    /** @deprecated */
    "-webkit-region-break-before": string;
    /** @deprecated */
    "-webkit-region-break-inside": string;
    /** @deprecated */
    "-webkit-region-overflow": string;
    /** @deprecated */
    "-webkit-rtl-ordering": string;
    /** @deprecated */
    "-webkit-svg-shadow": string;
    /** @deprecated */
    "-webkit-tap-highlight-color": string;
    /** @deprecated */
    "-webkit-text-combine": string;
    /** @deprecated */
    "-webkit-text-decorations-in-effect": string;
    /** @deprecated */
    "-webkit-text-emphasis": string;
    /** @deprecated */
    "-webkit-text-emphasis-color": string;
    /** @deprecated */
    "-webkit-text-emphasis-position": string;
    /** @deprecated */
    "-webkit-text-emphasis-style": string;
    /** @deprecated */
    "-webkit-text-fill-color": string;
    /** @deprecated */
    "-webkit-text-orientation": string;
    /** @deprecated */
    "-webkit-text-security": string;
    /** @deprecated */
    "-webkit-text-size-adjust": string;
    /** @deprecated */
    "-webkit-text-stroke": string;
    /** @deprecated */
    "-webkit-text-stroke-color": string;
    /** @deprecated */
    "-webkit-text-stroke-width": string;
    /** @deprecated */
    "-webkit-transform": string;
    /** @deprecated */
    "-webkit-transform-origin": string;
    /** @deprecated */
    "-webkit-transform-origin-x": string;
    /** @deprecated */
    "-webkit-transform-origin-y": string;
    /** @deprecated */
    "-webkit-transform-origin-z": string;
    /** @deprecated */
    "-webkit-transform-style": string;
    /** @deprecated */
    "-webkit-transition": string;
    /** @deprecated */
    "-webkit-transition-delay": string;
    /** @deprecated */
    "-webkit-transition-duration": string;
    /** @deprecated */
    "-webkit-transition-property": string;
    /** @deprecated */
    "-webkit-transition-timing-function": string;
    /** @deprecated */
    "-webkit-user-drag": string;
    /** @deprecated */
    "-webkit-user-modify": string;
    /** @deprecated */
    "-webkit-user-select": string;
    /** @deprecated */
    "-webkit-wrap": string;
    /** @deprecated */
    "-webkit-wrap-flow": string;
    /** @deprecated */
    "-webkit-wrap-margin": string;
    /** @deprecated */
    "-webkit-wrap-padding": string;
    /** @deprecated */
    "-webkit-wrap-shape-inside": string;
    /** @deprecated */
    "-webkit-wrap-shape-outside": string;
    /** @deprecated */
    "-webkit-wrap-through": string;
    /** @deprecated */
    "-webkit-writing-mode": string;
    /** @deprecated */
    "-webkit-zoom": string;

    "align-content": string;
    "align-items": string;
    "align-self": string;
    "alignment-baseline": string;
    "animation-delay": string;
    "animation-direction": string;
    "animation-duration": string;
    "animation-fill-mode": string;
    "animation-iteration-count": string;
    "animation-name": string;
    "animation-play-state": string;
    "animation-timing-function": string;
    "background-attachment": string;
    "background-blend-mode": string;
    "background-clip": string;
    "background-color": string;
    "background-image": string;
    "background-origin": string;
    "background-position": string;
    "background-position-x": string;
    "background-position-y": string;
    "background-repeat": string;
    "background-repeat-x": string;
    "background-repeat-y": string;
    "background-size": string;
    "baseline-shift": string;
    "block-overflow": string;
    "block-size": string;
    "bookmark-label": string;
    "bookmark-level": string;
    "bookmark-state": string;
    "border-block": string;
    "border-block-color": string;
    "border-block-end": string;
    "border-block-end-color": string;
    "border-block-end-style": string;
    "border-block-end-width": string;
    "border-block-start": string;
    "border-block-start-color": string;
    "border-block-start-style": string;
    "border-block-start-width": string;
    "border-block-style": string;
    "border-block-width": string;
    "border-bottom": string;
    "border-bottom-color": string;
    "border-bottom-left-radius": string;
    "border-bottom-right-radius": string;
    "border-bottom-style": string;
    "border-bottom-width": string;
    "border-boundary": string;
    "border-collapse": string;
    "border-color": string;
    "border-end-end-radius": string;
    "border-end-start-radius": string;
    "border-image": string;
    "border-image-outset": string;
    "border-image-repeat": string;
    "border-image-slice": string;
    "border-image-source": string;
    "border-image-width": string;
    "border-inline": string;
    "border-inline-color": string;
    "border-inline-end": string;
    "border-inline-end-color": string;
    "border-inline-end-style": string;
    "border-inline-end-width": string;
    "border-inline-start": string;
    "border-inline-start-color": string;
    "border-inline-start-style": string;
    "border-inline-start-width": string;
    "border-inline-style": string;
    "border-inline-width": string;
    "border-left": string;
    "border-left-color": string;
    "border-left-style": string;
    "border-left-width": string;
    "border-radius": string;
    "border-right": string;
    "border-right-color": string;
    "border-right-style": string;
    "border-right-width": string;
    "border-spacing": string;
    "border-start-end-radius": string;
    "border-start-start-radius": string;
    "border-style": string;
    "border-top": string;
    "border-top-color": string;
    "border-top-left-radius": string;
    "border-top-right-radius": string;
    "border-top-style": string;
    "border-top-width": string;
    "border-width": string;
    "box-decoration-break": string;
    "box-shadow": string;
    "box-sizing": string;
    "box-snap": string;
    "break-after": string;
    "break-before": string;
    "break-inside": string;
    "caption-side": string;
    "caret-color": string;
    "caret-shape": string;
    "clip-path": string;
    "clip-rule": string;
    "color-adjust": string;
    "color-interpolation": string;
    "color-interpolation-filters": string;
    "color-profile": string;
    "color-rendering": string;
    "color-scheme": string;
    "column-count": string;
    "column-fill": string;
    "column-gap": string;
    "column-rule": string;
    "column-rule-color": string;
    "column-rule-style": string;
    "column-rule-width": string;
    "column-span": string;
    "column-width": string;
    "counter-increment": string;
    "counter-reset": string;
    "counter-set": string;
    "cue-after": string;
    "cue-before": string;
    "dominant-baseline": string;
    "empty-cells": string;
    "enable-background": string;
    "fill-opacity": string;
    "fill-rule": string;
    "flex-basis": string;
    "flex-direction": string;
    "flex-flow": string;
    "flex-grow": string;
    "flex-shrink": string;
    "flex-wrap": string;
    "flood-color": string;
    "flood-opacity": string;
    "flow-from": string;
    "flow-into": string;
    "font-family": string;
    "font-feature-settings": string;
    "font-kerning": string;
    "font-language-override": string;
    "font-optical-sizing": string;
    "font-palette": string;
    "font-size": string;
    "font-size-adjust": string;
    "font-stretch": string;
    "font-style": string;
    "font-synthesis": string;
    "font-synthesis-small-caps": string;
    "font-synthesis-style": string;
    "font-synthesis-weight": string;
    "font-variant": string;
    "font-variant-alternates": string;
    "font-variant-caps": string;
    "font-variant-east-asian": string;
    "font-variant-emoji": string;
    "font-variant-ligatures": string;
    "font-variant-numeric": string;
    "font-variant-position": string;
    "font-variation-settings": string;
    "font-weight": string;
    "footnote-display": string;
    "footnote-policy": string;
    "forced-color-adjust": string;
    "glyph-orientation-horizontal": string;
    "glyph-orientation-vertical": string;
    "grid-area": string;
    "grid-auto-columns": string;
    "grid-auto-flow": string;
    "grid-auto-rows": string;
    "grid-column": string;
    "grid-column-end": string;
    "grid-column-start": string;
    "grid-row": string;
    "grid-row-end": string;
    "grid-row-start": string;
    "grid-template": string;
    "grid-template-areas": string;
    "grid-template-columns": string;
    "grid-template-rows": string;
    "hanging-punctuation": string;
    "hyphenate-character": string;
    "hyphenate-limit-chars": string;
    "hyphenate-limit-last": string;
    "hyphenate-limit-lines": string;
    "hyphenate-limit-zone": string;
    "image-orientation": string;
    "image-rendering": string;
    "image-resolution": string;
    "initial-letters": string;
    "initial-letters-align": string;
    "initial-letters-wrap": string;
    "inline-size": string;
    "inline-sizing": string;
    "inset-block": string;
    "inset-block-end": string;
    "inset-block-start": string;
    "inset-inline": string;
    "inset-inline-end": string;
    "inset-inline-start": string;
    "justify-content": string;
    "justify-items": string;
    "justify-self": string;
    "letter-spacing": string;
    "lighting-color": string;
    "line-break": string;
    "line-clamp": string;
    "line-grid": string;
    "line-height": string;
    "line-padding": string;
    "line-snap": string;
    "list-style": string;
    "list-style-image": string;
    "list-style-position": string;
    "list-style-type": string;
    "margin-block": string;
    "margin-block-end": string;
    "margin-block-start": string;
    "margin-bottom": string;
    "margin-inline": string;
    "margin-inline-end": string;
    "margin-inline-start": string;
    "margin-left": string;
    "margin-right": string;
    "margin-top": string;
    "margin-trim": string;
    "marker-end": string;
    "marker-mid": string;
    "marker-offset": string;
    "marker-side": string;
    "marker-start": string;
    "mask-border": string;
    "mask-border-mode": string;
    "mask-border-outset": string;
    "mask-border-repeat": string;
    "mask-border-slice": string;
    "mask-border-source": string;
    "mask-border-width": string;
    "mask-clip": string;
    "mask-composite": string;
    "mask-image": string;
    "mask-mode": string;
    "mask-origin": string;
    "mask-position": string;
    "mask-repeat": string;
    "mask-size": string;
    "mask-type": string;
    "max-block-size": string;
    "max-height": string;
    "max-inline-size": string;
    "max-lines": string;
    "max-width": string;
    "min-block-size": string;
    "min-height": string;
    "min-inline-size": string;
    "min-width": string;
    "mix-blend-mode": string;
    "nav-down": string;
    "nav-left": string;
    "nav-right": string;
    "nav-up": string;
    "object-fit": string;
    "object-position": string;
    "offset-after": string;
    "offset-anchor": string;
    "offset-before": string;
    "offset-distance": string;
    "offset-end": string;
    "offset-path": string;
    "offset-position": string;
    "offset-rotate": string;
    "offset-start": string;
    "outline-color": string;
    "outline-offset": string;
    "outline-style": string;
    "outline-width": string;
    "overflow-block": string;
    "overflow-inline": string;
    "overflow-wrap": string;
    "overflow-x": string;
    "overflow-y": string;
    "padding-block": string;
    "padding-block-end": string;
    "padding-block-start": string;
    "padding-bottom": string;
    "padding-inline": string;
    "padding-inline-end": string;
    "padding-inline-start": string;
    "padding-left": string;
    "padding-right": string;
    "padding-top": string;
    "page-break-after": string;
    "page-break-before": string;
    "page-break-inside": string;
    "pause-after": string;
    "pause-before": string;
    "pitch-range": string;
    "place-content": string;
    "place-items": string;
    "place-self": string;
    "play-during": string;
    "pointer-events": string;
    "region-fragment": string;
    "row-gap": string;
    "ruby-align": string;
    "ruby-merge": string;
    "ruby-position": string;
    "scroll-behavior": string;
    "scroll-margin": string;
    "scroll-margin-block": string;
    "scroll-margin-block-end": string;
    "scroll-margin-block-start": string;
    "scroll-margin-bottom": string;
    "scroll-margin-inline": string;
    "scroll-margin-inline-end": string;
    "scroll-margin-inline-start": string;
    "scroll-margin-left": string;
    "scroll-margin-right": string;
    "scroll-margin-top": string;
    "scroll-padding": string;
    "scroll-padding-block": string;
    "scroll-padding-block-end": string;
    "scroll-padding-block-start": string;
    "scroll-padding-bottom": string;
    "scroll-padding-inline": string;
    "scroll-padding-inline-end": string;
    "scroll-padding-inline-start": string;
    "scroll-padding-left": string;
    "scroll-padding-right": string;
    "scroll-padding-top": string;
    "scroll-snap-align": string;
    "scroll-snap-stop": string;
    "scroll-snap-type": string;
    "shape-image-threshold": string;
    "shape-inside": string;
    "shape-margin": string;
    "shape-outside": string;
    "shape-rendering": string;
    "spatial-navigation-action": string;
    "spatial-navigation-contain": string;
    "spatial-navigation-function": string;
    "speak-header": string;
    "speak-numeral": string;
    "speak-punctuation": string;
    "speech-rate": string;
    "stop-color": string;
    "stop-opacity": string;
    "string-set": string;
    "stroke-dasharray": string;
    "stroke-dashoffset": string;
    "stroke-linecap": string;
    "stroke-linejoin": string;
    "stroke-miterlimit": string;
    "stroke-opacity": string;
    "stroke-width": string;
    "tab-size": string;
    "table-layout": string;
    "text-align": string;
    "text-align-all": string;
    "text-align-last": string;
    "text-anchor": string;
    "text-combine-upright": string;
    "text-decoration": string;
    "text-decoration-color": string;
    "text-decoration-line": string;
    "text-decoration-style": string;
    "text-emphasis": string;
    "text-emphasis-color": string;
    "text-emphasis-position": string;
    "text-emphasis-style": string;
    "text-group-align": string;
    "text-indent": string;
    "text-justify": string;
    "text-line-through": string;
    "text-line-through-color": string;
    "text-line-through-mode": string;
    "text-line-through-style": string;
    "text-line-through-width": string;
    "text-orientation": string;
    "text-overflow": string;
    "text-overline": string;
    "text-overline-color": string;
    "text-overline-mode": string;
    "text-overline-style": string;
    "text-overline-width": string;
    "text-rendering": string;
    "text-shadow": string;
    "text-space-collapse": string;
    "text-space-trim": string;
    "text-spacing": string;
    "text-transform": string;
    "text-underline": string;
    "text-underline-color": string;
    "text-underline-mode": string;
    "text-underline-position": string;
    "text-underline-style": string;
    "text-underline-width": string;
    "text-wrap": string;
    "transform-box": string;
    "transform-origin": string;
    "transition-delay": string;
    "transition-duration": string;
    "transition-property": string;
    "transition-timing-function": string;
    "unicode-bidi": string;
    "unicode-range": string;
    "user-select": string;
    "vector-effect": string;
    "vertical-align": string;
    "voice-family": string;
    "white-space": string;
    "will-change": string;
    "word-boundary-detection": string;
    "word-boundary-expansion": string;
    "word-break": string;
    "word-spacing": string;
    "word-wrap": string;
    "wrap-after": string;
    "wrap-before": string;
    "wrap-flow": string;
    "wrap-inside": string;
    "wrap-through": string;
    "writing-mode": string;
    "z-index": string;
}
