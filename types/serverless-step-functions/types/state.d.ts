import { Choice } from './choice';
import { Fail } from './fail';
import { Map } from './map';
import { Parallel } from './parallel';
import { Pass } from './pass';
import { Succeed } from './succeed';
import { Task } from './task';
import { Wait } from './wait';

export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject {
    [member: string]: JsonValue;
}
export interface JsonArray extends Array<JsonValue> {}
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-intrinsic-functions.html
export type IntrinsicFunction = string;
export type Resource = string | { 'Fn::GetAtt': [string, 'Arn'] } | { 'Fn::Join': [string, Resource[]] };

export type JsonPath = string; // constraint: starts with $.
export type NullableJsonPath = JsonPath | null;

export type PositiveInteger = number; // constraint: > 0 && < 99999999
export type Percentage = number; // constraint: > 0 && <= 100
export type Concurrency = number; // constraint: >= 0

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html
export type State = Task | Wait | Pass | Map | Choice | Parallel | Succeed | Fail;

export {};
