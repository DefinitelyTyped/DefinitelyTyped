// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  namespace Content {
    /**
     * Service for returning text content from a script.
     *
     * You can serve up text in various forms. For example, publish this script as a web app.
     *
     *     function doGet() {
     *       return ContentService.createTextOutput("Hello World");
     *     }
     */
    interface ContentService {
      MimeType: typeof MimeType;
      createTextOutput(): TextOutput;
      createTextOutput(content: string): TextOutput;
    }
    /**
     * An enum for mime types that can be served from a script.
     */
    enum MimeType { ATOM, CSV, ICAL, JAVASCRIPT, JSON, RSS, TEXT, VCARD, XML }
    /**
     * A TextOutput object that can be served from a script.
     *
     * Due to security considerations, scripts cannot directly return text content to a browser.
     * Instead, the browser is redirected to googleusercontent.com, which will display it without any
     * further sanitization or manipulation.
     *
     * You can return text content like this:
     *
     *     function doGet() {
     *       return ContentService.createTextOutput("hello world!");
     *     }
     *
     * ContentService
     */
    interface TextOutput {
      append(addedContent: string): TextOutput;
      clear(): TextOutput;
      downloadAsFile(filename: string): TextOutput;
      getContent(): string;
      getFileName(): string;
      getMimeType(): MimeType;
      setContent(content: string): TextOutput;
      setMimeType(mimeType: MimeType): TextOutput;
    }
  }
}

declare var ContentService: GoogleAppsScript.Content.ContentService;
