/**
 * Asynchronously replaces the current contents of the clip board with text.
 *
 * @param {T} content Takes either a string, array, object, or readable stream.
 * @return {Promise<T>} Resolves with the copied text when complete.
 */
export declare function copy<T>(content: T): Promise<T>;

export declare namespace copy {
    /**
     * Asynchronously replaces the current contents of the clip board with a JSON string of an object.
     *
     * @param {T} obj The object to copy as JSON.
     * @return {Promise<T>} Resolves with the copied object when complete.
     */
    function json<T>(obj: T): Promise<T>;
}

/**
 * Asynchronously returns the current contents of the system clip board.
 *
 * @return {Promise<string>} Resolves with the current contents of the system clip board.
 */
export declare function paste(): Promise<string>;
