/// <reference types="node" />

import { EventEmitter } from "events";

interface Knex {
    client: any;
}

declare namespace Knex {
    interface Sql {
        method: string;
        options: any;
        bindings: any;
        sql: string;
        toNative(): any;
    }
}

export {};

/**
 * Attaches mocked client to knex instance
 *
 * @param knex initialized knex client
 */
export function mock(knex: Knex): void;

/**
 * Detaches mocked client from knex instance
 *
 * @param knex initialized knex client
 */
export function unmock(knex: Knex): void;

/**
 * Returns query Tracker instance
 */
export function getTracker(): Tracker;

/**
 * The tracker enables you to catch and respond to queries that occur during testing, see Test for more examples.
 */
export interface Tracker extends EventEmitter {
    /**
     * Whether tracking is currently enabled for this tracker
     */
    tracking: boolean;
    /**
     * The queries tracked so far by this tracker
     */
    queries: Queries;

    /**
     * Enables query tracking mock on mocked knex client
     */
    install(): void;

    /**
     * Disables query tracking mock on mocked knex client. Also resets 'step' counter.
     */
    uninstall(): void;

    /**
     * Install the tracker, run the callback, and uninstall the tracker.
     */
    wrap(cb: () => void): void;

    /**
     * Calls 'this.with()'
     */
    withMock(): void;

    /**
     * Add event listener for 'query' event. It gets esecuted for each query that should end up in database.
     * Instead of this callback gets executed and its up to you to assert queries and mock database responses.
     *
     * @param callback A function that gets executed on 'query' event.
     */
    on(
        event: "query",
        callback: (query: QueryDetails, step: number) => void,
    ): this;

    once(
        event: "query",
        callback: (query: QueryDetails, step: number) => void,
    ): this;
}

/**
 * The object containing queries that have been tracked so far.
 */
export interface Queries {
    /**
     * The queries tracked so far
     */
    queries: QueryDetails[];
    /**
     * The parent tracker that this 'queries' property belongs to
     */
    tracker: Tracker;

    /**
     * Reset this query tracker, clears the 'queries' array.
     */
    reset(): this;

    /**
     * If tracking is enabled, adds a 'mock' property to the 'query' argument with the following properties, among others:
     *  - response(response, options?) - calls 'resolve()' with the 'query' or the '{ response }' as a parameter depending on 'options.stream'
     *  - resolve(result) - calls 'query.response(result)'
     *  - reject(error) - calls back the 'reject' argument
     * Also emits a tracker 'query' event.
     * Else, calls 'resolve()' without arguments.
     */
    track<T extends object = object>(query: T, resolve: (query: T) => void, reject: (error: Error) => void): void;

    /**
     * Returns the first (oldest) tracked query, if any have been tracked.
     */
    first(): QueryDetails;

    /**
     * Returns the number of queries tracked so far.
     */
    count(): number;

    /**
     * Returns the last (most recent) tracked query, if any have been tracked.
     */
    last(): QueryDetails;

    /**
     * Return the tracked query at the given point in the list of queries tracked so far.
     * NOTE: this is a 1 based number! NOT a zero based index.
     */
    step(stepNum: number): QueryDetails;
}

/**
 * The object containing query details that is being sent to knex database dialect on query execution.
 * Object properties signature matches with knex toSQL() output with additional method returns(values).
 */
export interface QueryDetails extends Knex.Sql {
    transacting: boolean;

    /**
     * Function that needs to be called to mock database query result for knex.
     *
     * @param error The Error, string or instance of Error, which represents why the result was rejected
     */
    reject(error: Error | string): void;

    /**
     * Alias for 'response()'
     */
    resolve(result: any): void;

    /**
     * Function that needs to be called to mock database query result for knex.
     *
     * @param values An array of mock data to be returned by database. For Bookshelf this is mostly array of objects. Knex could return any type of data.
     */
    response(values: any, options?: QueryDetailsResponseOption): void;
}

export interface QueryDetailsResponseOption {
    /**
     * Is this a stream response, defaults to false
     */
    stream?: boolean;
}
