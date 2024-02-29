import detect = require("franc");

const testText = "This is an example sentence";
const testOptions = {
    minLength: 3,
    whitelist: ["eng"],
    blacklist: [],
};

detect(testText); // $ExpectType string
detect(testText, testOptions); // $ExpectType string

detect.all(testText); // $ExpectType [string, number][]
detect.all(testText, testOptions)[0]; // $ExpectType [string, number]
