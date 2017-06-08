// Type definitions for mongoose-sequence 3.0.2
// Project: https://github.com/ramiel/mongoose-sequence
// Definitions by: Linus Brolin <https://github.com/linusbrolin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="mongoose" />

declare module 'mongoose' {
  export interface SequenceOptions {
    inc_field: string;                  // The name of the field to increment. Mandatory, default is _id
    id?: string;                        // Id of the sequence. Is mandatory only for scoped sequences but its use is strongly encouraged.
    reference_fields?: Array<string>;   // The field to reference for a scoped counter. Optional
    disable_hooks?: boolean;            // If true, the counter will not be incremented on saving a new document. Default to false
    collection_name?: string;           // By default the collection name to mantain the status of the counters is counters. You can override it using this option
  }

  export interface SequenceDocument extends Document {
    setNext(sequenceId: string, callback: (err: any, res: SequenceDocument) => void): void;
  }

  export interface SequenceSchema extends Schema {
    plugin(
      plugin: (schema: SequenceSchema, options: SequenceOptions) => void,
      options: SequenceOptions
    ): this;

    // overload for the default mongoose plugin function
    plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this;
  }
}

declare module 'mongoose-sequence' {
  import mongoose = require('mongoose');
  var _: (schema: mongoose.Schema, options?: Object) => void;
  export = _;
}
