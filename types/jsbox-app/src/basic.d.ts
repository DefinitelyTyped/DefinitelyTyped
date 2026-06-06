interface JBRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface JBSize {
    width: number;
    height: number;
}

interface JBPoint {
    x: number;
    y: number;
}

interface JBInsets {
    top: number;
    left: number;
    bottom: number;
    right: number;
}

interface JBRange {
    location: number;
    length: number;
}

interface JBBasicValue {
    jsValue(): any;
    ocValue(): any;
    invoke(...args: any[]): any;
}

interface NSError extends JBBasicValue {
    code: number;
    domain: string;
    userInfo: any;
    localizedDescription: string;
    localizedFailureReason: string;
    localizedRecoverySuggestion: string;
}

interface MASConstraintMaker extends JBBasicValue {
    // Margins
    leftMargin: MASViewConstraint;
    rightMargin: MASViewConstraint;
    topMargin: MASViewConstraint;
    bottomMargin: MASViewConstraint;
    leadingMargin: MASViewConstraint;
    trailingMargin: MASViewConstraint;
    centerXWithinMargins: MASViewConstraint;
    centerYWithinMargins: MASViewConstraint;

    // Center
    centerX: MASViewConstraint;
    centerY: MASViewConstraint;
    center: MASCompositeConstraint;

    // Size
    width: MASViewConstraint;
    height: MASViewConstraint;
    size: MASCompositeConstraint;

    // Edges
    left: MASViewConstraint;
    right: MASViewConstraint;
    top: MASViewConstraint;
    bottom: MASViewConstraint;
    leading: MASViewConstraint;
    trailing: MASViewConstraint;
    edges: MASCompositeConstraint;

    // Baseline
    baseline: MASViewConstraint;
    firstBaseline: MASViewConstraint;
    lastBaseline: MASViewConstraint;

    // Other
    updateExisting: boolean;
    removeExisting: boolean;
    attributes: () => MASCompositeConstraint;
}

interface MASViewConstraint extends JBBasicValue {
    // Margins
    leftMargin: MASViewConstraint;
    rightMargin: MASViewConstraint;
    topMargin: MASViewConstraint;
    bottomMargin: MASViewConstraint;
    leadingMargin: MASViewConstraint;
    trailingMargin: MASViewConstraint;

    // Alignment
    left: MASViewConstraint;
    right: MASViewConstraint;
    top: MASViewConstraint;
    bottom: MASViewConstraint;
    leading: MASViewConstraint;
    trailing: MASViewConstraint;
    centerX: MASViewConstraint;
    centerY: MASViewConstraint;
    firstBaseline: MASViewConstraint;
    lastBaseline: MASViewConstraint;
    baseline: MASViewConstraint;

    // Center Alignment within Margins
    centerXWithinMargins: MASViewConstraint;
    centerYWithinMargins: MASViewConstraint;

    // Size
    width: MASViewConstraint;
    height: MASViewConstraint;

    // Priority
    priority: (value: number) => MASViewConstraint;
    priorityToLow: MASViewConstraint;
    priorityToMedium: MASViewConstraint;
    priorityToHigh: MASViewConstraint;

    // Constraint Operations
    equalTo: (target: number | MASViewConstraint | MASViewAttribute | AllUIView) => MASViewConstraint;
    lessThanOrEqualTo: (target: number | MASViewConstraint | MASViewAttribute | AllUIView) => MASViewConstraint;
    greaterThanOrEqualTo: (target: number | MASViewConstraint | MASViewAttribute | AllUIView) => MASViewConstraint;
    offset: (value: number) => MASViewConstraint;
    inset: (value: number) => MASViewConstraint;
    insets: (value: JBInsets) => MASViewConstraint;
    centerOffset: (value: number) => MASViewConstraint;
    valueOffset: (value: number) => MASViewConstraint;
    sizeOffset: (value: JBSize) => MASViewConstraint;
    multipliedBy: (value: number) => MASViewConstraint;
    dividedBy: (value: number) => MASViewConstraint;

    // Chaining Operations
    and: MASViewConstraint;
    with: MASViewConstraint;
}

interface MASCompositeConstraint extends JBBasicValue {
    // Positioning and Alignment
    leading: MASCompositeConstraint;
    trailing: MASCompositeConstraint;
    left: MASCompositeConstraint;
    right: MASCompositeConstraint;
    top: MASCompositeConstraint;
    bottom: MASCompositeConstraint;
    centerX: MASCompositeConstraint;
    centerY: MASCompositeConstraint;
    baseline: MASCompositeConstraint;
    firstBaseline: MASCompositeConstraint;
    lastBaseline: MASCompositeConstraint;

    // Margin Alignment
    leadingMargin: MASCompositeConstraint;
    trailingMargin: MASCompositeConstraint;
    leftMargin: MASCompositeConstraint;
    rightMargin: MASCompositeConstraint;
    topMargin: MASCompositeConstraint;
    bottomMargin: MASCompositeConstraint;
    centerXWithinMargins: MASCompositeConstraint;
    centerYWithinMargins: MASCompositeConstraint;

    // Dimension Constraints
    width: MASCompositeConstraint;
    height: MASCompositeConstraint;

    // Priority
    priority: MASCompositeConstraint;
    priorityToHigh: MASCompositeConstraint;
    priorityToMedium: MASCompositeConstraint;
    priorityToLow: MASCompositeConstraint;

    // Value Setting Methods (taking any value)
    inset: (value: number) => MASCompositeConstraint;
    dividedBy: (value: number) => MASCompositeConstraint;
    multipliedBy: (value: number) => MASCompositeConstraint;
    centerOffset: (value: number) => MASCompositeConstraint;
    offset: (value: number) => MASCompositeConstraint;
    insets: (value: JBInsets) => MASCompositeConstraint;
    valueOffset: (value: number) => MASCompositeConstraint;
    sizeOffset: (value: JBSize) => MASCompositeConstraint;

    // Relational Constraints
    equalTo: (value: MASCompositeConstraint | JBPoint | JBSize | JBInsets | AllUIView) => MASCompositeConstraint;
    greaterThanOrEqualTo: (
        value: MASCompositeConstraint | JBPoint | JBSize | JBInsets | AllUIView,
    ) => MASCompositeConstraint;
    lessThanOrEqualTo: (
        value: MASCompositeConstraint | JBPoint | JBSize | JBInsets | AllUIView,
    ) => MASCompositeConstraint;

    // Others
    and: MASCompositeConstraint;
    with: MASCompositeConstraint;
}

interface UIBaseView extends JBBasicValue {
    // Id and theme
    id: string;
    theme: string;

    // Size and positions
    bounds: { y: number; x: number; width: number; height: number };
    center: { x: number; y: number };
    size: { width: number; height: number };
    frame: { y: number; x: number; width: number; height: number };
    intrinsicSize: { width: number; height: number };
    flex: string;

    // Alignment, margins, center and constraints
    top: MASViewAttribute;
    bottom: MASViewAttribute;
    left: MASViewAttribute;
    right: MASViewAttribute;
    leading: MASViewAttribute;
    trailing: MASViewAttribute;
    centerX: MASViewAttribute;
    centerY: MASViewAttribute;
    width: MASViewAttribute;
    height: MASViewAttribute;
    topMargin: MASViewAttribute;
    bottomMargin: MASViewAttribute;
    leftMargin: MASViewAttribute;
    rightMargin: MASViewAttribute;
    leadingMargin: MASViewAttribute;
    trailingMargin: MASViewAttribute;
    safeArea: MASViewAttribute;
    safeAreaTop: MASViewAttribute;
    safeAreaBottom: MASViewAttribute;
    safeAreaLeft: MASViewAttribute;
    safeAreaRight: MASViewAttribute;
    safeAreaLeading: MASViewAttribute;
    safeAreaTrailing: MASViewAttribute;
    safeAreaCenterX: MASViewAttribute;
    safeAreaCenterY: MASViewAttribute;
    safeAreaWidth: MASViewAttribute;
    safeAreaHeight: MASViewAttribute;
    centerXWithinMargins: MASViewAttribute;
    centerYWithinMargins: MASViewAttribute;
    baseline: MASViewAttribute;
    lastBaseline: MASViewAttribute;
    firstBaseline: MASViewAttribute;

    // View props
    bgcolor: UIColor;
    borderColor: UIColor;
    tintColor: UIColor;
    borderWidth: number;
    cornerRadius: number;
    alpha: number;
    contentMode: number;
    clipsToBounds: boolean;
    hidden: boolean;
    opaque: boolean;
    smoothCorners: boolean;
    smoothRadius: number;
    radius: number;
    info: { [key: string]: any };
    // circular: boolean; // Wrong documentation; this property does not exist in `UIView` and is write-only.

    // Touch and interaction
    exclusiveTouch: boolean;
    multipleTouchEnabled: boolean;
    userInteractionEnabled: boolean;

    // Accessibility
    isAccessibilityElement: boolean;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    accessibilityValue?: string;
    accessibilityCustomActions?: UIAccessibilityCustomAction[];

    // Animation
    readonly animator: JHChainableAnimator;

    // View operations and event handler functions
    snapshot: UIImage;
    add(view: AllUIView | UiTypes.AllViewOptions): void;
    remove(): void;
    get(key: string): AllUIView;
    insertAbove(view: AllUIView, other: AllUIView): void;
    insertBelow(view: AllUIView, other: AllUIView): void;
    insertAtIndex(view: AllUIView, index: number): void;
    moveToFront(): void;
    moveToBack(): void;
    sizeToFit(): void;
    scale(scale: number): void;
    snapshotWithScale(scale: number): UIImage;
    rotate(angle: number): void;
    whenTapped(handler: (sender: AllUIView) => void): void;
    whenDoubleTapped(handler: (sender: AllUIView) => void): void;
    whenTouched(args: { touches: number; taps: number; handler: (sender: AllUIView) => void }): void;
    addEventHandler(args: { events: number; handler: (sender: AllUIView) => void }): void;
    // This only available on components like button, text, input, since they are UI controls
    removeEventHandlers(events: number): void;
    layout(callback: (make: MASConstraintMaker, view: AllUIView) => void): void;
    relayout(): void;
    updateLayout(callback: (make: MASConstraintMaker, view: AllUIView) => void): void;
    remakeLayout(callback: (make: MASConstraintMaker, view: AllUIView) => void): void;
    setNeedsLayout(): void;
    layoutIfNeeded(): void;

    // Subview and hierarchy relationships
    readonly super: AllUIView;
    readonly prev: AllUIView;
    readonly next: AllUIView;
    readonly window: AppWindow; // Only available after fully loaded
    readonly views: AllUIView[];

    // Props not yet fully understood
    // bounce: Function;
    // startLoading: Function;
    // stopLoading: Function;
    // valueForKey: Function;
    // setValueForKey: Function;
    // valueForKeyPath: Function;
    // setValueForKeyPath: Function;
}

type UIView = UIBaseView;

type AppWindow = Omit<UIView, "id" | "bgcolor">;
type UIButtonBarButton = UIButtonView;

interface UILabelView extends UIBaseView {
    text: string;
    styledText?: UiTypes.StyledTextOptions;
    autoFontSize: boolean;
    lines: number;
    align: number;
    font: UIFont;
    shadowOffset: JBPoint;
    textColor: UIColor;
    shadowColor?: UIColor;
}

interface UIButtonView extends UIBaseView {
    title?: string;
    titleColor?: UIColor;
    font?: UIFont;
    src?: string;
    source?: {
        url: string;
        placeholder?: UIImage;
        header: Record<string, string>;
    };
    symbol?: string;
    image?: UIImage;
    icon?: BBFileIcon;
    type: number; // $btnType
    menu?: UIMenu;

    enabled: boolean; // Not documented but actually exists; indicates whether it is enabled.

    // The following properties are not documented but actually exist; their purpose is unclear.
    touchInside: boolean;
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
}

interface UIInputView extends UIBaseView {
    type: number; // $kbType
    darkKeyboard?: boolean;
    text: string;
    styledText?: UiTypes.StyledTextOptions;
    textColor: UIColor;
    font: UIFont;
    align: number; // $align
    placeholder?: string;
    clearsOnBeginEditing: boolean;
    autoFontSize: boolean;
    editing: boolean;
    secure: boolean;

    focus(): void;
    blur(): void;

    enabled: boolean;

    // The following properties are not documented but actually exist; their purpose is unclear.
    returnKeyType: number;
    tracking: boolean;
    selected: boolean;
    highlighted: boolean;
    touchInside: boolean;
    contentVerticalAlignment: number;
    contentHorizontalAlignment: number;
    effectiveContentHorizontalAlignment: number;
    clearButtonMode: number;
    state: number;
}

interface UISliderView extends UIBaseView {
    value: number;
    min: number;
    max: number;
    continuous: boolean;
    minColor?: UIColor;
    maxColor?: UIColor;
    thumbColor?: UIColor;

    enabled: boolean;

    // The following properties are not documented but actually exist; their purpose is unclear.
    touchInside: boolean;
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UISwitchView extends UIBaseView {
    on: boolean;
    onColor: UIColor;
    thumbColor?: UIColor;

    enabled: boolean;

    // The following properties are not documented but actually exist; their purpose is unclear.
    touchInside: boolean;
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UISpinnerView extends UIBaseView {
    loading: boolean;
    color: UIColor;
    // style?: number; // BUG: this property that does not actually exist.
    start(): void;
    stop(): void;
    toggle(): void;
}

interface UIProgressView extends UIBaseView {
    value: number;
    progressColor?: UIColor;
    trackColor: UIColor;
}

interface UIGalleryView extends UIScrollView {
    itemViews: AllUIView[];
    page: number;
    interval: number;
    pageControl: UIPageControl;

    viewWithIndex(index: number): AllUIView;
    scrollToPage(index: number): void;
}

interface UIStepperView extends UIBaseView {
    value: number;
    min: number;
    max: number;
    step: number;
    autorepeat: boolean;
    continuous: boolean;

    enabled: boolean;

    // The following properties are not documented but actually exist; their purpose is unclear.
    touchInside: boolean;
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
    wraps: boolean;
}

interface UITextView extends UIScrollView {
    text: string;
    styledText?: string | UiTypes.StyledTextOptions;
    html: string;
    type: number; // $kbType
    darkKeyboard: boolean;
    font: UIFont;
    textColor: UIColor;
    align: number; // $align
    placeholder: string;
    selectedRange: JBRange;
    editable: boolean;
    selectable: boolean;
    // insets?: JBInsets; // BUG: this property cannot be read.
    accessoryView?: AllUIView;
    keyboardView?: AllUIView;

    focus(): void;
    blur(): void;

    // The following properties are not documented but actually exist; their purpose is unclear.
    returnKeyType: number;
}

interface UIImageView extends UIBaseView {
    image: UIImage;
    data: NSData;
    src?: string;
    source?: {
        url: string;
        placeholder?: UIImage;
        header?: Record<string, string>;
    };
    symbol?: string;
    icon?: BBFileIcon;

    // The following properties are not documented but actually exist; their purpose is unclear.
    highlighted: boolean;
}

interface UIVideoView extends UIWebView {
    src: string;
    poster?: string;

    pause(): void;
    play(): void;
    toggle(): void;
}

interface UIScrollView extends UIBaseView {
    contentOffset: JBPoint;
    contentSize: JBSize;
    alwaysBounceVertical: boolean;
    alwaysBounceHorizontal: boolean;
    pagingEnabled: boolean;
    scrollEnabled: boolean;
    showsHorizontalIndicator: boolean;
    showsVerticalIndicator: boolean;
    // contentInset?: JBInsets; // BUG: it's documented but does not actually exist
    // indicatorInsets?: JBInsets; // BUG: it's documented but does not actually exist
    keyboardDismissMode: number; // 0: none, 1: on-drag, 2: interactive

    zoomEnabled: boolean;
    maxZoomScale: number;
    zoomScale: number; // Not documented but actually exist.
    doubleTapToZoom: boolean;

    tracking: boolean;
    dragging: boolean;
    decelerating: boolean;

    beginRefreshing(): void;
    endRefreshing(): void;
    resize(): void;
    updateZoomScale(): void;
    scrollToOffset(point: JBPoint): void;
    beginFetchingMore(): void;
    endFetchingMore(): void;

    // The following properties are not documented but actually exist; their purpose is unclear.
    zoomToRect: (...args: any[]) => any;
    setZoomScale: (...args: any[]) => any;
    directionalLockEnabled: boolean;
    delaysContentTouches: boolean;
    indicatorStyle: number;
}

interface UIStackView extends UIBaseView {
    stack: BBStackViewStack;
    axis: number; // $stackViewAxis
    distribution: number; // $stackViewDistribution
    alignment: number; // $stackViewAlignment
    spacing: number; // $stackViewSpacing
    baselineRelative: boolean;
    layoutMarginsRelative: boolean;
}

interface UITabView extends UIBaseView {
    items: string[];
    index: number;

    enabled: boolean;
    disable: () => void;
    enable: () => void;

    // The following properties are not documented but actually exist; their purpose is unclear.
    touchInside: boolean;
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UIMenuView extends UIBaseView {
    items: string[];
    index: number;
    dynamicWidth?: boolean;

    enabled: boolean;

    // The following properties are not documented but actually exist; their purpose is unclear.
    touchInside: boolean;
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UIMapView extends UIBaseView {
    location?: {
        lat: number;
        lng: number;
    };
}

interface UIWebView extends UIBaseView {
    title: string;
    url: string;
    request?: {
        url: string;
        method?: string;
        headers?: Record<string, string>;
        body?: NSData;
    };
    toolbar: boolean;
    loading: boolean;
    progress: number;
    canGoBack: boolean;
    canGoForward: boolean;
    ua: string;
    scrollEnabled: boolean;
    bounces: boolean;
    transparent: boolean;
    allowsNavigation: boolean;
    allowsLinkPreview: boolean;

    goBack(): void;
    goForward(): void;
    reload(): void;
    reloadFromOrigin(): void;
    stopLoading(): void;
    eval(args: { script: string; handler: (result: any, error?: NSError) => void }): void;
    exec(script: string): Promise<{ result: any; error?: NSError }>;
    notify(args: { event: string; message: any }): void;

    // The following properties are not documented but actually exist; their purpose is unclear.
    scrollView: UIScrollView;
    pageZoom: number;
}

interface UIListView extends UIScrollView {
    // style?: number; // not readable
    data: any[];
    // template // not readable
    // separatorInset?: JBInsets; // not readable
    separatorHidden: boolean;
    separatorColor: UIColor;
    header: AllUIView;
    footer: AllUIView;
    // rowHeight?: number; // not readable
    // autoRowHeight?: boolean; // not readable
    // estimatedRowHeight?: number; // not readable
    // sectionTitleHeight?: number; // not readable
    selectable: boolean;
    // stickyHeader?: boolean; // not readable
    reorder: boolean;
    crossSections: boolean;
    hasActiveAction: boolean;
    // actions // not readable

    reload(): void; // not documneted but important
    object(indexPath: NSIndexPath): any;
    insert(
        args:
            | {
                indexPath: NSIndexPath;
                value: any; // The value here must conform to the format of data
            }
            | {
                index: number;
                value: any;
            },
    ): void;
    delete(indexPathOrIndex: NSIndexPath | number): void;
    cell(indexPath: NSIndexPath): AllUIView;
    setEditing(editing: boolean): void;
    scrollTo(args: { indexPath: NSIndexPath; animated?: boolean }): void;
}

interface UIMatrixView extends UIScrollView {
    data: any;
    // template // not readable
    // spacing?: number; // not readable
    // itemSize?: JSSize; // not readable
    // autoItemSize?: boolean; // not readable
    // estimatedItemSize?: JSSize; // not readable
    // columns?: number; // not readable
    // itemHeight?: number; // not readable
    // square?: boolean; // not readable
    // direction?: number; // not readable
    selectable: boolean;
    // waterfall?: boolean; // not readable
    // header // not readable (unlike UIListView)
    // footer // not readable (unlike UIListView)
    reorder: boolean;
    // actions // not readable
    reload(): void; // not documneted but important
    object(indexPath: NSIndexPath): any;
    insert(
        args:
            | {
                indexPath: NSIndexPath;
                value: any; // The value here must conform to the format of data
            }
            | {
                index: number;
                value: any;
            },
    ): void;
    delete(indexPathOrIndex: NSIndexPath | number): void;
    cell(indexPath: NSIndexPath): AllUIView;
    scrollTo(args: { indexPath: NSIndexPath; animated?: boolean }): void;
}

type UIBlurView = UIView;

interface UIGradientView extends UIBaseView {
    colors: UIColor[];
    locations?: number[];
    startPoint: JBPoint;
    endPoint: JBPoint;
}

interface UIDatePickerView extends UIBaseView {
    date: Date;
    min?: Date;
    max?: Date;
    mode: number;
    interval: number;

    enabled: boolean;

    // The following properties are not documented but actually exist; their purpose is unclear.
    touchInside: boolean;
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

interface UIPickerView extends UIBaseView {
    items: any[];
    selectedRows: number[];
    data: string[];
}

type UICanvasView = UIView;

interface UIMarkdownView extends UIBaseView {
    content: string;
    style: string;
    scrollEnabled: boolean;
    webView: UIWebView;

    // The following properties are not documented but actually exist; their purpose is unclear.
    baseURL: string;
}

interface UILottieView extends UIBaseView {
    json: any;
    // data: NSData; // not readable
    src?: string; // Documentation error; it is not a write-only property.
    playing: boolean;
    loop: boolean;
    autoReverse: boolean;
    progress: number | null;
    frameIndex: number;
    speed: number;
    duration: number | null;

    play(args: {
        fromFrame?: number;
        toFrame?: number;
        fromProgress?: number;
        toProgress?: number;
        handler: (finished: boolean) => void;
    }): void;
    play(args: { fromFrame?: number; toFrame?: number; fromProgress?: number; toProgress?: number }): Promise<boolean>;
    pause(): void;
    stop(): void;
    update(): void;
    progressForFrame(progress: number): number;
    frameForProgress(progress: number): number;

    // The following properties are not documented but actually exist; their purpose is unclear.
    shouldRasterize: false;
    cacheEnable: false;
    model: LOTComposition;
}

interface UIChartView extends UIWebView {
    render(data: any): void;
    dispatchAction(data: any): void;
    getWidth(): Promise<number>;
    getWidth(handler: (width: number) => void): void;
    getHeight(): Promise<number>;
    getHeight(handler: (height: number) => void): void;
    getOption(): Promise<any>;
    getOption(handler: (option: any) => void): void;
    resize(size: JBSize): void;
    showLoading(): void;
    hideLoading(): void;
    clear(): void;
}

interface UICodeView extends UITextView {
    theme: string; // Meaning changed; now refers to the editor theme.
    // language?: string; // not readable
    // adjustInsets?: boolean; // not readable
    // lineNumbers?: boolean; // not readable
    // invisibles?: boolean; // not readable
    // linePadding?: number; // not readable
    // keys?: string[]; // not readable

    accessoryView: AllUIView;
}

// There is no UIRuntimeView, because what Runtime renders is the component generated by Runtime itself.

interface UIPageControl extends UIBaseView {
    enabled: boolean;

    // The following properties are not documented but actually exist; their purpose is unclear.
    touchInside: boolean;
    selected: boolean;
    highlighted: boolean;
    tracking: boolean;
    state: number;
    contentHorizontalAlignment: number;
    contentVerticalAlignment: number;
    effectiveContentHorizontalAlignment: number;
}

type AllUIView =
    | UIView
    | UILabelView
    | UIButtonView
    | UIInputView
    | UISliderView
    | UISwitchView
    | UISpinnerView
    | UIProgressView
    | UIGalleryView
    | UIStepperView
    | UITextView
    | UIImageView
    | UIVideoView
    | UIScrollView
    | UIStackView
    | UITabView
    | UIMenuView
    | UIMapView
    | UIWebView
    | UIListView
    | UIMatrixView
    | UIBlurView
    | UIGradientView
    | UIDatePickerView
    | UIPickerView
    | UICanvasView
    | UIMarkdownView
    | UILottieView
    | UIChartView
    | UICodeView
    | UIPageControl;

interface BBStackViewStack extends JBBasicValue {
    __clsName: string;
    views: AllUIView[];
    add(view: UIView): void;
    insert(view: UIView, atIndex: number): void;
    remove(view: UIView): void;
    setSpacingAfterView(view: UIView, spacing: number): void;
    spacingAfterView(view: UIView): number;
}

interface BBRenderVC extends JBBasicValue {
    dismiss(): void;
    view: AllUIView;
    __clsName: string;
}

interface MASViewAttribute extends JBBasicValue {
    __clsName: string;
}

interface UIColor extends JBBasicValue {
    hexCode: string;
    components: {
        red: number;
        alpha: number;
        blue: number;
        green: number;
    };
    __clsName: string;
}

interface JHChainableAnimator extends JBBasicValue {
    // Very complex. But the feature itself has been deprecated, so the interface is no longer maintained.
    [propertyName: string]: any;
}

interface NSIndexPath extends JBBasicValue {
    section: number;
    row: number;
    item: number;
    __clsName: string;
}

interface NSData extends JBBasicValue {
    string?: string;
    image?: UIImage;
    imageWithScale?: (scale: number) => UIImage;
    append: (...args: any[]) => any;
    subdata: (...args: any[]) => any;
    fileName: string;
    byteArray: number[];
    isGzipped: boolean;
    __clsName: string;
    gzipped: NSData;
    gunzipped: NSData;
    info: {
        size: number;
        mimeType: string;
    };
}

interface UIImage extends JBBasicValue {
    averageColor: UIColor;
    scale: number;
    orientation: number;
    alwaysTemplate: UIImage; // Returns a new image with the template rendering image
    jpg: (compression: number) => NSData;
    size: {
        width: number;
        height: number;
    };
    colorAtPixel: (point: JBPoint) => UIColor;
    resizableImage(
        args:
            | JBInsets
            | {
                insets: JBInsets;
                mode: "tile" | "stretch"; // default stretch
            },
    ): UIImage;
    resized: (size: JBSize) => UIImage;
    __clsName: string;
    orientationFixedImage: UIImage;
    png: NSData;
    alwaysOriginal: UIImage;
    info: {
        scale: number;
        props: {
            "{JFIF}": {
                XDensity: number;
                YDensity: number;
                JFIFVersion: number[];
                DensityUnit: number;
            };
            "{Exif}": {
                PixelXDimension: number;
                PixelYDimension: number;
                ColorSpace: number;
            };
            DPIWidth: number;
            "{TIFF}": {
                Orientation: number;
                ResolutionUnit: number;
                XResolution: number;
                YResolution: number;
            };
            ColorModel: string;
            PixelHeight: number;
            ProfileName: string;
            Depth: number;
            DPIHeight: number;
            Orientation: number;
            PixelWidth: number;
        };
        width: number;
        height: number;
        orientation: number;
    };
}

interface UIFont extends JBBasicValue {
    __clsName: string;
}

interface BBCanvasContext extends JBBasicValue {
    fillColor: UIColor;
    strokeColor: UIColor;
    font: string;
    fontSize: number;
    allowsAntialiasing: boolean;

    saveGState(): void;
    restoreGState(): void;
    scaleCTM(sx: number, sy: number): void;
    translateCTM(tx: number, ty: number): void;
    rotateCTM(angle: number): void;
    setLineWidth(width: number): void;
    setLineCap(lineCap: number): void;
    setLineJoin(lineJoin: number): void;
    setMiterLimit(miterLimit: number): void;
    setAlpha(alpha: number): void;
    beginPath(): void;
    moveToPoint(x: number, y: number): void;
    addLineToPoint(x: number, y: number): void;
    addCurveToPoint(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    addQuadCurveToPoint(cpx: number, cpy: number, x: number, y: number): void;
    closePath(): void;
    addRect(rect: JBRect): void;
    addArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, clockwise: boolean): void;
    addArcToPoint(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    fillRect(rect: JBRect): void;
    strokeRect(rect: JBRect): void;
    clearRect(rect: JBRect): void;
    fillPath(): void;
    strokePath(): void;
    drawPath(mode: number): void;
    drawImage(rect: JBRect, image: UIImage): void;
    drawText(rect: JBRect, text: string, attributes: { color?: UIColor; font?: UIFont }): void;
}

interface UIAccessibilityCustomAction extends JBBasicValue {
    __clsName: string;
}

interface UIMenu extends JBBasicValue {
    __clsName: string;
}

interface BBFileIcon extends JBBasicValue {
    __clsName: string;
}

interface LOTComposition extends JBBasicValue {
    __clsName: string;
}

interface WKNavigation extends JBBasicValue {
    __clsName: string;
}

interface WKNavigationAction extends JBBasicValue {
    __clsName: string;
    type: number;
    sourceURL?: string;
    targetURL: string;
    requestURL: string;
}
