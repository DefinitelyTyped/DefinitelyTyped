// Type definitions for atlassian-connect-js 5.2
// Project: https://bitbucket.org/atlassian/atlassian-connect-js#readme
// Definitions by: Josh Parnham <https://github.com/josh->
//                 Tobias Theobald <https://github.com/Tobi042>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AP {
    type RequestOptions = {
        /**
         * The HTTP method name.
         */
        type?: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'PATCH';

        /**
         * If the request should be cached.
         */
        cache?: boolean;

        /**
         * The body of the request; required if type is 'POST' or 'PUT'. Optionally, for 'GET' this will append the object as key=value pairs to the end of the URL query string.
         */
        data?: string | object;

        /**
         * The content-type string value of the entity body, above; required when data is supplied.
         */
        contentType?: string;

        /**
         * An object containing headers to set; supported headers are: 'Accept', 'If-Match' and 'If-None-Match'.
         */
        headers?: { Accept: string; 'If-Match': string; 'If-None-Match': string };

        /**
         * An optional callback function executed when a HTTP status error code is returned.
         */
        error?: (xhr: XMLHttpRequest, statusText: string, errorThrown: any) => void;

        /**
         * If this is set to true, the developer acknowledges that the API endpoint which is being called may be in beta state, and thus may also have a shorter deprecation cycle than stable APIs.
         */
        experimental?: boolean;
    } & (
        | {
              /**
               * An optional callback function executed on a 200 success status code.
               */
              success?: (response: string) => void;

              /**
               * If this is set to true, the developer is specifying a request for an attachment consisting of binary data (e.g. an image) and the format of the response will be set to "arraybuffer".
               */
              binaryAttachment?: false;
          }
        | {
              /**
               * An optional callback function executed on a 200 success status code.
               */
              success?: (response: ArrayBuffer) => void;

              /**
               * If this is set to true, the developer is specifying a request for an attachment consisting of binary data (e.g. an image) and the format of the response will be set to "arraybuffer".
               */
              binaryAttachment: true;
          }
    );

    function defineGlobal(module: object): void;
    function defineModule(name: string, module: object): void;

    /**
     * Get the location of the current page of the host product.
     * @param callback
     */
    function getLocation(callback: (location: string) => void): void;

    /**
     * Resize the iframe to a specified width and height.
     *
     * Only content within an element with the class `ac-content` will be resized automatically.
     * Content without this identifier is sized according to the `body` element, and will dynamically grow, but not shrink.
     *
     * Note that this method cannot be used in dialogs.
     * @param width the desired width
     * @param height the desired height
     */
    function resize(width: string, height: string): void;

    /**
     * Resize the iframe, so that it takes the entire page. Add-on may define to hide the footer using data-options.
     *
     * Note that this method is only available for general page modules.
     * @param hideFooter true if the footer is supposed to be hidden
     */
    function sizeToParent(hideFooter: boolean): void;

    /**
     * Hide footer..
     * @param hideFooter true if the footer is supposed to be hidden
     */
    function hideFooter(hideFooter: boolean): void;

    /**
     * allows for dynamic rejection of ajax requests before they can be invoked. eg: by checking against a whitelist
     */
    function addRequestMarshal(): void;

    /**
     * Execute an XMLHttpRequest as a Promise, or via callbacks, in the context of the host application. The format of the response (dataType) will always be set to "text" - even if specified.
     * @param url Either the URI to request or an options object (as below) containing at least a 'url' property; This value should be relative to the context path of the host application.
     * @param options The options of the request.
     */
    function request(
        url: string,
        options?: {
            /**
             * If this is set to true, the developer is specifying a request for an attachment consisting of binary data (e.g. an image) and the format of the response will be set to "arraybuffer".
             */
            binaryAttachment?: false;
        } & RequestOptions,
    ): Promise<{ body: string; xhr: XMLHttpRequest }>;
    function request(
        options: {
            /**
             * The url to request from the host application, relative to the host's context path
             */
            url: string;

            /**
             * If this is set to true, the developer is specifying a request for an attachment consisting of binary data (e.g. an image) and the format of the response will be set to "arraybuffer".
             */
            binaryAttachment?: false;
        } & RequestOptions,
    ): Promise<{ body: string; xhr: XMLHttpRequest }>;
    function request(
        url: string,
        options: {
            /**
             * If this is set to true, the developer is specifying a request for an attachment consisting of binary data (e.g. an image) and the format of the response will be set to "arraybuffer".
             */
            binaryAttachment: true;
        } & RequestOptions,
    ): Promise<{ body: ArrayBuffer; xhr: XMLHttpRequest }>;
    function request(
        options: {
            /**
             * The url to request from the host application, relative to the host's context path
             */
            url: string;

            /**
             * If this is set to true, the developer is specifying a request for an attachment consisting of binary data (e.g. an image) and the format of the response will be set to "arraybuffer".
             */
            binaryAttachment: true;
        } & RequestOptions,
    ): Promise<{ body: ArrayBuffer; xhr: XMLHttpRequest }>;

    /**
     * A Confluence specific JavaScript module which provides functions to interact with the macro editor.
     */
    namespace confluence {
        interface ContentProperty {
            /**
             * the key of the property to create or update
             */
            key: string;

            /**
             * the value of the property - may be a String or JavaScript object.
             */
            value: string | object;

            /**
             * a JavaScript object that defines the version of the content property
             */
            version: object;
        }

        /**
         * Save a macro with data that can be accessed when viewing the confluence page.
         * @param macroParameters data to be saved with the macro.
         * @param macroBody the macro body to be saved with the macro. If omitted, the existing body will remain untouched.
         * @example
         * AP.confluence.saveMacro({foo: 'bar'});
         * AP.confluence.saveMacro({foo: 'bar'}, "a new macro body");
         */
        function saveMacro(macroParameters: object, macroBody?: string): void;

        /**
         * Closes the macro editor, if it is open.
         *
         * This call does not save any modified parameters to the macro, and saveMacro should be called first if necessary.
         * @example
         * AP.confluence.closeMacroEditor();
         */
        function closeMacroEditor(): void;

        /**
         * Get the data saved in the saveMacro method.
         * @param callback to be passed the macro data.
         * @example
         * AP.confluence.getMacroData(function(data){
         *   alert(data);
         * });
         */
        function getMacroData(callback: (data: object) => void): void;

        /**
         * Get the body saved in the saveMacro method.
         * @param callback callback to be passed the macro body.
         * @example
         * AP.confluence.getMacroBody(function(body){
         *   alert(body);
         * });
         */
        function getMacroBody(callback: (body: string) => void): void;

        /**
         * Provide handlers for property panel control events
         *
         * Event name components:
         *
         * `control-key`: "key" property provided for the custom control declared in the JSON descriptor
         * `event-type`: type of user interaction, as described below
         * `macro-key`: "key" property provided for the macro declared in the JSON descriptor
         *
         * Event types:
         *
         * `click`: the property panel control was clicked by the user
         * @param eventBindings An object which specifies property panel events as keys and handler functions as values. The handler does not take any arguments.
         * @example
         * AP.confluence.onMacroPropertyPanelEvent({
         *   "{event-type}.{control-key}.{macro-key}.macro.property-panel": function() {
         *     // handle button click
         *     AP.confluence.closeMacroPropertyPanel();
         *   }
         * });
         */
        function onMacroPropertyPanelEvent(eventBindings: Record<string, () => void>): void;

        /**
         * Closes the macro property panel, if it is open.
         * @example
         * AP.confluence.closeMacroPropertyPanel();
         */
        function closeMacroPropertyPanel(): void;

        /**
         * Provides the Content Property with the given key, on the current Content, to the callback.
         * @param key the key of the property to retrieve
         * @param callback callback to be passed the content property
         * @example
         * AP.confluence.getContentProperty('propertyKey', function(property) {
         *   alert(property);
         * });
         */
        function getContentProperty(key: string, callback: (property: ContentProperty) => void): void;

        /**
         * Sets the provided Content Property against the current Content, sending the result to the callback.
         * @param contentProperty the content property to create or update
         * @param callback callback to be passed the result
         * @example
         * AP.confluence.setContentProperty({
         *   key: 'propertyKey',
         *   value: 'propertyValue',
         *   version: {
         *     number: 2
         *   }
         * }, function(result) {
         *    alert(result.property); // the updated property, if successful
         *    alert(result.error);    // if unsuccessful, the reason for the failure
         * });
         */
        function setContentProperty(
            contentProperty: ContentProperty,
            callback: (result: { property: ContentProperty } | { error: string }) => void,
        ): void;

        /**
         * Raise contentProperty.update event for the Content Property with the given key on the current Content. It also provide content property to the callback like getContentProperty does.
         * @param key the key of the property to retrieve
         * @param callback callback to be passed the content property
         * @example
         * AP.confluence.syncPropertyFromServer('propertyKey', function(property) {
         *   alert(property);
         * });
         */
        function syncPropertyFromServer(key: string, callback: (property: ContentProperty) => void): void;
    }

    /**
     * A JavaScript module which provides functions for the current product context.
     */
    namespace context {
        /**
         * Retrieves the current user context as a JWT token containing details such as space key, issue id, etc. Throws an error if add-on does not support JWT authentication
         * @param callback the callback that handles the response
         */
        function getToken(callback: (token: string) => void): void;
        function getToken(): Promise<string>;

        /**
         * Retrieves the current user context containing details such as space key, issue id, etc.
         * @param callback the callback that handles the response
         */
        function getContext(callback: (context: any) => void): void;
        function getContext(): Promise<any>;
    }

    /**
     * Allows add-ons to store, retrieve and erase cookies against the host Jira / Confluence. These cannot be seen by other add-ons.
     */
    namespace cookie {
        /**
         * Save a cookie.
         * @param name name of cookie
         * @param value value of cookie
         * @param expires number of days before cookie expires
         */
        function save(name: string, value: string, expires: number): void;

        /**
         * Get the value of a cookie.
         * @param name name of cookie to read
         * @param callback callback to pass cookie data
         */
        function read(name: string, callback: (value: string) => void): void;

        /**
         * Remove the given cookie.
         * @param name the name of the cookie to remove
         */
        function erase(name: string): void;
    }

    /**
     * A Confluence specific JavaScript module which provides functions to interact with the custom content.
     */
    namespace customContent {
        type InterceptableEvent =
            /**
             * Add-on **must** intercept this event to provide the content body.
             * The `confluence.customcontent.submit` event will be emitted when user clicks the save button on the custom content edit component.
             * @example <caption>**Return a content body string** The string will be used as the content body.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * editComponent.intercept('confluence.customcontent.submit');
             * AP.events.on('confluence.customcontent.submit', function (context) {
             *     editComponent.submitCallback(document.querySelector("#textarea").value);
             * });
             * @example <caption>**Return a complete content object** Add-on can return a complete content object.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * editComponent.intercept('confluence.customcontent.submit');
             * AP.events.on('confluence.customcontent.submit', function (context) {
             *   editComponent.submitCallback({
             *     "title": context.title,
             *     "space": {"key": context.spaceKey},
             *     "type": context.contentType,
             *     "body": {
             *       "storage": {
             *         "value": "<p>New page data.</p>",
             *         "representation": "storage"
             *       }
             *     }
             *   });
             * });
             * @example <caption>**Return false** Add-on can also return false to cancel the submit action.
             * Additionally you can return an extra string as the error message. It will be shown as a flag message.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * editComponent.intercept('confluence.customcontent.submit');
             * AP.events.on('confluence.customcontent.submit', function (context) {
             *     editComponent.submitCallback(false);
             *     // editComponent.submitCallback(false, 'Cannot save the content');
             * });
             */
            | 'confluence.customcontent.submit'

            /**
             * The `confluence.customcontent.submitSuccess` event will be emitted when Confluence successfully saved the content.
             * If add-on didn't intercept this event, user will be redirected to the content view page.
             * You can call `submitSuccessCallback` function to return the data:
             * @example <caption>**Return false** Return false will prevent Confluence redirect user to the content view page.
             * In this case, add-on can redirect user using the [JavaScript Navigator API]{@link navigator}.
             * Additionally you can return an extra string as the error message. It will be shown as a flag message.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * ...
             * editComponent.intercept('confluence.customcontent.submitSuccess');
             * AP.events.on('confluence.customcontent.submitSuccess', function (newContent) {
             *     // newContent is the saved content object
             *     editComponent.submitSuccessCallback(false);
             *     // editComponent.submitSuccessCallback(false, 'Some error message');
             * });
             * @example <caption>**Return true** User will not be redirected until **submitSuccessCallback** has been called.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * ...
             * editComponent.intercept('confluence.customcontent.submitSuccess');
             * AP.events.on('confluence.customcontent.submitSuccess', function (newContent) {
             *     // newContent is the saved content object
             *     editComponent.submitSuccessCallback(true);
             * });
             */
            | 'confluence.customcontent.submitSuccess'

            /**
             * The `confluence.customcontent.submitError` event will be emitted when Confluence encountered problem when saving the content.
             * If add-on didn't intercept this event, a flag message will be shown.
             * You can call `submitErrorCallback` function to return the data:
             * @example <caption>**Return false** Return `false` will prevent error message be shown.
             * Additionally you can return an extra string as the error message. It will be shown as a flag message.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * ...
             * editComponent.intercept('confluence.customcontent.submitError');
             * AP.events.on('confluence.customcontent.submitError', function (errorMessage) {
             *     editComponent.submitErrorCallback(false, 'My own error message');
             * });
             * @example <caption>**Return true** Error message will not be shown until submitErrorCallback has been called.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * ...
             * editComponent.intercept('confluence.customcontent.submitError');
             * AP.events.on('confluence.customcontent.submitError', function (errorMessage) {
             *     editComponent.submitErrorCallback(true);
             * });
             */
            | 'confluence.customcontent.submitError'

            /**
             * The `confluence.customcontent.cancel` event will be emitted when user clicks close button.
             * If add-on didn't intercept this event, user will be redirected to the custom content list or the container page depending on the content type.
             * You can call cancelCallback function to return the data:
             * @example <caption>**Return false** Return `false` will prevent user being redirected.
             * In this case, add-on can redirect user using the [JavaScript Navigator API]{@link navigator}.
             * Additionally you can return an extra string as the error message. It will be shown as a flag message.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * ...
             * editComponent.intercept('confluence.customcontent.cancel');
             * AP.events.on('confluence.customcontent.cancel', function (errorMessage) {
             *     editComponent.cancelCallback(false, 'My error message');
             *     //  editComponent.cancelCallback(false);
             * });
             * @example <caption>**Return true** User will not be redirected until `cancelCallback` has been called.</caption>
             * var editComponent = AP.customContent.getEditComponent();
             * ...
             * editComponent.intercept('confluence.customcontent.cancel');
             * AP.events.on('confluence.customcontent.cancel', function (errorMessage) {
             *     editComponent.cancelCallback(true);
             * });
             */
            | 'confluence.customcontent.cancel';

        interface EditComponent {
            /**
             * See docs on InterceptableEvent type
             * @param event Event to intercept
             * @see InterceptableEvent
             */
            intercept: (event: InterceptableEvent) => void;

            /**
             * Used inside an event listener for a `confluence.customcontent.submit` event to submit the content of the macro.
             * @param contentBody can be either content body string, a complete content object or false (cancels submit action)
             * @see InterceptableEvent
             */
            submitCallback: (contentBody: string | object | false) => void;

            /**
             * Used inside an event listener for a `confluence.customcontent.submitSuccess` event to do something before the user is redirected and/or
             * to instruct Confluence on whether to redirect the user to the content page view after the content was saved successfully.
             * If no redirect is desired, an error message can also be shown.
             * @param doRedirect Whether to redirect the user to the content view. If false, an error can be shown.
             * @param error The error to display if no redirect is desired
             * @see InterceptableEvent
             */
            submitSuccessCallback: (doRedirect: boolean, error?: string) => void;

            /**
             * Used inside an event listener for a `confluence.customcontent.submitError` event to do something before the error is being shown and/or
             * prevent Confluence from showing the default error message and optionally providing a custom one.
             * @param preventDefaultErrorMessage Whether to show the default error message. If false, a custom error can be shown
             * @param customError The error to show instead of the default Confluence one
             * @see InterceptableEvent
             */
            submitErrorCallback: (preventDefaultErrorMessage: boolean, customError?: string) => void;

            /**
             * Used inside an event listener for a `confluence.customcontent.cancel` event to do something before the user is redirected and/or
             * to instruct Confluence on whether to redirect the user to the content page view after the user clicked the "Close" button.
             * If no redirect is desired, an error message can also be shown.
             * @param doRedirect Whether to redirect the user to the content view. If false, an error can be shown.
             * @param error The error to display if no redirect is desired
             * @see InterceptableEvent
             */
            cancelCallback: (doRedirect: boolean, error?: string) => void;
        }

        /**
         * Intercept edit component events of custom content.
         * If the intercept function was invoked for an event then Confluence will wait for the data from the corresponding callback function up to 10 seconds.
         * If add-on didn't return data, a timeout error message will be shown.
         * @return EditComponent
         */
        function getEditComponent(): EditComponent;
    }

    /**
     * The Dialog module provides a mechanism for launching an add-on's modules as modal dialogs from within an add-on's iframe.
     * A modal dialog displays information without requiring the user to leave the current page.
     *
     * The dialog is opened over the entire window, rather than within the iframe itself.
     */
    namespace dialog {
        interface DialogOptions {
            /**
             * The module key of a dialog, or the key of a page or web-item that you want to open as a dialog.
             */
            key: string;

            /**
             * Opens the dialog at a preset size: small, medium, large, x-large or fullscreen (with chrome).
             */
            size?: 'small' | 'medium' | 'large' | 'x-large' | 'fullscreen' | undefined;

            /**
             * if size is not set, define the width as a percentage (append a % to the number) or pixels.
             */
            width?: number | undefined;

            /**
             * if size is not set, define the height as a percentage (append a % to the number) or pixels.
             */
            height?: number | undefined;

            /**
             * (optional) opens the dialog with heading and buttons.
             */
            chrome?: boolean | undefined;

            /**
             * (optional) text to display in the header if opening a dialog with chrome.
             */
            header?: string | undefined;

            /**
             * (optional) text for the submit button if opening a dialog with chrome.
             */
            submitText?: string | undefined;

            /**
             * (optional) text for the cancel button if opening a dialog with chrome.
             */
            cancelText?: string | undefined;

            /**
             * (optional) custom data object that can be accessed from the actual dialog iFrame.
             */
            customData?: object | undefined;

            /**
             * (optional) if true, pressing ESC inside the dialog will close the dialog (default is true).
             */
            closeOnEscape?: boolean | undefined;

            /**
             * (optional) an array of custom buttons to be added to the dialog if opening a dialog with chrome.
             */
            buttons?: Array<{ text: string; identifier: string }> | undefined;

            /**
             * (optional) Suggested actions or helpful info that will be added to the dialog if opening with chrome.
             */
            hint?: string | undefined;
        }

        interface DialogButton {
            /**
             * Sets the button state to enabled
             */
            enable(): void;

            /**
             * Sets the button state to disabled. A disabled button cannot be clicked and emits no events.
             */
            disable(): void;

            /**
             * Query a button for its current state.
             * @param callback function to receive the button state.
             */
            isEnabled(callback: (enabled: boolean) => void): void;

            /**
             * Toggle the button state between enabled and disabled.
             */
            toggle(): void;

            /**
             * Trigger a callback bound to a button.
             */
            trigger(): void;

            /**
             * Query a button for its current hidden/visible state.
             * @param callback function to receive the button state.
             */
            isHidden(callback: (hidden: boolean) => void): void;

            /**
             * Sets the button state to hidden
             */
            hide(): void;

            /**
             * Sets the button state to visible
             */
            show(): void;
        }

        interface Dialog {
            on: (name: string, callback: () => void) => void;
        }

        /**
         * Creates a dialog for a common dialog, page or web-item module key.
         * @param options configuration object of dialog options.
         */
        function create(options: DialogOptions): Dialog;

        /**
         * Closes the currently open dialog. Optionally pass data to listeners of the `dialog.close` event. This will only close a dialog that has been opened by your add-on.
         * You can register for close events using the `dialog.close` event and the events module.
         * @param data
         */
        function close(data?: object): void;

        /**
         * Passes the custom data Object to the specified callback function.
         * @param callback Callback method to be executed with the custom data.
         */
        function getCustomData(callback: (customData: object) => void): void;

        /**
         * Returns the button that was requested (either cancel or submit). If the requested button does not exist, an empty Object will be returned instead.
         */
        function getButton(button: 'cancel' | 'submit'): DialogButton | {};

        /**
         * Stop the dialog from closing when the submit button is clicked
         */
        function disableCloseOnSubmit(): void;

        /**
         * Creates a dialog button that can be controlled with javascript
         */
        function createButton(): DialogButton;

        /**
         * Queries the value of the 'closeOnEscape' property.
         *
         * If this property is true then the dialog should close if ESC is pressed.
         * @param callback function to receive the 'closeOnEscape' value.
         */
        function isCloseOnEscape(callback: (enabled: boolean) => void): void;
    }

    /**
     * The Events module provides a mechanism for emitting and receiving events.
     *
     * A event emitted by `emit` method will only be received by the modules defined in the same add-on.
     * Public events that emitted by `emitPublic` are used for cross add-on communication. They can be received by any add-on modules that are currently presented on the page.
     */
    namespace events {
        /**
         * Adds a listener for all occurrences of an event of a particular name.
         *
         * Listener arguments include any arguments passed to events.emit, followed by an object describing the complete event information.
         * @param name The event name to subscribe the listener to
         * @param listener A listener callback to subscribe to the event name
         */
        function on(name: string, listener: (data: object) => void): void;

        /**
         * Adds a listener for all occurrences of a public event of a particular name.
         *
         * Listener arguments include any arguments passed to `events.emitPublic`, followed by an object describing the complete event information.
         *
         * Event emitter's information will be passed to the first argument of the filter function. The listener callback will only be called when filter function returns `true`.
         * @param name The event name to subscribe the listener to
         * @param listener A listener callback to subscribe to the event name
         * @param filter A filter function to filter the events. Callback will always be called when a matching event occurs if the filter is unspecified
         */
        function onPublic(name: string, listener: (data: object) => void, filter: (toCompare: any) => boolean): void;

        /**
         * Adds a listener for one occurrence of an event of a particular name.
         *
         * Listener arguments include any argument passed to `events.emit`, followed by an object describing the complete event information.
         * @param name The event name to subscribe the listener to
         * @param listener A listener callback to subscribe to the event name
         */
        function once(name: string, listener: (data: object) => void): void;

        /**
         * Adds a listener for one occurrence of a public event of a particular name.
         *
         * Listener arguments include any argument passed to `events.emit`, followed by an object describing the complete event information.
         *
         * Event emitter's information will be passed to the first argument of the filter function. The listener callback will only be called when filter function returns `true`.
         * @param name The event name to subscribe the listener to
         * @param listener A listener callback to subscribe to the event name
         * @param filter A filter function to filter the events. Callback will always be called when a matching event occurs if the filter is unspecified
         */
        function oncePublic(name: string, listener: (data: object) => void, filter: (toCompare: any) => boolean): void;

        /**
         * Adds a listener for all occurrences of any event, regardless of name.
         *
         * Listener arguments begin with the event name, followed by any arguments passed to `events.emit`, followed by an object describing the complete event information.
         * @param listener A listener callback to subscribe for any event name
         */
        function onAny(listener: (name: string, data: object) => void): void;

        /**
         * Adds a listener for all occurrences of any event, regardless of name.
         *
         * Listener arguments begin with the event name, followed by any arguments passed to `events.emit`, followed by an object describing the complete event information.
         *
         * Event emitter's information will be passed to the first argument of the filter function. The listener callback will only be called when filter function returns `true`.
         * @param listener A listener callback to subscribe for any event name
         * @param filter A filter function to filter the events. Callback will always be called when a matching event occurs if the filter is unspecified
         */
        function onAnyPublic(listener: (name: string, data: object) => void, filter: (toCompare: any) => boolean): void;

        /**
         * Removes a particular listener for an event.
         * @param name The event name to unsubscribe the listener from
         * @param listener The listener callback to unsubscribe from the event name
         */
        function off(name: string, listener: (data: object) => void): void;

        /**
         * Removes a particular listener for a public event.
         * @param name The event name to unsubscribe the listener from
         * @param listener The listener callback to unsubscribe from the event name
         */
        function offPublic(name: string, listener: (data: object) => void): void;

        /**
         * Removes all listeners from an event name, or unsubscribes all event-name-specific listeners if no name if given.
         * @param name  The event name to unsubscribe all listeners from
         */
        function offAll(name: string): void;

        /**
         * Removes all listeners from a public event name, or unsubscribes all event-name-specific listeners for public events if no name if given.
         * @param name The event name to unsubscribe all listeners from
         */
        function offAllPublic(name: string): void;

        /**
         * Removes an `any` event listener.
         * @param listener A listener callback to unsubscribe from any event name
         */
        function offAny(listener: (name: string, data: object) => void): void;

        /**
         * Removes an `anyPublic` event listener.
         * @param listener A listener callback to unsubscribe from any event name
         */
        function offAnyPublic(listener: (name: string, data: object) => void): void;

        /**
         * Emits an event on this bus, firing listeners by name as well as all 'any' listeners.
         *
         * Arguments following the name parameter are captured and passed to listeners.
         * @param name The name of event to emit
         * @param args 0 or more additional data arguments to deliver with the event
         */
        function emit(name: string, args: string[]): void;

        /**
         * Emits a public event on this bus, firing listeners by name as well as all 'anyPublic' listeners.
         *
         * The event can be received by any add-on modules that are currently presented on the page.
         *
         * Arguments following the name parameter are captured and passed to listeners.
         * @param name The name of event to emit
         * @param args 0 or more additional data arguments to deliver with the event
         */
        function emitPublic(name: string, args: string[]): void;
    }

    /**
     * Flags are the primary method for providing system feedback in the product user interface.
     * Messages include notifications of various kinds: alerts, confirmations, notices, warnings, info and errors.
     */
    namespace flag {
        interface Flag {
            /**
             * Closes the Flag.
             */
            close(): void;
        }

        function create(
            options: Partial<{
                /**
                 * The title text of the flag.
                 */
                title: string;

                /**
                 * The body text of the flag.
                 */
                body: string;

                /**
                 * Sets the type of the message. Valid options are "info", "success", "warning" and "error".
                 */
                type: 'info' | 'success' | 'warning' | 'error';

                /**
                 * The closing behaviour that this flag has. Valid options are "manual", and "auto".
                 */
                close: 'manual' | 'auto';

                /**
                 * Map of {actionIdentifier: 'Action link text'} to add to the flag. The actionIdentifier will be passed to a 'flag.action' event if the link is clicked.
                 */
                actions: { [key: string]: string };
            }>,
        ): Flag;
    }

    /**
     * The History API allows your add-on to manipulate the current page URL for use in navigation. When using the history module only the page anchor is modified and not the entire window location.
     *
     * Note: This is only enabled for page modules (Admin page, General page, Configure page, User profile page). It cannot be used if the page module is launched as a dialog.
     */
    namespace history {
        /**
         * Goes back one step in the joint session history. Will invoke the popState callback.
         */
        function back(): void;

        /**
         * Goes back one step in the joint session history. Will invoke the popState callback.
         */
        function forward(): void;

        /**
         * Moves the page history back or forward the specified number of steps.
         * A zero delta will reload the current page. If the delta is out of range, does nothing. This call invoke the popState callback.
         * @param delta Number of places to move in the history
         */
        function go(delta: number): void;

        /**
         * Retrieves the current state of the history stack and returns the value. The returned value is the same as what was set with the pushState method.
         * @returns The current url anchor
         */
        function getState(): string;

        /**
         * Updates the location's anchor with the specified value and pushes the given data onto the session history. Does not invoke popState callback.
         * @param newState
         * @param title
         * @param url URL to add to history
         */
        function pushState(newState: object, title: string, url: string): void;

        /**
         * Updates the current entry in the session history. Updates the location's anchor with the specified value but does not change the session history. Does not invoke popState callback.
         * @param url URL to update current history value with
         */
        function replaceState(url: string): void;
    }

    /**
     * Hosts are the primary method for Connect apps to interact with the page.
     */
    namespace host {
        /**
         * Gets the selected text on the page.
         * @param callback method to be executed with the selected text.
         * @deprecated This method has been deprecated by Atlassian for security reasons and will always return an empty string as of 2022-07-11.
         * @see {@link https://community.developer.atlassian.com/t/deprecation-of-connect-js-getselectedtext-api-for-security-reasons/54968}
         */
        function getSelectedText(callback: (selection: string) => void): void;
    }

    /**
     * The inline dialog is a wrapper for secondary content/controls to be displayed on user request.
     * Consider this component as displayed in context to the triggering control with the dialog overlaying the page content.
     * An inline dialog should be preferred over a modal dialog when a connection between the action has a clear benefit versus having a lower user focus.
     *
     * Inline dialogs can be shown via a web item target.
     */
    namespace inlineDialog {
        /**
         * Hide the inline dialog that contains the iframe where this method is called from.
         */
        function hide(): void;
    }

    /**
     * A JavaScript module which provides functions to interact with Jira.
     */
    namespace jira {
        interface WorkflowConfiguration {
            /**
             * Validate a workflow configuration before saving
             * @param listener called on validation. Return false to indicate that validation has not passed and the workflow cannot be saved.
             */
            onSaveValidation(listener: (listener: object) => void): void;

            /**
             * Attach a callback function to run when a workflow is saved
             * @param listener called on save.
             */
            onSave(listener: (listener: object) => void): void;

            /**
             * Save a workflow configuration if valid.
             */
            trigger(): WorkflowConfigurationTriggerResponse;
        }

        interface WorkflowConfigurationTriggerResponse {
            /**
             * The result of the validation listener [WorkflowConfiguration.onSaveValidation]{@link WorkflowConfiguration.onSaveValidation}.
             */
            valid: any;

            /**
             * The result of the [WorkflowConfiguration.onSave]{@link WorkflowConfiguration.onSave}.
             */
            value: any;
        }

        interface DatePickerOptions {
            /**
             * HTML element below which date picker will be positioned. If provided, it takes precedence over `options.position`.
             */
            element: HTMLElement;

            /**
             * Position of the element relative to the iframe. options.element takes precedence over it when provided.
             */
            position: { top: number; left: number };

            /**
             * Flag determining whether the component should also have a time picker. Defaults to `false`.
             */
            showTime: boolean;

            /**
             * Date (and time) that should be pre-selected when displaying the picker in the format understandable by Date.parse method in JavaScript.
             *
             * ISO 8601 is preferred. Timezone should be set to Z for UTC time or in the format of +/-hh:mm. Not setting it will cause JavaScript to use local timezone set in the browser.
             * Defaults to current date/time.
             */
            date: string;

            /**
             * Callback that will be invoked when the date (and time) is selected by the user.
             */
            onSelect: (isoDate: string, date: Date) => void;
        }

        /**
         * Refresh an issue page without reloading the browser.
         *
         * This is helpful when your add-on updates information about an issue in the background.
         */
        function refreshIssuePage(): void;

        function getWorkflowConfiguration(callback: (workflowConfiguration: WorkflowConfiguration) => void): void;

        /**
         * Returns whether the current user is permitted to edit the dashboard item
         * @param callback the callback that handles the response
         */
        function isDashboardItemEditable(callback: (editable: boolean) => void): void;

        /**
         * Open the quick create issue dialog. The dialog fields may be pre-filled with supplied data. A callback will be invoked when the dialog is closed and will include an array of issues created.
         * @param callback invoked when dialog is closed, takes a single parameter - array of issues created
         * @param params contains data to pre-fill the dialog with
         */
        function openCreateIssueDialog(
            callback: (issues: object[]) => void,
            params: { pid: number; issueType: number; fields: object },
        ): void;

        /**
         * Set the title of a dashboard item to the given text.
         * @param title the title of the dashboard item. Any HTML is escaped.
         */
        function setDashboardItemTitle(title: string): void;

        /**
         * Shows a date picker component. A callback will be invoked when the date (and time) is selected by the user.
         * @param options Configuration of the date picker.
         */
        function openDatePicker(options: Partial<DatePickerOptions>): void;

        /**
         * Prepares the JQL Editor dialog in preparation for fast rendering. This method should be called on iframe load if it contains a JQL editor trigger.
         */
        function initJQLEditor(): void;

        /**
         * Launches a JQL Editor dialog. A callback will be invoked when the JQL is submitted by the user.
         * @param callback invoked when dialog is submitted, includes an object containing the jql
         * @param options contains data to pre-fill the dialog with
         */
        function showJQLEditor(
            callback: (obj: { jql: string }) => void,
            options: Partial<{
                /**
                 * Optionally provide initial JQL to pre-fill the dialog with
                 */
                jql: string;

                /**
                 * Optionally overwrite the title of the dialog
                 */
                header: string;

                /**
                 * Optionally provide up to 512 chars to be displayed below header
                 */
                descriptionText: string;

                /**
                 * Optionally overwrite the submit button text
                 */
                submitText: string;

                /**
                 * Optionally overwrite the cancel button text
                 */
                cancelText: string;
            }>,
        ): void;

        /**
         * Returns whether the addon is being shown within a native app on iOS, Android or Mac.
         * @param callback the callback that handles the response
         */
        function isNativeApp(callback: (isNative: boolean) => void): void;
    }

    /**
     * The Navigator API allows your add-on to change the current page using JavaScript.
     */
    namespace navigator {
        type NavigatorTargetJira =
            /**
             * A specific dashboard in Jira. Takes a `dashboardId` to identify the dashboard.
             */
            | 'dashboard'

            /**
             * A specific Issue in Jira. Takes an `issueKey` to identify the issue.
             */
            | 'issue'

            /**
             * The module page within a specific add-on. Takes an `addonKey` and a `moduleKey` to identify the correct module.
             */
            | 'addonModule'

            /**
             * The profile page for a Jira User. Takes a `username` or `userAccountId` to identify the user.
             */
            | 'userProfile'

            /**
             * The admin details of a specific Jira Project. Takes a `projectKey` to identify the project. Only accessible to administrators.
             */
            | 'projectAdminSummary'

            /**
             * The admin panel definted by a connect addon. Takes an `addonKey`, `adminPageKey`, `projectKey` and `projectId`. Only accessible to administrators.
             */
            | 'projectAdminTabPanel'

            /**
             * A specific location contained within the site. Takes either a `relativeUrl` or `absoluteUrl` to identify the path.
             */
            | 'site';

        type NavigatorTargetConfluence =
            /**
             * The view page for pages, blogs and custom content. Takes a `contentId` to identify the content.
             */
            | 'contentview'

            /**
             * The edit page for pages, blogs and custom content. Takes a `contentId` to identify the content.
             */
            | 'contentedit'

            /**
             * The space view page. Takes a `spaceKey` to identify the space.
             */
            | 'spaceview'

            /**
             * The space tools page. Takes a `spaceKey` to identify the space.
             */
            | 'spacetools'

            /**
             * The dashboard of Confluence.
             */
            | 'dashboard'

            /**
             * The profile page for a specific user. Takes a `username` or `userAccountId` to identify the user.
             */
            | 'userProfile'

            /**
             * The module page within a specific add-on. Takes an `addonKey` and a `moduleKey` to identify the correct module.
             */
            | 'addonModule'

            /**
             * The list/collector page for pages, blogs and custom content contained in a space. Takes a `spaceKey` and a `contentType` to identify the content type.
             */
            | 'contentlist'

            /**
             * A specific location contained within a site. Takes a `relativeUrl` to identify the path.
             */
            | 'site';

        type CustomDataBasicValue = string | number | boolean | null | undefined;
        type CustomDataValue = CustomDataBasicValue | CustomDataBasicValue[];

        interface NavigatorContext {
            /**
             * Identifies a piece of content. Required for the `contentView` target.
             */
            contentId: string;

            /**
             * Identifies the type of content. Can be either `page` or `blogpost`. Required for the `contentEdit` target.
             */
            contentType: 'page' | 'blogpost';

            /**
             * Identifies a space. Required for the `spaceView` and `spaceTools` targets.
             */
            spaceKey: string;

            /**
             * Identifies a user. One of this or `userAccountId` required for the `userProfile` target.
             */
            username: string;

            /**
             * Identifies a user. One of this or `username` required for the `userProfile` target.
             */
            userAccountId: string;

            /**
             * Identifies a connect add-on. Required for the `addonModule` and `projectAdminTabPanel` targets.
             */
            addonKey: string;

            /**
             * Identifies a connect add-on module. Required for the `addonModule` target.
             */
            moduleKey: string;

            /**
             * Identifies a Jira dashboard. Required for the `dashboard` target in Jira.
             */
            dashboardId: string;

            /**
             * Identifies a Jira project. Required for the `projectSummary`, `projectAdminSummary` and `projectAdminTabPanel` targets.
             */
            projectKey: string;

            /**
             * Identifies a Jira issue. Required for the `issue` target.
             */
            issueKey: string;

            /**
             * Identifies a Jira Project Admin Tab Panels module key. Required for the `projectAdminTabPanel` target.
             */
            adminPageKey: string;

            /**
             * Identifies a Jira Project by its ID number. Required for the `projectAdminTabPanel` target.
             */
            projectId: string;

            /**
             * Contains parameters that will be added as query parameters to the product url with "ac." prepended.
             * Used only in `addonModule` target. See Add-on specific context parameters for more info.
             * @example Passing { foo: 'bar' } here causes your iframe to be called with "...?ac.foo=bar"
             * @see {@link https://developer.atlassian.com/cloud/confluence/context-parameters#apps}
             */
            customData: Record<string, CustomDataValue>;

            /**
             * Identifies a version of a piece of content in Confluence. This parameter is optional, and only applies to the `contentView` target, allowing navigation to a specific version.
             */
            versionOverride: string;

            /**
             * Identifies the mode for rendering embedded content in Confluence, such as attachments embedded in a page. This only applies to the `contentView` target.
             * Valid values are:
             * - `current` (render the embedded content using the latest version)
             * - `version-at-save` (render the embedded content using the version at the time the content was saved)
             *
             * This parameter is optional and defaults to `current`.
             */
            embeddedContentRender?: 'current' | 'version-at-save' | undefined;

            /**
             * Identifies a specific page within a site. Required for the `site` target and must begin with `/`.
             */
            relativeUrl: string;

            /**
             * Identifies a specific page within a site. Required for the `site` target and must be within the site's domain.
             */
            absoluteUrl: string;
        }
        /**
         * Returns the context of the current page within the host application.
         *
         * This method will provide a context object to the passed in callback. This context object will contain information about the page currently open in the host application.
         *
         * The object will contain a target, which can be used when calling the go method, and a context map containing in formation about the opened page.
         *
         * Currently this method supports two contexts in Confluence only:
         *
         * **contentview** - The host application is currently viewing a page, blog post or other content.
         *
         * **contentedit** - the host application is currently editing a page, blog post or other content.
         * @param callback
         */
        function getLocation(callback: (location: string) => void): void;

        /**
         * Navigates the user from the current page to the specified page. This call navigates the host product, not the iframe content.
         *
         * Requires a target location and the corresponding context. Navigating by passing a concrete url is currently unsupported.
         * @param target
         * @param context
         */
        function go(target: NavigatorTargetJira | NavigatorTargetConfluence, context: Partial<NavigatorContext>): void;

        /**
         * Triggers a reload of the parent page.
         */
        function reload(): void;
    }

    /**
     * A JavaScript module which provides functions to interact with the user currently in session.
     */
    namespace user {
        /**
         * Retrieves the current user object containing the user's id and full name
         * @deprecated Please use a new method AP.user.getCurrentUser() which will simply return the Atlassian Account ID.
         * @param callback the callback that handles the response
         */
        function getUser(callback: (user: { id: string; key: string; fullName: string }) => void): void;

        /**
         * This method retrieves the current user object containing the user's Atlassian Account ID.
         * @param callback the callback that handles the response. A single parameter is passed to the callback. This parameter is an object comprising an attribute "atlassianAccountId".
         */
        function getCurrentUser(callback: (user: { atlassianAccountId: string }) => void): void;

        /**
         * Retrieve the current user's timezone. If there is no logged in user, the server timezone is returned.
         *
         * Please be aware that this field is under profile visibility controls and that a user may intend to hide this field from the public.
         * Because this API will provide unrestricted access to the current user's timezone you should only use this API to establish context for the user.
         * You should not present the user's timezone in a way that can be seen by other users viewing the application.
         * @param callback the callback that handles the response
         */
        function getTimeZone(callback: (timezone: string) => void): void;

        /**
         * Retrieve the user's locale used by the product.
         *
         * Please be aware that this field is under profile visibility controls and that a user may intend to hide this field from the public.
         * Because this API will provide unrestricted access to the current user's locale you should only use this API to establish context for the user.
         * You should not present the user's locale in a way that can be seen by other users viewing the application.
         * @param callback the callback that handles the response
         */
        function getLocale(callback: (locale: string) => void): void;
    }
}
