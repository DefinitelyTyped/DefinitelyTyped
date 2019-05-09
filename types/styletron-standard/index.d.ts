// Type definitions for styletron-standard 2.0
// Project: https://github.com/styletron/styletron
// Definitions by: Eric Taylor <https://github.com/erictaylor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// Imported from styletron-standard style-types
export type TLength = string | 0;

export interface Properties {
    alignContent?: AlignContentProperty;
    alignItems?: AlignItemsProperty;
    alignSelf?: AlignSelfProperty;
    animationDelay?: GlobalsString;
    animationDirection?: AnimationDirectionProperty;
    animationDuration?: GlobalsString;
    animationFillMode?: AnimationFillModeProperty;
    animationIterationCount?: AnimationIterationCountProperty;
    animationName?: AnimationNameProperty;
    animationPlayState?: AnimationPlayStateProperty;
    animationTimingFunction?: AnimationTimingFunctionProperty;
    appearance?: AppearanceProperty;
    backdropFilter?: BackdropFilterProperty;
    backfaceVisibility?: BackfaceVisibilityProperty;
    backgroundAttachment?: BackgroundAttachmentProperty;
    backgroundBlendMode?: BackgroundBlendModeProperty;
    backgroundClip?: BackgroundClipProperty;
    backgroundColor?: BackgroundColorProperty;
    backgroundImage?: BackgroundImageProperty;
    backgroundOrigin?: BackgroundOriginProperty;
    backgroundPosition?: BackgroundPositionProperty;
    backgroundPositionX?: BackgroundPositionXProperty;
    backgroundPositionY?: BackgroundPositionYProperty;
    backgroundRepeat?: BackgroundRepeatProperty;
    backgroundSize?: BackgroundSizeProperty;
    blockOverflow?: BlockOverflowProperty;
    blockSize?: BlockSizeProperty;
    borderBlockEndColor?: BorderBlockEndColorProperty;
    borderBlockEndStyle?: BorderBlockEndStyleProperty;
    borderBlockEndWidth?: BorderBlockEndWidthProperty;
    borderBlockStartColor?: BorderBlockStartColorProperty;
    borderBlockStartStyle?: BorderBlockStartStyleProperty;
    borderBlockStartWidth?: BorderBlockStartWidthProperty;
    borderBottomColor?: BorderBottomColorProperty;
    borderBottomLeftRadius?: BorderBottomLeftRadiusProperty;
    borderBottomRightRadius?: BorderBottomRightRadiusProperty;
    borderBottomStyle?: BorderBottomStyleProperty;
    borderBottomWidth?: BorderBottomWidthProperty;
    borderCollapse?: BorderCollapseProperty;
    borderImageOutset?: BorderImageOutsetProperty;
    borderImageRepeat?: BorderImageRepeatProperty;
    borderImageSlice?: BorderImageSliceProperty;
    borderImageSource?: BorderImageSourceProperty;
    borderImageWidth?: BorderImageWidthProperty;
    borderInlineEndColor?: BorderInlineEndColorProperty;
    borderInlineEndStyle?: BorderInlineEndStyleProperty;
    borderInlineEndWidth?: BorderInlineEndWidthProperty;
    borderInlineStartColor?: BorderInlineStartColorProperty;
    borderInlineStartStyle?: BorderInlineStartStyleProperty;
    borderInlineStartWidth?: BorderInlineStartWidthProperty;
    borderLeftColor?: BorderLeftColorProperty;
    borderLeftStyle?: BorderLeftStyleProperty;
    borderLeftWidth?: BorderLeftWidthProperty;
    borderRightColor?: BorderRightColorProperty;
    borderRightStyle?: BorderRightStyleProperty;
    borderRightWidth?: BorderRightWidthProperty;
    borderSpacing?: BorderSpacingProperty;
    borderTopColor?: BorderTopColorProperty;
    borderTopLeftRadius?: BorderTopLeftRadiusProperty;
    borderTopRightRadius?: BorderTopRightRadiusProperty;
    borderTopStyle?: BorderTopStyleProperty;
    borderTopWidth?: BorderTopWidthProperty;
    bottom?: BottomProperty;
    boxDecorationBreak?: BoxDecorationBreakProperty;
    boxShadow?: BoxShadowProperty;
    boxSizing?: BoxSizingProperty;
    breakAfter?: BreakAfterProperty;
    breakBefore?: BreakBeforeProperty;
    breakInside?: BreakInsideProperty;
    captionSide?: CaptionSideProperty;
    caretColor?: CaretColorProperty;
    clear?: ClearProperty;
    clipPath?: ClipPathProperty;
    color?: ColorProperty;
    colorAdjust?: ColorAdjustProperty;
    columnCount?: ColumnCountProperty;
    columnFill?: ColumnFillProperty;
    columnGap?: ColumnGapProperty;
    columnRuleColor?: ColumnRuleColorProperty;
    columnRuleStyle?: ColumnRuleStyleProperty;
    columnRuleWidth?: ColumnRuleWidthProperty;
    columnSpan?: ColumnSpanProperty;
    columnWidth?: ColumnWidthProperty;
    contain?: ContainProperty;
    content?: ContentProperty;
    counterIncrement?: CounterIncrementProperty;
    counterReset?: CounterResetProperty;
    cursor?: CursorProperty;
    direction?: DirectionProperty;
    display?: DisplayProperty;
    emptyCells?: EmptyCellsProperty;
    filter?: FilterProperty;
    flexBasis?: FlexBasisProperty;
    flexDirection?: FlexDirectionProperty;
    flexGrow?: GlobalsNumber;
    flexShrink?: GlobalsNumber;
    flexWrap?: FlexWrapProperty;
    float?: FloatProperty;
    fontFamily?: FontFamilyProperty;
    fontFeatureSettings?: FontFeatureSettingsProperty;
    fontKerning?: FontKerningProperty;
    fontLanguageOverride?: FontLanguageOverrideProperty;
    fontOpticalSizing?: FontOpticalSizingProperty;
    fontSize?: FontSizeProperty;
    fontSizeAdjust?: FontSizeAdjustProperty;
    fontStretch?: FontStretchProperty;
    fontStyle?: FontStyleProperty;
    fontSynthesis?: FontSynthesisProperty;
    fontVariant?: FontVariantProperty;
    fontVariantCaps?: FontVariantCapsProperty;
    fontVariantEastAsian?: FontVariantEastAsianProperty;
    fontVariantLigatures?: FontVariantLigaturesProperty;
    fontVariantNumeric?: FontVariantNumericProperty;
    fontVariantPosition?: FontVariantPositionProperty;
    fontVariationSettings?: FontVariationSettingsProperty;
    fontWeight?: FontWeightProperty;
    gridAutoColumns?: GridAutoColumnsProperty;
    gridAutoFlow?: GridAutoFlowProperty;
    gridAutoRows?: GridAutoRowsProperty;
    gridColumnEnd?: GridColumnEndProperty;
    gridColumnStart?: GridColumnStartProperty;
    gridRowEnd?: GridRowEndProperty;
    gridRowStart?: GridRowStartProperty;
    gridTemplateAreas?: GridTemplateAreasProperty;
    gridTemplateColumns?: GridTemplateColumnsProperty;
    gridTemplateRows?: GridTemplateRowsProperty;
    hangingPunctuation?: HangingPunctuationProperty;
    height?: HeightProperty;
    hyphens?: HyphensProperty;
    imageOrientation?: ImageOrientationProperty;
    imageRendering?: ImageRenderingProperty;
    imageResolution?: ImageResolutionProperty;
    initialLetter?: InitialLetterProperty;
    inlineSize?: InlineSizeProperty;
    insetBlockEnd?: InsetBlockEndProperty;
    insetBlockStart?: InsetBlockStartProperty;
    insetInlineEnd?: InsetInlineEndProperty;
    insetInlineStart?: InsetInlineStartProperty;
    isolation?: IsolationProperty;
    justifyContent?: JustifyContentProperty;
    justifyItems?: JustifyItemsProperty;
    justifySelf?: JustifySelfProperty;
    left?: LeftProperty;
    letterSpacing?: LetterSpacingProperty;
    lineBreak?: LineBreakProperty;
    lineHeight?: LineHeightProperty;
    listStyleImage?: ListStyleImageProperty;
    listStylePosition?: ListStylePositionProperty;
    listStyleType?: ListStyleTypeProperty;
    marginBlockEnd?: MarginBlockEndProperty;
    marginBlockStart?: MarginBlockStartProperty;
    marginBottom?: MarginBottomProperty;
    marginInlineEnd?: MarginInlineEndProperty;
    marginInlineStart?: MarginInlineStartProperty;
    marginLeft?: MarginLeftProperty;
    marginRight?: MarginRightProperty;
    marginTop?: MarginTopProperty;
    maskBorderMode?: MaskBorderModeProperty;
    maskBorderOutset?: MaskBorderOutsetProperty;
    maskBorderRepeat?: MaskBorderRepeatProperty;
    maskBorderSlice?: MaskBorderSliceProperty;
    maskBorderSource?: MaskBorderSourceProperty;
    maskBorderWidth?: MaskBorderWidthProperty;
    maskClip?: MaskClipProperty;
    maskComposite?: MaskCompositeProperty;
    maskImage?: MaskImageProperty;
    maskMode?: MaskModeProperty;
    maskOrigin?: MaskOriginProperty;
    maskPosition?: MaskPositionProperty;
    maskRepeat?: MaskRepeatProperty;
    maskSize?: MaskSizeProperty;
    maskType?: MaskTypeProperty;
    maxBlockSize?: MaxBlockSizeProperty;
    maxHeight?: MaxHeightProperty;
    maxInlineSize?: MaxInlineSizeProperty;
    maxLines?: MaxLinesProperty;
    maxWidth?: MaxWidthProperty;
    minBlockSize?: MinBlockSizeProperty;
    minHeight?: MinHeightProperty;
    minInlineSize?: MinInlineSizeProperty;
    minWidth?: MinWidthProperty;
    mixBlendMode?: MixBlendModeProperty;
    motionOffset?: GlobalsString;
    motionPath?: MotionPathProperty;
    motionRotation?: GlobalsString;
    objectFit?: ObjectFitProperty;
    objectPosition?: ObjectPositionProperty;
    offsetPosition?: OffsetPositionProperty;
    opacity?: GlobalsNumber;
    order?: GlobalsNumber;
    orphans?: GlobalsNumber;
    outlineColor?: OutlineColorProperty;
    outlineOffset?: OutlineOffsetProperty;
    outlineStyle?: OutlineStyleProperty;
    outlineWidth?: OutlineWidthProperty;
    overflow?: OverflowProperty;
    overflowAnchor?: OverflowAnchorProperty;
    overflowBlock?: OverflowBlockProperty;
    overflowClipBox?: OverflowClipBoxProperty;
    overflowInline?: OverflowInlineProperty;
    overflowWrap?: OverflowWrapProperty;
    overflowX?: OverflowXProperty;
    overflowY?: OverflowYProperty;
    overscrollBehavior?: OverscrollBehaviorProperty;
    overscrollBehaviorX?: OverscrollBehaviorXProperty;
    overscrollBehaviorY?: OverscrollBehaviorYProperty;
    paddingBlockEnd?: PaddingBlockEndProperty;
    paddingBlockStart?: PaddingBlockStartProperty;
    paddingBottom?: PaddingBottomProperty;
    paddingInlineEnd?: PaddingInlineEndProperty;
    paddingInlineStart?: PaddingInlineStartProperty;
    paddingLeft?: PaddingLeftProperty;
    paddingRight?: PaddingRightProperty;
    paddingTop?: PaddingTopProperty;
    pageBreakAfter?: PageBreakAfterProperty;
    pageBreakBefore?: PageBreakBeforeProperty;
    pageBreakInside?: PageBreakInsideProperty;
    paintOrder?: PaintOrderProperty;
    perspective?: PerspectiveProperty;
    perspectiveOrigin?: PerspectiveOriginProperty;
    placeContent?: PlaceContentProperty;
    pointerEvents?: PointerEventsProperty;
    position?: PositionProperty;
    quotes?: QuotesProperty;
    resize?: ResizeProperty;
    right?: RightProperty;
    rotate?: RotateProperty;
    rowGap?: RowGapProperty;
    rubyAlign?: RubyAlignProperty;
    rubyMerge?: RubyMergeProperty;
    rubyPosition?: RubyPositionProperty;
    scale?: ScaleProperty;
    scrollBehavior?: ScrollBehaviorProperty;
    scrollMargin?: ScrollMarginProperty;
    scrollMarginBlock?: ScrollMarginBlockProperty;
    scrollMarginBlockEnd?: ScrollMarginBlockEndProperty;
    scrollMarginBlockStart?: ScrollMarginBlockStartProperty;
    scrollMarginBottom?: ScrollMarginBottomProperty;
    scrollMarginInlineEnd?: ScrollMarginInlineEndProperty;
    scrollMarginInlineStart?: ScrollMarginInlineStartProperty;
    scrollMarginLeft?: ScrollMarginLeftProperty;
    scrollMarginRight?: ScrollMarginRightProperty;
    scrollMarginTop?: ScrollMarginTopProperty;
    scrollPadding?: ScrollPaddingProperty;
    scrollPaddingBlock?: ScrollPaddingBlockProperty;
    scrollPaddingBlockEnd?: ScrollPaddingBlockEndProperty;
    scrollPaddingBlockStart?: ScrollPaddingBlockStartProperty;
    scrollPaddingBottom?: ScrollPaddingBottomProperty;
    scrollPaddingInline?: ScrollPaddingInlineProperty;
    scrollPaddingInlineEnd?: ScrollPaddingInlineEndProperty;
    scrollPaddingInlineStart?: ScrollPaddingInlineStartProperty;
    scrollPaddingLeft?: ScrollPaddingLeftProperty;
    scrollPaddingRight?: ScrollPaddingRightProperty;
    scrollPaddingTop?: ScrollPaddingTopProperty;
    scrollSnapAlign?: ScrollSnapAlignProperty;
    scrollSnapStop?: ScrollSnapStopProperty;
    scrollSnapType?: ScrollSnapTypeProperty;
    scrollbarColor?: ScrollbarColorProperty;
    scrollbarWidth?: ScrollbarWidthProperty;
    shapeImageThreshold?: GlobalsNumber;
    shapeMargin?: ShapeMarginProperty;
    shapeOutside?: ShapeOutsideProperty;
    tabSize?: TabSizeProperty;
    tableLayout?: TableLayoutProperty;
    textAlign?: TextAlignProperty;
    textAlignLast?: TextAlignLastProperty;
    textCombineUpright?: TextCombineUprightProperty;
    textDecorationColor?: TextDecorationColorProperty;
    textDecorationLine?: TextDecorationLineProperty;
    textDecorationSkip?: TextDecorationSkipProperty;
    textDecorationSkipInk?: TextDecorationSkipInkProperty;
    textDecorationStyle?: TextDecorationStyleProperty;
    textEmphasisColor?: TextEmphasisColorProperty;
    textEmphasisPosition?: GlobalsString;
    textEmphasisStyle?: TextEmphasisStyleProperty;
    textIndent?: TextIndentProperty;
    textJustify?: TextJustifyProperty;
    textOrientation?: TextOrientationProperty;
    textOverflow?: TextOverflowProperty;
    textRendering?: TextRenderingProperty;
    textShadow?: TextShadowProperty;
    textSizeAdjust?: TextSizeAdjustProperty;
    textTransform?: TextTransformProperty;
    textUnderlinePosition?: TextUnderlinePositionProperty;
    top?: TopProperty;
    touchAction?: TouchActionProperty;
    transform?: TransformProperty;
    transformBox?: TransformBoxProperty;
    transformOrigin?: TransformOriginProperty;
    transformStyle?: TransformStyleProperty;
    transitionDelay?: GlobalsString;
    transitionDuration?: GlobalsString;
    transitionProperty?: TransitionPropertyProperty;
    transitionTimingFunction?: TransitionTimingFunctionProperty;
    translate?: TranslateProperty;
    unicodeBidi?: UnicodeBidiProperty;
    userSelect?: UserSelectProperty;
    verticalAlign?: VerticalAlignProperty;
    visibility?: VisibilityProperty;
    whiteSpace?: WhiteSpaceProperty;
    widows?: GlobalsNumber;
    width?: WidthProperty;
    willChange?: WillChangeProperty;
    wordBreak?: WordBreakProperty;
    wordSpacing?: WordSpacingProperty;
    wordWrap?: WordWrapProperty;
    writingMode?: WritingModeProperty;
    zIndex?: ZIndexProperty;
    zoom?: ZoomProperty;
    all?: Globals;
    animation?: AnimationProperty;
    background?: BackgroundProperty;
    border?: BorderProperty;
    borderBlockEnd?: BorderBlockEndProperty;
    borderBlockStart?: BorderBlockStartProperty;
    borderBottom?: BorderBottomProperty;
    borderColor?: BorderColorProperty;
    borderImage?: BorderImageProperty;
    borderInlineEnd?: BorderInlineEndProperty;
    borderInlineStart?: BorderInlineStartProperty;
    borderLeft?: BorderLeftProperty;
    borderRadius?: BorderRadiusProperty;
    borderRight?: BorderRightProperty;
    borderStyle?: BorderStyleProperty;
    borderTop?: BorderTopProperty;
    borderWidth?: BorderWidthProperty;
    columnRule?: ColumnRuleProperty;
    columns?: ColumnsProperty;
    flex?: FlexProperty;
    flexFlow?: FlexFlowProperty;
    font?: FontProperty;
    gap?: GapProperty;
    grid?: GridProperty;
    gridArea?: GridAreaProperty;
    gridColumn?: GridColumnProperty;
    gridRow?: GridRowProperty;
    gridTemplate?: GridTemplateProperty;
    lineClamp?: LineClampProperty;
    listStyle?: ListStyleProperty;
    margin?: MarginProperty;
    mask?: MaskProperty;
    maskBorder?: MaskBorderProperty;
    motion?: GlobalsString;
    outline?: OutlineProperty;
    padding?: PaddingProperty;
    placeItems?: PlaceItemsProperty;
    textDecoration?: TextDecorationProperty;
    textEmphasis?: TextEmphasisProperty;
    transition?: TransitionProperty;
    MozAnimationDelay?: GlobalsString;
    MozAnimationDirection?: AnimationDirectionProperty;
    MozAnimationDuration?: GlobalsString;
    MozAnimationFillMode?: AnimationFillModeProperty;
    MozAnimationIterationCount?: AnimationIterationCountProperty;
    MozAnimationName?: AnimationNameProperty;
    MozAnimationPlayState?: AnimationPlayStateProperty;
    MozAnimationTimingFunction?: AnimationTimingFunctionProperty;
    MozAppearance?: MozAppearanceProperty;
    MozBackfaceVisibility?: BackfaceVisibilityProperty;
    MozBorderBottomColors?: MozBorderBottomColorsProperty;
    MozBorderEndColor?: BorderInlineEndColorProperty;
    MozBorderEndStyle?: BorderInlineEndStyleProperty;
    MozBorderEndWidth?: BorderInlineEndWidthProperty;
    MozBorderLeftColors?: MozBorderLeftColorsProperty;
    MozBorderRightColors?: MozBorderRightColorsProperty;
    MozBorderStartColor?: BorderInlineStartColorProperty;
    MozBorderStartStyle?: BorderInlineStartStyleProperty;
    MozBorderTopColors?: MozBorderTopColorsProperty;
    MozBoxSizing?: BoxSizingProperty;
    MozColumnCount?: ColumnCountProperty;
    MozColumnFill?: ColumnFillProperty;
    MozColumnGap?: ColumnGapProperty;
    MozColumnRuleColor?: ColumnRuleColorProperty;
    MozColumnRuleStyle?: ColumnRuleStyleProperty;
    MozColumnRuleWidth?: ColumnRuleWidthProperty;
    MozColumnWidth?: ColumnWidthProperty;
    MozContextProperties?: MozContextPropertiesProperty;
    MozFloatEdge?: MozFloatEdgeProperty;
    MozFontFeatureSettings?: FontFeatureSettingsProperty;
    MozFontLanguageOverride?: FontLanguageOverrideProperty;
    MozForceBrokenImageIcon?: GlobalsNumber;
    MozHyphens?: HyphensProperty;
    MozImageRegion?: MozImageRegionProperty;
    MozMarginEnd?: MarginInlineEndProperty;
    MozMarginStart?: MarginInlineStartProperty;
    MozOrient?: MozOrientProperty;
    MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty;
    MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty;
    MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty;
    MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty;
    MozPaddingEnd?: PaddingInlineEndProperty;
    MozPaddingStart?: PaddingInlineStartProperty;
    MozPerspective?: PerspectiveProperty;
    MozPerspectiveOrigin?: PerspectiveOriginProperty;
    MozStackSizing?: MozStackSizingProperty;
    MozTabSize?: TabSizeProperty;
    MozTextSizeAdjust?: TextSizeAdjustProperty;
    MozTransformOrigin?: TransformOriginProperty;
    MozTransformStyle?: TransformStyleProperty;
    MozTransitionDelay?: GlobalsString;
    MozTransitionDuration?: GlobalsString;
    MozTransitionProperty?: TransitionPropertyProperty;
    MozTransitionTimingFunction?: TransitionTimingFunctionProperty;
    MozUserFocus?: MozUserFocusProperty;
    MozUserModify?: MozUserModifyProperty;
    MozUserSelect?: UserSelectProperty;
    MozWindowDragging?: MozWindowDraggingProperty;
    MozWindowShadow?: MozWindowShadowProperty;
    msAccelerator?: MsAcceleratorProperty;
    msAlignSelf?: AlignSelfProperty;
    msBlockProgression?: MsBlockProgressionProperty;
    msContentZoomChaining?: MsContentZoomChainingProperty;
    msContentZoomLimitMax?: GlobalsString;
    msContentZoomLimitMin?: GlobalsString;
    msContentZoomSnapPoints?: GlobalsString;
    msContentZoomSnapType?: MsContentZoomSnapTypeProperty;
    msContentZooming?: MsContentZoomingProperty;
    msFilter?: GlobalsString;
    msFlexDirection?: FlexDirectionProperty;
    msFlexPositive?: GlobalsNumber;
    msFlowFrom?: MsFlowFromProperty;
    msFlowInto?: MsFlowIntoProperty;
    msGridColumns?: GridAutoColumnsProperty;
    msGridRows?: GridAutoRowsProperty;
    msHighContrastAdjust?: MsHighContrastAdjustProperty;
    msHyphenateLimitChars?: MsHyphenateLimitCharsProperty;
    msHyphenateLimitLines?: MsHyphenateLimitLinesProperty;
    msHyphenateLimitZone?: MsHyphenateLimitZoneProperty;
    msHyphens?: HyphensProperty;
    msImeAlign?: MsImeAlignProperty;
    msLineBreak?: LineBreakProperty;
    msOrder?: GlobalsNumber;
    msOverflowStyle?: MsOverflowStyleProperty;
    msOverflowX?: OverflowXProperty;
    msOverflowY?: OverflowYProperty;
    msScrollChaining?: MsScrollChainingProperty;
    msScrollLimitXMax?: MsScrollLimitXMaxProperty;
    msScrollLimitXMin?: MsScrollLimitXMinProperty;
    msScrollLimitYMax?: MsScrollLimitYMaxProperty;
    msScrollLimitYMin?: MsScrollLimitYMinProperty;
    msScrollRails?: MsScrollRailsProperty;
    msScrollSnapPointsX?: GlobalsString;
    msScrollSnapPointsY?: GlobalsString;
    msScrollSnapType?: MsScrollSnapTypeProperty;
    msScrollTranslation?: MsScrollTranslationProperty;
    msTextAutospace?: MsTextAutospaceProperty;
    msTextCombineHorizontal?: TextCombineUprightProperty;
    msTextOverflow?: TextOverflowProperty;
    msTextSizeAdjust?: TextSizeAdjustProperty;
    msTouchAction?: TouchActionProperty;
    msTouchSelect?: MsTouchSelectProperty;
    msTransform?: TransformProperty;
    msTransformOrigin?: TransformOriginProperty;
    msUserSelect?: MsUserSelectProperty;
    msWordBreak?: WordBreakProperty;
    msWrapFlow?: MsWrapFlowProperty;
    msWrapMargin?: MsWrapMarginProperty;
    msWrapThrough?: MsWrapThroughProperty;
    msWritingMode?: WritingModeProperty;
    OObjectFit?: ObjectFitProperty;
    OObjectPosition?: ObjectPositionProperty;
    OTabSize?: TabSizeProperty;
    OTextOverflow?: TextOverflowProperty;
    OTransformOrigin?: TransformOriginProperty;
    WebkitAlignContent?: AlignContentProperty;
    WebkitAlignItems?: AlignItemsProperty;
    WebkitAlignSelf?: AlignSelfProperty;
    WebkitAnimationDelay?: GlobalsString;
    WebkitAnimationDirection?: AnimationDirectionProperty;
    WebkitAnimationDuration?: GlobalsString;
    WebkitAnimationFillMode?: AnimationFillModeProperty;
    WebkitAnimationIterationCount?: AnimationIterationCountProperty;
    WebkitAnimationName?: AnimationNameProperty;
    WebkitAnimationPlayState?: AnimationPlayStateProperty;
    WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty;
    WebkitAppearance?: WebkitAppearanceProperty;
    WebkitBackdropFilter?: BackdropFilterProperty;
    WebkitBackfaceVisibility?: BackfaceVisibilityProperty;
    WebkitBackgroundClip?: BackgroundClipProperty;
    WebkitBackgroundOrigin?: BackgroundOriginProperty;
    WebkitBackgroundSize?: BackgroundSizeProperty;
    WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty;
    WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty;
    WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty;
    WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty;
    WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty;
    WebkitBorderImageSlice?: BorderImageSliceProperty;
    WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty;
    WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty;
    WebkitBoxDecorationBreak?: BoxDecorationBreakProperty;
    WebkitBoxReflect?: WebkitBoxReflectProperty;
    WebkitBoxShadow?: BoxShadowProperty;
    WebkitBoxSizing?: BoxSizingProperty;
    WebkitClipPath?: ClipPathProperty;
    WebkitColorAdjust?: ColorAdjustProperty;
    WebkitColumnCount?: ColumnCountProperty;
    WebkitColumnGap?: ColumnGapProperty;
    WebkitColumnRuleColor?: ColumnRuleColorProperty;
    WebkitColumnRuleStyle?: ColumnRuleStyleProperty;
    WebkitColumnRuleWidth?: ColumnRuleWidthProperty;
    WebkitColumnSpan?: ColumnSpanProperty;
    WebkitColumnWidth?: ColumnWidthProperty;
    WebkitFilter?: FilterProperty;
    WebkitFlexBasis?: FlexBasisProperty;
    WebkitFlexDirection?: FlexDirectionProperty;
    WebkitFlexGrow?: GlobalsNumber;
    WebkitFlexShrink?: GlobalsNumber;
    WebkitFlexWrap?: FlexWrapProperty;
    WebkitFontFeatureSettings?: FontFeatureSettingsProperty;
    WebkitFontKerning?: FontKerningProperty;
    WebkitFontVariantLigatures?: FontVariantLigaturesProperty;
    WebkitHyphens?: HyphensProperty;
    WebkitJustifyContent?: JustifyContentProperty;
    WebkitLineBreak?: LineBreakProperty;
    WebkitMarginEnd?: MarginInlineEndProperty;
    WebkitMarginStart?: MarginInlineStartProperty;
    WebkitMaskAttachment?: WebkitMaskAttachmentProperty;
    WebkitMaskClip?: WebkitMaskClipProperty;
    WebkitMaskComposite?: WebkitMaskCompositeProperty;
    WebkitMaskImage?: WebkitMaskImageProperty;
    WebkitMaskOrigin?: WebkitMaskOriginProperty;
    WebkitMaskPosition?: WebkitMaskPositionProperty;
    WebkitMaskPositionX?: WebkitMaskPositionXProperty;
    WebkitMaskPositionY?: WebkitMaskPositionYProperty;
    WebkitMaskRepeat?: WebkitMaskRepeatProperty;
    WebkitMaskRepeatX?: WebkitMaskRepeatXProperty;
    WebkitMaskRepeatY?: WebkitMaskRepeatYProperty;
    WebkitMaskSize?: WebkitMaskSizeProperty;
    WebkitMaxInlineSize?: MaxInlineSizeProperty;
    WebkitOrder?: GlobalsNumber;
    WebkitOverflowScrolling?: WebkitOverflowScrollingProperty;
    WebkitPaddingEnd?: PaddingInlineEndProperty;
    WebkitPaddingStart?: PaddingInlineStartProperty;
    WebkitPerspective?: PerspectiveProperty;
    WebkitPerspectiveOrigin?: PerspectiveOriginProperty;
    WebkitScrollSnapType?: ScrollSnapTypeProperty;
    WebkitShapeMargin?: ShapeMarginProperty;
    WebkitTapHighlightColor?: WebkitTapHighlightColorProperty;
    WebkitTextCombine?: TextCombineUprightProperty;
    WebkitTextDecorationColor?: TextDecorationColorProperty;
    WebkitTextDecorationLine?: TextDecorationLineProperty;
    WebkitTextDecorationSkip?: TextDecorationSkipProperty;
    WebkitTextDecorationStyle?: TextDecorationStyleProperty;
    WebkitTextEmphasisColor?: TextEmphasisColorProperty;
    WebkitTextEmphasisPosition?: GlobalsString;
    WebkitTextEmphasisStyle?: TextEmphasisStyleProperty;
    WebkitTextFillColor?: WebkitTextFillColorProperty;
    WebkitTextOrientation?: TextOrientationProperty;
    WebkitTextSizeAdjust?: TextSizeAdjustProperty;
    WebkitTextStrokeColor?: WebkitTextStrokeColorProperty;
    WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty;
    WebkitTouchCallout?: WebkitTouchCalloutProperty;
    WebkitTransform?: TransformProperty;
    WebkitTransformOrigin?: TransformOriginProperty;
    WebkitTransformStyle?: TransformStyleProperty;
    WebkitTransitionDelay?: GlobalsString;
    WebkitTransitionDuration?: GlobalsString;
    WebkitTransitionProperty?: TransitionPropertyProperty;
    WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty;
    WebkitUserModify?: WebkitUserModifyProperty;
    WebkitUserSelect?: UserSelectProperty;
    WebkitWritingMode?: WritingModeProperty;
    MozAnimation?: AnimationProperty;
    MozBorderImage?: BorderImageProperty;
    MozColumnRule?: ColumnRuleProperty;
    MozColumns?: ColumnsProperty;
    MozTransition?: TransitionProperty;
    msContentZoomLimit?: GlobalsString;
    msContentZoomSnap?: MsContentZoomSnapProperty;
    msFlex?: FlexProperty;
    msScrollLimit?: GlobalsString;
    msScrollSnapX?: GlobalsString;
    msScrollSnapY?: GlobalsString;
    OBorderImage?: BorderImageProperty;
    WebkitAnimation?: AnimationProperty;
    WebkitBorderBefore?: WebkitBorderBeforeProperty;
    WebkitBorderImage?: BorderImageProperty;
    WebkitBorderRadius?: BorderRadiusProperty;
    WebkitColumnRule?: ColumnRuleProperty;
    WebkitColumns?: ColumnsProperty;
    WebkitFlex?: FlexProperty;
    WebkitFlexFlow?: FlexFlowProperty;
    WebkitLineClamp?: WebkitLineClampProperty;
    WebkitMask?: WebkitMaskProperty;
    WebkitTextEmphasis?: TextEmphasisProperty;
    WebkitTextStroke?: WebkitTextStrokeProperty;
    WebkitTransition?: TransitionProperty;
    alignmentBaseline?: AlignmentBaselineProperty;
    baselineShift?: BaselineShiftProperty;
    clipRule?: ClipRuleProperty;
    colorInterpolation?: ColorInterpolationProperty;
    colorRendering?: ColorRenderingProperty;
    dominantBaseline?: DominantBaselineProperty;
    fill?: FillProperty;
    fillOpacity?: GlobalsNumber;
    fillRule?: FillRuleProperty;
    floodColor?: FloodColorProperty;
    floodOpacity?: GlobalsNumber;
    glyphOrientationVertical?: GlyphOrientationVerticalProperty;
    lightingColor?: LightingColorProperty;
    marker?: MarkerProperty;
    markerEnd?: MarkerEndProperty;
    markerMid?: MarkerMidProperty;
    markerStart?: MarkerStartProperty;
    shapeRendering?: ShapeRenderingProperty;
    stopColor?: StopColorProperty;
    stopOpacity?: GlobalsNumber;
    stroke?: StrokeProperty;
    strokeDasharray?: StrokeDasharrayProperty;
    strokeDashoffset?: StrokeDashoffsetProperty;
    strokeLinecap?: StrokeLinecapProperty;
    strokeLinejoin?: StrokeLinejoinProperty;
    strokeMiterlimit?: GlobalsNumber;
    strokeOpacity?: GlobalsNumber;
    strokeWidth?: StrokeWidthProperty;
    textAnchor?: TextAnchorProperty;
    vectorEffect?: VectorEffectProperty;
    azimuth?: AzimuthProperty;
    boxAlign?: BoxAlignProperty;
    boxDirection?: BoxDirectionProperty;
    boxFlex?: GlobalsNumber;
    boxFlexGroup?: GlobalsNumber;
    boxLines?: BoxLinesProperty;
    boxOrdinalGroup?: GlobalsNumber;
    boxOrient?: BoxOrientProperty;
    boxPack?: BoxPackProperty;
    clip?: ClipProperty;
    fontVariantAlternates?: FontVariantAlternatesProperty;
    gridColumnGap?: GridColumnGapProperty;
    gridGap?: GridGapProperty;
    gridRowGap?: GridRowGapProperty;
    imeMode?: ImeModeProperty;
    offsetBlockEnd?: InsetBlockEndProperty;
    offsetBlockStart?: InsetBlockStartProperty;
    offsetInlineEnd?: InsetInlineEndProperty;
    offsetInlineStart?: InsetInlineStartProperty;
    scrollSnapCoordinate?: ScrollSnapCoordinateProperty;
    scrollSnapDestination?: ScrollSnapDestinationProperty;
    scrollSnapPointsX?: ScrollSnapPointsXProperty;
    scrollSnapPointsY?: ScrollSnapPointsYProperty;
    scrollSnapTypeX?: ScrollSnapTypeXProperty;
    scrollSnapTypeY?: ScrollSnapTypeYProperty;
    textCombineHorizontal?: TextCombineUprightProperty;
    KhtmlBoxAlign?: BoxAlignProperty;
    KhtmlBoxDirection?: BoxDirectionProperty;
    KhtmlBoxFlex?: GlobalsNumber;
    KhtmlBoxFlexGroup?: GlobalsNumber;
    KhtmlBoxLines?: BoxLinesProperty;
    KhtmlBoxOrdinalGroup?: GlobalsNumber;
    KhtmlBoxOrient?: BoxOrientProperty;
    KhtmlBoxPack?: BoxPackProperty;
    MozBackgroundInlinePolicy?: BoxDecorationBreakProperty;
    MozBackgroundSize?: BackgroundSizeProperty;
    MozBorderRadius?: BorderRadiusProperty;
    MozBorderRadiusBottomleft?: BorderBottomLeftRadiusProperty;
    MozBorderRadiusBottomright?: BorderBottomRightRadiusProperty;
    MozBorderRadiusTopleft?: BorderTopLeftRadiusProperty;
    MozBorderRadiusTopright?: BorderTopRightRadiusProperty;
    MozBoxAlign?: BoxAlignProperty;
    MozBoxDirection?: BoxDirectionProperty;
    MozBoxFlex?: GlobalsNumber;
    MozBoxOrdinalGroup?: GlobalsNumber;
    MozBoxOrient?: BoxOrientProperty;
    MozBoxPack?: BoxPackProperty;
    MozBoxShadow?: BoxShadowProperty;
    MozOpacity?: GlobalsNumber;
    MozOutline?: OutlineProperty;
    MozOutlineColor?: OutlineColorProperty;
    MozOutlineStyle?: OutlineStyleProperty;
    MozOutlineWidth?: OutlineWidthProperty;
    MozResize?: ResizeProperty;
    MozTextAlignLast?: TextAlignLastProperty;
    MozTextDecorationColor?: TextDecorationColorProperty;
    MozTextDecorationLine?: TextDecorationLineProperty;
    MozTextDecorationStyle?: TextDecorationStyleProperty;
    msImeMode?: ImeModeProperty;
    msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty;
    msScrollbarArrowColor?: MsScrollbarArrowColorProperty;
    msScrollbarBaseColor?: MsScrollbarBaseColorProperty;
    msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty;
    msScrollbarFaceColor?: MsScrollbarFaceColorProperty;
    msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty;
    msScrollbarShadowColor?: MsScrollbarShadowColorProperty;
    msScrollbarTrackColor?: MsScrollbarTrackColorProperty;
    OAnimation?: AnimationProperty;
    OAnimationDelay?: GlobalsString;
    OAnimationDirection?: AnimationDirectionProperty;
    OAnimationDuration?: GlobalsString;
    OAnimationFillMode?: AnimationFillModeProperty;
    OAnimationIterationCount?: AnimationIterationCountProperty;
    OAnimationName?: AnimationNameProperty;
    OAnimationPlayState?: AnimationPlayStateProperty;
    OAnimationTimingFunction?: AnimationTimingFunctionProperty;
    OTransform?: TransformProperty;
    OTransition?: TransitionProperty;
    OTransitionDelay?: GlobalsString;
    OTransitionDuration?: GlobalsString;
    OTransitionProperty?: TransitionPropertyProperty;
    OTransitionTimingFunction?: TransitionTimingFunctionProperty;
    WebkitBoxAlign?: BoxAlignProperty;
    WebkitBoxDirection?: BoxDirectionProperty;
    WebkitBoxFlex?: GlobalsNumber;
    WebkitBoxFlexGroup?: GlobalsNumber;
    WebkitBoxLines?: BoxLinesProperty;
    WebkitBoxOrdinalGroup?: GlobalsNumber;
    WebkitBoxOrient?: BoxOrientProperty;
    WebkitBoxPack?: BoxPackProperty;
    WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty;
    WebkitScrollSnapPointsY?: ScrollSnapPointsYProperty;
}

export interface CounterStyle {
    additiveSymbols?: string;
    fallback?: string;
    negative?: string;
    pad?: string;
    prefix?: string;
    range?: CounterStyleRangeProperty;
    speakAs?: CounterStyleSpeakAsProperty;
    suffix?: string;
    symbols?: string;
    system?: CounterStyleSystemProperty;
}

export interface FontFace {
    MozFontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
    fontDisplay?: FontFaceFontDisplayProperty;
    fontFamily?: string;
    fontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
    fontStretch?: FontFaceFontStretchProperty;
    fontStyle?: FontFaceFontStyleProperty;
    fontVariant?: FontFaceFontVariantProperty;
    fontVariationSettings?: FontFaceFontVariationSettingsProperty;
    fontWeight?: FontFaceFontWeightProperty;
    src?: string;
    unicodeRange?: string;
}

export interface KeyframesPercentageObject {
    [percentage: string]: Properties;
}

export type KeyframesObject = KeyframesPercentageObject & {
    from?: Properties;
    to?: Properties;
};

export interface Page {
    bleed?: PageBleedProperty;
    marks?: PageMarksProperty;
}

export interface Viewport {
    msHeight?: ViewportHeightProperty;
    msMaxHeight?: ViewportMaxHeightProperty;
    msMaxWidth?: ViewportMaxWidthProperty;
    msMaxZoom?: ViewportMaxZoomProperty;
    msMinHeight?: ViewportMinHeightProperty;
    msMinWidth?: ViewportMinWidthProperty;
    msMinZoom?: ViewportMinZoomProperty;
    msOrientation?: ViewportOrientationProperty;
    msUserZoom?: ViewportUserZoomProperty;
    msWidth?: ViewportWidthProperty;
    msZoom?: ViewportZoomProperty;
    OOrientation?: ViewportOrientationProperty;
    height?: ViewportHeightProperty;
    maxHeight?: ViewportMaxHeightProperty;
    maxWidth?: ViewportMaxWidthProperty;
    maxZoom?: ViewportMaxZoomProperty;
    minHeight?: ViewportMinHeightProperty;
    minWidth?: ViewportMinWidthProperty;
    minZoom?: ViewportMinZoomProperty;
    orientation?: ViewportOrientationProperty;
    userZoom?: ViewportUserZoomProperty;
    width?: ViewportWidthProperty;
    zoom?: ViewportZoomProperty;
}

export type AtRules =
    | '@charset'
    | '@counter-style'
    | '@document'
    | '@font-face'
    | '@font-feature-values'
    | '@import'
    | '@keyframes'
    | '@media'
    | '@namespace'
    | '@page'
    | '@supports'
    | '@viewport';

export type AdvancedPseudos =
    | ':-moz-dir'
    | '::cue'
    | '::slotted'
    | ':dir'
    | ':has'
    | ':host'
    | ':host-context'
    | ':is'
    | ':lang'
    | ':not'
    | ':nth-child'
    | ':nth-last-child'
    | ':nth-last-of-type'
    | ':nth-of-type'
    | ':where';

export type SimplePseudos =
    | ':-moz-any-link'
    | ':-moz-full-screen'
    | ':-moz-only-whitespace'
    | ':-moz-placeholder'
    | ':-moz-read-only'
    | ':-moz-read-write'
    | ':-ms-fullscreen'
    | ':-ms-input-placeholder'
    | ':-webkit-any-link'
    | ':-webkit-full-screen'
    | '::-moz-placeholder'
    | '::-moz-progress-bar'
    | '::-moz-range-progress'
    | '::-moz-range-thumb'
    | '::-moz-range-track'
    | '::-moz-selection'
    | '::-ms-backdrop'
    | '::-ms-browse'
    | '::-ms-check'
    | '::-ms-clear'
    | '::-ms-fill'
    | '::-ms-fill-lower'
    | '::-ms-fill-upper'
    | '::-ms-reveal'
    | '::-ms-thumb'
    | '::-ms-ticks-after'
    | '::-ms-ticks-before'
    | '::-ms-tooltip'
    | '::-ms-track'
    | '::-ms-value'
    | '::-webkit-backdrop'
    | '::-webkit-input-placeholder'
    | '::-webkit-progress-bar'
    | '::-webkit-progress-inner-value'
    | '::-webkit-progress-value'
    | '::-webkit-slider-runnable-track'
    | '::-webkit-slider-thumb'
    | '::after'
    | '::backdrop'
    | '::before'
    | '::cue'
    | '::first-letter'
    | '::first-line'
    | '::grammar-error'
    | '::placeholder'
    | '::selection'
    | '::spelling-error'
    | ':active'
    | ':after'
    | ':any-link'
    | ':before'
    | ':blank'
    | ':checked'
    | ':default'
    | ':defined'
    | ':disabled'
    | ':empty'
    | ':enabled'
    | ':first'
    | ':first-child'
    | ':first-letter'
    | ':first-line'
    | ':first-of-type'
    | ':focus'
    | ':focus-within'
    | ':fullscreen'
    | ':hover'
    | ':in-range'
    | ':indeterminate'
    | ':invalid'
    | ':last-child'
    | ':last-of-type'
    | ':left'
    | ':link'
    | ':only-child'
    | ':only-of-type'
    | ':optional'
    | ':out-of-range'
    | ':placeholder-shown'
    | ':read-only'
    | ':read-write'
    | ':required'
    | ':right'
    | ':root'
    | ':scope'
    | ':target'
    | ':valid'
    | ':visited';

export type Pseudos = AdvancedPseudos | SimplePseudos;

export type Globals =
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset';

export type GlobalsString = Globals | string;

export type GlobalsNumber = Globals | number;

export type AlignContentProperty =
    | Globals
    | ContentDistribution
    | ContentPosition
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'unsafe center'
    | 'unsafe start'
    | 'unsafe end'
    | 'unsafe flex-start'
    | 'unsafe flex-end'
    | 'safe center'
    | 'safe start'
    | 'safe end'
    | 'safe flex-start'
    | 'safe flex-end'
    | 'normal';

export type AlignItemsProperty =
    | Globals
    | SelfPosition
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'unsafe center'
    | 'unsafe start'
    | 'unsafe end'
    | 'unsafe flex-start'
    | 'unsafe flex-end'
    | 'safe center'
    | 'safe start'
    | 'safe end'
    | 'safe flex-start'
    | 'safe flex-end'
    | 'unsafe self-start'
    | 'unsafe self-end'
    | 'safe self-start'
    | 'safe self-end'
    | 'normal'
    | 'stretch';

export type AlignSelfProperty =
    | Globals
    | SelfPosition
    | 'auto'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'unsafe center'
    | 'unsafe start'
    | 'unsafe end'
    | 'unsafe flex-start'
    | 'unsafe flex-end'
    | 'safe center'
    | 'safe start'
    | 'safe end'
    | 'safe flex-start'
    | 'safe flex-end'
    | 'unsafe self-start'
    | 'unsafe self-end'
    | 'safe self-start'
    | 'safe self-end'
    | 'normal'
    | 'stretch';

export type AnimationProperty = Globals | SingleAnimation | string;

export type AnimationDirectionProperty = Globals | SingleAnimationDirection;

export type AnimationFillModeProperty = Globals | SingleAnimationFillMode;

export type AnimationIterationCountProperty = Globals | 'infinite' | number;

export type AnimationNameProperty = Globals | 'none' | string | KeyframesObject;

export type AnimationPlayStateProperty = Globals | 'paused' | 'running';

export type AnimationTimingFunctionProperty = Globals | SingleTimingFunction;

export type AppearanceProperty = Globals | 'none';

export type BackdropFilterProperty = Globals | 'none' | string;

export type BackfaceVisibilityProperty = Globals | 'hidden' | 'visible';

export type BackgroundProperty = Globals | FinalBgLayer | string;

export type BackgroundAttachmentProperty = Globals | Attachment;

export type BackgroundBlendModeProperty = Globals | BlendMode | string;

export type BackgroundClipProperty = Globals | Box;

export type BackgroundColorProperty = Globals | Color;

export type BackgroundImageProperty = Globals | 'none' | string;

export type BackgroundOriginProperty = Globals | Box;

export type BackgroundPositionProperty = Globals | BgPosition;

export type BackgroundPositionXProperty =
    | Globals
    | TLength
    | 'center'
    | 'left'
    | 'right'
    | 'x-end'
    | 'x-start';

export type BackgroundPositionYProperty =
    | Globals
    | TLength
    | 'bottom'
    | 'center'
    | 'top'
    | 'y-end'
    | 'y-start';

export type BackgroundRepeatProperty = Globals | RepeatStyle;

export type BackgroundSizeProperty = Globals | BgSize;

export type BlockOverflowProperty = Globals | 'clip' | 'ellipsis' | string;

export type BlockSizeProperty =
    | Globals
    | TLength
    | 'auto'
    | 'available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | string;

export type BorderProperty = Globals | LineWidth | LineStyle | Color | string;

export type BorderBlockEndProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type BorderBlockEndColorProperty = Globals | Color;

export type BorderBlockEndStyleProperty = Globals | LineStyle | string;

export type BorderBlockEndWidthProperty = Globals | LineWidth | string;

export type BorderBlockStartProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type BorderBlockStartColorProperty = Globals | Color;

export type BorderBlockStartStyleProperty = Globals | LineStyle | string;

export type BorderBlockStartWidthProperty = Globals | LineWidth | string;

export type BorderBottomProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type BorderBottomColorProperty = Globals | Color;

export type BorderBottomLeftRadiusProperty = Globals | TLength | string;

export type BorderBottomRightRadiusProperty = Globals | TLength | string;

export type BorderBottomStyleProperty = Globals | LineStyle;

export type BorderBottomWidthProperty = Globals | LineWidth;

export type BorderCollapseProperty = Globals | 'collapse' | 'separate';

export type BorderColorProperty = Globals | Color | string;

export type BorderImageProperty =
    | Globals
    | 'none'
    | 'repeat'
    | 'round'
    | 'space'
    | 'stretch'
    | string
    | number;

export type BorderImageOutsetProperty = Globals | TLength | string | number;

export type BorderImageRepeatProperty =
    | Globals
    | 'repeat'
    | 'round'
    | 'space'
    | 'stretch'
    | string;

export type BorderImageSliceProperty = Globals | string | number;

export type BorderImageSourceProperty = Globals | 'none' | string;

export type BorderImageWidthProperty =
    | Globals
    | TLength
    | 'auto'
    | string
    | number;

export type BorderInlineEndProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type BorderInlineEndColorProperty = Globals | Color;

export type BorderInlineEndStyleProperty = Globals | LineStyle | string;

export type BorderInlineEndWidthProperty = Globals | LineWidth | string;

export type BorderInlineStartProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type BorderInlineStartColorProperty = Globals | Color;

export type BorderInlineStartStyleProperty = Globals | LineStyle | string;

export type BorderInlineStartWidthProperty = Globals | LineWidth | string;

export type BorderLeftProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type BorderLeftColorProperty = Globals | Color;

export type BorderLeftStyleProperty = Globals | LineStyle;

export type BorderLeftWidthProperty = Globals | LineWidth;

export type BorderRadiusProperty = Globals | TLength | string;

export type BorderRightProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type BorderRightColorProperty = Globals | Color;

export type BorderRightStyleProperty = Globals | LineStyle;

export type BorderRightWidthProperty = Globals | LineWidth;

export type BorderSpacingProperty = Globals | TLength | string;

export type BorderStyleProperty = Globals | LineStyle | string;

export type BorderTopProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type BorderTopColorProperty = Globals | Color;

export type BorderTopLeftRadiusProperty = Globals | TLength | string;

export type BorderTopRightRadiusProperty = Globals | TLength | string;

export type BorderTopStyleProperty = Globals | LineStyle;

export type BorderTopWidthProperty = Globals | LineWidth;

export type BorderWidthProperty = Globals | LineWidth | string;

export type BottomProperty = Globals | TLength | 'auto' | string;

export type BoxAlignProperty =
    | Globals
    | 'baseline'
    | 'center'
    | 'end'
    | 'start'
    | 'stretch';

export type BoxDecorationBreakProperty = Globals | 'clone' | 'slice';

export type BoxDirectionProperty = Globals | 'inherit' | 'normal' | 'reverse';

export type BoxLinesProperty = Globals | 'multiple' | 'single';

export type BoxOrientProperty =
    | Globals
    | 'block-axis'
    | 'horizontal'
    | 'inherit'
    | 'inline-axis'
    | 'vertical';

export type BoxPackProperty = Globals | 'center' | 'end' | 'justify' | 'start';

export type BoxShadowProperty = Globals | 'none' | string;

export type BoxSizingProperty = Globals | 'border-box' | 'content-box';

export type BreakAfterProperty =
    | Globals
    | 'auto'
    | 'avoid'
    | 'avoid-column'
    | 'avoid-page'
    | 'avoid-region'
    | 'column'
    | 'left'
    | 'page'
    | 'recto'
    | 'region'
    | 'right'
    | 'verso';

export type BreakBeforeProperty =
    | Globals
    | 'auto'
    | 'avoid'
    | 'avoid-column'
    | 'avoid-page'
    | 'avoid-region'
    | 'column'
    | 'left'
    | 'page'
    | 'recto'
    | 'region'
    | 'right'
    | 'verso';

export type BreakInsideProperty =
    | Globals
    | 'auto'
    | 'avoid'
    | 'avoid-column'
    | 'avoid-page'
    | 'avoid-region';

export type CaptionSideProperty =
    | Globals
    | 'block-end'
    | 'block-start'
    | 'bottom'
    | 'inline-end'
    | 'inline-start'
    | 'top';

export type CaretColorProperty = Globals | Color | 'auto';

export type ClearProperty =
    | Globals
    | 'both'
    | 'inline-end'
    | 'inline-start'
    | 'left'
    | 'none'
    | 'right';

export type ClipProperty = Globals | 'auto' | string;

export type ClipPathProperty = Globals | GeometryBox | 'none' | string;

export type ColorProperty = Globals | Color;

export type ColorAdjustProperty = Globals | 'economy' | 'exact';

export type ColumnCountProperty = Globals | 'auto' | number;

export type ColumnFillProperty = Globals | 'auto' | 'balance' | 'balance-all';

export type ColumnGapProperty = Globals | TLength | 'normal' | string;

export type ColumnRuleProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type ColumnRuleColorProperty = Globals | Color;

export type ColumnRuleStyleProperty = Globals | LineStyle | string;

export type ColumnRuleWidthProperty = Globals | LineWidth | string;

export type ColumnSpanProperty = Globals | 'all' | 'none';

export type ColumnWidthProperty = Globals | TLength | 'auto';

export type ColumnsProperty = Globals | TLength | 'auto' | string | number;

export type ContainProperty =
    | Globals
    | 'content'
    | 'layout'
    | 'none'
    | 'paint'
    | 'size'
    | 'strict'
    | 'style'
    | string;

export type ContentProperty =
    | Globals
    | ContentList
    | 'none'
    | 'normal'
    | string;

export type CounterIncrementProperty = Globals | 'none' | string;

export type CounterResetProperty = Globals | 'none' | string;

export type CursorProperty =
    | Globals
    | '-moz-grab'
    | '-webkit-grab'
    | 'alias'
    | 'all-scroll'
    | 'auto'
    | 'cell'
    | 'col-resize'
    | 'context-menu'
    | 'copy'
    | 'crosshair'
    | 'default'
    | 'e-resize'
    | 'ew-resize'
    | 'grab'
    | 'grabbing'
    | 'help'
    | 'move'
    | 'n-resize'
    | 'ne-resize'
    | 'nesw-resize'
    | 'no-drop'
    | 'none'
    | 'not-allowed'
    | 'ns-resize'
    | 'nw-resize'
    | 'nwse-resize'
    | 'pointer'
    | 'progress'
    | 'row-resize'
    | 's-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'text'
    | 'vertical-text'
    | 'w-resize'
    | 'wait'
    | 'zoom-in'
    | 'zoom-out'
    | string;

export type DirectionProperty = Globals | 'ltr' | 'rtl';

export type DisplayProperty =
    | Globals
    | DisplayOutside
    | DisplayInside
    | DisplayInternal
    | DisplayLegacy
    | 'contents'
    | 'list-item'
    | 'none'
    | string;

export type EmptyCellsProperty = Globals | 'hide' | 'show';

export type FilterProperty = Globals | 'none' | string;

export type FlexProperty =
    | Globals
    | TLength
    | 'auto'
    | 'available'
    | 'content'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | 'none'
    | string
    | number;

export type FlexBasisProperty =
    | Globals
    | TLength
    | '-webkit-auto'
    | 'auto'
    | 'available'
    | 'content'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | string;

export type FlexDirectionProperty =
    | Globals
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse';

export type FlexFlowProperty =
    | Globals
    | 'column'
    | 'column-reverse'
    | 'nowrap'
    | 'row'
    | 'row-reverse'
    | 'wrap'
    | 'wrap-reverse'
    | string;

export type FlexWrapProperty = Globals | 'nowrap' | 'wrap' | 'wrap-reverse';

export type FloatProperty =
    | Globals
    | 'inline-end'
    | 'inline-start'
    | 'left'
    | 'none'
    | 'right';

export type FontProperty =
    | Globals
    | 'caption'
    | 'icon'
    | 'menu'
    | 'message-box'
    | 'small-caption'
    | 'status-bar'
    | string;

export type FontFamilyProperty =
    | Globals
    | GenericFamily
    | string
    | FontFace
    | Array<Globals | GenericFamily | string | FontFace>;

export type FontFeatureSettingsProperty = Globals | 'normal' | string;

export type FontKerningProperty = Globals | 'auto' | 'none' | 'normal';

export type FontLanguageOverrideProperty = Globals | 'normal' | string;

export type FontOpticalSizingProperty = Globals | 'auto' | 'none';

export type FontSizeProperty =
    | Globals
    | AbsoluteSize
    | TLength
    | 'larger'
    | 'smaller'
    | string;

export type FontSizeAdjustProperty = Globals | 'none' | number;

export type FontStretchProperty = Globals | FontStretchAbsolute;

export type FontStyleProperty =
    | Globals
    | 'italic'
    | 'normal'
    | 'oblique'
    | string;

export type FontSynthesisProperty =
    | Globals
    | 'none'
    | 'style'
    | 'weight'
    | string;

export type FontVariantProperty =
    | Globals
    | EastAsianVariantValues
    | 'all-petite-caps'
    | 'all-small-caps'
    | 'common-ligatures'
    | 'contextual'
    | 'diagonal-fractions'
    | 'discretionary-ligatures'
    | 'full-width'
    | 'historical-forms'
    | 'historical-ligatures'
    | 'lining-nums'
    | 'no-common-ligatures'
    | 'no-contextual'
    | 'no-discretionary-ligatures'
    | 'no-historical-ligatures'
    | 'none'
    | 'normal'
    | 'oldstyle-nums'
    | 'ordinal'
    | 'petite-caps'
    | 'proportional-nums'
    | 'proportional-width'
    | 'ruby'
    | 'slashed-zero'
    | 'small-caps'
    | 'stacked-fractions'
    | 'tabular-nums'
    | 'titling-caps'
    | 'unicase'
    | string;

export type FontVariantAlternatesProperty =
    | Globals
    | 'historical-forms'
    | 'normal'
    | string;

export type FontVariantCapsProperty =
    | Globals
    | 'all-petite-caps'
    | 'all-small-caps'
    | 'normal'
    | 'petite-caps'
    | 'small-caps'
    | 'titling-caps'
    | 'unicase';

export type FontVariantEastAsianProperty =
    | Globals
    | EastAsianVariantValues
    | 'full-width'
    | 'normal'
    | 'proportional-width'
    | 'ruby'
    | string;

export type FontVariantLigaturesProperty =
    | Globals
    | 'common-ligatures'
    | 'contextual'
    | 'discretionary-ligatures'
    | 'historical-ligatures'
    | 'no-common-ligatures'
    | 'no-contextual'
    | 'no-discretionary-ligatures'
    | 'no-historical-ligatures'
    | 'none'
    | 'normal'
    | string;

export type FontVariantNumericProperty =
    | Globals
    | 'diagonal-fractions'
    | 'lining-nums'
    | 'normal'
    | 'oldstyle-nums'
    | 'ordinal'
    | 'proportional-nums'
    | 'slashed-zero'
    | 'stacked-fractions'
    | 'tabular-nums'
    | string;

export type FontVariantPositionProperty = Globals | 'normal' | 'sub' | 'super';

export type FontVariationSettingsProperty = Globals | 'normal' | string;

export type FontWeightProperty =
    | Globals
    | FontWeightAbsolute
    | 'bolder'
    | 'lighter';

export type GapProperty = Globals | TLength | 'normal' | string;

export type GridProperty = Globals | 'none' | string;

export type GridAreaProperty = Globals | GridLine | string;

export type GridAutoColumnsProperty = Globals | TrackBreadth | string;

export type GridAutoFlowProperty =
    | Globals
    | 'column'
    | 'dense'
    | 'row'
    | string;

export type GridAutoRowsProperty = Globals | TrackBreadth | string;

export type GridColumnProperty = Globals | GridLine | string;

export type GridColumnEndProperty = Globals | GridLine;

export type GridColumnGapProperty = Globals | TLength | string;

export type GridColumnStartProperty = Globals | GridLine;

export type GridGapProperty = Globals | TLength | string;

export type GridRowProperty = Globals | GridLine | string;

export type GridRowEndProperty = Globals | GridLine;

export type GridRowGapProperty = Globals | TLength | string;

export type GridRowStartProperty = Globals | GridLine;

export type GridTemplateProperty = Globals | 'none' | string;

export type GridTemplateAreasProperty = Globals | 'none' | string;

export type GridTemplateColumnsProperty =
    | Globals
    | TrackBreadth
    | 'none'
    | string;

export type GridTemplateRowsProperty = Globals | TrackBreadth | 'none' | string;

export type HangingPunctuationProperty =
    | Globals
    | 'allow-end'
    | 'first'
    | 'force-end'
    | 'last'
    | 'none'
    | string;

export type HeightProperty =
    | Globals
    | TLength
    | 'auto'
    | 'available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | string;

export type HyphensProperty = Globals | 'auto' | 'manual' | 'none';

export type ImageOrientationProperty = Globals | 'flip' | 'from-image' | string;

export type ImageRenderingProperty =
    | Globals
    | '-moz-crisp-edges'
    | '-o-crisp-edges'
    | '-webkit-optimize-contrast'
    | 'auto'
    | 'crisp-edges'
    | 'pixelated';

export type ImageResolutionProperty = Globals | 'from-image' | string;

export type ImeModeProperty =
    | Globals
    | 'active'
    | 'auto'
    | 'disabled'
    | 'inactive'
    | 'normal';

export type InitialLetterProperty = Globals | 'normal' | string | number;

export type InlineSizeProperty =
    | Globals
    | TLength
    | 'auto'
    | 'available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | string;

export type InsetBlockEndProperty = Globals | TLength | 'auto' | string;

export type InsetBlockStartProperty = Globals | TLength | 'auto' | string;

export type InsetInlineEndProperty = Globals | TLength | 'auto' | string;

export type InsetInlineStartProperty = Globals | TLength | 'auto' | string;

export type IsolationProperty = Globals | 'auto' | 'isolate';

export type JustifyContentProperty =
    | Globals
    | ContentDistribution
    | ContentPosition
    | 'left'
    | 'normal'
    | 'right'
    | string;

export type JustifyItemsProperty =
    | Globals
    | SelfPosition
    | 'baseline'
    | 'left'
    | 'legacy'
    | 'normal'
    | 'right'
    | 'stretch'
    | string;

export type JustifySelfProperty =
    | Globals
    | SelfPosition
    | 'auto'
    | 'baseline'
    | 'left'
    | 'normal'
    | 'right'
    | 'stretch'
    | string;

export type LeftProperty = Globals | TLength | 'auto' | string;

export type LetterSpacingProperty = Globals | TLength | 'normal';

export type LineBreakProperty =
    | Globals
    | 'auto'
    | 'loose'
    | 'normal'
    | 'strict';

export type LineClampProperty = Globals | 'none' | number;

export type LineHeightProperty = Globals | TLength | 'normal' | string | number;

export type ListStyleProperty =
    | Globals
    | 'inside'
    | 'none'
    | 'outside'
    | string;

export type ListStyleImageProperty = Globals | 'none' | string;

export type ListStylePositionProperty = Globals | 'inside' | 'outside';

export type ListStyleTypeProperty = Globals | 'none' | string;

export type MarginProperty = Globals | TLength | 'auto' | string;

export type MarginBlockEndProperty = Globals | TLength | 'auto' | string;

export type MarginBlockStartProperty = Globals | TLength | 'auto' | string;

export type MarginBottomProperty = Globals | TLength | 'auto' | string;

export type MarginInlineEndProperty = Globals | TLength | 'auto' | string;

export type MarginInlineStartProperty = Globals | TLength | 'auto' | string;

export type MarginLeftProperty = Globals | TLength | 'auto' | string;

export type MarginRightProperty = Globals | TLength | 'auto' | string;

export type MarginTopProperty = Globals | TLength | 'auto' | string;

export type MaskProperty = Globals | MaskLayer | string;

export type MaskBorderProperty =
    | Globals
    | 'alpha'
    | 'luminance'
    | 'none'
    | 'repeat'
    | 'round'
    | 'space'
    | 'stretch'
    | string
    | number;

export type MaskBorderModeProperty = Globals | 'alpha' | 'luminance';

export type MaskBorderOutsetProperty = Globals | TLength | string | number;

export type MaskBorderRepeatProperty =
    | Globals
    | 'repeat'
    | 'round'
    | 'space'
    | 'stretch'
    | string;

export type MaskBorderSliceProperty = Globals | string | number;

export type MaskBorderSourceProperty = Globals | 'none' | string;

export type MaskBorderWidthProperty =
    | Globals
    | TLength
    | 'auto'
    | string
    | number;

export type MaskClipProperty = Globals | GeometryBox | 'no-clip' | string;

export type MaskCompositeProperty = Globals | CompositingOperator | string;

export type MaskImageProperty = Globals | 'none' | string;

export type MaskModeProperty = Globals | MaskingMode | string;

export type MaskOriginProperty = Globals | GeometryBox | string;

export type MaskPositionProperty = Globals | Position | string;

export type MaskRepeatProperty = Globals | RepeatStyle | string;

export type MaskSizeProperty = Globals | BgSize | string;

export type MaskTypeProperty = Globals | 'alpha' | 'luminance';

export type MaxBlockSizeProperty =
    | Globals
    | TLength
    | 'fill-available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | 'none'
    | string;

export type MaxHeightProperty =
    | Globals
    | TLength
    | 'fill-available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | 'none'
    | string;

export type MaxInlineSizeProperty =
    | Globals
    | TLength
    | 'fill-available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | 'none'
    | string;

export type MaxLinesProperty = Globals | 'none' | number;

export type MaxWidthProperty =
    | Globals
    | TLength
    | 'fill-available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | 'none'
    | string;

export type MinBlockSizeProperty =
    | Globals
    | TLength
    | 'auto'
    | 'fill-available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | string;

export type MinHeightProperty =
    | Globals
    | TLength
    | 'auto'
    | 'fill-available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | string;

export type MinInlineSizeProperty =
    | Globals
    | TLength
    | 'auto'
    | 'fill-available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | string;

export type MinWidthProperty =
    | Globals
    | TLength
    | 'auto'
    | 'fill-available'
    | 'fit-content'
    | 'max-content'
    | 'min-content'
    | string;

export type MixBlendModeProperty = Globals | BlendMode;

export type MotionPathProperty = Globals | 'none' | string;

export type ObjectFitProperty =
    | Globals
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down';

export type ObjectPositionProperty = Globals | Position;

export type OffsetPositionProperty = Globals | Position | 'auto';

export type OutlineProperty =
    | Globals
    | Color
    | LineStyle
    | LineWidth
    | 'auto'
    | 'invert'
    | string;

export type OutlineColorProperty = Globals | Color | 'invert';

export type OutlineOffsetProperty = Globals | TLength;

export type OutlineStyleProperty = Globals | LineStyle | 'auto' | string;

export type OutlineWidthProperty = Globals | LineWidth;

export type OverflowProperty =
    | Globals
    | 'auto'
    | 'clip'
    | 'hidden'
    | 'scroll'
    | 'visible'
    | string;

export type OverflowAnchorProperty = Globals | 'auto' | 'none';

export type OverflowBlockProperty =
    | Globals
    | 'auto'
    | 'clip'
    | 'hidden'
    | 'scroll'
    | 'visible'
    | string;

export type OverflowClipBoxProperty = Globals | 'content-box' | 'padding-box';

export type OverflowInlineProperty =
    | Globals
    | 'auto'
    | 'clip'
    | 'hidden'
    | 'scroll'
    | 'visible'
    | string;

export type OverflowWrapProperty = Globals | 'break-word' | 'normal';

export type OverflowXProperty =
    | Globals
    | 'auto'
    | 'clip'
    | 'hidden'
    | 'scroll'
    | 'visible';

export type OverflowYProperty =
    | Globals
    | 'auto'
    | 'clip'
    | 'hidden'
    | 'scroll'
    | 'visible';

export type OverscrollBehaviorProperty =
    | Globals
    | 'auto'
    | 'contain'
    | 'none'
    | string;

export type OverscrollBehaviorXProperty = Globals | 'auto' | 'contain' | 'none';

export type OverscrollBehaviorYProperty = Globals | 'auto' | 'contain' | 'none';

export type PaddingProperty = Globals | TLength | string;

export type PaddingBlockEndProperty = Globals | TLength | string;

export type PaddingBlockStartProperty = Globals | TLength | string;

export type PaddingBottomProperty = Globals | TLength | string;

export type PaddingInlineEndProperty = Globals | TLength | string;

export type PaddingInlineStartProperty = Globals | TLength | string;

export type PaddingLeftProperty = Globals | TLength | string;

export type PaddingRightProperty = Globals | TLength | string;

export type PaddingTopProperty = Globals | TLength | string;

export type PageBreakAfterProperty =
    | Globals
    | 'always'
    | 'auto'
    | 'avoid'
    | 'left'
    | 'recto'
    | 'right'
    | 'verso';

export type PageBreakBeforeProperty =
    | Globals
    | 'always'
    | 'auto'
    | 'avoid'
    | 'left'
    | 'recto'
    | 'right'
    | 'verso';

export type PageBreakInsideProperty = Globals | 'auto' | 'avoid';

export type PaintOrderProperty =
    | Globals
    | 'fill'
    | 'markers'
    | 'normal'
    | 'stroke'
    | string;

export type PerspectiveProperty = Globals | TLength | 'none';

export type PerspectiveOriginProperty = Globals | Position;

export type PlaceContentProperty =
    | Globals
    | ContentDistribution
    | ContentPosition
    | 'baseline'
    | 'normal'
    | string;

export type PlaceItemsProperty =
    | Globals
    | SelfPosition
    | 'baseline'
    | 'normal'
    | 'stretch'
    | string;

export type PointerEventsProperty =
    | Globals
    | 'all'
    | 'auto'
    | 'fill'
    | 'inherit'
    | 'none'
    | 'painted'
    | 'stroke'
    | 'visible'
    | 'visibleFill'
    | 'visiblePainted'
    | 'visibleStroke';

export type PositionProperty =
    | Globals
    | '-webkit-sticky'
    | 'absolute'
    | 'fixed'
    | 'relative'
    | 'static'
    | 'sticky';

export type QuotesProperty = Globals | 'none' | string;

export type ResizeProperty =
    | Globals
    | 'block'
    | 'both'
    | 'horizontal'
    | 'inline'
    | 'none'
    | 'vertical';

export type RightProperty = Globals | TLength | 'auto' | string;

export type RotateProperty = Globals | 'none' | string;

export type RowGapProperty = Globals | TLength | 'normal' | string;

export type RubyAlignProperty =
    | Globals
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'start';

export type RubyMergeProperty = Globals | 'auto' | 'collapse' | 'separate';

export type RubyPositionProperty =
    | Globals
    | 'inter-character'
    | 'over'
    | 'under';

export type ScaleProperty = Globals | 'none' | string | number;

export type ScrollBehaviorProperty = Globals | 'auto' | 'smooth';

export type ScrollMarginProperty = Globals | TLength | 'auto' | string;

export type ScrollMarginBlockProperty = Globals | TLength | 'auto' | string;

export type ScrollMarginBlockEndProperty = Globals | TLength | 'auto';

export type ScrollMarginBlockStartProperty = Globals | TLength | 'auto';

export type ScrollMarginBottomProperty = Globals | TLength | 'auto';

export type ScrollMarginInlineEndProperty = Globals | TLength | 'auto';

export type ScrollMarginInlineStartProperty = Globals | TLength | 'auto';

export type ScrollMarginLeftProperty = Globals | TLength | 'auto';

export type ScrollMarginRightProperty = Globals | TLength | 'auto';

export type ScrollMarginTopProperty = Globals | TLength | 'auto';

export type ScrollPaddingProperty = Globals | TLength | 'auto' | string;

export type ScrollPaddingBlockProperty = Globals | TLength | string;

export type ScrollPaddingBlockEndProperty = Globals | TLength | 'auto' | string;

export type ScrollPaddingBlockStartProperty =
    | Globals
    | TLength
    | 'auto'
    | string;

export type ScrollPaddingBottomProperty = Globals | TLength | 'auto' | string;

export type ScrollPaddingInlineProperty = Globals | TLength | string;

export type ScrollPaddingInlineEndProperty =
    | Globals
    | TLength
    | 'auto'
    | string;

export type ScrollPaddingInlineStartProperty =
    | Globals
    | TLength
    | 'auto'
    | string;

export type ScrollPaddingLeftProperty = Globals | TLength | 'auto' | string;

export type ScrollPaddingRightProperty = Globals | TLength | 'auto' | string;

export type ScrollPaddingTopProperty = Globals | TLength | 'auto' | string;

export type ScrollSnapAlignProperty =
    | Globals
    | 'center'
    | 'end'
    | 'none'
    | 'start'
    | string;

export type ScrollSnapCoordinateProperty = Globals | Position | 'none' | string;

export type ScrollSnapDestinationProperty = Globals | Position;

export type ScrollSnapPointsXProperty = Globals | 'none' | string;

export type ScrollSnapPointsYProperty = Globals | 'none' | string;

export type ScrollSnapStopProperty = Globals | 'always' | 'normal';

export type ScrollSnapTypeProperty = Globals | 'none' | string;

export type ScrollSnapTypeXProperty =
    | Globals
    | 'mandatory'
    | 'none'
    | 'proximity';

export type ScrollSnapTypeYProperty =
    | Globals
    | 'mandatory'
    | 'none'
    | 'proximity';

export type ScrollbarColorProperty =
    | Globals
    | Color
    | 'auto'
    | 'dark'
    | 'light';

export type ScrollbarWidthProperty =
    | Globals
    | TLength
    | 'auto'
    | 'none'
    | 'thin';

export type ShapeMarginProperty = Globals | TLength | string;

export type ShapeOutsideProperty =
    | Globals
    | Box
    | 'margin-box'
    | 'none'
    | string;

export type TabSizeProperty = Globals | TLength | number;

export type TableLayoutProperty = Globals | 'auto' | 'fixed';

export type TextAlignProperty =
    | Globals
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'match-parent'
    | 'right'
    | 'start';

export type TextAlignLastProperty =
    | Globals
    | 'auto'
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'right'
    | 'start';

export type TextCombineUprightProperty =
    | Globals
    | 'all'
    | 'digits'
    | 'none'
    | string;

export type TextDecorationProperty =
    | Globals
    | Color
    | 'blink'
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'line-through'
    | 'none'
    | 'overline'
    | 'solid'
    | 'underline'
    | 'wavy'
    | string;

export type TextDecorationColorProperty = Globals | Color;

export type TextDecorationLineProperty =
    | Globals
    | 'blink'
    | 'line-through'
    | 'none'
    | 'overline'
    | 'underline'
    | string;

export type TextDecorationSkipProperty =
    | Globals
    | 'box-decoration'
    | 'edges'
    | 'leading-spaces'
    | 'none'
    | 'objects'
    | 'spaces'
    | 'trailing-spaces'
    | string;

export type TextDecorationSkipInkProperty = Globals | 'auto' | 'none';

export type TextDecorationStyleProperty =
    | Globals
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'solid'
    | 'wavy';

export type TextEmphasisProperty =
    | Globals
    | Color
    | 'circle'
    | 'dot'
    | 'double-circle'
    | 'filled'
    | 'none'
    | 'open'
    | 'sesame'
    | 'triangle'
    | string;

export type TextEmphasisColorProperty = Globals | Color;

export type TextEmphasisStyleProperty =
    | Globals
    | 'circle'
    | 'dot'
    | 'double-circle'
    | 'filled'
    | 'none'
    | 'open'
    | 'sesame'
    | 'triangle'
    | string;

export type TextIndentProperty = Globals | TLength | string;

export type TextJustifyProperty =
    | Globals
    | 'auto'
    | 'inter-character'
    | 'inter-word'
    | 'none';

export type TextOrientationProperty =
    | Globals
    | 'mixed'
    | 'sideways'
    | 'upright';

export type TextOverflowProperty = Globals | 'clip' | 'ellipsis' | string;

export type TextRenderingProperty =
    | Globals
    | 'auto'
    | 'geometricPrecision'
    | 'optimizeLegibility'
    | 'optimizeSpeed';

export type TextShadowProperty = Globals | 'none' | string;

export type TextSizeAdjustProperty = Globals | 'auto' | 'none' | string;

export type TextTransformProperty =
    | Globals
    | 'capitalize'
    | 'full-width'
    | 'lowercase'
    | 'none'
    | 'uppercase';

export type TextUnderlinePositionProperty =
    | Globals
    | 'auto'
    | 'left'
    | 'right'
    | 'under'
    | string;

export type TopProperty = Globals | TLength | 'auto' | string;

export type TouchActionProperty =
    | Globals
    | '-ms-manipulation'
    | '-ms-pinch-zoom'
    | 'auto'
    | 'manipulation'
    | 'none'
    | 'pan-down'
    | 'pan-left'
    | 'pan-right'
    | 'pan-up'
    | 'pan-x'
    | 'pan-y'
    | 'pinch-zoom'
    | string;

export type TransformProperty = Globals | 'none' | string;

export type TransformBoxProperty =
    | Globals
    | 'border-box'
    | 'fill-box'
    | 'view-box';

export type TransformOriginProperty =
    | Globals
    | TLength
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | string;

export type TransformStyleProperty = Globals | 'flat' | 'preserve-3d';

export type TransitionProperty = Globals | SingleTransition | string;

export type TransitionPropertyProperty = Globals | 'all' | 'none' | string;

export type TransitionTimingFunctionProperty =
    | Globals
    | SingleTimingFunction
    | string;

export type TranslateProperty = Globals | TLength | 'none' | string;

export type UnicodeBidiProperty =
    | Globals
    | '-moz-isolate'
    | '-moz-isolate-override'
    | '-moz-plaintext'
    | '-webkit-isolate'
    | 'bidi-override'
    | 'embed'
    | 'isolate'
    | 'isolate-override'
    | 'normal'
    | 'plaintext';

export type UserSelectProperty =
    | Globals
    | '-moz-none'
    | 'all'
    | 'auto'
    | 'contain'
    | 'element'
    | 'none'
    | 'text';

export type VerticalAlignProperty =
    | Globals
    | TLength
    | 'baseline'
    | 'bottom'
    | 'middle'
    | 'sub'
    | 'super'
    | 'text-bottom'
    | 'text-top'
    | 'top'
    | string;

export type VisibilityProperty = Globals | 'collapse' | 'hidden' | 'visible';

export type WhiteSpaceProperty =
    | Globals
    | '-moz-pre-wrap'
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-line'
    | 'pre-wrap';

export type WidthProperty =
    | Globals
    | TLength
    | '-moz-fit-content'
    | '-moz-max-content'
    | '-moz-min-content'
    | '-webkit-fill-available'
    | '-webkit-fit-content'
    | '-webkit-max-content'
    | '-webkit-min-content'
    | 'auto'
    | 'available'
    | 'fit-content'
    | 'intrinsic'
    | 'max-content'
    | 'min-content'
    | 'min-intrinsic'
    | string;

export type WillChangeProperty = Globals | AnimateableFeature | 'auto' | string;

export type WordBreakProperty =
    | Globals
    | 'break-all'
    | 'break-word'
    | 'keep-all'
    | 'normal';

export type WordSpacingProperty = Globals | TLength | 'normal' | string;

export type WordWrapProperty = Globals | 'break-word' | 'normal';

export type WritingModeProperty =
    | Globals
    | 'horizontal-tb'
    | 'sideways-lr'
    | 'sideways-rl'
    | 'vertical-lr'
    | 'vertical-rl';

export type ZIndexProperty = Globals | 'auto' | number;

export type ZoomProperty = Globals | 'normal' | 'reset' | string | number;

export type MozAppearanceProperty =
    | Globals
    | '-moz-mac-unified-toolbar'
    | '-moz-win-borderless-glass'
    | '-moz-win-browsertabbar-toolbox'
    | '-moz-win-communications-toolbox'
    | '-moz-win-communicationstext'
    | '-moz-win-exclude-glass'
    | '-moz-win-glass'
    | '-moz-win-media-toolbox'
    | '-moz-win-mediatext'
    | '-moz-window-button-box'
    | '-moz-window-button-box-maximized'
    | '-moz-window-button-close'
    | '-moz-window-button-maximize'
    | '-moz-window-button-minimize'
    | '-moz-window-button-restore'
    | '-moz-window-frame-bottom'
    | '-moz-window-frame-left'
    | '-moz-window-frame-right'
    | '-moz-window-titlebar'
    | '-moz-window-titlebar-maximized'
    | 'button'
    | 'button-arrow-down'
    | 'button-arrow-next'
    | 'button-arrow-previous'
    | 'button-arrow-up'
    | 'button-bevel'
    | 'button-focus'
    | 'caret'
    | 'checkbox'
    | 'checkbox-container'
    | 'checkbox-label'
    | 'checkmenuitem'
    | 'dualbutton'
    | 'groupbox'
    | 'listbox'
    | 'listitem'
    | 'menuarrow'
    | 'menubar'
    | 'menucheckbox'
    | 'menuimage'
    | 'menuitem'
    | 'menuitemtext'
    | 'menulist'
    | 'menulist-button'
    | 'menulist-text'
    | 'menulist-textfield'
    | 'menupopup'
    | 'menuradio'
    | 'menuseparator'
    | 'meterbar'
    | 'meterchunk'
    | 'none'
    | 'progressbar'
    | 'progressbar-vertical'
    | 'progresschunk'
    | 'progresschunk-vertical'
    | 'radio'
    | 'radio-container'
    | 'radio-label'
    | 'radiomenuitem'
    | 'range'
    | 'range-thumb'
    | 'resizer'
    | 'resizerpanel'
    | 'scale-horizontal'
    | 'scale-vertical'
    | 'scalethumb-horizontal'
    | 'scalethumb-vertical'
    | 'scalethumbend'
    | 'scalethumbstart'
    | 'scalethumbtick'
    | 'scrollbarbutton-down'
    | 'scrollbarbutton-left'
    | 'scrollbarbutton-right'
    | 'scrollbarbutton-up'
    | 'scrollbarthumb-horizontal'
    | 'scrollbarthumb-vertical'
    | 'scrollbartrack-horizontal'
    | 'scrollbartrack-vertical'
    | 'searchfield'
    | 'separator'
    | 'sheet'
    | 'spinner'
    | 'spinner-downbutton'
    | 'spinner-textfield'
    | 'spinner-upbutton'
    | 'splitter'
    | 'statusbar'
    | 'statusbarpanel'
    | 'tab'
    | 'tab-scroll-arrow-back'
    | 'tab-scroll-arrow-forward'
    | 'tabpanel'
    | 'tabpanels'
    | 'textfield'
    | 'textfield-multiline'
    | 'toolbar'
    | 'toolbarbutton'
    | 'toolbarbutton-dropdown'
    | 'toolbargripper'
    | 'toolbox'
    | 'tooltip'
    | 'treeheader'
    | 'treeheadercell'
    | 'treeheadersortarrow'
    | 'treeitem'
    | 'treeline'
    | 'treetwisty'
    | 'treetwistyopen'
    | 'treeview';

export type MozBindingProperty = Globals | 'none' | string;

export type MozBorderBottomColorsProperty = Globals | Color | 'none' | string;

export type MozBorderLeftColorsProperty = Globals | Color | 'none' | string;

export type MozBorderRightColorsProperty = Globals | Color | 'none' | string;

export type MozBorderTopColorsProperty = Globals | Color | 'none' | string;

export type MozContextPropertiesProperty =
    | Globals
    | 'fill'
    | 'fill-opacity'
    | 'none'
    | 'stroke'
    | 'stroke-opacity'
    | string;

export type MozFloatEdgeProperty =
    | Globals
    | 'border-box'
    | 'content-box'
    | 'margin-box'
    | 'padding-box';

export type MozImageRegionProperty = Globals | 'auto' | string;

export type MozOrientProperty =
    | Globals
    | 'block'
    | 'horizontal'
    | 'inline'
    | 'vertical';

export type MozOutlineRadiusProperty = Globals | TLength | string;

export type MozOutlineRadiusBottomleftProperty = Globals | TLength | string;

export type MozOutlineRadiusBottomrightProperty = Globals | TLength | string;

export type MozOutlineRadiusTopleftProperty = Globals | TLength | string;

export type MozOutlineRadiusToprightProperty = Globals | TLength | string;

export type MozStackSizingProperty = Globals | 'ignore' | 'stretch-to-fit';

export type MozTextBlinkProperty = Globals | 'blink' | 'none';

export type MozUserFocusProperty =
    | Globals
    | 'ignore'
    | 'none'
    | 'normal'
    | 'select-after'
    | 'select-all'
    | 'select-before'
    | 'select-menu'
    | 'select-same';

export type MozUserInputProperty =
    | Globals
    | 'auto'
    | 'disabled'
    | 'enabled'
    | 'none';

export type MozUserModifyProperty =
    | Globals
    | 'read-only'
    | 'read-write'
    | 'write-only';

export type MozWindowDraggingProperty = Globals | 'drag' | 'no-drag';

export type MozWindowShadowProperty =
    | Globals
    | 'default'
    | 'menu'
    | 'none'
    | 'sheet'
    | 'tooltip';

export type MsAcceleratorProperty = Globals | 'false' | 'true';

export type MsBlockProgressionProperty = Globals | 'bt' | 'lr' | 'rl' | 'tb';

export type MsContentZoomChainingProperty = Globals | 'chained' | 'none';

export type MsContentZoomSnapProperty =
    | Globals
    | 'mandatory'
    | 'none'
    | 'proximity'
    | string;

export type MsContentZoomSnapTypeProperty =
    | Globals
    | 'mandatory'
    | 'none'
    | 'proximity';

export type MsContentZoomingProperty = Globals | 'none' | 'zoom';

export type MsFlowFromProperty = Globals | 'none' | string;

export type MsFlowIntoProperty = Globals | 'none' | string;

export type MsHighContrastAdjustProperty = Globals | 'auto' | 'none';

export type MsHyphenateLimitCharsProperty = Globals | 'auto' | string | number;

export type MsHyphenateLimitLinesProperty = Globals | 'no-limit' | number;

export type MsHyphenateLimitZoneProperty = Globals | TLength | string;

export type MsImeAlignProperty = Globals | 'after' | 'auto';

export type MsOverflowStyleProperty =
    | Globals
    | '-ms-autohiding-scrollbar'
    | 'auto'
    | 'none'
    | 'scrollbar';

export type MsScrollChainingProperty = Globals | 'chained' | 'none';

export type MsScrollLimitXMaxProperty = Globals | TLength | 'auto';

export type MsScrollLimitXMinProperty = Globals | TLength;

export type MsScrollLimitYMaxProperty = Globals | TLength | 'auto';

export type MsScrollLimitYMinProperty = Globals | TLength;

export type MsScrollRailsProperty = Globals | 'none' | 'railed';

export type MsScrollSnapTypeProperty =
    | Globals
    | 'mandatory'
    | 'none'
    | 'proximity';

export type MsScrollTranslationProperty =
    | Globals
    | 'none'
    | 'vertical-to-horizontal';

export type MsScrollbar3dlightColorProperty = Globals | Color;

export type MsScrollbarArrowColorProperty = Globals | Color;

export type MsScrollbarBaseColorProperty = Globals | Color;

export type MsScrollbarDarkshadowColorProperty = Globals | Color;

export type MsScrollbarFaceColorProperty = Globals | Color;

export type MsScrollbarHighlightColorProperty = Globals | Color;

export type MsScrollbarShadowColorProperty = Globals | Color;

export type MsScrollbarTrackColorProperty = Globals | Color;

export type MsTextAutospaceProperty =
    | Globals
    | 'ideograph-alpha'
    | 'ideograph-numeric'
    | 'ideograph-parenthesis'
    | 'ideograph-space'
    | 'none';

export type MsTouchSelectProperty = Globals | 'grippers' | 'none';

export type MsUserSelectProperty = Globals | 'element' | 'none' | 'text';

export type MsWrapFlowProperty =
    | Globals
    | 'auto'
    | 'both'
    | 'clear'
    | 'end'
    | 'maximum'
    | 'start';

export type MsWrapMarginProperty = Globals | TLength;

export type MsWrapThroughProperty = Globals | 'none' | 'wrap';

export type WebkitAppearanceProperty =
    | Globals
    | 'button'
    | 'button-bevel'
    | 'caret'
    | 'checkbox'
    | 'default-button'
    | 'inner-spin-button'
    | 'listbox'
    | 'listitem'
    | 'media-controls-background'
    | 'media-controls-fullscreen-background'
    | 'media-current-time-display'
    | 'media-enter-fullscreen-button'
    | 'media-exit-fullscreen-button'
    | 'media-fullscreen-button'
    | 'media-mute-button'
    | 'media-overlay-play-button'
    | 'media-play-button'
    | 'media-seek-back-button'
    | 'media-seek-forward-button'
    | 'media-slider'
    | 'media-sliderthumb'
    | 'media-time-remaining-display'
    | 'media-toggle-closed-captions-button'
    | 'media-volume-slider'
    | 'media-volume-slider-container'
    | 'media-volume-sliderthumb'
    | 'menulist'
    | 'menulist-button'
    | 'menulist-text'
    | 'menulist-textfield'
    | 'meter'
    | 'none'
    | 'progress-bar'
    | 'progress-bar-value'
    | 'push-button'
    | 'radio'
    | 'searchfield'
    | 'searchfield-cancel-button'
    | 'searchfield-decoration'
    | 'searchfield-results-button'
    | 'searchfield-results-decoration'
    | 'slider-horizontal'
    | 'slider-vertical'
    | 'sliderthumb-horizontal'
    | 'sliderthumb-vertical'
    | 'square-button'
    | 'textarea'
    | 'textfield';

export type WebkitBorderBeforeProperty =
    | Globals
    | LineWidth
    | LineStyle
    | Color
    | string;

export type WebkitBorderBeforeColorProperty = Globals | Color;

export type WebkitBorderBeforeStyleProperty = Globals | LineStyle | string;

export type WebkitBorderBeforeWidthProperty = Globals | LineWidth | string;

export type WebkitBoxReflectProperty =
    | Globals
    | TLength
    | 'above'
    | 'below'
    | 'left'
    | 'right'
    | string;

export type WebkitLineClampProperty = Globals | 'none' | number;

export type WebkitMaskProperty =
    | Globals
    | Position
    | RepeatStyle
    | Box
    | 'border'
    | 'content'
    | 'none'
    | 'padding'
    | 'text'
    | string;

export type WebkitMaskAttachmentProperty = Globals | Attachment | string;

export type WebkitMaskClipProperty =
    | Globals
    | Box
    | 'border'
    | 'content'
    | 'padding'
    | 'text'
    | string;

export type WebkitMaskCompositeProperty = Globals | CompositeStyle | string;

export type WebkitMaskImageProperty = Globals | 'none' | string;

export type WebkitMaskOriginProperty =
    | Globals
    | Box
    | 'border'
    | 'content'
    | 'padding'
    | string;

export type WebkitMaskPositionProperty = Globals | Position | string;

export type WebkitMaskPositionXProperty =
    | Globals
    | TLength
    | 'center'
    | 'left'
    | 'right'
    | string;

export type WebkitMaskPositionYProperty =
    | Globals
    | TLength
    | 'bottom'
    | 'center'
    | 'top'
    | string;

export type WebkitMaskRepeatProperty = Globals | RepeatStyle | string;

export type WebkitMaskRepeatXProperty =
    | Globals
    | 'no-repeat'
    | 'repeat'
    | 'round'
    | 'space';

export type WebkitMaskRepeatYProperty =
    | Globals
    | 'no-repeat'
    | 'repeat'
    | 'round'
    | 'space';

export type WebkitMaskSizeProperty = Globals | BgSize | string;

export type WebkitOverflowScrollingProperty = Globals | 'auto' | 'touch';

export type WebkitTapHighlightColorProperty = Globals | Color;

export type WebkitTextFillColorProperty = Globals | Color;

export type WebkitTextStrokeProperty = Globals | Color | TLength | string;

export type WebkitTextStrokeColorProperty = Globals | Color;

export type WebkitTextStrokeWidthProperty = Globals | TLength;

export type WebkitTouchCalloutProperty = Globals | 'default' | 'none';

export type WebkitUserModifyProperty =
    | Globals
    | 'read-only'
    | 'read-write'
    | 'read-write-plaintext-only';

export type AlignmentBaselineProperty =
    | Globals
    | 'after-edge'
    | 'alphabetic'
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'central'
    | 'hanging'
    | 'ideographic'
    | 'mathematical'
    | 'middle'
    | 'text-after-edge'
    | 'text-before-edge';

export type BaselineShiftProperty =
    | Globals
    | TLength
    | 'baseline'
    | 'sub'
    | 'super'
    | string;

export type ClipRuleProperty = Globals | 'evenodd' | 'nonzero';

export type ColorInterpolationProperty =
    | Globals
    | 'auto'
    | 'linearRGB'
    | 'sRGB';

export type ColorRenderingProperty =
    | Globals
    | 'auto'
    | 'optimizeQuality'
    | 'optimizeSpeed';

export type DominantBaselineProperty =
    | Globals
    | 'alphabetic'
    | 'auto'
    | 'central'
    | 'hanging'
    | 'ideographic'
    | 'mathematical'
    | 'middle'
    | 'no-change'
    | 'reset-size'
    | 'text-after-edge'
    | 'text-before-edge'
    | 'use-script';

export type FillProperty = Globals | Paint;

export type FillRuleProperty = Globals | 'evenodd' | 'nonzero';

export type FloodColorProperty = Globals | Color | 'currentColor';

export type GlyphOrientationVerticalProperty =
    | Globals
    | 'auto'
    | string
    | number;

export type LightingColorProperty = Globals | Color | 'currentColor';

export type MarkerProperty = Globals | 'none' | string;

export type MarkerEndProperty = Globals | 'none' | string;

export type MarkerMidProperty = Globals | 'none' | string;

export type MarkerStartProperty = Globals | 'none' | string;

export type ShapeRenderingProperty =
    | Globals
    | 'auto'
    | 'crispEdges'
    | 'geometricPrecision'
    | 'optimizeSpeed';

export type StopColorProperty = Globals | Color | 'currentColor';

export type StrokeProperty = Globals | Paint;

export type StrokeDasharrayProperty = Globals | Dasharray | 'none';

export type StrokeDashoffsetProperty = Globals | TLength | string;

export type StrokeLinecapProperty = Globals | 'butt' | 'round' | 'square';

export type StrokeLinejoinProperty = Globals | 'bevel' | 'miter' | 'round';

export type StrokeWidthProperty = Globals | TLength | string;

export type TextAnchorProperty = Globals | 'end' | 'middle' | 'start';

export type VectorEffectProperty = Globals | 'non-scaling-stroke' | 'none';

export type CounterStyleRangeProperty = 'auto' | 'infinite' | string | number;

export type CounterStyleSpeakAsProperty =
    | 'auto'
    | 'bullets'
    | 'numbers'
    | 'spell-out'
    | 'words'
    | string;

export type CounterStyleSystemProperty =
    | 'additive'
    | 'alphabetic'
    | 'cyclic'
    | 'fixed'
    | 'numeric'
    | 'symbolic'
    | string;

export type FontFaceFontFeatureSettingsProperty = 'normal' | string;

export type FontFaceFontDisplayProperty =
    | 'auto'
    | 'block'
    | 'fallback'
    | 'optional'
    | 'swap';

export type FontFaceFontStretchProperty = FontStretchAbsolute | string;

export type FontFaceFontStyleProperty =
    | 'italic'
    | 'normal'
    | 'oblique'
    | string;

export type FontFaceFontVariantProperty =
    | EastAsianVariantValues
    | 'all-petite-caps'
    | 'all-small-caps'
    | 'common-ligatures'
    | 'contextual'
    | 'diagonal-fractions'
    | 'discretionary-ligatures'
    | 'full-width'
    | 'historical-forms'
    | 'historical-ligatures'
    | 'lining-nums'
    | 'no-common-ligatures'
    | 'no-contextual'
    | 'no-discretionary-ligatures'
    | 'no-historical-ligatures'
    | 'none'
    | 'normal'
    | 'oldstyle-nums'
    | 'ordinal'
    | 'petite-caps'
    | 'proportional-nums'
    | 'proportional-width'
    | 'ruby'
    | 'slashed-zero'
    | 'small-caps'
    | 'stacked-fractions'
    | 'tabular-nums'
    | 'titling-caps'
    | 'unicase'
    | string;

export type FontFaceFontVariationSettingsProperty = 'normal' | string;

export type FontFaceFontWeightProperty = FontWeightAbsolute | string;

export type PageBleedProperty = TLength | 'auto';

export type PageMarksProperty = 'crop' | 'cross' | 'none' | string;

export type ViewportHeightProperty = ViewportLength | string;

export type ViewportMaxHeightProperty = ViewportLength;

export type ViewportMaxWidthProperty = ViewportLength;

export type ViewportMaxZoomProperty = 'auto' | string | number;

export type ViewportMinHeightProperty = ViewportLength;

export type ViewportMinWidthProperty = ViewportLength;

export type ViewportMinZoomProperty = 'auto' | string | number;

export type ViewportOrientationProperty = 'auto' | 'landscape' | 'portrait';

export type ViewportUserZoomProperty = '-ms-zoom' | 'fixed' | 'zoom';

export type ViewportWidthProperty = ViewportLength | string;

export type ViewportZoomProperty = 'auto' | string | number;

export type AbsoluteSize =
    | 'large'
    | 'medium'
    | 'small'
    | 'x-large'
    | 'x-small'
    | 'xx-large'
    | 'xx-small';

export type AnimateableFeature = 'contents' | 'scroll-position' | string;

export type Attachment = 'fixed' | 'local' | 'scroll';

export type BgPosition =
    | TLength
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | string;

export type BgSize = TLength | 'auto' | 'contain' | 'cover' | string;

export type BlendMode =
    | 'color'
    | 'color-burn'
    | 'color-dodge'
    | 'darken'
    | 'difference'
    | 'exclusion'
    | 'hard-light'
    | 'hue'
    | 'lighten'
    | 'luminosity'
    | 'multiply'
    | 'normal'
    | 'overlay'
    | 'saturation'
    | 'screen'
    | 'soft-light';

export type Box = 'border-box' | 'content-box' | 'padding-box';

export type Color =
    | NamedColor
    | DeprecatedSystemColor
    | 'currentcolor'
    | string;

export type CompositeStyle =
    | 'clear'
    | 'copy'
    | 'destination-atop'
    | 'destination-in'
    | 'destination-out'
    | 'destination-over'
    | 'source-atop'
    | 'source-in'
    | 'source-out'
    | 'source-over'
    | 'xor';

export type CompositingOperator = 'add' | 'exclude' | 'intersect' | 'subtract';

export type ContentDistribution =
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch';

export type ContentList = Quote | 'contents' | string;

export type ContentPosition =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start';

export type CubicBezierTimingFunction =
    | 'ease'
    | 'ease-in'
    | 'ease-in-out'
    | 'ease-out'
    | string;

export type Dasharray = TLength | string | number;

export type DeprecatedSystemColor =
    | 'ActiveBorder'
    | 'ActiveCaption'
    | 'AppWorkspace'
    | 'Background'
    | 'ButtonFace'
    | 'ButtonHighlight'
    | 'ButtonShadow'
    | 'ButtonText'
    | 'CaptionText'
    | 'GrayText'
    | 'Highlight'
    | 'HighlightText'
    | 'InactiveBorder'
    | 'InactiveCaption'
    | 'InactiveCaptionText'
    | 'InfoBackground'
    | 'InfoText'
    | 'Menu'
    | 'MenuText'
    | 'Scrollbar'
    | 'ThreeDDarkShadow'
    | 'ThreeDFace'
    | 'ThreeDHighlight'
    | 'ThreeDLightShadow'
    | 'ThreeDShadow'
    | 'Window'
    | 'WindowFrame'
    | 'WindowText';

export type DisplayInside =
    | '-ms-flexbox'
    | '-ms-grid'
    | '-webkit-flex'
    | 'flex'
    | 'flow'
    | 'flow-root'
    | 'grid'
    | 'ruby'
    | 'table';

export type DisplayInternal =
    | 'ruby-base'
    | 'ruby-base-container'
    | 'ruby-text'
    | 'ruby-text-container'
    | 'table-caption'
    | 'table-cell'
    | 'table-column'
    | 'table-column-group'
    | 'table-footer-group'
    | 'table-header-group'
    | 'table-row'
    | 'table-row-group';

export type DisplayLegacy =
    | '-ms-inline-flexbox'
    | '-ms-inline-grid'
    | '-webkit-inline-flex'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'inline-list-item'
    | 'inline-table';

export type DisplayOutside = 'block' | 'inline' | 'run-in';

export type EastAsianVariantValues =
    | 'jis04'
    | 'jis78'
    | 'jis83'
    | 'jis90'
    | 'simplified'
    | 'traditional';

export type FinalBgLayer =
    | Color
    | BgPosition
    | RepeatStyle
    | Attachment
    | Box
    | 'none'
    | string;

export type FontStretchAbsolute =
    | 'condensed'
    | 'expanded'
    | 'extra-condensed'
    | 'extra-expanded'
    | 'normal'
    | 'semi-condensed'
    | 'semi-expanded'
    | 'ultra-condensed'
    | 'ultra-expanded'
    | string;

export type FontWeightAbsolute = 'bold' | 'normal' | number;

export type GenericFamily =
    | 'cursive'
    | 'fantasy'
    | 'monospace'
    | 'sans-serif'
    | 'serif';

export type GeometryBox =
    | Box
    | 'fill-box'
    | 'margin-box'
    | 'stroke-box'
    | 'view-box';

export type GridLine = 'auto' | string | number;

export type LineStyle =
    | 'dashed'
    | 'dotted'
    | 'double'
    | 'groove'
    | 'hidden'
    | 'inset'
    | 'none'
    | 'outset'
    | 'ridge'
    | 'solid';

export type LineWidth = TLength | 'medium' | 'thick' | 'thin';

export type MaskLayer =
    | Position
    | RepeatStyle
    | GeometryBox
    | CompositingOperator
    | MaskingMode
    | 'no-clip'
    | 'none'
    | string;

export type MaskingMode = 'alpha' | 'luminance' | 'match-source';

export type NamedColor =
    | 'aliceblue'
    | 'antiquewhite'
    | 'aqua'
    | 'aquamarine'
    | 'azure'
    | 'beige'
    | 'bisque'
    | 'black'
    | 'blanchedalmond'
    | 'blue'
    | 'blueviolet'
    | 'brown'
    | 'burlywood'
    | 'cadetblue'
    | 'chartreuse'
    | 'chocolate'
    | 'coral'
    | 'cornflowerblue'
    | 'cornsilk'
    | 'crimson'
    | 'cyan'
    | 'darkblue'
    | 'darkcyan'
    | 'darkgoldenrod'
    | 'darkgray'
    | 'darkgreen'
    | 'darkgrey'
    | 'darkkhaki'
    | 'darkmagenta'
    | 'darkolivegreen'
    | 'darkorange'
    | 'darkorchid'
    | 'darkred'
    | 'darksalmon'
    | 'darkseagreen'
    | 'darkslateblue'
    | 'darkslategray'
    | 'darkslategrey'
    | 'darkturquoise'
    | 'darkviolet'
    | 'deeppink'
    | 'deepskyblue'
    | 'dimgray'
    | 'dimgrey'
    | 'dodgerblue'
    | 'firebrick'
    | 'floralwhite'
    | 'forestgreen'
    | 'fuchsia'
    | 'gainsboro'
    | 'ghostwhite'
    | 'gold'
    | 'goldenrod'
    | 'gray'
    | 'green'
    | 'greenyellow'
    | 'grey'
    | 'honeydew'
    | 'hotpink'
    | 'indianred'
    | 'indigo'
    | 'ivory'
    | 'khaki'
    | 'lavender'
    | 'lavenderblush'
    | 'lawngreen'
    | 'lemonchiffon'
    | 'lightblue'
    | 'lightcoral'
    | 'lightcyan'
    | 'lightgoldenrodyellow'
    | 'lightgray'
    | 'lightgreen'
    | 'lightgrey'
    | 'lightpink'
    | 'lightsalmon'
    | 'lightseagreen'
    | 'lightskyblue'
    | 'lightslategray'
    | 'lightslategrey'
    | 'lightsteelblue'
    | 'lightyellow'
    | 'lime'
    | 'limegreen'
    | 'linen'
    | 'magenta'
    | 'maroon'
    | 'mediumaquamarine'
    | 'mediumblue'
    | 'mediumorchid'
    | 'mediumpurple'
    | 'mediumseagreen'
    | 'mediumslateblue'
    | 'mediumspringgreen'
    | 'mediumturquoise'
    | 'mediumvioletred'
    | 'midnightblue'
    | 'mintcream'
    | 'mistyrose'
    | 'moccasin'
    | 'navajowhite'
    | 'navy'
    | 'oldlace'
    | 'olive'
    | 'olivedrab'
    | 'orange'
    | 'orangered'
    | 'orchid'
    | 'palegoldenrod'
    | 'palegreen'
    | 'paleturquoise'
    | 'palevioletred'
    | 'papayawhip'
    | 'peachpuff'
    | 'peru'
    | 'pink'
    | 'plum'
    | 'powderblue'
    | 'purple'
    | 'rebeccapurple'
    | 'red'
    | 'rosybrown'
    | 'royalblue'
    | 'saddlebrown'
    | 'salmon'
    | 'sandybrown'
    | 'seagreen'
    | 'seashell'
    | 'sienna'
    | 'silver'
    | 'skyblue'
    | 'slateblue'
    | 'slategray'
    | 'slategrey'
    | 'snow'
    | 'springgreen'
    | 'steelblue'
    | 'tan'
    | 'teal'
    | 'thistle'
    | 'tomato'
    | 'transparent'
    | 'turquoise'
    | 'violet'
    | 'wheat'
    | 'white'
    | 'whitesmoke'
    | 'yellow'
    | 'yellowgreen';

export type Paint =
    | Color
    | 'child'
    | 'context-fill'
    | 'context-stroke'
    | 'none'
    | string;

export type Position =
    | TLength
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | string;

export type Quote =
    | 'close-quote'
    | 'no-close-quote'
    | 'no-open-quote'
    | 'open-quote';

export type RepeatStyle =
    | 'no-repeat'
    | 'repeat'
    | 'repeat-x'
    | 'repeat-y'
    | 'round'
    | 'space'
    | string;

export type SelfPosition =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start';

export type SingleAnimation =
    | SingleTimingFunction
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | 'infinite'
    | 'none'
    | 'paused'
    | 'running'
    | string
    | number;

export type SingleAnimationDirection =
    | 'alternate'
    | 'alternate-reverse'
    | 'normal'
    | 'reverse';

export type SingleAnimationFillMode =
    | 'backwards'
    | 'both'
    | 'forwards'
    | 'none';

export type SingleTimingFunction =
    | CubicBezierTimingFunction
    | StepTimingFunction
    | 'linear'
    | string;

export type SingleTransition = SingleTimingFunction | 'all' | 'none' | string;

export type StepTimingFunction = 'step-end' | 'step-start' | string;

export type TrackBreadth =
    | TLength
    | 'auto'
    | 'max-content'
    | 'min-content'
    | string;

export type ViewportLength = TLength | 'auto' | string;

export type AzimuthProperty =
    | Globals
    | 'behind'
    | 'center'
    | 'center-left'
    | 'center-right'
    | 'far-left'
    | 'far-right'
    | 'left'
    | 'left-side'
    | 'leftwards'
    | 'right'
    | 'right-side'
    | 'rightwards'
    | string;

// ^^^^^^^^^^^^^^^^^^^^^^^^^
// End of style-types import

// Unrecognized properties are assumed to be media queries
// or pseudo selectors w/ nested style objects.
// See: https://github.com/styletron/styletron-standard

// Ideally I want to write:
// interface StyleObject extends Properties {
//     [extend: string]: StyleObject;
// }

// TODO: Change this any type to be a StyleObject, if possible.
export interface StyleObject extends Properties {
    [extend: string]: any;
}

export interface StandardEngine {
    renderStyle(style: StyleObject): string;
    renderKeyframes(keyframes: KeyframesObject): string;
    renderFontFace(fontFace: FontFace): string;
}

export function driver(style: StyleObject, styletron: StandardEngine): string;

export function getInitialStyle(): StyleObject;

export function renderDeclarativeRules(
    style: StyleObject,
    styletrong: StandardEngine
): StyleObject;
