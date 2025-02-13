import { Die, CustomDie, DieType, RollType, Outcome, FaceOutcomeMapping, rollDie, rollDice, TargetDie, TestDie, ModifiedDie, TestConditions } from "platonic-dice";

// Test 1: Basic Die class creation and rolling
const d20 = new Die(DieType.D20);
const d20Result: number = d20.roll(); // TypeScript should enforce number
const d20History: number[] = d20.history; // TypeScript should enforce array of numbers

// Ensure type safety of the methods
const result: number = d20.result!; // This should always return a number if the die has been rolled

console.log("Test 1: Basic Die roll result:", d20Result);
console.log("Test 1: Die history:", d20History);

// Test 2: CustomDie class with string-based outcomes
const customDie = new CustomDie(DieType.D6, {
    1: () => "one",
    2: () => "two",
    3: () => "three"
}, () => "default");

const customResult: string | number | null = customDie.roll(); // TypeScript should allow string, number, or null
const customOutcome: string | number | null = customDie.getOutcome(); // Same here
const customOutcomeHistory: (string | number | null)[] = customDie.getOutcomeHistory(); // Should be an array of strings, numbers, or null

console.log("Test 2: CustomDie roll result:", customResult);
console.log("Test 2: CustomDie outcome:", customOutcome);
console.log("Test 2: CustomDie outcome history:", customOutcomeHistory);

// Test 3: RollDie function call and checking return type
const d12Roll = rollDie(DieType.D12);
const rollResult: number = d12Roll; // TypeScript should infer a number

console.log("Test 3: RollDie d12 result:", rollResult);

// Test 4: RollDice function call with count and rollType
const multipleRolls = rollDice(DieType.D10, { count: 3 });
const multipleResults: number | number[] = multipleRolls;

const advantageRoll = rollDie(DieType.D20, RollType.Advantage);
const disadvantageRoll = rollDie(DieType.D20, RollType.Disadvantage);

console.log("Test 4: Multiple Rolls result:", multipleResults);
console.log("Test 4: Advantage roll result:", advantageRoll);
console.log("Test 4: Disadvantage roll result:", disadvantageRoll);

// Test 5: Testing TargetDie class with outcome mapping
const targetValues = [10, 15, 20];
const targetDie = new TargetDie(DieType.D20, targetValues);

const targetRollResult: number = targetDie.roll();
const targetHistory: Array<{ roll: number; outcome: Outcome }> = targetDie.getHistory();
const lastOutcome: Outcome | null = targetDie.getLastOutcome();

console.log("Test 5: TargetDie roll result:", targetRollResult);
console.log("Test 5: TargetDie history:", targetHistory);
console.log("Test 5: Last TargetDie outcome:", lastOutcome);

// Ensure that we get the expected outcome from the roll
const targetOutcome: Outcome = targetHistory[0].outcome; // outcome is either Success, Failure, Critical_Success, Critical_Failure
console.log("Test 5: TargetDie outcome:", targetOutcome);

// Test 6: Testing TestDie class with custom conditions
const testConditions = new TestConditions(15, 20, 5); // target: 15, critical_success: 20, critical_failure: 5
const testDie = new TestDie(DieType.D20, testConditions);

const testDieRoll: number = testDie.roll();
const testDieOutcome: Outcome = testDie.getLastOutcome()!; // It should return an outcome after a roll
const testDieOutcomeHistory: Outcome[] = testDie.getOutcomeHistory(); // Array of all outcomes

console.log("Test 6: TestDie roll result:", testDieRoll);
console.log("Test 6: TestDie outcome:", testDieOutcome);
console.log("Test 6: TestDie outcome history:", testDieOutcomeHistory);

// Test 7: ModifiedDie class with a modifier function
const modifier: (roll: number) => number = (roll) => roll + 2; // Adding 2 to each roll result
const modifiedDie = new ModifiedDie(DieType.D10, modifier);

const modifiedDieRoll: number = modifiedDie.roll(); // The roll result after applying the modifier
const modifiedHistory: number[] = modifiedDie.modifiedHistory; // The history of the modified rolls

console.log("Test 7: ModifiedDie roll result:", modifiedDieRoll);
console.log("Test 7: ModifiedDie history:", modifiedHistory);

// Test 8: Testing the type of enums and values (DieType, RollType, Outcome)
const dieTypeTest: DieType = DieType.D6; // TypeScript should enforce a valid DieType value
const rollTypeTest: RollType = RollType.Advantage; // TypeScript should enforce a valid RollType value
const outcomeTest: Outcome = Outcome.Critical_Success; // TypeScript should enforce a valid Outcome value

// Ensure that each enum works as expected in a switch statement (type narrowing)
switch (rollTypeTest as RollType) {
    case RollType.Advantage:
        console.log("Test 8: Roll is Advantage");
        break;
    case RollType.Disadvantage:
        console.log("Test 8: Roll is Disadvantage");
        break;
}

console.log("Test 8: Enum values (DieType, RollType, Outcome):", dieTypeTest, rollTypeTest, outcomeTest);

// Test 9: Using FaceOutcomeMapping with CustomDie
const faceMapping: FaceOutcomeMapping = {
    default: (face: number) => `Face number is: ${face}`,
    mappings: {
        1: (face: number) => "Critical Failure",
        20: (face: number) => "Critical Success",
    }
};

const customFaceDie = new CustomDie(DieType.D20, {
    1: () => "Critical Failure", // Return value for face 1
    20: () => "Critical Success" // Return value for face 20
}, () => "Default outcome"); // Default outcome for other faces

const customFaceOutcome: string | number | null = customFaceDie.roll(); // TypeScript should infer string or number

console.log("Test 9: CustomFaceDie outcome:", customFaceOutcome);

// Test 10: Test conditions are correctly applied to TestDie class
const testConditions2 = new TestConditions(10, 18, 3);
const testDie2 = new TestDie(DieType.D20, testConditions2);

const testDie2Roll: number = testDie2.roll(); // TypeScript should enforce number
const testDie2Outcome: Outcome = testDie2.getLastOutcome()!; // Should have outcome (Success, Failure, etc.)
const testDie2OutcomeHistory: Outcome[] = testDie2.getOutcomeHistory(); // History of outcomes

console.log("Test 10: TestDie2 roll result:", testDie2Roll);
console.log("Test 10: TestDie2 outcome:", testDie2Outcome);
console.log("Test 10: TestDie2 outcome history:", testDie2OutcomeHistory);
