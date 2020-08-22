// Type definitions for non-npm package office-runtime 1.0
// Project: https://github.com/OfficeDev/office-js
// Definitions by: OfficeDev <https://github.com/OfficeDev>,
//                 Michelle Scharlock <https://github.com/mscharlock>,
//                 David Chesnut <https://github.com/davidchesnut>,
//                 Alex Jerabek <https://github.com/AlexJerabek>,
//                 Sudhi Ramamurthy <https://github.com/sumurthy>,
//                 Ricky Kirkham <https://github.com/rick-kirkham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 2.4

/*
office-runtime
Copyright (c) Microsoft Corporation
*/

/**
 * Office runtime namespace.
 */
declare namespace OfficeRuntime {
  /**
   * Method that enables a pop up web dialog box.
   *
   * [Api set: SharedRuntime 1.1]
   *
   * @param url Must be a string.
   * @param options Optional parameter. Must be of type DisplayWebDialogOptions.
   */
  function displayWebDialog(url: string, options?: DisplayWebDialogOptions): Promise<Dialog>;
  /**
   * Asynchronous, global, and persistent key-value storage.
   */
  const storage: Storage;
  /**
   * Asynchronous, global, and persistent key-value storage.
   *
   * [Api set: SharedRuntime 1.1]
   *
   * @remarks
   * Storage limit is 10 MB per domain, which may be shared by multiple add-ins.
   */
  interface Storage {
    /**
     * Retrieves an item from storage based on its key.
     * Returns a Promise. In the event the Promise does not resolve, returns null.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param key Key of item to be retrieved. Must be a string.
     */
    getItem(key: string): Promise<string | null>;
    /**
     * Sets a key-value pair into storage or updates an existing key-value pair.
     * Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param key Key of item to be set. Must be a string.
     * @param value Must be a string.
     */
    setItem(key: string, value: string): Promise<void>;
    /**
     * Removes an item from storage based on its key.
     * Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param key Key of item to be removed. Must be a string.
     */
    removeItem(key: string): Promise<void>;
    /**
     * Retrieves multiple items from storage based on their key.
     * Returns a Promise. In the event the Promise does not resolve, returns null.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param keys Keys of items to be removed. Must be an array of strings.
     */
    getItems(keys: string[]): Promise<{ [key: string]: string | null }>;
    /**
     * Sets multiple items into storage or updates multiple items within storage.
     * Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param keyValues Key-value pairs to be set. Must be strings.
     */
    setItems(keyValues: { [key: string]: string }): Promise<void>;
    /**
     * Removes multiple items from storage.
     * Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param keys Keys of items to be removed. Must be an array of strings.
     */
    removeItems(keys: string[]): Promise<void>;
    /**
     * Retrieves an array of all keys from storage.
     *  Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    getKeys(): Promise<string[]>;
  }
  /** Object representing the dialog box. */
  interface Dialog {
    /**
     * Method to close a dialog box. Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    close(): Promise<void>;
  }
  /** Provides display options and actions a dialog box may take. */
  interface DisplayWebDialogOptions {
    /**
     * Optional parameter that determines whether the dialog box displays as a popup (false) or within an IFrame (true).
     * This setting is only applicable to custom functions running on Excel Online.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    displayInIFrame?: boolean;
    /**
     * Optional parameter that defines the height of the dialog box as a percentage of the current display.
     * For example, accepts strings such as: '50%', '50'.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    height?: string;
    /**
     * Optional parameter that defines the width of dialog as a percentage of window.
     * For example, accepts strings such as: '50%', '50'.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    width?: string;
    /**
     * Optional callback that runs when the dialog box sends a message to its parent.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    onMessage?: (message: string, dialog?: Dialog) => void;
    /**
     * Optional callback that runs when the dialog box is closed.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    onClose?: () => void;
    /**
     * Optional callback that runs when the dialog box sends an error.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    onRuntimeError?: (error: Error, dialog?: Dialog) => void;
  }
  /**
   * Contains authorization related APIs.
   */
  const auth: Auth;
    /**
     * Provides options for the user experience when Office obtains an access token to the add-in from AAD v. 2.0 with the `getAccessToken` method.
     */
    interface AuthOptions {
      /**
       * Allows Office to get an access token silently or through interactive consent, if one is required. Default value is `false`.
       * If set to `false`, Office will silently try to get an access token. If it fails to do so, Office will return a descriptive error.
       * If set to `true`, Office will show an interactive consent UI after it fails to silently get an access token.
       * The prompt will only allow consent to the AAD profile scope, not to any Microsoft Graph scopes.
       */
      allowConsentPrompt?: boolean;
      /**
       * Allows Office to get an access token silently provided consent is present or show interactive UI to sign in the user. Default value is `false`.
       * If set to `false`, Office will silently try to get an access token. If it fails to do so, Office will return a descriptive error.
       * If set to `true`, Office will show an interactive sign-in UI after it fails to silently get an access token.
       */
      allowSignInPrompt?: boolean;
      /**
       * Prompts the user to add their Office account (or to switch to it, if it is already added). Default value is `false`.
       *
       * @deprecated Use `allowSignInPrompt` instead.
       */
      forceAddAccount?: boolean;
      /**
       * Causes Office to display the add-in consent experience. Useful if the add-in's Azure permissions have changed or if the user's consent has
       * been revoked. Default value is `false`.
       *
       * @deprecated Use `allowConsentPrompt` instead.
       */
      forceConsent?: boolean;
      /**
       * Causes Office to prompt the user to provide the additional factor when the tenancy being targeted by Microsoft Graph requires multifactor
       * authentication. The string value identifies the type of additional factor that is required. In most cases, you won't know at development
       * time whether the user's tenant requires an additional factor or what the string should be. So this option would be used in a "second try"
       * call of `getAccessToken` after Microsoft Graph has sent an error requesting the additional factor and containing the string that should
       * be used with the `authChallenge` option.
       */
      authChallenge?: string;
      /**
       * A user-defined item of any type that is returned, unchanged, in the `asyncContext` property of the `AsyncResult` object that is passed to a callback.
       */
      asyncContext?: any;
      /**
       * Causes Office to return a descriptive error when the add-in wants to access Microsoft Graph and the user/admin has not granted consent to Graph scopes. Default value is `false`.
       * Office only supports consent to Graph scopes when the add-in has been deployed by a tenant admin. This information will not be available during development.
       * Setting this option to `true` will cause Office to inform your add-in beforehand (by returning a descriptive error) if Graph access will fail.
       */
      forMSGraphAccess?: boolean;
  }
  /**
   * Interface that contains authorization related APIs.
   */
  interface Auth {
    /**
     * Calls the Azure Active Directory V 2.0 endpoint to get an access token to your add-in's web application. Enables add-ins to identify users.
     * Server-side code can use this token to access Microsoft Graph for the add-in's web application by using the
     * {@link https://docs.microsoft.com/azure/active-directory/develop/active-directory-v2-protocols-oauth-on-behalf-of | "on behalf of" OAuth flow}.
     * This API requires a single sign-on configuration that bridges the add-in to an Azure application. Office users sign-in with Organizational
     * Accounts and Microsoft Accounts. Microsoft Azure returns tokens intended for both user account types to access resources in the Microsoft Graph.
     *
     * **Important**: In Outlook, this API is not supported if the add-in is loaded in an Outlook.com or Gmail mailbox.
     *
     * @remarks
     *
     * **Hosts**: Excel, Outlook, PowerPoint, Word
     *
     * @param options - Optional. Accepts an `AuthOptions` object to define sign-on behaviors.
     * @returns Promise to the access token.
     */
    getAccessToken(options?: AuthOptions): Promise<string>;
  }
  /**
   * Provides information about what Requirement Sets are supported in current environment.
   */
  const apiInformation: ApiInformation;
  /**
   * Interface that contains functions for checking API requirement-set support.
   */
  interface ApiInformation {
    /**
     * Check if the specified requirement set is supported by the host Office application.
     * @param name - Set name; e.g., "MatrixBindings".
     * @param minVersion - The minimum required version; e.g., "1.4".
     */
    isSetSupported(name: string, minVersion?: string): boolean;
  }
}
