// Type definitions for Google Apps Script Event Objects 2021-04-15
// Project: https://developers.google.com/apps-script/
// Definitions by: Oleg Valter <https://github.com/Oaphi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    /**
     * @summary Apps Script Addon Event Objects
     * @see https://developers.google.com/workspace/add-ons/concepts/event-objects
     */
    namespace Addons {
        /**
         * @summary Addon Event Object
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#event_object_structure
         */
        interface EventObject {
            commonEventObject: CommonEventObject;
            calendar?: CalendarEventObject | undefined;
            docs?: DocsEventObject | undefined;
            drive?: DriveEventObject | undefined;
            gmail?: GmailEventObject | undefined;
            sheets?: SheetsEventObject | undefined;
            slides?: SlidesEventObject | undefined;
        }

        type InvitationResponseStatus = "accepted" | "declined" | "needsAction" | "tentative";

        /**
         * @summary Object with information on individual attendees to Calendar events
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#attendee
         */
        interface AttendeeObject {
            additionalGuests: number;
            comment: string;
            displayName: string;
            email: string;
            optional: boolean;
            organizer: boolean;
            resource: boolean;
            responseStatus: InvitationResponseStatus;
            self: boolean;
        }

        type EntryPointFeature = "toll" | "toll_free";
        type EntryPointType = "more" | "phone" | "sip" | "video";

        /**
         * @summary Object with information on means of accessing a conference
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#entry_point
         */
        interface EntryPointObject {
            accessCode: string;
            entryPointFeatures: EntryPointFeature[];
            entryPointType: EntryPointType;
            label: string;
            meetingCode: string;
            passcode: string;
            password: string;
            pin: string;
            regionCode: string;
            uri: string;
        }

        /**
         * @summary Object with information on conferences attached to Calendar events
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#conference_data
         */
        interface ConferenceDataObject {
            conferenceId: string;
            conferenceSolution: {
                iconUri: string;
                key: {
                    type: "eventHangout" | "eventNamedHangout" | "hangoutsMeet";
                };
                name: string;
            };
            entryPoints: EntryPointObject[];
            notes: string;
            parameters: {
                addOnParameters: { [key: string]: string };
            };
        }

        /**
         * @summary Event object with information on user's calendar and events
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#calendar_event_object
         */
        interface CalendarEventObject {
            attendees: AttendeeObject[];
            calendarId: string;
            id: string;
            capabilities: {
                canAddAttendees: boolean;
                canSeeAttendees: boolean;
                canSeeConferenceData: boolean;
                canSetConferenceData: boolean;
                conferenceData: ConferenceDataObject;
            };
            organizer: {
                email: string;
            };
            recurringEventId: string;
        }

        /**
         * @summary Event object with information on user's document and its contents
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#docs_event_object
         */
        interface DocsEventObject {
            id?: string | undefined;
            title?: string | undefined;
            addonHasFileScopePermission: boolean;
        }

        /**
         * @summary Object with information on Drive items
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#drive_item
         */
        interface DriveItemObject {
            addonHasFileScopePermission: boolean;
            id: string;
            iconUrl: string;
            mimeType: string;
            title: string;
        }

        /**
         * @summary Event object with information on user's Drive and its contents
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#drive_event_object
         */
        interface DriveEventObject {
            activeCursorItem: DriveItemObject;
            selectedItems: DriveItemObject[];
        }

        /**
         * @summary Event object with information on user's Gmail messages
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#gmail_event_object
         */
        interface GmailEventObject {
            accessToken: string;
            bccRecipients?: string[] | undefined;
            ccRecipients?: string[] | undefined;
            messageId: string;
            threadId: string;
            toRecipients?: string[] | undefined;
        }

        /**
         * @summary Event object with information on user's spreadsheet and its contents
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#sheets_event_object
         */
        interface SheetsEventObject {
            id?: string | undefined;
            title?: string | undefined;
            addonHasFileScopePermission: boolean;
        }

        /**
         * @summary Event object with information on user's presentation and its contents
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#slides_event_object
         */
        interface SlidesEventObject {
            id?: string | undefined;
            title?: string | undefined;
            addonHasFileScopePermission: boolean;
        }

        type Platform = "WEB" | "IOS" | "ANDROID";
        type HostApplication = "GMAIL" | "CALENDAR" | "DRIVE" | "DOCS" | "SHEETS" | "SLIDES";

        /**
         * @summary Event object with host-independent information
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#common_event_object
         */
        interface CommonEventObject {
            userLocale?: string | undefined;
            timeZone?: {
                id: string;
                offset: string;
            } | undefined;
            platform: Platform;
            parameters: { [key: string]: string };
            hostApp: HostApplication;
            formInputs: {
                [ID: string]: {
                    "": {
                        stringInputs?: StringInputObject | undefined;
                        dateInput?: DateInputObject | undefined;
                        timeInput?: TimeInputObject | undefined;
                        dateTimeInput?: DateTimeInputObject | undefined;
                    }; // always one key only <"">
                };
            };
        }

        /**
         * @summary Signle and multi-value text widgets object
         */
        interface StringInputObject {
            value: string[];
        }

        /**
         * @summary DatePicker formInputs object
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#date-input
         */
        interface DateInputObject {
            msSinceEpoch: string;
        }

        /**
         * @summary TimePicker formInputs object
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#time-input
         */
        interface TimeInputObject {
            hours: number;
            minutes: number;
        }

        /**
         * @summary DateTimePicker formInputs object
         * @see https://developers.google.com/workspace/add-ons/concepts/event-objects#date-time-input
         */
        interface DateTimeInputObject {
            hasDate: boolean;
            hasTime: boolean;
            msSinceEpoch: string;
        }
    }
}
