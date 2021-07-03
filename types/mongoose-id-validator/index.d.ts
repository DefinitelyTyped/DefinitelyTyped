// Type definitions for mongoose-id-validator 0.6
// Project: https://github.com/CampbellSoftwareSolutions/mongoose-id-validator
// Definitions by: Kerollos Magdy <https://github.com/kerolloz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

import { Schema, Connection } from 'mongoose';

interface MongooseIdValidatorOptions {
    /* Optional, custom validation message with {PATH} being replaced
     * with the relevant schema path that contains an invalid
     * document ID.
     */
    message?: string;

    /* Optional, mongoose connection object to use if you are
     * using multiple connections in your application.
     *
     * Defaults to built-in mongoose connection if not specified.
     */
    connection?: Connection;

    /* Optional, applies to validation of arrays of ID references only. Set
     * to true if you sometimes have the same object ID reference
     * repeated in an array. If set, the validator will use the
     * total of unique ID references instead of total number of array
     * entries when checking the database.
     *
     * Defaults to false
     */
    allowDuplicates?: boolean;
}

declare function mongooseIdValidator(schema: Schema, options?: MongooseIdValidatorOptions): void;

export = mongooseIdValidator;
