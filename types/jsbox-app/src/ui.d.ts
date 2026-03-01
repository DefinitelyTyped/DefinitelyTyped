// JSBox UI API TypeScript Declaration

declare namespace UiTypes {
    interface StyledTextOptions {
        text: string;
        font?: UIFont;
        color?: UIColor;
        markdown?: boolean;
        // Markdown syntax is disable when styles is used; it can be turned on by specifying markdown: true.
        styles?: {
            range: JBRange;
            font?: UIFont;
            color?: UIColor;
            bgcolor?: UIColor;
            kern?: number;
            strikethroughStyle?: number;
            strikethroughColor?: UIColor;
            underlineStyle?: number;
            underlineColor?: UIColor;
            strokeWidth?: number;
            strokeColor?: UIColor;
            link?: string;
            baselineOffset?: number;
            obliqueness?: number;
        }[];
    }

    interface NavButtonOptions {
        title?: string;
        image?: UIImage;
        icon?: string;
        symbol?: string;
        menu?: ContextMenuOptions<UIView>;
        handler: (sender: UIButtonBarButton) => void;
    }

    interface ContextMenuOptions<T extends AllUIView> {
        title?: string;
        pullDown?: boolean;
        asPrimary?: boolean;
        items: ContextMenuSubItem<T>[];
    }

    interface ContextMenuSubItem<T extends AllUIView> {
        title?: string;
        symbol?: string;
        destructive?: boolean;
        handler?: (sender: T, indexPath: NSIndexPath) => void; // sender is source view
        items?: ContextMenuSubItem<T>[];
        inline?: boolean;
    }

    interface BaseViewProps {
        id?: string;
        height?: number; // Only applies to accessoryView, keyboardView, header, footer
        selectable?: boolean; // Only applies to static cells in UIListView

        theme?: string;
        alpha?: number;
        bgcolor?: UIColor;
        cornerRadius?: number;
        smoothCorners?: boolean;
        radius?: number; // deprecated
        smoothRadius?: number; // deprecated
        frame?: JBRect;
        size?: JBSize;
        center?: JBPoint;
        flex?: string;
        userInteractionEnabled?: boolean;
        multipleTouchEnabled?: boolean;
        views?: AllViewOptions[];
        clipsToBounds?: boolean;
        opaque?: boolean;
        hidden?: boolean;
        contentMode?: number; // $contentMode
        tintColor?: UIColor;
        borderWidth?: number;
        borderColor?: UIColor;
        circular?: boolean;
        info?: any;
        intrinsicSize?: JBSize;
        isAccessibilityElement?: boolean;
        accessibilityLabel?: string;
        accessibilityHint?: string;
        accessibilityValue?: string;
        accessibilityCustomActions?: UIAccessibilityCustomAction[];
    }

    interface BaseViewEvents<T = UIBaseView> {
        ready?: (sender: T) => void;
        tapped?: (sender: T) => void;
        pencilTapped?: (info: {
            action: number; // 0: Ignore, 1: Switch Eraser, 2: Switch Previous, 3: Show Color Palette
            enabled: boolean; // Whether the system reports double taps on Apple Pencil to your app
        }) => void;
        hoverEntered?: (sender: T) => void;
        hoverExited?: (sender: T) => void;
        themeChanged?: (sender: T, isDarkMode: boolean) => void;
        longPressed?: (info: { location: JBPoint; sender: T }) => void;
        doubleTapped?: (sender: T) => void;
        touchesBegan?: (sender: T, location: JBPoint, locations: JBPoint[]) => void;
        touchesMoved?: (sender: T, location: JBPoint, locations: JBPoint[]) => void;
        touchesEnded?: (sender: T, location: JBPoint, locations: JBPoint[]) => void;
        touchesCancelled?: (sender: T, location: JBPoint, locations: JBPoint[]) => void;
        layoutSubviews?: (sender: T) => void;
        height?: (sender: T) => number; // Only applies to header and footer in UIMatrixView
    }

    interface BaseViewOptions {
        views?: AllViewOptions[];
    }

    interface KeyCommand {
        input: string;
        modifiers: number;
        title: string;
        handler: () => void;
    }

    interface RootViewPrefs extends BaseViewProps {
        theme?: "light" | "dark" | "auto";
        title?: string;
        titleColor?: UIColor;
        barColor?: UIColor;
        iconColor?: UIColor;
        debugging?: boolean;
        navBarHidden?: boolean;
        statusBarHidden?: boolean;
        statusBarStyle?: 0 | 1; // 0 for black, 1 for white
        fullScreen?: boolean;
        formSheet?: boolean;
        pageSheet?: boolean;
        bottomSheet?: boolean;
        modalInPresentation?: boolean;
        homeIndicatorHidden?: boolean;
        clipsToSafeArea?: boolean;
        keyCommands?: KeyCommand[];

        navButtons?: NavButtonOptions[];
        titleView?: AllViewOptions;
    }

    interface RootViewEvents extends BaseViewEvents {
        appeared?: () => void;
        disappeared?: () => void;
        dealloc?: () => void;
        keyboardHeightChanged?: (height: number) => void;
        shakeDetected?: () => void;
    }

    interface RootViewOptions extends BaseViewOptions {
        prefs: RootViewPrefs;
        layout?: (make: MASConstraintMaker, view: UIView) => void;
        events?: RootViewEvents;
    }

    interface ViewProps extends BaseViewProps {
        menu?: ContextMenuOptions<UIView>;
    }

    interface ViewOptions extends BaseViewOptions {
        type: "view";
        props: ViewProps;
        layout?: (make: MASConstraintMaker, view: UIView) => void;
        events?: BaseViewEvents;
    }

    interface LabelProps extends BaseViewProps {
        text?: string;
        styledText?: StyledTextOptions;
        font?: UIFont;
        textColor?: UIColor;
        shadowColor?: UIColor;
        align?: number; // $align
        lines?: number;
        autoFontSize?: boolean;
        lineSpacing?: number; // not documented but actually exists
        menu?: ContextMenuOptions<UILabelView>;
    }

    interface LabelOptions extends BaseViewOptions {
        type: "label";
        props: LabelProps;
        layout?: (make: MASConstraintMaker, view: UILabelView) => void;
        events?: BaseViewEvents<UILabelView>;
    }

    interface ButtonProps extends BaseViewProps {
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
        type?: number; // $btnType
        contentEdgeInsets?: JBInsets;
        titleEdgeInsets?: JBInsets;
        imageEdgeInsets?: JBInsets;
        enabled?: boolean; // not documented but actually exists
        menu?: ContextMenuOptions<UIButtonView>;
    }

    interface ButtonOptions extends BaseViewOptions {
        type: "button";
        props: ButtonProps;
        layout?: (make: MASConstraintMaker, view: UIButtonView) => void;
        events?: BaseViewEvents<UIButtonView>;
    }

    interface InputProps extends BaseViewProps {
        type?: number; // $kbType
        darkKeyboard?: boolean;
        text?: string;
        styledText?: StyledTextOptions;
        textColor?: UIColor;
        font?: UIFont;
        align?: number; // $align
        placeholder?: string;
        clearsOnBeginEditing?: boolean;
        autoFontSize?: boolean;
        // editing: boolean; // only readable
        secure?: boolean;
        keyboardView?: AllViewOptions;
        accessoryView?: AllViewOptions;
        menu?: ContextMenuOptions<UIInputView>;
    }

    interface InputEvents extends BaseViewEvents<UIInputView> {
        changed?: (sender: UIInputView) => void;
        returned?: (sender: UIInputView) => void;
        didBeginEditing?: (sender: UIInputView) => void;
        didEndEditing?: (sender: UIInputView) => void;
    }

    interface InputOptions extends BaseViewOptions {
        type: "input";
        props: InputProps;
        layout?: (make: MASConstraintMaker, view: UIInputView) => void;
        events?: InputEvents;
    }

    interface SliderProps extends BaseViewProps {
        value?: number;
        min?: number;
        max?: number;
        continuous?: boolean;
        minColor?: UIColor;
        maxColor?: UIColor;
        thumbColor?: UIColor;
        menu?: ContextMenuOptions<UISliderView>;
    }

    interface SliderEvents extends BaseViewEvents<UISliderView> {
        changed?: (sender: UISliderView) => void;
    }

    interface SliderOptions extends BaseViewOptions {
        type: "slider";
        props: SliderProps;
        layout?: (make: MASConstraintMaker, view: UISliderView) => void;
        events?: SliderEvents;
    }

    interface SwitchProps extends BaseViewProps {
        on?: boolean;
        onColor?: UIColor;
        thumbColor?: UIColor;
        menu?: ContextMenuOptions<UISwitchView>;
    }

    interface SwitchEvents extends BaseViewEvents<UISwitchView> {
        changed?: (sender: UISwitchView) => void;
    }

    interface SwitchOptions extends BaseViewOptions {
        type: "switch";
        props: SwitchProps;
        layout?: (make: MASConstraintMaker, view: UISwitchView) => void;
        events?: SwitchEvents;
    }

    interface SpinnerProps extends BaseViewProps {
        loading?: boolean;
        color?: UIColor;
        style?: number; // 0 ~ 2
        menu?: ContextMenuOptions<UISpinnerView>;
    }

    interface SpinnerOptions extends BaseViewOptions {
        type: "spinner";
        props: SpinnerProps;
        layout?: (make: MASConstraintMaker, view: UISpinnerView) => void;
        events?: BaseViewEvents<UISpinnerView>;
    }

    interface ProgressProps extends BaseViewProps {
        value?: number;
        progressColor?: UIColor;
        trackColor?: UIColor;
        menu?: ContextMenuOptions<UIProgressView>;
    }

    interface ProgressOptions extends BaseViewOptions {
        type: "progress";
        props: ProgressProps;
        layout?: (make: MASConstraintMaker, view: UIProgressView) => void;
        events?: BaseViewEvents<UIProgressView>;
    }

    interface GalleryProps extends BaseViewProps {
        items: AllViewOptions[];
        page?: number;
        interval?: number;
        // pageControl?: UIView; // only readable
        menu?: ContextMenuOptions<UIGalleryView>;
    }

    interface GalleryEvents extends BaseViewEvents<UIGalleryView> {
        changed?: (sender: UIGalleryView) => void;
    }

    interface GalleryOptions extends BaseViewOptions {
        type: "gallery";
        props: GalleryProps;
        layout?: (make: MASConstraintMaker, view: UIGalleryView) => void;
        events?: GalleryEvents;
    }

    interface StepperProps extends BaseViewProps {
        value?: number;
        min?: number;
        max?: number;
        step?: number;
        autorepeat?: boolean;
        continuous?: boolean;
        menu?: ContextMenuOptions<UIStepperView>;
    }

    interface StepperEvents extends BaseViewEvents<UIStepperView> {
        changed?: (sender: UIStepperView) => void;
    }

    interface StepperOptions extends BaseViewOptions {
        type: "stepper";
        props: StepperProps;
        layout?: (make: MASConstraintMaker, view: UIStepperView) => void;
        events?: StepperEvents;
    }

    interface TextProps<T2 extends AllUIView = UITextView> extends ScrollProps<T2> {
        text?: string;
        styledText?: string | StyledTextOptions;
        html?: string;
        type?: number; // $kbType
        darkKeyboard?: boolean;
        font?: UIFont;
        textColor?: UIColor;
        align?: number; // $align
        placeholder?: string;
        selectedRange?: JBRange;
        editable?: boolean;
        selectable?: boolean;
        insets?: JBInsets;
        accessoryView?: AllViewOptions;
        keyboardView?: AllViewOptions;
        menu?: ContextMenuOptions<T2>;
    }

    interface TextEvents<T3 = UITextView> extends ScrollEvents<T3> {
        didBeginEditing?: (sender: T3) => void;
        didEndEditing?: (sender: T3) => void;
        didChange?: (sender: T3) => void;
        didChangeSelection?: (sender: T3) => void;
    }

    interface TextOptions extends BaseViewOptions {
        type: "text";
        props: TextProps;
        layout?: (make: MASConstraintMaker, view: UITextView) => void;
        events?: TextEvents;
    }

    interface ImageProps extends BaseViewProps {
        image?: UIImage;
        src?: string;
        source?: {
            url: string;
            placeholder?: UIImage;
            header: Record<string, string>;
        };
        symbol?: string;
        data?: NSData;
        icon?: BBFileIcon;
        menu?: ContextMenuOptions<UIImageView>;
    }

    interface ImageOptions extends BaseViewOptions {
        type: "image";
        props: ImageProps;
        layout?: (make: MASConstraintMaker, view: UIImageView) => void;
        events?: BaseViewEvents<UIImageView>;
    }

    interface VideoProps extends BaseViewProps {
        src: string;
        poster?: string;
        menu?: ContextMenuOptions<UIVideoView>;
    }

    interface VideoOptions extends BaseViewOptions {
        type: "video";
        props: VideoProps;
        layout?: (make: MASConstraintMaker, view: UIVideoView) => void;
        events?: BaseViewEvents<UIVideoView>;
    }

    interface ScrollProps<T extends AllUIView = UIScrollView> extends BaseViewProps {
        contentOffset?: JBPoint;
        contentSize?: JBSize;
        alwaysBounceVertical?: boolean;
        alwaysBounceHorizontal?: boolean;
        pagingEnabled?: boolean;
        scrollEnabled?: boolean;
        showsHorizontalIndicator?: boolean;
        showsVerticalIndicator?: boolean;
        contentInset?: JBInsets;
        indicatorInsets?: JBInsets;
        // tracking?: boolean;
        // dragging?: boolean;
        // decelerating?: boolean;
        keyboardDismissMode?: number; // 0: none, 1: on-drag, 2: interactive
        zoomEnabled?: boolean;
        maxZoomScale?: number;
        doubleTapToZoom?: boolean;
        menu?: ContextMenuOptions<T>;
    }

    interface ScrollEvents<T2 = UIScrollView> extends BaseViewEvents<T2> {
        pulled?: (sender: T2) => void;
        didScroll?: (sender: T2) => void;
        willBeginDragging?: (sender: T2) => void;
        willEndDragging?:
            | ((sender: T2, velocity: JBPoint, target: JBPoint) => JBPoint)
            | ((sender: T2, velocity: JBPoint, target: JBPoint) => void);
        didEndDragging?: (sender: T2, decelerate: boolean) => void;
        willBeginDecelerating?: (sender: T2) => void;
        didEndDecelerating?: (sender: T2) => void;
        didEndScrollingAnimation?: (sender: T2) => void;
        didScrollToTop?: (sender: T2) => void;
    }

    interface ScrollOptions extends BaseViewOptions {
        type: "scroll";
        props: ScrollProps;
        layout?: (make: MASConstraintMaker, view: UIScrollView) => void;
        events?: ScrollEvents<UIScrollView>;
    }

    interface StackProps extends BaseViewProps {
        stack: { views: AllViewOptions[] };
        axis?: number; // $stackViewAxis
        distribution?: number; // $stackViewDistribution
        alignment?: number; // $stackViewAlignment
        spacing?: number; // $stackViewSpacing
        baselineRelative?: boolean;
        // BUG: The property name in the documentation is incorrect; it is not `isBaselineRelative`.
        layoutMarginsRelative?: boolean;
        // BUG: The property name in the documentation is incorrect; it is not `isLayoutMarginsRelative`.
        menu?: ContextMenuOptions<UIStackView>;
    }

    interface StackOptions extends BaseViewOptions {
        type: "stack";
        props: StackProps;
        layout?: (make: MASConstraintMaker, view: UIStackView) => void;
        events?: BaseViewEvents<UIStackView>;
    }

    interface TabProps extends BaseViewProps {
        items?: string[];
        index?: number;
        menu?: ContextMenuOptions<UITabView>;
    }

    interface TabEvents extends BaseViewEvents<UITabView> {
        changed?: (sender: UITabView) => void;
    }

    interface TabOptions extends BaseViewOptions {
        type: "tab";
        props: TabProps;
        layout?: (make: MASConstraintMaker, view: UITabView) => void;
        events?: TabEvents;
    }

    interface MenuProps extends BaseViewProps {
        items?: string[];
        index?: number;
        dynamicWidth?: boolean; // dynamic item width, default is false
        menu?: ContextMenuOptions<UIMenuView>;
    }

    interface MenuEvents extends BaseViewEvents<UIMenuView> {
        changed?: (sender: UIMenuView) => void;
    }

    interface MenuOptions extends BaseViewOptions {
        type: "menu";
        props: MenuProps;
        layout?: (make: MASConstraintMaker, view: UIMenuView) => void;
        events?: MenuEvents;
    }

    interface MapProps extends BaseViewProps {
        location: {
            lat: number;
            lng: number;
        };
        menu?: ContextMenuOptions<UIMapView>;
    }

    interface MapOptions extends BaseViewOptions {
        type: "map";
        props: MapProps;
        layout?: (make: MASConstraintMaker, view: UIMapView) => void;
        events?: BaseViewEvents<UIMapView>;
    }

    interface WebProps<T extends AllUIView = UIWebView> extends BaseViewProps {
        url?: string;
        request?: {
            url: string;
            method?: string;
            headers?: Record<string, string>;
            body?: NSData;
        };
        html?: string;
        text?: string;
        toolbar?: boolean;
        // loading?: boolean;
        // progress?: number;
        // canGoBack?: boolean;
        // canGoForward?: boolean;
        ua?: string;
        scrollEnabled?: boolean;
        bounces?: boolean;
        transparent?: boolean;
        showsProgress?: boolean;
        inlineMedia?: boolean;
        airPlay?: boolean;
        pictureInPicture?: boolean;
        allowsNavigation?: boolean;
        allowsLinkPreview?: boolean;
        script?: string | (() => void);
        style?: string;
        menu?: ContextMenuOptions<T>;
    }

    interface WebEvents<T2 = UIWebView> extends BaseViewEvents<T2> {
        didClose?: (sender: T2) => void;
        decideNavigation?: (sender: T2, action: WKNavigationAction) => boolean;
        didStart?: (sender: T2, navigation: WKNavigation) => void;
        didReceiveServerRedirect?: (sender: T2, navigation: WKNavigation) => void;
        didFinish?: (sender: T2, navigation: WKNavigation) => void;
        didFail?: (sender: T2, navigation: WKNavigation, error: NSError | null) => void;
        didSendRequest?: (request: { method: string; url: string; header: Record<string, string>; body: any }) => void;
        [customEvent: string]: ((...args: any[]) => void) | undefined;
    }

    interface WebOptions extends BaseViewOptions {
        type: "web";
        props: WebProps;
        layout?: (make: MASConstraintMaker, view: UIWebView) => void;
        events?: WebEvents<UIWebView>;
    }

    interface ListProps extends ScrollProps<UIListView> {
        style?: number; // 0 ~ 2
        data?: any;
        template?: {
            props?: BaseViewProps;
            views: AllViewOptions[];
        };
        separatorInset?: JBInsets;
        separatorHidden?: boolean;
        separatorColor?: UIColor;
        header?: AllViewOptions;
        footer?: AllViewOptions;
        rowHeight?: number;
        autoRowHeight?: boolean;
        estimatedRowHeight?: number;
        sectionTitleHeight?: number;
        selectable?: boolean;
        stickyHeader?: boolean;
        reorder?: boolean;
        crossSections?: boolean;
        // hasActiveAction?: boolean; // only readable
        actions?: {
            title: string;
            color?: UIColor;
            handler: (sender: UIListView, indexPath: NSIndexPath) => void;
        }[];
        menu?: ContextMenuOptions<UIListView>;
    }

    interface ListEvents extends ScrollEvents<UIListView> {
        swipeEnabled?: (sender: UIListView, indexPath: NSIndexPath) => boolean;
        rowHeight?: (sender: UIListView, indexPath: NSIndexPath) => number;
        sectionTitleHeight?: (sender: UIListView, section: number) => number;
        didSelect?: (sender: UIListView, indexPath: NSIndexPath, data: any) => void;
        didLongPress?: (sender: UIListView, indexPath: NSIndexPath, data: any) => void;
        forEachItem?: (sender: UIListView, indexPath: NSIndexPath) => void;
        reorderBegan?: (indexPath: NSIndexPath) => void;
        reorderMoved?: (from: NSIndexPath, to: NSIndexPath) => void;
        reorderFinished?: (data: any) => void;
        canMoveItem?: (sender: UIListView, indexPath: NSIndexPath) => boolean;
        didReachBottom?: (sender: UIListView) => void;
    }

    interface ListOptions extends BaseViewOptions {
        type: "list";
        props: ListProps;
        layout?: (make: MASConstraintMaker, view: UIListView) => void;
        events?: ListEvents;
    }

    interface MatrixProps extends ScrollProps<UIMatrixView> {
        data?: any[];
        template?: {
            props?: BaseViewProps;
            views: AllViewOptions[];
        };
        spacing?: number;
        itemSize?: JBSize;
        autoItemSize?: boolean;
        estimatedItemSize?: JBSize;
        columns?: number;
        itemHeight?: number;
        square?: boolean;
        direction?: number; // $scrollDirection
        selectable?: boolean;
        waterfall?: boolean;
        header?: AllViewOptions | ((sender: UIMatrixView) => AllViewOptions);
        footer?: AllViewOptions | ((sender: UIMatrixView) => AllViewOptions);
        // BUG: Although the header and footer can be loaded dynamically,
        // it seems meaningless, as them won't be reloaded when the matrix reloads.
        reorder?: boolean;
        menu?: ContextMenuOptions<UIMatrixView>;
    }

    interface MatrixEvents extends ScrollEvents<UIMatrixView> {
        didSelect?: (sender: UIMatrixView, indexPath: NSIndexPath, data: any) => void;
        didLongPress?: (sender: UIMatrixView, indexPath: NSIndexPath, data: any) => void;
        forEachItem?: (sender: UIMatrixView, indexPath: NSIndexPath) => void;
        highlighted?: (sender: UIMatrixView) => void;
        itemSize?: (sender: UIMatrixView, indexPath: NSIndexPath) => void;
        reorderBegan?: (indexPath: NSIndexPath) => void;
        reorderMoved?: (from: NSIndexPath, to: NSIndexPath) => void;
        reorderFinished?: (data: any) => void;
        canMoveItem?: (sender: UIMatrixView, indexPath: NSIndexPath) => boolean;
        didReachBottom?: (sender: UIMatrixView) => void;
    }

    interface MatrixOptions extends BaseViewOptions {
        type: "matrix";
        props: MatrixProps;
        layout?: (make: MASConstraintMaker, view: UIMatrixView) => void;
        events?: MatrixEvents;
    }

    interface BlurProps extends BaseViewProps {
        style?: number; // $blurStyle
        menu?: ContextMenuOptions<UIBlurView>;
    }

    interface BlurOptions extends BaseViewOptions {
        type: "blur";
        props: BlurProps;
        layout?: (make: MASConstraintMaker, view: UIBlurView) => void;
        events?: BaseViewEvents<UIBlurView>;
    }

    interface GradientProps extends BaseViewProps {
        colors: UIColor[];
        locations?: number[];
        startPoint?: JBPoint;
        endPoint?: JBPoint;
        menu?: ContextMenuOptions<UIGradientView>;
    }

    interface GradientOptions extends BaseViewOptions {
        type: "gradient";
        props: GradientProps;
        layout?: (make: MASConstraintMaker, view: UIGradientView) => void;
        events?: BaseViewEvents<UIGradientView>;
    }

    interface DatePickerProps extends BaseViewProps {
        date?: Date;
        min?: Date;
        max?: Date;
        mode?: number; // 0 ~ 4
        interval?: number;
        menu?: ContextMenuOptions<UIDatePickerView>;
    }

    interface DatePickerEvents extends BaseViewEvents<UIDatePickerView> {
        changed?: (sender: UIDatePickerView) => void;
    }

    interface DatePickerOptions extends BaseViewOptions {
        type: "date-picker";
        props: DatePickerProps;
        layout?: (make: MASConstraintMaker, view: UIDatePickerView) => void;
        events?: DatePickerEvents;
    }

    interface PickerProps extends BaseViewProps {
        items: any;
        menu?: ContextMenuOptions<UIPickerView>;
    }

    interface PickerEvents extends BaseViewEvents<UIPickerView> {
        changed?: (sender: UIPickerView) => void;
    }

    interface PickerOptions extends BaseViewOptions {
        type: "picker";
        props: PickerProps;
        layout?: (make: MASConstraintMaker, view: UIPickerView) => void;
        events?: PickerEvents;
    }

    interface CanvasProps extends BaseViewProps {
        menu?: ContextMenuOptions<UICanvasView>;
    }

    interface CanvasEvents extends BaseViewEvents<UICanvasView> {
        draw?: (view: UICanvasView, ctx: BBCanvasContext) => void;
    }

    interface CanvasOptions extends BaseViewOptions {
        type: "canvas";
        props: CanvasProps;
        layout?: (make: MASConstraintMaker, view: UICanvasView) => void;
        events?: CanvasEvents;
    }

    interface MarkdownProps extends BaseViewProps {
        content?: string;
        style?: string;
        scrollEnabled?: boolean;
        menu?: ContextMenuOptions<UIMarkdownView>;
    }

    interface MarkdownOptions extends BaseViewOptions {
        type: "markdown";
        props: MarkdownProps;
        layout?: (make: MASConstraintMaker, view: UIMarkdownView) => void;
        events?: BaseViewEvents<UIMarkdownView>;
    }

    interface LottieProps extends BaseViewProps {
        json?: any;
        data?: NSData;
        src?: string;
        // playing?: boolean; // only readable
        loop?: boolean;
        autoReverse?: boolean;
        progress?: number;
        frameIndex?: number;
        speed?: number;
        // duration?: number; // only readable
        menu?: ContextMenuOptions<UILottieView>;
    }

    interface LottieOptions extends BaseViewOptions {
        type: "lottie";
        props: LottieProps;
        layout?: (make: MASConstraintMaker, view: UILottieView) => void;
        events?: BaseViewEvents<UILottieView>;
    }

    interface ChartProps extends WebProps<UIChartView> {
        options?: any; // Please refer to the ECharts documentation.
        menu?: ContextMenuOptions<UIChartView>;
    }

    interface ChartEvents extends WebEvents<UIChartView> {
        rendered?: () => void;
        finished?: () => void;
    }

    interface ChartOptions extends BaseViewOptions {
        type: "chart";
        props: ChartProps;
        layout?: (make: MASConstraintMaker, view: UIChartView) => void;
        events?: ChartEvents;
    }

    interface CodeProps extends TextProps<UICodeView> {
        language?: string;
        theme?: string;
        darkKeyboard?: boolean;
        adjustInsets?: boolean;
        lineNumbers?: boolean;
        invisibles?: boolean;
        linePadding?: number;
        keys?: string[]; // customize toolbar keys and conflicts with the accessoryView property.
        menu?: ContextMenuOptions<UICodeView>;
    }

    interface CodeOptions extends BaseViewOptions {
        type: "code";
        props: CodeProps;
        layout?: (make: MASConstraintMaker, view: UICodeView) => void;
        events?: TextEvents<UICodeView>;
    }

    interface RuntimeProps extends BaseViewProps {
        view?: any; // view created by Runtime
    }

    interface RuntimeOptions extends BaseViewOptions {
        type: "runtime";
        props: RuntimeProps;
        layout?: (make: MASConstraintMaker, view: UIView) => void;
        events?: BaseViewEvents;
    }

    type AllViewOptions =
        | ViewOptions
        | LabelOptions
        | ButtonOptions
        | InputOptions
        | SliderOptions
        | SwitchOptions
        | SpinnerOptions
        | ProgressOptions
        | GalleryOptions
        | StepperOptions
        | TextOptions
        | ImageOptions
        | VideoOptions
        | ScrollOptions
        | StackOptions
        | TabOptions
        | MenuOptions
        | MapOptions
        | WebOptions
        | ListOptions
        | MatrixOptions
        | BlurOptions
        | GradientOptions
        | DatePickerOptions
        | PickerOptions
        | CanvasOptions
        | MarkdownOptions
        | LottieOptions
        | ChartOptions
        | CodeOptions
        | RuntimeOptions;

    type AllViewTypes =
        | "view"
        | "label"
        | "button"
        | "input"
        | "slider"
        | "switch"
        | "spinner"
        | "progress"
        | "gallery"
        | "stepper"
        | "text"
        | "image"
        | "video"
        | "scroll"
        | "stack"
        | "tab"
        | "menu"
        | "map"
        | "web"
        | "list"
        | "matrix"
        | "blur"
        | "gradient"
        | "date-picker"
        | "picker"
        | "canvas"
        | "markdown"
        | "lottie"
        | "chart"
        | "code"
        | "runtime";

    interface UIAnimationOptions {
        duration: number;
        delay?: number;
        damping?: number;
        velocity?: number;
        options?: number;
        animation?: () => void;
        completion?: () => void;
    }

    interface UIAlertOptions {
        title?: string;
        message?: string;
        actions?: {
            title: string;
            disabled?: boolean;
            style?: number;
            handler?: () => void;
        }[];
    }

    interface UIAlertNoHandlerOptions {
        title?: string;
        message?: string;
        actions?: {
            title: string;
            disabled?: boolean;
            style?: number;
        }[];
    }

    interface UIMenuOptions {
        items: string[];
        handler: (title: string, index: number) => void;
        finished?: (cancelled: boolean) => void;
    }

    interface UIPopoverSimpleOptions {
        sourceView: AllUIView;
        sourceRect?: JBRect; // sender.bounds by default
        directions?: number; // $popoverDirection.up by default
        size?: JBSize; // fits content by default
        items: string[];
        dismissed?: () => void;
    }

    interface UIPopoverOptions {
        sourceView: AllUIView;
        sourceRect?: JBRect; // sender.bounds by default
        directions?: number; // $popoverDirection.any by default
        size?: JBSize; // fits screen width by default
        views: AllViewOptions[];
        dismissed?: () => void;
    }
}

interface JBUi {
    render(
        options:
            | string
            | {
                  props?: UiTypes.RootViewPrefs;
                  views: UiTypes.AllViewOptions[];
                  events?: UiTypes.RootViewEvents;
              },
    ): void;
    push(
        options:
            | string
            | {
                  props?: UiTypes.RootViewPrefs;
                  views: UiTypes.AllViewOptions[];
                  events?: UiTypes.RootViewEvents;
              },
    ): void;
    animate(args: UiTypes.UIAnimationOptions): void;
    pop(): void;
    popToRoot(): void;
    get(id: string): AllUIView;
    alert(options: UiTypes.UIAlertNoHandlerOptions): Promise<{ title: string; index: number }>;
    alert(options: UiTypes.UIAlertOptions | string): void;
    action(options: UiTypes.UIAlertOptions | string): void;
    action(options: UiTypes.UIAlertNoHandlerOptions): Promise<{ title: string; index: number }>;
    menu(options: UiTypes.UIMenuOptions): void;
    menu(options: Omit<UiTypes.UIMenuOptions, "handler">): Promise<{ title: string; index: number }>;
    popover(options: UiTypes.UIPopoverSimpleOptions): Promise<{ title: string; index: number }>;
    popover(options: UiTypes.UIPopoverOptions): { dismiss: () => void };
    toast(message: string, time?: number): void;
    clearToast(): void;
    success(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    loading(flagOrMessage: boolean | string): void;
    progress(percent: number, message?: string): void;
    preview(options: { title: string; url?: string; html?: string; text?: string }): void;
    create(options: UiTypes.ViewOptions): UIView;
    create(options: UiTypes.LabelOptions): UILabelView;
    create(options: UiTypes.ButtonOptions): UIButtonView;
    create(options: UiTypes.InputOptions): UIInputView;
    create(options: UiTypes.SliderOptions): UISliderView;
    create(options: UiTypes.SwitchOptions): UISwitchView;
    create(options: UiTypes.SpinnerOptions): UISpinnerView;
    create(options: UiTypes.ProgressOptions): UIProgressView;
    create(options: UiTypes.GalleryOptions): UIGalleryView;
    create(options: UiTypes.StepperOptions): UIStepperView;
    create(options: UiTypes.TextOptions): UITextView;
    create(options: UiTypes.ImageOptions): UIImageView;
    create(options: UiTypes.VideoOptions): UIVideoView;
    create(options: UiTypes.ScrollOptions): UIScrollView;
    create(options: UiTypes.StackOptions): UIStackView;
    create(options: UiTypes.TabOptions): UITabView;
    create(options: UiTypes.MenuOptions): UIMenuView;
    create(options: UiTypes.MapOptions): UIMapView;
    create(options: UiTypes.WebOptions): UIWebView;
    create(options: UiTypes.ListOptions): UIListView;
    create(options: UiTypes.MatrixOptions): UIMatrixView;
    create(options: UiTypes.BlurOptions): UIBlurView;
    create(options: UiTypes.GradientOptions): UIGradientView;
    create(options: UiTypes.DatePickerOptions): UIDatePickerView;
    create(options: UiTypes.PickerOptions): UIPickerView;
    create(options: UiTypes.CanvasOptions): UICanvasView;
    create(options: UiTypes.MarkdownOptions): UIMarkdownView;
    create(options: UiTypes.LottieOptions): UILottieView;
    create(options: UiTypes.ChartOptions): UIChartView;
    create(options: UiTypes.CodeOptions): UICodeView;
    create(options: UiTypes.RuntimeOptions): AllUIView;
    window: UIView; // BUG: not match the documentation; it returns RootView instead of AppWindow.
    controller: BBRenderVC;
    title: string;
    selectIcon(): Promise<string>;
}

declare const $ui: JBUi;
