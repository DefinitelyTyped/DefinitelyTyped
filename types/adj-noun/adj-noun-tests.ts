import adjNoun = require("adj-noun");

adjNoun.seed(123); // $ExpectType boolean
adjNoun.adjPrime(3); // $ExpectType boolean
adjNoun.nounPrime(7); // $ExpectType boolean
adjNoun(); // $ExpectType [string, string]
adjNoun.next(); // $ExpectType [string, string]
