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
                insert(
                    resource: Schema.AclRule,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.AclRule;
                // Returns the rules in the access control list for the calendar.
                list(calendarId: string): Calendar.Schema.Acl;
                // Returns the rules in the access control list for the calendar.
                list(calendarId: string, optionalArgs: object): Calendar.Schema.Acl;
                // Returns the rules in the access control list for the calendar.
                list(calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Acl;
                // Updates an access control rule. This method supports patch semantics.
                patch(resource: Schema.AclRule, calendarId: string, ruleId: string): Calendar.Schema.AclRule;
                // Updates an access control rule. This method supports patch semantics.
                patch(
                    resource: Schema.AclRule,
                    calendarId: string,
                    ruleId: string,
                    optionalArgs: object,
                ): Calendar.Schema.AclRule;
                // Updates an access control rule. This method supports patch semantics.
                patch(
                    resource: Schema.AclRule,
                    calendarId: string,
                    ruleId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.AclRule;
                // Deletes an access control rule.
                remove(calendarId: string, ruleId: string): void;
                // Deletes an access control rule.
                remove(calendarId: string, ruleId: string, optionalArgs: object, headers: object): void;
                // Updates an access control rule.
                update(resource: Schema.AclRule, calendarId: string, ruleId: string): Calendar.Schema.AclRule;
                // Updates an access control rule.
                update(
                    resource: Schema.AclRule,
                    calendarId: string,
                    ruleId: string,
                    optionalArgs: object,
                ): Calendar.Schema.AclRule;
                // Updates an access control rule.
                update(
                    resource: Schema.AclRule,
                    calendarId: string,
                    ruleId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.AclRule;
                // Watch for changes to ACL resources.
                watch(resource: Schema.Channel, calendarId: string): Calendar.Schema.Channel;
                // Watch for changes to ACL resources.
                watch(resource: Schema.Channel, calendarId: string, optionalArgs: object): Calendar.Schema.Channel;
                // Watch for changes to ACL resources.
                watch(
                    resource: Schema.Channel,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Channel;
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
                insert(
                    resource: Schema.CalendarListEntry,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.CalendarListEntry;
                // Returns the calendars on the user's calendar list.
                list(): Calendar.Schema.CalendarList;
                // Returns the calendars on the user's calendar list.
                list(optionalArgs: object): Calendar.Schema.CalendarList;
                // Returns the calendars on the user's calendar list.
                list(optionalArgs: object, headers: object): Calendar.Schema.CalendarList;
                // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
                patch(resource: Schema.CalendarListEntry, calendarId: string): Calendar.Schema.CalendarListEntry;
                // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
                patch(
                    resource: Schema.CalendarListEntry,
                    calendarId: string,
                    optionalArgs: object,
                ): Calendar.Schema.CalendarListEntry;
                // Updates an existing calendar on the user's calendar list. This method supports patch semantics.
                patch(
                    resource: Schema.CalendarListEntry,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.CalendarListEntry;
                // Removes a calendar from the user's calendar list.
                remove(calendarId: string): void;
                // Removes a calendar from the user's calendar list.
                remove(calendarId: string, optionalArgs: object, headers: object): void;
                // Updates an existing calendar on the user's calendar list.
                update(resource: Schema.CalendarListEntry, calendarId: string): Calendar.Schema.CalendarListEntry;
                // Updates an existing calendar on the user's calendar list.
                update(
                    resource: Schema.CalendarListEntry,
                    calendarId: string,
                    optionalArgs: object,
                ): Calendar.Schema.CalendarListEntry;
                // Updates an existing calendar on the user's calendar list.
                update(
                    resource: Schema.CalendarListEntry,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.CalendarListEntry;
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
                patch(
                    resource: Schema.Calendar,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Calendar;
                // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
                remove(calendarId: string): void;
                // Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
                remove(calendarId: string, optionalArgs: object, headers: object): void;
                // Updates metadata for a calendar.
                update(resource: Schema.Calendar, calendarId: string): Calendar.Schema.Calendar;
                // Updates metadata for a calendar.
                update(
                    resource: Schema.Calendar,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Calendar;
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
                import(
                    resource: Schema.Event,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Event;
                // Creates an event.
                insert(resource: Schema.Event, calendarId: string): Calendar.Schema.Event;
                // Creates an event.
                insert(resource: Schema.Event, calendarId: string, optionalArgs: object): Calendar.Schema.Event;
                // Creates an event.
                insert(
                    resource: Schema.Event,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Event;
                // Returns instances of the specified recurring event.
                instances(calendarId: string, eventId: string): Calendar.Schema.Events;
                // Returns instances of the specified recurring event.
                instances(calendarId: string, eventId: string, optionalArgs: object): Calendar.Schema.Events;
                // Returns instances of the specified recurring event.
                instances(
                    calendarId: string,
                    eventId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Events;
                // Returns events on the specified calendar.
                list(calendarId: string): Calendar.Schema.Events;
                // Returns events on the specified calendar.
                list(calendarId: string, optionalArgs: object): Calendar.Schema.Events;
                // Returns events on the specified calendar.
                list(calendarId: string, optionalArgs: object, headers: object): Calendar.Schema.Events;
                // Moves an event to another calendar, i.e. changes an event's organizer.
                move(calendarId: string, eventId: string, destination: string): Calendar.Schema.Event;
                // Moves an event to another calendar, i.e. changes an event's organizer.
                move(
                    calendarId: string,
                    eventId: string,
                    destination: string,
                    optionalArgs: object,
                ): Calendar.Schema.Event;
                // Moves an event to another calendar, i.e. changes an event's organizer.
                move(
                    calendarId: string,
                    eventId: string,
                    destination: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Event;
                // Updates an event. This method supports patch semantics.
                patch(resource: Schema.Event, calendarId: string, eventId: string): Calendar.Schema.Event;
                // Updates an event. This method supports patch semantics.
                patch(
                    resource: Schema.Event,
                    calendarId: string,
                    eventId: string,
                    optionalArgs: object,
                ): Calendar.Schema.Event;
                // Updates an event. This method supports patch semantics.
                patch(
                    resource: Schema.Event,
                    calendarId: string,
                    eventId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Event;
                // Creates an event based on a simple text string.
                quickAdd(calendarId: string, text: string): Calendar.Schema.Event;
                // Creates an event based on a simple text string.
                quickAdd(calendarId: string, text: string, optionalArgs: object): Calendar.Schema.Event;
                // Creates an event based on a simple text string.
                quickAdd(
                    calendarId: string,
                    text: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Event;
                // Deletes an event.
                remove(calendarId: string, eventId: string): void;
                // Deletes an event.
                remove(calendarId: string, eventId: string, optionalArgs: object): void;
                // Deletes an event.
                remove(calendarId: string, eventId: string, optionalArgs: object, headers: object): void;
                // Updates an event.
                update(resource: Schema.Event, calendarId: string, eventId: string): Calendar.Schema.Event;
                // Updates an event.
                update(
                    resource: Schema.Event,
                    calendarId: string,
                    eventId: string,
                    optionalArgs: object,
                ): Calendar.Schema.Event;
                // Updates an event.
                update(
                    resource: Schema.Event,
                    calendarId: string,
                    eventId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Event;
                // Watch for changes to Events resources.
                watch(resource: Schema.Channel, calendarId: string): Calendar.Schema.Channel;
                // Watch for changes to Events resources.
                watch(resource: Schema.Channel, calendarId: string, optionalArgs: object): Calendar.Schema.Channel;
                // Watch for changes to Events resources.
                watch(
                    resource: Schema.Channel,
                    calendarId: string,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.Channel;
            }
            interface FreebusyCollection {
                // Returns free/busy information for a set of calendars.
                query(resource: Schema.FreeBusyRequest): Calendar.Schema.FreeBusyResponse;
                // Returns free/busy information for a set of calendars.
                query(
                    resource: Schema.FreeBusyRequest,
                    optionalArgs: object,
                    headers: object,
                ): Calendar.Schema.FreeBusyResponse;
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
                etag?: string | undefined;
                items?: Calendar.Schema.AclRule[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
            }
            interface AclRule {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                role?: string | undefined;
                scope?: Calendar.Schema.AclRuleScope | undefined;
            }
            interface AclRuleScope {
                type?: string | undefined;
                value?: string | undefined;
            }
            interface Calendar {
                conferenceProperties?: Calendar.Schema.ConferenceProperties | undefined;
                description?: string | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                location?: string | undefined;
                summary?: string | undefined;
                timeZone?: string | undefined;
            }
            interface CalendarList {
                etag?: string | undefined;
                items?: Calendar.Schema.CalendarListEntry[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
            }
            interface CalendarListEntry {
                accessRole?: string | undefined;
                backgroundColor?: string | undefined;
                colorId?: string | undefined;
                conferenceProperties?: Calendar.Schema.ConferenceProperties | undefined;
                defaultReminders?: Calendar.Schema.EventReminder[] | undefined;
                deleted?: boolean | undefined;
                description?: string | undefined;
                etag?: string | undefined;
                foregroundColor?: string | undefined;
                hidden?: boolean | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                location?: string | undefined;
                notificationSettings?: Calendar.Schema.CalendarListEntryNotificationSettings | undefined;
                primary?: boolean | undefined;
                selected?: boolean | undefined;
                summary?: string | undefined;
                summaryOverride?: string | undefined;
                timeZone?: string | undefined;
            }
            interface CalendarListEntryNotificationSettings {
                notifications?: Calendar.Schema.CalendarNotification[] | undefined;
            }
            interface CalendarNotification {
                method?: string | undefined;
                type?: string | undefined;
            }
            interface Channel {
                address?: string | undefined;
                expiration?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                params?: object | undefined;
                payload?: boolean | undefined;
                resourceId?: string | undefined;
                resourceUri?: string | undefined;
                token?: string | undefined;
                type?: string | undefined;
            }
            interface ColorDefinition {
                background?: string | undefined;
                foreground?: string | undefined;
            }
            interface Colors {
                calendar?: object | undefined;
                event?: object | undefined;
                kind?: string | undefined;
                updated?: string | undefined;
            }
            interface ConferenceData {
                conferenceId?: string | undefined;
                conferenceSolution?: Calendar.Schema.ConferenceSolution | undefined;
                createRequest?: Calendar.Schema.CreateConferenceRequest | undefined;
                entryPoints?: Calendar.Schema.EntryPoint[] | undefined;
                notes?: string | undefined;
                parameters?: Calendar.Schema.ConferenceParameters | undefined;
                signature?: string | undefined;
            }
            interface ConferenceParameters {
                addOnParameters?: Calendar.Schema.ConferenceParametersAddOnParameters | undefined;
            }
            interface ConferenceParametersAddOnParameters {
                parameters?: Record<string, string> | undefined;
            }
            interface ConferenceProperties {
                allowedConferenceSolutionTypes?: string[] | undefined;
            }
            interface ConferenceRequestStatus {
                statusCode?: string | undefined;
            }
            interface ConferenceSolution {
                iconUri?: string | undefined;
                key?: Calendar.Schema.ConferenceSolutionKey | undefined;
                name?: string | undefined;
            }
            interface ConferenceSolutionKey {
                type?: string | undefined;
            }
            interface CreateConferenceRequest {
                conferenceSolutionKey?: Calendar.Schema.ConferenceSolutionKey | undefined;
                requestId?: string | undefined;
                status?: Calendar.Schema.ConferenceRequestStatus | undefined;
            }
            interface EntryPoint {
                accessCode?: string | undefined;
                entryPointFeatures?: string[] | undefined;
                entryPointType?: string | undefined;
                label?: string | undefined;
                meetingCode?: string | undefined;
                passcode?: string | undefined;
                password?: string | undefined;
                pin?: string | undefined;
                regionCode?: string | undefined;
                uri?: string | undefined;
            }
            interface Error {
                domain?: string | undefined;
                reason?: string | undefined;
            }
            interface Event {
                anyoneCanAddSelf?: boolean | undefined;
                attachments?: Calendar.Schema.EventAttachment[] | undefined;
                attendees?: Calendar.Schema.EventAttendee[] | undefined;
                attendeesOmitted?: boolean | undefined;
                colorId?: string | undefined;
                conferenceData?: Calendar.Schema.ConferenceData | undefined;
                created?: string | undefined;
                creator?: Calendar.Schema.EventCreator | undefined;
                description?: string | undefined;
                end?: Calendar.Schema.EventDateTime | undefined;
                endTimeUnspecified?: boolean | undefined;
                etag?: string | undefined;
                eventType?: "default" | "outOfOffice" | "focusTime" | "workingLocation";
                extendedProperties?: Calendar.Schema.EventExtendedProperties | undefined;
                gadget?: Calendar.Schema.EventGadget | undefined;
                guestsCanInviteOthers?: boolean | undefined;
                guestsCanModify?: boolean | undefined;
                guestsCanSeeOtherGuests?: boolean | undefined;
                hangoutLink?: string | undefined;
                htmlLink?: string | undefined;
                iCalUID?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                location?: string | undefined;
                locked?: boolean | undefined;
                organizer?: Calendar.Schema.EventOrganizer | undefined;
                originalStartTime?: Calendar.Schema.EventDateTime | undefined;
                privateCopy?: boolean | undefined;
                recurrence?: string[] | undefined;
                recurringEventId?: string | undefined;
                reminders?: Calendar.Schema.EventReminders | undefined;
                sequence?: number | undefined;
                source?: Calendar.Schema.EventSource | undefined;
                start?: Calendar.Schema.EventDateTime | undefined;
                status?: string | undefined;
                summary?: string | undefined;
                transparency?: string | undefined;
                updated?: string | undefined;
                visibility?: string | undefined;
                workingLocationProperties?: Calendar.Schema.EventWorkingLocationProperties | undefined;
            }
            interface EventAttachment {
                fileId?: string | undefined;
                fileUrl?: string | undefined;
                iconLink?: string | undefined;
                mimeType?: string | undefined;
                title?: string | undefined;
            }
            interface EventAttendee {
                additionalGuests?: number | undefined;
                comment?: string | undefined;
                displayName?: string | undefined;
                email?: string | undefined;
                id?: string | undefined;
                optional?: boolean | undefined;
                organizer?: boolean | undefined;
                resource?: boolean | undefined;
                responseStatus?: string | undefined;
                self?: boolean | undefined;
            }
            interface EventCreator {
                displayName?: string | undefined;
                email?: string | undefined;
                id?: string | undefined;
                self?: boolean | undefined;
            }
            interface EventDateTime {
                date?: string | undefined;
                dateTime?: string | undefined;
                timeZone?: string | undefined;
            }
            interface EventExtendedProperties {
                private?: Record<string, string> | undefined;
                shared?: Record<string, string> | undefined;
            }
            interface EventGadget {
                display?: string | undefined;
                height?: number | undefined;
                iconLink?: string | undefined;
                link?: string | undefined;
                preferences?: object | undefined;
                title?: string | undefined;
                type?: string | undefined;
                width?: number | undefined;
            }
            interface EventOrganizer {
                displayName?: string | undefined;
                email?: string | undefined;
                id?: string | undefined;
                self?: boolean | undefined;
            }
            interface EventReminder {
                method?: string | undefined;
                minutes?: number | undefined;
            }
            interface EventReminders {
                overrides?: Calendar.Schema.EventReminder[] | undefined;
                useDefault?: boolean | undefined;
            }
            interface EventSource {
                title?: string | undefined;
                url?: string | undefined;
            }
            interface Events {
                accessRole?: string | undefined;
                defaultReminders?: Calendar.Schema.EventReminder[] | undefined;
                description?: string | undefined;
                etag?: string | undefined;
                items?: Calendar.Schema.Event[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
                summary?: string | undefined;
                timeZone?: string | undefined;
                updated?: string | undefined;
            }
            interface FreeBusyCalendar {
                busy?: Calendar.Schema.TimePeriod[] | undefined;
                errors?: Calendar.Schema.Error[] | undefined;
            }
            interface FreeBusyGroup {
                calendars?: string[] | undefined;
                errors?: Calendar.Schema.Error[] | undefined;
            }
            interface FreeBusyRequest {
                calendarExpansionMax?: number | undefined;
                groupExpansionMax?: number | undefined;
                items?: Calendar.Schema.FreeBusyRequestItem[] | undefined;
                timeMax?: string | undefined;
                timeMin?: string | undefined;
                timeZone?: string | undefined;
            }
            interface FreeBusyRequestItem {
                id?: string | undefined;
            }
            interface FreeBusyResponse {
                calendars?: object | undefined;
                groups?: object | undefined;
                kind?: string | undefined;
                timeMax?: string | undefined;
                timeMin?: string | undefined;
            }
            interface Setting {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                value?: string | undefined;
            }
            interface Settings {
                etag?: string | undefined;
                items?: Calendar.Schema.Setting[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
            }
            interface TimePeriod {
                end?: string | undefined;
                start?: string | undefined;
            }
            interface EventWorkingLocationPropertiesOfficeLocation {
                buildingId?: string | undefined;
                floorId?: string | undefined;
                floorSectionId?: string | undefined;
                deskId?: string | undefined;
                label?: string | undefined;
            }
            interface EventWorkingLocationPropertiesCustomLocation {
                label: string;
            }
            interface EventWorkingLocationProperties {
                type?: string | undefined;
                homeOffice?: object | undefined;
                customLocation?: EventWorkingLocationPropertiesCustomLocation | undefined;
                officeLocation?: EventWorkingLocationPropertiesOfficeLocation | undefined;
            }
        }
    }
    interface Calendar {
        Acl: Calendar.Collection.AclCollection;
        CalendarList: Calendar.Collection.CalendarListCollection;
        Calendars: Calendar.Collection.CalendarsCollection;
        Channels: Calendar.Collection.ChannelsCollection;
        Colors: Calendar.Collection.ColorsCollection;
        Events: Calendar.Collection.EventsCollection;
        Freebusy: Calendar.Collection.FreebusyCollection;
        Settings: Calendar.Collection.SettingsCollection;
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
        // Create a new instance of EventWorkingLocationProperties
        newEventWorkingLocationProperties(): Calendar.Schema.EventWorkingLocationProperties;
        // Create a new instance of EventWorkingLocationPropertiesCustomLocation
        newEventWorkingLocationPropertiesCustomLocation(): Calendar.Schema.EventWorkingLocationPropertiesCustomLocation;
        // Create a new instance of EventWorkingLocationPropertiesOfficeLocation
        newEventWorkingLocationPropertiesOfficeLocation(): Calendar.Schema.EventWorkingLocationPropertiesOfficeLocation;
    }
}

/**
 * The `Calendar` advanced service must be enabled.
 */
declare var Calendar: GoogleAppsScript.Calendar | undefined;
