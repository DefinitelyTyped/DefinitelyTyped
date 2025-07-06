// UI Elements
interface AvailabilityViewerElement {
    context: {
        tzid: string;
    };
    navigate: {
        next: () => void;
        prev: () => void;
    };
    refresh: () => void;
    update: (options: AvailabilityViewerOptions) => void;
}

declare function AvailabilityViewer(
    options: AvailabilityViewerOptions,
): AvailabilityViewerElement;

interface AvailabilityViewerOptions {
    element_token: string;
    target_id: string;
    callback: AvailabilityViewerCallback;
    availability_query: AvailabilityQuery;
    config?: AvailabilityViewerConfig;
    demo?: boolean;
    data_center?: DataCenter;
    locale?: Locale;
    translations?: Translations;
    styles?: ElementStyle<AvailabilityViewerColors>;
    tzid?: Timezone;
}

interface AvailabilityViewerConfig {
    start_time?: string;
    end_time?: string;
    interval?: Interval;
    mode?: AvailabilityViewerMode;
    max_selection_count?: number | false;
    /** BUG: this is only disabled if property is undefined, false enables it */
    bounds_control?: boolean;
    allow_expansion?: boolean;
    slot_selection?: AvailabilityViewerSlotSelection;
    logs?: Logs;
    week_start_day?: WeekDay;
}

type AvailabilityViewerCallback = (
    action: AvailabilityViewerAction,
) => void;

interface AvailabilityViewerAction {
    notification: AvailabilityViewerNotification;
    slots?: Slot[];
}

type AvailabilityViewerNotification =
    | SlotSelected
    | SlotAdded
    | NoSlotsFound
    | NoVisibleSlots
    | VisibleSlots
    | QueryPeriodsEdited
    | DisplayedDatesChanged;

declare function Agenda(options: AgendaElementOptions): AgendaElement;

interface AgendaElement {
    refresh: () => void;
    update: (options: AgendaElementOptions) => void;
}

interface AgendaColors {
    calendars?: string[];
}

interface AgendaElementOptions {
    element_token: string;
    target_id: string;
    data_center?: DataCenter;
    styles?: ElementStyle<AgendaColors>;
    config?: AgendaConfig;
}

interface AgendaConfig {
    mode?: AgendaMode;
    logs?: Logs;
    locale?: Locale;
    translations?: Translations;
    demo?: boolean;
}

declare function DateTimePicker(
    options: DateTimePickerOptions,
): DateTimePickerElement;

interface DateTimePickerElement {
    refresh: () => void;
    update: (options: DateTimePickerOptions) => void;
}

interface DateTimePickerOptions {
    element_token: string;
    target_id: string;
    availability_query: AvailabilityQuery;
    data_center?: DataCenter;
    styles?: ElementStyle<DateTimePickerColors>;
    callback: DateTimePickerCallback;
    config?: DateTimePickerConfig;
    demo?: boolean;
    locale?: Locale;
    translations?: Translations;
    tzid?: string;
    sequence_title?: SequencedAvailability;
}

interface DateTimePickerConfig {
    slot_button_mode?: SlotButtonMode;
    mode?: DateTimePickerMode;
    logs?: Logs;
    tz_list?: Timezone[];
    selected_date?: string;
    display_slot_timezone?: boolean;
    month_view_mode?: DateTimePickerMonthViewMode;
    display_slot_navigation?: boolean;
}

interface DateTimePickerColors {
    button?: string;
    buttonActive?: string;
    buttonConfirm?: string;
    buttonHover?: string;
}

type DateTimePickerCallback = (action: DateTimePickerAction) => void;

interface DateTimePickerAction {
    notification: DateTimePickerNotification;
    slots?: Slot[];
}

type DateTimePickerNotification =
    | SlotSelected
    | DateSelected
    | NoSlotsFound;

interface AvailabilityRulesElement {
    refresh: () => void;
    update: (options: AvailabilityRulesOptions) => void;
}

declare function AvailabilityRules(
    options: AvailabilityRulesOptions,
): AvailabilityRulesElement;

interface AvailabilityRulesOptions {
    element_token: string;
    target_id: string;
    callback?: AvailabilityRulesCallback;
    availability_rule_id?: string;
    config?: AvailabilityRulesConfig;
    demo?: boolean;
    data_center?: DataCenter;
    locale?: Locale;
    translations?: Translations;
    styles?: ElementStyle<AvailabilityRulesColors>;
    tzid?: Timezone;
}

interface AvailabilityRulesConfig {
    start_time?: string;
    end_time?: string;
    duration?: Duration;
    logs?: Logs;
    week_start_day?: WeekDay;
    default_weekly_periods?: WeeklyPeriod;
    auto_create_rules?: boolean;
    keyboard_support?: string;
    tz_list?: Timezone[];
}

interface AvailabilityRulesColors {
    hairline?: string;
    primary?: string;
    available?: string;
    availableHover?: string;
    availableActive?: string;
    unavailable?: string;
    unavailableHover?: string;
    unavailableActive?: string;
}

type AvailabilityRulesCallback = (
    action: AvailabilityRulesAction,
) => void;

interface AvailabilityRulesAction {
    notification: AvailabilityRulesNotification;
    availability_rule?: AvailabilityRule;
}

type AvailabilityRulesNotification =
    | AvailabilityRuleSaved
    | AvailabilityRuleEdited
    | AvailabilityRuleNotFound;

declare function CalendarSync(
    options: CalendarSyncOptions,
): CalendarSyncElement;

interface CalendarSyncElement {
    refresh: () => void;
    update: (options: CalendarSyncOptions) => void;
}

interface CalendarSyncOptions {
    element_token: string;
    target_id: string;
    authorization: Authorization;
    authorization_url?: string;
    callback?: CalendarSyncCallback;
    config?: CalendarSyncConfig;
    demo?: boolean;
    data_center?: DataCenter;
    locale?: Locale;
    translations?: Translations;
    styles?: ElementStyle<CalendarSyncColors>;
    single_profile?: boolean;
}

interface CalendarSyncConfig {
    logs?: Logs;
    revoke_mode?: RevokeMode;
}

interface CalendarSyncColors {
    hairline?: string;
    primary?: string;
}

type CalendarSyncCallback = (action: CalendarSyncAction) => void;

interface CalendarSyncAction {
    notification: CalendarSyncNotification;
    userinfo?: Userinfo;
}

type CalendarSyncNotification = ProfileRevoked | ProfileRevokedPressed;

declare function SlotPicker(options: SlotPickerOptions): SlotPickerElement;

interface SlotPickerElement {
    refresh: () => void;
    update: (options: SlotPickerOptions) => void;
}

interface SlotPickerOptions {
    element_token: string;
    target_id: string;
    availability_query: AvailabilityQuery;
    callback: SlotPickerCallback;
    config?: SlotPickerConfig;
    confirm?: boolean;
    demo?: boolean;
    data_center?: DataCenter;
    locale?: Locale;
    tzid?: Timezone;
    translations?: Translations;
    styles?: ElementStyle;
}

interface SlotPickerConfig {
    logs?: Logs;
    mode?: SlotPickerMode;
}

type SlotPickerCallback = (action: SlotPickerAction) => void;

interface SlotPickerAction {
    notification: SlotPickerNotification;
}

type SlotPickerNotification = SlotSelected | NoSlotsFound;

interface SlotSelected {
    type: "slot_selected";
    slot: Slot;
    tzid?: string;
}

interface SlotAdded {
    type: "slot_added";
    slot: Slot;
}

interface NoSlotsFound {
    type: "no_slots_found";
    query?: AvailabilityQuery;
}

interface NoVisibleSlots {
    type: "no_visible_slots";
}

interface VisibleSlots {
    type: "visible_slots";
}

interface QueryPeriodsEdited {
    type: "query_periods_edited";
    query_periods: QueryPeriod[];
}

interface DisplayedDatesChanged {
    type: "displayed_dates_changed";
    firstDay: string;
    lastDay: string;
    hasNext: boolean;
    hasPrev: boolean;
}

interface DateSelected {
    type: "date_selected";
    date: string;
    tzid: string;
}

interface AvailabilityRuleSaved {
    type: "availability_rule_saved";
}

interface AvailabilityRuleEdited {
    type: "availability_rule_edited";
}

interface AvailabilityRuleNotFound {
    type: "availability_rule_not_found";
    message: string;
}

interface ProfileRevoked {
    type: "profile_revoked";
    profile: Profile;
}

interface ProfileRevokedPressed {
    type: "profile_revoke_pressed";
    profile: Profile;
}

// UI Elements customization
type Translations = {
    [L in Locale]?: {
        [C in UIElementContext]?: {
            [key: string]: string;
        };
    };
};

interface ElementStyle<T = unknown> {
    prefix?: string;
    colors?: T;
    padding?: string;
}

interface AvailabilityViewerColors {
    hairline?: string;
    primary?: string;
    available?: string;
    availableHover?: string;
    availableActive?: string;
    unavailable?: string;
    unavailableHover?: string;
    unavailableActive?: string;
}

// Cronofy API
interface AvailabilityQuery {
    participants: ParticipantsGroup[];
    required_duration: Duration;
    query_periods?: QueryPeriod[];
    response_format?: AvailabilityQueryResponseFormat;
    query_slots?: QuerySlot[];
    start_interval?: Duration;
    buffer?: Buffer;
    max_results?: number;
    include_member_statuses?: boolean;
    excluded_events?: Event[];
    /** @deprecated Alias for `query_periods`, recommended to use the latter. */
    available_periods?: QueryPeriod[];
}

interface SequencedAvailability {
    sequence_id: string;
    sequence_title: string;
    ordinal: number;
    participants: ParticipantsGroup[];
    required_duration: Duration;
    buffer?: ExtendedBuffer;
}

interface AvailabilityRule {
    availability_rule_id: string;
    tzid: Timezone;
    weekly_periods: WeeklyPeriod[];
    calendar_ids?: string[];
}

interface Duration {
    minutes?: number;
    hours?: number;
}

interface Buffer {
    before?: Duration;
    after?: Duration;
}

interface ExtendedBuffer {
    before?: {
        minimum?: Duration;
        maximum?: Duration;
    };
    after?: {
        minimum?: Duration;
        maximum?: Duration;
    };
}

interface ParticipantsGroup {
    required: "all" | number;
    members: Participant[];
}

interface Slot {
    start: string;
    end: string;
    participants: Participant[];
    available?: boolean;
}

interface Participant {
    sub: string;
    managed_availability?: boolean;
    available_periods?: QueryPeriod;
    calendar_ids?: string[];
    buffer?: Buffer;
    availability_constraints?: AvailabilityContraint[];
    only_managed_events?: boolean;
    ignore_tentative?: boolean;
    availability_rule_ids?: string[];
}

interface AvailabilityContraint {
    period: "day" | "week";
    limit: number;
    tags?: Tags;
    tzid?: string;
}

interface QuerySlot {
    start: string;
}

interface QueryPeriod {
    start: string;
    end: string;
}

interface WeeklyPeriod {
    day: WeekDay;
    start_time: string;
    end_time: string;
}

interface Authorization {
    redirect_uri: string;
    client_id: string;
    scope: string;
}

interface Userinfo {
    sub: string;
    email?: string;
    name?: string;
    zoneinfo?: Timezone;
    "cronofy.type": string;
    "cronofy.data": {
        authorization: {
            scope: string;
            status: string;
        };
        profiles: Profile[];
    };
}

interface Profile {
    provider_name: ProviderName;
    provider_service: ProviderService;
    profile_id: string;
    profile_name: string;
    profile_connected: boolean;
    profile_initial_sync_required: boolean;
    profile_relink_url?: string;
}

interface Tags {
    [context: string]: { value: string }[];
}

interface Event {
    event_id?: string;
    event_uid?: string;
}

// Values
type Timezone = string; // e.g. 'Europe/London' TODO - use a library for this
type WeekDay =
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";
type DataCenter = "au" | "ca" | "de" | "sg" | "uk" | "us";
type Interval = 15 | 30 | 60;
type AvailabilityViewerMode =
    | "confirm"
    | "no_confirm"
    | "multi_select"
    | "free_select";
type AvailabilityViewerSlotSelection = "available" | "unrestricted";
type SlotPickerMode = "confirm" | "no_confirm";
type Logs = "info" | "warn" | "error" | "none";
type Locale =
    | "ar"
    | "cs"
    | "cy"
    | "de"
    | "en"
    | "es"
    | "fr"
    | "fr-CA"
    | "he"
    | "it"
    | "ja"
    | "nl"
    | "pl"
    | "pt-BR"
    | "ru"
    | "sv"
    | "tr"
    | "zh-CN";
type UIElementContext =
    | "agenda"
    | "availability_rules"
    | "availability_viewer"
    | "calendar_sync"
    | "slot_picker";
type AvailabilityQueryResponseFormat =
    | "slots"
    | "periods"
    | "overlapping_slots";
type AgendaMode =
    | "default"
    | "only_managed"
    | "free_busy"
    | "free_busy_managed";
type SlotButtonMode = "summary" | "detailed";
type DateTimePickerMode = "confirm" | "no_confirm";
type DateTimePickerMonthViewMode = "overflow" | "minimal_overflow" | "single";
type RevokeMode = "trigger_and_callback" | "callback_only";
type ProviderName =
    | "apple"
    | "cronofy"
    | "exchange"
    | "google"
    | "live_connect";
type ProviderService =
    | "cronofy"
    | "exchange"
    | "google"
    | "gsuite"
    | "icloud"
    | "office365"
    | "outlook_com";

export {
    Agenda,
    AgendaColors,
    AgendaConfig,
    AgendaElement,
    AgendaElementOptions,
    AvailabilityQuery,
    AvailabilityRule,
    AvailabilityRules,
    AvailabilityRulesAction,
    AvailabilityRulesCallback,
    AvailabilityRulesConfig,
    AvailabilityRulesElement,
    AvailabilityRulesOptions,
    AvailabilityViewer,
    AvailabilityViewerAction,
    AvailabilityViewerCallback,
    AvailabilityViewerConfig,
    AvailabilityViewerElement,
    AvailabilityViewerOptions,
    CalendarSync,
    CalendarSyncAction,
    CalendarSyncCallback,
    CalendarSyncConfig,
    CalendarSyncElement,
    CalendarSyncOptions,
    DateTimePicker,
    DateTimePickerAction,
    DateTimePickerCallback,
    DateTimePickerColors,
    DateTimePickerConfig,
    DateTimePickerElement,
    DateTimePickerNotification,
    DateTimePickerOptions,
    SequencedAvailability,
    Slot,
    SlotPicker,
    SlotPickerAction,
    SlotPickerCallback,
    SlotPickerConfig,
    SlotPickerElement,
    SlotPickerOptions,
};
