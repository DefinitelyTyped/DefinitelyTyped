import { computeScores, isZalgo, clean } from "unzalgo";

// This method is expected to return the ratio of Zalgo characters, which will be higher in the first test.
computeScores("T͘H͈̩̬̺̩̭͇I͏̼̪͚̪͚S͇̬̺ ́E̬̬͈̮̻̕V҉̙I̧͖̜̹̩̞̱L͇͍̝ ̺̮̟̙̘͎U͝S̞̫̞͝E͚̘͝R IṊ͍̬͞P̫Ù̹̳̝͓̙̙T̜͕̺̺̳̘͝"); // $ExpectType number[]
computeScores("THIS EVIL USER INPUT"); // $ExpectType number[]

// This method is expected to return a boolean which would be true in the first test and false in the second one, given the default treshold of 0.55
isZalgo("T͘H͈̩̬̺̩̭͇I͏̼̪͚̪͚S͇̬̺ ́E̬̬͈̮̻̕V҉̙I̧͖̜̹̩̞̱L͇͍̝ ̺̮̟̙̘͎U͝S̞̫̞͝E͚̘͝R IṊ͍̬͞P̫Ù̹̳̝͓̙̙T̜͕̺̺̳̘͝", 0.6); // $ExpectType boolean
isZalgo("THIS EVIL USER INPUT", 0.6); // $ExpectType boolean

// This method is expected to clean the first string and return the second one, leaving the second one exactly as it is
clean("T͘H͈̩̬̺̩̭͇I͏̼̪͚̪͚S͇̬̺ ́E̬̬͈̮̻̕V҉̙I̧͖̜̹̩̞̱L͇͍̝ ̺̮̟̙̘͎U͝S̞̫̞͝E͚̘͝R IṊ͍̬͞P̫Ù̹̳̝͓̙̙T̜͕̺̺̳̘͝", 0.7); // $ExpectType string
clean("THIS EVIL USER INPUT", 0.7); // $ExpectType string
