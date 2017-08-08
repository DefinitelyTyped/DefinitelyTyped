// Type definitions for Foundation v5.5.1
// Project: http://foundation.zurb.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/// <reference types="jquery"/>

declare namespace Foundation {
    // http://foundation.zurb.com/docs/components/abide.html#optional-javascript-configuration
    interface AbidePatterns {
        alpha? : RegExp;
        alpha_numeric? : RegExp;
        integer? : RegExp;
        number? : RegExp;
        card? : RegExp;
        cvv? : RegExp;
        email? : RegExp;
        url? : RegExp;
        domain? : RegExp;
        datetime? : RegExp;
        date? : RegExp;
        time? : RegExp;
        dateISO? : RegExp;
        month_day_year? : RegExp;
        color? : RegExp;
    }

    interface AbideOptions {
        live_validate? : boolean;
        validate_on_blur? : boolean;
        focus_on_invalid? : boolean;
        error_labels? : boolean;
        timeout? : number;
        patterns? : AbidePatterns;
        validators? : Object;
    }

    // http://foundation.zurb.com/docs/components/accordion.html#optional-javascript-configuration
    interface AccordionOptions {
        content_class? : string;
        active_class? : string;
        multi_expand? : boolean;
        toggleable? : boolean;
        callback? : () => any;
    }

    // http://foundation.zurb.com/docs/components/alert_boxes.html
    interface AlertOptions {
        callback? : () => any;
    }

    // http://foundation.zurb.com/docs/components/clearing.html#optional-javascript-configuration
    interface ClearingOptions {
        templates? : Object;
        close_selectors? : string;
        open_selectors? : string;
        skip_selector? : string;
        touch_label? : string;
        init? : boolean;
        locked? : boolean;
    }

    // http://foundation.zurb.com/docs/components/dropdown.html#optional-javascript-configuration
    interface DropdownOptions {
        active_class? : string;
        disabled_class? : string;
        mega_class? : string;
        align? : string;
        is_hover? : boolean;
        hover_timeout? : number;
        opened? : () => any;
        closed? : () => any;
    }

    // http://foundation.zurb.com/docs/components/equalizer.html#optional-javascript-configuration
    interface EqualizerOptions {
        use_tallest? : boolean;
        equalize_on_stack? : boolean;
    }

    // http://foundation.zurb.com/docs/components/interchange.html#custom-named-queries
    interface InterchangeOptions {
        load_attr? : string;
        named_queries? : Object;
        directives? : Object;
    }

    // http://foundation.zurb.com/docs/components/joyride.html#optional-javascript-configuration
    interface JoyrideOptions {
        expose? : boolean;
        modal? : boolean;
        keyboard? : boolean;
        tip_location? : string;
        nub_position? : string;
        scroll_speed? : number;
        scroll_animation? : string;
        timer? : number;
        start_timer_on_click? : boolean;
        start_offset? : number;
        next_button? : boolean;
        prev_button? : boolean;
        tip_animation? : string;
        pause_after? : number[];
        exposed? : string[];
        tip_animation_fade_speed? : number;
        cookie_monster? : boolean;
        cookie_name? : string;
        cookie_domain? : boolean;
        cookie_expires? : number;
        tip_container? : string;
        tip_location_patterns? : {
            top? : string[];
            bottom? : string[];
            left? : string[];
            right? : string[];
        };
        post_ride_callback? : () => void;
        post_step_callback? : () => void;
        pre_step_callback? : () => void;
        pre_ride_callback? : () => void;
        post_expose_callback? : () => void;
        template? : {
            link? : string;
            timer? : string;
            tip? : string;
            wrapper? : string;
            button?: string;
            prev_button?: string;
            modal? : string;
            expose? : string;
            expose_cover? : string;
        };
        expose_add_class? : string;
    }

    // http://foundation.zurb.com/docs/components/magellan.html#js
    interface MagellanOptions {
        active_class? : string;
        threshold? : number;
        destination_threshold? : number;
        throttle_delay? : number;
        fixed_top? : number;
        offset_by_height? : boolean;
        duration? : number;
        easing? : string;
    }

    // http://foundation.zurb.com/docs/components/offcanvas.html#optional-javascript-configuration
    interface OffCanvasOptions {
        open_method? : string;
        close_on_click? : boolean;
    }

    // http://foundation.zurb.com/docs/components/orbit.html#advanced
    interface OrbitOptions {
        animation? : string;
        timer_speed? : number;
        pause_on_hover? : boolean;
        resume_on_mouseout? : boolean;
        next_on_click? : boolean;
        animation_speed? : number;
        stack_on_small? : boolean;
        navigation_arrows? : boolean;
        slide_number? : boolean;
        slide_number_text? : string;
        container_class? : string;
        stack_on_small_class? : string;
        next_class? : string;
        prev_class? : string;
        timer_container_class? : string;
        timer_paused_class? : string;
        timer_progress_class? : string;
        slides_container_class? : string;
        preloader_class? : string;
        slide_selector? : string;
        bullets_container_class? : string;
        bullets_active_class? : string;
        slide_number_class? : string;
        caption_class? : string;
        active_slide_class? : string;
        orbit_transition_class? : string;
        bullets? : boolean;
        circular? : boolean;
        timer? : boolean;
        variable_height? : boolean;
        swipe? : boolean;
        before_slide_change? : () => any;
        after_slide_change? : () => any;
    }

    // http://foundation.zurb.com/docs/components/reveal.html
    interface RevealCSSOptions {
        opacity? : number;
        visibility? : string;
        display? : string;
    }

    interface RevealOptions {
        animation? : string;
        animation_speed? : number;
        close_on_background_click? : boolean;
        dismiss_modal_class? : string;
        multiple_opened? : boolean;
        bg_class? : string;
        root_element? : string;
        on_ajax_error? : () => any;
        open? : () => any;
        opened? : () => any;
        close? : () => any;
        closed? : () => any;
        bg? : JQuery;
        css? : {
            open? : RevealCSSOptions;
            close? : RevealCSSOptions;
        };
    }

    // http://foundation.zurb.com/docs/components/range_slider.html
    interface SliderOptions {
        start? : number;
        end? : number;
        step? : number;
        precision? : number;
        initial? : number;
        vertical? : boolean;
        trigger_input_change? : boolean;
        on_change? : () => any;
    }

    // http://foundation.zurb.com/docs/components/tabs.html
    interface TabOptions {
        active_class? : string;
        callback? : () => any;
        deep_linking? : boolean;
        scroll_to_content? : boolean;
        is_hover? : boolean;
    }

    interface TooltipOptions {
        additional_inheritable_classes? : string[];
        tooltip_class? : string;
        append_to? : string;
        touch_close_text? : string;
        disable_for_touch? : boolean;
        hover_delay? : number;
        show_on? : string;
        tip_template? : (selector : string, content : string) => string;
    }

    interface TopbarOptions {
        index? : number;
        sticky_class? : string;
        custom_back_text? : boolean;
        back_text? : string;
        is_hover? : boolean;
        mobile_show_parent_link? : boolean;
        scrolltop? : boolean;
        sticky_on? : string;
    }

    interface Options {
        abide? : AbideOptions;
        accordion? : AccordionOptions;
        alert? : AlertOptions;
        clearing? : ClearingOptions;
        dropdown? : DropdownOptions;
        equalizer? : EqualizerOptions;
        interchange? : InterchangeOptions;
        joyride? : JoyrideOptions;
        magellan? : MagellanOptions;
        offcanvas? : OffCanvasOptions;
        orbit? : OrbitOptions;
        reveal? : RevealOptions;
        slider? : SliderOptions;
        tab? : TabOptions;
        tooltip? : TooltipOptions;
        topbar? : TopbarOptions;
    }

    interface FoundationStatic {
        name : string;
        version : string;
        media_queries : Object;
        stylesheet : CSSStyleSheet;
        global : {
            namespace : string;
        };
        init(scope : JQuery) : JQuery;
        init(scope : JQuery, libraries : Options) : JQuery;
        init(scope : JQuery, libraries : string, method : Options) : JQuery;
        init(scope : JQuery, libraries : string, method : string, options : Object) : JQuery;
        init_lib(lib : any, args : any) : (...args : any[]) => any;
        patch(lib : any) : void;
        inherit(scope : JQuery, methods : string) : void;
        set_namespace() : void;
        libs : any;
        utils : {
            S(selector : any, context : any) : JQuery;
            throttle(func : (...args : any[]) => any, delay : number) : (...args : any[]) => any;
            debounce(func : (...args : any[]) => any, delay : number, immediate : boolean) : (...args : any[]) => any;
            data_options(el : JQuery) : Object;
            register_media(media : string, media_class : string) : void;
            add_custom_rule(rule : string, media : string) : void;
            image_loaded(images : JQuery, callback : (...args : any[]) => any) : void;
            random_str(length? : number) : string;
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
    foundation() : JQuery;
    foundation(libraries : Foundation.Options | string) : JQuery;
    foundation(libraries : string, method : Foundation.Options | string) : JQuery;
    foundation(libraries : string, method : string, options : Object) : JQuery;
}

declare var Foundation : Foundation.FoundationStatic;
