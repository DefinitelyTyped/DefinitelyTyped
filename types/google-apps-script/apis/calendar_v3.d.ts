// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Calendar_v3 {
    namespace Collection {
      export interface AclCollection {
        // Returns an access control rule.
        get(calendarId: string, ruleId: string): Calendar_v3.Schema.AclRule;
        // Returns an access control rule.
        get(calendarId: string, ruleId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.AclRule;
        // Creates an access control rule.
        insert(resource: Schema.AclRule, calendarId: string): Calendar_v3.Schema.AclRule;
        // Creates an access control rule.
        insert(resource: Schema.AclRule, calendarId: string, optionalArgs: object): Calendar_v3.Schema.AclRule;
        // Creates an access control rule.
        insert(resource: Schema.AclRule, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.AclRule;
        // Returns the rules in the access control list for the calendar.
        list(calendarId: string): Calendar_v3.Schema.Acl;
        // Returns the rules in the access control list for the calendar.
        list(calendarId: string, optionalArgs: object): Calendar_v3.Schema.Acl;
        // Returns the rules in the access control list for the calendar.
        list(calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Acl;
        // Updates an access control rule. This method supports patch semantics.
        patch(resource: Schema.AclRule, calendarId: string, ruleId: string): Calendar_v3.Schema.AclRule;
        // Updates an access control rule. This method supports patch semantics.
        patch(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object): Calendar_v3.Schema.AclRule;
        // Updates an access control rule. This method supports patch semantics.
        patch(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.AclRule;
        // Deletes an access control rule.
        remove(calendarId: string, ruleId: string): void;
        // Deletes an access control rule.
        remove(calendarId: string, ruleId: string, optionalArgs: object, headers: object): void;
        // Updates an access control rule.
        update(resource: Schema.AclRule, calendarId: string, ruleId: string): Calendar_v3.Schema.AclRule;
        // Updates an access control rule.
        update(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object): Calendar_v3.Schema.AclRule;
        // Updates an access control rule.
        update(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.AclRule;
        // Watch for changes to ACL resources.
        watch(resource: Schema.Channel, calendarId: string): Calendar_v3.Schema.Channel;
        // Watch for changes to ACL resources.
        watch(resource: Schema.Channel, calendarId: string, optionalArgs: object): Calendar_v3.Schema.Channel;
        // Watch for changes to ACL resources.
        watch(resource: Schema.Channel, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Channel;
      }
      export interface CalendarListCollection {
        // Returns a calendar from the user's calendar list.
        get(calendarId: string): Calendar_v3.Schema.CalendarListEntry;
        // Returns a calendar from the user's calendar list.
        get(calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.CalendarListEntry;
        // Inserts an existing calendar into the user's calendar list.
        insert(resource: Schema.CalendarListEntry): Calendar_v3.Schema.CalendarListEntry;
        // Inserts an existing calendar into the user's calendar list.
        insert(resource: Schema.CalendarListEntry, optionalArgs: object): Calendar_v3.Schema.CalendarListEntry;
        // Inserts an existing calendar into the user's calendar list.
        insert(resource: Schema.CalendarListEntry, optionalArgs: object, headers: object): Calendar_v3.Schema.CalendarListEntry;
        // Returns the calendars on the user's calendar list.
        list(): Calendar_v3.Schema.CalendarList;
        // Returns the calendars on the user's calendar list.
        list(optionalArgs: object): Calendar_v3.Schema.CalendarList;
        // Returns the calendars on the user's calendar list.
        list(optionalArgs: object, headers: object): Calendar_v3.Schema.CalendarList;
        // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
        patch(resource: Schema.CalendarListEntry, calendarId: string): Calendar_v3.Schema.CalendarListEntry;
        // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
        patch(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object): Calendar_v3.Schema.CalendarListEntry;
        // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
        patch(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.CalendarListEntry;
        // Removes a calendar from the user's calendar list.
        remove(calendarId: string): void;
        // Removes a calendar from the user's calendar list.
        remove(calendarId: string, optionalArgs: object, headers: object): void;
        // Updates an existing calendar on the user's calendar list.
        update(resource: Schema.CalendarListEntry, calendarId: string): Calendar_v3.Schema.CalendarListEntry;
        // Updates an existing calendar on the user's calendar list.
        update(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object): Calendar_v3.Schema.CalendarListEntry;
        // Updates an existing calendar on the user's calendar list.
        update(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.CalendarListEntry;
        // Watch for changes to CalendarList resources.
        watch(resource: Schema.Channel): Calendar_v3.Schema.Channel;
        // Watch for changes to CalendarList resources.
        watch(resource: Schema.Channel, optionalArgs: object): Calendar_v3.Schema.Channel;
        // Watch for changes to CalendarList resources.
        watch(resource: Schema.Channel, optionalArgs: object, headers: object): Calendar_v3.Schema.Channel;
      }
      export interface CalendarsCollection {
        // Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
        clear(calendarId: string): void;
        // Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
        clear(calendarId: string, optionalArgs: object, headers: object): void;
        // Returns metadata for a calendar.
        get(calendarId: string): Calendar_v3.Schema.Calendar;
        // Returns metadata for a calendar.
        get(calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Calendar;
        // Creates a secondary calendar.
        insert(resource: Schema.Calendar): Calendar_v3.Schema.Calendar;
        // Creates a secondary calendar.
        insert(resource: Schema.Calendar, optionalArgs: object, headers: object): Calendar_v3.Schema.Calendar;
        // Updates metadata for a calendar. This method supports patch semantics.
        patch(resource: Schema.Calendar, calendarId: string): Calendar_v3.Schema.Calendar;
        // Updates metadata for a calendar. This method supports patch semantics.
        patch(resource: Schema.Calendar, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Calendar;
        // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
        remove(calendarId: string): void;
        // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
        remove(calendarId: string, optionalArgs: object, headers: object): void;
        // Updates metadata for a calendar.
        update(resource: Schema.Calendar, calendarId: string): Calendar_v3.Schema.Calendar;
        // Updates metadata for a calendar.
        update(resource: Schema.Calendar, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Calendar;
      }
      export interface ChannelsCollection {
        // Stop watching resources through this channel
        stop(resource: Schema.Channel): void;
        // Stop watching resources through this channel
        stop(resource: Schema.Channel, optionalArgs: object, headers: object): void;
      }
      export interface ColorsCollection {
        // Returns the color definitions for calendars and events.
        get(): Calendar_v3.Schema.Colors;
        // Returns the color definitions for calendars and events.
        get(optionalArgs: object, headers: object): Calendar_v3.Schema.Colors;
      }
      export interface EventsCollection {
        // Returns an event.
        get(calendarId: string, eventId: string): Calendar_v3.Schema.Event;
        // Returns an event.
        get(calendarId: string, eventId: string, optionalArgs: object): Calendar_v3.Schema.Event;
        // Returns an event.
        get(calendarId: string, eventId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Event;
        // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
        import(resource: Schema.Event, calendarId: string): Calendar_v3.Schema.Event;
        // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
        import(resource: Schema.Event, calendarId: string, optionalArgs: object): Calendar_v3.Schema.Event;
        // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
        import(resource: Schema.Event, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Event;
        // Creates an event.
        insert(resource: Schema.Event, calendarId: string): Calendar_v3.Schema.Event;
        // Creates an event.
        insert(resource: Schema.Event, calendarId: string, optionalArgs: object): Calendar_v3.Schema.Event;
        // Creates an event.
        insert(resource: Schema.Event, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Event;
        // Returns instances of the specified recurring event.
        instances(calendarId: string, eventId: string): Calendar_v3.Schema.Events;
        // Returns instances of the specified recurring event.
        instances(calendarId: string, eventId: string, optionalArgs: object): Calendar_v3.Schema.Events;
        // Returns instances of the specified recurring event.
        instances(calendarId: string, eventId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Events;
        // Returns events on the specified calendar.
        list(calendarId: string): Calendar_v3.Schema.Events;
        // Returns events on the specified calendar.
        list(calendarId: string, optionalArgs: object): Calendar_v3.Schema.Events;
        // Returns events on the specified calendar.
        list(calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Events;
        // Moves an event to another calendar, i.e. changes an event's organizer.
        move(calendarId: string, eventId: string, destination: string): Calendar_v3.Schema.Event;
        // Moves an event to another calendar, i.e. changes an event's organizer.
        move(calendarId: string, eventId: string, destination: string, optionalArgs: object): Calendar_v3.Schema.Event;
        // Moves an event to another calendar, i.e. changes an event's organizer.
        move(calendarId: string, eventId: string, destination: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Event;
        // Updates an event. This method supports patch semantics.
        patch(resource: Schema.Event, calendarId: string, eventId: string): Calendar_v3.Schema.Event;
        // Updates an event. This method supports patch semantics.
        patch(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object): Calendar_v3.Schema.Event;
        // Updates an event. This method supports patch semantics.
        patch(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Event;
        // Creates an event based on a simple text string.
        quickAdd(calendarId: string, text: string): Calendar_v3.Schema.Event;
        // Creates an event based on a simple text string.
        quickAdd(calendarId: string, text: string, optionalArgs: object): Calendar_v3.Schema.Event;
        // Creates an event based on a simple text string.
        quickAdd(calendarId: string, text: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Event;
        // Deletes an event.
        remove(calendarId: string, eventId: string): void;
        // Deletes an event.
        remove(calendarId: string, eventId: string, optionalArgs: object): void;
        // Deletes an event.
        remove(calendarId: string, eventId: string, optionalArgs: object, headers: object): void;
        // Updates an event.
        update(resource: Schema.Event, calendarId: string, eventId: string): Calendar_v3.Schema.Event;
        // Updates an event.
        update(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object): Calendar_v3.Schema.Event;
        // Updates an event.
        update(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Event;
        // Watch for changes to Events resources.
        watch(resource: Schema.Channel, calendarId: string): Calendar_v3.Schema.Channel;
        // Watch for changes to Events resources.
        watch(resource: Schema.Channel, calendarId: string, optionalArgs: object): Calendar_v3.Schema.Channel;
        // Watch for changes to Events resources.
        watch(resource: Schema.Channel, calendarId: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Channel;
      }
      export interface FreebusyCollection {
        // Returns free/busy information for a set of calendars.
        query(resource: Schema.FreeBusyRequest): Calendar_v3.Schema.FreeBusyResponse;
        // Returns free/busy information for a set of calendars.
        query(resource: Schema.FreeBusyRequest, optionalArgs: object, headers: object): Calendar_v3.Schema.FreeBusyResponse;
      }
      export interface SettingsCollection {
        // Returns a single user setting.
        get(setting: string): Calendar_v3.Schema.Setting;
        // Returns a single user setting.
        get(setting: string, optionalArgs: object, headers: object): Calendar_v3.Schema.Setting;
        // Returns all user settings for the authenticated user.
        list(): Calendar_v3.Schema.Settings;
        // Returns all user settings for the authenticated user.
        list(optionalArgs: object): Calendar_v3.Schema.Settings;
        // Returns all user settings for the authenticated user.
        list(optionalArgs: object, headers: object): Calendar_v3.Schema.Settings;
        // Watch for changes to Settings resources.
        watch(resource: Schema.Channel): Calendar_v3.Schema.Channel;
        // Watch for changes to Settings resources.
        watch(resource: Schema.Channel, optionalArgs: object): Calendar_v3.Schema.Channel;
        // Watch for changes to Settings resources.
        watch(resource: Schema.Channel, optionalArgs: object, headers: object): Calendar_v3.Schema.Channel;
      }
    }
    namespace Schema {
      export interface Acl {
        etag?: string;
        items?: Calendar_v3.Schema.AclRule[];
        kind?: string;
        nextPageToken?: string;
        nextSyncToken?: string;
      }
      export interface AclRule {
        etag?: string;
        id?: string;
        kind?: string;
        role?: string;
        scope?: Calendar_v3.Schema.AclRuleScope;
      }
      export interface AclRuleScope {
        type?: string;
        value?: string;
      }
      export interface Calendar {
        conferenceProperties?: Calendar_v3.Schema.ConferenceProperties;
        description?: string;
        etag?: string;
        id?: string;
        kind?: string;
        location?: string;
        summary?: string;
        timeZone?: string;
      }
      export interface CalendarList {
        etag?: string;
        items?: Calendar_v3.Schema.CalendarListEntry[];
        kind?: string;
        nextPageToken?: string;
        nextSyncToken?: string;
      }
      export interface CalendarListEntry {
        accessRole?: string;
        backgroundColor?: string;
        colorId?: string;
        conferenceProperties?: Calendar_v3.Schema.ConferenceProperties;
        defaultReminders?: Calendar_v3.Schema.EventReminder[];
        deleted?: boolean;
        description?: string;
        etag?: string;
        foregroundColor?: string;
        hidden?: boolean;
        id?: string;
        kind?: string;
        location?: string;
        notificationSettings?: Calendar_v3.Schema.CalendarListEntryNotificationSettings;
        primary?: boolean;
        selected?: boolean;
        summary?: string;
        summaryOverride?: string;
        timeZone?: string;
      }
      export interface CalendarListEntryNotificationSettings {
        notifications?: Calendar_v3.Schema.CalendarNotification[];
      }
      export interface CalendarNotification {
        method?: string;
        type?: string;
      }
      export interface Channel {
        address?: string;
        expiration?: string;
        id?: string;
        kind?: string;
        params?: object;
        payload?: boolean;
        resourceId?: string;
        resourceUri?: string;
        token?: string;
        type?: string;
      }
      export interface ColorDefinition {
        background?: string;
        foreground?: string;
      }
      export interface Colors {
        calendar?: object;
        event?: object;
        kind?: string;
        updated?: string;
      }
      export interface ConferenceData {
        conferenceId?: string;
        conferenceSolution?: Calendar_v3.Schema.ConferenceSolution;
        createRequest?: Calendar_v3.Schema.CreateConferenceRequest;
        entryPoints?: Calendar_v3.Schema.EntryPoint[];
        notes?: string;
        parameters?: Calendar_v3.Schema.ConferenceParameters;
        signature?: string;
      }
      export interface ConferenceParameters {
        addOnParameters?: Calendar_v3.Schema.ConferenceParametersAddOnParameters;
      }
      export interface ConferenceParametersAddOnParameters {
        parameters?: object;
      }
      export interface ConferenceProperties {
        allowedConferenceSolutionTypes?: string[];
      }
      export interface ConferenceRequestStatus {
        statusCode?: string;
      }
      export interface ConferenceSolution {
        iconUri?: string;
        key?: Calendar_v3.Schema.ConferenceSolutionKey;
        name?: string;
      }
      export interface ConferenceSolutionKey {
        type?: string;
      }
      export interface CreateConferenceRequest {
        conferenceSolutionKey?: Calendar_v3.Schema.ConferenceSolutionKey;
        requestId?: string;
        status?: Calendar_v3.Schema.ConferenceRequestStatus;
      }
      export interface EntryPoint {
        accessCode?: string;
        entryPointFeatures?: string[];
        entryPointType?: string;
        label?: string;
        meetingCode?: string;
        passcode?: string;
        password?: string;
        pin?: string;
        regionCode?: string;
        uri?: string;
      }
      export interface Error {
        domain?: string;
        reason?: string;
      }
      export interface Event {
        anyoneCanAddSelf?: boolean;
        attachments?: Calendar_v3.Schema.EventAttachment[];
        attendees?: Calendar_v3.Schema.EventAttendee[];
        attendeesOmitted?: boolean;
        colorId?: string;
        conferenceData?: Calendar_v3.Schema.ConferenceData;
        created?: string;
        creator?: Calendar_v3.Schema.EventCreator;
        description?: string;
        end?: Calendar_v3.Schema.EventDateTime;
        endTimeUnspecified?: boolean;
        etag?: string;
        extendedProperties?: Calendar_v3.Schema.EventExtendedProperties;
        gadget?: Calendar_v3.Schema.EventGadget;
        guestsCanInviteOthers?: boolean;
        guestsCanModify?: boolean;
        guestsCanSeeOtherGuests?: boolean;
        hangoutLink?: string;
        htmlLink?: string;
        iCalUID?: string;
        id?: string;
        kind?: string;
        location?: string;
        locked?: boolean;
        organizer?: Calendar_v3.Schema.EventOrganizer;
        originalStartTime?: Calendar_v3.Schema.EventDateTime;
        privateCopy?: boolean;
        recurrence?: string[];
        recurringEventId?: string;
        reminders?: Calendar_v3.Schema.EventReminders;
        sequence?: number;
        source?: Calendar_v3.Schema.EventSource;
        start?: Calendar_v3.Schema.EventDateTime;
        status?: string;
        summary?: string;
        transparency?: string;
        updated?: string;
        visibility?: string;
      }
      export interface EventAttachment {
        fileId?: string;
        fileUrl?: string;
        iconLink?: string;
        mimeType?: string;
        title?: string;
      }
      export interface EventAttendee {
        additionalGuests?: number;
        comment?: string;
        displayName?: string;
        email?: string;
        id?: string;
        optional?: boolean;
        organizer?: boolean;
        resource?: boolean;
        responseStatus?: string;
        self?: boolean;
      }
      export interface EventCreator {
        displayName?: string;
        email?: string;
        id?: string;
        self?: boolean;
      }
      export interface EventDateTime {
        date?: string;
        dateTime?: string;
        timeZone?: string;
      }
      export interface EventExtendedProperties {
        private?: object;
        shared?: object;
      }
      export interface EventGadget {
        display?: string;
        height?: number;
        iconLink?: string;
        link?: string;
        preferences?: object;
        title?: string;
        type?: string;
        width?: number;
      }
      export interface EventOrganizer {
        displayName?: string;
        email?: string;
        id?: string;
        self?: boolean;
      }
      export interface EventReminder {
        method?: string;
        minutes?: number;
      }
      export interface EventReminders {
        overrides?: Calendar_v3.Schema.EventReminder[];
        useDefault?: boolean;
      }
      export interface EventSource {
        title?: string;
        url?: string;
      }
      export interface Events {
        accessRole?: string;
        defaultReminders?: Calendar_v3.Schema.EventReminder[];
        description?: string;
        etag?: string;
        items?: Calendar_v3.Schema.Event[];
        kind?: string;
        nextPageToken?: string;
        nextSyncToken?: string;
        summary?: string;
        timeZone?: string;
        updated?: string;
      }
      export interface FreeBusyCalendar {
        busy?: Calendar_v3.Schema.TimePeriod[];
        errors?: Calendar_v3.Schema.Error[];
      }
      export interface FreeBusyGroup {
        calendars?: string[];
        errors?: Calendar_v3.Schema.Error[];
      }
      export interface FreeBusyRequest {
        calendarExpansionMax?: number;
        groupExpansionMax?: number;
        items?: Calendar_v3.Schema.FreeBusyRequestItem[];
        timeMax?: string;
        timeMin?: string;
        timeZone?: string;
      }
      export interface FreeBusyRequestItem {
        id?: string;
      }
      export interface FreeBusyResponse {
        calendars?: object;
        groups?: object;
        kind?: string;
        timeMax?: string;
        timeMin?: string;
      }
      export interface Setting {
        etag?: string;
        id?: string;
        kind?: string;
        value?: string;
      }
      export interface Settings {
        etag?: string;
        items?: Calendar_v3.Schema.Setting[];
        kind?: string;
        nextPageToken?: string;
        nextSyncToken?: string;
      }
      export interface TimePeriod {
        end?: string;
        start?: string;
      }
    }
  }
  export interface Calendar_v3 {
    Acl?: Calendar_v3.Collection.AclCollection;
    CalendarList?: Calendar_v3.Collection.CalendarListCollection;
    Calendars?: Calendar_v3.Collection.CalendarsCollection;
    Channels?: Calendar_v3.Collection.ChannelsCollection;
    Colors?: Calendar_v3.Collection.ColorsCollection;
    Events?: Calendar_v3.Collection.EventsCollection;
    Freebusy?: Calendar_v3.Collection.FreebusyCollection;
    Settings?: Calendar_v3.Collection.SettingsCollection;
    // Create a new instance of AclRule
    newAclRule(): Calendar_v3.Schema.AclRule;
    // Create a new instance of AclRuleScope
    newAclRuleScope(): Calendar_v3.Schema.AclRuleScope;
    // Create a new instance of Calendar
    newCalendar(): Calendar_v3.Schema.Calendar;
    // Create a new instance of CalendarListEntry
    newCalendarListEntry(): Calendar_v3.Schema.CalendarListEntry;
    // Create a new instance of CalendarListEntryNotificationSettings
    newCalendarListEntryNotificationSettings(): Calendar_v3.Schema.CalendarListEntryNotificationSettings;
    // Create a new instance of CalendarNotification
    newCalendarNotification(): Calendar_v3.Schema.CalendarNotification;
    // Create a new instance of Channel
    newChannel(): Calendar_v3.Schema.Channel;
    // Create a new instance of ConferenceData
    newConferenceData(): Calendar_v3.Schema.ConferenceData;
    // Create a new instance of ConferenceParameters
    newConferenceParameters(): Calendar_v3.Schema.ConferenceParameters;
    // Create a new instance of ConferenceParametersAddOnParameters
    newConferenceParametersAddOnParameters(): Calendar_v3.Schema.ConferenceParametersAddOnParameters;
    // Create a new instance of ConferenceProperties
    newConferenceProperties(): Calendar_v3.Schema.ConferenceProperties;
    // Create a new instance of ConferenceRequestStatus
    newConferenceRequestStatus(): Calendar_v3.Schema.ConferenceRequestStatus;
    // Create a new instance of ConferenceSolution
    newConferenceSolution(): Calendar_v3.Schema.ConferenceSolution;
    // Create a new instance of ConferenceSolutionKey
    newConferenceSolutionKey(): Calendar_v3.Schema.ConferenceSolutionKey;
    // Create a new instance of CreateConferenceRequest
    newCreateConferenceRequest(): Calendar_v3.Schema.CreateConferenceRequest;
    // Create a new instance of EntryPoint
    newEntryPoint(): Calendar_v3.Schema.EntryPoint;
    // Create a new instance of Event
    newEvent(): Calendar_v3.Schema.Event;
    // Create a new instance of EventAttachment
    newEventAttachment(): Calendar_v3.Schema.EventAttachment;
    // Create a new instance of EventAttendee
    newEventAttendee(): Calendar_v3.Schema.EventAttendee;
    // Create a new instance of EventCreator
    newEventCreator(): Calendar_v3.Schema.EventCreator;
    // Create a new instance of EventDateTime
    newEventDateTime(): Calendar_v3.Schema.EventDateTime;
    // Create a new instance of EventExtendedProperties
    newEventExtendedProperties(): Calendar_v3.Schema.EventExtendedProperties;
    // Create a new instance of EventGadget
    newEventGadget(): Calendar_v3.Schema.EventGadget;
    // Create a new instance of EventOrganizer
    newEventOrganizer(): Calendar_v3.Schema.EventOrganizer;
    // Create a new instance of EventReminder
    newEventReminder(): Calendar_v3.Schema.EventReminder;
    // Create a new instance of EventReminders
    newEventReminders(): Calendar_v3.Schema.EventReminders;
    // Create a new instance of EventSource
    newEventSource(): Calendar_v3.Schema.EventSource;
    // Create a new instance of FreeBusyRequest
    newFreeBusyRequest(): Calendar_v3.Schema.FreeBusyRequest;
    // Create a new instance of FreeBusyRequestItem
    newFreeBusyRequestItem(): Calendar_v3.Schema.FreeBusyRequestItem;
  }
}

declare var Calendar_v3: GoogleAppsScript.Calendar_v3;