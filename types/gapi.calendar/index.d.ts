/// <reference types="gapi" />

declare namespace gapi.client.calendar {
    export class freebusy {
        static query(parameters: FreeBusyQueryParameters): HttpRequest<FreeBusy>;
    }

    interface FreeBusyQueryParameters {
        timeMin: datetime;
        timeMax: datetime;
        timeZone?: string | undefined;
        groupExpansionMax?: integer | undefined;
        calendarExpansionMax?: integer | undefined;
        items: { id: string }[];
    }

    interface FreeBusy {
        kind: "calendar#freeBusy";
        timeMin: datetime;
        timeMax: datetime;
        groups: {
            [key: string]: {
                errors?: {
                    domain: string;
                    reason: string;
                }[] | undefined;
                calendars: string[];
            };
        };
        calendars: {
            [key: string]: {
                errors?: {
                    domain: string;
                    reason: string;
                }[] | undefined;
                busy: {
                    start: datetime;
                    end: datetime;
                }[];
            };
        };
    }

    export class acl {
        static insert(parameters: AclInsertParameters): HttpRequest<Acl>;
        static get(parameters: AclGetParameters): HttpRequest<Acl>;
        static update(parameters: AclUpdateParameters): HttpRequest<Acl>;
        static delete(parameters: AclDeleteParameters): HttpRequest<void>;
    }

    // The type of the scope. Possible values are:
    type ScopeType =
        // The public scope. This is the default value.
        // Note: The permissions granted to the "default", or public, scope apply to any user, authenticated or not.
        | "default"
        | // Limits the scope to a single user.
        "user"
        | // Limits the scope to a group.
        "group"
        | // Limits the scope to a domain.
        "domain";

    interface Acl {
        kind: "calendar#aclRule";
        etag: etag;
        id: string;
        scope: {
            type: ScopeType;
            value: string;
        };
        role: AccessRole;
    }

    interface AclInsertParameters {
        calendarId: string;

        // Acl resource
        role: AccessRole;
        scope: {
            type: ScopeType;
            value?: string | undefined;
        };
    }

    interface AclGetParameters {
        calendarId: string;
        ruleId: string;
    }

    interface AclUpdateParameters extends AclInsertParameters {
        ruleId: string;
    }

    interface AclDeleteParameters extends AclGetParameters {
    }

    export class calendarList {
        static list(parameters?: CalendarListListParameters): HttpRequest<CalendarList>;
        static insert(parameters: CalendarListInsertParameters): HttpRequest<CalendarListEntry>;
    }

    type AccessRoleWithoutNone =
        // The user has read access to free/busy information.
        | "freeBusyReader"
        | // The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
        "reader"
        | // The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
        "writer"
        | // The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
        "owner";

    // The user's access role for this calendar. Read-only. Possible values are:
    type AccessRole =
        // The user has no access.
        | "none"
        | AccessRoleWithoutNone;

    interface CalendarListListParameters {
        maxResults?: integer | undefined;
        // The minimum access role for the user in the returned entries. Optional. The default is no restriction. Acceptable values are:
        minAccessRole?: AccessRoleWithoutNone | undefined;
        pageToken?: string | undefined;
        showDeleted?: boolean | undefined;
        showHidden?: boolean | undefined;
        syncToken?: string | undefined;
    }

    interface CalendarListInsertParameters {
        // Parameters
        // Optional query parameters
        colorRgbFormat?: boolean | undefined;

        // CalendarList resource
        resource: CalendarListInput;
    }

    interface CalendarListInput {
        // Required Properties
        id: string;

        // Optional Properties
        backgroundColor?: string | undefined;
        colorId?: string | undefined;
        defaultReminders?: {
            method: ReminderMethod;
            minutes: integer;
        }[] | undefined;
        foregroundColor?: string | undefined;
        hidden?: boolean | undefined;
        notificationSettings?: {
            notifications: {
                type: NotificationType;
                method: string;
            }[];
        } | undefined;
        selected?: boolean | undefined;
        summaryOverride?: string | undefined;
    }

    interface CalendarList {
        kind: "calendar#calendarList";
        etag: etag;

        /**
         * Token used to access the next page of this result.
         * Omitted if no further results are available, in which case nextSyncToken is provided.
         */
        nextPageToken?: string | undefined;

        /**
         * Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
         * Omitted if further results are available, in which case nextPageToken is provided.
         */
        nextSyncToken?: string | undefined;

        items: CalendarListEntry[];
    }

    // The type of notification. Possible values are:
    type NotificationType =
        // Notification sent when a new event is put on the calendar.
        | "eventCreation"
        | // Notification sent when an event is changed.
        "eventChange"
        | // Notification sent when an event is cancelled.
        "eventCancellation"
        | // Notification sent when an event is changed.
        "eventResponse"
        | // An agenda with the events of the day (sent out in the morning).
        "agenda";

    interface CalendarListEntry {
        kind: "calendar#calendarListEntry";
        etag: etag;
        id: string;
        summary: string;
        description?: string | undefined;
        location?: string | undefined;
        timeZone?: string | undefined;
        summaryOverride?: string | undefined;
        colorId?: string | undefined;
        backgroundColor?: string | undefined;
        foregroundColor?: string | undefined;
        hidden?: boolean | undefined;
        selected?: boolean | undefined;
        // The effective access role that the authenticated user has on the calendar. Read-only.
        accessRole: AccessRoleWithoutNone;
        defaultReminders: {
            method: ReminderMethod;
            minutes: integer;
        }[];
        notificationSettings?: {
            notifications: {
                type: NotificationType;
                method: string;
            }[];
        } | undefined;
        primary?: boolean | undefined;
        deleted?: boolean | undefined;
    }

    export class calendars {
        static insert(parameters: CalendarsInsertParameters): HttpRequest<Calendar>;
        static update(parameters: CalendarsUpdateParameters): HttpRequest<Calendar>;
        static delete(parameters: CalendarsDeleteParameters): HttpRequest<void>;
    }

    interface CalendarsUpdateParameters {
        calendarId: string;

        // Calendars resource
        // Optional Properties
        description?: string | undefined;
        location?: string | undefined;
        summary?: string | undefined;
        timeZone?: string | undefined;
    }

    interface CalendarsInsertParameters {
        // Calendars resource
        // Required Properties
        summary: string;

        description?: string | undefined;
        location?: string | undefined;
        timeZone?: string | undefined;
    }

    interface CalendarsDeleteParameters {
        calendarId: string;
    }

    interface Calendar {
        kind: "calendar#calendar";
        etag: etag;
        id: string;
        summary: string;
        description?: string | undefined;
        location?: string | undefined;
        timeZone?: string | undefined;
    }

    export class events {
        static list(parameters: EventsListParameters): HttpRequest<Events>;
        static insert(parameters: EventsInsertParameters): HttpRequest<Event>;
        static update(parameters: EventsUpdateParameters): HttpRequest<Event>;
        static get(parameters: EventsGetParameters): HttpRequest<Event>;

        // delete the existing event from calendar
        static delete(parameters: EventsDeleteParameters): HttpRequest<Event>;
    }

    interface EventsGetParameters {
        calendarId: string;
        eventId: string;

        alwaysIncludeEmail?: boolean | undefined;
        maxAttendees?: integer | undefined;
        timeZone?: string | undefined;
    }

    interface EventsInsertParameters {
        calendarId: string;

        maxAttendees?: integer | undefined;
        sendNotifications?: boolean | undefined;
        supportsAttachments?: boolean | undefined;

        // Event resource
        resource: EventInput;
    }

    interface EventsUpdateParameters {
        calendarId: string;
        eventId: string;

        alwaysIncludeEmail?: boolean | undefined;
        maxAttendees?: integer | undefined;
        sendNotifications?: boolean | undefined;
        supportsAttachments?: boolean | undefined;

        // Event resource
        resource: EventInput;
    }

    // calendarId: 'primary' or the calendar from which the event to be deleted
    // eventId: the event that need to be deleted from calendar (Event.id from the list/insert response)
    interface EventsDeleteParameters {
        calendarId: string;
        eventId: string;

        sendNotifications?: boolean | undefined;
    }

    interface EventInput {
        // Required Properties
        attachments?: {
            fileUrl: string;
        }[] | undefined;
        attendees?: {
            email: string;
            displayName?: string | undefined;
            optional?: boolean | undefined;
            responseStatus?: AttendeeResponseStatus | undefined;
            comment?: string | undefined;
            additionalGuests?: integer | undefined;
        }[] | undefined;
        end: {
            date?: date | undefined;
            dateTime?: datetime | undefined;
            timeZone?: string | undefined;
        };
        reminders?: {
            overrides: {
                method: string;
                minutes: integer;
            }[];
            useDefault: boolean;
        } | undefined;
        start: {
            date?: date | undefined;
            dateTime?: datetime | undefined;
            timeZone?: string | undefined;
        };

        // Optional Properties
        anyoneCanAddSelf?: boolean | undefined;
        colorId?: string | undefined;
        description?: string | undefined;
        extendedProperties?: {
            private: {
                [key: string]: string;
            };
            shared: {
                [key: string]: string;
            };
        } | undefined;
        gadget?: {
            display?: GadgetDisplayMode | undefined;
            height: integer;
            iconLink: string;
            link: string;
            preferences: {
                [key: string]: string;
            };
            title: string;
            type: string;
            width: integer;
        } | undefined;
        guestsCanInviteOthers?: boolean | undefined;
        guestsCanSeeOtherGuests?: boolean | undefined;
        id?: string | undefined;
        location?: string | undefined;
        originalStartTime?: {
            date: date;
            dateTime: datetime;
            timeZone: string;
        } | undefined;
        recurrence?: string[] | undefined;
        sequence?: integer | undefined;
        source?: {
            url: string;
            title: string;
        } | undefined;
        status?: EventStatus | undefined;
        summary?: string | undefined;
        transparency?: EventTransparency | undefined;
        visibility?: EventVisibility | undefined;
    }

    // The order of the events returned in the result. Optional. The default is an unspecified, stable order.
    // Acceptable values are:
    type EventsOrder =
        // Order by the start date/time (ascending). This is only available when querying single events (i.e. the parameter singleEvents is True)
        | "startTime"
        | // Order by last modification time (ascending).
        "updated";

    // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request.
    // It makes the result of this list request contain only entries that have changed since then.
    // All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
    // There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
    // These are:
    type SyncToken =
        | "iCalUID"
        | "orderBy"
        | "privateExtendedProperty"
        | "q"
        | "sharedExtendedProperty"
        | "timeMin"
        | "timeMax"
        | "updatedMin";

    interface EventsListParameters {
        calendarId: string;
        alwaysIncludeEmail?: boolean | undefined;
        iCalUID?: string | undefined;
        maxAttendees?: integer | undefined;
        maxResults?: integer | undefined;
        orderBy?: EventsOrder | undefined;
        pageToken?: string | undefined;
        privateExtendedProperty?: string | undefined;
        q?: string | undefined;
        sharedExtendedProperty?: string | undefined;
        showDeleted?: boolean | undefined;
        showHiddenInvitations?: boolean | undefined;
        singleEvents?: boolean | undefined;
        syncToken?: SyncToken | undefined;
        timeMax?: datetime | undefined;
        timeMin?: datetime | undefined;
        timeZone?: string | undefined;
        updatedMin?: datetime | undefined;
    }

    interface Events {
        kind: "calendar#events";
        etag: etag;
        summary: string;
        description: string;
        updated: datetime;
        timeZone: string;
        // The user's access role for this calendar. Read-only. Possible values are:
        accessRole: AccessRole;
        defaultReminders: {
            method: ReminderMethod;
            minutes: integer;
        }[];
        nextPageToken?: string | undefined;
        nextSyncToken?: string | undefined;
        items: Event[];
    }

    type etag = string;
    type datetime = string;
    type date = string;
    type integer = number;

    // The attendee's response status. Possible values are:
    type AttendeeResponseStatus =
        // The attendee has not responded to the invitation.
        | "needsAction"
        | // The attendee has declined the invitation.
        "declined"
        | // The attendee has tentatively accepted the invitation.
        "tentative"
        | // The attendee has accepted the invitation.
        "accepted";

    // The gadget's display mode. Optional. Possible values are:
    type GadgetDisplayMode =
        // The gadget displays next to the event's title in the calendar view.
        | "icon"
        | // The gadget displays when the event is clicked.
        "chip";

    // The method used by this reminder. Possible values are:
    type ReminderMethod =
        // Reminders are sent via email.
        | "email"
        | // Reminders are sent via SMS. These are only available for Google Apps for Work, Education, and Government customers. Requests to set SMS reminders for other account types are ignored.
        "sms"
        | // Reminders are sent via a UI popup.
        "popup";

    // Status of the event. Optional. Possible values are:
    type EventStatus =
        // The event is confirmed. This is the default status.
        | "confirmed"
        | // The event is tentatively confirmed.
        "tentative"
        | // The event is cancelled.
        "cancelled";

    // Whether the event blocks time on the calendar. Optional. Possible values are:
    type EventTransparency =
        // The event blocks time on the calendar. This is the default value.
        | "opaque"
        | // The event does not block time on the calendar.
        "transparent";

    // Visibility of the event. Optional. Possible values are:
    type EventVisibility =
        // Uses the default visibility for events on the calendar. This is the default value.
        | "default"
        | // The event is public and event details are visible to all readers of the calendar.
        "public"
        | // The event is private and only event attendees may view event details.
        "private"
        | // The event is private. This value is provided for compatibility reasons.
        "confidential";

    class Event {
        kind: "calendar#event";
        etag: etag;
        id: string;
        status?: EventStatus | undefined;
        htmlLink: string;
        created: datetime;
        updated: datetime;
        summary: string;
        description: string;
        location?: string | undefined;
        colorId?: string | undefined;

        // The creator of the event. Read-only.
        creator: {
            // The creator's Profile ID, if available.
            id?: string | undefined;

            // The creator's email address, if available.
            email?: string | undefined;

            // The creator's name, if available.
            displayName?: string | undefined;

            // Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
            self?: boolean | undefined;
        };

        // The organizer of the event.
        organizer: {
            // The organizer's Profile ID, if available.
            id?: string | undefined;

            // The organizer's email address, if available.
            email?: string | undefined;

            // The organizer's name, if available.
            displayName?: string | undefined;

            // Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
            self?: boolean | undefined;
        };

        // The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.
        start: {
            // The date, in the format "yyyy-mm-dd", if this is an all-day event.
            date?: date | undefined;

            // The time, as a combined date-time value (formatted according to RFC3339).
            // A time zone offset is required unless a time zone is explicitly specified in timeZone.
            dateTime?: datetime | undefined;

            // The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
            // For recurring events this field is required and specifies the time zone in which the recurrence is expanded.
            // For single events this field is optional and indicates a custom time zone for the event start/end.
            timeZone?: string | undefined;
        };

        // The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.
        end: {
            // The date, in the format "yyyy-mm-dd", if this is an all-day event.
            date?: date | undefined;

            // The time, as a combined date-time value (formatted according to RFC3339).
            // A time zone offset is required unless a time zone is explicitly specified in timeZone.
            dateTime?: datetime | undefined;

            // The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
            // For recurring events this field is required and specifies the time zone in which the recurrence is expanded.
            // For single events this field is optional and indicates a custom time zone for the event start/end.
            timeZone?: string | undefined;
        };

        //     Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True.
        // The default is False.
        endTimeUnspecified?: boolean | undefined;

        recurrence: string[];

        // For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.
        recurringEventId?: string | undefined;

        // Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
        originalStartTime?: {
            date: date;
            dateTime: datetime;
            timeZone?: string | undefined;
        } | undefined;

        transparency?: EventTransparency | undefined;
        visibility?: EventVisibility | undefined;
        iCalUID: string;
        sequence: integer;

        // The attendees of the event.
        attendees?: {
            id: string;
            email: string;
            displayName?: string | undefined;
            organizer: boolean;
            self: boolean;
            resource: boolean;
            optional?: boolean | undefined;
            responseStatus: AttendeeResponseStatus;
            comment?: string | undefined;
            additionalGuests?: integer | undefined;
        }[] | undefined;

        attendeesOmitted?: boolean | undefined;

        // Extended properties of the event.
        extendedProperties?: {
            private: {
                [key: string]: string;
            };
            shared: {
                [key: string]: string;
            };
        } | undefined;

        // An absolute link to the Google+ hangout associated with this event. Read-only.
        hangoutLink?: string | undefined;

        // A gadget that extends this event.
        gadget?: {
            type: string;
            title: string;
            link: string;
            iconLink: string;
            width?: integer | undefined;
            height?: integer | undefined;
            display?: GadgetDisplayMode | undefined;
            preferences: {
                [key: string]: string;
            };
        } | undefined;

        anyoneCanAddSelf?: boolean | undefined;
        guestsCanInviteOthers?: boolean | undefined;
        guestsCanModify?: boolean | undefined;
        guestsCanSeeOtherGuests?: boolean | undefined;
        privateCopy?: boolean | undefined;

        // Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.
        locked?: boolean | undefined;

        reminders: {
            useDefault: boolean;
            overrides?: {
                method: ReminderMethod;
                minutes: integer;
            }[] | undefined;
        };

        // Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme.
        // Can only be seen or modified by the creator of the event.
        source?: {
            url: string;
            title: string;
        } | undefined;

        // File attachments for the event. Currently only Google Drive attachments are supported.
        attachments?: {
            fileUrl: string;
            title: string;
            mimeType: string;
            iconLink: string;
            fileId: string;
        }[] | undefined;
    }
}
