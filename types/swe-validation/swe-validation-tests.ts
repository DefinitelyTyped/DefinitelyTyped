import validate = require("swe-validation");

let corporateId = validate.cin(5500123456);
let personalId = validate.ssn(192301120123);
