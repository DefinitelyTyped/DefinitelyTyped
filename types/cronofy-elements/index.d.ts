// UI Elements
export interface AvailabilityViewerElement {
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

export function AvailabilityViewer(
    options: AvailabilityViewerOptions,
): AvailabilityViewerElement;

export interface AvailabilityViewerOptions {
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

export interface AvailabilityViewerConfig {
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

export type AvailabilityViewerCallback = (
    action: AvailabilityViewerAction,
) => void;

export interface AvailabilityViewerAction {
    notification: AvailabilityViewerNotification;
    slots?: Slot[];
}

export type AvailabilityViewerNotification =
    | SlotSelected
    | SlotAdded
    | NoSlotsFound
    | NoVisibleSlots
    | VisibleSlots
    | QueryPeriodsEdited
    | DisplayedDatesChanged;

export function Agenda(options: AgendaElementOptions): AgendaElement;

export interface AgendaElement {
    refresh: () => void;
    update: (options: AgendaElementOptions) => void;
}

export interface AgendaColors {
    calendars?: string[];
}

export interface AgendaElementOptions {
    element_token: string;
    target_id: string;
    data_center?: DataCenter;
    styles?: ElementStyle<AgendaColors>;
    config?: AgendaConfig;
}

export interface AgendaConfig {
    mode?: AgendaMode;
    logs?: Logs;
    locale?: Locale;
    translations?: Translations;
    demo?: boolean;
}

export function DateTimePicker(
    options: DateTimePickerOptions,
): DateTimePickerElement;

export interface DateTimePickerElement {
    refresh: () => void;
    update: (options: DateTimePickerOptions) => void;
}

export interface DateTimePickerOptions {
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

export interface DateTimePickerConfig {
    slot_button_mode?: SlotButtonMode;
    mode?: DateTimePickerMode;
    logs?: Logs;
    tz_list?: Timezone[];
    selected_date?: string;
    display_slot_timezone?: boolean;
    month_view_mode?: DateTimePickerMonthViewMode;
    display_slot_navigation?: boolean;
}

export interface DateTimePickerColors {
    button?: string;
    buttonActive?: string;
    buttonConfirm?: string;
    buttonHover?: string;
}

export type DateTimePickerCallback = (action: DateTimePickerAction) => void;

export interface DateTimePickerAction {
    notification: DateTimePickerNotification;
    slots?: Slot[];
}

export type DateTimePickerNotification =
    | SlotSelected
    | DateSelected
    | NoSlotsFound;

export interface AvailabilityRulesElement {
    refresh: () => void;
    update: (options: AvailabilityRulesOptions) => void;
}

export function AvailabilityRules(
    options: AvailabilityRulesOptions,
): AvailabilityRulesElement;

export interface AvailabilityRulesOptions {
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

export interface AvailabilityRulesConfig {
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

export interface AvailabilityRulesColors {
    hairline?: string;
    primary?: string;
    available?: string;
    availableHover?: string;
    availableActive?: string;
    unavailable?: string;
    unavailableHover?: string;
    unavailableActive?: string;
}

export type AvailabilityRulesCallback = (
    action: AvailabilityRulesAction,
) => void;

export interface AvailabilityRulesAction {
    notification: AvailabilityRulesNotification;
    availability_rule?: AvailabilityRule;
}

export type AvailabilityRulesNotification =
    | AvailabilityRuleSaved
    | AvailabilityRuleEdited
    | AvailabilityRuleNotFound;

export function CalendarSync(
    options: CalendarSyncOptions,
): CalendarSyncElement;

export interface CalendarSyncElement {
    refresh: () => void;
    update: (options: CalendarSyncOptions) => void;
}

export interface CalendarSyncOptions {
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

export interface CalendarSyncConfig {
    logs?: Logs;
    revoke_mode?: RevokeMode;
}

export interface CalendarSyncColors {
    hairline?: string;
    primary?: string;
}

export type CalendarSyncCallback = (action: CalendarSyncAction) => void;

export interface CalendarSyncAction {
    notification: CalendarSyncNotification;
    userinfo?: Userinfo;
}

export type CalendarSyncNotification = ProfileRevoked | ProfileRevokedPressed;

export function SlotPicker(options: SlotPickerOptions): SlotPickerElement;

export interface SlotPickerElement {
    refresh: () => void;
    update: (options: SlotPickerOptions) => void;
}

export interface SlotPickerOptions {
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

export interface SlotPickerConfig {
    logs?: Logs;
    mode?: SlotPickerMode;
}

export type SlotPickerCallback = (action: SlotPickerAction) => void;

export interface SlotPickerAction {
    notification: SlotPickerNotification;
}

export type SlotPickerNotification = SlotSelected | NoSlotsFound;

export interface SlotSelected {
    type: "slot_selected";
    slot: Slot;
    tzid?: string;
}

export interface SlotAdded {
    type: "slot_added";
    slot: Slot;
}

export interface NoSlotsFound {
    type: "no_slots_found";
    query?: AvailabilityQuery;
}

export interface NoVisibleSlots {
    type: "no_visible_slots";
}

export interface VisibleSlots {
    type: "visible_slots";
}

export interface QueryPeriodsEdited {
    type: "query_periods_edited";
    query_periods: QueryPeriod[];
}

export interface DisplayedDatesChanged {
    type: "displayed_dates_changed";
    firstDay: string;
    lastDay: string;
    hasNext: boolean;
    hasPrev: boolean;
}

export interface DateSelected {
    type: "date_selected";
    date: string;
    tzid: string;
}

export interface AvailabilityRuleSaved {
    type: "availability_rule_saved";
}

export interface AvailabilityRuleEdited {
    type: "availability_rule_edited";
}

export interface AvailabilityRuleNotFound {
    type: "availability_rule_not_found";
    message: string;
}

export interface ProfileRevoked {
    type: "profile_revoked";
    profile: Profile;
}

export interface ProfileRevokedPressed {
    type: "profile_revoke_pressed";
    profile: Profile;
}

// UI Elements customization
export type Translations = {
    [L in Locale]?: {
        [C in UIElementContext]?: {
            [key: string]: string;
        };
    };
};

export interface ElementStyle<T = unknown> {
    prefix?: string;
    colors?: T;
    padding?: string;
}

export interface AvailabilityViewerColors {
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
export interface AvailabilityQuery {
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

export interface SequencedAvailability {
    sequence_id: string;
    sequence_title: string;
    ordinal: number;
    participants: ParticipantsGroup[];
    required_duration: Duration;
    buffer?: ExtendedBuffer;
}

export interface AvailabilityRule {
    availability_rule_id: string;
    tzid: Timezone;
    weekly_periods: WeeklyPeriod[];
    calendar_ids?: string[];
}

export interface Duration {
    minutes?: number;
    hours?: number;
}

export interface Buffer {
    before?: Duration;
    after?: Duration;
}

export interface ExtendedBuffer {
    before?: {
        minimum?: Duration;
        maximum?: Duration;
    };
    after?: {
        minimum?: Duration;
        maximum?: Duration;
    };
}

export interface ParticipantsGroup {
    required: "all" | number;
    members: Participant[];
}

export interface Slot {
    start: string;
    end: string;
    participants: Participant[];
    available?: boolean;
}

export interface Participant {
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

export interface AvailabilityContraint {
    period: "day" | "week";
    limit: number;
    tags?: Tags;
    tzid?: string;
}

export interface QuerySlot {
    start: string;
}

export interface QueryPeriod {
    start: string;
    end: string;
}

export interface WeeklyPeriod {
    day: WeekDay;
    start_time: string;
    end_time: string;
}

export interface Authorization {
    redirect_uri: string;
    client_id: string;
    scope: string;
}

export interface Userinfo {
    sub: string;
    email?: string;
    name?: string;
    zoneinfo?: Timezone;
    "cronofy.export type": string;
    "cronofy.data": {
        authorization: {
            scope: string;
            status: string;
        };
        profiles: Profile[];
    };
}

export interface Profile {
    provider_name: ProviderName;
    provider_service: ProviderService;
    profile_id: string;
    profile_name: string;
    profile_connected: boolean;
    profile_initial_sync_required: boolean;
    profile_relink_url?: string;
}

export interface Tags {
    [context: string]: { value: string }[];
}

export interface Event {
    event_id?: string;
    event_uid?: string;
}

// Values
export type Timezone = string; // e.g. 'Europe/London' TODO - use a library for this
export type WeekDay =
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";
export type DataCenter = "au" | "ca" | "de" | "sg" | "uk" | "us";
export type Interval = 15 | 30 | 60;
export type AvailabilityViewerMode =
    | "confirm"
    | "no_confirm"
    | "multi_select"
    | "free_select";
export type AvailabilityViewerSlotSelection = "available" | "unrestricted";
export type SlotPickerMode = "confirm" | "no_confirm";
export type Logs = "info" | "warn" | "error" | "none";
export type Locale =
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
export type UIElementContext =
    | "agenda"
    | "availability_rules"
    | "availability_viewer"
    | "calendar_sync"
    | "slot_picker";
export type AvailabilityQueryResponseFormat =
    | "slots"
    | "periods"
    | "overlapping_slots";
export type AgendaMode =
    | "default"
    | "only_managed"
    | "free_busy"
    | "free_busy_managed";
export type SlotButtonMode = "summary" | "detailed";
export type DateTimePickerMode = "confirm" | "no_confirm";
export type DateTimePickerMonthViewMode = "overflow" | "minimal_overflow" | "single";
export type RevokeMode = "trigger_and_callback" | "callback_only";
export type ProviderName =
    | "apple"
    | "cronofy"
    | "exchange"
    | "google"
    | "live_connect";
export type ProviderService =
    | "cronofy"
    | "exchange"
    | "google"
    | "gsuite"
    | "icloud"
    | "office365"
    | "outlook_com";
