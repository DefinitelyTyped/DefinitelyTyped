import { knuthShuffle } from "knuth-shuffle";

knuthShuffle([4, 8, 15, 16, 23, 42]); // $ExpectType number[]
knuthShuffle(['a', 'b', 'c', 'd']); // $ExpectType string[]
