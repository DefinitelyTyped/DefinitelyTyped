declare namespace TL {
    export var Timeline: ITimeline;
    export interface ITimeline extends ITimelineEvents {
        new(containerId: string, data: string | ITimelineConfig): ITimeline;
        new(containerId: string, data: string | ITimelineConfig, options: ITimelineOptions): ITimeline;

        goToId: (id: string | number) => void;
        goTo: (n: number) => void;
        goToStart: () => void;
        goToEnd: () => void;
        goToPrev: () => void;
        goToNext: () => void;

        add: (event: ITimelineSlideData) => void;
        remove: (n: number) => void;
        removeId: (id: string | number) => void;

        getData: (n: number) => ITimelineSlideData;
        getDataById: (id: string | number) => ITimelineSlideData;

        getSlide: (n: number) => ITimelineSlide;
        getSlideById: (id: string | number) => ITimelineSlide;
        getCurrentSlide: () => ITimelineSlide;

        updateDisplay: () => void;

        setConfig: (config: ITimelineConfig) => void;

        showMessage: (msg: string) => void;

        zoomIn: () => void;
        zoomOut: () => void;
        setZoom: (level: number) => void;

        current_id: string;

        _getSlideIndex(id: string | number): number;
    }

    export interface ITimelineEvents {
        addEventListener(type: string, fn: () => void, context?: any): ITimelineEvents;
        hasEventListeners(type: string): boolean;
        removeEventListener(type: string, fn: () => void, context?: any): ITimelineEvents;
        fireEvent(type: string, data?: any): ITimelineEvents;

        on(type: string, fn: () => void, context?: any): ITimelineEvents;
        off(type: string, fn: () => void, context?: any): ITimelineEvents;
        fire(type: string, data?: any): ITimelineEvents;
    }

    export interface ITimelineSlide {
        data: ITimelineSlideData;
    }

    export interface ITimelineConfig {
        events: ITimelineSlideData[];
        title?: ITimelineSlideData | undefined;
        eras?: ITimelineEra[] | undefined;
        /*
         * Either human or cosmological. If no scale is specified, the default is human. The cosmological scale is
         * required to handle dates in the very distant past or future. (Before Tuesday, April 20th, 271,821 BCE
         * after Saturday, September 13 275,760 CE) For the cosmological scale, only the year is considered, but it's
         * OK to have a cosmological timeline with years between 271,821 BCE and 275,760 CE.
         */
        scale?: "human" | "cosmological" | undefined;
    }

    export interface ITimelineSlideData {
        /*
         * Required for events, but not for `title` slides.
         */
        start_date?: ITimelineDate | undefined;
        end_date?: ITimelineDate | undefined;
        /*
         * Not required, but recommended.
         */
        text?: ITimelineText | undefined;
        media?: ITimelineMedia | undefined;
        /*
         * If present, Timeline will organize events with the same value for group to be in the same row or adjacent
         * rows, separate from events in other groups. The common value for the group will be shown as a label at the
         * left edge of the navigation.
         */
        group?: string | undefined;
        /*
         * A string which will be used when Timeline displays the date for this. If used, override's display_date
         * values set on the start or end date for this event, which is useful if you want to control how the two
         * dates relate to each other.
         */
        display_date?: string | undefined;
        /*
         * A Javascript object. The object can have these properties:
         * url: the fully-qualified URL pointing to an image which will be used as the background
         * color: a CSS color, in hexadecimal (e.g. #0f9bd1) or a valid CSS color keyword.
         */
        background?: { url?: string | undefined; color?: string | undefined } | undefined;
        /*
         * Defaults to true, which means that Timeline will scan text fields and automatically add <a> tags so that
         * links and email addresses are "clickable." If set to false, you may still manually apply the tags in the
         * appropriate fields when you want links. Autolinking applies to the text field in a text object and the
         * caption and credit fields in a media object.
         */
        autolink?: boolean | undefined;
        /*
         * A string value which is unique among all slides in your timeline. If not specified, TimelineJS will
         * construct an ID based on the headline, but if you later edit your headline, the ID will change. Unique IDs
         * are used when the hash_bookmark option is used, and can also be used with the timeline.goToId() method to
         * programmatically move the timeline to a specific slide.
         */
        unique_id?: string | undefined;
    }

    /*
     * Era objects are JSON objects which are used to label a span of time on the timeline navigation component. In
     * structure, they are essentially very restricted "slide" objects.
     */
    export interface ITimelineEra {
        start_date: ITimelineDate;
        end_date: ITimelineDate;
        /*
         * Not required, but recommended.
         */
        text?: ITimelineText | undefined;
    }

    export interface ITimelineDate {
        /*
         * BCE years should be negative numbers.
         */
        year: number;
        /*
         * 1-12
         */
        month?: number | undefined;
        day?: number | undefined;
        /*
         * 0-23
         */
        hour?: number | undefined;
        /*
         * 0-59
         */
        minute?: number | undefined;
        /*
         * 0-59
         */
        second?: number | undefined;
        millisecond?: number | undefined;
        /*
         * A string for presenting the date. Useful if Timeline's date formatting doesn't fit your needs.
         */
        display_date?: string | undefined;
    }

    export interface ITimelineText {
        /*
         * HTML markup is OK. Blank is also OK.
         */
        headline?: string | undefined;
        /*
         * HTML markup is OK. Blank is also OK. Not used for era objects.
         */
        text?: string | undefined;
    }

    export interface ITimelineMedia {
        /*
         * In most cases, a URL (see https://timeline.knightlab.com/docs/media-types.html for complete details).
         */
        url: string;
        /*
         * HTML markup is OK.
         */
        caption?: string | undefined;
        /*
         * HTML markup is OK.
         */
        credit?: string | undefined;
        /*
         * A URL for an image to use in the timenav marker for this event. If omitted, Timeline will use an icon based
         * on the type of media. Not relevant for title slides, because they do not have a marker.
         */
        thumbnail?: string | undefined;
    }

    export interface ITimelineOptions {
        /*
         * Default: false
         * If true, copious console logging will be enabled.
         */
        debug?: boolean | undefined;
        /*
         * Default: this._el.container.offsetHeight
         * The height of the timeline.
         */
        height?: number | undefined;
        /*
         * Default: this._el.container.offsetWidth
         * The width of the timeline.
         */
        width?: number | undefined;
        /*
         * Default: false
         * If true, the class tl-timeline-embed is added to the outer Timeline container. Typically only used to support Timeline iframe embeds.
         */
        is_embed?: boolean | undefined;
        /*
         * Default: false
         * If set to true, TimelineJS will update the browser URL each time a slide advances, so that people can link directly to specific slides.
         */
        hash_bookmark?: boolean | undefined;
        /*
         * Default: white
         * RGB values to use for slide backgrounds. Specify as hex code, CSS named color, or a Javascript object with r, g, and b properties from 0-255.
         */
        default_bg_color?: string | undefined;
        /*
         * Default: 2
         * How many screen widths wide the timeline should be at first presentation.
         */
        scale_factor?: number | undefined;
        /*
         * The position in the zoom_sequence series used to scale the Timeline when it is first created. Takes precedence over scale_factor.
         */
        initial_zoom?: number | undefined;
        /*
         * Default: [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
         * Array of values for TimeNav zoom levels. Each value is a scale_factor, which means that at any given level, the full timeline would require that many screens to display all events.
         */
        zoom_sequence?: number[] | undefined;
        /*
         * Default: 'bottom'
         * Display the timeline nav on the top or bottom.
         */
        timenav_position?: "bottom" | "top" | undefined;
        /*
         * Default: 100
         * optimal distance (in pixels) between ticks on axis
         */
        optimal_tick_width?: number | undefined;
        /*
         * Default: 'tl-timeline
         * Removing the tl-timeline base class will disable all default stylesheets.
         */
        base_class?: string | undefined;
        /*
         * Default: 150
         * The height in pixels of the timeline nav. Takes precedence over timenav_height_percentage.
         */
        timenav_height?: number | undefined;
        /*
         * Default: 25
         * Specify the timeline nav height as a percentage of the screen instead of in pixels.
         */
        timenav_height_percentage?: number | undefined;
        /*
         * Default: 40
         * Specify the timeline nav height as a percentage of a mobile device screen.
         */
        timenav_mobile_height_percentage?: number | undefined;
        /*
         * Default: 150
         * The minimum timeline nav height (in pixels).
         */
        timenav_height_min?: number | undefined;
        /*
         * Default: 30
         * The minimum marker height (in pixels).
         */
        marker_height_min?: number | undefined;
        /*
         * Default: 100
         * The minimum marker witdh (in pixels).
         */
        marker_width_min?: number | undefined;
        /*
         * Default: 5
         * Top and bottom padding (in pixels) for markers.
         */
        marker_padding?: number | undefined;
        /*
         * Default: 0
         * The first slide to display when the timeline is loaded.
         */
        start_at_slide?: number | undefined;
        /*
         * Default: false
         * If true, loads timeline on last slide.
         */
        start_at_end?: boolean | undefined;
        /*
         * Default: 0
         */
        menubar_height?: number | undefined;
        /*
         * Default: false
         * Use declared suffix on dates earlier than 0.
         */
        use_bc?: boolean | undefined;
        /*
         * Default: 1000
         * Animation duration (in milliseconds).
         */
        duration?: number | undefined;
        /*
         * Default: TL.Ease.easeInOutQuint
         */
        ease?: (() => number) | undefined;
        /*
         * Default: true
         */
        dragging?: boolean | undefined;
        /*
         * Default: true
         */
        trackResize?: boolean | undefined;
        /*
         * Default: 100
         * Padding (in pixels) on the left and right of each slide.
         */
        slide_padding_lr?: number | undefined;
        /*
         * Default: '0%'
         */
        slide_default_fade?: string | undefined;
        /*
         * Default: 'en'
         */
        language?: string | undefined;
        /*
         * Default: null
         * Google Analytics ID.
         */
        ga_property_id?: any;
        /*
         * Default: ['back_to_start','nav_next','nav_previous','zoom_in','zoom_out']
         */
        track_events?: ("back_to_start" | "nav_next" | "nav_previous" | "zoom_in" | "zoom_out")[] | undefined;
        /*
         * Default: ''
         * Can be used to help Timeline load related resources such as CSS themes and language files. Rarely needs to be set.
         */
        script_path?: string | undefined;
    }
}
