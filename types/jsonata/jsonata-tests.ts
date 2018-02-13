import jsonata = require("jsonata");

const data = {
  example: [
    { value: 4 },
    { value: 7 },
    { value: 13 }
  ]
};

const expression = jsonata("$sum(example.value)");
const result = expression.evaluate(data);  // returns 24
