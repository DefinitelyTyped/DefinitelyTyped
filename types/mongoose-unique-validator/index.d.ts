// Type definitions for mongoose-unique-validator 1.0
// Project: https://github.com/blakehaswell/mongoose-unique-validator#readme
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

import { Schema } from "mongoose";

export = mongooseUniqueValidator;

declare function mongooseUniqueValidator(schema: Schema, options?: any): void;

declare namespace mongooseUniqueValidator {
}
