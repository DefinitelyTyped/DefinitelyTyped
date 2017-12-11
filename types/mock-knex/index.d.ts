// Type definitions for mock-knex 0.3
// Project: https://github.com/colonyamerican/mock-knex
// Definitions by: Jesse Zhang <https://github.com/jessezhang91>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as Knex from "knex";
import { EventEmitter } from "events";

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
     * Enables query tracking mock on mocked knex client
     */
    install(): void;

    /**
     * Disables query tracking mock on mocked knex client. Also resets 'step' counter.
     */
    uninstall(): void;

    /**
     * Add event listener for 'query' event. It gets esecuted for each query that should end up in database.
     * Instead of this callback gets executed and its up to you to assert queries and mock database responses.
     *
     * @param callback A function that gets executed on 'query' event.
     */
    on(event: 'query', callback: (query: QueryDetails, step: number) => void): this;
}

/**
 * The object containing query details that is being sent to knex database dialect on query execution.
 * Object properties signature matches with knex toSQL() output with additional method returns(values).
 */
export interface QueryDetails extends Knex.Sql {
    /**
     * Function that needs to be called to mock database query result for knex.
     *
     * @param error The Error, string or instance of Error, which represents why the result was rejected
     */
    reject(error: Error | string): void;

    /**
     * Function that needs to be called to mock database query result for knex.
     *
     * @param values An array of mock data to be returned by database. For Bookshelf this is mostly array of objects. Knex could return any type of data.
     */
    response(values: any[], options?: QueryDetailsResponseOption): void;
}

export interface QueryDetailsResponseOption {
    /**
     * Is this a stream response, defaults to false
     */
    stream: boolean;
}
