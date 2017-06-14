// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Calendar {
    /**
     * Represents a calendar that the user owns or is subscribed to.
     */
    export interface Calendar {
      createAllDayEvent(title: string, date: Date): CalendarEvent;
      createAllDayEvent(title: string, date: Date, options: Object): CalendarEvent;
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence): CalendarEventSeries;
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence, options: Object): CalendarEventSeries;
      createEvent(title: string, startTime: Date, endTime: Date): CalendarEvent;
      createEvent(title: string, startTime: Date, endTime: Date, options: Object): CalendarEvent;
      createEventFromDescription(description: string): CalendarEvent;
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence): CalendarEventSeries;
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence, options: Object): CalendarEventSeries;
      deleteCalendar(): void;
      getColor(): string;
      getDescription(): string;
      getEventSeriesById(iCalId: string): CalendarEventSeries;
      getEvents(startTime: Date, endTime: Date): CalendarEvent[];
      getEvents(startTime: Date, endTime: Date, options: Object): CalendarEvent[];
      getEventsForDay(date: Date): CalendarEvent[];
      getEventsForDay(date: Date, options: Object): CalendarEvent[];
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
     * Allows a script to read and update the user's Google Calendar. This class provides direct
     *  access to the user's default calendar, as well as the ability to retrieve additional calendars
     *  that the user owns or is subscribed to.
     */
    export interface CalendarApp {
      Color: typeof Color;
      EventColor: typeof EventColor;
      GuestStatus: typeof GuestStatus;
      Month: typeof Base.Month;
      Visibility: typeof Visibility;
      Weekday: typeof Base.Weekday;
      createAllDayEvent(title: string, date: Date): CalendarEvent;
      createAllDayEvent(title: string, date: Date, options: Object): CalendarEvent;
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence): CalendarEventSeries;
      createAllDayEventSeries(title: string, startDate: Date, recurrence: EventRecurrence, options: Object): CalendarEventSeries;
      createCalendar(name: string): Calendar;
      createCalendar(name: string, options: Object): Calendar;
      createEvent(title: string, startTime: Date, endTime: Date): CalendarEvent;
      createEvent(title: string, startTime: Date, endTime: Date, options: Object): CalendarEvent;
      createEventFromDescription(description: string): CalendarEvent;
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence): CalendarEventSeries;
      createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: EventRecurrence, options: Object): CalendarEventSeries;
      getAllCalendars(): Calendar[];
      getAllOwnedCalendars(): Calendar[];
      getCalendarById(id: string): Calendar;
      getCalendarsByName(name: string): Calendar[];
      getColor(): string;
      getDefaultCalendar(): Calendar;
      getDescription(): string;
      getEventSeriesById(iCalId: string): CalendarEventSeries;
      getEvents(startTime: Date, endTime: Date): CalendarEvent[];
      getEvents(startTime: Date, endTime: Date, options: Object): CalendarEvent[];
      getEventsForDay(date: Date): CalendarEvent[];
      getEventsForDay(date: Date, options: Object): CalendarEvent[];
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
      subscribeToCalendar(id: string, options: Object): Calendar;
    }

    /**
     * Represents a single calendar event.
     */
    export interface CalendarEvent {
      addEmailReminder(minutesBefore: Integer): CalendarEvent;
      addGuest(email: string): CalendarEvent;
      addPopupReminder(minutesBefore: Integer): CalendarEvent;
      addSmsReminder(minutesBefore: Integer): CalendarEvent;
      anyoneCanAddSelf(): boolean;
      deleteEvent(): void;
      deleteTag(key: string): CalendarEvent;
      getAllDayEndDate(): Date;
      getAllDayStartDate(): Date;
      getAllTagKeys(): String[];
      getColor(): string;
      getCreators(): String[];
      getDateCreated(): Date;
      getDescription(): string;
      getEmailReminders(): Integer[];
      getEndTime(): Date;
      getEventSeries(): CalendarEventSeries;
      getGuestByEmail(email: string): EventGuest;
      getGuestList(): EventGuest[];
      getGuestList(includeOwner: boolean): EventGuest[];
      getId(): string;
      getLastUpdated(): Date;
      getLocation(): string;
      getMyStatus(): GuestStatus;
      getOriginalCalendarId(): string;
      getPopupReminders(): Integer[];
      getSmsReminders(): Integer[];
      getStartTime(): Date;
      getTag(key: string): string;
      getTitle(): string;
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
      setAllDayDate(date: Date): CalendarEvent;
      setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): CalendarEvent;
      setColor(color: string): CalendarEvent;
      setDescription(description: string): CalendarEvent;
      setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): CalendarEvent;
      setGuestsCanModify(guestsCanModify: boolean): CalendarEvent;
      setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): CalendarEvent;
      setLocation(location: string): CalendarEvent;
      setMyStatus(status: GuestStatus): CalendarEvent;
      setTag(key: string, value: string): CalendarEvent;
      setTime(startTime: Date, endTime: Date): CalendarEvent;
      setTitle(title: string): CalendarEvent;
      setVisibility(visibility: Visibility): CalendarEvent;
    }

    /**
     * Represents a series of events (a recurring event).
     */
    export interface CalendarEventSeries {
      addEmailReminder(minutesBefore: Integer): CalendarEventSeries;
      addGuest(email: string): CalendarEventSeries;
      addPopupReminder(minutesBefore: Integer): CalendarEventSeries;
      addSmsReminder(minutesBefore: Integer): CalendarEventSeries;
      anyoneCanAddSelf(): boolean;
      deleteEventSeries(): void;
      deleteTag(key: string): CalendarEventSeries;
      getAllTagKeys(): String[];
      getColor(): string;
      getCreators(): String[];
      getDateCreated(): Date;
      getDescription(): string;
      getEmailReminders(): Integer[];
      getGuestByEmail(email: string): EventGuest;
      getGuestList(): EventGuest[];
      getGuestList(includeOwner: boolean): EventGuest[];
      getId(): string;
      getLastUpdated(): Date;
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
      setRecurrence(recurrence: EventRecurrence, startDate: Date): CalendarEventSeries;
      setRecurrence(recurrence: EventRecurrence, startTime: Date, endTime: Date): CalendarEventSeries;
      setTag(key: string, value: string): CalendarEventSeries;
      setTitle(title: string): CalendarEventSeries;
      setVisibility(visibility: Visibility): CalendarEventSeries;
    }

    /**
     * An enum representing the named colors available in the Calendar service.
     */
    export enum Color { BLUE, BROWN, CHARCOAL, CHESTNUT, GRAY, GREEN, INDIGO, LIME, MUSTARD, OLIVE, ORANGE, PINK, PLUM, PURPLE, RED, RED_ORANGE, SEA_BLUE, SLATE, TEAL, TURQOISE, YELLOW }

    /**
     * An enum representing the named event colors available in the Calendar service.
     */
    export enum EventColor { PALE_BLUE, PALE_GREEN, MAUVE, PALE_RED, YELLOW, ORANGE, CYAN, GRAY, BLUE, GREEN, RED }

    /**
     * Represents a guest of an event.
     */
    export interface EventGuest {
      getAdditionalGuests(): Integer;
      getEmail(): string;
      getGuestStatus(): GuestStatus;
      getName(): string;
      getStatus(): string;
    }

    /**
     * Represents the recurrence settings for an event series.
     */
    export interface EventRecurrence {
      addDailyExclusion(): RecurrenceRule;
      addDailyRule(): RecurrenceRule;
      addDate(date: Date): EventRecurrence;
      addDateExclusion(date: Date): EventRecurrence;
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
    export enum GuestStatus { INVITED, MAYBE, NO, OWNER, YES }

    /**
     * Represents a recurrence rule for an event series.
     *
     * Note that this class also behaves like the EventRecurrence that it belongs
     *  to, allowing you to chain rule creation together like so:
     *
     *      recurrence.addDailyRule().times(3).interval(2).addWeeklyExclusion().times(2);
     *
     * times(times)
     * interval(interval)
     */
    export interface RecurrenceRule {
      addDailyExclusion(): RecurrenceRule;
      addDailyRule(): RecurrenceRule;
      addDate(date: Date): EventRecurrence;
      addDateExclusion(date: Date): EventRecurrence;
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
      until(endDate: Date): RecurrenceRule;
      weekStartsOn(day: Base.Weekday): RecurrenceRule;
    }

    /**
     * An enum representing the visibility of an event.
     */
    export enum Visibility { CONFIDENTIAL, DEFAULT, PRIVATE, PUBLIC }

  }
}

declare var CalendarApp: GoogleAppsScript.Calendar.CalendarApp;
