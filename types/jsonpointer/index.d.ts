// Type definitions for jsonpointer 4.0
// Project: https://github.com/janl/node-jsonpointer#readme
// Definitions by: Wessel Kuipers <https://github.com/WesselKuipers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface JSONPointer {
    /**
     * Looks up a JSON pointer in an object
     */
    get(object: object): any;

    /**
     * Set a value for a JSON pointer on object
     */
    set(object: object, value: any): void;
}

/**
 * Looks up a JSON pointer in an object
 */
export function get(object: object, pointer: string): any;

/**
 * Set a value for a JSON pointer on object
 */
export function set(object: object, pointer: string, value: any): void;

/**
 *  Builds a JSONPointer instance from a pointer value.
 */
export function compile(pointer: string): JSONPointer;
