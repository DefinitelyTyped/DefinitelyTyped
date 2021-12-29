// Type definitions for json-merge-patch
// Project: https://github.com/pierreinglebert/json-merge-patch
// Definitions by: Jimmy Leung <https://github.com/jimmy-leung-coherent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray;
interface JsonArray extends Array<JsonValue> {}
interface JsonObject extends Record<string, JsonValue> {}

interface Serializable {
    toJSON: () => JsonObject | null;
}

type ValidJson = JsonObject | Serializable | JsonArray | Array<JsonObject | Serializable>;


declare module "json-merge-patch" {
    function apply(target: ValidJson, patch: null): null;
    function apply(target: ValidJson, patch: ValidJson): ValidJson;
    function apply(target: ValidJson, patch: JsonValue): JsonValue;

    function generate(before: ValidJson, after: null): null;
    function generate(before: ValidJson, after: ValidJson): ValidJson | undefined;
    function generate(before: ValidJson, after: JsonValue): JsonValue;

    function merge(patch1: ValidJson, patch2: null): null;
    function merge(patch1: ValidJson, patch2: ValidJson): ValidJson;
}
