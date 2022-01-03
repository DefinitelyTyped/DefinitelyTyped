// Type definitions for artillery 1.6
// Project: https://github.com/artilleryio/artillery
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import * as request from 'request';
import * as events from 'events';

export interface ScenarioContext { vars: {[key: string]: any}; }
export type Next = (err?: Error) => void;
export type ResponseRequest = request.ResponseRequest;
export type RequestResponse = request.RequestResponse;
export type EventEmitter = events.EventEmitter;
