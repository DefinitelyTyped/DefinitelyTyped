import { shuffle, unshuffle } from "shuffle-seed";

const originalArray = [1, "hello world", 132.81];
const shuffled1 = shuffle(originalArray, "randomseed");
const shuffled2 = shuffle(originalArray, "randomseed");
const unshuffled = unshuffle(shuffled2, "randomseed");
// shuffled1 === shuffled2
// unshuffled === originalArray
