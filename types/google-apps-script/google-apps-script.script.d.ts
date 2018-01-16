// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />
/// <reference path="google-apps-script.document.d.ts" />
/// <reference path="google-apps-script.forms.d.ts" />
/// <reference path="google-apps-script.spreadsheet.d.ts" />

declare namespace GoogleAppsScript {
  export module Script {
    /**
     * An enumeration that identifies which categories of authorized services Apps Script
     *  is able to execute through a triggered function. These values are exposed in
     *  triggered functions as the authMode
     *  property of the event parameter, e. For
     *  more information, see the
     *  guide to the authorization lifecycle for add-ons.
     *
     *      function onOpen(e) {
     *        var menu = SpreadsheetApp.getUi().createAddonMenu();
     *        if (e && e.authMode == ScriptApp.AuthMode.NONE) {
     *          // Add a normal menu item (works in all authorization modes).
     *          menu.addItem('Start workflow', 'startWorkflow');
     *        } else {
     *          // Add a menu item based on properties (doesn't work in AuthMode.NONE).
     *          var properties = PropertiesService.getDocumentProperties();
     *          var workflowStarted = properties.getProperty('workflowStarted');
     *          if (workflowStarted) {
     *            menu.addItem('Check workflow status', 'checkWorkflow');
     *          } else {
     *            menu.addItem('Start workflow', 'startWorkflow');
     *          }
     *          // Record analytics.
     *          UrlFetchApp.fetch('http://www.example.com/analytics?event=open');
     *        }
     *        menu.addToUi();
     *      }
     */
    export enum AuthMode { NONE, CUSTOM_FUNCTION, LIMITED, FULL }

    /**
     * An object used to determine whether the user needs to authorize this script to use
     *  one or more services, and to provide the URL for an authorization dialog. If the script
     *  is published as an add-on that uses
     *  installable triggers, this information
     *  can be used to control access to sections of code for which the user lacks the necessary
     *  authorization. Alternately, the add-on can ask the user to open the URL for the
     *  authorization dialog to resolve the problem.
     *
     * This object is returned by
     *  ScriptApp.getAuthorizationInfo(authMode). In almost all cases,
     *  scripts should call
     *  ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL), since no other
     *  authorization mode requires that users grant authorization.
     */
    export interface AuthorizationInfo {
      getAuthorizationStatus(): AuthorizationStatus;
      getAuthorizationUrl(): string;
    }

    /**
     * An enumeration denoting the authorization status of a script.
     */
    export enum AuthorizationStatus { REQUIRED, NOT_REQUIRED }

    /**
     * A builder for clock triggers.
     */
    export interface ClockTriggerBuilder {
      after(durationMilliseconds: Integer): ClockTriggerBuilder;
      at(date: Date): ClockTriggerBuilder;
      atDate(year: Integer, month: Integer, day: Integer): ClockTriggerBuilder;
      atHour(hour: Integer): ClockTriggerBuilder;
      create(): Trigger;
      everyDays(n: Integer): ClockTriggerBuilder;
      everyHours(n: Integer): ClockTriggerBuilder;
      everyMinutes(n: Integer): ClockTriggerBuilder;
      everyWeeks(n: Integer): ClockTriggerBuilder;
      inTimezone(timezone: string): ClockTriggerBuilder;
      nearMinute(minute: Integer): ClockTriggerBuilder;
      onMonthDay(day: Integer): ClockTriggerBuilder;
      onWeekDay(day: Base.Weekday): ClockTriggerBuilder;
    }

    /**
     * A builder for document triggers.
     */
    export interface DocumentTriggerBuilder {
      create(): Trigger;
      onOpen(): DocumentTriggerBuilder;
    }

    /**
     * An enumeration denoting the type of triggered event.
     */
    export enum EventType { CLOCK, ON_OPEN, ON_EDIT, ON_FORM_SUBMIT, ON_CHANGE }

    /**
     * A builder for form triggers.
     */
    export interface FormTriggerBuilder {
      create(): Trigger;
      onFormSubmit(): FormTriggerBuilder;
      onOpen(): FormTriggerBuilder;
    }

    /**
     * An enumeration that indicates how the script came to be installed as an add-on for the
     *  current user.
     */
    export enum InstallationSource { APPS_MARKETPLACE_DOMAIN_ADD_ON, NONE, WEB_STORE_ADD_ON }

    /**
     * Access and manipulate script publishing and triggers. This class allows users to create script
     *  triggers and control publishing the script as a service.
     */
    export interface ScriptApp {
      AuthMode: typeof AuthMode;
      AuthorizationStatus: typeof AuthorizationStatus;
      EventType: typeof EventType;
      InstallationSource: typeof InstallationSource;
      TriggerSource: typeof TriggerSource;
      WeekDay: typeof Base.Weekday;
      deleteTrigger(trigger: Trigger): void;
      getAuthorizationInfo(authMode: AuthMode): AuthorizationInfo;
      getInstallationSource(): InstallationSource;
      getOAuthToken(): string;
      getProjectTriggers(): Trigger[];
      getScriptId(): string;
      getService(): Service;
      getUserTriggers(document: Document.Document): Trigger[];
      getUserTriggers(form: Forms.Form): Trigger[];
      getUserTriggers(spreadsheet: Spreadsheet.Spreadsheet): Trigger[];
      invalidateAuth(): void;
      newStateToken(): StateTokenBuilder;
      newTrigger(functionName: string): TriggerBuilder;
      getProjectKey(): string;
      getScriptTriggers(): Trigger[];
    }

    /**
     * Access and manipulate script publishing.
     */
    export interface Service {
      Restriction: typeof Service.Restriction;
      disable(): void;
      getUrl(): string;
      isEnabled(): boolean;
      enable(restriction: Service.Restriction): void;
    }

    /**
     *
     */
    namespace Service {
    export enum Restriction { MYSELF, DOMAIN, ALL }
    }

    /**
     * Builder for spreadsheet triggers.
     */
    export interface SpreadsheetTriggerBuilder {
      create(): Trigger;
      onChange(): SpreadsheetTriggerBuilder;
      onEdit(): SpreadsheetTriggerBuilder;
      onFormSubmit(): SpreadsheetTriggerBuilder;
      onOpen(): SpreadsheetTriggerBuilder;
    }

    /**
     * Allows scripts to create state tokens that can be used in callback APIs (like OAuth flows).
     *
     *      // Reusable function to generate a callback URL, assuming the script has been published as a
     *      // web app (necessary to obtain the URL programmatically). If the script has not been published
     *      // as a web app, set `var url` in the first line to the URL of your script project (which
     *      // cannot be obtained programmatically).
     *      function getCallbackURL(callbackFunction){
     *        var url = ScriptApp.getService().getUrl();      // Ends in /exec (for a web app)
     *        url = url.slice(0, -4) + 'usercallback?state='; // Change /exec to /usercallback
     *        var stateToken = ScriptApp.newStateToken()
     *            .withMethod(callbackFunction)
     *            .withTimeout(120)
     *            .createToken();
     *        return url + stateToken;
     *      }
     */
    export interface StateTokenBuilder {
      createToken(): string;
      withArgument(name: string, value: string): StateTokenBuilder;
      withMethod(method: string): StateTokenBuilder;
      withTimeout(seconds: Integer): StateTokenBuilder;
    }

    /**
     * A script trigger.
     */
    export interface Trigger {
      getEventType(): EventType;
      getHandlerFunction(): string;
      getTriggerSource(): TriggerSource;
      getTriggerSourceId(): string;
      getUniqueId(): string;
    }

    /**
     * A generic builder for script triggers.
     */
    export interface TriggerBuilder {
      forDocument(document: Document.Document): DocumentTriggerBuilder;
      forDocument(key: string): DocumentTriggerBuilder;
      forForm(form: Forms.Form): FormTriggerBuilder;
      forForm(key: string): FormTriggerBuilder;
      forSpreadsheet(sheet: Spreadsheet.Spreadsheet): SpreadsheetTriggerBuilder;
      forSpreadsheet(key: string): SpreadsheetTriggerBuilder;
      timeBased(): ClockTriggerBuilder;
    }

    /**
     * An enumeration denoting the source of the event that causes the trigger to fire.
     */
    export enum TriggerSource { SPREADSHEETS, CLOCK, FORMS, DOCUMENTS }

  }
}

declare var ScriptApp: GoogleAppsScript.Script.ScriptApp;
