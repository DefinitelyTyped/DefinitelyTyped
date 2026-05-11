/// <reference types="jquery"/>

interface JQueryMobileEvent {
    (event: Event, ui: any): void;
}

interface DialogOptions {
    closeBtn?: string | undefined;
    closeBtnText?: string | undefined;
    corners?: boolean | undefined;
    initSelector?: string | undefined;
    overlayTheme?: string | undefined;
}

interface DialogEvents {
    create?: JQueryMobileEvent | undefined;
}

interface PopupOptions {
    corners?: boolean | undefined;
    history?: boolean | undefined;
    initSelector?: string | undefined;
    overlayTheme?: string | undefined;
    positionTo?: string | undefined;
    shadow?: boolean | undefined;
    theme?: string | undefined;
    tolerance?: string | undefined;
    transition?: string | undefined;
}

interface PopupEvents {
    popupbeforeposition?: JQueryMobileEvent | undefined;
    popupafteropen?: JQueryMobileEvent | undefined;
    popupafterclose?: JQueryMobileEvent | undefined;
}

interface FixedToolbarOptions {
    visibleOnPageShow?: boolean | undefined;
    disablePageZoom?: boolean | undefined;
    transition?: string | undefined;
    fullscreen?: boolean | undefined;
    tapToggle?: boolean | undefined;
    tapToggleBlacklist?: string | undefined;
    hideDuringFocus?: string | undefined;
    updatePagePadding?: boolean | undefined;
    supportBlacklist?: Function | undefined;
    initSelector?: string | undefined;
}

interface FixedToolbarEvents {
    create?: JQueryMobileEvent | undefined;
}

interface ButtonOptions {
    corners?: boolean | undefined;
    icon?: string | undefined;
    iconpos?: string | undefined;
    iconshadow?: boolean | undefined;
    inline?: boolean | undefined;
    mini?: boolean | undefined;
    shadow?: boolean | undefined;
    theme?: string | undefined;
    initSelector?: string | undefined;
}

interface ButtonEvents {
    create?: JQueryMobileEvent | undefined;
}

interface CollapsibleOptions {
    collapsed?: boolean | undefined;
    collapseCueText?: string | undefined;
    collapsedIcon?: string | undefined;
    contentTheme?: string | undefined;
    expandCueText?: string | undefined;
    expandedIcon?: string | undefined;
    heading?: string | undefined;
    iconpos?: string | undefined;
    initSelector?: string | undefined;
    inset?: boolean | undefined;
    mini?: boolean | undefined;
    theme?: string | undefined;
}

interface CollapsibleEvents {
    create?: JQueryMobileEvent | undefined;
    collapse?: JQueryMobileEvent | undefined;
    expand?: JQueryMobileEvent | undefined;
}

interface CollapsibleSetOptions {
    collapsedIcon?: string | undefined;
    expandedIcon?: string | undefined;
    iconpos?: string | undefined;
    initSelector?: string | undefined;
    inset?: boolean | undefined;
    mini?: boolean | undefined;
    theme?: string | undefined;
}

interface CollapsibleSetEvents {
    create?: JQueryMobileEvent | undefined;
}

interface TextInputOptions {
    clearBtn?: boolean | undefined;
    clearBtnText?: string | undefined;
    disabled?: boolean | undefined;
    initSelector?: string | undefined;
    mini?: boolean | undefined;
    preventFocusZoom?: boolean | undefined;
    theme?: string | undefined;
}

interface TextInputEvents {
    create?: JQueryMobileEvent | undefined;
}

interface SearchInputOptions {
    clearSearchButtonText?: string | undefined;
    disabled?: boolean | undefined;
    initSelector?: string | undefined;
    mini?: boolean | undefined;
    theme?: string | undefined;
}

interface SliderOptions {
    disabled?: boolean | undefined;
    highlight?: boolean | undefined;
    initSelector?: string | undefined;
    mini?: boolean | undefined;
    theme?: string | undefined;
    trackTheme?: string | undefined;
}

interface SliderEvents {
    create?: JQueryMobileEvent | undefined;
    slidestart?: JQueryMobileEvent | undefined;
    slidestop?: JQueryMobileEvent | undefined;
}

interface FlipswitchOptions {
    corners?: boolean | undefined;
    defaults?: boolean | undefined;
    disabled?: boolean | undefined;
    enhanced?: boolean | undefined;
    mini?: boolean | undefined;
    offText?: string | undefined;
    onText?: string | undefined;
    theme?: string | undefined;
    wrapperClass?: string | undefined;
}

interface CheckboxRadioOptions {
    mini?: boolean | undefined;
    theme?: string | undefined;
}

interface CheckboxRadioEvents {
    create?: JQueryMobileEvent | undefined;
}

interface SelectMenuOptions {
    corners?: boolean | undefined;
    icon?: string | undefined;
    iconpos?: string | undefined;
    iconshadow?: boolean | undefined;
    initSelector?: string | undefined;
    inline?: boolean | undefined;
    hidePlaceholderMenuItems: boolean;
    mini?: boolean | undefined;
    nativeMenu?: boolean | undefined;
    overlayTheme?: string | undefined;
    preventFocusZoom?: boolean | undefined;
    shadow?: boolean | undefined;
    theme?: string | undefined;
}

interface SelectMenuEvents {
    create?: JQueryMobileEvent | undefined;
}

interface ListViewOptions {
    autodividers?: boolean | undefined;
    autodividersSelector?: ((jq?: JQuery) => string) | undefined;
    countTheme?: string | undefined;
    defaults?: boolean | undefined;
    disabled?: boolean | undefined;
    dividerTheme?: string | undefined;
    filter?: boolean | undefined;
    filterCallback?: Function | undefined;
    filterPlaceholder?: string | undefined;
    filterTheme?: string | undefined;
    headerTheme?: string | undefined;
    initSelector?: string | undefined;
    inset?: boolean | undefined;
    splitIcon?: string | undefined;
    splitTheme?: string | undefined;
    theme?: string | undefined;
}

interface ListViewEvents {
    create?: JQueryMobileEvent | undefined;
}

interface FilterableOptions {
    children?: any;
    defaults?: boolean | undefined;
    disabled?: boolean | undefined;
    enhanced?: boolean | undefined;
    filterCallback?: { (index: number, searchValue?: string): boolean } | undefined;
    filterPlaceholder?: string | undefined;
    filterReveal?: boolean | undefined;
    filterTheme?: string | undefined;
    input: any;
}

interface NavbarOptions {
    iconpos: string;
}

interface ControlgroupOptions {
    corners?: boolean | undefined;
    excludeInvisible?: boolean | undefined;
    mini?: boolean | undefined;
    shadow?: boolean | undefined;
    type?: string | undefined;
}

interface JQueryMobileOptions {
    activeBtnClass?: string | undefined;
    activePageClass?: string | undefined;
    ajaxEnabled?: boolean | undefined;
    allowCrossDomainPages?: boolean | undefined;
    autoInitializePage?: boolean | undefined;
    buttonMarkup: any;
    defaultDialogTransition?: string | undefined;
    defaultPageTransition?: string | undefined;
    getMaxScrollForTransition?: number | undefined;
    gradeA?: Function | undefined;
    hashListeningEnabled?: boolean | undefined;
    ignoreContentEnabled?: boolean | undefined;
    linkBindingEnabled?: boolean | undefined;
    loadingMessageTextVisible?: boolean | undefined;
    loadingMessageTheme?: string | undefined;
    maxTransitionWidth?: number | undefined;
    minScrollBack?: number | undefined;
    ns?: number | undefined;
    pageLoadErrorMessage?: string | undefined;
    pageLoadErrorMessageTheme?: string | undefined;
    phonegapNavigationEnabled?: boolean | undefined;
    pushStateEnabled?: boolean | undefined;
    subPageUrlKey?: string | undefined;
    touchOverflowEnabled?: boolean | undefined;
    transitionFallbacks: any;
}

interface JQueryMobileEvents {
    tap: any;
    taphold: any;
    swipe: any;
    swipeleft: any;
    swiperight: any;

    vmouseover: any;
    vmouseout: any;
    vmousedown: any;
    vmousemove: any;
    vmouseup: any;
    vclick: any;
    vmousecancel: any;

    orientationchange: any;
    scrollstart: any;
    scrollstop: any;

    pagebeforeload: any;
    pageload: any;
    pageloadfailed: any;
    pagebeforechange: any;
    pagechange: any;
    pagechangefailed: any;
    pagebeforeshow: any;
    pagebeforehide: any;
    pageshow: any;
    pagehide: any;
    pagebeforecreate: any;
    pagecreate: any;
    pageinit: any;
    pageremove: any;
    updatelayout: any;
}

interface ChangePageOptions {
    allowSamePageTransition?: boolean | undefined;
    changeHash?: boolean | undefined;
    data?: any;
    dataUrl?: string | undefined;
    pageContainer?: JQuery | undefined;
    reloadPage?: boolean | undefined;
    reverse?: boolean | undefined;
    role?: string | undefined;
    showLoadMsg?: boolean | undefined;
    transition?: string | undefined;
    type?: string | undefined;
}

interface LoadPageOptions {
    data?: any;
    loadMsgDelay?: number | undefined;
    pageContainer?: JQuery | undefined;
    reloadPage?: boolean | undefined;
    role?: string | undefined;
    showLoadMsg?: boolean | undefined;
    type?: string | undefined;
}

interface LoaderOptions {
    theme?: string | undefined;
    textVisible?: boolean | undefined;
    html?: string | undefined;
    text?: string | undefined;
    textonly?: boolean | undefined;
}

interface JQueryMobilePath {
    get(url: string): string;
    getDocumentBase(asParsedObject?: boolean): any;
    getDocumentUrl(asParsedObject?: boolean): any;
    getLocation(): string;
    isAbsoluteUrl(url: string): boolean;
    isRelativeUrl(url: string): boolean;
    makeUrlAbsolute(relUrl: string, absUrl: string): string;
    parseLocation(): ParsedPath;
    parseUrl(url: string): ParsedPath;
}

interface ParsedPath {
    authority: string;
    directory: string;
    domain: string;
    doubleSlash: string;
    filename: string;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    hrefNoHash: string;
    hrefNoSearch: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    username: string;
}

interface JQueryMobile extends JQueryMobileOptions {
    version: string;

    changePage(to: any, options?: ChangePageOptions): void;
    initializePage(): void;
    loadPage(url: any, options?: LoadPageOptions): void;
    loading(): JQuery;
    loading(command: string, options?: LoaderOptions): JQuery;

    pageContainer: any;
    base: any;
    silentScroll(yPos: number): void;
    activePage: JQuery;

    options: JQueryMobileOptions;

    transitionFallbacks: any;
    loader: any;
    page: any;

    touchOverflow: any;
    showCategory: any;
    path: JQueryMobilePath;

    dialog: any;
    popup: any;
    fixedtoolbar: any;
    button: any;
    collapsible: any;
    collapsibleset: any;
    textinput: any;
    slider: any;
    flipswitch: any;
    checkboxradio: any;
    selectmenu: any;
    listview: any;
    filterable: any;
    defaultHomeScroll: number;
}

interface JQuerySupport {
    touchOverflow: any;
}

interface JQuery {
    enhanceWithin(): JQuery;

    dialog(): JQuery;
    dialog(command: string): JQuery;
    dialog(options: DialogOptions): JQuery;
    dialog(events: DialogEvents): JQuery;

    popup(): JQuery;
    popup(command: string): JQuery;
    popup(options: PopupOptions): JQuery;
    popup(command: string, options: PopupOptions): JQuery;
    popup(events: PopupEvents): JQuery;

    fixedtoolbar(): JQuery;
    fixedtoolbar(command: string): JQuery;
    fixedtoolbar(options: FixedToolbarOptions): JQuery;
    fixedtoolbar(events: FixedToolbarEvents): JQuery;

    button(): JQuery;
    button(command: string): JQuery;
    button(options?: ButtonOptions): JQuery;
    button(events: ButtonEvents): JQuery;

    buttonMarkup(options?: ButtonOptions): JQuery;

    collapsible(): JQuery;
    collapsible(command: string): JQuery;
    collapsible(options: CollapsibleOptions): JQuery;
    collapsible(events: CollapsibleEvents): JQuery;
    collapsibleSet(): JQuery;
    collapsibleSet(command: string): JQuery;
    collapsibleset(options: CollapsibleSetOptions): JQuery;
    collapsibleset(events: CollapsibleSetEvents): JQuery;

    textinput(): JQuery;
    textinput(command: string): JQuery;
    textinput(options: TextInputOptions): JQuery;
    textinput(events: TextInputEvents): JQuery;
    textinput(options: SearchInputOptions): JQuery;

    slider(): JQuery;
    slider(command: string): JQuery;
    slider(options: SliderOptions): JQuery;
    slider(events: SliderEvents): JQuery;

    flipswitch(): JQuery;
    flipswitch(command: string): JQuery;
    flipswitch(options: FlipswitchOptions): JQuery;

    checkboxradio(): JQuery;
    checkboxradio(command: string): JQuery;
    checkboxradio(options: CheckboxRadioOptions): JQuery;
    checkboxradio(events: CheckboxRadioEvents): JQuery;

    selectmenu(): JQuery;
    selectmenu(command: string): JQuery;
    selectmenu(command: string, update: boolean): JQuery;
    selectmenu(options: SelectMenuOptions): JQuery;
    selectmenu(events: SelectMenuEvents): JQuery;

    listview(): JQuery;
    listview(command: string): JQuery;
    listview(options: ListViewOptions): JQuery;
    listview(events: ListViewEvents): JQuery;

    filterable(): JQuery;
    filterable(command: string): JQuery;
    filterable(options: FilterableOptions): JQuery;

    navbar(options?: NavbarOptions): JQuery;

    table(): JQuery;
    table(command: string): JQuery;

    controlgroup(): JQuery;
    controlgroup(command: string): JQuery;
    controlgroup(options: ControlgroupOptions): JQuery;
}

interface JQueryStatic {
    mobile: JQueryMobile;
}
