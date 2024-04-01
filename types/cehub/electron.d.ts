// Type definitions for Electron 29.1.6
// Project: http://electronjs.org/
// Definitions by: The Electron Team <https://github.com/electron/electron>
// Definitions: https://github.com/electron/typescript-definitions

/// <reference types="node" />

type DOMEvent = Event;
type GlobalResponse = Response;
type GlobalRequest = Request;

declare namespace Electron {
  const NodeEventEmitter: typeof import('events').EventEmitter;

  type Accelerator = string;
  type Event<Params extends object = {}> = {
    preventDefault: () => void;
    readonly defaultPrevented: boolean;
  } & Params;

  interface App extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/app

    /**
     * Emitted when Chrome's accessibility support changes. This event fires when
     * assistive technologies, such as screen readers, are enabled or disabled. See
     * https://www.chromium.org/developers/design-documents/accessibility for more
     * details.
     *
     * @platform darwin,win32
     */
    on(event: 'accessibility-support-changed', listener: (event: Event,
                                                          /**
                                                           * `true` when Chrome's accessibility support is enabled, `false` otherwise.
                                                           */
                                                          accessibilitySupportEnabled: boolean) => void): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'accessibility-support-changed', listener: (event: Event,
                                                          /**
                                                           * `true` when Chrome's accessibility support is enabled, `false` otherwise.
                                                           */
                                                          accessibilitySupportEnabled: boolean) => void): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'accessibility-support-changed', listener: (event: Event,
                                                          /**
                                                           * `true` when Chrome's accessibility support is enabled, `false` otherwise.
                                                           */
                                                          accessibilitySupportEnabled: boolean) => void): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'accessibility-support-changed', listener: (event: Event,
                                                          /**
                                                           * `true` when Chrome's accessibility support is enabled, `false` otherwise.
                                                           */
                                                          accessibilitySupportEnabled: boolean) => void): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'accessibility-support-changed', listener: (event: Event,
                                                          /**
                                                           * `true` when Chrome's accessibility support is enabled, `false` otherwise.
                                                           */
                                                          accessibilitySupportEnabled: boolean) => void): this;
    /**
     * Emitted when the application is activated. Various actions can trigger this
     * event, such as launching the application for the first time, attempting to
     * re-launch the application when it's already running, or clicking on the
     * application's dock or taskbar icon.
     *
     * @platform darwin
     */
    on(event: 'activate', listener: (event: Event,
                                     hasVisibleWindows: boolean) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'activate', listener: (event: Event,
                                     hasVisibleWindows: boolean) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'activate', listener: (event: Event,
                                     hasVisibleWindows: boolean) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'activate', listener: (event: Event,
                                     hasVisibleWindows: boolean) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'activate', listener: (event: Event,
                                     hasVisibleWindows: boolean) => void): this;
    /**
     * Emitted during Handoff after an activity from this device was successfully
     * resumed on another one.
     *
     * @platform darwin
     */
    on(event: 'activity-was-continued', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string,
                                                   /**
                                                    * Contains app-specific state stored by the activity.
                                                    */
                                                   userInfo: unknown) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'activity-was-continued', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string,
                                                   /**
                                                    * Contains app-specific state stored by the activity.
                                                    */
                                                   userInfo: unknown) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'activity-was-continued', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string,
                                                   /**
                                                    * Contains app-specific state stored by the activity.
                                                    */
                                                   userInfo: unknown) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'activity-was-continued', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string,
                                                   /**
                                                    * Contains app-specific state stored by the activity.
                                                    */
                                                   userInfo: unknown) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'activity-was-continued', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string,
                                                   /**
                                                    * Contains app-specific state stored by the activity.
                                                    */
                                                   userInfo: unknown) => void): this;
    /**
     * Emitted before the application starts closing its windows. Calling
     * `event.preventDefault()` will prevent the default behavior, which is terminating
     * the application.
     *
     * **Note:** If application quit was initiated by `autoUpdater.quitAndInstall()`,
     * then `before-quit` is emitted _after_ emitting `close` event on all windows and
     * closing them.
     *
     * **Note:** On Windows, this event will not be emitted if the app is closed due to
     * a shutdown/restart of the system or a user logout.
     */
    on(event: 'before-quit', listener: (event: Event) => void): this;
    off(event: 'before-quit', listener: (event: Event) => void): this;
    once(event: 'before-quit', listener: (event: Event) => void): this;
    addListener(event: 'before-quit', listener: (event: Event) => void): this;
    removeListener(event: 'before-quit', listener: (event: Event) => void): this;
    /**
     * Emitted when a browserWindow gets blurred.
     */
    on(event: 'browser-window-blur', listener: (event: Event,
                                                window: BrowserWindow) => void): this;
    off(event: 'browser-window-blur', listener: (event: Event,
                                                window: BrowserWindow) => void): this;
    once(event: 'browser-window-blur', listener: (event: Event,
                                                window: BrowserWindow) => void): this;
    addListener(event: 'browser-window-blur', listener: (event: Event,
                                                window: BrowserWindow) => void): this;
    removeListener(event: 'browser-window-blur', listener: (event: Event,
                                                window: BrowserWindow) => void): this;
    /**
     * Emitted when a new browserWindow is created.
     */
    on(event: 'browser-window-created', listener: (event: Event,
                                                   window: BrowserWindow) => void): this;
    off(event: 'browser-window-created', listener: (event: Event,
                                                   window: BrowserWindow) => void): this;
    once(event: 'browser-window-created', listener: (event: Event,
                                                   window: BrowserWindow) => void): this;
    addListener(event: 'browser-window-created', listener: (event: Event,
                                                   window: BrowserWindow) => void): this;
    removeListener(event: 'browser-window-created', listener: (event: Event,
                                                   window: BrowserWindow) => void): this;
    /**
     * Emitted when a browserWindow gets focused.
     */
    on(event: 'browser-window-focus', listener: (event: Event,
                                                 window: BrowserWindow) => void): this;
    off(event: 'browser-window-focus', listener: (event: Event,
                                                 window: BrowserWindow) => void): this;
    once(event: 'browser-window-focus', listener: (event: Event,
                                                 window: BrowserWindow) => void): this;
    addListener(event: 'browser-window-focus', listener: (event: Event,
                                                 window: BrowserWindow) => void): this;
    removeListener(event: 'browser-window-focus', listener: (event: Event,
                                                 window: BrowserWindow) => void): this;
    /**
     * Emitted when failed to verify the `certificate` for `url`, to trust the
     * certificate you should prevent the default behavior with
     * `event.preventDefault()` and call `callback(true)`.
     */
    on(event: 'certificate-error', listener: (event: Event,
                                              webContents: WebContents,
                                              url: string,
                                              /**
                                               * The error code
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    off(event: 'certificate-error', listener: (event: Event,
                                              webContents: WebContents,
                                              url: string,
                                              /**
                                               * The error code
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    once(event: 'certificate-error', listener: (event: Event,
                                              webContents: WebContents,
                                              url: string,
                                              /**
                                               * The error code
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    addListener(event: 'certificate-error', listener: (event: Event,
                                              webContents: WebContents,
                                              url: string,
                                              /**
                                               * The error code
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    removeListener(event: 'certificate-error', listener: (event: Event,
                                              webContents: WebContents,
                                              url: string,
                                              /**
                                               * The error code
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    /**
     * Emitted when the child process unexpectedly disappears. This is normally because
     * it was crashed or killed. It does not include renderer processes.
     */
    on(event: 'child-process-gone', listener: (event: Event,
                                               details: Details) => void): this;
    off(event: 'child-process-gone', listener: (event: Event,
                                               details: Details) => void): this;
    once(event: 'child-process-gone', listener: (event: Event,
                                               details: Details) => void): this;
    addListener(event: 'child-process-gone', listener: (event: Event,
                                               details: Details) => void): this;
    removeListener(event: 'child-process-gone', listener: (event: Event,
                                               details: Details) => void): this;
    /**
     * Emitted during Handoff when an activity from a different device wants to be
     * resumed. You should call `event.preventDefault()` if you want to handle this
     * event.
     *
     * A user activity can be continued only in an app that has the same developer Team
     * ID as the activity's source app and that supports the activity's type. Supported
     * activity types are specified in the app's `Info.plist` under the
     * `NSUserActivityTypes` key.
     *
     * @platform darwin
     */
    on(event: 'continue-activity', listener: (event: Event,
                                              /**
                                               * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                               */
                                              type: string,
                                              /**
                                               * Contains app-specific state stored by the activity on another device.
                                               */
                                              userInfo: unknown,
                                              details: ContinueActivityDetails) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'continue-activity', listener: (event: Event,
                                              /**
                                               * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                               */
                                              type: string,
                                              /**
                                               * Contains app-specific state stored by the activity on another device.
                                               */
                                              userInfo: unknown,
                                              details: ContinueActivityDetails) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'continue-activity', listener: (event: Event,
                                              /**
                                               * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                               */
                                              type: string,
                                              /**
                                               * Contains app-specific state stored by the activity on another device.
                                               */
                                              userInfo: unknown,
                                              details: ContinueActivityDetails) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'continue-activity', listener: (event: Event,
                                              /**
                                               * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                               */
                                              type: string,
                                              /**
                                               * Contains app-specific state stored by the activity on another device.
                                               */
                                              userInfo: unknown,
                                              details: ContinueActivityDetails) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'continue-activity', listener: (event: Event,
                                              /**
                                               * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                               */
                                              type: string,
                                              /**
                                               * Contains app-specific state stored by the activity on another device.
                                               */
                                              userInfo: unknown,
                                              details: ContinueActivityDetails) => void): this;
    /**
     * Emitted during Handoff when an activity from a different device fails to be
     * resumed.
     *
     * @platform darwin
     */
    on(event: 'continue-activity-error', listener: (event: Event,
                                                    /**
                                                     * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                     */
                                                    type: string,
                                                    /**
                                                     * A string with the error's localized description.
                                                     */
                                                    error: string) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'continue-activity-error', listener: (event: Event,
                                                    /**
                                                     * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                     */
                                                    type: string,
                                                    /**
                                                     * A string with the error's localized description.
                                                     */
                                                    error: string) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'continue-activity-error', listener: (event: Event,
                                                    /**
                                                     * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                     */
                                                    type: string,
                                                    /**
                                                     * A string with the error's localized description.
                                                     */
                                                    error: string) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'continue-activity-error', listener: (event: Event,
                                                    /**
                                                     * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                     */
                                                    type: string,
                                                    /**
                                                     * A string with the error's localized description.
                                                     */
                                                    error: string) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'continue-activity-error', listener: (event: Event,
                                                    /**
                                                     * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                     */
                                                    type: string,
                                                    /**
                                                     * A string with the error's localized description.
                                                     */
                                                    error: string) => void): this;
    /**
     * Emitted when the application becomes active. This differs from the `activate`
     * event in that `did-become-active` is emitted every time the app becomes active,
     * not only when Dock icon is clicked or application is re-launched. It is also
     * emitted when a user switches to the app via the macOS App Switcher.
     *
     * @platform darwin
     */
    on(event: 'did-become-active', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'did-become-active', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'did-become-active', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'did-become-active', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'did-become-active', listener: (event: Event) => void): this;
    /**
     * Emitted when the app is no longer active and doesn’t have focus. This can be
     * triggered, for example, by clicking on another application or by using the macOS
     * App Switcher to switch to another application.
     *
     * @platform darwin
     */
    on(event: 'did-resign-active', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'did-resign-active', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'did-resign-active', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'did-resign-active', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'did-resign-active', listener: (event: Event) => void): this;
    /**
     * Emitted whenever there is a GPU info update.
     */
    on(event: 'gpu-info-update', listener: Function): this;
    off(event: 'gpu-info-update', listener: Function): this;
    once(event: 'gpu-info-update', listener: Function): this;
    addListener(event: 'gpu-info-update', listener: Function): this;
    removeListener(event: 'gpu-info-update', listener: Function): this;
    /**
     * Emitted when `webContents` wants to do basic auth.
     *
     * The default behavior is to cancel all authentications. To override this you
     * should prevent the default behavior with `event.preventDefault()` and call
     * `callback(username, password)` with the credentials.
     *
     * If `callback` is called without a username or password, the authentication
     * request will be cancelled and the authentication error will be returned to the
     * page.
     */
    on(event: 'login', listener: (event: Event,
                                  webContents: WebContents,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    off(event: 'login', listener: (event: Event,
                                  webContents: WebContents,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    once(event: 'login', listener: (event: Event,
                                  webContents: WebContents,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    addListener(event: 'login', listener: (event: Event,
                                  webContents: WebContents,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    removeListener(event: 'login', listener: (event: Event,
                                  webContents: WebContents,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    /**
     * Emitted when the user clicks the native macOS new tab button. The new tab button
     * is only visible if the current `BrowserWindow` has a `tabbingIdentifier`
     *
     * @platform darwin
     */
    on(event: 'new-window-for-tab', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'new-window-for-tab', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'new-window-for-tab', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'new-window-for-tab', listener: (event: Event) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'new-window-for-tab', listener: (event: Event) => void): this;
    /**
     * Emitted when the user wants to open a file with the application. The `open-file`
     * event is usually emitted when the application is already open and the OS wants
     * to reuse the application to open the file. `open-file` is also emitted when a
     * file is dropped onto the dock and the application is not yet running. Make sure
     * to listen for the `open-file` event very early in your application startup to
     * handle this case (even before the `ready` event is emitted).
     *
     * You should call `event.preventDefault()` if you want to handle this event.
     *
     * On Windows, you have to parse `process.argv` (in the main process) to get the
     * filepath.
     *
     * @platform darwin
     */
    on(event: 'open-file', listener: (event: Event,
                                      path: string) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'open-file', listener: (event: Event,
                                      path: string) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'open-file', listener: (event: Event,
                                      path: string) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'open-file', listener: (event: Event,
                                      path: string) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'open-file', listener: (event: Event,
                                      path: string) => void): this;
    /**
     * Emitted when the user wants to open a URL with the application. Your
     * application's `Info.plist` file must define the URL scheme within the
     * `CFBundleURLTypes` key, and set `NSPrincipalClass` to `AtomApplication`.
     *
     * As with the `open-file` event, be sure to register a listener for the `open-url`
     * event early in your application startup to detect if the application is being
     * opened to handle a URL. If you register the listener in response to a `ready`
     * event, you'll miss URLs that trigger the launch of your application.
     *
     * @platform darwin
     */
    on(event: 'open-url', listener: (event: Event,
                                     url: string) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'open-url', listener: (event: Event,
                                     url: string) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'open-url', listener: (event: Event,
                                     url: string) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'open-url', listener: (event: Event,
                                     url: string) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'open-url', listener: (event: Event,
                                     url: string) => void): this;
    /**
     * Emitted when the application is quitting.
     *
     * **Note:** On Windows, this event will not be emitted if the app is closed due to
     * a shutdown/restart of the system or a user logout.
     */
    on(event: 'quit', listener: (event: Event,
                                 exitCode: number) => void): this;
    off(event: 'quit', listener: (event: Event,
                                 exitCode: number) => void): this;
    once(event: 'quit', listener: (event: Event,
                                 exitCode: number) => void): this;
    addListener(event: 'quit', listener: (event: Event,
                                 exitCode: number) => void): this;
    removeListener(event: 'quit', listener: (event: Event,
                                 exitCode: number) => void): this;
    /**
     * Emitted once, when Electron has finished initializing. On macOS, `launchInfo`
     * holds the `userInfo` of the `NSUserNotification` or information from
     * `UNNotificationResponse` that was used to open the application, if it was
     * launched from Notification Center. You can also call `app.isReady()` to check if
     * this event has already fired and `app.whenReady()` to get a Promise that is
     * fulfilled when Electron is initialized.
     */
    on(event: 'ready', listener: (event: Event,
                                  /**
                                   * @platform darwin
                                   */
                                  launchInfo: (Record<string, any>) | (NotificationResponse)) => void): this;
    off(event: 'ready', listener: (event: Event,
                                  /**
                                   * @platform darwin
                                   */
                                  launchInfo: (Record<string, any>) | (NotificationResponse)) => void): this;
    once(event: 'ready', listener: (event: Event,
                                  /**
                                   * @platform darwin
                                   */
                                  launchInfo: (Record<string, any>) | (NotificationResponse)) => void): this;
    addListener(event: 'ready', listener: (event: Event,
                                  /**
                                   * @platform darwin
                                   */
                                  launchInfo: (Record<string, any>) | (NotificationResponse)) => void): this;
    removeListener(event: 'ready', listener: (event: Event,
                                  /**
                                   * @platform darwin
                                   */
                                  launchInfo: (Record<string, any>) | (NotificationResponse)) => void): this;
    /**
     * Emitted when the renderer process unexpectedly disappears.  This is normally
     * because it was crashed or killed.
     */
    on(event: 'render-process-gone', listener: (event: Event,
                                                webContents: WebContents,
                                                details: RenderProcessGoneDetails) => void): this;
    off(event: 'render-process-gone', listener: (event: Event,
                                                webContents: WebContents,
                                                details: RenderProcessGoneDetails) => void): this;
    once(event: 'render-process-gone', listener: (event: Event,
                                                webContents: WebContents,
                                                details: RenderProcessGoneDetails) => void): this;
    addListener(event: 'render-process-gone', listener: (event: Event,
                                                webContents: WebContents,
                                                details: RenderProcessGoneDetails) => void): this;
    removeListener(event: 'render-process-gone', listener: (event: Event,
                                                webContents: WebContents,
                                                details: RenderProcessGoneDetails) => void): this;
    /**
     * This event will be emitted inside the primary instance of your application when
     * a second instance has been executed and calls `app.requestSingleInstanceLock()`.
     *
     * `argv` is an Array of the second instance's command line arguments, and
     * `workingDirectory` is its current working directory. Usually applications
     * respond to this by making their primary window focused and non-minimized.
     *
     * **Note:** `argv` will not be exactly the same list of arguments as those passed
     * to the second instance. The order might change and additional arguments might be
     * appended. If you need to maintain the exact same arguments, it's advised to use
     * `additionalData` instead.
     *
     * **Note:** If the second instance is started by a different user than the first,
     * the `argv` array will not include the arguments.
     *
     * This event is guaranteed to be emitted after the `ready` event of `app` gets
     * emitted.
     *
     * **Note:** Extra command line arguments might be added by Chromium, such as
     * `--original-process-start-time`.
     */
    on(event: 'second-instance', listener: (event: Event,
                                            /**
                                             * An array of the second instance's command line arguments
                                             */
                                            argv: string[],
                                            /**
                                             * The second instance's working directory
                                             */
                                            workingDirectory: string,
                                            /**
                                             * A JSON object of additional data passed from the second instance
                                             */
                                            additionalData: unknown) => void): this;
    off(event: 'second-instance', listener: (event: Event,
                                            /**
                                             * An array of the second instance's command line arguments
                                             */
                                            argv: string[],
                                            /**
                                             * The second instance's working directory
                                             */
                                            workingDirectory: string,
                                            /**
                                             * A JSON object of additional data passed from the second instance
                                             */
                                            additionalData: unknown) => void): this;
    once(event: 'second-instance', listener: (event: Event,
                                            /**
                                             * An array of the second instance's command line arguments
                                             */
                                            argv: string[],
                                            /**
                                             * The second instance's working directory
                                             */
                                            workingDirectory: string,
                                            /**
                                             * A JSON object of additional data passed from the second instance
                                             */
                                            additionalData: unknown) => void): this;
    addListener(event: 'second-instance', listener: (event: Event,
                                            /**
                                             * An array of the second instance's command line arguments
                                             */
                                            argv: string[],
                                            /**
                                             * The second instance's working directory
                                             */
                                            workingDirectory: string,
                                            /**
                                             * A JSON object of additional data passed from the second instance
                                             */
                                            additionalData: unknown) => void): this;
    removeListener(event: 'second-instance', listener: (event: Event,
                                            /**
                                             * An array of the second instance's command line arguments
                                             */
                                            argv: string[],
                                            /**
                                             * The second instance's working directory
                                             */
                                            workingDirectory: string,
                                            /**
                                             * A JSON object of additional data passed from the second instance
                                             */
                                            additionalData: unknown) => void): this;
    /**
     * Emitted when a client certificate is requested.
     *
     * The `url` corresponds to the navigation entry requesting the client certificate
     * and `callback` can be called with an entry filtered from the list. Using
     * `event.preventDefault()` prevents the application from using the first
     * certificate from the store.
     */
    on(event: 'select-client-certificate', listener: (event: Event,
                                                      webContents: WebContents,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate?: Certificate) => void) => void): this;
    off(event: 'select-client-certificate', listener: (event: Event,
                                                      webContents: WebContents,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate?: Certificate) => void) => void): this;
    once(event: 'select-client-certificate', listener: (event: Event,
                                                      webContents: WebContents,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate?: Certificate) => void) => void): this;
    addListener(event: 'select-client-certificate', listener: (event: Event,
                                                      webContents: WebContents,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate?: Certificate) => void) => void): this;
    removeListener(event: 'select-client-certificate', listener: (event: Event,
                                                      webContents: WebContents,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate?: Certificate) => void) => void): this;
    /**
     * Emitted when Electron has created a new `session`.
     */
    on(event: 'session-created', listener: (session: Session) => void): this;
    off(event: 'session-created', listener: (session: Session) => void): this;
    once(event: 'session-created', listener: (session: Session) => void): this;
    addListener(event: 'session-created', listener: (session: Session) => void): this;
    removeListener(event: 'session-created', listener: (session: Session) => void): this;
    /**
     * Emitted when Handoff is about to be resumed on another device. If you need to
     * update the state to be transferred, you should call `event.preventDefault()`
     * immediately, construct a new `userInfo` dictionary and call
     * `app.updateCurrentActivity()` in a timely manner. Otherwise, the operation will
     * fail and `continue-activity-error` will be called.
     *
     * @platform darwin
     */
    on(event: 'update-activity-state', listener: (event: Event,
                                                  /**
                                                   * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                   */
                                                  type: string,
                                                  /**
                                                   * Contains app-specific state stored by the activity.
                                                   */
                                                  userInfo: unknown) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'update-activity-state', listener: (event: Event,
                                                  /**
                                                   * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                   */
                                                  type: string,
                                                  /**
                                                   * Contains app-specific state stored by the activity.
                                                   */
                                                  userInfo: unknown) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'update-activity-state', listener: (event: Event,
                                                  /**
                                                   * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                   */
                                                  type: string,
                                                  /**
                                                   * Contains app-specific state stored by the activity.
                                                   */
                                                  userInfo: unknown) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'update-activity-state', listener: (event: Event,
                                                  /**
                                                   * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                   */
                                                  type: string,
                                                  /**
                                                   * Contains app-specific state stored by the activity.
                                                   */
                                                  userInfo: unknown) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'update-activity-state', listener: (event: Event,
                                                  /**
                                                   * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                   */
                                                  type: string,
                                                  /**
                                                   * Contains app-specific state stored by the activity.
                                                   */
                                                  userInfo: unknown) => void): this;
    /**
     * Emitted when a new webContents is created.
     */
    on(event: 'web-contents-created', listener: (event: Event,
                                                 webContents: WebContents) => void): this;
    off(event: 'web-contents-created', listener: (event: Event,
                                                 webContents: WebContents) => void): this;
    once(event: 'web-contents-created', listener: (event: Event,
                                                 webContents: WebContents) => void): this;
    addListener(event: 'web-contents-created', listener: (event: Event,
                                                 webContents: WebContents) => void): this;
    removeListener(event: 'web-contents-created', listener: (event: Event,
                                                 webContents: WebContents) => void): this;
    /**
     * Emitted during Handoff before an activity from a different device wants to be
     * resumed. You should call `event.preventDefault()` if you want to handle this
     * event.
     *
     * @platform darwin
     */
    on(event: 'will-continue-activity', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'will-continue-activity', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'will-continue-activity', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'will-continue-activity', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'will-continue-activity', listener: (event: Event,
                                                   /**
                                                    * A string identifying the activity. Maps to `NSUserActivity.activityType`.
                                                    */
                                                   type: string) => void): this;
    /**
     * Emitted when the application has finished basic startup. On Windows and Linux,
     * the `will-finish-launching` event is the same as the `ready` event; on macOS,
     * this event represents the `applicationWillFinishLaunching` notification of
     * `NSApplication`.
     *
     * In most cases, you should do everything in the `ready` event handler.
     */
    on(event: 'will-finish-launching', listener: Function): this;
    off(event: 'will-finish-launching', listener: Function): this;
    once(event: 'will-finish-launching', listener: Function): this;
    addListener(event: 'will-finish-launching', listener: Function): this;
    removeListener(event: 'will-finish-launching', listener: Function): this;
    /**
     * Emitted when all windows have been closed and the application will quit. Calling
     * `event.preventDefault()` will prevent the default behavior, which is terminating
     * the application.
     *
     * See the description of the `window-all-closed` event for the differences between
     * the `will-quit` and `window-all-closed` events.
     *
     * **Note:** On Windows, this event will not be emitted if the app is closed due to
     * a shutdown/restart of the system or a user logout.
     */
    on(event: 'will-quit', listener: (event: Event) => void): this;
    off(event: 'will-quit', listener: (event: Event) => void): this;
    once(event: 'will-quit', listener: (event: Event) => void): this;
    addListener(event: 'will-quit', listener: (event: Event) => void): this;
    removeListener(event: 'will-quit', listener: (event: Event) => void): this;
    /**
     * Emitted when all windows have been closed.
     *
     * If you do not subscribe to this event and all windows are closed, the default
     * behavior is to quit the app; however, if you subscribe, you control whether the
     * app quits or not. If the user pressed `Cmd + Q`, or the developer called
     * `app.quit()`, Electron will first try to close all the windows and then emit the
     * `will-quit` event, and in this case the `window-all-closed` event would not be
     * emitted.
     */
    on(event: 'window-all-closed', listener: Function): this;
    off(event: 'window-all-closed', listener: Function): this;
    once(event: 'window-all-closed', listener: Function): this;
    addListener(event: 'window-all-closed', listener: Function): this;
    removeListener(event: 'window-all-closed', listener: Function): this;
    /**
     * Adds `path` to the recent documents list.
     *
     * This list is managed by the OS. On Windows, you can visit the list from the task
     * bar, and on macOS, you can visit it from dock menu.
     *
     * @platform darwin,win32
     */
    addRecentDocument(path: string): void;
    /**
     * Clears the recent documents list.
     *
     * @platform darwin,win32
     */
    clearRecentDocuments(): void;
    /**
     * Configures host resolution (DNS and DNS-over-HTTPS). By default, the following
     * resolvers will be used, in order:
     *
     * * DNS-over-HTTPS, if the DNS provider supports it, then
     * * the built-in resolver (enabled on macOS only by default), then
     * * the system's resolver (e.g. `getaddrinfo`).
     *
     * This can be configured to either restrict usage of non-encrypted DNS
     * (`secureDnsMode: "secure"`), or disable DNS-over-HTTPS (`secureDnsMode: "off"`).
     * It is also possible to enable or disable the built-in resolver.
     *
     * To disable insecure DNS, you can specify a `secureDnsMode` of `"secure"`. If you
     * do so, you should make sure to provide a list of DNS-over-HTTPS servers to use,
     * in case the user's DNS configuration does not include a provider that supports
     * DoH.
     *
     * This API must be called after the `ready` event is emitted.
     */
    configureHostResolver(options: ConfigureHostResolverOptions): void;
    /**
     * By default, Chromium disables 3D APIs (e.g. WebGL) until restart on a per domain
     * basis if the GPU processes crashes too frequently. This function disables that
     * behavior.
     *
     * This method can only be called before app is ready.
     */
    disableDomainBlockingFor3DAPIs(): void;
    /**
     * Disables hardware acceleration for current app.
     *
     * This method can only be called before app is ready.
     */
    disableHardwareAcceleration(): void;
    /**
     * Enables full sandbox mode on the app. This means that all renderers will be
     * launched sandboxed, regardless of the value of the `sandbox` flag in
     * `WebPreferences`.
     *
     * This method can only be called before app is ready.
     */
    enableSandbox(): void;
    /**
     * Exits immediately with `exitCode`. `exitCode` defaults to 0.
     *
     * All windows will be closed immediately without asking the user, and the
     * `before-quit` and `will-quit` events will not be emitted.
     */
    exit(exitCode?: number): void;
    /**
     * On Linux, focuses on the first visible window. On macOS, makes the application
     * the active app. On Windows, focuses on the application's first window.
     *
     * You should seek to use the `steal` option as sparingly as possible.
     */
    focus(options?: FocusOptions): void;
    /**
     * Resolve with an object containing the following:
     *
     * * `icon` NativeImage - the display icon of the app handling the protocol.
     * * `path` string  - installation path of the app handling the protocol.
     * * `name` string - display name of the app handling the protocol.
     *
     * This method returns a promise that contains the application name, icon and path
     * of the default handler for the protocol (aka URI scheme) of a URL.
     *
     * @platform darwin,win32
     */
    getApplicationInfoForProtocol(url: string): Promise<Electron.ApplicationInfoForProtocolReturnValue>;
    /**
     * Name of the application handling the protocol, or an empty string if there is no
     * handler. For instance, if Electron is the default handler of the URL, this could
     * be `Electron` on Windows and Mac. However, don't rely on the precise format
     * which is not guaranteed to remain unchanged. Expect a different format on Linux,
     * possibly with a `.desktop` suffix.
     *
     * This method returns the application name of the default handler for the protocol
     * (aka URI scheme) of a URL.
     */
    getApplicationNameForProtocol(url: string): string;
    /**
     * Array of `ProcessMetric` objects that correspond to memory and CPU usage
     * statistics of all the processes associated with the app.
     */
    getAppMetrics(): ProcessMetric[];
    /**
     * The current application directory.
     */
    getAppPath(): string;
    /**
     * The current value displayed in the counter badge.
     *
     * @platform linux,darwin
     */
    getBadgeCount(): number;
    /**
     * The type of the currently running activity.
     *
     * @platform darwin
     */
    getCurrentActivityType(): string;
    /**
     * fulfilled with the app's icon, which is a NativeImage.
     *
     * Fetches a path's associated icon.
     *
     * On _Windows_, there a 2 kinds of icons:
     *
     * * Icons associated with certain file extensions, like `.mp3`, `.png`, etc.
     * * Icons inside the file itself, like `.exe`, `.dll`, `.ico`.
     *
     * On _Linux_ and _macOS_, icons depend on the application associated with file
     * mime type.
     */
    getFileIcon(path: string, options?: FileIconOptions): Promise<Electron.NativeImage>;
    /**
     * The Graphics Feature Status from `chrome://gpu/`.
     *
     * **Note:** This information is only usable after the `gpu-info-update` event is
     * emitted.
     */
    getGPUFeatureStatus(): GPUFeatureStatus;
    /**
     * For `infoType` equal to `complete`: Promise is fulfilled with `Object`
     * containing all the GPU Information as in chromium's GPUInfo object. This
     * includes the version and driver information that's shown on `chrome://gpu` page.
     *
     * For `infoType` equal to `basic`: Promise is fulfilled with `Object` containing
     * fewer attributes than when requested with `complete`. Here's an example of basic
     * response:
     *
     * Using `basic` should be preferred if only basic information like `vendorId` or
     * `deviceId` is needed.
     */
    getGPUInfo(infoType: 'basic' | 'complete'): Promise<unknown>;
    /**
     * * `minItems` Integer - The minimum number of items that will be shown in the
     * Jump List (for a more detailed description of this value see the MSDN docs).
     * * `removedItems` JumpListItem[] - Array of `JumpListItem` objects that
     * correspond to items that the user has explicitly removed from custom categories
     * in the Jump List. These items must not be re-added to the Jump List in the
     * **next** call to `app.setJumpList()`, Windows will not display any custom
     * category that contains any of the removed items.
     *
     * @platform win32
     */
    getJumpListSettings(): JumpListSettings;
    /**
     * The current application locale, fetched using Chromium's `l10n_util` library.
     * Possible return values are documented here.
     *
     * To set the locale, you'll want to use a command line switch at app startup,
     * which may be found here.
     *
     * **Note:** When distributing your packaged app, you have to also ship the
     * `locales` folder.
     *
     * **Note:** This API must be called after the `ready` event is emitted.
     *
     * **Note:** To see example return values of this API compared to other locale and
     * language APIs, see `app.getPreferredSystemLanguages()`.
     */
    getLocale(): string;
    /**
     * User operating system's locale two-letter ISO 3166 country code. The value is
     * taken from native OS APIs.
     *
     * **Note:** When unable to detect locale country code, it returns empty string.
     */
    getLocaleCountryCode(): string;
    /**
     * If you provided `path` and `args` options to `app.setLoginItemSettings`, then
     * you need to pass the same arguments here for `openAtLogin` to be set correctly.
     *
     *
     * * `openAtLogin` boolean - `true` if the app is set to open at login.
     * * `openAsHidden` boolean _macOS_ _Deprecated_ - `true` if the app is set to open
     * as hidden at login. This does not work on macOS 13 and up.
     * * `wasOpenedAtLogin` boolean _macOS_ _Deprecated_ - `true` if the app was opened
     * at login automatically. This setting is not available on MAS builds or on macOS
     * 13 and up.
     * * `wasOpenedAsHidden` boolean _macOS_ _Deprecated_ - `true` if the app was
     * opened as a hidden login item. This indicates that the app should not open any
     * windows at startup. This setting is not available on MAS builds or on macOS 13
     * and up.
     * * `restoreState` boolean _macOS_ _Deprecated_ - `true` if the app was opened as
     * a login item that should restore the state from the previous session. This
     * indicates that the app should restore the windows that were open the last time
     * the app was closed. This setting is not available on MAS builds or on macOS 13
     * and up.
     * * `status` string _macOS_ - can be one of `not-registered`, `enabled`,
     * `requires-approval`, or `not-found`.
     * * `executableWillLaunchAtLogin` boolean _Windows_ - `true` if app is set to open
     * at login and its run key is not deactivated. This differs from `openAtLogin` as
     * it ignores the `args` option, this property will be true if the given executable
     * would be launched at login with **any** arguments.
     * * `launchItems` Object[] _Windows_
     *   * `name` string _Windows_ - name value of a registry entry.
     *   * `path` string _Windows_ - The executable to an app that corresponds to a
     * registry entry.
     *   * `args` string[] _Windows_ - the command-line arguments to pass to the
     * executable.
     *   * `scope` string _Windows_ - one of `user` or `machine`. Indicates whether the
     * registry entry is under `HKEY_CURRENT USER` or `HKEY_LOCAL_MACHINE`.
     *   * `enabled` boolean _Windows_ - `true` if the app registry key is startup
     * approved and therefore shows as `enabled` in Task Manager and Windows settings.
     *
     * @platform darwin,win32
     */
    getLoginItemSettings(options?: LoginItemSettingsOptions): LoginItemSettings;
    /**
     * The current application's name, which is the name in the application's
     * `package.json` file.
     *
     * Usually the `name` field of `package.json` is a short lowercase name, according
     * to the npm modules spec. You should usually also specify a `productName` field,
     * which is your application's full capitalized name, and which will be preferred
     * over `name` by Electron.
     */
    getName(): string;
    /**
     * A path to a special directory or file associated with `name`. On failure, an
     * `Error` is thrown.
     *
     * If `app.getPath('logs')` is called without called `app.setAppLogsPath()` being
     * called first, a default log directory will be created equivalent to calling
     * `app.setAppLogsPath()` without a `path` parameter.
     */
    getPath(name: 'home' | 'appData' | 'userData' | 'sessionData' | 'temp' | 'exe' | 'module' | 'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos' | 'recent' | 'logs' | 'crashDumps'): string;
    /**
     * The user's preferred system languages from most preferred to least preferred,
     * including the country codes if applicable. A user can modify and add to this
     * list on Windows or macOS through the Language and Region settings.
     *
     * The API uses `GlobalizationPreferences` (with a fallback to
     * `GetSystemPreferredUILanguages`) on Windows, `\[NSLocale preferredLanguages\]`
     * on macOS, and `g_get_language_names` on Linux.
     *
     * This API can be used for purposes such as deciding what language to present the
     * application in.
     *
     * Here are some examples of return values of the various language and locale APIs
     * with different configurations:
     *
     * On Windows, given application locale is German, the regional format is Finnish
     * (Finland), and the preferred system languages from most to least preferred are
     * French (Canada), English (US), Simplified Chinese (China), Finnish, and Spanish
     * (Latin America):
     *
     * On macOS, given the application locale is German, the region is Finland, and the
     * preferred system languages from most to least preferred are French (Canada),
     * English (US), Simplified Chinese, and Spanish (Latin America):
     *
     * Both the available languages and regions and the possible return values differ
     * between the two operating systems.
     *
     * As can be seen with the example above, on Windows, it is possible that a
     * preferred system language has no country code, and that one of the preferred
     * system languages corresponds with the language used for the regional format. On
     * macOS, the region serves more as a default country code: the user doesn't need
     * to have Finnish as a preferred language to use Finland as the region,and the
     * country code `FI` is used as the country code for preferred system languages
     * that do not have associated countries in the language name.
     */
    getPreferredSystemLanguages(): string[];
    /**
     * The current system locale. On Windows and Linux, it is fetched using Chromium's
     * `i18n` library. On macOS, `[NSLocale currentLocale]` is used instead. To get the
     * user's current system language, which is not always the same as the locale, it
     * is better to use `app.getPreferredSystemLanguages()`.
     *
     * Different operating systems also use the regional data differently:
     *
     * * Windows 11 uses the regional format for numbers, dates, and times.
     * * macOS Monterey uses the region for formatting numbers, dates, times, and for
     * selecting the currency symbol to use.
     *
     * Therefore, this API can be used for purposes such as choosing a format for
     * rendering dates and times in a calendar app, especially when the developer wants
     * the format to be consistent with the OS.
     *
     * **Note:** This API must be called after the `ready` event is emitted.
     *
     * **Note:** To see example return values of this API compared to other locale and
     * language APIs, see `app.getPreferredSystemLanguages()`.
     */
    getSystemLocale(): string;
    /**
     * The version of the loaded application. If no version is found in the
     * application's `package.json` file, the version of the current bundle or
     * executable is returned.
     */
    getVersion(): string;
    /**
     * This method returns whether or not this instance of your app is currently
     * holding the single instance lock.  You can request the lock with
     * `app.requestSingleInstanceLock()` and release with
     * `app.releaseSingleInstanceLock()`
     */
    hasSingleInstanceLock(): boolean;
    /**
     * Hides all application windows without minimizing them.
     *
     * @platform darwin
     */
    hide(): void;
    /**
     * Imports the certificate in pkcs12 format into the platform certificate store.
     * `callback` is called with the `result` of import operation, a value of `0`
     * indicates success while any other value indicates failure according to Chromium
     * net_error_list.
     *
     * @platform linux
     */
    importCertificate(options: ImportCertificateOptions, callback: (result: number) => void): void;
    /**
     * Invalidates the current Handoff user activity.
     *
     * @platform darwin
     */
    invalidateCurrentActivity(): void;
    /**
     * `true` if Chrome's accessibility support is enabled, `false` otherwise. This API
     * will return `true` if the use of assistive technologies, such as screen readers,
     * has been detected. See
     * https://www.chromium.org/developers/design-documents/accessibility for more
     * details.
     *
     * @platform darwin,win32
     */
    isAccessibilitySupportEnabled(): boolean;
    /**
     * Whether the current executable is the default handler for a protocol (aka URI
     * scheme).
     *
     * **Note:** On macOS, you can use this method to check if the app has been
     * registered as the default protocol handler for a protocol. You can also verify
     * this by checking `~/Library/Preferences/com.apple.LaunchServices.plist` on the
     * macOS machine. Please refer to Apple's documentation for details.
     *
     * The API uses the Windows Registry and `LSCopyDefaultHandlerForURLScheme`
     * internally.
     */
    isDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean;
    /**
     * whether or not the current OS version allows for native emoji pickers.
     */
    isEmojiPanelSupported(): boolean;
    /**
     * `true` if the application—including all of its windows—is hidden (e.g. with
     * `Command-H`), `false` otherwise.
     *
     * @platform darwin
     */
    isHidden(): boolean;
    /**
     * Whether the application is currently running from the systems Application
     * folder. Use in combination with `app.moveToApplicationsFolder()`
     *
     * @platform darwin
     */
    isInApplicationsFolder(): boolean;
    /**
     * `true` if Electron has finished initializing, `false` otherwise. See also
     * `app.whenReady()`.
     */
    isReady(): boolean;
    /**
     * whether `Secure Keyboard Entry` is enabled.
     *
     * By default this API will return `false`.
     *
     * @platform darwin
     */
    isSecureKeyboardEntryEnabled(): boolean;
    /**
     * Whether the current desktop environment is Unity launcher.
     *
     * @platform linux
     */
    isUnityRunning(): boolean;
    /**
     * Whether the move was successful. Please note that if the move is successful,
     * your application will quit and relaunch.
     *
     * No confirmation dialog will be presented by default. If you wish to allow the
     * user to confirm the operation, you may do so using the `dialog` API.
     *
     * **NOTE:** This method throws errors if anything other than the user causes the
     * move to fail. For instance if the user cancels the authorization dialog, this
     * method returns false. If we fail to perform the copy, then this method will
     * throw an error. The message in the error should be informative and tell you
     * exactly what went wrong.
     *
     * By default, if an app of the same name as the one being moved exists in the
     * Applications directory and is _not_ running, the existing app will be trashed
     * and the active app moved into its place. If it _is_ running, the preexisting
     * running app will assume focus and the previously active app will quit itself.
     * This behavior can be changed by providing the optional conflict handler, where
     * the boolean returned by the handler determines whether or not the move conflict
     * is resolved with default behavior.  i.e. returning `false` will ensure no
     * further action is taken, returning `true` will result in the default behavior
     * and the method continuing.
     *
     * For example:
     *
     * Would mean that if an app already exists in the user directory, if the user
     * chooses to 'Continue Move' then the function would continue with its default
     * behavior and the existing app will be trashed and the active app moved into its
     * place.
     *
     * @platform darwin
     */
    moveToApplicationsFolder(options?: MoveToApplicationsFolderOptions): boolean;
    /**
     * Try to close all windows. The `before-quit` event will be emitted first. If all
     * windows are successfully closed, the `will-quit` event will be emitted and by
     * default the application will terminate.
     *
     * This method guarantees that all `beforeunload` and `unload` event handlers are
     * correctly executed. It is possible that a window cancels the quitting by
     * returning `false` in the `beforeunload` event handler.
     */
    quit(): void;
    /**
     * Relaunches the app when current instance exits.
     *
     * By default, the new instance will use the same working directory and command
     * line arguments with current instance. When `args` is specified, the `args` will
     * be passed as command line arguments instead. When `execPath` is specified, the
     * `execPath` will be executed for relaunch instead of current app.
     *
     * Note that this method does not quit the app when executed, you have to call
     * `app.quit` or `app.exit` after calling `app.relaunch` to make the app restart.
     *
     * When `app.relaunch` is called for multiple times, multiple instances will be
     * started after current instance exited.
     *
     * An example of restarting current instance immediately and adding a new command
     * line argument to the new instance:
     */
    relaunch(options?: RelaunchOptions): void;
    /**
     * Releases all locks that were created by `requestSingleInstanceLock`. This will
     * allow multiple instances of the application to once again run side by side.
     */
    releaseSingleInstanceLock(): void;
    /**
     * Whether the call succeeded.
     *
     * This method checks if the current executable as the default handler for a
     * protocol (aka URI scheme). If so, it will remove the app as the default handler.
     *
     * @platform darwin,win32
     */
    removeAsDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean;
    /**
     * The return value of this method indicates whether or not this instance of your
     * application successfully obtained the lock.  If it failed to obtain the lock,
     * you can assume that another instance of your application is already running with
     * the lock and exit immediately.
     *
     * I.e. This method returns `true` if your process is the primary instance of your
     * application and your app should continue loading.  It returns `false` if your
     * process should immediately quit as it has sent its parameters to another
     * instance that has already acquired the lock.
     *
     * On macOS, the system enforces single instance automatically when users try to
     * open a second instance of your app in Finder, and the `open-file` and `open-url`
     * events will be emitted for that. However when users start your app in command
     * line, the system's single instance mechanism will be bypassed, and you have to
     * use this method to ensure single instance.
     *
     * An example of activating the window of primary instance when a second instance
     * starts:
     */
    requestSingleInstanceLock(additionalData?: Record<any, any>): boolean;
    /**
     * Marks the current Handoff user activity as inactive without invalidating it.
     *
     * @platform darwin
     */
    resignCurrentActivity(): void;
    /**
     * Resolves with the proxy information for `url` that will be used when attempting
     * to make requests using Net in the utility process.
     */
    resolveProxy(url: string): Promise<string>;
    /**
     * Set the about panel options. This will override the values defined in the app's
     * `.plist` file on macOS. See the Apple docs for more details. On Linux, values
     * must be set in order to be shown; there are no defaults.
     *
     * If you do not set `credits` but still wish to surface them in your app, AppKit
     * will look for a file named "Credits.html", "Credits.rtf", and "Credits.rtfd", in
     * that order, in the bundle returned by the NSBundle class method main. The first
     * file found is used, and if none is found, the info area is left blank. See Apple
     * documentation for more information.
     */
    setAboutPanelOptions(options: AboutPanelOptionsOptions): void;
    /**
     * Manually enables Chrome's accessibility support, allowing to expose
     * accessibility switch to users in application settings. See Chromium's
     * accessibility docs for more details. Disabled by default.
     *
     * This API must be called after the `ready` event is emitted.
     *
     * **Note:** Rendering accessibility tree can significantly affect the performance
     * of your app. It should not be enabled by default.
     *
     * @platform darwin,win32
     */
    setAccessibilitySupportEnabled(enabled: boolean): void;
    /**
     * Sets the activation policy for a given app.
     *
     * Activation policy types:
     *
     * * 'regular' - The application is an ordinary app that appears in the Dock and
     * may have a user interface.
     * * 'accessory' - The application doesn’t appear in the Dock and doesn’t have a
     * menu bar, but it may be activated programmatically or by clicking on one of its
     * windows.
     * * 'prohibited' - The application doesn’t appear in the Dock and may not create
     * windows or be activated.
     *
     * @platform darwin
     */
    setActivationPolicy(policy: 'regular' | 'accessory' | 'prohibited'): void;
    /**
     * Sets or creates a directory your app's logs which can then be manipulated with
     * `app.getPath()` or `app.setPath(pathName, newPath)`.
     *
     * Calling `app.setAppLogsPath()` without a `path` parameter will result in this
     * directory being set to `~/Library/Logs/YourAppName` on _macOS_, and inside the
     * `userData` directory on _Linux_ and _Windows_.
     */
    setAppLogsPath(path?: string): void;
    /**
     * Changes the Application User Model ID to `id`.
     *
     * @platform win32
     */
    setAppUserModelId(id: string): void;
    /**
     * Whether the call succeeded.
     *
     * Sets the current executable as the default handler for a protocol (aka URI
     * scheme). It allows you to integrate your app deeper into the operating system.
     * Once registered, all links with `your-protocol://` will be opened with the
     * current executable. The whole link, including protocol, will be passed to your
     * application as a parameter.
     *
     * **Note:** On macOS, you can only register protocols that have been added to your
     * app's `info.plist`, which cannot be modified at runtime. However, you can change
     * the file during build time via Electron Forge, Electron Packager, or by editing
     * `info.plist` with a text editor. Please refer to Apple's documentation for
     * details.
     *
     * **Note:** In a Windows Store environment (when packaged as an `appx`) this API
     * will return `true` for all calls but the registry key it sets won't be
     * accessible by other applications.  In order to register your Windows Store
     * application as a default protocol handler you must declare the protocol in your
     * manifest.
     *
     * The API uses the Windows Registry and `LSSetDefaultHandlerForURLScheme`
     * internally.
     */
    setAsDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean;
    /**
     * Whether the call succeeded.
     *
     * Sets the counter badge for current app. Setting the count to `0` will hide the
     * badge.
     *
     * On macOS, it shows on the dock icon. On Linux, it only works for Unity launcher.
     *
     * **Note:** Unity launcher requires a `.desktop` file to work. For more
     * information, please read the Unity integration documentation.
     *
     * **Note:** On macOS, you need to ensure that your application has the permission
     * to display notifications for this method to work.
     *
     * @platform linux,darwin
     */
    setBadgeCount(count?: number): boolean;
    /**
     * Sets or removes a custom Jump List for the application, and returns one of the
     * following strings:
     *
     * * `ok` - Nothing went wrong.
     * * `error` - One or more errors occurred, enable runtime logging to figure out
     * the likely cause.
     * * `invalidSeparatorError` - An attempt was made to add a separator to a custom
     * category in the Jump List. Separators are only allowed in the standard `Tasks`
     * category.
     * * `fileTypeRegistrationError` - An attempt was made to add a file link to the
     * Jump List for a file type the app isn't registered to handle.
     * * `customCategoryAccessDeniedError` - Custom categories can't be added to the
     * Jump List due to user privacy or group policy settings.
     *
     * If `categories` is `null` the previously set custom Jump List (if any) will be
     * replaced by the standard Jump List for the app (managed by Windows).
     *
     * **Note:** If a `JumpListCategory` object has neither the `type` nor the `name`
     * property set then its `type` is assumed to be `tasks`. If the `name` property is
     * set but the `type` property is omitted then the `type` is assumed to be
     * `custom`.
     *
     * **Note:** Users can remove items from custom categories, and Windows will not
     * allow a removed item to be added back into a custom category until **after** the
     * next successful call to `app.setJumpList(categories)`. Any attempt to re-add a
     * removed item to a custom category earlier than that will result in the entire
     * custom category being omitted from the Jump List. The list of removed items can
     * be obtained using `app.getJumpListSettings()`.
     *
     * **Note:** The maximum length of a Jump List item's `description` property is 260
     * characters. Beyond this limit, the item will not be added to the Jump List, nor
     * will it be displayed.
     *
     * Here's a very simple example of creating a custom Jump List:
     *
     * @platform win32
     */
    setJumpList(categories: (JumpListCategory[]) | (null)): ('ok' | 'error' | 'invalidSeparatorError' | 'fileTypeRegistrationError' | 'customCategoryAccessDeniedError');
    /**
     * Set the app's login item settings.
     *
     * To work with Electron's `autoUpdater` on Windows, which uses Squirrel, you'll
     * want to set the launch path to Update.exe, and pass arguments that specify your
     * application name. For example:
     *
     * For more information about setting different services as login items on macOS 13
     * and up, see `SMAppService`.
     *
     * @platform darwin,win32
     */
    setLoginItemSettings(settings: Settings): void;
    /**
     * Overrides the current application's name.
     *
     * **Note:** This function overrides the name used internally by Electron; it does
     * not affect the name that the OS uses.
     */
    setName(name: string): void;
    /**
     * Overrides the `path` to a special directory or file associated with `name`. If
     * the path specifies a directory that does not exist, an `Error` is thrown. In
     * that case, the directory should be created with `fs.mkdirSync` or similar.
     *
     * You can only override paths of a `name` defined in `app.getPath`.
     *
     * By default, web pages' cookies and caches will be stored under the `sessionData`
     * directory. If you want to change this location, you have to override the
     * `sessionData` path before the `ready` event of the `app` module is emitted.
     */
    setPath(name: string, path: string): void;
    setProxy(config: ProxyConfig): void;
    /**
     * Set the `Secure Keyboard Entry` is enabled in your application.
     *
     * By using this API, important information such as password and other sensitive
     * information can be prevented from being intercepted by other processes.
     *
     * See Apple's documentation for more details.
     *
     * **Note:** Enable `Secure Keyboard Entry` only when it is needed and disable it
     * when it is no longer needed.
     *
     * @platform darwin
     */
    setSecureKeyboardEntryEnabled(enabled: boolean): void;
    /**
     * Creates an `NSUserActivity` and sets it as the current activity. The activity is
     * eligible for Handoff to another device afterward.
     *
     * @platform darwin
     */
    setUserActivity(type: string, userInfo: any, webpageURL?: string): void;
    /**
     * Adds `tasks` to the Tasks category of the Jump List on Windows.
     *
     * `tasks` is an array of `Task` objects.
     *
     * Whether the call succeeded.
     *
     * **Note:** If you'd like to customize the Jump List even more use
     * `app.setJumpList(categories)` instead.
     *
     * @platform win32
     */
    setUserTasks(tasks: Task[]): boolean;
    /**
     * Shows application windows after they were hidden. Does not automatically focus
     * them.
     *
     * @platform darwin
     */
    show(): void;
    /**
     * Show the app's about panel options. These options can be overridden with
     * `app.setAboutPanelOptions(options)`. This function runs asynchronously.
     */
    showAboutPanel(): void;
    /**
     * Show the platform's native emoji picker.
     *
     * @platform darwin,win32
     */
    showEmojiPanel(): void;
    /**
     * This function **must** be called once you have finished accessing the security
     * scoped file. If you do not remember to stop accessing the bookmark, kernel
     * resources will be leaked and your app will lose its ability to reach outside the
     * sandbox completely, until your app is restarted.
     *
     * Start accessing a security scoped resource. With this method Electron
     * applications that are packaged for the Mac App Store may reach outside their
     * sandbox to access files chosen by the user. See Apple's documentation for a
     * description of how this system works.
     *
     * @platform mas
     */
    startAccessingSecurityScopedResource(bookmarkData: string): Function;
    /**
     * Updates the current activity if its type matches `type`, merging the entries
     * from `userInfo` into its current `userInfo` dictionary.
     *
     * @platform darwin
     */
    updateCurrentActivity(type: string, userInfo: any): void;
    /**
     * fulfilled when Electron is initialized. May be used as a convenient alternative
     * to checking `app.isReady()` and subscribing to the `ready` event if the app is
     * not ready yet.
     */
    whenReady(): Promise<void>;
    /**
     * A `boolean` property that's `true` if Chrome's accessibility support is enabled,
     * `false` otherwise. This property will be `true` if the use of assistive
     * technologies, such as screen readers, has been detected. Setting this property
     * to `true` manually enables Chrome's accessibility support, allowing developers
     * to expose accessibility switch to users in application settings.
     *
     * See Chromium's accessibility docs for more details. Disabled by default.
     *
     * This API must be called after the `ready` event is emitted.
     *
     * **Note:** Rendering accessibility tree can significantly affect the performance
     * of your app. It should not be enabled by default.
     *
     * @platform darwin,win32
     */
    accessibilitySupportEnabled: boolean;
    /**
     * A `Menu | null` property that returns `Menu` if one has been set and `null`
     * otherwise. Users can pass a Menu to set this property.
     */
    applicationMenu: (Menu) | (null);
    /**
     * An `Integer` property that returns the badge count for current app. Setting the
     * count to `0` will hide the badge.
     *
     * On macOS, setting this with any nonzero integer shows on the dock icon. On
     * Linux, this property only works for Unity launcher.
     *
     * **Note:** Unity launcher requires a `.desktop` file to work. For more
     * information, please read the Unity integration documentation.
     *
     * **Note:** On macOS, you need to ensure that your application has the permission
     * to display notifications for this property to take effect.
     *
     * @platform linux,darwin
     */
    badgeCount: number;
    /**
     * A `CommandLine` object that allows you to read and manipulate the command line
     * arguments that Chromium uses.
     *
     */
    readonly commandLine: CommandLine;
    /**
     * A `Dock` `| undefined` object that allows you to perform actions on your app
     * icon in the user's dock on macOS.
     *
     * @platform darwin
     */
    readonly dock: Dock;
    /**
     * A `boolean` property that returns  `true` if the app is packaged, `false`
     * otherwise. For many apps, this property can be used to distinguish development
     * and production environments.
     *
     */
    readonly isPackaged: boolean;
    /**
     * A `string` property that indicates the current application's name, which is the
     * name in the application's `package.json` file.
     *
     * Usually the `name` field of `package.json` is a short lowercase name, according
     * to the npm modules spec. You should usually also specify a `productName` field,
     * which is your application's full capitalized name, and which will be preferred
     * over `name` by Electron.
     */
    name: string;
    /**
     * A `boolean` which when `true` indicates that the app is currently running under
     * an ARM64 translator (like the macOS Rosetta Translator Environment or Windows
     * WOW).
     *
     * You can use this property to prompt users to download the arm64 version of your
     * application when they are mistakenly running the x64 version under Rosetta or
     * WOW.
     *
     * @platform darwin,win32
     */
    readonly runningUnderARM64Translation: boolean;
    /**
     * A `string` which is the user agent string Electron will use as a global
     * fallback.
     *
     * This is the user agent that will be used when no user agent is set at the
     * `webContents` or `session` level.  It is useful for ensuring that your entire
     * app has the same user agent.  Set to a custom value as early as possible in your
     * app's initialization to ensure that your overridden value is used.
     */
    userAgentFallback: string;
  }

  interface AutoUpdater extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/auto-updater

    /**
     * This event is emitted after a user calls `quitAndInstall()`.
     *
     * When this API is called, the `before-quit` event is not emitted before all
     * windows are closed. As a result you should listen to this event if you wish to
     * perform actions before the windows are closed while a process is quitting, as
     * well as listening to `before-quit`.
     */
    on(event: 'before-quit-for-update', listener: Function): this;
    off(event: 'before-quit-for-update', listener: Function): this;
    once(event: 'before-quit-for-update', listener: Function): this;
    addListener(event: 'before-quit-for-update', listener: Function): this;
    removeListener(event: 'before-quit-for-update', listener: Function): this;
    /**
     * Emitted when checking if an update has started.
     */
    on(event: 'checking-for-update', listener: Function): this;
    off(event: 'checking-for-update', listener: Function): this;
    once(event: 'checking-for-update', listener: Function): this;
    addListener(event: 'checking-for-update', listener: Function): this;
    removeListener(event: 'checking-for-update', listener: Function): this;
    /**
     * Emitted when there is an error while updating.
     */
    on(event: 'error', listener: (error: Error) => void): this;
    off(event: 'error', listener: (error: Error) => void): this;
    once(event: 'error', listener: (error: Error) => void): this;
    addListener(event: 'error', listener: (error: Error) => void): this;
    removeListener(event: 'error', listener: (error: Error) => void): this;
    /**
     * Emitted when there is an available update. The update is downloaded
     * automatically.
     */
    on(event: 'update-available', listener: Function): this;
    off(event: 'update-available', listener: Function): this;
    once(event: 'update-available', listener: Function): this;
    addListener(event: 'update-available', listener: Function): this;
    removeListener(event: 'update-available', listener: Function): this;
    /**
     * Emitted when an update has been downloaded.
     *
     * On Windows only `releaseName` is available.
     *
     * **Note:** It is not strictly necessary to handle this event. A successfully
     * downloaded update will still be applied the next time the application starts.
     */
    on(event: 'update-downloaded', listener: (event: Event,
                                              releaseNotes: string,
                                              releaseName: string,
                                              releaseDate: Date,
                                              updateURL: string) => void): this;
    off(event: 'update-downloaded', listener: (event: Event,
                                              releaseNotes: string,
                                              releaseName: string,
                                              releaseDate: Date,
                                              updateURL: string) => void): this;
    once(event: 'update-downloaded', listener: (event: Event,
                                              releaseNotes: string,
                                              releaseName: string,
                                              releaseDate: Date,
                                              updateURL: string) => void): this;
    addListener(event: 'update-downloaded', listener: (event: Event,
                                              releaseNotes: string,
                                              releaseName: string,
                                              releaseDate: Date,
                                              updateURL: string) => void): this;
    removeListener(event: 'update-downloaded', listener: (event: Event,
                                              releaseNotes: string,
                                              releaseName: string,
                                              releaseDate: Date,
                                              updateURL: string) => void): this;
    /**
     * Emitted when there is no available update.
     */
    on(event: 'update-not-available', listener: Function): this;
    off(event: 'update-not-available', listener: Function): this;
    once(event: 'update-not-available', listener: Function): this;
    addListener(event: 'update-not-available', listener: Function): this;
    removeListener(event: 'update-not-available', listener: Function): this;
    /**
     * Asks the server whether there is an update. You must call `setFeedURL` before
     * using this API.
     *
     * **Note:** If an update is available it will be downloaded automatically. Calling
     * `autoUpdater.checkForUpdates()` twice will download the update two times.
     */
    checkForUpdates(): void;
    /**
     * The current update feed URL.
     */
    getFeedURL(): string;
    /**
     * Restarts the app and installs the update after it has been downloaded. It should
     * only be called after `update-downloaded` has been emitted.
     *
     * Under the hood calling `autoUpdater.quitAndInstall()` will close all application
     * windows first, and automatically call `app.quit()` after all windows have been
     * closed.
     *
     * **Note:** It is not strictly necessary to call this function to apply an update,
     * as a successfully downloaded update will always be applied the next time the
     * application starts.
     */
    quitAndInstall(): void;
    /**
     * Sets the `url` and initialize the auto updater.
     */
    setFeedURL(options: FeedURLOptions): void;
  }

  interface BluetoothDevice {

    // Docs: https://electronjs.org/docs/api/structures/bluetooth-device

    deviceId: string;
    deviceName: string;
  }

  class BrowserView {

    // Docs: https://electronjs.org/docs/api/browser-view

    /**
     * BrowserView
     */
    constructor(options?: BrowserViewConstructorOptions);
    /**
     * The `bounds` of this BrowserView instance as `Object`.
     *
     * @experimental
     */
    getBounds(): Rectangle;
    /**
     * @experimental
     */
    setAutoResize(options: AutoResizeOptions): void;
    /**
     * Examples of valid `color` values:
     *
     * * Hex
     *   * #fff (RGB)
     *   * #ffff (ARGB)
     *   * #ffffff (RRGGBB)
     *   * #ffffffff (AARRGGBB)
     * * RGB
     *   * rgb(([\d]+),\s*([\d]+),\s*([\d]+))
     *     * e.g. rgb(255, 255, 255)
     * * RGBA
     *   * rgba(([\d]+),\s*([\d]+),\s*([\d]+),\s*([\d.]+))
     *     * e.g. rgba(255, 255, 255, 1.0)
     * * HSL
     *   * hsl((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%)
     *     * e.g. hsl(200, 20%, 50%)
     * * HSLA
     *   * hsla((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+))
     *     * e.g. hsla(200, 20%, 50%, 0.5)
     * * Color name
     *   * Options are listed in SkParseColor.cpp
     *   * Similar to CSS Color Module Level 3 keywords, but case-sensitive.
     *     * e.g. `blueviolet` or `red`
     *
     * **Note:** Hex format with alpha takes `AARRGGBB` or `ARGB`, _not_ `RRGGBBA` or
     * `RGA`.
     *
     * @experimental
     */
    setBackgroundColor(color: string): void;
    /**
     * Resizes and moves the view to the supplied bounds relative to the window.
     *
     * @experimental
     */
    setBounds(bounds: Rectangle): void;
    /**
     * A `WebContents` object owned by this view.
     *
     * @experimental
     */
    webContents: WebContents;
  }

  class BrowserWindow extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/browser-window

    /**
     * Emitted when the window is set or unset to show always on top of other windows.
     */
    on(event: 'always-on-top-changed', listener: (event: Event,
                                                  isAlwaysOnTop: boolean) => void): this;
    off(event: 'always-on-top-changed', listener: (event: Event,
                                                  isAlwaysOnTop: boolean) => void): this;
    once(event: 'always-on-top-changed', listener: (event: Event,
                                                  isAlwaysOnTop: boolean) => void): this;
    addListener(event: 'always-on-top-changed', listener: (event: Event,
                                                  isAlwaysOnTop: boolean) => void): this;
    removeListener(event: 'always-on-top-changed', listener: (event: Event,
                                                  isAlwaysOnTop: boolean) => void): this;
    /**
     * Emitted when an App Command is invoked. These are typically related to keyboard
     * media keys or browser commands, as well as the "Back" button built into some
     * mice on Windows.
     *
     * Commands are lowercased, underscores are replaced with hyphens, and the
     * `APPCOMMAND_` prefix is stripped off. e.g. `APPCOMMAND_BROWSER_BACKWARD` is
     * emitted as `browser-backward`.
     *
     * The following app commands are explicitly supported on Linux:
     *
     * * `browser-backward`
     * * `browser-forward`
     *
     * @platform win32,linux
     */
    on(event: 'app-command', listener: (event: Event,
                                        command: string) => void): this;
    /**
     * @platform win32,linux
     */
    off(event: 'app-command', listener: (event: Event,
                                        command: string) => void): this;
    /**
     * @platform win32,linux
     */
    once(event: 'app-command', listener: (event: Event,
                                        command: string) => void): this;
    /**
     * @platform win32,linux
     */
    addListener(event: 'app-command', listener: (event: Event,
                                        command: string) => void): this;
    /**
     * @platform win32,linux
     */
    removeListener(event: 'app-command', listener: (event: Event,
                                        command: string) => void): this;
    /**
     * Emitted when the window loses focus.
     */
    on(event: 'blur', listener: Function): this;
    off(event: 'blur', listener: Function): this;
    once(event: 'blur', listener: Function): this;
    addListener(event: 'blur', listener: Function): this;
    removeListener(event: 'blur', listener: Function): this;
    /**
     * Emitted when the window is going to be closed. It's emitted before the
     * `beforeunload` and `unload` event of the DOM. Calling `event.preventDefault()`
     * will cancel the close.
     *
     * Usually you would want to use the `beforeunload` handler to decide whether the
     * window should be closed, which will also be called when the window is reloaded.
     * In Electron, returning any value other than `undefined` would cancel the close.
     * For example:
     *
     * _**Note**: There is a subtle difference between the behaviors of
     * `window.onbeforeunload = handler` and `window.addEventListener('beforeunload',
     * handler)`. It is recommended to always set the `event.returnValue` explicitly,
     * instead of only returning a value, as the former works more consistently within
     * Electron._
     */
    on(event: 'close', listener: (event: Event) => void): this;
    off(event: 'close', listener: (event: Event) => void): this;
    once(event: 'close', listener: (event: Event) => void): this;
    addListener(event: 'close', listener: (event: Event) => void): this;
    removeListener(event: 'close', listener: (event: Event) => void): this;
    /**
     * Emitted when the window is closed. After you have received this event you should
     * remove the reference to the window and avoid using it any more.
     */
    on(event: 'closed', listener: Function): this;
    off(event: 'closed', listener: Function): this;
    once(event: 'closed', listener: Function): this;
    addListener(event: 'closed', listener: Function): this;
    removeListener(event: 'closed', listener: Function): this;
    /**
     * Emitted when the window enters a full-screen state.
     */
    on(event: 'enter-full-screen', listener: Function): this;
    off(event: 'enter-full-screen', listener: Function): this;
    once(event: 'enter-full-screen', listener: Function): this;
    addListener(event: 'enter-full-screen', listener: Function): this;
    removeListener(event: 'enter-full-screen', listener: Function): this;
    /**
     * Emitted when the window enters a full-screen state triggered by HTML API.
     */
    on(event: 'enter-html-full-screen', listener: Function): this;
    off(event: 'enter-html-full-screen', listener: Function): this;
    once(event: 'enter-html-full-screen', listener: Function): this;
    addListener(event: 'enter-html-full-screen', listener: Function): this;
    removeListener(event: 'enter-html-full-screen', listener: Function): this;
    /**
     * Emitted when the window gains focus.
     */
    on(event: 'focus', listener: Function): this;
    off(event: 'focus', listener: Function): this;
    once(event: 'focus', listener: Function): this;
    addListener(event: 'focus', listener: Function): this;
    removeListener(event: 'focus', listener: Function): this;
    /**
     * Emitted when the window is hidden.
     */
    on(event: 'hide', listener: Function): this;
    off(event: 'hide', listener: Function): this;
    once(event: 'hide', listener: Function): this;
    addListener(event: 'hide', listener: Function): this;
    removeListener(event: 'hide', listener: Function): this;
    /**
     * Emitted when the window leaves a full-screen state.
     */
    on(event: 'leave-full-screen', listener: Function): this;
    off(event: 'leave-full-screen', listener: Function): this;
    once(event: 'leave-full-screen', listener: Function): this;
    addListener(event: 'leave-full-screen', listener: Function): this;
    removeListener(event: 'leave-full-screen', listener: Function): this;
    /**
     * Emitted when the window leaves a full-screen state triggered by HTML API.
     */
    on(event: 'leave-html-full-screen', listener: Function): this;
    off(event: 'leave-html-full-screen', listener: Function): this;
    once(event: 'leave-html-full-screen', listener: Function): this;
    addListener(event: 'leave-html-full-screen', listener: Function): this;
    removeListener(event: 'leave-html-full-screen', listener: Function): this;
    /**
     * Emitted when window is maximized.
     */
    on(event: 'maximize', listener: Function): this;
    off(event: 'maximize', listener: Function): this;
    once(event: 'maximize', listener: Function): this;
    addListener(event: 'maximize', listener: Function): this;
    removeListener(event: 'maximize', listener: Function): this;
    /**
     * Emitted when the window is minimized.
     */
    on(event: 'minimize', listener: Function): this;
    off(event: 'minimize', listener: Function): this;
    once(event: 'minimize', listener: Function): this;
    addListener(event: 'minimize', listener: Function): this;
    removeListener(event: 'minimize', listener: Function): this;
    /**
     * Emitted when the window is being moved to a new position.
     */
    on(event: 'move', listener: Function): this;
    off(event: 'move', listener: Function): this;
    once(event: 'move', listener: Function): this;
    addListener(event: 'move', listener: Function): this;
    removeListener(event: 'move', listener: Function): this;
    /**
     * Emitted once when the window is moved to a new position.
     *
     * **Note**: On macOS this event is an alias of `move`.
     *
     * @platform darwin,win32
     */
    on(event: 'moved', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'moved', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'moved', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'moved', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'moved', listener: Function): this;
    /**
     * Emitted when the native new tab button is clicked.
     *
     * @platform darwin
     */
    on(event: 'new-window-for-tab', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'new-window-for-tab', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'new-window-for-tab', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'new-window-for-tab', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'new-window-for-tab', listener: Function): this;
    /**
     * Emitted when the document changed its title, calling `event.preventDefault()`
     * will prevent the native window's title from changing. `explicitSet` is false
     * when title is synthesized from file URL.
     */
    on(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    off(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    once(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    addListener(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    removeListener(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    /**
     * Emitted when the web page has been rendered (while not being shown) and window
     * can be displayed without a visual flash.
     *
     * Please note that using this event implies that the renderer will be considered
     * "visible" and paint even though `show` is false.  This event will never fire if
     * you use `paintWhenInitiallyHidden: false`
     */
    on(event: 'ready-to-show', listener: Function): this;
    off(event: 'ready-to-show', listener: Function): this;
    once(event: 'ready-to-show', listener: Function): this;
    addListener(event: 'ready-to-show', listener: Function): this;
    removeListener(event: 'ready-to-show', listener: Function): this;
    /**
     * Emitted after the window has been resized.
     */
    on(event: 'resize', listener: Function): this;
    off(event: 'resize', listener: Function): this;
    once(event: 'resize', listener: Function): this;
    addListener(event: 'resize', listener: Function): this;
    removeListener(event: 'resize', listener: Function): this;
    /**
     * Emitted once when the window has finished being resized.
     *
     * This is usually emitted when the window has been resized manually. On macOS,
     * resizing the window with `setBounds`/`setSize` and setting the `animate`
     * parameter to `true` will also emit this event once resizing has finished.
     *
     * @platform darwin,win32
     */
    on(event: 'resized', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'resized', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'resized', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'resized', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'resized', listener: Function): this;
    /**
     * Emitted when the unresponsive web page becomes responsive again.
     */
    on(event: 'responsive', listener: Function): this;
    off(event: 'responsive', listener: Function): this;
    once(event: 'responsive', listener: Function): this;
    addListener(event: 'responsive', listener: Function): this;
    removeListener(event: 'responsive', listener: Function): this;
    /**
     * Emitted when the window is restored from a minimized state.
     */
    on(event: 'restore', listener: Function): this;
    off(event: 'restore', listener: Function): this;
    once(event: 'restore', listener: Function): this;
    addListener(event: 'restore', listener: Function): this;
    removeListener(event: 'restore', listener: Function): this;
    /**
     * Emitted on trackpad rotation gesture. Continually emitted until rotation gesture
     * is ended. The `rotation` value on each emission is the angle in degrees rotated
     * since the last emission. The last emitted event upon a rotation gesture will
     * always be of value `0`. Counter-clockwise rotation values are positive, while
     * clockwise ones are negative.
     *
     * @platform darwin
     */
    on(event: 'rotate-gesture', listener: (event: Event,
                                           rotation: number) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'rotate-gesture', listener: (event: Event,
                                           rotation: number) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'rotate-gesture', listener: (event: Event,
                                           rotation: number) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'rotate-gesture', listener: (event: Event,
                                           rotation: number) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'rotate-gesture', listener: (event: Event,
                                           rotation: number) => void): this;
    /**
     * Emitted when window session is going to end due to force shutdown or machine
     * restart or session log off.
     *
     * @platform win32
     */
    on(event: 'session-end', listener: Function): this;
    /**
     * @platform win32
     */
    off(event: 'session-end', listener: Function): this;
    /**
     * @platform win32
     */
    once(event: 'session-end', listener: Function): this;
    /**
     * @platform win32
     */
    addListener(event: 'session-end', listener: Function): this;
    /**
     * @platform win32
     */
    removeListener(event: 'session-end', listener: Function): this;
    /**
     * Emitted when the window opens a sheet.
     *
     * @platform darwin
     */
    on(event: 'sheet-begin', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'sheet-begin', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'sheet-begin', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'sheet-begin', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'sheet-begin', listener: Function): this;
    /**
     * Emitted when the window has closed a sheet.
     *
     * @platform darwin
     */
    on(event: 'sheet-end', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'sheet-end', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'sheet-end', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'sheet-end', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'sheet-end', listener: Function): this;
    /**
     * Emitted when the window is shown.
     */
    on(event: 'show', listener: Function): this;
    off(event: 'show', listener: Function): this;
    once(event: 'show', listener: Function): this;
    addListener(event: 'show', listener: Function): this;
    removeListener(event: 'show', listener: Function): this;
    /**
     * Emitted on 3-finger swipe. Possible directions are `up`, `right`, `down`,
     * `left`.
     *
     * The method underlying this event is built to handle older macOS-style trackpad
     * swiping, where the content on the screen doesn't move with the swipe. Most macOS
     * trackpads are not configured to allow this kind of swiping anymore, so in order
     * for it to emit properly the 'Swipe between pages' preference in `System
     * Preferences > Trackpad > More Gestures` must be set to 'Swipe with two or three
     * fingers'.
     *
     * @platform darwin
     */
    on(event: 'swipe', listener: (event: Event,
                                  direction: string) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'swipe', listener: (event: Event,
                                  direction: string) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'swipe', listener: (event: Event,
                                  direction: string) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'swipe', listener: (event: Event,
                                  direction: string) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'swipe', listener: (event: Event,
                                  direction: string) => void): this;
    /**
     * Emitted when the system context menu is triggered on the window, this is
     * normally only triggered when the user right clicks on the non-client area of
     * your window.  This is the window titlebar or any area you have declared as
     * `-webkit-app-region: drag` in a frameless window.
     *
     * Calling `event.preventDefault()` will prevent the menu from being displayed.
     *
     * @platform win32
     */
    on(event: 'system-context-menu', listener: (event: Event,
                                                /**
                                                 * The screen coordinates the context menu was triggered at
                                                 */
                                                point: Point) => void): this;
    /**
     * @platform win32
     */
    off(event: 'system-context-menu', listener: (event: Event,
                                                /**
                                                 * The screen coordinates the context menu was triggered at
                                                 */
                                                point: Point) => void): this;
    /**
     * @platform win32
     */
    once(event: 'system-context-menu', listener: (event: Event,
                                                /**
                                                 * The screen coordinates the context menu was triggered at
                                                 */
                                                point: Point) => void): this;
    /**
     * @platform win32
     */
    addListener(event: 'system-context-menu', listener: (event: Event,
                                                /**
                                                 * The screen coordinates the context menu was triggered at
                                                 */
                                                point: Point) => void): this;
    /**
     * @platform win32
     */
    removeListener(event: 'system-context-menu', listener: (event: Event,
                                                /**
                                                 * The screen coordinates the context menu was triggered at
                                                 */
                                                point: Point) => void): this;
    /**
     * Emitted when the window exits from a maximized state.
     */
    on(event: 'unmaximize', listener: Function): this;
    off(event: 'unmaximize', listener: Function): this;
    once(event: 'unmaximize', listener: Function): this;
    addListener(event: 'unmaximize', listener: Function): this;
    removeListener(event: 'unmaximize', listener: Function): this;
    /**
     * Emitted when the web page becomes unresponsive.
     */
    on(event: 'unresponsive', listener: Function): this;
    off(event: 'unresponsive', listener: Function): this;
    once(event: 'unresponsive', listener: Function): this;
    addListener(event: 'unresponsive', listener: Function): this;
    removeListener(event: 'unresponsive', listener: Function): this;
    /**
     * Emitted before the window is moved. On Windows, calling `event.preventDefault()`
     * will prevent the window from being moved.
     *
     * Note that this is only emitted when the window is being moved manually. Moving
     * the window with `setPosition`/`setBounds`/`center` will not emit this event.
     *
     * @platform darwin,win32
     */
    on(event: 'will-move', listener: (event: Event,
                                      /**
                                       * Location the window is being moved to.
                                       */
                                      newBounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'will-move', listener: (event: Event,
                                      /**
                                       * Location the window is being moved to.
                                       */
                                      newBounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'will-move', listener: (event: Event,
                                      /**
                                       * Location the window is being moved to.
                                       */
                                      newBounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'will-move', listener: (event: Event,
                                      /**
                                       * Location the window is being moved to.
                                       */
                                      newBounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'will-move', listener: (event: Event,
                                      /**
                                       * Location the window is being moved to.
                                       */
                                      newBounds: Rectangle) => void): this;
    /**
     * Emitted before the window is resized. Calling `event.preventDefault()` will
     * prevent the window from being resized.
     *
     * Note that this is only emitted when the window is being resized manually.
     * Resizing the window with `setBounds`/`setSize` will not emit this event.
     *
     * The possible values and behaviors of the `edge` option are platform dependent.
     * Possible values are:
     *
     * * On Windows, possible values are `bottom`, `top`, `left`, `right`, `top-left`,
     * `top-right`, `bottom-left`, `bottom-right`.
     * * On macOS, possible values are `bottom` and `right`.
     *   * The value `bottom` is used to denote vertical resizing.
     *   * The value `right` is used to denote horizontal resizing.
     *
     * @platform darwin,win32
     */
    on(event: 'will-resize', listener: (event: Event,
                                        /**
                                         * Size the window is being resized to.
                                         */
                                        newBounds: Rectangle,
                                        details: WillResizeDetails) => void): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'will-resize', listener: (event: Event,
                                        /**
                                         * Size the window is being resized to.
                                         */
                                        newBounds: Rectangle,
                                        details: WillResizeDetails) => void): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'will-resize', listener: (event: Event,
                                        /**
                                         * Size the window is being resized to.
                                         */
                                        newBounds: Rectangle,
                                        details: WillResizeDetails) => void): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'will-resize', listener: (event: Event,
                                        /**
                                         * Size the window is being resized to.
                                         */
                                        newBounds: Rectangle,
                                        details: WillResizeDetails) => void): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'will-resize', listener: (event: Event,
                                        /**
                                         * Size the window is being resized to.
                                         */
                                        newBounds: Rectangle,
                                        details: WillResizeDetails) => void): this;
    /**
     * BrowserWindow
     */
    constructor(options?: BrowserWindowConstructorOptions);
    /**
     * The window that owns the given `browserView`. If the given view is not attached
     * to any window, returns `null`.
     */
    static fromBrowserView(browserView: BrowserView): (BrowserWindow) | (null);
    /**
     * The window with the given `id`.
     */
    static fromId(id: number): (BrowserWindow) | (null);
    /**
     * The window that owns the given `webContents` or `null` if the contents are not
     * owned by a window.
     */
    static fromWebContents(webContents: WebContents): (BrowserWindow) | (null);
    /**
     * An array of all opened browser windows.
     */
    static getAllWindows(): BrowserWindow[];
    /**
     * The window that is focused in this application, otherwise returns `null`.
     */
    static getFocusedWindow(): (BrowserWindow) | (null);
    /**
     * Replacement API for setBrowserView supporting work with multi browser views.
     *
     * @experimental
     */
    addBrowserView(browserView: BrowserView): void;
    /**
     * Adds a window as a tab on this window, after the tab for the window instance.
     *
     * @platform darwin
     */
    addTabbedWindow(browserWindow: BrowserWindow): void;
    /**
     * Removes focus from the window.
     */
    blur(): void;
    blurWebView(): void;
    /**
     * Resolves with a NativeImage
     *
     * Captures a snapshot of the page within `rect`. Omitting `rect` will capture the
     * whole visible page. If the page is not visible, `rect` may be empty. The page is
     * considered visible when its browser window is hidden and the capturer count is
     * non-zero. If you would like the page to stay hidden, you should ensure that
     * `stayHidden` is set to true.
     */
    capturePage(rect?: Rectangle, opts?: Opts): Promise<Electron.NativeImage>;
    /**
     * Moves window to the center of the screen.
     */
    center(): void;
    /**
     * Try to close the window. This has the same effect as a user manually clicking
     * the close button of the window. The web page may cancel the close though. See
     * the close event.
     */
    close(): void;
    /**
     * Closes the currently open Quick Look panel.
     *
     * @platform darwin
     */
    closeFilePreview(): void;
    /**
     * Force closing the window, the `unload` and `beforeunload` event won't be emitted
     * for the web page, and `close` event will also not be emitted for this window,
     * but it guarantees the `closed` event will be emitted.
     */
    destroy(): void;
    /**
     * Starts or stops flashing the window to attract user's attention.
     */
    flashFrame(flag: boolean): void;
    /**
     * Focuses on the window.
     */
    focus(): void;
    focusOnWebView(): void;
    /**
     * Gets the background color of the window in Hex (`#RRGGBB`) format.
     *
     * See Setting `backgroundColor`.
     *
     * **Note:** The alpha value is _not_ returned alongside the red, green, and blue
     * values.
     */
    getBackgroundColor(): string;
    /**
     * The `bounds` of the window as `Object`.
     *
     * **Note:** On macOS, the y-coordinate value returned will be at minimum the Tray
     * height. For example, calling `win.setBounds({ x: 25, y: 20, width: 800, height:
     * 600 })` with a tray height of 38 means that `win.getBounds()` will return `{ x:
     * 25, y: 38, width: 800, height: 600 }`.
     */
    getBounds(): Rectangle;
    /**
     * The `BrowserView` attached to `win`. Returns `null` if one is not attached.
     * Throws an error if multiple `BrowserView`s are attached.
     *
     * @experimental
     */
    getBrowserView(): (BrowserView) | (null);
    /**
     * a sorted by z-index array of all BrowserViews that have been attached with
     * `addBrowserView` or `setBrowserView`. The top-most BrowserView is the last
     * element of the array.
     *
     * **Note:** The BrowserView API is currently experimental and may change or be
     * removed in future Electron releases.
     *
     * @experimental
     */
    getBrowserViews(): BrowserView[];
    /**
     * All child windows.
     */
    getChildWindows(): BrowserWindow[];
    /**
     * The `bounds` of the window's client area as `Object`.
     */
    getContentBounds(): Rectangle;
    /**
     * Contains the window's client area's width and height.
     */
    getContentSize(): number[];
    /**
     * Contains the window's maximum width and height.
     */
    getMaximumSize(): number[];
    /**
     * Window id in the format of DesktopCapturerSource's id. For example
     * "window:1324:0".
     *
     * More precisely the format is `window:id:other_id` where `id` is `HWND` on
     * Windows, `CGWindowID` (`uint64_t`) on macOS and `Window` (`unsigned long`) on
     * Linux. `other_id` is used to identify web contents (tabs) so within the same top
     * level window.
     */
    getMediaSourceId(): string;
    /**
     * Contains the window's minimum width and height.
     */
    getMinimumSize(): number[];
    /**
     * The platform-specific handle of the window.
     *
     * The native type of the handle is `HWND` on Windows, `NSView*` on macOS, and
     * `Window` (`unsigned long`) on Linux.
     */
    getNativeWindowHandle(): Buffer;
    /**
     * Contains the window bounds of the normal state
     *
     * **Note:** whatever the current state of the window : maximized, minimized or in
     * fullscreen, this function always returns the position and size of the window in
     * normal state. In normal state, getBounds and getNormalBounds returns the same
     * `Rectangle`.
     */
    getNormalBounds(): Rectangle;
    /**
     * between 0.0 (fully transparent) and 1.0 (fully opaque). On Linux, always returns
     * 1.
     */
    getOpacity(): number;
    /**
     * The parent window or `null` if there is no parent.
     */
    getParentWindow(): (BrowserWindow) | (null);
    /**
     * Contains the window's current position.
     */
    getPosition(): number[];
    /**
     * The pathname of the file the window represents.
     *
     * @platform darwin
     */
    getRepresentedFilename(): string;
    /**
     * Contains the window's width and height.
     */
    getSize(): number[];
    /**
     * The title of the native window.
     *
     * **Note:** The title of the web page can be different from the title of the
     * native window.
     */
    getTitle(): string;
    /**
     * The custom position for the traffic light buttons in frameless window, `null`
     * will be returned when there is no custom position.
     *
     * @platform darwin
     */
    getWindowButtonPosition(): (Point) | (null);
    /**
     * Whether the window has a shadow.
     */
    hasShadow(): boolean;
    /**
     * Hides the window.
     */
    hide(): void;
    /**
     * Hooks a windows message. The `callback` is called when the message is received
     * in the WndProc.
     *
     * @platform win32
     */
    hookWindowMessage(message: number, callback: (wParam: Buffer, lParam: Buffer) => void): void;
    /**
     * Invalidates the window shadow so that it is recomputed based on the current
     * window shape.
     *
     * `BrowserWindows` that are transparent can sometimes leave behind visual
     * artifacts on macOS. This method can be used to clear these artifacts when, for
     * example, performing an animation.
     *
     * @platform darwin
     */
    invalidateShadow(): void;
    /**
     * Whether the window is always on top of other windows.
     */
    isAlwaysOnTop(): boolean;
    /**
     * Whether the window can be manually closed by user.
     *
     * On Linux always returns `true`.
     *
     * @platform darwin,win32
     */
    isClosable(): boolean;
    /**
     * Whether the window is destroyed.
     */
    isDestroyed(): boolean;
    /**
     * Whether the window's document has been edited.
     *
     * @platform darwin
     */
    isDocumentEdited(): boolean;
    /**
     * whether the window is enabled.
     */
    isEnabled(): boolean;
    /**
     * Whether the window can be focused.
     *
     * @platform darwin,win32
     */
    isFocusable(): boolean;
    /**
     * Whether the window is focused.
     */
    isFocused(): boolean;
    /**
     * Whether the window is in fullscreen mode.
     */
    isFullScreen(): boolean;
    /**
     * Whether the maximize/zoom window button toggles fullscreen mode or maximizes the
     * window.
     */
    isFullScreenable(): boolean;
    /**
     * Whether the window will be hidden when the user toggles into mission control.
     *
     * @platform darwin
     */
    isHiddenInMissionControl(): boolean;
    /**
     * Whether the window is in kiosk mode.
     */
    isKiosk(): boolean;
    /**
     * Whether the window can be manually maximized by user.
     *
     * On Linux always returns `true`.
     *
     * @platform darwin,win32
     */
    isMaximizable(): boolean;
    /**
     * Whether the window is maximized.
     */
    isMaximized(): boolean;
    /**
     * Whether menu bar automatically hides itself.
     *
     * @platform win32,linux
     */
    isMenuBarAutoHide(): boolean;
    /**
     * Whether the menu bar is visible.
     *
     * @platform win32,linux
     */
    isMenuBarVisible(): boolean;
    /**
     * Whether the window can be manually minimized by the user.
     *
     * On Linux always returns `true`.
     *
     * @platform darwin,win32
     */
    isMinimizable(): boolean;
    /**
     * Whether the window is minimized.
     */
    isMinimized(): boolean;
    /**
     * Whether current window is a modal window.
     */
    isModal(): boolean;
    /**
     * Whether the window can be moved by user.
     *
     * On Linux always returns `true`.
     *
     * @platform darwin,win32
     */
    isMovable(): boolean;
    /**
     * Whether the window is in normal state (not maximized, not minimized, not in
     * fullscreen mode).
     */
    isNormal(): boolean;
    /**
     * Whether the window can be manually resized by the user.
     */
    isResizable(): boolean;
    /**
     * Whether the window is in simple (pre-Lion) fullscreen mode.
     *
     * @platform darwin
     */
    isSimpleFullScreen(): boolean;
    /**
     * Whether the window is in Windows 10 tablet mode.
     *
     * Since Windows 10 users can use their PC as tablet, under this mode apps can
     * choose to optimize their UI for tablets, such as enlarging the titlebar and
     * hiding titlebar buttons.
     *
     * This API returns whether the window is in tablet mode, and the `resize` event
     * can be be used to listen to changes to tablet mode.
     *
     * @platform win32
     */
    isTabletMode(): boolean;
    /**
     * Whether the window is visible to the user in the foreground of the app.
     */
    isVisible(): boolean;
    /**
     * Whether the window is visible on all workspaces.
     *
     * **Note:** This API always returns false on Windows.
     *
     * @platform darwin,linux
     */
    isVisibleOnAllWorkspaces(): boolean;
    /**
     * `true` or `false` depending on whether the message is hooked.
     *
     * @platform win32
     */
    isWindowMessageHooked(message: number): boolean;
    /**
     * the promise will resolve when the page has finished loading (see
     * `did-finish-load`), and rejects if the page fails to load (see `did-fail-load`).
     *
     * Same as `webContents.loadFile`, `filePath` should be a path to an HTML file
     * relative to the root of your application.  See the `webContents` docs for more
     * information.
     */
    loadFile(filePath: string, options?: LoadFileOptions): Promise<void>;
    /**
     * the promise will resolve when the page has finished loading (see
     * `did-finish-load`), and rejects if the page fails to load (see `did-fail-load`).
     *
     * Same as `webContents.loadURL(url[, options])`.
     *
     * The `url` can be a remote address (e.g. `http://`) or a path to a local HTML
     * file using the `file://` protocol.
     *
     * To ensure that file URLs are properly formatted, it is recommended to use Node's
     * `url.format` method:
     *
     * You can load a URL using a `POST` request with URL-encoded data by doing the
     * following:
     */
    loadURL(url: string, options?: LoadURLOptions): Promise<void>;
    /**
     * Maximizes the window. This will also show (but not focus) the window if it isn't
     * being displayed already.
     */
    maximize(): void;
    /**
     * Merges all windows into one window with multiple tabs when native tabs are
     * enabled and there is more than one open window.
     *
     * @platform darwin
     */
    mergeAllWindows(): void;
    /**
     * Minimizes the window. On some platforms the minimized window will be shown in
     * the Dock.
     */
    minimize(): void;
    /**
     * Moves window above the source window in the sense of z-order. If the
     * `mediaSourceId` is not of type window or if the window does not exist then this
     * method throws an error.
     */
    moveAbove(mediaSourceId: string): void;
    /**
     * Moves the current tab into a new window if native tabs are enabled and there is
     * more than one tab in the current window.
     *
     * @platform darwin
     */
    moveTabToNewWindow(): void;
    /**
     * Moves window to top(z-order) regardless of focus
     */
    moveTop(): void;
    /**
     * Uses Quick Look to preview a file at a given path.
     *
     * @platform darwin
     */
    previewFile(path: string, displayName?: string): void;
    /**
     * Same as `webContents.reload`.
     */
    reload(): void;
    /**
     * @experimental
     */
    removeBrowserView(browserView: BrowserView): void;
    /**
     * Remove the window's menu bar.
     *
     * @platform linux,win32
     */
    removeMenu(): void;
    /**
     * Restores the window from minimized state to its previous state.
     */
    restore(): void;
    /**
     * Selects the next tab when native tabs are enabled and there are other tabs in
     * the window.
     *
     * @platform darwin
     */
    selectNextTab(): void;
    /**
     * Selects the previous tab when native tabs are enabled and there are other tabs
     * in the window.
     *
     * @platform darwin
     */
    selectPreviousTab(): void;
    /**
     * Sets whether the window should show always on top of other windows. After
     * setting this, the window is still a normal window, not a toolbox window which
     * can not be focused on.
     */
    setAlwaysOnTop(flag: boolean, level?: 'normal' | 'floating' | 'torn-off-menu' | 'modal-panel' | 'main-menu' | 'status' | 'pop-up-menu' | 'screen-saver', relativeLevel?: number): void;
    /**
     * Sets the properties for the window's taskbar button.
     *
     * **Note:** `relaunchCommand` and `relaunchDisplayName` must always be set
     * together. If one of those properties is not set, then neither will be used.
     *
     * @platform win32
     */
    setAppDetails(options: AppDetailsOptions): void;
    /**
     * This will make a window maintain an aspect ratio. The extra size allows a
     * developer to have space, specified in pixels, not included within the aspect
     * ratio calculations. This API already takes into account the difference between a
     * window's size and its content size.
     *
     * Consider a normal window with an HD video player and associated controls.
     * Perhaps there are 15 pixels of controls on the left edge, 25 pixels of controls
     * on the right edge and 50 pixels of controls below the player. In order to
     * maintain a 16:9 aspect ratio (standard aspect ratio for HD @1920x1080) within
     * the player itself we would call this function with arguments of 16/9 and {
     * width: 40, height: 50 }. The second argument doesn't care where the extra width
     * and height are within the content view--only that they exist. Sum any extra
     * width and height areas you have within the overall content view.
     *
     * The aspect ratio is not respected when window is resized programmatically with
     * APIs like `win.setSize`.
     *
     * To reset an aspect ratio, pass 0 as the `aspectRatio` value:
     * `win.setAspectRatio(0)`.
     */
    setAspectRatio(aspectRatio: number, extraSize?: Size): void;
    /**
     * Controls whether to hide cursor when typing.
     *
     * @platform darwin
     */
    setAutoHideCursor(autoHide: boolean): void;
    /**
     * Sets whether the window menu bar should hide itself automatically. Once set the
     * menu bar will only show when users press the single `Alt` key.
     *
     * If the menu bar is already visible, calling `setAutoHideMenuBar(true)` won't
     * hide it immediately.
     *
     * @platform win32,linux
     */
    setAutoHideMenuBar(hide: boolean): void;
    /**
     * Examples of valid `backgroundColor` values:
     *
     * * Hex
     *   * #fff (shorthand RGB)
     *   * #ffff (shorthand ARGB)
     *   * #ffffff (RGB)
     *   * #ffffffff (ARGB)
     * * RGB
     *   * rgb(([\d]+),\s*([\d]+),\s*([\d]+))
     *     * e.g. rgb(255, 255, 255)
     * * RGBA
     *   * rgba(([\d]+),\s*([\d]+),\s*([\d]+),\s*([\d.]+))
     *     * e.g. rgba(255, 255, 255, 1.0)
     * * HSL
     *   * hsl((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%)
     *     * e.g. hsl(200, 20%, 50%)
     * * HSLA
     *   * hsla((-?[\d.]+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+))
     *     * e.g. hsla(200, 20%, 50%, 0.5)
     * * Color name
     *   * Options are listed in SkParseColor.cpp
     *   * Similar to CSS Color Module Level 3 keywords, but case-sensitive.
     *     * e.g. `blueviolet` or `red`
     *
     * Sets the background color of the window. See Setting `backgroundColor`.
     */
    setBackgroundColor(backgroundColor: string): void;
    /**
     * This method sets the browser window's system-drawn background material,
     * including behind the non-client area.
     *
     * See the Windows documentation for more details.
     *
     * **Note:** This method is only supported on Windows 11 22H2 and up.
     *
     * @platform win32
     */
    setBackgroundMaterial(material: 'auto' | 'none' | 'mica' | 'acrylic' | 'tabbed'): void;
    /**
     * Resizes and moves the window to the supplied bounds. Any properties that are not
     * supplied will default to their current values.
     *
     * **Note:** On macOS, the y-coordinate value cannot be smaller than the Tray
     * height. The tray height has changed over time and depends on the operating
     * system, but is between 20-40px. Passing a value lower than the tray height will
     * result in a window that is flush to the tray.
     */
    setBounds(bounds: Partial<Rectangle>, animate?: boolean): void;
    /**
     * @experimental
     */
    setBrowserView(browserView: (BrowserView) | (null)): void;
    /**
     * Sets whether the window can be manually closed by user. On Linux does nothing.
     *
     * @platform darwin,win32
     */
    setClosable(closable: boolean): void;
    /**
     * Resizes and moves the window's client area (e.g. the web page) to the supplied
     * bounds.
     */
    setContentBounds(bounds: Rectangle, animate?: boolean): void;
    /**
     * Prevents the window contents from being captured by other apps.
     *
     * On macOS it sets the NSWindow's sharingType to NSWindowSharingNone. On Windows
     * it calls SetWindowDisplayAffinity with `WDA_EXCLUDEFROMCAPTURE`. For Windows 10
     * version 2004 and up the window will be removed from capture entirely, older
     * Windows versions behave as if `WDA_MONITOR` is applied capturing a black window.
     *
     * @platform darwin,win32
     */
    setContentProtection(enable: boolean): void;
    /**
     * Resizes the window's client area (e.g. the web page) to `width` and `height`.
     */
    setContentSize(width: number, height: number, animate?: boolean): void;
    /**
     * Specifies whether the window’s document has been edited, and the icon in title
     * bar will become gray when set to `true`.
     *
     * @platform darwin
     */
    setDocumentEdited(edited: boolean): void;
    /**
     * Disable or enable the window.
     */
    setEnabled(enable: boolean): void;
    /**
     * Changes whether the window can be focused.
     *
     * On macOS it does not remove the focus from the window.
     *
     * @platform darwin,win32
     */
    setFocusable(focusable: boolean): void;
    /**
     * Sets whether the window should be in fullscreen mode.
     *
     * **Note:** On macOS, fullscreen transitions take place asynchronously. If further
     * actions depend on the fullscreen state, use the 'enter-full-screen' or
     * 'leave-full-screen' events.
     */
    setFullScreen(flag: boolean): void;
    /**
     * Sets whether the maximize/zoom window button toggles fullscreen mode or
     * maximizes the window.
     */
    setFullScreenable(fullscreenable: boolean): void;
    /**
     * Sets whether the window should have a shadow.
     */
    setHasShadow(hasShadow: boolean): void;
    /**
     * Sets whether the window will be hidden when the user toggles into mission
     * control.
     *
     * @platform darwin
     */
    setHiddenInMissionControl(hidden: boolean): void;
    /**
     * Changes window icon.
     *
     * @platform win32,linux
     */
    setIcon(icon: (NativeImage) | (string)): void;
    /**
     * Makes the window ignore all mouse events.
     *
     * All mouse events happened in this window will be passed to the window below this
     * window, but if this window has focus, it will still receive keyboard events.
     */
    setIgnoreMouseEvents(ignore: boolean, options?: IgnoreMouseEventsOptions): void;
    /**
     * Enters or leaves kiosk mode.
     */
    setKiosk(flag: boolean): void;
    /**
     * Sets whether the window can be manually maximized by user. On Linux does
     * nothing.
     *
     * @platform darwin,win32
     */
    setMaximizable(maximizable: boolean): void;
    /**
     * Sets the maximum size of window to `width` and `height`.
     */
    setMaximumSize(width: number, height: number): void;
    /**
     * Sets the `menu` as the window's menu bar.
     *
     * @platform linux,win32
     */
    setMenu(menu: (Menu) | (null)): void;
    /**
     * Sets whether the menu bar should be visible. If the menu bar is auto-hide, users
     * can still bring up the menu bar by pressing the single `Alt` key.
     *
     * @platform win32,linux
     */
    setMenuBarVisibility(visible: boolean): void;
    /**
     * Sets whether the window can be manually minimized by user. On Linux does
     * nothing.
     *
     * @platform darwin,win32
     */
    setMinimizable(minimizable: boolean): void;
    /**
     * Sets the minimum size of window to `width` and `height`.
     */
    setMinimumSize(width: number, height: number): void;
    /**
     * Sets whether the window can be moved by user. On Linux does nothing.
     *
     * @platform darwin,win32
     */
    setMovable(movable: boolean): void;
    /**
     * Sets the opacity of the window. On Linux, does nothing. Out of bound number
     * values are clamped to the [0, 1] range.
     *
     * @platform win32,darwin
     */
    setOpacity(opacity: number): void;
    /**
     * Sets a 16 x 16 pixel overlay onto the current taskbar icon, usually used to
     * convey some sort of application status or to passively notify the user.
     *
     * @platform win32
     */
    setOverlayIcon(overlay: (NativeImage) | (null), description: string): void;
    /**
     * Sets `parent` as current window's parent window, passing `null` will turn
     * current window into a top-level window.
     */
    setParentWindow(parent: (BrowserWindow) | (null)): void;
    /**
     * Moves window to `x` and `y`.
     */
    setPosition(x: number, y: number, animate?: boolean): void;
    /**
     * Sets progress value in progress bar. Valid range is [0, 1.0].
     *
     * Remove progress bar when progress < 0; Change to indeterminate mode when
     * progress > 1.
     *
     * On Linux platform, only supports Unity desktop environment, you need to specify
     * the `*.desktop` file name to `desktopName` field in `package.json`. By default,
     * it will assume `{app.name}.desktop`.
     *
     * On Windows, a mode can be passed. Accepted values are `none`, `normal`,
     * `indeterminate`, `error`, and `paused`. If you call `setProgressBar` without a
     * mode set (but with a value within the valid range), `normal` will be assumed.
     */
    setProgressBar(progress: number, options?: ProgressBarOptions): void;
    /**
     * Sets the pathname of the file the window represents, and the icon of the file
     * will show in window's title bar.
     *
     * @platform darwin
     */
    setRepresentedFilename(filename: string): void;
    /**
     * Sets whether the window can be manually resized by the user.
     */
    setResizable(resizable: boolean): void;
    /**
     * Setting a window shape determines the area within the window where the system
     * permits drawing and user interaction. Outside of the given region, no pixels
     * will be drawn and no mouse events will be registered. Mouse events outside of
     * the region will not be received by that window, but will fall through to
     * whatever is behind the window.
     *
     * @experimental
     * @platform win32,linux
     */
    setShape(rects: Rectangle[]): void;
    /**
     * Changes the attachment point for sheets on macOS. By default, sheets are
     * attached just below the window frame, but you may want to display them beneath a
     * HTML-rendered toolbar. For example:
     *
     * @platform darwin
     */
    setSheetOffset(offsetY: number, offsetX?: number): void;
    /**
     * Enters or leaves simple fullscreen mode.
     *
     * Simple fullscreen mode emulates the native fullscreen behavior found in versions
     * of macOS prior to Lion (10.7).
     *
     * @platform darwin
     */
    setSimpleFullScreen(flag: boolean): void;
    /**
     * Resizes the window to `width` and `height`. If `width` or `height` are below any
     * set minimum size constraints the window will snap to its minimum size.
     */
    setSize(width: number, height: number, animate?: boolean): void;
    /**
     * Makes the window not show in the taskbar.
     *
     * @platform darwin,win32
     */
    setSkipTaskbar(skip: boolean): void;
    /**
     * Whether the buttons were added successfully
     *
     * Add a thumbnail toolbar with a specified set of buttons to the thumbnail image
     * of a window in a taskbar button layout. Returns a `boolean` object indicates
     * whether the thumbnail has been added successfully.
     *
     * The number of buttons in thumbnail toolbar should be no greater than 7 due to
     * the limited room. Once you setup the thumbnail toolbar, the toolbar cannot be
     * removed due to the platform's limitation. But you can call the API with an empty
     * array to clean the buttons.
     *
     * The `buttons` is an array of `Button` objects:
     *
     * * `Button` Object
     *   * `icon` NativeImage - The icon showing in thumbnail toolbar.
     *   * `click` Function
     *   * `tooltip` string (optional) - The text of the button's tooltip.
     *   * `flags` string[] (optional) - Control specific states and behaviors of the
     * button. By default, it is `['enabled']`.
     *
     * The `flags` is an array that can include following `string`s:
     *
     * * `enabled` - The button is active and available to the user.
     * * `disabled` - The button is disabled. It is present, but has a visual state
     * indicating it will not respond to user action.
     * * `dismissonclick` - When the button is clicked, the thumbnail window closes
     * immediately.
     * * `nobackground` - Do not draw a button border, use only the image.
     * * `hidden` - The button is not shown to the user.
     * * `noninteractive` - The button is enabled but not interactive; no pressed
     * button state is drawn. This value is intended for instances where the button is
     * used in a notification.
     *
     * @platform win32
     */
    setThumbarButtons(buttons: ThumbarButton[]): boolean;
    /**
     * Sets the region of the window to show as the thumbnail image displayed when
     * hovering over the window in the taskbar. You can reset the thumbnail to be the
     * entire window by specifying an empty region: `{ x: 0, y: 0, width: 0, height: 0
     * }`.
     *
     * @platform win32
     */
    setThumbnailClip(region: Rectangle): void;
    /**
     * Sets the toolTip that is displayed when hovering over the window thumbnail in
     * the taskbar.
     *
     * @platform win32
     */
    setThumbnailToolTip(toolTip: string): void;
    /**
     * Changes the title of native window to `title`.
     */
    setTitle(title: string): void;
    /**
     * On a Window with Window Controls Overlay already enabled, this method updates
     * the style of the title bar overlay.
     *
     * @platform win32
     */
    setTitleBarOverlay(options: TitleBarOverlay): void;
    /**
     * Raises `browserView` above other `BrowserView`s attached to `win`. Throws an
     * error if `browserView` is not attached to `win`.
     *
     * @experimental
     */
    setTopBrowserView(browserView: BrowserView): void;
    /**
     * Sets the touchBar layout for the current window. Specifying `null` or
     * `undefined` clears the touch bar. This method only has an effect if the machine
     * has a touch bar.
     *
     * **Note:** The TouchBar API is currently experimental and may change or be
     * removed in future Electron releases.
     *
     * @platform darwin
     */
    setTouchBar(touchBar: (TouchBar) | (null)): void;
    /**
     * Adds a vibrancy effect to the browser window. Passing `null` or an empty string
     * will remove the vibrancy effect on the window.
     *
     * @platform darwin
     */
    setVibrancy(type: (('titlebar' | 'selection' | 'menu' | 'popover' | 'sidebar' | 'header' | 'sheet' | 'window' | 'hud' | 'fullscreen-ui' | 'tooltip' | 'content' | 'under-window' | 'under-page')) | (null)): void;
    /**
     * Sets whether the window should be visible on all workspaces.
     *
     * **Note:** This API does nothing on Windows.
     *
     * @platform darwin,linux
     */
    setVisibleOnAllWorkspaces(visible: boolean, options?: VisibleOnAllWorkspacesOptions): void;
    /**
     * Set a custom position for the traffic light buttons in frameless window. Passing
     * `null` will reset the position to default.
     *
     * @platform darwin
     */
    setWindowButtonPosition(position: (Point) | (null)): void;
    /**
     * Sets whether the window traffic light buttons should be visible.
     *
     * @platform darwin
     */
    setWindowButtonVisibility(visible: boolean): void;
    /**
     * Shows and gives focus to the window.
     */
    show(): void;
    /**
     * Shows or hides the tab overview when native tabs are enabled.
     *
     * @platform darwin
     */
    showAllTabs(): void;
    /**
     * Same as `webContents.showDefinitionForSelection()`.
     *
     * @platform darwin
     */
    showDefinitionForSelection(): void;
    /**
     * Shows the window but doesn't focus on it.
     */
    showInactive(): void;
    /**
     * Toggles the visibility of the tab bar if native tabs are enabled and there is
     * only one tab in the current window.
     *
     * @platform darwin
     */
    toggleTabBar(): void;
    /**
     * Unhooks all of the window messages.
     *
     * @platform win32
     */
    unhookAllWindowMessages(): void;
    /**
     * Unhook the window message.
     *
     * @platform win32
     */
    unhookWindowMessage(message: number): void;
    /**
     * Unmaximizes the window.
     */
    unmaximize(): void;
    /**
     * A `string` property that defines an alternative title provided only to
     * accessibility tools such as screen readers. This string is not directly visible
     * to users.
     */
    accessibleTitle: string;
    /**
     * A `boolean` property that determines whether the window menu bar should hide
     * itself automatically. Once set, the menu bar will only show when users press the
     * single `Alt` key.
     *
     * If the menu bar is already visible, setting this property to `true` won't hide
     * it immediately.
     */
    autoHideMenuBar: boolean;
    /**
     * A `boolean` property that determines whether the window can be manually closed
     * by user.
     *
     * On Linux the setter is a no-op, although the getter returns `true`.
     *
     * @platform darwin,win32
     */
    closable: boolean;
    /**
     * A `boolean` property that specifies whether the window’s document has been
     * edited.
     *
     * The icon in title bar will become gray when set to `true`.
     *
     * @platform darwin
     */
    documentEdited: boolean;
    /**
     * A `boolean` property that determines whether the window is excluded from the
     * application’s Windows menu. `false` by default.
     *
     * @platform darwin
     */
    excludedFromShownWindowsMenu: boolean;
    /**
     * A `boolean` property that determines whether the window is focusable.
     *
     * @platform win32,darwin
     */
    focusable: boolean;
    /**
     * A `boolean` property that determines whether the window is in fullscreen mode.
     */
    fullScreen: boolean;
    /**
     * A `boolean` property that determines whether the maximize/zoom window button
     * toggles fullscreen mode or maximizes the window.
     */
    fullScreenable: boolean;
    /**
     * A `Integer` property representing the unique ID of the window. Each ID is unique
     * among all `BrowserWindow` instances of the entire Electron application.
     *
     */
    readonly id: number;
    /**
     * A `boolean` property that determines whether the window is in kiosk mode.
     */
    kiosk: boolean;
    /**
     * A `boolean` property that determines whether the window can be manually
     * maximized by user.
     *
     * On Linux the setter is a no-op, although the getter returns `true`.
     *
     * @platform darwin,win32
     */
    maximizable: boolean;
    /**
     * A `boolean` property that determines whether the menu bar should be visible.
     *
     * **Note:** If the menu bar is auto-hide, users can still bring up the menu bar by
     * pressing the single `Alt` key.
     *
     * @platform win32,linux
     */
    menuBarVisible: boolean;
    /**
     * A `boolean` property that determines whether the window can be manually
     * minimized by user.
     *
     * On Linux the setter is a no-op, although the getter returns `true`.
     *
     * @platform darwin,win32
     */
    minimizable: boolean;
    /**
     * A `boolean` property that determines Whether the window can be moved by user.
     *
     * On Linux the setter is a no-op, although the getter returns `true`.
     *
     * @platform darwin,win32
     */
    movable: boolean;
    /**
     * A `string` property that determines the pathname of the file the window
     * represents, and the icon of the file will show in window's title bar.
     *
     * @platform darwin
     */
    representedFilename: string;
    /**
     * A `boolean` property that determines whether the window can be manually resized
     * by user.
     */
    resizable: boolean;
    /**
     * A `boolean` property that determines whether the window has a shadow.
     */
    shadow: boolean;
    /**
     * A `boolean` property that determines whether the window is in simple (pre-Lion)
     * fullscreen mode.
     */
    simpleFullScreen: boolean;
    /**
     * A `string` (optional) property that is equal to the `tabbingIdentifier` passed
     * to the `BrowserWindow` constructor or `undefined` if none was set.
     *
     * @platform darwin
     */
    readonly tabbingIdentifier?: string;
    /**
     * A `string` property that determines the title of the native window.
     *
     * **Note:** The title of the web page can be different from the title of the
     * native window.
     */
    title: string;
    /**
     * A `boolean` property that determines whether the window is visible on all
     * workspaces.
     *
     * **Note:** Always returns false on Windows.
     *
     * @platform darwin,linux
     */
    visibleOnAllWorkspaces: boolean;
    /**
     * A `WebContents` object this window owns. All web page related events and
     * operations will be done via it.
     *
     * See the `webContents` documentation for its methods and events.
     *
     */
    readonly webContents: WebContents;
  }

  interface BrowserWindowConstructorOptions {

    // Docs: https://electronjs.org/docs/api/structures/browser-window-options

    /**
     * Whether clicking an inactive window will also click through to the web contents.
     * Default is `false` on macOS. This option is not configurable on other platforms.
     *
     * @platform darwin
     */
    acceptFirstMouse?: boolean;
    /**
     * Whether the window should always stay on top of other windows. Default is
     * `false`.
     */
    alwaysOnTop?: boolean;
    /**
     * Auto hide the menu bar unless the `Alt` key is pressed. Default is `false`.
     */
    autoHideMenuBar?: boolean;
    /**
     * The window's background color in Hex, RGB, RGBA, HSL, HSLA or named CSS color
     * format. Alpha in #AARRGGBB format is supported if `transparent` is set to
     * `true`. Default is `#FFF` (white). See win.setBackgroundColor for more
     * information.
     */
    backgroundColor?: string;
    /**
     * Set the window's system-drawn background material, including behind the
     * non-client area. Can be `auto`, `none`, `mica`, `acrylic` or `tabbed`. See
     * win.setBackgroundMaterial for more information.
     *
     * @platform win32
     */
    backgroundMaterial?: ('auto' | 'none' | 'mica' | 'acrylic' | 'tabbed');
    /**
     * Show window in the center of the screen. Default is `false`.
     */
    center?: boolean;
    /**
     * Whether window is closable. This is not implemented on Linux. Default is `true`.
     *
     * @platform darwin,win32
     */
    closable?: boolean;
    /**
     * Forces using dark theme for the window, only works on some GTK+3 desktop
     * environments. Default is `false`.
     */
    darkTheme?: boolean;
    /**
     * Whether to hide cursor when typing. Default is `false`.
     */
    disableAutoHideCursor?: boolean;
    /**
     * Enable the window to be resized larger than screen. Only relevant for macOS, as
     * other OSes allow larger-than-screen windows by default. Default is `false`.
     *
     * @platform darwin
     */
    enableLargerThanScreen?: boolean;
    /**
     * Whether the window can be focused. Default is `true`. On Windows setting
     * `focusable: false` also implies setting `skipTaskbar: true`. On Linux setting
     * `focusable: false` makes the window stop interacting with wm, so the window will
     * always stay on top in all workspaces.
     */
    focusable?: boolean;
    /**
     * Specify `false` to create a frameless window. Default is `true`.
     */
    frame?: boolean;
    /**
     * Whether the window should show in fullscreen. When explicitly set to `false` the
     * fullscreen button will be hidden or disabled on macOS. Default is `false`.
     */
    fullscreen?: boolean;
    /**
     * Whether the window can be put into fullscreen mode. On macOS, also whether the
     * maximize/zoom button should toggle full screen mode or maximize window. Default
     * is `true`.
     */
    fullscreenable?: boolean;
    /**
     * Whether window should have a shadow. Default is `true`.
     */
    hasShadow?: boolean;
    /**
     * Window's height in pixels. Default is `600`.
     */
    height?: number;
    /**
     * Whether window should be hidden when the user toggles into mission control.
     *
     * @platform darwin
     */
    hiddenInMissionControl?: boolean;
    /**
     * The window icon. On Windows it is recommended to use `ICO` icons to get best
     * visual effects, you can also leave it undefined so the executable's icon will be
     * used.
     */
    icon?: (NativeImage) | (string);
    /**
     * Whether the window is in kiosk mode. Default is `false`.
     */
    kiosk?: boolean;
    /**
     * Window's maximum height. Default is no limit.
     */
    maxHeight?: number;
    /**
     * Whether window is maximizable. This is not implemented on Linux. Default is
     * `true`.
     *
     * @platform darwin,win32
     */
    maximizable?: boolean;
    /**
     * Window's maximum width. Default is no limit.
     */
    maxWidth?: number;
    /**
     * Window's minimum height. Default is `0`.
     */
    minHeight?: number;
    /**
     * Whether window is minimizable. This is not implemented on Linux. Default is
     * `true`.
     *
     * @platform darwin,win32
     */
    minimizable?: boolean;
    /**
     * Window's minimum width. Default is `0`.
     */
    minWidth?: number;
    /**
     * Whether this is a modal window. This only works when the window is a child
     * window. Default is `false`.
     */
    modal?: boolean;
    /**
     * Whether window is movable. This is not implemented on Linux. Default is `true`.
     *
     * @platform darwin,win32
     */
    movable?: boolean;
    /**
     * Set the initial opacity of the window, between 0.0 (fully transparent) and 1.0
     * (fully opaque). This is only implemented on Windows and macOS.
     *
     * @platform darwin,win32
     */
    opacity?: number;
    /**
     * Whether the renderer should be active when `show` is `false` and it has just
     * been created.  In order for `document.visibilityState` to work correctly on
     * first load with `show: false` you should set this to `false`.  Setting this to
     * `false` will cause the `ready-to-show` event to not fire.  Default is `true`.
     */
    paintWhenInitiallyHidden?: boolean;
    /**
     * Specify parent window. Default is `null`.
     */
    parent?: BrowserWindow;
    /**
     * Whether window is resizable. Default is `true`.
     */
    resizable?: boolean;
    /**
     * Whether frameless window should have rounded corners on macOS. Default is
     * `true`. Setting this property to `false` will prevent the window from being
     * fullscreenable.
     *
     * @platform darwin
     */
    roundedCorners?: boolean;
    /**
     * Whether window should be shown when created. Default is `true`.
     */
    show?: boolean;
    /**
     * Use pre-Lion fullscreen on macOS. Default is `false`.
     *
     * @platform darwin
     */
    simpleFullscreen?: boolean;
    /**
     * Whether to show the window in taskbar. Default is `false`.
     *
     * @platform darwin,win32
     */
    skipTaskbar?: boolean;
    /**
     * Tab group name, allows opening the window as a native tab. Windows with the same
     * tabbing identifier will be grouped together. This also adds a native new tab
     * button to your window's tab bar and allows your `app` and window to receive the
     * `new-window-for-tab` event.
     *
     * @platform darwin
     */
    tabbingIdentifier?: string;
    /**
     * Use `WS_THICKFRAME` style for frameless windows on Windows, which adds standard
     * window frame. Setting it to `false` will remove window shadow and window
     * animations. Default is `true`.
     */
    thickFrame?: boolean;
    /**
     * Default window title. Default is `"Electron"`. If the HTML tag `<title>` is
     * defined in the HTML file loaded by `loadURL()`, this property will be ignored.
     */
    title?: string;
    /**
     *  When using a frameless window in conjunction with
     * `win.setWindowButtonVisibility(true)` on macOS or using a `titleBarStyle` so
     * that the standard window controls ("traffic lights" on macOS) are visible, this
     * property enables the Window Controls Overlay JavaScript APIs and CSS Environment
     * Variables. Specifying `true` will result in an overlay with default system
     * colors. Default is `false`.
     */
    titleBarOverlay?: (TitleBarOverlay) | (boolean);
    /**
     * The style of window title bar. Default is `default`. Possible values are:
     *
     * @platform darwin,win32
     */
    titleBarStyle?: ('default' | 'hidden' | 'hiddenInset' | 'customButtonsOnHover');
    /**
     * Set a custom position for the traffic light buttons in frameless windows.
     *
     * @platform darwin
     */
    trafficLightPosition?: Point;
    /**
     * Makes the window transparent. Default is `false`. On Windows, does not work
     * unless the window is frameless.
     */
    transparent?: boolean;
    /**
     * The type of window, default is normal window. See more about this below.
     */
    type?: string;
    /**
     * The `width` and `height` would be used as web page's size, which means the
     * actual window's size will include window frame's size and be slightly larger.
     * Default is `false`.
     */
    useContentSize?: boolean;
    /**
     * Add a type of vibrancy effect to the window, only on macOS. Can be
     * `appearance-based`, `titlebar`, `selection`, `menu`, `popover`, `sidebar`,
     * `header`, `sheet`, `window`, `hud`, `fullscreen-ui`, `tooltip`, `content`,
     * `under-window`, or `under-page`.
     *
     * @platform darwin
     */
    vibrancy?: ('appearance-based' | 'titlebar' | 'selection' | 'menu' | 'popover' | 'sidebar' | 'header' | 'sheet' | 'window' | 'hud' | 'fullscreen-ui' | 'tooltip' | 'content' | 'under-window' | 'under-page');
    /**
     * Specify how the material appearance should reflect window activity state on
     * macOS. Must be used with the `vibrancy` property. Possible values are:
     *
     * @platform darwin
     */
    visualEffectState?: ('followWindow' | 'active' | 'inactive');
    /**
     * Settings of web page's features.
     */
    webPreferences?: WebPreferences;
    /**
     * Window's width in pixels. Default is `800`.
     */
    width?: number;
    /**
     * (**required** if y is used) Window's left offset from screen. Default is to
     * center the window.
     */
    x?: number;
    /**
     * (**required** if x is used) Window's top offset from screen. Default is to
     * center the window.
     */
    y?: number;
    /**
     * Controls the behavior on macOS when option-clicking the green stoplight button
     * on the toolbar or by clicking the Window > Zoom menu item. If `true`, the window
     * will grow to the preferred width of the web page when zoomed, `false` will cause
     * it to zoom to the width of the screen. This will also affect the behavior when
     * calling `maximize()` directly. Default is `false`.
     *
     * @platform darwin
     */
    zoomToPageWidth?: boolean;
  }

  interface Certificate {

    // Docs: https://electronjs.org/docs/api/structures/certificate

    /**
     * PEM encoded data
     */
    data: string;
    /**
     * Fingerprint of the certificate
     */
    fingerprint: string;
    /**
     * Issuer principal
     */
    issuer: CertificatePrincipal;
    /**
     * Issuer certificate (if not self-signed)
     */
    issuerCert: Certificate;
    /**
     * Issuer's Common Name
     */
    issuerName: string;
    /**
     * Hex value represented string
     */
    serialNumber: string;
    /**
     * Subject principal
     */
    subject: CertificatePrincipal;
    /**
     * Subject's Common Name
     */
    subjectName: string;
    /**
     * End date of the certificate being valid in seconds
     */
    validExpiry: number;
    /**
     * Start date of the certificate being valid in seconds
     */
    validStart: number;
  }

  interface CertificatePrincipal {

    // Docs: https://electronjs.org/docs/api/structures/certificate-principal

    /**
     * Common Name.
     */
    commonName: string;
    /**
     * Country or region.
     */
    country: string;
    /**
     * Locality.
     */
    locality: string;
    /**
     * Organization names.
     */
    organizations: string[];
    /**
     * Organization Unit names.
     */
    organizationUnits: string[];
    /**
     * State or province.
     */
    state: string;
  }

  class ClientRequest extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/client-request

    /**
     * Emitted when the `request` is aborted. The `abort` event will not be fired if
     * the `request` is already closed.
     */
    on(event: 'abort', listener: Function): this;
    off(event: 'abort', listener: Function): this;
    once(event: 'abort', listener: Function): this;
    addListener(event: 'abort', listener: Function): this;
    removeListener(event: 'abort', listener: Function): this;
    /**
     * Emitted as the last event in the HTTP request-response transaction. The `close`
     * event indicates that no more events will be emitted on either the `request` or
     * `response` objects.
     */
    on(event: 'close', listener: Function): this;
    off(event: 'close', listener: Function): this;
    once(event: 'close', listener: Function): this;
    addListener(event: 'close', listener: Function): this;
    removeListener(event: 'close', listener: Function): this;
    /**
     * Emitted when the `net` module fails to issue a network request. Typically when
     * the `request` object emits an `error` event, a `close` event will subsequently
     * follow and no response object will be provided.
     */
    on(event: 'error', listener: (
                                  /**
                                   * an error object providing some information about the failure.
                                   */
                                  error: Error) => void): this;
    off(event: 'error', listener: (
                                  /**
                                   * an error object providing some information about the failure.
                                   */
                                  error: Error) => void): this;
    once(event: 'error', listener: (
                                  /**
                                   * an error object providing some information about the failure.
                                   */
                                  error: Error) => void): this;
    addListener(event: 'error', listener: (
                                  /**
                                   * an error object providing some information about the failure.
                                   */
                                  error: Error) => void): this;
    removeListener(event: 'error', listener: (
                                  /**
                                   * an error object providing some information about the failure.
                                   */
                                  error: Error) => void): this;
    /**
     * Emitted just after the last chunk of the `request`'s data has been written into
     * the `request` object.
     */
    on(event: 'finish', listener: Function): this;
    off(event: 'finish', listener: Function): this;
    once(event: 'finish', listener: Function): this;
    addListener(event: 'finish', listener: Function): this;
    removeListener(event: 'finish', listener: Function): this;
    /**
     * Emitted when an authenticating proxy is asking for user credentials.
     *
     * The `callback` function is expected to be called back with user credentials:
     *
     * * `username` string
     * * `password` string
     *
     * Providing empty credentials will cancel the request and report an authentication
     * error on the response object:
     */
    on(event: 'login', listener: (authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    off(event: 'login', listener: (authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    once(event: 'login', listener: (authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    addListener(event: 'login', listener: (authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    removeListener(event: 'login', listener: (authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    /**
     * Emitted when the server returns a redirect response (e.g. 301 Moved
     * Permanently). Calling `request.followRedirect` will continue with the
     * redirection.  If this event is handled, `request.followRedirect` must be called
     * **synchronously**, otherwise the request will be cancelled.
     */
    on(event: 'redirect', listener: (statusCode: number,
                                     method: string,
                                     redirectUrl: string,
                                     responseHeaders: Record<string, string[]>) => void): this;
    off(event: 'redirect', listener: (statusCode: number,
                                     method: string,
                                     redirectUrl: string,
                                     responseHeaders: Record<string, string[]>) => void): this;
    once(event: 'redirect', listener: (statusCode: number,
                                     method: string,
                                     redirectUrl: string,
                                     responseHeaders: Record<string, string[]>) => void): this;
    addListener(event: 'redirect', listener: (statusCode: number,
                                     method: string,
                                     redirectUrl: string,
                                     responseHeaders: Record<string, string[]>) => void): this;
    removeListener(event: 'redirect', listener: (statusCode: number,
                                     method: string,
                                     redirectUrl: string,
                                     responseHeaders: Record<string, string[]>) => void): this;
    on(event: 'response', listener: (
                                     /**
                                      * An object representing the HTTP response message.
                                      */
                                     response: IncomingMessage) => void): this;
    off(event: 'response', listener: (
                                     /**
                                      * An object representing the HTTP response message.
                                      */
                                     response: IncomingMessage) => void): this;
    once(event: 'response', listener: (
                                     /**
                                      * An object representing the HTTP response message.
                                      */
                                     response: IncomingMessage) => void): this;
    addListener(event: 'response', listener: (
                                     /**
                                      * An object representing the HTTP response message.
                                      */
                                     response: IncomingMessage) => void): this;
    removeListener(event: 'response', listener: (
                                     /**
                                      * An object representing the HTTP response message.
                                      */
                                     response: IncomingMessage) => void): this;
    /**
     * ClientRequest
     */
    constructor(options: (ClientRequestConstructorOptions) | (string));
    /**
     * Cancels an ongoing HTTP transaction. If the request has already emitted the
     * `close` event, the abort operation will have no effect. Otherwise an ongoing
     * event will emit `abort` and `close` events. Additionally, if there is an ongoing
     * response object,it will emit the `aborted` event.
     */
    abort(): void;
    /**
     * Sends the last chunk of the request data. Subsequent write or end operations
     * will not be allowed. The `finish` event is emitted just after the end operation.
     */
    end(chunk?: (string) | (Buffer), encoding?: string, callback?: () => void): this;
    /**
     * Continues any pending redirection. Can only be called during a `'redirect'`
     * event.
     */
    followRedirect(): void;
    /**
     * The value of a previously set extra header name.
     */
    getHeader(name: string): string;
    /**
     * * `active` boolean - Whether the request is currently active. If this is false
     * no other properties will be set
     * * `started` boolean - Whether the upload has started. If this is false both
     * `current` and `total` will be set to 0.
     * * `current` Integer - The number of bytes that have been uploaded so far
     * * `total` Integer - The number of bytes that will be uploaded this request
     *
     * You can use this method in conjunction with `POST` requests to get the progress
     * of a file upload or other data transfer.
     */
    getUploadProgress(): UploadProgress;
    /**
     * Removes a previously set extra header name. This method can be called only
     * before first write. Trying to call it after the first write will throw an error.
     */
    removeHeader(name: string): void;
    /**
     * Adds an extra HTTP header. The header name will be issued as-is without
     * lowercasing. It can be called only before first write. Calling this method after
     * the first write will throw an error. If the passed value is not a `string`, its
     * `toString()` method will be called to obtain the final value.
     *
     * Certain headers are restricted from being set by apps. These headers are listed
     * below. More information on restricted headers can be found in Chromium's header
     * utils.
     *
     * * `Content-Length`
     * * `Host`
     * * `Trailer` or `Te`
     * * `Upgrade`
     * * `Cookie2`
     * * `Keep-Alive`
     * * `Transfer-Encoding`
     *
     * Additionally, setting the `Connection` header to the value `upgrade` is also
     * disallowed.
     */
    setHeader(name: string, value: string): void;
    /**
     * `callback` is essentially a dummy function introduced in the purpose of keeping
     * similarity with the Node.js API. It is called asynchronously in the next tick
     * after `chunk` content have been delivered to the Chromium networking layer.
     * Contrary to the Node.js implementation, it is not guaranteed that `chunk`
     * content have been flushed on the wire before `callback` is called.
     *
     * Adds a chunk of data to the request body. The first write operation may cause
     * the request headers to be issued on the wire. After the first write operation,
     * it is not allowed to add or remove a custom header.
     */
    write(chunk: (string) | (Buffer), encoding?: string, callback?: () => void): void;
    /**
     * A `boolean` specifying whether the request will use HTTP chunked transfer
     * encoding or not. Defaults to false. The property is readable and writable,
     * however it can be set only before the first write operation as the HTTP headers
     * are not yet put on the wire. Trying to set the `chunkedEncoding` property after
     * the first write will throw an error.
     *
     * Using chunked encoding is strongly recommended if you need to send a large
     * request body as data will be streamed in small chunks instead of being
     * internally buffered inside Electron process memory.
     */
    chunkedEncoding: boolean;
  }

  interface Clipboard {

    // Docs: https://electronjs.org/docs/api/clipboard

    /**
     * An array of supported formats for the clipboard `type`.
     */
    availableFormats(type?: 'selection' | 'clipboard'): string[];
    /**
     * Clears the clipboard content.
     */
    clear(type?: 'selection' | 'clipboard'): void;
    /**
     * Whether the clipboard supports the specified `format`.
     *
     * @experimental
     */
    has(format: string, type?: 'selection' | 'clipboard'): boolean;
    /**
     * Reads `format` type from the clipboard.
     *
     * `format` should contain valid ASCII characters and have `/` separator. `a/c`,
     * `a/bc` are valid formats while `/abc`, `abc/`, `a/`, `/a`, `a` are not valid.
     *
     * @experimental
     */
    read(format: string): string;
    /**
     * * `title` string
     * * `url` string
     *
     * Returns an Object containing `title` and `url` keys representing the bookmark in
     * the clipboard. The `title` and `url` values will be empty strings when the
     * bookmark is unavailable.  The `title` value will always be empty on Windows.
     *
     * @platform darwin,win32
     */
    readBookmark(): ReadBookmark;
    /**
     * Reads `format` type from the clipboard.
     *
     * @experimental
     */
    readBuffer(format: string): Buffer;
    /**
     * The text on the find pasteboard, which is the pasteboard that holds information
     * about the current state of the active application’s find panel.
     *
     * This method uses synchronous IPC when called from the renderer process. The
     * cached value is reread from the find pasteboard whenever the application is
     * activated.
     *
     * @platform darwin
     */
    readFindText(): string;
    /**
     * The content in the clipboard as markup.
     */
    readHTML(type?: 'selection' | 'clipboard'): string;
    /**
     * The image content in the clipboard.
     */
    readImage(type?: 'selection' | 'clipboard'): NativeImage;
    /**
     * The content in the clipboard as RTF.
     */
    readRTF(type?: 'selection' | 'clipboard'): string;
    /**
     * The content in the clipboard as plain text.
     */
    readText(type?: 'selection' | 'clipboard'): string;
    /**
     * Writes `data` to the clipboard.
     */
    write(data: Data, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the `title` (macOS only) and `url` into the clipboard as a bookmark.
     *
     * **Note:** Most apps on Windows don't support pasting bookmarks into them so you
     * can use `clipboard.write` to write both a bookmark and fallback text to the
     * clipboard.
     *
     * @platform darwin,win32
     */
    writeBookmark(title: string, url: string, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the `buffer` into the clipboard as `format`.
     *
     * @experimental
     */
    writeBuffer(format: string, buffer: Buffer, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the `text` into the find pasteboard (the pasteboard that holds
     * information about the current state of the active application’s find panel) as
     * plain text. This method uses synchronous IPC when called from the renderer
     * process.
     *
     * @platform darwin
     */
    writeFindText(text: string): void;
    /**
     * Writes `markup` to the clipboard.
     */
    writeHTML(markup: string, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes `image` to the clipboard.
     */
    writeImage(image: NativeImage, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the `text` into the clipboard in RTF.
     */
    writeRTF(text: string, type?: 'selection' | 'clipboard'): void;
    /**
     * Writes the `text` into the clipboard as plain text.
     */
    writeText(text: string, type?: 'selection' | 'clipboard'): void;
  }

  class CommandLine {

    // Docs: https://electronjs.org/docs/api/command-line

    /**
     * Append an argument to Chromium's command line. The argument will be quoted
     * correctly. Switches will precede arguments regardless of appending order.
     *
     * If you're appending an argument like `--switch=value`, consider using
     * `appendSwitch('switch', 'value')` instead.
     *
     * **Note:** This will not affect `process.argv`. The intended usage of this
     * function is to control Chromium's behavior.
     */
    appendArgument(value: string): void;
    /**
     * Append a switch (with optional `value`) to Chromium's command line.
     *
     * **Note:** This will not affect `process.argv`. The intended usage of this
     * function is to control Chromium's behavior.
     */
    appendSwitch(the_switch: string, value?: string): void;
    /**
     * The command-line switch value.
     *
     * **Note:** When the switch is not present or has no value, it returns empty
     * string.
     */
    getSwitchValue(the_switch: string): string;
    /**
     * Whether the command-line switch is present.
     */
    hasSwitch(the_switch: string): boolean;
    /**
     * Removes the specified switch from Chromium's command line.
     *
     * **Note:** This will not affect `process.argv`. The intended usage of this
     * function is to control Chromium's behavior.
     */
    removeSwitch(the_switch: string): void;
  }

  interface ContentTracing {

    // Docs: https://electronjs.org/docs/api/content-tracing

    /**
     * resolves with an array of category groups once all child processes have
     * acknowledged the `getCategories` request
     *
     * Get a set of category groups. The category groups can change as new code paths
     * are reached. See also the list of built-in tracing categories.
     *
     * > **NOTE:** Electron adds a non-default tracing category called `"electron"`.
     * This category can be used to capture Electron-specific tracing events.
     */
    getCategories(): Promise<string[]>;
    /**
     * Resolves with an object containing the `value` and `percentage` of trace buffer
     * maximum usage
     *
     * * `value` number
     * * `percentage` number
     *
     * Get the maximum usage across processes of trace buffer as a percentage of the
     * full state.
     */
    getTraceBufferUsage(): Promise<Electron.TraceBufferUsageReturnValue>;
    /**
     * resolved once all child processes have acknowledged the `startRecording`
     * request.
     *
     * Start recording on all processes.
     *
     * Recording begins immediately locally and asynchronously on child processes as
     * soon as they receive the EnableRecording request.
     *
     * If a recording is already running, the promise will be immediately resolved, as
     * only one trace operation can be in progress at a time.
     */
    startRecording(options: (TraceConfig) | (TraceCategoriesAndOptions)): Promise<void>;
    /**
     * resolves with a path to a file that contains the traced data once all child
     * processes have acknowledged the `stopRecording` request
     *
     * Stop recording on all processes.
     *
     * Child processes typically cache trace data and only rarely flush and send trace
     * data back to the main process. This helps to minimize the runtime overhead of
     * tracing since sending trace data over IPC can be an expensive operation. So, to
     * end tracing, Chromium asynchronously asks all child processes to flush any
     * pending trace data.
     *
     * Trace data will be written into `resultFilePath`. If `resultFilePath` is empty
     * or not provided, trace data will be written to a temporary file, and the path
     * will be returned in the promise.
     */
    stopRecording(resultFilePath?: string): Promise<string>;
  }

  interface ContextBridge {

    // Docs: https://electronjs.org/docs/api/context-bridge

    exposeInIsolatedWorld(worldId: number, apiKey: string, api: any): void;
    exposeInMainWorld(apiKey: string, api: any): void;
  }

  interface Cookie {

    // Docs: https://electronjs.org/docs/api/structures/cookie

    /**
     * The domain of the cookie; this will be normalized with a preceding dot so that
     * it's also valid for subdomains.
     */
    domain?: string;
    /**
     * The expiration date of the cookie as the number of seconds since the UNIX epoch.
     * Not provided for session cookies.
     */
    expirationDate?: number;
    /**
     * Whether the cookie is a host-only cookie; this will only be `true` if no domain
     * was passed.
     */
    hostOnly?: boolean;
    /**
     * Whether the cookie is marked as HTTP only.
     */
    httpOnly?: boolean;
    /**
     * The name of the cookie.
     */
    name: string;
    /**
     * The path of the cookie.
     */
    path?: string;
    /**
     * The Same Site policy applied to this cookie.  Can be `unspecified`,
     * `no_restriction`, `lax` or `strict`.
     */
    sameSite: ('unspecified' | 'no_restriction' | 'lax' | 'strict');
    /**
     * Whether the cookie is marked as secure.
     */
    secure?: boolean;
    /**
     * Whether the cookie is a session cookie or a persistent cookie with an expiration
     * date.
     */
    session?: boolean;
    /**
     * The value of the cookie.
     */
    value: string;
  }

  class Cookies extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/cookies

    /**
     * Emitted when a cookie is changed because it was added, edited, removed, or
     * expired.
     */
    on(event: 'changed', listener: (event: Event,
                                    /**
                                     * The cookie that was changed.
                                     */
                                    cookie: Cookie,
                                    /**
                                     * The cause of the change with one of the following values:
                                     */
                                    cause: ('explicit' | 'overwrite' | 'expired' | 'evicted' | 'expired-overwrite'),
                                    /**
                                     * `true` if the cookie was removed, `false` otherwise.
                                     */
                                    removed: boolean) => void): this;
    off(event: 'changed', listener: (event: Event,
                                    /**
                                     * The cookie that was changed.
                                     */
                                    cookie: Cookie,
                                    /**
                                     * The cause of the change with one of the following values:
                                     */
                                    cause: ('explicit' | 'overwrite' | 'expired' | 'evicted' | 'expired-overwrite'),
                                    /**
                                     * `true` if the cookie was removed, `false` otherwise.
                                     */
                                    removed: boolean) => void): this;
    once(event: 'changed', listener: (event: Event,
                                    /**
                                     * The cookie that was changed.
                                     */
                                    cookie: Cookie,
                                    /**
                                     * The cause of the change with one of the following values:
                                     */
                                    cause: ('explicit' | 'overwrite' | 'expired' | 'evicted' | 'expired-overwrite'),
                                    /**
                                     * `true` if the cookie was removed, `false` otherwise.
                                     */
                                    removed: boolean) => void): this;
    addListener(event: 'changed', listener: (event: Event,
                                    /**
                                     * The cookie that was changed.
                                     */
                                    cookie: Cookie,
                                    /**
                                     * The cause of the change with one of the following values:
                                     */
                                    cause: ('explicit' | 'overwrite' | 'expired' | 'evicted' | 'expired-overwrite'),
                                    /**
                                     * `true` if the cookie was removed, `false` otherwise.
                                     */
                                    removed: boolean) => void): this;
    removeListener(event: 'changed', listener: (event: Event,
                                    /**
                                     * The cookie that was changed.
                                     */
                                    cookie: Cookie,
                                    /**
                                     * The cause of the change with one of the following values:
                                     */
                                    cause: ('explicit' | 'overwrite' | 'expired' | 'evicted' | 'expired-overwrite'),
                                    /**
                                     * `true` if the cookie was removed, `false` otherwise.
                                     */
                                    removed: boolean) => void): this;
    /**
     * A promise which resolves when the cookie store has been flushed
     *
     * Writes any unwritten cookies data to disk
     *
     * Cookies written by any method will not be written to disk immediately, but will
     * be written every 30 seconds or 512 operations
     *
     * Calling this method can cause the cookie to be written to disk immediately.
     */
    flushStore(): Promise<void>;
    /**
     * A promise which resolves an array of cookie objects.
     *
     * Sends a request to get all cookies matching `filter`, and resolves a promise
     * with the response.
     */
    get(filter: CookiesGetFilter): Promise<Electron.Cookie[]>;
    /**
     * A promise which resolves when the cookie has been removed
     *
     * Removes the cookies matching `url` and `name`
     */
    remove(url: string, name: string): Promise<void>;
    /**
     * A promise which resolves when the cookie has been set
     *
     * Sets a cookie with `details`.
     */
    set(details: CookiesSetDetails): Promise<void>;
  }

  interface CPUUsage {

    // Docs: https://electronjs.org/docs/api/structures/cpu-usage

    /**
     * The number of average idle CPU wakeups per second since the last call to
     * getCPUUsage. First call returns 0. Will always return 0 on Windows.
     */
    idleWakeupsPerSecond: number;
    /**
     * Percentage of CPU used since the last call to getCPUUsage. First call returns 0.
     */
    percentCPUUsage: number;
  }

  interface CrashReport {

    // Docs: https://electronjs.org/docs/api/structures/crash-report

    date: Date;
    id: string;
  }

  interface CrashReporter {

    // Docs: https://electronjs.org/docs/api/crash-reporter

    /**
     * Set an extra parameter to be sent with the crash report. The values specified
     * here will be sent in addition to any values set via the `extra` option when
     * `start` was called.
     *
     * Parameters added in this fashion (or via the `extra` parameter to
     * `crashReporter.start`) are specific to the calling process. Adding extra
     * parameters in the main process will not cause those parameters to be sent along
     * with crashes from renderer or other child processes. Similarly, adding extra
     * parameters in a renderer process will not result in those parameters being sent
     * with crashes that occur in other renderer processes or in the main process.
     *
     * **Note:** Parameters have limits on the length of the keys and values. Key names
     * must be no longer than 39 bytes, and values must be no longer than 20320 bytes.
     * Keys with names longer than the maximum will be silently ignored. Key values
     * longer than the maximum length will be truncated.
     */
    addExtraParameter(key: string, value: string): void;
    /**
     * The date and ID of the last crash report. Only crash reports that have been
     * uploaded will be returned; even if a crash report is present on disk it will not
     * be returned until it is uploaded. In the case that there are no uploaded
     * reports, `null` is returned.
     *
     * **Note:** This method is only available in the main process.
     */
    getLastCrashReport(): (CrashReport) | (null);
    /**
     * The current 'extra' parameters of the crash reporter.
     */
    getParameters(): Record<string, string>;
    /**
     * Returns all uploaded crash reports. Each report contains the date and uploaded
     * ID.
     *
     * **Note:** This method is only available in the main process.
     */
    getUploadedReports(): CrashReport[];
    /**
     * Whether reports should be submitted to the server. Set through the `start`
     * method or `setUploadToServer`.
     *
     * **Note:** This method is only available in the main process.
     */
    getUploadToServer(): boolean;
    /**
     * Remove an extra parameter from the current set of parameters. Future crashes
     * will not include this parameter.
     */
    removeExtraParameter(key: string): void;
    /**
     * This would normally be controlled by user preferences. This has no effect if
     * called before `start` is called.
     *
     * **Note:** This method is only available in the main process.
     */
    setUploadToServer(uploadToServer: boolean): void;
    /**
     * This method must be called before using any other `crashReporter` APIs. Once
     * initialized this way, the crashpad handler collects crashes from all
     * subsequently created processes. The crash reporter cannot be disabled once
     * started.
     *
     * This method should be called as early as possible in app startup, preferably
     * before `app.on('ready')`. If the crash reporter is not initialized at the time a
     * renderer process is created, then that renderer process will not be monitored by
     * the crash reporter.
     *
     * **Note:** You can test out the crash reporter by generating a crash using
     * `process.crash()`.
     *
     * **Note:** If you need to send additional/updated `extra` parameters after your
     * first call `start` you can call `addExtraParameter`.
     *
     * **Note:** Parameters passed in `extra`, `globalExtra` or set with
     * `addExtraParameter` have limits on the length of the keys and values. Key names
     * must be at most 39 bytes long, and values must be no longer than 127 bytes. Keys
     * with names longer than the maximum will be silently ignored. Key values longer
     * than the maximum length will be truncated.
     *
     * **Note:** This method is only available in the main process.
     */
    start(options: CrashReporterStartOptions): void;
  }

  interface CustomScheme {

    // Docs: https://electronjs.org/docs/api/structures/custom-scheme

    privileges?: Privileges;
    /**
     * Custom schemes to be registered with options.
     */
    scheme: string;
  }

  class Debugger extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/debugger

    /**
     * Emitted when the debugging session is terminated. This happens either when
     * `webContents` is closed or devtools is invoked for the attached `webContents`.
     */
    on(event: 'detach', listener: (event: Event,
                                   /**
                                    * Reason for detaching debugger.
                                    */
                                   reason: string) => void): this;
    off(event: 'detach', listener: (event: Event,
                                   /**
                                    * Reason for detaching debugger.
                                    */
                                   reason: string) => void): this;
    once(event: 'detach', listener: (event: Event,
                                   /**
                                    * Reason for detaching debugger.
                                    */
                                   reason: string) => void): this;
    addListener(event: 'detach', listener: (event: Event,
                                   /**
                                    * Reason for detaching debugger.
                                    */
                                   reason: string) => void): this;
    removeListener(event: 'detach', listener: (event: Event,
                                   /**
                                    * Reason for detaching debugger.
                                    */
                                   reason: string) => void): this;
    /**
     * Emitted whenever the debugging target issues an instrumentation event.
     */
    on(event: 'message', listener: (event: Event,
                                    /**
                                     * Method name.
                                     */
                                    method: string,
                                    /**
                                     * Event parameters defined by the 'parameters' attribute in the remote debugging
                                     * protocol.
                                     */
                                    params: any,
                                    /**
                                     * Unique identifier of attached debugging session, will match the value sent from
                                     * `debugger.sendCommand`.
                                     */
                                    sessionId: string) => void): this;
    off(event: 'message', listener: (event: Event,
                                    /**
                                     * Method name.
                                     */
                                    method: string,
                                    /**
                                     * Event parameters defined by the 'parameters' attribute in the remote debugging
                                     * protocol.
                                     */
                                    params: any,
                                    /**
                                     * Unique identifier of attached debugging session, will match the value sent from
                                     * `debugger.sendCommand`.
                                     */
                                    sessionId: string) => void): this;
    once(event: 'message', listener: (event: Event,
                                    /**
                                     * Method name.
                                     */
                                    method: string,
                                    /**
                                     * Event parameters defined by the 'parameters' attribute in the remote debugging
                                     * protocol.
                                     */
                                    params: any,
                                    /**
                                     * Unique identifier of attached debugging session, will match the value sent from
                                     * `debugger.sendCommand`.
                                     */
                                    sessionId: string) => void): this;
    addListener(event: 'message', listener: (event: Event,
                                    /**
                                     * Method name.
                                     */
                                    method: string,
                                    /**
                                     * Event parameters defined by the 'parameters' attribute in the remote debugging
                                     * protocol.
                                     */
                                    params: any,
                                    /**
                                     * Unique identifier of attached debugging session, will match the value sent from
                                     * `debugger.sendCommand`.
                                     */
                                    sessionId: string) => void): this;
    removeListener(event: 'message', listener: (event: Event,
                                    /**
                                     * Method name.
                                     */
                                    method: string,
                                    /**
                                     * Event parameters defined by the 'parameters' attribute in the remote debugging
                                     * protocol.
                                     */
                                    params: any,
                                    /**
                                     * Unique identifier of attached debugging session, will match the value sent from
                                     * `debugger.sendCommand`.
                                     */
                                    sessionId: string) => void): this;
    /**
     * Attaches the debugger to the `webContents`.
     */
    attach(protocolVersion?: string): void;
    /**
     * Detaches the debugger from the `webContents`.
     */
    detach(): void;
    /**
     * Whether a debugger is attached to the `webContents`.
     */
    isAttached(): boolean;
    /**
     * A promise that resolves with the response defined by the 'returns' attribute of
     * the command description in the remote debugging protocol or is rejected
     * indicating the failure of the command.
     *
     * Send given command to the debugging target.
     */
    sendCommand(method: string, commandParams?: any, sessionId?: string): Promise<any>;
  }

  interface DesktopCapturer {

    // Docs: https://electronjs.org/docs/api/desktop-capturer

    /**
     * Resolves with an array of `DesktopCapturerSource` objects, each
     * `DesktopCapturerSource` represents a screen or an individual window that can be
     * captured.
     *
     * **Note** Capturing the screen contents requires user consent on macOS 10.15
     * Catalina or higher, which can detected by
     * `systemPreferences.getMediaAccessStatus`.
     */
    getSources(options: SourcesOptions): Promise<Electron.DesktopCapturerSource[]>;
  }

  interface DesktopCapturerSource {

    // Docs: https://electronjs.org/docs/api/structures/desktop-capturer-source

    /**
     * An icon image of the application that owns the window or null if the source has
     * a type screen. The size of the icon is not known in advance and depends on what
     * the application provides.
     */
    appIcon: NativeImage;
    /**
     * A unique identifier that will correspond to the `id` of the matching Display
     * returned by the Screen API. On some platforms, this is equivalent to the `XX`
     * portion of the `id` field above and on others it will differ. It will be an
     * empty string if not available.
     */
    display_id: string;
    /**
     * The identifier of a window or screen that can be used as a `chromeMediaSourceId`
     * constraint when calling `navigator.getUserMedia`. The format of the identifier
     * will be `window:XX:YY` or `screen:ZZ:0`. XX is the windowID/handle. YY is 1 for
     * the current process, and 0 for all others. ZZ is a sequential number that
     * represents the screen, and it does not equal to the index in the source's name.
     */
    id: string;
    /**
     * A screen source will be named either `Entire Screen` or `Screen <index>`, while
     * the name of a window source will match the window title.
     */
    name: string;
    /**
     * A thumbnail image. **Note:** There is no guarantee that the size of the
     * thumbnail is the same as the `thumbnailSize` specified in the `options` passed
     * to `desktopCapturer.getSources`. The actual size depends on the scale of the
     * screen or window.
     */
    thumbnail: NativeImage;
  }

  interface Dialog {

    // Docs: https://electronjs.org/docs/api/dialog

    /**
     * resolves when the certificate trust dialog is shown.
     *
     * On macOS, this displays a modal dialog that shows a message and certificate
     * information, and gives the user the option of trusting/importing the
     * certificate. If you provide a `browserWindow` argument the dialog will be
     * attached to the parent window, making it modal.
     *
     * On Windows the options are more limited, due to the Win32 APIs used:
     *
     * * The `message` argument is not used, as the OS provides its own confirmation
     * dialog.
     * * The `browserWindow` argument is ignored since it is not possible to make this
     * confirmation dialog modal.
     *
     * @platform darwin,win32
     */
    showCertificateTrustDialog(browserWindow: BrowserWindow, options: CertificateTrustDialogOptions): Promise<void>;
    /**
     * resolves when the certificate trust dialog is shown.
     *
     * On macOS, this displays a modal dialog that shows a message and certificate
     * information, and gives the user the option of trusting/importing the
     * certificate. If you provide a `browserWindow` argument the dialog will be
     * attached to the parent window, making it modal.
     *
     * On Windows the options are more limited, due to the Win32 APIs used:
     *
     * * The `message` argument is not used, as the OS provides its own confirmation
     * dialog.
     * * The `browserWindow` argument is ignored since it is not possible to make this
     * confirmation dialog modal.
     *
     * @platform darwin,win32
     */
    showCertificateTrustDialog(options: CertificateTrustDialogOptions): Promise<void>;
    /**
     * Displays a modal dialog that shows an error message.
     *
     * This API can be called safely before the `ready` event the `app` module emits,
     * it is usually used to report errors in early stage of startup. If called before
     * the app `ready`event on Linux, the message will be emitted to stderr, and no GUI
     * dialog will appear.
     */
    showErrorBox(title: string, content: string): void;
    /**
     * resolves with a promise containing the following properties:
     *
     * * `response` number - The index of the clicked button.
     * * `checkboxChecked` boolean - The checked state of the checkbox if
     * `checkboxLabel` was set. Otherwise `false`.
     *
     * Shows a message box.
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     */
    showMessageBox(browserWindow: BrowserWindow, options: MessageBoxOptions): Promise<Electron.MessageBoxReturnValue>;
    /**
     * resolves with a promise containing the following properties:
     *
     * * `response` number - The index of the clicked button.
     * * `checkboxChecked` boolean - The checked state of the checkbox if
     * `checkboxLabel` was set. Otherwise `false`.
     *
     * Shows a message box.
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     */
    showMessageBox(options: MessageBoxOptions): Promise<Electron.MessageBoxReturnValue>;
    /**
     * the index of the clicked button.
     *
     * Shows a message box, it will block the process until the message box is closed.
     * It returns the index of the clicked button.
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal. If `browserWindow` is not shown dialog will not be
     * attached to it. In such case it will be displayed as an independent window.
     */
    showMessageBoxSync(browserWindow: BrowserWindow, options: MessageBoxSyncOptions): number;
    /**
     * the index of the clicked button.
     *
     * Shows a message box, it will block the process until the message box is closed.
     * It returns the index of the clicked button.
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal. If `browserWindow` is not shown dialog will not be
     * attached to it. In such case it will be displayed as an independent window.
     */
    showMessageBoxSync(options: MessageBoxSyncOptions): number;
    /**
     * Resolve with an object containing the following:
     *
     * * `canceled` boolean - whether or not the dialog was canceled.
     * * `filePaths` string[] - An array of file paths chosen by the user. If the
     * dialog is cancelled this will be an empty array.
     * * `bookmarks` string[] (optional) _macOS_ _mas_ - An array matching the
     * `filePaths` array of base64 encoded strings which contains security scoped
     * bookmark data. `securityScopedBookmarks` must be enabled for this to be
     * populated. (For return values, see table here.)
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     *
     * The `filters` specifies an array of file types that can be displayed or selected
     * when you want to limit the user to a specific type. For example:
     *
     * The `extensions` array should contain extensions without wildcards or dots (e.g.
     * `'png'` is good but `'.png'` and `'*.png'` are bad). To show all files, use the
     * `'*'` wildcard (no other wildcard is supported).
     *
     * **Note:** On Windows and Linux an open dialog can not be both a file selector
     * and a directory selector, so if you set `properties` to `['openFile',
     * 'openDirectory']` on these platforms, a directory selector will be shown.
     */
    showOpenDialog(browserWindow: BrowserWindow, options: OpenDialogOptions): Promise<Electron.OpenDialogReturnValue>;
    /**
     * Resolve with an object containing the following:
     *
     * * `canceled` boolean - whether or not the dialog was canceled.
     * * `filePaths` string[] - An array of file paths chosen by the user. If the
     * dialog is cancelled this will be an empty array.
     * * `bookmarks` string[] (optional) _macOS_ _mas_ - An array matching the
     * `filePaths` array of base64 encoded strings which contains security scoped
     * bookmark data. `securityScopedBookmarks` must be enabled for this to be
     * populated. (For return values, see table here.)
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     *
     * The `filters` specifies an array of file types that can be displayed or selected
     * when you want to limit the user to a specific type. For example:
     *
     * The `extensions` array should contain extensions without wildcards or dots (e.g.
     * `'png'` is good but `'.png'` and `'*.png'` are bad). To show all files, use the
     * `'*'` wildcard (no other wildcard is supported).
     *
     * **Note:** On Windows and Linux an open dialog can not be both a file selector
     * and a directory selector, so if you set `properties` to `['openFile',
     * 'openDirectory']` on these platforms, a directory selector will be shown.
     */
    showOpenDialog(options: OpenDialogOptions): Promise<Electron.OpenDialogReturnValue>;
    /**
     * the file paths chosen by the user; if the dialog is cancelled it returns
     * `undefined`.
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     *
     * The `filters` specifies an array of file types that can be displayed or selected
     * when you want to limit the user to a specific type. For example:
     *
     * The `extensions` array should contain extensions without wildcards or dots (e.g.
     * `'png'` is good but `'.png'` and `'*.png'` are bad). To show all files, use the
     * `'*'` wildcard (no other wildcard is supported).
     *
     * **Note:** On Windows and Linux an open dialog can not be both a file selector
     * and a directory selector, so if you set `properties` to `['openFile',
     * 'openDirectory']` on these platforms, a directory selector will be shown.
     */
    showOpenDialogSync(browserWindow: BrowserWindow, options: OpenDialogSyncOptions): (string[]) | (undefined);
    /**
     * the file paths chosen by the user; if the dialog is cancelled it returns
     * `undefined`.
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     *
     * The `filters` specifies an array of file types that can be displayed or selected
     * when you want to limit the user to a specific type. For example:
     *
     * The `extensions` array should contain extensions without wildcards or dots (e.g.
     * `'png'` is good but `'.png'` and `'*.png'` are bad). To show all files, use the
     * `'*'` wildcard (no other wildcard is supported).
     *
     * **Note:** On Windows and Linux an open dialog can not be both a file selector
     * and a directory selector, so if you set `properties` to `['openFile',
     * 'openDirectory']` on these platforms, a directory selector will be shown.
     */
    showOpenDialogSync(options: OpenDialogSyncOptions): (string[]) | (undefined);
    /**
     * Resolve with an object containing the following:
     *
     * * `canceled` boolean - whether or not the dialog was canceled.
     * * `filePath` string (optional) - If the dialog is canceled, this will be
     * `undefined`.
     * * `bookmark` string (optional) _macOS_ _mas_ - Base64 encoded string which
     * contains the security scoped bookmark data for the saved file.
     * `securityScopedBookmarks` must be enabled for this to be present. (For return
     * values, see table here.)
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     *
     * The `filters` specifies an array of file types that can be displayed, see
     * `dialog.showOpenDialog` for an example.
     *
     * **Note:** On macOS, using the asynchronous version is recommended to avoid
     * issues when expanding and collapsing the dialog.
     */
    showSaveDialog(browserWindow: BrowserWindow, options: SaveDialogOptions): Promise<Electron.SaveDialogReturnValue>;
    /**
     * Resolve with an object containing the following:
     *
     * * `canceled` boolean - whether or not the dialog was canceled.
     * * `filePath` string (optional) - If the dialog is canceled, this will be
     * `undefined`.
     * * `bookmark` string (optional) _macOS_ _mas_ - Base64 encoded string which
     * contains the security scoped bookmark data for the saved file.
     * `securityScopedBookmarks` must be enabled for this to be present. (For return
     * values, see table here.)
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     *
     * The `filters` specifies an array of file types that can be displayed, see
     * `dialog.showOpenDialog` for an example.
     *
     * **Note:** On macOS, using the asynchronous version is recommended to avoid
     * issues when expanding and collapsing the dialog.
     */
    showSaveDialog(options: SaveDialogOptions): Promise<Electron.SaveDialogReturnValue>;
    /**
     * the path of the file chosen by the user; if the dialog is cancelled it returns
     * `undefined`.
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     *
     * The `filters` specifies an array of file types that can be displayed, see
     * `dialog.showOpenDialog` for an example.
     */
    showSaveDialogSync(browserWindow: BrowserWindow, options: SaveDialogSyncOptions): (string) | (undefined);
    /**
     * the path of the file chosen by the user; if the dialog is cancelled it returns
     * `undefined`.
     *
     * The `browserWindow` argument allows the dialog to attach itself to a parent
     * window, making it modal.
     *
     * The `filters` specifies an array of file types that can be displayed, see
     * `dialog.showOpenDialog` for an example.
     */
    showSaveDialogSync(options: SaveDialogSyncOptions): (string) | (undefined);
  }

  interface Display {

    // Docs: https://electronjs.org/docs/api/structures/display

    /**
     * Can be `available`, `unavailable`, `unknown`.
     */
    accelerometerSupport: ('available' | 'unavailable' | 'unknown');
    /**
     * the bounds of the display in DIP points.
     */
    bounds: Rectangle;
    /**
     * The number of bits per pixel.
     */
    colorDepth: number;
    /**
     *  represent a color space (three-dimensional object which contains all realizable
     * color combinations) for the purpose of color conversions.
     */
    colorSpace: string;
    /**
     * The number of bits per color component.
     */
    depthPerComponent: number;
    /**
     * `true`` if the display is detected by the system.
     */
    detected: boolean;
    /**
     * The display refresh rate.
     */
    displayFrequency: number;
    /**
     * Unique identifier associated with the display. A value of of -1 means the
     * display is invalid or the correct `id` is not yet known, and a value of -10
     * means the display is a virtual display assigned to a unified desktop.
     */
    id: number;
    /**
     * `true` for an internal display and `false` for an external display.
     */
    internal: boolean;
    /**
     * User-friendly label, determined by the platform.
     */
    label: string;
    /**
     * Maximum cursor size in native pixels.
     */
    maximumCursorSize: Size;
    /**
     * Whether or not the display is a monochrome display.
     */
    monochrome: boolean;
    /**
     * Returns the display's origin in pixel coordinates. Only available on windowing
     * systems like X11 that position displays in pixel coordinates.
     */
    nativeOrigin: Point;
    /**
     * Can be 0, 90, 180, 270, represents screen rotation in clock-wise degrees.
     */
    rotation: number;
    /**
     * Output device's pixel scale factor.
     */
    scaleFactor: number;
    size: Size;
    /**
     * Can be `available`, `unavailable`, `unknown`.
     */
    touchSupport: ('available' | 'unavailable' | 'unknown');
    /**
     * the work area of the display in DIP points.
     */
    workArea: Rectangle;
    /**
     * The size of the work area.
     */
    workAreaSize: Size;
  }

  class Dock {

    // Docs: https://electronjs.org/docs/api/dock

    /**
     * an ID representing the request.
     *
     * When `critical` is passed, the dock icon will bounce until either the
     * application becomes active or the request is canceled.
     *
     * When `informational` is passed, the dock icon will bounce for one second.
     * However, the request remains active until either the application becomes active
     * or the request is canceled.
     *
     * **Note:** This method can only be used while the app is not focused; when the
     * app is focused it will return -1.
     *
     * @platform darwin
     */
    bounce(type?: 'critical' | 'informational'): number;
    /**
     * Cancel the bounce of `id`.
     *
     * @platform darwin
     */
    cancelBounce(id: number): void;
    /**
     * Bounces the Downloads stack if the filePath is inside the Downloads folder.
     *
     * @platform darwin
     */
    downloadFinished(filePath: string): void;
    /**
     * The badge string of the dock.
     *
     * @platform darwin
     */
    getBadge(): string;
    /**
     * The application's dock menu.
     *
     * @platform darwin
     */
    getMenu(): (Menu) | (null);
    /**
     * Hides the dock icon.
     *
     * @platform darwin
     */
    hide(): void;
    /**
     * Whether the dock icon is visible.
     *
     * @platform darwin
     */
    isVisible(): boolean;
    /**
     * Sets the string to be displayed in the dock’s badging area.
     *
     * @platform darwin
     */
    setBadge(text: string): void;
    /**
     * Sets the `image` associated with this dock icon.
     *
     * @platform darwin
     */
    setIcon(image: (NativeImage) | (string)): void;
    /**
     * Sets the application's dock menu.
     *
     * @platform darwin
     */
    setMenu(menu: Menu): void;
    /**
     * Resolves when the dock icon is shown.
     *
     * @platform darwin
     */
    show(): Promise<void>;
  }

  class DownloadItem extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/download-item

    /**
     * Emitted when the download is in a terminal state. This includes a completed
     * download, a cancelled download (via `downloadItem.cancel()`), and interrupted
     * download that can't be resumed.
     *
     * The `state` can be one of following:
     *
     * * `completed` - The download completed successfully.
     * * `cancelled` - The download has been cancelled.
     * * `interrupted` - The download has interrupted and can not resume.
     */
    on(event: 'done', listener: (event: Event,
                                 /**
                                  * Can be `completed`, `cancelled` or `interrupted`.
                                  */
                                 state: ('completed' | 'cancelled' | 'interrupted')) => void): this;
    off(event: 'done', listener: (event: Event,
                                 /**
                                  * Can be `completed`, `cancelled` or `interrupted`.
                                  */
                                 state: ('completed' | 'cancelled' | 'interrupted')) => void): this;
    once(event: 'done', listener: (event: Event,
                                 /**
                                  * Can be `completed`, `cancelled` or `interrupted`.
                                  */
                                 state: ('completed' | 'cancelled' | 'interrupted')) => void): this;
    addListener(event: 'done', listener: (event: Event,
                                 /**
                                  * Can be `completed`, `cancelled` or `interrupted`.
                                  */
                                 state: ('completed' | 'cancelled' | 'interrupted')) => void): this;
    removeListener(event: 'done', listener: (event: Event,
                                 /**
                                  * Can be `completed`, `cancelled` or `interrupted`.
                                  */
                                 state: ('completed' | 'cancelled' | 'interrupted')) => void): this;
    /**
     * Emitted when the download has been updated and is not done.
     *
     * The `state` can be one of following:
     *
     * * `progressing` - The download is in-progress.
     * * `interrupted` - The download has interrupted and can be resumed.
     */
    on(event: 'updated', listener: (event: Event,
                                    /**
                                     * Can be `progressing` or `interrupted`.
                                     */
                                    state: ('progressing' | 'interrupted')) => void): this;
    off(event: 'updated', listener: (event: Event,
                                    /**
                                     * Can be `progressing` or `interrupted`.
                                     */
                                    state: ('progressing' | 'interrupted')) => void): this;
    once(event: 'updated', listener: (event: Event,
                                    /**
                                     * Can be `progressing` or `interrupted`.
                                     */
                                    state: ('progressing' | 'interrupted')) => void): this;
    addListener(event: 'updated', listener: (event: Event,
                                    /**
                                     * Can be `progressing` or `interrupted`.
                                     */
                                    state: ('progressing' | 'interrupted')) => void): this;
    removeListener(event: 'updated', listener: (event: Event,
                                    /**
                                     * Can be `progressing` or `interrupted`.
                                     */
                                    state: ('progressing' | 'interrupted')) => void): this;
    /**
     * Cancels the download operation.
     */
    cancel(): void;
    /**
     * Whether the download can resume.
     */
    canResume(): boolean;
    /**
     * The Content-Disposition field from the response header.
     */
    getContentDisposition(): string;
    /**
     * ETag header value.
     */
    getETag(): string;
    /**
     * The file name of the download item.
     *
     * **Note:** The file name is not always the same as the actual one saved in local
     * disk. If user changes the file name in a prompted download saving dialog, the
     * actual name of saved file will be different.
     */
    getFilename(): string;
    /**
     * Last-Modified header value.
     */
    getLastModifiedTime(): string;
    /**
     * The files mime type.
     */
    getMimeType(): string;
    /**
     * The received bytes of the download item.
     */
    getReceivedBytes(): number;
    /**
     * Returns the object previously set by
     * `downloadItem.setSaveDialogOptions(options)`.
     */
    getSaveDialogOptions(): SaveDialogOptions;
    /**
     * The save path of the download item. This will be either the path set via
     * `downloadItem.setSavePath(path)` or the path selected from the shown save
     * dialog.
     */
    getSavePath(): string;
    /**
     * Number of seconds since the UNIX epoch when the download was started.
     */
    getStartTime(): number;
    /**
     * The current state. Can be `progressing`, `completed`, `cancelled` or
     * `interrupted`.
     *
     * **Note:** The following methods are useful specifically to resume a `cancelled`
     * item when session is restarted.
     */
    getState(): ('progressing' | 'completed' | 'cancelled' | 'interrupted');
    /**
     * The total size in bytes of the download item.
     *
     * If the size is unknown, it returns 0.
     */
    getTotalBytes(): number;
    /**
     * The origin URL where the item is downloaded from.
     */
    getURL(): string;
    /**
     * The complete URL chain of the item including any redirects.
     */
    getURLChain(): string[];
    /**
     * Whether the download has user gesture.
     */
    hasUserGesture(): boolean;
    /**
     * Whether the download is paused.
     */
    isPaused(): boolean;
    /**
     * Pauses the download.
     */
    pause(): void;
    /**
     * Resumes the download that has been paused.
     *
     * **Note:** To enable resumable downloads the server you are downloading from must
     * support range requests and provide both `Last-Modified` and `ETag` header
     * values. Otherwise `resume()` will dismiss previously received bytes and restart
     * the download from the beginning.
     */
    resume(): void;
    /**
     * This API allows the user to set custom options for the save dialog that opens
     * for the download item by default. The API is only available in session's
     * `will-download` callback function.
     */
    setSaveDialogOptions(options: SaveDialogOptions): void;
    /**
     * The API is only available in session's `will-download` callback function. If
     * `path` doesn't exist, Electron will try to make the directory recursively. If
     * user doesn't set the save path via the API, Electron will use the original
     * routine to determine the save path; this usually prompts a save dialog.
     */
    setSavePath(path: string): void;
    /**
     * A `string` property that determines the save file path of the download item.
     *
     * The property is only available in session's `will-download` callback function.
     * If user doesn't set the save path via the property, Electron will use the
     * original routine to determine the save path; this usually prompts a save dialog.
     */
    savePath: string;
  }

  interface Extension {

    // Docs: https://electronjs.org/docs/api/structures/extension

    id: string;
    /**
     * Copy of the extension's manifest data.
     */
    manifest: any;
    name: string;
    /**
     * The extension's file path.
     */
    path: string;
    /**
     * The extension's `chrome-extension://` URL.
     */
    url: string;
    version: string;
  }

  interface ExtensionInfo {

    // Docs: https://electronjs.org/docs/api/structures/extension-info

    name: string;
    version: string;
  }

  interface FileFilter {

    // Docs: https://electronjs.org/docs/api/structures/file-filter

    extensions: string[];
    name: string;
  }

  interface FilePathWithHeaders {

    // Docs: https://electronjs.org/docs/api/structures/file-path-with-headers

    /**
     * Additional headers to be sent.
     */
    headers?: Record<string, string>;
    /**
     * The path to the file to send.
     */
    path: string;
  }

  interface GlobalShortcut {

    // Docs: https://electronjs.org/docs/api/global-shortcut

    /**
     * Whether this application has registered `accelerator`.
     *
     * When the accelerator is already taken by other applications, this call will
     * still return `false`. This behavior is intended by operating systems, since they
     * don't want applications to fight for global shortcuts.
     */
    isRegistered(accelerator: Accelerator): boolean;
    /**
     * Whether or not the shortcut was registered successfully.
     *
     * Registers a global shortcut of `accelerator`. The `callback` is called when the
     * registered shortcut is pressed by the user.
     *
     * When the accelerator is already taken by other applications, this call will
     * silently fail. This behavior is intended by operating systems, since they don't
     * want applications to fight for global shortcuts.
     *
     * The following accelerators will not be registered successfully on macOS 10.14
     * Mojave unless the app has been authorized as a trusted accessibility client:
     *
     * * "Media Play/Pause"
     * * "Media Next Track"
     * * "Media Previous Track"
     * * "Media Stop"
     */
    register(accelerator: Accelerator, callback: () => void): boolean;
    /**
     * Registers a global shortcut of all `accelerator` items in `accelerators`. The
     * `callback` is called when any of the registered shortcuts are pressed by the
     * user.
     *
     * When a given accelerator is already taken by other applications, this call will
     * silently fail. This behavior is intended by operating systems, since they don't
     * want applications to fight for global shortcuts.
     *
     * The following accelerators will not be registered successfully on macOS 10.14
     * Mojave unless the app has been authorized as a trusted accessibility client:
     *
     * * "Media Play/Pause"
     * * "Media Next Track"
     * * "Media Previous Track"
     * * "Media Stop"
     */
    registerAll(accelerators: Accelerator[], callback: () => void): void;
    /**
     * Unregisters the global shortcut of `accelerator`.
     */
    unregister(accelerator: Accelerator): void;
    /**
     * Unregisters all of the global shortcuts.
     */
    unregisterAll(): void;
  }

  interface GPUFeatureStatus {

    // Docs: https://electronjs.org/docs/api/structures/gpu-feature-status

    /**
     * Canvas.
     */
    '2d_canvas': string;
    /**
     * Flash.
     */
    flash_3d: string;
    /**
     * Flash Stage3D.
     */
    flash_stage3d: string;
    /**
     * Flash Stage3D Baseline profile.
     */
    flash_stage3d_baseline: string;
    /**
     * Compositing.
     */
    gpu_compositing: string;
    /**
     * Multiple Raster Threads.
     */
    multiple_raster_threads: string;
    /**
     * Native GpuMemoryBuffers.
     */
    native_gpu_memory_buffers: string;
    /**
     * Rasterization.
     */
    rasterization: string;
    /**
     * Video Decode.
     */
    video_decode: string;
    /**
     * Video Encode.
     */
    video_encode: string;
    /**
     * VPx Video Decode.
     */
    vpx_decode: string;
    /**
     * WebGL.
     */
    webgl: string;
    /**
     * WebGL2.
     */
    webgl2: string;
  }

  interface HIDDevice {

    // Docs: https://electronjs.org/docs/api/structures/hid-device

    /**
     * Unique identifier for the device.
     */
    deviceId: string;
    /**
     * Unique identifier for the HID interface.  A device may have multiple HID
     * interfaces.
     */
    guid?: string;
    /**
     * Name of the device.
     */
    name: string;
    /**
     * The USB product ID.
     */
    productId: number;
    /**
     * The USB device serial number.
     */
    serialNumber?: string;
    /**
     * The USB vendor ID.
     */
    vendorId: number;
  }

  interface InAppPurchase extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/in-app-purchase

    on(event: 'transactions-updated', listener: Function): this;
    off(event: 'transactions-updated', listener: Function): this;
    once(event: 'transactions-updated', listener: Function): this;
    addListener(event: 'transactions-updated', listener: Function): this;
    removeListener(event: 'transactions-updated', listener: Function): this;
    /**
     * whether a user can make a payment.
     */
    canMakePayments(): boolean;
    /**
     * Completes all pending transactions.
     */
    finishAllTransactions(): void;
    /**
     * Completes the pending transactions corresponding to the date.
     */
    finishTransactionByDate(date: string): void;
    /**
     * Resolves with an array of `Product` objects.
     *
     * Retrieves the product descriptions.
     */
    getProducts(productIDs: string[]): Promise<Electron.Product[]>;
    /**
     * the path to the receipt.
     */
    getReceiptURL(): string;
    /**
     * Returns `true` if the product is valid and added to the payment queue.
     *
     * You should listen for the `transactions-updated` event as soon as possible and
     * certainly before you call `purchaseProduct`.
     */
    purchaseProduct(productID: string, opts?: (number) | (PurchaseProductOpts)): Promise<boolean>;
    /**
     * Restores finished transactions. This method can be called either to install
     * purchases on additional devices, or to restore purchases for an application that
     * the user deleted and reinstalled.
     *
     * The payment queue delivers a new transaction for each previously completed
     * transaction that can be restored. Each transaction includes a copy of the
     * original transaction.
     */
    restoreCompletedTransactions(): void;
  }

  class IncomingMessage extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/incoming-message

    /**
     * Emitted when a request has been canceled during an ongoing HTTP transaction.
     */
    on(event: 'aborted', listener: Function): this;
    off(event: 'aborted', listener: Function): this;
    once(event: 'aborted', listener: Function): this;
    addListener(event: 'aborted', listener: Function): this;
    removeListener(event: 'aborted', listener: Function): this;
    /**
     * The `data` event is the usual method of transferring response data into
     * applicative code.
     */
    on(event: 'data', listener: (
                                 /**
                                  * A chunk of response body's data.
                                  */
                                 chunk: Buffer) => void): this;
    off(event: 'data', listener: (
                                 /**
                                  * A chunk of response body's data.
                                  */
                                 chunk: Buffer) => void): this;
    once(event: 'data', listener: (
                                 /**
                                  * A chunk of response body's data.
                                  */
                                 chunk: Buffer) => void): this;
    addListener(event: 'data', listener: (
                                 /**
                                  * A chunk of response body's data.
                                  */
                                 chunk: Buffer) => void): this;
    removeListener(event: 'data', listener: (
                                 /**
                                  * A chunk of response body's data.
                                  */
                                 chunk: Buffer) => void): this;
    /**
     * Indicates that response body has ended. Must be placed before 'data' event.
     */
    on(event: 'end', listener: Function): this;
    off(event: 'end', listener: Function): this;
    once(event: 'end', listener: Function): this;
    addListener(event: 'end', listener: Function): this;
    removeListener(event: 'end', listener: Function): this;
    /**
     * Returns:
     *
     * `error` Error - Typically holds an error string identifying failure root cause.
     *
     * Emitted when an error was encountered while streaming response data events. For
     * instance, if the server closes the underlying while the response is still
     * streaming, an `error` event will be emitted on the response object and a `close`
     * event will subsequently follow on the request object.
     */
    on(event: 'error', listener: Function): this;
    off(event: 'error', listener: Function): this;
    once(event: 'error', listener: Function): this;
    addListener(event: 'error', listener: Function): this;
    removeListener(event: 'error', listener: Function): this;
    /**
     * A `Record<string, string | string[]>` representing the HTTP response headers.
     * The `headers` object is formatted as follows:
     *
     * * All header names are lowercased.
     * * Duplicates of `age`, `authorization`, `content-length`, `content-type`,
     * `etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`,
     * `last-modified`, `location`, `max-forwards`, `proxy-authorization`, `referer`,
     * `retry-after`, `server`, or `user-agent` are discarded.
     * * `set-cookie` is always an array. Duplicates are added to the array.
     * * For duplicate `cookie` headers, the values are joined together with '; '.
     * * For all other headers, the values are joined together with ', '.
     */
    headers: Record<string, (string) | (string[])>;
    /**
     * A `string` indicating the HTTP protocol version number. Typical values are '1.0'
     * or '1.1'. Additionally `httpVersionMajor` and `httpVersionMinor` are two
     * Integer-valued readable properties that return respectively the HTTP major and
     * minor version numbers.
     */
    httpVersion: string;
    /**
     * An `Integer` indicating the HTTP protocol major version number.
     */
    httpVersionMajor: number;
    /**
     * An `Integer` indicating the HTTP protocol minor version number.
     */
    httpVersionMinor: number;
    /**
     * A `string[]` containing the raw HTTP response headers exactly as they were
     * received. The keys and values are in the same list. It is not a list of tuples.
     * So, the even-numbered offsets are key values, and the odd-numbered offsets are
     * the associated values. Header names are not lowercased, and duplicates are not
     * merged.
     */
    rawHeaders: string[];
    /**
     * An `Integer` indicating the HTTP response status code.
     */
    statusCode: number;
    /**
     * A `string` representing the HTTP status message.
     */
    statusMessage: string;
  }

  interface InputEvent {

    // Docs: https://electronjs.org/docs/api/structures/input-event

    /**
     * An array of modifiers of the event, can be `shift`, `control`, `ctrl`, `alt`,
     * `meta`, `command`, `cmd`, `isKeypad`, `isAutoRepeat`, `leftButtonDown`,
     * `middleButtonDown`, `rightButtonDown`, `capsLock`, `numLock`, `left`, `right`.
     */
    modifiers?: Array<'shift' | 'control' | 'ctrl' | 'alt' | 'meta' | 'command' | 'cmd' | 'isKeypad' | 'isAutoRepeat' | 'leftButtonDown' | 'middleButtonDown' | 'rightButtonDown' | 'capsLock' | 'numLock' | 'left' | 'right'>;
    /**
     * Can be `undefined`, `mouseDown`, `mouseUp`, `mouseMove`, `mouseEnter`,
     * `mouseLeave`, `contextMenu`, `mouseWheel`, `rawKeyDown`, `keyDown`, `keyUp`,
     * `char`, `gestureScrollBegin`, `gestureScrollEnd`, `gestureScrollUpdate`,
     * `gestureFlingStart`, `gestureFlingCancel`, `gesturePinchBegin`,
     * `gesturePinchEnd`, `gesturePinchUpdate`, `gestureTapDown`, `gestureShowPress`,
     * `gestureTap`, `gestureTapCancel`, `gestureShortPress`, `gestureLongPress`,
     * `gestureLongTap`, `gestureTwoFingerTap`, `gestureTapUnconfirmed`,
     * `gestureDoubleTap`, `touchStart`, `touchMove`, `touchEnd`, `touchCancel`,
     * `touchScrollStarted`, `pointerDown`, `pointerUp`, `pointerMove`,
     * `pointerRawUpdate`, `pointerCancel` or `pointerCausedUaAction`.
     */
    type: ('undefined' | 'mouseDown' | 'mouseUp' | 'mouseMove' | 'mouseEnter' | 'mouseLeave' | 'contextMenu' | 'mouseWheel' | 'rawKeyDown' | 'keyDown' | 'keyUp' | 'char' | 'gestureScrollBegin' | 'gestureScrollEnd' | 'gestureScrollUpdate' | 'gestureFlingStart' | 'gestureFlingCancel' | 'gesturePinchBegin' | 'gesturePinchEnd' | 'gesturePinchUpdate' | 'gestureTapDown' | 'gestureShowPress' | 'gestureTap' | 'gestureTapCancel' | 'gestureShortPress' | 'gestureLongPress' | 'gestureLongTap' | 'gestureTwoFingerTap' | 'gestureTapUnconfirmed' | 'gestureDoubleTap' | 'touchStart' | 'touchMove' | 'touchEnd' | 'touchCancel' | 'touchScrollStarted' | 'pointerDown' | 'pointerUp' | 'pointerMove' | 'pointerRawUpdate' | 'pointerCancel' | 'pointerCausedUaAction');
  }

  interface IOCounters {

    // Docs: https://electronjs.org/docs/api/structures/io-counters

    /**
     * Then number of I/O other operations.
     */
    otherOperationCount: number;
    /**
     * Then number of I/O other transfers.
     */
    otherTransferCount: number;
    /**
     * The number of I/O read operations.
     */
    readOperationCount: number;
    /**
     * The number of I/O read transfers.
     */
    readTransferCount: number;
    /**
     * The number of I/O write operations.
     */
    writeOperationCount: number;
    /**
     * The number of I/O write transfers.
     */
    writeTransferCount: number;
  }

  interface IpcMain extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/ipc-main

    /**
     * Adds a handler for an `invoke`able IPC. This handler will be called whenever a
     * renderer calls `ipcRenderer.invoke(channel, ...args)`.
     *
     * If `listener` returns a Promise, the eventual result of the promise will be
     * returned as a reply to the remote caller. Otherwise, the return value of the
     * listener will be used as the value of the reply.
     *
     * The `event` that is passed as the first argument to the handler is the same as
     * that passed to a regular event listener. It includes information about which
     * WebContents is the source of the invoke request.
     *
     * Errors thrown through `handle` in the main process are not transparent as they
     * are serialized and only the `message` property from the original error is
     * provided to the renderer process. Please refer to #24427 for details.
     */
    handle(channel: string, listener: (event: IpcMainInvokeEvent, ...args: any[]) => (Promise<any>) | (any)): void;
    /**
     * Handles a single `invoke`able IPC message, then removes the listener. See
     * `ipcMain.handle(channel, listener)`.
     */
    handleOnce(channel: string, listener: (event: IpcMainInvokeEvent, ...args: any[]) => (Promise<any>) | (any)): void;
    /**
     * Listens to `channel`, when a new message arrives `listener` would be called with
     * `listener(event, args...)`.
     */
    on(channel: string, listener: (event: IpcMainEvent, ...args: any[]) => void): this;
    /**
     * Adds a one time `listener` function for the event. This `listener` is invoked
     * only the next time a message is sent to `channel`, after which it is removed.
     */
    once(channel: string, listener: (event: IpcMainEvent, ...args: any[]) => void): this;
    /**
     * Removes listeners of the specified `channel`.
     */
    removeAllListeners(channel?: string): this;
    /**
     * Removes any handler for `channel`, if present.
     */
    removeHandler(channel: string): void;
    /**
     * Removes the specified `listener` from the listener array for the specified
     * `channel`.
     */
    removeListener(channel: string, listener: (...args: any[]) => void): this;
  }

  interface IpcMainEvent extends Event {

    // Docs: https://electronjs.org/docs/api/structures/ipc-main-event

    /**
     * The ID of the renderer frame that sent this message
     */
    frameId: number;
    /**
     * A list of MessagePorts that were transferred with this message
     */
    ports: MessagePortMain[];
    /**
     * The internal ID of the renderer process that sent this message
     */
    processId: number;
    /**
     * A function that will send an IPC message to the renderer frame that sent the
     * original message that you are currently handling.  You should use this method to
     * "reply" to the sent message in order to guarantee the reply will go to the
     * correct process and frame.
     */
    reply: (channel: string, ...args: any[]) => void;
    /**
     * Set this to the value to be returned in a synchronous message
     */
    returnValue: any;
    /**
     * Returns the `webContents` that sent the message
     */
    sender: WebContents;
    /**
     * The frame that sent this message
     *
     */
    readonly senderFrame: WebFrameMain;
  }

  interface IpcMainInvokeEvent extends Event {

    // Docs: https://electronjs.org/docs/api/structures/ipc-main-invoke-event

    /**
     * The ID of the renderer frame that sent this message
     */
    frameId: number;
    /**
     * The internal ID of the renderer process that sent this message
     */
    processId: number;
    /**
     * Returns the `webContents` that sent the message
     */
    sender: WebContents;
    /**
     * The frame that sent this message
     *
     */
    readonly senderFrame: WebFrameMain;
  }

  interface IpcRenderer extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/ipc-renderer

    /**
     * Alias for `ipcRenderer.on`.
     */
    addListener(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): this;
    /**
     * Resolves with the response from the main process.
     *
     * Send a message to the main process via `channel` and expect a result
     * asynchronously. Arguments will be serialized with the Structured Clone
     * Algorithm, just like `window.postMessage`, so prototype chains will not be
     * included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw
     * an exception.
     *
     * The main process should listen for `channel` with `ipcMain.handle()`.
     *
     * For example:
     *
     * If you need to transfer a `MessagePort` to the main process, use
     * `ipcRenderer.postMessage`.
     *
     * If you do not need a response to the message, consider using `ipcRenderer.send`.
     *
     * > **Note** Sending non-standard JavaScript types such as DOM objects or special
     * Electron objects will throw an exception.
     *
     * Since the main process does not have support for DOM objects such as
     * `ImageBitmap`, `File`, `DOMMatrix` and so on, such objects cannot be sent over
     * Electron's IPC to the main process, as the main process would have no way to
     * decode them. Attempting to send such objects over IPC will result in an error.
     *
     * > **Note** If the handler in the main process throws an error, the promise
     * returned by `invoke` will reject. However, the `Error` object in the renderer
     * process will not be the same as the one thrown in the main process.
     */
    invoke(channel: string, ...args: any[]): Promise<any>;
    /**
     * Alias for `ipcRenderer.removeListener`.
     */
    off(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): this;
    /**
     * Listens to `channel`, when a new message arrives `listener` would be called with
     * `listener(event, args...)`.
     */
    on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): this;
    /**
     * Adds a one time `listener` function for the event. This `listener` is invoked
     * only the next time a message is sent to `channel`, after which it is removed.
     */
    once(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): this;
    /**
     * Send a message to the main process, optionally transferring ownership of zero or
     * more `MessagePort` objects.
     *
     * The transferred `MessagePort` objects will be available in the main process as
     * `MessagePortMain` objects by accessing the `ports` property of the emitted
     * event.
     *
     * For example:
     *
     * For more information on using `MessagePort` and `MessageChannel`, see the MDN
     * documentation.
     */
    postMessage(channel: string, message: any, transfer?: MessagePort[]): void;
    /**
     * Removes all listeners, or those of the specified `channel`.
     */
    removeAllListeners(channel: string): this;
    /**
     * Removes the specified `listener` from the listener array for the specified
     * `channel`.
     */
    removeListener(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void): this;
    /**
     * Send an asynchronous message to the main process via `channel`, along with
     * arguments. Arguments will be serialized with the Structured Clone Algorithm,
     * just like `window.postMessage`, so prototype chains will not be included.
     * Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an
     * exception.
     *
     * > **NOTE:** Sending non-standard JavaScript types such as DOM objects or special
     * Electron objects will throw an exception.
     *
     * Since the main process does not have support for DOM objects such as
     * `ImageBitmap`, `File`, `DOMMatrix` and so on, such objects cannot be sent over
     * Electron's IPC to the main process, as the main process would have no way to
     * decode them. Attempting to send such objects over IPC will result in an error.
     *
     * The main process handles it by listening for `channel` with the `ipcMain`
     * module.
     *
     * If you need to transfer a `MessagePort` to the main process, use
     * `ipcRenderer.postMessage`.
     *
     * If you want to receive a single response from the main process, like the result
     * of a method call, consider using `ipcRenderer.invoke`.
     */
    send(channel: string, ...args: any[]): void;
    /**
     * The value sent back by the `ipcMain` handler.
     *
     * Send a message to the main process via `channel` and expect a result
     * synchronously. Arguments will be serialized with the Structured Clone Algorithm,
     * just like `window.postMessage`, so prototype chains will not be included.
     * Sending Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an
     * exception.
     *
     * > **NOTE:** Sending non-standard JavaScript types such as DOM objects or special
     * Electron objects will throw an exception.
     *
     * Since the main process does not have support for DOM objects such as
     * `ImageBitmap`, `File`, `DOMMatrix` and so on, such objects cannot be sent over
     * Electron's IPC to the main process, as the main process would have no way to
     * decode them. Attempting to send such objects over IPC will result in an error.
     *
     * The main process handles it by listening for `channel` with `ipcMain` module,
     * and replies by setting `event.returnValue`.
     *
     * > :warning: **WARNING**: Sending a synchronous message will block the whole
     * renderer process until the reply is received, so use this method only as a last
     * resort. It's much better to use the asynchronous version, `invoke()`.
     */
    sendSync(channel: string, ...args: any[]): any;
    /**
     * Like `ipcRenderer.send` but the event will be sent to the `<webview>` element in
     * the host page instead of the main process.
     */
    sendToHost(channel: string, ...args: any[]): void;
  }

  interface IpcRendererEvent extends Event {

    // Docs: https://electronjs.org/docs/api/structures/ipc-renderer-event

    /**
     * A list of MessagePorts that were transferred with this message
     */
    ports: MessagePort[];
    /**
     * The `IpcRenderer` instance that emitted the event originally
     */
    sender: IpcRenderer;
  }

  interface JumpListCategory {

    // Docs: https://electronjs.org/docs/api/structures/jump-list-category

    /**
     * Array of `JumpListItem` objects if `type` is `tasks` or `custom`, otherwise it
     * should be omitted.
     */
    items?: JumpListItem[];
    /**
     * Must be set if `type` is `custom`, otherwise it should be omitted.
     */
    name?: string;
    /**
     * One of the following:
     */
    type?: ('tasks' | 'frequent' | 'recent' | 'custom');
  }

  interface JumpListItem {

    // Docs: https://electronjs.org/docs/api/structures/jump-list-item

    /**
     * The command line arguments when `program` is executed. Should only be set if
     * `type` is `task`.
     */
    args?: string;
    /**
     * Description of the task (displayed in a tooltip). Should only be set if `type`
     * is `task`. Maximum length 260 characters.
     */
    description?: string;
    /**
     * The index of the icon in the resource file. If a resource file contains multiple
     * icons this value can be used to specify the zero-based index of the icon that
     * should be displayed for this task. If a resource file contains only one icon,
     * this property should be set to zero.
     */
    iconIndex?: number;
    /**
     * The absolute path to an icon to be displayed in a Jump List, which can be an
     * arbitrary resource file that contains an icon (e.g. `.ico`, `.exe`, `.dll`). You
     * can usually specify `process.execPath` to show the program icon.
     */
    iconPath?: string;
    /**
     * Path of the file to open, should only be set if `type` is `file`.
     */
    path?: string;
    /**
     * Path of the program to execute, usually you should specify `process.execPath`
     * which opens the current program. Should only be set if `type` is `task`.
     */
    program?: string;
    /**
     * The text to be displayed for the item in the Jump List. Should only be set if
     * `type` is `task`.
     */
    title?: string;
    /**
     * One of the following:
     */
    type?: ('task' | 'separator' | 'file');
    /**
     * The working directory. Default is empty.
     */
    workingDirectory?: string;
  }

  interface KeyboardEvent {

    // Docs: https://electronjs.org/docs/api/structures/keyboard-event

    /**
     * whether an Alt key was used in an accelerator to trigger the Event
     */
    altKey?: boolean;
    /**
     * whether the Control key was used in an accelerator to trigger the Event
     */
    ctrlKey?: boolean;
    /**
     * whether a meta key was used in an accelerator to trigger the Event
     */
    metaKey?: boolean;
    /**
     * whether a Shift key was used in an accelerator to trigger the Event
     */
    shiftKey?: boolean;
    /**
     * whether an accelerator was used to trigger the event as opposed to another user
     * gesture like mouse click
     */
    triggeredByAccelerator?: boolean;
  }

  interface KeyboardInputEvent extends InputEvent {

    // Docs: https://electronjs.org/docs/api/structures/keyboard-input-event

    /**
     * The character that will be sent as the keyboard event. Should only use the valid
     * key codes in Accelerator.
     */
    keyCode: string;
    /**
     * The type of the event, can be `rawKeyDown`, `keyDown`, `keyUp` or `char`.
     */
    type: ('rawKeyDown' | 'keyDown' | 'keyUp' | 'char');
  }

  interface MemoryInfo {

    // Docs: https://electronjs.org/docs/api/structures/memory-info

    /**
     * The maximum amount of memory that has ever been pinned to actual physical RAM.
     */
    peakWorkingSetSize: number;
    /**
     * The amount of memory not shared by other processes, such as JS heap or HTML
     * content.
     *
     * @platform win32
     */
    privateBytes?: number;
    /**
     * The amount of memory currently pinned to actual physical RAM.
     */
    workingSetSize: number;
  }

  interface MemoryUsageDetails {

    // Docs: https://electronjs.org/docs/api/structures/memory-usage-details

    count: number;
    liveSize: number;
    size: number;
  }

  class Menu extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/menu

    /**
     * Emitted when a popup is closed either manually or with `menu.closePopup()`.
     */
    on(event: 'menu-will-close', listener: (event: Event) => void): this;
    off(event: 'menu-will-close', listener: (event: Event) => void): this;
    once(event: 'menu-will-close', listener: (event: Event) => void): this;
    addListener(event: 'menu-will-close', listener: (event: Event) => void): this;
    removeListener(event: 'menu-will-close', listener: (event: Event) => void): this;
    /**
     * Emitted when `menu.popup()` is called.
     */
    on(event: 'menu-will-show', listener: (event: Event) => void): this;
    off(event: 'menu-will-show', listener: (event: Event) => void): this;
    once(event: 'menu-will-show', listener: (event: Event) => void): this;
    addListener(event: 'menu-will-show', listener: (event: Event) => void): this;
    removeListener(event: 'menu-will-show', listener: (event: Event) => void): this;
    /**
     * Menu
     */
    constructor();
    /**
     * Generally, the `template` is an array of `options` for constructing a MenuItem.
     * The usage can be referenced above.
     *
     * You can also attach other fields to the element of the `template` and they will
     * become properties of the constructed menu items.
     */
    static buildFromTemplate(template: Array<(MenuItemConstructorOptions) | (MenuItem)>): Menu;
    /**
     * The application menu, if set, or `null`, if not set.
     *
     * **Note:** The returned `Menu` instance doesn't support dynamic addition or
     * removal of menu items. Instance properties can still be dynamically modified.
     */
    static getApplicationMenu(): (Menu) | (null);
    /**
     * Sends the `action` to the first responder of application. This is used for
     * emulating default macOS menu behaviors. Usually you would use the `role`
     * property of a `MenuItem`.
     *
     * See the macOS Cocoa Event Handling Guide for more information on macOS' native
     * actions.
     *
     * @platform darwin
     */
    static sendActionToFirstResponder(action: string): void;
    /**
     * Sets `menu` as the application menu on macOS. On Windows and Linux, the `menu`
     * will be set as each window's top menu.
     *
     * Also on Windows and Linux, you can use a `&` in the top-level item name to
     * indicate which letter should get a generated accelerator. For example, using
     * `&File` for the file menu would result in a generated `Alt-F` accelerator that
     * opens the associated menu. The indicated character in the button label then gets
     * an underline, and the `&` character is not displayed on the button label.
     *
     * In order to escape the `&` character in an item name, add a proceeding `&`. For
     * example, `&&File` would result in `&File` displayed on the button label.
     *
     * Passing `null` will suppress the default menu. On Windows and Linux, this has
     * the additional effect of removing the menu bar from the window.
     *
     * **Note:** The default menu will be created automatically if the app does not set
     * one. It contains standard items such as `File`, `Edit`, `View`, `Window` and
     * `Help`.
     */
    static setApplicationMenu(menu: (Menu) | (null)): void;
    /**
     * Appends the `menuItem` to the menu.
     */
    append(menuItem: MenuItem): void;
    /**
     * Closes the context menu in the `browserWindow`.
     */
    closePopup(browserWindow?: BrowserWindow): void;
    /**
     * the item with the specified `id`
     */
    getMenuItemById(id: string): (MenuItem) | (null);
    /**
     * Inserts the `menuItem` to the `pos` position of the menu.
     */
    insert(pos: number, menuItem: MenuItem): void;
    /**
     * Pops up this menu as a context menu in the `BrowserWindow`.
     */
    popup(options?: PopupOptions): void;
    /**
     * A `MenuItem[]` array containing the menu's items.
     *
     * Each `Menu` consists of multiple `MenuItem`s and each `MenuItem` can have a
     * submenu.
     */
    items: MenuItem[];
  }

  class MenuItem {

    // Docs: https://electronjs.org/docs/api/menu-item

    /**
     * MenuItem
     */
    constructor(options: MenuItemConstructorOptions);
    /**
     * An `Accelerator` (optional) indicating the item's accelerator, if set.
     */
    accelerator?: Accelerator;
    /**
     * A `boolean` indicating whether the item is checked, this property can be
     * dynamically changed.
     *
     * A `checkbox` menu item will toggle the `checked` property on and off when
     * selected.
     *
     * A `radio` menu item will turn on its `checked` property when clicked, and will
     * turn off that property for all adjacent items in the same menu.
     *
     * You can add a `click` function for additional behavior.
     */
    checked: boolean;
    /**
     * A `Function` that is fired when the MenuItem receives a click event. It can be
     * called with `menuItem.click(event, focusedWindow, focusedWebContents)`.
     *
     * * `event` KeyboardEvent
     * * `focusedWindow` BrowserWindow
     * * `focusedWebContents` WebContents
     */
    click: Function;
    /**
     * A `number` indicating an item's sequential unique id.
     */
    commandId: number;
    /**
     * A `boolean` indicating whether the item is enabled, this property can be
     * dynamically changed.
     */
    enabled: boolean;
    /**
     * A `NativeImage | string` (optional) indicating the item's icon, if set.
     */
    icon?: (NativeImage) | (string);
    /**
     * A `string` indicating the item's unique id, this property can be dynamically
     * changed.
     */
    id: string;
    /**
     * A `string` indicating the item's visible label.
     */
    label: string;
    /**
     * A `Menu` that the item is a part of.
     */
    menu: Menu;
    /**
     * A `boolean` indicating if the accelerator should be registered with the system
     * or just displayed.
     *
     * This property can be dynamically changed.
     */
    registerAccelerator: boolean;
    /**
     * A `string` (optional) indicating the item's role, if set. Can be `undo`, `redo`,
     * `cut`, `copy`, `paste`, `pasteAndMatchStyle`, `delete`, `selectAll`, `reload`,
     * `forceReload`, `toggleDevTools`, `resetZoom`, `zoomIn`, `zoomOut`,
     * `toggleSpellChecker`, `togglefullscreen`, `window`, `minimize`, `close`, `help`,
     * `about`, `services`, `hide`, `hideOthers`, `unhide`, `quit`, `startSpeaking`,
     * `stopSpeaking`, `zoom`, `front`, `appMenu`, `fileMenu`, `editMenu`, `viewMenu`,
     * `shareMenu`, `recentDocuments`, `toggleTabBar`, `selectNextTab`,
     * `selectPreviousTab`, `showAllTabs`, `mergeAllWindows`, `clearRecentDocuments`,
     * `moveTabToNewWindow` or `windowMenu`
     */
    role?: ('undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'pasteAndMatchStyle' | 'delete' | 'selectAll' | 'reload' | 'forceReload' | 'toggleDevTools' | 'resetZoom' | 'zoomIn' | 'zoomOut' | 'toggleSpellChecker' | 'togglefullscreen' | 'window' | 'minimize' | 'close' | 'help' | 'about' | 'services' | 'hide' | 'hideOthers' | 'unhide' | 'quit' | 'startSpeaking' | 'stopSpeaking' | 'zoom' | 'front' | 'appMenu' | 'fileMenu' | 'editMenu' | 'viewMenu' | 'shareMenu' | 'recentDocuments' | 'toggleTabBar' | 'selectNextTab' | 'selectPreviousTab' | 'showAllTabs' | 'mergeAllWindows' | 'clearRecentDocuments' | 'moveTabToNewWindow' | 'windowMenu');
    /**
     * A `SharingItem` indicating the item to share when the `role` is `shareMenu`.
     *
     * This property can be dynamically changed.
     *
     * @platform darwin
     */
    sharingItem: SharingItem;
    /**
     * A `string` indicating the item's sublabel.
     */
    sublabel: string;
    /**
     * A `Menu` (optional) containing the menu item's submenu, if present.
     */
    submenu?: Menu;
    /**
     * A `string` indicating the item's hover text.
     *
     * @platform darwin
     */
    toolTip: string;
    /**
     * A `string` indicating the type of the item. Can be `normal`, `separator`,
     * `submenu`, `checkbox` or `radio`.
     */
    type: ('normal' | 'separator' | 'submenu' | 'checkbox' | 'radio');
    /**
     * An `Accelerator | null` indicating the item's user-assigned accelerator for the
     * menu item.
     *
     * **Note:** This property is only initialized after the `MenuItem` has been added
     * to a `Menu`. Either via `Menu.buildFromTemplate` or via
     * `Menu.append()/insert()`.  Accessing before initialization will just return
     * `null`.
     *
     * @platform darwin
     */
    readonly userAccelerator: (Accelerator) | (null);
    /**
     * A `boolean` indicating whether the item is visible, this property can be
     * dynamically changed.
     */
    visible: boolean;
  }

  class MessageChannelMain extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/message-channel-main

    /**
     * A `MessagePortMain` property.
     */
    port1: MessagePortMain;
    /**
     * A `MessagePortMain` property.
     */
    port2: MessagePortMain;
  }

  class MessagePortMain extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/message-port-main

    /**
     * Emitted when the remote end of a MessagePortMain object becomes disconnected.
     */
    on(event: 'close', listener: Function): this;
    off(event: 'close', listener: Function): this;
    once(event: 'close', listener: Function): this;
    addListener(event: 'close', listener: Function): this;
    removeListener(event: 'close', listener: Function): this;
    /**
     * Emitted when a MessagePortMain object receives a message.
     */
    on(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    off(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    once(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    addListener(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    removeListener(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    /**
     * Disconnects the port, so it is no longer active.
     */
    close(): void;
    /**
     * Sends a message from the port, and optionally, transfers ownership of objects to
     * other browsing contexts.
     */
    postMessage(message: any, transfer?: MessagePortMain[]): void;
    /**
     * Starts the sending of messages queued on the port. Messages will be queued until
     * this method is called.
     */
    start(): void;
  }

  interface MimeTypedBuffer {

    // Docs: https://electronjs.org/docs/api/structures/mime-typed-buffer

    /**
     * Charset of the buffer.
     */
    charset?: string;
    /**
     * The actual Buffer content.
     */
    data: Buffer;
    /**
     * MIME type of the buffer.
     */
    mimeType?: string;
  }

  interface MouseInputEvent extends InputEvent {

    // Docs: https://electronjs.org/docs/api/structures/mouse-input-event

    /**
     * The button pressed, can be `left`, `middle`, `right`.
     */
    button?: ('left' | 'middle' | 'right');
    clickCount?: number;
    globalX?: number;
    globalY?: number;
    movementX?: number;
    movementY?: number;
    /**
     * The type of the event, can be `mouseDown`, `mouseUp`, `mouseEnter`,
     * `mouseLeave`, `contextMenu`, `mouseWheel` or `mouseMove`.
     */
    type: ('mouseDown' | 'mouseUp' | 'mouseEnter' | 'mouseLeave' | 'contextMenu' | 'mouseWheel' | 'mouseMove');
    x: number;
    y: number;
  }

  interface MouseWheelInputEvent extends MouseInputEvent {

    // Docs: https://electronjs.org/docs/api/structures/mouse-wheel-input-event

    accelerationRatioX?: number;
    accelerationRatioY?: number;
    canScroll?: boolean;
    deltaX?: number;
    deltaY?: number;
    hasPreciseScrollingDeltas?: boolean;
    /**
     * The type of the event, can be `mouseWheel`.
     */
    type: ('mouseWheel');
    wheelTicksX?: number;
    wheelTicksY?: number;
  }

  class NativeImage {

    // Docs: https://electronjs.org/docs/api/native-image

    /**
     * Creates an empty `NativeImage` instance.
     */
    static createEmpty(): NativeImage;
    /**
     * Creates a new `NativeImage` instance from `buffer` that contains the raw bitmap
     * pixel data returned by `toBitmap()`. The specific format is platform-dependent.
     */
    static createFromBitmap(buffer: Buffer, options: CreateFromBitmapOptions): NativeImage;
    /**
     * Creates a new `NativeImage` instance from `buffer`. Tries to decode as PNG or
     * JPEG first.
     */
    static createFromBuffer(buffer: Buffer, options?: CreateFromBufferOptions): NativeImage;
    /**
     * Creates a new `NativeImage` instance from `dataUrl`, a base 64 encoded Data URL
     * string.
     */
    static createFromDataURL(dataURL: string): NativeImage;
    /**
     * Creates a new `NativeImage` instance from the `NSImage` that maps to the given
     * image name. See Apple's `NSImageName` documentation for a list of possible
     * values.
     *
     * The `hslShift` is applied to the image with the following rules:
     *
     * * `hsl_shift[0]` (hue): The absolute hue value for the image - 0 and 1 map to 0
     * and 360 on the hue color wheel (red).
     * * `hsl_shift[1]` (saturation): A saturation shift for the image, with the
     * following key values: 0 = remove all color. 0.5 = leave unchanged. 1 = fully
     * saturate the image.
     * * `hsl_shift[2]` (lightness): A lightness shift for the image, with the
     * following key values: 0 = remove all lightness (make all pixels black). 0.5 =
     * leave unchanged. 1 = full lightness (make all pixels white).
     *
     * This means that `[-1, 0, 1]` will make the image completely white and `[-1, 1,
     * 0]` will make the image completely black.
     *
     * In some cases, the `NSImageName` doesn't match its string representation; one
     * example of this is `NSFolderImageName`, whose string representation would
     * actually be `NSFolder`. Therefore, you'll need to determine the correct string
     * representation for your image before passing it in. This can be done with the
     * following:
     *
     * where `SYSTEM_IMAGE_NAME` should be replaced with any value from this list.
     *
     * @platform darwin
     */
    static createFromNamedImage(imageName: string, hslShift?: number[]): NativeImage;
    /**
     * Creates a new `NativeImage` instance from a file located at `path`. This method
     * returns an empty image if the `path` does not exist, cannot be read, or is not a
     * valid image.
     */
    static createFromPath(path: string): NativeImage;
    /**
     * fulfilled with the file's thumbnail preview image, which is a NativeImage.
     *
     * Note: The Windows implementation will ignore `size.height` and scale the height
     * according to `size.width`.
     *
     * @platform darwin,win32
     */
    static createThumbnailFromPath(path: string, size: Size): Promise<Electron.NativeImage>;
    /**
     * Add an image representation for a specific scale factor. This can be used to
     * programmatically add different scale factor representations to an image. This
     * can be called on empty images.
     */
    addRepresentation(options: AddRepresentationOptions): void;
    /**
     * The cropped image.
     */
    crop(rect: Rectangle): NativeImage;
    /**
     * The image's aspect ratio (width divided by height).
     *
     * If `scaleFactor` is passed, this will return the aspect ratio corresponding to
     * the image representation most closely matching the passed value.
     */
    getAspectRatio(scaleFactor?: number): number;
    /**
     * A Buffer that contains the image's raw bitmap pixel data.
     *
     * The difference between `getBitmap()` and `toBitmap()` is that `getBitmap()` does
     * not copy the bitmap data, so you have to use the returned Buffer immediately in
     * current event loop tick; otherwise the data might be changed or destroyed.
     */
    getBitmap(options?: BitmapOptions): Buffer;
    /**
     * A Buffer that stores C pointer to underlying native handle of the image. On
     * macOS, a pointer to `NSImage` instance is returned.
     *
     * Notice that the returned pointer is a weak pointer to the underlying native
     * image instead of a copy, so you _must_ ensure that the associated `nativeImage`
     * instance is kept around.
     *
     * @platform darwin
     */
    getNativeHandle(): Buffer;
    /**
     * An array of all scale factors corresponding to representations for a given
     * `NativeImage`.
     */
    getScaleFactors(): number[];
    /**
     * If `scaleFactor` is passed, this will return the size corresponding to the image
     * representation most closely matching the passed value.
     */
    getSize(scaleFactor?: number): Size;
    /**
     * Whether the image is empty.
     */
    isEmpty(): boolean;
    /**
     * Whether the image is a macOS template image.
     */
    isTemplateImage(): boolean;
    /**
     * The resized image.
     *
     * If only the `height` or the `width` are specified then the current aspect ratio
     * will be preserved in the resized image.
     */
    resize(options: ResizeOptions): NativeImage;
    /**
     * Marks the image as a macOS template image.
     */
    setTemplateImage(option: boolean): void;
    /**
     * A Buffer that contains a copy of the image's raw bitmap pixel data.
     */
    toBitmap(options?: ToBitmapOptions): Buffer;
    /**
     * The Data URL of the image.
     */
    toDataURL(options?: ToDataURLOptions): string;
    /**
     * A Buffer that contains the image's `JPEG` encoded data.
     */
    toJPEG(quality: number): Buffer;
    /**
     * A Buffer that contains the image's `PNG` encoded data.
     */
    toPNG(options?: ToPNGOptions): Buffer;
    /**
     * A `boolean` property that determines whether the image is considered a template
     * image.
     *
     * Please note that this property only has an effect on macOS.
     *
     * @platform darwin
     */
    isMacTemplateImage: boolean;
  }

  interface NativeTheme extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/native-theme

    /**
     * Emitted when something in the underlying NativeTheme has changed. This normally
     * means that either the value of `shouldUseDarkColors`,
     * `shouldUseHighContrastColors` or `shouldUseInvertedColorScheme` has changed. You
     * will have to check them to determine which one has changed.
     */
    on(event: 'updated', listener: Function): this;
    off(event: 'updated', listener: Function): this;
    once(event: 'updated', listener: Function): this;
    addListener(event: 'updated', listener: Function): this;
    removeListener(event: 'updated', listener: Function): this;
    /**
     * A `boolean` indicating whether Chromium is in forced colors mode, controlled by
     * system accessibility settings. Currently, Windows high contrast is the only
     * system setting that triggers forced colors mode.
     *
     * @platform win32
     */
    readonly inForcedColorsMode: boolean;
    /**
     * A `boolean` for if the OS / Chromium currently has a dark mode enabled or is
     * being instructed to show a dark-style UI.  If you want to modify this value you
     * should use `themeSource` below.
     *
     */
    readonly shouldUseDarkColors: boolean;
    /**
     * A `boolean` for if the OS / Chromium currently has high-contrast mode enabled or
     * is being instructed to show a high-contrast UI.
     *
     * @platform darwin,win32
     */
    readonly shouldUseHighContrastColors: boolean;
    /**
     * A `boolean` for if the OS / Chromium currently has an inverted color scheme or
     * is being instructed to use an inverted color scheme.
     *
     * @platform darwin,win32
     */
    readonly shouldUseInvertedColorScheme: boolean;
    /**
     * A `string` property that can be `system`, `light` or `dark`.  It is used to
     * override and supersede the value that Chromium has chosen to use internally.
     *
     * Setting this property to `system` will remove the override and everything will
     * be reset to the OS default.  By default `themeSource` is `system`.
     *
     * Settings this property to `dark` will have the following effects:
     *
     * * `nativeTheme.shouldUseDarkColors` will be `true` when accessed
     * * Any UI Electron renders on Linux and Windows including context menus,
     * devtools, etc. will use the dark UI.
     * * Any UI the OS renders on macOS including menus, window frames, etc. will use
     * the dark UI.
     * * The `prefers-color-scheme` CSS query will match `dark` mode.
     * * The `updated` event will be emitted
     *
     * Settings this property to `light` will have the following effects:
     *
     * * `nativeTheme.shouldUseDarkColors` will be `false` when accessed
     * * Any UI Electron renders on Linux and Windows including context menus,
     * devtools, etc. will use the light UI.
     * * Any UI the OS renders on macOS including menus, window frames, etc. will use
     * the light UI.
     * * The `prefers-color-scheme` CSS query will match `light` mode.
     * * The `updated` event will be emitted
     *
     * The usage of this property should align with a classic "dark mode" state machine
     * in your application where the user has three options.
     *
     * * `Follow OS` --> `themeSource = 'system'`
     * * `Dark Mode` --> `themeSource = 'dark'`
     * * `Light Mode` --> `themeSource = 'light'`
     *
     * Your application should then always use `shouldUseDarkColors` to determine what
     * CSS to apply.
     */
    themeSource: ('system' | 'light' | 'dark');
  }

  interface Net {

    // Docs: https://electronjs.org/docs/api/net

    /**
     * see Response.
     *
     * Sends a request, similarly to how `fetch()` works in the renderer, using
     * Chrome's network stack. This differs from Node's `fetch()`, which uses Node.js's
     * HTTP stack.
     *
     * Example:
     *
     * This method will issue requests from the default session. To send a `fetch`
     * request from another session, use ses.fetch().
     *
     * See the MDN documentation for `fetch()` for more details.
     *
     * Limitations:
     *
     * * `net.fetch()` does not support the `data:` or `blob:` schemes.
     * * The value of the `integrity` option is ignored.
     * * The `.type` and `.url` values of the returned `Response` object are incorrect.
     *
     * By default, requests made with `net.fetch` can be made to custom protocols as
     * well as `file:`, and will trigger webRequest handlers if present. When the
     * non-standard `bypassCustomProtocolHandlers` option is set in RequestInit, custom
     * protocol handlers will not be called for this request. This allows forwarding an
     * intercepted request to the built-in handler. webRequest handlers will still be
     * triggered when bypassing custom protocols.
     *
     * Note: in the utility process custom protocols are not supported.
     */
    fetch(input: (string) | (GlobalRequest), init?: RequestInit & { bypassCustomProtocolHandlers?: boolean }): Promise<GlobalResponse>;
    /**
     * Whether there is currently internet connection.
     *
     * A return value of `false` is a pretty strong indicator that the user won't be
     * able to connect to remote sites. However, a return value of `true` is
     * inconclusive; even if some link is up, it is uncertain whether a particular
     * connection attempt to a particular remote site will be successful.
     */
    isOnline(): boolean;
    /**
     * Creates a `ClientRequest` instance using the provided `options` which are
     * directly forwarded to the `ClientRequest` constructor. The `net.request` method
     * would be used to issue both secure and insecure HTTP requests according to the
     * specified protocol scheme in the `options` object.
     */
    request(options: (ClientRequestConstructorOptions) | (string)): ClientRequest;
    /**
     * Resolves with the resolved IP addresses for the `host`.
     *
     * This method will resolve hosts from the default session. To resolve a host from
     * another session, use ses.resolveHost().
     */
    resolveHost(host: string, options?: ResolveHostOptions): Promise<Electron.ResolvedHost>;
    /**
     * A `boolean` property. Whether there is currently internet connection.
     *
     * A return value of `false` is a pretty strong indicator that the user won't be
     * able to connect to remote sites. However, a return value of `true` is
     * inconclusive; even if some link is up, it is uncertain whether a particular
     * connection attempt to a particular remote site will be successful.
     *
     */
    readonly online: boolean;
  }

  interface NetLog {

    // Docs: https://electronjs.org/docs/api/net-log

    /**
     * resolves when the net log has begun recording.
     *
     * Starts recording network events to `path`.
     */
    startLogging(path: string, options?: StartLoggingOptions): Promise<void>;
    /**
     * resolves when the net log has been flushed to disk.
     *
     * Stops recording network events. If not called, net logging will automatically
     * end when app quits.
     */
    stopLogging(): Promise<void>;
    /**
     * A `boolean` property that indicates whether network logs are currently being
     * recorded.
     *
     */
    readonly currentlyLogging: boolean;
  }

  class Notification extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/notification

    /**
     * @platform darwin
     */
    on(event: 'action', listener: (event: Event,
                                   /**
                                    * The index of the action that was activated.
                                    */
                                   index: number) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'action', listener: (event: Event,
                                   /**
                                    * The index of the action that was activated.
                                    */
                                   index: number) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'action', listener: (event: Event,
                                   /**
                                    * The index of the action that was activated.
                                    */
                                   index: number) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'action', listener: (event: Event,
                                   /**
                                    * The index of the action that was activated.
                                    */
                                   index: number) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'action', listener: (event: Event,
                                   /**
                                    * The index of the action that was activated.
                                    */
                                   index: number) => void): this;
    /**
     * Emitted when the notification is clicked by the user.
     */
    on(event: 'click', listener: (event: Event) => void): this;
    off(event: 'click', listener: (event: Event) => void): this;
    once(event: 'click', listener: (event: Event) => void): this;
    addListener(event: 'click', listener: (event: Event) => void): this;
    removeListener(event: 'click', listener: (event: Event) => void): this;
    /**
     * Emitted when the notification is closed by manual intervention from the user.
     *
     * This event is not guaranteed to be emitted in all cases where the notification
     * is closed.
     *
     * On Windows, the `close` event can be emitted in one of three ways: programmatic
     * dismissal with `notification.close()`, by the user closing the notification, or
     * via system timeout. If a notification is in the Action Center after the initial
     * `close` event is emitted, a call to `notification.close()` will remove the
     * notification from the action center but the `close` event will not be emitted
     * again.
     */
    on(event: 'close', listener: (event: Event) => void): this;
    off(event: 'close', listener: (event: Event) => void): this;
    once(event: 'close', listener: (event: Event) => void): this;
    addListener(event: 'close', listener: (event: Event) => void): this;
    removeListener(event: 'close', listener: (event: Event) => void): this;
    /**
     * Emitted when an error is encountered while creating and showing the native
     * notification.
     *
     * @platform win32
     */
    on(event: 'failed', listener: (event: Event,
                                   /**
                                    * The error encountered during execution of the `show()` method.
                                    */
                                   error: string) => void): this;
    /**
     * @platform win32
     */
    off(event: 'failed', listener: (event: Event,
                                   /**
                                    * The error encountered during execution of the `show()` method.
                                    */
                                   error: string) => void): this;
    /**
     * @platform win32
     */
    once(event: 'failed', listener: (event: Event,
                                   /**
                                    * The error encountered during execution of the `show()` method.
                                    */
                                   error: string) => void): this;
    /**
     * @platform win32
     */
    addListener(event: 'failed', listener: (event: Event,
                                   /**
                                    * The error encountered during execution of the `show()` method.
                                    */
                                   error: string) => void): this;
    /**
     * @platform win32
     */
    removeListener(event: 'failed', listener: (event: Event,
                                   /**
                                    * The error encountered during execution of the `show()` method.
                                    */
                                   error: string) => void): this;
    /**
     * Emitted when the user clicks the "Reply" button on a notification with
     * `hasReply: true`.
     *
     * @platform darwin
     */
    on(event: 'reply', listener: (event: Event,
                                  /**
                                   * The string the user entered into the inline reply field.
                                   */
                                  reply: string) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'reply', listener: (event: Event,
                                  /**
                                   * The string the user entered into the inline reply field.
                                   */
                                  reply: string) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'reply', listener: (event: Event,
                                  /**
                                   * The string the user entered into the inline reply field.
                                   */
                                  reply: string) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'reply', listener: (event: Event,
                                  /**
                                   * The string the user entered into the inline reply field.
                                   */
                                  reply: string) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'reply', listener: (event: Event,
                                  /**
                                   * The string the user entered into the inline reply field.
                                   */
                                  reply: string) => void): this;
    /**
     * Emitted when the notification is shown to the user. Note that this event can be
     * fired multiple times as a notification can be shown multiple times through the
     * `show()` method.
     */
    on(event: 'show', listener: (event: Event) => void): this;
    off(event: 'show', listener: (event: Event) => void): this;
    once(event: 'show', listener: (event: Event) => void): this;
    addListener(event: 'show', listener: (event: Event) => void): this;
    removeListener(event: 'show', listener: (event: Event) => void): this;
    /**
     * Notification
     */
    constructor(options?: NotificationConstructorOptions);
    /**
     * Whether or not desktop notifications are supported on the current system
     */
    static isSupported(): boolean;
    /**
     * Dismisses the notification.
     *
     * On Windows, calling `notification.close()` while the notification is visible on
     * screen will dismiss the notification and remove it from the Action Center. If
     * `notification.close()` is called after the notification is no longer visible on
     * screen, calling `notification.close()` will try remove it from the Action
     * Center.
     */
    close(): void;
    /**
     * Immediately shows the notification to the user. Unlike the web notification API,
     * instantiating a `new Notification()` does not immediately show it to the user.
     * Instead, you need to call this method before the OS will display it.
     *
     * If the notification has been shown before, this method will dismiss the
     * previously shown notification and create a new one with identical properties.
     */
    show(): void;
    /**
     * A `NotificationAction[]` property representing the actions of the notification.
     */
    actions: NotificationAction[];
    /**
     * A `string` property representing the body of the notification.
     */
    body: string;
    /**
     * A `string` property representing the close button text of the notification.
     */
    closeButtonText: string;
    /**
     * A `boolean` property representing whether the notification has a reply action.
     */
    hasReply: boolean;
    /**
     * A `string` property representing the reply placeholder of the notification.
     */
    replyPlaceholder: string;
    /**
     * A `boolean` property representing whether the notification is silent.
     */
    silent: boolean;
    /**
     * A `string` property representing the sound of the notification.
     */
    sound: string;
    /**
     * A `string` property representing the subtitle of the notification.
     */
    subtitle: string;
    /**
     * A `string` property representing the type of timeout duration for the
     * notification. Can be 'default' or 'never'.
     *
     * If `timeoutType` is set to 'never', the notification never expires. It stays
     * open until closed by the calling API or the user.
     *
     * @platform linux,win32
     */
    timeoutType: ('default' | 'never');
    /**
     * A `string` property representing the title of the notification.
     */
    title: string;
    /**
     * A `string` property representing the custom Toast XML of the notification.
     *
     * @platform win32
     */
    toastXml: string;
    /**
     * A `string` property representing the urgency level of the notification. Can be
     * 'normal', 'critical', or 'low'.
     *
     * Default is 'low' - see NotifyUrgency for more information.
     *
     * @platform linux
     */
    urgency: ('normal' | 'critical' | 'low');
  }

  interface NotificationAction {

    // Docs: https://electronjs.org/docs/api/structures/notification-action

    /**
     * The label for the given action.
     */
    text?: string;
    /**
     * The type of action, can be `button`.
     */
    type: ('button');
  }

  interface NotificationResponse {

    // Docs: https://electronjs.org/docs/api/structures/notification-response

    /**
     * The identifier string of the action that the user selected.
     */
    actionIdentifier: string;
    /**
     * The delivery date of the notification.
     */
    date: number;
    /**
     * The unique identifier for this notification request.
     */
    identifier: string;
    /**
     * A dictionary of custom information associated with the notification.
     */
    userInfo: Record<string, any>;
    /**
     * The text entered or chosen by the user.
     */
    userText?: string;
  }

  interface ParentPort extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/parent-port

    /**
     * Emitted when the process receives a message. Messages received on this port will
     * be queued up until a handler is registered for this event.
     */
    on(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    off(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    once(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    addListener(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    removeListener(event: 'message', listener: (messageEvent: MessageEvent) => void): this;
    /**
     * Sends a message from the process to its parent.
     */
    postMessage(message: any): void;
  }

  interface PaymentDiscount {

    // Docs: https://electronjs.org/docs/api/structures/payment-discount

    /**
     * A string used to uniquely identify a discount offer for a product.
     */
    identifier: string;
    /**
     * A string that identifies the key used to generate the signature.
     */
    keyIdentifier: string;
    /**
     * A universally unique ID (UUID) value that you define.
     */
    nonce: string;
    /**
     * A UTF-8 string representing the properties of a specific discount offer,
     * cryptographically signed.
     */
    signature: string;
    /**
     * The date and time of the signature's creation in milliseconds, formatted in Unix
     * epoch time.
     */
    timestamp: number;
  }

  interface Point {

    // Docs: https://electronjs.org/docs/api/structures/point

    x: number;
    y: number;
  }

  interface PostBody {

    // Docs: https://electronjs.org/docs/api/structures/post-body

    /**
     * The boundary used to separate multiple parts of the message. Only valid when
     * `contentType` is `multipart/form-data`.
     */
    boundary?: string;
    /**
     * The `content-type` header used for the data. One of
     * `application/x-www-form-urlencoded` or `multipart/form-data`. Corresponds to the
     * `enctype` attribute of the submitted HTML form.
     */
    contentType: string;
    /**
     * The post data to be sent to the new window.
     */
    data: Array<(UploadRawData) | (UploadFile)>;
  }

  interface PowerMonitor extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/power-monitor

    /**
     * Emitted when the system is about to lock the screen.
     *
     * @platform darwin,win32
     */
    on(event: 'lock-screen', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'lock-screen', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'lock-screen', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'lock-screen', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'lock-screen', listener: Function): this;
    /**
     * Emitted when the system changes to AC power.
     *
     * @platform darwin,win32
     */
    on(event: 'on-ac', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'on-ac', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'on-ac', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'on-ac', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'on-ac', listener: Function): this;
    /**
     * Emitted when system changes to battery power.
     *
     * @platform darwin
     */
    on(event: 'on-battery', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'on-battery', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'on-battery', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'on-battery', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'on-battery', listener: Function): this;
    /**
     * Emitted when system is resuming.
     */
    on(event: 'resume', listener: Function): this;
    off(event: 'resume', listener: Function): this;
    once(event: 'resume', listener: Function): this;
    addListener(event: 'resume', listener: Function): this;
    removeListener(event: 'resume', listener: Function): this;
    /**
     * Emitted when the system is about to reboot or shut down. If the event handler
     * invokes `e.preventDefault()`, Electron will attempt to delay system shutdown in
     * order for the app to exit cleanly. If `e.preventDefault()` is called, the app
     * should exit as soon as possible by calling something like `app.quit()`.
     *
     * @platform linux,darwin
     */
    on(event: 'shutdown', listener: Function): this;
    /**
     * @platform linux,darwin
     */
    off(event: 'shutdown', listener: Function): this;
    /**
     * @platform linux,darwin
     */
    once(event: 'shutdown', listener: Function): this;
    /**
     * @platform linux,darwin
     */
    addListener(event: 'shutdown', listener: Function): this;
    /**
     * @platform linux,darwin
     */
    removeListener(event: 'shutdown', listener: Function): this;
    /**
     * Notification of a change in the operating system's advertised speed limit for
     * CPUs, in percent. Values below 100 indicate that the system is impairing
     * processing power due to thermal management.
     *
     * @platform darwin,win32
     */
    on(event: 'speed-limit-change', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'speed-limit-change', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'speed-limit-change', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'speed-limit-change', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'speed-limit-change', listener: Function): this;
    /**
     * Emitted when the system is suspending.
     */
    on(event: 'suspend', listener: Function): this;
    off(event: 'suspend', listener: Function): this;
    once(event: 'suspend', listener: Function): this;
    addListener(event: 'suspend', listener: Function): this;
    removeListener(event: 'suspend', listener: Function): this;
    /**
     * Emitted when the thermal state of the system changes. Notification of a change
     * in the thermal status of the system, such as entering a critical temperature
     * range. Depending on the severity, the system might take steps to reduce said
     * temperature, for example, throttling the CPU or switching on the fans if
     * available.
     *
     * Apps may react to the new state by reducing expensive computing tasks (e.g.
     * video encoding), or notifying the user. The same state might be received
     * repeatedly.
     *
     * See
     * https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/RespondToThermalStateChanges.html
     *
     * @platform darwin
     */
    on(event: 'thermal-state-change', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'thermal-state-change', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'thermal-state-change', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'thermal-state-change', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'thermal-state-change', listener: Function): this;
    /**
     * Emitted as soon as the systems screen is unlocked.
     *
     * @platform darwin,win32
     */
    on(event: 'unlock-screen', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'unlock-screen', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'unlock-screen', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'unlock-screen', listener: Function): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'unlock-screen', listener: Function): this;
    /**
     * Emitted when a login session is activated. See documentation for more
     * information.
     *
     * @platform darwin
     */
    on(event: 'user-did-become-active', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'user-did-become-active', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'user-did-become-active', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'user-did-become-active', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'user-did-become-active', listener: Function): this;
    /**
     * Emitted when a login session is deactivated. See documentation for more
     * information.
     *
     * @platform darwin
     */
    on(event: 'user-did-resign-active', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'user-did-resign-active', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'user-did-resign-active', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'user-did-resign-active', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'user-did-resign-active', listener: Function): this;
    /**
     * The system's current thermal state. Can be `unknown`, `nominal`, `fair`,
     * `serious`, or `critical`.
     *
     * @platform darwin
     */
    getCurrentThermalState(): ('unknown' | 'nominal' | 'fair' | 'serious' | 'critical');
    /**
     * The system's current idle state. Can be `active`, `idle`, `locked` or `unknown`.
     *
     * Calculate the system idle state. `idleThreshold` is the amount of time (in
     * seconds) before considered idle.  `locked` is available on supported systems
     * only.
     */
    getSystemIdleState(idleThreshold: number): ('active' | 'idle' | 'locked' | 'unknown');
    /**
     * Idle time in seconds
     *
     * Calculate system idle time in seconds.
     */
    getSystemIdleTime(): number;
    /**
     * Whether the system is on battery power.
     *
     * To monitor for changes in this property, use the `on-battery` and `on-ac`
     * events.
     */
    isOnBatteryPower(): boolean;
    /**
     * A `boolean` property. True if the system is on battery power.
     *
     * See `powerMonitor.isOnBatteryPower()`.
     */
    onBatteryPower: boolean;
  }

  interface PowerSaveBlocker {

    // Docs: https://electronjs.org/docs/api/power-save-blocker

    /**
     * Whether the corresponding `powerSaveBlocker` has started.
     */
    isStarted(id: number): boolean;
    /**
     * The blocker ID that is assigned to this power blocker.
     *
     * Starts preventing the system from entering lower-power mode. Returns an integer
     * identifying the power save blocker.
     *
     * **Note:** `prevent-display-sleep` has higher precedence over
     * `prevent-app-suspension`. Only the highest precedence type takes effect. In
     * other words, `prevent-display-sleep` always takes precedence over
     * `prevent-app-suspension`.
     *
     * For example, an API calling A requests for `prevent-app-suspension`, and another
     * calling B requests for `prevent-display-sleep`. `prevent-display-sleep` will be
     * used until B stops its request. After that, `prevent-app-suspension` is used.
     */
    start(type: 'prevent-app-suspension' | 'prevent-display-sleep'): number;
    /**
     * Stops the specified power save blocker.
     *
     * Whether the specified `powerSaveBlocker` has been stopped.
     */
    stop(id: number): boolean;
  }

  interface PrinterInfo {

    // Docs: https://electronjs.org/docs/api/structures/printer-info

    /**
     * a longer description of the printer's type.
     */
    description: string;
    /**
     * the name of the printer as shown in Print Preview.
     */
    displayName: string;
    /**
     * whether or not a given printer is set as the default printer on the OS.
     */
    isDefault: boolean;
    /**
     * the name of the printer as understood by the OS.
     */
    name: string;
    /**
     * an object containing a variable number of platform-specific printer information.
     */
    options: Options;
    /**
     * the current status of the printer.
     */
    status: number;
  }

  interface ProcessMemoryInfo {

    // Docs: https://electronjs.org/docs/api/structures/process-memory-info

    /**
     * The amount of memory not shared by other processes, such as JS heap or HTML
     * content in Kilobytes.
     */
    private: number;
    /**
     * The amount of memory currently pinned to actual physical RAM in Kilobytes.
     *
     * @platform linux,win32
     */
    residentSet: number;
    /**
     * The amount of memory shared between processes, typically memory consumed by the
     * Electron code itself in Kilobytes.
     */
    shared: number;
  }

  interface ProcessMetric {

    // Docs: https://electronjs.org/docs/api/structures/process-metric

    /**
     * CPU usage of the process.
     */
    cpu: CPUUsage;
    /**
     * Creation time for this process. The time is represented as number of
     * milliseconds since epoch. Since the `pid` can be reused after a process dies, it
     * is useful to use both the `pid` and the `creationTime` to uniquely identify a
     * process.
     */
    creationTime: number;
    /**
     * One of the following values:
     *
     * @platform win32
     */
    integrityLevel?: ('untrusted' | 'low' | 'medium' | 'high' | 'unknown');
    /**
     * Memory information for the process.
     */
    memory: MemoryInfo;
    /**
     * The name of the process. Examples for utility: `Audio Service`, `Content
     * Decryption Module Service`, `Network Service`, `Video Capture`, etc.
     */
    name?: string;
    /**
     * Process id of the process.
     */
    pid: number;
    /**
     * Whether the process is sandboxed on OS level.
     *
     * @platform darwin,win32
     */
    sandboxed?: boolean;
    /**
     * The non-localized name of the process.
     */
    serviceName?: string;
    /**
     * Process type. One of the following values:
     */
    type: ('Browser' | 'Tab' | 'Utility' | 'Zygote' | 'Sandbox helper' | 'GPU' | 'Pepper Plugin' | 'Pepper Plugin Broker' | 'Unknown');
  }

  interface Product {

    // Docs: https://electronjs.org/docs/api/structures/product

    /**
     * 3 character code presenting a product's currency based on the ISO 4217 standard.
     */
    currencyCode: string;
    /**
     * An array of discount offers
     */
    discounts: ProductDiscount[];
    /**
     * The total size of the content, in bytes.
     */
    downloadContentLengths: number[];
    /**
     * A string that identifies the version of the content.
     */
    downloadContentVersion: string;
    /**
     * The locale formatted price of the product.
     */
    formattedPrice: string;
    /**
     * The object containing introductory price information for the product. available
     * for the product.
     */
    introductoryPrice?: ProductDiscount;
    /**
     * A boolean value that indicates whether the App Store has downloadable content
     * for this product. `true` if at least one file has been associated with the
     * product.
     */
    isDownloadable: boolean;
    /**
     * A description of the product.
     */
    localizedDescription: string;
    /**
     * The name of the product.
     */
    localizedTitle: string;
    /**
     * The cost of the product in the local currency.
     */
    price: number;
    /**
     * The string that identifies the product to the Apple App Store.
     */
    productIdentifier: string;
    /**
     * The identifier of the subscription group to which the subscription belongs.
     */
    subscriptionGroupIdentifier: string;
    /**
     * The period details for products that are subscriptions.
     */
    subscriptionPeriod?: ProductSubscriptionPeriod;
  }

  interface ProductDiscount {

    // Docs: https://electronjs.org/docs/api/structures/product-discount

    /**
     * A string used to uniquely identify a discount offer for a product.
     */
    identifier: string;
    /**
     * An integer that indicates the number of periods the product discount is
     * available.
     */
    numberOfPeriods: number;
    /**
     * The payment mode for this product discount. Can be `payAsYouGo`, `payUpFront`,
     * or `freeTrial`.
     */
    paymentMode: ('payAsYouGo' | 'payUpFront' | 'freeTrial');
    /**
     * The discount price of the product in the local currency.
     */
    price: number;
    /**
     * The locale used to format the discount price of the product.
     */
    priceLocale: string;
    /**
     * An object that defines the period for the product discount.
     */
    subscriptionPeriod?: ProductSubscriptionPeriod;
    /**
     * The type of discount offer.
     */
    type: number;
  }

  interface ProductSubscriptionPeriod {

    // Docs: https://electronjs.org/docs/api/structures/product-subscription-period

    /**
     * The number of units per subscription period.
     */
    numberOfUnits: number;
    /**
     * The increment of time that a subscription period is specified in. Can be `day`,
     * `week`, `month`, `year`.
     */
    unit: ('day' | 'week' | 'month' | 'year');
  }

  interface Protocol {

    // Docs: https://electronjs.org/docs/api/protocol

    /**
     * Register a protocol handler for `scheme`. Requests made to URLs with this scheme
     * will delegate to this handler to determine what response should be sent.
     *
     * Either a `Response` or a `Promise<Response>` can be returned.
     *
     * Example:
     *
     * See the MDN docs for `Request` and `Response` for more details.
     */
    handle(scheme: string, handler: (request: GlobalRequest) => (GlobalResponse) | (Promise<GlobalResponse>)): void;
    /**
     * Whether the protocol was successfully intercepted
     *
     * Intercepts `scheme` protocol and uses `handler` as the protocol's new handler
     * which sends a `Buffer` as a response.
     *
     * @deprecated
     */
    interceptBufferProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: (Buffer) | (ProtocolResponse)) => void) => void): boolean;
    /**
     * Whether the protocol was successfully intercepted
     *
     * Intercepts `scheme` protocol and uses `handler` as the protocol's new handler
     * which sends a file as a response.
     *
     * @deprecated
     */
    interceptFileProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: (string) | (ProtocolResponse)) => void) => void): boolean;
    /**
     * Whether the protocol was successfully intercepted
     *
     * Intercepts `scheme` protocol and uses `handler` as the protocol's new handler
     * which sends a new HTTP request as a response.
     *
     * @deprecated
     */
    interceptHttpProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: ProtocolResponse) => void) => void): boolean;
    /**
     * Whether the protocol was successfully intercepted
     *
     * Same as `protocol.registerStreamProtocol`, except that it replaces an existing
     * protocol handler.
     *
     * @deprecated
     */
    interceptStreamProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: (NodeJS.ReadableStream) | (ProtocolResponse)) => void) => void): boolean;
    /**
     * Whether the protocol was successfully intercepted
     *
     * Intercepts `scheme` protocol and uses `handler` as the protocol's new handler
     * which sends a `string` as a response.
     *
     * @deprecated
     */
    interceptStringProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: (string) | (ProtocolResponse)) => void) => void): boolean;
    /**
     * Whether `scheme` is already handled.
     */
    isProtocolHandled(scheme: string): boolean;
    /**
     * Whether `scheme` is already intercepted.
     *
     * @deprecated
     */
    isProtocolIntercepted(scheme: string): boolean;
    /**
     * Whether `scheme` is already registered.
     *
     * @deprecated
     */
    isProtocolRegistered(scheme: string): boolean;
    /**
     * Whether the protocol was successfully registered
     *
     * Registers a protocol of `scheme` that will send a `Buffer` as a response.
     *
     * The usage is the same with `registerFileProtocol`, except that the `callback`
     * should be called with either a `Buffer` object or an object that has the `data`
     * property.
     *
     * Example:
     *
     * @deprecated
     */
    registerBufferProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: (Buffer) | (ProtocolResponse)) => void) => void): boolean;
    /**
     * Whether the protocol was successfully registered
     *
     * Registers a protocol of `scheme` that will send a file as the response. The
     * `handler` will be called with `request` and `callback` where `request` is an
     * incoming request for the `scheme`.
     *
     * To handle the `request`, the `callback` should be called with either the file's
     * path or an object that has a `path` property, e.g. `callback(filePath)` or
     * `callback({ path: filePath })`. The `filePath` must be an absolute path.
     *
     * By default the `scheme` is treated like `http:`, which is parsed differently
     * from protocols that follow the "generic URI syntax" like `file:`.
     *
     * @deprecated
     */
    registerFileProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: (string) | (ProtocolResponse)) => void) => void): boolean;
    /**
     * Whether the protocol was successfully registered
     *
     * Registers a protocol of `scheme` that will send an HTTP request as a response.
     *
     * The usage is the same with `registerFileProtocol`, except that the `callback`
     * should be called with an object that has the `url` property.
     *
     * @deprecated
     */
    registerHttpProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: ProtocolResponse) => void) => void): boolean;
    /**
     * **Note:** This method can only be used before the `ready` event of the `app`
     * module gets emitted and can be called only once.
     *
     * Registers the `scheme` as standard, secure, bypasses content security policy for
     * resources, allows registering ServiceWorker, supports fetch API, streaming
     * video/audio, and V8 code cache. Specify a privilege with the value of `true` to
     * enable the capability.
     *
     * An example of registering a privileged scheme, that bypasses Content Security
     * Policy:
     *
     * A standard scheme adheres to what RFC 3986 calls generic URI syntax. For example
     * `http` and `https` are standard schemes, while `file` is not.
     *
     * Registering a scheme as standard allows relative and absolute resources to be
     * resolved correctly when served. Otherwise the scheme will behave like the `file`
     * protocol, but without the ability to resolve relative URLs.
     *
     * For example when you load following page with custom protocol without
     * registering it as standard scheme, the image will not be loaded because
     * non-standard schemes can not recognize relative URLs:
     *
     * Registering a scheme as standard will allow access to files through the
     * FileSystem API. Otherwise the renderer will throw a security error for the
     * scheme.
     *
     * By default web storage apis (localStorage, sessionStorage, webSQL, indexedDB,
     * cookies) are disabled for non standard schemes. So in general if you want to
     * register a custom protocol to replace the `http` protocol, you have to register
     * it as a standard scheme.
     *
     * Protocols that use streams (http and stream protocols) should set `stream:
     * true`. The `<video>` and `<audio>` HTML elements expect protocols to buffer
     * their responses by default. The `stream` flag configures those elements to
     * correctly expect streaming responses.
     */
    registerSchemesAsPrivileged(customSchemes: CustomScheme[]): void;
    /**
     * Whether the protocol was successfully registered
     *
     * Registers a protocol of `scheme` that will send a stream as a response.
     *
     * The usage is the same with `registerFileProtocol`, except that the `callback`
     * should be called with either a `ReadableStream` object or an object that has the
     * `data` property.
     *
     * Example:
     *
     * It is possible to pass any object that implements the readable stream API (emits
     * `data`/`end`/`error` events). For example, here's how a file could be returned:
     *
     * @deprecated
     */
    registerStreamProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: (NodeJS.ReadableStream) | (ProtocolResponse)) => void) => void): boolean;
    /**
     * Whether the protocol was successfully registered
     *
     * Registers a protocol of `scheme` that will send a `string` as a response.
     *
     * The usage is the same with `registerFileProtocol`, except that the `callback`
     * should be called with either a `string` or an object that has the `data`
     * property.
     *
     * @deprecated
     */
    registerStringProtocol(scheme: string, handler: (request: ProtocolRequest, callback: (response: (string) | (ProtocolResponse)) => void) => void): boolean;
    /**
     * Removes a protocol handler registered with `protocol.handle`.
     */
    unhandle(scheme: string): void;
    /**
     * Whether the protocol was successfully unintercepted
     *
     * Remove the interceptor installed for `scheme` and restore its original handler.
     *
     * @deprecated
     */
    uninterceptProtocol(scheme: string): boolean;
    /**
     * Whether the protocol was successfully unregistered
     *
     * Unregisters the custom protocol of `scheme`.
     *
     * @deprecated
     */
    unregisterProtocol(scheme: string): boolean;
  }

  interface ProtocolRequest {

    // Docs: https://electronjs.org/docs/api/structures/protocol-request

    headers: Record<string, string>;
    method: string;
    referrer: string;
    uploadData?: UploadData[];
    url: string;
  }

  interface ProtocolResponse {

    // Docs: https://electronjs.org/docs/api/structures/protocol-response

    /**
     * The charset of response body, default is `"utf-8"`.
     */
    charset?: string;
    /**
     * The response body. When returning stream as response, this is a Node.js readable
     * stream representing the response body. When returning `Buffer` as response, this
     * is a `Buffer`. When returning `string` as response, this is a `string`. This is
     * ignored for other types of responses.
     */
    data?: (Buffer) | (string) | (NodeJS.ReadableStream);
    /**
     * When assigned, the `request` will fail with the `error` number . For the
     * available error numbers you can use, please see the net error list.
     */
    error?: number;
    /**
     * An object containing the response headers. The keys must be string, and values
     * must be either string or Array of string.
     */
    headers?: Record<string, (string) | (string[])>;
    /**
     * The HTTP `method`. This is only used for file and URL responses.
     */
    method?: string;
    /**
     * The MIME type of response body, default is `"text/html"`. Setting `mimeType`
     * would implicitly set the `content-type` header in response, but if
     * `content-type` is already set in `headers`, the `mimeType` would be ignored.
     */
    mimeType?: string;
    /**
     * Path to the file which would be sent as response body. This is only used for
     * file responses.
     */
    path?: string;
    /**
     * The `referrer` URL. This is only used for file and URL responses.
     */
    referrer?: string;
    /**
     * The session used for requesting URL, by default the HTTP request will reuse the
     * current session. Setting `session` to `null` would use a random independent
     * session. This is only used for URL responses.
     */
    session?: Session;
    /**
     * The HTTP response code, default is 200.
     */
    statusCode?: number;
    /**
     * The data used as upload data. This is only used for URL responses when `method`
     * is `"POST"`.
     */
    uploadData?: ProtocolResponseUploadData;
    /**
     * Download the `url` and pipe the result as response body. This is only used for
     * URL responses.
     */
    url?: string;
  }

  interface ProtocolResponseUploadData {

    // Docs: https://electronjs.org/docs/api/structures/protocol-response-upload-data

    /**
     * MIME type of the content.
     */
    contentType: string;
    /**
     * Content to be sent.
     */
    data: (string) | (Buffer);
  }

  interface ProxyConfig {

    // Docs: https://electronjs.org/docs/api/structures/proxy-config

    /**
     * The proxy mode. Should be one of `direct`, `auto_detect`, `pac_script`,
     * `fixed_servers` or `system`. Defaults to `pac_script` proxy mode if `pacScript`
     * option is specified otherwise defaults to `fixed_servers`.
     */
    mode?: ('direct' | 'auto_detect' | 'pac_script' | 'fixed_servers' | 'system');
    /**
     * The URL associated with the PAC file.
     */
    pacScript?: string;
    /**
     * Rules indicating which URLs should bypass the proxy settings.
     */
    proxyBypassRules?: string;
    /**
     * Rules indicating which proxies to use.
     */
    proxyRules?: string;
  }

  interface PushNotifications extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/push-notifications

    /**
     * Emitted when the app receives a remote notification while running. See:
     * https://developer.apple.com/documentation/appkit/nsapplicationdelegate/1428430-application?language=objc
     *
     * @platform darwin
     */
    on(event: 'received-apns-notification', listener: (event: Event,
                                                       userInfo: Record<string, any>) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'received-apns-notification', listener: (event: Event,
                                                       userInfo: Record<string, any>) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'received-apns-notification', listener: (event: Event,
                                                       userInfo: Record<string, any>) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'received-apns-notification', listener: (event: Event,
                                                       userInfo: Record<string, any>) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'received-apns-notification', listener: (event: Event,
                                                       userInfo: Record<string, any>) => void): this;
    /**
     * Registers the app with Apple Push Notification service (APNS) to receive Badge,
     * Sound, and Alert notifications. If registration is successful, the promise will
     * be resolved with the APNS device token. Otherwise, the promise will be rejected
     * with an error message. See:
     * https://developer.apple.com/documentation/appkit/nsapplication/1428476-registerforremotenotificationtyp?language=objc
     *
     * @platform darwin
     */
    registerForAPNSNotifications(): Promise<string>;
    /**
     * Unregisters the app from notifications received from APNS. See:
     * https://developer.apple.com/documentation/appkit/nsapplication/1428747-unregisterforremotenotifications?language=objc
     *
     * @platform darwin
     */
    unregisterForAPNSNotifications(): void;
  }

  interface Rectangle {

    // Docs: https://electronjs.org/docs/api/structures/rectangle

    /**
     * The height of the rectangle (must be an integer).
     */
    height: number;
    /**
     * The width of the rectangle (must be an integer).
     */
    width: number;
    /**
     * The x coordinate of the origin of the rectangle (must be an integer).
     */
    x: number;
    /**
     * The y coordinate of the origin of the rectangle (must be an integer).
     */
    y: number;
  }

  interface Referrer {

    // Docs: https://electronjs.org/docs/api/structures/referrer

    /**
     * Can be `default`, `unsafe-url`, `no-referrer-when-downgrade`, `no-referrer`,
     * `origin`, `strict-origin-when-cross-origin`, `same-origin` or `strict-origin`.
     * See the Referrer-Policy spec for more details on the meaning of these values.
     */
    policy: ('default' | 'unsafe-url' | 'no-referrer-when-downgrade' | 'no-referrer' | 'origin' | 'strict-origin-when-cross-origin' | 'same-origin' | 'strict-origin');
    /**
     * HTTP Referrer URL.
     */
    url: string;
  }

  interface RenderProcessGoneDetails {

    // Docs: https://electronjs.org/docs/api/structures/render-process-gone-details

    /**
     * The exit code of the process, unless `reason` is `launch-failed`, in which case
     * `exitCode` will be a platform-specific launch failure error code.
     */
    exitCode: number;
    /**
     * The reason the render process is gone.  Possible values:
     */
    reason: ('clean-exit' | 'abnormal-exit' | 'killed' | 'crashed' | 'oom' | 'launch-failed' | 'integrity-failure');
  }

  interface ResolvedEndpoint {

    // Docs: https://electronjs.org/docs/api/structures/resolved-endpoint

    address: string;
    /**
     * One of the following:
     */
    family: ('ipv4' | 'ipv6' | 'unspec');
  }

  interface ResolvedHost {

    // Docs: https://electronjs.org/docs/api/structures/resolved-host

    /**
     * resolved DNS entries for the hostname
     */
    endpoints: ResolvedEndpoint[];
  }

  interface SafeStorage extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/safe-storage

    /**
     * the decrypted string. Decrypts the encrypted buffer obtained  with
     * `safeStorage.encryptString` back into a string.
     *
     * This function will throw an error if decryption fails.
     */
    decryptString(encrypted: Buffer): string;
    /**
     * An array of bytes representing the encrypted string.
     *
     * This function will throw an error if encryption fails.
     */
    encryptString(plainText: string): Buffer;
    /**
     * User friendly name of the password manager selected on Linux.
     *
     * This function will return one of the following values:
     *
     * * `basic_text` - When the desktop environment is not recognised or if the
     * following command line flag is provided `--password-store="basic"`.
     * * `gnome_libsecret` - When the desktop environment is `X-Cinnamon`, `Deepin`,
     * `GNOME`, `Pantheon`, `XFCE`, `UKUI`, `unity` or if the following command line
     * flag is provided `--password-store="gnome-libsecret"`.
     * * `kwallet` - When the desktop session is `kde4` or if the following command
     * line flag is provided `--password-store="kwallet"`.
     * * `kwallet5` - When the desktop session is `kde5` or if the following command
     * line flag is provided `--password-store="kwallet5"`.
     * * `kwallet6` - When the desktop session is `kde6`.
     * * `unknown` - When the function is called before app has emitted the `ready`
     * event.
     *
     * @platform linux
     */
    getSelectedStorageBackend(): ('basic_text' | 'gnome_libsecret' | 'kwallet' | 'kwallet5' | 'kwallet6' | 'unknown');
    /**
     * Whether encryption is available.
     *
     * On Linux, returns true if the app has emitted the `ready` event and the secret
     * key is available. On MacOS, returns true if Keychain is available. On Windows,
     * returns true once the app has emitted the `ready` event.
     */
    isEncryptionAvailable(): boolean;
    /**
     * This function on Linux will force the module to use an in memory password for
     * creating symmetric key that is used for encrypt/decrypt functions when a valid
     * OS password manager cannot be determined for the current active desktop
     * environment. This function is a no-op on Windows and MacOS.
     */
    setUsePlainTextEncryption(usePlainText: boolean): void;
  }

  interface Screen extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/screen

    /**
     * Emitted when `newDisplay` has been added.
     */
    on(event: 'display-added', listener: (event: Event,
                                          newDisplay: Display) => void): this;
    off(event: 'display-added', listener: (event: Event,
                                          newDisplay: Display) => void): this;
    once(event: 'display-added', listener: (event: Event,
                                          newDisplay: Display) => void): this;
    addListener(event: 'display-added', listener: (event: Event,
                                          newDisplay: Display) => void): this;
    removeListener(event: 'display-added', listener: (event: Event,
                                          newDisplay: Display) => void): this;
    /**
     * Emitted when one or more metrics change in a `display`. The `changedMetrics` is
     * an array of strings that describe the changes. Possible changes are `bounds`,
     * `workArea`, `scaleFactor` and `rotation`.
     */
    on(event: 'display-metrics-changed', listener: (event: Event,
                                                    display: Display,
                                                    changedMetrics: string[]) => void): this;
    off(event: 'display-metrics-changed', listener: (event: Event,
                                                    display: Display,
                                                    changedMetrics: string[]) => void): this;
    once(event: 'display-metrics-changed', listener: (event: Event,
                                                    display: Display,
                                                    changedMetrics: string[]) => void): this;
    addListener(event: 'display-metrics-changed', listener: (event: Event,
                                                    display: Display,
                                                    changedMetrics: string[]) => void): this;
    removeListener(event: 'display-metrics-changed', listener: (event: Event,
                                                    display: Display,
                                                    changedMetrics: string[]) => void): this;
    /**
     * Emitted when `oldDisplay` has been removed.
     */
    on(event: 'display-removed', listener: (event: Event,
                                            oldDisplay: Display) => void): this;
    off(event: 'display-removed', listener: (event: Event,
                                            oldDisplay: Display) => void): this;
    once(event: 'display-removed', listener: (event: Event,
                                            oldDisplay: Display) => void): this;
    addListener(event: 'display-removed', listener: (event: Event,
                                            oldDisplay: Display) => void): this;
    removeListener(event: 'display-removed', listener: (event: Event,
                                            oldDisplay: Display) => void): this;
    /**
     * Converts a screen DIP point to a screen physical point. The DPI scale is
     * performed relative to the display containing the DIP point.
     *
     * @platform win32
     */
    dipToScreenPoint(point: Point): Point;
    /**
     * Converts a screen DIP rect to a screen physical rect. The DPI scale is performed
     * relative to the display nearest to `window`. If `window` is null, scaling will
     * be performed to the display nearest to `rect`.
     *
     * @platform win32
     */
    dipToScreenRect(window: (BrowserWindow) | (null), rect: Rectangle): Rectangle;
    /**
     * An array of displays that are currently available.
     */
    getAllDisplays(): Display[];
    /**
     * The current absolute position of the mouse pointer.
     *
     * **Note:** The return value is a DIP point, not a screen physical point.
     */
    getCursorScreenPoint(): Point;
    /**
     * The display that most closely intersects the provided bounds.
     */
    getDisplayMatching(rect: Rectangle): Display;
    /**
     * The display nearest the specified point.
     */
    getDisplayNearestPoint(point: Point): Display;
    /**
     * The primary display.
     */
    getPrimaryDisplay(): Display;
    /**
     * Converts a screen physical point to a screen DIP point. The DPI scale is
     * performed relative to the display containing the physical point.
     *
     * @platform win32
     */
    screenToDipPoint(point: Point): Point;
    /**
     * Converts a screen physical rect to a screen DIP rect. The DPI scale is performed
     * relative to the display nearest to `window`. If `window` is null, scaling will
     * be performed to the display nearest to `rect`.
     *
     * @platform win32
     */
    screenToDipRect(window: (BrowserWindow) | (null), rect: Rectangle): Rectangle;
  }

  interface ScrubberItem {

    // Docs: https://electronjs.org/docs/api/structures/scrubber-item

    /**
     * The image to appear in this item.
     */
    icon?: NativeImage;
    /**
     * The text to appear in this item.
     */
    label?: string;
  }

  interface SegmentedControlSegment {

    // Docs: https://electronjs.org/docs/api/structures/segmented-control-segment

    /**
     * Whether this segment is selectable. Default: true.
     */
    enabled?: boolean;
    /**
     * The image to appear in this segment.
     */
    icon?: NativeImage;
    /**
     * The text to appear in this segment.
     */
    label?: string;
  }

  interface SerialPort {

    // Docs: https://electronjs.org/docs/api/structures/serial-port

    /**
     * A stable identifier on Windows that can be used for device permissions.
     *
     * @platform win32
     */
    deviceInstanceId?: string;
    /**
     * A string suitable for display to the user for describing this device.
     */
    displayName?: string;
    /**
     * Unique identifier for the port.
     */
    portId: string;
    /**
     * Name of the port.
     */
    portName: string;
    /**
     * The USB product ID.
     */
    productId?: string;
    /**
     * The USB device serial number.
     */
    serialNumber?: string;
    /**
     * Represents a single serial port on macOS can be enumerated by multiple drivers.
     *
     * @platform darwin
     */
    usbDriverName?: string;
    /**
     * The USB vendor ID.
     */
    vendorId?: string;
  }

  interface ServiceWorkerInfo {

    // Docs: https://electronjs.org/docs/api/structures/service-worker-info

    /**
     * The virtual ID of the process that this service worker is running in.  This is
     * not an OS level PID.  This aligns with the ID set used for
     * `webContents.getProcessId()`.
     */
    renderProcessId: number;
    /**
     * The base URL that this service worker is active for.
     */
    scope: string;
    /**
     * The full URL to the script that this service worker runs
     */
    scriptUrl: string;
  }

  class ServiceWorkers extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/service-workers

    /**
     * Emitted when a service worker logs something to the console.
     */
    on(event: 'console-message', listener: (event: Event,
                                            /**
                                             * Information about the console message
                                             */
                                            messageDetails: MessageDetails) => void): this;
    off(event: 'console-message', listener: (event: Event,
                                            /**
                                             * Information about the console message
                                             */
                                            messageDetails: MessageDetails) => void): this;
    once(event: 'console-message', listener: (event: Event,
                                            /**
                                             * Information about the console message
                                             */
                                            messageDetails: MessageDetails) => void): this;
    addListener(event: 'console-message', listener: (event: Event,
                                            /**
                                             * Information about the console message
                                             */
                                            messageDetails: MessageDetails) => void): this;
    removeListener(event: 'console-message', listener: (event: Event,
                                            /**
                                             * Information about the console message
                                             */
                                            messageDetails: MessageDetails) => void): this;
    /**
     * Emitted when a service worker has been registered. Can occur after a call to
     * `navigator.serviceWorker.register('/sw.js')` successfully resolves or when a
     * Chrome extension is loaded.
     */
    on(event: 'registration-completed', listener: (event: Event,
                                                   /**
                                                    * Information about the registered service worker
                                                    */
                                                   details: RegistrationCompletedDetails) => void): this;
    off(event: 'registration-completed', listener: (event: Event,
                                                   /**
                                                    * Information about the registered service worker
                                                    */
                                                   details: RegistrationCompletedDetails) => void): this;
    once(event: 'registration-completed', listener: (event: Event,
                                                   /**
                                                    * Information about the registered service worker
                                                    */
                                                   details: RegistrationCompletedDetails) => void): this;
    addListener(event: 'registration-completed', listener: (event: Event,
                                                   /**
                                                    * Information about the registered service worker
                                                    */
                                                   details: RegistrationCompletedDetails) => void): this;
    removeListener(event: 'registration-completed', listener: (event: Event,
                                                   /**
                                                    * Information about the registered service worker
                                                    */
                                                   details: RegistrationCompletedDetails) => void): this;
    /**
     * A ServiceWorkerInfo object where the keys are the service worker version ID and
     * the values are the information about that service worker.
     */
    getAllRunning(): Record<number, ServiceWorkerInfo>;
    /**
     * Information about this service worker
     *
     * If the service worker does not exist or is not running this method will throw an
     * exception.
     */
    getFromVersionID(versionId: number): ServiceWorkerInfo;
  }

  class Session extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/session

    /**
     * A session instance from `partition` string. When there is an existing `Session`
     * with the same `partition`, it will be returned; otherwise a new `Session`
     * instance will be created with `options`.
     *
     * If `partition` starts with `persist:`, the page will use a persistent session
     * available to all pages in the app with the same `partition`. if there is no
     * `persist:` prefix, the page will use an in-memory session. If the `partition` is
     * empty then default session of the app will be returned.
     *
     * To create a `Session` with `options`, you have to ensure the `Session` with the
     * `partition` has never been used before. There is no way to change the `options`
     * of an existing `Session` object.
     */
    static fromPartition(partition: string, options?: FromPartitionOptions): Session;
    /**
     * A session instance from the absolute path as specified by the `path` string.
     * When there is an existing `Session` with the same absolute path, it will be
     * returned; otherwise a new `Session` instance will be created with `options`. The
     * call will throw an error if the path is not an absolute path. Additionally, an
     * error will be thrown if an empty string is provided.
     *
     * To create a `Session` with `options`, you have to ensure the `Session` with the
     * `path` has never been used before. There is no way to change the `options` of an
     * existing `Session` object.
     */
    static fromPath(path: string, options?: FromPathOptions): Session;
    /**
     * A `Session` object, the default session object of the app.
     */
    static defaultSession: Session;
    /**
     * Emitted after an extension is loaded. This occurs whenever an extension is added
     * to the "enabled" set of extensions. This includes:
     *
     * * Extensions being loaded from `Session.loadExtension`.
     * * Extensions being reloaded:
     *   * from a crash.
     *   * if the extension requested it (`chrome.runtime.reload()`).
     */
    on(event: 'extension-loaded', listener: (event: Event,
                                             extension: Extension) => void): this;
    off(event: 'extension-loaded', listener: (event: Event,
                                             extension: Extension) => void): this;
    once(event: 'extension-loaded', listener: (event: Event,
                                             extension: Extension) => void): this;
    addListener(event: 'extension-loaded', listener: (event: Event,
                                             extension: Extension) => void): this;
    removeListener(event: 'extension-loaded', listener: (event: Event,
                                             extension: Extension) => void): this;
    /**
     * Emitted after an extension is loaded and all necessary browser state is
     * initialized to support the start of the extension's background page.
     */
    on(event: 'extension-ready', listener: (event: Event,
                                            extension: Extension) => void): this;
    off(event: 'extension-ready', listener: (event: Event,
                                            extension: Extension) => void): this;
    once(event: 'extension-ready', listener: (event: Event,
                                            extension: Extension) => void): this;
    addListener(event: 'extension-ready', listener: (event: Event,
                                            extension: Extension) => void): this;
    removeListener(event: 'extension-ready', listener: (event: Event,
                                            extension: Extension) => void): this;
    /**
     * Emitted after an extension is unloaded. This occurs when
     * `Session.removeExtension` is called.
     */
    on(event: 'extension-unloaded', listener: (event: Event,
                                               extension: Extension) => void): this;
    off(event: 'extension-unloaded', listener: (event: Event,
                                               extension: Extension) => void): this;
    once(event: 'extension-unloaded', listener: (event: Event,
                                               extension: Extension) => void): this;
    addListener(event: 'extension-unloaded', listener: (event: Event,
                                               extension: Extension) => void): this;
    removeListener(event: 'extension-unloaded', listener: (event: Event,
                                               extension: Extension) => void): this;
    /**
     * Emitted after `navigator.hid.requestDevice` has been called and
     * `select-hid-device` has fired if a new device becomes available before the
     * callback from `select-hid-device` is called.  This event is intended for use
     * when using a UI to ask users to pick a device so that the UI can be updated with
     * the newly added device.
     */
    on(event: 'hid-device-added', listener: (event: Event,
                                             details: HidDeviceAddedDetails) => void): this;
    off(event: 'hid-device-added', listener: (event: Event,
                                             details: HidDeviceAddedDetails) => void): this;
    once(event: 'hid-device-added', listener: (event: Event,
                                             details: HidDeviceAddedDetails) => void): this;
    addListener(event: 'hid-device-added', listener: (event: Event,
                                             details: HidDeviceAddedDetails) => void): this;
    removeListener(event: 'hid-device-added', listener: (event: Event,
                                             details: HidDeviceAddedDetails) => void): this;
    /**
     * Emitted after `navigator.hid.requestDevice` has been called and
     * `select-hid-device` has fired if a device has been removed before the callback
     * from `select-hid-device` is called.  This event is intended for use when using a
     * UI to ask users to pick a device so that the UI can be updated to remove the
     * specified device.
     */
    on(event: 'hid-device-removed', listener: (event: Event,
                                               details: HidDeviceRemovedDetails) => void): this;
    off(event: 'hid-device-removed', listener: (event: Event,
                                               details: HidDeviceRemovedDetails) => void): this;
    once(event: 'hid-device-removed', listener: (event: Event,
                                               details: HidDeviceRemovedDetails) => void): this;
    addListener(event: 'hid-device-removed', listener: (event: Event,
                                               details: HidDeviceRemovedDetails) => void): this;
    removeListener(event: 'hid-device-removed', listener: (event: Event,
                                               details: HidDeviceRemovedDetails) => void): this;
    /**
     * Emitted after `HIDDevice.forget()` has been called.  This event can be used to
     * help maintain persistent storage of permissions when
     * `setDevicePermissionHandler` is used.
     */
    on(event: 'hid-device-revoked', listener: (event: Event,
                                               details: HidDeviceRevokedDetails) => void): this;
    off(event: 'hid-device-revoked', listener: (event: Event,
                                               details: HidDeviceRevokedDetails) => void): this;
    once(event: 'hid-device-revoked', listener: (event: Event,
                                               details: HidDeviceRevokedDetails) => void): this;
    addListener(event: 'hid-device-revoked', listener: (event: Event,
                                               details: HidDeviceRevokedDetails) => void): this;
    removeListener(event: 'hid-device-revoked', listener: (event: Event,
                                               details: HidDeviceRevokedDetails) => void): this;
    /**
     * Emitted when a render process requests preconnection to a URL, generally due to
     * a resource hint.
     */
    on(event: 'preconnect', listener: (event: Event,
                                       /**
                                        * The URL being requested for preconnection by the renderer.
                                        */
                                       preconnectUrl: string,
                                       /**
                                        * True if the renderer is requesting that the connection include credentials (see
                                        * the spec for more details.)
                                        */
                                       allowCredentials: boolean) => void): this;
    off(event: 'preconnect', listener: (event: Event,
                                       /**
                                        * The URL being requested for preconnection by the renderer.
                                        */
                                       preconnectUrl: string,
                                       /**
                                        * True if the renderer is requesting that the connection include credentials (see
                                        * the spec for more details.)
                                        */
                                       allowCredentials: boolean) => void): this;
    once(event: 'preconnect', listener: (event: Event,
                                       /**
                                        * The URL being requested for preconnection by the renderer.
                                        */
                                       preconnectUrl: string,
                                       /**
                                        * True if the renderer is requesting that the connection include credentials (see
                                        * the spec for more details.)
                                        */
                                       allowCredentials: boolean) => void): this;
    addListener(event: 'preconnect', listener: (event: Event,
                                       /**
                                        * The URL being requested for preconnection by the renderer.
                                        */
                                       preconnectUrl: string,
                                       /**
                                        * True if the renderer is requesting that the connection include credentials (see
                                        * the spec for more details.)
                                        */
                                       allowCredentials: boolean) => void): this;
    removeListener(event: 'preconnect', listener: (event: Event,
                                       /**
                                        * The URL being requested for preconnection by the renderer.
                                        */
                                       preconnectUrl: string,
                                       /**
                                        * True if the renderer is requesting that the connection include credentials (see
                                        * the spec for more details.)
                                        */
                                       allowCredentials: boolean) => void): this;
    /**
     * Emitted when a HID device needs to be selected when a call to
     * `navigator.hid.requestDevice` is made. `callback` should be called with
     * `deviceId` to be selected; passing no arguments to `callback` will cancel the
     * request.  Additionally, permissioning on `navigator.hid` can be further managed
     * by using `ses.setPermissionCheckHandler(handler)` and
     * `ses.setDevicePermissionHandler(handler)`.
     */
    on(event: 'select-hid-device', listener: (event: Event,
                                              details: SelectHidDeviceDetails,
                                              callback: (deviceId?: (string) | (null)) => void) => void): this;
    off(event: 'select-hid-device', listener: (event: Event,
                                              details: SelectHidDeviceDetails,
                                              callback: (deviceId?: (string) | (null)) => void) => void): this;
    once(event: 'select-hid-device', listener: (event: Event,
                                              details: SelectHidDeviceDetails,
                                              callback: (deviceId?: (string) | (null)) => void) => void): this;
    addListener(event: 'select-hid-device', listener: (event: Event,
                                              details: SelectHidDeviceDetails,
                                              callback: (deviceId?: (string) | (null)) => void) => void): this;
    removeListener(event: 'select-hid-device', listener: (event: Event,
                                              details: SelectHidDeviceDetails,
                                              callback: (deviceId?: (string) | (null)) => void) => void): this;
    /**
     * Emitted when a serial port needs to be selected when a call to
     * `navigator.serial.requestPort` is made. `callback` should be called with
     * `portId` to be selected, passing an empty string to `callback` will cancel the
     * request.  Additionally, permissioning on `navigator.serial` can be managed by
     * using ses.setPermissionCheckHandler(handler) with the `serial` permission.
     */
    on(event: 'select-serial-port', listener: (event: Event,
                                               portList: SerialPort[],
                                               webContents: WebContents,
                                               callback: (portId: string) => void) => void): this;
    off(event: 'select-serial-port', listener: (event: Event,
                                               portList: SerialPort[],
                                               webContents: WebContents,
                                               callback: (portId: string) => void) => void): this;
    once(event: 'select-serial-port', listener: (event: Event,
                                               portList: SerialPort[],
                                               webContents: WebContents,
                                               callback: (portId: string) => void) => void): this;
    addListener(event: 'select-serial-port', listener: (event: Event,
                                               portList: SerialPort[],
                                               webContents: WebContents,
                                               callback: (portId: string) => void) => void): this;
    removeListener(event: 'select-serial-port', listener: (event: Event,
                                               portList: SerialPort[],
                                               webContents: WebContents,
                                               callback: (portId: string) => void) => void): this;
    /**
     * Emitted when a USB device needs to be selected when a call to
     * `navigator.usb.requestDevice` is made. `callback` should be called with
     * `deviceId` to be selected; passing no arguments to `callback` will cancel the
     * request.  Additionally, permissioning on `navigator.usb` can be further managed
     * by using `ses.setPermissionCheckHandler(handler)` and
     * `ses.setDevicePermissionHandler(handler)`.
     */
    on(event: 'select-usb-device', listener: (event: Event,
                                              details: SelectUsbDeviceDetails,
                                              callback: (deviceId?: string) => void) => void): this;
    off(event: 'select-usb-device', listener: (event: Event,
                                              details: SelectUsbDeviceDetails,
                                              callback: (deviceId?: string) => void) => void): this;
    once(event: 'select-usb-device', listener: (event: Event,
                                              details: SelectUsbDeviceDetails,
                                              callback: (deviceId?: string) => void) => void): this;
    addListener(event: 'select-usb-device', listener: (event: Event,
                                              details: SelectUsbDeviceDetails,
                                              callback: (deviceId?: string) => void) => void): this;
    removeListener(event: 'select-usb-device', listener: (event: Event,
                                              details: SelectUsbDeviceDetails,
                                              callback: (deviceId?: string) => void) => void): this;
    /**
     * Emitted after `navigator.serial.requestPort` has been called and
     * `select-serial-port` has fired if a new serial port becomes available before the
     * callback from `select-serial-port` is called.  This event is intended for use
     * when using a UI to ask users to pick a port so that the UI can be updated with
     * the newly added port.
     */
    on(event: 'serial-port-added', listener: (event: Event,
                                              port: SerialPort,
                                              webContents: WebContents) => void): this;
    off(event: 'serial-port-added', listener: (event: Event,
                                              port: SerialPort,
                                              webContents: WebContents) => void): this;
    once(event: 'serial-port-added', listener: (event: Event,
                                              port: SerialPort,
                                              webContents: WebContents) => void): this;
    addListener(event: 'serial-port-added', listener: (event: Event,
                                              port: SerialPort,
                                              webContents: WebContents) => void): this;
    removeListener(event: 'serial-port-added', listener: (event: Event,
                                              port: SerialPort,
                                              webContents: WebContents) => void): this;
    /**
     * Emitted after `navigator.serial.requestPort` has been called and
     * `select-serial-port` has fired if a serial port has been removed before the
     * callback from `select-serial-port` is called.  This event is intended for use
     * when using a UI to ask users to pick a port so that the UI can be updated to
     * remove the specified port.
     */
    on(event: 'serial-port-removed', listener: (event: Event,
                                                port: SerialPort,
                                                webContents: WebContents) => void): this;
    off(event: 'serial-port-removed', listener: (event: Event,
                                                port: SerialPort,
                                                webContents: WebContents) => void): this;
    once(event: 'serial-port-removed', listener: (event: Event,
                                                port: SerialPort,
                                                webContents: WebContents) => void): this;
    addListener(event: 'serial-port-removed', listener: (event: Event,
                                                port: SerialPort,
                                                webContents: WebContents) => void): this;
    removeListener(event: 'serial-port-removed', listener: (event: Event,
                                                port: SerialPort,
                                                webContents: WebContents) => void): this;
    /**
     * Emitted after `SerialPort.forget()` has been called.  This event can be used to
     * help maintain persistent storage of permissions when
     * `setDevicePermissionHandler` is used.
     */
    on(event: 'serial-port-revoked', listener: (event: Event,
                                                details: SerialPortRevokedDetails) => void): this;
    off(event: 'serial-port-revoked', listener: (event: Event,
                                                details: SerialPortRevokedDetails) => void): this;
    once(event: 'serial-port-revoked', listener: (event: Event,
                                                details: SerialPortRevokedDetails) => void): this;
    addListener(event: 'serial-port-revoked', listener: (event: Event,
                                                details: SerialPortRevokedDetails) => void): this;
    removeListener(event: 'serial-port-revoked', listener: (event: Event,
                                                details: SerialPortRevokedDetails) => void): this;
    /**
     * Emitted when a hunspell dictionary file starts downloading
     */
    on(event: 'spellcheck-dictionary-download-begin', listener: (event: Event,
                                                                 /**
                                                                  * The language code of the dictionary file
                                                                  */
                                                                 languageCode: string) => void): this;
    off(event: 'spellcheck-dictionary-download-begin', listener: (event: Event,
                                                                 /**
                                                                  * The language code of the dictionary file
                                                                  */
                                                                 languageCode: string) => void): this;
    once(event: 'spellcheck-dictionary-download-begin', listener: (event: Event,
                                                                 /**
                                                                  * The language code of the dictionary file
                                                                  */
                                                                 languageCode: string) => void): this;
    addListener(event: 'spellcheck-dictionary-download-begin', listener: (event: Event,
                                                                 /**
                                                                  * The language code of the dictionary file
                                                                  */
                                                                 languageCode: string) => void): this;
    removeListener(event: 'spellcheck-dictionary-download-begin', listener: (event: Event,
                                                                 /**
                                                                  * The language code of the dictionary file
                                                                  */
                                                                 languageCode: string) => void): this;
    /**
     * Emitted when a hunspell dictionary file download fails.  For details on the
     * failure you should collect a netlog and inspect the download request.
     */
    on(event: 'spellcheck-dictionary-download-failure', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    off(event: 'spellcheck-dictionary-download-failure', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    once(event: 'spellcheck-dictionary-download-failure', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    addListener(event: 'spellcheck-dictionary-download-failure', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    removeListener(event: 'spellcheck-dictionary-download-failure', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    /**
     * Emitted when a hunspell dictionary file has been successfully downloaded
     */
    on(event: 'spellcheck-dictionary-download-success', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    off(event: 'spellcheck-dictionary-download-success', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    once(event: 'spellcheck-dictionary-download-success', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    addListener(event: 'spellcheck-dictionary-download-success', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    removeListener(event: 'spellcheck-dictionary-download-success', listener: (event: Event,
                                                                   /**
                                                                    * The language code of the dictionary file
                                                                    */
                                                                   languageCode: string) => void): this;
    /**
     * Emitted when a hunspell dictionary file has been successfully initialized. This
     * occurs after the file has been downloaded.
     */
    on(event: 'spellcheck-dictionary-initialized', listener: (event: Event,
                                                              /**
                                                               * The language code of the dictionary file
                                                               */
                                                              languageCode: string) => void): this;
    off(event: 'spellcheck-dictionary-initialized', listener: (event: Event,
                                                              /**
                                                               * The language code of the dictionary file
                                                               */
                                                              languageCode: string) => void): this;
    once(event: 'spellcheck-dictionary-initialized', listener: (event: Event,
                                                              /**
                                                               * The language code of the dictionary file
                                                               */
                                                              languageCode: string) => void): this;
    addListener(event: 'spellcheck-dictionary-initialized', listener: (event: Event,
                                                              /**
                                                               * The language code of the dictionary file
                                                               */
                                                              languageCode: string) => void): this;
    removeListener(event: 'spellcheck-dictionary-initialized', listener: (event: Event,
                                                              /**
                                                               * The language code of the dictionary file
                                                               */
                                                              languageCode: string) => void): this;
    /**
     * Emitted after `navigator.usb.requestDevice` has been called and
     * `select-usb-device` has fired if a new device becomes available before the
     * callback from `select-usb-device` is called.  This event is intended for use
     * when using a UI to ask users to pick a device so that the UI can be updated with
     * the newly added device.
     */
    on(event: 'usb-device-added', listener: (event: Event,
                                             device: USBDevice,
                                             webContents: WebContents) => void): this;
    off(event: 'usb-device-added', listener: (event: Event,
                                             device: USBDevice,
                                             webContents: WebContents) => void): this;
    once(event: 'usb-device-added', listener: (event: Event,
                                             device: USBDevice,
                                             webContents: WebContents) => void): this;
    addListener(event: 'usb-device-added', listener: (event: Event,
                                             device: USBDevice,
                                             webContents: WebContents) => void): this;
    removeListener(event: 'usb-device-added', listener: (event: Event,
                                             device: USBDevice,
                                             webContents: WebContents) => void): this;
    /**
     * Emitted after `navigator.usb.requestDevice` has been called and
     * `select-usb-device` has fired if a device has been removed before the callback
     * from `select-usb-device` is called.  This event is intended for use when using a
     * UI to ask users to pick a device so that the UI can be updated to remove the
     * specified device.
     */
    on(event: 'usb-device-removed', listener: (event: Event,
                                               device: USBDevice,
                                               webContents: WebContents) => void): this;
    off(event: 'usb-device-removed', listener: (event: Event,
                                               device: USBDevice,
                                               webContents: WebContents) => void): this;
    once(event: 'usb-device-removed', listener: (event: Event,
                                               device: USBDevice,
                                               webContents: WebContents) => void): this;
    addListener(event: 'usb-device-removed', listener: (event: Event,
                                               device: USBDevice,
                                               webContents: WebContents) => void): this;
    removeListener(event: 'usb-device-removed', listener: (event: Event,
                                               device: USBDevice,
                                               webContents: WebContents) => void): this;
    /**
     * Emitted after `USBDevice.forget()` has been called.  This event can be used to
     * help maintain persistent storage of permissions when
     * `setDevicePermissionHandler` is used.
     */
    on(event: 'usb-device-revoked', listener: (event: Event,
                                               details: UsbDeviceRevokedDetails) => void): this;
    off(event: 'usb-device-revoked', listener: (event: Event,
                                               details: UsbDeviceRevokedDetails) => void): this;
    once(event: 'usb-device-revoked', listener: (event: Event,
                                               details: UsbDeviceRevokedDetails) => void): this;
    addListener(event: 'usb-device-revoked', listener: (event: Event,
                                               details: UsbDeviceRevokedDetails) => void): this;
    removeListener(event: 'usb-device-revoked', listener: (event: Event,
                                               details: UsbDeviceRevokedDetails) => void): this;
    /**
     * Emitted when Electron is about to download `item` in `webContents`.
     *
     * Calling `event.preventDefault()` will cancel the download and `item` will not be
     * available from next tick of the process.
     */
    on(event: 'will-download', listener: (event: Event,
                                          item: DownloadItem,
                                          webContents: WebContents) => void): this;
    off(event: 'will-download', listener: (event: Event,
                                          item: DownloadItem,
                                          webContents: WebContents) => void): this;
    once(event: 'will-download', listener: (event: Event,
                                          item: DownloadItem,
                                          webContents: WebContents) => void): this;
    addListener(event: 'will-download', listener: (event: Event,
                                          item: DownloadItem,
                                          webContents: WebContents) => void): this;
    removeListener(event: 'will-download', listener: (event: Event,
                                          item: DownloadItem,
                                          webContents: WebContents) => void): this;
    /**
     * Whether the word was successfully written to the custom dictionary. This API
     * will not work on non-persistent (in-memory) sessions.
     *
     * **Note:** On macOS and Windows 10 this word will be written to the OS custom
     * dictionary as well
     */
    addWordToSpellCheckerDictionary(word: string): boolean;
    /**
     * Dynamically sets whether to always send credentials for HTTP NTLM or Negotiate
     * authentication.
     */
    allowNTLMCredentialsForDomains(domains: string): void;
    /**
     * resolves when the session’s HTTP authentication cache has been cleared.
     */
    clearAuthCache(): Promise<void>;
    /**
     * resolves when the cache clear operation is complete.
     *
     * Clears the session’s HTTP cache.
     */
    clearCache(): Promise<void>;
    /**
     * resolves when the code cache clear operation is complete.
     */
    clearCodeCaches(options: ClearCodeCachesOptions): Promise<void>;
    /**
     * Resolves when the operation is complete.
     *
     * Clears the host resolver cache.
     */
    clearHostResolverCache(): Promise<void>;
    /**
     * resolves when the storage data has been cleared.
     */
    clearStorageData(options?: ClearStorageDataOptions): Promise<void>;
    /**
     * Resolves when all connections are closed.
     *
     * **Note:** It will terminate / fail all requests currently in flight.
     */
    closeAllConnections(): Promise<void>;
    /**
     * Allows resuming `cancelled` or `interrupted` downloads from previous `Session`.
     * The API will generate a DownloadItem that can be accessed with the will-download
     * event. The DownloadItem will not have any `WebContents` associated with it and
     * the initial state will be `interrupted`. The download will start only when the
     * `resume` API is called on the DownloadItem.
     */
    createInterruptedDownload(options: CreateInterruptedDownloadOptions): void;
    /**
     * Disables any network emulation already active for the `session`. Resets to the
     * original network configuration.
     */
    disableNetworkEmulation(): void;
    /**
     * Initiates a download of the resource at `url`. The API will generate a
     * DownloadItem that can be accessed with the will-download event.
     *
     * **Note:** This does not perform any security checks that relate to a page's
     * origin, unlike `webContents.downloadURL`.
     */
    downloadURL(url: string, options?: DownloadURLOptions): void;
    /**
     * Emulates network with the given configuration for the `session`.
     */
    enableNetworkEmulation(options: EnableNetworkEmulationOptions): void;
    /**
     * see Response.
     *
     * Sends a request, similarly to how `fetch()` works in the renderer, using
     * Chrome's network stack. This differs from Node's `fetch()`, which uses Node.js's
     * HTTP stack.
     *
     * Example:
     *
     * See also `net.fetch()`, a convenience method which issues requests from the
     * default session.
     *
     * See the MDN documentation for `fetch()` for more details.
     *
     * Limitations:
     *
     * * `net.fetch()` does not support the `data:` or `blob:` schemes.
     * * The value of the `integrity` option is ignored.
     * * The `.type` and `.url` values of the returned `Response` object are incorrect.
     *
     * By default, requests made with `net.fetch` can be made to custom protocols as
     * well as `file:`, and will trigger webRequest handlers if present. When the
     * non-standard `bypassCustomProtocolHandlers` option is set in RequestInit, custom
     * protocol handlers will not be called for this request. This allows forwarding an
     * intercepted request to the built-in handler. webRequest handlers will still be
     * triggered when bypassing custom protocols.
     */
    fetch(input: (string) | (GlobalRequest), init?: RequestInit & { bypassCustomProtocolHandlers?: boolean }): Promise<GlobalResponse>;
    /**
     * Writes any unwritten DOMStorage data to disk.
     */
    flushStorageData(): void;
    /**
     * Resolves when the all internal states of proxy service is reset and the latest
     * proxy configuration is reapplied if it's already available. The pac script will
     * be fetched from `pacScript` again if the proxy mode is `pac_script`.
     */
    forceReloadProxyConfig(): Promise<void>;
    /**
     * A list of all loaded extensions.
     *
     * **Note:** This API cannot be called before the `ready` event of the `app` module
     * is emitted.
     */
    getAllExtensions(): Extension[];
    /**
     * resolves with blob data.
     */
    getBlobData(identifier: string): Promise<Buffer>;
    /**
     * the session's current cache size, in bytes.
     */
    getCacheSize(): Promise<number>;
    /**
     * The loaded extension with the given ID.
     *
     * **Note:** This API cannot be called before the `ready` event of the `app` module
     * is emitted.
     */
    getExtension(extensionId: string): (Extension) | (null);
    /**
     * an array of paths to preload scripts that have been registered.
     */
    getPreloads(): string[];
    /**
     * An array of language codes the spellchecker is enabled for.  If this list is
     * empty the spellchecker will fallback to using `en-US`.  By default on launch if
     * this setting is an empty list Electron will try to populate this setting with
     * the current OS locale.  This setting is persisted across restarts.
     *
     * **Note:** On macOS the OS spellchecker is used and has its own list of
     * languages. On macOS, this API will return whichever languages have been
     * configured by the OS.
     */
    getSpellCheckerLanguages(): string[];
    /**
     * The absolute file system path where data for this session is persisted on disk.
     * For in memory sessions this returns `null`.
     */
    getStoragePath(): (string) | (null);
    /**
     * The user agent for this session.
     */
    getUserAgent(): string;
    /**
     * Whether or not this session is a persistent one. The default `webContents`
     * session of a `BrowserWindow` is persistent. When creating a session from a
     * partition, session prefixed with `persist:` will be persistent, while others
     * will be temporary.
     */
    isPersistent(): boolean;
    /**
     * Whether the builtin spell checker is enabled.
     */
    isSpellCheckerEnabled(): boolean;
    /**
     * An array of all words in app's custom dictionary. Resolves when the full
     * dictionary is loaded from disk.
     */
    listWordsInSpellCheckerDictionary(): Promise<string[]>;
    /**
     * resolves when the extension is loaded.
     *
     * This method will raise an exception if the extension could not be loaded. If
     * there are warnings when installing the extension (e.g. if the extension requests
     * an API that Electron does not support) then they will be logged to the console.
     *
     * Note that Electron does not support the full range of Chrome extensions APIs.
     * See Supported Extensions APIs for more details on what is supported.
     *
     * Note that in previous versions of Electron, extensions that were loaded would be
     * remembered for future runs of the application. This is no longer the case:
     * `loadExtension` must be called on every boot of your app if you want the
     * extension to be loaded.
     *
     * This API does not support loading packed (.crx) extensions.
     *
     * **Note:** This API cannot be called before the `ready` event of the `app` module
     * is emitted.
     *
     * **Note:** Loading extensions into in-memory (non-persistent) sessions is not
     * supported and will throw an error.
     */
    loadExtension(path: string, options?: LoadExtensionOptions): Promise<Electron.Extension>;
    /**
     * Preconnects the given number of sockets to an origin.
     */
    preconnect(options: PreconnectOptions): void;
    /**
     * Unloads an extension.
     *
     * **Note:** This API cannot be called before the `ready` event of the `app` module
     * is emitted.
     */
    removeExtension(extensionId: string): void;
    /**
     * Whether the word was successfully removed from the custom dictionary. This API
     * will not work on non-persistent (in-memory) sessions.
     *
     * **Note:** On macOS and Windows 10 this word will be removed from the OS custom
     * dictionary as well
     */
    removeWordFromSpellCheckerDictionary(word: string): boolean;
    /**
     * Resolves with the resolved IP addresses for the `host`.
     */
    resolveHost(host: string, options?: ResolveHostOptions): Promise<Electron.ResolvedHost>;
    /**
     * Resolves with the proxy information for `url`.
     */
    resolveProxy(url: string): Promise<string>;
    /**
     * Sets a handler to respond to Bluetooth pairing requests. This handler allows
     * developers to handle devices that require additional validation before pairing.
     * When a handler is not defined, any pairing on Linux or Windows that requires
     * additional validation will be automatically cancelled. macOS does not require a
     * handler because macOS handles the pairing automatically.  To clear the handler,
     * call `setBluetoothPairingHandler(null)`.
     *
     * @platform win32,linux
     */
    setBluetoothPairingHandler(handler: ((details: BluetoothPairingHandlerHandlerDetails, callback: (response: Response) => void) => void) | (null)): void;
    /**
     * Sets the certificate verify proc for `session`, the `proc` will be called with
     * `proc(request, callback)` whenever a server certificate verification is
     * requested. Calling `callback(0)` accepts the certificate, calling `callback(-2)`
     * rejects it.
     *
     * Calling `setCertificateVerifyProc(null)` will revert back to default certificate
     * verify proc.
     *
     * > **NOTE:** The result of this procedure is cached by the network service.
     */
    setCertificateVerifyProc(proc: ((request: Request, callback: (verificationResult: number) => void) => void) | (null)): void;
    /**
     * Sets the directory to store the generated JS code cache for this session. The
     * directory is not required to be created by the user before this call, the
     * runtime will create if it does not exist otherwise will use the existing
     * directory. If directory cannot be created, then code cache will not be used and
     * all operations related to code cache will fail silently inside the runtime. By
     * default, the directory will be `Code Cache` under the respective user data
     * folder.
     *
     * Note that by default code cache is only enabled for http(s) URLs, to enable code
     * cache for custom protocols, `codeCache: true` and `standard: true` must be
     * specified when registering the protocol.
     */
    setCodeCachePath(path: string): void;
    /**
     * Sets the handler which can be used to respond to device permission checks for
     * the `session`. Returning `true` will allow the device to be permitted and
     * `false` will reject it. To clear the handler, call
     * `setDevicePermissionHandler(null)`. This handler can be used to provide default
     * permissioning to devices without first calling for permission to devices (eg via
     * `navigator.hid.requestDevice`).  If this handler is not defined, the default
     * device permissions as granted through device selection (eg via
     * `navigator.hid.requestDevice`) will be used. Additionally, the default behavior
     * of Electron is to store granted device permission in memory. If longer term
     * storage is needed, a developer can store granted device permissions (eg when
     * handling the `select-hid-device` event) and then read from that storage with
     * `setDevicePermissionHandler`.
     */
    setDevicePermissionHandler(handler: ((details: DevicePermissionHandlerHandlerDetails) => boolean) | (null)): void;
    /**
     * This handler will be called when web content requests access to display media
     * via the `navigator.mediaDevices.getDisplayMedia` API. Use the desktopCapturer
     * API to choose which stream(s) to grant access to.
     *
     * Passing a WebFrameMain object as a video or audio stream will capture the video
     * or audio stream from that frame.
     *
     * Passing `null` instead of a function resets the handler to its default state.
     */
    setDisplayMediaRequestHandler(handler: ((request: DisplayMediaRequestHandlerHandlerRequest, callback: (streams: Streams) => void) => void) | (null)): void;
    /**
     * Sets download saving directory. By default, the download directory will be the
     * `Downloads` under the respective app folder.
     */
    setDownloadPath(path: string): void;
    /**
     * Sets the handler which can be used to respond to permission checks for the
     * `session`. Returning `true` will allow the permission and `false` will reject
     * it.  Please note that you must also implement `setPermissionRequestHandler` to
     * get complete permission handling. Most web APIs do a permission check and then
     * make a permission request if the check is denied. To clear the handler, call
     * `setPermissionCheckHandler(null)`.
     */
    setPermissionCheckHandler(handler: ((webContents: (WebContents) | (null), permission: 'clipboard-read' | 'clipboard-sanitized-write' | 'geolocation' | 'fullscreen' | 'hid' | 'idle-detection' | 'media' | 'mediaKeySystem' | 'midi' | 'midiSysex' | 'notifications' | 'openExternal' | 'pointerLock' | 'serial' | 'usb', requestingOrigin: string, details: PermissionCheckHandlerHandlerDetails) => boolean) | (null)): void;
    /**
     * Sets the handler which can be used to respond to permission requests for the
     * `session`. Calling `callback(true)` will allow the permission and
     * `callback(false)` will reject it. To clear the handler, call
     * `setPermissionRequestHandler(null)`.  Please note that you must also implement
     * `setPermissionCheckHandler` to get complete permission handling. Most web APIs
     * do a permission check and then make a permission request if the check is denied.
     */
    setPermissionRequestHandler(handler: ((webContents: WebContents, permission: 'clipboard-read' | 'clipboard-sanitized-write' | 'display-capture' | 'fullscreen' | 'geolocation' | 'idle-detection' | 'media' | 'mediaKeySystem' | 'midi' | 'midiSysex' | 'notifications' | 'pointerLock' | 'keyboardLock' | 'openExternal' | 'window-management' | 'unknown', callback: (permissionGranted: boolean) => void, details: PermissionRequestHandlerHandlerDetails) => void) | (null)): void;
    /**
     * Adds scripts that will be executed on ALL web contents that are associated with
     * this session just before normal `preload` scripts run.
     */
    setPreloads(preloads: string[]): void;
    /**
     * Resolves when the proxy setting process is complete.
     *
     * Sets the proxy settings.
     *
     * You may need `ses.closeAllConnections` to close currently in flight connections
     * to prevent pooled sockets using previous proxy from being reused by future
     * requests.
     */
    setProxy(config: ProxyConfig): Promise<void>;
    /**
     * By default Electron will download hunspell dictionaries from the Chromium CDN.
     * If you want to override this behavior you can use this API to point the
     * dictionary downloader at your own hosted version of the hunspell dictionaries.
     * We publish a `hunspell_dictionaries.zip` file with each release which contains
     * the files you need to host here.
     *
     * The file server must be **case insensitive**. If you cannot do this, you must
     * upload each file twice: once with the case it has in the ZIP file and once with
     * the filename as all lowercase.
     *
     * If the files present in `hunspell_dictionaries.zip` are available at
     * `https://example.com/dictionaries/language-code.bdic` then you should call this
     * api with
     * `ses.setSpellCheckerDictionaryDownloadURL('https://example.com/dictionaries/')`.
     *  Please note the trailing slash.  The URL to the dictionaries is formed as
     * `${url}${filename}`.
     *
     * **Note:** On macOS the OS spellchecker is used and therefore we do not download
     * any dictionary files.  This API is a no-op on macOS.
     */
    setSpellCheckerDictionaryDownloadURL(url: string): void;
    /**
     * Sets whether to enable the builtin spell checker.
     */
    setSpellCheckerEnabled(enable: boolean): void;
    /**
     * The built in spellchecker does not automatically detect what language a user is
     * typing in.  In order for the spell checker to correctly check their words you
     * must call this API with an array of language codes.  You can get the list of
     * supported language codes with the `ses.availableSpellCheckerLanguages` property.
     *
     * **Note:** On macOS the OS spellchecker is used and will detect your language
     * automatically.  This API is a no-op on macOS.
     */
    setSpellCheckerLanguages(languages: string[]): void;
    /**
     * Sets the SSL configuration for the session. All subsequent network requests will
     * use the new configuration. Existing network connections (such as WebSocket
     * connections) will not be terminated, but old sockets in the pool will not be
     * reused for new connections.
     */
    setSSLConfig(config: Config): void;
    /**
     * Sets the handler which can be used to override which USB classes are protected.
     * The return value for the handler is a string array of USB classes which should
     * be considered protected (eg not available in the renderer).  Valid values for
     * the array are:
     *
     * * `audio`
     * * `audio-video`
     * * `hid`
     * * `mass-storage`
     * * `smart-card`
     * * `video`
     * * `wireless`
     *
     * Returning an empty string array from the handler will allow all USB classes;
     * returning the passed in array will maintain the default list of protected USB
     * classes (this is also the default behavior if a handler is not defined). To
     * clear the handler, call `setUSBProtectedClassesHandler(null)`.
     */
    setUSBProtectedClassesHandler(handler: ((details: USBProtectedClassesHandlerHandlerDetails) => string[]) | (null)): void;
    /**
     * Overrides the `userAgent` and `acceptLanguages` for this session.
     *
     * The `acceptLanguages` must a comma separated ordered list of language codes, for
     * example `"en-US,fr,de,ko,zh-CN,ja"`.
     *
     * This doesn't affect existing `WebContents`, and each `WebContents` can use
     * `webContents.setUserAgent` to override the session-wide user agent.
     */
    setUserAgent(userAgent: string, acceptLanguages?: string): void;
    /**
     * A `string[]` array which consists of all the known available spell checker
     * languages.  Providing a language code to the `setSpellCheckerLanguages` API that
     * isn't in this array will result in an error.
     *
     */
    readonly availableSpellCheckerLanguages: string[];
    /**
     * A `Cookies` object for this session.
     *
     */
    readonly cookies: Cookies;
    /**
     * A `NetLog` object for this session.
     *
     */
    readonly netLog: NetLog;
    /**
     * A `Protocol` object for this session.
     *
     */
    readonly protocol: Protocol;
    /**
     * A `ServiceWorkers` object for this session.
     *
     */
    readonly serviceWorkers: ServiceWorkers;
    /**
     * A `boolean` indicating whether builtin spell checker is enabled.
     */
    spellCheckerEnabled: boolean;
    /**
     * A `string | null` indicating the absolute file system path where data for this
     * session is persisted on disk.  For in memory sessions this returns `null`.
     *
     */
    readonly storagePath: (string) | (null);
    /**
     * A `WebRequest` object for this session.
     *
     */
    readonly webRequest: WebRequest;
  }

  interface SharedWorkerInfo {

    // Docs: https://electronjs.org/docs/api/structures/shared-worker-info

    /**
     * The unique id of the shared worker.
     */
    id: string;
    /**
     * The url of the shared worker.
     */
    url: string;
  }

  class ShareMenu extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/share-menu

    /**
     * ShareMenu
     */
    constructor(sharingItem: SharingItem);
    /**
     * Closes the context menu in the `browserWindow`.
     */
    closePopup(browserWindow?: BrowserWindow): void;
    /**
     * Pops up this menu as a context menu in the `BrowserWindow`.
     */
    popup(options?: PopupOptions): void;
  }

  interface SharingItem {

    // Docs: https://electronjs.org/docs/api/structures/sharing-item

    /**
     * An array of files to share.
     */
    filePaths?: string[];
    /**
     * An array of text to share.
     */
    texts?: string[];
    /**
     * An array of URLs to share.
     */
    urls?: string[];
  }

  interface Shell {

    // Docs: https://electronjs.org/docs/api/shell

    /**
     * Play the beep sound.
     */
    beep(): void;
    /**
     * Open the given external protocol URL in the desktop's default manner. (For
     * example, mailto: URLs in the user's default mail agent).
     */
    openExternal(url: string, options?: OpenExternalOptions): Promise<void>;
    /**
     * Resolves with a string containing the error message corresponding to the failure
     * if a failure occurred, otherwise "".
     *
     * Open the given file in the desktop's default manner.
     */
    openPath(path: string): Promise<string>;
    /**
     * Resolves the shortcut link at `shortcutPath`.
     *
     * An exception will be thrown when any error happens.
     *
     * @platform win32
     */
    readShortcutLink(shortcutPath: string): ShortcutDetails;
    /**
     * Show the given file in a file manager. If possible, select the file.
     */
    showItemInFolder(fullPath: string): void;
    /**
     * Resolves when the operation has been completed. Rejects if there was an error
     * while deleting the requested item.
     *
     * This moves a path to the OS-specific trash location (Trash on macOS, Recycle Bin
     * on Windows, and a desktop-environment-specific location on Linux).
     */
    trashItem(path: string): Promise<void>;
    /**
     * Whether the shortcut was created successfully.
     *
     * Creates or updates a shortcut link at `shortcutPath`.
     *
     * @platform win32
     */
    writeShortcutLink(shortcutPath: string, operation: 'create' | 'update' | 'replace', options: ShortcutDetails): boolean;
    /**
     * Whether the shortcut was created successfully.
     *
     * Creates or updates a shortcut link at `shortcutPath`.
     *
     * @platform win32
     */
    writeShortcutLink(shortcutPath: string, options: ShortcutDetails): boolean;
  }

  interface ShortcutDetails {

    // Docs: https://electronjs.org/docs/api/structures/shortcut-details

    /**
     * The Application User Model ID. Default is empty.
     */
    appUserModelId?: string;
    /**
     * The arguments to be applied to `target` when launching from this shortcut.
     * Default is empty.
     */
    args?: string;
    /**
     * The working directory. Default is empty.
     */
    cwd?: string;
    /**
     * The description of the shortcut. Default is empty.
     */
    description?: string;
    /**
     * The path to the icon, can be a DLL or EXE. `icon` and `iconIndex` have to be set
     * together. Default is empty, which uses the target's icon.
     */
    icon?: string;
    /**
     * The resource ID of icon when `icon` is a DLL or EXE. Default is 0.
     */
    iconIndex?: number;
    /**
     * The target to launch from this shortcut.
     */
    target: string;
    /**
     * The Application Toast Activator CLSID. Needed for participating in Action
     * Center.
     */
    toastActivatorClsid?: string;
  }

  interface Size {

    // Docs: https://electronjs.org/docs/api/structures/size

    height: number;
    width: number;
  }

  interface SystemPreferences extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/system-preferences

    /**
     * @platform win32
     */
    on(event: 'accent-color-changed', listener: (event: Event,
                                                 /**
                                                  * The new RGBA color the user assigned to be their system accent color.
                                                  */
                                                 newColor: string) => void): this;
    /**
     * @platform win32
     */
    off(event: 'accent-color-changed', listener: (event: Event,
                                                 /**
                                                  * The new RGBA color the user assigned to be their system accent color.
                                                  */
                                                 newColor: string) => void): this;
    /**
     * @platform win32
     */
    once(event: 'accent-color-changed', listener: (event: Event,
                                                 /**
                                                  * The new RGBA color the user assigned to be their system accent color.
                                                  */
                                                 newColor: string) => void): this;
    /**
     * @platform win32
     */
    addListener(event: 'accent-color-changed', listener: (event: Event,
                                                 /**
                                                  * The new RGBA color the user assigned to be their system accent color.
                                                  */
                                                 newColor: string) => void): this;
    /**
     * @platform win32
     */
    removeListener(event: 'accent-color-changed', listener: (event: Event,
                                                 /**
                                                  * The new RGBA color the user assigned to be their system accent color.
                                                  */
                                                 newColor: string) => void): this;
    /**
     * @platform win32
     */
    on(event: 'color-changed', listener: (event: Event) => void): this;
    /**
     * @platform win32
     */
    off(event: 'color-changed', listener: (event: Event) => void): this;
    /**
     * @platform win32
     */
    once(event: 'color-changed', listener: (event: Event) => void): this;
    /**
     * @platform win32
     */
    addListener(event: 'color-changed', listener: (event: Event) => void): this;
    /**
     * @platform win32
     */
    removeListener(event: 'color-changed', listener: (event: Event) => void): this;
    /**
     * A promise that resolves with `true` if consent was granted and `false` if it was
     * denied. If an invalid `mediaType` is passed, the promise will be rejected. If an
     * access request was denied and later is changed through the System Preferences
     * pane, a restart of the app will be required for the new permissions to take
     * effect. If access has already been requested and denied, it _must_ be changed
     * through the preference pane; an alert will not pop up and the promise will
     * resolve with the existing access status.
     *
     * **Important:** In order to properly leverage this API, you must set the
     * `NSMicrophoneUsageDescription` and `NSCameraUsageDescription` strings in your
     * app's `Info.plist` file. The values for these keys will be used to populate the
     * permission dialogs so that the user will be properly informed as to the purpose
     * of the permission request. See Electron Application Distribution for more
     * information about how to set these in the context of Electron.
     *
     * This user consent was not required until macOS 10.14 Mojave, so this method will
     * always return `true` if your system is running 10.13 High Sierra.
     *
     * @platform darwin
     */
    askForMediaAccess(mediaType: 'microphone' | 'camera'): Promise<boolean>;
    /**
     * whether or not this device has the ability to use Touch ID.
     *
     * @platform darwin
     */
    canPromptTouchID(): boolean;
    /**
     * The users current system wide accent color preference in RGBA hexadecimal form.
     *
     * This API is only available on macOS 10.14 Mojave or newer.
     *
     * @platform win32,darwin
     */
    getAccentColor(): string;
    /**
     * * `shouldRenderRichAnimation` boolean - Returns true if rich animations should
     * be rendered. Looks at session type (e.g. remote desktop) and accessibility
     * settings to give guidance for heavy animations.
     * * `scrollAnimationsEnabledBySystem` boolean - Determines on a per-platform basis
     * whether scroll animations (e.g. produced by home/end key) should be enabled.
     * * `prefersReducedMotion` boolean - Determines whether the user desires reduced
     * motion based on platform APIs.
     *
     * Returns an object with system animation settings.
     */
    getAnimationSettings(): AnimationSettings;
    /**
     * The system color setting in RGBA hexadecimal form (`#RRGGBBAA`). See the Windows
     * docs and the macOS docs for more details.
     *
     * The following colors are only available on macOS 10.14: `find-highlight`,
     * `selected-content-background`, `separator`,
     * `unemphasized-selected-content-background`,
     * `unemphasized-selected-text-background`, and `unemphasized-selected-text`.
     *
     * @platform win32,darwin
     */
    getColor(color: '3d-dark-shadow' | '3d-face' | '3d-highlight' | '3d-light' | '3d-shadow' | 'active-border' | 'active-caption' | 'active-caption-gradient' | 'app-workspace' | 'button-text' | 'caption-text' | 'desktop' | 'disabled-text' | 'highlight' | 'highlight-text' | 'hotlight' | 'inactive-border' | 'inactive-caption' | 'inactive-caption-gradient' | 'inactive-caption-text' | 'info-background' | 'info-text' | 'menu' | 'menu-highlight' | 'menubar' | 'menu-text' | 'scrollbar' | 'window' | 'window-frame' | 'window-text' | 'control-background' | 'control' | 'control-text' | 'disabled-control-text' | 'find-highlight' | 'grid' | 'header-text' | 'highlight' | 'keyboard-focus-indicator' | 'label' | 'link' | 'placeholder-text' | 'quaternary-label' | 'scrubber-textured-background' | 'secondary-label' | 'selected-content-background' | 'selected-control' | 'selected-control-text' | 'selected-menu-item-text' | 'selected-text-background' | 'selected-text' | 'separator' | 'shadow' | 'tertiary-label' | 'text-background' | 'text' | 'under-page-background' | 'unemphasized-selected-content-background' | 'unemphasized-selected-text-background' | 'unemphasized-selected-text' | 'window-background' | 'window-frame-text'): string;
    /**
     * Can be `dark`, `light` or `unknown`.
     *
     * Gets the macOS appearance setting that is currently applied to your application,
     * maps to NSApplication.effectiveAppearance
     *
     * @platform darwin
     */
    getEffectiveAppearance(): ('dark' | 'light' | 'unknown');
    /**
     * Can be `not-determined`, `granted`, `denied`, `restricted` or `unknown`.
     *
     * This user consent was not required on macOS 10.13 High Sierra so this method
     * will always return `granted`. macOS 10.14 Mojave or higher requires consent for
     * `microphone` and `camera` access. macOS 10.15 Catalina or higher requires
     * consent for `screen` access.
     *
     * Windows 10 has a global setting controlling `microphone` and `camera` access for
     * all win32 applications. It will always return `granted` for `screen` and for all
     * media types on older versions of Windows.
     *
     * @platform win32,darwin
     */
    getMediaAccessStatus(mediaType: 'microphone' | 'camera' | 'screen'): ('not-determined' | 'granted' | 'denied' | 'restricted' | 'unknown');
    /**
     * The standard system color formatted as `#RRGGBBAA`.
     *
     * Returns one of several standard system colors that automatically adapt to
     * vibrancy and changes in accessibility settings like 'Increase contrast' and
     * 'Reduce transparency'. See Apple Documentation for  more details.
     *
     * @platform darwin
     */
    getSystemColor(color: 'blue' | 'brown' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'yellow'): string;
    /**
     * The value of `key` in `NSUserDefaults`.
     *
     * Some popular `key` and `type`s are:
     *
     * * `AppleInterfaceStyle`: `string`
     * * `AppleAquaColorVariant`: `integer`
     * * `AppleHighlightColor`: `string`
     * * `AppleShowScrollBars`: `string`
     * * `NSNavRecentPlaces`: `array`
     * * `NSPreferredWebServices`: `dictionary`
     * * `NSUserDictionaryReplacementItems`: `array`
     *
     * @platform darwin
     */
    getUserDefault<Type extends keyof UserDefaultTypes>(key: string, type: Type): UserDefaultTypes[Type];
    /**
     * `true` if DWM composition (Aero Glass) is enabled, and `false` otherwise.
     *
     * An example of using it to determine if you should create a transparent window or
     * not (transparent windows won't work correctly when DWM composition is disabled):
     *
     * @platform win32
     */
    isAeroGlassEnabled(): boolean;
    /**
     * Whether the Swipe between pages setting is on.
     *
     * @platform darwin
     */
    isSwipeTrackingFromScrollEventsEnabled(): boolean;
    /**
     * `true` if the current process is a trusted accessibility client and `false` if
     * it is not.
     *
     * @platform darwin
     */
    isTrustedAccessibilityClient(prompt: boolean): boolean;
    /**
     * Posts `event` as native notifications of macOS. The `userInfo` is an Object that
     * contains the user information dictionary sent along with the notification.
     *
     * @platform darwin
     */
    postLocalNotification(event: string, userInfo: Record<string, any>): void;
    /**
     * Posts `event` as native notifications of macOS. The `userInfo` is an Object that
     * contains the user information dictionary sent along with the notification.
     *
     * @platform darwin
     */
    postNotification(event: string, userInfo: Record<string, any>, deliverImmediately?: boolean): void;
    /**
     * Posts `event` as native notifications of macOS. The `userInfo` is an Object that
     * contains the user information dictionary sent along with the notification.
     *
     * @platform darwin
     */
    postWorkspaceNotification(event: string, userInfo: Record<string, any>): void;
    /**
     * resolves if the user has successfully authenticated with Touch ID.
     *
     * This API itself will not protect your user data; rather, it is a mechanism to
     * allow you to do so. Native apps will need to set Access Control Constants like
     * `kSecAccessControlUserPresence` on their keychain entry so that reading it would
     * auto-prompt for Touch ID biometric consent. This could be done with
     * `node-keytar`, such that one would store an encryption key with `node-keytar`
     * and only fetch it if `promptTouchID()` resolves.
     *
     * @platform darwin
     */
    promptTouchID(reason: string): Promise<void>;
    /**
     * Add the specified defaults to your application's `NSUserDefaults`.
     *
     * @platform darwin
     */
    registerDefaults(defaults: Record<string, (string) | (boolean) | (number)>): void;
    /**
     * Removes the `key` in `NSUserDefaults`. This can be used to restore the default
     * or global value of a `key` previously set with `setUserDefault`.
     *
     * @platform darwin
     */
    removeUserDefault(key: string): void;
    /**
     * Set the value of `key` in `NSUserDefaults`.
     *
     * Note that `type` should match actual type of `value`. An exception is thrown if
     * they don't.
     *
     * Some popular `key` and `type`s are:
     *
     * * `ApplePressAndHoldEnabled`: `boolean`
     *
     * @platform darwin
     */
    setUserDefault<Type extends keyof UserDefaultTypes>(key: string, type: Type, value: UserDefaultTypes[Type]): void;
    /**
     * The ID of this subscription
     *
     * Same as `subscribeNotification`, but uses `NSNotificationCenter` for local
     * defaults. This is necessary for events such as
     * `NSUserDefaultsDidChangeNotification`.
     *
     * If `event` is null, the `NSNotificationCenter` doesn’t use it as criteria for
     * delivery to the observer. See docs for more information.
     *
     * @platform darwin
     */
    subscribeLocalNotification(event: (string) | (null), callback: (event: string, userInfo: Record<string, unknown>, object: string) => void): number;
    /**
     * The ID of this subscription
     *
     * Subscribes to native notifications of macOS, `callback` will be called with
     * `callback(event, userInfo)` when the corresponding `event` happens. The
     * `userInfo` is an Object that contains the user information dictionary sent along
     * with the notification. The `object` is the sender of the notification, and only
     * supports `NSString` values for now.
     *
     * The `id` of the subscriber is returned, which can be used to unsubscribe the
     * `event`.
     *
     * Under the hood this API subscribes to `NSDistributedNotificationCenter`, example
     * values of `event` are:
     *
     * * `AppleInterfaceThemeChangedNotification`
     * * `AppleAquaColorVariantChanged`
     * * `AppleColorPreferencesChangedNotification`
     * * `AppleShowScrollBarsSettingChanged`
     *
     * If `event` is null, the `NSDistributedNotificationCenter` doesn’t use it as
     * criteria for delivery to the observer. See docs  for more information.
     *
     * @platform darwin
     */
    subscribeNotification(event: (string) | (null), callback: (event: string, userInfo: Record<string, unknown>, object: string) => void): number;
    /**
     * The ID of this subscription
     *
     * Same as `subscribeNotification`, but uses
     * `NSWorkspace.sharedWorkspace.notificationCenter`. This is necessary for events
     * such as `NSWorkspaceDidActivateApplicationNotification`.
     *
     * If `event` is null, the `NSWorkspaceNotificationCenter` doesn’t use it as
     * criteria for delivery to the observer. See docs for more information.
     *
     * @platform darwin
     */
    subscribeWorkspaceNotification(event: (string) | (null), callback: (event: string, userInfo: Record<string, unknown>, object: string) => void): number;
    /**
     * Same as `unsubscribeNotification`, but removes the subscriber from
     * `NSNotificationCenter`.
     *
     * @platform darwin
     */
    unsubscribeLocalNotification(id: number): void;
    /**
     * Removes the subscriber with `id`.
     *
     * @platform darwin
     */
    unsubscribeNotification(id: number): void;
    /**
     * Same as `unsubscribeNotification`, but removes the subscriber from
     * `NSWorkspace.sharedWorkspace.notificationCenter`.
     *
     * @platform darwin
     */
    unsubscribeWorkspaceNotification(id: number): void;
    /**
     * A `boolean` property which determines whether the app avoids using
     * semitransparent backgrounds. This maps to
     * NSWorkspace.accessibilityDisplayShouldReduceTransparency
     *
     * @platform darwin
     */
    accessibilityDisplayShouldReduceTransparency(): boolean;
    /**
     * A `string` property that can be `dark`, `light` or `unknown`.
     *
     * Returns the macOS appearance setting that is currently applied to your
     * application, maps to NSApplication.effectiveAppearance
     *
     * @platform darwin
     */
    readonly effectiveAppearance: ('dark' | 'light' | 'unknown');
  }

  interface Task {

    // Docs: https://electronjs.org/docs/api/structures/task

    /**
     * The command line arguments when `program` is executed.
     */
    arguments: string;
    /**
     * Description of this task.
     */
    description: string;
    /**
     * The icon index in the icon file. If an icon file consists of two or more icons,
     * set this value to identify the icon. If an icon file consists of one icon, this
     * value is 0.
     */
    iconIndex: number;
    /**
     * The absolute path to an icon to be displayed in a JumpList, which can be an
     * arbitrary resource file that contains an icon. You can usually specify
     * `process.execPath` to show the icon of the program.
     */
    iconPath: string;
    /**
     * Path of the program to execute, usually you should specify `process.execPath`
     * which opens the current program.
     */
    program: string;
    /**
     * The string to be displayed in a JumpList.
     */
    title: string;
    /**
     * The working directory. Default is empty.
     */
    workingDirectory?: string;
  }

  interface ThumbarButton {

    // Docs: https://electronjs.org/docs/api/structures/thumbar-button

    click: () => void;
    /**
     * Control specific states and behaviors of the button. By default, it is
     * `['enabled']`.
     */
    flags?: string[];
    /**
     * The icon showing in thumbnail toolbar.
     */
    icon: NativeImage;
    /**
     * The text of the button's tooltip.
     */
    tooltip?: string;
  }

  class TouchBar {

    // Docs: https://electronjs.org/docs/api/touch-bar

    /**
     * TouchBar
     */
    constructor(options: TouchBarConstructorOptions);
    /**
     * A `TouchBarItem` that will replace the "esc" button on the touch bar when set.
     * Setting to `null` restores the default "esc" button. Changing this value
     * immediately updates the escape item in the touch bar.
     */
    escapeItem: (TouchBarButton | TouchBarColorPicker | TouchBarGroup | TouchBarLabel | TouchBarPopover | TouchBarScrubber | TouchBarSegmentedControl | TouchBarSlider | TouchBarSpacer | null);
    /**
     * A `typeof TouchBarButton` reference to the `TouchBarButton` class.
     */
    static TouchBarButton: typeof TouchBarButton;
    /**
     * A `typeof TouchBarColorPicker` reference to the `TouchBarColorPicker` class.
     */
    static TouchBarColorPicker: typeof TouchBarColorPicker;
    /**
     * A `typeof TouchBarGroup` reference to the `TouchBarGroup` class.
     */
    static TouchBarGroup: typeof TouchBarGroup;
    /**
     * A `typeof TouchBarLabel` reference to the `TouchBarLabel` class.
     */
    static TouchBarLabel: typeof TouchBarLabel;
    /**
     * A `typeof TouchBarOtherItemsProxy` reference to the `TouchBarOtherItemsProxy`
     * class.
     */
    static TouchBarOtherItemsProxy: typeof TouchBarOtherItemsProxy;
    /**
     * A `typeof TouchBarPopover` reference to the `TouchBarPopover` class.
     */
    static TouchBarPopover: typeof TouchBarPopover;
    /**
     * A `typeof TouchBarScrubber` reference to the `TouchBarScrubber` class.
     */
    static TouchBarScrubber: typeof TouchBarScrubber;
    /**
     * A `typeof TouchBarSegmentedControl` reference to the `TouchBarSegmentedControl`
     * class.
     */
    static TouchBarSegmentedControl: typeof TouchBarSegmentedControl;
    /**
     * A `typeof TouchBarSlider` reference to the `TouchBarSlider` class.
     */
    static TouchBarSlider: typeof TouchBarSlider;
    /**
     * A `typeof TouchBarSpacer` reference to the `TouchBarSpacer` class.
     */
    static TouchBarSpacer: typeof TouchBarSpacer;
  }

  class TouchBarButton {

    // Docs: https://electronjs.org/docs/api/touch-bar-button

    /**
     * TouchBarButton
     */
    constructor(options: TouchBarButtonConstructorOptions);
    /**
     * A `string` representing the description of the button to be read by a screen
     * reader. Will only be read by screen readers if no label is set.
     */
    accessibilityLabel: string;
    /**
     * A `string` hex code representing the button's current background color. Changing
     * this value immediately updates the button in the touch bar.
     */
    backgroundColor: string;
    /**
     * A `boolean` representing whether the button is in an enabled state.
     */
    enabled: boolean;
    /**
     * A `NativeImage` representing the button's current icon. Changing this value
     * immediately updates the button in the touch bar.
     */
    icon: NativeImage;
    /**
     * A `string` - Can be `left`, `right` or `overlay`.  Defaults to `overlay`.
     */
    iconPosition: ('left' | 'right' | 'overlay');
    /**
     * A `string` representing the button's current text. Changing this value
     * immediately updates the button in the touch bar.
     */
    label: string;
  }

  class TouchBarColorPicker extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-color-picker

    /**
     * TouchBarColorPicker
     */
    constructor(options: TouchBarColorPickerConstructorOptions);
    /**
     * A `string[]` array representing the color picker's available colors to select.
     * Changing this value immediately updates the color picker in the touch bar.
     */
    availableColors: string[];
    /**
     * A `string` hex code representing the color picker's currently selected color.
     * Changing this value immediately updates the color picker in the touch bar.
     */
    selectedColor: string;
  }

  class TouchBarGroup extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-group

    /**
     * TouchBarGroup
     */
    constructor(options: TouchBarGroupConstructorOptions);
  }

  class TouchBarLabel extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-label

    /**
     * TouchBarLabel
     */
    constructor(options: TouchBarLabelConstructorOptions);
    /**
     * A `string` representing the description of the label to be read by a screen
     * reader.
     */
    accessibilityLabel: string;
    /**
     * A `string` representing the label's current text. Changing this value
     * immediately updates the label in the touch bar.
     */
    label: string;
    /**
     * A `string` hex code representing the label's current text color. Changing this
     * value immediately updates the label in the touch bar.
     */
    textColor: string;
  }

  class TouchBarOtherItemsProxy extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-other-items-proxy

    /**
     * TouchBarOtherItemsProxy
     */
    constructor();
  }

  class TouchBarPopover extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-popover

    /**
     * TouchBarPopover
     */
    constructor(options: TouchBarPopoverConstructorOptions);
    /**
     * A `NativeImage` representing the popover's current button icon. Changing this
     * value immediately updates the popover in the touch bar.
     */
    icon: NativeImage;
    /**
     * A `string` representing the popover's current button text. Changing this value
     * immediately updates the popover in the touch bar.
     */
    label: string;
  }

  class TouchBarScrubber extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-scrubber

    /**
     * TouchBarScrubber
     */
    constructor(options: TouchBarScrubberConstructorOptions);
    /**
     * A `boolean` representing whether this scrubber is continuous or not. Updating
     * this value immediately updates the control in the touch bar.
     */
    continuous: boolean;
    /**
     * A `ScrubberItem[]` array representing the items in this scrubber. Updating this
     * value immediately updates the control in the touch bar. Updating deep properties
     * inside this array **does not update the touch bar**.
     */
    items: ScrubberItem[];
    /**
     * A `string` representing the mode of this scrubber. Updating this value
     * immediately updates the control in the touch bar. Possible values:
     *
     * * `fixed` - Maps to `NSScrubberModeFixed`.
     * * `free` - Maps to `NSScrubberModeFree`.
     */
    mode: ('fixed' | 'free');
    /**
     * A `string` representing the style that selected items in the scrubber should
     * have. This style is overlayed on top of the scrubber item instead of being
     * placed behind it. Updating this value immediately updates the control in the
     * touch bar. Possible values:
     *
     * * `background` - Maps to `[NSScrubberSelectionStyle roundedBackgroundStyle]`.
     * * `outline` - Maps to `[NSScrubberSelectionStyle outlineOverlayStyle]`.
     * * `none` - Removes all styles.
     */
    overlayStyle: ('background' | 'outline' | 'none');
    /**
     * A `string` representing the style that selected items in the scrubber should
     * have. Updating this value immediately updates the control in the touch bar.
     * Possible values:
     *
     * * `background` - Maps to `[NSScrubberSelectionStyle roundedBackgroundStyle]`.
     * * `outline` - Maps to `[NSScrubberSelectionStyle outlineOverlayStyle]`.
     * * `none` - Removes all styles.
     */
    selectedStyle: ('background' | 'outline' | 'none');
    /**
     * A `boolean` representing whether to show the left / right selection arrows in
     * this scrubber. Updating this value immediately updates the control in the touch
     * bar.
     */
    showArrowButtons: boolean;
  }

  class TouchBarSegmentedControl extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-segmented-control

    /**
     * TouchBarSegmentedControl
     */
    constructor(options: TouchBarSegmentedControlConstructorOptions);
    /**
     * A `string` representing the current selection mode of the control.  Can be
     * `single`, `multiple` or `buttons`.
     */
    mode: ('single' | 'multiple' | 'buttons');
    /**
     * A `SegmentedControlSegment[]` array representing the segments in this control.
     * Updating this value immediately updates the control in the touch bar. Updating
     * deep properties inside this array **does not update the touch bar**.
     */
    segments: SegmentedControlSegment[];
    /**
     * A `string` representing the controls current segment style. Updating this value
     * immediately updates the control in the touch bar.
     */
    segmentStyle: string;
    /**
     * An `Integer` representing the currently selected segment. Changing this value
     * immediately updates the control in the touch bar. User interaction with the
     * touch bar will update this value automatically.
     */
    selectedIndex: number;
  }

  class TouchBarSlider extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-slider

    /**
     * TouchBarSlider
     */
    constructor(options: TouchBarSliderConstructorOptions);
    /**
     * A `string` representing the slider's current text. Changing this value
     * immediately updates the slider in the touch bar.
     */
    label: string;
    /**
     * A `number` representing the slider's current maximum value. Changing this value
     * immediately updates the slider in the touch bar.
     */
    maxValue: number;
    /**
     * A `number` representing the slider's current minimum value. Changing this value
     * immediately updates the slider in the touch bar.
     */
    minValue: number;
    /**
     * A `number` representing the slider's current value. Changing this value
     * immediately updates the slider in the touch bar.
     */
    value: number;
  }

  class TouchBarSpacer extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/touch-bar-spacer

    /**
     * TouchBarSpacer
     */
    constructor(options: TouchBarSpacerConstructorOptions);
    /**
     * A `string` representing the size of the spacer.  Can be `small`, `large` or
     * `flexible`.
     */
    size: ('small' | 'large' | 'flexible');
  }

  interface TraceCategoriesAndOptions {

    // Docs: https://electronjs.org/docs/api/structures/trace-categories-and-options

    /**
     * A filter to control what category groups should be traced. A filter can have an
     * optional '-' prefix to exclude category groups that contain a matching category.
     * Having both included and excluded category patterns in the same list is not
     * supported. Examples: `test_MyTest*`, `test_MyTest*,test_OtherStuff`,
     * `-excluded_category1,-excluded_category2`.
     */
    categoryFilter: string;
    /**
     * Controls what kind of tracing is enabled, it is a comma-delimited sequence of
     * the following strings: `record-until-full`, `record-continuously`,
     * `trace-to-console`, `enable-sampling`, `enable-systrace`, e.g.
     * `'record-until-full,enable-sampling'`. The first 3 options are trace recording
     * modes and hence mutually exclusive. If more than one trace recording modes
     * appear in the `traceOptions` string, the last one takes precedence. If none of
     * the trace recording modes are specified, recording mode is `record-until-full`.
     * The trace option will first be reset to the default option (`record_mode` set to
     * `record-until-full`, `enable_sampling` and `enable_systrace` set to `false`)
     * before options parsed from `traceOptions` are applied on it.
     */
    traceOptions: string;
  }

  interface TraceConfig {

    // Docs: https://electronjs.org/docs/api/structures/trace-config

    /**
     * if true, filter event data according to a specific list of events that have been
     * manually vetted to not include any PII. See the implementation in Chromium for
     * specifics.
     */
    enable_argument_filter?: boolean;
    /**
     * a list of tracing categories to exclude. Can include glob-like patterns using
     * `*` at the end of the category name. See tracing categories for the list of
     * categories.
     */
    excluded_categories?: string[];
    /**
     * a list of histogram names to report with the trace.
     */
    histogram_names?: string[];
    /**
     * a list of tracing categories to include. Can include glob-like patterns using
     * `*` at the end of the category name. See tracing categories for the list of
     * categories.
     */
    included_categories?: string[];
    /**
     * a list of process IDs to include in the trace. If not specified, trace all
     * processes.
     */
    included_process_ids?: number[];
    /**
     * if the `disabled-by-default-memory-infra` category is enabled, this contains
     * optional additional configuration for data collection. See the Chromium
     * memory-infra docs for more information.
     */
    memory_dump_config?: Record<string, any>;
    /**
     * Can be `record-until-full`, `record-continuously`, `record-as-much-as-possible`
     * or `trace-to-console`. Defaults to `record-until-full`.
     */
    recording_mode?: ('record-until-full' | 'record-continuously' | 'record-as-much-as-possible' | 'trace-to-console');
    /**
     * maximum size of the trace recording buffer in events.
     */
    trace_buffer_size_in_events?: number;
    /**
     * maximum size of the trace recording buffer in kilobytes. Defaults to 100MB.
     */
    trace_buffer_size_in_kb?: number;
  }

  interface Transaction {

    // Docs: https://electronjs.org/docs/api/structures/transaction

    /**
     * The error code if an error occurred while processing the transaction.
     */
    errorCode: number;
    /**
     * The error message if an error occurred while processing the transaction.
     */
    errorMessage: string;
    /**
     * The identifier of the restored transaction by the App Store.
     */
    originalTransactionIdentifier: string;
    payment: Payment;
    /**
     * The date the transaction was added to the App Store’s payment queue.
     */
    transactionDate: string;
    /**
     * A string that uniquely identifies a successful payment transaction.
     */
    transactionIdentifier: string;
    /**
     * The transaction state, can be `purchasing`, `purchased`, `failed`, `restored` or
     * `deferred`.
     */
    transactionState: ('purchasing' | 'purchased' | 'failed' | 'restored' | 'deferred');
  }

  class Tray extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/tray

    /**
     * Emitted when the tray balloon is clicked.
     *
     * @platform win32
     */
    on(event: 'balloon-click', listener: Function): this;
    /**
     * @platform win32
     */
    off(event: 'balloon-click', listener: Function): this;
    /**
     * @platform win32
     */
    once(event: 'balloon-click', listener: Function): this;
    /**
     * @platform win32
     */
    addListener(event: 'balloon-click', listener: Function): this;
    /**
     * @platform win32
     */
    removeListener(event: 'balloon-click', listener: Function): this;
    /**
     * Emitted when the tray balloon is closed because of timeout or user manually
     * closes it.
     *
     * @platform win32
     */
    on(event: 'balloon-closed', listener: Function): this;
    /**
     * @platform win32
     */
    off(event: 'balloon-closed', listener: Function): this;
    /**
     * @platform win32
     */
    once(event: 'balloon-closed', listener: Function): this;
    /**
     * @platform win32
     */
    addListener(event: 'balloon-closed', listener: Function): this;
    /**
     * @platform win32
     */
    removeListener(event: 'balloon-closed', listener: Function): this;
    /**
     * Emitted when the tray balloon shows.
     *
     * @platform win32
     */
    on(event: 'balloon-show', listener: Function): this;
    /**
     * @platform win32
     */
    off(event: 'balloon-show', listener: Function): this;
    /**
     * @platform win32
     */
    once(event: 'balloon-show', listener: Function): this;
    /**
     * @platform win32
     */
    addListener(event: 'balloon-show', listener: Function): this;
    /**
     * @platform win32
     */
    removeListener(event: 'balloon-show', listener: Function): this;
    /**
     * Emitted when the tray icon is clicked.
     *
     * Note that on Linux this event is emitted when the tray icon receives an
     * activation, which might not necessarily be left mouse click.
     */
    on(event: 'click', listener: (event: KeyboardEvent,
                                  /**
                                   * The bounds of tray icon.
                                   */
                                  bounds: Rectangle,
                                  /**
                                   * The position of the event.
                                   */
                                  position: Point) => void): this;
    off(event: 'click', listener: (event: KeyboardEvent,
                                  /**
                                   * The bounds of tray icon.
                                   */
                                  bounds: Rectangle,
                                  /**
                                   * The position of the event.
                                   */
                                  position: Point) => void): this;
    once(event: 'click', listener: (event: KeyboardEvent,
                                  /**
                                   * The bounds of tray icon.
                                   */
                                  bounds: Rectangle,
                                  /**
                                   * The position of the event.
                                   */
                                  position: Point) => void): this;
    addListener(event: 'click', listener: (event: KeyboardEvent,
                                  /**
                                   * The bounds of tray icon.
                                   */
                                  bounds: Rectangle,
                                  /**
                                   * The position of the event.
                                   */
                                  position: Point) => void): this;
    removeListener(event: 'click', listener: (event: KeyboardEvent,
                                  /**
                                   * The bounds of tray icon.
                                   */
                                  bounds: Rectangle,
                                  /**
                                   * The position of the event.
                                   */
                                  position: Point) => void): this;
    /**
     * Emitted when the tray icon is double clicked.
     *
     * @platform darwin,win32
     */
    on(event: 'double-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'double-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'double-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'double-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'double-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * Emitted when a drag operation ends on the tray or ends at another location.
     *
     * @platform darwin
     */
    on(event: 'drag-end', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'drag-end', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'drag-end', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'drag-end', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'drag-end', listener: Function): this;
    /**
     * Emitted when a drag operation enters the tray icon.
     *
     * @platform darwin
     */
    on(event: 'drag-enter', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'drag-enter', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'drag-enter', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'drag-enter', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'drag-enter', listener: Function): this;
    /**
     * Emitted when a drag operation exits the tray icon.
     *
     * @platform darwin
     */
    on(event: 'drag-leave', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'drag-leave', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'drag-leave', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'drag-leave', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'drag-leave', listener: Function): this;
    /**
     * Emitted when any dragged items are dropped on the tray icon.
     *
     * @platform darwin
     */
    on(event: 'drop', listener: Function): this;
    /**
     * @platform darwin
     */
    off(event: 'drop', listener: Function): this;
    /**
     * @platform darwin
     */
    once(event: 'drop', listener: Function): this;
    /**
     * @platform darwin
     */
    addListener(event: 'drop', listener: Function): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'drop', listener: Function): this;
    /**
     * Emitted when dragged files are dropped in the tray icon.
     *
     * @platform darwin
     */
    on(event: 'drop-files', listener: (event: Event,
                                       /**
                                        * The paths of the dropped files.
                                        */
                                       files: string[]) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'drop-files', listener: (event: Event,
                                       /**
                                        * The paths of the dropped files.
                                        */
                                       files: string[]) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'drop-files', listener: (event: Event,
                                       /**
                                        * The paths of the dropped files.
                                        */
                                       files: string[]) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'drop-files', listener: (event: Event,
                                       /**
                                        * The paths of the dropped files.
                                        */
                                       files: string[]) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'drop-files', listener: (event: Event,
                                       /**
                                        * The paths of the dropped files.
                                        */
                                       files: string[]) => void): this;
    /**
     * Emitted when dragged text is dropped in the tray icon.
     *
     * @platform darwin
     */
    on(event: 'drop-text', listener: (event: Event,
                                      /**
                                       * the dropped text string.
                                       */
                                      text: string) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'drop-text', listener: (event: Event,
                                      /**
                                       * the dropped text string.
                                       */
                                      text: string) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'drop-text', listener: (event: Event,
                                      /**
                                       * the dropped text string.
                                       */
                                      text: string) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'drop-text', listener: (event: Event,
                                      /**
                                       * the dropped text string.
                                       */
                                      text: string) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'drop-text', listener: (event: Event,
                                      /**
                                       * the dropped text string.
                                       */
                                      text: string) => void): this;
    /**
     * Emitted when the tray icon is middle clicked.
     *
     * @platform win32
     */
    on(event: 'middle-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * @platform win32
     */
    off(event: 'middle-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * @platform win32
     */
    once(event: 'middle-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * @platform win32
     */
    addListener(event: 'middle-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * @platform win32
     */
    removeListener(event: 'middle-click', listener: (event: KeyboardEvent,
                                         /**
                                          * The bounds of tray icon.
                                          */
                                         bounds: Rectangle) => void): this;
    /**
     * Emitted when the mouse clicks the tray icon.
     *
     * @platform darwin
     */
    on(event: 'mouse-down', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'mouse-down', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'mouse-down', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'mouse-down', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'mouse-down', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * Emitted when the mouse enters the tray icon.
     *
     * @platform darwin,win32
     */
    on(event: 'mouse-enter', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'mouse-enter', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'mouse-enter', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'mouse-enter', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'mouse-enter', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * Emitted when the mouse exits the tray icon.
     *
     * @platform darwin,win32
     */
    on(event: 'mouse-leave', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'mouse-leave', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'mouse-leave', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'mouse-leave', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'mouse-leave', listener: (event: KeyboardEvent,
                                        /**
                                         * The position of the event.
                                         */
                                        position: Point) => void): this;
    /**
     * Emitted when the mouse moves in the tray icon.
     *
     * @platform darwin,win32
     */
    on(event: 'mouse-move', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'mouse-move', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'mouse-move', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'mouse-move', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'mouse-move', listener: (event: KeyboardEvent,
                                       /**
                                        * The position of the event.
                                        */
                                       position: Point) => void): this;
    /**
     * Emitted when the mouse is released from clicking the tray icon.
     *
     * Note: This will not be emitted if you have set a context menu for your Tray
     * using `tray.setContextMenu`, as a result of macOS-level constraints.
     *
     * @platform darwin
     */
    on(event: 'mouse-up', listener: (event: KeyboardEvent,
                                     /**
                                      * The position of the event.
                                      */
                                     position: Point) => void): this;
    /**
     * @platform darwin
     */
    off(event: 'mouse-up', listener: (event: KeyboardEvent,
                                     /**
                                      * The position of the event.
                                      */
                                     position: Point) => void): this;
    /**
     * @platform darwin
     */
    once(event: 'mouse-up', listener: (event: KeyboardEvent,
                                     /**
                                      * The position of the event.
                                      */
                                     position: Point) => void): this;
    /**
     * @platform darwin
     */
    addListener(event: 'mouse-up', listener: (event: KeyboardEvent,
                                     /**
                                      * The position of the event.
                                      */
                                     position: Point) => void): this;
    /**
     * @platform darwin
     */
    removeListener(event: 'mouse-up', listener: (event: KeyboardEvent,
                                     /**
                                      * The position of the event.
                                      */
                                     position: Point) => void): this;
    /**
     * Emitted when the tray icon is right clicked.
     *
     * @platform darwin,win32
     */
    on(event: 'right-click', listener: (event: KeyboardEvent,
                                        /**
                                         * The bounds of tray icon.
                                         */
                                        bounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    off(event: 'right-click', listener: (event: KeyboardEvent,
                                        /**
                                         * The bounds of tray icon.
                                         */
                                        bounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    once(event: 'right-click', listener: (event: KeyboardEvent,
                                        /**
                                         * The bounds of tray icon.
                                         */
                                        bounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    addListener(event: 'right-click', listener: (event: KeyboardEvent,
                                        /**
                                         * The bounds of tray icon.
                                         */
                                        bounds: Rectangle) => void): this;
    /**
     * @platform darwin,win32
     */
    removeListener(event: 'right-click', listener: (event: KeyboardEvent,
                                        /**
                                         * The bounds of tray icon.
                                         */
                                        bounds: Rectangle) => void): this;
    /**
     * Tray
     */
    constructor(image: (NativeImage) | (string), guid?: string);
    /**
     * Closes an open context menu, as set by `tray.setContextMenu()`.
     *
     * @platform darwin,win32
     */
    closeContextMenu(): void;
    /**
     * Destroys the tray icon immediately.
     */
    destroy(): void;
    /**
     * Displays a tray balloon.
     *
     * @platform win32
     */
    displayBalloon(options: DisplayBalloonOptions): void;
    /**
     * Returns focus to the taskbar notification area. Notification area icons should
     * use this message when they have completed their UI operation. For example, if
     * the icon displays a shortcut menu, but the user presses ESC to cancel it, use
     * `tray.focus()` to return focus to the notification area.
     *
     * @platform win32
     */
    focus(): void;
    /**
     * The `bounds` of this tray icon as `Object`.
     *
     * @platform darwin,win32
     */
    getBounds(): Rectangle;
    /**
     * Whether double click events will be ignored.
     *
     * @platform darwin
     */
    getIgnoreDoubleClickEvents(): boolean;
    /**
     * the title displayed next to the tray icon in the status bar
     *
     * @platform darwin
     */
    getTitle(): string;
    /**
     * Whether the tray icon is destroyed.
     */
    isDestroyed(): boolean;
    /**
     * Pops up the context menu of the tray icon. When `menu` is passed, the `menu`
     * will be shown instead of the tray icon's context menu.
     *
     * The `position` is only available on Windows, and it is (0, 0) by default.
     *
     * @platform darwin,win32
     */
    popUpContextMenu(menu?: Menu, position?: Point): void;
    /**
     * Removes a tray balloon.
     *
     * @platform win32
     */
    removeBalloon(): void;
    /**
     * Sets the context menu for this icon.
     */
    setContextMenu(menu: (Menu) | (null)): void;
    /**
     * Sets the option to ignore double click events. Ignoring these events allows you
     * to detect every individual click of the tray icon.
     *
     * This value is set to false by default.
     *
     * @platform darwin
     */
    setIgnoreDoubleClickEvents(ignore: boolean): void;
    /**
     * Sets the `image` associated with this tray icon.
     */
    setImage(image: (NativeImage) | (string)): void;
    /**
     * Sets the `image` associated with this tray icon when pressed on macOS.
     *
     * @platform darwin
     */
    setPressedImage(image: (NativeImage) | (string)): void;
    /**
     * Sets the title displayed next to the tray icon in the status bar (Support ANSI
     * colors).
     *
     * @platform darwin
     */
    setTitle(title: string, options?: TitleOptions): void;
    /**
     * Sets the hover text for this tray icon.
     */
    setToolTip(toolTip: string): void;
  }

  interface UploadData {

    // Docs: https://electronjs.org/docs/api/structures/upload-data

    /**
     * UUID of blob data. Use ses.getBlobData method to retrieve the data.
     */
    blobUUID?: string;
    /**
     * Content being sent.
     */
    bytes: Buffer;
    /**
     * Path of file being uploaded.
     */
    file?: string;
  }

  interface UploadFile {

    // Docs: https://electronjs.org/docs/api/structures/upload-file

    /**
     * Path of file to be uploaded.
     */
    filePath: string;
    /**
     * Number of bytes to read from `offset`. Defaults to `0`.
     */
    length?: number;
    /**
     * Last Modification time in number of seconds since the UNIX epoch. Defaults to
     * `0`.
     */
    modificationTime?: number;
    /**
     * Defaults to `0`.
     */
    offset?: number;
    /**
     * `file`.
     */
    type: 'file';
  }

  interface UploadRawData {

    // Docs: https://electronjs.org/docs/api/structures/upload-raw-data

    /**
     * Data to be uploaded.
     */
    bytes: Buffer;
    /**
     * `rawData`.
     */
    type: 'rawData';
  }

  interface USBDevice {

    // Docs: https://electronjs.org/docs/api/structures/usb-device

    /**
     * The device class for the communication interface supported by the device
     */
    deviceClass: number;
    /**
     * Unique identifier for the device.
     */
    deviceId: string;
    /**
     * The device protocol for the communication interface supported by the device
     */
    deviceProtocol: number;
    /**
     * The device subclass for the communication interface supported by the device
     */
    deviceSubclass: number;
    /**
     * The major version number of the device as defined by the device manufacturer.
     */
    deviceVersionMajor: number;
    /**
     * The minor version number of the device as defined by the device manufacturer.
     */
    deviceVersionMinor: number;
    /**
     * The subminor version number of the device as defined by the device manufacturer.
     */
    deviceVersionSubminor: number;
    /**
     * The manufacturer name of the device.
     */
    manufacturerName?: string;
    /**
     * The USB product ID.
     */
    productId: number;
    /**
     * Name of the device.
     */
    productName?: string;
    /**
     * The USB device serial number.
     */
    serialNumber?: string;
    /**
     * The USB protocol major version supported by the device
     */
    usbVersionMajor: number;
    /**
     * The USB protocol minor version supported by the device
     */
    usbVersionMinor: number;
    /**
     * The USB protocol subminor version supported by the device
     */
    usbVersionSubminor: number;
    /**
     * The USB vendor ID.
     */
    vendorId: number;
  }

  interface UserDefaultTypes {

    // Docs: https://electronjs.org/docs/api/structures/user-default-types

    array: Array<unknown>;
    boolean: boolean;
    dictionary: Record<string, unknown>;
    double: number;
    float: number;
    integer: number;
    string: string;
    url: string;
  }

  class UtilityProcess extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/utility-process

    static fork(modulePath: string, args?: string[], options?: ForkOptions): UtilityProcess;
    /**
     * Emitted after the child process ends.
     */
    on(event: 'exit', listener: (
                                 /**
                                  * Contains the exit code for the process obtained from waitpid on posix, or
                                  * GetExitCodeProcess on windows.
                                  */
                                 code: number) => void): this;
    off(event: 'exit', listener: (
                                 /**
                                  * Contains the exit code for the process obtained from waitpid on posix, or
                                  * GetExitCodeProcess on windows.
                                  */
                                 code: number) => void): this;
    once(event: 'exit', listener: (
                                 /**
                                  * Contains the exit code for the process obtained from waitpid on posix, or
                                  * GetExitCodeProcess on windows.
                                  */
                                 code: number) => void): this;
    addListener(event: 'exit', listener: (
                                 /**
                                  * Contains the exit code for the process obtained from waitpid on posix, or
                                  * GetExitCodeProcess on windows.
                                  */
                                 code: number) => void): this;
    removeListener(event: 'exit', listener: (
                                 /**
                                  * Contains the exit code for the process obtained from waitpid on posix, or
                                  * GetExitCodeProcess on windows.
                                  */
                                 code: number) => void): this;
    /**
     * Emitted when the child process sends a message using
     * `process.parentPort.postMessage()`.
     */
    on(event: 'message', listener: (message: any) => void): this;
    off(event: 'message', listener: (message: any) => void): this;
    once(event: 'message', listener: (message: any) => void): this;
    addListener(event: 'message', listener: (message: any) => void): this;
    removeListener(event: 'message', listener: (message: any) => void): this;
    /**
     * Emitted once the child process has spawned successfully.
     */
    on(event: 'spawn', listener: Function): this;
    off(event: 'spawn', listener: Function): this;
    once(event: 'spawn', listener: Function): this;
    addListener(event: 'spawn', listener: Function): this;
    removeListener(event: 'spawn', listener: Function): this;
    /**
     * Terminates the process gracefully. On POSIX, it uses SIGTERM but will ensure the
     * process is reaped on exit. This function returns true if the kill is successful,
     * and false otherwise.
     */
    kill(): boolean;
    /**
     * Send a message to the child process, optionally transferring ownership of zero
     * or more `MessagePortMain` objects.
     *
     * For example:
     */
    postMessage(message: any, transfer?: MessagePortMain[]): void;
    /**
     * A `Integer | undefined` representing the process identifier (PID) of the child
     * process. If the child process fails to spawn due to errors, then the value is
     * `undefined`. When the child process exits, then the value is `undefined` after
     * the `exit` event is emitted.
     */
    pid: (number) | (undefined);
    /**
     * A `NodeJS.ReadableStream | null` that represents the child process's stderr. If
     * the child was spawned with options.stdio[2] set to anything other than 'pipe',
     * then this will be `null`. When the child process exits, then the value is `null`
     * after the `exit` event is emitted.
     */
    stderr: (NodeJS.ReadableStream) | (null);
    /**
     * A `NodeJS.ReadableStream | null` that represents the child process's stdout. If
     * the child was spawned with options.stdio[1] set to anything other than 'pipe',
     * then this will be `null`. When the child process exits, then the value is `null`
     * after the `exit` event is emitted.
     */
    stdout: (NodeJS.ReadableStream) | (null);
  }

  class WebContents extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/web-contents

    /**
     * A WebContents instance with the given TargetID, or `undefined` if there is no
     * WebContents associated with the given TargetID.
     *
     * When communicating with the Chrome DevTools Protocol, it can be useful to lookup
     * a WebContents instance based on its assigned TargetID.
     */
    static fromDevToolsTargetId(targetId: string): (WebContents) | (undefined);
    /**
     * A WebContents instance with the given WebFrameMain, or `undefined` if there is
     * no WebContents associated with the given WebFrameMain.
     */
    static fromFrame(frame: WebFrameMain): (WebContents) | (undefined);
    /**
     * A WebContents instance with the given ID, or `undefined` if there is no
     * WebContents associated with the given ID.
     */
    static fromId(id: number): (WebContents) | (undefined);
    /**
     * An array of all `WebContents` instances. This will contain web contents for all
     * windows, webviews, opened devtools, and devtools extension background pages.
     */
    static getAllWebContents(): WebContents[];
    /**
     * The web contents that is focused in this application, otherwise returns `null`.
     */
    static getFocusedWebContents(): (WebContents) | (null);
    /**
     * Emitted when media becomes audible or inaudible.
     */
    on(event: 'audio-state-changed', listener: (event: Event<WebContentsAudioStateChangedEventParams>) => void): this;
    off(event: 'audio-state-changed', listener: (event: Event<WebContentsAudioStateChangedEventParams>) => void): this;
    once(event: 'audio-state-changed', listener: (event: Event<WebContentsAudioStateChangedEventParams>) => void): this;
    addListener(event: 'audio-state-changed', listener: (event: Event<WebContentsAudioStateChangedEventParams>) => void): this;
    removeListener(event: 'audio-state-changed', listener: (event: Event<WebContentsAudioStateChangedEventParams>) => void): this;
    /**
     * Emitted before dispatching the `keydown` and `keyup` events in the page. Calling
     * `event.preventDefault` will prevent the page `keydown`/`keyup` events and the
     * menu shortcuts.
     *
     * To only prevent the menu shortcuts, use `setIgnoreMenuShortcuts`:
     */
    on(event: 'before-input-event', listener: (event: Event,
                                               /**
                                                * Input properties.
                                                */
                                               input: Input) => void): this;
    off(event: 'before-input-event', listener: (event: Event,
                                               /**
                                                * Input properties.
                                                */
                                               input: Input) => void): this;
    once(event: 'before-input-event', listener: (event: Event,
                                               /**
                                                * Input properties.
                                                */
                                               input: Input) => void): this;
    addListener(event: 'before-input-event', listener: (event: Event,
                                               /**
                                                * Input properties.
                                                */
                                               input: Input) => void): this;
    removeListener(event: 'before-input-event', listener: (event: Event,
                                               /**
                                                * Input properties.
                                                */
                                               input: Input) => void): this;
    /**
     * Emitted when the `WebContents` loses focus.
     */
    on(event: 'blur', listener: Function): this;
    off(event: 'blur', listener: Function): this;
    once(event: 'blur', listener: Function): this;
    addListener(event: 'blur', listener: Function): this;
    removeListener(event: 'blur', listener: Function): this;
    /**
     * Emitted when failed to verify the `certificate` for `url`.
     *
     * The usage is the same with the `certificate-error` event of `app`.
     */
    on(event: 'certificate-error', listener: (event: Event,
                                              url: string,
                                              /**
                                               * The error code.
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    off(event: 'certificate-error', listener: (event: Event,
                                              url: string,
                                              /**
                                               * The error code.
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    once(event: 'certificate-error', listener: (event: Event,
                                              url: string,
                                              /**
                                               * The error code.
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    addListener(event: 'certificate-error', listener: (event: Event,
                                              url: string,
                                              /**
                                               * The error code.
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    removeListener(event: 'certificate-error', listener: (event: Event,
                                              url: string,
                                              /**
                                               * The error code.
                                               */
                                              error: string,
                                              certificate: Certificate,
                                              callback: (isTrusted: boolean) => void,
                                              isMainFrame: boolean) => void): this;
    /**
     * Emitted when the associated window logs a console message.
     */
    on(event: 'console-message', listener: (event: Event,
                                            /**
                                             * The log level, from 0 to 3. In order it matches `verbose`, `info`, `warning` and
                                             * `error`.
                                             */
                                            level: number,
                                            /**
                                             * The actual console message
                                             */
                                            message: string,
                                            /**
                                             * The line number of the source that triggered this console message
                                             */
                                            line: number,
                                            sourceId: string) => void): this;
    off(event: 'console-message', listener: (event: Event,
                                            /**
                                             * The log level, from 0 to 3. In order it matches `verbose`, `info`, `warning` and
                                             * `error`.
                                             */
                                            level: number,
                                            /**
                                             * The actual console message
                                             */
                                            message: string,
                                            /**
                                             * The line number of the source that triggered this console message
                                             */
                                            line: number,
                                            sourceId: string) => void): this;
    once(event: 'console-message', listener: (event: Event,
                                            /**
                                             * The log level, from 0 to 3. In order it matches `verbose`, `info`, `warning` and
                                             * `error`.
                                             */
                                            level: number,
                                            /**
                                             * The actual console message
                                             */
                                            message: string,
                                            /**
                                             * The line number of the source that triggered this console message
                                             */
                                            line: number,
                                            sourceId: string) => void): this;
    addListener(event: 'console-message', listener: (event: Event,
                                            /**
                                             * The log level, from 0 to 3. In order it matches `verbose`, `info`, `warning` and
                                             * `error`.
                                             */
                                            level: number,
                                            /**
                                             * The actual console message
                                             */
                                            message: string,
                                            /**
                                             * The line number of the source that triggered this console message
                                             */
                                            line: number,
                                            sourceId: string) => void): this;
    removeListener(event: 'console-message', listener: (event: Event,
                                            /**
                                             * The log level, from 0 to 3. In order it matches `verbose`, `info`, `warning` and
                                             * `error`.
                                             */
                                            level: number,
                                            /**
                                             * The actual console message
                                             */
                                            message: string,
                                            /**
                                             * The line number of the source that triggered this console message
                                             */
                                            line: number,
                                            sourceId: string) => void): this;
    /**
     * Emitted when the page calls `window.moveTo`, `window.resizeTo` or related APIs.
     *
     * By default, this will move the window. To prevent that behavior, call
     * `event.preventDefault()`.
     */
    on(event: 'content-bounds-updated', listener: (event: Event,
                                                   /**
                                                    * requested new content bounds
                                                    */
                                                   bounds: Rectangle) => void): this;
    off(event: 'content-bounds-updated', listener: (event: Event,
                                                   /**
                                                    * requested new content bounds
                                                    */
                                                   bounds: Rectangle) => void): this;
    once(event: 'content-bounds-updated', listener: (event: Event,
                                                   /**
                                                    * requested new content bounds
                                                    */
                                                   bounds: Rectangle) => void): this;
    addListener(event: 'content-bounds-updated', listener: (event: Event,
                                                   /**
                                                    * requested new content bounds
                                                    */
                                                   bounds: Rectangle) => void): this;
    removeListener(event: 'content-bounds-updated', listener: (event: Event,
                                                   /**
                                                    * requested new content bounds
                                                    */
                                                   bounds: Rectangle) => void): this;
    /**
     * Emitted when there is a new context menu that needs to be handled.
     */
    on(event: 'context-menu', listener: (event: Event,
                                         params: ContextMenuParams) => void): this;
    off(event: 'context-menu', listener: (event: Event,
                                         params: ContextMenuParams) => void): this;
    once(event: 'context-menu', listener: (event: Event,
                                         params: ContextMenuParams) => void): this;
    addListener(event: 'context-menu', listener: (event: Event,
                                         params: ContextMenuParams) => void): this;
    removeListener(event: 'context-menu', listener: (event: Event,
                                         params: ContextMenuParams) => void): this;
    /**
     * Emitted when the cursor's type changes. The `type` parameter can be `pointer`,
     * `crosshair`, `hand`, `text`, `wait`, `help`, `e-resize`, `n-resize`,
     * `ne-resize`, `nw-resize`, `s-resize`, `se-resize`, `sw-resize`, `w-resize`,
     * `ns-resize`, `ew-resize`, `nesw-resize`, `nwse-resize`, `col-resize`,
     * `row-resize`, `m-panning`, `m-panning-vertical`, `m-panning-horizontal`,
     * `e-panning`, `n-panning`, `ne-panning`, `nw-panning`, `s-panning`, `se-panning`,
     * `sw-panning`, `w-panning`, `move`, `vertical-text`, `cell`, `context-menu`,
     * `alias`, `progress`, `nodrop`, `copy`, `none`, `not-allowed`, `zoom-in`,
     * `zoom-out`, `grab`, `grabbing`, `custom`, `null`, `drag-drop-none`,
     * `drag-drop-move`, `drag-drop-copy`, `drag-drop-link`, `ns-no-resize`,
     * `ew-no-resize`, `nesw-no-resize`, `nwse-no-resize`, or `default`.
     *
     * If the `type` parameter is `custom`, the `image` parameter will hold the custom
     * cursor image in a `NativeImage`, and `scale`, `size` and `hotspot` will hold
     * additional information about the custom cursor.
     */
    on(event: 'cursor-changed', listener: (event: Event,
                                           type: string,
                                           image: NativeImage,
                                           /**
                                            * scaling factor for the custom cursor.
                                            */
                                           scale: number,
                                           /**
                                            * the size of the `image`.
                                            */
                                           size: Size,
                                           /**
                                            * coordinates of the custom cursor's hotspot.
                                            */
                                           hotspot: Point) => void): this;
    off(event: 'cursor-changed', listener: (event: Event,
                                           type: string,
                                           image: NativeImage,
                                           /**
                                            * scaling factor for the custom cursor.
                                            */
                                           scale: number,
                                           /**
                                            * the size of the `image`.
                                            */
                                           size: Size,
                                           /**
                                            * coordinates of the custom cursor's hotspot.
                                            */
                                           hotspot: Point) => void): this;
    once(event: 'cursor-changed', listener: (event: Event,
                                           type: string,
                                           image: NativeImage,
                                           /**
                                            * scaling factor for the custom cursor.
                                            */
                                           scale: number,
                                           /**
                                            * the size of the `image`.
                                            */
                                           size: Size,
                                           /**
                                            * coordinates of the custom cursor's hotspot.
                                            */
                                           hotspot: Point) => void): this;
    addListener(event: 'cursor-changed', listener: (event: Event,
                                           type: string,
                                           image: NativeImage,
                                           /**
                                            * scaling factor for the custom cursor.
                                            */
                                           scale: number,
                                           /**
                                            * the size of the `image`.
                                            */
                                           size: Size,
                                           /**
                                            * coordinates of the custom cursor's hotspot.
                                            */
                                           hotspot: Point) => void): this;
    removeListener(event: 'cursor-changed', listener: (event: Event,
                                           type: string,
                                           image: NativeImage,
                                           /**
                                            * scaling factor for the custom cursor.
                                            */
                                           scale: number,
                                           /**
                                            * the size of the `image`.
                                            */
                                           size: Size,
                                           /**
                                            * coordinates of the custom cursor's hotspot.
                                            */
                                           hotspot: Point) => void): this;
    /**
     * Emitted when `webContents` is destroyed.
     */
    on(event: 'destroyed', listener: Function): this;
    off(event: 'destroyed', listener: Function): this;
    once(event: 'destroyed', listener: Function): this;
    addListener(event: 'destroyed', listener: Function): this;
    removeListener(event: 'destroyed', listener: Function): this;
    /**
     * Emitted when DevTools is closed.
     */
    on(event: 'devtools-closed', listener: Function): this;
    off(event: 'devtools-closed', listener: Function): this;
    once(event: 'devtools-closed', listener: Function): this;
    addListener(event: 'devtools-closed', listener: Function): this;
    removeListener(event: 'devtools-closed', listener: Function): this;
    /**
     * Emitted when DevTools is focused / opened.
     */
    on(event: 'devtools-focused', listener: Function): this;
    off(event: 'devtools-focused', listener: Function): this;
    once(event: 'devtools-focused', listener: Function): this;
    addListener(event: 'devtools-focused', listener: Function): this;
    removeListener(event: 'devtools-focused', listener: Function): this;
    /**
     * Emitted when a link is clicked in DevTools or 'Open in new tab' is selected for
     * a link in its context menu.
     */
    on(event: 'devtools-open-url', listener: (event: Event,
                                              /**
                                               * URL of the link that was clicked or selected.
                                               */
                                              url: string) => void): this;
    off(event: 'devtools-open-url', listener: (event: Event,
                                              /**
                                               * URL of the link that was clicked or selected.
                                               */
                                              url: string) => void): this;
    once(event: 'devtools-open-url', listener: (event: Event,
                                              /**
                                               * URL of the link that was clicked or selected.
                                               */
                                              url: string) => void): this;
    addListener(event: 'devtools-open-url', listener: (event: Event,
                                              /**
                                               * URL of the link that was clicked or selected.
                                               */
                                              url: string) => void): this;
    removeListener(event: 'devtools-open-url', listener: (event: Event,
                                              /**
                                               * URL of the link that was clicked or selected.
                                               */
                                              url: string) => void): this;
    /**
     * Emitted when DevTools is opened.
     */
    on(event: 'devtools-opened', listener: Function): this;
    off(event: 'devtools-opened', listener: Function): this;
    once(event: 'devtools-opened', listener: Function): this;
    addListener(event: 'devtools-opened', listener: Function): this;
    removeListener(event: 'devtools-opened', listener: Function): this;
    /**
     * Emitted when the devtools window instructs the webContents to reload
     */
    on(event: 'devtools-reload-page', listener: Function): this;
    off(event: 'devtools-reload-page', listener: Function): this;
    once(event: 'devtools-reload-page', listener: Function): this;
    addListener(event: 'devtools-reload-page', listener: Function): this;
    removeListener(event: 'devtools-reload-page', listener: Function): this;
    /**
     * Emitted when a `<webview>` has been attached to this web contents.
     */
    on(event: 'did-attach-webview', listener: (event: Event,
                                               /**
                                                * The guest web contents that is used by the `<webview>`.
                                                */
                                               webContents: WebContents) => void): this;
    off(event: 'did-attach-webview', listener: (event: Event,
                                               /**
                                                * The guest web contents that is used by the `<webview>`.
                                                */
                                               webContents: WebContents) => void): this;
    once(event: 'did-attach-webview', listener: (event: Event,
                                               /**
                                                * The guest web contents that is used by the `<webview>`.
                                                */
                                               webContents: WebContents) => void): this;
    addListener(event: 'did-attach-webview', listener: (event: Event,
                                               /**
                                                * The guest web contents that is used by the `<webview>`.
                                                */
                                               webContents: WebContents) => void): this;
    removeListener(event: 'did-attach-webview', listener: (event: Event,
                                               /**
                                                * The guest web contents that is used by the `<webview>`.
                                                */
                                               webContents: WebContents) => void): this;
    /**
     * Emitted when a page's theme color changes. This is usually due to encountering a
     * meta tag:
     */
    on(event: 'did-change-theme-color', listener: (event: Event,
                                                   /**
                                                    * Theme color is in format of '#rrggbb'. It is `null` when no theme color is set.
                                                    */
                                                   color: (string) | (null)) => void): this;
    off(event: 'did-change-theme-color', listener: (event: Event,
                                                   /**
                                                    * Theme color is in format of '#rrggbb'. It is `null` when no theme color is set.
                                                    */
                                                   color: (string) | (null)) => void): this;
    once(event: 'did-change-theme-color', listener: (event: Event,
                                                   /**
                                                    * Theme color is in format of '#rrggbb'. It is `null` when no theme color is set.
                                                    */
                                                   color: (string) | (null)) => void): this;
    addListener(event: 'did-change-theme-color', listener: (event: Event,
                                                   /**
                                                    * Theme color is in format of '#rrggbb'. It is `null` when no theme color is set.
                                                    */
                                                   color: (string) | (null)) => void): this;
    removeListener(event: 'did-change-theme-color', listener: (event: Event,
                                                   /**
                                                    * Theme color is in format of '#rrggbb'. It is `null` when no theme color is set.
                                                    */
                                                   color: (string) | (null)) => void): this;
    /**
     * Emitted _after_ successful creation of a window via `window.open` in the
     * renderer. Not emitted if the creation of the window is canceled from
     * `webContents.setWindowOpenHandler`.
     *
     * See `window.open()` for more details and how to use this in conjunction with
     * `webContents.setWindowOpenHandler`.
     */
    on(event: 'did-create-window', listener: (window: BrowserWindow,
                                              details: DidCreateWindowDetails) => void): this;
    off(event: 'did-create-window', listener: (window: BrowserWindow,
                                              details: DidCreateWindowDetails) => void): this;
    once(event: 'did-create-window', listener: (window: BrowserWindow,
                                              details: DidCreateWindowDetails) => void): this;
    addListener(event: 'did-create-window', listener: (window: BrowserWindow,
                                              details: DidCreateWindowDetails) => void): this;
    removeListener(event: 'did-create-window', listener: (window: BrowserWindow,
                                              details: DidCreateWindowDetails) => void): this;
    /**
     * This event is like `did-finish-load` but emitted when the load failed. The full
     * list of error codes and their meaning is available here.
     */
    on(event: 'did-fail-load', listener: (event: Event,
                                          errorCode: number,
                                          errorDescription: string,
                                          validatedURL: string,
                                          isMainFrame: boolean,
                                          frameProcessId: number,
                                          frameRoutingId: number) => void): this;
    off(event: 'did-fail-load', listener: (event: Event,
                                          errorCode: number,
                                          errorDescription: string,
                                          validatedURL: string,
                                          isMainFrame: boolean,
                                          frameProcessId: number,
                                          frameRoutingId: number) => void): this;
    once(event: 'did-fail-load', listener: (event: Event,
                                          errorCode: number,
                                          errorDescription: string,
                                          validatedURL: string,
                                          isMainFrame: boolean,
                                          frameProcessId: number,
                                          frameRoutingId: number) => void): this;
    addListener(event: 'did-fail-load', listener: (event: Event,
                                          errorCode: number,
                                          errorDescription: string,
                                          validatedURL: string,
                                          isMainFrame: boolean,
                                          frameProcessId: number,
                                          frameRoutingId: number) => void): this;
    removeListener(event: 'did-fail-load', listener: (event: Event,
                                          errorCode: number,
                                          errorDescription: string,
                                          validatedURL: string,
                                          isMainFrame: boolean,
                                          frameProcessId: number,
                                          frameRoutingId: number) => void): this;
    /**
     * This event is like `did-fail-load` but emitted when the load was cancelled (e.g.
     * `window.stop()` was invoked).
     */
    on(event: 'did-fail-provisional-load', listener: (event: Event,
                                                      errorCode: number,
                                                      errorDescription: string,
                                                      validatedURL: string,
                                                      isMainFrame: boolean,
                                                      frameProcessId: number,
                                                      frameRoutingId: number) => void): this;
    off(event: 'did-fail-provisional-load', listener: (event: Event,
                                                      errorCode: number,
                                                      errorDescription: string,
                                                      validatedURL: string,
                                                      isMainFrame: boolean,
                                                      frameProcessId: number,
                                                      frameRoutingId: number) => void): this;
    once(event: 'did-fail-provisional-load', listener: (event: Event,
                                                      errorCode: number,
                                                      errorDescription: string,
                                                      validatedURL: string,
                                                      isMainFrame: boolean,
                                                      frameProcessId: number,
                                                      frameRoutingId: number) => void): this;
    addListener(event: 'did-fail-provisional-load', listener: (event: Event,
                                                      errorCode: number,
                                                      errorDescription: string,
                                                      validatedURL: string,
                                                      isMainFrame: boolean,
                                                      frameProcessId: number,
                                                      frameRoutingId: number) => void): this;
    removeListener(event: 'did-fail-provisional-load', listener: (event: Event,
                                                      errorCode: number,
                                                      errorDescription: string,
                                                      validatedURL: string,
                                                      isMainFrame: boolean,
                                                      frameProcessId: number,
                                                      frameRoutingId: number) => void): this;
    /**
     * Emitted when the navigation is done, i.e. the spinner of the tab has stopped
     * spinning, and the `onload` event was dispatched.
     */
    on(event: 'did-finish-load', listener: Function): this;
    off(event: 'did-finish-load', listener: Function): this;
    once(event: 'did-finish-load', listener: Function): this;
    addListener(event: 'did-finish-load', listener: Function): this;
    removeListener(event: 'did-finish-load', listener: Function): this;
    /**
     * Emitted when a frame has done navigation.
     */
    on(event: 'did-frame-finish-load', listener: (event: Event,
                                                  isMainFrame: boolean,
                                                  frameProcessId: number,
                                                  frameRoutingId: number) => void): this;
    off(event: 'did-frame-finish-load', listener: (event: Event,
                                                  isMainFrame: boolean,
                                                  frameProcessId: number,
                                                  frameRoutingId: number) => void): this;
    once(event: 'did-frame-finish-load', listener: (event: Event,
                                                  isMainFrame: boolean,
                                                  frameProcessId: number,
                                                  frameRoutingId: number) => void): this;
    addListener(event: 'did-frame-finish-load', listener: (event: Event,
                                                  isMainFrame: boolean,
                                                  frameProcessId: number,
                                                  frameRoutingId: number) => void): this;
    removeListener(event: 'did-frame-finish-load', listener: (event: Event,
                                                  isMainFrame: boolean,
                                                  frameProcessId: number,
                                                  frameRoutingId: number) => void): this;
    /**
     * Emitted when any frame navigation is done.
     *
     * This event is not emitted for in-page navigations, such as clicking anchor links
     * or updating the `window.location.hash`. Use `did-navigate-in-page` event for
     * this purpose.
     */
    on(event: 'did-frame-navigate', listener: (event: Event,
                                               url: string,
                                               /**
                                                * -1 for non HTTP navigations
                                                */
                                               httpResponseCode: number,
                                               /**
                                                * empty for non HTTP navigations,
                                                */
                                               httpStatusText: string,
                                               isMainFrame: boolean,
                                               frameProcessId: number,
                                               frameRoutingId: number) => void): this;
    off(event: 'did-frame-navigate', listener: (event: Event,
                                               url: string,
                                               /**
                                                * -1 for non HTTP navigations
                                                */
                                               httpResponseCode: number,
                                               /**
                                                * empty for non HTTP navigations,
                                                */
                                               httpStatusText: string,
                                               isMainFrame: boolean,
                                               frameProcessId: number,
                                               frameRoutingId: number) => void): this;
    once(event: 'did-frame-navigate', listener: (event: Event,
                                               url: string,
                                               /**
                                                * -1 for non HTTP navigations
                                                */
                                               httpResponseCode: number,
                                               /**
                                                * empty for non HTTP navigations,
                                                */
                                               httpStatusText: string,
                                               isMainFrame: boolean,
                                               frameProcessId: number,
                                               frameRoutingId: number) => void): this;
    addListener(event: 'did-frame-navigate', listener: (event: Event,
                                               url: string,
                                               /**
                                                * -1 for non HTTP navigations
                                                */
                                               httpResponseCode: number,
                                               /**
                                                * empty for non HTTP navigations,
                                                */
                                               httpStatusText: string,
                                               isMainFrame: boolean,
                                               frameProcessId: number,
                                               frameRoutingId: number) => void): this;
    removeListener(event: 'did-frame-navigate', listener: (event: Event,
                                               url: string,
                                               /**
                                                * -1 for non HTTP navigations
                                                */
                                               httpResponseCode: number,
                                               /**
                                                * empty for non HTTP navigations,
                                                */
                                               httpStatusText: string,
                                               isMainFrame: boolean,
                                               frameProcessId: number,
                                               frameRoutingId: number) => void): this;
    /**
     * Emitted when a main frame navigation is done.
     *
     * This event is not emitted for in-page navigations, such as clicking anchor links
     * or updating the `window.location.hash`. Use `did-navigate-in-page` event for
     * this purpose.
     */
    on(event: 'did-navigate', listener: (event: Event,
                                         url: string,
                                         /**
                                          * -1 for non HTTP navigations
                                          */
                                         httpResponseCode: number,
                                         /**
                                          * empty for non HTTP navigations
                                          */
                                         httpStatusText: string) => void): this;
    off(event: 'did-navigate', listener: (event: Event,
                                         url: string,
                                         /**
                                          * -1 for non HTTP navigations
                                          */
                                         httpResponseCode: number,
                                         /**
                                          * empty for non HTTP navigations
                                          */
                                         httpStatusText: string) => void): this;
    once(event: 'did-navigate', listener: (event: Event,
                                         url: string,
                                         /**
                                          * -1 for non HTTP navigations
                                          */
                                         httpResponseCode: number,
                                         /**
                                          * empty for non HTTP navigations
                                          */
                                         httpStatusText: string) => void): this;
    addListener(event: 'did-navigate', listener: (event: Event,
                                         url: string,
                                         /**
                                          * -1 for non HTTP navigations
                                          */
                                         httpResponseCode: number,
                                         /**
                                          * empty for non HTTP navigations
                                          */
                                         httpStatusText: string) => void): this;
    removeListener(event: 'did-navigate', listener: (event: Event,
                                         url: string,
                                         /**
                                          * -1 for non HTTP navigations
                                          */
                                         httpResponseCode: number,
                                         /**
                                          * empty for non HTTP navigations
                                          */
                                         httpStatusText: string) => void): this;
    /**
     * Emitted when an in-page navigation happened in any frame.
     *
     * When in-page navigation happens, the page URL changes but does not cause
     * navigation outside of the page. Examples of this occurring are when anchor links
     * are clicked or when the DOM `hashchange` event is triggered.
     */
    on(event: 'did-navigate-in-page', listener: (event: Event,
                                                 url: string,
                                                 isMainFrame: boolean,
                                                 frameProcessId: number,
                                                 frameRoutingId: number) => void): this;
    off(event: 'did-navigate-in-page', listener: (event: Event,
                                                 url: string,
                                                 isMainFrame: boolean,
                                                 frameProcessId: number,
                                                 frameRoutingId: number) => void): this;
    once(event: 'did-navigate-in-page', listener: (event: Event,
                                                 url: string,
                                                 isMainFrame: boolean,
                                                 frameProcessId: number,
                                                 frameRoutingId: number) => void): this;
    addListener(event: 'did-navigate-in-page', listener: (event: Event,
                                                 url: string,
                                                 isMainFrame: boolean,
                                                 frameProcessId: number,
                                                 frameRoutingId: number) => void): this;
    removeListener(event: 'did-navigate-in-page', listener: (event: Event,
                                                 url: string,
                                                 isMainFrame: boolean,
                                                 frameProcessId: number,
                                                 frameRoutingId: number) => void): this;
    /**
     * Emitted after a server side redirect occurs during navigation.  For example a
     * 302 redirect.
     *
     * This event cannot be prevented, if you want to prevent redirects you should
     * checkout out the `will-redirect` event above.
     */
    on(event: 'did-redirect-navigation', listener: (details: Event<WebContentsDidRedirectNavigationEventParams>,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    url: string,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isInPlace: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isMainFrame: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameProcessId: number,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameRoutingId: number) => void): this;
    off(event: 'did-redirect-navigation', listener: (details: Event<WebContentsDidRedirectNavigationEventParams>,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    url: string,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isInPlace: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isMainFrame: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameProcessId: number,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameRoutingId: number) => void): this;
    once(event: 'did-redirect-navigation', listener: (details: Event<WebContentsDidRedirectNavigationEventParams>,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    url: string,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isInPlace: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isMainFrame: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameProcessId: number,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameRoutingId: number) => void): this;
    addListener(event: 'did-redirect-navigation', listener: (details: Event<WebContentsDidRedirectNavigationEventParams>,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    url: string,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isInPlace: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isMainFrame: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameProcessId: number,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameRoutingId: number) => void): this;
    removeListener(event: 'did-redirect-navigation', listener: (details: Event<WebContentsDidRedirectNavigationEventParams>,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    url: string,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isInPlace: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    isMainFrame: boolean,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameProcessId: number,
                                                    /**
                                                     * @deprecated
                                                     */
                                                    frameRoutingId: number) => void): this;
    /**
     * Corresponds to the points in time when the spinner of the tab started spinning.
     */
    on(event: 'did-start-loading', listener: Function): this;
    off(event: 'did-start-loading', listener: Function): this;
    once(event: 'did-start-loading', listener: Function): this;
    addListener(event: 'did-start-loading', listener: Function): this;
    removeListener(event: 'did-start-loading', listener: Function): this;
    /**
     * Emitted when any frame (including main) starts navigating.
     */
    on(event: 'did-start-navigation', listener: (details: Event<WebContentsDidStartNavigationEventParams>,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 url: string,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isInPlace: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isMainFrame: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameProcessId: number,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameRoutingId: number) => void): this;
    off(event: 'did-start-navigation', listener: (details: Event<WebContentsDidStartNavigationEventParams>,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 url: string,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isInPlace: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isMainFrame: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameProcessId: number,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameRoutingId: number) => void): this;
    once(event: 'did-start-navigation', listener: (details: Event<WebContentsDidStartNavigationEventParams>,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 url: string,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isInPlace: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isMainFrame: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameProcessId: number,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameRoutingId: number) => void): this;
    addListener(event: 'did-start-navigation', listener: (details: Event<WebContentsDidStartNavigationEventParams>,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 url: string,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isInPlace: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isMainFrame: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameProcessId: number,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameRoutingId: number) => void): this;
    removeListener(event: 'did-start-navigation', listener: (details: Event<WebContentsDidStartNavigationEventParams>,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 url: string,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isInPlace: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 isMainFrame: boolean,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameProcessId: number,
                                                 /**
                                                  * @deprecated
                                                  */
                                                 frameRoutingId: number) => void): this;
    /**
     * Corresponds to the points in time when the spinner of the tab stopped spinning.
     */
    on(event: 'did-stop-loading', listener: Function): this;
    off(event: 'did-stop-loading', listener: Function): this;
    once(event: 'did-stop-loading', listener: Function): this;
    addListener(event: 'did-stop-loading', listener: Function): this;
    removeListener(event: 'did-stop-loading', listener: Function): this;
    /**
     * Emitted when the document in the top-level frame is loaded.
     */
    on(event: 'dom-ready', listener: Function): this;
    off(event: 'dom-ready', listener: Function): this;
    once(event: 'dom-ready', listener: Function): this;
    addListener(event: 'dom-ready', listener: Function): this;
    removeListener(event: 'dom-ready', listener: Function): this;
    /**
     * Emitted when the window enters a full-screen state triggered by HTML API.
     */
    on(event: 'enter-html-full-screen', listener: Function): this;
    off(event: 'enter-html-full-screen', listener: Function): this;
    once(event: 'enter-html-full-screen', listener: Function): this;
    addListener(event: 'enter-html-full-screen', listener: Function): this;
    removeListener(event: 'enter-html-full-screen', listener: Function): this;
    /**
     * Emitted when the `WebContents` gains focus.
     *
     * Note that on macOS, having focus means the `WebContents` is the first responder
     * of window, so switching focus between windows would not trigger the `focus` and
     * `blur` events of `WebContents`, as the first responder of each window is not
     * changed.
     *
     * The `focus` and `blur` events of `WebContents` should only be used to detect
     * focus change between different `WebContents` and `BrowserView` in the same
     * window.
     */
    on(event: 'focus', listener: Function): this;
    off(event: 'focus', listener: Function): this;
    once(event: 'focus', listener: Function): this;
    addListener(event: 'focus', listener: Function): this;
    removeListener(event: 'focus', listener: Function): this;
    /**
     * Emitted when a result is available for `webContents.findInPage` request.
     */
    on(event: 'found-in-page', listener: (event: Event,
                                          result: Result) => void): this;
    off(event: 'found-in-page', listener: (event: Event,
                                          result: Result) => void): this;
    once(event: 'found-in-page', listener: (event: Event,
                                          result: Result) => void): this;
    addListener(event: 'found-in-page', listener: (event: Event,
                                          result: Result) => void): this;
    removeListener(event: 'found-in-page', listener: (event: Event,
                                          result: Result) => void): this;
    /**
     * Emitted when the mainFrame, an `<iframe>`, or a nested `<iframe>` is loaded
     * within the page.
     */
    on(event: 'frame-created', listener: (event: Event,
                                          details: FrameCreatedDetails) => void): this;
    off(event: 'frame-created', listener: (event: Event,
                                          details: FrameCreatedDetails) => void): this;
    once(event: 'frame-created', listener: (event: Event,
                                          details: FrameCreatedDetails) => void): this;
    addListener(event: 'frame-created', listener: (event: Event,
                                          details: FrameCreatedDetails) => void): this;
    removeListener(event: 'frame-created', listener: (event: Event,
                                          details: FrameCreatedDetails) => void): this;
    /**
     * Emitted when an input event is sent to the WebContents. See InputEvent for
     * details.
     */
    on(event: 'input-event', listener: (event: Event,
                                        inputEvent: InputEvent) => void): this;
    off(event: 'input-event', listener: (event: Event,
                                        inputEvent: InputEvent) => void): this;
    once(event: 'input-event', listener: (event: Event,
                                        inputEvent: InputEvent) => void): this;
    addListener(event: 'input-event', listener: (event: Event,
                                        inputEvent: InputEvent) => void): this;
    removeListener(event: 'input-event', listener: (event: Event,
                                        inputEvent: InputEvent) => void): this;
    /**
     * Emitted when the renderer process sends an asynchronous message via
     * `ipcRenderer.send()`.
     *
     * See also `webContents.ipc`, which provides an `IpcMain`-like interface for
     * responding to IPC messages specifically from this WebContents.
     */
    on(event: 'ipc-message', listener: (event: IpcMainEvent,
                                        channel: string,
                                        ...args: any[]) => void): this;
    off(event: 'ipc-message', listener: (event: IpcMainEvent,
                                        channel: string,
                                        ...args: any[]) => void): this;
    once(event: 'ipc-message', listener: (event: IpcMainEvent,
                                        channel: string,
                                        ...args: any[]) => void): this;
    addListener(event: 'ipc-message', listener: (event: IpcMainEvent,
                                        channel: string,
                                        ...args: any[]) => void): this;
    removeListener(event: 'ipc-message', listener: (event: IpcMainEvent,
                                        channel: string,
                                        ...args: any[]) => void): this;
    /**
     * Emitted when the renderer process sends a synchronous message via
     * `ipcRenderer.sendSync()`.
     *
     * See also `webContents.ipc`, which provides an `IpcMain`-like interface for
     * responding to IPC messages specifically from this WebContents.
     */
    on(event: 'ipc-message-sync', listener: (event: IpcMainEvent,
                                             channel: string,
                                             ...args: any[]) => void): this;
    off(event: 'ipc-message-sync', listener: (event: IpcMainEvent,
                                             channel: string,
                                             ...args: any[]) => void): this;
    once(event: 'ipc-message-sync', listener: (event: IpcMainEvent,
                                             channel: string,
                                             ...args: any[]) => void): this;
    addListener(event: 'ipc-message-sync', listener: (event: IpcMainEvent,
                                             channel: string,
                                             ...args: any[]) => void): this;
    removeListener(event: 'ipc-message-sync', listener: (event: IpcMainEvent,
                                             channel: string,
                                             ...args: any[]) => void): this;
    /**
     * Emitted when the window leaves a full-screen state triggered by HTML API.
     */
    on(event: 'leave-html-full-screen', listener: Function): this;
    off(event: 'leave-html-full-screen', listener: Function): this;
    once(event: 'leave-html-full-screen', listener: Function): this;
    addListener(event: 'leave-html-full-screen', listener: Function): this;
    removeListener(event: 'leave-html-full-screen', listener: Function): this;
    /**
     * Emitted when `webContents` wants to do basic auth.
     *
     * The usage is the same with the `login` event of `app`.
     */
    on(event: 'login', listener: (event: Event,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    off(event: 'login', listener: (event: Event,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    once(event: 'login', listener: (event: Event,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    addListener(event: 'login', listener: (event: Event,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    removeListener(event: 'login', listener: (event: Event,
                                  authenticationResponseDetails: AuthenticationResponseDetails,
                                  authInfo: AuthInfo,
                                  callback: (username?: string, password?: string) => void) => void): this;
    /**
     * Emitted when media is paused or done playing.
     */
    on(event: 'media-paused', listener: Function): this;
    off(event: 'media-paused', listener: Function): this;
    once(event: 'media-paused', listener: Function): this;
    addListener(event: 'media-paused', listener: Function): this;
    removeListener(event: 'media-paused', listener: Function): this;
    /**
     * Emitted when media starts playing.
     */
    on(event: 'media-started-playing', listener: Function): this;
    off(event: 'media-started-playing', listener: Function): this;
    once(event: 'media-started-playing', listener: Function): this;
    addListener(event: 'media-started-playing', listener: Function): this;
    removeListener(event: 'media-started-playing', listener: Function): this;
    /**
     * Emitted when page receives favicon urls.
     */
    on(event: 'page-favicon-updated', listener: (event: Event,
                                                 /**
                                                  * Array of URLs.
                                                  */
                                                 favicons: string[]) => void): this;
    off(event: 'page-favicon-updated', listener: (event: Event,
                                                 /**
                                                  * Array of URLs.
                                                  */
                                                 favicons: string[]) => void): this;
    once(event: 'page-favicon-updated', listener: (event: Event,
                                                 /**
                                                  * Array of URLs.
                                                  */
                                                 favicons: string[]) => void): this;
    addListener(event: 'page-favicon-updated', listener: (event: Event,
                                                 /**
                                                  * Array of URLs.
                                                  */
                                                 favicons: string[]) => void): this;
    removeListener(event: 'page-favicon-updated', listener: (event: Event,
                                                 /**
                                                  * Array of URLs.
                                                  */
                                                 favicons: string[]) => void): this;
    /**
     * Fired when page title is set during navigation. `explicitSet` is false when
     * title is synthesized from file url.
     */
    on(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    off(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    once(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    addListener(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    removeListener(event: 'page-title-updated', listener: (event: Event,
                                               title: string,
                                               explicitSet: boolean) => void): this;
    /**
     * Emitted when a new frame is generated. Only the dirty area is passed in the
     * buffer.
     */
    on(event: 'paint', listener: (event: Event,
                                  dirtyRect: Rectangle,
                                  /**
                                   * The image data of the whole frame.
                                   */
                                  image: NativeImage) => void): this;
    off(event: 'paint', listener: (event: Event,
                                  dirtyRect: Rectangle,
                                  /**
                                   * The image data of the whole frame.
                                   */
                                  image: NativeImage) => void): this;
    once(event: 'paint', listener: (event: Event,
                                  dirtyRect: Rectangle,
                                  /**
                                   * The image data of the whole frame.
                                   */
                                  image: NativeImage) => void): this;
    addListener(event: 'paint', listener: (event: Event,
                                  dirtyRect: Rectangle,
                                  /**
                                   * The image data of the whole frame.
                                   */
                                  image: NativeImage) => void): this;
    removeListener(event: 'paint', listener: (event: Event,
                                  dirtyRect: Rectangle,
                                  /**
                                   * The image data of the whole frame.
                                   */
                                  image: NativeImage) => void): this;
    /**
     * Emitted when a plugin process has crashed.
     */
    on(event: 'plugin-crashed', listener: (event: Event,
                                           name: string,
                                           version: string) => void): this;
    off(event: 'plugin-crashed', listener: (event: Event,
                                           name: string,
                                           version: string) => void): this;
    once(event: 'plugin-crashed', listener: (event: Event,
                                           name: string,
                                           version: string) => void): this;
    addListener(event: 'plugin-crashed', listener: (event: Event,
                                           name: string,
                                           version: string) => void): this;
    removeListener(event: 'plugin-crashed', listener: (event: Event,
                                           name: string,
                                           version: string) => void): this;
    /**
     * Emitted when the `WebContents` preferred size has changed.
     *
     * This event will only be emitted when `enablePreferredSizeMode` is set to `true`
     * in `webPreferences`.
     */
    on(event: 'preferred-size-changed', listener: (event: Event,
                                                   /**
                                                    * The minimum size needed to contain the layout of the document—without requiring
                                                    * scrolling.
                                                    */
                                                   preferredSize: Size) => void): this;
    off(event: 'preferred-size-changed', listener: (event: Event,
                                                   /**
                                                    * The minimum size needed to contain the layout of the document—without requiring
                                                    * scrolling.
                                                    */
                                                   preferredSize: Size) => void): this;
    once(event: 'preferred-size-changed', listener: (event: Event,
                                                   /**
                                                    * The minimum size needed to contain the layout of the document—without requiring
                                                    * scrolling.
                                                    */
                                                   preferredSize: Size) => void): this;
    addListener(event: 'preferred-size-changed', listener: (event: Event,
                                                   /**
                                                    * The minimum size needed to contain the layout of the document—without requiring
                                                    * scrolling.
                                                    */
                                                   preferredSize: Size) => void): this;
    removeListener(event: 'preferred-size-changed', listener: (event: Event,
                                                   /**
                                                    * The minimum size needed to contain the layout of the document—without requiring
                                                    * scrolling.
                                                    */
                                                   preferredSize: Size) => void): this;
    /**
     * Emitted when the preload script `preloadPath` throws an unhandled exception
     * `error`.
     */
    on(event: 'preload-error', listener: (event: Event,
                                          preloadPath: string,
                                          error: Error) => void): this;
    off(event: 'preload-error', listener: (event: Event,
                                          preloadPath: string,
                                          error: Error) => void): this;
    once(event: 'preload-error', listener: (event: Event,
                                          preloadPath: string,
                                          error: Error) => void): this;
    addListener(event: 'preload-error', listener: (event: Event,
                                          preloadPath: string,
                                          error: Error) => void): this;
    removeListener(event: 'preload-error', listener: (event: Event,
                                          preloadPath: string,
                                          error: Error) => void): this;
    /**
     * Emitted when the renderer process unexpectedly disappears.  This is normally
     * because it was crashed or killed.
     */
    on(event: 'render-process-gone', listener: (event: Event,
                                                details: RenderProcessGoneDetails) => void): this;
    off(event: 'render-process-gone', listener: (event: Event,
                                                details: RenderProcessGoneDetails) => void): this;
    once(event: 'render-process-gone', listener: (event: Event,
                                                details: RenderProcessGoneDetails) => void): this;
    addListener(event: 'render-process-gone', listener: (event: Event,
                                                details: RenderProcessGoneDetails) => void): this;
    removeListener(event: 'render-process-gone', listener: (event: Event,
                                                details: RenderProcessGoneDetails) => void): this;
    /**
     * Emitted when the unresponsive web page becomes responsive again.
     */
    on(event: 'responsive', listener: Function): this;
    off(event: 'responsive', listener: Function): this;
    once(event: 'responsive', listener: Function): this;
    addListener(event: 'responsive', listener: Function): this;
    removeListener(event: 'responsive', listener: Function): this;
    /**
     * Emitted when a bluetooth device needs to be selected when a call to
     * `navigator.bluetooth.requestDevice` is made. `callback` should be called with
     * the `deviceId` of the device to be selected.  Passing an empty string to
     * `callback` will cancel the request.
     *
     * If an event listener is not added for this event, or if `event.preventDefault`
     * is not called when handling this event, the first available device will be
     * automatically selected.
     *
     * Due to the nature of bluetooth, scanning for devices when
     * `navigator.bluetooth.requestDevice` is called may take time and will cause
     * `select-bluetooth-device` to fire multiple times until `callback` is called with
     * either a device id or an empty string to cancel the request.
     */
    on(event: 'select-bluetooth-device', listener: (event: Event,
                                                    devices: BluetoothDevice[],
                                                    callback: (deviceId: string) => void) => void): this;
    off(event: 'select-bluetooth-device', listener: (event: Event,
                                                    devices: BluetoothDevice[],
                                                    callback: (deviceId: string) => void) => void): this;
    once(event: 'select-bluetooth-device', listener: (event: Event,
                                                    devices: BluetoothDevice[],
                                                    callback: (deviceId: string) => void) => void): this;
    addListener(event: 'select-bluetooth-device', listener: (event: Event,
                                                    devices: BluetoothDevice[],
                                                    callback: (deviceId: string) => void) => void): this;
    removeListener(event: 'select-bluetooth-device', listener: (event: Event,
                                                    devices: BluetoothDevice[],
                                                    callback: (deviceId: string) => void) => void): this;
    /**
     * Emitted when a client certificate is requested.
     *
     * The usage is the same with the `select-client-certificate` event of `app`.
     */
    on(event: 'select-client-certificate', listener: (event: Event,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate: Certificate) => void) => void): this;
    off(event: 'select-client-certificate', listener: (event: Event,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate: Certificate) => void) => void): this;
    once(event: 'select-client-certificate', listener: (event: Event,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate: Certificate) => void) => void): this;
    addListener(event: 'select-client-certificate', listener: (event: Event,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate: Certificate) => void) => void): this;
    removeListener(event: 'select-client-certificate', listener: (event: Event,
                                                      url: string,
                                                      certificateList: Certificate[],
                                                      callback: (certificate: Certificate) => void) => void): this;
    /**
     * Emitted when the web page becomes unresponsive.
     */
    on(event: 'unresponsive', listener: Function): this;
    off(event: 'unresponsive', listener: Function): this;
    once(event: 'unresponsive', listener: Function): this;
    addListener(event: 'unresponsive', listener: Function): this;
    removeListener(event: 'unresponsive', listener: Function): this;
    /**
     * Emitted when mouse moves over a link or the keyboard moves the focus to a link.
     */
    on(event: 'update-target-url', listener: (event: Event,
                                              url: string) => void): this;
    off(event: 'update-target-url', listener: (event: Event,
                                              url: string) => void): this;
    once(event: 'update-target-url', listener: (event: Event,
                                              url: string) => void): this;
    addListener(event: 'update-target-url', listener: (event: Event,
                                              url: string) => void): this;
    removeListener(event: 'update-target-url', listener: (event: Event,
                                              url: string) => void): this;
    /**
     * Emitted when a `<webview>`'s web contents is being attached to this web
     * contents. Calling `event.preventDefault()` will destroy the guest page.
     *
     * This event can be used to configure `webPreferences` for the `webContents` of a
     * `<webview>` before it's loaded, and provides the ability to set settings that
     * can't be set via `<webview>` attributes.
     */
    on(event: 'will-attach-webview', listener: (event: Event,
                                                /**
                                                 * The web preferences that will be used by the guest page. This object can be
                                                 * modified to adjust the preferences for the guest page.
                                                 */
                                                webPreferences: WebPreferences,
                                                /**
                                                 * The other `<webview>` parameters such as the `src` URL. This object can be
                                                 * modified to adjust the parameters of the guest page.
                                                 */
                                                params: Record<string, string>) => void): this;
    off(event: 'will-attach-webview', listener: (event: Event,
                                                /**
                                                 * The web preferences that will be used by the guest page. This object can be
                                                 * modified to adjust the preferences for the guest page.
                                                 */
                                                webPreferences: WebPreferences,
                                                /**
                                                 * The other `<webview>` parameters such as the `src` URL. This object can be
                                                 * modified to adjust the parameters of the guest page.
                                                 */
                                                params: Record<string, string>) => void): this;
    once(event: 'will-attach-webview', listener: (event: Event,
                                                /**
                                                 * The web preferences that will be used by the guest page. This object can be
                                                 * modified to adjust the preferences for the guest page.
                                                 */
                                                webPreferences: WebPreferences,
                                                /**
                                                 * The other `<webview>` parameters such as the `src` URL. This object can be
                                                 * modified to adjust the parameters of the guest page.
                                                 */
                                                params: Record<string, string>) => void): this;
    addListener(event: 'will-attach-webview', listener: (event: Event,
                                                /**
                                                 * The web preferences that will be used by the guest page. This object can be
                                                 * modified to adjust the preferences for the guest page.
                                                 */
                                                webPreferences: WebPreferences,
                                                /**
                                                 * The other `<webview>` parameters such as the `src` URL. This object can be
                                                 * modified to adjust the parameters of the guest page.
                                                 */
                                                params: Record<string, string>) => void): this;
    removeListener(event: 'will-attach-webview', listener: (event: Event,
                                                /**
                                                 * The web preferences that will be used by the guest page. This object can be
                                                 * modified to adjust the preferences for the guest page.
                                                 */
                                                webPreferences: WebPreferences,
                                                /**
                                                 * The other `<webview>` parameters such as the `src` URL. This object can be
                                                 * modified to adjust the parameters of the guest page.
                                                 */
                                                params: Record<string, string>) => void): this;
    /**
     * Emitted when a user or the page wants to start navigation in any frame. It can
     * happen when the `window.location` object is changed or a user clicks a link in
     * the page.
     *
     * Unlike `will-navigate`, `will-frame-navigate` is fired when the main frame or
     * any of its subframes attempts to navigate. When the navigation event comes from
     * the main frame, `isMainFrame` will be `true`.
     *
     * This event will not emit when the navigation is started programmatically with
     * APIs like `webContents.loadURL` and `webContents.back`.
     *
     * It is also not emitted for in-page navigations, such as clicking anchor links or
     * updating the `window.location.hash`. Use `did-navigate-in-page` event for this
     * purpose.
     *
     * Calling `event.preventDefault()` will prevent the navigation.
     */
    on(event: 'will-frame-navigate', listener: (details: Event<WebContentsWillFrameNavigateEventParams>) => void): this;
    off(event: 'will-frame-navigate', listener: (details: Event<WebContentsWillFrameNavigateEventParams>) => void): this;
    once(event: 'will-frame-navigate', listener: (details: Event<WebContentsWillFrameNavigateEventParams>) => void): this;
    addListener(event: 'will-frame-navigate', listener: (details: Event<WebContentsWillFrameNavigateEventParams>) => void): this;
    removeListener(event: 'will-frame-navigate', listener: (details: Event<WebContentsWillFrameNavigateEventParams>) => void): this;
    /**
     * Emitted when a user or the page wants to start navigation on the main frame. It
     * can happen when the `window.location` object is changed or a user clicks a link
     * in the page.
     *
     * This event will not emit when the navigation is started programmatically with
     * APIs like `webContents.loadURL` and `webContents.back`.
     *
     * It is also not emitted for in-page navigations, such as clicking anchor links or
     * updating the `window.location.hash`. Use `did-navigate-in-page` event for this
     * purpose.
     *
     * Calling `event.preventDefault()` will prevent the navigation.
     */
    on(event: 'will-navigate', listener: (details: Event<WebContentsWillNavigateEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    off(event: 'will-navigate', listener: (details: Event<WebContentsWillNavigateEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    once(event: 'will-navigate', listener: (details: Event<WebContentsWillNavigateEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    addListener(event: 'will-navigate', listener: (details: Event<WebContentsWillNavigateEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    removeListener(event: 'will-navigate', listener: (details: Event<WebContentsWillNavigateEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    /**
     * Emitted when a `beforeunload` event handler is attempting to cancel a page
     * unload.
     *
     * Calling `event.preventDefault()` will ignore the `beforeunload` event handler
     * and allow the page to be unloaded.
     *
     * **Note:** This will be emitted for `BrowserViews` but will _not_ be respected -
     * this is because we have chosen not to tie the `BrowserView` lifecycle to its
     * owning BrowserWindow should one exist per the specification.
     */
    on(event: 'will-prevent-unload', listener: (event: Event) => void): this;
    off(event: 'will-prevent-unload', listener: (event: Event) => void): this;
    once(event: 'will-prevent-unload', listener: (event: Event) => void): this;
    addListener(event: 'will-prevent-unload', listener: (event: Event) => void): this;
    removeListener(event: 'will-prevent-unload', listener: (event: Event) => void): this;
    /**
     * Emitted when a server side redirect occurs during navigation.  For example a 302
     * redirect.
     *
     * This event will be emitted after `did-start-navigation` and always before the
     * `did-redirect-navigation` event for the same navigation.
     *
     * Calling `event.preventDefault()` will prevent the navigation (not just the
     * redirect).
     */
    on(event: 'will-redirect', listener: (details: Event<WebContentsWillRedirectEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    off(event: 'will-redirect', listener: (details: Event<WebContentsWillRedirectEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    once(event: 'will-redirect', listener: (details: Event<WebContentsWillRedirectEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    addListener(event: 'will-redirect', listener: (details: Event<WebContentsWillRedirectEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    removeListener(event: 'will-redirect', listener: (details: Event<WebContentsWillRedirectEventParams>,
                                          /**
                                           * @deprecated
                                           */
                                          url: string,
                                          /**
                                           * @deprecated
                                           */
                                          isInPlace: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          isMainFrame: boolean,
                                          /**
                                           * @deprecated
                                           */
                                          frameProcessId: number,
                                          /**
                                           * @deprecated
                                           */
                                          frameRoutingId: number) => void): this;
    /**
     * Emitted when the user is requesting to change the zoom level using the mouse
     * wheel.
     */
    on(event: 'zoom-changed', listener: (event: Event,
                                         /**
                                          * Can be `in` or `out`.
                                          */
                                         zoomDirection: ('in' | 'out')) => void): this;
    off(event: 'zoom-changed', listener: (event: Event,
                                         /**
                                          * Can be `in` or `out`.
                                          */
                                         zoomDirection: ('in' | 'out')) => void): this;
    once(event: 'zoom-changed', listener: (event: Event,
                                         /**
                                          * Can be `in` or `out`.
                                          */
                                         zoomDirection: ('in' | 'out')) => void): this;
    addListener(event: 'zoom-changed', listener: (event: Event,
                                         /**
                                          * Can be `in` or `out`.
                                          */
                                         zoomDirection: ('in' | 'out')) => void): this;
    removeListener(event: 'zoom-changed', listener: (event: Event,
                                         /**
                                          * Can be `in` or `out`.
                                          */
                                         zoomDirection: ('in' | 'out')) => void): this;
    /**
     * Adds the specified path to DevTools workspace. Must be used after DevTools
     * creation:
     */
    addWorkSpace(path: string): void;
    /**
     * Adjusts the current text selection starting and ending points in the focused
     * frame by the given amounts. A negative amount moves the selection towards the
     * beginning of the document, and a positive amount moves the selection towards the
     * end of the document.
     *
     * Example:
     *
     * For a call of `win.webContents.adjustSelection({ start: 1, end: 5 })`
     *
     * Before:
     *
     * <img width="487" alt="Image Before Text Selection Adjustment"
     * src="../images/web-contents-text-selection-before.png"/>
     *
     * After:
     *
     * <img width="487" alt="Image After Text Selection Adjustment"
     * src="../images/web-contents-text-selection-after.png"/>
     */
    adjustSelection(options: AdjustSelectionOptions): void;
    /**
     * Begin subscribing for presentation events and captured frames, the `callback`
     * will be called with `callback(image, dirtyRect)` when there is a presentation
     * event.
     *
     * The `image` is an instance of NativeImage that stores the captured frame.
     *
     * The `dirtyRect` is an object with `x, y, width, height` properties that
     * describes which part of the page was repainted. If `onlyDirty` is set to `true`,
     * `image` will only contain the repainted area. `onlyDirty` defaults to `false`.
     */
    beginFrameSubscription(onlyDirty: boolean, callback: (image: NativeImage, dirtyRect: Rectangle) => void): void;
    /**
     * Begin subscribing for presentation events and captured frames, the `callback`
     * will be called with `callback(image, dirtyRect)` when there is a presentation
     * event.
     *
     * The `image` is an instance of NativeImage that stores the captured frame.
     *
     * The `dirtyRect` is an object with `x, y, width, height` properties that
     * describes which part of the page was repainted. If `onlyDirty` is set to `true`,
     * `image` will only contain the repainted area. `onlyDirty` defaults to `false`.
     */
    beginFrameSubscription(callback: (image: NativeImage, dirtyRect: Rectangle) => void): void;
    /**
     * Whether the browser can go back to previous web page.
     */
    canGoBack(): boolean;
    /**
     * Whether the browser can go forward to next web page.
     */
    canGoForward(): boolean;
    /**
     * Whether the web page can go to `offset`.
     */
    canGoToOffset(offset: number): boolean;
    /**
     * Resolves with a NativeImage
     *
     * Captures a snapshot of the page within `rect`. Omitting `rect` will capture the
     * whole visible page. The page is considered visible when its browser window is
     * hidden and the capturer count is non-zero. If you would like the page to stay
     * hidden, you should ensure that `stayHidden` is set to true.
     */
    capturePage(rect?: Rectangle, opts?: Opts): Promise<Electron.NativeImage>;
    /**
     * Centers the current text selection in web page.
     */
    centerSelection(): void;
    /**
     * Clears the navigation history.
     */
    clearHistory(): void;
    /**
     * Closes the page, as if the web content had called `window.close()`.
     *
     * If the page is successfully closed (i.e. the unload is not prevented by the
     * page, or `waitForBeforeUnload` is false or unspecified), the WebContents will be
     * destroyed and no longer usable. The `destroyed` event will be emitted.
     */
    close(opts?: CloseOpts): void;
    /**
     * Closes the devtools.
     */
    closeDevTools(): void;
    /**
     * Executes the editing command `copy` in web page.
     */
    copy(): void;
    /**
     * Copy the image at the given position to the clipboard.
     */
    copyImageAt(x: number, y: number): void;
    /**
     * Executes the editing command `cut` in web page.
     */
    cut(): void;
    /**
     * Executes the editing command `delete` in web page.
     */
    delete(): void;
    /**
     * Disable device emulation enabled by `webContents.enableDeviceEmulation`.
     */
    disableDeviceEmulation(): void;
    /**
     * Initiates a download of the resource at `url` without navigating. The
     * `will-download` event of `session` will be triggered.
     */
    downloadURL(url: string, options?: DownloadURLOptions): void;
    /**
     * Enable device emulation with the given parameters.
     */
    enableDeviceEmulation(parameters: Parameters): void;
    /**
     * End subscribing for frame presentation events.
     */
    endFrameSubscription(): void;
    /**
     * A promise that resolves with the result of the executed code or is rejected if
     * the result of the code is a rejected promise.
     *
     * Evaluates `code` in page.
     *
     * In the browser window some HTML APIs like `requestFullScreen` can only be
     * invoked by a gesture from the user. Setting `userGesture` to `true` will remove
     * this limitation.
     *
     * Code execution will be suspended until web page stop loading.
     */
    executeJavaScript(code: string, userGesture?: boolean): Promise<any>;
    /**
     * A promise that resolves with the result of the executed code or is rejected if
     * the result of the code is a rejected promise.
     *
     * Works like `executeJavaScript` but evaluates `scripts` in an isolated context.
     */
    executeJavaScriptInIsolatedWorld(worldId: number, scripts: WebSource[], userGesture?: boolean): Promise<any>;
    /**
     * The request id used for the request.
     *
     * Starts a request to find all matches for the `text` in the web page. The result
     * of the request can be obtained by subscribing to `found-in-page` event.
     */
    findInPage(text: string, options?: FindInPageOptions): number;
    /**
     * Focuses the web page.
     */
    focus(): void;
    /**
     * Forcefully terminates the renderer process that is currently hosting this
     * `webContents`. This will cause the `render-process-gone` event to be emitted
     * with the `reason=killed || reason=crashed`. Please note that some webContents
     * share renderer processes and therefore calling this method may also crash the
     * host process for other webContents as well.
     *
     * Calling `reload()` immediately after calling this method will force the reload
     * to occur in a new process. This should be used when this process is unstable or
     * unusable, for instance in order to recover from the `unresponsive` event.
     */
    forcefullyCrashRenderer(): void;
    /**
     * Information about all Shared Workers.
     */
    getAllSharedWorkers(): SharedWorkerInfo[];
    /**
     * whether or not this WebContents will throttle animations and timers when the
     * page becomes backgrounded. This also affects the Page Visibility API.
     */
    getBackgroundThrottling(): boolean;
    /**
     * the current title of the DevTools window. This will only be visible if DevTools
     * is opened in `undocked` or `detach` mode.
     */
    getDevToolsTitle(): string;
    /**
     * If _offscreen rendering_ is enabled returns the current frame rate.
     */
    getFrameRate(): number;
    /**
     * The identifier of a WebContents stream. This identifier can be used with
     * `navigator.mediaDevices.getUserMedia` using a `chromeMediaSource` of `tab`. The
     * identifier is restricted to the web contents that it is registered to and is
     * only valid for 10 seconds.
     */
    getMediaSourceId(requestWebContents: WebContents): string;
    /**
     * The operating system `pid` of the associated renderer process.
     */
    getOSProcessId(): number;
    /**
     * Get the system printer list.
     *
     * Resolves with a `PrinterInfo[]`
     */
    getPrintersAsync(): Promise<Electron.PrinterInfo[]>;
    /**
     * The Chromium internal `pid` of the associated renderer. Can be compared to the
     * `frameProcessId` passed by frame specific navigation events (e.g.
     * `did-frame-navigate`)
     */
    getProcessId(): number;
    /**
     * The title of the current web page.
     */
    getTitle(): string;
    /**
     * the type of the webContent. Can be `backgroundPage`, `window`, `browserView`,
     * `remote`, `webview` or `offscreen`.
     */
    getType(): ('backgroundPage' | 'window' | 'browserView' | 'remote' | 'webview' | 'offscreen');
    /**
     * The URL of the current web page.
     */
    getURL(): string;
    /**
     * The user agent for this web page.
     */
    getUserAgent(): string;
    /**
     * Returns the WebRTC IP Handling Policy.
     */
    getWebRTCIPHandlingPolicy(): string;
    /**
     * * `min` Integer - The minimum UDP port number that WebRTC should use.
     * * `max` Integer - The maximum UDP port number that WebRTC should use.
     *
     * By default this value is `{ min: 0, max: 0 }` , which would apply no restriction
     * on the udp port range.
     */
    getWebRTCUDPPortRange(): WebRTCUDPPortRange;
    /**
     * the current zoom factor.
     */
    getZoomFactor(): number;
    /**
     * the current zoom level.
     */
    getZoomLevel(): number;
    /**
     * Makes the browser go back a web page.
     */
    goBack(): void;
    /**
     * Makes the browser go forward a web page.
     */
    goForward(): void;
    /**
     * Navigates browser to the specified absolute web page index.
     */
    goToIndex(index: number): void;
    /**
     * Navigates to the specified offset from the "current entry".
     */
    goToOffset(offset: number): void;
    /**
     * A promise that resolves with a key for the inserted CSS that can later be used
     * to remove the CSS via `contents.removeInsertedCSS(key)`.
     *
     * Injects CSS into the current web page and returns a unique key for the inserted
     * stylesheet.
     */
    insertCSS(css: string, options?: InsertCSSOptions): Promise<string>;
    /**
     * Inserts `text` to the focused element.
     */
    insertText(text: string): Promise<void>;
    /**
     * Starts inspecting element at position (`x`, `y`).
     */
    inspectElement(x: number, y: number): void;
    /**
     * Opens the developer tools for the service worker context.
     */
    inspectServiceWorker(): void;
    /**
     * Opens the developer tools for the shared worker context.
     */
    inspectSharedWorker(): void;
    /**
     * Inspects the shared worker based on its ID.
     */
    inspectSharedWorkerById(workerId: string): void;
    /**
     * Schedules a full repaint of the window this web contents is in.
     *
     * If _offscreen rendering_ is enabled invalidates the frame and generates a new
     * one through the `'paint'` event.
     */
    invalidate(): void;
    /**
     * Whether this page has been muted.
     */
    isAudioMuted(): boolean;
    /**
     * Whether this page is being captured. It returns true when the capturer count is
     * large then 0.
     */
    isBeingCaptured(): boolean;
    /**
     * Whether the renderer process has crashed.
     */
    isCrashed(): boolean;
    /**
     * Whether audio is currently playing.
     */
    isCurrentlyAudible(): boolean;
    /**
     * Whether the web page is destroyed.
     */
    isDestroyed(): boolean;
    /**
     * Whether the devtools view is focused .
     */
    isDevToolsFocused(): boolean;
    /**
     * Whether the devtools is opened.
     */
    isDevToolsOpened(): boolean;
    /**
     * Whether the web page is focused.
     */
    isFocused(): boolean;
    /**
     * Whether web page is still loading resources.
     */
    isLoading(): boolean;
    /**
     * Whether the main frame (and not just iframes or frames within it) is still
     * loading.
     */
    isLoadingMainFrame(): boolean;
    /**
     * Indicates whether _offscreen rendering_ is enabled.
     */
    isOffscreen(): boolean;
    /**
     * If _offscreen rendering_ is enabled returns whether it is currently painting.
     */
    isPainting(): boolean;
    /**
     * Whether the web page is waiting for a first-response from the main resource of
     * the page.
     */
    isWaitingForResponse(): boolean;
    /**
     * the promise will resolve when the page has finished loading (see
     * `did-finish-load`), and rejects if the page fails to load (see `did-fail-load`).
     *
     * Loads the given file in the window, `filePath` should be a path to an HTML file
     * relative to the root of your application.  For instance an app structure like
     * this:
     *
     * Would require code like this
     */
    loadFile(filePath: string, options?: LoadFileOptions): Promise<void>;
    /**
     * the promise will resolve when the page has finished loading (see
     * `did-finish-load`), and rejects if the page fails to load (see `did-fail-load`).
     * A noop rejection handler is already attached, which avoids unhandled rejection
     * errors.
     *
     * Loads the `url` in the window. The `url` must contain the protocol prefix, e.g.
     * the `http://` or `file://`. If the load should bypass http cache then use the
     * `pragma` header to achieve it.
     */
    loadURL(url: string, options?: LoadURLOptions): Promise<void>;
    /**
     * Opens the devtools.
     *
     * When `contents` is a `<webview>` tag, the `mode` would be `detach` by default,
     * explicitly passing an empty `mode` can force using last used dock state.
     *
     * On Windows, if Windows Control Overlay is enabled, Devtools will be opened with
     * `mode: 'detach'`.
     */
    openDevTools(options?: OpenDevToolsOptions): void;
    /**
     * Executes the editing command `paste` in web page.
     */
    paste(): void;
    /**
     * Executes the editing command `pasteAndMatchStyle` in web page.
     */
    pasteAndMatchStyle(): void;
    /**
     * Send a message to the renderer process, optionally transferring ownership of
     * zero or more `MessagePortMain` objects.
     *
     * The transferred `MessagePortMain` objects will be available in the renderer
     * process by accessing the `ports` property of the emitted event. When they arrive
     * in the renderer, they will be native DOM `MessagePort` objects.
     *
     * For example:
     */
    postMessage(channel: string, message: any, transfer?: MessagePortMain[]): void;
    /**
     * When a custom `pageSize` is passed, Chromium attempts to validate platform
     * specific minimum values for `width_microns` and `height_microns`. Width and
     * height must both be minimum 353 microns but may be higher on some operating
     * systems.
     *
     * Prints window's web page. When `silent` is set to `true`, Electron will pick the
     * system's default printer if `deviceName` is empty and the default settings for
     * printing.
     *
     * Use `page-break-before: always;` CSS style to force to print to a new page.
     *
     * Example usage:
     */
    print(options?: WebContentsPrintOptions, callback?: (success: boolean, failureReason: string) => void): void;
    /**
     * Resolves with the generated PDF data.
     *
     * Prints the window's web page as PDF.
     *
     * The `landscape` will be ignored if `@page` CSS at-rule is used in the web page.
     *
     * An example of `webContents.printToPDF`:
     *
     * See Page.printToPdf for more information.
     */
    printToPDF(options: PrintToPDFOptions): Promise<Buffer>;
    /**
     * Executes the editing command `redo` in web page.
     */
    redo(): void;
    /**
     * Reloads the current web page.
     */
    reload(): void;
    /**
     * Reloads current page and ignores cache.
     */
    reloadIgnoringCache(): void;
    /**
     * Resolves if the removal was successful.
     *
     * Removes the inserted CSS from the current web page. The stylesheet is identified
     * by its key, which is returned from `contents.insertCSS(css)`.
     */
    removeInsertedCSS(key: string): Promise<void>;
    /**
     * Removes the specified path from DevTools workspace.
     */
    removeWorkSpace(path: string): void;
    /**
     * Executes the editing command `replace` in web page.
     */
    replace(text: string): void;
    /**
     * Executes the editing command `replaceMisspelling` in web page.
     */
    replaceMisspelling(text: string): void;
    /**
     * resolves if the page is saved.
     */
    savePage(fullPath: string, saveType: 'HTMLOnly' | 'HTMLComplete' | 'MHTML'): Promise<void>;
    /**
     * Scrolls to the bottom of the current `webContents`.
     */
    scrollToBottom(): void;
    /**
     * Scrolls to the top of the current `webContents`.
     */
    scrollToTop(): void;
    /**
     * Executes the editing command `selectAll` in web page.
     */
    selectAll(): void;
    /**
     * Send an asynchronous message to the renderer process via `channel`, along with
     * arguments. Arguments will be serialized with the Structured Clone Algorithm,
     * just like `postMessage`, so prototype chains will not be included. Sending
     * Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
     *
     * :::warning
     *
     * Sending non-standard JavaScript types such as DOM objects or special Electron
     * objects will throw an exception.
     *
     * :::
     *
     * For additional reading, refer to Electron's IPC guide.
     */
    send(channel: string, ...args: any[]): void;
    /**
     * Sends an input `event` to the page. **Note:** The `BrowserWindow` containing the
     * contents needs to be focused for `sendInputEvent()` to work.
     */
    sendInputEvent(inputEvent: (MouseInputEvent) | (MouseWheelInputEvent) | (KeyboardInputEvent)): void;
    /**
     * Send an asynchronous message to a specific frame in a renderer process via
     * `channel`, along with arguments. Arguments will be serialized with the
     * Structured Clone Algorithm, just like `postMessage`, so prototype chains will
     * not be included. Sending Functions, Promises, Symbols, WeakMaps, or WeakSets
     * will throw an exception.
     *
     * > **NOTE:** Sending non-standard JavaScript types such as DOM objects or special
     * Electron objects will throw an exception.
     *
     * The renderer process can handle the message by listening to `channel` with the
     * `ipcRenderer` module.
     *
     * If you want to get the `frameId` of a given renderer context you should use the
     * `webFrame.routingId` value.  E.g.
     *
     * You can also read `frameId` from all incoming IPC messages in the main process.
     */
    sendToFrame(frameId: (number) | ([number, number]), channel: string, ...args: any[]): void;
    /**
     * Mute the audio on the current web page.
     */
    setAudioMuted(muted: boolean): void;
    /**
     * Controls whether or not this WebContents will throttle animations and timers
     * when the page becomes backgrounded. This also affects the Page Visibility API.
     */
    setBackgroundThrottling(allowed: boolean): void;
    /**
     * Changes the title of the DevTools window to `title`. This will only be visible
     * if DevTools is opened in `undocked` or `detach` mode.
     */
    setDevToolsTitle(title: string): void;
    /**
     * Uses the `devToolsWebContents` as the target `WebContents` to show devtools.
     *
     * The `devToolsWebContents` must not have done any navigation, and it should not
     * be used for other purposes after the call.
     *
     * By default Electron manages the devtools by creating an internal `WebContents`
     * with native view, which developers have very limited control of. With the
     * `setDevToolsWebContents` method, developers can use any `WebContents` to show
     * the devtools in it, including `BrowserWindow`, `BrowserView` and `<webview>`
     * tag.
     *
     * Note that closing the devtools does not destroy the `devToolsWebContents`, it is
     * caller's responsibility to destroy `devToolsWebContents`.
     *
     * An example of showing devtools in a `<webview>` tag:
     *
     * An example of showing devtools in a `BrowserWindow`:
     */
    setDevToolsWebContents(devToolsWebContents: WebContents): void;
    /**
     * If _offscreen rendering_ is enabled sets the frame rate to the specified number.
     * Only values between 1 and 240 are accepted.
     */
    setFrameRate(fps: number): void;
    /**
     * Ignore application menu shortcuts while this web contents is focused.
     */
    setIgnoreMenuShortcuts(ignore: boolean): void;
    /**
     * Sets the image animation policy for this webContents.  The policy only affects
     * _new_ images, existing images that are currently being animated are unaffected.
     * This is a known limitation in Chromium, you can force image animation to be
     * recalculated with `img.src = img.src` which will result in no network traffic
     * but will update the animation policy.
     *
     * This corresponds to the animationPolicy accessibility feature in Chromium.
     */
    setImageAnimationPolicy(policy: 'animate' | 'animateOnce' | 'noAnimation'): void;
    /**
     * Overrides the user agent for this web page.
     */
    setUserAgent(userAgent: string): void;
    /**
     * Sets the maximum and minimum pinch-to-zoom level.
     *
     * > **NOTE**: Visual zoom is disabled by default in Electron. To re-enable it,
     * call:
     */
    setVisualZoomLevelLimits(minimumLevel: number, maximumLevel: number): Promise<void>;
    /**
     * Setting the WebRTC IP handling policy allows you to control which IPs are
     * exposed via WebRTC. See BrowserLeaks for more details.
     */
    setWebRTCIPHandlingPolicy(policy: 'default' | 'default_public_interface_only' | 'default_public_and_private_interfaces' | 'disable_non_proxied_udp'): void;
    /**
     * Setting the WebRTC UDP Port Range allows you to restrict the udp port range used
     * by WebRTC. By default the port range is unrestricted. **Note:** To reset to an
     * unrestricted port range this value should be set to `{ min: 0, max: 0 }`.
     */
    setWebRTCUDPPortRange(udpPortRange: UdpPortRange): void;
    /**
     * Called before creating a window a new window is requested by the renderer, e.g.
     * by `window.open()`, a link with `target="_blank"`, shift+clicking on a link, or
     * submitting a form with `<form target="_blank">`. See `window.open()` for more
     * details and how to use this in conjunction with `did-create-window`.
     */
    setWindowOpenHandler(handler: (details: HandlerDetails) => ({action: 'deny'}) | ({action: 'allow', outlivesOpener?: boolean, overrideBrowserWindowOptions?: BrowserWindowConstructorOptions})): void;
    /**
     * Changes the zoom factor to the specified factor. Zoom factor is zoom percent
     * divided by 100, so 300% = 3.0.
     *
     * The factor must be greater than 0.0.
     */
    setZoomFactor(factor: number): void;
    /**
     * Changes the zoom level to the specified level. The original size is 0 and each
     * increment above or below represents zooming 20% larger or smaller to default
     * limits of 300% and 50% of original size, respectively. The formula for this is
     * `scale := 1.2 ^ level`.
     *
     * > **NOTE**: The zoom policy at the Chromium level is same-origin, meaning that
     * the zoom level for a specific domain propagates across all instances of windows
     * with the same domain. Differentiating the window URLs will make zoom work
     * per-window.
     */
    setZoomLevel(level: number): void;
    /**
     * Shows pop-up dictionary that searches the selected word on the page.
     *
     * @platform darwin
     */
    showDefinitionForSelection(): void;
    /**
     * Sets the `item` as dragging item for current drag-drop operation, `file` is the
     * absolute path of the file to be dragged, and `icon` is the image showing under
     * the cursor when dragging.
     */
    startDrag(item: Item): void;
    /**
     * If _offscreen rendering_ is enabled and not painting, start painting.
     */
    startPainting(): void;
    /**
     * Stops any pending navigation.
     */
    stop(): void;
    /**
     * Stops any `findInPage` request for the `webContents` with the provided `action`.
     */
    stopFindInPage(action: 'clearSelection' | 'keepSelection' | 'activateSelection'): void;
    /**
     * If _offscreen rendering_ is enabled and painting, stop painting.
     */
    stopPainting(): void;
    /**
     * Indicates whether the snapshot has been created successfully.
     *
     * Takes a V8 heap snapshot and saves it to `filePath`.
     */
    takeHeapSnapshot(filePath: string): Promise<void>;
    /**
     * Toggles the developer tools.
     */
    toggleDevTools(): void;
    /**
     * Executes the editing command `undo` in web page.
     */
    undo(): void;
    /**
     * Executes the editing command `unselect` in web page.
     */
    unselect(): void;
    /**
     * A `boolean` property that determines whether this page is muted.
     */
    audioMuted: boolean;
    /**
     * A `boolean` property that determines whether or not this WebContents will
     * throttle animations and timers when the page becomes backgrounded. This also
     * affects the Page Visibility API.
     */
    backgroundThrottling: boolean;
    /**
     * A `Debugger` instance for this webContents.
     *
     */
    readonly debugger: Debugger;
    /**
     * A `WebContents | null` property that represents the of DevTools `WebContents`
     * associated with a given `WebContents`.
     *
     * **Note:** Users should never store this object because it may become `null` when
     * the DevTools has been closed.
     *
     */
    readonly devToolsWebContents: (WebContents) | (null);
    /**
     * An `Integer` property that sets the frame rate of the web contents to the
     * specified number. Only values between 1 and 240 are accepted.
     *
     * Only applicable if _offscreen rendering_ is enabled.
     */
    frameRate: number;
    /**
     * A `WebContents` instance that might own this `WebContents`.
     *
     */
    readonly hostWebContents: WebContents;
    /**
     * A `Integer` representing the unique ID of this WebContents. Each ID is unique
     * among all `WebContents` instances of the entire Electron application.
     *
     */
    readonly id: number;
    /**
     * An `IpcMain` scoped to just IPC messages sent from this WebContents.
     *
     * IPC messages sent with `ipcRenderer.send`, `ipcRenderer.sendSync` or
     * `ipcRenderer.postMessage` will be delivered in the following order:
     *
     * * `contents.on('ipc-message')`
     * * `contents.mainFrame.on(channel)`
     * * `contents.ipc.on(channel)`
     * * `ipcMain.on(channel)`
     *
     * Handlers registered with `invoke` will be checked in the following order. The
     * first one that is defined will be called, the rest will be ignored.
     *
     * * `contents.mainFrame.handle(channel)`
     * * `contents.handle(channel)`
     * * `ipcMain.handle(channel)`
     *
     * A handler or event listener registered on the WebContents will receive IPC
     * messages sent from any frame, including child frames. In most cases, only the
     * main frame can send IPC messages. However, if the `nodeIntegrationInSubFrames`
     * option is enabled, it is possible for child frames to send IPC messages also. In
     * that case, handlers should check the `senderFrame` property of the IPC event to
     * ensure that the message is coming from the expected frame. Alternatively,
     * register handlers on the appropriate frame directly using the `WebFrameMain.ipc`
     * interface.
     *
     */
    readonly ipc: IpcMain;
    /**
     * A `WebFrameMain` property that represents the top frame of the page's frame
     * hierarchy.
     *
     */
    readonly mainFrame: WebFrameMain;
    /**
     * A `WebFrameMain` property that represents the frame that opened this
     * WebContents, either with open(), or by navigating a link with a target
     * attribute.
     *
     */
    readonly opener: WebFrameMain;
    /**
     * A `Session` used by this webContents.
     *
     */
    readonly session: Session;
    /**
     * A `string` property that determines the user agent for this web page.
     */
    userAgent: string;
    /**
     * A `number` property that determines the zoom factor for this web contents.
     *
     * The zoom factor is the zoom percent divided by 100, so 300% = 3.0.
     */
    zoomFactor: number;
    /**
     * A `number` property that determines the zoom level for this web contents.
     *
     * The original size is 0 and each increment above or below represents zooming 20%
     * larger or smaller to default limits of 300% and 50% of original size,
     * respectively. The formula for this is `scale := 1.2 ^ level`.
     */
    zoomLevel: number;
  }

  interface WebFrame {

    // Docs: https://electronjs.org/docs/api/web-frame

    /**
     * Attempts to free memory that is no longer being used (like images from a
     * previous navigation).
     *
     * Note that blindly calling this method probably makes Electron slower since it
     * will have to refill these emptied caches, you should only call it if an event in
     * your app has occurred that makes you think your page is actually using less
     * memory (i.e. you have navigated from a super heavy page to a mostly empty one,
     * and intend to stay there).
     */
    clearCache(): void;
    /**
     * A promise that resolves with the result of the executed code or is rejected if
     * execution throws or results in a rejected promise.
     *
     * Evaluates `code` in page.
     *
     * In the browser window some HTML APIs like `requestFullScreen` can only be
     * invoked by a gesture from the user. Setting `userGesture` to `true` will remove
     * this limitation.
     */
    executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any, error: Error) => void): Promise<any>;
    /**
     * A promise that resolves with the result of the executed code or is rejected if
     * execution could not start.
     *
     * Works like `executeJavaScript` but evaluates `scripts` in an isolated context.
     *
     * Note that when the execution of script fails, the returned promise will not
     * reject and the `result` would be `undefined`. This is because Chromium does not
     * dispatch errors of isolated worlds to foreign worlds.
     */
    executeJavaScriptInIsolatedWorld(worldId: number, scripts: WebSource[], userGesture?: boolean, callback?: (result: any, error: Error) => void): Promise<any>;
    /**
     * A child of `webFrame` with the supplied `name`, `null` would be returned if
     * there's no such frame or if the frame is not in the current renderer process.
     */
    findFrameByName(name: string): WebFrame;
    /**
     * that has the supplied `routingId`, `null` if not found.
     */
    findFrameByRoutingId(routingId: number): WebFrame;
    /**
     * The frame element in `webFrame's` document selected by `selector`, `null` would
     * be returned if `selector` does not select a frame or if the frame is not in the
     * current renderer process.
     */
    getFrameForSelector(selector: string): WebFrame;
    /**
     * * `images` MemoryUsageDetails
     * * `scripts` MemoryUsageDetails
     * * `cssStyleSheets` MemoryUsageDetails
     * * `xslStyleSheets` MemoryUsageDetails
     * * `fonts` MemoryUsageDetails
     * * `other` MemoryUsageDetails
     *
     * Returns an object describing usage information of Blink's internal memory
     * caches.
     *
     * This will generate:
     */
    getResourceUsage(): ResourceUsage;
    /**
     * A list of suggested words for a given word. If the word is spelled correctly,
     * the result will be empty.
     */
    getWordSuggestions(word: string): string[];
    /**
     * The current zoom factor.
     */
    getZoomFactor(): number;
    /**
     * The current zoom level.
     */
    getZoomLevel(): number;
    /**
     * A key for the inserted CSS that can later be used to remove the CSS via
     * `webFrame.removeInsertedCSS(key)`.
     *
     * Injects CSS into the current web page and returns a unique key for the inserted
     * stylesheet.
     */
    insertCSS(css: string, options?: InsertCSSOptions): string;
    /**
     * Inserts `text` to the focused element.
     */
    insertText(text: string): void;
    /**
     * True if the word is misspelled according to the built in spellchecker, false
     * otherwise. If no dictionary is loaded, always return false.
     */
    isWordMisspelled(word: string): boolean;
    /**
     * Removes the inserted CSS from the current web page. The stylesheet is identified
     * by its key, which is returned from `webFrame.insertCSS(css)`.
     */
    removeInsertedCSS(key: string): void;
    /**
     * Set the security origin, content security policy and name of the isolated world.
     * Note: If the `csp` is specified, then the `securityOrigin` also has to be
     * specified.
     */
    setIsolatedWorldInfo(worldId: number, info: Info): void;
    /**
     * Sets a provider for spell checking in input fields and text areas.
     *
     * If you want to use this method you must disable the builtin spellchecker when
     * you construct the window.
     *
     * The `provider` must be an object that has a `spellCheck` method that accepts an
     * array of individual words for spellchecking. The `spellCheck` function runs
     * asynchronously and calls the `callback` function with an array of misspelt words
     * when complete.
     *
     * An example of using node-spellchecker as provider:
     */
    setSpellCheckProvider(language: string, provider: Provider): void;
    /**
     * Sets the maximum and minimum pinch-to-zoom level.
     *
     * > **NOTE**: Visual zoom is disabled by default in Electron. To re-enable it,
     * call:
     *
     * > **NOTE**: Visual zoom only applies to pinch-to-zoom behavior. Cmd+/-/0 zoom
     * shortcuts are controlled by the 'zoomIn', 'zoomOut', and 'resetZoom' MenuItem
     * roles in the application Menu. To disable shortcuts, manually define the Menu
     * and omit zoom roles from the definition.
     */
    setVisualZoomLevelLimits(minimumLevel: number, maximumLevel: number): void;
    /**
     * Changes the zoom factor to the specified factor. Zoom factor is zoom percent
     * divided by 100, so 300% = 3.0.
     *
     * The factor must be greater than 0.0.
     */
    setZoomFactor(factor: number): void;
    /**
     * Changes the zoom level to the specified level. The original size is 0 and each
     * increment above or below represents zooming 20% larger or smaller to default
     * limits of 300% and 50% of original size, respectively.
     *
     * > **NOTE**: The zoom policy at the Chromium level is same-origin, meaning that
     * the zoom level for a specific domain propagates across all instances of windows
     * with the same domain. Differentiating the window URLs will make zoom work
     * per-window.
     */
    setZoomLevel(level: number): void;
    /**
     * A `WebFrame | null` representing the first child frame of `webFrame`, the
     * property would be `null` if `webFrame` has no children or if first child is not
     * in the current renderer process.
     *
     */
    readonly firstChild: (WebFrame) | (null);
    /**
     * A `WebFrame | null` representing next sibling frame, the property would be
     * `null` if `webFrame` is the last frame in its parent or if the next sibling is
     * not in the current renderer process.
     *
     */
    readonly nextSibling: (WebFrame) | (null);
    /**
     * A `WebFrame | null` representing the frame which opened `webFrame`, the property
     * would be `null` if there's no opener or opener is not in the current renderer
     * process.
     *
     */
    readonly opener: (WebFrame) | (null);
    /**
     * A `WebFrame | null` representing parent frame of `webFrame`, the property would
     * be `null` if `webFrame` is top or parent is not in the current renderer process.
     *
     */
    readonly parent: (WebFrame) | (null);
    /**
     * An `Integer` representing the unique frame id in the current renderer process.
     * Distinct WebFrame instances that refer to the same underlying frame will have
     * the same `routingId`.
     *
     */
    readonly routingId: number;
    /**
     * A `WebFrame | null` representing top frame in frame hierarchy to which
     * `webFrame` belongs, the property would be `null` if top frame is not in the
     * current renderer process.
     *
     */
    readonly top: (WebFrame) | (null);
  }

  class WebFrameMain extends NodeEventEmitter {

    // Docs: https://electronjs.org/docs/api/web-frame-main

    /**
     * A frame with the given process and routing IDs, or `undefined` if there is no
     * WebFrameMain associated with the given IDs.
     */
    static fromId(processId: number, routingId: number): (WebFrameMain) | (undefined);
    /**
     * Emitted when the document is loaded.
     */
    on(event: 'dom-ready', listener: Function): this;
    off(event: 'dom-ready', listener: Function): this;
    once(event: 'dom-ready', listener: Function): this;
    addListener(event: 'dom-ready', listener: Function): this;
    removeListener(event: 'dom-ready', listener: Function): this;
    /**
     * A promise that resolves with the result of the executed code or is rejected if
     * execution throws or results in a rejected promise.
     *
     * Evaluates `code` in page.
     *
     * In the browser window some HTML APIs like `requestFullScreen` can only be
     * invoked by a gesture from the user. Setting `userGesture` to `true` will remove
     * this limitation.
     */
    executeJavaScript(code: string, userGesture?: boolean): Promise<unknown>;
    /**
     * Send a message to the renderer process, optionally transferring ownership of
     * zero or more `MessagePortMain` objects.
     *
     * The transferred `MessagePortMain` objects will be available in the renderer
     * process by accessing the `ports` property of the emitted event. When they arrive
     * in the renderer, they will be native DOM `MessagePort` objects.
     *
     * For example:
     */
    postMessage(channel: string, message: any, transfer?: MessagePortMain[]): void;
    /**
     * Whether the reload was initiated successfully. Only results in `false` when the
     * frame has no history.
     */
    reload(): boolean;
    /**
     * Send an asynchronous message to the renderer process via `channel`, along with
     * arguments. Arguments will be serialized with the Structured Clone Algorithm,
     * just like `postMessage`, so prototype chains will not be included. Sending
     * Functions, Promises, Symbols, WeakMaps, or WeakSets will throw an exception.
     *
     * The renderer process can handle the message by listening to `channel` with the
     * `ipcRenderer` module.
     */
    send(channel: string, ...args: any[]): void;
    /**
     * A `WebFrameMain[]` collection containing the direct descendents of `frame`.
     *
     */
    readonly frames: WebFrameMain[];
    /**
     * A `WebFrameMain[]` collection containing every frame in the subtree of `frame`,
     * including itself. This can be useful when traversing through all frames.
     *
     */
    readonly framesInSubtree: WebFrameMain[];
    /**
     * An `Integer` representing the id of the frame's internal FrameTreeNode instance.
     * This id is browser-global and uniquely identifies a frame that hosts content.
     * The identifier is fixed at the creation of the frame and stays constant for the
     * lifetime of the frame. When the frame is removed, the id is not used again.
     *
     */
    readonly frameTreeNodeId: number;
    /**
     * An `IpcMain` instance scoped to the frame.
     *
     * IPC messages sent with `ipcRenderer.send`, `ipcRenderer.sendSync` or
     * `ipcRenderer.postMessage` will be delivered in the following order:
     *
     * * `contents.on('ipc-message')`
     * * `contents.mainFrame.on(channel)`
     * * `contents.ipc.on(channel)`
     * * `ipcMain.on(channel)`
     *
     * Handlers registered with `invoke` will be checked in the following order. The
     * first one that is defined will be called, the rest will be ignored.
     *
     * * `contents.mainFrame.handle(channel)`
     * * `contents.handle(channel)`
     * * `ipcMain.handle(channel)`
     *
     * In most cases, only the main frame of a WebContents can send or receive IPC
     * messages. However, if the `nodeIntegrationInSubFrames` option is enabled, it is
     * possible for child frames to send and receive IPC messages also. The
     * `WebContents.ipc` interface may be more convenient when
     * `nodeIntegrationInSubFrames` is not enabled.
     *
     */
    readonly ipc: IpcMain;
    /**
     * A `string` representing the frame name.
     *
     */
    readonly name: string;
    /**
     * A `string` representing the current origin of the frame, serialized according to
     * RFC 6454. This may be different from the URL. For instance, if the frame is a
     * child window opened to `about:blank`, then `frame.origin` will return the parent
     * frame's origin, while `frame.url` will return the empty string. Pages without a
     * scheme/host/port triple origin will have the serialized origin of `"null"` (that
     * is, the string containing the letters n, u, l, l).
     *
     */
    readonly origin: string;
    /**
     * An `Integer` representing the operating system `pid` of the process which owns
     * this frame.
     *
     */
    readonly osProcessId: number;
    /**
     * A `WebFrameMain | null` representing parent frame of `frame`, the property would
     * be `null` if `frame` is the top frame in the frame hierarchy.
     *
     */
    readonly parent: (WebFrameMain) | (null);
    /**
     * An `Integer` representing the Chromium internal `pid` of the process which owns
     * this frame. This is not the same as the OS process ID; to read that use
     * `frame.osProcessId`.
     *
     */
    readonly processId: number;
    /**
     * An `Integer` representing the unique frame id in the current renderer process.
     * Distinct `WebFrameMain` instances that refer to the same underlying frame will
     * have the same `routingId`.
     *
     */
    readonly routingId: number;
    /**
     * A `WebFrameMain | null` representing top frame in the frame hierarchy to which
     * `frame` belongs.
     *
     */
    readonly top: (WebFrameMain) | (null);
    /**
     * A `string` representing the current URL of the frame.
     *
     */
    readonly url: string;
    /**
     * A `string` representing the visibility state of the frame.
     *
     * See also how the Page Visibility API is affected by other Electron APIs.
     *
     */
    readonly visibilityState: string;
  }

  interface WebPreferences {

    // Docs: https://electronjs.org/docs/api/structures/web-preferences

    /**
     * An alternative title string provided only to accessibility tools such as screen
     * readers. This string is not directly visible to users.
     */
    accessibleTitle?: string;
    /**
     * A list of strings that will be appended to `process.argv` in the renderer
     * process of this app.  Useful for passing small bits of data down to renderer
     * process preload scripts.
     */
    additionalArguments?: string[];
    /**
     * Allow an https page to run JavaScript, CSS or plugins from http URLs. Default is
     * `false`.
     */
    allowRunningInsecureContent?: boolean;
    /**
     * Autoplay policy to apply to content in the window, can be
     * `no-user-gesture-required`, `user-gesture-required`,
     * `document-user-activation-required`. Defaults to `no-user-gesture-required`.
     */
    autoplayPolicy?: ('no-user-gesture-required' | 'user-gesture-required' | 'document-user-activation-required');
    /**
     * Whether to throttle animations and timers when the page becomes background. This
     * also affects the Page Visibility API. When at least one webContents displayed in
     * a single browserWindow has disabled `backgroundThrottling` then frames will be
     * drawn and swapped for the whole window and other webContents displayed by it.
     * Defaults to `true`.
     */
    backgroundThrottling?: boolean;
    /**
     * Whether to run Electron APIs and the specified `preload` script in a separate
     * JavaScript context. Defaults to `true`. The context that the `preload` script
     * runs in will only have access to its own dedicated `document` and `window`
     * globals, as well as its own set of JavaScript builtins (`Array`, `Object`,
     * `JSON`, etc.), which are all invisible to the loaded content. The Electron API
     * will only be available in the `preload` script and not the loaded page. This
     * option should be used when loading potentially untrusted remote content to
     * ensure the loaded content cannot tamper with the `preload` script and any
     * Electron APIs being used.  This option uses the same technique used by Chrome
     * Content Scripts.  You can access this context in the dev tools by selecting the
     * 'Electron Isolated Context' entry in the combo box at the top of the Console
     * tab.
     */
    contextIsolation?: boolean;
    /**
     * Defaults to `ISO-8859-1`.
     */
    defaultEncoding?: string;
    /**
     * Sets the default font for the font-family.
     */
    defaultFontFamily?: DefaultFontFamily;
    /**
     * Defaults to `16`.
     */
    defaultFontSize?: number;
    /**
     * Defaults to `13`.
     */
    defaultMonospaceFontSize?: number;
    /**
     * Whether to enable DevTools. If it is set to `false`, can not use
     * `BrowserWindow.webContents.openDevTools()` to open DevTools. Default is `true`.
     */
    devTools?: boolean;
    /**
     * A list of feature strings separated by `,`, like `CSSVariables,KeyboardEventKey`
     * to disable. The full list of supported feature strings can be found in the
     * RuntimeEnabledFeatures.json5 file.
     */
    disableBlinkFeatures?: string;
    /**
     * Whether to disable dialogs completely. Overrides `safeDialogs`. Default is
     * `false`.
     */
    disableDialogs?: boolean;
    /**
     * Whether to prevent the window from resizing when entering HTML Fullscreen.
     * Default is `false`.
     */
    disableHtmlFullscreenWindowResize?: boolean;
    /**
     * A list of feature strings separated by `,`, like `CSSVariables,KeyboardEventKey`
     * to enable. The full list of supported feature strings can be found in the
     * RuntimeEnabledFeatures.json5 file.
     */
    enableBlinkFeatures?: string;
    /**
     * Whether to enable preferred size mode. The preferred size is the minimum size
     * needed to contain the layout of the document—without requiring scrolling.
     * Enabling this will cause the `preferred-size-changed` event to be emitted on the
     * `WebContents` when the preferred size changes. Default is `false`.
     */
    enablePreferredSizeMode?: boolean;
    /**
     * Whether to enable the WebSQL api. Default is `true`.
     */
    enableWebSQL?: boolean;
    /**
     * Enables Chromium's experimental features. Default is `false`.
     */
    experimentalFeatures?: boolean;
    /**
     * Specifies how to run image animations (E.g. GIFs).  Can be `animate`,
     * `animateOnce` or `noAnimation`.  Default is `animate`.
     */
    imageAnimationPolicy?: ('animate' | 'animateOnce' | 'noAnimation');
    /**
     * Enables image support. Default is `true`.
     */
    images?: boolean;
    /**
     * Enables JavaScript support. Default is `true`.
     */
    javascript?: boolean;
    /**
     * Defaults to `0`.
     */
    minimumFontSize?: number;
    /**
     * Whether dragging and dropping a file or link onto the page causes a navigation.
     * Default is `false`.
     */
    navigateOnDragDrop?: boolean;
    /**
     * Whether node integration is enabled. Default is `false`.
     */
    nodeIntegration?: boolean;
    /**
     * Experimental option for enabling Node.js support in sub-frames such as iframes
     * and child windows. All your preloads will load for every iframe, you can use
     * `process.isMainFrame` to determine if you are in the main frame or not.
     */
    nodeIntegrationInSubFrames?: boolean;
    /**
     * Whether node integration is enabled in web workers. Default is `false`. More
     * about this can be found in Multithreading.
     */
    nodeIntegrationInWorker?: boolean;
    /**
     * Whether to enable offscreen rendering for the browser window. Defaults to
     * `false`. See the offscreen rendering tutorial for more details.
     */
    offscreen?: boolean;
    /**
     * Sets the session used by the page according to the session's partition string.
     * If `partition` starts with `persist:`, the page will use a persistent session
     * available to all pages in the app with the same `partition`. If there is no
     * `persist:` prefix, the page will use an in-memory session. By assigning the same
     * `partition`, multiple pages can share the same session. Default is the default
     * session.
     */
    partition?: string;
    /**
     * Whether plugins should be enabled. Default is `false`.
     */
    plugins?: boolean;
    /**
     * Specifies a script that will be loaded before other scripts run in the page.
     * This script will always have access to node APIs no matter whether node
     * integration is turned on or off. The value should be the absolute file path to
     * the script. When node integration is turned off, the preload script can
     * reintroduce Node global symbols back to the global scope. See example here.
     */
    preload?: string;
    /**
     * Whether to enable browser style consecutive dialog protection. Default is
     * `false`.
     */
    safeDialogs?: boolean;
    /**
     * The message to display when consecutive dialog protection is triggered. If not
     * defined the default message would be used, note that currently the default
     * message is in English and not localized.
     */
    safeDialogsMessage?: string;
    /**
     * If set, this will sandbox the renderer associated with the window, making it
     * compatible with the Chromium OS-level sandbox and disabling the Node.js engine.
     * This is not the same as the `nodeIntegration` option and the APIs available to
     * the preload script are more limited. Read more about the option here.
     */
    sandbox?: boolean;
    /**
     * Enables scroll bounce (rubber banding) effect on macOS. Default is `false`.
     *
     * @platform darwin
     */
    scrollBounce?: boolean;
    /**
     * Sets the session used by the page. Instead of passing the Session object
     * directly, you can also choose to use the `partition` option instead, which
     * accepts a partition string. When both `session` and `partition` are provided,
     * `session` will be preferred. Default is the default session.
     */
    session?: Session;
    /**
     * Whether to enable the builtin spellchecker. Default is `true`.
     */
    spellcheck?: boolean;
    /**
     * Make TextArea elements resizable. Default is `true`.
     */
    textAreasAreResizable?: boolean;
    /**
     * Enforces the v8 code caching policy used by blink. Accepted values are
     */
    v8CacheOptions?: ('none' | 'code' | 'bypassHeatCheck' | 'bypassHeatCheckAndEagerCompile');
    /**
     * Enables WebGL support. Default is `true`.
     */
    webgl?: boolean;
    /**
     * When `false`, it will disable the same-origin policy (usually using testing
     * websites by people), and set `allowRunningInsecureContent` to `true` if this
     * options has not been set by user. Default is `true`.
     */
    webSecurity?: boolean;
    /**
     * Whether to enable the `<webview>` tag. Defaults to `false`. **Note:** The
     * `preload` script configured for the `<webview>` will have node integration
     * enabled when it is executed so you should ensure remote/untrusted content is not
     * able to create a `<webview>` tag with a possibly malicious `preload` script. You
     * can use the `will-attach-webview` event on webContents to strip away the
     * `preload` script and to validate or alter the `<webview>`'s initial settings.
     */
    webviewTag?: boolean;
    /**
     * The default zoom factor of the page, `3.0` represents `300%`. Default is `1.0`.
     */
    zoomFactor?: number;
  }

  class WebRequest {

    // Docs: https://electronjs.org/docs/api/web-request

    /**
     * The `listener` will be called with `listener(details)` when a server initiated
     * redirect is about to occur.
     */
    onBeforeRedirect(filter: WebRequestFilter, listener: ((details: OnBeforeRedirectListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` when a server initiated
     * redirect is about to occur.
     */
    onBeforeRedirect(listener: ((details: OnBeforeRedirectListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details, callback)` when a request
     * is about to occur.
     *
     * The `uploadData` is an array of `UploadData` objects.
     *
     * The `callback` has to be called with an `response` object.
     *
     * Some examples of valid `urls`:
     */
    onBeforeRequest(filter: WebRequestFilter, listener: ((details: OnBeforeRequestListenerDetails, callback: (response: CallbackResponse) => void) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details, callback)` when a request
     * is about to occur.
     *
     * The `uploadData` is an array of `UploadData` objects.
     *
     * The `callback` has to be called with an `response` object.
     *
     * Some examples of valid `urls`:
     */
    onBeforeRequest(listener: ((details: OnBeforeRequestListenerDetails, callback: (response: CallbackResponse) => void) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details, callback)` before sending
     * an HTTP request, once the request headers are available. This may occur after a
     * TCP connection is made to the server, but before any http data is sent.
     *
     * The `callback` has to be called with a `response` object.
     */
    onBeforeSendHeaders(filter: WebRequestFilter, listener: ((details: OnBeforeSendHeadersListenerDetails, callback: (beforeSendResponse: BeforeSendResponse) => void) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details, callback)` before sending
     * an HTTP request, once the request headers are available. This may occur after a
     * TCP connection is made to the server, but before any http data is sent.
     *
     * The `callback` has to be called with a `response` object.
     */
    onBeforeSendHeaders(listener: ((details: OnBeforeSendHeadersListenerDetails, callback: (beforeSendResponse: BeforeSendResponse) => void) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` when a request is
     * completed.
     */
    onCompleted(filter: WebRequestFilter, listener: ((details: OnCompletedListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` when a request is
     * completed.
     */
    onCompleted(listener: ((details: OnCompletedListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` when an error occurs.
     */
    onErrorOccurred(filter: WebRequestFilter, listener: ((details: OnErrorOccurredListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` when an error occurs.
     */
    onErrorOccurred(listener: ((details: OnErrorOccurredListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details, callback)` when HTTP
     * response headers of a request have been received.
     *
     * The `callback` has to be called with a `response` object.
     */
    onHeadersReceived(filter: WebRequestFilter, listener: ((details: OnHeadersReceivedListenerDetails, callback: (headersReceivedResponse: HeadersReceivedResponse) => void) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details, callback)` when HTTP
     * response headers of a request have been received.
     *
     * The `callback` has to be called with a `response` object.
     */
    onHeadersReceived(listener: ((details: OnHeadersReceivedListenerDetails, callback: (headersReceivedResponse: HeadersReceivedResponse) => void) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` when first byte of the
     * response body is received. For HTTP requests, this means that the status line
     * and response headers are available.
     */
    onResponseStarted(filter: WebRequestFilter, listener: ((details: OnResponseStartedListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` when first byte of the
     * response body is received. For HTTP requests, this means that the status line
     * and response headers are available.
     */
    onResponseStarted(listener: ((details: OnResponseStartedListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` just before a request is
     * going to be sent to the server, modifications of previous `onBeforeSendHeaders`
     * response are visible by the time this listener is fired.
     */
    onSendHeaders(filter: WebRequestFilter, listener: ((details: OnSendHeadersListenerDetails) => void) | (null)): void;
    /**
     * The `listener` will be called with `listener(details)` just before a request is
     * going to be sent to the server, modifications of previous `onBeforeSendHeaders`
     * response are visible by the time this listener is fired.
     */
    onSendHeaders(listener: ((details: OnSendHeadersListenerDetails) => void) | (null)): void;
  }

  interface WebRequestFilter {

    // Docs: https://electronjs.org/docs/api/structures/web-request-filter

    /**
     * Array of types that will be used to filter out the requests that do not match
     * the types. When not specified, all types will be matched. Can be `mainFrame`,
     * `subFrame`, `stylesheet`, `script`, `image`, `font`, `object`, `xhr`, `ping`,
     * `cspReport`, `media` or `webSocket`.
     */
    types?: Array<'mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket'>;
    /**
     * Array of URL patterns that will be used to filter out the requests that do not
     * match the URL patterns.
     */
    urls: string[];
  }

  interface WebSource {

    // Docs: https://electronjs.org/docs/api/structures/web-source

    code: string;
    url?: string;
  }

  interface WebUtils extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/web-utils

    /**
     * The file system path that this `File` object points to. In the case where the
     * object passed in is not a `File` object an exception is thrown. In the case
     * where the File object passed in was constructed in JS and is not backed by a
     * file on disk an empty string is returned.
     *
     * This method superceded the previous augmentation to the `File` object with the
     * `path` property.  An example is included below.
     */
    getPathForFile(file: File): string;
  }

  interface WebviewTag extends HTMLElement {

    // Docs: https://electronjs.org/docs/api/webview-tag

    /**
     * Fired when a load has committed. This includes navigation within the current
     * document as well as subframe document-level loads, but does not include
     * asynchronous resource loads.
     */
    addEventListener(event: 'load-commit', listener: (event: LoadCommitEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'load-commit', listener: (event: LoadCommitEvent) => void): this;
    /**
     * Fired when the navigation is done, i.e. the spinner of the tab will stop
     * spinning, and the `onload` event is dispatched.
     */
    addEventListener(event: 'did-finish-load', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-finish-load', listener: (event: DOMEvent) => void): this;
    /**
     * This event is like `did-finish-load`, but fired when the load failed or was
     * cancelled, e.g. `window.stop()` is invoked.
     */
    addEventListener(event: 'did-fail-load', listener: (event: DidFailLoadEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-fail-load', listener: (event: DidFailLoadEvent) => void): this;
    /**
     * Fired when a frame has done navigation.
     */
    addEventListener(event: 'did-frame-finish-load', listener: (event: DidFrameFinishLoadEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-frame-finish-load', listener: (event: DidFrameFinishLoadEvent) => void): this;
    /**
     * Corresponds to the points in time when the spinner of the tab starts spinning.
     */
    addEventListener(event: 'did-start-loading', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-start-loading', listener: (event: DOMEvent) => void): this;
    /**
     * Corresponds to the points in time when the spinner of the tab stops spinning.
     */
    addEventListener(event: 'did-stop-loading', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-stop-loading', listener: (event: DOMEvent) => void): this;
    /**
     * Fired when attached to the embedder web contents.
     */
    addEventListener(event: 'did-attach', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-attach', listener: (event: DOMEvent) => void): this;
    /**
     * Fired when document in the given frame is loaded.
     */
    addEventListener(event: 'dom-ready', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'dom-ready', listener: (event: DOMEvent) => void): this;
    /**
     * Fired when page title is set during navigation. `explicitSet` is false when
     * title is synthesized from file url.
     */
    addEventListener(event: 'page-title-updated', listener: (event: PageTitleUpdatedEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'page-title-updated', listener: (event: PageTitleUpdatedEvent) => void): this;
    /**
     * Fired when page receives favicon urls.
     */
    addEventListener(event: 'page-favicon-updated', listener: (event: PageFaviconUpdatedEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'page-favicon-updated', listener: (event: PageFaviconUpdatedEvent) => void): this;
    /**
     * Fired when page enters fullscreen triggered by HTML API.
     */
    addEventListener(event: 'enter-html-full-screen', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'enter-html-full-screen', listener: (event: DOMEvent) => void): this;
    /**
     * Fired when page leaves fullscreen triggered by HTML API.
     */
    addEventListener(event: 'leave-html-full-screen', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'leave-html-full-screen', listener: (event: DOMEvent) => void): this;
    /**
     * Fired when the guest window logs a console message.
     *
     * The following example code forwards all log messages to the embedder's console
     * without regard for log level or other properties.
     */
    addEventListener(event: 'console-message', listener: (event: ConsoleMessageEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'console-message', listener: (event: ConsoleMessageEvent) => void): this;
    /**
     * Fired when a result is available for `webview.findInPage` request.
     */
    addEventListener(event: 'found-in-page', listener: (event: FoundInPageEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'found-in-page', listener: (event: FoundInPageEvent) => void): this;
    /**
     * Emitted when a user or the page wants to start navigation. It can happen when
     * the `window.location` object is changed or a user clicks a link in the page.
     *
     * This event will not emit when the navigation is started programmatically with
     * APIs like `<webview>.loadURL` and `<webview>.back`.
     *
     * It is also not emitted during in-page navigation, such as clicking anchor links
     * or updating the `window.location.hash`. Use `did-navigate-in-page` event for
     * this purpose.
     *
     * Calling `event.preventDefault()` does **NOT** have any effect.
     */
    addEventListener(event: 'will-navigate', listener: (event: WillNavigateEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'will-navigate', listener: (event: WillNavigateEvent) => void): this;
    /**
     * Emitted when a user or the page wants to start navigation anywhere in the
     * `<webview>` or any frames embedded within. It can happen when the
     * `window.location` object is changed or a user clicks a link in the page.
     *
     * This event will not emit when the navigation is started programmatically with
     * APIs like `<webview>.loadURL` and `<webview>.back`.
     *
     * It is also not emitted during in-page navigation, such as clicking anchor links
     * or updating the `window.location.hash`. Use `did-navigate-in-page` event for
     * this purpose.
     *
     * Calling `event.preventDefault()` does **NOT** have any effect.
     */
    addEventListener(event: 'will-frame-navigate', listener: (event: WillFrameNavigateEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'will-frame-navigate', listener: (event: WillFrameNavigateEvent) => void): this;
    /**
     * Emitted when any frame (including main) starts navigating. `isInPlace` will be
     * `true` for in-page navigations.
     */
    addEventListener(event: 'did-start-navigation', listener: (event: DidStartNavigationEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-start-navigation', listener: (event: DidStartNavigationEvent) => void): this;
    /**
     * Emitted after a server side redirect occurs during navigation. For example a 302
     * redirect.
     */
    addEventListener(event: 'did-redirect-navigation', listener: (event: DidRedirectNavigationEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-redirect-navigation', listener: (event: DidRedirectNavigationEvent) => void): this;
    /**
     * Emitted when a navigation is done.
     *
     * This event is not emitted for in-page navigations, such as clicking anchor links
     * or updating the `window.location.hash`. Use `did-navigate-in-page` event for
     * this purpose.
     */
    addEventListener(event: 'did-navigate', listener: (event: DidNavigateEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-navigate', listener: (event: DidNavigateEvent) => void): this;
    /**
     * Emitted when any frame navigation is done.
     *
     * This event is not emitted for in-page navigations, such as clicking anchor links
     * or updating the `window.location.hash`. Use `did-navigate-in-page` event for
     * this purpose.
     */
    addEventListener(event: 'did-frame-navigate', listener: (event: DidFrameNavigateEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-frame-navigate', listener: (event: DidFrameNavigateEvent) => void): this;
    /**
     * Emitted when an in-page navigation happened.
     *
     * When in-page navigation happens, the page URL changes but does not cause
     * navigation outside of the page. Examples of this occurring are when anchor links
     * are clicked or when the DOM `hashchange` event is triggered.
     */
    addEventListener(event: 'did-navigate-in-page', listener: (event: DidNavigateInPageEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-navigate-in-page', listener: (event: DidNavigateInPageEvent) => void): this;
    /**
     * Fired when the guest page attempts to close itself.
     *
     * The following example code navigates the `webview` to `about:blank` when the
     * guest attempts to close itself.
     */
    addEventListener(event: 'close', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'close', listener: (event: DOMEvent) => void): this;
    /**
     * Fired when the guest page has sent an asynchronous message to embedder page.
     *
     * With `sendToHost` method and `ipc-message` event you can communicate between
     * guest page and embedder page:
     */
    addEventListener(event: 'ipc-message', listener: (event: IpcMessageEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'ipc-message', listener: (event: IpcMessageEvent) => void): this;
    /**
     * Fired when the renderer process unexpectedly disappears. This is normally
     * because it was crashed or killed.
     */
    addEventListener(event: 'render-process-gone', listener: (event: RenderProcessGoneEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'render-process-gone', listener: (event: RenderProcessGoneEvent) => void): this;
    /**
     * Fired when a plugin process is crashed.
     */
    addEventListener(event: 'plugin-crashed', listener: (event: PluginCrashedEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'plugin-crashed', listener: (event: PluginCrashedEvent) => void): this;
    /**
     * Fired when the WebContents is destroyed.
     */
    addEventListener(event: 'destroyed', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'destroyed', listener: (event: DOMEvent) => void): this;
    /**
     * Emitted when media starts playing.
     */
    addEventListener(event: 'media-started-playing', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'media-started-playing', listener: (event: DOMEvent) => void): this;
    /**
     * Emitted when media is paused or done playing.
     */
    addEventListener(event: 'media-paused', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'media-paused', listener: (event: DOMEvent) => void): this;
    /**
     * Emitted when a page's theme color changes. This is usually due to encountering a
     * meta tag:
     */
    addEventListener(event: 'did-change-theme-color', listener: (event: DidChangeThemeColorEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'did-change-theme-color', listener: (event: DidChangeThemeColorEvent) => void): this;
    /**
     * Emitted when mouse moves over a link or the keyboard moves the focus to a link.
     */
    addEventListener(event: 'update-target-url', listener: (event: UpdateTargetUrlEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'update-target-url', listener: (event: UpdateTargetUrlEvent) => void): this;
    /**
     * Emitted when a link is clicked in DevTools or 'Open in new tab' is selected for
     * a link in its context menu.
     */
    addEventListener(event: 'devtools-open-url', listener: (event: DevtoolsOpenUrlEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'devtools-open-url', listener: (event: DevtoolsOpenUrlEvent) => void): this;
    /**
     * Emitted when DevTools is opened.
     */
    addEventListener(event: 'devtools-opened', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'devtools-opened', listener: (event: DOMEvent) => void): this;
    /**
     * Emitted when DevTools is closed.
     */
    addEventListener(event: 'devtools-closed', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'devtools-closed', listener: (event: DOMEvent) => void): this;
    /**
     * Emitted when DevTools is focused / opened.
     */
    addEventListener(event: 'devtools-focused', listener: (event: DOMEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'devtools-focused', listener: (event: DOMEvent) => void): this;
    /**
     * Emitted when there is a new context menu that needs to be handled.
     */
    addEventListener(event: 'context-menu', listener: (event: ContextMenuEvent) => void, useCapture?: boolean): this;
    removeEventListener(event: 'context-menu', listener: (event: ContextMenuEvent) => void): this;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, useCapture?: boolean): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    /**
     * Adjusts the current text selection starting and ending points in the focused
     * frame by the given amounts. A negative amount moves the selection towards the
     * beginning of the document, and a positive amount moves the selection towards the
     * end of the document.
     *
     * See `webContents.adjustSelection` for examples.
     */
    adjustSelection(options: AdjustSelectionOptions): void;
    /**
     * Whether the guest page can go back.
     */
    canGoBack(): boolean;
    /**
     * Whether the guest page can go forward.
     */
    canGoForward(): boolean;
    /**
     * Whether the guest page can go to `offset`.
     */
    canGoToOffset(offset: number): boolean;
    /**
     * Resolves with a NativeImage
     *
     * Captures a snapshot of the page within `rect`. Omitting `rect` will capture the
     * whole visible page.
     */
    capturePage(rect?: Rectangle): Promise<Electron.NativeImage>;
    /**
     * Centers the current text selection in page.
     */
    centerSelection(): void;
    /**
     * Clears the navigation history.
     */
    clearHistory(): void;
    /**
     * Closes the DevTools window of guest page.
     */
    closeDevTools(): void;
    /**
     * Executes editing command `copy` in page.
     */
    copy(): void;
    /**
     * Executes editing command `cut` in page.
     */
    cut(): void;
    /**
     * Executes editing command `delete` in page.
     */
    delete(): void;
    /**
     * Initiates a download of the resource at `url` without navigating.
     */
    downloadURL(url: string, options?: DownloadURLOptions): void;
    /**
     * A promise that resolves with the result of the executed code or is rejected if
     * the result of the code is a rejected promise.
     *
     * Evaluates `code` in page. If `userGesture` is set, it will create the user
     * gesture context in the page. HTML APIs like `requestFullScreen`, which require
     * user action, can take advantage of this option for automation.
     */
    executeJavaScript(code: string, userGesture?: boolean): Promise<any>;
    /**
     * The request id used for the request.
     *
     * Starts a request to find all matches for the `text` in the web page. The result
     * of the request can be obtained by subscribing to `found-in-page` event.
     */
    findInPage(text: string, options?: FindInPageOptions): number;
    /**
     * The title of guest page.
     */
    getTitle(): string;
    /**
     * The URL of guest page.
     */
    getURL(): string;
    /**
     * The user agent for guest page.
     */
    getUserAgent(): string;
    /**
     * The WebContents ID of this `webview`.
     */
    getWebContentsId(): number;
    /**
     * the current zoom factor.
     */
    getZoomFactor(): number;
    /**
     * the current zoom level.
     */
    getZoomLevel(): number;
    /**
     * Makes the guest page go back.
     */
    goBack(): void;
    /**
     * Makes the guest page go forward.
     */
    goForward(): void;
    /**
     * Navigates to the specified absolute index.
     */
    goToIndex(index: number): void;
    /**
     * Navigates to the specified offset from the "current entry".
     */
    goToOffset(offset: number): void;
    /**
     * A promise that resolves with a key for the inserted CSS that can later be used
     * to remove the CSS via `<webview>.removeInsertedCSS(key)`.
     *
     * Injects CSS into the current web page and returns a unique key for the inserted
     * stylesheet.
     */
    insertCSS(css: string): Promise<string>;
    /**
     * Inserts `text` to the focused element.
     */
    insertText(text: string): Promise<void>;
    /**
     * Starts inspecting element at position (`x`, `y`) of guest page.
     */
    inspectElement(x: number, y: number): void;
    /**
     * Opens the DevTools for the service worker context present in the guest page.
     */
    inspectServiceWorker(): void;
    /**
     * Opens the DevTools for the shared worker context present in the guest page.
     */
    inspectSharedWorker(): void;
    /**
     * Whether guest page has been muted.
     */
    isAudioMuted(): boolean;
    /**
     * Whether the renderer process has crashed.
     */
    isCrashed(): boolean;
    /**
     * Whether audio is currently playing.
     */
    isCurrentlyAudible(): boolean;
    /**
     * Whether DevTools window of guest page is focused.
     */
    isDevToolsFocused(): boolean;
    /**
     * Whether guest page has a DevTools window attached.
     */
    isDevToolsOpened(): boolean;
    /**
     * Whether guest page is still loading resources.
     */
    isLoading(): boolean;
    /**
     * Whether the main frame (and not just iframes or frames within it) is still
     * loading.
     */
    isLoadingMainFrame(): boolean;
    /**
     * Whether the guest page is waiting for a first-response for the main resource of
     * the page.
     */
    isWaitingForResponse(): boolean;
    /**
     * The promise will resolve when the page has finished loading (see
     * `did-finish-load`), and rejects if the page fails to load (see `did-fail-load`).
     *
     * Loads the `url` in the webview, the `url` must contain the protocol prefix, e.g.
     * the `http://` or `file://`.
     */
    loadURL(url: string, options?: LoadURLOptions): Promise<void>;
    /**
     * Opens a DevTools window for guest page.
     */
    openDevTools(): void;
    /**
     * Executes editing command `paste` in page.
     */
    paste(): void;
    /**
     * Executes editing command `pasteAndMatchStyle` in page.
     */
    pasteAndMatchStyle(): void;
    /**
     * Prints `webview`'s web page. Same as `webContents.print([options])`.
     */
    print(options?: WebviewTagPrintOptions): Promise<void>;
    /**
     * Resolves with the generated PDF data.
     *
     * Prints `webview`'s web page as PDF, Same as `webContents.printToPDF(options)`.
     */
    printToPDF(options: PrintToPDFOptions): Promise<Uint8Array>;
    /**
     * Executes editing command `redo` in page.
     */
    redo(): void;
    /**
     * Reloads the guest page.
     */
    reload(): void;
    /**
     * Reloads the guest page and ignores cache.
     */
    reloadIgnoringCache(): void;
    /**
     * Resolves if the removal was successful.
     *
     * Removes the inserted CSS from the current web page. The stylesheet is identified
     * by its key, which is returned from `<webview>.insertCSS(css)`.
     */
    removeInsertedCSS(key: string): Promise<void>;
    /**
     * Executes editing command `replace` in page.
     */
    replace(text: string): void;
    /**
     * Executes editing command `replaceMisspelling` in page.
     */
    replaceMisspelling(text: string): void;
    /**
     * Scrolls to the bottom of the current `<webview>`.
     */
    scrollToBottom(): void;
    /**
     * Scrolls to the top of the current `<webview>`.
     */
    scrollToTop(): void;
    /**
     * Executes editing command `selectAll` in page.
     */
    selectAll(): void;
    /**
     * Send an asynchronous message to renderer process via `channel`, you can also
     * send arbitrary arguments. The renderer process can handle the message by
     * listening to the `channel` event with the `ipcRenderer` module.
     *
     * See webContents.send for examples.
     */
    send(channel: string, ...args: any[]): Promise<void>;
    /**
     * Sends an input `event` to the page.
     *
     * See webContents.sendInputEvent for detailed description of `event` object.
     */
    sendInputEvent(event: (MouseInputEvent) | (MouseWheelInputEvent) | (KeyboardInputEvent)): Promise<void>;
    /**
     * Send an asynchronous message to renderer process via `channel`, you can also
     * send arbitrary arguments. The renderer process can handle the message by
     * listening to the `channel` event with the `ipcRenderer` module.
     *
     * See webContents.sendToFrame for examples.
     */
    sendToFrame(frameId: [number, number], channel: string, ...args: any[]): Promise<void>;
    /**
     * Set guest page muted.
     */
    setAudioMuted(muted: boolean): void;
    /**
     * Overrides the user agent for the guest page.
     */
    setUserAgent(userAgent: string): void;
    /**
     * Sets the maximum and minimum pinch-to-zoom level.
     */
    setVisualZoomLevelLimits(minimumLevel: number, maximumLevel: number): Promise<void>;
    /**
     * Changes the zoom factor to the specified factor. Zoom factor is zoom percent
     * divided by 100, so 300% = 3.0.
     */
    setZoomFactor(factor: number): void;
    /**
     * Changes the zoom level to the specified level. The original size is 0 and each
     * increment above or below represents zooming 20% larger or smaller to default
     * limits of 300% and 50% of original size, respectively. The formula for this is
     * `scale := 1.2 ^ level`.
     *
     * > **NOTE**: The zoom policy at the Chromium level is same-origin, meaning that
     * the zoom level for a specific domain propagates across all instances of windows
     * with the same domain. Differentiating the window URLs will make zoom work
     * per-window.
     */
    setZoomLevel(level: number): void;
    /**
     * Shows pop-up dictionary that searches the selected word on the page.
     *
     * @platform darwin
     */
    showDefinitionForSelection(): void;
    /**
     * Stops any pending navigation.
     */
    stop(): void;
    /**
     * Stops any `findInPage` request for the `webview` with the provided `action`.
     */
    stopFindInPage(action: 'clearSelection' | 'keepSelection' | 'activateSelection'): void;
    /**
     * Executes editing command `undo` in page.
     */
    undo(): void;
    /**
     * Executes editing command `unselect` in page.
     */
    unselect(): void;
    /**
     * A `boolean`. When this attribute is present the guest page will be allowed to
     * open new windows. Popups are disabled by default.
     */
    allowpopups: boolean;
    /**
     * A `string` which is a list of strings which specifies the blink features to be
     * disabled separated by `,`. The full list of supported feature strings can be
     * found in the RuntimeEnabledFeatures.json5 file.
     */
    disableblinkfeatures: string;
    /**
     * A `boolean`. When this attribute is present the guest page will have web
     * security disabled. Web security is enabled by default.
     *
     * This value can only be modified before the first navigation.
     */
    disablewebsecurity: boolean;
    /**
     * A `string` which is a list of strings which specifies the blink features to be
     * enabled separated by `,`. The full list of supported feature strings can be
     * found in the RuntimeEnabledFeatures.json5 file.
     */
    enableblinkfeatures: string;
    /**
     * A `string` that sets the referrer URL for the guest page.
     */
    httpreferrer: string;
    /**
     * A `boolean`. When this attribute is present the guest page in `webview` will
     * have node integration and can use node APIs like `require` and `process` to
     * access low level system resources. Node integration is disabled by default in
     * the guest page.
     */
    nodeintegration: boolean;
    /**
     * A `boolean` for the experimental option for enabling NodeJS support in
     * sub-frames such as iframes inside the `webview`. All your preloads will load for
     * every iframe, you can use `process.isMainFrame` to determine if you are in the
     * main frame or not. This option is disabled by default in the guest page.
     */
    nodeintegrationinsubframes: boolean;
    /**
     * A `string` that sets the session used by the page. If `partition` starts with
     * `persist:`, the page will use a persistent session available to all pages in the
     * app with the same `partition`. if there is no `persist:` prefix, the page will
     * use an in-memory session. By assigning the same `partition`, multiple pages can
     * share the same session. If the `partition` is unset then default session of the
     * app will be used.
     *
     * This value can only be modified before the first navigation, since the session
     * of an active renderer process cannot change. Subsequent attempts to modify the
     * value will fail with a DOM exception.
     */
    partition: string;
    /**
     * A `boolean`. When this attribute is present the guest page in `webview` will be
     * able to use browser plugins. Plugins are disabled by default.
     */
    plugins: boolean;
    /**
     * A `string` that specifies a script that will be loaded before other scripts run
     * in the guest page. The protocol of script's URL must be `file:` (even when using
     * `asar:` archives) because it will be loaded by Node's `require` under the hood,
     * which treats `asar:` archives as virtual directories.
     *
     * When the guest page doesn't have node integration this script will still have
     * access to all Node APIs, but global objects injected by Node will be deleted
     * after this script has finished executing.
     */
    preload: string;
    /**
     * A `string` representing the visible URL. Writing to this attribute initiates
     * top-level navigation.
     *
     * Assigning `src` its own value will reload the current page.
     *
     * The `src` attribute can also accept data URLs, such as `data:text/plain,Hello,
     * world!`.
     */
    src: string;
    /**
     * A `string` that sets the user agent for the guest page before the page is
     * navigated to. Once the page is loaded, use the `setUserAgent` method to change
     * the user agent.
     */
    useragent: string;
    /**
     * A `string` which is a comma separated list of strings which specifies the web
     * preferences to be set on the webview. The full list of supported preference
     * strings can be found in BrowserWindow.
     *
     * The string follows the same format as the features string in `window.open`. A
     * name by itself is given a `true` boolean value. A preference can be set to
     * another value by including an `=`, followed by the value. Special values `yes`
     * and `1` are interpreted as `true`, while `no` and `0` are interpreted as
     * `false`.
     */
    webpreferences: string;
  }

  interface AboutPanelOptionsOptions {
    /**
     * The app's name.
     */
    applicationName?: string;
    /**
     * The app's version.
     */
    applicationVersion?: string;
    /**
     * Copyright information.
     */
    copyright?: string;
    /**
     * The app's build version number.
     *
     * @platform darwin
     */
    version?: string;
    /**
     * Credit information.
     *
     * @platform darwin,win32
     */
    credits?: string;
    /**
     * List of app authors.
     *
     * @platform linux
     */
    authors?: string[];
    /**
     * The app's website.
     *
     * @platform linux
     */
    website?: string;
    /**
     * Path to the app's icon in a JPEG or PNG file format. On Linux, will be shown as
     * 64x64 pixels while retaining aspect ratio.
     *
     * @platform linux,win32
     */
    iconPath?: string;
  }

  interface AddRepresentationOptions {
    /**
     * The scale factor to add the image representation for.
     */
    scaleFactor?: number;
    /**
     * Defaults to 0. Required if a bitmap buffer is specified as `buffer`.
     */
    width?: number;
    /**
     * Defaults to 0. Required if a bitmap buffer is specified as `buffer`.
     */
    height?: number;
    /**
     * The buffer containing the raw image data.
     */
    buffer?: Buffer;
    /**
     * The data URL containing either a base 64 encoded PNG or JPEG image.
     */
    dataURL?: string;
  }

  interface AdjustSelectionOptions {
    /**
     * Amount to shift the start index of the current selection.
     */
    start?: number;
    /**
     * Amount to shift the end index of the current selection.
     */
    end?: number;
  }

  interface AnimationSettings {
    /**
     * Returns true if rich animations should be rendered. Looks at session type (e.g.
     * remote desktop) and accessibility settings to give guidance for heavy
     * animations.
     */
    shouldRenderRichAnimation: boolean;
    /**
     * Determines on a per-platform basis whether scroll animations (e.g. produced by
     * home/end key) should be enabled.
     */
    scrollAnimationsEnabledBySystem: boolean;
    /**
     * Determines whether the user desires reduced motion based on platform APIs.
     */
    prefersReducedMotion: boolean;
  }

  interface AppDetailsOptions {
    /**
     * Window's App User Model ID. It has to be set, otherwise the other options will
     * have no effect.
     */
    appId?: string;
    /**
     * Window's Relaunch Icon.
     */
    appIconPath?: string;
    /**
     * Index of the icon in `appIconPath`. Ignored when `appIconPath` is not set.
     * Default is `0`.
     */
    appIconIndex?: number;
    /**
     * Window's Relaunch Command.
     */
    relaunchCommand?: string;
    /**
     * Window's Relaunch Display Name.
     */
    relaunchDisplayName?: string;
  }

  interface ApplicationInfoForProtocolReturnValue {
    /**
     * the display icon of the app handling the protocol.
     */
    icon: NativeImage;
    /**
     * installation path of the app handling the protocol.
     */
    path: string;
    /**
     * display name of the app handling the protocol.
     */
    name: string;
  }

  interface AuthenticationResponseDetails {
    url: string;
  }

  interface AuthInfo {
    isProxy: boolean;
    scheme: string;
    host: string;
    port: number;
    realm: string;
  }

  interface AutoResizeOptions {
    /**
     * If `true`, the view's width will grow and shrink together with the window.
     * `false` by default.
     */
    width?: boolean;
    /**
     * If `true`, the view's height will grow and shrink together with the window.
     * `false` by default.
     */
    height?: boolean;
    /**
     * If `true`, the view's x position and width will grow and shrink proportionally
     * with the window. `false` by default.
     */
    horizontal?: boolean;
    /**
     * If `true`, the view's y position and height will grow and shrink proportionally
     * with the window. `false` by default.
     */
    vertical?: boolean;
  }

  interface BeforeSendResponse {
    cancel?: boolean;
    /**
     * When provided, request will be made with these headers.
     */
    requestHeaders?: Record<string, (string) | (string[])>;
  }

  interface BitmapOptions {
    /**
     * Defaults to 1.0.
     */
    scaleFactor?: number;
  }

  interface BlinkMemoryInfo {
    /**
     * Size of all allocated objects in Kilobytes.
     */
    allocated: number;
    /**
     * Total allocated space in Kilobytes.
     */
    total: number;
  }

  interface BluetoothPairingHandlerHandlerDetails {
    deviceId: string;
    /**
     * The type of pairing prompt being requested. One of the following values:
     */
    pairingKind: ('confirm' | 'confirmPin' | 'providePin');
    frame: WebFrameMain;
    /**
     * The pin value to verify if `pairingKind` is `confirmPin`.
     */
    pin?: string;
  }

  interface BrowserViewConstructorOptions {
    /**
     * Settings of web page's features.
     */
    webPreferences?: WebPreferences;
  }

  interface CallbackResponse {
    cancel?: boolean;
    /**
     * The original request is prevented from being sent or completed and is instead
     * redirected to the given URL.
     */
    redirectURL?: string;
  }

  interface CertificateTrustDialogOptions {
    /**
     * The certificate to trust/import.
     */
    certificate: Certificate;
    /**
     * The message to display to the user.
     */
    message: string;
  }

  interface ClearCodeCachesOptions {
    /**
     * An array of url corresponding to the resource whose generated code cache needs
     * to be removed. If the list is empty then all entries in the cache directory will
     * be removed.
     */
    urls?: string[];
  }

  interface ClearStorageDataOptions {
    /**
     * Should follow `window.location.origin`’s representation `scheme://host:port`.
     */
    origin?: string;
    /**
     * The types of storages to clear, can be `cookies`, `filesystem`, `indexdb`,
     * `localstorage`, `shadercache`, `websql`, `serviceworkers`, `cachestorage`. If
     * not specified, clear all storage types.
     */
    storages?: Array<'cookies' | 'filesystem' | 'indexdb' | 'localstorage' | 'shadercache' | 'websql' | 'serviceworkers' | 'cachestorage'>;
    /**
     * The types of quotas to clear, can be `temporary`, `syncable`. If not specified,
     * clear all quotas.
     */
    quotas?: Array<'temporary' | 'syncable'>;
  }

  interface ClientRequestConstructorOptions {
    /**
     * The HTTP request method. Defaults to the GET method.
     */
    method?: string;
    /**
     * The request URL. Must be provided in the absolute form with the protocol scheme
     * specified as http or https.
     */
    url?: string;
    /**
     * The `Session` instance with which the request is associated.
     */
    session?: Session;
    /**
     * The name of the `partition` with which the request is associated. Defaults to
     * the empty string. The `session` option supersedes `partition`. Thus if a
     * `session` is explicitly specified, `partition` is ignored.
     */
    partition?: string;
    /**
     * Can be `include`, `omit` or `same-origin`. Whether to send credentials with this
     * request. If set to `include`, credentials from the session associated with the
     * request will be used. If set to `omit`, credentials will not be sent with the
     * request (and the `'login'` event will not be triggered in the event of a 401).
     * If set to `same-origin`, `origin` must also be specified. This matches the
     * behavior of the fetch option of the same name. If this option is not specified,
     * authentication data from the session will be sent, and cookies will not be sent
     * (unless `useSessionCookies` is set).
     */
    credentials?: ('include' | 'omit' | 'same-origin');
    /**
     * Whether to send cookies with this request from the provided session. If
     * `credentials` is specified, this option has no effect. Default is `false`.
     */
    useSessionCookies?: boolean;
    /**
     * Can be `http:` or `https:`. The protocol scheme in the form 'scheme:'. Defaults
     * to 'http:'.
     */
    protocol?: ('http:' | 'https:');
    /**
     * The server host provided as a concatenation of the hostname and the port number
     * 'hostname:port'.
     */
    host?: string;
    /**
     * The server host name.
     */
    hostname?: string;
    /**
     * The server's listening port number.
     */
    port?: number;
    /**
     * The path part of the request URL.
     */
    path?: string;
    /**
     * Can be `follow`, `error` or `manual`. The redirect mode for this request. When
     * mode is `error`, any redirection will be aborted. When mode is `manual` the
     * redirection will be cancelled unless `request.followRedirect` is invoked
     * synchronously during the `redirect` event.  Defaults to `follow`.
     */
    redirect?: ('follow' | 'error' | 'manual');
    /**
     * The origin URL of the request.
     */
    origin?: string;
    /**
     * can be `""`, `no-referrer`, `no-referrer-when-downgrade`, `origin`,
     * `origin-when-cross-origin`, `unsafe-url`, `same-origin`, `strict-origin`, or
     * `strict-origin-when-cross-origin`. Defaults to
     * `strict-origin-when-cross-origin`.
     */
    referrerPolicy?: string;
    /**
     * can be `default`, `no-store`, `reload`, `no-cache`, `force-cache` or
     * `only-if-cached`.
     */
    cache?: ('default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached');
  }

  interface CloseOpts {
    /**
     * if true, fire the `beforeunload` event before closing the page. If the page
     * prevents the unload, the WebContents will not be closed. The
     * `will-prevent-unload` will be fired if the page requests prevention of unload.
     */
    waitForBeforeUnload: boolean;
  }

  interface Config {
    /**
     * Can be `tls1`, `tls1.1`, `tls1.2` or `tls1.3`. The minimum SSL version to allow
     * when connecting to remote servers. Defaults to `tls1`.
     */
    minVersion?: ('tls1' | 'tls1.1' | 'tls1.2' | 'tls1.3');
    /**
     * Can be `tls1.2` or `tls1.3`. The maximum SSL version to allow when connecting to
     * remote servers. Defaults to `tls1.3`.
     */
    maxVersion?: ('tls1.2' | 'tls1.3');
    /**
     * List of cipher suites which should be explicitly prevented from being used in
     * addition to those disabled by the net built-in policy. Supported literal forms:
     * 0xAABB, where AA is `cipher_suite[0]` and BB is `cipher_suite[1]`, as defined in
     * RFC 2246, Section 7.4.1.2. Unrecognized but parsable cipher suites in this form
     * will not return an error. Ex: To disable TLS_RSA_WITH_RC4_128_MD5, specify
     * 0x0004, while to disable TLS_ECDH_ECDSA_WITH_RC4_128_SHA, specify 0xC002. Note
     * that TLSv1.3 ciphers cannot be disabled using this mechanism.
     */
    disabledCipherSuites?: number[];
  }

  interface ConfigureHostResolverOptions {
    /**
     * Whether the built-in host resolver is used in preference to getaddrinfo. When
     * enabled, the built-in resolver will attempt to use the system's DNS settings to
     * do DNS lookups itself. Enabled by default on macOS, disabled by default on
     * Windows and Linux.
     */
    enableBuiltInResolver?: boolean;
    /**
     * Can be 'off', 'automatic' or 'secure'. Configures the DNS-over-HTTP mode. When
     * 'off', no DoH lookups will be performed. When 'automatic', DoH lookups will be
     * performed first if DoH is available, and insecure DNS lookups will be performed
     * as a fallback. When 'secure', only DoH lookups will be performed. Defaults to
     * 'automatic'.
     */
    secureDnsMode?: ('off' | 'automatic' | 'secure');
    /**
     * A list of DNS-over-HTTP server templates. See RFC8484 § 3 for details on the
     * template format. Most servers support the POST method; the template for such
     * servers is simply a URI. Note that for some DNS providers, the resolver will
     * automatically upgrade to DoH unless DoH is explicitly disabled, even if there
     * are no DoH servers provided in this list.
     */
    secureDnsServers?: string[];
    /**
     * Controls whether additional DNS query types, e.g. HTTPS (DNS type 65) will be
     * allowed besides the traditional A and AAAA queries when a request is being made
     * via insecure DNS. Has no effect on Secure DNS which always allows additional
     * types. Defaults to true.
     */
    enableAdditionalDnsQueryTypes?: boolean;
  }

  interface ConsoleMessageEvent extends DOMEvent {
    /**
     * The log level, from 0 to 3. In order it matches `verbose`, `info`, `warning` and
     * `error`.
     */
    level: number;
    /**
     * The actual console message
     */
    message: string;
    /**
     * The line number of the source that triggered this console message
     */
    line: number;
    sourceId: string;
  }

  interface ContextMenuEvent extends DOMEvent {
    params: Params;
  }

  interface ContextMenuParams {
    /**
     * x coordinate.
     */
    x: number;
    /**
     * y coordinate.
     */
    y: number;
    /**
     * Frame from which the context menu was invoked.
     */
    frame: WebFrameMain;
    /**
     * URL of the link that encloses the node the context menu was invoked on.
     */
    linkURL: string;
    /**
     * Text associated with the link. May be an empty string if the contents of the
     * link are an image.
     */
    linkText: string;
    /**
     * URL of the top level page that the context menu was invoked on.
     */
    pageURL: string;
    /**
     * URL of the subframe that the context menu was invoked on.
     */
    frameURL: string;
    /**
     * Source URL for the element that the context menu was invoked on. Elements with
     * source URLs are images, audio and video.
     */
    srcURL: string;
    /**
     * Type of the node the context menu was invoked on. Can be `none`, `image`,
     * `audio`, `video`, `canvas`, `file` or `plugin`.
     */
    mediaType: ('none' | 'image' | 'audio' | 'video' | 'canvas' | 'file' | 'plugin');
    /**
     * Whether the context menu was invoked on an image which has non-empty contents.
     */
    hasImageContents: boolean;
    /**
     * Whether the context is editable.
     */
    isEditable: boolean;
    /**
     * Text of the selection that the context menu was invoked on.
     */
    selectionText: string;
    /**
     * Title text of the selection that the context menu was invoked on.
     */
    titleText: string;
    /**
     * Alt text of the selection that the context menu was invoked on.
     */
    altText: string;
    /**
     * Suggested filename to be used when saving file through 'Save Link As' option of
     * context menu.
     */
    suggestedFilename: string;
    /**
     * Rect representing the coordinates in the document space of the selection.
     */
    selectionRect: Rectangle;
    /**
     * Start position of the selection text.
     */
    selectionStartOffset: number;
    /**
     * The referrer policy of the frame on which the menu is invoked.
     */
    referrerPolicy: Referrer;
    /**
     * The misspelled word under the cursor, if any.
     */
    misspelledWord: string;
    /**
     * An array of suggested words to show the user to replace the `misspelledWord`.
     * Only available if there is a misspelled word and spellchecker is enabled.
     */
    dictionarySuggestions: string[];
    /**
     * The character encoding of the frame on which the menu was invoked.
     */
    frameCharset: string;
    /**
     * The source that the context menu was invoked on. Possible values include `none`,
     * `button-button`, `field-set`, `input-button`, `input-checkbox`, `input-color`,
     * `input-date`, `input-datetime-local`, `input-email`, `input-file`,
     * `input-hidden`, `input-image`, `input-month`, `input-number`, `input-password`,
     * `input-radio`, `input-range`, `input-reset`, `input-search`, `input-submit`,
     * `input-telephone`, `input-text`, `input-time`, `input-url`, `input-week`,
     * `output`, `reset-button`, `select-list`, `select-list`, `select-multiple`,
     * `select-one`, `submit-button`, and `text-area`,
     */
    formControlType: ('none' | 'button-button' | 'field-set' | 'input-button' | 'input-checkbox' | 'input-color' | 'input-date' | 'input-datetime-local' | 'input-email' | 'input-file' | 'input-hidden' | 'input-image' | 'input-month' | 'input-number' | 'input-password' | 'input-radio' | 'input-range' | 'input-reset' | 'input-search' | 'input-submit' | 'input-telephone' | 'input-text' | 'input-time' | 'input-url' | 'input-week' | 'output' | 'reset-button' | 'select-list' | 'select-list' | 'select-multiple' | 'select-one' | 'submit-button' | 'text-area');
    /**
     * If the context menu was invoked on an input field, the type of that field.
     * Possible values include `none`, `plainText`, `password`, `other`.
     *
     * @deprecated
     */
    inputFieldType: ('none' | 'plainText' | 'password' | 'other');
    /**
     * If the context is editable, whether or not spellchecking is enabled.
     */
    spellcheckEnabled: boolean;
    /**
     * Input source that invoked the context menu. Can be `none`, `mouse`, `keyboard`,
     * `touch`, `touchMenu`, `longPress`, `longTap`, `touchHandle`, `stylus`,
     * `adjustSelection`, or `adjustSelectionReset`.
     */
    menuSourceType: ('none' | 'mouse' | 'keyboard' | 'touch' | 'touchMenu' | 'longPress' | 'longTap' | 'touchHandle' | 'stylus' | 'adjustSelection' | 'adjustSelectionReset');
    /**
     * The flags for the media element the context menu was invoked on.
     */
    mediaFlags: MediaFlags;
    /**
     * These flags indicate whether the renderer believes it is able to perform the
     * corresponding action.
     */
    editFlags: EditFlags;
  }

  interface ContinueActivityDetails {
    /**
     * A string identifying the URL of the webpage accessed by the activity on another
     * device, if available.
     */
    webpageURL?: string;
  }

  interface CookiesGetFilter {
    /**
     * Retrieves cookies which are associated with `url`. Empty implies retrieving
     * cookies of all URLs.
     */
    url?: string;
    /**
     * Filters cookies by name.
     */
    name?: string;
    /**
     * Retrieves cookies whose domains match or are subdomains of `domains`.
     */
    domain?: string;
    /**
     * Retrieves cookies whose path matches `path`.
     */
    path?: string;
    /**
     * Filters cookies by their Secure property.
     */
    secure?: boolean;
    /**
     * Filters out session or persistent cookies.
     */
    session?: boolean;
    /**
     * Filters cookies by httpOnly.
     */
    httpOnly?: boolean;
  }

  interface CookiesSetDetails {
    /**
     * The URL to associate the cookie with. The promise will be rejected if the URL is
     * invalid.
     */
    url: string;
    /**
     * The name of the cookie. Empty by default if omitted.
     */
    name?: string;
    /**
     * The value of the cookie. Empty by default if omitted.
     */
    value?: string;
    /**
     * The domain of the cookie; this will be normalized with a preceding dot so that
     * it's also valid for subdomains. Empty by default if omitted.
     */
    domain?: string;
    /**
     * The path of the cookie. Empty by default if omitted.
     */
    path?: string;
    /**
     * Whether the cookie should be marked as Secure. Defaults to false unless Same
     * Site=None attribute is used.
     */
    secure?: boolean;
    /**
     * Whether the cookie should be marked as HTTP only. Defaults to false.
     */
    httpOnly?: boolean;
    /**
     * The expiration date of the cookie as the number of seconds since the UNIX epoch.
     * If omitted then the cookie becomes a session cookie and will not be retained
     * between sessions.
     */
    expirationDate?: number;
    /**
     * The Same Site policy to apply to this cookie.  Can be `unspecified`,
     * `no_restriction`, `lax` or `strict`.  Default is `lax`.
     */
    sameSite?: ('unspecified' | 'no_restriction' | 'lax' | 'strict');
  }

  interface CrashReporterStartOptions {
    /**
     * URL that crash reports will be sent to as POST. Required unless `uploadToServer`
     * is `false`.
     */
    submitURL?: string;
    /**
     * Defaults to `app.name`.
     */
    productName?: string;
    /**
     * Deprecated alias for `{ globalExtra: { _companyName: ... } }`.
     *
     * @deprecated
     */
    companyName?: string;
    /**
     * Whether crash reports should be sent to the server. If false, crash reports will
     * be collected and stored in the crashes directory, but not uploaded. Default is
     * `true`.
     */
    uploadToServer?: boolean;
    /**
     * If true, crashes generated in the main process will not be forwarded to the
     * system crash handler. Default is `false`.
     */
    ignoreSystemCrashHandler?: boolean;
    /**
     * If true, limit the number of crashes uploaded to 1/hour. Default is `false`.
     *
     * @platform darwin,win32
     */
    rateLimit?: boolean;
    /**
     * If true, crash reports will be compressed and uploaded with `Content-Encoding:
     * gzip`. Default is `true`.
     */
    compress?: boolean;
    /**
     * Extra string key/value annotations that will be sent along with crash reports
     * that are generated in the main process. Only string values are supported.
     * Crashes generated in child processes will not contain these extra parameters to
     * crash reports generated from child processes, call `addExtraParameter` from the
     * child process.
     */
    extra?: Record<string, string>;
    /**
     * Extra string key/value annotations that will be sent along with any crash
     * reports generated in any process. These annotations cannot be changed once the
     * crash reporter has been started. If a key is present in both the global extra
     * parameters and the process-specific extra parameters, then the global one will
     * take precedence. By default, `productName` and the app version are included, as
     * well as the Electron version.
     */
    globalExtra?: Record<string, string>;
  }

  interface CreateFromBitmapOptions {
    width: number;
    height: number;
    /**
     * Defaults to 1.0.
     */
    scaleFactor?: number;
  }

  interface CreateFromBufferOptions {
    /**
     * Required for bitmap buffers.
     */
    width?: number;
    /**
     * Required for bitmap buffers.
     */
    height?: number;
    /**
     * Defaults to 1.0.
     */
    scaleFactor?: number;
  }

  interface CreateInterruptedDownloadOptions {
    /**
     * Absolute path of the download.
     */
    path: string;
    /**
     * Complete URL chain for the download.
     */
    urlChain: string[];
    mimeType?: string;
    /**
     * Start range for the download.
     */
    offset: number;
    /**
     * Total length of the download.
     */
    length: number;
    /**
     * Last-Modified header value.
     */
    lastModified?: string;
    /**
     * ETag header value.
     */
    eTag?: string;
    /**
     * Time when download was started in number of seconds since UNIX epoch.
     */
    startTime?: number;
  }

  interface Data {
    text?: string;
    html?: string;
    image?: NativeImage;
    rtf?: string;
    /**
     * The title of the URL at `text`.
     */
    bookmark?: string;
  }

  interface DefaultFontFamily {
    /**
     * Defaults to `Times New Roman`.
     */
    standard?: string;
    /**
     * Defaults to `Times New Roman`.
     */
    serif?: string;
    /**
     * Defaults to `Arial`.
     */
    sansSerif?: string;
    /**
     * Defaults to `Courier New`.
     */
    monospace?: string;
    /**
     * Defaults to `Script`.
     */
    cursive?: string;
    /**
     * Defaults to `Impact`.
     */
    fantasy?: string;
    /**
     * Defaults to `Latin Modern Math`.
     */
    math?: string;
  }

  interface Details {
    /**
     * Process type. One of the following values:
     */
    type: ('Utility' | 'Zygote' | 'Sandbox helper' | 'GPU' | 'Pepper Plugin' | 'Pepper Plugin Broker' | 'Unknown');
    /**
     * The reason the child process is gone. Possible values:
     */
    reason: ('clean-exit' | 'abnormal-exit' | 'killed' | 'crashed' | 'oom' | 'launch-failed' | 'integrity-failure');
    /**
     * The exit code for the process (e.g. status from waitpid if on posix, from
     * GetExitCodeProcess on Windows).
     */
    exitCode: number;
    /**
     * The non-localized name of the process.
     */
    serviceName?: string;
    /**
     * The name of the process. Examples for utility: `Audio Service`, `Content
     * Decryption Module Service`, `Network Service`, `Video Capture`, etc.
     */
    name?: string;
  }

  interface DevicePermissionHandlerHandlerDetails {
    /**
     * The type of device that permission is being requested on, can be `hid`,
     * `serial`, or `usb`.
     */
    deviceType: ('hid' | 'serial' | 'usb');
    /**
     * The origin URL of the device permission check.
     */
    origin: string;
    /**
     * the device that permission is being requested for.
     */
    device: (HIDDevice) | (SerialPort) | (USBDevice);
  }

  interface DevtoolsOpenUrlEvent extends DOMEvent {
    /**
     * URL of the link that was clicked or selected.
     */
    url: string;
  }

  interface DidChangeThemeColorEvent extends DOMEvent {
    themeColor: string;
  }

  interface DidCreateWindowDetails {
    /**
     * URL for the created window.
     */
    url: string;
    /**
     * Name given to the created window in the `window.open()` call.
     */
    frameName: string;
    /**
     * The options used to create the BrowserWindow. They are merged in increasing
     * precedence: parsed options from the `features` string from `window.open()`,
     * security-related webPreferences inherited from the parent, and options given by
     * `webContents.setWindowOpenHandler`. Unrecognized options are not filtered out.
     */
    options: BrowserWindowConstructorOptions;
    /**
     * The referrer that will be passed to the new window. May or may not result in the
     * `Referer` header being sent, depending on the referrer policy.
     */
    referrer: Referrer;
    /**
     * The post data that will be sent to the new window, along with the appropriate
     * headers that will be set. If no post data is to be sent, the value will be
     * `null`. Only defined when the window is being created by a form that set
     * `target=_blank`.
     */
    postBody?: PostBody;
    /**
     * Can be `default`, `foreground-tab`, `background-tab`, `new-window` or `other`.
     */
    disposition: ('default' | 'foreground-tab' | 'background-tab' | 'new-window' | 'other');
  }

  interface DidFailLoadEvent extends DOMEvent {
    errorCode: number;
    errorDescription: string;
    validatedURL: string;
    isMainFrame: boolean;
  }

  interface DidFrameFinishLoadEvent extends DOMEvent {
    isMainFrame: boolean;
  }

  interface DidFrameNavigateEvent extends DOMEvent {
    url: string;
    /**
     * -1 for non HTTP navigations
     */
    httpResponseCode: number;
    /**
     * empty for non HTTP navigations,
     */
    httpStatusText: string;
    isMainFrame: boolean;
    frameProcessId: number;
    frameRoutingId: number;
  }

  interface DidNavigateEvent extends DOMEvent {
    url: string;
  }

  interface DidNavigateInPageEvent extends DOMEvent {
    isMainFrame: boolean;
    url: string;
  }

  interface DidRedirectNavigationEvent extends DOMEvent {
    url: string;
    isInPlace: boolean;
    isMainFrame: boolean;
    frameProcessId: number;
    frameRoutingId: number;
  }

  interface DidStartNavigationEvent extends DOMEvent {
    url: string;
    isInPlace: boolean;
    isMainFrame: boolean;
    frameProcessId: number;
    frameRoutingId: number;
  }

  interface DisplayBalloonOptions {
    /**
     * Icon to use when `iconType` is `custom`.
     */
    icon?: (NativeImage) | (string);
    /**
     * Can be `none`, `info`, `warning`, `error` or `custom`. Default is `custom`.
     */
    iconType?: ('none' | 'info' | 'warning' | 'error' | 'custom');
    title: string;
    content: string;
    /**
     * The large version of the icon should be used. Default is `true`. Maps to
     * `NIIF_LARGE_ICON`.
     */
    largeIcon?: boolean;
    /**
     * Do not play the associated sound. Default is `false`. Maps to `NIIF_NOSOUND`.
     */
    noSound?: boolean;
    /**
     * Do not display the balloon notification if the current user is in "quiet time".
     * Default is `false`. Maps to `NIIF_RESPECT_QUIET_TIME`.
     */
    respectQuietTime?: boolean;
  }

  interface DisplayMediaRequestHandlerHandlerRequest {
    /**
     * Frame that is requesting access to media.
     */
    frame: WebFrameMain;
    /**
     * Origin of the page making the request.
     */
    securityOrigin: string;
    /**
     * true if the web content requested a video stream.
     */
    videoRequested: boolean;
    /**
     * true if the web content requested an audio stream.
     */
    audioRequested: boolean;
    /**
     * Whether a user gesture was active when this request was triggered.
     */
    userGesture: boolean;
  }

  interface DownloadURLOptions {
    /**
     * HTTP request headers.
     */
    headers?: Record<string, string>;
  }

  interface EnableNetworkEmulationOptions {
    /**
     * Whether to emulate network outage. Defaults to false.
     */
    offline?: boolean;
    /**
     * RTT in ms. Defaults to 0 which will disable latency throttling.
     */
    latency?: number;
    /**
     * Download rate in Bps. Defaults to 0 which will disable download throttling.
     */
    downloadThroughput?: number;
    /**
     * Upload rate in Bps. Defaults to 0 which will disable upload throttling.
     */
    uploadThroughput?: number;
  }

  interface FeedURLOptions {
    url: string;
    /**
     * HTTP request headers.
     *
     * @platform darwin
     */
    headers?: Record<string, string>;
    /**
     * Can be `json` or `default`, see the Squirrel.Mac README for more information.
     *
     * @platform darwin
     */
    serverType?: ('json' | 'default');
  }

  interface FileIconOptions {
    size: ('small' | 'normal' | 'large');
  }

  interface FindInPageOptions {
    /**
     * Whether to search forward or backward, defaults to `true`.
     */
    forward?: boolean;
    /**
     * Whether to begin a new text finding session with this request. Should be `true`
     * for initial requests, and `false` for follow-up requests. Defaults to `false`.
     */
    findNext?: boolean;
    /**
     * Whether search should be case-sensitive, defaults to `false`.
     */
    matchCase?: boolean;
  }

  interface FocusOptions {
    /**
     * Make the receiver the active app even if another app is currently active.
     *
     * @platform darwin
     */
    steal: boolean;
  }

  interface ForkOptions {
    /**
     * Environment key-value pairs. Default is `process.env`.
     */
    env?: Env;
    /**
     * List of string arguments passed to the executable.
     */
    execArgv?: string[];
    /**
     * Current working directory of the child process.
     */
    cwd?: string;
    /**
     * Allows configuring the mode for `stdout` and `stderr` of the child process.
     * Default is `inherit`. String value can be one of `pipe`, `ignore`, `inherit`,
     * for more details on these values you can refer to stdio documentation from
     * Node.js. Currently this option only supports configuring `stdout` and `stderr`
     * to either `pipe`, `inherit` or `ignore`. Configuring `stdin` to any property
     * other than `ignore` is not supported and will result in an error. For example,
     * the supported values will be processed as following:
     */
    stdio?: (Array<'pipe' | 'ignore' | 'inherit'>) | (string);
    /**
     * Name of the process that will appear in `name` property of `ProcessMetric`
     * returned by `app.getAppMetrics` and `child-process-gone` event of `app`. Default
     * is `Node Utility Process`.
     */
    serviceName?: string;
    /**
     * With this flag, the utility process will be launched via the `Electron Helper
     * (Plugin).app` helper executable on macOS, which can be codesigned with
     * `com.apple.security.cs.disable-library-validation` and
     * `com.apple.security.cs.allow-unsigned-executable-memory` entitlements. This will
     * allow the utility process to load unsigned libraries. Unless you specifically
     * need this capability, it is best to leave this disabled. Default is `false`.
     *
     * @platform darwin
     */
    allowLoadingUnsignedLibraries?: boolean;
  }

  interface FoundInPageEvent extends DOMEvent {
    result: FoundInPageResult;
  }

  interface FrameCreatedDetails {
    frame: WebFrameMain;
  }

  interface FromPartitionOptions {
    /**
     * Whether to enable cache.
     */
    cache: boolean;
  }

  interface FromPathOptions {
    /**
     * Whether to enable cache.
     */
    cache: boolean;
  }

  interface HandlerDetails {
    /**
     * The _resolved_ version of the URL passed to `window.open()`. e.g. opening a
     * window with `window.open('foo')` will yield something like
     * `https://the-origin/the/current/path/foo`.
     */
    url: string;
    /**
     * Name of the window provided in `window.open()`
     */
    frameName: string;
    /**
     * Comma separated list of window features provided to `window.open()`.
     */
    features: string;
    /**
     * Can be `default`, `foreground-tab`, `background-tab`, `new-window` or `other`.
     */
    disposition: ('default' | 'foreground-tab' | 'background-tab' | 'new-window' | 'other');
    /**
     * The referrer that will be passed to the new window. May or may not result in the
     * `Referer` header being sent, depending on the referrer policy.
     */
    referrer: Referrer;
    /**
     * The post data that will be sent to the new window, along with the appropriate
     * headers that will be set. If no post data is to be sent, the value will be
     * `null`. Only defined when the window is being created by a form that set
     * `target=_blank`.
     */
    postBody?: PostBody;
  }

  interface HeadersReceivedResponse {
    cancel?: boolean;
    /**
     * When provided, the server is assumed to have responded with these headers.
     */
    responseHeaders?: Record<string, (string) | (string[])>;
    /**
     * Should be provided when overriding `responseHeaders` to change header status
     * otherwise original response header's status will be used.
     */
    statusLine?: string;
  }

  interface HeapStatistics {
    totalHeapSize: number;
    totalHeapSizeExecutable: number;
    totalPhysicalSize: number;
    totalAvailableSize: number;
    usedHeapSize: number;
    heapSizeLimit: number;
    mallocedMemory: number;
    peakMallocedMemory: number;
    doesZapGarbage: boolean;
  }

  interface HidDeviceAddedDetails {
    device: HIDDevice;
    frame: WebFrameMain;
  }

  interface HidDeviceRemovedDetails {
    device: HIDDevice;
    frame: WebFrameMain;
  }

  interface HidDeviceRevokedDetails {
    device: HIDDevice;
    /**
     * The origin that the device has been revoked from.
     */
    origin?: string;
  }

  interface IgnoreMouseEventsOptions {
    /**
     * If true, forwards mouse move messages to Chromium, enabling mouse related events
     * such as `mouseleave`. Only used when `ignore` is true. If `ignore` is false,
     * forwarding is always disabled regardless of this value.
     *
     * @platform darwin,win32
     */
    forward?: boolean;
  }

  interface ImportCertificateOptions {
    /**
     * Path for the pkcs12 file.
     */
    certificate: string;
    /**
     * Passphrase for the certificate.
     */
    password: string;
  }

  interface Info {
    /**
     * Security origin for the isolated world.
     */
    securityOrigin?: string;
    /**
     * Content Security Policy for the isolated world.
     */
    csp?: string;
    /**
     * Name for isolated world. Useful in devtools.
     */
    name?: string;
  }

  interface Input {
    /**
     * Either `keyUp` or `keyDown`.
     */
    type: string;
    /**
     * Equivalent to KeyboardEvent.key.
     */
    key: string;
    /**
     * Equivalent to KeyboardEvent.code.
     */
    code: string;
    /**
     * Equivalent to KeyboardEvent.repeat.
     */
    isAutoRepeat: boolean;
    /**
     * Equivalent to KeyboardEvent.isComposing.
     */
    isComposing: boolean;
    /**
     * Equivalent to KeyboardEvent.shiftKey.
     */
    shift: boolean;
    /**
     * Equivalent to KeyboardEvent.controlKey.
     */
    control: boolean;
    /**
     * Equivalent to KeyboardEvent.altKey.
     */
    alt: boolean;
    /**
     * Equivalent to KeyboardEvent.metaKey.
     */
    meta: boolean;
    /**
     * Equivalent to KeyboardEvent.location.
     */
    location: number;
    /**
     * See InputEvent.modifiers.
     */
    modifiers: string[];
  }

  interface InsertCSSOptions {
    /**
     * Can be 'user' or 'author'. Sets the cascade origin of the inserted stylesheet.
     * Default is 'author'.
     */
    cssOrigin?: ('user' | 'author');
  }

  interface IpcMessageEvent extends DOMEvent {
    /**
     * pair of `[processId, frameId]`.
     */
    frameId: [number, number];
    channel: string;
    args: any[];
  }

  interface Item {
    /**
     * The path to the file being dragged.
     */
    file: string;
    /**
     * The paths to the files being dragged. (`files` will override `file` field)
     */
    files?: string[];
    /**
     * The image must be non-empty on macOS.
     */
    icon: (NativeImage) | (string);
  }

  interface JumpListSettings {
    /**
     * The minimum number of items that will be shown in the Jump List (for a more
     * detailed description of this value see the MSDN docs).
     */
    minItems: number;
    /**
     * Array of `JumpListItem` objects that correspond to items that the user has
     * explicitly removed from custom categories in the Jump List. These items must not
     * be re-added to the Jump List in the **next** call to `app.setJumpList()`,
     * Windows will not display any custom category that contains any of the removed
     * items.
     */
    removedItems: JumpListItem[];
  }

  interface LoadCommitEvent extends DOMEvent {
    url: string;
    isMainFrame: boolean;
  }

  interface LoadExtensionOptions {
    /**
     * Whether to allow the extension to read local files over `file://` protocol and
     * inject content scripts into `file://` pages. This is required e.g. for loading
     * devtools extensions on `file://` URLs. Defaults to false.
     */
    allowFileAccess: boolean;
  }

  interface LoadFileOptions {
    /**
     * Passed to `url.format()`.
     */
    query?: Record<string, string>;
    /**
     * Passed to `url.format()`.
     */
    search?: string;
    /**
     * Passed to `url.format()`.
     */
    hash?: string;
  }

  interface LoadURLOptions {
    /**
     * An HTTP Referrer url.
     */
    httpReferrer?: (string) | (Referrer);
    /**
     * A user agent originating the request.
     */
    userAgent?: string;
    /**
     * Extra headers separated by "\n"
     */
    extraHeaders?: string;
    postData?: Array<(UploadRawData) | (UploadFile)>;
    /**
     * Base url (with trailing path separator) for files to be loaded by the data url.
     * This is needed only if the specified `url` is a data url and needs to load other
     * files.
     */
    baseURLForDataURL?: string;
  }

  interface LoginItemSettings {
    /**
     * `true` if the app is set to open at login.
     */
    openAtLogin: boolean;
    /**
     * `true` if the app is set to open as hidden at login. This does not work on macOS
     * 13 and up.
     *
     * @deprecated
     * @platform darwin
     */
    openAsHidden: boolean;
    /**
     * `true` if the app was opened at login automatically. This setting is not
     * available on MAS builds or on macOS 13 and up.
     *
     * @deprecated
     * @platform darwin
     */
    wasOpenedAtLogin: boolean;
    /**
     * `true` if the app was opened as a hidden login item. This indicates that the app
     * should not open any windows at startup. This setting is not available on MAS
     * builds or on macOS 13 and up.
     *
     * @deprecated
     * @platform darwin
     */
    wasOpenedAsHidden: boolean;
    /**
     * `true` if the app was opened as a login item that should restore the state from
     * the previous session. This indicates that the app should restore the windows
     * that were open the last time the app was closed. This setting is not available
     * on MAS builds or on macOS 13 and up.
     *
     * @deprecated
     * @platform darwin
     */
    restoreState: boolean;
    /**
     * can be one of `not-registered`, `enabled`, `requires-approval`, or `not-found`.
     *
     * @platform darwin
     */
    status: string;
    /**
     * `true` if app is set to open at login and its run key is not deactivated. This
     * differs from `openAtLogin` as it ignores the `args` option, this property will
     * be true if the given executable would be launched at login with **any**
     * arguments.
     *
     * @platform win32
     */
    executableWillLaunchAtLogin: boolean;
    launchItems: LaunchItems[];
  }

  interface LoginItemSettingsOptions {
    /**
     * Can be one of `mainAppService`, `agentService`, `daemonService`, or
     * `loginItemService`. Defaults to `mainAppService`. Only available on macOS 13 and
     * up. See app.setLoginItemSettings for more information about each type.
     *
     * @platform darwin
     */
    type?: string;
    /**
     * The name of the service. Required if `type` is non-default. Only available on
     * macOS 13 and up.
     *
     * @platform darwin
     */
    serviceName?: string;
    /**
     * The executable path to compare against. Defaults to `process.execPath`.
     *
     * @platform win32
     */
    path?: string;
    /**
     * The command-line arguments to compare against. Defaults to an empty array.
     *
     * @platform win32
     */
    args?: string[];
  }

  interface MenuItemConstructorOptions {
    /**
     * Will be called with `click(menuItem, browserWindow, event)` when the menu item
     * is clicked.
     */
    click?: (menuItem: MenuItem, browserWindow: (BrowserWindow) | (undefined), event: KeyboardEvent) => void;
    /**
     * Can be `undo`, `redo`, `cut`, `copy`, `paste`, `pasteAndMatchStyle`, `delete`,
     * `selectAll`, `reload`, `forceReload`, `toggleDevTools`, `resetZoom`, `zoomIn`,
     * `zoomOut`, `toggleSpellChecker`, `togglefullscreen`, `window`, `minimize`,
     * `close`, `help`, `about`, `services`, `hide`, `hideOthers`, `unhide`, `quit`,
     * `showSubstitutions`, `toggleSmartQuotes`, `toggleSmartDashes`,
     * `toggleTextReplacement`, `startSpeaking`, `stopSpeaking`, `zoom`, `front`,
     * `appMenu`, `fileMenu`, `editMenu`, `viewMenu`, `shareMenu`, `recentDocuments`,
     * `toggleTabBar`, `selectNextTab`, `selectPreviousTab`, `showAllTabs`,
     * `mergeAllWindows`, `clearRecentDocuments`, `moveTabToNewWindow` or `windowMenu`
     * - Define the action of the menu item, when specified the `click` property will
     * be ignored. See roles.
     */
    role?: ('undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'pasteAndMatchStyle' | 'delete' | 'selectAll' | 'reload' | 'forceReload' | 'toggleDevTools' | 'resetZoom' | 'zoomIn' | 'zoomOut' | 'toggleSpellChecker' | 'togglefullscreen' | 'window' | 'minimize' | 'close' | 'help' | 'about' | 'services' | 'hide' | 'hideOthers' | 'unhide' | 'quit' | 'showSubstitutions' | 'toggleSmartQuotes' | 'toggleSmartDashes' | 'toggleTextReplacement' | 'startSpeaking' | 'stopSpeaking' | 'zoom' | 'front' | 'appMenu' | 'fileMenu' | 'editMenu' | 'viewMenu' | 'shareMenu' | 'recentDocuments' | 'toggleTabBar' | 'selectNextTab' | 'selectPreviousTab' | 'showAllTabs' | 'mergeAllWindows' | 'clearRecentDocuments' | 'moveTabToNewWindow' | 'windowMenu');
    /**
     * Can be `normal`, `separator`, `submenu`, `checkbox` or `radio`.
     */
    type?: ('normal' | 'separator' | 'submenu' | 'checkbox' | 'radio');
    label?: string;
    sublabel?: string;
    /**
     * Hover text for this menu item.
     *
     * @platform darwin
     */
    toolTip?: string;
    accelerator?: Accelerator;
    icon?: (NativeImage) | (string);
    /**
     * If false, the menu item will be greyed out and unclickable.
     */
    enabled?: boolean;
    /**
     * default is `true`, and when `false` will prevent the accelerator from triggering
     * the item if the item is not visible.
     *
     * @platform darwin
     */
    acceleratorWorksWhenHidden?: boolean;
    /**
     * If false, the menu item will be entirely hidden.
     */
    visible?: boolean;
    /**
     * Should only be specified for `checkbox` or `radio` type menu items.
     */
    checked?: boolean;
    /**
     * If false, the accelerator won't be registered with the system, but it will still
     * be displayed. Defaults to true.
     *
     * @platform linux,win32
     */
    registerAccelerator?: boolean;
    /**
     * The item to share when the `role` is `shareMenu`.
     *
     * @platform darwin
     */
    sharingItem?: SharingItem;
    /**
     * Should be specified for `submenu` type menu items. If `submenu` is specified,
     * the `type: 'submenu'` can be omitted. If the value is not a `Menu` then it will
     * be automatically converted to one using `Menu.buildFromTemplate`.
     */
    submenu?: (MenuItemConstructorOptions[]) | (Menu);
    /**
     * Unique within a single menu. If defined then it can be used as a reference to
     * this item by the position attribute.
     */
    id?: string;
    /**
     * Inserts this item before the item with the specified label. If the referenced
     * item doesn't exist the item will be inserted at the end of  the menu. Also
     * implies that the menu item in question should be placed in the same “group” as
     * the item.
     */
    before?: string[];
    /**
     * Inserts this item after the item with the specified label. If the referenced
     * item doesn't exist the item will be inserted at the end of the menu.
     */
    after?: string[];
    /**
     * Provides a means for a single context menu to declare the placement of their
     * containing group before the containing group of the item with the specified
     * label.
     */
    beforeGroupContaining?: string[];
    /**
     * Provides a means for a single context menu to declare the placement of their
     * containing group after the containing group of the item with the specified
     * label.
     */
    afterGroupContaining?: string[];
  }

  interface MessageBoxOptions {
    /**
     * Content of the message box.
     */
    message: string;
    /**
     * Can be `none`, `info`, `error`, `question` or `warning`. On Windows, `question`
     * displays the same icon as `info`, unless you set an icon using the `icon`
     * option. On macOS, both `warning` and `error` display the same warning icon.
     */
    type?: ('none' | 'info' | 'error' | 'question' | 'warning');
    /**
     * Array of texts for buttons. On Windows, an empty array will result in one button
     * labeled "OK".
     */
    buttons?: string[];
    /**
     * Index of the button in the buttons array which will be selected by default when
     * the message box opens.
     */
    defaultId?: number;
    /**
     * Pass an instance of AbortSignal to optionally close the message box, the message
     * box will behave as if it was cancelled by the user. On macOS, `signal` does not
     * work with message boxes that do not have a parent window, since those message
     * boxes run synchronously due to platform limitations.
     */
    signal?: AbortSignal;
    /**
     * Title of the message box, some platforms will not show it.
     */
    title?: string;
    /**
     * Extra information of the message.
     */
    detail?: string;
    /**
     * If provided, the message box will include a checkbox with the given label.
     */
    checkboxLabel?: string;
    /**
     * Initial checked state of the checkbox. `false` by default.
     */
    checkboxChecked?: boolean;
    icon?: (NativeImage) | (string);
    /**
     * Custom width of the text in the message box.
     *
     * @platform darwin
     */
    textWidth?: number;
    /**
     * The index of the button to be used to cancel the dialog, via the `Esc` key. By
     * default this is assigned to the first button with "cancel" or "no" as the label.
     * If no such labeled buttons exist and this option is not set, `0` will be used as
     * the return value.
     */
    cancelId?: number;
    /**
     * On Windows Electron will try to figure out which one of the `buttons` are common
     * buttons (like "Cancel" or "Yes"), and show the others as command links in the
     * dialog. This can make the dialog appear in the style of modern Windows apps. If
     * you don't like this behavior, you can set `noLink` to `true`.
     */
    noLink?: boolean;
    /**
     * Normalize the keyboard access keys across platforms. Default is `false`.
     * Enabling this assumes `&` is used in the button labels for the placement of the
     * keyboard shortcut access key and labels will be converted so they work correctly
     * on each platform, `&` characters are removed on macOS, converted to `_` on
     * Linux, and left untouched on Windows. For example, a button label of `Vie&w`
     * will be converted to `Vie_w` on Linux and `View` on macOS and can be selected
     * via `Alt-W` on Windows and Linux.
     */
    normalizeAccessKeys?: boolean;
  }

  interface MessageBoxReturnValue {
    /**
     * The index of the clicked button.
     */
    response: number;
    /**
     * The checked state of the checkbox if `checkboxLabel` was set. Otherwise `false`.
     */
    checkboxChecked: boolean;
  }

  interface MessageBoxSyncOptions {
    /**
     * Content of the message box.
     */
    message: string;
    /**
     * Can be `none`, `info`, `error`, `question` or `warning`. On Windows, `question`
     * displays the same icon as `info`, unless you set an icon using the `icon`
     * option. On macOS, both `warning` and `error` display the same warning icon.
     */
    type?: ('none' | 'info' | 'error' | 'question' | 'warning');
    /**
     * Array of texts for buttons. On Windows, an empty array will result in one button
     * labeled "OK".
     */
    buttons?: string[];
    /**
     * Index of the button in the buttons array which will be selected by default when
     * the message box opens.
     */
    defaultId?: number;
    /**
     * Title of the message box, some platforms will not show it.
     */
    title?: string;
    /**
     * Extra information of the message.
     */
    detail?: string;
    icon?: (NativeImage) | (string);
    /**
     * Custom width of the text in the message box.
     *
     * @platform darwin
     */
    textWidth?: number;
    /**
     * The index of the button to be used to cancel the dialog, via the `Esc` key. By
     * default this is assigned to the first button with "cancel" or "no" as the label.
     * If no such labeled buttons exist and this option is not set, `0` will be used as
     * the return value.
     */
    cancelId?: number;
    /**
     * On Windows Electron will try to figure out which one of the `buttons` are common
     * buttons (like "Cancel" or "Yes"), and show the others as command links in the
     * dialog. This can make the dialog appear in the style of modern Windows apps. If
     * you don't like this behavior, you can set `noLink` to `true`.
     */
    noLink?: boolean;
    /**
     * Normalize the keyboard access keys across platforms. Default is `false`.
     * Enabling this assumes `&` is used in the button labels for the placement of the
     * keyboard shortcut access key and labels will be converted so they work correctly
     * on each platform, `&` characters are removed on macOS, converted to `_` on
     * Linux, and left untouched on Windows. For example, a button label of `Vie&w`
     * will be converted to `Vie_w` on Linux and `View` on macOS and can be selected
     * via `Alt-W` on Windows and Linux.
     */
    normalizeAccessKeys?: boolean;
  }

  interface MessageDetails {
    /**
     * The actual console message
     */
    message: string;
    /**
     * The version ID of the service worker that sent the log message
     */
    versionId: number;
    /**
     * The type of source for this message.  Can be `javascript`, `xml`, `network`,
     * `console-api`, `storage`, `rendering`, `security`, `deprecation`, `worker`,
     * `violation`, `intervention`, `recommendation` or `other`.
     */
    source: ('javascript' | 'xml' | 'network' | 'console-api' | 'storage' | 'rendering' | 'security' | 'deprecation' | 'worker' | 'violation' | 'intervention' | 'recommendation' | 'other');
    /**
     * The log level, from 0 to 3. In order it matches `verbose`, `info`, `warning` and
     * `error`.
     */
    level: number;
    /**
     * The URL the message came from
     */
    sourceUrl: string;
    /**
     * The line number of the source that triggered this console message
     */
    lineNumber: number;
  }

  interface MessageEvent {
    data: any;
    ports: MessagePortMain[];
  }

  interface MoveToApplicationsFolderOptions {
    /**
     * A handler for potential conflict in move failure.
     */
    conflictHandler?: (conflictType: 'exists' | 'existsAndRunning') => boolean;
  }

  interface NotificationConstructorOptions {
    /**
     * A title for the notification, which will be displayed at the top of the
     * notification window when it is shown.
     */
    title?: string;
    /**
     * A subtitle for the notification, which will be displayed below the title.
     *
     * @platform darwin
     */
    subtitle?: string;
    /**
     * The body text of the notification, which will be displayed below the title or
     * subtitle.
     */
    body?: string;
    /**
     * Whether or not to suppress the OS notification noise when showing the
     * notification.
     */
    silent?: boolean;
    /**
     * An icon to use in the notification.
     */
    icon?: (string) | (NativeImage);
    /**
     * Whether or not to add an inline reply option to the notification.
     *
     * @platform darwin
     */
    hasReply?: boolean;
    /**
     * The timeout duration of the notification. Can be 'default' or 'never'.
     *
     * @platform linux,win32
     */
    timeoutType?: ('default' | 'never');
    /**
     * The placeholder to write in the inline reply input field.
     *
     * @platform darwin
     */
    replyPlaceholder?: string;
    /**
     * The name of the sound file to play when the notification is shown.
     *
     * @platform darwin
     */
    sound?: string;
    /**
     * The urgency level of the notification. Can be 'normal', 'critical', or 'low'.
     *
     * @platform linux
     */
    urgency?: ('normal' | 'critical' | 'low');
    /**
     * Actions to add to the notification. Please read the available actions and
     * limitations in the `NotificationAction` documentation.
     *
     * @platform darwin
     */
    actions?: NotificationAction[];
    /**
     * A custom title for the close button of an alert. An empty string will cause the
     * default localized text to be used.
     *
     * @platform darwin
     */
    closeButtonText?: string;
    /**
     * A custom description of the Notification on Windows superseding all properties
     * above. Provides full customization of design and behavior of the notification.
     *
     * @platform win32
     */
    toastXml?: string;
  }

  interface OnBeforeRedirectListenerDetails {
    id: number;
    url: string;
    method: string;
    webContentsId?: number;
    webContents?: WebContents;
    frame?: WebFrameMain;
    /**
     * Can be `mainFrame`, `subFrame`, `stylesheet`, `script`, `image`, `font`,
     * `object`, `xhr`, `ping`, `cspReport`, `media`, `webSocket` or `other`.
     */
    resourceType: ('mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket' | 'other');
    referrer: string;
    timestamp: number;
    redirectURL: string;
    statusCode: number;
    statusLine: string;
    /**
     * The server IP address that the request was actually sent to.
     */
    ip?: string;
    fromCache: boolean;
    responseHeaders?: Record<string, string[]>;
  }

  interface OnBeforeRequestListenerDetails {
    id: number;
    url: string;
    method: string;
    webContentsId?: number;
    webContents?: WebContents;
    frame?: WebFrameMain;
    /**
     * Can be `mainFrame`, `subFrame`, `stylesheet`, `script`, `image`, `font`,
     * `object`, `xhr`, `ping`, `cspReport`, `media`, `webSocket` or `other`.
     */
    resourceType: ('mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket' | 'other');
    referrer: string;
    timestamp: number;
    uploadData: UploadData[];
  }

  interface OnBeforeSendHeadersListenerDetails {
    id: number;
    url: string;
    method: string;
    webContentsId?: number;
    webContents?: WebContents;
    frame?: WebFrameMain;
    /**
     * Can be `mainFrame`, `subFrame`, `stylesheet`, `script`, `image`, `font`,
     * `object`, `xhr`, `ping`, `cspReport`, `media`, `webSocket` or `other`.
     */
    resourceType: ('mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket' | 'other');
    referrer: string;
    timestamp: number;
    uploadData?: UploadData[];
    requestHeaders: Record<string, string>;
  }

  interface OnCompletedListenerDetails {
    id: number;
    url: string;
    method: string;
    webContentsId?: number;
    webContents?: WebContents;
    frame?: WebFrameMain;
    /**
     * Can be `mainFrame`, `subFrame`, `stylesheet`, `script`, `image`, `font`,
     * `object`, `xhr`, `ping`, `cspReport`, `media`, `webSocket` or `other`.
     */
    resourceType: ('mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket' | 'other');
    referrer: string;
    timestamp: number;
    responseHeaders?: Record<string, string[]>;
    fromCache: boolean;
    statusCode: number;
    statusLine: string;
    error: string;
  }

  interface OnErrorOccurredListenerDetails {
    id: number;
    url: string;
    method: string;
    webContentsId?: number;
    webContents?: WebContents;
    frame?: WebFrameMain;
    /**
     * Can be `mainFrame`, `subFrame`, `stylesheet`, `script`, `image`, `font`,
     * `object`, `xhr`, `ping`, `cspReport`, `media`, `webSocket` or `other`.
     */
    resourceType: ('mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket' | 'other');
    referrer: string;
    timestamp: number;
    fromCache: boolean;
    /**
     * The error description.
     */
    error: string;
  }

  interface OnHeadersReceivedListenerDetails {
    id: number;
    url: string;
    method: string;
    webContentsId?: number;
    webContents?: WebContents;
    frame?: WebFrameMain;
    /**
     * Can be `mainFrame`, `subFrame`, `stylesheet`, `script`, `image`, `font`,
     * `object`, `xhr`, `ping`, `cspReport`, `media`, `webSocket` or `other`.
     */
    resourceType: ('mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket' | 'other');
    referrer: string;
    timestamp: number;
    statusLine: string;
    statusCode: number;
    responseHeaders?: Record<string, string[]>;
  }

  interface OnResponseStartedListenerDetails {
    id: number;
    url: string;
    method: string;
    webContentsId?: number;
    webContents?: WebContents;
    frame?: WebFrameMain;
    /**
     * Can be `mainFrame`, `subFrame`, `stylesheet`, `script`, `image`, `font`,
     * `object`, `xhr`, `ping`, `cspReport`, `media`, `webSocket` or `other`.
     */
    resourceType: ('mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket' | 'other');
    referrer: string;
    timestamp: number;
    responseHeaders?: Record<string, string[]>;
    /**
     * Indicates whether the response was fetched from disk cache.
     */
    fromCache: boolean;
    statusCode: number;
    statusLine: string;
  }

  interface OnSendHeadersListenerDetails {
    id: number;
    url: string;
    method: string;
    webContentsId?: number;
    webContents?: WebContents;
    frame?: WebFrameMain;
    /**
     * Can be `mainFrame`, `subFrame`, `stylesheet`, `script`, `image`, `font`,
     * `object`, `xhr`, `ping`, `cspReport`, `media`, `webSocket` or `other`.
     */
    resourceType: ('mainFrame' | 'subFrame' | 'stylesheet' | 'script' | 'image' | 'font' | 'object' | 'xhr' | 'ping' | 'cspReport' | 'media' | 'webSocket' | 'other');
    referrer: string;
    timestamp: number;
    requestHeaders: Record<string, string>;
  }

  interface OpenDevToolsOptions {
    /**
     * Opens the devtools with specified dock state, can be `left`, `right`, `bottom`,
     * `undocked`, `detach`. Defaults to last used dock state. In `undocked` mode it's
     * possible to dock back. In `detach` mode it's not.
     */
    mode: ('left' | 'right' | 'bottom' | 'undocked' | 'detach');
    /**
     * Whether to bring the opened devtools window to the foreground. The default is
     * `true`.
     */
    activate?: boolean;
    /**
     * A title for the DevTools window (only in `undocked` or `detach` mode).
     */
    title?: string;
  }

  interface OpenDialogOptions {
    title?: string;
    defaultPath?: string;
    /**
     * Custom label for the confirmation button, when left empty the default label will
     * be used.
     */
    buttonLabel?: string;
    filters?: FileFilter[];
    /**
     * Contains which features the dialog should use. The following values are
     * supported:
     */
    properties?: Array<'openFile' | 'openDirectory' | 'multiSelections' | 'showHiddenFiles' | 'createDirectory' | 'promptToCreate' | 'noResolveAliases' | 'treatPackageAsDirectory' | 'dontAddToRecent'>;
    /**
     * Message to display above input boxes.
     *
     * @platform darwin
     */
    message?: string;
    /**
     * Create security scoped bookmarks when packaged for the Mac App Store.
     *
     * @platform darwin,mas
     */
    securityScopedBookmarks?: boolean;
  }

  interface OpenDialogReturnValue {
    /**
     * whether or not the dialog was canceled.
     */
    canceled: boolean;
    /**
     * An array of file paths chosen by the user. If the dialog is cancelled this will
     * be an empty array.
     */
    filePaths: string[];
    /**
     * An array matching the `filePaths` array of base64 encoded strings which contains
     * security scoped bookmark data. `securityScopedBookmarks` must be enabled for
     * this to be populated. (For return values, see table here.)
     *
     * @platform darwin,mas
     */
    bookmarks?: string[];
  }

  interface OpenDialogSyncOptions {
    title?: string;
    defaultPath?: string;
    /**
     * Custom label for the confirmation button, when left empty the default label will
     * be used.
     */
    buttonLabel?: string;
    filters?: FileFilter[];
    /**
     * Contains which features the dialog should use. The following values are
     * supported:
     */
    properties?: Array<'openFile' | 'openDirectory' | 'multiSelections' | 'showHiddenFiles' | 'createDirectory' | 'promptToCreate' | 'noResolveAliases' | 'treatPackageAsDirectory' | 'dontAddToRecent'>;
    /**
     * Message to display above input boxes.
     *
     * @platform darwin
     */
    message?: string;
    /**
     * Create security scoped bookmarks when packaged for the Mac App Store.
     *
     * @platform darwin,mas
     */
    securityScopedBookmarks?: boolean;
  }

  interface OpenExternalOptions {
    /**
     * `true` to bring the opened application to the foreground. The default is `true`.
     *
     * @platform darwin
     */
    activate?: boolean;
    /**
     * The working directory.
     *
     * @platform win32
     */
    workingDirectory?: string;
    /**
     * Indicates a user initiated launch that enables tracking of frequently used
     * programs and other behaviors. The default is `false`.
     *
     * @platform win32
     */
    logUsage?: boolean;
  }

  interface Options {
  }

  interface Opts {
    /**
     *  Keep the page hidden instead of visible. Default is `false`.
     */
    stayHidden?: boolean;
    /**
     *  Keep the system awake instead of allowing it to sleep. Default is `false`.
     */
    stayAwake?: boolean;
  }

  interface PageFaviconUpdatedEvent extends DOMEvent {
    /**
     * Array of URLs.
     */
    favicons: string[];
  }

  interface PageTitleUpdatedEvent extends DOMEvent {
    title: string;
    explicitSet: boolean;
  }

  interface Parameters {
    /**
     * Specify the screen type to emulate (default: `desktop`):
     */
    screenPosition: ('desktop' | 'mobile');
    /**
     * Set the emulated screen size (screenPosition == mobile).
     */
    screenSize: Size;
    /**
     * Position the view on the screen (screenPosition == mobile) (default: `{ x: 0, y:
     * 0 }`).
     */
    viewPosition: Point;
    /**
     * Set the device scale factor (if zero defaults to original device scale factor)
     * (default: `0`).
     */
    deviceScaleFactor: number;
    /**
     * Set the emulated view size (empty means no override)
     */
    viewSize: Size;
    /**
     * Scale of emulated view inside available space (not in fit to view mode)
     * (default: `1`).
     */
    scale: number;
  }

  interface Payment {
    /**
     * The identifier of the purchased product.
     */
    productIdentifier: string;
    /**
     * The quantity purchased.
     */
    quantity: number;
    /**
     * An opaque identifier for the user’s account on your system.
     */
    applicationUsername: string;
    /**
     * The details of the discount offer to apply to the payment.
     */
    paymentDiscount?: PaymentDiscount;
  }

  interface PermissionCheckHandlerHandlerDetails {
    /**
     * The origin of the frame embedding the frame that made the permission check.
     * Only set for cross-origin sub frames making permission checks.
     */
    embeddingOrigin?: string;
    /**
     * The security origin of the `media` check.
     */
    securityOrigin?: string;
    /**
     * The type of media access being requested, can be `video`, `audio` or `unknown`
     */
    mediaType?: ('video' | 'audio' | 'unknown');
    /**
     * The last URL the requesting frame loaded.  This is not provided for cross-origin
     * sub frames making permission checks.
     */
    requestingUrl?: string;
    /**
     * Whether the frame making the request is the main frame
     */
    isMainFrame: boolean;
  }

  interface PermissionRequestHandlerHandlerDetails {
    /**
     * The url of the `openExternal` request.
     */
    externalURL?: string;
    /**
     * The security origin of the `media` request.
     */
    securityOrigin?: string;
    /**
     * The types of media access being requested, elements can be `video` or `audio`
     */
    mediaTypes?: Array<'video' | 'audio'>;
    /**
     * The last URL the requesting frame loaded
     */
    requestingUrl: string;
    /**
     * Whether the frame making the request is the main frame
     */
    isMainFrame: boolean;
  }

  interface PluginCrashedEvent extends DOMEvent {
    name: string;
    version: string;
  }

  interface PopupOptions {
    /**
     * Default is the focused window.
     */
    window?: BrowserWindow;
    /**
     * Default is the current mouse cursor position. Must be declared if `y` is
     * declared.
     */
    x?: number;
    /**
     * Default is the current mouse cursor position. Must be declared if `x` is
     * declared.
     */
    y?: number;
    /**
     * The index of the menu item to be positioned under the mouse cursor at the
     * specified coordinates. Default is -1.
     *
     * @platform darwin
     */
    positioningItem?: number;
    /**
     * This should map to the `menuSourceType` provided by the `context-menu` event. It
     * is not recommended to set this value manually, only provide values you receive
     * from other APIs or leave it `undefined`. Can be `none`, `mouse`, `keyboard`,
     * `touch`, `touchMenu`, `longPress`, `longTap`, `touchHandle`, `stylus`,
     * `adjustSelection`, or `adjustSelectionReset`.
     *
     * @platform win32,linux
     */
    sourceType?: ('none' | 'mouse' | 'keyboard' | 'touch' | 'touchMenu' | 'longPress' | 'longTap' | 'touchHandle' | 'stylus' | 'adjustSelection' | 'adjustSelectionReset');
    /**
     * Called when menu is closed.
     */
    callback?: () => void;
  }

  interface PreconnectOptions {
    /**
     * URL for preconnect. Only the origin is relevant for opening the socket.
     */
    url: string;
    /**
     * number of sockets to preconnect. Must be between 1 and 6. Defaults to 1.
     */
    numSockets?: number;
  }

  interface PrintToPDFOptions {
    /**
     * Paper orientation.`true` for landscape, `false` for portrait. Defaults to false.
     */
    landscape?: boolean;
    /**
     * Whether to display header and footer. Defaults to false.
     */
    displayHeaderFooter?: boolean;
    /**
     * Whether to print background graphics. Defaults to false.
     */
    printBackground?: boolean;
    /**
     * Scale of the webpage rendering. Defaults to 1.
     */
    scale?: number;
    /**
     * Specify page size of the generated PDF. Can be `A0`, `A1`, `A2`, `A3`, `A4`,
     * `A5`, `A6`, `Legal`, `Letter`, `Tabloid`, `Ledger`, or an Object containing
     * `height` and `width` in inches. Defaults to `Letter`.
     */
    pageSize?: (('A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'Legal' | 'Letter' | 'Tabloid' | 'Ledger')) | (Size);
    margins?: Margins;
    /**
     * Page ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which
     * means print all pages.
     */
    pageRanges?: string;
    /**
     * HTML template for the print header. Should be valid HTML markup with following
     * classes used to inject printing values into them: `date` (formatted print date),
     * `title` (document title), `url` (document location), `pageNumber` (current page
     * number) and `totalPages` (total pages in the document). For example, `<span
     * class=title></span>` would generate span containing the title.
     */
    headerTemplate?: string;
    /**
     * HTML template for the print footer. Should use the same format as the
     * `headerTemplate`.
     */
    footerTemplate?: string;
    /**
     * Whether or not to prefer page size as defined by css. Defaults to false, in
     * which case the content will be scaled to fit the paper size.
     */
    preferCSSPageSize?: boolean;
    /**
     * Whether or not to generate a tagged (accessible) PDF. Defaults to false. As this
     * property is experimental, the generated PDF may not adhere fully to PDF/UA and
     * WCAG standards.
     *
     * @experimental
     */
    generateTaggedPDF?: boolean;
    /**
     * Whether or not to generate a PDF document outline from content headers. Defaults
     * to false.
     *
     * @experimental
     */
    generateDocumentOutline?: boolean;
  }

  interface Privileges {
    /**
     * Default false.
     */
    standard?: boolean;
    /**
     * Default false.
     */
    secure?: boolean;
    /**
     * Default false.
     */
    bypassCSP?: boolean;
    /**
     * Default false.
     */
    allowServiceWorkers?: boolean;
    /**
     * Default false.
     */
    supportFetchAPI?: boolean;
    /**
     * Default false.
     */
    corsEnabled?: boolean;
    /**
     * Default false.
     */
    stream?: boolean;
    /**
     * Enable V8 code cache for the scheme, only works when `standard` is also set to
     * true. Default false.
     */
    codeCache?: boolean;
  }

  interface ProgressBarOptions {
    /**
     * Mode for the progress bar. Can be `none`, `normal`, `indeterminate`, `error` or
     * `paused`.
     *
     * @platform win32
     */
    mode: ('none' | 'normal' | 'indeterminate' | 'error' | 'paused');
  }

  interface Provider {
    spellCheck: (words: string[], callback: (misspeltWords: string[]) => void) => void;
  }

  interface PurchaseProductOpts {
    /**
     * The number of items the user wants to purchase.
     */
    quantity?: number;
    /**
     * The string that associates the transaction with a user account on your service
     * (applicationUsername).
     */
    username?: string;
  }

  interface ReadBookmark {
    title: string;
    url: string;
  }

  interface RegistrationCompletedDetails {
    /**
     * The base URL that a service worker is registered for
     */
    scope: string;
  }

  interface RelaunchOptions {
    args?: string[];
    execPath?: string;
  }

  interface RenderProcessGoneEvent extends DOMEvent {
    details: RenderProcessGoneDetails;
  }

  interface Request {
    hostname: string;
    certificate: Certificate;
    validatedCertificate: Certificate;
    /**
     * `true` if Chromium recognises the root CA as a standard root. If it isn't then
     * it's probably the case that this certificate was generated by a MITM proxy whose
     * root has been installed locally (for example, by a corporate proxy). This should
     * not be trusted if the `verificationResult` is not `OK`.
     */
    isIssuedByKnownRoot: boolean;
    /**
     * `OK` if the certificate is trusted, otherwise an error like `CERT_REVOKED`.
     */
    verificationResult: string;
    /**
     * Error code.
     */
    errorCode: number;
  }

  interface ResizeOptions {
    /**
     * Defaults to the image's width.
     */
    width?: number;
    /**
     * Defaults to the image's height.
     */
    height?: number;
    /**
     * The desired quality of the resize image. Possible values include `good`,
     * `better`, or `best`. The default is `best`. These values express a desired
     * quality/speed tradeoff. They are translated into an algorithm-specific method
     * that depends on the capabilities (CPU, GPU) of the underlying platform. It is
     * possible for all three methods to be mapped to the same algorithm on a given
     * platform.
     */
    quality?: ('good' | 'better' | 'best');
  }

  interface ResolveHostOptions {
    /**
     * Requested DNS query type. If unspecified, resolver will pick A or AAAA (or both)
     * based on IPv4/IPv6 settings:
     */
    queryType?: ('A' | 'AAAA');
    /**
     * The source to use for resolved addresses. Default allows the resolver to pick an
     * appropriate source. Only affects use of big external sources (e.g. calling the
     * system for resolution or using DNS). Even if a source is specified, results can
     * still come from cache, resolving "localhost" or IP literals, etc. One of the
     * following values:
     */
    source?: ('any' | 'system' | 'dns' | 'mdns' | 'localOnly');
    /**
     * Indicates what DNS cache entries, if any, can be used to provide a response. One
     * of the following values:
     */
    cacheUsage?: ('allowed' | 'staleAllowed' | 'disallowed');
    /**
     * Controls the resolver's Secure DNS behavior for this request. One of the
     * following values:
     */
    secureDnsPolicy?: ('allow' | 'disable');
  }

  interface ResourceUsage {
    images: MemoryUsageDetails;
    scripts: MemoryUsageDetails;
    cssStyleSheets: MemoryUsageDetails;
    xslStyleSheets: MemoryUsageDetails;
    fonts: MemoryUsageDetails;
    other: MemoryUsageDetails;
  }

  interface Response {
    /**
     * `false` should be passed in if the dialog is canceled. If the `pairingKind` is
     * `confirm` or `confirmPin`, this value should indicate if the pairing is
     * confirmed.  If the `pairingKind` is `providePin` the value should be `true` when
     * a value is provided.
     */
    confirmed: boolean;
    /**
     * When the `pairingKind` is `providePin` this value should be the required pin for
     * the Bluetooth device.
     */
    pin?: (string) | (null);
  }

  interface Result {
    requestId: number;
    /**
     * Position of the active match.
     */
    activeMatchOrdinal: number;
    /**
     * Number of Matches.
     */
    matches: number;
    /**
     * Coordinates of first match region.
     */
    selectionArea: Rectangle;
    finalUpdate: boolean;
  }

  interface SaveDialogOptions {
    /**
     * The dialog title. Cannot be displayed on some _Linux_ desktop environments.
     */
    title?: string;
    /**
     * Absolute directory path, absolute file path, or file name to use by default.
     */
    defaultPath?: string;
    /**
     * Custom label for the confirmation button, when left empty the default label will
     * be used.
     */
    buttonLabel?: string;
    filters?: FileFilter[];
    /**
     * Message to display above text fields.
     *
     * @platform darwin
     */
    message?: string;
    /**
     * Custom label for the text displayed in front of the filename text field.
     *
     * @platform darwin
     */
    nameFieldLabel?: string;
    /**
     * Show the tags input box, defaults to `true`.
     *
     * @platform darwin
     */
    showsTagField?: boolean;
    properties?: Array<'showHiddenFiles' | 'createDirectory' | 'treatPackageAsDirectory' | 'showOverwriteConfirmation' | 'dontAddToRecent'>;
    /**
     * Create a security scoped bookmark when packaged for the Mac App Store. If this
     * option is enabled and the file doesn't already exist a blank file will be
     * created at the chosen path.
     *
     * @platform darwin,mas
     */
    securityScopedBookmarks?: boolean;
  }

  interface SaveDialogReturnValue {
    /**
     * whether or not the dialog was canceled.
     */
    canceled: boolean;
    /**
     * If the dialog is canceled, this will be `undefined`.
     */
    filePath?: string;
    /**
     * Base64 encoded string which contains the security scoped bookmark data for the
     * saved file. `securityScopedBookmarks` must be enabled for this to be present.
     * (For return values, see table here.)
     *
     * @platform darwin,mas
     */
    bookmark?: string;
  }

  interface SaveDialogSyncOptions {
    /**
     * The dialog title. Cannot be displayed on some _Linux_ desktop environments.
     */
    title?: string;
    /**
     * Absolute directory path, absolute file path, or file name to use by default.
     */
    defaultPath?: string;
    /**
     * Custom label for the confirmation button, when left empty the default label will
     * be used.
     */
    buttonLabel?: string;
    filters?: FileFilter[];
    /**
     * Message to display above text fields.
     *
     * @platform darwin
     */
    message?: string;
    /**
     * Custom label for the text displayed in front of the filename text field.
     *
     * @platform darwin
     */
    nameFieldLabel?: string;
    /**
     * Show the tags input box, defaults to `true`.
     *
     * @platform darwin
     */
    showsTagField?: boolean;
    properties?: Array<'showHiddenFiles' | 'createDirectory' | 'treatPackageAsDirectory' | 'showOverwriteConfirmation' | 'dontAddToRecent'>;
    /**
     * Create a security scoped bookmark when packaged for the Mac App Store. If this
     * option is enabled and the file doesn't already exist a blank file will be
     * created at the chosen path.
     *
     * @platform darwin,mas
     */
    securityScopedBookmarks?: boolean;
  }

  interface SelectHidDeviceDetails {
    deviceList: HIDDevice[];
    frame: WebFrameMain;
  }

  interface SelectUsbDeviceDetails {
    deviceList: USBDevice[];
    frame: WebFrameMain;
  }

  interface SerialPortRevokedDetails {
    port: SerialPort;
    frame: WebFrameMain;
    /**
     * The origin that the device has been revoked from.
     */
    origin: string;
  }

  interface Settings {
    /**
     * `true` to open the app at login, `false` to remove the app as a login item.
     * Defaults to `false`.
     */
    openAtLogin?: boolean;
    /**
     * `true` to open the app as hidden. Defaults to `false`. The user can edit this
     * setting from the System Preferences so
     * `app.getLoginItemSettings().wasOpenedAsHidden` should be checked when the app is
     * opened to know the current value. This setting is not available on MAS build s
     * or on macOS 13 and up.
     *
     * @deprecated
     * @platform darwin
     */
    openAsHidden?: boolean;
    /**
     * The type of service to add as a login item. Defaults to `mainAppService`. Only
     * available on macOS 13 and up.
     *
     * @platform darwin
     */
    type?: ('mainAppService' | 'agentService' | 'daemonService' | 'loginItemService');
    /**
     * The name of the service. Required if `type` is non-default. Only available on
     * macOS 13 and up.
     *
     * @platform darwin
     */
    serviceName?: string;
    /**
     * The executable to launch at login. Defaults to `process.execPath`.
     *
     * @platform win32
     */
    path?: string;
    /**
     * The command-line arguments to pass to the executable. Defaults to an empty
     * array. Take care to wrap paths in quotes.
     *
     * @platform win32
     */
    args?: string[];
    /**
     * `true` will change the startup approved registry key and `enable / disable` the
     * App in Task Manager and Windows Settings. Defaults to `true`.
     *
     * @platform win32
     */
    enabled?: boolean;
    /**
     * value name to write into registry. Defaults to the app's AppUserModelId().
     *
     * @platform win32
     */
    name?: string;
  }

  interface SourcesOptions {
    /**
     * An array of strings that lists the types of desktop sources to be captured,
     * available types can be `screen` and `window`.
     */
    types: Array<'screen' | 'window'>;
    /**
     * The size that the media source thumbnail should be scaled to. Default is `150` x
     * `150`. Set width or height to 0 when you do not need the thumbnails. This will
     * save the processing time required for capturing the content of each window and
     * screen.
     */
    thumbnailSize?: Size;
    /**
     * Set to true to enable fetching window icons. The default value is false. When
     * false the appIcon property of the sources return null. Same if a source has the
     * type screen.
     */
    fetchWindowIcons?: boolean;
  }

  interface StartLoggingOptions {
    /**
     * What kinds of data should be captured. By default, only metadata about requests
     * will be captured. Setting this to `includeSensitive` will include cookies and
     * authentication data. Setting it to `everything` will include all bytes
     * transferred on sockets. Can be `default`, `includeSensitive` or `everything`.
     */
    captureMode?: ('default' | 'includeSensitive' | 'everything');
    /**
     * When the log grows beyond this size, logging will automatically stop. Defaults
     * to unlimited.
     */
    maxFileSize?: number;
  }

  interface Streams {
    video?: (Video) | (WebFrameMain);
    /**
     * If a string is specified, can be `loopback` or `loopbackWithMute`. Specifying a
     * loopback device will capture system audio, and is currently only supported on
     * Windows. If a WebFrameMain is specified, will capture audio from that frame.
     */
    audio?: (('loopback' | 'loopbackWithMute')) | (WebFrameMain);
    /**
     * If `audio` is a WebFrameMain and this is set to `true`, then local playback of
     * audio will not be muted (e.g. using `MediaRecorder` to record `WebFrameMain`
     * with this flag set to `true` will allow audio to pass through to the speakers
     * while recording). Default is `false`.
     */
    enableLocalEcho?: boolean;
  }

  interface SystemMemoryInfo {
    /**
     * The total amount of physical memory in Kilobytes available to the system.
     */
    total: number;
    /**
     * The total amount of memory not being used by applications or disk cache.
     */
    free: number;
    /**
     * The total amount of swap memory in Kilobytes available to the system.
     *
     * @platform win32,linux
     */
    swapTotal: number;
    /**
     * The free amount of swap memory in Kilobytes available to the system.
     *
     * @platform win32,linux
     */
    swapFree: number;
  }

  interface TitleBarOverlay {
    /**
     * The CSS color of the Window Controls Overlay when enabled. Default is the system
     * color.
     *
     * @platform win32
     */
    color?: string;
    /**
     * The CSS color of the symbols on the Window Controls Overlay when enabled.
     * Default is the system color.
     *
     * @platform win32
     */
    symbolColor?: string;
    /**
     * The height of the title bar and Window Controls Overlay in pixels. Default is
     * system height.
     *
     * @platform darwin,win32
     */
    height?: number;
  }

  interface TitleOptions {
    /**
     * The font family variant to display, can be `monospaced` or `monospacedDigit`.
     * `monospaced` is available in macOS 10.15+ When left blank, the title uses the
     * default system font.
     */
    fontType?: ('monospaced' | 'monospacedDigit');
  }

  interface ToBitmapOptions {
    /**
     * Defaults to 1.0.
     */
    scaleFactor?: number;
  }

  interface ToDataURLOptions {
    /**
     * Defaults to 1.0.
     */
    scaleFactor?: number;
  }

  interface ToPNGOptions {
    /**
     * Defaults to 1.0.
     */
    scaleFactor?: number;
  }

  interface TouchBarButtonConstructorOptions {
    /**
     * Button text.
     */
    label?: string;
    /**
     * A short description of the button for use by screenreaders like VoiceOver.
     */
    accessibilityLabel?: string;
    /**
     * Button background color in hex format, i.e `#ABCDEF`.
     */
    backgroundColor?: string;
    /**
     * Button icon.
     */
    icon?: (NativeImage) | (string);
    /**
     * Can be `left`, `right` or `overlay`. Defaults to `overlay`.
     */
    iconPosition?: ('left' | 'right' | 'overlay');
    /**
     * Function to call when the button is clicked.
     */
    click?: () => void;
    /**
     * Whether the button is in an enabled state.  Default is `true`.
     */
    enabled?: boolean;
  }

  interface TouchBarColorPickerConstructorOptions {
    /**
     * Array of hex color strings to appear as possible colors to select.
     */
    availableColors?: string[];
    /**
     * The selected hex color in the picker, i.e `#ABCDEF`.
     */
    selectedColor?: string;
    /**
     * Function to call when a color is selected.
     */
    change?: (color: string) => void;
  }

  interface TouchBarConstructorOptions {
    items?: Array<(TouchBarButton) | (TouchBarColorPicker) | (TouchBarGroup) | (TouchBarLabel) | (TouchBarPopover) | (TouchBarScrubber) | (TouchBarSegmentedControl) | (TouchBarSlider) | (TouchBarSpacer)>;
    escapeItem?: (TouchBarButton) | (TouchBarColorPicker) | (TouchBarGroup) | (TouchBarLabel) | (TouchBarPopover) | (TouchBarScrubber) | (TouchBarSegmentedControl) | (TouchBarSlider) | (TouchBarSpacer) | (null);
  }

  interface TouchBarGroupConstructorOptions {
    /**
     * Items to display as a group.
     */
    items: TouchBar;
  }

  interface TouchBarLabelConstructorOptions {
    /**
     * Text to display.
     */
    label?: string;
    /**
     * A short description of the button for use by screenreaders like VoiceOver.
     */
    accessibilityLabel?: string;
    /**
     * Hex color of text, i.e `#ABCDEF`.
     */
    textColor?: string;
  }

  interface TouchBarPopoverConstructorOptions {
    /**
     * Popover button text.
     */
    label?: string;
    /**
     * Popover button icon.
     */
    icon?: NativeImage;
    /**
     * Items to display in the popover.
     */
    items: TouchBar;
    /**
     * `true` to display a close button on the left of the popover, `false` to not show
     * it. Default is `true`.
     */
    showCloseButton?: boolean;
  }

  interface TouchBarScrubberConstructorOptions {
    /**
     * An array of items to place in this scrubber.
     */
    items: ScrubberItem[];
    /**
     * Called when the user taps an item that was not the last tapped item.
     */
    select?: (selectedIndex: number) => void;
    /**
     * Called when the user taps any item.
     */
    highlight?: (highlightedIndex: number) => void;
    /**
     * Selected item style. Can be `background`, `outline` or `none`. Defaults to
     * `none`.
     */
    selectedStyle?: ('background' | 'outline' | 'none');
    /**
     * Selected overlay item style. Can be `background`, `outline` or `none`. Defaults
     * to `none`.
     */
    overlayStyle?: ('background' | 'outline' | 'none');
    /**
     * Whether to show arrow buttons. Defaults to `false` and is only shown if `items`
     * is non-empty.
     */
    showArrowButtons?: boolean;
    /**
     * Can be `fixed` or `free`. The default is `free`.
     */
    mode?: ('fixed' | 'free');
    /**
     * Defaults to `true`.
     */
    continuous?: boolean;
  }

  interface TouchBarSegmentedControlConstructorOptions {
    /**
     * Style of the segments:
     */
    segmentStyle?: ('automatic' | 'rounded' | 'textured-rounded' | 'round-rect' | 'textured-square' | 'capsule' | 'small-square' | 'separated');
    /**
     * The selection mode of the control:
     */
    mode?: ('single' | 'multiple' | 'buttons');
    /**
     * An array of segments to place in this control.
     */
    segments: SegmentedControlSegment[];
    /**
     * The index of the currently selected segment, will update automatically with user
     * interaction. When the mode is `multiple` it will be the last selected item.
     */
    selectedIndex?: number;
    /**
     * Called when the user selects a new segment.
     */
    change?: (selectedIndex: number, isSelected: boolean) => void;
  }

  interface TouchBarSliderConstructorOptions {
    /**
     * Label text.
     */
    label?: string;
    /**
     * Selected value.
     */
    value?: number;
    /**
     * Minimum value.
     */
    minValue?: number;
    /**
     * Maximum value.
     */
    maxValue?: number;
    /**
     * Function to call when the slider is changed.
     */
    change?: (newValue: number) => void;
  }

  interface TouchBarSpacerConstructorOptions {
    /**
     * Size of spacer, possible values are:
     */
    size?: ('small' | 'large' | 'flexible');
  }

  interface TraceBufferUsageReturnValue {
    value: number;
    percentage: number;
  }

  interface UdpPortRange {
    /**
     * The minimum UDP port number that WebRTC should use.
     */
    min: number;
    /**
     * The maximum UDP port number that WebRTC should use.
     */
    max: number;
  }

  interface UpdateTargetUrlEvent extends DOMEvent {
    url: string;
  }

  interface UploadProgress {
    /**
     * Whether the request is currently active. If this is false no other properties
     * will be set
     */
    active: boolean;
    /**
     * Whether the upload has started. If this is false both `current` and `total` will
     * be set to 0.
     */
    started: boolean;
    /**
     * The number of bytes that have been uploaded so far
     */
    current: number;
    /**
     * The number of bytes that will be uploaded this request
     */
    total: number;
  }

  interface UsbDeviceRevokedDetails {
    device: USBDevice;
    /**
     * The origin that the device has been revoked from.
     */
    origin?: string;
  }

  interface USBProtectedClassesHandlerHandlerDetails {
    /**
     * The current list of protected USB classes. Possible class values include:
     */
    protectedClasses: Array<'audio' | 'audio-video' | 'hid' | 'mass-storage' | 'smart-card' | 'video' | 'wireless'>;
  }

  interface VisibleOnAllWorkspacesOptions {
    /**
     * Sets whether the window should be visible above fullscreen windows.
     *
     * @platform darwin
     */
    visibleOnFullScreen?: boolean;
    /**
     * Calling setVisibleOnAllWorkspaces will by default transform the process type
     * between UIElementApplication and ForegroundApplication to ensure the correct
     * behavior. However, this will hide the window and dock for a short time every
     * time it is called. If your window is already of type UIElementApplication, you
     * can bypass this transformation by passing true to skipTransformProcessType.
     *
     * @platform darwin
     */
    skipTransformProcessType?: boolean;
  }

  interface WebContentsAudioStateChangedEventParams {
    /**
     * True if one or more frames or child `webContents` are emitting audio.
     */
    audible: boolean;
  }

  interface WebContentsDidRedirectNavigationEventParams {
    /**
     * The URL the frame is navigating to.
     */
    url: string;
    /**
     * Whether the navigation happened without changing document. Examples of same
     * document navigations are reference fragment navigations, pushState/replaceState,
     * and same page history navigation.
     */
    isSameDocument: boolean;
    /**
     * True if the navigation is taking place in a main frame.
     */
    isMainFrame: boolean;
    /**
     * The frame to be navigated.
     */
    frame: WebFrameMain;
    /**
     * The frame which initiated the navigation, which can be a parent frame (e.g. via
     * `window.open` with a frame's name), or null if the navigation was not initiated
     * by a frame. This can also be null if the initiating frame was deleted before the
     * event was emitted.
     */
    initiator?: WebFrameMain;
  }

  interface WebContentsDidStartNavigationEventParams {
    /**
     * The URL the frame is navigating to.
     */
    url: string;
    /**
     * Whether the navigation happened without changing document. Examples of same
     * document navigations are reference fragment navigations, pushState/replaceState,
     * and same page history navigation.
     */
    isSameDocument: boolean;
    /**
     * True if the navigation is taking place in a main frame.
     */
    isMainFrame: boolean;
    /**
     * The frame to be navigated.
     */
    frame: WebFrameMain;
    /**
     * The frame which initiated the navigation, which can be a parent frame (e.g. via
     * `window.open` with a frame's name), or null if the navigation was not initiated
     * by a frame. This can also be null if the initiating frame was deleted before the
     * event was emitted.
     */
    initiator?: WebFrameMain;
  }

  interface WebContentsPrintOptions {
    /**
     * Don't ask user for print settings. Default is `false`.
     */
    silent?: boolean;
    /**
     * Prints the background color and image of the web page. Default is `false`.
     */
    printBackground?: boolean;
    /**
     * Set the printer device name to use. Must be the system-defined name and not the
     * 'friendly' name, e.g 'Brother_QL_820NWB' and not 'Brother QL-820NWB'.
     */
    deviceName?: string;
    /**
     * Set whether the printed web page will be in color or grayscale. Default is
     * `true`.
     */
    color?: boolean;
    margins?: Margins;
    /**
     * Whether the web page should be printed in landscape mode. Default is `false`.
     */
    landscape?: boolean;
    /**
     * The scale factor of the web page.
     */
    scaleFactor?: number;
    /**
     * The number of pages to print per page sheet.
     */
    pagesPerSheet?: number;
    /**
     * Whether the web page should be collated.
     */
    collate?: boolean;
    /**
     * The number of copies of the web page to print.
     */
    copies?: number;
    /**
     * The page range to print. On macOS, only one range is honored.
     */
    pageRanges?: PageRanges[];
    /**
     * Set the duplex mode of the printed web page. Can be `simplex`, `shortEdge`, or
     * `longEdge`.
     */
    duplexMode?: ('simplex' | 'shortEdge' | 'longEdge');
    dpi?: Record<string, number>;
    /**
     * string to be printed as page header.
     */
    header?: string;
    /**
     * string to be printed as page footer.
     */
    footer?: string;
    /**
     * Specify page size of the printed document. Can be `A0`, `A1`, `A2`, `A3`, `A4`,
     * `A5`, `A6`, `Legal`, `Letter`, `Tabloid` or an Object containing `height` and
     * `width`.
     */
    pageSize?: (('A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'Legal' | 'Letter' | 'Tabloid')) | (Size);
  }

  interface WebContentsWillFrameNavigateEventParams {
    /**
     * The URL the frame is navigating to.
     */
    url: string;
    /**
     * This event does not fire for same document navigations using window.history api
     * and reference fragment navigations. This property is always set to `false` for
     * this event.
     */
    isSameDocument: boolean;
    /**
     * True if the navigation is taking place in a main frame.
     */
    isMainFrame: boolean;
    /**
     * The frame to be navigated.
     */
    frame: WebFrameMain;
    /**
     * The frame which initiated the navigation, which can be a parent frame (e.g. via
     * `window.open` with a frame's name), or null if the navigation was not initiated
     * by a frame. This can also be null if the initiating frame was deleted before the
     * event was emitted.
     */
    initiator?: WebFrameMain;
  }

  interface WebContentsWillNavigateEventParams {
    /**
     * The URL the frame is navigating to.
     */
    url: string;
    /**
     * This event does not fire for same document navigations using window.history api
     * and reference fragment navigations. This property is always set to `false` for
     * this event.
     */
    isSameDocument: boolean;
    /**
     * True if the navigation is taking place in a main frame.
     */
    isMainFrame: boolean;
    /**
     * The frame to be navigated.
     */
    frame: WebFrameMain;
    /**
     * The frame which initiated the navigation, which can be a parent frame (e.g. via
     * `window.open` with a frame's name), or null if the navigation was not initiated
     * by a frame. This can also be null if the initiating frame was deleted before the
     * event was emitted.
     */
    initiator?: WebFrameMain;
  }

  interface WebContentsWillRedirectEventParams {
    /**
     * The URL the frame is navigating to.
     */
    url: string;
    /**
     * Whether the navigation happened without changing document. Examples of same
     * document navigations are reference fragment navigations, pushState/replaceState,
     * and same page history navigation.
     */
    isSameDocument: boolean;
    /**
     * True if the navigation is taking place in a main frame.
     */
    isMainFrame: boolean;
    /**
     * The frame to be navigated.
     */
    frame: WebFrameMain;
    /**
     * The frame which initiated the navigation, which can be a parent frame (e.g. via
     * `window.open` with a frame's name), or null if the navigation was not initiated
     * by a frame. This can also be null if the initiating frame was deleted before the
     * event was emitted.
     */
    initiator?: WebFrameMain;
  }

  interface WebRTCUDPPortRange {
    /**
     * The minimum UDP port number that WebRTC should use.
     */
    min: number;
    /**
     * The maximum UDP port number that WebRTC should use.
     */
    max: number;
  }

  interface WebviewTagPrintOptions {
    /**
     * Don't ask user for print settings. Default is `false`.
     */
    silent?: boolean;
    /**
     * Prints the background color and image of the web page. Default is `false`.
     */
    printBackground?: boolean;
    /**
     * Set the printer device name to use. Must be the system-defined name and not the
     * 'friendly' name, e.g 'Brother_QL_820NWB' and not 'Brother QL-820NWB'.
     */
    deviceName?: string;
    /**
     * Set whether the printed web page will be in color or grayscale. Default is
     * `true`.
     */
    color?: boolean;
    margins?: Margins;
    /**
     * Whether the web page should be printed in landscape mode. Default is `false`.
     */
    landscape?: boolean;
    /**
     * The scale factor of the web page.
     */
    scaleFactor?: number;
    /**
     * The number of pages to print per page sheet.
     */
    pagesPerSheet?: number;
    /**
     * Whether the web page should be collated.
     */
    collate?: boolean;
    /**
     * The number of copies of the web page to print.
     */
    copies?: number;
    /**
     * The page range to print.
     */
    pageRanges?: PageRanges[];
    /**
     * Set the duplex mode of the printed web page. Can be `simplex`, `shortEdge`, or
     * `longEdge`.
     */
    duplexMode?: ('simplex' | 'shortEdge' | 'longEdge');
    dpi?: Record<string, number>;
    /**
     * string to be printed as page header.
     */
    header?: string;
    /**
     * string to be printed as page footer.
     */
    footer?: string;
    /**
     * Specify page size of the printed document. Can be `A3`, `A4`, `A5`, `Legal`,
     * `Letter`, `Tabloid` or an Object containing `height` in microns.
     */
    pageSize?: (('A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid')) | (Size);
  }

  interface WillFrameNavigateEvent extends DOMEvent {
    url: string;
    isMainFrame: boolean;
    frameProcessId: number;
    frameRoutingId: number;
  }

  interface WillNavigateEvent extends DOMEvent {
    url: string;
  }

  interface WillResizeDetails {
    /**
     * The edge of the window being dragged for resizing. Can be `bottom`, `left`,
     * `right`, `top-left`, `top-right`, `bottom-left` or `bottom-right`.
     */
    edge: ('bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right');
  }

  interface EditFlags {
    /**
     * Whether the renderer believes it can undo.
     */
    canUndo: boolean;
    /**
     * Whether the renderer believes it can redo.
     */
    canRedo: boolean;
    /**
     * Whether the renderer believes it can cut.
     */
    canCut: boolean;
    /**
     * Whether the renderer believes it can copy.
     */
    canCopy: boolean;
    /**
     * Whether the renderer believes it can paste.
     */
    canPaste: boolean;
    /**
     * Whether the renderer believes it can delete.
     */
    canDelete: boolean;
    /**
     * Whether the renderer believes it can select all.
     */
    canSelectAll: boolean;
    /**
     * Whether the renderer believes it can edit text richly.
     */
    canEditRichly: boolean;
  }

  interface Env {
  }

  interface FoundInPageResult {
    requestId: number;
    /**
     * Position of the active match.
     */
    activeMatchOrdinal: number;
    /**
     * Number of Matches.
     */
    matches: number;
    /**
     * Coordinates of first match region.
     */
    selectionArea: Rectangle;
    finalUpdate: boolean;
  }

  interface LaunchItems {
    /**
     * name value of a registry entry.
     *
     * @platform win32
     */
    name: string;
    /**
     * The executable to an app that corresponds to a registry entry.
     *
     * @platform win32
     */
    path: string;
    /**
     * the command-line arguments to pass to the executable.
     *
     * @platform win32
     */
    args: string[];
    /**
     * one of `user` or `machine`. Indicates whether the registry entry is under
     * `HKEY_CURRENT USER` or `HKEY_LOCAL_MACHINE`.
     *
     * @platform win32
     */
    scope: string;
    /**
     * `true` if the app registry key is startup approved and therefore shows as
     * `enabled` in Task Manager and Windows settings.
     *
     * @platform win32
     */
    enabled: boolean;
  }

  interface Margins {
    /**
     * Can be `default`, `none`, `printableArea`, or `custom`. If `custom` is chosen,
     * you will also need to specify `top`, `bottom`, `left`, and `right`.
     */
    marginType?: ('default' | 'none' | 'printableArea' | 'custom');
    /**
     * The top margin of the printed web page, in pixels.
     */
    top?: number;
    /**
     * The bottom margin of the printed web page, in pixels.
     */
    bottom?: number;
    /**
     * The left margin of the printed web page, in pixels.
     */
    left?: number;
    /**
     * The right margin of the printed web page, in pixels.
     */
    right?: number;
  }

  interface MediaFlags {
    /**
     * Whether the media element has crashed.
     */
    inError: boolean;
    /**
     * Whether the media element is paused.
     */
    isPaused: boolean;
    /**
     * Whether the media element is muted.
     */
    isMuted: boolean;
    /**
     * Whether the media element has audio.
     */
    hasAudio: boolean;
    /**
     * Whether the media element is looping.
     */
    isLooping: boolean;
    /**
     * Whether the media element's controls are visible.
     */
    isControlsVisible: boolean;
    /**
     * Whether the media element's controls are toggleable.
     */
    canToggleControls: boolean;
    /**
     * Whether the media element can be printed.
     */
    canPrint: boolean;
    /**
     * Whether or not the media element can be downloaded.
     */
    canSave: boolean;
    /**
     * Whether the media element can show picture-in-picture.
     */
    canShowPictureInPicture: boolean;
    /**
     * Whether the media element is currently showing picture-in-picture.
     */
    isShowingPictureInPicture: boolean;
    /**
     * Whether the media element can be rotated.
     */
    canRotate: boolean;
    /**
     * Whether the media element can be looped.
     */
    canLoop: boolean;
  }

  interface PageRanges {
    /**
     * Index of the first page to print (0-based).
     */
    from: number;
    /**
     * Index of the last page to print (inclusive) (0-based).
     */
    to: number;
  }

  interface Params {
    /**
     * x coordinate.
     */
    x: number;
    /**
     * y coordinate.
     */
    y: number;
    /**
     * URL of the link that encloses the node the context menu was invoked on.
     */
    linkURL: string;
    /**
     * Text associated with the link. May be an empty string if the contents of the
     * link are an image.
     */
    linkText: string;
    /**
     * URL of the top level page that the context menu was invoked on.
     */
    pageURL: string;
    /**
     * URL of the subframe that the context menu was invoked on.
     */
    frameURL: string;
    /**
     * Source URL for the element that the context menu was invoked on. Elements with
     * source URLs are images, audio and video.
     */
    srcURL: string;
    /**
     * Type of the node the context menu was invoked on. Can be `none`, `image`,
     * `audio`, `video`, `canvas`, `file` or `plugin`.
     */
    mediaType: ('none' | 'image' | 'audio' | 'video' | 'canvas' | 'file' | 'plugin');
    /**
     * Whether the context menu was invoked on an image which has non-empty contents.
     */
    hasImageContents: boolean;
    /**
     * Whether the context is editable.
     */
    isEditable: boolean;
    /**
     * Text of the selection that the context menu was invoked on.
     */
    selectionText: string;
    /**
     * Title text of the selection that the context menu was invoked on.
     */
    titleText: string;
    /**
     * Alt text of the selection that the context menu was invoked on.
     */
    altText: string;
    /**
     * Suggested filename to be used when saving file through 'Save Link As' option of
     * context menu.
     */
    suggestedFilename: string;
    /**
     * Rect representing the coordinates in the document space of the selection.
     */
    selectionRect: Rectangle;
    /**
     * Start position of the selection text.
     */
    selectionStartOffset: number;
    /**
     * The referrer policy of the frame on which the menu is invoked.
     */
    referrerPolicy: Referrer;
    /**
     * The misspelled word under the cursor, if any.
     */
    misspelledWord: string;
    /**
     * An array of suggested words to show the user to replace the `misspelledWord`.
     * Only available if there is a misspelled word and spellchecker is enabled.
     */
    dictionarySuggestions: string[];
    /**
     * The character encoding of the frame on which the menu was invoked.
     */
    frameCharset: string;
    /**
     * The source that the context menu was invoked on. Possible values include `none`,
     * `button-button`, `field-set`, `input-button`, `input-checkbox`, `input-color`,
     * `input-date`, `input-datetime-local`, `input-email`, `input-file`,
     * `input-hidden`, `input-image`, `input-month`, `input-number`, `input-password`,
     * `input-radio`, `input-range`, `input-reset`, `input-search`, `input-submit`,
     * `input-telephone`, `input-text`, `input-time`, `input-url`, `input-week`,
     * `output`, `reset-button`, `select-list`, `select-list`, `select-multiple`,
     * `select-one`, `submit-button`, and `text-area`,
     */
    formControlType: ('none' | 'button-button' | 'field-set' | 'input-button' | 'input-checkbox' | 'input-color' | 'input-date' | 'input-datetime-local' | 'input-email' | 'input-file' | 'input-hidden' | 'input-image' | 'input-month' | 'input-number' | 'input-password' | 'input-radio' | 'input-range' | 'input-reset' | 'input-search' | 'input-submit' | 'input-telephone' | 'input-text' | 'input-time' | 'input-url' | 'input-week' | 'output' | 'reset-button' | 'select-list' | 'select-list' | 'select-multiple' | 'select-one' | 'submit-button' | 'text-area');
    /**
     * If the context menu was invoked on an input field, the type of that field.
     * Possible values include `none`, `plainText`, `password`, `other`.
     *
     * @deprecated
     */
    inputFieldType: ('none' | 'plainText' | 'password' | 'other');
    /**
     * If the context is editable, whether or not spellchecking is enabled.
     */
    spellcheckEnabled: boolean;
    /**
     * Input source that invoked the context menu. Can be `none`, `mouse`, `keyboard`,
     * `touch`, `touchMenu`, `longPress`, `longTap`, `touchHandle`, `stylus`,
     * `adjustSelection`, or `adjustSelectionReset`.
     */
    menuSourceType: ('none' | 'mouse' | 'keyboard' | 'touch' | 'touchMenu' | 'longPress' | 'longTap' | 'touchHandle' | 'stylus' | 'adjustSelection' | 'adjustSelectionReset');
    /**
     * The flags for the media element the context menu was invoked on.
     */
    mediaFlags: MediaFlags;
    /**
     * These flags indicate whether the renderer believes it is able to perform the
     * corresponding action.
     */
    editFlags: EditFlags;
  }

  interface Video {
    /**
     * The id of the stream being granted. This will usually come from a
     * DesktopCapturerSource object.
     */
    id: string;
    /**
     * The name of the stream being granted. This will usually come from a
     * DesktopCapturerSource object.
     */
    name: string;
  }



  namespace Common {
    type Event<Params extends object = {}> = Electron.Event<Params>;
    const clipboard: Clipboard;
    type Clipboard = Electron.Clipboard;
    const crashReporter: CrashReporter;
    type CrashReporter = Electron.CrashReporter;
    const nativeImage: typeof NativeImage;
    type NativeImage = Electron.NativeImage;
    const shell: Shell;
    type Shell = Electron.Shell;
    type AboutPanelOptionsOptions = Electron.AboutPanelOptionsOptions;
    type AddRepresentationOptions = Electron.AddRepresentationOptions;
    type AdjustSelectionOptions = Electron.AdjustSelectionOptions;
    type AnimationSettings = Electron.AnimationSettings;
    type AppDetailsOptions = Electron.AppDetailsOptions;
    type ApplicationInfoForProtocolReturnValue = Electron.ApplicationInfoForProtocolReturnValue;
    type AuthenticationResponseDetails = Electron.AuthenticationResponseDetails;
    type AuthInfo = Electron.AuthInfo;
    type AutoResizeOptions = Electron.AutoResizeOptions;
    type BeforeSendResponse = Electron.BeforeSendResponse;
    type BitmapOptions = Electron.BitmapOptions;
    type BlinkMemoryInfo = Electron.BlinkMemoryInfo;
    type BluetoothPairingHandlerHandlerDetails = Electron.BluetoothPairingHandlerHandlerDetails;
    type BrowserViewConstructorOptions = Electron.BrowserViewConstructorOptions;
    type CallbackResponse = Electron.CallbackResponse;
    type CertificateTrustDialogOptions = Electron.CertificateTrustDialogOptions;
    type ClearCodeCachesOptions = Electron.ClearCodeCachesOptions;
    type ClearStorageDataOptions = Electron.ClearStorageDataOptions;
    type ClientRequestConstructorOptions = Electron.ClientRequestConstructorOptions;
    type CloseOpts = Electron.CloseOpts;
    type Config = Electron.Config;
    type ConfigureHostResolverOptions = Electron.ConfigureHostResolverOptions;
    type ConsoleMessageEvent = Electron.ConsoleMessageEvent;
    type ContextMenuEvent = Electron.ContextMenuEvent;
    type ContextMenuParams = Electron.ContextMenuParams;
    type ContinueActivityDetails = Electron.ContinueActivityDetails;
    type CookiesGetFilter = Electron.CookiesGetFilter;
    type CookiesSetDetails = Electron.CookiesSetDetails;
    type CrashReporterStartOptions = Electron.CrashReporterStartOptions;
    type CreateFromBitmapOptions = Electron.CreateFromBitmapOptions;
    type CreateFromBufferOptions = Electron.CreateFromBufferOptions;
    type CreateInterruptedDownloadOptions = Electron.CreateInterruptedDownloadOptions;
    type Data = Electron.Data;
    type DefaultFontFamily = Electron.DefaultFontFamily;
    type Details = Electron.Details;
    type DevicePermissionHandlerHandlerDetails = Electron.DevicePermissionHandlerHandlerDetails;
    type DevtoolsOpenUrlEvent = Electron.DevtoolsOpenUrlEvent;
    type DidChangeThemeColorEvent = Electron.DidChangeThemeColorEvent;
    type DidCreateWindowDetails = Electron.DidCreateWindowDetails;
    type DidFailLoadEvent = Electron.DidFailLoadEvent;
    type DidFrameFinishLoadEvent = Electron.DidFrameFinishLoadEvent;
    type DidFrameNavigateEvent = Electron.DidFrameNavigateEvent;
    type DidNavigateEvent = Electron.DidNavigateEvent;
    type DidNavigateInPageEvent = Electron.DidNavigateInPageEvent;
    type DidRedirectNavigationEvent = Electron.DidRedirectNavigationEvent;
    type DidStartNavigationEvent = Electron.DidStartNavigationEvent;
    type DisplayBalloonOptions = Electron.DisplayBalloonOptions;
    type DisplayMediaRequestHandlerHandlerRequest = Electron.DisplayMediaRequestHandlerHandlerRequest;
    type DownloadURLOptions = Electron.DownloadURLOptions;
    type EnableNetworkEmulationOptions = Electron.EnableNetworkEmulationOptions;
    type FeedURLOptions = Electron.FeedURLOptions;
    type FileIconOptions = Electron.FileIconOptions;
    type FindInPageOptions = Electron.FindInPageOptions;
    type FocusOptions = Electron.FocusOptions;
    type ForkOptions = Electron.ForkOptions;
    type FoundInPageEvent = Electron.FoundInPageEvent;
    type FrameCreatedDetails = Electron.FrameCreatedDetails;
    type FromPartitionOptions = Electron.FromPartitionOptions;
    type FromPathOptions = Electron.FromPathOptions;
    type HandlerDetails = Electron.HandlerDetails;
    type HeadersReceivedResponse = Electron.HeadersReceivedResponse;
    type HeapStatistics = Electron.HeapStatistics;
    type HidDeviceAddedDetails = Electron.HidDeviceAddedDetails;
    type HidDeviceRemovedDetails = Electron.HidDeviceRemovedDetails;
    type HidDeviceRevokedDetails = Electron.HidDeviceRevokedDetails;
    type IgnoreMouseEventsOptions = Electron.IgnoreMouseEventsOptions;
    type ImportCertificateOptions = Electron.ImportCertificateOptions;
    type Info = Electron.Info;
    type Input = Electron.Input;
    type InsertCSSOptions = Electron.InsertCSSOptions;
    type IpcMessageEvent = Electron.IpcMessageEvent;
    type Item = Electron.Item;
    type JumpListSettings = Electron.JumpListSettings;
    type LoadCommitEvent = Electron.LoadCommitEvent;
    type LoadExtensionOptions = Electron.LoadExtensionOptions;
    type LoadFileOptions = Electron.LoadFileOptions;
    type LoadURLOptions = Electron.LoadURLOptions;
    type LoginItemSettings = Electron.LoginItemSettings;
    type LoginItemSettingsOptions = Electron.LoginItemSettingsOptions;
    type MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;
    type MessageBoxOptions = Electron.MessageBoxOptions;
    type MessageBoxReturnValue = Electron.MessageBoxReturnValue;
    type MessageBoxSyncOptions = Electron.MessageBoxSyncOptions;
    type MessageDetails = Electron.MessageDetails;
    type MessageEvent = Electron.MessageEvent;
    type MoveToApplicationsFolderOptions = Electron.MoveToApplicationsFolderOptions;
    type NotificationConstructorOptions = Electron.NotificationConstructorOptions;
    type OnBeforeRedirectListenerDetails = Electron.OnBeforeRedirectListenerDetails;
    type OnBeforeRequestListenerDetails = Electron.OnBeforeRequestListenerDetails;
    type OnBeforeSendHeadersListenerDetails = Electron.OnBeforeSendHeadersListenerDetails;
    type OnCompletedListenerDetails = Electron.OnCompletedListenerDetails;
    type OnErrorOccurredListenerDetails = Electron.OnErrorOccurredListenerDetails;
    type OnHeadersReceivedListenerDetails = Electron.OnHeadersReceivedListenerDetails;
    type OnResponseStartedListenerDetails = Electron.OnResponseStartedListenerDetails;
    type OnSendHeadersListenerDetails = Electron.OnSendHeadersListenerDetails;
    type OpenDevToolsOptions = Electron.OpenDevToolsOptions;
    type OpenDialogOptions = Electron.OpenDialogOptions;
    type OpenDialogReturnValue = Electron.OpenDialogReturnValue;
    type OpenDialogSyncOptions = Electron.OpenDialogSyncOptions;
    type OpenExternalOptions = Electron.OpenExternalOptions;
    type Options = Electron.Options;
    type Opts = Electron.Opts;
    type PageFaviconUpdatedEvent = Electron.PageFaviconUpdatedEvent;
    type PageTitleUpdatedEvent = Electron.PageTitleUpdatedEvent;
    type Parameters = Electron.Parameters;
    type Payment = Electron.Payment;
    type PermissionCheckHandlerHandlerDetails = Electron.PermissionCheckHandlerHandlerDetails;
    type PermissionRequestHandlerHandlerDetails = Electron.PermissionRequestHandlerHandlerDetails;
    type PluginCrashedEvent = Electron.PluginCrashedEvent;
    type PopupOptions = Electron.PopupOptions;
    type PreconnectOptions = Electron.PreconnectOptions;
    type PrintToPDFOptions = Electron.PrintToPDFOptions;
    type Privileges = Electron.Privileges;
    type ProgressBarOptions = Electron.ProgressBarOptions;
    type Provider = Electron.Provider;
    type PurchaseProductOpts = Electron.PurchaseProductOpts;
    type ReadBookmark = Electron.ReadBookmark;
    type RegistrationCompletedDetails = Electron.RegistrationCompletedDetails;
    type RelaunchOptions = Electron.RelaunchOptions;
    type RenderProcessGoneEvent = Electron.RenderProcessGoneEvent;
    type Request = Electron.Request;
    type ResizeOptions = Electron.ResizeOptions;
    type ResolveHostOptions = Electron.ResolveHostOptions;
    type ResourceUsage = Electron.ResourceUsage;
    type Response = Electron.Response;
    type Result = Electron.Result;
    type SaveDialogOptions = Electron.SaveDialogOptions;
    type SaveDialogReturnValue = Electron.SaveDialogReturnValue;
    type SaveDialogSyncOptions = Electron.SaveDialogSyncOptions;
    type SelectHidDeviceDetails = Electron.SelectHidDeviceDetails;
    type SelectUsbDeviceDetails = Electron.SelectUsbDeviceDetails;
    type SerialPortRevokedDetails = Electron.SerialPortRevokedDetails;
    type Settings = Electron.Settings;
    type SourcesOptions = Electron.SourcesOptions;
    type StartLoggingOptions = Electron.StartLoggingOptions;
    type Streams = Electron.Streams;
    type SystemMemoryInfo = Electron.SystemMemoryInfo;
    type TitleBarOverlay = Electron.TitleBarOverlay;
    type TitleOptions = Electron.TitleOptions;
    type ToBitmapOptions = Electron.ToBitmapOptions;
    type ToDataURLOptions = Electron.ToDataURLOptions;
    type ToPNGOptions = Electron.ToPNGOptions;
    type TouchBarButtonConstructorOptions = Electron.TouchBarButtonConstructorOptions;
    type TouchBarColorPickerConstructorOptions = Electron.TouchBarColorPickerConstructorOptions;
    type TouchBarConstructorOptions = Electron.TouchBarConstructorOptions;
    type TouchBarGroupConstructorOptions = Electron.TouchBarGroupConstructorOptions;
    type TouchBarLabelConstructorOptions = Electron.TouchBarLabelConstructorOptions;
    type TouchBarPopoverConstructorOptions = Electron.TouchBarPopoverConstructorOptions;
    type TouchBarScrubberConstructorOptions = Electron.TouchBarScrubberConstructorOptions;
    type TouchBarSegmentedControlConstructorOptions = Electron.TouchBarSegmentedControlConstructorOptions;
    type TouchBarSliderConstructorOptions = Electron.TouchBarSliderConstructorOptions;
    type TouchBarSpacerConstructorOptions = Electron.TouchBarSpacerConstructorOptions;
    type TraceBufferUsageReturnValue = Electron.TraceBufferUsageReturnValue;
    type UdpPortRange = Electron.UdpPortRange;
    type UpdateTargetUrlEvent = Electron.UpdateTargetUrlEvent;
    type UploadProgress = Electron.UploadProgress;
    type UsbDeviceRevokedDetails = Electron.UsbDeviceRevokedDetails;
    type USBProtectedClassesHandlerHandlerDetails = Electron.USBProtectedClassesHandlerHandlerDetails;
    type VisibleOnAllWorkspacesOptions = Electron.VisibleOnAllWorkspacesOptions;
    type WebContentsAudioStateChangedEventParams = Electron.WebContentsAudioStateChangedEventParams;
    type WebContentsDidRedirectNavigationEventParams = Electron.WebContentsDidRedirectNavigationEventParams;
    type WebContentsDidStartNavigationEventParams = Electron.WebContentsDidStartNavigationEventParams;
    type WebContentsPrintOptions = Electron.WebContentsPrintOptions;
    type WebContentsWillFrameNavigateEventParams = Electron.WebContentsWillFrameNavigateEventParams;
    type WebContentsWillNavigateEventParams = Electron.WebContentsWillNavigateEventParams;
    type WebContentsWillRedirectEventParams = Electron.WebContentsWillRedirectEventParams;
    type WebRTCUDPPortRange = Electron.WebRTCUDPPortRange;
    type WebviewTagPrintOptions = Electron.WebviewTagPrintOptions;
    type WillFrameNavigateEvent = Electron.WillFrameNavigateEvent;
    type WillNavigateEvent = Electron.WillNavigateEvent;
    type WillResizeDetails = Electron.WillResizeDetails;
    type EditFlags = Electron.EditFlags;
    type Env = Electron.Env;
    type FoundInPageResult = Electron.FoundInPageResult;
    type LaunchItems = Electron.LaunchItems;
    type Margins = Electron.Margins;
    type MediaFlags = Electron.MediaFlags;
    type PageRanges = Electron.PageRanges;
    type Params = Electron.Params;
    type Video = Electron.Video;
    type BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;
    type BluetoothDevice = Electron.BluetoothDevice;
    type Certificate = Electron.Certificate;
    type CertificatePrincipal = Electron.CertificatePrincipal;
    type Cookie = Electron.Cookie;
    type CPUUsage = Electron.CPUUsage;
    type CrashReport = Electron.CrashReport;
    type CustomScheme = Electron.CustomScheme;
    type DesktopCapturerSource = Electron.DesktopCapturerSource;
    type Display = Electron.Display;
    type Extension = Electron.Extension;
    type ExtensionInfo = Electron.ExtensionInfo;
    type FileFilter = Electron.FileFilter;
    type FilePathWithHeaders = Electron.FilePathWithHeaders;
    type GPUFeatureStatus = Electron.GPUFeatureStatus;
    type HIDDevice = Electron.HIDDevice;
    type InputEvent = Electron.InputEvent;
    type IOCounters = Electron.IOCounters;
    type IpcMainEvent = Electron.IpcMainEvent;
    type IpcMainInvokeEvent = Electron.IpcMainInvokeEvent;
    type IpcRendererEvent = Electron.IpcRendererEvent;
    type JumpListCategory = Electron.JumpListCategory;
    type JumpListItem = Electron.JumpListItem;
    type KeyboardEvent = Electron.KeyboardEvent;
    type KeyboardInputEvent = Electron.KeyboardInputEvent;
    type MemoryInfo = Electron.MemoryInfo;
    type MemoryUsageDetails = Electron.MemoryUsageDetails;
    type MimeTypedBuffer = Electron.MimeTypedBuffer;
    type MouseInputEvent = Electron.MouseInputEvent;
    type MouseWheelInputEvent = Electron.MouseWheelInputEvent;
    type NotificationAction = Electron.NotificationAction;
    type NotificationResponse = Electron.NotificationResponse;
    type PaymentDiscount = Electron.PaymentDiscount;
    type Point = Electron.Point;
    type PostBody = Electron.PostBody;
    type PrinterInfo = Electron.PrinterInfo;
    type ProcessMemoryInfo = Electron.ProcessMemoryInfo;
    type ProcessMetric = Electron.ProcessMetric;
    type Product = Electron.Product;
    type ProductDiscount = Electron.ProductDiscount;
    type ProductSubscriptionPeriod = Electron.ProductSubscriptionPeriod;
    type ProtocolRequest = Electron.ProtocolRequest;
    type ProtocolResponse = Electron.ProtocolResponse;
    type ProtocolResponseUploadData = Electron.ProtocolResponseUploadData;
    type ProxyConfig = Electron.ProxyConfig;
    type Rectangle = Electron.Rectangle;
    type Referrer = Electron.Referrer;
    type RenderProcessGoneDetails = Electron.RenderProcessGoneDetails;
    type ResolvedEndpoint = Electron.ResolvedEndpoint;
    type ResolvedHost = Electron.ResolvedHost;
    type ScrubberItem = Electron.ScrubberItem;
    type SegmentedControlSegment = Electron.SegmentedControlSegment;
    type SerialPort = Electron.SerialPort;
    type ServiceWorkerInfo = Electron.ServiceWorkerInfo;
    type SharedWorkerInfo = Electron.SharedWorkerInfo;
    type SharingItem = Electron.SharingItem;
    type ShortcutDetails = Electron.ShortcutDetails;
    type Size = Electron.Size;
    type Task = Electron.Task;
    type ThumbarButton = Electron.ThumbarButton;
    type TraceCategoriesAndOptions = Electron.TraceCategoriesAndOptions;
    type TraceConfig = Electron.TraceConfig;
    type Transaction = Electron.Transaction;
    type UploadData = Electron.UploadData;
    type UploadFile = Electron.UploadFile;
    type UploadRawData = Electron.UploadRawData;
    type USBDevice = Electron.USBDevice;
    type UserDefaultTypes = Electron.UserDefaultTypes;
    type WebPreferences = Electron.WebPreferences;
    type WebRequestFilter = Electron.WebRequestFilter;
    type WebSource = Electron.WebSource;
  }

  namespace Main {
    type Event<Params extends object = {}> = Electron.Event<Params>;
    const app: App;
    type App = Electron.App;
    const autoUpdater: AutoUpdater;
    type AutoUpdater = Electron.AutoUpdater;
    class BrowserView extends Electron.BrowserView {}
    class BrowserWindow extends Electron.BrowserWindow {}
    type ClientRequest = Electron.ClientRequest;
    type CommandLine = Electron.CommandLine;
    const contentTracing: ContentTracing;
    type ContentTracing = Electron.ContentTracing;
    type Cookies = Electron.Cookies;
    type Debugger = Electron.Debugger;
    const desktopCapturer: DesktopCapturer;
    type DesktopCapturer = Electron.DesktopCapturer;
    const dialog: Dialog;
    type Dialog = Electron.Dialog;
    type Dock = Electron.Dock;
    type DownloadItem = Electron.DownloadItem;
    const globalShortcut: GlobalShortcut;
    type GlobalShortcut = Electron.GlobalShortcut;
    const inAppPurchase: InAppPurchase;
    type InAppPurchase = Electron.InAppPurchase;
    type IncomingMessage = Electron.IncomingMessage;
    const ipcMain: IpcMain;
    type IpcMain = Electron.IpcMain;
    class Menu extends Electron.Menu {}
    class MenuItem extends Electron.MenuItem {}
    class MessageChannelMain extends Electron.MessageChannelMain {}
    type MessagePortMain = Electron.MessagePortMain;
    const nativeTheme: NativeTheme;
    type NativeTheme = Electron.NativeTheme;
    const net: Net;
    type Net = Electron.Net;
    const netLog: NetLog;
    type NetLog = Electron.NetLog;
    class Notification extends Electron.Notification {}
    const powerMonitor: PowerMonitor;
    type PowerMonitor = Electron.PowerMonitor;
    const powerSaveBlocker: PowerSaveBlocker;
    type PowerSaveBlocker = Electron.PowerSaveBlocker;
    const protocol: Protocol;
    type Protocol = Electron.Protocol;
    const pushNotifications: PushNotifications;
    type PushNotifications = Electron.PushNotifications;
    const safeStorage: SafeStorage;
    type SafeStorage = Electron.SafeStorage;
    const screen: Screen;
    type Screen = Electron.Screen;
    type ServiceWorkers = Electron.ServiceWorkers;
    const session: typeof Session;
    type Session = Electron.Session;
    class ShareMenu extends Electron.ShareMenu {}
    const systemPreferences: SystemPreferences;
    type SystemPreferences = Electron.SystemPreferences;
    class TouchBar extends Electron.TouchBar {}
    type TouchBarButton = Electron.TouchBarButton;
    type TouchBarColorPicker = Electron.TouchBarColorPicker;
    type TouchBarGroup = Electron.TouchBarGroup;
    type TouchBarLabel = Electron.TouchBarLabel;
    type TouchBarOtherItemsProxy = Electron.TouchBarOtherItemsProxy;
    type TouchBarPopover = Electron.TouchBarPopover;
    type TouchBarScrubber = Electron.TouchBarScrubber;
    type TouchBarSegmentedControl = Electron.TouchBarSegmentedControl;
    type TouchBarSlider = Electron.TouchBarSlider;
    type TouchBarSpacer = Electron.TouchBarSpacer;
    class Tray extends Electron.Tray {}
    const utilityProcess: typeof UtilityProcess;
    type UtilityProcess = Electron.UtilityProcess;
    const webContents: typeof WebContents;
    type WebContents = Electron.WebContents;
    const webFrameMain: typeof WebFrameMain;
    type WebFrameMain = Electron.WebFrameMain;
    type WebRequest = Electron.WebRequest;
    type AboutPanelOptionsOptions = Electron.AboutPanelOptionsOptions;
    type AddRepresentationOptions = Electron.AddRepresentationOptions;
    type AdjustSelectionOptions = Electron.AdjustSelectionOptions;
    type AnimationSettings = Electron.AnimationSettings;
    type AppDetailsOptions = Electron.AppDetailsOptions;
    type ApplicationInfoForProtocolReturnValue = Electron.ApplicationInfoForProtocolReturnValue;
    type AuthenticationResponseDetails = Electron.AuthenticationResponseDetails;
    type AuthInfo = Electron.AuthInfo;
    type AutoResizeOptions = Electron.AutoResizeOptions;
    type BeforeSendResponse = Electron.BeforeSendResponse;
    type BitmapOptions = Electron.BitmapOptions;
    type BlinkMemoryInfo = Electron.BlinkMemoryInfo;
    type BluetoothPairingHandlerHandlerDetails = Electron.BluetoothPairingHandlerHandlerDetails;
    type BrowserViewConstructorOptions = Electron.BrowserViewConstructorOptions;
    type CallbackResponse = Electron.CallbackResponse;
    type CertificateTrustDialogOptions = Electron.CertificateTrustDialogOptions;
    type ClearCodeCachesOptions = Electron.ClearCodeCachesOptions;
    type ClearStorageDataOptions = Electron.ClearStorageDataOptions;
    type ClientRequestConstructorOptions = Electron.ClientRequestConstructorOptions;
    type CloseOpts = Electron.CloseOpts;
    type Config = Electron.Config;
    type ConfigureHostResolverOptions = Electron.ConfigureHostResolverOptions;
    type ConsoleMessageEvent = Electron.ConsoleMessageEvent;
    type ContextMenuEvent = Electron.ContextMenuEvent;
    type ContextMenuParams = Electron.ContextMenuParams;
    type ContinueActivityDetails = Electron.ContinueActivityDetails;
    type CookiesGetFilter = Electron.CookiesGetFilter;
    type CookiesSetDetails = Electron.CookiesSetDetails;
    type CrashReporterStartOptions = Electron.CrashReporterStartOptions;
    type CreateFromBitmapOptions = Electron.CreateFromBitmapOptions;
    type CreateFromBufferOptions = Electron.CreateFromBufferOptions;
    type CreateInterruptedDownloadOptions = Electron.CreateInterruptedDownloadOptions;
    type Data = Electron.Data;
    type DefaultFontFamily = Electron.DefaultFontFamily;
    type Details = Electron.Details;
    type DevicePermissionHandlerHandlerDetails = Electron.DevicePermissionHandlerHandlerDetails;
    type DevtoolsOpenUrlEvent = Electron.DevtoolsOpenUrlEvent;
    type DidChangeThemeColorEvent = Electron.DidChangeThemeColorEvent;
    type DidCreateWindowDetails = Electron.DidCreateWindowDetails;
    type DidFailLoadEvent = Electron.DidFailLoadEvent;
    type DidFrameFinishLoadEvent = Electron.DidFrameFinishLoadEvent;
    type DidFrameNavigateEvent = Electron.DidFrameNavigateEvent;
    type DidNavigateEvent = Electron.DidNavigateEvent;
    type DidNavigateInPageEvent = Electron.DidNavigateInPageEvent;
    type DidRedirectNavigationEvent = Electron.DidRedirectNavigationEvent;
    type DidStartNavigationEvent = Electron.DidStartNavigationEvent;
    type DisplayBalloonOptions = Electron.DisplayBalloonOptions;
    type DisplayMediaRequestHandlerHandlerRequest = Electron.DisplayMediaRequestHandlerHandlerRequest;
    type DownloadURLOptions = Electron.DownloadURLOptions;
    type EnableNetworkEmulationOptions = Electron.EnableNetworkEmulationOptions;
    type FeedURLOptions = Electron.FeedURLOptions;
    type FileIconOptions = Electron.FileIconOptions;
    type FindInPageOptions = Electron.FindInPageOptions;
    type FocusOptions = Electron.FocusOptions;
    type ForkOptions = Electron.ForkOptions;
    type FoundInPageEvent = Electron.FoundInPageEvent;
    type FrameCreatedDetails = Electron.FrameCreatedDetails;
    type FromPartitionOptions = Electron.FromPartitionOptions;
    type FromPathOptions = Electron.FromPathOptions;
    type HandlerDetails = Electron.HandlerDetails;
    type HeadersReceivedResponse = Electron.HeadersReceivedResponse;
    type HeapStatistics = Electron.HeapStatistics;
    type HidDeviceAddedDetails = Electron.HidDeviceAddedDetails;
    type HidDeviceRemovedDetails = Electron.HidDeviceRemovedDetails;
    type HidDeviceRevokedDetails = Electron.HidDeviceRevokedDetails;
    type IgnoreMouseEventsOptions = Electron.IgnoreMouseEventsOptions;
    type ImportCertificateOptions = Electron.ImportCertificateOptions;
    type Info = Electron.Info;
    type Input = Electron.Input;
    type InsertCSSOptions = Electron.InsertCSSOptions;
    type IpcMessageEvent = Electron.IpcMessageEvent;
    type Item = Electron.Item;
    type JumpListSettings = Electron.JumpListSettings;
    type LoadCommitEvent = Electron.LoadCommitEvent;
    type LoadExtensionOptions = Electron.LoadExtensionOptions;
    type LoadFileOptions = Electron.LoadFileOptions;
    type LoadURLOptions = Electron.LoadURLOptions;
    type LoginItemSettings = Electron.LoginItemSettings;
    type LoginItemSettingsOptions = Electron.LoginItemSettingsOptions;
    type MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;
    type MessageBoxOptions = Electron.MessageBoxOptions;
    type MessageBoxReturnValue = Electron.MessageBoxReturnValue;
    type MessageBoxSyncOptions = Electron.MessageBoxSyncOptions;
    type MessageDetails = Electron.MessageDetails;
    type MessageEvent = Electron.MessageEvent;
    type MoveToApplicationsFolderOptions = Electron.MoveToApplicationsFolderOptions;
    type NotificationConstructorOptions = Electron.NotificationConstructorOptions;
    type OnBeforeRedirectListenerDetails = Electron.OnBeforeRedirectListenerDetails;
    type OnBeforeRequestListenerDetails = Electron.OnBeforeRequestListenerDetails;
    type OnBeforeSendHeadersListenerDetails = Electron.OnBeforeSendHeadersListenerDetails;
    type OnCompletedListenerDetails = Electron.OnCompletedListenerDetails;
    type OnErrorOccurredListenerDetails = Electron.OnErrorOccurredListenerDetails;
    type OnHeadersReceivedListenerDetails = Electron.OnHeadersReceivedListenerDetails;
    type OnResponseStartedListenerDetails = Electron.OnResponseStartedListenerDetails;
    type OnSendHeadersListenerDetails = Electron.OnSendHeadersListenerDetails;
    type OpenDevToolsOptions = Electron.OpenDevToolsOptions;
    type OpenDialogOptions = Electron.OpenDialogOptions;
    type OpenDialogReturnValue = Electron.OpenDialogReturnValue;
    type OpenDialogSyncOptions = Electron.OpenDialogSyncOptions;
    type OpenExternalOptions = Electron.OpenExternalOptions;
    type Options = Electron.Options;
    type Opts = Electron.Opts;
    type PageFaviconUpdatedEvent = Electron.PageFaviconUpdatedEvent;
    type PageTitleUpdatedEvent = Electron.PageTitleUpdatedEvent;
    type Parameters = Electron.Parameters;
    type Payment = Electron.Payment;
    type PermissionCheckHandlerHandlerDetails = Electron.PermissionCheckHandlerHandlerDetails;
    type PermissionRequestHandlerHandlerDetails = Electron.PermissionRequestHandlerHandlerDetails;
    type PluginCrashedEvent = Electron.PluginCrashedEvent;
    type PopupOptions = Electron.PopupOptions;
    type PreconnectOptions = Electron.PreconnectOptions;
    type PrintToPDFOptions = Electron.PrintToPDFOptions;
    type Privileges = Electron.Privileges;
    type ProgressBarOptions = Electron.ProgressBarOptions;
    type Provider = Electron.Provider;
    type PurchaseProductOpts = Electron.PurchaseProductOpts;
    type ReadBookmark = Electron.ReadBookmark;
    type RegistrationCompletedDetails = Electron.RegistrationCompletedDetails;
    type RelaunchOptions = Electron.RelaunchOptions;
    type RenderProcessGoneEvent = Electron.RenderProcessGoneEvent;
    type Request = Electron.Request;
    type ResizeOptions = Electron.ResizeOptions;
    type ResolveHostOptions = Electron.ResolveHostOptions;
    type ResourceUsage = Electron.ResourceUsage;
    type Response = Electron.Response;
    type Result = Electron.Result;
    type SaveDialogOptions = Electron.SaveDialogOptions;
    type SaveDialogReturnValue = Electron.SaveDialogReturnValue;
    type SaveDialogSyncOptions = Electron.SaveDialogSyncOptions;
    type SelectHidDeviceDetails = Electron.SelectHidDeviceDetails;
    type SelectUsbDeviceDetails = Electron.SelectUsbDeviceDetails;
    type SerialPortRevokedDetails = Electron.SerialPortRevokedDetails;
    type Settings = Electron.Settings;
    type SourcesOptions = Electron.SourcesOptions;
    type StartLoggingOptions = Electron.StartLoggingOptions;
    type Streams = Electron.Streams;
    type SystemMemoryInfo = Electron.SystemMemoryInfo;
    type TitleBarOverlay = Electron.TitleBarOverlay;
    type TitleOptions = Electron.TitleOptions;
    type ToBitmapOptions = Electron.ToBitmapOptions;
    type ToDataURLOptions = Electron.ToDataURLOptions;
    type ToPNGOptions = Electron.ToPNGOptions;
    type TouchBarButtonConstructorOptions = Electron.TouchBarButtonConstructorOptions;
    type TouchBarColorPickerConstructorOptions = Electron.TouchBarColorPickerConstructorOptions;
    type TouchBarConstructorOptions = Electron.TouchBarConstructorOptions;
    type TouchBarGroupConstructorOptions = Electron.TouchBarGroupConstructorOptions;
    type TouchBarLabelConstructorOptions = Electron.TouchBarLabelConstructorOptions;
    type TouchBarPopoverConstructorOptions = Electron.TouchBarPopoverConstructorOptions;
    type TouchBarScrubberConstructorOptions = Electron.TouchBarScrubberConstructorOptions;
    type TouchBarSegmentedControlConstructorOptions = Electron.TouchBarSegmentedControlConstructorOptions;
    type TouchBarSliderConstructorOptions = Electron.TouchBarSliderConstructorOptions;
    type TouchBarSpacerConstructorOptions = Electron.TouchBarSpacerConstructorOptions;
    type TraceBufferUsageReturnValue = Electron.TraceBufferUsageReturnValue;
    type UdpPortRange = Electron.UdpPortRange;
    type UpdateTargetUrlEvent = Electron.UpdateTargetUrlEvent;
    type UploadProgress = Electron.UploadProgress;
    type UsbDeviceRevokedDetails = Electron.UsbDeviceRevokedDetails;
    type USBProtectedClassesHandlerHandlerDetails = Electron.USBProtectedClassesHandlerHandlerDetails;
    type VisibleOnAllWorkspacesOptions = Electron.VisibleOnAllWorkspacesOptions;
    type WebContentsAudioStateChangedEventParams = Electron.WebContentsAudioStateChangedEventParams;
    type WebContentsDidRedirectNavigationEventParams = Electron.WebContentsDidRedirectNavigationEventParams;
    type WebContentsDidStartNavigationEventParams = Electron.WebContentsDidStartNavigationEventParams;
    type WebContentsPrintOptions = Electron.WebContentsPrintOptions;
    type WebContentsWillFrameNavigateEventParams = Electron.WebContentsWillFrameNavigateEventParams;
    type WebContentsWillNavigateEventParams = Electron.WebContentsWillNavigateEventParams;
    type WebContentsWillRedirectEventParams = Electron.WebContentsWillRedirectEventParams;
    type WebRTCUDPPortRange = Electron.WebRTCUDPPortRange;
    type WebviewTagPrintOptions = Electron.WebviewTagPrintOptions;
    type WillFrameNavigateEvent = Electron.WillFrameNavigateEvent;
    type WillNavigateEvent = Electron.WillNavigateEvent;
    type WillResizeDetails = Electron.WillResizeDetails;
    type EditFlags = Electron.EditFlags;
    type Env = Electron.Env;
    type FoundInPageResult = Electron.FoundInPageResult;
    type LaunchItems = Electron.LaunchItems;
    type Margins = Electron.Margins;
    type MediaFlags = Electron.MediaFlags;
    type PageRanges = Electron.PageRanges;
    type Params = Electron.Params;
    type Video = Electron.Video;
    type BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;
    type BluetoothDevice = Electron.BluetoothDevice;
    type Certificate = Electron.Certificate;
    type CertificatePrincipal = Electron.CertificatePrincipal;
    type Cookie = Electron.Cookie;
    type CPUUsage = Electron.CPUUsage;
    type CrashReport = Electron.CrashReport;
    type CustomScheme = Electron.CustomScheme;
    type DesktopCapturerSource = Electron.DesktopCapturerSource;
    type Display = Electron.Display;
    type Extension = Electron.Extension;
    type ExtensionInfo = Electron.ExtensionInfo;
    type FileFilter = Electron.FileFilter;
    type FilePathWithHeaders = Electron.FilePathWithHeaders;
    type GPUFeatureStatus = Electron.GPUFeatureStatus;
    type HIDDevice = Electron.HIDDevice;
    type InputEvent = Electron.InputEvent;
    type IOCounters = Electron.IOCounters;
    type IpcMainEvent = Electron.IpcMainEvent;
    type IpcMainInvokeEvent = Electron.IpcMainInvokeEvent;
    type IpcRendererEvent = Electron.IpcRendererEvent;
    type JumpListCategory = Electron.JumpListCategory;
    type JumpListItem = Electron.JumpListItem;
    type KeyboardEvent = Electron.KeyboardEvent;
    type KeyboardInputEvent = Electron.KeyboardInputEvent;
    type MemoryInfo = Electron.MemoryInfo;
    type MemoryUsageDetails = Electron.MemoryUsageDetails;
    type MimeTypedBuffer = Electron.MimeTypedBuffer;
    type MouseInputEvent = Electron.MouseInputEvent;
    type MouseWheelInputEvent = Electron.MouseWheelInputEvent;
    type NotificationAction = Electron.NotificationAction;
    type NotificationResponse = Electron.NotificationResponse;
    type PaymentDiscount = Electron.PaymentDiscount;
    type Point = Electron.Point;
    type PostBody = Electron.PostBody;
    type PrinterInfo = Electron.PrinterInfo;
    type ProcessMemoryInfo = Electron.ProcessMemoryInfo;
    type ProcessMetric = Electron.ProcessMetric;
    type Product = Electron.Product;
    type ProductDiscount = Electron.ProductDiscount;
    type ProductSubscriptionPeriod = Electron.ProductSubscriptionPeriod;
    type ProtocolRequest = Electron.ProtocolRequest;
    type ProtocolResponse = Electron.ProtocolResponse;
    type ProtocolResponseUploadData = Electron.ProtocolResponseUploadData;
    type ProxyConfig = Electron.ProxyConfig;
    type Rectangle = Electron.Rectangle;
    type Referrer = Electron.Referrer;
    type RenderProcessGoneDetails = Electron.RenderProcessGoneDetails;
    type ResolvedEndpoint = Electron.ResolvedEndpoint;
    type ResolvedHost = Electron.ResolvedHost;
    type ScrubberItem = Electron.ScrubberItem;
    type SegmentedControlSegment = Electron.SegmentedControlSegment;
    type SerialPort = Electron.SerialPort;
    type ServiceWorkerInfo = Electron.ServiceWorkerInfo;
    type SharedWorkerInfo = Electron.SharedWorkerInfo;
    type SharingItem = Electron.SharingItem;
    type ShortcutDetails = Electron.ShortcutDetails;
    type Size = Electron.Size;
    type Task = Electron.Task;
    type ThumbarButton = Electron.ThumbarButton;
    type TraceCategoriesAndOptions = Electron.TraceCategoriesAndOptions;
    type TraceConfig = Electron.TraceConfig;
    type Transaction = Electron.Transaction;
    type UploadData = Electron.UploadData;
    type UploadFile = Electron.UploadFile;
    type UploadRawData = Electron.UploadRawData;
    type USBDevice = Electron.USBDevice;
    type UserDefaultTypes = Electron.UserDefaultTypes;
    type WebPreferences = Electron.WebPreferences;
    type WebRequestFilter = Electron.WebRequestFilter;
    type WebSource = Electron.WebSource;
  }

  namespace Renderer {
    type Event<Params extends object = {}> = Electron.Event<Params>;
    const contextBridge: ContextBridge;
    type ContextBridge = Electron.ContextBridge;
    const ipcRenderer: IpcRenderer;
    type IpcRenderer = Electron.IpcRenderer;
    const webFrame: WebFrame;
    type WebFrame = Electron.WebFrame;
    const webUtils: WebUtils;
    type WebUtils = Electron.WebUtils;
    type WebviewTag = Electron.WebviewTag;
    type AboutPanelOptionsOptions = Electron.AboutPanelOptionsOptions;
    type AddRepresentationOptions = Electron.AddRepresentationOptions;
    type AdjustSelectionOptions = Electron.AdjustSelectionOptions;
    type AnimationSettings = Electron.AnimationSettings;
    type AppDetailsOptions = Electron.AppDetailsOptions;
    type ApplicationInfoForProtocolReturnValue = Electron.ApplicationInfoForProtocolReturnValue;
    type AuthenticationResponseDetails = Electron.AuthenticationResponseDetails;
    type AuthInfo = Electron.AuthInfo;
    type AutoResizeOptions = Electron.AutoResizeOptions;
    type BeforeSendResponse = Electron.BeforeSendResponse;
    type BitmapOptions = Electron.BitmapOptions;
    type BlinkMemoryInfo = Electron.BlinkMemoryInfo;
    type BluetoothPairingHandlerHandlerDetails = Electron.BluetoothPairingHandlerHandlerDetails;
    type BrowserViewConstructorOptions = Electron.BrowserViewConstructorOptions;
    type CallbackResponse = Electron.CallbackResponse;
    type CertificateTrustDialogOptions = Electron.CertificateTrustDialogOptions;
    type ClearCodeCachesOptions = Electron.ClearCodeCachesOptions;
    type ClearStorageDataOptions = Electron.ClearStorageDataOptions;
    type ClientRequestConstructorOptions = Electron.ClientRequestConstructorOptions;
    type CloseOpts = Electron.CloseOpts;
    type Config = Electron.Config;
    type ConfigureHostResolverOptions = Electron.ConfigureHostResolverOptions;
    type ConsoleMessageEvent = Electron.ConsoleMessageEvent;
    type ContextMenuEvent = Electron.ContextMenuEvent;
    type ContextMenuParams = Electron.ContextMenuParams;
    type ContinueActivityDetails = Electron.ContinueActivityDetails;
    type CookiesGetFilter = Electron.CookiesGetFilter;
    type CookiesSetDetails = Electron.CookiesSetDetails;
    type CrashReporterStartOptions = Electron.CrashReporterStartOptions;
    type CreateFromBitmapOptions = Electron.CreateFromBitmapOptions;
    type CreateFromBufferOptions = Electron.CreateFromBufferOptions;
    type CreateInterruptedDownloadOptions = Electron.CreateInterruptedDownloadOptions;
    type Data = Electron.Data;
    type DefaultFontFamily = Electron.DefaultFontFamily;
    type Details = Electron.Details;
    type DevicePermissionHandlerHandlerDetails = Electron.DevicePermissionHandlerHandlerDetails;
    type DevtoolsOpenUrlEvent = Electron.DevtoolsOpenUrlEvent;
    type DidChangeThemeColorEvent = Electron.DidChangeThemeColorEvent;
    type DidCreateWindowDetails = Electron.DidCreateWindowDetails;
    type DidFailLoadEvent = Electron.DidFailLoadEvent;
    type DidFrameFinishLoadEvent = Electron.DidFrameFinishLoadEvent;
    type DidFrameNavigateEvent = Electron.DidFrameNavigateEvent;
    type DidNavigateEvent = Electron.DidNavigateEvent;
    type DidNavigateInPageEvent = Electron.DidNavigateInPageEvent;
    type DidRedirectNavigationEvent = Electron.DidRedirectNavigationEvent;
    type DidStartNavigationEvent = Electron.DidStartNavigationEvent;
    type DisplayBalloonOptions = Electron.DisplayBalloonOptions;
    type DisplayMediaRequestHandlerHandlerRequest = Electron.DisplayMediaRequestHandlerHandlerRequest;
    type DownloadURLOptions = Electron.DownloadURLOptions;
    type EnableNetworkEmulationOptions = Electron.EnableNetworkEmulationOptions;
    type FeedURLOptions = Electron.FeedURLOptions;
    type FileIconOptions = Electron.FileIconOptions;
    type FindInPageOptions = Electron.FindInPageOptions;
    type FocusOptions = Electron.FocusOptions;
    type ForkOptions = Electron.ForkOptions;
    type FoundInPageEvent = Electron.FoundInPageEvent;
    type FrameCreatedDetails = Electron.FrameCreatedDetails;
    type FromPartitionOptions = Electron.FromPartitionOptions;
    type FromPathOptions = Electron.FromPathOptions;
    type HandlerDetails = Electron.HandlerDetails;
    type HeadersReceivedResponse = Electron.HeadersReceivedResponse;
    type HeapStatistics = Electron.HeapStatistics;
    type HidDeviceAddedDetails = Electron.HidDeviceAddedDetails;
    type HidDeviceRemovedDetails = Electron.HidDeviceRemovedDetails;
    type HidDeviceRevokedDetails = Electron.HidDeviceRevokedDetails;
    type IgnoreMouseEventsOptions = Electron.IgnoreMouseEventsOptions;
    type ImportCertificateOptions = Electron.ImportCertificateOptions;
    type Info = Electron.Info;
    type Input = Electron.Input;
    type InsertCSSOptions = Electron.InsertCSSOptions;
    type IpcMessageEvent = Electron.IpcMessageEvent;
    type Item = Electron.Item;
    type JumpListSettings = Electron.JumpListSettings;
    type LoadCommitEvent = Electron.LoadCommitEvent;
    type LoadExtensionOptions = Electron.LoadExtensionOptions;
    type LoadFileOptions = Electron.LoadFileOptions;
    type LoadURLOptions = Electron.LoadURLOptions;
    type LoginItemSettings = Electron.LoginItemSettings;
    type LoginItemSettingsOptions = Electron.LoginItemSettingsOptions;
    type MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;
    type MessageBoxOptions = Electron.MessageBoxOptions;
    type MessageBoxReturnValue = Electron.MessageBoxReturnValue;
    type MessageBoxSyncOptions = Electron.MessageBoxSyncOptions;
    type MessageDetails = Electron.MessageDetails;
    type MessageEvent = Electron.MessageEvent;
    type MoveToApplicationsFolderOptions = Electron.MoveToApplicationsFolderOptions;
    type NotificationConstructorOptions = Electron.NotificationConstructorOptions;
    type OnBeforeRedirectListenerDetails = Electron.OnBeforeRedirectListenerDetails;
    type OnBeforeRequestListenerDetails = Electron.OnBeforeRequestListenerDetails;
    type OnBeforeSendHeadersListenerDetails = Electron.OnBeforeSendHeadersListenerDetails;
    type OnCompletedListenerDetails = Electron.OnCompletedListenerDetails;
    type OnErrorOccurredListenerDetails = Electron.OnErrorOccurredListenerDetails;
    type OnHeadersReceivedListenerDetails = Electron.OnHeadersReceivedListenerDetails;
    type OnResponseStartedListenerDetails = Electron.OnResponseStartedListenerDetails;
    type OnSendHeadersListenerDetails = Electron.OnSendHeadersListenerDetails;
    type OpenDevToolsOptions = Electron.OpenDevToolsOptions;
    type OpenDialogOptions = Electron.OpenDialogOptions;
    type OpenDialogReturnValue = Electron.OpenDialogReturnValue;
    type OpenDialogSyncOptions = Electron.OpenDialogSyncOptions;
    type OpenExternalOptions = Electron.OpenExternalOptions;
    type Options = Electron.Options;
    type Opts = Electron.Opts;
    type PageFaviconUpdatedEvent = Electron.PageFaviconUpdatedEvent;
    type PageTitleUpdatedEvent = Electron.PageTitleUpdatedEvent;
    type Parameters = Electron.Parameters;
    type Payment = Electron.Payment;
    type PermissionCheckHandlerHandlerDetails = Electron.PermissionCheckHandlerHandlerDetails;
    type PermissionRequestHandlerHandlerDetails = Electron.PermissionRequestHandlerHandlerDetails;
    type PluginCrashedEvent = Electron.PluginCrashedEvent;
    type PopupOptions = Electron.PopupOptions;
    type PreconnectOptions = Electron.PreconnectOptions;
    type PrintToPDFOptions = Electron.PrintToPDFOptions;
    type Privileges = Electron.Privileges;
    type ProgressBarOptions = Electron.ProgressBarOptions;
    type Provider = Electron.Provider;
    type PurchaseProductOpts = Electron.PurchaseProductOpts;
    type ReadBookmark = Electron.ReadBookmark;
    type RegistrationCompletedDetails = Electron.RegistrationCompletedDetails;
    type RelaunchOptions = Electron.RelaunchOptions;
    type RenderProcessGoneEvent = Electron.RenderProcessGoneEvent;
    type Request = Electron.Request;
    type ResizeOptions = Electron.ResizeOptions;
    type ResolveHostOptions = Electron.ResolveHostOptions;
    type ResourceUsage = Electron.ResourceUsage;
    type Response = Electron.Response;
    type Result = Electron.Result;
    type SaveDialogOptions = Electron.SaveDialogOptions;
    type SaveDialogReturnValue = Electron.SaveDialogReturnValue;
    type SaveDialogSyncOptions = Electron.SaveDialogSyncOptions;
    type SelectHidDeviceDetails = Electron.SelectHidDeviceDetails;
    type SelectUsbDeviceDetails = Electron.SelectUsbDeviceDetails;
    type SerialPortRevokedDetails = Electron.SerialPortRevokedDetails;
    type Settings = Electron.Settings;
    type SourcesOptions = Electron.SourcesOptions;
    type StartLoggingOptions = Electron.StartLoggingOptions;
    type Streams = Electron.Streams;
    type SystemMemoryInfo = Electron.SystemMemoryInfo;
    type TitleBarOverlay = Electron.TitleBarOverlay;
    type TitleOptions = Electron.TitleOptions;
    type ToBitmapOptions = Electron.ToBitmapOptions;
    type ToDataURLOptions = Electron.ToDataURLOptions;
    type ToPNGOptions = Electron.ToPNGOptions;
    type TouchBarButtonConstructorOptions = Electron.TouchBarButtonConstructorOptions;
    type TouchBarColorPickerConstructorOptions = Electron.TouchBarColorPickerConstructorOptions;
    type TouchBarConstructorOptions = Electron.TouchBarConstructorOptions;
    type TouchBarGroupConstructorOptions = Electron.TouchBarGroupConstructorOptions;
    type TouchBarLabelConstructorOptions = Electron.TouchBarLabelConstructorOptions;
    type TouchBarPopoverConstructorOptions = Electron.TouchBarPopoverConstructorOptions;
    type TouchBarScrubberConstructorOptions = Electron.TouchBarScrubberConstructorOptions;
    type TouchBarSegmentedControlConstructorOptions = Electron.TouchBarSegmentedControlConstructorOptions;
    type TouchBarSliderConstructorOptions = Electron.TouchBarSliderConstructorOptions;
    type TouchBarSpacerConstructorOptions = Electron.TouchBarSpacerConstructorOptions;
    type TraceBufferUsageReturnValue = Electron.TraceBufferUsageReturnValue;
    type UdpPortRange = Electron.UdpPortRange;
    type UpdateTargetUrlEvent = Electron.UpdateTargetUrlEvent;
    type UploadProgress = Electron.UploadProgress;
    type UsbDeviceRevokedDetails = Electron.UsbDeviceRevokedDetails;
    type USBProtectedClassesHandlerHandlerDetails = Electron.USBProtectedClassesHandlerHandlerDetails;
    type VisibleOnAllWorkspacesOptions = Electron.VisibleOnAllWorkspacesOptions;
    type WebContentsAudioStateChangedEventParams = Electron.WebContentsAudioStateChangedEventParams;
    type WebContentsDidRedirectNavigationEventParams = Electron.WebContentsDidRedirectNavigationEventParams;
    type WebContentsDidStartNavigationEventParams = Electron.WebContentsDidStartNavigationEventParams;
    type WebContentsPrintOptions = Electron.WebContentsPrintOptions;
    type WebContentsWillFrameNavigateEventParams = Electron.WebContentsWillFrameNavigateEventParams;
    type WebContentsWillNavigateEventParams = Electron.WebContentsWillNavigateEventParams;
    type WebContentsWillRedirectEventParams = Electron.WebContentsWillRedirectEventParams;
    type WebRTCUDPPortRange = Electron.WebRTCUDPPortRange;
    type WebviewTagPrintOptions = Electron.WebviewTagPrintOptions;
    type WillFrameNavigateEvent = Electron.WillFrameNavigateEvent;
    type WillNavigateEvent = Electron.WillNavigateEvent;
    type WillResizeDetails = Electron.WillResizeDetails;
    type EditFlags = Electron.EditFlags;
    type Env = Electron.Env;
    type FoundInPageResult = Electron.FoundInPageResult;
    type LaunchItems = Electron.LaunchItems;
    type Margins = Electron.Margins;
    type MediaFlags = Electron.MediaFlags;
    type PageRanges = Electron.PageRanges;
    type Params = Electron.Params;
    type Video = Electron.Video;
    type BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;
    type BluetoothDevice = Electron.BluetoothDevice;
    type Certificate = Electron.Certificate;
    type CertificatePrincipal = Electron.CertificatePrincipal;
    type Cookie = Electron.Cookie;
    type CPUUsage = Electron.CPUUsage;
    type CrashReport = Electron.CrashReport;
    type CustomScheme = Electron.CustomScheme;
    type DesktopCapturerSource = Electron.DesktopCapturerSource;
    type Display = Electron.Display;
    type Extension = Electron.Extension;
    type ExtensionInfo = Electron.ExtensionInfo;
    type FileFilter = Electron.FileFilter;
    type FilePathWithHeaders = Electron.FilePathWithHeaders;
    type GPUFeatureStatus = Electron.GPUFeatureStatus;
    type HIDDevice = Electron.HIDDevice;
    type InputEvent = Electron.InputEvent;
    type IOCounters = Electron.IOCounters;
    type IpcMainEvent = Electron.IpcMainEvent;
    type IpcMainInvokeEvent = Electron.IpcMainInvokeEvent;
    type IpcRendererEvent = Electron.IpcRendererEvent;
    type JumpListCategory = Electron.JumpListCategory;
    type JumpListItem = Electron.JumpListItem;
    type KeyboardEvent = Electron.KeyboardEvent;
    type KeyboardInputEvent = Electron.KeyboardInputEvent;
    type MemoryInfo = Electron.MemoryInfo;
    type MemoryUsageDetails = Electron.MemoryUsageDetails;
    type MimeTypedBuffer = Electron.MimeTypedBuffer;
    type MouseInputEvent = Electron.MouseInputEvent;
    type MouseWheelInputEvent = Electron.MouseWheelInputEvent;
    type NotificationAction = Electron.NotificationAction;
    type NotificationResponse = Electron.NotificationResponse;
    type PaymentDiscount = Electron.PaymentDiscount;
    type Point = Electron.Point;
    type PostBody = Electron.PostBody;
    type PrinterInfo = Electron.PrinterInfo;
    type ProcessMemoryInfo = Electron.ProcessMemoryInfo;
    type ProcessMetric = Electron.ProcessMetric;
    type Product = Electron.Product;
    type ProductDiscount = Electron.ProductDiscount;
    type ProductSubscriptionPeriod = Electron.ProductSubscriptionPeriod;
    type ProtocolRequest = Electron.ProtocolRequest;
    type ProtocolResponse = Electron.ProtocolResponse;
    type ProtocolResponseUploadData = Electron.ProtocolResponseUploadData;
    type ProxyConfig = Electron.ProxyConfig;
    type Rectangle = Electron.Rectangle;
    type Referrer = Electron.Referrer;
    type RenderProcessGoneDetails = Electron.RenderProcessGoneDetails;
    type ResolvedEndpoint = Electron.ResolvedEndpoint;
    type ResolvedHost = Electron.ResolvedHost;
    type ScrubberItem = Electron.ScrubberItem;
    type SegmentedControlSegment = Electron.SegmentedControlSegment;
    type SerialPort = Electron.SerialPort;
    type ServiceWorkerInfo = Electron.ServiceWorkerInfo;
    type SharedWorkerInfo = Electron.SharedWorkerInfo;
    type SharingItem = Electron.SharingItem;
    type ShortcutDetails = Electron.ShortcutDetails;
    type Size = Electron.Size;
    type Task = Electron.Task;
    type ThumbarButton = Electron.ThumbarButton;
    type TraceCategoriesAndOptions = Electron.TraceCategoriesAndOptions;
    type TraceConfig = Electron.TraceConfig;
    type Transaction = Electron.Transaction;
    type UploadData = Electron.UploadData;
    type UploadFile = Electron.UploadFile;
    type UploadRawData = Electron.UploadRawData;
    type USBDevice = Electron.USBDevice;
    type UserDefaultTypes = Electron.UserDefaultTypes;
    type WebPreferences = Electron.WebPreferences;
    type WebRequestFilter = Electron.WebRequestFilter;
    type WebSource = Electron.WebSource;
  }

  namespace Utility {
    type Event<Params extends object = {}> = Electron.Event<Params>;
    type ClientRequest = Electron.ClientRequest;
    type IncomingMessage = Electron.IncomingMessage;
    const net: Net;
    type Net = Electron.Net;
    type AboutPanelOptionsOptions = Electron.AboutPanelOptionsOptions;
    type AddRepresentationOptions = Electron.AddRepresentationOptions;
    type AdjustSelectionOptions = Electron.AdjustSelectionOptions;
    type AnimationSettings = Electron.AnimationSettings;
    type AppDetailsOptions = Electron.AppDetailsOptions;
    type ApplicationInfoForProtocolReturnValue = Electron.ApplicationInfoForProtocolReturnValue;
    type AuthenticationResponseDetails = Electron.AuthenticationResponseDetails;
    type AuthInfo = Electron.AuthInfo;
    type AutoResizeOptions = Electron.AutoResizeOptions;
    type BeforeSendResponse = Electron.BeforeSendResponse;
    type BitmapOptions = Electron.BitmapOptions;
    type BlinkMemoryInfo = Electron.BlinkMemoryInfo;
    type BluetoothPairingHandlerHandlerDetails = Electron.BluetoothPairingHandlerHandlerDetails;
    type BrowserViewConstructorOptions = Electron.BrowserViewConstructorOptions;
    type CallbackResponse = Electron.CallbackResponse;
    type CertificateTrustDialogOptions = Electron.CertificateTrustDialogOptions;
    type ClearCodeCachesOptions = Electron.ClearCodeCachesOptions;
    type ClearStorageDataOptions = Electron.ClearStorageDataOptions;
    type ClientRequestConstructorOptions = Electron.ClientRequestConstructorOptions;
    type CloseOpts = Electron.CloseOpts;
    type Config = Electron.Config;
    type ConfigureHostResolverOptions = Electron.ConfigureHostResolverOptions;
    type ConsoleMessageEvent = Electron.ConsoleMessageEvent;
    type ContextMenuEvent = Electron.ContextMenuEvent;
    type ContextMenuParams = Electron.ContextMenuParams;
    type ContinueActivityDetails = Electron.ContinueActivityDetails;
    type CookiesGetFilter = Electron.CookiesGetFilter;
    type CookiesSetDetails = Electron.CookiesSetDetails;
    type CrashReporterStartOptions = Electron.CrashReporterStartOptions;
    type CreateFromBitmapOptions = Electron.CreateFromBitmapOptions;
    type CreateFromBufferOptions = Electron.CreateFromBufferOptions;
    type CreateInterruptedDownloadOptions = Electron.CreateInterruptedDownloadOptions;
    type Data = Electron.Data;
    type DefaultFontFamily = Electron.DefaultFontFamily;
    type Details = Electron.Details;
    type DevicePermissionHandlerHandlerDetails = Electron.DevicePermissionHandlerHandlerDetails;
    type DevtoolsOpenUrlEvent = Electron.DevtoolsOpenUrlEvent;
    type DidChangeThemeColorEvent = Electron.DidChangeThemeColorEvent;
    type DidCreateWindowDetails = Electron.DidCreateWindowDetails;
    type DidFailLoadEvent = Electron.DidFailLoadEvent;
    type DidFrameFinishLoadEvent = Electron.DidFrameFinishLoadEvent;
    type DidFrameNavigateEvent = Electron.DidFrameNavigateEvent;
    type DidNavigateEvent = Electron.DidNavigateEvent;
    type DidNavigateInPageEvent = Electron.DidNavigateInPageEvent;
    type DidRedirectNavigationEvent = Electron.DidRedirectNavigationEvent;
    type DidStartNavigationEvent = Electron.DidStartNavigationEvent;
    type DisplayBalloonOptions = Electron.DisplayBalloonOptions;
    type DisplayMediaRequestHandlerHandlerRequest = Electron.DisplayMediaRequestHandlerHandlerRequest;
    type DownloadURLOptions = Electron.DownloadURLOptions;
    type EnableNetworkEmulationOptions = Electron.EnableNetworkEmulationOptions;
    type FeedURLOptions = Electron.FeedURLOptions;
    type FileIconOptions = Electron.FileIconOptions;
    type FindInPageOptions = Electron.FindInPageOptions;
    type FocusOptions = Electron.FocusOptions;
    type ForkOptions = Electron.ForkOptions;
    type FoundInPageEvent = Electron.FoundInPageEvent;
    type FrameCreatedDetails = Electron.FrameCreatedDetails;
    type FromPartitionOptions = Electron.FromPartitionOptions;
    type FromPathOptions = Electron.FromPathOptions;
    type HandlerDetails = Electron.HandlerDetails;
    type HeadersReceivedResponse = Electron.HeadersReceivedResponse;
    type HeapStatistics = Electron.HeapStatistics;
    type HidDeviceAddedDetails = Electron.HidDeviceAddedDetails;
    type HidDeviceRemovedDetails = Electron.HidDeviceRemovedDetails;
    type HidDeviceRevokedDetails = Electron.HidDeviceRevokedDetails;
    type IgnoreMouseEventsOptions = Electron.IgnoreMouseEventsOptions;
    type ImportCertificateOptions = Electron.ImportCertificateOptions;
    type Info = Electron.Info;
    type Input = Electron.Input;
    type InsertCSSOptions = Electron.InsertCSSOptions;
    type IpcMessageEvent = Electron.IpcMessageEvent;
    type Item = Electron.Item;
    type JumpListSettings = Electron.JumpListSettings;
    type LoadCommitEvent = Electron.LoadCommitEvent;
    type LoadExtensionOptions = Electron.LoadExtensionOptions;
    type LoadFileOptions = Electron.LoadFileOptions;
    type LoadURLOptions = Electron.LoadURLOptions;
    type LoginItemSettings = Electron.LoginItemSettings;
    type LoginItemSettingsOptions = Electron.LoginItemSettingsOptions;
    type MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;
    type MessageBoxOptions = Electron.MessageBoxOptions;
    type MessageBoxReturnValue = Electron.MessageBoxReturnValue;
    type MessageBoxSyncOptions = Electron.MessageBoxSyncOptions;
    type MessageDetails = Electron.MessageDetails;
    type MessageEvent = Electron.MessageEvent;
    type MoveToApplicationsFolderOptions = Electron.MoveToApplicationsFolderOptions;
    type NotificationConstructorOptions = Electron.NotificationConstructorOptions;
    type OnBeforeRedirectListenerDetails = Electron.OnBeforeRedirectListenerDetails;
    type OnBeforeRequestListenerDetails = Electron.OnBeforeRequestListenerDetails;
    type OnBeforeSendHeadersListenerDetails = Electron.OnBeforeSendHeadersListenerDetails;
    type OnCompletedListenerDetails = Electron.OnCompletedListenerDetails;
    type OnErrorOccurredListenerDetails = Electron.OnErrorOccurredListenerDetails;
    type OnHeadersReceivedListenerDetails = Electron.OnHeadersReceivedListenerDetails;
    type OnResponseStartedListenerDetails = Electron.OnResponseStartedListenerDetails;
    type OnSendHeadersListenerDetails = Electron.OnSendHeadersListenerDetails;
    type OpenDevToolsOptions = Electron.OpenDevToolsOptions;
    type OpenDialogOptions = Electron.OpenDialogOptions;
    type OpenDialogReturnValue = Electron.OpenDialogReturnValue;
    type OpenDialogSyncOptions = Electron.OpenDialogSyncOptions;
    type OpenExternalOptions = Electron.OpenExternalOptions;
    type Options = Electron.Options;
    type Opts = Electron.Opts;
    type PageFaviconUpdatedEvent = Electron.PageFaviconUpdatedEvent;
    type PageTitleUpdatedEvent = Electron.PageTitleUpdatedEvent;
    type Parameters = Electron.Parameters;
    type Payment = Electron.Payment;
    type PermissionCheckHandlerHandlerDetails = Electron.PermissionCheckHandlerHandlerDetails;
    type PermissionRequestHandlerHandlerDetails = Electron.PermissionRequestHandlerHandlerDetails;
    type PluginCrashedEvent = Electron.PluginCrashedEvent;
    type PopupOptions = Electron.PopupOptions;
    type PreconnectOptions = Electron.PreconnectOptions;
    type PrintToPDFOptions = Electron.PrintToPDFOptions;
    type Privileges = Electron.Privileges;
    type ProgressBarOptions = Electron.ProgressBarOptions;
    type Provider = Electron.Provider;
    type PurchaseProductOpts = Electron.PurchaseProductOpts;
    type ReadBookmark = Electron.ReadBookmark;
    type RegistrationCompletedDetails = Electron.RegistrationCompletedDetails;
    type RelaunchOptions = Electron.RelaunchOptions;
    type RenderProcessGoneEvent = Electron.RenderProcessGoneEvent;
    type Request = Electron.Request;
    type ResizeOptions = Electron.ResizeOptions;
    type ResolveHostOptions = Electron.ResolveHostOptions;
    type ResourceUsage = Electron.ResourceUsage;
    type Response = Electron.Response;
    type Result = Electron.Result;
    type SaveDialogOptions = Electron.SaveDialogOptions;
    type SaveDialogReturnValue = Electron.SaveDialogReturnValue;
    type SaveDialogSyncOptions = Electron.SaveDialogSyncOptions;
    type SelectHidDeviceDetails = Electron.SelectHidDeviceDetails;
    type SelectUsbDeviceDetails = Electron.SelectUsbDeviceDetails;
    type SerialPortRevokedDetails = Electron.SerialPortRevokedDetails;
    type Settings = Electron.Settings;
    type SourcesOptions = Electron.SourcesOptions;
    type StartLoggingOptions = Electron.StartLoggingOptions;
    type Streams = Electron.Streams;
    type SystemMemoryInfo = Electron.SystemMemoryInfo;
    type TitleBarOverlay = Electron.TitleBarOverlay;
    type TitleOptions = Electron.TitleOptions;
    type ToBitmapOptions = Electron.ToBitmapOptions;
    type ToDataURLOptions = Electron.ToDataURLOptions;
    type ToPNGOptions = Electron.ToPNGOptions;
    type TouchBarButtonConstructorOptions = Electron.TouchBarButtonConstructorOptions;
    type TouchBarColorPickerConstructorOptions = Electron.TouchBarColorPickerConstructorOptions;
    type TouchBarConstructorOptions = Electron.TouchBarConstructorOptions;
    type TouchBarGroupConstructorOptions = Electron.TouchBarGroupConstructorOptions;
    type TouchBarLabelConstructorOptions = Electron.TouchBarLabelConstructorOptions;
    type TouchBarPopoverConstructorOptions = Electron.TouchBarPopoverConstructorOptions;
    type TouchBarScrubberConstructorOptions = Electron.TouchBarScrubberConstructorOptions;
    type TouchBarSegmentedControlConstructorOptions = Electron.TouchBarSegmentedControlConstructorOptions;
    type TouchBarSliderConstructorOptions = Electron.TouchBarSliderConstructorOptions;
    type TouchBarSpacerConstructorOptions = Electron.TouchBarSpacerConstructorOptions;
    type TraceBufferUsageReturnValue = Electron.TraceBufferUsageReturnValue;
    type UdpPortRange = Electron.UdpPortRange;
    type UpdateTargetUrlEvent = Electron.UpdateTargetUrlEvent;
    type UploadProgress = Electron.UploadProgress;
    type UsbDeviceRevokedDetails = Electron.UsbDeviceRevokedDetails;
    type USBProtectedClassesHandlerHandlerDetails = Electron.USBProtectedClassesHandlerHandlerDetails;
    type VisibleOnAllWorkspacesOptions = Electron.VisibleOnAllWorkspacesOptions;
    type WebContentsAudioStateChangedEventParams = Electron.WebContentsAudioStateChangedEventParams;
    type WebContentsDidRedirectNavigationEventParams = Electron.WebContentsDidRedirectNavigationEventParams;
    type WebContentsDidStartNavigationEventParams = Electron.WebContentsDidStartNavigationEventParams;
    type WebContentsPrintOptions = Electron.WebContentsPrintOptions;
    type WebContentsWillFrameNavigateEventParams = Electron.WebContentsWillFrameNavigateEventParams;
    type WebContentsWillNavigateEventParams = Electron.WebContentsWillNavigateEventParams;
    type WebContentsWillRedirectEventParams = Electron.WebContentsWillRedirectEventParams;
    type WebRTCUDPPortRange = Electron.WebRTCUDPPortRange;
    type WebviewTagPrintOptions = Electron.WebviewTagPrintOptions;
    type WillFrameNavigateEvent = Electron.WillFrameNavigateEvent;
    type WillNavigateEvent = Electron.WillNavigateEvent;
    type WillResizeDetails = Electron.WillResizeDetails;
    type EditFlags = Electron.EditFlags;
    type Env = Electron.Env;
    type FoundInPageResult = Electron.FoundInPageResult;
    type LaunchItems = Electron.LaunchItems;
    type Margins = Electron.Margins;
    type MediaFlags = Electron.MediaFlags;
    type PageRanges = Electron.PageRanges;
    type Params = Electron.Params;
    type Video = Electron.Video;
    type BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;
    type BluetoothDevice = Electron.BluetoothDevice;
    type Certificate = Electron.Certificate;
    type CertificatePrincipal = Electron.CertificatePrincipal;
    type Cookie = Electron.Cookie;
    type CPUUsage = Electron.CPUUsage;
    type CrashReport = Electron.CrashReport;
    type CustomScheme = Electron.CustomScheme;
    type DesktopCapturerSource = Electron.DesktopCapturerSource;
    type Display = Electron.Display;
    type Extension = Electron.Extension;
    type ExtensionInfo = Electron.ExtensionInfo;
    type FileFilter = Electron.FileFilter;
    type FilePathWithHeaders = Electron.FilePathWithHeaders;
    type GPUFeatureStatus = Electron.GPUFeatureStatus;
    type HIDDevice = Electron.HIDDevice;
    type InputEvent = Electron.InputEvent;
    type IOCounters = Electron.IOCounters;
    type IpcMainEvent = Electron.IpcMainEvent;
    type IpcMainInvokeEvent = Electron.IpcMainInvokeEvent;
    type IpcRendererEvent = Electron.IpcRendererEvent;
    type JumpListCategory = Electron.JumpListCategory;
    type JumpListItem = Electron.JumpListItem;
    type KeyboardEvent = Electron.KeyboardEvent;
    type KeyboardInputEvent = Electron.KeyboardInputEvent;
    type MemoryInfo = Electron.MemoryInfo;
    type MemoryUsageDetails = Electron.MemoryUsageDetails;
    type MimeTypedBuffer = Electron.MimeTypedBuffer;
    type MouseInputEvent = Electron.MouseInputEvent;
    type MouseWheelInputEvent = Electron.MouseWheelInputEvent;
    type NotificationAction = Electron.NotificationAction;
    type NotificationResponse = Electron.NotificationResponse;
    type PaymentDiscount = Electron.PaymentDiscount;
    type Point = Electron.Point;
    type PostBody = Electron.PostBody;
    type PrinterInfo = Electron.PrinterInfo;
    type ProcessMemoryInfo = Electron.ProcessMemoryInfo;
    type ProcessMetric = Electron.ProcessMetric;
    type Product = Electron.Product;
    type ProductDiscount = Electron.ProductDiscount;
    type ProductSubscriptionPeriod = Electron.ProductSubscriptionPeriod;
    type ProtocolRequest = Electron.ProtocolRequest;
    type ProtocolResponse = Electron.ProtocolResponse;
    type ProtocolResponseUploadData = Electron.ProtocolResponseUploadData;
    type ProxyConfig = Electron.ProxyConfig;
    type Rectangle = Electron.Rectangle;
    type Referrer = Electron.Referrer;
    type RenderProcessGoneDetails = Electron.RenderProcessGoneDetails;
    type ResolvedEndpoint = Electron.ResolvedEndpoint;
    type ResolvedHost = Electron.ResolvedHost;
    type ScrubberItem = Electron.ScrubberItem;
    type SegmentedControlSegment = Electron.SegmentedControlSegment;
    type SerialPort = Electron.SerialPort;
    type ServiceWorkerInfo = Electron.ServiceWorkerInfo;
    type SharedWorkerInfo = Electron.SharedWorkerInfo;
    type SharingItem = Electron.SharingItem;
    type ShortcutDetails = Electron.ShortcutDetails;
    type Size = Electron.Size;
    type Task = Electron.Task;
    type ThumbarButton = Electron.ThumbarButton;
    type TraceCategoriesAndOptions = Electron.TraceCategoriesAndOptions;
    type TraceConfig = Electron.TraceConfig;
    type Transaction = Electron.Transaction;
    type UploadData = Electron.UploadData;
    type UploadFile = Electron.UploadFile;
    type UploadRawData = Electron.UploadRawData;
    type USBDevice = Electron.USBDevice;
    type UserDefaultTypes = Electron.UserDefaultTypes;
    type WebPreferences = Electron.WebPreferences;
    type WebRequestFilter = Electron.WebRequestFilter;
    type WebSource = Electron.WebSource;
  }

  namespace CrossProcessExports {
    type Event<Params extends object = {}> = Electron.Event<Params>;
    const app: App;
    type App = Electron.App;
    const autoUpdater: AutoUpdater;
    type AutoUpdater = Electron.AutoUpdater;
    class BrowserView extends Electron.BrowserView {}
    class BrowserWindow extends Electron.BrowserWindow {}
    type ClientRequest = Electron.ClientRequest;
    const clipboard: Clipboard;
    type Clipboard = Electron.Clipboard;
    type CommandLine = Electron.CommandLine;
    const contentTracing: ContentTracing;
    type ContentTracing = Electron.ContentTracing;
    const contextBridge: ContextBridge;
    type ContextBridge = Electron.ContextBridge;
    type Cookies = Electron.Cookies;
    const crashReporter: CrashReporter;
    type CrashReporter = Electron.CrashReporter;
    type Debugger = Electron.Debugger;
    const desktopCapturer: DesktopCapturer;
    type DesktopCapturer = Electron.DesktopCapturer;
    const dialog: Dialog;
    type Dialog = Electron.Dialog;
    type Dock = Electron.Dock;
    type DownloadItem = Electron.DownloadItem;
    const globalShortcut: GlobalShortcut;
    type GlobalShortcut = Electron.GlobalShortcut;
    const inAppPurchase: InAppPurchase;
    type InAppPurchase = Electron.InAppPurchase;
    type IncomingMessage = Electron.IncomingMessage;
    const ipcMain: IpcMain;
    type IpcMain = Electron.IpcMain;
    const ipcRenderer: IpcRenderer;
    type IpcRenderer = Electron.IpcRenderer;
    class Menu extends Electron.Menu {}
    class MenuItem extends Electron.MenuItem {}
    class MessageChannelMain extends Electron.MessageChannelMain {}
    type MessagePortMain = Electron.MessagePortMain;
    const nativeImage: typeof NativeImage;
    type NativeImage = Electron.NativeImage;
    const nativeTheme: NativeTheme;
    type NativeTheme = Electron.NativeTheme;
    const net: Net;
    type Net = Electron.Net;
    const netLog: NetLog;
    type NetLog = Electron.NetLog;
    class Notification extends Electron.Notification {}
    const powerMonitor: PowerMonitor;
    type PowerMonitor = Electron.PowerMonitor;
    const powerSaveBlocker: PowerSaveBlocker;
    type PowerSaveBlocker = Electron.PowerSaveBlocker;
    const protocol: Protocol;
    type Protocol = Electron.Protocol;
    const pushNotifications: PushNotifications;
    type PushNotifications = Electron.PushNotifications;
    const safeStorage: SafeStorage;
    type SafeStorage = Electron.SafeStorage;
    const screen: Screen;
    type Screen = Electron.Screen;
    type ServiceWorkers = Electron.ServiceWorkers;
    const session: typeof Session;
    type Session = Electron.Session;
    class ShareMenu extends Electron.ShareMenu {}
    const shell: Shell;
    type Shell = Electron.Shell;
    const systemPreferences: SystemPreferences;
    type SystemPreferences = Electron.SystemPreferences;
    class TouchBar extends Electron.TouchBar {}
    type TouchBarButton = Electron.TouchBarButton;
    type TouchBarColorPicker = Electron.TouchBarColorPicker;
    type TouchBarGroup = Electron.TouchBarGroup;
    type TouchBarLabel = Electron.TouchBarLabel;
    type TouchBarOtherItemsProxy = Electron.TouchBarOtherItemsProxy;
    type TouchBarPopover = Electron.TouchBarPopover;
    type TouchBarScrubber = Electron.TouchBarScrubber;
    type TouchBarSegmentedControl = Electron.TouchBarSegmentedControl;
    type TouchBarSlider = Electron.TouchBarSlider;
    type TouchBarSpacer = Electron.TouchBarSpacer;
    class Tray extends Electron.Tray {}
    const utilityProcess: typeof UtilityProcess;
    type UtilityProcess = Electron.UtilityProcess;
    const webContents: typeof WebContents;
    type WebContents = Electron.WebContents;
    const webFrame: WebFrame;
    type WebFrame = Electron.WebFrame;
    const webFrameMain: typeof WebFrameMain;
    type WebFrameMain = Electron.WebFrameMain;
    type WebRequest = Electron.WebRequest;
    const webUtils: WebUtils;
    type WebUtils = Electron.WebUtils;
    type WebviewTag = Electron.WebviewTag;
    type AboutPanelOptionsOptions = Electron.AboutPanelOptionsOptions;
    type AddRepresentationOptions = Electron.AddRepresentationOptions;
    type AdjustSelectionOptions = Electron.AdjustSelectionOptions;
    type AnimationSettings = Electron.AnimationSettings;
    type AppDetailsOptions = Electron.AppDetailsOptions;
    type ApplicationInfoForProtocolReturnValue = Electron.ApplicationInfoForProtocolReturnValue;
    type AuthenticationResponseDetails = Electron.AuthenticationResponseDetails;
    type AuthInfo = Electron.AuthInfo;
    type AutoResizeOptions = Electron.AutoResizeOptions;
    type BeforeSendResponse = Electron.BeforeSendResponse;
    type BitmapOptions = Electron.BitmapOptions;
    type BlinkMemoryInfo = Electron.BlinkMemoryInfo;
    type BluetoothPairingHandlerHandlerDetails = Electron.BluetoothPairingHandlerHandlerDetails;
    type BrowserViewConstructorOptions = Electron.BrowserViewConstructorOptions;
    type CallbackResponse = Electron.CallbackResponse;
    type CertificateTrustDialogOptions = Electron.CertificateTrustDialogOptions;
    type ClearCodeCachesOptions = Electron.ClearCodeCachesOptions;
    type ClearStorageDataOptions = Electron.ClearStorageDataOptions;
    type ClientRequestConstructorOptions = Electron.ClientRequestConstructorOptions;
    type CloseOpts = Electron.CloseOpts;
    type Config = Electron.Config;
    type ConfigureHostResolverOptions = Electron.ConfigureHostResolverOptions;
    type ConsoleMessageEvent = Electron.ConsoleMessageEvent;
    type ContextMenuEvent = Electron.ContextMenuEvent;
    type ContextMenuParams = Electron.ContextMenuParams;
    type ContinueActivityDetails = Electron.ContinueActivityDetails;
    type CookiesGetFilter = Electron.CookiesGetFilter;
    type CookiesSetDetails = Electron.CookiesSetDetails;
    type CrashReporterStartOptions = Electron.CrashReporterStartOptions;
    type CreateFromBitmapOptions = Electron.CreateFromBitmapOptions;
    type CreateFromBufferOptions = Electron.CreateFromBufferOptions;
    type CreateInterruptedDownloadOptions = Electron.CreateInterruptedDownloadOptions;
    type Data = Electron.Data;
    type DefaultFontFamily = Electron.DefaultFontFamily;
    type Details = Electron.Details;
    type DevicePermissionHandlerHandlerDetails = Electron.DevicePermissionHandlerHandlerDetails;
    type DevtoolsOpenUrlEvent = Electron.DevtoolsOpenUrlEvent;
    type DidChangeThemeColorEvent = Electron.DidChangeThemeColorEvent;
    type DidCreateWindowDetails = Electron.DidCreateWindowDetails;
    type DidFailLoadEvent = Electron.DidFailLoadEvent;
    type DidFrameFinishLoadEvent = Electron.DidFrameFinishLoadEvent;
    type DidFrameNavigateEvent = Electron.DidFrameNavigateEvent;
    type DidNavigateEvent = Electron.DidNavigateEvent;
    type DidNavigateInPageEvent = Electron.DidNavigateInPageEvent;
    type DidRedirectNavigationEvent = Electron.DidRedirectNavigationEvent;
    type DidStartNavigationEvent = Electron.DidStartNavigationEvent;
    type DisplayBalloonOptions = Electron.DisplayBalloonOptions;
    type DisplayMediaRequestHandlerHandlerRequest = Electron.DisplayMediaRequestHandlerHandlerRequest;
    type DownloadURLOptions = Electron.DownloadURLOptions;
    type EnableNetworkEmulationOptions = Electron.EnableNetworkEmulationOptions;
    type FeedURLOptions = Electron.FeedURLOptions;
    type FileIconOptions = Electron.FileIconOptions;
    type FindInPageOptions = Electron.FindInPageOptions;
    type FocusOptions = Electron.FocusOptions;
    type ForkOptions = Electron.ForkOptions;
    type FoundInPageEvent = Electron.FoundInPageEvent;
    type FrameCreatedDetails = Electron.FrameCreatedDetails;
    type FromPartitionOptions = Electron.FromPartitionOptions;
    type FromPathOptions = Electron.FromPathOptions;
    type HandlerDetails = Electron.HandlerDetails;
    type HeadersReceivedResponse = Electron.HeadersReceivedResponse;
    type HeapStatistics = Electron.HeapStatistics;
    type HidDeviceAddedDetails = Electron.HidDeviceAddedDetails;
    type HidDeviceRemovedDetails = Electron.HidDeviceRemovedDetails;
    type HidDeviceRevokedDetails = Electron.HidDeviceRevokedDetails;
    type IgnoreMouseEventsOptions = Electron.IgnoreMouseEventsOptions;
    type ImportCertificateOptions = Electron.ImportCertificateOptions;
    type Info = Electron.Info;
    type Input = Electron.Input;
    type InsertCSSOptions = Electron.InsertCSSOptions;
    type IpcMessageEvent = Electron.IpcMessageEvent;
    type Item = Electron.Item;
    type JumpListSettings = Electron.JumpListSettings;
    type LoadCommitEvent = Electron.LoadCommitEvent;
    type LoadExtensionOptions = Electron.LoadExtensionOptions;
    type LoadFileOptions = Electron.LoadFileOptions;
    type LoadURLOptions = Electron.LoadURLOptions;
    type LoginItemSettings = Electron.LoginItemSettings;
    type LoginItemSettingsOptions = Electron.LoginItemSettingsOptions;
    type MenuItemConstructorOptions = Electron.MenuItemConstructorOptions;
    type MessageBoxOptions = Electron.MessageBoxOptions;
    type MessageBoxReturnValue = Electron.MessageBoxReturnValue;
    type MessageBoxSyncOptions = Electron.MessageBoxSyncOptions;
    type MessageDetails = Electron.MessageDetails;
    type MessageEvent = Electron.MessageEvent;
    type MoveToApplicationsFolderOptions = Electron.MoveToApplicationsFolderOptions;
    type NotificationConstructorOptions = Electron.NotificationConstructorOptions;
    type OnBeforeRedirectListenerDetails = Electron.OnBeforeRedirectListenerDetails;
    type OnBeforeRequestListenerDetails = Electron.OnBeforeRequestListenerDetails;
    type OnBeforeSendHeadersListenerDetails = Electron.OnBeforeSendHeadersListenerDetails;
    type OnCompletedListenerDetails = Electron.OnCompletedListenerDetails;
    type OnErrorOccurredListenerDetails = Electron.OnErrorOccurredListenerDetails;
    type OnHeadersReceivedListenerDetails = Electron.OnHeadersReceivedListenerDetails;
    type OnResponseStartedListenerDetails = Electron.OnResponseStartedListenerDetails;
    type OnSendHeadersListenerDetails = Electron.OnSendHeadersListenerDetails;
    type OpenDevToolsOptions = Electron.OpenDevToolsOptions;
    type OpenDialogOptions = Electron.OpenDialogOptions;
    type OpenDialogReturnValue = Electron.OpenDialogReturnValue;
    type OpenDialogSyncOptions = Electron.OpenDialogSyncOptions;
    type OpenExternalOptions = Electron.OpenExternalOptions;
    type Options = Electron.Options;
    type Opts = Electron.Opts;
    type PageFaviconUpdatedEvent = Electron.PageFaviconUpdatedEvent;
    type PageTitleUpdatedEvent = Electron.PageTitleUpdatedEvent;
    type Parameters = Electron.Parameters;
    type Payment = Electron.Payment;
    type PermissionCheckHandlerHandlerDetails = Electron.PermissionCheckHandlerHandlerDetails;
    type PermissionRequestHandlerHandlerDetails = Electron.PermissionRequestHandlerHandlerDetails;
    type PluginCrashedEvent = Electron.PluginCrashedEvent;
    type PopupOptions = Electron.PopupOptions;
    type PreconnectOptions = Electron.PreconnectOptions;
    type PrintToPDFOptions = Electron.PrintToPDFOptions;
    type Privileges = Electron.Privileges;
    type ProgressBarOptions = Electron.ProgressBarOptions;
    type Provider = Electron.Provider;
    type PurchaseProductOpts = Electron.PurchaseProductOpts;
    type ReadBookmark = Electron.ReadBookmark;
    type RegistrationCompletedDetails = Electron.RegistrationCompletedDetails;
    type RelaunchOptions = Electron.RelaunchOptions;
    type RenderProcessGoneEvent = Electron.RenderProcessGoneEvent;
    type Request = Electron.Request;
    type ResizeOptions = Electron.ResizeOptions;
    type ResolveHostOptions = Electron.ResolveHostOptions;
    type ResourceUsage = Electron.ResourceUsage;
    type Response = Electron.Response;
    type Result = Electron.Result;
    type SaveDialogOptions = Electron.SaveDialogOptions;
    type SaveDialogReturnValue = Electron.SaveDialogReturnValue;
    type SaveDialogSyncOptions = Electron.SaveDialogSyncOptions;
    type SelectHidDeviceDetails = Electron.SelectHidDeviceDetails;
    type SelectUsbDeviceDetails = Electron.SelectUsbDeviceDetails;
    type SerialPortRevokedDetails = Electron.SerialPortRevokedDetails;
    type Settings = Electron.Settings;
    type SourcesOptions = Electron.SourcesOptions;
    type StartLoggingOptions = Electron.StartLoggingOptions;
    type Streams = Electron.Streams;
    type SystemMemoryInfo = Electron.SystemMemoryInfo;
    type TitleBarOverlay = Electron.TitleBarOverlay;
    type TitleOptions = Electron.TitleOptions;
    type ToBitmapOptions = Electron.ToBitmapOptions;
    type ToDataURLOptions = Electron.ToDataURLOptions;
    type ToPNGOptions = Electron.ToPNGOptions;
    type TouchBarButtonConstructorOptions = Electron.TouchBarButtonConstructorOptions;
    type TouchBarColorPickerConstructorOptions = Electron.TouchBarColorPickerConstructorOptions;
    type TouchBarConstructorOptions = Electron.TouchBarConstructorOptions;
    type TouchBarGroupConstructorOptions = Electron.TouchBarGroupConstructorOptions;
    type TouchBarLabelConstructorOptions = Electron.TouchBarLabelConstructorOptions;
    type TouchBarPopoverConstructorOptions = Electron.TouchBarPopoverConstructorOptions;
    type TouchBarScrubberConstructorOptions = Electron.TouchBarScrubberConstructorOptions;
    type TouchBarSegmentedControlConstructorOptions = Electron.TouchBarSegmentedControlConstructorOptions;
    type TouchBarSliderConstructorOptions = Electron.TouchBarSliderConstructorOptions;
    type TouchBarSpacerConstructorOptions = Electron.TouchBarSpacerConstructorOptions;
    type TraceBufferUsageReturnValue = Electron.TraceBufferUsageReturnValue;
    type UdpPortRange = Electron.UdpPortRange;
    type UpdateTargetUrlEvent = Electron.UpdateTargetUrlEvent;
    type UploadProgress = Electron.UploadProgress;
    type UsbDeviceRevokedDetails = Electron.UsbDeviceRevokedDetails;
    type USBProtectedClassesHandlerHandlerDetails = Electron.USBProtectedClassesHandlerHandlerDetails;
    type VisibleOnAllWorkspacesOptions = Electron.VisibleOnAllWorkspacesOptions;
    type WebContentsAudioStateChangedEventParams = Electron.WebContentsAudioStateChangedEventParams;
    type WebContentsDidRedirectNavigationEventParams = Electron.WebContentsDidRedirectNavigationEventParams;
    type WebContentsDidStartNavigationEventParams = Electron.WebContentsDidStartNavigationEventParams;
    type WebContentsPrintOptions = Electron.WebContentsPrintOptions;
    type WebContentsWillFrameNavigateEventParams = Electron.WebContentsWillFrameNavigateEventParams;
    type WebContentsWillNavigateEventParams = Electron.WebContentsWillNavigateEventParams;
    type WebContentsWillRedirectEventParams = Electron.WebContentsWillRedirectEventParams;
    type WebRTCUDPPortRange = Electron.WebRTCUDPPortRange;
    type WebviewTagPrintOptions = Electron.WebviewTagPrintOptions;
    type WillFrameNavigateEvent = Electron.WillFrameNavigateEvent;
    type WillNavigateEvent = Electron.WillNavigateEvent;
    type WillResizeDetails = Electron.WillResizeDetails;
    type EditFlags = Electron.EditFlags;
    type Env = Electron.Env;
    type FoundInPageResult = Electron.FoundInPageResult;
    type LaunchItems = Electron.LaunchItems;
    type Margins = Electron.Margins;
    type MediaFlags = Electron.MediaFlags;
    type PageRanges = Electron.PageRanges;
    type Params = Electron.Params;
    type Video = Electron.Video;
    type BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions;
    type BluetoothDevice = Electron.BluetoothDevice;
    type Certificate = Electron.Certificate;
    type CertificatePrincipal = Electron.CertificatePrincipal;
    type Cookie = Electron.Cookie;
    type CPUUsage = Electron.CPUUsage;
    type CrashReport = Electron.CrashReport;
    type CustomScheme = Electron.CustomScheme;
    type DesktopCapturerSource = Electron.DesktopCapturerSource;
    type Display = Electron.Display;
    type Extension = Electron.Extension;
    type ExtensionInfo = Electron.ExtensionInfo;
    type FileFilter = Electron.FileFilter;
    type FilePathWithHeaders = Electron.FilePathWithHeaders;
    type GPUFeatureStatus = Electron.GPUFeatureStatus;
    type HIDDevice = Electron.HIDDevice;
    type InputEvent = Electron.InputEvent;
    type IOCounters = Electron.IOCounters;
    type IpcMainEvent = Electron.IpcMainEvent;
    type IpcMainInvokeEvent = Electron.IpcMainInvokeEvent;
    type IpcRendererEvent = Electron.IpcRendererEvent;
    type JumpListCategory = Electron.JumpListCategory;
    type JumpListItem = Electron.JumpListItem;
    type KeyboardEvent = Electron.KeyboardEvent;
    type KeyboardInputEvent = Electron.KeyboardInputEvent;
    type MemoryInfo = Electron.MemoryInfo;
    type MemoryUsageDetails = Electron.MemoryUsageDetails;
    type MimeTypedBuffer = Electron.MimeTypedBuffer;
    type MouseInputEvent = Electron.MouseInputEvent;
    type MouseWheelInputEvent = Electron.MouseWheelInputEvent;
    type NotificationAction = Electron.NotificationAction;
    type NotificationResponse = Electron.NotificationResponse;
    type PaymentDiscount = Electron.PaymentDiscount;
    type Point = Electron.Point;
    type PostBody = Electron.PostBody;
    type PrinterInfo = Electron.PrinterInfo;
    type ProcessMemoryInfo = Electron.ProcessMemoryInfo;
    type ProcessMetric = Electron.ProcessMetric;
    type Product = Electron.Product;
    type ProductDiscount = Electron.ProductDiscount;
    type ProductSubscriptionPeriod = Electron.ProductSubscriptionPeriod;
    type ProtocolRequest = Electron.ProtocolRequest;
    type ProtocolResponse = Electron.ProtocolResponse;
    type ProtocolResponseUploadData = Electron.ProtocolResponseUploadData;
    type ProxyConfig = Electron.ProxyConfig;
    type Rectangle = Electron.Rectangle;
    type Referrer = Electron.Referrer;
    type RenderProcessGoneDetails = Electron.RenderProcessGoneDetails;
    type ResolvedEndpoint = Electron.ResolvedEndpoint;
    type ResolvedHost = Electron.ResolvedHost;
    type ScrubberItem = Electron.ScrubberItem;
    type SegmentedControlSegment = Electron.SegmentedControlSegment;
    type SerialPort = Electron.SerialPort;
    type ServiceWorkerInfo = Electron.ServiceWorkerInfo;
    type SharedWorkerInfo = Electron.SharedWorkerInfo;
    type SharingItem = Electron.SharingItem;
    type ShortcutDetails = Electron.ShortcutDetails;
    type Size = Electron.Size;
    type Task = Electron.Task;
    type ThumbarButton = Electron.ThumbarButton;
    type TraceCategoriesAndOptions = Electron.TraceCategoriesAndOptions;
    type TraceConfig = Electron.TraceConfig;
    type Transaction = Electron.Transaction;
    type UploadData = Electron.UploadData;
    type UploadFile = Electron.UploadFile;
    type UploadRawData = Electron.UploadRawData;
    type USBDevice = Electron.USBDevice;
    type UserDefaultTypes = Electron.UserDefaultTypes;
    type WebPreferences = Electron.WebPreferences;
    type WebRequestFilter = Electron.WebRequestFilter;
    type WebSource = Electron.WebSource;
  }

  const app: App;
  const autoUpdater: AutoUpdater;
  const clipboard: Clipboard;
  const contentTracing: ContentTracing;
  const contextBridge: ContextBridge;
  const crashReporter: CrashReporter;
  const desktopCapturer: DesktopCapturer;
  const dialog: Dialog;
  const globalShortcut: GlobalShortcut;
  const inAppPurchase: InAppPurchase;
  const ipcMain: IpcMain;
  const ipcRenderer: IpcRenderer;
  const nativeImage: typeof NativeImage;
  const nativeTheme: NativeTheme;
  const net: Net;
  const netLog: NetLog;
  const parentPort: ParentPort;
  const powerMonitor: PowerMonitor;
  const powerSaveBlocker: PowerSaveBlocker;
  const protocol: Protocol;
  const pushNotifications: PushNotifications;
  const safeStorage: SafeStorage;
  const screen: Screen;
  const session: typeof Session;
  const shell: Shell;
  const systemPreferences: SystemPreferences;
  const utilityProcess: typeof UtilityProcess;
  const webContents: typeof WebContents;
  const webFrame: WebFrame;
  const webFrameMain: typeof WebFrameMain;
  const webUtils: WebUtils;

}

declare module 'electron' {
  export = Electron.CrossProcessExports;
}

declare module 'electron/main' {
  export = Electron.Main;
}

declare module 'electron/common' {
  export = Electron.Common;
}

declare module 'electron/renderer' {
  export = Electron.Renderer;
}

declare module 'electron/utility' {
  export = Electron.Utility;
}

interface NodeRequireFunction {
  (moduleName: 'electron'): typeof Electron.CrossProcessExports;
  (moduleName: 'electron/main'): typeof Electron.Main;
  (moduleName: 'electron/common'): typeof Electron.Common;
  (moduleName: 'electron/renderer'): typeof Electron.Renderer;
  (moduleName: 'electron/utility'): typeof Electron.Utility;
}

interface NodeRequire {
  (moduleName: 'electron'): typeof Electron.CrossProcessExports;
  (moduleName: 'electron/main'): typeof Electron.Main;
  (moduleName: 'electron/common'): typeof Electron.Common;
  (moduleName: 'electron/renderer'): typeof Electron.Renderer;
  (moduleName: 'electron/utility'): typeof Electron.Utility;
}

interface File {
  /**
   * The real path to the file on the users filesystem
   */
  path: string;
}

declare module 'original-fs' {
  import * as fs from 'fs';
  export = fs;
}

declare module 'node:original-fs' {
  import * as fs from 'fs';
  export = fs;
}

interface Document {
  createElement(tagName: 'webview'): Electron.WebviewTag;
}


declare namespace NodeJS {
  interface Process extends NodeJS.EventEmitter {

    // Docs: https://electronjs.org/docs/api/process

    /**
     * Emitted when Electron has loaded its internal initialization script and is
     * beginning to load the web page or the main script.
     */
    on(event: 'loaded', listener: Function): this;
    off(event: 'loaded', listener: Function): this;
    once(event: 'loaded', listener: Function): this;
    addListener(event: 'loaded', listener: Function): this;
    removeListener(event: 'loaded', listener: Function): this;
    /**
     * Causes the main thread of the current process crash.
     */
    crash(): void;
    /**
     * * `allocated` Integer - Size of all allocated objects in Kilobytes.
     * * `total` Integer - Total allocated space in Kilobytes.
     * 
     * Returns an object with Blink memory information. It can be useful for debugging
     * rendering / DOM related memory issues. Note that all values are reported in
     * Kilobytes.
     */
    getBlinkMemoryInfo(): Electron.BlinkMemoryInfo;
    getCPUUsage(): Electron.CPUUsage;
    /**
     * The number of milliseconds since epoch, or `null` if the information is
     * unavailable
     * 
     * Indicates the creation time of the application. The time is represented as
     * number of milliseconds since epoch. It returns null if it is unable to get the
     * process creation time.
     */
    getCreationTime(): (number) | (null);
    /**
     * * `totalHeapSize` Integer
     * * `totalHeapSizeExecutable` Integer
     * * `totalPhysicalSize` Integer
     * * `totalAvailableSize` Integer
     * * `usedHeapSize` Integer
     * * `heapSizeLimit` Integer
     * * `mallocedMemory` Integer
     * * `peakMallocedMemory` Integer
     * * `doesZapGarbage` boolean
     * 
     * Returns an object with V8 heap statistics. Note that all statistics are reported
     * in Kilobytes.
     */
    getHeapStatistics(): Electron.HeapStatistics;
    /**
     * @platform win32,linux
     */
    getIOCounters(): Electron.IOCounters;
    /**
     * Resolves with a ProcessMemoryInfo
     * 
     * Returns an object giving memory usage statistics about the current process. Note
     * that all statistics are reported in Kilobytes. This api should be called after
     * app ready.
     * 
     * Chromium does not provide `residentSet` value for macOS. This is because macOS
     * performs in-memory compression of pages that haven't been recently used. As a
     * result the resident set size value is not what one would expect. `private`
     * memory is more representative of the actual pre-compression memory usage of the
     * process on macOS.
     */
    getProcessMemoryInfo(): Promise<Electron.ProcessMemoryInfo>;
    /**
     * * `total` Integer - The total amount of physical memory in Kilobytes available
     * to the system.
     * * `free` Integer - The total amount of memory not being used by applications or
     * disk cache.
     * * `swapTotal` Integer _Windows_ _Linux_ - The total amount of swap memory in
     * Kilobytes available to the system.
     * * `swapFree` Integer _Windows_ _Linux_ - The free amount of swap memory in
     * Kilobytes available to the system.
     * 
     * Returns an object giving memory usage statistics about the entire system. Note
     * that all statistics are reported in Kilobytes.
     */
    getSystemMemoryInfo(): Electron.SystemMemoryInfo;
    /**
     * The version of the host operating system.
     * 
     * Example:
     * 
     * **Note:** It returns the actual operating system version instead of kernel
     * version on macOS unlike `os.release()`.
     */
    getSystemVersion(): string;
    /**
     * Causes the main thread of the current process hang.
     */
    hang(): void;
    /**
     * Sets the file descriptor soft limit to `maxDescriptors` or the OS hard limit,
     * whichever is lower for the current process.
     *
     * @platform darwin,linux
     */
    setFdLimit(maxDescriptors: number): void;
    /**
     * Indicates whether the snapshot has been created successfully.
     * 
     * Takes a V8 heap snapshot and saves it to `filePath`.
     */
    takeHeapSnapshot(filePath: string): boolean;
    /**
     * A `string` representing Chrome's version string.
     *
     */
    readonly chrome: string;
    /**
     * A `string` (optional) representing a globally unique ID of the current
     * JavaScript context. Each frame has its own JavaScript context. When
     * contextIsolation is enabled, the isolated world also has a separate JavaScript
     * context. This property is only available in the renderer process.
     *
     */
    readonly contextId?: string;
    /**
     * A `boolean` that indicates whether the current renderer context has
     * `contextIsolation` enabled. It is `undefined` in the main process.
     *
     */
    readonly contextIsolated: boolean;
    /**
     * A `boolean`. When the app is started by being passed as parameter to the default
     * Electron executable, this property is `true` in the main process, otherwise it
     * is `undefined`. For example when running the app with `electron .`, it is
     * `true`, even if the app is packaged (`isPackaged`) is `true`. This can be useful
     * to determine how many arguments will need to be sliced off from `process.argv`.
     *
     */
    readonly defaultApp: boolean;
    /**
     * A `string` representing Electron's version string.
     *
     */
    readonly electron: string;
    /**
     * A `boolean`, `true` when the current renderer context is the "main" renderer
     * frame. If you want the ID of the current frame you should use
     * `webFrame.routingId`.
     *
     */
    readonly isMainFrame: boolean;
    /**
     * A `boolean`. For Mac App Store build, this property is `true`, for other builds
     * it is `undefined`.
     *
     */
    readonly mas: boolean;
    /**
     * A `boolean` that controls ASAR support inside your application. Setting this to
     * `true` will disable the support for `asar` archives in Node's built-in modules.
     */
    noAsar: boolean;
    /**
     * A `boolean` that controls whether or not deprecation warnings are printed to
     * `stderr`. Setting this to `true` will silence deprecation warnings. This
     * property is used instead of the `--no-deprecation` command line flag.
     */
    noDeprecation: boolean;
    /**
     * A `Electron.ParentPort` property if this is a `UtilityProcess` (or `null`
     * otherwise) allowing communication with the parent process.
     */
    parentPort: Electron.ParentPort;
    /**
     * A `string` representing the path to the resources directory.
     *
     */
    readonly resourcesPath: string;
    /**
     * A `boolean`. When the renderer process is sandboxed, this property is `true`,
     * otherwise it is `undefined`.
     *
     */
    readonly sandboxed: boolean;
    /**
     * A `boolean` that controls whether or not deprecation warnings will be thrown as
     * exceptions. Setting this to `true` will throw errors for deprecations. This
     * property is used instead of the `--throw-deprecation` command line flag.
     */
    throwDeprecation: boolean;
    /**
     * A `boolean` that controls whether or not deprecations printed to `stderr`
     * include their stack trace. Setting this to `true` will print stack traces for
     * deprecations. This property is instead of the `--trace-deprecation` command line
     * flag.
     */
    traceDeprecation: boolean;
    /**
     * A `boolean` that controls whether or not process warnings printed to `stderr`
     * include their stack trace. Setting this to `true` will print stack traces for
     * process warnings (including deprecations). This property is instead of the
     * `--trace-warnings` command line flag.
     */
    traceProcessWarnings: boolean;
    /**
     * A `string` representing the current process's type, can be:
     * 
     * * `browser` - The main process
     * * `renderer` - A renderer process
     * * `worker` - In a web worker
     * * `utility` - In a node process launched as a service
     *
     */
    readonly type: ('browser' | 'renderer' | 'worker' | 'utility');
    /**
     * A `boolean`. If the app is running as a Windows Store app (appx), this property
     * is `true`, for otherwise it is `undefined`.
     *
     */
    readonly windowsStore: boolean;
  }
  interface ProcessVersions {
    readonly electron: string;
    readonly chrome: string;
  }
}
