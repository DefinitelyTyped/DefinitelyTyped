/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
    namespace Calendar {
        /**
         * Represents a calendar that the user owns or is subscribed to.
         */
        interface Calendar {
            createAllDayEvent(title: string, date: Base.Date): CalendarEvent;
            createAllDayEvent(title: string, startDate: Base.Date, endDate: Base.Date): CalendarEvent;
            createAllDayEvent(
                title: string,
                startDate: Base.Date,
                endDate: Base.Date,
                options: { [key: string]: any },
            ): CalendarEvent;
            createAllDayEvent(title: string, date: Base.Date, options: { [key: string]: any }): CalendarEvent;
            createAllDayEventSeries(
                title: string,
                startDate: Base.Date,
                recurrence: EventRecurrence,
            ): CalendarEventSeries;
            createAllDayEventSeries(
                title: string,
                startDate: Base.Date,
                recurrence: EventRecurrence,
                options: { [key: string]: any },
            ): CalendarEventSeries;
            createEvent(title: string, startTime: Base.Date, endTime: Base.Date): CalendarEvent;
            createEvent(
                title: string,
                startTime: Base.Date,
                endTime: Base.Date,
                options: { [key: string]: any },
            ): CalendarEvent;
            createEventFromDescription(description: string): CalendarEvent;
            createEventSeries(
                title: string,
                startTime: Base.Date,
                endTime: Base.Date,
                recurrence: EventRecurrence,
            ): CalendarEventSeries;
            createEventSeries(
                title: string,
                startTime: Base.Date,
                endTime: Base.Date,
                recurrence: EventRecurrence,
                options: { [key: string]: any },
            ): CalendarEventSeries;
            deleteCalendar(): void;
            getColor(): string;
            getDescription(): string;
            getEventById(iCalId: string): CalendarEvent;
            getEventSeriesById(iCalId: string): CalendarEventSeries;
            getEvents(startTime: Base.Date, endTime: Base.Date): CalendarEvent[];
            getEvents(startTime: Base.Date, endTime: Base.Date, options: { [key: string]: any }): CalendarEvent[];
            getEventsForDay(date: Base.Date): CalendarEvent[];
            getEventsForDay(date: Base.Date, options: { [key: string]: any }): CalendarEvent[];
            getId(): string;
            getName(): string;
            getTimeZone(): string;
            isHidden(): boolean;
            isMyPrimaryCalendar(): boolean;
            isOwnedByMe(): boolean;
            isSelected(): boolean;
            setColor(color: string): Calendar;
            setDescription(description: string): Calendar;
            setHidden(hidden: boolean): Calendar;
            setName(name: string): Calendar;
            setSelected(selected: boolean): Calendar;
            setTimeZone(timeZone: string): Calendar;
            unsubscribeFromCalendar(): void;
        }
        /**
         * Allows a script to read and update the user's Google Calendar. This class provides direct access
         * to the user's default calendar, as well as the ability to retrieve additional calendars that the
         * user owns or is subscribed to.
         */
        interface CalendarApp {
            Color: typeof Color;
            EventColor: typeof EventColor;
            EventTransparency: typeof EventTransparency;
            EventType: typeof EventType;
            GuestStatus: typeof GuestStatus;
            Month: typeof Base.Month;
            Visibility: typeof Visibility;
            Weekday: typeof Base.Weekday;
            createAllDayEvent(title: string, date: Base.Date): CalendarEvent;
            createAllDayEvent(title: string, startDate: Base.Date, endDate: Base.Date): CalendarEvent;
            createAllDayEvent(
                title: string,
                startDate: Base.Date,
                endDate: Base.Date,
                options: { [key: string]: any },
            ): CalendarEvent;
            createAllDayEvent(title: string, date: Base.Date, options: { [key: string]: any }): CalendarEvent;
            createAllDayEventSeries(
                title: string,
                startDate: Base.Date,
                recurrence: EventRecurrence,
            ): CalendarEventSeries;
            createAllDayEventSeries(
                title: string,
                startDate: Base.Date,
                recurrence: EventRecurrence,
                options: { [key: string]: any },
            ): CalendarEventSeries;
            createCalendar(name: string): Calendar;
            createCalendar(name: string, options: { [key: string]: any }): Calendar;
            createEvent(title: string, startTime: Base.Date, endTime: Base.Date): CalendarEvent;
            createEvent(
                title: string,
                startTime: Base.Date,
                endTime: Base.Date,
                options: { [key: string]: any },
            ): CalendarEvent;
            createEventFromDescription(description: string): CalendarEvent;
            createEventSeries(
                title: string,
                startTime: Base.Date,
                endTime: Base.Date,
                recurrence: EventRecurrence,
            ): CalendarEventSeries;
            createEventSeries(
                title: string,
                startTime: Base.Date,
                endTime: Base.Date,
                recurrence: EventRecurrence,
                options: { [key: string]: any },
            ): CalendarEventSeries;
            getAllCalendars(): Calendar[];
            getAllOwnedCalendars(): Calendar[];
            getCalendarById(id: string): Calendar;
            getCalendarsByName(name: string): Calendar[];
            getColor(): string;
            getDefaultCalendar(): Calendar;
            getDescription(): string;
            getEventById(iCalId: string): CalendarEvent;
            getEventSeriesById(iCalId: string): CalendarEventSeries;
            getEvents(startTime: Base.Date, endTime: Base.Date): CalendarEvent[];
            getEvents(startTime: Base.Date, endTime: Base.Date, options: { [key: string]: any }): CalendarEvent[];
            getEventsForDay(date: Base.Date): CalendarEvent[];
            getEventsForDay(date: Base.Date, options: { [key: string]: any }): CalendarEvent[];
            getId(): string;
            getName(): string;
            getOwnedCalendarById(id: string): Calendar;
            getOwnedCalendarsByName(name: string): Calendar[];
            getTimeZone(): string;
            isHidden(): boolean;
            isMyPrimaryCalendar(): boolean;
            isOwnedByMe(): boolean;
            isSelected(): boolean;
            newRecurrence(): EventRecurrence;
            setColor(color: string): Calendar;
            setDescription(description: string): Calendar;
            setHidden(hidden: boolean): Calendar;
            setName(name: string): Calendar;
            setSelected(selected: boolean): Calendar;
            setTimeZone(timeZone: string): Calendar;
            subscribeToCalendar(id: string): Calendar;
            subscribeToCalendar(id: string, options: { [key: string]: any }): Calendar;
        }
        /**
         * Represents a single calendar event.
         */
        interface CalendarEvent {
            addEmailReminder(minutesBefore: Integer): CalendarEvent;
            addGuest(email: string): CalendarEvent;
            addPopupReminder(minutesBefore: Integer): CalendarEvent;
            addSmsReminder(minutesBefore: Integer): CalendarEvent;
            anyoneCanAddSelf(): boolean;
            deleteEvent(): void;
            deleteTag(key: string): CalendarEvent;
            getAllDayEndDate(): Base.Date;
            getAllDayStartDate(): Base.Date;
            getAllTagKeys(): string[];
            getColor(): string;
            getCreators(): string[];
            getDateCreated(): Base.Date;
            getDescription(): string;
            getEmailReminders(): Integer[];
            getEndTime(): Base.Date;
            getEventSeries(): CalendarEventSeries;
            getEventType(): EventType;
            getGuestByEmail(email: string): EventGuest;
            getGuestList(): EventGuest[];
            getGuestList(includeOwner: boolean): EventGuest[];
            getId(): string;
            getLastUpdated(): Base.Date;
            getLocation(): string;
            getMyStatus(): GuestStatus;
            getOriginalCalendarId(): string;
            getPopupReminders(): Integer[];
            getSmsReminders(): Integer[];
            getStartTime(): Base.Date;
            getTag(key: string): string;
            getTitle(): string;
            getTransparency(): EventTransparency;
            getVisibility(): Visibility;
            guestsCanInviteOthers(): boolean;
            guestsCanModify(): boolean;
            guestsCanSeeGuests(): boolean;
            isAllDayEvent(): boolean;
            isOwnedByMe(): boolean;
            isRecurringEvent(): boolean;
            removeAllReminders(): CalendarEvent;
            removeGuest(email: string): CalendarEvent;
            resetRemindersToDefault(): CalendarEvent;
            setAllDayDate(date: Base.Date): CalendarEvent;
            setAllDayDates(startDate: Base.Date, endDate: Base.Date): CalendarEvent;
            setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): CalendarEvent;
            setColor(color: string | EventColor): CalendarEvent;
            setDescription(description: string): CalendarEvent;
            setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): CalendarEvent;
            setGuestsCanModify(guestsCanModify: boolean): CalendarEvent;
            setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): CalendarEvent;
            setLocation(location: string): CalendarEvent;
            setMyStatus(status: GuestStatus): CalendarEvent;
            setTag(key: string, value: string): CalendarEvent;
            setTime(startTime: Base.Date, endTime: Base.Date): CalendarEvent;
            setTitle(title: string): CalendarEvent;
            setTransparency(transparency: EventTransparency): CalendarEvent;
            setVisibility(visibility: Visibility): CalendarEvent;
        }
        /**
         * Represents a series of events (a recurring event).
         */
        interface CalendarEventSeries {
            addEmailReminder(minutesBefore: Integer): CalendarEventSeries;
            addGuest(email: string): CalendarEventSeries;
            addPopupReminder(minutesBefore: Integer): CalendarEventSeries;
            addSmsReminder(minutesBefore: Integer): CalendarEventSeries;
            anyoneCanAddSelf(): boolean;
            deleteEventSeries(): void;
            deleteTag(key: string): CalendarEventSeries;
            getAllTagKeys(): string[];
            getColor(): string;
            getCreators(): string[];
            getDateCreated(): Base.Date;
            getDescription(): string;
            getEmailReminders(): Integer[];
            getEventType(): EventType;
            getGuestByEmail(email: string): EventGuest;
            getGuestList(): EventGuest[];
            getGuestList(includeOwner: boolean): EventGuest[];
            getId(): string;
            getLastUpdated(): Base.Date;
            getLocation(): string;
            getMyStatus(): GuestStatus;
            getOriginalCalendarId(): string;
            getPopupReminders(): Integer[];
            getSmsReminders(): Integer[];
            getTag(key: string): string;
            getTitle(): string;
            getVisibility(): Visibility;
            guestsCanInviteOthers(): boolean;
            guestsCanModify(): boolean;
            guestsCanSeeGuests(): boolean;
            isOwnedByMe(): boolean;
            removeAllReminders(): CalendarEventSeries;
            removeGuest(email: string): CalendarEventSeries;
            resetRemindersToDefault(): CalendarEventSeries;
            setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): CalendarEventSeries;
            setColor(color: string): CalendarEventSeries;
            setDescription(description: string): CalendarEventSeries;
            setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): CalendarEventSeries;
            setGuestsCanModify(guestsCanModify: boolean): CalendarEventSeries;
            setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): CalendarEventSeries;
            setLocation(location: string): CalendarEventSeries;
            setMyStatus(status: GuestStatus): CalendarEventSeries;
            setRecurrence(recurrence: EventRecurrence, startDate: Base.Date): CalendarEventSeries;
            setRecurrence(recurrence: EventRecurrence, startTime: Base.Date, endTime: Base.Date): CalendarEventSeries;
            setTag(key: string, value: string): CalendarEventSeries;
            setTitle(title: string): CalendarEventSeries;
            setVisibility(visibility: Visibility): CalendarEventSeries;
        }
        /**
         * An enum representing the types of events that can be created.
         */
        enum EventType {
            DEFAULT,
            BIRTHDAY,
            FOCUS_TIME,
            FROM_GMAIL,
            OUT_OF_OFFICE,
            WORKING_LOCATION,
        }
        /**
         * An enum representing the named colors available in the Calendar service.
         */
        enum Color {
            BLUE,
            BROWN,
            CHARCOAL,
            CHESTNUT,
            GRAY,
            GREEN,
            INDIGO,
            LIME,
            MUSTARD,
            OLIVE,
            ORANGE,
            PINK,
            PLUM,
            PURPLE,
            RED,
            RED_ORANGE,
            SEA_BLUE,
            SLATE,
            TEAL,
            TURQOISE,
            YELLOW,
        }
        /**
         * An enum representing the named event colors available in the Calendar service.
         */
        enum EventColor {
            PALE_BLUE,
            PALE_GREEN,
            MAUVE,
            PALE_RED,
            YELLOW,
            ORANGE,
            CYAN,
            GRAY,
            BLUE,
            GREEN,
            RED,
        }
        /**
         * Represents a guest of an event.
         */
        interface EventGuest {
            getAdditionalGuests(): Integer;
            getEmail(): string;
            getGuestStatus(): GuestStatus;
            getName(): string;
            /** @deprecated DO NOT USE */ getStatus(): string;
        }
        /**
         * An enum representing the transparency of an event.
         */
        enum EventTransparency {
            OPAQUE,
            TRANSPARENT,
        }
        /**
         * Represents the recurrence settings for an event series.
         */
        interface EventRecurrence {
            addDailyExclusion(): RecurrenceRule;
            addDailyRule(): RecurrenceRule;
            addDate(date: Base.Date): EventRecurrence;
            addDateExclusion(date: Base.Date): EventRecurrence;
            addMonthlyExclusion(): RecurrenceRule;
            addMonthlyRule(): RecurrenceRule;
            addWeeklyExclusion(): RecurrenceRule;
            addWeeklyRule(): RecurrenceRule;
            addYearlyExclusion(): RecurrenceRule;
            addYearlyRule(): RecurrenceRule;
            setTimeZone(timeZone: string): EventRecurrence;
        }
        /**
         * An enum representing the statuses a guest can have for an event.
         */
        enum GuestStatus {
            INVITED,
            MAYBE,
            NO,
            OWNER,
            YES,
        }
        /**
         * Represents a recurrence rule for an event series.
         *
         * Note that this class also behaves like the EventRecurrence that it belongs to,
         * allowing you to chain rule creation together like so:
         *
         *     recurrence.addDailyRule().times(3).interval(2).addWeeklyExclusion().times(2);
         *
         * times(times)
         * interval(interval)
         */
        interface RecurrenceRule {
            addDailyExclusion(): RecurrenceRule;
            addDailyRule(): RecurrenceRule;
            addDate(date: Base.Date): EventRecurrence;
            addDateExclusion(date: Base.Date): EventRecurrence;
            addMonthlyExclusion(): RecurrenceRule;
            addMonthlyRule(): RecurrenceRule;
            addWeeklyExclusion(): RecurrenceRule;
            addWeeklyRule(): RecurrenceRule;
            addYearlyExclusion(): RecurrenceRule;
            addYearlyRule(): RecurrenceRule;
            interval(interval: Integer): RecurrenceRule;
            onlyInMonth(month: Base.Month): RecurrenceRule;
            onlyInMonths(months: Base.Month[]): RecurrenceRule;
            onlyOnMonthDay(day: Integer): RecurrenceRule;
            onlyOnMonthDays(days: Integer[]): RecurrenceRule;
            onlyOnWeek(week: Integer): RecurrenceRule;
            onlyOnWeekday(day: Base.Weekday): RecurrenceRule;
            onlyOnWeekdays(days: Base.Weekday[]): RecurrenceRule;
            onlyOnWeeks(weeks: Integer[]): RecurrenceRule;
            onlyOnYearDay(day: Integer): RecurrenceRule;
            onlyOnYearDays(days: Integer[]): RecurrenceRule;
            setTimeZone(timeZone: string): EventRecurrence;
            times(times: Integer): RecurrenceRule;
            until(endDate: Base.Date): RecurrenceRule;
            weekStartsOn(day: Base.Weekday): RecurrenceRule;
        }
        /**
         * An enum representing the visibility of an event.
         */
        enum Visibility {
            CONFIDENTIAL,
            DEFAULT,
            PRIVATE,
            PUBLIC,
        }
    }
}

declare var CalendarApp: GoogleAppsScript.Calendar.CalendarApp;
