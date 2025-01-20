import { Connection, Mongoose, Schema } from "mongoose";

/**
 * Initialize plugin by creating counter collection in database.
 */
declare function initialize(connection: Connection): void;

/**
 * The function to use when invoking the plugin on a custom schema.
 */
declare function plugin(schema: Schema, options: Object): void;
