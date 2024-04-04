import { fake } from "mokapi/faker";

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
