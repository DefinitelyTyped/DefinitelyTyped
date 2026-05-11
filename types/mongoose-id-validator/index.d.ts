import { Connection, Schema } from "mongoose";

interface MongooseIdValidatorOptions {
    /* Optional, custom validation message with {PATH} being replaced
     * with the relevant schema path that contains an invalid
     * document ID.
     */
    message?: string | undefined;

    /* Optional, mongoose connection object to use if you are
     * using multiple connections in your application.
     *
     * Defaults to built-in mongoose connection if not specified.
     */
    connection?: Connection | undefined;

    /* Optional, applies to validation of arrays of ID references only. Set
     * to true if you sometimes have the same object ID reference
     * repeated in an array. If set, the validator will use the
     * total of unique ID references instead of total number of array
     * entries when checking the database.
     *
     * Defaults to false
     */
    allowDuplicates?: boolean | undefined;
}

declare function mongooseIdValidator(schema: Schema, options?: MongooseIdValidatorOptions): void;

export = mongooseIdValidator;
