import * as hooks from "@mongoosejs/async-hooks";
import { Schema } from "mongoose";

function func(schema: Schema) {
    // $ExpectType void
    hooks(schema);
    hooks(schema, { mode: "scope" });
    // @ts-expect-error
    hooks(schema, { mode: "invalid" });
}
