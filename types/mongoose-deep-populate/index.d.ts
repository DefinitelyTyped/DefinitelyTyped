// Type definitions for mongoose-deep-populate 2.0.3
// Project: https://github.com/buunguyen/mongoose-deep-populate
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

import { Mongoose, Schema } from 'mongoose';

export default function (mongoose: Mongoose): (schema: Schema, options: Object) => void;
