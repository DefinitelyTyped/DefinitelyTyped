// Type definitions for copy-paste v1.1.3
// Project: https://github.com/xavi-/node-copy-paste
// Definitions by: Tobias Kahlert <https://github.com/SrTobi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export type CopyCallback = (err: Error) => void;
export type PasteCallback = (err: Error, content: string) => void;

/**
 * Asynchronously replaces the current contents of the clip board with text.
 * 
 * @param {T} content Takes either a string, array, object, or readable stream.
 * @return {T} Returns the same value passed in.
 */
export declare function copy<T>(content: T): T;

/**
 * Asynchronously replaces the current contents of the clip board with text.
 * 
 * @param {T} content Takes either a string, array, object, or readable stream.
 * @param {CopyCallback} callback will fire when the copy operation is complete.
 * @return {T} Returns the same value passed in.
 */
export declare function copy<T>(content: T, callback: CopyCallback): T;


/**
 * Synchronously returns the current contents of the system clip board.
 * 
 * Note: The synchronous version of paste is not always availabled.
 * An error message is shown if the synchronous version of paste is used on an unsupported platform.
 * The asynchronous version of paste is always available.
 * 
 * @return {string} Returns the current contents of the system clip board.
 */
export declare function paste(): string;

/**
 * Asynchronously returns the current contents of the system clip board.
 * 
 * @param {PasteCallback} callback The contents of the system clip board are passed to the callback as the second parameter.
 */
export declare function paste(callback: PasteCallback): void;
