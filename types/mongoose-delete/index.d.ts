// Type definitions for mongoose-delete 0.5
// Project: https://github.com/dsanel/mongoose-delete
// Definitions by: Mochamad Arifin <https://github.com/ndunks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import mongoose = require('mongoose');

/**
 * This is interface helper to declaring model that using Soft Delete
 */
declare namespace mongoose_delete {
    interface Callback<T, THIS = T> {
        (this: THIS, err: any, doc: T): void;
    }
    type overridableMethods =
        | 'count'
        | 'countDocuments'
        | 'find'
        | 'findOne'
        | 'findOneAndUpdate'
        | 'update'
        | 'updateMany'
        | 'aggregate';
    interface SoftDeleteModel<T extends mongoose.Document, QueryHelpers = {}>
        extends mongoose.Model<T, QueryHelpers> {
        /** Count only deleted documents */
        countDeleted: typeof mongoose.Model.count;
        /** Count all documents including deleted */
        countWithDeleted: typeof mongoose.Model.count;
        /** Count only deleted documents */
        countDocumentsDeleted: typeof mongoose.Model.countDocuments;
        /** Count all documents including deleted */
        countDocumentsWithDeleted: typeof mongoose.Model.countDocuments;
        /** Find only deleted documents */
        findDeleted: typeof mongoose.Model.find;
        /** Find all documents including deleted */
        findWithDeleted: typeof mongoose.Model.find;
        /** Find One only deleted documents */
        findOneDeleted: typeof mongoose.Model.findOne;
        /** Find One all documents including deleted */
        findOneWithDeleted: typeof mongoose.Model.findOne;
        /** Find One And Update only deleted documents */
        findOneAndUpdateDeleted: typeof mongoose.Model.findOneAndUpdate;
        /** Find One And Update all documents including deleted */
        findOneAndUpdateWithDeleted: typeof mongoose.Model.findOneAndUpdate;
        /** Update only deleted documents */
        updateDeleted: typeof mongoose.Model.update;
        /** Update all documents including deleted */
        updateWithDeleted: typeof mongoose.Model.update;
        /** Update Many only deleted documents */
        updateManyDeleted: typeof mongoose.Model.updateMany;
        /** Update Many all documents including deleted */
        updateManyWithDeleted: typeof mongoose.Model.updateMany;
        /** Aggregate only deleted documents */
        aggregateDeleted: typeof mongoose.Model.aggregate;
        /** Aggregate all documents including deleted */
        aggregateWithDeleted: typeof mongoose.Model.aggregate;

        /**
         * Delete documents by conditions
         */
        delete(conditions?: any, deleteBy?: any, fn?: Callback<T, this>): mongoose.Query<T> & QueryHelpers;

        /**
         * Restore documents by conditions
         */
        restore(conditions?: any, fn?: Callback<T, this>): mongoose.Query<T> & QueryHelpers;

        /**
         * Delete a document by ID
         */
        deleteById(
            id?: string | mongoose.Types.ObjectId | Callback<T, this>,
            deleteBy?: string | mongoose.Types.ObjectId | mongoose.Document | Callback<T, this>,
            fn?: Callback<T, this>,
        ): mongoose.Query<T> & QueryHelpers;
    }

    interface SoftDeleteDocument
        extends mongoose.Document,
        SoftDeleteInterface {
        /** Soft delete this document */
        delete(
            deleteBy?: string | mongoose.Types.ObjectId | Callback<this>,
            fn?: Callback<this>,
        ): Promise<this>;
        restore(fn?: Callback<this>): Promise<this>;
    }
    interface SoftDeleteInterface {
        /** Soft deleted ? */
        deleted?: boolean | undefined;
        deleteAt?: Date | undefined;
        deletedBy?: mongoose.Types.ObjectId | string | mongoose.Document | undefined;
    }
}
interface Options {
    overrideMethods: boolean | 'all' | mongoose_delete.overridableMethods[];
    deletedAt: boolean;
    deletedBy: boolean;
    indexFields: boolean | 'all' | Array<keyof mongoose_delete.SoftDeleteInterface>;
    validateBeforeDelete: boolean;

    /**
     * DeleteBy Schema type, equal to
     * ```
     * Schema({
     * deletedBy: {
     *  type: options.deletedByType
     *  }
     * })
     * ```
     * @default ObjectId
     */
    deletedByType: any;
}

declare function mongoose_delete(schema: mongoose.Schema, options?: Partial<Options>): void;
export = mongoose_delete;
