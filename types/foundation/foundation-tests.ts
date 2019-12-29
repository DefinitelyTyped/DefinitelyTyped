function empty_callback() : void {}

function plugin_list() {
    return [
        "abide",
        "accordion",
        "alert",
        "clearing",
        "dropdown",
        "interchange",
        "joyride",
        "magellan",
        "offcanvas",
        "orbit",
        "reveal",
        "slider",
        "tab",
        "tooltip",
        "topbar"
     ];
}

function abide_patterns() {
    var patterns : Foundation.AbidePatterns = {};
    patterns.alpha = /^[a-zA-Z]+$/;
    patterns.alpha_numeric = /^[a-zA-Z0-9]+$/;
    patterns.integer = /^[-+]?\d+$/;
    patterns.number = /^[-+]?[1-9]\d*$/;
    patterns.card = /^[0-9]{8}$/;
    patterns.cvv = /^([0-9]){3,4}$/;
    patterns.email = /^test@example\.org$/;
    patterns.url = /http:\/\/www\.google\.com\//;
    patterns.domain = /definitelytyped\.org/;
    patterns.datetime = /([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))/;
    patterns.date = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
    patterns.time = /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}/;
    patterns.dateISO = /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/;
    patterns.month_day_year = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
    patterns.color = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    return patterns;
}

function abide_options() {
    var opts : Foundation.AbideOptions = {};
    opts.live_validate = false;
    opts.validate_on_blur = true;
    opts.focus_on_invalid = true;
    opts.error_labels = true;
    opts.timeout = 500;
    opts.patterns = abide_patterns();
    opts.validators = {
        diceRoll: function(el : HTMLInputElement, required : boolean, parent : HTMLElement) {
            var possibilities = [true, false];
            return possibilities[Math.round(Math.random())];
        },
        isAllowed: function(el : HTMLInputElement, required : boolean, parent : HTMLElement) {
            var possibilities = ["a@zurb.com", "b.zurb.com"];
            return possibilities.indexOf(el.value) > -1;
        }
    }
    return opts;
}

function accordion_options() {
    var opts : Foundation.AccordionOptions = {};
    opts.content_class = "content";
    opts.active_class = "class-name";
    opts.multi_expand = false;
    opts.toggleable = true;
    opts.callback = empty_callback;
    return opts;
}

function alert_options() {
    var opts : Foundation.AlertOptions = {};
    opts.callback = empty_callback;
    return opts;
}

function clearing_options() {
    var opts : Foundation.ClearingOptions = {};
    opts.templates = {
        viewing : '<div>Some HTML</div>'
    };
    opts.close_selectors = "#id-value, .class-name";
    opts.open_selectors = "li#id-value";
    opts.skip_selector = ".skip-class";
    opts.touch_label = "Display string";
    opts.init = true;
    opts.locked = false;
    return opts;
}

function dropdown_options() {
    var opts : Foundation.DropdownOptions = {};
    opts.active_class = "class-name";
    opts.disabled_class = "disabled-class";
    opts.mega_class = "big";
    opts.align = "top";
    opts.is_hover = false;
    opts.hover_timeout = 250;
    opts.opened = empty_callback;
    opts.closed = empty_callback;
    return opts;
}

function equalizer_options() {
    var opts : Foundation.EqualizerOptions = {};
    opts.use_tallest = true;
    opts.equalize_on_stack = false;
    return opts;
}

function interchange_options() {
    var opts : Foundation.InterchangeOptions = {};
    opts.load_attr = "interchange";
    opts.named_queries = {
        my_custom_query: "only screen and (max-width: 200px)"
    };
    opts.directives = {
        replace: empty_callback
    };
    return opts;
}

function joyride_options() {
    var opts : Foundation.JoyrideOptions = {};
    opts.expose = false;
    opts.modal = true;
    opts.keyboard = true;
    opts.tip_location = "bottom";
    opts.nub_position = "left";
    opts.scroll_speed = 2500;
    opts.scroll_animation = "lineaer";
    opts.timer = 100;
    opts.start_timer_on_click = true;
    opts.start_offset = 3;
    opts.next_button = false;
    opts.prev_button = false;
    opts.tip_animation = "pulse";
    opts.pause_after = [4, 7, 10, 14];
    opts.exposed = ["#elm-id-one", "#elm-id-two"];
    opts.tip_animation_fade_speed = 100;
    opts.cookie_monster = true;
    opts.cookie_name = "ts_joyride";
    opts.cookie_domain = false;
    opts.cookie_expires = 7;
    opts.tip_container = '#header';
    opts.tip_location_patterns = {
        top: ['botom'],
        bottom: [],
        left: ['right', 'top', 'bottom'],
        right: ['left', 'top', 'bottom']
    };
    opts.post_ride_callback = empty_callback;
    opts.post_step_callback = empty_callback;
    opts.pre_step_callback = empty_callback;
    opts.pre_ride_callback = empty_callback;
    opts.post_expose_callback = empty_callback;
    opts.template = {
        link: '<a href="#close" class="joyride-close-tip">&times;</a>',
        timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        wrapper: '<div class="joyride-content-wrapper"></div>',
        button: '<a href="#" class="small button joyride-next-tip"></a>',
        prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
        modal: '<div class="joyride-modal-bg"></div>',
        expose: '<div class="joyride-expose-wrapper"></div>',
        expose_cover: '<div class="joyride-expose-cover"></div>'
    };
    opts.expose_add_class = ".expose .class-name";
    return opts;
}

function magellan_options() {
    var opts : Foundation.MagellanOptions = {};
    opts.active_class = ".active-element";
    opts.threshold = 20;
    opts.destination_threshold = 30;
    opts.throttle_delay = 24;
    opts.fixed_top = 0;
    opts.offset_by_height = false;
    opts.duration = 1000;
    opts.easing = "linear";
    return opts;
}

function offcanvas_options() {
    var opts : Foundation.OffCanvasOptions = {};
    opts.open_method = "overlap_single";
    opts.close_on_click = true;
    return opts;
}

function orbit_options() {
    var opts : Foundation.OrbitOptions = {};
    opts.animation = 'slide';
    opts.timer_speed = 10000;
    opts.pause_on_hover = true;
    opts.resume_on_mouseout = false;
    opts.next_on_click = true;
    opts.animation_speed = 500;
    opts.stack_on_small = false;
    opts.navigation_arrows = true;
    opts.slide_number = true;
    opts.slide_number_text = 'of';
    opts.container_class = 'orbit-container';
    opts.stack_on_small_class = 'orbit-stack-on-small';
    opts.next_class = 'orbit-next';
    opts.prev_class = 'orbit-prev';
    opts.timer_container_class = 'orbit-timer';
    opts.timer_paused_class = 'paused';
    opts.timer_progress_class = 'orbit-progress';
    opts.slides_container_class = 'orbit-slides-container';
    opts.preloader_class = 'preloader';
    opts.slide_selector = 'li';
    opts.bullets_container_class = 'orbit-bullets';
    opts.bullets_active_class = 'active';
    opts.slide_number_class = 'orbit-slide-number';
    opts.caption_class = 'orbit-caption';
    opts.active_slide_class = 'active';
    opts.orbit_transition_class = 'orbit-transitioning';
    opts.bullets = true;
    opts.circular = true;
    opts.timer = true;
    opts.variable_height = false;
    opts.swipe = true;
    opts.before_slide_change = empty_callback;
    opts.after_slide_change = empty_callback;
    return opts;
}

function reveal_css_options() {
    var opts : Foundation.RevealCSSOptions = {};
    opts.opacity = 0;
    opts.visibility = 'hidden';
    opts.display = "inline-block";
    return opts;
}

function reveal_options() {
    var opts : Foundation.RevealOptions = {};
    opts.animation = "linear";
    opts.animation_speed = 500;
    opts.close_on_background_click = false;
    opts.dismiss_modal_class = ".modal-bye-bye";
    opts.multiple_opened = true;
    opts.bg_class = ".modal-background";
    opts.root_element = "#element-id.element-class";
    opts.on_ajax_error = empty_callback;
    opts.open = empty_callback;
    opts.opened = empty_callback;
    opts.close = empty_callback;
    opts.close = empty_callback;
    opts.bg = $("#my-modal-id .background");
    opts.css = {
        open: reveal_css_options(),
        close: reveal_css_options()
    };
    return opts;
}

function slider_options() {
    var opts : Foundation.SliderOptions = {};
    opts.start = -1000;
    opts.end = 1000;
    opts.step = 50;
    opts.precision = 4;
    opts.initial = 0;
    opts.vertical = false;
    opts.trigger_input_change = true;
    opts.on_change = empty_callback;
    return opts;
}

function tab_options() {
    var opts : Foundation.TabOptions = {};
    opts.active_class = "class-name";
    opts.callback = empty_callback;
    opts.deep_linking = false;
    opts.scroll_to_content = true;
    opts.is_hover = false;
    return opts;
}

function tooltip_options() {
    var opts : Foundation.TooltipOptions = {};
    opts.additional_inheritable_classes = ["class1", "class2"];
    opts.tooltip_class = "tooltip";
    opts.append_to = "append-class";
    opts.touch_close_text = "Close";
    opts.disable_for_touch = true;
    opts.hover_delay = 100;
    opts.show_on = "all";
    opts.tip_template = function (selector, content) {
        return '<span data-selector="' + selector + '" id="' + selector + '" class="' +
               Foundation.libs.tooltip.settings.tooltip_class.substring(1) +
               '" role="tooltip">' + content + '<span class="nub"></span></span>';
    };
    return opts;
}

function topbar_options() {
    var opts : Foundation.TopbarOptions = {};
    opts.index = 1;
    opts.sticky_class = "top-bar";
    opts.custom_back_text = true;
    opts.back_text = "Return";
    opts.is_hover = false;
    opts.mobile_show_parent_link = true;
    opts.scrolltop = true;
    opts.sticky_on = "all";
    return opts;
}

function foundation_options() {
    var opts : Foundation.Options = {};
    opts.abide = abide_options();
    opts.accordion = accordion_options();
    opts.alert = alert_options();
    opts.clearing = clearing_options();
    opts.dropdown = dropdown_options();
    opts.equalizer = equalizer_options();
    opts.joyride = joyride_options();
    opts.magellan = magellan_options();
    opts.offcanvas = offcanvas_options();
    opts.orbit = orbit_options();
    opts.reveal = reveal_options();
    opts.slider = slider_options();
    opts.tab = tab_options();
    opts.tooltip = tooltip_options();
    opts.topbar = topbar_options();
    return opts;
}

$(document).foundation();

$(document).foundation(foundation_options());

$(document).foundation("reflow");
plugin_list().forEach((plugin) => $(document).foundation(plugin, "reflow"));

$(document).foundation("slider", "set_value", 100);
