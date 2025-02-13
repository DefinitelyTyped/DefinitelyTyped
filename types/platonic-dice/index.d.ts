export as namespace platonicDice;

/**
 * Represents the platonicDice module.
 */
interface PlatonicDice {
    /**
    * Rolls a single die, applying advantage/disadvantage if provided.
    * @param {DieType} dieType - The type of die.
    * @param {RollType} [rollType] - Advantage/Disadvantage rolling.
    * @returns {number} - The roll result.
    */
    rollDie(dieType: DieType, rollType?: RollType): number;

    /**
    * Rolls a die based on the given type and optional parameters.
    * @param {DieType} dieType - The type of die to roll.
    * @param {Object} [options] - Optional parameters.
    * @param {RollType} [options.rollType] - Advantage/Disadvantage rolling.
    * @param {number} [options.count=1] - Number of dice to roll.
    * @returns {number | number[]} - A single roll result or an array of results.
    */
    rollDice(dieType: DieType, options?: { rollType?: RollType; count?: number }): number | number[];

    /**
     * Rolls a single modified die by applying a modifier function.
     * @param {DieType} dieType - The type of die to roll.
     * @param {Function} modifier - Function to modify the roll.
     * @param {RollType} [rollType] - Advantage/Disadvantage rolling.
     * @returns {{ base: number, modified: number }} - The base and modified results.
     */
    rollModDie(
        dieType: DieType,
        modifier: (roll: number) => number,
        rollType?: RollType
    ): { base: number; modified: number };

    /**
     * Rolls multiple modified dice by applying a modifier function.
     * @param {DieType} dieType - The type of die to roll.
     * @param {Function} modifier - Function to modify the roll.
     * @param {Object} [options] - Optional parameters.
     * @param {RollType} [options.rollType] - Advantage/Disadvantage rolling.
     * @param {number} [options.count=1] - Number of dice to roll.
     * @returns {{ base: number[], modified: number[] } | { base: number, modified: number }}
     *          - A single result if `count === 1`, or an array of results if `count > 1`.
     */
    rollModDice(
        dieType: DieType,
        modifier: (roll: number) => number,
        options?: { rollType?: RollType; count?: number }
    ): { base: number[]; modified: number[] } | { base: number; modified: number };

    /**
     * Rolls a die and determines success or failure based on a target number list.
     * @param {DieType} dieType - The type of die to roll.
     * @param {number[]} targets - List of successful roll values.
     * @param {Object} [options] - Optional parameters.
     * @param {Function} [options.successOutcome=() => Outcome.Success] - Function for success.
     * @param {Function} [options.failureOutcome=() => Outcome.Failure] - Function for failure.
     * @returns {{ roll: number, outcome: string }} - The roll result and its outcome.
     */
    rollTargetDie(
        dieType: DieType,
        targets: number[],
        options?: {
            successOutcome?: (roll: number) => Outcome;
            failureOutcome?: (roll: number) => Outcome;
        }
    ): { roll: number; outcome: Outcome };

    /**
     * Rolls a die and determines the outcome based on test conditions.
     * @param {DieType} dieType - The type of die to roll.
     * @param {number} target - Minimum roll required for success.
     * @param {Object} [options] - Optional parameters.
     * @param {number} [options.critical_success] - Threshold for critical success.
     * @param {number} [options.critical_failure] - Threshold for critical failure.
     * @param {Function} [options.modifier] - Function to modify the roll.
     * @returns {{ base: number, modified: number, outcome: string }} - The roll result and its outcome.
     */
    rollTestDie(
        dieType: DieType,
        target: number,
        options?: {
            critical_success?: number;
            critical_failure?: number;
            modifier?: (roll: number) => number;
        }
    ): { base: number; modified: number; outcome: Outcome };

    Die: typeof Die;
    TargetDie: typeof TargetDie;
    CustomDie: typeof CustomDie;
    ModifiedDie: typeof ModifiedDie;
    TestConditions: typeof TestConditions;
    TestDie: typeof TestDie;
    DieType: typeof DieType;
    RollType: typeof RollType;
    Outcome: typeof Outcome;
}

/**
 * Enum for different types of dice.
 */
export enum DieType {
    D4 = "d4",
    D6 = "d6",
    D8 = "d8",
    D10 = "d10",
    D12 = "d12",
    D20 = "d20",
}

/**
 * Enum for different roll types.
 */
export enum RollType {
    Advantage = "advantage",
    Disadvantage = "disadvantage",
}

/**
 * Enum for possible roll outcomes.
 */
export enum Outcome {
    Success = "success",
    Failure = "failure",
    Critical_Success = "critical_success",
    Critical_Failure = "critical_failure",
}

/**
 * Represents a standard die.
 */
export class Die {
    /**
     * @param {DieType} type - The type of die.
     */
    constructor(type: DieType);
    protected _type: DieType;
    protected _result: number | null;
    protected _history: number[];

    roll(rollType?: RollType): number;
    get result(): number | null;
    get type(): DieType | string;
    get history(): number[];
    report(verbose?: boolean): object;
    toJSON(verbose?: boolean): string;
}

/**
 * Represents a Target Die that determines success/failure based on matching numbers.
 */
export class TargetDie extends Die {
    /**
     * @param {DieType} type - The type of die.
     * @param {number[]} targetValues - The target conditions (array of successful values).
     */
    constructor(type: DieType, targetValues: number[]);
    private _targetValues: number[];
    private _outcomeHistory: Outcome[];

    roll(): number;
    getHistory(): Array<{ roll: number; outcome: Outcome }>;
    getLastOutcome(): Outcome | null;
    report(verbose?: boolean): object;
}

/**
 * Represents a fully customizable die where each face has a different effect.
 */
export class CustomDie extends Die {
    /**
     * @param {DieType} type - The die type.
     * @param {Object.<number, function(): (number|string)>} faceMappings - Mapping of faces to outcomes.
     * @param {function(): (number|string)} [defaultOutcome] - Default outcome if a roll isn't mapped.
     */
    constructor(
        type: DieType,
        faceMappings: Record<number, () => number | string>,
        defaultOutcome?: () => number | string
    );
    private _faceMappings: Record<number, () => number | string>;
    private _defaultOutcome?: () => number | string;
    private _outcome: number | string | null;
    private _outcomeHistory: (number | string | null)[];

    roll(rollType?: RollType): number;
    roll(): number | string | null;
    getOutcome(): number | string | null;
    getOutcomeHistory(): (number | string | null)[];

    get type(): DieType | string;
    report(verbose?: boolean): object;
}

/**
 * Represents a Die that supports result modification.
 */
export class ModifiedDie extends Die {
    /**
     * @param {DieType} type - The type of die.
     * @param {Function} modifier - The modifier function to apply.
     */
    constructor(type: DieType, modifier: (roll: number) => number);
    private _modifier: (roll: number) => number;
    private _modifiedResult: number | null;
    private _modifiedHistory: number[];

    roll(rollType?: RollType): number;
    set modifier(newModifier: (roll: number) => number);
    get result(): number | null;
    get modifiedHistory(): number[];
    report(verbose?: boolean): object;

    get type(): DieType | string;
}

/**
 * Represents conditions for a test-based roll.
 */
export class TestConditions {
    constructor(target: number, critical_success?: number, critical_failure?: number);
    target: number;
    critical_success?: number;
    critical_failure?: number;
}

export class TestDie extends ModifiedDie {
    /**
     * @param {number} target - The minimum value required for success.
     * @param {number} [critical_success] - Rolls equal to or above this count as a critical success.
     * @param {number} [critical_failure] - Rolls equal to or below this count as a critical failure.
     */
    constructor(type: DieType, conditions: TestConditions, modifier?: (roll: number) => number);
    private _conditions: TestConditions;
    private _outcomeHistory: Outcome[];

    roll(): number;
    getLastOutcome(): Outcome | null;
    getOutcomeHistory(): Outcome[];
}

/**
 * The main platonicDice object.
 */
declare const platonicDice: PlatonicDice;

export = platonicDice;
