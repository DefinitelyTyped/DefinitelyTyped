import { fake, findByName, JSONSchema, RootName, Schema } from "mokapi/faker";

// @ts-expect-error
fake();
// @ts-expect-error
fake(1);
// @ts-expect-error
fake("");
fake({});
// @ts-expect-error
fake({ type: 1 });
// @ts-expect-error
fake({ type: "" });
fake({ type: "string" });
fake({ type: "string", format: "date" });
fake({ type: "string", pattern: "^\d{3}-\d{2}-\d{4}$" });
fake({ type: "object", required: ["foo"] });
fake({ type: "array", items: {} });
fake({ type: "array", items: { type: "string" } });
fake({ type: "array", minItems: 1 });
fake({ type: "array", maxItems: 2 });
fake({ type: "number", minimum: 2 });
fake({ type: "number", maximum: 2 });
fake({ type: "number", exclusiveMinimum: true });
fake({ type: "number", exclusiveMaximum: true });
fake({ type: "object", enum: [{}, { foo: "bar" }] });
fake({ anyOf: [{ type: "string" }, { type: "number" }] });
fake({ oneOf: [{ type: "string" }, { type: "number" }] });
fake({ allOf: [{ type: "object" }, { type: "object" }] });
fake({ shuffleItems: true });
fake({ uniqueItems: true });

var s: JSONSchema = {};
s.type = "array";
s.type = ["integer", "string"];
s.enum = [1, 2, 3];
s.const = 12;
// @ts-expect-error
s.examples = {};
s.examples = [{}];
s.default = "foo";
// @ts-expect-error
s.multipleOf = "";
s.multipleOf = 3;
s.minimum = 1.2;
s.exclusiveMinimum = 1.2;
s.maximum = 1.2;
s.exclusiveMaximum = 12;
s.minLength = 5;
s.maxLength = 10;
s.pattern = "foo";
s.format = "foo";
// @ts-expect-error
s.items = [];
s.items = { type: "string" };
s.minItems = 5;
s.maxItems = 10;
s.uniqueItems = true;
// @ts-expect-error
s.properties = [];
// @ts-expect-error
s.properties = { name: 12 };
s.properties = { name: { type: "string" } };
s.maxProperties = 5;
s.minProperties = 5;
s.required = ["foo"];
s.additionalProperties = true;
s.additionalProperties = { type: "string" };
s.allOf = [{ type: "string" }];
s.anyOf = [{ type: "string" }];
s.oneOf = [{ type: "string" }];

var s1: Schema = {};
s1.type = "array";
s1.type = ["integer", "string"];
s1.enum = [1, 2, 3];
s1.minimum = 1.2;
s1.exclusiveMinimum = 1.2;
s1.maximum = 1.2;
s1.exclusiveMaximum = 12;
s1.minLength = 5;
s1.maxLength = 10;
s1.pattern = "foo";
s1.format = "foo";
// @ts-expect-error
s1.items = [];
s1.items = { type: "string" };
s1.minItems = 5;
s1.maxItems = 10;
s1.uniqueItems = true;
// @ts-expect-error
s1.properties = [];
// @ts-expect-error
s1.properties = { name: 12 };
s1.properties = { name: { type: "string" } };
s1.required = ["foo"];
s1.additionalProperties = true;
s1.additionalProperties = { type: "string" };
s1.allOf = [{ type: "string" }];
s1.anyOf = [{ type: "string" }];
s1.oneOf = [{ type: "string" }];

const node = findByName(RootName);
// @ts-expect-error
node.append({});
node.append({
    name: "foo",
    test: () => true,
    fake: () => {},
});
node.append({
    name: "foo",
    test: (r) => {
        r.path[0].name;
        r.path[0].schema.type === "integer";
        r.last().name;
        r.lastName() === "";
        r.lastSchema().type === "string";
        return true;
    },
    fake: () => {},
});
node.insert(0, {
    name: "foo",
    test: () => true,
    fake: () => {},
});
node.remove("foo");
node.removeAt(0);
