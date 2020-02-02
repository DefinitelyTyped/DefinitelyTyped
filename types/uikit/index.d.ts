// Type definitions for uikit 3.3.0
// Project: https://getuikit.com
// Definitions by: Giovanni Silva <https://github.com/giovannicandido>
//                 Ivo Senner <https://github.com/s0x>
//                 Weiyu Weng <https://github.com/pcdotfan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

declare module 'uikit' {
    type UIkitElement = object | HTMLElement | Array<UIkitElement>
    type UIkitNodes = NodeList | HTMLCollection | Array<UIkitNode>
    type UIkitNode = Node

    namespace UIkit {
        const util: object;
        const component: Function;
        const data: string;
        const prefix: string;
        const options: object;
        const version: string;
        const use: Function;
        const mixin: Function;
        const extend: Function;
        const update: Function;


        type UIkitAccordionOptions = {
            active?: number;
            animation?: boolean;
            collapsible?: boolean;
            content?: string;
            duration?: number;
            multiple?: boolean;
            targets?: string;
            toggle?: string;
            transition?: string;
        }

        interface UIkitAccordionElement {
            toggle(index: string | number | UIkitNode, animate: boolean): void;
        }

        type Accordion = (element: UIkitElement, options?: UIkitAccordionOptions) => UIkitAccordionElement;


        type UIkitAlertOptions = {
            animation?: boolean | string;
            duration?: number;
            'sel-close'?: string;
        }

        interface UIkitAlertElement {
            close(): void;
        }


        type Alert = (element: UIkitElement, options?: UIkitAlertOptions) => UIkitAlertElement;


        type UIkitCoverOptions = {
            automute?: boolean;
            width?: number;
            height?: number;
        }

        type Cover = (element: UIkitElement, options?: UIkitCoverOptions) => void;


        type UIkitDropOptions = {
            toggle?: string | boolean;
            pos?: string;
            mode?: string;
            'delay-show'?: number;
            'delay-hide'?: number;
            boundary?: string;
            'boundary-align'?: boolean;
            flip?: boolean | string;
            offset?: number;
            animation?: string;
            duration?: number;
        }

        interface UIkitDropElement {
            show(): void;
            hide(): void;
        }

        type Drop = (element: UIkitElement, options?: UIkitDropOptions) => UIkitDropElement;


        type UIkitDropdownOptions = {
            toggle?: string | boolean;
            pos?: string;
            mode?: string;
            'delay-show'?: number;
            'delay-hide'?: number;
            boundary?: string;
            'boundary-align'?: boolean;
            flip?: boolean | string;
            offset?: number;
            animation?: string;
            duration?: number;
        }

        interface UIkitDropdownElement {
            show(): void;
            hide(): void;
        }

        type Dropdown = (element: UIkitElement, options?: UIkitDropdownOptions) => UIkitDropdownElement;


        type UIkitFormOptions = {
            target?: string | boolean;
        }

        type FormCustom = (element: UIkitElement, options?: UIkitFormOptions) => void;


        type UIkitGridOptions = {
            margin?: string;
            'first-column'?: string;
            masonry?: boolean;
            parallax?: number;
        }

        type Grid = (element: UIkitElement, options?: UIkitGridOptions) => void;


        type UIkitHeightMatchOptions = {
            target?: string;
            row?: boolean;
        }

        type HeightMatch = (element: UIkitElement, options?: UIkitHeightMatchOptions) => void;


        type UIkitIconOptions = {
            icon?: string;
            ratio?: number;
        }

        type Icon = (element: UIkitElement, options?: UIkitIconOptions) => {
            svg: Promise<any>;
        };


        type UIkitImageOptions = {
            dataSrc?: string;
            dataSrcset?: string | boolean;
            sizes?: string | boolean;
            width?: string | boolean;
            height?: string | boolean;
            offsetTop?: string;
            offsetLeft?: string | number;
            target?: string | boolean;
        }

        type Img = (element: UIkitElement, options?: UIkitImageOptions) => void;


        type UIkitLeaderOptions = {
            fill?: string;
            media?: number | string;
        }

        type Leader = (element: UIkitElement, options?: UIkitLeaderOptions) => void;


        type UIkitMarginOptions = {
            margin?: string;
            'first-column'?: string;
        }

        type Margin = (element: UIkitElement, options?: UIkitMarginOptions) => void;


        type UIkitModalOptions = {
            'esc-close'?: boolean;
            'bg-close'?: boolean;
            stack?: boolean;
            container?: string | boolean;
            'cls-page'?: string;
            'cls-panel'?: string;
            'sel-close'?: string;
        }

        interface UIkitModalElement {
            show(): void;
            hide(): void;
        }

        interface Modal {
            (element: UIkitElement, options?: UIkitModalOptions): UIkitModalElement;
            alert(message: string, options?: UIkitModalOptions): Promise<void>;
            confirm(message: string, options?: UIkitModalOptions): Promise<void>;
            prompt(content: string, value: string, options?: UIkitModalOptions): Promise<void>;
            dialog(content: string, options?: UIkitModalOptions): Promise<void>;
            labels: {
                ok: string;
                cancel: string;
            };
        }


        type UIkitNavOptions = {
            targets?: string;
            toggle?: string;
            content?: string;
            collapsible?: boolean;
            multiple?: boolean;
            transition?: string;
            animation?: string;
            duration?: number;
        }

        interface UIkitNavElement {
            index: string | number | UIkitNode;
            animate: boolean;
        }

        type Nav = (element: UIkitElement, options?: UIkitNavOptions) => UIkitNavElement;


        type UIkitNavbarOptions = {
            align?: string;
            mode?: string;
            'delay-show'?: number;
            'delay-hide'?: number;
            boundary?: string;
            'boundary-align'?: boolean;
            offset?: number;
            dropbar?: boolean;
            'dropbar-mode'?: string;
            duration?: number;
        }

        type Navbar = (element: UIkitElement, options?: UIkitNavbarOptions) => void;


        type UIkitOffcanvasOptions = {
            mode?: string;
            flip?: boolean;
            overlay?: boolean;
            'esc-close'?: boolean;
            'bg-close'?: boolean;
            container?: string | boolean;
        }

        interface UIkitOffcanvasElement {
            show(): void;
            hide(): void;
        }

        type Offcanvas = (element: UIkitElement, options?: UIkitOffcanvasOptions) => UIkitOffcanvasElement;


        type UIkitScrollOptions = {
            duration?: number;
            offset?: number;
        }

        interface UIkitScrollElement {
            scrollTo(el: string | UIkitNode): void;
        }

        type Scroll = (element: UIkitElement, options?: UIkitScrollOptions) => UIkitScrollElement;


        type UIkitScrollspyOptions = {
            cls?: string;
            hidden?: boolean;
            'offset-top'?: number;
            'offset-left'?: number;
            repeat?: boolean;
            delay?: number;
        }

        type UIkitScrollspyNavOptions = {
            cls?: string;
            closest?: string;
            scroll?: boolean;
            overflow?: boolean;
            offset?: number;
        }

        type Scrollspy = (element: UIkitElement, options?: UIkitScrollspyOptions) => void;
        type ScrollspyNav = (element: UIkitElement, options?: UIkitScrollspyNavOptions) => void;


        type UIkitStickyOptions = {
            top?: number | string;
            bottom?: boolean | string;
            offset?: number | string;
            animation?: string | boolean;
            'cls-active'?: string;
            'cls-inactive'?: string;
            'width-element'?: string | boolean;
            'show-on-up'?: boolean;
            media?: number | string | boolean;
            'target-offset'?: boolean | number;
        }

        type Sticky = (element: UIkitElement, options?: UIkitStickyOptions) => void;


        type UIkitSvgOptions = {
            src?: string;
            'stroke-animation'?: boolean;
        }

        type Svg = (element: UIkitElement, options?: UIkitSvgOptions) => {
            svg: Promise<any>;
        };


        type UIkitSwiterOptions = {
            connect?: string;
            toggle?: string;
            active?: number;
            animation?: string;
            duration?: number;
            swiping?: boolean;
        }

        type UIkitSwitcherElement = {
            show(index: string | number | UIkitNode): void;
        }

        type Switcher = (element: UIkitElement, options?: UIkitSwiterOptions) => UIkitSwitcherElement;


        type UIkitTabOptions = {
            connect?: string;
            toggle?: string;
            active?: number;
            animation?: string;
            duration?: number;
            swiping?: boolean;
            media?: number | string;
        }

        type UIkitTabElement = {
            show(index: string | number | UIkitNode): void;
        }

        type Tab = (element: UIkitElement, options?: UIkitTabOptions) => UIkitTabElement;


        type UIkitToggleOptions = {
            target?: string;
            mode?: string;
            cls?: string;
            media?: number | string;
            animation?: string;
            duration?: number;
            queued?: boolean;
        }

        type UIkitToggleElement = {
            toggle(): void;
        }

        type Toggle = (element: UIkitElement, options?: UIkitToggleOptions) => UIkitToggleElement;


        type UIkitVideoOptions = {
            autoplay?: boolean | string;
            automute?: boolean;
        }

        type Video = (element: UIkitElement, options?: UIkitVideoOptions) => void;


        // Components


        type UIkitCountdownOptions = {
            date?: string | boolean;
        }

        interface UIkitCountdownElement {
            start(): void;
            stop(): void;
        }

        type Countdown = (element: UIkitElement, options?: UIkitCountdownOptions) => UIkitCountdownElement;


        type UIkitFilterOptions = {
            target?: string;
            selActive?: string | boolean;
        }

        type Filter = (element: UIkitElement, options?: UIkitFilterOptions) => void;


        type UIkitLightboxPanelOptions = {
            animation?: string;
            autoplay?: boolean;
            'autoplay-interval'?: number;
            'pause-on-hover'?: boolean;
            'video-autoplay'?: boolean;
            index?: number;
            velocity?: number;
            preload?: number;
            items?: Array<object>;
            template?: string;
            'delay-controls'?: number;
        }

        interface UIkitLightboxPanelElement {
            show(index: number): void;
            hide(): void;
            startAutoplay(): void;
            stopAutoplay(): void;
        }

        interface LightboxPanel {
            (options: UIkitLightboxPanelOptions): UIkitLightboxPanelElement;
            (element: UIkitElement): UIkitLightboxPanelElement;
        }


        type UIkitLightboxOptions = {
            animation?: string;
            autoplay?: number;
            'autoplay-interval'?: number;
            'pause-on-hover'?: boolean;
            'video-autoplay'?: boolean;
            index?: string;
            toggle?: string;
        }

        interface UIkitLightboxElement {
            show(index: number): void;
            hide(): void;
        }

        type Lightbox = (element: UIkitElement, options?: UIkitLightboxOptions) => UIkitLightboxElement;
        type UIkitNotificationOptions = {
            message?: string;
            status?: 'primary' | 'success' | 'warning' | 'danger';
            timeout?: number;
            group?: string;
            pos?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
        }

        interface UIkitNotificationElement {
            close(immediate: boolean): void;
        }

        interface Notification {
            (options: UIkitNotificationOptions): UIkitNotificationElement;
            (message: string, status?: string): UIkitNotificationElement;
            (message: string, options?: UIkitNotificationOptions): UIkitNotificationElement;
        }


        type UIkitParallaxOptions = {
            easing?: number;
            target?: string;
            viewport?: number;
            media?: number | string;
        }

        type Parallax = (element: UIkitElement, options?: UIkitParallaxOptions) => void;


        type UIkitSliderOptions = {
            autoplay?: boolean;
            'autoplay-interval'?: number;
            center?: boolean;
            draggable?: boolean;
            easing?: string;
            finite?: boolean;
            index?: number;
            'pause-on-hover'?: boolean;
            sets?: boolean;
            velocity?: number;
        }

        interface UIkitSliderElement {
            show(index: number): void;
            startAutoplay(): void;
            stopAutoplay(): void;
        }

        type Slider = (element: UIkitElement, options?: UIkitSliderOptions) => UIkitSliderElement;


        type UIkitSlideshowOptions = {
            animation?: string;
            autoplay?: boolean;
            'autoplay-interval'?: number;
            draggable?: boolean;
            easing?: string;
            finite?: boolean;
            'pause-on-hover'?: boolean;
            index?: number;
            velocity?: number;
            ratio?: string | number;
            'min-height'?: boolean | number;
            'max-height'?: boolean | number;
        }

        interface UIkitSlidershowElement {
            show(index: number): void;
            startAutoplay(): void;
            stopAutoplay(): void;
        }

        type Slidershow = (element: UIkitElement, options?: UIkitSlideshowOptions) => UIkitSlidershowElement;


        type UIkitSortableOptions = {
            group?: string;
            animation?: number;
            threshold?: number;
            'cls-item'?: string;
            'cls-placeholder'?: string;
            'cls-drag'?: string;
            'cls-drag-state'?: string;
            'cls-base'?: string;
            'cls-no-drag'?: string;
            'cls-empty'?: string;
            'cls-custom': string;
            handle?: string;
        }

        type Sortable = (element: UIkitElement, options?: UIkitSortableOptions) => void;


        type UIkitTooltipOptions = {
            title?: string;
            pos?: string;
            offset?: number | boolean;
            animation?: string;
            duration?: number;
            delay?: number;
            cls?: string;
        }

        type UIkitTooltipElement = {
            show(): void;
            hide(): void;
        }

        type Tooltip = (element: UIkitElement, options?: UIkitTooltipOptions) => UIkitTooltipElement;


        type UIkitUploadOptions = {
            url?: string;
            multiple?: boolean;
            name?: string;
            params?: object;
            allow?: string | boolean;
            mime?: string | boolean;
            concurrent?: number;
            type?: string;
            method?: string;
            'msg-invalid-mime'?: string;
            'msg-invalid-name'?: string;
            'cls-dragover'?: string;
            abort?: Function;
            'before-all'?: Function;
            'before-send'?: Function;
            complete?: Function;
            'complete-all'?: Function;
            error?: Function;
            load?: Function;
            'load-end'?: Function;
            'load-start'?: Function;
            progress?: Function;
            fail?: Function;
        }

        type Upload = (element: UIkitElement, options?: UIkitUploadOptions) => void;
    }

    export default UIkit
}

declare module 'uikit/dist/js/uikit-icons'