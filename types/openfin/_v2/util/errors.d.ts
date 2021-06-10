export interface ErrorPlainObject {
    stack: string;
    message: string;
    toString(): string;
}
/**
 * This function converts JS errors into plain objects
 */
export declare function errorToPOJO(error: Error): ErrorPlainObject;
