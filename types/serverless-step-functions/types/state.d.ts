import { Choice } from "./choice";
import { Fail } from "./fail";
import { Map } from "./map";
import { Parallel } from "./parallel";
import { Pass } from "./pass";
import { Succeed } from "./succeed";
import { Task } from "./task";
import { Wait } from "./wait";

export type JsonPrimitive = string | number | boolean | null;
export interface JsonObject {
    [member: string]: JsonValue;
}
export interface JsonArray extends Array<JsonValue> {}
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

/**
 * The States Language provides a small number of "Intrinsic Functions", constructs which look like functions in programming languages and can be used to help Payload Templates process the data going to and from Task Resources.
 * @see https://states-language.net/#intrinsic-functions
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-intrinsic-functions.html
 */
export type IntrinsicFunction = string;
export type Resource = string | { "Fn::GetAtt": [string, "Arn"] } | { "Fn::Join": [string, Resource[]] };

/**
 * A Path is a string, beginning with "$", used to identify components with a JSON text. The syntax is that of JsonPath.
 * When a Path begins with "$$", two dollar signs, this signals that it is intended to identify content within the Context Object. The first dollar sign is stripped, and the remaining text, which begins with a dollar sign, is interpreted as the JSONPath applying to the Context Object.
 *
 * @see https://states-language.net/#path
 */
export type Path = string;

/**
 * A Reference Path is a Path with syntax limited in such a way that it can only identify a single node in a JSON structure: The operators "@", ",", ":", and "?" are not supported - all Reference Paths MUST be unambiguous references to a single value, array, or object (subtree).
 *
 * @see https://states-language.net/#ref-paths
 */
export type ReferencePath = string;

export type PositiveInteger = number; // constraint: > 0 && < 99999999
export type Percentage = number; // constraint: > 0 && <= 100
export type Concurrency = number; // constraint: >= 0

/**
 * @see https://states-language.net/#state-types
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html
 */
export type State = Task | Wait | Pass | Map | Choice | Parallel | Succeed | Fail;

export type EndOrNext =
    | {
        Next: string;
        End?: never;
    }
    | {
        Next?: never;
        End: boolean;
    };
