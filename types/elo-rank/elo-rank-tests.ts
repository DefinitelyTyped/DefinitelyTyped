import EloRank from "elo-rank";

const test = new EloRank();

test.getKFactor(); // $ExpectType number
test.getExpected(1200, 1500);  // $ExpectType number
test.updateRating(test.getExpected(1200, 1500), 1300, 1500); // $ExpectType number
