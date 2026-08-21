import JsonPointer = require("json-pointer");

// test type exports
type JsonObject = JsonPointer.JsonObject;
type Api = JsonPointer.Api;
type Wrapper = JsonPointer.Wrapper;
type BoundApi = JsonPointer.BoundApi;
type BoundWrapper = JsonPointer.BoundWrapper;
// @ts-expect-error
type DropFirst = JsonPointer.DropFirst;

JsonPointer.get({ example: "hello" }, "/example"); // $ExpectType any
JsonPointer.get({ example: "hello" }, ["example"]); // $ExpectType any
JsonPointer.set({ example: "hello" }, "/example", "world"); // $ExpectType Api
JsonPointer.set({ example: "hello" }, ["example"], "world"); // $ExpectType Api
JsonPointer.remove({ example: "hello" }, "/example"); // $ExpectType void
JsonPointer.remove({ example: "hello" }, ["example"]); // $ExpectType void
JsonPointer.dict({ example: "hello" }); // $ExpectType Record<string, any>
// $ExpectType Record<string, any>
JsonPointer.dict({ example: "hello" }, value => {
    value; // $ExpectType any
    return false;
});
// $ExpectType void
JsonPointer.walk({ example: "hello" }, (value, ref) => {
    value; // $ExpectType any
    ref; // $ExpectType string
});
// $ExpectType void
JsonPointer.walk(
    { example: "hello" },
    (value, ref) => {
        value; // $ExpectType any
        ref; // $ExpectType string
    },
    value => {
        value; // $ExpectType any
        return false;
    },
);
JsonPointer.has({ example: "hello" }, "/example"); // $ExpectType boolean
JsonPointer.has({ example: "hello" }, ["example"]); // $ExpectType boolean
JsonPointer.escape("/example"); // $ExpectType string
JsonPointer.unescape("/example"); // $ExpectType string
JsonPointer.parse("/example"); // $ExpectType string[]
JsonPointer.compile(["example"]); // $ExpectType string

JsonPointer({ example: "hello" }, "/example"); // $ExpectType any
JsonPointer({ example: "hello" }, ["example"]); // $ExpectType any
JsonPointer({ example: "hello" }, "/example", "world"); // $ExpectType Api
JsonPointer({ example: "hello" }, ["example"], "world"); // $ExpectType Api

const bound = JsonPointer({ example: "hello" });
bound("/example");
bound("/example"); // $ExpectType any
bound(["example"]); // $ExpectType any
bound("/example", "world"); // $ExpectType BoundApi
bound(["example"], "world"); // $ExpectType BoundApi
bound.get("/example"); // $ExpectType any
bound.get(["example"]); // $ExpectType any
bound.set("/example", "world"); // $ExpectType BoundApi
bound.set(["example"], "world"); // $ExpectType BoundApi
bound.remove("/example"); // $ExpectType void
bound.remove(["example"]); // $ExpectType void
bound.dict(); // $ExpectType Record<string, any>
// $ExpectType Record<string, any>
bound.dict(value => {
    value; // $ExpectType any
    return false;
});
// $ExpectType void
bound.walk((value, ref) => {
    value; // $ExpectType any
    ref; // $ExpectType string
});
// $ExpectType void
bound.walk(
    (value, ref) => {
        value; // $ExpectType any
        ref; // $ExpectType string
    },
    value => {
        value; // $ExpectType any
        return false;
    },
);
bound.has("/example"); // $ExpectType boolean
bound.has(["example"]); // $ExpectType boolean
