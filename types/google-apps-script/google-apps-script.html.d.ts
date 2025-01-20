/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
    namespace HTML {
        /**
         * An HtmlOutput object that can be served from a script. Due to security considerations,
         * scripts cannot directly return HTML to a browser. Instead, they must sanitize it so that it
         * cannot perform malicious actions. You can return sanitized HTML like this:
         *
         *     function doGet() {
         *       return HtmlService.createHtmlOutput('<b>Hello, world!</b>');
         *     }
         *
         * HtmlOutput
         * iframe
         * sandboxing
         * guide to restrictions in HTML service
         */
        interface HtmlOutput {
            addMetaTag(name: string, content: string): HtmlOutput;
            append(addedContent: string): HtmlOutput;
            appendUntrusted(addedContent: string): HtmlOutput;
            asTemplate(): HtmlTemplate;
            clear(): HtmlOutput;
            getAs(contentType: string): Base.Blob;
            getBlob(): Base.Blob;
            getContent(): string;
            getFaviconUrl(): string;
            getHeight(): Integer;
            getMetaTags(): HtmlOutputMetaTag[];
            getTitle(): string;
            getWidth(): Integer;
            setContent(content: string): HtmlOutput;
            setFaviconUrl(iconUrl: string): HtmlOutput;
            setHeight(height: Integer): HtmlOutput;
            setSandboxMode(mode: SandboxMode): HtmlOutput;
            setTitle(title: string): HtmlOutput;
            setWidth(width: Integer): HtmlOutput;
            setXFrameOptionsMode(mode: XFrameOptionsMode): HtmlOutput;
        }
        /**
         * An object that represents a meta tag added to the page by calling HtmlOutput.addMetaTag(name, content).
         *
         *     var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
         *     output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
         *
         *     var tags = output.getMetaTags();
         *     Logger.log('<meta name="%s" content="%s"/>', tags[0].getName(), tags[0].getContent());
         */
        interface HtmlOutputMetaTag {
            getContent(): string;
            getName(): string;
        }
        /**
         * Service for returning HTML and other text content from a script.
         *
         * Due to security considerations, scripts cannot directly return content to a browser. Instead,
         * they must sanitize the HTML so that it cannot perform malicious actions. See the description of
         * HtmlOutput for what limitations this implies on what can be returned.
         */
        interface HtmlService {
            SandboxMode: typeof SandboxMode;
            XFrameOptionsMode: typeof XFrameOptionsMode;
            createHtmlOutput(): HtmlOutput;
            createHtmlOutput(blob: Base.BlobSource): HtmlOutput;
            createHtmlOutput(html: string): HtmlOutput;
            createHtmlOutputFromFile(filename: string): HtmlOutput;
            createTemplate(blob: Base.BlobSource): HtmlTemplate;
            createTemplate(html: string): HtmlTemplate;
            createTemplateFromFile(filename: string): HtmlTemplate;
            getUserAgent(): string;
        }
        /**
         * A template object for dynamically constructing HTML. For more information, see the guide to templates.
         */
        interface HtmlTemplate {
            evaluate(): HtmlOutput;
            getCode(): string;
            getCodeWithComments(): string;
            getRawContent(): string;
            [propName: string]: any;
        }
        /**
         * An enum representing the sandbox modes that can be used for client-side HtmlService
         * scripts. These values can be accessed from HtmlService.SandboxMode, and set by calling
         * HtmlOutput.setSandboxMode(mode).
         *
         * The NATIVE and EMULATED modes were deprecated on October 13, 2015 and both are now sunset. Only
         * IFRAME mode is now supported.
         *
         * To protect users from being served malicious HTML or JavaScript, client-side code served from
         * HTML service executes in a security sandbox that imposes restrictions on the code. The method
         * HtmlOutput.setSandboxMode(mode) previously allowed script authors to choose
         * between different versions of the sandbox, but now has no effect. For more information, see the
         * guide to restrictions in HTML service.
         *
         * The IFRAME mode imposes many fewer restrictions than the other sandbox modes and runs
         * fastest, but does not work at all in certain older browsers, including Internet Explorer 9. The
         * sandbox mode can also be read in a client-side script by inspecting google.script.sandbox.mode. Note that this property returns the actual mode on the client, which
         * may differ from the mode requested on the server if the requested mode is not supported in the
         * user's browser.
         *
         *     <!-- Read the sandbox mode (in a client-side script). -->
         *     <script>
         *       alert(google.script.sandbox.mode);
         *     </script>
         */
        enum SandboxMode {
            EMULATED,
            IFRAME,
            NATIVE,
        }
        /**
         * An enum representing the X-Frame-Options modes that can be used for client-side HtmlService scripts. These values can be accessed from HtmlService.XFrameOptionsMode,
         * and set by calling HtmlOutput.setXFrameOptionsMode(mode).
         *
         * Setting XFrameOptionsMode.ALLOWALL will let any site iframe the page, so the developer
         * should implement their own protection against clickjacking.
         *
         * If a script does not set an X-Frame-Options mode, Apps Script uses DEFAULT
         * mode as the default.
         *
         *     // Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
         *     var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
         *     output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
         */
        enum XFrameOptionsMode {
            ALLOWALL,
            DEFAULT,
        }
    }
}

declare var HtmlService: GoogleAppsScript.HTML.HtmlService;
