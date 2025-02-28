// Enums for die types, roll types, and outcomes
export enum DieType {
    D4 = "d4",
    D6 = "d6",
    D8 = "d8",
    D10 = "d10",
    D12 = "d12",
    D20 = "d20",
}

export enum RollType {
    Advantage = "advantage",
    Disadvantage = "disadvantage",
}

export enum Outcome {
    Success = "success",
    Failure = "failure",
    Critical_Success = "critical_success",
    Critical_Failure = "critical_failure",
}

// Interface for platonicDice module
export interface PlatonicDice {
    rollDie(dieType: DieType, rollType?: RollType): number;
    rollDice(dieType: DieType, options?: { rollType?: RollType; count?: number }): number | number[];
    rollModDie(dieType: DieType, modifier: (roll: number) => number, rollType?: RollType): { base: number; modified: number };
    rollModDice(dieType: DieType, modifier: (roll: number) => number, options?: { rollType?: RollType; count?: number }): { base: number[]; modified: number[] } | { base: number; modified: number };
    rollTargetDie(dieType: DieType, targets: number[], options?: { successOutcome?: (roll: number) => Outcome; failureOutcome?: (roll: number) => Outcome }): { roll: number; outcome: Outcome };
    rollTestDie(dieType: DieType, target: number, options?: { critical_success?: number; critical_failure?: number; modifier?: (roll: number) => number }): { base: number; modified: number; outcome: Outcome };

    Die: typeof Die;
    CustomDie: typeof CustomDie;
    TargetDie: typeof TargetDie;
    ModifiedDie: typeof ModifiedDie;
    TestDie: typeof TestDie;
    FaceOutcomeMapping: typeof FaceOutcomeMapping;
    TestConditions: typeof TestConditions;
}

// Class for standard die
export class Die {
    constructor(type: DieType);
    protected _type: DieType;
    protected _result: number | null;
    protected _history: number[];

    roll(rollType?: RollType): number | string | null;
    get result(): number | null;
    get type(): DieType;
    get history(): number[];
    report(verbose?: boolean): object;
    toJSON(verbose?: boolean): string;
}

// Class for custom die
export class CustomDie extends Die {
    constructor(type: DieType, faceMappings: Record<number, () => number | string>, defaultOutcome?: () => number | string);
    private _faceMappings: Record<number, () => number | string>;
    private _defaultOutcome?: () => number | string;
    private _outcome: number | string | null;
    private _outcomeHistory: (number | string | null)[];

    roll(): number | string | null;
    getOutcome(): number | string | null;
    getOutcomeHistory(): (number | string | null)[];
    get type(): DieType;
    report(verbose?: boolean): object;
}

// Class for modified die
export class ModifiedDie extends Die {
    constructor(type: DieType, modifier: (roll: number) => number);
    private _modifier: (roll: number) => number;
    private _modifiedResult: number | null;
    private _modifiedHistory: number[];

    roll(rollType?: RollType): number;
    set modifier(newModifier: (roll: number) => number);
    get result(): number | null;
    get modifiedHistory(): number[];
    report(verbose?: boolean): object;
    get type(): DieType;
}

// Class for test conditions
export class TestConditions {
    constructor(target: number, critical_success?: number, critical_failure?: number);
    target: number;
    critical_success?: number;
    critical_failure?: number;
}

// Class for test die
export class TestDie extends ModifiedDie {
    constructor(type: DieType, conditions: TestConditions, modifier?: (roll: number) => number);
    private _conditions: TestConditions;
    private _outcomeHistory: Outcome[];

    roll(): number;
    getLastOutcome(): Outcome | null;
    getOutcomeHistory(): Outcome[];
}

// Class for target die
export class TargetDie extends Die {
    constructor(type: DieType, targetValues: number[]);
    private _targetValues: number[];
    private _outcomeHistory: Outcome[];

    roll(): number;
    getHistory(): Array<{ roll: number; outcome: Outcome }>;
    getLastOutcome(): Outcome | null;
    report(verbose?: boolean): object;
}

// Interface for face-to-outcome mappings in CustomDie
export class FaceOutcomeMapping {
    default?: (face: number) => number | string;
    mappings: Record<number, (face: number) => number | string>;
}

// Export the platonicDice module object
export const platonicDice: PlatonicDice;
