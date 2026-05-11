type RollTransformation = RollTransformationKey | [RollTransformationKey, number] | ((results: number[]) => number[]);

type RollTransformationKey = "sum" | "add" | "subtract" | "multiply" | "divide" | "best-of" | "worst-of";

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
    name: "InvalidInputError";
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
