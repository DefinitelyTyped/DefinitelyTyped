import DiscontinuousRange = require("discontinuous-range");

// constructors
const rangeOne: DiscontinuousRange = new DiscontinuousRange(3);
const rangeTwo: DiscontinuousRange = new DiscontinuousRange(3, 5);

// add
const resultOne: DiscontinuousRange = rangeOne.add(6, 10);
const resultTwo: DiscontinuousRange = rangeTwo.add(11);
const resultThree: DiscontinuousRange = rangeOne.add(rangeTwo);

// subtract
const resultFour: DiscontinuousRange = rangeOne.subtract(7, 8);
const resultFive: DiscontinuousRange = rangeTwo.subtract(11);
const resultSix: DiscontinuousRange = rangeOne.subtract(rangeTwo);

// index
const entry: number | null = rangeOne.index(1);

// toString
const stringified: string = rangeOne.toString();

// clone
const rangeThree: DiscontinuousRange = rangeOne.clone();
