// Type definitions for Google Calendar API 3.0
// Project: https://developers.google.com/google-apps/calendar/
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client.calendar {
  export class freebusy {
    static query(parameters: FreeBusyQueryParameters): HttpRequest<FreeBusy>;
  }

  interface FreeBusyQueryParameters {
    timeMin: datetime;
    timeMax: datetime;
    timeZone?: string;
    groupExpansionMax?: integer;
    calendarExpansionMax?: integer;
    items: {id: string}[];
  }

  interface FreeBusy {
    kind: 'calendar#freeBusy';
    timeMin: datetime;
    timeMax: datetime;
    groups: {
      (key: string): {
        errors?: {
          domain: string;
          reason: string;
        }[];
        calendars: string[];
      }
    };
    calendars: {
      (key: string): {
        errors?: {
          domain: string;
          reason: string;
        }[];
        busy: {
          start: datetime;
          end: datetime;
        }[];
      }
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
    'default' |
    // Limits the scope to a single user.
    'user' |
    // Limits the scope to a group.
    'group' |
    // Limits the scope to a domain.
    'domain';

  interface Acl {
    kind: 'calendar#aclRule';
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
      value?: string;
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
    'freeBusyReader' |
    // The user has read access to the calendar. Private events will appear to users with reader access, but event details will be hidden.
    'reader' |
    // The user has read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible.
    'writer' |
    // The user has ownership of the calendar. This role has all of the permissions of the writer role with the additional ability to see and manipulate ACLs.
    'owner';

  // The user's access role for this calendar. Read-only. Possible values are:
  type AccessRole =
    // The user has no access.
    'none' |
    AccessRoleWithoutNone;

  interface CalendarListListParameters {
    maxResults?: integer;
    // The minimum access role for the user in the returned entries. Optional. The default is no restriction. Acceptable values are:
    minAccessRole?: AccessRoleWithoutNone;
    pageToken?: string;
    showDeleted?: boolean;
    showHidden?: boolean;
    syncToken?: string;
  }

  interface CalendarListInsertParameters {
    // Parameters
    // Optional query parameters
    colorRgbFormat?: boolean;

    // CalendarList resource
    resource: CalendarListInput;
  }

  interface CalendarListInput {
    // Required Properties
    id: string;

    // Optional Properties
    backgroundColor?: string;
    colorId?: string;
    defaultReminders?: {
      method: ReminderMethod;
      minutes: integer;
    }[];
    foregroundColor?: string;
    hidden?: boolean;
    notificationSettings?: {
      notifications: {
        type: NotificationType;
        method: string;
      }[];
    };
    selected?: boolean;
    summaryOverride?: string;
  }

  interface CalendarList {
    kind: 'calendar#calendarList';
    etag: etag;

    /**
     * Token used to access the next page of this result.
     * Omitted if no further results are available, in which case nextSyncToken is provided.
     */
    nextPageToken?: string;

    /**
     * Token used at a later point in time to retrieve only the entries that have changed since this result was returned.
     * Omitted if further results are available, in which case nextPageToken is provided.
     */
    nextSyncToken?: string;

    items: CalendarListEntry[];
  }

  // The type of notification. Possible values are:
  type NotificationType =
    // Notification sent when a new event is put on the calendar.
    'eventCreation' |
    // Notification sent when an event is changed.
    'eventChange' |
    // Notification sent when an event is cancelled.
    'eventCancellation' |
    // Notification sent when an event is changed.
    'eventResponse' |
    // An agenda with the events of the day (sent out in the morning).
    'agenda';

  interface CalendarListEntry {
    kind: 'calendar#calendarListEntry';
    etag: etag;
    id: string;
    summary: string;
    description?: string;
    location?: string;
    timeZone?: string;
    summaryOverride?: string;
    colorId?: string;
    backgroundColor?: string;
    foregroundColor?: string;
    hidden?: boolean;
    selected?: boolean;
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
    };
    primary?: boolean;
    deleted?: boolean;
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
    description?: string;
    location?: string;
    summary?: string;
    timeZone?: string;
  }

  interface CalendarsInsertParameters {
    // Calendars resource
    // Required Properties
    summary: string;

    description?: string;
    location?: string;
    timeZone?: string;
  }

  interface CalendarsDeleteParameters {
    calendarId: string;
  }

  interface Calendar {
    kind: 'calendar#calendar';
    etag: etag;
    id: string;
    summary: string;
    description?: string;
    location?: string;
    timeZone?: string;
  }

  export class events {
    static list(parameters: EventsListParameters): HttpRequest<Events>;
    static insert(parameters: EventsInsertParameters): HttpRequest<Event>;
    static update(parameters: EventsUpdateParameters): HttpRequest<Event>;
    static get(parameters: EventsGetParameters): HttpRequest<Event>;
  }

  interface EventsGetParameters {
    calendarId: string;
    eventId: string;

    alwaysIncludeEmail?: boolean;
    maxAttendees?: integer;
    timeZone?: string;
  }

  interface EventsInsertParameters {
    calendarId: string;

    maxAttendees?: integer;
    sendNotifications?: boolean;
    supportsAttachments?: boolean;

    // Event resource
    resource: EventInput;
  }

  interface EventsUpdateParameters {
    calendarId: string;
    eventId: string;

    alwaysIncludeEmail?: boolean;
    maxAttendees?: integer;
    sendNotifications?: boolean;
    supportsAttachments?: boolean;

    // Event resource
    resource: EventInput;
  }

  interface EventInput {
    // Required Properties
    attachments?: {
      fileUrl: string;
    }[];
    attendees?: {
      email: string;
      displayName?: string;
      optional?: boolean;
      responseStatus?: AttendeeResponseStatus;
      comment?: string;
      additionalGuests?: integer;
    }[];
    end: {
      date?: date;
      dateTime?: datetime;
      timeZone?: string
    };
    reminders?: {
      overrides: {
        method: string;
        minutes: integer;
      }[];
      useDefault: boolean;
    };
    start: {
      date?: date;
      dateTime?: datetime;
      timeZone?: string;
    };

    // Optional Properties
    anyoneCanAddSelf?: boolean;
    colorId?: string;
    description?: string;
    extendedProperties?: {
      private: {
        (key: string): string
      };
      shared: {
        (key: string): string
      }
    };
    gadget?: {
      display?: GadgetDisplayMode;
      height: integer;
      iconLink: string;
      link: string;
      preferences: {
        (key: string): string
      }
      title: string;
      type: string;
      width: integer;
    };
    guestsCanInviteOthers?: boolean;
    guestsCanSeeOtherGuests?: boolean;
    id?: string;
    location?: string;
    originalStartTime?: {
      date: date;
      dateTime: datetime;
      timeZone: string
    };
    recurrence?: string[];
    sequence?: integer;
    source?: {
      url: string;
      title: string
    };
    status?: EventStatus;
    summary?: string;
    transparency?: EventTransparency;
    visibility?: EventVisibility;
  }

  // The order of the events returned in the result. Optional. The default is an unspecified, stable order.
  // Acceptable values are:
  type EventsOrder =
    // Order by the start date/time (ascending). This is only available when querying single events (i.e. the parameter singleEvents is True)
    'startTime' |
    // Order by last modification time (ascending).
    'updated';

  // Token obtained from the nextSyncToken field returned on the last page of results from the previous list request.
  // It makes the result of this list request contain only entries that have changed since then.
  // All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
  // There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
  // These are:
  type SyncToken =
    'iCalUID' |
    'orderBy' |
    'privateExtendedProperty' |
    'q' |
    'sharedExtendedProperty' |
    'timeMin' |
    'timeMax' |
    'updatedMin';

  interface EventsListParameters {
    calendarId: string;
    alwaysIncludeEmail?: boolean;
    iCalUID?: string;
    maxAttendees?: integer;
    maxResults?: integer;
    orderBy?: EventsOrder;
    pageToken?: string;
    privateExtendedProperty?: string;
    q?: string;
    sharedExtendedProperty?: string;
    showDeleted?: boolean;
    showHiddenInvitations?: boolean;
    singleEvents?: boolean;
    syncToken?: SyncToken;
    timeMax?: datetime;
    timeMin?: datetime;
    timeZone?: string;
    updatedMin?: datetime;
  }

  interface Events {
    kind: 'calendar#events';
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
    nextPageToken?: string;
    nextSyncToken?: string;
    items: Event[];
  }

  type etag = string;
  type datetime = string;
  type date = string;
  type integer = number;

  // The attendee's response status. Possible values are:
  type AttendeeResponseStatus =
    // The attendee has not responded to the invitation.
    'needsAction' |
    // The attendee has declined the invitation.
    'declined' |
    // The attendee has tentatively accepted the invitation.
    'tentative' |
    // The attendee has accepted the invitation.
    'accepted';

  // The gadget's display mode. Optional. Possible values are:
  type GadgetDisplayMode =
    // The gadget displays next to the event's title in the calendar view.
    'icon' |
    // The gadget displays when the event is clicked.
    'chip';

  // The method used by this reminder. Possible values are:
  type ReminderMethod =
    // Reminders are sent via email.
    'email' |
    // Reminders are sent via SMS. These are only available for Google Apps for Work, Education, and Government customers. Requests to set SMS reminders for other account types are ignored.
    'sms' |
    // Reminders are sent via a UI popup.
    'popup';

  // Status of the event. Optional. Possible values are:
  type EventStatus =
    // The event is confirmed. This is the default status.
    'confirmed' |
    // The event is tentatively confirmed.
    'tentative' |
    // The event is cancelled.
    'cancelled';

  // Whether the event blocks time on the calendar. Optional. Possible values are:
  type EventTransparency =
    // The event blocks time on the calendar. This is the default value.
    'opaque' |
    // The event does not block time on the calendar.
    'transparent';

  // Visibility of the event. Optional. Possible values are:
  type EventVisibility =
    // Uses the default visibility for events on the calendar. This is the default value.
    'default' |
    // The event is public and event details are visible to all readers of the calendar.
    'public' |
    // The event is private and only event attendees may view event details.
    'private' |
    // The event is private. This value is provided for compatibility reasons.
    'confidential';

  class Event {
    kind: 'calendar#event';
    etag: etag;
    id: string;
    status?: EventStatus;
    htmlLink: string;
    created: datetime;
    updated: datetime;
    summary: string;
    description: string;
    location?: string;
    colorId?: string;

    // The creator of the event. Read-only.
    creator: {
      // The creator's Profile ID, if available.
      id?: string;

      // The creator's email address, if available.
      email?: string;

      // The creator's name, if available.
      displayName?: string;

      // Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
      self?: boolean;
    };

    // The organizer of the event.
    organizer: {
      // The organizer's Profile ID, if available.
      id?: string;

      // The organizer's email address, if available.
      email?: string;

      // The organizer's name, if available.
      displayName?: string;

      // Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
      self?: boolean;
    };

    // The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance.
    start: {
      // The date, in the format "yyyy-mm-dd", if this is an all-day event.
      date?: date;

      // The time, as a combined date-time value (formatted according to RFC3339).
      // A time zone offset is required unless a time zone is explicitly specified in timeZone.
      dateTime?: datetime;

      // The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
      // For recurring events this field is required and specifies the time zone in which the recurrence is expanded.
      // For single events this field is optional and indicates a custom time zone for the event start/end.
      timeZone?: string;
    };

    // The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance.
    end: {
      // The date, in the format "yyyy-mm-dd", if this is an all-day event.
      date?: date;

      // The time, as a combined date-time value (formatted according to RFC3339).
      // A time zone offset is required unless a time zone is explicitly specified in timeZone.
      dateTime?: datetime;

      // The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
      // For recurring events this field is required and specifies the time zone in which the recurrence is expanded.
      // For single events this field is optional and indicates a custom time zone for the event start/end.
      timeZone?: string;
    };

    // 	Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True.
    // The default is False.
    endTimeUnspecified?: boolean;

    recurrence: string[];

    // For an instance of a recurring event, this is the id of the recurring event to which this instance belongs. Immutable.
    recurringEventId?: string;

    // Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False.
    originalStartTime?: {
      date: date;
      dateTime: datetime;
      timeZone?: string;
    };

    transparency?: EventTransparency;
    visibility?: EventVisibility;
    iCalUID: string;
    sequence: integer;

    // The attendees of the event.
    attendees?: {
      id: string;
      email: string;
      displayName?: string;
      organizer: boolean;
      self: boolean;
      resource: boolean;
      optional?: boolean;
      responseStatus: AttendeeResponseStatus;
      comment?: string;
      additionalGuests?: integer;
    }[];

    attendeesOmitted?: boolean;

    // Extended properties of the event.
    extendedProperties?: {
      private: {
        (key: string): string;
      };
      shared: {
        (key: string): string;
      }
    };

    // An absolute link to the Google+ hangout associated with this event. Read-only.
    hangoutLink?: string;

    // A gadget that extends this event.
    gadget?: {
      type: string;
      title: string;
      link: string;
      iconLink: string;
      width?: integer;
      height?: integer;
      display?: GadgetDisplayMode;
      preferences: {
        (key: string): string;
      }
    };

    anyoneCanAddSelf?: boolean;
    guestsCanInviteOthers?: boolean;
    guestsCanModify?: boolean;
    guestsCanSeeOtherGuests?: boolean;
    privateCopy?: boolean;

    // Whether this is a locked event copy where no changes can be made to the main event fields "summary", "description", "location", "start", "end" or "recurrence". The default is False. Read-Only.
    locked?: boolean;

    reminders: {
      useDefault: boolean;
      overrides?: {
        method: ReminderMethod;
        minutes: integer;
      }[];
    };

    // Source from which the event was created. For example, a web page, an email message or any document identifiable by an URL with HTTP or HTTPS scheme.
    // Can only be seen or modified by the creator of the event.
    source?: {
      url: string;
      title: string;
    };

    // File attachments for the event. Currently only Google Drive attachments are supported.
    attachments?: {
      fileUrl: string;
      title: string;
      mimeType: string;
      iconLink: string;
      fileId: string;
    }[];
  }
}
