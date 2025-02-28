import platonicDice = require("platonic-dice");
import * as pd from "platonicDice";

// Test basic dice rolls
const singleRoll: number = platonicDice.rollDie(platonicDice.DieType.D20);
const advantageRoll: number = platonicDice.rollDie(platonicDice.DieType.D20, platonicDice.RollType.Advantage);
const multipleRolls: number[] | number = platonicDice.rollDice(platonicDice.DieType.D6, { count: 3 });

// Test modified rolls
const modifiedRoll = platonicDice.rollModDie(platonicDice.DieType.D10, (roll) => roll + 2);
const modifiedMultiRoll = platonicDice.rollModDice(platonicDice.DieType.D8, (roll) => roll * 2, { count: 2 });

// Test target dice
const targetDieRoll = platonicDice.rollTargetDie(platonicDice.DieType.D6, [1, 6]);

// Test test die with conditions
const testDieRoll = platonicDice.rollTestDie(platonicDice.DieType.D20, 10, { critical_success: 20, critical_failure: 1 });

// Verify enums
const dieType: pd.DieType = platonicDice.DieType.D12;
const rollType: pd.RollType = platonicDice.RollType.Disadvantage;
const outcomeType: pd.Outcome = platonicDice.Outcome.Success;

// Test Die class
const die = new platonicDice.Die(platonicDice.DieType.D20);
die.roll();
const dieResult: number | null = die.result;
const dieHistory: number[] = die.history;
const dieReport = die.report(true);

// Test TargetDie
const targetDie = new platonicDice.TargetDie(platonicDice.DieType.D6, [2, 4, 6]);
targetDie.roll();
const targetOutcomeHistory = targetDie.getHistory();

// Test CustomDie
const customDie = new platonicDice.CustomDie(platonicDice.DieType.D8, { 1: () => "fail", 8: () => "win" }, () => "neutral");
customDie.roll();
const customOutcome = customDie.getOutcome();
const customHistory = customDie.getOutcomeHistory();

// Test ModifiedDie
const modDie = new platonicDice.ModifiedDie(platonicDice.DieType.D10, (roll) => roll - 1);
modDie.roll();
const modDieResult = modDie.result;

// Test TestDie
const testConditions = new platonicDice.TestConditions(10, 18, 2);
const testDie = new platonicDice.TestDie(platonicDice.DieType.D20, testConditions);
testDie.roll();
const lastOutcome = testDie.getLastOutcome();
const outcomeHistory = testDie.getOutcomeHistory();

console.log("All tests passed if no TypeScript errors occur.");
