// Type definitions for esm-utils 2.0
// Project: https://github.com/fisker/esm-utils
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export type JsonObject = {[Key in string]?: JsonValue};
export type JsonArray = JsonValue[];
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

export default function create(importMeta: ImportMeta): {
    filename: string;
    dirname: string;
    require: typeof require;
    json: {
        load(file: string): Promise<JsonValue>;
        loadSync(file: string): JsonValue;
    };
    __filename: string;
    __dirname: string;
};
