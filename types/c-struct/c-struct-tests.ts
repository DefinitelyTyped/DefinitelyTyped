import { register, Schema, type } from "c-struct";

register(
    "foo",
    new Schema({
        baz: type.boolean,
    }),
);
