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
    corners?: bool;
    history?: bool;
    initSelector?: string;
    overlayTheme?: string;
    positionTo?: string;
    shadow?: bool;
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
    visibleOnPageShow?: bool;
    disablePageZoom?: bool;
    transition?: string;
    fullscreen?: bool;
    tapToggle?: bool;
    tapToggleBlacklist?: string;
    hideDuringFocus?: string;
    updatePagePadding?: bool;
    supportBlacklist?: Function;
    initSelector?: string;
}

interface FixedToolbarEvents {
    create?: JQueryMobileEvent;
}

interface ButtonOptions {
    corners?: bool;
    icon?: string;
    iconpos?: string;
    iconshadow?: bool;
    inline?: bool;
    mini?: bool;
    shadow?: bool;
    theme?: string;
    initSelector?: string;
}

interface ButtonEvents {
    create?: JQueryMobileEvent;
}

interface CollapsibleOptions {
    collapsed?: bool;
    collapseCueText?: string;
    collapsedIcon?: string;
    contentTheme?: string;
    expandCueText?: string;
    expandedIcon?: string;
    heading?: string;
    iconpos?: string;
    initSelector?: string;
    inset?: bool;
    mini?: bool;
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
    inset?: bool;
    mini?: bool;
    theme?: string;
}

interface CollapsibleSetEvents {
    create?: JQueryMobileEvent;
}

interface TextInputOptions {
    disabled?: bool;
    initSelector?: string;
    mini?: bool;
    preventFocusZoom?: bool;
    theme?: string;
}

interface TextInputEvents {
    create?: JQueryMobileEvent;
}

interface SearchInputOptions {
    clearSearchButtonText?: string;
    disabled?: bool;
    initSelector?: string;
    mini?: bool;
    theme?: string;
}

interface SliderOptions {
    disabled?: bool;
    highlight?: bool;
    initSelector?: string;
    mini?: bool;
    theme?: string;
    trackTheme?: string;
}

interface SliderEvents {
    create?: JQueryMobileEvent;
    slidestart?: JQueryMobileEvent;
    slidestop?: JQueryMobileEvent;
}

interface CheckboxRadioOptions {
    mini?: bool;
    theme?: string;
}

interface CheckboxRadioEvents {
    createp?: JQueryMobileEvent;
}

interface SelectMenuOptions {
    corners?: bool;
    icon?: string;
    iconpos?: string;
    iconshadow?: bool;
    initSelector?: string;
    inline?: bool;
    mini?: bool;
    nativeMenu?: bool;
    overlayTheme?: string;
    preventFocusZoom?: bool;
    shadow?: bool;
    theme?: string;
}

interface SelectMenuEvents {
    create?: JQueryMobileEvent;
}

interface ListViewOptions {
    countTheme?: string;
    dividerTheme?: string;
    filter?: bool;
    filterCallback?: Function;
    filterPlaceholder?: string;
    filterTheme?: string;
    headerTheme?: string;
    initSelector?: string;
    inset?: bool;
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
    ajaxEnabled?: bool;
    allowCrossDomainPages?: bool;
    autoInitializePage?: bool;
    buttonMarkup;
    defaultDialogTransition?: string;
    defaultPageTransition?: string;
    getMaxScrollForTransition?: number;
    gradeA?: Function;
    hashListeningEnabled?: bool;
    ignoreContentEnabled?: bool;
    linkBindingEnabled?: bool;
    loadingMessageTextVisible?: bool;
    loadingMessageTheme?: string;
    maxTransitionWidth?: number;
    minScrollBack?: number;
    ns?: number;
    pageLoadErrorMessage?: string;
    pageLoadErrorMessageTheme?: string;
    phonegapNavigationEnabled?: bool;
    pushStateEnabled?: bool;
    subPageUrlKey?: string;
    touchOverflowEnabled?: bool;
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
    allowSamePageTransition?: bool;
    changeHash?: bool;
    data?: any;
    dataUrl?: string;
    pageContainer?: JQuery;
    reloadPage?: bool;
    reverse?: bool;
    role?: string;
    showLoadMsg?: bool;
    transition?: string;
    type?: string;
}

interface LoadPageOptions {
    data?: any;
    loadMsgDelay?: number;
    pageContainer?: JQuery;
    reloadPage?: bool;
    role?: string;
    showLoadMsg?: bool;
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
    loading;
    loadPage;
    page;

    silentScroll;
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
    selectmenu(command: string, update: bool): JQuery;
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
