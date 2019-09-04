// Type definitions for Google Apps Script 2019-04-02
// Project: https://developers.google.com/apps-script/
// Definitions by: grant <https://github.com/grant/>
//                 oshliaer <https://github.com/oshliaer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.script.d.ts" />
/// <reference path="google-apps-script.spreadsheet.d.ts" />
/// <reference path="google-apps-script.slides.d.ts" />

declare namespace GoogleAppsScript {
  /**
   * Google Apps Script Events
   * @see https://developers.google.com/apps-script/guides/triggers/events
   */
  export module Events {
    // Internal interfaces
    interface AppsScriptEvent {
      authMode: Script.AuthMode,
      triggerUid: string,
      user: Base.User,
    }

    interface AppsScriptHttpRequestEvent {
      parameter: object,
      contextPath: string,
      contentLength: number,
      queryString: string,
      parameters: object,
    }

    interface AppsScriptHttpRequestEventPostData {
      length: number;
      type: string;
      contents: string;
      name: string;
    }

    // External interfaces
    export interface SheetsOnOpen extends AppsScriptEvent {
      source: Spreadsheet.Spreadsheet,
    }

    enum SheetsOnChangeChangeType { EDIT, INSERT_ROW, INSERT_COLUMN, REMOVE_ROW, REMOVE_COLUMN, INSERT_GRID, REMOVE_GRID, FORMAT, OTHER }
    export interface SheetsOnChange extends AppsScriptEvent {
      changeType: SheetsOnChangeChangeType,
    }

    export interface SheetsOnEdit extends AppsScriptEvent {
      oldValue: string,
      range: Spreadsheet.Range,
      source: Spreadsheet.Spreadsheet,
      value: string,
    }

    export interface FormsOnSubmit extends AppsScriptEvent {
      namedValues: { [key: string]: string[]; },
      range: Spreadsheet.Range,
      values: string[],
    }

    export interface DocsOnOpen extends AppsScriptEvent {
      source: Document.Document,
    }

    export interface SlidesOnOpen extends AppsScriptEvent {
      source: Slides.Presentation,
    }

    export interface FormsOnOpen extends AppsScriptEvent {
      source: Forms.Form,
    }

    // TODO: Is there a `user` attribute?
    export interface CalendarEventUpdated extends AppsScriptEvent {
      calendarId: string,
    }

    export interface AddonOnInstall {
      authMode: Script.AuthMode,
    }

    export interface DoGet extends AppsScriptHttpRequestEvent {}

    export interface DoPost extends AppsScriptHttpRequestEvent {
      postData: AppsScriptHttpRequestEventPostData,
    }
  }
}
