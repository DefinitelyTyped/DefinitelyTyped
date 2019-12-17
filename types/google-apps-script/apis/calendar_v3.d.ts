// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Calendar {
    namespace Collection {
      interface AclCollection {
        // Returns an access control rule.
        get(calendarId: string, ruleId: string): Calendar.Schema.AclRule;
        // Returns an access control rule.
        get(calendarId: string, ruleId: string, optionalArgs: object, headers: object): Calendar.Schema.AclRule;
        // Creates an access control rule.
        insert(resource: Schema.AclRule, calendarId: string): Calendar.Schema.AclRule;
        // Creates an access control rule.
        insert(resource: Schema.AclRule, calendarId: string, optionalArgs: object): Calendar.Schema.AclRule;
        // Creates an access control rule.
        insert(resource: Schema.AclRule, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.AclRule;
        // Returns the rules in the access control list for the calendar.
        list(calendarId: string): Calendar.Schema.Acl;
        // Returns the rules in the access control list for the calendar.
        list(calendarId: string, optionalArgs: object): Calendar.Schema.Acl;
        // Returns the rules in the access control list for the calendar.
        list(calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Acl;
        // Updates an access control rule. This method supports patch semantics.
        patch(resource: Schema.AclRule, calendarId: string, ruleId: string): Calendar.Schema.AclRule;
        // Updates an access control rule. This method supports patch semantics.
        patch(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object): Calendar.Schema.AclRule;
        // Updates an access control rule. This method supports patch semantics.
        patch(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object, headers: object): Calendar.Schema.AclRule;
        // Deletes an access control rule.
        remove(calendarId: string, ruleId: string): void;
        // Deletes an access control rule.
        remove(calendarId: string, ruleId: string, optionalArgs: object, headers: object): void;
        // Updates an access control rule.
        update(resource: Schema.AclRule, calendarId: string, ruleId: string): Calendar.Schema.AclRule;
        // Updates an access control rule.
        update(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object): Calendar.Schema.AclRule;
        // Updates an access control rule.
        update(resource: Schema.AclRule, calendarId: string, ruleId: string, optionalArgs: object, headers: object): Calendar.Schema.AclRule;
        // Watch for changes to ACL resources.
        watch(resource: Schema.Channel, calendarId: string): Calendar.Schema.Channel;
        // Watch for changes to ACL resources.
        watch(resource: Schema.Channel, calendarId: string, optionalArgs: object): Calendar.Schema.Channel;
        // Watch for changes to ACL resources.
        watch(resource: Schema.Channel, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Channel;
      }
      interface CalendarListCollection {
        // Returns a calendar from the user's calendar list.
        get(calendarId: string): Calendar.Schema.CalendarListEntry;
        // Returns a calendar from the user's calendar list.
        get(calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.CalendarListEntry;
        // Inserts an existing calendar into the user's calendar list.
        insert(resource: Schema.CalendarListEntry): Calendar.Schema.CalendarListEntry;
        // Inserts an existing calendar into the user's calendar list.
        insert(resource: Schema.CalendarListEntry, optionalArgs: object): Calendar.Schema.CalendarListEntry;
        // Inserts an existing calendar into the user's calendar list.
        insert(resource: Schema.CalendarListEntry, optionalArgs: object, headers: object): Calendar.Schema.CalendarListEntry;
        // Returns the calendars on the user's calendar list.
        list(): Calendar.Schema.CalendarList;
        // Returns the calendars on the user's calendar list.
        list(optionalArgs: object): Calendar.Schema.CalendarList;
        // Returns the calendars on the user's calendar list.
        list(optionalArgs: object, headers: object): Calendar.Schema.CalendarList;
        // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
        patch(resource: Schema.CalendarListEntry, calendarId: string): Calendar.Schema.CalendarListEntry;
        // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
        patch(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object): Calendar.Schema.CalendarListEntry;
        // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
        patch(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.CalendarListEntry;
        // Removes a calendar from the user's calendar list.
        remove(calendarId: string): void;
        // Removes a calendar from the user's calendar list.
        remove(calendarId: string, optionalArgs: object, headers: object): void;
        // Updates an existing calendar on the user's calendar list.
        update(resource: Schema.CalendarListEntry, calendarId: string): Calendar.Schema.CalendarListEntry;
        // Updates an existing calendar on the user's calendar list.
        update(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object): Calendar.Schema.CalendarListEntry;
        // Updates an existing calendar on the user's calendar list.
        update(resource: Schema.CalendarListEntry, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.CalendarListEntry;
        // Watch for changes to CalendarList resources.
        watch(resource: Schema.Channel): Calendar.Schema.Channel;
        // Watch for changes to CalendarList resources.
        watch(resource: Schema.Channel, optionalArgs: object): Calendar.Schema.Channel;
        // Watch for changes to CalendarList resources.
        watch(resource: Schema.Channel, optionalArgs: object, headers: object): Calendar.Schema.Channel;
      }
      interface CalendarsCollection {
        // Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
        clear(calendarId: string): void;
        // Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
        clear(calendarId: string, optionalArgs: object, headers: object): void;
        // Returns metadata for a calendar.
        get(calendarId: string): Calendar.Schema.Calendar;
        // Returns metadata for a calendar.
        get(calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Calendar;
        // Creates a secondary calendar.
        insert(resource: Schema.Calendar): Calendar.Schema.Calendar;
        // Creates a secondary calendar.
        insert(resource: Schema.Calendar, optionalArgs: object, headers: object): Calendar.Schema.Calendar;
        // Updates metadata for a calendar. This method supports patch semantics.
        patch(resource: Schema.Calendar, calendarId: string): Calendar.Schema.Calendar;
        // Updates metadata for a calendar. This method supports patch semantics.
        patch(resource: Schema.Calendar, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Calendar;
        // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
        remove(calendarId: string): void;
        // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
        remove(calendarId: string, optionalArgs: object, headers: object): void;
        // Updates metadata for a calendar.
        update(resource: Schema.Calendar, calendarId: string): Calendar.Schema.Calendar;
        // Updates metadata for a calendar.
        update(resource: Schema.Calendar, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Calendar;
      }
      interface ChannelsCollection {
        // Stop watching resources through this channel
        stop(resource: Schema.Channel): void;
        // Stop watching resources through this channel
        stop(resource: Schema.Channel, optionalArgs: object, headers: object): void;
      }
      interface ColorsCollection {
        // Returns the color definitions for calendars and events.
        get(): Calendar.Schema.Colors;
        // Returns the color definitions for calendars and events.
        get(optionalArgs: object, headers: object): Calendar.Schema.Colors;
      }
      interface EventsCollection {
        // Returns an event.
        get(calendarId: string, eventId: string): Calendar.Schema.Event;
        // Returns an event.
        get(calendarId: string, eventId: string, optionalArgs: object): Calendar.Schema.Event;
        // Returns an event.
        get(calendarId: string, eventId: string, optionalArgs: object, headers: object): Calendar.Schema.Event;
        // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
        import(resource: Schema.Event, calendarId: string): Calendar.Schema.Event;
        // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
        import(resource: Schema.Event, calendarId: string, optionalArgs: object): Calendar.Schema.Event;
        // Imports an event. This operation is used to add a private copy of an existing event to a calendar.
        import(resource: Schema.Event, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Event;
        // Creates an event.
        insert(resource: Schema.Event, calendarId: string): Calendar.Schema.Event;
        // Creates an event.
        insert(resource: Schema.Event, calendarId: string, optionalArgs: object): Calendar.Schema.Event;
        // Creates an event.
        insert(resource: Schema.Event, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Event;
        // Returns instances of the specified recurring event.
        instances(calendarId: string, eventId: string): Calendar.Schema.Events;
        // Returns instances of the specified recurring event.
        instances(calendarId: string, eventId: string, optionalArgs: object): Calendar.Schema.Events;
        // Returns instances of the specified recurring event.
        instances(calendarId: string, eventId: string, optionalArgs: object, headers: object): Calendar.Schema.Events;
        // Returns events on the specified calendar.
        list(calendarId: string): Calendar.Schema.Events;
        // Returns events on the specified calendar.
        list(calendarId: string, optionalArgs: object): Calendar.Schema.Events;
        // Returns events on the specified calendar.
        list(calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Events;
        // Moves an event to another calendar, i.e. changes an event's organizer.
        move(calendarId: string, eventId: string, destination: string): Calendar.Schema.Event;
        // Moves an event to another calendar, i.e. changes an event's organizer.
        move(calendarId: string, eventId: string, destination: string, optionalArgs: object): Calendar.Schema.Event;
        // Moves an event to another calendar, i.e. changes an event's organizer.
        move(calendarId: string, eventId: string, destination: string, optionalArgs: object, headers: object): Calendar.Schema.Event;
        // Updates an event. This method supports patch semantics.
        patch(resource: Schema.Event, calendarId: string, eventId: string): Calendar.Schema.Event;
        // Updates an event. This method supports patch semantics.
        patch(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object): Calendar.Schema.Event;
        // Updates an event. This method supports patch semantics.
        patch(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object, headers: object): Calendar.Schema.Event;
        // Creates an event based on a simple text string.
        quickAdd(calendarId: string, text: string): Calendar.Schema.Event;
        // Creates an event based on a simple text string.
        quickAdd(calendarId: string, text: string, optionalArgs: object): Calendar.Schema.Event;
        // Creates an event based on a simple text string.
        quickAdd(calendarId: string, text: string, optionalArgs: object, headers: object): Calendar.Schema.Event;
        // Deletes an event.
        remove(calendarId: string, eventId: string): void;
        // Deletes an event.
        remove(calendarId: string, eventId: string, optionalArgs: object): void;
        // Deletes an event.
        remove(calendarId: string, eventId: string, optionalArgs: object, headers: object): void;
        // Updates an event.
        update(resource: Schema.Event, calendarId: string, eventId: string): Calendar.Schema.Event;
        // Updates an event.
        update(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object): Calendar.Schema.Event;
        // Updates an event.
        update(resource: Schema.Event, calendarId: string, eventId: string, optionalArgs: object, headers: object): Calendar.Schema.Event;
        // Watch for changes to Events resources.
        watch(resource: Schema.Channel, calendarId: string): Calendar.Schema.Channel;
        // Watch for changes to Events resources.
        watch(resource: Schema.Channel, calendarId: string, optionalArgs: object): Calendar.Schema.Channel;
        // Watch for changes to Events resources.
        watch(resource: Schema.Channel, calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Channel;
      }
      interface FreebusyCollection {
        // Returns free/busy information for a set of calendars.
        query(resource: Schema.FreeBusyRequest): Calendar.Schema.FreeBusyResponse;
        // Returns free/busy information for a set of calendars.
        query(resource: Schema.FreeBusyRequest, optionalArgs: object, headers: object): Calendar.Schema.FreeBusyResponse;
      }
      interface SettingsCollection {
        // Returns a single user setting.
        get(setting: string): Calendar.Schema.Setting;
        // Returns a single user setting.
        get(setting: string, optionalArgs: object, headers: object): Calendar.Schema.Setting;
        // Returns all user settings for the authenticated user.
        list(): Calendar.Schema.Settings;
        // Returns all user settings for the authenticated user.
        list(optionalArgs: object): Calendar.Schema.Settings;
        // Returns all user settings for the authenticated user.
        list(optionalArgs: object, headers: object): Calendar.Schema.Settings;
        // Watch for changes to Settings resources.
        watch(resource: Schema.Channel): Calendar.Schema.Channel;
        // Watch for changes to Settings resources.
        watch(resource: Schema.Channel, optionalArgs: object): Calendar.Schema.Channel;
        // Watch for changes to Settings resources.
        watch(resource: Schema.Channel, optionalArgs: object, headers: object): Calendar.Schema.Channel;
      }
    }
    namespace Schema {
      interface Acl {
        etag?: string;
        items?: Calendar.Schema.AclRule[];
        kind?: string;
        nextPageToken?: string;
        nextSyncToken?: string;
      }
      interface AclRule {
        etag?: string;
        id?: string;
        kind?: string;
        role?: string;
        scope?: Calendar.Schema.AclRuleScope;
      }
      interface AclRuleScope {
        type?: string;
        value?: string;
      }
      interface Calendar {
        conferenceProperties?: Calendar.Schema.ConferenceProperties;
        description?: string;
        etag?: string;
        id?: string;
        kind?: string;
        location?: string;
        summary?: string;
        timeZone?: string;
      }
      interface CalendarList {
        etag?: string;
        items?: Calendar.Schema.CalendarListEntry[];
        kind?: string;
        nextPageToken?: string;
        nextSyncToken?: string;
      }
      interface CalendarListEntry {
        accessRole?: string;
        backgroundColor?: string;
        colorId?: string;
        conferenceProperties?: Calendar.Schema.ConferenceProperties;
        defaultReminders?: Calendar.Schema.EventReminder[];
        deleted?: boolean;
        description?: string;
        etag?: string;
        foregroundColor?: string;
        hidden?: boolean;
        id?: string;
        kind?: string;
        location?: string;
        notificationSettings?: Calendar.Schema.CalendarListEntryNotificationSettings;
        primary?: boolean;
        selected?: boolean;
        summary?: string;
        summaryOverride?: string;
        timeZone?: string;
      }
      interface CalendarListEntryNotificationSettings {
        notifications?: Calendar.Schema.CalendarNotification[];
      }
      interface CalendarNotification {
        method?: string;
        type?: string;
      }
      interface Channel {
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
      interface ColorDefinition {
        background?: string;
        foreground?: string;
      }
      interface Colors {
        calendar?: object;
        event?: object;
        kind?: string;
        updated?: string;
      }
      interface ConferenceData {
        conferenceId?: string;
        conferenceSolution?: Calendar.Schema.ConferenceSolution;
        createRequest?: Calendar.Schema.CreateConferenceRequest;
        entryPoints?: Calendar.Schema.EntryPoint[];
        notes?: string;
        parameters?: Calendar.Schema.ConferenceParameters;
        signature?: string;
      }
      interface ConferenceParameters {
        addOnParameters?: Calendar.Schema.ConferenceParametersAddOnParameters;
      }
      interface ConferenceParametersAddOnParameters {
        parameters?: Record<string, string>;
      }
      interface ConferenceProperties {
        allowedConferenceSolutionTypes?: string[];
      }
      interface ConferenceRequestStatus {
        statusCode?: string;
      }
      interface ConferenceSolution {
        iconUri?: string;
        key?: Calendar.Schema.ConferenceSolutionKey;
        name?: string;
      }
      interface ConferenceSolutionKey {
        type?: string;
      }
      interface CreateConferenceRequest {
        conferenceSolutionKey?: Calendar.Schema.ConferenceSolutionKey;
        requestId?: string;
        status?: Calendar.Schema.ConferenceRequestStatus;
      }
      interface EntryPoint {
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
      interface Error {
        domain?: string;
        reason?: string;
      }
      interface Event {
        anyoneCanAddSelf?: boolean;
        attachments?: Calendar.Schema.EventAttachment[];
        attendees?: Calendar.Schema.EventAttendee[];
        attendeesOmitted?: boolean;
        colorId?: string;
        conferenceData?: Calendar.Schema.ConferenceData;
        created?: string;
        creator?: Calendar.Schema.EventCreator;
        description?: string;
        end?: Calendar.Schema.EventDateTime;
        endTimeUnspecified?: boolean;
        etag?: string;
        extendedProperties?: Calendar.Schema.EventExtendedProperties;
        gadget?: Calendar.Schema.EventGadget;
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
        organizer?: Calendar.Schema.EventOrganizer;
        originalStartTime?: Calendar.Schema.EventDateTime;
        privateCopy?: boolean;
        recurrence?: string[];
        recurringEventId?: string;
        reminders?: Calendar.Schema.EventReminders;
        sequence?: number;
        source?: Calendar.Schema.EventSource;
        start?: Calendar.Schema.EventDateTime;
        status?: string;
        summary?: string;
        transparency?: string;
        updated?: string;
        visibility?: string;
      }
      interface EventAttachment {
        fileId?: string;
        fileUrl?: string;
        iconLink?: string;
        mimeType?: string;
        title?: string;
      }
      interface EventAttendee {
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
      interface EventCreator {
        displayName?: string;
        email?: string;
        id?: string;
        self?: boolean;
      }
      interface EventDateTime {
        date?: string;
        dateTime?: string;
        timeZone?: string;
      }
      interface EventExtendedProperties {
        private?: Record<string, string>;
        shared?: Record<string, string>;
      }
      interface EventGadget {
        display?: string;
        height?: number;
        iconLink?: string;
        link?: string;
        preferences?: object;
        title?: string;
        type?: string;
        width?: number;
      }
      interface EventOrganizer {
        displayName?: string;
        email?: string;
        id?: string;
        self?: boolean;
      }
      interface EventReminder {
        method?: string;
        minutes?: number;
      }
      interface EventReminders {
        overrides?: Calendar.Schema.EventReminder[];
        useDefault?: boolean;
      }
      interface EventSource {
        title?: string;
        url?: string;
      }
      interface Events {
        accessRole?: string;
        defaultReminders?: Calendar.Schema.EventReminder[];
        description?: string;
        etag?: string;
        items?: Calendar.Schema.Event[];
        kind?: string;
        nextPageToken?: string;
        nextSyncToken?: string;
        summary?: string;
        timeZone?: string;
        updated?: string;
      }
      interface FreeBusyCalendar {
        busy?: Calendar.Schema.TimePeriod[];
        errors?: Calendar.Schema.Error[];
      }
      interface FreeBusyGroup {
        calendars?: string[];
        errors?: Calendar.Schema.Error[];
      }
      interface FreeBusyRequest {
        calendarExpansionMax?: number;
        groupExpansionMax?: number;
        items?: Calendar.Schema.FreeBusyRequestItem[];
        timeMax?: string;
        timeMin?: string;
        timeZone?: string;
      }
      interface FreeBusyRequestItem {
        id?: string;
      }
      interface FreeBusyResponse {
        calendars?: object;
        groups?: object;
        kind?: string;
        timeMax?: string;
        timeMin?: string;
      }
      interface Setting {
        etag?: string;
        id?: string;
        kind?: string;
        value?: string;
      }
      interface Settings {
        etag?: string;
        items?: Calendar.Schema.Setting[];
        kind?: string;
        nextPageToken?: string;
        nextSyncToken?: string;
      }
      interface TimePeriod {
        end?: string;
        start?: string;
      }
    }
  }
  interface Calendar {
    Acl?: Calendar.Collection.AclCollection;
    CalendarList?: Calendar.Collection.CalendarListCollection;
    Calendars?: Calendar.Collection.CalendarsCollection;
    Channels?: Calendar.Collection.ChannelsCollection;
    Colors?: Calendar.Collection.ColorsCollection;
    Events?: Calendar.Collection.EventsCollection;
    Freebusy?: Calendar.Collection.FreebusyCollection;
    Settings?: Calendar.Collection.SettingsCollection;
    // Create a new instance of AclRule
    newAclRule(): Calendar.Schema.AclRule;
    // Create a new instance of AclRuleScope
    newAclRuleScope(): Calendar.Schema.AclRuleScope;
    // Create a new instance of Calendar
    newCalendar(): Calendar.Schema.Calendar;
    // Create a new instance of CalendarListEntry
    newCalendarListEntry(): Calendar.Schema.CalendarListEntry;
    // Create a new instance of CalendarListEntryNotificationSettings
    newCalendarListEntryNotificationSettings(): Calendar.Schema.CalendarListEntryNotificationSettings;
    // Create a new instance of CalendarNotification
    newCalendarNotification(): Calendar.Schema.CalendarNotification;
    // Create a new instance of Channel
    newChannel(): Calendar.Schema.Channel;
    // Create a new instance of ConferenceData
    newConferenceData(): Calendar.Schema.ConferenceData;
    // Create a new instance of ConferenceParameters
    newConferenceParameters(): Calendar.Schema.ConferenceParameters;
    // Create a new instance of ConferenceParametersAddOnParameters
    newConferenceParametersAddOnParameters(): Calendar.Schema.ConferenceParametersAddOnParameters;
    // Create a new instance of ConferenceProperties
    newConferenceProperties(): Calendar.Schema.ConferenceProperties;
    // Create a new instance of ConferenceRequestStatus
    newConferenceRequestStatus(): Calendar.Schema.ConferenceRequestStatus;
    // Create a new instance of ConferenceSolution
    newConferenceSolution(): Calendar.Schema.ConferenceSolution;
    // Create a new instance of ConferenceSolutionKey
    newConferenceSolutionKey(): Calendar.Schema.ConferenceSolutionKey;
    // Create a new instance of CreateConferenceRequest
    newCreateConferenceRequest(): Calendar.Schema.CreateConferenceRequest;
    // Create a new instance of EntryPoint
    newEntryPoint(): Calendar.Schema.EntryPoint;
    // Create a new instance of Event
    newEvent(): Calendar.Schema.Event;
    // Create a new instance of EventAttachment
    newEventAttachment(): Calendar.Schema.EventAttachment;
    // Create a new instance of EventAttendee
    newEventAttendee(): Calendar.Schema.EventAttendee;
    // Create a new instance of EventCreator
    newEventCreator(): Calendar.Schema.EventCreator;
    // Create a new instance of EventDateTime
    newEventDateTime(): Calendar.Schema.EventDateTime;
    // Create a new instance of EventExtendedProperties
    newEventExtendedProperties(): Calendar.Schema.EventExtendedProperties;
    // Create a new instance of EventGadget
    newEventGadget(): Calendar.Schema.EventGadget;
    // Create a new instance of EventOrganizer
    newEventOrganizer(): Calendar.Schema.EventOrganizer;
    // Create a new instance of EventReminder
    newEventReminder(): Calendar.Schema.EventReminder;
    // Create a new instance of EventReminders
    newEventReminders(): Calendar.Schema.EventReminders;
    // Create a new instance of EventSource
    newEventSource(): Calendar.Schema.EventSource;
    // Create a new instance of FreeBusyRequest
    newFreeBusyRequest(): Calendar.Schema.FreeBusyRequest;
    // Create a new instance of FreeBusyRequestItem
    newFreeBusyRequestItem(): Calendar.Schema.FreeBusyRequestItem;
  }
}

declare var Calendar: GoogleAppsScript.Calendar;
