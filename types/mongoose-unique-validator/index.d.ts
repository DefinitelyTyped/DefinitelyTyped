// Type definitions for mongoose-unique-validator 1.0
// Project: https://github.com/blakehaswell/mongoose-unique-validator#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import { Schema } from "mongoose";

export = mongooseUniqueValidator;

declare function mongooseUniqueValidator(schema: Schema, options?: any): void;

declare namespace mongooseUniqueValidator {
}
