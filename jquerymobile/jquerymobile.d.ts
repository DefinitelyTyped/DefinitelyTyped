// Type definitions for jQuery Mobile 1.2
// Project: http://jquerymobile.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface JQueryMobileEvent { (event: Event, ui): void; }

interface DialogOptions {
    closeBtnText?: string;
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

interface JQueryMobileOptions {
    activeBtnClass?: string;
    activePageClass?: string;
    ajaxEnabled?: boolean;
    allowCrossDomainPages?: boolean;
    autoInitializePage?: boolean;
    buttonMarkup;
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
    transitionFallbacks;
}

interface JQueryMobileEvents {
    tap;
    taphold;
    swipe;
    swipeleft;
    swiperight;

    vmouseover;
    vmouseout;
    vmousedown;
    vmousemove;
    vmouseup;
    vclick;
    vmousecancel;

    orientationchange;
    scrollstart;
    scrollstop;

    pagebeforeload;
    pageload;
    pageloadfailed;
    pagebeforechange;
    pagechange;
    pagechangefailed;
    pagebeforeshow;
    pagebeforehide;
    pageshow;
    pagehide;
    pagebeforecreate;
    pagecreate;
    pageinit;
    pageremove;
    updatelayout;
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

interface JQueryMobile extends JQueryMobileOptions {

    changePage(to: any, options?: ChangePageOptions): void;
    initializePage(): void;
    loadPage(url: any, options?: LoadPageOptions): void;
    loading(command: string, options? ): void;

    base;
    silentScroll(yPos: number): void;
    activePage;

    options: JQueryMobileOptions;

    transitionFallbacks;
    showPageLoadingMsg();
    hidePageLoadingMsg();
    loader;
    page;

    touchOverflow;
    showCategory;
    path;

    dialog;
    popup;
    fixedtoolbar;
    button;
    collapsible;
    collapsibleset;
    textinput;
    slider;
    checkboxradio;
    selectmenu;
    listview;
}

interface JQuerySupport {
    touchOverflow;
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
    buttonMarkup(options: ButtonOptions): JQuery;
    button(events: ButtonEvents): JQuery;

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
}


interface JQueryStatic {
    mobile: JQueryMobile;
}
