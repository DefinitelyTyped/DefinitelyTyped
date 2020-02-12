import indefinite = require("indefinite");

const anApple = indefinite("apple"); // "an apple"
const aBanana = indefinite('banana'); // "a banana"
const AnApple = indefinite('apple', { capitalize: true }); // "An apple"
const anEight = indefinite("8"); // "an 8"
const anEightAsNumber = indefinite(8); // "an 8"
const a1892 = indefinite("1892"); // "a 1892" -> read "a one thousand eight hundred ninety-two"
const a1892AsColloquial = indefinite("1892", { numbers: "colloquial" }); // "an 1892" -> read "an eighteen ninety-two"
