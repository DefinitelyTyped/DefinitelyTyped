import { Choice } from './choice';
import { Fail } from './fail';
import { Map } from './map';
import { Parallel } from './parallel';
import { Pass } from './pass';
import { Succeed } from './succeed';
import { Task } from './task';
import { Wait } from './wait';

type JsonPrimitive = string | number | boolean | null;
type JsonObject = { [member: string]: JsonValue };
interface JsonArray extends Array<JsonValue> {}
type JsonValue = JsonPrimitive | JsonObject | JsonArray;

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-intrinsic-functions.html
type IntrinsicFunction = string;
type Resource = string | { 'Fn::GetAtt': [string, 'Arn'] } | { 'Fn::Join': [string, Resource[]] };

type JsonPath = string; // constraint: starts with $.
type NullableJsonPath = JsonPath | null;

type PositiveInteger = number; // constraint: > 0 && < 99999999
type Percentage = number; // constraint: > 0 && <= 100
type Concurrency = number; // constraint: >= 0

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html
type State = Task | Wait | Pass | Map | Choice | Parallel | Succeed | Fail;

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-common-fields.html
type CommonState = {
    Type: string;
    Next?: string;
    End?: boolean;
    Comment?: string;
    InputPath?: JsonPath;
    OutputPath?: JsonPath;
};
