// Type definitions for dialog-node 0.2
// Project: https://github.com/bat-tomr/dialog-node
// Definitions by: Ian MacLeod <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Information dialog with text and title and an OK button.
 *
 * @param msg The message to be displayed in the body of the dialog.
 * @param title Displayed in the title of the dialog.
 * @param timeout number of seconds before timing out the dialog. Set to 0 for no timeout.
 * @param callback called when the dialog closes.
 */
export function info(
    msg: string,
    title: string,
    timeout: number,
    callback?: DialogCallback<'OK' | 'CANCEL'>
): void;

/**
 * Warning dialog with text and title and an OK button.
 *
 * @param msg The message to be displayed in the body of the dialog.
 * @param title Displayed in the title of the dialog.
 * @param timeout number of seconds before timing out the dialog. Set to 0 for no timeout.
 * @param callback called when the dialog closes.
 */
export function warn(
    msg: string,
    title: string,
    timeout: number,
    callback?: DialogCallback<'OK' | 'CANCEL'>
): void;

/**
 * Error dialog with text and title and an OK button
 *
 * @param msg The message to be displayed in the body of the dialog.
 * @param title Displayed in the title of the dialog.
 * @param timeout number of seconds before timing out the dialog. Set to 0 for no timeout.
 * @param callback called when the dialog closes.
 */
export function error(
    msg: string,
    title: string,
    timeout: number,
    callback?: DialogCallback<'OK' | 'CANCEL'>
): void;

/**
 * A dialog that displays text and title and that prompts user to click a Cancel or an OK button.
 *
 * Returns the result of the user action as a string handed into the callback function:
 *
 * - "CANCEL" when user clicks the 'Cancel' button
 * - "OK" when user clicks the 'OK' button
 * - Empty string when user or system closed the dialog through other actions
 *
 * @param msg The message to be displayed in the body of the dialog.
 * @param title Displayed in the title of the dialog.
 * @param timeout number of seconds before timing out the dialog. Set to 0 for no timeout.
 * @param callback called when the dialog closes.
 */
export function question(
    msg: string,
    title: string,
    timeout: number,
    callback?: DialogCallback<'OK' | 'CANCEL' | ''>
): void;

/**
 * Dialog querying user to type in some text.
 *
 * Returns the text the user typed as a string handed into the callback function:
 *
 * - Text that user typed in the entry mask before pressing the 'OK' button
 * - Empty string when user did not type anything or the system closed the dialog through other actions
 *
 * @param msg The message to be displayed in the body of the dialog.
 * @param title Displayed in the title of the dialog.
 * @param timeout number of seconds before timing out the dialog. Set to 0 for no timeout.
 * @param callback called when the dialog closes.
 */
export function entry(
    msg: string,
    title: string,
    timeout: number,
    callback?: DialogCallback<string>
): void;

/**
 * Prompts user to select or type a date. This one varies quite a bit across the different OSes.
 *
 * Returns the date the user selected as a string handed into the callback function (see also callback mechanism):
 *
 * - Date that user selected in the date picker before pressing the 'OK' button. Currently the date format is different for different OSes. This will be harmonized across all OSes at a later time.
 * - Empty string when user did not select a date or the system closed the dialog through other actions
 *
 * @param msg The message to be displayed in the body of the dialog.
 * @param title Displayed in the title of the dialog.
 * @param timeout number of seconds before timing out the dialog. Set to 0 for no timeout.
 * @param callback called when the dialog closes.
 */
export function calendar(
    msg: string,
    title: string,
    timeout: number,
    callback?: DialogCallback<string>
): void;

/**
 * Prompts user to select a file.
 *
 * @param msg The message to be displayed in the body of the dialog.
 * @param title Displayed in the title of the dialog.
 * @param timeout number of seconds before timing out the dialog. Set to 0 for no timeout.
 * @param callback called when the dialog closes.
 */
export function fileselect(
    msg: string,
    title: string,
    timeout: number,
    callback?: DialogCallback<string>
): void;

export interface DialogCallback<TRetVal> {
    (code: number, retVal: TRetVal, stderr: string): void;
}

/**
 * Initialize the package with the directory that contains its native scripts.
 *
 * Some packaging tools don't set __dirname properly (webpack or jxcore) setCwd
 * allows the calling module to set dialog-node's working directory properly in
 * order to find its assets Needs to be called before any other function You can
 * safely ignore this function if using no packaging tool(npm is fine)
 */
export function setCwd(directory: string): void;
