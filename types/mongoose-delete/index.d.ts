// Type definitions for mongoose-delete 0.5
// Project: https://github.com/dsanel/mongoose-delete
// Definitions by: Mochamad Arifin <https://github.com/ndunks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare module 'mongoose-delete' {
  import { Schema } from 'mongoose';
  import {
    SoftDeleteInterface,
    overridableMethods,
  } from 'mongoose-delete/interfaces';
  interface Options {
    overrideMethods: boolean | 'all' | Array<overridableMethods>;
    deletedAt: boolean;
    deletedBy: boolean;
    indexFields: boolean | 'all' | keyof SoftDeleteInterface;
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
  var plugin: (schema: Schema, options?: Partial<Options>) => void;
  export = plugin;
}

/**
 * This is interface helper to declaring model that using Soft Delete
 */
declare module 'mongoose-delete/interfaces' {
  import { Schema, Model, Types, Query, Document } from 'mongoose';
  type Callback<T, THIS = T> = (this: THIS, err: any, doc: T) => void;
  export type overridableMethods =
    | 'count'
    | 'countDocuments'
    | 'find'
    | 'findOne'
    | 'findOneAndUpdate'
    | 'update';
  export interface SoftDeleteModel<T extends Document, QueryHelpers = {}>
    extends Model<T, QueryHelpers> {
    /** Count only deleted documents */
    countDeleted: typeof Model.count;
    /** Count all documents including deleted */
    countWithDeleted: typeof Model.count;
    /** Find only deleted documents */
    findDeleted: typeof Model.find;
    /** Find all documents including deleted */
    findWithDeleted: typeof Model.find;
    /** Find One only deleted documents */
    findOneDeleted: typeof Model.findOne;
    /** Find One all documents including deleted */
    findOneWithDeleted: typeof Model.findOne;
    /** Find One And Update only deleted documents */
    findOneAndUpdateDeleted: typeof Model.findOneAndUpdate;
    /** Find One And Update all documents including deleted */
    findOneAndUpdateWithDeleted: typeof Model.findOneAndUpdate;
    /** Update only deleted documents */
    updateDeleted: typeof Model.update;
    /** Update all documents including deleted */
    updateWithDeleted: typeof Model.update;

    /**
     * Delete documents by conditions
     */
    delete(): Query<T> & QueryHelpers;
    delete(fn: { (err: any, result: any): void }): void;
    delete(conditions: any): Query<T> & QueryHelpers;
    delete(conditions: any, fn: Callback<T, this>): void;
    delete(conditions: any, deleteBy: any): Query<T> & QueryHelpers;
    delete(conditions: any, deleteBy: any, fn: Callback<T, this>): void;

    /**
     * Restore documents by conditions
     */
    restore(): Query<T> & QueryHelpers;
    restore(fn: { (err: any, result: any): void }): void;
    restore(conditions: any): Query<T> & QueryHelpers;
    restore(conditions: any, fn: Callback<T, this>): void;

    /**
     * Delete a document by ID
     */
    deleteById(id: string | Types.ObjectId): Query<T> & QueryHelpers;
    deleteById(id: string | Types.ObjectId, fn: Callback<T, this>): void;
    deleteById(
      id: string | Types.ObjectId,
      deleteBy: any,
    ): Query<T> & QueryHelpers;
    deleteById(
      id: string | Types.ObjectId,
      deleteBy: any,
      fn: Callback<T, this>,
    ): void;
  }
  export interface SoftDeleteDocument extends Document, SoftDeleteInterface {
    /** Soft delete this document */
    delete(): Promise<this>;
    delete(fn: Callback<this>): void;
    delete(deleteBy: string | Types.ObjectId): Promise<this>;
    delete(deleteBy: string | Types.ObjectId, fn: Callback<this>): void;
    restore(): Promise<this>;
    restore(fn: Callback<this>): void;
  }
  export interface SoftDeleteInterface {
    /** Soft deleted ? */
    deleted: boolean;
    deleteAt?: Date;
    deletedBy?: Types.ObjectId | any;
  }
}
