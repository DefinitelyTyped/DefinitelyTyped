// Type definitions for Google Apps Script 2019-02-27
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../google-apps-script.script.d.ts" />
/// <reference path="../google-apps-script.spreadsheet.d.ts" />
/// <reference path="../google-apps-script.slides.d.ts" />

declare namespace GoogleAppsScript {
  /**
   * Google Apps Script Events
   * @see https://developers.google.com/apps-script/guides/triggers/events
   */
  export module Events {
    // Internal interfaces
    interface GSuiteEvent {
      authMode: Script.AuthMode,
      triggerUid: string,
      user: Base.User,
    }

    // External interfaces
    export interface SheetsOnOpen extends GSuiteEvent{
      source: Spreadsheet.Spreadsheet,
    }
    
    enum SheetsOnChangeChangeType { EDIT, INSERT_ROW, INSERT_COLUMN, REMOVE_ROW, REMOVE_COLUMN, INSERT_GRID, REMOVE_GRID, FORMAT, OTHER }
    export interface SheetsOnChange extends GSuiteEvent {
      changeType: SheetsOnChangeChangeType,
    }

    export interface SheetsOnEdit extends GSuiteEvent {
      oldValue: string,
      range: Spreadsheet.Range,
      source: Spreadsheet.Spreadsheet,
      value: string,
    }

    export interface FormsOnSubmit extends GSuiteEvent {
      namedValues: { [key:string]:string[]; },
      range: Spreadsheet.Range,
      values: string[],
    }

    export interface DocsOnOpen extends GSuiteEvent{
      source: Document.Document,
    }

    export interface SlidesOnOpen extends GSuiteEvent {
      source: Slides.Presentation,
    }

    export interface FormsOnOpen extends GSuiteEvent {
      source: Forms.Form,
    }

    // TODO: Is there a `user` attribute?
    export interface CalendarEventUpdated extends GSuiteEvent {
      calendarId: string,
    }

    export interface AddonOnInstall {
      authMode: Script.AuthMode,
    }
  }
}