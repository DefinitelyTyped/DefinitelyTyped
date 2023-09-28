import validate = require("swe-validation");

const corporateId = validate.cin(5500123456);
const personalId = validate.ssn(192301120123);
