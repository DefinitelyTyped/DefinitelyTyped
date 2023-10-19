/**
 * Create a win32 messageBox ok dialog
 *
 * @param title The title of the dialog
 * @param message The message shown in this box
 * @returns A promise witch resolve when the dialog is closed
 */
export function ok(title: string, message: string): Promise<void>;

/**
 * Create a win32 messageBox okCancel dialog
 *
 * @param title The title of the dialog
 * @param message The message shown in this box
 * @returns A promise witch resolve when the dialog is closed and gives you the button clicked
 */
export function okCancel(title: string, message: string): Promise<"OK" | "CANCEL">;

/**
 * Create a win32 messageBox abortRetryIgnore dialog
 *
 * @param title The title of the dialog
 * @param message The message shown in this box
 * @returns A promise witch resolve when the dialog is closed and gives you the button clicked
 */
export function abortRetryIgnore(title: string, message: string): Promise<"ABORT" | "RETRY" | "IGNORE">;
