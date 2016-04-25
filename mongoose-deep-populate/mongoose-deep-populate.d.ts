// Type definitions for mongoose-deep-populate 2.0.3
// Project: https://github.com/buunguyen/mongoose-deep-populate
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../mongoose/mongoose.d.ts" />


import { Mongoose, Schema } from 'mongoose';

export declare default function(mognoose: Mongoose): (schema: Schema, options: Object) => void;
