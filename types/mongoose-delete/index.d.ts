// Type definitions for mongoose-delete 0.5
// Project: https://github.com/dsanel/mongoose-delete
// Definitions by: Mochamad Arifin <https://github.com/ndunks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import mongoose = require('mongoose');

/**
 * This is interface helper to declaring model that using Soft Delete
 */
declare namespace MongooseDelete {
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
        | 'updateOne'
        | 'updateMany'
        | 'aggregate';
    interface SoftDeleteModel<T extends Omit<mongoose.Document, 'delete'>, QueryHelpers = {}>
        extends mongoose.Model<T, QueryHelpers> {
        /** Count only deleted documents */
        countDeleted: this["count"];
        /** Count all documents including deleted */
        countWithDeleted: this["count"];
        /** Count only deleted documents */
        countDocumentsDeleted: this["countDocuments"];
        /** Count all documents including deleted */
        countDocumentsWithDeleted: this["countDocuments"];
        /** Find only deleted documents */
        findDeleted: this["find"];
        /** Find all documents including deleted */
        findWithDeleted: this["find"];
        /** Find One only deleted documents */
        findOneDeleted: this["findOne"];
        /** Find One all documents including deleted */
        findOneWithDeleted: this["findOne"];
        /** Find One And Update only deleted documents */
        findOneAndUpdateDeleted: this["findOneAndUpdate"];
        /** Find One And Update all documents including deleted */
        findOneAndUpdateWithDeleted: this["findOneAndUpdate"];
        /** Update only deleted documents */
        updateDeleted: this["update"];
        /** Update all documents including deleted */
        updateWithDeleted: this["update"];
        /** Update One only deleted documents */
        updateOneDeleted: this["updateOne"];
        /** Update One all documents including deleted */
        updateOneWithDeleted: this["updateOne"];
        /** Update Many only deleted documents */
        updateManyDeleted: this["updateMany"];
        /** Update Many all documents including deleted */
        updateManyWithDeleted: this["updateMany"];
        /** Aggregate only deleted documents */
        aggregateDeleted: this["aggregate"];
        /** Aggregate all documents including deleted */
        aggregateWithDeleted: this["aggregate"];

        /**
         * Delete documents by conditions
         */
        delete(conditions?: any, deleteBy?: any, fn?: Callback<T, this>): mongoose.Query<ReturnType<mongoose.Model<T>['deleteMany']>, T, QueryHelpers>;

        /**
         * Restore documents by conditions
         */
        restore(conditions?: any, fn?: Callback<T, this>): mongoose.Query<ReturnType<mongoose.Model<T>['updateMany']>, T, QueryHelpers>;

        /**
         * Delete a document by ID
         */
        deleteById(
            id?: string | mongoose.Types.ObjectId | Callback<T, this>,
            deleteBy?: string | mongoose.Types.ObjectId | mongoose.Document | Callback<T, this>,
            fn?: Callback<T, this>,
        ): mongoose.Query<ReturnType<mongoose.Model<T>['deleteOne']>, T, QueryHelpers> & QueryHelpers;
    }

    interface SoftDeleteDocument
        extends Omit<mongoose.Document, 'delete'>,
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
        deletedAt?: Date | undefined;
        deletedBy?: mongoose.Types.ObjectId | string | mongoose.Document | undefined;
    }
}
interface Options {
    overrideMethods: boolean | 'all' | MongooseDelete.overridableMethods[];
    deletedAt: boolean;
    deletedBy: boolean;
    indexFields: boolean | 'all' | Array<keyof MongooseDelete.SoftDeleteInterface>;
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

declare function MongooseDelete(schema: mongoose.Schema, options?: Partial<Options>): void;
export = MongooseDelete;
