/// <reference types="jquery"/>

declare namespace Foundation {
    // http://foundation.zurb.com/docs/components/abide.html#optional-javascript-configuration
    interface AbidePatterns {
        alpha?: RegExp | undefined;
        alpha_numeric?: RegExp | undefined;
        integer?: RegExp | undefined;
        number?: RegExp | undefined;
        card?: RegExp | undefined;
        cvv?: RegExp | undefined;
        email?: RegExp | undefined;
        url?: RegExp | undefined;
        domain?: RegExp | undefined;
        datetime?: RegExp | undefined;
        date?: RegExp | undefined;
        time?: RegExp | undefined;
        dateISO?: RegExp | undefined;
        month_day_year?: RegExp | undefined;
        color?: RegExp | undefined;
    }

    interface AbideOptions {
        live_validate?: boolean | undefined;
        validate_on_blur?: boolean | undefined;
        focus_on_invalid?: boolean | undefined;
        error_labels?: boolean | undefined;
        timeout?: number | undefined;
        patterns?: AbidePatterns | undefined;
        validators?: Object | undefined;
    }

    // http://foundation.zurb.com/docs/components/accordion.html#optional-javascript-configuration
    interface AccordionOptions {
        content_class?: string | undefined;
        active_class?: string | undefined;
        multi_expand?: boolean | undefined;
        toggleable?: boolean | undefined;
        callback?: (() => any) | undefined;
    }

    // http://foundation.zurb.com/docs/components/alert_boxes.html
    interface AlertOptions {
        callback?: (() => any) | undefined;
    }

    // http://foundation.zurb.com/docs/components/clearing.html#optional-javascript-configuration
    interface ClearingOptions {
        templates?: Object | undefined;
        close_selectors?: string | undefined;
        open_selectors?: string | undefined;
        skip_selector?: string | undefined;
        touch_label?: string | undefined;
        init?: boolean | undefined;
        locked?: boolean | undefined;
    }

    // http://foundation.zurb.com/docs/components/dropdown.html#optional-javascript-configuration
    interface DropdownOptions {
        active_class?: string | undefined;
        disabled_class?: string | undefined;
        mega_class?: string | undefined;
        align?: string | undefined;
        is_hover?: boolean | undefined;
        hover_timeout?: number | undefined;
        opened?: (() => any) | undefined;
        closed?: (() => any) | undefined;
    }

    // http://foundation.zurb.com/docs/components/equalizer.html#optional-javascript-configuration
    interface EqualizerOptions {
        use_tallest?: boolean | undefined;
        equalize_on_stack?: boolean | undefined;
    }

    // http://foundation.zurb.com/docs/components/interchange.html#custom-named-queries
    interface InterchangeOptions {
        load_attr?: string | undefined;
        named_queries?: Object | undefined;
        directives?: Object | undefined;
    }

    // http://foundation.zurb.com/docs/components/joyride.html#optional-javascript-configuration
    interface JoyrideOptions {
        expose?: boolean | undefined;
        modal?: boolean | undefined;
        keyboard?: boolean | undefined;
        tip_location?: string | undefined;
        nub_position?: string | undefined;
        scroll_speed?: number | undefined;
        scroll_animation?: string | undefined;
        timer?: number | undefined;
        start_timer_on_click?: boolean | undefined;
        start_offset?: number | undefined;
        next_button?: boolean | undefined;
        prev_button?: boolean | undefined;
        tip_animation?: string | undefined;
        pause_after?: number[] | undefined;
        exposed?: string[] | undefined;
        tip_animation_fade_speed?: number | undefined;
        cookie_monster?: boolean | undefined;
        cookie_name?: string | undefined;
        cookie_domain?: boolean | undefined;
        cookie_expires?: number | undefined;
        tip_container?: string | undefined;
        tip_location_patterns?: {
            top?: string[] | undefined;
            bottom?: string[] | undefined;
            left?: string[] | undefined;
            right?: string[] | undefined;
        } | undefined;
        post_ride_callback?: (() => void) | undefined;
        post_step_callback?: (() => void) | undefined;
        pre_step_callback?: (() => void) | undefined;
        pre_ride_callback?: (() => void) | undefined;
        post_expose_callback?: (() => void) | undefined;
        template?: {
            link?: string | undefined;
            timer?: string | undefined;
            tip?: string | undefined;
            wrapper?: string | undefined;
            button?: string | undefined;
            prev_button?: string | undefined;
            modal?: string | undefined;
            expose?: string | undefined;
            expose_cover?: string | undefined;
        } | undefined;
        expose_add_class?: string | undefined;
    }

    // http://foundation.zurb.com/docs/components/magellan.html#js
    interface MagellanOptions {
        active_class?: string | undefined;
        threshold?: number | undefined;
        destination_threshold?: number | undefined;
        throttle_delay?: number | undefined;
        fixed_top?: number | undefined;
        offset_by_height?: boolean | undefined;
        duration?: number | undefined;
        easing?: string | undefined;
    }

    // http://foundation.zurb.com/docs/components/offcanvas.html#optional-javascript-configuration
    interface OffCanvasOptions {
        open_method?: string | undefined;
        close_on_click?: boolean | undefined;
    }

    // http://foundation.zurb.com/docs/components/orbit.html#advanced
    interface OrbitOptions {
        animation?: string | undefined;
        timer_speed?: number | undefined;
        pause_on_hover?: boolean | undefined;
        resume_on_mouseout?: boolean | undefined;
        next_on_click?: boolean | undefined;
        animation_speed?: number | undefined;
        stack_on_small?: boolean | undefined;
        navigation_arrows?: boolean | undefined;
        slide_number?: boolean | undefined;
        slide_number_text?: string | undefined;
        container_class?: string | undefined;
        stack_on_small_class?: string | undefined;
        next_class?: string | undefined;
        prev_class?: string | undefined;
        timer_container_class?: string | undefined;
        timer_paused_class?: string | undefined;
        timer_progress_class?: string | undefined;
        slides_container_class?: string | undefined;
        preloader_class?: string | undefined;
        slide_selector?: string | undefined;
        bullets_container_class?: string | undefined;
        bullets_active_class?: string | undefined;
        slide_number_class?: string | undefined;
        caption_class?: string | undefined;
        active_slide_class?: string | undefined;
        orbit_transition_class?: string | undefined;
        bullets?: boolean | undefined;
        circular?: boolean | undefined;
        timer?: boolean | undefined;
        variable_height?: boolean | undefined;
        swipe?: boolean | undefined;
        before_slide_change?: (() => any) | undefined;
        after_slide_change?: (() => any) | undefined;
    }

    // http://foundation.zurb.com/docs/components/reveal.html
    interface RevealCSSOptions {
        opacity?: number | undefined;
        visibility?: string | undefined;
        display?: string | undefined;
    }

    interface RevealOptions {
        animation?: string | undefined;
        animation_speed?: number | undefined;
        close_on_background_click?: boolean | undefined;
        dismiss_modal_class?: string | undefined;
        multiple_opened?: boolean | undefined;
        bg_class?: string | undefined;
        root_element?: string | undefined;
        on_ajax_error?: (() => any) | undefined;
        open?: (() => any) | undefined;
        opened?: (() => any) | undefined;
        close?: (() => any) | undefined;
        closed?: (() => any) | undefined;
        bg?: JQuery | undefined;
        css?: {
            open?: RevealCSSOptions | undefined;
            close?: RevealCSSOptions | undefined;
        } | undefined;
    }

    // http://foundation.zurb.com/docs/components/range_slider.html
    interface SliderOptions {
        start?: number | undefined;
        end?: number | undefined;
        step?: number | undefined;
        precision?: number | undefined;
        initial?: number | undefined;
        vertical?: boolean | undefined;
        trigger_input_change?: boolean | undefined;
        on_change?: (() => any) | undefined;
    }

    // http://foundation.zurb.com/docs/components/tabs.html
    interface TabOptions {
        active_class?: string | undefined;
        callback?: (() => any) | undefined;
        deep_linking?: boolean | undefined;
        scroll_to_content?: boolean | undefined;
        is_hover?: boolean | undefined;
    }

    interface TooltipOptions {
        additional_inheritable_classes?: string[] | undefined;
        tooltip_class?: string | undefined;
        append_to?: string | undefined;
        touch_close_text?: string | undefined;
        disable_for_touch?: boolean | undefined;
        hover_delay?: number | undefined;
        show_on?: string | undefined;
        tip_template?: ((selector: string, content: string) => string) | undefined;
    }

    interface TopbarOptions {
        index?: number | undefined;
        sticky_class?: string | undefined;
        custom_back_text?: boolean | undefined;
        back_text?: string | undefined;
        is_hover?: boolean | undefined;
        mobile_show_parent_link?: boolean | undefined;
        scrolltop?: boolean | undefined;
        sticky_on?: string | undefined;
    }

    interface Options {
        abide?: AbideOptions | undefined;
        accordion?: AccordionOptions | undefined;
        alert?: AlertOptions | undefined;
        clearing?: ClearingOptions | undefined;
        dropdown?: DropdownOptions | undefined;
        equalizer?: EqualizerOptions | undefined;
        interchange?: InterchangeOptions | undefined;
        joyride?: JoyrideOptions | undefined;
        magellan?: MagellanOptions | undefined;
        offcanvas?: OffCanvasOptions | undefined;
        orbit?: OrbitOptions | undefined;
        reveal?: RevealOptions | undefined;
        slider?: SliderOptions | undefined;
        tab?: TabOptions | undefined;
        tooltip?: TooltipOptions | undefined;
        topbar?: TopbarOptions | undefined;
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
        init(scope: JQuery, libraries: Options): JQuery;
        init(scope: JQuery, libraries: string, method: Options): JQuery;
        init(scope: JQuery, libraries: string, method: string, options: Object): JQuery;
        init_lib(lib: any, args: any): (...args: any[]) => any;
        patch(lib: any): void;
        inherit(scope: JQuery, methods: string): void;
        set_namespace(): void;
        libs: any;
        utils: {
            S(selector: any, context: any): JQuery;
            throttle(func: (...args: any[]) => any, delay: number): (...args: any[]) => any;
            debounce(func: (...args: any[]) => any, delay: number, immediate: boolean): (...args: any[]) => any;
            data_options(el: JQuery): Object;
            register_media(media: string, media_class: string): void;
            add_custom_rule(rule: string, media: string): void;
            image_loaded(images: JQuery, callback: (...args: any[]) => any): void;
            random_str(length?: number): string;
            is_small_only(): boolean;
            is_small_up(): boolean;
            is_medium_only(): boolean;
            is_medium_up(): boolean;
            is_large_only(): boolean;
            is_large_up(): boolean;
            is_xlarge_only(): boolean;
            is_xlarge_up(): boolean;
            is_xxlarge_only(): boolean;
            is_xxlarge_up(): boolean;
        };
    }
}

interface JQuery {
    foundation(): JQuery;
    foundation(libraries: Foundation.Options | string): JQuery;
    foundation(libraries: string, method: Foundation.Options | string): JQuery;
    foundation(libraries: string, method: string, options: Object): JQuery;
}

declare var Foundation: Foundation.FoundationStatic;
