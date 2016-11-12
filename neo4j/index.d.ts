// Type definitions for node-neo4j 2.0.0
// Project: https://github.com/thingdom/node-neo4j
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../request/index.d.ts"/>

declare module "neo4j" {
    import { Request } from "request";

    namespace neo4j {
        type CheckPasswordChangeNeededCallback = (error: any, changed: boolean) => void;
        type CreateConstraintCallback = (error: any, constraint: any) => void;
        type CypherCallback = (error: any, result: any) => void;
        type DoneCallback = (error: any) => void;
        type GetConstraintCallback = (error: any, constraints: any) => void;
        type GetIndexesCallback = (error: any, indexes: any) => void;
        type GetLabelCallback = (error: any, labels: any) => void;
        type GetPropertyKeysCallback = (error: any, keys: any) => void;
        type GetRelationshipTypesCallback = (error: any, types: any) => void;
        type HasConstraintCallback = (error: any, exists: boolean) => void;
        type HasIndexCallback = (error: any, exists: boolean) => void;
        type HttpCallback = (error: any, body: any) => void;
        type SaveCallback = (error: any, node: any) => void;

        /**
         * Authentication information.
         * @interface
         */
        export interface Authentication {
            /**
             * Password.
             * @type {string}
             */
            password: string;

            /**
             * Username.
             * @type {string}
             */
            username: string;
        }

        /**
         * Password options.
         * @interface
         */
        export interface ChangePasswordOptions {
            /**
             * Password.
             * @type {string}
             */
            password: string;
        }

        /**
         * Constraint options.
         * @interface
         */
        export interface ConstraintOptions {
            /**
             * Label.
             * @type {any}
             */
            label?: any;

            /**
             * Property.
             * @type {any}
             */
            property?: any;
        }

        /**
         * Cypher request options.
         * @interface
         */
        export interface CypherOptions {
            commit?: {};

            /**
             * Headers.
             * @type {Object}
             */
            headers?: {};
            lean?: {};

            /**
             * Parameters.
             * @type {Object}
             */
            params?: {};

            /**
             * Query.
             * @type {Object}
             */
            query?: {};
        }

        /**
         * Database options.
         * @interface
         */
        export interface GraphDatabaseOptions {
            /**
             * HTTP agent.
             * @type {any}
             */
            agent: any;

            /**
             * Authentication information.
             * @type {string|Authentication}
             */
            auth: string | Authentication;

            /**
             * HTTP headers.
             * @type {Object}
             */
            headers: {};

            /**
             * Proxy address.
             * @type {string}
             */
            proxy: string;

            /**
             * URL connection.
             * @type {string}
             */
            url: string;
        }

        /**
         * HTTP options.
         * @interface
         */
        export interface HttpOptions {
            /**
             * Headers.
             * @type {Object}
             */
            headers: {};

            /**
             * HTTP method.
             * @type {string}
             */
            method: string;

            /**
             * Path.
             * @type {string}
             */
            path: string;

            /**
             * Body.
             * @type {any}
             */
            body: any;

            /**
             * Raw.
             * @type {any}
             */
            raw: any;
        }

        /**
         * Index options.
         * @interface
         */
        export interface IndexOptions {
            /**
             * Label.
             * @type {any}
             */
            label?: any;

            /**
             * Property.
             * @type {any}
             */
            property?: any;
        }

        /**
         * Transaction.
         * @interface
         */
        export interface Transaction {
            expiresAt: Date;
            expiresIn: Date | number;

            commit(callback: DoneCallback): void;
            cypher(options: CypherOptions, callback: CypherCallback): Request;
            renew(callback: DoneCallback): void;
            rollback(callback: DoneCallback): void;
            state: string;
        }
    }

    /**
     * Database.
     * @class
     */
    export class GraphDatabase {
        /**
         * Constructor.
         * @constructor
         * @param {string} url A URL connection.
         */
        constructor(url: string);

        /**
         * Constructor.
         * @constructor
         * @param {GraphDatabaseOptions} options Connection options.
         */
        constructor(options: neo4j.GraphDatabaseOptions);

        /**
         * Agent.
         * @type {any}
         */
        agent: any;

        /**
         * Credentials.
         * @type {Authentication}
         */
        auth: neo4j.Authentication;

        /**
         * Headers.
         * @type {Object}
         */
        headers: {};

        /**
         * Proxy.
         * @type {any}
         */
        proxy: any;

        /**
         * URL connection.
         * @type {string}
         */
        url: string;

        /**
         * Makes multiple queries, across multiple network requests, all within a single transaction.
         * @return {Transaction} The transaction.
         */
        beginTransaction(): neo4j.Transaction;

        /**
         * Changes password.
         * @param {ChangePasswordOptions}   options     Options.
         * @param {DoneCallback}            callback    A callback.
         */
        changePassword(options: neo4j.ChangePasswordOptions, callback: neo4j.DoneCallback): void;

        /**
         * Checks if the password must be changed.
         * @param {CheckPasswordChangeNeededCallback} callback A callback.
         */
        checkPasswordChangeNeeded(callback: neo4j.CheckPasswordChangeNeededCallback): void;

        /**
         * Creates a constraint.
         * @param {ConstraintOptions}           options   Options.
         * @param {CreateConstraintCallback}    callback  A callback.
         */
        createConstraint(options: neo4j.ConstraintOptions, callback: neo4j.CreateConstraintCallback): void;

        /**
         * Makes simple, parametrized Cypher queries.
         * @param {CypherOptions} options Options.
         * @param {DoneCallback}            callback    A callback.
         */
        cypher(options: neo4j.CypherOptions, callback: neo4j.CypherCallback): Request;

        /**
         * Drops a constraint.
         * @param {ConstraintOptions}   options   Options.
         * @param {DoneCallback}        callback  A callback.
         */
        dropConstraint(options: neo4j.ConstraintOptions, callback: neo4j.DoneCallback): void;

        /**
         * Drop an index.
         * @param {IndexOptions}    options   Options.
         * @param {DoneCallback}    callback  A callback.
         */
        dropIndex(options: neo4j.IndexOptions, callback: neo4j.DoneCallback): void;

        /**
         * Gets constraints.
         * @param {ConstraintOptions}       options     Options or callback.
         * @param {GetConstraintCallback}   callback    A callback.
         */
        getConstraints(options: neo4j.ConstraintOptions, callback?: neo4j.GetConstraintCallback): void;

        /**
         * Gets indexes.
         * @param {GetIndexesCallback} callback A callback.
         */
        getIndexes(callback?: neo4j.GetIndexesCallback): void;

        /**
         * Gets indexes.
         * @param {IndexOptions}        options     Options.
         * @param {GetIndexesCallback}  callback    A callback.
         */
        getIndexes(options: neo4j.IndexOptions, callback: neo4j.GetIndexesCallback): void;

        /**
         * Get labels.
         * @param {GetLabelCallback} callback A callback.
         */
        getLabels(callback: neo4j.GetLabelCallback): void;

        /**
         * Gets property keys.
         * @param {GetPropertyKeysCallback} callback A callback.
         */
        getPropertyKeys(callback: neo4j.GetPropertyKeysCallback): void;

        /**
         * Gets relationship types.
         * @param {GetRelationshipTypesCallback} callback A callback.
         */
        getRelationshipTypes(callback: neo4j.GetRelationshipTypesCallback): void;

        /**
         * Determines if a constraint exists.
         * @param {ConstraintOptions}       options   Options.
         * @param {HasConstraintCallback}   callback  A callback.
         */
        hasConstraint(options: neo4j.ConstraintOptions, callback: neo4j.HasConstraintCallback): void;

        /**
         * Determines if an index exists.
         * @param {IndexOptions}       options   Options.
         * @param {HasIndexCallback}   callback  A callback.
         */
        hasIndex(options: neo4j.IndexOptions, callback: neo4j.HasIndexCallback): void;

        /**
         * Makes arbitrary HTTP request to the REST API.
         * @param {HttpOptions}     options     Options.
         * @param {HttpCallback}    callback    A callback.
         * @return {Request} The HTTP request.
         */
        http(options: neo4j.HttpOptions, callback: neo4j.HttpCallback): Request;
    }
}
