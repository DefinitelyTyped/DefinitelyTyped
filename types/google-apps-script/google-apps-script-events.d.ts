/// <reference path="google-apps-script.script.d.ts" />
/// <reference path="google-apps-script.spreadsheet.d.ts" />
/// <reference path="google-apps-script.slides.d.ts" />

declare namespace GoogleAppsScript {
    /**
     * Google Apps Script Events
     * @see https://developers.google.com/apps-script/guides/triggers/events
     */
    namespace Events {
        // Internal interfaces
        interface AppsScriptEvent {
            authMode: Script.AuthMode;
            triggerUid: string;
            user: Base.User;
        }

        interface AppsScriptHttpRequestEvent {
            parameter: { [key: string]: string };
            pathInfo: string;
            contextPath: string;
            contentLength: number;
            queryString: string;
            parameters: { [key: string]: string[] };
        }

        interface AppsScriptHttpRequestEventPostData {
            length: number;
            type: string;
            contents: string;
            name: string;
        }

        // External interfaces
        interface SheetsOnOpen extends AppsScriptEvent {
            source: Spreadsheet.Spreadsheet;
        }

        type SheetsOnChangeChangeType =
            | "EDIT"
            | "INSERT_ROW"
            | "INSERT_COLUMN"
            | "REMOVE_ROW"
            | "REMOVE_COLUMN"
            | "INSERT_GRID"
            | "REMOVE_GRID"
            | "FORMAT"
            | "OTHER";
        interface SheetsOnChange extends AppsScriptEvent {
            changeType: SheetsOnChangeChangeType;
            source: Spreadsheet.Spreadsheet;
        }

        interface SheetsOnEdit extends AppsScriptEvent {
            oldValue: string;
            range: Spreadsheet.Range;
            source: Spreadsheet.Spreadsheet;
            value: string;
        }

        interface SheetsOnFormSubmit extends AppsScriptEvent {
            namedValues: { [key: string]: string[] };
            range: Spreadsheet.Range;
            values: string[];
        }

        interface FormsOnFormSubmit extends AppsScriptEvent {
            response: Forms.FormResponse;
            source: Forms.Form;
        }

        interface DocsOnOpen extends AppsScriptEvent {
            source: Document.Document;
        }

        interface SlidesOnOpen extends AppsScriptEvent {
            source: Slides.Presentation;
        }

        interface FormsOnOpen extends AppsScriptEvent {
            source: Forms.Form;
        }

        // TODO: Is there a `user` attribute?
        interface CalendarEventUpdated extends AppsScriptEvent {
            calendarId: string;
        }

        interface AddonOnInstall {
            authMode: Script.AuthMode;
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface DoGet extends AppsScriptHttpRequestEvent {
        }

        interface DoPost extends AppsScriptHttpRequestEvent {
            postData: AppsScriptHttpRequestEventPostData;
        }

        interface TimeDriven {
            authMode: Script.AuthMode;
            year: number;
            month: number;
            "week-of-year": number;
            "day-of-month": number;
            "day-of-week": number;
            hour: number;
            minute: number;
            second: number;
            timezone: string;
            triggerUid: string;
        }
    }
}
