/// <reference path="jsonschema.d.ts" />
import { Validator, IJSONSchemaValidationError } from "jsonschema";

const v: Validator = new Validator();

const validationResults: { errors: Array<IJSONSchemaValidationError> } = v.validate("Smith", {"type": "string"});
