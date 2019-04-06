// Type definitions for array-move 1.0
// Project: https://github.com/sindresorhus/array-move
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = arrayMove;

/**
 * Move an array item to a different position.
 *
 * @param from Index of item to move. If negative, it will begin that many elements from the end.
 * @param to Index of where to move the item. If negative, it will begin that many elements from the end.
 * @returns A new array with the item moved to the new position.
 */
declare function arrayMove<T extends any[]>(input: T, from: number, to: number): T;

declare namespace arrayMove {
    /**
     * Moves the item to the new position in the input array.
     *
     * Useful for huge arrays where absolute performance is needed.
     *
     * @param from Index of item to move. If negative, it will begin that many elements from the end.
     * @param to Index of where to move the item. If negative, it will begin that many elements from the end.
     */
    function mut(input: any[], from: number, to: number): void;
}
