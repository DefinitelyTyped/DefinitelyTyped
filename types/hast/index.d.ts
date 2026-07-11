import type { Data as UnistData, Literal as UnistLiteral, Node as UnistNode, Parent as UnistParent } from "unist";

// ## Interfaces

/**
 * Info associated with hast nodes by the ecosystem.
 *
 * This space is guaranteed to never be specified by unist or hast.
 * But you can use it in utilities and plugins to store data.
 *
 * This type can be augmented to register custom data.
 * For example:
 *
 * ```ts
 * declare module 'hast' {
 *   interface Data {
 *     // `someNode.data.myId` is typed as `number | undefined`
 *     myId?: number | undefined
 *   }
 * }
 * ```
 */
export interface Data extends UnistData {}

/**
 * Info associated with an element.
 */
export interface Properties {
    abbr?: string | undefined;
    about?: Array<string> | undefined;
    accentHeight?: number | string | undefined;
    accept?: Array<string> | undefined;
    acceptCharset?: Array<string> | undefined;
    accessKey?: Array<string> | undefined;
    accumulate?: string | undefined;
    action?: string | undefined;
    additive?: string | undefined;
    align?: string | undefined;
    alignmentBaseline?: string | undefined;
    aLink?: string | undefined;
    allow?: string | undefined;
    allowFullScreen?: boolean | string | undefined;
    allowPaymentRequest?: boolean | string | undefined;
    allowTransparency?: string | undefined;
    allowUserMedia?: boolean | string | undefined;
    alpha?: boolean | string | undefined;
    alphabetic?: number | string | undefined;
    alt?: string | undefined;
    amplitude?: number | string | undefined;
    arabicForm?: string | undefined;
    archive?: Array<string> | undefined;
    ariaActiveDescendant?: string | undefined;
    ariaAtomic?: "false" | "true" | (string & {}) | undefined;
    ariaAutoComplete?: string | undefined;
    ariaBusy?: "false" | "true" | (string & {}) | undefined;
    ariaChecked?: "false" | "true" | (string & {}) | undefined;
    ariaColCount?: number | string | undefined;
    ariaColIndex?: number | string | undefined;
    ariaColSpan?: number | string | undefined;
    ariaControls?: Array<string> | undefined;
    ariaCurrent?: string | undefined;
    ariaDescribedBy?: Array<string> | undefined;
    ariaDetails?: string | undefined;
    ariaDisabled?: "false" | "true" | (string & {}) | undefined;
    ariaDropEffect?: Array<string> | undefined;
    ariaErrorMessage?: string | undefined;
    ariaExpanded?: "false" | "true" | (string & {}) | undefined;
    ariaFlowTo?: Array<string> | undefined;
    ariaGrabbed?: "false" | "true" | (string & {}) | undefined;
    ariaHasPopup?: string | undefined;
    ariaHidden?: "false" | "true" | (string & {}) | undefined;
    ariaInvalid?: string | undefined;
    ariaKeyShortcuts?: string | undefined;
    ariaLabel?: string | undefined;
    ariaLabelledBy?: Array<string> | undefined;
    ariaLevel?: number | string | undefined;
    ariaLive?: string | undefined;
    ariaModal?: "false" | "true" | (string & {}) | undefined;
    ariaMultiLine?: "false" | "true" | (string & {}) | undefined;
    ariaMultiSelectable?: "false" | "true" | (string & {}) | undefined;
    ariaOrientation?: string | undefined;
    ariaOwns?: Array<string> | undefined;
    ariaPlaceholder?: string | undefined;
    ariaPosInSet?: number | string | undefined;
    ariaPressed?: "false" | "true" | (string & {}) | undefined;
    ariaReadOnly?: "false" | "true" | (string & {}) | undefined;
    ariaRelevant?: string | undefined;
    ariaRequired?: "false" | "true" | (string & {}) | undefined;
    ariaRoleDescription?: Array<string> | undefined;
    ariaRowCount?: number | string | undefined;
    ariaRowIndex?: number | string | undefined;
    ariaRowSpan?: number | string | undefined;
    ariaSelected?: "false" | "true" | (string & {}) | undefined;
    ariaSetSize?: number | string | undefined;
    ariaSort?: string | undefined;
    ariaValueMax?: number | string | undefined;
    ariaValueMin?: number | string | undefined;
    ariaValueNow?: number | string | undefined;
    ariaValueText?: string | undefined;
    as?: string | undefined;
    ascent?: number | string | undefined;
    async?: boolean | string | undefined;
    attributeName?: string | undefined;
    attributeType?: string | undefined;
    autoCapitalize?: string | undefined;
    autoComplete?: Array<string> | undefined;
    autoCorrect?: string | undefined;
    autoFocus?: boolean | string | undefined;
    autoPlay?: boolean | string | undefined;
    autoSave?: string | undefined;
    axis?: string | undefined;
    azimuth?: number | string | undefined;
    background?: string | undefined;
    bandwidth?: string | undefined;
    baseFrequency?: string | undefined;
    baselineShift?: string | undefined;
    baseProfile?: string | undefined;
    bbox?: string | undefined;
    begin?: string | undefined;
    bgColor?: string | undefined;
    bias?: number | string | undefined;
    blocking?: Array<string> | undefined;
    border?: number | string | undefined;
    borderColor?: string | undefined;
    bottomMargin?: number | string | undefined;
    by?: string | undefined;
    calcMode?: string | undefined;
    capHeight?: number | string | undefined;
    capture?: string | undefined;
    cellPadding?: string | undefined;
    cellSpacing?: string | undefined;
    char?: string | undefined;
    charOff?: string | undefined;
    charSet?: string | undefined;
    checked?: boolean | string | undefined;
    cite?: string | undefined;
    classId?: string | undefined;
    className?: Array<string> | undefined;
    clear?: string | undefined;
    clip?: string | undefined;
    clipPath?: string | undefined;
    clipPathUnits?: string | undefined;
    clipRule?: string | undefined;
    closedBy?: string | undefined;
    code?: string | undefined;
    codeBase?: string | undefined;
    codeType?: string | undefined;
    color?: string | undefined;
    colorInterpolation?: string | undefined;
    colorInterpolationFilters?: string | undefined;
    colorProfile?: string | undefined;
    colorRendering?: string | undefined;
    colorSpace?: string | undefined;
    cols?: number | string | undefined;
    colSpan?: number | string | undefined;
    command?: string | undefined;
    commandFor?: string | undefined;
    compact?: boolean | string | undefined;
    content?: string | undefined;
    contentEditable?: "false" | "true" | (string & {}) | undefined;
    contentScriptType?: string | undefined;
    contentStyleType?: string | undefined;
    controls?: boolean | string | undefined;
    controlsList?: Array<string> | undefined;
    coords?: Array<number | string> | undefined;
    credentialless?: boolean | string | undefined;
    crossOrigin?: string | undefined;
    cursor?: string | undefined;
    cx?: string | undefined;
    cy?: string | undefined;
    d?: string | undefined;
    data?: string | undefined;
    dataType?: string | undefined;
    dateTime?: string | undefined;
    declare?: boolean | string | undefined;
    decoding?: string | undefined;
    default?: boolean | string | undefined;
    defaultAction?: string | undefined;
    defer?: boolean | string | undefined;
    descent?: number | string | undefined;
    diffuseConstant?: number | string | undefined;
    dir?: string | undefined;
    direction?: string | undefined;
    dirName?: string | undefined;
    disabled?: boolean | string | undefined;
    disablePictureInPicture?: boolean | string | undefined;
    disableRemotePlayback?: boolean | string | undefined;
    display?: string | undefined;
    divisor?: number | string | undefined;
    dominantBaseline?: string | undefined;
    download?: boolean | string | undefined;
    draggable?: "false" | "true" | (string & {}) | undefined;
    dur?: string | undefined;
    dx?: string | undefined;
    dy?: string | undefined;
    edgeMode?: string | undefined;
    editable?: string | undefined;
    elevation?: number | string | undefined;
    enableBackground?: string | undefined;
    encType?: string | undefined;
    end?: string | undefined;
    enterKeyHint?: string | undefined;
    event?: string | undefined;
    exponent?: number | string | undefined;
    exportParts?: Array<string> | undefined;
    externalResourcesRequired?: string | undefined;
    face?: string | undefined;
    fetchPriority?: string | undefined;
    fill?: string | undefined;
    fillOpacity?: number | string | undefined;
    fillRule?: string | undefined;
    filter?: string | undefined;
    filterRes?: string | undefined;
    filterUnits?: string | undefined;
    floodColor?: string | undefined;
    floodOpacity?: string | undefined;
    focusable?: string | undefined;
    focusHighlight?: string | undefined;
    fontFamily?: string | undefined;
    fontSize?: string | undefined;
    fontSizeAdjust?: string | undefined;
    fontStretch?: string | undefined;
    fontStyle?: string | undefined;
    fontVariant?: string | undefined;
    fontWeight?: string | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    format?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | string | undefined;
    formTarget?: string | undefined;
    fr?: string | undefined;
    frame?: string | undefined;
    frameBorder?: string | undefined;
    from?: string | undefined;
    fx?: string | undefined;
    fy?: string | undefined;
    g1?: Array<string> | undefined;
    g2?: Array<string> | undefined;
    glyphName?: Array<string> | undefined;
    glyphOrientationHorizontal?: string | undefined;
    glyphOrientationVertical?: string | undefined;
    glyphRef?: string | undefined;
    gradientTransform?: string | undefined;
    gradientUnits?: string | undefined;
    handler?: string | undefined;
    hanging?: number | string | undefined;
    hatchContentUnits?: string | undefined;
    hatchUnits?: string | undefined;
    headers?: Array<string> | undefined;
    height?: number | string | undefined;
    hidden?: boolean | string | undefined;
    high?: number | string | undefined;
    horizAdvX?: number | string | undefined;
    horizOriginX?: number | string | undefined;
    horizOriginY?: number | string | undefined;
    href?: string | undefined;
    hrefLang?: string | undefined;
    hSpace?: number | string | undefined;
    htmlFor?: Array<string> | undefined;
    httpEquiv?: Array<string> | undefined;
    id?: string | undefined;
    ideographic?: number | string | undefined;
    imageRendering?: string | undefined;
    imageSizes?: string | undefined;
    imageSrcSet?: string | undefined;
    in?: string | undefined;
    in2?: string | undefined;
    inert?: boolean | string | undefined;
    initialVisibility?: string | undefined;
    inputMode?: string | undefined;
    integrity?: string | undefined;
    intercept?: number | string | undefined;
    is?: string | undefined;
    isMap?: boolean | string | undefined;
    itemId?: string | undefined;
    itemProp?: Array<string> | undefined;
    itemRef?: Array<string> | undefined;
    itemScope?: boolean | string | undefined;
    itemType?: Array<string> | undefined;
    k?: number | string | undefined;
    k1?: number | string | undefined;
    k2?: number | string | undefined;
    k3?: number | string | undefined;
    k4?: number | string | undefined;
    kernelMatrix?: Array<string> | undefined;
    kernelUnitLength?: string | undefined;
    kerning?: string | undefined;
    keyPoints?: string | undefined;
    keySplines?: string | undefined;
    keyTimes?: string | undefined;
    kind?: string | undefined;
    label?: string | undefined;
    lang?: string | undefined;
    language?: string | undefined;
    leftMargin?: number | string | undefined;
    lengthAdjust?: string | undefined;
    letterSpacing?: string | undefined;
    lightingColor?: string | undefined;
    limitingConeAngle?: number | string | undefined;
    link?: string | undefined;
    list?: string | undefined;
    loading?: string | undefined;
    local?: string | undefined;
    longDesc?: string | undefined;
    loop?: boolean | string | undefined;
    low?: number | string | undefined;
    lowSrc?: string | undefined;
    manifest?: string | undefined;
    marginHeight?: number | string | undefined;
    marginWidth?: number | string | undefined;
    markerEnd?: string | undefined;
    markerHeight?: string | undefined;
    markerMid?: string | undefined;
    markerStart?: string | undefined;
    markerUnits?: string | undefined;
    markerWidth?: string | undefined;
    mask?: string | undefined;
    maskContentUnits?: string | undefined;
    maskType?: string | undefined;
    maskUnits?: string | undefined;
    mathematical?: string | undefined;
    max?: string | undefined;
    maxLength?: number | string | undefined;
    media?: string | undefined;
    mediaCharacterEncoding?: string | undefined;
    mediaContentEncodings?: string | undefined;
    mediaSize?: number | string | undefined;
    mediaTime?: string | undefined;
    method?: string | undefined;
    min?: string | undefined;
    minLength?: number | string | undefined;
    mode?: string | undefined;
    multiple?: boolean | string | undefined;
    muted?: boolean | string | undefined;
    name?: string | undefined;
    navDown?: string | undefined;
    navDownLeft?: string | undefined;
    navDownRight?: string | undefined;
    navLeft?: string | undefined;
    navNext?: string | undefined;
    navPrev?: string | undefined;
    navRight?: string | undefined;
    navUp?: string | undefined;
    navUpLeft?: string | undefined;
    navUpRight?: string | undefined;
    noHref?: boolean | string | undefined;
    noModule?: boolean | string | undefined;
    nonce?: string | undefined;
    noResize?: boolean | string | undefined;
    noShade?: boolean | string | undefined;
    noValidate?: boolean | string | undefined;
    noWrap?: boolean | string | undefined;
    numOctaves?: string | undefined;
    object?: string | undefined;
    observer?: string | undefined;
    offset?: string | undefined;
    onAbort?: string | undefined;
    onActivate?: string | undefined;
    onAfterPrint?: string | undefined;
    onAuxClick?: string | undefined;
    onBeforeMatch?: string | undefined;
    onBeforePrint?: string | undefined;
    onBeforeToggle?: string | undefined;
    onBeforeUnload?: string | undefined;
    onBegin?: string | undefined;
    onBlur?: string | undefined;
    onCancel?: string | undefined;
    onCanPlay?: string | undefined;
    onCanPlayThrough?: string | undefined;
    onChange?: string | undefined;
    onClick?: string | undefined;
    onClose?: string | undefined;
    onContextLost?: string | undefined;
    onContextMenu?: string | undefined;
    onContextRestored?: string | undefined;
    onCopy?: string | undefined;
    onCueChange?: string | undefined;
    onCut?: string | undefined;
    onDblClick?: string | undefined;
    onDrag?: string | undefined;
    onDragEnd?: string | undefined;
    onDragEnter?: string | undefined;
    onDragExit?: string | undefined;
    onDragLeave?: string | undefined;
    onDragOver?: string | undefined;
    onDragStart?: string | undefined;
    onDrop?: string | undefined;
    onDurationChange?: string | undefined;
    onEmptied?: string | undefined;
    onEnd?: string | undefined;
    onEnded?: string | undefined;
    onError?: string | undefined;
    onFocus?: string | undefined;
    onFocusIn?: string | undefined;
    onFocusOut?: string | undefined;
    onFormData?: string | undefined;
    onHashChange?: string | undefined;
    onInput?: string | undefined;
    onInvalid?: string | undefined;
    onKeyDown?: string | undefined;
    onKeyPress?: string | undefined;
    onKeyUp?: string | undefined;
    onLanguageChange?: string | undefined;
    onLoad?: string | undefined;
    onLoadedData?: string | undefined;
    onLoadedMetadata?: string | undefined;
    onLoadEnd?: string | undefined;
    onLoadStart?: string | undefined;
    onMessage?: string | undefined;
    onMessageError?: string | undefined;
    onMouseDown?: string | undefined;
    onMouseEnter?: string | undefined;
    onMouseLeave?: string | undefined;
    onMouseMove?: string | undefined;
    onMouseOut?: string | undefined;
    onMouseOver?: string | undefined;
    onMouseUp?: string | undefined;
    onMouseWheel?: string | undefined;
    onOffline?: string | undefined;
    onOnline?: string | undefined;
    onPageHide?: string | undefined;
    onPageShow?: string | undefined;
    onPaste?: string | undefined;
    onPause?: string | undefined;
    onPlay?: string | undefined;
    onPlaying?: string | undefined;
    onPopState?: string | undefined;
    onProgress?: string | undefined;
    onRateChange?: string | undefined;
    onRejectionHandled?: string | undefined;
    onRepeat?: string | undefined;
    onReset?: string | undefined;
    onResize?: string | undefined;
    onScroll?: string | undefined;
    onScrollEnd?: string | undefined;
    onSecurityPolicyViolation?: string | undefined;
    onSeeked?: string | undefined;
    onSeeking?: string | undefined;
    onSelect?: string | undefined;
    onShow?: string | undefined;
    onSlotChange?: string | undefined;
    onStalled?: string | undefined;
    onStorage?: string | undefined;
    onSubmit?: string | undefined;
    onSuspend?: string | undefined;
    onTimeUpdate?: string | undefined;
    onToggle?: string | undefined;
    onUnhandledRejection?: string | undefined;
    onUnload?: string | undefined;
    onVolumeChange?: string | undefined;
    onWaiting?: string | undefined;
    onWheel?: string | undefined;
    onZoom?: string | undefined;
    opacity?: string | undefined;
    open?: boolean | string | undefined;
    operator?: string | undefined;
    optimum?: number | string | undefined;
    order?: string | undefined;
    orient?: string | undefined;
    orientation?: string | undefined;
    origin?: string | undefined;
    overflow?: string | undefined;
    overlay?: string | undefined;
    overlinePosition?: number | string | undefined;
    overlineThickness?: number | string | undefined;
    paintOrder?: string | undefined;
    panose1?: string | undefined;
    part?: Array<string> | undefined;
    path?: string | undefined;
    pathLength?: number | string | undefined;
    pattern?: string | undefined;
    patternContentUnits?: string | undefined;
    patternTransform?: string | undefined;
    patternUnits?: string | undefined;
    phase?: string | undefined;
    ping?: Array<string> | undefined;
    pitch?: string | undefined;
    placeholder?: string | undefined;
    playbackOrder?: string | undefined;
    playsInline?: boolean | string | undefined;
    pointerEvents?: string | undefined;
    points?: string | undefined;
    pointsAtX?: number | string | undefined;
    pointsAtY?: number | string | undefined;
    pointsAtZ?: number | string | undefined;
    popover?: string | undefined;
    popoverTarget?: string | undefined;
    popoverTargetAction?: string | undefined;
    poster?: string | undefined;
    prefix?: string | undefined;
    preload?: string | undefined;
    preserveAlpha?: string | undefined;
    preserveAspectRatio?: string | undefined;
    primitiveUnits?: string | undefined;
    profile?: string | undefined;
    prompt?: string | undefined;
    propagate?: string | undefined;
    property?: string | Array<string> | undefined;
    r?: string | undefined;
    radius?: string | undefined;
    readOnly?: boolean | string | undefined;
    referrerPolicy?: string | undefined;
    refX?: string | undefined;
    refY?: string | undefined;
    rel?: Array<string> | undefined;
    renderingIntent?: string | undefined;
    repeatCount?: string | undefined;
    repeatDur?: string | undefined;
    required?: boolean | string | undefined;
    requiredExtensions?: Array<string> | undefined;
    requiredFeatures?: Array<string> | undefined;
    requiredFonts?: Array<string> | undefined;
    requiredFormats?: Array<string> | undefined;
    resource?: string | undefined;
    restart?: string | undefined;
    result?: string | undefined;
    results?: number | string | undefined;
    rev?: string | Array<string> | undefined;
    reversed?: boolean | string | undefined;
    rightMargin?: number | string | undefined;
    role?: string | undefined;
    rotate?: string | undefined;
    rows?: number | string | undefined;
    rowSpan?: number | string | undefined;
    rules?: string | undefined;
    rx?: string | undefined;
    ry?: string | undefined;
    sandbox?: Array<string> | undefined;
    scale?: string | undefined;
    scheme?: string | undefined;
    scope?: string | undefined;
    scoped?: boolean | string | undefined;
    scrolling?: "false" | "true" | (string & {}) | undefined;
    seamless?: boolean | string | undefined;
    security?: string | undefined;
    seed?: string | undefined;
    selected?: boolean | string | undefined;
    shadowRootClonable?: boolean | string | undefined;
    shadowRootCustomElementRegistry?: boolean | string | undefined;
    shadowRootDelegatesFocus?: boolean | string | undefined;
    shadowRootMode?: string | undefined;
    shadowRootSerializable?: boolean | string | undefined;
    shape?: string | undefined;
    shapeRendering?: string | undefined;
    side?: string | undefined;
    size?: number | string | undefined;
    sizes?: string | undefined;
    slope?: string | undefined;
    slot?: string | undefined;
    snapshotTime?: string | undefined;
    spacing?: string | undefined;
    span?: number | string | undefined;
    specularConstant?: number | string | undefined;
    specularExponent?: number | string | undefined;
    spellCheck?: "false" | "true" | (string & {}) | undefined;
    spreadMethod?: string | undefined;
    src?: string | undefined;
    srcDoc?: string | undefined;
    srcLang?: string | undefined;
    srcSet?: string | undefined;
    standby?: string | undefined;
    start?: number | string | undefined;
    startOffset?: string | undefined;
    stdDeviation?: string | undefined;
    stemh?: string | undefined;
    stemv?: string | undefined;
    step?: string | undefined;
    stitchTiles?: string | undefined;
    stopColor?: string | undefined;
    stopOpacity?: string | undefined;
    strikethroughPosition?: number | string | undefined;
    strikethroughThickness?: number | string | undefined;
    string?: string | undefined;
    stroke?: string | undefined;
    strokeDashArray?: Array<string> | undefined;
    strokeDashOffset?: string | undefined;
    strokeLineCap?: string | undefined;
    strokeLineJoin?: string | undefined;
    strokeMiterLimit?: number | string | undefined;
    strokeOpacity?: number | string | undefined;
    strokeWidth?: string | undefined;
    style?: string | undefined;
    summary?: string | undefined;
    surfaceScale?: number | string | undefined;
    syncBehavior?: string | undefined;
    syncBehaviorDefault?: string | undefined;
    syncMaster?: string | undefined;
    syncTolerance?: string | undefined;
    syncToleranceDefault?: string | undefined;
    systemLanguage?: Array<string> | undefined;
    tabIndex?: number | string | undefined;
    tableValues?: string | undefined;
    target?: string | undefined;
    targetX?: number | string | undefined;
    targetY?: number | string | undefined;
    text?: string | undefined;
    textAnchor?: string | undefined;
    textDecoration?: string | undefined;
    textLength?: string | undefined;
    textRendering?: string | undefined;
    timelineBegin?: string | undefined;
    title?: string | undefined;
    to?: string | undefined;
    topMargin?: number | string | undefined;
    transform?: string | undefined;
    transformBehavior?: string | undefined;
    transformOrigin?: string | undefined;
    translate?: string | undefined;
    type?: string | undefined;
    typeMustMatch?: boolean | string | undefined;
    typeOf?: Array<string> | undefined;
    u1?: string | undefined;
    u2?: string | undefined;
    underlinePosition?: number | string | undefined;
    underlineThickness?: number | string | undefined;
    unicode?: string | undefined;
    unicodeBidi?: string | undefined;
    unicodeRange?: string | undefined;
    unitsPerEm?: number | string | undefined;
    unselectable?: string | undefined;
    useMap?: string | undefined;
    vAlign?: string | undefined;
    vAlphabetic?: number | string | undefined;
    value?: "false" | "true" | (string & {}) | undefined;
    values?: string | undefined;
    valueType?: string | undefined;
    vectorEffect?: string | undefined;
    version?: string | undefined;
    vertAdvY?: number | string | undefined;
    vertOriginX?: number | string | undefined;
    vertOriginY?: number | string | undefined;
    vHanging?: number | string | undefined;
    vIdeographic?: number | string | undefined;
    viewBox?: string | undefined;
    viewTarget?: string | undefined;
    visibility?: string | undefined;
    vLink?: string | undefined;
    vMathematical?: number | string | undefined;
    vSpace?: number | string | undefined;
    width?: number | string | undefined;
    widths?: string | undefined;
    wordSpacing?: string | undefined;
    wrap?: string | undefined;
    writingMode?: string | undefined;
    writingSuggestions?: string | undefined;
    x?: string | undefined;
    x1?: string | undefined;
    x2?: string | undefined;
    xChannelSelector?: string | undefined;
    xHeight?: number | string | undefined;
    xLinkActuate?: string | undefined;
    xLinkArcRole?: string | undefined;
    xLinkHref?: string | undefined;
    xLinkRole?: string | undefined;
    xLinkShow?: string | undefined;
    xLinkTitle?: string | undefined;
    xLinkType?: string | undefined;
    xmlBase?: string | undefined;
    xmlLang?: string | undefined;
    xmlns?: string | undefined;
    xmlnsXLink?: string | undefined;
    xmlSpace?: string | undefined;
    y?: string | undefined;
    y1?: string | undefined;
    y2?: string | undefined;
    yChannelSelector?: string | undefined;
    z?: string | undefined;
    zoomAndPan?: string | undefined;
    [PropertyName: string]: boolean | number | string | null | undefined | Array<string | number>;
}

// ## Content maps

/**
 * Union of registered hast nodes that can occur in {@link Element}.
 *
 * To register mote custom hast nodes, add them to {@link ElementContentMap}.
 * They will be automatically added here.
 */
export type ElementContent = ElementContentMap[keyof ElementContentMap];

/**
 * Registry of all hast nodes that can occur as children of {@link Element}.
 *
 * For a union of all {@link Element} children, see {@link ElementContent}.
 */
export interface ElementContentMap {
    comment: Comment;
    element: Element;
    text: Text;
}

/**
 * Union of registered hast nodes that can occur in {@link Root}.
 *
 * To register custom hast nodes, add them to {@link RootContentMap}.
 * They will be automatically added here.
 */
export type RootContent = RootContentMap[keyof RootContentMap];

/**
 * Registry of all hast nodes that can occur as children of {@link Root}.
 *
 * > 👉 **Note**: {@link Root} does not need to be an entire document.
 * > it can also be a fragment.
 *
 * For a union of all {@link Root} children, see {@link RootContent}.
 */
export interface RootContentMap {
    comment: Comment;
    doctype: Doctype;
    element: Element;
    text: Text;
}

// ### Special content types

/**
 * Union of registered hast nodes that can occur in {@link Root}.
 *
 * @deprecated Use {@link RootContent} instead.
 */
export type Content = RootContent;

/**
 * Union of registered hast literals.
 *
 * To register custom hast nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Literals = Extract<Nodes, UnistLiteral>;

/**
 * Union of registered hast nodes.
 *
 * To register custom hast nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Nodes = Root | RootContent;

/**
 * Union of registered hast parents.
 *
 * To register custom hast nodes, add them to {@link RootContentMap} and other
 * places where relevant.
 * They will be automatically added here.
 */
export type Parents = Extract<Nodes, UnistParent>;

// ## Abstract nodes

/**
 * Abstract hast node.
 *
 * This interface is supposed to be extended.
 * If you can use {@link Literal} or {@link Parent}, you should.
 * But for example in HTML, a `Doctype` is neither literal nor parent, but
 * still a node.
 *
 * To register custom hast nodes, add them to {@link RootContentMap} and other
 * places where relevant (such as {@link ElementContentMap}).
 *
 * For a union of all registered hast nodes, see {@link Nodes}.
 */
export interface Node extends UnistNode {
    /**
     * Info from the ecosystem.
     */
    data?: Data | undefined;
}

/**
 * Abstract hast node that contains the smallest possible value.
 *
 * This interface is supposed to be extended if you make custom hast nodes.
 *
 * For a union of all registered hast literals, see {@link Literals}.
 */
export interface Literal extends Node {
    /**
     * Plain-text value.
     */
    value: string;
}

/**
 * Abstract hast node that contains other hast nodes (*children*).
 *
 * This interface is supposed to be extended if you make custom hast nodes.
 *
 * For a union of all registered hast parents, see {@link Parents}.
 */
export interface Parent extends Node {
    /**
     * List of children.
     */
    children: RootContent[];
}

// ## Concrete nodes

/**
 * HTML comment.
 */
export interface Comment extends Literal {
    /**
     * Node type of HTML comments in hast.
     */
    type: "comment";
    /**
     * Data associated with the comment.
     */
    data?: CommentData | undefined;
}

/**
 * Info associated with hast comments by the ecosystem.
 */
export interface CommentData extends Data {}

/**
 * HTML document type.
 */
export interface Doctype extends UnistNode {
    /**
     * Node type of HTML document types in hast.
     */
    type: "doctype";
    /**
     * Data associated with the doctype.
     */
    data?: DoctypeData | undefined;
}

/**
 * Info associated with hast doctypes by the ecosystem.
 */
export interface DoctypeData extends Data {}

/**
 * HTML element.
 */
export interface Element extends Parent {
    /**
     * Node type of elements.
     */
    type: "element";
    /**
     * Tag name (such as `'body'`) of the element.
     */
    tagName: string;
    /**
     * Info associated with the element.
     */
    properties: Properties;
    /**
     * Children of element.
     */
    children: ElementContent[];
    /**
     * When the `tagName` field is `'template'`, a `content` field can be
     * present.
     */
    content?: Root | undefined;
    /**
     * Data associated with the element.
     */
    data?: ElementData | undefined;
}

/**
 * Info associated with hast elements by the ecosystem.
 */
export interface ElementData extends Data {}

/**
 * Document fragment or a whole document.
 *
 * Should be used as the root of a tree and must not be used as a child.
 *
 * Can also be used as the value for the content field on a `'template'` element.
 */
export interface Root extends Parent {
    /**
     * Node type of hast root.
     */
    type: "root";
    /**
     * Children of root.
     */
    children: RootContent[];
    /**
     * Data associated with the hast root.
     */
    data?: RootData | undefined;
}

/**
 * Info associated with hast root nodes by the ecosystem.
 */
export interface RootData extends Data {}

/**
 * HTML character data (plain text).
 */
export interface Text extends Literal {
    /**
     * Node type of HTML character data (plain text) in hast.
     */
    type: "text";
    /**
     * Data associated with the text.
     */
    data?: TextData | undefined;
}

/**
 * Info associated with hast texts by the ecosystem.
 */
export interface TextData extends Data {}
