// Type definitions for mongoose-auto-increment 5.0.1
// Project: https://github.com/codetunnel/mongoose-auto-increment
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import { Connection, Schema, Mongoose } from 'mongoose';

/**
 * Initialize plugin by creating counter collection in database.
 */
declare function initialize(connection: Connection): void;

/**
 * The function to use when invoking the plugin on a custom schema.
 */
declare function plugin(schema: Schema, options: Object): void;
