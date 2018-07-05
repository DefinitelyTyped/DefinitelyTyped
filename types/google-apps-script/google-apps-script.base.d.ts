// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module Base {
    /**
     * A data interchange object for Apps Script services.
     */
    export interface Blob {
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
      getAllBlobs(): Blob[];
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
     * ChartA Chart object, which can be embedded into documents, UI elements, or used as a static image.
     *
     * DocumentA document, containing rich text and elements such as tables and lists.
     *
     * EmbeddedChartRepresents a chart that has been embedded into a Spreadsheet.
     *
     * FileA file in Google Drive.
     *
     * GmailAttachmentAn attachment from Gmail.
     *
     * HTTPResponseThis class allows users to access specific information on HTTP responses.
     *
     * HtmlOutputAn HtmlOutput object that can be served from a script.
     *
     * InlineImageAn element representing an embedded image.
     *
     * JdbcBlobA JDBC Blob.
     *
     * JdbcClobA JDBC Clob.
     *
     * PositionedImageFixed position image anchored to a Paragraph.
     *
     * SpreadsheetThis class allows users to access and modify Google Sheets files.
     *
     * StaticMapAllows for the creation and decoration of static map images.
     */
    export interface BlobSource {
      getAs(contentType: string): Blob;
      getBlob(): Blob;
    }

    /**
     * This class provides access to G Suite specific dialog boxes.
     *
     *  The methods in this class are only available for use in the context of a Google Spreadsheet.
     * See also
     *
     * ButtonSet
     */
    export interface Browser {
      Buttons: typeof ButtonSet;
      inputBox(prompt: string): string;
      inputBox(prompt: string, buttons: ButtonSet): string;
      inputBox(title: string, prompt: string, buttons: ButtonSet): string;
      msgBox(prompt: string): string;
      msgBox(prompt: string, buttons: ButtonSet): string;
      msgBox(title: string, prompt: string, buttons: ButtonSet): string;
    }

    /**
     * An enum representing predetermined, localized dialog buttons returned by an
     *  alert or PromptResponse.getSelectedButton() to
     *  indicate which button in a dialog the user clicked. These values cannot be set; to add buttons to
     *  an alert or
     *  prompt, use ButtonSet instead.
     *
     *      // Display a dialog box with a message and "Yes" and "No" buttons.
     *      var ui = DocumentApp.getUi();
     *      var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);
     *
     *      // Process the user's response.
     *      if (response == ui.Button.YES) {
     *        Logger.log('The user clicked "Yes."');
     *      } else {
     *        Logger.log('The user clicked "No" or the dialog\'s close button.');
     *      }
     */
    export enum Button { CLOSE, OK, CANCEL, YES, NO }

    /**
     * An enum representing predetermined, localized sets of one or more dialog buttons that can be
     *  added to an alert or a
     *  prompt. To determine which button the user
     *  clicked, use Button.
     *
     *      // Display a dialog box with a message and "Yes" and "No" buttons.
     *      var ui = DocumentApp.getUi();
     *      var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);
     *
     *      // Process the user's response.
     *      if (response == ui.Button.YES) {
     *        Logger.log('The user clicked "Yes."');
     *      } else {
     *        Logger.log('The user clicked "No" or the dialog\'s close button.');
     *      }
     */
    export enum ButtonSet { OK, OK_CANCEL, YES_NO, YES_NO_CANCEL }

    /**
     * This class allows the developer to write out text to the debugging logs.
     */
    export interface Logger {
      clear(): void;
      getLog(): string;
      log(data: Object): Logger;
      log(format: string, ...values: Object[]): Logger;
    }

    /**
     * A custom menu in an instance of the user interface for a Google App. A script can only interact
     *  with the UI for the current instance of an open document or form, and only if the script is
     *  container-bound to the document or form. For more
     *  information, see the guide to menus.
     *
     *      // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
     *      function onOpen(e) {
     *        SpreadsheetApp.getUi()
     *            .createMenu('My Menu')
     *            .addItem('My Menu Item', 'myFunction')
     *            .addSeparator()
     *            .addSubMenu(SpreadsheetApp.getUi().createMenu('My Submenu')
     *                .addItem('One Submenu Item', 'mySecondFunction')
     *                .addItem('Another Submenu Item', 'myThirdFunction'))
     *            .addToUi();
     *      }
     */
    export interface Menu {
      addItem(caption: string, functionName: string): Menu;
      addSeparator(): Menu;
      addSubMenu(menu: Menu): Menu;
      addToUi(): void;
    }

    /**
     * An enumeration that provides access to MIME-type declarations without typing the strings
     *  explicitly. Any method that expects a MIME type rendered as a string (for example,
     *  'image/png') will also accept one of the values below, so long as the method
     *  supports the underlying MIME type.
     *
     *      // Use MimeType enum to log the name of every Google Doc in the user's Drive.
     *      var docs = DriveApp.getFilesByType(MimeType.GOOGLE_DOCS);
     *      while (docs.hasNext()) {
     *       var doc = docs.next();
     *       Logger.log(doc.getName())
     *      }
     *
     *      // Use plain string to log the size of every PNG in the user's Drive.
     *      var pngs = DriveApp.getFilesByType('image/png');
     *      while (pngs.hasNext()) {
     *       var png = pngs.next();
     *       Logger.log(png.getSize());
     *      }
     */
    export enum MimeType { GOOGLE_APPS_SCRIPT, GOOGLE_DRAWINGS, GOOGLE_DOCS, GOOGLE_FORMS, GOOGLE_SHEETS, GOOGLE_SLIDES, FOLDER, BMP, GIF, JPEG, PNG, SVG, PDF, CSS, CSV, HTML, JAVASCRIPT, PLAIN_TEXT, RTF, OPENDOCUMENT_GRAPHICS, OPENDOCUMENT_PRESENTATION, OPENDOCUMENT_SPREADSHEET, OPENDOCUMENT_TEXT, MICROSOFT_EXCEL, MICROSOFT_EXCEL_LEGACY, MICROSOFT_POWERPOINT, MICROSOFT_POWERPOINT_LEGACY, MICROSOFT_WORD, MICROSOFT_WORD_LEGACY, ZIP }

    /**
     * An enum representing the months of the year.
     */
    export enum Month { JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER }

    /**
     * A response to a prompt dialog displayed in the
     *  user-interface environment for a Google App. The response contains any text the user entered in
     *  the dialog's input field and indicates which button the user clicked to dismiss the dialog.
     *
     *      // Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
     *      // user can also close the dialog by clicking the close button in its title bar.
     *      var ui = DocumentApp.getUi();
     *      var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);
     *
     *      // Process the user's response.
     *      if (response.getSelectedButton() == ui.Button.YES) {
     *        Logger.log('The user\'s name is %s.', response.getResponseText());
     *      } else if (response.getSelectedButton() == ui.Button.NO) {
     *        Logger.log('The user didn\'t want to provide a name.');
     *      } else {
     *        Logger.log('The user clicked the close button in the dialog\'s title bar.');
     *      }
     */
    export interface PromptResponse {
      getResponseText(): string;
      getSelectedButton(): Button;
    }

    /**
     * The Session class provides access to session information, such as the user's email address (in
     *  some circumstances) and language setting.
     */
    export interface Session {
      getActiveUser(): User;
      getActiveUserLocale(): string;
      getEffectiveUser(): User;
      getScriptTimeZone(): string;
      getTemporaryActiveUserKey(): string;
      getTimeZone(): string;
      getUser(): User;
    }

    /**
     * An instance of the user-interface environment for a Google App that allows the script to add
     *  features like menus, dialogs, and sidebars. A script can only interact with the UI for the
     *  current instance of an open editor, and only if the script is
     *  container-bound to the editor.
     *
     *      // Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
     *      // user can also close the dialog by clicking the close button in its title bar.
     *      var ui = SpreadsheetApp.getUi();
     *      var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);
     *
     *      // Process the user's response.
     *      if (response.getSelectedButton() == ui.Button.YES) {
     *        Logger.log('The user\'s name is %s.', response.getResponseText());
     *      } else if (response.getSelectedButton() == ui.Button.NO) {
     *        Logger.log('The user didn\'t want to provide a name.');
     *      } else {
     *        Logger.log('The user clicked the close button in the dialog\'s title bar.');
     *      }
     */
    export interface Ui {
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
      showModalDialog(userInterface: Object, title: string): void;
      showModelessDialog(userInterface: Object, title: string): void;
      showSidebar(userInterface: Object): void;
      showDialog(userInterface: Object): void;
    }

    /**
     * Representation of a user, suitable for scripting.
     */
    export interface User {
      getEmail(): string;
      getUserLoginId(): string;
    }

    /**
     * An enum representing the days of the week.
     */
    export enum Weekday { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY }

  }
}

declare var Browser: GoogleAppsScript.Base.Browser;
declare var Logger: GoogleAppsScript.Base.Logger;
// conflicts with MimeType in lib.d.ts
// declare var MimeType: GoogleAppsScript.Base.MimeType;
declare var Session: GoogleAppsScript.Base.Session;
