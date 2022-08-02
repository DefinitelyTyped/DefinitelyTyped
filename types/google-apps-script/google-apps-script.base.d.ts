// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

interface Console {
  error(): void;
  error(formatOrObject: object | string, ...values: any[]): void;
  info(): void;
  info(formatOrObject: object | string, ...values: any[]): void;
  log(): void;
  log(formatOrObject: object | string, ...values: any[]): void;
  time(label: string): void;
  timeEnd(label: string): void;
  warn(): void;
  warn(formatOrObject: object | string, ...values: any[]): void;
}

declare namespace GoogleAppsScript {
  namespace Base {
    /**
     * A data interchange object for Apps Script services.
     */
    interface Blob extends BlobSource {
      copyBlob(): Blob;
      getAs(contentType: string): Blob;
      getBytes(): Byte[];
      getContentType(): string;
      getDataAsString(): string;
      getDataAsString(charset: string): string;
      getName(): string;
      isGoogleType(): boolean;
      setBytes(data: Byte[]): Blob;
      setContentType(contentType: string): Blob;
      setContentTypeFromExtension(): Blob;
      setDataFromString(string: string): Blob;
      setDataFromString(string: string, charset: string): Blob;
      setName(name: string): Blob;
      /** @deprecated DO NOT USE */ getAllBlobs(): Blob[];
    }
    /**
     * Interface for objects that can export their data as a Blob.
     * Implementing classes
     *
     * NameBrief description
     *
     * AttachmentA Sites Attachment such as a file attached to a page.
     *
     * BlobA data interchange object for Apps Script services.
     *
     * ChartA Chart object, which can be converted to a static image.
     *
     * DocumentA document, containing rich text and elements such as tables and lists.
     *
     * EmbeddedChartRepresents a chart that has been embedded into a spreadsheet.
     *
     * FileA file in Google Drive.
     *
     * GmailAttachmentAn attachment from Gmail.
     *
     * HTTPResponseThis class allows users to access specific information on HTTP responses.
     *
     * HtmlOutputAn HtmlOutput object that can be served from a script.
     *
     * ImageA PageElement representing an image.
     *
     * InlineImageAn element representing an embedded image.
     *
     * JdbcBlobA JDBC Blob.
     *
     * JdbcClobA JDBC Clob.
     *
     * PictureFillA fill that renders an image that's stretched to the dimensions of its container.
     *
     * PositionedImageFixed position image anchored to a Paragraph.
     *
     * SpreadsheetAccess and modify Google Sheets files.
     *
     * StaticMapAllows for the creation and decoration of static map images.
     */
    interface BlobSource {
      getAs(contentType: string): Blob;
      getBlob(): Blob;
    }
    /**
     * This class provides access to dialog boxes specific to Google Sheets.
     *
     * The methods in this class are only available for use in the context of a Google Spreadsheet.
     * Please use G Suite dialogs instead.
     * See also
     *
     * ButtonSet
     */
    interface Browser {
      Buttons: typeof ButtonSet;
      inputBox(prompt: string): string;
      inputBox(prompt: string, buttons: ButtonSet): string;
      inputBox(title: string, prompt: string, buttons: ButtonSet): string;
      msgBox(prompt: string): string;
      msgBox(prompt: string, buttons: ButtonSet): string;
      msgBox(title: string, prompt: string, buttons: ButtonSet): string;
    }
    /**
     * An enum representing predetermined, localized dialog buttons returned by an alert or PromptResponse.getSelectedButton() to indicate
     * which button in a dialog the user clicked. These values cannot be set; to add buttons to an
     * alert or prompt, use ButtonSet instead.
     *
     *     // Display a dialog box with a message and "Yes" and "No" buttons.
     *     var ui = DocumentApp.getUi();
     *     var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);
     *
     *     // Process the user's response.
     *     if (response == ui.Button.YES) {
     *       Logger.log('The user clicked "Yes."');
     *     } else {
     *       Logger.log('The user clicked "No" or the dialog\'s close button.');
     *     }
     */
    enum Button { CLOSE, OK, CANCEL, YES, NO }
    /**
     * An enum representing predetermined, localized sets of one or more dialog buttons that can be
     * added to an alert or a prompt. To determine which button the user clicked,
     * use Button.
     *
     *     // Display a dialog box with a message and "Yes" and "No" buttons.
     *     var ui = DocumentApp.getUi();
     *     var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);
     *
     *     // Process the user's response.
     *     if (response == ui.Button.YES) {
     *       Logger.log('The user clicked "Yes."');
     *     } else {
     *       Logger.log('The user clicked "No" or the dialog\'s close button.');
     *     }
     */
    enum ButtonSet { OK, OK_CANCEL, YES_NO, YES_NO_CANCEL }
    /**
     * The types of Colors
     */
    enum ColorType { UNSUPPORTED, RGB, THEME }
    /**
     * This class allows the developer to write out text to the debugging logs.
     */
    interface Logger {
      clear(): void;
      getLog(): string;
      log(data: any): Logger;
      log(format: string, ...values: any[]): Logger;
    }
    /**
     * A custom menu in an instance of the user interface for a Google App. A script can only interact
     * with the UI for the current instance of an open document or form, and only if the script is container-bound to the document or form. For more
     * information, see the guide to menus.
     *
     *     // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
     *     function onOpen(e) {
     *       SpreadsheetApp.getUi()
     *           .createMenu('My Menu')
     *           .addItem('My Menu Item', 'myFunction')
     *           .addSeparator()
     *           .addSubMenu(SpreadsheetApp.getUi().createMenu('My Submenu')
     *               .addItem('One Submenu Item', 'mySecondFunction')
     *               .addItem('Another Submenu Item', 'myThirdFunction'))
     *           .addToUi();
     *     }
     */
    interface Menu {
      addItem(caption: string, functionName: string): Menu;
      addSeparator(): Menu;
      addSubMenu(menu: Menu): Menu;
      addToUi(): void;
    }
    /**
     * An enumeration that provides access to MIME-type declarations without typing the strings
     * explicitly. Methods that expect a MIME type rendered as a string (for example,
     * 'image/png') also accept any of the values below, so long as the method supports the
     * underlying MIME type.
     *
     *     // Use MimeType enum to log the name of every Google Doc in the user's Drive.
     *     var docs = DriveApp.getFilesByType(MimeType.GOOGLE_DOCS);
     *     while (docs.hasNext()) {
     *      var doc = docs.next();
     *      Logger.log(doc.getName())
     *     }
     *
     *     // Use plain string to log the size of every PNG in the user's Drive.
     *     var pngs = DriveApp.getFilesByType('image/png');
     *     while (pngs.hasNext()) {
     *      var png = pngs.next();
     *      Logger.log(png.getSize());
     *     }
     */
    enum MimeType { GOOGLE_APPS_SCRIPT, GOOGLE_DRAWINGS, GOOGLE_DOCS, GOOGLE_FORMS, GOOGLE_SHEETS, GOOGLE_SITES, GOOGLE_SLIDES, FOLDER, BMP, GIF, JPEG, PNG, SVG, PDF, CSS, CSV, HTML, JAVASCRIPT, PLAIN_TEXT, RTF, OPENDOCUMENT_GRAPHICS, OPENDOCUMENT_PRESENTATION, OPENDOCUMENT_SPREADSHEET, OPENDOCUMENT_TEXT, MICROSOFT_EXCEL, MICROSOFT_EXCEL_LEGACY, MICROSOFT_POWERPOINT, MICROSOFT_POWERPOINT_LEGACY, MICROSOFT_WORD, MICROSOFT_WORD_LEGACY, ZIP }
    /**
     * An enum representing the months of the year.
     */
    enum Month { JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER }
    /**
     * A response to a prompt dialog displayed in the
     * user-interface environment for a Google App. The response contains any text the user entered in
     * the dialog's input field and indicates which button the user clicked to dismiss the dialog.
     *
     *     // Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
     *     // user can also close the dialog by clicking the close button in its title bar.
     *     var ui = DocumentApp.getUi();
     *     var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);
     *
     *     // Process the user's response.
     *     if (response.getSelectedButton() == ui.Button.YES) {
     *       Logger.log('The user\'s name is %s.', response.getResponseText());
     *     } else if (response.getSelectedButton() == ui.Button.NO) {
     *       Logger.log('The user didn\'t want to provide a name.');
     *     } else {
     *       Logger.log('The user clicked the close button in the dialog\'s title bar.');
     *     }
     */
    interface PromptResponse {
      getResponseText(): string;
      getSelectedButton(): Button;
    }
    /**
     * A color defined by red, green, blue color channels.
     */
    interface RgbColor {
      asHexString(): string;
      getBlue(): Integer;
      getColorType(): ColorType;
      getGreen(): Integer;
      getRed(): Integer;
    }
    /**
     * The Session class provides access to session information, such as the user's email address (in
     * some circumstances) and language setting.
     */
    interface Session {
      getActiveUser(): User;
      getActiveUserLocale(): string;
      getEffectiveUser(): User;
      getScriptTimeZone(): string;
      getTemporaryActiveUserKey(): string;
      /** @deprecated DO NOT USE */ getTimeZone(): string;
      /** @deprecated DO NOT USE */ getUser(): User;
    }
    /**
     * An instance of the user-interface environment for a Google App that allows the script to add
     * features like menus, dialogs, and sidebars. A script can only interact with the UI for the
     * current instance of an open editor, and only if the script is container-bound to the editor.
     *
     *     // Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
     *     // user can also close the dialog by clicking the close button in its title bar.
     *     var ui = SpreadsheetApp.getUi();
     *     var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);
     *
     *     // Process the user's response.
     *     if (response.getSelectedButton() == ui.Button.YES) {
     *       Logger.log('The user\'s name is %s.', response.getResponseText());
     *     } else if (response.getSelectedButton() == ui.Button.NO) {
     *       Logger.log('The user didn\'t want to provide a name.');
     *     } else {
     *       Logger.log('The user clicked the close button in the dialog\'s title bar.');
     *     }
     */
    interface Ui {
      Button: typeof Button;
      ButtonSet: typeof ButtonSet;
      alert(prompt: string): Button;
      alert(prompt: string, buttons: ButtonSet): Button;
      alert(title: string, prompt: string, buttons: ButtonSet): Button;
      createAddonMenu(): Menu;
      createMenu(caption: string): Menu;
      prompt(prompt: string): PromptResponse;
      prompt(prompt: string, buttons: ButtonSet): PromptResponse;
      prompt(title: string, prompt: string, buttons: ButtonSet): PromptResponse;
      showModalDialog(userInterface: HTML.HtmlOutput, title: string): void;
      showModelessDialog(userInterface: HTML.HtmlOutput, title: string): void;
      showSidebar(userInterface: HTML.HtmlOutput): void;
      /** @deprecated DO NOT USE */ showDialog(userInterface: HTML.HtmlOutput): void;
    }
    /**
     * Representation of a user, suitable for scripting.
     */
    interface User {
      getEmail(): string;
      /** @deprecated DO NOT USE */ getUserLoginId(): string;
    }
    /**
     * An enum representing the days of the week.
     */
    enum Weekday { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY }
    /**
     * This class allows the developer to write logs to the Google Cloud Platform's Stackdriver Logging service. The following
     * shows some logging examples:
     *
     *     function measuringExecutionTime() {
     *       // A simple INFO log message, using sprintf() formatting.
     *       console.info('Timing the %s function (%d arguments)', 'myFunction', 1);
     *
     *       // Log a JSON object at a DEBUG level. If the object contains a property called "message",
     *       // that is used as the summary in the log viewer, otherwise a stringified version of
     *       // the object is used as the summary.
     *       var parameters = {
     *         isValid: true,
     *         content: 'some string',
     *         timestamp: new Date()
     *       };
     *       console.log(parameters);
     *
     *       var label = 'myFunction() time';  // Labels the timing log entry.
     *       console.time(label);              // Starts the timer.
     *       try {
     *         myFunction(parameters);         // Function to time.
     *       } catch (e) {
     *         // Logs an ERROR message.
     *         console.error('myFunction() yielded an error: ' + e);
     *       }
     *       console.timeEnd(label);      // Stops the timer, logs execution duration.
     *     }
     */

    /**
     * Apps Script has a non-standard Date Class
     *
     * @see https://github.com/microsoft/TypeScript/blob/master/lib/lib.es5.d.ts
     * Enables basic storage and retrieval of dates and times.
     */
    interface Date {
      /** Returns a string representation of a date. The format of the string depends on the locale. */
      toString(): string;
      /** Returns a date as a string value. */
      toDateString(): string;
      /** Returns a time as a string value. */
      toTimeString(): string;
      /** Returns a value as a string value appropriate to the host environment's current locale. */
      toLocaleString(): string;
      /** Returns a date as a string value appropriate to the host environment's current locale. */
      toLocaleDateString(): string;
      /** Returns a time as a string value appropriate to the host environment's current locale. */
      toLocaleTimeString(): string;
      /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
      valueOf(): number;
      /** Gets the time value in milliseconds. */
      getTime(): number;
      /** Gets the year, using local time. */
      getFullYear(): number;
      /** Gets the year using Universal Coordinated Time (UTC). */
      getUTCFullYear(): number;
      /** Gets the month, using local time. */
      getMonth(): number;
      /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
      getUTCMonth(): number;
      /** Gets the day-of-the-month, using local time. */
      getDate(): number;
      /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
      getUTCDate(): number;
      /** Gets the day of the week, using local time. */
      getDay(): number;
      /** Gets the day of the week using Universal Coordinated Time (UTC). */
      getUTCDay(): number;
      /** Gets the hours in a date, using local time. */
      getHours(): number;
      /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
      getUTCHours(): number;
      /** Gets the minutes of a Date object, using local time. */
      getMinutes(): number;
      /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
      getUTCMinutes(): number;
      /** Gets the seconds of a Date object, using local time. */
      getSeconds(): number;
      /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
      getUTCSeconds(): number;
      /** Gets the milliseconds of a Date, using local time. */
      getMilliseconds(): number;
      /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
      getUTCMilliseconds(): number;
      /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
      getTimezoneOffset(): number;
      /**
       * Sets the date and time value in the Date object.
       * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.
       */
      setTime(time: number): number;
      /**
       * Sets the milliseconds value in the Date object using local time.
       * @param ms A numeric value equal to the millisecond value.
       */
      setMilliseconds(ms: number): number;
      /**
       * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
       * @param ms A numeric value equal to the millisecond value.
       */
      setUTCMilliseconds(ms: number): number;
      /**
       * Sets the seconds value in the Date object using local time.
       * @param sec A numeric value equal to the seconds value.
       * @param ms A numeric value equal to the milliseconds value.
       */
      setSeconds(sec: number, ms?: number): number;
      /**
       * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
       * @param sec A numeric value equal to the seconds value.
       * @param ms A numeric value equal to the milliseconds value.
       */
      setUTCSeconds(sec: number, ms?: number): number;
      /**
       * Sets the minutes value in the Date object using local time.
       * @param min A numeric value equal to the minutes value.
       * @param sec A numeric value equal to the seconds value.
       * @param ms A numeric value equal to the milliseconds value.
       */
      setMinutes(min: number, sec?: number, ms?: number): number;
      /**
       * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
       * @param min A numeric value equal to the minutes value.
       * @param sec A numeric value equal to the seconds value.
       * @param ms A numeric value equal to the milliseconds value.
       */
      setUTCMinutes(min: number, sec?: number, ms?: number): number;
      /**
       * Sets the hour value in the Date object using local time.
       * @param hours A numeric value equal to the hours value.
       * @param min A numeric value equal to the minutes value.
       * @param sec A numeric value equal to the seconds value.
       * @param ms A numeric value equal to the milliseconds value.
       */
      setHours(hours: number, min?: number, sec?: number, ms?: number): number;
      /**
       * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
       * @param hours A numeric value equal to the hours value.
       * @param min A numeric value equal to the minutes value.
       * @param sec A numeric value equal to the seconds value.
       * @param ms A numeric value equal to the milliseconds value.
       */
      setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
      /**
       * Sets the numeric day-of-the-month value of the Date object using local time.
       * @param date A numeric value equal to the day of the month.
       */
      setDate(date: number): number;
      /**
       * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
       * @param date A numeric value equal to the day of the month.
       */
      setUTCDate(date: number): number;
      /**
       * Sets the month value in the Date object using local time.
       * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
       * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
       */
      setMonth(month: number, date?: number): number;
      /**
       * Sets the month value in the Date object using Universal Coordinated Time (UTC).
       * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
       * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
       */
      setUTCMonth(month: number, date?: number): number;
      /**
       * Sets the year of the Date object using local time.
       * @param year A numeric value for the year.
       * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
       * @param date A numeric value equal for the day of the month.
       */
      setFullYear(year: number, month?: number, date?: number): number;
      /**
       * Sets the year value in the Date object using Universal Coordinated Time (UTC).
       * @param year A numeric value equal to the year.
       * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
       * @param date A numeric value equal to the day of the month.
       */
      setUTCFullYear(year: number, month?: number, date?: number): number;
      /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
      toUTCString(): string;
      /** Returns a date as a string value in ISO format. */
      toISOString(): string;
      /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
      toJSON(key?: any): string;
    }

    interface DateConstructor {
      new(): Date;
      new(value: number | string): Date;
      new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
      (): string;
      readonly prototype: Date;
      /**
       * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
       * @param s A date string
       */
      parse(s: string): number;
      /**
       * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.
       * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
       * @param month The month as an number between 0 and 11 (January to December).
       * @param date The date as an number between 1 and 31.
       * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
       * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
       * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
       * @param ms An number from 0 to 999 that specifies the milliseconds.
       */
      UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
      now(): number;
    }
    const Date: DateConstructor;
  }
}

declare var Browser: GoogleAppsScript.Base.Browser;
declare var Logger: GoogleAppsScript.Base.Logger;
// conflicts with MimeType in lib.d.ts
// declare var MimeType: GoogleAppsScript.Base.MimeType;
declare var Session: GoogleAppsScript.Base.Session;
declare var console: Console;

// The name `Date` conflicts with lib.es5.d.ts.
// - We cannot include lib.es5.d.ts with Apps Script though because Apps Script is ES3
//   and doesn't include all ES5+ features.
//   Thus developers using the Date class must alias the type in their own TS projects.
// - We cannot use lib.es3.d.ts because it is no longer by dtslint.
declare var Date2: GoogleAppsScript.Base.DateConstructor;
