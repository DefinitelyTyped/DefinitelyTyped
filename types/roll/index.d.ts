// Type definitions for roll 1.2
// Project: https://github.com/troygoode/node-roll/
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type RollTransformation = RollTransformationKey | [RollTransformationKey, number] | ((results: number[]) => number[]);

type RollTransformationKey = 'sum' | 'add' | 'subtract' | 'multiply' | 'divide' | 'best-of' | 'worst-of';

interface RollObject {
    quantity: number;
    sides: number;
    transformations: RollTransformation[];
    toString: () => string;
}

interface RollOutput {
    input: RollObject;
    calculations: number[];
    rolled: number[];
    result: number;
}

declare class InvalidInputError extends Error {
    name: 'InvalidInputError';
}

declare class Roll {
    static InvalidInputError: InvalidInputError;

    constructor(seed?: () => number);

    /**
     * Validate user input
     */
    validate(input: string): boolean;

    /**
     * Parse a string into a roll object
     * @throws InvalidInputError
     */
    parse(input: string): {
        quantity: number;
        sides: number;
        transformations: RollTransformation[];
        toString: () => string;
    };

    /**
     * Roll based on a string or roll object
     */
    roll(input: string | RollObject): RollOutput;
}

export = Roll;
