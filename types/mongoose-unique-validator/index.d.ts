import { Schema } from "mongoose";

export = mongooseUniqueValidator;

declare function mongooseUniqueValidator(schema: Schema, options?: any): void;

declare namespace mongooseUniqueValidator {
}
