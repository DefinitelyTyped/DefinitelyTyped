import serialize = require("form-serialize");

const form1 = document.createElement("form");
serialize(form1, { hash: true }); // $ExpectType ResultHash

const form2 = document.createElement("form");
serialize(form2, { hash: false }); // $ExpectType string
