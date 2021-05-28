/**
 * Logs a warning to the console with a properly formatted message and adds a link to the documentation.
 * Use whenever you want to log a warning to the console.
 *
 *  /**
 *   * There was a problem processing the configuration of the toolbar. The item with the given
 *   * name does not exist, so it was omitted when rendering the toolbar.
 *   *
 *   * @error toolbarview-item-unavailable
 *   * @param {String} name The name of the component.
 *   * /
 *  logWarning( 'toolbarview-item-unavailable', { name } );
 *
 * See also {@link module:utils/ckeditorerror~CKEditorError} for an explanation when to throw an error and when to log
 * a warning or an error to the console.
 *
 */
export function logWarning(errorName: string, data?: object): string;
/**
 * Logs an error to the console with a properly formatted message and adds a link to the documentation.
 * Use whenever you want to log an error to the console.
 *
 *  /**
 *   * There was a problem processing the configuration of the toolbar. The item with the given
 *   * name does not exist, so it was omitted when rendering the toolbar.
 *   *
 *   * @error toolbarview-item-unavailable
 *   * @param {String} name The name of the component.
 *   * /
 *   logError( 'toolbarview-item-unavailable', { name } );
 *
 * **Note**: In most cases logging a warning using {@link module:utils/ckeditorerror~logWarning} is enough.
 *
 * See also {@link module:utils/ckeditorerror~CKEditorError} for an explanation when to use each method.
 *
 */
export function logError(errorName: string, data?: object): string;
/**
 * URL to the documentation with error codes.
 */
export const DOCUMENTATION_URL: "https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";
/**
 * The CKEditor error class.
 *
 * You should throw `CKEditorError` when:
 *
 * * An unexpected situation occurred and the editor (most probably) will not work properly. Such exception will be handled
 * by the {@link module:watchdog/watchdog~Watchdog watchdog} (if it is integrated),
 * * If the editor is incorrectly integrated or the editor API is used in the wrong way. This way you will give
 * feedback to the developer as soon as possible. Keep in mind that for common integration issues which should not
 * stop editor initialization (like missing upload adapter, wrong name of a toolbar component) we use
 * {@link module:utils/ckeditorerror~logWarning `logWarning()`} and
 * {@link module:utils/ckeditorerror~logError `logError()`}
 * to improve developers experience and let them see the a working editor as soon as possible.
 *
 *  /**
 *   * Error thrown when a plugin cannot be loaded due to JavaScript errors, lack of plugins with a given name, etc.
 *   *
 *   * @error plugin-load
 *   * @param pluginName The name of the plugin that could not be loaded.
 *   * @param moduleName The name of the module which tried to load this plugin.
 *   * /
 *  throw new CKEditorError( 'plugin-load', {
 *   pluginName: 'foo',
 *   moduleName: 'bar'
 *  } );
 *
 */
export default class CKEditorError extends Error {
    /**
     * A utility that ensures that the thrown error is a {@link module:utils/ckeditorerror~CKEditorError} one.
     * It is useful when combined with the {@link module:watchdog/watchdog~Watchdog} feature, which can restart the editor in case
     * of a {@link module:utils/ckeditorerror~CKEditorError} error.
     *
     * by the watchdog to verify which editor should be restarted.
     */
    static rethrowUnexpectedError(err: Error, context: object): void;
    /**
     * Creates an instance of the CKEditorError class.
     *
     * to the thrown error's `message`.
     * is able to determine which editor crashed. It should be an editor instance or a property connected to it. It can be also
     * a `null` value if the editor should not be restarted in case of the error (e.g. during the editor initialization).
     * The error context should be checked using the `areConnectedThroughProperties( editor, context )` utility
     * to check if the object works as the context.
     * will be appended to the error message, so the data are quickly visible in the console. The original
     * data object will also be later available under the {@link #data} property.
     */
    constructor(errorName: string, context?: object | null, data?: object);
    /**
     * A context of the error by which the Watchdog is able to determine which editor crashed.
     *
     */
    context: object | null;
    /**
     * The additional error data passed to the constructor. Undefined if none was passed.
     *
     */
    data: object | undefined;
    /**
     * Checks if the error is of the `CKEditorError` type.
     */
    is(type: any): boolean;
}
