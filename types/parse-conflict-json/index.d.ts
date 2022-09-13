// Type definitions for parse-conflict-json 1.1
// Project: https://github.com/npm/parse-conflict-json#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

/**
 * Parse a JSON string that has git merge conflicts, resolving if possible.
 * If the JSON is valid, it just does JSON.parse as normal.
 * If either side of the conflict is invalid JSON, then an error is thrown for that.
 */
declare function parseConflictJSON(
    text: string,
    reviver?: (this: any, key: string, value: any) => any,
    prefer?: parseConflictJSON.Prefer,
): any;

declare namespace parseConflictJSON {
    /**
     * returns true if the data looks like a conflicted diff file
     */
    function isDiff(text: string): boolean;

    /**
     * If prefer is set to theirs, then the vaules of theirs and ours are switched in the resolver function.
     * (Ie, we'll apply their changes on top of our object, rather than the other way around.)
     * Parse the conflicted file into 3 pieces: ours, theirs, and parent
     * Get the diff from parent to ours.
     * Apply each change of that diff to theirs.
     * If any change in the diff set cannot be applied (ie, because they changed an object into a non-object and we changed a field on that object),
     * then replace the object at the specified path with the object at the path in ours.
     */
    type Prefer = 'theirs' | 'ours';
}

export = parseConflictJSON;
