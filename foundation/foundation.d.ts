// Type definitions for Foundation 5.2.1
// Project: http://foundation.zurb.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface AbideOptions {
    live_validate?: boolean;
    focus_on_invalid?: boolean;
    error_labels?: boolean;
    timeout?: number;
    patterns?: Object;
    validators?: {
        equalTo?: () => boolean;
    };
}

interface AccordionOptions {
    active_class?: string;
    multi_expand?: boolean;
    toggleable?: boolean;
}

interface AlertOptions {
    callback?: () => void;
}

interface ClearingOptions {
    templates?: {
        viewing?: string;
    };
}

interface DropdownOptions {
    active_class?: string;
    align?: string;
    is_hover?: boolean;
    opened?: () => void;
    closed?: () => void;
}

interface EqualizerOptions {
    use_tallest?: boolean;
    before_height_change?: () => void;
    after_height_change?: () => void;
}

interface InterchangeOptions {
    load_attr?: string;
    named_queries?: Object;
    directives?: {
        replace?: (el: HTMLElement, path: string, trigger: (...args: any[]) => any) => any;
    };
}

interface JoyrideOptions {
    expose?: boolean;
    modal?: boolean;
    tip_location?: string;
    nub_position?: string;
    scroll_speed?: number;
    timer?: number;
    start_timer_on_click?: boolean;
    start_offset?: number;
    next_button?: boolean;
    tip_animation?: string;
    pause_after?: number[];
    exposed?: HTMLElement[];
    tip_animation_fade_speed?: number;
    cookie_monster?: boolean;
    cookie_name?: string;
    cookie_domain?: boolean;
    cookie_expires?: number;
    tip_container?: string;
    abort_on_close?: boolean;
    tip_location_patterns?: {
        top?: string[];
        bottom?: string[];
        left?: string[];
        right?: string[];
    };
    post_ride_callback?: () => void;
    post_step_callback?: () => void;
    pre_step_callback?: () => void;
    pre_ride_callback?: () => void;
    post_expose_callback?: () => void;
    template?: {
        link?: string;
        timer?: string;
        tip?: string;
        wrapper?: string;
        button?: string;
        modal?: string;
        expose?: string;
        expose_cover?: string;
    };
    expose_add_class?: string;
}

interface MagellanOptions {
    active_class?: string;
    threshold?: number;
    destination_threshold?: number;
    throttle_delay?: number;
}

interface OffCanvasOptions {}

interface OrbitOptions {
    animation?: string;
    timer_speed?: number;
    pause_on_hover?: boolean;
    resume_on_mouseout?: boolean;
    next_on_click?: boolean;
    animation_speed?: number;
    stack_on_small?: boolean;
    navigation_arrows?: boolean;
    slide_number?: boolean;
    slide_number_text?: string;
    container_class?: string;
    stack_on_small_class?: string;
    next_class?: string;
    prev_class?: string;
    timer_container_class?: string;
    timer_paused_class?: string;
    timer_progress_class?: string;
    slides_container_class?: string;
    preloader_class?: string;
    slide_selector?: string;
    bullets_container_class?: string;
    bullets_active_class?: string;
    slide_number_class?: string;
    caption_class?: string;
    active_slide_class?: string;
    orbit_transition_class?: string;
    bullets?: boolean;
    circular?: boolean;
    timer?: boolean;
    variable_height?: boolean;
    swipe?: boolean;
    before_slide_change?: () => void;
    after_slide_change?: () => void;
}

interface RevealOptions {
    animation?: string;
    animation_speed?: number;
    close_on_background_click?: boolean;
    close_on_esc?: boolean;
    dismiss_modal_class?: string;
    bg_class?: string;
    open?: () => void;
    opened?: () => void;
    close?: () => void;
    closed?: () => void;
    bg?: JQuery;
    css?: {
        open?: Object;
        close?: Object;
    };
}

interface SliderOptions {
    start?: number;
    end?: number;
    step?: number;
    initial?: number;
    display_selector?: string;
    on_change?: () => void;
}

interface TabOptions {
    active_class?: string;
    callback?: () => void;
    deep_linking?: boolean;
    scroll_to_content?: boolean;
}

interface TooltipOptions {
    additional_inheritable_classes?: string[];
    tooltip_class?: string;
    append_to?: string;
    touch_close_text?: string;
    disable_for_touch?: boolean;
    hover_delay?: number;
    tip_template?: (selector: string, content: string) => string;
}

interface TopbarOptions{
    index?: number;
    sticky_class?: string;
    custom_back_text?: boolean;
    back_text?: string;
    is_hover?: boolean;
    mobile_show_parent_link?: boolean;
    scrolltop?: boolean;
    sticky_on?: string;
}

interface FoundationOptions {
    abide?: AbideOptions;
    accordion?: AccordionOptions;
    alert?: AlertOptions;
    clearing?: ClearingOptions;
    dropdown?: DropdownOptions;
    interchange?: InterchangeOptions;
    joyride?: JoyrideOptions;
    magellan?: MagellanOptions;
    offcanvas: OffCanvasOptions;
    orbit?: OrbitOptions;
    reveal?: RevealOptions;
    tab?: TabOptions;
    tooltip?: TooltipOptions;
    topbar?: TopbarOptions;
}

interface FoundationStatic {
    name: string;
    version: string;
    media_queries: Object;
    stylesheet: CSSStyleSheet;
    global: {
        namespace: string;
    };
    init(scope: JQuery): JQuery;
    init(scope: JQuery, libraries: FoundationOptions): JQuery;
    init(scope: JQuery, libraries: string, method: FoundationOptions): JQuery;
    init(scope: JQuery, libraries: string, method: string, options: Object): JQuery;
    init_lib(lib: any, args: any): (...args: any[]) => any;
    patch(lib: any): void;
    inherit(scope: JQuery, methods: string): void;
    set_namespace(): void;
    libs: Object;
    utils: {
        S(selector: any, context: any): JQuery;
        throttle(func: (...args: any[]) => any, delay: number): (...args: any[]) => any;
        debounce(func: (...args: any[]) => any, delay: number, immediate: boolean): (...args: any[]) => any;
        data_options(el: JQuery): Object;
        register_media(media: string, media_class: string): void;
        add_custom_rule(rule: string, media: string): void;
        image_loaded(images: JQuery, callback: (...args: any[]) => any): void;
        random_str(length?: number): string;
    };
}

interface JQuery {
    foundation(): JQuery;
    foundation(libraries: FoundationOptions): JQuery;
    foundation(libraries: string, method: FoundationOptions): JQuery;
    foundation(libraries: string, method: string, options: Object): JQuery;
}

declare var Foundation: FoundationStatic;
