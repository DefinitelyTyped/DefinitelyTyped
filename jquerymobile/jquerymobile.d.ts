// Type definitions for jQuery Mobile 1.2
// Project: http://jquerymobile.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface JQueryMobileEvent { (event: Event, ui: any): void; }

interface DialogOptions {
    closeBtn?: string;
    closeBtnText?: string;
    corners?: boolean;
    initSelector?: string;
    overlayTheme?: string;
}

interface DialogEvents {
    create?: JQueryMobileEvent;
}

interface PopupOptions {
    corners?: boolean;
    history?: boolean;
    initSelector?: string;
    overlayTheme?: string;
    positionTo?: string;
    shadow?: boolean;
    theme?: string;
    tolerance?: string;
    transition?: string;
}

interface PopupEvents {
    popupbeforeposition?: JQueryMobileEvent;
    popupafteropen?: JQueryMobileEvent;
    popupafterclose?: JQueryMobileEvent;
}

interface FixedToolbarOptions {
    visibleOnPageShow?: boolean;
    disablePageZoom?: boolean;
    transition?: string;
    fullscreen?: boolean;
    tapToggle?: boolean;
    tapToggleBlacklist?: string;
    hideDuringFocus?: string;
    updatePagePadding?: boolean;
    supportBlacklist?: Function;
    initSelector?: string;
}

interface FixedToolbarEvents {
    create?: JQueryMobileEvent;
}

interface ButtonOptions {
    corners?: boolean;
    icon?: string;
    iconpos?: string;
    iconshadow?: boolean;
    inline?: boolean;
    mini?: boolean;
    shadow?: boolean;
    theme?: string;
    initSelector?: string;
}

interface ButtonEvents {
    create?: JQueryMobileEvent;
}

interface CollapsibleOptions {
    collapsed?: boolean;
    collapseCueText?: string;
    collapsedIcon?: string;
    contentTheme?: string;
    expandCueText?: string;
    expandedIcon?: string;
    heading?: string;
    iconpos?: string;
    initSelector?: string;
    inset?: boolean;
    mini?: boolean;
    theme?: string;
}

interface CollapsibleEvents {
    create?: JQueryMobileEvent;
    collapse?: JQueryMobileEvent;
    expand?: JQueryMobileEvent;
}

interface CollapsibleSetOptions {
    collapsedIcon?: string;
    expandedIcon?: string;
    iconpos?: string;
    initSelector?: string;
    inset?: boolean;
    mini?: boolean;
    theme?: string;
}

interface CollapsibleSetEvents {
    create?: JQueryMobileEvent;
}

interface TextInputOptions {
    clearBtn?: boolean;
    clearBtnText?: string;
    disabled?: boolean;
    initSelector?: string;
    mini?: boolean;
    preventFocusZoom?: boolean;
    theme?: string;
}

interface TextInputEvents {
    create?: JQueryMobileEvent;
}

interface SearchInputOptions {
    clearSearchButtonText?: string;
    disabled?: boolean;
    initSelector?: string;
    mini?: boolean;
    theme?: string;
}

interface SliderOptions {
    disabled?: boolean;
    highlight?: boolean;
    initSelector?: string;
    mini?: boolean;
    theme?: string;
    trackTheme?: string;
}

interface SliderEvents {
    create?: JQueryMobileEvent;
    slidestart?: JQueryMobileEvent;
    slidestop?: JQueryMobileEvent;
}

interface CheckboxRadioOptions {
    mini?: boolean;
    theme?: string;
}

interface CheckboxRadioEvents {
    createp?: JQueryMobileEvent;
}

interface SelectMenuOptions {
    corners?: boolean;
    icon?: string;
    iconpos?: string;
    iconshadow?: boolean;
    initSelector?: string;
    inline?: boolean;
    mini?: boolean;
    nativeMenu?: boolean;
    overlayTheme?: string;
    preventFocusZoom?: boolean;
    shadow?: boolean;
    theme?: string;
}

interface SelectMenuEvents {
    create?: JQueryMobileEvent;
}

interface ListViewOptions {
    countTheme?: string;
    dividerTheme?: string;
    filter?: boolean;
    filterCallback?: Function;
    filterPlaceholder?: string;
    filterTheme?: string;
    headerTheme?: string;
    initSelector?: string;
    inset?: boolean;
    splitIcon?: string;
    splitTheme?: string;
    theme?: string;
}

interface ListViewEvents {
    create?: JQueryMobileEvent;
}

interface NavbarOptions {
    iconpos: string;
}

interface ControlgroupOptions {
    corners?: boolean;
    excludeInvisible?: boolean;
    mini?: boolean;
    shadow?: boolean;
    type?: string;
}

interface JQueryMobileOptions {
    activeBtnClass?: string;
    activePageClass?: string;
    ajaxEnabled?: boolean;
    allowCrossDomainPages?: boolean;
    autoInitializePage?: boolean;
    buttonMarkup: any;
    defaultDialogTransition?: string;
    defaultPageTransition?: string;
    getMaxScrollForTransition?: number;
    gradeA?: Function;
    hashListeningEnabled?: boolean;
    ignoreContentEnabled?: boolean;
    linkBindingEnabled?: boolean;
    loadingMessageTextVisible?: boolean;
    loadingMessageTheme?: string;
    maxTransitionWidth?: number;
    minScrollBack?: number;
    ns?: number;
    pageLoadErrorMessage?: string;
    pageLoadErrorMessageTheme?: string;
    phonegapNavigationEnabled?: boolean;
    pushStateEnabled?: boolean;
    subPageUrlKey?: string;
    touchOverflowEnabled?: boolean;
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
    allowSamePageTransition?: boolean;
    changeHash?: boolean;
    data?: any;
    dataUrl?: string;
    pageContainer?: JQuery;
    reloadPage?: boolean;
    reverse?: boolean;
    role?: string;
    showLoadMsg?: boolean;
    transition?: string;
    type?: string;
}

interface LoadPageOptions {
    data?: any;
    loadMsgDelay?: number;
    pageContainer?: JQuery;
    reloadPage?: boolean;
    role?: string;
    showLoadMsg?: boolean;
    type?: string;
}

interface LoaderOptions {
    theme?: string;
    textVisible?: boolean;
    html?: string;
    text?: string;
    textonly?: boolean;
}

interface JQueryMobile extends JQueryMobileOptions {

    version: string;

    changePage(to: any, options?: ChangePageOptions): void;
    initializePage(): void;
    loadPage(url: any, options?: LoadPageOptions): void;
    loading(command: string, options?: LoaderOptions): void;

    base: any;
    silentScroll(yPos: number): void;
    activePage: JQuery;

    options: JQueryMobileOptions;

    transitionFallbacks: any;
    showPageLoadingMsg(): void;
    hidePageLoadingMsg(): void;
    loader: any;
    page: any;

    touchOverflow: any;
    showCategory: any;
    path: any;

    dialog: any;
    popup: any;
    fixedtoolbar: any;
    button: any;
    collapsible: any;
    collapsibleset: any;
    textinput: any;
    slider: any;
    checkboxradio: any;
    selectmenu: any;
    listview: any;
    defaultHomeScroll: number;
}

interface JQuerySupport {
    touchOverflow: any;
}

interface JQuery {

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

    checkboxradio(): JQuery;
    checkboxradio(command: string): JQuery;
    checkboxradio(options: CheckboxRadioOptions): JQuery;
    checkboxradio(events: CheckboxRadioEvents): JQuery;

    selectmenu(): JQuery;
    selectmenu(command: string): JQuery;
    selectmenu(command: string, update: boolean): JQuery;
    selectmenu(options: CheckboxRadioOptions): JQuery;
    selectmenu(events: CheckboxRadioEvents): JQuery;

    listview(): JQuery;
    listview(command: string): JQuery;
    listview(options: ListViewOptions): JQuery;
    listview(events: ListViewEvents): JQuery;

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
