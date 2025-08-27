export type CopyCallback = (err: Error) => void;
export type PasteCallback = (err: Error, content: string) => void;

/**
 * Asynchronously replaces the current contents of the clip board with text.
 * content Takes either a string, array, object, or readable stream.
 * callback will fire when the copy operation is complete.
 * Returns the same value passed in.
 */
export function copy<T>(content: T, callback?: CopyCallback): T;

/**
 * Synchronously returns the current contents of the system clip board.
 * Note: The synchronous version of paste is not always availabled.
 * An error message is shown if the synchronous version of paste is used on an unsupported platform.
 * The asynchronous version of paste is always available.
 * Returns the current contents of the system clip board.
 */
export function paste(): string;

/**
 * Asynchronously returns the current contents of the system clip board.
 * The contents of the system clip board are passed to the callback as the second parameter.
 */
export function paste(callback: PasteCallback): void;
