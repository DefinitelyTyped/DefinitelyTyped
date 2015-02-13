

interface Pages {
    setUserOS(): void;
    setUserAgent(): void;

    isVisibleXs(): boolean;
    isVisibleSm(): boolean;
    isVisibleMd(): boolean;
    isVisibleLg(): boolean;

    getUserAgent(): string;
    setFullScreen(): void;

    getColor(color: string, opacity: number): string;

    initDropdown(): void;
    initFormGroupDefault(): void;
    initSlidingTabs(): void;
    initNotificationCenter(): void;
    initProgressBars(): void;
    initView(): void;
    initTooltipPlugin(): void;
    initSelect2Plugin(): void;
    initScrollBarPlugin(): void;
    initListView(): void;
    initSwitcheryPlugin(): void;
    initSelectFxPlugin(): void;
    initUnveilPlugin(): void;
    initValidatorPlugin(): void;

    init(): void;
}

interface ProgressOptions {
    value?: number;
}

interface NotificationOptions {
    style?: string;
    message?: string;
    position?: string;
    type?: string;
    showClose?: boolean;
    timeout?: number;
    onShown?: () => void;
    onClosed?: () => void;
}
interface NotificationStatic {
    show(): void;
}

interface PortletOptions {
    progress?: string;
    progressColor?: string;
    refresh?: boolean;
    error?: string;
    overlayColor?: string;
    overlayOpacity?: number;
}
interface PortletStatic {
    collapse(): void;
    close(): void;
    maximize(): void;
    refresh(): void;
    error(): void;
}

interface QuickviewOptions {
    notes: string;
    alerts: string;
    chat: string;
    notesList: string;
    notesBody: string;
}

interface ParalaxSpeedOptions {
    coverPhoto: number;
    content: number;
}
interface ParalaxOptions {
    speed?: ParalaxSpeedOptions;
}
interface ParalaxStatic {
    animate(): void;
}

interface SidebarOptions {
    pageContainer?: string;
}
interface SidebarStatic {
    toggleSidebar(toggle?: string): void;
    togglePinSidebar(toggle?: string): void;
}

interface SearchOptions {
    searchField: string;
    closeButton: string;
    suggestions: string;
    brand: string;
}
interface SearchStatic {
    init(): void;
    keypress(e: Event): void;
    toggleOverlay(action: string, key: string): void;
}

interface JQuery {
    circularProgress(options?: ProgressOptions): JQuery;
    portlet(options?: PortletOptions): JQuery;
    quickview(options?: QuickviewOptions): JQuery;
    parallax(options?: ParalaxOptions): JQuery;
    sidebar(options?: SidebarOptions): JQuery;
    search(options?: SearchOptions): JQuery;
    pgNotification(options?: NotificationOptions): NotificationStatic;
}

interface JQueryStatic {
    Pages: Pages;
}

interface SelectFxOptions {
    newTab: boolean;
    stickyPlaceholder: boolean;
    onChange: (val: string) => boolean;
}
interface SelectFxStatic {
    options: SelectFxOptions;
    (element: JQuery): void;
}

declare var SelectFx: SelectFxStatic;
