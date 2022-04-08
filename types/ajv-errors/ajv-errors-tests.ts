import Ajv from "ajv";
import AjvErrors = require("ajv-errors");

const ajv = new Ajv({ allErrors: true });
AjvErrors(ajv);
