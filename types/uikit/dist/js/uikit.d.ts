type UIkitElement = object | HTMLElement | string;
type UIkitNodes = NodeList | HTMLCollection | UIkitNode;
type UIkitNode = Node;

export interface Plugin {
    (uikit: typeof UIkit): void;
    installed?: boolean;
}

export namespace UIkit {
    const util: object;
    const component: object;
    const data: string;
    const prefix: string;
    const options: object;
    const version: string;
    const mixin: object;
    const extend: object;
    const update: object;

    function use(plugin: Plugin): typeof UIkit;

    interface UIkitAccordionOptions {
        active?: number | undefined;
        animation?: boolean | undefined;
        collapsible?: boolean | undefined;
        content?: string | undefined;
        duration?: number | undefined;
        multiple?: boolean | undefined;
        targets?: string | undefined;
        toggle?: string | undefined;
        transition?: string | undefined;
        offset?: number | undefined;
    }

    interface UIkitAccordionElement {
        toggle(index: string | number | UIkitNode, animate: boolean): void;
    }

    type Accordion = (element: UIkitElement, options?: UIkitAccordionOptions) => UIkitAccordionElement;

    interface UIkitAlertOptions {
        animation?: boolean | string | undefined;
        duration?: number | undefined;
        'sel-close'?: string | undefined;
    }

    interface UIkitAlertElement {
        close(): void;
    }

    type Alert = (element: UIkitElement, options?: UIkitAlertOptions) => UIkitAlertElement;

    interface UIkitCoverOptions {
        automute?: boolean | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }

    type Cover = (element: UIkitElement, options?: UIkitCoverOptions) => void;

    interface UIkitDropOptions {
        toggle?: string | boolean | undefined;
        pos?: string | undefined;
        mode?: string | undefined;
        'delay-show'?: number | undefined;
        'delay-hide'?: number | undefined;
        display?: "dynamic" | "static" | undefined;
        boundary?: string | undefined;
        'boundary-align'?: boolean | undefined;
        flip?: boolean | string | undefined;
        offset?: number | undefined;
        animation?: string | undefined;
        duration?: number | undefined;
    }

    interface UIkitDropElement {
        show(): void;
        hide(delay?: boolean): void;
    }

    type Drop = (element: UIkitElement, options?: UIkitDropOptions) => UIkitDropElement;

    interface UIkitDropdownOptions {
        toggle?: string | boolean | undefined;
        pos?: string | undefined;
        mode?: string | undefined;
        'delay-show'?: number | undefined;
        'delay-hide'?: number | undefined;
        boundary?: string | undefined;
        'boundary-align'?: boolean | undefined;
        flip?: boolean | string | undefined;
        offset?: number | undefined;
        animation?: string | undefined;
        duration?: number | undefined;
    }

    interface UIkitDropdownElement {
        show(): void;
        hide(delay?: boolean): void;
    }

    type Dropdown = (element: UIkitElement, options?: UIkitDropdownOptions) => UIkitDropdownElement;

    interface UIkitFormOptions {
        target?: string | boolean | undefined;
    }

    type FormCustom = (element: UIkitElement, options?: UIkitFormOptions) => void;

    interface UIkitGridOptions {
        margin?: string | undefined;
        'first-column'?: string | undefined;
        masonry?: boolean | undefined;
        parallax?: number | undefined;
    }

    type Grid = (element: UIkitElement, options?: UIkitGridOptions) => void;

    interface UIkitHeightMatchOptions {
        target?: string | undefined;
        row?: boolean | undefined;
    }

    type HeightMatch = (element: UIkitElement, options?: UIkitHeightMatchOptions) => void;

    interface UIkitIconOptions {
        icon?: string | undefined;
        ratio?: number | undefined;
    }

    interface Icon {
        (element: UIkitElement, options?: UIkitIconOptions): {
            svg: Promise<any>;
        };
        add(name: string, svg: string): void;
        add(contents: { [key: string]: string }): void;
    }

    interface UIkitImageOptions {
        dataSrc?: string | undefined;
        dataSrcset?: string | boolean | undefined;
        sizes?: string | boolean | undefined;
        width?: string | boolean | undefined;
        height?: string | boolean | undefined;
        offsetTop?: string | undefined;
        offsetLeft?: string | number | undefined;
        target?: string | boolean | undefined;
    }

    type Img = (element: UIkitElement, options?: UIkitImageOptions) => void;

    interface UIkitLeaderOptions {
        fill?: string | undefined;
        media?: number | string | undefined;
    }

    type Leader = (element: UIkitElement, options?: UIkitLeaderOptions) => void;

    interface UIkitMarginOptions {
        margin?: string | undefined;
        'first-column'?: string | undefined;
    }

    type Margin = (element: UIkitElement, options?: UIkitMarginOptions) => void;

    interface UIkitModalOptions {
        'esc-close'?: boolean | undefined;
        'bg-close'?: boolean | undefined;
        stack?: boolean | undefined;
        container?: string | boolean | undefined;
        'cls-page'?: string | undefined;
        'cls-panel'?: string | undefined;
        'sel-close'?: string | undefined;
    }

    interface UIkitModalElement {
        show(): void;
        hide(): void;
    }

    interface Modal {
        (element: UIkitElement, options?: UIkitModalOptions): UIkitModalElement;
        alert(message: string, options?: UIkitModalOptions): Promise<void>;
        confirm(message: string, options?: UIkitModalOptions): Promise<void>;
        prompt(content: string, value: string, options?: UIkitModalOptions): Promise<string | null>;
        dialog(content: string, options?: UIkitModalOptions): Promise<void>;
        labels: {
            ok: string;
            cancel: string;
        };
    }

    interface UIkitNavOptions {
        targets?: string | undefined;
        toggle?: string | undefined;
        content?: string | undefined;
        collapsible?: boolean | undefined;
        multiple?: boolean | undefined;
        transition?: string | undefined;
        animation?: string | undefined;
        duration?: number | undefined;
    }

    interface UIkitNavElement {
        toggle(index: string | number | UIkitNode, animate: boolean): void;
    }

    type Nav = (element: UIkitElement, options?: UIkitNavOptions) => UIkitNavElement;

    interface UIkitNavbarOptions {
        align?: string | undefined;
        mode?: string | undefined;
        'delay-show'?: number | undefined;
        'delay-hide'?: number | undefined;
        boundary?: string | undefined;
        'boundary-align'?: boolean | undefined;
        offset?: number | undefined;
        dropbar?: boolean | undefined;
        'dropbar-mode'?: string | undefined;
        duration?: number | undefined;
    }

    type Navbar = (element: UIkitElement, options?: UIkitNavbarOptions) => void;

    interface UIkitOffcanvasOptions {
        mode?: string | undefined;
        flip?: boolean | undefined;
        overlay?: boolean | undefined;
        'esc-close'?: boolean | undefined;
        'bg-close'?: boolean | undefined;
        container?: string | boolean | undefined;
    }

    interface UIkitOffcanvasElement {
        show(): void;
        hide(): void;
    }

    type Offcanvas = (element: UIkitElement, options?: UIkitOffcanvasOptions) => UIkitOffcanvasElement;

    interface UIkitScrollOptions {
        offset?: number | undefined;
    }

    interface UIkitScrollElement {
        scrollTo(el: string | UIkitNode): void;
    }

    type Scroll = (element: UIkitElement, options?: UIkitScrollOptions) => UIkitScrollElement;

    interface UIkitScrollspyOptions {
        cls?: string | undefined;
        hidden?: boolean | undefined;
        'offset-top'?: number | undefined;
        'offset-left'?: number | undefined;
        repeat?: boolean | undefined;
        delay?: number | undefined;
    }

    interface UIkitScrollspyNavOptions {
        cls?: string | undefined;
        closest?: string | undefined;
        scroll?: boolean | undefined;
        overflow?: boolean | undefined;
        offset?: number | undefined;
    }

    type Scrollspy = (element: UIkitElement, options?: UIkitScrollspyOptions) => void;
    type ScrollspyNav = (element: UIkitElement, options?: UIkitScrollspyNavOptions) => void;

    interface UIkitStickyOptions {
        position?: "top" | "bottom" | undefined;
        start?: number | string | undefined;
        end?: boolean | number | string | undefined;
        offset?: number | string | undefined;
        'overflow-flip'?: boolean | undefined;
        animation?: string | boolean | undefined;
        'cls-active'?: string | undefined;
        'cls-inactive'?: string | undefined;
        'width-element'?: string | boolean | undefined;
        'show-on-up'?: boolean | undefined;
        media?: number | string | boolean | undefined;
        'target-offset'?: boolean | number | undefined;
    }

    type Sticky = (element: UIkitElement, options?: UIkitStickyOptions) => void;

    interface UIkitSvgOptions {
        src?: string | undefined;
        'stroke-animation'?: boolean | undefined;
    }

    type Svg = (
        element: UIkitElement,
        options?: UIkitSvgOptions,
    ) => {
        svg: Promise<any>;
    };

    interface UIkitSwitcherOptions {
        connect?: string | undefined;
        toggle?: string | undefined;
        itemNav?: string | undefined;
        active?: number | undefined;
        animation?: string | undefined;
        duration?: number | undefined;
        swiping?: boolean | undefined;
    }

    /**
     * An alias for `UIkitSwitcherOptions` to support backward compatibility.
     * @deprecated
     */
    type UIkitSwiterOptions = UIkitSwitcherOptions;

    interface UIkitSwitcherElement {
        show(index: string | number | UIkitNode): void;
    }

    type Switcher = (
        element: UIkitElement,
        options?: UIkitSwitcherOptions | UIkitSwiterOptions,
    ) => UIkitSwitcherElement;

    interface UIkitTabOptions {
        connect?: string | undefined;
        toggle?: string | undefined;
        active?: number | undefined;
        animation?: string | undefined;
        duration?: number | undefined;
        swiping?: boolean | undefined;
        media?: number | string | undefined;
    }

    interface UIkitTabElement {
        show(index: string | number | UIkitNode): void;
    }

    type Tab = (element: UIkitElement, options?: UIkitTabOptions) => UIkitTabElement;

    interface UIkitToggleOptions {
        target?: string | undefined;
        mode?: string | undefined;
        cls?: string | undefined;
        media?: number | string | undefined;
        animation?: string | undefined;
        duration?: number | undefined;
        queued?: boolean | undefined;
    }

    interface UIkitToggleElement {
        toggle(): void;
    }

    type Toggle = (element: UIkitElement, options?: UIkitToggleOptions) => UIkitToggleElement;

    interface UIkitVideoOptions {
        autoplay?: boolean | string | undefined;
        automute?: boolean | undefined;
    }

    type Video = (element: UIkitElement, options?: UIkitVideoOptions) => void;

    // Components

    interface UIkitCountdownOptions {
        date?: string | boolean | undefined;
    }

    interface UIkitCountdownElement {
        start(): void;
        stop(): void;
    }

    type Countdown = (element: UIkitElement, options?: UIkitCountdownOptions) => UIkitCountdownElement;

    interface UIkitFilterOptions {
        target?: string | undefined;
        selActive?: string | boolean | undefined;
        animation?: "slide" | "fade" | "delayed-fade" | false | undefined;
        duration?: number | undefined;
    }

    type Filter = (element: UIkitElement, options?: UIkitFilterOptions) => void;

    interface UIkitLightboxPanelOptions {
        animation?: string | undefined;
        autoplay?: boolean | undefined;
        'autoplay-interval'?: number | undefined;
        'pause-on-hover'?: boolean | undefined;
        'video-autoplay'?: boolean | undefined;
        index?: number | undefined;
        velocity?: number | undefined;
        preload?: number | undefined;
        items?: object[] | undefined;
        template?: string | undefined;
        'delay-controls'?: number | undefined;
        container?: string | undefined;
    }

    interface UIkitLightboxPanelElement {
        show(index: number): void;
        hide(): void;
        startAutoplay(): void;
        stopAutoplay(): void;
    }

    interface LightboxPanel {
        (optionsOrElement: UIkitLightboxPanelOptions | UIkitElement): UIkitLightboxPanelElement;
    }

    interface UIkitLightboxOptions {
        animation?: string | undefined;
        autoplay?: number | undefined;
        'autoplay-interval'?: number | undefined;
        'pause-on-hover'?: boolean | undefined;
        'video-autoplay'?: boolean | undefined;
        index?: string | undefined;
        toggle?: string | undefined;
    }

    interface UIkitLightboxElement {
        show(index: number): void;
        hide(): void;
    }

    type Lightbox = (element: UIkitElement, options?: UIkitLightboxOptions) => UIkitLightboxElement;
    interface UIkitNotificationOptions {
        message?: string | undefined;
        status?: 'primary' | 'success' | 'warning' | 'danger' | undefined;
        timeout?: number | undefined;
        group?: string | undefined;
        pos?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | undefined;
    }

    interface UIkitNotificationElement {
        close(immediate: boolean): void;
    }

    interface Notification {
        (options: UIkitNotificationOptions): UIkitNotificationElement;
        (message: string, optionsOrStatus?: UIkitNotificationOptions | string): UIkitNotificationElement;
    }

    interface UIkitParallaxOptions {
        easing?: number | undefined;
        target?: string | undefined;
        start?: number | string | undefined;
        end?: number |string | undefined;
        media?: number | string | undefined;
    }

    type Parallax = (element: UIkitElement, options?: UIkitParallaxOptions) => void;

    interface UIkitSliderOptions {
        autoplay?: boolean | undefined;
        'autoplay-interval'?: number | undefined;
        center?: boolean | undefined;
        draggable?: boolean | undefined;
        easing?: string | undefined;
        finite?: boolean | undefined;
        index?: number | undefined;
        'pause-on-hover'?: boolean | undefined;
        sets?: boolean | undefined;
        velocity?: number | undefined;
    }

    interface UIkitSliderElement {
        show(index: number): void;
        startAutoplay(): void;
        stopAutoplay(): void;
    }

    type Slider = (element: UIkitElement, options?: UIkitSliderOptions) => UIkitSliderElement;

    interface UIkitSlideshowOptions {
        animation?: string | undefined;
        autoplay?: boolean | undefined;
        'autoplay-interval'?: number | undefined;
        draggable?: boolean | undefined;
        easing?: string | undefined;
        finite?: boolean | undefined;
        'pause-on-hover'?: boolean | undefined;
        index?: number | undefined;
        velocity?: number | undefined;
        ratio?: string | number | undefined;
        'min-height'?: boolean | number | undefined;
        'max-height'?: boolean | number | undefined;
    }

    interface UIkitSlidershowElement {
        show(index: number): void;
        startAutoplay(): void;
        stopAutoplay(): void;
    }

    type Slidershow = (element: UIkitElement, options?: UIkitSlideshowOptions) => UIkitSlidershowElement;

    interface UIkitSortableOptions {
        group?: string | undefined;
        animation?: number | undefined;
        duration?: number | undefined;
        threshold?: number | undefined;
        'cls-item'?: string | undefined;
        'cls-placeholder'?: string | undefined;
        'cls-drag'?: string | undefined;
        'cls-drag-state'?: string | undefined;
        'cls-base'?: string | undefined;
        'cls-no-drag'?: string | undefined;
        'cls-empty'?: string | undefined;
        'cls-custom': string;
        handle?: string | undefined;
    }

    type Sortable = (element: UIkitElement, options?: UIkitSortableOptions) => void;

    interface UIkitTooltipOptions {
        title?: string | undefined;
        pos?: string | undefined;
        offset?: number | boolean | undefined;
        animation?: string | undefined;
        duration?: number | undefined;
        delay?: number | undefined;
        cls?: string | undefined;
        container?: string | undefined;
    }

    interface UIkitTooltipElement {
        show(): void;
        hide(): void;
    }

    type Tooltip = (element: UIkitElement, options?: UIkitTooltipOptions) => UIkitTooltipElement;

    interface UIkitUploadOptions {
        url?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        params?: object | undefined;
        allow?: string | boolean | undefined;
        mime?: string | boolean | undefined;
        concurrent?: number | undefined;
        type?: string | undefined;
        method?: string | undefined;
        'msg-invalid-mime'?: string | undefined;
        'msg-invalid-name'?: string | undefined;
        'cls-dragover'?: string | undefined;
        abort?: object | undefined;
        'before-all'?: object | undefined;
        'before-send'?: object | undefined;
        complete?: object | undefined;
        'complete-all'?: object | undefined;
        error?: object | undefined;
        load?: object | undefined;
        'load-end'?: object | undefined;
        'load-start'?: object | undefined;
        progress?: object | undefined;
        fail?: object | undefined;
    }

    type Upload = (element: UIkitElement, options?: UIkitUploadOptions) => void;

    // Core
    const accordion: Accordion;
    const alert: Alert;
    const cover: Cover;
    const drop: Drop;
    const dropdown: Dropdown;
    const formCustom: FormCustom;
    const grid: Grid;
    const heightMatch: HeightMatch;
    const icon: Icon;
    const image: Img;
    const leader: Leader;
    const margin: Margin;
    const modal: Modal;
    const nav: Nav;
    const navbar: Navbar;
    const offcanvas: Offcanvas;
    const scroll: Scroll;
    const scrollspy: Scrollspy;
    const scrollspyNav: ScrollspyNav;
    const sticky: Sticky;
    const svg: Svg;
    const switcher: Switcher;
    const tab: Tab;
    const toggle: Toggle;
    const video: Video;

    // Components
    const notification: Notification;
    const countdown: Countdown;
    const filter: Filter;
    const lightbox: Lightbox;
    const lightboxPanel: LightboxPanel;
    const parallax: Parallax;
    const slider: Slider;
    const slideshow: Slidershow;
    const sortable: Sortable;
    const tooltip: Tooltip;
    const upload: Upload;
}

export default UIkit;
